// 一、工具函数
function watch(obj, name, visited = new WeakSet()) {
    // 避免无限递归
    if (obj === null || typeof obj !== "object" || visited.has(obj)) {
        return obj;
    }

    visited.add(obj);

    // ---- BRAND CHECK 跳过表 ----
    const brandCheckedList = new WeakSet([
        // window.crypto,
        // window.crypto?.subtle,
        // Crypto?.prototype,
        // CryptoKey?.prototype,
        // SubtleCrypto?.prototype,
    ]);

    // ---- 检测 brand-check 或已知不可代理对象 ----
    function isBrandChecked(o) {
        if (o === null || typeof o !== "object") return false;
        if (brandCheckedList.has(o)) return true;

        // 有些浏览器对象有 [[Brand]] 要求 this 必须是原生对象
        const safe = [
            "[object Crypto]",
            "[object SubtleCrypto]",
            "[object CryptoKey]",
            "[object Window]"
        ];

        try {
            const tag = Object.prototype.toString.call(o);
            if (safe.includes(tag)) {
                brandCheckedList.add(o);
                return true;
            }
        } catch (e) {
            return true;
        }

        return false;
    }

    // ---- 如果对象 brand-check，则不包装，直接返回原对象 ----
    if (isBrandChecked(obj)) {
        return obj;
    }

    return new Proxy(obj, {
        get(target, prop, receiver) {
            try {
                if (typeof prop === "symbol" || prop === "constructor" || prop === "__proto__")
                    return Reflect.get(target, prop, receiver);

                // 特殊处理 navigator.platform
                if (name === "navigator" && prop === "platform") {
                    console.log(`对象 => ${name} 特殊处理属性: ${String(prop)} 模拟值为: Win32`);
                    return "Win32";
                }

                const value = Reflect.get(target, prop, receiver);

                // 打印 undefined 访问
                if (value === undefined) {
                    console.log(`对象 => ${name}, 读取属性: ${String(prop)} 值为: undefined, 类型为: ${typeof value}`);
                }

                // 原型链检测
                if (!Object.prototype.hasOwnProperty.call(target, prop)) {
                    let current = target;
                    while (current) {
                        current = Object.getPrototypeOf(current);
                        if (current && Object.prototype.hasOwnProperty.call(current, prop)) {
                            console.log(`原型链检测:true (对象: ${name} 属性: ${String(prop)})`);
                            break;
                        }
                    }
                }

                // ---- 核心修复：Proxy 的不变量检测 ----
                const descriptor = Object.getOwnPropertyDescriptor(target, prop);
                let isStrictReadOnly = false; // 是否触发了 Proxy 不变量限制

                if (descriptor) {
                    if (descriptor.get || descriptor.set) {
                        console.log(`特殊检测: 存在Getter/Setter (对象: ${name} 属性: ${String(prop)})`);
                    }
                    if (!descriptor.writable && !descriptor.get && !descriptor.set) {
                        console.log(`特殊检测: 只读属性 (对象: ${name} 属性: ${String(prop)})`);
                    }
                    if (!descriptor.configurable) {
                        console.log(`特殊检测: 不可配置属性 (对象: ${name} 属性: ${String(prop)})`);
                    }

                    // 判断是否是不可配置且不可写的数据属性
                    if (descriptor.configurable === false && descriptor.writable === false) {
                        isStrictReadOnly = true;
                    }
                }

                // ---- 子对象也进行 watch，但要避免 brand-check 和 Proxy 限制 ----
                if (typeof value === "object" && value !== null) {
                    if (!isBrandChecked(value)) {
                        // 【关键】如果属性不可配置且不可写，不能包裹 Proxy，必须返回原值！
                        if (isStrictReadOnly) {
                            console.log(`⚠️ 代理限制触发: 跳过深层代理 => ${name}.${String(prop)} (因属性 configurable:false, writable:false)`);
                            return value;
                        }
                        return watch(value, `${name}.${String(prop)}`, visited);
                    }
                }

                return value;
            } catch (err) {
                // 不再抛错，不会影响运行
                // console.warn(`get trap 捕获到安全错误 => ${name}.${String(prop)} (已自动跳过)`);
                return Reflect.get(target, prop);
            }
        },

        set(target, prop, val, receiver) {
            console.log(`对象 => ${name}, 设置属性: ${String(prop)} 值为: ${typeof val === 'function' ? 'function' : val}, 类型为: ${typeof val}`);
            return Reflect.set(target, prop, val, receiver);
        },

        has(target, prop) {
            console.log(`对象 => ${name} in 操作符检测属性: ${String(prop)}`);
            return Reflect.has(target, prop);
        },

        deleteProperty(target, prop) {
            console.log(`对象 => ${name} 删除属性: ${String(prop)}`);
            return Reflect.deleteProperty(target, prop);
        },

        ownKeys(target) {
            console.log(`对象 => ${name} 获取自身所有键`);
            return Reflect.ownKeys(target);
        },

        defineProperty(target, prop, descriptor) {
            console.log(`对象 => ${name} 定义属性: ${String(prop)}`);
            return Reflect.defineProperty(target, prop, descriptor);
        },

        setPrototypeOf(target, proto) {
            console.log(`特殊检测: setPrototypeOf 被调用 (对象: ${name})`);
            return Reflect.setPrototypeOf(target, proto);
        },

        getPrototypeOf(target) {
            console.log(`特殊检测: getPrototypeOf 被调用 (对象: ${name})`);
            return Reflect.getPrototypeOf(target);
        }
    });
}
function obj_toString(obj, name) {
  Object.defineProperty(obj, Symbol.toStringTag, {
    value: name,
  });
}

