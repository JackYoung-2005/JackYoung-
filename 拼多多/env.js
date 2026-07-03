window = (function(){
  var v_saf;!function(){var n=Function.toString,t=[],i=[],o=[].indexOf.bind(t),e=[].push.bind(t),r=[].push.bind(i);function u(n,t){return-1==o(n)&&(e(n),r(`function ${t||n.name||""}() { [native code] }`)),n}Object.defineProperty(Function.prototype,"toString",{enumerable:!1,configurable:!0,writable:!0,value:function(){return"function"==typeof this&&i[o(this)]||n.call(this)}}),u(Function.prototype.toString,"toString"),v_saf=u}();


  function _inherits(t, e) {
    t.prototype = Object.create(e.prototype, {
      constructor: { value: t, writable: !0, configurable: !0 }
    }), e && Object.setPrototypeOf(t, e) }
  Object.defineProperty(Object.prototype, Symbol.toStringTag, {
    get() { return Object.getPrototypeOf(this).constructor.name }, configurable:true,
  });
  var v_new_toggle = true
  var v_console_logger = console.log
  var v_allow_types = ["string", "number", "boolean"]
  console.log=v_saf(function(a){if (v_allow_types.indexOf(typeof a)!=-1){v_console_logger.apply(this, arguments)}}, "log")
  console.debug=v_saf(function(a){if (v_allow_types.indexOf(typeof a)!=-1){v_console_logger.apply(this, arguments)}}, "debug")
  console.warn=v_saf(function(a){if (v_allow_types.indexOf(typeof a)!=-1){v_console_logger.apply(this, arguments)}}, "warn")
  console.info=v_saf(function(a){if (v_allow_types.indexOf(typeof a)!=-1){v_console_logger.apply(this, arguments)}}, "info")
  var v_console_log = function(){if (!v_new_toggle){ v_console_logger.apply(this, arguments) }}
  var v_random = (function() { var seed = 276951438; return function random() { return seed = (seed * 9301 + 49297) % 233280, (seed / 233280)} })()
  var v_new = function(v){var temp=v_new_toggle; v_new_toggle = true; var r = new v; v_new_toggle = temp; return r}


  PerformanceObserver = v_saf(function PerformanceObserver(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  EventTarget = v_saf(function EventTarget(){;})
  PerformanceObserverEntryList = v_saf(function PerformanceObserverEntryList(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  Navigator = v_saf(function Navigator(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };this._plugins = typeof PluginArray=='undefined'?[]:v_new(PluginArray); this._mimeTypes = typeof MimeTypeArray=='undefined'?[]:v_new(MimeTypeArray)})
  HTMLCollection = v_saf(function HTMLCollection(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  Storage = v_saf(function Storage(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  Image = v_saf(function Image(){;return v_new(HTMLImageElement)})
  MessageChannel = v_saf(function MessageChannel(){;})
  MutationObserver = v_saf(function MutationObserver(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  Event = v_saf(function Event(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  IntersectionObserverEntry = v_saf(function IntersectionObserverEntry(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  DOMTokenList = v_saf(function DOMTokenList(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  IntersectionObserver = v_saf(function IntersectionObserver(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  WebKitMutationObserver = v_saf(function WebKitMutationObserver(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  History = v_saf(function History(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  Crypto = v_saf(function Crypto(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };
    this.getRandomValues = function(){
      v_console_log('  [*] Crypto -> getRandomValues[func]')
      var e=arguments[0]; return e.map(function(x, i){return e[i]=v_random()*1073741824});}
    this.randomUUID = function(){
      v_console_log('  [*] Crypto -> randomUUID[func]')
      function get2(){return (v_random()*255^0).toString(16).padStart(2,'0')}
      function rpt(func,num){var r=[];for(var i=0;i<num;i++){r.push(func())};return r.join('')}
      return [rpt(get2,4),rpt(get2,2),rpt(get2,2),rpt(get2,2),rpt(get2,6)].join('-')}})
  CSSStyleDeclaration = v_saf(function CSSStyleDeclaration(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  PluginArray = v_saf(function PluginArray(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };
    this[0]=v_new(Plugin);this[0].description="Portable Document Format";this[0].filename="internal-pdf-viewer";this[0].length=2;this[0].name="PDF Viewer";
    this[1]=v_new(Plugin);this[1].description="Portable Document Format";this[1].filename="internal-pdf-viewer";this[1].length=2;this[1].name="Chrome PDF Viewer";
    this[2]=v_new(Plugin);this[2].description="Portable Document Format";this[2].filename="internal-pdf-viewer";this[2].length=2;this[2].name="Chromium PDF Viewer";
    this[3]=v_new(Plugin);this[3].description="Portable Document Format";this[3].filename="internal-pdf-viewer";this[3].length=2;this[3].name="Microsoft Edge PDF Viewer";
    this[4]=v_new(Plugin);this[4].description="Portable Document Format";this[4].filename="internal-pdf-viewer";this[4].length=2;this[4].name="WebKit built-in PDF";})
  ResizeObserver = v_saf(function ResizeObserver(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  DOMRectReadOnly = v_saf(function DOMRectReadOnly(){;})
  ResizeObserverEntry = v_saf(function ResizeObserverEntry(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  URLSearchParams = v_saf(function URLSearchParams(){;})
  Request = v_saf(function Request(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  Headers = v_saf(function Headers(){;})
  Response = v_saf(function Response(){;})
  MimeType = v_saf(function MimeType(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  Plugin = v_saf(function Plugin(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  WebGLRenderingContext = v_saf(function WebGLRenderingContext(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };
    function WebGLBuffer(){}
    function WebGLProgram(){}
    function WebGLShader(){}
    this._toggle = {}
    this.createBuffer = function(){ v_console_log('  [*] WebGLRenderingContext -> createBuffer[func]'); return v_new(WebGLBuffer) }
    this.createProgram = function(){ v_console_log('  [*] WebGLRenderingContext -> createProgram[func]'); return v_new(WebGLProgram) }
    this.createShader = function(){ v_console_log('  [*] WebGLRenderingContext -> createShader[func]'); return v_new(WebGLShader) }
    this.getSupportedExtensions = function(){
      v_console_log('  [*] WebGLRenderingContext -> getSupportedExtensions[func]')
      return [
        "ANGLE_instanced_arrays", "EXT_blend_minmax", "EXT_color_buffer_half_float", "EXT_disjoint_timer_query", "EXT_float_blend", "EXT_frag_depth",
        "EXT_shader_texture_lod", "EXT_texture_compression_bptc", "EXT_texture_compression_rgtc", "EXT_texture_filter_anisotropic", "WEBKIT_EXT_texture_filter_anisotropic", "EXT_sRGB",
        "KHR_parallel_shader_compile", "OES_element_index_uint", "OES_fbo_render_mipmap", "OES_standard_derivatives", "OES_texture_float", "OES_texture_float_linear",
        "OES_texture_half_float", "OES_texture_half_float_linear", "OES_vertex_array_object", "WEBGL_color_buffer_float", "WEBGL_compressed_texture_s3tc",
        "WEBKIT_WEBGL_compressed_texture_s3tc", "WEBGL_compressed_texture_s3tc_srgb", "WEBGL_debug_renderer_info", "WEBGL_debug_shaders",
        "WEBGL_depth_texture","WEBKIT_WEBGL_depth_texture","WEBGL_draw_buffers","WEBGL_lose_context","WEBKIT_WEBGL_lose_context","WEBGL_multi_draw",
      ]
    }
    var self = this
    this.getExtension = function(key){
      v_console_log('  [*] WebGLRenderingContext -> getExtension[func]:', key)
      class WebGLDebugRendererInfo{
        get UNMASKED_VENDOR_WEBGL(){self._toggle[37445]=1;return 37445}
        get UNMASKED_RENDERER_WEBGL(){self._toggle[37446]=1;return 37446}
      }
      class EXTTextureFilterAnisotropic{}
      class WebGLLoseContext{
        loseContext(){}
        restoreContext(){}
      }
      if (key == 'WEBGL_debug_renderer_info'){ var r = new WebGLDebugRendererInfo }
      if (key == 'EXT_texture_filter_anisotropic'){ var r = new EXTTextureFilterAnisotropic }
      if (key == 'WEBGL_lose_context'){ var r = new WebGLLoseContext }
      else{ var r = new WebGLDebugRendererInfo }
      return r
    }
    this.getParameter = function(key){
      v_console_log('  [*] WebGLRenderingContext -> getParameter[func]:', key)
      if (this._toggle[key]){
        if (key == 37445){ return "Google Inc. (NVIDIA)" }
        if (key == 37446){ return "ANGLE (NVIDIA, NVIDIA GeForce GTX 1050 Ti Direct3D11 vs_5_0 ps_5_0, D3D11-27.21.14.5671)" }
      }else{
        if (key == 33902){ return new Float32Array([1,1]) }
        if (key == 33901){ return new Float32Array([1,1024]) }
        if (key == 35661){ return 32 }
        if (key == 34047){ return 16 }
        if (key == 34076){ return 16384 }
        if (key == 36349){ return 1024 }
        if (key == 34024){ return 16384 }
        if (key == 34930){ return 16 }
        if (key == 3379){ return 16384 }
        if (key == 36348){ return 30 }
        if (key == 34921){ return 16 }
        if (key == 35660){ return 16 }
        if (key == 36347){ return 4095 }
        if (key == 3386){ return new Int32Array([32767, 32767]) }
        if (key == 3410){ return 8 }
        if (key == 7937){ return "WebKit WebGL" }
        if (key == 35724){ return "WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)" }
        if (key == 3415){ return 0 }
        if (key == 7936){ return "WebKit" }
        if (key == 7938){ return "WebGL 1.0 (OpenGL ES 2.0 Chromium)" }
        if (key == 3411){ return 8 }
        if (key == 3412){ return 8 }
        if (key == 3413){ return 8 }
        if (key == 3414){ return 24 }
        return null
      }
    }
    this.getContextAttributes = function(){
      v_console_log('  [*] WebGLRenderingContext -> getContextAttributes[func]')
      return {
        alpha: true,
        antialias: true,
        depth: true,
        desynchronized: false,
        failIfMajorPerformanceCaveat: false,
        powerPreference: "default",
        premultipliedAlpha: true,
        preserveDrawingBuffer: false,
        stencil: false,
        xrCompatible: false,
      }
    }
    this.getShaderPrecisionFormat = function(a,b){
      v_console_log('  [*] WebGLRenderingContext -> getShaderPrecisionFormat[func]')
      function WebGLShaderPrecisionFormat(){}
      var r1 = v_new(WebGLShaderPrecisionFormat)
      r1.rangeMin = 127
      r1.rangeMax = 127
      r1.precision = 23
      var r2 = v_new(WebGLShaderPrecisionFormat)
      r2.rangeMin = 31
      r2.rangeMax = 30
      r2.precision = 0
      if (a == 35633 && b == 36338){ return r1 } if (a == 35633 && b == 36337){ return r1 } if (a == 35633 && b == 36336){ return r1 }
      if (a == 35633 && b == 36341){ return r2 } if (a == 35633 && b == 36340){ return r2 } if (a == 35633 && b == 36339){ return r2 }
      if (a == 35632 && b == 36338){ return r1 } if (a == 35632 && b == 36337){ return r1 } if (a == 35632 && b == 36336){ return r1 }
      if (a == 35632 && b == 36341){ return r2 } if (a == 35632 && b == 36340){ return r2 } if (a == 35632 && b == 36339){ return r2 }
      throw Error('getShaderPrecisionFormat')
    }
    v_saf(this.createBuffer, 'createBuffer')
    v_saf(this.createProgram, 'createProgram')
    v_saf(this.createShader, 'createShader')
    v_saf(this.getSupportedExtensions, 'getSupportedExtensions')
    v_saf(this.getExtension, 'getExtension')
    v_saf(this.getParameter, 'getParameter')
    v_saf(this.getContextAttributes, 'getContextAttributes')
    v_saf(this.getShaderPrecisionFormat, 'getShaderPrecisionFormat')})
  OffscreenCanvasRenderingContext2D = v_saf(function OffscreenCanvasRenderingContext2D(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  Permissions = v_saf(function Permissions(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  AudioBuffer = v_saf(function AudioBuffer(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  CanvasRenderingContext2D = v_saf(function CanvasRenderingContext2D(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  FontFace = v_saf(function FontFace(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  WebGL2RenderingContext = v_saf(function WebGL2RenderingContext(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  TextEncoder = v_saf(function TextEncoder(){;})
  AudioListener = v_saf(function AudioListener(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  AudioParam = v_saf(function AudioParam(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  TextMetrics = v_saf(function TextMetrics(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  NavigatorUAData = v_saf(function NavigatorUAData(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  MediaCapabilities = v_saf(function MediaCapabilities(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  MimeTypeArray = v_saf(function MimeTypeArray(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };
    this[0]=v_new(Plugin);this[0].description="Portable Document Format";this[0].enabledPlugin={"0":{},"1":{}};this[0].suffixes="pdf";this[0].type="application/pdf";
    this[1]=v_new(Plugin);this[1].description="Portable Document Format";this[1].enabledPlugin={"0":{},"1":{}};this[1].suffixes="pdf";this[1].type="text/pdf";})
  PerformanceEntry = v_saf(function PerformanceEntry(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  MutationRecord = v_saf(function MutationRecord(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  NodeList = v_saf(function NodeList(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  RTCIceCandidate = v_saf(function RTCIceCandidate(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  RTCSessionDescription = v_saf(function RTCSessionDescription(){;})
  FormData = v_saf(function FormData(){;})
  webkitURL = v_saf(function webkitURL(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  Path2D = v_saf(function Path2D(){;})
  Node = v_saf(function Node(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Node, EventTarget)
  Screen = v_saf(function Screen(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Screen, EventTarget)
  XMLHttpRequestEventTarget = v_saf(function XMLHttpRequestEventTarget(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(XMLHttpRequestEventTarget, EventTarget)
  MessagePort = v_saf(function MessagePort(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(MessagePort, EventTarget)
  Performance = v_saf(function Performance(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Performance, EventTarget)
  UIEvent = v_saf(function UIEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(UIEvent, Event)
  MediaQueryList = v_saf(function MediaQueryList(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(MediaQueryList, EventTarget)
  OffscreenCanvas = v_saf(function OffscreenCanvas(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(OffscreenCanvas, EventTarget)
  BaseAudioContext = v_saf(function BaseAudioContext(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(BaseAudioContext, EventTarget)
  AudioNode = v_saf(function AudioNode(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(AudioNode, EventTarget)
  ScreenOrientation = v_saf(function ScreenOrientation(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(ScreenOrientation, EventTarget)
  PerformanceResourceTiming = v_saf(function PerformanceResourceTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceResourceTiming, PerformanceEntry)
  RTCPeerConnection = v_saf(function RTCPeerConnection(){;}); _inherits(RTCPeerConnection, EventTarget)
  Worker = v_saf(function Worker(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Worker, EventTarget)
  VisualViewport = v_saf(function VisualViewport(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(VisualViewport, EventTarget)
  OfflineAudioCompletionEvent = v_saf(function OfflineAudioCompletionEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(OfflineAudioCompletionEvent, Event)
  RTCPeerConnectionIceEvent = v_saf(function RTCPeerConnectionIceEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(RTCPeerConnectionIceEvent, Event)
  webkitRTCPeerConnection = v_saf(function webkitRTCPeerConnection(){;}); _inherits(webkitRTCPeerConnection, EventTarget)
  Document = v_saf(function Document(){;}); _inherits(Document, Node)
  Element = v_saf(function Element(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Element, Node)
  XMLHttpRequest = v_saf(function XMLHttpRequest(){;}); _inherits(XMLHttpRequest, XMLHttpRequestEventTarget)
  MouseEvent = v_saf(function MouseEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(MouseEvent, UIEvent)
  AnalyserNode = v_saf(function AnalyserNode(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(AnalyserNode, AudioNode)
  BiquadFilterNode = v_saf(function BiquadFilterNode(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(BiquadFilterNode, AudioNode)
  DynamicsCompressorNode = v_saf(function DynamicsCompressorNode(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(DynamicsCompressorNode, AudioNode)
  AudioScheduledSourceNode = v_saf(function AudioScheduledSourceNode(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(AudioScheduledSourceNode, AudioNode)
  OfflineAudioContext = v_saf(function OfflineAudioContext(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(OfflineAudioContext, BaseAudioContext)
  HTMLElement = v_saf(function HTMLElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLElement, Element)
  PointerEvent = v_saf(function PointerEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PointerEvent, MouseEvent)
  OscillatorNode = v_saf(function OscillatorNode(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(OscillatorNode, AudioScheduledSourceNode)
  HTMLImageElement = v_saf(function HTMLImageElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLImageElement, HTMLElement)
  HTMLScriptElement = v_saf(function HTMLScriptElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLScriptElement, HTMLElement)
  HTMLAnchorElement = v_saf(function HTMLAnchorElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };v_hook_href(this, 'HTMLAnchorElement', location.href)}); _inherits(HTMLAnchorElement, HTMLElement)
  HTMLLinkElement = v_saf(function HTMLLinkElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLLinkElement, HTMLElement)
  HTMLMediaElement = v_saf(function HTMLMediaElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLMediaElement, HTMLElement)
  HTMLCanvasElement = v_saf(function HTMLCanvasElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLCanvasElement, HTMLElement)
  HTMLIFrameElement = v_saf(function HTMLIFrameElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLIFrameElement, HTMLElement)
  Window = v_saf(function Window(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Window, EventTarget)
  HTMLDocument = v_saf(function HTMLDocument(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };Object.defineProperty(this, 'location', {get(){return location}})}); _inherits(HTMLDocument, Document)
  HTMLHtmlElement = v_saf(function HTMLHtmlElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLHtmlElement, HTMLElement)
  HTMLHeadElement = v_saf(function HTMLHeadElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLHeadElement, HTMLElement)
  HTMLBodyElement = v_saf(function HTMLBodyElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLBodyElement, HTMLElement)
  Location = v_saf(function Location(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  PerformanceElementTiming = v_saf(function PerformanceElementTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceElementTiming, PerformanceEntry)
  PerformanceEventTiming = v_saf(function PerformanceEventTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceEventTiming, PerformanceEntry)
  PerformanceLongTaskTiming = v_saf(function PerformanceLongTaskTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceLongTaskTiming, PerformanceEntry)
  PerformanceMark = v_saf(function PerformanceMark(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceMark, PerformanceEntry)
  PerformanceMeasure = v_saf(function PerformanceMeasure(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceMeasure, PerformanceEntry)
  PerformanceNavigation = v_saf(function PerformanceNavigation(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  PerformanceNavigationTiming = v_saf(function PerformanceNavigationTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceNavigationTiming, PerformanceResourceTiming)
  PerformancePaintTiming = v_saf(function PerformancePaintTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformancePaintTiming, PerformanceEntry)
  PerformanceServerTiming = v_saf(function PerformanceServerTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  PerformanceTiming = v_saf(function PerformanceTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  HTMLUnknownElement = v_saf(function HTMLUnknownElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLUnknownElement, HTMLElement)
  Touch = v_saf(function Touch(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  TouchEvent = v_saf(function TouchEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(TouchEvent, UIEvent)
  HTMLDivElement = v_saf(function HTMLDivElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLDivElement, HTMLElement)
  HTMLStyleElement = v_saf(function HTMLStyleElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLStyleElement, HTMLElement)
  Object.defineProperties(PerformanceObserver.prototype, {
    observe: {value: v_saf(function observe(){v_console_log("  [*] PerformanceObserver -> observe[func]", [].slice.call(arguments));})},
    [Symbol.toStringTag]: {value:"PerformanceObserver",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(EventTarget.prototype, {
    dispatchEvent: {value: v_saf(function dispatchEvent(){v_console_log("  [*] EventTarget -> dispatchEvent[func]", [].slice.call(arguments));})},
    removeEventListener: {value: v_saf(function removeEventListener(){v_console_log("  [*] EventTarget -> removeEventListener[func]", [].slice.call(arguments));})},
    [Symbol.toStringTag]: {value:"EventTarget",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(PerformanceObserverEntryList.prototype, {
    getEntries: {value: v_saf(function getEntries(){v_console_log("  [*] PerformanceObserverEntryList -> getEntries[func]", [].slice.call(arguments));})},
    [Symbol.toStringTag]: {value:"PerformanceObserverEntryList",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(Navigator.prototype, {
    userAgent: {get(){ v_console_log("  [*] Navigator -> userAgent[get]", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36");return "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36" }},
    scheduling: {get(){ v_console_log("  [*] Navigator -> scheduling[get]", {});return {} }},
    product: {get(){ v_console_log("  [*] Navigator -> product[get]", "Gecko");return "Gecko" }},
    platform: {get(){ v_console_log("  [*] Navigator -> platform[get]", "Win32");return "Win32" }},
    webdriver: {get(){ v_console_log("  [*] Navigator -> webdriver[get]", false);return false }},
    plugins: {get(){ v_console_log("  [*] Navigator -> plugins[get]", this._plugins || []);return this._plugins || [] }},
    languages: {get(){ v_console_log("  [*] Navigator -> languages[get]", {});return {} }},
    connection: {get(){ v_console_log("  [*] Navigator -> connection[get]", {});return {} }},
    geolocation: {get(){ v_console_log("  [*] Navigator -> geolocation[get]", {});return {} }},
    ink: {get(){ v_console_log("  [*] Navigator -> ink[get]", {});return {} }},
    mediaCapabilities: {get(){ v_console_log("  [*] Navigator -> mediaCapabilities[get]", {});return {} }},
    mediaSession: {get(){ v_console_log("  [*] Navigator -> mediaSession[get]", {});return {} }},
    permissions: {get(){ v_console_log("  [*] Navigator -> permissions[get]", {});return {} }},
    userActivation: {get(){ v_console_log("  [*] Navigator -> userActivation[get]", {});return {} }},
    webkitPersistentStorage: {get(){ v_console_log("  [*] Navigator -> webkitPersistentStorage[get]", {});return {} }},
    webkitTemporaryStorage: {get(){ v_console_log("  [*] Navigator -> webkitTemporaryStorage[get]", {});return {} }},
    maxTouchPoints: {get(){ v_console_log("  [*] Navigator -> maxTouchPoints[get]", 0);return 0 }},
    language: {get(){ v_console_log("  [*] Navigator -> language[get]", "zh-CN");return "zh-CN" }},
    vendor: {get(){ v_console_log("  [*] Navigator -> vendor[get]", "Google Inc.");return "Google Inc." }},
    hardwareConcurrency: {get(){ v_console_log("  [*] Navigator -> hardwareConcurrency[get]", 16);return 16 }},
    pdfViewerEnabled: {get(){ v_console_log("  [*] Navigator -> pdfViewerEnabled[get]", true);return true }},
    appVersion: {get(){ v_console_log("  [*] Navigator -> appVersion[get]", "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36");return "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36" }},
    mimeTypes: {get(){ v_console_log("  [*] Navigator -> mimeTypes[get]", this._mimeTypes || []);return this._mimeTypes || [] }},
    productSub: {get(){ v_console_log("  [*] Navigator -> productSub[get]", "20030107");return "20030107" }},
    sendBeacon: {value: v_saf(function sendBeacon(){v_console_log("  [*] Navigator -> sendBeacon[func]", [].slice.call(arguments));})},
    vendorSub: {"enumerable":true,"configurable":true,"get":function(){return ""},"set":function(){return true}},
    productSub: {"enumerable":true,"configurable":true,"get":function(){return "20030107"},"set":function(){return true}},
    vendor: {"enumerable":true,"configurable":true,"get":function(){return "Google Inc."},"set":function(){return true}},
    maxTouchPoints: {"enumerable":true,"configurable":true,"get":function(){return 0},"set":function(){return true}},
    pdfViewerEnabled: {"enumerable":true,"configurable":true,"get":function(){return true},"set":function(){return true}},
    hardwareConcurrency: {"enumerable":true,"configurable":true,"get":function(){return 16},"set":function(){return true}},
    cookieEnabled: {"enumerable":true,"configurable":true,"get":function(){return true},"set":function(){return true}},
    appCodeName: {"enumerable":true,"configurable":true,"get":function(){return "Mozilla"},"set":function(){return true}},
    appName: {"enumerable":true,"configurable":true,"get":function(){return "Netscape"},"set":function(){return true}},
    appVersion: {"enumerable":true,"configurable":true,"get":function(){return "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36"},"set":function(){return true}},
    platform: {"enumerable":true,"configurable":true,"get":function(){return "Win32"},"set":function(){return true}},
    product: {"enumerable":true,"configurable":true,"get":function(){return "Gecko"},"set":function(){return true}},
    userAgent: {"enumerable":true,"configurable":true,"get":function(){return "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36"},"set":function(){return true}},
    language: {"enumerable":true,"configurable":true,"get":function(){return "zh-CN"},"set":function(){return true}},
    languages: {"enumerable":true,"configurable":true,"get":function(){return ["zh-CN","zh"]},"set":function(){return true}},
    onLine: {"enumerable":true,"configurable":true,"get":function(){return true},"set":function(){return true}},
    webdriver: {"enumerable":true,"configurable":true,"get":function(){return false},"set":function(){return true}},
    deprecatedRunAdAuctionEnforcesKAnonymity: {"enumerable":true,"configurable":true,"get":function(){return false},"set":function(){return true}},
    deviceMemory: {"enumerable":true,"configurable":true,"get":function(){return 8},"set":function(){return true}},
    [Symbol.toStringTag]: {value:"Navigator",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(HTMLCollection.prototype, {
    length: {get(){ v_console_log("  [*] HTMLCollection -> length[get]", 34);return 34 }},
    [Symbol.toStringTag]: {value:"HTMLCollection",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(Storage.prototype, {
    [Symbol.toStringTag]: {value:"Storage",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(Image.prototype, {
    complete: {get(){ v_console_log("  [*] Image -> complete[get]", true);return true }},
    src: {get(){ v_console_log("  [*] Image -> src[get]", "https://img.pddpic.com/mms-material-img/2025-06-16/d887239e-6c21-4db5-89d4-0d6e3cfb614f.jpeg?imageMogr2/thumbnail/400x%7CimageView2/2/w/400/q/80/format/webp");return "https://img.pddpic.com/mms-material-img/2025-06-16/d887239e-6c21-4db5-89d4-0d6e3cfb614f.jpeg?imageMogr2/thumbnail/400x%7CimageView2/2/w/400/q/80/format/webp" },set(){ v_console_log("  [*] Image -> src[set]", [].slice.call(arguments));return "https://img.pddpic.com/mms-material-img/2025-06-16/d887239e-6c21-4db5-89d4-0d6e3cfb614f.jpeg?imageMogr2/thumbnail/400x%7CimageView2/2/w/400/q/80/format/webp" }},
    naturalHeight: {get(){ v_console_log("  [*] Image -> naturalHeight[get]", 42);return 42 }},
    height: {get(){ v_console_log("  [*] Image -> height[get]", 16);return 16 }},
    width: {get(){ v_console_log("  [*] Image -> width[get]", 16);return 16 }},
    [Symbol.toStringTag]: {value:"Image",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(MessageChannel.prototype, {
    port2: {get(){ v_console_log("  [*] MessageChannel -> port2[get]", {});return {} }},
    port1: {get(){ v_console_log("  [*] MessageChannel -> port1[get]", {});return {} }},
    [Symbol.toStringTag]: {value:"MessageChannel",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(MutationObserver.prototype, {
    observe: {value: v_saf(function observe(){v_console_log("  [*] MutationObserver -> observe[func]", [].slice.call(arguments));})},
    [Symbol.toStringTag]: {value:"MutationObserver",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(Event.prototype, {
    target: {get(){ v_console_log("  [*] Event -> target[get]", {});return {} }},
    eventPhase: {get(){ v_console_log("  [*] Event -> eventPhase[get]", 3);return 3 }},
    bubbles: {get(){ v_console_log("  [*] Event -> bubbles[get]", true);return true }},
    cancelable: {get(){ v_console_log("  [*] Event -> cancelable[get]", true);return true }},
    timeStamp: {get(){ v_console_log("  [*] Event -> timeStamp[get]", 1343.5);return 1343.5 }},
    defaultPrevented: {get(){ v_console_log("  [*] Event -> defaultPrevented[get]", false);return false }},
    type: {get(){ v_console_log("  [*] Event -> type[get]", "mousemove");return "mousemove" }},
    currentTarget: {get(){ v_console_log("  [*] Event -> currentTarget[get]", {});return {} }},
    CAPTURING_PHASE: {"value":1,"writable":false,"enumerable":true,"configurable":false},
    AT_TARGET: {"value":2,"writable":false,"enumerable":true,"configurable":false},
    BUBBLING_PHASE: {"value":3,"writable":false,"enumerable":true,"configurable":false},
    [Symbol.toStringTag]: {value:"Event",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(IntersectionObserverEntry.prototype, {
    isIntersecting: {get(){ v_console_log("  [*] IntersectionObserverEntry -> isIntersecting[get]", false);return false }},
    target: {get(){ v_console_log("  [*] IntersectionObserverEntry -> target[get]", {});return {} }},
    intersectionRatio: {get(){ v_console_log("  [*] IntersectionObserverEntry -> intersectionRatio[get]", 0.9934555888175964);return 0.9934555888175964 }},
    intersectionRect: {get(){ v_console_log("  [*] IntersectionObserverEntry -> intersectionRect[get]", {});return {} }},
    boundingClientRect: {get(){ v_console_log("  [*] IntersectionObserverEntry -> boundingClientRect[get]", {});return {} }},
    [Symbol.toStringTag]: {value:"IntersectionObserverEntry",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(DOMTokenList.prototype, {
    add: {value: v_saf(function add(){v_console_log("  [*] DOMTokenList -> add[func]", [].slice.call(arguments));})},
    remove: {value: v_saf(function remove(){v_console_log("  [*] DOMTokenList -> remove[func]", [].slice.call(arguments));})},
    [Symbol.toStringTag]: {value:"DOMTokenList",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(IntersectionObserver.prototype, {
    unobserve: {value: v_saf(function unobserve(){v_console_log("  [*] IntersectionObserver -> unobserve[func]", [].slice.call(arguments));})},
    observe: {value: v_saf(function observe(){v_console_log("  [*] IntersectionObserver -> observe[func]", [].slice.call(arguments));})},
    [Symbol.toStringTag]: {value:"IntersectionObserver",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(WebKitMutationObserver.prototype, {
    observe: {value: v_saf(function observe(){v_console_log("  [*] WebKitMutationObserver -> observe[func]", [].slice.call(arguments));})},
    [Symbol.toStringTag]: {value:"WebKitMutationObserver",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(History.prototype, {
    state: {get(){ v_console_log("  [*] History -> state[get]", {});return {} }},
    length: {"enumerable":true,"configurable":true,"get":function(){return 2},"set":function(){return true}},
    scrollRestoration: {"enumerable":true,"configurable":true,"get":function(){return "auto"},"set":function(){return true}},
    [Symbol.toStringTag]: {value:"History",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(Crypto.prototype, {
    [Symbol.toStringTag]: {value:"Crypto",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(CSSStyleDeclaration.prototype, {
    cssText: {get(){ v_console_log("  [*] CSSStyleDeclaration -> cssText[get]", "position: absolute; z-index: 9999; overflow: hidden; height: 7px; left: 2px; right: 2px; bottom: 0px;");return "position: absolute; z-index: 9999; overflow: hidden; height: 7px; left: 2px; right: 2px; bottom: 0px;" },set(){ v_console_log("  [*] CSSStyleDeclaration -> cssText[set]", [].slice.call(arguments));return "position: absolute; z-index: 9999; overflow: hidden; height: 7px; left: 2px; right: 2px; bottom: 0px;" }},
    setProperty: {value: v_saf(function setProperty(){v_console_log("  [*] CSSStyleDeclaration -> setProperty[func]", [].slice.call(arguments));})},
    getPropertyValue: {value: v_saf(function getPropertyValue(){v_console_log("  [*] CSSStyleDeclaration -> getPropertyValue[func]", [].slice.call(arguments));})},
    [Symbol.toStringTag]: {value:"CSSStyleDeclaration",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(PluginArray.prototype, {
    length: {get(){ v_console_log("  [*] PluginArray -> length[get]", 5);return 5 }},
    [Symbol.toStringTag]: {value:"PluginArray",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(ResizeObserver.prototype, {
    observe: {value: v_saf(function observe(){v_console_log("  [*] ResizeObserver -> observe[func]", [].slice.call(arguments));})},
    [Symbol.toStringTag]: {value:"ResizeObserver",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(DOMRectReadOnly.prototype, {
    top: {get(){ v_console_log("  [*] DOMRectReadOnly -> top[get]", 374.734375);return 374.734375 }},
    bottom: {get(){ v_console_log("  [*] DOMRectReadOnly -> bottom[get]", 374.734375);return 374.734375 }},
    width: {get(){ v_console_log("  [*] DOMRectReadOnly -> width[get]", 173.125);return 173.125 }},
    [Symbol.toStringTag]: {value:"DOMRectReadOnly",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(ResizeObserverEntry.prototype, {
    contentRect: {get(){ v_console_log("  [*] ResizeObserverEntry -> contentRect[get]", {});return {} }},
    [Symbol.toStringTag]: {value:"ResizeObserverEntry",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(URLSearchParams.prototype, {
    forEach: {value: v_saf(function forEach(){v_console_log("  [*] URLSearchParams -> forEach[func]", [].slice.call(arguments));})},
    get: {value: v_saf(function get(){v_console_log("  [*] URLSearchParams -> get[func]", [].slice.call(arguments));})},
    toString: {value: v_saf(function toString(){v_console_log("  [*] URLSearchParams -> toString[func]", [].slice.call(arguments));})},
    [Symbol.toStringTag]: {value:"URLSearchParams",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(Request.prototype, {
    headers: {get(){ v_console_log("  [*] Request -> headers[get]", {});return {} }},
    [Symbol.toStringTag]: {value:"Request",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(Headers.prototype, {
    has: {value: v_saf(function has(){v_console_log("  [*] Headers -> has[func]", [].slice.call(arguments));})},
    [Symbol.toStringTag]: {value:"Headers",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(Response.prototype, {
    body: {get(){ v_console_log("  [*] Response -> body[get]", {});return {} }},
    [Symbol.toStringTag]: {value:"Response",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(MimeType.prototype, {
    [Symbol.toStringTag]: {value:"MimeType",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(Plugin.prototype, {
    [Symbol.toStringTag]: {value:"Plugin",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(WebGLRenderingContext.prototype, {
    bufferData: {value: v_saf(function bufferData(){v_console_log("  [*] WebGLRenderingContext -> bufferData[func]", [].slice.call(arguments));})},
    readPixels: {value: v_saf(function readPixels(){v_console_log("  [*] WebGLRenderingContext -> readPixels[func]", [].slice.call(arguments));})},
    DEPTH_BUFFER_BIT: {"value":256,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_BUFFER_BIT: {"value":1024,"writable":false,"enumerable":true,"configurable":false},
    COLOR_BUFFER_BIT: {"value":16384,"writable":false,"enumerable":true,"configurable":false},
    LINES: {"value":1,"writable":false,"enumerable":true,"configurable":false},
    LINE_LOOP: {"value":2,"writable":false,"enumerable":true,"configurable":false},
    LINE_STRIP: {"value":3,"writable":false,"enumerable":true,"configurable":false},
    TRIANGLES: {"value":4,"writable":false,"enumerable":true,"configurable":false},
    TRIANGLE_STRIP: {"value":5,"writable":false,"enumerable":true,"configurable":false},
    TRIANGLE_FAN: {"value":6,"writable":false,"enumerable":true,"configurable":false},
    ONE: {"value":1,"writable":false,"enumerable":true,"configurable":false},
    SRC_COLOR: {"value":768,"writable":false,"enumerable":true,"configurable":false},
    ONE_MINUS_SRC_COLOR: {"value":769,"writable":false,"enumerable":true,"configurable":false},
    SRC_ALPHA: {"value":770,"writable":false,"enumerable":true,"configurable":false},
    ONE_MINUS_SRC_ALPHA: {"value":771,"writable":false,"enumerable":true,"configurable":false},
    DST_ALPHA: {"value":772,"writable":false,"enumerable":true,"configurable":false},
    ONE_MINUS_DST_ALPHA: {"value":773,"writable":false,"enumerable":true,"configurable":false},
    DST_COLOR: {"value":774,"writable":false,"enumerable":true,"configurable":false},
    ONE_MINUS_DST_COLOR: {"value":775,"writable":false,"enumerable":true,"configurable":false},
    SRC_ALPHA_SATURATE: {"value":776,"writable":false,"enumerable":true,"configurable":false},
    FUNC_ADD: {"value":32774,"writable":false,"enumerable":true,"configurable":false},
    BLEND_EQUATION: {"value":32777,"writable":false,"enumerable":true,"configurable":false},
    BLEND_EQUATION_RGB: {"value":32777,"writable":false,"enumerable":true,"configurable":false},
    BLEND_EQUATION_ALPHA: {"value":34877,"writable":false,"enumerable":true,"configurable":false},
    FUNC_SUBTRACT: {"value":32778,"writable":false,"enumerable":true,"configurable":false},
    FUNC_REVERSE_SUBTRACT: {"value":32779,"writable":false,"enumerable":true,"configurable":false},
    BLEND_DST_RGB: {"value":32968,"writable":false,"enumerable":true,"configurable":false},
    BLEND_SRC_RGB: {"value":32969,"writable":false,"enumerable":true,"configurable":false},
    BLEND_DST_ALPHA: {"value":32970,"writable":false,"enumerable":true,"configurable":false},
    BLEND_SRC_ALPHA: {"value":32971,"writable":false,"enumerable":true,"configurable":false},
    CONSTANT_COLOR: {"value":32769,"writable":false,"enumerable":true,"configurable":false},
    ONE_MINUS_CONSTANT_COLOR: {"value":32770,"writable":false,"enumerable":true,"configurable":false},
    CONSTANT_ALPHA: {"value":32771,"writable":false,"enumerable":true,"configurable":false},
    ONE_MINUS_CONSTANT_ALPHA: {"value":32772,"writable":false,"enumerable":true,"configurable":false},
    BLEND_COLOR: {"value":32773,"writable":false,"enumerable":true,"configurable":false},
    ARRAY_BUFFER: {"value":34962,"writable":false,"enumerable":true,"configurable":false},
    ELEMENT_ARRAY_BUFFER: {"value":34963,"writable":false,"enumerable":true,"configurable":false},
    ARRAY_BUFFER_BINDING: {"value":34964,"writable":false,"enumerable":true,"configurable":false},
    ELEMENT_ARRAY_BUFFER_BINDING: {"value":34965,"writable":false,"enumerable":true,"configurable":false},
    STREAM_DRAW: {"value":35040,"writable":false,"enumerable":true,"configurable":false},
    STATIC_DRAW: {"value":35044,"writable":false,"enumerable":true,"configurable":false},
    DYNAMIC_DRAW: {"value":35048,"writable":false,"enumerable":true,"configurable":false},
    BUFFER_SIZE: {"value":34660,"writable":false,"enumerable":true,"configurable":false},
    BUFFER_USAGE: {"value":34661,"writable":false,"enumerable":true,"configurable":false},
    CURRENT_VERTEX_ATTRIB: {"value":34342,"writable":false,"enumerable":true,"configurable":false},
    FRONT: {"value":1028,"writable":false,"enumerable":true,"configurable":false},
    BACK: {"value":1029,"writable":false,"enumerable":true,"configurable":false},
    FRONT_AND_BACK: {"value":1032,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_2D: {"value":3553,"writable":false,"enumerable":true,"configurable":false},
    CULL_FACE: {"value":2884,"writable":false,"enumerable":true,"configurable":false},
    BLEND: {"value":3042,"writable":false,"enumerable":true,"configurable":false},
    DITHER: {"value":3024,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_TEST: {"value":2960,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_TEST: {"value":2929,"writable":false,"enumerable":true,"configurable":false},
    SCISSOR_TEST: {"value":3089,"writable":false,"enumerable":true,"configurable":false},
    POLYGON_OFFSET_FILL: {"value":32823,"writable":false,"enumerable":true,"configurable":false},
    SAMPLE_ALPHA_TO_COVERAGE: {"value":32926,"writable":false,"enumerable":true,"configurable":false},
    SAMPLE_COVERAGE: {"value":32928,"writable":false,"enumerable":true,"configurable":false},
    INVALID_ENUM: {"value":1280,"writable":false,"enumerable":true,"configurable":false},
    INVALID_VALUE: {"value":1281,"writable":false,"enumerable":true,"configurable":false},
    INVALID_OPERATION: {"value":1282,"writable":false,"enumerable":true,"configurable":false},
    OUT_OF_MEMORY: {"value":1285,"writable":false,"enumerable":true,"configurable":false},
    CW: {"value":2304,"writable":false,"enumerable":true,"configurable":false},
    CCW: {"value":2305,"writable":false,"enumerable":true,"configurable":false},
    LINE_WIDTH: {"value":2849,"writable":false,"enumerable":true,"configurable":false},
    ALIASED_POINT_SIZE_RANGE: {"value":33901,"writable":false,"enumerable":true,"configurable":false},
    ALIASED_LINE_WIDTH_RANGE: {"value":33902,"writable":false,"enumerable":true,"configurable":false},
    CULL_FACE_MODE: {"value":2885,"writable":false,"enumerable":true,"configurable":false},
    FRONT_FACE: {"value":2886,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_RANGE: {"value":2928,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_WRITEMASK: {"value":2930,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_CLEAR_VALUE: {"value":2931,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_FUNC: {"value":2932,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_CLEAR_VALUE: {"value":2961,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_FUNC: {"value":2962,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_FAIL: {"value":2964,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_PASS_DEPTH_FAIL: {"value":2965,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_PASS_DEPTH_PASS: {"value":2966,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_REF: {"value":2967,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_VALUE_MASK: {"value":2963,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_WRITEMASK: {"value":2968,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_BACK_FUNC: {"value":34816,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_BACK_FAIL: {"value":34817,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_BACK_PASS_DEPTH_FAIL: {"value":34818,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_BACK_PASS_DEPTH_PASS: {"value":34819,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_BACK_REF: {"value":36003,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_BACK_VALUE_MASK: {"value":36004,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_BACK_WRITEMASK: {"value":36005,"writable":false,"enumerable":true,"configurable":false},
    VIEWPORT: {"value":2978,"writable":false,"enumerable":true,"configurable":false},
    SCISSOR_BOX: {"value":3088,"writable":false,"enumerable":true,"configurable":false},
    COLOR_CLEAR_VALUE: {"value":3106,"writable":false,"enumerable":true,"configurable":false},
    COLOR_WRITEMASK: {"value":3107,"writable":false,"enumerable":true,"configurable":false},
    UNPACK_ALIGNMENT: {"value":3317,"writable":false,"enumerable":true,"configurable":false},
    PACK_ALIGNMENT: {"value":3333,"writable":false,"enumerable":true,"configurable":false},
    MAX_TEXTURE_SIZE: {"value":3379,"writable":false,"enumerable":true,"configurable":false},
    MAX_VIEWPORT_DIMS: {"value":3386,"writable":false,"enumerable":true,"configurable":false},
    SUBPIXEL_BITS: {"value":3408,"writable":false,"enumerable":true,"configurable":false},
    RED_BITS: {"value":3410,"writable":false,"enumerable":true,"configurable":false},
    GREEN_BITS: {"value":3411,"writable":false,"enumerable":true,"configurable":false},
    BLUE_BITS: {"value":3412,"writable":false,"enumerable":true,"configurable":false},
    ALPHA_BITS: {"value":3413,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_BITS: {"value":3414,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_BITS: {"value":3415,"writable":false,"enumerable":true,"configurable":false},
    POLYGON_OFFSET_UNITS: {"value":10752,"writable":false,"enumerable":true,"configurable":false},
    POLYGON_OFFSET_FACTOR: {"value":32824,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_BINDING_2D: {"value":32873,"writable":false,"enumerable":true,"configurable":false},
    SAMPLE_BUFFERS: {"value":32936,"writable":false,"enumerable":true,"configurable":false},
    SAMPLES: {"value":32937,"writable":false,"enumerable":true,"configurable":false},
    SAMPLE_COVERAGE_VALUE: {"value":32938,"writable":false,"enumerable":true,"configurable":false},
    SAMPLE_COVERAGE_INVERT: {"value":32939,"writable":false,"enumerable":true,"configurable":false},
    COMPRESSED_TEXTURE_FORMATS: {"value":34467,"writable":false,"enumerable":true,"configurable":false},
    DONT_CARE: {"value":4352,"writable":false,"enumerable":true,"configurable":false},
    FASTEST: {"value":4353,"writable":false,"enumerable":true,"configurable":false},
    NICEST: {"value":4354,"writable":false,"enumerable":true,"configurable":false},
    GENERATE_MIPMAP_HINT: {"value":33170,"writable":false,"enumerable":true,"configurable":false},
    BYTE: {"value":5120,"writable":false,"enumerable":true,"configurable":false},
    UNSIGNED_BYTE: {"value":5121,"writable":false,"enumerable":true,"configurable":false},
    SHORT: {"value":5122,"writable":false,"enumerable":true,"configurable":false},
    UNSIGNED_SHORT: {"value":5123,"writable":false,"enumerable":true,"configurable":false},
    INT: {"value":5124,"writable":false,"enumerable":true,"configurable":false},
    UNSIGNED_INT: {"value":5125,"writable":false,"enumerable":true,"configurable":false},
    FLOAT: {"value":5126,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_COMPONENT: {"value":6402,"writable":false,"enumerable":true,"configurable":false},
    ALPHA: {"value":6406,"writable":false,"enumerable":true,"configurable":false},
    RGB: {"value":6407,"writable":false,"enumerable":true,"configurable":false},
    RGBA: {"value":6408,"writable":false,"enumerable":true,"configurable":false},
    LUMINANCE: {"value":6409,"writable":false,"enumerable":true,"configurable":false},
    LUMINANCE_ALPHA: {"value":6410,"writable":false,"enumerable":true,"configurable":false},
    UNSIGNED_SHORT_4_4_4_4: {"value":32819,"writable":false,"enumerable":true,"configurable":false},
    UNSIGNED_SHORT_5_5_5_1: {"value":32820,"writable":false,"enumerable":true,"configurable":false},
    UNSIGNED_SHORT_5_6_5: {"value":33635,"writable":false,"enumerable":true,"configurable":false},
    FRAGMENT_SHADER: {"value":35632,"writable":false,"enumerable":true,"configurable":false},
    VERTEX_SHADER: {"value":35633,"writable":false,"enumerable":true,"configurable":false},
    MAX_VERTEX_ATTRIBS: {"value":34921,"writable":false,"enumerable":true,"configurable":false},
    MAX_VERTEX_UNIFORM_VECTORS: {"value":36347,"writable":false,"enumerable":true,"configurable":false},
    MAX_VARYING_VECTORS: {"value":36348,"writable":false,"enumerable":true,"configurable":false},
    MAX_COMBINED_TEXTURE_IMAGE_UNITS: {"value":35661,"writable":false,"enumerable":true,"configurable":false},
    MAX_VERTEX_TEXTURE_IMAGE_UNITS: {"value":35660,"writable":false,"enumerable":true,"configurable":false},
    MAX_TEXTURE_IMAGE_UNITS: {"value":34930,"writable":false,"enumerable":true,"configurable":false},
    MAX_FRAGMENT_UNIFORM_VECTORS: {"value":36349,"writable":false,"enumerable":true,"configurable":false},
    SHADER_TYPE: {"value":35663,"writable":false,"enumerable":true,"configurable":false},
    DELETE_STATUS: {"value":35712,"writable":false,"enumerable":true,"configurable":false},
    LINK_STATUS: {"value":35714,"writable":false,"enumerable":true,"configurable":false},
    VALIDATE_STATUS: {"value":35715,"writable":false,"enumerable":true,"configurable":false},
    ATTACHED_SHADERS: {"value":35717,"writable":false,"enumerable":true,"configurable":false},
    ACTIVE_UNIFORMS: {"value":35718,"writable":false,"enumerable":true,"configurable":false},
    ACTIVE_ATTRIBUTES: {"value":35721,"writable":false,"enumerable":true,"configurable":false},
    SHADING_LANGUAGE_VERSION: {"value":35724,"writable":false,"enumerable":true,"configurable":false},
    CURRENT_PROGRAM: {"value":35725,"writable":false,"enumerable":true,"configurable":false},
    NEVER: {"value":512,"writable":false,"enumerable":true,"configurable":false},
    LESS: {"value":513,"writable":false,"enumerable":true,"configurable":false},
    EQUAL: {"value":514,"writable":false,"enumerable":true,"configurable":false},
    LEQUAL: {"value":515,"writable":false,"enumerable":true,"configurable":false},
    GREATER: {"value":516,"writable":false,"enumerable":true,"configurable":false},
    NOTEQUAL: {"value":517,"writable":false,"enumerable":true,"configurable":false},
    GEQUAL: {"value":518,"writable":false,"enumerable":true,"configurable":false},
    ALWAYS: {"value":519,"writable":false,"enumerable":true,"configurable":false},
    KEEP: {"value":7680,"writable":false,"enumerable":true,"configurable":false},
    REPLACE: {"value":7681,"writable":false,"enumerable":true,"configurable":false},
    INCR: {"value":7682,"writable":false,"enumerable":true,"configurable":false},
    DECR: {"value":7683,"writable":false,"enumerable":true,"configurable":false},
    INVERT: {"value":5386,"writable":false,"enumerable":true,"configurable":false},
    INCR_WRAP: {"value":34055,"writable":false,"enumerable":true,"configurable":false},
    DECR_WRAP: {"value":34056,"writable":false,"enumerable":true,"configurable":false},
    VENDOR: {"value":7936,"writable":false,"enumerable":true,"configurable":false},
    RENDERER: {"value":7937,"writable":false,"enumerable":true,"configurable":false},
    VERSION: {"value":7938,"writable":false,"enumerable":true,"configurable":false},
    NEAREST: {"value":9728,"writable":false,"enumerable":true,"configurable":false},
    LINEAR: {"value":9729,"writable":false,"enumerable":true,"configurable":false},
    NEAREST_MIPMAP_NEAREST: {"value":9984,"writable":false,"enumerable":true,"configurable":false},
    LINEAR_MIPMAP_NEAREST: {"value":9985,"writable":false,"enumerable":true,"configurable":false},
    NEAREST_MIPMAP_LINEAR: {"value":9986,"writable":false,"enumerable":true,"configurable":false},
    LINEAR_MIPMAP_LINEAR: {"value":9987,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_MAG_FILTER: {"value":10240,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_MIN_FILTER: {"value":10241,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_WRAP_S: {"value":10242,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_WRAP_T: {"value":10243,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE: {"value":5890,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_CUBE_MAP: {"value":34067,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_BINDING_CUBE_MAP: {"value":34068,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_CUBE_MAP_POSITIVE_X: {"value":34069,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_CUBE_MAP_NEGATIVE_X: {"value":34070,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_CUBE_MAP_POSITIVE_Y: {"value":34071,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_CUBE_MAP_NEGATIVE_Y: {"value":34072,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_CUBE_MAP_POSITIVE_Z: {"value":34073,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_CUBE_MAP_NEGATIVE_Z: {"value":34074,"writable":false,"enumerable":true,"configurable":false},
    MAX_CUBE_MAP_TEXTURE_SIZE: {"value":34076,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE0: {"value":33984,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE1: {"value":33985,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE2: {"value":33986,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE3: {"value":33987,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE4: {"value":33988,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE5: {"value":33989,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE6: {"value":33990,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE7: {"value":33991,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE8: {"value":33992,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE9: {"value":33993,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE10: {"value":33994,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE11: {"value":33995,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE12: {"value":33996,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE13: {"value":33997,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE14: {"value":33998,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE15: {"value":33999,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE16: {"value":34000,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE17: {"value":34001,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE18: {"value":34002,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE19: {"value":34003,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE20: {"value":34004,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE21: {"value":34005,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE22: {"value":34006,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE23: {"value":34007,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE24: {"value":34008,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE25: {"value":34009,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE26: {"value":34010,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE27: {"value":34011,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE28: {"value":34012,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE29: {"value":34013,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE30: {"value":34014,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE31: {"value":34015,"writable":false,"enumerable":true,"configurable":false},
    ACTIVE_TEXTURE: {"value":34016,"writable":false,"enumerable":true,"configurable":false},
    REPEAT: {"value":10497,"writable":false,"enumerable":true,"configurable":false},
    CLAMP_TO_EDGE: {"value":33071,"writable":false,"enumerable":true,"configurable":false},
    MIRRORED_REPEAT: {"value":33648,"writable":false,"enumerable":true,"configurable":false},
    FLOAT_VEC2: {"value":35664,"writable":false,"enumerable":true,"configurable":false},
    FLOAT_VEC3: {"value":35665,"writable":false,"enumerable":true,"configurable":false},
    FLOAT_VEC4: {"value":35666,"writable":false,"enumerable":true,"configurable":false},
    INT_VEC2: {"value":35667,"writable":false,"enumerable":true,"configurable":false},
    INT_VEC3: {"value":35668,"writable":false,"enumerable":true,"configurable":false},
    INT_VEC4: {"value":35669,"writable":false,"enumerable":true,"configurable":false},
    BOOL: {"value":35670,"writable":false,"enumerable":true,"configurable":false},
    BOOL_VEC2: {"value":35671,"writable":false,"enumerable":true,"configurable":false},
    BOOL_VEC3: {"value":35672,"writable":false,"enumerable":true,"configurable":false},
    BOOL_VEC4: {"value":35673,"writable":false,"enumerable":true,"configurable":false},
    FLOAT_MAT2: {"value":35674,"writable":false,"enumerable":true,"configurable":false},
    FLOAT_MAT3: {"value":35675,"writable":false,"enumerable":true,"configurable":false},
    FLOAT_MAT4: {"value":35676,"writable":false,"enumerable":true,"configurable":false},
    SAMPLER_2D: {"value":35678,"writable":false,"enumerable":true,"configurable":false},
    SAMPLER_CUBE: {"value":35680,"writable":false,"enumerable":true,"configurable":false},
    VERTEX_ATTRIB_ARRAY_ENABLED: {"value":34338,"writable":false,"enumerable":true,"configurable":false},
    VERTEX_ATTRIB_ARRAY_SIZE: {"value":34339,"writable":false,"enumerable":true,"configurable":false},
    VERTEX_ATTRIB_ARRAY_STRIDE: {"value":34340,"writable":false,"enumerable":true,"configurable":false},
    VERTEX_ATTRIB_ARRAY_TYPE: {"value":34341,"writable":false,"enumerable":true,"configurable":false},
    VERTEX_ATTRIB_ARRAY_NORMALIZED: {"value":34922,"writable":false,"enumerable":true,"configurable":false},
    VERTEX_ATTRIB_ARRAY_POINTER: {"value":34373,"writable":false,"enumerable":true,"configurable":false},
    VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: {"value":34975,"writable":false,"enumerable":true,"configurable":false},
    IMPLEMENTATION_COLOR_READ_TYPE: {"value":35738,"writable":false,"enumerable":true,"configurable":false},
    IMPLEMENTATION_COLOR_READ_FORMAT: {"value":35739,"writable":false,"enumerable":true,"configurable":false},
    COMPILE_STATUS: {"value":35713,"writable":false,"enumerable":true,"configurable":false},
    LOW_FLOAT: {"value":36336,"writable":false,"enumerable":true,"configurable":false},
    MEDIUM_FLOAT: {"value":36337,"writable":false,"enumerable":true,"configurable":false},
    HIGH_FLOAT: {"value":36338,"writable":false,"enumerable":true,"configurable":false},
    LOW_INT: {"value":36339,"writable":false,"enumerable":true,"configurable":false},
    MEDIUM_INT: {"value":36340,"writable":false,"enumerable":true,"configurable":false},
    HIGH_INT: {"value":36341,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER: {"value":36160,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER: {"value":36161,"writable":false,"enumerable":true,"configurable":false},
    RGBA4: {"value":32854,"writable":false,"enumerable":true,"configurable":false},
    RGB5_A1: {"value":32855,"writable":false,"enumerable":true,"configurable":false},
    RGB565: {"value":36194,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_COMPONENT16: {"value":33189,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_INDEX8: {"value":36168,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_STENCIL: {"value":34041,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER_WIDTH: {"value":36162,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER_HEIGHT: {"value":36163,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER_INTERNAL_FORMAT: {"value":36164,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER_RED_SIZE: {"value":36176,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER_GREEN_SIZE: {"value":36177,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER_BLUE_SIZE: {"value":36178,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER_ALPHA_SIZE: {"value":36179,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER_DEPTH_SIZE: {"value":36180,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER_STENCIL_SIZE: {"value":36181,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: {"value":36048,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: {"value":36049,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: {"value":36050,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: {"value":36051,"writable":false,"enumerable":true,"configurable":false},
    COLOR_ATTACHMENT0: {"value":36064,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_ATTACHMENT: {"value":36096,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_ATTACHMENT: {"value":36128,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_STENCIL_ATTACHMENT: {"value":33306,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_COMPLETE: {"value":36053,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_INCOMPLETE_ATTACHMENT: {"value":36054,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: {"value":36055,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_INCOMPLETE_DIMENSIONS: {"value":36057,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_UNSUPPORTED: {"value":36061,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_BINDING: {"value":36006,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER_BINDING: {"value":36007,"writable":false,"enumerable":true,"configurable":false},
    MAX_RENDERBUFFER_SIZE: {"value":34024,"writable":false,"enumerable":true,"configurable":false},
    INVALID_FRAMEBUFFER_OPERATION: {"value":1286,"writable":false,"enumerable":true,"configurable":false},
    UNPACK_FLIP_Y_WEBGL: {"value":37440,"writable":false,"enumerable":true,"configurable":false},
    UNPACK_PREMULTIPLY_ALPHA_WEBGL: {"value":37441,"writable":false,"enumerable":true,"configurable":false},
    CONTEXT_LOST_WEBGL: {"value":37442,"writable":false,"enumerable":true,"configurable":false},
    UNPACK_COLORSPACE_CONVERSION_WEBGL: {"value":37443,"writable":false,"enumerable":true,"configurable":false},
    BROWSER_DEFAULT_WEBGL: {"value":37444,"writable":false,"enumerable":true,"configurable":false},
    RGB8: {"value":32849,"writable":false,"enumerable":true,"configurable":false},
    RGBA8: {"value":32856,"writable":false,"enumerable":true,"configurable":false},
    [Symbol.toStringTag]: {value:"WebGLRenderingContext",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(OffscreenCanvasRenderingContext2D.prototype, {
    getImageData: {value: v_saf(function getImageData(){v_console_log("  [*] OffscreenCanvasRenderingContext2D -> getImageData[func]", [].slice.call(arguments));})},
    [Symbol.toStringTag]: {value:"OffscreenCanvasRenderingContext2D",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(Permissions.prototype, {
    query: {value: v_saf(function query(){v_console_log("  [*] Permissions -> query[func]", [].slice.call(arguments));})},
    [Symbol.toStringTag]: {value:"Permissions",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(AudioBuffer.prototype, {
    copyFromChannel: {value: v_saf(function copyFromChannel(){v_console_log("  [*] AudioBuffer -> copyFromChannel[func]", [].slice.call(arguments));})},
    getChannelData: {value: v_saf(function getChannelData(){v_console_log("  [*] AudioBuffer -> getChannelData[func]", [].slice.call(arguments));})},
    [Symbol.toStringTag]: {value:"AudioBuffer",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(CanvasRenderingContext2D.prototype, {
    fillText: {value: v_saf(function fillText(){v_console_log("  [*] CanvasRenderingContext2D -> fillText[func]", [].slice.call(arguments));})},
    getImageData: {value: v_saf(function getImageData(){v_console_log("  [*] CanvasRenderingContext2D -> getImageData[func]", [].slice.call(arguments));})},
    measureText: {value: v_saf(function measureText(){v_console_log("  [*] CanvasRenderingContext2D -> measureText[func]", [].slice.call(arguments));})},
    strokeText: {value: v_saf(function strokeText(){v_console_log("  [*] CanvasRenderingContext2D -> strokeText[func]", [].slice.call(arguments));})},
    font: {set(){ v_console_log("  [*] CanvasRenderingContext2D -> font[set]", [].slice.call(arguments)); }},
    fillStyle: {set(){ v_console_log("  [*] CanvasRenderingContext2D -> fillStyle[set]", [].slice.call(arguments)); }},
    fillRect: {value: v_saf(function fillRect(){v_console_log("  [*] CanvasRenderingContext2D -> fillRect[func]", [].slice.call(arguments));})},
    beginPath: {value: v_saf(function beginPath(){v_console_log("  [*] CanvasRenderingContext2D -> beginPath[func]", [].slice.call(arguments));})},
    arc: {value: v_saf(function arc(){v_console_log("  [*] CanvasRenderingContext2D -> arc[func]", [].slice.call(arguments));})},
    closePath: {value: v_saf(function closePath(){v_console_log("  [*] CanvasRenderingContext2D -> closePath[func]", [].slice.call(arguments));})},
    fill: {value: v_saf(function fill(){v_console_log("  [*] CanvasRenderingContext2D -> fill[func]", [].slice.call(arguments));})},
    scale: {value: v_saf(function scale(){v_console_log("  [*] CanvasRenderingContext2D -> scale[func]", [].slice.call(arguments));})},
    [Symbol.toStringTag]: {value:"CanvasRenderingContext2D",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(FontFace.prototype, {
    load: {value: v_saf(function load(){v_console_log("  [*] FontFace -> load[func]", [].slice.call(arguments));})},
    [Symbol.toStringTag]: {value:"FontFace",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(WebGL2RenderingContext.prototype, {
    bufferData: {value: v_saf(function bufferData(){v_console_log("  [*] WebGL2RenderingContext -> bufferData[func]", [].slice.call(arguments));})},
    getParameter: {value: v_saf(function getParameter(){v_console_log("  [*] WebGL2RenderingContext -> getParameter[func]", [].slice.call(arguments));})},
    readPixels: {value: v_saf(function readPixels(){v_console_log("  [*] WebGL2RenderingContext -> readPixels[func]", [].slice.call(arguments));})},
    DEPTH_BUFFER_BIT: {"value":256,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_BUFFER_BIT: {"value":1024,"writable":false,"enumerable":true,"configurable":false},
    COLOR_BUFFER_BIT: {"value":16384,"writable":false,"enumerable":true,"configurable":false},
    LINES: {"value":1,"writable":false,"enumerable":true,"configurable":false},
    LINE_LOOP: {"value":2,"writable":false,"enumerable":true,"configurable":false},
    LINE_STRIP: {"value":3,"writable":false,"enumerable":true,"configurable":false},
    TRIANGLES: {"value":4,"writable":false,"enumerable":true,"configurable":false},
    TRIANGLE_STRIP: {"value":5,"writable":false,"enumerable":true,"configurable":false},
    TRIANGLE_FAN: {"value":6,"writable":false,"enumerable":true,"configurable":false},
    ONE: {"value":1,"writable":false,"enumerable":true,"configurable":false},
    SRC_COLOR: {"value":768,"writable":false,"enumerable":true,"configurable":false},
    ONE_MINUS_SRC_COLOR: {"value":769,"writable":false,"enumerable":true,"configurable":false},
    SRC_ALPHA: {"value":770,"writable":false,"enumerable":true,"configurable":false},
    ONE_MINUS_SRC_ALPHA: {"value":771,"writable":false,"enumerable":true,"configurable":false},
    DST_ALPHA: {"value":772,"writable":false,"enumerable":true,"configurable":false},
    ONE_MINUS_DST_ALPHA: {"value":773,"writable":false,"enumerable":true,"configurable":false},
    DST_COLOR: {"value":774,"writable":false,"enumerable":true,"configurable":false},
    ONE_MINUS_DST_COLOR: {"value":775,"writable":false,"enumerable":true,"configurable":false},
    SRC_ALPHA_SATURATE: {"value":776,"writable":false,"enumerable":true,"configurable":false},
    FUNC_ADD: {"value":32774,"writable":false,"enumerable":true,"configurable":false},
    BLEND_EQUATION: {"value":32777,"writable":false,"enumerable":true,"configurable":false},
    BLEND_EQUATION_RGB: {"value":32777,"writable":false,"enumerable":true,"configurable":false},
    BLEND_EQUATION_ALPHA: {"value":34877,"writable":false,"enumerable":true,"configurable":false},
    FUNC_SUBTRACT: {"value":32778,"writable":false,"enumerable":true,"configurable":false},
    FUNC_REVERSE_SUBTRACT: {"value":32779,"writable":false,"enumerable":true,"configurable":false},
    BLEND_DST_RGB: {"value":32968,"writable":false,"enumerable":true,"configurable":false},
    BLEND_SRC_RGB: {"value":32969,"writable":false,"enumerable":true,"configurable":false},
    BLEND_DST_ALPHA: {"value":32970,"writable":false,"enumerable":true,"configurable":false},
    BLEND_SRC_ALPHA: {"value":32971,"writable":false,"enumerable":true,"configurable":false},
    CONSTANT_COLOR: {"value":32769,"writable":false,"enumerable":true,"configurable":false},
    ONE_MINUS_CONSTANT_COLOR: {"value":32770,"writable":false,"enumerable":true,"configurable":false},
    CONSTANT_ALPHA: {"value":32771,"writable":false,"enumerable":true,"configurable":false},
    ONE_MINUS_CONSTANT_ALPHA: {"value":32772,"writable":false,"enumerable":true,"configurable":false},
    BLEND_COLOR: {"value":32773,"writable":false,"enumerable":true,"configurable":false},
    ARRAY_BUFFER: {"value":34962,"writable":false,"enumerable":true,"configurable":false},
    ELEMENT_ARRAY_BUFFER: {"value":34963,"writable":false,"enumerable":true,"configurable":false},
    ARRAY_BUFFER_BINDING: {"value":34964,"writable":false,"enumerable":true,"configurable":false},
    ELEMENT_ARRAY_BUFFER_BINDING: {"value":34965,"writable":false,"enumerable":true,"configurable":false},
    STREAM_DRAW: {"value":35040,"writable":false,"enumerable":true,"configurable":false},
    STATIC_DRAW: {"value":35044,"writable":false,"enumerable":true,"configurable":false},
    DYNAMIC_DRAW: {"value":35048,"writable":false,"enumerable":true,"configurable":false},
    BUFFER_SIZE: {"value":34660,"writable":false,"enumerable":true,"configurable":false},
    BUFFER_USAGE: {"value":34661,"writable":false,"enumerable":true,"configurable":false},
    CURRENT_VERTEX_ATTRIB: {"value":34342,"writable":false,"enumerable":true,"configurable":false},
    FRONT: {"value":1028,"writable":false,"enumerable":true,"configurable":false},
    BACK: {"value":1029,"writable":false,"enumerable":true,"configurable":false},
    FRONT_AND_BACK: {"value":1032,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_2D: {"value":3553,"writable":false,"enumerable":true,"configurable":false},
    CULL_FACE: {"value":2884,"writable":false,"enumerable":true,"configurable":false},
    BLEND: {"value":3042,"writable":false,"enumerable":true,"configurable":false},
    DITHER: {"value":3024,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_TEST: {"value":2960,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_TEST: {"value":2929,"writable":false,"enumerable":true,"configurable":false},
    SCISSOR_TEST: {"value":3089,"writable":false,"enumerable":true,"configurable":false},
    POLYGON_OFFSET_FILL: {"value":32823,"writable":false,"enumerable":true,"configurable":false},
    SAMPLE_ALPHA_TO_COVERAGE: {"value":32926,"writable":false,"enumerable":true,"configurable":false},
    SAMPLE_COVERAGE: {"value":32928,"writable":false,"enumerable":true,"configurable":false},
    INVALID_ENUM: {"value":1280,"writable":false,"enumerable":true,"configurable":false},
    INVALID_VALUE: {"value":1281,"writable":false,"enumerable":true,"configurable":false},
    INVALID_OPERATION: {"value":1282,"writable":false,"enumerable":true,"configurable":false},
    OUT_OF_MEMORY: {"value":1285,"writable":false,"enumerable":true,"configurable":false},
    CW: {"value":2304,"writable":false,"enumerable":true,"configurable":false},
    CCW: {"value":2305,"writable":false,"enumerable":true,"configurable":false},
    LINE_WIDTH: {"value":2849,"writable":false,"enumerable":true,"configurable":false},
    ALIASED_POINT_SIZE_RANGE: {"value":33901,"writable":false,"enumerable":true,"configurable":false},
    ALIASED_LINE_WIDTH_RANGE: {"value":33902,"writable":false,"enumerable":true,"configurable":false},
    CULL_FACE_MODE: {"value":2885,"writable":false,"enumerable":true,"configurable":false},
    FRONT_FACE: {"value":2886,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_RANGE: {"value":2928,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_WRITEMASK: {"value":2930,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_CLEAR_VALUE: {"value":2931,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_FUNC: {"value":2932,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_CLEAR_VALUE: {"value":2961,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_FUNC: {"value":2962,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_FAIL: {"value":2964,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_PASS_DEPTH_FAIL: {"value":2965,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_PASS_DEPTH_PASS: {"value":2966,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_REF: {"value":2967,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_VALUE_MASK: {"value":2963,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_WRITEMASK: {"value":2968,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_BACK_FUNC: {"value":34816,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_BACK_FAIL: {"value":34817,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_BACK_PASS_DEPTH_FAIL: {"value":34818,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_BACK_PASS_DEPTH_PASS: {"value":34819,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_BACK_REF: {"value":36003,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_BACK_VALUE_MASK: {"value":36004,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_BACK_WRITEMASK: {"value":36005,"writable":false,"enumerable":true,"configurable":false},
    VIEWPORT: {"value":2978,"writable":false,"enumerable":true,"configurable":false},
    SCISSOR_BOX: {"value":3088,"writable":false,"enumerable":true,"configurable":false},
    COLOR_CLEAR_VALUE: {"value":3106,"writable":false,"enumerable":true,"configurable":false},
    COLOR_WRITEMASK: {"value":3107,"writable":false,"enumerable":true,"configurable":false},
    UNPACK_ALIGNMENT: {"value":3317,"writable":false,"enumerable":true,"configurable":false},
    PACK_ALIGNMENT: {"value":3333,"writable":false,"enumerable":true,"configurable":false},
    MAX_TEXTURE_SIZE: {"value":3379,"writable":false,"enumerable":true,"configurable":false},
    MAX_VIEWPORT_DIMS: {"value":3386,"writable":false,"enumerable":true,"configurable":false},
    SUBPIXEL_BITS: {"value":3408,"writable":false,"enumerable":true,"configurable":false},
    RED_BITS: {"value":3410,"writable":false,"enumerable":true,"configurable":false},
    GREEN_BITS: {"value":3411,"writable":false,"enumerable":true,"configurable":false},
    BLUE_BITS: {"value":3412,"writable":false,"enumerable":true,"configurable":false},
    ALPHA_BITS: {"value":3413,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_BITS: {"value":3414,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_BITS: {"value":3415,"writable":false,"enumerable":true,"configurable":false},
    POLYGON_OFFSET_UNITS: {"value":10752,"writable":false,"enumerable":true,"configurable":false},
    POLYGON_OFFSET_FACTOR: {"value":32824,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_BINDING_2D: {"value":32873,"writable":false,"enumerable":true,"configurable":false},
    SAMPLE_BUFFERS: {"value":32936,"writable":false,"enumerable":true,"configurable":false},
    SAMPLES: {"value":32937,"writable":false,"enumerable":true,"configurable":false},
    SAMPLE_COVERAGE_VALUE: {"value":32938,"writable":false,"enumerable":true,"configurable":false},
    SAMPLE_COVERAGE_INVERT: {"value":32939,"writable":false,"enumerable":true,"configurable":false},
    COMPRESSED_TEXTURE_FORMATS: {"value":34467,"writable":false,"enumerable":true,"configurable":false},
    DONT_CARE: {"value":4352,"writable":false,"enumerable":true,"configurable":false},
    FASTEST: {"value":4353,"writable":false,"enumerable":true,"configurable":false},
    NICEST: {"value":4354,"writable":false,"enumerable":true,"configurable":false},
    GENERATE_MIPMAP_HINT: {"value":33170,"writable":false,"enumerable":true,"configurable":false},
    BYTE: {"value":5120,"writable":false,"enumerable":true,"configurable":false},
    UNSIGNED_BYTE: {"value":5121,"writable":false,"enumerable":true,"configurable":false},
    SHORT: {"value":5122,"writable":false,"enumerable":true,"configurable":false},
    UNSIGNED_SHORT: {"value":5123,"writable":false,"enumerable":true,"configurable":false},
    INT: {"value":5124,"writable":false,"enumerable":true,"configurable":false},
    UNSIGNED_INT: {"value":5125,"writable":false,"enumerable":true,"configurable":false},
    FLOAT: {"value":5126,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_COMPONENT: {"value":6402,"writable":false,"enumerable":true,"configurable":false},
    ALPHA: {"value":6406,"writable":false,"enumerable":true,"configurable":false},
    RGB: {"value":6407,"writable":false,"enumerable":true,"configurable":false},
    RGBA: {"value":6408,"writable":false,"enumerable":true,"configurable":false},
    LUMINANCE: {"value":6409,"writable":false,"enumerable":true,"configurable":false},
    LUMINANCE_ALPHA: {"value":6410,"writable":false,"enumerable":true,"configurable":false},
    UNSIGNED_SHORT_4_4_4_4: {"value":32819,"writable":false,"enumerable":true,"configurable":false},
    UNSIGNED_SHORT_5_5_5_1: {"value":32820,"writable":false,"enumerable":true,"configurable":false},
    UNSIGNED_SHORT_5_6_5: {"value":33635,"writable":false,"enumerable":true,"configurable":false},
    FRAGMENT_SHADER: {"value":35632,"writable":false,"enumerable":true,"configurable":false},
    VERTEX_SHADER: {"value":35633,"writable":false,"enumerable":true,"configurable":false},
    MAX_VERTEX_ATTRIBS: {"value":34921,"writable":false,"enumerable":true,"configurable":false},
    MAX_VERTEX_UNIFORM_VECTORS: {"value":36347,"writable":false,"enumerable":true,"configurable":false},
    MAX_VARYING_VECTORS: {"value":36348,"writable":false,"enumerable":true,"configurable":false},
    MAX_COMBINED_TEXTURE_IMAGE_UNITS: {"value":35661,"writable":false,"enumerable":true,"configurable":false},
    MAX_VERTEX_TEXTURE_IMAGE_UNITS: {"value":35660,"writable":false,"enumerable":true,"configurable":false},
    MAX_TEXTURE_IMAGE_UNITS: {"value":34930,"writable":false,"enumerable":true,"configurable":false},
    MAX_FRAGMENT_UNIFORM_VECTORS: {"value":36349,"writable":false,"enumerable":true,"configurable":false},
    SHADER_TYPE: {"value":35663,"writable":false,"enumerable":true,"configurable":false},
    DELETE_STATUS: {"value":35712,"writable":false,"enumerable":true,"configurable":false},
    LINK_STATUS: {"value":35714,"writable":false,"enumerable":true,"configurable":false},
    VALIDATE_STATUS: {"value":35715,"writable":false,"enumerable":true,"configurable":false},
    ATTACHED_SHADERS: {"value":35717,"writable":false,"enumerable":true,"configurable":false},
    ACTIVE_UNIFORMS: {"value":35718,"writable":false,"enumerable":true,"configurable":false},
    ACTIVE_ATTRIBUTES: {"value":35721,"writable":false,"enumerable":true,"configurable":false},
    SHADING_LANGUAGE_VERSION: {"value":35724,"writable":false,"enumerable":true,"configurable":false},
    CURRENT_PROGRAM: {"value":35725,"writable":false,"enumerable":true,"configurable":false},
    NEVER: {"value":512,"writable":false,"enumerable":true,"configurable":false},
    LESS: {"value":513,"writable":false,"enumerable":true,"configurable":false},
    EQUAL: {"value":514,"writable":false,"enumerable":true,"configurable":false},
    LEQUAL: {"value":515,"writable":false,"enumerable":true,"configurable":false},
    GREATER: {"value":516,"writable":false,"enumerable":true,"configurable":false},
    NOTEQUAL: {"value":517,"writable":false,"enumerable":true,"configurable":false},
    GEQUAL: {"value":518,"writable":false,"enumerable":true,"configurable":false},
    ALWAYS: {"value":519,"writable":false,"enumerable":true,"configurable":false},
    KEEP: {"value":7680,"writable":false,"enumerable":true,"configurable":false},
    REPLACE: {"value":7681,"writable":false,"enumerable":true,"configurable":false},
    INCR: {"value":7682,"writable":false,"enumerable":true,"configurable":false},
    DECR: {"value":7683,"writable":false,"enumerable":true,"configurable":false},
    INVERT: {"value":5386,"writable":false,"enumerable":true,"configurable":false},
    INCR_WRAP: {"value":34055,"writable":false,"enumerable":true,"configurable":false},
    DECR_WRAP: {"value":34056,"writable":false,"enumerable":true,"configurable":false},
    VENDOR: {"value":7936,"writable":false,"enumerable":true,"configurable":false},
    RENDERER: {"value":7937,"writable":false,"enumerable":true,"configurable":false},
    VERSION: {"value":7938,"writable":false,"enumerable":true,"configurable":false},
    NEAREST: {"value":9728,"writable":false,"enumerable":true,"configurable":false},
    LINEAR: {"value":9729,"writable":false,"enumerable":true,"configurable":false},
    NEAREST_MIPMAP_NEAREST: {"value":9984,"writable":false,"enumerable":true,"configurable":false},
    LINEAR_MIPMAP_NEAREST: {"value":9985,"writable":false,"enumerable":true,"configurable":false},
    NEAREST_MIPMAP_LINEAR: {"value":9986,"writable":false,"enumerable":true,"configurable":false},
    LINEAR_MIPMAP_LINEAR: {"value":9987,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_MAG_FILTER: {"value":10240,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_MIN_FILTER: {"value":10241,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_WRAP_S: {"value":10242,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_WRAP_T: {"value":10243,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE: {"value":5890,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_CUBE_MAP: {"value":34067,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_BINDING_CUBE_MAP: {"value":34068,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_CUBE_MAP_POSITIVE_X: {"value":34069,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_CUBE_MAP_NEGATIVE_X: {"value":34070,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_CUBE_MAP_POSITIVE_Y: {"value":34071,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_CUBE_MAP_NEGATIVE_Y: {"value":34072,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_CUBE_MAP_POSITIVE_Z: {"value":34073,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_CUBE_MAP_NEGATIVE_Z: {"value":34074,"writable":false,"enumerable":true,"configurable":false},
    MAX_CUBE_MAP_TEXTURE_SIZE: {"value":34076,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE0: {"value":33984,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE1: {"value":33985,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE2: {"value":33986,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE3: {"value":33987,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE4: {"value":33988,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE5: {"value":33989,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE6: {"value":33990,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE7: {"value":33991,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE8: {"value":33992,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE9: {"value":33993,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE10: {"value":33994,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE11: {"value":33995,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE12: {"value":33996,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE13: {"value":33997,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE14: {"value":33998,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE15: {"value":33999,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE16: {"value":34000,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE17: {"value":34001,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE18: {"value":34002,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE19: {"value":34003,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE20: {"value":34004,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE21: {"value":34005,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE22: {"value":34006,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE23: {"value":34007,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE24: {"value":34008,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE25: {"value":34009,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE26: {"value":34010,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE27: {"value":34011,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE28: {"value":34012,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE29: {"value":34013,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE30: {"value":34014,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE31: {"value":34015,"writable":false,"enumerable":true,"configurable":false},
    ACTIVE_TEXTURE: {"value":34016,"writable":false,"enumerable":true,"configurable":false},
    REPEAT: {"value":10497,"writable":false,"enumerable":true,"configurable":false},
    CLAMP_TO_EDGE: {"value":33071,"writable":false,"enumerable":true,"configurable":false},
    MIRRORED_REPEAT: {"value":33648,"writable":false,"enumerable":true,"configurable":false},
    FLOAT_VEC2: {"value":35664,"writable":false,"enumerable":true,"configurable":false},
    FLOAT_VEC3: {"value":35665,"writable":false,"enumerable":true,"configurable":false},
    FLOAT_VEC4: {"value":35666,"writable":false,"enumerable":true,"configurable":false},
    INT_VEC2: {"value":35667,"writable":false,"enumerable":true,"configurable":false},
    INT_VEC3: {"value":35668,"writable":false,"enumerable":true,"configurable":false},
    INT_VEC4: {"value":35669,"writable":false,"enumerable":true,"configurable":false},
    BOOL: {"value":35670,"writable":false,"enumerable":true,"configurable":false},
    BOOL_VEC2: {"value":35671,"writable":false,"enumerable":true,"configurable":false},
    BOOL_VEC3: {"value":35672,"writable":false,"enumerable":true,"configurable":false},
    BOOL_VEC4: {"value":35673,"writable":false,"enumerable":true,"configurable":false},
    FLOAT_MAT2: {"value":35674,"writable":false,"enumerable":true,"configurable":false},
    FLOAT_MAT3: {"value":35675,"writable":false,"enumerable":true,"configurable":false},
    FLOAT_MAT4: {"value":35676,"writable":false,"enumerable":true,"configurable":false},
    SAMPLER_2D: {"value":35678,"writable":false,"enumerable":true,"configurable":false},
    SAMPLER_CUBE: {"value":35680,"writable":false,"enumerable":true,"configurable":false},
    VERTEX_ATTRIB_ARRAY_ENABLED: {"value":34338,"writable":false,"enumerable":true,"configurable":false},
    VERTEX_ATTRIB_ARRAY_SIZE: {"value":34339,"writable":false,"enumerable":true,"configurable":false},
    VERTEX_ATTRIB_ARRAY_STRIDE: {"value":34340,"writable":false,"enumerable":true,"configurable":false},
    VERTEX_ATTRIB_ARRAY_TYPE: {"value":34341,"writable":false,"enumerable":true,"configurable":false},
    VERTEX_ATTRIB_ARRAY_NORMALIZED: {"value":34922,"writable":false,"enumerable":true,"configurable":false},
    VERTEX_ATTRIB_ARRAY_POINTER: {"value":34373,"writable":false,"enumerable":true,"configurable":false},
    VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: {"value":34975,"writable":false,"enumerable":true,"configurable":false},
    IMPLEMENTATION_COLOR_READ_TYPE: {"value":35738,"writable":false,"enumerable":true,"configurable":false},
    IMPLEMENTATION_COLOR_READ_FORMAT: {"value":35739,"writable":false,"enumerable":true,"configurable":false},
    COMPILE_STATUS: {"value":35713,"writable":false,"enumerable":true,"configurable":false},
    LOW_FLOAT: {"value":36336,"writable":false,"enumerable":true,"configurable":false},
    MEDIUM_FLOAT: {"value":36337,"writable":false,"enumerable":true,"configurable":false},
    HIGH_FLOAT: {"value":36338,"writable":false,"enumerable":true,"configurable":false},
    LOW_INT: {"value":36339,"writable":false,"enumerable":true,"configurable":false},
    MEDIUM_INT: {"value":36340,"writable":false,"enumerable":true,"configurable":false},
    HIGH_INT: {"value":36341,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER: {"value":36160,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER: {"value":36161,"writable":false,"enumerable":true,"configurable":false},
    RGBA4: {"value":32854,"writable":false,"enumerable":true,"configurable":false},
    RGB5_A1: {"value":32855,"writable":false,"enumerable":true,"configurable":false},
    RGB565: {"value":36194,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_COMPONENT16: {"value":33189,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_INDEX8: {"value":36168,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_STENCIL: {"value":34041,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER_WIDTH: {"value":36162,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER_HEIGHT: {"value":36163,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER_INTERNAL_FORMAT: {"value":36164,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER_RED_SIZE: {"value":36176,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER_GREEN_SIZE: {"value":36177,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER_BLUE_SIZE: {"value":36178,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER_ALPHA_SIZE: {"value":36179,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER_DEPTH_SIZE: {"value":36180,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER_STENCIL_SIZE: {"value":36181,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: {"value":36048,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: {"value":36049,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: {"value":36050,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: {"value":36051,"writable":false,"enumerable":true,"configurable":false},
    COLOR_ATTACHMENT0: {"value":36064,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_ATTACHMENT: {"value":36096,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_ATTACHMENT: {"value":36128,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_STENCIL_ATTACHMENT: {"value":33306,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_COMPLETE: {"value":36053,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_INCOMPLETE_ATTACHMENT: {"value":36054,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: {"value":36055,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_INCOMPLETE_DIMENSIONS: {"value":36057,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_UNSUPPORTED: {"value":36061,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_BINDING: {"value":36006,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER_BINDING: {"value":36007,"writable":false,"enumerable":true,"configurable":false},
    MAX_RENDERBUFFER_SIZE: {"value":34024,"writable":false,"enumerable":true,"configurable":false},
    INVALID_FRAMEBUFFER_OPERATION: {"value":1286,"writable":false,"enumerable":true,"configurable":false},
    UNPACK_FLIP_Y_WEBGL: {"value":37440,"writable":false,"enumerable":true,"configurable":false},
    UNPACK_PREMULTIPLY_ALPHA_WEBGL: {"value":37441,"writable":false,"enumerable":true,"configurable":false},
    CONTEXT_LOST_WEBGL: {"value":37442,"writable":false,"enumerable":true,"configurable":false},
    UNPACK_COLORSPACE_CONVERSION_WEBGL: {"value":37443,"writable":false,"enumerable":true,"configurable":false},
    BROWSER_DEFAULT_WEBGL: {"value":37444,"writable":false,"enumerable":true,"configurable":false},
    READ_BUFFER: {"value":3074,"writable":false,"enumerable":true,"configurable":false},
    UNPACK_ROW_LENGTH: {"value":3314,"writable":false,"enumerable":true,"configurable":false},
    UNPACK_SKIP_ROWS: {"value":3315,"writable":false,"enumerable":true,"configurable":false},
    UNPACK_SKIP_PIXELS: {"value":3316,"writable":false,"enumerable":true,"configurable":false},
    PACK_ROW_LENGTH: {"value":3330,"writable":false,"enumerable":true,"configurable":false},
    PACK_SKIP_ROWS: {"value":3331,"writable":false,"enumerable":true,"configurable":false},
    PACK_SKIP_PIXELS: {"value":3332,"writable":false,"enumerable":true,"configurable":false},
    COLOR: {"value":6144,"writable":false,"enumerable":true,"configurable":false},
    DEPTH: {"value":6145,"writable":false,"enumerable":true,"configurable":false},
    STENCIL: {"value":6146,"writable":false,"enumerable":true,"configurable":false},
    RED: {"value":6403,"writable":false,"enumerable":true,"configurable":false},
    RGB8: {"value":32849,"writable":false,"enumerable":true,"configurable":false},
    RGBA8: {"value":32856,"writable":false,"enumerable":true,"configurable":false},
    RGB10_A2: {"value":32857,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_BINDING_3D: {"value":32874,"writable":false,"enumerable":true,"configurable":false},
    UNPACK_SKIP_IMAGES: {"value":32877,"writable":false,"enumerable":true,"configurable":false},
    UNPACK_IMAGE_HEIGHT: {"value":32878,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_3D: {"value":32879,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_WRAP_R: {"value":32882,"writable":false,"enumerable":true,"configurable":false},
    MAX_3D_TEXTURE_SIZE: {"value":32883,"writable":false,"enumerable":true,"configurable":false},
    UNSIGNED_INT_2_10_10_10_REV: {"value":33640,"writable":false,"enumerable":true,"configurable":false},
    MAX_ELEMENTS_VERTICES: {"value":33000,"writable":false,"enumerable":true,"configurable":false},
    MAX_ELEMENTS_INDICES: {"value":33001,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_MIN_LOD: {"value":33082,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_MAX_LOD: {"value":33083,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_BASE_LEVEL: {"value":33084,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_MAX_LEVEL: {"value":33085,"writable":false,"enumerable":true,"configurable":false},
    MIN: {"value":32775,"writable":false,"enumerable":true,"configurable":false},
    MAX: {"value":32776,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_COMPONENT24: {"value":33190,"writable":false,"enumerable":true,"configurable":false},
    MAX_TEXTURE_LOD_BIAS: {"value":34045,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_COMPARE_MODE: {"value":34892,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_COMPARE_FUNC: {"value":34893,"writable":false,"enumerable":true,"configurable":false},
    CURRENT_QUERY: {"value":34917,"writable":false,"enumerable":true,"configurable":false},
    QUERY_RESULT: {"value":34918,"writable":false,"enumerable":true,"configurable":false},
    QUERY_RESULT_AVAILABLE: {"value":34919,"writable":false,"enumerable":true,"configurable":false},
    STREAM_READ: {"value":35041,"writable":false,"enumerable":true,"configurable":false},
    STREAM_COPY: {"value":35042,"writable":false,"enumerable":true,"configurable":false},
    STATIC_READ: {"value":35045,"writable":false,"enumerable":true,"configurable":false},
    STATIC_COPY: {"value":35046,"writable":false,"enumerable":true,"configurable":false},
    DYNAMIC_READ: {"value":35049,"writable":false,"enumerable":true,"configurable":false},
    DYNAMIC_COPY: {"value":35050,"writable":false,"enumerable":true,"configurable":false},
    MAX_DRAW_BUFFERS: {"value":34852,"writable":false,"enumerable":true,"configurable":false},
    DRAW_BUFFER0: {"value":34853,"writable":false,"enumerable":true,"configurable":false},
    DRAW_BUFFER1: {"value":34854,"writable":false,"enumerable":true,"configurable":false},
    DRAW_BUFFER2: {"value":34855,"writable":false,"enumerable":true,"configurable":false},
    DRAW_BUFFER3: {"value":34856,"writable":false,"enumerable":true,"configurable":false},
    DRAW_BUFFER4: {"value":34857,"writable":false,"enumerable":true,"configurable":false},
    DRAW_BUFFER5: {"value":34858,"writable":false,"enumerable":true,"configurable":false},
    DRAW_BUFFER6: {"value":34859,"writable":false,"enumerable":true,"configurable":false},
    DRAW_BUFFER7: {"value":34860,"writable":false,"enumerable":true,"configurable":false},
    DRAW_BUFFER8: {"value":34861,"writable":false,"enumerable":true,"configurable":false},
    DRAW_BUFFER9: {"value":34862,"writable":false,"enumerable":true,"configurable":false},
    DRAW_BUFFER10: {"value":34863,"writable":false,"enumerable":true,"configurable":false},
    DRAW_BUFFER11: {"value":34864,"writable":false,"enumerable":true,"configurable":false},
    DRAW_BUFFER12: {"value":34865,"writable":false,"enumerable":true,"configurable":false},
    DRAW_BUFFER13: {"value":34866,"writable":false,"enumerable":true,"configurable":false},
    DRAW_BUFFER14: {"value":34867,"writable":false,"enumerable":true,"configurable":false},
    DRAW_BUFFER15: {"value":34868,"writable":false,"enumerable":true,"configurable":false},
    MAX_FRAGMENT_UNIFORM_COMPONENTS: {"value":35657,"writable":false,"enumerable":true,"configurable":false},
    MAX_VERTEX_UNIFORM_COMPONENTS: {"value":35658,"writable":false,"enumerable":true,"configurable":false},
    SAMPLER_3D: {"value":35679,"writable":false,"enumerable":true,"configurable":false},
    SAMPLER_2D_SHADOW: {"value":35682,"writable":false,"enumerable":true,"configurable":false},
    FRAGMENT_SHADER_DERIVATIVE_HINT: {"value":35723,"writable":false,"enumerable":true,"configurable":false},
    PIXEL_PACK_BUFFER: {"value":35051,"writable":false,"enumerable":true,"configurable":false},
    PIXEL_UNPACK_BUFFER: {"value":35052,"writable":false,"enumerable":true,"configurable":false},
    PIXEL_PACK_BUFFER_BINDING: {"value":35053,"writable":false,"enumerable":true,"configurable":false},
    PIXEL_UNPACK_BUFFER_BINDING: {"value":35055,"writable":false,"enumerable":true,"configurable":false},
    FLOAT_MAT2x3: {"value":35685,"writable":false,"enumerable":true,"configurable":false},
    FLOAT_MAT2x4: {"value":35686,"writable":false,"enumerable":true,"configurable":false},
    FLOAT_MAT3x2: {"value":35687,"writable":false,"enumerable":true,"configurable":false},
    FLOAT_MAT3x4: {"value":35688,"writable":false,"enumerable":true,"configurable":false},
    FLOAT_MAT4x2: {"value":35689,"writable":false,"enumerable":true,"configurable":false},
    FLOAT_MAT4x3: {"value":35690,"writable":false,"enumerable":true,"configurable":false},
    SRGB: {"value":35904,"writable":false,"enumerable":true,"configurable":false},
    SRGB8: {"value":35905,"writable":false,"enumerable":true,"configurable":false},
    SRGB8_ALPHA8: {"value":35907,"writable":false,"enumerable":true,"configurable":false},
    COMPARE_REF_TO_TEXTURE: {"value":34894,"writable":false,"enumerable":true,"configurable":false},
    RGBA32F: {"value":34836,"writable":false,"enumerable":true,"configurable":false},
    RGB32F: {"value":34837,"writable":false,"enumerable":true,"configurable":false},
    RGBA16F: {"value":34842,"writable":false,"enumerable":true,"configurable":false},
    RGB16F: {"value":34843,"writable":false,"enumerable":true,"configurable":false},
    VERTEX_ATTRIB_ARRAY_INTEGER: {"value":35069,"writable":false,"enumerable":true,"configurable":false},
    MAX_ARRAY_TEXTURE_LAYERS: {"value":35071,"writable":false,"enumerable":true,"configurable":false},
    MIN_PROGRAM_TEXEL_OFFSET: {"value":35076,"writable":false,"enumerable":true,"configurable":false},
    MAX_PROGRAM_TEXEL_OFFSET: {"value":35077,"writable":false,"enumerable":true,"configurable":false},
    MAX_VARYING_COMPONENTS: {"value":35659,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_2D_ARRAY: {"value":35866,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_BINDING_2D_ARRAY: {"value":35869,"writable":false,"enumerable":true,"configurable":false},
    R11F_G11F_B10F: {"value":35898,"writable":false,"enumerable":true,"configurable":false},
    UNSIGNED_INT_10F_11F_11F_REV: {"value":35899,"writable":false,"enumerable":true,"configurable":false},
    RGB9_E5: {"value":35901,"writable":false,"enumerable":true,"configurable":false},
    UNSIGNED_INT_5_9_9_9_REV: {"value":35902,"writable":false,"enumerable":true,"configurable":false},
    TRANSFORM_FEEDBACK_BUFFER_MODE: {"value":35967,"writable":false,"enumerable":true,"configurable":false},
    MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS: {"value":35968,"writable":false,"enumerable":true,"configurable":false},
    TRANSFORM_FEEDBACK_VARYINGS: {"value":35971,"writable":false,"enumerable":true,"configurable":false},
    TRANSFORM_FEEDBACK_BUFFER_START: {"value":35972,"writable":false,"enumerable":true,"configurable":false},
    TRANSFORM_FEEDBACK_BUFFER_SIZE: {"value":35973,"writable":false,"enumerable":true,"configurable":false},
    TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN: {"value":35976,"writable":false,"enumerable":true,"configurable":false},
    RASTERIZER_DISCARD: {"value":35977,"writable":false,"enumerable":true,"configurable":false},
    MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS: {"value":35978,"writable":false,"enumerable":true,"configurable":false},
    MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS: {"value":35979,"writable":false,"enumerable":true,"configurable":false},
    INTERLEAVED_ATTRIBS: {"value":35980,"writable":false,"enumerable":true,"configurable":false},
    SEPARATE_ATTRIBS: {"value":35981,"writable":false,"enumerable":true,"configurable":false},
    TRANSFORM_FEEDBACK_BUFFER: {"value":35982,"writable":false,"enumerable":true,"configurable":false},
    TRANSFORM_FEEDBACK_BUFFER_BINDING: {"value":35983,"writable":false,"enumerable":true,"configurable":false},
    RGBA32UI: {"value":36208,"writable":false,"enumerable":true,"configurable":false},
    RGB32UI: {"value":36209,"writable":false,"enumerable":true,"configurable":false},
    RGBA16UI: {"value":36214,"writable":false,"enumerable":true,"configurable":false},
    RGB16UI: {"value":36215,"writable":false,"enumerable":true,"configurable":false},
    RGBA8UI: {"value":36220,"writable":false,"enumerable":true,"configurable":false},
    RGB8UI: {"value":36221,"writable":false,"enumerable":true,"configurable":false},
    RGBA32I: {"value":36226,"writable":false,"enumerable":true,"configurable":false},
    RGB32I: {"value":36227,"writable":false,"enumerable":true,"configurable":false},
    RGBA16I: {"value":36232,"writable":false,"enumerable":true,"configurable":false},
    RGB16I: {"value":36233,"writable":false,"enumerable":true,"configurable":false},
    RGBA8I: {"value":36238,"writable":false,"enumerable":true,"configurable":false},
    RGB8I: {"value":36239,"writable":false,"enumerable":true,"configurable":false},
    RED_INTEGER: {"value":36244,"writable":false,"enumerable":true,"configurable":false},
    RGB_INTEGER: {"value":36248,"writable":false,"enumerable":true,"configurable":false},
    RGBA_INTEGER: {"value":36249,"writable":false,"enumerable":true,"configurable":false},
    SAMPLER_2D_ARRAY: {"value":36289,"writable":false,"enumerable":true,"configurable":false},
    SAMPLER_2D_ARRAY_SHADOW: {"value":36292,"writable":false,"enumerable":true,"configurable":false},
    SAMPLER_CUBE_SHADOW: {"value":36293,"writable":false,"enumerable":true,"configurable":false},
    UNSIGNED_INT_VEC2: {"value":36294,"writable":false,"enumerable":true,"configurable":false},
    UNSIGNED_INT_VEC3: {"value":36295,"writable":false,"enumerable":true,"configurable":false},
    UNSIGNED_INT_VEC4: {"value":36296,"writable":false,"enumerable":true,"configurable":false},
    INT_SAMPLER_2D: {"value":36298,"writable":false,"enumerable":true,"configurable":false},
    INT_SAMPLER_3D: {"value":36299,"writable":false,"enumerable":true,"configurable":false},
    INT_SAMPLER_CUBE: {"value":36300,"writable":false,"enumerable":true,"configurable":false},
    INT_SAMPLER_2D_ARRAY: {"value":36303,"writable":false,"enumerable":true,"configurable":false},
    UNSIGNED_INT_SAMPLER_2D: {"value":36306,"writable":false,"enumerable":true,"configurable":false},
    UNSIGNED_INT_SAMPLER_3D: {"value":36307,"writable":false,"enumerable":true,"configurable":false},
    UNSIGNED_INT_SAMPLER_CUBE: {"value":36308,"writable":false,"enumerable":true,"configurable":false},
    UNSIGNED_INT_SAMPLER_2D_ARRAY: {"value":36311,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_COMPONENT32F: {"value":36012,"writable":false,"enumerable":true,"configurable":false},
    DEPTH32F_STENCIL8: {"value":36013,"writable":false,"enumerable":true,"configurable":false},
    FLOAT_32_UNSIGNED_INT_24_8_REV: {"value":36269,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING: {"value":33296,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE: {"value":33297,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_ATTACHMENT_RED_SIZE: {"value":33298,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_ATTACHMENT_GREEN_SIZE: {"value":33299,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_ATTACHMENT_BLUE_SIZE: {"value":33300,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE: {"value":33301,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE: {"value":33302,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE: {"value":33303,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_DEFAULT: {"value":33304,"writable":false,"enumerable":true,"configurable":false},
    UNSIGNED_INT_24_8: {"value":34042,"writable":false,"enumerable":true,"configurable":false},
    DEPTH24_STENCIL8: {"value":35056,"writable":false,"enumerable":true,"configurable":false},
    UNSIGNED_NORMALIZED: {"value":35863,"writable":false,"enumerable":true,"configurable":false},
    DRAW_FRAMEBUFFER_BINDING: {"value":36006,"writable":false,"enumerable":true,"configurable":false},
    READ_FRAMEBUFFER: {"value":36008,"writable":false,"enumerable":true,"configurable":false},
    DRAW_FRAMEBUFFER: {"value":36009,"writable":false,"enumerable":true,"configurable":false},
    READ_FRAMEBUFFER_BINDING: {"value":36010,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER_SAMPLES: {"value":36011,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER: {"value":36052,"writable":false,"enumerable":true,"configurable":false},
    MAX_COLOR_ATTACHMENTS: {"value":36063,"writable":false,"enumerable":true,"configurable":false},
    COLOR_ATTACHMENT1: {"value":36065,"writable":false,"enumerable":true,"configurable":false},
    COLOR_ATTACHMENT2: {"value":36066,"writable":false,"enumerable":true,"configurable":false},
    COLOR_ATTACHMENT3: {"value":36067,"writable":false,"enumerable":true,"configurable":false},
    COLOR_ATTACHMENT4: {"value":36068,"writable":false,"enumerable":true,"configurable":false},
    COLOR_ATTACHMENT5: {"value":36069,"writable":false,"enumerable":true,"configurable":false},
    COLOR_ATTACHMENT6: {"value":36070,"writable":false,"enumerable":true,"configurable":false},
    COLOR_ATTACHMENT7: {"value":36071,"writable":false,"enumerable":true,"configurable":false},
    COLOR_ATTACHMENT8: {"value":36072,"writable":false,"enumerable":true,"configurable":false},
    COLOR_ATTACHMENT9: {"value":36073,"writable":false,"enumerable":true,"configurable":false},
    COLOR_ATTACHMENT10: {"value":36074,"writable":false,"enumerable":true,"configurable":false},
    COLOR_ATTACHMENT11: {"value":36075,"writable":false,"enumerable":true,"configurable":false},
    COLOR_ATTACHMENT12: {"value":36076,"writable":false,"enumerable":true,"configurable":false},
    COLOR_ATTACHMENT13: {"value":36077,"writable":false,"enumerable":true,"configurable":false},
    COLOR_ATTACHMENT14: {"value":36078,"writable":false,"enumerable":true,"configurable":false},
    COLOR_ATTACHMENT15: {"value":36079,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_INCOMPLETE_MULTISAMPLE: {"value":36182,"writable":false,"enumerable":true,"configurable":false},
    MAX_SAMPLES: {"value":36183,"writable":false,"enumerable":true,"configurable":false},
    HALF_FLOAT: {"value":5131,"writable":false,"enumerable":true,"configurable":false},
    RG: {"value":33319,"writable":false,"enumerable":true,"configurable":false},
    RG_INTEGER: {"value":33320,"writable":false,"enumerable":true,"configurable":false},
    R8: {"value":33321,"writable":false,"enumerable":true,"configurable":false},
    RG8: {"value":33323,"writable":false,"enumerable":true,"configurable":false},
    R16F: {"value":33325,"writable":false,"enumerable":true,"configurable":false},
    R32F: {"value":33326,"writable":false,"enumerable":true,"configurable":false},
    RG16F: {"value":33327,"writable":false,"enumerable":true,"configurable":false},
    RG32F: {"value":33328,"writable":false,"enumerable":true,"configurable":false},
    R8I: {"value":33329,"writable":false,"enumerable":true,"configurable":false},
    R8UI: {"value":33330,"writable":false,"enumerable":true,"configurable":false},
    R16I: {"value":33331,"writable":false,"enumerable":true,"configurable":false},
    R16UI: {"value":33332,"writable":false,"enumerable":true,"configurable":false},
    R32I: {"value":33333,"writable":false,"enumerable":true,"configurable":false},
    R32UI: {"value":33334,"writable":false,"enumerable":true,"configurable":false},
    RG8I: {"value":33335,"writable":false,"enumerable":true,"configurable":false},
    RG8UI: {"value":33336,"writable":false,"enumerable":true,"configurable":false},
    RG16I: {"value":33337,"writable":false,"enumerable":true,"configurable":false},
    RG16UI: {"value":33338,"writable":false,"enumerable":true,"configurable":false},
    RG32I: {"value":33339,"writable":false,"enumerable":true,"configurable":false},
    RG32UI: {"value":33340,"writable":false,"enumerable":true,"configurable":false},
    VERTEX_ARRAY_BINDING: {"value":34229,"writable":false,"enumerable":true,"configurable":false},
    R8_SNORM: {"value":36756,"writable":false,"enumerable":true,"configurable":false},
    RG8_SNORM: {"value":36757,"writable":false,"enumerable":true,"configurable":false},
    RGB8_SNORM: {"value":36758,"writable":false,"enumerable":true,"configurable":false},
    RGBA8_SNORM: {"value":36759,"writable":false,"enumerable":true,"configurable":false},
    SIGNED_NORMALIZED: {"value":36764,"writable":false,"enumerable":true,"configurable":false},
    COPY_READ_BUFFER: {"value":36662,"writable":false,"enumerable":true,"configurable":false},
    COPY_WRITE_BUFFER: {"value":36663,"writable":false,"enumerable":true,"configurable":false},
    COPY_READ_BUFFER_BINDING: {"value":36662,"writable":false,"enumerable":true,"configurable":false},
    COPY_WRITE_BUFFER_BINDING: {"value":36663,"writable":false,"enumerable":true,"configurable":false},
    UNIFORM_BUFFER: {"value":35345,"writable":false,"enumerable":true,"configurable":false},
    UNIFORM_BUFFER_BINDING: {"value":35368,"writable":false,"enumerable":true,"configurable":false},
    UNIFORM_BUFFER_START: {"value":35369,"writable":false,"enumerable":true,"configurable":false},
    UNIFORM_BUFFER_SIZE: {"value":35370,"writable":false,"enumerable":true,"configurable":false},
    MAX_VERTEX_UNIFORM_BLOCKS: {"value":35371,"writable":false,"enumerable":true,"configurable":false},
    MAX_FRAGMENT_UNIFORM_BLOCKS: {"value":35373,"writable":false,"enumerable":true,"configurable":false},
    MAX_COMBINED_UNIFORM_BLOCKS: {"value":35374,"writable":false,"enumerable":true,"configurable":false},
    MAX_UNIFORM_BUFFER_BINDINGS: {"value":35375,"writable":false,"enumerable":true,"configurable":false},
    MAX_UNIFORM_BLOCK_SIZE: {"value":35376,"writable":false,"enumerable":true,"configurable":false},
    MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS: {"value":35377,"writable":false,"enumerable":true,"configurable":false},
    MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS: {"value":35379,"writable":false,"enumerable":true,"configurable":false},
    UNIFORM_BUFFER_OFFSET_ALIGNMENT: {"value":35380,"writable":false,"enumerable":true,"configurable":false},
    ACTIVE_UNIFORM_BLOCKS: {"value":35382,"writable":false,"enumerable":true,"configurable":false},
    UNIFORM_TYPE: {"value":35383,"writable":false,"enumerable":true,"configurable":false},
    UNIFORM_SIZE: {"value":35384,"writable":false,"enumerable":true,"configurable":false},
    UNIFORM_BLOCK_INDEX: {"value":35386,"writable":false,"enumerable":true,"configurable":false},
    UNIFORM_OFFSET: {"value":35387,"writable":false,"enumerable":true,"configurable":false},
    UNIFORM_ARRAY_STRIDE: {"value":35388,"writable":false,"enumerable":true,"configurable":false},
    UNIFORM_MATRIX_STRIDE: {"value":35389,"writable":false,"enumerable":true,"configurable":false},
    UNIFORM_IS_ROW_MAJOR: {"value":35390,"writable":false,"enumerable":true,"configurable":false},
    UNIFORM_BLOCK_BINDING: {"value":35391,"writable":false,"enumerable":true,"configurable":false},
    UNIFORM_BLOCK_DATA_SIZE: {"value":35392,"writable":false,"enumerable":true,"configurable":false},
    UNIFORM_BLOCK_ACTIVE_UNIFORMS: {"value":35394,"writable":false,"enumerable":true,"configurable":false},
    UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES: {"value":35395,"writable":false,"enumerable":true,"configurable":false},
    UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER: {"value":35396,"writable":false,"enumerable":true,"configurable":false},
    UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER: {"value":35398,"writable":false,"enumerable":true,"configurable":false},
    INVALID_INDEX: {"value":4294967295,"writable":false,"enumerable":true,"configurable":false},
    MAX_VERTEX_OUTPUT_COMPONENTS: {"value":37154,"writable":false,"enumerable":true,"configurable":false},
    MAX_FRAGMENT_INPUT_COMPONENTS: {"value":37157,"writable":false,"enumerable":true,"configurable":false},
    MAX_SERVER_WAIT_TIMEOUT: {"value":37137,"writable":false,"enumerable":true,"configurable":false},
    OBJECT_TYPE: {"value":37138,"writable":false,"enumerable":true,"configurable":false},
    SYNC_CONDITION: {"value":37139,"writable":false,"enumerable":true,"configurable":false},
    SYNC_STATUS: {"value":37140,"writable":false,"enumerable":true,"configurable":false},
    SYNC_FLAGS: {"value":37141,"writable":false,"enumerable":true,"configurable":false},
    SYNC_FENCE: {"value":37142,"writable":false,"enumerable":true,"configurable":false},
    SYNC_GPU_COMMANDS_COMPLETE: {"value":37143,"writable":false,"enumerable":true,"configurable":false},
    UNSIGNALED: {"value":37144,"writable":false,"enumerable":true,"configurable":false},
    SIGNALED: {"value":37145,"writable":false,"enumerable":true,"configurable":false},
    ALREADY_SIGNALED: {"value":37146,"writable":false,"enumerable":true,"configurable":false},
    TIMEOUT_EXPIRED: {"value":37147,"writable":false,"enumerable":true,"configurable":false},
    CONDITION_SATISFIED: {"value":37148,"writable":false,"enumerable":true,"configurable":false},
    WAIT_FAILED: {"value":37149,"writable":false,"enumerable":true,"configurable":false},
    SYNC_FLUSH_COMMANDS_BIT: {"value":1,"writable":false,"enumerable":true,"configurable":false},
    VERTEX_ATTRIB_ARRAY_DIVISOR: {"value":35070,"writable":false,"enumerable":true,"configurable":false},
    ANY_SAMPLES_PASSED: {"value":35887,"writable":false,"enumerable":true,"configurable":false},
    ANY_SAMPLES_PASSED_CONSERVATIVE: {"value":36202,"writable":false,"enumerable":true,"configurable":false},
    SAMPLER_BINDING: {"value":35097,"writable":false,"enumerable":true,"configurable":false},
    RGB10_A2UI: {"value":36975,"writable":false,"enumerable":true,"configurable":false},
    INT_2_10_10_10_REV: {"value":36255,"writable":false,"enumerable":true,"configurable":false},
    TRANSFORM_FEEDBACK: {"value":36386,"writable":false,"enumerable":true,"configurable":false},
    TRANSFORM_FEEDBACK_PAUSED: {"value":36387,"writable":false,"enumerable":true,"configurable":false},
    TRANSFORM_FEEDBACK_ACTIVE: {"value":36388,"writable":false,"enumerable":true,"configurable":false},
    TRANSFORM_FEEDBACK_BINDING: {"value":36389,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_IMMUTABLE_FORMAT: {"value":37167,"writable":false,"enumerable":true,"configurable":false},
    MAX_ELEMENT_INDEX: {"value":36203,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_IMMUTABLE_LEVELS: {"value":33503,"writable":false,"enumerable":true,"configurable":false},
    TIMEOUT_IGNORED: {"value":-1,"writable":false,"enumerable":true,"configurable":false},
    MAX_CLIENT_WAIT_TIMEOUT_WEBGL: {"value":37447,"writable":false,"enumerable":true,"configurable":false},
    [Symbol.toStringTag]: {value:"WebGL2RenderingContext",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(TextEncoder.prototype, {
    encode: {value: v_saf(function encode(){v_console_log("  [*] TextEncoder -> encode[func]", [].slice.call(arguments));})},
    [Symbol.toStringTag]: {value:"TextEncoder",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(AudioListener.prototype, {
    forwardX: {get(){ v_console_log("  [*] AudioListener -> forwardX[get]", {});return {} }},
    [Symbol.toStringTag]: {value:"AudioListener",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(AudioParam.prototype, {
    maxValue: {get(){ v_console_log("  [*] AudioParam -> maxValue[get]", 22050);return 22050 }},
    defaultValue: {get(){ v_console_log("  [*] AudioParam -> defaultValue[get]", 440);return 440 }},
    minValue: {get(){ v_console_log("  [*] AudioParam -> minValue[get]", -22050);return -22050 }},
    value: {set(){ v_console_log("  [*] AudioParam -> value[set]", [].slice.call(arguments));return -22050 }},
    [Symbol.toStringTag]: {value:"AudioParam",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(TextMetrics.prototype, {
    actualBoundingBoxAscent: {get(){ v_console_log("  [*] TextMetrics -> actualBoundingBoxAscent[get]", 9);return 9 }},
    actualBoundingBoxDescent: {get(){ v_console_log("  [*] TextMetrics -> actualBoundingBoxDescent[get]", 2);return 2 }},
    actualBoundingBoxLeft: {get(){ v_console_log("  [*] TextMetrics -> actualBoundingBoxLeft[get]", -1);return -1 }},
    actualBoundingBoxRight: {get(){ v_console_log("  [*] TextMetrics -> actualBoundingBoxRight[get]", 13);return 13 }},
    fontBoundingBoxAscent: {get(){ v_console_log("  [*] TextMetrics -> fontBoundingBoxAscent[get]", 9);return 9 }},
    fontBoundingBoxDescent: {get(){ v_console_log("  [*] TextMetrics -> fontBoundingBoxDescent[get]", 3);return 3 }},
    width: {get(){ v_console_log("  [*] TextMetrics -> width[get]", 13.73046875);return 13.73046875 }},
    [Symbol.toStringTag]: {value:"TextMetrics",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(NavigatorUAData.prototype, {
    getHighEntropyValues: {value: v_saf(function getHighEntropyValues(){v_console_log("  [*] NavigatorUAData -> getHighEntropyValues[func]", [].slice.call(arguments));})},
    platform: {get(){ v_console_log("  [*] NavigatorUAData -> platform[get]", "Windows");return "Windows" }},
    brands: {get(){ v_console_log("  [*] NavigatorUAData -> brands[get]", {});return {} }},
    toJSON: {value: v_saf(function toJSON(){v_console_log("  [*] NavigatorUAData -> toJSON[func]", [].slice.call(arguments));})},
    [Symbol.toStringTag]: {value:"NavigatorUAData",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(MediaCapabilities.prototype, {
    decodingInfo: {value: v_saf(function decodingInfo(){v_console_log("  [*] MediaCapabilities -> decodingInfo[func]", [].slice.call(arguments));})},
    [Symbol.toStringTag]: {value:"MediaCapabilities",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(MimeTypeArray.prototype, {
    length: {get(){ v_console_log("  [*] MimeTypeArray -> length[get]", 2);return 2 }},
    [Symbol.toStringTag]: {value:"MimeTypeArray",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(PerformanceEntry.prototype, {
    [Symbol.toStringTag]: {value:"PerformanceEntry",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(MutationRecord.prototype, {
    type: {get(){ v_console_log("  [*] MutationRecord -> type[get]", "childList");return "childList" }},
    addedNodes: {get(){ v_console_log("  [*] MutationRecord -> addedNodes[get]", {});return {} }},
    [Symbol.toStringTag]: {value:"MutationRecord",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(NodeList.prototype, {
    length: {get(){ v_console_log("  [*] NodeList -> length[get]", 0);return 0 }},
    [Symbol.toStringTag]: {value:"NodeList",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(RTCIceCandidate.prototype, {
    candidate: {get(){ v_console_log("  [*] RTCIceCandidate -> candidate[get]", "candidate:1254594954 1 udp 1677729535 175.0.137.135 56230 typ srflx raddr 0.0.0.0 rport 0 generation 0 ufrag X8CR network-cost 999");return "candidate:1254594954 1 udp 1677729535 175.0.137.135 56230 typ srflx raddr 0.0.0.0 rport 0 generation 0 ufrag X8CR network-cost 999" }},
    foundation: {get(){ v_console_log("  [*] RTCIceCandidate -> foundation[get]", "1254594954");return "1254594954" }},
    [Symbol.toStringTag]: {value:"RTCIceCandidate",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(RTCSessionDescription.prototype, {
    sdp: {get(){ v_console_log("  [*] RTCSessionDescription -> sdp[get]", "v=0\r\no=- 6995479895618528256 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0 1 2\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=audio 9 UDP/TLS/RTP/SAVPF 111 63 9 0 8 13 110 126\r\nc=IN IP4 0.0.0.0\r\na=rtcp:9 IN IP4 0.0.0.0\r\na=candidate:3178071407 1 udp 2113937151 2bdc9f34-1a09-4e52-be2d-defc96c453ba.local 56226 typ host generation 0 network-cost 999\r\na=ice-ufrag:X8CR\r\na=ice-pwd:psxn+x5B0hKtmhoW64/J03+c\r\na=ice-options:trickle\r\na=fingerprint:sha-256 9A:31:E7:8F:9E:60:BB:45:C4:24:96:34:0F:A3:3C:4F:AE:A3:DA:A3:A1:59:E7:C8:FF:F4:14:09:EA:EF:F6:AB\r\na=setup:actpass\r\na=mid:0\r\na=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\r\na=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\r\na=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01\r\na=extmap:4 urn:ietf:params:rtp-hdrext:sdes:mid\r\na=recvonly\r\na=rtcp-mux\r\na=rtcp-rsize\r\na=rtpmap:111 opus/48000/2\r\na=rtcp-fb:111 transport-cc\r\na=fmtp:111 minptime=10;useinbandfec=1\r\na=rtpmap:63 red/48000/2\r\na=fmtp:63 111/111\r\na=rtpmap:9 G722/8000\r\na=rtpmap:0 PCMU/8000\r\na=rtpmap:8 PCMA/8000\r\na=rtpmap:13 CN/8000\r\na=rtpmap:110 telephone-event/48000\r\na=rtpmap:126 telephone-event/8000\r\nm=video 9 UDP/TLS/RTP/SAVPF 96 97 98 99 100 101 35 36 37 38 103 104 107 108 109 114 115 116 117 118 39 40 41 42 43 44 45 46 47 48 119 120 121 122 49 50 51 52 123 124 125 53\r\nc=IN IP4 0.0.0.0\r\na=rtcp:9 IN IP4 0.0.0.0\r\na=candidate:3178071407 1 udp 2113937151 2bdc9f34-1a09-4e52-be2d-defc96c453ba.local 56228 typ host generation 0 network-cost 999\r\na=ice-ufrag:X8CR\r\na=ice-pwd:psxn+x5B0hKtmhoW64/J03+c\r\na=ice-options:trickle\r\na=fingerprint:sha-256 9A:31:E7:8F:9E:60:BB:45:C4:24:96:34:0F:A3:3C:4F:AE:A3:DA:A3:A1:59:E7:C8:FF:F4:14:09:EA:EF:F6:AB\r\na=setup:actpass\r\na=mid:1\r\na=extmap:14 urn:ietf:params:rtp-hdrext:toffset\r\na=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\r\na=extmap:13 urn:3gpp:video-orientation\r\na=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01\r\na=extmap:5 http://www.webrtc.org/experiments/rtp-hdrext/playout-delay\r\na=extmap:6 http://www.webrtc.org/experiments/rtp-hdrext/video-content-type\r\na=extmap:7 http://www.webrtc.org/experiments/rtp-hdrext/video-timing\r\na=extmap:8 http://www.webrtc.org/experiments/rtp-hdrext/color-space\r\na=extmap:4 urn:ietf:params:rtp-hdrext:sdes:mid\r\na=extmap:10 urn:ietf:params:rtp-hdrext:sdes:rtp-stream-id\r\na=extmap:11 urn:ietf:params:rtp-hdrext:sdes:repaired-rtp-stream-id\r\na=recvonly\r\na=rtcp-mux\r\na=rtcp-rsize\r\na=rtpmap:96 VP8/90000\r\na=rtcp-fb:96 goog-remb\r\na=rtcp-fb:96 transport-cc\r\na=rtcp-fb:96 ccm fir\r\na=rtcp-fb:96 nack\r\na=rtcp-fb:96 nack pli\r\na=rtpmap:97 rtx/90000\r\na=fmtp:97 apt=96\r\na=rtpmap:98 VP9/90000\r\na=rtcp-fb:98 goog-remb\r\na=rtcp-fb:98 transport-cc\r\na=rtcp-fb:98 ccm fir\r\na=rtcp-fb:98 nack\r\na=rtcp-fb:98 nack pli\r\na=fmtp:98 profile-id=0\r\na=rtpmap:99 rtx/90000\r\na=fmtp:99 apt=98\r\na=rtpmap:100 VP9/90000\r\na=rtcp-fb:100 goog-remb\r\na=rtcp-fb:100 transport-cc\r\na=rtcp-fb:100 ccm fir\r\na=rtcp-fb:100 nack\r\na=rtcp-fb:100 nack pli\r\na=fmtp:100 profile-id=2\r\na=rtpmap:101 rtx/90000\r\na=fmtp:101 apt=100\r\na=rtpmap:35 VP9/90000\r\na=rtcp-fb:35 goog-remb\r\na=rtcp-fb:35 transport-cc\r\na=rtcp-fb:35 ccm fir\r\na=rtcp-fb:35 nack\r\na=rtcp-fb:35 nack pli\r\na=fmtp:35 profile-id=1\r\na=rtpmap:36 rtx/90000\r\na=fmtp:36 apt=35\r\na=rtpmap:37 VP9/90000\r\na=rtcp-fb:37 goog-remb\r\na=rtcp-fb:37 transport-cc\r\na=rtcp-fb:37 ccm fir\r\na=rtcp-fb:37 nack\r\na=rtcp-fb:37 nack pli\r\na=fmtp:37 profile-id=3\r\na=rtpmap:38 rtx/90000\r\na=fmtp:38 apt=37\r\na=rtpmap:103 H264/90000\r\na=rtcp-fb:103 goog-remb\r\na=rtcp-fb:103 transport-cc\r\na=rtcp-fb:103 ccm fir\r\na=rtcp-fb:103 nack\r\na=rtcp-fb:103 nack pli\r\na=fmtp:103 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42001f\r\na=rtpmap:104 rtx/90000\r\na=fmtp:104 apt=103\r\na=rtpmap:107 H264/90000\r\na=rtcp-fb:107 goog-remb\r\na=rtcp-fb:107 transport-cc\r\na=rtcp-fb:107 ccm fir\r\na=rtcp-fb:107 nack\r\na=rtcp-fb:107 nack pli\r\na=fmtp:107 level-asymmetry-allowed=1;packetization-mode=0;profile-level-id=42001f\r\na=rtpmap:108 rtx/90000\r\na=fmtp:108 apt=107\r\na=rtpmap:109 H264/90000\r\na=rtcp-fb:109 goog-remb\r\na=rtcp-fb:109 transport-cc\r\na=rtcp-fb:109 ccm fir\r\na=rtcp-fb:109 nack\r\na=rtcp-fb:109 nack pli\r\na=fmtp:109 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42e01f\r\na=rtpmap:114 rtx/90000\r\na=fmtp:114 apt=109\r\na=rtpmap:115 H264/90000\r\na=rtcp-fb:115 goog-remb\r\na=rtcp-fb:115 transport-cc\r\na=rtcp-fb:115 ccm fir\r\na=rtcp-fb:115 nack\r\na=rtcp-fb:115 nack pli\r\na=fmtp:115 level-asymmetry-allowed=1;packetization-mode=0;profile-level-id=42e01f\r\na=rtpmap:116 rtx/90000\r\na=fmtp:116 apt=115\r\na=rtpmap:117 H264/90000\r\na=rtcp-fb:117 goog-remb\r\na=rtcp-fb:117 transport-cc\r\na=rtcp-fb:117 ccm fir\r\na=rtcp-fb:117 nack\r\na=rtcp-fb:117 nack pli\r\na=fmtp:117 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=4d001f\r\na=rtpmap:118 rtx/90000\r\na=fmtp:118 apt=117\r\na=rtpmap:39 H264/90000\r\na=rtcp-fb:39 goog-remb\r\na=rtcp-fb:39 transport-cc\r\na=rtcp-fb:39 ccm fir\r\na=rtcp-fb:39 nack\r\na=rtcp-fb:39 nack pli\r\na=fmtp:39 level-asymmetry-allowed=1;packetization-mode=0;profile-level-id=4d001f\r\na=rtpmap:40 rtx/90000\r\na=fmtp:40 apt=39\r\na=rtpmap:41 H264/90000\r\na=rtcp-fb:41 goog-remb\r\na=rtcp-fb:41 transport-cc\r\na=rtcp-fb:41 ccm fir\r\na=rtcp-fb:41 nack\r\na=rtcp-fb:41 nack pli\r\na=fmtp:41 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=f4001f\r\na=rtpmap:42 rtx/90000\r\na=fmtp:42 apt=41\r\na=rtpmap:43 H264/90000\r\na=rtcp-fb:43 goog-remb\r\na=rtcp-fb:43 transport-cc\r\na=rtcp-fb:43 ccm fir\r\na=rtcp-fb:43 nack\r\na=rtcp-fb:43 nack pli\r\na=fmtp:43 level-asymmetry-allowed=1;packetization-mode=0;profile-level-id=f4001f\r\na=rtpmap:44 rtx/90000\r\na=fmtp:44 apt=43\r\na=rtpmap:45 AV1/90000\r\na=rtcp-fb:45 goog-remb\r\na=rtcp-fb:45 transport-cc\r\na=rtcp-fb:45 ccm fir\r\na=rtcp-fb:45 nack\r\na=rtcp-fb:45 nack pli\r\na=fmtp:45 level-idx=5;profile=0;tier=0\r\na=rtpmap:46 rtx/90000\r\na=fmtp:46 apt=45\r\na=rtpmap:47 AV1/90000\r\na=rtcp-fb:47 goog-remb\r\na=rtcp-fb:47 transport-cc\r\na=rtcp-fb:47 ccm fir\r\na=rtcp-fb:47 nack\r\na=rtcp-fb:47 nack pli\r\na=fmtp:47 level-idx=5;profile=1;tier=0\r\na=rtpmap:48 rtx/90000\r\na=fmtp:48 apt=47\r\na=rtpmap:119 H264/90000\r\na=rtcp-fb:119 goog-remb\r\na=rtcp-fb:119 transport-cc\r\na=rtcp-fb:119 ccm fir\r\na=rtcp-fb:119 nack\r\na=rtcp-fb:119 nack pli\r\na=fmtp:119 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=64001f\r\na=rtpmap:120 rtx/90000\r\na=fmtp:120 apt=119\r\na=rtpmap:121 H264/90000\r\na=rtcp-fb:121 goog-remb\r\na=rtcp-fb:121 transport-cc\r\na=rtcp-fb:121 ccm fir\r\na=rtcp-fb:121 nack\r\na=rtcp-fb:121 nack pli\r\na=fmtp:121 level-asymmetry-allowed=1;packetization-mode=0;profile-level-id=64001f\r\na=rtpmap:122 rtx/90000\r\na=fmtp:122 apt=121\r\na=rtpmap:49 H265/90000\r\na=rtcp-fb:49 goog-remb\r\na=rtcp-fb:49 transport-cc\r\na=rtcp-fb:49 ccm fir\r\na=rtcp-fb:49 nack\r\na=rtcp-fb:49 nack pli\r\na=fmtp:49 level-id=180;profile-id=1;tier-flag=0;tx-mode=SRST\r\na=rtpmap:50 rtx/90000\r\na=fmtp:50 apt=49\r\na=rtpmap:51 H265/90000\r\na=rtcp-fb:51 goog-remb\r\na=rtcp-fb:51 transport-cc\r\na=rtcp-fb:51 ccm fir\r\na=rtcp-fb:51 nack\r\na=rtcp-fb:51 nack pli\r\na=fmtp:51 level-id=180;profile-id=2;tier-flag=0;tx-mode=SRST\r\na=rtpmap:52 rtx/90000\r\na=fmtp:52 apt=51\r\na=rtpmap:123 red/90000\r\na=rtpmap:124 rtx/90000\r\na=fmtp:124 apt=123\r\na=rtpmap:125 ulpfec/90000\r\na=rtpmap:53 flexfec-03/90000\r\na=rtcp-fb:53 goog-remb\r\na=rtcp-fb:53 transport-cc\r\na=fmtp:53 repair-window=10000000\r\nm=application 56230 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 175.0.137.135\r\na=candidate:3178071407 1 udp 2113937151 2bdc9f34-1a09-4e52-be2d-defc96c453ba.local 56230 typ host generation 0 network-cost 999\r\na=candidate:1254594954 1 udp 1677729535 175.0.137.135 56230 typ srflx raddr 0.0.0.0 rport 0 generation 0 network-cost 999\r\na=ice-ufrag:X8CR\r\na=ice-pwd:psxn+x5B0hKtmhoW64/J03+c\r\na=ice-options:trickle\r\na=fingerprint:sha-256 9A:31:E7:8F:9E:60:BB:45:C4:24:96:34:0F:A3:3C:4F:AE:A3:DA:A3:A1:59:E7:C8:FF:F4:14:09:EA:EF:F6:AB\r\na=setup:actpass\r\na=mid:2\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n");return "v=0\r\no=- 6995479895618528256 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0 1 2\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=audio 9 UDP/TLS/RTP/SAVPF 111 63 9 0 8 13 110 126\r\nc=IN IP4 0.0.0.0\r\na=rtcp:9 IN IP4 0.0.0.0\r\na=candidate:3178071407 1 udp 2113937151 2bdc9f34-1a09-4e52-be2d-defc96c453ba.local 56226 typ host generation 0 network-cost 999\r\na=ice-ufrag:X8CR\r\na=ice-pwd:psxn+x5B0hKtmhoW64/J03+c\r\na=ice-options:trickle\r\na=fingerprint:sha-256 9A:31:E7:8F:9E:60:BB:45:C4:24:96:34:0F:A3:3C:4F:AE:A3:DA:A3:A1:59:E7:C8:FF:F4:14:09:EA:EF:F6:AB\r\na=setup:actpass\r\na=mid:0\r\na=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\r\na=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\r\na=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01\r\na=extmap:4 urn:ietf:params:rtp-hdrext:sdes:mid\r\na=recvonly\r\na=rtcp-mux\r\na=rtcp-rsize\r\na=rtpmap:111 opus/48000/2\r\na=rtcp-fb:111 transport-cc\r\na=fmtp:111 minptime=10;useinbandfec=1\r\na=rtpmap:63 red/48000/2\r\na=fmtp:63 111/111\r\na=rtpmap:9 G722/8000\r\na=rtpmap:0 PCMU/8000\r\na=rtpmap:8 PCMA/8000\r\na=rtpmap:13 CN/8000\r\na=rtpmap:110 telephone-event/48000\r\na=rtpmap:126 telephone-event/8000\r\nm=video 9 UDP/TLS/RTP/SAVPF 96 97 98 99 100 101 35 36 37 38 103 104 107 108 109 114 115 116 117 118 39 40 41 42 43 44 45 46 47 48 119 120 121 122 49 50 51 52 123 124 125 53\r\nc=IN IP4 0.0.0.0\r\na=rtcp:9 IN IP4 0.0.0.0\r\na=candidate:3178071407 1 udp 2113937151 2bdc9f34-1a09-4e52-be2d-defc96c453ba.local 56228 typ host generation 0 network-cost 999\r\na=ice-ufrag:X8CR\r\na=ice-pwd:psxn+x5B0hKtmhoW64/J03+c\r\na=ice-options:trickle\r\na=fingerprint:sha-256 9A:31:E7:8F:9E:60:BB:45:C4:24:96:34:0F:A3:3C:4F:AE:A3:DA:A3:A1:59:E7:C8:FF:F4:14:09:EA:EF:F6:AB\r\na=setup:actpass\r\na=mid:1\r\na=extmap:14 urn:ietf:params:rtp-hdrext:toffset\r\na=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\r\na=extmap:13 urn:3gpp:video-orientation\r\na=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01\r\na=extmap:5 http://www.webrtc.org/experiments/rtp-hdrext/playout-delay\r\na=extmap:6 http://www.webrtc.org/experiments/rtp-hdrext/video-content-type\r\na=extmap:7 http://www.webrtc.org/experiments/rtp-hdrext/video-timing\r\na=extmap:8 http://www.webrtc.org/experiments/rtp-hdrext/color-space\r\na=extmap:4 urn:ietf:params:rtp-hdrext:sdes:mid\r\na=extmap:10 urn:ietf:params:rtp-hdrext:sdes:rtp-stream-id\r\na=extmap:11 urn:ietf:params:rtp-hdrext:sdes:repaired-rtp-stream-id\r\na=recvonly\r\na=rtcp-mux\r\na=rtcp-rsize\r\na=rtpmap:96 VP8/90000\r\na=rtcp-fb:96 goog-remb\r\na=rtcp-fb:96 transport-cc\r\na=rtcp-fb:96 ccm fir\r\na=rtcp-fb:96 nack\r\na=rtcp-fb:96 nack pli\r\na=rtpmap:97 rtx/90000\r\na=fmtp:97 apt=96\r\na=rtpmap:98 VP9/90000\r\na=rtcp-fb:98 goog-remb\r\na=rtcp-fb:98 transport-cc\r\na=rtcp-fb:98 ccm fir\r\na=rtcp-fb:98 nack\r\na=rtcp-fb:98 nack pli\r\na=fmtp:98 profile-id=0\r\na=rtpmap:99 rtx/90000\r\na=fmtp:99 apt=98\r\na=rtpmap:100 VP9/90000\r\na=rtcp-fb:100 goog-remb\r\na=rtcp-fb:100 transport-cc\r\na=rtcp-fb:100 ccm fir\r\na=rtcp-fb:100 nack\r\na=rtcp-fb:100 nack pli\r\na=fmtp:100 profile-id=2\r\na=rtpmap:101 rtx/90000\r\na=fmtp:101 apt=100\r\na=rtpmap:35 VP9/90000\r\na=rtcp-fb:35 goog-remb\r\na=rtcp-fb:35 transport-cc\r\na=rtcp-fb:35 ccm fir\r\na=rtcp-fb:35 nack\r\na=rtcp-fb:35 nack pli\r\na=fmtp:35 profile-id=1\r\na=rtpmap:36 rtx/90000\r\na=fmtp:36 apt=35\r\na=rtpmap:37 VP9/90000\r\na=rtcp-fb:37 goog-remb\r\na=rtcp-fb:37 transport-cc\r\na=rtcp-fb:37 ccm fir\r\na=rtcp-fb:37 nack\r\na=rtcp-fb:37 nack pli\r\na=fmtp:37 profile-id=3\r\na=rtpmap:38 rtx/90000\r\na=fmtp:38 apt=37\r\na=rtpmap:103 H264/90000\r\na=rtcp-fb:103 goog-remb\r\na=rtcp-fb:103 transport-cc\r\na=rtcp-fb:103 ccm fir\r\na=rtcp-fb:103 nack\r\na=rtcp-fb:103 nack pli\r\na=fmtp:103 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42001f\r\na=rtpmap:104 rtx/90000\r\na=fmtp:104 apt=103\r\na=rtpmap:107 H264/90000\r\na=rtcp-fb:107 goog-remb\r\na=rtcp-fb:107 transport-cc\r\na=rtcp-fb:107 ccm fir\r\na=rtcp-fb:107 nack\r\na=rtcp-fb:107 nack pli\r\na=fmtp:107 level-asymmetry-allowed=1;packetization-mode=0;profile-level-id=42001f\r\na=rtpmap:108 rtx/90000\r\na=fmtp:108 apt=107\r\na=rtpmap:109 H264/90000\r\na=rtcp-fb:109 goog-remb\r\na=rtcp-fb:109 transport-cc\r\na=rtcp-fb:109 ccm fir\r\na=rtcp-fb:109 nack\r\na=rtcp-fb:109 nack pli\r\na=fmtp:109 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42e01f\r\na=rtpmap:114 rtx/90000\r\na=fmtp:114 apt=109\r\na=rtpmap:115 H264/90000\r\na=rtcp-fb:115 goog-remb\r\na=rtcp-fb:115 transport-cc\r\na=rtcp-fb:115 ccm fir\r\na=rtcp-fb:115 nack\r\na=rtcp-fb:115 nack pli\r\na=fmtp:115 level-asymmetry-allowed=1;packetization-mode=0;profile-level-id=42e01f\r\na=rtpmap:116 rtx/90000\r\na=fmtp:116 apt=115\r\na=rtpmap:117 H264/90000\r\na=rtcp-fb:117 goog-remb\r\na=rtcp-fb:117 transport-cc\r\na=rtcp-fb:117 ccm fir\r\na=rtcp-fb:117 nack\r\na=rtcp-fb:117 nack pli\r\na=fmtp:117 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=4d001f\r\na=rtpmap:118 rtx/90000\r\na=fmtp:118 apt=117\r\na=rtpmap:39 H264/90000\r\na=rtcp-fb:39 goog-remb\r\na=rtcp-fb:39 transport-cc\r\na=rtcp-fb:39 ccm fir\r\na=rtcp-fb:39 nack\r\na=rtcp-fb:39 nack pli\r\na=fmtp:39 level-asymmetry-allowed=1;packetization-mode=0;profile-level-id=4d001f\r\na=rtpmap:40 rtx/90000\r\na=fmtp:40 apt=39\r\na=rtpmap:41 H264/90000\r\na=rtcp-fb:41 goog-remb\r\na=rtcp-fb:41 transport-cc\r\na=rtcp-fb:41 ccm fir\r\na=rtcp-fb:41 nack\r\na=rtcp-fb:41 nack pli\r\na=fmtp:41 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=f4001f\r\na=rtpmap:42 rtx/90000\r\na=fmtp:42 apt=41\r\na=rtpmap:43 H264/90000\r\na=rtcp-fb:43 goog-remb\r\na=rtcp-fb:43 transport-cc\r\na=rtcp-fb:43 ccm fir\r\na=rtcp-fb:43 nack\r\na=rtcp-fb:43 nack pli\r\na=fmtp:43 level-asymmetry-allowed=1;packetization-mode=0;profile-level-id=f4001f\r\na=rtpmap:44 rtx/90000\r\na=fmtp:44 apt=43\r\na=rtpmap:45 AV1/90000\r\na=rtcp-fb:45 goog-remb\r\na=rtcp-fb:45 transport-cc\r\na=rtcp-fb:45 ccm fir\r\na=rtcp-fb:45 nack\r\na=rtcp-fb:45 nack pli\r\na=fmtp:45 level-idx=5;profile=0;tier=0\r\na=rtpmap:46 rtx/90000\r\na=fmtp:46 apt=45\r\na=rtpmap:47 AV1/90000\r\na=rtcp-fb:47 goog-remb\r\na=rtcp-fb:47 transport-cc\r\na=rtcp-fb:47 ccm fir\r\na=rtcp-fb:47 nack\r\na=rtcp-fb:47 nack pli\r\na=fmtp:47 level-idx=5;profile=1;tier=0\r\na=rtpmap:48 rtx/90000\r\na=fmtp:48 apt=47\r\na=rtpmap:119 H264/90000\r\na=rtcp-fb:119 goog-remb\r\na=rtcp-fb:119 transport-cc\r\na=rtcp-fb:119 ccm fir\r\na=rtcp-fb:119 nack\r\na=rtcp-fb:119 nack pli\r\na=fmtp:119 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=64001f\r\na=rtpmap:120 rtx/90000\r\na=fmtp:120 apt=119\r\na=rtpmap:121 H264/90000\r\na=rtcp-fb:121 goog-remb\r\na=rtcp-fb:121 transport-cc\r\na=rtcp-fb:121 ccm fir\r\na=rtcp-fb:121 nack\r\na=rtcp-fb:121 nack pli\r\na=fmtp:121 level-asymmetry-allowed=1;packetization-mode=0;profile-level-id=64001f\r\na=rtpmap:122 rtx/90000\r\na=fmtp:122 apt=121\r\na=rtpmap:49 H265/90000\r\na=rtcp-fb:49 goog-remb\r\na=rtcp-fb:49 transport-cc\r\na=rtcp-fb:49 ccm fir\r\na=rtcp-fb:49 nack\r\na=rtcp-fb:49 nack pli\r\na=fmtp:49 level-id=180;profile-id=1;tier-flag=0;tx-mode=SRST\r\na=rtpmap:50 rtx/90000\r\na=fmtp:50 apt=49\r\na=rtpmap:51 H265/90000\r\na=rtcp-fb:51 goog-remb\r\na=rtcp-fb:51 transport-cc\r\na=rtcp-fb:51 ccm fir\r\na=rtcp-fb:51 nack\r\na=rtcp-fb:51 nack pli\r\na=fmtp:51 level-id=180;profile-id=2;tier-flag=0;tx-mode=SRST\r\na=rtpmap:52 rtx/90000\r\na=fmtp:52 apt=51\r\na=rtpmap:123 red/90000\r\na=rtpmap:124 rtx/90000\r\na=fmtp:124 apt=123\r\na=rtpmap:125 ulpfec/90000\r\na=rtpmap:53 flexfec-03/90000\r\na=rtcp-fb:53 goog-remb\r\na=rtcp-fb:53 transport-cc\r\na=fmtp:53 repair-window=10000000\r\nm=application 56230 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 175.0.137.135\r\na=candidate:3178071407 1 udp 2113937151 2bdc9f34-1a09-4e52-be2d-defc96c453ba.local 56230 typ host generation 0 network-cost 999\r\na=candidate:1254594954 1 udp 1677729535 175.0.137.135 56230 typ srflx raddr 0.0.0.0 rport 0 generation 0 network-cost 999\r\na=ice-ufrag:X8CR\r\na=ice-pwd:psxn+x5B0hKtmhoW64/J03+c\r\na=ice-options:trickle\r\na=fingerprint:sha-256 9A:31:E7:8F:9E:60:BB:45:C4:24:96:34:0F:A3:3C:4F:AE:A3:DA:A3:A1:59:E7:C8:FF:F4:14:09:EA:EF:F6:AB\r\na=setup:actpass\r\na=mid:2\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n" }},
    [Symbol.toStringTag]: {value:"RTCSessionDescription",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(FormData.prototype, {
    append: {value: v_saf(function append(){v_console_log("  [*] FormData -> append[func]", [].slice.call(arguments));})},
    [Symbol.toStringTag]: {value:"FormData",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(webkitURL.prototype, {
    searchParams: {get(){ v_console_log("  [*] webkitURL -> searchParams[get]", {});return {} }},
    pathname: {set(){ v_console_log("  [*] webkitURL -> pathname[set]", [].slice.call(arguments));return {} }},
    href: {get(){ v_console_log("  [*] webkitURL -> href[get]", "https://a/c%20d?a=1&c=3");return "https://a/c%20d?a=1&c=3" }},
    username: {get(){ v_console_log("  [*] webkitURL -> username[get]", "a");return "a" }},
    host: {get(){ v_console_log("  [*] webkitURL -> host[get]", "client.message.yangkeduo.com:16482");return "client.message.yangkeduo.com:16482" }},
    hash: {get(){ v_console_log("  [*] webkitURL -> hash[get]", "#%D0%B1");return "#%D0%B1" }},
    protocol: {get(){ v_console_log("  [*] webkitURL -> protocol[get]", "https:");return "https:" }},
    port: {get(){ v_console_log("  [*] webkitURL -> port[get]", "");return "" }},
    [Symbol.toStringTag]: {value:"webkitURL",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(Path2D.prototype, {
    addPath: {value: v_saf(function addPath(){v_console_log("  [*] Path2D -> addPath[func]", [].slice.call(arguments));})},
    [Symbol.toStringTag]: {value:"Path2D",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(Node.prototype, {
    firstChild: {get(){ v_console_log("  [*] Node -> firstChild[get]", {});return {} }},
    appendChild: {value: v_saf(function appendChild(){v_console_log("  [*] Node -> appendChild[func]", [].slice.call(arguments));})},
    textContent: {get(){ v_console_log("  [*] Node -> textContent[get]", "个人中心");return "个人中心" },set(){ v_console_log("  [*] Node -> textContent[set]", [].slice.call(arguments));return "个人中心" }},
    nodeType: {get(){ v_console_log("  [*] Node -> nodeType[get]", 1);return 1 }},
    lastChild: {get(){ v_console_log("  [*] Node -> lastChild[get]", {});return {} }},
    ownerDocument: {get(){ v_console_log("  [*] Node -> ownerDocument[get]", {});return {} }},
    nodeName: {get(){ v_console_log("  [*] Node -> nodeName[get]", "LI");return "LI" }},
    nextSibling: {get(){ v_console_log("  [*] Node -> nextSibling[get]", {});return {} }},
    nodeValue: {get(){ v_console_log("  [*] Node -> nodeValue[get]", "玩乐");return "玩乐" }},
    parentNode: {get(){ v_console_log("  [*] Node -> parentNode[get]", {});return {} }},
    insertBefore: {value: v_saf(function insertBefore(){v_console_log("  [*] Node -> insertBefore[func]", [].slice.call(arguments));})},
    removeChild: {value: v_saf(function removeChild(){v_console_log("  [*] Node -> removeChild[func]", [].slice.call(arguments));})},
    parentElement: {get(){ v_console_log("  [*] Node -> parentElement[get]", {});return {} }},
    nodeType: {"enumerable":true,"configurable":true,"get":function(){return 9},"set":function(){return true}},
    nodeName: {"enumerable":true,"configurable":true,"get":function(){return "#document"},"set":function(){return true}},
    baseURI: {"enumerable":true,"configurable":true,"get":function(){return "https://mobile.pinduoduo.com/?page_id=10002_1759817207805_2q7ofg0di7&is_back=1&bsch_is_search_mall=&bsch_show_active_page="},"set":function(){return true}},
    isConnected: {"enumerable":true,"configurable":true,"get":function(){return true},"set":function(){return true}},
    ELEMENT_NODE: {"value":1,"writable":false,"enumerable":true,"configurable":false},
    ATTRIBUTE_NODE: {"value":2,"writable":false,"enumerable":true,"configurable":false},
    TEXT_NODE: {"value":3,"writable":false,"enumerable":true,"configurable":false},
    CDATA_SECTION_NODE: {"value":4,"writable":false,"enumerable":true,"configurable":false},
    ENTITY_REFERENCE_NODE: {"value":5,"writable":false,"enumerable":true,"configurable":false},
    ENTITY_NODE: {"value":6,"writable":false,"enumerable":true,"configurable":false},
    PROCESSING_INSTRUCTION_NODE: {"value":7,"writable":false,"enumerable":true,"configurable":false},
    COMMENT_NODE: {"value":8,"writable":false,"enumerable":true,"configurable":false},
    DOCUMENT_NODE: {"value":9,"writable":false,"enumerable":true,"configurable":false},
    DOCUMENT_TYPE_NODE: {"value":10,"writable":false,"enumerable":true,"configurable":false},
    DOCUMENT_FRAGMENT_NODE: {"value":11,"writable":false,"enumerable":true,"configurable":false},
    NOTATION_NODE: {"value":12,"writable":false,"enumerable":true,"configurable":false},
    DOCUMENT_POSITION_DISCONNECTED: {"value":1,"writable":false,"enumerable":true,"configurable":false},
    DOCUMENT_POSITION_PRECEDING: {"value":2,"writable":false,"enumerable":true,"configurable":false},
    DOCUMENT_POSITION_FOLLOWING: {"value":4,"writable":false,"enumerable":true,"configurable":false},
    DOCUMENT_POSITION_CONTAINS: {"value":8,"writable":false,"enumerable":true,"configurable":false},
    DOCUMENT_POSITION_CONTAINED_BY: {"value":16,"writable":false,"enumerable":true,"configurable":false},
    DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: {"value":32,"writable":false,"enumerable":true,"configurable":false},
    [Symbol.toStringTag]: {value:"Node",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(Screen.prototype, {
    width: {get(){ v_console_log("  [*] Screen -> width[get]", 1920);return 1920 }},
    height: {get(){ v_console_log("  [*] Screen -> height[get]", 1080);return 1080 }},
    availWidth: {get(){ v_console_log("  [*] Screen -> availWidth[get]", 1920);return 1920 }},
    availHeight: {get(){ v_console_log("  [*] Screen -> availHeight[get]", 1040);return 1040 }},
    orientation: {get(){ v_console_log("  [*] Screen -> orientation[get]", {});return {} }},
    colorDepth: {get(){ v_console_log("  [*] Screen -> colorDepth[get]", 24);return 24 }},
    availWidth: {"enumerable":true,"configurable":true,"get":function(){return 1920},"set":function(){return true}},
    availHeight: {"enumerable":true,"configurable":true,"get":function(){return 1040},"set":function(){return true}},
    width: {"enumerable":true,"configurable":true,"get":function(){return 1920},"set":function(){return true}},
    height: {"enumerable":true,"configurable":true,"get":function(){return 1080},"set":function(){return true}},
    colorDepth: {"enumerable":true,"configurable":true,"get":function(){return 24},"set":function(){return true}},
    pixelDepth: {"enumerable":true,"configurable":true,"get":function(){return 24},"set":function(){return true}},
    availLeft: {"enumerable":true,"configurable":true,"get":function(){return 0},"set":function(){return true}},
    availTop: {"enumerable":true,"configurable":true,"get":function(){return 0},"set":function(){return true}},
    isExtended: {"enumerable":true,"configurable":true,"get":function(){return true},"set":function(){return true}},
    [Symbol.toStringTag]: {value:"Screen",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(XMLHttpRequestEventTarget.prototype, {
    onload: {set(){ v_console_log("  [*] XMLHttpRequestEventTarget -> onload[set]", [].slice.call(arguments)); }},
    onerror: {set(){ v_console_log("  [*] XMLHttpRequestEventTarget -> onerror[set]", [].slice.call(arguments)); }},
    onloadend: {set(){ v_console_log("  [*] XMLHttpRequestEventTarget -> onloadend[set]", [].slice.call(arguments)); }},
    onabort: {set(){ v_console_log("  [*] XMLHttpRequestEventTarget -> onabort[set]", [].slice.call(arguments)); }},
    ontimeout: {set(){ v_console_log("  [*] XMLHttpRequestEventTarget -> ontimeout[set]", [].slice.call(arguments)); }},
    [Symbol.toStringTag]: {value:"XMLHttpRequestEventTarget",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(MessagePort.prototype, {
    onmessage: {set(){ v_console_log("  [*] MessagePort -> onmessage[set]", [].slice.call(arguments)); }},
    postMessage: {value: v_saf(function postMessage(){v_console_log("  [*] MessagePort -> postMessage[func]", [].slice.call(arguments));})},
    [Symbol.toStringTag]: {value:"MessagePort",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(Performance.prototype, {
    now: {value: v_saf(function now(){v_console_log("  [*] Performance -> now[func]", [].slice.call(arguments));})},
    memory: {get(){ v_console_log("  [*] Performance -> memory[get]", {});return {} }},
    getEntries: {value: v_saf(function getEntries(){v_console_log("  [*] Performance -> getEntries[func]", [].slice.call(arguments));})},
    timeOrigin: {"enumerable":true,"configurable":true,"get":function(){return 1759909250023.1},"set":function(){return true}},
    [Symbol.toStringTag]: {value:"Performance",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(UIEvent.prototype, {
    view: {get(){ v_console_log("  [*] UIEvent -> view[get]", {});return {} }},
    detail: {get(){ v_console_log("  [*] UIEvent -> detail[get]", 0);return 0 }},
    [Symbol.toStringTag]: {value:"UIEvent",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(MediaQueryList.prototype, {
    matches: {get(){ v_console_log("  [*] MediaQueryList -> matches[get]", true);return true }},
    [Symbol.toStringTag]: {value:"MediaQueryList",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(OffscreenCanvas.prototype, {
    convertToBlob: {value: v_saf(function convertToBlob(){v_console_log("  [*] OffscreenCanvas -> convertToBlob[func]", [].slice.call(arguments));})},
    getContext: {value: v_saf(function getContext(){v_console_log("  [*] OffscreenCanvas -> getContext[func]", [].slice.call(arguments));})},
    [Symbol.toStringTag]: {value:"OffscreenCanvas",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(BaseAudioContext.prototype, {
    createAnalyser: {value: v_saf(function createAnalyser(){v_console_log("  [*] BaseAudioContext -> createAnalyser[func]", [].slice.call(arguments));})},
    createOscillator: {value: v_saf(function createOscillator(){v_console_log("  [*] BaseAudioContext -> createOscillator[func]", [].slice.call(arguments));})},
    createDynamicsCompressor: {value: v_saf(function createDynamicsCompressor(){v_console_log("  [*] BaseAudioContext -> createDynamicsCompressor[func]", [].slice.call(arguments));})},
    createBiquadFilter: {value: v_saf(function createBiquadFilter(){v_console_log("  [*] BaseAudioContext -> createBiquadFilter[func]", [].slice.call(arguments));})},
    listener: {get(){ v_console_log("  [*] BaseAudioContext -> listener[get]", {});return {} }},
    [Symbol.toStringTag]: {value:"BaseAudioContext",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(AudioNode.prototype, {
    channelCount: {get(){ v_console_log("  [*] AudioNode -> channelCount[get]", 2);return 2 }},
    channelCountMode: {get(){ v_console_log("  [*] AudioNode -> channelCountMode[get]", "max");return "max" }},
    channelInterpretation: {get(){ v_console_log("  [*] AudioNode -> channelInterpretation[get]", "speakers");return "speakers" }},
    numberOfInputs: {get(){ v_console_log("  [*] AudioNode -> numberOfInputs[get]", 1);return 1 }},
    numberOfOutputs: {get(){ v_console_log("  [*] AudioNode -> numberOfOutputs[get]", 1);return 1 }},
    context: {get(){ v_console_log("  [*] AudioNode -> context[get]", {});return {} }},
    disconnect: {value: v_saf(function disconnect(){v_console_log("  [*] AudioNode -> disconnect[func]", [].slice.call(arguments));})},
    [Symbol.toStringTag]: {value:"AudioNode",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(ScreenOrientation.prototype, {
    angle: {get(){ v_console_log("  [*] ScreenOrientation -> angle[get]", 0);return 0 }},
    type: {get(){ v_console_log("  [*] ScreenOrientation -> type[get]", "landscape-primary");return "landscape-primary" }},
    [Symbol.toStringTag]: {value:"ScreenOrientation",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(PerformanceResourceTiming.prototype, {
    initiatorType: {get(){ v_console_log("  [*] PerformanceResourceTiming -> initiatorType[get]", "img");return "img" }},
    nextHopProtocol: {get(){ v_console_log("  [*] PerformanceResourceTiming -> nextHopProtocol[get]", "h2");return "h2" }},
    [Symbol.toStringTag]: {value:"PerformanceResourceTiming",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(RTCPeerConnection.prototype, {
    createDataChannel: {value: v_saf(function createDataChannel(){v_console_log("  [*] RTCPeerConnection -> createDataChannel[func]", [].slice.call(arguments));})},
    createOffer: {value: v_saf(function createOffer(){v_console_log("  [*] RTCPeerConnection -> createOffer[func]", [].slice.call(arguments));})},
    onicecandidate: {set(){ v_console_log("  [*] RTCPeerConnection -> onicecandidate[set]", [].slice.call(arguments)); }},
    setLocalDescription: {value: v_saf(function setLocalDescription(){v_console_log("  [*] RTCPeerConnection -> setLocalDescription[func]", [].slice.call(arguments));})},
    localDescription: {get(){ v_console_log("  [*] RTCPeerConnection -> localDescription[get]", {});return {} }},
    [Symbol.toStringTag]: {value:"RTCPeerConnection",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(Worker.prototype, {
    onmessage: {set(){ v_console_log("  [*] Worker -> onmessage[set]", [].slice.call(arguments)); }},
    postMessage: {value: v_saf(function postMessage(){v_console_log("  [*] Worker -> postMessage[func]", [].slice.call(arguments));})},
    [Symbol.toStringTag]: {value:"Worker",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(VisualViewport.prototype, {
    width: {get(){ v_console_log("  [*] VisualViewport -> width[get]", 1056);return 1056 }},
    offsetLeft: {"enumerable":true,"configurable":true,"get":function(){return 0},"set":function(){return true}},
    offsetTop: {"enumerable":true,"configurable":true,"get":function(){return 0},"set":function(){return true}},
    pageLeft: {"enumerable":true,"configurable":true,"get":function(){return 0},"set":function(){return true}},
    pageTop: {"enumerable":true,"configurable":true,"get":function(){return 0},"set":function(){return true}},
    width: {"enumerable":true,"configurable":true,"get":function(){return 1056},"set":function(){return true}},
    height: {"enumerable":true,"configurable":true,"get":function(){return 918},"set":function(){return true}},
    scale: {"enumerable":true,"configurable":true,"get":function(){return 1},"set":function(){return true}},
    [Symbol.toStringTag]: {value:"VisualViewport",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(OfflineAudioCompletionEvent.prototype, {
    renderedBuffer: {get(){ v_console_log("  [*] OfflineAudioCompletionEvent -> renderedBuffer[get]", {});return {} }},
    [Symbol.toStringTag]: {value:"OfflineAudioCompletionEvent",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(RTCPeerConnectionIceEvent.prototype, {
    candidate: {get(){ v_console_log("  [*] RTCPeerConnectionIceEvent -> candidate[get]", {});return {} }},
    [Symbol.toStringTag]: {value:"RTCPeerConnectionIceEvent",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(webkitRTCPeerConnection.prototype, {
    createDataChannel: {value: v_saf(function createDataChannel(){v_console_log("  [*] webkitRTCPeerConnection -> createDataChannel[func]", [].slice.call(arguments));})},
    createOffer: {value: v_saf(function createOffer(){v_console_log("  [*] webkitRTCPeerConnection -> createOffer[func]", [].slice.call(arguments));})},
    onicecandidate: {set(){ v_console_log("  [*] webkitRTCPeerConnection -> onicecandidate[set]", [].slice.call(arguments)); }},
    setLocalDescription: {value: v_saf(function setLocalDescription(){v_console_log("  [*] webkitRTCPeerConnection -> setLocalDescription[func]", [].slice.call(arguments));})},
    localDescription: {get(){ v_console_log("  [*] webkitRTCPeerConnection -> localDescription[get]", {});return {} }},
    [Symbol.toStringTag]: {value:"webkitRTCPeerConnection",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(Document.prototype, {
    visibilityState: {get(){ v_console_log("  [*] Document -> visibilityState[get]", "visible");return "visible" }},
    readyState: {get(){ v_console_log("  [*] Document -> readyState[get]", "interactive");return "interactive" }},
    createDocumentFragment: {value: v_saf(function createDocumentFragment(){v_console_log("  [*] Document -> createDocumentFragment[func]", [].slice.call(arguments));})},
    createTextNode: {value: v_saf(function createTextNode(){v_console_log("  [*] Document -> createTextNode[func]", [].slice.call(arguments));})},
    activeElement: {get(){ v_console_log("  [*] Document -> activeElement[get]", {});return {} }},
    defaultView: {get(){ v_console_log("  [*] Document -> defaultView[get]", {});return {} }},
    hidden: {get(){ v_console_log("  [*] Document -> hidden[get]", false);return false }},
    referrer: {get(){ v_console_log("  [*] Document -> referrer[get]", "https://mobile.pinduoduo.com/?page_id=10002_1759817207805_2q7ofg0di7&is_back=1&bsch_is_search_mall=&bsch_show_active_page=");return "https://mobile.pinduoduo.com/?page_id=10002_1759817207805_2q7ofg0di7&is_back=1&bsch_is_search_mall=&bsch_show_active_page=" }},
    currentScript: {get(){ v_console_log("  [*] Document -> currentScript[get]", {});return {} }},
    all: {get(){ v_console_log("  [*] Document -> all[get]", {});return {} }},
    createEvent: {value: v_saf(function createEvent(){v_console_log("  [*] Document -> createEvent[func]", [].slice.call(arguments));})},
    URL: {"enumerable":true,"configurable":true,"get":function(){return "https://mobile.pinduoduo.com/?page_id=10002_1759817207805_2q7ofg0di7&is_back=1&bsch_is_search_mall=&bsch_show_active_page="},"set":function(){return true}},
    documentURI: {"enumerable":true,"configurable":true,"get":function(){return "https://mobile.pinduoduo.com/?page_id=10002_1759817207805_2q7ofg0di7&is_back=1&bsch_is_search_mall=&bsch_show_active_page="},"set":function(){return true}},
    compatMode: {"enumerable":true,"configurable":true,"get":function(){return "CSS1Compat"},"set":function(){return true}},
    characterSet: {"enumerable":true,"configurable":true,"get":function(){return "UTF-8"},"set":function(){return true}},
    charset: {"enumerable":true,"configurable":true,"get":function(){return "UTF-8"},"set":function(){return true}},
    inputEncoding: {"enumerable":true,"configurable":true,"get":function(){return "UTF-8"},"set":function(){return true}},
    contentType: {"enumerable":true,"configurable":true,"get":function(){return "text/html"},"set":function(){return true}},
    xmlStandalone: {"enumerable":true,"configurable":true,"get":function(){return false},"set":function(){return true}},
    domain: {"enumerable":true,"configurable":true,"get":function(){return "mobile.pinduoduo.com"},"set":function(){return true}},
    referrer: {"enumerable":true,"configurable":true,"get":function(){return "https://mobile.pinduoduo.com/?page_id=10002_1759817207805_2q7ofg0di7&is_back=1&bsch_is_search_mall=&bsch_show_active_page="},"set":function(){return true}},
    lastModified: {"enumerable":true,"configurable":true,"get":function(){return "10/08/2025 15:40:52"},"set":function(){return true}},
    readyState: {"enumerable":true,"configurable":true,"get":function(){return "interactive"},"set":function(){return true}},
    title: {"enumerable":true,"configurable":true,"get":function(){return "拼多多"},"set":function(){return true}},
    dir: {"enumerable":true,"configurable":true,"get":function(){return ""},"set":function(){return true}},
    designMode: {"enumerable":true,"configurable":true,"get":function(){return "off"},"set":function(){return true}},
    fgColor: {"enumerable":true,"configurable":true,"get":function(){return ""},"set":function(){return true}},
    linkColor: {"enumerable":true,"configurable":true,"get":function(){return ""},"set":function(){return true}},
    vlinkColor: {"enumerable":true,"configurable":true,"get":function(){return ""},"set":function(){return true}},
    alinkColor: {"enumerable":true,"configurable":true,"get":function(){return ""},"set":function(){return true}},
    bgColor: {"enumerable":true,"configurable":true,"get":function(){return ""},"set":function(){return true}},
    hidden: {"enumerable":true,"configurable":true,"get":function(){return false},"set":function(){return true}},
    visibilityState: {"enumerable":true,"configurable":true,"get":function(){return "visible"},"set":function(){return true}},
    wasDiscarded: {"enumerable":true,"configurable":true,"get":function(){return false},"set":function(){return true}},
    prerendering: {"enumerable":true,"configurable":true,"get":function(){return false},"set":function(){return true}},
    webkitVisibilityState: {"enumerable":true,"configurable":true,"get":function(){return "visible"},"set":function(){return true}},
    webkitHidden: {"enumerable":true,"configurable":true,"get":function(){return false},"set":function(){return true}},
    fullscreenEnabled: {"enumerable":true,"configurable":true,"get":function(){return true},"set":function(){return true}},
    fullscreen: {"enumerable":true,"configurable":true,"get":function(){return false},"set":function(){return true}},
    webkitIsFullScreen: {"enumerable":true,"configurable":true,"get":function(){return false},"set":function(){return true}},
    webkitFullscreenEnabled: {"enumerable":true,"configurable":true,"get":function(){return true},"set":function(){return true}},
    pictureInPictureEnabled: {"enumerable":true,"configurable":true,"get":function(){return true},"set":function(){return true}},
    childElementCount: {"enumerable":true,"configurable":true,"get":function(){return 1},"set":function(){return true}},
    [Symbol.toStringTag]: {value:"Document",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(Element.prototype, {
    clientHeight: {get(){ v_console_log("  [*] Element -> clientHeight[get]", 170);return 170 }},
    setAttribute: {value: v_saf(function setAttribute(){v_console_log("  [*] Element -> setAttribute[func]", [].slice.call(arguments));})},
    namespaceURI: {get(){ v_console_log("  [*] Element -> namespaceURI[get]", "http://www.w3.org/1999/xhtml");return "http://www.w3.org/1999/xhtml" }},
    tagName: {get(){ v_console_log("  [*] Element -> tagName[get]", this.v_tagName);return this.v_tagName }},
    classList: {get(){ v_console_log("  [*] Element -> classList[get]", {});return {} }},
    removeAttribute: {value: v_saf(function removeAttribute(){v_console_log("  [*] Element -> removeAttribute[func]", [].slice.call(arguments));})},
    getAttribute: {value: v_saf(function getAttribute(){v_console_log("  [*] Element -> getAttribute[func]", [].slice.call(arguments));})},
    className: {set(){ v_console_log("  [*] Element -> className[set]", [].slice.call(arguments));return {} }},
    children: {get(){ v_console_log("  [*] Element -> children[get]", {});return {} }},
    getBoundingClientRect: {value: v_saf(function getBoundingClientRect(){v_console_log("  [*] Element -> getBoundingClientRect[func]", [].slice.call(arguments));})},
    clientWidth: {get(){ v_console_log("  [*] Element -> clientWidth[get]", 748);return 748 }},
    scrollTo: {value: v_saf(function scrollTo(){v_console_log("  [*] Element -> scrollTo[func]", [].slice.call(arguments));})},
    id: {get(){ v_console_log("  [*] Element -> id[get]", "");return "" }},
    append: {value: v_saf(function append(){v_console_log("  [*] Element -> append[func]", [].slice.call(arguments));})},
    attachShadow: {value: v_saf(function attachShadow(){v_console_log("  [*] Element -> attachShadow[func]", [].slice.call(arguments));})},
    getAttributeNames: {value: v_saf(function getAttributeNames(){v_console_log("  [*] Element -> getAttributeNames[func]", [].slice.call(arguments));})},
    [Symbol.toStringTag]: {value:"Element",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(XMLHttpRequest.prototype, {
    OPENED: {"value":1,"writable":false,"enumerable":true,"configurable":false},
    HEADERS_RECEIVED: {"value":2,"writable":false,"enumerable":true,"configurable":false},
    LOADING: {"value":3,"writable":false,"enumerable":true,"configurable":false},
    DONE: {"value":4,"writable":false,"enumerable":true,"configurable":false},
    [Symbol.toStringTag]: {value:"XMLHttpRequest",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(MouseEvent.prototype, {
    fromElement: {get(){ v_console_log("  [*] MouseEvent -> fromElement[get]", {});return {} }},
    buttons: {get(){ v_console_log("  [*] MouseEvent -> buttons[get]", 0);return 0 }},
    toElement: {get(){ v_console_log("  [*] MouseEvent -> toElement[get]", {});return {} }},
    [Symbol.toStringTag]: {value:"MouseEvent",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(AnalyserNode.prototype, {
    frequencyBinCount: {get(){ v_console_log("  [*] AnalyserNode -> frequencyBinCount[get]", 1024);return 1024 }},
    getFloatFrequencyData: {value: v_saf(function getFloatFrequencyData(){v_console_log("  [*] AnalyserNode -> getFloatFrequencyData[func]", [].slice.call(arguments));})},
    fftSize: {get(){ v_console_log("  [*] AnalyserNode -> fftSize[get]", 2048);return 2048 }},
    maxDecibels: {get(){ v_console_log("  [*] AnalyserNode -> maxDecibels[get]", -30);return -30 }},
    minDecibels: {get(){ v_console_log("  [*] AnalyserNode -> minDecibels[get]", -100);return -100 }},
    smoothingTimeConstant: {get(){ v_console_log("  [*] AnalyserNode -> smoothingTimeConstant[get]", 0.8);return 0.8 }},
    [Symbol.toStringTag]: {value:"AnalyserNode",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(BiquadFilterNode.prototype, {
    gain: {get(){ v_console_log("  [*] BiquadFilterNode -> gain[get]", {});return {} }},
    frequency: {get(){ v_console_log("  [*] BiquadFilterNode -> frequency[get]", {});return {} }},
    [Symbol.toStringTag]: {value:"BiquadFilterNode",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(DynamicsCompressorNode.prototype, {
    attack: {get(){ v_console_log("  [*] DynamicsCompressorNode -> attack[get]", {});return {} }},
    knee: {get(){ v_console_log("  [*] DynamicsCompressorNode -> knee[get]", {});return {} }},
    ratio: {get(){ v_console_log("  [*] DynamicsCompressorNode -> ratio[get]", {});return {} }},
    release: {get(){ v_console_log("  [*] DynamicsCompressorNode -> release[get]", {});return {} }},
    threshold: {get(){ v_console_log("  [*] DynamicsCompressorNode -> threshold[get]", {});return {} }},
    [Symbol.toStringTag]: {value:"DynamicsCompressorNode",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(AudioScheduledSourceNode.prototype, {
    start: {value: v_saf(function start(){v_console_log("  [*] AudioScheduledSourceNode -> start[func]", [].slice.call(arguments));})},
    [Symbol.toStringTag]: {value:"AudioScheduledSourceNode",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(OfflineAudioContext.prototype, {
    startRendering: {value: v_saf(function startRendering(){v_console_log("  [*] OfflineAudioContext -> startRendering[func]", [].slice.call(arguments));})},
    oncomplete: {set(){ v_console_log("  [*] OfflineAudioContext -> oncomplete[set]", [].slice.call(arguments)); }},
    [Symbol.toStringTag]: {value:"OfflineAudioContext",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(HTMLElement.prototype, {
    onclick: {set(){ v_console_log("  [*] HTMLElement -> onclick[set]", [].slice.call(arguments)); }},
    contentEditable: {get(){ v_console_log("  [*] HTMLElement -> contentEditable[get]", "inherit");return "inherit" }},
    onerror: {get(){ v_console_log("  [*] HTMLElement -> onerror[get]", {});return {} },set(){ v_console_log("  [*] HTMLElement -> onerror[set]", [].slice.call(arguments));return {} }},
    onload: {get(){ v_console_log("  [*] HTMLElement -> onload[get]", {});return {} },set(){ v_console_log("  [*] HTMLElement -> onload[set]", [].slice.call(arguments));return {} }},
    dataset: {get(){ v_console_log("  [*] HTMLElement -> dataset[get]", {});return {} }},
    offsetLeft: {get(){ v_console_log("  [*] HTMLElement -> offsetLeft[get]", 0);return 0 }},
    offsetWidth: {get(){ v_console_log("  [*] HTMLElement -> offsetWidth[get]", 193);return 193 }},
    offsetTop: {get(){ v_console_log("  [*] HTMLElement -> offsetTop[get]", 0);return 0 }},
    offsetHeight: {get(){ v_console_log("  [*] HTMLElement -> offsetHeight[get]", 188);return 188 }},
    offsetParent: {get(){ v_console_log("  [*] HTMLElement -> offsetParent[get]", {});return {} }},
    innerText: {get(){ v_console_log("  [*] HTMLElement -> innerText[get]", "@media(device-width:4000px){body{--device-width:4000;}}@media(device-width:4001px){body{--device-width:4001;}}@media(device-width:4002px){body{--device-width:4002;}}@media(device-width:4003px){body{--device-width:4003;}}@media(device-width:4004px){body{--device-width:4004;}}@media(device-width:4005px){body{--device-width:4005;}}@media(device-width:4006px){body{--device-width:4006;}}@media(device-width:4007px){body{--device-width:4007;}}@media(device-width:4008px){body{--device-width:4008;}}@media(device-width:4009px){body{--device-width:4009;}}@media(device-width:4010px){body{--device-width:4010;}}@media(device-width:4011px){body{--device-width:4011;}}@media(device-width:4012px){body{--device-width:4012;}}@media(device-width:4013px){body{--device-width:4013;}}@media(device-width:4014px){body{--device-width:4014;}}@media(device-width:4015px){body{--device-width:4015;}}@media(device-width:4016px){body{--device-width:4016;}}@media(device-width:4017px){body{--device-width:4017;}}@media(device-width:4018px){body{--device-width:4018;}}@media(device-width:4019px){body{--device-width:4019;}}@media(device-width:4020px){body{--device-width:4020;}}@media(device-width:4021px){body{--device-width:4021;}}@media(device-width:4022px){body{--device-width:4022;}}@media(device-width:4023px){body{--device-width:4023;}}@media(device-width:4024px){body{--device-width:4024;}}@media(device-width:4025px){body{--device-width:4025;}}@media(device-width:4026px){body{--device-width:4026;}}@media(device-width:4027px){body{--device-width:4027;}}@media(device-width:4028px){body{--device-width:4028;}}@media(device-width:4029px){body{--device-width:4029;}}@media(device-width:4030px){body{--device-width:4030;}}@media(device-width:4031px){body{--device-width:4031;}}@media(device-width:4032px){body{--device-width:4032;}}@media(device-width:4033px){body{--device-width:4033;}}@media(device-width:4034px){body{--device-width:4034;}}@media(device-width:4035px){body{--device-width:4035;}}@media(device-width:4036px){body{--device-width:4036;}}@media(device-width:4037px){body{--device-width:4037;}}@media(device-width:4038px){body{--device-width:4038;}}@media(device-width:4039px){body{--device-width:4039;}}@media(device-width:4040px){body{--device-width:4040;}}@media(device-width:4041px){body{--device-width:4041;}}@media(device-width:4042px){body{--device-width:4042;}}@media(device-width:4043px){body{--device-width:4043;}}@media(device-width:4044px){body{--device-width:4044;}}@media(device-width:4045px){body{--device-width:4045;}}@media(device-width:4046px){body{--device-width:4046;}}@media(device-width:4047px){body{--device-width:4047;}}@media(device-width:4048px){body{--device-width:4048;}}@media(device-width:4049px){body{--device-width:4049;}}@media(device-width:4050px){body{--device-width:4050;}}@media(device-width:4051px){body{--device-width:4051;}}@media(device-width:4052px){body{--device-width:4052;}}@media(device-width:4053px){body{--device-width:4053;}}@media(device-width:4054px){body{--device-width:4054;}}@media(device-width:4055px){body{--device-width:4055;}}@media(device-width:4056px){body{--device-width:4056;}}@media(device-width:4057px){body{--device-width:4057;}}@media(device-width:4058px){body{--device-width:4058;}}@media(device-width:4059px){body{--device-width:4059;}}@media(device-width:4060px){body{--device-width:4060;}}@media(device-width:4061px){body{--device-width:4061;}}@media(device-width:4062px){body{--device-width:4062;}}@media(device-width:4063px){body{--device-width:4063;}}@media(device-width:4064px){body{--device-width:4064;}}@media(device-width:4065px){body{--device-width:4065;}}@media(device-width:4066px){body{--device-width:4066;}}@media(device-width:4067px){body{--device-width:4067;}}@media(device-width:4068px){body{--device-width:4068;}}@media(device-width:4069px){body{--device-width:4069;}}@media(device-width:4070px){body{--device-width:4070;}}@media(device-width:4071px){body{--device-width:4071;}}@media(device-width:4072px){body{--device-width:4072;}}@media(device-width:4073px){body{--device-width:4073;}}@media(device-width:4074px){body{--device-width:4074;}}@media(device-width:4075px){body{--device-width:4075;}}@media(device-width:4076px){body{--device-width:4076;}}@media(device-width:4077px){body{--device-width:4077;}}@media(device-width:4078px){body{--device-width:4078;}}@media(device-width:4079px){body{--device-width:4079;}}@media(device-width:4080px){body{--device-width:4080;}}@media(device-width:4081px){body{--device-width:4081;}}@media(device-width:4082px){body{--device-width:4082;}}@media(device-width:4083px){body{--device-width:4083;}}@media(device-width:4084px){body{--device-width:4084;}}@media(device-width:4085px){body{--device-width:4085;}}@media(device-width:4086px){body{--device-width:4086;}}@media(device-width:4087px){body{--device-width:4087;}}@media(device-width:4088px){body{--device-width:4088;}}@media(device-width:4089px){body{--device-width:4089;}}@media(device-width:4090px){body{--device-width:4090;}}@media(device-width:4091px){body{--device-width:4091;}}@media(device-width:4092px){body{--device-width:4092;}}@media(device-width:4093px){body{--device-width:4093;}}@media(device-width:4094px){body{--device-width:4094;}}@media(device-width:4095px){body{--device-width:4095;}}@media(device-width:4096px){body{--device-width:4096;}}@media(device-width:4097px){body{--device-width:4097;}}@media(device-width:4098px){body{--device-width:4098;}}@media(device-width:4099px){body{--device-width:4099;}}@media(device-width:4100px){body{--device-width:4100;}}@media(device-width:4101px){body{--device-width:4101;}}@media(device-width:4102px){body{--device-width:4102;}}@media(device-width:4103px){body{--device-width:4103;}}@media(device-width:4104px){body{--device-width:4104;}}@media(device-width:4105px){body{--device-width:4105;}}@media(device-width:4106px){body{--device-width:4106;}}@media(device-width:4107px){body{--device-width:4107;}}@media(device-width:4108px){body{--device-width:4108;}}@media(device-width:4109px){body{--device-width:4109;}}@media(device-width:4110px){body{--device-width:4110;}}@media(device-width:4111px){body{--device-width:4111;}}@media(device-width:4112px){body{--device-width:4112;}}@media(device-width:4113px){body{--device-width:4113;}}@media(device-width:4114px){body{--device-width:4114;}}@media(device-width:4115px){body{--device-width:4115;}}@media(device-width:4116px){body{--device-width:4116;}}@media(device-width:4117px){body{--device-width:4117;}}@media(device-width:4118px){body{--device-width:4118;}}@media(device-width:4119px){body{--device-width:4119;}}@media(device-width:4120px){body{--device-width:4120;}}@media(device-width:4121px){body{--device-width:4121;}}@media(device-width:4122px){body{--device-width:4122;}}@media(device-width:4123px){body{--device-width:4123;}}@media(device-width:4124px){body{--device-width:4124;}}@media(device-width:4125px){body{--device-width:4125;}}@media(device-width:4126px){body{--device-width:4126;}}@media(device-width:4127px){body{--device-width:4127;}}@media(device-width:4128px){body{--device-width:4128;}}@media(device-width:4129px){body{--device-width:4129;}}@media(device-width:4130px){body{--device-width:4130;}}@media(device-width:4131px){body{--device-width:4131;}}@media(device-width:4132px){body{--device-width:4132;}}@media(device-width:4133px){body{--device-width:4133;}}@media(device-width:4134px){body{--device-width:4134;}}@media(device-width:4135px){body{--device-width:4135;}}@media(device-width:4136px){body{--device-width:4136;}}@media(device-width:4137px){body{--device-width:4137;}}@media(device-width:4138px){body{--device-width:4138;}}@media(device-width:4139px){body{--device-width:4139;}}@media(device-width:4140px){body{--device-width:4140;}}@media(device-width:4141px){body{--device-width:4141;}}@media(device-width:4142px){body{--device-width:4142;}}@media(device-width:4143px){body{--device-width:4143;}}@media(device-width:4144px){body{--device-width:4144;}}@media(device-width:4145px){body{--device-width:4145;}}@media(device-width:4146px){body{--device-width:4146;}}@media(device-width:4147px){body{--device-width:4147;}}@media(device-width:4148px){body{--device-width:4148;}}@media(device-width:4149px){body{--device-width:4149;}}@media(device-width:4150px){body{--device-width:4150;}}@media(device-width:4151px){body{--device-width:4151;}}@media(device-width:4152px){body{--device-width:4152;}}@media(device-width:4153px){body{--device-width:4153;}}@media(device-width:4154px){body{--device-width:4154;}}@media(device-width:4155px){body{--device-width:4155;}}@media(device-width:4156px){body{--device-width:4156;}}@media(device-width:4157px){body{--device-width:4157;}}@media(device-width:4158px){body{--device-width:4158;}}@media(device-width:4159px){body{--device-width:4159;}}@media(device-width:4160px){body{--device-width:4160;}}@media(device-width:4161px){body{--device-width:4161;}}@media(device-width:4162px){body{--device-width:4162;}}@media(device-width:4163px){body{--device-width:4163;}}@media(device-width:4164px){body{--device-width:4164;}}@media(device-width:4165px){body{--device-width:4165;}}@media(device-width:4166px){body{--device-width:4166;}}@media(device-width:4167px){body{--device-width:4167;}}@media(device-width:4168px){body{--device-width:4168;}}@media(device-width:4169px){body{--device-width:4169;}}@media(device-width:4170px){body{--device-width:4170;}}@media(device-width:4171px){body{--device-width:4171;}}@media(device-width:4172px){body{--device-width:4172;}}@media(device-width:4173px){body{--device-width:4173;}}@media(device-width:4174px){body{--device-width:4174;}}@media(device-width:4175px){body{--device-width:4175;}}@media(device-width:4176px){body{--device-width:4176;}}@media(device-width:4177px){body{--device-width:4177;}}@media(device-width:4178px){body{--device-width:4178;}}@media(device-width:4179px){body{--device-width:4179;}}@media(device-width:4180px){body{--device-width:4180;}}@media(device-width:4181px){body{--device-width:4181;}}@media(device-width:4182px){body{--device-width:4182;}}@media(device-width:4183px){body{--device-width:4183;}}@media(device-width:4184px){body{--device-width:4184;}}@media(device-width:4185px){body{--device-width:4185;}}@media(device-width:4186px){body{--device-width:4186;}}@media(device-width:4187px){body{--device-width:4187;}}@media(device-width:4188px){body{--device-width:4188;}}@media(device-width:4189px){body{--device-width:4189;}}@media(device-width:4190px){body{--device-width:4190;}}@media(device-width:4191px){body{--device-width:4191;}}@media(device-width:4192px){body{--device-width:4192;}}@media(device-width:4193px){body{--device-width:4193;}}@media(device-width:4194px){body{--device-width:4194;}}@media(device-width:4195px){body{--device-width:4195;}}@media(device-width:4196px){body{--device-width:4196;}}@media(device-width:4197px){body{--device-width:4197;}}@media(device-width:4198px){body{--device-width:4198;}}@media(device-width:4199px){body{--device-width:4199;}}@media(device-width:4200px){body{--device-width:4200;}}@media(device-width:4201px){body{--device-width:4201;}}@media(device-width:4202px){body{--device-width:4202;}}@media(device-width:4203px){body{--device-width:4203;}}@media(device-width:4204px){body{--device-width:4204;}}@media(device-width:4205px){body{--device-width:4205;}}@media(device-width:4206px){body{--device-width:4206;}}@media(device-width:4207px){body{--device-width:4207;}}@media(device-width:4208px){body{--device-width:4208;}}@media(device-width:4209px){body{--device-width:4209;}}@media(device-width:4210px){body{--device-width:4210;}}@media(device-width:4211px){body{--device-width:4211;}}@media(device-width:4212px){body{--device-width:4212;}}@media(device-width:4213px){body{--device-width:4213;}}@media(device-width:4214px){body{--device-width:4214;}}@media(device-width:4215px){body{--device-width:4215;}}@media(device-width:4216px){body{--device-width:4216;}}@media(device-width:4217px){body{--device-width:4217;}}@media(device-width:4218px){body{--device-width:4218;}}@media(device-width:4219px){body{--device-width:4219;}}@media(device-width:4220px){body{--device-width:4220;}}@media(device-width:4221px){body{--device-width:4221;}}@media(device-width:4222px){body{--device-width:4222;}}@media(device-width:4223px){body{--device-width:4223;}}@media(device-width:4224px){body{--device-width:4224;}}@media(device-width:4225px){body{--device-width:4225;}}@media(device-width:4226px){body{--device-width:4226;}}@media(device-width:4227px){body{--device-width:4227;}}@media(device-width:4228px){body{--device-width:4228;}}@media(device-width:4229px){body{--device-width:4229;}}@media(device-width:4230px){body{--device-width:4230;}}@media(device-width:4231px){body{--device-width:4231;}}@media(device-width:4232px){body{--device-width:4232;}}@media(device-width:4233px){body{--device-width:4233;}}@media(device-width:4234px){body{--device-width:4234;}}@media(device-width:4235px){body{--device-width:4235;}}@media(device-width:4236px){body{--device-width:4236;}}@media(device-width:4237px){body{--device-width:4237;}}@media(device-width:4238px){body{--device-width:4238;}}@media(device-width:4239px){body{--device-width:4239;}}@media(device-width:4240px){body{--device-width:4240;}}@media(device-width:4241px){body{--device-width:4241;}}@media(device-width:4242px){body{--device-width:4242;}}@media(device-width:4243px){body{--device-width:4243;}}@media(device-width:4244px){body{--device-width:4244;}}@media(device-width:4245px){body{--device-width:4245;}}@media(device-width:4246px){body{--device-width:4246;}}@media(device-width:4247px){body{--device-width:4247;}}@media(device-width:4248px){body{--device-width:4248;}}@media(device-width:4249px){body{--device-width:4249;}}@media(device-width:4250px){body{--device-width:4250;}}@media(device-width:4251px){body{--device-width:4251;}}@media(device-width:4252px){body{--device-width:4252;}}@media(device-width:4253px){body{--device-width:4253;}}@media(device-width:4254px){body{--device-width:4254;}}@media(device-width:4255px){body{--device-width:4255;}}@media(device-width:4256px){body{--device-width:4256;}}@media(device-width:4257px){body{--device-width:4257;}}@media(device-width:4258px){body{--device-width:4258;}}@media(device-width:4259px){body{--device-width:4259;}}@media(device-width:4260px){body{--device-width:4260;}}@media(device-width:4261px){body{--device-width:4261;}}@media(device-width:4262px){body{--device-width:4262;}}@media(device-width:4263px){body{--device-width:4263;}}@media(device-width:4264px){body{--device-width:4264;}}@media(device-width:4265px){body{--device-width:4265;}}@media(device-width:4266px){body{--device-width:4266;}}@media(device-width:4267px){body{--device-width:4267;}}@media(device-width:4268px){body{--device-width:4268;}}@media(device-width:4269px){body{--device-width:4269;}}@media(device-width:4270px){body{--device-width:4270;}}@media(device-width:4271px){body{--device-width:4271;}}@media(device-width:4272px){body{--device-width:4272;}}@media(device-width:4273px){body{--device-width:4273;}}@media(device-width:4274px){body{--device-width:4274;}}@media(device-width:4275px){body{--device-width:4275;}}@media(device-width:4276px){body{--device-width:4276;}}@media(device-width:4277px){body{--device-width:4277;}}@media(device-width:4278px){body{--device-width:4278;}}@media(device-width:4279px){body{--device-width:4279;}}@media(device-width:4280px){body{--device-width:4280;}}@media(device-width:4281px){body{--device-width:4281;}}@media(device-width:4282px){body{--device-width:4282;}}@media(device-width:4283px){body{--device-width:4283;}}@media(device-width:4284px){body{--device-width:4284;}}@media(device-width:4285px){body{--device-width:4285;}}@media(device-width:4286px){body{--device-width:4286;}}@media(device-width:4287px){body{--device-width:4287;}}@media(device-width:4288px){body{--device-width:4288;}}@media(device-width:4289px){body{--device-width:4289;}}@media(device-width:4290px){body{--device-width:4290;}}@media(device-width:4291px){body{--device-width:4291;}}@media(device-width:4292px){body{--device-width:4292;}}@media(device-width:4293px){body{--device-width:4293;}}@media(device-width:4294px){body{--device-width:4294;}}@media(device-width:4295px){body{--device-width:4295;}}@media(device-width:4296px){body{--device-width:4296;}}@media(device-width:4297px){body{--device-width:4297;}}@media(device-width:4298px){body{--device-width:4298;}}@media(device-width:4299px){body{--device-width:4299;}}@media(device-width:4300px){body{--device-width:4300;}}@media(device-width:4301px){body{--device-width:4301;}}@media(device-width:4302px){body{--device-width:4302;}}@media(device-width:4303px){body{--device-width:4303;}}@media(device-width:4304px){body{--device-width:4304;}}@media(device-width:4305px){body{--device-width:4305;}}@media(device-width:4306px){body{--device-width:4306;}}@media(device-width:4307px){body{--device-width:4307;}}@media(device-width:4308px){body{--device-width:4308;}}@media(device-width:4309px){body{--device-width:4309;}}@media(device-width:4310px){body{--device-width:4310;}}@media(device-width:4311px){body{--device-width:4311;}}@media(device-width:4312px){body{--device-width:4312;}}@media(device-width:4313px){body{--device-width:4313;}}@media(device-width:4314px){body{--device-width:4314;}}@media(device-width:4315px){body{--device-width:4315;}}@media(device-width:4316px){body{--device-width:4316;}}@media(device-width:4317px){body{--device-width:4317;}}@media(device-width:4318px){body{--device-width:4318;}}@media(device-width:4319px){body{--device-width:4319;}}@media(device-width:4320px){body{--device-width:4320;}}@media(device-width:4321px){body{--device-width:4321;}}@media(device-width:4322px){body{--device-width:4322;}}@media(device-width:4323px){body{--device-width:4323;}}@media(device-width:4324px){body{--device-width:4324;}}@media(device-width:4325px){body{--device-width:4325;}}@media(device-width:4326px){body{--device-width:4326;}}@media(device-width:4327px){body{--device-width:4327;}}@media(device-width:4328px){body{--device-width:4328;}}@media(device-width:4329px){body{--device-width:4329;}}@media(device-width:4330px){body{--device-width:4330;}}@media(device-width:4331px){body{--device-width:4331;}}@media(device-width:4332px){body{--device-width:4332;}}@media(device-width:4333px){body{--device-width:4333;}}@media(device-width:4334px){body{--device-width:4334;}}@media(device-width:4335px){body{--device-width:4335;}}@media(device-width:4336px){body{--device-width:4336;}}@media(device-width:4337px){body{--device-width:4337;}}@media(device-width:4338px){body{--device-width:4338;}}@media(device-width:4339px){body{--device-width:4339;}}@media(device-width:4340px){body{--device-width:4340;}}@media(device-width:4341px){body{--device-width:4341;}}@media(device-width:4342px){body{--device-width:4342;}}@media(device-width:4343px){body{--device-width:4343;}}@media(device-width:4344px){body{--device-width:4344;}}@media(device-width:4345px){body{--device-width:4345;}}@media(device-width:4346px){body{--device-width:4346;}}@media(device-width:4347px){body{--device-width:4347;}}@media(device-width:4348px){body{--device-width:4348;}}@media(device-width:4349px){body{--device-width:4349;}}@media(device-width:4350px){body{--device-width:4350;}}@media(device-width:4351px){body{--device-width:4351;}}@media(device-width:4352px){body{--device-width:4352;}}@media(device-width:4353px){body{--device-width:4353;}}@media(device-width:4354px){body{--device-width:4354;}}@media(device-width:4355px){body{--device-width:4355;}}@media(device-width:4356px){body{--device-width:4356;}}@media(device-width:4357px){body{--device-width:4357;}}@media(device-width:4358px){body{--device-width:4358;}}@media(device-width:4359px){body{--device-width:4359;}}@media(device-width:4360px){body{--device-width:4360;}}@media(device-width:4361px){body{--device-width:4361;}}@media(device-width:4362px){body{--device-width:4362;}}@media(device-width:4363px){body{--device-width:4363;}}@media(device-width:4364px){body{--device-width:4364;}}@media(device-width:4365px){body{--device-width:4365;}}@media(device-width:4366px){body{--device-width:4366;}}@media(device-width:4367px){body{--device-width:4367;}}@media(device-width:4368px){body{--device-width:4368;}}@media(device-width:4369px){body{--device-width:4369;}}@media(device-width:4370px){body{--device-width:4370;}}@media(device-width:4371px){body{--device-width:4371;}}@media(device-width:4372px){body{--device-width:4372;}}@media(device-width:4373px){body{--device-width:4373;}}@media(device-width:4374px){body{--device-width:4374;}}@media(device-width:4375px){body{--device-width:4375;}}@media(device-width:4376px){body{--device-width:4376;}}@media(device-width:4377px){body{--device-width:4377;}}@media(device-width:4378px){body{--device-width:4378;}}@media(device-width:4379px){body{--device-width:4379;}}@media(device-width:4380px){body{--device-width:4380;}}@media(device-width:4381px){body{--device-width:4381;}}@media(device-width:4382px){body{--device-width:4382;}}@media(device-width:4383px){body{--device-width:4383;}}@media(device-width:4384px){body{--device-width:4384;}}@media(device-width:4385px){body{--device-width:4385;}}@media(device-width:4386px){body{--device-width:4386;}}@media(device-width:4387px){body{--device-width:4387;}}@media(device-width:4388px){body{--device-width:4388;}}@media(device-width:4389px){body{--device-width:4389;}}@media(device-width:4390px){body{--device-width:4390;}}@media(device-width:4391px){body{--device-width:4391;}}@media(device-width:4392px){body{--device-width:4392;}}@media(device-width:4393px){body{--device-width:4393;}}@media(device-width:4394px){body{--device-width:4394;}}@media(device-width:4395px){body{--device-width:4395;}}@media(device-width:4396px){body{--device-width:4396;}}@media(device-width:4397px){body{--device-width:4397;}}@media(device-width:4398px){body{--device-width:4398;}}@media(device-width:4399px){body{--device-width:4399;}}@media(device-width:4400px){body{--device-width:4400;}}@media(device-width:4401px){body{--device-width:4401;}}@media(device-width:4402px){body{--device-width:4402;}}@media(device-width:4403px){body{--device-width:4403;}}@media(device-width:4404px){body{--device-width:4404;}}@media(device-width:4405px){body{--device-width:4405;}}@media(device-width:4406px){body{--device-width:4406;}}@media(device-width:4407px){body{--device-width:4407;}}@media(device-width:4408px){body{--device-width:4408;}}@media(device-width:4409px){body{--device-width:4409;}}@media(device-width:4410px){body{--device-width:4410;}}@media(device-width:4411px){body{--device-width:4411;}}@media(device-width:4412px){body{--device-width:4412;}}@media(device-width:4413px){body{--device-width:4413;}}@media(device-width:4414px){body{--device-width:4414;}}@media(device-width:4415px){body{--device-width:4415;}}@media(device-width:4416px){body{--device-width:4416;}}@media(device-width:4417px){body{--device-width:4417;}}@media(device-width:4418px){body{--device-width:4418;}}@media(device-width:4419px){body{--device-width:4419;}}@media(device-width:4420px){body{--device-width:4420;}}@media(device-width:4421px){body{--device-width:4421;}}@media(device-width:4422px){body{--device-width:4422;}}@media(device-width:4423px){body{--device-width:4423;}}@media(device-width:4424px){body{--device-width:4424;}}@media(device-width:4425px){body{--device-width:4425;}}@media(device-width:4426px){body{--device-width:4426;}}@media(device-width:4427px){body{--device-width:4427;}}@media(device-width:4428px){body{--device-width:4428;}}@media(device-width:4429px){body{--device-width:4429;}}@media(device-width:4430px){body{--device-width:4430;}}@media(device-width:4431px){body{--device-width:4431;}}@media(device-width:4432px){body{--device-width:4432;}}@media(device-width:4433px){body{--device-width:4433;}}@media(device-width:4434px){body{--device-width:4434;}}@media(device-width:4435px){body{--device-width:4435;}}@media(device-width:4436px){body{--device-width:4436;}}@media(device-width:4437px){body{--device-width:4437;}}@media(device-width:4438px){body{--device-width:4438;}}@media(device-width:4439px){body{--device-width:4439;}}@media(device-width:4440px){body{--device-width:4440;}}@media(device-width:4441px){body{--device-width:4441;}}@media(device-width:4442px){body{--device-width:4442;}}@media(device-width:4443px){body{--device-width:4443;}}@media(device-width:4444px){body{--device-width:4444;}}@media(device-width:4445px){body{--device-width:4445;}}@media(device-width:4446px){body{--device-width:4446;}}@media(device-width:4447px){body{--device-width:4447;}}@media(device-width:4448px){body{--device-width:4448;}}@media(device-width:4449px){body{--device-width:4449;}}@media(device-width:4450px){body{--device-width:4450;}}@media(device-width:4451px){body{--device-width:4451;}}@media(device-width:4452px){body{--device-width:4452;}}@media(device-width:4453px){body{--device-width:4453;}}@media(device-width:4454px){body{--device-width:4454;}}@media(device-width:4455px){body{--device-width:4455;}}@media(device-width:4456px){body{--device-width:4456;}}@media(device-width:4457px){body{--device-width:4457;}}@media(device-width:4458px){body{--device-width:4458;}}@media(device-width:4459px){body{--device-width:4459;}}@media(device-width:4460px){body{--device-width:4460;}}@media(device-width:4461px){body{--device-width:4461;}}@media(device-width:4462px){body{--device-width:4462;}}@media(device-width:4463px){body{--device-width:4463;}}@media(device-width:4464px){body{--device-width:4464;}}@media(device-width:4465px){body{--device-width:4465;}}@media(device-width:4466px){body{--device-width:4466;}}@media(device-width:4467px){body{--device-width:4467;}}@media(device-width:4468px){body{--device-width:4468;}}@media(device-width:4469px){body{--device-width:4469;}}@media(device-width:4470px){body{--device-width:4470;}}@media(device-width:4471px){body{--device-width:4471;}}@media(device-width:4472px){body{--device-width:4472;}}@media(device-width:4473px){body{--device-width:4473;}}@media(device-width:4474px){body{--device-width:4474;}}@media(device-width:4475px){body{--device-width:4475;}}@media(device-width:4476px){body{--device-width:4476;}}@media(device-width:4477px){body{--device-width:4477;}}@media(device-width:4478px){body{--device-width:4478;}}@media(device-width:4479px){body{--device-width:4479;}}@media(device-width:4480px){body{--device-width:4480;}}@media(device-width:4481px){body{--device-width:4481;}}@media(device-width:4482px){body{--device-width:4482;}}@media(device-width:4483px){body{--device-width:4483;}}@media(device-width:4484px){body{--device-width:4484;}}@media(device-width:4485px){body{--device-width:4485;}}@media(device-width:4486px){body{--device-width:4486;}}@media(device-width:4487px){body{--device-width:4487;}}@media(device-width:4488px){body{--device-width:4488;}}@media(device-width:4489px){body{--device-width:4489;}}@media(device-width:4490px){body{--device-width:4490;}}@media(device-width:4491px){body{--device-width:4491;}}@media(device-width:4492px){body{--device-width:4492;}}@media(device-width:4493px){body{--device-width:4493;}}@media(device-width:4494px){body{--device-width:4494;}}@media(device-width:4495px){body{--device-width:4495;}}@media(device-width:4496px){body{--device-width:4496;}}@media(device-width:4497px){body{--device-width:4497;}}@media(device-width:4498px){body{--device-width:4498;}}@media(device-width:4499px){body{--device-width:4499;}}@media(device-width:4500px){body{--device-width:4500;}}@media(device-width:4501px){body{--device-width:4501;}}@media(device-width:4502px){body{--device-width:4502;}}@media(device-width:4503px){body{--device-width:4503;}}@media(device-width:4504px){body{--device-width:4504;}}@media(device-width:4505px){body{--device-width:4505;}}@media(device-width:4506px){body{--device-width:4506;}}@media(device-width:4507px){body{--device-width:4507;}}@media(device-width:4508px){body{--device-width:4508;}}@media(device-width:4509px){body{--device-width:4509;}}@media(device-width:4510px){body{--device-width:4510;}}@media(device-width:4511px){body{--device-width:4511;}}@media(device-width:4512px){body{--device-width:4512;}}@media(device-width:4513px){body{--device-width:4513;}}@media(device-width:4514px){body{--device-width:4514;}}@media(device-width:4515px){body{--device-width:4515;}}@media(device-width:4516px){body{--device-width:4516;}}@media(device-width:4517px){body{--device-width:4517;}}@media(device-width:4518px){body{--device-width:4518;}}@media(device-width:4519px){body{--device-width:4519;}}@media(device-width:4520px){body{--device-width:4520;}}@media(device-width:4521px){body{--device-width:4521;}}@media(device-width:4522px){body{--device-width:4522;}}@media(device-width:4523px){body{--device-width:4523;}}@media(device-width:4524px){body{--device-width:4524;}}@media(device-width:4525px){body{--device-width:4525;}}@media(device-width:4526px){body{--device-width:4526;}}@media(device-width:4527px){body{--device-width:4527;}}@media(device-width:4528px){body{--device-width:4528;}}@media(device-width:4529px){body{--device-width:4529;}}@media(device-width:4530px){body{--device-width:4530;}}@media(device-width:4531px){body{--device-width:4531;}}@media(device-width:4532px){body{--device-width:4532;}}@media(device-width:4533px){body{--device-width:4533;}}@media(device-width:4534px){body{--device-width:4534;}}@media(device-width:4535px){body{--device-width:4535;}}@media(device-width:4536px){body{--device-width:4536;}}@media(device-width:4537px){body{--device-width:4537;}}@media(device-width:4538px){body{--device-width:4538;}}@media(device-width:4539px){body{--device-width:4539;}}@media(device-width:4540px){body{--device-width:4540;}}@media(device-width:4541px){body{--device-width:4541;}}@media(device-width:4542px){body{--device-width:4542;}}@media(device-width:4543px){body{--device-width:4543;}}@media(device-width:4544px){body{--device-width:4544;}}@media(device-width:4545px){body{--device-width:4545;}}@media(device-width:4546px){body{--device-width:4546;}}@media(device-width:4547px){body{--device-width:4547;}}@media(device-width:4548px){body{--device-width:4548;}}@media(device-width:4549px){body{--device-width:4549;}}@media(device-width:4550px){body{--device-width:4550;}}@media(device-width:4551px){body{--device-width:4551;}}@media(device-width:4552px){body{--device-width:4552;}}@media(device-width:4553px){body{--device-width:4553;}}@media(device-width:4554px){body{--device-width:4554;}}@media(device-width:4555px){body{--device-width:4555;}}@media(device-width:4556px){body{--device-width:4556;}}@media(device-width:4557px){body{--device-width:4557;}}@media(device-width:4558px){body{--device-width:4558;}}@media(device-width:4559px){body{--device-width:4559;}}@media(device-width:4560px){body{--device-width:4560;}}@media(device-width:4561px){body{--device-width:4561;}}@media(device-width:4562px){body{--device-width:4562;}}@media(device-width:4563px){body{--device-width:4563;}}@media(device-width:4564px){body{--device-width:4564;}}@media(device-width:4565px){body{--device-width:4565;}}@media(device-width:4566px){body{--device-width:4566;}}@media(device-width:4567px){body{--device-width:4567;}}@media(device-width:4568px){body{--device-width:4568;}}@media(device-width:4569px){body{--device-width:4569;}}@media(device-width:4570px){body{--device-width:4570;}}@media(device-width:4571px){body{--device-width:4571;}}@media(device-width:4572px){body{--device-width:4572;}}@media(device-width:4573px){body{--device-width:4573;}}@media(device-width:4574px){body{--device-width:4574;}}@media(device-width:4575px){body{--device-width:4575;}}@media(device-width:4576px){body{--device-width:4576;}}@media(device-width:4577px){body{--device-width:4577;}}@media(device-width:4578px){body{--device-width:4578;}}@media(device-width:4579px){body{--device-width:4579;}}@media(device-width:4580px){body{--device-width:4580;}}@media(device-width:4581px){body{--device-width:4581;}}@media(device-width:4582px){body{--device-width:4582;}}@media(device-width:4583px){body{--device-width:4583;}}@media(device-width:4584px){body{--device-width:4584;}}@media(device-width:4585px){body{--device-width:4585;}}@media(device-width:4586px){body{--device-width:4586;}}@media(device-width:4587px){body{--device-width:4587;}}@media(device-width:4588px){body{--device-width:4588;}}@media(device-width:4589px){body{--device-width:4589;}}@media(device-width:4590px){body{--device-width:4590;}}@media(device-width:4591px){body{--device-width:4591;}}@media(device-width:4592px){body{--device-width:4592;}}@media(device-width:4593px){body{--device-width:4593;}}@media(device-width:4594px){body{--device-width:4594;}}@media(device-width:4595px){body{--device-width:4595;}}@media(device-width:4596px){body{--device-width:4596;}}@media(device-width:4597px){body{--device-width:4597;}}@media(device-width:4598px){body{--device-width:4598;}}@media(device-width:4599px){body{--device-width:4599;}}@media(device-width:4600px){body{--device-width:4600;}}@media(device-width:4601px){body{--device-width:4601;}}@media(device-width:4602px){body{--device-width:4602;}}@media(device-width:4603px){body{--device-width:4603;}}@media(device-width:4604px){body{--device-width:4604;}}@media(device-width:4605px){body{--device-width:4605;}}@media(device-width:4606px){body{--device-width:4606;}}@media(device-width:4607px){body{--device-width:4607;}}@media(device-width:4608px){body{--device-width:4608;}}@media(device-width:4609px){body{--device-width:4609;}}@media(device-width:4610px){body{--device-width:4610;}}@media(device-width:4611px){body{--device-width:4611;}}@media(device-width:4612px){body{--device-width:4612;}}@media(device-width:4613px){body{--device-width:4613;}}@media(device-width:4614px){body{--device-width:4614;}}@media(device-width:4615px){body{--device-width:4615;}}@media(device-width:4616px){body{--device-width:4616;}}@media(device-width:4617px){body{--device-width:4617;}}@media(device-width:4618px){body{--device-width:4618;}}@media(device-width:4619px){body{--device-width:4619;}}@media(device-width:4620px){body{--device-width:4620;}}@media(device-width:4621px){body{--device-width:4621;}}@media(device-width:4622px){body{--device-width:4622;}}@media(device-width:4623px){body{--device-width:4623;}}@media(device-width:4624px){body{--device-width:4624;}}@media(device-width:4625px){body{--device-width:4625;}}@media(device-width:4626px){body{--device-width:4626;}}@media(device-width:4627px){body{--device-width:4627;}}@media(device-width:4628px){body{--device-width:4628;}}@media(device-width:4629px){body{--device-width:4629;}}@media(device-width:4630px){body{--device-width:4630;}}@media(device-width:4631px){body{--device-width:4631;}}@media(device-width:4632px){body{--device-width:4632;}}@media(device-width:4633px){body{--device-width:4633;}}@media(device-width:4634px){body{--device-width:4634;}}@media(device-width:4635px){body{--device-width:4635;}}@media(device-width:4636px){body{--device-width:4636;}}@media(device-width:4637px){body{--device-width:4637;}}@media(device-width:4638px){body{--device-width:4638;}}@media(device-width:4639px){body{--device-width:4639;}}@media(device-width:4640px){body{--device-width:4640;}}@media(device-width:4641px){body{--device-width:4641;}}@media(device-width:4642px){body{--device-width:4642;}}@media(device-width:4643px){body{--device-width:4643;}}@media(device-width:4644px){body{--device-width:4644;}}@media(device-width:4645px){body{--device-width:4645;}}@media(device-width:4646px){body{--device-width:4646;}}@media(device-width:4647px){body{--device-width:4647;}}@media(device-width:4648px){body{--device-width:4648;}}@media(device-width:4649px){body{--device-width:4649;}}@media(device-width:4650px){body{--device-width:4650;}}@media(device-width:4651px){body{--device-width:4651;}}@media(device-width:4652px){body{--device-width:4652;}}@media(device-width:4653px){body{--device-width:4653;}}@media(device-width:4654px){body{--device-width:4654;}}@media(device-width:4655px){body{--device-width:4655;}}@media(device-width:4656px){body{--device-width:4656;}}@media(device-width:4657px){body{--device-width:4657;}}@media(device-width:4658px){body{--device-width:4658;}}@media(device-width:4659px){body{--device-width:4659;}}@media(device-width:4660px){body{--device-width:4660;}}@media(device-width:4661px){body{--device-width:4661;}}@media(device-width:4662px){body{--device-width:4662;}}@media(device-width:4663px){body{--device-width:4663;}}@media(device-width:4664px){body{--device-width:4664;}}@media(device-width:4665px){body{--device-width:4665;}}@media(device-width:4666px){body{--device-width:4666;}}@media(device-width:4667px){body{--device-width:4667;}}@media(device-width:4668px){body{--device-width:4668;}}@media(device-width:4669px){body{--device-width:4669;}}@media(device-width:4670px){body{--device-width:4670;}}@media(device-width:4671px){body{--device-width:4671;}}@media(device-width:4672px){body{--device-width:4672;}}@media(device-width:4673px){body{--device-width:4673;}}@media(device-width:4674px){body{--device-width:4674;}}@media(device-width:4675px){body{--device-width:4675;}}@media(device-width:4676px){body{--device-width:4676;}}@media(device-width:4677px){body{--device-width:4677;}}@media(device-width:4678px){body{--device-width:4678;}}@media(device-width:4679px){body{--device-width:4679;}}@media(device-width:4680px){body{--device-width:4680;}}@media(device-width:4681px){body{--device-width:4681;}}@media(device-width:4682px){body{--device-width:4682;}}@media(device-width:4683px){body{--device-width:4683;}}@media(device-width:4684px){body{--device-width:4684;}}@media(device-width:4685px){body{--device-width:4685;}}@media(device-width:4686px){body{--device-width:4686;}}@media(device-width:4687px){body{--device-width:4687;}}@media(device-width:4688px){body{--device-width:4688;}}@media(device-width:4689px){body{--device-width:4689;}}@media(device-width:4690px){body{--device-width:4690;}}@media(device-width:4691px){body{--device-width:4691;}}@media(device-width:4692px){body{--device-width:4692;}}@media(device-width:4693px){body{--device-width:4693;}}@media(device-width:4694px){body{--device-width:4694;}}@media(device-width:4695px){body{--device-width:4695;}}@media(device-width:4696px){body{--device-width:4696;}}@media(device-width:4697px){body{--device-width:4697;}}@media(device-width:4698px){body{--device-width:4698;}}@media(device-width:4699px){body{--device-width:4699;}}@media(device-width:4700px){body{--device-width:4700;}}@media(device-width:4701px){body{--device-width:4701;}}@media(device-width:4702px){body{--device-width:4702;}}@media(device-width:4703px){body{--device-width:4703;}}@media(device-width:4704px){body{--device-width:4704;}}@media(device-width:4705px){body{--device-width:4705;}}@media(device-width:4706px){body{--device-width:4706;}}@media(device-width:4707px){body{--device-width:4707;}}@media(device-width:4708px){body{--device-width:4708;}}@media(device-width:4709px){body{--device-width:4709;}}@media(device-width:4710px){body{--device-width:4710;}}@media(device-width:4711px){body{--device-width:4711;}}@media(device-width:4712px){body{--device-width:4712;}}@media(device-width:4713px){body{--device-width:4713;}}@media(device-width:4714px){body{--device-width:4714;}}@media(device-width:4715px){body{--device-width:4715;}}@media(device-width:4716px){body{--device-width:4716;}}@media(device-width:4717px){body{--device-width:4717;}}@media(device-width:4718px){body{--device-width:4718;}}@media(device-width:4719px){body{--device-width:4719;}}@media(device-width:4720px){body{--device-width:4720;}}@media(device-width:4721px){body{--device-width:4721;}}@media(device-width:4722px){body{--device-width:4722;}}@media(device-width:4723px){body{--device-width:4723;}}@media(device-width:4724px){body{--device-width:4724;}}@media(device-width:4725px){body{--device-width:4725;}}@media(device-width:4726px){body{--device-width:4726;}}@media(device-width:4727px){body{--device-width:4727;}}@media(device-width:4728px){body{--device-width:4728;}}@media(device-width:4729px){body{--device-width:4729;}}@media(device-width:4730px){body{--device-width:4730;}}@media(device-width:4731px){body{--device-width:4731;}}@media(device-width:4732px){body{--device-width:4732;}}@media(device-width:4733px){body{--device-width:4733;}}@media(device-width:4734px){body{--device-width:4734;}}@media(device-width:4735px){body{--device-width:4735;}}@media(device-width:4736px){body{--device-width:4736;}}@media(device-width:4737px){body{--device-width:4737;}}@media(device-width:4738px){body{--device-width:4738;}}@media(device-width:4739px){body{--device-width:4739;}}@media(device-width:4740px){body{--device-width:4740;}}@media(device-width:4741px){body{--device-width:4741;}}@media(device-width:4742px){body{--device-width:4742;}}@media(device-width:4743px){body{--device-width:4743;}}@media(device-width:4744px){body{--device-width:4744;}}@media(device-width:4745px){body{--device-width:4745;}}@media(device-width:4746px){body{--device-width:4746;}}@media(device-width:4747px){body{--device-width:4747;}}@media(device-width:4748px){body{--device-width:4748;}}@media(device-width:4749px){body{--device-width:4749;}}@media(device-width:4750px){body{--device-width:4750;}}@media(device-width:4751px){body{--device-width:4751;}}@media(device-width:4752px){body{--device-width:4752;}}@media(device-width:4753px){body{--device-width:4753;}}@media(device-width:4754px){body{--device-width:4754;}}@media(device-width:4755px){body{--device-width:4755;}}@media(device-width:4756px){body{--device-width:4756;}}@media(device-width:4757px){body{--device-width:4757;}}@media(device-width:4758px){body{--device-width:4758;}}@media(device-width:4759px){body{--device-width:4759;}}@media(device-width:4760px){body{--device-width:4760;}}@media(device-width:4761px){body{--device-width:4761;}}@media(device-width:4762px){body{--device-width:4762;}}@media(device-width:4763px){body{--device-width:4763;}}@media(device-width:4764px){body{--device-width:4764;}}@media(device-width:4765px){body{--device-width:4765;}}@media(device-width:4766px){body{--device-width:4766;}}@media(device-width:4767px){body{--device-width:4767;}}@media(device-width:4768px){body{--device-width:4768;}}@media(device-width:4769px){body{--device-width:4769;}}@media(device-width:4770px){body{--device-width:4770;}}@media(device-width:4771px){body{--device-width:4771;}}@media(device-width:4772px){body{--device-width:4772;}}@media(device-width:4773px){body{--device-width:4773;}}@media(device-width:4774px){body{--device-width:4774;}}@media(device-width:4775px){body{--device-width:4775;}}@media(device-width:4776px){body{--device-width:4776;}}@media(device-width:4777px){body{--device-width:4777;}}@media(device-width:4778px){body{--device-width:4778;}}@media(device-width:4779px){body{--device-width:4779;}}@media(device-width:4780px){body{--device-width:4780;}}@media(device-width:4781px){body{--device-width:4781;}}@media(device-width:4782px){body{--device-width:4782;}}@media(device-width:4783px){body{--device-width:4783;}}@media(device-width:4784px){body{--device-width:4784;}}@media(device-width:4785px){body{--device-width:4785;}}@media(device-width:4786px){body{--device-width:4786;}}@media(device-width:4787px){body{--device-width:4787;}}@media(device-width:4788px){body{--device-width:4788;}}@media(device-width:4789px){body{--device-width:4789;}}@media(device-width:4790px){body{--device-width:4790;}}@media(device-width:4791px){body{--device-width:4791;}}@media(device-width:4792px){body{--device-width:4792;}}@media(device-width:4793px){body{--device-width:4793;}}@media(device-width:4794px){body{--device-width:4794;}}@media(device-width:4795px){body{--device-width:4795;}}@media(device-width:4796px){body{--device-width:4796;}}@media(device-width:4797px){body{--device-width:4797;}}@media(device-width:4798px){body{--device-width:4798;}}@media(device-width:4799px){body{--device-width:4799;}}@media(device-width:4800px){body{--device-width:4800;}}@media(device-width:4801px){body{--device-width:4801;}}@media(device-width:4802px){body{--device-width:4802;}}@media(device-width:4803px){body{--device-width:4803;}}@media(device-width:4804px){body{--device-width:4804;}}@media(device-width:4805px){body{--device-width:4805;}}@media(device-width:4806px){body{--device-width:4806;}}@media(device-width:4807px){body{--device-width:4807;}}@media(device-width:4808px){body{--device-width:4808;}}@media(device-width:4809px){body{--device-width:4809;}}@media(device-width:4810px){body{--device-width:4810;}}@media(device-width:4811px){body{--device-width:4811;}}@media(device-width:4812px){body{--device-width:4812;}}@media(device-width:4813px){body{--device-width:4813;}}@media(device-width:4814px){body{--device-width:4814;}}@media(device-width:4815px){body{--device-width:4815;}}@media(device-width:4816px){body{--device-width:4816;}}@media(device-width:4817px){body{--device-width:4817;}}@media(device-width:4818px){body{--device-width:4818;}}@media(device-width:4819px){body{--device-width:4819;}}@media(device-width:4820px){body{--device-width:4820;}}@media(device-width:4821px){body{--device-width:4821;}}@media(device-width:4822px){body{--device-width:4822;}}@media(device-width:4823px){body{--device-width:4823;}}@media(device-width:4824px){body{--device-width:4824;}}@media(device-width:4825px){body{--device-width:4825;}}@media(device-width:4826px){body{--device-width:4826;}}@media(device-width:4827px){body{--device-width:4827;}}@media(device-width:4828px){body{--device-width:4828;}}@media(device-width:4829px){body{--device-width:4829;}}@media(device-width:4830px){body{--device-width:4830;}}@media(device-width:4831px){body{--device-width:4831;}}@media(device-width:4832px){body{--device-width:4832;}}@media(device-width:4833px){body{--device-width:4833;}}@media(device-width:4834px){body{--device-width:4834;}}@media(device-width:4835px){body{--device-width:4835;}}@media(device-width:4836px){body{--device-width:4836;}}@media(device-width:4837px){body{--device-width:4837;}}@media(device-width:4838px){body{--device-width:4838;}}@media(device-width:4839px){body{--device-width:4839;}}@media(device-width:4840px){body{--device-width:4840;}}@media(device-width:4841px){body{--device-width:4841;}}@media(device-width:4842px){body{--device-width:4842;}}@media(device-width:4843px){body{--device-width:4843;}}@media(device-width:4844px){body{--device-width:4844;}}@media(device-width:4845px){body{--device-width:4845;}}@media(device-width:4846px){body{--device-width:4846;}}@media(device-width:4847px){body{--device-width:4847;}}@media(device-width:4848px){body{--device-width:4848;}}@media(device-width:4849px){body{--device-width:4849;}}@media(device-width:4850px){body{--device-width:4850;}}@media(device-width:4851px){body{--device-width:4851;}}@media(device-width:4852px){body{--device-width:4852;}}@media(device-width:4853px){body{--device-width:4853;}}@media(device-width:4854px){body{--device-width:4854;}}@media(device-width:4855px){body{--device-width:4855;}}@media(device-width:4856px){body{--device-width:4856;}}@media(device-width:4857px){body{--device-width:4857;}}@media(device-width:4858px){body{--device-width:4858;}}@media(device-width:4859px){body{--device-width:4859;}}@media(device-width:4860px){body{--device-width:4860;}}@media(device-width:4861px){body{--device-width:4861;}}@media(device-width:4862px){body{--device-width:4862;}}@media(device-width:4863px){body{--device-width:4863;}}@media(device-width:4864px){body{--device-width:4864;}}@media(device-width:4865px){body{--device-width:4865;}}@media(device-width:4866px){body{--device-width:4866;}}@media(device-width:4867px){body{--device-width:4867;}}@media(device-width:4868px){body{--device-width:4868;}}@media(device-width:4869px){body{--device-width:4869;}}@media(device-width:4870px){body{--device-width:4870;}}@media(device-width:4871px){body{--device-width:4871;}}@media(device-width:4872px){body{--device-width:4872;}}@media(device-width:4873px){body{--device-width:4873;}}@media(device-width:4874px){body{--device-width:4874;}}@media(device-width:4875px){body{--device-width:4875;}}@media(device-width:4876px){body{--device-width:4876;}}@media(device-width:4877px){body{--device-width:4877;}}@media(device-width:4878px){body{--device-width:4878;}}@media(device-width:4879px){body{--device-width:4879;}}@media(device-width:4880px){body{--device-width:4880;}}@media(device-width:4881px){body{--device-width:4881;}}@media(device-width:4882px){body{--device-width:4882;}}@media(device-width:4883px){body{--device-width:4883;}}@media(device-width:4884px){body{--device-width:4884;}}@media(device-width:4885px){body{--device-width:4885;}}@media(device-width:4886px){body{--device-width:4886;}}@media(device-width:4887px){body{--device-width:4887;}}@media(device-width:4888px){body{--device-width:4888;}}@media(device-width:4889px){body{--device-width:4889;}}@media(device-width:4890px){body{--device-width:4890;}}@media(device-width:4891px){body{--device-width:4891;}}@media(device-width:4892px){body{--device-width:4892;}}@media(device-width:4893px){body{--device-width:4893;}}@media(device-width:4894px){body{--device-width:4894;}}@media(device-width:4895px){body{--device-width:4895;}}@media(device-width:4896px){body{--device-width:4896;}}@media(device-width:4897px){body{--device-width:4897;}}@media(device-width:4898px){body{--device-width:4898;}}@media(device-width:4899px){body{--device-width:4899;}}@media(device-width:4900px){body{--device-width:4900;}}@media(device-width:4901px){body{--device-width:4901;}}@media(device-width:4902px){body{--device-width:4902;}}@media(device-width:4903px){body{--device-width:4903;}}@media(device-width:4904px){body{--device-width:4904;}}@media(device-width:4905px){body{--device-width:4905;}}@media(device-width:4906px){body{--device-width:4906;}}@media(device-width:4907px){body{--device-width:4907;}}@media(device-width:4908px){body{--device-width:4908;}}@media(device-width:4909px){body{--device-width:4909;}}@media(device-width:4910px){body{--device-width:4910;}}@media(device-width:4911px){body{--device-width:4911;}}@media(device-width:4912px){body{--device-width:4912;}}@media(device-width:4913px){body{--device-width:4913;}}@media(device-width:4914px){body{--device-width:4914;}}@media(device-width:4915px){body{--device-width:4915;}}@media(device-width:4916px){body{--device-width:4916;}}@media(device-width:4917px){body{--device-width:4917;}}@media(device-width:4918px){body{--device-width:4918;}}@media(device-width:4919px){body{--device-width:4919;}}@media(device-width:4920px){body{--device-width:4920;}}@media(device-width:4921px){body{--device-width:4921;}}@media(device-width:4922px){body{--device-width:4922;}}@media(device-width:4923px){body{--device-width:4923;}}@media(device-width:4924px){body{--device-width:4924;}}@media(device-width:4925px){body{--device-width:4925;}}@media(device-width:4926px){body{--device-width:4926;}}@media(device-width:4927px){body{--device-width:4927;}}@media(device-width:4928px){body{--device-width:4928;}}@media(device-width:4929px){body{--device-width:4929;}}@media(device-width:4930px){body{--device-width:4930;}}@media(device-width:4931px){body{--device-width:4931;}}@media(device-width:4932px){body{--device-width:4932;}}@media(device-width:4933px){body{--device-width:4933;}}@media(device-width:4934px){body{--device-width:4934;}}@media(device-width:4935px){body{--device-width:4935;}}@media(device-width:4936px){body{--device-width:4936;}}@media(device-width:4937px){body{--device-width:4937;}}@media(device-width:4938px){body{--device-width:4938;}}@media(device-width:4939px){body{--device-width:4939;}}@media(device-width:4940px){body{--device-width:4940;}}@media(device-width:4941px){body{--device-width:4941;}}@media(device-width:4942px){body{--device-width:4942;}}@media(device-width:4943px){body{--device-width:4943;}}@media(device-width:4944px){body{--device-width:4944;}}@media(device-width:4945px){body{--device-width:4945;}}@media(device-width:4946px){body{--device-width:4946;}}@media(device-width:4947px){body{--device-width:4947;}}@media(device-width:4948px){body{--device-width:4948;}}@media(device-width:4949px){body{--device-width:4949;}}@media(device-width:4950px){body{--device-width:4950;}}@media(device-width:4951px){body{--device-width:4951;}}@media(device-width:4952px){body{--device-width:4952;}}@media(device-width:4953px){body{--device-width:4953;}}@media(device-width:4954px){body{--device-width:4954;}}@media(device-width:4955px){body{--device-width:4955;}}@media(device-width:4956px){body{--device-width:4956;}}@media(device-width:4957px){body{--device-width:4957;}}@media(device-width:4958px){body{--device-width:4958;}}@media(device-width:4959px){body{--device-width:4959;}}@media(device-width:4960px){body{--device-width:4960;}}@media(device-width:4961px){body{--device-width:4961;}}@media(device-width:4962px){body{--device-width:4962;}}@media(device-width:4963px){body{--device-width:4963;}}@media(device-width:4964px){body{--device-width:4964;}}@media(device-width:4965px){body{--device-width:4965;}}@media(device-width:4966px){body{--device-width:4966;}}@media(device-width:4967px){body{--device-width:4967;}}@media(device-width:4968px){body{--device-width:4968;}}@media(device-width:4969px){body{--device-width:4969;}}@media(device-width:4970px){body{--device-width:4970;}}@media(device-width:4971px){body{--device-width:4971;}}@media(device-width:4972px){body{--device-width:4972;}}@media(device-width:4973px){body{--device-width:4973;}}@media(device-width:4974px){body{--device-width:4974;}}@media(device-width:4975px){body{--device-width:4975;}}@media(device-width:4976px){body{--device-width:4976;}}@media(device-width:4977px){body{--device-width:4977;}}@media(device-width:4978px){body{--device-width:4978;}}@media(device-width:4979px){body{--device-width:4979;}}@media(device-width:4980px){body{--device-width:4980;}}@media(device-width:4981px){body{--device-width:4981;}}@media(device-width:4982px){body{--device-width:4982;}}@media(device-width:4983px){body{--device-width:4983;}}@media(device-width:4984px){body{--device-width:4984;}}@media(device-width:4985px){body{--device-width:4985;}}@media(device-width:4986px){body{--device-width:4986;}}@media(device-width:4987px){body{--device-width:4987;}}@media(device-width:4988px){body{--device-width:4988;}}@media(device-width:4989px){body{--device-width:4989;}}@media(device-width:4990px){body{--device-width:4990;}}@media(device-width:4991px){body{--device-width:4991;}}@media(device-width:4992px){body{--device-width:4992;}}@media(device-width:4993px){body{--device-width:4993;}}@media(device-width:4994px){body{--device-width:4994;}}@media(device-width:4995px){body{--device-width:4995;}}@media(device-width:4996px){body{--device-width:4996;}}@media(device-width:4997px){body{--device-width:4997;}}@media(device-width:4998px){body{--device-width:4998;}}@media(device-width:4999px){body{--device-width:4999;}}");return "@media(device-width:4000px){body{--device-width:4000;}}@media(device-width:4001px){body{--device-width:4001;}}@media(device-width:4002px){body{--device-width:4002;}}@media(device-width:4003px){body{--device-width:4003;}}@media(device-width:4004px){body{--device-width:4004;}}@media(device-width:4005px){body{--device-width:4005;}}@media(device-width:4006px){body{--device-width:4006;}}@media(device-width:4007px){body{--device-width:4007;}}@media(device-width:4008px){body{--device-width:4008;}}@media(device-width:4009px){body{--device-width:4009;}}@media(device-width:4010px){body{--device-width:4010;}}@media(device-width:4011px){body{--device-width:4011;}}@media(device-width:4012px){body{--device-width:4012;}}@media(device-width:4013px){body{--device-width:4013;}}@media(device-width:4014px){body{--device-width:4014;}}@media(device-width:4015px){body{--device-width:4015;}}@media(device-width:4016px){body{--device-width:4016;}}@media(device-width:4017px){body{--device-width:4017;}}@media(device-width:4018px){body{--device-width:4018;}}@media(device-width:4019px){body{--device-width:4019;}}@media(device-width:4020px){body{--device-width:4020;}}@media(device-width:4021px){body{--device-width:4021;}}@media(device-width:4022px){body{--device-width:4022;}}@media(device-width:4023px){body{--device-width:4023;}}@media(device-width:4024px){body{--device-width:4024;}}@media(device-width:4025px){body{--device-width:4025;}}@media(device-width:4026px){body{--device-width:4026;}}@media(device-width:4027px){body{--device-width:4027;}}@media(device-width:4028px){body{--device-width:4028;}}@media(device-width:4029px){body{--device-width:4029;}}@media(device-width:4030px){body{--device-width:4030;}}@media(device-width:4031px){body{--device-width:4031;}}@media(device-width:4032px){body{--device-width:4032;}}@media(device-width:4033px){body{--device-width:4033;}}@media(device-width:4034px){body{--device-width:4034;}}@media(device-width:4035px){body{--device-width:4035;}}@media(device-width:4036px){body{--device-width:4036;}}@media(device-width:4037px){body{--device-width:4037;}}@media(device-width:4038px){body{--device-width:4038;}}@media(device-width:4039px){body{--device-width:4039;}}@media(device-width:4040px){body{--device-width:4040;}}@media(device-width:4041px){body{--device-width:4041;}}@media(device-width:4042px){body{--device-width:4042;}}@media(device-width:4043px){body{--device-width:4043;}}@media(device-width:4044px){body{--device-width:4044;}}@media(device-width:4045px){body{--device-width:4045;}}@media(device-width:4046px){body{--device-width:4046;}}@media(device-width:4047px){body{--device-width:4047;}}@media(device-width:4048px){body{--device-width:4048;}}@media(device-width:4049px){body{--device-width:4049;}}@media(device-width:4050px){body{--device-width:4050;}}@media(device-width:4051px){body{--device-width:4051;}}@media(device-width:4052px){body{--device-width:4052;}}@media(device-width:4053px){body{--device-width:4053;}}@media(device-width:4054px){body{--device-width:4054;}}@media(device-width:4055px){body{--device-width:4055;}}@media(device-width:4056px){body{--device-width:4056;}}@media(device-width:4057px){body{--device-width:4057;}}@media(device-width:4058px){body{--device-width:4058;}}@media(device-width:4059px){body{--device-width:4059;}}@media(device-width:4060px){body{--device-width:4060;}}@media(device-width:4061px){body{--device-width:4061;}}@media(device-width:4062px){body{--device-width:4062;}}@media(device-width:4063px){body{--device-width:4063;}}@media(device-width:4064px){body{--device-width:4064;}}@media(device-width:4065px){body{--device-width:4065;}}@media(device-width:4066px){body{--device-width:4066;}}@media(device-width:4067px){body{--device-width:4067;}}@media(device-width:4068px){body{--device-width:4068;}}@media(device-width:4069px){body{--device-width:4069;}}@media(device-width:4070px){body{--device-width:4070;}}@media(device-width:4071px){body{--device-width:4071;}}@media(device-width:4072px){body{--device-width:4072;}}@media(device-width:4073px){body{--device-width:4073;}}@media(device-width:4074px){body{--device-width:4074;}}@media(device-width:4075px){body{--device-width:4075;}}@media(device-width:4076px){body{--device-width:4076;}}@media(device-width:4077px){body{--device-width:4077;}}@media(device-width:4078px){body{--device-width:4078;}}@media(device-width:4079px){body{--device-width:4079;}}@media(device-width:4080px){body{--device-width:4080;}}@media(device-width:4081px){body{--device-width:4081;}}@media(device-width:4082px){body{--device-width:4082;}}@media(device-width:4083px){body{--device-width:4083;}}@media(device-width:4084px){body{--device-width:4084;}}@media(device-width:4085px){body{--device-width:4085;}}@media(device-width:4086px){body{--device-width:4086;}}@media(device-width:4087px){body{--device-width:4087;}}@media(device-width:4088px){body{--device-width:4088;}}@media(device-width:4089px){body{--device-width:4089;}}@media(device-width:4090px){body{--device-width:4090;}}@media(device-width:4091px){body{--device-width:4091;}}@media(device-width:4092px){body{--device-width:4092;}}@media(device-width:4093px){body{--device-width:4093;}}@media(device-width:4094px){body{--device-width:4094;}}@media(device-width:4095px){body{--device-width:4095;}}@media(device-width:4096px){body{--device-width:4096;}}@media(device-width:4097px){body{--device-width:4097;}}@media(device-width:4098px){body{--device-width:4098;}}@media(device-width:4099px){body{--device-width:4099;}}@media(device-width:4100px){body{--device-width:4100;}}@media(device-width:4101px){body{--device-width:4101;}}@media(device-width:4102px){body{--device-width:4102;}}@media(device-width:4103px){body{--device-width:4103;}}@media(device-width:4104px){body{--device-width:4104;}}@media(device-width:4105px){body{--device-width:4105;}}@media(device-width:4106px){body{--device-width:4106;}}@media(device-width:4107px){body{--device-width:4107;}}@media(device-width:4108px){body{--device-width:4108;}}@media(device-width:4109px){body{--device-width:4109;}}@media(device-width:4110px){body{--device-width:4110;}}@media(device-width:4111px){body{--device-width:4111;}}@media(device-width:4112px){body{--device-width:4112;}}@media(device-width:4113px){body{--device-width:4113;}}@media(device-width:4114px){body{--device-width:4114;}}@media(device-width:4115px){body{--device-width:4115;}}@media(device-width:4116px){body{--device-width:4116;}}@media(device-width:4117px){body{--device-width:4117;}}@media(device-width:4118px){body{--device-width:4118;}}@media(device-width:4119px){body{--device-width:4119;}}@media(device-width:4120px){body{--device-width:4120;}}@media(device-width:4121px){body{--device-width:4121;}}@media(device-width:4122px){body{--device-width:4122;}}@media(device-width:4123px){body{--device-width:4123;}}@media(device-width:4124px){body{--device-width:4124;}}@media(device-width:4125px){body{--device-width:4125;}}@media(device-width:4126px){body{--device-width:4126;}}@media(device-width:4127px){body{--device-width:4127;}}@media(device-width:4128px){body{--device-width:4128;}}@media(device-width:4129px){body{--device-width:4129;}}@media(device-width:4130px){body{--device-width:4130;}}@media(device-width:4131px){body{--device-width:4131;}}@media(device-width:4132px){body{--device-width:4132;}}@media(device-width:4133px){body{--device-width:4133;}}@media(device-width:4134px){body{--device-width:4134;}}@media(device-width:4135px){body{--device-width:4135;}}@media(device-width:4136px){body{--device-width:4136;}}@media(device-width:4137px){body{--device-width:4137;}}@media(device-width:4138px){body{--device-width:4138;}}@media(device-width:4139px){body{--device-width:4139;}}@media(device-width:4140px){body{--device-width:4140;}}@media(device-width:4141px){body{--device-width:4141;}}@media(device-width:4142px){body{--device-width:4142;}}@media(device-width:4143px){body{--device-width:4143;}}@media(device-width:4144px){body{--device-width:4144;}}@media(device-width:4145px){body{--device-width:4145;}}@media(device-width:4146px){body{--device-width:4146;}}@media(device-width:4147px){body{--device-width:4147;}}@media(device-width:4148px){body{--device-width:4148;}}@media(device-width:4149px){body{--device-width:4149;}}@media(device-width:4150px){body{--device-width:4150;}}@media(device-width:4151px){body{--device-width:4151;}}@media(device-width:4152px){body{--device-width:4152;}}@media(device-width:4153px){body{--device-width:4153;}}@media(device-width:4154px){body{--device-width:4154;}}@media(device-width:4155px){body{--device-width:4155;}}@media(device-width:4156px){body{--device-width:4156;}}@media(device-width:4157px){body{--device-width:4157;}}@media(device-width:4158px){body{--device-width:4158;}}@media(device-width:4159px){body{--device-width:4159;}}@media(device-width:4160px){body{--device-width:4160;}}@media(device-width:4161px){body{--device-width:4161;}}@media(device-width:4162px){body{--device-width:4162;}}@media(device-width:4163px){body{--device-width:4163;}}@media(device-width:4164px){body{--device-width:4164;}}@media(device-width:4165px){body{--device-width:4165;}}@media(device-width:4166px){body{--device-width:4166;}}@media(device-width:4167px){body{--device-width:4167;}}@media(device-width:4168px){body{--device-width:4168;}}@media(device-width:4169px){body{--device-width:4169;}}@media(device-width:4170px){body{--device-width:4170;}}@media(device-width:4171px){body{--device-width:4171;}}@media(device-width:4172px){body{--device-width:4172;}}@media(device-width:4173px){body{--device-width:4173;}}@media(device-width:4174px){body{--device-width:4174;}}@media(device-width:4175px){body{--device-width:4175;}}@media(device-width:4176px){body{--device-width:4176;}}@media(device-width:4177px){body{--device-width:4177;}}@media(device-width:4178px){body{--device-width:4178;}}@media(device-width:4179px){body{--device-width:4179;}}@media(device-width:4180px){body{--device-width:4180;}}@media(device-width:4181px){body{--device-width:4181;}}@media(device-width:4182px){body{--device-width:4182;}}@media(device-width:4183px){body{--device-width:4183;}}@media(device-width:4184px){body{--device-width:4184;}}@media(device-width:4185px){body{--device-width:4185;}}@media(device-width:4186px){body{--device-width:4186;}}@media(device-width:4187px){body{--device-width:4187;}}@media(device-width:4188px){body{--device-width:4188;}}@media(device-width:4189px){body{--device-width:4189;}}@media(device-width:4190px){body{--device-width:4190;}}@media(device-width:4191px){body{--device-width:4191;}}@media(device-width:4192px){body{--device-width:4192;}}@media(device-width:4193px){body{--device-width:4193;}}@media(device-width:4194px){body{--device-width:4194;}}@media(device-width:4195px){body{--device-width:4195;}}@media(device-width:4196px){body{--device-width:4196;}}@media(device-width:4197px){body{--device-width:4197;}}@media(device-width:4198px){body{--device-width:4198;}}@media(device-width:4199px){body{--device-width:4199;}}@media(device-width:4200px){body{--device-width:4200;}}@media(device-width:4201px){body{--device-width:4201;}}@media(device-width:4202px){body{--device-width:4202;}}@media(device-width:4203px){body{--device-width:4203;}}@media(device-width:4204px){body{--device-width:4204;}}@media(device-width:4205px){body{--device-width:4205;}}@media(device-width:4206px){body{--device-width:4206;}}@media(device-width:4207px){body{--device-width:4207;}}@media(device-width:4208px){body{--device-width:4208;}}@media(device-width:4209px){body{--device-width:4209;}}@media(device-width:4210px){body{--device-width:4210;}}@media(device-width:4211px){body{--device-width:4211;}}@media(device-width:4212px){body{--device-width:4212;}}@media(device-width:4213px){body{--device-width:4213;}}@media(device-width:4214px){body{--device-width:4214;}}@media(device-width:4215px){body{--device-width:4215;}}@media(device-width:4216px){body{--device-width:4216;}}@media(device-width:4217px){body{--device-width:4217;}}@media(device-width:4218px){body{--device-width:4218;}}@media(device-width:4219px){body{--device-width:4219;}}@media(device-width:4220px){body{--device-width:4220;}}@media(device-width:4221px){body{--device-width:4221;}}@media(device-width:4222px){body{--device-width:4222;}}@media(device-width:4223px){body{--device-width:4223;}}@media(device-width:4224px){body{--device-width:4224;}}@media(device-width:4225px){body{--device-width:4225;}}@media(device-width:4226px){body{--device-width:4226;}}@media(device-width:4227px){body{--device-width:4227;}}@media(device-width:4228px){body{--device-width:4228;}}@media(device-width:4229px){body{--device-width:4229;}}@media(device-width:4230px){body{--device-width:4230;}}@media(device-width:4231px){body{--device-width:4231;}}@media(device-width:4232px){body{--device-width:4232;}}@media(device-width:4233px){body{--device-width:4233;}}@media(device-width:4234px){body{--device-width:4234;}}@media(device-width:4235px){body{--device-width:4235;}}@media(device-width:4236px){body{--device-width:4236;}}@media(device-width:4237px){body{--device-width:4237;}}@media(device-width:4238px){body{--device-width:4238;}}@media(device-width:4239px){body{--device-width:4239;}}@media(device-width:4240px){body{--device-width:4240;}}@media(device-width:4241px){body{--device-width:4241;}}@media(device-width:4242px){body{--device-width:4242;}}@media(device-width:4243px){body{--device-width:4243;}}@media(device-width:4244px){body{--device-width:4244;}}@media(device-width:4245px){body{--device-width:4245;}}@media(device-width:4246px){body{--device-width:4246;}}@media(device-width:4247px){body{--device-width:4247;}}@media(device-width:4248px){body{--device-width:4248;}}@media(device-width:4249px){body{--device-width:4249;}}@media(device-width:4250px){body{--device-width:4250;}}@media(device-width:4251px){body{--device-width:4251;}}@media(device-width:4252px){body{--device-width:4252;}}@media(device-width:4253px){body{--device-width:4253;}}@media(device-width:4254px){body{--device-width:4254;}}@media(device-width:4255px){body{--device-width:4255;}}@media(device-width:4256px){body{--device-width:4256;}}@media(device-width:4257px){body{--device-width:4257;}}@media(device-width:4258px){body{--device-width:4258;}}@media(device-width:4259px){body{--device-width:4259;}}@media(device-width:4260px){body{--device-width:4260;}}@media(device-width:4261px){body{--device-width:4261;}}@media(device-width:4262px){body{--device-width:4262;}}@media(device-width:4263px){body{--device-width:4263;}}@media(device-width:4264px){body{--device-width:4264;}}@media(device-width:4265px){body{--device-width:4265;}}@media(device-width:4266px){body{--device-width:4266;}}@media(device-width:4267px){body{--device-width:4267;}}@media(device-width:4268px){body{--device-width:4268;}}@media(device-width:4269px){body{--device-width:4269;}}@media(device-width:4270px){body{--device-width:4270;}}@media(device-width:4271px){body{--device-width:4271;}}@media(device-width:4272px){body{--device-width:4272;}}@media(device-width:4273px){body{--device-width:4273;}}@media(device-width:4274px){body{--device-width:4274;}}@media(device-width:4275px){body{--device-width:4275;}}@media(device-width:4276px){body{--device-width:4276;}}@media(device-width:4277px){body{--device-width:4277;}}@media(device-width:4278px){body{--device-width:4278;}}@media(device-width:4279px){body{--device-width:4279;}}@media(device-width:4280px){body{--device-width:4280;}}@media(device-width:4281px){body{--device-width:4281;}}@media(device-width:4282px){body{--device-width:4282;}}@media(device-width:4283px){body{--device-width:4283;}}@media(device-width:4284px){body{--device-width:4284;}}@media(device-width:4285px){body{--device-width:4285;}}@media(device-width:4286px){body{--device-width:4286;}}@media(device-width:4287px){body{--device-width:4287;}}@media(device-width:4288px){body{--device-width:4288;}}@media(device-width:4289px){body{--device-width:4289;}}@media(device-width:4290px){body{--device-width:4290;}}@media(device-width:4291px){body{--device-width:4291;}}@media(device-width:4292px){body{--device-width:4292;}}@media(device-width:4293px){body{--device-width:4293;}}@media(device-width:4294px){body{--device-width:4294;}}@media(device-width:4295px){body{--device-width:4295;}}@media(device-width:4296px){body{--device-width:4296;}}@media(device-width:4297px){body{--device-width:4297;}}@media(device-width:4298px){body{--device-width:4298;}}@media(device-width:4299px){body{--device-width:4299;}}@media(device-width:4300px){body{--device-width:4300;}}@media(device-width:4301px){body{--device-width:4301;}}@media(device-width:4302px){body{--device-width:4302;}}@media(device-width:4303px){body{--device-width:4303;}}@media(device-width:4304px){body{--device-width:4304;}}@media(device-width:4305px){body{--device-width:4305;}}@media(device-width:4306px){body{--device-width:4306;}}@media(device-width:4307px){body{--device-width:4307;}}@media(device-width:4308px){body{--device-width:4308;}}@media(device-width:4309px){body{--device-width:4309;}}@media(device-width:4310px){body{--device-width:4310;}}@media(device-width:4311px){body{--device-width:4311;}}@media(device-width:4312px){body{--device-width:4312;}}@media(device-width:4313px){body{--device-width:4313;}}@media(device-width:4314px){body{--device-width:4314;}}@media(device-width:4315px){body{--device-width:4315;}}@media(device-width:4316px){body{--device-width:4316;}}@media(device-width:4317px){body{--device-width:4317;}}@media(device-width:4318px){body{--device-width:4318;}}@media(device-width:4319px){body{--device-width:4319;}}@media(device-width:4320px){body{--device-width:4320;}}@media(device-width:4321px){body{--device-width:4321;}}@media(device-width:4322px){body{--device-width:4322;}}@media(device-width:4323px){body{--device-width:4323;}}@media(device-width:4324px){body{--device-width:4324;}}@media(device-width:4325px){body{--device-width:4325;}}@media(device-width:4326px){body{--device-width:4326;}}@media(device-width:4327px){body{--device-width:4327;}}@media(device-width:4328px){body{--device-width:4328;}}@media(device-width:4329px){body{--device-width:4329;}}@media(device-width:4330px){body{--device-width:4330;}}@media(device-width:4331px){body{--device-width:4331;}}@media(device-width:4332px){body{--device-width:4332;}}@media(device-width:4333px){body{--device-width:4333;}}@media(device-width:4334px){body{--device-width:4334;}}@media(device-width:4335px){body{--device-width:4335;}}@media(device-width:4336px){body{--device-width:4336;}}@media(device-width:4337px){body{--device-width:4337;}}@media(device-width:4338px){body{--device-width:4338;}}@media(device-width:4339px){body{--device-width:4339;}}@media(device-width:4340px){body{--device-width:4340;}}@media(device-width:4341px){body{--device-width:4341;}}@media(device-width:4342px){body{--device-width:4342;}}@media(device-width:4343px){body{--device-width:4343;}}@media(device-width:4344px){body{--device-width:4344;}}@media(device-width:4345px){body{--device-width:4345;}}@media(device-width:4346px){body{--device-width:4346;}}@media(device-width:4347px){body{--device-width:4347;}}@media(device-width:4348px){body{--device-width:4348;}}@media(device-width:4349px){body{--device-width:4349;}}@media(device-width:4350px){body{--device-width:4350;}}@media(device-width:4351px){body{--device-width:4351;}}@media(device-width:4352px){body{--device-width:4352;}}@media(device-width:4353px){body{--device-width:4353;}}@media(device-width:4354px){body{--device-width:4354;}}@media(device-width:4355px){body{--device-width:4355;}}@media(device-width:4356px){body{--device-width:4356;}}@media(device-width:4357px){body{--device-width:4357;}}@media(device-width:4358px){body{--device-width:4358;}}@media(device-width:4359px){body{--device-width:4359;}}@media(device-width:4360px){body{--device-width:4360;}}@media(device-width:4361px){body{--device-width:4361;}}@media(device-width:4362px){body{--device-width:4362;}}@media(device-width:4363px){body{--device-width:4363;}}@media(device-width:4364px){body{--device-width:4364;}}@media(device-width:4365px){body{--device-width:4365;}}@media(device-width:4366px){body{--device-width:4366;}}@media(device-width:4367px){body{--device-width:4367;}}@media(device-width:4368px){body{--device-width:4368;}}@media(device-width:4369px){body{--device-width:4369;}}@media(device-width:4370px){body{--device-width:4370;}}@media(device-width:4371px){body{--device-width:4371;}}@media(device-width:4372px){body{--device-width:4372;}}@media(device-width:4373px){body{--device-width:4373;}}@media(device-width:4374px){body{--device-width:4374;}}@media(device-width:4375px){body{--device-width:4375;}}@media(device-width:4376px){body{--device-width:4376;}}@media(device-width:4377px){body{--device-width:4377;}}@media(device-width:4378px){body{--device-width:4378;}}@media(device-width:4379px){body{--device-width:4379;}}@media(device-width:4380px){body{--device-width:4380;}}@media(device-width:4381px){body{--device-width:4381;}}@media(device-width:4382px){body{--device-width:4382;}}@media(device-width:4383px){body{--device-width:4383;}}@media(device-width:4384px){body{--device-width:4384;}}@media(device-width:4385px){body{--device-width:4385;}}@media(device-width:4386px){body{--device-width:4386;}}@media(device-width:4387px){body{--device-width:4387;}}@media(device-width:4388px){body{--device-width:4388;}}@media(device-width:4389px){body{--device-width:4389;}}@media(device-width:4390px){body{--device-width:4390;}}@media(device-width:4391px){body{--device-width:4391;}}@media(device-width:4392px){body{--device-width:4392;}}@media(device-width:4393px){body{--device-width:4393;}}@media(device-width:4394px){body{--device-width:4394;}}@media(device-width:4395px){body{--device-width:4395;}}@media(device-width:4396px){body{--device-width:4396;}}@media(device-width:4397px){body{--device-width:4397;}}@media(device-width:4398px){body{--device-width:4398;}}@media(device-width:4399px){body{--device-width:4399;}}@media(device-width:4400px){body{--device-width:4400;}}@media(device-width:4401px){body{--device-width:4401;}}@media(device-width:4402px){body{--device-width:4402;}}@media(device-width:4403px){body{--device-width:4403;}}@media(device-width:4404px){body{--device-width:4404;}}@media(device-width:4405px){body{--device-width:4405;}}@media(device-width:4406px){body{--device-width:4406;}}@media(device-width:4407px){body{--device-width:4407;}}@media(device-width:4408px){body{--device-width:4408;}}@media(device-width:4409px){body{--device-width:4409;}}@media(device-width:4410px){body{--device-width:4410;}}@media(device-width:4411px){body{--device-width:4411;}}@media(device-width:4412px){body{--device-width:4412;}}@media(device-width:4413px){body{--device-width:4413;}}@media(device-width:4414px){body{--device-width:4414;}}@media(device-width:4415px){body{--device-width:4415;}}@media(device-width:4416px){body{--device-width:4416;}}@media(device-width:4417px){body{--device-width:4417;}}@media(device-width:4418px){body{--device-width:4418;}}@media(device-width:4419px){body{--device-width:4419;}}@media(device-width:4420px){body{--device-width:4420;}}@media(device-width:4421px){body{--device-width:4421;}}@media(device-width:4422px){body{--device-width:4422;}}@media(device-width:4423px){body{--device-width:4423;}}@media(device-width:4424px){body{--device-width:4424;}}@media(device-width:4425px){body{--device-width:4425;}}@media(device-width:4426px){body{--device-width:4426;}}@media(device-width:4427px){body{--device-width:4427;}}@media(device-width:4428px){body{--device-width:4428;}}@media(device-width:4429px){body{--device-width:4429;}}@media(device-width:4430px){body{--device-width:4430;}}@media(device-width:4431px){body{--device-width:4431;}}@media(device-width:4432px){body{--device-width:4432;}}@media(device-width:4433px){body{--device-width:4433;}}@media(device-width:4434px){body{--device-width:4434;}}@media(device-width:4435px){body{--device-width:4435;}}@media(device-width:4436px){body{--device-width:4436;}}@media(device-width:4437px){body{--device-width:4437;}}@media(device-width:4438px){body{--device-width:4438;}}@media(device-width:4439px){body{--device-width:4439;}}@media(device-width:4440px){body{--device-width:4440;}}@media(device-width:4441px){body{--device-width:4441;}}@media(device-width:4442px){body{--device-width:4442;}}@media(device-width:4443px){body{--device-width:4443;}}@media(device-width:4444px){body{--device-width:4444;}}@media(device-width:4445px){body{--device-width:4445;}}@media(device-width:4446px){body{--device-width:4446;}}@media(device-width:4447px){body{--device-width:4447;}}@media(device-width:4448px){body{--device-width:4448;}}@media(device-width:4449px){body{--device-width:4449;}}@media(device-width:4450px){body{--device-width:4450;}}@media(device-width:4451px){body{--device-width:4451;}}@media(device-width:4452px){body{--device-width:4452;}}@media(device-width:4453px){body{--device-width:4453;}}@media(device-width:4454px){body{--device-width:4454;}}@media(device-width:4455px){body{--device-width:4455;}}@media(device-width:4456px){body{--device-width:4456;}}@media(device-width:4457px){body{--device-width:4457;}}@media(device-width:4458px){body{--device-width:4458;}}@media(device-width:4459px){body{--device-width:4459;}}@media(device-width:4460px){body{--device-width:4460;}}@media(device-width:4461px){body{--device-width:4461;}}@media(device-width:4462px){body{--device-width:4462;}}@media(device-width:4463px){body{--device-width:4463;}}@media(device-width:4464px){body{--device-width:4464;}}@media(device-width:4465px){body{--device-width:4465;}}@media(device-width:4466px){body{--device-width:4466;}}@media(device-width:4467px){body{--device-width:4467;}}@media(device-width:4468px){body{--device-width:4468;}}@media(device-width:4469px){body{--device-width:4469;}}@media(device-width:4470px){body{--device-width:4470;}}@media(device-width:4471px){body{--device-width:4471;}}@media(device-width:4472px){body{--device-width:4472;}}@media(device-width:4473px){body{--device-width:4473;}}@media(device-width:4474px){body{--device-width:4474;}}@media(device-width:4475px){body{--device-width:4475;}}@media(device-width:4476px){body{--device-width:4476;}}@media(device-width:4477px){body{--device-width:4477;}}@media(device-width:4478px){body{--device-width:4478;}}@media(device-width:4479px){body{--device-width:4479;}}@media(device-width:4480px){body{--device-width:4480;}}@media(device-width:4481px){body{--device-width:4481;}}@media(device-width:4482px){body{--device-width:4482;}}@media(device-width:4483px){body{--device-width:4483;}}@media(device-width:4484px){body{--device-width:4484;}}@media(device-width:4485px){body{--device-width:4485;}}@media(device-width:4486px){body{--device-width:4486;}}@media(device-width:4487px){body{--device-width:4487;}}@media(device-width:4488px){body{--device-width:4488;}}@media(device-width:4489px){body{--device-width:4489;}}@media(device-width:4490px){body{--device-width:4490;}}@media(device-width:4491px){body{--device-width:4491;}}@media(device-width:4492px){body{--device-width:4492;}}@media(device-width:4493px){body{--device-width:4493;}}@media(device-width:4494px){body{--device-width:4494;}}@media(device-width:4495px){body{--device-width:4495;}}@media(device-width:4496px){body{--device-width:4496;}}@media(device-width:4497px){body{--device-width:4497;}}@media(device-width:4498px){body{--device-width:4498;}}@media(device-width:4499px){body{--device-width:4499;}}@media(device-width:4500px){body{--device-width:4500;}}@media(device-width:4501px){body{--device-width:4501;}}@media(device-width:4502px){body{--device-width:4502;}}@media(device-width:4503px){body{--device-width:4503;}}@media(device-width:4504px){body{--device-width:4504;}}@media(device-width:4505px){body{--device-width:4505;}}@media(device-width:4506px){body{--device-width:4506;}}@media(device-width:4507px){body{--device-width:4507;}}@media(device-width:4508px){body{--device-width:4508;}}@media(device-width:4509px){body{--device-width:4509;}}@media(device-width:4510px){body{--device-width:4510;}}@media(device-width:4511px){body{--device-width:4511;}}@media(device-width:4512px){body{--device-width:4512;}}@media(device-width:4513px){body{--device-width:4513;}}@media(device-width:4514px){body{--device-width:4514;}}@media(device-width:4515px){body{--device-width:4515;}}@media(device-width:4516px){body{--device-width:4516;}}@media(device-width:4517px){body{--device-width:4517;}}@media(device-width:4518px){body{--device-width:4518;}}@media(device-width:4519px){body{--device-width:4519;}}@media(device-width:4520px){body{--device-width:4520;}}@media(device-width:4521px){body{--device-width:4521;}}@media(device-width:4522px){body{--device-width:4522;}}@media(device-width:4523px){body{--device-width:4523;}}@media(device-width:4524px){body{--device-width:4524;}}@media(device-width:4525px){body{--device-width:4525;}}@media(device-width:4526px){body{--device-width:4526;}}@media(device-width:4527px){body{--device-width:4527;}}@media(device-width:4528px){body{--device-width:4528;}}@media(device-width:4529px){body{--device-width:4529;}}@media(device-width:4530px){body{--device-width:4530;}}@media(device-width:4531px){body{--device-width:4531;}}@media(device-width:4532px){body{--device-width:4532;}}@media(device-width:4533px){body{--device-width:4533;}}@media(device-width:4534px){body{--device-width:4534;}}@media(device-width:4535px){body{--device-width:4535;}}@media(device-width:4536px){body{--device-width:4536;}}@media(device-width:4537px){body{--device-width:4537;}}@media(device-width:4538px){body{--device-width:4538;}}@media(device-width:4539px){body{--device-width:4539;}}@media(device-width:4540px){body{--device-width:4540;}}@media(device-width:4541px){body{--device-width:4541;}}@media(device-width:4542px){body{--device-width:4542;}}@media(device-width:4543px){body{--device-width:4543;}}@media(device-width:4544px){body{--device-width:4544;}}@media(device-width:4545px){body{--device-width:4545;}}@media(device-width:4546px){body{--device-width:4546;}}@media(device-width:4547px){body{--device-width:4547;}}@media(device-width:4548px){body{--device-width:4548;}}@media(device-width:4549px){body{--device-width:4549;}}@media(device-width:4550px){body{--device-width:4550;}}@media(device-width:4551px){body{--device-width:4551;}}@media(device-width:4552px){body{--device-width:4552;}}@media(device-width:4553px){body{--device-width:4553;}}@media(device-width:4554px){body{--device-width:4554;}}@media(device-width:4555px){body{--device-width:4555;}}@media(device-width:4556px){body{--device-width:4556;}}@media(device-width:4557px){body{--device-width:4557;}}@media(device-width:4558px){body{--device-width:4558;}}@media(device-width:4559px){body{--device-width:4559;}}@media(device-width:4560px){body{--device-width:4560;}}@media(device-width:4561px){body{--device-width:4561;}}@media(device-width:4562px){body{--device-width:4562;}}@media(device-width:4563px){body{--device-width:4563;}}@media(device-width:4564px){body{--device-width:4564;}}@media(device-width:4565px){body{--device-width:4565;}}@media(device-width:4566px){body{--device-width:4566;}}@media(device-width:4567px){body{--device-width:4567;}}@media(device-width:4568px){body{--device-width:4568;}}@media(device-width:4569px){body{--device-width:4569;}}@media(device-width:4570px){body{--device-width:4570;}}@media(device-width:4571px){body{--device-width:4571;}}@media(device-width:4572px){body{--device-width:4572;}}@media(device-width:4573px){body{--device-width:4573;}}@media(device-width:4574px){body{--device-width:4574;}}@media(device-width:4575px){body{--device-width:4575;}}@media(device-width:4576px){body{--device-width:4576;}}@media(device-width:4577px){body{--device-width:4577;}}@media(device-width:4578px){body{--device-width:4578;}}@media(device-width:4579px){body{--device-width:4579;}}@media(device-width:4580px){body{--device-width:4580;}}@media(device-width:4581px){body{--device-width:4581;}}@media(device-width:4582px){body{--device-width:4582;}}@media(device-width:4583px){body{--device-width:4583;}}@media(device-width:4584px){body{--device-width:4584;}}@media(device-width:4585px){body{--device-width:4585;}}@media(device-width:4586px){body{--device-width:4586;}}@media(device-width:4587px){body{--device-width:4587;}}@media(device-width:4588px){body{--device-width:4588;}}@media(device-width:4589px){body{--device-width:4589;}}@media(device-width:4590px){body{--device-width:4590;}}@media(device-width:4591px){body{--device-width:4591;}}@media(device-width:4592px){body{--device-width:4592;}}@media(device-width:4593px){body{--device-width:4593;}}@media(device-width:4594px){body{--device-width:4594;}}@media(device-width:4595px){body{--device-width:4595;}}@media(device-width:4596px){body{--device-width:4596;}}@media(device-width:4597px){body{--device-width:4597;}}@media(device-width:4598px){body{--device-width:4598;}}@media(device-width:4599px){body{--device-width:4599;}}@media(device-width:4600px){body{--device-width:4600;}}@media(device-width:4601px){body{--device-width:4601;}}@media(device-width:4602px){body{--device-width:4602;}}@media(device-width:4603px){body{--device-width:4603;}}@media(device-width:4604px){body{--device-width:4604;}}@media(device-width:4605px){body{--device-width:4605;}}@media(device-width:4606px){body{--device-width:4606;}}@media(device-width:4607px){body{--device-width:4607;}}@media(device-width:4608px){body{--device-width:4608;}}@media(device-width:4609px){body{--device-width:4609;}}@media(device-width:4610px){body{--device-width:4610;}}@media(device-width:4611px){body{--device-width:4611;}}@media(device-width:4612px){body{--device-width:4612;}}@media(device-width:4613px){body{--device-width:4613;}}@media(device-width:4614px){body{--device-width:4614;}}@media(device-width:4615px){body{--device-width:4615;}}@media(device-width:4616px){body{--device-width:4616;}}@media(device-width:4617px){body{--device-width:4617;}}@media(device-width:4618px){body{--device-width:4618;}}@media(device-width:4619px){body{--device-width:4619;}}@media(device-width:4620px){body{--device-width:4620;}}@media(device-width:4621px){body{--device-width:4621;}}@media(device-width:4622px){body{--device-width:4622;}}@media(device-width:4623px){body{--device-width:4623;}}@media(device-width:4624px){body{--device-width:4624;}}@media(device-width:4625px){body{--device-width:4625;}}@media(device-width:4626px){body{--device-width:4626;}}@media(device-width:4627px){body{--device-width:4627;}}@media(device-width:4628px){body{--device-width:4628;}}@media(device-width:4629px){body{--device-width:4629;}}@media(device-width:4630px){body{--device-width:4630;}}@media(device-width:4631px){body{--device-width:4631;}}@media(device-width:4632px){body{--device-width:4632;}}@media(device-width:4633px){body{--device-width:4633;}}@media(device-width:4634px){body{--device-width:4634;}}@media(device-width:4635px){body{--device-width:4635;}}@media(device-width:4636px){body{--device-width:4636;}}@media(device-width:4637px){body{--device-width:4637;}}@media(device-width:4638px){body{--device-width:4638;}}@media(device-width:4639px){body{--device-width:4639;}}@media(device-width:4640px){body{--device-width:4640;}}@media(device-width:4641px){body{--device-width:4641;}}@media(device-width:4642px){body{--device-width:4642;}}@media(device-width:4643px){body{--device-width:4643;}}@media(device-width:4644px){body{--device-width:4644;}}@media(device-width:4645px){body{--device-width:4645;}}@media(device-width:4646px){body{--device-width:4646;}}@media(device-width:4647px){body{--device-width:4647;}}@media(device-width:4648px){body{--device-width:4648;}}@media(device-width:4649px){body{--device-width:4649;}}@media(device-width:4650px){body{--device-width:4650;}}@media(device-width:4651px){body{--device-width:4651;}}@media(device-width:4652px){body{--device-width:4652;}}@media(device-width:4653px){body{--device-width:4653;}}@media(device-width:4654px){body{--device-width:4654;}}@media(device-width:4655px){body{--device-width:4655;}}@media(device-width:4656px){body{--device-width:4656;}}@media(device-width:4657px){body{--device-width:4657;}}@media(device-width:4658px){body{--device-width:4658;}}@media(device-width:4659px){body{--device-width:4659;}}@media(device-width:4660px){body{--device-width:4660;}}@media(device-width:4661px){body{--device-width:4661;}}@media(device-width:4662px){body{--device-width:4662;}}@media(device-width:4663px){body{--device-width:4663;}}@media(device-width:4664px){body{--device-width:4664;}}@media(device-width:4665px){body{--device-width:4665;}}@media(device-width:4666px){body{--device-width:4666;}}@media(device-width:4667px){body{--device-width:4667;}}@media(device-width:4668px){body{--device-width:4668;}}@media(device-width:4669px){body{--device-width:4669;}}@media(device-width:4670px){body{--device-width:4670;}}@media(device-width:4671px){body{--device-width:4671;}}@media(device-width:4672px){body{--device-width:4672;}}@media(device-width:4673px){body{--device-width:4673;}}@media(device-width:4674px){body{--device-width:4674;}}@media(device-width:4675px){body{--device-width:4675;}}@media(device-width:4676px){body{--device-width:4676;}}@media(device-width:4677px){body{--device-width:4677;}}@media(device-width:4678px){body{--device-width:4678;}}@media(device-width:4679px){body{--device-width:4679;}}@media(device-width:4680px){body{--device-width:4680;}}@media(device-width:4681px){body{--device-width:4681;}}@media(device-width:4682px){body{--device-width:4682;}}@media(device-width:4683px){body{--device-width:4683;}}@media(device-width:4684px){body{--device-width:4684;}}@media(device-width:4685px){body{--device-width:4685;}}@media(device-width:4686px){body{--device-width:4686;}}@media(device-width:4687px){body{--device-width:4687;}}@media(device-width:4688px){body{--device-width:4688;}}@media(device-width:4689px){body{--device-width:4689;}}@media(device-width:4690px){body{--device-width:4690;}}@media(device-width:4691px){body{--device-width:4691;}}@media(device-width:4692px){body{--device-width:4692;}}@media(device-width:4693px){body{--device-width:4693;}}@media(device-width:4694px){body{--device-width:4694;}}@media(device-width:4695px){body{--device-width:4695;}}@media(device-width:4696px){body{--device-width:4696;}}@media(device-width:4697px){body{--device-width:4697;}}@media(device-width:4698px){body{--device-width:4698;}}@media(device-width:4699px){body{--device-width:4699;}}@media(device-width:4700px){body{--device-width:4700;}}@media(device-width:4701px){body{--device-width:4701;}}@media(device-width:4702px){body{--device-width:4702;}}@media(device-width:4703px){body{--device-width:4703;}}@media(device-width:4704px){body{--device-width:4704;}}@media(device-width:4705px){body{--device-width:4705;}}@media(device-width:4706px){body{--device-width:4706;}}@media(device-width:4707px){body{--device-width:4707;}}@media(device-width:4708px){body{--device-width:4708;}}@media(device-width:4709px){body{--device-width:4709;}}@media(device-width:4710px){body{--device-width:4710;}}@media(device-width:4711px){body{--device-width:4711;}}@media(device-width:4712px){body{--device-width:4712;}}@media(device-width:4713px){body{--device-width:4713;}}@media(device-width:4714px){body{--device-width:4714;}}@media(device-width:4715px){body{--device-width:4715;}}@media(device-width:4716px){body{--device-width:4716;}}@media(device-width:4717px){body{--device-width:4717;}}@media(device-width:4718px){body{--device-width:4718;}}@media(device-width:4719px){body{--device-width:4719;}}@media(device-width:4720px){body{--device-width:4720;}}@media(device-width:4721px){body{--device-width:4721;}}@media(device-width:4722px){body{--device-width:4722;}}@media(device-width:4723px){body{--device-width:4723;}}@media(device-width:4724px){body{--device-width:4724;}}@media(device-width:4725px){body{--device-width:4725;}}@media(device-width:4726px){body{--device-width:4726;}}@media(device-width:4727px){body{--device-width:4727;}}@media(device-width:4728px){body{--device-width:4728;}}@media(device-width:4729px){body{--device-width:4729;}}@media(device-width:4730px){body{--device-width:4730;}}@media(device-width:4731px){body{--device-width:4731;}}@media(device-width:4732px){body{--device-width:4732;}}@media(device-width:4733px){body{--device-width:4733;}}@media(device-width:4734px){body{--device-width:4734;}}@media(device-width:4735px){body{--device-width:4735;}}@media(device-width:4736px){body{--device-width:4736;}}@media(device-width:4737px){body{--device-width:4737;}}@media(device-width:4738px){body{--device-width:4738;}}@media(device-width:4739px){body{--device-width:4739;}}@media(device-width:4740px){body{--device-width:4740;}}@media(device-width:4741px){body{--device-width:4741;}}@media(device-width:4742px){body{--device-width:4742;}}@media(device-width:4743px){body{--device-width:4743;}}@media(device-width:4744px){body{--device-width:4744;}}@media(device-width:4745px){body{--device-width:4745;}}@media(device-width:4746px){body{--device-width:4746;}}@media(device-width:4747px){body{--device-width:4747;}}@media(device-width:4748px){body{--device-width:4748;}}@media(device-width:4749px){body{--device-width:4749;}}@media(device-width:4750px){body{--device-width:4750;}}@media(device-width:4751px){body{--device-width:4751;}}@media(device-width:4752px){body{--device-width:4752;}}@media(device-width:4753px){body{--device-width:4753;}}@media(device-width:4754px){body{--device-width:4754;}}@media(device-width:4755px){body{--device-width:4755;}}@media(device-width:4756px){body{--device-width:4756;}}@media(device-width:4757px){body{--device-width:4757;}}@media(device-width:4758px){body{--device-width:4758;}}@media(device-width:4759px){body{--device-width:4759;}}@media(device-width:4760px){body{--device-width:4760;}}@media(device-width:4761px){body{--device-width:4761;}}@media(device-width:4762px){body{--device-width:4762;}}@media(device-width:4763px){body{--device-width:4763;}}@media(device-width:4764px){body{--device-width:4764;}}@media(device-width:4765px){body{--device-width:4765;}}@media(device-width:4766px){body{--device-width:4766;}}@media(device-width:4767px){body{--device-width:4767;}}@media(device-width:4768px){body{--device-width:4768;}}@media(device-width:4769px){body{--device-width:4769;}}@media(device-width:4770px){body{--device-width:4770;}}@media(device-width:4771px){body{--device-width:4771;}}@media(device-width:4772px){body{--device-width:4772;}}@media(device-width:4773px){body{--device-width:4773;}}@media(device-width:4774px){body{--device-width:4774;}}@media(device-width:4775px){body{--device-width:4775;}}@media(device-width:4776px){body{--device-width:4776;}}@media(device-width:4777px){body{--device-width:4777;}}@media(device-width:4778px){body{--device-width:4778;}}@media(device-width:4779px){body{--device-width:4779;}}@media(device-width:4780px){body{--device-width:4780;}}@media(device-width:4781px){body{--device-width:4781;}}@media(device-width:4782px){body{--device-width:4782;}}@media(device-width:4783px){body{--device-width:4783;}}@media(device-width:4784px){body{--device-width:4784;}}@media(device-width:4785px){body{--device-width:4785;}}@media(device-width:4786px){body{--device-width:4786;}}@media(device-width:4787px){body{--device-width:4787;}}@media(device-width:4788px){body{--device-width:4788;}}@media(device-width:4789px){body{--device-width:4789;}}@media(device-width:4790px){body{--device-width:4790;}}@media(device-width:4791px){body{--device-width:4791;}}@media(device-width:4792px){body{--device-width:4792;}}@media(device-width:4793px){body{--device-width:4793;}}@media(device-width:4794px){body{--device-width:4794;}}@media(device-width:4795px){body{--device-width:4795;}}@media(device-width:4796px){body{--device-width:4796;}}@media(device-width:4797px){body{--device-width:4797;}}@media(device-width:4798px){body{--device-width:4798;}}@media(device-width:4799px){body{--device-width:4799;}}@media(device-width:4800px){body{--device-width:4800;}}@media(device-width:4801px){body{--device-width:4801;}}@media(device-width:4802px){body{--device-width:4802;}}@media(device-width:4803px){body{--device-width:4803;}}@media(device-width:4804px){body{--device-width:4804;}}@media(device-width:4805px){body{--device-width:4805;}}@media(device-width:4806px){body{--device-width:4806;}}@media(device-width:4807px){body{--device-width:4807;}}@media(device-width:4808px){body{--device-width:4808;}}@media(device-width:4809px){body{--device-width:4809;}}@media(device-width:4810px){body{--device-width:4810;}}@media(device-width:4811px){body{--device-width:4811;}}@media(device-width:4812px){body{--device-width:4812;}}@media(device-width:4813px){body{--device-width:4813;}}@media(device-width:4814px){body{--device-width:4814;}}@media(device-width:4815px){body{--device-width:4815;}}@media(device-width:4816px){body{--device-width:4816;}}@media(device-width:4817px){body{--device-width:4817;}}@media(device-width:4818px){body{--device-width:4818;}}@media(device-width:4819px){body{--device-width:4819;}}@media(device-width:4820px){body{--device-width:4820;}}@media(device-width:4821px){body{--device-width:4821;}}@media(device-width:4822px){body{--device-width:4822;}}@media(device-width:4823px){body{--device-width:4823;}}@media(device-width:4824px){body{--device-width:4824;}}@media(device-width:4825px){body{--device-width:4825;}}@media(device-width:4826px){body{--device-width:4826;}}@media(device-width:4827px){body{--device-width:4827;}}@media(device-width:4828px){body{--device-width:4828;}}@media(device-width:4829px){body{--device-width:4829;}}@media(device-width:4830px){body{--device-width:4830;}}@media(device-width:4831px){body{--device-width:4831;}}@media(device-width:4832px){body{--device-width:4832;}}@media(device-width:4833px){body{--device-width:4833;}}@media(device-width:4834px){body{--device-width:4834;}}@media(device-width:4835px){body{--device-width:4835;}}@media(device-width:4836px){body{--device-width:4836;}}@media(device-width:4837px){body{--device-width:4837;}}@media(device-width:4838px){body{--device-width:4838;}}@media(device-width:4839px){body{--device-width:4839;}}@media(device-width:4840px){body{--device-width:4840;}}@media(device-width:4841px){body{--device-width:4841;}}@media(device-width:4842px){body{--device-width:4842;}}@media(device-width:4843px){body{--device-width:4843;}}@media(device-width:4844px){body{--device-width:4844;}}@media(device-width:4845px){body{--device-width:4845;}}@media(device-width:4846px){body{--device-width:4846;}}@media(device-width:4847px){body{--device-width:4847;}}@media(device-width:4848px){body{--device-width:4848;}}@media(device-width:4849px){body{--device-width:4849;}}@media(device-width:4850px){body{--device-width:4850;}}@media(device-width:4851px){body{--device-width:4851;}}@media(device-width:4852px){body{--device-width:4852;}}@media(device-width:4853px){body{--device-width:4853;}}@media(device-width:4854px){body{--device-width:4854;}}@media(device-width:4855px){body{--device-width:4855;}}@media(device-width:4856px){body{--device-width:4856;}}@media(device-width:4857px){body{--device-width:4857;}}@media(device-width:4858px){body{--device-width:4858;}}@media(device-width:4859px){body{--device-width:4859;}}@media(device-width:4860px){body{--device-width:4860;}}@media(device-width:4861px){body{--device-width:4861;}}@media(device-width:4862px){body{--device-width:4862;}}@media(device-width:4863px){body{--device-width:4863;}}@media(device-width:4864px){body{--device-width:4864;}}@media(device-width:4865px){body{--device-width:4865;}}@media(device-width:4866px){body{--device-width:4866;}}@media(device-width:4867px){body{--device-width:4867;}}@media(device-width:4868px){body{--device-width:4868;}}@media(device-width:4869px){body{--device-width:4869;}}@media(device-width:4870px){body{--device-width:4870;}}@media(device-width:4871px){body{--device-width:4871;}}@media(device-width:4872px){body{--device-width:4872;}}@media(device-width:4873px){body{--device-width:4873;}}@media(device-width:4874px){body{--device-width:4874;}}@media(device-width:4875px){body{--device-width:4875;}}@media(device-width:4876px){body{--device-width:4876;}}@media(device-width:4877px){body{--device-width:4877;}}@media(device-width:4878px){body{--device-width:4878;}}@media(device-width:4879px){body{--device-width:4879;}}@media(device-width:4880px){body{--device-width:4880;}}@media(device-width:4881px){body{--device-width:4881;}}@media(device-width:4882px){body{--device-width:4882;}}@media(device-width:4883px){body{--device-width:4883;}}@media(device-width:4884px){body{--device-width:4884;}}@media(device-width:4885px){body{--device-width:4885;}}@media(device-width:4886px){body{--device-width:4886;}}@media(device-width:4887px){body{--device-width:4887;}}@media(device-width:4888px){body{--device-width:4888;}}@media(device-width:4889px){body{--device-width:4889;}}@media(device-width:4890px){body{--device-width:4890;}}@media(device-width:4891px){body{--device-width:4891;}}@media(device-width:4892px){body{--device-width:4892;}}@media(device-width:4893px){body{--device-width:4893;}}@media(device-width:4894px){body{--device-width:4894;}}@media(device-width:4895px){body{--device-width:4895;}}@media(device-width:4896px){body{--device-width:4896;}}@media(device-width:4897px){body{--device-width:4897;}}@media(device-width:4898px){body{--device-width:4898;}}@media(device-width:4899px){body{--device-width:4899;}}@media(device-width:4900px){body{--device-width:4900;}}@media(device-width:4901px){body{--device-width:4901;}}@media(device-width:4902px){body{--device-width:4902;}}@media(device-width:4903px){body{--device-width:4903;}}@media(device-width:4904px){body{--device-width:4904;}}@media(device-width:4905px){body{--device-width:4905;}}@media(device-width:4906px){body{--device-width:4906;}}@media(device-width:4907px){body{--device-width:4907;}}@media(device-width:4908px){body{--device-width:4908;}}@media(device-width:4909px){body{--device-width:4909;}}@media(device-width:4910px){body{--device-width:4910;}}@media(device-width:4911px){body{--device-width:4911;}}@media(device-width:4912px){body{--device-width:4912;}}@media(device-width:4913px){body{--device-width:4913;}}@media(device-width:4914px){body{--device-width:4914;}}@media(device-width:4915px){body{--device-width:4915;}}@media(device-width:4916px){body{--device-width:4916;}}@media(device-width:4917px){body{--device-width:4917;}}@media(device-width:4918px){body{--device-width:4918;}}@media(device-width:4919px){body{--device-width:4919;}}@media(device-width:4920px){body{--device-width:4920;}}@media(device-width:4921px){body{--device-width:4921;}}@media(device-width:4922px){body{--device-width:4922;}}@media(device-width:4923px){body{--device-width:4923;}}@media(device-width:4924px){body{--device-width:4924;}}@media(device-width:4925px){body{--device-width:4925;}}@media(device-width:4926px){body{--device-width:4926;}}@media(device-width:4927px){body{--device-width:4927;}}@media(device-width:4928px){body{--device-width:4928;}}@media(device-width:4929px){body{--device-width:4929;}}@media(device-width:4930px){body{--device-width:4930;}}@media(device-width:4931px){body{--device-width:4931;}}@media(device-width:4932px){body{--device-width:4932;}}@media(device-width:4933px){body{--device-width:4933;}}@media(device-width:4934px){body{--device-width:4934;}}@media(device-width:4935px){body{--device-width:4935;}}@media(device-width:4936px){body{--device-width:4936;}}@media(device-width:4937px){body{--device-width:4937;}}@media(device-width:4938px){body{--device-width:4938;}}@media(device-width:4939px){body{--device-width:4939;}}@media(device-width:4940px){body{--device-width:4940;}}@media(device-width:4941px){body{--device-width:4941;}}@media(device-width:4942px){body{--device-width:4942;}}@media(device-width:4943px){body{--device-width:4943;}}@media(device-width:4944px){body{--device-width:4944;}}@media(device-width:4945px){body{--device-width:4945;}}@media(device-width:4946px){body{--device-width:4946;}}@media(device-width:4947px){body{--device-width:4947;}}@media(device-width:4948px){body{--device-width:4948;}}@media(device-width:4949px){body{--device-width:4949;}}@media(device-width:4950px){body{--device-width:4950;}}@media(device-width:4951px){body{--device-width:4951;}}@media(device-width:4952px){body{--device-width:4952;}}@media(device-width:4953px){body{--device-width:4953;}}@media(device-width:4954px){body{--device-width:4954;}}@media(device-width:4955px){body{--device-width:4955;}}@media(device-width:4956px){body{--device-width:4956;}}@media(device-width:4957px){body{--device-width:4957;}}@media(device-width:4958px){body{--device-width:4958;}}@media(device-width:4959px){body{--device-width:4959;}}@media(device-width:4960px){body{--device-width:4960;}}@media(device-width:4961px){body{--device-width:4961;}}@media(device-width:4962px){body{--device-width:4962;}}@media(device-width:4963px){body{--device-width:4963;}}@media(device-width:4964px){body{--device-width:4964;}}@media(device-width:4965px){body{--device-width:4965;}}@media(device-width:4966px){body{--device-width:4966;}}@media(device-width:4967px){body{--device-width:4967;}}@media(device-width:4968px){body{--device-width:4968;}}@media(device-width:4969px){body{--device-width:4969;}}@media(device-width:4970px){body{--device-width:4970;}}@media(device-width:4971px){body{--device-width:4971;}}@media(device-width:4972px){body{--device-width:4972;}}@media(device-width:4973px){body{--device-width:4973;}}@media(device-width:4974px){body{--device-width:4974;}}@media(device-width:4975px){body{--device-width:4975;}}@media(device-width:4976px){body{--device-width:4976;}}@media(device-width:4977px){body{--device-width:4977;}}@media(device-width:4978px){body{--device-width:4978;}}@media(device-width:4979px){body{--device-width:4979;}}@media(device-width:4980px){body{--device-width:4980;}}@media(device-width:4981px){body{--device-width:4981;}}@media(device-width:4982px){body{--device-width:4982;}}@media(device-width:4983px){body{--device-width:4983;}}@media(device-width:4984px){body{--device-width:4984;}}@media(device-width:4985px){body{--device-width:4985;}}@media(device-width:4986px){body{--device-width:4986;}}@media(device-width:4987px){body{--device-width:4987;}}@media(device-width:4988px){body{--device-width:4988;}}@media(device-width:4989px){body{--device-width:4989;}}@media(device-width:4990px){body{--device-width:4990;}}@media(device-width:4991px){body{--device-width:4991;}}@media(device-width:4992px){body{--device-width:4992;}}@media(device-width:4993px){body{--device-width:4993;}}@media(device-width:4994px){body{--device-width:4994;}}@media(device-width:4995px){body{--device-width:4995;}}@media(device-width:4996px){body{--device-width:4996;}}@media(device-width:4997px){body{--device-width:4997;}}@media(device-width:4998px){body{--device-width:4998;}}@media(device-width:4999px){body{--device-width:4999;}}" }},
    [Symbol.toStringTag]: {value:"HTMLElement",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(PointerEvent.prototype, {
    pointerId: {get(){ v_console_log("  [*] PointerEvent -> pointerId[get]", 1);return 1 }},
    width: {get(){ v_console_log("  [*] PointerEvent -> width[get]", 1);return 1 }},
    height: {get(){ v_console_log("  [*] PointerEvent -> height[get]", 1);return 1 }},
    pressure: {get(){ v_console_log("  [*] PointerEvent -> pressure[get]", 0);return 0 }},
    tangentialPressure: {get(){ v_console_log("  [*] PointerEvent -> tangentialPressure[get]", 0);return 0 }},
    tiltX: {get(){ v_console_log("  [*] PointerEvent -> tiltX[get]", 0);return 0 }},
    tiltY: {get(){ v_console_log("  [*] PointerEvent -> tiltY[get]", 0);return 0 }},
    twist: {get(){ v_console_log("  [*] PointerEvent -> twist[get]", 0);return 0 }},
    pointerType: {get(){ v_console_log("  [*] PointerEvent -> pointerType[get]", "mouse");return "mouse" }},
    isPrimary: {get(){ v_console_log("  [*] PointerEvent -> isPrimary[get]", true);return true }},
    [Symbol.toStringTag]: {value:"PointerEvent",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(OscillatorNode.prototype, {
    detune: {get(){ v_console_log("  [*] OscillatorNode -> detune[get]", {});return {} }},
    frequency: {get(){ v_console_log("  [*] OscillatorNode -> frequency[get]", {});return {} }},
    [Symbol.toStringTag]: {value:"OscillatorNode",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(HTMLImageElement.prototype, {
    complete: {get(){ v_console_log("  [*] HTMLImageElement -> complete[get]", true);return true }},
    src: {get(){ v_console_log("  [*] HTMLImageElement -> src[get]", "https://img.pddpic.com/mms-material-img/2025-06-16/d887239e-6c21-4db5-89d4-0d6e3cfb614f.jpeg?imageMogr2/thumbnail/400x%7CimageView2/2/w/400/q/80/format/webp");return "https://img.pddpic.com/mms-material-img/2025-06-16/d887239e-6c21-4db5-89d4-0d6e3cfb614f.jpeg?imageMogr2/thumbnail/400x%7CimageView2/2/w/400/q/80/format/webp" },set(){ v_console_log("  [*] HTMLImageElement -> src[set]", [].slice.call(arguments));return "https://img.pddpic.com/mms-material-img/2025-06-16/d887239e-6c21-4db5-89d4-0d6e3cfb614f.jpeg?imageMogr2/thumbnail/400x%7CimageView2/2/w/400/q/80/format/webp" }},
    naturalHeight: {get(){ v_console_log("  [*] HTMLImageElement -> naturalHeight[get]", 42);return 42 }},
    height: {get(){ v_console_log("  [*] HTMLImageElement -> height[get]", 16);return 16 }},
    width: {get(){ v_console_log("  [*] HTMLImageElement -> width[get]", 16);return 16 }},
    [Symbol.toStringTag]: {value:"HTMLImageElement",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(HTMLScriptElement.prototype, {
    src: {get(){ v_console_log("  [*] HTMLScriptElement -> src[get]", "");return "" },set(){ v_console_log("  [*] HTMLScriptElement -> src[set]", [].slice.call(arguments));return "" }},
    crossOrigin: {set(){ v_console_log("  [*] HTMLScriptElement -> crossOrigin[set]", [].slice.call(arguments));return "" }},
    async: {set(){ v_console_log("  [*] HTMLScriptElement -> async[set]", [].slice.call(arguments));return "" }},
    charset: {set(){ v_console_log("  [*] HTMLScriptElement -> charset[set]", [].slice.call(arguments));return "" }},
    text: {get(){ v_console_log("  [*] HTMLScriptElement -> text[get]", "window.__SSR_STREAM_END__=1;");return "window.__SSR_STREAM_END__=1;" }},
    [Symbol.toStringTag]: {value:"HTMLScriptElement",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(HTMLAnchorElement.prototype, {
    [Symbol.toStringTag]: {value:"HTMLAnchorElement",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(HTMLLinkElement.prototype, {
    rel: {get(){ v_console_log("  [*] HTMLLinkElement -> rel[get]", "preload");return "preload" },set(){ v_console_log("  [*] HTMLLinkElement -> rel[set]", [].slice.call(arguments));return "preload" }},
    type: {set(){ v_console_log("  [*] HTMLLinkElement -> type[set]", [].slice.call(arguments));return "preload" }},
    href: {get(){ v_console_log("  [*] HTMLLinkElement -> href[get]", "https://static.pddpic.com/assets/css/tabview_5f07bda2c5272c124e92.css");return "https://static.pddpic.com/assets/css/tabview_5f07bda2c5272c124e92.css" },set(){ v_console_log("  [*] HTMLLinkElement -> href[set]", [].slice.call(arguments));return "https://static.pddpic.com/assets/css/tabview_5f07bda2c5272c124e92.css" }},
    crossOrigin: {set(){ v_console_log("  [*] HTMLLinkElement -> crossOrigin[set]", [].slice.call(arguments));return "https://static.pddpic.com/assets/css/tabview_5f07bda2c5272c124e92.css" }},
    [Symbol.toStringTag]: {value:"HTMLLinkElement",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(HTMLMediaElement.prototype, {
    canPlayType: {value: v_saf(function canPlayType(){v_console_log("  [*] HTMLMediaElement -> canPlayType[func]", [].slice.call(arguments));})},
    NETWORK_IDLE: {"value":1,"writable":false,"enumerable":true,"configurable":false},
    NETWORK_LOADING: {"value":2,"writable":false,"enumerable":true,"configurable":false},
    NETWORK_NO_SOURCE: {"value":3,"writable":false,"enumerable":true,"configurable":false},
    HAVE_METADATA: {"value":1,"writable":false,"enumerable":true,"configurable":false},
    HAVE_CURRENT_DATA: {"value":2,"writable":false,"enumerable":true,"configurable":false},
    HAVE_FUTURE_DATA: {"value":3,"writable":false,"enumerable":true,"configurable":false},
    HAVE_ENOUGH_DATA: {"value":4,"writable":false,"enumerable":true,"configurable":false},
    [Symbol.toStringTag]: {value:"HTMLMediaElement",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(HTMLCanvasElement.prototype, {
    getContext: {value: v_saf(function getContext(){v_console_log("  [*] HTMLCanvasElement -> getContext[func]", [].slice.call(arguments));if (arguments[0]=='2d'){var r = v_new(CanvasRenderingContext2D); return r}; if (arguments[0]=='webgl' || arguments[0]=='experimental-webgl'){var r = v_new(WebGLRenderingContext); r._canvas = this; return r}; return null})},
    captureStream: {value: v_saf(function captureStream(){v_console_log("  [*] HTMLCanvasElement -> captureStream[func]", [].slice.call(arguments));})},
    toBlob: {value: v_saf(function toBlob(){v_console_log("  [*] HTMLCanvasElement -> toBlob[func]", [].slice.call(arguments));})},
    transferControlToOffscreen: {value: v_saf(function transferControlToOffscreen(){v_console_log("  [*] HTMLCanvasElement -> transferControlToOffscreen[func]", [].slice.call(arguments));})},
    width: {get(){ v_console_log("  [*] HTMLCanvasElement -> width[get]", 2);return 2 },set(){ v_console_log("  [*] HTMLCanvasElement -> width[set]", [].slice.call(arguments));return 2 }},
    height: {get(){ v_console_log("  [*] HTMLCanvasElement -> height[get]", 2);return 2 },set(){ v_console_log("  [*] HTMLCanvasElement -> height[set]", [].slice.call(arguments));return 2 }},
    [Symbol.toStringTag]: {value:"HTMLCanvasElement",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(HTMLIFrameElement.prototype, {
    src: {get(){ v_console_log("  [*] HTMLIFrameElement -> src[get]", "about:blank");return "about:blank" },set(){ v_console_log("  [*] HTMLIFrameElement -> src[set]", [].slice.call(arguments));return "about:blank" }},
    contentWindow: {get(){ v_console_log("  [*] HTMLIFrameElement -> contentWindow[get]", {});return {} }},
    [Symbol.toStringTag]: {value:"HTMLIFrameElement",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(Window.prototype, {
    PERSISTENT: {"value":1,"writable":false,"enumerable":true,"configurable":false},
    [Symbol.toStringTag]: {value:"Window",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(HTMLDocument.prototype, {
    [Symbol.toStringTag]: {value:"HTMLDocument",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(HTMLHtmlElement.prototype, {
    [Symbol.toStringTag]: {value:"HTMLHtmlElement",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(HTMLHeadElement.prototype, {
    [Symbol.toStringTag]: {value:"HTMLHeadElement",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(HTMLBodyElement.prototype, {
    [Symbol.toStringTag]: {value:"HTMLBodyElement",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(Location.prototype, {
    [Symbol.toStringTag]: {value:"Location",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(PerformanceElementTiming.prototype, {
    [Symbol.toStringTag]: {value:"PerformanceElementTiming",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(PerformanceEventTiming.prototype, {
    [Symbol.toStringTag]: {value:"PerformanceEventTiming",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(PerformanceLongTaskTiming.prototype, {
    [Symbol.toStringTag]: {value:"PerformanceLongTaskTiming",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(PerformanceMark.prototype, {
    [Symbol.toStringTag]: {value:"PerformanceMark",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(PerformanceMeasure.prototype, {
    [Symbol.toStringTag]: {value:"PerformanceMeasure",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(PerformanceNavigation.prototype, {
    TYPE_RELOAD: {"value":1,"writable":false,"enumerable":true,"configurable":false},
    TYPE_BACK_FORWARD: {"value":2,"writable":false,"enumerable":true,"configurable":false},
    TYPE_RESERVED: {"value":255,"writable":false,"enumerable":true,"configurable":false},
    [Symbol.toStringTag]: {value:"PerformanceNavigation",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(PerformanceNavigationTiming.prototype, {
    [Symbol.toStringTag]: {value:"PerformanceNavigationTiming",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(PerformancePaintTiming.prototype, {
    [Symbol.toStringTag]: {value:"PerformancePaintTiming",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(PerformanceServerTiming.prototype, {
    [Symbol.toStringTag]: {value:"PerformanceServerTiming",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(PerformanceTiming.prototype, {
    [Symbol.toStringTag]: {value:"PerformanceTiming",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(HTMLUnknownElement.prototype, {
    [Symbol.toStringTag]: {value:"HTMLUnknownElement",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(Touch.prototype, {
    [Symbol.toStringTag]: {value:"Touch",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(TouchEvent.prototype, {
    [Symbol.toStringTag]: {value:"TouchEvent",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(HTMLDivElement.prototype, {
    [Symbol.toStringTag]: {value:"HTMLDivElement",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(HTMLStyleElement.prototype, {
    [Symbol.toStringTag]: {value:"HTMLStyleElement",writable:false,enumerable:false,configurable:true},
  })




  if (typeof __dirname != 'undefined'){ __dirname = undefined }
  if (typeof __filename != 'undefined'){ __filename = undefined }
  if (typeof require != 'undefined'){ require = undefined }
  if (typeof exports != 'undefined'){ exports = undefined }
  if (typeof module != 'undefined'){ module = undefined }
  if (typeof Buffer != 'undefined'){ Buffer = undefined }
  var avoid_log = ['Symbol','Object','Number','RegExp','Boolean','String','constructor']
  var __globalThis__ = typeof global != 'undefined' ? global : this
  var window = new Proxy(v_new(Window), {
    get(a,b){ if(b=='global'){return}
      var r = a[b] || __globalThis__[b]
      if (typeof b !== 'symbol' && avoid_log.indexOf(b) == -1){
        v_console_log('  [*] [window get '+b+'] ==>', r)
      }
      return r
    },
    set(a,b,c){
      if (b == 'onclick' && typeof c == 'function') { window.addEventListener('click', c) }
      if (b == 'onmousedown' && typeof c == 'function') { window.addEventListener('mousedown', c) }
      if (b == 'onmouseup' && typeof c == 'function') { window.addEventListener('mouseup', c) }
      __globalThis__[b] = a[b] = c
      return true
    },
  })
  function v_proxy(obj, name, func){
    return new Proxy(obj, {
      get(a,b){ if(b=='global'){return}
        var r = a[b]
        if (typeof b !== 'symbol' && avoid_log.indexOf(b) == -1){
          v_console_log('  [*] ['+name+' get '+b+'] ==>', r)
        }
        if (func && typeof r == 'undefined'){
          r = func(name)
        }
        return r
      },
      set(a,b,c){
        if (typeof b !== 'symbol' && avoid_log.indexOf(b) == -1){
          v_console_log('  [*] ['+name+' set '+b+'] <--', c)
        }
        a[b] = c
        return true
      },
    })
  }
  var v_hasOwnProperty = Object.prototype.hasOwnProperty
  Object.prototype.hasOwnProperty = v_saf(function hasOwnProperty(){
    var r;
    if (this === window){ r = v_hasOwnProperty.apply(__globalThis__, arguments) }
    else{ r = v_hasOwnProperty.apply(this, arguments) }
    v_console_log('  [*] [hasOwnProperty]', this===window?window:this, [].slice.call(arguments), r)
    return r
  })
  Object.defineProperties(__globalThis__, {[Symbol.toStringTag]:{value:'Window'}})
  Object.defineProperties(__globalThis__, Object.getOwnPropertyDescriptors(window))
  Object.setPrototypeOf(__globalThis__, Object.getPrototypeOf(window))
  window.parent = window
  window.top = window
  window.frames = window
  window.self = window
  window.document = v_proxy(v_new(HTMLDocument), "document")
  window.location = v_proxy(v_new(Location), "location")
  window.history = v_proxy(v_new(History), "history")
  window.navigator = v_proxy(v_new(Navigator), "navigator")
  window.screen = v_proxy(v_new(Screen), "screen")
  window.visualViewport = v_proxy(v_new(VisualViewport), "visualViewport")
  window.clientInformation = navigator
  window.performance = v_proxy(v_new(Performance), "performance")
  window.crypto = v_proxy(v_new(Crypto), "crypto")
  window.sessionStorage = v_proxy(v_new(Storage), "sessionStorage")
  window.localStorage = v_proxy(v_new(Storage), "localStorage")

  var win = {
    window: window,
    frames: window,
    parent: window,
    self: window,
    top: window,
  }
  function v_repair_this(){
    win = {
      window: __globalThis__,
      frames: __globalThis__,
      parent: __globalThis__,
      self: __globalThis__,
      top: __globalThis__,
    }
  }
  Object.defineProperties(window, {
    window: {get:function(){return win.window},set:function(e){return true}},
    frames: {get:function(){return win.frames},set:function(e){return true}},
    parent: {get:function(){return win.parent},set:function(e){return true}},
    self:   {get:function(){return win.self},  set:function(e){return true}},
    top:    {get:function(){return win.top},   set:function(e){return true}},
  })

  function _createElement(name){
    var htmlmap = {"HTMLElement":["abbr","address","article","aside","b","bdi","bdo","cite","code","dd","dfn","dt","em","figcaption","figure","footer","header","hgroup","i","kbd","main","mark","nav","noscript","rp","rt","ruby","s","samp","section","small","strong","sub","summary","sup","u","var","wbr"],"HTMLAnchorElement":["a"],"HTMLImageElement":["img"],"HTMLFontElement":["font"],"HTMLOutputElement":["output"],"HTMLAreaElement":["area"],"HTMLInputElement":["input"],"HTMLFormElement":["form"],"HTMLParagraphElement":["p"],"HTMLAudioElement":["audio"],"HTMLLabelElement":["label"],"HTMLFrameElement":["frame"],"HTMLParamElement":["param"],"HTMLBaseElement":["base"],"HTMLLegendElement":["legend"],"HTMLFrameSetElement":["frameset"],"HTMLPictureElement":["picture"],"HTMLBodyElement":["body"],"HTMLLIElement":["li"],"HTMLHeadingElement":["h1","h2","h3","h4","h5","h6"],"HTMLPreElement":["listing","pre","xmp"],"HTMLBRElement":["br"],"HTMLLinkElement":["link"],"HTMLHeadElement":["head"],"HTMLProgressElement":["progress"],"HTMLButtonElement":["button"],"HTMLMapElement":["map"],"HTMLHRElement":["hr"],"HTMLQuoteElement":["blockquote","q"],"HTMLCanvasElement":["canvas"],"HTMLMarqueeElement":["marquee"],"HTMLHtmlElement":["html"],"HTMLScriptElement":["script"],"HTMLDataElement":["data"],"HTMLMediaElement":[],"HTMLIFrameElement":["iframe"],"HTMLTimeElement":["time"],"HTMLDataListElement":["datalist"],"HTMLMenuElement":["menu"],"HTMLSelectElement":["select"],"HTMLTitleElement":["title"],"HTMLDetailsElement":["details"],"HTMLMetaElement":["meta"],"HTMLSlotElement":["slot"],"HTMLTableRowElement":["tr"],"HTMLDialogElement":["dialog"],"HTMLMeterElement":["meter"],"HTMLSourceElement":["source"],"HTMLTableSectionElement":["thead","tbody","tfoot"],"HTMLDirectoryElement":["dir"],"HTMLModElement":["del","ins"],"HTMLSpanElement":["span"],"HTMLTemplateElement":["template"],"HTMLDivElement":["div"],"HTMLObjectElement":["object"],"HTMLStyleElement":["style"],"HTMLTextAreaElement":["textarea"],"HTMLDListElement":["dl"],"HTMLOListElement":["ol"],"HTMLTableCaptionElement":["caption"],"HTMLTrackElement":["track"],"HTMLEmbedElement":["embed"],"HTMLOptGroupElement":["optgroup"],"HTMLTableCellElement":["th","td"],"HTMLUListElement":["ul"],"HTMLFieldSetElement":["fieldset"],"HTMLOptionElement":["option"],"HTMLTableColElement":["col","colgroup"],"HTMLUnknownElement":[],"HTMLTableElement":["table"],"HTMLVideoElement":["video"]}
    var ret, htmlmapkeys = Object.keys(htmlmap)
    name = name.toLocaleLowerCase()
    for (var i = 0; i < htmlmapkeys.length; i++) {
      if (htmlmap[htmlmapkeys[i]].indexOf(name) != -1){
        if (!window[htmlmapkeys[i]]){
          break
        }
        ret = v_new(window[htmlmapkeys[i]])
        break
      }
    }
    if (!ret){ ret = v_proxy(v_new(HTMLUnknownElement), 'HTMLUnknownElement', function(a){return function(){v_console_log(a,...arguments)}}) }
    if (typeof CSSStyleDeclaration != 'undefined') { ret.v_style = v_proxy(v_new(CSSStyleDeclaration), 'style') }
    ret.v_tagName = name.toUpperCase()
    return ret
  }
  function init_cookie(cookie){
    var cache = (cookie || "").trim();
    if (!cache){
      cache = ''
    }else if (cache.charAt(cache.length-1) != ';'){
      cache += '; '
    }else{
      cache += ' '
    }
    Object.defineProperty(Document.prototype, 'cookie', {
      get: function() {
        var r = cache.slice(0,cache.length-2);
        v_console_log('  [*] document -> cookie[get]', r)
        return r
      },
      set: function(c) {
        v_console_log('  [*] document -> cookie[set]', c)
        var ncookie = c.split(";")[0].split("=");
        if (!ncookie.slice(1).join('')){
          return c
        }
        var key = ncookie[0].trim()
        var val = ncookie.slice(1).join('').trim()
        var newc = key+'='+val
        var flag = false;
        var temp = cache.split("; ").map(function(a) {
          if (a.split("=")[0] === key) {
            flag = true;
            return newc;
          }
          return a;
        })
        cache = temp.join("; ");
        if (!flag) {
          cache += newc + "; ";
        }
        return cache;
      }
    });
  }
  function v_hook_href(obj, name, initurl){
    var r = Object.defineProperty(obj, 'href', {
      get: function(){
        if (!(this.protocol) && !(this.hostname)){
          r = ''
        }else{
          r = this.protocol + "//" + this.hostname + (this.port ? ":" + this.port : "") + this.pathname + this.search + this.hash;
        }
        v_console_log(`  [*] ${name||obj.constructor.name} -> href[get]:`, JSON.stringify(r))
        return r
      },
      set: function(href){
        href = href.trim()
        v_console_log(`  [*] ${name||obj.constructor.name} -> href[set]:`, JSON.stringify(href))
        if (href.startsWith("http://") || href.startsWith("https://")){/*ok*/}
        else if(href.startsWith("//")){ href = (this.protocol?this.protocol:'http:') + href}
        else{ href = this.protocol+"//"+this.hostname + (this.port?":"+this.port:"") + '/' + ((href[0]=='/')?href.slice(1):href) }
        var a = href.match(/([^:]+:)\/\/([^/:?#]+):?(\d+)?([^?#]*)?(\?[^#]*)?(#.*)?/);
        this.protocol = a[1] ? a[1] : "";
        this.hostname = a[2] ? a[2] : "";
        this.port     = a[3] ? a[3] : "";
        this.pathname = a[4] ? a[4] : "";
        this.search   = a[5] ? a[5] : "";
        this.hash     = a[6] ? a[6] : "";
        this.host     = this.hostname + (this.port?":"+this.port:"") ;
        this.origin   = this.protocol + "//" + this.hostname + (this.port ? ":" + this.port : "");
      }
    });
    if (initurl && initurl.trim()){ var temp=v_new_toggle; v_new_toggle = true; r.href = initurl; v_new_toggle = temp; }
    return r
  }
  function v_hook_storage(){
    Storage.prototype.clear      = v_saf(function(){          v_console_log(`  [*] Storage -> clear[func]:`); var self=this;Object.keys(self).forEach(function (key) { delete self[key]; }); }, 'clear')
    Storage.prototype.getItem    = v_saf(function(key){       v_console_log(`  [*] Storage -> getItem[func]:`, key); var r = (this.hasOwnProperty(key)?String(this[key]):null); return r}, 'getItem')
    Storage.prototype.setItem    = v_saf(function(key, val){  v_console_log(`  [*] Storage -> setItem[func]:`, key, val); this[key] = (val === undefined)?null:String(val) }, 'setItem')
    Storage.prototype.key        = v_saf(function(key){       v_console_log(`  [*] Storage -> key[func]:`, key); return Object.keys(this)[key||0];} , 'key')
    Storage.prototype.removeItem = v_saf(function(key){       v_console_log(`  [*] Storage -> removeItem[func]:`, key); delete this[key];}, 'removeItem')
    Object.defineProperty(Storage.prototype, 'length', {get: function(){
      if(this===Storage.prototype){ throw TypeError('Illegal invocation') }return Object.keys(this).length
    }})
    window.sessionStorage = new Proxy(sessionStorage,{ set:function(a,b,c){ v_console_log(`  [*] Storage -> [set]:`, b, c); return a[b]=String(c)}, get:function(a,b){ v_console_log(`  [*] Storage -> [get]:`, b, a[b]); return a[b]},})
    window.localStorage = new Proxy(localStorage,{ set:function(a,b,c){ v_console_log(`  [*] Storage -> [set]:`, b, c); return a[b]=String(c)}, get:function(a,b){ v_console_log(`  [*] Storage -> [get]:`, b, a[b]); return a[b]},})
  }
  function v_init_document(){
    Document.prototype.documentElement = v_proxy(_createElement('html'), 'documentElement')
    Document.prototype.createElement = v_saf(function createElement(){ return v_proxy(_createElement(arguments[0]), 'createElement '+arguments[0]) })
    Document.prototype.getElementById = v_saf(function getElementById(name){ var r = v_getele(name, 'getElementById'); v_console_log('  [*] Document -> getElementById', name, r); return r })
    Document.prototype.querySelector = v_saf(function querySelector(name){ var r = v_getele(name, 'querySelector'); v_console_log('  [*] Document -> querySelector', name, r); return r })
    Document.prototype.getElementsByClassName = v_saf(function getElementsByClassName(name){ var r = v_geteles(name, 'getElementsByClassName'); v_console_log('  [*] Document -> getElementsByClassName', name, r); return r })
    Document.prototype.getElementsByName = v_saf(function getElementsByName(name){ var r = v_geteles(name, 'getElementsByName'); v_console_log('  [*] Document -> getElementsByName', name, r); return r })
    Document.prototype.getElementsByTagName = v_saf(function getElementsByTagName(name){ var r = v_geteles(name, 'getElementsByTagName'); v_console_log('  [*] Document -> getElementsByTagName', name, r); return r })
    Document.prototype.getElementsByTagNameNS = v_saf(function getElementsByTagNameNS(name){ var r = v_geteles(name, 'getElementsByTagNameNS'); v_console_log('  [*] Document -> getElementsByTagNameNS', name, r); return r })
    Document.prototype.querySelectorAll = v_saf(function querySelectorAll(name){ var r = v_geteles(name, 'querySelectorAll'); v_console_log('  [*] Document -> querySelectorAll', name, r); return r })
    var v_head = v_new(HTMLHeadElement)
    var v_body = v_new(HTMLBodyElement)
    Object.defineProperties(Document.prototype, {
      head: {get(){ v_console_log("  [*] Document -> head[get]", v_head);return v_proxy(v_head, 'document.head') }},
      body: {get(){ v_console_log("  [*] Document -> body[get]", v_body);return v_proxy(v_body, 'document.body') }},
    })
  }
  function v_init_canvas(){
    HTMLCanvasElement.prototype.getContext = function(){
      if (arguments[0]=='2d'){var r = v_proxy(v_new(CanvasRenderingContext2D), 'canvas2d', function(a){return function(){v_console_log(a,...arguments)}}); return r};
      if (arguments[0]=='webgl' || arguments[0]=='experimental-webgl'){var r = v_proxy(v_new(WebGLRenderingContext), 'webgl', function(a){return function(){v_console_log(a,...arguments)}}); r._canvas = this; return r};
      return null
    }
    HTMLCanvasElement.prototype.toDataURL = function(){return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAEYklEQVR4Xu3UAQkAAAwCwdm/9HI83BLIOdw5AgQIRAQWySkmAQIEzmB5AgIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlACBB1YxAJfjJb2jAAAAAElFTkSuQmCC"}
  }
  var v_start_stamp = +new Date
  var v_fake_stamp = +new Date
  function v_init_event_target(){
    v_events = {}
    function add_event(_this, x){
      if (!v_events[x[0]]){
        v_events[x[0]] = []
      }
      // v_events[x[0]].push([_this, x[1].bind(_this)])
    }
    function _mk_mouse_event(type, canBubble, cancelable, view, detail, screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey, button, relatedTarget){
      if (type == 'click'){
        var m = new v_saf(function PointerEvent(){})
        m.pointerType = "mouse"
      }else{
        var m = new v_saf(function MouseEvent(){})
      }
      m.isTrusted = true
      m.type = type
      m.canBubble = canBubble
      m.cancelable = cancelable
      m.view = view
      m.detail = detail
      m.screenX = screenX; m.movementX = screenX
      m.screenY = screenY; m.movementY = screenY
      m.clientX = clientX; m.layerX = clientX; m.offsetX = clientX; m.pageX = clientX; m.x = clientX;
      m.clientY = clientY; m.layerY = clientY; m.offsetY = clientY; m.pageY = clientY; m.y = clientY;
      m.ctrlKey = ctrlKey
      m.altKey = altKey
      m.shiftKey = shiftKey
      m.metaKey = metaKey
      m.button = button
      m.relatedTarget = relatedTarget
      return m
    }
    function make_mouse(type, x, y){
      return _mk_mouse_event(type, true, true, window, 0, 0, 0, x, y, false, false, false, false, 0, null)
    }
    function mouse_click(x, y){
      for (var i = 0; i < (v_events['click'] || []).length; i++) { v_events['click'][i][1](make_mouse('click', x, y)) }
      for (var i = 0; i < (v_events['mousedown'] || []).length; i++) { v_events['mousedown'][i][1](make_mouse('mousedown', x, y)) }
      for (var i = 0; i < (v_events['mouseup'] || []).length; i++) { v_events['mouseup'][i][1](make_mouse('mouseup', x, y)) }
    }
    var offr = Math.random()
    function make_touch(_this, type, x, y, timeStamp){
      var offx = Math.random()
      var offy = Math.random()
      var t = v_new(new v_saf(function Touch(){}))
      t = clientX = offx + x
      t = clientY = offy + y
      t = force = 1
      t = identifier = 0
      t = pageX = offx + x
      t = pageY = offy + y
      t = radiusX = 28 + offr
      t = radiusY = 28 + offr
      t = rotationAngle = 0
      t = screenX = 0
      t = screenY = 0
      var e = v_new(new v_saf(function TouchEvent(){}))
      e.isTrusted = true
      e.altKey = false
      e.bubbles = true
      e.cancelBubble = false
      e.cancelable = false
      e.changedTouches = e.targetTouches = e.touches = [t]
      e.composed = true
      e.ctrlKey = false
      e.currentTarget = null
      e.defaultPrevented = false
      e.detail = 0
      e.eventPhase = 0
      e.metaKey = false
      e.path = _this == window ? [window] : [_this, window]
      e.returnValue = true
      e.shiftKey = false
      e.sourceCapabilities = new v_saf(function InputDeviceCapabilities(){this.firesTouchEvents = true})
      e.srcElement = _this
      e.target = _this
      e.type = type
      e.timeStamp = timeStamp == undefined ? (new Date - v_start_stamp) : ((v_fake_stamp += Math.random()*20) - v_start_stamp)
      e.view = window
      e.which = 0
      return e
    }
    function make_trace(x1, y1, x2, y2){
      // 贝塞尔曲线
      function step_len(x1, y1, x2, y2){
        var ln = ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5
        return (ln / 10) ^ 0
      }
      var slen = step_len(x1, y1, x2, y2)
      if (slen < 3){
        return []
      }
      function factorial(x){
        for(var y = 1; x > 1;  x--) {
          y *= x
        }
        return y;
      }
      var lp = Math.random()
      var rp = Math.random()
      var xx1 = (x1 + (x2 - x1) / 12 * (4-lp*4)) ^ 0
      var yy1 = (y1 + (y2 - y1) / 12 * (8+lp*4)) ^ 0
      var xx2 = (x1 + (x2 - x1) / 12 * (8+rp*4)) ^ 0
      var yy2 = (y1 + (y2 - y1) / 12 * (4-rp*4)) ^ 0
      var points = [[x1, y1], [xx1, yy1], [xx2, yy2], [x2, y2]]
      var N = points.length
      var n = N - 1
      var traces = []
      var step = slen
      for (var T = 0; T < step+1; T++) {
        var t = T*(1/step)
        var x = 0
        var y = 0
        for (var i = 0; i < N; i++) {
          var B = factorial(n)*t**i*(1-t)**(n-i)/(factorial(i)*factorial(n-i))
          x += points[i][0]*B
          y += points[i][1]*B
        }
        traces.push([x^0, y^0])
      }
      return traces
    }
    function touch(x1, y1, x2, y2){
      if (x2 == undefined && y2 == undefined){
        x2 = x1
        y2 = y1
      }
      var traces = make_trace(x1, y1, x2, y2)
      v_console_log('traces:', traces)
      for (var i = 0; i < (v_events['touchstart'] || []).length; i++) { v_events['touchstart'][i][1](make_touch(v_events['touchstart'][i][0], 'touchstart', x1, y1)) }
      for (var j = 0; j < traces.length; j++) {
        var x = traces[j][0]
        var y = traces[j][0]
        for (var i = 0; i < (v_events['touchmove'] || []).length; i++) { v_events['touchmove'][i][1](make_touch(v_events['touchmove'][i][0], 'touchmove', x, y)) }
      }
      for (var i = 0; i < (v_events['touchend'] || []).length; i++) { v_events['touchend'][i][1](make_touch(v_events['touchend'][i][0], 'touchend', x2, y2)) }
    }
    function mouse_move(x1, y1, x2, y2){
      if (x2 == undefined && y2 == undefined){
        x2 = x1
        y2 = y1
      }
      var traces = make_trace(x1, y1, x2, y2)
      v_console_log('traces:', traces)
      for (var j = 0; j < traces.length; j++) {
        var x = traces[j][0]
        var y = traces[j][0]
        for (var i = 0; i < (v_events['mousemove'] || []).length; i++) { v_events['mousemove'][i][1](make_touch(v_events['mousemove'][i][0], 'mousemove', x, y)) }
      }
    }
    window.make_mouse = make_mouse
    window.mouse_click = mouse_click
    window.mouse_move = mouse_move
    window.touch = touch
    EventTarget.prototype.addEventListener = function(){v_console_log('  [*] EventTarget -> addEventListener[func]', this===window?'[Window]':this===document?'[Document]':this, [].slice.call(arguments)); add_event(this, [].slice.call(arguments)); return null}
    EventTarget.prototype.dispatchEvent = function(){v_console_log('  [*] EventTarget -> dispatchEvent[func]', this===window?'[Window]':this===document?'[Document]':this, [].slice.call(arguments)); add_event(this, [].slice.call(arguments)); return null}
    EventTarget.prototype.removeEventListener = function(){v_console_log('  [*] EventTarget -> removeEventListener[func]', this===window?'[Window]':this===document?'[Document]':this, [].slice.call(arguments)); add_event(this, [].slice.call(arguments)); return null}
  }
  function v_init_Element_prototype(){
    Element.prototype.appendChild            = Element.prototype.appendChild            || v_saf(function appendChild(){v_console_log("  [*] Element -> appendChild[func]", [].slice.call(arguments));})
    Element.prototype.removeChild            = Element.prototype.removeChild            || v_saf(function removeChild(){v_console_log("  [*] Element -> removeChild[func]", [].slice.call(arguments));})
    Element.prototype.getAnimations          = Element.prototype.getAnimations          || v_saf(function getAnimations(){v_console_log("  [*] Element -> getAnimations[func]", [].slice.call(arguments));})
    Element.prototype.getAttribute           = Element.prototype.getAttribute           || v_saf(function getAttribute(){v_console_log("  [*] Element -> getAttribute[func]", [].slice.call(arguments));})
    Element.prototype.getAttributeNS         = Element.prototype.getAttributeNS         || v_saf(function getAttributeNS(){v_console_log("  [*] Element -> getAttributeNS[func]", [].slice.call(arguments));})
    Element.prototype.getAttributeNames      = Element.prototype.getAttributeNames      || v_saf(function getAttributeNames(){v_console_log("  [*] Element -> getAttributeNames[func]", [].slice.call(arguments));})
    Element.prototype.getAttributeNode       = Element.prototype.getAttributeNode       || v_saf(function getAttributeNode(){v_console_log("  [*] Element -> getAttributeNode[func]", [].slice.call(arguments));})
    Element.prototype.getAttributeNodeNS     = Element.prototype.getAttributeNodeNS     || v_saf(function getAttributeNodeNS(){v_console_log("  [*] Element -> getAttributeNodeNS[func]", [].slice.call(arguments));})
    Element.prototype.getBoundingClientRect  = Element.prototype.getBoundingClientRect  || v_saf(function getBoundingClientRect(){v_console_log("  [*] Element -> getBoundingClientRect[func]", [].slice.call(arguments));})
    Element.prototype.getClientRects         = Element.prototype.getClientRects         || v_saf(function getClientRects(){v_console_log("  [*] Element -> getClientRects[func]", [].slice.call(arguments));})
    Element.prototype.getElementsByClassName = Element.prototype.getElementsByClassName || v_saf(function getElementsByClassName(){v_console_log("  [*] Element -> getElementsByClassName[func]", [].slice.call(arguments));})
    Element.prototype.getElementsByTagName   = Element.prototype.getElementsByTagName   || v_saf(function getElementsByTagName(){v_console_log("  [*] Element -> getElementsByTagName[func]", [].slice.call(arguments));})
    Element.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS || v_saf(function getElementsByTagNameNS(){v_console_log("  [*] Element -> getElementsByTagNameNS[func]", [].slice.call(arguments));})
    Element.prototype.getInnerHTML           = Element.prototype.getInnerHTML           || v_saf(function getInnerHTML(){v_console_log("  [*] Element -> getInnerHTML[func]", [].slice.call(arguments));})
    Element.prototype.hasAttribute           = Element.prototype.hasAttribute           || v_saf(function hasAttribute(){v_console_log("  [*] Element -> hasAttribute[func]", [].slice.call(arguments));})
    Element.prototype.hasAttributeNS         = Element.prototype.hasAttributeNS         || v_saf(function hasAttributeNS(){v_console_log("  [*] Element -> hasAttributeNS[func]", [].slice.call(arguments));})
    Element.prototype.hasAttributes          = Element.prototype.hasAttributes          || v_saf(function hasAttributes(){v_console_log("  [*] Element -> hasAttributes[func]", [].slice.call(arguments));})
    Element.prototype.hasPointerCapture      = Element.prototype.hasPointerCapture      || v_saf(function hasPointerCapture(){v_console_log("  [*] Element -> hasPointerCapture[func]", [].slice.call(arguments));})
    Element.prototype.webkitMatchesSelector  = Element.prototype.webkitMatchesSelector  || v_saf(function webkitMatchesSelector(){v_console_log("  [*] Element -> webkitMatchesSelector[func]", [].slice.call(arguments));})
  }
  function v_init_HTMLElement(){
    try{
      Object.defineProperties(HTMLElement.prototype, {
        style: {set: undefined, enumerable: true, configurable: true, get: v_saf(function style(){v_console_log("  [*] HTMLElement -> style[get]", [].slice.call(arguments)); return this.v_style })},
      })
    }catch(e){
      v_console_log(e)
    }
  }
  function v_init_DOMTokenList_prototype(){
    DOMTokenList.prototype.add = DOMTokenList.prototype.add || v_saf(function add(){v_console_log("  [*] DOMTokenList -> add[func]", [].slice.call(arguments));})
    DOMTokenList.prototype.contains = DOMTokenList.prototype.contains || v_saf(function contains(){v_console_log("  [*] DOMTokenList -> contains[func]", [].slice.call(arguments));})
    DOMTokenList.prototype.entries = DOMTokenList.prototype.entries || v_saf(function entries(){v_console_log("  [*] DOMTokenList -> entries[func]", [].slice.call(arguments));})
    DOMTokenList.prototype.forEach = DOMTokenList.prototype.forEach || v_saf(function forEach(){v_console_log("  [*] DOMTokenList -> forEach[func]", [].slice.call(arguments));})
    DOMTokenList.prototype.item = DOMTokenList.prototype.item || v_saf(function item(){v_console_log("  [*] DOMTokenList -> item[func]", [].slice.call(arguments));})
    DOMTokenList.prototype.keys = DOMTokenList.prototype.keys || v_saf(function keys(){v_console_log("  [*] DOMTokenList -> keys[func]", [].slice.call(arguments));})
    DOMTokenList.prototype.length = DOMTokenList.prototype.length || v_saf(function length(){v_console_log("  [*] DOMTokenList -> length[func]", [].slice.call(arguments));})
    DOMTokenList.prototype.remove = DOMTokenList.prototype.remove || v_saf(function remove(){v_console_log("  [*] DOMTokenList -> remove[func]", [].slice.call(arguments));})
    DOMTokenList.prototype.replace = DOMTokenList.prototype.replace || v_saf(function replace(){v_console_log("  [*] DOMTokenList -> replace[func]", [].slice.call(arguments));})
    DOMTokenList.prototype.supports = DOMTokenList.prototype.supports || v_saf(function supports(){v_console_log("  [*] DOMTokenList -> supports[func]", [].slice.call(arguments));})
    DOMTokenList.prototype.toggle = DOMTokenList.prototype.toggle || v_saf(function toggle(){v_console_log("  [*] DOMTokenList -> toggle[func]", [].slice.call(arguments));})
  }
  function v_init_CSSStyleDeclaration_prototype(){
    CSSStyleDeclaration.prototype["zoom"] = ''
    CSSStyleDeclaration.prototype["resize"] = ''
    CSSStyleDeclaration.prototype["text-rendering"] = ''
    CSSStyleDeclaration.prototype["text-align-last"] = ''
  }
  function v_init_PointerEvent_prototype(){
    PointerEvent.prototype.getCoalescedEvents = v_saf(function getCoalescedEvents(){v_console_log("  [*] PointerEvent -> getCoalescedEvents[func]", [].slice.call(arguments));})
    PointerEvent.prototype.getPredictedEvents = v_saf(function getPredictedEvents(){v_console_log("  [*] PointerEvent -> getPredictedEvents[func]", [].slice.call(arguments));})
  }
  function v_init_PerformanceTiming_prototype(){
    try{
      Object.defineProperties(PerformanceTiming.prototype, {
        connectEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function connectEnd(){v_console_log("  [*] PerformanceTiming -> connectEnd[get]", [].slice.call(arguments));})},
        connectStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function connectStart(){v_console_log("  [*] PerformanceTiming -> connectStart[get]", [].slice.call(arguments));})},
        domComplete: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domComplete(){v_console_log("  [*] PerformanceTiming -> domComplete[get]", [].slice.call(arguments));})},
        domContentLoadedEventEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domContentLoadedEventEnd(){v_console_log("  [*] PerformanceTiming -> domContentLoadedEventEnd[get]", [].slice.call(arguments));})},
        domContentLoadedEventStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domContentLoadedEventStart(){v_console_log("  [*] PerformanceTiming -> domContentLoadedEventStart[get]", [].slice.call(arguments));})},
        domInteractive: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domInteractive(){v_console_log("  [*] PerformanceTiming -> domInteractive[get]", [].slice.call(arguments));})},
        domLoading: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domLoading(){v_console_log("  [*] PerformanceTiming -> domLoading[get]", [].slice.call(arguments));})},
        domainLookupEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domainLookupEnd(){v_console_log("  [*] PerformanceTiming -> domainLookupEnd[get]", [].slice.call(arguments));})},
        domainLookupStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domainLookupStart(){v_console_log("  [*] PerformanceTiming -> domainLookupStart[get]", [].slice.call(arguments));})},
        fetchStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function fetchStart(){v_console_log("  [*] PerformanceTiming -> fetchStart[get]", [].slice.call(arguments));})},
        loadEventEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function loadEventEnd(){v_console_log("  [*] PerformanceTiming -> loadEventEnd[get]", [].slice.call(arguments));})},
        loadEventStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function loadEventStart(){v_console_log("  [*] PerformanceTiming -> loadEventStart[get]", [].slice.call(arguments));})},
        navigationStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function navigationStart(){v_console_log("  [*] PerformanceTiming -> navigationStart[get]", [].slice.call(arguments));})},
        redirectEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function redirectEnd(){v_console_log("  [*] PerformanceTiming -> redirectEnd[get]", [].slice.call(arguments));})},
        redirectStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function redirectStart(){v_console_log("  [*] PerformanceTiming -> redirectStart[get]", [].slice.call(arguments));})},
        requestStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function requestStart(){v_console_log("  [*] PerformanceTiming -> requestStart[get]", [].slice.call(arguments));})},
        responseEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function responseEnd(){v_console_log("  [*] PerformanceTiming -> responseEnd[get]", [].slice.call(arguments));})},
        responseStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function responseStart(){v_console_log("  [*] PerformanceTiming -> responseStart[get]", [].slice.call(arguments));})},
        secureConnectionStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function secureConnectionStart(){v_console_log("  [*] PerformanceTiming -> secureConnectionStart[get]", [].slice.call(arguments));})},
        unloadEventEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function unloadEventEnd(){v_console_log("  [*] PerformanceTiming -> unloadEventEnd[get]", [].slice.call(arguments));})},
        unloadEventStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function unloadEventStart(){v_console_log("  [*] PerformanceTiming -> unloadEventStart[get]", [].slice.call(arguments));})},
      })
    }catch(e){}
  }
  function mk_atob_btoa(r){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t=new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1);return{atob:function(r){var a,e,o,h,c,i,n;for(i=r.length,c=0,n="";c<i;){do{a=t[255&r.charCodeAt(c++)]}while(c<i&&-1==a);if(-1==a)break;do{e=t[255&r.charCodeAt(c++)]}while(c<i&&-1==e);if(-1==e)break;n+=String.fromCharCode(a<<2|(48&e)>>4);do{if(61==(o=255&r.charCodeAt(c++)))return n;o=t[o]}while(c<i&&-1==o);if(-1==o)break;n+=String.fromCharCode((15&e)<<4|(60&o)>>2);do{if(61==(h=255&r.charCodeAt(c++)))return n;h=t[h]}while(c<i&&-1==h);if(-1==h)break;n+=String.fromCharCode((3&o)<<6|h)}return n},btoa:function(r){var t,e,o,h,c,i;for(o=r.length,e=0,t="";e<o;){if(h=255&r.charCodeAt(e++),e==o){t+=a.charAt(h>>2),t+=a.charAt((3&h)<<4),t+="==";break}if(c=r.charCodeAt(e++),e==o){t+=a.charAt(h>>2),t+=a.charAt((3&h)<<4|(240&c)>>4),t+=a.charAt((15&c)<<2),t+="=";break}i=r.charCodeAt(e++),t+=a.charAt(h>>2),t+=a.charAt((3&h)<<4|(240&c)>>4),t+=a.charAt((15&c)<<2|(192&i)>>6),t+=a.charAt(63&i)}return t}}}
  var atob_btoa = mk_atob_btoa()
  window.btoa = window.btoa || v_saf(atob_btoa.btoa, 'btoa')
  window.atob = window.atob || v_saf(atob_btoa.atob, 'atob')
  window.postMessage = v_saf(function(){v_console_log('  [*] [postMessage]', arguments)}, 'postMessage')
  window.matchMedia = v_saf(function(){v_console_log('  [*] [matchMedia]', arguments); return v_proxy({}, 'matchMedia{}')}, 'matchMedia')

  init_cookie("jrpl=VTRQTiOHQQED7qAgN3FJGeJAJxFQ5Che; njrpl=VTRQTiOHQQED7qAgN3FJGeJAJxFQ5Che; dilx=O0E0u85xSdv8sWPc20kMP; api_uid=CkjIDmjkuOwe2QC5Kr29Ag==; _nano_fp=XpmylpCxX09aX0TxXT_8M7yTP7dix10jCYjMgtpW; webp=1; pdd_vds=gaYfClBNeecBssNxudYndxTwebuTBnfnensmfdxxLdceffessswLulDDTDwB")
  v_hook_href(window.location, 'location', "https://mobile.pinduoduo.com/?page_id=10002_1759817207805_2q7ofg0di7&is_back=1&bsch_is_search_mall=&bsch_show_active_page=")
  Location.prototype.toString = v_saf(function toString(){ return "https://mobile.pinduoduo.com/?page_id=10002_1759817207805_2q7ofg0di7&is_back=1&bsch_is_search_mall=&bsch_show_active_page=" })
  window.alert = v_saf(function alert(){})
  v_hook_storage()
  v_init_HTMLElement()
  v_init_document()
  v_init_canvas()
  v_init_event_target()
  v_init_Element_prototype()
  v_init_DOMTokenList_prototype()
  v_init_CSSStyleDeclaration_prototype()
  v_init_PointerEvent_prototype()
  v_init_PerformanceTiming_prototype()
  window.innerWidth = 1071
  window.innerHeight = 918
  window.outerHeight = 1047
  window.outerWidth = 1087
  window.isSecureContext = true
  window.origin = location.origin
  function v_getele(name, func){
    if(name.toLocaleLowerCase() == "[data-hidden-chunk-id=chunk-aeorfl9akam]" && func == "querySelector"){ return v_new(HTMLDivElement) }
    if(name.toLocaleLowerCase() == "[data-chunk-id=chunk-aeorfl9akam]" && func == "querySelector"){ return v_new(HTMLDivElement) }
    if(name.toLocaleLowerCase() == "__loadable_required_chunks__" && func == "getElementById"){ return v_new(HTMLScriptElement) }
    if(name.toLocaleLowerCase() == "__loadable_required_chunks___ext" && func == "getElementById"){ return v_new(HTMLScriptElement) }
    if(name.toLocaleLowerCase() == "main" && func == "getElementById"){ return v_new(HTMLDivElement) }
    return null
  }
  function v_geteles(name, func){
    if(name == "img" && func == "getElementsByTagName"){ return [v_new(HTMLImageElement),v_new(HTMLImageElement),v_new(HTMLImageElement),v_new(HTMLImageElement),v_new(HTMLImageElement),v_new(HTMLImageElement),v_new(HTMLImageElement),v_new(HTMLImageElement),v_new(HTMLImageElement),v_new(HTMLImageElement),v_new(HTMLImageElement),v_new(HTMLImageElement),v_new(HTMLImageElement),v_new(HTMLImageElement),v_new(HTMLImageElement),v_new(HTMLImageElement),v_new(HTMLImageElement),v_new(HTMLImageElement),v_new(HTMLImageElement),v_new(HTMLImageElement),v_new(HTMLImageElement),v_new(HTMLImageElement),v_new(HTMLImageElement),v_new(HTMLImageElement),v_new(HTMLImageElement),v_new(HTMLImageElement),v_new(HTMLImageElement),v_new(HTMLImageElement),v_new(HTMLImageElement),v_new(HTMLImageElement),v_new(HTMLImageElement),v_new(HTMLImageElement),v_new(HTMLImageElement),v_new(HTMLImageElement),v_new(HTMLImageElement),v_new(HTMLImageElement),v_new(HTMLImageElement)] }
    if(name == "script" && func == "getElementsByTagName"){ return [v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement)] }
    if(name == "link" && func == "getElementsByTagName"){ return [v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement)] }
    if(name == "style" && func == "getElementsByTagName"){ return [v_new(HTMLStyleElement),v_new(HTMLStyleElement)] }
    if(name == "pdd-go-to-app-pc" && func == "getElementsByClassName"){ return [v_new(HTMLDivElement)] }
    if(name == "category-container" && func == "getElementsByClassName"){ return [v_new(HTMLDivElement)] }
    return null
  }
  var v_Date = Date;
  var v_base_time = +new Date;
  (function(){
    function ftime(){
      return new v_Date() - v_base_time + v_to_time
    }
    Date = function(_Date) {
      var bind = Function.bind;
      var unbind = bind.bind(bind);
      function instantiate(constructor, args) {
        return new (unbind(constructor, null).apply(null, args));
      }
      var names = Object.getOwnPropertyNames(_Date);
      for (var i = 0; i < names.length; i++) {
        if (names[i]in Date)
          continue;
        var desc = Object.getOwnPropertyDescriptor(_Date, names[i]);
        Object.defineProperty(Date, names[i], desc);
      }
      function Date() {
        var date = instantiate(_Date, [ftime()]);
        return date;
      }
      Date.prototype = _Date.prototype
      return v_saf(Date);
    }(Date);
    Date.now = v_saf(function now(){ return ftime() })
  })();
  var v_to_time = +new v_Date
  // var v_to_time = +new v_Date('Sat Sep 03 2022 11:11:58 GMT+0800') // 自定义起始时间

  v_repair_this() // 修复 window 指向global
  v_new_toggle = false




  // v_console_log = function(){} // 关闭日志输出
  // setTimeout = function(){} // 关闭定时器
  // setInterval = function(){} // 关闭定时器
  return window
})();