import requests
import subprocess
from functools import partial
subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")
# 修改编码方式,window默认编码是gbk,Mac和Linux 默认是uft-8
import execjs


js_code = execjs.compile(open('./1.js', 'r',encoding='utf-8').read())

headers = {
    "Accept": "application/json, text/javascript, */*; q=0.01",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "Origin": "https://www.birdreport.cn",
    "Pragma": "no-cache",
    "Referer": "https://www.birdreport.cn/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-site",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/155.0.0.0 Safari/537.36",
    "requestId": "c9afb0b84c2fe44b594aba04f2fe773a",
    "sec-ch-ua": "\"Google Chrome\";v=\"155\", \"Chromium\";v=\"155\", \"Not(A:Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sign": "5e613ec2fda8a32ef7e6a63e4fcc66d6",
    "timestamp": "1793598587000"
}
data_json = {
    "limit": "20",
    "page": "1"
}
obj = js_code.call('encrypt_headers',data_json)
headers['timestamp'] = obj['timestamp']
headers['sign'] = obj['sign']
headers['requestId'] = obj['request_id']


url = 'https://api.birdreport.cn/front/activity/search'
enc_param = obj['encrypt_data']
response = requests.post(url, headers=headers, data=enc_param)

json_data = response.json()

enc_data = json_data['data']

dec_data = js_code.call('decrypt_data',enc_data)
print(dec_data)
print(len(dec_data))