// 补环境
function Window(){}
globalThis.Window = Window;
window = watch(globalThis,'window');
delete global;


Object.setPrototypeOf(globalThis, Window.prototype)
obj_toString(globalThis, "Window")
top = window;
self = top
window.outerWidth = 1536
window.innerWidth = 1528
window.outerHeight = 816
window.innerHeight = 118
window.Logan = {
    "__version__": "2.1.5",
    "default": {
        "__version__": "2.1.5"
    }
}
window.XMLHttpRequest = function (){}
window.Owl = {
    __version__:"1.13.1"
}
window.indexedDB = {}
window.chrome = {
    "app": {
        "isInstalled": false,
        "InstallState": {
            "DISABLED": "disabled",
            "INSTALLED": "installed",
            "NOT_INSTALLED": "not_installed"
        },
        "RunningState": {
            "CANNOT_RUN": "cannot_run",
            "READY_TO_RUN": "ready_to_run",
            "RUNNING": "running"
        }
    }
}
window.knbNativeInvoker = {}

Navigator = function () {}
Navigator.prototype = {
    appCodeName: "Mozilla",
    appName: "Netscape",
    appVersion: "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 Edg/138.0.0.0",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 Edg/138.0.0.0",
    webdriver:false,
}
navigator = watch(new Navigator(), 'navigator')
obj_toString(navigator, 'Navigator')


Location = function (){}
Location.prototype = {
    "ancestorOrigins": {},
    "href": "https://h5.waimai.meituan.com/waimai/mindex/home",
    "origin": "https://h5.waimai.meituan.com",
    "protocol": "https:",
    "host": "h5.waimai.meituan.com",
    "hostname": "h5.waimai.meituan.com",
    "port": "",
    "pathname": "/waimai/mindex/home",
    "search": "",
    "hash": ""
}
location = watch(new Location(), 'location')
window.sessionStorage = watch(new Location(), 'window.sessionStorage')

