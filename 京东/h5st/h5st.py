from curl_cffi import requests
import time
import hashlib
import json


class Spider(object):
    def __init__(self):
        self.headers = {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "origin": "https://search.jd.com",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://search.jd.com/Search?keyword=%E6%89%8B%E6%9C%BA&enc=utf-8&pvid=ee7eefc32dbc4452a512e74a2fc32537",
    "sec-ch-ua": "\"Chromium\";v=\"142\", \"Google Chrome\";v=\"142\", \"Not_A Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36",
    "x-referer-page": "https://search.jd.com/Search",
    "x-rp-client": "h5_1.0.0"
}
        self.cookies = {
    "__jdv": "143920055|direct|-|none|-|1764140936265",
    "__jdu": "17641409362641981131745",
    "pinId": "omk9fpKEi16ErSL5c_kaPg",
    "pin": "jd_UANsDpHptIve",
    "unick": "408j1v1qmim5cn",
    "_tp": "6%2BMnWRpLskA5XTEgokPCmg%3D%3D",
    "_pst": "jd_UANsDpHptIve",
    "areaId": "13",
    "shshshfpa": "1a7b04d9-8466-02a8-8bfe-9189799455b0-1755941077",
    "shshshfpx": "1a7b04d9-8466-02a8-8bfe-9189799455b0-1755941077",
    "TrackID": "1ex8Em3CcMe_C7J5gFEPOoSSi_ApsXas1jM2SpNtedAm4tmkIVim-cQwjeq3wI8icDCFk_upQ8TLIaJjboBQnCeF0YiSibB9PemgDMx-bmCk",
    "light_key": "AASBKE7rOxgWQziEhC_QY6ya7EZcPJITajAmT1ulVP8q3rB-5K4baq9Q9p35FqAPP3ZZyWCo",
    "PCSYCityID": "CN_370000_371000_0",
    "3AB9D23F7A4B3C9B": "23WTH2RJWY2YDMBR4WVPSBI2E74SEUXHXLCGDXKY7JNH7RDRVNNC634MKEGMESFNX34E33JGOBWIUEDYWYPEDJYU4Y",
    "ipLoc-djd": "13-1032-1036-29397",
    "__jda": "143920055.17641409362641981131745.1764140936.1764768109.1764919470.6",
    "__jdc": "143920055",
    "3AB9D23F7A4B3CSS": "jdd0323WTH2RJWY2YDMBR4WVPSBI2E74SEUXHXLCGDXKY7JNH7RDRVNNC634MKEGMESFNX34E33JGOBWIUEDYWYPEDJYU4YAAAAM25VS6EFIAAAAACRI4RDYYWLEBLAX",
    "_gia_d": "1",
    "__jdb": "143920055.3.17641409362641981131745|6.1764919470",
    "thor": "E3B8EBDDDB7347BB5243B4F051572B396CF3C5ECBA03416C0124161FF49A59D6B4CBDA664F9E88A7BA9E75496FDCFF43895CAD4C7B87D9F5C07DFC3E38BB6B1EA44850037CB03B49B2FD42EF6EAC81C1132AF94F3CD6F3FB6AAF47D9219830A7CB6ABEB57650882CFB6A902C1E5C50ADBB63996410D8BC3DB834C4C0EC09FE405951DA989EF946066868D0EAE37983CB27D4F7A8151B77B92E27819AE4591018",
    "flash": "3_arDHHFmSZahJfO7nDNb8Y28G9Ciyc9GMRvYUZNv0MXeECv9-Niv7yLRIH1VMla014ADn7TtDLQ1Mc7Tdxl-eABXn-nFfcFBfeQH5kpsMIcLo4bZaei-TnhP16OBgg0lhTYdiQbWmJmodsYSQWjIALhCVCtd-k30-rYSQRTqyROPTC4b1Jchy",
    "cn": "0",
    "shshshfpb": "BApXWfIJu7v9AjarJdiHsHDk3-P7CUuRqBhfVF1h79xJ1PdZfQrP3vAnPnAPqJ69ldgywf6nnsawwc7A1uaQL7Nt9MQm3-XOeuoA",
    "sdtoken": "AAbEsBpEIOVjqTAKCQtvQu174IikWvdYkg9CUY4cS7mfVMRUUcAJvPilgC4aFQ9zcJ7-AWJtGAv1CacLzFkW4mtGxI5hplAJtxG36Hd2-KL6mhF7ExRbE5yfTlb4ymDNDIPfomdd8V9TlEJUDrCRJKCgKL0bzQ"
}
        self.body_dict = {
            "enc": "utf-8",
            "pvid": "ee7eefc32dbc4452a512e74a2fc32537",
            "area": "1_72_55652_0",
            "page": 1,
            "new_interval": True,
            "s": 67
        }
        self.json_body = json.dumps(self.body_dict, separators=(',', ':'))
        self.jd_url = "https://api.m.jd.com/api"

    # 加密body
    def sha256_hash(self, data: str) -> str:
        """
        计算字符串的 SHA-256 哈希值
        :param data: 输入字符串
        :return: 十六进制表示的哈希值字符串
        """
        hash_obj = hashlib.sha256(data.encode('utf-8'))
        return hash_obj.hexdigest()

    # 请求京东api
    def parse_jd_api(self,get_h5st):
        params = {
            "appid": "search-pc-java",
            "t": [
                str(get_h5st['t']),
                str(int(time.time() * 1000))
            ],
            "client": "pc",
            "clientVersion": "1.0.0",
            "cthr": "1",
            "uuid": "17641409362641981131745",
            "loginType": "3",
            "keyword": "空调",
            "functionId": "pc_search_searchWare",
            "body": self.json_body,
            "x-api-eid-phantom_token": "jdd0323WTH2RJWY2YDMBR4WVPSBI2E74SEUXHXLCGDXKY7JNH7RDRVNNC634MKEGMESFNX34E33JGOBWIUEDYWYPEDJYU4YAAAAM2OGLPFJIAAAAACTFAMBEULFL33EX",
            "h5st": get_h5st['h5st']
        }
        response = requests.get(self.jd_url, headers=self.headers, cookies=self.cookies, params=params,verify=False)
        print(response.json())
        print(response)

    # 拿到h5st
    def get_h5st(self):
        # 访问h5st接口
        get_h5st_response = requests.post("http://localhost:3000/api/h5st/get_h5st", json={
            'paramsH5': {
                'appid': 'search-pc-java',
                'body': self.sha256_hash(self.json_body),
                'client': 'pc',
                'clientVersion': '1.0.0',
                'functionId': "pc_search_searchWare",
                't': int(time.time() * 1000)
            }
        },verify=False)
        get_h5st = get_h5st_response.json()['result']
        print('h5st长度:::', len(get_h5st['h5st']))
        return get_h5st

    # 程序主入口
    def run(self):
        get_h5st = self.get_h5st()
        self.parse_jd_api(get_h5st)


if __name__ == '__main__':
    spider = Spider()
    spider.run()


