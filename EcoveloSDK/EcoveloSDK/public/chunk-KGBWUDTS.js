import {
  __async
} from "./chunk-UESUV5PM.js";

// node_modules/@capacitor/core/dist/index.js
var ExceptionCode;
(function(ExceptionCode2) {
  ExceptionCode2["Unimplemented"] = "UNIMPLEMENTED";
  ExceptionCode2["Unavailable"] = "UNAVAILABLE";
})(ExceptionCode || (ExceptionCode = {}));
var CapacitorException = class extends Error {
  constructor(message, code, data) {
    super(message);
    this.message = message;
    this.code = code;
    this.data = data;
  }
};
var getPlatformId = (win) => {
  var _a, _b;
  if (win === null || win === void 0 ? void 0 : win.androidBridge) {
    return "android";
  } else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
    return "ios";
  } else {
    return "web";
  }
};
var createCapacitor = (win) => {
  const capCustomPlatform = win.CapacitorCustomPlatform || null;
  const cap = win.Capacitor || {};
  const Plugins = cap.Plugins = cap.Plugins || {};
  const getPlatform = () => {
    return capCustomPlatform !== null ? capCustomPlatform.name : getPlatformId(win);
  };
  const isNativePlatform = () => getPlatform() !== "web";
  const isPluginAvailable = (pluginName) => {
    const plugin = registeredPlugins.get(pluginName);
    if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
      return true;
    }
    if (getPluginHeader(pluginName)) {
      return true;
    }
    return false;
  };
  const getPluginHeader = (pluginName) => {
    var _a;
    return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find((h) => h.name === pluginName);
  };
  const handleError = (err) => win.console.error(err);
  const registeredPlugins = /* @__PURE__ */ new Map();
  const registerPlugin2 = (pluginName, jsImplementations = {}) => {
    const registeredPlugin = registeredPlugins.get(pluginName);
    if (registeredPlugin) {
      console.warn(`Capacitor plugin "${pluginName}" already registered. Cannot register plugins twice.`);
      return registeredPlugin.proxy;
    }
    const platform = getPlatform();
    const pluginHeader = getPluginHeader(pluginName);
    let jsImplementation;
    const loadPluginImplementation = () => __async(null, null, function* () {
      if (!jsImplementation && platform in jsImplementations) {
        jsImplementation = typeof jsImplementations[platform] === "function" ? jsImplementation = yield jsImplementations[platform]() : jsImplementation = jsImplementations[platform];
      } else if (capCustomPlatform !== null && !jsImplementation && "web" in jsImplementations) {
        jsImplementation = typeof jsImplementations["web"] === "function" ? jsImplementation = yield jsImplementations["web"]() : jsImplementation = jsImplementations["web"];
      }
      return jsImplementation;
    });
    const createPluginMethod = (impl, prop) => {
      var _a, _b;
      if (pluginHeader) {
        const methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find((m) => prop === m.name);
        if (methodHeader) {
          if (methodHeader.rtype === "promise") {
            return (options) => cap.nativePromise(pluginName, prop.toString(), options);
          } else {
            return (options, callback) => cap.nativeCallback(pluginName, prop.toString(), options, callback);
          }
        } else if (impl) {
          return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
        }
      } else if (impl) {
        return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
      } else {
        throw new CapacitorException(`"${pluginName}" plugin is not implemented on ${platform}`, ExceptionCode.Unimplemented);
      }
    };
    const createPluginMethodWrapper = (prop) => {
      let remove;
      const wrapper = (...args) => {
        const p = loadPluginImplementation().then((impl) => {
          const fn = createPluginMethod(impl, prop);
          if (fn) {
            const p2 = fn(...args);
            remove = p2 === null || p2 === void 0 ? void 0 : p2.remove;
            return p2;
          } else {
            throw new CapacitorException(`"${pluginName}.${prop}()" is not implemented on ${platform}`, ExceptionCode.Unimplemented);
          }
        });
        if (prop === "addListener") {
          p.remove = () => __async(null, null, function* () {
            return remove();
          });
        }
        return p;
      };
      wrapper.toString = () => `${prop.toString()}() { [capacitor code] }`;
      Object.defineProperty(wrapper, "name", {
        value: prop,
        writable: false,
        configurable: false
      });
      return wrapper;
    };
    const addListener = createPluginMethodWrapper("addListener");
    const removeListener = createPluginMethodWrapper("removeListener");
    const addListenerNative = (eventName, callback) => {
      const call = addListener({
        eventName
      }, callback);
      const remove = () => __async(null, null, function* () {
        const callbackId = yield call;
        removeListener({
          eventName,
          callbackId
        }, callback);
      });
      const p = new Promise((resolve) => call.then(() => resolve({
        remove
      })));
      p.remove = () => __async(null, null, function* () {
        console.warn(`Using addListener() without 'await' is deprecated.`);
        yield remove();
      });
      return p;
    };
    const proxy = new Proxy({}, {
      get(_, prop) {
        switch (prop) {
          // https://github.com/facebook/react/issues/20030
          case "$$typeof":
            return void 0;
          case "toJSON":
            return () => ({});
          case "addListener":
            return pluginHeader ? addListenerNative : addListener;
          case "removeListener":
            return removeListener;
          default:
            return createPluginMethodWrapper(prop);
        }
      }
    });
    Plugins[pluginName] = proxy;
    registeredPlugins.set(pluginName, {
      name: pluginName,
      proxy,
      platforms: /* @__PURE__ */ new Set([...Object.keys(jsImplementations), ...pluginHeader ? [platform] : []])
    });
    return proxy;
  };
  if (!cap.convertFileSrc) {
    cap.convertFileSrc = (filePath) => filePath;
  }
  cap.getPlatform = getPlatform;
  cap.handleError = handleError;
  cap.isNativePlatform = isNativePlatform;
  cap.isPluginAvailable = isPluginAvailable;
  cap.registerPlugin = registerPlugin2;
  cap.Exception = CapacitorException;
  cap.DEBUG = !!cap.DEBUG;
  cap.isLoggingEnabled = !!cap.isLoggingEnabled;
  return cap;
};
var initCapacitorGlobal = (win) => win.Capacitor = createCapacitor(win);
var Capacitor = /* @__PURE__ */ initCapacitorGlobal(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
var registerPlugin = Capacitor.registerPlugin;
var WebPlugin = class {
  constructor() {
    this.listeners = {};
    this.retainedEventArguments = {};
    this.windowListeners = {};
  }
  addListener(eventName, listenerFunc) {
    let firstListener = false;
    const listeners = this.listeners[eventName];
    if (!listeners) {
      this.listeners[eventName] = [];
      firstListener = true;
    }
    this.listeners[eventName].push(listenerFunc);
    const windowListener = this.windowListeners[eventName];
    if (windowListener && !windowListener.registered) {
      this.addWindowListener(windowListener);
    }
    if (firstListener) {
      this.sendRetainedArgumentsForEvent(eventName);
    }
    const remove = () => __async(this, null, function* () {
      return this.removeListener(eventName, listenerFunc);
    });
    const p = Promise.resolve({
      remove
    });
    return p;
  }
  removeAllListeners() {
    return __async(this, null, function* () {
      this.listeners = {};
      for (const listener in this.windowListeners) {
        this.removeWindowListener(this.windowListeners[listener]);
      }
      this.windowListeners = {};
    });
  }
  notifyListeners(eventName, data, retainUntilConsumed) {
    const listeners = this.listeners[eventName];
    if (!listeners) {
      if (retainUntilConsumed) {
        let args = this.retainedEventArguments[eventName];
        if (!args) {
          args = [];
        }
        args.push(data);
        this.retainedEventArguments[eventName] = args;
      }
      return;
    }
    listeners.forEach((listener) => listener(data));
  }
  hasListeners(eventName) {
    var _a;
    return !!((_a = this.listeners[eventName]) === null || _a === void 0 ? void 0 : _a.length);
  }
  registerWindowListener(windowEventName, pluginEventName) {
    this.windowListeners[pluginEventName] = {
      registered: false,
      windowEventName,
      pluginEventName,
      handler: (event) => {
        this.notifyListeners(pluginEventName, event);
      }
    };
  }
  unimplemented(msg = "not implemented") {
    return new Capacitor.Exception(msg, ExceptionCode.Unimplemented);
  }
  unavailable(msg = "not available") {
    return new Capacitor.Exception(msg, ExceptionCode.Unavailable);
  }
  removeListener(eventName, listenerFunc) {
    return __async(this, null, function* () {
      const listeners = this.listeners[eventName];
      if (!listeners) {
        return;
      }
      const index = listeners.indexOf(listenerFunc);
      this.listeners[eventName].splice(index, 1);
      if (!this.listeners[eventName].length) {
        this.removeWindowListener(this.windowListeners[eventName]);
      }
    });
  }
  addWindowListener(handle) {
    window.addEventListener(handle.windowEventName, handle.handler);
    handle.registered = true;
  }
  removeWindowListener(handle) {
    if (!handle) {
      return;
    }
    window.removeEventListener(handle.windowEventName, handle.handler);
    handle.registered = false;
  }
  sendRetainedArgumentsForEvent(eventName) {
    const args = this.retainedEventArguments[eventName];
    if (!args) {
      return;
    }
    delete this.retainedEventArguments[eventName];
    args.forEach((arg) => {
      this.notifyListeners(eventName, arg);
    });
  }
};
var encode = (str) => encodeURIComponent(str).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
var decode = (str) => str.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
var CapacitorCookiesPluginWeb = class extends WebPlugin {
  getCookies() {
    return __async(this, null, function* () {
      const cookies = document.cookie;
      const cookieMap = {};
      cookies.split(";").forEach((cookie) => {
        if (cookie.length <= 0) return;
        let [key, value] = cookie.replace(/=/, "CAP_COOKIE").split("CAP_COOKIE");
        key = decode(key).trim();
        value = decode(value).trim();
        cookieMap[key] = value;
      });
      return cookieMap;
    });
  }
  setCookie(options) {
    return __async(this, null, function* () {
      try {
        const encodedKey = encode(options.key);
        const encodedValue = encode(options.value);
        const expires = `; expires=${(options.expires || "").replace("expires=", "")}`;
        const path = (options.path || "/").replace("path=", "");
        const domain = options.url != null && options.url.length > 0 ? `domain=${options.url}` : "";
        document.cookie = `${encodedKey}=${encodedValue || ""}${expires}; path=${path}; ${domain};`;
      } catch (error) {
        return Promise.reject(error);
      }
    });
  }
  deleteCookie(options) {
    return __async(this, null, function* () {
      try {
        document.cookie = `${options.key}=; Max-Age=0`;
      } catch (error) {
        return Promise.reject(error);
      }
    });
  }
  clearCookies() {
    return __async(this, null, function* () {
      try {
        const cookies = document.cookie.split(";") || [];
        for (const cookie of cookies) {
          document.cookie = cookie.replace(/^ +/, "").replace(/=.*/, `=;expires=${(/* @__PURE__ */ new Date()).toUTCString()};path=/`);
        }
      } catch (error) {
        return Promise.reject(error);
      }
    });
  }
  clearAllCookies() {
    return __async(this, null, function* () {
      try {
        yield this.clearCookies();
      } catch (error) {
        return Promise.reject(error);
      }
    });
  }
};
var CapacitorCookies = registerPlugin("CapacitorCookies", {
  web: () => new CapacitorCookiesPluginWeb()
});
var readBlobAsBase64 = (blob) => __async(null, null, function* () {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result;
      resolve(base64String.indexOf(",") >= 0 ? base64String.split(",")[1] : base64String);
    };
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(blob);
  });
});
var normalizeHttpHeaders = (headers = {}) => {
  const originalKeys = Object.keys(headers);
  const loweredKeys = Object.keys(headers).map((k) => k.toLocaleLowerCase());
  const normalized = loweredKeys.reduce((acc, key, index) => {
    acc[key] = headers[originalKeys[index]];
    return acc;
  }, {});
  return normalized;
};
var buildUrlParams = (params, shouldEncode = true) => {
  if (!params) return null;
  const output = Object.entries(params).reduce((accumulator, entry) => {
    const [key, value] = entry;
    let encodedValue;
    let item;
    if (Array.isArray(value)) {
      item = "";
      value.forEach((str) => {
        encodedValue = shouldEncode ? encodeURIComponent(str) : str;
        item += `${key}=${encodedValue}&`;
      });
      item.slice(0, -1);
    } else {
      encodedValue = shouldEncode ? encodeURIComponent(value) : value;
      item = `${key}=${encodedValue}`;
    }
    return `${accumulator}&${item}`;
  }, "");
  return output.substr(1);
};
var buildRequestInit = (options, extra = {}) => {
  const output = Object.assign({
    method: options.method || "GET",
    headers: options.headers
  }, extra);
  const headers = normalizeHttpHeaders(options.headers);
  const type = headers["content-type"] || "";
  if (typeof options.data === "string") {
    output.body = options.data;
  } else if (type.includes("application/x-www-form-urlencoded")) {
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(options.data || {})) {
      params.set(key, value);
    }
    output.body = params.toString();
  } else if (type.includes("multipart/form-data") || options.data instanceof FormData) {
    const form = new FormData();
    if (options.data instanceof FormData) {
      options.data.forEach((value, key) => {
        form.append(key, value);
      });
    } else {
      for (const key of Object.keys(options.data)) {
        form.append(key, options.data[key]);
      }
    }
    output.body = form;
    const headers2 = new Headers(output.headers);
    headers2.delete("content-type");
    output.headers = headers2;
  } else if (type.includes("application/json") || typeof options.data === "object") {
    output.body = JSON.stringify(options.data);
  }
  return output;
};
var CapacitorHttpPluginWeb = class extends WebPlugin {
  /**
   * Perform an Http request given a set of options
   * @param options Options to build the HTTP request
   */
  request(options) {
    return __async(this, null, function* () {
      const requestInit = buildRequestInit(options, options.webFetchExtra);
      const urlParams = buildUrlParams(options.params, options.shouldEncodeUrlParams);
      const url = urlParams ? `${options.url}?${urlParams}` : options.url;
      const response = yield fetch(url, requestInit);
      const contentType = response.headers.get("content-type") || "";
      let {
        responseType = "text"
      } = response.ok ? options : {};
      if (contentType.includes("application/json")) {
        responseType = "json";
      }
      let data;
      let blob;
      switch (responseType) {
        case "arraybuffer":
        case "blob":
          blob = yield response.blob();
          data = yield readBlobAsBase64(blob);
          break;
        case "json":
          data = yield response.json();
          break;
        case "document":
        case "text":
        default:
          data = yield response.text();
      }
      const headers = {};
      response.headers.forEach((value, key) => {
        headers[key] = value;
      });
      return {
        data,
        headers,
        status: response.status,
        url: response.url
      };
    });
  }
  /**
   * Perform an Http GET request given a set of options
   * @param options Options to build the HTTP request
   */
  get(options) {
    return __async(this, null, function* () {
      return this.request(Object.assign(Object.assign({}, options), {
        method: "GET"
      }));
    });
  }
  /**
   * Perform an Http POST request given a set of options
   * @param options Options to build the HTTP request
   */
  post(options) {
    return __async(this, null, function* () {
      return this.request(Object.assign(Object.assign({}, options), {
        method: "POST"
      }));
    });
  }
  /**
   * Perform an Http PUT request given a set of options
   * @param options Options to build the HTTP request
   */
  put(options) {
    return __async(this, null, function* () {
      return this.request(Object.assign(Object.assign({}, options), {
        method: "PUT"
      }));
    });
  }
  /**
   * Perform an Http PATCH request given a set of options
   * @param options Options to build the HTTP request
   */
  patch(options) {
    return __async(this, null, function* () {
      return this.request(Object.assign(Object.assign({}, options), {
        method: "PATCH"
      }));
    });
  }
  /**
   * Perform an Http DELETE request given a set of options
   * @param options Options to build the HTTP request
   */
  delete(options) {
    return __async(this, null, function* () {
      return this.request(Object.assign(Object.assign({}, options), {
        method: "DELETE"
      }));
    });
  }
};
var CapacitorHttp = registerPlugin("CapacitorHttp", {
  web: () => new CapacitorHttpPluginWeb()
});
var SystemBarsStyle;
(function(SystemBarsStyle2) {
  SystemBarsStyle2["Dark"] = "DARK";
  SystemBarsStyle2["Light"] = "LIGHT";
  SystemBarsStyle2["Default"] = "DEFAULT";
})(SystemBarsStyle || (SystemBarsStyle = {}));
var SystemBarType;
(function(SystemBarType2) {
  SystemBarType2["StatusBar"] = "StatusBar";
  SystemBarType2["NavigationBar"] = "NavigationBar";
})(SystemBarType || (SystemBarType = {}));
var SystemBarsPluginWeb = class extends WebPlugin {
  setStyle() {
    return __async(this, null, function* () {
      this.unavailable("not available for web");
    });
  }
  setAnimation() {
    return __async(this, null, function* () {
      this.unavailable("not available for web");
    });
  }
  show() {
    return __async(this, null, function* () {
      this.unavailable("not available for web");
    });
  }
  hide() {
    return __async(this, null, function* () {
      this.unavailable("not available for web");
    });
  }
};
var SystemBars = registerPlugin("SystemBars", {
  web: () => new SystemBarsPluginWeb()
});

