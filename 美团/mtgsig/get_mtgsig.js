require('./env')
require('./JsCode')


async function main(data,url,method) {
    const o = {
        "cache": false,
        "dataType": "json",
        "url": url,
        "type": method,
        "doNotShowToastr": true,
        "data": data,
        "context": null,
        "global": true,
        "accepts": {
            "script": "text/javascript, application/javascript, application/x-javascript",
            "json": "application/json",
            "xml": "application/xml, text/xml",
            "html": "text/html",
            "text": "text/plain"
        },
        "crossDomain": true,
        "timeout": 0,
        "processData": true,
        "method": method
    };

    try {
        // 2. 使用 await 获取签名结果
        const t = await H5guard.sign(o);

        // 3. 直接将 headers 返回出去
        return t.headers;
    } catch (e) {
        return null;
    }
}


// 测试
const data = 'optimus_code=10&optimus_risk_level=71&pageSize=20&page_index=13&offset=260&content_personalized_switch=0&sort_type=&slider_select_data=&activity_filter_codes=&wm_latitude=36932526&wm_longitude=122402300&wmUuidDeregistration=0&wmUserIdDeregistration=0&openh5_uuid=25F305DB64D37F5D1E35F365C6BDF3837922417522536C5CFE0D1FC21FBD5076&uuid=25F305DB64D37F5D1E35F365C6BDF3837922417522536C5CFE0D1FC21FBD5076'
const url = "https://i.waimai.meituan.com/tsp/open/openh5/home/shopList?set_name=waimai-huaxi&region_id=1000411300&_=1777610989142&yodaReady=h5&csecplatform=4&csecversion=4.2.0"
const method = 'POST'
// // 执行 main 并拿到 return 的数据
// main(data,url,method).then(res => {
//     if (res) {
//         // 这里打印的是你 return 出来的 t.headers
//         console.log(JSON.stringify(res.mtgsig));
//         console.log(res.mtgsig);
//     }
//     // 拿到 return 数据后强制退出，解决程序卡住的问题
//     process.exit(0);
// });


module.exports = {main:main}