Storage = function () {}
Storage.prototype = {
    "AntiDebug_Breaker": "{\"h5.waimai.meituan.com\":[]}",
    "deliverypoi": "{\"lat\":null,\"lng\":null,\"geotype\":2,\"addressId\":null,\"poi\":null,\"address\":null,\"gender\":null,\"name\":null,\"phone\":null,\"addressType\":null}",
    "shopHistroy": "[{\"keyword\":\"赛里木湖\",\"type\":1}]",
    "dfpId": "zx2362xw54255z6815z4z5u26uz2xwzx80wz54z08wx97958ywu609x0",
    "addstore": "[{\"addressId\":1950000026,\"name\":\"杨\",\"gender\":1,\"phone\":\"18637736444\",\"poi\":\"香湖丽舍西区-883号楼\",\"address\":\"四单元 507\",\"lat\":36932599,\"lng\":122402269,\"isOutOfRange\":0,\"houseNumber\":\"四单元 507\",\"isDefault\":0,\"bindType\":15,\"addressType\":0,\"isCheckOffDefaultAddr\":0,\"over_shipping_txt\":\"\"},{\"addressId\":1950000027,\"name\":\"杨\",\"gender\":1,\"phone\":\"18637736444\",\"poi\":\"中州快捷酒店\",\"address\":\"2楼219\",\"lat\":34421349,\"lng\":114203806,\"isOutOfRange\":0,\"houseNumber\":\"2楼219\",\"isDefault\":0,\"bindType\":15,\"addressType\":0,\"isCheckOffDefaultAddr\":0,\"over_shipping_txt\":\"\"},{\"addressId\":1950000013,\"name\":\"杨\",\"gender\":1,\"phone\":\"18637736444\",\"poi\":\"车博士一站式服务中心\",\"address\":\"旁边的胡同 往里走 第二家 二楼右边\",\"lat\":34406264,\"lng\":114171324,\"isOutOfRange\":0,\"houseNumber\":\"旁边的胡同 往里走 第二家 二楼右边\",\"isDefault\":0,\"bindType\":12,\"addressType\":0,\"isCheckOffDefaultAddr\":0,\"over_shipping_txt\":\"\"},{\"addressId\":1950000025,\"name\":\"杨\",\"gender\":1,\"phone\":\"18637736444\",\"poi\":\"酒吉时(人民路店)\",\"address\":\"\",\"lat\":34410725,\"lng\":114177788,\"isOutOfRange\":0,\"houseNumber\":\"\",\"isDefault\":0,\"bindType\":12,\"addressType\":0,\"isCheckOffDefaultAddr\":0,\"over_shipping_txt\":\"\"},{\"addressId\":1950000023,\"name\":\"杨\",\"gender\":1,\"phone\":\"18637736444\",\"poi\":\"酒吉时(尉氏北街店)\",\"address\":\"\",\"lat\":34418691,\"lng\":114196121,\"isOutOfRange\":0,\"houseNumber\":\"\",\"isDefault\":0,\"bindType\":11,\"addressType\":0,\"isCheckOffDefaultAddr\":0,\"over_shipping_txt\":\"\"}]",
    "mars-weblog-cache": "{\"geo\":{\"latitude\":36.932526,\"longitude\":122.4023,\"geotype\":\"GCJ02\",\"accuracy\":500,\"source\":\"network\"},\"city\":{\"name\":\"威海\",\"type\":\"meituan\",\"id\":497,\"city\":\"威海\",\"pinyin\":\"rongcheng\",\"adcode\":\"371082\",\"areaId\":-1,\"areaName\":\"\",\"province\":\"山东省\",\"district\":\"荣成市\",\"address\":\"香湖丽舍\",\"country\":\"中国\"},\"time\":1776743519781}",
    "geopoi": "{\"lat\":36.932526,\"lng\":122.4023,\"geotype\":2,\"poi\":\"香湖丽舍\"}",
    "mars-weblog-trackpoints": "[]",
    "__lxsdk__lxsdk_cuid": "\"19da45730a0c8-03a3ceaa41c3af8-26061e51-13c680-19da45730a0c8\"",
    "localId": "1776578839565ICKIOMKfd79fef3d01d5e9aadc18ccd4d0c95074236",
    "LLog_3y8x_1$_1777441428406_shared": "{\"content\":[],\"client\":\"web\",\"deviceModel\":\"Win32\",\"sdkVersion\":\"1.3.6\",\"topic\":\"app.com.sankuai.waimai.c.openh5\",\"appKey\":\"com.sankuai.wmcapp.openh5.static\",\"userID\":\"2828001279\",\"enableUserEvents\":false,\"key\":\"AtorFosquUkbzOH1pSFLCw3odOwb2233z7PuYBWwutAe\"}",
    "dfp_timestamp": "1777527708809",
    "param": "{\"geoPOI\":{\"lat\":36.932526,\"lng\":122.4023,\"geotype\":2,\"poi\":\"香湖丽舍\"},\"lat\":36.932526,\"lng\":122.4023,\"geotype\":2,\"addressName\":\"香湖丽舍\",\"pickedPOI\":{\"lat\":null,\"lng\":null,\"geotype\":2,\"poi\":null,\"address\":null},\"initialLat\":null,\"initialLng\":null,\"address\":null,\"selectedAddr\":{\"lat\":null,\"lng\":null,\"geotype\":2,\"addressId\":null,\"poi\":null,\"address\":null,\"gender\":null,\"name\":null,\"phone\":null,\"addressType\":null}}",
    "_horn_openh5_channel_config": "{\"expireTime\":1777441914857,\"originValue\":{\"customer\":{\"login_module\":[\"testch\",\"stll-bjyd\"],\"login_module_v2\":{\"h5login\":{\"channel\":[]},\"ilogin\":{\"channel\":[\"testch\",\"stll-bjyd\"]},\"knblogin\":{\"channel\":[\"mtjjb\",\"mtjxb\",\"knbtest\"]},\"unicomAuthLogin\":{\"channel\":[\"yzlt\",\"uniontest\"],\"page\":{\"production\":\"https://img.client.10010.com/stprototype/dingwei/index.html\",\"stage\":\"https://img.client.10010.com/web_prepub/stprototype/dingwei/index.html\",\"test\":\"http://ecstest2018.10010.com/meituanwaimai/index.html\"}}}},\"horn\":{\"cacheDuration\":10,\"cleanCacheForUpgrade\":false,\"overTime\":false,\"pollDuration\":-1,\"pollPeriod\":[\"00:01\",\"23:59\"],\"rateLimit\":0,\"time\":\"N/A\",\"url\":\"N/A\",\"version\":483368},\"hornId\":\"openh5_channel_config\"}}",
    "_horn_openh5_loganrtl_white": "{\"expireTime\":1777441914897,\"originValue\":{\"customer\":{\"channel\":[\"hongmengwaimai\",\"stll-bjyd\",\"stll-wyyyy\",\"hwfwggfw\",\"stll-QQ\",\"sqt_stll_hxyh\",\"stll-txsp\",\"hwfwggdt\",\"sqt_stll_gsyh\",\"stll-bdjsb\",\"stllhwwmkp\",\"stll-CCB\",\"sqt_stll_msyh\",\"stll-aqy\",\"jsyh\",\"mtjjb\",\"hwfwgggjc\",\"vivokyy\",\"hwkyy\",\"hwfwggjy\",\"oppokyy\",\"sqt_stll_ysf\",\"sqt_stll_zxyh\",\"vivofyp01\",\"stll-nyyh\",\"mtjxb\",\"bdxcx\",\"sqt_stll_ccb\",\"toufanghwfwgg\",\"sqt_stll_jsyh\"],\"url\":[\"/openapi/v1/poi/food\",\"/openh5/order/v2/preview\",\"/openh5/order/trade/v3/getvalid\",\"/openh5/order/v2/poicoupons/getvalidWithSales\",\"/openh5/order/v2/submit\"]},\"horn\":{\"cacheDuration\":10,\"cleanCacheForUpgrade\":false,\"overTime\":false,\"pollDuration\":-1,\"pollPeriod\":[\"00:01\",\"23:59\"],\"rateLimit\":0,\"time\":\"N/A\",\"url\":\"N/A\",\"version\":751183},\"hornId\":\"openh5_loganrtl_white\"}}",
    "pickedpoi": "{\"lat\":null,\"lng\":null,\"geotype\":2,\"poi\":null,\"address\":null}",
    "_horn_homepage_graytheme_config": "{\"expireTime\":1777441614923,\"originValue\":{\"customer\":{\"config\":\"[{\\\"start\\\":\\\"2023/03/14 00:00:00\\\",\\\"end\\\":\\\"2023/03/14 23:59:59\\\"}]\"},\"horn\":{\"cacheDuration\":5,\"cleanCacheForUpgrade\":false,\"overTime\":false,\"pollDuration\":-1,\"pollPeriod\":[\"00:01\",\"23:59\"],\"rateLimit\":0,\"time\":\"N/A\",\"url\":\"N/A\",\"version\":552782},\"hornId\":\"homepage_graytheme_config\"}}",
    "cached_cart_data": "{\"ids\":[\"kIVCfHG0-f4iA23wK7HH1gI\"],\"kIVCfHG0-f4iA23wK7HH1gI\":{\"mtShopId\":\"-100\",\"poi_id_str\":\"kIVCfHG0-f4iA23wK7HH1gI\",\"mtOrderId\":\"\",\"cartData\":[],\"cacheSpuList\":[]},\"lastPoiId\":\"kIVCfHG0-f4iA23wK7HH1gI\"}",
    "llog_config": "{\"llog_enabled\":true,\"llog_endpoint_prod\":\"https://logan-rtl.dreport.meituan.net\",\"llog_endpoint_dev\":\"https://rtl-test.d.meituan.net\",\"llog_keyRotateInterval\":604800,\"llog_enableUserEvents\":true,\"trigger_interval\":30,\"trigger_count\":30,\"trigger_onhide\":true,\"trigger_onunload\":true,\"llog_allowUnencrypted\":true,\"id\":\"s35e-3m6c-c64m-rdha\",\"limit_retryCap\":1,\"limit_logLength\":20480,\"limit_logsPerMin\":2000,\"limit_sender_queue_size\":2,\"limit_storage_bytes\":3145728,\"limit_storage_filter\":[],\"limit_log_filter\":[],\"sampleRate_uploadEvent\":0.001,\"sampleRate_storageEvent\":0.001,\"sampleRate_lifetimeTracing\":0.01,\"sampleRate_errorReporting\":0.01,\"sampleRate_resumeUpload\":0.01,\"llog_prefersFetch\":false,\"remove_unassociated_storage_keys\":true}",
    "login_back_home": "",
    "dfp_params_list": "{\"auto_init\":0,\"black_host\":[\"gatewaydsp.meituan.com\",\"portal-portm.meituan.com\",\"dd.sankuai.com\",\"dd.meituan.com\",\"catfront.dianping.com\",\"catfront.51ping.com\",\"report.meituan.com\",\"dreport.meituan.net\",\"postreport.meituan.com\",\"wreport1.meituan.net\",\"lx0.meituan.com\",\"lx1.meituan.net\",\"lx2.meituan.net\",\"plx.meituan.com\",\"hlx.meituan.com\",\"ad.e.waimai.sankuai.com:80\",\"speech-inspection.vip.sankuai.com\",\"kms.sankuai.com\",\"r.dianping.com\",\"r1.dianping.com\",\"api-channel.waimai.meituan.com\",\"lion-monitor.sankuai.com\",\"cat-config.sankuai.com\",\"catdot.sankuai.com\",\"s3plus.meituan.net\",\"ebooking.meituan.com\",\"eb.hotel.test.sankuai.com\",\"eb.vip.sankuai.com\",\"eb.meituan.com\",\"logan.sankuai.com\",\"mads.meituan.com\",\"mlog.dianping.com\",\"oneservice.meituan.com\",\"api-unionid.meituan.com\",\"fe-config.meituan.com\",\"fe-config0.meituan.com\",\"h.meituan.com\",\"p.meituan.com\",\"peisong-collector.meituan.com\",\"wreport2.meituan.net\",\"hreport.meituan.com\",\"c.qcs.test.sankuai.com\",\"dache.st.meituan.com\",\"dache.meituan.com\"],\"black_url\":[\"syncloud.meituan.com/be/chp/takeaway/\",\"syncloud.meituan.com/be/chp/takeawayClassifyManagement/\",\"syncloud.meituan.com/be/chp/createSkuToTakeaway/\",\"i.meituan.com/api/address\",\"i.meituan.com/api/maf\",\"mapi.dianping.com/mapi/mlog/applog.bin\",\"mapi.dianping.com/mapi/mlog/zlog.bin\",\"mapi.dianping.com/mapi/mlog/mtmidas.bin\",\"mapi.dianping.com/mapi/mlog/mtzmidas.bin\",\"m.dianping.com/adp/log\",\"mlog.meituan.com/log\",\"mlog.dianping.com/log\",\"m.api.dianping.com/mapi/mlog/applog.bin\",\"m.api.dianping.com/mapi/mlog/zlog.bin\",\"m.api.dianping.com/mapi/mlog/mtmidas.bin\",\"m.api.dianping.com/mapi/mlog/mtzmidas.bin\",\"peisong.meituan.com/collector/report/logdata/short/batch\",\"transcode-video.sankuai.com/pfop\",\"peisong.meituan.com/api/collector/collector/report/logdata/short/batch\",\"api-map.meituan.com/tile/style\",\"api-map01.meituan.com/tile/style\",\"api-map02.meituan.com/tile/style\",\"api-map03.meituan.com/tile/style\",\"api-map04.meituan.com/tile/style\",\"api-map05.meituan.com/tile/style\",\"api-map.meituan.com/tile/source\",\"api-map01.meituan.com/tile/source\",\"api-map02.meituan.com/tile/source\",\"api-map03.meituan.com/tile/source\",\"api-map04.meituan.com/tile/source\",\"api-map05.meituan.com/tile/source\",\"api-map.meituan.com/tile/font\",\"api-map01.meituan.com/tile/font\",\"api-map02.meituan.com/tile/font\",\"api-map03.meituan.com/tile/font\",\"api-map04.meituan.com/tile/font\",\"api-map05.meituan.com/tile/font\",\"api-map.meituan.com/tile/grid\",\"api-map01.meituan.com/tile/grid\",\"api-map02.meituan.com/tile/grid\",\"api-map03.meituan.com/tile/grid\",\"api-map04.meituan.com/tile/grid\",\"api-map05.meituan.com/tile/grid\",\"api-map.meituan.com/tile/dem\",\"api-map01.meituan.com/tile/dem\",\"api-map02.meituan.com/tile/dem\",\"api-map03.meituan.com/tile/dem\",\"api-map04.meituan.com/tile/dem\",\"api-map05.meituan.com/tile/dem\",\"api-map.meituan.com/render/traffic\",\"api-map01.meituan.com/render/traffic\",\"api-map02.meituan.com/render/traffic\",\"api-map03.meituan.com/render/traffic\",\"api-map04.meituan.com/render/traffic\",\"api-map05.meituan.com/render/traffic\",\"api-map.meituan.com/tile/model\",\"api-map01.meituan.com/tile/model\",\"api-map02.meituan.com/tile/model\",\"api-map03.meituan.com/tile/model\",\"api-map04.meituan.com/tile/model\",\"api-map05.meituan.com/tile/model\",\"spotter-relay.sankuai.com/auk01/\",\"spotter-livevod.vip.sankuai.com/recordings/auk01/\",\"e.dianping.com/joy/merchant/newuploadimage\",\"e.51ping.com/joy/merchant/newuploadimage\",\"spotter-relay.sankuai.com/maiot/\",\"wx-shangou.meituan.com/quickbuy/v2/activity/supersale/getLocationByIp\",\"wx-shangou.meituan.com/quickbuy/v2/activity/supersale/bigPromotionHeadInfo\",\"wx-shangou.meituan.com/quickbuy/v2/activity/supersale/bigPromotionResourceInfo\",\"wx-shangou.meituan.com/quickbuy/v1/user/address/posname\",\"wx-shangou.meituan.com/quickbuy/v1/activity/supersale/grab/queryUserSubscription\",\"transcode-video.cloud.test.sankuai.com/pfop\",\"ecom.meituan.com/emis/gw/PublishAssistantQueryService/queryFieldRequirements\",\"ecom.meituan.com/emis/gw/PublishAssistantValidateService/realTimeValidateProduct\",\"ecom.meishi.test.meituan.com/emis/gw/PublishAssistantQueryService/queryFieldRequirements\",\"ecom.meishi.test.meituan.com/emis/gw/PublishAssistantValidateService/realTimeValidateProduct\",\"mlog.51ping.com/adlog\",\"clcadlog.meituan.com/adlog\"],\"close_knb_sign\":0,\"header_white_host\":[],\"init_black_host\":[],\"init_black_url\":[],\"init_white_host\":[],\"init_white_url\":[],\"package_info\":{\"min\":\"4.0.0\",\"url\":\"https://msp.meituan.net/h5guard-files/package-1.1.2.js\",\"url_backup\":\"https://msp-backup.meituan.net/h5guard-files/package-1.1.2.js\",\"ver\":\"1.1.2\"},\"swim_black_host\":[\"ebooking.meituan.com\",\"eb.hotel.test.sankuai.com\",\"eb.vip.sankuai.com\",\"eb.meituan.com\",\"c.qcs.test.sankuai.com\",\"dache.st.meituan.com\",\"dache.meituan.com\"],\"white_host\":[\".dianping.com\",\".meituan.com\",\".sankuai.com\",\".maoyan.com\",\".neixin.cn\",\".51ping.com\",\".baobaoaichi.cn\",\".dper.com\",\".jchunuo.com\"]}"
}
localStorage = watch(new Storage(), "localStorage")

