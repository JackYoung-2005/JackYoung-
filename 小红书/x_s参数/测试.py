import requests
import urllib.parse
import random
import time

API_SERVER = "http://localhost:3001"


def get_xs(params):
    """获取加密参数"""
    uri = params['link']
    query_params = params['param']
    resp = requests.post(f"{API_SERVER}/api/xs/get_all_headers",
                         json={"uri": uri, "params": query_params}, timeout=10)
    return resp.json()


def main():
    headers = {
        "accept": "application/json, text/plain, */*",
        "origin": "https://www.xiaohongshu.com",
        "referer": "https://www.xiaohongshu.com/",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
        "sec-ch-ua": '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
    }

    cookies = {
        "abRequestId": "a0a00f56-1dd2-5ecb-a8d2-a80798c3590e",
        "ets": "1785492166292",
        "webBuild": "6.36.3",
        "xsecappid": "xhs-pc-web",
        "a1": "19fb7a057031we7webzr4op855b99mddf5mhbm1ko50000408839",
        "webId": "ddbd585ed847f3b3f0432e03d20d7a5f",
        "gid": "yjiDW08KKqi2yjiDW082W26y8qyEdWEdDuF46TllUY22Dx28jj6ffD88848YYqj8qjiy0Jf0",
        "web_session": "040069bb169c1d698856983a59384bb5f3d82b",
        "id_token": "VjEAAINe40YXONXdB+pBdT/3ZZVJC6DyaU1Wd4Thz/F8xWLgeAOwvrJfeYPUPuYYI5ZOhHQTOr7M21I9WsWCjXdVhhmMX1JAHjE34sB/Cqz2arVTaLOh6d9hvRM7ugSXO2SGwonP",
        "x-rednote-datactry": "CN",
        "x-rednote-holderctry": "CN",
        "acw_tc": "0a8f071d17854939828927534e2a3ca1763efcf58646844c7fa539dbca6c44",
        "websectiga": "8886be45f388a1ee7bf611a69f3e174cae48f1ea02c0f8ec3256031b8be9c7ee",
        "sec_poison_id": "59bdb2dd-f9d9-42a5-9780-4b4231bb502e",
        "loadts": "1785494537617",
        "unread": "{%22ub%22:%226a6845560000000001031819%22%2C%22ue%22:%226a6c3de0000000002500438c%22%2C%22uc%22:29}"
    }

    link = "/api/sns/web/v2/comment/page"
    query_params = {
        "note_id": "67deba19000000001c0054e1",
        "cursor": "",
        "top_comment_id": "",
        "image_formats": "jpg,webp,avif",
        "xsec_token": "ABeiaJllNeogsO6N-mImtvU_tvcpoduuVXaY73RCI0evw=",
    }

    params = {
        'link': link,
        'param': query_params,
    }

    encrypt = get_xs(params)
    headers['x-s'] = encrypt['x-s']
    headers['x-s-common'] = encrypt['x-s-common']
    headers['x-t'] = encrypt['x-t']
    headers['x-b3-traceid'] = encrypt['x-b3-traceid']
    headers['x-xray-traceid'] = encrypt['x-xray-traceid']

    url = f"https://edith.xiaohongshu.com{link}?" + "&".join(
        f"{k}={urllib.parse.quote(str(v), safe=',')}" for k, v in query_params.items()
    )

    s = requests.Session()
    for k, v in cookies.items():
        s.cookies.set(k, v, domain='.xiaohongshu.com')

    response = s.get(url, headers=headers, timeout=15)
    print(f"Status: {response.status_code}")
    data = response.json()
    print(f"code: {data.get('code')}, success: {data.get('success')}")
    if data.get('success'):
        comments = data['data']['comments']
        print(f"got {len(comments)} comments")
        for c in comments:
            nick = c.get('user_info', {}).get('nickname', 'N/A')
            content = c.get('content', '')[:60]
            print(f"  - {nick}: {content}")
    else:
        print(f"msg: {data.get('msg')}")


if __name__ == '__main__':
    main()
