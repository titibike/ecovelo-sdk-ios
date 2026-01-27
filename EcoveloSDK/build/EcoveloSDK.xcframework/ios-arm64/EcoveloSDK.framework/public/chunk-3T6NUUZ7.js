import {
  __async,
  __glob,
  __spreadValues
} from "./chunk-UESUV5PM.js";

// node_modules/@stencil/core/internal/app-data/index.js
var BUILD = {
  allRenderFn: false,
  element: true,
  event: true,
  hasRenderFn: true,
  hostListener: true,
  hostListenerTargetWindow: true,
  hostListenerTargetDocument: true,
  hostListenerTargetBody: true,
  hostListenerTargetParent: false,
  hostListenerTarget: true,
  member: true,
  method: true,
  mode: true,
  observeAttribute: true,
  prop: true,
  propMutable: true,
  reflect: true,
  scoped: true,
  shadowDom: true,
  slot: true,
  cssAnnotations: true,
  state: true,
  style: true,
  formAssociated: false,
  svg: true,
  updatable: true,
  vdomAttribute: true,
  vdomXlink: true,
  vdomClass: true,
  vdomFunctional: true,
  vdomKey: true,
  vdomListener: true,
  vdomRef: true,
  vdomPropOrAttr: true,
  vdomRender: true,
  vdomStyle: true,
  vdomText: true,
  watchCallback: true,
  taskQueue: true,
  hotModuleReplacement: false,
  isDebug: false,
  isDev: false,
  isTesting: false,
  hydrateServerSide: false,
  hydrateClientSide: false,
  lifecycleDOMEvents: false,
  lazyLoad: false,
  profile: false,
  slotRelocation: true,
  // TODO(STENCIL-914): remove this option when `experimentalSlotFixes` is the default behavior
  appendChildSlotFix: false,
  // TODO(STENCIL-914): remove this option when `experimentalSlotFixes` is the default behavior
  cloneNodeFix: false,
  hydratedAttribute: false,
  hydratedClass: true,
  // TODO(STENCIL-1305): remove this option
  scriptDataOpts: false,
  // TODO(STENCIL-914): remove this option when `experimentalSlotFixes` is the default behavior
  scopedSlotTextContentFix: false,
  // TODO(STENCIL-854): Remove code related to legacy shadowDomShim field
  shadowDomShim: false,
  // TODO(STENCIL-914): remove this option when `experimentalSlotFixes` is the default behavior
  slotChildNodesFix: false,
  invisiblePrehydration: true,
  propBoolean: true,
  propNumber: true,
  propString: true,
  constructableCSS: true,
  devTools: false,
  shadowDelegatesFocus: true,
  initializeNextTick: false,
  asyncLoading: true,
  asyncQueue: false,
  transformTagName: false,
  attachStyles: true,
  // TODO(STENCIL-914): remove this option when `experimentalSlotFixes` is the default behavior
  experimentalSlotFixes: false
};
var NAMESPACE = (
  /* default */
  "app"
);

// node_modules/@stencil/core/internal/app-globals/index.js
var globalStyles = (
  /* default */
  ""
);

// import("./**/*.entry.js*") in node_modules/@stencil/core/internal/client/index.js
var globImport_entry_js = __glob({});

// node_modules/@stencil/core/internal/client/index.js
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var Build = {
  isDev: BUILD.isDev ? true : false,
  isBrowser: true,
  isServer: false,
  isTesting: BUILD.isTesting ? true : false
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
var reWireGetterSetter = (instance, hostRef) => {
  var _a;
  const cmpMeta = hostRef.$cmpMeta$;
  const members = Object.entries((_a = cmpMeta.$members$) != null ? _a : {});
  members.map(([memberName, [memberFlags]]) => {
    if ((BUILD.state || BUILD.prop) && (memberFlags & 31 || memberFlags & 32)) {
      const ogValue = instance[memberName];
      const ogDescriptor = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(instance), memberName);
      Object.defineProperty(instance, memberName, {
        get() {
          return ogDescriptor.get.call(this);
        },
        set(newValue) {
          ogDescriptor.set.call(this, newValue);
        },
        configurable: true,
        enumerable: true
      });
      instance[memberName] = hostRef.$instanceValues$.has(memberName) ? hostRef.$instanceValues$.get(memberName) : ogValue;
    }
  });
};
var getHostRef = (ref) => {
  if (ref.__stencil__getHostRef) {
    return ref.__stencil__getHostRef();
  }
  return void 0;
};
var registerHost = (hostElement, cmpMeta) => {
  const hostRef = {
    $flags$: 0,
    $hostElement$: hostElement,
    $cmpMeta$: cmpMeta,
    $instanceValues$: /* @__PURE__ */ new Map()
  };
  if (BUILD.isDev) {
    hostRef.$renderCount$ = 0;
  }
  if (BUILD.method && BUILD.lazyLoad) {
    hostRef.$onInstancePromise$ = new Promise((r) => hostRef.$onInstanceResolve$ = r);
  }
  if (BUILD.asyncLoading) {
    hostRef.$onReadyPromise$ = new Promise((r) => hostRef.$onReadyResolve$ = r);
    hostElement["s-p"] = [];
    hostElement["s-rc"] = [];
  }
  const ref = hostRef;
  hostElement.__stencil__getHostRef = () => ref;
  if (!BUILD.lazyLoad && BUILD.modernPropertyDecls && (BUILD.state || BUILD.prop)) {
    reWireGetterSetter(hostElement, hostRef);
  }
  return ref;
};
var isMemberInElement = (elm, memberName) => memberName in elm;
var customError;
var consoleError = (e, el) => (customError || console.error)(e, el);
var STENCIL_DEV_MODE = BUILD.isTesting ? ["STENCIL:"] : ["%cstencil", "color: white;background:#4c47ff;font-weight: bold; font-size:10px; padding:2px 6px; border-radius: 5px"];
var consoleDevError = (...m) => console.error(...STENCIL_DEV_MODE, ...m);
var consoleDevWarn = (...m) => console.warn(...STENCIL_DEV_MODE, ...m);
var cmpModules = /* @__PURE__ */ new Map();
var loadModule = (cmpMeta, hostRef, hmrVersionId) => {
  const exportName = cmpMeta.$tagName$.replace(/-/g, "_");
  const bundleId = cmpMeta.$lazyBundleId$;
  if (BUILD.isDev && typeof bundleId !== "string") {
    consoleDevError(`Trying to lazily load component <${cmpMeta.$tagName$}> with style mode "${hostRef.$modeName$}", but it does not exist.`);
    return void 0;
  } else if (!bundleId) {
    return void 0;
  }
  const module = !BUILD.hotModuleReplacement ? cmpModules.get(bundleId) : false;
  if (module) {
    return module[exportName];
  }
  return /* @vite-ignore */ /* webpackInclude: /\.entry\.js$/ */ /* webpackExclude: /\.system\.entry\.js$/ */ /* webpackMode: "lazy" */ globImport_entry_js(`./${bundleId}.entry.js${BUILD.hotModuleReplacement && hmrVersionId ? "?s-hmr=" + hmrVersionId : ""}`).then((importedModule) => {
    if (!BUILD.hotModuleReplacement) {
      cmpModules.set(bundleId, importedModule);
    }
    return importedModule[exportName];
  }, (e) => {
    consoleError(e, hostRef.$hostElement$);
  });
};
var styles = /* @__PURE__ */ new Map();
var modeResolutionChain = [];
var needsScopedSSR = () => false;
var CONTENT_REF_ID = "r";
var ORG_LOCATION_ID = "o";
var SLOT_NODE_ID = "s";
var TEXT_NODE_ID = "t";
var COMMENT_NODE_ID = "c";
var HYDRATE_ID = "s-id";
var HYDRATED_STYLE_ID = "sty-id";
var HYDRATE_CHILD_ID = "c-id";
var SLOT_FB_CSS = "slot-fb{display:contents}slot-fb[hidden]{display:none}";
var XLINK_NS = "http://www.w3.org/1999/xlink";
var FORM_ASSOCIATED_CUSTOM_ELEMENT_CALLBACKS = ["formAssociatedCallback", "formResetCallback", "formDisabledCallback", "formStateRestoreCallback"];
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
var supportsConstructableStylesheets = BUILD.constructableCSS ? /* @__PURE__ */ (() => {
  try {
    new CSSStyleSheet();
    return typeof new CSSStyleSheet().replaceSync === "function";
  } catch (e) {
  }
  return false;
})() : false;
var supportsMutableAdoptedStyleSheets = supportsConstructableStylesheets ? /* @__PURE__ */ (() => !!win.document && Object.getOwnPropertyDescriptor(win.document.adoptedStyleSheets, "length").writable)() : false;
var queueCongestion = 0;
var queuePending = false;
var queueDomReads = [];
var queueDomWrites = [];
var queueDomWritesLow = [];
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
var consumeTimeout = (queue, timeout) => {
  let i2 = 0;
  let ts = 0;
  while (i2 < queue.length && (ts = performance.now()) < timeout) {
    try {
      queue[i2++](ts);
    } catch (e) {
      consoleError(e);
    }
  }
  if (i2 === queue.length) {
    queue.length = 0;
  } else if (i2 !== 0) {
    queue.splice(0, i2);
  }
};
var flush = () => {
  if (BUILD.asyncQueue) {
    queueCongestion++;
  }
  consume(queueDomReads);
  if (BUILD.asyncQueue) {
    const timeout = (plt.$flags$ & 6) === 2 ? performance.now() + 14 * Math.ceil(queueCongestion * (1 / 10)) : Infinity;
    consumeTimeout(queueDomWrites, timeout);
    consumeTimeout(queueDomWritesLow, timeout);
    if (queueDomWrites.length > 0) {
      queueDomWritesLow.push(...queueDomWrites);
      queueDomWrites.length = 0;
    }
    if (queuePending = queueDomReads.length + queueDomWrites.length + queueDomWritesLow.length > 0) {
      plt.raf(flush);
    } else {
      queueCongestion = 0;
    }
  } else {
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
  if (!styles2 || !supportsConstructableStylesheets) return void 0;
  const sheet = new CSSStyleSheet();
  sheet.replaceSync(styles2);
  return sheet;
}
var globalStyleSheet;
function createShadowRoot(cmpMeta) {
  var _a;
  const shadowRoot = BUILD.shadowDelegatesFocus ? this.attachShadow({
    mode: "open",
    delegatesFocus: !!(cmpMeta.$flags$ & 16)
  }) : this.attachShadow({
    mode: "open"
  });
  if (globalStyleSheet === void 0) globalStyleSheet = (_a = createStyleSheetIfNeededAndSupported(globalStyles)) != null ? _a : null;
  if (globalStyleSheet) {
    if (supportsMutableAdoptedStyleSheets) {
      shadowRoot.adoptedStyleSheets.push(globalStyleSheet);
    } else {
      shadowRoot.adoptedStyleSheets = [...shadowRoot.adoptedStyleSheets, globalStyleSheet];
    }
  }
}
var lowerPathParam = (fn) => (p) => fn(p.toLowerCase());
var isDtsFile = lowerPathParam((p) => p.endsWith(".d.ts") || p.endsWith(".d.mts") || p.endsWith(".d.cts"));
var isTsFile = lowerPathParam((p) => !isDtsFile(p) && (p.endsWith(".ts") || p.endsWith(".mts") || p.endsWith(".cts")));
var isTsxFile = lowerPathParam((p) => p.endsWith(".tsx") || p.endsWith(".mtsx") || p.endsWith(".ctsx"));
var isJsxFile = lowerPathParam((p) => p.endsWith(".jsx") || p.endsWith(".mjsx") || p.endsWith(".cjsx"));
var isJsFile = lowerPathParam((p) => p.endsWith(".js") || p.endsWith(".mjs") || p.endsWith(".cjs"));
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
  if (BUILD.hydrateClientSide && typeof position !== "undefined") {
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
    const isShadowDom = BUILD.shadowDom ? srcNode.shadowRoot && supportsShadow : false;
    const clonedNode = orgCloneNode.call(srcNode, isShadowDom ? deep : false);
    if (BUILD.slot && !isShadowDom && deep) {
      let i2 = 0;
      let slotted, nonStencilNode;
      const stencilPrivates = ["s-id", "s-cr", "s-lr", "s-rc", "s-sc", "s-p", "s-cn", "s-sr", "s-sn", "s-hn", "s-ol", "s-nr", "s-si", "s-rf", "s-scs"];
      const childNodes = this.__childNodes || this.childNodes;
      for (; i2 < childNodes.length; i2++) {
        slotted = childNodes[i2]["s-nr"];
        nonStencilNode = stencilPrivates.every((privateField) => !childNodes[i2][privateField]);
        if (slotted) {
          if (BUILD.appendChildSlotFix && clonedNode.__appendChild) {
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
var i = 0;
var createTime = (fnName, tagName = "") => {
  if (BUILD.profile && performance.mark) {
    const key = `st:${fnName}:${tagName}:${i++}`;
    performance.mark(key);
    return () => performance.measure(`[Stencil] ${fnName}() <${tagName}>`, key);
  } else {
    return () => {
      return;
    };
  }
};
var uniqueTime = (key, measureText) => {
  if (BUILD.profile && performance.mark) {
    if (performance.getEntriesByName(key, "mark").length === 0) {
      performance.mark(key);
    }
    return () => {
      if (performance.getEntriesByName(measureText, "measure").length === 0) {
        performance.measure(measureText, key);
      }
    };
  } else {
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
  if (!BUILD.attachStyles || !win.document) {
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
        if (BUILD.hydrateClientSide && styleContainerNode.host && (styleElm = styleContainerNode.querySelector(`[${HYDRATED_STYLE_ID}="${scopeId2}"]`))) {
          styleElm.innerHTML = style;
        } else {
          styleElm = win.document.createElement("style");
          styleElm.innerHTML = style;
          const nonce = (_a = plt.$nonce$) != null ? _a : queryNonceMetaTagContent(win.document);
          if (nonce != null) {
            styleElm.setAttribute("nonce", nonce);
          }
          if ((BUILD.hydrateServerSide || BUILD.hotModuleReplacement) && (cmpMeta.$flags$ & 2 || cmpMeta.$flags$ & 128)) {
            styleElm.setAttribute(HYDRATED_STYLE_ID, scopeId2);
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
    } else if (BUILD.constructableCSS && !styleContainerNode.adoptedStyleSheets.includes(style)) {
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
  const scopeId2 = addStyle(BUILD.shadowDom && supportsShadow && elm.shadowRoot ? elm.shadowRoot : elm.getRootNode(), cmpMeta, hostRef.$modeName$);
  if ((BUILD.shadowDom || BUILD.scoped) && BUILD.cssAnnotations && flags & 10) {
    elm["s-sc"] = scopeId2;
    elm.classList.add(scopeId2 + "-h");
  }
  endAttachStyles();
};
var getScopeId = (cmp, mode) => "sc-" + (BUILD.mode && mode && cmp.$flags$ & 32 ? cmp.$tagName$ + "-" + mode : cmp.$tagName$);
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
        } else if (BUILD.isDev && typeof nodeName !== "function" && child.$flags$ === void 0) {
          consoleDevError(`vNode passed as children has unexpected type.
Make sure it's using the correct h() function.
Empty objects can also be the cause, look for JSX comments that became objects.`);
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
    if (BUILD.isDev && nodeName === "input") {
      validateInputProperties(vnodeData);
    }
    if (BUILD.vdomKey && vnodeData.key) {
      key = vnodeData.key;
    }
    if (BUILD.slotRelocation && vnodeData.name) {
      slotName = vnodeData.name;
    }
    if (BUILD.vdomClass) {
      const classData = vnodeData.className || vnodeData.class;
      if (classData) {
        vnodeData.class = typeof classData !== "object" ? classData : Object.keys(classData).filter((k) => classData[k]).join(" ");
      }
    }
  }
  if (BUILD.isDev && vNodeChildren.some(isHost)) {
    consoleDevError(`The <Host> must be the single root component. Make sure:
- You are NOT using hostData() and <Host> in the same component.
- <Host> is used once, and it's the single root component of the render() function.`);
  }
  if (BUILD.vdomFunctional && typeof nodeName === "function") {
    return nodeName(vnodeData === null ? {} : vnodeData, vNodeChildren, vdomFnUtils);
  }
  const vnode = newVNode(nodeName, null);
  vnode.$attrs$ = vnodeData;
  if (vNodeChildren.length > 0) {
    vnode.$children$ = vNodeChildren;
  }
  if (BUILD.vdomKey) {
    vnode.$key$ = key;
  }
  if (BUILD.slotRelocation) {
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
  if (BUILD.vdomAttribute) {
    vnode.$attrs$ = null;
  }
  if (BUILD.vdomKey) {
    vnode.$key$ = null;
  }
  if (BUILD.slotRelocation) {
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
var validateInputProperties = (inputElm) => {
  const props = Object.keys(inputElm);
  const value = props.indexOf("value");
  if (value === -1) {
    return;
  }
  const typeIndex = props.indexOf("type");
  const minIndex = props.indexOf("min");
  const maxIndex = props.indexOf("max");
  const stepIndex = props.indexOf("step");
  if (value < typeIndex || value < minIndex || value < maxIndex || value < stepIndex) {
    consoleDevWarn(`The "value" prop of <input> should be set after "min", "max", "type" and "step"`);
  }
};
var initializeClientHydrate = (hostElm, tagName, hostId, hostRef) => {
  var _a, _b, _c;
  const endHydrate = createTime("hydrateClient", tagName);
  const shadowRoot = hostElm.shadowRoot;
  const childRenderNodes = [];
  const slotNodes = [];
  const slottedNodes = [];
  const shadowRootNodes = BUILD.shadowDom && shadowRoot ? [] : null;
  const vnode = newVNode(tagName, null);
  vnode.$elm$ = hostElm;
  const members = Object.entries(((_a = hostRef.$cmpMeta$) == null ? void 0 : _a.$members$) || {});
  members.forEach(([memberName, [memberFlags, metaAttributeName]]) => {
    var _a2, _b2;
    if (!(memberFlags & 31)) {
      return;
    }
    const attributeName = metaAttributeName || memberName;
    const attrVal = hostElm.getAttribute(attributeName);
    if (attrVal !== null) {
      const attrPropVal = parsePropertyValue(attrVal, memberFlags, BUILD.formAssociated && !!(((_a2 = hostRef.$cmpMeta$) == null ? void 0 : _a2.$flags$) & 64));
      (_b2 = hostRef == null ? void 0 : hostRef.$instanceValues$) == null ? void 0 : _b2.set(memberName, attrPropVal);
    }
  });
  let scopeId2;
  if (BUILD.scoped) {
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
        const scopeId3 = getScopeId(cmpMeta.$cmpMeta$, BUILD.mode ? childRenderNode.$elm$.getAttribute("s-mode") : void 0);
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
        if (BUILD.experimentalSlotFixes) {
          patchSlottedNode(slottedItem.node);
        }
      }
    }
  }
  if (BUILD.scoped && scopeId2 && slotNodes.length) {
    slotNodes.forEach((slot) => {
      slot.$elm$.parentElement.classList.add(scopeId2 + "-s");
    });
  }
  if (BUILD.shadowDom && shadowRoot) {
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
        if (BUILD.scoped && scopeId2 && childIdSplt[0] === hostId) {
          node["s-si"] = scopeId2;
          childVNode.$attrs$.class += " " + scopeId2;
        }
        const slotName = childVNode.$elm$.getAttribute("s-sn");
        if (typeof slotName === "string") {
          if (childVNode.$tag$ === "slot-fb") {
            addSlot(slotName, childIdSplt[2], childVNode, node, parentVNode, childRenderNodes, slotNodes, shadowRootNodes, slottedNodes);
            if (BUILD.scoped && scopeId2) {
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
          if (BUILD.shadowDom && shadowRootNodes) {
            node.remove();
          } else if (BUILD.slotRelocation) {
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
  if (BUILD.shadowDom && shadowRootNodes && win.document) {
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
var safeSelector = (selector) => {
  const placeholders = [];
  let index = 0;
  selector = selector.replace(/(\[\s*part~=\s*("[^"]*"|'[^']*')\s*\])/g, (_, keep) => {
    const replaceBy = `__part-${index}__`;
    placeholders.push(keep);
    index++;
    return replaceBy;
  });
  selector = selector.replace(/(\[[^\]]*\])/g, (_, keep) => {
    const replaceBy = `__ph-${index}__`;
    placeholders.push(keep);
    index++;
    return replaceBy;
  });
  const content = selector.replace(/(:nth-[-\w]+)(\([^)]+\))/g, (_, pseudo, exp) => {
    const replaceBy = `__ph-${index}__`;
    placeholders.push(exp);
    index++;
    return pseudo + replaceBy;
  });
  const ss = {
    content,
    placeholders
  };
  return ss;
};
var restoreSafeSelector = (placeholders, content) => {
  content = content.replace(/__part-(\d+)__/g, (_, index) => placeholders[+index]);
  return content.replace(/__ph-(\d+)__/g, (_, index) => placeholders[+index]);
};
var _polyfillHost = "-shadowcsshost";
var _polyfillSlotted = "-shadowcssslotted";
var _polyfillHostContext = "-shadowcsscontext";
var _parenSuffix = ")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)";
var _cssColonHostRe = new RegExp("(" + _polyfillHost + _parenSuffix, "gim");
var _cssColonHostContextRe = new RegExp("(" + _polyfillHostContext + _parenSuffix, "gim");
var _cssColonSlottedRe = new RegExp("(" + _polyfillSlotted + _parenSuffix, "gim");
var _polyfillHostNoCombinator = _polyfillHost + "-no-combinator";
var _polyfillHostNoCombinatorRe = /-shadowcsshost-no-combinator([^\s]*)/;
var _shadowDOMSelectorsRe = [/::shadow/g, /::content/g];
var _safePartRe = /__part-(\d+)__/g;
var _selectorReSuffix = "([>\\s~+[.,{:][\\s\\S]*)?$";
var _polyfillHostRe = /-shadowcsshost/gim;
var createSupportsRuleRe = (selector) => {
  const safeSelector2 = escapeRegExpSpecialCharacters(selector);
  return new RegExp(
    // First capture group: match any context before the selector that's not inside @supports selector()
    // Using negative lookahead to avoid matching inside @supports selector(...) condition
    `(^|[^@]|@(?!supports\\s+selector\\s*\\([^{]*?${safeSelector2}))(${safeSelector2}\\b)`,
    "g"
  );
};
var _colonSlottedRe = createSupportsRuleRe("::slotted");
var _colonHostRe = createSupportsRuleRe(":host");
var _colonHostContextRe = createSupportsRuleRe(":host-context");
var _commentRe = /\/\*\s*[\s\S]*?\*\//g;
var stripComments = (input) => {
  return input.replace(_commentRe, "");
};
var _commentWithHashRe = /\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g;
var extractCommentsWithHash = (input) => {
  return input.match(_commentWithHashRe) || [];
};
var _ruleRe = /(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g;
var _curlyRe = /([{}])/g;
var _selectorPartsRe = /(^.*?[^\\])??((:+)(.*)|$)/;
var OPEN_CURLY = "{";
var CLOSE_CURLY = "}";
var BLOCK_PLACEHOLDER = "%BLOCK%";
var processRules = (input, ruleCallback) => {
  const inputWithEscapedBlocks = escapeBlocks(input);
  let nextBlockIndex = 0;
  return inputWithEscapedBlocks.escapedString.replace(_ruleRe, (...m) => {
    const selector = m[2];
    let content = "";
    let suffix = m[4];
    let contentPrefix = "";
    if (suffix && suffix.startsWith("{" + BLOCK_PLACEHOLDER)) {
      content = inputWithEscapedBlocks.blocks[nextBlockIndex++];
      suffix = suffix.substring(BLOCK_PLACEHOLDER.length + 1);
      contentPrefix = "{";
    }
    const cssRule = {
      selector,
      content
    };
    const rule = ruleCallback(cssRule);
    return `${m[1]}${rule.selector}${m[3]}${contentPrefix}${rule.content}${suffix}`;
  });
};
var escapeBlocks = (input) => {
  const inputParts = input.split(_curlyRe);
  const resultParts = [];
  const escapedBlocks = [];
  let bracketCount = 0;
  let currentBlockParts = [];
  for (let partIndex = 0; partIndex < inputParts.length; partIndex++) {
    const part = inputParts[partIndex];
    if (part === CLOSE_CURLY) {
      bracketCount--;
    }
    if (bracketCount > 0) {
      currentBlockParts.push(part);
    } else {
      if (currentBlockParts.length > 0) {
        escapedBlocks.push(currentBlockParts.join(""));
        resultParts.push(BLOCK_PLACEHOLDER);
        currentBlockParts = [];
      }
      resultParts.push(part);
    }
    if (part === OPEN_CURLY) {
      bracketCount++;
    }
  }
  if (currentBlockParts.length > 0) {
    escapedBlocks.push(currentBlockParts.join(""));
    resultParts.push(BLOCK_PLACEHOLDER);
  }
  const strEscapedBlocks = {
    escapedString: resultParts.join(""),
    blocks: escapedBlocks
  };
  return strEscapedBlocks;
};
var insertPolyfillHostInCssText = (cssText) => {
  const supportsBlocks = [];
  cssText = cssText.replace(/@supports\s+selector\s*\(\s*([^)]*)\s*\)/g, (_, selectorContent) => {
    const placeholder = `__supports_${supportsBlocks.length}__`;
    supportsBlocks.push(selectorContent);
    return `@supports selector(${placeholder})`;
  });
  cssText = cssText.replace(_colonHostContextRe, `$1${_polyfillHostContext}`).replace(_colonHostRe, `$1${_polyfillHost}`).replace(_colonSlottedRe, `$1${_polyfillSlotted}`);
  supportsBlocks.forEach((originalSelector, index) => {
    cssText = cssText.replace(`__supports_${index}__`, originalSelector);
  });
  return cssText;
};
var convertColonRule = (cssText, regExp, partReplacer) => {
  return cssText.replace(regExp, (...m) => {
    if (m[2]) {
      const parts = m[2].split(",");
      const r = [];
      for (let i2 = 0; i2 < parts.length; i2++) {
        const p = parts[i2].trim();
        if (!p) break;
        r.push(partReplacer(_polyfillHostNoCombinator, p, m[3]));
      }
      return r.join(",");
    } else {
      return _polyfillHostNoCombinator + m[3];
    }
  });
};
var colonHostPartReplacer = (host, part, suffix) => {
  return host + part.replace(_polyfillHost, "") + suffix;
};
var convertColonHost = (cssText) => {
  return convertColonRule(cssText, _cssColonHostRe, colonHostPartReplacer);
};
var colonHostContextPartReplacer = (host, part, suffix) => {
  if (part.indexOf(_polyfillHost) > -1) {
    return colonHostPartReplacer(host, part, suffix);
  } else {
    return host + part + suffix + ", " + part + " " + host + suffix;
  }
};
var convertColonSlotted = (cssText, slotScopeId) => {
  const slotClass = "." + slotScopeId + " > ";
  const selectors = [];
  cssText = cssText.replace(_cssColonSlottedRe, (...m) => {
    if (m[2]) {
      const compound = m[2].trim();
      const suffix = m[3];
      const slottedSelector = slotClass + compound + suffix;
      let prefixSelector = "";
      for (let i2 = m[4] - 1; i2 >= 0; i2--) {
        const char = m[5][i2];
        if (char === "}" || char === ",") {
          break;
        }
        prefixSelector = char + prefixSelector;
      }
      const orgSelector = (prefixSelector + slottedSelector).trim();
      const addedSelector = `${prefixSelector.trimEnd()}${slottedSelector.trim()}`.trim();
      if (orgSelector !== addedSelector) {
        const updatedSelector = `${addedSelector}, ${orgSelector}`;
        selectors.push({
          orgSelector,
          updatedSelector
        });
      }
      return slottedSelector;
    } else {
      return _polyfillHostNoCombinator + m[3];
    }
  });
  return {
    selectors,
    cssText
  };
};
var convertColonHostContext = (cssText) => {
  return convertColonRule(cssText, _cssColonHostContextRe, colonHostContextPartReplacer);
};
var convertShadowDOMSelectors = (cssText) => {
  return _shadowDOMSelectorsRe.reduce((result, pattern) => result.replace(pattern, " "), cssText);
};
var makeScopeMatcher = (scopeSelector2) => {
  const lre = /\[/g;
  const rre = /\]/g;
  scopeSelector2 = scopeSelector2.replace(lre, "\\[").replace(rre, "\\]");
  return new RegExp("^(" + scopeSelector2 + ")" + _selectorReSuffix, "m");
};
var selectorNeedsScoping = (selector, scopeSelector2) => {
  const re = makeScopeMatcher(scopeSelector2);
  return !re.test(selector);
};
var injectScopingSelector = (selector, scopingSelector) => {
  return selector.replace(_selectorPartsRe, (_, before = "", _colonGroup, colon = "", after = "") => {
    return before + scopingSelector + colon + after;
  });
};
var applySimpleSelectorScope = (selector, scopeSelector2, hostSelector) => {
  _polyfillHostRe.lastIndex = 0;
  if (_polyfillHostRe.test(selector)) {
    const replaceBy = `.${hostSelector}`;
    return selector.replace(_polyfillHostNoCombinatorRe, (_, selector2) => injectScopingSelector(selector2, replaceBy)).replace(_polyfillHostRe, replaceBy + " ");
  }
  return scopeSelector2 + " " + selector;
};
var applyStrictSelectorScope = (selector, scopeSelector2, hostSelector) => {
  const isRe = /\[is=([^\]]*)\]/g;
  scopeSelector2 = scopeSelector2.replace(isRe, (_, ...parts) => parts[0]);
  const className = "." + scopeSelector2;
  const _scopeSelectorPart = (p) => {
    let scopedP = p.trim();
    if (!scopedP) {
      return "";
    }
    if (p.indexOf(_polyfillHostNoCombinator) > -1) {
      scopedP = applySimpleSelectorScope(p, scopeSelector2, hostSelector);
    } else {
      const t = p.replace(_polyfillHostRe, "");
      if (t.length > 0) {
        scopedP = injectScopingSelector(t, className);
      }
    }
    return scopedP;
  };
  const safeContent = safeSelector(selector);
  selector = safeContent.content;
  let scopedSelector = "";
  let startIndex = 0;
  let res;
  const sep = /( |>|\+|~(?!=))(?=(?:[^()]*\([^()]*\))*[^()]*$)\s*/g;
  const hasHost = selector.indexOf(_polyfillHostNoCombinator) > -1;
  let shouldScope = !hasHost;
  while ((res = sep.exec(selector)) !== null) {
    const separator = res[1];
    const part2 = selector.slice(startIndex, res.index).trim();
    shouldScope = shouldScope || part2.indexOf(_polyfillHostNoCombinator) > -1;
    const scopedPart = shouldScope ? _scopeSelectorPart(part2) : part2;
    scopedSelector += `${scopedPart} ${separator} `;
    startIndex = sep.lastIndex;
  }
  const part = selector.substring(startIndex);
  shouldScope = !part.match(_safePartRe) && (shouldScope || part.indexOf(_polyfillHostNoCombinator) > -1);
  scopedSelector += shouldScope ? _scopeSelectorPart(part) : part;
  return restoreSafeSelector(safeContent.placeholders, scopedSelector);
};
var scopeSelector = (selector, scopeSelectorText, hostSelector, slotSelector) => {
  return selector.split(",").map((shallowPart) => {
    if (slotSelector && shallowPart.indexOf("." + slotSelector) > -1) {
      return shallowPart.trim();
    }
    if (selectorNeedsScoping(shallowPart, scopeSelectorText)) {
      return applyStrictSelectorScope(shallowPart, scopeSelectorText, hostSelector).trim();
    } else {
      return shallowPart.trim();
    }
  }).join(", ");
};
var scopeSelectors = (cssText, scopeSelectorText, hostSelector, slotSelector, commentOriginalSelector) => {
  return processRules(cssText, (rule) => {
    let selector = rule.selector;
    let content = rule.content;
    if (rule.selector[0] !== "@") {
      selector = scopeSelector(rule.selector, scopeSelectorText, hostSelector, slotSelector);
    } else if (rule.selector.startsWith("@media") || rule.selector.startsWith("@supports") || rule.selector.startsWith("@page") || rule.selector.startsWith("@document")) {
      content = scopeSelectors(rule.content, scopeSelectorText, hostSelector, slotSelector, commentOriginalSelector);
    }
    const cssRule = {
      selector: selector.replace(/\s{2,}/g, " ").trim(),
      content
    };
    return cssRule;
  });
};
var scopeCssText = (cssText, scopeId2, hostScopeId, slotScopeId, commentOriginalSelector) => {
  cssText = insertPolyfillHostInCssText(cssText);
  cssText = convertColonHost(cssText);
  cssText = convertColonHostContext(cssText);
  const slotted = convertColonSlotted(cssText, slotScopeId);
  cssText = slotted.cssText;
  cssText = convertShadowDOMSelectors(cssText);
  if (scopeId2) {
    cssText = scopeSelectors(cssText, scopeId2, hostScopeId, slotScopeId, commentOriginalSelector);
  }
  cssText = replaceShadowCssHost(cssText, hostScopeId);
  cssText = cssText.replace(/>\s*\*\s+([^{, ]+)/gm, " $1 ");
  return {
    cssText: cssText.trim(),
    // We need to replace the shadow CSS host string in each of these selectors since we created
    // them prior to the replacement happening in the components CSS text.
    slottedSelectors: slotted.selectors.map((ref) => ({
      orgSelector: replaceShadowCssHost(ref.orgSelector, hostScopeId),
      updatedSelector: replaceShadowCssHost(ref.updatedSelector, hostScopeId)
    }))
  };
};
var replaceShadowCssHost = (cssText, hostScopeId) => {
  return cssText.replace(/-shadowcsshost-no-combinator/g, `.${hostScopeId}`);
};
var expandPartSelectors = (cssText) => {
  const partSelectorRe = /([^\s,{][^,{]*?)::part\(\s*([^)]+?)\s*\)((?:[:.][^,{]*)*)/g;
  return processRules(cssText, (rule) => {
    if (rule.selector[0] === "@") {
      return rule;
    }
    const selectors = rule.selector.split(",").map((sel) => {
      const out = [sel.trim()];
      let m;
      while ((m = partSelectorRe.exec(sel)) !== null) {
        const before = m[1].trimEnd();
        const partNames = m[2].trim().split(/\s+/);
        const after = m[3] || "";
        const partAttr = partNames.flatMap((p) => {
          if (!rule.selector.includes(`[part~="${p}"]`)) {
            return [`[part~="${p}"]`];
          }
          return [];
        }).join("");
        const expanded = `${before} ${partAttr}${after}`;
        if (!!partAttr && expanded !== sel.trim()) {
          out.push(expanded);
        }
      }
      return out.join(", ");
    });
    rule.selector = selectors.join(", ");
    return rule;
  });
};
var scopeCss = (cssText, scopeId2, commentOriginalSelector) => {
  const hostScopeId = scopeId2 + "-h";
  const slotScopeId = scopeId2 + "-s";
  const commentsWithHash = extractCommentsWithHash(cssText);
  cssText = stripComments(cssText);
  const orgSelectors = [];
  if (commentOriginalSelector) {
    const processCommentedSelector = (rule) => {
      const placeholder = `/*!@___${orgSelectors.length}___*/`;
      const comment = `/*!@${rule.selector}*/`;
      orgSelectors.push({
        placeholder,
        comment
      });
      rule.selector = placeholder + rule.selector;
      return rule;
    };
    cssText = processRules(cssText, (rule) => {
      if (rule.selector[0] !== "@") {
        return processCommentedSelector(rule);
      } else if (rule.selector.startsWith("@media") || rule.selector.startsWith("@supports") || rule.selector.startsWith("@page") || rule.selector.startsWith("@document")) {
        rule.content = processRules(rule.content, processCommentedSelector);
        return rule;
      }
      return rule;
    });
  }
  const scoped = scopeCssText(cssText, scopeId2, hostScopeId, slotScopeId, commentOriginalSelector);
  cssText = [scoped.cssText, ...commentsWithHash].join("\n");
  if (commentOriginalSelector) {
    orgSelectors.forEach(({
      placeholder,
      comment
    }) => {
      cssText = cssText.replace(placeholder, comment);
    });
  }
  scoped.slottedSelectors.forEach((slottedSelector) => {
    const regex = new RegExp(escapeRegExpSpecialCharacters(slottedSelector.orgSelector), "g");
    cssText = cssText.replace(regex, slottedSelector.updatedSelector);
  });
  cssText = expandPartSelectors(cssText);
  return cssText;
};
var computeMode = (elm) => modeResolutionChain.map((h2) => h2(elm)).find((m) => !!m);
var setMode = (handler) => modeResolutionChain.push(handler);
var getMode = (ref) => {
  var _a;
  return (_a = getHostRef(ref)) == null ? void 0 : _a.$modeName$;
};
var parsePropertyValue = (propValue, propType, isFormAssociated) => {
  if ((BUILD.hydrateClientSide || BUILD.hydrateServerSide) && typeof propValue === "string" && propValue.startsWith(SERIALIZED_PREFIX)) {
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
    if (BUILD.propBoolean && propType & 4) {
      if (BUILD.formAssociated && isFormAssociated && typeof propValue === "string") {
        return propValue === "" || !!propValue;
      } else {
        return propValue === "false" ? false : propValue === "" || !!propValue;
      }
    }
    if (BUILD.propNumber && propType & 2) {
      return typeof propValue === "string" ? parseFloat(propValue) : typeof propValue === "number" ? propValue : NaN;
    }
    if (BUILD.propString && propType & 1) {
      return String(propValue);
    }
    return propValue;
  }
  return propValue;
};
var getElement = (ref) => {
  var _a;
  return BUILD.lazyLoad ? (_a = getHostRef(ref)) == null ? void 0 : _a.$hostElement$ : ref;
};
var createEvent = (ref, name, flags) => {
  const elm = getElement(ref);
  return {
    emit: (detail) => {
      if (BUILD.isDev && !elm.isConnected) {
        consoleDevWarn(`The "${name}" event was emitted, but the dispatcher node is no longer connected to the dom.`);
      }
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
  if (BUILD.vdomClass && memberName === "class") {
    const classList = elm.classList;
    const oldClasses = parseClassList(oldValue);
    let newClasses = parseClassList(newValue);
    if (BUILD.hydrateClientSide && (elm["s-si"] || elm["s-sc"]) && initialRender) {
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
  } else if (BUILD.vdomStyle && memberName === "style") {
    if (BUILD.updatable) {
      for (const prop in oldValue) {
        if (!newValue || newValue[prop] == null) {
          if (!BUILD.hydrateServerSide && prop.includes("-")) {
            elm.style.removeProperty(prop);
          } else {
            elm.style[prop] = "";
          }
        }
      }
    }
    for (const prop in newValue) {
      if (!oldValue || newValue[prop] !== oldValue[prop]) {
        if (!BUILD.hydrateServerSide && prop.includes("-")) {
          elm.style.setProperty(prop, newValue[prop]);
        } else {
          elm.style[prop] = newValue[prop];
        }
      }
    }
  } else if (BUILD.vdomKey && memberName === "key") {
  } else if (BUILD.vdomRef && memberName === "ref") {
    if (newValue) {
      newValue(elm);
    }
  } else if (BUILD.vdomListener && (BUILD.lazyLoad ? !isProp : !elm.__lookupSetter__(memberName)) && memberName[0] === "o" && memberName[1] === "n") {
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
  } else if (BUILD.vdomPropOrAttr) {
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
    if (BUILD.vdomXlink) {
      if (ln !== (ln = ln.replace(/^xlink\:?/, ""))) {
        memberName = ln;
        xlink = true;
      }
    }
    if (newValue == null || newValue === false) {
      if (newValue !== false || elm.getAttribute(memberName) === "") {
        if (BUILD.vdomXlink && xlink) {
          elm.removeAttributeNS(XLINK_NS, memberName);
        } else {
          elm.removeAttribute(memberName);
        }
      }
    } else if ((!isProp || flags & 4 || isSvg) && !isComplex && elm.nodeType === 1) {
      newValue = newValue === true ? "" : newValue;
      if (BUILD.vdomXlink && xlink) {
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
  if (BUILD.updatable) {
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
  if (BUILD.slotRelocation && !useNativeShadowDom) {
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
  if (BUILD.isDev && newVNode2.$elm$) {
    consoleDevError(`The JSX ${newVNode2.$text$ !== null ? `"${newVNode2.$text$}" text` : `"${newVNode2.$tag$}" element`} node should not be shared within the same renderer. The renderer caches element lookups in order to improve performance. However, a side effect from this is that the exact same JSX node should not be reused. For more information please see https://stenciljs.com/docs/templating-jsx#avoid-shared-jsx-nodes`);
  }
  if (BUILD.vdomText && newVNode2.$text$ !== null) {
    elm = newVNode2.$elm$ = win.document.createTextNode(newVNode2.$text$);
  } else if (BUILD.slotRelocation && newVNode2.$flags$ & 1) {
    elm = newVNode2.$elm$ = BUILD.isDebug || BUILD.hydrateServerSide ? slotReferenceDebugNode(newVNode2) : win.document.createTextNode("");
    if (BUILD.vdomAttribute) {
      updateElement(null, newVNode2, isSvgMode);
    }
  } else {
    if (BUILD.svg && !isSvgMode) {
      isSvgMode = newVNode2.$tag$ === "svg";
    }
    if (!win.document) {
      throw new Error("You are trying to render a Stencil component in an environment that doesn't support the DOM. Make sure to populate the [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window/window) object before rendering a component.");
    }
    elm = newVNode2.$elm$ = BUILD.svg ? win.document.createElementNS(isSvgMode ? SVG_NS : HTML_NS, !useNativeShadowDom && BUILD.slotRelocation && newVNode2.$flags$ & 2 ? "slot-fb" : newVNode2.$tag$) : win.document.createElement(!useNativeShadowDom && BUILD.slotRelocation && newVNode2.$flags$ & 2 ? "slot-fb" : newVNode2.$tag$);
    if (BUILD.svg && isSvgMode && newVNode2.$tag$ === "foreignObject") {
      isSvgMode = false;
    }
    if (BUILD.vdomAttribute) {
      updateElement(null, newVNode2, isSvgMode);
    }
    if ((BUILD.scoped || BUILD.hydrateServerSide && 128) && isDef(scopeId) && elm["s-si"] !== scopeId) {
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
    if (BUILD.svg) {
      if (newVNode2.$tag$ === "svg") {
        isSvgMode = false;
      } else if (elm.tagName === "foreignObject") {
        isSvgMode = true;
      }
    }
  }
  elm["s-hn"] = hostTagName;
  if (BUILD.slotRelocation) {
    if (newVNode2.$flags$ & (2 | 1)) {
      elm["s-sr"] = true;
      elm["s-cr"] = contentRef;
      elm["s-sn"] = newVNode2.$name$ || "";
      elm["s-rf"] = (_a = newVNode2.$attrs$) == null ? void 0 : _a.ref;
      patchSlotNode(elm);
      oldVNode = oldParentVNode && oldParentVNode.$children$ && oldParentVNode.$children$[childIndex];
      if (oldVNode && oldVNode.$tag$ === newVNode2.$tag$ && oldParentVNode.$elm$) {
        if (BUILD.experimentalSlotFixes) {
          relocateToHostRoot(oldParentVNode.$elm$);
        } else {
          putBackInOriginalLocation(oldParentVNode.$elm$, false);
        }
      }
      if (BUILD.scoped || BUILD.hydrateServerSide && 128) {
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
  plt.$flags$ &= ~1;
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
  plt.$flags$ &= ~1;
};
var addVnodes = (parentElm, before, parentVNode, vnodes, startIdx, endIdx) => {
  let containerElm = BUILD.slotRelocation && parentElm["s-cr"] && parentElm["s-cr"].parentNode || parentElm;
  let childNode;
  if (BUILD.shadowDom && containerElm.shadowRoot && containerElm.tagName === hostTagName) {
    containerElm = containerElm.shadowRoot;
  }
  for (; startIdx <= endIdx; ++startIdx) {
    if (vnodes[startIdx]) {
      childNode = createElm(null, parentVNode, startIdx);
      if (childNode) {
        vnodes[startIdx].$elm$ = childNode;
        insertBefore(containerElm, childNode, BUILD.slotRelocation ? referenceNode(before) : before);
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
        if (BUILD.slotRelocation) {
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
      if (BUILD.slotRelocation && (oldStartVnode.$tag$ === "slot" || newEndVnode.$tag$ === "slot")) {
        putBackInOriginalLocation(oldStartVnode.$elm$.parentNode, false);
      }
      patch(oldStartVnode, newEndVnode, isInitialRender);
      insertBefore(parentElm, oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
      oldStartVnode = oldCh[++oldStartIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldEndVnode, newStartVnode, isInitialRender)) {
      if (BUILD.slotRelocation && (oldStartVnode.$tag$ === "slot" || newEndVnode.$tag$ === "slot")) {
        putBackInOriginalLocation(oldEndVnode.$elm$.parentNode, false);
      }
      patch(oldEndVnode, newStartVnode, isInitialRender);
      insertBefore(parentElm, oldEndVnode.$elm$, oldStartVnode.$elm$);
      oldEndVnode = oldCh[--oldEndIdx];
      newStartVnode = newCh[++newStartIdx];
    } else {
      idxInOld = -1;
      if (BUILD.vdomKey) {
        for (i2 = oldStartIdx; i2 <= oldEndIdx; ++i2) {
          if (oldCh[i2] && oldCh[i2].$key$ !== null && oldCh[i2].$key$ === newStartVnode.$key$) {
            idxInOld = i2;
            break;
          }
        }
      }
      if (BUILD.vdomKey && idxInOld >= 0) {
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
        if (BUILD.slotRelocation) {
          insertBefore(referenceNode(oldStartVnode.$elm$).parentNode, node, referenceNode(oldStartVnode.$elm$));
        } else {
          insertBefore(oldStartVnode.$elm$.parentNode, node, oldStartVnode.$elm$);
        }
      }
    }
  }
  if (oldStartIdx > oldEndIdx) {
    addVnodes(parentElm, newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$, newVNode2, newCh, newStartIdx, newEndIdx);
  } else if (BUILD.updatable && newStartIdx > newEndIdx) {
    removeVnodes(oldCh, oldStartIdx, oldEndIdx);
  }
};
var isSameVnode = (leftVNode, rightVNode, isInitialRender = false) => {
  if (leftVNode.$tag$ === rightVNode.$tag$) {
    if (BUILD.slotRelocation && leftVNode.$tag$ === "slot") {
      return leftVNode.$name$ === rightVNode.$name$;
    }
    if (BUILD.vdomKey && !isInitialRender) {
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
  if (!BUILD.vdomText || text === null) {
    if (BUILD.svg) {
      isSvgMode = tag === "svg" ? true : tag === "foreignObject" ? false : isSvgMode;
    }
    if (BUILD.vdomAttribute || BUILD.reflect) {
      if (BUILD.slot && tag === "slot" && !useNativeShadowDom) {
        if (BUILD.experimentalSlotFixes && oldVNode.$name$ !== newVNode2.$name$) {
          newVNode2.$elm$["s-sn"] = newVNode2.$name$ || "";
          relocateToHostRoot(newVNode2.$elm$.parentElement);
        }
      }
      updateElement(oldVNode, newVNode2, isSvgMode, isInitialRender);
    }
    if (BUILD.updatable && oldChildren !== null && newChildren !== null) {
      updateChildren(elm, oldChildren, newVNode2, newChildren, isInitialRender);
    } else if (newChildren !== null) {
      if (BUILD.updatable && BUILD.vdomText && oldVNode.$text$ !== null) {
        elm.textContent = "";
      }
      addVnodes(elm, null, newVNode2, newChildren, 0, newChildren.length - 1);
    } else if (
      // don't do this on initial render as it can cause non-hydrated content to be removed
      !isInitialRender && BUILD.updatable && oldChildren !== null
    ) {
      removeVnodes(oldChildren, 0, oldChildren.length - 1);
    } else if (BUILD.hydrateClientSide && isInitialRender && BUILD.updatable && oldChildren !== null && newChildren === null) {
      newVNode2.$children$ = oldChildren;
    }
    if (BUILD.svg && isSvgMode && tag === "svg") {
      isSvgMode = false;
    }
  } else if (BUILD.vdomText && BUILD.slotRelocation && (defaultHolder = elm["s-cr"])) {
    defaultHolder.parentNode.textContent = text;
  } else if (BUILD.vdomText && oldVNode.$text$ !== text) {
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
        if (!node["s-cn"] && !node["s-nr"] && node["s-hn"] !== childNode["s-hn"] && (!BUILD.experimentalSlotFixes || !node["s-sh"] || node["s-sh"] !== childNode["s-hn"])) {
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
  if (BUILD.vdomRef) {
    vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(null);
    vNode.$children$ && vNode.$children$.map(nullifyVNodeRefs);
  }
};
var insertBefore = (parent, newNode, reference) => {
  if (BUILD.scoped && typeof newNode["s-sn"] === "string" && !!newNode["s-sr"] && !!newNode["s-cr"]) {
    addRemoveSlotScopedClass(newNode["s-cr"], newNode, parent, newNode.parentElement);
  } else if (BUILD.experimentalSlotFixes && typeof newNode["s-sn"] === "string") {
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
  if (BUILD.experimentalSlotFixes && parent.__insertBefore) {
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
  if (BUILD.isDev && Array.isArray(renderFnResults) && renderFnResults.some(isHost)) {
    throw new Error(`The <Host> must be the single root component.
Looks like the render() function of "${hostTagName.toLowerCase()}" is returning an array that contains the <Host>.

The render() function should look like this instead:

render() {
  // Do not return an array
  return (
    <Host>{content}</Host>
  );
}
  `);
  }
  if (BUILD.reflect && cmpMeta.$attrsToReflect$) {
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
  rootVnode.$elm$ = oldVNode.$elm$ = BUILD.shadowDom ? hostElm.shadowRoot || hostElm : hostElm;
  if (BUILD.scoped || BUILD.shadowDom) {
    scopeId = hostElm["s-sc"];
  }
  useNativeShadowDom = supportsShadow && !!(cmpMeta.$flags$ & 1) && !(cmpMeta.$flags$ & 128);
  if (BUILD.slotRelocation) {
    contentRef = hostElm["s-cr"];
    checkSlotFallbackVisibility = false;
  }
  patch(oldVNode, rootVnode, isInitialLoad);
  if (BUILD.slotRelocation) {
    plt.$flags$ |= 1;
    if (checkSlotRelocate) {
      markSlotContentForRelocation(rootVnode.$elm$);
      for (const relocateData of relocateNodes) {
        const nodeToRelocate = relocateData.$nodeToRelocate$;
        if (!nodeToRelocate["s-ol"] && win.document) {
          const orgLocationNode = BUILD.isDebug || BUILD.hydrateServerSide ? originalLocationDebugNode(nodeToRelocate) : win.document.createTextNode("");
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
          if (!BUILD.hydrateServerSide && (!BUILD.experimentalSlotFixes || insertBeforeNode && insertBeforeNode.nodeType === 1)) {
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
              if (!BUILD.experimentalSlotFixes && !nodeToRelocate["s-hn"] && nodeToRelocate["s-ol"]) {
                nodeToRelocate["s-hn"] = nodeToRelocate["s-ol"].parentNode.nodeName;
              }
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
    plt.$flags$ &= ~1;
    relocateNodes.length = 0;
  }
  if (BUILD.experimentalScopedSlotChanges && cmpMeta.$flags$ & 2) {
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
var slotReferenceDebugNode = (slotVNode) => {
  var _a;
  return (_a = win.document) == null ? void 0 : _a.createComment(`<slot${slotVNode.$name$ ? ' name="' + slotVNode.$name$ + '"' : ""}> (host=${hostTagName.toLowerCase()})`);
};
var originalLocationDebugNode = (nodeToRelocate) => {
  var _a;
  return (_a = win.document) == null ? void 0 : _a.createComment(`org-location for ` + (nodeToRelocate.localName ? `<${nodeToRelocate.localName}> (host=${nodeToRelocate["s-hn"]})` : `[${nodeToRelocate.textContent}]`));
};
var attachToAncestor = (hostRef, ancestorComponent) => {
  if (BUILD.asyncLoading && ancestorComponent && !hostRef.$onRenderResolve$ && ancestorComponent["s-p"]) {
    const index = ancestorComponent["s-p"].push(new Promise((r) => hostRef.$onRenderResolve$ = () => {
      ancestorComponent["s-p"].splice(index - 1, 1);
      r();
    }));
  }
};
var scheduleUpdate = (hostRef, isInitialLoad) => {
  if (BUILD.taskQueue && BUILD.updatable) {
    hostRef.$flags$ |= 16;
  }
  if (BUILD.asyncLoading && hostRef.$flags$ & 4) {
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
  return BUILD.taskQueue ? writeTask(dispatch) : dispatch();
};
var dispatchHooks = (hostRef, isInitialLoad) => {
  const elm = hostRef.$hostElement$;
  const endSchedule = createTime("scheduleUpdate", hostRef.$cmpMeta$.$tagName$);
  const instance = BUILD.lazyLoad ? hostRef.$lazyInstance$ : elm;
  if (!instance) {
    throw new Error(`Can't render component <${elm.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`);
  }
  let maybePromise;
  if (isInitialLoad) {
    if (BUILD.lazyLoad && BUILD.hostListener) {
      hostRef.$flags$ |= 256;
      if (hostRef.$queuedListeners$) {
        hostRef.$queuedListeners$.map(([methodName, event]) => safeCall(instance, methodName, event, elm));
        hostRef.$queuedListeners$ = void 0;
      }
    }
    emitLifecycleEvent(elm, "componentWillLoad");
    maybePromise = safeCall(instance, "componentWillLoad", void 0, elm);
  } else {
    emitLifecycleEvent(elm, "componentWillUpdate");
    maybePromise = safeCall(instance, "componentWillUpdate", void 0, elm);
  }
  emitLifecycleEvent(elm, "componentWillRender");
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
  if (BUILD.style && isInitialLoad) {
    attachStyles(hostRef);
  }
  const endRender = createTime("render", hostRef.$cmpMeta$.$tagName$);
  if (BUILD.isDev) {
    hostRef.$flags$ |= 1024;
  }
  if (BUILD.hydrateServerSide) {
    yield callRender(hostRef, instance, elm, isInitialLoad);
  } else {
    callRender(hostRef, instance, elm, isInitialLoad);
  }
  if (BUILD.isDev) {
    hostRef.$renderCount$ = hostRef.$renderCount$ === void 0 ? 1 : hostRef.$renderCount$ + 1;
    hostRef.$flags$ &= ~1024;
  }
  if (BUILD.hydrateServerSide) {
    try {
      serverSideConnected(elm);
      if (isInitialLoad) {
        if (hostRef.$cmpMeta$.$flags$ & 1) {
          elm["s-en"] = "";
        } else if (hostRef.$cmpMeta$.$flags$ & 2) {
          elm["s-en"] = "c";
        }
      }
    } catch (e) {
      consoleError(e, elm);
    }
  }
  if (BUILD.asyncLoading && rc) {
    rc.map((cb) => cb());
    elm["s-rc"] = void 0;
  }
  endRender();
  endUpdate();
  if (BUILD.asyncLoading) {
    const childrenPromises = (_a = elm["s-p"]) != null ? _a : [];
    const postUpdate = () => postUpdateComponent(hostRef);
    if (childrenPromises.length === 0) {
      postUpdate();
    } else {
      Promise.all(childrenPromises).then(postUpdate);
      hostRef.$flags$ |= 4;
      childrenPromises.length = 0;
    }
  } else {
    postUpdateComponent(hostRef);
  }
});
var renderingRef = null;
var callRender = (hostRef, instance, elm, isInitialLoad) => {
  const allRenderFn = BUILD.allRenderFn ? true : false;
  const lazyLoad = BUILD.lazyLoad ? true : false;
  const taskQueue = BUILD.taskQueue ? true : false;
  const updatable = BUILD.updatable ? true : false;
  try {
    renderingRef = instance;
    instance = allRenderFn ? instance.render() : instance.render && instance.render();
    if (updatable && taskQueue) {
      hostRef.$flags$ &= ~16;
    }
    if (updatable || lazyLoad) {
      hostRef.$flags$ |= 2;
    }
    if (BUILD.hasRenderFn || BUILD.reflect) {
      if (BUILD.vdomRender || BUILD.reflect) {
        if (BUILD.hydrateServerSide) {
          return Promise.resolve(instance).then((value) => renderVdom(hostRef, value, isInitialLoad));
        } else {
          renderVdom(hostRef, instance, isInitialLoad);
        }
      } else {
        const shadowRoot = elm.shadowRoot;
        if (hostRef.$cmpMeta$.$flags$ & 1) {
          shadowRoot.textContent = instance;
        } else {
          elm.textContent = instance;
        }
      }
    }
  } catch (e) {
    consoleError(e, hostRef.$hostElement$);
  }
  renderingRef = null;
  return null;
};
var postUpdateComponent = (hostRef) => {
  const tagName = hostRef.$cmpMeta$.$tagName$;
  const elm = hostRef.$hostElement$;
  const endPostUpdate = createTime("postUpdate", tagName);
  const instance = BUILD.lazyLoad ? hostRef.$lazyInstance$ : elm;
  const ancestorComponent = hostRef.$ancestorComponent$;
  if (BUILD.isDev) {
    hostRef.$flags$ |= 1024;
  }
  safeCall(instance, "componentDidRender", void 0, elm);
  if (BUILD.isDev) {
    hostRef.$flags$ &= ~1024;
  }
  emitLifecycleEvent(elm, "componentDidRender");
  if (!(hostRef.$flags$ & 64)) {
    hostRef.$flags$ |= 64;
    if (BUILD.asyncLoading && BUILD.cssAnnotations) {
      addHydratedFlag(elm);
    }
    if (BUILD.isDev) {
      hostRef.$flags$ |= 2048;
    }
    safeCall(instance, "componentDidLoad", void 0, elm);
    if (BUILD.isDev) {
      hostRef.$flags$ &= ~2048;
    }
    emitLifecycleEvent(elm, "componentDidLoad");
    endPostUpdate();
    if (BUILD.asyncLoading) {
      hostRef.$onReadyResolve$(elm);
      if (!ancestorComponent) {
        appDidLoad(tagName);
      }
    }
  } else {
    if (BUILD.isDev) {
      hostRef.$flags$ |= 1024;
    }
    safeCall(instance, "componentDidUpdate", void 0, elm);
    if (BUILD.isDev) {
      hostRef.$flags$ &= ~1024;
    }
    emitLifecycleEvent(elm, "componentDidUpdate");
    endPostUpdate();
  }
  if (BUILD.method && BUILD.lazyLoad) {
    hostRef.$onInstanceResolve$(elm);
  }
  if (BUILD.asyncLoading) {
    if (hostRef.$onRenderResolve$) {
      hostRef.$onRenderResolve$();
      hostRef.$onRenderResolve$ = void 0;
    }
    if (hostRef.$flags$ & 512) {
      nextTick(() => scheduleUpdate(hostRef, false));
    }
    hostRef.$flags$ &= ~(4 | 512);
  }
};
var forceUpdate = (ref) => {
  var _a;
  if (BUILD.updatable && (Build.isBrowser || Build.isTesting)) {
    const hostRef = getHostRef(ref);
    const isConnected = (_a = hostRef == null ? void 0 : hostRef.$hostElement$) == null ? void 0 : _a.isConnected;
    if (isConnected && (hostRef.$flags$ & (2 | 16)) === 2) {
      scheduleUpdate(hostRef, false);
    }
    return isConnected;
  }
  return false;
};
var appDidLoad = (who) => {
  var _a;
  if (BUILD.asyncQueue) {
    plt.$flags$ |= 2;
  }
  nextTick(() => emitEvent(win, "appload", {
    detail: {
      namespace: NAMESPACE
    }
  }));
  if (BUILD.hydrateClientSide) {
    if ((_a = plt.$orgLocNodes$) == null ? void 0 : _a.size) {
      plt.$orgLocNodes$.clear();
    }
  }
  if (BUILD.profile && performance.measure) {
    performance.measure(`[Stencil] ${NAMESPACE} initial load (by ${who})`, "st:app:start");
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
var emitLifecycleEvent = (elm, lifecycleName) => {
  if (BUILD.lifecycleDOMEvents) {
    emitEvent(elm, "stencil_" + lifecycleName, {
      bubbles: true,
      composed: true,
      detail: {
        namespace: NAMESPACE
      }
    });
  }
};
var addHydratedFlag = (elm) => {
  var _a, _b;
  return BUILD.hydratedClass ? elm.classList.add((_a = BUILD.hydratedSelectorName) != null ? _a : "hydrated") : BUILD.hydratedAttribute ? elm.setAttribute((_b = BUILD.hydratedSelectorName) != null ? _b : "hydrated", "") : void 0;
};
var serverSideConnected = (elm) => {
  const children = elm.children;
  if (children != null) {
    for (let i2 = 0, ii = children.length; i2 < ii; i2++) {
      const childElm = children[i2];
      if (typeof childElm.connectedCallback === "function") {
        childElm.connectedCallback();
      }
      serverSideConnected(childElm);
    }
  }
};
var getValue = (ref, propName) => getHostRef(ref).$instanceValues$.get(propName);
var setValue = (ref, propName, newVal, cmpMeta) => {
  const hostRef = getHostRef(ref);
  if (!hostRef) {
    return;
  }
  if (BUILD.lazyLoad && !hostRef) {
    throw new Error(`Couldn't find host element for "${cmpMeta.$tagName$}" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/stenciljs/core/issues/5457).`);
  }
  const elm = BUILD.lazyLoad ? hostRef.$hostElement$ : ref;
  const oldVal = hostRef.$instanceValues$.get(propName);
  const flags = hostRef.$flags$;
  const instance = BUILD.lazyLoad ? hostRef.$lazyInstance$ : elm;
  newVal = parsePropertyValue(newVal, cmpMeta.$members$[propName][0], BUILD.formAssociated && !!(cmpMeta.$flags$ & 64));
  const areBothNaN = Number.isNaN(oldVal) && Number.isNaN(newVal);
  const didValueChange = newVal !== oldVal && !areBothNaN;
  if ((!BUILD.lazyLoad || !(flags & 8) || oldVal === void 0) && didValueChange) {
    hostRef.$instanceValues$.set(propName, newVal);
    if (BUILD.isDev) {
      if (hostRef.$flags$ & 1024) {
        consoleDevWarn(`The state/prop "${propName}" changed during rendering. This can potentially lead to infinite-loops and other bugs.`, "\nElement", elm, "\nNew value", newVal, "\nOld value", oldVal);
      } else if (hostRef.$flags$ & 2048) {
        consoleDevWarn(`The state/prop "${propName}" changed during "componentDidLoad()", this triggers extra re-renders, try to setup on "componentWillLoad()"`, "\nElement", elm, "\nNew value", newVal, "\nOld value", oldVal);
      }
    }
    if (!BUILD.lazyLoad || instance) {
      if (BUILD.watchCallback && cmpMeta.$watchers$ && flags & 128) {
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
      if (BUILD.updatable && (flags & (2 | 16)) === 2) {
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
  if (BUILD.isTesting) {
    if (prototype.__stencilAugmented) {
      return;
    }
    prototype.__stencilAugmented = true;
  }
  if (BUILD.formAssociated && cmpMeta.$flags$ & 64 && flags & 1) {
    FORM_ASSOCIATED_CUSTOM_ELEMENT_CALLBACKS.forEach((cbName) => {
      const originalFormAssociatedCallback = prototype[cbName];
      Object.defineProperty(prototype, cbName, {
        value(...args) {
          var _a2;
          const hostRef = getHostRef(this);
          const instance = BUILD.lazyLoad ? hostRef == null ? void 0 : hostRef.$lazyInstance$ : this;
          if (!instance) {
            (_a2 = hostRef == null ? void 0 : hostRef.$onReadyPromise$) == null ? void 0 : _a2.then((asyncInstance) => {
              const cb = asyncInstance[cbName];
              typeof cb === "function" && cb.call(asyncInstance, ...args);
            });
          } else {
            const cb = BUILD.lazyLoad ? instance[cbName] : originalFormAssociatedCallback;
            typeof cb === "function" && cb.call(instance, ...args);
          }
        }
      });
    });
  }
  if (BUILD.member && cmpMeta.$members$ || BUILD.watchCallback && (cmpMeta.$watchers$ || Cstr.watchers)) {
    if (BUILD.watchCallback && Cstr.watchers && !cmpMeta.$watchers$) {
      cmpMeta.$watchers$ = Cstr.watchers;
    }
    const members = Object.entries((_a = cmpMeta.$members$) != null ? _a : {});
    members.map(([memberName, [memberFlags]]) => {
      if ((BUILD.prop || BUILD.state) && (memberFlags & 31 || (!BUILD.lazyLoad || flags & 2) && memberFlags & 32)) {
        const {
          get: origGetter,
          set: origSetter
        } = Object.getOwnPropertyDescriptor(prototype, memberName) || {};
        if (origGetter) cmpMeta.$members$[memberName][0] |= 2048;
        if (origSetter) cmpMeta.$members$[memberName][0] |= 4096;
        if (flags & 1 || !origGetter) {
          Object.defineProperty(prototype, memberName, {
            get() {
              if (BUILD.lazyLoad) {
                if ((cmpMeta.$members$[memberName][0] & 2048) === 0) {
                  return getValue(this, memberName);
                }
                const ref = getHostRef(this);
                const instance = ref ? ref.$lazyInstance$ : prototype;
                if (!instance) return;
                return instance[memberName];
              }
              if (!BUILD.lazyLoad) {
                return origGetter ? origGetter.apply(this) : getValue(this, memberName);
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
            if (BUILD.isDev) {
              if (
                // we are proxying the instance (not element)
                (flags & 1) === 0 && // if the class has a setter, then the Element can update instance values, so ignore
                (cmpMeta.$members$[memberName][0] & 4096) === 0 && // the element is not constructing
                (ref && ref.$flags$ & 8) === 0 && // the member is a prop
                (memberFlags & 31) !== 0 && // the member is not mutable
                (memberFlags & 1024) === 0
              ) {
                consoleDevWarn(`@Prop() "${memberName}" on <${cmpMeta.$tagName$}> is immutable but was modified from within the component.
More information: https://stenciljs.com/docs/properties#prop-mutability`);
              }
            }
            if (origSetter) {
              const currentValue = memberFlags & 32 ? this[memberName] : ref.$hostElement$[memberName];
              if (typeof currentValue === "undefined" && ref.$instanceValues$.get(memberName)) {
                newValue = ref.$instanceValues$.get(memberName);
              } else if (!ref.$instanceValues$.get(memberName) && currentValue) {
                ref.$instanceValues$.set(memberName, currentValue);
              }
              origSetter.apply(this, [parsePropertyValue(newValue, memberFlags, BUILD.formAssociated && !!(cmpMeta.$flags$ & 64))]);
              newValue = memberFlags & 32 ? this[memberName] : ref.$hostElement$[memberName];
              setValue(this, memberName, newValue, cmpMeta);
              return;
            }
            if (!BUILD.lazyLoad) {
              setValue(this, memberName, newValue, cmpMeta);
              return;
            }
            if (BUILD.lazyLoad) {
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
                ref.$lazyInstance$[memberName] = parsePropertyValue(newValue, memberFlags, BUILD.formAssociated && !!(cmpMeta.$flags$ & 64));
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
      } else if (BUILD.lazyLoad && BUILD.method && flags & 1 && memberFlags & 64) {
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
    if (BUILD.observeAttribute && (!BUILD.lazyLoad || flags & 1)) {
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
              const elm = BUILD.lazyLoad ? hostRef.$hostElement$ : this;
              const instance = BUILD.lazyLoad ? hostRef.$lazyInstance$ : elm;
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
        if (BUILD.reflect && m[0] & 512) {
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
    if (BUILD.lazyLoad && bundleId) {
      const CstrImport = loadModule(cmpMeta, hostRef, hmrVersionId);
      if (CstrImport && "then" in CstrImport) {
        const endLoad = uniqueTime(`st:load:${cmpMeta.$tagName$}:${hostRef.$modeName$}`, `[Stencil] Load module for <${cmpMeta.$tagName$}>`);
        Cstr = yield CstrImport;
        endLoad();
      } else {
        Cstr = CstrImport;
      }
      if (!Cstr) {
        throw new Error(`Constructor for "${cmpMeta.$tagName$}#${hostRef.$modeName$}" was not found`);
      }
      if (BUILD.member && !Cstr.isProxied) {
        if (BUILD.watchCallback) {
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
      if (BUILD.member) {
        hostRef.$flags$ |= 8;
      }
      try {
        new Cstr(hostRef);
      } catch (e) {
        consoleError(e, elm);
      }
      if (BUILD.member) {
        hostRef.$flags$ &= ~8;
      }
      if (BUILD.watchCallback) {
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
    if (BUILD.style && Cstr && Cstr.style) {
      let style;
      if (typeof Cstr.style === "string") {
        style = Cstr.style;
      } else if (BUILD.mode && typeof Cstr.style !== "string") {
        hostRef.$modeName$ = computeMode(elm);
        if (hostRef.$modeName$) {
          style = Cstr.style[hostRef.$modeName$];
        }
        if (BUILD.hydrateServerSide && hostRef.$modeName$) {
          elm.setAttribute("s-mode", hostRef.$modeName$);
        }
      }
      const scopeId2 = getScopeId(cmpMeta, hostRef.$modeName$);
      if (!styles.has(scopeId2)) {
        const endRegisterStyles = createTime("registerStyles", cmpMeta.$tagName$);
        if (BUILD.hydrateServerSide && BUILD.shadowDom) {
          if (cmpMeta.$flags$ & 128) {
            style = scopeCss(style, scopeId2, true);
          } else if (needsScopedSSR()) {
            style = expandPartSelectors(style);
          }
        }
        registerStyle(scopeId2, style, !!(cmpMeta.$flags$ & 1));
        endRegisterStyles();
      }
    }
  }
  const ancestorComponent = hostRef.$ancestorComponent$;
  const schedule = () => scheduleUpdate(hostRef, true);
  if (BUILD.asyncLoading && ancestorComponent && ancestorComponent["s-rc"]) {
    ancestorComponent["s-rc"].push(schedule);
  } else {
    schedule();
  }
});
var fireConnectedCallback = (instance, elm) => {
  if (BUILD.lazyLoad) {
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
    if (BUILD.hostListenerTargetParent) {
      addHostEventListeners(elm, hostRef, cmpMeta.$listeners$, true);
    }
    if (!(hostRef.$flags$ & 1)) {
      hostRef.$flags$ |= 1;
      let hostId;
      if (BUILD.hydrateClientSide) {
        hostId = elm.getAttribute(HYDRATE_ID);
        if (hostId) {
          if (BUILD.shadowDom && supportsShadow && cmpMeta.$flags$ & 1) {
            const scopeId2 = BUILD.mode ? addStyle(elm.shadowRoot, cmpMeta, elm.getAttribute("s-mode")) : addStyle(elm.shadowRoot, cmpMeta);
            elm.classList.remove(scopeId2 + "-h", scopeId2 + "-s");
          } else if (BUILD.scoped && cmpMeta.$flags$ & 2) {
            const scopeId2 = getScopeId(cmpMeta, BUILD.mode ? elm.getAttribute("s-mode") : void 0);
            elm["s-sc"] = scopeId2;
          }
          initializeClientHydrate(elm, cmpMeta.$tagName$, hostId, hostRef);
        }
      }
      if (BUILD.slotRelocation && !hostId) {
        if (BUILD.hydrateServerSide || (BUILD.slot || BUILD.shadowDom) && // TODO(STENCIL-854): Remove code related to legacy shadowDomShim field
        cmpMeta.$flags$ & (4 | 8)) {
          setContentReference(elm);
        }
      }
      if (BUILD.asyncLoading) {
        let ancestorComponent = elm;
        while (ancestorComponent = ancestorComponent.parentNode || ancestorComponent.host) {
          if (BUILD.hydrateClientSide && ancestorComponent.nodeType === 1 && ancestorComponent.hasAttribute("s-id") && ancestorComponent["s-p"] || ancestorComponent["s-p"]) {
            attachToAncestor(hostRef, hostRef.$ancestorComponent$ = ancestorComponent);
            break;
          }
        }
      }
      if (BUILD.prop && !BUILD.hydrateServerSide && cmpMeta.$members$) {
        Object.entries(cmpMeta.$members$).map(([memberName, [memberFlags]]) => {
          if (memberFlags & 31 && elm.hasOwnProperty(memberName)) {
            const value = elm[memberName];
            delete elm[memberName];
            elm[memberName] = value;
          }
        });
      }
      if (BUILD.initializeNextTick) {
        nextTick(() => initializeComponent(elm, hostRef, cmpMeta));
      } else {
        initializeComponent(elm, hostRef, cmpMeta);
      }
    } else {
      addHostEventListeners(elm, hostRef, cmpMeta.$listeners$, false);
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
  const contentRefElm = elm["s-cr"] = win.document.createComment(BUILD.isDebug ? `content-ref (host=${elm.localName})` : "");
  contentRefElm["s-cn"] = true;
  insertBefore(elm, contentRefElm, elm.firstChild);
};
var disconnectInstance = (instance, elm) => {
  if (BUILD.lazyLoad) {
    safeCall(instance, "disconnectedCallback", void 0, elm || instance);
  }
};
var disconnectedCallback = (elm) => __async(null, null, function* () {
  if ((plt.$flags$ & 1) === 0) {
    const hostRef = getHostRef(elm);
    if (BUILD.hostListener) {
      if (hostRef == null ? void 0 : hostRef.$rmListeners$) {
        hostRef.$rmListeners$.map((rmListener) => rmListener());
        hostRef.$rmListeners$ = void 0;
      }
    }
    if (!BUILD.lazyLoad) {
      disconnectInstance(elm);
    } else if (hostRef == null ? void 0 : hostRef.$lazyInstance$) {
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
var proxyCustomElement = (Cstr, compactMeta) => {
  const cmpMeta = {
    $flags$: compactMeta[0],
    $tagName$: compactMeta[1]
  };
  if (BUILD.member) {
    cmpMeta.$members$ = compactMeta[2];
  }
  if (BUILD.hostListener) {
    cmpMeta.$listeners$ = compactMeta[3];
  }
  if (BUILD.watchCallback) {
    cmpMeta.$watchers$ = Cstr.$watchers$;
  }
  if (BUILD.reflect) {
    cmpMeta.$attrsToReflect$ = [];
  }
  if (BUILD.shadowDom && !supportsShadow && cmpMeta.$flags$ & 1) {
    cmpMeta.$flags$ |= 8;
  }
  if (!(cmpMeta.$flags$ & 1) && cmpMeta.$flags$ & 256) {
    if (BUILD.experimentalSlotFixes) {
      patchPseudoShadowDom(Cstr.prototype);
    } else {
      if (BUILD.slotChildNodesFix) {
        patchChildSlotNodes(Cstr.prototype);
      }
      if (BUILD.cloneNodeFix) {
        patchCloneNode(Cstr.prototype);
      }
      if (BUILD.appendChildSlotFix) {
        patchSlotAppendChild(Cstr.prototype);
      }
      if (BUILD.scopedSlotTextContentFix && cmpMeta.$flags$ & 2) {
        patchTextContent(Cstr.prototype);
      }
    }
  }
  if (BUILD.hydrateClientSide && BUILD.shadowDom) {
    hydrateScopedToShadow();
  }
  const originalConnectedCallback = Cstr.prototype.connectedCallback;
  const originalDisconnectedCallback = Cstr.prototype.disconnectedCallback;
  Object.assign(Cstr.prototype, {
    __hasHostListenerAttached: false,
    __registerHost() {
      registerHost(this, cmpMeta);
    },
    connectedCallback() {
      if (!this.__hasHostListenerAttached) {
        const hostRef = getHostRef(this);
        if (!hostRef) {
          return;
        }
        addHostEventListeners(this, hostRef, cmpMeta.$listeners$, false);
        this.__hasHostListenerAttached = true;
      }
      connectedCallback(this);
      if (originalConnectedCallback) {
        originalConnectedCallback.call(this);
      }
    },
    disconnectedCallback() {
      disconnectedCallback(this);
      if (originalDisconnectedCallback) {
        originalDisconnectedCallback.call(this);
      }
    },
    __attachShadow() {
      if (supportsShadow) {
        if (!this.shadowRoot) {
          createShadowRoot.call(this, cmpMeta);
        } else {
          if (this.shadowRoot.mode !== "open") {
            throw new Error(`Unable to re-use existing shadow root for ${cmpMeta.$tagName$}! Mode is set to ${this.shadowRoot.mode} but Stencil only supports open shadow roots.`);
          }
        }
      } else {
        this.shadowRoot = this;
      }
    }
  });
  Cstr.is = cmpMeta.$tagName$;
  return proxyComponent(
    Cstr,
    cmpMeta,
    1 | 2
    /* proxyState */
  );
};
var Fragment = (_, children) => children;
var addHostEventListeners = (elm, hostRef, listeners, attachParentListeners) => {
  if (BUILD.hostListener && listeners && win.document) {
    if (BUILD.hostListenerTargetParent) {
      if (attachParentListeners) {
        listeners = listeners.filter(
          ([flags]) => flags & 32
          /* TargetParent */
        );
      } else {
        listeners = listeners.filter(([flags]) => !(flags & 32));
      }
    }
    listeners.map(([flags, name, method]) => {
      const target = BUILD.hostListenerTarget ? getHostListenerTarget(win.document, elm, flags) : elm;
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
    if (BUILD.lazyLoad) {
      if (hostRef.$flags$ & 256) {
        (_a = hostRef.$lazyInstance$) == null ? void 0 : _a[methodName](ev);
      } else {
        (hostRef.$queuedListeners$ = hostRef.$queuedListeners$ || []).push([methodName, ev]);
      }
    } else {
      hostRef.$hostElement$[methodName](ev);
    }
  } catch (e) {
    consoleError(e, hostRef.$hostElement$);
  }
};
var getHostListenerTarget = (doc, elm, flags) => {
  if (BUILD.hostListenerTargetDocument && flags & 4) {
    return doc;
  }
  if (BUILD.hostListenerTargetWindow && flags & 8) {
    return win;
  }
  if (BUILD.hostListenerTargetBody && flags & 16) {
    return doc.body;
  }
  if (BUILD.hostListenerTargetParent && flags & 32 && elm.parentElement) {
    return elm.parentElement;
  }
  return elm;
};
var hostListenerOpts = (flags) => supportsListenerOptions ? {
  passive: (flags & 1) !== 0,
  capture: (flags & 2) !== 0
} : (flags & 2) !== 0;

export {
  Build,
  H,
  readTask,
  writeTask,
  getAssetPath,
  h,
  Host,
  setMode,
  getMode,
  createEvent,
  forceUpdate,
  proxyCustomElement,
  Fragment
};
/*! Bundled license information:

@stencil/core/internal/client/index.js:
  (*!__STENCIL_STATIC_IMPORT_SWITCH__*)

@stencil/core/internal/client/index.js:
  (**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   *
   * This file is a port of shadowCSS from `webcomponents.js` to TypeScript.
   * https://github.com/webcomponents/webcomponentsjs/blob/4efecd7e0e/src/ShadowCSS/ShadowCSS.js
   * https://github.com/angular/angular/blob/master/packages/compiler/src/shadow_css.ts
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9Ac3RlbmNpbC9jb3JlL2ludGVybmFsL2FwcC1kYXRhL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvYXBwLWdsb2JhbHMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL2FwcC1kYXRhL2luZGV4LnRzXG52YXIgQlVJTEQgPSB7XG4gIGFsbFJlbmRlckZuOiBmYWxzZSxcbiAgZWxlbWVudDogdHJ1ZSxcbiAgZXZlbnQ6IHRydWUsXG4gIGhhc1JlbmRlckZuOiB0cnVlLFxuICBob3N0TGlzdGVuZXI6IHRydWUsXG4gIGhvc3RMaXN0ZW5lclRhcmdldFdpbmRvdzogdHJ1ZSxcbiAgaG9zdExpc3RlbmVyVGFyZ2V0RG9jdW1lbnQ6IHRydWUsXG4gIGhvc3RMaXN0ZW5lclRhcmdldEJvZHk6IHRydWUsXG4gIGhvc3RMaXN0ZW5lclRhcmdldFBhcmVudDogZmFsc2UsXG4gIGhvc3RMaXN0ZW5lclRhcmdldDogdHJ1ZSxcbiAgbWVtYmVyOiB0cnVlLFxuICBtZXRob2Q6IHRydWUsXG4gIG1vZGU6IHRydWUsXG4gIG9ic2VydmVBdHRyaWJ1dGU6IHRydWUsXG4gIHByb3A6IHRydWUsXG4gIHByb3BNdXRhYmxlOiB0cnVlLFxuICByZWZsZWN0OiB0cnVlLFxuICBzY29wZWQ6IHRydWUsXG4gIHNoYWRvd0RvbTogdHJ1ZSxcbiAgc2xvdDogdHJ1ZSxcbiAgY3NzQW5ub3RhdGlvbnM6IHRydWUsXG4gIHN0YXRlOiB0cnVlLFxuICBzdHlsZTogdHJ1ZSxcbiAgZm9ybUFzc29jaWF0ZWQ6IGZhbHNlLFxuICBzdmc6IHRydWUsXG4gIHVwZGF0YWJsZTogdHJ1ZSxcbiAgdmRvbUF0dHJpYnV0ZTogdHJ1ZSxcbiAgdmRvbVhsaW5rOiB0cnVlLFxuICB2ZG9tQ2xhc3M6IHRydWUsXG4gIHZkb21GdW5jdGlvbmFsOiB0cnVlLFxuICB2ZG9tS2V5OiB0cnVlLFxuICB2ZG9tTGlzdGVuZXI6IHRydWUsXG4gIHZkb21SZWY6IHRydWUsXG4gIHZkb21Qcm9wT3JBdHRyOiB0cnVlLFxuICB2ZG9tUmVuZGVyOiB0cnVlLFxuICB2ZG9tU3R5bGU6IHRydWUsXG4gIHZkb21UZXh0OiB0cnVlLFxuICB3YXRjaENhbGxiYWNrOiB0cnVlLFxuICB0YXNrUXVldWU6IHRydWUsXG4gIGhvdE1vZHVsZVJlcGxhY2VtZW50OiBmYWxzZSxcbiAgaXNEZWJ1ZzogZmFsc2UsXG4gIGlzRGV2OiBmYWxzZSxcbiAgaXNUZXN0aW5nOiBmYWxzZSxcbiAgaHlkcmF0ZVNlcnZlclNpZGU6IGZhbHNlLFxuICBoeWRyYXRlQ2xpZW50U2lkZTogZmFsc2UsXG4gIGxpZmVjeWNsZURPTUV2ZW50czogZmFsc2UsXG4gIGxhenlMb2FkOiBmYWxzZSxcbiAgcHJvZmlsZTogZmFsc2UsXG4gIHNsb3RSZWxvY2F0aW9uOiB0cnVlLFxuICAvLyBUT0RPKFNURU5DSUwtOTE0KTogcmVtb3ZlIHRoaXMgb3B0aW9uIHdoZW4gYGV4cGVyaW1lbnRhbFNsb3RGaXhlc2AgaXMgdGhlIGRlZmF1bHQgYmVoYXZpb3JcbiAgYXBwZW5kQ2hpbGRTbG90Rml4OiBmYWxzZSxcbiAgLy8gVE9ETyhTVEVOQ0lMLTkxNCk6IHJlbW92ZSB0aGlzIG9wdGlvbiB3aGVuIGBleHBlcmltZW50YWxTbG90Rml4ZXNgIGlzIHRoZSBkZWZhdWx0IGJlaGF2aW9yXG4gIGNsb25lTm9kZUZpeDogZmFsc2UsXG4gIGh5ZHJhdGVkQXR0cmlidXRlOiBmYWxzZSxcbiAgaHlkcmF0ZWRDbGFzczogdHJ1ZSxcbiAgLy8gVE9ETyhTVEVOQ0lMLTEzMDUpOiByZW1vdmUgdGhpcyBvcHRpb25cbiAgc2NyaXB0RGF0YU9wdHM6IGZhbHNlLFxuICAvLyBUT0RPKFNURU5DSUwtOTE0KTogcmVtb3ZlIHRoaXMgb3B0aW9uIHdoZW4gYGV4cGVyaW1lbnRhbFNsb3RGaXhlc2AgaXMgdGhlIGRlZmF1bHQgYmVoYXZpb3JcbiAgc2NvcGVkU2xvdFRleHRDb250ZW50Rml4OiBmYWxzZSxcbiAgLy8gVE9ETyhTVEVOQ0lMLTg1NCk6IFJlbW92ZSBjb2RlIHJlbGF0ZWQgdG8gbGVnYWN5IHNoYWRvd0RvbVNoaW0gZmllbGRcbiAgc2hhZG93RG9tU2hpbTogZmFsc2UsXG4gIC8vIFRPRE8oU1RFTkNJTC05MTQpOiByZW1vdmUgdGhpcyBvcHRpb24gd2hlbiBgZXhwZXJpbWVudGFsU2xvdEZpeGVzYCBpcyB0aGUgZGVmYXVsdCBiZWhhdmlvclxuICBzbG90Q2hpbGROb2Rlc0ZpeDogZmFsc2UsXG4gIGludmlzaWJsZVByZWh5ZHJhdGlvbjogdHJ1ZSxcbiAgcHJvcEJvb2xlYW46IHRydWUsXG4gIHByb3BOdW1iZXI6IHRydWUsXG4gIHByb3BTdHJpbmc6IHRydWUsXG4gIGNvbnN0cnVjdGFibGVDU1M6IHRydWUsXG4gIGRldlRvb2xzOiBmYWxzZSxcbiAgc2hhZG93RGVsZWdhdGVzRm9jdXM6IHRydWUsXG4gIGluaXRpYWxpemVOZXh0VGljazogZmFsc2UsXG4gIGFzeW5jTG9hZGluZzogdHJ1ZSxcbiAgYXN5bmNRdWV1ZTogZmFsc2UsXG4gIHRyYW5zZm9ybVRhZ05hbWU6IGZhbHNlLFxuICBhdHRhY2hTdHlsZXM6IHRydWUsXG4gIC8vIFRPRE8oU1RFTkNJTC05MTQpOiByZW1vdmUgdGhpcyBvcHRpb24gd2hlbiBgZXhwZXJpbWVudGFsU2xvdEZpeGVzYCBpcyB0aGUgZGVmYXVsdCBiZWhhdmlvclxuICBleHBlcmltZW50YWxTbG90Rml4ZXM6IGZhbHNlXG59O1xudmFyIEVudiA9IHt9O1xudmFyIE5BTUVTUEFDRSA9IC8qIGRlZmF1bHQgKi9cblwiYXBwXCI7XG5leHBvcnQgeyBCVUlMRCwgRW52LCBOQU1FU1BBQ0UgfTsiLCIvLyBzcmMvYXBwLWdsb2JhbHMvaW5kZXgudHNcbnZhciBnbG9iYWxTY3JpcHRzID0gLyogZGVmYXVsdCAqL1xuKCkgPT4ge307XG52YXIgZ2xvYmFsU3R5bGVzID0gLyogZGVmYXVsdCAqL1xuXCJcIjtcbmV4cG9ydCB7IGdsb2JhbFNjcmlwdHMsIGdsb2JhbFN0eWxlcyB9OyIsIi8qXG4gU3RlbmNpbCBDbGllbnQgUGxhdGZvcm0gdjQuMzYuMiB8IE1JVCBMaWNlbnNlZCB8IGh0dHBzOi8vc3RlbmNpbGpzLmNvbVxuICovXG52YXIgX19kZWZQcm9wID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fZXhwb3J0ID0gKHRhcmdldCwgYWxsKSA9PiB7XG4gIGZvciAodmFyIG5hbWUgaW4gYWxsKSBfX2RlZlByb3AodGFyZ2V0LCBuYW1lLCB7XG4gICAgZ2V0OiBhbGxbbmFtZV0sXG4gICAgZW51bWVyYWJsZTogdHJ1ZVxuICB9KTtcbn07XG5cbi8vIHNyYy9jbGllbnQvY2xpZW50LWJ1aWxkLnRzXG5pbXBvcnQgeyBCVUlMRCB9IGZyb20gXCJAc3RlbmNpbC9jb3JlL2ludGVybmFsL2FwcC1kYXRhXCI7XG52YXIgQnVpbGQgPSB7XG4gIGlzRGV2OiBCVUlMRC5pc0RldiA/IHRydWUgOiBmYWxzZSxcbiAgaXNCcm93c2VyOiB0cnVlLFxuICBpc1NlcnZlcjogZmFsc2UsXG4gIGlzVGVzdGluZzogQlVJTEQuaXNUZXN0aW5nID8gdHJ1ZSA6IGZhbHNlXG59O1xuXG4vLyBzcmMvY2xpZW50L2NsaWVudC1ob3N0LXJlZi50c1xuaW1wb3J0IHsgQlVJTEQgYXMgQlVJTEQzIH0gZnJvbSBcIkBzdGVuY2lsL2NvcmUvaW50ZXJuYWwvYXBwLWRhdGFcIjtcblxuLy8gc3JjL3V0aWxzL2VzMjAyMi1yZXdpcmUtY2xhc3MtbWVtYmVycy50c1xuaW1wb3J0IHsgQlVJTEQgYXMgQlVJTEQyIH0gZnJvbSBcIkBzdGVuY2lsL2NvcmUvaW50ZXJuYWwvYXBwLWRhdGFcIjtcblxuLy8gc3JjL3V0aWxzL2NvbnN0YW50cy50c1xudmFyIFNWR19OUyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcbnZhciBIVE1MX05TID0gXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI7XG52YXIgUHJpbWl0aXZlVHlwZSA9IC8qIEBfX1BVUkVfXyAqLyhQcmltaXRpdmVUeXBlMiA9PiB7XG4gIFByaW1pdGl2ZVR5cGUyW1wiVW5kZWZpbmVkXCJdID0gXCJ1bmRlZmluZWRcIjtcbiAgUHJpbWl0aXZlVHlwZTJbXCJOdWxsXCJdID0gXCJudWxsXCI7XG4gIFByaW1pdGl2ZVR5cGUyW1wiU3RyaW5nXCJdID0gXCJzdHJpbmdcIjtcbiAgUHJpbWl0aXZlVHlwZTJbXCJOdW1iZXJcIl0gPSBcIm51bWJlclwiO1xuICBQcmltaXRpdmVUeXBlMltcIlNwZWNpYWxOdW1iZXJcIl0gPSBcIm51bWJlclwiO1xuICBQcmltaXRpdmVUeXBlMltcIkJvb2xlYW5cIl0gPSBcImJvb2xlYW5cIjtcbiAgUHJpbWl0aXZlVHlwZTJbXCJCaWdJbnRcIl0gPSBcImJpZ2ludFwiO1xuICByZXR1cm4gUHJpbWl0aXZlVHlwZTI7XG59KShQcmltaXRpdmVUeXBlIHx8IHt9KTtcbnZhciBOb25QcmltaXRpdmVUeXBlID0gLyogQF9fUFVSRV9fICovKE5vblByaW1pdGl2ZVR5cGUyID0+IHtcbiAgTm9uUHJpbWl0aXZlVHlwZTJbXCJBcnJheVwiXSA9IFwiYXJyYXlcIjtcbiAgTm9uUHJpbWl0aXZlVHlwZTJbXCJEYXRlXCJdID0gXCJkYXRlXCI7XG4gIE5vblByaW1pdGl2ZVR5cGUyW1wiTWFwXCJdID0gXCJtYXBcIjtcbiAgTm9uUHJpbWl0aXZlVHlwZTJbXCJPYmplY3RcIl0gPSBcIm9iamVjdFwiO1xuICBOb25QcmltaXRpdmVUeXBlMltcIlJlZ3VsYXJFeHByZXNzaW9uXCJdID0gXCJyZWdleHBcIjtcbiAgTm9uUHJpbWl0aXZlVHlwZTJbXCJTZXRcIl0gPSBcInNldFwiO1xuICBOb25QcmltaXRpdmVUeXBlMltcIkNoYW5uZWxcIl0gPSBcImNoYW5uZWxcIjtcbiAgTm9uUHJpbWl0aXZlVHlwZTJbXCJTeW1ib2xcIl0gPSBcInN5bWJvbFwiO1xuICByZXR1cm4gTm9uUHJpbWl0aXZlVHlwZTI7XG59KShOb25QcmltaXRpdmVUeXBlIHx8IHt9KTtcbnZhciBUWVBFX0NPTlNUQU5UID0gXCJ0eXBlXCI7XG52YXIgVkFMVUVfQ09OU1RBTlQgPSBcInZhbHVlXCI7XG52YXIgU0VSSUFMSVpFRF9QUkVGSVggPSBcInNlcmlhbGl6ZWQ6XCI7XG5cbi8vIHNyYy91dGlscy9lczIwMjItcmV3aXJlLWNsYXNzLW1lbWJlcnMudHNcbnZhciByZVdpcmVHZXR0ZXJTZXR0ZXIgPSAoaW5zdGFuY2UsIGhvc3RSZWYpID0+IHtcbiAgdmFyIF9hO1xuICBjb25zdCBjbXBNZXRhID0gaG9zdFJlZi4kY21wTWV0YSQ7XG4gIGNvbnN0IG1lbWJlcnMgPSBPYmplY3QuZW50cmllcygoX2EgPSBjbXBNZXRhLiRtZW1iZXJzJCkgIT0gbnVsbCA/IF9hIDoge30pO1xuICBtZW1iZXJzLm1hcCgoW21lbWJlck5hbWUsIFttZW1iZXJGbGFnc11dKSA9PiB7XG4gICAgaWYgKChCVUlMRDIuc3RhdGUgfHwgQlVJTEQyLnByb3ApICYmIChtZW1iZXJGbGFncyAmIDMxIC8qIFByb3AgKi8gfHwgbWVtYmVyRmxhZ3MgJiAzMiAvKiBTdGF0ZSAqLykpIHtcbiAgICAgIGNvbnN0IG9nVmFsdWUgPSBpbnN0YW5jZVttZW1iZXJOYW1lXTtcbiAgICAgIGNvbnN0IG9nRGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoT2JqZWN0LmdldFByb3RvdHlwZU9mKGluc3RhbmNlKSwgbWVtYmVyTmFtZSk7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoaW5zdGFuY2UsIG1lbWJlck5hbWUsIHtcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIHJldHVybiBvZ0Rlc2NyaXB0b3IuZ2V0LmNhbGwodGhpcyk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldChuZXdWYWx1ZSkge1xuICAgICAgICAgIG9nRGVzY3JpcHRvci5zZXQuY2FsbCh0aGlzLCBuZXdWYWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgICBpbnN0YW5jZVttZW1iZXJOYW1lXSA9IGhvc3RSZWYuJGluc3RhbmNlVmFsdWVzJC5oYXMobWVtYmVyTmFtZSkgPyBob3N0UmVmLiRpbnN0YW5jZVZhbHVlcyQuZ2V0KG1lbWJlck5hbWUpIDogb2dWYWx1ZTtcbiAgICB9XG4gIH0pO1xufTtcblxuLy8gc3JjL2NsaWVudC9jbGllbnQtaG9zdC1yZWYudHNcbnZhciBnZXRIb3N0UmVmID0gcmVmID0+IHtcbiAgaWYgKHJlZi5fX3N0ZW5jaWxfX2dldEhvc3RSZWYpIHtcbiAgICByZXR1cm4gcmVmLl9fc3RlbmNpbF9fZ2V0SG9zdFJlZigpO1xuICB9XG4gIHJldHVybiB2b2lkIDA7XG59O1xudmFyIHJlZ2lzdGVySW5zdGFuY2UgPSAobGF6eUluc3RhbmNlLCBob3N0UmVmKSA9PiB7XG4gIGxhenlJbnN0YW5jZS5fX3N0ZW5jaWxfX2dldEhvc3RSZWYgPSAoKSA9PiBob3N0UmVmO1xuICBob3N0UmVmLiRsYXp5SW5zdGFuY2UkID0gbGF6eUluc3RhbmNlO1xuICBpZiAoQlVJTEQzLm1vZGVyblByb3BlcnR5RGVjbHMgJiYgKEJVSUxEMy5zdGF0ZSB8fCBCVUlMRDMucHJvcCkpIHtcbiAgICByZVdpcmVHZXR0ZXJTZXR0ZXIobGF6eUluc3RhbmNlLCBob3N0UmVmKTtcbiAgfVxufTtcbnZhciByZWdpc3Rlckhvc3QgPSAoaG9zdEVsZW1lbnQsIGNtcE1ldGEpID0+IHtcbiAgY29uc3QgaG9zdFJlZiA9IHtcbiAgICAkZmxhZ3MkOiAwLFxuICAgICRob3N0RWxlbWVudCQ6IGhvc3RFbGVtZW50LFxuICAgICRjbXBNZXRhJDogY21wTWV0YSxcbiAgICAkaW5zdGFuY2VWYWx1ZXMkOiAvKiBAX19QVVJFX18gKi9uZXcgTWFwKClcbiAgfTtcbiAgaWYgKEJVSUxEMy5pc0Rldikge1xuICAgIGhvc3RSZWYuJHJlbmRlckNvdW50JCA9IDA7XG4gIH1cbiAgaWYgKEJVSUxEMy5tZXRob2QgJiYgQlVJTEQzLmxhenlMb2FkKSB7XG4gICAgaG9zdFJlZi4kb25JbnN0YW5jZVByb21pc2UkID0gbmV3IFByb21pc2UociA9PiBob3N0UmVmLiRvbkluc3RhbmNlUmVzb2x2ZSQgPSByKTtcbiAgfVxuICBpZiAoQlVJTEQzLmFzeW5jTG9hZGluZykge1xuICAgIGhvc3RSZWYuJG9uUmVhZHlQcm9taXNlJCA9IG5ldyBQcm9taXNlKHIgPT4gaG9zdFJlZi4kb25SZWFkeVJlc29sdmUkID0gcik7XG4gICAgaG9zdEVsZW1lbnRbXCJzLXBcIl0gPSBbXTtcbiAgICBob3N0RWxlbWVudFtcInMtcmNcIl0gPSBbXTtcbiAgfVxuICBjb25zdCByZWYgPSBob3N0UmVmO1xuICBob3N0RWxlbWVudC5fX3N0ZW5jaWxfX2dldEhvc3RSZWYgPSAoKSA9PiByZWY7XG4gIGlmICghQlVJTEQzLmxhenlMb2FkICYmIEJVSUxEMy5tb2Rlcm5Qcm9wZXJ0eURlY2xzICYmIChCVUlMRDMuc3RhdGUgfHwgQlVJTEQzLnByb3ApKSB7XG4gICAgcmVXaXJlR2V0dGVyU2V0dGVyKGhvc3RFbGVtZW50LCBob3N0UmVmKTtcbiAgfVxuICByZXR1cm4gcmVmO1xufTtcbnZhciBpc01lbWJlckluRWxlbWVudCA9IChlbG0sIG1lbWJlck5hbWUpID0+IG1lbWJlck5hbWUgaW4gZWxtO1xuXG4vLyBzcmMvY2xpZW50L2NsaWVudC1sb2FkLW1vZHVsZS50c1xuaW1wb3J0IHsgQlVJTEQgYXMgQlVJTEQ1IH0gZnJvbSBcIkBzdGVuY2lsL2NvcmUvaW50ZXJuYWwvYXBwLWRhdGFcIjtcblxuLy8gc3JjL2NsaWVudC9jbGllbnQtbG9nLnRzXG5pbXBvcnQgeyBCVUlMRCBhcyBCVUlMRDQgfSBmcm9tIFwiQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9hcHAtZGF0YVwiO1xudmFyIGN1c3RvbUVycm9yO1xudmFyIGNvbnNvbGVFcnJvciA9IChlLCBlbCkgPT4gKGN1c3RvbUVycm9yIHx8IGNvbnNvbGUuZXJyb3IpKGUsIGVsKTtcbnZhciBTVEVOQ0lMX0RFVl9NT0RFID0gQlVJTEQ0LmlzVGVzdGluZyA/IFtcIlNURU5DSUw6XCJdIDogW1wiJWNzdGVuY2lsXCIsIFwiY29sb3I6IHdoaXRlO2JhY2tncm91bmQ6IzRjNDdmZjtmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOjEwcHg7IHBhZGRpbmc6MnB4IDZweDsgYm9yZGVyLXJhZGl1czogNXB4XCJdO1xudmFyIGNvbnNvbGVEZXZFcnJvciA9ICguLi5tKSA9PiBjb25zb2xlLmVycm9yKC4uLlNURU5DSUxfREVWX01PREUsIC4uLm0pO1xudmFyIGNvbnNvbGVEZXZXYXJuID0gKC4uLm0pID0+IGNvbnNvbGUud2FybiguLi5TVEVOQ0lMX0RFVl9NT0RFLCAuLi5tKTtcbnZhciBjb25zb2xlRGV2SW5mbyA9ICguLi5tKSA9PiBjb25zb2xlLmluZm8oLi4uU1RFTkNJTF9ERVZfTU9ERSwgLi4ubSk7XG52YXIgc2V0RXJyb3JIYW5kbGVyID0gaGFuZGxlciA9PiBjdXN0b21FcnJvciA9IGhhbmRsZXI7XG5cbi8vIHNyYy9jbGllbnQvY2xpZW50LWxvYWQtbW9kdWxlLnRzXG52YXIgY21wTW9kdWxlcyA9IC8qIEBfX1BVUkVfXyAqL25ldyBNYXAoKTtcbnZhciBNT0RVTEVfSU1QT1JUX1BSRUZJWCA9IFwiLi9cIjtcbnZhciBsb2FkTW9kdWxlID0gKGNtcE1ldGEsIGhvc3RSZWYsIGhtclZlcnNpb25JZCkgPT4ge1xuICBjb25zdCBleHBvcnROYW1lID0gY21wTWV0YS4kdGFnTmFtZSQucmVwbGFjZSgvLS9nLCBcIl9cIik7XG4gIGNvbnN0IGJ1bmRsZUlkID0gY21wTWV0YS4kbGF6eUJ1bmRsZUlkJDtcbiAgaWYgKEJVSUxENS5pc0RldiAmJiB0eXBlb2YgYnVuZGxlSWQgIT09IFwic3RyaW5nXCIpIHtcbiAgICBjb25zb2xlRGV2RXJyb3IoYFRyeWluZyB0byBsYXppbHkgbG9hZCBjb21wb25lbnQgPCR7Y21wTWV0YS4kdGFnTmFtZSR9PiB3aXRoIHN0eWxlIG1vZGUgXCIke2hvc3RSZWYuJG1vZGVOYW1lJH1cIiwgYnV0IGl0IGRvZXMgbm90IGV4aXN0LmApO1xuICAgIHJldHVybiB2b2lkIDA7XG4gIH0gZWxzZSBpZiAoIWJ1bmRsZUlkKSB7XG4gICAgcmV0dXJuIHZvaWQgMDtcbiAgfVxuICBjb25zdCBtb2R1bGUgPSAhQlVJTEQ1LmhvdE1vZHVsZVJlcGxhY2VtZW50ID8gY21wTW9kdWxlcy5nZXQoYnVuZGxlSWQpIDogZmFsc2U7XG4gIGlmIChtb2R1bGUpIHtcbiAgICByZXR1cm4gbW9kdWxlW2V4cG9ydE5hbWVdO1xuICB9XG4gIC8qIV9fU1RFTkNJTF9TVEFUSUNfSU1QT1JUX1NXSVRDSF9fKi9cbiAgcmV0dXJuIGltcG9ydCgvKiBAdml0ZS1pZ25vcmUgKi9cbiAgLyogd2VicGFja0luY2x1ZGU6IC9cXC5lbnRyeVxcLmpzJC8gKi9cbiAgLyogd2VicGFja0V4Y2x1ZGU6IC9cXC5zeXN0ZW1cXC5lbnRyeVxcLmpzJC8gKi9cbiAgLyogd2VicGFja01vZGU6IFwibGF6eVwiICovXG4gIGAuLyR7YnVuZGxlSWR9LmVudHJ5LmpzJHtCVUlMRDUuaG90TW9kdWxlUmVwbGFjZW1lbnQgJiYgaG1yVmVyc2lvbklkID8gXCI/cy1obXI9XCIgKyBobXJWZXJzaW9uSWQgOiBcIlwifWApLnRoZW4oaW1wb3J0ZWRNb2R1bGUgPT4ge1xuICAgIGlmICghQlVJTEQ1LmhvdE1vZHVsZVJlcGxhY2VtZW50KSB7XG4gICAgICBjbXBNb2R1bGVzLnNldChidW5kbGVJZCwgaW1wb3J0ZWRNb2R1bGUpO1xuICAgIH1cbiAgICByZXR1cm4gaW1wb3J0ZWRNb2R1bGVbZXhwb3J0TmFtZV07XG4gIH0sIGUgPT4ge1xuICAgIGNvbnNvbGVFcnJvcihlLCBob3N0UmVmLiRob3N0RWxlbWVudCQpO1xuICB9KTtcbn07XG5cbi8vIHNyYy9jbGllbnQvY2xpZW50LXN0eWxlLnRzXG52YXIgc3R5bGVzID0gLyogQF9fUFVSRV9fICovbmV3IE1hcCgpO1xudmFyIG1vZGVSZXNvbHV0aW9uQ2hhaW4gPSBbXTtcbnZhciBzZXRTY29wZWRTU1IgPSBfb3B0cyA9PiB7fTtcbnZhciBuZWVkc1Njb3BlZFNTUiA9ICgpID0+IGZhbHNlO1xuXG4vLyBzcmMvY2xpZW50L2NsaWVudC10YXNrLXF1ZXVlLnRzXG5pbXBvcnQgeyBCVUlMRCBhcyBCVUlMRDcgfSBmcm9tIFwiQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9hcHAtZGF0YVwiO1xuXG4vLyBzcmMvcnVudGltZS9ydW50aW1lLWNvbnN0YW50cy50c1xudmFyIENPTlRFTlRfUkVGX0lEID0gXCJyXCI7XG52YXIgT1JHX0xPQ0FUSU9OX0lEID0gXCJvXCI7XG52YXIgU0xPVF9OT0RFX0lEID0gXCJzXCI7XG52YXIgVEVYVF9OT0RFX0lEID0gXCJ0XCI7XG52YXIgQ09NTUVOVF9OT0RFX0lEID0gXCJjXCI7XG52YXIgSFlEUkFURV9JRCA9IFwicy1pZFwiO1xudmFyIEhZRFJBVEVEX1NUWUxFX0lEID0gXCJzdHktaWRcIjtcbnZhciBIWURSQVRFX0NISUxEX0lEID0gXCJjLWlkXCI7XG52YXIgSFlEUkFURURfQ1NTID0gXCJ7dmlzaWJpbGl0eTpoaWRkZW59Lmh5ZHJhdGVke3Zpc2liaWxpdHk6aW5oZXJpdH1cIjtcbnZhciBTVEVOQ0lMX0RPQ19EQVRBID0gXCJfc3RlbmNpbERvY0RhdGFcIjtcbnZhciBERUZBVUxUX0RPQ19EQVRBID0ge1xuICBob3N0SWRzOiAwLFxuICByb290TGV2ZWxJZHM6IDAsXG4gIHN0YXRpY0NvbXBvbmVudHM6IC8qIEBfX1BVUkVfXyAqL25ldyBTZXQoKVxufTtcbnZhciBTTE9UX0ZCX0NTUyA9IFwic2xvdC1mYntkaXNwbGF5OmNvbnRlbnRzfXNsb3QtZmJbaGlkZGVuXXtkaXNwbGF5Om5vbmV9XCI7XG52YXIgWExJTktfTlMgPSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIjtcbnZhciBGT1JNX0FTU09DSUFURURfQ1VTVE9NX0VMRU1FTlRfQ0FMTEJBQ0tTID0gW1wiZm9ybUFzc29jaWF0ZWRDYWxsYmFja1wiLCBcImZvcm1SZXNldENhbGxiYWNrXCIsIFwiZm9ybURpc2FibGVkQ2FsbGJhY2tcIiwgXCJmb3JtU3RhdGVSZXN0b3JlQ2FsbGJhY2tcIl07XG5cbi8vIHNyYy9jbGllbnQvY2xpZW50LXdpbmRvdy50c1xuaW1wb3J0IHsgQlVJTEQgYXMgQlVJTEQ2IH0gZnJvbSBcIkBzdGVuY2lsL2NvcmUvaW50ZXJuYWwvYXBwLWRhdGFcIjtcbnZhciB3aW4gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge307XG52YXIgSCA9IHdpbi5IVE1MRWxlbWVudCB8fCBjbGFzcyB7fTtcbnZhciBwbHQgPSB7XG4gICRmbGFncyQ6IDAsXG4gICRyZXNvdXJjZXNVcmwkOiBcIlwiLFxuICBqbXA6IGgyID0+IGgyKCksXG4gIHJhZjogaDIgPT4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGgyKSxcbiAgYWVsOiAoZWwsIGV2ZW50TmFtZSwgbGlzdGVuZXIsIG9wdHMpID0+IGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lciwgb3B0cyksXG4gIHJlbDogKGVsLCBldmVudE5hbWUsIGxpc3RlbmVyLCBvcHRzKSA9PiBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIsIG9wdHMpLFxuICBjZTogKGV2ZW50TmFtZSwgb3B0cykgPT4gbmV3IEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwgb3B0cylcbn07XG52YXIgc2V0UGxhdGZvcm1IZWxwZXJzID0gaGVscGVycyA9PiB7XG4gIE9iamVjdC5hc3NpZ24ocGx0LCBoZWxwZXJzKTtcbn07XG52YXIgc3VwcG9ydHNTaGFkb3cgPSBCVUlMRDYuc2hhZG93RG9tO1xudmFyIHN1cHBvcnRzTGlzdGVuZXJPcHRpb25zID0gLyogQF9fUFVSRV9fICovKCgpID0+IHtcbiAgdmFyIF9hO1xuICBsZXQgc3VwcG9ydHNMaXN0ZW5lck9wdGlvbnMyID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgKF9hID0gd2luLmRvY3VtZW50KSA9PSBudWxsID8gdm9pZCAwIDogX2EuYWRkRXZlbnRMaXN0ZW5lcihcImVcIiwgbnVsbCwgT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCBcInBhc3NpdmVcIiwge1xuICAgICAgZ2V0KCkge1xuICAgICAgICBzdXBwb3J0c0xpc3RlbmVyT3B0aW9uczIgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pKTtcbiAgfSBjYXRjaCAoZSkge31cbiAgcmV0dXJuIHN1cHBvcnRzTGlzdGVuZXJPcHRpb25zMjtcbn0pKCk7XG52YXIgcHJvbWlzZVJlc29sdmUgPSB2ID0+IFByb21pc2UucmVzb2x2ZSh2KTtcbnZhciBzdXBwb3J0c0NvbnN0cnVjdGFibGVTdHlsZXNoZWV0cyA9IEJVSUxENi5jb25zdHJ1Y3RhYmxlQ1NTID8gLyogQF9fUFVSRV9fICovKCgpID0+IHtcbiAgdHJ5IHtcbiAgICBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuICAgIHJldHVybiB0eXBlb2YgbmV3IENTU1N0eWxlU2hlZXQoKS5yZXBsYWNlU3luYyA9PT0gXCJmdW5jdGlvblwiO1xuICB9IGNhdGNoIChlKSB7fVxuICByZXR1cm4gZmFsc2U7XG59KSgpIDogZmFsc2U7XG52YXIgc3VwcG9ydHNNdXRhYmxlQWRvcHRlZFN0eWxlU2hlZXRzID0gc3VwcG9ydHNDb25zdHJ1Y3RhYmxlU3R5bGVzaGVldHMgPyAvKiBAX19QVVJFX18gKi8oKCkgPT4gISF3aW4uZG9jdW1lbnQgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih3aW4uZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzLCBcImxlbmd0aFwiKS53cml0YWJsZSkoKSA6IGZhbHNlO1xuXG4vLyBzcmMvY2xpZW50L2NsaWVudC10YXNrLXF1ZXVlLnRzXG52YXIgcXVldWVDb25nZXN0aW9uID0gMDtcbnZhciBxdWV1ZVBlbmRpbmcgPSBmYWxzZTtcbnZhciBxdWV1ZURvbVJlYWRzID0gW107XG52YXIgcXVldWVEb21Xcml0ZXMgPSBbXTtcbnZhciBxdWV1ZURvbVdyaXRlc0xvdyA9IFtdO1xudmFyIHF1ZXVlVGFzayA9IChxdWV1ZSwgd3JpdGUpID0+IGNiID0+IHtcbiAgcXVldWUucHVzaChjYik7XG4gIGlmICghcXVldWVQZW5kaW5nKSB7XG4gICAgcXVldWVQZW5kaW5nID0gdHJ1ZTtcbiAgICBpZiAod3JpdGUgJiYgcGx0LiRmbGFncyQgJiA0IC8qIHF1ZXVlU3luYyAqLykge1xuICAgICAgbmV4dFRpY2soZmx1c2gpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwbHQucmFmKGZsdXNoKTtcbiAgICB9XG4gIH1cbn07XG52YXIgY29uc3VtZSA9IHF1ZXVlID0+IHtcbiAgZm9yIChsZXQgaTIgPSAwOyBpMiA8IHF1ZXVlLmxlbmd0aDsgaTIrKykge1xuICAgIHRyeSB7XG4gICAgICBxdWV1ZVtpMl0ocGVyZm9ybWFuY2Uubm93KCkpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGVFcnJvcihlKTtcbiAgICB9XG4gIH1cbiAgcXVldWUubGVuZ3RoID0gMDtcbn07XG52YXIgY29uc3VtZVRpbWVvdXQgPSAocXVldWUsIHRpbWVvdXQpID0+IHtcbiAgbGV0IGkyID0gMDtcbiAgbGV0IHRzID0gMDtcbiAgd2hpbGUgKGkyIDwgcXVldWUubGVuZ3RoICYmICh0cyA9IHBlcmZvcm1hbmNlLm5vdygpKSA8IHRpbWVvdXQpIHtcbiAgICB0cnkge1xuICAgICAgcXVldWVbaTIrK10odHMpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGVFcnJvcihlKTtcbiAgICB9XG4gIH1cbiAgaWYgKGkyID09PSBxdWV1ZS5sZW5ndGgpIHtcbiAgICBxdWV1ZS5sZW5ndGggPSAwO1xuICB9IGVsc2UgaWYgKGkyICE9PSAwKSB7XG4gICAgcXVldWUuc3BsaWNlKDAsIGkyKTtcbiAgfVxufTtcbnZhciBmbHVzaCA9ICgpID0+IHtcbiAgaWYgKEJVSUxENy5hc3luY1F1ZXVlKSB7XG4gICAgcXVldWVDb25nZXN0aW9uKys7XG4gIH1cbiAgY29uc3VtZShxdWV1ZURvbVJlYWRzKTtcbiAgaWYgKEJVSUxENy5hc3luY1F1ZXVlKSB7XG4gICAgY29uc3QgdGltZW91dCA9IChwbHQuJGZsYWdzJCAmIDYgLyogcXVldWVNYXNrICovKSA9PT0gMiAvKiBhcHBMb2FkZWQgKi8gPyBwZXJmb3JtYW5jZS5ub3coKSArIDE0ICogTWF0aC5jZWlsKHF1ZXVlQ29uZ2VzdGlvbiAqICgxIC8gMTApKSA6IEluZmluaXR5O1xuICAgIGNvbnN1bWVUaW1lb3V0KHF1ZXVlRG9tV3JpdGVzLCB0aW1lb3V0KTtcbiAgICBjb25zdW1lVGltZW91dChxdWV1ZURvbVdyaXRlc0xvdywgdGltZW91dCk7XG4gICAgaWYgKHF1ZXVlRG9tV3JpdGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHF1ZXVlRG9tV3JpdGVzTG93LnB1c2goLi4ucXVldWVEb21Xcml0ZXMpO1xuICAgICAgcXVldWVEb21Xcml0ZXMubGVuZ3RoID0gMDtcbiAgICB9XG4gICAgaWYgKHF1ZXVlUGVuZGluZyA9IHF1ZXVlRG9tUmVhZHMubGVuZ3RoICsgcXVldWVEb21Xcml0ZXMubGVuZ3RoICsgcXVldWVEb21Xcml0ZXNMb3cubGVuZ3RoID4gMCkge1xuICAgICAgcGx0LnJhZihmbHVzaCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXVlQ29uZ2VzdGlvbiA9IDA7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN1bWUocXVldWVEb21Xcml0ZXMpO1xuICAgIGlmIChxdWV1ZVBlbmRpbmcgPSBxdWV1ZURvbVJlYWRzLmxlbmd0aCA+IDApIHtcbiAgICAgIHBsdC5yYWYoZmx1c2gpO1xuICAgIH1cbiAgfVxufTtcbnZhciBuZXh0VGljayA9IGNiID0+IHByb21pc2VSZXNvbHZlKCkudGhlbihjYik7XG52YXIgcmVhZFRhc2sgPSAvKiBAX19QVVJFX18gKi9xdWV1ZVRhc2socXVldWVEb21SZWFkcywgZmFsc2UpO1xudmFyIHdyaXRlVGFzayA9IC8qIEBfX1BVUkVfXyAqL3F1ZXVlVGFzayhxdWV1ZURvbVdyaXRlcywgdHJ1ZSk7XG5cbi8vIHNyYy9jbGllbnQvaW5kZXgudHNcbmltcG9ydCB7IEJVSUxEIGFzIEJVSUxEMzAsIEVudiwgTkFNRVNQQUNFIGFzIE5BTUVTUEFDRTIgfSBmcm9tIFwiQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9hcHAtZGF0YVwiO1xuXG4vLyBzcmMvcnVudGltZS9hc3NldC1wYXRoLnRzXG52YXIgZ2V0QXNzZXRQYXRoID0gcGF0aCA9PiB7XG4gIGNvbnN0IGFzc2V0VXJsID0gbmV3IFVSTChwYXRoLCBwbHQuJHJlc291cmNlc1VybCQpO1xuICByZXR1cm4gYXNzZXRVcmwub3JpZ2luICE9PSB3aW4ubG9jYXRpb24ub3JpZ2luID8gYXNzZXRVcmwuaHJlZiA6IGFzc2V0VXJsLnBhdGhuYW1lO1xufTtcbnZhciBzZXRBc3NldFBhdGggPSBwYXRoID0+IHBsdC4kcmVzb3VyY2VzVXJsJCA9IHBhdGg7XG5cbi8vIHNyYy9ydW50aW1lL2Jvb3RzdHJhcC1jdXN0b20tZWxlbWVudC50c1xuaW1wb3J0IHsgQlVJTEQgYXMgQlVJTEQyNyB9IGZyb20gXCJAc3RlbmNpbC9jb3JlL2ludGVybmFsL2FwcC1kYXRhXCI7XG5cbi8vIHNyYy91dGlscy9oZWxwZXJzLnRzXG52YXIgaXNEZWYgPSB2ID0+IHYgIT0gbnVsbCAmJiB2ICE9PSB2b2lkIDA7XG52YXIgaXNDb21wbGV4VHlwZSA9IG8gPT4ge1xuICBvID0gdHlwZW9mIG87XG4gIHJldHVybiBvID09PSBcIm9iamVjdFwiIHx8IG8gPT09IFwiZnVuY3Rpb25cIjtcbn07XG5cbi8vIHNyYy91dGlscy9xdWVyeS1ub25jZS1tZXRhLXRhZy1jb250ZW50LnRzXG5mdW5jdGlvbiBxdWVyeU5vbmNlTWV0YVRhZ0NvbnRlbnQoZG9jKSB7XG4gIHZhciBfYSwgX2IsIF9jO1xuICByZXR1cm4gKF9jID0gKF9iID0gKF9hID0gZG9jLmhlYWQpID09IG51bGwgPyB2b2lkIDAgOiBfYS5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJjc3Atbm9uY2VcIl0nKSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9iLmdldEF0dHJpYnV0ZShcImNvbnRlbnRcIikpICE9IG51bGwgPyBfYyA6IHZvaWQgMDtcbn1cblxuLy8gc3JjL3V0aWxzL3JlZ3VsYXItZXhwcmVzc2lvbi50c1xudmFyIGVzY2FwZVJlZ0V4cFNwZWNpYWxDaGFyYWN0ZXJzID0gdGV4dCA9PiB7XG4gIHJldHVybiB0ZXh0LnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCBcIlxcXFwkJlwiKTtcbn07XG5cbi8vIHNyYy91dGlscy9yZW1vdGUtdmFsdWUudHNcbnZhciBSZW1vdGVWYWx1ZSA9IGNsYXNzIF9SZW1vdGVWYWx1ZSB7XG4gIC8qKlxuICAgKiBEZXNlcmlhbGl6ZXMgYSBMb2NhbFZhbHVlIHNlcmlhbGl6ZWQgb2JqZWN0IGJhY2sgdG8gaXRzIG9yaWdpbmFsIEphdmFTY3JpcHQgcmVwcmVzZW50YXRpb25cbiAgICpcbiAgICogQHBhcmFtIHNlcmlhbGl6ZWQgVGhlIHNlcmlhbGl6ZWQgTG9jYWxWYWx1ZSBvYmplY3RcbiAgICogQHJldHVybnMgVGhlIG9yaWdpbmFsIEphdmFTY3JpcHQgdmFsdWUvb2JqZWN0XG4gICAqL1xuICBzdGF0aWMgZnJvbUxvY2FsVmFsdWUoc2VyaWFsaXplZCkge1xuICAgIGNvbnN0IHR5cGUgPSBzZXJpYWxpemVkW1RZUEVfQ09OU1RBTlRdO1xuICAgIGNvbnN0IHZhbHVlID0gVkFMVUVfQ09OU1RBTlQgaW4gc2VyaWFsaXplZCA/IHNlcmlhbGl6ZWRbVkFMVUVfQ09OU1RBTlRdIDogdm9pZCAwO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBcInN0cmluZ1wiIC8qIFN0cmluZyAqLzpcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgY2FzZSBcImJvb2xlYW5cIiAvKiBCb29sZWFuICovOlxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICBjYXNlIFwiYmlnaW50XCIgLyogQmlnSW50ICovOlxuICAgICAgICByZXR1cm4gQmlnSW50KHZhbHVlKTtcbiAgICAgIGNhc2UgXCJ1bmRlZmluZWRcIiAvKiBVbmRlZmluZWQgKi86XG4gICAgICAgIHJldHVybiB2b2lkIDA7XG4gICAgICBjYXNlIFwibnVsbFwiIC8qIE51bGwgKi86XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgY2FzZSBcIm51bWJlclwiIC8qIE51bWJlciAqLzpcbiAgICAgICAgaWYgKHZhbHVlID09PSBcIk5hTlwiKSByZXR1cm4gTmFOO1xuICAgICAgICBpZiAodmFsdWUgPT09IFwiLTBcIikgcmV0dXJuIC0wO1xuICAgICAgICBpZiAodmFsdWUgPT09IFwiSW5maW5pdHlcIikgcmV0dXJuIEluZmluaXR5O1xuICAgICAgICBpZiAodmFsdWUgPT09IFwiLUluZmluaXR5XCIpIHJldHVybiAtSW5maW5pdHk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIGNhc2UgXCJhcnJheVwiIC8qIEFycmF5ICovOlxuICAgICAgICByZXR1cm4gdmFsdWUubWFwKGl0ZW0gPT4gX1JlbW90ZVZhbHVlLmZyb21Mb2NhbFZhbHVlKGl0ZW0pKTtcbiAgICAgIGNhc2UgXCJkYXRlXCIgLyogRGF0ZSAqLzpcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHZhbHVlKTtcbiAgICAgIGNhc2UgXCJtYXBcIiAvKiBNYXAgKi86XG4gICAgICAgIGNvbnN0IG1hcDIgPSAvKiBAX19QVVJFX18gKi9uZXcgTWFwKCk7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiB2YWx1ZSkge1xuICAgICAgICAgIGNvbnN0IGRlc2VyaWFsaXplZEtleSA9IHR5cGVvZiBrZXkgPT09IFwib2JqZWN0XCIgJiYga2V5ICE9PSBudWxsID8gX1JlbW90ZVZhbHVlLmZyb21Mb2NhbFZhbHVlKGtleSkgOiBrZXk7XG4gICAgICAgICAgY29uc3QgZGVzZXJpYWxpemVkVmFsdWUgPSBfUmVtb3RlVmFsdWUuZnJvbUxvY2FsVmFsdWUodmFsKTtcbiAgICAgICAgICBtYXAyLnNldChkZXNlcmlhbGl6ZWRLZXksIGRlc2VyaWFsaXplZFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWFwMjtcbiAgICAgIGNhc2UgXCJvYmplY3RcIiAvKiBPYmplY3QgKi86XG4gICAgICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgdmFsdWUpIHtcbiAgICAgICAgICBvYmpba2V5XSA9IF9SZW1vdGVWYWx1ZS5mcm9tTG9jYWxWYWx1ZSh2YWwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgICBjYXNlIFwicmVnZXhwXCIgLyogUmVndWxhckV4cHJlc3Npb24gKi86XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBwYXR0ZXJuLFxuICAgICAgICAgIGZsYWdzXG4gICAgICAgIH0gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAocGF0dGVybiwgZmxhZ3MpO1xuICAgICAgY2FzZSBcInNldFwiIC8qIFNldCAqLzpcbiAgICAgICAgY29uc3Qgc2V0ID0gLyogQF9fUFVSRV9fICovbmV3IFNldCgpO1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdmFsdWUpIHtcbiAgICAgICAgICBzZXQuYWRkKF9SZW1vdGVWYWx1ZS5mcm9tTG9jYWxWYWx1ZShpdGVtKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNldDtcbiAgICAgIGNhc2UgXCJzeW1ib2xcIiAvKiBTeW1ib2wgKi86XG4gICAgICAgIHJldHVybiBTeW1ib2wodmFsdWUpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbnN1cHBvcnRlZCB0eXBlOiAke3R5cGV9YCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBVdGlsaXR5IG1ldGhvZCB0byBkZXNlcmlhbGl6ZSBtdWx0aXBsZSBMb2NhbFZhbHVlcyBhdCBvbmNlXG4gICAqXG4gICAqIEBwYXJhbSBzZXJpYWxpemVkVmFsdWVzIEFycmF5IG9mIHNlcmlhbGl6ZWQgTG9jYWxWYWx1ZSBvYmplY3RzXG4gICAqIEByZXR1cm5zIEFycmF5IG9mIGRlc2VyaWFsaXplZCBKYXZhU2NyaXB0IHZhbHVlc1xuICAgKi9cbiAgc3RhdGljIGZyb21Mb2NhbFZhbHVlQXJyYXkoc2VyaWFsaXplZFZhbHVlcykge1xuICAgIHJldHVybiBzZXJpYWxpemVkVmFsdWVzLm1hcCh2YWx1ZSA9PiBfUmVtb3RlVmFsdWUuZnJvbUxvY2FsVmFsdWUodmFsdWUpKTtcbiAgfVxuICAvKipcbiAgICogVmVyaWZpZXMgaWYgdGhlIGdpdmVuIG9iamVjdCBtYXRjaGVzIHRoZSBzdHJ1Y3R1cmUgb2YgYSBzZXJpYWxpemVkIExvY2FsVmFsdWVcbiAgICpcbiAgICogQHBhcmFtIG9iaiBPYmplY3QgdG8gdmVyaWZ5XG4gICAqIEByZXR1cm5zIGJvb2xlYW4gaW5kaWNhdGluZyBpZiB0aGUgb2JqZWN0IGhhcyBMb2NhbFZhbHVlIHN0cnVjdHVyZVxuICAgKi9cbiAgc3RhdGljIGlzTG9jYWxWYWx1ZU9iamVjdChvYmopIHtcbiAgICBpZiAodHlwZW9mIG9iaiAhPT0gXCJvYmplY3RcIiB8fCBvYmogPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoVFlQRV9DT05TVEFOVCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgdHlwZSA9IG9ialtUWVBFX0NPTlNUQU5UXTtcbiAgICBjb25zdCBoYXNUeXBlUHJvcGVydHkgPSBPYmplY3QudmFsdWVzKHtcbiAgICAgIC4uLlByaW1pdGl2ZVR5cGUsXG4gICAgICAuLi5Ob25QcmltaXRpdmVUeXBlXG4gICAgfSkuaW5jbHVkZXModHlwZSk7XG4gICAgaWYgKCFoYXNUeXBlUHJvcGVydHkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHR5cGUgIT09IFwibnVsbFwiIC8qIE51bGwgKi8gJiYgdHlwZSAhPT0gXCJ1bmRlZmluZWRcIiAvKiBVbmRlZmluZWQgKi8pIHtcbiAgICAgIHJldHVybiBvYmouaGFzT3duUHJvcGVydHkoVkFMVUVfQ09OU1RBTlQpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuLy8gc3JjL3V0aWxzL3Jlc3VsdC50c1xudmFyIHJlc3VsdF9leHBvcnRzID0ge307XG5fX2V4cG9ydChyZXN1bHRfZXhwb3J0cywge1xuICBlcnI6ICgpID0+IGVycixcbiAgbWFwOiAoKSA9PiBtYXAsXG4gIG9rOiAoKSA9PiBvayxcbiAgdW53cmFwOiAoKSA9PiB1bndyYXAsXG4gIHVud3JhcEVycjogKCkgPT4gdW53cmFwRXJyXG59KTtcbnZhciBvayA9IHZhbHVlID0+ICh7XG4gIGlzT2s6IHRydWUsXG4gIGlzRXJyOiBmYWxzZSxcbiAgdmFsdWVcbn0pO1xudmFyIGVyciA9IHZhbHVlID0+ICh7XG4gIGlzT2s6IGZhbHNlLFxuICBpc0VycjogdHJ1ZSxcbiAgdmFsdWVcbn0pO1xuZnVuY3Rpb24gbWFwKHJlc3VsdCwgZm4pIHtcbiAgaWYgKHJlc3VsdC5pc09rKSB7XG4gICAgY29uc3QgdmFsID0gZm4ocmVzdWx0LnZhbHVlKTtcbiAgICBpZiAodmFsIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgcmV0dXJuIHZhbC50aGVuKG5ld1ZhbCA9PiBvayhuZXdWYWwpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG9rKHZhbCk7XG4gICAgfVxuICB9XG4gIGlmIChyZXN1bHQuaXNFcnIpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICByZXR1cm4gZXJyKHZhbHVlKTtcbiAgfVxuICB0aHJvdyBcInNob3VsZCBuZXZlciBnZXQgaGVyZVwiO1xufVxudmFyIHVud3JhcCA9IHJlc3VsdCA9PiB7XG4gIGlmIChyZXN1bHQuaXNPaykge1xuICAgIHJldHVybiByZXN1bHQudmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgcmVzdWx0LnZhbHVlO1xuICB9XG59O1xudmFyIHVud3JhcEVyciA9IHJlc3VsdCA9PiB7XG4gIGlmIChyZXN1bHQuaXNFcnIpIHtcbiAgICByZXR1cm4gcmVzdWx0LnZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHRocm93IHJlc3VsdC52YWx1ZTtcbiAgfVxufTtcblxuLy8gc3JjL3V0aWxzL3NlcmlhbGl6ZS50c1xuZnVuY3Rpb24gZGVzZXJpYWxpemVQcm9wZXJ0eSh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInN0cmluZ1wiIHx8ICF2YWx1ZS5zdGFydHNXaXRoKFNFUklBTElaRURfUFJFRklYKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICByZXR1cm4gUmVtb3RlVmFsdWUuZnJvbUxvY2FsVmFsdWUoSlNPTi5wYXJzZShhdG9iKHZhbHVlLnNsaWNlKFNFUklBTElaRURfUFJFRklYLmxlbmd0aCkpKSk7XG59XG5cbi8vIHNyYy91dGlscy9zaGFkb3ctcm9vdC50c1xuaW1wb3J0IHsgQlVJTEQgYXMgQlVJTEQ4IH0gZnJvbSBcIkBzdGVuY2lsL2NvcmUvaW50ZXJuYWwvYXBwLWRhdGFcIjtcbmltcG9ydCB7IGdsb2JhbFN0eWxlcyB9IGZyb20gXCJAc3RlbmNpbC9jb3JlL2ludGVybmFsL2FwcC1nbG9iYWxzXCI7XG5cbi8vIHNyYy91dGlscy9zdHlsZS50c1xuZnVuY3Rpb24gY3JlYXRlU3R5bGVTaGVldElmTmVlZGVkQW5kU3VwcG9ydGVkKHN0eWxlczIpIHtcbiAgaWYgKCFzdHlsZXMyIHx8ICFzdXBwb3J0c0NvbnN0cnVjdGFibGVTdHlsZXNoZWV0cykgcmV0dXJuIHZvaWQgMDtcbiAgY29uc3Qgc2hlZXQgPSBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuICBzaGVldC5yZXBsYWNlU3luYyhzdHlsZXMyKTtcbiAgcmV0dXJuIHNoZWV0O1xufVxuXG4vLyBzcmMvdXRpbHMvc2hhZG93LXJvb3QudHNcbnZhciBnbG9iYWxTdHlsZVNoZWV0O1xuZnVuY3Rpb24gY3JlYXRlU2hhZG93Um9vdChjbXBNZXRhKSB7XG4gIHZhciBfYTtcbiAgY29uc3Qgc2hhZG93Um9vdCA9IEJVSUxEOC5zaGFkb3dEZWxlZ2F0ZXNGb2N1cyA/IHRoaXMuYXR0YWNoU2hhZG93KHtcbiAgICBtb2RlOiBcIm9wZW5cIixcbiAgICBkZWxlZ2F0ZXNGb2N1czogISEoY21wTWV0YS4kZmxhZ3MkICYgMTYgLyogc2hhZG93RGVsZWdhdGVzRm9jdXMgKi8pXG4gIH0pIDogdGhpcy5hdHRhY2hTaGFkb3coe1xuICAgIG1vZGU6IFwib3BlblwiXG4gIH0pO1xuICBpZiAoZ2xvYmFsU3R5bGVTaGVldCA9PT0gdm9pZCAwKSBnbG9iYWxTdHlsZVNoZWV0ID0gKF9hID0gY3JlYXRlU3R5bGVTaGVldElmTmVlZGVkQW5kU3VwcG9ydGVkKGdsb2JhbFN0eWxlcykpICE9IG51bGwgPyBfYSA6IG51bGw7XG4gIGlmIChnbG9iYWxTdHlsZVNoZWV0KSB7XG4gICAgaWYgKHN1cHBvcnRzTXV0YWJsZUFkb3B0ZWRTdHlsZVNoZWV0cykge1xuICAgICAgc2hhZG93Um9vdC5hZG9wdGVkU3R5bGVTaGVldHMucHVzaChnbG9iYWxTdHlsZVNoZWV0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2hhZG93Um9vdC5hZG9wdGVkU3R5bGVTaGVldHMgPSBbLi4uc2hhZG93Um9vdC5hZG9wdGVkU3R5bGVTaGVldHMsIGdsb2JhbFN0eWxlU2hlZXRdO1xuICAgIH1cbiAgfVxufVxuXG4vLyBzcmMvdXRpbHMvdXRpbC50c1xudmFyIGxvd2VyUGF0aFBhcmFtID0gZm4gPT4gcCA9PiBmbihwLnRvTG93ZXJDYXNlKCkpO1xudmFyIGlzRHRzRmlsZSA9IGxvd2VyUGF0aFBhcmFtKHAgPT4gcC5lbmRzV2l0aChcIi5kLnRzXCIpIHx8IHAuZW5kc1dpdGgoXCIuZC5tdHNcIikgfHwgcC5lbmRzV2l0aChcIi5kLmN0c1wiKSk7XG52YXIgaXNUc0ZpbGUgPSBsb3dlclBhdGhQYXJhbShwID0+ICFpc0R0c0ZpbGUocCkgJiYgKHAuZW5kc1dpdGgoXCIudHNcIikgfHwgcC5lbmRzV2l0aChcIi5tdHNcIikgfHwgcC5lbmRzV2l0aChcIi5jdHNcIikpKTtcbnZhciBpc1RzeEZpbGUgPSBsb3dlclBhdGhQYXJhbShwID0+IHAuZW5kc1dpdGgoXCIudHN4XCIpIHx8IHAuZW5kc1dpdGgoXCIubXRzeFwiKSB8fCBwLmVuZHNXaXRoKFwiLmN0c3hcIikpO1xudmFyIGlzSnN4RmlsZSA9IGxvd2VyUGF0aFBhcmFtKHAgPT4gcC5lbmRzV2l0aChcIi5qc3hcIikgfHwgcC5lbmRzV2l0aChcIi5tanN4XCIpIHx8IHAuZW5kc1dpdGgoXCIuY2pzeFwiKSk7XG52YXIgaXNKc0ZpbGUgPSBsb3dlclBhdGhQYXJhbShwID0+IHAuZW5kc1dpdGgoXCIuanNcIikgfHwgcC5lbmRzV2l0aChcIi5tanNcIikgfHwgcC5lbmRzV2l0aChcIi5janNcIikpO1xuXG4vLyBzcmMvcnVudGltZS9jb25uZWN0ZWQtY2FsbGJhY2sudHNcbmltcG9ydCB7IEJVSUxEIGFzIEJVSUxEMjUgfSBmcm9tIFwiQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9hcHAtZGF0YVwiO1xuXG4vLyBzcmMvcnVudGltZS9jbGllbnQtaHlkcmF0ZS50c1xuaW1wb3J0IHsgQlVJTEQgYXMgQlVJTEQxNCB9IGZyb20gXCJAc3RlbmNpbC9jb3JlL2ludGVybmFsL2FwcC1kYXRhXCI7XG5cbi8vIHNyYy9ydW50aW1lL2RvbS1leHRyYXMudHNcbmltcG9ydCB7IEJVSUxEIGFzIEJVSUxEMTAgfSBmcm9tIFwiQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9hcHAtZGF0YVwiO1xuXG4vLyBzcmMvcnVudGltZS9zbG90LXBvbHlmaWxsLXV0aWxzLnRzXG5pbXBvcnQgeyBCVUlMRCBhcyBCVUlMRDkgfSBmcm9tIFwiQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9hcHAtZGF0YVwiO1xudmFyIHVwZGF0ZUZhbGxiYWNrU2xvdFZpc2liaWxpdHkgPSBlbG0gPT4ge1xuICBjb25zdCBjaGlsZE5vZGVzID0gaW50ZXJuYWxDYWxsKGVsbSwgXCJjaGlsZE5vZGVzXCIpO1xuICBpZiAoZWxtLnRhZ05hbWUgJiYgZWxtLnRhZ05hbWUuaW5jbHVkZXMoXCItXCIpICYmIGVsbVtcInMtY3JcIl0gJiYgZWxtLnRhZ05hbWUgIT09IFwiU0xPVC1GQlwiKSB7XG4gICAgZ2V0SG9zdFNsb3ROb2RlcyhjaGlsZE5vZGVzLCBlbG0udGFnTmFtZSkuZm9yRWFjaChzbG90Tm9kZSA9PiB7XG4gICAgICBpZiAoc2xvdE5vZGUubm9kZVR5cGUgPT09IDEgLyogRWxlbWVudE5vZGUgKi8gJiYgc2xvdE5vZGUudGFnTmFtZSA9PT0gXCJTTE9ULUZCXCIpIHtcbiAgICAgICAgaWYgKGdldFNsb3RDaGlsZFNpYmxpbmdzKHNsb3ROb2RlLCBnZXRTbG90TmFtZShzbG90Tm9kZSksIGZhbHNlKS5sZW5ndGgpIHtcbiAgICAgICAgICBzbG90Tm9kZS5oaWRkZW4gPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNsb3ROb2RlLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgbGV0IGkyID0gMDtcbiAgZm9yIChpMiA9IDA7IGkyIDwgY2hpbGROb2Rlcy5sZW5ndGg7IGkyKyspIHtcbiAgICBjb25zdCBjaGlsZE5vZGUgPSBjaGlsZE5vZGVzW2kyXTtcbiAgICBpZiAoY2hpbGROb2RlLm5vZGVUeXBlID09PSAxIC8qIEVsZW1lbnROb2RlICovICYmIGludGVybmFsQ2FsbChjaGlsZE5vZGUsIFwiY2hpbGROb2Rlc1wiKS5sZW5ndGgpIHtcbiAgICAgIHVwZGF0ZUZhbGxiYWNrU2xvdFZpc2liaWxpdHkoY2hpbGROb2RlKTtcbiAgICB9XG4gIH1cbn07XG52YXIgZ2V0U2xvdHRlZENoaWxkTm9kZXMgPSBjaGlsZE5vZGVzID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIGZvciAobGV0IGkyID0gMDsgaTIgPCBjaGlsZE5vZGVzLmxlbmd0aDsgaTIrKykge1xuICAgIGNvbnN0IHNsb3R0ZWROb2RlID0gY2hpbGROb2Rlc1tpMl1bXCJzLW5yXCJdIHx8IHZvaWQgMDtcbiAgICBpZiAoc2xvdHRlZE5vZGUgJiYgc2xvdHRlZE5vZGUuaXNDb25uZWN0ZWQpIHtcbiAgICAgIHJlc3VsdC5wdXNoKHNsb3R0ZWROb2RlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5mdW5jdGlvbiBnZXRIb3N0U2xvdE5vZGVzKGNoaWxkTm9kZXMsIGhvc3ROYW1lLCBzbG90TmFtZSkge1xuICBsZXQgaTIgPSAwO1xuICBsZXQgc2xvdHRlZE5vZGVzID0gW107XG4gIGxldCBjaGlsZE5vZGU7XG4gIGZvciAoOyBpMiA8IGNoaWxkTm9kZXMubGVuZ3RoOyBpMisrKSB7XG4gICAgY2hpbGROb2RlID0gY2hpbGROb2Rlc1tpMl07XG4gICAgaWYgKGNoaWxkTm9kZVtcInMtc3JcIl0gJiYgKCFob3N0TmFtZSB8fCBjaGlsZE5vZGVbXCJzLWhuXCJdID09PSBob3N0TmFtZSkgJiYgKHNsb3ROYW1lID09PSB2b2lkIDAgfHwgZ2V0U2xvdE5hbWUoY2hpbGROb2RlKSA9PT0gc2xvdE5hbWUpKSB7XG4gICAgICBzbG90dGVkTm9kZXMucHVzaChjaGlsZE5vZGUpO1xuICAgICAgaWYgKHR5cGVvZiBzbG90TmFtZSAhPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIHNsb3R0ZWROb2RlcztcbiAgICB9XG4gICAgc2xvdHRlZE5vZGVzID0gWy4uLnNsb3R0ZWROb2RlcywgLi4uZ2V0SG9zdFNsb3ROb2RlcyhjaGlsZE5vZGUuY2hpbGROb2RlcywgaG9zdE5hbWUsIHNsb3ROYW1lKV07XG4gIH1cbiAgcmV0dXJuIHNsb3R0ZWROb2Rlcztcbn1cbnZhciBnZXRTbG90Q2hpbGRTaWJsaW5ncyA9IChzbG90LCBzbG90TmFtZSwgaW5jbHVkZVNsb3QgPSB0cnVlKSA9PiB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBbXTtcbiAgaWYgKGluY2x1ZGVTbG90ICYmIHNsb3RbXCJzLXNyXCJdIHx8ICFzbG90W1wicy1zclwiXSkgY2hpbGROb2Rlcy5wdXNoKHNsb3QpO1xuICBsZXQgbm9kZSA9IHNsb3Q7XG4gIHdoaWxlIChub2RlID0gbm9kZS5uZXh0U2libGluZykge1xuICAgIGlmIChnZXRTbG90TmFtZShub2RlKSA9PT0gc2xvdE5hbWUgJiYgKGluY2x1ZGVTbG90IHx8ICFub2RlW1wicy1zclwiXSkpIGNoaWxkTm9kZXMucHVzaChub2RlKTtcbiAgfVxuICByZXR1cm4gY2hpbGROb2Rlcztcbn07XG52YXIgaXNOb2RlTG9jYXRlZEluU2xvdCA9IChub2RlVG9SZWxvY2F0ZSwgc2xvdE5hbWUpID0+IHtcbiAgaWYgKG5vZGVUb1JlbG9jYXRlLm5vZGVUeXBlID09PSAxIC8qIEVsZW1lbnROb2RlICovKSB7XG4gICAgaWYgKG5vZGVUb1JlbG9jYXRlLmdldEF0dHJpYnV0ZShcInNsb3RcIikgPT09IG51bGwgJiYgc2xvdE5hbWUgPT09IFwiXCIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAobm9kZVRvUmVsb2NhdGUuZ2V0QXR0cmlidXRlKFwic2xvdFwiKSA9PT0gc2xvdE5hbWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKG5vZGVUb1JlbG9jYXRlW1wicy1zblwiXSA9PT0gc2xvdE5hbWUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gc2xvdE5hbWUgPT09IFwiXCI7XG59O1xudmFyIGFkZFNsb3RSZWxvY2F0ZU5vZGUgPSAobmV3Q2hpbGQsIHNsb3ROb2RlLCBwcmVwZW5kLCBwb3NpdGlvbikgPT4ge1xuICBpZiAobmV3Q2hpbGRbXCJzLW9sXCJdICYmIG5ld0NoaWxkW1wicy1vbFwiXS5pc0Nvbm5lY3RlZCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBzbG90dGVkTm9kZUxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIik7XG4gIHNsb3R0ZWROb2RlTG9jYXRpb25bXCJzLW5yXCJdID0gbmV3Q2hpbGQ7XG4gIGlmICghc2xvdE5vZGVbXCJzLWNyXCJdIHx8ICFzbG90Tm9kZVtcInMtY3JcIl0ucGFyZW50Tm9kZSkgcmV0dXJuO1xuICBjb25zdCBwYXJlbnQgPSBzbG90Tm9kZVtcInMtY3JcIl0ucGFyZW50Tm9kZTtcbiAgY29uc3QgYXBwZW5kTWV0aG9kID0gcHJlcGVuZCA/IGludGVybmFsQ2FsbChwYXJlbnQsIFwicHJlcGVuZFwiKSA6IGludGVybmFsQ2FsbChwYXJlbnQsIFwiYXBwZW5kQ2hpbGRcIik7XG4gIGlmIChCVUlMRDkuaHlkcmF0ZUNsaWVudFNpZGUgJiYgdHlwZW9mIHBvc2l0aW9uICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgc2xvdHRlZE5vZGVMb2NhdGlvbltcInMtb29cIl0gPSBwb3NpdGlvbjtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gaW50ZXJuYWxDYWxsKHBhcmVudCwgXCJjaGlsZE5vZGVzXCIpO1xuICAgIGNvbnN0IHNsb3RSZWxvY2F0ZU5vZGVzID0gW3Nsb3R0ZWROb2RlTG9jYXRpb25dO1xuICAgIGNoaWxkTm9kZXMuZm9yRWFjaChuID0+IHtcbiAgICAgIGlmIChuW1wicy1uclwiXSkgc2xvdFJlbG9jYXRlTm9kZXMucHVzaChuKTtcbiAgICB9KTtcbiAgICBzbG90UmVsb2NhdGVOb2Rlcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBpZiAoIWFbXCJzLW9vXCJdIHx8IGFbXCJzLW9vXCJdIDwgKGJbXCJzLW9vXCJdIHx8IDApKSByZXR1cm4gLTE7ZWxzZSBpZiAoIWJbXCJzLW9vXCJdIHx8IGJbXCJzLW9vXCJdIDwgYVtcInMtb29cIl0pIHJldHVybiAxO1xuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG4gICAgc2xvdFJlbG9jYXRlTm9kZXMuZm9yRWFjaChuID0+IGFwcGVuZE1ldGhvZC5jYWxsKHBhcmVudCwgbikpO1xuICB9IGVsc2Uge1xuICAgIGFwcGVuZE1ldGhvZC5jYWxsKHBhcmVudCwgc2xvdHRlZE5vZGVMb2NhdGlvbik7XG4gIH1cbiAgbmV3Q2hpbGRbXCJzLW9sXCJdID0gc2xvdHRlZE5vZGVMb2NhdGlvbjtcbiAgbmV3Q2hpbGRbXCJzLXNoXCJdID0gc2xvdE5vZGVbXCJzLWhuXCJdO1xufTtcbnZhciBnZXRTbG90TmFtZSA9IG5vZGUgPT4gdHlwZW9mIG5vZGVbXCJzLXNuXCJdID09PSBcInN0cmluZ1wiID8gbm9kZVtcInMtc25cIl0gOiBub2RlLm5vZGVUeXBlID09PSAxICYmIG5vZGUuZ2V0QXR0cmlidXRlKFwic2xvdFwiKSB8fCB2b2lkIDA7XG5mdW5jdGlvbiBwYXRjaFNsb3ROb2RlKG5vZGUpIHtcbiAgaWYgKG5vZGUuYXNzaWduZWRFbGVtZW50cyB8fCBub2RlLmFzc2lnbmVkTm9kZXMgfHwgIW5vZGVbXCJzLXNyXCJdKSByZXR1cm47XG4gIGNvbnN0IGFzc2lnbmVkRmFjdG9yeSA9IGVsZW1lbnRzT25seSA9PiBmdW5jdGlvbiAob3B0cykge1xuICAgIGNvbnN0IHRvUmV0dXJuID0gW107XG4gICAgY29uc3Qgc2xvdE5hbWUgPSB0aGlzW1wicy1zblwiXTtcbiAgICBpZiAob3B0cyA9PSBudWxsID8gdm9pZCAwIDogb3B0cy5mbGF0dGVuKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBcbiAgICAgICAgICBGbGF0dGVuaW5nIGlzIG5vdCBzdXBwb3J0ZWQgZm9yIFN0ZW5jaWwgbm9uLXNoYWRvdyBzbG90cy5cbiAgICAgICAgICBZb3UgY2FuIHVzZSBcXGAuY2hpbGROb2Rlc1xcYCB0byBuZXN0ZWQgc2xvdCBmYWxsYmFjayBjb250ZW50LlxuICAgICAgICAgIElmIHlvdSBoYXZlIGEgcGFydGljdWxhciB1c2UgY2FzZSwgcGxlYXNlIG9wZW4gYW4gaXNzdWUgb24gdGhlIFN0ZW5jaWwgcmVwby5cbiAgICAgICAgYCk7XG4gICAgfVxuICAgIGNvbnN0IHBhcmVudCA9IHRoaXNbXCJzLWNyXCJdLnBhcmVudEVsZW1lbnQ7XG4gICAgY29uc3Qgc2xvdHRlZE5vZGVzID0gcGFyZW50Ll9fY2hpbGROb2RlcyA/IHBhcmVudC5jaGlsZE5vZGVzIDogZ2V0U2xvdHRlZENoaWxkTm9kZXMocGFyZW50LmNoaWxkTm9kZXMpO1xuICAgIHNsb3R0ZWROb2Rlcy5mb3JFYWNoKG4gPT4ge1xuICAgICAgaWYgKHNsb3ROYW1lID09PSBnZXRTbG90TmFtZShuKSkge1xuICAgICAgICB0b1JldHVybi5wdXNoKG4pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChlbGVtZW50c09ubHkpIHtcbiAgICAgIHJldHVybiB0b1JldHVybi5maWx0ZXIobiA9PiBuLm5vZGVUeXBlID09PSAxIC8qIEVsZW1lbnROb2RlICovKTtcbiAgICB9XG4gICAgcmV0dXJuIHRvUmV0dXJuO1xuICB9LmJpbmQobm9kZSk7XG4gIG5vZGUuYXNzaWduZWRFbGVtZW50cyA9IGFzc2lnbmVkRmFjdG9yeSh0cnVlKTtcbiAgbm9kZS5hc3NpZ25lZE5vZGVzID0gYXNzaWduZWRGYWN0b3J5KGZhbHNlKTtcbn1cbmZ1bmN0aW9uIGRpc3BhdGNoU2xvdENoYW5nZUV2ZW50KGVsbSkge1xuICBlbG0uZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJzbG90Y2hhbmdlXCIsIHtcbiAgICBidWJibGVzOiBmYWxzZSxcbiAgICBjYW5jZWxhYmxlOiBmYWxzZSxcbiAgICBjb21wb3NlZDogZmFsc2VcbiAgfSkpO1xufVxuZnVuY3Rpb24gZmluZFNsb3RGcm9tU2xvdHRlZE5vZGUoc2xvdHRlZE5vZGUsIHBhcmVudEhvc3QpIHtcbiAgdmFyIF9hO1xuICBwYXJlbnRIb3N0ID0gcGFyZW50SG9zdCB8fCAoKF9hID0gc2xvdHRlZE5vZGVbXCJzLW9sXCJdKSA9PSBudWxsID8gdm9pZCAwIDogX2EucGFyZW50RWxlbWVudCk7XG4gIGlmICghcGFyZW50SG9zdCkgcmV0dXJuIHtcbiAgICBzbG90Tm9kZTogbnVsbCxcbiAgICBzbG90TmFtZTogXCJcIlxuICB9O1xuICBjb25zdCBzbG90TmFtZSA9IHNsb3R0ZWROb2RlW1wicy1zblwiXSA9IGdldFNsb3ROYW1lKHNsb3R0ZWROb2RlKSB8fCBcIlwiO1xuICBjb25zdCBjaGlsZE5vZGVzID0gaW50ZXJuYWxDYWxsKHBhcmVudEhvc3QsIFwiY2hpbGROb2Rlc1wiKTtcbiAgY29uc3Qgc2xvdE5vZGUgPSBnZXRIb3N0U2xvdE5vZGVzKGNoaWxkTm9kZXMsIHBhcmVudEhvc3QudGFnTmFtZSwgc2xvdE5hbWUpWzBdO1xuICByZXR1cm4ge1xuICAgIHNsb3ROb2RlLFxuICAgIHNsb3ROYW1lXG4gIH07XG59XG5cbi8vIHNyYy9ydW50aW1lL2RvbS1leHRyYXMudHNcbnZhciBwYXRjaFBzZXVkb1NoYWRvd0RvbSA9IGhvc3RFbGVtZW50UHJvdG90eXBlID0+IHtcbiAgcGF0Y2hDbG9uZU5vZGUoaG9zdEVsZW1lbnRQcm90b3R5cGUpO1xuICBwYXRjaFNsb3RBcHBlbmRDaGlsZChob3N0RWxlbWVudFByb3RvdHlwZSk7XG4gIHBhdGNoU2xvdEFwcGVuZChob3N0RWxlbWVudFByb3RvdHlwZSk7XG4gIHBhdGNoU2xvdFByZXBlbmQoaG9zdEVsZW1lbnRQcm90b3R5cGUpO1xuICBwYXRjaFNsb3RJbnNlcnRBZGphY2VudEVsZW1lbnQoaG9zdEVsZW1lbnRQcm90b3R5cGUpO1xuICBwYXRjaFNsb3RJbnNlcnRBZGphY2VudEhUTUwoaG9zdEVsZW1lbnRQcm90b3R5cGUpO1xuICBwYXRjaFNsb3RJbnNlcnRBZGphY2VudFRleHQoaG9zdEVsZW1lbnRQcm90b3R5cGUpO1xuICBwYXRjaEluc2VydEJlZm9yZShob3N0RWxlbWVudFByb3RvdHlwZSk7XG4gIHBhdGNoVGV4dENvbnRlbnQoaG9zdEVsZW1lbnRQcm90b3R5cGUpO1xuICBwYXRjaENoaWxkU2xvdE5vZGVzKGhvc3RFbGVtZW50UHJvdG90eXBlKTtcbiAgcGF0Y2hTbG90UmVtb3ZlQ2hpbGQoaG9zdEVsZW1lbnRQcm90b3R5cGUpO1xufTtcbnZhciBwYXRjaENsb25lTm9kZSA9IEhvc3RFbGVtZW50UHJvdG90eXBlID0+IHtcbiAgY29uc3Qgb3JnQ2xvbmVOb2RlID0gSG9zdEVsZW1lbnRQcm90b3R5cGUuY2xvbmVOb2RlO1xuICBIb3N0RWxlbWVudFByb3RvdHlwZS5jbG9uZU5vZGUgPSBmdW5jdGlvbiAoZGVlcCkge1xuICAgIGNvbnN0IHNyY05vZGUgPSB0aGlzO1xuICAgIGNvbnN0IGlzU2hhZG93RG9tID0gQlVJTEQxMC5zaGFkb3dEb20gPyBzcmNOb2RlLnNoYWRvd1Jvb3QgJiYgc3VwcG9ydHNTaGFkb3cgOiBmYWxzZTtcbiAgICBjb25zdCBjbG9uZWROb2RlID0gb3JnQ2xvbmVOb2RlLmNhbGwoc3JjTm9kZSwgaXNTaGFkb3dEb20gPyBkZWVwIDogZmFsc2UpO1xuICAgIGlmIChCVUlMRDEwLnNsb3QgJiYgIWlzU2hhZG93RG9tICYmIGRlZXApIHtcbiAgICAgIGxldCBpMiA9IDA7XG4gICAgICBsZXQgc2xvdHRlZCwgbm9uU3RlbmNpbE5vZGU7XG4gICAgICBjb25zdCBzdGVuY2lsUHJpdmF0ZXMgPSBbXCJzLWlkXCIsIFwicy1jclwiLCBcInMtbHJcIiwgXCJzLXJjXCIsIFwicy1zY1wiLCBcInMtcFwiLCBcInMtY25cIiwgXCJzLXNyXCIsIFwicy1zblwiLCBcInMtaG5cIiwgXCJzLW9sXCIsIFwicy1uclwiLCBcInMtc2lcIiwgXCJzLXJmXCIsIFwicy1zY3NcIl07XG4gICAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5fX2NoaWxkTm9kZXMgfHwgdGhpcy5jaGlsZE5vZGVzO1xuICAgICAgZm9yICg7IGkyIDwgY2hpbGROb2Rlcy5sZW5ndGg7IGkyKyspIHtcbiAgICAgICAgc2xvdHRlZCA9IGNoaWxkTm9kZXNbaTJdW1wicy1uclwiXTtcbiAgICAgICAgbm9uU3RlbmNpbE5vZGUgPSBzdGVuY2lsUHJpdmF0ZXMuZXZlcnkocHJpdmF0ZUZpZWxkID0+ICFjaGlsZE5vZGVzW2kyXVtwcml2YXRlRmllbGRdKTtcbiAgICAgICAgaWYgKHNsb3R0ZWQpIHtcbiAgICAgICAgICBpZiAoQlVJTEQxMC5hcHBlbmRDaGlsZFNsb3RGaXggJiYgY2xvbmVkTm9kZS5fX2FwcGVuZENoaWxkKSB7XG4gICAgICAgICAgICBjbG9uZWROb2RlLl9fYXBwZW5kQ2hpbGQoc2xvdHRlZC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjbG9uZWROb2RlLmFwcGVuZENoaWxkKHNsb3R0ZWQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vblN0ZW5jaWxOb2RlKSB7XG4gICAgICAgICAgY2xvbmVkTm9kZS5hcHBlbmRDaGlsZChjaGlsZE5vZGVzW2kyXS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjbG9uZWROb2RlO1xuICB9O1xufTtcbnZhciBwYXRjaFNsb3RBcHBlbmRDaGlsZCA9IEhvc3RFbGVtZW50UHJvdG90eXBlID0+IHtcbiAgSG9zdEVsZW1lbnRQcm90b3R5cGUuX19hcHBlbmRDaGlsZCA9IEhvc3RFbGVtZW50UHJvdG90eXBlLmFwcGVuZENoaWxkO1xuICBIb3N0RWxlbWVudFByb3RvdHlwZS5hcHBlbmRDaGlsZCA9IGZ1bmN0aW9uIChuZXdDaGlsZCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHNsb3ROYW1lLFxuICAgICAgc2xvdE5vZGVcbiAgICB9ID0gZmluZFNsb3RGcm9tU2xvdHRlZE5vZGUobmV3Q2hpbGQsIHRoaXMpO1xuICAgIGlmIChzbG90Tm9kZSkge1xuICAgICAgYWRkU2xvdFJlbG9jYXRlTm9kZShuZXdDaGlsZCwgc2xvdE5vZGUpO1xuICAgICAgY29uc3Qgc2xvdENoaWxkTm9kZXMgPSBnZXRTbG90Q2hpbGRTaWJsaW5ncyhzbG90Tm9kZSwgc2xvdE5hbWUpO1xuICAgICAgY29uc3QgYXBwZW5kQWZ0ZXIgPSBzbG90Q2hpbGROb2Rlc1tzbG90Q2hpbGROb2Rlcy5sZW5ndGggLSAxXTtcbiAgICAgIGNvbnN0IHBhcmVudCA9IGludGVybmFsQ2FsbChhcHBlbmRBZnRlciwgXCJwYXJlbnROb2RlXCIpO1xuICAgICAgY29uc3QgaW5zZXJ0ZWROb2RlID0gaW50ZXJuYWxDYWxsKHBhcmVudCwgXCJpbnNlcnRCZWZvcmVcIikobmV3Q2hpbGQsIGFwcGVuZEFmdGVyLm5leHRTaWJsaW5nKTtcbiAgICAgIGRpc3BhdGNoU2xvdENoYW5nZUV2ZW50KHNsb3ROb2RlKTtcbiAgICAgIHVwZGF0ZUZhbGxiYWNrU2xvdFZpc2liaWxpdHkodGhpcyk7XG4gICAgICByZXR1cm4gaW5zZXJ0ZWROb2RlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fX2FwcGVuZENoaWxkKG5ld0NoaWxkKTtcbiAgfTtcbn07XG52YXIgcGF0Y2hTbG90UmVtb3ZlQ2hpbGQgPSBFbGVtZW50UHJvdG90eXBlID0+IHtcbiAgRWxlbWVudFByb3RvdHlwZS5fX3JlbW92ZUNoaWxkID0gRWxlbWVudFByb3RvdHlwZS5yZW1vdmVDaGlsZDtcbiAgRWxlbWVudFByb3RvdHlwZS5yZW1vdmVDaGlsZCA9IGZ1bmN0aW9uICh0b1JlbW92ZSkge1xuICAgIGlmICh0b1JlbW92ZSAmJiB0eXBlb2YgdG9SZW1vdmVbXCJzLXNuXCJdICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5fX2NoaWxkTm9kZXMgfHwgdGhpcy5jaGlsZE5vZGVzO1xuICAgICAgY29uc3Qgc2xvdE5vZGUgPSBnZXRIb3N0U2xvdE5vZGVzKGNoaWxkTm9kZXMsIHRoaXMudGFnTmFtZSwgdG9SZW1vdmVbXCJzLXNuXCJdKTtcbiAgICAgIGlmIChzbG90Tm9kZSAmJiB0b1JlbW92ZS5pc0Nvbm5lY3RlZCkge1xuICAgICAgICB0b1JlbW92ZS5yZW1vdmUoKTtcbiAgICAgICAgdXBkYXRlRmFsbGJhY2tTbG90VmlzaWJpbGl0eSh0aGlzKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fX3JlbW92ZUNoaWxkKHRvUmVtb3ZlKTtcbiAgfTtcbn07XG52YXIgcGF0Y2hTbG90UHJlcGVuZCA9IEhvc3RFbGVtZW50UHJvdG90eXBlID0+IHtcbiAgSG9zdEVsZW1lbnRQcm90b3R5cGUuX19wcmVwZW5kID0gSG9zdEVsZW1lbnRQcm90b3R5cGUucHJlcGVuZDtcbiAgSG9zdEVsZW1lbnRQcm90b3R5cGUucHJlcGVuZCA9IGZ1bmN0aW9uICguLi5uZXdDaGlsZHJlbikge1xuICAgIG5ld0NoaWxkcmVuLmZvckVhY2gobmV3Q2hpbGQgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBuZXdDaGlsZCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBuZXdDaGlsZCA9IHRoaXMub3duZXJEb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuZXdDaGlsZCk7XG4gICAgICB9XG4gICAgICBjb25zdCBzbG90TmFtZSA9IChuZXdDaGlsZFtcInMtc25cIl0gPSBnZXRTbG90TmFtZShuZXdDaGlsZCkpIHx8IFwiXCI7XG4gICAgICBjb25zdCBjaGlsZE5vZGVzID0gaW50ZXJuYWxDYWxsKHRoaXMsIFwiY2hpbGROb2Rlc1wiKTtcbiAgICAgIGNvbnN0IHNsb3ROb2RlID0gZ2V0SG9zdFNsb3ROb2RlcyhjaGlsZE5vZGVzLCB0aGlzLnRhZ05hbWUsIHNsb3ROYW1lKVswXTtcbiAgICAgIGlmIChzbG90Tm9kZSkge1xuICAgICAgICBhZGRTbG90UmVsb2NhdGVOb2RlKG5ld0NoaWxkLCBzbG90Tm9kZSwgdHJ1ZSk7XG4gICAgICAgIGNvbnN0IHNsb3RDaGlsZE5vZGVzID0gZ2V0U2xvdENoaWxkU2libGluZ3Moc2xvdE5vZGUsIHNsb3ROYW1lKTtcbiAgICAgICAgY29uc3QgYXBwZW5kQWZ0ZXIgPSBzbG90Q2hpbGROb2Rlc1swXTtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gaW50ZXJuYWxDYWxsKGFwcGVuZEFmdGVyLCBcInBhcmVudE5vZGVcIik7XG4gICAgICAgIGNvbnN0IHRvUmV0dXJuID0gaW50ZXJuYWxDYWxsKHBhcmVudCwgXCJpbnNlcnRCZWZvcmVcIikobmV3Q2hpbGQsIGludGVybmFsQ2FsbChhcHBlbmRBZnRlciwgXCJuZXh0U2libGluZ1wiKSk7XG4gICAgICAgIGRpc3BhdGNoU2xvdENoYW5nZUV2ZW50KHNsb3ROb2RlKTtcbiAgICAgICAgcmV0dXJuIHRvUmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG5ld0NoaWxkLm5vZGVUeXBlID09PSAxICYmICEhbmV3Q2hpbGQuZ2V0QXR0cmlidXRlKFwic2xvdFwiKSkge1xuICAgICAgICBuZXdDaGlsZC5oaWRkZW4gPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIEhvc3RFbGVtZW50UHJvdG90eXBlLl9fcHJlcGVuZChuZXdDaGlsZCk7XG4gICAgfSk7XG4gIH07XG59O1xudmFyIHBhdGNoU2xvdEFwcGVuZCA9IEhvc3RFbGVtZW50UHJvdG90eXBlID0+IHtcbiAgSG9zdEVsZW1lbnRQcm90b3R5cGUuX19hcHBlbmQgPSBIb3N0RWxlbWVudFByb3RvdHlwZS5hcHBlbmQ7XG4gIEhvc3RFbGVtZW50UHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uICguLi5uZXdDaGlsZHJlbikge1xuICAgIG5ld0NoaWxkcmVuLmZvckVhY2gobmV3Q2hpbGQgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBuZXdDaGlsZCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBuZXdDaGlsZCA9IHRoaXMub3duZXJEb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuZXdDaGlsZCk7XG4gICAgICB9XG4gICAgICB0aGlzLmFwcGVuZENoaWxkKG5ld0NoaWxkKTtcbiAgICB9KTtcbiAgfTtcbn07XG52YXIgcGF0Y2hTbG90SW5zZXJ0QWRqYWNlbnRIVE1MID0gSG9zdEVsZW1lbnRQcm90b3R5cGUgPT4ge1xuICBjb25zdCBvcmlnaW5hbEluc2VydEFkamFjZW50SHRtbCA9IEhvc3RFbGVtZW50UHJvdG90eXBlLmluc2VydEFkamFjZW50SFRNTDtcbiAgSG9zdEVsZW1lbnRQcm90b3R5cGUuaW5zZXJ0QWRqYWNlbnRIVE1MID0gZnVuY3Rpb24gKHBvc2l0aW9uLCB0ZXh0KSB7XG4gICAgaWYgKHBvc2l0aW9uICE9PSBcImFmdGVyYmVnaW5cIiAmJiBwb3NpdGlvbiAhPT0gXCJiZWZvcmVlbmRcIikge1xuICAgICAgcmV0dXJuIG9yaWdpbmFsSW5zZXJ0QWRqYWNlbnRIdG1sLmNhbGwodGhpcywgcG9zaXRpb24sIHRleHQpO1xuICAgIH1cbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIl9cIik7XG4gICAgbGV0IG5vZGU7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IHRleHQ7XG4gICAgaWYgKHBvc2l0aW9uID09PSBcImFmdGVyYmVnaW5cIikge1xuICAgICAgd2hpbGUgKG5vZGUgPSBjb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICB0aGlzLnByZXBlbmQobm9kZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChwb3NpdGlvbiA9PT0gXCJiZWZvcmVlbmRcIikge1xuICAgICAgd2hpbGUgKG5vZGUgPSBjb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICB0aGlzLmFwcGVuZChub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xudmFyIHBhdGNoU2xvdEluc2VydEFkamFjZW50VGV4dCA9IEhvc3RFbGVtZW50UHJvdG90eXBlID0+IHtcbiAgSG9zdEVsZW1lbnRQcm90b3R5cGUuaW5zZXJ0QWRqYWNlbnRUZXh0ID0gZnVuY3Rpb24gKHBvc2l0aW9uLCB0ZXh0KSB7XG4gICAgdGhpcy5pbnNlcnRBZGphY2VudEhUTUwocG9zaXRpb24sIHRleHQpO1xuICB9O1xufTtcbnZhciBwYXRjaEluc2VydEJlZm9yZSA9IEhvc3RFbGVtZW50UHJvdG90eXBlID0+IHtcbiAgY29uc3QgZWxlUHJvdG8gPSBIb3N0RWxlbWVudFByb3RvdHlwZTtcbiAgaWYgKGVsZVByb3RvLl9faW5zZXJ0QmVmb3JlKSByZXR1cm47XG4gIGVsZVByb3RvLl9faW5zZXJ0QmVmb3JlID0gSG9zdEVsZW1lbnRQcm90b3R5cGUuaW5zZXJ0QmVmb3JlO1xuICBIb3N0RWxlbWVudFByb3RvdHlwZS5pbnNlcnRCZWZvcmUgPSBmdW5jdGlvbiAobmV3Q2hpbGQsIGN1cnJlbnRDaGlsZCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHNsb3ROYW1lLFxuICAgICAgc2xvdE5vZGVcbiAgICB9ID0gZmluZFNsb3RGcm9tU2xvdHRlZE5vZGUobmV3Q2hpbGQsIHRoaXMpO1xuICAgIGNvbnN0IHNsb3R0ZWROb2RlcyA9IHRoaXMuX19jaGlsZE5vZGVzID8gdGhpcy5jaGlsZE5vZGVzIDogZ2V0U2xvdHRlZENoaWxkTm9kZXModGhpcy5jaGlsZE5vZGVzKTtcbiAgICBpZiAoc2xvdE5vZGUpIHtcbiAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgICAgc2xvdHRlZE5vZGVzLmZvckVhY2goY2hpbGROb2RlID0+IHtcbiAgICAgICAgaWYgKGNoaWxkTm9kZSA9PT0gY3VycmVudENoaWxkIHx8IGN1cnJlbnRDaGlsZCA9PT0gbnVsbCkge1xuICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICBpZiAoY3VycmVudENoaWxkID09PSBudWxsIHx8IHNsb3ROYW1lICE9PSBjdXJyZW50Q2hpbGRbXCJzLXNuXCJdKSB7XG4gICAgICAgICAgICB0aGlzLmFwcGVuZENoaWxkKG5ld0NoaWxkKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHNsb3ROYW1lID09PSBjdXJyZW50Q2hpbGRbXCJzLXNuXCJdKSB7XG4gICAgICAgICAgICBhZGRTbG90UmVsb2NhdGVOb2RlKG5ld0NoaWxkLCBzbG90Tm9kZSk7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBpbnRlcm5hbENhbGwoY3VycmVudENoaWxkLCBcInBhcmVudE5vZGVcIik7XG4gICAgICAgICAgICBpbnRlcm5hbENhbGwocGFyZW50LCBcImluc2VydEJlZm9yZVwiKShuZXdDaGlsZCwgY3VycmVudENoaWxkKTtcbiAgICAgICAgICAgIGRpc3BhdGNoU2xvdENoYW5nZUV2ZW50KHNsb3ROb2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChmb3VuZCkgcmV0dXJuIG5ld0NoaWxkO1xuICAgIH1cbiAgICBjb25zdCBwYXJlbnROb2RlID0gY3VycmVudENoaWxkID09IG51bGwgPyB2b2lkIDAgOiBjdXJyZW50Q2hpbGQuX19wYXJlbnROb2RlO1xuICAgIGlmIChwYXJlbnROb2RlICYmICF0aGlzLmlzU2FtZU5vZGUocGFyZW50Tm9kZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLmFwcGVuZENoaWxkKG5ld0NoaWxkKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX19pbnNlcnRCZWZvcmUobmV3Q2hpbGQsIGN1cnJlbnRDaGlsZCk7XG4gIH07XG59O1xudmFyIHBhdGNoU2xvdEluc2VydEFkamFjZW50RWxlbWVudCA9IEhvc3RFbGVtZW50UHJvdG90eXBlID0+IHtcbiAgY29uc3Qgb3JpZ2luYWxJbnNlcnRBZGphY2VudEVsZW1lbnQgPSBIb3N0RWxlbWVudFByb3RvdHlwZS5pbnNlcnRBZGphY2VudEVsZW1lbnQ7XG4gIEhvc3RFbGVtZW50UHJvdG90eXBlLmluc2VydEFkamFjZW50RWxlbWVudCA9IGZ1bmN0aW9uIChwb3NpdGlvbiwgZWxlbWVudCkge1xuICAgIGlmIChwb3NpdGlvbiAhPT0gXCJhZnRlcmJlZ2luXCIgJiYgcG9zaXRpb24gIT09IFwiYmVmb3JlZW5kXCIpIHtcbiAgICAgIHJldHVybiBvcmlnaW5hbEluc2VydEFkamFjZW50RWxlbWVudC5jYWxsKHRoaXMsIHBvc2l0aW9uLCBlbGVtZW50KTtcbiAgICB9XG4gICAgaWYgKHBvc2l0aW9uID09PSBcImFmdGVyYmVnaW5cIikge1xuICAgICAgdGhpcy5wcmVwZW5kKGVsZW1lbnQpO1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfSBlbHNlIGlmIChwb3NpdGlvbiA9PT0gXCJiZWZvcmVlbmRcIikge1xuICAgICAgdGhpcy5hcHBlbmQoZWxlbWVudCk7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH07XG59O1xudmFyIHBhdGNoVGV4dENvbnRlbnQgPSBob3N0RWxlbWVudFByb3RvdHlwZSA9PiB7XG4gIHBhdGNoSG9zdE9yaWdpbmFsQWNjZXNzb3IoXCJ0ZXh0Q29udGVudFwiLCBob3N0RWxlbWVudFByb3RvdHlwZSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShob3N0RWxlbWVudFByb3RvdHlwZSwgXCJ0ZXh0Q29udGVudFwiLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgdGV4dCA9IFwiXCI7XG4gICAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5fX2NoaWxkTm9kZXMgPyB0aGlzLmNoaWxkTm9kZXMgOiBnZXRTbG90dGVkQ2hpbGROb2Rlcyh0aGlzLmNoaWxkTm9kZXMpO1xuICAgICAgY2hpbGROb2Rlcy5mb3JFYWNoKG5vZGUgPT4gdGV4dCArPSBub2RlLnRleHRDb250ZW50IHx8IFwiXCIpO1xuICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuX19jaGlsZE5vZGVzID8gdGhpcy5jaGlsZE5vZGVzIDogZ2V0U2xvdHRlZENoaWxkTm9kZXModGhpcy5jaGlsZE5vZGVzKTtcbiAgICAgIGNoaWxkTm9kZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgaWYgKG5vZGVbXCJzLW9sXCJdKSBub2RlW1wicy1vbFwiXS5yZW1vdmUoKTtcbiAgICAgICAgbm9kZS5yZW1vdmUoKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgdmFsdWUpO1xuICAgIH1cbiAgfSk7XG59O1xudmFyIHBhdGNoQ2hpbGRTbG90Tm9kZXMgPSBlbG0gPT4ge1xuICBjbGFzcyBGYWtlTm9kZUxpc3QgZXh0ZW5kcyBBcnJheSB7XG4gICAgaXRlbShuKSB7XG4gICAgICByZXR1cm4gdGhpc1tuXTtcbiAgICB9XG4gIH1cbiAgcGF0Y2hIb3N0T3JpZ2luYWxBY2Nlc3NvcihcImNoaWxkcmVuXCIsIGVsbSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbG0sIFwiY2hpbGRyZW5cIiwge1xuICAgIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXMuZmlsdGVyKG4gPT4gbi5ub2RlVHlwZSA9PT0gMSk7XG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsbSwgXCJjaGlsZEVsZW1lbnRDb3VudFwiLCB7XG4gICAgZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4ubGVuZ3RoO1xuICAgIH1cbiAgfSk7XG4gIHBhdGNoSG9zdE9yaWdpbmFsQWNjZXNzb3IoXCJmaXJzdENoaWxkXCIsIGVsbSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbG0sIFwiZmlyc3RDaGlsZFwiLCB7XG4gICAgZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuY2hpbGROb2Rlc1swXTtcbiAgICB9XG4gIH0pO1xuICBwYXRjaEhvc3RPcmlnaW5hbEFjY2Vzc29yKFwibGFzdENoaWxkXCIsIGVsbSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbG0sIFwibGFzdENoaWxkXCIsIHtcbiAgICBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzW3RoaXMuY2hpbGROb2Rlcy5sZW5ndGggLSAxXTtcbiAgICB9XG4gIH0pO1xuICBwYXRjaEhvc3RPcmlnaW5hbEFjY2Vzc29yKFwiY2hpbGROb2Rlc1wiLCBlbG0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxtLCBcImNoaWxkTm9kZXNcIiwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBGYWtlTm9kZUxpc3QoKTtcbiAgICAgIHJlc3VsdC5wdXNoKC4uLmdldFNsb3R0ZWRDaGlsZE5vZGVzKHRoaXMuX19jaGlsZE5vZGVzKSk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgfSk7XG59O1xudmFyIHBhdGNoU2xvdHRlZE5vZGUgPSBub2RlID0+IHtcbiAgaWYgKCFub2RlIHx8IG5vZGUuX19uZXh0U2libGluZyAhPT0gdm9pZCAwIHx8ICFnbG9iYWxUaGlzLk5vZGUpIHJldHVybjtcbiAgcGF0Y2hOZXh0U2libGluZyhub2RlKTtcbiAgcGF0Y2hQcmV2aW91c1NpYmxpbmcobm9kZSk7XG4gIHBhdGNoUGFyZW50Tm9kZShub2RlKTtcbiAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgcGF0Y2hOZXh0RWxlbWVudFNpYmxpbmcobm9kZSk7XG4gICAgcGF0Y2hQcmV2aW91c0VsZW1lbnRTaWJsaW5nKG5vZGUpO1xuICB9XG59O1xudmFyIHBhdGNoTmV4dFNpYmxpbmcgPSBub2RlID0+IHtcbiAgaWYgKCFub2RlIHx8IG5vZGUuX19uZXh0U2libGluZykgcmV0dXJuO1xuICBwYXRjaEhvc3RPcmlnaW5hbEFjY2Vzc29yKFwibmV4dFNpYmxpbmdcIiwgbm9kZSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShub2RlLCBcIm5leHRTaWJsaW5nXCIsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfYTtcbiAgICAgIGNvbnN0IHBhcmVudE5vZGVzID0gKF9hID0gdGhpc1tcInMtb2xcIl0pID09IG51bGwgPyB2b2lkIDAgOiBfYS5wYXJlbnROb2RlLmNoaWxkTm9kZXM7XG4gICAgICBjb25zdCBpbmRleCA9IHBhcmVudE5vZGVzID09IG51bGwgPyB2b2lkIDAgOiBwYXJlbnROb2Rlcy5pbmRleE9mKHRoaXMpO1xuICAgICAgaWYgKHBhcmVudE5vZGVzICYmIGluZGV4ID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudE5vZGVzW2luZGV4ICsgMV07XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5fX25leHRTaWJsaW5nO1xuICAgIH1cbiAgfSk7XG59O1xudmFyIHBhdGNoTmV4dEVsZW1lbnRTaWJsaW5nID0gZWxlbWVudCA9PiB7XG4gIGlmICghZWxlbWVudCB8fCBlbGVtZW50Ll9fbmV4dEVsZW1lbnRTaWJsaW5nKSByZXR1cm47XG4gIHBhdGNoSG9zdE9yaWdpbmFsQWNjZXNzb3IoXCJuZXh0RWxlbWVudFNpYmxpbmdcIiwgZWxlbWVudCk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCBcIm5leHRFbGVtZW50U2libGluZ1wiLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX2E7XG4gICAgICBjb25zdCBwYXJlbnRFbGVzID0gKF9hID0gdGhpc1tcInMtb2xcIl0pID09IG51bGwgPyB2b2lkIDAgOiBfYS5wYXJlbnROb2RlLmNoaWxkcmVuO1xuICAgICAgY29uc3QgaW5kZXggPSBwYXJlbnRFbGVzID09IG51bGwgPyB2b2lkIDAgOiBwYXJlbnRFbGVzLmluZGV4T2YodGhpcyk7XG4gICAgICBpZiAocGFyZW50RWxlcyAmJiBpbmRleCA+IC0xKSB7XG4gICAgICAgIHJldHVybiBwYXJlbnRFbGVzW2luZGV4ICsgMV07XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5fX25leHRFbGVtZW50U2libGluZztcbiAgICB9XG4gIH0pO1xufTtcbnZhciBwYXRjaFByZXZpb3VzU2libGluZyA9IG5vZGUgPT4ge1xuICBpZiAoIW5vZGUgfHwgbm9kZS5fX3ByZXZpb3VzU2libGluZykgcmV0dXJuO1xuICBwYXRjaEhvc3RPcmlnaW5hbEFjY2Vzc29yKFwicHJldmlvdXNTaWJsaW5nXCIsIG5vZGUpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkobm9kZSwgXCJwcmV2aW91c1NpYmxpbmdcIiwge1xuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9hO1xuICAgICAgY29uc3QgcGFyZW50Tm9kZXMgPSAoX2EgPSB0aGlzW1wicy1vbFwiXSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLnBhcmVudE5vZGUuY2hpbGROb2RlcztcbiAgICAgIGNvbnN0IGluZGV4ID0gcGFyZW50Tm9kZXMgPT0gbnVsbCA/IHZvaWQgMCA6IHBhcmVudE5vZGVzLmluZGV4T2YodGhpcyk7XG4gICAgICBpZiAocGFyZW50Tm9kZXMgJiYgaW5kZXggPiAtMSkge1xuICAgICAgICByZXR1cm4gcGFyZW50Tm9kZXNbaW5kZXggLSAxXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLl9fcHJldmlvdXNTaWJsaW5nO1xuICAgIH1cbiAgfSk7XG59O1xudmFyIHBhdGNoUHJldmlvdXNFbGVtZW50U2libGluZyA9IGVsZW1lbnQgPT4ge1xuICBpZiAoIWVsZW1lbnQgfHwgZWxlbWVudC5fX3ByZXZpb3VzRWxlbWVudFNpYmxpbmcpIHJldHVybjtcbiAgcGF0Y2hIb3N0T3JpZ2luYWxBY2Nlc3NvcihcInByZXZpb3VzRWxlbWVudFNpYmxpbmdcIiwgZWxlbWVudCk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCBcInByZXZpb3VzRWxlbWVudFNpYmxpbmdcIiwge1xuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9hO1xuICAgICAgY29uc3QgcGFyZW50Tm9kZXMgPSAoX2EgPSB0aGlzW1wicy1vbFwiXSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLnBhcmVudE5vZGUuY2hpbGRyZW47XG4gICAgICBjb25zdCBpbmRleCA9IHBhcmVudE5vZGVzID09IG51bGwgPyB2b2lkIDAgOiBwYXJlbnROb2Rlcy5pbmRleE9mKHRoaXMpO1xuICAgICAgaWYgKHBhcmVudE5vZGVzICYmIGluZGV4ID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudE5vZGVzW2luZGV4IC0gMV07XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5fX3ByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgfVxuICB9KTtcbn07XG52YXIgcGF0Y2hQYXJlbnROb2RlID0gbm9kZSA9PiB7XG4gIGlmICghbm9kZSB8fCBub2RlLl9fcGFyZW50Tm9kZSkgcmV0dXJuO1xuICBwYXRjaEhvc3RPcmlnaW5hbEFjY2Vzc29yKFwicGFyZW50Tm9kZVwiLCBub2RlKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5vZGUsIFwicGFyZW50Tm9kZVwiLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX2E7XG4gICAgICByZXR1cm4gKChfYSA9IHRoaXNbXCJzLW9sXCJdKSA9PSBudWxsID8gdm9pZCAwIDogX2EucGFyZW50Tm9kZSkgfHwgdGhpcy5fX3BhcmVudE5vZGU7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgdGhpcy5fX3BhcmVudE5vZGUgPSB2YWx1ZTtcbiAgICB9XG4gIH0pO1xufTtcbnZhciB2YWxpZEVsZW1lbnRQYXRjaGVzID0gW1wiY2hpbGRyZW5cIiwgXCJuZXh0RWxlbWVudFNpYmxpbmdcIiwgXCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nXCJdO1xudmFyIHZhbGlkTm9kZXNQYXRjaGVzID0gW1wiY2hpbGROb2Rlc1wiLCBcImZpcnN0Q2hpbGRcIiwgXCJsYXN0Q2hpbGRcIiwgXCJuZXh0U2libGluZ1wiLCBcInByZXZpb3VzU2libGluZ1wiLCBcInRleHRDb250ZW50XCIsIFwicGFyZW50Tm9kZVwiXTtcbmZ1bmN0aW9uIHBhdGNoSG9zdE9yaWdpbmFsQWNjZXNzb3IoYWNjZXNzb3JOYW1lLCBub2RlKSB7XG4gIGlmICghZ2xvYmFsVGhpcy5Ob2RlIHx8ICFnbG9iYWxUaGlzLkVsZW1lbnQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgbGV0IGFjY2Vzc29yO1xuICBpZiAodmFsaWRFbGVtZW50UGF0Y2hlcy5pbmNsdWRlcyhhY2Nlc3Nvck5hbWUpKSB7XG4gICAgYWNjZXNzb3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEVsZW1lbnQucHJvdG90eXBlLCBhY2Nlc3Nvck5hbWUpO1xuICB9IGVsc2UgaWYgKHZhbGlkTm9kZXNQYXRjaGVzLmluY2x1ZGVzKGFjY2Vzc29yTmFtZSkpIHtcbiAgICBhY2Nlc3NvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTm9kZS5wcm90b3R5cGUsIGFjY2Vzc29yTmFtZSk7XG4gIH1cbiAgaWYgKCFhY2Nlc3Nvcikge1xuICAgIGFjY2Vzc29yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihub2RlLCBhY2Nlc3Nvck5hbWUpO1xuICB9XG4gIGlmIChhY2Nlc3NvcikgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5vZGUsIFwiX19cIiArIGFjY2Vzc29yTmFtZSwgYWNjZXNzb3IpO1xufVxuZnVuY3Rpb24gaW50ZXJuYWxDYWxsKG5vZGUsIG1ldGhvZCkge1xuICBpZiAoXCJfX1wiICsgbWV0aG9kIGluIG5vZGUpIHtcbiAgICBjb25zdCB0b1JldHVybiA9IG5vZGVbXCJfX1wiICsgbWV0aG9kXTtcbiAgICBpZiAodHlwZW9mIHRvUmV0dXJuICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0b1JldHVybjtcbiAgICByZXR1cm4gdG9SZXR1cm4uYmluZChub2RlKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAodHlwZW9mIG5vZGVbbWV0aG9kXSAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbm9kZVttZXRob2RdO1xuICAgIHJldHVybiBub2RlW21ldGhvZF0uYmluZChub2RlKTtcbiAgfVxufVxuXG4vLyBzcmMvcnVudGltZS9wcm9maWxlLnRzXG5pbXBvcnQgeyBCVUlMRCBhcyBCVUlMRDExIH0gZnJvbSBcIkBzdGVuY2lsL2NvcmUvaW50ZXJuYWwvYXBwLWRhdGFcIjtcbnZhciBpID0gMDtcbnZhciBjcmVhdGVUaW1lID0gKGZuTmFtZSwgdGFnTmFtZSA9IFwiXCIpID0+IHtcbiAgaWYgKEJVSUxEMTEucHJvZmlsZSAmJiBwZXJmb3JtYW5jZS5tYXJrKSB7XG4gICAgY29uc3Qga2V5ID0gYHN0OiR7Zm5OYW1lfToke3RhZ05hbWV9OiR7aSsrfWA7XG4gICAgcGVyZm9ybWFuY2UubWFyayhrZXkpO1xuICAgIHJldHVybiAoKSA9PiBwZXJmb3JtYW5jZS5tZWFzdXJlKGBbU3RlbmNpbF0gJHtmbk5hbWV9KCkgPCR7dGFnTmFtZX0+YCwga2V5KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgcmV0dXJuO1xuICAgIH07XG4gIH1cbn07XG52YXIgdW5pcXVlVGltZSA9IChrZXksIG1lYXN1cmVUZXh0KSA9PiB7XG4gIGlmIChCVUlMRDExLnByb2ZpbGUgJiYgcGVyZm9ybWFuY2UubWFyaykge1xuICAgIGlmIChwZXJmb3JtYW5jZS5nZXRFbnRyaWVzQnlOYW1lKGtleSwgXCJtYXJrXCIpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyayhrZXkpO1xuICAgIH1cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKHBlcmZvcm1hbmNlLmdldEVudHJpZXNCeU5hbWUobWVhc3VyZVRleHQsIFwibWVhc3VyZVwiKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcGVyZm9ybWFuY2UubWVhc3VyZShtZWFzdXJlVGV4dCwga2V5KTtcbiAgICAgIH1cbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICByZXR1cm47XG4gICAgfTtcbiAgfVxufTtcbnZhciBpbnNwZWN0ID0gcmVmID0+IHtcbiAgY29uc3QgaG9zdFJlZiA9IGdldEhvc3RSZWYocmVmKTtcbiAgaWYgKCFob3N0UmVmKSB7XG4gICAgcmV0dXJuIHZvaWQgMDtcbiAgfVxuICBjb25zdCBmbGFncyA9IGhvc3RSZWYuJGZsYWdzJDtcbiAgY29uc3QgaG9zdEVsZW1lbnQgPSBob3N0UmVmLiRob3N0RWxlbWVudCQ7XG4gIHJldHVybiB7XG4gICAgcmVuZGVyQ291bnQ6IGhvc3RSZWYuJHJlbmRlckNvdW50JCxcbiAgICBmbGFnczoge1xuICAgICAgaGFzUmVuZGVyZWQ6ICEhKGZsYWdzICYgMiAvKiBoYXNSZW5kZXJlZCAqLyksXG4gICAgICBoYXNDb25uZWN0ZWQ6ICEhKGZsYWdzICYgMSAvKiBoYXNDb25uZWN0ZWQgKi8pLFxuICAgICAgaXNXYWl0aW5nRm9yQ2hpbGRyZW46ICEhKGZsYWdzICYgNCAvKiBpc1dhaXRpbmdGb3JDaGlsZHJlbiAqLyksXG4gICAgICBpc0NvbnN0cnVjdGluZ0luc3RhbmNlOiAhIShmbGFncyAmIDggLyogaXNDb25zdHJ1Y3RpbmdJbnN0YW5jZSAqLyksXG4gICAgICBpc1F1ZXVlZEZvclVwZGF0ZTogISEoZmxhZ3MgJiAxNiAvKiBpc1F1ZXVlZEZvclVwZGF0ZSAqLyksXG4gICAgICBoYXNJbml0aWFsaXplZENvbXBvbmVudDogISEoZmxhZ3MgJiAzMiAvKiBoYXNJbml0aWFsaXplZENvbXBvbmVudCAqLyksXG4gICAgICBoYXNMb2FkZWRDb21wb25lbnQ6ICEhKGZsYWdzICYgNjQgLyogaGFzTG9hZGVkQ29tcG9uZW50ICovKSxcbiAgICAgIGlzV2F0Y2hSZWFkeTogISEoZmxhZ3MgJiAxMjggLyogaXNXYXRjaFJlYWR5ICovKSxcbiAgICAgIGlzTGlzdGVuUmVhZHk6ICEhKGZsYWdzICYgMjU2IC8qIGlzTGlzdGVuUmVhZHkgKi8pLFxuICAgICAgbmVlZHNSZXJlbmRlcjogISEoZmxhZ3MgJiA1MTIgLyogbmVlZHNSZXJlbmRlciAqLylcbiAgICB9LFxuICAgIGluc3RhbmNlVmFsdWVzOiBob3N0UmVmLiRpbnN0YW5jZVZhbHVlcyQsXG4gICAgYW5jZXN0b3JDb21wb25lbnQ6IGhvc3RSZWYuJGFuY2VzdG9yQ29tcG9uZW50JCxcbiAgICBob3N0RWxlbWVudCxcbiAgICBsYXp5SW5zdGFuY2U6IGhvc3RSZWYuJGxhenlJbnN0YW5jZSQsXG4gICAgdm5vZGU6IGhvc3RSZWYuJHZub2RlJCxcbiAgICBtb2RlTmFtZTogaG9zdFJlZi4kbW9kZU5hbWUkLFxuICAgIG9uUmVhZHlQcm9taXNlOiBob3N0UmVmLiRvblJlYWR5UHJvbWlzZSQsXG4gICAgb25SZWFkeVJlc29sdmU6IGhvc3RSZWYuJG9uUmVhZHlSZXNvbHZlJCxcbiAgICBvbkluc3RhbmNlUHJvbWlzZTogaG9zdFJlZi4kb25JbnN0YW5jZVByb21pc2UkLFxuICAgIG9uSW5zdGFuY2VSZXNvbHZlOiBob3N0UmVmLiRvbkluc3RhbmNlUmVzb2x2ZSQsXG4gICAgb25SZW5kZXJSZXNvbHZlOiBob3N0UmVmLiRvblJlbmRlclJlc29sdmUkLFxuICAgIHF1ZXVlZExpc3RlbmVyczogaG9zdFJlZi4kcXVldWVkTGlzdGVuZXJzJCxcbiAgICBybUxpc3RlbmVyczogaG9zdFJlZi4kcm1MaXN0ZW5lcnMkLFxuICAgIFtcInMtaWRcIl06IGhvc3RFbGVtZW50W1wicy1pZFwiXSxcbiAgICBbXCJzLWNyXCJdOiBob3N0RWxlbWVudFtcInMtY3JcIl0sXG4gICAgW1wicy1sclwiXTogaG9zdEVsZW1lbnRbXCJzLWxyXCJdLFxuICAgIFtcInMtcFwiXTogaG9zdEVsZW1lbnRbXCJzLXBcIl0sXG4gICAgW1wicy1yY1wiXTogaG9zdEVsZW1lbnRbXCJzLXJjXCJdLFxuICAgIFtcInMtc2NcIl06IGhvc3RFbGVtZW50W1wicy1zY1wiXVxuICB9O1xufTtcbnZhciBpbnN0YWxsRGV2VG9vbHMgPSAoKSA9PiB7XG4gIGlmIChCVUlMRDExLmRldlRvb2xzKSB7XG4gICAgY29uc3Qgc3RlbmNpbCA9IHdpbi5zdGVuY2lsID0gd2luLnN0ZW5jaWwgfHwge307XG4gICAgY29uc3Qgb3JpZ2luYWxJbnNwZWN0ID0gc3RlbmNpbC5pbnNwZWN0O1xuICAgIHN0ZW5jaWwuaW5zcGVjdCA9IHJlZiA9PiB7XG4gICAgICBsZXQgcmVzdWx0ID0gaW5zcGVjdChyZWYpO1xuICAgICAgaWYgKCFyZXN1bHQgJiYgdHlwZW9mIG9yaWdpbmFsSW5zcGVjdCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJlc3VsdCA9IG9yaWdpbmFsSW5zcGVjdChyZWYpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9XG59O1xuXG4vLyBzcmMvcnVudGltZS9zdHlsZXMudHNcbmltcG9ydCB7IEJVSUxEIGFzIEJVSUxEMTIgfSBmcm9tIFwiQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9hcHAtZGF0YVwiO1xudmFyIHJvb3RBcHBsaWVkU3R5bGVzID0gLyogQF9fUFVSRV9fICovbmV3IFdlYWtNYXAoKTtcbnZhciByZWdpc3RlclN0eWxlID0gKHNjb3BlSWQyLCBjc3NUZXh0LCBhbGxvd0NTKSA9PiB7XG4gIGxldCBzdHlsZSA9IHN0eWxlcy5nZXQoc2NvcGVJZDIpO1xuICBpZiAoc3VwcG9ydHNDb25zdHJ1Y3RhYmxlU3R5bGVzaGVldHMgJiYgYWxsb3dDUykge1xuICAgIHN0eWxlID0gc3R5bGUgfHwgbmV3IENTU1N0eWxlU2hlZXQoKTtcbiAgICBpZiAodHlwZW9mIHN0eWxlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBzdHlsZSA9IGNzc1RleHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLnJlcGxhY2VTeW5jKGNzc1RleHQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGNzc1RleHQ7XG4gIH1cbiAgc3R5bGVzLnNldChzY29wZUlkMiwgc3R5bGUpO1xufTtcbnZhciBhZGRTdHlsZSA9IChzdHlsZUNvbnRhaW5lck5vZGUsIGNtcE1ldGEsIG1vZGUpID0+IHtcbiAgdmFyIF9hO1xuICBjb25zdCBzY29wZUlkMiA9IGdldFNjb3BlSWQoY21wTWV0YSwgbW9kZSk7XG4gIGNvbnN0IHN0eWxlID0gc3R5bGVzLmdldChzY29wZUlkMik7XG4gIGlmICghQlVJTEQxMi5hdHRhY2hTdHlsZXMgfHwgIXdpbi5kb2N1bWVudCkge1xuICAgIHJldHVybiBzY29wZUlkMjtcbiAgfVxuICBzdHlsZUNvbnRhaW5lck5vZGUgPSBzdHlsZUNvbnRhaW5lck5vZGUubm9kZVR5cGUgPT09IDExIC8qIERvY3VtZW50RnJhZ21lbnQgKi8gPyBzdHlsZUNvbnRhaW5lck5vZGUgOiB3aW4uZG9jdW1lbnQ7XG4gIGlmIChzdHlsZSkge1xuICAgIGlmICh0eXBlb2Ygc3R5bGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHN0eWxlQ29udGFpbmVyTm9kZSA9IHN0eWxlQ29udGFpbmVyTm9kZS5oZWFkIHx8IHN0eWxlQ29udGFpbmVyTm9kZTtcbiAgICAgIGxldCBhcHBsaWVkU3R5bGVzID0gcm9vdEFwcGxpZWRTdHlsZXMuZ2V0KHN0eWxlQ29udGFpbmVyTm9kZSk7XG4gICAgICBsZXQgc3R5bGVFbG07XG4gICAgICBpZiAoIWFwcGxpZWRTdHlsZXMpIHtcbiAgICAgICAgcm9vdEFwcGxpZWRTdHlsZXMuc2V0KHN0eWxlQ29udGFpbmVyTm9kZSwgYXBwbGllZFN0eWxlcyA9IC8qIEBfX1BVUkVfXyAqL25ldyBTZXQoKSk7XG4gICAgICB9XG4gICAgICBpZiAoIWFwcGxpZWRTdHlsZXMuaGFzKHNjb3BlSWQyKSkge1xuICAgICAgICBpZiAoQlVJTEQxMi5oeWRyYXRlQ2xpZW50U2lkZSAmJiBzdHlsZUNvbnRhaW5lck5vZGUuaG9zdCAmJiAoc3R5bGVFbG0gPSBzdHlsZUNvbnRhaW5lck5vZGUucXVlcnlTZWxlY3RvcihgWyR7SFlEUkFURURfU1RZTEVfSUR9PVwiJHtzY29wZUlkMn1cIl1gKSkpIHtcbiAgICAgICAgICBzdHlsZUVsbS5pbm5lckhUTUwgPSBzdHlsZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdHlsZUVsbSA9IHdpbi5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgICAgICAgc3R5bGVFbG0uaW5uZXJIVE1MID0gc3R5bGU7XG4gICAgICAgICAgY29uc3Qgbm9uY2UgPSAoX2EgPSBwbHQuJG5vbmNlJCkgIT0gbnVsbCA/IF9hIDogcXVlcnlOb25jZU1ldGFUYWdDb250ZW50KHdpbi5kb2N1bWVudCk7XG4gICAgICAgICAgaWYgKG5vbmNlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHN0eWxlRWxtLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKChCVUlMRDEyLmh5ZHJhdGVTZXJ2ZXJTaWRlIHx8IEJVSUxEMTIuaG90TW9kdWxlUmVwbGFjZW1lbnQpICYmIChjbXBNZXRhLiRmbGFncyQgJiAyIC8qIHNjb3BlZENzc0VuY2Fwc3VsYXRpb24gKi8gfHwgY21wTWV0YS4kZmxhZ3MkICYgMTI4IC8qIHNoYWRvd05lZWRzU2NvcGVkQ3NzICovKSkge1xuICAgICAgICAgICAgc3R5bGVFbG0uc2V0QXR0cmlidXRlKEhZRFJBVEVEX1NUWUxFX0lELCBzY29wZUlkMik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghKGNtcE1ldGEuJGZsYWdzJCAmIDEgLyogc2hhZG93RG9tRW5jYXBzdWxhdGlvbiAqLykpIHtcbiAgICAgICAgICAgIGlmIChzdHlsZUNvbnRhaW5lck5vZGUubm9kZU5hbWUgPT09IFwiSEVBRFwiKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHByZWNvbm5lY3RMaW5rcyA9IHN0eWxlQ29udGFpbmVyTm9kZS5xdWVyeVNlbGVjdG9yQWxsKFwibGlua1tyZWw9cHJlY29ubmVjdF1cIik7XG4gICAgICAgICAgICAgIGNvbnN0IHJlZmVyZW5jZU5vZGUyID0gcHJlY29ubmVjdExpbmtzLmxlbmd0aCA+IDAgPyBwcmVjb25uZWN0TGlua3NbcHJlY29ubmVjdExpbmtzLmxlbmd0aCAtIDFdLm5leHRTaWJsaW5nIDogc3R5bGVDb250YWluZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoXCJzdHlsZVwiKTtcbiAgICAgICAgICAgICAgc3R5bGVDb250YWluZXJOb2RlLmluc2VydEJlZm9yZShzdHlsZUVsbSwgKHJlZmVyZW5jZU5vZGUyID09IG51bGwgPyB2b2lkIDAgOiByZWZlcmVuY2VOb2RlMi5wYXJlbnROb2RlKSA9PT0gc3R5bGVDb250YWluZXJOb2RlID8gcmVmZXJlbmNlTm9kZTIgOiBudWxsKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXCJob3N0XCIgaW4gc3R5bGVDb250YWluZXJOb2RlKSB7XG4gICAgICAgICAgICAgIGlmIChzdXBwb3J0c0NvbnN0cnVjdGFibGVTdHlsZXNoZWV0cykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlc2hlZXQgPSBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuICAgICAgICAgICAgICAgIHN0eWxlc2hlZXQucmVwbGFjZVN5bmMoc3R5bGUpO1xuICAgICAgICAgICAgICAgIGlmIChzdXBwb3J0c011dGFibGVBZG9wdGVkU3R5bGVTaGVldHMpIHtcbiAgICAgICAgICAgICAgICAgIHN0eWxlQ29udGFpbmVyTm9kZS5hZG9wdGVkU3R5bGVTaGVldHMudW5zaGlmdChzdHlsZXNoZWV0KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgc3R5bGVDb250YWluZXJOb2RlLmFkb3B0ZWRTdHlsZVNoZWV0cyA9IFtzdHlsZXNoZWV0LCAuLi5zdHlsZUNvbnRhaW5lck5vZGUuYWRvcHRlZFN0eWxlU2hlZXRzXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdTdHlsZUNvbnRhaW5lciA9IHN0eWxlQ29udGFpbmVyTm9kZS5xdWVyeVNlbGVjdG9yKFwic3R5bGVcIik7XG4gICAgICAgICAgICAgICAgaWYgKGV4aXN0aW5nU3R5bGVDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgIGV4aXN0aW5nU3R5bGVDb250YWluZXIuaW5uZXJIVE1MID0gc3R5bGUgKyBleGlzdGluZ1N0eWxlQ29udGFpbmVyLmlubmVySFRNTDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgc3R5bGVDb250YWluZXJOb2RlLnByZXBlbmQoc3R5bGVFbG0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc3R5bGVDb250YWluZXJOb2RlLmFwcGVuZChzdHlsZUVsbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjbXBNZXRhLiRmbGFncyQgJiAxIC8qIHNoYWRvd0RvbUVuY2Fwc3VsYXRpb24gKi8pIHtcbiAgICAgICAgICAgIHN0eWxlQ29udGFpbmVyTm9kZS5pbnNlcnRCZWZvcmUoc3R5bGVFbG0sIG51bGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY21wTWV0YS4kZmxhZ3MkICYgNCAvKiBoYXNTbG90UmVsb2NhdGlvbiAqLykge1xuICAgICAgICAgIHN0eWxlRWxtLmlubmVySFRNTCArPSBTTE9UX0ZCX0NTUztcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXBwbGllZFN0eWxlcykge1xuICAgICAgICAgIGFwcGxpZWRTdHlsZXMuYWRkKHNjb3BlSWQyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoQlVJTEQxMi5jb25zdHJ1Y3RhYmxlQ1NTICYmICFzdHlsZUNvbnRhaW5lck5vZGUuYWRvcHRlZFN0eWxlU2hlZXRzLmluY2x1ZGVzKHN0eWxlKSkge1xuICAgICAgaWYgKHN1cHBvcnRzTXV0YWJsZUFkb3B0ZWRTdHlsZVNoZWV0cykge1xuICAgICAgICBzdHlsZUNvbnRhaW5lck5vZGUuYWRvcHRlZFN0eWxlU2hlZXRzLnB1c2goc3R5bGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3R5bGVDb250YWluZXJOb2RlLmFkb3B0ZWRTdHlsZVNoZWV0cyA9IFsuLi5zdHlsZUNvbnRhaW5lck5vZGUuYWRvcHRlZFN0eWxlU2hlZXRzLCBzdHlsZV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBzY29wZUlkMjtcbn07XG52YXIgYXR0YWNoU3R5bGVzID0gaG9zdFJlZiA9PiB7XG4gIGNvbnN0IGNtcE1ldGEgPSBob3N0UmVmLiRjbXBNZXRhJDtcbiAgY29uc3QgZWxtID0gaG9zdFJlZi4kaG9zdEVsZW1lbnQkO1xuICBjb25zdCBmbGFncyA9IGNtcE1ldGEuJGZsYWdzJDtcbiAgY29uc3QgZW5kQXR0YWNoU3R5bGVzID0gY3JlYXRlVGltZShcImF0dGFjaFN0eWxlc1wiLCBjbXBNZXRhLiR0YWdOYW1lJCk7XG4gIGNvbnN0IHNjb3BlSWQyID0gYWRkU3R5bGUoQlVJTEQxMi5zaGFkb3dEb20gJiYgc3VwcG9ydHNTaGFkb3cgJiYgZWxtLnNoYWRvd1Jvb3QgPyBlbG0uc2hhZG93Um9vdCA6IGVsbS5nZXRSb290Tm9kZSgpLCBjbXBNZXRhLCBob3N0UmVmLiRtb2RlTmFtZSQpO1xuICBpZiAoKEJVSUxEMTIuc2hhZG93RG9tIHx8IEJVSUxEMTIuc2NvcGVkKSAmJiBCVUlMRDEyLmNzc0Fubm90YXRpb25zICYmIGZsYWdzICYgMTAgLyogbmVlZHNTY29wZWRFbmNhcHN1bGF0aW9uICovKSB7XG4gICAgZWxtW1wicy1zY1wiXSA9IHNjb3BlSWQyO1xuICAgIGVsbS5jbGFzc0xpc3QuYWRkKHNjb3BlSWQyICsgXCItaFwiKTtcbiAgfVxuICBlbmRBdHRhY2hTdHlsZXMoKTtcbn07XG52YXIgZ2V0U2NvcGVJZCA9IChjbXAsIG1vZGUpID0+IFwic2MtXCIgKyAoQlVJTEQxMi5tb2RlICYmIG1vZGUgJiYgY21wLiRmbGFncyQgJiAzMiAvKiBoYXNNb2RlICovID8gY21wLiR0YWdOYW1lJCArIFwiLVwiICsgbW9kZSA6IGNtcC4kdGFnTmFtZSQpO1xudmFyIGNvbnZlcnRTY29wZWRUb1NoYWRvdyA9IGNzcyA9PiBjc3MucmVwbGFjZSgvXFwvXFwqIUAoW15cXC9dKylcXCpcXC9bXlxce10rXFx7L2csIFwiJDF7XCIpO1xudmFyIGh5ZHJhdGVTY29wZWRUb1NoYWRvdyA9ICgpID0+IHtcbiAgaWYgKCF3aW4uZG9jdW1lbnQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3Qgc3R5bGVzMiA9IHdpbi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbJHtIWURSQVRFRF9TVFlMRV9JRH1dYCk7XG4gIGxldCBpMiA9IDA7XG4gIGZvciAoOyBpMiA8IHN0eWxlczIubGVuZ3RoOyBpMisrKSB7XG4gICAgcmVnaXN0ZXJTdHlsZShzdHlsZXMyW2kyXS5nZXRBdHRyaWJ1dGUoSFlEUkFURURfU1RZTEVfSUQpLCBjb252ZXJ0U2NvcGVkVG9TaGFkb3coc3R5bGVzMltpMl0uaW5uZXJIVE1MKSwgdHJ1ZSk7XG4gIH1cbn07XG5cbi8vIHNyYy9ydW50aW1lL3Zkb20vaC50c1xuaW1wb3J0IHsgQlVJTEQgYXMgQlVJTEQxMyB9IGZyb20gXCJAc3RlbmNpbC9jb3JlL2ludGVybmFsL2FwcC1kYXRhXCI7XG52YXIgaCA9IChub2RlTmFtZSwgdm5vZGVEYXRhLCAuLi5jaGlsZHJlbikgPT4ge1xuICBsZXQgY2hpbGQgPSBudWxsO1xuICBsZXQga2V5ID0gbnVsbDtcbiAgbGV0IHNsb3ROYW1lID0gbnVsbDtcbiAgbGV0IHNpbXBsZSA9IGZhbHNlO1xuICBsZXQgbGFzdFNpbXBsZSA9IGZhbHNlO1xuICBjb25zdCB2Tm9kZUNoaWxkcmVuID0gW107XG4gIGNvbnN0IHdhbGsgPSBjID0+IHtcbiAgICBmb3IgKGxldCBpMiA9IDA7IGkyIDwgYy5sZW5ndGg7IGkyKyspIHtcbiAgICAgIGNoaWxkID0gY1tpMl07XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZCkpIHtcbiAgICAgICAgd2FsayhjaGlsZCk7XG4gICAgICB9IGVsc2UgaWYgKGNoaWxkICE9IG51bGwgJiYgdHlwZW9mIGNoaWxkICE9PSBcImJvb2xlYW5cIikge1xuICAgICAgICBpZiAoc2ltcGxlID0gdHlwZW9mIG5vZGVOYW1lICE9PSBcImZ1bmN0aW9uXCIgJiYgIWlzQ29tcGxleFR5cGUoY2hpbGQpKSB7XG4gICAgICAgICAgY2hpbGQgPSBTdHJpbmcoY2hpbGQpO1xuICAgICAgICB9IGVsc2UgaWYgKEJVSUxEMTMuaXNEZXYgJiYgdHlwZW9mIG5vZGVOYW1lICE9PSBcImZ1bmN0aW9uXCIgJiYgY2hpbGQuJGZsYWdzJCA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgY29uc29sZURldkVycm9yKGB2Tm9kZSBwYXNzZWQgYXMgY2hpbGRyZW4gaGFzIHVuZXhwZWN0ZWQgdHlwZS5cbk1ha2Ugc3VyZSBpdCdzIHVzaW5nIHRoZSBjb3JyZWN0IGgoKSBmdW5jdGlvbi5cbkVtcHR5IG9iamVjdHMgY2FuIGFsc28gYmUgdGhlIGNhdXNlLCBsb29rIGZvciBKU1ggY29tbWVudHMgdGhhdCBiZWNhbWUgb2JqZWN0cy5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2ltcGxlICYmIGxhc3RTaW1wbGUpIHtcbiAgICAgICAgICB2Tm9kZUNoaWxkcmVuW3ZOb2RlQ2hpbGRyZW4ubGVuZ3RoIC0gMV0uJHRleHQkICs9IGNoaWxkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZOb2RlQ2hpbGRyZW4ucHVzaChzaW1wbGUgPyBuZXdWTm9kZShudWxsLCBjaGlsZCkgOiBjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgbGFzdFNpbXBsZSA9IHNpbXBsZTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHdhbGsoY2hpbGRyZW4pO1xuICBpZiAodm5vZGVEYXRhKSB7XG4gICAgaWYgKEJVSUxEMTMuaXNEZXYgJiYgbm9kZU5hbWUgPT09IFwiaW5wdXRcIikge1xuICAgICAgdmFsaWRhdGVJbnB1dFByb3BlcnRpZXModm5vZGVEYXRhKTtcbiAgICB9XG4gICAgaWYgKEJVSUxEMTMudmRvbUtleSAmJiB2bm9kZURhdGEua2V5KSB7XG4gICAgICBrZXkgPSB2bm9kZURhdGEua2V5O1xuICAgIH1cbiAgICBpZiAoQlVJTEQxMy5zbG90UmVsb2NhdGlvbiAmJiB2bm9kZURhdGEubmFtZSkge1xuICAgICAgc2xvdE5hbWUgPSB2bm9kZURhdGEubmFtZTtcbiAgICB9XG4gICAgaWYgKEJVSUxEMTMudmRvbUNsYXNzKSB7XG4gICAgICBjb25zdCBjbGFzc0RhdGEgPSB2bm9kZURhdGEuY2xhc3NOYW1lIHx8IHZub2RlRGF0YS5jbGFzcztcbiAgICAgIGlmIChjbGFzc0RhdGEpIHtcbiAgICAgICAgdm5vZGVEYXRhLmNsYXNzID0gdHlwZW9mIGNsYXNzRGF0YSAhPT0gXCJvYmplY3RcIiA/IGNsYXNzRGF0YSA6IE9iamVjdC5rZXlzKGNsYXNzRGF0YSkuZmlsdGVyKGsgPT4gY2xhc3NEYXRhW2tdKS5qb2luKFwiIFwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKEJVSUxEMTMuaXNEZXYgJiYgdk5vZGVDaGlsZHJlbi5zb21lKGlzSG9zdCkpIHtcbiAgICBjb25zb2xlRGV2RXJyb3IoYFRoZSA8SG9zdD4gbXVzdCBiZSB0aGUgc2luZ2xlIHJvb3QgY29tcG9uZW50LiBNYWtlIHN1cmU6XG4tIFlvdSBhcmUgTk9UIHVzaW5nIGhvc3REYXRhKCkgYW5kIDxIb3N0PiBpbiB0aGUgc2FtZSBjb21wb25lbnQuXG4tIDxIb3N0PiBpcyB1c2VkIG9uY2UsIGFuZCBpdCdzIHRoZSBzaW5nbGUgcm9vdCBjb21wb25lbnQgb2YgdGhlIHJlbmRlcigpIGZ1bmN0aW9uLmApO1xuICB9XG4gIGlmIChCVUlMRDEzLnZkb21GdW5jdGlvbmFsICYmIHR5cGVvZiBub2RlTmFtZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIG5vZGVOYW1lKHZub2RlRGF0YSA9PT0gbnVsbCA/IHt9IDogdm5vZGVEYXRhLCB2Tm9kZUNoaWxkcmVuLCB2ZG9tRm5VdGlscyk7XG4gIH1cbiAgY29uc3Qgdm5vZGUgPSBuZXdWTm9kZShub2RlTmFtZSwgbnVsbCk7XG4gIHZub2RlLiRhdHRycyQgPSB2bm9kZURhdGE7XG4gIGlmICh2Tm9kZUNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICB2bm9kZS4kY2hpbGRyZW4kID0gdk5vZGVDaGlsZHJlbjtcbiAgfVxuICBpZiAoQlVJTEQxMy52ZG9tS2V5KSB7XG4gICAgdm5vZGUuJGtleSQgPSBrZXk7XG4gIH1cbiAgaWYgKEJVSUxEMTMuc2xvdFJlbG9jYXRpb24pIHtcbiAgICB2bm9kZS4kbmFtZSQgPSBzbG90TmFtZTtcbiAgfVxuICByZXR1cm4gdm5vZGU7XG59O1xudmFyIG5ld1ZOb2RlID0gKHRhZywgdGV4dCkgPT4ge1xuICBjb25zdCB2bm9kZSA9IHtcbiAgICAkZmxhZ3MkOiAwLFxuICAgICR0YWckOiB0YWcsXG4gICAgJHRleHQkOiB0ZXh0LFxuICAgICRlbG0kOiBudWxsLFxuICAgICRjaGlsZHJlbiQ6IG51bGxcbiAgfTtcbiAgaWYgKEJVSUxEMTMudmRvbUF0dHJpYnV0ZSkge1xuICAgIHZub2RlLiRhdHRycyQgPSBudWxsO1xuICB9XG4gIGlmIChCVUlMRDEzLnZkb21LZXkpIHtcbiAgICB2bm9kZS4ka2V5JCA9IG51bGw7XG4gIH1cbiAgaWYgKEJVSUxEMTMuc2xvdFJlbG9jYXRpb24pIHtcbiAgICB2bm9kZS4kbmFtZSQgPSBudWxsO1xuICB9XG4gIHJldHVybiB2bm9kZTtcbn07XG52YXIgSG9zdCA9IHt9O1xudmFyIGlzSG9zdCA9IG5vZGUgPT4gbm9kZSAmJiBub2RlLiR0YWckID09PSBIb3N0O1xudmFyIHZkb21GblV0aWxzID0ge1xuICBmb3JFYWNoOiAoY2hpbGRyZW4sIGNiKSA9PiBjaGlsZHJlbi5tYXAoY29udmVydFRvUHVibGljKS5mb3JFYWNoKGNiKSxcbiAgbWFwOiAoY2hpbGRyZW4sIGNiKSA9PiBjaGlsZHJlbi5tYXAoY29udmVydFRvUHVibGljKS5tYXAoY2IpLm1hcChjb252ZXJ0VG9Qcml2YXRlKVxufTtcbnZhciBjb252ZXJ0VG9QdWJsaWMgPSBub2RlID0+ICh7XG4gIHZhdHRyczogbm9kZS4kYXR0cnMkLFxuICB2Y2hpbGRyZW46IG5vZGUuJGNoaWxkcmVuJCxcbiAgdmtleTogbm9kZS4ka2V5JCxcbiAgdm5hbWU6IG5vZGUuJG5hbWUkLFxuICB2dGFnOiBub2RlLiR0YWckLFxuICB2dGV4dDogbm9kZS4kdGV4dCRcbn0pO1xudmFyIGNvbnZlcnRUb1ByaXZhdGUgPSBub2RlID0+IHtcbiAgaWYgKHR5cGVvZiBub2RlLnZ0YWcgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGNvbnN0IHZub2RlRGF0YSA9IHtcbiAgICAgIC4uLm5vZGUudmF0dHJzXG4gICAgfTtcbiAgICBpZiAobm9kZS52a2V5KSB7XG4gICAgICB2bm9kZURhdGEua2V5ID0gbm9kZS52a2V5O1xuICAgIH1cbiAgICBpZiAobm9kZS52bmFtZSkge1xuICAgICAgdm5vZGVEYXRhLm5hbWUgPSBub2RlLnZuYW1lO1xuICAgIH1cbiAgICByZXR1cm4gaChub2RlLnZ0YWcsIHZub2RlRGF0YSwgLi4uKG5vZGUudmNoaWxkcmVuIHx8IFtdKSk7XG4gIH1cbiAgY29uc3Qgdm5vZGUgPSBuZXdWTm9kZShub2RlLnZ0YWcsIG5vZGUudnRleHQpO1xuICB2bm9kZS4kYXR0cnMkID0gbm9kZS52YXR0cnM7XG4gIHZub2RlLiRjaGlsZHJlbiQgPSBub2RlLnZjaGlsZHJlbjtcbiAgdm5vZGUuJGtleSQgPSBub2RlLnZrZXk7XG4gIHZub2RlLiRuYW1lJCA9IG5vZGUudm5hbWU7XG4gIHJldHVybiB2bm9kZTtcbn07XG52YXIgdmFsaWRhdGVJbnB1dFByb3BlcnRpZXMgPSBpbnB1dEVsbSA9PiB7XG4gIGNvbnN0IHByb3BzID0gT2JqZWN0LmtleXMoaW5wdXRFbG0pO1xuICBjb25zdCB2YWx1ZSA9IHByb3BzLmluZGV4T2YoXCJ2YWx1ZVwiKTtcbiAgaWYgKHZhbHVlID09PSAtMSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB0eXBlSW5kZXggPSBwcm9wcy5pbmRleE9mKFwidHlwZVwiKTtcbiAgY29uc3QgbWluSW5kZXggPSBwcm9wcy5pbmRleE9mKFwibWluXCIpO1xuICBjb25zdCBtYXhJbmRleCA9IHByb3BzLmluZGV4T2YoXCJtYXhcIik7XG4gIGNvbnN0IHN0ZXBJbmRleCA9IHByb3BzLmluZGV4T2YoXCJzdGVwXCIpO1xuICBpZiAodmFsdWUgPCB0eXBlSW5kZXggfHwgdmFsdWUgPCBtaW5JbmRleCB8fCB2YWx1ZSA8IG1heEluZGV4IHx8IHZhbHVlIDwgc3RlcEluZGV4KSB7XG4gICAgY29uc29sZURldldhcm4oYFRoZSBcInZhbHVlXCIgcHJvcCBvZiA8aW5wdXQ+IHNob3VsZCBiZSBzZXQgYWZ0ZXIgXCJtaW5cIiwgXCJtYXhcIiwgXCJ0eXBlXCIgYW5kIFwic3RlcFwiYCk7XG4gIH1cbn07XG5cbi8vIHNyYy9ydW50aW1lL2NsaWVudC1oeWRyYXRlLnRzXG52YXIgaW5pdGlhbGl6ZUNsaWVudEh5ZHJhdGUgPSAoaG9zdEVsbSwgdGFnTmFtZSwgaG9zdElkLCBob3N0UmVmKSA9PiB7XG4gIHZhciBfYSwgX2IsIF9jO1xuICBjb25zdCBlbmRIeWRyYXRlID0gY3JlYXRlVGltZShcImh5ZHJhdGVDbGllbnRcIiwgdGFnTmFtZSk7XG4gIGNvbnN0IHNoYWRvd1Jvb3QgPSBob3N0RWxtLnNoYWRvd1Jvb3Q7XG4gIGNvbnN0IGNoaWxkUmVuZGVyTm9kZXMgPSBbXTtcbiAgY29uc3Qgc2xvdE5vZGVzID0gW107XG4gIGNvbnN0IHNsb3R0ZWROb2RlcyA9IFtdO1xuICBjb25zdCBzaGFkb3dSb290Tm9kZXMgPSBCVUlMRDE0LnNoYWRvd0RvbSAmJiBzaGFkb3dSb290ID8gW10gOiBudWxsO1xuICBjb25zdCB2bm9kZSA9IG5ld1ZOb2RlKHRhZ05hbWUsIG51bGwpO1xuICB2bm9kZS4kZWxtJCA9IGhvc3RFbG07XG4gIGNvbnN0IG1lbWJlcnMgPSBPYmplY3QuZW50cmllcygoKF9hID0gaG9zdFJlZi4kY21wTWV0YSQpID09IG51bGwgPyB2b2lkIDAgOiBfYS4kbWVtYmVycyQpIHx8IHt9KTtcbiAgbWVtYmVycy5mb3JFYWNoKChbbWVtYmVyTmFtZSwgW21lbWJlckZsYWdzLCBtZXRhQXR0cmlidXRlTmFtZV1dKSA9PiB7XG4gICAgdmFyIF9hMiwgX2IyO1xuICAgIGlmICghKG1lbWJlckZsYWdzICYgMzEgLyogUHJvcCAqLykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IG1ldGFBdHRyaWJ1dGVOYW1lIHx8IG1lbWJlck5hbWU7XG4gICAgY29uc3QgYXR0clZhbCA9IGhvc3RFbG0uZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xuICAgIGlmIChhdHRyVmFsICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBhdHRyUHJvcFZhbCA9IHBhcnNlUHJvcGVydHlWYWx1ZShhdHRyVmFsLCBtZW1iZXJGbGFncywgQlVJTEQxNC5mb3JtQXNzb2NpYXRlZCAmJiAhISgoKF9hMiA9IGhvc3RSZWYuJGNtcE1ldGEkKSA9PSBudWxsID8gdm9pZCAwIDogX2EyLiRmbGFncyQpICYgNjQgLyogZm9ybUFzc29jaWF0ZWQgKi8pKTtcbiAgICAgIChfYjIgPSBob3N0UmVmID09IG51bGwgPyB2b2lkIDAgOiBob3N0UmVmLiRpbnN0YW5jZVZhbHVlcyQpID09IG51bGwgPyB2b2lkIDAgOiBfYjIuc2V0KG1lbWJlck5hbWUsIGF0dHJQcm9wVmFsKTtcbiAgICB9XG4gIH0pO1xuICBsZXQgc2NvcGVJZDI7XG4gIGlmIChCVUlMRDE0LnNjb3BlZCkge1xuICAgIGNvbnN0IGNtcE1ldGEgPSBob3N0UmVmLiRjbXBNZXRhJDtcbiAgICBpZiAoY21wTWV0YSAmJiBjbXBNZXRhLiRmbGFncyQgJiAxMCAvKiBuZWVkc1Njb3BlZEVuY2Fwc3VsYXRpb24gKi8gJiYgaG9zdEVsbVtcInMtc2NcIl0pIHtcbiAgICAgIHNjb3BlSWQyID0gaG9zdEVsbVtcInMtc2NcIl07XG4gICAgICBob3N0RWxtLmNsYXNzTGlzdC5hZGQoc2NvcGVJZDIgKyBcIi1oXCIpO1xuICAgIH0gZWxzZSBpZiAoaG9zdEVsbVtcInMtc2NcIl0pIHtcbiAgICAgIGRlbGV0ZSBob3N0RWxtW1wicy1zY1wiXTtcbiAgICB9XG4gIH1cbiAgaWYgKHdpbi5kb2N1bWVudCAmJiAoIXBsdC4kb3JnTG9jTm9kZXMkIHx8ICFwbHQuJG9yZ0xvY05vZGVzJC5zaXplKSkge1xuICAgIGluaXRpYWxpemVEb2N1bWVudEh5ZHJhdGUod2luLmRvY3VtZW50LmJvZHksIHBsdC4kb3JnTG9jTm9kZXMkID0gLyogQF9fUFVSRV9fICovbmV3IE1hcCgpKTtcbiAgfVxuICBob3N0RWxtW0hZRFJBVEVfSURdID0gaG9zdElkO1xuICBob3N0RWxtLnJlbW92ZUF0dHJpYnV0ZShIWURSQVRFX0lEKTtcbiAgaG9zdFJlZi4kdm5vZGUkID0gY2xpZW50SHlkcmF0ZSh2bm9kZSwgY2hpbGRSZW5kZXJOb2Rlcywgc2xvdE5vZGVzLCBzaGFkb3dSb290Tm9kZXMsIGhvc3RFbG0sIGhvc3RFbG0sIGhvc3RJZCwgc2xvdHRlZE5vZGVzKTtcbiAgbGV0IGNySW5kZXggPSAwO1xuICBjb25zdCBjckxlbmd0aCA9IGNoaWxkUmVuZGVyTm9kZXMubGVuZ3RoO1xuICBsZXQgY2hpbGRSZW5kZXJOb2RlO1xuICBmb3IgKGNySW5kZXg7IGNySW5kZXggPCBjckxlbmd0aDsgY3JJbmRleCsrKSB7XG4gICAgY2hpbGRSZW5kZXJOb2RlID0gY2hpbGRSZW5kZXJOb2Rlc1tjckluZGV4XTtcbiAgICBjb25zdCBvcmdMb2NhdGlvbklkID0gY2hpbGRSZW5kZXJOb2RlLiRob3N0SWQkICsgXCIuXCIgKyBjaGlsZFJlbmRlck5vZGUuJG5vZGVJZCQ7XG4gICAgY29uc3Qgb3JnTG9jYXRpb25Ob2RlID0gcGx0LiRvcmdMb2NOb2RlcyQuZ2V0KG9yZ0xvY2F0aW9uSWQpO1xuICAgIGNvbnN0IG5vZGUgPSBjaGlsZFJlbmRlck5vZGUuJGVsbSQ7XG4gICAgaWYgKCFzaGFkb3dSb290KSB7XG4gICAgICBub2RlW1wicy1oblwiXSA9IHRhZ05hbWUudG9VcHBlckNhc2UoKTtcbiAgICAgIGlmIChjaGlsZFJlbmRlck5vZGUuJHRhZyQgPT09IFwic2xvdFwiKSB7XG4gICAgICAgIG5vZGVbXCJzLWNyXCJdID0gaG9zdEVsbVtcInMtY3JcIl07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICgoKF9iID0gY2hpbGRSZW5kZXJOb2RlLiR0YWckKSA9PSBudWxsID8gdm9pZCAwIDogX2IudG9TdHJpbmcoKS5pbmNsdWRlcyhcIi1cIikpICYmIGNoaWxkUmVuZGVyTm9kZS4kdGFnJCAhPT0gXCJzbG90LWZiXCIgJiYgIWNoaWxkUmVuZGVyTm9kZS4kZWxtJC5zaGFkb3dSb290KSB7XG4gICAgICBjb25zdCBjbXBNZXRhID0gZ2V0SG9zdFJlZihjaGlsZFJlbmRlck5vZGUuJGVsbSQpO1xuICAgICAgaWYgKGNtcE1ldGEpIHtcbiAgICAgICAgY29uc3Qgc2NvcGVJZDMgPSBnZXRTY29wZUlkKGNtcE1ldGEuJGNtcE1ldGEkLCBCVUlMRDE0Lm1vZGUgPyBjaGlsZFJlbmRlck5vZGUuJGVsbSQuZ2V0QXR0cmlidXRlKFwicy1tb2RlXCIpIDogdm9pZCAwKTtcbiAgICAgICAgY29uc3Qgc3R5bGVTaGVldCA9IHdpbi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzdHlsZVtzdHktaWQ9XCIke3Njb3BlSWQzfVwiXWApO1xuICAgICAgICBpZiAoc3R5bGVTaGVldCkge1xuICAgICAgICAgIGhvc3RFbG0uc2hhZG93Um9vdC5hcHBlbmQoc3R5bGVTaGVldC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjaGlsZFJlbmRlck5vZGUuJHRhZyQgPT09IFwic2xvdFwiKSB7XG4gICAgICBjaGlsZFJlbmRlck5vZGUuJG5hbWUkID0gY2hpbGRSZW5kZXJOb2RlLiRlbG0kW1wicy1zblwiXSB8fCBjaGlsZFJlbmRlck5vZGUuJGVsbSRbXCJuYW1lXCJdIHx8IG51bGw7XG4gICAgICBpZiAoY2hpbGRSZW5kZXJOb2RlLiRjaGlsZHJlbiQpIHtcbiAgICAgICAgY2hpbGRSZW5kZXJOb2RlLiRmbGFncyQgfD0gMiAvKiBpc1Nsb3RGYWxsYmFjayAqLztcbiAgICAgICAgaWYgKCFjaGlsZFJlbmRlck5vZGUuJGVsbSQuY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICBjaGlsZFJlbmRlck5vZGUuJGNoaWxkcmVuJC5mb3JFYWNoKGMgPT4ge1xuICAgICAgICAgICAgY2hpbGRSZW5kZXJOb2RlLiRlbG0kLmFwcGVuZENoaWxkKGMuJGVsbSQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZFJlbmRlck5vZGUuJGZsYWdzJCB8PSAxIC8qIGlzU2xvdFJlZmVyZW5jZSAqLztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9yZ0xvY2F0aW9uTm9kZSAmJiBvcmdMb2NhdGlvbk5vZGUuaXNDb25uZWN0ZWQpIHtcbiAgICAgIGlmIChvcmdMb2NhdGlvbk5vZGUucGFyZW50RWxlbWVudC5zaGFkb3dSb290ICYmIG9yZ0xvY2F0aW9uTm9kZVtcInMtZW5cIl0gPT09IFwiXCIpIHtcbiAgICAgICAgb3JnTG9jYXRpb25Ob2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5vZGUsIG9yZ0xvY2F0aW9uTm9kZS5uZXh0U2libGluZyk7XG4gICAgICB9XG4gICAgICBvcmdMb2NhdGlvbk5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvcmdMb2NhdGlvbk5vZGUpO1xuICAgICAgaWYgKCFzaGFkb3dSb290KSB7XG4gICAgICAgIG5vZGVbXCJzLW9vXCJdID0gcGFyc2VJbnQoY2hpbGRSZW5kZXJOb2RlLiRub2RlSWQkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9yZ0xvY2F0aW9uTm9kZSAmJiAhb3JnTG9jYXRpb25Ob2RlW1wicy1pZFwiXSkge1xuICAgICAgcGx0LiRvcmdMb2NOb2RlcyQuZGVsZXRlKG9yZ0xvY2F0aW9uSWQpO1xuICAgIH1cbiAgfVxuICBjb25zdCBob3N0cyA9IFtdO1xuICBjb25zdCBzbkxlbiA9IHNsb3R0ZWROb2Rlcy5sZW5ndGg7XG4gIGxldCBzbkluZGV4ID0gMDtcbiAgbGV0IHNsb3RHcm91cDtcbiAgbGV0IHNuR3JvdXBJZHg7XG4gIGxldCBzbkdyb3VwTGVuO1xuICBsZXQgc2xvdHRlZEl0ZW07XG4gIGZvciAoc25JbmRleDsgc25JbmRleCA8IHNuTGVuOyBzbkluZGV4KyspIHtcbiAgICBzbG90R3JvdXAgPSBzbG90dGVkTm9kZXNbc25JbmRleF07XG4gICAgaWYgKCFzbG90R3JvdXAgfHwgIXNsb3RHcm91cC5sZW5ndGgpIGNvbnRpbnVlO1xuICAgIHNuR3JvdXBMZW4gPSBzbG90R3JvdXAubGVuZ3RoO1xuICAgIHNuR3JvdXBJZHggPSAwO1xuICAgIGZvciAoc25Hcm91cElkeDsgc25Hcm91cElkeCA8IHNuR3JvdXBMZW47IHNuR3JvdXBJZHgrKykge1xuICAgICAgc2xvdHRlZEl0ZW0gPSBzbG90R3JvdXBbc25Hcm91cElkeF07XG4gICAgICBpZiAoIWhvc3RzW3Nsb3R0ZWRJdGVtLmhvc3RJZF0pIHtcbiAgICAgICAgaG9zdHNbc2xvdHRlZEl0ZW0uaG9zdElkXSA9IHBsdC4kb3JnTG9jTm9kZXMkLmdldChzbG90dGVkSXRlbS5ob3N0SWQpO1xuICAgICAgfVxuICAgICAgaWYgKCFob3N0c1tzbG90dGVkSXRlbS5ob3N0SWRdKSBjb250aW51ZTtcbiAgICAgIGNvbnN0IGhvc3RFbGUgPSBob3N0c1tzbG90dGVkSXRlbS5ob3N0SWRdO1xuICAgICAgaWYgKGhvc3RFbGUuc2hhZG93Um9vdCAmJiBzbG90dGVkSXRlbS5ub2RlLnBhcmVudEVsZW1lbnQgIT09IGhvc3RFbGUpIHtcbiAgICAgICAgaG9zdEVsZS5hcHBlbmRDaGlsZChzbG90dGVkSXRlbS5ub2RlKTtcbiAgICAgIH1cbiAgICAgIGlmICghaG9zdEVsZS5zaGFkb3dSb290IHx8ICFzaGFkb3dSb290KSB7XG4gICAgICAgIGlmICghc2xvdHRlZEl0ZW0uc2xvdFtcInMtY3JcIl0pIHtcbiAgICAgICAgICBzbG90dGVkSXRlbS5zbG90W1wicy1jclwiXSA9IGhvc3RFbGVbXCJzLWNyXCJdO1xuICAgICAgICAgIGlmICghc2xvdHRlZEl0ZW0uc2xvdFtcInMtY3JcIl0gJiYgaG9zdEVsZS5zaGFkb3dSb290KSB7XG4gICAgICAgICAgICBzbG90dGVkSXRlbS5zbG90W1wicy1jclwiXSA9IGhvc3RFbGU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNsb3R0ZWRJdGVtLnNsb3RbXCJzLWNyXCJdID0gKGhvc3RFbGUuX19jaGlsZE5vZGVzIHx8IGhvc3RFbGUuY2hpbGROb2RlcylbMF07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFkZFNsb3RSZWxvY2F0ZU5vZGUoc2xvdHRlZEl0ZW0ubm9kZSwgc2xvdHRlZEl0ZW0uc2xvdCwgZmFsc2UsIHNsb3R0ZWRJdGVtLm5vZGVbXCJzLW9vXCJdKTtcbiAgICAgICAgaWYgKCgoX2MgPSBzbG90dGVkSXRlbS5ub2RlLnBhcmVudEVsZW1lbnQpID09IG51bGwgPyB2b2lkIDAgOiBfYy5zaGFkb3dSb290KSAmJiBzbG90dGVkSXRlbS5ub2RlW1wiZ2V0QXR0cmlidXRlXCJdICYmIHNsb3R0ZWRJdGVtLm5vZGUuZ2V0QXR0cmlidXRlKFwic2xvdFwiKSkge1xuICAgICAgICAgIHNsb3R0ZWRJdGVtLm5vZGUucmVtb3ZlQXR0cmlidXRlKFwic2xvdFwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQlVJTEQxNC5leHBlcmltZW50YWxTbG90Rml4ZXMpIHtcbiAgICAgICAgICBwYXRjaFNsb3R0ZWROb2RlKHNsb3R0ZWRJdGVtLm5vZGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmIChCVUlMRDE0LnNjb3BlZCAmJiBzY29wZUlkMiAmJiBzbG90Tm9kZXMubGVuZ3RoKSB7XG4gICAgc2xvdE5vZGVzLmZvckVhY2goc2xvdCA9PiB7XG4gICAgICBzbG90LiRlbG0kLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChzY29wZUlkMiArIFwiLXNcIik7XG4gICAgfSk7XG4gIH1cbiAgaWYgKEJVSUxEMTQuc2hhZG93RG9tICYmIHNoYWRvd1Jvb3QpIHtcbiAgICBsZXQgcm5JZGV4ID0gMDtcbiAgICBjb25zdCBybkxlbiA9IHNoYWRvd1Jvb3ROb2Rlcy5sZW5ndGg7XG4gICAgaWYgKHJuTGVuKSB7XG4gICAgICBmb3IgKHJuSWRleDsgcm5JZGV4IDwgcm5MZW47IHJuSWRleCsrKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBzaGFkb3dSb290Tm9kZXNbcm5JZGV4XTtcbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICBzaGFkb3dSb290LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBBcnJheS5mcm9tKGhvc3RFbG0uY2hpbGROb2RlcykuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBub2RlW1wicy1lblwiXSAhPT0gXCJzdHJpbmdcIiAmJiB0eXBlb2Ygbm9kZVtcInMtc25cIl0gIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSAvKiBFbGVtZW50Tm9kZSAqLyAmJiBub2RlLnNsb3QgJiYgbm9kZS5oaWRkZW4pIHtcbiAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKFwiaGlkZGVuXCIpO1xuICAgICAgICAgIH0gZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gOCAvKiBDb21tZW50Tm9kZSAqLyAmJiAhbm9kZS5ub2RlVmFsdWUgfHwgbm9kZS5ub2RlVHlwZSA9PT0gMyAvKiBUZXh0Tm9kZSAqLyAmJiAhbm9kZS53aG9sZVRleHQudHJpbSgpKSB7XG4gICAgICAgICAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgaG9zdFJlZi4kaG9zdEVsZW1lbnQkID0gaG9zdEVsbTtcbiAgZW5kSHlkcmF0ZSgpO1xufTtcbnZhciBjbGllbnRIeWRyYXRlID0gKHBhcmVudFZOb2RlLCBjaGlsZFJlbmRlck5vZGVzLCBzbG90Tm9kZXMsIHNoYWRvd1Jvb3ROb2RlcywgaG9zdEVsbSwgbm9kZSwgaG9zdElkLCBzbG90dGVkTm9kZXMgPSBbXSkgPT4ge1xuICBsZXQgY2hpbGROb2RlVHlwZTtcbiAgbGV0IGNoaWxkSWRTcGx0O1xuICBsZXQgY2hpbGRWTm9kZTtcbiAgbGV0IGkyO1xuICBjb25zdCBzY29wZUlkMiA9IGhvc3RFbG1bXCJzLXNjXCJdO1xuICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSAvKiBFbGVtZW50Tm9kZSAqLykge1xuICAgIGNoaWxkTm9kZVR5cGUgPSBub2RlLmdldEF0dHJpYnV0ZShIWURSQVRFX0NISUxEX0lEKTtcbiAgICBpZiAoY2hpbGROb2RlVHlwZSkge1xuICAgICAgY2hpbGRJZFNwbHQgPSBjaGlsZE5vZGVUeXBlLnNwbGl0KFwiLlwiKTtcbiAgICAgIGlmIChjaGlsZElkU3BsdFswXSA9PT0gaG9zdElkIHx8IGNoaWxkSWRTcGx0WzBdID09PSBcIjBcIikge1xuICAgICAgICBjaGlsZFZOb2RlID0gY3JlYXRlU2ltcGxlVk5vZGUoe1xuICAgICAgICAgICRmbGFncyQ6IDAsXG4gICAgICAgICAgJGhvc3RJZCQ6IGNoaWxkSWRTcGx0WzBdLFxuICAgICAgICAgICRub2RlSWQkOiBjaGlsZElkU3BsdFsxXSxcbiAgICAgICAgICAkZGVwdGgkOiBjaGlsZElkU3BsdFsyXSxcbiAgICAgICAgICAkaW5kZXgkOiBjaGlsZElkU3BsdFszXSxcbiAgICAgICAgICAkdGFnJDogbm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgJGVsbSQ6IG5vZGUsXG4gICAgICAgICAgLy8gSWYgd2UgZG9uJ3QgYWRkIHRoZSBpbml0aWFsIGNsYXNzZXMgdG8gdGhlIFZOb2RlLCB0aGUgZmlyc3QgYHZkb20tcmVuZGVyLnRzYCBwYXRjaFxuICAgICAgICAgIC8vIHdvbid0IHRyeSB0byByZWNvbmNpbGUgdGhlbS4gQ2xhc3NlcyBzZXQgb24gdGhlIG5vZGUgd2lsbCBiZSBibG93biBhd2F5LlxuICAgICAgICAgICRhdHRycyQ6IHtcbiAgICAgICAgICAgIGNsYXNzOiBub2RlLmNsYXNzTmFtZSB8fCBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY2hpbGRSZW5kZXJOb2Rlcy5wdXNoKGNoaWxkVk5vZGUpO1xuICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShIWURSQVRFX0NISUxEX0lEKTtcbiAgICAgICAgaWYgKCFwYXJlbnRWTm9kZS4kY2hpbGRyZW4kKSB7XG4gICAgICAgICAgcGFyZW50Vk5vZGUuJGNoaWxkcmVuJCA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChCVUlMRDE0LnNjb3BlZCAmJiBzY29wZUlkMiAmJiBjaGlsZElkU3BsdFswXSA9PT0gaG9zdElkKSB7XG4gICAgICAgICAgbm9kZVtcInMtc2lcIl0gPSBzY29wZUlkMjtcbiAgICAgICAgICBjaGlsZFZOb2RlLiRhdHRycyQuY2xhc3MgKz0gXCIgXCIgKyBzY29wZUlkMjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzbG90TmFtZSA9IGNoaWxkVk5vZGUuJGVsbSQuZ2V0QXR0cmlidXRlKFwicy1zblwiKTtcbiAgICAgICAgaWYgKHR5cGVvZiBzbG90TmFtZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgIGlmIChjaGlsZFZOb2RlLiR0YWckID09PSBcInNsb3QtZmJcIikge1xuICAgICAgICAgICAgYWRkU2xvdChzbG90TmFtZSwgY2hpbGRJZFNwbHRbMl0sIGNoaWxkVk5vZGUsIG5vZGUsIHBhcmVudFZOb2RlLCBjaGlsZFJlbmRlck5vZGVzLCBzbG90Tm9kZXMsIHNoYWRvd1Jvb3ROb2Rlcywgc2xvdHRlZE5vZGVzKTtcbiAgICAgICAgICAgIGlmIChCVUlMRDE0LnNjb3BlZCAmJiBzY29wZUlkMikge1xuICAgICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoc2NvcGVJZDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBjaGlsZFZOb2RlLiRlbG0kW1wicy1zblwiXSA9IHNsb3ROYW1lO1xuICAgICAgICAgIGNoaWxkVk5vZGUuJGVsbSQucmVtb3ZlQXR0cmlidXRlKFwicy1zblwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGRWTm9kZS4kaW5kZXgkICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBwYXJlbnRWTm9kZS4kY2hpbGRyZW4kW2NoaWxkVk5vZGUuJGluZGV4JF0gPSBjaGlsZFZOb2RlO1xuICAgICAgICB9XG4gICAgICAgIHBhcmVudFZOb2RlID0gY2hpbGRWTm9kZTtcbiAgICAgICAgaWYgKHNoYWRvd1Jvb3ROb2RlcyAmJiBjaGlsZFZOb2RlLiRkZXB0aCQgPT09IFwiMFwiKSB7XG4gICAgICAgICAgc2hhZG93Um9vdE5vZGVzW2NoaWxkVk5vZGUuJGluZGV4JF0gPSBjaGlsZFZOb2RlLiRlbG0kO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChub2RlLnNoYWRvd1Jvb3QpIHtcbiAgICAgIGZvciAoaTIgPSBub2RlLnNoYWRvd1Jvb3QuY2hpbGROb2Rlcy5sZW5ndGggLSAxOyBpMiA+PSAwOyBpMi0tKSB7XG4gICAgICAgIGNsaWVudEh5ZHJhdGUocGFyZW50Vk5vZGUsIGNoaWxkUmVuZGVyTm9kZXMsIHNsb3ROb2Rlcywgc2hhZG93Um9vdE5vZGVzLCBob3N0RWxtLCBub2RlLnNoYWRvd1Jvb3QuY2hpbGROb2Rlc1tpMl0sIGhvc3RJZCwgc2xvdHRlZE5vZGVzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgbm9uU2hhZG93Tm9kZXMgPSBub2RlLl9fY2hpbGROb2RlcyB8fCBub2RlLmNoaWxkTm9kZXM7XG4gICAgZm9yIChpMiA9IG5vblNoYWRvd05vZGVzLmxlbmd0aCAtIDE7IGkyID49IDA7IGkyLS0pIHtcbiAgICAgIGNsaWVudEh5ZHJhdGUocGFyZW50Vk5vZGUsIGNoaWxkUmVuZGVyTm9kZXMsIHNsb3ROb2Rlcywgc2hhZG93Um9vdE5vZGVzLCBob3N0RWxtLCBub25TaGFkb3dOb2Rlc1tpMl0sIGhvc3RJZCwgc2xvdHRlZE5vZGVzKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gOCAvKiBDb21tZW50Tm9kZSAqLykge1xuICAgIGNoaWxkSWRTcGx0ID0gbm9kZS5ub2RlVmFsdWUuc3BsaXQoXCIuXCIpO1xuICAgIGlmIChjaGlsZElkU3BsdFsxXSA9PT0gaG9zdElkIHx8IGNoaWxkSWRTcGx0WzFdID09PSBcIjBcIikge1xuICAgICAgY2hpbGROb2RlVHlwZSA9IGNoaWxkSWRTcGx0WzBdO1xuICAgICAgY2hpbGRWTm9kZSA9IGNyZWF0ZVNpbXBsZVZOb2RlKHtcbiAgICAgICAgJGhvc3RJZCQ6IGNoaWxkSWRTcGx0WzFdLFxuICAgICAgICAkbm9kZUlkJDogY2hpbGRJZFNwbHRbMl0sXG4gICAgICAgICRkZXB0aCQ6IGNoaWxkSWRTcGx0WzNdLFxuICAgICAgICAkaW5kZXgkOiBjaGlsZElkU3BsdFs0XSB8fCBcIjBcIixcbiAgICAgICAgJGVsbSQ6IG5vZGUsXG4gICAgICAgICRhdHRycyQ6IG51bGwsXG4gICAgICAgICRjaGlsZHJlbiQ6IG51bGwsXG4gICAgICAgICRrZXkkOiBudWxsLFxuICAgICAgICAkbmFtZSQ6IG51bGwsXG4gICAgICAgICR0YWckOiBudWxsLFxuICAgICAgICAkdGV4dCQ6IG51bGxcbiAgICAgIH0pO1xuICAgICAgaWYgKGNoaWxkTm9kZVR5cGUgPT09IFRFWFRfTk9ERV9JRCkge1xuICAgICAgICBjaGlsZFZOb2RlLiRlbG0kID0gZmluZENvcnJlc3BvbmRpbmdOb2RlKG5vZGUsIDMgLyogVGV4dE5vZGUgKi8pO1xuICAgICAgICBpZiAoY2hpbGRWTm9kZS4kZWxtJCAmJiBjaGlsZFZOb2RlLiRlbG0kLm5vZGVUeXBlID09PSAzIC8qIFRleHROb2RlICovKSB7XG4gICAgICAgICAgY2hpbGRWTm9kZS4kdGV4dCQgPSBjaGlsZFZOb2RlLiRlbG0kLnRleHRDb250ZW50O1xuICAgICAgICAgIGNoaWxkUmVuZGVyTm9kZXMucHVzaChjaGlsZFZOb2RlKTtcbiAgICAgICAgICBub2RlLnJlbW92ZSgpO1xuICAgICAgICAgIGlmIChob3N0SWQgPT09IGNoaWxkVk5vZGUuJGhvc3RJZCQpIHtcbiAgICAgICAgICAgIGlmICghcGFyZW50Vk5vZGUuJGNoaWxkcmVuJCkge1xuICAgICAgICAgICAgICBwYXJlbnRWTm9kZS4kY2hpbGRyZW4kID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJlbnRWTm9kZS4kY2hpbGRyZW4kW2NoaWxkVk5vZGUuJGluZGV4JF0gPSBjaGlsZFZOb2RlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc2hhZG93Um9vdE5vZGVzICYmIGNoaWxkVk5vZGUuJGRlcHRoJCA9PT0gXCIwXCIpIHtcbiAgICAgICAgICAgIHNoYWRvd1Jvb3ROb2Rlc1tjaGlsZFZOb2RlLiRpbmRleCRdID0gY2hpbGRWTm9kZS4kZWxtJDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoY2hpbGROb2RlVHlwZSA9PT0gQ09NTUVOVF9OT0RFX0lEKSB7XG4gICAgICAgIGNoaWxkVk5vZGUuJGVsbSQgPSBmaW5kQ29ycmVzcG9uZGluZ05vZGUobm9kZSwgOCAvKiBDb21tZW50Tm9kZSAqLyk7XG4gICAgICAgIGlmIChjaGlsZFZOb2RlLiRlbG0kICYmIGNoaWxkVk5vZGUuJGVsbSQubm9kZVR5cGUgPT09IDggLyogQ29tbWVudE5vZGUgKi8pIHtcbiAgICAgICAgICBjaGlsZFJlbmRlck5vZGVzLnB1c2goY2hpbGRWTm9kZSk7XG4gICAgICAgICAgbm9kZS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChjaGlsZFZOb2RlLiRob3N0SWQkID09PSBob3N0SWQpIHtcbiAgICAgICAgaWYgKGNoaWxkTm9kZVR5cGUgPT09IFNMT1RfTk9ERV9JRCkge1xuICAgICAgICAgIGNvbnN0IHNsb3ROYW1lID0gbm9kZVtcInMtc25cIl0gPSBjaGlsZElkU3BsdFs1XSB8fCBcIlwiO1xuICAgICAgICAgIGFkZFNsb3Qoc2xvdE5hbWUsIGNoaWxkSWRTcGx0WzJdLCBjaGlsZFZOb2RlLCBub2RlLCBwYXJlbnRWTm9kZSwgY2hpbGRSZW5kZXJOb2Rlcywgc2xvdE5vZGVzLCBzaGFkb3dSb290Tm9kZXMsIHNsb3R0ZWROb2Rlcyk7XG4gICAgICAgIH0gZWxzZSBpZiAoY2hpbGROb2RlVHlwZSA9PT0gQ09OVEVOVF9SRUZfSUQpIHtcbiAgICAgICAgICBpZiAoQlVJTEQxNC5zaGFkb3dEb20gJiYgc2hhZG93Um9vdE5vZGVzKSB7XG4gICAgICAgICAgICBub2RlLnJlbW92ZSgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoQlVJTEQxNC5zbG90UmVsb2NhdGlvbikge1xuICAgICAgICAgICAgaG9zdEVsbVtcInMtY3JcIl0gPSBub2RlO1xuICAgICAgICAgICAgbm9kZVtcInMtY25cIl0gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChwYXJlbnRWTm9kZSAmJiBwYXJlbnRWTm9kZS4kdGFnJCA9PT0gXCJzdHlsZVwiKSB7XG4gICAgY29uc3Qgdm5vZGUgPSBuZXdWTm9kZShudWxsLCBub2RlLnRleHRDb250ZW50KTtcbiAgICB2bm9kZS4kZWxtJCA9IG5vZGU7XG4gICAgdm5vZGUuJGluZGV4JCA9IFwiMFwiO1xuICAgIHBhcmVudFZOb2RlLiRjaGlsZHJlbiQgPSBbdm5vZGVdO1xuICB9IGVsc2Uge1xuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAzIC8qIFRleHROb2RlICovICYmICFub2RlLndob2xlVGV4dC50cmltKCkgJiYgIW5vZGVbXCJzLW5yXCJdKSB7XG4gICAgICBub2RlLnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcGFyZW50Vk5vZGU7XG59O1xudmFyIGluaXRpYWxpemVEb2N1bWVudEh5ZHJhdGUgPSAobm9kZSwgb3JnTG9jTm9kZXMpID0+IHtcbiAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEgLyogRWxlbWVudE5vZGUgKi8pIHtcbiAgICBjb25zdCBjb21wb25lbnRJZCA9IG5vZGVbSFlEUkFURV9JRF0gfHwgbm9kZS5nZXRBdHRyaWJ1dGUoSFlEUkFURV9JRCk7XG4gICAgaWYgKGNvbXBvbmVudElkKSB7XG4gICAgICBvcmdMb2NOb2Rlcy5zZXQoY29tcG9uZW50SWQsIG5vZGUpO1xuICAgIH1cbiAgICBsZXQgaTIgPSAwO1xuICAgIGlmIChub2RlLnNoYWRvd1Jvb3QpIHtcbiAgICAgIGZvciAoOyBpMiA8IG5vZGUuc2hhZG93Um9vdC5jaGlsZE5vZGVzLmxlbmd0aDsgaTIrKykge1xuICAgICAgICBpbml0aWFsaXplRG9jdW1lbnRIeWRyYXRlKG5vZGUuc2hhZG93Um9vdC5jaGlsZE5vZGVzW2kyXSwgb3JnTG9jTm9kZXMpO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBub25TaGFkb3dOb2RlcyA9IG5vZGUuX19jaGlsZE5vZGVzIHx8IG5vZGUuY2hpbGROb2RlcztcbiAgICBmb3IgKGkyID0gMDsgaTIgPCBub25TaGFkb3dOb2Rlcy5sZW5ndGg7IGkyKyspIHtcbiAgICAgIGluaXRpYWxpemVEb2N1bWVudEh5ZHJhdGUobm9uU2hhZG93Tm9kZXNbaTJdLCBvcmdMb2NOb2Rlcyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IDggLyogQ29tbWVudE5vZGUgKi8pIHtcbiAgICBjb25zdCBjaGlsZElkU3BsdCA9IG5vZGUubm9kZVZhbHVlLnNwbGl0KFwiLlwiKTtcbiAgICBpZiAoY2hpbGRJZFNwbHRbMF0gPT09IE9SR19MT0NBVElPTl9JRCkge1xuICAgICAgb3JnTG9jTm9kZXMuc2V0KGNoaWxkSWRTcGx0WzFdICsgXCIuXCIgKyBjaGlsZElkU3BsdFsyXSwgbm9kZSk7XG4gICAgICBub2RlLm5vZGVWYWx1ZSA9IFwiXCI7XG4gICAgICBub2RlW1wicy1lblwiXSA9IGNoaWxkSWRTcGx0WzNdO1xuICAgIH1cbiAgfVxufTtcbnZhciBjcmVhdGVTaW1wbGVWTm9kZSA9IHZub2RlID0+IHtcbiAgY29uc3QgZGVmYXVsdFZOb2RlID0ge1xuICAgICRmbGFncyQ6IDAsXG4gICAgJGhvc3RJZCQ6IG51bGwsXG4gICAgJG5vZGVJZCQ6IG51bGwsXG4gICAgJGRlcHRoJDogbnVsbCxcbiAgICAkaW5kZXgkOiBcIjBcIixcbiAgICAkZWxtJDogbnVsbCxcbiAgICAkYXR0cnMkOiBudWxsLFxuICAgICRjaGlsZHJlbiQ6IG51bGwsXG4gICAgJGtleSQ6IG51bGwsXG4gICAgJG5hbWUkOiBudWxsLFxuICAgICR0YWckOiBudWxsLFxuICAgICR0ZXh0JDogbnVsbFxuICB9O1xuICByZXR1cm4ge1xuICAgIC4uLmRlZmF1bHRWTm9kZSxcbiAgICAuLi52bm9kZVxuICB9O1xufTtcbmZ1bmN0aW9uIGFkZFNsb3Qoc2xvdE5hbWUsIHNsb3RJZCwgY2hpbGRWTm9kZSwgbm9kZSwgcGFyZW50Vk5vZGUsIGNoaWxkUmVuZGVyTm9kZXMsIHNsb3ROb2Rlcywgc2hhZG93Um9vdE5vZGVzLCBzbG90dGVkTm9kZXMpIHtcbiAgbm9kZVtcInMtc3JcIl0gPSB0cnVlO1xuICBjaGlsZFZOb2RlLiRuYW1lJCA9IHNsb3ROYW1lIHx8IG51bGw7XG4gIGNoaWxkVk5vZGUuJHRhZyQgPSBcInNsb3RcIjtcbiAgY29uc3QgcGFyZW50Tm9kZUlkID0gKHBhcmVudFZOb2RlID09IG51bGwgPyB2b2lkIDAgOiBwYXJlbnRWTm9kZS4kZWxtJCkgPyBwYXJlbnRWTm9kZS4kZWxtJFtcInMtaWRcIl0gfHwgcGFyZW50Vk5vZGUuJGVsbSQuZ2V0QXR0cmlidXRlKFwicy1pZFwiKSA6IFwiXCI7XG4gIGlmIChCVUlMRDE0LnNoYWRvd0RvbSAmJiBzaGFkb3dSb290Tm9kZXMgJiYgd2luLmRvY3VtZW50KSB7XG4gICAgY29uc3Qgc2xvdCA9IGNoaWxkVk5vZGUuJGVsbSQgPSB3aW4uZG9jdW1lbnQuY3JlYXRlRWxlbWVudChjaGlsZFZOb2RlLiR0YWckKTtcbiAgICBpZiAoY2hpbGRWTm9kZS4kbmFtZSQpIHtcbiAgICAgIGNoaWxkVk5vZGUuJGVsbSQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBzbG90TmFtZSk7XG4gICAgfVxuICAgIGlmIChwYXJlbnRWTm9kZS4kZWxtJC5zaGFkb3dSb290ICYmIHBhcmVudE5vZGVJZCAmJiBwYXJlbnROb2RlSWQgIT09IGNoaWxkVk5vZGUuJGhvc3RJZCQpIHtcbiAgICAgIGludGVybmFsQ2FsbChwYXJlbnRWTm9kZS4kZWxtJCwgXCJpbnNlcnRCZWZvcmVcIikoc2xvdCwgaW50ZXJuYWxDYWxsKHBhcmVudFZOb2RlLiRlbG0kLCBcImNoaWxkcmVuXCIpWzBdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW50ZXJuYWxDYWxsKGludGVybmFsQ2FsbChub2RlLCBcInBhcmVudE5vZGVcIiksIFwiaW5zZXJ0QmVmb3JlXCIpKHNsb3QsIG5vZGUpO1xuICAgIH1cbiAgICBhZGRTbG90dGVkTm9kZXMoc2xvdHRlZE5vZGVzLCBzbG90SWQsIHNsb3ROYW1lLCBub2RlLCBjaGlsZFZOb2RlLiRob3N0SWQkKTtcbiAgICBub2RlLnJlbW92ZSgpO1xuICAgIGlmIChjaGlsZFZOb2RlLiRkZXB0aCQgPT09IFwiMFwiKSB7XG4gICAgICBzaGFkb3dSb290Tm9kZXNbY2hpbGRWTm9kZS4kaW5kZXgkXSA9IGNoaWxkVk5vZGUuJGVsbSQ7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHNsb3QgPSBjaGlsZFZOb2RlLiRlbG0kO1xuICAgIGNvbnN0IHNob3VsZE1vdmUgPSBwYXJlbnROb2RlSWQgJiYgcGFyZW50Tm9kZUlkICE9PSBjaGlsZFZOb2RlLiRob3N0SWQkICYmIHBhcmVudFZOb2RlLiRlbG0kLnNoYWRvd1Jvb3Q7XG4gICAgYWRkU2xvdHRlZE5vZGVzKHNsb3R0ZWROb2Rlcywgc2xvdElkLCBzbG90TmFtZSwgbm9kZSwgc2hvdWxkTW92ZSA/IHBhcmVudE5vZGVJZCA6IGNoaWxkVk5vZGUuJGhvc3RJZCQpO1xuICAgIHBhdGNoU2xvdE5vZGUobm9kZSk7XG4gICAgaWYgKHNob3VsZE1vdmUpIHtcbiAgICAgIHBhcmVudFZOb2RlLiRlbG0kLmluc2VydEJlZm9yZShzbG90LCBwYXJlbnRWTm9kZS4kZWxtJC5jaGlsZHJlblswXSk7XG4gICAgfVxuICB9XG4gIGNoaWxkUmVuZGVyTm9kZXMucHVzaChjaGlsZFZOb2RlKTtcbiAgc2xvdE5vZGVzLnB1c2goY2hpbGRWTm9kZSk7XG4gIGlmICghcGFyZW50Vk5vZGUuJGNoaWxkcmVuJCkge1xuICAgIHBhcmVudFZOb2RlLiRjaGlsZHJlbiQgPSBbXTtcbiAgfVxuICBwYXJlbnRWTm9kZS4kY2hpbGRyZW4kW2NoaWxkVk5vZGUuJGluZGV4JF0gPSBjaGlsZFZOb2RlO1xufVxudmFyIGFkZFNsb3R0ZWROb2RlcyA9IChzbG90dGVkTm9kZXMsIHNsb3ROb2RlSWQsIHNsb3ROYW1lLCBzbG90Tm9kZSwgaG9zdElkKSA9PiB7XG4gIHZhciBfYSwgX2I7XG4gIGxldCBzbG90dGVkTm9kZSA9IHNsb3ROb2RlLm5leHRTaWJsaW5nO1xuICBzbG90dGVkTm9kZXNbc2xvdE5vZGVJZF0gPSBzbG90dGVkTm9kZXNbc2xvdE5vZGVJZF0gfHwgW107XG4gIGlmICghc2xvdHRlZE5vZGUgfHwgKChfYSA9IHNsb3R0ZWROb2RlLm5vZGVWYWx1ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLnN0YXJ0c1dpdGgoU0xPVF9OT0RFX0lEICsgXCIuXCIpKSkgcmV0dXJuO1xuICBkbyB7XG4gICAgaWYgKHNsb3R0ZWROb2RlICYmICgoc2xvdHRlZE5vZGVbXCJnZXRBdHRyaWJ1dGVcIl0gJiYgc2xvdHRlZE5vZGUuZ2V0QXR0cmlidXRlKFwic2xvdFwiKSB8fCBzbG90dGVkTm9kZVtcInMtc25cIl0pID09PSBzbG90TmFtZSB8fCBzbG90TmFtZSA9PT0gXCJcIiAmJiAhc2xvdHRlZE5vZGVbXCJzLXNuXCJdICYmICghc2xvdHRlZE5vZGVbXCJnZXRBdHRyaWJ1dGVcIl0gfHwgIXNsb3R0ZWROb2RlLmdldEF0dHJpYnV0ZShcInNsb3RcIikpICYmIChzbG90dGVkTm9kZS5ub2RlVHlwZSA9PT0gOCAvKiBDb21tZW50Tm9kZSAqLyB8fCBzbG90dGVkTm9kZS5ub2RlVHlwZSA9PT0gMyAvKiBUZXh0Tm9kZSAqLykpKSB7XG4gICAgICBzbG90dGVkTm9kZVtcInMtc25cIl0gPSBzbG90TmFtZTtcbiAgICAgIHNsb3R0ZWROb2Rlc1tzbG90Tm9kZUlkXS5wdXNoKHtcbiAgICAgICAgc2xvdDogc2xvdE5vZGUsXG4gICAgICAgIG5vZGU6IHNsb3R0ZWROb2RlLFxuICAgICAgICBob3N0SWRcbiAgICAgIH0pO1xuICAgIH1cbiAgICBzbG90dGVkTm9kZSA9IHNsb3R0ZWROb2RlID09IG51bGwgPyB2b2lkIDAgOiBzbG90dGVkTm9kZS5uZXh0U2libGluZztcbiAgfSB3aGlsZSAoc2xvdHRlZE5vZGUgJiYgISgoX2IgPSBzbG90dGVkTm9kZS5ub2RlVmFsdWUpID09IG51bGwgPyB2b2lkIDAgOiBfYi5zdGFydHNXaXRoKFNMT1RfTk9ERV9JRCArIFwiLlwiKSkpO1xufTtcbnZhciBmaW5kQ29ycmVzcG9uZGluZ05vZGUgPSAobm9kZSwgdHlwZSkgPT4ge1xuICBsZXQgc2libGluZyA9IG5vZGU7XG4gIGRvIHtcbiAgICBzaWJsaW5nID0gc2libGluZy5uZXh0U2libGluZztcbiAgfSB3aGlsZSAoc2libGluZyAmJiAoc2libGluZy5ub2RlVHlwZSAhPT0gdHlwZSB8fCAhc2libGluZy5ub2RlVmFsdWUpKTtcbiAgcmV0dXJuIHNpYmxpbmc7XG59O1xuXG4vLyBzcmMvcnVudGltZS9pbml0aWFsaXplLWNvbXBvbmVudC50c1xuaW1wb3J0IHsgQlVJTEQgYXMgQlVJTEQyNCB9IGZyb20gXCJAc3RlbmNpbC9jb3JlL2ludGVybmFsL2FwcC1kYXRhXCI7XG5cbi8vIHNyYy91dGlscy9zaGFkb3ctY3NzLnRzXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICpcbiAqIFRoaXMgZmlsZSBpcyBhIHBvcnQgb2Ygc2hhZG93Q1NTIGZyb20gYHdlYmNvbXBvbmVudHMuanNgIHRvIFR5cGVTY3JpcHQuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vd2ViY29tcG9uZW50cy93ZWJjb21wb25lbnRzanMvYmxvYi80ZWZlY2Q3ZTBlL3NyYy9TaGFkb3dDU1MvU2hhZG93Q1NTLmpzXG4gKiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvbWFzdGVyL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zaGFkb3dfY3NzLnRzXG4gKi9cbnZhciBzYWZlU2VsZWN0b3IgPSBzZWxlY3RvciA9PiB7XG4gIGNvbnN0IHBsYWNlaG9sZGVycyA9IFtdO1xuICBsZXQgaW5kZXggPSAwO1xuICBzZWxlY3RvciA9IHNlbGVjdG9yLnJlcGxhY2UoLyhcXFtcXHMqcGFydH49XFxzKihcIlteXCJdKlwifCdbXiddKicpXFxzKlxcXSkvZywgKF8sIGtlZXApID0+IHtcbiAgICBjb25zdCByZXBsYWNlQnkgPSBgX19wYXJ0LSR7aW5kZXh9X19gO1xuICAgIHBsYWNlaG9sZGVycy5wdXNoKGtlZXApO1xuICAgIGluZGV4Kys7XG4gICAgcmV0dXJuIHJlcGxhY2VCeTtcbiAgfSk7XG4gIHNlbGVjdG9yID0gc2VsZWN0b3IucmVwbGFjZSgvKFxcW1teXFxdXSpcXF0pL2csIChfLCBrZWVwKSA9PiB7XG4gICAgY29uc3QgcmVwbGFjZUJ5ID0gYF9fcGgtJHtpbmRleH1fX2A7XG4gICAgcGxhY2Vob2xkZXJzLnB1c2goa2VlcCk7XG4gICAgaW5kZXgrKztcbiAgICByZXR1cm4gcmVwbGFjZUJ5O1xuICB9KTtcbiAgY29uc3QgY29udGVudCA9IHNlbGVjdG9yLnJlcGxhY2UoLyg6bnRoLVstXFx3XSspKFxcKFteKV0rXFwpKS9nLCAoXywgcHNldWRvLCBleHApID0+IHtcbiAgICBjb25zdCByZXBsYWNlQnkgPSBgX19waC0ke2luZGV4fV9fYDtcbiAgICBwbGFjZWhvbGRlcnMucHVzaChleHApO1xuICAgIGluZGV4Kys7XG4gICAgcmV0dXJuIHBzZXVkbyArIHJlcGxhY2VCeTtcbiAgfSk7XG4gIGNvbnN0IHNzID0ge1xuICAgIGNvbnRlbnQsXG4gICAgcGxhY2Vob2xkZXJzXG4gIH07XG4gIHJldHVybiBzcztcbn07XG52YXIgcmVzdG9yZVNhZmVTZWxlY3RvciA9IChwbGFjZWhvbGRlcnMsIGNvbnRlbnQpID0+IHtcbiAgY29udGVudCA9IGNvbnRlbnQucmVwbGFjZSgvX19wYXJ0LShcXGQrKV9fL2csIChfLCBpbmRleCkgPT4gcGxhY2Vob2xkZXJzWytpbmRleF0pO1xuICByZXR1cm4gY29udGVudC5yZXBsYWNlKC9fX3BoLShcXGQrKV9fL2csIChfLCBpbmRleCkgPT4gcGxhY2Vob2xkZXJzWytpbmRleF0pO1xufTtcbnZhciBfcG9seWZpbGxIb3N0ID0gXCItc2hhZG93Y3NzaG9zdFwiO1xudmFyIF9wb2x5ZmlsbFNsb3R0ZWQgPSBcIi1zaGFkb3djc3NzbG90dGVkXCI7XG52YXIgX3BvbHlmaWxsSG9zdENvbnRleHQgPSBcIi1zaGFkb3djc3Njb250ZXh0XCI7XG52YXIgX3BhcmVuU3VmZml4ID0gXCIpKD86XFxcXCgoKD86XFxcXChbXikoXSpcXFxcKXxbXikoXSopKz8pXFxcXCkpPyhbXix7XSopXCI7XG52YXIgX2Nzc0NvbG9uSG9zdFJlID0gbmV3IFJlZ0V4cChcIihcIiArIF9wb2x5ZmlsbEhvc3QgKyBfcGFyZW5TdWZmaXgsIFwiZ2ltXCIpO1xudmFyIF9jc3NDb2xvbkhvc3RDb250ZXh0UmUgPSBuZXcgUmVnRXhwKFwiKFwiICsgX3BvbHlmaWxsSG9zdENvbnRleHQgKyBfcGFyZW5TdWZmaXgsIFwiZ2ltXCIpO1xudmFyIF9jc3NDb2xvblNsb3R0ZWRSZSA9IG5ldyBSZWdFeHAoXCIoXCIgKyBfcG9seWZpbGxTbG90dGVkICsgX3BhcmVuU3VmZml4LCBcImdpbVwiKTtcbnZhciBfcG9seWZpbGxIb3N0Tm9Db21iaW5hdG9yID0gX3BvbHlmaWxsSG9zdCArIFwiLW5vLWNvbWJpbmF0b3JcIjtcbnZhciBfcG9seWZpbGxIb3N0Tm9Db21iaW5hdG9yUmUgPSAvLXNoYWRvd2Nzc2hvc3Qtbm8tY29tYmluYXRvcihbXlxcc10qKS87XG52YXIgX3NoYWRvd0RPTVNlbGVjdG9yc1JlID0gWy86OnNoYWRvdy9nLCAvOjpjb250ZW50L2ddO1xudmFyIF9zYWZlUGFydFJlID0gL19fcGFydC0oXFxkKylfXy9nO1xudmFyIF9zZWxlY3RvclJlU3VmZml4ID0gXCIoWz5cXFxcc34rWy4sezpdW1xcXFxzXFxcXFNdKik/JFwiO1xudmFyIF9wb2x5ZmlsbEhvc3RSZSA9IC8tc2hhZG93Y3NzaG9zdC9naW07XG52YXIgY3JlYXRlU3VwcG9ydHNSdWxlUmUgPSBzZWxlY3RvciA9PiB7XG4gIGNvbnN0IHNhZmVTZWxlY3RvcjIgPSBlc2NhcGVSZWdFeHBTcGVjaWFsQ2hhcmFjdGVycyhzZWxlY3Rvcik7XG4gIHJldHVybiBuZXcgUmVnRXhwKFxuICAvLyBGaXJzdCBjYXB0dXJlIGdyb3VwOiBtYXRjaCBhbnkgY29udGV4dCBiZWZvcmUgdGhlIHNlbGVjdG9yIHRoYXQncyBub3QgaW5zaWRlIEBzdXBwb3J0cyBzZWxlY3RvcigpXG4gIC8vIFVzaW5nIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBhdm9pZCBtYXRjaGluZyBpbnNpZGUgQHN1cHBvcnRzIHNlbGVjdG9yKC4uLikgY29uZGl0aW9uXG4gIGAoXnxbXkBdfEAoPyFzdXBwb3J0c1xcXFxzK3NlbGVjdG9yXFxcXHMqXFxcXChbXntdKj8ke3NhZmVTZWxlY3RvcjJ9KSkoJHtzYWZlU2VsZWN0b3IyfVxcXFxiKWAsIFwiZ1wiKTtcbn07XG52YXIgX2NvbG9uU2xvdHRlZFJlID0gY3JlYXRlU3VwcG9ydHNSdWxlUmUoXCI6OnNsb3R0ZWRcIik7XG52YXIgX2NvbG9uSG9zdFJlID0gY3JlYXRlU3VwcG9ydHNSdWxlUmUoXCI6aG9zdFwiKTtcbnZhciBfY29sb25Ib3N0Q29udGV4dFJlID0gY3JlYXRlU3VwcG9ydHNSdWxlUmUoXCI6aG9zdC1jb250ZXh0XCIpO1xudmFyIF9jb21tZW50UmUgPSAvXFwvXFwqXFxzKltcXHNcXFNdKj9cXCpcXC8vZztcbnZhciBzdHJpcENvbW1lbnRzID0gaW5wdXQgPT4ge1xuICByZXR1cm4gaW5wdXQucmVwbGFjZShfY29tbWVudFJlLCBcIlwiKTtcbn07XG52YXIgX2NvbW1lbnRXaXRoSGFzaFJlID0gL1xcL1xcKlxccyojXFxzKnNvdXJjZShNYXBwaW5nKT9VUkw9W1xcc1xcU10rP1xcKlxcLy9nO1xudmFyIGV4dHJhY3RDb21tZW50c1dpdGhIYXNoID0gaW5wdXQgPT4ge1xuICByZXR1cm4gaW5wdXQubWF0Y2goX2NvbW1lbnRXaXRoSGFzaFJlKSB8fCBbXTtcbn07XG52YXIgX3J1bGVSZSA9IC8oXFxzKikoW147XFx7XFx9XSs/KShcXHMqKSgoPzp7JUJMT0NLJX0/XFxzKjs/KXwoPzpcXHMqOykpL2c7XG52YXIgX2N1cmx5UmUgPSAvKFt7fV0pL2c7XG52YXIgX3NlbGVjdG9yUGFydHNSZSA9IC8oXi4qP1teXFxcXF0pPz8oKDorKSguKil8JCkvO1xudmFyIE9QRU5fQ1VSTFkgPSBcIntcIjtcbnZhciBDTE9TRV9DVVJMWSA9IFwifVwiO1xudmFyIEJMT0NLX1BMQUNFSE9MREVSID0gXCIlQkxPQ0slXCI7XG52YXIgcHJvY2Vzc1J1bGVzID0gKGlucHV0LCBydWxlQ2FsbGJhY2spID0+IHtcbiAgY29uc3QgaW5wdXRXaXRoRXNjYXBlZEJsb2NrcyA9IGVzY2FwZUJsb2NrcyhpbnB1dCk7XG4gIGxldCBuZXh0QmxvY2tJbmRleCA9IDA7XG4gIHJldHVybiBpbnB1dFdpdGhFc2NhcGVkQmxvY2tzLmVzY2FwZWRTdHJpbmcucmVwbGFjZShfcnVsZVJlLCAoLi4ubSkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gbVsyXTtcbiAgICBsZXQgY29udGVudCA9IFwiXCI7XG4gICAgbGV0IHN1ZmZpeCA9IG1bNF07XG4gICAgbGV0IGNvbnRlbnRQcmVmaXggPSBcIlwiO1xuICAgIGlmIChzdWZmaXggJiYgc3VmZml4LnN0YXJ0c1dpdGgoXCJ7XCIgKyBCTE9DS19QTEFDRUhPTERFUikpIHtcbiAgICAgIGNvbnRlbnQgPSBpbnB1dFdpdGhFc2NhcGVkQmxvY2tzLmJsb2Nrc1tuZXh0QmxvY2tJbmRleCsrXTtcbiAgICAgIHN1ZmZpeCA9IHN1ZmZpeC5zdWJzdHJpbmcoQkxPQ0tfUExBQ0VIT0xERVIubGVuZ3RoICsgMSk7XG4gICAgICBjb250ZW50UHJlZml4ID0gXCJ7XCI7XG4gICAgfVxuICAgIGNvbnN0IGNzc1J1bGUgPSB7XG4gICAgICBzZWxlY3RvcixcbiAgICAgIGNvbnRlbnRcbiAgICB9O1xuICAgIGNvbnN0IHJ1bGUgPSBydWxlQ2FsbGJhY2soY3NzUnVsZSk7XG4gICAgcmV0dXJuIGAke21bMV19JHtydWxlLnNlbGVjdG9yfSR7bVszXX0ke2NvbnRlbnRQcmVmaXh9JHtydWxlLmNvbnRlbnR9JHtzdWZmaXh9YDtcbiAgfSk7XG59O1xudmFyIGVzY2FwZUJsb2NrcyA9IGlucHV0ID0+IHtcbiAgY29uc3QgaW5wdXRQYXJ0cyA9IGlucHV0LnNwbGl0KF9jdXJseVJlKTtcbiAgY29uc3QgcmVzdWx0UGFydHMgPSBbXTtcbiAgY29uc3QgZXNjYXBlZEJsb2NrcyA9IFtdO1xuICBsZXQgYnJhY2tldENvdW50ID0gMDtcbiAgbGV0IGN1cnJlbnRCbG9ja1BhcnRzID0gW107XG4gIGZvciAobGV0IHBhcnRJbmRleCA9IDA7IHBhcnRJbmRleCA8IGlucHV0UGFydHMubGVuZ3RoOyBwYXJ0SW5kZXgrKykge1xuICAgIGNvbnN0IHBhcnQgPSBpbnB1dFBhcnRzW3BhcnRJbmRleF07XG4gICAgaWYgKHBhcnQgPT09IENMT1NFX0NVUkxZKSB7XG4gICAgICBicmFja2V0Q291bnQtLTtcbiAgICB9XG4gICAgaWYgKGJyYWNrZXRDb3VudCA+IDApIHtcbiAgICAgIGN1cnJlbnRCbG9ja1BhcnRzLnB1c2gocGFydCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjdXJyZW50QmxvY2tQYXJ0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGVzY2FwZWRCbG9ja3MucHVzaChjdXJyZW50QmxvY2tQYXJ0cy5qb2luKFwiXCIpKTtcbiAgICAgICAgcmVzdWx0UGFydHMucHVzaChCTE9DS19QTEFDRUhPTERFUik7XG4gICAgICAgIGN1cnJlbnRCbG9ja1BhcnRzID0gW107XG4gICAgICB9XG4gICAgICByZXN1bHRQYXJ0cy5wdXNoKHBhcnQpO1xuICAgIH1cbiAgICBpZiAocGFydCA9PT0gT1BFTl9DVVJMWSkge1xuICAgICAgYnJhY2tldENvdW50Kys7XG4gICAgfVxuICB9XG4gIGlmIChjdXJyZW50QmxvY2tQYXJ0cy5sZW5ndGggPiAwKSB7XG4gICAgZXNjYXBlZEJsb2Nrcy5wdXNoKGN1cnJlbnRCbG9ja1BhcnRzLmpvaW4oXCJcIikpO1xuICAgIHJlc3VsdFBhcnRzLnB1c2goQkxPQ0tfUExBQ0VIT0xERVIpO1xuICB9XG4gIGNvbnN0IHN0ckVzY2FwZWRCbG9ja3MgPSB7XG4gICAgZXNjYXBlZFN0cmluZzogcmVzdWx0UGFydHMuam9pbihcIlwiKSxcbiAgICBibG9ja3M6IGVzY2FwZWRCbG9ja3NcbiAgfTtcbiAgcmV0dXJuIHN0ckVzY2FwZWRCbG9ja3M7XG59O1xudmFyIGluc2VydFBvbHlmaWxsSG9zdEluQ3NzVGV4dCA9IGNzc1RleHQgPT4ge1xuICBjb25zdCBzdXBwb3J0c0Jsb2NrcyA9IFtdO1xuICBjc3NUZXh0ID0gY3NzVGV4dC5yZXBsYWNlKC9Ac3VwcG9ydHNcXHMrc2VsZWN0b3JcXHMqXFwoXFxzKihbXildKilcXHMqXFwpL2csIChfLCBzZWxlY3RvckNvbnRlbnQpID0+IHtcbiAgICBjb25zdCBwbGFjZWhvbGRlciA9IGBfX3N1cHBvcnRzXyR7c3VwcG9ydHNCbG9ja3MubGVuZ3RofV9fYDtcbiAgICBzdXBwb3J0c0Jsb2Nrcy5wdXNoKHNlbGVjdG9yQ29udGVudCk7XG4gICAgcmV0dXJuIGBAc3VwcG9ydHMgc2VsZWN0b3IoJHtwbGFjZWhvbGRlcn0pYDtcbiAgfSk7XG4gIGNzc1RleHQgPSBjc3NUZXh0LnJlcGxhY2UoX2NvbG9uSG9zdENvbnRleHRSZSwgYCQxJHtfcG9seWZpbGxIb3N0Q29udGV4dH1gKS5yZXBsYWNlKF9jb2xvbkhvc3RSZSwgYCQxJHtfcG9seWZpbGxIb3N0fWApLnJlcGxhY2UoX2NvbG9uU2xvdHRlZFJlLCBgJDEke19wb2x5ZmlsbFNsb3R0ZWR9YCk7XG4gIHN1cHBvcnRzQmxvY2tzLmZvckVhY2goKG9yaWdpbmFsU2VsZWN0b3IsIGluZGV4KSA9PiB7XG4gICAgY3NzVGV4dCA9IGNzc1RleHQucmVwbGFjZShgX19zdXBwb3J0c18ke2luZGV4fV9fYCwgb3JpZ2luYWxTZWxlY3Rvcik7XG4gIH0pO1xuICByZXR1cm4gY3NzVGV4dDtcbn07XG52YXIgY29udmVydENvbG9uUnVsZSA9IChjc3NUZXh0LCByZWdFeHAsIHBhcnRSZXBsYWNlcikgPT4ge1xuICByZXR1cm4gY3NzVGV4dC5yZXBsYWNlKHJlZ0V4cCwgKC4uLm0pID0+IHtcbiAgICBpZiAobVsyXSkge1xuICAgICAgY29uc3QgcGFydHMgPSBtWzJdLnNwbGl0KFwiLFwiKTtcbiAgICAgIGNvbnN0IHIgPSBbXTtcbiAgICAgIGZvciAobGV0IGkyID0gMDsgaTIgPCBwYXJ0cy5sZW5ndGg7IGkyKyspIHtcbiAgICAgICAgY29uc3QgcCA9IHBhcnRzW2kyXS50cmltKCk7XG4gICAgICAgIGlmICghcCkgYnJlYWs7XG4gICAgICAgIHIucHVzaChwYXJ0UmVwbGFjZXIoX3BvbHlmaWxsSG9zdE5vQ29tYmluYXRvciwgcCwgbVszXSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHIuam9pbihcIixcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBfcG9seWZpbGxIb3N0Tm9Db21iaW5hdG9yICsgbVszXTtcbiAgICB9XG4gIH0pO1xufTtcbnZhciBjb2xvbkhvc3RQYXJ0UmVwbGFjZXIgPSAoaG9zdCwgcGFydCwgc3VmZml4KSA9PiB7XG4gIHJldHVybiBob3N0ICsgcGFydC5yZXBsYWNlKF9wb2x5ZmlsbEhvc3QsIFwiXCIpICsgc3VmZml4O1xufTtcbnZhciBjb252ZXJ0Q29sb25Ib3N0ID0gY3NzVGV4dCA9PiB7XG4gIHJldHVybiBjb252ZXJ0Q29sb25SdWxlKGNzc1RleHQsIF9jc3NDb2xvbkhvc3RSZSwgY29sb25Ib3N0UGFydFJlcGxhY2VyKTtcbn07XG52YXIgY29sb25Ib3N0Q29udGV4dFBhcnRSZXBsYWNlciA9IChob3N0LCBwYXJ0LCBzdWZmaXgpID0+IHtcbiAgaWYgKHBhcnQuaW5kZXhPZihfcG9seWZpbGxIb3N0KSA+IC0xKSB7XG4gICAgcmV0dXJuIGNvbG9uSG9zdFBhcnRSZXBsYWNlcihob3N0LCBwYXJ0LCBzdWZmaXgpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBob3N0ICsgcGFydCArIHN1ZmZpeCArIFwiLCBcIiArIHBhcnQgKyBcIiBcIiArIGhvc3QgKyBzdWZmaXg7XG4gIH1cbn07XG52YXIgY29udmVydENvbG9uU2xvdHRlZCA9IChjc3NUZXh0LCBzbG90U2NvcGVJZCkgPT4ge1xuICBjb25zdCBzbG90Q2xhc3MgPSBcIi5cIiArIHNsb3RTY29wZUlkICsgXCIgPiBcIjtcbiAgY29uc3Qgc2VsZWN0b3JzID0gW107XG4gIGNzc1RleHQgPSBjc3NUZXh0LnJlcGxhY2UoX2Nzc0NvbG9uU2xvdHRlZFJlLCAoLi4ubSkgPT4ge1xuICAgIGlmIChtWzJdKSB7XG4gICAgICBjb25zdCBjb21wb3VuZCA9IG1bMl0udHJpbSgpO1xuICAgICAgY29uc3Qgc3VmZml4ID0gbVszXTtcbiAgICAgIGNvbnN0IHNsb3R0ZWRTZWxlY3RvciA9IHNsb3RDbGFzcyArIGNvbXBvdW5kICsgc3VmZml4O1xuICAgICAgbGV0IHByZWZpeFNlbGVjdG9yID0gXCJcIjtcbiAgICAgIGZvciAobGV0IGkyID0gbVs0XSAtIDE7IGkyID49IDA7IGkyLS0pIHtcbiAgICAgICAgY29uc3QgY2hhciA9IG1bNV1baTJdO1xuICAgICAgICBpZiAoY2hhciA9PT0gXCJ9XCIgfHwgY2hhciA9PT0gXCIsXCIpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBwcmVmaXhTZWxlY3RvciA9IGNoYXIgKyBwcmVmaXhTZWxlY3RvcjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG9yZ1NlbGVjdG9yID0gKHByZWZpeFNlbGVjdG9yICsgc2xvdHRlZFNlbGVjdG9yKS50cmltKCk7XG4gICAgICBjb25zdCBhZGRlZFNlbGVjdG9yID0gYCR7cHJlZml4U2VsZWN0b3IudHJpbUVuZCgpfSR7c2xvdHRlZFNlbGVjdG9yLnRyaW0oKX1gLnRyaW0oKTtcbiAgICAgIGlmIChvcmdTZWxlY3RvciAhPT0gYWRkZWRTZWxlY3Rvcikge1xuICAgICAgICBjb25zdCB1cGRhdGVkU2VsZWN0b3IgPSBgJHthZGRlZFNlbGVjdG9yfSwgJHtvcmdTZWxlY3Rvcn1gO1xuICAgICAgICBzZWxlY3RvcnMucHVzaCh7XG4gICAgICAgICAgb3JnU2VsZWN0b3IsXG4gICAgICAgICAgdXBkYXRlZFNlbGVjdG9yXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNsb3R0ZWRTZWxlY3RvcjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIF9wb2x5ZmlsbEhvc3ROb0NvbWJpbmF0b3IgKyBtWzNdO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB7XG4gICAgc2VsZWN0b3JzLFxuICAgIGNzc1RleHRcbiAgfTtcbn07XG52YXIgY29udmVydENvbG9uSG9zdENvbnRleHQgPSBjc3NUZXh0ID0+IHtcbiAgcmV0dXJuIGNvbnZlcnRDb2xvblJ1bGUoY3NzVGV4dCwgX2Nzc0NvbG9uSG9zdENvbnRleHRSZSwgY29sb25Ib3N0Q29udGV4dFBhcnRSZXBsYWNlcik7XG59O1xudmFyIGNvbnZlcnRTaGFkb3dET01TZWxlY3RvcnMgPSBjc3NUZXh0ID0+IHtcbiAgcmV0dXJuIF9zaGFkb3dET01TZWxlY3RvcnNSZS5yZWR1Y2UoKHJlc3VsdCwgcGF0dGVybikgPT4gcmVzdWx0LnJlcGxhY2UocGF0dGVybiwgXCIgXCIpLCBjc3NUZXh0KTtcbn07XG52YXIgbWFrZVNjb3BlTWF0Y2hlciA9IHNjb3BlU2VsZWN0b3IyID0+IHtcbiAgY29uc3QgbHJlID0gL1xcWy9nO1xuICBjb25zdCBycmUgPSAvXFxdL2c7XG4gIHNjb3BlU2VsZWN0b3IyID0gc2NvcGVTZWxlY3RvcjIucmVwbGFjZShscmUsIFwiXFxcXFtcIikucmVwbGFjZShycmUsIFwiXFxcXF1cIik7XG4gIHJldHVybiBuZXcgUmVnRXhwKFwiXihcIiArIHNjb3BlU2VsZWN0b3IyICsgXCIpXCIgKyBfc2VsZWN0b3JSZVN1ZmZpeCwgXCJtXCIpO1xufTtcbnZhciBzZWxlY3Rvck5lZWRzU2NvcGluZyA9IChzZWxlY3Rvciwgc2NvcGVTZWxlY3RvcjIpID0+IHtcbiAgY29uc3QgcmUgPSBtYWtlU2NvcGVNYXRjaGVyKHNjb3BlU2VsZWN0b3IyKTtcbiAgcmV0dXJuICFyZS50ZXN0KHNlbGVjdG9yKTtcbn07XG52YXIgaW5qZWN0U2NvcGluZ1NlbGVjdG9yID0gKHNlbGVjdG9yLCBzY29waW5nU2VsZWN0b3IpID0+IHtcbiAgcmV0dXJuIHNlbGVjdG9yLnJlcGxhY2UoX3NlbGVjdG9yUGFydHNSZSwgKF8sIGJlZm9yZSA9IFwiXCIsIF9jb2xvbkdyb3VwLCBjb2xvbiA9IFwiXCIsIGFmdGVyID0gXCJcIikgPT4ge1xuICAgIHJldHVybiBiZWZvcmUgKyBzY29waW5nU2VsZWN0b3IgKyBjb2xvbiArIGFmdGVyO1xuICB9KTtcbn07XG52YXIgYXBwbHlTaW1wbGVTZWxlY3RvclNjb3BlID0gKHNlbGVjdG9yLCBzY29wZVNlbGVjdG9yMiwgaG9zdFNlbGVjdG9yKSA9PiB7XG4gIF9wb2x5ZmlsbEhvc3RSZS5sYXN0SW5kZXggPSAwO1xuICBpZiAoX3BvbHlmaWxsSG9zdFJlLnRlc3Qoc2VsZWN0b3IpKSB7XG4gICAgY29uc3QgcmVwbGFjZUJ5ID0gYC4ke2hvc3RTZWxlY3Rvcn1gO1xuICAgIHJldHVybiBzZWxlY3Rvci5yZXBsYWNlKF9wb2x5ZmlsbEhvc3ROb0NvbWJpbmF0b3JSZSwgKF8sIHNlbGVjdG9yMikgPT4gaW5qZWN0U2NvcGluZ1NlbGVjdG9yKHNlbGVjdG9yMiwgcmVwbGFjZUJ5KSkucmVwbGFjZShfcG9seWZpbGxIb3N0UmUsIHJlcGxhY2VCeSArIFwiIFwiKTtcbiAgfVxuICByZXR1cm4gc2NvcGVTZWxlY3RvcjIgKyBcIiBcIiArIHNlbGVjdG9yO1xufTtcbnZhciBhcHBseVN0cmljdFNlbGVjdG9yU2NvcGUgPSAoc2VsZWN0b3IsIHNjb3BlU2VsZWN0b3IyLCBob3N0U2VsZWN0b3IpID0+IHtcbiAgY29uc3QgaXNSZSA9IC9cXFtpcz0oW15cXF1dKilcXF0vZztcbiAgc2NvcGVTZWxlY3RvcjIgPSBzY29wZVNlbGVjdG9yMi5yZXBsYWNlKGlzUmUsIChfLCAuLi5wYXJ0cykgPT4gcGFydHNbMF0pO1xuICBjb25zdCBjbGFzc05hbWUgPSBcIi5cIiArIHNjb3BlU2VsZWN0b3IyO1xuICBjb25zdCBfc2NvcGVTZWxlY3RvclBhcnQgPSBwID0+IHtcbiAgICBsZXQgc2NvcGVkUCA9IHAudHJpbSgpO1xuICAgIGlmICghc2NvcGVkUCkge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIGlmIChwLmluZGV4T2YoX3BvbHlmaWxsSG9zdE5vQ29tYmluYXRvcikgPiAtMSkge1xuICAgICAgc2NvcGVkUCA9IGFwcGx5U2ltcGxlU2VsZWN0b3JTY29wZShwLCBzY29wZVNlbGVjdG9yMiwgaG9zdFNlbGVjdG9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdCA9IHAucmVwbGFjZShfcG9seWZpbGxIb3N0UmUsIFwiXCIpO1xuICAgICAgaWYgKHQubGVuZ3RoID4gMCkge1xuICAgICAgICBzY29wZWRQID0gaW5qZWN0U2NvcGluZ1NlbGVjdG9yKHQsIGNsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzY29wZWRQO1xuICB9O1xuICBjb25zdCBzYWZlQ29udGVudCA9IHNhZmVTZWxlY3RvcihzZWxlY3Rvcik7XG4gIHNlbGVjdG9yID0gc2FmZUNvbnRlbnQuY29udGVudDtcbiAgbGV0IHNjb3BlZFNlbGVjdG9yID0gXCJcIjtcbiAgbGV0IHN0YXJ0SW5kZXggPSAwO1xuICBsZXQgcmVzO1xuICBjb25zdCBzZXAgPSAvKCB8PnxcXCt8fig/IT0pKSg/PSg/OlteKCldKlxcKFteKCldKlxcKSkqW14oKV0qJClcXHMqL2c7XG4gIGNvbnN0IGhhc0hvc3QgPSBzZWxlY3Rvci5pbmRleE9mKF9wb2x5ZmlsbEhvc3ROb0NvbWJpbmF0b3IpID4gLTE7XG4gIGxldCBzaG91bGRTY29wZSA9ICFoYXNIb3N0O1xuICB3aGlsZSAoKHJlcyA9IHNlcC5leGVjKHNlbGVjdG9yKSkgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZXBhcmF0b3IgPSByZXNbMV07XG4gICAgY29uc3QgcGFydDIgPSBzZWxlY3Rvci5zbGljZShzdGFydEluZGV4LCByZXMuaW5kZXgpLnRyaW0oKTtcbiAgICBzaG91bGRTY29wZSA9IHNob3VsZFNjb3BlIHx8IHBhcnQyLmluZGV4T2YoX3BvbHlmaWxsSG9zdE5vQ29tYmluYXRvcikgPiAtMTtcbiAgICBjb25zdCBzY29wZWRQYXJ0ID0gc2hvdWxkU2NvcGUgPyBfc2NvcGVTZWxlY3RvclBhcnQocGFydDIpIDogcGFydDI7XG4gICAgc2NvcGVkU2VsZWN0b3IgKz0gYCR7c2NvcGVkUGFydH0gJHtzZXBhcmF0b3J9IGA7XG4gICAgc3RhcnRJbmRleCA9IHNlcC5sYXN0SW5kZXg7XG4gIH1cbiAgY29uc3QgcGFydCA9IHNlbGVjdG9yLnN1YnN0cmluZyhzdGFydEluZGV4KTtcbiAgc2hvdWxkU2NvcGUgPSAhcGFydC5tYXRjaChfc2FmZVBhcnRSZSkgJiYgKHNob3VsZFNjb3BlIHx8IHBhcnQuaW5kZXhPZihfcG9seWZpbGxIb3N0Tm9Db21iaW5hdG9yKSA+IC0xKTtcbiAgc2NvcGVkU2VsZWN0b3IgKz0gc2hvdWxkU2NvcGUgPyBfc2NvcGVTZWxlY3RvclBhcnQocGFydCkgOiBwYXJ0O1xuICByZXR1cm4gcmVzdG9yZVNhZmVTZWxlY3RvcihzYWZlQ29udGVudC5wbGFjZWhvbGRlcnMsIHNjb3BlZFNlbGVjdG9yKTtcbn07XG52YXIgc2NvcGVTZWxlY3RvciA9IChzZWxlY3Rvciwgc2NvcGVTZWxlY3RvclRleHQsIGhvc3RTZWxlY3Rvciwgc2xvdFNlbGVjdG9yKSA9PiB7XG4gIHJldHVybiBzZWxlY3Rvci5zcGxpdChcIixcIikubWFwKHNoYWxsb3dQYXJ0ID0+IHtcbiAgICBpZiAoc2xvdFNlbGVjdG9yICYmIHNoYWxsb3dQYXJ0LmluZGV4T2YoXCIuXCIgKyBzbG90U2VsZWN0b3IpID4gLTEpIHtcbiAgICAgIHJldHVybiBzaGFsbG93UGFydC50cmltKCk7XG4gICAgfVxuICAgIGlmIChzZWxlY3Rvck5lZWRzU2NvcGluZyhzaGFsbG93UGFydCwgc2NvcGVTZWxlY3RvclRleHQpKSB7XG4gICAgICByZXR1cm4gYXBwbHlTdHJpY3RTZWxlY3RvclNjb3BlKHNoYWxsb3dQYXJ0LCBzY29wZVNlbGVjdG9yVGV4dCwgaG9zdFNlbGVjdG9yKS50cmltKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzaGFsbG93UGFydC50cmltKCk7XG4gICAgfVxuICB9KS5qb2luKFwiLCBcIik7XG59O1xudmFyIHNjb3BlU2VsZWN0b3JzID0gKGNzc1RleHQsIHNjb3BlU2VsZWN0b3JUZXh0LCBob3N0U2VsZWN0b3IsIHNsb3RTZWxlY3RvciwgY29tbWVudE9yaWdpbmFsU2VsZWN0b3IpID0+IHtcbiAgcmV0dXJuIHByb2Nlc3NSdWxlcyhjc3NUZXh0LCBydWxlID0+IHtcbiAgICBsZXQgc2VsZWN0b3IgPSBydWxlLnNlbGVjdG9yO1xuICAgIGxldCBjb250ZW50ID0gcnVsZS5jb250ZW50O1xuICAgIGlmIChydWxlLnNlbGVjdG9yWzBdICE9PSBcIkBcIikge1xuICAgICAgc2VsZWN0b3IgPSBzY29wZVNlbGVjdG9yKHJ1bGUuc2VsZWN0b3IsIHNjb3BlU2VsZWN0b3JUZXh0LCBob3N0U2VsZWN0b3IsIHNsb3RTZWxlY3Rvcik7XG4gICAgfSBlbHNlIGlmIChydWxlLnNlbGVjdG9yLnN0YXJ0c1dpdGgoXCJAbWVkaWFcIikgfHwgcnVsZS5zZWxlY3Rvci5zdGFydHNXaXRoKFwiQHN1cHBvcnRzXCIpIHx8IHJ1bGUuc2VsZWN0b3Iuc3RhcnRzV2l0aChcIkBwYWdlXCIpIHx8IHJ1bGUuc2VsZWN0b3Iuc3RhcnRzV2l0aChcIkBkb2N1bWVudFwiKSkge1xuICAgICAgY29udGVudCA9IHNjb3BlU2VsZWN0b3JzKHJ1bGUuY29udGVudCwgc2NvcGVTZWxlY3RvclRleHQsIGhvc3RTZWxlY3Rvciwgc2xvdFNlbGVjdG9yLCBjb21tZW50T3JpZ2luYWxTZWxlY3Rvcik7XG4gICAgfVxuICAgIGNvbnN0IGNzc1J1bGUgPSB7XG4gICAgICBzZWxlY3Rvcjogc2VsZWN0b3IucmVwbGFjZSgvXFxzezIsfS9nLCBcIiBcIikudHJpbSgpLFxuICAgICAgY29udGVudFxuICAgIH07XG4gICAgcmV0dXJuIGNzc1J1bGU7XG4gIH0pO1xufTtcbnZhciBzY29wZUNzc1RleHQgPSAoY3NzVGV4dCwgc2NvcGVJZDIsIGhvc3RTY29wZUlkLCBzbG90U2NvcGVJZCwgY29tbWVudE9yaWdpbmFsU2VsZWN0b3IpID0+IHtcbiAgY3NzVGV4dCA9IGluc2VydFBvbHlmaWxsSG9zdEluQ3NzVGV4dChjc3NUZXh0KTtcbiAgY3NzVGV4dCA9IGNvbnZlcnRDb2xvbkhvc3QoY3NzVGV4dCk7XG4gIGNzc1RleHQgPSBjb252ZXJ0Q29sb25Ib3N0Q29udGV4dChjc3NUZXh0KTtcbiAgY29uc3Qgc2xvdHRlZCA9IGNvbnZlcnRDb2xvblNsb3R0ZWQoY3NzVGV4dCwgc2xvdFNjb3BlSWQpO1xuICBjc3NUZXh0ID0gc2xvdHRlZC5jc3NUZXh0O1xuICBjc3NUZXh0ID0gY29udmVydFNoYWRvd0RPTVNlbGVjdG9ycyhjc3NUZXh0KTtcbiAgaWYgKHNjb3BlSWQyKSB7XG4gICAgY3NzVGV4dCA9IHNjb3BlU2VsZWN0b3JzKGNzc1RleHQsIHNjb3BlSWQyLCBob3N0U2NvcGVJZCwgc2xvdFNjb3BlSWQsIGNvbW1lbnRPcmlnaW5hbFNlbGVjdG9yKTtcbiAgfVxuICBjc3NUZXh0ID0gcmVwbGFjZVNoYWRvd0Nzc0hvc3QoY3NzVGV4dCwgaG9zdFNjb3BlSWQpO1xuICBjc3NUZXh0ID0gY3NzVGV4dC5yZXBsYWNlKC8+XFxzKlxcKlxccysoW157LCBdKykvZ20sIFwiICQxIFwiKTtcbiAgcmV0dXJuIHtcbiAgICBjc3NUZXh0OiBjc3NUZXh0LnRyaW0oKSxcbiAgICAvLyBXZSBuZWVkIHRvIHJlcGxhY2UgdGhlIHNoYWRvdyBDU1MgaG9zdCBzdHJpbmcgaW4gZWFjaCBvZiB0aGVzZSBzZWxlY3RvcnMgc2luY2Ugd2UgY3JlYXRlZFxuICAgIC8vIHRoZW0gcHJpb3IgdG8gdGhlIHJlcGxhY2VtZW50IGhhcHBlbmluZyBpbiB0aGUgY29tcG9uZW50cyBDU1MgdGV4dC5cbiAgICBzbG90dGVkU2VsZWN0b3JzOiBzbG90dGVkLnNlbGVjdG9ycy5tYXAocmVmID0+ICh7XG4gICAgICBvcmdTZWxlY3RvcjogcmVwbGFjZVNoYWRvd0Nzc0hvc3QocmVmLm9yZ1NlbGVjdG9yLCBob3N0U2NvcGVJZCksXG4gICAgICB1cGRhdGVkU2VsZWN0b3I6IHJlcGxhY2VTaGFkb3dDc3NIb3N0KHJlZi51cGRhdGVkU2VsZWN0b3IsIGhvc3RTY29wZUlkKVxuICAgIH0pKVxuICB9O1xufTtcbnZhciByZXBsYWNlU2hhZG93Q3NzSG9zdCA9IChjc3NUZXh0LCBob3N0U2NvcGVJZCkgPT4ge1xuICByZXR1cm4gY3NzVGV4dC5yZXBsYWNlKC8tc2hhZG93Y3NzaG9zdC1uby1jb21iaW5hdG9yL2csIGAuJHtob3N0U2NvcGVJZH1gKTtcbn07XG52YXIgZXhwYW5kUGFydFNlbGVjdG9ycyA9IGNzc1RleHQgPT4ge1xuICBjb25zdCBwYXJ0U2VsZWN0b3JSZSA9IC8oW15cXHMse11bXix7XSo/KTo6cGFydFxcKFxccyooW14pXSs/KVxccypcXCkoKD86WzouXVteLHtdKikqKS9nO1xuICByZXR1cm4gcHJvY2Vzc1J1bGVzKGNzc1RleHQsIHJ1bGUgPT4ge1xuICAgIGlmIChydWxlLnNlbGVjdG9yWzBdID09PSBcIkBcIikge1xuICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgfVxuICAgIGNvbnN0IHNlbGVjdG9ycyA9IHJ1bGUuc2VsZWN0b3Iuc3BsaXQoXCIsXCIpLm1hcChzZWwgPT4ge1xuICAgICAgY29uc3Qgb3V0ID0gW3NlbC50cmltKCldO1xuICAgICAgbGV0IG07XG4gICAgICB3aGlsZSAoKG0gPSBwYXJ0U2VsZWN0b3JSZS5leGVjKHNlbCkpICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGJlZm9yZSA9IG1bMV0udHJpbUVuZCgpO1xuICAgICAgICBjb25zdCBwYXJ0TmFtZXMgPSBtWzJdLnRyaW0oKS5zcGxpdCgvXFxzKy8pO1xuICAgICAgICBjb25zdCBhZnRlciA9IG1bM10gfHwgXCJcIjtcbiAgICAgICAgY29uc3QgcGFydEF0dHIgPSBwYXJ0TmFtZXMuZmxhdE1hcChwID0+IHtcbiAgICAgICAgICBpZiAoIXJ1bGUuc2VsZWN0b3IuaW5jbHVkZXMoYFtwYXJ0fj1cIiR7cH1cIl1gKSkge1xuICAgICAgICAgICAgcmV0dXJuIFtgW3BhcnR+PVwiJHtwfVwiXWBdO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH0pLmpvaW4oXCJcIik7XG4gICAgICAgIGNvbnN0IGV4cGFuZGVkID0gYCR7YmVmb3JlfSAke3BhcnRBdHRyfSR7YWZ0ZXJ9YDtcbiAgICAgICAgaWYgKCEhcGFydEF0dHIgJiYgZXhwYW5kZWQgIT09IHNlbC50cmltKCkpIHtcbiAgICAgICAgICBvdXQucHVzaChleHBhbmRlZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvdXQuam9pbihcIiwgXCIpO1xuICAgIH0pO1xuICAgIHJ1bGUuc2VsZWN0b3IgPSBzZWxlY3RvcnMuam9pbihcIiwgXCIpO1xuICAgIHJldHVybiBydWxlO1xuICB9KTtcbn07XG52YXIgc2NvcGVDc3MgPSAoY3NzVGV4dCwgc2NvcGVJZDIsIGNvbW1lbnRPcmlnaW5hbFNlbGVjdG9yKSA9PiB7XG4gIGNvbnN0IGhvc3RTY29wZUlkID0gc2NvcGVJZDIgKyBcIi1oXCI7XG4gIGNvbnN0IHNsb3RTY29wZUlkID0gc2NvcGVJZDIgKyBcIi1zXCI7XG4gIGNvbnN0IGNvbW1lbnRzV2l0aEhhc2ggPSBleHRyYWN0Q29tbWVudHNXaXRoSGFzaChjc3NUZXh0KTtcbiAgY3NzVGV4dCA9IHN0cmlwQ29tbWVudHMoY3NzVGV4dCk7XG4gIGNvbnN0IG9yZ1NlbGVjdG9ycyA9IFtdO1xuICBpZiAoY29tbWVudE9yaWdpbmFsU2VsZWN0b3IpIHtcbiAgICBjb25zdCBwcm9jZXNzQ29tbWVudGVkU2VsZWN0b3IgPSBydWxlID0+IHtcbiAgICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gYC8qIUBfX18ke29yZ1NlbGVjdG9ycy5sZW5ndGh9X19fKi9gO1xuICAgICAgY29uc3QgY29tbWVudCA9IGAvKiFAJHtydWxlLnNlbGVjdG9yfSovYDtcbiAgICAgIG9yZ1NlbGVjdG9ycy5wdXNoKHtcbiAgICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICAgIGNvbW1lbnRcbiAgICAgIH0pO1xuICAgICAgcnVsZS5zZWxlY3RvciA9IHBsYWNlaG9sZGVyICsgcnVsZS5zZWxlY3RvcjtcbiAgICAgIHJldHVybiBydWxlO1xuICAgIH07XG4gICAgY3NzVGV4dCA9IHByb2Nlc3NSdWxlcyhjc3NUZXh0LCBydWxlID0+IHtcbiAgICAgIGlmIChydWxlLnNlbGVjdG9yWzBdICE9PSBcIkBcIikge1xuICAgICAgICByZXR1cm4gcHJvY2Vzc0NvbW1lbnRlZFNlbGVjdG9yKHJ1bGUpO1xuICAgICAgfSBlbHNlIGlmIChydWxlLnNlbGVjdG9yLnN0YXJ0c1dpdGgoXCJAbWVkaWFcIikgfHwgcnVsZS5zZWxlY3Rvci5zdGFydHNXaXRoKFwiQHN1cHBvcnRzXCIpIHx8IHJ1bGUuc2VsZWN0b3Iuc3RhcnRzV2l0aChcIkBwYWdlXCIpIHx8IHJ1bGUuc2VsZWN0b3Iuc3RhcnRzV2l0aChcIkBkb2N1bWVudFwiKSkge1xuICAgICAgICBydWxlLmNvbnRlbnQgPSBwcm9jZXNzUnVsZXMocnVsZS5jb250ZW50LCBwcm9jZXNzQ29tbWVudGVkU2VsZWN0b3IpO1xuICAgICAgICByZXR1cm4gcnVsZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBydWxlO1xuICAgIH0pO1xuICB9XG4gIGNvbnN0IHNjb3BlZCA9IHNjb3BlQ3NzVGV4dChjc3NUZXh0LCBzY29wZUlkMiwgaG9zdFNjb3BlSWQsIHNsb3RTY29wZUlkLCBjb21tZW50T3JpZ2luYWxTZWxlY3Rvcik7XG4gIGNzc1RleHQgPSBbc2NvcGVkLmNzc1RleHQsIC4uLmNvbW1lbnRzV2l0aEhhc2hdLmpvaW4oXCJcXG5cIik7XG4gIGlmIChjb21tZW50T3JpZ2luYWxTZWxlY3Rvcikge1xuICAgIG9yZ1NlbGVjdG9ycy5mb3JFYWNoKCh7XG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIGNvbW1lbnRcbiAgICB9KSA9PiB7XG4gICAgICBjc3NUZXh0ID0gY3NzVGV4dC5yZXBsYWNlKHBsYWNlaG9sZGVyLCBjb21tZW50KTtcbiAgICB9KTtcbiAgfVxuICBzY29wZWQuc2xvdHRlZFNlbGVjdG9ycy5mb3JFYWNoKHNsb3R0ZWRTZWxlY3RvciA9PiB7XG4gICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKGVzY2FwZVJlZ0V4cFNwZWNpYWxDaGFyYWN0ZXJzKHNsb3R0ZWRTZWxlY3Rvci5vcmdTZWxlY3RvciksIFwiZ1wiKTtcbiAgICBjc3NUZXh0ID0gY3NzVGV4dC5yZXBsYWNlKHJlZ2V4LCBzbG90dGVkU2VsZWN0b3IudXBkYXRlZFNlbGVjdG9yKTtcbiAgfSk7XG4gIGNzc1RleHQgPSBleHBhbmRQYXJ0U2VsZWN0b3JzKGNzc1RleHQpO1xuICByZXR1cm4gY3NzVGV4dDtcbn07XG5cbi8vIHNyYy9ydW50aW1lL21vZGUudHNcbnZhciBjb21wdXRlTW9kZSA9IGVsbSA9PiBtb2RlUmVzb2x1dGlvbkNoYWluLm1hcChoMiA9PiBoMihlbG0pKS5maW5kKG0gPT4gISFtKTtcbnZhciBzZXRNb2RlID0gaGFuZGxlciA9PiBtb2RlUmVzb2x1dGlvbkNoYWluLnB1c2goaGFuZGxlcik7XG52YXIgZ2V0TW9kZSA9IHJlZiA9PiB7XG4gIHZhciBfYTtcbiAgcmV0dXJuIChfYSA9IGdldEhvc3RSZWYocmVmKSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLiRtb2RlTmFtZSQ7XG59O1xuXG4vLyBzcmMvcnVudGltZS9wcm94eS1jb21wb25lbnQudHNcbmltcG9ydCB7IEJVSUxEIGFzIEJVSUxEMjMgfSBmcm9tIFwiQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9hcHAtZGF0YVwiO1xuXG4vLyBzcmMvcnVudGltZS9zZXQtdmFsdWUudHNcbmltcG9ydCB7IEJVSUxEIGFzIEJVSUxEMjIgfSBmcm9tIFwiQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9hcHAtZGF0YVwiO1xuXG4vLyBzcmMvcnVudGltZS9wYXJzZS1wcm9wZXJ0eS12YWx1ZS50c1xuaW1wb3J0IHsgQlVJTEQgYXMgQlVJTEQxNSB9IGZyb20gXCJAc3RlbmNpbC9jb3JlL2ludGVybmFsL2FwcC1kYXRhXCI7XG52YXIgcGFyc2VQcm9wZXJ0eVZhbHVlID0gKHByb3BWYWx1ZSwgcHJvcFR5cGUsIGlzRm9ybUFzc29jaWF0ZWQpID0+IHtcbiAgaWYgKChCVUlMRDE1Lmh5ZHJhdGVDbGllbnRTaWRlIHx8IEJVSUxEMTUuaHlkcmF0ZVNlcnZlclNpZGUpICYmIHR5cGVvZiBwcm9wVmFsdWUgPT09IFwic3RyaW5nXCIgJiYgcHJvcFZhbHVlLnN0YXJ0c1dpdGgoU0VSSUFMSVpFRF9QUkVGSVgpKSB7XG4gICAgcHJvcFZhbHVlID0gZGVzZXJpYWxpemVQcm9wZXJ0eShwcm9wVmFsdWUpO1xuICAgIHJldHVybiBwcm9wVmFsdWU7XG4gIH1cbiAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09IFwic3RyaW5nXCIgJiYgKHByb3BUeXBlICYgMTYgLyogVW5rbm93biAqLyB8fCBwcm9wVHlwZSAmIDggLyogQW55ICovKSAmJiAocHJvcFZhbHVlLnN0YXJ0c1dpdGgoXCJ7XCIpICYmIHByb3BWYWx1ZS5lbmRzV2l0aChcIn1cIikgfHwgcHJvcFZhbHVlLnN0YXJ0c1dpdGgoXCJbXCIpICYmIHByb3BWYWx1ZS5lbmRzV2l0aChcIl1cIikpKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKHByb3BWYWx1ZSk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICBpZiAocHJvcFZhbHVlICE9IG51bGwgJiYgIWlzQ29tcGxleFR5cGUocHJvcFZhbHVlKSkge1xuICAgIGlmIChCVUlMRDE1LnByb3BCb29sZWFuICYmIHByb3BUeXBlICYgNCAvKiBCb29sZWFuICovKSB7XG4gICAgICBpZiAoQlVJTEQxNS5mb3JtQXNzb2NpYXRlZCAmJiBpc0Zvcm1Bc3NvY2lhdGVkICYmIHR5cGVvZiBwcm9wVmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIHByb3BWYWx1ZSA9PT0gXCJcIiB8fCAhIXByb3BWYWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwcm9wVmFsdWUgPT09IFwiZmFsc2VcIiA/IGZhbHNlIDogcHJvcFZhbHVlID09PSBcIlwiIHx8ICEhcHJvcFZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoQlVJTEQxNS5wcm9wTnVtYmVyICYmIHByb3BUeXBlICYgMiAvKiBOdW1iZXIgKi8pIHtcbiAgICAgIHJldHVybiB0eXBlb2YgcHJvcFZhbHVlID09PSBcInN0cmluZ1wiID8gcGFyc2VGbG9hdChwcm9wVmFsdWUpIDogdHlwZW9mIHByb3BWYWx1ZSA9PT0gXCJudW1iZXJcIiA/IHByb3BWYWx1ZSA6IE5hTjtcbiAgICB9XG4gICAgaWYgKEJVSUxEMTUucHJvcFN0cmluZyAmJiBwcm9wVHlwZSAmIDEgLyogU3RyaW5nICovKSB7XG4gICAgICByZXR1cm4gU3RyaW5nKHByb3BWYWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVmFsdWU7XG4gIH1cbiAgcmV0dXJuIHByb3BWYWx1ZTtcbn07XG5cbi8vIHNyYy9ydW50aW1lL3VwZGF0ZS1jb21wb25lbnQudHNcbmltcG9ydCB7IEJVSUxEIGFzIEJVSUxEMjEsIE5BTUVTUEFDRSB9IGZyb20gXCJAc3RlbmNpbC9jb3JlL2ludGVybmFsL2FwcC1kYXRhXCI7XG5cbi8vIHNyYy9ydW50aW1lL2V2ZW50LWVtaXR0ZXIudHNcbmltcG9ydCB7IEJVSUxEIGFzIEJVSUxEMTcgfSBmcm9tIFwiQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9hcHAtZGF0YVwiO1xuXG4vLyBzcmMvcnVudGltZS9lbGVtZW50LnRzXG5pbXBvcnQgeyBCVUlMRCBhcyBCVUlMRDE2IH0gZnJvbSBcIkBzdGVuY2lsL2NvcmUvaW50ZXJuYWwvYXBwLWRhdGFcIjtcbnZhciBnZXRFbGVtZW50ID0gcmVmID0+IHtcbiAgdmFyIF9hO1xuICByZXR1cm4gQlVJTEQxNi5sYXp5TG9hZCA/IChfYSA9IGdldEhvc3RSZWYocmVmKSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLiRob3N0RWxlbWVudCQgOiByZWY7XG59O1xuXG4vLyBzcmMvcnVudGltZS9ldmVudC1lbWl0dGVyLnRzXG52YXIgY3JlYXRlRXZlbnQgPSAocmVmLCBuYW1lLCBmbGFncykgPT4ge1xuICBjb25zdCBlbG0gPSBnZXRFbGVtZW50KHJlZik7XG4gIHJldHVybiB7XG4gICAgZW1pdDogZGV0YWlsID0+IHtcbiAgICAgIGlmIChCVUlMRDE3LmlzRGV2ICYmICFlbG0uaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgY29uc29sZURldldhcm4oYFRoZSBcIiR7bmFtZX1cIiBldmVudCB3YXMgZW1pdHRlZCwgYnV0IHRoZSBkaXNwYXRjaGVyIG5vZGUgaXMgbm8gbG9uZ2VyIGNvbm5lY3RlZCB0byB0aGUgZG9tLmApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGVtaXRFdmVudChlbG0sIG5hbWUsIHtcbiAgICAgICAgYnViYmxlczogISEoZmxhZ3MgJiA0IC8qIEJ1YmJsZXMgKi8pLFxuICAgICAgICBjb21wb3NlZDogISEoZmxhZ3MgJiAyIC8qIENvbXBvc2VkICovKSxcbiAgICAgICAgY2FuY2VsYWJsZTogISEoZmxhZ3MgJiAxIC8qIENhbmNlbGxhYmxlICovKSxcbiAgICAgICAgZGV0YWlsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59O1xudmFyIGVtaXRFdmVudCA9IChlbG0sIG5hbWUsIG9wdHMpID0+IHtcbiAgY29uc3QgZXYgPSBwbHQuY2UobmFtZSwgb3B0cyk7XG4gIGVsbS5kaXNwYXRjaEV2ZW50KGV2KTtcbiAgcmV0dXJuIGV2O1xufTtcblxuLy8gc3JjL3J1bnRpbWUvdmRvbS92ZG9tLXJlbmRlci50c1xuaW1wb3J0IHsgQlVJTEQgYXMgQlVJTEQyMCB9IGZyb20gXCJAc3RlbmNpbC9jb3JlL2ludGVybmFsL2FwcC1kYXRhXCI7XG5cbi8vIHNyYy9ydW50aW1lL3Zkb20vdXBkYXRlLWVsZW1lbnQudHNcbmltcG9ydCB7IEJVSUxEIGFzIEJVSUxEMTkgfSBmcm9tIFwiQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9hcHAtZGF0YVwiO1xuXG4vLyBzcmMvcnVudGltZS92ZG9tL3NldC1hY2Nlc3Nvci50c1xuaW1wb3J0IHsgQlVJTEQgYXMgQlVJTEQxOCB9IGZyb20gXCJAc3RlbmNpbC9jb3JlL2ludGVybmFsL2FwcC1kYXRhXCI7XG52YXIgc2V0QWNjZXNzb3IgPSAoZWxtLCBtZW1iZXJOYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUsIGlzU3ZnLCBmbGFncywgaW5pdGlhbFJlbmRlcikgPT4ge1xuICBpZiAob2xkVmFsdWUgPT09IG5ld1ZhbHVlKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBpc1Byb3AgPSBpc01lbWJlckluRWxlbWVudChlbG0sIG1lbWJlck5hbWUpO1xuICBsZXQgbG4gPSBtZW1iZXJOYW1lLnRvTG93ZXJDYXNlKCk7XG4gIGlmIChCVUlMRDE4LnZkb21DbGFzcyAmJiBtZW1iZXJOYW1lID09PSBcImNsYXNzXCIpIHtcbiAgICBjb25zdCBjbGFzc0xpc3QgPSBlbG0uY2xhc3NMaXN0O1xuICAgIGNvbnN0IG9sZENsYXNzZXMgPSBwYXJzZUNsYXNzTGlzdChvbGRWYWx1ZSk7XG4gICAgbGV0IG5ld0NsYXNzZXMgPSBwYXJzZUNsYXNzTGlzdChuZXdWYWx1ZSk7XG4gICAgaWYgKEJVSUxEMTguaHlkcmF0ZUNsaWVudFNpZGUgJiYgKGVsbVtcInMtc2lcIl0gfHwgZWxtW1wicy1zY1wiXSkgJiYgaW5pdGlhbFJlbmRlcikge1xuICAgICAgY29uc3Qgc2NvcGVJZDIgPSBlbG1bXCJzLXNjXCJdIHx8IGVsbVtcInMtc2lcIl07XG4gICAgICBuZXdDbGFzc2VzLnB1c2goc2NvcGVJZDIpO1xuICAgICAgb2xkQ2xhc3Nlcy5mb3JFYWNoKGMgPT4ge1xuICAgICAgICBpZiAoYy5zdGFydHNXaXRoKHNjb3BlSWQyKSkgbmV3Q2xhc3Nlcy5wdXNoKGMpO1xuICAgICAgfSk7XG4gICAgICBuZXdDbGFzc2VzID0gWy4uLm5ldyBTZXQobmV3Q2xhc3NlcyldLmZpbHRlcihjID0+IGMpO1xuICAgICAgY2xhc3NMaXN0LmFkZCguLi5uZXdDbGFzc2VzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2xhc3NMaXN0LnJlbW92ZSguLi5vbGRDbGFzc2VzLmZpbHRlcihjID0+IGMgJiYgIW5ld0NsYXNzZXMuaW5jbHVkZXMoYykpKTtcbiAgICAgIGNsYXNzTGlzdC5hZGQoLi4ubmV3Q2xhc3Nlcy5maWx0ZXIoYyA9PiBjICYmICFvbGRDbGFzc2VzLmluY2x1ZGVzKGMpKSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKEJVSUxEMTgudmRvbVN0eWxlICYmIG1lbWJlck5hbWUgPT09IFwic3R5bGVcIikge1xuICAgIGlmIChCVUlMRDE4LnVwZGF0YWJsZSkge1xuICAgICAgZm9yIChjb25zdCBwcm9wIGluIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICghbmV3VmFsdWUgfHwgbmV3VmFsdWVbcHJvcF0gPT0gbnVsbCkge1xuICAgICAgICAgIGlmICghQlVJTEQxOC5oeWRyYXRlU2VydmVyU2lkZSAmJiBwcm9wLmluY2x1ZGVzKFwiLVwiKSkge1xuICAgICAgICAgICAgZWxtLnN0eWxlLnJlbW92ZVByb3BlcnR5KHByb3ApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbG0uc3R5bGVbcHJvcF0gPSBcIlwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gbmV3VmFsdWUpIHtcbiAgICAgIGlmICghb2xkVmFsdWUgfHwgbmV3VmFsdWVbcHJvcF0gIT09IG9sZFZhbHVlW3Byb3BdKSB7XG4gICAgICAgIGlmICghQlVJTEQxOC5oeWRyYXRlU2VydmVyU2lkZSAmJiBwcm9wLmluY2x1ZGVzKFwiLVwiKSkge1xuICAgICAgICAgIGVsbS5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wLCBuZXdWYWx1ZVtwcm9wXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWxtLnN0eWxlW3Byb3BdID0gbmV3VmFsdWVbcHJvcF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoQlVJTEQxOC52ZG9tS2V5ICYmIG1lbWJlck5hbWUgPT09IFwia2V5XCIpIHt9IGVsc2UgaWYgKEJVSUxEMTgudmRvbVJlZiAmJiBtZW1iZXJOYW1lID09PSBcInJlZlwiKSB7XG4gICAgaWYgKG5ld1ZhbHVlKSB7XG4gICAgICBuZXdWYWx1ZShlbG0pO1xuICAgIH1cbiAgfSBlbHNlIGlmIChCVUlMRDE4LnZkb21MaXN0ZW5lciAmJiAoQlVJTEQxOC5sYXp5TG9hZCA/ICFpc1Byb3AgOiAhZWxtLl9fbG9va3VwU2V0dGVyX18obWVtYmVyTmFtZSkpICYmIG1lbWJlck5hbWVbMF0gPT09IFwib1wiICYmIG1lbWJlck5hbWVbMV0gPT09IFwiblwiKSB7XG4gICAgaWYgKG1lbWJlck5hbWVbMl0gPT09IFwiLVwiKSB7XG4gICAgICBtZW1iZXJOYW1lID0gbWVtYmVyTmFtZS5zbGljZSgzKTtcbiAgICB9IGVsc2UgaWYgKGlzTWVtYmVySW5FbGVtZW50KHdpbiwgbG4pKSB7XG4gICAgICBtZW1iZXJOYW1lID0gbG4uc2xpY2UoMik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lbWJlck5hbWUgPSBsblsyXSArIG1lbWJlck5hbWUuc2xpY2UoMyk7XG4gICAgfVxuICAgIGlmIChvbGRWYWx1ZSB8fCBuZXdWYWx1ZSkge1xuICAgICAgY29uc3QgY2FwdHVyZSA9IG1lbWJlck5hbWUuZW5kc1dpdGgoQ0FQVFVSRV9FVkVOVF9TVUZGSVgpO1xuICAgICAgbWVtYmVyTmFtZSA9IG1lbWJlck5hbWUucmVwbGFjZShDQVBUVVJFX0VWRU5UX1JFR0VYLCBcIlwiKTtcbiAgICAgIGlmIChvbGRWYWx1ZSkge1xuICAgICAgICBwbHQucmVsKGVsbSwgbWVtYmVyTmFtZSwgb2xkVmFsdWUsIGNhcHR1cmUpO1xuICAgICAgfVxuICAgICAgaWYgKG5ld1ZhbHVlKSB7XG4gICAgICAgIHBsdC5hZWwoZWxtLCBtZW1iZXJOYW1lLCBuZXdWYWx1ZSwgY2FwdHVyZSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKEJVSUxEMTgudmRvbVByb3BPckF0dHIpIHtcbiAgICBjb25zdCBpc0NvbXBsZXggPSBpc0NvbXBsZXhUeXBlKG5ld1ZhbHVlKTtcbiAgICBpZiAoKGlzUHJvcCB8fCBpc0NvbXBsZXggJiYgbmV3VmFsdWUgIT09IG51bGwpICYmICFpc1N2Zykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFlbG0udGFnTmFtZS5pbmNsdWRlcyhcIi1cIikpIHtcbiAgICAgICAgICBjb25zdCBuID0gbmV3VmFsdWUgPT0gbnVsbCA/IFwiXCIgOiBuZXdWYWx1ZTtcbiAgICAgICAgICBpZiAobWVtYmVyTmFtZSA9PT0gXCJsaXN0XCIpIHtcbiAgICAgICAgICAgIGlzUHJvcCA9IGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSBpZiAob2xkVmFsdWUgPT0gbnVsbCB8fCBlbG1bbWVtYmVyTmFtZV0gIT0gbikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBlbG0uX19sb29rdXBTZXR0ZXJfXyhtZW1iZXJOYW1lKSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgIGVsbVttZW1iZXJOYW1lXSA9IG47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlbG0uc2V0QXR0cmlidXRlKG1lbWJlck5hbWUsIG4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChlbG1bbWVtYmVyTmFtZV0gIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgZWxtW21lbWJlck5hbWVdID0gbmV3VmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuICAgIGxldCB4bGluayA9IGZhbHNlO1xuICAgIGlmIChCVUlMRDE4LnZkb21YbGluaykge1xuICAgICAgaWYgKGxuICE9PSAobG4gPSBsbi5yZXBsYWNlKC9eeGxpbmtcXDo/LywgXCJcIikpKSB7XG4gICAgICAgIG1lbWJlck5hbWUgPSBsbjtcbiAgICAgICAgeGxpbmsgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobmV3VmFsdWUgPT0gbnVsbCB8fCBuZXdWYWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgIGlmIChuZXdWYWx1ZSAhPT0gZmFsc2UgfHwgZWxtLmdldEF0dHJpYnV0ZShtZW1iZXJOYW1lKSA9PT0gXCJcIikge1xuICAgICAgICBpZiAoQlVJTEQxOC52ZG9tWGxpbmsgJiYgeGxpbmspIHtcbiAgICAgICAgICBlbG0ucmVtb3ZlQXR0cmlidXRlTlMoWExJTktfTlMsIG1lbWJlck5hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVsbS5yZW1vdmVBdHRyaWJ1dGUobWVtYmVyTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCghaXNQcm9wIHx8IGZsYWdzICYgNCAvKiBpc0hvc3QgKi8gfHwgaXNTdmcpICYmICFpc0NvbXBsZXggJiYgZWxtLm5vZGVUeXBlID09PSAxIC8qIEVsZW1lbnROb2RlICovKSB7XG4gICAgICBuZXdWYWx1ZSA9IG5ld1ZhbHVlID09PSB0cnVlID8gXCJcIiA6IG5ld1ZhbHVlO1xuICAgICAgaWYgKEJVSUxEMTgudmRvbVhsaW5rICYmIHhsaW5rKSB7XG4gICAgICAgIGVsbS5zZXRBdHRyaWJ1dGVOUyhYTElOS19OUywgbWVtYmVyTmFtZSwgbmV3VmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxtLnNldEF0dHJpYnV0ZShtZW1iZXJOYW1lLCBuZXdWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xudmFyIHBhcnNlQ2xhc3NMaXN0UmVnZXggPSAvXFxzLztcbnZhciBwYXJzZUNsYXNzTGlzdCA9IHZhbHVlID0+IHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAmJiBcImJhc2VWYWxcIiBpbiB2YWx1ZSkge1xuICAgIHZhbHVlID0gdmFsdWUuYmFzZVZhbDtcbiAgfVxuICBpZiAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICByZXR1cm4gdmFsdWUuc3BsaXQocGFyc2VDbGFzc0xpc3RSZWdleCk7XG59O1xudmFyIENBUFRVUkVfRVZFTlRfU1VGRklYID0gXCJDYXB0dXJlXCI7XG52YXIgQ0FQVFVSRV9FVkVOVF9SRUdFWCA9IG5ldyBSZWdFeHAoQ0FQVFVSRV9FVkVOVF9TVUZGSVggKyBcIiRcIik7XG5cbi8vIHNyYy9ydW50aW1lL3Zkb20vdXBkYXRlLWVsZW1lbnQudHNcbnZhciB1cGRhdGVFbGVtZW50ID0gKG9sZFZub2RlLCBuZXdWbm9kZSwgaXNTdmdNb2RlMiwgaXNJbml0aWFsUmVuZGVyKSA9PiB7XG4gIGNvbnN0IGVsbSA9IG5ld1Zub2RlLiRlbG0kLm5vZGVUeXBlID09PSAxMSAvKiBEb2N1bWVudEZyYWdtZW50ICovICYmIG5ld1Zub2RlLiRlbG0kLmhvc3QgPyBuZXdWbm9kZS4kZWxtJC5ob3N0IDogbmV3Vm5vZGUuJGVsbSQ7XG4gIGNvbnN0IG9sZFZub2RlQXR0cnMgPSBvbGRWbm9kZSAmJiBvbGRWbm9kZS4kYXR0cnMkIHx8IHt9O1xuICBjb25zdCBuZXdWbm9kZUF0dHJzID0gbmV3Vm5vZGUuJGF0dHJzJCB8fCB7fTtcbiAgaWYgKEJVSUxEMTkudXBkYXRhYmxlKSB7XG4gICAgZm9yIChjb25zdCBtZW1iZXJOYW1lIG9mIHNvcnRlZEF0dHJOYW1lcyhPYmplY3Qua2V5cyhvbGRWbm9kZUF0dHJzKSkpIHtcbiAgICAgIGlmICghKG1lbWJlck5hbWUgaW4gbmV3Vm5vZGVBdHRycykpIHtcbiAgICAgICAgc2V0QWNjZXNzb3IoZWxtLCBtZW1iZXJOYW1lLCBvbGRWbm9kZUF0dHJzW21lbWJlck5hbWVdLCB2b2lkIDAsIGlzU3ZnTW9kZTIsIG5ld1Zub2RlLiRmbGFncyQsIGlzSW5pdGlhbFJlbmRlcik7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZvciAoY29uc3QgbWVtYmVyTmFtZSBvZiBzb3J0ZWRBdHRyTmFtZXMoT2JqZWN0LmtleXMobmV3Vm5vZGVBdHRycykpKSB7XG4gICAgc2V0QWNjZXNzb3IoZWxtLCBtZW1iZXJOYW1lLCBvbGRWbm9kZUF0dHJzW21lbWJlck5hbWVdLCBuZXdWbm9kZUF0dHJzW21lbWJlck5hbWVdLCBpc1N2Z01vZGUyLCBuZXdWbm9kZS4kZmxhZ3MkLCBpc0luaXRpYWxSZW5kZXIpO1xuICB9XG59O1xuZnVuY3Rpb24gc29ydGVkQXR0ck5hbWVzKGF0dHJOYW1lcykge1xuICByZXR1cm4gYXR0ck5hbWVzLmluY2x1ZGVzKFwicmVmXCIpID9cbiAgLy8gd2UgbmVlZCB0byBzb3J0IHRoZXNlIHRvIGVuc3VyZSB0aGF0IGAncmVmJ2AgaXMgdGhlIGxhc3QgYXR0clxuICBbLi4uYXR0ck5hbWVzLmZpbHRlcihhdHRyID0+IGF0dHIgIT09IFwicmVmXCIpLCBcInJlZlwiXSA6XG4gIC8vIG5vIG5lZWQgdG8gc29ydCwgcmV0dXJuIHRoZSBvcmlnaW5hbCBhcnJheVxuICBhdHRyTmFtZXM7XG59XG5cbi8vIHNyYy9ydW50aW1lL3Zkb20vdmRvbS1yZW5kZXIudHNcbnZhciBzY29wZUlkO1xudmFyIGNvbnRlbnRSZWY7XG52YXIgaG9zdFRhZ05hbWU7XG52YXIgdXNlTmF0aXZlU2hhZG93RG9tID0gZmFsc2U7XG52YXIgY2hlY2tTbG90RmFsbGJhY2tWaXNpYmlsaXR5ID0gZmFsc2U7XG52YXIgY2hlY2tTbG90UmVsb2NhdGUgPSBmYWxzZTtcbnZhciBpc1N2Z01vZGUgPSBmYWxzZTtcbnZhciBjcmVhdGVFbG0gPSAob2xkUGFyZW50Vk5vZGUsIG5ld1BhcmVudFZOb2RlLCBjaGlsZEluZGV4KSA9PiB7XG4gIHZhciBfYTtcbiAgY29uc3QgbmV3Vk5vZGUyID0gbmV3UGFyZW50Vk5vZGUuJGNoaWxkcmVuJFtjaGlsZEluZGV4XTtcbiAgbGV0IGkyID0gMDtcbiAgbGV0IGVsbTtcbiAgbGV0IGNoaWxkTm9kZTtcbiAgbGV0IG9sZFZOb2RlO1xuICBpZiAoQlVJTEQyMC5zbG90UmVsb2NhdGlvbiAmJiAhdXNlTmF0aXZlU2hhZG93RG9tKSB7XG4gICAgY2hlY2tTbG90UmVsb2NhdGUgPSB0cnVlO1xuICAgIGlmIChuZXdWTm9kZTIuJHRhZyQgPT09IFwic2xvdFwiKSB7XG4gICAgICBuZXdWTm9kZTIuJGZsYWdzJCB8PSBuZXdWTm9kZTIuJGNoaWxkcmVuJCA/XG4gICAgICAvLyBzbG90IGVsZW1lbnQgaGFzIGZhbGxiYWNrIGNvbnRlbnRcbiAgICAgIC8vIHN0aWxsIGNyZWF0ZSBhbiBlbGVtZW50IHRoYXQgXCJtb2Nrc1wiIHRoZSBzbG90IGVsZW1lbnRcbiAgICAgIDIgLyogaXNTbG90RmFsbGJhY2sgKi8gOlxuICAgICAgLy8gc2xvdCBlbGVtZW50IGRvZXMgbm90IGhhdmUgZmFsbGJhY2sgY29udGVudFxuICAgICAgLy8gY3JlYXRlIGFuIGh0bWwgY29tbWVudCB3ZSdsbCB1c2UgdG8gYWx3YXlzIHJlZmVyZW5jZVxuICAgICAgLy8gd2hlcmUgYWN0dWFsIHNsb3QgY29udGVudCBzaG91bGQgc2l0IG5leHQgdG9cbiAgICAgIDEgLyogaXNTbG90UmVmZXJlbmNlICovO1xuICAgIH1cbiAgfVxuICBpZiAoQlVJTEQyMC5pc0RldiAmJiBuZXdWTm9kZTIuJGVsbSQpIHtcbiAgICBjb25zb2xlRGV2RXJyb3IoYFRoZSBKU1ggJHtuZXdWTm9kZTIuJHRleHQkICE9PSBudWxsID8gYFwiJHtuZXdWTm9kZTIuJHRleHQkfVwiIHRleHRgIDogYFwiJHtuZXdWTm9kZTIuJHRhZyR9XCIgZWxlbWVudGB9IG5vZGUgc2hvdWxkIG5vdCBiZSBzaGFyZWQgd2l0aGluIHRoZSBzYW1lIHJlbmRlcmVyLiBUaGUgcmVuZGVyZXIgY2FjaGVzIGVsZW1lbnQgbG9va3VwcyBpbiBvcmRlciB0byBpbXByb3ZlIHBlcmZvcm1hbmNlLiBIb3dldmVyLCBhIHNpZGUgZWZmZWN0IGZyb20gdGhpcyBpcyB0aGF0IHRoZSBleGFjdCBzYW1lIEpTWCBub2RlIHNob3VsZCBub3QgYmUgcmV1c2VkLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiBwbGVhc2Ugc2VlIGh0dHBzOi8vc3RlbmNpbGpzLmNvbS9kb2NzL3RlbXBsYXRpbmctanN4I2F2b2lkLXNoYXJlZC1qc3gtbm9kZXNgKTtcbiAgfVxuICBpZiAoQlVJTEQyMC52ZG9tVGV4dCAmJiBuZXdWTm9kZTIuJHRleHQkICE9PSBudWxsKSB7XG4gICAgZWxtID0gbmV3Vk5vZGUyLiRlbG0kID0gd2luLmRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG5ld1ZOb2RlMi4kdGV4dCQpO1xuICB9IGVsc2UgaWYgKEJVSUxEMjAuc2xvdFJlbG9jYXRpb24gJiYgbmV3Vk5vZGUyLiRmbGFncyQgJiAxIC8qIGlzU2xvdFJlZmVyZW5jZSAqLykge1xuICAgIGVsbSA9IG5ld1ZOb2RlMi4kZWxtJCA9IEJVSUxEMjAuaXNEZWJ1ZyB8fCBCVUlMRDIwLmh5ZHJhdGVTZXJ2ZXJTaWRlID8gc2xvdFJlZmVyZW5jZURlYnVnTm9kZShuZXdWTm9kZTIpIDogd2luLmRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpO1xuICAgIGlmIChCVUlMRDIwLnZkb21BdHRyaWJ1dGUpIHtcbiAgICAgIHVwZGF0ZUVsZW1lbnQobnVsbCwgbmV3Vk5vZGUyLCBpc1N2Z01vZGUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoQlVJTEQyMC5zdmcgJiYgIWlzU3ZnTW9kZSkge1xuICAgICAgaXNTdmdNb2RlID0gbmV3Vk5vZGUyLiR0YWckID09PSBcInN2Z1wiO1xuICAgIH1cbiAgICBpZiAoIXdpbi5kb2N1bWVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IGFyZSB0cnlpbmcgdG8gcmVuZGVyIGEgU3RlbmNpbCBjb21wb25lbnQgaW4gYW4gZW52aXJvbm1lbnQgdGhhdCBkb2Vzbid0IHN1cHBvcnQgdGhlIERPTS4gTWFrZSBzdXJlIHRvIHBvcHVsYXRlIHRoZSBbYHdpbmRvd2BdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3cvd2luZG93KSBvYmplY3QgYmVmb3JlIHJlbmRlcmluZyBhIGNvbXBvbmVudC5cIik7XG4gICAgfVxuICAgIGVsbSA9IG5ld1ZOb2RlMi4kZWxtJCA9IEJVSUxEMjAuc3ZnID8gd2luLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhpc1N2Z01vZGUgPyBTVkdfTlMgOiBIVE1MX05TLCAhdXNlTmF0aXZlU2hhZG93RG9tICYmIEJVSUxEMjAuc2xvdFJlbG9jYXRpb24gJiYgbmV3Vk5vZGUyLiRmbGFncyQgJiAyIC8qIGlzU2xvdEZhbGxiYWNrICovID8gXCJzbG90LWZiXCIgOiBuZXdWTm9kZTIuJHRhZyQpIDogd2luLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIXVzZU5hdGl2ZVNoYWRvd0RvbSAmJiBCVUlMRDIwLnNsb3RSZWxvY2F0aW9uICYmIG5ld1ZOb2RlMi4kZmxhZ3MkICYgMiAvKiBpc1Nsb3RGYWxsYmFjayAqLyA/IFwic2xvdC1mYlwiIDogbmV3Vk5vZGUyLiR0YWckKTtcbiAgICBpZiAoQlVJTEQyMC5zdmcgJiYgaXNTdmdNb2RlICYmIG5ld1ZOb2RlMi4kdGFnJCA9PT0gXCJmb3JlaWduT2JqZWN0XCIpIHtcbiAgICAgIGlzU3ZnTW9kZSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoQlVJTEQyMC52ZG9tQXR0cmlidXRlKSB7XG4gICAgICB1cGRhdGVFbGVtZW50KG51bGwsIG5ld1ZOb2RlMiwgaXNTdmdNb2RlKTtcbiAgICB9XG4gICAgaWYgKChCVUlMRDIwLnNjb3BlZCB8fCBCVUlMRDIwLmh5ZHJhdGVTZXJ2ZXJTaWRlICYmIDEyOCAvKiBzaGFkb3dOZWVkc1Njb3BlZENzcyAqLykgJiYgaXNEZWYoc2NvcGVJZCkgJiYgZWxtW1wicy1zaVwiXSAhPT0gc2NvcGVJZCkge1xuICAgICAgZWxtLmNsYXNzTGlzdC5hZGQoZWxtW1wicy1zaVwiXSA9IHNjb3BlSWQpO1xuICAgIH1cbiAgICBpZiAobmV3Vk5vZGUyLiRjaGlsZHJlbiQpIHtcbiAgICAgIGZvciAoaTIgPSAwOyBpMiA8IG5ld1ZOb2RlMi4kY2hpbGRyZW4kLmxlbmd0aDsgKytpMikge1xuICAgICAgICBjaGlsZE5vZGUgPSBjcmVhdGVFbG0ob2xkUGFyZW50Vk5vZGUsIG5ld1ZOb2RlMiwgaTIpO1xuICAgICAgICBpZiAoY2hpbGROb2RlKSB7XG4gICAgICAgICAgZWxtLmFwcGVuZENoaWxkKGNoaWxkTm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKEJVSUxEMjAuc3ZnKSB7XG4gICAgICBpZiAobmV3Vk5vZGUyLiR0YWckID09PSBcInN2Z1wiKSB7XG4gICAgICAgIGlzU3ZnTW9kZSA9IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmIChlbG0udGFnTmFtZSA9PT0gXCJmb3JlaWduT2JqZWN0XCIpIHtcbiAgICAgICAgaXNTdmdNb2RlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZWxtW1wicy1oblwiXSA9IGhvc3RUYWdOYW1lO1xuICBpZiAoQlVJTEQyMC5zbG90UmVsb2NhdGlvbikge1xuICAgIGlmIChuZXdWTm9kZTIuJGZsYWdzJCAmICgyIC8qIGlzU2xvdEZhbGxiYWNrICovIHwgMSAvKiBpc1Nsb3RSZWZlcmVuY2UgKi8pKSB7XG4gICAgICBlbG1bXCJzLXNyXCJdID0gdHJ1ZTtcbiAgICAgIGVsbVtcInMtY3JcIl0gPSBjb250ZW50UmVmO1xuICAgICAgZWxtW1wicy1zblwiXSA9IG5ld1ZOb2RlMi4kbmFtZSQgfHwgXCJcIjtcbiAgICAgIGVsbVtcInMtcmZcIl0gPSAoX2EgPSBuZXdWTm9kZTIuJGF0dHJzJCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLnJlZjtcbiAgICAgIHBhdGNoU2xvdE5vZGUoZWxtKTtcbiAgICAgIG9sZFZOb2RlID0gb2xkUGFyZW50Vk5vZGUgJiYgb2xkUGFyZW50Vk5vZGUuJGNoaWxkcmVuJCAmJiBvbGRQYXJlbnRWTm9kZS4kY2hpbGRyZW4kW2NoaWxkSW5kZXhdO1xuICAgICAgaWYgKG9sZFZOb2RlICYmIG9sZFZOb2RlLiR0YWckID09PSBuZXdWTm9kZTIuJHRhZyQgJiYgb2xkUGFyZW50Vk5vZGUuJGVsbSQpIHtcbiAgICAgICAgaWYgKEJVSUxEMjAuZXhwZXJpbWVudGFsU2xvdEZpeGVzKSB7XG4gICAgICAgICAgcmVsb2NhdGVUb0hvc3RSb290KG9sZFBhcmVudFZOb2RlLiRlbG0kKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwdXRCYWNrSW5PcmlnaW5hbExvY2F0aW9uKG9sZFBhcmVudFZOb2RlLiRlbG0kLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChCVUlMRDIwLnNjb3BlZCB8fCBCVUlMRDIwLmh5ZHJhdGVTZXJ2ZXJTaWRlICYmIDEyOCAvKiBzaGFkb3dOZWVkc1Njb3BlZENzcyAqLykge1xuICAgICAgICBhZGRSZW1vdmVTbG90U2NvcGVkQ2xhc3MoY29udGVudFJlZiwgZWxtLCBuZXdQYXJlbnRWTm9kZS4kZWxtJCwgb2xkUGFyZW50Vk5vZGUgPT0gbnVsbCA/IHZvaWQgMCA6IG9sZFBhcmVudFZOb2RlLiRlbG0kKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGVsbTtcbn07XG52YXIgcmVsb2NhdGVUb0hvc3RSb290ID0gcGFyZW50RWxtID0+IHtcbiAgcGx0LiRmbGFncyQgfD0gMSAvKiBpc1RtcERpc2Nvbm5lY3RlZCAqLztcbiAgY29uc3QgaG9zdCA9IHBhcmVudEVsbS5jbG9zZXN0KGhvc3RUYWdOYW1lLnRvTG93ZXJDYXNlKCkpO1xuICBpZiAoaG9zdCAhPSBudWxsKSB7XG4gICAgY29uc3QgY29udGVudFJlZk5vZGUgPSBBcnJheS5mcm9tKGhvc3QuX19jaGlsZE5vZGVzIHx8IGhvc3QuY2hpbGROb2RlcykuZmluZChyZWYgPT4gcmVmW1wicy1jclwiXSk7XG4gICAgY29uc3QgY2hpbGROb2RlQXJyYXkgPSBBcnJheS5mcm9tKHBhcmVudEVsbS5fX2NoaWxkTm9kZXMgfHwgcGFyZW50RWxtLmNoaWxkTm9kZXMpO1xuICAgIGZvciAoY29uc3QgY2hpbGROb2RlIG9mIGNvbnRlbnRSZWZOb2RlID8gY2hpbGROb2RlQXJyYXkucmV2ZXJzZSgpIDogY2hpbGROb2RlQXJyYXkpIHtcbiAgICAgIGlmIChjaGlsZE5vZGVbXCJzLXNoXCJdICE9IG51bGwpIHtcbiAgICAgICAgaW5zZXJ0QmVmb3JlKGhvc3QsIGNoaWxkTm9kZSwgY29udGVudFJlZk5vZGUgIT0gbnVsbCA/IGNvbnRlbnRSZWZOb2RlIDogbnVsbCk7XG4gICAgICAgIGNoaWxkTm9kZVtcInMtc2hcIl0gPSB2b2lkIDA7XG4gICAgICAgIGNoZWNrU2xvdFJlbG9jYXRlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcGx0LiRmbGFncyQgJj0gfjEgLyogaXNUbXBEaXNjb25uZWN0ZWQgKi87XG59O1xudmFyIHB1dEJhY2tJbk9yaWdpbmFsTG9jYXRpb24gPSAocGFyZW50RWxtLCByZWN1cnNpdmUpID0+IHtcbiAgcGx0LiRmbGFncyQgfD0gMSAvKiBpc1RtcERpc2Nvbm5lY3RlZCAqLztcbiAgY29uc3Qgb2xkU2xvdENoaWxkTm9kZXMgPSBBcnJheS5mcm9tKHBhcmVudEVsbS5fX2NoaWxkTm9kZXMgfHwgcGFyZW50RWxtLmNoaWxkTm9kZXMpO1xuICBpZiAocGFyZW50RWxtW1wicy1zclwiXSAmJiBCVUlMRDIwLmV4cGVyaW1lbnRhbFNsb3RGaXhlcykge1xuICAgIGxldCBub2RlID0gcGFyZW50RWxtO1xuICAgIHdoaWxlIChub2RlID0gbm9kZS5uZXh0U2libGluZykge1xuICAgICAgaWYgKG5vZGUgJiYgbm9kZVtcInMtc25cIl0gPT09IHBhcmVudEVsbVtcInMtc25cIl0gJiYgbm9kZVtcInMtc2hcIl0gPT09IGhvc3RUYWdOYW1lKSB7XG4gICAgICAgIG9sZFNsb3RDaGlsZE5vZGVzLnB1c2gobm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZvciAobGV0IGkyID0gb2xkU2xvdENoaWxkTm9kZXMubGVuZ3RoIC0gMTsgaTIgPj0gMDsgaTItLSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZSA9IG9sZFNsb3RDaGlsZE5vZGVzW2kyXTtcbiAgICBpZiAoY2hpbGROb2RlW1wicy1oblwiXSAhPT0gaG9zdFRhZ05hbWUgJiYgY2hpbGROb2RlW1wicy1vbFwiXSkge1xuICAgICAgaW5zZXJ0QmVmb3JlKHJlZmVyZW5jZU5vZGUoY2hpbGROb2RlKS5wYXJlbnROb2RlLCBjaGlsZE5vZGUsIHJlZmVyZW5jZU5vZGUoY2hpbGROb2RlKSk7XG4gICAgICBjaGlsZE5vZGVbXCJzLW9sXCJdLnJlbW92ZSgpO1xuICAgICAgY2hpbGROb2RlW1wicy1vbFwiXSA9IHZvaWQgMDtcbiAgICAgIGNoaWxkTm9kZVtcInMtc2hcIl0gPSB2b2lkIDA7XG4gICAgICBjaGVja1Nsb3RSZWxvY2F0ZSA9IHRydWU7XG4gICAgfVxuICAgIGlmIChyZWN1cnNpdmUpIHtcbiAgICAgIHB1dEJhY2tJbk9yaWdpbmFsTG9jYXRpb24oY2hpbGROb2RlLCByZWN1cnNpdmUpO1xuICAgIH1cbiAgfVxuICBwbHQuJGZsYWdzJCAmPSB+MSAvKiBpc1RtcERpc2Nvbm5lY3RlZCAqLztcbn07XG52YXIgYWRkVm5vZGVzID0gKHBhcmVudEVsbSwgYmVmb3JlLCBwYXJlbnRWTm9kZSwgdm5vZGVzLCBzdGFydElkeCwgZW5kSWR4KSA9PiB7XG4gIGxldCBjb250YWluZXJFbG0gPSBCVUlMRDIwLnNsb3RSZWxvY2F0aW9uICYmIHBhcmVudEVsbVtcInMtY3JcIl0gJiYgcGFyZW50RWxtW1wicy1jclwiXS5wYXJlbnROb2RlIHx8IHBhcmVudEVsbTtcbiAgbGV0IGNoaWxkTm9kZTtcbiAgaWYgKEJVSUxEMjAuc2hhZG93RG9tICYmIGNvbnRhaW5lckVsbS5zaGFkb3dSb290ICYmIGNvbnRhaW5lckVsbS50YWdOYW1lID09PSBob3N0VGFnTmFtZSkge1xuICAgIGNvbnRhaW5lckVsbSA9IGNvbnRhaW5lckVsbS5zaGFkb3dSb290O1xuICB9XG4gIGZvciAoOyBzdGFydElkeCA8PSBlbmRJZHg7ICsrc3RhcnRJZHgpIHtcbiAgICBpZiAodm5vZGVzW3N0YXJ0SWR4XSkge1xuICAgICAgY2hpbGROb2RlID0gY3JlYXRlRWxtKG51bGwsIHBhcmVudFZOb2RlLCBzdGFydElkeCk7XG4gICAgICBpZiAoY2hpbGROb2RlKSB7XG4gICAgICAgIHZub2Rlc1tzdGFydElkeF0uJGVsbSQgPSBjaGlsZE5vZGU7XG4gICAgICAgIGluc2VydEJlZm9yZShjb250YWluZXJFbG0sIGNoaWxkTm9kZSwgQlVJTEQyMC5zbG90UmVsb2NhdGlvbiA/IHJlZmVyZW5jZU5vZGUoYmVmb3JlKSA6IGJlZm9yZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xudmFyIHJlbW92ZVZub2RlcyA9ICh2bm9kZXMsIHN0YXJ0SWR4LCBlbmRJZHgpID0+IHtcbiAgZm9yIChsZXQgaW5kZXggPSBzdGFydElkeDsgaW5kZXggPD0gZW5kSWR4OyArK2luZGV4KSB7XG4gICAgY29uc3Qgdm5vZGUgPSB2bm9kZXNbaW5kZXhdO1xuICAgIGlmICh2bm9kZSkge1xuICAgICAgY29uc3QgZWxtID0gdm5vZGUuJGVsbSQ7XG4gICAgICBudWxsaWZ5Vk5vZGVSZWZzKHZub2RlKTtcbiAgICAgIGlmIChlbG0pIHtcbiAgICAgICAgaWYgKEJVSUxEMjAuc2xvdFJlbG9jYXRpb24pIHtcbiAgICAgICAgICBjaGVja1Nsb3RGYWxsYmFja1Zpc2liaWxpdHkgPSB0cnVlO1xuICAgICAgICAgIGlmIChlbG1bXCJzLW9sXCJdKSB7XG4gICAgICAgICAgICBlbG1bXCJzLW9sXCJdLnJlbW92ZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwdXRCYWNrSW5PcmlnaW5hbExvY2F0aW9uKGVsbSwgdHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsbS5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG52YXIgdXBkYXRlQ2hpbGRyZW4gPSAocGFyZW50RWxtLCBvbGRDaCwgbmV3Vk5vZGUyLCBuZXdDaCwgaXNJbml0aWFsUmVuZGVyID0gZmFsc2UpID0+IHtcbiAgbGV0IG9sZFN0YXJ0SWR4ID0gMDtcbiAgbGV0IG5ld1N0YXJ0SWR4ID0gMDtcbiAgbGV0IGlkeEluT2xkID0gMDtcbiAgbGV0IGkyID0gMDtcbiAgbGV0IG9sZEVuZElkeCA9IG9sZENoLmxlbmd0aCAtIDE7XG4gIGxldCBvbGRTdGFydFZub2RlID0gb2xkQ2hbMF07XG4gIGxldCBvbGRFbmRWbm9kZSA9IG9sZENoW29sZEVuZElkeF07XG4gIGxldCBuZXdFbmRJZHggPSBuZXdDaC5sZW5ndGggLSAxO1xuICBsZXQgbmV3U3RhcnRWbm9kZSA9IG5ld0NoWzBdO1xuICBsZXQgbmV3RW5kVm5vZGUgPSBuZXdDaFtuZXdFbmRJZHhdO1xuICBsZXQgbm9kZTtcbiAgbGV0IGVsbVRvTW92ZTtcbiAgd2hpbGUgKG9sZFN0YXJ0SWR4IDw9IG9sZEVuZElkeCAmJiBuZXdTdGFydElkeCA8PSBuZXdFbmRJZHgpIHtcbiAgICBpZiAob2xkU3RhcnRWbm9kZSA9PSBudWxsKSB7XG4gICAgICBvbGRTdGFydFZub2RlID0gb2xkQ2hbKytvbGRTdGFydElkeF07XG4gICAgfSBlbHNlIGlmIChvbGRFbmRWbm9kZSA9PSBudWxsKSB7XG4gICAgICBvbGRFbmRWbm9kZSA9IG9sZENoWy0tb2xkRW5kSWR4XTtcbiAgICB9IGVsc2UgaWYgKG5ld1N0YXJ0Vm5vZGUgPT0gbnVsbCkge1xuICAgICAgbmV3U3RhcnRWbm9kZSA9IG5ld0NoWysrbmV3U3RhcnRJZHhdO1xuICAgIH0gZWxzZSBpZiAobmV3RW5kVm5vZGUgPT0gbnVsbCkge1xuICAgICAgbmV3RW5kVm5vZGUgPSBuZXdDaFstLW5ld0VuZElkeF07XG4gICAgfSBlbHNlIGlmIChpc1NhbWVWbm9kZShvbGRTdGFydFZub2RlLCBuZXdTdGFydFZub2RlLCBpc0luaXRpYWxSZW5kZXIpKSB7XG4gICAgICBwYXRjaChvbGRTdGFydFZub2RlLCBuZXdTdGFydFZub2RlLCBpc0luaXRpYWxSZW5kZXIpO1xuICAgICAgb2xkU3RhcnRWbm9kZSA9IG9sZENoWysrb2xkU3RhcnRJZHhdO1xuICAgICAgbmV3U3RhcnRWbm9kZSA9IG5ld0NoWysrbmV3U3RhcnRJZHhdO1xuICAgIH0gZWxzZSBpZiAoaXNTYW1lVm5vZGUob2xkRW5kVm5vZGUsIG5ld0VuZFZub2RlLCBpc0luaXRpYWxSZW5kZXIpKSB7XG4gICAgICBwYXRjaChvbGRFbmRWbm9kZSwgbmV3RW5kVm5vZGUsIGlzSW5pdGlhbFJlbmRlcik7XG4gICAgICBvbGRFbmRWbm9kZSA9IG9sZENoWy0tb2xkRW5kSWR4XTtcbiAgICAgIG5ld0VuZFZub2RlID0gbmV3Q2hbLS1uZXdFbmRJZHhdO1xuICAgIH0gZWxzZSBpZiAoaXNTYW1lVm5vZGUob2xkU3RhcnRWbm9kZSwgbmV3RW5kVm5vZGUsIGlzSW5pdGlhbFJlbmRlcikpIHtcbiAgICAgIGlmIChCVUlMRDIwLnNsb3RSZWxvY2F0aW9uICYmIChvbGRTdGFydFZub2RlLiR0YWckID09PSBcInNsb3RcIiB8fCBuZXdFbmRWbm9kZS4kdGFnJCA9PT0gXCJzbG90XCIpKSB7XG4gICAgICAgIHB1dEJhY2tJbk9yaWdpbmFsTG9jYXRpb24ob2xkU3RhcnRWbm9kZS4kZWxtJC5wYXJlbnROb2RlLCBmYWxzZSk7XG4gICAgICB9XG4gICAgICBwYXRjaChvbGRTdGFydFZub2RlLCBuZXdFbmRWbm9kZSwgaXNJbml0aWFsUmVuZGVyKTtcbiAgICAgIGluc2VydEJlZm9yZShwYXJlbnRFbG0sIG9sZFN0YXJ0Vm5vZGUuJGVsbSQsIG9sZEVuZFZub2RlLiRlbG0kLm5leHRTaWJsaW5nKTtcbiAgICAgIG9sZFN0YXJ0Vm5vZGUgPSBvbGRDaFsrK29sZFN0YXJ0SWR4XTtcbiAgICAgIG5ld0VuZFZub2RlID0gbmV3Q2hbLS1uZXdFbmRJZHhdO1xuICAgIH0gZWxzZSBpZiAoaXNTYW1lVm5vZGUob2xkRW5kVm5vZGUsIG5ld1N0YXJ0Vm5vZGUsIGlzSW5pdGlhbFJlbmRlcikpIHtcbiAgICAgIGlmIChCVUlMRDIwLnNsb3RSZWxvY2F0aW9uICYmIChvbGRTdGFydFZub2RlLiR0YWckID09PSBcInNsb3RcIiB8fCBuZXdFbmRWbm9kZS4kdGFnJCA9PT0gXCJzbG90XCIpKSB7XG4gICAgICAgIHB1dEJhY2tJbk9yaWdpbmFsTG9jYXRpb24ob2xkRW5kVm5vZGUuJGVsbSQucGFyZW50Tm9kZSwgZmFsc2UpO1xuICAgICAgfVxuICAgICAgcGF0Y2gob2xkRW5kVm5vZGUsIG5ld1N0YXJ0Vm5vZGUsIGlzSW5pdGlhbFJlbmRlcik7XG4gICAgICBpbnNlcnRCZWZvcmUocGFyZW50RWxtLCBvbGRFbmRWbm9kZS4kZWxtJCwgb2xkU3RhcnRWbm9kZS4kZWxtJCk7XG4gICAgICBvbGRFbmRWbm9kZSA9IG9sZENoWy0tb2xkRW5kSWR4XTtcbiAgICAgIG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFsrK25ld1N0YXJ0SWR4XTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWR4SW5PbGQgPSAtMTtcbiAgICAgIGlmIChCVUlMRDIwLnZkb21LZXkpIHtcbiAgICAgICAgZm9yIChpMiA9IG9sZFN0YXJ0SWR4OyBpMiA8PSBvbGRFbmRJZHg7ICsraTIpIHtcbiAgICAgICAgICBpZiAob2xkQ2hbaTJdICYmIG9sZENoW2kyXS4ka2V5JCAhPT0gbnVsbCAmJiBvbGRDaFtpMl0uJGtleSQgPT09IG5ld1N0YXJ0Vm5vZGUuJGtleSQpIHtcbiAgICAgICAgICAgIGlkeEluT2xkID0gaTI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChCVUlMRDIwLnZkb21LZXkgJiYgaWR4SW5PbGQgPj0gMCkge1xuICAgICAgICBlbG1Ub01vdmUgPSBvbGRDaFtpZHhJbk9sZF07XG4gICAgICAgIGlmIChlbG1Ub01vdmUuJHRhZyQgIT09IG5ld1N0YXJ0Vm5vZGUuJHRhZyQpIHtcbiAgICAgICAgICBub2RlID0gY3JlYXRlRWxtKG9sZENoICYmIG9sZENoW25ld1N0YXJ0SWR4XSwgbmV3Vk5vZGUyLCBpZHhJbk9sZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGF0Y2goZWxtVG9Nb3ZlLCBuZXdTdGFydFZub2RlLCBpc0luaXRpYWxSZW5kZXIpO1xuICAgICAgICAgIG9sZENoW2lkeEluT2xkXSA9IHZvaWQgMDtcbiAgICAgICAgICBub2RlID0gZWxtVG9Nb3ZlLiRlbG0kO1xuICAgICAgICB9XG4gICAgICAgIG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFsrK25ld1N0YXJ0SWR4XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUgPSBjcmVhdGVFbG0ob2xkQ2ggJiYgb2xkQ2hbbmV3U3RhcnRJZHhdLCBuZXdWTm9kZTIsIG5ld1N0YXJ0SWR4KTtcbiAgICAgICAgbmV3U3RhcnRWbm9kZSA9IG5ld0NoWysrbmV3U3RhcnRJZHhdO1xuICAgICAgfVxuICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgaWYgKEJVSUxEMjAuc2xvdFJlbG9jYXRpb24pIHtcbiAgICAgICAgICBpbnNlcnRCZWZvcmUocmVmZXJlbmNlTm9kZShvbGRTdGFydFZub2RlLiRlbG0kKS5wYXJlbnROb2RlLCBub2RlLCByZWZlcmVuY2VOb2RlKG9sZFN0YXJ0Vm5vZGUuJGVsbSQpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpbnNlcnRCZWZvcmUob2xkU3RhcnRWbm9kZS4kZWxtJC5wYXJlbnROb2RlLCBub2RlLCBvbGRTdGFydFZub2RlLiRlbG0kKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAob2xkU3RhcnRJZHggPiBvbGRFbmRJZHgpIHtcbiAgICBhZGRWbm9kZXMocGFyZW50RWxtLCBuZXdDaFtuZXdFbmRJZHggKyAxXSA9PSBudWxsID8gbnVsbCA6IG5ld0NoW25ld0VuZElkeCArIDFdLiRlbG0kLCBuZXdWTm9kZTIsIG5ld0NoLCBuZXdTdGFydElkeCwgbmV3RW5kSWR4KTtcbiAgfSBlbHNlIGlmIChCVUlMRDIwLnVwZGF0YWJsZSAmJiBuZXdTdGFydElkeCA+IG5ld0VuZElkeCkge1xuICAgIHJlbW92ZVZub2RlcyhvbGRDaCwgb2xkU3RhcnRJZHgsIG9sZEVuZElkeCk7XG4gIH1cbn07XG52YXIgaXNTYW1lVm5vZGUgPSAobGVmdFZOb2RlLCByaWdodFZOb2RlLCBpc0luaXRpYWxSZW5kZXIgPSBmYWxzZSkgPT4ge1xuICBpZiAobGVmdFZOb2RlLiR0YWckID09PSByaWdodFZOb2RlLiR0YWckKSB7XG4gICAgaWYgKEJVSUxEMjAuc2xvdFJlbG9jYXRpb24gJiYgbGVmdFZOb2RlLiR0YWckID09PSBcInNsb3RcIikge1xuICAgICAgcmV0dXJuIGxlZnRWTm9kZS4kbmFtZSQgPT09IHJpZ2h0Vk5vZGUuJG5hbWUkO1xuICAgIH1cbiAgICBpZiAoQlVJTEQyMC52ZG9tS2V5ICYmICFpc0luaXRpYWxSZW5kZXIpIHtcbiAgICAgIHJldHVybiBsZWZ0Vk5vZGUuJGtleSQgPT09IHJpZ2h0Vk5vZGUuJGtleSQ7XG4gICAgfVxuICAgIGlmIChpc0luaXRpYWxSZW5kZXIgJiYgIWxlZnRWTm9kZS4ka2V5JCAmJiByaWdodFZOb2RlLiRrZXkkKSB7XG4gICAgICBsZWZ0Vk5vZGUuJGtleSQgPSByaWdodFZOb2RlLiRrZXkkO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xudmFyIHJlZmVyZW5jZU5vZGUgPSBub2RlID0+IG5vZGUgJiYgbm9kZVtcInMtb2xcIl0gfHwgbm9kZTtcbnZhciBwYXRjaCA9IChvbGRWTm9kZSwgbmV3Vk5vZGUyLCBpc0luaXRpYWxSZW5kZXIgPSBmYWxzZSkgPT4ge1xuICBjb25zdCBlbG0gPSBuZXdWTm9kZTIuJGVsbSQgPSBvbGRWTm9kZS4kZWxtJDtcbiAgY29uc3Qgb2xkQ2hpbGRyZW4gPSBvbGRWTm9kZS4kY2hpbGRyZW4kO1xuICBjb25zdCBuZXdDaGlsZHJlbiA9IG5ld1ZOb2RlMi4kY2hpbGRyZW4kO1xuICBjb25zdCB0YWcgPSBuZXdWTm9kZTIuJHRhZyQ7XG4gIGNvbnN0IHRleHQgPSBuZXdWTm9kZTIuJHRleHQkO1xuICBsZXQgZGVmYXVsdEhvbGRlcjtcbiAgaWYgKCFCVUlMRDIwLnZkb21UZXh0IHx8IHRleHQgPT09IG51bGwpIHtcbiAgICBpZiAoQlVJTEQyMC5zdmcpIHtcbiAgICAgIGlzU3ZnTW9kZSA9IHRhZyA9PT0gXCJzdmdcIiA/IHRydWUgOiB0YWcgPT09IFwiZm9yZWlnbk9iamVjdFwiID8gZmFsc2UgOiBpc1N2Z01vZGU7XG4gICAgfVxuICAgIGlmIChCVUlMRDIwLnZkb21BdHRyaWJ1dGUgfHwgQlVJTEQyMC5yZWZsZWN0KSB7XG4gICAgICBpZiAoQlVJTEQyMC5zbG90ICYmIHRhZyA9PT0gXCJzbG90XCIgJiYgIXVzZU5hdGl2ZVNoYWRvd0RvbSkge1xuICAgICAgICBpZiAoQlVJTEQyMC5leHBlcmltZW50YWxTbG90Rml4ZXMgJiYgb2xkVk5vZGUuJG5hbWUkICE9PSBuZXdWTm9kZTIuJG5hbWUkKSB7XG4gICAgICAgICAgbmV3Vk5vZGUyLiRlbG0kW1wicy1zblwiXSA9IG5ld1ZOb2RlMi4kbmFtZSQgfHwgXCJcIjtcbiAgICAgICAgICByZWxvY2F0ZVRvSG9zdFJvb3QobmV3Vk5vZGUyLiRlbG0kLnBhcmVudEVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB1cGRhdGVFbGVtZW50KG9sZFZOb2RlLCBuZXdWTm9kZTIsIGlzU3ZnTW9kZSwgaXNJbml0aWFsUmVuZGVyKTtcbiAgICB9XG4gICAgaWYgKEJVSUxEMjAudXBkYXRhYmxlICYmIG9sZENoaWxkcmVuICE9PSBudWxsICYmIG5ld0NoaWxkcmVuICE9PSBudWxsKSB7XG4gICAgICB1cGRhdGVDaGlsZHJlbihlbG0sIG9sZENoaWxkcmVuLCBuZXdWTm9kZTIsIG5ld0NoaWxkcmVuLCBpc0luaXRpYWxSZW5kZXIpO1xuICAgIH0gZWxzZSBpZiAobmV3Q2hpbGRyZW4gIT09IG51bGwpIHtcbiAgICAgIGlmIChCVUlMRDIwLnVwZGF0YWJsZSAmJiBCVUlMRDIwLnZkb21UZXh0ICYmIG9sZFZOb2RlLiR0ZXh0JCAhPT0gbnVsbCkge1xuICAgICAgICBlbG0udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgfVxuICAgICAgYWRkVm5vZGVzKGVsbSwgbnVsbCwgbmV3Vk5vZGUyLCBuZXdDaGlsZHJlbiwgMCwgbmV3Q2hpbGRyZW4ubGVuZ3RoIC0gMSk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAvLyBkb24ndCBkbyB0aGlzIG9uIGluaXRpYWwgcmVuZGVyIGFzIGl0IGNhbiBjYXVzZSBub24taHlkcmF0ZWQgY29udGVudCB0byBiZSByZW1vdmVkXG4gICAgIWlzSW5pdGlhbFJlbmRlciAmJiBCVUlMRDIwLnVwZGF0YWJsZSAmJiBvbGRDaGlsZHJlbiAhPT0gbnVsbCkge1xuICAgICAgcmVtb3ZlVm5vZGVzKG9sZENoaWxkcmVuLCAwLCBvbGRDaGlsZHJlbi5sZW5ndGggLSAxKTtcbiAgICB9IGVsc2UgaWYgKEJVSUxEMjAuaHlkcmF0ZUNsaWVudFNpZGUgJiYgaXNJbml0aWFsUmVuZGVyICYmIEJVSUxEMjAudXBkYXRhYmxlICYmIG9sZENoaWxkcmVuICE9PSBudWxsICYmIG5ld0NoaWxkcmVuID09PSBudWxsKSB7XG4gICAgICBuZXdWTm9kZTIuJGNoaWxkcmVuJCA9IG9sZENoaWxkcmVuO1xuICAgIH1cbiAgICBpZiAoQlVJTEQyMC5zdmcgJiYgaXNTdmdNb2RlICYmIHRhZyA9PT0gXCJzdmdcIikge1xuICAgICAgaXNTdmdNb2RlID0gZmFsc2U7XG4gICAgfVxuICB9IGVsc2UgaWYgKEJVSUxEMjAudmRvbVRleHQgJiYgQlVJTEQyMC5zbG90UmVsb2NhdGlvbiAmJiAoZGVmYXVsdEhvbGRlciA9IGVsbVtcInMtY3JcIl0pKSB7XG4gICAgZGVmYXVsdEhvbGRlci5wYXJlbnROb2RlLnRleHRDb250ZW50ID0gdGV4dDtcbiAgfSBlbHNlIGlmIChCVUlMRDIwLnZkb21UZXh0ICYmIG9sZFZOb2RlLiR0ZXh0JCAhPT0gdGV4dCkge1xuICAgIGVsbS5kYXRhID0gdGV4dDtcbiAgfVxufTtcbnZhciByZWxvY2F0ZU5vZGVzID0gW107XG52YXIgbWFya1Nsb3RDb250ZW50Rm9yUmVsb2NhdGlvbiA9IGVsbSA9PiB7XG4gIGxldCBub2RlO1xuICBsZXQgaG9zdENvbnRlbnROb2RlcztcbiAgbGV0IGo7XG4gIGNvbnN0IGNoaWxkcmVuID0gZWxtLl9fY2hpbGROb2RlcyB8fCBlbG0uY2hpbGROb2RlcztcbiAgZm9yIChjb25zdCBjaGlsZE5vZGUgb2YgY2hpbGRyZW4pIHtcbiAgICBpZiAoY2hpbGROb2RlW1wicy1zclwiXSAmJiAobm9kZSA9IGNoaWxkTm9kZVtcInMtY3JcIl0pICYmIG5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgaG9zdENvbnRlbnROb2RlcyA9IG5vZGUucGFyZW50Tm9kZS5fX2NoaWxkTm9kZXMgfHwgbm9kZS5wYXJlbnROb2RlLmNoaWxkTm9kZXM7XG4gICAgICBjb25zdCBzbG90TmFtZSA9IGNoaWxkTm9kZVtcInMtc25cIl07XG4gICAgICBmb3IgKGogPSBob3N0Q29udGVudE5vZGVzLmxlbmd0aCAtIDE7IGogPj0gMDsgai0tKSB7XG4gICAgICAgIG5vZGUgPSBob3N0Q29udGVudE5vZGVzW2pdO1xuICAgICAgICBpZiAoIW5vZGVbXCJzLWNuXCJdICYmICFub2RlW1wicy1uclwiXSAmJiBub2RlW1wicy1oblwiXSAhPT0gY2hpbGROb2RlW1wicy1oblwiXSAmJiAoIUJVSUxEMjAuZXhwZXJpbWVudGFsU2xvdEZpeGVzIHx8ICFub2RlW1wicy1zaFwiXSB8fCBub2RlW1wicy1zaFwiXSAhPT0gY2hpbGROb2RlW1wicy1oblwiXSkpIHtcbiAgICAgICAgICBpZiAoaXNOb2RlTG9jYXRlZEluU2xvdChub2RlLCBzbG90TmFtZSkpIHtcbiAgICAgICAgICAgIGxldCByZWxvY2F0ZU5vZGVEYXRhID0gcmVsb2NhdGVOb2Rlcy5maW5kKHIgPT4gci4kbm9kZVRvUmVsb2NhdGUkID09PSBub2RlKTtcbiAgICAgICAgICAgIGNoZWNrU2xvdEZhbGxiYWNrVmlzaWJpbGl0eSA9IHRydWU7XG4gICAgICAgICAgICBub2RlW1wicy1zblwiXSA9IG5vZGVbXCJzLXNuXCJdIHx8IHNsb3ROYW1lO1xuICAgICAgICAgICAgaWYgKHJlbG9jYXRlTm9kZURhdGEpIHtcbiAgICAgICAgICAgICAgcmVsb2NhdGVOb2RlRGF0YS4kbm9kZVRvUmVsb2NhdGUkW1wicy1zaFwiXSA9IGNoaWxkTm9kZVtcInMtaG5cIl07XG4gICAgICAgICAgICAgIHJlbG9jYXRlTm9kZURhdGEuJHNsb3RSZWZOb2RlJCA9IGNoaWxkTm9kZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG5vZGVbXCJzLXNoXCJdID0gY2hpbGROb2RlW1wicy1oblwiXTtcbiAgICAgICAgICAgICAgcmVsb2NhdGVOb2Rlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAkc2xvdFJlZk5vZGUkOiBjaGlsZE5vZGUsXG4gICAgICAgICAgICAgICAgJG5vZGVUb1JlbG9jYXRlJDogbm9kZVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChub2RlW1wicy1zclwiXSkge1xuICAgICAgICAgICAgICByZWxvY2F0ZU5vZGVzLm1hcChyZWxvY2F0ZU5vZGUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpc05vZGVMb2NhdGVkSW5TbG90KHJlbG9jYXRlTm9kZS4kbm9kZVRvUmVsb2NhdGUkLCBub2RlW1wicy1zblwiXSkpIHtcbiAgICAgICAgICAgICAgICAgIHJlbG9jYXRlTm9kZURhdGEgPSByZWxvY2F0ZU5vZGVzLmZpbmQociA9PiByLiRub2RlVG9SZWxvY2F0ZSQgPT09IG5vZGUpO1xuICAgICAgICAgICAgICAgICAgaWYgKHJlbG9jYXRlTm9kZURhdGEgJiYgIXJlbG9jYXRlTm9kZS4kc2xvdFJlZk5vZGUkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbG9jYXRlTm9kZS4kc2xvdFJlZk5vZGUkID0gcmVsb2NhdGVOb2RlRGF0YS4kc2xvdFJlZk5vZGUkO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmICghcmVsb2NhdGVOb2Rlcy5zb21lKHIgPT4gci4kbm9kZVRvUmVsb2NhdGUkID09PSBub2RlKSkge1xuICAgICAgICAgICAgcmVsb2NhdGVOb2Rlcy5wdXNoKHtcbiAgICAgICAgICAgICAgJG5vZGVUb1JlbG9jYXRlJDogbm9kZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjaGlsZE5vZGUubm9kZVR5cGUgPT09IDEgLyogRWxlbWVudE5vZGUgKi8pIHtcbiAgICAgIG1hcmtTbG90Q29udGVudEZvclJlbG9jYXRpb24oY2hpbGROb2RlKTtcbiAgICB9XG4gIH1cbn07XG52YXIgbnVsbGlmeVZOb2RlUmVmcyA9IHZOb2RlID0+IHtcbiAgaWYgKEJVSUxEMjAudmRvbVJlZikge1xuICAgIHZOb2RlLiRhdHRycyQgJiYgdk5vZGUuJGF0dHJzJC5yZWYgJiYgdk5vZGUuJGF0dHJzJC5yZWYobnVsbCk7XG4gICAgdk5vZGUuJGNoaWxkcmVuJCAmJiB2Tm9kZS4kY2hpbGRyZW4kLm1hcChudWxsaWZ5Vk5vZGVSZWZzKTtcbiAgfVxufTtcbnZhciBpbnNlcnRCZWZvcmUgPSAocGFyZW50LCBuZXdOb2RlLCByZWZlcmVuY2UpID0+IHtcbiAgaWYgKEJVSUxEMjAuc2NvcGVkICYmIHR5cGVvZiBuZXdOb2RlW1wicy1zblwiXSA9PT0gXCJzdHJpbmdcIiAmJiAhIW5ld05vZGVbXCJzLXNyXCJdICYmICEhbmV3Tm9kZVtcInMtY3JcIl0pIHtcbiAgICBhZGRSZW1vdmVTbG90U2NvcGVkQ2xhc3MobmV3Tm9kZVtcInMtY3JcIl0sIG5ld05vZGUsIHBhcmVudCwgbmV3Tm9kZS5wYXJlbnRFbGVtZW50KTtcbiAgfSBlbHNlIGlmIChCVUlMRDIwLmV4cGVyaW1lbnRhbFNsb3RGaXhlcyAmJiB0eXBlb2YgbmV3Tm9kZVtcInMtc25cIl0gPT09IFwic3RyaW5nXCIpIHtcbiAgICBpZiAocGFyZW50LmdldFJvb3ROb2RlKCkubm9kZVR5cGUgIT09IDExIC8qIERPQ1VNRU5UX0ZSQUdNRU5UX05PREUgKi8pIHtcbiAgICAgIHBhdGNoUGFyZW50Tm9kZShuZXdOb2RlKTtcbiAgICB9XG4gICAgcGFyZW50Lmluc2VydEJlZm9yZShuZXdOb2RlLCByZWZlcmVuY2UpO1xuICAgIGNvbnN0IHtcbiAgICAgIHNsb3ROb2RlXG4gICAgfSA9IGZpbmRTbG90RnJvbVNsb3R0ZWROb2RlKG5ld05vZGUpO1xuICAgIGlmIChzbG90Tm9kZSkgZGlzcGF0Y2hTbG90Q2hhbmdlRXZlbnQoc2xvdE5vZGUpO1xuICAgIHJldHVybiBuZXdOb2RlO1xuICB9XG4gIGlmIChCVUlMRDIwLmV4cGVyaW1lbnRhbFNsb3RGaXhlcyAmJiBwYXJlbnQuX19pbnNlcnRCZWZvcmUpIHtcbiAgICByZXR1cm4gcGFyZW50Ll9faW5zZXJ0QmVmb3JlKG5ld05vZGUsIHJlZmVyZW5jZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHBhcmVudCA9PSBudWxsID8gdm9pZCAwIDogcGFyZW50Lmluc2VydEJlZm9yZShuZXdOb2RlLCByZWZlcmVuY2UpO1xuICB9XG59O1xuZnVuY3Rpb24gYWRkUmVtb3ZlU2xvdFNjb3BlZENsYXNzKHJlZmVyZW5jZSwgc2xvdE5vZGUsIG5ld1BhcmVudCwgb2xkUGFyZW50KSB7XG4gIHZhciBfYSwgX2I7XG4gIGxldCBzY29wZUlkMjtcbiAgaWYgKHJlZmVyZW5jZSAmJiB0eXBlb2Ygc2xvdE5vZGVbXCJzLXNuXCJdID09PSBcInN0cmluZ1wiICYmICEhc2xvdE5vZGVbXCJzLXNyXCJdICYmIHJlZmVyZW5jZS5wYXJlbnROb2RlICYmIHJlZmVyZW5jZS5wYXJlbnROb2RlW1wicy1zY1wiXSAmJiAoc2NvcGVJZDIgPSBzbG90Tm9kZVtcInMtc2lcIl0gfHwgcmVmZXJlbmNlLnBhcmVudE5vZGVbXCJzLXNjXCJdKSkge1xuICAgIGNvbnN0IHNjb3BlTmFtZSA9IHNsb3ROb2RlW1wicy1zblwiXTtcbiAgICBjb25zdCBob3N0TmFtZSA9IHNsb3ROb2RlW1wicy1oblwiXTtcbiAgICAoX2EgPSBuZXdQYXJlbnQuY2xhc3NMaXN0KSA9PSBudWxsID8gdm9pZCAwIDogX2EuYWRkKHNjb3BlSWQyICsgXCItc1wiKTtcbiAgICBpZiAob2xkUGFyZW50ICYmICgoX2IgPSBvbGRQYXJlbnQuY2xhc3NMaXN0KSA9PSBudWxsID8gdm9pZCAwIDogX2IuY29udGFpbnMoc2NvcGVJZDIgKyBcIi1zXCIpKSkge1xuICAgICAgbGV0IGNoaWxkID0gKG9sZFBhcmVudC5fX2NoaWxkTm9kZXMgfHwgb2xkUGFyZW50LmNoaWxkTm9kZXMpWzBdO1xuICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgaWYgKGNoaWxkW1wicy1zblwiXSAhPT0gc2NvcGVOYW1lICYmIGNoaWxkW1wicy1oblwiXSA9PT0gaG9zdE5hbWUgJiYgISFjaGlsZFtcInMtc3JcIl0pIHtcbiAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICAgIH1cbiAgICAgIGlmICghZm91bmQpIG9sZFBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKHNjb3BlSWQyICsgXCItc1wiKTtcbiAgICB9XG4gIH1cbn1cbnZhciByZW5kZXJWZG9tID0gKGhvc3RSZWYsIHJlbmRlckZuUmVzdWx0cywgaXNJbml0aWFsTG9hZCA9IGZhbHNlKSA9PiB7XG4gIHZhciBfYSwgX2IsIF9jLCBfZCwgX2U7XG4gIGNvbnN0IGhvc3RFbG0gPSBob3N0UmVmLiRob3N0RWxlbWVudCQ7XG4gIGNvbnN0IGNtcE1ldGEgPSBob3N0UmVmLiRjbXBNZXRhJDtcbiAgY29uc3Qgb2xkVk5vZGUgPSBob3N0UmVmLiR2bm9kZSQgfHwgbmV3Vk5vZGUobnVsbCwgbnVsbCk7XG4gIGNvbnN0IGlzSG9zdEVsZW1lbnQgPSBpc0hvc3QocmVuZGVyRm5SZXN1bHRzKTtcbiAgY29uc3Qgcm9vdFZub2RlID0gaXNIb3N0RWxlbWVudCA/IHJlbmRlckZuUmVzdWx0cyA6IGgobnVsbCwgbnVsbCwgcmVuZGVyRm5SZXN1bHRzKTtcbiAgaG9zdFRhZ05hbWUgPSBob3N0RWxtLnRhZ05hbWU7XG4gIGlmIChCVUlMRDIwLmlzRGV2ICYmIEFycmF5LmlzQXJyYXkocmVuZGVyRm5SZXN1bHRzKSAmJiByZW5kZXJGblJlc3VsdHMuc29tZShpc0hvc3QpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgPEhvc3Q+IG11c3QgYmUgdGhlIHNpbmdsZSByb290IGNvbXBvbmVudC5cbkxvb2tzIGxpa2UgdGhlIHJlbmRlcigpIGZ1bmN0aW9uIG9mIFwiJHtob3N0VGFnTmFtZS50b0xvd2VyQ2FzZSgpfVwiIGlzIHJldHVybmluZyBhbiBhcnJheSB0aGF0IGNvbnRhaW5zIHRoZSA8SG9zdD4uXG5cblRoZSByZW5kZXIoKSBmdW5jdGlvbiBzaG91bGQgbG9vayBsaWtlIHRoaXMgaW5zdGVhZDpcblxucmVuZGVyKCkge1xuICAvLyBEbyBub3QgcmV0dXJuIGFuIGFycmF5XG4gIHJldHVybiAoXG4gICAgPEhvc3Q+e2NvbnRlbnR9PC9Ib3N0PlxuICApO1xufVxuICBgKTtcbiAgfVxuICBpZiAoQlVJTEQyMC5yZWZsZWN0ICYmIGNtcE1ldGEuJGF0dHJzVG9SZWZsZWN0JCkge1xuICAgIHJvb3RWbm9kZS4kYXR0cnMkID0gcm9vdFZub2RlLiRhdHRycyQgfHwge307XG4gICAgY21wTWV0YS4kYXR0cnNUb1JlZmxlY3QkLm1hcCgoW3Byb3BOYW1lLCBhdHRyaWJ1dGVdKSA9PiByb290Vm5vZGUuJGF0dHJzJFthdHRyaWJ1dGVdID0gaG9zdEVsbVtwcm9wTmFtZV0pO1xuICB9XG4gIGlmIChpc0luaXRpYWxMb2FkICYmIHJvb3RWbm9kZS4kYXR0cnMkKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMocm9vdFZub2RlLiRhdHRycyQpKSB7XG4gICAgICBpZiAoaG9zdEVsbS5oYXNBdHRyaWJ1dGUoa2V5KSAmJiAhW1wia2V5XCIsIFwicmVmXCIsIFwic3R5bGVcIiwgXCJjbGFzc1wiXS5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgIHJvb3RWbm9kZS4kYXR0cnMkW2tleV0gPSBob3N0RWxtW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJvb3RWbm9kZS4kdGFnJCA9IG51bGw7XG4gIHJvb3RWbm9kZS4kZmxhZ3MkIHw9IDQgLyogaXNIb3N0ICovO1xuICBob3N0UmVmLiR2bm9kZSQgPSByb290Vm5vZGU7XG4gIHJvb3RWbm9kZS4kZWxtJCA9IG9sZFZOb2RlLiRlbG0kID0gQlVJTEQyMC5zaGFkb3dEb20gPyBob3N0RWxtLnNoYWRvd1Jvb3QgfHwgaG9zdEVsbSA6IGhvc3RFbG07XG4gIGlmIChCVUlMRDIwLnNjb3BlZCB8fCBCVUlMRDIwLnNoYWRvd0RvbSkge1xuICAgIHNjb3BlSWQgPSBob3N0RWxtW1wicy1zY1wiXTtcbiAgfVxuICB1c2VOYXRpdmVTaGFkb3dEb20gPSBzdXBwb3J0c1NoYWRvdyAmJiAhIShjbXBNZXRhLiRmbGFncyQgJiAxIC8qIHNoYWRvd0RvbUVuY2Fwc3VsYXRpb24gKi8pICYmICEoY21wTWV0YS4kZmxhZ3MkICYgMTI4IC8qIHNoYWRvd05lZWRzU2NvcGVkQ3NzICovKTtcbiAgaWYgKEJVSUxEMjAuc2xvdFJlbG9jYXRpb24pIHtcbiAgICBjb250ZW50UmVmID0gaG9zdEVsbVtcInMtY3JcIl07XG4gICAgY2hlY2tTbG90RmFsbGJhY2tWaXNpYmlsaXR5ID0gZmFsc2U7XG4gIH1cbiAgcGF0Y2gob2xkVk5vZGUsIHJvb3RWbm9kZSwgaXNJbml0aWFsTG9hZCk7XG4gIGlmIChCVUlMRDIwLnNsb3RSZWxvY2F0aW9uKSB7XG4gICAgcGx0LiRmbGFncyQgfD0gMSAvKiBpc1RtcERpc2Nvbm5lY3RlZCAqLztcbiAgICBpZiAoY2hlY2tTbG90UmVsb2NhdGUpIHtcbiAgICAgIG1hcmtTbG90Q29udGVudEZvclJlbG9jYXRpb24ocm9vdFZub2RlLiRlbG0kKTtcbiAgICAgIGZvciAoY29uc3QgcmVsb2NhdGVEYXRhIG9mIHJlbG9jYXRlTm9kZXMpIHtcbiAgICAgICAgY29uc3Qgbm9kZVRvUmVsb2NhdGUgPSByZWxvY2F0ZURhdGEuJG5vZGVUb1JlbG9jYXRlJDtcbiAgICAgICAgaWYgKCFub2RlVG9SZWxvY2F0ZVtcInMtb2xcIl0gJiYgd2luLmRvY3VtZW50KSB7XG4gICAgICAgICAgY29uc3Qgb3JnTG9jYXRpb25Ob2RlID0gQlVJTEQyMC5pc0RlYnVnIHx8IEJVSUxEMjAuaHlkcmF0ZVNlcnZlclNpZGUgPyBvcmlnaW5hbExvY2F0aW9uRGVidWdOb2RlKG5vZGVUb1JlbG9jYXRlKSA6IHdpbi5kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKTtcbiAgICAgICAgICBvcmdMb2NhdGlvbk5vZGVbXCJzLW5yXCJdID0gbm9kZVRvUmVsb2NhdGU7XG4gICAgICAgICAgaW5zZXJ0QmVmb3JlKG5vZGVUb1JlbG9jYXRlLnBhcmVudE5vZGUsIG5vZGVUb1JlbG9jYXRlW1wicy1vbFwiXSA9IG9yZ0xvY2F0aW9uTm9kZSwgbm9kZVRvUmVsb2NhdGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IHJlbG9jYXRlRGF0YSBvZiByZWxvY2F0ZU5vZGVzKSB7XG4gICAgICAgIGNvbnN0IG5vZGVUb1JlbG9jYXRlID0gcmVsb2NhdGVEYXRhLiRub2RlVG9SZWxvY2F0ZSQ7XG4gICAgICAgIGNvbnN0IHNsb3RSZWZOb2RlID0gcmVsb2NhdGVEYXRhLiRzbG90UmVmTm9kZSQ7XG4gICAgICAgIGlmIChzbG90UmVmTm9kZSkge1xuICAgICAgICAgIGNvbnN0IHBhcmVudE5vZGVSZWYgPSBzbG90UmVmTm9kZS5wYXJlbnROb2RlO1xuICAgICAgICAgIGxldCBpbnNlcnRCZWZvcmVOb2RlID0gc2xvdFJlZk5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgICAgaWYgKCFCVUlMRDIwLmh5ZHJhdGVTZXJ2ZXJTaWRlICYmICghQlVJTEQyMC5leHBlcmltZW50YWxTbG90Rml4ZXMgfHwgaW5zZXJ0QmVmb3JlTm9kZSAmJiBpbnNlcnRCZWZvcmVOb2RlLm5vZGVUeXBlID09PSAxIC8qIEVsZW1lbnROb2RlICovKSkge1xuICAgICAgICAgICAgbGV0IG9yZ0xvY2F0aW9uTm9kZSA9IChfYSA9IG5vZGVUb1JlbG9jYXRlW1wicy1vbFwiXSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLnByZXZpb3VzU2libGluZztcbiAgICAgICAgICAgIHdoaWxlIChvcmdMb2NhdGlvbk5vZGUpIHtcbiAgICAgICAgICAgICAgbGV0IHJlZk5vZGUgPSAoX2IgPSBvcmdMb2NhdGlvbk5vZGVbXCJzLW5yXCJdKSAhPSBudWxsID8gX2IgOiBudWxsO1xuICAgICAgICAgICAgICBpZiAocmVmTm9kZSAmJiByZWZOb2RlW1wicy1zblwiXSA9PT0gbm9kZVRvUmVsb2NhdGVbXCJzLXNuXCJdICYmIHBhcmVudE5vZGVSZWYgPT09IChyZWZOb2RlLl9fcGFyZW50Tm9kZSB8fCByZWZOb2RlLnBhcmVudE5vZGUpKSB7XG4gICAgICAgICAgICAgICAgcmVmTm9kZSA9IHJlZk5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHJlZk5vZGUgPT09IG5vZGVUb1JlbG9jYXRlIHx8IChyZWZOb2RlID09IG51bGwgPyB2b2lkIDAgOiByZWZOb2RlW1wicy1zclwiXSkpIHtcbiAgICAgICAgICAgICAgICAgIHJlZk5vZGUgPSByZWZOb2RlID09IG51bGwgPyB2b2lkIDAgOiByZWZOb2RlLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIXJlZk5vZGUgfHwgIXJlZk5vZGVbXCJzLW5yXCJdKSB7XG4gICAgICAgICAgICAgICAgICBpbnNlcnRCZWZvcmVOb2RlID0gcmVmTm9kZTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvcmdMb2NhdGlvbk5vZGUgPSBvcmdMb2NhdGlvbk5vZGUucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBwYXJlbnQgPSBub2RlVG9SZWxvY2F0ZS5fX3BhcmVudE5vZGUgfHwgbm9kZVRvUmVsb2NhdGUucGFyZW50Tm9kZTtcbiAgICAgICAgICBjb25zdCBuZXh0U2libGluZyA9IG5vZGVUb1JlbG9jYXRlLl9fbmV4dFNpYmxpbmcgfHwgbm9kZVRvUmVsb2NhdGUubmV4dFNpYmxpbmc7XG4gICAgICAgICAgaWYgKCFpbnNlcnRCZWZvcmVOb2RlICYmIHBhcmVudE5vZGVSZWYgIT09IHBhcmVudCB8fCBuZXh0U2libGluZyAhPT0gaW5zZXJ0QmVmb3JlTm9kZSkge1xuICAgICAgICAgICAgaWYgKG5vZGVUb1JlbG9jYXRlICE9PSBpbnNlcnRCZWZvcmVOb2RlKSB7XG4gICAgICAgICAgICAgIGlmICghQlVJTEQyMC5leHBlcmltZW50YWxTbG90Rml4ZXMgJiYgIW5vZGVUb1JlbG9jYXRlW1wicy1oblwiXSAmJiBub2RlVG9SZWxvY2F0ZVtcInMtb2xcIl0pIHtcbiAgICAgICAgICAgICAgICBub2RlVG9SZWxvY2F0ZVtcInMtaG5cIl0gPSBub2RlVG9SZWxvY2F0ZVtcInMtb2xcIl0ucGFyZW50Tm9kZS5ub2RlTmFtZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpbnNlcnRCZWZvcmUocGFyZW50Tm9kZVJlZiwgbm9kZVRvUmVsb2NhdGUsIGluc2VydEJlZm9yZU5vZGUpO1xuICAgICAgICAgICAgICBpZiAobm9kZVRvUmVsb2NhdGUubm9kZVR5cGUgPT09IDEgLyogRWxlbWVudE5vZGUgKi8gJiYgbm9kZVRvUmVsb2NhdGUudGFnTmFtZSAhPT0gXCJTTE9ULUZCXCIpIHtcbiAgICAgICAgICAgICAgICBub2RlVG9SZWxvY2F0ZS5oaWRkZW4gPSAoX2MgPSBub2RlVG9SZWxvY2F0ZVtcInMtaWhcIl0pICE9IG51bGwgPyBfYyA6IGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIG5vZGVUb1JlbG9jYXRlICYmIHR5cGVvZiBzbG90UmVmTm9kZVtcInMtcmZcIl0gPT09IFwiZnVuY3Rpb25cIiAmJiBzbG90UmVmTm9kZVtcInMtcmZcIl0oc2xvdFJlZk5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChub2RlVG9SZWxvY2F0ZS5ub2RlVHlwZSA9PT0gMSAvKiBFbGVtZW50Tm9kZSAqLykge1xuICAgICAgICAgICAgaWYgKGlzSW5pdGlhbExvYWQpIHtcbiAgICAgICAgICAgICAgbm9kZVRvUmVsb2NhdGVbXCJzLWloXCJdID0gKF9kID0gbm9kZVRvUmVsb2NhdGUuaGlkZGVuKSAhPSBudWxsID8gX2QgOiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5vZGVUb1JlbG9jYXRlLmhpZGRlbiA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjaGVja1Nsb3RGYWxsYmFja1Zpc2liaWxpdHkpIHtcbiAgICAgIHVwZGF0ZUZhbGxiYWNrU2xvdFZpc2liaWxpdHkocm9vdFZub2RlLiRlbG0kKTtcbiAgICB9XG4gICAgcGx0LiRmbGFncyQgJj0gfjEgLyogaXNUbXBEaXNjb25uZWN0ZWQgKi87XG4gICAgcmVsb2NhdGVOb2Rlcy5sZW5ndGggPSAwO1xuICB9XG4gIGlmIChCVUlMRDIwLmV4cGVyaW1lbnRhbFNjb3BlZFNsb3RDaGFuZ2VzICYmIGNtcE1ldGEuJGZsYWdzJCAmIDIgLyogc2NvcGVkQ3NzRW5jYXBzdWxhdGlvbiAqLykge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gcm9vdFZub2RlLiRlbG0kLl9fY2hpbGROb2RlcyB8fCByb290Vm5vZGUuJGVsbSQuY2hpbGROb2RlcztcbiAgICBmb3IgKGNvbnN0IGNoaWxkTm9kZSBvZiBjaGlsZHJlbikge1xuICAgICAgaWYgKGNoaWxkTm9kZVtcInMtaG5cIl0gIT09IGhvc3RUYWdOYW1lICYmICFjaGlsZE5vZGVbXCJzLXNoXCJdKSB7XG4gICAgICAgIGlmIChpc0luaXRpYWxMb2FkICYmIGNoaWxkTm9kZVtcInMtaWhcIl0gPT0gbnVsbCkge1xuICAgICAgICAgIGNoaWxkTm9kZVtcInMtaWhcIl0gPSAoX2UgPSBjaGlsZE5vZGUuaGlkZGVuKSAhPSBudWxsID8gX2UgOiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjaGlsZE5vZGUuaGlkZGVuID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29udGVudFJlZiA9IHZvaWQgMDtcbn07XG52YXIgc2xvdFJlZmVyZW5jZURlYnVnTm9kZSA9IHNsb3RWTm9kZSA9PiB7XG4gIHZhciBfYTtcbiAgcmV0dXJuIChfYSA9IHdpbi5kb2N1bWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmNyZWF0ZUNvbW1lbnQoYDxzbG90JHtzbG90Vk5vZGUuJG5hbWUkID8gJyBuYW1lPVwiJyArIHNsb3RWTm9kZS4kbmFtZSQgKyAnXCInIDogXCJcIn0+IChob3N0PSR7aG9zdFRhZ05hbWUudG9Mb3dlckNhc2UoKX0pYCk7XG59O1xudmFyIG9yaWdpbmFsTG9jYXRpb25EZWJ1Z05vZGUgPSBub2RlVG9SZWxvY2F0ZSA9PiB7XG4gIHZhciBfYTtcbiAgcmV0dXJuIChfYSA9IHdpbi5kb2N1bWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmNyZWF0ZUNvbW1lbnQoYG9yZy1sb2NhdGlvbiBmb3IgYCArIChub2RlVG9SZWxvY2F0ZS5sb2NhbE5hbWUgPyBgPCR7bm9kZVRvUmVsb2NhdGUubG9jYWxOYW1lfT4gKGhvc3Q9JHtub2RlVG9SZWxvY2F0ZVtcInMtaG5cIl19KWAgOiBgWyR7bm9kZVRvUmVsb2NhdGUudGV4dENvbnRlbnR9XWApKTtcbn07XG5cbi8vIHNyYy9ydW50aW1lL3VwZGF0ZS1jb21wb25lbnQudHNcbnZhciBhdHRhY2hUb0FuY2VzdG9yID0gKGhvc3RSZWYsIGFuY2VzdG9yQ29tcG9uZW50KSA9PiB7XG4gIGlmIChCVUlMRDIxLmFzeW5jTG9hZGluZyAmJiBhbmNlc3RvckNvbXBvbmVudCAmJiAhaG9zdFJlZi4kb25SZW5kZXJSZXNvbHZlJCAmJiBhbmNlc3RvckNvbXBvbmVudFtcInMtcFwiXSkge1xuICAgIGNvbnN0IGluZGV4ID0gYW5jZXN0b3JDb21wb25lbnRbXCJzLXBcIl0ucHVzaChuZXcgUHJvbWlzZShyID0+IGhvc3RSZWYuJG9uUmVuZGVyUmVzb2x2ZSQgPSAoKSA9PiB7XG4gICAgICBhbmNlc3RvckNvbXBvbmVudFtcInMtcFwiXS5zcGxpY2UoaW5kZXggLSAxLCAxKTtcbiAgICAgIHIoKTtcbiAgICB9KSk7XG4gIH1cbn07XG52YXIgc2NoZWR1bGVVcGRhdGUgPSAoaG9zdFJlZiwgaXNJbml0aWFsTG9hZCkgPT4ge1xuICBpZiAoQlVJTEQyMS50YXNrUXVldWUgJiYgQlVJTEQyMS51cGRhdGFibGUpIHtcbiAgICBob3N0UmVmLiRmbGFncyQgfD0gMTYgLyogaXNRdWV1ZWRGb3JVcGRhdGUgKi87XG4gIH1cbiAgaWYgKEJVSUxEMjEuYXN5bmNMb2FkaW5nICYmIGhvc3RSZWYuJGZsYWdzJCAmIDQgLyogaXNXYWl0aW5nRm9yQ2hpbGRyZW4gKi8pIHtcbiAgICBob3N0UmVmLiRmbGFncyQgfD0gNTEyIC8qIG5lZWRzUmVyZW5kZXIgKi87XG4gICAgcmV0dXJuO1xuICB9XG4gIGF0dGFjaFRvQW5jZXN0b3IoaG9zdFJlZiwgaG9zdFJlZi4kYW5jZXN0b3JDb21wb25lbnQkKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSAoKSA9PiBkaXNwYXRjaEhvb2tzKGhvc3RSZWYsIGlzSW5pdGlhbExvYWQpO1xuICBpZiAoaXNJbml0aWFsTG9hZCkge1xuICAgIHF1ZXVlTWljcm90YXNrKCgpID0+IHtcbiAgICAgIGRpc3BhdGNoKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHJldHVybiBCVUlMRDIxLnRhc2tRdWV1ZSA/IHdyaXRlVGFzayhkaXNwYXRjaCkgOiBkaXNwYXRjaCgpO1xufTtcbnZhciBkaXNwYXRjaEhvb2tzID0gKGhvc3RSZWYsIGlzSW5pdGlhbExvYWQpID0+IHtcbiAgY29uc3QgZWxtID0gaG9zdFJlZi4kaG9zdEVsZW1lbnQkO1xuICBjb25zdCBlbmRTY2hlZHVsZSA9IGNyZWF0ZVRpbWUoXCJzY2hlZHVsZVVwZGF0ZVwiLCBob3N0UmVmLiRjbXBNZXRhJC4kdGFnTmFtZSQpO1xuICBjb25zdCBpbnN0YW5jZSA9IEJVSUxEMjEubGF6eUxvYWQgPyBob3N0UmVmLiRsYXp5SW5zdGFuY2UkIDogZWxtO1xuICBpZiAoIWluc3RhbmNlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBDYW4ndCByZW5kZXIgY29tcG9uZW50IDwke2VsbS50YWdOYW1lLnRvTG93ZXJDYXNlKCl9IC8+IHdpdGggaW52YWxpZCBTdGVuY2lsIHJ1bnRpbWUhIE1ha2Ugc3VyZSB0aGlzIGltcG9ydGVkIGNvbXBvbmVudCBpcyBjb21waWxlZCB3aXRoIGEgXFxgZXh0ZXJuYWxSdW50aW1lOiB0cnVlXFxgIGZsYWcuIEZvciBtb3JlIGluZm9ybWF0aW9uLCBwbGVhc2UgcmVmZXIgdG8gaHR0cHM6Ly9zdGVuY2lsanMuY29tL2RvY3MvY3VzdG9tLWVsZW1lbnRzI2V4dGVybmFscnVudGltZWApO1xuICB9XG4gIGxldCBtYXliZVByb21pc2U7XG4gIGlmIChpc0luaXRpYWxMb2FkKSB7XG4gICAgaWYgKEJVSUxEMjEubGF6eUxvYWQgJiYgQlVJTEQyMS5ob3N0TGlzdGVuZXIpIHtcbiAgICAgIGhvc3RSZWYuJGZsYWdzJCB8PSAyNTYgLyogaXNMaXN0ZW5SZWFkeSAqLztcbiAgICAgIGlmIChob3N0UmVmLiRxdWV1ZWRMaXN0ZW5lcnMkKSB7XG4gICAgICAgIGhvc3RSZWYuJHF1ZXVlZExpc3RlbmVycyQubWFwKChbbWV0aG9kTmFtZSwgZXZlbnRdKSA9PiBzYWZlQ2FsbChpbnN0YW5jZSwgbWV0aG9kTmFtZSwgZXZlbnQsIGVsbSkpO1xuICAgICAgICBob3N0UmVmLiRxdWV1ZWRMaXN0ZW5lcnMkID0gdm9pZCAwO1xuICAgICAgfVxuICAgIH1cbiAgICBlbWl0TGlmZWN5Y2xlRXZlbnQoZWxtLCBcImNvbXBvbmVudFdpbGxMb2FkXCIpO1xuICAgIG1heWJlUHJvbWlzZSA9IHNhZmVDYWxsKGluc3RhbmNlLCBcImNvbXBvbmVudFdpbGxMb2FkXCIsIHZvaWQgMCwgZWxtKTtcbiAgfSBlbHNlIHtcbiAgICBlbWl0TGlmZWN5Y2xlRXZlbnQoZWxtLCBcImNvbXBvbmVudFdpbGxVcGRhdGVcIik7XG4gICAgbWF5YmVQcm9taXNlID0gc2FmZUNhbGwoaW5zdGFuY2UsIFwiY29tcG9uZW50V2lsbFVwZGF0ZVwiLCB2b2lkIDAsIGVsbSk7XG4gIH1cbiAgZW1pdExpZmVjeWNsZUV2ZW50KGVsbSwgXCJjb21wb25lbnRXaWxsUmVuZGVyXCIpO1xuICBtYXliZVByb21pc2UgPSBlbnF1ZXVlKG1heWJlUHJvbWlzZSwgKCkgPT4gc2FmZUNhbGwoaW5zdGFuY2UsIFwiY29tcG9uZW50V2lsbFJlbmRlclwiLCB2b2lkIDAsIGVsbSkpO1xuICBlbmRTY2hlZHVsZSgpO1xuICByZXR1cm4gZW5xdWV1ZShtYXliZVByb21pc2UsICgpID0+IHVwZGF0ZUNvbXBvbmVudChob3N0UmVmLCBpbnN0YW5jZSwgaXNJbml0aWFsTG9hZCkpO1xufTtcbnZhciBlbnF1ZXVlID0gKG1heWJlUHJvbWlzZSwgZm4pID0+IGlzUHJvbWlzZXkobWF5YmVQcm9taXNlKSA/IG1heWJlUHJvbWlzZS50aGVuKGZuKS5jYXRjaChlcnIyID0+IHtcbiAgY29uc29sZS5lcnJvcihlcnIyKTtcbiAgZm4oKTtcbn0pIDogZm4oKTtcbnZhciBpc1Byb21pc2V5ID0gbWF5YmVQcm9taXNlID0+IG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UgfHwgbWF5YmVQcm9taXNlICYmIG1heWJlUHJvbWlzZS50aGVuICYmIHR5cGVvZiBtYXliZVByb21pc2UudGhlbiA9PT0gXCJmdW5jdGlvblwiO1xudmFyIHVwZGF0ZUNvbXBvbmVudCA9IGFzeW5jIChob3N0UmVmLCBpbnN0YW5jZSwgaXNJbml0aWFsTG9hZCkgPT4ge1xuICB2YXIgX2E7XG4gIGNvbnN0IGVsbSA9IGhvc3RSZWYuJGhvc3RFbGVtZW50JDtcbiAgY29uc3QgZW5kVXBkYXRlID0gY3JlYXRlVGltZShcInVwZGF0ZVwiLCBob3N0UmVmLiRjbXBNZXRhJC4kdGFnTmFtZSQpO1xuICBjb25zdCByYyA9IGVsbVtcInMtcmNcIl07XG4gIGlmIChCVUlMRDIxLnN0eWxlICYmIGlzSW5pdGlhbExvYWQpIHtcbiAgICBhdHRhY2hTdHlsZXMoaG9zdFJlZik7XG4gIH1cbiAgY29uc3QgZW5kUmVuZGVyID0gY3JlYXRlVGltZShcInJlbmRlclwiLCBob3N0UmVmLiRjbXBNZXRhJC4kdGFnTmFtZSQpO1xuICBpZiAoQlVJTEQyMS5pc0Rldikge1xuICAgIGhvc3RSZWYuJGZsYWdzJCB8PSAxMDI0IC8qIGRldk9uUmVuZGVyICovO1xuICB9XG4gIGlmIChCVUlMRDIxLmh5ZHJhdGVTZXJ2ZXJTaWRlKSB7XG4gICAgYXdhaXQgY2FsbFJlbmRlcihob3N0UmVmLCBpbnN0YW5jZSwgZWxtLCBpc0luaXRpYWxMb2FkKTtcbiAgfSBlbHNlIHtcbiAgICBjYWxsUmVuZGVyKGhvc3RSZWYsIGluc3RhbmNlLCBlbG0sIGlzSW5pdGlhbExvYWQpO1xuICB9XG4gIGlmIChCVUlMRDIxLmlzRGV2KSB7XG4gICAgaG9zdFJlZi4kcmVuZGVyQ291bnQkID0gaG9zdFJlZi4kcmVuZGVyQ291bnQkID09PSB2b2lkIDAgPyAxIDogaG9zdFJlZi4kcmVuZGVyQ291bnQkICsgMTtcbiAgICBob3N0UmVmLiRmbGFncyQgJj0gfjEwMjQgLyogZGV2T25SZW5kZXIgKi87XG4gIH1cbiAgaWYgKEJVSUxEMjEuaHlkcmF0ZVNlcnZlclNpZGUpIHtcbiAgICB0cnkge1xuICAgICAgc2VydmVyU2lkZUNvbm5lY3RlZChlbG0pO1xuICAgICAgaWYgKGlzSW5pdGlhbExvYWQpIHtcbiAgICAgICAgaWYgKGhvc3RSZWYuJGNtcE1ldGEkLiRmbGFncyQgJiAxIC8qIHNoYWRvd0RvbUVuY2Fwc3VsYXRpb24gKi8pIHtcbiAgICAgICAgICBlbG1bXCJzLWVuXCJdID0gXCJcIjtcbiAgICAgICAgfSBlbHNlIGlmIChob3N0UmVmLiRjbXBNZXRhJC4kZmxhZ3MkICYgMiAvKiBzY29wZWRDc3NFbmNhcHN1bGF0aW9uICovKSB7XG4gICAgICAgICAgZWxtW1wicy1lblwiXSA9IFwiY1wiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZUVycm9yKGUsIGVsbSk7XG4gICAgfVxuICB9XG4gIGlmIChCVUlMRDIxLmFzeW5jTG9hZGluZyAmJiByYykge1xuICAgIHJjLm1hcChjYiA9PiBjYigpKTtcbiAgICBlbG1bXCJzLXJjXCJdID0gdm9pZCAwO1xuICB9XG4gIGVuZFJlbmRlcigpO1xuICBlbmRVcGRhdGUoKTtcbiAgaWYgKEJVSUxEMjEuYXN5bmNMb2FkaW5nKSB7XG4gICAgY29uc3QgY2hpbGRyZW5Qcm9taXNlcyA9IChfYSA9IGVsbVtcInMtcFwiXSkgIT0gbnVsbCA/IF9hIDogW107XG4gICAgY29uc3QgcG9zdFVwZGF0ZSA9ICgpID0+IHBvc3RVcGRhdGVDb21wb25lbnQoaG9zdFJlZik7XG4gICAgaWYgKGNoaWxkcmVuUHJvbWlzZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBwb3N0VXBkYXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFByb21pc2UuYWxsKGNoaWxkcmVuUHJvbWlzZXMpLnRoZW4ocG9zdFVwZGF0ZSk7XG4gICAgICBob3N0UmVmLiRmbGFncyQgfD0gNCAvKiBpc1dhaXRpbmdGb3JDaGlsZHJlbiAqLztcbiAgICAgIGNoaWxkcmVuUHJvbWlzZXMubGVuZ3RoID0gMDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcG9zdFVwZGF0ZUNvbXBvbmVudChob3N0UmVmKTtcbiAgfVxufTtcbnZhciByZW5kZXJpbmdSZWYgPSBudWxsO1xudmFyIGNhbGxSZW5kZXIgPSAoaG9zdFJlZiwgaW5zdGFuY2UsIGVsbSwgaXNJbml0aWFsTG9hZCkgPT4ge1xuICBjb25zdCBhbGxSZW5kZXJGbiA9IEJVSUxEMjEuYWxsUmVuZGVyRm4gPyB0cnVlIDogZmFsc2U7XG4gIGNvbnN0IGxhenlMb2FkID0gQlVJTEQyMS5sYXp5TG9hZCA/IHRydWUgOiBmYWxzZTtcbiAgY29uc3QgdGFza1F1ZXVlID0gQlVJTEQyMS50YXNrUXVldWUgPyB0cnVlIDogZmFsc2U7XG4gIGNvbnN0IHVwZGF0YWJsZSA9IEJVSUxEMjEudXBkYXRhYmxlID8gdHJ1ZSA6IGZhbHNlO1xuICB0cnkge1xuICAgIHJlbmRlcmluZ1JlZiA9IGluc3RhbmNlO1xuICAgIGluc3RhbmNlID0gYWxsUmVuZGVyRm4gPyBpbnN0YW5jZS5yZW5kZXIoKSA6IGluc3RhbmNlLnJlbmRlciAmJiBpbnN0YW5jZS5yZW5kZXIoKTtcbiAgICBpZiAodXBkYXRhYmxlICYmIHRhc2tRdWV1ZSkge1xuICAgICAgaG9zdFJlZi4kZmxhZ3MkICY9IH4xNiAvKiBpc1F1ZXVlZEZvclVwZGF0ZSAqLztcbiAgICB9XG4gICAgaWYgKHVwZGF0YWJsZSB8fCBsYXp5TG9hZCkge1xuICAgICAgaG9zdFJlZi4kZmxhZ3MkIHw9IDIgLyogaGFzUmVuZGVyZWQgKi87XG4gICAgfVxuICAgIGlmIChCVUlMRDIxLmhhc1JlbmRlckZuIHx8IEJVSUxEMjEucmVmbGVjdCkge1xuICAgICAgaWYgKEJVSUxEMjEudmRvbVJlbmRlciB8fCBCVUlMRDIxLnJlZmxlY3QpIHtcbiAgICAgICAgaWYgKEJVSUxEMjEuaHlkcmF0ZVNlcnZlclNpZGUpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGluc3RhbmNlKS50aGVuKHZhbHVlID0+IHJlbmRlclZkb20oaG9zdFJlZiwgdmFsdWUsIGlzSW5pdGlhbExvYWQpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZW5kZXJWZG9tKGhvc3RSZWYsIGluc3RhbmNlLCBpc0luaXRpYWxMb2FkKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc2hhZG93Um9vdCA9IGVsbS5zaGFkb3dSb290O1xuICAgICAgICBpZiAoaG9zdFJlZi4kY21wTWV0YSQuJGZsYWdzJCAmIDEgLyogc2hhZG93RG9tRW5jYXBzdWxhdGlvbiAqLykge1xuICAgICAgICAgIHNoYWRvd1Jvb3QudGV4dENvbnRlbnQgPSBpbnN0YW5jZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbG0udGV4dENvbnRlbnQgPSBpbnN0YW5jZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGVFcnJvcihlLCBob3N0UmVmLiRob3N0RWxlbWVudCQpO1xuICB9XG4gIHJlbmRlcmluZ1JlZiA9IG51bGw7XG4gIHJldHVybiBudWxsO1xufTtcbnZhciBnZXRSZW5kZXJpbmdSZWYgPSAoKSA9PiByZW5kZXJpbmdSZWY7XG52YXIgcG9zdFVwZGF0ZUNvbXBvbmVudCA9IGhvc3RSZWYgPT4ge1xuICBjb25zdCB0YWdOYW1lID0gaG9zdFJlZi4kY21wTWV0YSQuJHRhZ05hbWUkO1xuICBjb25zdCBlbG0gPSBob3N0UmVmLiRob3N0RWxlbWVudCQ7XG4gIGNvbnN0IGVuZFBvc3RVcGRhdGUgPSBjcmVhdGVUaW1lKFwicG9zdFVwZGF0ZVwiLCB0YWdOYW1lKTtcbiAgY29uc3QgaW5zdGFuY2UgPSBCVUlMRDIxLmxhenlMb2FkID8gaG9zdFJlZi4kbGF6eUluc3RhbmNlJCA6IGVsbTtcbiAgY29uc3QgYW5jZXN0b3JDb21wb25lbnQgPSBob3N0UmVmLiRhbmNlc3RvckNvbXBvbmVudCQ7XG4gIGlmIChCVUlMRDIxLmlzRGV2KSB7XG4gICAgaG9zdFJlZi4kZmxhZ3MkIHw9IDEwMjQgLyogZGV2T25SZW5kZXIgKi87XG4gIH1cbiAgc2FmZUNhbGwoaW5zdGFuY2UsIFwiY29tcG9uZW50RGlkUmVuZGVyXCIsIHZvaWQgMCwgZWxtKTtcbiAgaWYgKEJVSUxEMjEuaXNEZXYpIHtcbiAgICBob3N0UmVmLiRmbGFncyQgJj0gfjEwMjQgLyogZGV2T25SZW5kZXIgKi87XG4gIH1cbiAgZW1pdExpZmVjeWNsZUV2ZW50KGVsbSwgXCJjb21wb25lbnREaWRSZW5kZXJcIik7XG4gIGlmICghKGhvc3RSZWYuJGZsYWdzJCAmIDY0IC8qIGhhc0xvYWRlZENvbXBvbmVudCAqLykpIHtcbiAgICBob3N0UmVmLiRmbGFncyQgfD0gNjQgLyogaGFzTG9hZGVkQ29tcG9uZW50ICovO1xuICAgIGlmIChCVUlMRDIxLmFzeW5jTG9hZGluZyAmJiBCVUlMRDIxLmNzc0Fubm90YXRpb25zKSB7XG4gICAgICBhZGRIeWRyYXRlZEZsYWcoZWxtKTtcbiAgICB9XG4gICAgaWYgKEJVSUxEMjEuaXNEZXYpIHtcbiAgICAgIGhvc3RSZWYuJGZsYWdzJCB8PSAyMDQ4IC8qIGRldk9uRGlkTG9hZCAqLztcbiAgICB9XG4gICAgc2FmZUNhbGwoaW5zdGFuY2UsIFwiY29tcG9uZW50RGlkTG9hZFwiLCB2b2lkIDAsIGVsbSk7XG4gICAgaWYgKEJVSUxEMjEuaXNEZXYpIHtcbiAgICAgIGhvc3RSZWYuJGZsYWdzJCAmPSB+MjA0OCAvKiBkZXZPbkRpZExvYWQgKi87XG4gICAgfVxuICAgIGVtaXRMaWZlY3ljbGVFdmVudChlbG0sIFwiY29tcG9uZW50RGlkTG9hZFwiKTtcbiAgICBlbmRQb3N0VXBkYXRlKCk7XG4gICAgaWYgKEJVSUxEMjEuYXN5bmNMb2FkaW5nKSB7XG4gICAgICBob3N0UmVmLiRvblJlYWR5UmVzb2x2ZSQoZWxtKTtcbiAgICAgIGlmICghYW5jZXN0b3JDb21wb25lbnQpIHtcbiAgICAgICAgYXBwRGlkTG9hZCh0YWdOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKEJVSUxEMjEuaXNEZXYpIHtcbiAgICAgIGhvc3RSZWYuJGZsYWdzJCB8PSAxMDI0IC8qIGRldk9uUmVuZGVyICovO1xuICAgIH1cbiAgICBzYWZlQ2FsbChpbnN0YW5jZSwgXCJjb21wb25lbnREaWRVcGRhdGVcIiwgdm9pZCAwLCBlbG0pO1xuICAgIGlmIChCVUlMRDIxLmlzRGV2KSB7XG4gICAgICBob3N0UmVmLiRmbGFncyQgJj0gfjEwMjQgLyogZGV2T25SZW5kZXIgKi87XG4gICAgfVxuICAgIGVtaXRMaWZlY3ljbGVFdmVudChlbG0sIFwiY29tcG9uZW50RGlkVXBkYXRlXCIpO1xuICAgIGVuZFBvc3RVcGRhdGUoKTtcbiAgfVxuICBpZiAoQlVJTEQyMS5tZXRob2QgJiYgQlVJTEQyMS5sYXp5TG9hZCkge1xuICAgIGhvc3RSZWYuJG9uSW5zdGFuY2VSZXNvbHZlJChlbG0pO1xuICB9XG4gIGlmIChCVUlMRDIxLmFzeW5jTG9hZGluZykge1xuICAgIGlmIChob3N0UmVmLiRvblJlbmRlclJlc29sdmUkKSB7XG4gICAgICBob3N0UmVmLiRvblJlbmRlclJlc29sdmUkKCk7XG4gICAgICBob3N0UmVmLiRvblJlbmRlclJlc29sdmUkID0gdm9pZCAwO1xuICAgIH1cbiAgICBpZiAoaG9zdFJlZi4kZmxhZ3MkICYgNTEyIC8qIG5lZWRzUmVyZW5kZXIgKi8pIHtcbiAgICAgIG5leHRUaWNrKCgpID0+IHNjaGVkdWxlVXBkYXRlKGhvc3RSZWYsIGZhbHNlKSk7XG4gICAgfVxuICAgIGhvc3RSZWYuJGZsYWdzJCAmPSB+KDQgLyogaXNXYWl0aW5nRm9yQ2hpbGRyZW4gKi8gfCA1MTIgLyogbmVlZHNSZXJlbmRlciAqLyk7XG4gIH1cbn07XG52YXIgZm9yY2VVcGRhdGUgPSByZWYgPT4ge1xuICB2YXIgX2E7XG4gIGlmIChCVUlMRDIxLnVwZGF0YWJsZSAmJiAoQnVpbGQuaXNCcm93c2VyIHx8IEJ1aWxkLmlzVGVzdGluZykpIHtcbiAgICBjb25zdCBob3N0UmVmID0gZ2V0SG9zdFJlZihyZWYpO1xuICAgIGNvbnN0IGlzQ29ubmVjdGVkID0gKF9hID0gaG9zdFJlZiA9PSBudWxsID8gdm9pZCAwIDogaG9zdFJlZi4kaG9zdEVsZW1lbnQkKSA9PSBudWxsID8gdm9pZCAwIDogX2EuaXNDb25uZWN0ZWQ7XG4gICAgaWYgKGlzQ29ubmVjdGVkICYmIChob3N0UmVmLiRmbGFncyQgJiAoMiAvKiBoYXNSZW5kZXJlZCAqLyB8IDE2IC8qIGlzUXVldWVkRm9yVXBkYXRlICovKSkgPT09IDIgLyogaGFzUmVuZGVyZWQgKi8pIHtcbiAgICAgIHNjaGVkdWxlVXBkYXRlKGhvc3RSZWYsIGZhbHNlKTtcbiAgICB9XG4gICAgcmV0dXJuIGlzQ29ubmVjdGVkO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG52YXIgYXBwRGlkTG9hZCA9IHdobyA9PiB7XG4gIHZhciBfYTtcbiAgaWYgKEJVSUxEMjEuYXN5bmNRdWV1ZSkge1xuICAgIHBsdC4kZmxhZ3MkIHw9IDIgLyogYXBwTG9hZGVkICovO1xuICB9XG4gIG5leHRUaWNrKCgpID0+IGVtaXRFdmVudCh3aW4sIFwiYXBwbG9hZFwiLCB7XG4gICAgZGV0YWlsOiB7XG4gICAgICBuYW1lc3BhY2U6IE5BTUVTUEFDRVxuICAgIH1cbiAgfSkpO1xuICBpZiAoQlVJTEQyMS5oeWRyYXRlQ2xpZW50U2lkZSkge1xuICAgIGlmICgoX2EgPSBwbHQuJG9yZ0xvY05vZGVzJCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLnNpemUpIHtcbiAgICAgIHBsdC4kb3JnTG9jTm9kZXMkLmNsZWFyKCk7XG4gICAgfVxuICB9XG4gIGlmIChCVUlMRDIxLnByb2ZpbGUgJiYgcGVyZm9ybWFuY2UubWVhc3VyZSkge1xuICAgIHBlcmZvcm1hbmNlLm1lYXN1cmUoYFtTdGVuY2lsXSAke05BTUVTUEFDRX0gaW5pdGlhbCBsb2FkIChieSAke3dob30pYCwgXCJzdDphcHA6c3RhcnRcIik7XG4gIH1cbn07XG52YXIgc2FmZUNhbGwgPSAoaW5zdGFuY2UsIG1ldGhvZCwgYXJnLCBlbG0pID0+IHtcbiAgaWYgKGluc3RhbmNlICYmIGluc3RhbmNlW21ldGhvZF0pIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGluc3RhbmNlW21ldGhvZF0oYXJnKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlRXJyb3IoZSwgZWxtKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZvaWQgMDtcbn07XG52YXIgZW1pdExpZmVjeWNsZUV2ZW50ID0gKGVsbSwgbGlmZWN5Y2xlTmFtZSkgPT4ge1xuICBpZiAoQlVJTEQyMS5saWZlY3ljbGVET01FdmVudHMpIHtcbiAgICBlbWl0RXZlbnQoZWxtLCBcInN0ZW5jaWxfXCIgKyBsaWZlY3ljbGVOYW1lLCB7XG4gICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgY29tcG9zZWQ6IHRydWUsXG4gICAgICBkZXRhaWw6IHtcbiAgICAgICAgbmFtZXNwYWNlOiBOQU1FU1BBQ0VcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcbnZhciBhZGRIeWRyYXRlZEZsYWcgPSBlbG0gPT4ge1xuICB2YXIgX2EsIF9iO1xuICByZXR1cm4gQlVJTEQyMS5oeWRyYXRlZENsYXNzID8gZWxtLmNsYXNzTGlzdC5hZGQoKF9hID0gQlVJTEQyMS5oeWRyYXRlZFNlbGVjdG9yTmFtZSkgIT0gbnVsbCA/IF9hIDogXCJoeWRyYXRlZFwiKSA6IEJVSUxEMjEuaHlkcmF0ZWRBdHRyaWJ1dGUgPyBlbG0uc2V0QXR0cmlidXRlKChfYiA9IEJVSUxEMjEuaHlkcmF0ZWRTZWxlY3Rvck5hbWUpICE9IG51bGwgPyBfYiA6IFwiaHlkcmF0ZWRcIiwgXCJcIikgOiB2b2lkIDA7XG59O1xudmFyIHNlcnZlclNpZGVDb25uZWN0ZWQgPSBlbG0gPT4ge1xuICBjb25zdCBjaGlsZHJlbiA9IGVsbS5jaGlsZHJlbjtcbiAgaWYgKGNoaWxkcmVuICE9IG51bGwpIHtcbiAgICBmb3IgKGxldCBpMiA9IDAsIGlpID0gY2hpbGRyZW4ubGVuZ3RoOyBpMiA8IGlpOyBpMisrKSB7XG4gICAgICBjb25zdCBjaGlsZEVsbSA9IGNoaWxkcmVuW2kyXTtcbiAgICAgIGlmICh0eXBlb2YgY2hpbGRFbG0uY29ubmVjdGVkQ2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBjaGlsZEVsbS5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAgfVxuICAgICAgc2VydmVyU2lkZUNvbm5lY3RlZChjaGlsZEVsbSk7XG4gICAgfVxuICB9XG59O1xuXG4vLyBzcmMvcnVudGltZS9zZXQtdmFsdWUudHNcbnZhciBnZXRWYWx1ZSA9IChyZWYsIHByb3BOYW1lKSA9PiBnZXRIb3N0UmVmKHJlZikuJGluc3RhbmNlVmFsdWVzJC5nZXQocHJvcE5hbWUpO1xudmFyIHNldFZhbHVlID0gKHJlZiwgcHJvcE5hbWUsIG5ld1ZhbCwgY21wTWV0YSkgPT4ge1xuICBjb25zdCBob3N0UmVmID0gZ2V0SG9zdFJlZihyZWYpO1xuICBpZiAoIWhvc3RSZWYpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKEJVSUxEMjIubGF6eUxvYWQgJiYgIWhvc3RSZWYpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYENvdWxkbid0IGZpbmQgaG9zdCBlbGVtZW50IGZvciBcIiR7Y21wTWV0YS4kdGFnTmFtZSR9XCIgYXMgaXQgaXMgdW5rbm93biB0byB0aGlzIFN0ZW5jaWwgcnVudGltZS4gVGhpcyB1c3VhbGx5IGhhcHBlbnMgd2hlbiBpbnRlZ3JhdGluZyBhIDNyZCBwYXJ0eSBTdGVuY2lsIGNvbXBvbmVudCB3aXRoIGFub3RoZXIgU3RlbmNpbCBjb21wb25lbnQgb3IgYXBwbGljYXRpb24uIFBsZWFzZSByZWFjaCBvdXQgdG8gdGhlIG1haW50YWluZXJzIG9mIHRoZSAzcmQgcGFydHkgU3RlbmNpbCBjb21wb25lbnQgb3IgcmVwb3J0IHRoaXMgb24gdGhlIFN0ZW5jaWwgRGlzY29yZCBzZXJ2ZXIgKGh0dHBzOi8vY2hhdC5zdGVuY2lsanMuY29tKSBvciBjb21tZW50IG9uIHRoaXMgc2ltaWxhciBbR2l0SHViIGlzc3VlXShodHRwczovL2dpdGh1Yi5jb20vc3RlbmNpbGpzL2NvcmUvaXNzdWVzLzU0NTcpLmApO1xuICB9XG4gIGNvbnN0IGVsbSA9IEJVSUxEMjIubGF6eUxvYWQgPyBob3N0UmVmLiRob3N0RWxlbWVudCQgOiByZWY7XG4gIGNvbnN0IG9sZFZhbCA9IGhvc3RSZWYuJGluc3RhbmNlVmFsdWVzJC5nZXQocHJvcE5hbWUpO1xuICBjb25zdCBmbGFncyA9IGhvc3RSZWYuJGZsYWdzJDtcbiAgY29uc3QgaW5zdGFuY2UgPSBCVUlMRDIyLmxhenlMb2FkID8gaG9zdFJlZi4kbGF6eUluc3RhbmNlJCA6IGVsbTtcbiAgbmV3VmFsID0gcGFyc2VQcm9wZXJ0eVZhbHVlKG5ld1ZhbCwgY21wTWV0YS4kbWVtYmVycyRbcHJvcE5hbWVdWzBdLCBCVUlMRDIyLmZvcm1Bc3NvY2lhdGVkICYmICEhKGNtcE1ldGEuJGZsYWdzJCAmIDY0IC8qIGZvcm1Bc3NvY2lhdGVkICovKSk7XG4gIGNvbnN0IGFyZUJvdGhOYU4gPSBOdW1iZXIuaXNOYU4ob2xkVmFsKSAmJiBOdW1iZXIuaXNOYU4obmV3VmFsKTtcbiAgY29uc3QgZGlkVmFsdWVDaGFuZ2UgPSBuZXdWYWwgIT09IG9sZFZhbCAmJiAhYXJlQm90aE5hTjtcbiAgaWYgKCghQlVJTEQyMi5sYXp5TG9hZCB8fCAhKGZsYWdzICYgOCAvKiBpc0NvbnN0cnVjdGluZ0luc3RhbmNlICovKSB8fCBvbGRWYWwgPT09IHZvaWQgMCkgJiYgZGlkVmFsdWVDaGFuZ2UpIHtcbiAgICBob3N0UmVmLiRpbnN0YW5jZVZhbHVlcyQuc2V0KHByb3BOYW1lLCBuZXdWYWwpO1xuICAgIGlmIChCVUlMRDIyLmlzRGV2KSB7XG4gICAgICBpZiAoaG9zdFJlZi4kZmxhZ3MkICYgMTAyNCAvKiBkZXZPblJlbmRlciAqLykge1xuICAgICAgICBjb25zb2xlRGV2V2FybihgVGhlIHN0YXRlL3Byb3AgXCIke3Byb3BOYW1lfVwiIGNoYW5nZWQgZHVyaW5nIHJlbmRlcmluZy4gVGhpcyBjYW4gcG90ZW50aWFsbHkgbGVhZCB0byBpbmZpbml0ZS1sb29wcyBhbmQgb3RoZXIgYnVncy5gLCBcIlxcbkVsZW1lbnRcIiwgZWxtLCBcIlxcbk5ldyB2YWx1ZVwiLCBuZXdWYWwsIFwiXFxuT2xkIHZhbHVlXCIsIG9sZFZhbCk7XG4gICAgICB9IGVsc2UgaWYgKGhvc3RSZWYuJGZsYWdzJCAmIDIwNDggLyogZGV2T25EaWRMb2FkICovKSB7XG4gICAgICAgIGNvbnNvbGVEZXZXYXJuKGBUaGUgc3RhdGUvcHJvcCBcIiR7cHJvcE5hbWV9XCIgY2hhbmdlZCBkdXJpbmcgXCJjb21wb25lbnREaWRMb2FkKClcIiwgdGhpcyB0cmlnZ2VycyBleHRyYSByZS1yZW5kZXJzLCB0cnkgdG8gc2V0dXAgb24gXCJjb21wb25lbnRXaWxsTG9hZCgpXCJgLCBcIlxcbkVsZW1lbnRcIiwgZWxtLCBcIlxcbk5ldyB2YWx1ZVwiLCBuZXdWYWwsIFwiXFxuT2xkIHZhbHVlXCIsIG9sZFZhbCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghQlVJTEQyMi5sYXp5TG9hZCB8fCBpbnN0YW5jZSkge1xuICAgICAgaWYgKEJVSUxEMjIud2F0Y2hDYWxsYmFjayAmJiBjbXBNZXRhLiR3YXRjaGVycyQgJiYgZmxhZ3MgJiAxMjggLyogaXNXYXRjaFJlYWR5ICovKSB7XG4gICAgICAgIGNvbnN0IHdhdGNoTWV0aG9kcyA9IGNtcE1ldGEuJHdhdGNoZXJzJFtwcm9wTmFtZV07XG4gICAgICAgIGlmICh3YXRjaE1ldGhvZHMpIHtcbiAgICAgICAgICB3YXRjaE1ldGhvZHMubWFwKHdhdGNoTWV0aG9kTmFtZSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBpbnN0YW5jZVt3YXRjaE1ldGhvZE5hbWVdKG5ld1ZhbCwgb2xkVmFsLCBwcm9wTmFtZSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGVFcnJvcihlLCBlbG0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoQlVJTEQyMi51cGRhdGFibGUgJiYgKGZsYWdzICYgKDIgLyogaGFzUmVuZGVyZWQgKi8gfCAxNiAvKiBpc1F1ZXVlZEZvclVwZGF0ZSAqLykpID09PSAyIC8qIGhhc1JlbmRlcmVkICovKSB7XG4gICAgICAgIGlmIChpbnN0YW5jZS5jb21wb25lbnRTaG91bGRVcGRhdGUpIHtcbiAgICAgICAgICBpZiAoaW5zdGFuY2UuY29tcG9uZW50U2hvdWxkVXBkYXRlKG5ld1ZhbCwgb2xkVmFsLCBwcm9wTmFtZSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNjaGVkdWxlVXBkYXRlKGhvc3RSZWYsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8vIHNyYy9ydW50aW1lL3Byb3h5LWNvbXBvbmVudC50c1xudmFyIHByb3h5Q29tcG9uZW50ID0gKENzdHIsIGNtcE1ldGEsIGZsYWdzKSA9PiB7XG4gIHZhciBfYSwgX2I7XG4gIGNvbnN0IHByb3RvdHlwZSA9IENzdHIucHJvdG90eXBlO1xuICBpZiAoQlVJTEQyMy5pc1Rlc3RpbmcpIHtcbiAgICBpZiAocHJvdG90eXBlLl9fc3RlbmNpbEF1Z21lbnRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBwcm90b3R5cGUuX19zdGVuY2lsQXVnbWVudGVkID0gdHJ1ZTtcbiAgfVxuICBpZiAoQlVJTEQyMy5mb3JtQXNzb2NpYXRlZCAmJiBjbXBNZXRhLiRmbGFncyQgJiA2NCAvKiBmb3JtQXNzb2NpYXRlZCAqLyAmJiBmbGFncyAmIDEgLyogaXNFbGVtZW50Q29uc3RydWN0b3IgKi8pIHtcbiAgICBGT1JNX0FTU09DSUFURURfQ1VTVE9NX0VMRU1FTlRfQ0FMTEJBQ0tTLmZvckVhY2goY2JOYW1lID0+IHtcbiAgICAgIGNvbnN0IG9yaWdpbmFsRm9ybUFzc29jaWF0ZWRDYWxsYmFjayA9IHByb3RvdHlwZVtjYk5hbWVdO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvdHlwZSwgY2JOYW1lLCB7XG4gICAgICAgIHZhbHVlKC4uLmFyZ3MpIHtcbiAgICAgICAgICB2YXIgX2EyO1xuICAgICAgICAgIGNvbnN0IGhvc3RSZWYgPSBnZXRIb3N0UmVmKHRoaXMpO1xuICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gQlVJTEQyMy5sYXp5TG9hZCA/IGhvc3RSZWYgPT0gbnVsbCA/IHZvaWQgMCA6IGhvc3RSZWYuJGxhenlJbnN0YW5jZSQgOiB0aGlzO1xuICAgICAgICAgIGlmICghaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIChfYTIgPSBob3N0UmVmID09IG51bGwgPyB2b2lkIDAgOiBob3N0UmVmLiRvblJlYWR5UHJvbWlzZSQpID09IG51bGwgPyB2b2lkIDAgOiBfYTIudGhlbihhc3luY0luc3RhbmNlID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgY2IgPSBhc3luY0luc3RhbmNlW2NiTmFtZV07XG4gICAgICAgICAgICAgIHR5cGVvZiBjYiA9PT0gXCJmdW5jdGlvblwiICYmIGNiLmNhbGwoYXN5bmNJbnN0YW5jZSwgLi4uYXJncyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY2IgPSBCVUlMRDIzLmxhenlMb2FkID8gaW5zdGFuY2VbY2JOYW1lXSA6IG9yaWdpbmFsRm9ybUFzc29jaWF0ZWRDYWxsYmFjaztcbiAgICAgICAgICAgIHR5cGVvZiBjYiA9PT0gXCJmdW5jdGlvblwiICYmIGNiLmNhbGwoaW5zdGFuY2UsIC4uLmFyZ3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKEJVSUxEMjMubWVtYmVyICYmIGNtcE1ldGEuJG1lbWJlcnMkIHx8IEJVSUxEMjMud2F0Y2hDYWxsYmFjayAmJiAoY21wTWV0YS4kd2F0Y2hlcnMkIHx8IENzdHIud2F0Y2hlcnMpKSB7XG4gICAgaWYgKEJVSUxEMjMud2F0Y2hDYWxsYmFjayAmJiBDc3RyLndhdGNoZXJzICYmICFjbXBNZXRhLiR3YXRjaGVycyQpIHtcbiAgICAgIGNtcE1ldGEuJHdhdGNoZXJzJCA9IENzdHIud2F0Y2hlcnM7XG4gICAgfVxuICAgIGNvbnN0IG1lbWJlcnMgPSBPYmplY3QuZW50cmllcygoX2EgPSBjbXBNZXRhLiRtZW1iZXJzJCkgIT0gbnVsbCA/IF9hIDoge30pO1xuICAgIG1lbWJlcnMubWFwKChbbWVtYmVyTmFtZSwgW21lbWJlckZsYWdzXV0pID0+IHtcbiAgICAgIGlmICgoQlVJTEQyMy5wcm9wIHx8IEJVSUxEMjMuc3RhdGUpICYmIChtZW1iZXJGbGFncyAmIDMxIC8qIFByb3AgKi8gfHwgKCFCVUlMRDIzLmxhenlMb2FkIHx8IGZsYWdzICYgMiAvKiBwcm94eVN0YXRlICovKSAmJiBtZW1iZXJGbGFncyAmIDMyIC8qIFN0YXRlICovKSkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgZ2V0OiBvcmlnR2V0dGVyLFxuICAgICAgICAgIHNldDogb3JpZ1NldHRlclxuICAgICAgICB9ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90b3R5cGUsIG1lbWJlck5hbWUpIHx8IHt9O1xuICAgICAgICBpZiAob3JpZ0dldHRlcikgY21wTWV0YS4kbWVtYmVycyRbbWVtYmVyTmFtZV1bMF0gfD0gMjA0OCAvKiBHZXR0ZXIgKi87XG4gICAgICAgIGlmIChvcmlnU2V0dGVyKSBjbXBNZXRhLiRtZW1iZXJzJFttZW1iZXJOYW1lXVswXSB8PSA0MDk2IC8qIFNldHRlciAqLztcbiAgICAgICAgaWYgKGZsYWdzICYgMSAvKiBpc0VsZW1lbnRDb25zdHJ1Y3RvciAqLyB8fCAhb3JpZ0dldHRlcikge1xuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90b3R5cGUsIG1lbWJlck5hbWUsIHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgaWYgKEJVSUxEMjMubGF6eUxvYWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoKGNtcE1ldGEuJG1lbWJlcnMkW21lbWJlck5hbWVdWzBdICYgMjA0OCAvKiBHZXR0ZXIgKi8pID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0VmFsdWUodGhpcywgbWVtYmVyTmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlZiA9IGdldEhvc3RSZWYodGhpcyk7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSByZWYgPyByZWYuJGxhenlJbnN0YW5jZSQgOiBwcm90b3R5cGU7XG4gICAgICAgICAgICAgICAgaWYgKCFpbnN0YW5jZSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZVttZW1iZXJOYW1lXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoIUJVSUxEMjMubGF6eUxvYWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3JpZ0dldHRlciA/IG9yaWdHZXR0ZXIuYXBwbHkodGhpcykgOiBnZXRWYWx1ZSh0aGlzLCBtZW1iZXJOYW1lKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG90eXBlLCBtZW1iZXJOYW1lLCB7XG4gICAgICAgICAgc2V0KG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCByZWYgPSBnZXRIb3N0UmVmKHRoaXMpO1xuICAgICAgICAgICAgaWYgKCFyZWYpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKEJVSUxEMjMuaXNEZXYpIHtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAvLyB3ZSBhcmUgcHJveHlpbmcgdGhlIGluc3RhbmNlIChub3QgZWxlbWVudClcbiAgICAgICAgICAgICAgKGZsYWdzICYgMSAvKiBpc0VsZW1lbnRDb25zdHJ1Y3RvciAqLykgPT09IDAgJiZcbiAgICAgICAgICAgICAgLy8gaWYgdGhlIGNsYXNzIGhhcyBhIHNldHRlciwgdGhlbiB0aGUgRWxlbWVudCBjYW4gdXBkYXRlIGluc3RhbmNlIHZhbHVlcywgc28gaWdub3JlXG4gICAgICAgICAgICAgIChjbXBNZXRhLiRtZW1iZXJzJFttZW1iZXJOYW1lXVswXSAmIDQwOTYgLyogU2V0dGVyICovKSA9PT0gMCAmJlxuICAgICAgICAgICAgICAvLyB0aGUgZWxlbWVudCBpcyBub3QgY29uc3RydWN0aW5nXG4gICAgICAgICAgICAgIChyZWYgJiYgcmVmLiRmbGFncyQgJiA4IC8qIGlzQ29uc3RydWN0aW5nSW5zdGFuY2UgKi8pID09PSAwICYmXG4gICAgICAgICAgICAgIC8vIHRoZSBtZW1iZXIgaXMgYSBwcm9wXG4gICAgICAgICAgICAgIChtZW1iZXJGbGFncyAmIDMxIC8qIFByb3AgKi8pICE9PSAwICYmXG4gICAgICAgICAgICAgIC8vIHRoZSBtZW1iZXIgaXMgbm90IG11dGFibGVcbiAgICAgICAgICAgICAgKG1lbWJlckZsYWdzICYgMTAyNCAvKiBNdXRhYmxlICovKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGVEZXZXYXJuKGBAUHJvcCgpIFwiJHttZW1iZXJOYW1lfVwiIG9uIDwke2NtcE1ldGEuJHRhZ05hbWUkfT4gaXMgaW1tdXRhYmxlIGJ1dCB3YXMgbW9kaWZpZWQgZnJvbSB3aXRoaW4gdGhlIGNvbXBvbmVudC5cbk1vcmUgaW5mb3JtYXRpb246IGh0dHBzOi8vc3RlbmNpbGpzLmNvbS9kb2NzL3Byb3BlcnRpZXMjcHJvcC1tdXRhYmlsaXR5YCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcmlnU2V0dGVyKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IG1lbWJlckZsYWdzICYgMzIgLyogU3RhdGUgKi8gPyB0aGlzW21lbWJlck5hbWVdIDogcmVmLiRob3N0RWxlbWVudCRbbWVtYmVyTmFtZV07XG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY3VycmVudFZhbHVlID09PSBcInVuZGVmaW5lZFwiICYmIHJlZi4kaW5zdGFuY2VWYWx1ZXMkLmdldChtZW1iZXJOYW1lKSkge1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gcmVmLiRpbnN0YW5jZVZhbHVlcyQuZ2V0KG1lbWJlck5hbWUpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFyZWYuJGluc3RhbmNlVmFsdWVzJC5nZXQobWVtYmVyTmFtZSkgJiYgY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmVmLiRpbnN0YW5jZVZhbHVlcyQuc2V0KG1lbWJlck5hbWUsIGN1cnJlbnRWYWx1ZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgb3JpZ1NldHRlci5hcHBseSh0aGlzLCBbcGFyc2VQcm9wZXJ0eVZhbHVlKG5ld1ZhbHVlLCBtZW1iZXJGbGFncywgQlVJTEQyMy5mb3JtQXNzb2NpYXRlZCAmJiAhIShjbXBNZXRhLiRmbGFncyQgJiA2NCAvKiBmb3JtQXNzb2NpYXRlZCAqLykpXSk7XG4gICAgICAgICAgICAgIG5ld1ZhbHVlID0gbWVtYmVyRmxhZ3MgJiAzMiAvKiBTdGF0ZSAqLyA/IHRoaXNbbWVtYmVyTmFtZV0gOiByZWYuJGhvc3RFbGVtZW50JFttZW1iZXJOYW1lXTtcbiAgICAgICAgICAgICAgc2V0VmFsdWUodGhpcywgbWVtYmVyTmFtZSwgbmV3VmFsdWUsIGNtcE1ldGEpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIUJVSUxEMjMubGF6eUxvYWQpIHtcbiAgICAgICAgICAgICAgc2V0VmFsdWUodGhpcywgbWVtYmVyTmFtZSwgbmV3VmFsdWUsIGNtcE1ldGEpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoQlVJTEQyMy5sYXp5TG9hZCkge1xuICAgICAgICAgICAgICBpZiAoKGZsYWdzICYgMSAvKiBpc0VsZW1lbnRDb25zdHJ1Y3RvciAqLykgPT09IDAgfHwgKGNtcE1ldGEuJG1lbWJlcnMkW21lbWJlck5hbWVdWzBdICYgNDA5NiAvKiBTZXR0ZXIgKi8pID09PSAwKSB7XG4gICAgICAgICAgICAgICAgc2V0VmFsdWUodGhpcywgbWVtYmVyTmFtZSwgbmV3VmFsdWUsIGNtcE1ldGEpO1xuICAgICAgICAgICAgICAgIGlmIChmbGFncyAmIDEgLyogaXNFbGVtZW50Q29uc3RydWN0b3IgKi8gJiYgIXJlZi4kbGF6eUluc3RhbmNlJCkge1xuICAgICAgICAgICAgICAgICAgcmVmLiRvblJlYWR5UHJvbWlzZSQudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjbXBNZXRhLiRtZW1iZXJzJFttZW1iZXJOYW1lXVswXSAmIDQwOTYgLyogU2V0dGVyICovICYmIHJlZi4kbGF6eUluc3RhbmNlJFttZW1iZXJOYW1lXSAhPT0gcmVmLiRpbnN0YW5jZVZhbHVlcyQuZ2V0KG1lbWJlck5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVmLiRsYXp5SW5zdGFuY2UkW21lbWJlck5hbWVdID0gbmV3VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29uc3Qgc2V0dGVyU2V0VmFsID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHJlZi4kbGF6eUluc3RhbmNlJFttZW1iZXJOYW1lXTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlZi4kaW5zdGFuY2VWYWx1ZXMkLmdldChtZW1iZXJOYW1lKSAmJiBjdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgIHJlZi4kaW5zdGFuY2VWYWx1ZXMkLnNldChtZW1iZXJOYW1lLCBjdXJyZW50VmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZWYuJGxhenlJbnN0YW5jZSRbbWVtYmVyTmFtZV0gPSBwYXJzZVByb3BlcnR5VmFsdWUobmV3VmFsdWUsIG1lbWJlckZsYWdzLCBCVUlMRDIzLmZvcm1Bc3NvY2lhdGVkICYmICEhKGNtcE1ldGEuJGZsYWdzJCAmIDY0IC8qIGZvcm1Bc3NvY2lhdGVkICovKSk7XG4gICAgICAgICAgICAgICAgc2V0VmFsdWUodGhpcywgbWVtYmVyTmFtZSwgcmVmLiRsYXp5SW5zdGFuY2UkW21lbWJlck5hbWVdLCBjbXBNZXRhKTtcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgaWYgKHJlZi4kbGF6eUluc3RhbmNlJCkge1xuICAgICAgICAgICAgICAgIHNldHRlclNldFZhbCgpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlZi4kb25SZWFkeVByb21pc2UkLnRoZW4oKCkgPT4gc2V0dGVyU2V0VmFsKCkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoQlVJTEQyMy5sYXp5TG9hZCAmJiBCVUlMRDIzLm1ldGhvZCAmJiBmbGFncyAmIDEgLyogaXNFbGVtZW50Q29uc3RydWN0b3IgKi8gJiYgbWVtYmVyRmxhZ3MgJiA2NCAvKiBNZXRob2QgKi8pIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvdHlwZSwgbWVtYmVyTmFtZSwge1xuICAgICAgICAgIHZhbHVlKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgIHZhciBfYTI7XG4gICAgICAgICAgICBjb25zdCByZWYgPSBnZXRIb3N0UmVmKHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuIChfYTIgPSByZWYgPT0gbnVsbCA/IHZvaWQgMCA6IHJlZi4kb25JbnN0YW5jZVByb21pc2UkKSA9PSBudWxsID8gdm9pZCAwIDogX2EyLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICB2YXIgX2EzO1xuICAgICAgICAgICAgICByZXR1cm4gKF9hMyA9IHJlZi4kbGF6eUluc3RhbmNlJCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hM1ttZW1iZXJOYW1lXSguLi5hcmdzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKEJVSUxEMjMub2JzZXJ2ZUF0dHJpYnV0ZSAmJiAoIUJVSUxEMjMubGF6eUxvYWQgfHwgZmxhZ3MgJiAxIC8qIGlzRWxlbWVudENvbnN0cnVjdG9yICovKSkge1xuICAgICAgY29uc3QgYXR0ck5hbWVUb1Byb3BOYW1lID0gLyogQF9fUFVSRV9fICovbmV3IE1hcCgpO1xuICAgICAgcHJvdG90eXBlLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayA9IGZ1bmN0aW9uIChhdHRyTmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG4gICAgICAgIHBsdC5qbXAoKCkgPT4ge1xuICAgICAgICAgIHZhciBfYTI7XG4gICAgICAgICAgY29uc3QgcHJvcE5hbWUgPSBhdHRyTmFtZVRvUHJvcE5hbWUuZ2V0KGF0dHJOYW1lKTtcbiAgICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkgJiYgQlVJTEQyMy5sYXp5TG9hZCkge1xuICAgICAgICAgICAgbmV3VmFsdWUgPSB0aGlzW3Byb3BOYW1lXTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzW3Byb3BOYW1lXTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkgJiYgdHlwZW9mIHRoaXNbcHJvcE5hbWVdID09PSBcIm51bWJlclwiICYmXG4gICAgICAgICAgLy8gY2FzdCB0eXBlIHRvIG51bWJlciB0byBhdm9pZCBUUyBjb21waWxlciBpc3N1ZXNcbiAgICAgICAgICB0aGlzW3Byb3BOYW1lXSA9PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0gZWxzZSBpZiAocHJvcE5hbWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgaG9zdFJlZiA9IGdldEhvc3RSZWYodGhpcyk7XG4gICAgICAgICAgICBjb25zdCBmbGFnczIgPSBob3N0UmVmID09IG51bGwgPyB2b2lkIDAgOiBob3N0UmVmLiRmbGFncyQ7XG4gICAgICAgICAgICBpZiAoaG9zdFJlZiAmJiBmbGFnczIgJiYgIShmbGFnczIgJiA4IC8qIGlzQ29uc3RydWN0aW5nSW5zdGFuY2UgKi8pICYmIGZsYWdzMiAmIDEyOCAvKiBpc1dhdGNoUmVhZHkgKi8gJiYgbmV3VmFsdWUgIT09IG9sZFZhbHVlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGVsbSA9IEJVSUxEMjMubGF6eUxvYWQgPyBob3N0UmVmLiRob3N0RWxlbWVudCQgOiB0aGlzO1xuICAgICAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IEJVSUxEMjMubGF6eUxvYWQgPyBob3N0UmVmLiRsYXp5SW5zdGFuY2UkIDogZWxtO1xuICAgICAgICAgICAgICBjb25zdCBlbnRyeSA9IChfYTIgPSBjbXBNZXRhLiR3YXRjaGVycyQpID09IG51bGwgPyB2b2lkIDAgOiBfYTJbYXR0ck5hbWVdO1xuICAgICAgICAgICAgICBlbnRyeSA9PSBudWxsID8gdm9pZCAwIDogZW50cnkuZm9yRWFjaChjYWxsYmFja05hbWUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpbnN0YW5jZVtjYWxsYmFja05hbWVdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgIGluc3RhbmNlW2NhbGxiYWNrTmFtZV0uY2FsbChpbnN0YW5jZSwgbmV3VmFsdWUsIG9sZFZhbHVlLCBhdHRyTmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgcHJvcERlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvdHlwZSwgcHJvcE5hbWUpO1xuICAgICAgICAgIG5ld1ZhbHVlID0gbmV3VmFsdWUgPT09IG51bGwgJiYgdHlwZW9mIHRoaXNbcHJvcE5hbWVdID09PSBcImJvb2xlYW5cIiA/IGZhbHNlIDogbmV3VmFsdWU7XG4gICAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSB0aGlzW3Byb3BOYW1lXSAmJiAoIXByb3BEZXNjLmdldCB8fCAhIXByb3BEZXNjLnNldCkpIHtcbiAgICAgICAgICAgIHRoaXNbcHJvcE5hbWVdID0gbmV3VmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICBDc3RyLm9ic2VydmVkQXR0cmlidXRlcyA9IEFycmF5LmZyb20oLyogQF9fUFVSRV9fICovbmV3IFNldChbLi4uT2JqZWN0LmtleXMoKF9iID0gY21wTWV0YS4kd2F0Y2hlcnMkKSAhPSBudWxsID8gX2IgOiB7fSksIC4uLm1lbWJlcnMuZmlsdGVyKChbXywgbV0pID0+IG1bMF0gJiAxNSAvKiBIYXNBdHRyaWJ1dGUgKi8pLm1hcCgoW3Byb3BOYW1lLCBtXSkgPT4ge1xuICAgICAgICB2YXIgX2EyO1xuICAgICAgICBjb25zdCBhdHRyTmFtZSA9IG1bMV0gfHwgcHJvcE5hbWU7XG4gICAgICAgIGF0dHJOYW1lVG9Qcm9wTmFtZS5zZXQoYXR0ck5hbWUsIHByb3BOYW1lKTtcbiAgICAgICAgaWYgKEJVSUxEMjMucmVmbGVjdCAmJiBtWzBdICYgNTEyIC8qIFJlZmxlY3RBdHRyICovKSB7XG4gICAgICAgICAgKF9hMiA9IGNtcE1ldGEuJGF0dHJzVG9SZWZsZWN0JCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hMi5wdXNoKFtwcm9wTmFtZSwgYXR0ck5hbWVdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXR0ck5hbWU7XG4gICAgICB9KV0pKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIENzdHI7XG59O1xuXG4vLyBzcmMvcnVudGltZS9pbml0aWFsaXplLWNvbXBvbmVudC50c1xudmFyIGluaXRpYWxpemVDb21wb25lbnQgPSBhc3luYyAoZWxtLCBob3N0UmVmLCBjbXBNZXRhLCBobXJWZXJzaW9uSWQpID0+IHtcbiAgbGV0IENzdHI7XG4gIGlmICgoaG9zdFJlZi4kZmxhZ3MkICYgMzIgLyogaGFzSW5pdGlhbGl6ZWRDb21wb25lbnQgKi8pID09PSAwKSB7XG4gICAgaG9zdFJlZi4kZmxhZ3MkIHw9IDMyIC8qIGhhc0luaXRpYWxpemVkQ29tcG9uZW50ICovO1xuICAgIGNvbnN0IGJ1bmRsZUlkID0gY21wTWV0YS4kbGF6eUJ1bmRsZUlkJDtcbiAgICBpZiAoQlVJTEQyNC5sYXp5TG9hZCAmJiBidW5kbGVJZCkge1xuICAgICAgY29uc3QgQ3N0ckltcG9ydCA9IGxvYWRNb2R1bGUoY21wTWV0YSwgaG9zdFJlZiwgaG1yVmVyc2lvbklkKTtcbiAgICAgIGlmIChDc3RySW1wb3J0ICYmIFwidGhlblwiIGluIENzdHJJbXBvcnQpIHtcbiAgICAgICAgY29uc3QgZW5kTG9hZCA9IHVuaXF1ZVRpbWUoYHN0OmxvYWQ6JHtjbXBNZXRhLiR0YWdOYW1lJH06JHtob3N0UmVmLiRtb2RlTmFtZSR9YCwgYFtTdGVuY2lsXSBMb2FkIG1vZHVsZSBmb3IgPCR7Y21wTWV0YS4kdGFnTmFtZSR9PmApO1xuICAgICAgICBDc3RyID0gYXdhaXQgQ3N0ckltcG9ydDtcbiAgICAgICAgZW5kTG9hZCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgQ3N0ciA9IENzdHJJbXBvcnQ7XG4gICAgICB9XG4gICAgICBpZiAoIUNzdHIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb25zdHJ1Y3RvciBmb3IgXCIke2NtcE1ldGEuJHRhZ05hbWUkfSMke2hvc3RSZWYuJG1vZGVOYW1lJH1cIiB3YXMgbm90IGZvdW5kYCk7XG4gICAgICB9XG4gICAgICBpZiAoQlVJTEQyNC5tZW1iZXIgJiYgIUNzdHIuaXNQcm94aWVkKSB7XG4gICAgICAgIGlmIChCVUlMRDI0LndhdGNoQ2FsbGJhY2spIHtcbiAgICAgICAgICBjbXBNZXRhLiR3YXRjaGVycyQgPSBDc3RyLndhdGNoZXJzO1xuICAgICAgICB9XG4gICAgICAgIHByb3h5Q29tcG9uZW50KENzdHIsIGNtcE1ldGEsIDIgLyogcHJveHlTdGF0ZSAqLyk7XG4gICAgICAgIENzdHIuaXNQcm94aWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGVuZE5ld0luc3RhbmNlID0gY3JlYXRlVGltZShcImNyZWF0ZUluc3RhbmNlXCIsIGNtcE1ldGEuJHRhZ05hbWUkKTtcbiAgICAgIGlmIChCVUlMRDI0Lm1lbWJlcikge1xuICAgICAgICBob3N0UmVmLiRmbGFncyQgfD0gOCAvKiBpc0NvbnN0cnVjdGluZ0luc3RhbmNlICovO1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgbmV3IENzdHIoaG9zdFJlZik7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGVFcnJvcihlLCBlbG0pO1xuICAgICAgfVxuICAgICAgaWYgKEJVSUxEMjQubWVtYmVyKSB7XG4gICAgICAgIGhvc3RSZWYuJGZsYWdzJCAmPSB+OCAvKiBpc0NvbnN0cnVjdGluZ0luc3RhbmNlICovO1xuICAgICAgfVxuICAgICAgaWYgKEJVSUxEMjQud2F0Y2hDYWxsYmFjaykge1xuICAgICAgICBob3N0UmVmLiRmbGFncyQgfD0gMTI4IC8qIGlzV2F0Y2hSZWFkeSAqLztcbiAgICAgIH1cbiAgICAgIGVuZE5ld0luc3RhbmNlKCk7XG4gICAgICBmaXJlQ29ubmVjdGVkQ2FsbGJhY2soaG9zdFJlZi4kbGF6eUluc3RhbmNlJCwgZWxtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgQ3N0ciA9IGVsbS5jb25zdHJ1Y3RvcjtcbiAgICAgIGNvbnN0IGNtcFRhZyA9IGVsbS5sb2NhbE5hbWU7XG4gICAgICBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZChjbXBUYWcpLnRoZW4oKCkgPT4gaG9zdFJlZi4kZmxhZ3MkIHw9IDEyOCAvKiBpc1dhdGNoUmVhZHkgKi8pO1xuICAgIH1cbiAgICBpZiAoQlVJTEQyNC5zdHlsZSAmJiBDc3RyICYmIENzdHIuc3R5bGUpIHtcbiAgICAgIGxldCBzdHlsZTtcbiAgICAgIGlmICh0eXBlb2YgQ3N0ci5zdHlsZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBzdHlsZSA9IENzdHIuc3R5bGU7XG4gICAgICB9IGVsc2UgaWYgKEJVSUxEMjQubW9kZSAmJiB0eXBlb2YgQ3N0ci5zdHlsZSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICBob3N0UmVmLiRtb2RlTmFtZSQgPSBjb21wdXRlTW9kZShlbG0pO1xuICAgICAgICBpZiAoaG9zdFJlZi4kbW9kZU5hbWUkKSB7XG4gICAgICAgICAgc3R5bGUgPSBDc3RyLnN0eWxlW2hvc3RSZWYuJG1vZGVOYW1lJF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEJVSUxEMjQuaHlkcmF0ZVNlcnZlclNpZGUgJiYgaG9zdFJlZi4kbW9kZU5hbWUkKSB7XG4gICAgICAgICAgZWxtLnNldEF0dHJpYnV0ZShcInMtbW9kZVwiLCBob3N0UmVmLiRtb2RlTmFtZSQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCBzY29wZUlkMiA9IGdldFNjb3BlSWQoY21wTWV0YSwgaG9zdFJlZi4kbW9kZU5hbWUkKTtcbiAgICAgIGlmICghc3R5bGVzLmhhcyhzY29wZUlkMikpIHtcbiAgICAgICAgY29uc3QgZW5kUmVnaXN0ZXJTdHlsZXMgPSBjcmVhdGVUaW1lKFwicmVnaXN0ZXJTdHlsZXNcIiwgY21wTWV0YS4kdGFnTmFtZSQpO1xuICAgICAgICBpZiAoQlVJTEQyNC5oeWRyYXRlU2VydmVyU2lkZSAmJiBCVUlMRDI0LnNoYWRvd0RvbSkge1xuICAgICAgICAgIGlmIChjbXBNZXRhLiRmbGFncyQgJiAxMjggLyogc2hhZG93TmVlZHNTY29wZWRDc3MgKi8pIHtcbiAgICAgICAgICAgIHN0eWxlID0gc2NvcGVDc3Moc3R5bGUsIHNjb3BlSWQyLCB0cnVlKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG5lZWRzU2NvcGVkU1NSKCkpIHtcbiAgICAgICAgICAgIHN0eWxlID0gZXhwYW5kUGFydFNlbGVjdG9ycyhzdHlsZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlZ2lzdGVyU3R5bGUoc2NvcGVJZDIsIHN0eWxlLCAhIShjbXBNZXRhLiRmbGFncyQgJiAxIC8qIHNoYWRvd0RvbUVuY2Fwc3VsYXRpb24gKi8pKTtcbiAgICAgICAgZW5kUmVnaXN0ZXJTdHlsZXMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29uc3QgYW5jZXN0b3JDb21wb25lbnQgPSBob3N0UmVmLiRhbmNlc3RvckNvbXBvbmVudCQ7XG4gIGNvbnN0IHNjaGVkdWxlID0gKCkgPT4gc2NoZWR1bGVVcGRhdGUoaG9zdFJlZiwgdHJ1ZSk7XG4gIGlmIChCVUlMRDI0LmFzeW5jTG9hZGluZyAmJiBhbmNlc3RvckNvbXBvbmVudCAmJiBhbmNlc3RvckNvbXBvbmVudFtcInMtcmNcIl0pIHtcbiAgICBhbmNlc3RvckNvbXBvbmVudFtcInMtcmNcIl0ucHVzaChzY2hlZHVsZSk7XG4gIH0gZWxzZSB7XG4gICAgc2NoZWR1bGUoKTtcbiAgfVxufTtcbnZhciBmaXJlQ29ubmVjdGVkQ2FsbGJhY2sgPSAoaW5zdGFuY2UsIGVsbSkgPT4ge1xuICBpZiAoQlVJTEQyNC5sYXp5TG9hZCkge1xuICAgIHNhZmVDYWxsKGluc3RhbmNlLCBcImNvbm5lY3RlZENhbGxiYWNrXCIsIHZvaWQgMCwgZWxtKTtcbiAgfVxufTtcblxuLy8gc3JjL3J1bnRpbWUvY29ubmVjdGVkLWNhbGxiYWNrLnRzXG52YXIgY29ubmVjdGVkQ2FsbGJhY2sgPSBlbG0gPT4ge1xuICBpZiAoKHBsdC4kZmxhZ3MkICYgMSAvKiBpc1RtcERpc2Nvbm5lY3RlZCAqLykgPT09IDApIHtcbiAgICBjb25zdCBob3N0UmVmID0gZ2V0SG9zdFJlZihlbG0pO1xuICAgIGlmICghaG9zdFJlZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjbXBNZXRhID0gaG9zdFJlZi4kY21wTWV0YSQ7XG4gICAgY29uc3QgZW5kQ29ubmVjdGVkID0gY3JlYXRlVGltZShcImNvbm5lY3RlZENhbGxiYWNrXCIsIGNtcE1ldGEuJHRhZ05hbWUkKTtcbiAgICBpZiAoQlVJTEQyNS5ob3N0TGlzdGVuZXJUYXJnZXRQYXJlbnQpIHtcbiAgICAgIGFkZEhvc3RFdmVudExpc3RlbmVycyhlbG0sIGhvc3RSZWYsIGNtcE1ldGEuJGxpc3RlbmVycyQsIHRydWUpO1xuICAgIH1cbiAgICBpZiAoIShob3N0UmVmLiRmbGFncyQgJiAxIC8qIGhhc0Nvbm5lY3RlZCAqLykpIHtcbiAgICAgIGhvc3RSZWYuJGZsYWdzJCB8PSAxIC8qIGhhc0Nvbm5lY3RlZCAqLztcbiAgICAgIGxldCBob3N0SWQ7XG4gICAgICBpZiAoQlVJTEQyNS5oeWRyYXRlQ2xpZW50U2lkZSkge1xuICAgICAgICBob3N0SWQgPSBlbG0uZ2V0QXR0cmlidXRlKEhZRFJBVEVfSUQpO1xuICAgICAgICBpZiAoaG9zdElkKSB7XG4gICAgICAgICAgaWYgKEJVSUxEMjUuc2hhZG93RG9tICYmIHN1cHBvcnRzU2hhZG93ICYmIGNtcE1ldGEuJGZsYWdzJCAmIDEgLyogc2hhZG93RG9tRW5jYXBzdWxhdGlvbiAqLykge1xuICAgICAgICAgICAgY29uc3Qgc2NvcGVJZDIgPSBCVUlMRDI1Lm1vZGUgPyBhZGRTdHlsZShlbG0uc2hhZG93Um9vdCwgY21wTWV0YSwgZWxtLmdldEF0dHJpYnV0ZShcInMtbW9kZVwiKSkgOiBhZGRTdHlsZShlbG0uc2hhZG93Um9vdCwgY21wTWV0YSk7XG4gICAgICAgICAgICBlbG0uY2xhc3NMaXN0LnJlbW92ZShzY29wZUlkMiArIFwiLWhcIiwgc2NvcGVJZDIgKyBcIi1zXCIpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoQlVJTEQyNS5zY29wZWQgJiYgY21wTWV0YS4kZmxhZ3MkICYgMiAvKiBzY29wZWRDc3NFbmNhcHN1bGF0aW9uICovKSB7XG4gICAgICAgICAgICBjb25zdCBzY29wZUlkMiA9IGdldFNjb3BlSWQoY21wTWV0YSwgQlVJTEQyNS5tb2RlID8gZWxtLmdldEF0dHJpYnV0ZShcInMtbW9kZVwiKSA6IHZvaWQgMCk7XG4gICAgICAgICAgICBlbG1bXCJzLXNjXCJdID0gc2NvcGVJZDI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGluaXRpYWxpemVDbGllbnRIeWRyYXRlKGVsbSwgY21wTWV0YS4kdGFnTmFtZSQsIGhvc3RJZCwgaG9zdFJlZik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChCVUlMRDI1LnNsb3RSZWxvY2F0aW9uICYmICFob3N0SWQpIHtcbiAgICAgICAgaWYgKEJVSUxEMjUuaHlkcmF0ZVNlcnZlclNpZGUgfHwgKEJVSUxEMjUuc2xvdCB8fCBCVUlMRDI1LnNoYWRvd0RvbSkgJiZcbiAgICAgICAgLy8gVE9ETyhTVEVOQ0lMLTg1NCk6IFJlbW92ZSBjb2RlIHJlbGF0ZWQgdG8gbGVnYWN5IHNoYWRvd0RvbVNoaW0gZmllbGRcbiAgICAgICAgY21wTWV0YS4kZmxhZ3MkICYgKDQgLyogaGFzU2xvdFJlbG9jYXRpb24gKi8gfCA4IC8qIG5lZWRzU2hhZG93RG9tU2hpbSAqLykpIHtcbiAgICAgICAgICBzZXRDb250ZW50UmVmZXJlbmNlKGVsbSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChCVUlMRDI1LmFzeW5jTG9hZGluZykge1xuICAgICAgICBsZXQgYW5jZXN0b3JDb21wb25lbnQgPSBlbG07XG4gICAgICAgIHdoaWxlIChhbmNlc3RvckNvbXBvbmVudCA9IGFuY2VzdG9yQ29tcG9uZW50LnBhcmVudE5vZGUgfHwgYW5jZXN0b3JDb21wb25lbnQuaG9zdCkge1xuICAgICAgICAgIGlmIChCVUlMRDI1Lmh5ZHJhdGVDbGllbnRTaWRlICYmIGFuY2VzdG9yQ29tcG9uZW50Lm5vZGVUeXBlID09PSAxIC8qIEVsZW1lbnROb2RlICovICYmIGFuY2VzdG9yQ29tcG9uZW50Lmhhc0F0dHJpYnV0ZShcInMtaWRcIikgJiYgYW5jZXN0b3JDb21wb25lbnRbXCJzLXBcIl0gfHwgYW5jZXN0b3JDb21wb25lbnRbXCJzLXBcIl0pIHtcbiAgICAgICAgICAgIGF0dGFjaFRvQW5jZXN0b3IoaG9zdFJlZiwgaG9zdFJlZi4kYW5jZXN0b3JDb21wb25lbnQkID0gYW5jZXN0b3JDb21wb25lbnQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoQlVJTEQyNS5wcm9wICYmICFCVUlMRDI1Lmh5ZHJhdGVTZXJ2ZXJTaWRlICYmIGNtcE1ldGEuJG1lbWJlcnMkKSB7XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKGNtcE1ldGEuJG1lbWJlcnMkKS5tYXAoKFttZW1iZXJOYW1lLCBbbWVtYmVyRmxhZ3NdXSkgPT4ge1xuICAgICAgICAgIGlmIChtZW1iZXJGbGFncyAmIDMxIC8qIFByb3AgKi8gJiYgZWxtLmhhc093blByb3BlcnR5KG1lbWJlck5hbWUpKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGVsbVttZW1iZXJOYW1lXTtcbiAgICAgICAgICAgIGRlbGV0ZSBlbG1bbWVtYmVyTmFtZV07XG4gICAgICAgICAgICBlbG1bbWVtYmVyTmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKEJVSUxEMjUuaW5pdGlhbGl6ZU5leHRUaWNrKSB7XG4gICAgICAgIG5leHRUaWNrKCgpID0+IGluaXRpYWxpemVDb21wb25lbnQoZWxtLCBob3N0UmVmLCBjbXBNZXRhKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbml0aWFsaXplQ29tcG9uZW50KGVsbSwgaG9zdFJlZiwgY21wTWV0YSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZEhvc3RFdmVudExpc3RlbmVycyhlbG0sIGhvc3RSZWYsIGNtcE1ldGEuJGxpc3RlbmVycyQsIGZhbHNlKTtcbiAgICAgIGlmIChob3N0UmVmID09IG51bGwgPyB2b2lkIDAgOiBob3N0UmVmLiRsYXp5SW5zdGFuY2UkKSB7XG4gICAgICAgIGZpcmVDb25uZWN0ZWRDYWxsYmFjayhob3N0UmVmLiRsYXp5SW5zdGFuY2UkLCBlbG0pO1xuICAgICAgfSBlbHNlIGlmIChob3N0UmVmID09IG51bGwgPyB2b2lkIDAgOiBob3N0UmVmLiRvblJlYWR5UHJvbWlzZSQpIHtcbiAgICAgICAgaG9zdFJlZi4kb25SZWFkeVByb21pc2UkLnRoZW4oKCkgPT4gZmlyZUNvbm5lY3RlZENhbGxiYWNrKGhvc3RSZWYuJGxhenlJbnN0YW5jZSQsIGVsbSkpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbmRDb25uZWN0ZWQoKTtcbiAgfVxufTtcbnZhciBzZXRDb250ZW50UmVmZXJlbmNlID0gZWxtID0+IHtcbiAgaWYgKCF3aW4uZG9jdW1lbnQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY29udGVudFJlZkVsbSA9IGVsbVtcInMtY3JcIl0gPSB3aW4uZG9jdW1lbnQuY3JlYXRlQ29tbWVudChCVUlMRDI1LmlzRGVidWcgPyBgY29udGVudC1yZWYgKGhvc3Q9JHtlbG0ubG9jYWxOYW1lfSlgIDogXCJcIik7XG4gIGNvbnRlbnRSZWZFbG1bXCJzLWNuXCJdID0gdHJ1ZTtcbiAgaW5zZXJ0QmVmb3JlKGVsbSwgY29udGVudFJlZkVsbSwgZWxtLmZpcnN0Q2hpbGQpO1xufTtcblxuLy8gc3JjL3J1bnRpbWUvZGlzY29ubmVjdGVkLWNhbGxiYWNrLnRzXG5pbXBvcnQgeyBCVUlMRCBhcyBCVUlMRDI2IH0gZnJvbSBcIkBzdGVuY2lsL2NvcmUvaW50ZXJuYWwvYXBwLWRhdGFcIjtcbnZhciBkaXNjb25uZWN0SW5zdGFuY2UgPSAoaW5zdGFuY2UsIGVsbSkgPT4ge1xuICBpZiAoQlVJTEQyNi5sYXp5TG9hZCkge1xuICAgIHNhZmVDYWxsKGluc3RhbmNlLCBcImRpc2Nvbm5lY3RlZENhbGxiYWNrXCIsIHZvaWQgMCwgZWxtIHx8IGluc3RhbmNlKTtcbiAgfVxufTtcbnZhciBkaXNjb25uZWN0ZWRDYWxsYmFjayA9IGFzeW5jIGVsbSA9PiB7XG4gIGlmICgocGx0LiRmbGFncyQgJiAxIC8qIGlzVG1wRGlzY29ubmVjdGVkICovKSA9PT0gMCkge1xuICAgIGNvbnN0IGhvc3RSZWYgPSBnZXRIb3N0UmVmKGVsbSk7XG4gICAgaWYgKEJVSUxEMjYuaG9zdExpc3RlbmVyKSB7XG4gICAgICBpZiAoaG9zdFJlZiA9PSBudWxsID8gdm9pZCAwIDogaG9zdFJlZi4kcm1MaXN0ZW5lcnMkKSB7XG4gICAgICAgIGhvc3RSZWYuJHJtTGlzdGVuZXJzJC5tYXAocm1MaXN0ZW5lciA9PiBybUxpc3RlbmVyKCkpO1xuICAgICAgICBob3N0UmVmLiRybUxpc3RlbmVycyQgPSB2b2lkIDA7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghQlVJTEQyNi5sYXp5TG9hZCkge1xuICAgICAgZGlzY29ubmVjdEluc3RhbmNlKGVsbSk7XG4gICAgfSBlbHNlIGlmIChob3N0UmVmID09IG51bGwgPyB2b2lkIDAgOiBob3N0UmVmLiRsYXp5SW5zdGFuY2UkKSB7XG4gICAgICBkaXNjb25uZWN0SW5zdGFuY2UoaG9zdFJlZi4kbGF6eUluc3RhbmNlJCwgZWxtKTtcbiAgICB9IGVsc2UgaWYgKGhvc3RSZWYgPT0gbnVsbCA/IHZvaWQgMCA6IGhvc3RSZWYuJG9uUmVhZHlQcm9taXNlJCkge1xuICAgICAgaG9zdFJlZi4kb25SZWFkeVByb21pc2UkLnRoZW4oKCkgPT4gZGlzY29ubmVjdEluc3RhbmNlKGhvc3RSZWYuJGxhenlJbnN0YW5jZSQsIGVsbSkpO1xuICAgIH1cbiAgfVxuICBpZiAocm9vdEFwcGxpZWRTdHlsZXMuaGFzKGVsbSkpIHtcbiAgICByb290QXBwbGllZFN0eWxlcy5kZWxldGUoZWxtKTtcbiAgfVxuICBpZiAoZWxtLnNoYWRvd1Jvb3QgJiYgcm9vdEFwcGxpZWRTdHlsZXMuaGFzKGVsbS5zaGFkb3dSb290KSkge1xuICAgIHJvb3RBcHBsaWVkU3R5bGVzLmRlbGV0ZShlbG0uc2hhZG93Um9vdCk7XG4gIH1cbn07XG5cbi8vIHNyYy9ydW50aW1lL2Jvb3RzdHJhcC1jdXN0b20tZWxlbWVudC50c1xudmFyIGRlZmluZUN1c3RvbUVsZW1lbnQgPSAoQ3N0ciwgY29tcGFjdE1ldGEpID0+IHtcbiAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKGNvbXBhY3RNZXRhWzFdLCBwcm94eUN1c3RvbUVsZW1lbnQoQ3N0ciwgY29tcGFjdE1ldGEpKTtcbn07XG52YXIgcHJveHlDdXN0b21FbGVtZW50ID0gKENzdHIsIGNvbXBhY3RNZXRhKSA9PiB7XG4gIGNvbnN0IGNtcE1ldGEgPSB7XG4gICAgJGZsYWdzJDogY29tcGFjdE1ldGFbMF0sXG4gICAgJHRhZ05hbWUkOiBjb21wYWN0TWV0YVsxXVxuICB9O1xuICBpZiAoQlVJTEQyNy5tZW1iZXIpIHtcbiAgICBjbXBNZXRhLiRtZW1iZXJzJCA9IGNvbXBhY3RNZXRhWzJdO1xuICB9XG4gIGlmIChCVUlMRDI3Lmhvc3RMaXN0ZW5lcikge1xuICAgIGNtcE1ldGEuJGxpc3RlbmVycyQgPSBjb21wYWN0TWV0YVszXTtcbiAgfVxuICBpZiAoQlVJTEQyNy53YXRjaENhbGxiYWNrKSB7XG4gICAgY21wTWV0YS4kd2F0Y2hlcnMkID0gQ3N0ci4kd2F0Y2hlcnMkO1xuICB9XG4gIGlmIChCVUlMRDI3LnJlZmxlY3QpIHtcbiAgICBjbXBNZXRhLiRhdHRyc1RvUmVmbGVjdCQgPSBbXTtcbiAgfVxuICBpZiAoQlVJTEQyNy5zaGFkb3dEb20gJiYgIXN1cHBvcnRzU2hhZG93ICYmIGNtcE1ldGEuJGZsYWdzJCAmIDEgLyogc2hhZG93RG9tRW5jYXBzdWxhdGlvbiAqLykge1xuICAgIGNtcE1ldGEuJGZsYWdzJCB8PSA4IC8qIG5lZWRzU2hhZG93RG9tU2hpbSAqLztcbiAgfVxuICBpZiAoIShjbXBNZXRhLiRmbGFncyQgJiAxIC8qIHNoYWRvd0RvbUVuY2Fwc3VsYXRpb24gKi8pICYmIGNtcE1ldGEuJGZsYWdzJCAmIDI1NiAvKiBoYXNSZW5kZXJGbiAqLykge1xuICAgIGlmIChCVUlMRDI3LmV4cGVyaW1lbnRhbFNsb3RGaXhlcykge1xuICAgICAgcGF0Y2hQc2V1ZG9TaGFkb3dEb20oQ3N0ci5wcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoQlVJTEQyNy5zbG90Q2hpbGROb2Rlc0ZpeCkge1xuICAgICAgICBwYXRjaENoaWxkU2xvdE5vZGVzKENzdHIucHJvdG90eXBlKTtcbiAgICAgIH1cbiAgICAgIGlmIChCVUlMRDI3LmNsb25lTm9kZUZpeCkge1xuICAgICAgICBwYXRjaENsb25lTm9kZShDc3RyLnByb3RvdHlwZSk7XG4gICAgICB9XG4gICAgICBpZiAoQlVJTEQyNy5hcHBlbmRDaGlsZFNsb3RGaXgpIHtcbiAgICAgICAgcGF0Y2hTbG90QXBwZW5kQ2hpbGQoQ3N0ci5wcm90b3R5cGUpO1xuICAgICAgfVxuICAgICAgaWYgKEJVSUxEMjcuc2NvcGVkU2xvdFRleHRDb250ZW50Rml4ICYmIGNtcE1ldGEuJGZsYWdzJCAmIDIgLyogc2NvcGVkQ3NzRW5jYXBzdWxhdGlvbiAqLykge1xuICAgICAgICBwYXRjaFRleHRDb250ZW50KENzdHIucHJvdG90eXBlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKEJVSUxEMjcuaHlkcmF0ZUNsaWVudFNpZGUgJiYgQlVJTEQyNy5zaGFkb3dEb20pIHtcbiAgICBoeWRyYXRlU2NvcGVkVG9TaGFkb3coKTtcbiAgfVxuICBjb25zdCBvcmlnaW5hbENvbm5lY3RlZENhbGxiYWNrID0gQ3N0ci5wcm90b3R5cGUuY29ubmVjdGVkQ2FsbGJhY2s7XG4gIGNvbnN0IG9yaWdpbmFsRGlzY29ubmVjdGVkQ2FsbGJhY2sgPSBDc3RyLnByb3RvdHlwZS5kaXNjb25uZWN0ZWRDYWxsYmFjaztcbiAgT2JqZWN0LmFzc2lnbihDc3RyLnByb3RvdHlwZSwge1xuICAgIF9faGFzSG9zdExpc3RlbmVyQXR0YWNoZWQ6IGZhbHNlLFxuICAgIF9fcmVnaXN0ZXJIb3N0KCkge1xuICAgICAgcmVnaXN0ZXJIb3N0KHRoaXMsIGNtcE1ldGEpO1xuICAgIH0sXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAoIXRoaXMuX19oYXNIb3N0TGlzdGVuZXJBdHRhY2hlZCkge1xuICAgICAgICBjb25zdCBob3N0UmVmID0gZ2V0SG9zdFJlZih0aGlzKTtcbiAgICAgICAgaWYgKCFob3N0UmVmKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGFkZEhvc3RFdmVudExpc3RlbmVycyh0aGlzLCBob3N0UmVmLCBjbXBNZXRhLiRsaXN0ZW5lcnMkLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuX19oYXNIb3N0TGlzdGVuZXJBdHRhY2hlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBjb25uZWN0ZWRDYWxsYmFjayh0aGlzKTtcbiAgICAgIGlmIChvcmlnaW5hbENvbm5lY3RlZENhbGxiYWNrKSB7XG4gICAgICAgIG9yaWdpbmFsQ29ubmVjdGVkQ2FsbGJhY2suY2FsbCh0aGlzKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgZGlzY29ubmVjdGVkQ2FsbGJhY2sodGhpcyk7XG4gICAgICBpZiAob3JpZ2luYWxEaXNjb25uZWN0ZWRDYWxsYmFjaykge1xuICAgICAgICBvcmlnaW5hbERpc2Nvbm5lY3RlZENhbGxiYWNrLmNhbGwodGhpcyk7XG4gICAgICB9XG4gICAgfSxcbiAgICBfX2F0dGFjaFNoYWRvdygpIHtcbiAgICAgIGlmIChzdXBwb3J0c1NoYWRvdykge1xuICAgICAgICBpZiAoIXRoaXMuc2hhZG93Um9vdCkge1xuICAgICAgICAgIGNyZWF0ZVNoYWRvd1Jvb3QuY2FsbCh0aGlzLCBjbXBNZXRhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodGhpcy5zaGFkb3dSb290Lm1vZGUgIT09IFwib3BlblwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byByZS11c2UgZXhpc3Rpbmcgc2hhZG93IHJvb3QgZm9yICR7Y21wTWV0YS4kdGFnTmFtZSR9ISBNb2RlIGlzIHNldCB0byAke3RoaXMuc2hhZG93Um9vdC5tb2RlfSBidXQgU3RlbmNpbCBvbmx5IHN1cHBvcnRzIG9wZW4gc2hhZG93IHJvb3RzLmApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zaGFkb3dSb290ID0gdGhpcztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICBDc3RyLmlzID0gY21wTWV0YS4kdGFnTmFtZSQ7XG4gIHJldHVybiBwcm94eUNvbXBvbmVudChDc3RyLCBjbXBNZXRhLCAxIC8qIGlzRWxlbWVudENvbnN0cnVjdG9yICovIHwgMiAvKiBwcm94eVN0YXRlICovKTtcbn07XG52YXIgZm9yY2VNb2RlVXBkYXRlID0gZWxtID0+IHtcbiAgaWYgKEJVSUxEMjcuc3R5bGUgJiYgQlVJTEQyNy5tb2RlICYmICFCVUlMRDI3LmxhenlMb2FkKSB7XG4gICAgY29uc3QgbW9kZSA9IGNvbXB1dGVNb2RlKGVsbSk7XG4gICAgY29uc3QgaG9zdFJlZiA9IGdldEhvc3RSZWYoZWxtKTtcbiAgICBpZiAoaG9zdFJlZiAmJiBob3N0UmVmLiRtb2RlTmFtZSQgIT09IG1vZGUpIHtcbiAgICAgIGNvbnN0IGNtcE1ldGEgPSBob3N0UmVmLiRjbXBNZXRhJDtcbiAgICAgIGNvbnN0IG9sZFNjb3BlSWQgPSBlbG1bXCJzLXNjXCJdO1xuICAgICAgY29uc3Qgc2NvcGVJZDIgPSBnZXRTY29wZUlkKGNtcE1ldGEsIG1vZGUpO1xuICAgICAgY29uc3Qgc3R5bGUgPSBlbG0uY29uc3RydWN0b3Iuc3R5bGVbbW9kZV07XG4gICAgICBjb25zdCBmbGFncyA9IGNtcE1ldGEuJGZsYWdzJDtcbiAgICAgIGlmIChzdHlsZSkge1xuICAgICAgICBpZiAoIXN0eWxlcy5oYXMoc2NvcGVJZDIpKSB7XG4gICAgICAgICAgcmVnaXN0ZXJTdHlsZShzY29wZUlkMiwgc3R5bGUsICEhKGZsYWdzICYgMSAvKiBzaGFkb3dEb21FbmNhcHN1bGF0aW9uICovKSk7XG4gICAgICAgIH1cbiAgICAgICAgaG9zdFJlZi4kbW9kZU5hbWUkID0gbW9kZTtcbiAgICAgICAgZWxtLmNsYXNzTGlzdC5yZW1vdmUob2xkU2NvcGVJZCArIFwiLWhcIiwgb2xkU2NvcGVJZCArIFwiLXNcIik7XG4gICAgICAgIGF0dGFjaFN0eWxlcyhob3N0UmVmKTtcbiAgICAgICAgZm9yY2VVcGRhdGUoZWxtKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8vIHNyYy9ydW50aW1lL2Jvb3RzdHJhcC1sYXp5LnRzXG5pbXBvcnQgeyBCVUlMRCBhcyBCVUlMRDI4IH0gZnJvbSBcIkBzdGVuY2lsL2NvcmUvaW50ZXJuYWwvYXBwLWRhdGFcIjtcblxuLy8gc3JjL3J1bnRpbWUvaG1yLWNvbXBvbmVudC50c1xudmFyIGhtclN0YXJ0ID0gKGhvc3RFbGVtZW50LCBjbXBNZXRhLCBobXJWZXJzaW9uSWQpID0+IHtcbiAgY29uc3QgaG9zdFJlZiA9IGdldEhvc3RSZWYoaG9zdEVsZW1lbnQpO1xuICBpZiAoIWhvc3RSZWYpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaG9zdFJlZi4kZmxhZ3MkID0gMSAvKiBoYXNDb25uZWN0ZWQgKi87XG4gIGluaXRpYWxpemVDb21wb25lbnQoaG9zdEVsZW1lbnQsIGhvc3RSZWYsIGNtcE1ldGEsIGhtclZlcnNpb25JZCk7XG59O1xuXG4vLyBzcmMvcnVudGltZS9ib290c3RyYXAtbGF6eS50c1xudmFyIGJvb3RzdHJhcExhenkgPSAobGF6eUJ1bmRsZXMsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICB2YXIgX2E7XG4gIGlmIChCVUlMRDI4LnByb2ZpbGUgJiYgcGVyZm9ybWFuY2UubWFyaykge1xuICAgIHBlcmZvcm1hbmNlLm1hcmsoXCJzdDphcHA6c3RhcnRcIik7XG4gIH1cbiAgaW5zdGFsbERldlRvb2xzKCk7XG4gIGlmICghd2luLmRvY3VtZW50KSB7XG4gICAgY29uc29sZS53YXJuKFwiU3RlbmNpbDogTm8gZG9jdW1lbnQgZm91bmQuIFNraXBwaW5nIGJvb3RzdHJhcHBpbmcgbGF6eSBjb21wb25lbnRzLlwiKTtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgZW5kQm9vdHN0cmFwID0gY3JlYXRlVGltZShcImJvb3RzdHJhcExhenlcIik7XG4gIGNvbnN0IGNtcFRhZ3MgPSBbXTtcbiAgY29uc3QgZXhjbHVkZSA9IG9wdGlvbnMuZXhjbHVkZSB8fCBbXTtcbiAgY29uc3QgY3VzdG9tRWxlbWVudHMyID0gd2luLmN1c3RvbUVsZW1lbnRzO1xuICBjb25zdCBoZWFkID0gd2luLmRvY3VtZW50LmhlYWQ7XG4gIGNvbnN0IG1ldGFDaGFyc2V0ID0gLyogQF9fUFVSRV9fICovaGVhZC5xdWVyeVNlbGVjdG9yKFwibWV0YVtjaGFyc2V0XVwiKTtcbiAgY29uc3QgZGF0YVN0eWxlcyA9IC8qIEBfX1BVUkVfXyAqL3dpbi5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIGNvbnN0IGRlZmVycmVkQ29ubmVjdGVkQ2FsbGJhY2tzID0gW107XG4gIGxldCBhcHBMb2FkRmFsbGJhY2s7XG4gIGxldCBpc0Jvb3RzdHJhcHBpbmcgPSB0cnVlO1xuICBPYmplY3QuYXNzaWduKHBsdCwgb3B0aW9ucyk7XG4gIHBsdC4kcmVzb3VyY2VzVXJsJCA9IG5ldyBVUkwob3B0aW9ucy5yZXNvdXJjZXNVcmwgfHwgXCIuL1wiLCB3aW4uZG9jdW1lbnQuYmFzZVVSSSkuaHJlZjtcbiAgaWYgKEJVSUxEMjguYXN5bmNRdWV1ZSkge1xuICAgIGlmIChvcHRpb25zLnN5bmNRdWV1ZSkge1xuICAgICAgcGx0LiRmbGFncyQgfD0gNCAvKiBxdWV1ZVN5bmMgKi87XG4gICAgfVxuICB9XG4gIGlmIChCVUlMRDI4Lmh5ZHJhdGVDbGllbnRTaWRlKSB7XG4gICAgcGx0LiRmbGFncyQgfD0gMiAvKiBhcHBMb2FkZWQgKi87XG4gIH1cbiAgaWYgKEJVSUxEMjguaHlkcmF0ZUNsaWVudFNpZGUgJiYgQlVJTEQyOC5zaGFkb3dEb20pIHtcbiAgICBoeWRyYXRlU2NvcGVkVG9TaGFkb3coKTtcbiAgfVxuICBsZXQgaGFzU2xvdFJlbG9jYXRpb24gPSBmYWxzZTtcbiAgbGF6eUJ1bmRsZXMubWFwKGxhenlCdW5kbGUgPT4ge1xuICAgIGxhenlCdW5kbGVbMV0ubWFwKGNvbXBhY3RNZXRhID0+IHtcbiAgICAgIHZhciBfYTI7XG4gICAgICBjb25zdCBjbXBNZXRhID0ge1xuICAgICAgICAkZmxhZ3MkOiBjb21wYWN0TWV0YVswXSxcbiAgICAgICAgJHRhZ05hbWUkOiBjb21wYWN0TWV0YVsxXSxcbiAgICAgICAgJG1lbWJlcnMkOiBjb21wYWN0TWV0YVsyXSxcbiAgICAgICAgJGxpc3RlbmVycyQ6IGNvbXBhY3RNZXRhWzNdXG4gICAgICB9O1xuICAgICAgaWYgKGNtcE1ldGEuJGZsYWdzJCAmIDQgLyogaGFzU2xvdFJlbG9jYXRpb24gKi8pIHtcbiAgICAgICAgaGFzU2xvdFJlbG9jYXRpb24gPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKEJVSUxEMjgubWVtYmVyKSB7XG4gICAgICAgIGNtcE1ldGEuJG1lbWJlcnMkID0gY29tcGFjdE1ldGFbMl07XG4gICAgICB9XG4gICAgICBpZiAoQlVJTEQyOC5ob3N0TGlzdGVuZXIpIHtcbiAgICAgICAgY21wTWV0YS4kbGlzdGVuZXJzJCA9IGNvbXBhY3RNZXRhWzNdO1xuICAgICAgfVxuICAgICAgaWYgKEJVSUxEMjgucmVmbGVjdCkge1xuICAgICAgICBjbXBNZXRhLiRhdHRyc1RvUmVmbGVjdCQgPSBbXTtcbiAgICAgIH1cbiAgICAgIGlmIChCVUlMRDI4LndhdGNoQ2FsbGJhY2spIHtcbiAgICAgICAgY21wTWV0YS4kd2F0Y2hlcnMkID0gKF9hMiA9IGNvbXBhY3RNZXRhWzRdKSAhPSBudWxsID8gX2EyIDoge307XG4gICAgICB9XG4gICAgICBpZiAoQlVJTEQyOC5zaGFkb3dEb20gJiYgIXN1cHBvcnRzU2hhZG93ICYmIGNtcE1ldGEuJGZsYWdzJCAmIDEgLyogc2hhZG93RG9tRW5jYXBzdWxhdGlvbiAqLykge1xuICAgICAgICBjbXBNZXRhLiRmbGFncyQgfD0gOCAvKiBuZWVkc1NoYWRvd0RvbVNoaW0gKi87XG4gICAgICB9XG4gICAgICBjb25zdCB0YWdOYW1lID0gQlVJTEQyOC50cmFuc2Zvcm1UYWdOYW1lICYmIG9wdGlvbnMudHJhbnNmb3JtVGFnTmFtZSA/IG9wdGlvbnMudHJhbnNmb3JtVGFnTmFtZShjbXBNZXRhLiR0YWdOYW1lJCkgOiBjbXBNZXRhLiR0YWdOYW1lJDtcbiAgICAgIGNvbnN0IEhvc3RFbGVtZW50ID0gY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgICAgIC8vIFN0ZW5jaWxMYXp5SG9zdFxuICAgICAgICBjb25zdHJ1Y3RvcihzZWxmKSB7XG4gICAgICAgICAgc3VwZXIoc2VsZik7XG4gICAgICAgICAgdGhpcy5oYXNSZWdpc3RlcmVkRXZlbnRMaXN0ZW5lcnMgPSBmYWxzZTtcbiAgICAgICAgICBzZWxmID0gdGhpcztcbiAgICAgICAgICByZWdpc3Rlckhvc3Qoc2VsZiwgY21wTWV0YSk7XG4gICAgICAgICAgaWYgKEJVSUxEMjguc2hhZG93RG9tICYmIGNtcE1ldGEuJGZsYWdzJCAmIDEgLyogc2hhZG93RG9tRW5jYXBzdWxhdGlvbiAqLykge1xuICAgICAgICAgICAgaWYgKHN1cHBvcnRzU2hhZG93KSB7XG4gICAgICAgICAgICAgIGlmICghc2VsZi5zaGFkb3dSb290KSB7XG4gICAgICAgICAgICAgICAgY3JlYXRlU2hhZG93Um9vdC5jYWxsKHNlbGYsIGNtcE1ldGEpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLnNoYWRvd1Jvb3QubW9kZSAhPT0gXCJvcGVuXCIpIHtcbiAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIHJlLXVzZSBleGlzdGluZyBzaGFkb3cgcm9vdCBmb3IgJHtjbXBNZXRhLiR0YWdOYW1lJH0hIE1vZGUgaXMgc2V0IHRvICR7c2VsZi5zaGFkb3dSb290Lm1vZGV9IGJ1dCBTdGVuY2lsIG9ubHkgc3VwcG9ydHMgb3BlbiBzaGFkb3cgcm9vdHMuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFCVUlMRDI4Lmh5ZHJhdGVTZXJ2ZXJTaWRlICYmICEoXCJzaGFkb3dSb290XCIgaW4gc2VsZikpIHtcbiAgICAgICAgICAgICAgc2VsZi5zaGFkb3dSb290ID0gc2VsZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgICAgY29uc3QgaG9zdFJlZiA9IGdldEhvc3RSZWYodGhpcyk7XG4gICAgICAgICAgaWYgKCFob3N0UmVmKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghdGhpcy5oYXNSZWdpc3RlcmVkRXZlbnRMaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIHRoaXMuaGFzUmVnaXN0ZXJlZEV2ZW50TGlzdGVuZXJzID0gdHJ1ZTtcbiAgICAgICAgICAgIGFkZEhvc3RFdmVudExpc3RlbmVycyh0aGlzLCBob3N0UmVmLCBjbXBNZXRhLiRsaXN0ZW5lcnMkLCBmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChhcHBMb2FkRmFsbGJhY2spIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChhcHBMb2FkRmFsbGJhY2spO1xuICAgICAgICAgICAgYXBwTG9hZEZhbGxiYWNrID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGlzQm9vdHN0cmFwcGluZykge1xuICAgICAgICAgICAgZGVmZXJyZWRDb25uZWN0ZWRDYWxsYmFja3MucHVzaCh0aGlzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGx0LmptcCgoKSA9PiBjb25uZWN0ZWRDYWxsYmFjayh0aGlzKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICAgIHBsdC5qbXAoKCkgPT4gZGlzY29ubmVjdGVkQ2FsbGJhY2sodGhpcykpO1xuICAgICAgICAgIHBsdC5yYWYoKCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hMztcbiAgICAgICAgICAgIGNvbnN0IGhvc3RSZWYgPSBnZXRIb3N0UmVmKHRoaXMpO1xuICAgICAgICAgICAgaWYgKCFob3N0UmVmKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGkyID0gZGVmZXJyZWRDb25uZWN0ZWRDYWxsYmFja3MuZmluZEluZGV4KGhvc3QgPT4gaG9zdCA9PT0gdGhpcyk7XG4gICAgICAgICAgICBpZiAoaTIgPiAtMSkge1xuICAgICAgICAgICAgICBkZWZlcnJlZENvbm5lY3RlZENhbGxiYWNrcy5zcGxpY2UoaTIsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCgoX2EzID0gaG9zdFJlZiA9PSBudWxsID8gdm9pZCAwIDogaG9zdFJlZi4kdm5vZGUkKSA9PSBudWxsID8gdm9pZCAwIDogX2EzLiRlbG0kKSBpbnN0YW5jZW9mIE5vZGUgJiYgIWhvc3RSZWYuJHZub2RlJC4kZWxtJC5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgICBkZWxldGUgaG9zdFJlZi4kdm5vZGUkLiRlbG0kO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbXBvbmVudE9uUmVhZHkoKSB7XG4gICAgICAgICAgdmFyIF9hMztcbiAgICAgICAgICByZXR1cm4gKF9hMyA9IGdldEhvc3RSZWYodGhpcykpID09IG51bGwgPyB2b2lkIDAgOiBfYTMuJG9uUmVhZHlQcm9taXNlJDtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGlmICghKGNtcE1ldGEuJGZsYWdzJCAmIDEgLyogc2hhZG93RG9tRW5jYXBzdWxhdGlvbiAqLykgJiYgY21wTWV0YS4kZmxhZ3MkICYgMjU2IC8qIGhhc1JlbmRlckZuICovKSB7XG4gICAgICAgIGlmIChCVUlMRDI4LmV4cGVyaW1lbnRhbFNsb3RGaXhlcykge1xuICAgICAgICAgIHBhdGNoUHNldWRvU2hhZG93RG9tKEhvc3RFbGVtZW50LnByb3RvdHlwZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKEJVSUxEMjguc2xvdENoaWxkTm9kZXNGaXgpIHtcbiAgICAgICAgICAgIHBhdGNoQ2hpbGRTbG90Tm9kZXMoSG9zdEVsZW1lbnQucHJvdG90eXBlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKEJVSUxEMjguY2xvbmVOb2RlRml4KSB7XG4gICAgICAgICAgICBwYXRjaENsb25lTm9kZShIb3N0RWxlbWVudC5wcm90b3R5cGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoQlVJTEQyOC5hcHBlbmRDaGlsZFNsb3RGaXgpIHtcbiAgICAgICAgICAgIHBhdGNoU2xvdEFwcGVuZENoaWxkKEhvc3RFbGVtZW50LnByb3RvdHlwZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChCVUlMRDI4LnNjb3BlZFNsb3RUZXh0Q29udGVudEZpeCAmJiBjbXBNZXRhLiRmbGFncyQgJiAyIC8qIHNjb3BlZENzc0VuY2Fwc3VsYXRpb24gKi8pIHtcbiAgICAgICAgICAgIHBhdGNoVGV4dENvbnRlbnQoSG9zdEVsZW1lbnQucHJvdG90eXBlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChCVUlMRDI4LmZvcm1Bc3NvY2lhdGVkICYmIGNtcE1ldGEuJGZsYWdzJCAmIDY0IC8qIGZvcm1Bc3NvY2lhdGVkICovKSB7XG4gICAgICAgIEhvc3RFbGVtZW50LmZvcm1Bc3NvY2lhdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChCVUlMRDI4LmhvdE1vZHVsZVJlcGxhY2VtZW50KSB7XG4gICAgICAgIEhvc3RFbGVtZW50LnByb3RvdHlwZVtcInMtaG1yXCJdID0gZnVuY3Rpb24gKGhtclZlcnNpb25JZCkge1xuICAgICAgICAgIGhtclN0YXJ0KHRoaXMsIGNtcE1ldGEsIGhtclZlcnNpb25JZCk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBjbXBNZXRhLiRsYXp5QnVuZGxlSWQkID0gbGF6eUJ1bmRsZVswXTtcbiAgICAgIGlmICghZXhjbHVkZS5pbmNsdWRlcyh0YWdOYW1lKSAmJiAhY3VzdG9tRWxlbWVudHMyLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjbXBUYWdzLnB1c2godGFnTmFtZSk7XG4gICAgICAgIGN1c3RvbUVsZW1lbnRzMi5kZWZpbmUodGFnTmFtZSwgcHJveHlDb21wb25lbnQoSG9zdEVsZW1lbnQsIGNtcE1ldGEsIDEgLyogaXNFbGVtZW50Q29uc3RydWN0b3IgKi8pKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIGlmIChjbXBUYWdzLmxlbmd0aCA+IDApIHtcbiAgICBpZiAoaGFzU2xvdFJlbG9jYXRpb24pIHtcbiAgICAgIGRhdGFTdHlsZXMudGV4dENvbnRlbnQgKz0gU0xPVF9GQl9DU1M7XG4gICAgfVxuICAgIGlmIChCVUlMRDI4LmludmlzaWJsZVByZWh5ZHJhdGlvbiAmJiAoQlVJTEQyOC5oeWRyYXRlZENsYXNzIHx8IEJVSUxEMjguaHlkcmF0ZWRBdHRyaWJ1dGUpKSB7XG4gICAgICBkYXRhU3R5bGVzLnRleHRDb250ZW50ICs9IGNtcFRhZ3Muc29ydCgpICsgSFlEUkFURURfQ1NTO1xuICAgIH1cbiAgICBpZiAoZGF0YVN0eWxlcy5pbm5lckhUTUwubGVuZ3RoKSB7XG4gICAgICBkYXRhU3R5bGVzLnNldEF0dHJpYnV0ZShcImRhdGEtc3R5bGVzXCIsIFwiXCIpO1xuICAgICAgY29uc3Qgbm9uY2UgPSAoX2EgPSBwbHQuJG5vbmNlJCkgIT0gbnVsbCA/IF9hIDogcXVlcnlOb25jZU1ldGFUYWdDb250ZW50KHdpbi5kb2N1bWVudCk7XG4gICAgICBpZiAobm9uY2UgIT0gbnVsbCkge1xuICAgICAgICBkYXRhU3R5bGVzLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgICAgIH1cbiAgICAgIGhlYWQuaW5zZXJ0QmVmb3JlKGRhdGFTdHlsZXMsIG1ldGFDaGFyc2V0ID8gbWV0YUNoYXJzZXQubmV4dFNpYmxpbmcgOiBoZWFkLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfVxuICBpc0Jvb3RzdHJhcHBpbmcgPSBmYWxzZTtcbiAgaWYgKGRlZmVycmVkQ29ubmVjdGVkQ2FsbGJhY2tzLmxlbmd0aCkge1xuICAgIGRlZmVycmVkQ29ubmVjdGVkQ2FsbGJhY2tzLm1hcChob3N0ID0+IGhvc3QuY29ubmVjdGVkQ2FsbGJhY2soKSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKEJVSUxEMjgucHJvZmlsZSkge1xuICAgICAgcGx0LmptcCgoKSA9PiBhcHBMb2FkRmFsbGJhY2sgPSBzZXRUaW1lb3V0KGFwcERpZExvYWQsIDMwLCBcInRpbWVvdXRcIikpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwbHQuam1wKCgpID0+IGFwcExvYWRGYWxsYmFjayA9IHNldFRpbWVvdXQoYXBwRGlkTG9hZCwgMzApKTtcbiAgICB9XG4gIH1cbiAgZW5kQm9vdHN0cmFwKCk7XG59O1xuXG4vLyBzcmMvcnVudGltZS9mcmFnbWVudC50c1xudmFyIEZyYWdtZW50ID0gKF8sIGNoaWxkcmVuKSA9PiBjaGlsZHJlbjtcblxuLy8gc3JjL3J1bnRpbWUvaG9zdC1saXN0ZW5lci50c1xuaW1wb3J0IHsgQlVJTEQgYXMgQlVJTEQyOSB9IGZyb20gXCJAc3RlbmNpbC9jb3JlL2ludGVybmFsL2FwcC1kYXRhXCI7XG52YXIgYWRkSG9zdEV2ZW50TGlzdGVuZXJzID0gKGVsbSwgaG9zdFJlZiwgbGlzdGVuZXJzLCBhdHRhY2hQYXJlbnRMaXN0ZW5lcnMpID0+IHtcbiAgaWYgKEJVSUxEMjkuaG9zdExpc3RlbmVyICYmIGxpc3RlbmVycyAmJiB3aW4uZG9jdW1lbnQpIHtcbiAgICBpZiAoQlVJTEQyOS5ob3N0TGlzdGVuZXJUYXJnZXRQYXJlbnQpIHtcbiAgICAgIGlmIChhdHRhY2hQYXJlbnRMaXN0ZW5lcnMpIHtcbiAgICAgICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLmZpbHRlcigoW2ZsYWdzXSkgPT4gZmxhZ3MgJiAzMiAvKiBUYXJnZXRQYXJlbnQgKi8pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLmZpbHRlcigoW2ZsYWdzXSkgPT4gIShmbGFncyAmIDMyIC8qIFRhcmdldFBhcmVudCAqLykpO1xuICAgICAgfVxuICAgIH1cbiAgICBsaXN0ZW5lcnMubWFwKChbZmxhZ3MsIG5hbWUsIG1ldGhvZF0pID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IEJVSUxEMjkuaG9zdExpc3RlbmVyVGFyZ2V0ID8gZ2V0SG9zdExpc3RlbmVyVGFyZ2V0KHdpbi5kb2N1bWVudCwgZWxtLCBmbGFncykgOiBlbG07XG4gICAgICBjb25zdCBoYW5kbGVyID0gaG9zdExpc3RlbmVyUHJveHkoaG9zdFJlZiwgbWV0aG9kKTtcbiAgICAgIGNvbnN0IG9wdHMgPSBob3N0TGlzdGVuZXJPcHRzKGZsYWdzKTtcbiAgICAgIHBsdC5hZWwodGFyZ2V0LCBuYW1lLCBoYW5kbGVyLCBvcHRzKTtcbiAgICAgIChob3N0UmVmLiRybUxpc3RlbmVycyQgPSBob3N0UmVmLiRybUxpc3RlbmVycyQgfHwgW10pLnB1c2goKCkgPT4gcGx0LnJlbCh0YXJnZXQsIG5hbWUsIGhhbmRsZXIsIG9wdHMpKTtcbiAgICB9KTtcbiAgfVxufTtcbnZhciBob3N0TGlzdGVuZXJQcm94eSA9IChob3N0UmVmLCBtZXRob2ROYW1lKSA9PiBldiA9PiB7XG4gIHZhciBfYTtcbiAgdHJ5IHtcbiAgICBpZiAoQlVJTEQyOS5sYXp5TG9hZCkge1xuICAgICAgaWYgKGhvc3RSZWYuJGZsYWdzJCAmIDI1NiAvKiBpc0xpc3RlblJlYWR5ICovKSB7XG4gICAgICAgIChfYSA9IGhvc3RSZWYuJGxhenlJbnN0YW5jZSQpID09IG51bGwgPyB2b2lkIDAgOiBfYVttZXRob2ROYW1lXShldik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAoaG9zdFJlZi4kcXVldWVkTGlzdGVuZXJzJCA9IGhvc3RSZWYuJHF1ZXVlZExpc3RlbmVycyQgfHwgW10pLnB1c2goW21ldGhvZE5hbWUsIGV2XSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGhvc3RSZWYuJGhvc3RFbGVtZW50JFttZXRob2ROYW1lXShldik7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZUVycm9yKGUsIGhvc3RSZWYuJGhvc3RFbGVtZW50JCk7XG4gIH1cbn07XG52YXIgZ2V0SG9zdExpc3RlbmVyVGFyZ2V0ID0gKGRvYywgZWxtLCBmbGFncykgPT4ge1xuICBpZiAoQlVJTEQyOS5ob3N0TGlzdGVuZXJUYXJnZXREb2N1bWVudCAmJiBmbGFncyAmIDQgLyogVGFyZ2V0RG9jdW1lbnQgKi8pIHtcbiAgICByZXR1cm4gZG9jO1xuICB9XG4gIGlmIChCVUlMRDI5Lmhvc3RMaXN0ZW5lclRhcmdldFdpbmRvdyAmJiBmbGFncyAmIDggLyogVGFyZ2V0V2luZG93ICovKSB7XG4gICAgcmV0dXJuIHdpbjtcbiAgfVxuICBpZiAoQlVJTEQyOS5ob3N0TGlzdGVuZXJUYXJnZXRCb2R5ICYmIGZsYWdzICYgMTYgLyogVGFyZ2V0Qm9keSAqLykge1xuICAgIHJldHVybiBkb2MuYm9keTtcbiAgfVxuICBpZiAoQlVJTEQyOS5ob3N0TGlzdGVuZXJUYXJnZXRQYXJlbnQgJiYgZmxhZ3MgJiAzMiAvKiBUYXJnZXRQYXJlbnQgKi8gJiYgZWxtLnBhcmVudEVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxtLnBhcmVudEVsZW1lbnQ7XG4gIH1cbiAgcmV0dXJuIGVsbTtcbn07XG52YXIgaG9zdExpc3RlbmVyT3B0cyA9IGZsYWdzID0+IHN1cHBvcnRzTGlzdGVuZXJPcHRpb25zID8ge1xuICBwYXNzaXZlOiAoZmxhZ3MgJiAxIC8qIFBhc3NpdmUgKi8pICE9PSAwLFxuICBjYXB0dXJlOiAoZmxhZ3MgJiAyIC8qIENhcHR1cmUgKi8pICE9PSAwXG59IDogKGZsYWdzICYgMiAvKiBDYXB0dXJlICovKSAhPT0gMDtcblxuLy8gc3JjL3J1bnRpbWUvbm9uY2UudHNcbnZhciBzZXROb25jZSA9IG5vbmNlID0+IHBsdC4kbm9uY2UkID0gbm9uY2U7XG5cbi8vIHNyYy9ydW50aW1lL3BsYXRmb3JtLW9wdGlvbnMudHNcbnZhciBzZXRQbGF0Zm9ybU9wdGlvbnMgPSBvcHRzID0+IE9iamVjdC5hc3NpZ24ocGx0LCBvcHRzKTtcblxuLy8gc3JjL3J1bnRpbWUvcmVuZGVyLnRzXG5mdW5jdGlvbiByZW5kZXIodm5vZGUsIGNvbnRhaW5lcikge1xuICBjb25zdCBjbXBNZXRhID0ge1xuICAgICRmbGFncyQ6IDAsXG4gICAgJHRhZ05hbWUkOiBjb250YWluZXIudGFnTmFtZVxuICB9O1xuICBjb25zdCByZWYgPSB7XG4gICAgJGZsYWdzJDogMCxcbiAgICAkY21wTWV0YSQ6IGNtcE1ldGEsXG4gICAgJGhvc3RFbGVtZW50JDogY29udGFpbmVyXG4gIH07XG4gIHJlbmRlclZkb20ocmVmLCB2bm9kZSk7XG59XG5cbi8vIHNyYy9ydW50aW1lL3Zkb20vdmRvbS1hbm5vdGF0aW9ucy50c1xudmFyIGluc2VydFZkb21Bbm5vdGF0aW9ucyA9IChkb2MsIHN0YXRpY0NvbXBvbmVudHMpID0+IHtcbiAgaWYgKGRvYyAhPSBudWxsKSB7XG4gICAgY29uc3QgZG9jRGF0YSA9IFNURU5DSUxfRE9DX0RBVEEgaW4gZG9jID8gZG9jW1NURU5DSUxfRE9DX0RBVEFdIDoge1xuICAgICAgLi4uREVGQVVMVF9ET0NfREFUQVxuICAgIH07XG4gICAgZG9jRGF0YS5zdGF0aWNDb21wb25lbnRzID0gbmV3IFNldChzdGF0aWNDb21wb25lbnRzKTtcbiAgICBjb25zdCBvcmdMb2NhdGlvbk5vZGVzID0gW107XG4gICAgcGFyc2VWTm9kZUFubm90YXRpb25zKGRvYywgZG9jLmJvZHksIGRvY0RhdGEsIG9yZ0xvY2F0aW9uTm9kZXMpO1xuICAgIG9yZ0xvY2F0aW9uTm9kZXMuZm9yRWFjaChvcmdMb2NhdGlvbk5vZGUgPT4ge1xuICAgICAgdmFyIF9hO1xuICAgICAgaWYgKG9yZ0xvY2F0aW9uTm9kZSAhPSBudWxsICYmIG9yZ0xvY2F0aW9uTm9kZVtcInMtbnJcIl0pIHtcbiAgICAgICAgY29uc3Qgbm9kZVJlZiA9IG9yZ0xvY2F0aW9uTm9kZVtcInMtbnJcIl07XG4gICAgICAgIGxldCBob3N0SWQgPSBub2RlUmVmW1wicy1ob3N0LWlkXCJdO1xuICAgICAgICBsZXQgbm9kZUlkID0gbm9kZVJlZltcInMtbm9kZS1pZFwiXTtcbiAgICAgICAgbGV0IGNoaWxkSWQgPSBgJHtob3N0SWR9LiR7bm9kZUlkfWA7XG4gICAgICAgIGlmIChob3N0SWQgPT0gbnVsbCkge1xuICAgICAgICAgIGhvc3RJZCA9IDA7XG4gICAgICAgICAgZG9jRGF0YS5yb290TGV2ZWxJZHMrKztcbiAgICAgICAgICBub2RlSWQgPSBkb2NEYXRhLnJvb3RMZXZlbElkcztcbiAgICAgICAgICBjaGlsZElkID0gYCR7aG9zdElkfS4ke25vZGVJZH1gO1xuICAgICAgICAgIGlmIChub2RlUmVmLm5vZGVUeXBlID09PSAxIC8qIEVsZW1lbnROb2RlICovKSB7XG4gICAgICAgICAgICBub2RlUmVmLnNldEF0dHJpYnV0ZShIWURSQVRFX0NISUxEX0lELCBjaGlsZElkKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygbm9kZVJlZltcInMtc25cIl0gPT09IFwic3RyaW5nXCIgJiYgIW5vZGVSZWYuZ2V0QXR0cmlidXRlKFwic2xvdFwiKSkge1xuICAgICAgICAgICAgICBub2RlUmVmLnNldEF0dHJpYnV0ZShcInMtc25cIiwgbm9kZVJlZltcInMtc25cIl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAobm9kZVJlZi5ub2RlVHlwZSA9PT0gMyAvKiBUZXh0Tm9kZSAqLykge1xuICAgICAgICAgICAgaWYgKGhvc3RJZCA9PT0gMCkge1xuICAgICAgICAgICAgICBjb25zdCB0ZXh0Q29udGVudCA9IChfYSA9IG5vZGVSZWYubm9kZVZhbHVlKSA9PSBudWxsID8gdm9pZCAwIDogX2EudHJpbSgpO1xuICAgICAgICAgICAgICBpZiAodGV4dENvbnRlbnQgPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBvcmdMb2NhdGlvbk5vZGUucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjb21tZW50QmVmb3JlVGV4dE5vZGUgPSBkb2MuY3JlYXRlQ29tbWVudChjaGlsZElkKTtcbiAgICAgICAgICAgIGNvbW1lbnRCZWZvcmVUZXh0Tm9kZS5ub2RlVmFsdWUgPSBgJHtURVhUX05PREVfSUR9LiR7Y2hpbGRJZH1gO1xuICAgICAgICAgICAgaW5zZXJ0QmVmb3JlKG5vZGVSZWYucGFyZW50Tm9kZSwgY29tbWVudEJlZm9yZVRleHROb2RlLCBub2RlUmVmKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG5vZGVSZWYubm9kZVR5cGUgPT09IDggLyogQ29tbWVudE5vZGUgKi8pIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbW1lbnRCZWZvcmVUZXh0Tm9kZSA9IGRvYy5jcmVhdGVDb21tZW50KGNoaWxkSWQpO1xuICAgICAgICAgICAgY29tbWVudEJlZm9yZVRleHROb2RlLm5vZGVWYWx1ZSA9IGAke0NPTU1FTlRfTk9ERV9JRH0uJHtjaGlsZElkfWA7XG4gICAgICAgICAgICBub2RlUmVmLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNvbW1lbnRCZWZvcmVUZXh0Tm9kZSwgbm9kZVJlZik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBvcmdMb2NhdGlvbk5vZGVJZCA9IGAke09SR19MT0NBVElPTl9JRH0uJHtjaGlsZElkfWA7XG4gICAgICAgIGNvbnN0IG9yZ0xvY2F0aW9uUGFyZW50Tm9kZSA9IG9yZ0xvY2F0aW9uTm9kZS5wYXJlbnRFbGVtZW50O1xuICAgICAgICBpZiAob3JnTG9jYXRpb25QYXJlbnROb2RlKSB7XG4gICAgICAgICAgaWYgKG9yZ0xvY2F0aW9uUGFyZW50Tm9kZVtcInMtZW5cIl0gPT09IFwiXCIpIHtcbiAgICAgICAgICAgIG9yZ0xvY2F0aW9uTm9kZUlkICs9IGAuYDtcbiAgICAgICAgICB9IGVsc2UgaWYgKG9yZ0xvY2F0aW9uUGFyZW50Tm9kZVtcInMtZW5cIl0gPT09IFwiY1wiKSB7XG4gICAgICAgICAgICBvcmdMb2NhdGlvbk5vZGVJZCArPSBgLmNgO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBvcmdMb2NhdGlvbk5vZGUubm9kZVZhbHVlID0gb3JnTG9jYXRpb25Ob2RlSWQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG52YXIgcGFyc2VWTm9kZUFubm90YXRpb25zID0gKGRvYywgbm9kZSwgZG9jRGF0YSwgb3JnTG9jYXRpb25Ob2RlcykgPT4ge1xuICB2YXIgX2E7XG4gIGlmIChub2RlID09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKG5vZGVbXCJzLW5yXCJdICE9IG51bGwpIHtcbiAgICBvcmdMb2NhdGlvbk5vZGVzLnB1c2gobm9kZSk7XG4gIH1cbiAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEgLyogRWxlbWVudE5vZGUgKi8pIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gWy4uLkFycmF5LmZyb20obm9kZS5jaGlsZE5vZGVzKSwgLi4uQXJyYXkuZnJvbSgoKF9hID0gbm9kZS5zaGFkb3dSb290KSA9PSBudWxsID8gdm9pZCAwIDogX2EuY2hpbGROb2RlcykgfHwgW10pXTtcbiAgICBjaGlsZE5vZGVzLmZvckVhY2goY2hpbGROb2RlID0+IHtcbiAgICAgIGNvbnN0IGhvc3RSZWYgPSBnZXRIb3N0UmVmKGNoaWxkTm9kZSk7XG4gICAgICBpZiAoaG9zdFJlZiAhPSBudWxsICYmICFkb2NEYXRhLnN0YXRpY0NvbXBvbmVudHMuaGFzKGNoaWxkTm9kZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICBjb25zdCBjbXBEYXRhID0ge1xuICAgICAgICAgIG5vZGVJZHM6IDBcbiAgICAgICAgfTtcbiAgICAgICAgaW5zZXJ0Vk5vZGVBbm5vdGF0aW9ucyhkb2MsIGNoaWxkTm9kZSwgaG9zdFJlZi4kdm5vZGUkLCBkb2NEYXRhLCBjbXBEYXRhKTtcbiAgICAgIH1cbiAgICAgIHBhcnNlVk5vZGVBbm5vdGF0aW9ucyhkb2MsIGNoaWxkTm9kZSwgZG9jRGF0YSwgb3JnTG9jYXRpb25Ob2Rlcyk7XG4gICAgfSk7XG4gIH1cbn07XG52YXIgaW5zZXJ0Vk5vZGVBbm5vdGF0aW9ucyA9IChkb2MsIGhvc3RFbG0sIHZub2RlLCBkb2NEYXRhLCBjbXBEYXRhKSA9PiB7XG4gIGlmICh2bm9kZSAhPSBudWxsKSB7XG4gICAgY29uc3QgaG9zdElkID0gKytkb2NEYXRhLmhvc3RJZHM7XG4gICAgaG9zdEVsbS5zZXRBdHRyaWJ1dGUoSFlEUkFURV9JRCwgaG9zdElkKTtcbiAgICBpZiAoaG9zdEVsbVtcInMtY3JcIl0gIT0gbnVsbCkge1xuICAgICAgaG9zdEVsbVtcInMtY3JcIl0ubm9kZVZhbHVlID0gYCR7Q09OVEVOVF9SRUZfSUR9LiR7aG9zdElkfWA7XG4gICAgfVxuICAgIGlmICh2bm9kZS4kY2hpbGRyZW4kICE9IG51bGwpIHtcbiAgICAgIGNvbnN0IGRlcHRoID0gMDtcbiAgICAgIHZub2RlLiRjaGlsZHJlbiQuZm9yRWFjaCgodm5vZGVDaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgICAgaW5zZXJ0Q2hpbGRWTm9kZUFubm90YXRpb25zKGRvYywgdm5vZGVDaGlsZCwgY21wRGF0YSwgaG9zdElkLCBkZXB0aCwgaW5kZXgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChob3N0RWxtICYmIHZub2RlICYmIHZub2RlLiRlbG0kICYmICFob3N0RWxtLmhhc0F0dHJpYnV0ZShIWURSQVRFX0NISUxEX0lEKSkge1xuICAgICAgY29uc3QgcGFyZW50ID0gaG9zdEVsbS5wYXJlbnRFbGVtZW50O1xuICAgICAgaWYgKHBhcmVudCAmJiBwYXJlbnQuY2hpbGROb2Rlcykge1xuICAgICAgICBjb25zdCBwYXJlbnRDaGlsZE5vZGVzID0gQXJyYXkuZnJvbShwYXJlbnQuY2hpbGROb2Rlcyk7XG4gICAgICAgIGNvbnN0IGNvbW1lbnQgPSBwYXJlbnRDaGlsZE5vZGVzLmZpbmQobm9kZSA9PiBub2RlLm5vZGVUeXBlID09PSA4IC8qIENvbW1lbnROb2RlICovICYmIG5vZGVbXCJzLXNyXCJdKTtcbiAgICAgICAgaWYgKGNvbW1lbnQpIHtcbiAgICAgICAgICBjb25zdCBpbmRleCA9IHBhcmVudENoaWxkTm9kZXMuaW5kZXhPZihob3N0RWxtKSAtIDE7XG4gICAgICAgICAgdm5vZGUuJGVsbSQuc2V0QXR0cmlidXRlKEhZRFJBVEVfQ0hJTERfSUQsIGAke2NvbW1lbnRbXCJzLWhvc3QtaWRcIl19LiR7Y29tbWVudFtcInMtbm9kZS1pZFwiXX0uMC4ke2luZGV4fWApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xudmFyIGluc2VydENoaWxkVk5vZGVBbm5vdGF0aW9ucyA9IChkb2MsIHZub2RlQ2hpbGQsIGNtcERhdGEsIGhvc3RJZCwgZGVwdGgsIGluZGV4KSA9PiB7XG4gIGNvbnN0IGNoaWxkRWxtID0gdm5vZGVDaGlsZC4kZWxtJDtcbiAgaWYgKGNoaWxkRWxtID09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3Qgbm9kZUlkID0gY21wRGF0YS5ub2RlSWRzKys7XG4gIGNvbnN0IGNoaWxkSWQgPSBgJHtob3N0SWR9LiR7bm9kZUlkfS4ke2RlcHRofS4ke2luZGV4fWA7XG4gIGNoaWxkRWxtW1wicy1ob3N0LWlkXCJdID0gaG9zdElkO1xuICBjaGlsZEVsbVtcInMtbm9kZS1pZFwiXSA9IG5vZGVJZDtcbiAgaWYgKGNoaWxkRWxtLm5vZGVUeXBlID09PSAxIC8qIEVsZW1lbnROb2RlICovKSB7XG4gICAgY2hpbGRFbG0uc2V0QXR0cmlidXRlKEhZRFJBVEVfQ0hJTERfSUQsIGNoaWxkSWQpO1xuICAgIGlmICh0eXBlb2YgY2hpbGRFbG1bXCJzLXNuXCJdID09PSBcInN0cmluZ1wiICYmICFjaGlsZEVsbS5nZXRBdHRyaWJ1dGUoXCJzbG90XCIpKSB7XG4gICAgICBjaGlsZEVsbS5zZXRBdHRyaWJ1dGUoXCJzLXNuXCIsIGNoaWxkRWxtW1wicy1zblwiXSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGNoaWxkRWxtLm5vZGVUeXBlID09PSAzIC8qIFRleHROb2RlICovKSB7XG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IGNoaWxkRWxtLnBhcmVudE5vZGU7XG4gICAgY29uc3Qgbm9kZU5hbWUgPSBwYXJlbnROb2RlID09IG51bGwgPyB2b2lkIDAgOiBwYXJlbnROb2RlLm5vZGVOYW1lO1xuICAgIGlmIChub2RlTmFtZSAhPT0gXCJTVFlMRVwiICYmIG5vZGVOYW1lICE9PSBcIlNDUklQVFwiKSB7XG4gICAgICBjb25zdCB0ZXh0Tm9kZUlkID0gYCR7VEVYVF9OT0RFX0lEfS4ke2NoaWxkSWR9YDtcbiAgICAgIGNvbnN0IGNvbW1lbnRCZWZvcmVUZXh0Tm9kZSA9IGRvYy5jcmVhdGVDb21tZW50KHRleHROb2RlSWQpO1xuICAgICAgaW5zZXJ0QmVmb3JlKHBhcmVudE5vZGUsIGNvbW1lbnRCZWZvcmVUZXh0Tm9kZSwgY2hpbGRFbG0pO1xuICAgIH1cbiAgfSBlbHNlIGlmIChjaGlsZEVsbS5ub2RlVHlwZSA9PT0gOCAvKiBDb21tZW50Tm9kZSAqLykge1xuICAgIGlmIChjaGlsZEVsbVtcInMtc3JcIl0pIHtcbiAgICAgIGNvbnN0IHNsb3ROYW1lID0gY2hpbGRFbG1bXCJzLXNuXCJdIHx8IFwiXCI7XG4gICAgICBjb25zdCBzbG90Tm9kZUlkID0gYCR7U0xPVF9OT0RFX0lEfS4ke2NoaWxkSWR9LiR7c2xvdE5hbWV9YDtcbiAgICAgIGNoaWxkRWxtLm5vZGVWYWx1ZSA9IHNsb3ROb2RlSWQ7XG4gICAgfVxuICB9XG4gIGlmICh2bm9kZUNoaWxkLiRjaGlsZHJlbiQgIT0gbnVsbCkge1xuICAgIGNvbnN0IGNoaWxkRGVwdGggPSBkZXB0aCArIDE7XG4gICAgdm5vZGVDaGlsZC4kY2hpbGRyZW4kLmZvckVhY2goKHZub2RlLCBpbmRleDIpID0+IHtcbiAgICAgIGluc2VydENoaWxkVk5vZGVBbm5vdGF0aW9ucyhkb2MsIHZub2RlLCBjbXBEYXRhLCBob3N0SWQsIGNoaWxkRGVwdGgsIGluZGV4Mik7XG4gICAgfSk7XG4gIH1cbn07XG5leHBvcnQgeyBCVUlMRDMwIGFzIEJVSUxELCBCdWlsZCwgRW52LCBGcmFnbWVudCwgSCwgSCBhcyBIVE1MRWxlbWVudCwgSFlEUkFURURfU1RZTEVfSUQsIEhvc3QsIE5BTUVTUEFDRTIgYXMgTkFNRVNQQUNFLCBTVEVOQ0lMX0RFVl9NT0RFLCBhZGRIb3N0RXZlbnRMaXN0ZW5lcnMsIGJvb3RzdHJhcExhenksIGNtcE1vZHVsZXMsIGNvbm5lY3RlZENhbGxiYWNrLCBjb25zb2xlRGV2RXJyb3IsIGNvbnNvbGVEZXZJbmZvLCBjb25zb2xlRGV2V2FybiwgY29uc29sZUVycm9yLCBjcmVhdGVFdmVudCwgZGVmaW5lQ3VzdG9tRWxlbWVudCwgZGlzY29ubmVjdGVkQ2FsbGJhY2ssIGZvcmNlTW9kZVVwZGF0ZSwgZm9yY2VVcGRhdGUsIGdldEFzc2V0UGF0aCwgZ2V0RWxlbWVudCwgZ2V0SG9zdFJlZiwgZ2V0TW9kZSwgZ2V0UmVuZGVyaW5nUmVmLCBnZXRWYWx1ZSwgaCwgaW5zZXJ0VmRvbUFubm90YXRpb25zLCBpc01lbWJlckluRWxlbWVudCwgbG9hZE1vZHVsZSwgbW9kZVJlc29sdXRpb25DaGFpbiwgbmVlZHNTY29wZWRTU1IsIG5leHRUaWNrLCBwYXJzZVByb3BlcnR5VmFsdWUsIHBsdCwgcG9zdFVwZGF0ZUNvbXBvbmVudCwgcHJvbWlzZVJlc29sdmUsIHByb3h5Q29tcG9uZW50LCBwcm94eUN1c3RvbUVsZW1lbnQsIHJlYWRUYXNrLCByZWdpc3Rlckhvc3QsIHJlZ2lzdGVySW5zdGFuY2UsIHJlbmRlciwgcmVuZGVyVmRvbSwgc2V0QXNzZXRQYXRoLCBzZXRFcnJvckhhbmRsZXIsIHNldE1vZGUsIHNldE5vbmNlLCBzZXRQbGF0Zm9ybUhlbHBlcnMsIHNldFBsYXRmb3JtT3B0aW9ucywgc2V0U2NvcGVkU1NSLCBzZXRWYWx1ZSwgc3R5bGVzLCBzdXBwb3J0c0NvbnN0cnVjdGFibGVTdHlsZXNoZWV0cywgc3VwcG9ydHNMaXN0ZW5lck9wdGlvbnMsIHN1cHBvcnRzTXV0YWJsZUFkb3B0ZWRTdHlsZVNoZWV0cywgc3VwcG9ydHNTaGFkb3csIHdpbiwgd3JpdGVUYXNrIH07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0EsSUFBSSxRQUFRO0FBQUEsRUFDVixhQUFhO0FBQUEsRUFDYixTQUFTO0FBQUEsRUFDVCxPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixjQUFjO0FBQUEsRUFDZCwwQkFBMEI7QUFBQSxFQUMxQiw0QkFBNEI7QUFBQSxFQUM1Qix3QkFBd0I7QUFBQSxFQUN4QiwwQkFBMEI7QUFBQSxFQUMxQixvQkFBb0I7QUFBQSxFQUNwQixRQUFRO0FBQUEsRUFDUixRQUFRO0FBQUEsRUFDUixNQUFNO0FBQUEsRUFDTixrQkFBa0I7QUFBQSxFQUNsQixNQUFNO0FBQUEsRUFDTixhQUFhO0FBQUEsRUFDYixTQUFTO0FBQUEsRUFDVCxRQUFRO0FBQUEsRUFDUixXQUFXO0FBQUEsRUFDWCxNQUFNO0FBQUEsRUFDTixnQkFBZ0I7QUFBQSxFQUNoQixPQUFPO0FBQUEs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QUMsS0FBSyxNQUFNLFFBQVE7QUFBQTtBQUFBLFFBQXFCO0FBQUEsTUFDekUsT0FBTztBQUNMLG9CQUFZLFVBQVUsT0FBTyxDQUFDLENBQUMsS0FBSyxNQUFNLEVBQUUsUUFBUSxHQUFzQjtBQUFBLE1BQzVFO0FBQUEsSUFDRjtBQUNBLGNBQVUsSUFBSSxDQUFDLENBQUMsT0FBTyxNQUFNLE1BQU0sTUFBTTtBQUN2QyxZQUFNLFNBQVMsTUFBUSxxQkFBcUIsc0JBQXNCLElBQUksVUFBVSxLQUFLLEtBQUssSUFBSTtBQUM5RixZQUFNLFVBQVUsa0JBQWtCLFNBQVMsTUFBTTtBQUNqRCxZQUFNLE9BQU8saUJBQWlCLEtBQUs7QUFDbkMsVUFBSSxJQUFJLFFBQVEsTUFBTSxTQUFTLElBQUk7QUFDbkMsT0FBQyxRQUFRLGdCQUFnQixRQUFRLGlCQUFpQixDQUFDLEdBQUcsS0FBSyxNQUFNLElBQUksSUFBSSxRQUFRLE1BQU0sU0FBUyxJQUFJLENBQUM7QUFBQSxJQUN2RyxDQUFDO0FBQUEsRUFDSDtBQUNGO0FBQ0EsSUFBSSxvQkFBb0IsQ0FBQyxTQUFTLGVBQWUsUUFBTTtBQUNyRCxNQUFJO0FBQ0osTUFBSTtBQUNGLFFBQUksTUFBUSxVQUFVO0FBQ3BCLFVBQUksUUFBUSxVQUFVLEtBQXlCO0FBQzdDLFNBQUMsS0FBSyxRQUFRLG1CQUFtQixPQUFPLFNBQVMsR0FBRyxVQUFVLEVBQUUsRUFBRTtBQUFBLE1BQ3BFLE9BQU87QUFDTCxTQUFDLFFBQVEsb0JBQW9CLFFBQVEscUJBQXFCLENBQUMsR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7QUFBQSxNQUNyRjtBQUFBLElBQ0YsT0FBTztBQUNMLGNBQVEsY0FBYyxVQUFVLEVBQUUsRUFBRTtBQUFBLElBQ3RDO0FBQUEsRUFDRixTQUFTLEdBQUc7QUFDVixpQkFBYSxHQUFHLFFBQVEsYUFBYTtBQUFBLEVBQ3ZDO0FBQ0Y7QUFDQSxJQUFJLHdCQUF3QixDQUFDLEtBQUssS0FBSyxVQUFVO0FBQy9DLE1BQUksTUFBUSw4QkFBOEIsUUFBUSxHQUF3QjtBQUN4RSxXQUFPO0FBQUEsRUFDVDtBQUNBLE1BQUksTUFBUSw0QkFBNEIsUUFBUSxHQUFzQjtBQUNwRSxXQUFPO0FBQUEsRUFDVDtBQUNBLE1BQUksTUFBUSwwQkFBMEIsUUFBUSxJQUFxQjtBQUNqRSxXQUFPLElBQUk7QUFBQSxFQUNiO0FBQ0EsTUFBSSxNQUFRLDRCQUE0QixRQUFRLE1BQXlCLElBQUksZUFBZTtBQUMxRixXQUFPLElBQUk7QUFBQSxFQUNiO0FBQ0EsU0FBTztBQUNUO0FBQ0EsSUFBSSxtQkFBbUIsV0FBUywwQkFBMEI7QUFBQSxFQUN4RCxVQUFVLFFBQVEsT0FBcUI7QUFBQSxFQUN2QyxVQUFVLFFBQVEsT0FBcUI7QUFDekMsS0FBSyxRQUFRLE9BQXFCOyIsIm5hbWVzIjpbXSwieF9nb29nbGVfaWdub3JlTGlzdCI6WzAsMSwyXX0=