Storage.prototype.getItem = function(args) {
    console.log('window.localStorage.getItem("' + args + '")')
    if (args === 'dfp_params_list'){
        return '{"auto_init":0,"black_host":["gatewaydsp.meituan.com","portal-portm.meituan.com","dd.sankuai.com","dd.meituan.com","catfront.dianping.com","catfront.51ping.com","report.meituan.com","dreport.meituan.net","postreport.meituan.com","wreport1.meituan.net","lx0.meituan.com","lx1.meituan.net","lx2.meituan.net","plx.meituan.com","hlx.meituan.com","ad.e.waimai.sankuai.com:80","speech-inspection.vip.sankuai.com","kms.sankuai.com","r.dianping.com","r1.dianping.com","api-channel.waimai.meituan.com","lion-monitor.sankuai.com","cat-config.sankuai.com","catdot.sankuai.com","s3plus.meituan.net","ebooking.meituan.com","eb.hotel.test.sankuai.com","eb.vip.sankuai.com","eb.meituan.com","logan.sankuai.com","mads.meituan.com","mlog.dianping.com","oneservice.meituan.com","api-unionid.meituan.com","fe-config.meituan.com","fe-config0.meituan.com","h.meituan.com","p.meituan.com","peisong-collector.meituan.com","wreport2.meituan.net","hreport.meituan.com","c.qcs.test.sankuai.com","dache.st.meituan.com","dache.meituan.com"],"black_url":["syncloud.meituan.com/be/chp/takeaway/","syncloud.meituan.com/be/chp/takeawayClassifyManagement/","syncloud.meituan.com/be/chp/createSkuToTakeaway/","i.meituan.com/api/address","i.meituan.com/api/maf","mapi.dianping.com/mapi/mlog/applog.bin","mapi.dianping.com/mapi/mlog/zlog.bin","mapi.dianping.com/mapi/mlog/mtmidas.bin","mapi.dianping.com/mapi/mlog/mtzmidas.bin","m.dianping.com/adp/log","mlog.meituan.com/log","mlog.dianping.com/log","m.api.dianping.com/mapi/mlog/applog.bin","m.api.dianping.com/mapi/mlog/zlog.bin","m.api.dianping.com/mapi/mlog/mtmidas.bin","m.api.dianping.com/mapi/mlog/mtzmidas.bin","peisong.meituan.com/collector/report/logdata/short/batch","transcode-video.sankuai.com/pfop","peisong.meituan.com/api/collector/collector/report/logdata/short/batch","api-map.meituan.com/tile/style","api-map01.meituan.com/tile/style","api-map02.meituan.com/tile/style","api-map03.meituan.com/tile/style","api-map04.meituan.com/tile/style","api-map05.meituan.com/tile/style","api-map.meituan.com/tile/source","api-map01.meituan.com/tile/source","api-map02.meituan.com/tile/source","api-map03.meituan.com/tile/source","api-map04.meituan.com/tile/source","api-map05.meituan.com/tile/source","api-map.meituan.com/tile/font","api-map01.meituan.com/tile/font","api-map02.meituan.com/tile/font","api-map03.meituan.com/tile/font","api-map04.meituan.com/tile/font","api-map05.meituan.com/tile/font","api-map.meituan.com/tile/grid","api-map01.meituan.com/tile/grid","api-map02.meituan.com/tile/grid","api-map03.meituan.com/tile/grid","api-map04.meituan.com/tile/grid","api-map05.meituan.com/tile/grid","api-map.meituan.com/tile/dem","api-map01.meituan.com/tile/dem","api-map02.meituan.com/tile/dem","api-map03.meituan.com/tile/dem","api-map04.meituan.com/tile/dem","api-map05.meituan.com/tile/dem","api-map.meituan.com/render/traffic","api-map01.meituan.com/render/traffic","api-map02.meituan.com/render/traffic","api-map03.meituan.com/render/traffic","api-map04.meituan.com/render/traffic","api-map05.meituan.com/render/traffic","api-map.meituan.com/tile/model","api-map01.meituan.com/tile/model","api-map02.meituan.com/tile/model","api-map03.meituan.com/tile/model","api-map04.meituan.com/tile/model","api-map05.meituan.com/tile/model","spotter-relay.sankuai.com/auk01/","spotter-livevod.vip.sankuai.com/recordings/auk01/","e.dianping.com/joy/merchant/newuploadimage","e.51ping.com/joy/merchant/newuploadimage","spotter-relay.sankuai.com/maiot/","wx-shangou.meituan.com/quickbuy/v2/activity/supersale/getLocationByIp","wx-shangou.meituan.com/quickbuy/v2/activity/supersale/bigPromotionHeadInfo","wx-shangou.meituan.com/quickbuy/v2/activity/supersale/bigPromotionResourceInfo","wx-shangou.meituan.com/quickbuy/v1/user/address/posname","wx-shangou.meituan.com/quickbuy/v1/activity/supersale/grab/queryUserSubscription","transcode-video.cloud.test.sankuai.com/pfop","ecom.meituan.com/emis/gw/PublishAssistantQueryService/queryFieldRequirements","ecom.meituan.com/emis/gw/PublishAssistantValidateService/realTimeValidateProduct","ecom.meishi.test.meituan.com/emis/gw/PublishAssistantQueryService/queryFieldRequirements","ecom.meishi.test.meituan.com/emis/gw/PublishAssistantValidateService/realTimeValidateProduct","mlog.51ping.com/adlog","clcadlog.meituan.com/adlog"],"close_knb_sign":0,"header_white_host":[],"init_black_host":[],"init_black_url":[],"init_white_host":[],"init_white_url":[],"package_info":{"min":"4.0.0","url":"https://msp.meituan.net/h5guard-files/package-1.1.2.js","url_backup":"https://msp-backup.meituan.net/h5guard-files/package-1.1.2.js","ver":"1.1.2"},"swim_black_host":["ebooking.meituan.com","eb.hotel.test.sankuai.com","eb.vip.sankuai.com","eb.meituan.com","c.qcs.test.sankuai.com","dache.st.meituan.com","dache.meituan.com"],"white_host":[".dianping.com",".meituan.com",".sankuai.com",".maoyan.com",".neixin.cn",".51ping.com",".baobaoaichi.cn",".dper.com",".jchunuo.com"]}'
    }
    if (args === 'guardAppkey'){
        return null
    }
};
Storage.prototype.setItem = function(key,value) {
    console.log('window.localStorage.setItem("' + key,value + '")')
};

