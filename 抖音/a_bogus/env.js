window = global;

console_log = console.log
;(() => {
  'use strict'

  // 取原型链上的toString
  const $toString = Function.toString

  // 取方法名 reload
  const myFunction_toString_symbol = Symbol(
    '('.concat('', ')_', (Math.random() + '').toString(36))
  )

  const myToString = function () {
    return (
      (typeof this === 'function' && this[myFunction_toString_symbol]) ||
      $toString.call(this)
    )
  }

  function set_native(func, key, value) {
    Object.defineProperty(func, key, {
      enumerable: false, // 不可枚举
      configurable: true, // 可配置
      writable: true, // 可写
      value: value
    })
  }

  // 删除原型链上的toString
  delete Function.prototype['toString']

  // 自定义一个getter方法，其实就是一个hook
  set_native(Function.prototype, 'toString', myToString)

  // 套个娃，保护一下我们定义的toString:避免对toString再次toString
  set_native(
    Function.prototype.toString,
    myFunction_toString_symbol,
    'function toString() { [native code] }'
  )

  globalThis.safefunction = (func) => {
    set_native(
      func,
      myFunction_toString_symbol,
      `function ${func.name || ''}() { [native code] }`
    )
  }

  // 导出函数到globalThis，更改原型上的toString为自己的toString
  // 这个方法相当于过掉func的toString检测点
}).call(globalThis)
setInterval = function setInterval(){};safefunction(setInterval);
setTimeout = function setTimeout(){};safefunction(setTimeout);

window.requestAnimationFrame = function requestAnimationFrame(){};safefunction(window.requestAnimationFrame)
window.EventSource = function EventSource(){};safefunction(window.EventSource)
window.addEventListener = function addEventListener(){};safefunction(window.addEventListener)
window.OfflineAudioContext = function OfflineAudioContext(){};safefunction(window.OfflineAudioContext)
window.outerWidth = 1773
window.outerHeight = 293
window.innerWidth = 293
window.innerHeight = 293

window._sdkGlueVersionMap = {
    "sdkGlueVersion": "1.0.0.64-fix.01",
    "bdmsVersion": "1.0.1.19-fix.01",
    "captchaVersion": "4.0.10"
}
window.indexedDB = {

}

span = {classList:{}}
canvas = {getContext:function getContext(){}}
safefunction(canvas.getContext)
document = {
  createElement: function (tag) {
    if (tag == 'span'){
      return span
    }
    if (tag == 'canvas'){
      return canvas
    }
    console_log('createElement:::', tag)
    return {}
  },
  documentElement: {},
  createEvent: function createEvent() {},
  addEventListener: function addEventListener(){},
}
// 模拟这些属性避免检测
window.CefSharp = {
  isMock: true,
  BindObjectAsync: function() { return Promise.resolve(); }
};

window.eoapi = {
  mock: true,
  invoke: function() { console.log('eoapi mock called'); }
};

window.eoWebBrowserDispatcher = {
  mock: true,
  dispatch: function() {}
};

safefunction(document.createElement)
safefunction(document.createEvent)
safefunction(document.addEventListener)
document.all = {}
document.location = {
    "ancestorOrigins": {},
    "href": "https://www.douyin.com/user/MS4wLjABAAAAPs96_XYppoAye-VK57HhjucNZfR_mTyR4KKqDBHdt5k?from_tab_name=main&vid=7521300075331456256",
    "origin": "https://www.douyin.com",
    "protocol": "https:",
    "host": "www.douyin.com",
    "hostname": "www.douyin.com",
    "port": "",
    "pathname": "/user/MS4wLjABAAAAPs96_XYppoAye-VK57HhjucNZfR_mTyR4KKqDBHdt5k",
    "search": "?from_tab_name=main&vid=7521300075331456256",
    "hash": ""
}

