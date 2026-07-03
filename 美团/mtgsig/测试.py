import requests
from urllib.parse import urlencode
import time



class Spider(object):
    def __init__(self):
        self.headers = {
            "Accept": "application/json",
            "Accept-Language": "zh-CN,zh;q=0.9",
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Origin": "https://h5.waimai.meituan.com",
            "Pragma": "no-cache",
            "Referer": "https://h5.waimai.meituan.com/",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-site",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36",
            # "mtgsig": "{\"a1\":\"1.2\",\"a2\":1779791948533,\"a3\":\"zx2362xw54255z6815z4z5u26uz2xwzx80wz54z08wx97958ywu609x0\",\"a5\":\"3I6MWb9pMT6rlcFBsWoUk9blZG0Cq+YquQQTYmP8OIeS3891xDZXumwu6RGybR9wDdW5ziv2LA94uuFeMUqwrL1C06W9FEUGchfSM2IKMNqurFPV5L9fRarF9Os4\",\"a6\":\"h1.9P5iYNuDvF8XLzoK6AHYr1VtjhM7Wxfdb9YfldHk7BwNAHcQYiqEwzX9Ww3rAPcEaoKCkNL2FLOxpMAzdVBsShigxinaiTsRbgt/LDGy/I3bwaXhOV0Ti7FlQ7zm8eVjwL9J7jFLnmTe/tP4QRPtmZBZxiIz2DM9H4AtWxJo/DP8HRQpzGFIkeDNQcuJ0+934hi1m7HWZaNJQ10VfpjmDQkQ44D2fYIiYRLaPVHfKkhZN/Znb3R5oJ+58Qa/+9RKykPf4IFVTDws9zXsFMzYGVtMyVwgvpPk9p9KOX3nJr5oUf6GLfIfztEAyJt5v7O1E+0Su75arxqAdjg1g4r7MVYNPA/lr1yNeMNJl1mMeg+CYP0p3dHlY5sarN7ZlZ3Hl6BisPeEb/naMR6AP3iOLowtjlL/bOzanYsja2+SWDM0AMjdlwUp3Ij6NOKcjxf2Dn9caQUh3qcK/JAJ2cQKE5Q==\",\"a8\":\"f766c7b2a63b915cf9fa798c06bd797e\",\"a9\":\"4.2.0,7,156\",\"a10\":\"d5\",\"x0\":4,\"d1\":\"4ab5c9b4974dd8b99e920029ddf81111\"}",
            "sec-ch-ua": "\"Google Chrome\";v=\"147\", \"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"147\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\""
        }
        self.cookies = {
            "$_lxsdk_cuid": "19da45730a0c8-03a3ceaa41c3af8-26061e51-13c680-19da45730a0c8",
            "uuid": "59527d09a28542fcb91f.1776578736.1.0.0",
            "swim_line": "default",
            "utm_source": "",
            "terminal": "i",
            "w_utmz": "\"utm_campaign=(direct)&utm_source=5000&utm_medium=(none)&utm_content=(none)&utm_term=(none)\"",
            "iuuid": "25F305DB64D37F5D1E35F365C6BDF3837922417522536C5CFE0D1FC21FBD5076",
            "ci": "227",
            "cityname": "%E5%A8%81%E6%B5%B7",
            "_lxsdk": "25F305DB64D37F5D1E35F365C6BDF3837922417522536C5CFE0D1FC21FBD5076",
            "zpstoken": "AgFYJQ1nP9WALHTRUDhMxiXz8okKGp_rOXTePRed-ce0lWKpZa4S4eFLjd25ptaFL7N6jH0P3qlgVwAAAAAENAAA-uCyNXt2Qw-1rHWHcPHOd0oB3MNcH1OGy0yWq91p6kguwsuYnf8WrP4P2ukXj16Q",
            "userId": "2828001279",
            "isid": "AgFYJQ1nP9WALHTRUDhMxiXz8okKGp_rOXTePRed-ce0lWKpZa4S4eFLjd25ptaFL7N6jH0P3qlgVwAAAAAENAAA-uCyNXt2Qw-1rHWHcPHOd0oB3MNcH1OGy0yWq91p6kguwsuYnf8WrP4P2ukXj16Q",
            "webp": "1",
            "mt_c_token": "AgHIHhmCQ2IkpOgSTtlFusdSxayFXVOVxZJ4dmUvtww1uhaNGjJRYpDetkPuafF6ZVZdQCaadz9ZpwAAAABGNAAAAXq3VwrX1H5hLkWiUG4eYY8YdBPUBF0hVVHISNBv1o9DvTsvNEfhaoAG6WH2qWlO",
            "w_token": "AgFYJQ1nP9WALHTRUDhMxiXz8okKGp_rOXTePRed-ce0lWKpZa4S4eFLjd25ptaFL7N6jH0P3qlgVwAAAAAENAAA-uCyNXt2Qw-1rHWHcPHOd0oB3MNcH1OGy0yWq91p6kguwsuYnf8WrP4P2ukXj16Q",
            "openh5_uuid": "25F305DB64D37F5D1E35F365C6BDF3837922417522536C5CFE0D1FC21FBD5076",
            "logintype": "normal",
            "_hc.v": "7f87a99b-fe14-2e62-b6e5-c02b6129f37e.1776743069",
            "__utmz": "74597006.1776743078.2.2.utmcsr=meishi.meituan.com|utmccn=(referral)|utmcmd=referral|utmcct=/",
            "__utma": "74597006.1028145698.1776739936.1777441297.1777625705.5",
            # "i_extend": "C122574087627551131098249882058051698863_b0_aæ»•çŽ‹é˜\\u0081_f1422003946H__a100173__b5",
            "wm_order_channel": "default",
            "WEBDFPID": "zx2362xw54255z6815z4z5u26uz2xwzx80wz54z08wx97958ywu609x0-1779874410872-1776578839565ICKIOMKfd79fef3d01d5e9aadc18ccd4d0c95074236",
            "utm_source_rg": "AM%25o2ENmNu%25423%25rYJhkJYe3iJ33rkEy3rir30Jk0rJYerYE5er3ir5EeYZfZ3Eme0k5ZY5",
            "_ga": "GA1.3.1028145698.1776739936",
            "_gid": "GA1.3.454151044.1779788839",
            "_ga_NMY341SNCF": "GS2.3.s1779788839$o1$g0$t1779788839$j60$l0$h0",
            "au_trace_key_net": "default",
            "isIframe": "false",
            "bussiness_entry_channel": "default",
            "_lx_utm": "utm_source%3D",
            "channelType": "{%22default%22:%220%22}",
            "_lxsdk_s": "19e63a1d3d9-df0-8b5-391%7C%7C542"
        }
        self.mtgsig_api = "http://localhost:4000/api/x_mtgsigs/get_mtgsig"


    # 获取mtgsig参数
    def get_mtgsig(self,payload):
        """
        :param payload:
        :return:
        """
        try:
            response = requests.post(self.mtgsig_api, json=payload)
            result = response.json()['result']
            return result
        except Exception as e:
            print("请求失败:", e)

    # 请求美团接口
    def parse_shop_url(self):
        """
        :return:
        """
        ts = int(time.time() * 1000)
        data = {
            "optimus_code": "10",
            "optimus_risk_level": "71",
            "lng": "122.4023",
            "lat": "36.932526",
            "gpsLng": "122.4023",
            "gpsLat": "36.932526",
            "shopId": "-1",
            "mtWmPoiId": "-100",
            "poi_id_str": "D6YFtPpsHthll46-X7dZtgI",
            "startIndex": "20",
            "labelId": "0",
            "scoreType": "0",
            "uuid": "25F305DB64D37F5D1E35F365C6BDF3837922417522536C5CFE0D1FC21FBD5076",
            "platform": "3",
            "partner": "4",
            "originUrl": "https://h5.waimai.meituan.com/waimai/mindex/menu?actualLat=36.932526&actualLng=122.4023&channel=default&dishId=&h5_detail_back=&initialLat=36.932526&initialLng=122.4023&mtOrderId=&mtShopId=-100&poi_id_str=D6YFtPpsHthll46-X7dZtgI&source=shoplist&utm_source=",
            "riskLevel": "71",
            "optimusCode": "10",
            "wm_latitude": "36932526",
            "wm_longitude": "122402300",
            "wm_actual_latitude": "36932526",
            "wm_actual_longitude": "122402300",
            "wmUuidDeregistration": "0",
            "wmUserIdDeregistration": "0",
            "openh5_uuid": "25F305DB64D37F5D1E35F365C6BDF3837922417522536C5CFE0D1FC21FBD5076",
            "_token": "eJxtk9mSskgQhd+FWxkpqoCCvtPGBUUbtUFhoi/YZBFQsdicmHefArs7/ouJMPCLk3lOVmXAP0ypBcwbD3gMeJapw5J5Y/gxGEsMy5AHrWCsYIU+EZIxy/h/aIogi5CavNJSmbe/eUEALEb8V6/sqfBSFAC+2BfS9i8WQfrrezTawsSE3B5vHBeL48ZNcjcZ52FCKrcY+9ece0lcnhRB2HLxNQ/pqX4svuuTpE5I596Svx7+//kZOif/7OfwEmIRD6n9RWgg4ZdESsJAmJI4kEIJ94R7hzwQ1SDoSZYo8T0ptAr7ZEg3iGCfAnn0S/IPwV8N9l40kPxLyk8K4r+TYb8qXhlI+D4BRNL3+SBd6OtGUKDJYKgKNA8MeaLEQmXQ6C2hMuRhzEJ5qNIzQ9x7EQ9YKPYzEJ0BBaFf2aVfGf13/1wdezAm295Lby4CwKqa1feSn94NfXFo+ZFEBaVw1RHTJCVSJzb3LovS1OZWM1K939dNcGlOkwgC7QjqfTkzj2BXr/TsxiHABSiITc7b7aCSO6XUOpVzV6vsw5mJtm9umnbXkmhFxPS03FurKNJEyYQmCZsgFJ+3TveWElB4ScX6vVpXB9WPHgHPW3paZZM1Kevj9uMzuE+Vs/mY2N4+rZAQYRDjCM0/SbtPD1m8rEYLKFVV3HDHRoKFtUlVHd6lm8zr7aLs0qK0cKLZ9Yd9BnXSnI5ls/Zssyq3K3HuSnb9DgxzkfOX0a1wHcszhGh1NDYQxzOsPjekSbOsmn8admo6BwccD5odXay946qbURLmc21EP8eCw4X/jvCpW5uP07YZeUbSjIriqp+uopN2tyXC22qHgSHl0yBdFJ5CnNNZxu2yc5XWTJ/TLJjdrs+TJ9tJrC1WcF1rC9qaQ/Osd54i7G98iMnOSLbpcT0Do3sy4qLreg5GGVkvTg3KOWtybrmg6HgVXsqrFeyf+0mW3Dtlgh6RMPFPgjFrnlEa2/PQLvA07WDoB9zHNNbviNwfXNYGhp4n9Tna6L5xeDL//gdbBz7q"
        }
        shop_url = f'https://i.waimai.meituan.com/openh5/poi/comments?_={ts}&yodaReady=h5&csecplatform=4&csecversion=4.2.0'
        data_encode = urlencode(data)
        payload = {
            "data": data_encode,
            "url": shop_url,
            'method': 'POST',
        }
        mtgsig = self.get_mtgsig(payload)
        self.headers['mtgsig'] = mtgsig
        response = requests.post(shop_url, headers=self.headers, cookies=self.cookies, data=data)

        print(response.text)
        print(response)



if __name__ == '__main__':
    spider = Spider()
    spider.parse_shop_url()