function History(){}
window.history = watch(new History(),'history')
obj_toString(history, 'History')

HTMLDocument = function (){}
document =watch(new HTMLDocument(), "document")
document.cookie = '_lxsdk_cuid=19da45730a0c8-03a3ceaa41c3af8-26061e51-13c680-19da45730a0c8; com.sankuai.wmcapp.openh5.static_random=tCfw4c3ZBq_28.4284; wm_order_channel=default; swim_line=default; utm_source=; igateApp=igate; iuuid=25F305DB64D37F5D1E35F365C6BDF3837922417522536C5CFE0D1FC21FBD5076; ci=227; cityname=%E5%A8%81%E6%B5%B7; _lxsdk=25F305DB64D37F5D1E35F365C6BDF3837922417522536C5CFE0D1FC21FBD5076; userId=2828001279; webp=1; mt_c_token=AgHIHhmCQ2IkpOgSTtlFusdSxayFXVOVxZJ4dmUvtww1uhaNGjJRYpDetkPuafF6ZVZdQCaadz9ZpwAAAABGNAAAAXq3VwrX1H5hLkWiUG4eYY8YdBPUBF0hVVHISNBv1o9DvTsvNEfhaoAG6WH2qWlO; logintype=normal; _hc.v=7f87a99b-fe14-2e62-b6e5-c02b6129f37e.1776743069; __utmz=74597006.1776743078.2.2.utmcsr=meishi.meituan.com|utmccn=(referral)|utmcmd=referral|utmcct=/; IJSESSIONID=node0b3nbvwqyojyzkbca1geyui0q139246600; oops=AgFYJQ1nP9WALHTRUDhMxiXz8okKGp_rOXTePRed-ce0lWKpZa4S4eFLjd25ptaFL7N6jH0P3qlgVwAAAAAENAAA-uCyNXt2Qw-1rHWHcPHOd0oB3MNcH1OGy0yWq91p6kguwsuYnf8WrP4P2ukXj16Q; u=2828001279; _lx_utm=utm_source%3Dmeishi.meituan.com%26utm_medium%3Dreferral%26utm_content%3D%252F; i_extend=C122574087627551131098249882058051698863_b0_a滕王阁_f1422003946H__a100173__b3; __utma=74597006.1028145698.1776739936.1777087842.1777441297.4; __utmc=74597006; com.sankuai.wmcapp.openh5.static_strategy=tCfw4c3ZBq; appVersion=null; appmock=null; au_trace_key_net=default; openh5_uuid=25F305DB64D37F5D1E35F365C6BDF3837922417522536C5CFE0D1FC21FBD5076; WEBDFPID=zx2362xw54255z6815z4z5u26uz2xwzx80wz54z08wx97958ywu609x0-1777527708809-1776578839565ICKIOMKfd79fef3d01d5e9aadc18ccd4d0c95074236; utm_source_rg=AM%25od1oVoY%25348%250wNnmNw-Y8NYY0maEY080YpNmp0Nw-0wae-0Y80ea-wBCBYaU-pmeBwe; isIframe=false; showTopHeader=show; isTcMpa=false; userIdCanceled=0; uuidCanceled=0; logan_session_token=n6whzbtwcc0iekwrw6c7'
obj_toString(document, 'HTMLDocument')
Object.defineProperty(HTMLDocument.prototype, "getElementsByTagName", {
    writable:true,
    enumerable:true,
    configurable:true,
    value:function getElementsByTagName(args){
        console.log('document.getElementsByTagName("' + args + '")');
        if (args === 'script'){
            return {
                "0": {},
                "1": {},
                "2": {},
                "3": {},
                "4": {},
                "5": {},
                "6": {},
                "7": {},
                "8": {},
                "9": {},
                "10": {},
                "11": {},
                "12": {},
                "13": {},
                "14": {},
                "15": {
                    "timeout": 120
                },
                "16": {
                    "timeout": 120
                },
                "17": {
                    "timeout": 120
                },
                "18": {
                    "timeout": 120
                },
                "19": {},
                "20": {},
                "21": {},
                "22": {},
                "23": {},
                "24": {},
                "25": {},
                "26": {},
                "27": {},
                "28": {},
                "29": {},
                "30": {},
                "31": {},
                "32": {},
                "33": {},
                "34": {}
            }

        }

    }

})
Object.defineProperty(HTMLDocument.prototype, "createElement", {
    writable:true,
    enumerable:true,
    configurable:true,
    value:function createElement(args){
        console.log('document.createElement("' + args + '")');
        if (args === 'div'){
            return '<div></div>'
        }
        if (args === 'canvas'){
            return '<canvas>'
        }

    }

})
Object.defineProperty(HTMLDocument.prototype, "createEvent", {
    writable:true,
    enumerable:true,
    configurable:true,
    value:function createEvent(args){
        console.log('document.createEvent("' + args + '")');

    }

})

