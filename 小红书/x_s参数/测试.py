import requests
import json


def get_xs(params):
    try:
        url = 'http://localhost:3000/api/x_s/get_xs'
        response = requests.post(url, json=params)
        x_s = response.json().get('result')
        return x_s
    except Exception as e:
        print(f'获取x-s签名出错: {e}')
        return ''

def main():
    headers = {
        "accept": "application/json, text/plain, */*",
        "accept-language": "zh-CN,zh;q=0.9",
        "cache-control": "no-cache",
        "content-type": "application/json;charset=UTF-8",
        "origin": "https://www.xiaohongshu.com",
        "pragma": "no-cache",
        "priority": "u=1, i",
        "referer": "https://www.xiaohongshu.com/",
        "sec-ch-ua": "\"Chromium\";v=\"142\", \"Google Chrome\";v=\"142\", \"Not_A Brand\";v=\"99\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36",
        "x-b3-traceid": "aab269e89c67182f",
        "x-s-common": "2UQAPsHC+aIjqArjwjHjNsQhPsHCH0rjNsQhPaHCH0c1PUhAHjIj2eHjwjQgynEDJ74AHjIj2ePjwjQhyoPTqBPT49pjHjIj2ecjwjH9N0P1PsHVHdWMH0ijP/SjPBPUPeGI+9rIJdWE+0+x8gL720cl2nSFwomDP98k40PFP9YM40DMPeZIPer7PAZhPsHVHdW9H0ijHjIj2eqjwjHjNsQhwsHCHDDAwoQH8B4AyfRI8FS98g+Dpd4daLP3JFSb/BMsn0pSPM87nrldzSzQ2bPAGdb7zgQB8nph8emSy9E0cgk+zSS1qgzianYt8p+1/LzN4gzaa/+NqMS6qS4HLozoqfQnPbZEp98QyaRSp9P98pSl4oSzcgmca/P78nTTL08z/sVManD9q9z18np/8db8aob7JeQl4epsPrzsagW3Lr4ryaRApdz3agYDq7YM47HFqgzkanYMGLSbP9LA/bGIa/+nprSe+9LI4gzVPDbrJg+P4fprLFTALMm7+LSb4d+kpdzt/7b7wrQM498cqBzSpr8g/FSh+bzQygL9nSm7qSmM4epQ4flY/BQdqA+l4oYQ2BpAPp87arS34nMQyFSE8nkdqMD6pMzd8/4SL7bF8aRr+7+rG7mkqBpD8pSUzozQcA8Szb87PDSb/d+/qgzVJfl/4LExpdzQ4fRSy7bFP9+y+7+nJAzdaLp/2LSiz/zz+9+pagYTLrRCJnRQyn+G8pm7zDS9yLPUcd8Azoi7q7Yn4BzQ408S8eq78pSxL0zQz/mS+S4UneQc49kQyrkAP9RSqA8r4fpLLozwGML98LzM4ApQ4SSd20Z98n8c4MYPwLEA8Sm7nDDAzLTQ2BMVq7bFq9bc47SAqFYjnDb98/+IN9prLo4haL+Sq9TrPBp/8LYkanD7q9kjJ7PA87QBanSD8/8M4A+Q4flEJS8F4n4c4AzQzn4A8ob78FS9+npDLoz8anW6qMSl4b+oqg4EqM87zrS9anTQ4SS64Mp+zDkCP9Ll4g4ianYMGFS3PBpD4g46nSk34rQp4d+xcpbranVhtFEl4Fl0pdzaag86qMSM4UTFanRAPp+98nTUzFEQzLkApf8O8/+l4omPpd4lag898n8n4oQQzLkAyd+UnDS9cnpx8fRSzobFPFShP7P9Lo4pafz/qLSiaaTQPApA+dHI8nT1afpDG08AyS8F2DSbqLpQP9V9qM8FJFS92S8QyB4Sy7mB4d4Ycg+fqgq9agYPzf4M47c3LFkSpfkSqM8c4BpCpdzFanTncFSeLFL34gcFqM87JLS3Po+hG0mAy7b7+Fll494QyrGU8LDROaHVHdWEH0il+/rUw/GE+/cUNsQhP/Zjw0ZVHdWlPaHCHfE6qfMYJsHVHdWlPjHCH0r7+ALU+ALAw/P9PeLvP/q7+ecU+0Hhw/HhPjQR",
        "x-t": "1775275518566",
        "x-xray-traceid": "ceab551873a3927458892cd4600e5f73",
        "xy-direction": "8"
    }
    cookies = {
        "abRequestId": "0f6945e8-01d1-5765-aeb5-41b68ef21252",
        "a1": "19b0c20607a0nx963jeu7z41yit8pd3fiv343huv950000173080",
        "webId": "59f63c80c1376e66a27106276579c483",
        "gid": "yjD8SJ8W8y3iyjD8SJ8K8hx7W08ICjKqVd7Wqhju4yv39428YUfqiq888yWq8Y88fJWqfjW4",
        "customerClientId": "885616807529569",
        "xsecappid": "xhs-pc-web",
        "web_session": "040069b93512a12a6db43000833b4bf93d11d5",
        "id_token": "VjEAAGji+S7WkqxDeB9Y/o7W0HNmTuGm+gR0unp80e/tM3LttvMd4djcrHAJKImQ3e2UmtwipugheeQK6avJty2q3M63kBWfXHR4aGr3BGocYitJ6tYNlJfkGIURZL1emnOgih0X",
        "ets": "1775275392710",
        "webBuild": "6.3.0",
        "loadts": "1775275393151",
        "acw_tc": "0a4ad7e117752753938436981e36363e29b82246b53a4f1322dd14bd8f5e17",
        "websectiga": "2845367ec3848418062e761c09db7caf0e8b79d132ccdd1a4f8e64a11d0cac0d",
        "sec_poison_id": "72a76795-b769-43b6-a9ef-e4e05e3e9a77",
        "unread": "{%22ub%22:%2269cbd289000000002200c9b2%22%2C%22ue%22:%2269cef7230000000021012c28%22%2C%22uc%22:29}"
    }
    url = "https://edith.xiaohongshu.com/api/sns/web/v1/feed"
    data = {
        "source_note_id": "69c29246000000001d01ab00",
        "image_formats": [
            "jpg",
            "webp",
            "avif"
        ],
        "extra": {
            "need_body_topic": "1"
        },
        "xsec_source": "pc_feed",
        "xsec_token": "ABKTtVXwivoPnVS9-DiDWKHhdtbMSsUWRJ8KtQuP8fzIU="
    }
    params = {
        'link': "/api/sns/web/v1/feed",
        'param': data,
    }
    x_s = get_xs(params)
    headers['x-s'] = x_s
    data = json.dumps(data, separators=(',', ':'))
    response = requests.post(url, headers=headers, cookies=cookies, data=data)

    print(response.text)
    print(response)

main()