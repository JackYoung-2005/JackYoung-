"""
小红书加密参数服务器 - 基于 RedCrack 项目
提供 x-s 和 x-s-common 参数生成
"""
import hashlib
import json
import random
import time
import urllib.parse
import asyncio
import aiohttp
import uuid
from http.server import HTTPServer, BaseHTTPRequestHandler
import threading

# ========== RedCrack 配置常量 ==========
BASE64_TABLE = "ZmserbBoHQtNP+wOcza/LpngG8yJq42KWYj0DSfdikx3VT16IlUAFM97hECvuRX5"
X3_BASE64_TABLE = "MfgqrsbcyzPQRStuvC7mn501HIJBo2DEFTKdeNOwxWXYZap89+/A4UVLhijkl63G"
X3_PREFIX = "mns0301_"
LANGUAGE_VERSION = "4.3.5"
APP_ID = "xhs-pc-web"
OS_SYSTEM = "Windows"
ARTIFACT_VERSION = "6.12.3"
PLAT_FORM_CODE = 5
XOR_KEY = [113, 163, 2, 37, 119, 147, 39, 29, 221, 39, 59, 206, 227, 228, 185, 141, 157, 121, 53, 225, 218, 51, 245, 118, 94, 46, 168, 175, 182, 220, 119, 165, 26, 73, 157, 35, 182, 124, 32, 102, 0, 37, 134, 12, 191, 19, 212, 84, 13, 146, 73, 127, 88, 104, 108, 87, 78, 80, 143, 70, 225, 149, 99, 68, 243, 145, 57, 191, 79, 175, 34, 163, 238, 241, 32, 183, 146, 88, 20, 91, 47, 235, 81, 147, 182, 71, 134, 105, 150, 18, 152, 231, 155, 237, 202, 100, 110, 26, 105, 58, 146, 97, 84, 165, 167, 161, 189, 28, 240, 222, 219, 116, 47, 145, 122, 116, 122, 30, 56, 139, 35, 79, 34, 119, 81, 109, 183, 17, 96, 53, 67, 151, 48, 250, 97, 233, 130, 42, 14, 202, 123, 255, 114, 216]
RC4_KEY = b"xhswebmplfbt"
DES_KEY = "zbp30y86"

# ========== 基础编码函数 ==========
def triplet_to_base64(a, c):
    return c[(a >> 18) & 63] + c[(a >> 12) & 63] + c[(a >> 6) & 63] + c[a & 63]

def encode_chunk(a, e, r, c):
    d = []
    for f in range(e, r, 3):
        c_val = ((a[f] << 16) & 0xff0000) + ((a[f + 1] << 8) & 0xff00) + (a[f + 2] & 0xff)
        d.append(triplet_to_base64(c_val, c))
    return ''.join(d)

def b64_encode(a, table):
    c = table
    r = len(a)
    d = r % 3
    f = []
    s = 16383
    u = 0
    l = r - d
    while u < l:
        end = min(u + s, l)
        f.append(encode_chunk(a, u, end, c))
        u += s
    if d == 1:
        e = a[r - 1]
        f.append(c[e >> 2] + c[(e << 4) & 63] + "==")
    elif d == 2:
        e = (a[r - 2] << 8) + a[r - 1]
        f.append(c[e >> 10] + c[(e >> 4) & 63] + c[(e << 2) & 63] + "=")
    return ''.join(f)

def encode_utf8(a):
    result = []
    i = 0
    while i < len(a):
        c = a[i]
        if c == '%':
            hex_str = a[i+1:i+3]
            char_code = int(hex_str, 16)
            result.append(char_code)
            i += 3
        else:
            result.append(ord(c))
            i += 1
    return result

def random_hex(n):
    return ''.join(random.choices("abcdef0123456789", k=n))

# ========== x-s 加密 ==========
def u32_add(a, b):
    return (a + b) & 0xFFFFFFFF

def js_left_rotate(n, d):
    return ((n << d) | (n >> (32 - d))) & 0xFFFFFFFF

