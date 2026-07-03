import requests
import execjs
ctx = execjs.compile(open('get_anti_content.js', 'r', encoding='utf-8').read())

anti_content = ctx.call("get_anti")
print('anti_content参数:::',anti_content)
print('anti_content长度:::',len(anti_content))

headers = {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "anti-content": anti_content,
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://mobile.pinduoduo.com/",
    "sec-ch-ua": "\"Google Chrome\";v=\"147\", \"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"147\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36"
}
cookies = {
    "api_uid": "CioGEGotWINrGACKK3UqAg==",
    "_nano_fp": "XpmJXpXyn5E8n5XxXT_qke4oq91m4s3UAVA8gO7H",
    "webp": "1",
    "jrpl": "R9RTvY6ma93Yhgj87lQ2Cw85viIS05n7",
    "njrpl": "R9RTvY6ma93Yhgj87lQ2Cw85viIS05n7",
    "dilx": "tUBA6MVEugEiozsDC6ZAa",
    "rckk": "N9Oo8HNOtddbw9lX0TTHGoCsEajadoKu",
    "_bee": "N9Oo8HNOtddbw9lX0TTHGoCsEajadoKu",
    "ru1k": "605ae69e-70e3-449f-8ecb-b5aceb217a24",
    "_f77": "605ae69e-70e3-449f-8ecb-b5aceb217a24",
    "ru2k": "8f34e3a1-4ad4-4965-bc35-0865c3123c1b",
    "_a42": "8f34e3a1-4ad4-4965-bc35-0865c3123c1b",
    "pdd_vds": "gaLLNyoyimbGNnyGQENPoiEGaytmtGGQiPGtQaimOPOtmQyioimPibnaOmaO"
}
url = "https://mobile.pinduoduo.com/proxy/api/api/alexa/cells/hub/v3"
params = {
    "pdduid": "0",
    "platform": "H5",
    "page_sn": "10002",
    "page_id": "index_list.html",
    "engine_version": "3.0",
    "offset": "20",
    "count": "20",
    "list_id": "uyv41k4kph",
    "anti_content": anti_content
}
response = requests.get(url, headers=headers, cookies=cookies, params=params)

print(response.text)
print(response)