HTMLHtmlElement = function () {
    this.tagName="HTML"
    this.scrollHeight = 1002;
    this.scrollLeft = 0;
    this.scrollTop = 0;
    this.scrollWidth = 1528;
    this.offsetHeight = 1002;
    this.offsetLeft = 0;
    this.offsetParent = null;
    this.offsetTop = 0;
    this.offsetWidth = 1528;
    this.className = "";
    this.clientHeight = 118;
    this.clientLeft = 0;
    this.clientTop = 0;
    this.clientWidth = 1528;
    this.contentEditable = "inherit";
    this.currentCSSZoom = 1;
    this.childElementCount = 2
    this.attributes = {
        "0": {}
    }
    this.getAttribute = function(args){
        console.log('document.documentElement.getAttribute("' + args + '")')
        if (args === 'selenium'){
            return null
        }
        if (args === 'webdriver'){
            return null
        }
        if (args === 'driver'){
            return null
        }
    }


}
document.documentElement = watch(new HTMLHtmlElement(),'document.documentElement')

Screen = function () {
    this.availHeight = 816;
    this.availLeft = 0;
    this.availTop = 0;
    this.availWidth = 1536;
    this.colorDepth = 24;
    this.height = 864;
    this.isExtended = false;
    this.onchange = null;
    this.pixelDepth = 24;
    this.width = 1536;
}
screen = new Screen()
obj_toString(screen, 'Screen')