def diy_hasher(data: list) -> bytes:
    data_length = len(data)
    s1, s2, s3, s4 = (
        1831565813 ^ data_length,
        461845907 ^ (data_length << 8),
        2246822507 ^ (data_length << 16),
        3266489909 ^ (data_length << 24),
    )
    for i in range(0, len(data), 8):
        v0 = int.from_bytes(bytes(data[i:i+4]), byteorder="little")
        v1 = int.from_bytes(bytes(data[i+4:i+8]), byteorder="little")
        s1 = js_left_rotate(u32_add(s1, v0) ^ s3, 7)
        s2 = js_left_rotate(u32_add(s2 ^ v0, s4), 11)
        s3 = js_left_rotate(u32_add(s3, v1) ^ s1, 13)
        s4 = js_left_rotate(u32_add(s4 ^ v1, s2), 17)
    t1 = s1 ^ data_length
    t2 = t1 ^ s2
    t3 = u32_add(t2, s3)
    t4 = t3 ^ s4
    rot_t1, rot_t2, rot_t3, rot_t4 = (
        js_left_rotate(t1, 9), js_left_rotate(t2, 13),
        js_left_rotate(t3, 17), js_left_rotate(t4, 19),
    )
    p1 = u32_add(rot_t1, rot_t3)
    p2 = rot_t2 ^ rot_t4
    p3 = u32_add(rot_t3, p1)
    p4 = rot_t4 ^ p2
    return p1.to_bytes(4, 'little') + p2.to_bytes(4, 'little') + p3.to_bytes(4, 'little') + p4.to_bytes(4, 'little')

def encrypt_x3(cookie_a1: str, cookie_loadts: int, uri: str = "", params: dict = None, data: dict = None) -> str:
    if params:
        query_string = urllib.parse.urlencode(params).replace('%2C', ',')
        uri = f"{uri}?{query_string}"
    md5_url_params = hashlib.md5(uri.encode()).hexdigest()

    if data is not None:
        data_str = json.dumps(data, separators=(",", ":"))
        uri = uri + data_str

    md5_url_params_data = hashlib.md5(uri.encode()).hexdigest()
    encrypt_part1_4 = [121, 104, 96, 41]

    random_num = int(random.random() * 4294967295)
    encrypt_part2_4 = list(random_num.to_bytes(4, 'little'))

    timestamp = int(time.time() * 1000)
    encrypt_part3_8 = list(timestamp.to_bytes(8, 'little'))

    encrypt_part4_8 = list(cookie_loadts.to_bytes(8, 'little'))

    num = int(random.random() * 99) + 1
    encrypt_part5_4 = list(num.to_bytes(4, 'little'))

    num = 1352
    encrypt_part6_4 = list(num.to_bytes(4, 'little'))

    num = len(uri.encode("utf-8"))
    encrypt_part7_4 = list(num.to_bytes(4, 'little'))

    encrypt_part8_8 = [b ^ (random_num & 255) for b in list(bytes.fromhex(md5_url_params_data))][0:8]
    byte_array = list(cookie_a1.encode('utf-8'))
    encrypt_part9_53 = [len(byte_array)] + byte_array

    byte_array = list(APP_ID.encode('utf-8'))
    encrypt_part10_11 = [len(byte_array)] + byte_array

    encrypt_part11_16 = [1, (random_num & 255) ^ 115, 249, 65, 103, 103, 201, 181, 131, 99, 94, 7, 68, 250, 132, 21]
    encrypt_part12_4 = [2, 97, 51, 16]

    ts_and_md5_hash = list(diy_hasher(encrypt_part3_8 + list(bytes.fromhex(md5_url_params))))
    encrypt_part13_16 = [i ^ (random_num & 255) for i in ts_and_md5_hash]

    encrypt_144_old = encrypt_part1_4 + encrypt_part2_4 + encrypt_part3_8 + \
                      encrypt_part4_8 + encrypt_part5_4 + encrypt_part6_4 + \
                      encrypt_part7_4 + encrypt_part8_8 + encrypt_part9_53 + \
                      encrypt_part10_11 + encrypt_part11_16 + encrypt_part12_4 + \
                      encrypt_part13_16

    encrypt_144_new = [i ^ j for i, j in zip(encrypt_144_old, XOR_KEY)]
    return X3_PREFIX + b64_encode(bytes(encrypt_144_new), X3_BASE64_TABLE)