export {
  ExceptionCode,
  CapacitorException,
  Capacitor,
  registerPlugin,
  WebPlugin,
  buildRequestInit
};
/*! Bundled license information:

@capacitor/core/dist/index.js:
  (*! Capacitor: https://capacitorjs.com/ - MIT License *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY2FwYWNpdG9yL2NvcmUvZGlzdC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgQ2FwYWNpdG9yOiBodHRwczovL2NhcGFjaXRvcmpzLmNvbS8gLSBNSVQgTGljZW5zZSAqL1xudmFyIEV4Y2VwdGlvbkNvZGU7XG4oZnVuY3Rpb24gKEV4Y2VwdGlvbkNvZGUpIHtcbiAgLyoqXG4gICAqIEFQSSBpcyBub3QgaW1wbGVtZW50ZWQuXG4gICAqXG4gICAqIFRoaXMgdXN1YWxseSBtZWFucyB0aGUgQVBJIGNhbid0IGJlIHVzZWQgYmVjYXVzZSBpdCBpcyBub3QgaW1wbGVtZW50ZWQgZm9yXG4gICAqIHRoZSBjdXJyZW50IHBsYXRmb3JtLlxuICAgKi9cbiAgRXhjZXB0aW9uQ29kZVtcIlVuaW1wbGVtZW50ZWRcIl0gPSBcIlVOSU1QTEVNRU5URURcIjtcbiAgLyoqXG4gICAqIEFQSSBpcyBub3QgYXZhaWxhYmxlLlxuICAgKlxuICAgKiBUaGlzIG1lYW5zIHRoZSBBUEkgY2FuJ3QgYmUgdXNlZCByaWdodCBub3cgYmVjYXVzZTpcbiAgICogICAtIGl0IGlzIGN1cnJlbnRseSBtaXNzaW5nIGEgcHJlcmVxdWlzaXRlLCBzdWNoIGFzIG5ldHdvcmsgY29ubmVjdGl2aXR5XG4gICAqICAgLSBpdCByZXF1aXJlcyBhIHBhcnRpY3VsYXIgcGxhdGZvcm0gb3IgYnJvd3NlciB2ZXJzaW9uXG4gICAqL1xuICBFeGNlcHRpb25Db2RlW1wiVW5hdmFpbGFibGVcIl0gPSBcIlVOQVZBSUxBQkxFXCI7XG59KShFeGNlcHRpb25Db2RlIHx8IChFeGNlcHRpb25Db2RlID0ge30pKTtcbmNsYXNzIENhcGFjaXRvckV4Y2VwdGlvbiBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZSwgY29kZSwgZGF0YSkge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5jb2RlID0gY29kZTtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICB9XG59XG5jb25zdCBnZXRQbGF0Zm9ybUlkID0gd2luID0+IHtcbiAgdmFyIF9hLCBfYjtcbiAgaWYgKHdpbiA9PT0gbnVsbCB8fCB3aW4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHdpbi5hbmRyb2lkQnJpZGdlKSB7XG4gICAgcmV0dXJuICdhbmRyb2lkJztcbiAgfSBlbHNlIGlmICgoX2IgPSAoX2EgPSB3aW4gPT09IG51bGwgfHwgd2luID09PSB2b2lkIDAgPyB2b2lkIDAgOiB3aW4ud2Via2l0KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubWVzc2FnZUhhbmRsZXJzKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuYnJpZGdlKSB7XG4gICAgcmV0dXJuICdpb3MnO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAnd2ViJztcbiAgfVxufTtcbmNvbnN0IGNyZWF0ZUNhcGFjaXRvciA9IHdpbiA9PiB7XG4gIGNvbnN0IGNhcEN1c3RvbVBsYXRmb3JtID0gd2luLkNhcGFjaXRvckN1c3RvbVBsYXRmb3JtIHx8IG51bGw7XG4gIGNvbnN0IGNhcCA9IHdpbi5DYXBhY2l0b3IgfHwge307XG4gIGNvbnN0IFBsdWdpbnMgPSBjYXAuUGx1Z2lucyA9IGNhcC5QbHVnaW5zIHx8IHt9O1xuICBjb25zdCBnZXRQbGF0Zm9ybSA9ICgpID0+IHtcbiAgICByZXR1cm4gY2FwQ3VzdG9tUGxhdGZvcm0gIT09IG51bGwgPyBjYXBDdXN0b21QbGF0Zm9ybS5uYW1lIDogZ2V0UGxhdGZvcm1JZCh3aW4pO1xuICB9O1xuICBjb25zdCBpc05hdGl2ZVBsYXRmb3JtID0gKCkgPT4gZ2V0UGxhdGZvcm0oKSAhPT0gJ3dlYic7XG4gIGNvbnN0IGlzUGx1Z2luQXZhaWxhYmxlID0gcGx1Z2luTmFtZSA9PiB7XG4gICAgY29uc3QgcGx1Z2luID0gcmVnaXN0ZXJlZFBsdWdpbnMuZ2V0KHBsdWdpbk5hbWUpO1xuICAgIGlmIChwbHVnaW4gPT09IG51bGwgfHwgcGx1Z2luID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwbHVnaW4ucGxhdGZvcm1zLmhhcyhnZXRQbGF0Zm9ybSgpKSkge1xuICAgICAgLy8gSlMgaW1wbGVtZW50YXRpb24gYXZhaWxhYmxlIGZvciB0aGUgY3VycmVudCBwbGF0Zm9ybS5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoZ2V0UGx1Z2luSGVhZGVyKHBsdWdpbk5hbWUpKSB7XG4gICAgICAvLyBOYXRpdmUgaW1wbGVtZW50YXRpb24gYXZhaWxhYmxlLlxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbiAgY29uc3QgZ2V0UGx1Z2luSGVhZGVyID0gcGx1Z2luTmFtZSA9PiB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiAoX2EgPSBjYXAuUGx1Z2luSGVhZGVycykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZpbmQoaCA9PiBoLm5hbWUgPT09IHBsdWdpbk5hbWUpO1xuICB9O1xuICBjb25zdCBoYW5kbGVFcnJvciA9IGVyciA9PiB3aW4uY29uc29sZS5lcnJvcihlcnIpO1xuICBjb25zdCByZWdpc3RlcmVkUGx1Z2lucyA9IG5ldyBNYXAoKTtcbiAgY29uc3QgcmVnaXN0ZXJQbHVnaW4gPSAocGx1Z2luTmFtZSwganNJbXBsZW1lbnRhdGlvbnMgPSB7fSkgPT4ge1xuICAgIGNvbnN0IHJlZ2lzdGVyZWRQbHVnaW4gPSByZWdpc3RlcmVkUGx1Z2lucy5nZXQocGx1Z2luTmFtZSk7XG4gICAgaWYgKHJlZ2lzdGVyZWRQbHVnaW4pIHtcbiAgICAgIGNvbnNvbGUud2FybihgQ2FwYWNpdG9yIHBsdWdpbiBcIiR7cGx1Z2luTmFtZX1cIiBhbHJlYWR5IHJlZ2lzdGVyZWQuIENhbm5vdCByZWdpc3RlciBwbHVnaW5zIHR3aWNlLmApO1xuICAgICAgcmV0dXJuIHJlZ2lzdGVyZWRQbHVnaW4ucHJveHk7XG4gICAgfVxuICAgIGNvbnN0IHBsYXRmb3JtID0gZ2V0UGxhdGZvcm0oKTtcbiAgICBjb25zdCBwbHVnaW5IZWFkZXIgPSBnZXRQbHVnaW5IZWFkZXIocGx1Z2luTmFtZSk7XG4gICAgbGV0IGpzSW1wbGVtZW50YXRpb247XG4gICAgY29uc3QgbG9hZFBsdWdpbkltcGxlbWVudGF0aW9uID0gYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKCFqc0ltcGxlbWVudGF0aW9uICYmIHBsYXRmb3JtIGluIGpzSW1wbGVtZW50YXRpb25zKSB7XG4gICAgICAgIGpzSW1wbGVtZW50YXRpb24gPSB0eXBlb2YganNJbXBsZW1lbnRhdGlvbnNbcGxhdGZvcm1dID09PSAnZnVuY3Rpb24nID8ganNJbXBsZW1lbnRhdGlvbiA9IGF3YWl0IGpzSW1wbGVtZW50YXRpb25zW3BsYXRmb3JtXSgpIDoganNJbXBsZW1lbnRhdGlvbiA9IGpzSW1wbGVtZW50YXRpb25zW3BsYXRmb3JtXTtcbiAgICAgIH0gZWxzZSBpZiAoY2FwQ3VzdG9tUGxhdGZvcm0gIT09IG51bGwgJiYgIWpzSW1wbGVtZW50YXRpb24gJiYgJ3dlYicgaW4ganNJbXBsZW1lbnRhdGlvbnMpIHtcbiAgICAgICAganNJbXBsZW1lbnRhdGlvbiA9IHR5cGVvZiBqc0ltcGxlbWVudGF0aW9uc1snd2ViJ10gPT09ICdmdW5jdGlvbicgPyBqc0ltcGxlbWVudGF0aW9uID0gYXdhaXQganNJbXBsZW1lbnRhdGlvbnNbJ3dlYiddKCkgOiBqc0ltcGxlbWVudGF0aW9uID0ganNJbXBsZW1lbnRhdGlvbnNbJ3dlYiddO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGpzSW1wbGVtZW50YXRpb247XG4gICAgfTtcbiAgICBjb25zdCBjcmVhdGVQbHVnaW5NZXRob2QgPSAoaW1wbCwgcHJvcCkgPT4ge1xuICAgICAgdmFyIF9hLCBfYjtcbiAgICAgIGlmIChwbHVnaW5IZWFkZXIpIHtcbiAgICAgICAgY29uc3QgbWV0aG9kSGVhZGVyID0gcGx1Z2luSGVhZGVyID09PSBudWxsIHx8IHBsdWdpbkhlYWRlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGx1Z2luSGVhZGVyLm1ldGhvZHMuZmluZChtID0+IHByb3AgPT09IG0ubmFtZSk7XG4gICAgICAgIGlmIChtZXRob2RIZWFkZXIpIHtcbiAgICAgICAgICBpZiAobWV0aG9kSGVhZGVyLnJ0eXBlID09PSAncHJvbWlzZScpIHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zID0+IGNhcC5uYXRpdmVQcm9taXNlKHBsdWdpbk5hbWUsIHByb3AudG9TdHJpbmcoKSwgb3B0aW9ucyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAob3B0aW9ucywgY2FsbGJhY2spID0+IGNhcC5uYXRpdmVDYWxsYmFjayhwbHVnaW5OYW1lLCBwcm9wLnRvU3RyaW5nKCksIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoaW1wbCkge1xuICAgICAgICAgIHJldHVybiAoX2EgPSBpbXBsW3Byb3BdKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYmluZChpbXBsKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpbXBsKSB7XG4gICAgICAgIHJldHVybiAoX2IgPSBpbXBsW3Byb3BdKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuYmluZChpbXBsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBDYXBhY2l0b3JFeGNlcHRpb24oYFwiJHtwbHVnaW5OYW1lfVwiIHBsdWdpbiBpcyBub3QgaW1wbGVtZW50ZWQgb24gJHtwbGF0Zm9ybX1gLCBFeGNlcHRpb25Db2RlLlVuaW1wbGVtZW50ZWQpO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgY3JlYXRlUGx1Z2luTWV0aG9kV3JhcHBlciA9IHByb3AgPT4ge1xuICAgICAgbGV0IHJlbW92ZTtcbiAgICAgIGNvbnN0IHdyYXBwZXIgPSAoLi4uYXJncykgPT4ge1xuICAgICAgICBjb25zdCBwID0gbG9hZFBsdWdpbkltcGxlbWVudGF0aW9uKCkudGhlbihpbXBsID0+IHtcbiAgICAgICAgICBjb25zdCBmbiA9IGNyZWF0ZVBsdWdpbk1ldGhvZChpbXBsLCBwcm9wKTtcbiAgICAgICAgICBpZiAoZm4pIHtcbiAgICAgICAgICAgIGNvbnN0IHAgPSBmbiguLi5hcmdzKTtcbiAgICAgICAgICAgIHJlbW92ZSA9IHAgPT09IG51bGwgfHwgcCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcC5yZW1vdmU7XG4gICAgICAgICAgICByZXR1cm4gcDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IENhcGFjaXRvckV4Y2VwdGlvbihgXCIke3BsdWdpbk5hbWV9LiR7cHJvcH0oKVwiIGlzIG5vdCBpbXBsZW1lbnRlZCBvbiAke3BsYXRmb3JtfWAsIEV4Y2VwdGlvbkNvZGUuVW5pbXBsZW1lbnRlZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHByb3AgPT09ICdhZGRMaXN0ZW5lcicpIHtcbiAgICAgICAgICBwLnJlbW92ZSA9IGFzeW5jICgpID0+IHJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwO1xuICAgICAgfTtcbiAgICAgIC8vIFNvbWUgZmxhaXIg4pyoXG4gICAgICB3cmFwcGVyLnRvU3RyaW5nID0gKCkgPT4gYCR7cHJvcC50b1N0cmluZygpfSgpIHsgW2NhcGFjaXRvciBjb2RlXSB9YDtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3cmFwcGVyLCAnbmFtZScsIHtcbiAgICAgICAgdmFsdWU6IHByb3AsXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gd3JhcHBlcjtcbiAgICB9O1xuICAgIGNvbnN0IGFkZExpc3RlbmVyID0gY3JlYXRlUGx1Z2luTWV0aG9kV3JhcHBlcignYWRkTGlzdGVuZXInKTtcbiAgICBjb25zdCByZW1vdmVMaXN0ZW5lciA9IGNyZWF0ZVBsdWdpbk1ldGhvZFdyYXBwZXIoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgY29uc3QgYWRkTGlzdGVuZXJOYXRpdmUgPSAoZXZlbnROYW1lLCBjYWxsYmFjaykgPT4ge1xuICAgICAgY29uc3QgY2FsbCA9IGFkZExpc3RlbmVyKHtcbiAgICAgICAgZXZlbnROYW1lXG4gICAgICB9LCBjYWxsYmFjayk7XG4gICAgICBjb25zdCByZW1vdmUgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrSWQgPSBhd2FpdCBjYWxsO1xuICAgICAgICByZW1vdmVMaXN0ZW5lcih7XG4gICAgICAgICAgZXZlbnROYW1lLFxuICAgICAgICAgIGNhbGxiYWNrSWRcbiAgICAgICAgfSwgY2FsbGJhY2spO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IHAgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IGNhbGwudGhlbigoKSA9PiByZXNvbHZlKHtcbiAgICAgICAgcmVtb3ZlXG4gICAgICB9KSkpO1xuICAgICAgcC5yZW1vdmUgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUud2FybihgVXNpbmcgYWRkTGlzdGVuZXIoKSB3aXRob3V0ICdhd2FpdCcgaXMgZGVwcmVjYXRlZC5gKTtcbiAgICAgICAgYXdhaXQgcmVtb3ZlKCk7XG4gICAgICB9O1xuICAgICAgcmV0dXJuIHA7XG4gICAgfTtcbiAgICBjb25zdCBwcm94eSA9IG5ldyBQcm94eSh7fSwge1xuICAgICAgZ2V0KF8sIHByb3ApIHtcbiAgICAgICAgc3dpdGNoIChwcm9wKSB7XG4gICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8yMDAzMFxuICAgICAgICAgIGNhc2UgJyQkdHlwZW9mJzpcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgY2FzZSAndG9KU09OJzpcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiAoe30pO1xuICAgICAgICAgIGNhc2UgJ2FkZExpc3RlbmVyJzpcbiAgICAgICAgICAgIHJldHVybiBwbHVnaW5IZWFkZXIgPyBhZGRMaXN0ZW5lck5hdGl2ZSA6IGFkZExpc3RlbmVyO1xuICAgICAgICAgIGNhc2UgJ3JlbW92ZUxpc3RlbmVyJzpcbiAgICAgICAgICAgIHJldHVybiByZW1vdmVMaXN0ZW5lcjtcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZVBsdWdpbk1ldGhvZFdyYXBwZXIocHJvcCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBQbHVnaW5zW3BsdWdpbk5hbWVdID0gcHJveHk7XG4gICAgcmVnaXN0ZXJlZFBsdWdpbnMuc2V0KHBsdWdpbk5hbWUsIHtcbiAgICAgIG5hbWU6IHBsdWdpbk5hbWUsXG4gICAgICBwcm94eSxcbiAgICAgIHBsYXRmb3JtczogbmV3IFNldChbLi4uT2JqZWN0LmtleXMoanNJbXBsZW1lbnRhdGlvbnMpLCAuLi4ocGx1Z2luSGVhZGVyID8gW3BsYXRmb3JtXSA6IFtdKV0pXG4gICAgfSk7XG4gICAgcmV0dXJuIHByb3h5O1xuICB9O1xuICAvLyBBZGQgaW4gY29udmVydEZpbGVTcmMgZm9yIHdlYiwgaXQgd2lsbCBhbHJlYWR5IGJlIGF2YWlsYWJsZSBpbiBuYXRpdmUgY29udGV4dFxuICBpZiAoIWNhcC5jb252ZXJ0RmlsZVNyYykge1xuICAgIGNhcC5jb252ZXJ0RmlsZVNyYyA9IGZpbGVQYXRoID0+IGZpbGVQYXRoO1xuICB9XG4gIGNhcC5nZXRQbGF0Zm9ybSA9IGdldFBsYXRmb3JtO1xuICBjYXAuaGFuZGxlRXJyb3IgPSBoYW5kbGVFcnJvcjtcbiAgY2FwLmlzTmF0aXZlUGxhdGZvcm0gPSBpc05hdGl2ZVBsYXRmb3JtO1xuICBjYXAuaXNQbHVnaW5BdmFpbGFibGUgPSBpc1BsdWdpbkF2YWlsYWJsZTtcbiAgY2FwLnJlZ2lzdGVyUGx1Z2luID0gcmVnaXN0ZXJQbHVnaW47XG4gIGNhcC5FeGNlcHRpb24gPSBDYXBhY2l0b3JFeGNlcHRpb247XG4gIGNhcC5ERUJVRyA9ICEhY2FwLkRFQlVHO1xuICBjYXAuaXNMb2dnaW5nRW5hYmxlZCA9ICEhY2FwLmlzTG9nZ2luZ0VuYWJsZWQ7XG4gIHJldHVybiBjYXA7XG59O1xuY29uc3QgaW5pdENhcGFjaXRvckdsb2JhbCA9IHdpbiA9PiB3aW4uQ2FwYWNpdG9yID0gY3JlYXRlQ2FwYWNpdG9yKHdpbik7XG5jb25zdCBDYXBhY2l0b3IgPSAvKiNfX1BVUkVfXyovaW5pdENhcGFjaXRvckdsb2JhbCh0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIDogdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB7fSk7XG5jb25zdCByZWdpc3RlclBsdWdpbiA9IENhcGFjaXRvci5yZWdpc3RlclBsdWdpbjtcblxuLyoqXG4gKiBCYXNlIGNsYXNzIHdlYiBwbHVnaW5zIHNob3VsZCBleHRlbmQuXG4gKi9cbmNsYXNzIFdlYlBsdWdpbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubGlzdGVuZXJzID0ge307XG4gICAgdGhpcy5yZXRhaW5lZEV2ZW50QXJndW1lbnRzID0ge307XG4gICAgdGhpcy53aW5kb3dMaXN0ZW5lcnMgPSB7fTtcbiAgfVxuICBhZGRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyRnVuYykge1xuICAgIGxldCBmaXJzdExpc3RlbmVyID0gZmFsc2U7XG4gICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXTtcbiAgICBpZiAoIWxpc3RlbmVycykge1xuICAgICAgdGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXSA9IFtdO1xuICAgICAgZmlyc3RMaXN0ZW5lciA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0ucHVzaChsaXN0ZW5lckZ1bmMpO1xuICAgIC8vIElmIHdlIGhhdmVuJ3QgYWRkZWQgYSB3aW5kb3cgbGlzdGVuZXIgZm9yIHRoaXMgZXZlbnQgYW5kIGl0IHJlcXVpcmVzIG9uZSxcbiAgICAvLyBnbyBhaGVhZCBhbmQgYWRkIGl0XG4gICAgY29uc3Qgd2luZG93TGlzdGVuZXIgPSB0aGlzLndpbmRvd0xpc3RlbmVyc1tldmVudE5hbWVdO1xuICAgIGlmICh3aW5kb3dMaXN0ZW5lciAmJiAhd2luZG93TGlzdGVuZXIucmVnaXN0ZXJlZCkge1xuICAgICAgdGhpcy5hZGRXaW5kb3dMaXN0ZW5lcih3aW5kb3dMaXN0ZW5lcik7XG4gICAgfVxuICAgIGlmIChmaXJzdExpc3RlbmVyKSB7XG4gICAgICB0aGlzLnNlbmRSZXRhaW5lZEFyZ3VtZW50c0ZvckV2ZW50KGV2ZW50TmFtZSk7XG4gICAgfVxuICAgIGNvbnN0IHJlbW92ZSA9IGFzeW5jICgpID0+IHRoaXMucmVtb3ZlTGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lckZ1bmMpO1xuICAgIGNvbnN0IHAgPSBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgcmVtb3ZlXG4gICAgfSk7XG4gICAgcmV0dXJuIHA7XG4gIH1cbiAgYXN5bmMgcmVtb3ZlQWxsTGlzdGVuZXJzKCkge1xuICAgIHRoaXMubGlzdGVuZXJzID0ge307XG4gICAgZm9yIChjb25zdCBsaXN0ZW5lciBpbiB0aGlzLndpbmRvd0xpc3RlbmVycykge1xuICAgICAgdGhpcy5yZW1vdmVXaW5kb3dMaXN0ZW5lcih0aGlzLndpbmRvd0xpc3RlbmVyc1tsaXN0ZW5lcl0pO1xuICAgIH1cbiAgICB0aGlzLndpbmRvd0xpc3RlbmVycyA9IHt9O1xuICB9XG4gIG5vdGlmeUxpc3RlbmVycyhldmVudE5hbWUsIGRhdGEsIHJldGFpblVudGlsQ29uc3VtZWQpIHtcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdO1xuICAgIGlmICghbGlzdGVuZXJzKSB7XG4gICAgICBpZiAocmV0YWluVW50aWxDb25zdW1lZCkge1xuICAgICAgICBsZXQgYXJncyA9IHRoaXMucmV0YWluZWRFdmVudEFyZ3VtZW50c1tldmVudE5hbWVdO1xuICAgICAgICBpZiAoIWFyZ3MpIHtcbiAgICAgICAgICBhcmdzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgYXJncy5wdXNoKGRhdGEpO1xuICAgICAgICB0aGlzLnJldGFpbmVkRXZlbnRBcmd1bWVudHNbZXZlbnROYW1lXSA9IGFyZ3M7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxpc3RlbmVycy5mb3JFYWNoKGxpc3RlbmVyID0+IGxpc3RlbmVyKGRhdGEpKTtcbiAgfVxuICBoYXNMaXN0ZW5lcnMoZXZlbnROYW1lKSB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiAhISgoX2EgPSB0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubGVuZ3RoKTtcbiAgfVxuICByZWdpc3RlcldpbmRvd0xpc3RlbmVyKHdpbmRvd0V2ZW50TmFtZSwgcGx1Z2luRXZlbnROYW1lKSB7XG4gICAgdGhpcy53aW5kb3dMaXN0ZW5lcnNbcGx1Z2luRXZlbnROYW1lXSA9IHtcbiAgICAgIHJlZ2lzdGVyZWQ6IGZhbHNlLFxuICAgICAgd2luZG93RXZlbnROYW1lLFxuICAgICAgcGx1Z2luRXZlbnROYW1lLFxuICAgICAgaGFuZGxlcjogZXZlbnQgPT4ge1xuICAgICAgICB0aGlzLm5vdGlmeUxpc3RlbmVycyhwbHVnaW5FdmVudE5hbWUsIGV2ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIHVuaW1wbGVtZW50ZWQobXNnID0gJ25vdCBpbXBsZW1lbnRlZCcpIHtcbiAgICByZXR1cm4gbmV3IENhcGFjaXRvci5FeGNlcHRpb24obXNnLCBFeGNlcHRpb25Db2RlLlVuaW1wbGVtZW50ZWQpO1xuICB9XG4gIHVuYXZhaWxhYmxlKG1zZyA9ICdub3QgYXZhaWxhYmxlJykge1xuICAgIHJldHVybiBuZXcgQ2FwYWNpdG9yLkV4Y2VwdGlvbihtc2csIEV4Y2VwdGlvbkNvZGUuVW5hdmFpbGFibGUpO1xuICB9XG4gIGFzeW5jIHJlbW92ZUxpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXJGdW5jKSB7XG4gICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXTtcbiAgICBpZiAoIWxpc3RlbmVycykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpbmRleCA9IGxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyRnVuYyk7XG4gICAgdGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIC8vIElmIHRoZXJlIGFyZSBubyBtb3JlIGxpc3RlbmVycyBmb3IgdGhpcyB0eXBlIG9mIGV2ZW50LFxuICAgIC8vIHJlbW92ZSB0aGUgd2luZG93IGxpc3RlbmVyXG4gICAgaWYgKCF0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdLmxlbmd0aCkge1xuICAgICAgdGhpcy5yZW1vdmVXaW5kb3dMaXN0ZW5lcih0aGlzLndpbmRvd0xpc3RlbmVyc1tldmVudE5hbWVdKTtcbiAgICB9XG4gIH1cbiAgYWRkV2luZG93TGlzdGVuZXIoaGFuZGxlKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoaGFuZGxlLndpbmRvd0V2ZW50TmFtZSwgaGFuZGxlLmhhbmRsZXIpO1xuICAgIGhhbmRsZS5yZWdpc3RlcmVkID0gdHJ1ZTtcbiAgfVxuICByZW1vdmVXaW5kb3dMaXN0ZW5lcihoYW5kbGUpIHtcbiAgICBpZiAoIWhhbmRsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihoYW5kbGUud2luZG93RXZlbnROYW1lLCBoYW5kbGUuaGFuZGxlcik7XG4gICAgaGFuZGxlLnJlZ2lzdGVyZWQgPSBmYWxzZTtcbiAgfVxuICBzZW5kUmV0YWluZWRBcmd1bWVudHNGb3JFdmVudChldmVudE5hbWUpIHtcbiAgICBjb25zdCBhcmdzID0gdGhpcy5yZXRhaW5lZEV2ZW50QXJndW1lbnRzW2V2ZW50TmFtZV07XG4gICAgaWYgKCFhcmdzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGRlbGV0ZSB0aGlzLnJldGFpbmVkRXZlbnRBcmd1bWVudHNbZXZlbnROYW1lXTtcbiAgICBhcmdzLmZvckVhY2goYXJnID0+IHtcbiAgICAgIHRoaXMubm90aWZ5TGlzdGVuZXJzKGV2ZW50TmFtZSwgYXJnKTtcbiAgICB9KTtcbiAgfVxufVxuY29uc3QgV2ViVmlldyA9IC8qI19fUFVSRV9fKi9yZWdpc3RlclBsdWdpbignV2ViVmlldycpO1xuLyoqKioqKioqIEVORCBXRUIgVklFVyBQTFVHSU4gKioqKioqKiovXG4vKioqKioqKiogQ09PS0lFUyBQTFVHSU4gKioqKioqKiovXG4vKipcbiAqIFNhZmVseSB3ZWIgZW5jb2RlIGEgc3RyaW5nIHZhbHVlIChpbnNwaXJlZCBieSBqcy1jb29raWUpXG4gKiBAcGFyYW0gc3RyIFRoZSBzdHJpbmcgdmFsdWUgdG8gZW5jb2RlXG4gKi9cbmNvbnN0IGVuY29kZSA9IHN0ciA9PiBlbmNvZGVVUklDb21wb25lbnQoc3RyKS5yZXBsYWNlKC8lKDJbMzQ2Ql18NUV8NjB8N0MpL2csIGRlY29kZVVSSUNvbXBvbmVudCkucmVwbGFjZSgvWygpXS9nLCBlc2NhcGUpO1xuLyoqXG4gKiBTYWZlbHkgd2ViIGRlY29kZSBhIHN0cmluZyB2YWx1ZSAoaW5zcGlyZWQgYnkganMtY29va2llKVxuICogQHBhcmFtIHN0ciBUaGUgc3RyaW5nIHZhbHVlIHRvIGRlY29kZVxuICovXG5jb25zdCBkZWNvZGUgPSBzdHIgPT4gc3RyLnJlcGxhY2UoLyglW1xcZEEtRl17Mn0pKy9naSwgZGVjb2RlVVJJQ29tcG9uZW50KTtcbmNsYXNzIENhcGFjaXRvckNvb2tpZXNQbHVnaW5XZWIgZXh0ZW5kcyBXZWJQbHVnaW4ge1xuICBhc3luYyBnZXRDb29raWVzKCkge1xuICAgIGNvbnN0IGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWU7XG4gICAgY29uc3QgY29va2llTWFwID0ge307XG4gICAgY29va2llcy5zcGxpdCgnOycpLmZvckVhY2goY29va2llID0+IHtcbiAgICAgIGlmIChjb29raWUubGVuZ3RoIDw9IDApIHJldHVybjtcbiAgICAgIC8vIFJlcGxhY2UgZmlyc3QgXCI9XCIgd2l0aCBDQVBfQ09PS0lFIHRvIHByZXZlbnQgc3BsaXR0aW5nIG9uIGFkZGl0aW9uYWwgXCI9XCJcbiAgICAgIGxldCBba2V5LCB2YWx1ZV0gPSBjb29raWUucmVwbGFjZSgvPS8sICdDQVBfQ09PS0lFJykuc3BsaXQoJ0NBUF9DT09LSUUnKTtcbiAgICAgIGtleSA9IGRlY29kZShrZXkpLnRyaW0oKTtcbiAgICAgIHZhbHVlID0gZGVjb2RlKHZhbHVlKS50cmltKCk7XG4gICAgICBjb29raWVNYXBba2V5XSA9IHZhbHVlO1xuICAgIH0pO1xuICAgIHJldHVybiBjb29raWVNYXA7XG4gIH1cbiAgYXN5bmMgc2V0Q29va2llKG9wdGlvbnMpIHtcbiAgICB0cnkge1xuICAgICAgLy8gU2FmZWx5IEVuY29kZWQgS2V5L1ZhbHVlXG4gICAgICBjb25zdCBlbmNvZGVkS2V5ID0gZW5jb2RlKG9wdGlvbnMua2V5KTtcbiAgICAgIGNvbnN0IGVuY29kZWRWYWx1ZSA9IGVuY29kZShvcHRpb25zLnZhbHVlKTtcbiAgICAgIC8vIENsZWFuICYgc2FuaXRpemUgb3B0aW9uc1xuICAgICAgY29uc3QgZXhwaXJlcyA9IGA7IGV4cGlyZXM9JHsob3B0aW9ucy5leHBpcmVzIHx8ICcnKS5yZXBsYWNlKCdleHBpcmVzPScsICcnKX1gOyAvLyBEZWZhdWx0IGlzIFwiOyBleHBpcmVzPVwiXG4gICAgICBjb25zdCBwYXRoID0gKG9wdGlvbnMucGF0aCB8fCAnLycpLnJlcGxhY2UoJ3BhdGg9JywgJycpOyAvLyBEZWZhdWx0IGlzIFwicGF0aD0vXCJcbiAgICAgIGNvbnN0IGRvbWFpbiA9IG9wdGlvbnMudXJsICE9IG51bGwgJiYgb3B0aW9ucy51cmwubGVuZ3RoID4gMCA/IGBkb21haW49JHtvcHRpb25zLnVybH1gIDogJyc7XG4gICAgICBkb2N1bWVudC5jb29raWUgPSBgJHtlbmNvZGVkS2V5fT0ke2VuY29kZWRWYWx1ZSB8fCAnJ30ke2V4cGlyZXN9OyBwYXRoPSR7cGF0aH07ICR7ZG9tYWlufTtgO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgIH1cbiAgfVxuICBhc3luYyBkZWxldGVDb29raWUob3B0aW9ucykge1xuICAgIHRyeSB7XG4gICAgICBkb2N1bWVudC5jb29raWUgPSBgJHtvcHRpb25zLmtleX09OyBNYXgtQWdlPTBgO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgIH1cbiAgfVxuICBhc3luYyBjbGVhckNvb2tpZXMoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKSB8fCBbXTtcbiAgICAgIGZvciAoY29uc3QgY29va2llIG9mIGNvb2tpZXMpIHtcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLnJlcGxhY2UoL14gKy8sICcnKS5yZXBsYWNlKC89LiovLCBgPTtleHBpcmVzPSR7bmV3IERhdGUoKS50b1VUQ1N0cmluZygpfTtwYXRoPS9gKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgY2xlYXJBbGxDb29raWVzKCkge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLmNsZWFyQ29va2llcygpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgIH1cbiAgfVxufVxuY29uc3QgQ2FwYWNpdG9yQ29va2llcyA9IHJlZ2lzdGVyUGx1Z2luKCdDYXBhY2l0b3JDb29raWVzJywge1xuICB3ZWI6ICgpID0+IG5ldyBDYXBhY2l0b3JDb29raWVzUGx1Z2luV2ViKClcbn0pO1xuLy8gVVRJTElUWSBGVU5DVElPTlNcbi8qKlxuICogUmVhZCBpbiBhIEJsb2IgdmFsdWUgYW5kIHJldHVybiBpdCBhcyBhIGJhc2U2NCBzdHJpbmdcbiAqIEBwYXJhbSBibG9iIFRoZSBibG9iIHZhbHVlIHRvIGNvbnZlcnQgdG8gYSBiYXNlNjQgc3RyaW5nXG4gKi9cbmNvbnN0IHJlYWRCbG9iQXNCYXNlNjQgPSBhc3luYyBibG9iID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcbiAgICBjb25zdCBiYXNlNjRTdHJpbmcgPSByZWFkZXIucmVzdWx0O1xuICAgIC8vIHJlbW92ZSBwcmVmaXggXCJkYXRhOmFwcGxpY2F0aW9uL3BkZjtiYXNlNjQsXCJcbiAgICByZXNvbHZlKGJhc2U2NFN0cmluZy5pbmRleE9mKCcsJykgPj0gMCA/IGJhc2U2NFN0cmluZy5zcGxpdCgnLCcpWzFdIDogYmFzZTY0U3RyaW5nKTtcbiAgfTtcbiAgcmVhZGVyLm9uZXJyb3IgPSBlcnJvciA9PiByZWplY3QoZXJyb3IpO1xuICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcbn0pO1xuLyoqXG4gKiBOb3JtYWxpemUgYW4gSHR0cEhlYWRlcnMgbWFwIGJ5IGxvd2VyY2FzaW5nIGFsbCBvZiB0aGUgdmFsdWVzXG4gKiBAcGFyYW0gaGVhZGVycyBUaGUgSHR0cEhlYWRlcnMgb2JqZWN0IHRvIG5vcm1hbGl6ZVxuICovXG5jb25zdCBub3JtYWxpemVIdHRwSGVhZGVycyA9IChoZWFkZXJzID0ge30pID0+IHtcbiAgY29uc3Qgb3JpZ2luYWxLZXlzID0gT2JqZWN0LmtleXMoaGVhZGVycyk7XG4gIGNvbnN0IGxvd2VyZWRLZXlzID0gT2JqZWN0LmtleXMoaGVhZGVycykubWFwKGsgPT4gay50b0xvY2FsZUxvd2VyQ2FzZSgpKTtcbiAgY29uc3Qgbm9ybWFsaXplZCA9IGxvd2VyZWRLZXlzLnJlZHVjZSgoYWNjLCBrZXksIGluZGV4KSA9PiB7XG4gICAgYWNjW2tleV0gPSBoZWFkZXJzW29yaWdpbmFsS2V5c1tpbmRleF1dO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbiAgcmV0dXJuIG5vcm1hbGl6ZWQ7XG59O1xuLyoqXG4gKiBCdWlsZHMgYSBzdHJpbmcgb2YgdXJsIHBhcmFtZXRlcnMgdGhhdFxuICogQHBhcmFtIHBhcmFtcyBBIG1hcCBvZiB1cmwgcGFyYW1ldGVyc1xuICogQHBhcmFtIHNob3VsZEVuY29kZSB0cnVlIGlmIHlvdSBzaG91bGQgZW5jb2RlVVJJQ29tcG9uZW50KCkgdGhlIHZhbHVlcyAodHJ1ZSBieSBkZWZhdWx0KVxuICovXG5jb25zdCBidWlsZFVybFBhcmFtcyA9IChwYXJhbXMsIHNob3VsZEVuY29kZSA9IHRydWUpID0+IHtcbiAgaWYgKCFwYXJhbXMpIHJldHVybiBudWxsO1xuICBjb25zdCBvdXRwdXQgPSBPYmplY3QuZW50cmllcyhwYXJhbXMpLnJlZHVjZSgoYWNjdW11bGF0b3IsIGVudHJ5KSA9PiB7XG4gICAgY29uc3QgW2tleSwgdmFsdWVdID0gZW50cnk7XG4gICAgbGV0IGVuY29kZWRWYWx1ZTtcbiAgICBsZXQgaXRlbTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIGl0ZW0gPSAnJztcbiAgICAgIHZhbHVlLmZvckVhY2goc3RyID0+IHtcbiAgICAgICAgZW5jb2RlZFZhbHVlID0gc2hvdWxkRW5jb2RlID8gZW5jb2RlVVJJQ29tcG9uZW50KHN0cikgOiBzdHI7XG4gICAgICAgIGl0ZW0gKz0gYCR7a2V5fT0ke2VuY29kZWRWYWx1ZX0mYDtcbiAgICAgIH0pO1xuICAgICAgLy8gbGFzdCBjaGFyYWN0ZXIgd2lsbCBhbHdheXMgYmUgXCImXCIgc28gc2xpY2UgaXQgb2ZmXG4gICAgICBpdGVtLnNsaWNlKDAsIC0xKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZW5jb2RlZFZhbHVlID0gc2hvdWxkRW5jb2RlID8gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSA6IHZhbHVlO1xuICAgICAgaXRlbSA9IGAke2tleX09JHtlbmNvZGVkVmFsdWV9YDtcbiAgICB9XG4gICAgcmV0dXJuIGAke2FjY3VtdWxhdG9yfSYke2l0ZW19YDtcbiAgfSwgJycpO1xuICAvLyBSZW1vdmUgaW5pdGlhbCBcIiZcIiBmcm9tIHRoZSByZWR1Y2VcbiAgcmV0dXJuIG91dHB1dC5zdWJzdHIoMSk7XG59O1xuLyoqXG4gKiBCdWlsZCB0aGUgUmVxdWVzdEluaXQgb2JqZWN0IGJhc2VkIG9uIHRoZSBvcHRpb25zIHBhc3NlZCBpbnRvIHRoZSBpbml0aWFsIHJlcXVlc3RcbiAqIEBwYXJhbSBvcHRpb25zIFRoZSBIdHRwIHBsdWdpbiBvcHRpb25zXG4gKiBAcGFyYW0gZXh0cmEgQW55IGV4dHJhIFJlcXVlc3RJbml0IHZhbHVlc1xuICovXG5jb25zdCBidWlsZFJlcXVlc3RJbml0ID0gKG9wdGlvbnMsIGV4dHJhID0ge30pID0+IHtcbiAgY29uc3Qgb3V0cHV0ID0gT2JqZWN0LmFzc2lnbih7XG4gICAgbWV0aG9kOiBvcHRpb25zLm1ldGhvZCB8fCAnR0VUJyxcbiAgICBoZWFkZXJzOiBvcHRpb25zLmhlYWRlcnNcbiAgfSwgZXh0cmEpO1xuICAvLyBHZXQgdGhlIGNvbnRlbnQtdHlwZVxuICBjb25zdCBoZWFkZXJzID0gbm9ybWFsaXplSHR0cEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKTtcbiAgY29uc3QgdHlwZSA9IGhlYWRlcnNbJ2NvbnRlbnQtdHlwZSddIHx8ICcnO1xuICAvLyBJZiBib2R5IGlzIGFscmVhZHkgYSBzdHJpbmcsIHRoZW4gcGFzcyBpdCB0aHJvdWdoIGFzLWlzLlxuICBpZiAodHlwZW9mIG9wdGlvbnMuZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICBvdXRwdXQuYm9keSA9IG9wdGlvbnMuZGF0YTtcbiAgfVxuICAvLyBCdWlsZCByZXF1ZXN0IGluaXRpYWxpemVycyBiYXNlZCBvZmYgb2YgY29udGVudC10eXBlXG4gIGVsc2UgaWYgKHR5cGUuaW5jbHVkZXMoJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG9wdGlvbnMuZGF0YSB8fCB7fSkpIHtcbiAgICAgIHBhcmFtcy5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgfVxuICAgIG91dHB1dC5ib2R5ID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSBpZiAodHlwZS5pbmNsdWRlcygnbXVsdGlwYXJ0L2Zvcm0tZGF0YScpIHx8IG9wdGlvbnMuZGF0YSBpbnN0YW5jZW9mIEZvcm1EYXRhKSB7XG4gICAgY29uc3QgZm9ybSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGlmIChvcHRpb25zLmRhdGEgaW5zdGFuY2VvZiBGb3JtRGF0YSkge1xuICAgICAgb3B0aW9ucy5kYXRhLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgZm9ybS5hcHBlbmQoa2V5LCB2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMob3B0aW9ucy5kYXRhKSkge1xuICAgICAgICBmb3JtLmFwcGVuZChrZXksIG9wdGlvbnMuZGF0YVtrZXldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgb3V0cHV0LmJvZHkgPSBmb3JtO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyhvdXRwdXQuaGVhZGVycyk7XG4gICAgaGVhZGVycy5kZWxldGUoJ2NvbnRlbnQtdHlwZScpOyAvLyBjb250ZW50LXR5cGUgd2lsbCBiZSBzZXQgYnkgYHdpbmRvdy5mZXRjaGAgdG8gaW5jbHVkeSBib3VuZGFyeVxuICAgIG91dHB1dC5oZWFkZXJzID0gaGVhZGVycztcbiAgfSBlbHNlIGlmICh0eXBlLmluY2x1ZGVzKCdhcHBsaWNhdGlvbi9qc29uJykgfHwgdHlwZW9mIG9wdGlvbnMuZGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICBvdXRwdXQuYm9keSA9IEpTT04uc3RyaW5naWZ5KG9wdGlvbnMuZGF0YSk7XG4gIH1cbiAgcmV0dXJuIG91dHB1dDtcbn07XG4vLyBXRUIgSU1QTEVNRU5UQVRJT05cbmNsYXNzIENhcGFjaXRvckh0dHBQbHVnaW5XZWIgZXh0ZW5kcyBXZWJQbHVnaW4ge1xuICAvKipcbiAgICogUGVyZm9ybSBhbiBIdHRwIHJlcXVlc3QgZ2l2ZW4gYSBzZXQgb2Ygb3B0aW9uc1xuICAgKiBAcGFyYW0gb3B0aW9ucyBPcHRpb25zIHRvIGJ1aWxkIHRoZSBIVFRQIHJlcXVlc3RcbiAgICovXG4gIGFzeW5jIHJlcXVlc3Qob3B0aW9ucykge1xuICAgIGNvbnN0IHJlcXVlc3RJbml0ID0gYnVpbGRSZXF1ZXN0SW5pdChvcHRpb25zLCBvcHRpb25zLndlYkZldGNoRXh0cmEpO1xuICAgIGNvbnN0IHVybFBhcmFtcyA9IGJ1aWxkVXJsUGFyYW1zKG9wdGlvbnMucGFyYW1zLCBvcHRpb25zLnNob3VsZEVuY29kZVVybFBhcmFtcyk7XG4gICAgY29uc3QgdXJsID0gdXJsUGFyYW1zID8gYCR7b3B0aW9ucy51cmx9PyR7dXJsUGFyYW1zfWAgOiBvcHRpb25zLnVybDtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgcmVxdWVzdEluaXQpO1xuICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpIHx8ICcnO1xuICAgIC8vIERlZmF1bHQgdG8gJ3RleHQnIHJlc3BvbnNlVHlwZSBzbyBubyBwYXJzaW5nIGhhcHBlbnNcbiAgICBsZXQge1xuICAgICAgcmVzcG9uc2VUeXBlID0gJ3RleHQnXG4gICAgfSA9IHJlc3BvbnNlLm9rID8gb3B0aW9ucyA6IHt9O1xuICAgIC8vIElmIHRoZSByZXNwb25zZSBjb250ZW50LXR5cGUgaXMganNvbiwgZm9yY2UgdGhlIHJlc3BvbnNlIHRvIGJlIGpzb25cbiAgICBpZiAoY29udGVudFR5cGUuaW5jbHVkZXMoJ2FwcGxpY2F0aW9uL2pzb24nKSkge1xuICAgICAgcmVzcG9uc2VUeXBlID0gJ2pzb24nO1xuICAgIH1cbiAgICBsZXQgZGF0YTtcbiAgICBsZXQgYmxvYjtcbiAgICBzd2l0Y2ggKHJlc3BvbnNlVHlwZSkge1xuICAgICAgY2FzZSAnYXJyYXlidWZmZXInOlxuICAgICAgY2FzZSAnYmxvYic6XG4gICAgICAgIGJsb2IgPSBhd2FpdCByZXNwb25zZS5ibG9iKCk7XG4gICAgICAgIGRhdGEgPSBhd2FpdCByZWFkQmxvYkFzQmFzZTY0KGJsb2IpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2pzb24nOlxuICAgICAgICBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2RvY3VtZW50JzpcbiAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICB9XG4gICAgLy8gQ29udmVydCBmZXRjaCBoZWFkZXJzIHRvIENhcGFjaXRvciBIdHRwSGVhZGVyc1xuICAgIGNvbnN0IGhlYWRlcnMgPSB7fTtcbiAgICByZXNwb25zZS5oZWFkZXJzLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgIGhlYWRlcnNba2V5XSA9IHZhbHVlO1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhLFxuICAgICAgaGVhZGVycyxcbiAgICAgIHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgdXJsOiByZXNwb25zZS51cmxcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBQZXJmb3JtIGFuIEh0dHAgR0VUIHJlcXVlc3QgZ2l2ZW4gYSBzZXQgb2Ygb3B0aW9uc1xuICAgKiBAcGFyYW0gb3B0aW9ucyBPcHRpb25zIHRvIGJ1aWxkIHRoZSBIVFRQIHJlcXVlc3RcbiAgICovXG4gIGFzeW5jIGdldChvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnXG4gICAgfSkpO1xuICB9XG4gIC8qKlxuICAgKiBQZXJmb3JtIGFuIEh0dHAgUE9TVCByZXF1ZXN0IGdpdmVuIGEgc2V0IG9mIG9wdGlvbnNcbiAgICogQHBhcmFtIG9wdGlvbnMgT3B0aW9ucyB0byBidWlsZCB0aGUgSFRUUCByZXF1ZXN0XG4gICAqL1xuICBhc3luYyBwb3N0KG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucyksIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnXG4gICAgfSkpO1xuICB9XG4gIC8qKlxuICAgKiBQZXJmb3JtIGFuIEh0dHAgUFVUIHJlcXVlc3QgZ2l2ZW4gYSBzZXQgb2Ygb3B0aW9uc1xuICAgKiBAcGFyYW0gb3B0aW9ucyBPcHRpb25zIHRvIGJ1aWxkIHRoZSBIVFRQIHJlcXVlc3RcbiAgICovXG4gIGFzeW5jIHB1dChvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpLCB7XG4gICAgICBtZXRob2Q6ICdQVVQnXG4gICAgfSkpO1xuICB9XG4gIC8qKlxuICAgKiBQZXJmb3JtIGFuIEh0dHAgUEFUQ0ggcmVxdWVzdCBnaXZlbiBhIHNldCBvZiBvcHRpb25zXG4gICAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbnMgdG8gYnVpbGQgdGhlIEhUVFAgcmVxdWVzdFxuICAgKi9cbiAgYXN5bmMgcGF0Y2gob3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zKSwge1xuICAgICAgbWV0aG9kOiAnUEFUQ0gnXG4gICAgfSkpO1xuICB9XG4gIC8qKlxuICAgKiBQZXJmb3JtIGFuIEh0dHAgREVMRVRFIHJlcXVlc3QgZ2l2ZW4gYSBzZXQgb2Ygb3B0aW9uc1xuICAgKiBAcGFyYW0gb3B0aW9ucyBPcHRpb25zIHRvIGJ1aWxkIHRoZSBIVFRQIHJlcXVlc3RcbiAgICovXG4gIGFzeW5jIGRlbGV0ZShvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpLCB7XG4gICAgICBtZXRob2Q6ICdERUxFVEUnXG4gICAgfSkpO1xuICB9XG59XG5jb25zdCBDYXBhY2l0b3JIdHRwID0gcmVnaXN0ZXJQbHVnaW4oJ0NhcGFjaXRvckh0dHAnLCB7XG4gIHdlYjogKCkgPT4gbmV3IENhcGFjaXRvckh0dHBQbHVnaW5XZWIoKVxufSk7XG4vKioqKioqKiogRU5EIEhUVFAgUExVR0lOICoqKioqKioqL1xuLyoqKioqKioqIFNZU1RFTSBCQVJTIFBMVUdJTiAqKioqKioqKi9cbi8qKlxuICogQXZhaWxhYmxlIHN0YXR1cyBiYXIgc3R5bGVzLlxuICovXG52YXIgU3lzdGVtQmFyc1N0eWxlO1xuKGZ1bmN0aW9uIChTeXN0ZW1CYXJzU3R5bGUpIHtcbiAgLyoqXG4gICAqIExpZ2h0IHN5c3RlbSBiYXIgY29udGVudCBvbiBhIGRhcmsgYmFja2dyb3VuZC5cbiAgICpcbiAgICogQHNpbmNlIDguMC4wXG4gICAqL1xuICBTeXN0ZW1CYXJzU3R5bGVbXCJEYXJrXCJdID0gXCJEQVJLXCI7XG4gIC8qKlxuICAgKiBGb3IgZGFyayBzeXN0ZW0gYmFyIGNvbnRlbnQgb24gYSBsaWdodCBiYWNrZ3JvdW5kLlxuICAgKlxuICAgKiBAc2luY2UgOC4wLjBcbiAgICovXG4gIFN5c3RlbUJhcnNTdHlsZVtcIkxpZ2h0XCJdID0gXCJMSUdIVFwiO1xuICAvKipcbiAgICogVGhlIHN0eWxlIGlzIGJhc2VkIG9uIHRoZSBkZXZpY2UgYXBwZWFyYW5jZSBvciB0aGUgdW5kZXJseWluZyBjb250ZW50LlxuICAgKiBJZiB0aGUgZGV2aWNlIGlzIHVzaW5nIERhcmsgbW9kZSwgdGhlIHN5c3RlbSBiYXJzIGNvbnRlbnQgd2lsbCBiZSBsaWdodC5cbiAgICogSWYgdGhlIGRldmljZSBpcyB1c2luZyBMaWdodCBtb2RlLCB0aGUgc3lzdGVtIGJhcnMgY29udGVudCB3aWxsIGJlIGRhcmsuXG4gICAqXG4gICAqIEBzaW5jZSA4LjAuMFxuICAgKi9cbiAgU3lzdGVtQmFyc1N0eWxlW1wiRGVmYXVsdFwiXSA9IFwiREVGQVVMVFwiO1xufSkoU3lzdGVtQmFyc1N0eWxlIHx8IChTeXN0ZW1CYXJzU3R5bGUgPSB7fSkpO1xuLyoqXG4gKiBBdmFpbGFibGUgc3lzdGVtIGJhciB0eXBlcy5cbiAqL1xudmFyIFN5c3RlbUJhclR5cGU7XG4oZnVuY3Rpb24gKFN5c3RlbUJhclR5cGUpIHtcbiAgLyoqXG4gICAqIFRoZSB0b3Agc3RhdHVzIGJhciBvbiBib3RoIEFuZHJvaWQgYW5kIGlPUy5cbiAgICpcbiAgICogQHNpbmNlIDguMC4wXG4gICAqL1xuICBTeXN0ZW1CYXJUeXBlW1wiU3RhdHVzQmFyXCJdID0gXCJTdGF0dXNCYXJcIjtcbiAgLyoqXG4gICAqIFRoZSBuYXZpZ2F0aW9uIGJhciAob3IgZ2VzdHVyZSBiYXIgb24gaU9TKSBvbiBib3RoIEFuZHJvaWQgYW5kIGlPUy5cbiAgICpcbiAgICogQHNpbmNlIDguMC4wXG4gICAqL1xuICBTeXN0ZW1CYXJUeXBlW1wiTmF2aWdhdGlvbkJhclwiXSA9IFwiTmF2aWdhdGlvbkJhclwiO1xufSkoU3lzdGVtQmFyVHlwZSB8fCAoU3lzdGVtQmFyVHlwZSA9IHt9KSk7XG5jbGFzcyBTeXN0ZW1CYXJzUGx1Z2luV2ViIGV4dGVuZHMgV2ViUGx1Z2luIHtcbiAgYXN5bmMgc2V0U3R5bGUoKSB7XG4gICAgdGhpcy51bmF2YWlsYWJsZSgnbm90IGF2YWlsYWJsZSBmb3Igd2ViJyk7XG4gIH1cbiAgYXN5bmMgc2V0QW5pbWF0aW9uKCkge1xuICAgIHRoaXMudW5hdmFpbGFibGUoJ25vdCBhdmFpbGFibGUgZm9yIHdlYicpO1xuICB9XG4gIGFzeW5jIHNob3coKSB7XG4gICAgdGhpcy51bmF2YWlsYWJsZSgnbm90IGF2YWlsYWJsZSBmb3Igd2ViJyk7XG4gIH1cbiAgYXN5bmMgaGlkZSgpIHtcbiAgICB0aGlzLnVuYXZhaWxhYmxlKCdub3QgYXZhaWxhYmxlIGZvciB3ZWInKTtcbiAgfVxufVxuY29uc3QgU3lzdGVtQmFycyA9IHJlZ2lzdGVyUGx1Z2luKCdTeXN0ZW1CYXJzJywge1xuICB3ZWI6ICgpID0+IG5ldyBTeXN0ZW1CYXJzUGx1Z2luV2ViKClcbn0pO1xuLyoqKioqKioqIEVORCBTWVNURU0gQkFSUyBQTFVHSU4gKioqKioqKiovXG5cbmV4cG9ydCB7IENhcGFjaXRvciwgQ2FwYWNpdG9yQ29va2llcywgQ2FwYWNpdG9yRXhjZXB0aW9uLCBDYXBhY2l0b3JIdHRwLCBFeGNlcHRpb25Db2RlLCBTeXN0ZW1CYXJUeXBlLCBTeXN0ZW1CYXJzLCBTeXN0ZW1CYXJzU3R5bGUsIFdlYlBsdWdpbiwgV2ViVmlldywgYnVpbGRSZXF1ZXN0SW5pdCwgcmVnaXN0ZXJQbHVnaW4gfTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxJQUFJO0FBQUEsQ0FDSCxTQUFVQSxnQkFBZTtBQU94QixFQUFBQSxlQUFjLGVBQWUsSUFBSTtBQVFqQyxFQUFBQSxlQUFjLGFBQWEsSUFBSTtBQUNqQyxHQUFHLGtCQUFrQixnQkFBZ0IsQ0FBQyxFQUFFO0FBQ3hDLElBQU0scUJBQU4sY0FBaUMsTUFBTTtBQUFBLEVBQ3JDLFlBQVksU0FBUyxNQUFNLE1BQU07QUFDL0IsVUFBTSxPQUFPO0FBQ2IsU0FBSyxVQUFVO0FBQ2YsU0FBSyxPQUFPO0FBQ1osU0FBSyxPQUFPO0FBQUEsRUFDZDtB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LENBQUM7QUFBQSxJQUNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBS00sSUFBSSxTQUFTO0FBQUE7QUFDakIsYUFBTyxLQUFLLFFBQVEsT0FBTyxPQUFPLE9BQU8sT0FBTyxDQUFDLEdBQUcsT0FBTyxHQUFHO0FBQUEsUUFDNUQsUUFBUTtBQUFBLE1BQ1YsQ0FBQyxDQUFDO0FBQUEsSUFDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtNLE1BQU0sU0FBUztBQUFBO0FBQ25CLGFBQU8sS0FBSyxRQUFRLE9BQU8sT0FBTyxPQUFPLE9BQU8sQ0FBQyxHQUFHLE9BQU8sR0FBRztBQUFBLFFBQzVELFFBQVE7QUFBQSxNQUNWLENBQUMsQ0FBQztBQUFBLElBQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFLTSxPQUFPLFNBQVM7QUFBQTtBQUNwQixhQUFPLEtBQUssUUFBUSxPQUFPLE9BQU8sT0FBTyxPQUFPLENBQUMsR0FBRyxPQUFPLEdBQUc7QUFBQSxRQUM1RCxRQUFRO0FBQUEsTUFDVixDQUFDLENBQUM7QUFBQSxJQUNKO0FBQUE7QUFDRjtBQUNBLElBQU0sZ0JBQWdCLGVBQWUsaUJBQWlCO0FBQUEsRUFDcEQsS0FBSyxNQUFNLElBQUksdUJBQXVCO0FBQ3hDLENBQUM7QUFNRCxJQUFJO0FBQUEsQ0FDSCxTQUFVQyxrQkFBaUI7QUFNMUIsRUFBQUEsaUJBQWdCLE1BQU0sSUFBSTtBQU0xQixFQUFBQSxpQkFBZ0IsT0FBTyxJQUFJO0FBUTNCLEVBQUFBLGlCQUFnQixTQUFTLElBQUk7QUFDL0IsR0FBRyxvQkFBb0Isa0JBQWtCLENBQUMsRUFBRTtBQUk1QyxJQUFJO0FBQUEsQ0FDSCxTQUFVQyxnQkFBZTtBQU14QixFQUFBQSxlQUFjLFdBQVcsSUFBSTtBQU03QixFQUFBQSxlQUFjLGVBQWUsSUFBSTtBQUNuQyxHQUFHLGtCQUFrQixnQkFBZ0IsQ0FBQyxFQUFFO0FBQ3hDLElBQU0sc0JBQU4sY0FBa0MsVUFBVTtBQUFBLEVBQ3BDLFdBQVc7QUFBQTtBQUNmLFdBQUssWUFBWSx1QkFBdUI7QUFBQSxJQUMxQztBQUFBO0FBQUEsRUFDTSxlQUFlO0FBQUE7QUFDbkIsV0FBSyxZQUFZLHVCQUF1QjtBQUFBLElBQzFDO0FBQUE7QUFBQSxFQUNNLE9BQU87QUFBQTtBQUNYLFdBQUssWUFBWSx1QkFBdUI7QUFBQSxJQUMxQztBQUFBO0FBQUEsRUFDTSxPQUFPO0FBQUE7QUFDWCxXQUFLLFlBQVksdUJBQXVCO0FBQUEsSUFDMUM7QUFBQTtBQUNGO0FBQ0EsSUFBTSxhQUFhLGVBQWUsY0FBYztBQUFBLEVBQzlDLEtBQUssTUFBTSxJQUFJLG9CQUFvQjtBQUNyQyxDQUFDOyIsIm5hbWVzIjpbIkV4Y2VwdGlvbkNvZGUiLCJyZWdpc3RlclBsdWdpbiIsInAiLCJoZWFkZXJzIiwiU3lzdGVtQmFyc1N0eWxlIiwiU3lzdGVtQmFyVHlwZSJdLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19