location = {
    "ancestorOrigins": {},
    "href": "https://www.douyin.com/user/MS4wLjABAAAAPs96_XYppoAye-VK57HhjucNZfR_mTyR4KKqDBHdt5k?from_tab_name=main",
    "origin": "https://www.douyin.com",
    "protocol": "https:",
    "host": "www.douyin.com",
    "hostname": "www.douyin.com",
    "port": "",
    "pathname": "/user/MS4wLjABAAAAPs96_XYppoAye-VK57HhjucNZfR_mTyR4KKqDBHdt5k",
    "search": "?from_tab_name=main",
    "hash": ""
}

navigator = {"userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36"}
navigator.storage = {}
navigator.platform = 'Win32'
history = {}
screen = {availWidth: 1920, availHeight: 1040, width: 1920, height: 1080, colorDepth: 24, availLeft: 0}
localStorage = {}
localStorage.getItem = function getItem(){};safefunction(localStorage.getItem)


sessionStorage = {}

Object.defineProperty(document, Symbol.toStringTag, {
  value: 'HTMLDocument',
  configurable: true,
  writable: true
});
Object.defineProperty(location, Symbol.toStringTag, {
  value: 'Location',
  configurable: true,
  writable: true
});
Object.defineProperty(navigator, Symbol.toStringTag, {
  value: 'Navigator',
  configurable: true,
  writable: true
});
Object.defineProperty(history, Symbol.toStringTag, {
  value: 'History',
  configurable: true,
  writable: true
});
Object.defineProperty(screen, Symbol.toStringTag, {
  value: 'Screen',
  configurable: true,
  writable: true
});
Object.defineProperty(localStorage, Symbol.toStringTag, {
  value: 'Storage',
  configurable: true,
  writable: true
});
Object.defineProperty(sessionStorage, Symbol.toStringTag, {
  value: 'Storage',
  configurable: true,
  writable: true
});

XMLHttpRequest = function XMLHttpRequest() {}
safefunction(XMLHttpRequest)
XMLHttpRequest.prototype.send = function send() {}
safefunction(XMLHttpRequest.prototype.send)

function get_environment(proxy_array) {
  if (!Array.isArray(proxy_array)) {
    console.error('Expected an array of property names')
    return
  }

  const createProxyHandler = (objName) => ({
    get(target, property, receiver) {
      const value = Reflect.get(target, property, receiver)
      console.log(
        `[GET] 对象: ${objName}, 属性: ${String(property)}, ` +
          `类型: ${typeof property}, 值类型: ${typeof value}, ` +
          `值: ${typeof value === 'function' ? 'function' : JSON.stringify(value)}`
      )
      return value
    },
    set(target, property, value, receiver) {
      console.log(
        `[SET] 对象: ${objName}, 属性: ${String(property)}, ` +
          `类型: ${typeof property}, 值类型: ${typeof value}, ` +
          `值: ${typeof value === 'function' ? 'function' : JSON.stringify(value)}`
      )
      return Reflect.set(target, property, value, receiver)
    },
    apply(target, thisArg, argumentsList) {
      console.log(
        `[CALL] 函数: ${objName}, ` + `参数: ${JSON.stringify(argumentsList)}`
      )
      return Reflect.apply(target, thisArg, argumentsList)
    }
  })

  proxy_array.forEach((objName) => {
    try {
      // 尝试获取全局对象
      let obj
      if (objName in window) {
        obj = window[objName]
      } else {
        obj = {}
        // 如果是特殊对象需要初始化
        if (objName === 'localStorage' || objName === 'sessionStorage') {
          obj = {
            getItem: () => {},
            setItem: () => {},
            removeItem: () => {},
            clear: () => {},
            length: 0,
            key: () => null
          }
        }
        window[objName] = obj
      }

      // 创建代理
      window[objName] = new Proxy(obj, createProxyHandler(objName))
    } catch (e) {
      console.error(`处理 ${objName} 时出错:`, e)
      window[objName] = new Proxy({}, createProxyHandler(objName))
    }
  })
}