def encrypt_xs(cookie_a1: str, cookie_loadts: int, uri: str = "", params: dict = None, data: dict = None) -> str:
    p = {
        'x0': LANGUAGE_VERSION,
        'x1': APP_ID,
        'x2': OS_SYSTEM,
        'x3': encrypt_x3(cookie_a1, cookie_loadts, uri, params, data),
        'x4': "" if data is None else "object"
    }
    p_base64_encoded = b64_encode(
        encode_utf8(
            urllib.parse.quote(
                json.dumps(p, separators=(",", ":")), safe="-_.!~*'()"
            )
        ),
        BASE64_TABLE
    )
    return "XYS_" + p_base64_encoded

# ========== x-s-common 加密 ==========
def unsigned_right_shift(n, d):
    if d == 0:
        return n
    return (n % (1 << 32)) >> d

def diy_mrc(e):
    def jsint(num):
        return num % (2**32) if num >= 2**31 else num - 2**32

    mrc_list = []
    for i in range(255, -1, -1):
        j = i
        for _ in range(8, 0, -1):
            j = unsigned_right_shift(j, 1) ^ 0xedb88320 if j & 1 else unsigned_right_shift(j, 1)
        mrc_list.insert(0, unsigned_right_shift(j, 0))

    i = -1
    for r in e:
        i = mrc_list[255 & i ^ ord(r)] ^ unsigned_right_shift(i, 8)
    return -1 ^ jsint(i) ^ 0xedb88320

def encrypt_b1(fp):
    """加密b1 (x-s-common中的x8)"""
    b1_fp = {
        "x33": fp.get('x33', ''), "x34": fp.get('x34', ''), "x35": fp.get('x35', ''),
        "x36": fp.get('x36', ''), "x37": fp.get('x37', ''), "x38": fp.get('x38', ''),
        "x39": fp.get('x39', ''), "x42": fp.get('x42', ''), "x43": fp.get('x43', ''),
        "x44": fp.get('x44', ''), "x45": fp.get('x45', ''), "x46": fp.get('x46', ''),
        "x48": fp.get('x48', ''), "x49": fp.get('x49', ''), "x50": fp.get('x50', ''),
        "x51": fp.get('x51', ''), "x52": fp.get('x52', ''), "x82": fp.get('x82', ''),
    }

    try:
        from Crypto.Cipher import ARC4
        b1_fp_json = json.dumps(b1_fp, separators=(',', ':'), ensure_ascii=False)
        cipher = ARC4.new(RC4_KEY)
        ciphertext = cipher.encrypt(b1_fp_json.encode('utf-8')).decode('latin1')
        encoded_url = urllib.parse.quote(ciphertext, safe="!*'()~_-")
        b = []
        for c in encoded_url.split('%')[1:]:
            chars = list(c)
            b.append(int(''.join(chars[:2]), 16))
            b.extend(ord(j) for j in chars[2:])
        return b64_encode(bytearray(b), BASE64_TABLE)
    except ImportError:
        return ""

def encrypt_xsc(cookie_a1: str, fp: dict) -> str:
    b1_val = encrypt_b1(fp)

    source = {
        's0': PLAT_FORM_CODE,
        's1': "",
        'x0': "1",
        'x1': LANGUAGE_VERSION,
        'x2': OS_SYSTEM,
        'x3': APP_ID,
        'x4': ARTIFACT_VERSION,
        'x5': cookie_a1,
        'x6': "",
        'x7': "",
        'x8': b1_val,
        'x9': int(diy_mrc("" + "" + b1_val)),
        'x10': fp.get("x39", 0),
        'x11': "normal"
    }

    return b64_encode(
        encode_utf8(
            urllib.parse.quote(
                json.dumps(source, separators=(",", ":"), ensure_ascii=False),
                safe="-_.!~*'()"
            )
        ),
        BASE64_TABLE
    )

