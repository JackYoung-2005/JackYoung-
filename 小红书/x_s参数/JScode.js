require('./evn')
require('./code_source')
const Crypto = require('crypto-js')

// 魔改base64函数
const f = [
    "Z",
    "m",
    "s",
    "e",
    "r",
    "b",
    "B",
    "o",
    "H",
    "Q",
    "t",
    "N",
    "P",
    "+",
    "w",
    "O",
    "c",
    "z",
    "a",
    "/",
    "L",
    "p",
    "n",
    "g",
    "G",
    "8",
    "y",
    "J",
    "q",
    "4",
    "2",
    "K",
    "W",
    "Y",
    "j",
    "0",
    "D",
    "S",
    "f",
    "d",
    "i",
    "k",
    "x",
    "3",
    "V",
    "T",
    "1",
    "6",
    "I",
    "l",
    "U",
    "A",
    "F",
    "M",
    "9",
    "7",
    "h",
    "E",
    "C",
    "v",
    "u",
    "R",
    "X",
    "5"
]
function tripletToBase64(e) {
            return f[e >> 18 & 63] + f[e >> 12 & 63] + f[e >> 6 & 63] + f[63 & e]
        }
function encodeChunk(e, r, a) {
            for (var f, c = [], s = r; s < a; s += 3)
                f = (e[s] << 16 & 0xff0000) + (e[s + 1] << 8 & 65280) + (255 & e[s + 2]),
                c.push(tripletToBase64(f));
            return c.join("")
        }
function encodeUtf8(e) {
    for (var r = encodeURIComponent(e), a = [], f = 0; f < r.length; f++) {
        var c = r.charAt(f);
        if ("%" === c) {
            var s = parseInt(r.charAt(f + 1) + r.charAt(f + 2), 16);
            a.push(s),
            f += 2
        } else
            a.push(c.charCodeAt(0))
    }
    return a
}
function b64Encode(e) {
    for (var r, a = e.length, c = a % 3, s = [], d = 16383, u = 0, l = a - c; u < l; u += d)
        s.push(encodeChunk(e, u, u + d > l ? l : u + d));
    return 1 === c ? (r = e[a - 1],
    s.push(f[r >> 2] + f[r << 4 & 63] + "==")) : 2 === c && (r = (e[a - 2] << 8) + e[a - 1],
    s.push(f[r >> 10] + f[r >> 4 & 63] + f[r << 2 & 63] + "=")),
    s.join("")
}


// 生成x-s参数
function get_xs(params) {
    if (params['type'] === 'comments'){
        // 构建query字符串
    const query = Object.keys(params.param).map(key => {
        let value = params.param[key]
        if (typeof value === 'object') {
            value = JSON.stringify(value)
        }
        return key + '=' + encodeURIComponent(value).replace(/%2C/g, ',')
    }).join('&')
    // 完整URL
    f1 = params.link + '?' + query;
    c = Crypto.MD5(f1).toString()
    s = Crypto.MD5(f1).toString()
    }else{
        f1 = params['link'] + JSON.stringify(params['param'])
        c = Crypto.MD5(f1).toString()
        s = Crypto.MD5(params.link).toString()
    }
    // 原有加密逻辑
    console.log('f1:::',f1)
    console.log('c:::',c)
    console.log('s:::',s)

    x_s = window.mnsv2(f1, c, s);
    l = {
        "x0": "4.3.1",
        "x1": "xhs-pc-web",
        "x2": "Windows",
        "x3": x_s,
        "x4": "object"
    }
    wordArray = encodeUtf8(JSON.stringify(l));
    b64_xs = b64Encode(wordArray)

    return "XYS_" + b64_xs
}

// 调用
// param = {
//     'type': 'comments',
//     'link': '/api/sns/web/v2/comment/sub/page',
//     'param': {
//         'note_id': '69d0ff1b000000002200e64b',
//         'root_comment_id': '69d11cd00000000009004b62',
//         'num': '10',
//         'cursor': '69d45068000000000503a0e0',
//         'image_formats': 'jpg,webp,avif',
//         'top_comment_id': '',
//         'xsec_token': 'AB6wqP4h1N_72FBtyTW3qC8BgTMNp5Ty2RtH_AZ9B1KUM='
//     }
// }
//
//
// // 调用函数
// const xs = get_xs(param);
// console.log('x-s::::',xs);

// 导出方法
module.exports = {main:get_xs}
