from urllib.parse import urlencode
import sys
from curl_cffi import requests
import re
import execjs
import websocket
import hashlib
import gzip
import threading
import time
import Live_pb2


class DouyinDanmaku(object):
    def __init__(self):
        self.headers = {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "accept-language": "zh-CN,zh;q=0.9",
            "cache-control": "no-cache",
            "pragma": "no-cache",
            "priority": "u=0, i",
            "sec-ch-ua": "\"Google Chrome\";v=\"147\", \"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"147\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
            "upgrade-insecure-requests": "1",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36"
        }
        self.cookies = {
            "enter_pc_once": "1",
            "UIFID_TEMP": "b684c79658e5909c916769b2e80c406ed39ea89d6c7cce823581f3f595501a34b488cb65fc2a2695b0f84376c789e038503585092958cbb27737e3d06a361562316b98e5543e4e580b19f8970675e956",
            "hevc_supported": "true",
            "is_dash_user": "1",
            "bd_ticket_guard_client_web_domain": "2",
            "passport_csrf_token": "01070f3cf7f626960f17764e1ae48dd6",
            "passport_csrf_token_default": "01070f3cf7f626960f17764e1ae48dd6",
            "UIFID": "b684c79658e5909c916769b2e80c406ed39ea89d6c7cce823581f3f595501a34b488cb65fc2a2695b0f84376c789e038dedf62457b5f6aa9f66f3299335eb995639cb8bcbc25aed39568fc8fde26333500818f91bca2b8d91f946dec71a6ac5a87638b484e2eea9c519362d36dc0390a62d561f84ed5cd29e2c2637dfa31367bb95c148989951468801daa3e7c279dda437da70529996e6bd8947ed616536c33",
            "SEARCH_UN_LOGIN_PV_CURR_DAY": "%7B%22date%22%3A1776746652662%2C%22count%22%3A2%7D",
            "passport_assist_user": "Ckrz7vxLD_qWXqfEyAPwwyAY4ykDNty-4gDqT8a4LF3HyICfQtxINjcqEYJjjWxOtXxLZfmYZmpdzioJqactJXSVGWNZQb3Y_oKo0hpKCjwAAAAAAAAAAAAAUFRuaYgU9etohynKoNWllQ0FmFteZnHc9Whrk1lMLs3N9ZUipA8x2dQ8fzLgU4DGKAcQ2rKPDhiJr9ZUIAEiAQMJHnTy",
            "n_mh": "9-mIeuD4wZnlYrrOvfzG3MuT6aQmCUtmr8FxV8Kl8xY",
            "uid_tt": "560379418b8819bd473bcfa77f3e324e",
            "uid_tt_ss": "560379418b8819bd473bcfa77f3e324e",
            "sid_tt": "2c6e5094e73acfecc4a24f611e8134ce",
            "sessionid": "2c6e5094e73acfecc4a24f611e8134ce",
            "sessionid_ss": "2c6e5094e73acfecc4a24f611e8134ce",
            "is_staff_user": "false",
            "has_biz_token": "false",
            "_bd_ticket_crypt_cookie": "28197eed6a6897e3fc61e7a6f872af36",
            "__security_mc_1_s_sdk_sign_data_key_web_protect": "f7253769-4d2c-b129",
            "__security_mc_1_s_sdk_cert_key": "e8be2a3e-42c9-bfbd",
            "__security_mc_1_s_sdk_crypt_sdk": "fd8a31c4-4bc7-be08",
            "__security_server_data_status": "1",
            "login_time": "1776746693811",
            "SelfTabRedDotControl": "%5B%5D",
            "SEARCH_RESULT_LIST_TYPE": "%22single%22",
            "publish_badge_show_info": "%220%2C0%2C0%2C1779199959914%22",
            "__druidClientInfo": "JTdCJTIyY2xpZW50V2lkdGglMjIlM0E0MTElMkMlMjJjbGllbnRIZWlnaHQlMjIlM0E2ODUlMkMlMjJ3aWR0aCUyMiUzQTQxMSUyQyUyMmhlaWdodCUyMiUzQTY4NSUyQyUyMmRldmljZVBpeGVsUmF0aW8lMjIlM0EyJTJDJTIydXNlckFnZW50JTIyJTNBJTIyTW96aWxsYSUyRjUuMCUyMChXaW5kb3dzJTIwTlQlMjAxMC4wJTNCJTIwV2luNjQlM0IlMjB4NjQpJTIwQXBwbGVXZWJLaXQlMkY1MzcuMzYlMjAoS0hUTUwlMkMlMjBsaWtlJTIwR2Vja28pJTIwQ2hyb21lJTJGMTQ3LjAuMC4wJTIwU2FmYXJpJTJGNTM3LjM2JTIyJTdE",
            "sid_guard": "2c6e5094e73acfecc4a24f611e8134ce%7C1779199963%7C5184000%7CSat%2C+18-Jul-2026+14%3A12%3A43+GMT",
            "session_tlb_tag": "sttt%7C2%7CLG5QlOc6z-zEok9hHoE0zv________-4qIZDnzN_kIIlRB8Ms_sC6vwAG1bdlUIcdxdJpoJ24gs%3D",
            "sid_ucp_v1": "1.0.0-KGE0OTdiYzE0ODYzNTE1YzE3Njk1MzUxZjZjNzg0ZTg4MzUxMDc0NTUKIQiMs5Cg08zdARDb37HQBhjvMSAMMJ-CzbIGOAdA9AdIBBoCbGYiIDJjNmU1MDk0ZTczYWNmZWNjNGEyNGY2MTFlODEzNGNl",
            "ssid_ucp_v1": "1.0.0-KGE0OTdiYzE0ODYzNTE1YzE3Njk1MzUxZjZjNzg0ZTg4MzUxMDc0NTUKIQiMs5Cg08zdARDb37HQBhjvMSAMMJ-CzbIGOAdA9AdIBBoCbGYiIDJjNmU1MDk0ZTczYWNmZWNjNGEyNGY2MTFlODEzNGNl",
            "volume_info": "%7B%22isUserMute%22%3Atrue%2C%22isMute%22%3Atrue%2C%22volume%22%3A0.124%7D",
            "download_guide": "%223%2F20260520%2F0%22",
            "live_use_vvc": "%22false%22",
            "s_v_web_id": "verify_mpj9hc3w_PZnDoNmG_CoPE_4DMG_BNN2_RWmGAuDqOYmT",
            "live_private_user": "0",
            "fpk1": "U2FsdGVkX1/F/ai4TVNggQsx+SpCh36aHSfa8z0PBZ8BI8eE7w2Dy7GZnd9pVsw2bdPdUpx9yeZOk8H43Mi/ow==",
            "fpk2": "b87543ecbc0ba610d9f06f9f2c432a46",
            "PhoneResumeUidCacheV1": "%7B%22974601966590348%22%3A%7B%22time%22%3A1779601469256%2C%22noClick%22%3A1%7D%7D",
            "playRecommendGuideTagCount": "2",
            "totalRecommendGuideTagCount": "2",
            "stream_player_status_params": "%22%7B%5C%22is_auto_play%5C%22%3A0%2C%5C%22is_full_screen%5C%22%3A0%2C%5C%22is_full_webscreen%5C%22%3A0%2C%5C%22is_mute%5C%22%3A1%2C%5C%22is_speed%5C%22%3A1%2C%5C%22is_visible%5C%22%3A0%7D%22",
            "LivePausePop": "%22%257B%2522todayCount%2522%253A1%252C%2522closeNum%2522%253A0%252C%2522todayShowRoom%2522%253A%25227643219026134502144%2522%252C%2522lastTimer%2522%253A1779601777252%257D%22",
            "my_rd": "2",
            "strategyABtestKey": "%221779679695.894%22",
            "ttwid": "1%7ChsNlsZulOCIYr5oplebngicpH7BOLcLwwv3uRKhpByc%7C1779679692%7C355f19fba0b36994cfb8539285ce1857dd9bd47d764b5e121896e54ef99ad1ff",
            "is_support_rtm_web_ts": "1",
            "home_can_add_dy_2_desktop": "%220%22",
            "has_avx2": "null",
            "device_web_cpu_core": "20",
            "device_web_memory_size": "32",
            "webcast_local_quality": "null",
            "csrf_session_id": "87f1be0c8207ca4e09c5904c31af95e7",
            "stream_recommend_feed_params": "%22%7B%5C%22cookie_enabled%5C%22%3Atrue%2C%5C%22screen_width%5C%22%3A1440%2C%5C%22screen_height%5C%22%3A900%2C%5C%22browser_online%5C%22%3Atrue%2C%5C%22cpu_core_num%5C%22%3A20%2C%5C%22device_memory%5C%22%3A32%2C%5C%22downlink%5C%22%3A10%2C%5C%22effective_type%5C%22%3A%5C%224g%5C%22%2C%5C%22round_trip_time%5C%22%3A50%7D%22",
            "__live_version__": "%221.1.5.2026%22",
            "gulu_source_res": "eyJwX2luIjoiNzBkYjdhNGExYTY1YmE2OGQ2ZWFlY2Q5MDJmODJiOTRjOTFjZjU4ZTEyZTZlN2VlNTk4OGM2YzllMWNiOWE0NSJ9",
            "live_can_add_dy_2_desktop": "%221%22",
            "live_debug_info": "%7B%22roomId%22%3A%227643663870254877455%22%2C%22resolution%22%3A%7B%22width%22%3A480%2C%22height%22%3A854%7D%2C%22fps%22%3A15%2C%22audioDataRate%22%3A48000%2C%22droppedFrames%22%3A0%2C%22totalFrames%22%3A46%2C%22videoBuffer%22%3A%5B%5D%2C%22src%22%3A%22https%3A%2F%2Fpull-flv-h13.douyincdn.com%2Fthird%2Fstream-695893001639822172_ld5.flv%3Fexpire%3D1780285580%26sign%3Dec9749504c74d6670eaae4a1aa1486d9%26exp_hrchy%3Dh1%26arch_hrchy%3Dh1%26major_anchor_level%3Dcommon%26unique_id%3Dstream-695893001639822172_860_flv_ld5%26t_id%3D037-202605251146191148675FB46F67E9667F-m7zr9n%26biz_quality%3Dld%26biz_protocol%3Dflv%22%2C%22linkmicInfo%22%3A%7B%22uiLayout%22%3A0%2C%22playModes%22%3A%5B%5D%2C%22allDevices%22%3A%22%E8%BF%9E%E7%BA%BF%E8%AE%BE%E5%A4%87%EF%BC%9A%E7%94%B3%E8%AF%B7%E8%BF%9E%E7%BA%BF%E5%90%8E%E6%89%8D%E8%8E%B7%E5%8F%96%22%2C%22audioInputs%22%3A%5B%5D%2C%22videoInputs%22%3A%5B%5D%7D%2C%22href%22%3A%22https%3A%2F%2Flive.douyin.com%2F74867127702%22%7D",
            "bd_ticket_guard_client_data": "eyJiZC10aWNrZXQtZ3VhcmQtdmVyc2lvbiI6MiwiYmQtdGlja2V0LWd1YXJkLWl0ZXJhdGlvbi12ZXJzaW9uIjoxLCJiZC10aWNrZXQtZ3VhcmQtcmVlLXB1YmxpYy1rZXkiOiJCTUhraHZsd0JTdytxL1VTVEFzZTVKalozeGZqTGd0SU1LR0RKMFNKa05BREpENFVSdUV4V1IwbWJHU0l4b2ovWDRjU0lKby83MFU4d0orOWR3OUVYMTQ9IiwiYmQtdGlja2V0LWd1YXJkLXdlYi12ZXJzaW9uIjoyfQ%3D%3D",
            "odin_tt": "81fd18f4bec310d3abcc9a3d56b2408ba1527ac60e7ee41ae53eb93409454dd4ff45a12aa4d5fe94bfb5f56097c1a40b515c9f1601aa9d07783f7c9f5bdab5b8",
            "biz_trace_id": "3494d70a",
            "sdk_source_info": "7e276470716a68645a606960273f276364697660272927676c715a6d6069756077273f276364697660272927666d776a68605a607d71606b766c6a6b5a7666776c7571273f275e58272927666a6b766a69605a696c6061273f27636469766027292762696a6764695a7364776c6467696076273f275e5827292771273f2732323c33363c353d333c3232342778",
            "bit_env": "DmST0ZPBpLMT7Vkdw5JXA833kmlVYnNxSiaR-pfIYSZ7cKzrubxCY4dXnJ8sFcprxMm9XMS-KSLMN6vXgMQTLu_c4Pqz4D-vwdqFFwCtuPq72D8YnNx03I2ZwDijFUoF-ik2S880icuVLliZrxTZdqB-qgfSzBXvdX3l5u2wHI6N7yplQobOh5fzjIXvz3aXalboWf3k6ezcsD_8CmJSck_erGWBiQ9QXEFh3ZRCN2AkieRiHC01biR1SkWmWv-wA1xLqH3Fms56RHYcbdm2HYSS6vetxLWAOMa9SHuY5WCX6S6r8xbHTvtnHAzwG-PxPLLn04VFQHHczb6Tv6UFKyVa1Hqm5zpSSh22-iOvXWHmTy7JLi3RpPtSglLZSsvlrhimehgPVSZNxi8jh5tr9bEY8IEapoSOdK6eOJ8lmFu6jFKWqQmMlHJXUnUMITjDbtVyJehhr6a0gGSBf7C-agQr8_EAmJQTcLfBnUCtBGmXkGKUh-Gt9-F4FPYPDSCF",
            "passport_auth_mix_state": "o4u6i7n3bzkb4uxvcl504hn68ja2l78c",
            "bd_ticket_guard_client_data_v2": "eyJyZWVfcHVibGljX2tleSI6IkJNSGtodmx3QlN3K3EvVVNUQXNlNUpqWjN4ZmpMZ3RJTUtHREowU0prTkFESkQ0VVJ1RXhXUjBtYkdTSXhvai9YNGNTSUpvLzcwVTh3Sis5ZHc5RVgxND0iLCJ0c19zaWduIjoidHMuMi42YjZkMzE0NDk3OTc1OTFkYjFhYzMzMjc0YTdlYjkwNmVmYmI5MGVmNjIxN2E0NDQ2MDUyNzMxYjc2YzQwYjk5YzRmYmU4N2QyMzE5Y2YwNTMxODYyNGNlZGExNDkxMWNhNDA2ZGVkYmViZWRkYjJlMzBmY2U4ZDRmYTAyNTc1ZCIsInJlcV9jb250ZW50Ijoic2VjX3RzIiwicmVxX3NpZ24iOiJzQ0pvN2tyOGM5ZStsM1dEelNyY1VGdzJnaG5Db29pUzRLQUY4VUtzcUhvPSIsInNlY190cyI6IiNjN3prT0FaUitXY3M3czJMR0VtUzl6Q05CcklJcUtMRVk1eFNMemROU1hvRlZJclR2bnNlRGlMOFdqMVAifQ%3D%3D",
            "IsDouyinActive": "false"
        }
        self.cookie_str = "; ".join([f"{k}={v}" for k, v in self.cookies.items()])
        self.js_code = execjs.compile(open('./env.js', 'r', encoding='utf-8').read())

    # 获取直播间数据
    def parse_start_url(self, live_id):
        """
        :param live_id: 直播间ID
        :return:
        """
        url = f'https://live.douyin.com/{live_id}'
        response = requests.get(url, headers=self.headers, cookies=self.cookies)
        room_id = re.search(r'\\"roomId\\":\\"(\d+)\\",', response.text, re.S).group(1)
        ttwid = response.cookies.get_dict().get('ttwid', self.cookies.get('ttwid', ''))
        user_id = re.search(r'\\"user_unique_id\\":\\"(\d+)\\"', response.text, re.S).group(1)
        user_unique_id = re.search(r'\\"user_unique_id\\":\\"(\d+)\\"', response.text, re.S).group(1)
        room_info = re.search(
            r'\\"roomInfo\\":\{\\"room\\":\{\\"id_str\\":\\".*?\\",\\"status\\":(?P<status>.*?),\\"status_str\\":\\".*?\\",\\"title\\":\\"(?P<title>.*?)\\"',
            response.text, re.S)
        anchor_id = re.search(r'\\"anchor\\":\{\\"id_str\\":\\"(\d+)\\"', response.text, re.S).group(1)
        sec_uid = re.search(r'\\"sec_uid\\":\\"(.*?)\\"', response.text, re.S).group(1)
        room_status = room_info.group('status')
        room_title = room_info.group('title')
        if ttwid:
            self.cookies['ttwid'] = ttwid
            self.cookie_str = "; ".join([f"{k}={v}" for k, v in self.cookies.items()])
        return {
            "room_id": room_id,
            "user_id": user_id,
            "user_unique_id": user_unique_id,
            "anchor_id": anchor_id,
            "sec_uid": sec_uid,
            "ttwid": ttwid,
            "room_status": room_status,
            "room_title": room_title
        }

    # 心跳检测,每5秒发送心跳保持连接
    def _ping(self, ws):
        """每5秒发送心跳保持连接"""
        while True:
            try:
                frame = Live_pb2.PushFrame()
                frame.payloadType = "hb"
                ws.send(frame.SerializeToString(), opcode=0x02)
                time.sleep(5)
            except Exception:
                break

    def _safe_print(self, text):
        """处理 Windows 控制台 emoji 编码问题"""
        try:
            print(text)
        except UnicodeEncodeError:
            print(text.encode(sys.stdout.encoding, errors='replace').decode(sys.stdout.encoding))

    def on_open(self, ws):
        self._safe_print("[连接] WebSocket 已连接 开始进行监控")
        print()
        self._shown_types = set()  # 去重未知消息类型
        threading.Thread(target=self._ping, args=(ws,), daemon=True).start()

    def on_message(self, ws, message):
        try:
            # 1. 解析外层 PushFrame
            frame = Live_pb2.PushFrame()
            frame.ParseFromString(message)

            # 2. gzip 解压 payload
            origin_bytes = gzip.decompress(frame.payload)

            # 3. 解析 LiveResponse
            response = Live_pb2.LiveResponse()
            response.ParseFromString(origin_bytes)

            # 4. 需要 ACK 时回复确认
            if response.needAck:
                ack = Live_pb2.PushFrame()
                ack.payloadType = "ack"
                ack.payload = response.internalExt.encode('utf-8')
                ack.logId = frame.logId
                ws.send(ack.SerializeToString(), opcode=0x02)

            # 5. 解析每条消息
            for item in response.messagesList:
                try:
                    if item.method == 'WebcastChatMessage':
                        msg = Live_pb2.ChatMessage()
                        msg.ParseFromString(item.payload)
                        u = msg.user
                        uid = u.sec_uid or u.id_str or str(u.id)
                        info_parts = []
                        if u.gender == 1: info_parts.append('男')
                        elif u.gender == 2: info_parts.append('女')
                        city = u.location_city or u.city
                        if city: info_parts.append(city)
                        info = '|'.join(info_parts)
                        self._safe_print(f'[弹幕] {u.nickname}({info}): {msg.content} -->主页链接: https://www.douyin.com/user/{uid}')
                    elif item.method == 'WebcastGiftMessage':
                        msg = Live_pb2.GiftMessage()
                        msg.ParseFromString(item.payload)
                        from_uid = msg.user.sec_uid or msg.user.id_str or str(msg.user.id)
                        self._safe_print(f'[礼物] {msg.user.nickname} 送出:【{msg.gift.name} x{msg.comboCount}】 -->主页链接: https://www.douyin.com/user/{from_uid}')
                    elif item.method == 'WebcastMemberMessage':
                        msg = Live_pb2.MemberMessage()
                        msg.ParseFromString(item.payload)
                        u = msg.user
                        uid = u.sec_uid or u.id_str or str(u.id)
                        info_parts = []
                        if u.gender == 1: info_parts.append('男')
                        elif u.gender == 2: info_parts.append('女')
                        city = u.location_city or u.city
                        if city: info_parts.append(city)
                        info = '|'.join(info_parts)
                        self._safe_print(f'[进入] {u.nickname}({info}) 进入直播间 -->主页链接: https://www.douyin.com/user/{uid}')
                    elif item.method == 'WebcastLikeMessage':
                        msg = Live_pb2.LikeMessage()
                        msg.ParseFromString(item.payload)
                        uid = msg.user.sec_uid or msg.user.id_str or str(msg.user.id)
                        self._safe_print(f'[点赞] {msg.user.nickname} 点赞了 {msg.count} 次 (总计 {msg.total}) -->主页链接: https://www.douyin.com/user/{uid}')
                    elif item.method == 'WebcastSocialMessage':
                        msg = Live_pb2.SocialMessage()
                        msg.ParseFromString(item.payload)
                        u = msg.user
                        uid = u.sec_uid or u.id_str or str(u.id)
                        if msg.action == 1:
                            info_parts = []
                            if u.gender == 1: info_parts.append('男')
                            elif u.gender == 2: info_parts.append('女')
                            city = u.location_city or u.city
                            if city: info_parts.append(city)
                            if u.signature: info_parts.append(f'主页介绍:{u.signature}')
                            info = '|'.join(info_parts)
                            self._safe_print(f'[关注] {u.nickname}({info}) 关注了主播 -->主页链接: https://www.douyin.com/user/{uid}')
                    elif item.method == 'WebcastRoomStatsMessage':
                        msg = Live_pb2.RoomStatsMessage()
                        msg.ParseFromString(item.payload)
                        self._safe_print(f'[房间] {msg.displayLong}')
                    elif item.method == 'WebcastRoomUserSeqMessage':
                        pass  # 系统消息，无需关注
                    elif item.method == 'WebcastInRoomBannerMessage':
                        pass  # 广告横幅，无需关注
                    elif item.method == 'WebcastRanklistHourEntranceMessage':
                        pass  # 小时榜入口，无需关注
                    elif item.method == 'WebcastFansclubMessage':
                        pass  # 粉丝团消息
                    elif item.method == 'WebcastRoomDataSyncMessage':
                        pass  # 房间数据同步
                    elif item.method == 'WebcastRoomMessage':
                        pass  # 通用房间消息
                    elif item.method == 'WebcastChatLikeMessage':
                        pass  # 弹幕点赞
                    elif item.method == 'WebcastRoomRankMessage':
                        pass  # 排行榜
                    elif item.method == 'WebcastResidentGuestMessage':
                        pass  # 常驻嘉宾
                    else:
                        if item.method not in self._shown_types:
                            self._shown_types.add(item.method)
                            self._safe_print(f'[新消息类型] {item.method}')
                except Exception as e:
                    self._safe_print(f'[消息解析失败] {item.method}: {e}')
        except Exception as e:
            self._safe_print(f'[解析错误] {e}')

    def on_error(self, ws, error):
        print(f"[错误] {error}")

    def on_close(self, ws, close_status_code, close_msg):
        print(f"[断开] 状态码: {close_status_code}, 消息: {close_msg}")

    def _get_webcast_detail(self, room_id, user_unique_id):
        """通过 API 获取真实的 cursor、internal_ext 和 pushServer"""
        url = "https://live.douyin.com/webcast/im/fetch/"
        params = {
            "resp_content_type": "protobuf",
            "did_rule": "3",
            "device_id": "",
            "app_name": "douyin_web",
            "endpoint": "live_pc",
            "support_wrds": "1",
            "user_unique_id": str(user_unique_id),
            "identity": "audience",
            "need_persist_msg_count": "15",
            "insert_task_id": "",
            "live_reason": "",
            "room_id": room_id,
            "version_code": "180800",
            "last_rtt": "0",
            "live_id": "1",
            "aid": "6383",
            "fetch_rule": "1",
            "cursor": "",
            "internal_ext": "",
            "device_platform": "web",
            "cookie_enabled": "true",
            "screen_width": "1440",
            "screen_height": "900",
            "browser_language": "zh-CN",
            "browser_platform": "Win32",
            "browser_name": "Mozilla",
            "browser_version": "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36",
            "browser_online": "true",
            "tz_name": "Asia/Shanghai",
        }
        headers = {
            "accept": "*/*",
            "origin": "https://live.douyin.com",
            "referer": f"https://live.douyin.com/{room_id}",
            "user-agent": self.headers["user-agent"],
        }
        resp = requests.get(url, params=params, headers=headers, cookies=self.cookies)
        frame = Live_pb2.LiveResponse()
        frame.ParseFromString(resp.content)
        push_server = frame.pushServer or "webcast100-ws-web-lf.douyin.com/webcast/im/push/v2/"
        return frame.cursor, frame.internalExt, push_server

    def parse_comments(self, room_info):
        # 1. 通过 API 获取真实的 cursor、internal_ext、pushServer
        cursor, internal_ext, push_server = self._get_webcast_detail(
            room_info['room_id'], room_info['user_unique_id']
        )

        # 2. 生成签名
        raw_string = f"live_id=1,aid=6383,version_code=180800,webcast_sdk_version=1.0.15,room_id={room_info['room_id']},sub_room_id=,sub_channel_id=,did_rule=3,user_unique_id={room_info['user_unique_id']},device_platform=web,device_type=,ac=,identity=audience"
        x_ms_stub = hashlib.md5(raw_string.encode("utf-8")).hexdigest()
        result = self.js_code.call("get_signature", x_ms_stub)
        sign = result.get('X-Bogus')

        # 3. 构造参数
        params = {
            'app_name': 'douyin_web',
            'version_code': '180800',
            'webcast_sdk_version': '1.0.15',
            'update_version_code': '1.0.15',
            'compress': 'gzip',
            'device_platform': 'web',
            'cookie_enabled': 'true',
            'screen_width': '1440',
            'screen_height': '900',
            'browser_language': 'zh-CN',
            'browser_platform': 'Win32',
            'browser_name': 'Mozilla',
            'browser_version': '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36',
            'browser_online': 'true',
            'tz_name': 'Asia/Shanghai',
            'cursor': cursor,
            'internal_ext': internal_ext,
            'host': 'https://live.douyin.com',
            'aid': '6383',
            'live_id': '1',
            'did_rule': '3',
            'endpoint': 'live_pc',
            'support_wrds': '1',
            'user_unique_id': room_info['user_unique_id'],
            'im_path': '/webcast/im/fetch/',
            'identity': 'audience',
            'need_persist_msg_count': '15',
            'insert_task_id': '',
            'live_reason': '',
            'room_id': room_info['room_id'],
            'heartbeatDuration': '0',
            'signature': sign,
        }

        wss_url = f"{push_server}?{urlencode(params)}"

        ws_headers = {
            'Pragma': 'no-cache',
            'Accept-Language': 'zh-CN,zh;q=0.9',
            'User-Agent': self.headers["user-agent"],
            'Upgrade': 'websocket',
            'Cache-Control': 'no-cache',
            'Connection': 'Upgrade',
        }

        ws = websocket.WebSocketApp(
            url=wss_url,
            header=ws_headers,
            cookie=self.cookie_str,  # 传完整 Cookie
            on_open=self.on_open,
            on_message=self.on_message,
            on_error=self.on_error,
            on_close=self.on_close
        )
        ws.run_forever(origin='https://live.douyin.com')

    # 入口
    def main(self):
        live_id = '47056249677'
        room_info = self.parse_start_url(live_id)
        status_text = '直播中' if room_info['room_status'] == '2' else '未开播'
        print(f"[监控目标] 直播间: {room_info['room_title']} [直播间ID：{live_id}] (状态: {status_text})")
        print()
        if status_text == '未开播':
           print('⚠ [提示] 当前直播间未开播 正在退出程序...')
           exit()
        else:
            print('[准备] 当前直播间状态正常 准备连接 WebSocket')
            self.parse_comments(room_info)


if __name__ == '__main__':
    spider = DouyinDanmaku()
    spider.main()