proxy_array = [
  'window',
  'document',
  'location',
  'navigator',
  'history',
  'screen',
  'localStorage',
  'sessionStorage',
    'span',
    'canvas'
]
get_environment(proxy_array)


require('./bdms.js')
t = {
  aid: 6383,
  pageId: 6241,
  paths: [
    '^/webcast/',
    '^/aweme/v1/',
    '^/aweme/v2/',
    '/v1/message/send',
    '^/live/',
    '^/captcha/',
    '^/ecom/'
  ],
  boe: false,
  ddrt: 8.5,
  ic: 8.5
}
window.bdms.init(t)

function get_ab(params) {
  xhr = new XMLHttpRequest()
  xhr.bdmsInvokeList = [
    {
      args: [
        'GET',
        params,
        true
      ]
    },
    {
      args: ['Accept', 'application/json, text/plain, */*']
    },
    {
      args: [
        'uifid',
        '2eb4f745f9fe6544447c1d68cb43a44931f67e23b1951fd9ca8b76ce94a622365d5383cfffac86a6f5d9f4a996c6515de06c474d5bc145dbf8585b9de15cac9a709982e71e6779405f6a51c415bdcdb57c7efe5d11d9657d7e4f163276f1e3a551eb7337a5493c4c969bd7434a32cd5b5a9f5c0db12d2e64408a381b39018f7ae415d4210d1f59164ebb59fe54ad4412f2860dfd832192820486bf3a1e82c9b4'
      ]
    }
  ]
  xhr.invokeList = [
    {
      name: 'addEventListener',
      args: ['load', null]
    },
    {
      name: 'addEventListener',
      args: ['error', null]
    }
  ]
  xhr.send(null)
  return window.a_bogus
}

params = '/aweme/v1/web/comment/list/?device_platform=webapp&aid=6383&channel=channel_pc_web&aweme_id=7606501299110107505&pc_img_format=webp&cursor=0&count=10&item_type=0&insert_ids=&whale_cut_token=&cut_version=1&rcFT=&update_version_code=170400&pc_client_type=1&pc_libra_divert=Windows&support_h265=1&support_dash=1&cpu_core_num=20&version_code=170400&version_name=17.4.0&cookie_enabled=true&screen_width=1440&screen_height=900&browser_language=zh-CN&browser_platform=Win32&browser_name=Chrome&browser_version=147.0.0.0&browser_online=true&engine_name=Blink&engine_version=147.0.0.0&os_name=Windows&os_version=10&device_memory=32&platform=PC&downlink=1.7&effective_type=4g&round_trip_time=50&webid=7631068450815608356&uifid=b684c79658e5909c916769b2e80c406ed39ea89d6c7cce823581f3f595501a34b488cb65fc2a2695b0f84376c789e038dedf62457b5f6aa9f66f3299335eb995639cb8bcbc25aed39568fc8fde26333500818f91bca2b8d91f946dec71a6ac5a87638b484e2eea9c519362d36dc0390a62d561f84ed5cd29e2c2637dfa31367bb95c148989951468801daa3e7c279dda437da70529996e6bd8947ed616536c33&verifyFp=verify_mo851318_le6bGmGR_yiwk_4Rp8_BsSA_zosTsxeI66iH&fp=verify_mo851318_le6bGmGR_yiwk_4Rp8_BsSA_zosTsxeI66iH&msToken=BscYxBtgh218gLCK_1foBfTseIK5LnLfTq1MykxP5QhUMZjidllEFfgINnrYeqSrj1hnpeLISH1HtFqoYAcxbwI60o_HVKctmgUyxRZ8r8N-ol8evYGr2mh5oEhwRoUK-UlvhWHcUqwf6rfLda8GEYNeufTQ4PXD2E2R7wWFLVipjg%3D%3D'
console.log('\na_bogus:::',get_ab(params));