# ========== Session 管理 ==========
class XhsSession:
    def __init__(self):
        self.a1 = ''.join(random.choices("abcdefghijklmnopqrstuvwxyz1234567890", k=30))
        self.web_id = ''.join(random.choices("abcdef0123456789", k=32))
        self.loadts = int(time.time() * 1000)
        self.fp = {
            "x33": "",
            "x34": "",
            "x35": "",
            "x36": "",
            "x37": "",
            "x38": "",
            "x39": 1,
            "x42": 1080,
            "x43": "",
            "x44": "",
            "x45": "",
            "x46": "",
            "x48": "Windows",
            "x49": "",
            "x50": "",
            "x51": "",
            "x52": "",
            "x82": "",
        }
        self.counter = 1

    def update_loadts(self):
        self.loadts = int(time.time() * 1000)

    def get_xs(self, uri: str, params: dict = None, data: dict = None) -> str:
        self.update_loadts()
        return encrypt_xs(self.a1, self.loadts, uri, params, data)

    def get_xsc(self) -> str:
        self.fp['x39'] = self.counter
        self.counter += 1
        return encrypt_xsc(self.a1, self.fp)

    def get_headers(self, uri: str, params: dict = None, data: dict = None) -> dict:
        return {
            "x-s": self.get_xs(uri, params, data),
            "x-s-common": self.get_xsc(),
            "x-t": str(self.loadts),
            "x-b3-traceid": random_hex(16),
            "x-xray-traceid": random_hex(32),
        }

# 全局 session 实例
session = XhsSession()

# ========== HTTP 服务器 ==========
class XhsEncryptHandler(BaseHTTPRequestHandler):
    def _send_json(self, data, status=200):
        self.send_response(status)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(json.dumps(data, ensure_ascii=False).encode('utf-8'))

    def do_POST(self):
        content_length = int(self.headers.get('Content-Length', 0))
        body = json.loads(self.rfile.read(content_length).decode('utf-8')) if content_length > 0 else {}

        if self.path == '/api/xs/get_xs':
            uri = body.get('uri', '')
            params = body.get('params')
            data = body.get('data')
            xs = session.get_xs(uri, params, data)
            self._send_json({"xs": xs})

        elif self.path == '/api/xs/get_xsc':
            xsc = session.get_xsc()
            self._send_json({"xsc": xsc})

        elif self.path == '/api/xs/get_all_headers':
            uri = body.get('uri', '')
            params = body.get('params')
            data = body.get('data')
            headers = session.get_headers(uri, params, data)
            self._send_json(headers)

        elif self.path == '/api/xs/get_session_info':
            self._send_json({
                "a1": session.a1,
                "web_id": session.web_id,
                "loadts": session.loadts,
                "fp": session.fp,
            })

        else:
            self._send_json({"error": "Unknown endpoint"}, 404)

    def do_GET(self):
        if self.path == '/api/xs/hello':
            self._send_json({"message": "XHS Encrypt Server is running!"})
        elif self.path == '/api/xs/get_session_info':
            self._send_json({
                "a1": session.a1,
                "web_id": session.web_id,
                "loadts": session.loadts,
                "fp": session.fp,
            })
        else:
            self._send_json({"error": "Unknown endpoint"}, 404)

    def log_message(self, format, *args):
        pass  # 静默日志

def run_server(port=3001):
    server = HTTPServer(('0.0.0.0', port), XhsEncryptHandler)
    print(f"[XHS Encrypt Server] Running on http://localhost:{port}")
    server.serve_forever()

if __name__ == "__main__":
    run_server()
