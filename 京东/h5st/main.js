const crypto = require('crypto-js');
require('./env')
require('./JsCode')


const params = {
    enc: "utf-8",
    pvid: "ee7eefc32dbc4452a512e74a2fc32537",
    area: "1_72_55652_0",
    page: 1,
    new_interval: true,
    s: 1
}


const paramsH5sign = {
        'appid': 'search-pc-java',
        'functionId': "pc_search_searchWare",
        'client': 'pc',
        'clientVersion': '1.0.0',
        't': new Date().getTime(),
        'body':crypto.SHA256(JSON.stringify(params)).toString()
    }
// console.log(paramsH5sign)

function main(paramsH5) {

    window.PSignCom = new window.ParamsSign({
            appId: "fb5df",
            preRequest: !1,
            onSign: function(t) {
                0 != t.code && K.O.postDraData(704, "ParamsSign签名不可用", "ParamsSign", "code != 0", "", "")
            },
            onRequestTokenRemotely: function(t) {
                t.code,
                t.message
            },
            onRequestToken: function(t) {
                t.code,
                t.message
            }
        })

    result = window.PSignCom._$sdnmd(paramsH5)
    console.log(result['h5st'].length)
    return result
}

console.log(main(paramsH5sign))
module.exports = {get_h5st:main}



