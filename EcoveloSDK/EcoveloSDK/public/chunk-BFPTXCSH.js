import {
  __async,
  __glob,
  __spreadValues
} from "./chunk-UESUV5PM.js";

// import("./**/*.entry.js") in node_modules/@ionic/core/dist/esm/index-4DxY6_gG.js
var globImport_entry_js = __glob({
  "./ion-accordion_2.entry.js": () => import("./ion-accordion_2.entry-PTAKXMCS.js"),
  "./ion-action-sheet.entry.js": () => import("./ion-action-sheet.entry-VRB6URYG.js"),
  "./ion-alert.entry.js": () => import("./ion-alert.entry-MOCUKUS2.js"),
  "./ion-app_8.entry.js": () => import("./ion-app_8.entry-ZNGE2SH4.js"),
  "./ion-avatar_3.entry.js": () => import("./ion-avatar_3.entry-GT2VO7N6.js"),
  "./ion-back-button.entry.js": () => import("./ion-back-button.entry-XM67BMHK.js"),
  "./ion-backdrop.entry.js": () => import("./ion-backdrop.entry-NJDHGYAN.js"),
  "./ion-breadcrumb_2.entry.js": () => import("./ion-breadcrumb_2.entry-5GWD2BWI.js"),
  "./ion-button_2.entry.js": () => import("./ion-button_2.entry-MNCQ2YDE.js"),
  "./ion-card_5.entry.js": () => import("./ion-card_5.entry-56LNSHU2.js"),
  "./ion-checkbox.entry.js": () => import("./ion-checkbox.entry-QG4RZZST.js"),
  "./ion-chip.entry.js": () => import("./ion-chip.entry-ML43XATY.js"),
  "./ion-col_3.entry.js": () => import("./ion-col_3.entry-5D5UJ6TD.js"),
  "./ion-datetime-button.entry.js": () => import("./ion-datetime-button.entry-OW5PEKBB.js"),
  "./ion-datetime_3.entry.js": () => import("./ion-datetime_3.entry-OBYW45YP.js"),
  "./ion-fab_3.entry.js": () => import("./ion-fab_3.entry-PBUUOCPA.js"),
  "./ion-img.entry.js": () => import("./ion-img.entry-DZUEDKZN.js"),
  "./ion-infinite-scroll_2.entry.js": () => import("./ion-infinite-scroll_2.entry-GQYDWQKU.js"),
  "./ion-input-otp.entry.js": () => import("./ion-input-otp.entry-QCV7UU6E.js"),
  "./ion-input-password-toggle.entry.js": () => import("./ion-input-password-toggle.entry-BDKIIMMK.js"),
  "./ion-input.entry.js": () => import("./ion-input.entry-FRAPXDQH.js"),
  "./ion-item-option_3.entry.js": () => import("./ion-item-option_3.entry-PHZTWOIJ.js"),
  "./ion-item_8.entry.js": () => import("./ion-item_8.entry-SVS7IBAG.js"),
  "./ion-loading.entry.js": () => import("./ion-loading.entry-HJT5ITEB.js"),
  "./ion-menu_3.entry.js": () => import("./ion-menu_3.entry-RZY2PEIP.js"),
  "./ion-modal.entry.js": () => import("./ion-modal.entry-IMWHILBH.js"),
  "./ion-nav_2.entry.js": () => import("./ion-nav_2.entry-UUVAQHCT.js"),
  "./ion-picker-column-option.entry.js": () => import("./ion-picker-column-option.entry-JFBC7TYH.js"),
  "./ion-picker-column.entry.js": () => import("./ion-picker-column.entry-GJPPEOUW.js"),
  "./ion-picker.entry.js": () => import("./ion-picker.entry-CSTTPBKD.js"),
  "./ion-popover.entry.js": () => import("./ion-popover.entry-R7T3DTLF.js"),
  "./ion-progress-bar.entry.js": () => import("./ion-progress-bar.entry-I4LHZBAY.js"),
  "./ion-radio_2.entry.js": () => import("./ion-radio_2.entry-CGNO7MOI.js"),
  "./ion-range.entry.js": () => import("./ion-range.entry-WBIKLX62.js"),
  "./ion-refresher_2.entry.js": () => import("./ion-refresher_2.entry-CZWN7PGX.js"),
  "./ion-reorder_2.entry.js": () => import("./ion-reorder_2.entry-YGRYEVJR.js"),
  "./ion-ripple-effect.entry.js": () => import("./ion-ripple-effect.entry-DDDBOUPL.js"),
  "./ion-route_4.entry.js": () => import("./ion-route_4.entry-6W3UY2KG.js"),
  "./ion-searchbar.entry.js": () => import("./ion-searchbar.entry-DGA2AITP.js"),
  "./ion-segment-content.entry.js": () => import("./ion-segment-content.entry-645V732A.js"),
  "./ion-segment-view.entry.js": () => import("./ion-segment-view.entry-AS6QGESW.js"),
  "./ion-segment_2.entry.js": () => import("./ion-segment_2.entry-QINZY6ZE.js"),
  "./ion-select-modal.entry.js": () => import("./ion-select-modal.entry-E26MMQ5N.js"),
  "./ion-select_3.entry.js": () => import("./ion-select_3.entry-3TB5AITU.js"),
  "./ion-spinner.entry.js": () => import("./ion-spinner.entry-OYYBMDRH.js"),
  "./ion-split-pane.entry.js": () => import("./ion-split-pane.entry-5ZDORYW4.js"),
  "./ion-tab-bar_2.entry.js": () => import("./ion-tab-bar_2.entry-PHTIRXSD.js"),
  "./ion-tab_2.entry.js": () => import("./ion-tab_2.entry-DWUBJLPO.js"),
  "./ion-text.entry.js": () => import("./ion-text.entry-3DKDIUSV.js"),
  "./ion-textarea.entry.js": () => import("./ion-textarea.entry-GO7JA3MY.js"),
  "./ion-toast.entry.js": () => import("./ion-toast.entry-VMJZIJWX.js"),
  "./ion-toggle.entry.js": () => import("./ion-toggle.entry-NDXAMER5.js")
});

// node_modules/@ionic/core/dist/esm/index-4DxY6_gG.js
var NAMESPACE = "ionic";
var BUILD = (
  /* ionic */
  {
    experimentalSlotFixes: true,
    hydratedSelectorName: "hydrated",
    lazyLoad: true,
    shadowDom: true,
    slotRelocation: true,
    updatable: true
  }
);
var Config = class {
  constructor() {
    this.m = /* @__PURE__ */ new Map();
  }
  reset(configObj) {
    this.m = new Map(Object.entries(configObj));
  }
  get(key, fallback) {
    const value = this.m.get(key);
    return value !== void 0 ? value : fallback;
  }
  getBoolean(key, fallback = false) {
    const val = this.m.get(key);
    if (val === void 0) {
      return fallback;
    }
    if (typeof val === "string") {
      return val === "true";
    }
    return !!val;
  }
  getNumber(key, fallback) {
    const val = parseFloat(this.m.get(key));
    return isNaN(val) ? fallback !== void 0 ? fallback : NaN : val;
  }
  set(key, value) {
    this.m.set(key, value);
  }
};
var config = /* @__PURE__ */ new Config();
var configFromSession = (win2) => {
  try {
    const configStr = win2.sessionStorage.getItem(IONIC_SESSION_KEY);
    return configStr !== null ? JSON.parse(configStr) : {};
  } catch (e) {
    return {};
  }
};
var saveConfig = (win2, c) => {
  try {
    win2.sessionStorage.setItem(IONIC_SESSION_KEY, JSON.stringify(c));
  } catch (e) {
    return;
  }
};
var configFromURL = (win2) => {
  const configObj = {};
  win2.location.search.slice(1).split("&").map((entry) => entry.split("=")).map(([key, value]) => {
    try {
      return [decodeURIComponent(key), decodeURIComponent(value)];
    } catch (e) {
      return ["", ""];
    }
  }).filter(([key]) => startsWith(key, IONIC_PREFIX)).map(([key, value]) => [key.slice(IONIC_PREFIX.length), value]).forEach(([key, value]) => {
    configObj[key] = value;
  });
  return configObj;
};
var startsWith = (input, search) => {
  return input.substr(0, search.length) === search;
};
var IONIC_PREFIX = "ionic:";
var IONIC_SESSION_KEY = "ionic-persist-config";
var LogLevel;
(function(LogLevel2) {
  LogLevel2["OFF"] = "OFF";
  LogLevel2["ERROR"] = "ERROR";
  LogLevel2["WARN"] = "WARN";
})(LogLevel || (LogLevel = {}));
var printIonWarning = (message, ...params) => {
  const logLevel = config.get("logLevel", LogLevel.WARN);
  if ([LogLevel.WARN].includes(logLevel)) {
    return console.warn(`[Ionic Warning]: ${message}`, ...params);
  }
};
var printIonError = (message, ...params) => {
  const logLevel = config.get("logLevel", LogLevel.ERROR);
  if ([LogLevel.ERROR, LogLevel.WARN].includes(logLevel)) {
    return console.error(`[Ionic Error]: ${message}`, ...params);
  }
};
var printRequiredElementError = (el, ...targetSelectors) => {
  return console.error(`<${el.tagName.toLowerCase()}> must be used inside ${targetSelectors.join(" or ")}.`);
};
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var Build = {
  isBrowser: true
};
var SVG_NS = "http://www.w3.org/2000/svg";
var HTML_NS = "http://www.w3.org/1999/xhtml";
var PrimitiveType = /* @__PURE__ */ ((PrimitiveType2) => {
  PrimitiveType2["Undefined"] = "undefined";
  PrimitiveType2["Null"] = "null";
  PrimitiveType2["String"] = "string";
  PrimitiveType2["Number"] = "number";
  PrimitiveType2["SpecialNumber"] = "number";
  PrimitiveType2["Boolean"] = "boolean";
  PrimitiveType2["BigInt"] = "bigint";
  return PrimitiveType2;
})(PrimitiveType || {});
var NonPrimitiveType = /* @__PURE__ */ ((NonPrimitiveType2) => {
  NonPrimitiveType2["Array"] = "array";
  NonPrimitiveType2["Date"] = "date";
  NonPrimitiveType2["Map"] = "map";
  NonPrimitiveType2["Object"] = "object";
  NonPrimitiveType2["RegularExpression"] = "regexp";
  NonPrimitiveType2["Set"] = "set";
  NonPrimitiveType2["Channel"] = "channel";
  NonPrimitiveType2["Symbol"] = "symbol";
  return NonPrimitiveType2;
})(NonPrimitiveType || {});
var TYPE_CONSTANT = "type";
var VALUE_CONSTANT = "value";
var SERIALIZED_PREFIX = "serialized:";
var getHostRef = (ref) => {
  if (ref.__stencil__getHostRef) {
    return ref.__stencil__getHostRef();
  }
  return void 0;
};
var registerInstance = (lazyInstance, hostRef) => {
  lazyInstance.__stencil__getHostRef = () => hostRef;
  hostRef.$lazyInstance$ = lazyInstance;
};
var registerHost = (hostElement, cmpMeta) => {
  const hostRef = {
    $flags$: 0,
    $hostElement$: hostElement,
    $cmpMeta$: cmpMeta,
    $instanceValues$: /* @__PURE__ */ new Map()
  };
  {
    hostRef.$onInstancePromise$ = new Promise((r) => hostRef.$onInstanceResolve$ = r);
  }
  {
    hostRef.$onReadyPromise$ = new Promise((r) => hostRef.$onReadyResolve$ = r);
    hostElement["s-p"] = [];
    hostElement["s-rc"] = [];
  }
  const ref = hostRef;
  hostElement.__stencil__getHostRef = () => ref;
  return ref;
};
var isMemberInElement = (elm, memberName) => memberName in elm;
var consoleError = (e, el) => (0, console.error)(e, el);
var cmpModules = /* @__PURE__ */ new Map();
var loadModule = (cmpMeta, hostRef, hmrVersionId) => {
  const exportName = cmpMeta.$tagName$.replace(/-/g, "_");
  const bundleId = cmpMeta.$lazyBundleId$;
  if (!bundleId) {
    return void 0;
  }
  const module = cmpModules.get(bundleId);
  if (module) {
    return module[exportName];
  }
  return /* @vite-ignore */ /* webpackInclude: /\.entry\.js$/ */ /* webpackExclude: /\.system\.entry\.js$/ */ /* webpackMode: "lazy" */ globImport_entry_js(`./${bundleId}.entry.js${""}`).then((importedModule) => {
    {
      cmpModules.set(bundleId, importedModule);
    }
    return importedModule[exportName];
  }, (e) => {
    consoleError(e, hostRef.$hostElement$);
  });
};
var styles = /* @__PURE__ */ new Map();
var modeResolutionChain = [];
var CONTENT_REF_ID = "r";
var ORG_LOCATION_ID = "o";
var SLOT_NODE_ID = "s";
var TEXT_NODE_ID = "t";
var COMMENT_NODE_ID = "c";
var HYDRATE_ID = "s-id";
var HYDRATED_STYLE_ID = "sty-id";
var HYDRATE_CHILD_ID = "c-id";
var HYDRATED_CSS = "{visibility:hidden}.hydrated{visibility:inherit}";
var SLOT_FB_CSS = "slot-fb{display:contents}slot-fb[hidden]{display:none}";
var XLINK_NS = "http://www.w3.org/1999/xlink";
var win = typeof window !== "undefined" ? window : {};
var H = win.HTMLElement || class {
};
var plt = {
  $flags$: 0,
  $resourcesUrl$: "",
  jmp: (h2) => h2(),
  raf: (h2) => requestAnimationFrame(h2),
  ael: (el, eventName, listener, opts) => el.addEventListener(eventName, listener, opts),
  rel: (el, eventName, listener, opts) => el.removeEventListener(eventName, listener, opts),
  ce: (eventName, opts) => new CustomEvent(eventName, opts)
};
var supportsShadow = BUILD.shadowDom;
var supportsListenerOptions = /* @__PURE__ */ (() => {
  var _a;
  let supportsListenerOptions2 = false;
  try {
    (_a = win.document) == null ? void 0 : _a.addEventListener("e", null, Object.defineProperty({}, "passive", {
      get() {
        supportsListenerOptions2 = true;
      }
    }));
  } catch (e) {
  }
  return supportsListenerOptions2;
})();
var promiseResolve = (v) => Promise.resolve(v);
var supportsConstructableStylesheets = /* @__PURE__ */ (() => {
  try {
    new CSSStyleSheet();
    return typeof new CSSStyleSheet().replaceSync === "function";
  } catch (e) {
  }
  return false;
})();
var supportsMutableAdoptedStyleSheets = supportsConstructableStylesheets ? /* @__PURE__ */ (() => !!win.document && Object.getOwnPropertyDescriptor(win.document.adoptedStyleSheets, "length").writable)() : false;
var queuePending = false;
var queueDomReads = [];
var queueDomWrites = [];
var queueTask = (queue, write) => (cb) => {
  queue.push(cb);
  if (!queuePending) {
    queuePending = true;
    if (write && plt.$flags$ & 4) {
      nextTick(flush);
    } else {
      plt.raf(flush);
    }
  }
};
var consume = (queue) => {
  for (let i2 = 0; i2 < queue.length; i2++) {
    try {
      queue[i2](performance.now());
    } catch (e) {
      consoleError(e);
    }
  }
  queue.length = 0;
};
var flush = () => {
  consume(queueDomReads);
  {
    consume(queueDomWrites);
    if (queuePending = queueDomReads.length > 0) {
      plt.raf(flush);
    }
  }
};
var nextTick = (cb) => promiseResolve().then(cb);
var readTask = /* @__PURE__ */ queueTask(queueDomReads, false);
var writeTask = /* @__PURE__ */ queueTask(queueDomWrites, true);
var getAssetPath = (path) => {
  const assetUrl = new URL(path, plt.$resourcesUrl$);
  return assetUrl.origin !== win.location.origin ? assetUrl.href : assetUrl.pathname;
};
var isDef = (v) => v != null && v !== void 0;
var isComplexType = (o) => {
  o = typeof o;
  return o === "object" || o === "function";
};
function queryNonceMetaTagContent(doc) {
  var _a, _b, _c;
  return (_c = (_b = (_a = doc.head) == null ? void 0 : _a.querySelector('meta[name="csp-nonce"]')) == null ? void 0 : _b.getAttribute("content")) != null ? _c : void 0;
}
var escapeRegExpSpecialCharacters = (text) => {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};
var RemoteValue = class _RemoteValue {
  /**
   * Deserializes a LocalValue serialized object back to its original JavaScript representation
   *
   * @param serialized The serialized LocalValue object
   * @returns The original JavaScript value/object
   */
  static fromLocalValue(serialized) {
    const type = serialized[TYPE_CONSTANT];
    const value = VALUE_CONSTANT in serialized ? serialized[VALUE_CONSTANT] : void 0;
    switch (type) {
      case "string":
        return value;
      case "boolean":
        return value;
      case "bigint":
        return BigInt(value);
      case "undefined":
        return void 0;
      case "null":
        return null;
      case "number":
        if (value === "NaN") return NaN;
        if (value === "-0") return -0;
        if (value === "Infinity") return Infinity;
        if (value === "-Infinity") return -Infinity;
        return value;
      case "array":
        return value.map((item) => _RemoteValue.fromLocalValue(item));
      case "date":
        return new Date(value);
      case "map":
        const map2 = /* @__PURE__ */ new Map();
        for (const [key, val] of value) {
          const deserializedKey = typeof key === "object" && key !== null ? _RemoteValue.fromLocalValue(key) : key;
          const deserializedValue = _RemoteValue.fromLocalValue(val);
          map2.set(deserializedKey, deserializedValue);
        }
        return map2;
      case "object":
        const obj = {};
        for (const [key, val] of value) {
          obj[key] = _RemoteValue.fromLocalValue(val);
        }
        return obj;
      case "regexp":
        const {
          pattern,
          flags
        } = value;
        return new RegExp(pattern, flags);
      case "set":
        const set = /* @__PURE__ */ new Set();
        for (const item of value) {
          set.add(_RemoteValue.fromLocalValue(item));
        }
        return set;
      case "symbol":
        return Symbol(value);
      default:
        throw new Error(`Unsupported type: ${type}`);
    }
  }
  /**
   * Utility method to deserialize multiple LocalValues at once
   *
   * @param serializedValues Array of serialized LocalValue objects
   * @returns Array of deserialized JavaScript values
   */
  static fromLocalValueArray(serializedValues) {
    return serializedValues.map((value) => _RemoteValue.fromLocalValue(value));
  }
  /**
   * Verifies if the given object matches the structure of a serialized LocalValue
   *
   * @param obj Object to verify
   * @returns boolean indicating if the object has LocalValue structure
   */
  static isLocalValueObject(obj) {
    if (typeof obj !== "object" || obj === null) {
      return false;
    }
    if (!obj.hasOwnProperty(TYPE_CONSTANT)) {
      return false;
    }
    const type = obj[TYPE_CONSTANT];
    const hasTypeProperty = Object.values(__spreadValues(__spreadValues({}, PrimitiveType), NonPrimitiveType)).includes(type);
    if (!hasTypeProperty) {
      return false;
    }
    if (type !== "null" && type !== "undefined") {
      return obj.hasOwnProperty(VALUE_CONSTANT);
    }
    return true;
  }
};
var result_exports = {};
__export(result_exports, {
  err: () => err,
  map: () => map,
  ok: () => ok,
  unwrap: () => unwrap,
  unwrapErr: () => unwrapErr
});
var ok = (value) => ({
  isOk: true,
  isErr: false,
  value
});
var err = (value) => ({
  isOk: false,
  isErr: true,
  value
});
function map(result, fn) {
  if (result.isOk) {
    const val = fn(result.value);
    if (val instanceof Promise) {
      return val.then((newVal) => ok(newVal));
    } else {
      return ok(val);
    }
  }
  if (result.isErr) {
    const value = result.value;
    return err(value);
  }
  throw "should never get here";
}
var unwrap = (result) => {
  if (result.isOk) {
    return result.value;
  } else {
    throw result.value;
  }
};
var unwrapErr = (result) => {
  if (result.isErr) {
    return result.value;
  } else {
    throw result.value;
  }
};
function deserializeProperty(value) {
  if (typeof value !== "string" || !value.startsWith(SERIALIZED_PREFIX)) {
    return value;
  }
  return RemoteValue.fromLocalValue(JSON.parse(atob(value.slice(SERIALIZED_PREFIX.length))));
}
function createStyleSheetIfNeededAndSupported(styles2) {
  return void 0;
}
var globalStyleSheet;
function createShadowRoot(cmpMeta) {
  var _a;
  const shadowRoot = this.attachShadow({
    mode: "open",
    delegatesFocus: !!(cmpMeta.$flags$ & 16)
  });
  if (globalStyleSheet === void 0) globalStyleSheet = (_a = createStyleSheetIfNeededAndSupported()) != null ? _a : null;
  if (globalStyleSheet) {
    if (supportsMutableAdoptedStyleSheets) {
      shadowRoot.adoptedStyleSheets.push(globalStyleSheet);
    } else {
      shadowRoot.adoptedStyleSheets = [...shadowRoot.adoptedStyleSheets, globalStyleSheet];
    }
  }
}
var updateFallbackSlotVisibility = (elm) => {
  const childNodes = internalCall(elm, "childNodes");
  if (elm.tagName && elm.tagName.includes("-") && elm["s-cr"] && elm.tagName !== "SLOT-FB") {
    getHostSlotNodes(childNodes, elm.tagName).forEach((slotNode) => {
      if (slotNode.nodeType === 1 && slotNode.tagName === "SLOT-FB") {
        if (getSlotChildSiblings(slotNode, getSlotName(slotNode), false).length) {
          slotNode.hidden = true;
        } else {
          slotNode.hidden = false;
        }
      }
    });
  }
  let i2 = 0;
  for (i2 = 0; i2 < childNodes.length; i2++) {
    const childNode = childNodes[i2];
    if (childNode.nodeType === 1 && internalCall(childNode, "childNodes").length) {
      updateFallbackSlotVisibility(childNode);
    }
  }
};
var getSlottedChildNodes = (childNodes) => {
  const result = [];
  for (let i2 = 0; i2 < childNodes.length; i2++) {
    const slottedNode = childNodes[i2]["s-nr"] || void 0;
    if (slottedNode && slottedNode.isConnected) {
      result.push(slottedNode);
    }
  }
  return result;
};
function getHostSlotNodes(childNodes, hostName, slotName) {
  let i2 = 0;
  let slottedNodes = [];
  let childNode;
  for (; i2 < childNodes.length; i2++) {
    childNode = childNodes[i2];
    if (childNode["s-sr"] && (!hostName || childNode["s-hn"] === hostName) && (slotName === void 0 || getSlotName(childNode) === slotName)) {
      slottedNodes.push(childNode);
      if (typeof slotName !== "undefined") return slottedNodes;
    }
    slottedNodes = [...slottedNodes, ...getHostSlotNodes(childNode.childNodes, hostName, slotName)];
  }
  return slottedNodes;
}
var getSlotChildSiblings = (slot, slotName, includeSlot = true) => {
  const childNodes = [];
  if (includeSlot && slot["s-sr"] || !slot["s-sr"]) childNodes.push(slot);
  let node = slot;
  while (node = node.nextSibling) {
    if (getSlotName(node) === slotName && (includeSlot || !node["s-sr"])) childNodes.push(node);
  }
  return childNodes;
};
var isNodeLocatedInSlot = (nodeToRelocate, slotName) => {
  if (nodeToRelocate.nodeType === 1) {
    if (nodeToRelocate.getAttribute("slot") === null && slotName === "") {
      return true;
    }
    if (nodeToRelocate.getAttribute("slot") === slotName) {
      return true;
    }
    return false;
  }
  if (nodeToRelocate["s-sn"] === slotName) {
    return true;
  }
  return slotName === "";
};
var addSlotRelocateNode = (newChild, slotNode, prepend, position) => {
  if (newChild["s-ol"] && newChild["s-ol"].isConnected) {
    return;
  }
  const slottedNodeLocation = document.createTextNode("");
  slottedNodeLocation["s-nr"] = newChild;
  if (!slotNode["s-cr"] || !slotNode["s-cr"].parentNode) return;
  const parent = slotNode["s-cr"].parentNode;
  const appendMethod = prepend ? internalCall(parent, "prepend") : internalCall(parent, "appendChild");
  if (typeof position !== "undefined") {
    slottedNodeLocation["s-oo"] = position;
    const childNodes = internalCall(parent, "childNodes");
    const slotRelocateNodes = [slottedNodeLocation];
    childNodes.forEach((n) => {
      if (n["s-nr"]) slotRelocateNodes.push(n);
    });
    slotRelocateNodes.sort((a, b) => {
      if (!a["s-oo"] || a["s-oo"] < (b["s-oo"] || 0)) return -1;
      else if (!b["s-oo"] || b["s-oo"] < a["s-oo"]) return 1;
      return 0;
    });
    slotRelocateNodes.forEach((n) => appendMethod.call(parent, n));
  } else {
    appendMethod.call(parent, slottedNodeLocation);
  }
  newChild["s-ol"] = slottedNodeLocation;
  newChild["s-sh"] = slotNode["s-hn"];
};
var getSlotName = (node) => typeof node["s-sn"] === "string" ? node["s-sn"] : node.nodeType === 1 && node.getAttribute("slot") || void 0;
function patchSlotNode(node) {
  if (node.assignedElements || node.assignedNodes || !node["s-sr"]) return;
  const assignedFactory = (elementsOnly) => (function(opts) {
    const toReturn = [];
    const slotName = this["s-sn"];
    if (opts == null ? void 0 : opts.flatten) {
      console.error(`
          Flattening is not supported for Stencil non-shadow slots.
          You can use \`.childNodes\` to nested slot fallback content.
          If you have a particular use case, please open an issue on the Stencil repo.
        `);
    }
    const parent = this["s-cr"].parentElement;
    const slottedNodes = parent.__childNodes ? parent.childNodes : getSlottedChildNodes(parent.childNodes);
    slottedNodes.forEach((n) => {
      if (slotName === getSlotName(n)) {
        toReturn.push(n);
      }
    });
    if (elementsOnly) {
      return toReturn.filter(
        (n) => n.nodeType === 1
        /* ElementNode */
      );
    }
    return toReturn;
  }).bind(node);
  node.assignedElements = assignedFactory(true);
  node.assignedNodes = assignedFactory(false);
}
function dispatchSlotChangeEvent(elm) {
  elm.dispatchEvent(new CustomEvent("slotchange", {
    bubbles: false,
    cancelable: false,
    composed: false
  }));
}
function findSlotFromSlottedNode(slottedNode, parentHost) {
  var _a;
  parentHost = parentHost || ((_a = slottedNode["s-ol"]) == null ? void 0 : _a.parentElement);
  if (!parentHost) return {
    slotNode: null,
    slotName: ""
  };
  const slotName = slottedNode["s-sn"] = getSlotName(slottedNode) || "";
  const childNodes = internalCall(parentHost, "childNodes");
  const slotNode = getHostSlotNodes(childNodes, parentHost.tagName, slotName)[0];
  return {
    slotNode,
    slotName
  };
}
var patchPseudoShadowDom = (hostElementPrototype) => {
  patchCloneNode(hostElementPrototype);
  patchSlotAppendChild(hostElementPrototype);
  patchSlotAppend(hostElementPrototype);
  patchSlotPrepend(hostElementPrototype);
  patchSlotInsertAdjacentElement(hostElementPrototype);
  patchSlotInsertAdjacentHTML(hostElementPrototype);
  patchSlotInsertAdjacentText(hostElementPrototype);
  patchInsertBefore(hostElementPrototype);
  patchTextContent(hostElementPrototype);
  patchChildSlotNodes(hostElementPrototype);
  patchSlotRemoveChild(hostElementPrototype);
};
var patchCloneNode = (HostElementPrototype) => {
  const orgCloneNode = HostElementPrototype.cloneNode;
  HostElementPrototype.cloneNode = function(deep) {
    const srcNode = this;
    const isShadowDom = srcNode.shadowRoot && supportsShadow;
    const clonedNode = orgCloneNode.call(srcNode, isShadowDom ? deep : false);
    if (!isShadowDom && deep) {
      let i2 = 0;
      let slotted, nonStencilNode;
      const stencilPrivates = ["s-id", "s-cr", "s-lr", "s-rc", "s-sc", "s-p", "s-cn", "s-sr", "s-sn", "s-hn", "s-ol", "s-nr", "s-si", "s-rf", "s-scs"];
      const childNodes = this.__childNodes || this.childNodes;
      for (; i2 < childNodes.length; i2++) {
        slotted = childNodes[i2]["s-nr"];
        nonStencilNode = stencilPrivates.every((privateField) => !childNodes[i2][privateField]);
        if (slotted) {
          if (clonedNode.__appendChild) {
            clonedNode.__appendChild(slotted.cloneNode(true));
          } else {
            clonedNode.appendChild(slotted.cloneNode(true));
          }
        }
        if (nonStencilNode) {
          clonedNode.appendChild(childNodes[i2].cloneNode(true));
        }
      }
    }
    return clonedNode;
  };
};
var patchSlotAppendChild = (HostElementPrototype) => {
  HostElementPrototype.__appendChild = HostElementPrototype.appendChild;
  HostElementPrototype.appendChild = function(newChild) {
    const {
      slotName,
      slotNode
    } = findSlotFromSlottedNode(newChild, this);
    if (slotNode) {
      addSlotRelocateNode(newChild, slotNode);
      const slotChildNodes = getSlotChildSiblings(slotNode, slotName);
      const appendAfter = slotChildNodes[slotChildNodes.length - 1];
      const parent = internalCall(appendAfter, "parentNode");
      const insertedNode = internalCall(parent, "insertBefore")(newChild, appendAfter.nextSibling);
      dispatchSlotChangeEvent(slotNode);
      updateFallbackSlotVisibility(this);
      return insertedNode;
    }
    return this.__appendChild(newChild);
  };
};
var patchSlotRemoveChild = (ElementPrototype) => {
  ElementPrototype.__removeChild = ElementPrototype.removeChild;
  ElementPrototype.removeChild = function(toRemove) {
    if (toRemove && typeof toRemove["s-sn"] !== "undefined") {
      const childNodes = this.__childNodes || this.childNodes;
      const slotNode = getHostSlotNodes(childNodes, this.tagName, toRemove["s-sn"]);
      if (slotNode && toRemove.isConnected) {
        toRemove.remove();
        updateFallbackSlotVisibility(this);
        return;
      }
    }
    return this.__removeChild(toRemove);
  };
};
var patchSlotPrepend = (HostElementPrototype) => {
  HostElementPrototype.__prepend = HostElementPrototype.prepend;
  HostElementPrototype.prepend = function(...newChildren) {
    newChildren.forEach((newChild) => {
      if (typeof newChild === "string") {
        newChild = this.ownerDocument.createTextNode(newChild);
      }
      const slotName = (newChild["s-sn"] = getSlotName(newChild)) || "";
      const childNodes = internalCall(this, "childNodes");
      const slotNode = getHostSlotNodes(childNodes, this.tagName, slotName)[0];
      if (slotNode) {
        addSlotRelocateNode(newChild, slotNode, true);
        const slotChildNodes = getSlotChildSiblings(slotNode, slotName);
        const appendAfter = slotChildNodes[0];
        const parent = internalCall(appendAfter, "parentNode");
        const toReturn = internalCall(parent, "insertBefore")(newChild, internalCall(appendAfter, "nextSibling"));
        dispatchSlotChangeEvent(slotNode);
        return toReturn;
      }
      if (newChild.nodeType === 1 && !!newChild.getAttribute("slot")) {
        newChild.hidden = true;
      }
      return HostElementPrototype.__prepend(newChild);
    });
  };
};
var patchSlotAppend = (HostElementPrototype) => {
  HostElementPrototype.__append = HostElementPrototype.append;
  HostElementPrototype.append = function(...newChildren) {
    newChildren.forEach((newChild) => {
      if (typeof newChild === "string") {
        newChild = this.ownerDocument.createTextNode(newChild);
      }
      this.appendChild(newChild);
    });
  };
};
var patchSlotInsertAdjacentHTML = (HostElementPrototype) => {
  const originalInsertAdjacentHtml = HostElementPrototype.insertAdjacentHTML;
  HostElementPrototype.insertAdjacentHTML = function(position, text) {
    if (position !== "afterbegin" && position !== "beforeend") {
      return originalInsertAdjacentHtml.call(this, position, text);
    }
    const container = this.ownerDocument.createElement("_");
    let node;
    container.innerHTML = text;
    if (position === "afterbegin") {
      while (node = container.firstChild) {
        this.prepend(node);
      }
    } else if (position === "beforeend") {
      while (node = container.firstChild) {
        this.append(node);
      }
    }
  };
};
var patchSlotInsertAdjacentText = (HostElementPrototype) => {
  HostElementPrototype.insertAdjacentText = function(position, text) {
    this.insertAdjacentHTML(position, text);
  };
};
var patchInsertBefore = (HostElementPrototype) => {
  const eleProto = HostElementPrototype;
  if (eleProto.__insertBefore) return;
  eleProto.__insertBefore = HostElementPrototype.insertBefore;
  HostElementPrototype.insertBefore = function(newChild, currentChild) {
    const {
      slotName,
      slotNode
    } = findSlotFromSlottedNode(newChild, this);
    const slottedNodes = this.__childNodes ? this.childNodes : getSlottedChildNodes(this.childNodes);
    if (slotNode) {
      let found = false;
      slottedNodes.forEach((childNode) => {
        if (childNode === currentChild || currentChild === null) {
          found = true;
          if (currentChild === null || slotName !== currentChild["s-sn"]) {
            this.appendChild(newChild);
            return;
          }
          if (slotName === currentChild["s-sn"]) {
            addSlotRelocateNode(newChild, slotNode);
            const parent = internalCall(currentChild, "parentNode");
            internalCall(parent, "insertBefore")(newChild, currentChild);
            dispatchSlotChangeEvent(slotNode);
          }
          return;
        }
      });
      if (found) return newChild;
    }
    const parentNode = currentChild == null ? void 0 : currentChild.__parentNode;
    if (parentNode && !this.isSameNode(parentNode)) {
      return this.appendChild(newChild);
    }
    return this.__insertBefore(newChild, currentChild);
  };
};
var patchSlotInsertAdjacentElement = (HostElementPrototype) => {
  const originalInsertAdjacentElement = HostElementPrototype.insertAdjacentElement;
  HostElementPrototype.insertAdjacentElement = function(position, element) {
    if (position !== "afterbegin" && position !== "beforeend") {
      return originalInsertAdjacentElement.call(this, position, element);
    }
    if (position === "afterbegin") {
      this.prepend(element);
      return element;
    } else if (position === "beforeend") {
      this.append(element);
      return element;
    }
    return element;
  };
};
var patchTextContent = (hostElementPrototype) => {
  patchHostOriginalAccessor("textContent", hostElementPrototype);
  Object.defineProperty(hostElementPrototype, "textContent", {
    get: function() {
      let text = "";
      const childNodes = this.__childNodes ? this.childNodes : getSlottedChildNodes(this.childNodes);
      childNodes.forEach((node) => text += node.textContent || "");
      return text;
    },
    set: function(value) {
      const childNodes = this.__childNodes ? this.childNodes : getSlottedChildNodes(this.childNodes);
      childNodes.forEach((node) => {
        if (node["s-ol"]) node["s-ol"].remove();
        node.remove();
      });
      this.insertAdjacentHTML("beforeend", value);
    }
  });
};
var patchChildSlotNodes = (elm) => {
  class FakeNodeList extends Array {
    item(n) {
      return this[n];
    }
  }
  patchHostOriginalAccessor("children", elm);
  Object.defineProperty(elm, "children", {
    get() {
      return this.childNodes.filter((n) => n.nodeType === 1);
    }
  });
  Object.defineProperty(elm, "childElementCount", {
    get() {
      return this.children.length;
    }
  });
  patchHostOriginalAccessor("firstChild", elm);
  Object.defineProperty(elm, "firstChild", {
    get() {
      return this.childNodes[0];
    }
  });
  patchHostOriginalAccessor("lastChild", elm);
  Object.defineProperty(elm, "lastChild", {
    get() {
      return this.childNodes[this.childNodes.length - 1];
    }
  });
  patchHostOriginalAccessor("childNodes", elm);
  Object.defineProperty(elm, "childNodes", {
    get() {
      const result = new FakeNodeList();
      result.push(...getSlottedChildNodes(this.__childNodes));
      return result;
    }
  });
};
var patchSlottedNode = (node) => {
  if (!node || node.__nextSibling !== void 0 || !globalThis.Node) return;
  patchNextSibling(node);
  patchPreviousSibling(node);
  patchParentNode(node);
  if (node.nodeType === Node.ELEMENT_NODE) {
    patchNextElementSibling(node);
    patchPreviousElementSibling(node);
  }
};
var patchNextSibling = (node) => {
  if (!node || node.__nextSibling) return;
  patchHostOriginalAccessor("nextSibling", node);
  Object.defineProperty(node, "nextSibling", {
    get: function() {
      var _a;
      const parentNodes = (_a = this["s-ol"]) == null ? void 0 : _a.parentNode.childNodes;
      const index = parentNodes == null ? void 0 : parentNodes.indexOf(this);
      if (parentNodes && index > -1) {
        return parentNodes[index + 1];
      }
      return this.__nextSibling;
    }
  });
};
var patchNextElementSibling = (element) => {
  if (!element || element.__nextElementSibling) return;
  patchHostOriginalAccessor("nextElementSibling", element);
  Object.defineProperty(element, "nextElementSibling", {
    get: function() {
      var _a;
      const parentEles = (_a = this["s-ol"]) == null ? void 0 : _a.parentNode.children;
      const index = parentEles == null ? void 0 : parentEles.indexOf(this);
      if (parentEles && index > -1) {
        return parentEles[index + 1];
      }
      return this.__nextElementSibling;
    }
  });
};
var patchPreviousSibling = (node) => {
  if (!node || node.__previousSibling) return;
  patchHostOriginalAccessor("previousSibling", node);
  Object.defineProperty(node, "previousSibling", {
    get: function() {
      var _a;
      const parentNodes = (_a = this["s-ol"]) == null ? void 0 : _a.parentNode.childNodes;
      const index = parentNodes == null ? void 0 : parentNodes.indexOf(this);
      if (parentNodes && index > -1) {
        return parentNodes[index - 1];
      }
      return this.__previousSibling;
    }
  });
};
var patchPreviousElementSibling = (element) => {
  if (!element || element.__previousElementSibling) return;
  patchHostOriginalAccessor("previousElementSibling", element);
  Object.defineProperty(element, "previousElementSibling", {
    get: function() {
      var _a;
      const parentNodes = (_a = this["s-ol"]) == null ? void 0 : _a.parentNode.children;
      const index = parentNodes == null ? void 0 : parentNodes.indexOf(this);
      if (parentNodes && index > -1) {
        return parentNodes[index - 1];
      }
      return this.__previousElementSibling;
    }
  });
};
var patchParentNode = (node) => {
  if (!node || node.__parentNode) return;
  patchHostOriginalAccessor("parentNode", node);
  Object.defineProperty(node, "parentNode", {
    get: function() {
      var _a;
      return ((_a = this["s-ol"]) == null ? void 0 : _a.parentNode) || this.__parentNode;
    },
    set: function(value) {
      this.__parentNode = value;
    }
  });
};
var validElementPatches = ["children", "nextElementSibling", "previousElementSibling"];
var validNodesPatches = ["childNodes", "firstChild", "lastChild", "nextSibling", "previousSibling", "textContent", "parentNode"];
function patchHostOriginalAccessor(accessorName, node) {
  if (!globalThis.Node || !globalThis.Element) {
    return;
  }
  let accessor;
  if (validElementPatches.includes(accessorName)) {
    accessor = Object.getOwnPropertyDescriptor(Element.prototype, accessorName);
  } else if (validNodesPatches.includes(accessorName)) {
    accessor = Object.getOwnPropertyDescriptor(Node.prototype, accessorName);
  }
  if (!accessor) {
    accessor = Object.getOwnPropertyDescriptor(node, accessorName);
  }
  if (accessor) Object.defineProperty(node, "__" + accessorName, accessor);
}
function internalCall(node, method) {
  if ("__" + method in node) {
    const toReturn = node["__" + method];
    if (typeof toReturn !== "function") return toReturn;
    return toReturn.bind(node);
  } else {
    if (typeof node[method] !== "function") return node[method];
    return node[method].bind(node);
  }
}
var createTime = (fnName, tagName = "") => {
  {
    return () => {
      return;
    };
  }
};
var uniqueTime = (key, measureText) => {
  {
    return () => {
      return;
    };
  }
};
var rootAppliedStyles = /* @__PURE__ */ new WeakMap();
var registerStyle = (scopeId2, cssText, allowCS) => {
  let style = styles.get(scopeId2);
  if (supportsConstructableStylesheets && allowCS) {
    style = style || new CSSStyleSheet();
    if (typeof style === "string") {
      style = cssText;
    } else {
      style.replaceSync(cssText);
    }
  } else {
    style = cssText;
  }
  styles.set(scopeId2, style);
};
var addStyle = (styleContainerNode, cmpMeta, mode) => {
  var _a;
  const scopeId2 = getScopeId(cmpMeta, mode);
  const style = styles.get(scopeId2);
  if (!win.document) {
    return scopeId2;
  }
  styleContainerNode = styleContainerNode.nodeType === 11 ? styleContainerNode : win.document;
  if (style) {
    if (typeof style === "string") {
      styleContainerNode = styleContainerNode.head || styleContainerNode;
      let appliedStyles = rootAppliedStyles.get(styleContainerNode);
      let styleElm;
      if (!appliedStyles) {
        rootAppliedStyles.set(styleContainerNode, appliedStyles = /* @__PURE__ */ new Set());
      }
      if (!appliedStyles.has(scopeId2)) {
        if (styleContainerNode.host && (styleElm = styleContainerNode.querySelector(`[${HYDRATED_STYLE_ID}="${scopeId2}"]`))) {
          styleElm.innerHTML = style;
        } else {
          styleElm = win.document.createElement("style");
          styleElm.innerHTML = style;
          const nonce = (_a = plt.$nonce$) != null ? _a : queryNonceMetaTagContent(win.document);
          if (nonce != null) {
            styleElm.setAttribute("nonce", nonce);
          }
          if (!(cmpMeta.$flags$ & 1)) {
            if (styleContainerNode.nodeName === "HEAD") {
              const preconnectLinks = styleContainerNode.querySelectorAll("link[rel=preconnect]");
              const referenceNode2 = preconnectLinks.length > 0 ? preconnectLinks[preconnectLinks.length - 1].nextSibling : styleContainerNode.querySelector("style");
              styleContainerNode.insertBefore(styleElm, (referenceNode2 == null ? void 0 : referenceNode2.parentNode) === styleContainerNode ? referenceNode2 : null);
            } else if ("host" in styleContainerNode) {
              if (supportsConstructableStylesheets) {
                const stylesheet = new CSSStyleSheet();
                stylesheet.replaceSync(style);
                if (supportsMutableAdoptedStyleSheets) {
                  styleContainerNode.adoptedStyleSheets.unshift(stylesheet);
                } else {
                  styleContainerNode.adoptedStyleSheets = [stylesheet, ...styleContainerNode.adoptedStyleSheets];
                }
              } else {
                const existingStyleContainer = styleContainerNode.querySelector("style");
                if (existingStyleContainer) {
                  existingStyleContainer.innerHTML = style + existingStyleContainer.innerHTML;
                } else {
                  styleContainerNode.prepend(styleElm);
                }
              }
            } else {
              styleContainerNode.append(styleElm);
            }
          }
          if (cmpMeta.$flags$ & 1) {
            styleContainerNode.insertBefore(styleElm, null);
          }
        }
        if (cmpMeta.$flags$ & 4) {
          styleElm.innerHTML += SLOT_FB_CSS;
        }
        if (appliedStyles) {
          appliedStyles.add(scopeId2);
        }
      }
    } else if (!styleContainerNode.adoptedStyleSheets.includes(style)) {
      if (supportsMutableAdoptedStyleSheets) {
        styleContainerNode.adoptedStyleSheets.push(style);
      } else {
        styleContainerNode.adoptedStyleSheets = [...styleContainerNode.adoptedStyleSheets, style];
      }
    }
  }
  return scopeId2;
};
var attachStyles = (hostRef) => {
  const cmpMeta = hostRef.$cmpMeta$;
  const elm = hostRef.$hostElement$;
  const flags = cmpMeta.$flags$;
  const endAttachStyles = createTime("attachStyles", cmpMeta.$tagName$);
  const scopeId2 = addStyle(elm.shadowRoot ? elm.shadowRoot : elm.getRootNode(), cmpMeta, hostRef.$modeName$);
  if (flags & 10) {
    elm["s-sc"] = scopeId2;
    elm.classList.add(scopeId2 + "-h");
  }
  endAttachStyles();
};
var getScopeId = (cmp, mode) => "sc-" + (mode && cmp.$flags$ & 32 ? cmp.$tagName$ + "-" + mode : cmp.$tagName$);
var convertScopedToShadow = (css) => css.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g, "$1{");
var hydrateScopedToShadow = () => {
  if (!win.document) {
    return;
  }
  const styles2 = win.document.querySelectorAll(`[${HYDRATED_STYLE_ID}]`);
  let i2 = 0;
  for (; i2 < styles2.length; i2++) {
    registerStyle(styles2[i2].getAttribute(HYDRATED_STYLE_ID), convertScopedToShadow(styles2[i2].innerHTML), true);
  }
};
var h = (nodeName, vnodeData, ...children) => {
  let child = null;
  let key = null;
  let slotName = null;
  let simple = false;
  let lastSimple = false;
  const vNodeChildren = [];
  const walk = (c) => {
    for (let i2 = 0; i2 < c.length; i2++) {
      child = c[i2];
      if (Array.isArray(child)) {
        walk(child);
      } else if (child != null && typeof child !== "boolean") {
        if (simple = typeof nodeName !== "function" && !isComplexType(child)) {
          child = String(child);
        }
        if (simple && lastSimple) {
          vNodeChildren[vNodeChildren.length - 1].$text$ += child;
        } else {
          vNodeChildren.push(simple ? newVNode(null, child) : child);
        }
        lastSimple = simple;
      }
    }
  };
  walk(children);
  if (vnodeData) {
    if (vnodeData.key) {
      key = vnodeData.key;
    }
    if (vnodeData.name) {
      slotName = vnodeData.name;
    }
    {
      const classData = vnodeData.className || vnodeData.class;
      if (classData) {
        vnodeData.class = typeof classData !== "object" ? classData : Object.keys(classData).filter((k) => classData[k]).join(" ");
      }
    }
  }
  if (typeof nodeName === "function") {
    return nodeName(vnodeData === null ? {} : vnodeData, vNodeChildren, vdomFnUtils);
  }
  const vnode = newVNode(nodeName, null);
  vnode.$attrs$ = vnodeData;
  if (vNodeChildren.length > 0) {
    vnode.$children$ = vNodeChildren;
  }
  {
    vnode.$key$ = key;
  }
  {
    vnode.$name$ = slotName;
  }
  return vnode;
};
var newVNode = (tag, text) => {
  const vnode = {
    $flags$: 0,
    $tag$: tag,
    $text$: text,
    $elm$: null,
    $children$: null
  };
  {
    vnode.$attrs$ = null;
  }
  {
    vnode.$key$ = null;
  }
  {
    vnode.$name$ = null;
  }
  return vnode;
};
var Host = {};
var isHost = (node) => node && node.$tag$ === Host;
var vdomFnUtils = {
  forEach: (children, cb) => children.map(convertToPublic).forEach(cb),
  map: (children, cb) => children.map(convertToPublic).map(cb).map(convertToPrivate)
};
var convertToPublic = (node) => ({
  vattrs: node.$attrs$,
  vchildren: node.$children$,
  vkey: node.$key$,
  vname: node.$name$,
  vtag: node.$tag$,
  vtext: node.$text$
});
var convertToPrivate = (node) => {
  if (typeof node.vtag === "function") {
    const vnodeData = __spreadValues({}, node.vattrs);
    if (node.vkey) {
      vnodeData.key = node.vkey;
    }
    if (node.vname) {
      vnodeData.name = node.vname;
    }
    return h(node.vtag, vnodeData, ...node.vchildren || []);
  }
  const vnode = newVNode(node.vtag, node.vtext);
  vnode.$attrs$ = node.vattrs;
  vnode.$children$ = node.vchildren;
  vnode.$key$ = node.vkey;
  vnode.$name$ = node.vname;
  return vnode;
};
var initializeClientHydrate = (hostElm, tagName, hostId, hostRef) => {
  var _a, _b, _c;
  const endHydrate = createTime("hydrateClient", tagName);
  const shadowRoot = hostElm.shadowRoot;
  const childRenderNodes = [];
  const slotNodes = [];
  const slottedNodes = [];
  const shadowRootNodes = shadowRoot ? [] : null;
  const vnode = newVNode(tagName, null);
  vnode.$elm$ = hostElm;
  const members = Object.entries(((_a = hostRef.$cmpMeta$) == null ? void 0 : _a.$members$) || {});
  members.forEach(([memberName, [memberFlags, metaAttributeName]]) => {
    var _b2;
    if (!(memberFlags & 31)) {
      return;
    }
    const attributeName = metaAttributeName || memberName;
    const attrVal = hostElm.getAttribute(attributeName);
    if (attrVal !== null) {
      const attrPropVal = parsePropertyValue(attrVal, memberFlags);
      (_b2 = hostRef == null ? void 0 : hostRef.$instanceValues$) == null ? void 0 : _b2.set(memberName, attrPropVal);
    }
  });
  let scopeId2;
  {
    const cmpMeta = hostRef.$cmpMeta$;
    if (cmpMeta && cmpMeta.$flags$ & 10 && hostElm["s-sc"]) {
      scopeId2 = hostElm["s-sc"];
      hostElm.classList.add(scopeId2 + "-h");
    } else if (hostElm["s-sc"]) {
      delete hostElm["s-sc"];
    }
  }
  if (win.document && (!plt.$orgLocNodes$ || !plt.$orgLocNodes$.size)) {
    initializeDocumentHydrate(win.document.body, plt.$orgLocNodes$ = /* @__PURE__ */ new Map());
  }
  hostElm[HYDRATE_ID] = hostId;
  hostElm.removeAttribute(HYDRATE_ID);
  hostRef.$vnode$ = clientHydrate(vnode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, hostElm, hostId, slottedNodes);
  let crIndex = 0;
  const crLength = childRenderNodes.length;
  let childRenderNode;
  for (crIndex; crIndex < crLength; crIndex++) {
    childRenderNode = childRenderNodes[crIndex];
    const orgLocationId = childRenderNode.$hostId$ + "." + childRenderNode.$nodeId$;
    const orgLocationNode = plt.$orgLocNodes$.get(orgLocationId);
    const node = childRenderNode.$elm$;
    if (!shadowRoot) {
      node["s-hn"] = tagName.toUpperCase();
      if (childRenderNode.$tag$ === "slot") {
        node["s-cr"] = hostElm["s-cr"];
      }
    } else if (((_b = childRenderNode.$tag$) == null ? void 0 : _b.toString().includes("-")) && childRenderNode.$tag$ !== "slot-fb" && !childRenderNode.$elm$.shadowRoot) {
      const cmpMeta = getHostRef(childRenderNode.$elm$);
      if (cmpMeta) {
        const scopeId3 = getScopeId(cmpMeta.$cmpMeta$, childRenderNode.$elm$.getAttribute("s-mode"));
        const styleSheet = win.document.querySelector(`style[sty-id="${scopeId3}"]`);
        if (styleSheet) {
          hostElm.shadowRoot.append(styleSheet.cloneNode(true));
        }
      }
    }
    if (childRenderNode.$tag$ === "slot") {
      childRenderNode.$name$ = childRenderNode.$elm$["s-sn"] || childRenderNode.$elm$["name"] || null;
      if (childRenderNode.$children$) {
        childRenderNode.$flags$ |= 2;
        if (!childRenderNode.$elm$.childNodes.length) {
          childRenderNode.$children$.forEach((c) => {
            childRenderNode.$elm$.appendChild(c.$elm$);
          });
        }
      } else {
        childRenderNode.$flags$ |= 1;
      }
    }
    if (orgLocationNode && orgLocationNode.isConnected) {
      if (orgLocationNode.parentElement.shadowRoot && orgLocationNode["s-en"] === "") {
        orgLocationNode.parentNode.insertBefore(node, orgLocationNode.nextSibling);
      }
      orgLocationNode.parentNode.removeChild(orgLocationNode);
      if (!shadowRoot) {
        node["s-oo"] = parseInt(childRenderNode.$nodeId$);
      }
    }
    if (orgLocationNode && !orgLocationNode["s-id"]) {
      plt.$orgLocNodes$.delete(orgLocationId);
    }
  }
  const hosts = [];
  const snLen = slottedNodes.length;
  let snIndex = 0;
  let slotGroup;
  let snGroupIdx;
  let snGroupLen;
  let slottedItem;
  for (snIndex; snIndex < snLen; snIndex++) {
    slotGroup = slottedNodes[snIndex];
    if (!slotGroup || !slotGroup.length) continue;
    snGroupLen = slotGroup.length;
    snGroupIdx = 0;
    for (snGroupIdx; snGroupIdx < snGroupLen; snGroupIdx++) {
      slottedItem = slotGroup[snGroupIdx];
      if (!hosts[slottedItem.hostId]) {
        hosts[slottedItem.hostId] = plt.$orgLocNodes$.get(slottedItem.hostId);
      }
      if (!hosts[slottedItem.hostId]) continue;
      const hostEle = hosts[slottedItem.hostId];
      if (hostEle.shadowRoot && slottedItem.node.parentElement !== hostEle) {
        hostEle.appendChild(slottedItem.node);
      }
      if (!hostEle.shadowRoot || !shadowRoot) {
        if (!slottedItem.slot["s-cr"]) {
          slottedItem.slot["s-cr"] = hostEle["s-cr"];
          if (!slottedItem.slot["s-cr"] && hostEle.shadowRoot) {
            slottedItem.slot["s-cr"] = hostEle;
          } else {
            slottedItem.slot["s-cr"] = (hostEle.__childNodes || hostEle.childNodes)[0];
          }
        }
        addSlotRelocateNode(slottedItem.node, slottedItem.slot, false, slottedItem.node["s-oo"]);
        if (((_c = slottedItem.node.parentElement) == null ? void 0 : _c.shadowRoot) && slottedItem.node["getAttribute"] && slottedItem.node.getAttribute("slot")) {
          slottedItem.node.removeAttribute("slot");
        }
        {
          patchSlottedNode(slottedItem.node);
        }
      }
    }
  }
  if (scopeId2 && slotNodes.length) {
    slotNodes.forEach((slot) => {
      slot.$elm$.parentElement.classList.add(scopeId2 + "-s");
    });
  }
  if (shadowRoot) {
    let rnIdex = 0;
    const rnLen = shadowRootNodes.length;
    if (rnLen) {
      for (rnIdex; rnIdex < rnLen; rnIdex++) {
        const node = shadowRootNodes[rnIdex];
        if (node) {
          shadowRoot.appendChild(node);
        }
      }
      Array.from(hostElm.childNodes).forEach((node) => {
        if (typeof node["s-en"] !== "string" && typeof node["s-sn"] !== "string") {
          if (node.nodeType === 1 && node.slot && node.hidden) {
            node.removeAttribute("hidden");
          } else if (node.nodeType === 8 && !node.nodeValue || node.nodeType === 3 && !node.wholeText.trim()) {
            node.parentNode.removeChild(node);
          }
        }
      });
    }
  }
  hostRef.$hostElement$ = hostElm;
  endHydrate();
};
var clientHydrate = (parentVNode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, node, hostId, slottedNodes = []) => {
  let childNodeType;
  let childIdSplt;
  let childVNode;
  let i2;
  const scopeId2 = hostElm["s-sc"];
  if (node.nodeType === 1) {
    childNodeType = node.getAttribute(HYDRATE_CHILD_ID);
    if (childNodeType) {
      childIdSplt = childNodeType.split(".");
      if (childIdSplt[0] === hostId || childIdSplt[0] === "0") {
        childVNode = createSimpleVNode({
          $flags$: 0,
          $hostId$: childIdSplt[0],
          $nodeId$: childIdSplt[1],
          $depth$: childIdSplt[2],
          $index$: childIdSplt[3],
          $tag$: node.tagName.toLowerCase(),
          $elm$: node,
          // If we don't add the initial classes to the VNode, the first `vdom-render.ts` patch
          // won't try to reconcile them. Classes set on the node will be blown away.
          $attrs$: {
            class: node.className || ""
          }
        });
        childRenderNodes.push(childVNode);
        node.removeAttribute(HYDRATE_CHILD_ID);
        if (!parentVNode.$children$) {
          parentVNode.$children$ = [];
        }
        if (scopeId2 && childIdSplt[0] === hostId) {
          node["s-si"] = scopeId2;
          childVNode.$attrs$.class += " " + scopeId2;
        }
        const slotName = childVNode.$elm$.getAttribute("s-sn");
        if (typeof slotName === "string") {
          if (childVNode.$tag$ === "slot-fb") {
            addSlot(slotName, childIdSplt[2], childVNode, node, parentVNode, childRenderNodes, slotNodes, shadowRootNodes, slottedNodes);
            if (scopeId2) {
              node.classList.add(scopeId2);
            }
          }
          childVNode.$elm$["s-sn"] = slotName;
          childVNode.$elm$.removeAttribute("s-sn");
        }
        if (childVNode.$index$ !== void 0) {
          parentVNode.$children$[childVNode.$index$] = childVNode;
        }
        parentVNode = childVNode;
        if (shadowRootNodes && childVNode.$depth$ === "0") {
          shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
        }
      }
    }
    if (node.shadowRoot) {
      for (i2 = node.shadowRoot.childNodes.length - 1; i2 >= 0; i2--) {
        clientHydrate(parentVNode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, node.shadowRoot.childNodes[i2], hostId, slottedNodes);
      }
    }
    const nonShadowNodes = node.__childNodes || node.childNodes;
    for (i2 = nonShadowNodes.length - 1; i2 >= 0; i2--) {
      clientHydrate(parentVNode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, nonShadowNodes[i2], hostId, slottedNodes);
    }
  } else if (node.nodeType === 8) {
    childIdSplt = node.nodeValue.split(".");
    if (childIdSplt[1] === hostId || childIdSplt[1] === "0") {
      childNodeType = childIdSplt[0];
      childVNode = createSimpleVNode({
        $hostId$: childIdSplt[1],
        $nodeId$: childIdSplt[2],
        $depth$: childIdSplt[3],
        $index$: childIdSplt[4] || "0",
        $elm$: node,
        $attrs$: null,
        $children$: null,
        $key$: null,
        $name$: null,
        $tag$: null,
        $text$: null
      });
      if (childNodeType === TEXT_NODE_ID) {
        childVNode.$elm$ = findCorrespondingNode(
          node,
          3
          /* TextNode */
        );
        if (childVNode.$elm$ && childVNode.$elm$.nodeType === 3) {
          childVNode.$text$ = childVNode.$elm$.textContent;
          childRenderNodes.push(childVNode);
          node.remove();
          if (hostId === childVNode.$hostId$) {
            if (!parentVNode.$children$) {
              parentVNode.$children$ = [];
            }
            parentVNode.$children$[childVNode.$index$] = childVNode;
          }
          if (shadowRootNodes && childVNode.$depth$ === "0") {
            shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
          }
        }
      } else if (childNodeType === COMMENT_NODE_ID) {
        childVNode.$elm$ = findCorrespondingNode(
          node,
          8
          /* CommentNode */
        );
        if (childVNode.$elm$ && childVNode.$elm$.nodeType === 8) {
          childRenderNodes.push(childVNode);
          node.remove();
        }
      } else if (childVNode.$hostId$ === hostId) {
        if (childNodeType === SLOT_NODE_ID) {
          const slotName = node["s-sn"] = childIdSplt[5] || "";
          addSlot(slotName, childIdSplt[2], childVNode, node, parentVNode, childRenderNodes, slotNodes, shadowRootNodes, slottedNodes);
        } else if (childNodeType === CONTENT_REF_ID) {
          if (shadowRootNodes) {
            node.remove();
          } else {
            hostElm["s-cr"] = node;
            node["s-cn"] = true;
          }
        }
      }
    }
  } else if (parentVNode && parentVNode.$tag$ === "style") {
    const vnode = newVNode(null, node.textContent);
    vnode.$elm$ = node;
    vnode.$index$ = "0";
    parentVNode.$children$ = [vnode];
  } else {
    if (node.nodeType === 3 && !node.wholeText.trim() && !node["s-nr"]) {
      node.remove();
    }
  }
  return parentVNode;
};
var initializeDocumentHydrate = (node, orgLocNodes) => {
  if (node.nodeType === 1) {
    const componentId = node[HYDRATE_ID] || node.getAttribute(HYDRATE_ID);
    if (componentId) {
      orgLocNodes.set(componentId, node);
    }
    let i2 = 0;
    if (node.shadowRoot) {
      for (; i2 < node.shadowRoot.childNodes.length; i2++) {
        initializeDocumentHydrate(node.shadowRoot.childNodes[i2], orgLocNodes);
      }
    }
    const nonShadowNodes = node.__childNodes || node.childNodes;
    for (i2 = 0; i2 < nonShadowNodes.length; i2++) {
      initializeDocumentHydrate(nonShadowNodes[i2], orgLocNodes);
    }
  } else if (node.nodeType === 8) {
    const childIdSplt = node.nodeValue.split(".");
    if (childIdSplt[0] === ORG_LOCATION_ID) {
      orgLocNodes.set(childIdSplt[1] + "." + childIdSplt[2], node);
      node.nodeValue = "";
      node["s-en"] = childIdSplt[3];
    }
  }
};
var createSimpleVNode = (vnode) => {
  const defaultVNode = {
    $flags$: 0,
    $hostId$: null,
    $nodeId$: null,
    $depth$: null,
    $index$: "0",
    $elm$: null,
    $attrs$: null,
    $children$: null,
    $key$: null,
    $name$: null,
    $tag$: null,
    $text$: null
  };
  return __spreadValues(__spreadValues({}, defaultVNode), vnode);
};
function addSlot(slotName, slotId, childVNode, node, parentVNode, childRenderNodes, slotNodes, shadowRootNodes, slottedNodes) {
  node["s-sr"] = true;
  childVNode.$name$ = slotName || null;
  childVNode.$tag$ = "slot";
  const parentNodeId = (parentVNode == null ? void 0 : parentVNode.$elm$) ? parentVNode.$elm$["s-id"] || parentVNode.$elm$.getAttribute("s-id") : "";
  if (shadowRootNodes && win.document) {
    const slot = childVNode.$elm$ = win.document.createElement(childVNode.$tag$);
    if (childVNode.$name$) {
      childVNode.$elm$.setAttribute("name", slotName);
    }
    if (parentVNode.$elm$.shadowRoot && parentNodeId && parentNodeId !== childVNode.$hostId$) {
      internalCall(parentVNode.$elm$, "insertBefore")(slot, internalCall(parentVNode.$elm$, "children")[0]);
    } else {
      internalCall(internalCall(node, "parentNode"), "insertBefore")(slot, node);
    }
    addSlottedNodes(slottedNodes, slotId, slotName, node, childVNode.$hostId$);
    node.remove();
    if (childVNode.$depth$ === "0") {
      shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
    }
  } else {
    const slot = childVNode.$elm$;
    const shouldMove = parentNodeId && parentNodeId !== childVNode.$hostId$ && parentVNode.$elm$.shadowRoot;
    addSlottedNodes(slottedNodes, slotId, slotName, node, shouldMove ? parentNodeId : childVNode.$hostId$);
    patchSlotNode(node);
    if (shouldMove) {
      parentVNode.$elm$.insertBefore(slot, parentVNode.$elm$.children[0]);
    }
  }
  childRenderNodes.push(childVNode);
  slotNodes.push(childVNode);
  if (!parentVNode.$children$) {
    parentVNode.$children$ = [];
  }
  parentVNode.$children$[childVNode.$index$] = childVNode;
}
var addSlottedNodes = (slottedNodes, slotNodeId, slotName, slotNode, hostId) => {
  var _a, _b;
  let slottedNode = slotNode.nextSibling;
  slottedNodes[slotNodeId] = slottedNodes[slotNodeId] || [];
  if (!slottedNode || ((_a = slottedNode.nodeValue) == null ? void 0 : _a.startsWith(SLOT_NODE_ID + "."))) return;
  do {
    if (slottedNode && ((slottedNode["getAttribute"] && slottedNode.getAttribute("slot") || slottedNode["s-sn"]) === slotName || slotName === "" && !slottedNode["s-sn"] && (!slottedNode["getAttribute"] || !slottedNode.getAttribute("slot")) && (slottedNode.nodeType === 8 || slottedNode.nodeType === 3))) {
      slottedNode["s-sn"] = slotName;
      slottedNodes[slotNodeId].push({
        slot: slotNode,
        node: slottedNode,
        hostId
      });
    }
    slottedNode = slottedNode == null ? void 0 : slottedNode.nextSibling;
  } while (slottedNode && !((_b = slottedNode.nodeValue) == null ? void 0 : _b.startsWith(SLOT_NODE_ID + ".")));
};
var findCorrespondingNode = (node, type) => {
  let sibling = node;
  do {
    sibling = sibling.nextSibling;
  } while (sibling && (sibling.nodeType !== type || !sibling.nodeValue));
  return sibling;
};
var createSupportsRuleRe = (selector) => {
  const safeSelector2 = escapeRegExpSpecialCharacters(selector);
  return new RegExp(
    // First capture group: match any context before the selector that's not inside @supports selector()
    // Using negative lookahead to avoid matching inside @supports selector(...) condition
    `(^|[^@]|@(?!supports\\s+selector\\s*\\([^{]*?${safeSelector2}))(${safeSelector2}\\b)`,
    "g"
  );
};
createSupportsRuleRe("::slotted");
createSupportsRuleRe(":host");
createSupportsRuleRe(":host-context");
var computeMode = (elm) => modeResolutionChain.map((h2) => h2(elm)).find((m) => !!m);
var setMode = (handler) => modeResolutionChain.push(handler);
var getMode = (ref) => {
  var _a;
  return (_a = getHostRef(ref)) == null ? void 0 : _a.$modeName$;
};
var parsePropertyValue = (propValue, propType, isFormAssociated) => {
  if (typeof propValue === "string" && propValue.startsWith(SERIALIZED_PREFIX)) {
    propValue = deserializeProperty(propValue);
    return propValue;
  }
  if (typeof propValue === "string" && (propType & 16 || propType & 8) && (propValue.startsWith("{") && propValue.endsWith("}") || propValue.startsWith("[") && propValue.endsWith("]"))) {
    try {
      return JSON.parse(propValue);
    } catch (e) {
    }
  }
  if (propValue != null && !isComplexType(propValue)) {
    if (propType & 4) {
      {
        return propValue === "false" ? false : propValue === "" || !!propValue;
      }
    }
    if (propType & 2) {
      return typeof propValue === "string" ? parseFloat(propValue) : typeof propValue === "number" ? propValue : NaN;
    }
    if (propType & 1) {
      return String(propValue);
    }
    return propValue;
  }
  return propValue;
};
var getElement = (ref) => {
  var _a;
  return (_a = getHostRef(ref)) == null ? void 0 : _a.$hostElement$;
};
var createEvent = (ref, name, flags) => {
  const elm = getElement(ref);
  return {
    emit: (detail) => {
      return emitEvent(elm, name, {
        bubbles: !!(flags & 4),
        composed: !!(flags & 2),
        cancelable: !!(flags & 1),
        detail
      });
    }
  };
};
var emitEvent = (elm, name, opts) => {
  const ev = plt.ce(name, opts);
  elm.dispatchEvent(ev);
  return ev;
};
var setAccessor = (elm, memberName, oldValue, newValue, isSvg, flags, initialRender) => {
  if (oldValue === newValue) {
    return;
  }
  let isProp = isMemberInElement(elm, memberName);
  let ln = memberName.toLowerCase();
  if (memberName === "class") {
    const classList = elm.classList;
    const oldClasses = parseClassList(oldValue);
    let newClasses = parseClassList(newValue);
    if ((elm["s-si"] || elm["s-sc"]) && initialRender) {
      const scopeId2 = elm["s-sc"] || elm["s-si"];
      newClasses.push(scopeId2);
      oldClasses.forEach((c) => {
        if (c.startsWith(scopeId2)) newClasses.push(c);
      });
      newClasses = [...new Set(newClasses)].filter((c) => c);
      classList.add(...newClasses);
    } else {
      classList.remove(...oldClasses.filter((c) => c && !newClasses.includes(c)));
      classList.add(...newClasses.filter((c) => c && !oldClasses.includes(c)));
    }
  } else if (memberName === "style") {
    {
      for (const prop in oldValue) {
        if (!newValue || newValue[prop] == null) {
          if (prop.includes("-")) {
            elm.style.removeProperty(prop);
          } else {
            elm.style[prop] = "";
          }
        }
      }
    }
    for (const prop in newValue) {
      if (!oldValue || newValue[prop] !== oldValue[prop]) {
        if (prop.includes("-")) {
          elm.style.setProperty(prop, newValue[prop]);
        } else {
          elm.style[prop] = newValue[prop];
        }
      }
    }
  } else if (memberName === "key") ;
  else if (memberName === "ref") {
    if (newValue) {
      newValue(elm);
    }
  } else if (!isProp && memberName[0] === "o" && memberName[1] === "n") {
    if (memberName[2] === "-") {
      memberName = memberName.slice(3);
    } else if (isMemberInElement(win, ln)) {
      memberName = ln.slice(2);
    } else {
      memberName = ln[2] + memberName.slice(3);
    }
    if (oldValue || newValue) {
      const capture = memberName.endsWith(CAPTURE_EVENT_SUFFIX);
      memberName = memberName.replace(CAPTURE_EVENT_REGEX, "");
      if (oldValue) {
        plt.rel(elm, memberName, oldValue, capture);
      }
      if (newValue) {
        plt.ael(elm, memberName, newValue, capture);
      }
    }
  } else {
    const isComplex = isComplexType(newValue);
    if ((isProp || isComplex && newValue !== null) && !isSvg) {
      try {
        if (!elm.tagName.includes("-")) {
          const n = newValue == null ? "" : newValue;
          if (memberName === "list") {
            isProp = false;
          } else if (oldValue == null || elm[memberName] != n) {
            if (typeof elm.__lookupSetter__(memberName) === "function") {
              elm[memberName] = n;
            } else {
              elm.setAttribute(memberName, n);
            }
          }
        } else if (elm[memberName] !== newValue) {
          elm[memberName] = newValue;
        }
      } catch (e) {
      }
    }
    let xlink = false;
    {
      if (ln !== (ln = ln.replace(/^xlink\:?/, ""))) {
        memberName = ln;
        xlink = true;
      }
    }
    if (newValue == null || newValue === false) {
      if (newValue !== false || elm.getAttribute(memberName) === "") {
        if (xlink) {
          elm.removeAttributeNS(XLINK_NS, memberName);
        } else {
          elm.removeAttribute(memberName);
        }
      }
    } else if ((!isProp || flags & 4 || isSvg) && !isComplex && elm.nodeType === 1) {
      newValue = newValue === true ? "" : newValue;
      if (xlink) {
        elm.setAttributeNS(XLINK_NS, memberName, newValue);
      } else {
        elm.setAttribute(memberName, newValue);
      }
    }
  }
};
var parseClassListRegex = /\s/;
var parseClassList = (value) => {
  if (typeof value === "object" && value && "baseVal" in value) {
    value = value.baseVal;
  }
  if (!value || typeof value !== "string") {
    return [];
  }
  return value.split(parseClassListRegex);
};
var CAPTURE_EVENT_SUFFIX = "Capture";
var CAPTURE_EVENT_REGEX = new RegExp(CAPTURE_EVENT_SUFFIX + "$");
var updateElement = (oldVnode, newVnode, isSvgMode2, isInitialRender) => {
  const elm = newVnode.$elm$.nodeType === 11 && newVnode.$elm$.host ? newVnode.$elm$.host : newVnode.$elm$;
  const oldVnodeAttrs = oldVnode && oldVnode.$attrs$ || {};
  const newVnodeAttrs = newVnode.$attrs$ || {};
  {
    for (const memberName of sortedAttrNames(Object.keys(oldVnodeAttrs))) {
      if (!(memberName in newVnodeAttrs)) {
        setAccessor(elm, memberName, oldVnodeAttrs[memberName], void 0, isSvgMode2, newVnode.$flags$, isInitialRender);
      }
    }
  }
  for (const memberName of sortedAttrNames(Object.keys(newVnodeAttrs))) {
    setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode2, newVnode.$flags$, isInitialRender);
  }
};
function sortedAttrNames(attrNames) {
  return attrNames.includes("ref") ? (
    // we need to sort these to ensure that `'ref'` is the last attr
    [...attrNames.filter((attr) => attr !== "ref"), "ref"]
  ) : (
    // no need to sort, return the original array
    attrNames
  );
}
var scopeId;
var contentRef;
var hostTagName;
var useNativeShadowDom = false;
var checkSlotFallbackVisibility = false;
var checkSlotRelocate = false;
var isSvgMode = false;
var createElm = (oldParentVNode, newParentVNode, childIndex) => {
  var _a;
  const newVNode2 = newParentVNode.$children$[childIndex];
  let i2 = 0;
  let elm;
  let childNode;
  let oldVNode;
  if (!useNativeShadowDom) {
    checkSlotRelocate = true;
    if (newVNode2.$tag$ === "slot") {
      newVNode2.$flags$ |= newVNode2.$children$ ? (
        // slot element has fallback content
        // still create an element that "mocks" the slot element
        2
      ) : (
        // slot element does not have fallback content
        // create an html comment we'll use to always reference
        // where actual slot content should sit next to
        1
      );
    }
  }
  if (newVNode2.$text$ !== null) {
    elm = newVNode2.$elm$ = win.document.createTextNode(newVNode2.$text$);
  } else if (newVNode2.$flags$ & 1) {
    elm = newVNode2.$elm$ = win.document.createTextNode("");
    {
      updateElement(null, newVNode2, isSvgMode);
    }
  } else {
    if (!isSvgMode) {
      isSvgMode = newVNode2.$tag$ === "svg";
    }
    if (!win.document) {
      throw new Error("You are trying to render a Stencil component in an environment that doesn't support the DOM. Make sure to populate the [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window/window) object before rendering a component.");
    }
    elm = newVNode2.$elm$ = win.document.createElementNS(isSvgMode ? SVG_NS : HTML_NS, !useNativeShadowDom && BUILD.slotRelocation && newVNode2.$flags$ & 2 ? "slot-fb" : newVNode2.$tag$);
    if (isSvgMode && newVNode2.$tag$ === "foreignObject") {
      isSvgMode = false;
    }
    {
      updateElement(null, newVNode2, isSvgMode);
    }
    if (isDef(scopeId) && elm["s-si"] !== scopeId) {
      elm.classList.add(elm["s-si"] = scopeId);
    }
    if (newVNode2.$children$) {
      for (i2 = 0; i2 < newVNode2.$children$.length; ++i2) {
        childNode = createElm(oldParentVNode, newVNode2, i2);
        if (childNode) {
          elm.appendChild(childNode);
        }
      }
    }
    {
      if (newVNode2.$tag$ === "svg") {
        isSvgMode = false;
      } else if (elm.tagName === "foreignObject") {
        isSvgMode = true;
      }
    }
  }
  elm["s-hn"] = hostTagName;
  {
    if (newVNode2.$flags$ & (2 | 1)) {
      elm["s-sr"] = true;
      elm["s-cr"] = contentRef;
      elm["s-sn"] = newVNode2.$name$ || "";
      elm["s-rf"] = (_a = newVNode2.$attrs$) == null ? void 0 : _a.ref;
      patchSlotNode(elm);
      oldVNode = oldParentVNode && oldParentVNode.$children$ && oldParentVNode.$children$[childIndex];
      if (oldVNode && oldVNode.$tag$ === newVNode2.$tag$ && oldParentVNode.$elm$) {
        {
          relocateToHostRoot(oldParentVNode.$elm$);
        }
      }
      {
        addRemoveSlotScopedClass(contentRef, elm, newParentVNode.$elm$, oldParentVNode == null ? void 0 : oldParentVNode.$elm$);
      }
    }
  }
  return elm;
};
var relocateToHostRoot = (parentElm) => {
  plt.$flags$ |= 1;
  const host = parentElm.closest(hostTagName.toLowerCase());
  if (host != null) {
    const contentRefNode = Array.from(host.__childNodes || host.childNodes).find((ref) => ref["s-cr"]);
    const childNodeArray = Array.from(parentElm.__childNodes || parentElm.childNodes);
    for (const childNode of contentRefNode ? childNodeArray.reverse() : childNodeArray) {
      if (childNode["s-sh"] != null) {
        insertBefore(host, childNode, contentRefNode != null ? contentRefNode : null);
        childNode["s-sh"] = void 0;
        checkSlotRelocate = true;
      }
    }
  }
  plt.$flags$ &= -2;
};
var putBackInOriginalLocation = (parentElm, recursive) => {
  plt.$flags$ |= 1;
  const oldSlotChildNodes = Array.from(parentElm.__childNodes || parentElm.childNodes);
  if (parentElm["s-sr"] && BUILD.experimentalSlotFixes) {
    let node = parentElm;
    while (node = node.nextSibling) {
      if (node && node["s-sn"] === parentElm["s-sn"] && node["s-sh"] === hostTagName) {
        oldSlotChildNodes.push(node);
      }
    }
  }
  for (let i2 = oldSlotChildNodes.length - 1; i2 >= 0; i2--) {
    const childNode = oldSlotChildNodes[i2];
    if (childNode["s-hn"] !== hostTagName && childNode["s-ol"]) {
      insertBefore(referenceNode(childNode).parentNode, childNode, referenceNode(childNode));
      childNode["s-ol"].remove();
      childNode["s-ol"] = void 0;
      childNode["s-sh"] = void 0;
      checkSlotRelocate = true;
    }
    if (recursive) {
      putBackInOriginalLocation(childNode, recursive);
    }
  }
  plt.$flags$ &= -2;
};
var addVnodes = (parentElm, before, parentVNode, vnodes, startIdx, endIdx) => {
  let containerElm = parentElm["s-cr"] && parentElm["s-cr"].parentNode || parentElm;
  let childNode;
  if (containerElm.shadowRoot && containerElm.tagName === hostTagName) {
    containerElm = containerElm.shadowRoot;
  }
  for (; startIdx <= endIdx; ++startIdx) {
    if (vnodes[startIdx]) {
      childNode = createElm(null, parentVNode, startIdx);
      if (childNode) {
        vnodes[startIdx].$elm$ = childNode;
        insertBefore(containerElm, childNode, referenceNode(before));
      }
    }
  }
};
var removeVnodes = (vnodes, startIdx, endIdx) => {
  for (let index = startIdx; index <= endIdx; ++index) {
    const vnode = vnodes[index];
    if (vnode) {
      const elm = vnode.$elm$;
      nullifyVNodeRefs(vnode);
      if (elm) {
        {
          checkSlotFallbackVisibility = true;
          if (elm["s-ol"]) {
            elm["s-ol"].remove();
          } else {
            putBackInOriginalLocation(elm, true);
          }
        }
        elm.remove();
      }
    }
  }
};
var updateChildren = (parentElm, oldCh, newVNode2, newCh, isInitialRender = false) => {
  let oldStartIdx = 0;
  let newStartIdx = 0;
  let idxInOld = 0;
  let i2 = 0;
  let oldEndIdx = oldCh.length - 1;
  let oldStartVnode = oldCh[0];
  let oldEndVnode = oldCh[oldEndIdx];
  let newEndIdx = newCh.length - 1;
  let newStartVnode = newCh[0];
  let newEndVnode = newCh[newEndIdx];
  let node;
  let elmToMove;
  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (oldStartVnode == null) {
      oldStartVnode = oldCh[++oldStartIdx];
    } else if (oldEndVnode == null) {
      oldEndVnode = oldCh[--oldEndIdx];
    } else if (newStartVnode == null) {
      newStartVnode = newCh[++newStartIdx];
    } else if (newEndVnode == null) {
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newStartVnode, isInitialRender)) {
      patch(oldStartVnode, newStartVnode, isInitialRender);
      oldStartVnode = oldCh[++oldStartIdx];
      newStartVnode = newCh[++newStartIdx];
    } else if (isSameVnode(oldEndVnode, newEndVnode, isInitialRender)) {
      patch(oldEndVnode, newEndVnode, isInitialRender);
      oldEndVnode = oldCh[--oldEndIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newEndVnode, isInitialRender)) {
      if (oldStartVnode.$tag$ === "slot" || newEndVnode.$tag$ === "slot") {
        putBackInOriginalLocation(oldStartVnode.$elm$.parentNode, false);
      }
      patch(oldStartVnode, newEndVnode, isInitialRender);
      insertBefore(parentElm, oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
      oldStartVnode = oldCh[++oldStartIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldEndVnode, newStartVnode, isInitialRender)) {
      if (oldStartVnode.$tag$ === "slot" || newEndVnode.$tag$ === "slot") {
        putBackInOriginalLocation(oldEndVnode.$elm$.parentNode, false);
      }
      patch(oldEndVnode, newStartVnode, isInitialRender);
      insertBefore(parentElm, oldEndVnode.$elm$, oldStartVnode.$elm$);
      oldEndVnode = oldCh[--oldEndIdx];
      newStartVnode = newCh[++newStartIdx];
    } else {
      idxInOld = -1;
      {
        for (i2 = oldStartIdx; i2 <= oldEndIdx; ++i2) {
          if (oldCh[i2] && oldCh[i2].$key$ !== null && oldCh[i2].$key$ === newStartVnode.$key$) {
            idxInOld = i2;
            break;
          }
        }
      }
      if (idxInOld >= 0) {
        elmToMove = oldCh[idxInOld];
        if (elmToMove.$tag$ !== newStartVnode.$tag$) {
          node = createElm(oldCh && oldCh[newStartIdx], newVNode2, idxInOld);
        } else {
          patch(elmToMove, newStartVnode, isInitialRender);
          oldCh[idxInOld] = void 0;
          node = elmToMove.$elm$;
        }
        newStartVnode = newCh[++newStartIdx];
      } else {
        node = createElm(oldCh && oldCh[newStartIdx], newVNode2, newStartIdx);
        newStartVnode = newCh[++newStartIdx];
      }
      if (node) {
        {
          insertBefore(referenceNode(oldStartVnode.$elm$).parentNode, node, referenceNode(oldStartVnode.$elm$));
        }
      }
    }
  }
  if (oldStartIdx > oldEndIdx) {
    addVnodes(parentElm, newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$, newVNode2, newCh, newStartIdx, newEndIdx);
  } else if (newStartIdx > newEndIdx) {
    removeVnodes(oldCh, oldStartIdx, oldEndIdx);
  }
};
var isSameVnode = (leftVNode, rightVNode, isInitialRender = false) => {
  if (leftVNode.$tag$ === rightVNode.$tag$) {
    if (leftVNode.$tag$ === "slot") {
      return leftVNode.$name$ === rightVNode.$name$;
    }
    if (!isInitialRender) {
      return leftVNode.$key$ === rightVNode.$key$;
    }
    if (isInitialRender && !leftVNode.$key$ && rightVNode.$key$) {
      leftVNode.$key$ = rightVNode.$key$;
    }
    return true;
  }
  return false;
};
var referenceNode = (node) => node && node["s-ol"] || node;
var patch = (oldVNode, newVNode2, isInitialRender = false) => {
  const elm = newVNode2.$elm$ = oldVNode.$elm$;
  const oldChildren = oldVNode.$children$;
  const newChildren = newVNode2.$children$;
  const tag = newVNode2.$tag$;
  const text = newVNode2.$text$;
  let defaultHolder;
  if (text === null) {
    {
      isSvgMode = tag === "svg" ? true : tag === "foreignObject" ? false : isSvgMode;
    }
    {
      if (tag === "slot" && !useNativeShadowDom) {
        if (oldVNode.$name$ !== newVNode2.$name$) {
          newVNode2.$elm$["s-sn"] = newVNode2.$name$ || "";
          relocateToHostRoot(newVNode2.$elm$.parentElement);
        }
      }
      updateElement(oldVNode, newVNode2, isSvgMode, isInitialRender);
    }
    if (oldChildren !== null && newChildren !== null) {
      updateChildren(elm, oldChildren, newVNode2, newChildren, isInitialRender);
    } else if (newChildren !== null) {
      if (oldVNode.$text$ !== null) {
        elm.textContent = "";
      }
      addVnodes(elm, null, newVNode2, newChildren, 0, newChildren.length - 1);
    } else if (
      // don't do this on initial render as it can cause non-hydrated content to be removed
      !isInitialRender && BUILD.updatable && oldChildren !== null
    ) {
      removeVnodes(oldChildren, 0, oldChildren.length - 1);
    } else if (isInitialRender && BUILD.updatable && oldChildren !== null && newChildren === null) {
      newVNode2.$children$ = oldChildren;
    }
    if (isSvgMode && tag === "svg") {
      isSvgMode = false;
    }
  } else if (defaultHolder = elm["s-cr"]) {
    defaultHolder.parentNode.textContent = text;
  } else if (oldVNode.$text$ !== text) {
    elm.data = text;
  }
};
var relocateNodes = [];
var markSlotContentForRelocation = (elm) => {
  let node;
  let hostContentNodes;
  let j;
  const children = elm.__childNodes || elm.childNodes;
  for (const childNode of children) {
    if (childNode["s-sr"] && (node = childNode["s-cr"]) && node.parentNode) {
      hostContentNodes = node.parentNode.__childNodes || node.parentNode.childNodes;
      const slotName = childNode["s-sn"];
      for (j = hostContentNodes.length - 1; j >= 0; j--) {
        node = hostContentNodes[j];
        if (!node["s-cn"] && !node["s-nr"] && node["s-hn"] !== childNode["s-hn"] && (!node["s-sh"] || node["s-sh"] !== childNode["s-hn"])) {
          if (isNodeLocatedInSlot(node, slotName)) {
            let relocateNodeData = relocateNodes.find((r) => r.$nodeToRelocate$ === node);
            checkSlotFallbackVisibility = true;
            node["s-sn"] = node["s-sn"] || slotName;
            if (relocateNodeData) {
              relocateNodeData.$nodeToRelocate$["s-sh"] = childNode["s-hn"];
              relocateNodeData.$slotRefNode$ = childNode;
            } else {
              node["s-sh"] = childNode["s-hn"];
              relocateNodes.push({
                $slotRefNode$: childNode,
                $nodeToRelocate$: node
              });
            }
            if (node["s-sr"]) {
              relocateNodes.map((relocateNode) => {
                if (isNodeLocatedInSlot(relocateNode.$nodeToRelocate$, node["s-sn"])) {
                  relocateNodeData = relocateNodes.find((r) => r.$nodeToRelocate$ === node);
                  if (relocateNodeData && !relocateNode.$slotRefNode$) {
                    relocateNode.$slotRefNode$ = relocateNodeData.$slotRefNode$;
                  }
                }
              });
            }
          } else if (!relocateNodes.some((r) => r.$nodeToRelocate$ === node)) {
            relocateNodes.push({
              $nodeToRelocate$: node
            });
          }
        }
      }
    }
    if (childNode.nodeType === 1) {
      markSlotContentForRelocation(childNode);
    }
  }
};
var nullifyVNodeRefs = (vNode) => {
  {
    vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(null);
    vNode.$children$ && vNode.$children$.map(nullifyVNodeRefs);
  }
};
var insertBefore = (parent, newNode, reference) => {
  if (typeof newNode["s-sn"] === "string" && !!newNode["s-sr"] && !!newNode["s-cr"]) {
    addRemoveSlotScopedClass(newNode["s-cr"], newNode, parent, newNode.parentElement);
  } else if (typeof newNode["s-sn"] === "string") {
    if (parent.getRootNode().nodeType !== 11) {
      patchParentNode(newNode);
    }
    parent.insertBefore(newNode, reference);
    const {
      slotNode
    } = findSlotFromSlottedNode(newNode);
    if (slotNode) dispatchSlotChangeEvent(slotNode);
    return newNode;
  }
  if (parent.__insertBefore) {
    return parent.__insertBefore(newNode, reference);
  } else {
    return parent == null ? void 0 : parent.insertBefore(newNode, reference);
  }
};
function addRemoveSlotScopedClass(reference, slotNode, newParent, oldParent) {
  var _a, _b;
  let scopeId2;
  if (reference && typeof slotNode["s-sn"] === "string" && !!slotNode["s-sr"] && reference.parentNode && reference.parentNode["s-sc"] && (scopeId2 = slotNode["s-si"] || reference.parentNode["s-sc"])) {
    const scopeName = slotNode["s-sn"];
    const hostName = slotNode["s-hn"];
    (_a = newParent.classList) == null ? void 0 : _a.add(scopeId2 + "-s");
    if (oldParent && ((_b = oldParent.classList) == null ? void 0 : _b.contains(scopeId2 + "-s"))) {
      let child = (oldParent.__childNodes || oldParent.childNodes)[0];
      let found = false;
      while (child) {
        if (child["s-sn"] !== scopeName && child["s-hn"] === hostName && !!child["s-sr"]) {
          found = true;
          break;
        }
        child = child.nextSibling;
      }
      if (!found) oldParent.classList.remove(scopeId2 + "-s");
    }
  }
}
var renderVdom = (hostRef, renderFnResults, isInitialLoad = false) => {
  var _a, _b, _c, _d, _e;
  const hostElm = hostRef.$hostElement$;
  const cmpMeta = hostRef.$cmpMeta$;
  const oldVNode = hostRef.$vnode$ || newVNode(null, null);
  const isHostElement = isHost(renderFnResults);
  const rootVnode = isHostElement ? renderFnResults : h(null, null, renderFnResults);
  hostTagName = hostElm.tagName;
  if (cmpMeta.$attrsToReflect$) {
    rootVnode.$attrs$ = rootVnode.$attrs$ || {};
    cmpMeta.$attrsToReflect$.map(([propName, attribute]) => rootVnode.$attrs$[attribute] = hostElm[propName]);
  }
  if (isInitialLoad && rootVnode.$attrs$) {
    for (const key of Object.keys(rootVnode.$attrs$)) {
      if (hostElm.hasAttribute(key) && !["key", "ref", "style", "class"].includes(key)) {
        rootVnode.$attrs$[key] = hostElm[key];
      }
    }
  }
  rootVnode.$tag$ = null;
  rootVnode.$flags$ |= 4;
  hostRef.$vnode$ = rootVnode;
  rootVnode.$elm$ = oldVNode.$elm$ = hostElm.shadowRoot || hostElm;
  {
    scopeId = hostElm["s-sc"];
  }
  useNativeShadowDom = !!(cmpMeta.$flags$ & 1) && !(cmpMeta.$flags$ & 128);
  {
    contentRef = hostElm["s-cr"];
    checkSlotFallbackVisibility = false;
  }
  patch(oldVNode, rootVnode, isInitialLoad);
  {
    plt.$flags$ |= 1;
    if (checkSlotRelocate) {
      markSlotContentForRelocation(rootVnode.$elm$);
      for (const relocateData of relocateNodes) {
        const nodeToRelocate = relocateData.$nodeToRelocate$;
        if (!nodeToRelocate["s-ol"] && win.document) {
          const orgLocationNode = win.document.createTextNode("");
          orgLocationNode["s-nr"] = nodeToRelocate;
          insertBefore(nodeToRelocate.parentNode, nodeToRelocate["s-ol"] = orgLocationNode, nodeToRelocate);
        }
      }
      for (const relocateData of relocateNodes) {
        const nodeToRelocate = relocateData.$nodeToRelocate$;
        const slotRefNode = relocateData.$slotRefNode$;
        if (slotRefNode) {
          const parentNodeRef = slotRefNode.parentNode;
          let insertBeforeNode = slotRefNode.nextSibling;
          if (insertBeforeNode && insertBeforeNode.nodeType === 1) {
            let orgLocationNode = (_a = nodeToRelocate["s-ol"]) == null ? void 0 : _a.previousSibling;
            while (orgLocationNode) {
              let refNode = (_b = orgLocationNode["s-nr"]) != null ? _b : null;
              if (refNode && refNode["s-sn"] === nodeToRelocate["s-sn"] && parentNodeRef === (refNode.__parentNode || refNode.parentNode)) {
                refNode = refNode.nextSibling;
                while (refNode === nodeToRelocate || (refNode == null ? void 0 : refNode["s-sr"])) {
                  refNode = refNode == null ? void 0 : refNode.nextSibling;
                }
                if (!refNode || !refNode["s-nr"]) {
                  insertBeforeNode = refNode;
                  break;
                }
              }
              orgLocationNode = orgLocationNode.previousSibling;
            }
          }
          const parent = nodeToRelocate.__parentNode || nodeToRelocate.parentNode;
          const nextSibling = nodeToRelocate.__nextSibling || nodeToRelocate.nextSibling;
          if (!insertBeforeNode && parentNodeRef !== parent || nextSibling !== insertBeforeNode) {
            if (nodeToRelocate !== insertBeforeNode) {
              insertBefore(parentNodeRef, nodeToRelocate, insertBeforeNode);
              if (nodeToRelocate.nodeType === 1 && nodeToRelocate.tagName !== "SLOT-FB") {
                nodeToRelocate.hidden = (_c = nodeToRelocate["s-ih"]) != null ? _c : false;
              }
            }
          }
          nodeToRelocate && typeof slotRefNode["s-rf"] === "function" && slotRefNode["s-rf"](slotRefNode);
        } else {
          if (nodeToRelocate.nodeType === 1) {
            if (isInitialLoad) {
              nodeToRelocate["s-ih"] = (_d = nodeToRelocate.hidden) != null ? _d : false;
            }
            nodeToRelocate.hidden = true;
          }
        }
      }
    }
    if (checkSlotFallbackVisibility) {
      updateFallbackSlotVisibility(rootVnode.$elm$);
    }
    plt.$flags$ &= -2;
    relocateNodes.length = 0;
  }
  if (cmpMeta.$flags$ & 2) {
    const children = rootVnode.$elm$.__childNodes || rootVnode.$elm$.childNodes;
    for (const childNode of children) {
      if (childNode["s-hn"] !== hostTagName && !childNode["s-sh"]) {
        if (isInitialLoad && childNode["s-ih"] == null) {
          childNode["s-ih"] = (_e = childNode.hidden) != null ? _e : false;
        }
        childNode.hidden = true;
      }
    }
  }
  contentRef = void 0;
};
var attachToAncestor = (hostRef, ancestorComponent) => {
  if (ancestorComponent && !hostRef.$onRenderResolve$ && ancestorComponent["s-p"]) {
    const index = ancestorComponent["s-p"].push(new Promise((r) => hostRef.$onRenderResolve$ = () => {
      ancestorComponent["s-p"].splice(index - 1, 1);
      r();
    }));
  }
};
var scheduleUpdate = (hostRef, isInitialLoad) => {
  {
    hostRef.$flags$ |= 16;
  }
  if (hostRef.$flags$ & 4) {
    hostRef.$flags$ |= 512;
    return;
  }
  attachToAncestor(hostRef, hostRef.$ancestorComponent$);
  const dispatch = () => dispatchHooks(hostRef, isInitialLoad);
  if (isInitialLoad) {
    queueMicrotask(() => {
      dispatch();
    });
    return;
  }
  return writeTask(dispatch);
};
var dispatchHooks = (hostRef, isInitialLoad) => {
  const elm = hostRef.$hostElement$;
  const endSchedule = createTime("scheduleUpdate", hostRef.$cmpMeta$.$tagName$);
  const instance = hostRef.$lazyInstance$;
  if (!instance) {
    throw new Error(`Can't render component <${elm.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`);
  }
  let maybePromise;
  if (isInitialLoad) {
    {
      hostRef.$flags$ |= 256;
      if (hostRef.$queuedListeners$) {
        hostRef.$queuedListeners$.map(([methodName, event]) => safeCall(instance, methodName, event, elm));
        hostRef.$queuedListeners$ = void 0;
      }
    }
    maybePromise = safeCall(instance, "componentWillLoad", void 0, elm);
  } else {
    maybePromise = safeCall(instance, "componentWillUpdate", void 0, elm);
  }
  maybePromise = enqueue(maybePromise, () => safeCall(instance, "componentWillRender", void 0, elm));
  endSchedule();
  return enqueue(maybePromise, () => updateComponent(hostRef, instance, isInitialLoad));
};
var enqueue = (maybePromise, fn) => isPromisey(maybePromise) ? maybePromise.then(fn).catch((err2) => {
  console.error(err2);
  fn();
}) : fn();
var isPromisey = (maybePromise) => maybePromise instanceof Promise || maybePromise && maybePromise.then && typeof maybePromise.then === "function";
var updateComponent = (hostRef, instance, isInitialLoad) => __async(null, null, function* () {
  var _a;
  const elm = hostRef.$hostElement$;
  const endUpdate = createTime("update", hostRef.$cmpMeta$.$tagName$);
  const rc = elm["s-rc"];
  if (isInitialLoad) {
    attachStyles(hostRef);
  }
  const endRender = createTime("render", hostRef.$cmpMeta$.$tagName$);
  {
    callRender(hostRef, instance, elm, isInitialLoad);
  }
  if (rc) {
    rc.map((cb) => cb());
    elm["s-rc"] = void 0;
  }
  endRender();
  endUpdate();
  {
    const childrenPromises = (_a = elm["s-p"]) != null ? _a : [];
    const postUpdate = () => postUpdateComponent(hostRef);
    if (childrenPromises.length === 0) {
      postUpdate();
    } else {
      Promise.all(childrenPromises).then(postUpdate);
      hostRef.$flags$ |= 4;
      childrenPromises.length = 0;
    }
  }
});
var callRender = (hostRef, instance, elm, isInitialLoad) => {
  try {
    instance = instance.render && instance.render();
    {
      hostRef.$flags$ &= -17;
    }
    {
      hostRef.$flags$ |= 2;
    }
    {
      {
        {
          renderVdom(hostRef, instance, isInitialLoad);
        }
      }
    }
  } catch (e) {
    consoleError(e, hostRef.$hostElement$);
  }
  return null;
};
var postUpdateComponent = (hostRef) => {
  const tagName = hostRef.$cmpMeta$.$tagName$;
  const elm = hostRef.$hostElement$;
  const endPostUpdate = createTime("postUpdate", tagName);
  const instance = hostRef.$lazyInstance$;
  const ancestorComponent = hostRef.$ancestorComponent$;
  safeCall(instance, "componentDidRender", void 0, elm);
  if (!(hostRef.$flags$ & 64)) {
    hostRef.$flags$ |= 64;
    {
      addHydratedFlag(elm);
    }
    safeCall(instance, "componentDidLoad", void 0, elm);
    endPostUpdate();
    {
      hostRef.$onReadyResolve$(elm);
      if (!ancestorComponent) {
        appDidLoad();
      }
    }
  } else {
    safeCall(instance, "componentDidUpdate", void 0, elm);
    endPostUpdate();
  }
  {
    hostRef.$onInstanceResolve$(elm);
  }
  {
    if (hostRef.$onRenderResolve$) {
      hostRef.$onRenderResolve$();
      hostRef.$onRenderResolve$ = void 0;
    }
    if (hostRef.$flags$ & 512) {
      nextTick(() => scheduleUpdate(hostRef, false));
    }
    hostRef.$flags$ &= -517;
  }
};
var forceUpdate = (ref) => {
  var _a;
  {
    const hostRef = getHostRef(ref);
    const isConnected = (_a = hostRef == null ? void 0 : hostRef.$hostElement$) == null ? void 0 : _a.isConnected;
    if (isConnected && (hostRef.$flags$ & (2 | 16)) === 2) {
      scheduleUpdate(hostRef, false);
    }
    return isConnected;
  }
};
var appDidLoad = (who) => {
  var _a;
  nextTick(() => emitEvent(win, "appload", {
    detail: {
      namespace: NAMESPACE
    }
  }));
  {
    if ((_a = plt.$orgLocNodes$) == null ? void 0 : _a.size) {
      plt.$orgLocNodes$.clear();
    }
  }
};
var safeCall = (instance, method, arg, elm) => {
  if (instance && instance[method]) {
    try {
      return instance[method](arg);
    } catch (e) {
      consoleError(e, elm);
    }
  }
  return void 0;
};
var addHydratedFlag = (elm) => {
  var _a;
  return elm.classList.add((_a = BUILD.hydratedSelectorName) != null ? _a : "hydrated");
};
var getValue = (ref, propName) => getHostRef(ref).$instanceValues$.get(propName);
var setValue = (ref, propName, newVal, cmpMeta) => {
  const hostRef = getHostRef(ref);
  if (!hostRef) {
    return;
  }
  if (!hostRef) {
    throw new Error(`Couldn't find host element for "${cmpMeta.$tagName$}" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/stenciljs/core/issues/5457).`);
  }
  const elm = hostRef.$hostElement$;
  const oldVal = hostRef.$instanceValues$.get(propName);
  const flags = hostRef.$flags$;
  const instance = hostRef.$lazyInstance$;
  newVal = parsePropertyValue(newVal, cmpMeta.$members$[propName][0]);
  const areBothNaN = Number.isNaN(oldVal) && Number.isNaN(newVal);
  const didValueChange = newVal !== oldVal && !areBothNaN;
  if ((!(flags & 8) || oldVal === void 0) && didValueChange) {
    hostRef.$instanceValues$.set(propName, newVal);
    if (instance) {
      if (cmpMeta.$watchers$ && flags & 128) {
        const watchMethods = cmpMeta.$watchers$[propName];
        if (watchMethods) {
          watchMethods.map((watchMethodName) => {
            try {
              instance[watchMethodName](newVal, oldVal, propName);
            } catch (e) {
              consoleError(e, elm);
            }
          });
        }
      }
      if ((flags & (2 | 16)) === 2) {
        if (instance.componentShouldUpdate) {
          if (instance.componentShouldUpdate(newVal, oldVal, propName) === false) {
            return;
          }
        }
        scheduleUpdate(hostRef, false);
      }
    }
  }
};
var proxyComponent = (Cstr, cmpMeta, flags) => {
  var _a, _b;
  const prototype = Cstr.prototype;
  if (cmpMeta.$members$ || cmpMeta.$watchers$ || Cstr.watchers) {
    if (Cstr.watchers && !cmpMeta.$watchers$) {
      cmpMeta.$watchers$ = Cstr.watchers;
    }
    const members = Object.entries((_a = cmpMeta.$members$) != null ? _a : {});
    members.map(([memberName, [memberFlags]]) => {
      if (memberFlags & 31 || flags & 2 && memberFlags & 32) {
        const {
          get: origGetter,
          set: origSetter
        } = Object.getOwnPropertyDescriptor(prototype, memberName) || {};
        if (origGetter) cmpMeta.$members$[memberName][0] |= 2048;
        if (origSetter) cmpMeta.$members$[memberName][0] |= 4096;
        if (flags & 1 || !origGetter) {
          Object.defineProperty(prototype, memberName, {
            get() {
              {
                if ((cmpMeta.$members$[memberName][0] & 2048) === 0) {
                  return getValue(this, memberName);
                }
                const ref = getHostRef(this);
                const instance = ref ? ref.$lazyInstance$ : prototype;
                if (!instance) return;
                return instance[memberName];
              }
            },
            configurable: true,
            enumerable: true
          });
        }
        Object.defineProperty(prototype, memberName, {
          set(newValue) {
            const ref = getHostRef(this);
            if (!ref) {
              return;
            }
            if (origSetter) {
              const currentValue = memberFlags & 32 ? this[memberName] : ref.$hostElement$[memberName];
              if (typeof currentValue === "undefined" && ref.$instanceValues$.get(memberName)) {
                newValue = ref.$instanceValues$.get(memberName);
              } else if (!ref.$instanceValues$.get(memberName) && currentValue) {
                ref.$instanceValues$.set(memberName, currentValue);
              }
              origSetter.apply(this, [parsePropertyValue(newValue, memberFlags)]);
              newValue = memberFlags & 32 ? this[memberName] : ref.$hostElement$[memberName];
              setValue(this, memberName, newValue, cmpMeta);
              return;
            }
            {
              if ((flags & 1) === 0 || (cmpMeta.$members$[memberName][0] & 4096) === 0) {
                setValue(this, memberName, newValue, cmpMeta);
                if (flags & 1 && !ref.$lazyInstance$) {
                  ref.$onReadyPromise$.then(() => {
                    if (cmpMeta.$members$[memberName][0] & 4096 && ref.$lazyInstance$[memberName] !== ref.$instanceValues$.get(memberName)) {
                      ref.$lazyInstance$[memberName] = newValue;
                    }
                  });
                }
                return;
              }
              const setterSetVal = () => {
                const currentValue = ref.$lazyInstance$[memberName];
                if (!ref.$instanceValues$.get(memberName) && currentValue) {
                  ref.$instanceValues$.set(memberName, currentValue);
                }
                ref.$lazyInstance$[memberName] = parsePropertyValue(newValue, memberFlags);
                setValue(this, memberName, ref.$lazyInstance$[memberName], cmpMeta);
              };
              if (ref.$lazyInstance$) {
                setterSetVal();
              } else {
                ref.$onReadyPromise$.then(() => setterSetVal());
              }
            }
          }
        });
      } else if (flags & 1 && memberFlags & 64) {
        Object.defineProperty(prototype, memberName, {
          value(...args) {
            var _a2;
            const ref = getHostRef(this);
            return (_a2 = ref == null ? void 0 : ref.$onInstancePromise$) == null ? void 0 : _a2.then(() => {
              var _a3;
              return (_a3 = ref.$lazyInstance$) == null ? void 0 : _a3[memberName](...args);
            });
          }
        });
      }
    });
    if (flags & 1) {
      const attrNameToPropName = /* @__PURE__ */ new Map();
      prototype.attributeChangedCallback = function(attrName, oldValue, newValue) {
        plt.jmp(() => {
          var _a2;
          const propName = attrNameToPropName.get(attrName);
          if (this.hasOwnProperty(propName) && BUILD.lazyLoad) {
            newValue = this[propName];
            delete this[propName];
          } else if (prototype.hasOwnProperty(propName) && typeof this[propName] === "number" && // cast type to number to avoid TS compiler issues
          this[propName] == newValue) {
            return;
          } else if (propName == null) {
            const hostRef = getHostRef(this);
            const flags2 = hostRef == null ? void 0 : hostRef.$flags$;
            if (hostRef && flags2 && !(flags2 & 8) && flags2 & 128 && newValue !== oldValue) {
              const instance = hostRef.$lazyInstance$;
              const entry = (_a2 = cmpMeta.$watchers$) == null ? void 0 : _a2[attrName];
              entry == null ? void 0 : entry.forEach((callbackName) => {
                if (instance[callbackName] != null) {
                  instance[callbackName].call(instance, newValue, oldValue, attrName);
                }
              });
            }
            return;
          }
          const propDesc = Object.getOwnPropertyDescriptor(prototype, propName);
          newValue = newValue === null && typeof this[propName] === "boolean" ? false : newValue;
          if (newValue !== this[propName] && (!propDesc.get || !!propDesc.set)) {
            this[propName] = newValue;
          }
        });
      };
      Cstr.observedAttributes = Array.from(/* @__PURE__ */ new Set([...Object.keys((_b = cmpMeta.$watchers$) != null ? _b : {}), ...members.filter(
        ([_, m]) => m[0] & 15
        /* HasAttribute */
      ).map(([propName, m]) => {
        var _a2;
        const attrName = m[1] || propName;
        attrNameToPropName.set(attrName, propName);
        if (m[0] & 512) {
          (_a2 = cmpMeta.$attrsToReflect$) == null ? void 0 : _a2.push([propName, attrName]);
        }
        return attrName;
      })]));
    }
  }
  return Cstr;
};
var initializeComponent = (elm, hostRef, cmpMeta, hmrVersionId) => __async(null, null, function* () {
  let Cstr;
  if ((hostRef.$flags$ & 32) === 0) {
    hostRef.$flags$ |= 32;
    const bundleId = cmpMeta.$lazyBundleId$;
    if (bundleId) {
      const CstrImport = loadModule(cmpMeta, hostRef);
      if (CstrImport && "then" in CstrImport) {
        const endLoad = uniqueTime();
        Cstr = yield CstrImport;
        endLoad();
      } else {
        Cstr = CstrImport;
      }
      if (!Cstr) {
        throw new Error(`Constructor for "${cmpMeta.$tagName$}#${hostRef.$modeName$}" was not found`);
      }
      if (!Cstr.isProxied) {
        {
          cmpMeta.$watchers$ = Cstr.watchers;
        }
        proxyComponent(
          Cstr,
          cmpMeta,
          2
          /* proxyState */
        );
        Cstr.isProxied = true;
      }
      const endNewInstance = createTime("createInstance", cmpMeta.$tagName$);
      {
        hostRef.$flags$ |= 8;
      }
      try {
        new Cstr(hostRef);
      } catch (e) {
        consoleError(e, elm);
      }
      {
        hostRef.$flags$ &= -9;
      }
      {
        hostRef.$flags$ |= 128;
      }
      endNewInstance();
      fireConnectedCallback(hostRef.$lazyInstance$, elm);
    } else {
      Cstr = elm.constructor;
      const cmpTag = elm.localName;
      customElements.whenDefined(cmpTag).then(
        () => hostRef.$flags$ |= 128
        /* isWatchReady */
      );
    }
    if (Cstr && Cstr.style) {
      let style;
      if (typeof Cstr.style === "string") {
        style = Cstr.style;
      } else if (typeof Cstr.style !== "string") {
        hostRef.$modeName$ = computeMode(elm);
        if (hostRef.$modeName$) {
          style = Cstr.style[hostRef.$modeName$];
        }
      }
      const scopeId2 = getScopeId(cmpMeta, hostRef.$modeName$);
      if (!styles.has(scopeId2)) {
        const endRegisterStyles = createTime("registerStyles", cmpMeta.$tagName$);
        registerStyle(scopeId2, style, !!(cmpMeta.$flags$ & 1));
        endRegisterStyles();
      }
    }
  }
  const ancestorComponent = hostRef.$ancestorComponent$;
  const schedule = () => scheduleUpdate(hostRef, true);
  if (ancestorComponent && ancestorComponent["s-rc"]) {
    ancestorComponent["s-rc"].push(schedule);
  } else {
    schedule();
  }
});
var fireConnectedCallback = (instance, elm) => {
  {
    safeCall(instance, "connectedCallback", void 0, elm);
  }
};
var connectedCallback = (elm) => {
  if ((plt.$flags$ & 1) === 0) {
    const hostRef = getHostRef(elm);
    if (!hostRef) {
      return;
    }
    const cmpMeta = hostRef.$cmpMeta$;
    const endConnected = createTime("connectedCallback", cmpMeta.$tagName$);
    if (!(hostRef.$flags$ & 1)) {
      hostRef.$flags$ |= 1;
      let hostId;
      {
        hostId = elm.getAttribute(HYDRATE_ID);
        if (hostId) {
          if (cmpMeta.$flags$ & 1) {
            const scopeId2 = addStyle(elm.shadowRoot, cmpMeta, elm.getAttribute("s-mode"));
            elm.classList.remove(scopeId2 + "-h", scopeId2 + "-s");
          } else if (cmpMeta.$flags$ & 2) {
            const scopeId2 = getScopeId(cmpMeta, elm.getAttribute("s-mode"));
            elm["s-sc"] = scopeId2;
          }
          initializeClientHydrate(elm, cmpMeta.$tagName$, hostId, hostRef);
        }
      }
      if (!hostId) {
        if (
          // TODO(STENCIL-854): Remove code related to legacy shadowDomShim field
          cmpMeta.$flags$ & (4 | 8)
        ) {
          setContentReference(elm);
        }
      }
      {
        let ancestorComponent = elm;
        while (ancestorComponent = ancestorComponent.parentNode || ancestorComponent.host) {
          if (ancestorComponent.nodeType === 1 && ancestorComponent.hasAttribute("s-id") && ancestorComponent["s-p"] || ancestorComponent["s-p"]) {
            attachToAncestor(hostRef, hostRef.$ancestorComponent$ = ancestorComponent);
            break;
          }
        }
      }
      if (cmpMeta.$members$) {
        Object.entries(cmpMeta.$members$).map(([memberName, [memberFlags]]) => {
          if (memberFlags & 31 && elm.hasOwnProperty(memberName)) {
            const value = elm[memberName];
            delete elm[memberName];
            elm[memberName] = value;
          }
        });
      }
      {
        initializeComponent(elm, hostRef, cmpMeta);
      }
    } else {
      addHostEventListeners(elm, hostRef, cmpMeta.$listeners$);
      if (hostRef == null ? void 0 : hostRef.$lazyInstance$) {
        fireConnectedCallback(hostRef.$lazyInstance$, elm);
      } else if (hostRef == null ? void 0 : hostRef.$onReadyPromise$) {
        hostRef.$onReadyPromise$.then(() => fireConnectedCallback(hostRef.$lazyInstance$, elm));
      }
    }
    endConnected();
  }
};
var setContentReference = (elm) => {
  if (!win.document) {
    return;
  }
  const contentRefElm = elm["s-cr"] = win.document.createComment("");
  contentRefElm["s-cn"] = true;
  insertBefore(elm, contentRefElm, elm.firstChild);
};
var disconnectInstance = (instance, elm) => {
  {
    safeCall(instance, "disconnectedCallback", void 0, elm || instance);
  }
};
var disconnectedCallback = (elm) => __async(null, null, function* () {
  if ((plt.$flags$ & 1) === 0) {
    const hostRef = getHostRef(elm);
    {
      if (hostRef == null ? void 0 : hostRef.$rmListeners$) {
        hostRef.$rmListeners$.map((rmListener) => rmListener());
        hostRef.$rmListeners$ = void 0;
      }
    }
    if (hostRef == null ? void 0 : hostRef.$lazyInstance$) {
      disconnectInstance(hostRef.$lazyInstance$, elm);
    } else if (hostRef == null ? void 0 : hostRef.$onReadyPromise$) {
      hostRef.$onReadyPromise$.then(() => disconnectInstance(hostRef.$lazyInstance$, elm));
    }
  }
  if (rootAppliedStyles.has(elm)) {
    rootAppliedStyles.delete(elm);
  }
  if (elm.shadowRoot && rootAppliedStyles.has(elm.shadowRoot)) {
    rootAppliedStyles.delete(elm.shadowRoot);
  }
});
var bootstrapLazy = (lazyBundles, options = {}) => {
  var _a;
  if (!win.document) {
    console.warn("Stencil: No document found. Skipping bootstrapping lazy components.");
    return;
  }
  const endBootstrap = createTime();
  const cmpTags = [];
  const exclude = options.exclude || [];
  const customElements2 = win.customElements;
  const head = win.document.head;
  const metaCharset = /* @__PURE__ */ head.querySelector("meta[charset]");
  const dataStyles = /* @__PURE__ */ win.document.createElement("style");
  const deferredConnectedCallbacks = [];
  let appLoadFallback;
  let isBootstrapping = true;
  Object.assign(plt, options);
  plt.$resourcesUrl$ = new URL(options.resourcesUrl || "./", win.document.baseURI).href;
  {
    plt.$flags$ |= 2;
  }
  {
    hydrateScopedToShadow();
  }
  let hasSlotRelocation = false;
  lazyBundles.map((lazyBundle) => {
    lazyBundle[1].map((compactMeta) => {
      var _a2;
      const cmpMeta = {
        $flags$: compactMeta[0],
        $tagName$: compactMeta[1],
        $members$: compactMeta[2],
        $listeners$: compactMeta[3]
      };
      if (cmpMeta.$flags$ & 4) {
        hasSlotRelocation = true;
      }
      {
        cmpMeta.$members$ = compactMeta[2];
      }
      {
        cmpMeta.$listeners$ = compactMeta[3];
      }
      {
        cmpMeta.$attrsToReflect$ = [];
      }
      {
        cmpMeta.$watchers$ = (_a2 = compactMeta[4]) != null ? _a2 : {};
      }
      const tagName = cmpMeta.$tagName$;
      const HostElement = class extends HTMLElement {
        // StencilLazyHost
        constructor(self) {
          super(self);
          this.hasRegisteredEventListeners = false;
          self = this;
          registerHost(self, cmpMeta);
          if (cmpMeta.$flags$ & 1) {
            {
              if (!self.shadowRoot) {
                createShadowRoot.call(self, cmpMeta);
              } else {
                if (self.shadowRoot.mode !== "open") {
                  throw new Error(`Unable to re-use existing shadow root for ${cmpMeta.$tagName$}! Mode is set to ${self.shadowRoot.mode} but Stencil only supports open shadow roots.`);
                }
              }
            }
          }
        }
        connectedCallback() {
          const hostRef = getHostRef(this);
          if (!hostRef) {
            return;
          }
          if (!this.hasRegisteredEventListeners) {
            this.hasRegisteredEventListeners = true;
            addHostEventListeners(this, hostRef, cmpMeta.$listeners$);
          }
          if (appLoadFallback) {
            clearTimeout(appLoadFallback);
            appLoadFallback = null;
          }
          if (isBootstrapping) {
            deferredConnectedCallbacks.push(this);
          } else {
            plt.jmp(() => connectedCallback(this));
          }
        }
        disconnectedCallback() {
          plt.jmp(() => disconnectedCallback(this));
          plt.raf(() => {
            var _a3;
            const hostRef = getHostRef(this);
            if (!hostRef) {
              return;
            }
            const i2 = deferredConnectedCallbacks.findIndex((host) => host === this);
            if (i2 > -1) {
              deferredConnectedCallbacks.splice(i2, 1);
            }
            if (((_a3 = hostRef == null ? void 0 : hostRef.$vnode$) == null ? void 0 : _a3.$elm$) instanceof Node && !hostRef.$vnode$.$elm$.isConnected) {
              delete hostRef.$vnode$.$elm$;
            }
          });
        }
        componentOnReady() {
          var _a3;
          return (_a3 = getHostRef(this)) == null ? void 0 : _a3.$onReadyPromise$;
        }
      };
      if (!(cmpMeta.$flags$ & 1) && cmpMeta.$flags$ & 256) {
        {
          patchPseudoShadowDom(HostElement.prototype);
        }
      }
      cmpMeta.$lazyBundleId$ = lazyBundle[0];
      if (!exclude.includes(tagName) && !customElements2.get(tagName)) {
        cmpTags.push(tagName);
        customElements2.define(tagName, proxyComponent(
          HostElement,
          cmpMeta,
          1
          /* isElementConstructor */
        ));
      }
    });
  });
  if (cmpTags.length > 0) {
    if (hasSlotRelocation) {
      dataStyles.textContent += SLOT_FB_CSS;
    }
    {
      dataStyles.textContent += cmpTags.sort() + HYDRATED_CSS;
    }
    if (dataStyles.innerHTML.length) {
      dataStyles.setAttribute("data-styles", "");
      const nonce = (_a = plt.$nonce$) != null ? _a : queryNonceMetaTagContent(win.document);
      if (nonce != null) {
        dataStyles.setAttribute("nonce", nonce);
      }
      head.insertBefore(dataStyles, metaCharset ? metaCharset.nextSibling : head.firstChild);
    }
  }
  isBootstrapping = false;
  if (deferredConnectedCallbacks.length) {
    deferredConnectedCallbacks.map((host) => host.connectedCallback());
  } else {
    {
      plt.jmp(() => appLoadFallback = setTimeout(appDidLoad, 30));
    }
  }
  endBootstrap();
};
var Fragment = (_, children) => children;
var addHostEventListeners = (elm, hostRef, listeners, attachParentListeners) => {
  if (listeners && win.document) {
    listeners.map(([flags, name, method]) => {
      const target = getHostListenerTarget(win.document, elm, flags);
      const handler = hostListenerProxy(hostRef, method);
      const opts = hostListenerOpts(flags);
      plt.ael(target, name, handler, opts);
      (hostRef.$rmListeners$ = hostRef.$rmListeners$ || []).push(() => plt.rel(target, name, handler, opts));
    });
  }
};
var hostListenerProxy = (hostRef, methodName) => (ev) => {
  var _a;
  try {
    {
      if (hostRef.$flags$ & 256) {
        (_a = hostRef.$lazyInstance$) == null ? void 0 : _a[methodName](ev);
      } else {
        (hostRef.$queuedListeners$ = hostRef.$queuedListeners$ || []).push([methodName, ev]);
      }
    }
  } catch (e) {
    consoleError(e, hostRef.$hostElement$);
  }
};
var getHostListenerTarget = (doc, elm, flags) => {
  if (flags & 4) {
    return doc;
  }
  if (flags & 8) {
    return win;
  }
  if (flags & 16) {
    return doc.body;
  }
  return elm;
};
var hostListenerOpts = (flags) => supportsListenerOptions ? {
  passive: (flags & 1) !== 0,
  capture: (flags & 2) !== 0
} : (flags & 2) !== 0;

export {
  config,
  configFromSession,
  saveConfig,
  configFromURL,
  printIonWarning,
  printIonError,
  printRequiredElementError,
  Build,
  registerInstance,
  readTask,
  writeTask,
  getAssetPath,
  h,
  Host,
  setMode,
  getMode,
  getElement,
  createEvent,
  forceUpdate,
  bootstrapLazy,
  Fragment
};
/*! Bundled license information:

@ionic/core/dist/esm/index-4DxY6_gG.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
  (*!__STENCIL_STATIC_IMPORT_SWITCH__*)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pbmRleC00RHhZNl9nRy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuY29uc3QgTkFNRVNQQUNFID0gJ2lvbmljJztcbmNvbnN0IEJVSUxEID0gLyogaW9uaWMgKi97XG4gIGV4cGVyaW1lbnRhbFNsb3RGaXhlczogdHJ1ZSxcbiAgaHlkcmF0ZWRTZWxlY3Rvck5hbWU6IFwiaHlkcmF0ZWRcIixcbiAgbGF6eUxvYWQ6IHRydWUsXG4gIHNoYWRvd0RvbTogdHJ1ZSxcbiAgc2xvdFJlbG9jYXRpb246IHRydWUsXG4gIHVwZGF0YWJsZTogdHJ1ZVxufTtcblxuLy8gVE9ETyhGVy0yODMyKTogdHlwZXNcbmNsYXNzIENvbmZpZyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubSA9IG5ldyBNYXAoKTtcbiAgfVxuICByZXNldChjb25maWdPYmopIHtcbiAgICB0aGlzLm0gPSBuZXcgTWFwKE9iamVjdC5lbnRyaWVzKGNvbmZpZ09iaikpO1xuICB9XG4gIGdldChrZXksIGZhbGxiYWNrKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLm0uZ2V0KGtleSk7XG4gICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IGZhbGxiYWNrO1xuICB9XG4gIGdldEJvb2xlYW4oa2V5LCBmYWxsYmFjayA9IGZhbHNlKSB7XG4gICAgY29uc3QgdmFsID0gdGhpcy5tLmdldChrZXkpO1xuICAgIGlmICh2YWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZhbGxiYWNrO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB2YWwgPT09ICd0cnVlJztcbiAgICB9XG4gICAgcmV0dXJuICEhdmFsO1xuICB9XG4gIGdldE51bWJlcihrZXksIGZhbGxiYWNrKSB7XG4gICAgY29uc3QgdmFsID0gcGFyc2VGbG9hdCh0aGlzLm0uZ2V0KGtleSkpO1xuICAgIHJldHVybiBpc05hTih2YWwpID8gZmFsbGJhY2sgIT09IHVuZGVmaW5lZCA/IGZhbGxiYWNrIDogTmFOIDogdmFsO1xuICB9XG4gIHNldChrZXksIHZhbHVlKSB7XG4gICAgdGhpcy5tLnNldChrZXksIHZhbHVlKTtcbiAgfVxufVxuY29uc3QgY29uZmlnID0gLypAX19QVVJFX18qL25ldyBDb25maWcoKTtcbmNvbnN0IGNvbmZpZ0Zyb21TZXNzaW9uID0gd2luID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjb25maWdTdHIgPSB3aW4uc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShJT05JQ19TRVNTSU9OX0tFWSk7XG4gICAgcmV0dXJuIGNvbmZpZ1N0ciAhPT0gbnVsbCA/IEpTT04ucGFyc2UoY29uZmlnU3RyKSA6IHt9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG59O1xuY29uc3Qgc2F2ZUNvbmZpZyA9ICh3aW4sIGMpID0+IHtcbiAgdHJ5IHtcbiAgICB3aW4uc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShJT05JQ19TRVNTSU9OX0tFWSwgSlNPTi5zdHJpbmdpZnkoYykpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuO1xuICB9XG59O1xuY29uc3QgY29uZmlnRnJvbVVSTCA9IHdpbiA9PiB7XG4gIGNvbnN0IGNvbmZpZ09iaiA9IHt9O1xuICB3aW4ubG9jYXRpb24uc2VhcmNoLnNsaWNlKDEpLnNwbGl0KCcmJykubWFwKGVudHJ5ID0+IGVudHJ5LnNwbGl0KCc9JykpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBbZGVjb2RlVVJJQ29tcG9uZW50KGtleSksIGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSldO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBbJycsICcnXTtcbiAgICB9XG4gIH0pLmZpbHRlcigoW2tleV0pID0+IHN0YXJ0c1dpdGgoa2V5LCBJT05JQ19QUkVGSVgpKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gW2tleS5zbGljZShJT05JQ19QUkVGSVgubGVuZ3RoKSwgdmFsdWVdKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBjb25maWdPYmpba2V5XSA9IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIGNvbmZpZ09iajtcbn07XG5jb25zdCBzdGFydHNXaXRoID0gKGlucHV0LCBzZWFyY2gpID0+IHtcbiAgcmV0dXJuIGlucHV0LnN1YnN0cigwLCBzZWFyY2gubGVuZ3RoKSA9PT0gc2VhcmNoO1xufTtcbmNvbnN0IElPTklDX1BSRUZJWCA9ICdpb25pYzonO1xuY29uc3QgSU9OSUNfU0VTU0lPTl9LRVkgPSAnaW9uaWMtcGVyc2lzdC1jb25maWcnO1xudmFyIExvZ0xldmVsO1xuKGZ1bmN0aW9uIChMb2dMZXZlbCkge1xuICBMb2dMZXZlbFtcIk9GRlwiXSA9IFwiT0ZGXCI7XG4gIExvZ0xldmVsW1wiRVJST1JcIl0gPSBcIkVSUk9SXCI7XG4gIExvZ0xldmVsW1wiV0FSTlwiXSA9IFwiV0FSTlwiO1xufSkoTG9nTGV2ZWwgfHwgKExvZ0xldmVsID0ge30pKTtcbi8qKlxuICogTG9ncyBhIHdhcm5pbmcgdG8gdGhlIGNvbnNvbGUgd2l0aCBhbiBJb25pYyBwcmVmaXhcbiAqIHRvIGluZGljYXRlIHRoZSBsaWJyYXJ5IHRoYXQgaXMgd2FybmluZyB0aGUgZGV2ZWxvcGVyLlxuICpcbiAqIEBwYXJhbSBtZXNzYWdlIC0gVGhlIHN0cmluZyBtZXNzYWdlIHRvIGJlIGxvZ2dlZCB0byB0aGUgY29uc29sZS5cbiAqL1xuY29uc3QgcHJpbnRJb25XYXJuaW5nID0gKG1lc3NhZ2UsIC4uLnBhcmFtcykgPT4ge1xuICBjb25zdCBsb2dMZXZlbCA9IGNvbmZpZy5nZXQoJ2xvZ0xldmVsJywgTG9nTGV2ZWwuV0FSTik7XG4gIGlmIChbTG9nTGV2ZWwuV0FSTl0uaW5jbHVkZXMobG9nTGV2ZWwpKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUud2FybihgW0lvbmljIFdhcm5pbmddOiAke21lc3NhZ2V9YCwgLi4ucGFyYW1zKTtcbiAgfVxufTtcbi8qKlxuICogTG9ncyBhbiBlcnJvciB0byB0aGUgY29uc29sZSB3aXRoIGFuIElvbmljIHByZWZpeFxuICogdG8gaW5kaWNhdGUgdGhlIGxpYnJhcnkgdGhhdCBpcyB3YXJuaW5nIHRoZSBkZXZlbG9wZXIuXG4gKlxuICogQHBhcmFtIG1lc3NhZ2UgLSBUaGUgc3RyaW5nIG1lc3NhZ2UgdG8gYmUgbG9nZ2VkIHRvIHRoZSBjb25zb2xlLlxuICogQHBhcmFtIHBhcmFtcyAtIEFkZGl0aW9uYWwgYXJndW1lbnRzIHRvIHN1cHBseSB0byB0aGUgY29uc29sZS5lcnJvci5cbiAqL1xuY29uc3QgcHJpbnRJb25FcnJvciA9IChtZXNzYWdlLCAuLi5wYXJhbXMpID0+IHtcbiAgY29uc3QgbG9nTGV2ZWwgPSBjb25maWcuZ2V0KCdsb2dMZXZlbCcsIExvZ0xldmVsLkVSUk9SKTtcbiAgaWYgKFtMb2dMZXZlbC5FUlJPUiwgTG9nTGV2ZWwuV0FSTl0uaW5jbHVkZXMobG9nTGV2ZWwpKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoYFtJb25pYyBFcnJvcl06ICR7bWVzc2FnZX1gLCAuLi5wYXJhbXMpO1xuICB9XG59O1xuLyoqXG4gKiBQcmludHMgYW4gZXJyb3IgaW5mb3JtaW5nIGRldmVsb3BlcnMgdGhhdCBhbiBpbXBsZW1lbnRhdGlvbiByZXF1aXJlcyBhbiBlbGVtZW50IHRvIGJlIHVzZWRcbiAqIHdpdGhpbiBhIHNwZWNpZmljIHNlbGVjdG9yLlxuICpcbiAqIEBwYXJhbSBlbCBUaGUgd2ViIGNvbXBvbmVudCBlbGVtZW50IHRoaXMgaXMgcmVxdWlyaW5nIHRoZSBlbGVtZW50LlxuICogQHBhcmFtIHRhcmdldFNlbGVjdG9ycyBUaGUgc2VsZWN0b3Igb3Igc2VsZWN0b3JzIHRoYXQgd2VyZSBub3QgZm91bmQuXG4gKi9cbmNvbnN0IHByaW50UmVxdWlyZWRFbGVtZW50RXJyb3IgPSAoZWwsIC4uLnRhcmdldFNlbGVjdG9ycykgPT4ge1xuICByZXR1cm4gY29uc29sZS5lcnJvcihgPCR7ZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpfT4gbXVzdCBiZSB1c2VkIGluc2lkZSAke3RhcmdldFNlbGVjdG9ycy5qb2luKCcgb3IgJyl9LmApO1xufTtcblxuLypcbiBTdGVuY2lsIENsaWVudCBQbGF0Zm9ybSB2NC4zNi4yIHwgTUlUIExpY2Vuc2VkIHwgaHR0cHM6Ly9zdGVuY2lsanMuY29tXG4gKi9cbnZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19leHBvcnQgPSAodGFyZ2V0LCBhbGwpID0+IHtcbiAgZm9yICh2YXIgbmFtZSBpbiBhbGwpIF9fZGVmUHJvcCh0YXJnZXQsIG5hbWUsIHtcbiAgICBnZXQ6IGFsbFtuYW1lXSxcbiAgICBlbnVtZXJhYmxlOiB0cnVlXG4gIH0pO1xufTtcbnZhciBCdWlsZCA9IHtcbiAgaXNCcm93c2VyOiB0cnVlXG59O1xuXG4vLyBzcmMvdXRpbHMvY29uc3RhbnRzLnRzXG52YXIgU1ZHX05TID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xudmFyIEhUTUxfTlMgPSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIjtcbnZhciBQcmltaXRpdmVUeXBlID0gLyogQF9fUFVSRV9fICovKFByaW1pdGl2ZVR5cGUyID0+IHtcbiAgUHJpbWl0aXZlVHlwZTJbXCJVbmRlZmluZWRcIl0gPSBcInVuZGVmaW5lZFwiO1xuICBQcmltaXRpdmVUeXBlMltcIk51bGxcIl0gPSBcIm51bGxcIjtcbiAgUHJpbWl0aXZlVHlwZTJbXCJTdHJpbmdcIl0gPSBcInN0cmluZ1wiO1xuICBQcmltaXRpdmVUeXBlMltcIk51bWJlclwiXSA9IFwibnVtYmVyXCI7XG4gIFByaW1pdGl2ZVR5cGUyW1wiU3BlY2lhbE51bWJlclwiXSA9IFwibnVtYmVyXCI7XG4gIFByaW1pdGl2ZVR5cGUyW1wiQm9vbGVhblwiXSA9IFwiYm9vbGVhblwiO1xuICBQcmltaXRpdmVUeXBlMltcIkJpZ0ludFwiXSA9IFwiYmlnaW50XCI7XG4gIHJldHVybiBQcmltaXRpdmVUeXBlMjtcbn0pKFByaW1pdGl2ZVR5cGUgfHwge30pO1xudmFyIE5vblByaW1pdGl2ZVR5cGUgPSAvKiBAX19QVVJFX18gKi8oTm9uUHJpbWl0aXZlVHlwZTIgPT4ge1xuICBOb25QcmltaXRpdmVUeXBlMltcIkFycmF5XCJdID0gXCJhcnJheVwiO1xuICBOb25QcmltaXRpdmVUeXBlMltcIkRhdGVcIl0gPSBcImRhdGVcIjtcbiAgTm9uUHJpbWl0aXZlVHlwZTJbXCJNYXBcIl0gPSBcIm1hcFwiO1xuICBOb25QcmltaXRpdmVUeXBlMltcIk9iamVjdFwiXSA9IFwib2JqZWN0XCI7XG4gIE5vblByaW1pdGl2ZVR5cGUyW1wiUmVndWxhckV4cHJlc3Npb25cIl0gPSBcInJlZ2V4cFwiO1xuICBOb25QcmltaXRpdmVUeXBlMltcIlNldFwiXSA9IFwic2V0XCI7XG4gIE5vblByaW1pdGl2ZVR5cGUyW1wiQ2hhbm5lbFwiXSA9IFwiY2hhbm5lbFwiO1xuICBOb25QcmltaXRpdmVUeXBlMltcIlN5bWJvbFwiXSA9IFwic3ltYm9sXCI7XG4gIHJldHVybiBOb25QcmltaXRpdmVUeXBlMjtcbn0pKE5vblByaW1pdGl2ZVR5cGUgfHwge30pO1xudmFyIFRZUEVfQ09OU1RBTlQgPSBcInR5cGVcIjtcbnZhciBWQUxVRV9DT05TVEFOVCA9IFwidmFsdWVcIjtcbnZhciBTRVJJQUxJWkVEX1BSRUZJWCA9IFwic2VyaWFsaXplZDpcIjtcblxuLy8gc3JjL2NsaWVudC9jbGllbnQtaG9zdC1yZWYudHNcbnZhciBnZXRIb3N0UmVmID0gcmVmID0+IHtcbiAgaWYgKHJlZi5fX3N0ZW5jaWxfX2dldEhvc3RSZWYpIHtcbiAgICByZXR1cm4gcmVmLl9fc3RlbmNpbF9fZ2V0SG9zdFJlZigpO1xuICB9XG4gIHJldHVybiB2b2lkIDA7XG59O1xudmFyIHJlZ2lzdGVySW5zdGFuY2UgPSAobGF6eUluc3RhbmNlLCBob3N0UmVmKSA9PiB7XG4gIGxhenlJbnN0YW5jZS5fX3N0ZW5jaWxfX2dldEhvc3RSZWYgPSAoKSA9PiBob3N0UmVmO1xuICBob3N0UmVmLiRsYXp5SW5zdGFuY2UkID0gbGF6eUluc3RhbmNlO1xufTtcbnZhciByZWdpc3Rlckhvc3QgPSAoaG9zdEVsZW1lbnQsIGNtcE1ldGEpID0+IHtcbiAgY29uc3QgaG9zdFJlZiA9IHtcbiAgICAkZmxhZ3MkOiAwLFxuICAgICRob3N0RWxlbWVudCQ6IGhvc3RFbGVtZW50LFxuICAgICRjbXBNZXRhJDogY21wTWV0YSxcbiAgICAkaW5zdGFuY2VWYWx1ZXMkOiAvKiBAX19QVVJFX18gKi9uZXcgTWFwKClcbiAgfTtcbiAge1xuICAgIGhvc3RSZWYuJG9uSW5zdGFuY2VQcm9taXNlJCA9IG5ldyBQcm9taXNlKHIgPT4gaG9zdFJlZi4kb25JbnN0YW5jZVJlc29sdmUkID0gcik7XG4gIH1cbiAge1xuICAgIGhvc3RSZWYuJG9uUmVhZHlQcm9taXNlJCA9IG5ldyBQcm9taXNlKHIgPT4gaG9zdFJlZi4kb25SZWFkeVJlc29sdmUkID0gcik7XG4gICAgaG9zdEVsZW1lbnRbXCJzLXBcIl0gPSBbXTtcbiAgICBob3N0RWxlbWVudFtcInMtcmNcIl0gPSBbXTtcbiAgfVxuICBjb25zdCByZWYgPSBob3N0UmVmO1xuICBob3N0RWxlbWVudC5fX3N0ZW5jaWxfX2dldEhvc3RSZWYgPSAoKSA9PiByZWY7XG4gIHJldHVybiByZWY7XG59O1xudmFyIGlzTWVtYmVySW5FbGVtZW50ID0gKGVsbSwgbWVtYmVyTmFtZSkgPT4gbWVtYmVyTmFtZSBpbiBlbG07XG52YXIgY29uc29sZUVycm9yID0gKGUsIGVsKSA9PiAoMCwgY29uc29sZS5lcnJvcikoZSwgZWwpO1xuXG4vLyBzcmMvY2xpZW50L2NsaWVudC1sb2FkLW1vZHVsZS50c1xudmFyIGNtcE1vZHVsZXMgPSAvKiBAX19QVVJFX18gKi9uZXcgTWFwKCk7XG52YXIgbG9hZE1vZHVsZSA9IChjbXBNZXRhLCBob3N0UmVmLCBobXJWZXJzaW9uSWQpID0+IHtcbiAgY29uc3QgZXhwb3J0TmFtZSA9IGNtcE1ldGEuJHRhZ05hbWUkLnJlcGxhY2UoLy0vZywgXCJfXCIpO1xuICBjb25zdCBidW5kbGVJZCA9IGNtcE1ldGEuJGxhenlCdW5kbGVJZCQ7XG4gIGlmICghYnVuZGxlSWQpIHtcbiAgICByZXR1cm4gdm9pZCAwO1xuICB9XG4gIGNvbnN0IG1vZHVsZSA9IGNtcE1vZHVsZXMuZ2V0KGJ1bmRsZUlkKTtcbiAgaWYgKG1vZHVsZSkge1xuICAgIHJldHVybiBtb2R1bGVbZXhwb3J0TmFtZV07XG4gIH1cbiAgLyohX19TVEVOQ0lMX1NUQVRJQ19JTVBPUlRfU1dJVENIX18qL1xuICByZXR1cm4gaW1wb3J0KC8qIEB2aXRlLWlnbm9yZSAqL1xuICAvKiB3ZWJwYWNrSW5jbHVkZTogL1xcLmVudHJ5XFwuanMkLyAqL1xuICAvKiB3ZWJwYWNrRXhjbHVkZTogL1xcLnN5c3RlbVxcLmVudHJ5XFwuanMkLyAqL1xuICAvKiB3ZWJwYWNrTW9kZTogXCJsYXp5XCIgKi9cbiAgYC4vJHtidW5kbGVJZH0uZW50cnkuanMke1wiXCJ9YCkudGhlbihpbXBvcnRlZE1vZHVsZSA9PiB7XG4gICAge1xuICAgICAgY21wTW9kdWxlcy5zZXQoYnVuZGxlSWQsIGltcG9ydGVkTW9kdWxlKTtcbiAgICB9XG4gICAgcmV0dXJuIGltcG9ydGVkTW9kdWxlW2V4cG9ydE5hbWVdO1xuICB9LCBlID0+IHtcbiAgICBjb25zb2xlRXJyb3IoZSwgaG9zdFJlZi4kaG9zdEVsZW1lbnQkKTtcbiAgfSk7XG59O1xuXG4vLyBzcmMvY2xpZW50L2NsaWVudC1zdHlsZS50c1xudmFyIHN0eWxlcyA9IC8qIEBfX1BVUkVfXyAqL25ldyBNYXAoKTtcbnZhciBtb2RlUmVzb2x1dGlvbkNoYWluID0gW107XG5cbi8vIHNyYy9ydW50aW1lL3J1bnRpbWUtY29uc3RhbnRzLnRzXG52YXIgQ09OVEVOVF9SRUZfSUQgPSBcInJcIjtcbnZhciBPUkdfTE9DQVRJT05fSUQgPSBcIm9cIjtcbnZhciBTTE9UX05PREVfSUQgPSBcInNcIjtcbnZhciBURVhUX05PREVfSUQgPSBcInRcIjtcbnZhciBDT01NRU5UX05PREVfSUQgPSBcImNcIjtcbnZhciBIWURSQVRFX0lEID0gXCJzLWlkXCI7XG52YXIgSFlEUkFURURfU1RZTEVfSUQgPSBcInN0eS1pZFwiO1xudmFyIEhZRFJBVEVfQ0hJTERfSUQgPSBcImMtaWRcIjtcbnZhciBIWURSQVRFRF9DU1MgPSBcInt2aXNpYmlsaXR5OmhpZGRlbn0uaHlkcmF0ZWR7dmlzaWJpbGl0eTppbmhlcml0fVwiO1xudmFyIFNMT1RfRkJfQ1NTID0gXCJzbG90LWZie2Rpc3BsYXk6Y29udGVudHN9c2xvdC1mYltoaWRkZW5de2Rpc3BsYXk6bm9uZX1cIjtcbnZhciBYTElOS19OUyA9IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiO1xudmFyIHdpbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fTtcbnZhciBIID0gd2luLkhUTUxFbGVtZW50IHx8IGNsYXNzIHt9O1xudmFyIHBsdCA9IHtcbiAgJGZsYWdzJDogMCxcbiAgJHJlc291cmNlc1VybCQ6IFwiXCIsXG4gIGptcDogaDIgPT4gaDIoKSxcbiAgcmFmOiBoMiA9PiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaDIpLFxuICBhZWw6IChlbCwgZXZlbnROYW1lLCBsaXN0ZW5lciwgb3B0cykgPT4gZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyLCBvcHRzKSxcbiAgcmVsOiAoZWwsIGV2ZW50TmFtZSwgbGlzdGVuZXIsIG9wdHMpID0+IGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lciwgb3B0cyksXG4gIGNlOiAoZXZlbnROYW1lLCBvcHRzKSA9PiBuZXcgQ3VzdG9tRXZlbnQoZXZlbnROYW1lLCBvcHRzKVxufTtcbnZhciBzdXBwb3J0c1NoYWRvdyA9IEJVSUxELnNoYWRvd0RvbTtcbnZhciBzdXBwb3J0c0xpc3RlbmVyT3B0aW9ucyA9IC8qIEBfX1BVUkVfXyAqLygoKSA9PiB7XG4gIHZhciBfYTtcbiAgbGV0IHN1cHBvcnRzTGlzdGVuZXJPcHRpb25zMiA9IGZhbHNlO1xuICB0cnkge1xuICAgIChfYSA9IHdpbi5kb2N1bWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmFkZEV2ZW50TGlzdGVuZXIoXCJlXCIsIG51bGwsIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgXCJwYXNzaXZlXCIsIHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgc3VwcG9ydHNMaXN0ZW5lck9wdGlvbnMyID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSk7XG4gIH0gY2F0Y2ggKGUpIHt9XG4gIHJldHVybiBzdXBwb3J0c0xpc3RlbmVyT3B0aW9uczI7XG59KSgpO1xudmFyIHByb21pc2VSZXNvbHZlID0gdiA9PiBQcm9taXNlLnJlc29sdmUodik7XG52YXIgc3VwcG9ydHNDb25zdHJ1Y3RhYmxlU3R5bGVzaGVldHMgPSAvKiBAX19QVVJFX18gKi8oKCkgPT4ge1xuICB0cnkge1xuICAgIG5ldyBDU1NTdHlsZVNoZWV0KCk7XG4gICAgcmV0dXJuIHR5cGVvZiBuZXcgQ1NTU3R5bGVTaGVldCgpLnJlcGxhY2VTeW5jID09PSBcImZ1bmN0aW9uXCI7XG4gIH0gY2F0Y2ggKGUpIHt9XG4gIHJldHVybiBmYWxzZTtcbn0pKCk7XG52YXIgc3VwcG9ydHNNdXRhYmxlQWRvcHRlZFN0eWxlU2hlZXRzID0gc3VwcG9ydHNDb25zdHJ1Y3RhYmxlU3R5bGVzaGVldHMgPyAvKiBAX19QVVJFX18gKi8oKCkgPT4gISF3aW4uZG9jdW1lbnQgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih3aW4uZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzLCBcImxlbmd0aFwiKS53cml0YWJsZSkoKSA6IGZhbHNlO1xudmFyIHF1ZXVlUGVuZGluZyA9IGZhbHNlO1xudmFyIHF1ZXVlRG9tUmVhZHMgPSBbXTtcbnZhciBxdWV1ZURvbVdyaXRlcyA9IFtdO1xudmFyIHF1ZXVlVGFzayA9IChxdWV1ZSwgd3JpdGUpID0+IGNiID0+IHtcbiAgcXVldWUucHVzaChjYik7XG4gIGlmICghcXVldWVQZW5kaW5nKSB7XG4gICAgcXVldWVQZW5kaW5nID0gdHJ1ZTtcbiAgICBpZiAod3JpdGUgJiYgcGx0LiRmbGFncyQgJiA0IC8qIHF1ZXVlU3luYyAqLykge1xuICAgICAgbmV4dFRpY2soZmx1c2gpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwbHQucmFmKGZsdXNoKTtcbiAgICB9XG4gIH1cbn07XG52YXIgY29uc3VtZSA9IHF1ZXVlID0+IHtcbiAgZm9yIChsZXQgaTIgPSAwOyBpMiA8IHF1ZXVlLmxlbmd0aDsgaTIrKykge1xuICAgIHRyeSB7XG4gICAgICBxdWV1ZVtpMl0ocGVyZm9ybWFuY2Uubm93KCkpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGVFcnJvcihlKTtcbiAgICB9XG4gIH1cbiAgcXVldWUubGVuZ3RoID0gMDtcbn07XG52YXIgZmx1c2ggPSAoKSA9PiB7XG4gIGNvbnN1bWUocXVldWVEb21SZWFkcyk7XG4gIHtcbiAgICBjb25zdW1lKHF1ZXVlRG9tV3JpdGVzKTtcbiAgICBpZiAocXVldWVQZW5kaW5nID0gcXVldWVEb21SZWFkcy5sZW5ndGggPiAwKSB7XG4gICAgICBwbHQucmFmKGZsdXNoKTtcbiAgICB9XG4gIH1cbn07XG52YXIgbmV4dFRpY2sgPSBjYiA9PiBwcm9taXNlUmVzb2x2ZSgpLnRoZW4oY2IpO1xudmFyIHJlYWRUYXNrID0gLyogQF9fUFVSRV9fICovcXVldWVUYXNrKHF1ZXVlRG9tUmVhZHMsIGZhbHNlKTtcbnZhciB3cml0ZVRhc2sgPSAvKiBAX19QVVJFX18gKi9xdWV1ZVRhc2socXVldWVEb21Xcml0ZXMsIHRydWUpO1xuXG4vLyBzcmMvcnVudGltZS9hc3NldC1wYXRoLnRzXG52YXIgZ2V0QXNzZXRQYXRoID0gcGF0aCA9PiB7XG4gIGNvbnN0IGFzc2V0VXJsID0gbmV3IFVSTChwYXRoLCBwbHQuJHJlc291cmNlc1VybCQpO1xuICByZXR1cm4gYXNzZXRVcmwub3JpZ2luICE9PSB3aW4ubG9jYXRpb24ub3JpZ2luID8gYXNzZXRVcmwuaHJlZiA6IGFzc2V0VXJsLnBhdGhuYW1lO1xufTtcblxuLy8gc3JjL3V0aWxzL2hlbHBlcnMudHNcbnZhciBpc0RlZiA9IHYgPT4gdiAhPSBudWxsICYmIHYgIT09IHZvaWQgMDtcbnZhciBpc0NvbXBsZXhUeXBlID0gbyA9PiB7XG4gIG8gPSB0eXBlb2YgbztcbiAgcmV0dXJuIG8gPT09IFwib2JqZWN0XCIgfHwgbyA9PT0gXCJmdW5jdGlvblwiO1xufTtcblxuLy8gc3JjL3V0aWxzL3F1ZXJ5LW5vbmNlLW1ldGEtdGFnLWNvbnRlbnQudHNcbmZ1bmN0aW9uIHF1ZXJ5Tm9uY2VNZXRhVGFnQ29udGVudChkb2MpIHtcbiAgdmFyIF9hLCBfYiwgX2M7XG4gIHJldHVybiAoX2MgPSAoX2IgPSAoX2EgPSBkb2MuaGVhZCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImNzcC1ub25jZVwiXScpKSA9PSBudWxsID8gdm9pZCAwIDogX2IuZ2V0QXR0cmlidXRlKFwiY29udGVudFwiKSkgIT0gbnVsbCA/IF9jIDogdm9pZCAwO1xufVxuXG4vLyBzcmMvdXRpbHMvcmVndWxhci1leHByZXNzaW9uLnRzXG52YXIgZXNjYXBlUmVnRXhwU3BlY2lhbENoYXJhY3RlcnMgPSB0ZXh0ID0+IHtcbiAgcmV0dXJuIHRleHQucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csIFwiXFxcXCQmXCIpO1xufTtcblxuLy8gc3JjL3V0aWxzL3JlbW90ZS12YWx1ZS50c1xudmFyIFJlbW90ZVZhbHVlID0gY2xhc3MgX1JlbW90ZVZhbHVlIHtcbiAgLyoqXG4gICAqIERlc2VyaWFsaXplcyBhIExvY2FsVmFsdWUgc2VyaWFsaXplZCBvYmplY3QgYmFjayB0byBpdHMgb3JpZ2luYWwgSmF2YVNjcmlwdCByZXByZXNlbnRhdGlvblxuICAgKlxuICAgKiBAcGFyYW0gc2VyaWFsaXplZCBUaGUgc2VyaWFsaXplZCBMb2NhbFZhbHVlIG9iamVjdFxuICAgKiBAcmV0dXJucyBUaGUgb3JpZ2luYWwgSmF2YVNjcmlwdCB2YWx1ZS9vYmplY3RcbiAgICovXG4gIHN0YXRpYyBmcm9tTG9jYWxWYWx1ZShzZXJpYWxpemVkKSB7XG4gICAgY29uc3QgdHlwZSA9IHNlcmlhbGl6ZWRbVFlQRV9DT05TVEFOVF07XG4gICAgY29uc3QgdmFsdWUgPSBWQUxVRV9DT05TVEFOVCBpbiBzZXJpYWxpemVkID8gc2VyaWFsaXplZFtWQUxVRV9DT05TVEFOVF0gOiB2b2lkIDA7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFwic3RyaW5nXCIgLyogU3RyaW5nICovOlxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICBjYXNlIFwiYm9vbGVhblwiIC8qIEJvb2xlYW4gKi86XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIGNhc2UgXCJiaWdpbnRcIiAvKiBCaWdJbnQgKi86XG4gICAgICAgIHJldHVybiBCaWdJbnQodmFsdWUpO1xuICAgICAgY2FzZSBcInVuZGVmaW5lZFwiIC8qIFVuZGVmaW5lZCAqLzpcbiAgICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICAgIGNhc2UgXCJudWxsXCIgLyogTnVsbCAqLzpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICBjYXNlIFwibnVtYmVyXCIgLyogTnVtYmVyICovOlxuICAgICAgICBpZiAodmFsdWUgPT09IFwiTmFOXCIpIHJldHVybiBOYU47XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gXCItMFwiKSByZXR1cm4gLTA7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gXCJJbmZpbml0eVwiKSByZXR1cm4gSW5maW5pdHk7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gXCItSW5maW5pdHlcIikgcmV0dXJuIC1JbmZpbml0eTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgY2FzZSBcImFycmF5XCIgLyogQXJyYXkgKi86XG4gICAgICAgIHJldHVybiB2YWx1ZS5tYXAoaXRlbSA9PiBfUmVtb3RlVmFsdWUuZnJvbUxvY2FsVmFsdWUoaXRlbSkpO1xuICAgICAgY2FzZSBcImRhdGVcIiAvKiBEYXRlICovOlxuICAgICAgICByZXR1cm4gbmV3IERhdGUodmFsdWUpO1xuICAgICAgY2FzZSBcIm1hcFwiIC8qIE1hcCAqLzpcbiAgICAgICAgY29uc3QgbWFwMiA9IC8qIEBfX1BVUkVfXyAqL25ldyBNYXAoKTtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIHZhbHVlKSB7XG4gICAgICAgICAgY29uc3QgZGVzZXJpYWxpemVkS2V5ID0gdHlwZW9mIGtleSA9PT0gXCJvYmplY3RcIiAmJiBrZXkgIT09IG51bGwgPyBfUmVtb3RlVmFsdWUuZnJvbUxvY2FsVmFsdWUoa2V5KSA6IGtleTtcbiAgICAgICAgICBjb25zdCBkZXNlcmlhbGl6ZWRWYWx1ZSA9IF9SZW1vdGVWYWx1ZS5mcm9tTG9jYWxWYWx1ZSh2YWwpO1xuICAgICAgICAgIG1hcDIuc2V0KGRlc2VyaWFsaXplZEtleSwgZGVzZXJpYWxpemVkVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXAyO1xuICAgICAgY2FzZSBcIm9iamVjdFwiIC8qIE9iamVjdCAqLzpcbiAgICAgICAgY29uc3Qgb2JqID0ge307XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiB2YWx1ZSkge1xuICAgICAgICAgIG9ialtrZXldID0gX1JlbW90ZVZhbHVlLmZyb21Mb2NhbFZhbHVlKHZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgIGNhc2UgXCJyZWdleHBcIiAvKiBSZWd1bGFyRXhwcmVzc2lvbiAqLzpcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIHBhdHRlcm4sXG4gICAgICAgICAgZmxhZ3NcbiAgICAgICAgfSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChwYXR0ZXJuLCBmbGFncyk7XG4gICAgICBjYXNlIFwic2V0XCIgLyogU2V0ICovOlxuICAgICAgICBjb25zdCBzZXQgPSAvKiBAX19QVVJFX18gKi9uZXcgU2V0KCk7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB2YWx1ZSkge1xuICAgICAgICAgIHNldC5hZGQoX1JlbW90ZVZhbHVlLmZyb21Mb2NhbFZhbHVlKGl0ZW0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2V0O1xuICAgICAgY2FzZSBcInN5bWJvbFwiIC8qIFN5bWJvbCAqLzpcbiAgICAgICAgcmV0dXJuIFN5bWJvbCh2YWx1ZSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuc3VwcG9ydGVkIHR5cGU6ICR7dHlwZX1gKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFV0aWxpdHkgbWV0aG9kIHRvIGRlc2VyaWFsaXplIG11bHRpcGxlIExvY2FsVmFsdWVzIGF0IG9uY2VcbiAgICpcbiAgICogQHBhcmFtIHNlcmlhbGl6ZWRWYWx1ZXMgQXJyYXkgb2Ygc2VyaWFsaXplZCBMb2NhbFZhbHVlIG9iamVjdHNcbiAgICogQHJldHVybnMgQXJyYXkgb2YgZGVzZXJpYWxpemVkIEphdmFTY3JpcHQgdmFsdWVzXG4gICAqL1xuICBzdGF0aWMgZnJvbUxvY2FsVmFsdWVBcnJheShzZXJpYWxpemVkVmFsdWVzKSB7XG4gICAgcmV0dXJuIHNlcmlhbGl6ZWRWYWx1ZXMubWFwKHZhbHVlID0+IF9SZW1vdGVWYWx1ZS5mcm9tTG9jYWxWYWx1ZSh2YWx1ZSkpO1xuICB9XG4gIC8qKlxuICAgKiBWZXJpZmllcyBpZiB0aGUgZ2l2ZW4gb2JqZWN0IG1hdGNoZXMgdGhlIHN0cnVjdHVyZSBvZiBhIHNlcmlhbGl6ZWQgTG9jYWxWYWx1ZVxuICAgKlxuICAgKiBAcGFyYW0gb2JqIE9iamVjdCB0byB2ZXJpZnlcbiAgICogQHJldHVybnMgYm9vbGVhbiBpbmRpY2F0aW5nIGlmIHRoZSBvYmplY3QgaGFzIExvY2FsVmFsdWUgc3RydWN0dXJlXG4gICAqL1xuICBzdGF0aWMgaXNMb2NhbFZhbHVlT2JqZWN0KG9iaikge1xuICAgIGlmICh0eXBlb2Ygb2JqICE9PSBcIm9iamVjdFwiIHx8IG9iaiA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShUWVBFX0NPTlNUQU5UKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCB0eXBlID0gb2JqW1RZUEVfQ09OU1RBTlRdO1xuICAgIGNvbnN0IGhhc1R5cGVQcm9wZXJ0eSA9IE9iamVjdC52YWx1ZXMoe1xuICAgICAgLi4uUHJpbWl0aXZlVHlwZSxcbiAgICAgIC4uLk5vblByaW1pdGl2ZVR5cGVcbiAgICB9KS5pbmNsdWRlcyh0eXBlKTtcbiAgICBpZiAoIWhhc1R5cGVQcm9wZXJ0eSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodHlwZSAhPT0gXCJudWxsXCIgLyogTnVsbCAqLyAmJiB0eXBlICE9PSBcInVuZGVmaW5lZFwiIC8qIFVuZGVmaW5lZCAqLykge1xuICAgICAgcmV0dXJuIG9iai5oYXNPd25Qcm9wZXJ0eShWQUxVRV9DT05TVEFOVCk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG4vLyBzcmMvdXRpbHMvcmVzdWx0LnRzXG52YXIgcmVzdWx0X2V4cG9ydHMgPSB7fTtcbl9fZXhwb3J0KHJlc3VsdF9leHBvcnRzLCB7XG4gIGVycjogKCkgPT4gZXJyLFxuICBtYXA6ICgpID0+IG1hcCxcbiAgb2s6ICgpID0+IG9rLFxuICB1bndyYXA6ICgpID0+IHVud3JhcCxcbiAgdW53cmFwRXJyOiAoKSA9PiB1bndyYXBFcnJcbn0pO1xudmFyIG9rID0gdmFsdWUgPT4gKHtcbiAgaXNPazogdHJ1ZSxcbiAgaXNFcnI6IGZhbHNlLFxuICB2YWx1ZVxufSk7XG52YXIgZXJyID0gdmFsdWUgPT4gKHtcbiAgaXNPazogZmFsc2UsXG4gIGlzRXJyOiB0cnVlLFxuICB2YWx1ZVxufSk7XG5mdW5jdGlvbiBtYXAocmVzdWx0LCBmbikge1xuICBpZiAocmVzdWx0LmlzT2spIHtcbiAgICBjb25zdCB2YWwgPSBmbihyZXN1bHQudmFsdWUpO1xuICAgIGlmICh2YWwgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICByZXR1cm4gdmFsLnRoZW4obmV3VmFsID0+IG9rKG5ld1ZhbCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb2sodmFsKTtcbiAgICB9XG4gIH1cbiAgaWYgKHJlc3VsdC5pc0Vycikge1xuICAgIGNvbnN0IHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgIHJldHVybiBlcnIodmFsdWUpO1xuICB9XG4gIHRocm93IFwic2hvdWxkIG5ldmVyIGdldCBoZXJlXCI7XG59XG52YXIgdW53cmFwID0gcmVzdWx0ID0+IHtcbiAgaWYgKHJlc3VsdC5pc09rKSB7XG4gICAgcmV0dXJuIHJlc3VsdC52YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyByZXN1bHQudmFsdWU7XG4gIH1cbn07XG52YXIgdW53cmFwRXJyID0gcmVzdWx0ID0+IHtcbiAgaWYgKHJlc3VsdC5pc0Vycikge1xuICAgIHJldHVybiByZXN1bHQudmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgcmVzdWx0LnZhbHVlO1xuICB9XG59O1xuXG4vLyBzcmMvdXRpbHMvc2VyaWFsaXplLnRzXG5mdW5jdGlvbiBkZXNlcmlhbGl6ZVByb3BlcnR5KHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwic3RyaW5nXCIgfHwgIXZhbHVlLnN0YXJ0c1dpdGgoU0VSSUFMSVpFRF9QUkVGSVgpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHJldHVybiBSZW1vdGVWYWx1ZS5mcm9tTG9jYWxWYWx1ZShKU09OLnBhcnNlKGF0b2IodmFsdWUuc2xpY2UoU0VSSUFMSVpFRF9QUkVGSVgubGVuZ3RoKSkpKTtcbn1cblxuLy8gc3JjL3V0aWxzL3N0eWxlLnRzXG5mdW5jdGlvbiBjcmVhdGVTdHlsZVNoZWV0SWZOZWVkZWRBbmRTdXBwb3J0ZWQoc3R5bGVzMikge1xuICByZXR1cm4gdm9pZCAwO1xufVxuXG4vLyBzcmMvdXRpbHMvc2hhZG93LXJvb3QudHNcbnZhciBnbG9iYWxTdHlsZVNoZWV0O1xuZnVuY3Rpb24gY3JlYXRlU2hhZG93Um9vdChjbXBNZXRhKSB7XG4gIHZhciBfYTtcbiAgY29uc3Qgc2hhZG93Um9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHtcbiAgICBtb2RlOiBcIm9wZW5cIixcbiAgICBkZWxlZ2F0ZXNGb2N1czogISEoY21wTWV0YS4kZmxhZ3MkICYgMTYgLyogc2hhZG93RGVsZWdhdGVzRm9jdXMgKi8pXG4gIH0pO1xuICBpZiAoZ2xvYmFsU3R5bGVTaGVldCA9PT0gdm9pZCAwKSBnbG9iYWxTdHlsZVNoZWV0ID0gKF9hID0gY3JlYXRlU3R5bGVTaGVldElmTmVlZGVkQW5kU3VwcG9ydGVkKCkpICE9IG51bGwgPyBfYSA6IG51bGw7XG4gIGlmIChnbG9iYWxTdHlsZVNoZWV0KSB7XG4gICAgaWYgKHN1cHBvcnRzTXV0YWJsZUFkb3B0ZWRTdHlsZVNoZWV0cykge1xuICAgICAgc2hhZG93Um9vdC5hZG9wdGVkU3R5bGVTaGVldHMucHVzaChnbG9iYWxTdHlsZVNoZWV0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2hhZG93Um9vdC5hZG9wdGVkU3R5bGVTaGVldHMgPSBbLi4uc2hhZG93Um9vdC5hZG9wdGVkU3R5bGVTaGVldHMsIGdsb2JhbFN0eWxlU2hlZXRdO1xuICAgIH1cbiAgfVxufVxudmFyIHVwZGF0ZUZhbGxiYWNrU2xvdFZpc2liaWxpdHkgPSBlbG0gPT4ge1xuICBjb25zdCBjaGlsZE5vZGVzID0gaW50ZXJuYWxDYWxsKGVsbSwgXCJjaGlsZE5vZGVzXCIpO1xuICBpZiAoZWxtLnRhZ05hbWUgJiYgZWxtLnRhZ05hbWUuaW5jbHVkZXMoXCItXCIpICYmIGVsbVtcInMtY3JcIl0gJiYgZWxtLnRhZ05hbWUgIT09IFwiU0xPVC1GQlwiKSB7XG4gICAgZ2V0SG9zdFNsb3ROb2RlcyhjaGlsZE5vZGVzLCBlbG0udGFnTmFtZSkuZm9yRWFjaChzbG90Tm9kZSA9PiB7XG4gICAgICBpZiAoc2xvdE5vZGUubm9kZVR5cGUgPT09IDEgLyogRWxlbWVudE5vZGUgKi8gJiYgc2xvdE5vZGUudGFnTmFtZSA9PT0gXCJTTE9ULUZCXCIpIHtcbiAgICAgICAgaWYgKGdldFNsb3RDaGlsZFNpYmxpbmdzKHNsb3ROb2RlLCBnZXRTbG90TmFtZShzbG90Tm9kZSksIGZhbHNlKS5sZW5ndGgpIHtcbiAgICAgICAgICBzbG90Tm9kZS5oaWRkZW4gPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNsb3ROb2RlLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgbGV0IGkyID0gMDtcbiAgZm9yIChpMiA9IDA7IGkyIDwgY2hpbGROb2Rlcy5sZW5ndGg7IGkyKyspIHtcbiAgICBjb25zdCBjaGlsZE5vZGUgPSBjaGlsZE5vZGVzW2kyXTtcbiAgICBpZiAoY2hpbGROb2RlLm5vZGVUeXBlID09PSAxIC8qIEVsZW1lbnROb2RlICovICYmIGludGVybmFsQ2FsbChjaGlsZE5vZGUsIFwiY2hpbGROb2Rlc1wiKS5sZW5ndGgpIHtcbiAgICAgIHVwZGF0ZUZhbGxiYWNrU2xvdFZpc2liaWxpdHkoY2hpbGROb2RlKTtcbiAgICB9XG4gIH1cbn07XG52YXIgZ2V0U2xvdHRlZENoaWxkTm9kZXMgPSBjaGlsZE5vZGVzID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIGZvciAobGV0IGkyID0gMDsgaTIgPCBjaGlsZE5vZGVzLmxlbmd0aDsgaTIrKykge1xuICAgIGNvbnN0IHNsb3R0ZWROb2RlID0gY2hpbGROb2Rlc1tpMl1bXCJzLW5yXCJdIHx8IHZvaWQgMDtcbiAgICBpZiAoc2xvdHRlZE5vZGUgJiYgc2xvdHRlZE5vZGUuaXNDb25uZWN0ZWQpIHtcbiAgICAgIHJlc3VsdC5wdXNoKHNsb3R0ZWROb2RlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5mdW5jdGlvbiBnZXRIb3N0U2xvdE5vZGVzKGNoaWxkTm9kZXMsIGhvc3ROYW1lLCBzbG90TmFtZSkge1xuICBsZXQgaTIgPSAwO1xuICBsZXQgc2xvdHRlZE5vZGVzID0gW107XG4gIGxldCBjaGlsZE5vZGU7XG4gIGZvciAoOyBpMiA8IGNoaWxkTm9kZXMubGVuZ3RoOyBpMisrKSB7XG4gICAgY2hpbGROb2RlID0gY2hpbGROb2Rlc1tpMl07XG4gICAgaWYgKGNoaWxkTm9kZVtcInMtc3JcIl0gJiYgKCFob3N0TmFtZSB8fCBjaGlsZE5vZGVbXCJzLWhuXCJdID09PSBob3N0TmFtZSkgJiYgKHNsb3ROYW1lID09PSB2b2lkIDAgfHwgZ2V0U2xvdE5hbWUoY2hpbGROb2RlKSA9PT0gc2xvdE5hbWUpKSB7XG4gICAgICBzbG90dGVkTm9kZXMucHVzaChjaGlsZE5vZGUpO1xuICAgICAgaWYgKHR5cGVvZiBzbG90TmFtZSAhPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIHNsb3R0ZWROb2RlcztcbiAgICB9XG4gICAgc2xvdHRlZE5vZGVzID0gWy4uLnNsb3R0ZWROb2RlcywgLi4uZ2V0SG9zdFNsb3ROb2RlcyhjaGlsZE5vZGUuY2hpbGROb2RlcywgaG9zdE5hbWUsIHNsb3ROYW1lKV07XG4gIH1cbiAgcmV0dXJuIHNsb3R0ZWROb2Rlcztcbn1cbnZhciBnZXRTbG90Q2hpbGRTaWJsaW5ncyA9IChzbG90LCBzbG90TmFtZSwgaW5jbHVkZVNsb3QgPSB0cnVlKSA9PiB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBbXTtcbiAgaWYgKGluY2x1ZGVTbG90ICYmIHNsb3RbXCJzLXNyXCJdIHx8ICFzbG90W1wicy1zclwiXSkgY2hpbGROb2Rlcy5wdXNoKHNsb3QpO1xuICBsZXQgbm9kZSA9IHNsb3Q7XG4gIHdoaWxlIChub2RlID0gbm9kZS5uZXh0U2libGluZykge1xuICAgIGlmIChnZXRTbG90TmFtZShub2RlKSA9PT0gc2xvdE5hbWUgJiYgKGluY2x1ZGVTbG90IHx8ICFub2RlW1wicy1zclwiXSkpIGNoaWxkTm9kZXMucHVzaChub2RlKTtcbiAgfVxuICByZXR1cm4gY2hpbGROb2Rlcztcbn07XG52YXIgaXNOb2RlTG9jYXRlZEluU2xvdCA9IChub2RlVG9SZWxvY2F0ZSwgc2xvdE5hbWUpID0+IHtcbiAgaWYgKG5vZGVUb1JlbG9jYXRlLm5vZGVUeXBlID09PSAxIC8qIEVsZW1lbnROb2RlICovKSB7XG4gICAgaWYgKG5vZGVUb1JlbG9jYXRlLmdldEF0dHJpYnV0ZShcInNsb3RcIikgPT09IG51bGwgJiYgc2xvdE5hbWUgPT09IFwiXCIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAobm9kZVRvUmVsb2NhdGUuZ2V0QXR0cmlidXRlKFwic2xvdFwiKSA9PT0gc2xvdE5hbWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKG5vZGVUb1JlbG9jYXRlW1wicy1zblwiXSA9PT0gc2xvdE5hbWUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gc2xvdE5hbWUgPT09IFwiXCI7XG59O1xudmFyIGFkZFNsb3RSZWxvY2F0ZU5vZGUgPSAobmV3Q2hpbGQsIHNsb3ROb2RlLCBwcmVwZW5kLCBwb3NpdGlvbikgPT4ge1xuICBpZiAobmV3Q2hpbGRbXCJzLW9sXCJdICYmIG5ld0NoaWxkW1wicy1vbFwiXS5pc0Nvbm5lY3RlZCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBzbG90dGVkTm9kZUxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIik7XG4gIHNsb3R0ZWROb2RlTG9jYXRpb25bXCJzLW5yXCJdID0gbmV3Q2hpbGQ7XG4gIGlmICghc2xvdE5vZGVbXCJzLWNyXCJdIHx8ICFzbG90Tm9kZVtcInMtY3JcIl0ucGFyZW50Tm9kZSkgcmV0dXJuO1xuICBjb25zdCBwYXJlbnQgPSBzbG90Tm9kZVtcInMtY3JcIl0ucGFyZW50Tm9kZTtcbiAgY29uc3QgYXBwZW5kTWV0aG9kID0gcHJlcGVuZCA/IGludGVybmFsQ2FsbChwYXJlbnQsIFwicHJlcGVuZFwiKSA6IGludGVybmFsQ2FsbChwYXJlbnQsIFwiYXBwZW5kQ2hpbGRcIik7XG4gIGlmICh0eXBlb2YgcG9zaXRpb24gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBzbG90dGVkTm9kZUxvY2F0aW9uW1wicy1vb1wiXSA9IHBvc2l0aW9uO1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBpbnRlcm5hbENhbGwocGFyZW50LCBcImNoaWxkTm9kZXNcIik7XG4gICAgY29uc3Qgc2xvdFJlbG9jYXRlTm9kZXMgPSBbc2xvdHRlZE5vZGVMb2NhdGlvbl07XG4gICAgY2hpbGROb2Rlcy5mb3JFYWNoKG4gPT4ge1xuICAgICAgaWYgKG5bXCJzLW5yXCJdKSBzbG90UmVsb2NhdGVOb2Rlcy5wdXNoKG4pO1xuICAgIH0pO1xuICAgIHNsb3RSZWxvY2F0ZU5vZGVzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGlmICghYVtcInMtb29cIl0gfHwgYVtcInMtb29cIl0gPCAoYltcInMtb29cIl0gfHwgMCkpIHJldHVybiAtMTtlbHNlIGlmICghYltcInMtb29cIl0gfHwgYltcInMtb29cIl0gPCBhW1wicy1vb1wiXSkgcmV0dXJuIDE7XG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcbiAgICBzbG90UmVsb2NhdGVOb2Rlcy5mb3JFYWNoKG4gPT4gYXBwZW5kTWV0aG9kLmNhbGwocGFyZW50LCBuKSk7XG4gIH0gZWxzZSB7XG4gICAgYXBwZW5kTWV0aG9kLmNhbGwocGFyZW50LCBzbG90dGVkTm9kZUxvY2F0aW9uKTtcbiAgfVxuICBuZXdDaGlsZFtcInMtb2xcIl0gPSBzbG90dGVkTm9kZUxvY2F0aW9uO1xuICBuZXdDaGlsZFtcInMtc2hcIl0gPSBzbG90Tm9kZVtcInMtaG5cIl07XG59O1xudmFyIGdldFNsb3ROYW1lID0gbm9kZSA9PiB0eXBlb2Ygbm9kZVtcInMtc25cIl0gPT09IFwic3RyaW5nXCIgPyBub2RlW1wicy1zblwiXSA6IG5vZGUubm9kZVR5cGUgPT09IDEgJiYgbm9kZS5nZXRBdHRyaWJ1dGUoXCJzbG90XCIpIHx8IHZvaWQgMDtcbmZ1bmN0aW9uIHBhdGNoU2xvdE5vZGUobm9kZSkge1xuICBpZiAobm9kZS5hc3NpZ25lZEVsZW1lbnRzIHx8IG5vZGUuYXNzaWduZWROb2RlcyB8fCAhbm9kZVtcInMtc3JcIl0pIHJldHVybjtcbiAgY29uc3QgYXNzaWduZWRGYWN0b3J5ID0gZWxlbWVudHNPbmx5ID0+IGZ1bmN0aW9uIChvcHRzKSB7XG4gICAgY29uc3QgdG9SZXR1cm4gPSBbXTtcbiAgICBjb25zdCBzbG90TmFtZSA9IHRoaXNbXCJzLXNuXCJdO1xuICAgIGlmIChvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLmZsYXR0ZW4pIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYFxuICAgICAgICAgIEZsYXR0ZW5pbmcgaXMgbm90IHN1cHBvcnRlZCBmb3IgU3RlbmNpbCBub24tc2hhZG93IHNsb3RzLlxuICAgICAgICAgIFlvdSBjYW4gdXNlIFxcYC5jaGlsZE5vZGVzXFxgIHRvIG5lc3RlZCBzbG90IGZhbGxiYWNrIGNvbnRlbnQuXG4gICAgICAgICAgSWYgeW91IGhhdmUgYSBwYXJ0aWN1bGFyIHVzZSBjYXNlLCBwbGVhc2Ugb3BlbiBhbiBpc3N1ZSBvbiB0aGUgU3RlbmNpbCByZXBvLlxuICAgICAgICBgKTtcbiAgICB9XG4gICAgY29uc3QgcGFyZW50ID0gdGhpc1tcInMtY3JcIl0ucGFyZW50RWxlbWVudDtcbiAgICBjb25zdCBzbG90dGVkTm9kZXMgPSBwYXJlbnQuX19jaGlsZE5vZGVzID8gcGFyZW50LmNoaWxkTm9kZXMgOiBnZXRTbG90dGVkQ2hpbGROb2RlcyhwYXJlbnQuY2hpbGROb2Rlcyk7XG4gICAgc2xvdHRlZE5vZGVzLmZvckVhY2gobiA9PiB7XG4gICAgICBpZiAoc2xvdE5hbWUgPT09IGdldFNsb3ROYW1lKG4pKSB7XG4gICAgICAgIHRvUmV0dXJuLnB1c2gobik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGVsZW1lbnRzT25seSkge1xuICAgICAgcmV0dXJuIHRvUmV0dXJuLmZpbHRlcihuID0+IG4ubm9kZVR5cGUgPT09IDEgLyogRWxlbWVudE5vZGUgKi8pO1xuICAgIH1cbiAgICByZXR1cm4gdG9SZXR1cm47XG4gIH0uYmluZChub2RlKTtcbiAgbm9kZS5hc3NpZ25lZEVsZW1lbnRzID0gYXNzaWduZWRGYWN0b3J5KHRydWUpO1xuICBub2RlLmFzc2lnbmVkTm9kZXMgPSBhc3NpZ25lZEZhY3RvcnkoZmFsc2UpO1xufVxuZnVuY3Rpb24gZGlzcGF0Y2hTbG90Q2hhbmdlRXZlbnQoZWxtKSB7XG4gIGVsbS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcInNsb3RjaGFuZ2VcIiwge1xuICAgIGJ1YmJsZXM6IGZhbHNlLFxuICAgIGNhbmNlbGFibGU6IGZhbHNlLFxuICAgIGNvbXBvc2VkOiBmYWxzZVxuICB9KSk7XG59XG5mdW5jdGlvbiBmaW5kU2xvdEZyb21TbG90dGVkTm9kZShzbG90dGVkTm9kZSwgcGFyZW50SG9zdCkge1xuICB2YXIgX2E7XG4gIHBhcmVudEhvc3QgPSBwYXJlbnRIb3N0IHx8ICgoX2EgPSBzbG90dGVkTm9kZVtcInMtb2xcIl0pID09IG51bGwgPyB2b2lkIDAgOiBfYS5wYXJlbnRFbGVtZW50KTtcbiAgaWYgKCFwYXJlbnRIb3N0KSByZXR1cm4ge1xuICAgIHNsb3ROb2RlOiBudWxsLFxuICAgIHNsb3ROYW1lOiBcIlwiXG4gIH07XG4gIGNvbnN0IHNsb3ROYW1lID0gc2xvdHRlZE5vZGVbXCJzLXNuXCJdID0gZ2V0U2xvdE5hbWUoc2xvdHRlZE5vZGUpIHx8IFwiXCI7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBpbnRlcm5hbENhbGwocGFyZW50SG9zdCwgXCJjaGlsZE5vZGVzXCIpO1xuICBjb25zdCBzbG90Tm9kZSA9IGdldEhvc3RTbG90Tm9kZXMoY2hpbGROb2RlcywgcGFyZW50SG9zdC50YWdOYW1lLCBzbG90TmFtZSlbMF07XG4gIHJldHVybiB7XG4gICAgc2xvdE5vZGUsXG4gICAgc2xvdE5hbWVcbiAgfTtcbn1cblxuLy8gc3JjL3J1bnRpbWUvZG9tLWV4dHJhcy50c1xudmFyIHBhdGNoUHNldWRvU2hhZG93RG9tID0gaG9zdEVsZW1lbnRQcm90b3R5cGUgPT4ge1xuICBwYXRjaENsb25lTm9kZShob3N0RWxlbWVudFByb3RvdHlwZSk7XG4gIHBhdGNoU2xvdEFwcGVuZENoaWxkKGhvc3RFbGVtZW50UHJvdG90eXBlKTtcbiAgcGF0Y2hTbG90QXBwZW5kKGhvc3RFbGVtZW50UHJvdG90eXBlKTtcbiAgcGF0Y2hTbG90UHJlcGVuZChob3N0RWxlbWVudFByb3RvdHlwZSk7XG4gIHBhdGNoU2xvdEluc2VydEFkamFjZW50RWxlbWVudChob3N0RWxlbWVudFByb3RvdHlwZSk7XG4gIHBhdGNoU2xvdEluc2VydEFkamFjZW50SFRNTChob3N0RWxlbWVudFByb3RvdHlwZSk7XG4gIHBhdGNoU2xvdEluc2VydEFkamFjZW50VGV4dChob3N0RWxlbWVudFByb3RvdHlwZSk7XG4gIHBhdGNoSW5zZXJ0QmVmb3JlKGhvc3RFbGVtZW50UHJvdG90eXBlKTtcbiAgcGF0Y2hUZXh0Q29udGVudChob3N0RWxlbWVudFByb3RvdHlwZSk7XG4gIHBhdGNoQ2hpbGRTbG90Tm9kZXMoaG9zdEVsZW1lbnRQcm90b3R5cGUpO1xuICBwYXRjaFNsb3RSZW1vdmVDaGlsZChob3N0RWxlbWVudFByb3RvdHlwZSk7XG59O1xudmFyIHBhdGNoQ2xvbmVOb2RlID0gSG9zdEVsZW1lbnRQcm90b3R5cGUgPT4ge1xuICBjb25zdCBvcmdDbG9uZU5vZGUgPSBIb3N0RWxlbWVudFByb3RvdHlwZS5jbG9uZU5vZGU7XG4gIEhvc3RFbGVtZW50UHJvdG90eXBlLmNsb25lTm9kZSA9IGZ1bmN0aW9uIChkZWVwKSB7XG4gICAgY29uc3Qgc3JjTm9kZSA9IHRoaXM7XG4gICAgY29uc3QgaXNTaGFkb3dEb20gPSBzcmNOb2RlLnNoYWRvd1Jvb3QgJiYgc3VwcG9ydHNTaGFkb3c7XG4gICAgY29uc3QgY2xvbmVkTm9kZSA9IG9yZ0Nsb25lTm9kZS5jYWxsKHNyY05vZGUsIGlzU2hhZG93RG9tID8gZGVlcCA6IGZhbHNlKTtcbiAgICBpZiAoIWlzU2hhZG93RG9tICYmIGRlZXApIHtcbiAgICAgIGxldCBpMiA9IDA7XG4gICAgICBsZXQgc2xvdHRlZCwgbm9uU3RlbmNpbE5vZGU7XG4gICAgICBjb25zdCBzdGVuY2lsUHJpdmF0ZXMgPSBbXCJzLWlkXCIsIFwicy1jclwiLCBcInMtbHJcIiwgXCJzLXJjXCIsIFwicy1zY1wiLCBcInMtcFwiLCBcInMtY25cIiwgXCJzLXNyXCIsIFwicy1zblwiLCBcInMtaG5cIiwgXCJzLW9sXCIsIFwicy1uclwiLCBcInMtc2lcIiwgXCJzLXJmXCIsIFwicy1zY3NcIl07XG4gICAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5fX2NoaWxkTm9kZXMgfHwgdGhpcy5jaGlsZE5vZGVzO1xuICAgICAgZm9yICg7IGkyIDwgY2hpbGROb2Rlcy5sZW5ndGg7IGkyKyspIHtcbiAgICAgICAgc2xvdHRlZCA9IGNoaWxkTm9kZXNbaTJdW1wicy1uclwiXTtcbiAgICAgICAgbm9uU3RlbmNpbE5vZGUgPSBzdGVuY2lsUHJpdmF0ZXMuZXZlcnkocHJpdmF0ZUZpZWxkID0+ICFjaGlsZE5vZGVzW2kyXVtwcml2YXRlRmllbGRdKTtcbiAgICAgICAgaWYgKHNsb3R0ZWQpIHtcbiAgICAgICAgICBpZiAoY2xvbmVkTm9kZS5fX2FwcGVuZENoaWxkKSB7XG4gICAgICAgICAgICBjbG9uZWROb2RlLl9fYXBwZW5kQ2hpbGQoc2xvdHRlZC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjbG9uZWROb2RlLmFwcGVuZENoaWxkKHNsb3R0ZWQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vblN0ZW5jaWxOb2RlKSB7XG4gICAgICAgICAgY2xvbmVkTm9kZS5hcHBlbmRDaGlsZChjaGlsZE5vZGVzW2kyXS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjbG9uZWROb2RlO1xuICB9O1xufTtcbnZhciBwYXRjaFNsb3RBcHBlbmRDaGlsZCA9IEhvc3RFbGVtZW50UHJvdG90eXBlID0+IHtcbiAgSG9zdEVsZW1lbnRQcm90b3R5cGUuX19hcHBlbmRDaGlsZCA9IEhvc3RFbGVtZW50UHJvdG90eXBlLmFwcGVuZENoaWxkO1xuICBIb3N0RWxlbWVudFByb3RvdHlwZS5hcHBlbmRDaGlsZCA9IGZ1bmN0aW9uIChuZXdDaGlsZCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHNsb3ROYW1lLFxuICAgICAgc2xvdE5vZGVcbiAgICB9ID0gZmluZFNsb3RGcm9tU2xvdHRlZE5vZGUobmV3Q2hpbGQsIHRoaXMpO1xuICAgIGlmIChzbG90Tm9kZSkge1xuICAgICAgYWRkU2xvdFJlbG9jYXRlTm9kZShuZXdDaGlsZCwgc2xvdE5vZGUpO1xuICAgICAgY29uc3Qgc2xvdENoaWxkTm9kZXMgPSBnZXRTbG90Q2hpbGRTaWJsaW5ncyhzbG90Tm9kZSwgc2xvdE5hbWUpO1xuICAgICAgY29uc3QgYXBwZW5kQWZ0ZXIgPSBzbG90Q2hpbGROb2Rlc1tzbG90Q2hpbGROb2Rlcy5sZW5ndGggLSAxXTtcbiAgICAgIGNvbnN0IHBhcmVudCA9IGludGVybmFsQ2FsbChhcHBlbmRBZnRlciwgXCJwYXJlbnROb2RlXCIpO1xuICAgICAgY29uc3QgaW5zZXJ0ZWROb2RlID0gaW50ZXJuYWxDYWxsKHBhcmVudCwgXCJpbnNlcnRCZWZvcmVcIikobmV3Q2hpbGQsIGFwcGVuZEFmdGVyLm5leHRTaWJsaW5nKTtcbiAgICAgIGRpc3BhdGNoU2xvdENoYW5nZUV2ZW50KHNsb3ROb2RlKTtcbiAgICAgIHVwZGF0ZUZhbGxiYWNrU2xvdFZpc2liaWxpdHkodGhpcyk7XG4gICAgICByZXR1cm4gaW5zZXJ0ZWROb2RlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fX2FwcGVuZENoaWxkKG5ld0NoaWxkKTtcbiAgfTtcbn07XG52YXIgcGF0Y2hTbG90UmVtb3ZlQ2hpbGQgPSBFbGVtZW50UHJvdG90eXBlID0+IHtcbiAgRWxlbWVudFByb3RvdHlwZS5fX3JlbW92ZUNoaWxkID0gRWxlbWVudFByb3RvdHlwZS5yZW1vdmVDaGlsZDtcbiAgRWxlbWVudFByb3RvdHlwZS5yZW1vdmVDaGlsZCA9IGZ1bmN0aW9uICh0b1JlbW92ZSkge1xuICAgIGlmICh0b1JlbW92ZSAmJiB0eXBlb2YgdG9SZW1vdmVbXCJzLXNuXCJdICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5fX2NoaWxkTm9kZXMgfHwgdGhpcy5jaGlsZE5vZGVzO1xuICAgICAgY29uc3Qgc2xvdE5vZGUgPSBnZXRIb3N0U2xvdE5vZGVzKGNoaWxkTm9kZXMsIHRoaXMudGFnTmFtZSwgdG9SZW1vdmVbXCJzLXNuXCJdKTtcbiAgICAgIGlmIChzbG90Tm9kZSAmJiB0b1JlbW92ZS5pc0Nvbm5lY3RlZCkge1xuICAgICAgICB0b1JlbW92ZS5yZW1vdmUoKTtcbiAgICAgICAgdXBkYXRlRmFsbGJhY2tTbG90VmlzaWJpbGl0eSh0aGlzKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fX3JlbW92ZUNoaWxkKHRvUmVtb3ZlKTtcbiAgfTtcbn07XG52YXIgcGF0Y2hTbG90UHJlcGVuZCA9IEhvc3RFbGVtZW50UHJvdG90eXBlID0+IHtcbiAgSG9zdEVsZW1lbnRQcm90b3R5cGUuX19wcmVwZW5kID0gSG9zdEVsZW1lbnRQcm90b3R5cGUucHJlcGVuZDtcbiAgSG9zdEVsZW1lbnRQcm90b3R5cGUucHJlcGVuZCA9IGZ1bmN0aW9uICguLi5uZXdDaGlsZHJlbikge1xuICAgIG5ld0NoaWxkcmVuLmZvckVhY2gobmV3Q2hpbGQgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBuZXdDaGlsZCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBuZXdDaGlsZCA9IHRoaXMub3duZXJEb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuZXdDaGlsZCk7XG4gICAgICB9XG4gICAgICBjb25zdCBzbG90TmFtZSA9IChuZXdDaGlsZFtcInMtc25cIl0gPSBnZXRTbG90TmFtZShuZXdDaGlsZCkpIHx8IFwiXCI7XG4gICAgICBjb25zdCBjaGlsZE5vZGVzID0gaW50ZXJuYWxDYWxsKHRoaXMsIFwiY2hpbGROb2Rlc1wiKTtcbiAgICAgIGNvbnN0IHNsb3ROb2RlID0gZ2V0SG9zdFNsb3ROb2RlcyhjaGlsZE5vZGVzLCB0aGlzLnRhZ05hbWUsIHNsb3ROYW1lKVswXTtcbiAgICAgIGlmIChzbG90Tm9kZSkge1xuICAgICAgICBhZGRTbG90UmVsb2NhdGVOb2RlKG5ld0NoaWxkLCBzbG90Tm9kZSwgdHJ1ZSk7XG4gICAgICAgIGNvbnN0IHNsb3RDaGlsZE5vZGVzID0gZ2V0U2xvdENoaWxkU2libGluZ3Moc2xvdE5vZGUsIHNsb3ROYW1lKTtcbiAgICAgICAgY29uc3QgYXBwZW5kQWZ0ZXIgPSBzbG90Q2hpbGROb2Rlc1swXTtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gaW50ZXJuYWxDYWxsKGFwcGVuZEFmdGVyLCBcInBhcmVudE5vZGVcIik7XG4gICAgICAgIGNvbnN0IHRvUmV0dXJuID0gaW50ZXJuYWxDYWxsKHBhcmVudCwgXCJpbnNlcnRCZWZvcmVcIikobmV3Q2hpbGQsIGludGVybmFsQ2FsbChhcHBlbmRBZnRlciwgXCJuZXh0U2libGluZ1wiKSk7XG4gICAgICAgIGRpc3BhdGNoU2xvdENoYW5nZUV2ZW50KHNsb3ROb2RlKTtcbiAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG5ld0NoaWxkLm5vZGVUeXBlID09PSAxICYmICEhbmV3Q2hpbGQuZ2V0QXR0cmlidXRlKFwic2xvdFwiKSkge1xuICAgICAgICBuZXdDaGlsZC5oaWRkZW4gPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIEhvc3RFbGVtZW50UHJvdG90eXBlLl9fcHJlcGVuZChuZXdDaGlsZCk7XG4gICAgfSk7XG4gIH07XG59O1xudmFyIHBhdGNoU2xvdEFwcGVuZCA9IEhvc3RFbGVtZW50UHJvdG90eXBlID0+IHtcbiAgSG9zdEVsZW1lbnRQcm90b3R5cGUuX19hcHBlbmQgPSBIb3N0RWxlbWVudFByb3RvdHlwZS5hcHBlbmQ7XG4gIEhvc3RFbGVtZW50UHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uICguLi5uZXdDaGlsZHJlbikge1xuICAgIG5ld0NoaWxkcmVuLmZvckVhY2gobmV3Q2hpbGQgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBuZXdDaGlsZCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBuZXdDaGlsZCA9IHRoaXMub3duZXJEb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuZXdDaGlsZCk7XG4gICAgICB9XG4gICAgICB0aGlzLmFwcGVuZENoaWxkKG5ld0NoaWxkKTtcbiAgICB9KTtcbiAgfTtcbn07XG52YXIgcGF0Y2hTbG90SW5zZXJ0QWRqYWNlbnRIVE1MID0gSG9zdEVsZW1lbnRQcm90b3R5cGUgPT4ge1xuICBjb25zdCBvcmlnaW5hbEluc2VydEFkamFjZW50SHRtbCA9IEhvc3RFbGVtZW50UHJvdG90eXBlLmluc2VydEFkamFjZW50SFRNTDtcbiAgSG9zdEVsZW1lbnRQcm90b3R5cGUuaW5zZXJ0QWRqYWNlbnRIVE1MID0gZnVuY3Rpb24gKHBvc2l0aW9uLCB0ZXh0KSB7XG4gICAgaWYgKHBvc2l0aW9uICE9PSBcImFmdGVyYmVnaW5cIiAmJiBwb3NpdGlvbiAhPT0gXCJiZWZvcmVlbmRcIikge1xuICAgICAgcmV0dXJuIG9yaWdpbmFsSW5zZXJ0QWRqYWNlbnRIdG1sLmNhbGwodGhpcywgcG9zaXRpb24sIHRleHQpO1xuICAgIH1cbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIl9cIik7XG4gICAgbGV0IG5vZGU7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IHRleHQ7XG4gICAgaWYgKHBvc2l0aW9uID09PSBcImFmdGVyYmVnaW5cIikge1xuICAgICAgd2hpbGUgKG5vZGUgPSBjb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICB0aGlzLnByZXBlbmQobm9kZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChwb3NpdGlvbiA9PT0gXCJiZWZvcmVlbmRcIikge1xuICAgICAgd2hpbGUgKG5vZGUgPSBjb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICB0aGlzLmFwcGVuZChub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xudmFyIHBhdGNoU2xvdEluc2VydEFkamFjZW50VGV4dCA9IEhvc3RFbGVtZW50UHJvdG90eXBlID0+IHtcbiAgSG9zdEVsZW1lbnRQcm90b3R5cGUuaW5zZXJ0QWRqYWNlbnRUZXh0ID0gZnVuY3Rpb24gKHBvc2l0aW9uLCB0ZXh0KSB7XG4gICAgdGhpcy5pbnNlcnRBZGphY2VudEhUTUwocG9zaXRpb24sIHRleHQpO1xuICB9O1xufTtcbnZhciBwYXRjaEluc2VydEJlZm9yZSA9IEhvc3RFbGVtZW50UHJvdG90eXBlID0+IHtcbiAgY29uc3QgZWxlUHJvdG8gPSBIb3N0RWxlbWVudFByb3RvdHlwZTtcbiAgaWYgKGVsZVByb3RvLl9faW5zZXJ0QmVmb3JlKSByZXR1cm47XG4gIGVsZVByb3RvLl9faW5zZXJ0QmVmb3JlID0gSG9zdEVsZW1lbnRQcm90b3R5cGUuaW5zZXJ0QmVmb3JlO1xuICBIb3N0RWxlbWVudFByb3RvdHlwZS5pbnNlcnRCZWZvcmUgPSBmdW5jdGlvbiAobmV3Q2hpbGQsIGN1cnJlbnRDaGlsZCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHNsb3ROYW1lLFxuICAgICAgc2xvdE5vZGVcbiAgICB9ID0gZmluZFNsb3RGcm9tU2xvdHRlZE5vZGUobmV3Q2hpbGQsIHRoaXMpO1xuICAgIGNvbnN0IHNsb3R0ZWROb2RlcyA9IHRoaXMuX19jaGlsZE5vZGVzID8gdGhpcy5jaGlsZE5vZGVzIDogZ2V0U2xvdHRlZENoaWxkTm9kZXModGhpcy5jaGlsZE5vZGVzKTtcbiAgICBpZiAoc2xvdE5vZGUpIHtcbiAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgICAgc2xvdHRlZE5vZGVzLmZvckVhY2goY2hpbGROb2RlID0+IHtcbiAgICAgICAgaWYgKGNoaWxkTm9kZSA9PT0gY3VycmVudENoaWxkIHx8IGN1cnJlbnRDaGlsZCA9PT0gbnVsbCkge1xuICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICBpZiAoY3VycmVudENoaWxkID09PSBudWxsIHx8IHNsb3ROYW1lICE9PSBjdXJyZW50Q2hpbGRbXCJzLXNuXCJdKSB7XG4gICAgICAgICAgICB0aGlzLmFwcGVuZENoaWxkKG5ld0NoaWxkKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHNsb3ROYW1lID09PSBjdXJyZW50Q2hpbGRbXCJzLXNuXCJdKSB7XG4gICAgICAgICAgICBhZGRTbG90UmVsb2NhdGVOb2RlKG5ld0NoaWxkLCBzbG90Tm9kZSk7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBpbnRlcm5hbENhbGwoY3VycmVudENoaWxkLCBcInBhcmVudE5vZGVcIik7XG4gICAgICAgICAgICBpbnRlcm5hbENhbGwocGFyZW50LCBcImluc2VydEJlZm9yZVwiKShuZXdDaGlsZCwgY3VycmVudENoaWxkKTtcbiAgICAgICAgICAgIGRpc3BhdGNoU2xvdENoYW5nZUV2ZW50KHNsb3ROb2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChmb3VuZCkgcmV0dXJuIG5ld0NoaWxkO1xuICAgIH1cbiAgICBjb25zdCBwYXJlbnROb2RlID0gY3VycmVudENoaWxkID09IG51bGwgPyB2b2lkIDAgOiBjdXJyZW50Q2hpbGQuX19wYXJlbnROb2RlO1xuICAgIGlmIChwYXJlbnROb2RlICYmICF0aGlzLmlzU2FtZU5vZGUocGFyZW50Tm9kZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLmFwcGVuZENoaWxkKG5ld0NoaWxkKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX19pbnNlcnRCZWZvcmUobmV3Q2hpbGQsIGN1cnJlbnRDaGlsZCk7XG4gIH07XG59O1xudmFyIHBhdGNoU2xvdEluc2VydEFkamFjZW50RWxlbWVudCA9IEhvc3RFbGVtZW50UHJvdG90eXBlID0+IHtcbiAgY29uc3Qgb3JpZ2luYWxJbnNlcnRBZGphY2VudEVsZW1lbnQgPSBIb3N0RWxlbWVudFByb3RvdHlwZS5pbnNlcnRBZGphY2VudEVsZW1lbnQ7XG4gIEhvc3RFbGVtZW50UHJvdG90eXBlLmluc2VydEFkamFjZW50RWxlbWVudCA9IGZ1bmN0aW9uIChwb3NpdGlvbiwgZWxlbWVudCkge1xuICAgIGlmIChwb3NpdGlvbiAhPT0gXCJhZnRlcmJlZ2luXCIgJiYgcG9zaXRpb24gIT09IFwiYmVmb3JlZW5kXCIpIHtcbiAgICAgIHJldHVybiBvcmlnaW5hbEluc2VydEFkamFjZW50RWxlbWVudC5jYWxsKHRoaXMsIHBvc2l0aW9uLCBlbGVtZW50KTtcbiAgICB9XG4gICAgaWYgKHBvc2l0aW9uID09PSBcImFmdGVyYmVnaW5cIikge1xuICAgICAgdGhpcy5wcmVwZW5kKGVsZW1lbnQpO1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfSBlbHNlIGlmIChwb3NpdGlvbiA9PT0gXCJiZWZvcmVlbmRcIikge1xuICAgICAgdGhpcy5hcHBlbmQoZWxlbWVudCk7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH07XG59O1xudmFyIHBhdGNoVGV4dENvbnRlbnQgPSBob3N0RWxlbWVudFByb3RvdHlwZSA9PiB7XG4gIHBhdGNoSG9zdE9yaWdpbmFsQWNjZXNzb3IoXCJ0ZXh0Q29udGVudFwiLCBob3N0RWxlbWVudFByb3RvdHlwZSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShob3N0RWxlbWVudFByb3RvdHlwZSwgXCJ0ZXh0Q29udGVudFwiLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgdGV4dCA9IFwiXCI7XG4gICAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5fX2NoaWxkTm9kZXMgPyB0aGlzLmNoaWxkTm9kZXMgOiBnZXRTbG90dGVkQ2hpbGROb2Rlcyh0aGlzLmNoaWxkTm9kZXMpO1xuICAgICAgY2hpbGROb2Rlcy5mb3JFYWNoKG5vZGUgPT4gdGV4dCArPSBub2RlLnRleHRDb250ZW50IHx8IFwiXCIpO1xuICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuX19jaGlsZE5vZGVzID8gdGhpcy5jaGlsZE5vZGVzIDogZ2V0U2xvdHRlZENoaWxkTm9kZXModGhpcy5jaGlsZE5vZGVzKTtcbiAgICAgIGNoaWxkTm9kZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgaWYgKG5vZGVbXCJzLW9sXCJdKSBub2RlW1wicy1vbFwiXS5yZW1vdmUoKTtcbiAgICAgICAgbm9kZS5yZW1vdmUoKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgdmFsdWUpO1xuICAgIH1cbiAgfSk7XG59O1xudmFyIHBhdGNoQ2hpbGRTbG90Tm9kZXMgPSBlbG0gPT4ge1xuICBjbGFzcyBGYWtlTm9kZUxpc3QgZXh0ZW5kcyBBcnJheSB7XG4gICAgaXRlbShuKSB7XG4gICAgICByZXR1cm4gdGhpc1tuXTtcbiAgICB9XG4gIH1cbiAgcGF0Y2hIb3N0T3JpZ2luYWxBY2Nlc3NvcihcImNoaWxkcmVuXCIsIGVsbSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbG0sIFwiY2hpbGRyZW5cIiwge1xuICAgIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXMuZmlsdGVyKG4gPT4gbi5ub2RlVHlwZSA9PT0gMSk7XG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsbSwgXCJjaGlsZEVsZW1lbnRDb3VudFwiLCB7XG4gICAgZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4ubGVuZ3RoO1xuICAgIH1cbiAgfSk7XG4gIHBhdGNoSG9zdE9yaWdpbmFsQWNjZXNzb3IoXCJmaXJzdENoaWxkXCIsIGVsbSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbG0sIFwiZmlyc3RDaGlsZFwiLCB7XG4gICAgZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuY2hpbGROb2Rlc1swXTtcbiAgICB9XG4gIH0pO1xuICBwYXRjaEhvc3RPcmlnaW5hbEFjY2Vzc29yKFwibGFzdENoaWxkXCIsIGVsbSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbG0sIFwibGFzdENoaWxkXCIsIHtcbiAgICBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzW3RoaXMuY2hpbGROb2Rlcy5sZW5ndGggLSAxXTtcbiAgICB9XG4gIH0pO1xuICBwYXRjaEhvc3RPcmlnaW5hbEFjY2Vzc29yKFwiY2hpbGROb2Rlc1wiLCBlbG0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxtLCBcImNoaWxkTm9kZXNcIiwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBGYWtlTm9kZUxpc3QoKTtcbiAgICAgIHJlc3VsdC5wdXNoKC4uLmdldFNsb3R0ZWRDaGlsZE5vZGVzKHRoaXMuX19jaGlsZE5vZGVzKSk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgfSk7XG59O1xudmFyIHBhdGNoU2xvdHRlZE5vZGUgPSBub2RlID0+IHtcbiAgaWYgKCFub2RlIHx8IG5vZGUuX19uZXh0U2libGluZyAhPT0gdm9pZCAwIHx8ICFnbG9iYWxUaGlzLk5vZGUpIHJldHVybjtcbiAgcGF0Y2hOZXh0U2libGluZyhub2RlKTtcbiAgcGF0Y2hQcmV2aW91c1NpYmxpbmcobm9kZSk7XG4gIHBhdGNoUGFyZW50Tm9kZShub2RlKTtcbiAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgcGF0Y2hOZXh0RWxlbWVudFNpYmxpbmcobm9kZSk7XG4gICAgcGF0Y2hQcmV2aW91c0VsZW1lbnRTaWJsaW5nKG5vZGUpO1xuICB9XG59O1xudmFyIHBhdGNoTmV4dFNpYmxpbmcgPSBub2RlID0+IHtcbiAgaWYgKCFub2RlIHx8IG5vZGUuX19uZXh0U2libGluZykgcmV0dXJuO1xuICBwYXRjaEhvc3RPcmlnaW5hbEFjY2Vzc29yKFwibmV4dFNpYmxpbmdcIiwgbm9kZSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShub2RlLCBcIm5leHRTaWJsaW5nXCIsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfYTtcbiAgICAgIGNvbnN0IHBhcmVudE5vZGVzID0gKF9hID0gdGhpc1tcInMtb2xcIl0pID09IG51bGwgPyB2b2lkIDAgOiBfYS5wYXJlbnROb2RlLmNoaWxkTm9kZXM7XG4gICAgICBjb25zdCBpbmRleCA9IHBhcmVudE5vZGVzID09IG51bGwgPyB2b2lkIDAgOiBwYXJlbnROb2Rlcy5pbmRleE9mKHRoaXMpO1xuICAgICAgaWYgKHBhcmVudE5vZGVzICYmIGluZGV4ID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudE5vZGVzW2luZGV4ICsgMV07XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5fX25leHRTaWJsaW5nO1xuICAgIH1cbiAgfSk7XG59O1xudmFyIHBhdGNoTmV4dEVsZW1lbnRTaWJsaW5nID0gZWxlbWVudCA9PiB7XG4gIGlmICghZWxlbWVudCB8fCBlbGVtZW50Ll9fbmV4dEVsZW1lbnRTaWJsaW5nKSByZXR1cm47XG4gIHBhdGNoSG9zdE9yaWdpbmFsQWNjZXNzb3IoXCJuZXh0RWxlbWVudFNpYmxpbmdcIiwgZWxlbWVudCk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCBcIm5leHRFbGVtZW50U2libGluZ1wiLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX2E7XG4gICAgICBjb25zdCBwYXJlbnRFbGVzID0gKF9hID0gdGhpc1tcInMtb2xcIl0pID09IG51bGwgPyB2b2lkIDAgOiBfYS5wYXJlbnROb2RlLmNoaWxkcmVuO1xuICAgICAgY29uc3QgaW5kZXggPSBwYXJlbnRFbGVzID09IG51bGwgPyB2b2lkIDAgOiBwYXJlbnRFbGVzLmluZGV4T2YodGhpcyk7XG4gICAgICBpZiAocGFyZW50RWxlcyAmJiBpbmRleCA+IC0xKSB7XG4gICAgICAgIHJldHVybiBwYXJlbnRFbGVzW2luZGV4ICsgMV07XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5fX25leHRFbGVtZW50U2libGluZztcbiAgICB9XG4gIH0pO1xufTtcbnZhciBwYXRjaFByZXZpb3VzU2libGluZyA9IG5vZGUgPT4ge1xuICBpZiAoIW5vZGUgfHwgbm9kZS5fX3ByZXZpb3VzU2libGluZykgcmV0dXJuO1xuICBwYXRjaEhvc3RPcmlnaW5hbEFjY2Vzc29yKFwicHJldmlvdXNTaWJsaW5nXCIsIG5vZGUpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkobm9kZSwgXCJwcmV2aW91c1NpYmxpbmdcIiwge1xuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9hO1xuICAgICAgY29uc3QgcGFyZW50Tm9kZXMgPSAoX2EgPSB0aGlzW1wicy1vbFwiXSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLnBhcmVudE5vZGUuY2hpbGROb2RlcztcbiAgICAgIGNvbnN0IGluZGV4ID0gcGFyZW50Tm9kZXMgPT0gbnVsbCA/IHZvaWQgMCA6IHBhcmVudE5vZGVzLmluZGV4T2YodGhpcyk7XG4gICAgICBpZiAocGFyZW50Tm9kZXMgJiYgaW5kZXggPiAtMSkge1xuICAgICAgICByZXR1cm4gcGFyZW50Tm9kZXNbaW5kZXggLSAxXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLl9fcHJldmlvdXNTaWJsaW5nO1xuICAgIH1cbiAgfSk7XG59O1xudmFyIHBhdGNoUHJldmlvdXNFbGVtZW50U2libGluZyA9IGVsZW1lbnQgPT4ge1xuICBpZiAoIWVsZW1lbnQgfHwgZWxlbWVudC5fX3ByZXZpb3VzRWxlbWVudFNpYmxpbmcpIHJldHVybjtcbiAgcGF0Y2hIb3N0T3JpZ2luYWxBY2Nlc3NvcihcInByZXZpb3VzRWxlbWVudFNpYmxpbmdcIiwgZWxlbWVudCk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCBcInByZXZpb3VzRWxlbWVudFNpYmxpbmdcIiwge1xuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9hO1xuICAgICAgY29uc3QgcGFyZW50Tm9kZXMgPSAoX2EgPSB0aGlzW1wicy1vbFwiXSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLnBhcmVudE5vZGUuY2hpbGRyZW47XG4gICAgICBjb25zdCBpbmRleCA9IHBhcmVudE5vZGVzID09IG51bGwgPyB2b2lkIDAgOiBwYXJlbnROb2Rlcy5pbmRleE9mKHRoaXMpO1xuICAgICAgaWYgKHBhcmVudE5vZGVzICYmIGluZGV4ID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudE5vZGVzW2luZGV4IC0gMV07XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5fX3ByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgfVxuICB9KTtcbn07XG52YXIgcGF0Y2hQYXJlbnROb2RlID0gbm9kZSA9PiB7XG4gIGlmICghbm9kZSB8fCBub2RlLl9fcGFyZW50Tm9kZSkgcmV0dXJuO1xuICBwYXRjaEhvc3RPcmlnaW5hbEFjY2Vzc29yKFwicGFyZW50Tm9kZVwiLCBub2RlKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5vZGUsIFwicGFyZW50Tm9kZVwiLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX2E7XG4gICAgICByZXR1cm4gKChfYSA9IHRoaXNbXCJzLW9sXCJdKSA9PSBudWxsID8gdm9pZCAwIDogX2EucGFyZW50Tm9kZSkgfHwgdGhpcy5fX3BhcmVudE5vZGU7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgdGhpcy5fX3BhcmVudE5vZGUgPSB2YWx1ZTtcbiAgICB9XG4gIH0pO1xufTtcbnZhciB2YWxpZEVsZW1lbnRQYXRjaGVzID0gW1wiY2hpbGRyZW5cIiwgXCJuZXh0RWxlbWVudFNpYmxpbmdcIiwgXCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nXCJdO1xudmFyIHZhbGlkTm9kZXNQYXRjaGVzID0gW1wiY2hpbGROb2Rlc1wiLCBcImZpcnN0Q2hpbGRcIiwgXCJsYXN0Q2hpbGRcIiwgXCJuZXh0U2libGluZ1wiLCBcInByZXZpb3VzU2libGluZ1wiLCBcInRleHRDb250ZW50XCIsIFwicGFyZW50Tm9kZVwiXTtcbmZ1bmN0aW9uIHBhdGNoSG9zdE9yaWdpbmFsQWNjZXNzb3IoYWNjZXNzb3JOYW1lLCBub2RlKSB7XG4gIGlmICghZ2xvYmFsVGhpcy5Ob2RlIHx8ICFnbG9iYWxUaGlzLkVsZW1lbnQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgbGV0IGFjY2Vzc29yO1xuICBpZiAodmFsaWRFbGVtZW50UGF0Y2hlcy5pbmNsdWRlcyhhY2Nlc3Nvck5hbWUpKSB7XG4gICAgYWNjZXNzb3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEVsZW1lbnQucHJvdG90eXBlLCBhY2Nlc3Nvck5hbWUpO1xuICB9IGVsc2UgaWYgKHZhbGlkTm9kZXNQYXRjaGVzLmluY2x1ZGVzKGFjY2Vzc29yTmFtZSkpIHtcbiAgICBhY2Nlc3NvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTm9kZS5wcm90b3R5cGUsIGFjY2Vzc29yTmFtZSk7XG4gIH1cbiAgaWYgKCFhY2Nlc3Nvcikge1xuICAgIGFjY2Vzc29yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihub2RlLCBhY2Nlc3Nvck5hbWUpO1xuICB9XG4gIGlmIChhY2Nlc3NvcikgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5vZGUsIFwiX19cIiArIGFjY2Vzc29yTmFtZSwgYWNjZXNzb3IpO1xufVxuZnVuY3Rpb24gaW50ZXJuYWxDYWxsKG5vZGUsIG1ldGhvZCkge1xuICBpZiAoXCJfX1wiICsgbWV0aG9kIGluIG5vZGUpIHtcbiAgICBjb25zdCB0b1JldHVybiA9IG5vZGVbXCJfX1wiICsgbWV0aG9kXTtcbiAgICBpZiAodHlwZW9mIHRvUmV0dXJuICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0b1JldHVybjtcbiAgICByZXR1cm4gdG9SZXR1cm4uYmluZChub2RlKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAodHlwZW9mIG5vZGVbbWV0aG9kXSAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbm9kZVttZXRob2RdO1xuICAgIHJldHVybiBub2RlW21ldGhvZF0uYmluZChub2RlKTtcbiAgfVxufVxudmFyIGNyZWF0ZVRpbWUgPSAoZm5OYW1lLCB0YWdOYW1lID0gXCJcIikgPT4ge1xuICB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHJldHVybjtcbiAgICB9O1xuICB9XG59O1xudmFyIHVuaXF1ZVRpbWUgPSAoa2V5LCBtZWFzdXJlVGV4dCkgPT4ge1xuICB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHJldHVybjtcbiAgICB9O1xuICB9XG59O1xudmFyIHJvb3RBcHBsaWVkU3R5bGVzID0gLyogQF9fUFVSRV9fICovbmV3IFdlYWtNYXAoKTtcbnZhciByZWdpc3RlclN0eWxlID0gKHNjb3BlSWQyLCBjc3NUZXh0LCBhbGxvd0NTKSA9PiB7XG4gIGxldCBzdHlsZSA9IHN0eWxlcy5nZXQoc2NvcGVJZDIpO1xuICBpZiAoc3VwcG9ydHNDb25zdHJ1Y3RhYmxlU3R5bGVzaGVldHMgJiYgYWxsb3dDUykge1xuICAgIHN0eWxlID0gc3R5bGUgfHwgbmV3IENTU1N0eWxlU2hlZXQoKTtcbiAgICBpZiAodHlwZW9mIHN0eWxlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBzdHlsZSA9IGNzc1RleHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLnJlcGxhY2VTeW5jKGNzc1RleHQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGNzc1RleHQ7XG4gIH1cbiAgc3R5bGVzLnNldChzY29wZUlkMiwgc3R5bGUpO1xufTtcbnZhciBhZGRTdHlsZSA9IChzdHlsZUNvbnRhaW5lck5vZGUsIGNtcE1ldGEsIG1vZGUpID0+IHtcbiAgdmFyIF9hO1xuICBjb25zdCBzY29wZUlkMiA9IGdldFNjb3BlSWQoY21wTWV0YSwgbW9kZSk7XG4gIGNvbnN0IHN0eWxlID0gc3R5bGVzLmdldChzY29wZUlkMik7XG4gIGlmICghd2luLmRvY3VtZW50KSB7XG4gICAgcmV0dXJuIHNjb3BlSWQyO1xuICB9XG4gIHN0eWxlQ29udGFpbmVyTm9kZSA9IHN0eWxlQ29udGFpbmVyTm9kZS5ub2RlVHlwZSA9PT0gMTEgLyogRG9jdW1lbnRGcmFnbWVudCAqLyA/IHN0eWxlQ29udGFpbmVyTm9kZSA6IHdpbi5kb2N1bWVudDtcbiAgaWYgKHN0eWxlKSB7XG4gICAgaWYgKHR5cGVvZiBzdHlsZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgc3R5bGVDb250YWluZXJOb2RlID0gc3R5bGVDb250YWluZXJOb2RlLmhlYWQgfHwgc3R5bGVDb250YWluZXJOb2RlO1xuICAgICAgbGV0IGFwcGxpZWRTdHlsZXMgPSByb290QXBwbGllZFN0eWxlcy5nZXQoc3R5bGVDb250YWluZXJOb2RlKTtcbiAgICAgIGxldCBzdHlsZUVsbTtcbiAgICAgIGlmICghYXBwbGllZFN0eWxlcykge1xuICAgICAgICByb290QXBwbGllZFN0eWxlcy5zZXQoc3R5bGVDb250YWluZXJOb2RlLCBhcHBsaWVkU3R5bGVzID0gLyogQF9fUFVSRV9fICovbmV3IFNldCgpKTtcbiAgICAgIH1cbiAgICAgIGlmICghYXBwbGllZFN0eWxlcy5oYXMoc2NvcGVJZDIpKSB7XG4gICAgICAgIGlmIChzdHlsZUNvbnRhaW5lck5vZGUuaG9zdCAmJiAoc3R5bGVFbG0gPSBzdHlsZUNvbnRhaW5lck5vZGUucXVlcnlTZWxlY3RvcihgWyR7SFlEUkFURURfU1RZTEVfSUR9PVwiJHtzY29wZUlkMn1cIl1gKSkpIHtcbiAgICAgICAgICBzdHlsZUVsbS5pbm5lckhUTUwgPSBzdHlsZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdHlsZUVsbSA9IHdpbi5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgICAgICAgc3R5bGVFbG0uaW5uZXJIVE1MID0gc3R5bGU7XG4gICAgICAgICAgY29uc3Qgbm9uY2UgPSAoX2EgPSBwbHQuJG5vbmNlJCkgIT0gbnVsbCA/IF9hIDogcXVlcnlOb25jZU1ldGFUYWdDb250ZW50KHdpbi5kb2N1bWVudCk7XG4gICAgICAgICAgaWYgKG5vbmNlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHN0eWxlRWxtLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCEoY21wTWV0YS4kZmxhZ3MkICYgMSAvKiBzaGFkb3dEb21FbmNhcHN1bGF0aW9uICovKSkge1xuICAgICAgICAgICAgaWYgKHN0eWxlQ29udGFpbmVyTm9kZS5ub2RlTmFtZSA9PT0gXCJIRUFEXCIpIHtcbiAgICAgICAgICAgICAgY29uc3QgcHJlY29ubmVjdExpbmtzID0gc3R5bGVDb250YWluZXJOb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaW5rW3JlbD1wcmVjb25uZWN0XVwiKTtcbiAgICAgICAgICAgICAgY29uc3QgcmVmZXJlbmNlTm9kZTIgPSBwcmVjb25uZWN0TGlua3MubGVuZ3RoID4gMCA/IHByZWNvbm5lY3RMaW5rc1twcmVjb25uZWN0TGlua3MubGVuZ3RoIC0gMV0ubmV4dFNpYmxpbmcgOiBzdHlsZUNvbnRhaW5lck5vZGUucXVlcnlTZWxlY3RvcihcInN0eWxlXCIpO1xuICAgICAgICAgICAgICBzdHlsZUNvbnRhaW5lck5vZGUuaW5zZXJ0QmVmb3JlKHN0eWxlRWxtLCAocmVmZXJlbmNlTm9kZTIgPT0gbnVsbCA/IHZvaWQgMCA6IHJlZmVyZW5jZU5vZGUyLnBhcmVudE5vZGUpID09PSBzdHlsZUNvbnRhaW5lck5vZGUgPyByZWZlcmVuY2VOb2RlMiA6IG51bGwpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChcImhvc3RcIiBpbiBzdHlsZUNvbnRhaW5lck5vZGUpIHtcbiAgICAgICAgICAgICAgaWYgKHN1cHBvcnRzQ29uc3RydWN0YWJsZVN0eWxlc2hlZXRzKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3R5bGVzaGVldCA9IG5ldyBDU1NTdHlsZVNoZWV0KCk7XG4gICAgICAgICAgICAgICAgc3R5bGVzaGVldC5yZXBsYWNlU3luYyhzdHlsZSk7XG4gICAgICAgICAgICAgICAgaWYgKHN1cHBvcnRzTXV0YWJsZUFkb3B0ZWRTdHlsZVNoZWV0cykge1xuICAgICAgICAgICAgICAgICAgc3R5bGVDb250YWluZXJOb2RlLmFkb3B0ZWRTdHlsZVNoZWV0cy51bnNoaWZ0KHN0eWxlc2hlZXQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBzdHlsZUNvbnRhaW5lck5vZGUuYWRvcHRlZFN0eWxlU2hlZXRzID0gW3N0eWxlc2hlZXQsIC4uLnN0eWxlQ29udGFpbmVyTm9kZS5hZG9wdGVkU3R5bGVTaGVldHNdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBleGlzdGluZ1N0eWxlQ29udGFpbmVyID0gc3R5bGVDb250YWluZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoXCJzdHlsZVwiKTtcbiAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmdTdHlsZUNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgZXhpc3RpbmdTdHlsZUNvbnRhaW5lci5pbm5lckhUTUwgPSBzdHlsZSArIGV4aXN0aW5nU3R5bGVDb250YWluZXIuaW5uZXJIVE1MO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBzdHlsZUNvbnRhaW5lck5vZGUucHJlcGVuZChzdHlsZUVsbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzdHlsZUNvbnRhaW5lck5vZGUuYXBwZW5kKHN0eWxlRWxtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGNtcE1ldGEuJGZsYWdzJCAmIDEgLyogc2hhZG93RG9tRW5jYXBzdWxhdGlvbiAqLykge1xuICAgICAgICAgICAgc3R5bGVDb250YWluZXJOb2RlLmluc2VydEJlZm9yZShzdHlsZUVsbSwgbnVsbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjbXBNZXRhLiRmbGFncyQgJiA0IC8qIGhhc1Nsb3RSZWxvY2F0aW9uICovKSB7XG4gICAgICAgICAgc3R5bGVFbG0uaW5uZXJIVE1MICs9IFNMT1RfRkJfQ1NTO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhcHBsaWVkU3R5bGVzKSB7XG4gICAgICAgICAgYXBwbGllZFN0eWxlcy5hZGQoc2NvcGVJZDIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghc3R5bGVDb250YWluZXJOb2RlLmFkb3B0ZWRTdHlsZVNoZWV0cy5pbmNsdWRlcyhzdHlsZSkpIHtcbiAgICAgIGlmIChzdXBwb3J0c011dGFibGVBZG9wdGVkU3R5bGVTaGVldHMpIHtcbiAgICAgICAgc3R5bGVDb250YWluZXJOb2RlLmFkb3B0ZWRTdHlsZVNoZWV0cy5wdXNoKHN0eWxlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0eWxlQ29udGFpbmVyTm9kZS5hZG9wdGVkU3R5bGVTaGVldHMgPSBbLi4uc3R5bGVDb250YWluZXJOb2RlLmFkb3B0ZWRTdHlsZVNoZWV0cywgc3R5bGVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gc2NvcGVJZDI7XG59O1xudmFyIGF0dGFjaFN0eWxlcyA9IGhvc3RSZWYgPT4ge1xuICBjb25zdCBjbXBNZXRhID0gaG9zdFJlZi4kY21wTWV0YSQ7XG4gIGNvbnN0IGVsbSA9IGhvc3RSZWYuJGhvc3RFbGVtZW50JDtcbiAgY29uc3QgZmxhZ3MgPSBjbXBNZXRhLiRmbGFncyQ7XG4gIGNvbnN0IGVuZEF0dGFjaFN0eWxlcyA9IGNyZWF0ZVRpbWUoXCJhdHRhY2hTdHlsZXNcIiwgY21wTWV0YS4kdGFnTmFtZSQpO1xuICBjb25zdCBzY29wZUlkMiA9IGFkZFN0eWxlKGVsbS5zaGFkb3dSb290ID8gZWxtLnNoYWRvd1Jvb3QgOiBlbG0uZ2V0Um9vdE5vZGUoKSwgY21wTWV0YSwgaG9zdFJlZi4kbW9kZU5hbWUkKTtcbiAgaWYgKGZsYWdzICYgMTAgLyogbmVlZHNTY29wZWRFbmNhcHN1bGF0aW9uICovKSB7XG4gICAgZWxtW1wicy1zY1wiXSA9IHNjb3BlSWQyO1xuICAgIGVsbS5jbGFzc0xpc3QuYWRkKHNjb3BlSWQyICsgXCItaFwiKTtcbiAgfVxuICBlbmRBdHRhY2hTdHlsZXMoKTtcbn07XG52YXIgZ2V0U2NvcGVJZCA9IChjbXAsIG1vZGUpID0+IFwic2MtXCIgKyAobW9kZSAmJiBjbXAuJGZsYWdzJCAmIDMyIC8qIGhhc01vZGUgKi8gPyBjbXAuJHRhZ05hbWUkICsgXCItXCIgKyBtb2RlIDogY21wLiR0YWdOYW1lJCk7XG52YXIgY29udmVydFNjb3BlZFRvU2hhZG93ID0gY3NzID0+IGNzcy5yZXBsYWNlKC9cXC9cXCohQChbXlxcL10rKVxcKlxcL1teXFx7XStcXHsvZywgXCIkMXtcIik7XG52YXIgaHlkcmF0ZVNjb3BlZFRvU2hhZG93ID0gKCkgPT4ge1xuICBpZiAoIXdpbi5kb2N1bWVudCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBzdHlsZXMyID0gd2luLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFske0hZRFJBVEVEX1NUWUxFX0lEfV1gKTtcbiAgbGV0IGkyID0gMDtcbiAgZm9yICg7IGkyIDwgc3R5bGVzMi5sZW5ndGg7IGkyKyspIHtcbiAgICByZWdpc3RlclN0eWxlKHN0eWxlczJbaTJdLmdldEF0dHJpYnV0ZShIWURSQVRFRF9TVFlMRV9JRCksIGNvbnZlcnRTY29wZWRUb1NoYWRvdyhzdHlsZXMyW2kyXS5pbm5lckhUTUwpLCB0cnVlKTtcbiAgfVxufTtcbnZhciBoID0gKG5vZGVOYW1lLCB2bm9kZURhdGEsIC4uLmNoaWxkcmVuKSA9PiB7XG4gIGxldCBjaGlsZCA9IG51bGw7XG4gIGxldCBrZXkgPSBudWxsO1xuICBsZXQgc2xvdE5hbWUgPSBudWxsO1xuICBsZXQgc2ltcGxlID0gZmFsc2U7XG4gIGxldCBsYXN0U2ltcGxlID0gZmFsc2U7XG4gIGNvbnN0IHZOb2RlQ2hpbGRyZW4gPSBbXTtcbiAgY29uc3Qgd2FsayA9IGMgPT4ge1xuICAgIGZvciAobGV0IGkyID0gMDsgaTIgPCBjLmxlbmd0aDsgaTIrKykge1xuICAgICAgY2hpbGQgPSBjW2kyXTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkKSkge1xuICAgICAgICB3YWxrKGNoaWxkKTtcbiAgICAgIH0gZWxzZSBpZiAoY2hpbGQgIT0gbnVsbCAmJiB0eXBlb2YgY2hpbGQgIT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgIGlmIChzaW1wbGUgPSB0eXBlb2Ygbm9kZU5hbWUgIT09IFwiZnVuY3Rpb25cIiAmJiAhaXNDb21wbGV4VHlwZShjaGlsZCkpIHtcbiAgICAgICAgICBjaGlsZCA9IFN0cmluZyhjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNpbXBsZSAmJiBsYXN0U2ltcGxlKSB7XG4gICAgICAgICAgdk5vZGVDaGlsZHJlblt2Tm9kZUNoaWxkcmVuLmxlbmd0aCAtIDFdLiR0ZXh0JCArPSBjaGlsZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2Tm9kZUNoaWxkcmVuLnB1c2goc2ltcGxlID8gbmV3Vk5vZGUobnVsbCwgY2hpbGQpIDogY2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGxhc3RTaW1wbGUgPSBzaW1wbGU7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICB3YWxrKGNoaWxkcmVuKTtcbiAgaWYgKHZub2RlRGF0YSkge1xuICAgIGlmICh2bm9kZURhdGEua2V5KSB7XG4gICAgICBrZXkgPSB2bm9kZURhdGEua2V5O1xuICAgIH1cbiAgICBpZiAodm5vZGVEYXRhLm5hbWUpIHtcbiAgICAgIHNsb3ROYW1lID0gdm5vZGVEYXRhLm5hbWU7XG4gICAgfVxuICAgIHtcbiAgICAgIGNvbnN0IGNsYXNzRGF0YSA9IHZub2RlRGF0YS5jbGFzc05hbWUgfHwgdm5vZGVEYXRhLmNsYXNzO1xuICAgICAgaWYgKGNsYXNzRGF0YSkge1xuICAgICAgICB2bm9kZURhdGEuY2xhc3MgPSB0eXBlb2YgY2xhc3NEYXRhICE9PSBcIm9iamVjdFwiID8gY2xhc3NEYXRhIDogT2JqZWN0LmtleXMoY2xhc3NEYXRhKS5maWx0ZXIoayA9PiBjbGFzc0RhdGFba10pLmpvaW4oXCIgXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAodHlwZW9mIG5vZGVOYW1lID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4gbm9kZU5hbWUodm5vZGVEYXRhID09PSBudWxsID8ge30gOiB2bm9kZURhdGEsIHZOb2RlQ2hpbGRyZW4sIHZkb21GblV0aWxzKTtcbiAgfVxuICBjb25zdCB2bm9kZSA9IG5ld1ZOb2RlKG5vZGVOYW1lLCBudWxsKTtcbiAgdm5vZGUuJGF0dHJzJCA9IHZub2RlRGF0YTtcbiAgaWYgKHZOb2RlQ2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgIHZub2RlLiRjaGlsZHJlbiQgPSB2Tm9kZUNoaWxkcmVuO1xuICB9XG4gIHtcbiAgICB2bm9kZS4ka2V5JCA9IGtleTtcbiAgfVxuICB7XG4gICAgdm5vZGUuJG5hbWUkID0gc2xvdE5hbWU7XG4gIH1cbiAgcmV0dXJuIHZub2RlO1xufTtcbnZhciBuZXdWTm9kZSA9ICh0YWcsIHRleHQpID0+IHtcbiAgY29uc3Qgdm5vZGUgPSB7XG4gICAgJGZsYWdzJDogMCxcbiAgICAkdGFnJDogdGFnLFxuICAgICR0ZXh0JDogdGV4dCxcbiAgICAkZWxtJDogbnVsbCxcbiAgICAkY2hpbGRyZW4kOiBudWxsXG4gIH07XG4gIHtcbiAgICB2bm9kZS4kYXR0cnMkID0gbnVsbDtcbiAgfVxuICB7XG4gICAgdm5vZGUuJGtleSQgPSBudWxsO1xuICB9XG4gIHtcbiAgICB2bm9kZS4kbmFtZSQgPSBudWxsO1xuICB9XG4gIHJldHVybiB2bm9kZTtcbn07XG52YXIgSG9zdCA9IHt9O1xudmFyIGlzSG9zdCA9IG5vZGUgPT4gbm9kZSAmJiBub2RlLiR0YWckID09PSBIb3N0O1xudmFyIHZkb21GblV0aWxzID0ge1xuICBmb3JFYWNoOiAoY2hpbGRyZW4sIGNiKSA9PiBjaGlsZHJlbi5tYXAoY29udmVydFRvUHVibGljKS5mb3JFYWNoKGNiKSxcbiAgbWFwOiAoY2hpbGRyZW4sIGNiKSA9PiBjaGlsZHJlbi5tYXAoY29udmVydFRvUHVibGljKS5tYXAoY2IpLm1hcChjb252ZXJ0VG9Qcml2YXRlKVxufTtcbnZhciBjb252ZXJ0VG9QdWJsaWMgPSBub2RlID0+ICh7XG4gIHZhdHRyczogbm9kZS4kYXR0cnMkLFxuICB2Y2hpbGRyZW46IG5vZGUuJGNoaWxkcmVuJCxcbiAgdmtleTogbm9kZS4ka2V5JCxcbiAgdm5hbWU6IG5vZGUuJG5hbWUkLFxuICB2dGFnOiBub2RlLiR0YWckLFxuICB2dGV4dDogbm9kZS4kdGV4dCRcbn0pO1xudmFyIGNvbnZlcnRUb1ByaXZhdGUgPSBub2RlID0+IHtcbiAgaWYgKHR5cGVvZiBub2RlLnZ0YWcgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGNvbnN0IHZub2RlRGF0YSA9IHtcbiAgICAgIC4uLm5vZGUudmF0dHJzXG4gICAgfTtcbiAgICBpZiAobm9kZS52a2V5KSB7XG4gICAgICB2bm9kZURhdGEua2V5ID0gbm9kZS52a2V5O1xuICAgIH1cbiAgICBpZiAobm9kZS52bmFtZSkge1xuICAgICAgdm5vZGVEYXRhLm5hbWUgPSBub2RlLnZuYW1lO1xuICAgIH1cbiAgICByZXR1cm4gaChub2RlLnZ0YWcsIHZub2RlRGF0YSwgLi4uKG5vZGUudmNoaWxkcmVuIHx8IFtdKSk7XG4gIH1cbiAgY29uc3Qgdm5vZGUgPSBuZXdWTm9kZShub2RlLnZ0YWcsIG5vZGUudnRleHQpO1xuICB2bm9kZS4kYXR0cnMkID0gbm9kZS52YXR0cnM7XG4gIHZub2RlLiRjaGlsZHJlbiQgPSBub2RlLnZjaGlsZHJlbjtcbiAgdm5vZGUuJGtleSQgPSBub2RlLnZrZXk7XG4gIHZub2RlLiRuYW1lJCA9IG5vZGUudm5hbWU7XG4gIHJldHVybiB2bm9kZTtcbn07XG5cbi8vIHNyYy9ydW50aW1lL2NsaWVudC1oeWRyYXRlLnRzXG52YXIgaW5pdGlhbGl6ZUNsaWVudEh5ZHJhdGUgPSAoaG9zdEVsbSwgdGFnTmFtZSwgaG9zdElkLCBob3N0UmVmKSA9PiB7XG4gIHZhciBfYSwgX2IsIF9jO1xuICBjb25zdCBlbmRIeWRyYXRlID0gY3JlYXRlVGltZShcImh5ZHJhdGVDbGllbnRcIiwgdGFnTmFtZSk7XG4gIGNvbnN0IHNoYWRvd1Jvb3QgPSBob3N0RWxtLnNoYWRvd1Jvb3Q7XG4gIGNvbnN0IGNoaWxkUmVuZGVyTm9kZXMgPSBbXTtcbiAgY29uc3Qgc2xvdE5vZGVzID0gW107XG4gIGNvbnN0IHNsb3R0ZWROb2RlcyA9IFtdO1xuICBjb25zdCBzaGFkb3dSb290Tm9kZXMgPSBzaGFkb3dSb290ID8gW10gOiBudWxsO1xuICBjb25zdCB2bm9kZSA9IG5ld1ZOb2RlKHRhZ05hbWUsIG51bGwpO1xuICB2bm9kZS4kZWxtJCA9IGhvc3RFbG07XG4gIGNvbnN0IG1lbWJlcnMgPSBPYmplY3QuZW50cmllcygoKF9hID0gaG9zdFJlZi4kY21wTWV0YSQpID09IG51bGwgPyB2b2lkIDAgOiBfYS4kbWVtYmVycyQpIHx8IHt9KTtcbiAgbWVtYmVycy5mb3JFYWNoKChbbWVtYmVyTmFtZSwgW21lbWJlckZsYWdzLCBtZXRhQXR0cmlidXRlTmFtZV1dKSA9PiB7XG4gICAgdmFyIF9iMjtcbiAgICBpZiAoIShtZW1iZXJGbGFncyAmIDMxIC8qIFByb3AgKi8pKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBtZXRhQXR0cmlidXRlTmFtZSB8fCBtZW1iZXJOYW1lO1xuICAgIGNvbnN0IGF0dHJWYWwgPSBob3N0RWxtLmdldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKTtcbiAgICBpZiAoYXR0clZhbCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgYXR0clByb3BWYWwgPSBwYXJzZVByb3BlcnR5VmFsdWUoYXR0clZhbCwgbWVtYmVyRmxhZ3MpO1xuICAgICAgKF9iMiA9IGhvc3RSZWYgPT0gbnVsbCA/IHZvaWQgMCA6IGhvc3RSZWYuJGluc3RhbmNlVmFsdWVzJCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9iMi5zZXQobWVtYmVyTmFtZSwgYXR0clByb3BWYWwpO1xuICAgIH1cbiAgfSk7XG4gIGxldCBzY29wZUlkMjtcbiAge1xuICAgIGNvbnN0IGNtcE1ldGEgPSBob3N0UmVmLiRjbXBNZXRhJDtcbiAgICBpZiAoY21wTWV0YSAmJiBjbXBNZXRhLiRmbGFncyQgJiAxMCAvKiBuZWVkc1Njb3BlZEVuY2Fwc3VsYXRpb24gKi8gJiYgaG9zdEVsbVtcInMtc2NcIl0pIHtcbiAgICAgIHNjb3BlSWQyID0gaG9zdEVsbVtcInMtc2NcIl07XG4gICAgICBob3N0RWxtLmNsYXNzTGlzdC5hZGQoc2NvcGVJZDIgKyBcIi1oXCIpO1xuICAgIH0gZWxzZSBpZiAoaG9zdEVsbVtcInMtc2NcIl0pIHtcbiAgICAgIGRlbGV0ZSBob3N0RWxtW1wicy1zY1wiXTtcbiAgICB9XG4gIH1cbiAgaWYgKHdpbi5kb2N1bWVudCAmJiAoIXBsdC4kb3JnTG9jTm9kZXMkIHx8ICFwbHQuJG9yZ0xvY05vZGVzJC5zaXplKSkge1xuICAgIGluaXRpYWxpemVEb2N1bWVudEh5ZHJhdGUod2luLmRvY3VtZW50LmJvZHksIHBsdC4kb3JnTG9jTm9kZXMkID0gLyogQF9fUFVSRV9fICovbmV3IE1hcCgpKTtcbiAgfVxuICBob3N0RWxtW0hZRFJBVEVfSURdID0gaG9zdElkO1xuICBob3N0RWxtLnJlbW92ZUF0dHJpYnV0ZShIWURSQVRFX0lEKTtcbiAgaG9zdFJlZi4kdm5vZGUkID0gY2xpZW50SHlkcmF0ZSh2bm9kZSwgY2hpbGRSZW5kZXJOb2Rlcywgc2xvdE5vZGVzLCBzaGFkb3dSb290Tm9kZXMsIGhvc3RFbG0sIGhvc3RFbG0sIGhvc3RJZCwgc2xvdHRlZE5vZGVzKTtcbiAgbGV0IGNySW5kZXggPSAwO1xuICBjb25zdCBjckxlbmd0aCA9IGNoaWxkUmVuZGVyTm9kZXMubGVuZ3RoO1xuICBsZXQgY2hpbGRSZW5kZXJOb2RlO1xuICBmb3IgKGNySW5kZXg7IGNySW5kZXggPCBjckxlbmd0aDsgY3JJbmRleCsrKSB7XG4gICAgY2hpbGRSZW5kZXJOb2RlID0gY2hpbGRSZW5kZXJOb2Rlc1tjckluZGV4XTtcbiAgICBjb25zdCBvcmdMb2NhdGlvbklkID0gY2hpbGRSZW5kZXJOb2RlLiRob3N0SWQkICsgXCIuXCIgKyBjaGlsZFJlbmRlck5vZGUuJG5vZGVJZCQ7XG4gICAgY29uc3Qgb3JnTG9jYXRpb25Ob2RlID0gcGx0LiRvcmdMb2NOb2RlcyQuZ2V0KG9yZ0xvY2F0aW9uSWQpO1xuICAgIGNvbnN0IG5vZGUgPSBjaGlsZFJlbmRlck5vZGUuJGVsbSQ7XG4gICAgaWYgKCFzaGFkb3dSb290KSB7XG4gICAgICBub2RlW1wicy1oblwiXSA9IHRhZ05hbWUudG9VcHBlckNhc2UoKTtcbiAgICAgIGlmIChjaGlsZFJlbmRlck5vZGUuJHRhZyQgPT09IFwic2xvdFwiKSB7XG4gICAgICAgIG5vZGVbXCJzLWNyXCJdID0gaG9zdEVsbVtcInMtY3JcIl07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICgoKF9iID0gY2hpbGRSZW5kZXJOb2RlLiR0YWckKSA9PSBudWxsID8gdm9pZCAwIDogX2IudG9TdHJpbmcoKS5pbmNsdWRlcyhcIi1cIikpICYmIGNoaWxkUmVuZGVyTm9kZS4kdGFnJCAhPT0gXCJzbG90LWZiXCIgJiYgIWNoaWxkUmVuZGVyTm9kZS4kZWxtJC5zaGFkb3dSb290KSB7XG4gICAgICBjb25zdCBjbXBNZXRhID0gZ2V0SG9zdFJlZihjaGlsZFJlbmRlck5vZGUuJGVsbSQpO1xuICAgICAgaWYgKGNtcE1ldGEpIHtcbiAgICAgICAgY29uc3Qgc2NvcGVJZDMgPSBnZXRTY29wZUlkKGNtcE1ldGEuJGNtcE1ldGEkLCBjaGlsZFJlbmRlck5vZGUuJGVsbSQuZ2V0QXR0cmlidXRlKFwicy1tb2RlXCIpKTtcbiAgICAgICAgY29uc3Qgc3R5bGVTaGVldCA9IHdpbi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzdHlsZVtzdHktaWQ9XCIke3Njb3BlSWQzfVwiXWApO1xuICAgICAgICBpZiAoc3R5bGVTaGVldCkge1xuICAgICAgICAgIGhvc3RFbG0uc2hhZG93Um9vdC5hcHBlbmQoc3R5bGVTaGVldC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjaGlsZFJlbmRlck5vZGUuJHRhZyQgPT09IFwic2xvdFwiKSB7XG4gICAgICBjaGlsZFJlbmRlck5vZGUuJG5hbWUkID0gY2hpbGRSZW5kZXJOb2RlLiRlbG0kW1wicy1zblwiXSB8fCBjaGlsZFJlbmRlck5vZGUuJGVsbSRbXCJuYW1lXCJdIHx8IG51bGw7XG4gICAgICBpZiAoY2hpbGRSZW5kZXJOb2RlLiRjaGlsZHJlbiQpIHtcbiAgICAgICAgY2hpbGRSZW5kZXJOb2RlLiRmbGFncyQgfD0gMiAvKiBpc1Nsb3RGYWxsYmFjayAqLztcbiAgICAgICAgaWYgKCFjaGlsZFJlbmRlck5vZGUuJGVsbSQuY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICBjaGlsZFJlbmRlck5vZGUuJGNoaWxkcmVuJC5mb3JFYWNoKGMgPT4ge1xuICAgICAgICAgICAgY2hpbGRSZW5kZXJOb2RlLiRlbG0kLmFwcGVuZENoaWxkKGMuJGVsbSQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZFJlbmRlck5vZGUuJGZsYWdzJCB8PSAxIC8qIGlzU2xvdFJlZmVyZW5jZSAqLztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9yZ0xvY2F0aW9uTm9kZSAmJiBvcmdMb2NhdGlvbk5vZGUuaXNDb25uZWN0ZWQpIHtcbiAgICAgIGlmIChvcmdMb2NhdGlvbk5vZGUucGFyZW50RWxlbWVudC5zaGFkb3dSb290ICYmIG9yZ0xvY2F0aW9uTm9kZVtcInMtZW5cIl0gPT09IFwiXCIpIHtcbiAgICAgICAgb3JnTG9jYXRpb25Ob2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5vZGUsIG9yZ0xvY2F0aW9uTm9kZS5uZXh0U2libGluZyk7XG4gICAgICB9XG4gICAgICBvcmdMb2NhdGlvbk5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvcmdMb2NhdGlvbk5vZGUpO1xuICAgICAgaWYgKCFzaGFkb3dSb290KSB7XG4gICAgICAgIG5vZGVbXCJzLW9vXCJdID0gcGFyc2VJbnQoY2hpbGRSZW5kZXJOb2RlLiRub2RlSWQkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9yZ0xvY2F0aW9uTm9kZSAmJiAhb3JnTG9jYXRpb25Ob2RlW1wicy1pZFwiXSkge1xuICAgICAgcGx0LiRvcmdMb2NOb2RlcyQuZGVsZXRlKG9yZ0xvY2F0aW9uSWQpO1xuICAgIH1cbiAgfVxuICBjb25zdCBob3N0cyA9IFtdO1xuICBjb25zdCBzbkxlbiA9IHNsb3R0ZWROb2Rlcy5sZW5ndGg7XG4gIGxldCBzbkluZGV4ID0gMDtcbiAgbGV0IHNsb3RHcm91cDtcbiAgbGV0IHNuR3JvdXBJZHg7XG4gIGxldCBzbkdyb3VwTGVuO1xuICBsZXQgc2xvdHRlZEl0ZW07XG4gIGZvciAoc25JbmRleDsgc25JbmRleCA8IHNuTGVuOyBzbkluZGV4KyspIHtcbiAgICBzbG90R3JvdXAgPSBzbG90dGVkTm9kZXNbc25JbmRleF07XG4gICAgaWYgKCFzbG90R3JvdXAgfHwgIXNsb3RHcm91cC5sZW5ndGgpIGNvbnRpbnVlO1xuICAgIHNuR3JvdXBMZW4gPSBzbG90R3JvdXAubGVuZ3RoO1xuICAgIHNuR3JvdXBJZHggPSAwO1xuICAgIGZvciAoc25Hcm91cElkeDsgc25Hcm91cElkeCA8IHNuR3JvdXBMZW47IHNuR3JvdXBJZHgrKykge1xuICAgICAgc2xvdHRlZEl0ZW0gPSBzbG90R3JvdXBbc25Hcm91cElkeF07XG4gICAgICBpZiAoIWhvc3RzW3Nsb3R0ZWRJdGVtLmhvc3RJZF0pIHtcbiAgICAgICAgaG9zdHNbc2xvdHRlZEl0ZW0uaG9zdElkXSA9IHBsdC4kb3JnTG9jTm9kZXMkLmdldChzbG90dGVkSXRlbS5ob3N0SWQpO1xuICAgICAgfVxuICAgICAgaWYgKCFob3N0c1tzbG90dGVkSXRlbS5ob3N0SWRdKSBjb250aW51ZTtcbiAgICAgIGNvbnN0IGhvc3RFbGUgPSBob3N0c1tzbG90dGVkSXRlbS5ob3N0SWRdO1xuICAgICAgaWYgKGhvc3RFbGUuc2hhZG93Um9vdCAmJiBzbG90dGVkSXRlbS5ub2RlLnBhcmVudEVsZW1lbnQgIT09IGhvc3RFbGUpIHtcbiAgICAgICAgaG9zdEVsZS5hcHBlbmRDaGlsZChzbG90dGVkSXRlbS5ub2RlKTtcbiAgICAgIH1cbiAgICAgIGlmICghaG9zdEVsZS5zaGFkb3dSb290IHx8ICFzaGFkb3dSb290KSB7XG4gICAgICAgIGlmICghc2xvdHRlZEl0ZW0uc2xvdFtcInMtY3JcIl0pIHtcbiAgICAgICAgICBzbG90dGVkSXRlbS5zbG90W1wicy1jclwiXSA9IGhvc3RFbGVbXCJzLWNyXCJdO1xuICAgICAgICAgIGlmICghc2xvdHRlZEl0ZW0uc2xvdFtcInMtY3JcIl0gJiYgaG9zdEVsZS5zaGFkb3dSb290KSB7XG4gICAgICAgICAgICBzbG90dGVkSXRlbS5zbG90W1wicy1jclwiXSA9IGhvc3RFbGU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNsb3R0ZWRJdGVtLnNsb3RbXCJzLWNyXCJdID0gKGhvc3RFbGUuX19jaGlsZE5vZGVzIHx8IGhvc3RFbGUuY2hpbGROb2RlcylbMF07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFkZFNsb3RSZWxvY2F0ZU5vZGUoc2xvdHRlZEl0ZW0ubm9kZSwgc2xvdHRlZEl0ZW0uc2xvdCwgZmFsc2UsIHNsb3R0ZWRJdGVtLm5vZGVbXCJzLW9vXCJdKTtcbiAgICAgICAgaWYgKCgoX2MgPSBzbG90dGVkSXRlbS5ub2RlLnBhcmVudEVsZW1lbnQpID09IG51bGwgPyB2b2lkIDAgOiBfYy5zaGFkb3dSb290KSAmJiBzbG90dGVkSXRlbS5ub2RlW1wiZ2V0QXR0cmlidXRlXCJdICYmIHNsb3R0ZWRJdGVtLm5vZGUuZ2V0QXR0cmlidXRlKFwic2xvdFwiKSkge1xuICAgICAgICAgIHNsb3R0ZWRJdGVtLm5vZGUucmVtb3ZlQXR0cmlidXRlKFwic2xvdFwiKTtcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgcGF0Y2hTbG90dGVkTm9kZShzbG90dGVkSXRlbS5ub2RlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoc2NvcGVJZDIgJiYgc2xvdE5vZGVzLmxlbmd0aCkge1xuICAgIHNsb3ROb2Rlcy5mb3JFYWNoKHNsb3QgPT4ge1xuICAgICAgc2xvdC4kZWxtJC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoc2NvcGVJZDIgKyBcIi1zXCIpO1xuICAgIH0pO1xuICB9XG4gIGlmIChzaGFkb3dSb290KSB7XG4gICAgbGV0IHJuSWRleCA9IDA7XG4gICAgY29uc3Qgcm5MZW4gPSBzaGFkb3dSb290Tm9kZXMubGVuZ3RoO1xuICAgIGlmIChybkxlbikge1xuICAgICAgZm9yIChybklkZXg7IHJuSWRleCA8IHJuTGVuOyBybklkZXgrKykge1xuICAgICAgICBjb25zdCBub2RlID0gc2hhZG93Um9vdE5vZGVzW3JuSWRleF07XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgc2hhZG93Um9vdC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQXJyYXkuZnJvbShob3N0RWxtLmNoaWxkTm9kZXMpLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2Ygbm9kZVtcInMtZW5cIl0gIT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIG5vZGVbXCJzLXNuXCJdICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEgLyogRWxlbWVudE5vZGUgKi8gJiYgbm9kZS5zbG90ICYmIG5vZGUuaGlkZGVuKSB7XG4gICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShcImhpZGRlblwiKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IDggLyogQ29tbWVudE5vZGUgKi8gJiYgIW5vZGUubm9kZVZhbHVlIHx8IG5vZGUubm9kZVR5cGUgPT09IDMgLyogVGV4dE5vZGUgKi8gJiYgIW5vZGUud2hvbGVUZXh0LnRyaW0oKSkge1xuICAgICAgICAgICAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGhvc3RSZWYuJGhvc3RFbGVtZW50JCA9IGhvc3RFbG07XG4gIGVuZEh5ZHJhdGUoKTtcbn07XG52YXIgY2xpZW50SHlkcmF0ZSA9IChwYXJlbnRWTm9kZSwgY2hpbGRSZW5kZXJOb2Rlcywgc2xvdE5vZGVzLCBzaGFkb3dSb290Tm9kZXMsIGhvc3RFbG0sIG5vZGUsIGhvc3RJZCwgc2xvdHRlZE5vZGVzID0gW10pID0+IHtcbiAgbGV0IGNoaWxkTm9kZVR5cGU7XG4gIGxldCBjaGlsZElkU3BsdDtcbiAgbGV0IGNoaWxkVk5vZGU7XG4gIGxldCBpMjtcbiAgY29uc3Qgc2NvcGVJZDIgPSBob3N0RWxtW1wicy1zY1wiXTtcbiAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEgLyogRWxlbWVudE5vZGUgKi8pIHtcbiAgICBjaGlsZE5vZGVUeXBlID0gbm9kZS5nZXRBdHRyaWJ1dGUoSFlEUkFURV9DSElMRF9JRCk7XG4gICAgaWYgKGNoaWxkTm9kZVR5cGUpIHtcbiAgICAgIGNoaWxkSWRTcGx0ID0gY2hpbGROb2RlVHlwZS5zcGxpdChcIi5cIik7XG4gICAgICBpZiAoY2hpbGRJZFNwbHRbMF0gPT09IGhvc3RJZCB8fCBjaGlsZElkU3BsdFswXSA9PT0gXCIwXCIpIHtcbiAgICAgICAgY2hpbGRWTm9kZSA9IGNyZWF0ZVNpbXBsZVZOb2RlKHtcbiAgICAgICAgICAkZmxhZ3MkOiAwLFxuICAgICAgICAgICRob3N0SWQkOiBjaGlsZElkU3BsdFswXSxcbiAgICAgICAgICAkbm9kZUlkJDogY2hpbGRJZFNwbHRbMV0sXG4gICAgICAgICAgJGRlcHRoJDogY2hpbGRJZFNwbHRbMl0sXG4gICAgICAgICAgJGluZGV4JDogY2hpbGRJZFNwbHRbM10sXG4gICAgICAgICAgJHRhZyQ6IG5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICRlbG0kOiBub2RlLFxuICAgICAgICAgIC8vIElmIHdlIGRvbid0IGFkZCB0aGUgaW5pdGlhbCBjbGFzc2VzIHRvIHRoZSBWTm9kZSwgdGhlIGZpcnN0IGB2ZG9tLXJlbmRlci50c2AgcGF0Y2hcbiAgICAgICAgICAvLyB3b24ndCB0cnkgdG8gcmVjb25jaWxlIHRoZW0uIENsYXNzZXMgc2V0IG9uIHRoZSBub2RlIHdpbGwgYmUgYmxvd24gYXdheS5cbiAgICAgICAgICAkYXR0cnMkOiB7XG4gICAgICAgICAgICBjbGFzczogbm9kZS5jbGFzc05hbWUgfHwgXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNoaWxkUmVuZGVyTm9kZXMucHVzaChjaGlsZFZOb2RlKTtcbiAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoSFlEUkFURV9DSElMRF9JRCk7XG4gICAgICAgIGlmICghcGFyZW50Vk5vZGUuJGNoaWxkcmVuJCkge1xuICAgICAgICAgIHBhcmVudFZOb2RlLiRjaGlsZHJlbiQgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2NvcGVJZDIgJiYgY2hpbGRJZFNwbHRbMF0gPT09IGhvc3RJZCkge1xuICAgICAgICAgIG5vZGVbXCJzLXNpXCJdID0gc2NvcGVJZDI7XG4gICAgICAgICAgY2hpbGRWTm9kZS4kYXR0cnMkLmNsYXNzICs9IFwiIFwiICsgc2NvcGVJZDI7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2xvdE5hbWUgPSBjaGlsZFZOb2RlLiRlbG0kLmdldEF0dHJpYnV0ZShcInMtc25cIik7XG4gICAgICAgIGlmICh0eXBlb2Ygc2xvdE5hbWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICBpZiAoY2hpbGRWTm9kZS4kdGFnJCA9PT0gXCJzbG90LWZiXCIpIHtcbiAgICAgICAgICAgIGFkZFNsb3Qoc2xvdE5hbWUsIGNoaWxkSWRTcGx0WzJdLCBjaGlsZFZOb2RlLCBub2RlLCBwYXJlbnRWTm9kZSwgY2hpbGRSZW5kZXJOb2Rlcywgc2xvdE5vZGVzLCBzaGFkb3dSb290Tm9kZXMsIHNsb3R0ZWROb2Rlcyk7XG4gICAgICAgICAgICBpZiAoc2NvcGVJZDIpIHtcbiAgICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKHNjb3BlSWQyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY2hpbGRWTm9kZS4kZWxtJFtcInMtc25cIl0gPSBzbG90TmFtZTtcbiAgICAgICAgICBjaGlsZFZOb2RlLiRlbG0kLnJlbW92ZUF0dHJpYnV0ZShcInMtc25cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoaWxkVk5vZGUuJGluZGV4JCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgcGFyZW50Vk5vZGUuJGNoaWxkcmVuJFtjaGlsZFZOb2RlLiRpbmRleCRdID0gY2hpbGRWTm9kZTtcbiAgICAgICAgfVxuICAgICAgICBwYXJlbnRWTm9kZSA9IGNoaWxkVk5vZGU7XG4gICAgICAgIGlmIChzaGFkb3dSb290Tm9kZXMgJiYgY2hpbGRWTm9kZS4kZGVwdGgkID09PSBcIjBcIikge1xuICAgICAgICAgIHNoYWRvd1Jvb3ROb2Rlc1tjaGlsZFZOb2RlLiRpbmRleCRdID0gY2hpbGRWTm9kZS4kZWxtJDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAobm9kZS5zaGFkb3dSb290KSB7XG4gICAgICBmb3IgKGkyID0gbm9kZS5zaGFkb3dSb290LmNoaWxkTm9kZXMubGVuZ3RoIC0gMTsgaTIgPj0gMDsgaTItLSkge1xuICAgICAgICBjbGllbnRIeWRyYXRlKHBhcmVudFZOb2RlLCBjaGlsZFJlbmRlck5vZGVzLCBzbG90Tm9kZXMsIHNoYWRvd1Jvb3ROb2RlcywgaG9zdEVsbSwgbm9kZS5zaGFkb3dSb290LmNoaWxkTm9kZXNbaTJdLCBob3N0SWQsIHNsb3R0ZWROb2Rlcyk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG5vblNoYWRvd05vZGVzID0gbm9kZS5fX2NoaWxkTm9kZXMgfHwgbm9kZS5jaGlsZE5vZGVzO1xuICAgIGZvciAoaTIgPSBub25TaGFkb3dOb2Rlcy5sZW5ndGggLSAxOyBpMiA+PSAwOyBpMi0tKSB7XG4gICAgICBjbGllbnRIeWRyYXRlKHBhcmVudFZOb2RlLCBjaGlsZFJlbmRlck5vZGVzLCBzbG90Tm9kZXMsIHNoYWRvd1Jvb3ROb2RlcywgaG9zdEVsbSwgbm9uU2hhZG93Tm9kZXNbaTJdLCBob3N0SWQsIHNsb3R0ZWROb2Rlcyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IDggLyogQ29tbWVudE5vZGUgKi8pIHtcbiAgICBjaGlsZElkU3BsdCA9IG5vZGUubm9kZVZhbHVlLnNwbGl0KFwiLlwiKTtcbiAgICBpZiAoY2hpbGRJZFNwbHRbMV0gPT09IGhvc3RJZCB8fCBjaGlsZElkU3BsdFsxXSA9PT0gXCIwXCIpIHtcbiAgICAgIGNoaWxkTm9kZVR5cGUgPSBjaGlsZElkU3BsdFswXTtcbiAgICAgIGNoaWxkVk5vZGUgPSBjcmVhdGVTaW1wbGVWTm9kZSh7XG4gICAgICAgICRob3N0SWQkOiBjaGlsZElkU3BsdFsxXSxcbiAgICAgICAgJG5vZGVJZCQ6IGNoaWxkSWRTcGx0WzJdLFxuICAgICAgICAkZGVwdGgkOiBjaGlsZElkU3BsdFszXSxcbiAgICAgICAgJGluZGV4JDogY2hpbGRJZFNwbHRbNF0gfHwgXCIwXCIsXG4gICAgICAgICRlbG0kOiBub2RlLFxuICAgICAgICAkYXR0cnMkOiBudWxsLFxuICAgICAgICAkY2hpbGRyZW4kOiBudWxsLFxuICAgICAgICAka2V5JDogbnVsbCxcbiAgICAgICAgJG5hbWUkOiBudWxsLFxuICAgICAgICAkdGFnJDogbnVsbCxcbiAgICAgICAgJHRleHQkOiBudWxsXG4gICAgICB9KTtcbiAgICAgIGlmIChjaGlsZE5vZGVUeXBlID09PSBURVhUX05PREVfSUQpIHtcbiAgICAgICAgY2hpbGRWTm9kZS4kZWxtJCA9IGZpbmRDb3JyZXNwb25kaW5nTm9kZShub2RlLCAzIC8qIFRleHROb2RlICovKTtcbiAgICAgICAgaWYgKGNoaWxkVk5vZGUuJGVsbSQgJiYgY2hpbGRWTm9kZS4kZWxtJC5ub2RlVHlwZSA9PT0gMyAvKiBUZXh0Tm9kZSAqLykge1xuICAgICAgICAgIGNoaWxkVk5vZGUuJHRleHQkID0gY2hpbGRWTm9kZS4kZWxtJC50ZXh0Q29udGVudDtcbiAgICAgICAgICBjaGlsZFJlbmRlck5vZGVzLnB1c2goY2hpbGRWTm9kZSk7XG4gICAgICAgICAgbm9kZS5yZW1vdmUoKTtcbiAgICAgICAgICBpZiAoaG9zdElkID09PSBjaGlsZFZOb2RlLiRob3N0SWQkKSB7XG4gICAgICAgICAgICBpZiAoIXBhcmVudFZOb2RlLiRjaGlsZHJlbiQpIHtcbiAgICAgICAgICAgICAgcGFyZW50Vk5vZGUuJGNoaWxkcmVuJCA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFyZW50Vk5vZGUuJGNoaWxkcmVuJFtjaGlsZFZOb2RlLiRpbmRleCRdID0gY2hpbGRWTm9kZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHNoYWRvd1Jvb3ROb2RlcyAmJiBjaGlsZFZOb2RlLiRkZXB0aCQgPT09IFwiMFwiKSB7XG4gICAgICAgICAgICBzaGFkb3dSb290Tm9kZXNbY2hpbGRWTm9kZS4kaW5kZXgkXSA9IGNoaWxkVk5vZGUuJGVsbSQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGNoaWxkTm9kZVR5cGUgPT09IENPTU1FTlRfTk9ERV9JRCkge1xuICAgICAgICBjaGlsZFZOb2RlLiRlbG0kID0gZmluZENvcnJlc3BvbmRpbmdOb2RlKG5vZGUsIDggLyogQ29tbWVudE5vZGUgKi8pO1xuICAgICAgICBpZiAoY2hpbGRWTm9kZS4kZWxtJCAmJiBjaGlsZFZOb2RlLiRlbG0kLm5vZGVUeXBlID09PSA4IC8qIENvbW1lbnROb2RlICovKSB7XG4gICAgICAgICAgY2hpbGRSZW5kZXJOb2Rlcy5wdXNoKGNoaWxkVk5vZGUpO1xuICAgICAgICAgIG5vZGUucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoY2hpbGRWTm9kZS4kaG9zdElkJCA9PT0gaG9zdElkKSB7XG4gICAgICAgIGlmIChjaGlsZE5vZGVUeXBlID09PSBTTE9UX05PREVfSUQpIHtcbiAgICAgICAgICBjb25zdCBzbG90TmFtZSA9IG5vZGVbXCJzLXNuXCJdID0gY2hpbGRJZFNwbHRbNV0gfHwgXCJcIjtcbiAgICAgICAgICBhZGRTbG90KHNsb3ROYW1lLCBjaGlsZElkU3BsdFsyXSwgY2hpbGRWTm9kZSwgbm9kZSwgcGFyZW50Vk5vZGUsIGNoaWxkUmVuZGVyTm9kZXMsIHNsb3ROb2Rlcywgc2hhZG93Um9vdE5vZGVzLCBzbG90dGVkTm9kZXMpO1xuICAgICAgICB9IGVsc2UgaWYgKGNoaWxkTm9kZVR5cGUgPT09IENPTlRFTlRfUkVGX0lEKSB7XG4gICAgICAgICAgaWYgKHNoYWRvd1Jvb3ROb2Rlcykge1xuICAgICAgICAgICAgbm9kZS5yZW1vdmUoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaG9zdEVsbVtcInMtY3JcIl0gPSBub2RlO1xuICAgICAgICAgICAgbm9kZVtcInMtY25cIl0gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChwYXJlbnRWTm9kZSAmJiBwYXJlbnRWTm9kZS4kdGFnJCA9PT0gXCJzdHlsZVwiKSB7XG4gICAgY29uc3Qgdm5vZGUgPSBuZXdWTm9kZShudWxsLCBub2RlLnRleHRDb250ZW50KTtcbiAgICB2bm9kZS4kZWxtJCA9IG5vZGU7XG4gICAgdm5vZGUuJGluZGV4JCA9IFwiMFwiO1xuICAgIHBhcmVudFZOb2RlLiRjaGlsZHJlbiQgPSBbdm5vZGVdO1xuICB9IGVsc2Uge1xuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAzIC8qIFRleHROb2RlICovICYmICFub2RlLndob2xlVGV4dC50cmltKCkgJiYgIW5vZGVbXCJzLW5yXCJdKSB7XG4gICAgICBub2RlLnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcGFyZW50Vk5vZGU7XG59O1xudmFyIGluaXRpYWxpemVEb2N1bWVudEh5ZHJhdGUgPSAobm9kZSwgb3JnTG9jTm9kZXMpID0+IHtcbiAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEgLyogRWxlbWVudE5vZGUgKi8pIHtcbiAgICBjb25zdCBjb21wb25lbnRJZCA9IG5vZGVbSFlEUkFURV9JRF0gfHwgbm9kZS5nZXRBdHRyaWJ1dGUoSFlEUkFURV9JRCk7XG4gICAgaWYgKGNvbXBvbmVudElkKSB7XG4gICAgICBvcmdMb2NOb2Rlcy5zZXQoY29tcG9uZW50SWQsIG5vZGUpO1xuICAgIH1cbiAgICBsZXQgaTIgPSAwO1xuICAgIGlmIChub2RlLnNoYWRvd1Jvb3QpIHtcbiAgICAgIGZvciAoOyBpMiA8IG5vZGUuc2hhZG93Um9vdC5jaGlsZE5vZGVzLmxlbmd0aDsgaTIrKykge1xuICAgICAgICBpbml0aWFsaXplRG9jdW1lbnRIeWRyYXRlKG5vZGUuc2hhZG93Um9vdC5jaGlsZE5vZGVzW2kyXSwgb3JnTG9jTm9kZXMpO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBub25TaGFkb3dOb2RlcyA9IG5vZGUuX19jaGlsZE5vZGVzIHx8IG5vZGUuY2hpbGROb2RlcztcbiAgICBmb3IgKGkyID0gMDsgaTIgPCBub25TaGFkb3dOb2Rlcy5sZW5ndGg7IGkyKyspIHtcbiAgICAgIGluaXRpYWxpemVEb2N1bWVudEh5ZHJhdGUobm9uU2hhZG93Tm9kZXNbaTJdLCBvcmdMb2NOb2Rlcyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IDggLyogQ29tbWVudE5vZGUgKi8pIHtcbiAgICBjb25zdCBjaGlsZElkU3BsdCA9IG5vZGUubm9kZVZhbHVlLnNwbGl0KFwiLlwiKTtcbiAgICBpZiAoY2hpbGRJZFNwbHRbMF0gPT09IE9SR19MT0NBVElPTl9JRCkge1xuICAgICAgb3JnTG9jTm9kZXMuc2V0KGNoaWxkSWRTcGx0WzFdICsgXCIuXCIgKyBjaGlsZElkU3BsdFsyXSwgbm9kZSk7XG4gICAgICBub2RlLm5vZGVWYWx1ZSA9IFwiXCI7XG4gICAgICBub2RlW1wicy1lblwiXSA9IGNoaWxkSWRTcGx0WzNdO1xuICAgIH1cbiAgfVxufTtcbnZhciBjcmVhdGVTaW1wbGVWTm9kZSA9IHZub2RlID0+IHtcbiAgY29uc3QgZGVmYXVsdFZOb2RlID0ge1xuICAgICRmbGFncyQ6IDAsXG4gICAgJGhvc3RJZCQ6IG51bGwsXG4gICAgJG5vZGVJZCQ6IG51bGwsXG4gICAgJGRlcHRoJDogbnVsbCxcbiAgICAkaW5kZXgkOiBcIjBcIixcbiAgICAkZWxtJDogbnVsbCxcbiAgICAkYXR0cnMkOiBudWxsLFxuICAgICRjaGlsZHJlbiQ6IG51bGwsXG4gICAgJGtleSQ6IG51bGwsXG4gICAgJG5hbWUkOiBudWxsLFxuICAgICR0YWckOiBudWxsLFxuICAgICR0ZXh0JDogbnVsbFxuICB9O1xuICByZXR1cm4ge1xuICAgIC4uLmRlZmF1bHRWTm9kZSxcbiAgICAuLi52bm9kZVxuICB9O1xufTtcbmZ1bmN0aW9uIGFkZFNsb3Qoc2xvdE5hbWUsIHNsb3RJZCwgY2hpbGRWTm9kZSwgbm9kZSwgcGFyZW50Vk5vZGUsIGNoaWxkUmVuZGVyTm9kZXMsIHNsb3ROb2Rlcywgc2hhZG93Um9vdE5vZGVzLCBzbG90dGVkTm9kZXMpIHtcbiAgbm9kZVtcInMtc3JcIl0gPSB0cnVlO1xuICBjaGlsZFZOb2RlLiRuYW1lJCA9IHNsb3ROYW1lIHx8IG51bGw7XG4gIGNoaWxkVk5vZGUuJHRhZyQgPSBcInNsb3RcIjtcbiAgY29uc3QgcGFyZW50Tm9kZUlkID0gKHBhcmVudFZOb2RlID09IG51bGwgPyB2b2lkIDAgOiBwYXJlbnRWTm9kZS4kZWxtJCkgPyBwYXJlbnRWTm9kZS4kZWxtJFtcInMtaWRcIl0gfHwgcGFyZW50Vk5vZGUuJGVsbSQuZ2V0QXR0cmlidXRlKFwicy1pZFwiKSA6IFwiXCI7XG4gIGlmIChzaGFkb3dSb290Tm9kZXMgJiYgd2luLmRvY3VtZW50KSB7XG4gICAgY29uc3Qgc2xvdCA9IGNoaWxkVk5vZGUuJGVsbSQgPSB3aW4uZG9jdW1lbnQuY3JlYXRlRWxlbWVudChjaGlsZFZOb2RlLiR0YWckKTtcbiAgICBpZiAoY2hpbGRWTm9kZS4kbmFtZSQpIHtcbiAgICAgIGNoaWxkVk5vZGUuJGVsbSQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBzbG90TmFtZSk7XG4gICAgfVxuICAgIGlmIChwYXJlbnRWTm9kZS4kZWxtJC5zaGFkb3dSb290ICYmIHBhcmVudE5vZGVJZCAmJiBwYXJlbnROb2RlSWQgIT09IGNoaWxkVk5vZGUuJGhvc3RJZCQpIHtcbiAgICAgIGludGVybmFsQ2FsbChwYXJlbnRWTm9kZS4kZWxtJCwgXCJpbnNlcnRCZWZvcmVcIikoc2xvdCwgaW50ZXJuYWxDYWxsKHBhcmVudFZOb2RlLiRlbG0kLCBcImNoaWxkcmVuXCIpWzBdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW50ZXJuYWxDYWxsKGludGVybmFsQ2FsbChub2RlLCBcInBhcmVudE5vZGVcIiksIFwiaW5zZXJ0QmVmb3JlXCIpKHNsb3QsIG5vZGUpO1xuICAgIH1cbiAgICBhZGRTbG90dGVkTm9kZXMoc2xvdHRlZE5vZGVzLCBzbG90SWQsIHNsb3ROYW1lLCBub2RlLCBjaGlsZFZOb2RlLiRob3N0SWQkKTtcbiAgICBub2RlLnJlbW92ZSgpO1xuICAgIGlmIChjaGlsZFZOb2RlLiRkZXB0aCQgPT09IFwiMFwiKSB7XG4gICAgICBzaGFkb3dSb290Tm9kZXNbY2hpbGRWTm9kZS4kaW5kZXgkXSA9IGNoaWxkVk5vZGUuJGVsbSQ7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHNsb3QgPSBjaGlsZFZOb2RlLiRlbG0kO1xuICAgIGNvbnN0IHNob3VsZE1vdmUgPSBwYXJlbnROb2RlSWQgJiYgcGFyZW50Tm9kZUlkICE9PSBjaGlsZFZOb2RlLiRob3N0SWQkICYmIHBhcmVudFZOb2RlLiRlbG0kLnNoYWRvd1Jvb3Q7XG4gICAgYWRkU2xvdHRlZE5vZGVzKHNsb3R0ZWROb2Rlcywgc2xvdElkLCBzbG90TmFtZSwgbm9kZSwgc2hvdWxkTW92ZSA/IHBhcmVudE5vZGVJZCA6IGNoaWxkVk5vZGUuJGhvc3RJZCQpO1xuICAgIHBhdGNoU2xvdE5vZGUobm9kZSk7XG4gICAgaWYgKHNob3VsZE1vdmUpIHtcbiAgICAgIHBhcmVudFZOb2RlLiRlbG0kLmluc2VydEJlZm9yZShzbG90LCBwYXJlbnRWTm9kZS4kZWxtJC5jaGlsZHJlblswXSk7XG4gICAgfVxuICB9XG4gIGNoaWxkUmVuZGVyTm9kZXMucHVzaChjaGlsZFZOb2RlKTtcbiAgc2xvdE5vZGVzLnB1c2goY2hpbGRWTm9kZSk7XG4gIGlmICghcGFyZW50Vk5vZGUuJGNoaWxkcmVuJCkge1xuICAgIHBhcmVudFZOb2RlLiRjaGlsZHJlbiQgPSBbXTtcbiAgfVxuICBwYXJlbnRWTm9kZS4kY2hpbGRyZW4kW2NoaWxkVk5vZGUuJGluZGV4JF0gPSBjaGlsZFZOb2RlO1xufVxudmFyIGFkZFNsb3R0ZWROb2RlcyA9IChzbG90dGVkTm9kZXMsIHNsb3ROb2RlSWQsIHNsb3ROYW1lLCBzbG90Tm9kZSwgaG9zdElkKSA9PiB7XG4gIHZhciBfYSwgX2I7XG4gIGxldCBzbG90dGVkTm9kZSA9IHNsb3ROb2RlLm5leHRTaWJsaW5nO1xuICBzbG90dGVkTm9kZXNbc2xvdE5vZGVJZF0gPSBzbG90dGVkTm9kZXNbc2xvdE5vZGVJZF0gfHwgW107XG4gIGlmICghc2xvdHRlZE5vZGUgfHwgKChfYSA9IHNsb3R0ZWROb2RlLm5vZGVWYWx1ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLnN0YXJ0c1dpdGgoU0xPVF9OT0RFX0lEICsgXCIuXCIpKSkgcmV0dXJuO1xuICBkbyB7XG4gICAgaWYgKHNsb3R0ZWROb2RlICYmICgoc2xvdHRlZE5vZGVbXCJnZXRBdHRyaWJ1dGVcIl0gJiYgc2xvdHRlZE5vZGUuZ2V0QXR0cmlidXRlKFwic2xvdFwiKSB8fCBzbG90dGVkTm9kZVtcInMtc25cIl0pID09PSBzbG90TmFtZSB8fCBzbG90TmFtZSA9PT0gXCJcIiAmJiAhc2xvdHRlZE5vZGVbXCJzLXNuXCJdICYmICghc2xvdHRlZE5vZGVbXCJnZXRBdHRyaWJ1dGVcIl0gfHwgIXNsb3R0ZWROb2RlLmdldEF0dHJpYnV0ZShcInNsb3RcIikpICYmIChzbG90dGVkTm9kZS5ub2RlVHlwZSA9PT0gOCAvKiBDb21tZW50Tm9kZSAqLyB8fCBzbG90dGVkTm9kZS5ub2RlVHlwZSA9PT0gMyAvKiBUZXh0Tm9kZSAqLykpKSB7XG4gICAgICBzbG90dGVkTm9kZVtcInMtc25cIl0gPSBzbG90TmFtZTtcbiAgICAgIHNsb3R0ZWROb2Rlc1tzbG90Tm9kZUlkXS5wdXNoKHtcbiAgICAgICAgc2xvdDogc2xvdE5vZGUsXG4gICAgICAgIG5vZGU6IHNsb3R0ZWROb2RlLFxuICAgICAgICBob3N0SWRcbiAgICAgIH0pO1xuICAgIH1cbiAgICBzbG90dGVkTm9kZSA9IHNsb3R0ZWROb2RlID09IG51bGwgPyB2b2lkIDAgOiBzbG90dGVkTm9kZS5uZXh0U2libGluZztcbiAgfSB3aGlsZSAoc2xvdHRlZE5vZGUgJiYgISgoX2IgPSBzbG90dGVkTm9kZS5ub2RlVmFsdWUpID09IG51bGwgPyB2b2lkIDAgOiBfYi5zdGFydHNXaXRoKFNMT1RfTk9ERV9JRCArIFwiLlwiKSkpO1xufTtcbnZhciBmaW5kQ29ycmVzcG9uZGluZ05vZGUgPSAobm9kZSwgdHlwZSkgPT4ge1xuICBsZXQgc2libGluZyA9IG5vZGU7XG4gIGRvIHtcbiAgICBzaWJsaW5nID0gc2libGluZy5uZXh0U2libGluZztcbiAgfSB3aGlsZSAoc2libGluZyAmJiAoc2libGluZy5ub2RlVHlwZSAhPT0gdHlwZSB8fCAhc2libGluZy5ub2RlVmFsdWUpKTtcbiAgcmV0dXJuIHNpYmxpbmc7XG59O1xudmFyIGNyZWF0ZVN1cHBvcnRzUnVsZVJlID0gc2VsZWN0b3IgPT4ge1xuICBjb25zdCBzYWZlU2VsZWN0b3IyID0gZXNjYXBlUmVnRXhwU3BlY2lhbENoYXJhY3RlcnMoc2VsZWN0b3IpO1xuICByZXR1cm4gbmV3IFJlZ0V4cChcbiAgLy8gRmlyc3QgY2FwdHVyZSBncm91cDogbWF0Y2ggYW55IGNvbnRleHQgYmVmb3JlIHRoZSBzZWxlY3RvciB0aGF0J3Mgbm90IGluc2lkZSBAc3VwcG9ydHMgc2VsZWN0b3IoKVxuICAvLyBVc2luZyBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gYXZvaWQgbWF0Y2hpbmcgaW5zaWRlIEBzdXBwb3J0cyBzZWxlY3RvciguLi4pIGNvbmRpdGlvblxuICBgKF58W15AXXxAKD8hc3VwcG9ydHNcXFxccytzZWxlY3RvclxcXFxzKlxcXFwoW157XSo/JHtzYWZlU2VsZWN0b3IyfSkpKCR7c2FmZVNlbGVjdG9yMn1cXFxcYilgLCBcImdcIik7XG59O1xuY3JlYXRlU3VwcG9ydHNSdWxlUmUoXCI6OnNsb3R0ZWRcIik7XG5jcmVhdGVTdXBwb3J0c1J1bGVSZShcIjpob3N0XCIpO1xuY3JlYXRlU3VwcG9ydHNSdWxlUmUoXCI6aG9zdC1jb250ZXh0XCIpO1xuXG4vLyBzcmMvcnVudGltZS9tb2RlLnRzXG52YXIgY29tcHV0ZU1vZGUgPSBlbG0gPT4gbW9kZVJlc29sdXRpb25DaGFpbi5tYXAoaDIgPT4gaDIoZWxtKSkuZmluZChtID0+ICEhbSk7XG52YXIgc2V0TW9kZSA9IGhhbmRsZXIgPT4gbW9kZVJlc29sdXRpb25DaGFpbi5wdXNoKGhhbmRsZXIpO1xudmFyIGdldE1vZGUgPSByZWYgPT4ge1xuICB2YXIgX2E7XG4gIHJldHVybiAoX2EgPSBnZXRIb3N0UmVmKHJlZikpID09IG51bGwgPyB2b2lkIDAgOiBfYS4kbW9kZU5hbWUkO1xufTtcbnZhciBwYXJzZVByb3BlcnR5VmFsdWUgPSAocHJvcFZhbHVlLCBwcm9wVHlwZSwgaXNGb3JtQXNzb2NpYXRlZCkgPT4ge1xuICBpZiAodHlwZW9mIHByb3BWYWx1ZSA9PT0gXCJzdHJpbmdcIiAmJiBwcm9wVmFsdWUuc3RhcnRzV2l0aChTRVJJQUxJWkVEX1BSRUZJWCkpIHtcbiAgICBwcm9wVmFsdWUgPSBkZXNlcmlhbGl6ZVByb3BlcnR5KHByb3BWYWx1ZSk7XG4gICAgcmV0dXJuIHByb3BWYWx1ZTtcbiAgfVxuICBpZiAodHlwZW9mIHByb3BWYWx1ZSA9PT0gXCJzdHJpbmdcIiAmJiAocHJvcFR5cGUgJiAxNiAvKiBVbmtub3duICovIHx8IHByb3BUeXBlICYgOCAvKiBBbnkgKi8pICYmIChwcm9wVmFsdWUuc3RhcnRzV2l0aChcIntcIikgJiYgcHJvcFZhbHVlLmVuZHNXaXRoKFwifVwiKSB8fCBwcm9wVmFsdWUuc3RhcnRzV2l0aChcIltcIikgJiYgcHJvcFZhbHVlLmVuZHNXaXRoKFwiXVwiKSkpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UocHJvcFZhbHVlKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiAhaXNDb21wbGV4VHlwZShwcm9wVmFsdWUpKSB7XG4gICAgaWYgKHByb3BUeXBlICYgNCAvKiBCb29sZWFuICovKSB7XG4gICAgICB7XG4gICAgICAgIHJldHVybiBwcm9wVmFsdWUgPT09IFwiZmFsc2VcIiA/IGZhbHNlIDogcHJvcFZhbHVlID09PSBcIlwiIHx8ICEhcHJvcFZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocHJvcFR5cGUgJiAyIC8qIE51bWJlciAqLykge1xuICAgICAgcmV0dXJuIHR5cGVvZiBwcm9wVmFsdWUgPT09IFwic3RyaW5nXCIgPyBwYXJzZUZsb2F0KHByb3BWYWx1ZSkgOiB0eXBlb2YgcHJvcFZhbHVlID09PSBcIm51bWJlclwiID8gcHJvcFZhbHVlIDogTmFOO1xuICAgIH1cbiAgICBpZiAocHJvcFR5cGUgJiAxIC8qIFN0cmluZyAqLykge1xuICAgICAgcmV0dXJuIFN0cmluZyhwcm9wVmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFZhbHVlO1xuICB9XG4gIHJldHVybiBwcm9wVmFsdWU7XG59O1xudmFyIGdldEVsZW1lbnQgPSByZWYgPT4ge1xuICB2YXIgX2E7XG4gIHJldHVybiAoX2EgPSBnZXRIb3N0UmVmKHJlZikpID09IG51bGwgPyB2b2lkIDAgOiBfYS4kaG9zdEVsZW1lbnQkO1xufTtcblxuLy8gc3JjL3J1bnRpbWUvZXZlbnQtZW1pdHRlci50c1xudmFyIGNyZWF0ZUV2ZW50ID0gKHJlZiwgbmFtZSwgZmxhZ3MpID0+IHtcbiAgY29uc3QgZWxtID0gZ2V0RWxlbWVudChyZWYpO1xuICByZXR1cm4ge1xuICAgIGVtaXQ6IGRldGFpbCA9PiB7XG4gICAgICByZXR1cm4gZW1pdEV2ZW50KGVsbSwgbmFtZSwge1xuICAgICAgICBidWJibGVzOiAhIShmbGFncyAmIDQgLyogQnViYmxlcyAqLyksXG4gICAgICAgIGNvbXBvc2VkOiAhIShmbGFncyAmIDIgLyogQ29tcG9zZWQgKi8pLFxuICAgICAgICBjYW5jZWxhYmxlOiAhIShmbGFncyAmIDEgLyogQ2FuY2VsbGFibGUgKi8pLFxuICAgICAgICBkZXRhaWxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn07XG52YXIgZW1pdEV2ZW50ID0gKGVsbSwgbmFtZSwgb3B0cykgPT4ge1xuICBjb25zdCBldiA9IHBsdC5jZShuYW1lLCBvcHRzKTtcbiAgZWxtLmRpc3BhdGNoRXZlbnQoZXYpO1xuICByZXR1cm4gZXY7XG59O1xudmFyIHNldEFjY2Vzc29yID0gKGVsbSwgbWVtYmVyTmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlLCBpc1N2ZywgZmxhZ3MsIGluaXRpYWxSZW5kZXIpID0+IHtcbiAgaWYgKG9sZFZhbHVlID09PSBuZXdWYWx1ZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgaXNQcm9wID0gaXNNZW1iZXJJbkVsZW1lbnQoZWxtLCBtZW1iZXJOYW1lKTtcbiAgbGV0IGxuID0gbWVtYmVyTmFtZS50b0xvd2VyQ2FzZSgpO1xuICBpZiAobWVtYmVyTmFtZSA9PT0gXCJjbGFzc1wiKSB7XG4gICAgY29uc3QgY2xhc3NMaXN0ID0gZWxtLmNsYXNzTGlzdDtcbiAgICBjb25zdCBvbGRDbGFzc2VzID0gcGFyc2VDbGFzc0xpc3Qob2xkVmFsdWUpO1xuICAgIGxldCBuZXdDbGFzc2VzID0gcGFyc2VDbGFzc0xpc3QobmV3VmFsdWUpO1xuICAgIGlmICgoZWxtW1wicy1zaVwiXSB8fCBlbG1bXCJzLXNjXCJdKSAmJiBpbml0aWFsUmVuZGVyKSB7XG4gICAgICBjb25zdCBzY29wZUlkMiA9IGVsbVtcInMtc2NcIl0gfHwgZWxtW1wicy1zaVwiXTtcbiAgICAgIG5ld0NsYXNzZXMucHVzaChzY29wZUlkMik7XG4gICAgICBvbGRDbGFzc2VzLmZvckVhY2goYyA9PiB7XG4gICAgICAgIGlmIChjLnN0YXJ0c1dpdGgoc2NvcGVJZDIpKSBuZXdDbGFzc2VzLnB1c2goYyk7XG4gICAgICB9KTtcbiAgICAgIG5ld0NsYXNzZXMgPSBbLi4ubmV3IFNldChuZXdDbGFzc2VzKV0uZmlsdGVyKGMgPT4gYyk7XG4gICAgICBjbGFzc0xpc3QuYWRkKC4uLm5ld0NsYXNzZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjbGFzc0xpc3QucmVtb3ZlKC4uLm9sZENsYXNzZXMuZmlsdGVyKGMgPT4gYyAmJiAhbmV3Q2xhc3Nlcy5pbmNsdWRlcyhjKSkpO1xuICAgICAgY2xhc3NMaXN0LmFkZCguLi5uZXdDbGFzc2VzLmZpbHRlcihjID0+IGMgJiYgIW9sZENsYXNzZXMuaW5jbHVkZXMoYykpKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAobWVtYmVyTmFtZSA9PT0gXCJzdHlsZVwiKSB7XG4gICAge1xuICAgICAgZm9yIChjb25zdCBwcm9wIGluIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICghbmV3VmFsdWUgfHwgbmV3VmFsdWVbcHJvcF0gPT0gbnVsbCkge1xuICAgICAgICAgIGlmIChwcm9wLmluY2x1ZGVzKFwiLVwiKSkge1xuICAgICAgICAgICAgZWxtLnN0eWxlLnJlbW92ZVByb3BlcnR5KHByb3ApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbG0uc3R5bGVbcHJvcF0gPSBcIlwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gbmV3VmFsdWUpIHtcbiAgICAgIGlmICghb2xkVmFsdWUgfHwgbmV3VmFsdWVbcHJvcF0gIT09IG9sZFZhbHVlW3Byb3BdKSB7XG4gICAgICAgIGlmIChwcm9wLmluY2x1ZGVzKFwiLVwiKSkge1xuICAgICAgICAgIGVsbS5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wLCBuZXdWYWx1ZVtwcm9wXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWxtLnN0eWxlW3Byb3BdID0gbmV3VmFsdWVbcHJvcF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAobWVtYmVyTmFtZSA9PT0gXCJrZXlcIikgO2Vsc2UgaWYgKG1lbWJlck5hbWUgPT09IFwicmVmXCIpIHtcbiAgICBpZiAobmV3VmFsdWUpIHtcbiAgICAgIG5ld1ZhbHVlKGVsbSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKCFpc1Byb3AgJiYgbWVtYmVyTmFtZVswXSA9PT0gXCJvXCIgJiYgbWVtYmVyTmFtZVsxXSA9PT0gXCJuXCIpIHtcbiAgICBpZiAobWVtYmVyTmFtZVsyXSA9PT0gXCItXCIpIHtcbiAgICAgIG1lbWJlck5hbWUgPSBtZW1iZXJOYW1lLnNsaWNlKDMpO1xuICAgIH0gZWxzZSBpZiAoaXNNZW1iZXJJbkVsZW1lbnQod2luLCBsbikpIHtcbiAgICAgIG1lbWJlck5hbWUgPSBsbi5zbGljZSgyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVtYmVyTmFtZSA9IGxuWzJdICsgbWVtYmVyTmFtZS5zbGljZSgzKTtcbiAgICB9XG4gICAgaWYgKG9sZFZhbHVlIHx8IG5ld1ZhbHVlKSB7XG4gICAgICBjb25zdCBjYXB0dXJlID0gbWVtYmVyTmFtZS5lbmRzV2l0aChDQVBUVVJFX0VWRU5UX1NVRkZJWCk7XG4gICAgICBtZW1iZXJOYW1lID0gbWVtYmVyTmFtZS5yZXBsYWNlKENBUFRVUkVfRVZFTlRfUkVHRVgsIFwiXCIpO1xuICAgICAgaWYgKG9sZFZhbHVlKSB7XG4gICAgICAgIHBsdC5yZWwoZWxtLCBtZW1iZXJOYW1lLCBvbGRWYWx1ZSwgY2FwdHVyZSk7XG4gICAgICB9XG4gICAgICBpZiAobmV3VmFsdWUpIHtcbiAgICAgICAgcGx0LmFlbChlbG0sIG1lbWJlck5hbWUsIG5ld1ZhbHVlLCBjYXB0dXJlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgaXNDb21wbGV4ID0gaXNDb21wbGV4VHlwZShuZXdWYWx1ZSk7XG4gICAgaWYgKChpc1Byb3AgfHwgaXNDb21wbGV4ICYmIG5ld1ZhbHVlICE9PSBudWxsKSAmJiAhaXNTdmcpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghZWxtLnRhZ05hbWUuaW5jbHVkZXMoXCItXCIpKSB7XG4gICAgICAgICAgY29uc3QgbiA9IG5ld1ZhbHVlID09IG51bGwgPyBcIlwiIDogbmV3VmFsdWU7XG4gICAgICAgICAgaWYgKG1lbWJlck5hbWUgPT09IFwibGlzdFwiKSB7XG4gICAgICAgICAgICBpc1Byb3AgPSBmYWxzZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG9sZFZhbHVlID09IG51bGwgfHwgZWxtW21lbWJlck5hbWVdICE9IG4pIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZWxtLl9fbG9va3VwU2V0dGVyX18obWVtYmVyTmFtZSkgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICBlbG1bbWVtYmVyTmFtZV0gPSBuO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZWxtLnNldEF0dHJpYnV0ZShtZW1iZXJOYW1lLCBuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZWxtW21lbWJlck5hbWVdICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICAgIGVsbVttZW1iZXJOYW1lXSA9IG5ld1ZhbHVlO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cbiAgICBsZXQgeGxpbmsgPSBmYWxzZTtcbiAgICB7XG4gICAgICBpZiAobG4gIT09IChsbiA9IGxuLnJlcGxhY2UoL154bGlua1xcOj8vLCBcIlwiKSkpIHtcbiAgICAgICAgbWVtYmVyTmFtZSA9IGxuO1xuICAgICAgICB4bGluayA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChuZXdWYWx1ZSA9PSBudWxsIHx8IG5ld1ZhbHVlID09PSBmYWxzZSkge1xuICAgICAgaWYgKG5ld1ZhbHVlICE9PSBmYWxzZSB8fCBlbG0uZ2V0QXR0cmlidXRlKG1lbWJlck5hbWUpID09PSBcIlwiKSB7XG4gICAgICAgIGlmICh4bGluaykge1xuICAgICAgICAgIGVsbS5yZW1vdmVBdHRyaWJ1dGVOUyhYTElOS19OUywgbWVtYmVyTmFtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWxtLnJlbW92ZUF0dHJpYnV0ZShtZW1iZXJOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoKCFpc1Byb3AgfHwgZmxhZ3MgJiA0IC8qIGlzSG9zdCAqLyB8fCBpc1N2ZykgJiYgIWlzQ29tcGxleCAmJiBlbG0ubm9kZVR5cGUgPT09IDEgLyogRWxlbWVudE5vZGUgKi8pIHtcbiAgICAgIG5ld1ZhbHVlID0gbmV3VmFsdWUgPT09IHRydWUgPyBcIlwiIDogbmV3VmFsdWU7XG4gICAgICBpZiAoeGxpbmspIHtcbiAgICAgICAgZWxtLnNldEF0dHJpYnV0ZU5TKFhMSU5LX05TLCBtZW1iZXJOYW1lLCBuZXdWYWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbG0uc2V0QXR0cmlidXRlKG1lbWJlck5hbWUsIG5ld1ZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG52YXIgcGFyc2VDbGFzc0xpc3RSZWdleCA9IC9cXHMvO1xudmFyIHBhcnNlQ2xhc3NMaXN0ID0gdmFsdWUgPT4ge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICYmIFwiYmFzZVZhbFwiIGluIHZhbHVlKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5iYXNlVmFsO1xuICB9XG4gIGlmICghdmFsdWUgfHwgdHlwZW9mIHZhbHVlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHJldHVybiB2YWx1ZS5zcGxpdChwYXJzZUNsYXNzTGlzdFJlZ2V4KTtcbn07XG52YXIgQ0FQVFVSRV9FVkVOVF9TVUZGSVggPSBcIkNhcHR1cmVcIjtcbnZhciBDQVBUVVJFX0VWRU5UX1JFR0VYID0gbmV3IFJlZ0V4cChDQVBUVVJFX0VWRU5UX1NVRkZJWCArIFwiJFwiKTtcblxuLy8gc3JjL3J1bnRpbWUvdmRvbS91cGRhdGUtZWxlbWVudC50c1xudmFyIHVwZGF0ZUVsZW1lbnQgPSAob2xkVm5vZGUsIG5ld1Zub2RlLCBpc1N2Z01vZGUyLCBpc0luaXRpYWxSZW5kZXIpID0+IHtcbiAgY29uc3QgZWxtID0gbmV3Vm5vZGUuJGVsbSQubm9kZVR5cGUgPT09IDExIC8qIERvY3VtZW50RnJhZ21lbnQgKi8gJiYgbmV3Vm5vZGUuJGVsbSQuaG9zdCA/IG5ld1Zub2RlLiRlbG0kLmhvc3QgOiBuZXdWbm9kZS4kZWxtJDtcbiAgY29uc3Qgb2xkVm5vZGVBdHRycyA9IG9sZFZub2RlICYmIG9sZFZub2RlLiRhdHRycyQgfHwge307XG4gIGNvbnN0IG5ld1Zub2RlQXR0cnMgPSBuZXdWbm9kZS4kYXR0cnMkIHx8IHt9O1xuICB7XG4gICAgZm9yIChjb25zdCBtZW1iZXJOYW1lIG9mIHNvcnRlZEF0dHJOYW1lcyhPYmplY3Qua2V5cyhvbGRWbm9kZUF0dHJzKSkpIHtcbiAgICAgIGlmICghKG1lbWJlck5hbWUgaW4gbmV3Vm5vZGVBdHRycykpIHtcbiAgICAgICAgc2V0QWNjZXNzb3IoZWxtLCBtZW1iZXJOYW1lLCBvbGRWbm9kZUF0dHJzW21lbWJlck5hbWVdLCB2b2lkIDAsIGlzU3ZnTW9kZTIsIG5ld1Zub2RlLiRmbGFncyQsIGlzSW5pdGlhbFJlbmRlcik7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZvciAoY29uc3QgbWVtYmVyTmFtZSBvZiBzb3J0ZWRBdHRyTmFtZXMoT2JqZWN0LmtleXMobmV3Vm5vZGVBdHRycykpKSB7XG4gICAgc2V0QWNjZXNzb3IoZWxtLCBtZW1iZXJOYW1lLCBvbGRWbm9kZUF0dHJzW21lbWJlck5hbWVdLCBuZXdWbm9kZUF0dHJzW21lbWJlck5hbWVdLCBpc1N2Z01vZGUyLCBuZXdWbm9kZS4kZmxhZ3MkLCBpc0luaXRpYWxSZW5kZXIpO1xuICB9XG59O1xuZnVuY3Rpb24gc29ydGVkQXR0ck5hbWVzKGF0dHJOYW1lcykge1xuICByZXR1cm4gYXR0ck5hbWVzLmluY2x1ZGVzKFwicmVmXCIpID9cbiAgLy8gd2UgbmVlZCB0byBzb3J0IHRoZXNlIHRvIGVuc3VyZSB0aGF0IGAncmVmJ2AgaXMgdGhlIGxhc3QgYXR0clxuICBbLi4uYXR0ck5hbWVzLmZpbHRlcihhdHRyID0+IGF0dHIgIT09IFwicmVmXCIpLCBcInJlZlwiXSA6XG4gIC8vIG5vIG5lZWQgdG8gc29ydCwgcmV0dXJuIHRoZSBvcmlnaW5hbCBhcnJheVxuICBhdHRyTmFtZXM7XG59XG5cbi8vIHNyYy9ydW50aW1lL3Zkb20vdmRvbS1yZW5kZXIudHNcbnZhciBzY29wZUlkO1xudmFyIGNvbnRlbnRSZWY7XG52YXIgaG9zdFRhZ05hbWU7XG52YXIgdXNlTmF0aXZlU2hhZG93RG9tID0gZmFsc2U7XG52YXIgY2hlY2tTbG90RmFsbGJhY2tWaXNpYmlsaXR5ID0gZmFsc2U7XG52YXIgY2hlY2tTbG90UmVsb2NhdGUgPSBmYWxzZTtcbnZhciBpc1N2Z01vZGUgPSBmYWxzZTtcbnZhciBjcmVhdGVFbG0gPSAob2xkUGFyZW50Vk5vZGUsIG5ld1BhcmVudFZOb2RlLCBjaGlsZEluZGV4KSA9PiB7XG4gIHZhciBfYTtcbiAgY29uc3QgbmV3Vk5vZGUyID0gbmV3UGFyZW50Vk5vZGUuJGNoaWxkcmVuJFtjaGlsZEluZGV4XTtcbiAgbGV0IGkyID0gMDtcbiAgbGV0IGVsbTtcbiAgbGV0IGNoaWxkTm9kZTtcbiAgbGV0IG9sZFZOb2RlO1xuICBpZiAoIXVzZU5hdGl2ZVNoYWRvd0RvbSkge1xuICAgIGNoZWNrU2xvdFJlbG9jYXRlID0gdHJ1ZTtcbiAgICBpZiAobmV3Vk5vZGUyLiR0YWckID09PSBcInNsb3RcIikge1xuICAgICAgbmV3Vk5vZGUyLiRmbGFncyQgfD0gbmV3Vk5vZGUyLiRjaGlsZHJlbiQgP1xuICAgICAgLy8gc2xvdCBlbGVtZW50IGhhcyBmYWxsYmFjayBjb250ZW50XG4gICAgICAvLyBzdGlsbCBjcmVhdGUgYW4gZWxlbWVudCB0aGF0IFwibW9ja3NcIiB0aGUgc2xvdCBlbGVtZW50XG4gICAgICAyIC8qIGlzU2xvdEZhbGxiYWNrICovIDpcbiAgICAgIC8vIHNsb3QgZWxlbWVudCBkb2VzIG5vdCBoYXZlIGZhbGxiYWNrIGNvbnRlbnRcbiAgICAgIC8vIGNyZWF0ZSBhbiBodG1sIGNvbW1lbnQgd2UnbGwgdXNlIHRvIGFsd2F5cyByZWZlcmVuY2VcbiAgICAgIC8vIHdoZXJlIGFjdHVhbCBzbG90IGNvbnRlbnQgc2hvdWxkIHNpdCBuZXh0IHRvXG4gICAgICAxIC8qIGlzU2xvdFJlZmVyZW5jZSAqLztcbiAgICB9XG4gIH1cbiAgaWYgKG5ld1ZOb2RlMi4kdGV4dCQgIT09IG51bGwpIHtcbiAgICBlbG0gPSBuZXdWTm9kZTIuJGVsbSQgPSB3aW4uZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobmV3Vk5vZGUyLiR0ZXh0JCk7XG4gIH0gZWxzZSBpZiAobmV3Vk5vZGUyLiRmbGFncyQgJiAxIC8qIGlzU2xvdFJlZmVyZW5jZSAqLykge1xuICAgIGVsbSA9IG5ld1ZOb2RlMi4kZWxtJCA9IHdpbi5kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKTtcbiAgICB7XG4gICAgICB1cGRhdGVFbGVtZW50KG51bGwsIG5ld1ZOb2RlMiwgaXNTdmdNb2RlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKCFpc1N2Z01vZGUpIHtcbiAgICAgIGlzU3ZnTW9kZSA9IG5ld1ZOb2RlMi4kdGFnJCA9PT0gXCJzdmdcIjtcbiAgICB9XG4gICAgaWYgKCF3aW4uZG9jdW1lbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBhcmUgdHJ5aW5nIHRvIHJlbmRlciBhIFN0ZW5jaWwgY29tcG9uZW50IGluIGFuIGVudmlyb25tZW50IHRoYXQgZG9lc24ndCBzdXBwb3J0IHRoZSBET00uIE1ha2Ugc3VyZSB0byBwb3B1bGF0ZSB0aGUgW2B3aW5kb3dgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93L3dpbmRvdykgb2JqZWN0IGJlZm9yZSByZW5kZXJpbmcgYSBjb21wb25lbnQuXCIpO1xuICAgIH1cbiAgICBlbG0gPSBuZXdWTm9kZTIuJGVsbSQgPSB3aW4uZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKGlzU3ZnTW9kZSA/IFNWR19OUyA6IEhUTUxfTlMsICF1c2VOYXRpdmVTaGFkb3dEb20gJiYgQlVJTEQuc2xvdFJlbG9jYXRpb24gJiYgbmV3Vk5vZGUyLiRmbGFncyQgJiAyIC8qIGlzU2xvdEZhbGxiYWNrICovID8gXCJzbG90LWZiXCIgOiBuZXdWTm9kZTIuJHRhZyQpO1xuICAgIGlmIChpc1N2Z01vZGUgJiYgbmV3Vk5vZGUyLiR0YWckID09PSBcImZvcmVpZ25PYmplY3RcIikge1xuICAgICAgaXNTdmdNb2RlID0gZmFsc2U7XG4gICAgfVxuICAgIHtcbiAgICAgIHVwZGF0ZUVsZW1lbnQobnVsbCwgbmV3Vk5vZGUyLCBpc1N2Z01vZGUpO1xuICAgIH1cbiAgICBpZiAoaXNEZWYoc2NvcGVJZCkgJiYgZWxtW1wicy1zaVwiXSAhPT0gc2NvcGVJZCkge1xuICAgICAgZWxtLmNsYXNzTGlzdC5hZGQoZWxtW1wicy1zaVwiXSA9IHNjb3BlSWQpO1xuICAgIH1cbiAgICBpZiAobmV3Vk5vZGUyLiRjaGlsZHJlbiQpIHtcbiAgICAgIGZvciAoaTIgPSAwOyBpMiA8IG5ld1ZOb2RlMi4kY2hpbGRyZW4kLmxlbmd0aDsgKytpMikge1xuICAgICAgICBjaGlsZE5vZGUgPSBjcmVhdGVFbG0ob2xkUGFyZW50Vk5vZGUsIG5ld1ZOb2RlMiwgaTIpO1xuICAgICAgICBpZiAoY2hpbGROb2RlKSB7XG4gICAgICAgICAgZWxtLmFwcGVuZENoaWxkKGNoaWxkTm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAge1xuICAgICAgaWYgKG5ld1ZOb2RlMi4kdGFnJCA9PT0gXCJzdmdcIikge1xuICAgICAgICBpc1N2Z01vZGUgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoZWxtLnRhZ05hbWUgPT09IFwiZm9yZWlnbk9iamVjdFwiKSB7XG4gICAgICAgIGlzU3ZnTW9kZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGVsbVtcInMtaG5cIl0gPSBob3N0VGFnTmFtZTtcbiAge1xuICAgIGlmIChuZXdWTm9kZTIuJGZsYWdzJCAmICgyIC8qIGlzU2xvdEZhbGxiYWNrICovIHwgMSAvKiBpc1Nsb3RSZWZlcmVuY2UgKi8pKSB7XG4gICAgICBlbG1bXCJzLXNyXCJdID0gdHJ1ZTtcbiAgICAgIGVsbVtcInMtY3JcIl0gPSBjb250ZW50UmVmO1xuICAgICAgZWxtW1wicy1zblwiXSA9IG5ld1ZOb2RlMi4kbmFtZSQgfHwgXCJcIjtcbiAgICAgIGVsbVtcInMtcmZcIl0gPSAoX2EgPSBuZXdWTm9kZTIuJGF0dHJzJCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLnJlZjtcbiAgICAgIHBhdGNoU2xvdE5vZGUoZWxtKTtcbiAgICAgIG9sZFZOb2RlID0gb2xkUGFyZW50Vk5vZGUgJiYgb2xkUGFyZW50Vk5vZGUuJGNoaWxkcmVuJCAmJiBvbGRQYXJlbnRWTm9kZS4kY2hpbGRyZW4kW2NoaWxkSW5kZXhdO1xuICAgICAgaWYgKG9sZFZOb2RlICYmIG9sZFZOb2RlLiR0YWckID09PSBuZXdWTm9kZTIuJHRhZyQgJiYgb2xkUGFyZW50Vk5vZGUuJGVsbSQpIHtcbiAgICAgICAge1xuICAgICAgICAgIHJlbG9jYXRlVG9Ib3N0Um9vdChvbGRQYXJlbnRWTm9kZS4kZWxtJCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgYWRkUmVtb3ZlU2xvdFNjb3BlZENsYXNzKGNvbnRlbnRSZWYsIGVsbSwgbmV3UGFyZW50Vk5vZGUuJGVsbSQsIG9sZFBhcmVudFZOb2RlID09IG51bGwgPyB2b2lkIDAgOiBvbGRQYXJlbnRWTm9kZS4kZWxtJCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBlbG07XG59O1xudmFyIHJlbG9jYXRlVG9Ib3N0Um9vdCA9IHBhcmVudEVsbSA9PiB7XG4gIHBsdC4kZmxhZ3MkIHw9IDEgLyogaXNUbXBEaXNjb25uZWN0ZWQgKi87XG4gIGNvbnN0IGhvc3QgPSBwYXJlbnRFbG0uY2xvc2VzdChob3N0VGFnTmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgaWYgKGhvc3QgIT0gbnVsbCkge1xuICAgIGNvbnN0IGNvbnRlbnRSZWZOb2RlID0gQXJyYXkuZnJvbShob3N0Ll9fY2hpbGROb2RlcyB8fCBob3N0LmNoaWxkTm9kZXMpLmZpbmQocmVmID0+IHJlZltcInMtY3JcIl0pO1xuICAgIGNvbnN0IGNoaWxkTm9kZUFycmF5ID0gQXJyYXkuZnJvbShwYXJlbnRFbG0uX19jaGlsZE5vZGVzIHx8IHBhcmVudEVsbS5jaGlsZE5vZGVzKTtcbiAgICBmb3IgKGNvbnN0IGNoaWxkTm9kZSBvZiBjb250ZW50UmVmTm9kZSA/IGNoaWxkTm9kZUFycmF5LnJldmVyc2UoKSA6IGNoaWxkTm9kZUFycmF5KSB7XG4gICAgICBpZiAoY2hpbGROb2RlW1wicy1zaFwiXSAhPSBudWxsKSB7XG4gICAgICAgIGluc2VydEJlZm9yZShob3N0LCBjaGlsZE5vZGUsIGNvbnRlbnRSZWZOb2RlICE9IG51bGwgPyBjb250ZW50UmVmTm9kZSA6IG51bGwpO1xuICAgICAgICBjaGlsZE5vZGVbXCJzLXNoXCJdID0gdm9pZCAwO1xuICAgICAgICBjaGVja1Nsb3RSZWxvY2F0ZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHBsdC4kZmxhZ3MkICY9IC0yIC8qIGlzVG1wRGlzY29ubmVjdGVkICovO1xufTtcbnZhciBwdXRCYWNrSW5PcmlnaW5hbExvY2F0aW9uID0gKHBhcmVudEVsbSwgcmVjdXJzaXZlKSA9PiB7XG4gIHBsdC4kZmxhZ3MkIHw9IDEgLyogaXNUbXBEaXNjb25uZWN0ZWQgKi87XG4gIGNvbnN0IG9sZFNsb3RDaGlsZE5vZGVzID0gQXJyYXkuZnJvbShwYXJlbnRFbG0uX19jaGlsZE5vZGVzIHx8IHBhcmVudEVsbS5jaGlsZE5vZGVzKTtcbiAgaWYgKHBhcmVudEVsbVtcInMtc3JcIl0gJiYgQlVJTEQuZXhwZXJpbWVudGFsU2xvdEZpeGVzKSB7XG4gICAgbGV0IG5vZGUgPSBwYXJlbnRFbG07XG4gICAgd2hpbGUgKG5vZGUgPSBub2RlLm5leHRTaWJsaW5nKSB7XG4gICAgICBpZiAobm9kZSAmJiBub2RlW1wicy1zblwiXSA9PT0gcGFyZW50RWxtW1wicy1zblwiXSAmJiBub2RlW1wicy1zaFwiXSA9PT0gaG9zdFRhZ05hbWUpIHtcbiAgICAgICAgb2xkU2xvdENoaWxkTm9kZXMucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZm9yIChsZXQgaTIgPSBvbGRTbG90Q2hpbGROb2Rlcy5sZW5ndGggLSAxOyBpMiA+PSAwOyBpMi0tKSB7XG4gICAgY29uc3QgY2hpbGROb2RlID0gb2xkU2xvdENoaWxkTm9kZXNbaTJdO1xuICAgIGlmIChjaGlsZE5vZGVbXCJzLWhuXCJdICE9PSBob3N0VGFnTmFtZSAmJiBjaGlsZE5vZGVbXCJzLW9sXCJdKSB7XG4gICAgICBpbnNlcnRCZWZvcmUocmVmZXJlbmNlTm9kZShjaGlsZE5vZGUpLnBhcmVudE5vZGUsIGNoaWxkTm9kZSwgcmVmZXJlbmNlTm9kZShjaGlsZE5vZGUpKTtcbiAgICAgIGNoaWxkTm9kZVtcInMtb2xcIl0ucmVtb3ZlKCk7XG4gICAgICBjaGlsZE5vZGVbXCJzLW9sXCJdID0gdm9pZCAwO1xuICAgICAgY2hpbGROb2RlW1wicy1zaFwiXSA9IHZvaWQgMDtcbiAgICAgIGNoZWNrU2xvdFJlbG9jYXRlID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHJlY3Vyc2l2ZSkge1xuICAgICAgcHV0QmFja0luT3JpZ2luYWxMb2NhdGlvbihjaGlsZE5vZGUsIHJlY3Vyc2l2ZSk7XG4gICAgfVxuICB9XG4gIHBsdC4kZmxhZ3MkICY9IC0yIC8qIGlzVG1wRGlzY29ubmVjdGVkICovO1xufTtcbnZhciBhZGRWbm9kZXMgPSAocGFyZW50RWxtLCBiZWZvcmUsIHBhcmVudFZOb2RlLCB2bm9kZXMsIHN0YXJ0SWR4LCBlbmRJZHgpID0+IHtcbiAgbGV0IGNvbnRhaW5lckVsbSA9IHBhcmVudEVsbVtcInMtY3JcIl0gJiYgcGFyZW50RWxtW1wicy1jclwiXS5wYXJlbnROb2RlIHx8IHBhcmVudEVsbTtcbiAgbGV0IGNoaWxkTm9kZTtcbiAgaWYgKGNvbnRhaW5lckVsbS5zaGFkb3dSb290ICYmIGNvbnRhaW5lckVsbS50YWdOYW1lID09PSBob3N0VGFnTmFtZSkge1xuICAgIGNvbnRhaW5lckVsbSA9IGNvbnRhaW5lckVsbS5zaGFkb3dSb290O1xuICB9XG4gIGZvciAoOyBzdGFydElkeCA8PSBlbmRJZHg7ICsrc3RhcnRJZHgpIHtcbiAgICBpZiAodm5vZGVzW3N0YXJ0SWR4XSkge1xuICAgICAgY2hpbGROb2RlID0gY3JlYXRlRWxtKG51bGwsIHBhcmVudFZOb2RlLCBzdGFydElkeCk7XG4gICAgICBpZiAoY2hpbGROb2RlKSB7XG4gICAgICAgIHZub2Rlc1tzdGFydElkeF0uJGVsbSQgPSBjaGlsZE5vZGU7XG4gICAgICAgIGluc2VydEJlZm9yZShjb250YWluZXJFbG0sIGNoaWxkTm9kZSwgcmVmZXJlbmNlTm9kZShiZWZvcmUpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG52YXIgcmVtb3ZlVm5vZGVzID0gKHZub2Rlcywgc3RhcnRJZHgsIGVuZElkeCkgPT4ge1xuICBmb3IgKGxldCBpbmRleCA9IHN0YXJ0SWR4OyBpbmRleCA8PSBlbmRJZHg7ICsraW5kZXgpIHtcbiAgICBjb25zdCB2bm9kZSA9IHZub2Rlc1tpbmRleF07XG4gICAgaWYgKHZub2RlKSB7XG4gICAgICBjb25zdCBlbG0gPSB2bm9kZS4kZWxtJDtcbiAgICAgIG51bGxpZnlWTm9kZVJlZnModm5vZGUpO1xuICAgICAgaWYgKGVsbSkge1xuICAgICAgICB7XG4gICAgICAgICAgY2hlY2tTbG90RmFsbGJhY2tWaXNpYmlsaXR5ID0gdHJ1ZTtcbiAgICAgICAgICBpZiAoZWxtW1wicy1vbFwiXSkge1xuICAgICAgICAgICAgZWxtW1wicy1vbFwiXS5yZW1vdmUoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHV0QmFja0luT3JpZ2luYWxMb2NhdGlvbihlbG0sIHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbG0ucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xudmFyIHVwZGF0ZUNoaWxkcmVuID0gKHBhcmVudEVsbSwgb2xkQ2gsIG5ld1ZOb2RlMiwgbmV3Q2gsIGlzSW5pdGlhbFJlbmRlciA9IGZhbHNlKSA9PiB7XG4gIGxldCBvbGRTdGFydElkeCA9IDA7XG4gIGxldCBuZXdTdGFydElkeCA9IDA7XG4gIGxldCBpZHhJbk9sZCA9IDA7XG4gIGxldCBpMiA9IDA7XG4gIGxldCBvbGRFbmRJZHggPSBvbGRDaC5sZW5ndGggLSAxO1xuICBsZXQgb2xkU3RhcnRWbm9kZSA9IG9sZENoWzBdO1xuICBsZXQgb2xkRW5kVm5vZGUgPSBvbGRDaFtvbGRFbmRJZHhdO1xuICBsZXQgbmV3RW5kSWR4ID0gbmV3Q2gubGVuZ3RoIC0gMTtcbiAgbGV0IG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFswXTtcbiAgbGV0IG5ld0VuZFZub2RlID0gbmV3Q2hbbmV3RW5kSWR4XTtcbiAgbGV0IG5vZGU7XG4gIGxldCBlbG1Ub01vdmU7XG4gIHdoaWxlIChvbGRTdGFydElkeCA8PSBvbGRFbmRJZHggJiYgbmV3U3RhcnRJZHggPD0gbmV3RW5kSWR4KSB7XG4gICAgaWYgKG9sZFN0YXJ0Vm5vZGUgPT0gbnVsbCkge1xuICAgICAgb2xkU3RhcnRWbm9kZSA9IG9sZENoWysrb2xkU3RhcnRJZHhdO1xuICAgIH0gZWxzZSBpZiAob2xkRW5kVm5vZGUgPT0gbnVsbCkge1xuICAgICAgb2xkRW5kVm5vZGUgPSBvbGRDaFstLW9sZEVuZElkeF07XG4gICAgfSBlbHNlIGlmIChuZXdTdGFydFZub2RlID09IG51bGwpIHtcbiAgICAgIG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFsrK25ld1N0YXJ0SWR4XTtcbiAgICB9IGVsc2UgaWYgKG5ld0VuZFZub2RlID09IG51bGwpIHtcbiAgICAgIG5ld0VuZFZub2RlID0gbmV3Q2hbLS1uZXdFbmRJZHhdO1xuICAgIH0gZWxzZSBpZiAoaXNTYW1lVm5vZGUob2xkU3RhcnRWbm9kZSwgbmV3U3RhcnRWbm9kZSwgaXNJbml0aWFsUmVuZGVyKSkge1xuICAgICAgcGF0Y2gob2xkU3RhcnRWbm9kZSwgbmV3U3RhcnRWbm9kZSwgaXNJbml0aWFsUmVuZGVyKTtcbiAgICAgIG9sZFN0YXJ0Vm5vZGUgPSBvbGRDaFsrK29sZFN0YXJ0SWR4XTtcbiAgICAgIG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFsrK25ld1N0YXJ0SWR4XTtcbiAgICB9IGVsc2UgaWYgKGlzU2FtZVZub2RlKG9sZEVuZFZub2RlLCBuZXdFbmRWbm9kZSwgaXNJbml0aWFsUmVuZGVyKSkge1xuICAgICAgcGF0Y2gob2xkRW5kVm5vZGUsIG5ld0VuZFZub2RlLCBpc0luaXRpYWxSZW5kZXIpO1xuICAgICAgb2xkRW5kVm5vZGUgPSBvbGRDaFstLW9sZEVuZElkeF07XG4gICAgICBuZXdFbmRWbm9kZSA9IG5ld0NoWy0tbmV3RW5kSWR4XTtcbiAgICB9IGVsc2UgaWYgKGlzU2FtZVZub2RlKG9sZFN0YXJ0Vm5vZGUsIG5ld0VuZFZub2RlLCBpc0luaXRpYWxSZW5kZXIpKSB7XG4gICAgICBpZiAob2xkU3RhcnRWbm9kZS4kdGFnJCA9PT0gXCJzbG90XCIgfHwgbmV3RW5kVm5vZGUuJHRhZyQgPT09IFwic2xvdFwiKSB7XG4gICAgICAgIHB1dEJhY2tJbk9yaWdpbmFsTG9jYXRpb24ob2xkU3RhcnRWbm9kZS4kZWxtJC5wYXJlbnROb2RlLCBmYWxzZSk7XG4gICAgICB9XG4gICAgICBwYXRjaChvbGRTdGFydFZub2RlLCBuZXdFbmRWbm9kZSwgaXNJbml0aWFsUmVuZGVyKTtcbiAgICAgIGluc2VydEJlZm9yZShwYXJlbnRFbG0sIG9sZFN0YXJ0Vm5vZGUuJGVsbSQsIG9sZEVuZFZub2RlLiRlbG0kLm5leHRTaWJsaW5nKTtcbiAgICAgIG9sZFN0YXJ0Vm5vZGUgPSBvbGRDaFsrK29sZFN0YXJ0SWR4XTtcbiAgICAgIG5ld0VuZFZub2RlID0gbmV3Q2hbLS1uZXdFbmRJZHhdO1xuICAgIH0gZWxzZSBpZiAoaXNTYW1lVm5vZGUob2xkRW5kVm5vZGUsIG5ld1N0YXJ0Vm5vZGUsIGlzSW5pdGlhbFJlbmRlcikpIHtcbiAgICAgIGlmIChvbGRTdGFydFZub2RlLiR0YWckID09PSBcInNsb3RcIiB8fCBuZXdFbmRWbm9kZS4kdGFnJCA9PT0gXCJzbG90XCIpIHtcbiAgICAgICAgcHV0QmFja0luT3JpZ2luYWxMb2NhdGlvbihvbGRFbmRWbm9kZS4kZWxtJC5wYXJlbnROb2RlLCBmYWxzZSk7XG4gICAgICB9XG4gICAgICBwYXRjaChvbGRFbmRWbm9kZSwgbmV3U3RhcnRWbm9kZSwgaXNJbml0aWFsUmVuZGVyKTtcbiAgICAgIGluc2VydEJlZm9yZShwYXJlbnRFbG0sIG9sZEVuZFZub2RlLiRlbG0kLCBvbGRTdGFydFZub2RlLiRlbG0kKTtcbiAgICAgIG9sZEVuZFZub2RlID0gb2xkQ2hbLS1vbGRFbmRJZHhdO1xuICAgICAgbmV3U3RhcnRWbm9kZSA9IG5ld0NoWysrbmV3U3RhcnRJZHhdO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZHhJbk9sZCA9IC0xO1xuICAgICAge1xuICAgICAgICBmb3IgKGkyID0gb2xkU3RhcnRJZHg7IGkyIDw9IG9sZEVuZElkeDsgKytpMikge1xuICAgICAgICAgIGlmIChvbGRDaFtpMl0gJiYgb2xkQ2hbaTJdLiRrZXkkICE9PSBudWxsICYmIG9sZENoW2kyXS4ka2V5JCA9PT0gbmV3U3RhcnRWbm9kZS4ka2V5JCkge1xuICAgICAgICAgICAgaWR4SW5PbGQgPSBpMjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGlkeEluT2xkID49IDApIHtcbiAgICAgICAgZWxtVG9Nb3ZlID0gb2xkQ2hbaWR4SW5PbGRdO1xuICAgICAgICBpZiAoZWxtVG9Nb3ZlLiR0YWckICE9PSBuZXdTdGFydFZub2RlLiR0YWckKSB7XG4gICAgICAgICAgbm9kZSA9IGNyZWF0ZUVsbShvbGRDaCAmJiBvbGRDaFtuZXdTdGFydElkeF0sIG5ld1ZOb2RlMiwgaWR4SW5PbGQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhdGNoKGVsbVRvTW92ZSwgbmV3U3RhcnRWbm9kZSwgaXNJbml0aWFsUmVuZGVyKTtcbiAgICAgICAgICBvbGRDaFtpZHhJbk9sZF0gPSB2b2lkIDA7XG4gICAgICAgICAgbm9kZSA9IGVsbVRvTW92ZS4kZWxtJDtcbiAgICAgICAgfVxuICAgICAgICBuZXdTdGFydFZub2RlID0gbmV3Q2hbKytuZXdTdGFydElkeF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlID0gY3JlYXRlRWxtKG9sZENoICYmIG9sZENoW25ld1N0YXJ0SWR4XSwgbmV3Vk5vZGUyLCBuZXdTdGFydElkeCk7XG4gICAgICAgIG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFsrK25ld1N0YXJ0SWR4XTtcbiAgICAgIH1cbiAgICAgIGlmIChub2RlKSB7XG4gICAgICAgIHtcbiAgICAgICAgICBpbnNlcnRCZWZvcmUocmVmZXJlbmNlTm9kZShvbGRTdGFydFZub2RlLiRlbG0kKS5wYXJlbnROb2RlLCBub2RlLCByZWZlcmVuY2VOb2RlKG9sZFN0YXJ0Vm5vZGUuJGVsbSQpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAob2xkU3RhcnRJZHggPiBvbGRFbmRJZHgpIHtcbiAgICBhZGRWbm9kZXMocGFyZW50RWxtLCBuZXdDaFtuZXdFbmRJZHggKyAxXSA9PSBudWxsID8gbnVsbCA6IG5ld0NoW25ld0VuZElkeCArIDFdLiRlbG0kLCBuZXdWTm9kZTIsIG5ld0NoLCBuZXdTdGFydElkeCwgbmV3RW5kSWR4KTtcbiAgfSBlbHNlIGlmIChuZXdTdGFydElkeCA+IG5ld0VuZElkeCkge1xuICAgIHJlbW92ZVZub2RlcyhvbGRDaCwgb2xkU3RhcnRJZHgsIG9sZEVuZElkeCk7XG4gIH1cbn07XG52YXIgaXNTYW1lVm5vZGUgPSAobGVmdFZOb2RlLCByaWdodFZOb2RlLCBpc0luaXRpYWxSZW5kZXIgPSBmYWxzZSkgPT4ge1xuICBpZiAobGVmdFZOb2RlLiR0YWckID09PSByaWdodFZOb2RlLiR0YWckKSB7XG4gICAgaWYgKGxlZnRWTm9kZS4kdGFnJCA9PT0gXCJzbG90XCIpIHtcbiAgICAgIHJldHVybiBsZWZ0Vk5vZGUuJG5hbWUkID09PSByaWdodFZOb2RlLiRuYW1lJDtcbiAgICB9XG4gICAgaWYgKCFpc0luaXRpYWxSZW5kZXIpIHtcbiAgICAgIHJldHVybiBsZWZ0Vk5vZGUuJGtleSQgPT09IHJpZ2h0Vk5vZGUuJGtleSQ7XG4gICAgfVxuICAgIGlmIChpc0luaXRpYWxSZW5kZXIgJiYgIWxlZnRWTm9kZS4ka2V5JCAmJiByaWdodFZOb2RlLiRrZXkkKSB7XG4gICAgICBsZWZ0Vk5vZGUuJGtleSQgPSByaWdodFZOb2RlLiRrZXkkO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xudmFyIHJlZmVyZW5jZU5vZGUgPSBub2RlID0+IG5vZGUgJiYgbm9kZVtcInMtb2xcIl0gfHwgbm9kZTtcbnZhciBwYXRjaCA9IChvbGRWTm9kZSwgbmV3Vk5vZGUyLCBpc0luaXRpYWxSZW5kZXIgPSBmYWxzZSkgPT4ge1xuICBjb25zdCBlbG0gPSBuZXdWTm9kZTIuJGVsbSQgPSBvbGRWTm9kZS4kZWxtJDtcbiAgY29uc3Qgb2xkQ2hpbGRyZW4gPSBvbGRWTm9kZS4kY2hpbGRyZW4kO1xuICBjb25zdCBuZXdDaGlsZHJlbiA9IG5ld1ZOb2RlMi4kY2hpbGRyZW4kO1xuICBjb25zdCB0YWcgPSBuZXdWTm9kZTIuJHRhZyQ7XG4gIGNvbnN0IHRleHQgPSBuZXdWTm9kZTIuJHRleHQkO1xuICBsZXQgZGVmYXVsdEhvbGRlcjtcbiAgaWYgKHRleHQgPT09IG51bGwpIHtcbiAgICB7XG4gICAgICBpc1N2Z01vZGUgPSB0YWcgPT09IFwic3ZnXCIgPyB0cnVlIDogdGFnID09PSBcImZvcmVpZ25PYmplY3RcIiA/IGZhbHNlIDogaXNTdmdNb2RlO1xuICAgIH1cbiAgICB7XG4gICAgICBpZiAodGFnID09PSBcInNsb3RcIiAmJiAhdXNlTmF0aXZlU2hhZG93RG9tKSB7XG4gICAgICAgIGlmIChvbGRWTm9kZS4kbmFtZSQgIT09IG5ld1ZOb2RlMi4kbmFtZSQpIHtcbiAgICAgICAgICBuZXdWTm9kZTIuJGVsbSRbXCJzLXNuXCJdID0gbmV3Vk5vZGUyLiRuYW1lJCB8fCBcIlwiO1xuICAgICAgICAgIHJlbG9jYXRlVG9Ib3N0Um9vdChuZXdWTm9kZTIuJGVsbSQucGFyZW50RWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHVwZGF0ZUVsZW1lbnQob2xkVk5vZGUsIG5ld1ZOb2RlMiwgaXNTdmdNb2RlLCBpc0luaXRpYWxSZW5kZXIpO1xuICAgIH1cbiAgICBpZiAob2xkQ2hpbGRyZW4gIT09IG51bGwgJiYgbmV3Q2hpbGRyZW4gIT09IG51bGwpIHtcbiAgICAgIHVwZGF0ZUNoaWxkcmVuKGVsbSwgb2xkQ2hpbGRyZW4sIG5ld1ZOb2RlMiwgbmV3Q2hpbGRyZW4sIGlzSW5pdGlhbFJlbmRlcik7XG4gICAgfSBlbHNlIGlmIChuZXdDaGlsZHJlbiAhPT0gbnVsbCkge1xuICAgICAgaWYgKG9sZFZOb2RlLiR0ZXh0JCAhPT0gbnVsbCkge1xuICAgICAgICBlbG0udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgfVxuICAgICAgYWRkVm5vZGVzKGVsbSwgbnVsbCwgbmV3Vk5vZGUyLCBuZXdDaGlsZHJlbiwgMCwgbmV3Q2hpbGRyZW4ubGVuZ3RoIC0gMSk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAvLyBkb24ndCBkbyB0aGlzIG9uIGluaXRpYWwgcmVuZGVyIGFzIGl0IGNhbiBjYXVzZSBub24taHlkcmF0ZWQgY29udGVudCB0byBiZSByZW1vdmVkXG4gICAgIWlzSW5pdGlhbFJlbmRlciAmJiBCVUlMRC51cGRhdGFibGUgJiYgb2xkQ2hpbGRyZW4gIT09IG51bGwpIHtcbiAgICAgIHJlbW92ZVZub2RlcyhvbGRDaGlsZHJlbiwgMCwgb2xkQ2hpbGRyZW4ubGVuZ3RoIC0gMSk7XG4gICAgfSBlbHNlIGlmIChpc0luaXRpYWxSZW5kZXIgJiYgQlVJTEQudXBkYXRhYmxlICYmIG9sZENoaWxkcmVuICE9PSBudWxsICYmIG5ld0NoaWxkcmVuID09PSBudWxsKSB7XG4gICAgICBuZXdWTm9kZTIuJGNoaWxkcmVuJCA9IG9sZENoaWxkcmVuO1xuICAgIH1cbiAgICBpZiAoaXNTdmdNb2RlICYmIHRhZyA9PT0gXCJzdmdcIikge1xuICAgICAgaXNTdmdNb2RlID0gZmFsc2U7XG4gICAgfVxuICB9IGVsc2UgaWYgKGRlZmF1bHRIb2xkZXIgPSBlbG1bXCJzLWNyXCJdKSB7XG4gICAgZGVmYXVsdEhvbGRlci5wYXJlbnROb2RlLnRleHRDb250ZW50ID0gdGV4dDtcbiAgfSBlbHNlIGlmIChvbGRWTm9kZS4kdGV4dCQgIT09IHRleHQpIHtcbiAgICBlbG0uZGF0YSA9IHRleHQ7XG4gIH1cbn07XG52YXIgcmVsb2NhdGVOb2RlcyA9IFtdO1xudmFyIG1hcmtTbG90Q29udGVudEZvclJlbG9jYXRpb24gPSBlbG0gPT4ge1xuICBsZXQgbm9kZTtcbiAgbGV0IGhvc3RDb250ZW50Tm9kZXM7XG4gIGxldCBqO1xuICBjb25zdCBjaGlsZHJlbiA9IGVsbS5fX2NoaWxkTm9kZXMgfHwgZWxtLmNoaWxkTm9kZXM7XG4gIGZvciAoY29uc3QgY2hpbGROb2RlIG9mIGNoaWxkcmVuKSB7XG4gICAgaWYgKGNoaWxkTm9kZVtcInMtc3JcIl0gJiYgKG5vZGUgPSBjaGlsZE5vZGVbXCJzLWNyXCJdKSAmJiBub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgIGhvc3RDb250ZW50Tm9kZXMgPSBub2RlLnBhcmVudE5vZGUuX19jaGlsZE5vZGVzIHx8IG5vZGUucGFyZW50Tm9kZS5jaGlsZE5vZGVzO1xuICAgICAgY29uc3Qgc2xvdE5hbWUgPSBjaGlsZE5vZGVbXCJzLXNuXCJdO1xuICAgICAgZm9yIChqID0gaG9zdENvbnRlbnROb2Rlcy5sZW5ndGggLSAxOyBqID49IDA7IGotLSkge1xuICAgICAgICBub2RlID0gaG9zdENvbnRlbnROb2Rlc1tqXTtcbiAgICAgICAgaWYgKCFub2RlW1wicy1jblwiXSAmJiAhbm9kZVtcInMtbnJcIl0gJiYgbm9kZVtcInMtaG5cIl0gIT09IGNoaWxkTm9kZVtcInMtaG5cIl0gJiYgKCFub2RlW1wicy1zaFwiXSB8fCBub2RlW1wicy1zaFwiXSAhPT0gY2hpbGROb2RlW1wicy1oblwiXSkpIHtcbiAgICAgICAgICBpZiAoaXNOb2RlTG9jYXRlZEluU2xvdChub2RlLCBzbG90TmFtZSkpIHtcbiAgICAgICAgICAgIGxldCByZWxvY2F0ZU5vZGVEYXRhID0gcmVsb2NhdGVOb2Rlcy5maW5kKHIgPT4gci4kbm9kZVRvUmVsb2NhdGUkID09PSBub2RlKTtcbiAgICAgICAgICAgIGNoZWNrU2xvdEZhbGxiYWNrVmlzaWJpbGl0eSA9IHRydWU7XG4gICAgICAgICAgICBub2RlW1wicy1zblwiXSA9IG5vZGVbXCJzLXNuXCJdIHx8IHNsb3ROYW1lO1xuICAgICAgICAgICAgaWYgKHJlbG9jYXRlTm9kZURhdGEpIHtcbiAgICAgICAgICAgICAgcmVsb2NhdGVOb2RlRGF0YS4kbm9kZVRvUmVsb2NhdGUkW1wicy1zaFwiXSA9IGNoaWxkTm9kZVtcInMtaG5cIl07XG4gICAgICAgICAgICAgIHJlbG9jYXRlTm9kZURhdGEuJHNsb3RSZWZOb2RlJCA9IGNoaWxkTm9kZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG5vZGVbXCJzLXNoXCJdID0gY2hpbGROb2RlW1wicy1oblwiXTtcbiAgICAgICAgICAgICAgcmVsb2NhdGVOb2Rlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAkc2xvdFJlZk5vZGUkOiBjaGlsZE5vZGUsXG4gICAgICAgICAgICAgICAgJG5vZGVUb1JlbG9jYXRlJDogbm9kZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChub2RlW1wicy1zclwiXSkge1xuICAgICAgICAgICAgICByZWxvY2F0ZU5vZGVzLm1hcChyZWxvY2F0ZU5vZGUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpc05vZGVMb2NhdGVkSW5TbG90KHJlbG9jYXRlTm9kZS4kbm9kZVRvUmVsb2NhdGUkLCBub2RlW1wicy1zblwiXSkpIHtcbiAgICAgICAgICAgICAgICAgIHJlbG9jYXRlTm9kZURhdGEgPSByZWxvY2F0ZU5vZGVzLmZpbmQociA9PiByLiRub2RlVG9SZWxvY2F0ZSQgPT09IG5vZGUpO1xuICAgICAgICAgICAgICAgICAgaWYgKHJlbG9jYXRlTm9kZURhdGEgJiYgIXJlbG9jYXRlTm9kZS4kc2xvdFJlZk5vZGUkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbG9jYXRlTm9kZS4kc2xvdFJlZk5vZGUkID0gcmVsb2NhdGVOb2RlRGF0YS4kc2xvdFJlZk5vZGUkO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmICghcmVsb2NhdGVOb2Rlcy5zb21lKHIgPT4gci4kbm9kZVRvUmVsb2NhdGUkID09PSBub2RlKSkge1xuICAgICAgICAgICAgcmVsb2NhdGVOb2Rlcy5wdXNoKHtcbiAgICAgICAgICAgICAgJG5vZGVUb1JlbG9jYXRlJDogbm9kZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjaGlsZE5vZGUubm9kZVR5cGUgPT09IDEgLyogRWxlbWVudE5vZGUgKi8pIHtcbiAgICAgIG1hcmtTbG90Q29udGVudEZvclJlbG9jYXRpb24oY2hpbGROb2RlKTtcbiAgICB9XG4gIH1cbn07XG52YXIgbnVsbGlmeVZOb2RlUmVmcyA9IHZOb2RlID0+IHtcbiAge1xuICAgIHZOb2RlLiRhdHRycyQgJiYgdk5vZGUuJGF0dHJzJC5yZWYgJiYgdk5vZGUuJGF0dHJzJC5yZWYobnVsbCk7XG4gICAgdk5vZGUuJGNoaWxkcmVuJCAmJiB2Tm9kZS4kY2hpbGRyZW4kLm1hcChudWxsaWZ5Vk5vZGVSZWZzKTtcbiAgfVxufTtcbnZhciBpbnNlcnRCZWZvcmUgPSAocGFyZW50LCBuZXdOb2RlLCByZWZlcmVuY2UpID0+IHtcbiAgaWYgKHR5cGVvZiBuZXdOb2RlW1wicy1zblwiXSA9PT0gXCJzdHJpbmdcIiAmJiAhIW5ld05vZGVbXCJzLXNyXCJdICYmICEhbmV3Tm9kZVtcInMtY3JcIl0pIHtcbiAgICBhZGRSZW1vdmVTbG90U2NvcGVkQ2xhc3MobmV3Tm9kZVtcInMtY3JcIl0sIG5ld05vZGUsIHBhcmVudCwgbmV3Tm9kZS5wYXJlbnRFbGVtZW50KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgbmV3Tm9kZVtcInMtc25cIl0gPT09IFwic3RyaW5nXCIpIHtcbiAgICBpZiAocGFyZW50LmdldFJvb3ROb2RlKCkubm9kZVR5cGUgIT09IDExIC8qIERPQ1VNRU5UX0ZSQUdNRU5UX05PREUgKi8pIHtcbiAgICAgIHBhdGNoUGFyZW50Tm9kZShuZXdOb2RlKTtcbiAgICB9XG4gICAgcGFyZW50Lmluc2VydEJlZm9yZShuZXdOb2RlLCByZWZlcmVuY2UpO1xuICAgIGNvbnN0IHtcbiAgICAgIHNsb3ROb2RlXG4gICAgfSA9IGZpbmRTbG90RnJvbVNsb3R0ZWROb2RlKG5ld05vZGUpO1xuICAgIGlmIChzbG90Tm9kZSkgZGlzcGF0Y2hTbG90Q2hhbmdlRXZlbnQoc2xvdE5vZGUpO1xuICAgIHJldHVybiBuZXdOb2RlO1xuICB9XG4gIGlmIChwYXJlbnQuX19pbnNlcnRCZWZvcmUpIHtcbiAgICByZXR1cm4gcGFyZW50Ll9faW5zZXJ0QmVmb3JlKG5ld05vZGUsIHJlZmVyZW5jZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHBhcmVudCA9PSBudWxsID8gdm9pZCAwIDogcGFyZW50Lmluc2VydEJlZm9yZShuZXdOb2RlLCByZWZlcmVuY2UpO1xuICB9XG59O1xuZnVuY3Rpb24gYWRkUmVtb3ZlU2xvdFNjb3BlZENsYXNzKHJlZmVyZW5jZSwgc2xvdE5vZGUsIG5ld1BhcmVudCwgb2xkUGFyZW50KSB7XG4gIHZhciBfYSwgX2I7XG4gIGxldCBzY29wZUlkMjtcbiAgaWYgKHJlZmVyZW5jZSAmJiB0eXBlb2Ygc2xvdE5vZGVbXCJzLXNuXCJdID09PSBcInN0cmluZ1wiICYmICEhc2xvdE5vZGVbXCJzLXNyXCJdICYmIHJlZmVyZW5jZS5wYXJlbnROb2RlICYmIHJlZmVyZW5jZS5wYXJlbnROb2RlW1wicy1zY1wiXSAmJiAoc2NvcGVJZDIgPSBzbG90Tm9kZVtcInMtc2lcIl0gfHwgcmVmZXJlbmNlLnBhcmVudE5vZGVbXCJzLXNjXCJdKSkge1xuICAgIGNvbnN0IHNjb3BlTmFtZSA9IHNsb3ROb2RlW1wicy1zblwiXTtcbiAgICBjb25zdCBob3N0TmFtZSA9IHNsb3ROb2RlW1wicy1oblwiXTtcbiAgICAoX2EgPSBuZXdQYXJlbnQuY2xhc3NMaXN0KSA9PSBudWxsID8gdm9pZCAwIDogX2EuYWRkKHNjb3BlSWQyICsgXCItc1wiKTtcbiAgICBpZiAob2xkUGFyZW50ICYmICgoX2IgPSBvbGRQYXJlbnQuY2xhc3NMaXN0KSA9PSBudWxsID8gdm9pZCAwIDogX2IuY29udGFpbnMoc2NvcGVJZDIgKyBcIi1zXCIpKSkge1xuICAgICAgbGV0IGNoaWxkID0gKG9sZFBhcmVudC5fX2NoaWxkTm9kZXMgfHwgb2xkUGFyZW50LmNoaWxkTm9kZXMpWzBdO1xuICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgaWYgKGNoaWxkW1wicy1zblwiXSAhPT0gc2NvcGVOYW1lICYmIGNoaWxkW1wicy1oblwiXSA9PT0gaG9zdE5hbWUgJiYgISFjaGlsZFtcInMtc3JcIl0pIHtcbiAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICAgIH1cbiAgICAgIGlmICghZm91bmQpIG9sZFBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKHNjb3BlSWQyICsgXCItc1wiKTtcbiAgICB9XG4gIH1cbn1cbnZhciByZW5kZXJWZG9tID0gKGhvc3RSZWYsIHJlbmRlckZuUmVzdWx0cywgaXNJbml0aWFsTG9hZCA9IGZhbHNlKSA9PiB7XG4gIHZhciBfYSwgX2IsIF9jLCBfZCwgX2U7XG4gIGNvbnN0IGhvc3RFbG0gPSBob3N0UmVmLiRob3N0RWxlbWVudCQ7XG4gIGNvbnN0IGNtcE1ldGEgPSBob3N0UmVmLiRjbXBNZXRhJDtcbiAgY29uc3Qgb2xkVk5vZGUgPSBob3N0UmVmLiR2bm9kZSQgfHwgbmV3Vk5vZGUobnVsbCwgbnVsbCk7XG4gIGNvbnN0IGlzSG9zdEVsZW1lbnQgPSBpc0hvc3QocmVuZGVyRm5SZXN1bHRzKTtcbiAgY29uc3Qgcm9vdFZub2RlID0gaXNIb3N0RWxlbWVudCA/IHJlbmRlckZuUmVzdWx0cyA6IGgobnVsbCwgbnVsbCwgcmVuZGVyRm5SZXN1bHRzKTtcbiAgaG9zdFRhZ05hbWUgPSBob3N0RWxtLnRhZ05hbWU7XG4gIGlmIChjbXBNZXRhLiRhdHRyc1RvUmVmbGVjdCQpIHtcbiAgICByb290Vm5vZGUuJGF0dHJzJCA9IHJvb3RWbm9kZS4kYXR0cnMkIHx8IHt9O1xuICAgIGNtcE1ldGEuJGF0dHJzVG9SZWZsZWN0JC5tYXAoKFtwcm9wTmFtZSwgYXR0cmlidXRlXSkgPT4gcm9vdFZub2RlLiRhdHRycyRbYXR0cmlidXRlXSA9IGhvc3RFbG1bcHJvcE5hbWVdKTtcbiAgfVxuICBpZiAoaXNJbml0aWFsTG9hZCAmJiByb290Vm5vZGUuJGF0dHJzJCkge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHJvb3RWbm9kZS4kYXR0cnMkKSkge1xuICAgICAgaWYgKGhvc3RFbG0uaGFzQXR0cmlidXRlKGtleSkgJiYgIVtcImtleVwiLCBcInJlZlwiLCBcInN0eWxlXCIsIFwiY2xhc3NcIl0uaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICByb290Vm5vZGUuJGF0dHJzJFtrZXldID0gaG9zdEVsbVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByb290Vm5vZGUuJHRhZyQgPSBudWxsO1xuICByb290Vm5vZGUuJGZsYWdzJCB8PSA0IC8qIGlzSG9zdCAqLztcbiAgaG9zdFJlZi4kdm5vZGUkID0gcm9vdFZub2RlO1xuICByb290Vm5vZGUuJGVsbSQgPSBvbGRWTm9kZS4kZWxtJCA9IGhvc3RFbG0uc2hhZG93Um9vdCB8fCBob3N0RWxtO1xuICB7XG4gICAgc2NvcGVJZCA9IGhvc3RFbG1bXCJzLXNjXCJdO1xuICB9XG4gIHVzZU5hdGl2ZVNoYWRvd0RvbSA9ICEhKGNtcE1ldGEuJGZsYWdzJCAmIDEgLyogc2hhZG93RG9tRW5jYXBzdWxhdGlvbiAqLykgJiYgIShjbXBNZXRhLiRmbGFncyQgJiAxMjggLyogc2hhZG93TmVlZHNTY29wZWRDc3MgKi8pO1xuICB7XG4gICAgY29udGVudFJlZiA9IGhvc3RFbG1bXCJzLWNyXCJdO1xuICAgIGNoZWNrU2xvdEZhbGxiYWNrVmlzaWJpbGl0eSA9IGZhbHNlO1xuICB9XG4gIHBhdGNoKG9sZFZOb2RlLCByb290Vm5vZGUsIGlzSW5pdGlhbExvYWQpO1xuICB7XG4gICAgcGx0LiRmbGFncyQgfD0gMSAvKiBpc1RtcERpc2Nvbm5lY3RlZCAqLztcbiAgICBpZiAoY2hlY2tTbG90UmVsb2NhdGUpIHtcbiAgICAgIG1hcmtTbG90Q29udGVudEZvclJlbG9jYXRpb24ocm9vdFZub2RlLiRlbG0kKTtcbiAgICAgIGZvciAoY29uc3QgcmVsb2NhdGVEYXRhIG9mIHJlbG9jYXRlTm9kZXMpIHtcbiAgICAgICAgY29uc3Qgbm9kZVRvUmVsb2NhdGUgPSByZWxvY2F0ZURhdGEuJG5vZGVUb1JlbG9jYXRlJDtcbiAgICAgICAgaWYgKCFub2RlVG9SZWxvY2F0ZVtcInMtb2xcIl0gJiYgd2luLmRvY3VtZW50KSB7XG4gICAgICAgICAgY29uc3Qgb3JnTG9jYXRpb25Ob2RlID0gd2luLmRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpO1xuICAgICAgICAgIG9yZ0xvY2F0aW9uTm9kZVtcInMtbnJcIl0gPSBub2RlVG9SZWxvY2F0ZTtcbiAgICAgICAgICBpbnNlcnRCZWZvcmUobm9kZVRvUmVsb2NhdGUucGFyZW50Tm9kZSwgbm9kZVRvUmVsb2NhdGVbXCJzLW9sXCJdID0gb3JnTG9jYXRpb25Ob2RlLCBub2RlVG9SZWxvY2F0ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3QgcmVsb2NhdGVEYXRhIG9mIHJlbG9jYXRlTm9kZXMpIHtcbiAgICAgICAgY29uc3Qgbm9kZVRvUmVsb2NhdGUgPSByZWxvY2F0ZURhdGEuJG5vZGVUb1JlbG9jYXRlJDtcbiAgICAgICAgY29uc3Qgc2xvdFJlZk5vZGUgPSByZWxvY2F0ZURhdGEuJHNsb3RSZWZOb2RlJDtcbiAgICAgICAgaWYgKHNsb3RSZWZOb2RlKSB7XG4gICAgICAgICAgY29uc3QgcGFyZW50Tm9kZVJlZiA9IHNsb3RSZWZOb2RlLnBhcmVudE5vZGU7XG4gICAgICAgICAgbGV0IGluc2VydEJlZm9yZU5vZGUgPSBzbG90UmVmTm9kZS5uZXh0U2libGluZztcbiAgICAgICAgICBpZiAoaW5zZXJ0QmVmb3JlTm9kZSAmJiBpbnNlcnRCZWZvcmVOb2RlLm5vZGVUeXBlID09PSAxIC8qIEVsZW1lbnROb2RlICovKSB7XG4gICAgICAgICAgICBsZXQgb3JnTG9jYXRpb25Ob2RlID0gKF9hID0gbm9kZVRvUmVsb2NhdGVbXCJzLW9sXCJdKSA9PSBudWxsID8gdm9pZCAwIDogX2EucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICAgICAgd2hpbGUgKG9yZ0xvY2F0aW9uTm9kZSkge1xuICAgICAgICAgICAgICBsZXQgcmVmTm9kZSA9IChfYiA9IG9yZ0xvY2F0aW9uTm9kZVtcInMtbnJcIl0pICE9IG51bGwgPyBfYiA6IG51bGw7XG4gICAgICAgICAgICAgIGlmIChyZWZOb2RlICYmIHJlZk5vZGVbXCJzLXNuXCJdID09PSBub2RlVG9SZWxvY2F0ZVtcInMtc25cIl0gJiYgcGFyZW50Tm9kZVJlZiA9PT0gKHJlZk5vZGUuX19wYXJlbnROb2RlIHx8IHJlZk5vZGUucGFyZW50Tm9kZSkpIHtcbiAgICAgICAgICAgICAgICByZWZOb2RlID0gcmVmTm9kZS5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICB3aGlsZSAocmVmTm9kZSA9PT0gbm9kZVRvUmVsb2NhdGUgfHwgKHJlZk5vZGUgPT0gbnVsbCA/IHZvaWQgMCA6IHJlZk5vZGVbXCJzLXNyXCJdKSkge1xuICAgICAgICAgICAgICAgICAgcmVmTm9kZSA9IHJlZk5vZGUgPT0gbnVsbCA/IHZvaWQgMCA6IHJlZk5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghcmVmTm9kZSB8fCAhcmVmTm9kZVtcInMtbnJcIl0pIHtcbiAgICAgICAgICAgICAgICAgIGluc2VydEJlZm9yZU5vZGUgPSByZWZOb2RlO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG9yZ0xvY2F0aW9uTm9kZSA9IG9yZ0xvY2F0aW9uTm9kZS5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHBhcmVudCA9IG5vZGVUb1JlbG9jYXRlLl9fcGFyZW50Tm9kZSB8fCBub2RlVG9SZWxvY2F0ZS5wYXJlbnROb2RlO1xuICAgICAgICAgIGNvbnN0IG5leHRTaWJsaW5nID0gbm9kZVRvUmVsb2NhdGUuX19uZXh0U2libGluZyB8fCBub2RlVG9SZWxvY2F0ZS5uZXh0U2libGluZztcbiAgICAgICAgICBpZiAoIWluc2VydEJlZm9yZU5vZGUgJiYgcGFyZW50Tm9kZVJlZiAhPT0gcGFyZW50IHx8IG5leHRTaWJsaW5nICE9PSBpbnNlcnRCZWZvcmVOb2RlKSB7XG4gICAgICAgICAgICBpZiAobm9kZVRvUmVsb2NhdGUgIT09IGluc2VydEJlZm9yZU5vZGUpIHtcbiAgICAgICAgICAgICAgaW5zZXJ0QmVmb3JlKHBhcmVudE5vZGVSZWYsIG5vZGVUb1JlbG9jYXRlLCBpbnNlcnRCZWZvcmVOb2RlKTtcbiAgICAgICAgICAgICAgaWYgKG5vZGVUb1JlbG9jYXRlLm5vZGVUeXBlID09PSAxIC8qIEVsZW1lbnROb2RlICovICYmIG5vZGVUb1JlbG9jYXRlLnRhZ05hbWUgIT09IFwiU0xPVC1GQlwiKSB7XG4gICAgICAgICAgICAgICAgbm9kZVRvUmVsb2NhdGUuaGlkZGVuID0gKF9jID0gbm9kZVRvUmVsb2NhdGVbXCJzLWloXCJdKSAhPSBudWxsID8gX2MgOiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBub2RlVG9SZWxvY2F0ZSAmJiB0eXBlb2Ygc2xvdFJlZk5vZGVbXCJzLXJmXCJdID09PSBcImZ1bmN0aW9uXCIgJiYgc2xvdFJlZk5vZGVbXCJzLXJmXCJdKHNsb3RSZWZOb2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAobm9kZVRvUmVsb2NhdGUubm9kZVR5cGUgPT09IDEgLyogRWxlbWVudE5vZGUgKi8pIHtcbiAgICAgICAgICAgIGlmIChpc0luaXRpYWxMb2FkKSB7XG4gICAgICAgICAgICAgIG5vZGVUb1JlbG9jYXRlW1wicy1paFwiXSA9IChfZCA9IG5vZGVUb1JlbG9jYXRlLmhpZGRlbikgIT0gbnVsbCA/IF9kIDogZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub2RlVG9SZWxvY2F0ZS5oaWRkZW4gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY2hlY2tTbG90RmFsbGJhY2tWaXNpYmlsaXR5KSB7XG4gICAgICB1cGRhdGVGYWxsYmFja1Nsb3RWaXNpYmlsaXR5KHJvb3RWbm9kZS4kZWxtJCk7XG4gICAgfVxuICAgIHBsdC4kZmxhZ3MkICY9IC0yIC8qIGlzVG1wRGlzY29ubmVjdGVkICovO1xuICAgIHJlbG9jYXRlTm9kZXMubGVuZ3RoID0gMDtcbiAgfVxuICBpZiAoY21wTWV0YS4kZmxhZ3MkICYgMiAvKiBzY29wZWRDc3NFbmNhcHN1bGF0aW9uICovKSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSByb290Vm5vZGUuJGVsbSQuX19jaGlsZE5vZGVzIHx8IHJvb3RWbm9kZS4kZWxtJC5jaGlsZE5vZGVzO1xuICAgIGZvciAoY29uc3QgY2hpbGROb2RlIG9mIGNoaWxkcmVuKSB7XG4gICAgICBpZiAoY2hpbGROb2RlW1wicy1oblwiXSAhPT0gaG9zdFRhZ05hbWUgJiYgIWNoaWxkTm9kZVtcInMtc2hcIl0pIHtcbiAgICAgICAgaWYgKGlzSW5pdGlhbExvYWQgJiYgY2hpbGROb2RlW1wicy1paFwiXSA9PSBudWxsKSB7XG4gICAgICAgICAgY2hpbGROb2RlW1wicy1paFwiXSA9IChfZSA9IGNoaWxkTm9kZS5oaWRkZW4pICE9IG51bGwgPyBfZSA6IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNoaWxkTm9kZS5oaWRkZW4gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb250ZW50UmVmID0gdm9pZCAwO1xufTtcblxuLy8gc3JjL3J1bnRpbWUvdXBkYXRlLWNvbXBvbmVudC50c1xudmFyIGF0dGFjaFRvQW5jZXN0b3IgPSAoaG9zdFJlZiwgYW5jZXN0b3JDb21wb25lbnQpID0+IHtcbiAgaWYgKGFuY2VzdG9yQ29tcG9uZW50ICYmICFob3N0UmVmLiRvblJlbmRlclJlc29sdmUkICYmIGFuY2VzdG9yQ29tcG9uZW50W1wicy1wXCJdKSB7XG4gICAgY29uc3QgaW5kZXggPSBhbmNlc3RvckNvbXBvbmVudFtcInMtcFwiXS5wdXNoKG5ldyBQcm9taXNlKHIgPT4gaG9zdFJlZi4kb25SZW5kZXJSZXNvbHZlJCA9ICgpID0+IHtcbiAgICAgIGFuY2VzdG9yQ29tcG9uZW50W1wicy1wXCJdLnNwbGljZShpbmRleCAtIDEsIDEpO1xuICAgICAgcigpO1xuICAgIH0pKTtcbiAgfVxufTtcbnZhciBzY2hlZHVsZVVwZGF0ZSA9IChob3N0UmVmLCBpc0luaXRpYWxMb2FkKSA9PiB7XG4gIHtcbiAgICBob3N0UmVmLiRmbGFncyQgfD0gMTYgLyogaXNRdWV1ZWRGb3JVcGRhdGUgKi87XG4gIH1cbiAgaWYgKGhvc3RSZWYuJGZsYWdzJCAmIDQgLyogaXNXYWl0aW5nRm9yQ2hpbGRyZW4gKi8pIHtcbiAgICBob3N0UmVmLiRmbGFncyQgfD0gNTEyIC8qIG5lZWRzUmVyZW5kZXIgKi87XG4gICAgcmV0dXJuO1xuICB9XG4gIGF0dGFjaFRvQW5jZXN0b3IoaG9zdFJlZiwgaG9zdFJlZi4kYW5jZXN0b3JDb21wb25lbnQkKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSAoKSA9PiBkaXNwYXRjaEhvb2tzKGhvc3RSZWYsIGlzSW5pdGlhbExvYWQpO1xuICBpZiAoaXNJbml0aWFsTG9hZCkge1xuICAgIHF1ZXVlTWljcm90YXNrKCgpID0+IHtcbiAgICAgIGRpc3BhdGNoKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHJldHVybiB3cml0ZVRhc2soZGlzcGF0Y2gpO1xufTtcbnZhciBkaXNwYXRjaEhvb2tzID0gKGhvc3RSZWYsIGlzSW5pdGlhbExvYWQpID0+IHtcbiAgY29uc3QgZWxtID0gaG9zdFJlZi4kaG9zdEVsZW1lbnQkO1xuICBjb25zdCBlbmRTY2hlZHVsZSA9IGNyZWF0ZVRpbWUoXCJzY2hlZHVsZVVwZGF0ZVwiLCBob3N0UmVmLiRjbXBNZXRhJC4kdGFnTmFtZSQpO1xuICBjb25zdCBpbnN0YW5jZSA9IGhvc3RSZWYuJGxhenlJbnN0YW5jZSQ7XG4gIGlmICghaW5zdGFuY2UpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYENhbid0IHJlbmRlciBjb21wb25lbnQgPCR7ZWxtLnRhZ05hbWUudG9Mb3dlckNhc2UoKX0gLz4gd2l0aCBpbnZhbGlkIFN0ZW5jaWwgcnVudGltZSEgTWFrZSBzdXJlIHRoaXMgaW1wb3J0ZWQgY29tcG9uZW50IGlzIGNvbXBpbGVkIHdpdGggYSBcXGBleHRlcm5hbFJ1bnRpbWU6IHRydWVcXGAgZmxhZy4gRm9yIG1vcmUgaW5mb3JtYXRpb24sIHBsZWFzZSByZWZlciB0byBodHRwczovL3N0ZW5jaWxqcy5jb20vZG9jcy9jdXN0b20tZWxlbWVudHMjZXh0ZXJuYWxydW50aW1lYCk7XG4gIH1cbiAgbGV0IG1heWJlUHJvbWlzZTtcbiAgaWYgKGlzSW5pdGlhbExvYWQpIHtcbiAgICB7XG4gICAgICBob3N0UmVmLiRmbGFncyQgfD0gMjU2IC8qIGlzTGlzdGVuUmVhZHkgKi87XG4gICAgICBpZiAoaG9zdFJlZi4kcXVldWVkTGlzdGVuZXJzJCkge1xuICAgICAgICBob3N0UmVmLiRxdWV1ZWRMaXN0ZW5lcnMkLm1hcCgoW21ldGhvZE5hbWUsIGV2ZW50XSkgPT4gc2FmZUNhbGwoaW5zdGFuY2UsIG1ldGhvZE5hbWUsIGV2ZW50LCBlbG0pKTtcbiAgICAgICAgaG9zdFJlZi4kcXVldWVkTGlzdGVuZXJzJCA9IHZvaWQgMDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWF5YmVQcm9taXNlID0gc2FmZUNhbGwoaW5zdGFuY2UsIFwiY29tcG9uZW50V2lsbExvYWRcIiwgdm9pZCAwLCBlbG0pO1xuICB9IGVsc2Uge1xuICAgIG1heWJlUHJvbWlzZSA9IHNhZmVDYWxsKGluc3RhbmNlLCBcImNvbXBvbmVudFdpbGxVcGRhdGVcIiwgdm9pZCAwLCBlbG0pO1xuICB9XG4gIG1heWJlUHJvbWlzZSA9IGVucXVldWUobWF5YmVQcm9taXNlLCAoKSA9PiBzYWZlQ2FsbChpbnN0YW5jZSwgXCJjb21wb25lbnRXaWxsUmVuZGVyXCIsIHZvaWQgMCwgZWxtKSk7XG4gIGVuZFNjaGVkdWxlKCk7XG4gIHJldHVybiBlbnF1ZXVlKG1heWJlUHJvbWlzZSwgKCkgPT4gdXBkYXRlQ29tcG9uZW50KGhvc3RSZWYsIGluc3RhbmNlLCBpc0luaXRpYWxMb2FkKSk7XG59O1xudmFyIGVucXVldWUgPSAobWF5YmVQcm9taXNlLCBmbikgPT4gaXNQcm9taXNleShtYXliZVByb21pc2UpID8gbWF5YmVQcm9taXNlLnRoZW4oZm4pLmNhdGNoKGVycjIgPT4ge1xuICBjb25zb2xlLmVycm9yKGVycjIpO1xuICBmbigpO1xufSkgOiBmbigpO1xudmFyIGlzUHJvbWlzZXkgPSBtYXliZVByb21pc2UgPT4gbWF5YmVQcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSB8fCBtYXliZVByb21pc2UgJiYgbWF5YmVQcm9taXNlLnRoZW4gJiYgdHlwZW9mIG1heWJlUHJvbWlzZS50aGVuID09PSBcImZ1bmN0aW9uXCI7XG52YXIgdXBkYXRlQ29tcG9uZW50ID0gYXN5bmMgKGhvc3RSZWYsIGluc3RhbmNlLCBpc0luaXRpYWxMb2FkKSA9PiB7XG4gIHZhciBfYTtcbiAgY29uc3QgZWxtID0gaG9zdFJlZi4kaG9zdEVsZW1lbnQkO1xuICBjb25zdCBlbmRVcGRhdGUgPSBjcmVhdGVUaW1lKFwidXBkYXRlXCIsIGhvc3RSZWYuJGNtcE1ldGEkLiR0YWdOYW1lJCk7XG4gIGNvbnN0IHJjID0gZWxtW1wicy1yY1wiXTtcbiAgaWYgKGlzSW5pdGlhbExvYWQpIHtcbiAgICBhdHRhY2hTdHlsZXMoaG9zdFJlZik7XG4gIH1cbiAgY29uc3QgZW5kUmVuZGVyID0gY3JlYXRlVGltZShcInJlbmRlclwiLCBob3N0UmVmLiRjbXBNZXRhJC4kdGFnTmFtZSQpO1xuICB7XG4gICAgY2FsbFJlbmRlcihob3N0UmVmLCBpbnN0YW5jZSwgZWxtLCBpc0luaXRpYWxMb2FkKTtcbiAgfVxuICBpZiAocmMpIHtcbiAgICByYy5tYXAoY2IgPT4gY2IoKSk7XG4gICAgZWxtW1wicy1yY1wiXSA9IHZvaWQgMDtcbiAgfVxuICBlbmRSZW5kZXIoKTtcbiAgZW5kVXBkYXRlKCk7XG4gIHtcbiAgICBjb25zdCBjaGlsZHJlblByb21pc2VzID0gKF9hID0gZWxtW1wicy1wXCJdKSAhPSBudWxsID8gX2EgOiBbXTtcbiAgICBjb25zdCBwb3N0VXBkYXRlID0gKCkgPT4gcG9zdFVwZGF0ZUNvbXBvbmVudChob3N0UmVmKTtcbiAgICBpZiAoY2hpbGRyZW5Qcm9taXNlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHBvc3RVcGRhdGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUHJvbWlzZS5hbGwoY2hpbGRyZW5Qcm9taXNlcykudGhlbihwb3N0VXBkYXRlKTtcbiAgICAgIGhvc3RSZWYuJGZsYWdzJCB8PSA0IC8qIGlzV2FpdGluZ0ZvckNoaWxkcmVuICovO1xuICAgICAgY2hpbGRyZW5Qcm9taXNlcy5sZW5ndGggPSAwO1xuICAgIH1cbiAgfVxufTtcbnZhciBjYWxsUmVuZGVyID0gKGhvc3RSZWYsIGluc3RhbmNlLCBlbG0sIGlzSW5pdGlhbExvYWQpID0+IHtcbiAgdHJ5IHtcbiAgICBpbnN0YW5jZSA9IGluc3RhbmNlLnJlbmRlciAmJiBpbnN0YW5jZS5yZW5kZXIoKTtcbiAgICB7XG4gICAgICBob3N0UmVmLiRmbGFncyQgJj0gLTE3IC8qIGlzUXVldWVkRm9yVXBkYXRlICovO1xuICAgIH1cbiAgICB7XG4gICAgICBob3N0UmVmLiRmbGFncyQgfD0gMiAvKiBoYXNSZW5kZXJlZCAqLztcbiAgICB9XG4gICAge1xuICAgICAge1xuICAgICAgICB7XG4gICAgICAgICAgcmVuZGVyVmRvbShob3N0UmVmLCBpbnN0YW5jZSwgaXNJbml0aWFsTG9hZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlRXJyb3IoZSwgaG9zdFJlZi4kaG9zdEVsZW1lbnQkKTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG52YXIgcG9zdFVwZGF0ZUNvbXBvbmVudCA9IGhvc3RSZWYgPT4ge1xuICBjb25zdCB0YWdOYW1lID0gaG9zdFJlZi4kY21wTWV0YSQuJHRhZ05hbWUkO1xuICBjb25zdCBlbG0gPSBob3N0UmVmLiRob3N0RWxlbWVudCQ7XG4gIGNvbnN0IGVuZFBvc3RVcGRhdGUgPSBjcmVhdGVUaW1lKFwicG9zdFVwZGF0ZVwiLCB0YWdOYW1lKTtcbiAgY29uc3QgaW5zdGFuY2UgPSBob3N0UmVmLiRsYXp5SW5zdGFuY2UkO1xuICBjb25zdCBhbmNlc3RvckNvbXBvbmVudCA9IGhvc3RSZWYuJGFuY2VzdG9yQ29tcG9uZW50JDtcbiAgc2FmZUNhbGwoaW5zdGFuY2UsIFwiY29tcG9uZW50RGlkUmVuZGVyXCIsIHZvaWQgMCwgZWxtKTtcbiAgaWYgKCEoaG9zdFJlZi4kZmxhZ3MkICYgNjQgLyogaGFzTG9hZGVkQ29tcG9uZW50ICovKSkge1xuICAgIGhvc3RSZWYuJGZsYWdzJCB8PSA2NCAvKiBoYXNMb2FkZWRDb21wb25lbnQgKi87XG4gICAge1xuICAgICAgYWRkSHlkcmF0ZWRGbGFnKGVsbSk7XG4gICAgfVxuICAgIHNhZmVDYWxsKGluc3RhbmNlLCBcImNvbXBvbmVudERpZExvYWRcIiwgdm9pZCAwLCBlbG0pO1xuICAgIGVuZFBvc3RVcGRhdGUoKTtcbiAgICB7XG4gICAgICBob3N0UmVmLiRvblJlYWR5UmVzb2x2ZSQoZWxtKTtcbiAgICAgIGlmICghYW5jZXN0b3JDb21wb25lbnQpIHtcbiAgICAgICAgYXBwRGlkTG9hZCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzYWZlQ2FsbChpbnN0YW5jZSwgXCJjb21wb25lbnREaWRVcGRhdGVcIiwgdm9pZCAwLCBlbG0pO1xuICAgIGVuZFBvc3RVcGRhdGUoKTtcbiAgfVxuICB7XG4gICAgaG9zdFJlZi4kb25JbnN0YW5jZVJlc29sdmUkKGVsbSk7XG4gIH1cbiAge1xuICAgIGlmIChob3N0UmVmLiRvblJlbmRlclJlc29sdmUkKSB7XG4gICAgICBob3N0UmVmLiRvblJlbmRlclJlc29sdmUkKCk7XG4gICAgICBob3N0UmVmLiRvblJlbmRlclJlc29sdmUkID0gdm9pZCAwO1xuICAgIH1cbiAgICBpZiAoaG9zdFJlZi4kZmxhZ3MkICYgNTEyIC8qIG5lZWRzUmVyZW5kZXIgKi8pIHtcbiAgICAgIG5leHRUaWNrKCgpID0+IHNjaGVkdWxlVXBkYXRlKGhvc3RSZWYsIGZhbHNlKSk7XG4gICAgfVxuICAgIGhvc3RSZWYuJGZsYWdzJCAmPSAtNTE3O1xuICB9XG59O1xudmFyIGZvcmNlVXBkYXRlID0gcmVmID0+IHtcbiAgdmFyIF9hO1xuICB7XG4gICAgY29uc3QgaG9zdFJlZiA9IGdldEhvc3RSZWYocmVmKTtcbiAgICBjb25zdCBpc0Nvbm5lY3RlZCA9IChfYSA9IGhvc3RSZWYgPT0gbnVsbCA/IHZvaWQgMCA6IGhvc3RSZWYuJGhvc3RFbGVtZW50JCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmlzQ29ubmVjdGVkO1xuICAgIGlmIChpc0Nvbm5lY3RlZCAmJiAoaG9zdFJlZi4kZmxhZ3MkICYgKDIgLyogaGFzUmVuZGVyZWQgKi8gfCAxNiAvKiBpc1F1ZXVlZEZvclVwZGF0ZSAqLykpID09PSAyIC8qIGhhc1JlbmRlcmVkICovKSB7XG4gICAgICBzY2hlZHVsZVVwZGF0ZShob3N0UmVmLCBmYWxzZSk7XG4gICAgfVxuICAgIHJldHVybiBpc0Nvbm5lY3RlZDtcbiAgfVxufTtcbnZhciBhcHBEaWRMb2FkID0gd2hvID0+IHtcbiAgdmFyIF9hO1xuICBuZXh0VGljaygoKSA9PiBlbWl0RXZlbnQod2luLCBcImFwcGxvYWRcIiwge1xuICAgIGRldGFpbDoge1xuICAgICAgbmFtZXNwYWNlOiBOQU1FU1BBQ0VcbiAgICB9XG4gIH0pKTtcbiAge1xuICAgIGlmICgoX2EgPSBwbHQuJG9yZ0xvY05vZGVzJCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLnNpemUpIHtcbiAgICAgIHBsdC4kb3JnTG9jTm9kZXMkLmNsZWFyKCk7XG4gICAgfVxuICB9XG59O1xudmFyIHNhZmVDYWxsID0gKGluc3RhbmNlLCBtZXRob2QsIGFyZywgZWxtKSA9PiB7XG4gIGlmIChpbnN0YW5jZSAmJiBpbnN0YW5jZVttZXRob2RdKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBpbnN0YW5jZVttZXRob2RdKGFyZyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZUVycm9yKGUsIGVsbSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB2b2lkIDA7XG59O1xudmFyIGFkZEh5ZHJhdGVkRmxhZyA9IGVsbSA9PiB7XG4gIHZhciBfYTtcbiAgcmV0dXJuIGVsbS5jbGFzc0xpc3QuYWRkKChfYSA9IEJVSUxELmh5ZHJhdGVkU2VsZWN0b3JOYW1lKSAhPSBudWxsID8gX2EgOiBcImh5ZHJhdGVkXCIpO1xufTtcblxuLy8gc3JjL3J1bnRpbWUvc2V0LXZhbHVlLnRzXG52YXIgZ2V0VmFsdWUgPSAocmVmLCBwcm9wTmFtZSkgPT4gZ2V0SG9zdFJlZihyZWYpLiRpbnN0YW5jZVZhbHVlcyQuZ2V0KHByb3BOYW1lKTtcbnZhciBzZXRWYWx1ZSA9IChyZWYsIHByb3BOYW1lLCBuZXdWYWwsIGNtcE1ldGEpID0+IHtcbiAgY29uc3QgaG9zdFJlZiA9IGdldEhvc3RSZWYocmVmKTtcbiAgaWYgKCFob3N0UmVmKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICghaG9zdFJlZikge1xuICAgIHRocm93IG5ldyBFcnJvcihgQ291bGRuJ3QgZmluZCBob3N0IGVsZW1lbnQgZm9yIFwiJHtjbXBNZXRhLiR0YWdOYW1lJH1cIiBhcyBpdCBpcyB1bmtub3duIHRvIHRoaXMgU3RlbmNpbCBydW50aW1lLiBUaGlzIHVzdWFsbHkgaGFwcGVucyB3aGVuIGludGVncmF0aW5nIGEgM3JkIHBhcnR5IFN0ZW5jaWwgY29tcG9uZW50IHdpdGggYW5vdGhlciBTdGVuY2lsIGNvbXBvbmVudCBvciBhcHBsaWNhdGlvbi4gUGxlYXNlIHJlYWNoIG91dCB0byB0aGUgbWFpbnRhaW5lcnMgb2YgdGhlIDNyZCBwYXJ0eSBTdGVuY2lsIGNvbXBvbmVudCBvciByZXBvcnQgdGhpcyBvbiB0aGUgU3RlbmNpbCBEaXNjb3JkIHNlcnZlciAoaHR0cHM6Ly9jaGF0LnN0ZW5jaWxqcy5jb20pIG9yIGNvbW1lbnQgb24gdGhpcyBzaW1pbGFyIFtHaXRIdWIgaXNzdWVdKGh0dHBzOi8vZ2l0aHViLmNvbS9zdGVuY2lsanMvY29yZS9pc3N1ZXMvNTQ1NykuYCk7XG4gIH1cbiAgY29uc3QgZWxtID0gaG9zdFJlZi4kaG9zdEVsZW1lbnQkO1xuICBjb25zdCBvbGRWYWwgPSBob3N0UmVmLiRpbnN0YW5jZVZhbHVlcyQuZ2V0KHByb3BOYW1lKTtcbiAgY29uc3QgZmxhZ3MgPSBob3N0UmVmLiRmbGFncyQ7XG4gIGNvbnN0IGluc3RhbmNlID0gaG9zdFJlZi4kbGF6eUluc3RhbmNlJDtcbiAgbmV3VmFsID0gcGFyc2VQcm9wZXJ0eVZhbHVlKG5ld1ZhbCwgY21wTWV0YS4kbWVtYmVycyRbcHJvcE5hbWVdWzBdKTtcbiAgY29uc3QgYXJlQm90aE5hTiA9IE51bWJlci5pc05hTihvbGRWYWwpICYmIE51bWJlci5pc05hTihuZXdWYWwpO1xuICBjb25zdCBkaWRWYWx1ZUNoYW5nZSA9IG5ld1ZhbCAhPT0gb2xkVmFsICYmICFhcmVCb3RoTmFOO1xuICBpZiAoKCEoZmxhZ3MgJiA4IC8qIGlzQ29uc3RydWN0aW5nSW5zdGFuY2UgKi8pIHx8IG9sZFZhbCA9PT0gdm9pZCAwKSAmJiBkaWRWYWx1ZUNoYW5nZSkge1xuICAgIGhvc3RSZWYuJGluc3RhbmNlVmFsdWVzJC5zZXQocHJvcE5hbWUsIG5ld1ZhbCk7XG4gICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICBpZiAoY21wTWV0YS4kd2F0Y2hlcnMkICYmIGZsYWdzICYgMTI4IC8qIGlzV2F0Y2hSZWFkeSAqLykge1xuICAgICAgICBjb25zdCB3YXRjaE1ldGhvZHMgPSBjbXBNZXRhLiR3YXRjaGVycyRbcHJvcE5hbWVdO1xuICAgICAgICBpZiAod2F0Y2hNZXRob2RzKSB7XG4gICAgICAgICAgd2F0Y2hNZXRob2RzLm1hcCh3YXRjaE1ldGhvZE5hbWUgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgaW5zdGFuY2Vbd2F0Y2hNZXRob2ROYW1lXShuZXdWYWwsIG9sZFZhbCwgcHJvcE5hbWUpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICBjb25zb2xlRXJyb3IoZSwgZWxtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKChmbGFncyAmICgyIC8qIGhhc1JlbmRlcmVkICovIHwgMTYgLyogaXNRdWV1ZWRGb3JVcGRhdGUgKi8pKSA9PT0gMiAvKiBoYXNSZW5kZXJlZCAqLykge1xuICAgICAgICBpZiAoaW5zdGFuY2UuY29tcG9uZW50U2hvdWxkVXBkYXRlKSB7XG4gICAgICAgICAgaWYgKGluc3RhbmNlLmNvbXBvbmVudFNob3VsZFVwZGF0ZShuZXdWYWwsIG9sZFZhbCwgcHJvcE5hbWUpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzY2hlZHVsZVVwZGF0ZShob3N0UmVmLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG4vLyBzcmMvcnVudGltZS9wcm94eS1jb21wb25lbnQudHNcbnZhciBwcm94eUNvbXBvbmVudCA9IChDc3RyLCBjbXBNZXRhLCBmbGFncykgPT4ge1xuICB2YXIgX2EsIF9iO1xuICBjb25zdCBwcm90b3R5cGUgPSBDc3RyLnByb3RvdHlwZTtcbiAgaWYgKGNtcE1ldGEuJG1lbWJlcnMkIHx8IGNtcE1ldGEuJHdhdGNoZXJzJCB8fCBDc3RyLndhdGNoZXJzKSB7XG4gICAgaWYgKENzdHIud2F0Y2hlcnMgJiYgIWNtcE1ldGEuJHdhdGNoZXJzJCkge1xuICAgICAgY21wTWV0YS4kd2F0Y2hlcnMkID0gQ3N0ci53YXRjaGVycztcbiAgICB9XG4gICAgY29uc3QgbWVtYmVycyA9IE9iamVjdC5lbnRyaWVzKChfYSA9IGNtcE1ldGEuJG1lbWJlcnMkKSAhPSBudWxsID8gX2EgOiB7fSk7XG4gICAgbWVtYmVycy5tYXAoKFttZW1iZXJOYW1lLCBbbWVtYmVyRmxhZ3NdXSkgPT4ge1xuICAgICAgaWYgKG1lbWJlckZsYWdzICYgMzEgLyogUHJvcCAqLyB8fCBmbGFncyAmIDIgLyogcHJveHlTdGF0ZSAqLyAmJiBtZW1iZXJGbGFncyAmIDMyIC8qIFN0YXRlICovKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBnZXQ6IG9yaWdHZXR0ZXIsXG4gICAgICAgICAgc2V0OiBvcmlnU2V0dGVyXG4gICAgICAgIH0gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvdHlwZSwgbWVtYmVyTmFtZSkgfHwge307XG4gICAgICAgIGlmIChvcmlnR2V0dGVyKSBjbXBNZXRhLiRtZW1iZXJzJFttZW1iZXJOYW1lXVswXSB8PSAyMDQ4IC8qIEdldHRlciAqLztcbiAgICAgICAgaWYgKG9yaWdTZXR0ZXIpIGNtcE1ldGEuJG1lbWJlcnMkW21lbWJlck5hbWVdWzBdIHw9IDQwOTYgLyogU2V0dGVyICovO1xuICAgICAgICBpZiAoZmxhZ3MgJiAxIC8qIGlzRWxlbWVudENvbnN0cnVjdG9yICovIHx8ICFvcmlnR2V0dGVyKSB7XG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvdHlwZSwgbWVtYmVyTmFtZSwge1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKChjbXBNZXRhLiRtZW1iZXJzJFttZW1iZXJOYW1lXVswXSAmIDIwNDggLyogR2V0dGVyICovKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldFZhbHVlKHRoaXMsIG1lbWJlck5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCByZWYgPSBnZXRIb3N0UmVmKHRoaXMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gcmVmID8gcmVmLiRsYXp5SW5zdGFuY2UkIDogcHJvdG90eXBlO1xuICAgICAgICAgICAgICAgIGlmICghaW5zdGFuY2UpIHJldHVybjtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5zdGFuY2VbbWVtYmVyTmFtZV07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvdHlwZSwgbWVtYmVyTmFtZSwge1xuICAgICAgICAgIHNldChuZXdWYWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgcmVmID0gZ2V0SG9zdFJlZih0aGlzKTtcbiAgICAgICAgICAgIGlmICghcmVmKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcmlnU2V0dGVyKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IG1lbWJlckZsYWdzICYgMzIgLyogU3RhdGUgKi8gPyB0aGlzW21lbWJlck5hbWVdIDogcmVmLiRob3N0RWxlbWVudCRbbWVtYmVyTmFtZV07XG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY3VycmVudFZhbHVlID09PSBcInVuZGVmaW5lZFwiICYmIHJlZi4kaW5zdGFuY2VWYWx1ZXMkLmdldChtZW1iZXJOYW1lKSkge1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gcmVmLiRpbnN0YW5jZVZhbHVlcyQuZ2V0KG1lbWJlck5hbWUpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFyZWYuJGluc3RhbmNlVmFsdWVzJC5nZXQobWVtYmVyTmFtZSkgJiYgY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmVmLiRpbnN0YW5jZVZhbHVlcyQuc2V0KG1lbWJlck5hbWUsIGN1cnJlbnRWYWx1ZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgb3JpZ1NldHRlci5hcHBseSh0aGlzLCBbcGFyc2VQcm9wZXJ0eVZhbHVlKG5ld1ZhbHVlLCBtZW1iZXJGbGFncyldKTtcbiAgICAgICAgICAgICAgbmV3VmFsdWUgPSBtZW1iZXJGbGFncyAmIDMyIC8qIFN0YXRlICovID8gdGhpc1ttZW1iZXJOYW1lXSA6IHJlZi4kaG9zdEVsZW1lbnQkW21lbWJlck5hbWVdO1xuICAgICAgICAgICAgICBzZXRWYWx1ZSh0aGlzLCBtZW1iZXJOYW1lLCBuZXdWYWx1ZSwgY21wTWV0YSk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWYgKChmbGFncyAmIDEgLyogaXNFbGVtZW50Q29uc3RydWN0b3IgKi8pID09PSAwIHx8IChjbXBNZXRhLiRtZW1iZXJzJFttZW1iZXJOYW1lXVswXSAmIDQwOTYgLyogU2V0dGVyICovKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHNldFZhbHVlKHRoaXMsIG1lbWJlck5hbWUsIG5ld1ZhbHVlLCBjbXBNZXRhKTtcbiAgICAgICAgICAgICAgICBpZiAoZmxhZ3MgJiAxIC8qIGlzRWxlbWVudENvbnN0cnVjdG9yICovICYmICFyZWYuJGxhenlJbnN0YW5jZSQpIHtcbiAgICAgICAgICAgICAgICAgIHJlZi4kb25SZWFkeVByb21pc2UkLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY21wTWV0YS4kbWVtYmVycyRbbWVtYmVyTmFtZV1bMF0gJiA0MDk2IC8qIFNldHRlciAqLyAmJiByZWYuJGxhenlJbnN0YW5jZSRbbWVtYmVyTmFtZV0gIT09IHJlZi4kaW5zdGFuY2VWYWx1ZXMkLmdldChtZW1iZXJOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgIHJlZi4kbGF6eUluc3RhbmNlJFttZW1iZXJOYW1lXSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnN0IHNldHRlclNldFZhbCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSByZWYuJGxhenlJbnN0YW5jZSRbbWVtYmVyTmFtZV07XG4gICAgICAgICAgICAgICAgaWYgKCFyZWYuJGluc3RhbmNlVmFsdWVzJC5nZXQobWVtYmVyTmFtZSkgJiYgY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICByZWYuJGluc3RhbmNlVmFsdWVzJC5zZXQobWVtYmVyTmFtZSwgY3VycmVudFZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVmLiRsYXp5SW5zdGFuY2UkW21lbWJlck5hbWVdID0gcGFyc2VQcm9wZXJ0eVZhbHVlKG5ld1ZhbHVlLCBtZW1iZXJGbGFncyk7XG4gICAgICAgICAgICAgICAgc2V0VmFsdWUodGhpcywgbWVtYmVyTmFtZSwgcmVmLiRsYXp5SW5zdGFuY2UkW21lbWJlck5hbWVdLCBjbXBNZXRhKTtcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgaWYgKHJlZi4kbGF6eUluc3RhbmNlJCkge1xuICAgICAgICAgICAgICAgIHNldHRlclNldFZhbCgpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlZi4kb25SZWFkeVByb21pc2UkLnRoZW4oKCkgPT4gc2V0dGVyU2V0VmFsKCkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoZmxhZ3MgJiAxIC8qIGlzRWxlbWVudENvbnN0cnVjdG9yICovICYmIG1lbWJlckZsYWdzICYgNjQgLyogTWV0aG9kICovKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90b3R5cGUsIG1lbWJlck5hbWUsIHtcbiAgICAgICAgICB2YWx1ZSguLi5hcmdzKSB7XG4gICAgICAgICAgICB2YXIgX2EyO1xuICAgICAgICAgICAgY29uc3QgcmVmID0gZ2V0SG9zdFJlZih0aGlzKTtcbiAgICAgICAgICAgIHJldHVybiAoX2EyID0gcmVmID09IG51bGwgPyB2b2lkIDAgOiByZWYuJG9uSW5zdGFuY2VQcm9taXNlJCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hMi50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgdmFyIF9hMztcbiAgICAgICAgICAgICAgcmV0dXJuIChfYTMgPSByZWYuJGxhenlJbnN0YW5jZSQpID09IG51bGwgPyB2b2lkIDAgOiBfYTNbbWVtYmVyTmFtZV0oLi4uYXJncyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChmbGFncyAmIDEgLyogaXNFbGVtZW50Q29uc3RydWN0b3IgKi8pIHtcbiAgICAgIGNvbnN0IGF0dHJOYW1lVG9Qcm9wTmFtZSA9IC8qIEBfX1BVUkVfXyAqL25ldyBNYXAoKTtcbiAgICAgIHByb3RvdHlwZS5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoYXR0ck5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuICAgICAgICBwbHQuam1wKCgpID0+IHtcbiAgICAgICAgICB2YXIgX2EyO1xuICAgICAgICAgIGNvbnN0IHByb3BOYW1lID0gYXR0ck5hbWVUb1Byb3BOYW1lLmdldChhdHRyTmFtZSk7XG4gICAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpICYmIEJVSUxELmxhenlMb2FkKSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHRoaXNbcHJvcE5hbWVdO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXNbcHJvcE5hbWVdO1xuICAgICAgICAgIH0gZWxzZSBpZiAocHJvdG90eXBlLmhhc093blByb3BlcnR5KHByb3BOYW1lKSAmJiB0eXBlb2YgdGhpc1twcm9wTmFtZV0gPT09IFwibnVtYmVyXCIgJiZcbiAgICAgICAgICAvLyBjYXN0IHR5cGUgdG8gbnVtYmVyIHRvIGF2b2lkIFRTIGNvbXBpbGVyIGlzc3Vlc1xuICAgICAgICAgIHRoaXNbcHJvcE5hbWVdID09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSBlbHNlIGlmIChwcm9wTmFtZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBob3N0UmVmID0gZ2V0SG9zdFJlZih0aGlzKTtcbiAgICAgICAgICAgIGNvbnN0IGZsYWdzMiA9IGhvc3RSZWYgPT0gbnVsbCA/IHZvaWQgMCA6IGhvc3RSZWYuJGZsYWdzJDtcbiAgICAgICAgICAgIGlmIChob3N0UmVmICYmIGZsYWdzMiAmJiAhKGZsYWdzMiAmIDggLyogaXNDb25zdHJ1Y3RpbmdJbnN0YW5jZSAqLykgJiYgZmxhZ3MyICYgMTI4IC8qIGlzV2F0Y2hSZWFkeSAqLyAmJiBuZXdWYWx1ZSAhPT0gb2xkVmFsdWUpIHtcbiAgICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBob3N0UmVmLiRsYXp5SW5zdGFuY2UkO1xuICAgICAgICAgICAgICBjb25zdCBlbnRyeSA9IChfYTIgPSBjbXBNZXRhLiR3YXRjaGVycyQpID09IG51bGwgPyB2b2lkIDAgOiBfYTJbYXR0ck5hbWVdO1xuICAgICAgICAgICAgICBlbnRyeSA9PSBudWxsID8gdm9pZCAwIDogZW50cnkuZm9yRWFjaChjYWxsYmFja05hbWUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpbnN0YW5jZVtjYWxsYmFja05hbWVdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgIGluc3RhbmNlW2NhbGxiYWNrTmFtZV0uY2FsbChpbnN0YW5jZSwgbmV3VmFsdWUsIG9sZFZhbHVlLCBhdHRyTmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgcHJvcERlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvdHlwZSwgcHJvcE5hbWUpO1xuICAgICAgICAgIG5ld1ZhbHVlID0gbmV3VmFsdWUgPT09IG51bGwgJiYgdHlwZW9mIHRoaXNbcHJvcE5hbWVdID09PSBcImJvb2xlYW5cIiA/IGZhbHNlIDogbmV3VmFsdWU7XG4gICAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSB0aGlzW3Byb3BOYW1lXSAmJiAoIXByb3BEZXNjLmdldCB8fCAhIXByb3BEZXNjLnNldCkpIHtcbiAgICAgICAgICAgIHRoaXNbcHJvcE5hbWVdID0gbmV3VmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICBDc3RyLm9ic2VydmVkQXR0cmlidXRlcyA9IEFycmF5LmZyb20oLyogQF9fUFVSRV9fICovbmV3IFNldChbLi4uT2JqZWN0LmtleXMoKF9iID0gY21wTWV0YS4kd2F0Y2hlcnMkKSAhPSBudWxsID8gX2IgOiB7fSksIC4uLm1lbWJlcnMuZmlsdGVyKChbXywgbV0pID0+IG1bMF0gJiAxNSAvKiBIYXNBdHRyaWJ1dGUgKi8pLm1hcCgoW3Byb3BOYW1lLCBtXSkgPT4ge1xuICAgICAgICB2YXIgX2EyO1xuICAgICAgICBjb25zdCBhdHRyTmFtZSA9IG1bMV0gfHwgcHJvcE5hbWU7XG4gICAgICAgIGF0dHJOYW1lVG9Qcm9wTmFtZS5zZXQoYXR0ck5hbWUsIHByb3BOYW1lKTtcbiAgICAgICAgaWYgKG1bMF0gJiA1MTIgLyogUmVmbGVjdEF0dHIgKi8pIHtcbiAgICAgICAgICAoX2EyID0gY21wTWV0YS4kYXR0cnNUb1JlZmxlY3QkKSA9PSBudWxsID8gdm9pZCAwIDogX2EyLnB1c2goW3Byb3BOYW1lLCBhdHRyTmFtZV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhdHRyTmFtZTtcbiAgICAgIH0pXSkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gQ3N0cjtcbn07XG5cbi8vIHNyYy9ydW50aW1lL2luaXRpYWxpemUtY29tcG9uZW50LnRzXG52YXIgaW5pdGlhbGl6ZUNvbXBvbmVudCA9IGFzeW5jIChlbG0sIGhvc3RSZWYsIGNtcE1ldGEsIGhtclZlcnNpb25JZCkgPT4ge1xuICBsZXQgQ3N0cjtcbiAgaWYgKChob3N0UmVmLiRmbGFncyQgJiAzMiAvKiBoYXNJbml0aWFsaXplZENvbXBvbmVudCAqLykgPT09IDApIHtcbiAgICBob3N0UmVmLiRmbGFncyQgfD0gMzIgLyogaGFzSW5pdGlhbGl6ZWRDb21wb25lbnQgKi87XG4gICAgY29uc3QgYnVuZGxlSWQgPSBjbXBNZXRhLiRsYXp5QnVuZGxlSWQkO1xuICAgIGlmIChidW5kbGVJZCkge1xuICAgICAgY29uc3QgQ3N0ckltcG9ydCA9IGxvYWRNb2R1bGUoY21wTWV0YSwgaG9zdFJlZik7XG4gICAgICBpZiAoQ3N0ckltcG9ydCAmJiBcInRoZW5cIiBpbiBDc3RySW1wb3J0KSB7XG4gICAgICAgIGNvbnN0IGVuZExvYWQgPSB1bmlxdWVUaW1lKCk7XG4gICAgICAgIENzdHIgPSBhd2FpdCBDc3RySW1wb3J0O1xuICAgICAgICBlbmRMb2FkKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBDc3RyID0gQ3N0ckltcG9ydDtcbiAgICAgIH1cbiAgICAgIGlmICghQ3N0cikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENvbnN0cnVjdG9yIGZvciBcIiR7Y21wTWV0YS4kdGFnTmFtZSR9IyR7aG9zdFJlZi4kbW9kZU5hbWUkfVwiIHdhcyBub3QgZm91bmRgKTtcbiAgICAgIH1cbiAgICAgIGlmICghQ3N0ci5pc1Byb3hpZWQpIHtcbiAgICAgICAge1xuICAgICAgICAgIGNtcE1ldGEuJHdhdGNoZXJzJCA9IENzdHIud2F0Y2hlcnM7XG4gICAgICAgIH1cbiAgICAgICAgcHJveHlDb21wb25lbnQoQ3N0ciwgY21wTWV0YSwgMiAvKiBwcm94eVN0YXRlICovKTtcbiAgICAgICAgQ3N0ci5pc1Byb3hpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgY29uc3QgZW5kTmV3SW5zdGFuY2UgPSBjcmVhdGVUaW1lKFwiY3JlYXRlSW5zdGFuY2VcIiwgY21wTWV0YS4kdGFnTmFtZSQpO1xuICAgICAge1xuICAgICAgICBob3N0UmVmLiRmbGFncyQgfD0gOCAvKiBpc0NvbnN0cnVjdGluZ0luc3RhbmNlICovO1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgbmV3IENzdHIoaG9zdFJlZik7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGVFcnJvcihlLCBlbG0pO1xuICAgICAgfVxuICAgICAge1xuICAgICAgICBob3N0UmVmLiRmbGFncyQgJj0gLTkgLyogaXNDb25zdHJ1Y3RpbmdJbnN0YW5jZSAqLztcbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgaG9zdFJlZi4kZmxhZ3MkIHw9IDEyOCAvKiBpc1dhdGNoUmVhZHkgKi87XG4gICAgICB9XG4gICAgICBlbmROZXdJbnN0YW5jZSgpO1xuICAgICAgZmlyZUNvbm5lY3RlZENhbGxiYWNrKGhvc3RSZWYuJGxhenlJbnN0YW5jZSQsIGVsbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIENzdHIgPSBlbG0uY29uc3RydWN0b3I7XG4gICAgICBjb25zdCBjbXBUYWcgPSBlbG0ubG9jYWxOYW1lO1xuICAgICAgY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQoY21wVGFnKS50aGVuKCgpID0+IGhvc3RSZWYuJGZsYWdzJCB8PSAxMjggLyogaXNXYXRjaFJlYWR5ICovKTtcbiAgICB9XG4gICAgaWYgKENzdHIgJiYgQ3N0ci5zdHlsZSkge1xuICAgICAgbGV0IHN0eWxlO1xuICAgICAgaWYgKHR5cGVvZiBDc3RyLnN0eWxlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHN0eWxlID0gQ3N0ci5zdHlsZTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIENzdHIuc3R5bGUgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgaG9zdFJlZi4kbW9kZU5hbWUkID0gY29tcHV0ZU1vZGUoZWxtKTtcbiAgICAgICAgaWYgKGhvc3RSZWYuJG1vZGVOYW1lJCkge1xuICAgICAgICAgIHN0eWxlID0gQ3N0ci5zdHlsZVtob3N0UmVmLiRtb2RlTmFtZSRdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCBzY29wZUlkMiA9IGdldFNjb3BlSWQoY21wTWV0YSwgaG9zdFJlZi4kbW9kZU5hbWUkKTtcbiAgICAgIGlmICghc3R5bGVzLmhhcyhzY29wZUlkMikpIHtcbiAgICAgICAgY29uc3QgZW5kUmVnaXN0ZXJTdHlsZXMgPSBjcmVhdGVUaW1lKFwicmVnaXN0ZXJTdHlsZXNcIiwgY21wTWV0YS4kdGFnTmFtZSQpO1xuICAgICAgICByZWdpc3RlclN0eWxlKHNjb3BlSWQyLCBzdHlsZSwgISEoY21wTWV0YS4kZmxhZ3MkICYgMSAvKiBzaGFkb3dEb21FbmNhcHN1bGF0aW9uICovKSk7XG4gICAgICAgIGVuZFJlZ2lzdGVyU3R5bGVzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNvbnN0IGFuY2VzdG9yQ29tcG9uZW50ID0gaG9zdFJlZi4kYW5jZXN0b3JDb21wb25lbnQkO1xuICBjb25zdCBzY2hlZHVsZSA9ICgpID0+IHNjaGVkdWxlVXBkYXRlKGhvc3RSZWYsIHRydWUpO1xuICBpZiAoYW5jZXN0b3JDb21wb25lbnQgJiYgYW5jZXN0b3JDb21wb25lbnRbXCJzLXJjXCJdKSB7XG4gICAgYW5jZXN0b3JDb21wb25lbnRbXCJzLXJjXCJdLnB1c2goc2NoZWR1bGUpO1xuICB9IGVsc2Uge1xuICAgIHNjaGVkdWxlKCk7XG4gIH1cbn07XG52YXIgZmlyZUNvbm5lY3RlZENhbGxiYWNrID0gKGluc3RhbmNlLCBlbG0pID0+IHtcbiAge1xuICAgIHNhZmVDYWxsKGluc3RhbmNlLCBcImNvbm5lY3RlZENhbGxiYWNrXCIsIHZvaWQgMCwgZWxtKTtcbiAgfVxufTtcblxuLy8gc3JjL3J1bnRpbWUvY29ubmVjdGVkLWNhbGxiYWNrLnRzXG52YXIgY29ubmVjdGVkQ2FsbGJhY2sgPSBlbG0gPT4ge1xuICBpZiAoKHBsdC4kZmxhZ3MkICYgMSAvKiBpc1RtcERpc2Nvbm5lY3RlZCAqLykgPT09IDApIHtcbiAgICBjb25zdCBob3N0UmVmID0gZ2V0SG9zdFJlZihlbG0pO1xuICAgIGlmICghaG9zdFJlZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjbXBNZXRhID0gaG9zdFJlZi4kY21wTWV0YSQ7XG4gICAgY29uc3QgZW5kQ29ubmVjdGVkID0gY3JlYXRlVGltZShcImNvbm5lY3RlZENhbGxiYWNrXCIsIGNtcE1ldGEuJHRhZ05hbWUkKTtcbiAgICBpZiAoIShob3N0UmVmLiRmbGFncyQgJiAxIC8qIGhhc0Nvbm5lY3RlZCAqLykpIHtcbiAgICAgIGhvc3RSZWYuJGZsYWdzJCB8PSAxIC8qIGhhc0Nvbm5lY3RlZCAqLztcbiAgICAgIGxldCBob3N0SWQ7XG4gICAgICB7XG4gICAgICAgIGhvc3RJZCA9IGVsbS5nZXRBdHRyaWJ1dGUoSFlEUkFURV9JRCk7XG4gICAgICAgIGlmIChob3N0SWQpIHtcbiAgICAgICAgICBpZiAoY21wTWV0YS4kZmxhZ3MkICYgMSAvKiBzaGFkb3dEb21FbmNhcHN1bGF0aW9uICovKSB7XG4gICAgICAgICAgICBjb25zdCBzY29wZUlkMiA9IGFkZFN0eWxlKGVsbS5zaGFkb3dSb290LCBjbXBNZXRhLCBlbG0uZ2V0QXR0cmlidXRlKFwicy1tb2RlXCIpKTtcbiAgICAgICAgICAgIGVsbS5jbGFzc0xpc3QucmVtb3ZlKHNjb3BlSWQyICsgXCItaFwiLCBzY29wZUlkMiArIFwiLXNcIik7XG4gICAgICAgICAgfSBlbHNlIGlmIChjbXBNZXRhLiRmbGFncyQgJiAyIC8qIHNjb3BlZENzc0VuY2Fwc3VsYXRpb24gKi8pIHtcbiAgICAgICAgICAgIGNvbnN0IHNjb3BlSWQyID0gZ2V0U2NvcGVJZChjbXBNZXRhLCBlbG0uZ2V0QXR0cmlidXRlKFwicy1tb2RlXCIpKTtcbiAgICAgICAgICAgIGVsbVtcInMtc2NcIl0gPSBzY29wZUlkMjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW5pdGlhbGl6ZUNsaWVudEh5ZHJhdGUoZWxtLCBjbXBNZXRhLiR0YWdOYW1lJCwgaG9zdElkLCBob3N0UmVmKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFob3N0SWQpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAvLyBUT0RPKFNURU5DSUwtODU0KTogUmVtb3ZlIGNvZGUgcmVsYXRlZCB0byBsZWdhY3kgc2hhZG93RG9tU2hpbSBmaWVsZFxuICAgICAgICBjbXBNZXRhLiRmbGFncyQgJiAoNCAvKiBoYXNTbG90UmVsb2NhdGlvbiAqLyB8IDggLyogbmVlZHNTaGFkb3dEb21TaGltICovKSkge1xuICAgICAgICAgIHNldENvbnRlbnRSZWZlcmVuY2UoZWxtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAge1xuICAgICAgICBsZXQgYW5jZXN0b3JDb21wb25lbnQgPSBlbG07XG4gICAgICAgIHdoaWxlIChhbmNlc3RvckNvbXBvbmVudCA9IGFuY2VzdG9yQ29tcG9uZW50LnBhcmVudE5vZGUgfHwgYW5jZXN0b3JDb21wb25lbnQuaG9zdCkge1xuICAgICAgICAgIGlmIChhbmNlc3RvckNvbXBvbmVudC5ub2RlVHlwZSA9PT0gMSAvKiBFbGVtZW50Tm9kZSAqLyAmJiBhbmNlc3RvckNvbXBvbmVudC5oYXNBdHRyaWJ1dGUoXCJzLWlkXCIpICYmIGFuY2VzdG9yQ29tcG9uZW50W1wicy1wXCJdIHx8IGFuY2VzdG9yQ29tcG9uZW50W1wicy1wXCJdKSB7XG4gICAgICAgICAgICBhdHRhY2hUb0FuY2VzdG9yKGhvc3RSZWYsIGhvc3RSZWYuJGFuY2VzdG9yQ29tcG9uZW50JCA9IGFuY2VzdG9yQ29tcG9uZW50KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGNtcE1ldGEuJG1lbWJlcnMkKSB7XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKGNtcE1ldGEuJG1lbWJlcnMkKS5tYXAoKFttZW1iZXJOYW1lLCBbbWVtYmVyRmxhZ3NdXSkgPT4ge1xuICAgICAgICAgIGlmIChtZW1iZXJGbGFncyAmIDMxIC8qIFByb3AgKi8gJiYgZWxtLmhhc093blByb3BlcnR5KG1lbWJlck5hbWUpKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGVsbVttZW1iZXJOYW1lXTtcbiAgICAgICAgICAgIGRlbGV0ZSBlbG1bbWVtYmVyTmFtZV07XG4gICAgICAgICAgICBlbG1bbWVtYmVyTmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAge1xuICAgICAgICBpbml0aWFsaXplQ29tcG9uZW50KGVsbSwgaG9zdFJlZiwgY21wTWV0YSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZEhvc3RFdmVudExpc3RlbmVycyhlbG0sIGhvc3RSZWYsIGNtcE1ldGEuJGxpc3RlbmVycyQpO1xuICAgICAgaWYgKGhvc3RSZWYgPT0gbnVsbCA/IHZvaWQgMCA6IGhvc3RSZWYuJGxhenlJbnN0YW5jZSQpIHtcbiAgICAgICAgZmlyZUNvbm5lY3RlZENhbGxiYWNrKGhvc3RSZWYuJGxhenlJbnN0YW5jZSQsIGVsbSk7XG4gICAgICB9IGVsc2UgaWYgKGhvc3RSZWYgPT0gbnVsbCA/IHZvaWQgMCA6IGhvc3RSZWYuJG9uUmVhZHlQcm9taXNlJCkge1xuICAgICAgICBob3N0UmVmLiRvblJlYWR5UHJvbWlzZSQudGhlbigoKSA9PiBmaXJlQ29ubmVjdGVkQ2FsbGJhY2soaG9zdFJlZi4kbGF6eUluc3RhbmNlJCwgZWxtKSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVuZENvbm5lY3RlZCgpO1xuICB9XG59O1xudmFyIHNldENvbnRlbnRSZWZlcmVuY2UgPSBlbG0gPT4ge1xuICBpZiAoIXdpbi5kb2N1bWVudCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb250ZW50UmVmRWxtID0gZWxtW1wicy1jclwiXSA9IHdpbi5kb2N1bWVudC5jcmVhdGVDb21tZW50KFwiXCIpO1xuICBjb250ZW50UmVmRWxtW1wicy1jblwiXSA9IHRydWU7XG4gIGluc2VydEJlZm9yZShlbG0sIGNvbnRlbnRSZWZFbG0sIGVsbS5maXJzdENoaWxkKTtcbn07XG52YXIgZGlzY29ubmVjdEluc3RhbmNlID0gKGluc3RhbmNlLCBlbG0pID0+IHtcbiAge1xuICAgIHNhZmVDYWxsKGluc3RhbmNlLCBcImRpc2Nvbm5lY3RlZENhbGxiYWNrXCIsIHZvaWQgMCwgZWxtIHx8IGluc3RhbmNlKTtcbiAgfVxufTtcbnZhciBkaXNjb25uZWN0ZWRDYWxsYmFjayA9IGFzeW5jIGVsbSA9PiB7XG4gIGlmICgocGx0LiRmbGFncyQgJiAxIC8qIGlzVG1wRGlzY29ubmVjdGVkICovKSA9PT0gMCkge1xuICAgIGNvbnN0IGhvc3RSZWYgPSBnZXRIb3N0UmVmKGVsbSk7XG4gICAge1xuICAgICAgaWYgKGhvc3RSZWYgPT0gbnVsbCA/IHZvaWQgMCA6IGhvc3RSZWYuJHJtTGlzdGVuZXJzJCkge1xuICAgICAgICBob3N0UmVmLiRybUxpc3RlbmVycyQubWFwKHJtTGlzdGVuZXIgPT4gcm1MaXN0ZW5lcigpKTtcbiAgICAgICAgaG9zdFJlZi4kcm1MaXN0ZW5lcnMkID0gdm9pZCAwO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaG9zdFJlZiA9PSBudWxsID8gdm9pZCAwIDogaG9zdFJlZi4kbGF6eUluc3RhbmNlJCkge1xuICAgICAgZGlzY29ubmVjdEluc3RhbmNlKGhvc3RSZWYuJGxhenlJbnN0YW5jZSQsIGVsbSk7XG4gICAgfSBlbHNlIGlmIChob3N0UmVmID09IG51bGwgPyB2b2lkIDAgOiBob3N0UmVmLiRvblJlYWR5UHJvbWlzZSQpIHtcbiAgICAgIGhvc3RSZWYuJG9uUmVhZHlQcm9taXNlJC50aGVuKCgpID0+IGRpc2Nvbm5lY3RJbnN0YW5jZShob3N0UmVmLiRsYXp5SW5zdGFuY2UkLCBlbG0pKTtcbiAgICB9XG4gIH1cbiAgaWYgKHJvb3RBcHBsaWVkU3R5bGVzLmhhcyhlbG0pKSB7XG4gICAgcm9vdEFwcGxpZWRTdHlsZXMuZGVsZXRlKGVsbSk7XG4gIH1cbiAgaWYgKGVsbS5zaGFkb3dSb290ICYmIHJvb3RBcHBsaWVkU3R5bGVzLmhhcyhlbG0uc2hhZG93Um9vdCkpIHtcbiAgICByb290QXBwbGllZFN0eWxlcy5kZWxldGUoZWxtLnNoYWRvd1Jvb3QpO1xuICB9XG59O1xuXG4vLyBzcmMvcnVudGltZS9ib290c3RyYXAtbGF6eS50c1xudmFyIGJvb3RzdHJhcExhenkgPSAobGF6eUJ1bmRsZXMsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICB2YXIgX2E7XG4gIGlmICghd2luLmRvY3VtZW50KSB7XG4gICAgY29uc29sZS53YXJuKFwiU3RlbmNpbDogTm8gZG9jdW1lbnQgZm91bmQuIFNraXBwaW5nIGJvb3RzdHJhcHBpbmcgbGF6eSBjb21wb25lbnRzLlwiKTtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgZW5kQm9vdHN0cmFwID0gY3JlYXRlVGltZSgpO1xuICBjb25zdCBjbXBUYWdzID0gW107XG4gIGNvbnN0IGV4Y2x1ZGUgPSBvcHRpb25zLmV4Y2x1ZGUgfHwgW107XG4gIGNvbnN0IGN1c3RvbUVsZW1lbnRzMiA9IHdpbi5jdXN0b21FbGVtZW50cztcbiAgY29uc3QgaGVhZCA9IHdpbi5kb2N1bWVudC5oZWFkO1xuICBjb25zdCBtZXRhQ2hhcnNldCA9IC8qIEBfX1BVUkVfXyAqL2hlYWQucXVlcnlTZWxlY3RvcihcIm1ldGFbY2hhcnNldF1cIik7XG4gIGNvbnN0IGRhdGFTdHlsZXMgPSAvKiBAX19QVVJFX18gKi93aW4uZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBjb25zdCBkZWZlcnJlZENvbm5lY3RlZENhbGxiYWNrcyA9IFtdO1xuICBsZXQgYXBwTG9hZEZhbGxiYWNrO1xuICBsZXQgaXNCb290c3RyYXBwaW5nID0gdHJ1ZTtcbiAgT2JqZWN0LmFzc2lnbihwbHQsIG9wdGlvbnMpO1xuICBwbHQuJHJlc291cmNlc1VybCQgPSBuZXcgVVJMKG9wdGlvbnMucmVzb3VyY2VzVXJsIHx8IFwiLi9cIiwgd2luLmRvY3VtZW50LmJhc2VVUkkpLmhyZWY7XG4gIHtcbiAgICBwbHQuJGZsYWdzJCB8PSAyIC8qIGFwcExvYWRlZCAqLztcbiAgfVxuICB7XG4gICAgaHlkcmF0ZVNjb3BlZFRvU2hhZG93KCk7XG4gIH1cbiAgbGV0IGhhc1Nsb3RSZWxvY2F0aW9uID0gZmFsc2U7XG4gIGxhenlCdW5kbGVzLm1hcChsYXp5QnVuZGxlID0+IHtcbiAgICBsYXp5QnVuZGxlWzFdLm1hcChjb21wYWN0TWV0YSA9PiB7XG4gICAgICB2YXIgX2EyO1xuICAgICAgY29uc3QgY21wTWV0YSA9IHtcbiAgICAgICAgJGZsYWdzJDogY29tcGFjdE1ldGFbMF0sXG4gICAgICAgICR0YWdOYW1lJDogY29tcGFjdE1ldGFbMV0sXG4gICAgICAgICRtZW1iZXJzJDogY29tcGFjdE1ldGFbMl0sXG4gICAgICAgICRsaXN0ZW5lcnMkOiBjb21wYWN0TWV0YVszXVxuICAgICAgfTtcbiAgICAgIGlmIChjbXBNZXRhLiRmbGFncyQgJiA0IC8qIGhhc1Nsb3RSZWxvY2F0aW9uICovKSB7XG4gICAgICAgIGhhc1Nsb3RSZWxvY2F0aW9uID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgY21wTWV0YS4kbWVtYmVycyQgPSBjb21wYWN0TWV0YVsyXTtcbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgY21wTWV0YS4kbGlzdGVuZXJzJCA9IGNvbXBhY3RNZXRhWzNdO1xuICAgICAgfVxuICAgICAge1xuICAgICAgICBjbXBNZXRhLiRhdHRyc1RvUmVmbGVjdCQgPSBbXTtcbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgY21wTWV0YS4kd2F0Y2hlcnMkID0gKF9hMiA9IGNvbXBhY3RNZXRhWzRdKSAhPSBudWxsID8gX2EyIDoge307XG4gICAgICB9XG4gICAgICBjb25zdCB0YWdOYW1lID0gY21wTWV0YS4kdGFnTmFtZSQ7XG4gICAgICBjb25zdCBIb3N0RWxlbWVudCA9IGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgICAgICAvLyBTdGVuY2lsTGF6eUhvc3RcbiAgICAgICAgY29uc3RydWN0b3Ioc2VsZikge1xuICAgICAgICAgIHN1cGVyKHNlbGYpO1xuICAgICAgICAgIHRoaXMuaGFzUmVnaXN0ZXJlZEV2ZW50TGlzdGVuZXJzID0gZmFsc2U7XG4gICAgICAgICAgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgcmVnaXN0ZXJIb3N0KHNlbGYsIGNtcE1ldGEpO1xuICAgICAgICAgIGlmIChjbXBNZXRhLiRmbGFncyQgJiAxIC8qIHNoYWRvd0RvbUVuY2Fwc3VsYXRpb24gKi8pIHtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWYgKCFzZWxmLnNoYWRvd1Jvb3QpIHtcbiAgICAgICAgICAgICAgICBjcmVhdGVTaGFkb3dSb290LmNhbGwoc2VsZiwgY21wTWV0YSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuc2hhZG93Um9vdC5tb2RlICE9PSBcIm9wZW5cIikge1xuICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gcmUtdXNlIGV4aXN0aW5nIHNoYWRvdyByb290IGZvciAke2NtcE1ldGEuJHRhZ05hbWUkfSEgTW9kZSBpcyBzZXQgdG8gJHtzZWxmLnNoYWRvd1Jvb3QubW9kZX0gYnV0IFN0ZW5jaWwgb25seSBzdXBwb3J0cyBvcGVuIHNoYWRvdyByb290cy5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgICAgY29uc3QgaG9zdFJlZiA9IGdldEhvc3RSZWYodGhpcyk7XG4gICAgICAgICAgaWYgKCFob3N0UmVmKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghdGhpcy5oYXNSZWdpc3RlcmVkRXZlbnRMaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIHRoaXMuaGFzUmVnaXN0ZXJlZEV2ZW50TGlzdGVuZXJzID0gdHJ1ZTtcbiAgICAgICAgICAgIGFkZEhvc3RFdmVudExpc3RlbmVycyh0aGlzLCBob3N0UmVmLCBjbXBNZXRhLiRsaXN0ZW5lcnMkKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGFwcExvYWRGYWxsYmFjaykge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGFwcExvYWRGYWxsYmFjayk7XG4gICAgICAgICAgICBhcHBMb2FkRmFsbGJhY2sgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaXNCb290c3RyYXBwaW5nKSB7XG4gICAgICAgICAgICBkZWZlcnJlZENvbm5lY3RlZENhbGxiYWNrcy5wdXNoKHRoaXMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwbHQuam1wKCgpID0+IGNvbm5lY3RlZENhbGxiYWNrKHRoaXMpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgICAgcGx0LmptcCgoKSA9PiBkaXNjb25uZWN0ZWRDYWxsYmFjayh0aGlzKSk7XG4gICAgICAgICAgcGx0LnJhZigoKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2EzO1xuICAgICAgICAgICAgY29uc3QgaG9zdFJlZiA9IGdldEhvc3RSZWYodGhpcyk7XG4gICAgICAgICAgICBpZiAoIWhvc3RSZWYpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaTIgPSBkZWZlcnJlZENvbm5lY3RlZENhbGxiYWNrcy5maW5kSW5kZXgoaG9zdCA9PiBob3N0ID09PSB0aGlzKTtcbiAgICAgICAgICAgIGlmIChpMiA+IC0xKSB7XG4gICAgICAgICAgICAgIGRlZmVycmVkQ29ubmVjdGVkQ2FsbGJhY2tzLnNwbGljZShpMiwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKChfYTMgPSBob3N0UmVmID09IG51bGwgPyB2b2lkIDAgOiBob3N0UmVmLiR2bm9kZSQpID09IG51bGwgPyB2b2lkIDAgOiBfYTMuJGVsbSQpIGluc3RhbmNlb2YgTm9kZSAmJiAhaG9zdFJlZi4kdm5vZGUkLiRlbG0kLmlzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICAgIGRlbGV0ZSBob3N0UmVmLiR2bm9kZSQuJGVsbSQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29tcG9uZW50T25SZWFkeSgpIHtcbiAgICAgICAgICB2YXIgX2EzO1xuICAgICAgICAgIHJldHVybiAoX2EzID0gZ2V0SG9zdFJlZih0aGlzKSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hMy4kb25SZWFkeVByb21pc2UkO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgaWYgKCEoY21wTWV0YS4kZmxhZ3MkICYgMSAvKiBzaGFkb3dEb21FbmNhcHN1bGF0aW9uICovKSAmJiBjbXBNZXRhLiRmbGFncyQgJiAyNTYgLyogaGFzUmVuZGVyRm4gKi8pIHtcbiAgICAgICAge1xuICAgICAgICAgIHBhdGNoUHNldWRvU2hhZG93RG9tKEhvc3RFbGVtZW50LnByb3RvdHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNtcE1ldGEuJGxhenlCdW5kbGVJZCQgPSBsYXp5QnVuZGxlWzBdO1xuICAgICAgaWYgKCFleGNsdWRlLmluY2x1ZGVzKHRhZ05hbWUpICYmICFjdXN0b21FbGVtZW50czIuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGNtcFRhZ3MucHVzaCh0YWdOYW1lKTtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMyLmRlZmluZSh0YWdOYW1lLCBwcm94eUNvbXBvbmVudChIb3N0RWxlbWVudCwgY21wTWV0YSwgMSAvKiBpc0VsZW1lbnRDb25zdHJ1Y3RvciAqLykpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgaWYgKGNtcFRhZ3MubGVuZ3RoID4gMCkge1xuICAgIGlmIChoYXNTbG90UmVsb2NhdGlvbikge1xuICAgICAgZGF0YVN0eWxlcy50ZXh0Q29udGVudCArPSBTTE9UX0ZCX0NTUztcbiAgICB9XG4gICAge1xuICAgICAgZGF0YVN0eWxlcy50ZXh0Q29udGVudCArPSBjbXBUYWdzLnNvcnQoKSArIEhZRFJBVEVEX0NTUztcbiAgICB9XG4gICAgaWYgKGRhdGFTdHlsZXMuaW5uZXJIVE1MLmxlbmd0aCkge1xuICAgICAgZGF0YVN0eWxlcy5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN0eWxlc1wiLCBcIlwiKTtcbiAgICAgIGNvbnN0IG5vbmNlID0gKF9hID0gcGx0LiRub25jZSQpICE9IG51bGwgPyBfYSA6IHF1ZXJ5Tm9uY2VNZXRhVGFnQ29udGVudCh3aW4uZG9jdW1lbnQpO1xuICAgICAgaWYgKG5vbmNlICE9IG51bGwpIHtcbiAgICAgICAgZGF0YVN0eWxlcy5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gICAgICB9XG4gICAgICBoZWFkLmluc2VydEJlZm9yZShkYXRhU3R5bGVzLCBtZXRhQ2hhcnNldCA/IG1ldGFDaGFyc2V0Lm5leHRTaWJsaW5nIDogaGVhZC5maXJzdENoaWxkKTtcbiAgICB9XG4gIH1cbiAgaXNCb290c3RyYXBwaW5nID0gZmFsc2U7XG4gIGlmIChkZWZlcnJlZENvbm5lY3RlZENhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICBkZWZlcnJlZENvbm5lY3RlZENhbGxiYWNrcy5tYXAoaG9zdCA9PiBob3N0LmNvbm5lY3RlZENhbGxiYWNrKCkpO1xuICB9IGVsc2Uge1xuICAgIHtcbiAgICAgIHBsdC5qbXAoKCkgPT4gYXBwTG9hZEZhbGxiYWNrID0gc2V0VGltZW91dChhcHBEaWRMb2FkLCAzMCkpO1xuICAgIH1cbiAgfVxuICBlbmRCb290c3RyYXAoKTtcbn07XG5cbi8vIHNyYy9ydW50aW1lL2ZyYWdtZW50LnRzXG52YXIgRnJhZ21lbnQgPSAoXywgY2hpbGRyZW4pID0+IGNoaWxkcmVuO1xudmFyIGFkZEhvc3RFdmVudExpc3RlbmVycyA9IChlbG0sIGhvc3RSZWYsIGxpc3RlbmVycywgYXR0YWNoUGFyZW50TGlzdGVuZXJzKSA9PiB7XG4gIGlmIChsaXN0ZW5lcnMgJiYgd2luLmRvY3VtZW50KSB7XG4gICAgbGlzdGVuZXJzLm1hcCgoW2ZsYWdzLCBuYW1lLCBtZXRob2RdKSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBnZXRIb3N0TGlzdGVuZXJUYXJnZXQod2luLmRvY3VtZW50LCBlbG0sIGZsYWdzKTtcbiAgICAgIGNvbnN0IGhhbmRsZXIgPSBob3N0TGlzdGVuZXJQcm94eShob3N0UmVmLCBtZXRob2QpO1xuICAgICAgY29uc3Qgb3B0cyA9IGhvc3RMaXN0ZW5lck9wdHMoZmxhZ3MpO1xuICAgICAgcGx0LmFlbCh0YXJnZXQsIG5hbWUsIGhhbmRsZXIsIG9wdHMpO1xuICAgICAgKGhvc3RSZWYuJHJtTGlzdGVuZXJzJCA9IGhvc3RSZWYuJHJtTGlzdGVuZXJzJCB8fCBbXSkucHVzaCgoKSA9PiBwbHQucmVsKHRhcmdldCwgbmFtZSwgaGFuZGxlciwgb3B0cykpO1xuICAgIH0pO1xuICB9XG59O1xudmFyIGhvc3RMaXN0ZW5lclByb3h5ID0gKGhvc3RSZWYsIG1ldGhvZE5hbWUpID0+IGV2ID0+IHtcbiAgdmFyIF9hO1xuICB0cnkge1xuICAgIHtcbiAgICAgIGlmIChob3N0UmVmLiRmbGFncyQgJiAyNTYgLyogaXNMaXN0ZW5SZWFkeSAqLykge1xuICAgICAgICAoX2EgPSBob3N0UmVmLiRsYXp5SW5zdGFuY2UkKSA9PSBudWxsID8gdm9pZCAwIDogX2FbbWV0aG9kTmFtZV0oZXYpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgKGhvc3RSZWYuJHF1ZXVlZExpc3RlbmVycyQgPSBob3N0UmVmLiRxdWV1ZWRMaXN0ZW5lcnMkIHx8IFtdKS5wdXNoKFttZXRob2ROYW1lLCBldl0pO1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGVFcnJvcihlLCBob3N0UmVmLiRob3N0RWxlbWVudCQpO1xuICB9XG59O1xudmFyIGdldEhvc3RMaXN0ZW5lclRhcmdldCA9IChkb2MsIGVsbSwgZmxhZ3MpID0+IHtcbiAgaWYgKGZsYWdzICYgNCAvKiBUYXJnZXREb2N1bWVudCAqLykge1xuICAgIHJldHVybiBkb2M7XG4gIH1cbiAgaWYgKGZsYWdzICYgOCAvKiBUYXJnZXRXaW5kb3cgKi8pIHtcbiAgICByZXR1cm4gd2luO1xuICB9XG4gIGlmIChmbGFncyAmIDE2IC8qIFRhcmdldEJvZHkgKi8pIHtcbiAgICByZXR1cm4gZG9jLmJvZHk7XG4gIH1cbiAgcmV0dXJuIGVsbTtcbn07XG52YXIgaG9zdExpc3RlbmVyT3B0cyA9IGZsYWdzID0+IHN1cHBvcnRzTGlzdGVuZXJPcHRpb25zID8ge1xuICBwYXNzaXZlOiAoZmxhZ3MgJiAxIC8qIFBhc3NpdmUgKi8pICE9PSAwLFxuICBjYXB0dXJlOiAoZmxhZ3MgJiAyIC8qIENhcHR1cmUgKi8pICE9PSAwXG59IDogKGZsYWdzICYgMiAvKiBDYXB0dXJlICovKSAhPT0gMDtcblxuLy8gc3JjL3J1bnRpbWUvbm9uY2UudHNcbnZhciBzZXROb25jZSA9IG5vbmNlID0+IHBsdC4kbm9uY2UkID0gbm9uY2U7XG5leHBvcnQgeyBCdWlsZCBhcyBCLCBGcmFnbWVudCBhcyBGLCBILCBMb2dMZXZlbCBhcyBMLCByZWFkVGFzayBhcyBhLCBib290c3RyYXBMYXp5IGFzIGIsIGNyZWF0ZUV2ZW50IGFzIGMsIEhvc3QgYXMgZCwgY29uZmlnIGFzIGUsIHByaW50SW9uV2FybmluZyBhcyBmLCBnZXRFbGVtZW50IGFzIGcsIGgsIGZvcmNlVXBkYXRlIGFzIGksIHByaW50SW9uRXJyb3IgYXMgaiwgZ2V0QXNzZXRQYXRoIGFzIGssIGNvbmZpZ0Zyb21TZXNzaW9uIGFzIGwsIGNvbmZpZ0Zyb21VUkwgYXMgbSwgc2F2ZUNvbmZpZyBhcyBuLCBnZXRNb2RlIGFzIG8sIHByb21pc2VSZXNvbHZlIGFzIHAsIHNldE1vZGUgYXMgcSwgcmVnaXN0ZXJJbnN0YW5jZSBhcyByLCBzZXROb25jZSBhcyBzLCBwcmludFJlcXVpcmVkRWxlbWVudEVycm9yIGFzIHQsIHdyaXRlVGFzayBhcyB3IH07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSxJQUFNLFlBQVk7QUFDbEIsSUFBTTtBQUFBO0FBQUEsRUFBbUI7QUFBQSxJQUN2Qix1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
