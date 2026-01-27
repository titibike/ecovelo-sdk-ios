import {
  createKeyboardController
} from "./chunk-LB4WDJ3M.js";
import {
  findIonContent,
  getScrollElement,
  printIonContentErrorMsg
} from "./chunk-WRI2MF6U.js";
import "./chunk-QTAT7GCA.js";
import {
  isRTL
} from "./chunk-4LZLDCVM.js";
import {
  createLockController
} from "./chunk-MEM7IN4A.js";
import "./chunk-VZXYYFOL.js";
import {
  getTimeGivenProgression
} from "./chunk-H7W7X3R4.js";
import {
  attachComponent,
  detachComponent
} from "./chunk-3MKGIXIK.js";
import {
  createColorClasses,
  hostContext
} from "./chunk-5VP4V3BN.js";
import {
  getIonMode,
  isPlatform
} from "./chunk-TXLH22R2.js";
import {
  shouldUseCloseWatcher
} from "./chunk-MUBGKTGO.js";
import {
  transition
} from "./chunk-LYXK2PRG.js";
import {
  clamp,
  componentOnReady,
  hasLazyBuild,
  inheritAriaAttributes,
  shallowEqualStringMap
} from "./chunk-RZR7LWTQ.js";
import "./chunk-YSZWGYJT.js";
import {
  Host,
  config,
  createEvent,
  forceUpdate,
  getElement,
  h,
  printIonError,
  printIonWarning,
  readTask,
  registerInstance,
  writeTask
} from "./chunk-BFPTXCSH.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// node_modules/@ionic/core/dist/esm/ion-app_8.entry.js
var appCss = "html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}html.plt-mobile ion-app [contenteditable]{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}";
var App = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentDidLoad() {
    {
      rIC(() => __async(this, null, function* () {
        const isHybrid = isPlatform(window, "hybrid");
        if (!config.getBoolean("_testing")) {
          import("./index-C6WeRr09-LDJJOFGA.js").then((module) => module.startTapClick(config));
        }
        if (config.getBoolean("statusTap", isHybrid)) {
          import("./status-tap-pATNXEtr-SN7T5F7P.js").then((module) => module.startStatusTap());
        }
        if (config.getBoolean("inputShims", needInputShims())) {
          const platform = isPlatform(window, "ios") ? "ios" : "android";
          import("./input-shims-C4KDnhxb-TTGFO754.js").then((module) => module.startInputShims(config, platform));
        }
        const hardwareBackButtonModule = yield import("./hardware-back-button-Dhbd-23H-UV4VOOFX.js");
        const supportsHardwareBackButtonEvents = isHybrid || shouldUseCloseWatcher();
        if (config.getBoolean("hardwareBackButton", supportsHardwareBackButtonEvents)) {
          hardwareBackButtonModule.startHardwareBackButton();
        } else {
          if (shouldUseCloseWatcher()) {
            printIonWarning("[ion-app] - experimentalCloseWatcher was set to `true`, but hardwareBackButton was set to `false`. Both config options must be `true` for the Close Watcher API to be used.");
          }
          hardwareBackButtonModule.blockHardwareBackButton();
        }
        if (typeof window !== "undefined") {
          import("./keyboard-ywgs5efA-2FVK5AZU.js").then((module) => module.startKeyboardAssist(window));
        }
        import("./focus-visible-BmVRXR1y-2C5U76A5.js").then((module) => this.focusVisible = module.startFocusVisible());
      }));
    }
  }
  /**
   * Used to set focus on an element that uses `ion-focusable`.
   * Do not use this if focusing the element as a result of a keyboard
   * event as the focus utility should handle this for us. This method
   * should be used when we want to programmatically focus an element as
   * a result of another user action. (Ex: We focus the first element
   * inside of a popover when the user presents it, but the popover is not always
   * presented as a result of keyboard action.)
   *
   * @param elements An array of HTML elements to set focus on.
   */
  setFocus(elements) {
    return __async(this, null, function* () {
      if (this.focusVisible) {
        this.focusVisible.setFocus(elements);
      }
    });
  }
  render() {
    const mode = getIonMode(this);
    return h(Host, {
      key: "9be440c65819e4fa67c2c3c6477ab40b3ad3eed3",
      class: {
        [mode]: true,
        "ion-page": true,
        "force-statusbar-padding": config.getBoolean("_forceStatusbarPadding")
      }
    });
  }
  get el() {
    return getElement(this);
  }
};
var needInputShims = () => {
  const needsShimsIOS = isPlatform(window, "ios") && isPlatform(window, "mobile");
  if (needsShimsIOS) {
    return true;
  }
  const isAndroidMobileWeb = isPlatform(window, "android") && isPlatform(window, "mobileweb");
  if (isAndroidMobileWeb) {
    return true;
  }
  return false;
};
var rIC = (callback) => {
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(callback);
  } else {
    setTimeout(callback, 32);
  }
};
App.style = appCss;
var buttonsIosCss = ".sc-ion-buttons-ios-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}.sc-ion-buttons-ios-s ion-button{--padding-top:0;--padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.sc-ion-buttons-ios-s ion-button{--padding-top:3px;--padding-bottom:3px;--padding-start:5px;--padding-end:5px;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;min-height:32px}.sc-ion-buttons-ios-s .button-has-icon-only{--padding-top:0;--padding-bottom:0}.sc-ion-buttons-ios-s ion-button:not(.button-round){--border-radius:4px}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button{--color:initial;--border-color:initial;--background-focused:var(--ion-color-contrast)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button-solid,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button-solid{--background:var(--ion-color-contrast);--background-focused:#000;--background-focused-opacity:.12;--background-activated:#000;--background-activated-opacity:.12;--background-hover:var(--ion-color-base);--background-hover-opacity:0.45;--color:var(--ion-color-base);--color-focused:var(--ion-color-base)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button-clear,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button-clear{--color-activated:var(--ion-color-contrast);--color-focused:var(--ion-color-contrast)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button-outline,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button-outline{--color-activated:var(--ion-color-base);--color-focused:var(--ion-color-contrast);--background-activated:var(--ion-color-contrast)}.sc-ion-buttons-ios-s .button-clear,.sc-ion-buttons-ios-s .button-outline{--background-activated:transparent;--background-focused:currentColor;--background-hover:transparent}.sc-ion-buttons-ios-s .button-solid:not(.ion-color){--background-focused:#000;--background-focused-opacity:.12;--background-activated:#000;--background-activated-opacity:.12}.sc-ion-buttons-ios-s ion-icon[slot=start]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-margin-end:0.3em;margin-inline-end:0.3em;font-size:1.41em;line-height:0.67}.sc-ion-buttons-ios-s ion-icon[slot=end]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-margin-start:0.4em;margin-inline-start:0.4em;font-size:1.41em;line-height:0.67}.sc-ion-buttons-ios-s ion-icon[slot=icon-only]{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;font-size:1.65em;line-height:0.67}";
var buttonsMdCss = ".sc-ion-buttons-md-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}.sc-ion-buttons-md-s ion-button{--padding-top:0;--padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.sc-ion-buttons-md-s ion-button{--padding-top:3px;--padding-bottom:3px;--padding-start:8px;--padding-end:8px;--box-shadow:none;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;min-height:32px}.sc-ion-buttons-md-s .button-has-icon-only{--padding-top:0;--padding-bottom:0}.sc-ion-buttons-md-s ion-button:not(.button-round){--border-radius:2px}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s .button,.ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s .button{--color:initial;--color-focused:var(--ion-color-contrast);--color-hover:var(--ion-color-contrast);--background-activated:transparent;--background-focused:var(--ion-color-contrast);--background-hover:var(--ion-color-contrast)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s .button-solid,.ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s .button-solid{--background:var(--ion-color-contrast);--background-activated:transparent;--background-focused:var(--ion-color-shade);--background-hover:var(--ion-color-base);--color:var(--ion-color-base);--color-focused:var(--ion-color-base);--color-hover:var(--ion-color-base)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s .button-outline,.ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s .button-outline{--border-color:var(--ion-color-contrast)}.sc-ion-buttons-md-s .button-has-icon-only.button-clear{--padding-top:12px;--padding-end:12px;--padding-bottom:12px;--padding-start:12px;--border-radius:50%;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;width:3rem;height:3rem}.sc-ion-buttons-md-s .button{--background-hover:currentColor}.sc-ion-buttons-md-s .button-solid{--color:var(--ion-toolbar-background, var(--ion-background-color, #fff));--background:var(--ion-toolbar-color, var(--ion-text-color, #424242));--background-activated:transparent;--background-focused:currentColor}.sc-ion-buttons-md-s .button-outline{--color:initial;--background:transparent;--background-activated:transparent;--background-focused:currentColor;--background-hover:currentColor;--border-color:currentColor}.sc-ion-buttons-md-s .button-clear{--color:initial;--background:transparent;--background-activated:transparent;--background-focused:currentColor;--background-hover:currentColor}.sc-ion-buttons-md-s ion-icon[slot=start]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-margin-end:0.3em;margin-inline-end:0.3em;font-size:1.4em}.sc-ion-buttons-md-s ion-icon[slot=end]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-margin-start:0.4em;margin-inline-start:0.4em;font-size:1.4em}.sc-ion-buttons-md-s ion-icon[slot=icon-only]{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;font-size:1.8em}";
var Buttons = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.collapse = false;
  }
  render() {
    const mode = getIonMode(this);
    return h(Host, {
      key: "58c1fc5eb867d0731c63549b1ccb3ec3bbbe6e1b",
      class: {
        [mode]: true,
        ["buttons-collapse"]: this.collapse
      }
    }, h("slot", {
      key: "0c8f95b9840c8fa0c4e50be84c5159620a3eb5c8"
    }));
  }
};
Buttons.style = {
  ios: buttonsIosCss,
  md: buttonsMdCss
};
var contentCss = ':host{--background:var(--ion-background-color, #fff);--color:var(--ion-text-color, #000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;-ms-flex:1;flex:1;width:100%;height:100%;margin:0 !important;padding:0 !important;font-family:var(--ion-font-family, inherit);contain:size style}:host(.ion-color) .inner-scroll{background:var(--ion-color-base);color:var(--ion-color-contrast)}#background-content{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);position:absolute;background:var(--background)}.inner-scroll{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));position:absolute;color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;-ms-touch-action:pan-x pan-y pinch-zoom;touch-action:pan-x pan-y pinch-zoom}.scroll-y,.scroll-x{-webkit-overflow-scrolling:touch;z-index:0;will-change:scroll-position}.scroll-y{overflow-y:var(--overflow);overscroll-behavior-y:contain}.scroll-x{overflow-x:var(--overflow);overscroll-behavior-x:contain}.overscroll::before,.overscroll::after{position:absolute;width:1px;height:1px;content:""}.overscroll::before{bottom:-1px}.overscroll::after{top:-1px}:host(.content-sizing){display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-height:0;contain:none}:host(.content-sizing) .inner-scroll{position:relative;top:0;bottom:0;margin-top:calc(var(--offset-top) * -1);margin-bottom:calc(var(--offset-bottom) * -1)}.transition-effect{display:none;position:absolute;width:100%;height:100vh;opacity:0;pointer-events:none}:host(.content-ltr) .transition-effect{left:-100%;}:host(.content-rtl) .transition-effect{right:-100%;}.transition-cover{position:absolute;right:0;width:100%;height:100%;background:black;opacity:0.1}.transition-shadow{display:block;position:absolute;width:100%;height:100%;-webkit-box-shadow:inset -9px 0 9px 0 rgba(0, 0, 100, 0.03);box-shadow:inset -9px 0 9px 0 rgba(0, 0, 100, 0.03)}:host(.content-ltr) .transition-shadow{right:0;}:host(.content-rtl) .transition-shadow{left:0;-webkit-transform:scaleX(-1);transform:scaleX(-1)}::slotted([slot=fixed]){position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0)}';
var Content = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionScrollStart = createEvent(this, "ionScrollStart", 7);
    this.ionScroll = createEvent(this, "ionScroll", 7);
    this.ionScrollEnd = createEvent(this, "ionScrollEnd", 7);
    this.watchDog = null;
    this.isScrolling = false;
    this.lastScroll = 0;
    this.queued = false;
    this.cTop = -1;
    this.cBottom = -1;
    this.isMainContent = true;
    this.resizeTimeout = null;
    this.inheritedAttributes = {};
    this.tabsElement = null;
    this.detail = {
      scrollTop: 0,
      scrollLeft: 0,
      type: "scroll",
      event: void 0,
      startX: 0,
      startY: 0,
      startTime: 0,
      currentX: 0,
      currentY: 0,
      velocityX: 0,
      velocityY: 0,
      deltaX: 0,
      deltaY: 0,
      currentTime: 0,
      data: void 0,
      isScrolling: true
    };
    this.fullscreen = false;
    this.fixedSlotPlacement = "after";
    this.scrollX = false;
    this.scrollY = true;
    this.scrollEvents = false;
  }
  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }
  connectedCallback() {
    this.isMainContent = this.el.closest("ion-menu, ion-popover, ion-modal") === null;
    if (hasLazyBuild(this.el)) {
      const closestTabs = this.tabsElement = this.el.closest("ion-tabs");
      if (closestTabs !== null) {
        this.tabsLoadCallback = () => this.resize();
        closestTabs.addEventListener("ionTabBarLoaded", this.tabsLoadCallback);
      }
    }
  }
  disconnectedCallback() {
    this.onScrollEnd();
    if (hasLazyBuild(this.el)) {
      const {
        tabsElement,
        tabsLoadCallback
      } = this;
      if (tabsElement !== null && tabsLoadCallback !== void 0) {
        tabsElement.removeEventListener("ionTabBarLoaded", tabsLoadCallback);
      }
      this.tabsElement = null;
      this.tabsLoadCallback = void 0;
    }
  }
  /**
   * Rotating certain devices can update
   * the safe area insets. As a result,
   * the fullscreen feature on ion-content
   * needs to be recalculated.
   *
   * We listen for "resize" because we
   * do not care what the orientation of
   * the device is. Other APIs
   * such as ScreenOrientation or
   * the deviceorientation event must have
   * permission from the user first whereas
   * the "resize" event does not.
   *
   * We also throttle the callback to minimize
   * thrashing when quickly resizing a window.
   */
  onResize() {
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = null;
    }
    this.resizeTimeout = setTimeout(() => {
      if (this.el.offsetParent === null) {
        return;
      }
      this.resize();
    }, 100);
  }
  shouldForceOverscroll() {
    const {
      forceOverscroll
    } = this;
    const mode = getIonMode(this);
    return forceOverscroll === void 0 ? mode === "ios" && isPlatform("ios") : forceOverscroll;
  }
  resize() {
    {
      if (this.fullscreen) {
        readTask(() => this.readDimensions());
      } else if (this.cTop !== 0 || this.cBottom !== 0) {
        this.cTop = this.cBottom = 0;
        forceUpdate(this);
      }
    }
  }
  readDimensions() {
    const page = getPageElement(this.el);
    const top = Math.max(this.el.offsetTop, 0);
    const bottom = Math.max(page.offsetHeight - top - this.el.offsetHeight, 0);
    const dirty = top !== this.cTop || bottom !== this.cBottom;
    if (dirty) {
      this.cTop = top;
      this.cBottom = bottom;
      forceUpdate(this);
    }
  }
  onScroll(ev) {
    const timeStamp = Date.now();
    const shouldStart = !this.isScrolling;
    this.lastScroll = timeStamp;
    if (shouldStart) {
      this.onScrollStart();
    }
    if (!this.queued && this.scrollEvents) {
      this.queued = true;
      readTask((ts) => {
        this.queued = false;
        this.detail.event = ev;
        updateScrollDetail(this.detail, this.scrollEl, ts, shouldStart);
        this.ionScroll.emit(this.detail);
      });
    }
  }
  /**
   * Get the element where the actual scrolling takes place.
   * This element can be used to subscribe to `scroll` events or manually modify
   * `scrollTop`. However, it's recommended to use the API provided by `ion-content`:
   *
   * i.e. Using `ionScroll`, `ionScrollStart`, `ionScrollEnd` for scrolling events
   * and `scrollToPoint()` to scroll the content into a certain point.
   */
  getScrollElement() {
    return __async(this, null, function* () {
      if (!this.scrollEl) {
        yield new Promise((resolve) => componentOnReady(this.el, resolve));
      }
      return Promise.resolve(this.scrollEl);
    });
  }
  /**
   * Returns the background content element.
   * @internal
   */
  getBackgroundElement() {
    return __async(this, null, function* () {
      if (!this.backgroundContentEl) {
        yield new Promise((resolve) => componentOnReady(this.el, resolve));
      }
      return Promise.resolve(this.backgroundContentEl);
    });
  }
  /**
   * Scroll to the top of the component.
   *
   * @param duration The amount of time to take scrolling to the top. Defaults to `0`.
   */
  scrollToTop(duration = 0) {
    return this.scrollToPoint(void 0, 0, duration);
  }
  /**
   * Scroll to the bottom of the component.
   *
   * @param duration The amount of time to take scrolling to the bottom. Defaults to `0`.
   */
  scrollToBottom(duration = 0) {
    return __async(this, null, function* () {
      const scrollEl = yield this.getScrollElement();
      const y = scrollEl.scrollHeight - scrollEl.clientHeight;
      return this.scrollToPoint(void 0, y, duration);
    });
  }
  /**
   * Scroll by a specified X/Y distance in the component.
   *
   * @param x The amount to scroll by on the horizontal axis.
   * @param y The amount to scroll by on the vertical axis.
   * @param duration The amount of time to take scrolling by that amount.
   */
  scrollByPoint(x, y, duration) {
    return __async(this, null, function* () {
      const scrollEl = yield this.getScrollElement();
      return this.scrollToPoint(x + scrollEl.scrollLeft, y + scrollEl.scrollTop, duration);
    });
  }
  /**
   * Scroll to a specified X/Y location in the component.
   *
   * @param x The point to scroll to on the horizontal axis.
   * @param y The point to scroll to on the vertical axis.
   * @param duration The amount of time to take scrolling to that point. Defaults to `0`.
   */
  scrollToPoint(x, y, duration = 0) {
    return __async(this, null, function* () {
      const el = yield this.getScrollElement();
      if (duration < 32) {
        if (y != null) {
          el.scrollTop = y;
        }
        if (x != null) {
          el.scrollLeft = x;
        }
        return;
      }
      let resolve;
      let startTime = 0;
      const promise = new Promise((r) => resolve = r);
      const fromY = el.scrollTop;
      const fromX = el.scrollLeft;
      const deltaY = y != null ? y - fromY : 0;
      const deltaX = x != null ? x - fromX : 0;
      const step = (timeStamp) => {
        const linearTime = Math.min(1, (timeStamp - startTime) / duration) - 1;
        const easedT = Math.pow(linearTime, 3) + 1;
        if (deltaY !== 0) {
          el.scrollTop = Math.floor(easedT * deltaY + fromY);
        }
        if (deltaX !== 0) {
          el.scrollLeft = Math.floor(easedT * deltaX + fromX);
        }
        if (easedT < 1) {
          requestAnimationFrame(step);
        } else {
          resolve();
        }
      };
      requestAnimationFrame((ts) => {
        startTime = ts;
        step(ts);
      });
      return promise;
    });
  }
  onScrollStart() {
    this.isScrolling = true;
    this.ionScrollStart.emit({
      isScrolling: true
    });
    if (this.watchDog) {
      clearInterval(this.watchDog);
    }
    this.watchDog = setInterval(() => {
      if (this.lastScroll < Date.now() - 120) {
        this.onScrollEnd();
      }
    }, 100);
  }
  onScrollEnd() {
    if (this.watchDog) clearInterval(this.watchDog);
    this.watchDog = null;
    if (this.isScrolling) {
      this.isScrolling = false;
      this.ionScrollEnd.emit({
        isScrolling: false
      });
    }
  }
  render() {
    const {
      fixedSlotPlacement,
      inheritedAttributes,
      isMainContent,
      scrollX,
      scrollY,
      el
    } = this;
    const rtl = isRTL(el) ? "rtl" : "ltr";
    const mode = getIonMode(this);
    const forceOverscroll = this.shouldForceOverscroll();
    const transitionShadow = mode === "ios";
    this.resize();
    return h(Host, Object.assign({
      key: "f2a24aa66dbf5c76f9d4b06f708eb73cadc239df",
      role: isMainContent ? "main" : void 0,
      class: createColorClasses(this.color, {
        [mode]: true,
        "content-sizing": hostContext("ion-popover", this.el),
        overscroll: forceOverscroll,
        [`content-${rtl}`]: true
      }),
      style: {
        "--offset-top": `${this.cTop}px`,
        "--offset-bottom": `${this.cBottom}px`
      }
    }, inheritedAttributes), h("div", {
      key: "6480ca7648b278abb36477b3838bccbcd4995e2a",
      ref: (el2) => this.backgroundContentEl = el2,
      id: "background-content",
      part: "background"
    }), fixedSlotPlacement === "before" ? h("slot", {
      name: "fixed"
    }) : null, h("div", {
      key: "29a23b663f5f0215bb000820c01e1814c0d55985",
      class: {
        "inner-scroll": true,
        "scroll-x": scrollX,
        "scroll-y": scrollY,
        overscroll: (scrollX || scrollY) && forceOverscroll
      },
      ref: (scrollEl) => this.scrollEl = scrollEl,
      onScroll: this.scrollEvents ? (ev) => this.onScroll(ev) : void 0,
      part: "scroll"
    }, h("slot", {
      key: "0fe1bd05609a4b88ae2ce9addf5d5dc5dc1806f0"
    })), transitionShadow ? h("div", {
      class: "transition-effect"
    }, h("div", {
      class: "transition-cover"
    }), h("div", {
      class: "transition-shadow"
    })) : null, fixedSlotPlacement === "after" ? h("slot", {
      name: "fixed"
    }) : null);
  }
  get el() {
    return getElement(this);
  }
};
var getParentElement = (el) => {
  var _a;
  if (el.parentElement) {
    return el.parentElement;
  }
  if ((_a = el.parentNode) === null || _a === void 0 ? void 0 : _a.host) {
    return el.parentNode.host;
  }
  return null;
};
var getPageElement = (el) => {
  const tabs = el.closest("ion-tabs");
  if (tabs) {
    return tabs;
  }
  const page = el.closest("ion-app, ion-page, .ion-page, page-inner, .popover-content");
  if (page) {
    return page;
  }
  return getParentElement(el);
};
var updateScrollDetail = (detail, el, timestamp, shouldStart) => {
  const prevX = detail.currentX;
  const prevY = detail.currentY;
  const prevT = detail.currentTime;
  const currentX = el.scrollLeft;
  const currentY = el.scrollTop;
  const timeDelta = timestamp - prevT;
  if (shouldStart) {
    detail.startTime = timestamp;
    detail.startX = currentX;
    detail.startY = currentY;
    detail.velocityX = detail.velocityY = 0;
  }
  detail.currentTime = timestamp;
  detail.currentX = detail.scrollLeft = currentX;
  detail.currentY = detail.scrollTop = currentY;
  detail.deltaX = currentX - detail.startX;
  detail.deltaY = currentY - detail.startY;
  if (timeDelta > 0 && timeDelta < 100) {
    const velocityX = (currentX - prevX) / timeDelta;
    const velocityY = (currentY - prevY) / timeDelta;
    detail.velocityX = velocityX * 0.7 + detail.velocityX * 0.3;
    detail.velocityY = velocityY * 0.7 + detail.velocityY * 0.3;
  }
};
Content.style = contentCss;
var handleFooterFade = (scrollEl, baseEl) => {
  readTask(() => {
    const scrollTop = scrollEl.scrollTop;
    const maxScroll = scrollEl.scrollHeight - scrollEl.clientHeight;
    const fadeDuration = 10;
    const fadeStart = maxScroll - fadeDuration;
    const distanceToStart = scrollTop - fadeStart;
    const scale = clamp(0, 1 - distanceToStart / fadeDuration, 1);
    writeTask(() => {
      baseEl.style.setProperty("--opacity-scale", scale.toString());
    });
  });
};
var footerIosCss = "ion-footer{display:block;position:relative;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer.footer-toolbar-padding ion-toolbar:last-of-type{padding-bottom:var(--ion-safe-area-bottom, 0)}.footer-ios ion-toolbar:first-of-type{--border-width:0.55px 0 0}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.footer-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.footer-translucent-ios ion-toolbar{--opacity:.8}}.footer-ios.ion-no-border ion-toolbar:first-of-type{--border-width:0}.footer-collapse-fade ion-toolbar{--opacity-scale:inherit}";
var footerMdCss = "ion-footer{display:block;position:relative;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer.footer-toolbar-padding ion-toolbar:last-of-type{padding-bottom:var(--ion-safe-area-bottom, 0)}.footer-md{-webkit-box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12)}.footer-md.ion-no-border{-webkit-box-shadow:none;box-shadow:none}";
var Footer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.keyboardCtrl = null;
    this.keyboardVisible = false;
    this.translucent = false;
    this.checkCollapsibleFooter = () => {
      const mode = getIonMode(this);
      if (mode !== "ios") {
        return;
      }
      const {
        collapse
      } = this;
      const hasFade = collapse === "fade";
      this.destroyCollapsibleFooter();
      if (hasFade) {
        const pageEl = this.el.closest("ion-app,ion-page,.ion-page,page-inner");
        const contentEl = pageEl ? findIonContent(pageEl) : null;
        if (!contentEl) {
          printIonContentErrorMsg(this.el);
          return;
        }
        this.setupFadeFooter(contentEl);
      }
    };
    this.setupFadeFooter = (contentEl) => __async(this, null, function* () {
      const scrollEl = this.scrollEl = yield getScrollElement(contentEl);
      this.contentScrollCallback = () => {
        handleFooterFade(scrollEl, this.el);
      };
      scrollEl.addEventListener("scroll", this.contentScrollCallback);
      handleFooterFade(scrollEl, this.el);
    });
  }
  componentDidLoad() {
    this.checkCollapsibleFooter();
  }
  componentDidUpdate() {
    this.checkCollapsibleFooter();
  }
  connectedCallback() {
    return __async(this, null, function* () {
      this.keyboardCtrl = yield createKeyboardController((keyboardOpen, waitForResize) => __async(this, null, function* () {
        if (keyboardOpen === false && waitForResize !== void 0) {
          yield waitForResize;
        }
        this.keyboardVisible = keyboardOpen;
      }));
    });
  }
  disconnectedCallback() {
    if (this.keyboardCtrl) {
      this.keyboardCtrl.destroy();
    }
  }
  destroyCollapsibleFooter() {
    if (this.scrollEl && this.contentScrollCallback) {
      this.scrollEl.removeEventListener("scroll", this.contentScrollCallback);
      this.contentScrollCallback = void 0;
    }
  }
  render() {
    const {
      translucent,
      collapse
    } = this;
    const mode = getIonMode(this);
    const tabs = this.el.closest("ion-tabs");
    const tabBar = tabs === null || tabs === void 0 ? void 0 : tabs.querySelector(":scope > ion-tab-bar");
    return h(Host, {
      key: "ddc228f1a1e7fa4f707dccf74db2490ca3241137",
      role: "contentinfo",
      class: {
        [mode]: true,
        // Used internally for styling
        [`footer-${mode}`]: true,
        [`footer-translucent`]: translucent,
        [`footer-translucent-${mode}`]: translucent,
        ["footer-toolbar-padding"]: !this.keyboardVisible && (!tabBar || tabBar.slot !== "bottom"),
        [`footer-collapse-${collapse}`]: collapse !== void 0
      }
    }, mode === "ios" && translucent && h("div", {
      key: "e16ed4963ff94e06de77eb8038201820af73937c",
      class: "footer-background"
    }), h("slot", {
      key: "f186934febf85d37133d9351a96c1a64b0a4b203"
    }));
  }
  get el() {
    return getElement(this);
  }
};
Footer.style = {
  ios: footerIosCss,
  md: footerMdCss
};
var TRANSITION = "all 0.2s ease-in-out";
var cloneElement = (tagName) => {
  const getCachedEl = document.querySelector(`${tagName}.ion-cloned-element`);
  if (getCachedEl !== null) {
    return getCachedEl;
  }
  const clonedEl = document.createElement(tagName);
  clonedEl.classList.add("ion-cloned-element");
  clonedEl.style.setProperty("display", "none");
  document.body.appendChild(clonedEl);
  return clonedEl;
};
var createHeaderIndex = (headerEl) => {
  if (!headerEl) {
    return;
  }
  const toolbars = headerEl.querySelectorAll("ion-toolbar");
  return {
    el: headerEl,
    toolbars: Array.from(toolbars).map((toolbar) => {
      const ionTitleEl = toolbar.querySelector("ion-title");
      return {
        el: toolbar,
        background: toolbar.shadowRoot.querySelector(".toolbar-background"),
        ionTitleEl,
        innerTitleEl: ionTitleEl ? ionTitleEl.shadowRoot.querySelector(".toolbar-title") : null,
        ionButtonsEl: Array.from(toolbar.querySelectorAll("ion-buttons"))
      };
    })
  };
};
var handleContentScroll = (scrollEl, scrollHeaderIndex, contentEl) => {
  readTask(() => {
    const scrollTop = scrollEl.scrollTop;
    const scale = clamp(1, 1 + -scrollTop / 500, 1.1);
    const nativeRefresher = contentEl.querySelector("ion-refresher.refresher-native");
    if (nativeRefresher === null) {
      writeTask(() => {
        scaleLargeTitles(scrollHeaderIndex.toolbars, scale);
      });
    }
  });
};
var setToolbarBackgroundOpacity = (headerEl, opacity) => {
  if (headerEl.collapse === "fade") {
    return;
  }
  if (opacity === void 0) {
    headerEl.style.removeProperty("--opacity-scale");
  } else {
    headerEl.style.setProperty("--opacity-scale", opacity.toString());
  }
};
var handleToolbarBorderIntersection = (ev, mainHeaderIndex, scrollTop) => {
  if (!ev[0].isIntersecting) {
    return;
  }
  const scale = ev[0].intersectionRatio > 0.9 || scrollTop <= 0 ? 0 : (1 - ev[0].intersectionRatio) * 100 / 75;
  setToolbarBackgroundOpacity(mainHeaderIndex.el, scale === 1 ? void 0 : scale);
};
var handleToolbarIntersection = (ev, mainHeaderIndex, scrollHeaderIndex, scrollEl) => {
  writeTask(() => {
    const scrollTop = scrollEl.scrollTop;
    handleToolbarBorderIntersection(ev, mainHeaderIndex, scrollTop);
    const event = ev[0];
    const intersection = event.intersectionRect;
    const intersectionArea = intersection.width * intersection.height;
    const rootArea = event.rootBounds.width * event.rootBounds.height;
    const isPageHidden = intersectionArea === 0 && rootArea === 0;
    const leftDiff = Math.abs(intersection.left - event.boundingClientRect.left);
    const rightDiff = Math.abs(intersection.right - event.boundingClientRect.right);
    const isPageTransitioning = intersectionArea > 0 && (leftDiff >= 5 || rightDiff >= 5);
    if (isPageHidden || isPageTransitioning) {
      return;
    }
    if (event.isIntersecting) {
      setHeaderActive(mainHeaderIndex, false);
      setHeaderActive(scrollHeaderIndex);
    } else {
      const hasValidIntersection = intersection.x === 0 && intersection.y === 0 || intersection.width !== 0 && intersection.height !== 0;
      if (hasValidIntersection && scrollTop > 0) {
        setHeaderActive(mainHeaderIndex);
        setHeaderActive(scrollHeaderIndex, false);
        setToolbarBackgroundOpacity(mainHeaderIndex.el);
      }
    }
  });
};
var setHeaderActive = (headerIndex, active = true) => {
  const headerEl = headerIndex.el;
  const toolbars = headerIndex.toolbars;
  const ionTitles = toolbars.map((toolbar) => toolbar.ionTitleEl);
  if (active) {
    headerEl.classList.remove("header-collapse-condense-inactive");
    ionTitles.forEach((ionTitle) => {
      if (ionTitle) {
        ionTitle.removeAttribute("aria-hidden");
      }
    });
  } else {
    headerEl.classList.add("header-collapse-condense-inactive");
    ionTitles.forEach((ionTitle) => {
      if (ionTitle) {
        ionTitle.setAttribute("aria-hidden", "true");
      }
    });
  }
};
var scaleLargeTitles = (toolbars = [], scale = 1, transition2 = false) => {
  toolbars.forEach((toolbar) => {
    const ionTitle = toolbar.ionTitleEl;
    const titleDiv = toolbar.innerTitleEl;
    if (!ionTitle || ionTitle.size !== "large") {
      return;
    }
    titleDiv.style.transition = transition2 ? TRANSITION : "";
    titleDiv.style.transform = `scale3d(${scale}, ${scale}, 1)`;
  });
};
var handleHeaderFade = (scrollEl, baseEl, condenseHeader) => {
  readTask(() => {
    const scrollTop = scrollEl.scrollTop;
    const baseElHeight = baseEl.clientHeight;
    const fadeStart = condenseHeader ? condenseHeader.clientHeight : 0;
    if (condenseHeader !== null && scrollTop < fadeStart) {
      baseEl.style.setProperty("--opacity-scale", "0");
      scrollEl.style.setProperty("clip-path", `inset(${baseElHeight}px 0px 0px 0px)`);
      return;
    }
    const distanceToStart = scrollTop - fadeStart;
    const fadeDuration = 10;
    const scale = clamp(0, distanceToStart / fadeDuration, 1);
    writeTask(() => {
      scrollEl.style.removeProperty("clip-path");
      baseEl.style.setProperty("--opacity-scale", scale.toString());
    });
  });
};
var headerIosCss = "ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-ios ion-toolbar:last-of-type{--border-width:0 0 0.55px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.header-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.header-translucent-ios ion-toolbar{--opacity:.8}.header-collapse-condense-inactive .header-background{-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px)}}.header-ios.ion-no-border ion-toolbar:last-of-type{--border-width:0}.header-collapse-fade ion-toolbar{--opacity-scale:inherit}.header-collapse-condense{z-index:9}.header-collapse-condense ion-toolbar{position:-webkit-sticky;position:sticky;top:0}.header-collapse-condense ion-toolbar:first-of-type{padding-top:0px;z-index:1}.header-collapse-condense ion-toolbar{--background:var(--ion-background-color, #fff);z-index:0}.header-collapse-condense ion-toolbar:last-of-type{--border-width:0px}.header-collapse-condense ion-toolbar ion-searchbar{padding-top:0px;padding-bottom:13px}.header-collapse-main{--opacity-scale:1}.header-collapse-main ion-toolbar{--opacity-scale:inherit}.header-collapse-main ion-toolbar.in-toolbar ion-title,.header-collapse-main ion-toolbar.in-toolbar ion-buttons{-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out}.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-buttons.buttons-collapse{opacity:0;pointer-events:none}.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-buttons.buttons-collapse{visibility:hidden}ion-header.header-ios:not(.header-collapse-main):has(~ion-content ion-header.header-ios[collapse=condense],~ion-content ion-header.header-ios.header-collapse-condense){opacity:0}";
var headerMdCss = "ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-md{-webkit-box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12)}.header-collapse-condense{display:none}.header-md.ion-no-border{-webkit-box-shadow:none;box-shadow:none}";
var Header = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.inheritedAttributes = {};
    this.translucent = false;
    this.setupFadeHeader = (contentEl, condenseHeader) => __async(this, null, function* () {
      const scrollEl = this.scrollEl = yield getScrollElement(contentEl);
      this.contentScrollCallback = () => {
        handleHeaderFade(this.scrollEl, this.el, condenseHeader);
      };
      scrollEl.addEventListener("scroll", this.contentScrollCallback);
      handleHeaderFade(this.scrollEl, this.el, condenseHeader);
    });
  }
  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }
  componentDidLoad() {
    this.checkCollapsibleHeader();
  }
  componentDidUpdate() {
    this.checkCollapsibleHeader();
  }
  disconnectedCallback() {
    this.destroyCollapsibleHeader();
  }
  checkCollapsibleHeader() {
    return __async(this, null, function* () {
      const mode = getIonMode(this);
      if (mode !== "ios") {
        return;
      }
      const {
        collapse
      } = this;
      const hasCondense = collapse === "condense";
      const hasFade = collapse === "fade";
      this.destroyCollapsibleHeader();
      if (hasCondense) {
        const pageEl = this.el.closest("ion-app,ion-page,.ion-page,page-inner");
        const contentEl = pageEl ? findIonContent(pageEl) : null;
        writeTask(() => {
          const title = cloneElement("ion-title");
          title.size = "large";
          cloneElement("ion-back-button");
        });
        yield this.setupCondenseHeader(contentEl, pageEl);
      } else if (hasFade) {
        const pageEl = this.el.closest("ion-app,ion-page,.ion-page,page-inner");
        const contentEl = pageEl ? findIonContent(pageEl) : null;
        if (!contentEl) {
          printIonContentErrorMsg(this.el);
          return;
        }
        const condenseHeader = contentEl.querySelector('ion-header[collapse="condense"]');
        yield this.setupFadeHeader(contentEl, condenseHeader);
      }
    });
  }
  destroyCollapsibleHeader() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      this.intersectionObserver = void 0;
    }
    if (this.scrollEl && this.contentScrollCallback) {
      this.scrollEl.removeEventListener("scroll", this.contentScrollCallback);
      this.contentScrollCallback = void 0;
    }
    if (this.collapsibleMainHeader) {
      this.collapsibleMainHeader.classList.remove("header-collapse-main");
      this.collapsibleMainHeader = void 0;
    }
  }
  setupCondenseHeader(contentEl, pageEl) {
    return __async(this, null, function* () {
      if (!contentEl || !pageEl) {
        printIonContentErrorMsg(this.el);
        return;
      }
      if (typeof IntersectionObserver === "undefined") {
        return;
      }
      this.scrollEl = yield getScrollElement(contentEl);
      const headers = pageEl.querySelectorAll("ion-header");
      this.collapsibleMainHeader = Array.from(headers).find((header) => header.collapse !== "condense");
      if (!this.collapsibleMainHeader) {
        return;
      }
      const mainHeaderIndex = createHeaderIndex(this.collapsibleMainHeader);
      const scrollHeaderIndex = createHeaderIndex(this.el);
      if (!mainHeaderIndex || !scrollHeaderIndex) {
        return;
      }
      setHeaderActive(mainHeaderIndex, false);
      setToolbarBackgroundOpacity(mainHeaderIndex.el, 0);
      const toolbarIntersection = (ev) => {
        handleToolbarIntersection(ev, mainHeaderIndex, scrollHeaderIndex, this.scrollEl);
      };
      this.intersectionObserver = new IntersectionObserver(toolbarIntersection, {
        root: contentEl,
        threshold: [0.25, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
      });
      this.intersectionObserver.observe(scrollHeaderIndex.toolbars[scrollHeaderIndex.toolbars.length - 1].el);
      this.contentScrollCallback = () => {
        handleContentScroll(this.scrollEl, scrollHeaderIndex, contentEl);
      };
      this.scrollEl.addEventListener("scroll", this.contentScrollCallback);
      writeTask(() => {
        if (this.collapsibleMainHeader !== void 0) {
          this.collapsibleMainHeader.classList.add("header-collapse-main");
        }
      });
    });
  }
  render() {
    const {
      translucent,
      inheritedAttributes
    } = this;
    const mode = getIonMode(this);
    const collapse = this.collapse || "none";
    const roleType = hostContext("ion-menu", this.el) ? "none" : "banner";
    return h(Host, Object.assign({
      key: "b6cc27f0b08afc9fcc889683525da765d80ba672",
      role: roleType,
      class: {
        [mode]: true,
        // Used internally for styling
        [`header-${mode}`]: true,
        [`header-translucent`]: this.translucent,
        [`header-collapse-${collapse}`]: true,
        [`header-translucent-${mode}`]: this.translucent
      }
    }, inheritedAttributes), mode === "ios" && translucent && h("div", {
      key: "395766d4dcee3398bc91960db21f922095292f14",
      class: "header-background"
    }), h("slot", {
      key: "09a67ece27b258ff1248805d43d92a49b2c6859a"
    }));
  }
  get el() {
    return getElement(this);
  }
};
Header.style = {
  ios: headerIosCss,
  md: headerMdCss
};
var routerOutletCss = ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;z-index:0}";
var RouterOutlet = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionNavWillLoad = createEvent(this, "ionNavWillLoad", 7);
    this.ionNavWillChange = createEvent(this, "ionNavWillChange", 3);
    this.ionNavDidChange = createEvent(this, "ionNavDidChange", 3);
    this.lockController = createLockController();
    this.gestureOrAnimationInProgress = false;
    this.mode = getIonMode(this);
    this.animated = true;
  }
  swipeHandlerChanged() {
    if (this.gesture) {
      this.gesture.enable(this.swipeHandler !== void 0);
    }
  }
  connectedCallback() {
    return __async(this, null, function* () {
      const onStart = () => {
        this.gestureOrAnimationInProgress = true;
        if (this.swipeHandler) {
          this.swipeHandler.onStart();
        }
      };
      this.gesture = (yield import("./swipe-back-B2YfOHRM-CGU3J6KL.js")).createSwipeBackGesture(this.el, () => !this.gestureOrAnimationInProgress && !!this.swipeHandler && this.swipeHandler.canStart(), () => onStart(), (step) => {
        var _a;
        return (_a = this.ani) === null || _a === void 0 ? void 0 : _a.progressStep(step);
      }, (shouldComplete, step, dur) => {
        if (this.ani) {
          this.ani.onFinish(() => {
            this.gestureOrAnimationInProgress = false;
            if (this.swipeHandler) {
              this.swipeHandler.onEnd(shouldComplete);
            }
          }, {
            oneTimeCallback: true
          });
          let newStepValue = shouldComplete ? -1e-3 : 1e-3;
          if (!shouldComplete) {
            this.ani.easing("cubic-bezier(1, 0, 0.68, 0.28)");
            newStepValue += getTimeGivenProgression([0, 0], [1, 0], [0.68, 0.28], [1, 1], step)[0];
          } else {
            newStepValue += getTimeGivenProgression([0, 0], [0.32, 0.72], [0, 1], [1, 1], step)[0];
          }
          this.ani.progressEnd(shouldComplete ? 1 : 0, newStepValue, dur);
        } else {
          this.gestureOrAnimationInProgress = false;
        }
      });
      this.swipeHandlerChanged();
    });
  }
  componentWillLoad() {
    this.ionNavWillLoad.emit();
  }
  disconnectedCallback() {
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = void 0;
    }
  }
  /** @internal */
  commit(enteringEl, leavingEl, opts) {
    return __async(this, null, function* () {
      const unlock = yield this.lockController.lock();
      let changed = false;
      try {
        changed = yield this.transition(enteringEl, leavingEl, opts);
      } catch (e) {
        printIonError("[ion-router-outlet] - Exception in commit:", e);
      }
      unlock();
      return changed;
    });
  }
  /** @internal */
  setRouteId(id, params, direction, animation) {
    return __async(this, null, function* () {
      const changed = yield this.setRoot(id, params, {
        duration: direction === "root" ? 0 : void 0,
        direction: direction === "back" ? "back" : "forward",
        animationBuilder: animation
      });
      return {
        changed,
        element: this.activeEl
      };
    });
  }
  /** @internal */
  getRouteId() {
    return __async(this, null, function* () {
      const active = this.activeEl;
      return active ? {
        id: active.tagName,
        element: active,
        params: this.activeParams
      } : void 0;
    });
  }
  setRoot(component, params, opts) {
    return __async(this, null, function* () {
      if (this.activeComponent === component && shallowEqualStringMap(params, this.activeParams)) {
        return false;
      }
      const leavingEl = this.activeEl;
      const enteringEl = yield attachComponent(this.delegate, this.el, component, ["ion-page", "ion-page-invisible"], params);
      this.activeComponent = component;
      this.activeEl = enteringEl;
      this.activeParams = params;
      yield this.commit(enteringEl, leavingEl, opts);
      yield detachComponent(this.delegate, leavingEl);
      return true;
    });
  }
  transition(_0, _1) {
    return __async(this, arguments, function* (enteringEl, leavingEl, opts = {}) {
      if (leavingEl === enteringEl) {
        return false;
      }
      this.ionNavWillChange.emit();
      const {
        el,
        mode
      } = this;
      const animated = this.animated && config.getBoolean("animated", true);
      const animationBuilder = opts.animationBuilder || this.animation || config.get("navAnimation");
      yield transition(Object.assign(Object.assign({
        mode,
        animated,
        enteringEl,
        leavingEl,
        baseEl: el,
        /**
         * We need to wait for all Stencil components
         * to be ready only when using the lazy
         * loaded bundle.
         */
        deepWait: hasLazyBuild(el),
        progressCallback: opts.progressAnimation ? (ani) => {
          if (ani !== void 0 && !this.gestureOrAnimationInProgress) {
            this.gestureOrAnimationInProgress = true;
            ani.onFinish(() => {
              this.gestureOrAnimationInProgress = false;
              if (this.swipeHandler) {
                this.swipeHandler.onEnd(false);
              }
            }, {
              oneTimeCallback: true
            });
            ani.progressEnd(0, 0, 0);
          } else {
            this.ani = ani;
          }
        } : void 0
      }, opts), {
        animationBuilder
      }));
      this.ionNavDidChange.emit();
      return true;
    });
  }
  render() {
    return h("slot", {
      key: "84b50f1155b0d780dff802ee13223287259fd525"
    });
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "swipeHandler": ["swipeHandlerChanged"]
    };
  }
};
RouterOutlet.style = routerOutletCss;
var titleIosCss = ":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{top:0;-webkit-padding-start:90px;padding-inline-start:90px;-webkit-padding-end:90px;padding-inline-end:90px;padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);font-size:min(1.0625rem, 20.4px);font-weight:600;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host{inset-inline-start:0}:host(.title-small){-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px;padding-top:6px;padding-bottom:16px;position:relative;font-size:min(0.8125rem, 23.4px);font-weight:normal}:host(.title-large){-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:2px;padding-bottom:4px;-webkit-transform-origin:left center;transform-origin:left center;position:static;-ms-flex-align:end;align-items:flex-end;min-width:100%;font-size:min(2.125rem, 61.2px);font-weight:700;text-align:start}:host(.title-large.title-rtl){-webkit-transform-origin:right center;transform-origin:right center}:host(.title-large.ion-cloned-element){--color:var(--ion-text-color, #000);font-family:var(--ion-font-family)}:host(.title-large) .toolbar-title{-webkit-transform-origin:inherit;transform-origin:inherit;width:auto}:host-context([dir=rtl]):host(.title-large) .toolbar-title,:host-context([dir=rtl]).title-large .toolbar-title{-webkit-transform-origin:calc(100% - inherit);transform-origin:calc(100% - inherit)}@supports selector(:dir(rtl)){:host(.title-large:dir(rtl)) .toolbar-title{-webkit-transform-origin:calc(100% - inherit);transform-origin:calc(100% - inherit)}}";
var titleMdCss = ":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px;padding-top:0;padding-bottom:0;font-size:1.25rem;font-weight:500;letter-spacing:0.0125em}:host(.title-small){width:100%;height:100%;font-size:0.9375rem;font-weight:normal}";
var ToolbarTitle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionStyle = createEvent(this, "ionStyle", 7);
  }
  sizeChanged() {
    this.emitStyle();
  }
  connectedCallback() {
    this.emitStyle();
  }
  emitStyle() {
    const size = this.getSize();
    this.ionStyle.emit({
      [`title-${size}`]: true
    });
  }
  getSize() {
    return this.size !== void 0 ? this.size : "default";
  }
  render() {
    const mode = getIonMode(this);
    const size = this.getSize();
    return h(Host, {
      key: "e599c0bf1b0817df3fa8360bdcd6d787f751c371",
      class: createColorClasses(this.color, {
        [mode]: true,
        [`title-${size}`]: true,
        "title-rtl": document.dir === "rtl"
      })
    }, h("div", {
      key: "6e7eee9047d6759876bb31d7305b76efc7c4338c",
      class: "toolbar-title"
    }, h("slot", {
      key: "bf790eb4c83dd0af4f2fd1f85ab4af5819f46ff4"
    })));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "size": ["sizeChanged"]
    };
  }
};
ToolbarTitle.style = {
  ios: titleIosCss,
  md: titleMdCss
};
var toolbarIosCss = ":host{--border-width:0;--border-style:solid;--opacity:1;--opacity-scale:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;width:100%;padding-right:var(--ion-safe-area-right);padding-left:var(--ion-safe-area-left);color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:calc(var(--opacity) * var(--opacity-scale));z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-color-step-50, var(--ion-background-color-step-50, #f7f7f7)));--color:var(--ion-toolbar-color, var(--ion-text-color, #000));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.2)))));--padding-top:3px;--padding-bottom:3px;--padding-start:4px;--padding-end:4px;--min-height:44px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:4;order:4;min-width:0}:host(.toolbar-segment) .toolbar-content{display:-ms-inline-flexbox;display:inline-flex}:host(.toolbar-searchbar) .toolbar-container{padding-top:0;padding-bottom:0}:host(.toolbar-searchbar) ::slotted(*){-ms-flex-item-align:start;align-self:start}:host(.toolbar-searchbar) ::slotted(ion-chip){margin-top:3px}::slotted(ion-buttons){min-height:38px}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:3;order:3}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}:host(.toolbar-title-large) .toolbar-container{-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:start;align-items:flex-start}:host(.toolbar-title-large) .toolbar-content ion-title{-ms-flex:1;flex:1;-ms-flex-order:8;order:8;min-width:100%}";
var toolbarMdCss = ":host{--border-width:0;--border-style:solid;--opacity:1;--opacity-scale:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;width:100%;padding-right:var(--ion-safe-area-right);padding-left:var(--ion-safe-area-left);color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:calc(var(--opacity) * var(--opacity-scale));z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-background-color, #fff));--color:var(--ion-toolbar-color, var(--ion-text-color, #424242));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, #c1c4cd))));--padding-top:0;--padding-bottom:0;--padding-start:0;--padding-end:0;--min-height:56px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:3;order:3;min-width:0;max-width:100%}::slotted(.buttons-first-slot){-webkit-margin-start:4px;margin-inline-start:4px}::slotted(.buttons-last-slot){-webkit-margin-end:4px;margin-inline-end:4px}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:4;order:4}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}";
var Toolbar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.childrenStyles = /* @__PURE__ */ new Map();
  }
  componentWillLoad() {
    const buttons = Array.from(this.el.querySelectorAll("ion-buttons"));
    const firstButtons = buttons.find((button) => {
      return button.slot === "start";
    });
    if (firstButtons) {
      firstButtons.classList.add("buttons-first-slot");
    }
    const buttonsReversed = buttons.reverse();
    const lastButtons = buttonsReversed.find((button) => button.slot === "end") || buttonsReversed.find((button) => button.slot === "primary") || buttonsReversed.find((button) => button.slot === "secondary");
    if (lastButtons) {
      lastButtons.classList.add("buttons-last-slot");
    }
  }
  childrenStyle(ev) {
    ev.stopPropagation();
    const tagName = ev.target.tagName;
    const updatedStyles = ev.detail;
    const newStyles = {};
    const childStyles = this.childrenStyles.get(tagName) || {};
    let hasStyleChange = false;
    Object.keys(updatedStyles).forEach((key) => {
      const childKey = `toolbar-${key}`;
      const newValue = updatedStyles[key];
      if (newValue !== childStyles[childKey]) {
        hasStyleChange = true;
      }
      if (newValue) {
        newStyles[childKey] = true;
      }
    });
    if (hasStyleChange) {
      this.childrenStyles.set(tagName, newStyles);
      forceUpdate(this);
    }
  }
  render() {
    const mode = getIonMode(this);
    const childStyles = {};
    this.childrenStyles.forEach((value) => {
      Object.assign(childStyles, value);
    });
    return h(Host, {
      key: "f6c4f669a6a61c5eac4cbb5ea0aa97c48ae5bd46",
      class: Object.assign(Object.assign({}, childStyles), createColorClasses(this.color, {
        [mode]: true,
        "in-toolbar": hostContext("ion-toolbar", this.el)
      }))
    }, h("div", {
      key: "9c81742ffa02de9ba7417025b077d05e67305074",
      class: "toolbar-background",
      part: "background"
    }), h("div", {
      key: "5fc96d166fa47894a062e41541a9beee38078a36",
      class: "toolbar-container",
      part: "container"
    }, h("slot", {
      key: "b62c0d9d59a70176bdbf769aec6090d7a166853b",
      name: "start"
    }), h("slot", {
      key: "d01d3cc2c50e5aaa49c345b209fe8dbdf3d48131",
      name: "secondary"
    }), h("div", {
      key: "3aaa3a2810aedd38c37eb616158ec7b9638528fc",
      class: "toolbar-content",
      part: "content"
    }, h("slot", {
      key: "357246690f8d5e1cc3ca369611d4845a79edf610"
    })), h("slot", {
      key: "06ed3cca4f7ebff4a54cd877dad3cc925ccf9f75",
      name: "primary"
    }), h("slot", {
      key: "e453d43d14a26b0d72f41e1b81a554bab8ece811",
      name: "end"
    })));
  }
  get el() {
    return getElement(this);
  }
};
Toolbar.style = {
  ios: toolbarIosCss,
  md: toolbarMdCss
};
export {
  App as ion_app,
  Buttons as ion_buttons,
  Content as ion_content,
  Footer as ion_footer,
  Header as ion_header,
  RouterOutlet as ion_router_outlet,
  ToolbarTitle as ion_title,
  Toolbar as ion_toolbar
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-app_8.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tYXBwXzguZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgaCwgZSBhcyBjb25maWcsIGQgYXMgSG9zdCwgZyBhcyBnZXRFbGVtZW50LCBmIGFzIHByaW50SW9uV2FybmluZywgYyBhcyBjcmVhdGVFdmVudCwgYSBhcyByZWFkVGFzaywgaSBhcyBmb3JjZVVwZGF0ZSwgdyBhcyB3cml0ZVRhc2ssIGogYXMgcHJpbnRJb25FcnJvciB9IGZyb20gJy4vaW5kZXgtNER4WTZfZ0cuanMnO1xuaW1wb3J0IHsgc2hvdWxkVXNlQ2xvc2VXYXRjaGVyIH0gZnJvbSAnLi9oYXJkd2FyZS1iYWNrLWJ1dHRvbi1EaGJkLTIzSC5qcyc7XG5pbXBvcnQgeyBiIGFzIGdldElvbk1vZGUsIGEgYXMgaXNQbGF0Zm9ybSB9IGZyb20gJy4vaW9uaWMtZ2xvYmFsLUNUU3l1ZmhGLmpzJztcbmltcG9ydCB7IGkgYXMgaW5oZXJpdEFyaWFBdHRyaWJ1dGVzLCBoIGFzIGhhc0xhenlCdWlsZCwgYyBhcyBjb21wb25lbnRPblJlYWR5LCBlIGFzIGNsYW1wLCBzIGFzIHNoYWxsb3dFcXVhbFN0cmluZ01hcCB9IGZyb20gJy4vaGVscGVycy04S1NRUUdReS5qcyc7XG5pbXBvcnQgeyBpIGFzIGlzUlRMIH0gZnJvbSAnLi9kaXItQzUzZmVhZ0QuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVDb2xvckNsYXNzZXMsIGggYXMgaG9zdENvbnRleHQgfSBmcm9tICcuL3RoZW1lLURpVkp5cWxYLmpzJztcbmltcG9ydCB7IGEgYXMgZmluZElvbkNvbnRlbnQsIHAgYXMgcHJpbnRJb25Db250ZW50RXJyb3JNc2csIGcgYXMgZ2V0U2Nyb2xsRWxlbWVudCB9IGZyb20gJy4vaW5kZXgtN1ViU2x2N04uanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVLZXlib2FyZENvbnRyb2xsZXIgfSBmcm9tICcuL2tleWJvYXJkLWNvbnRyb2xsZXItQmFhVklUWXQuanMnO1xuaW1wb3J0IHsgZyBhcyBnZXRUaW1lR2l2ZW5Qcm9ncmVzc2lvbiB9IGZyb20gJy4vY3ViaWMtYmV6aWVyLWhIbVlMT2ZFLmpzJztcbmltcG9ydCB7IGEgYXMgYXR0YWNoQ29tcG9uZW50LCBkIGFzIGRldGFjaENvbXBvbmVudCB9IGZyb20gJy4vZnJhbWV3b3JrLWRlbGVnYXRlLUJMRUJnSDA2LmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlTG9ja0NvbnRyb2xsZXIgfSBmcm9tICcuL2xvY2stY29udHJvbGxlci1CLWhpclQwdi5qcyc7XG5pbXBvcnQgeyB0IGFzIHRyYW5zaXRpb24gfSBmcm9tICcuL2luZGV4LURwN0dYSDF6LmpzJztcbmltcG9ydCAnLi9pbmRleC1aalA0Q2plWi5qcyc7XG5pbXBvcnQgJy4va2V5Ym9hcmQtQ1V3NGVrVnkuanMnO1xuaW1wb3J0ICcuL2NhcGFjaXRvci1DRkVSSWVhVS5qcyc7XG5jb25zdCBhcHBDc3MgPSBcImh0bWwucGx0LW1vYmlsZSBpb24tYXBwey13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX1odG1sLnBsdC1tb2JpbGUgaW9uLWFwcCBbY29udGVudGVkaXRhYmxlXXstd2Via2l0LXVzZXItc2VsZWN0OnRleHQ7LW1vei11c2VyLXNlbGVjdDp0ZXh0Oy1tcy11c2VyLXNlbGVjdDp0ZXh0O3VzZXItc2VsZWN0OnRleHR9aW9uLWFwcC5mb3JjZS1zdGF0dXNiYXItcGFkZGluZ3stLWlvbi1zYWZlLWFyZWEtdG9wOjIwcHh9XCI7XG5jb25zdCBBcHAgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAge1xuICAgICAgcklDKGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgaXNIeWJyaWQgPSBpc1BsYXRmb3JtKHdpbmRvdywgJ2h5YnJpZCcpO1xuICAgICAgICBpZiAoIWNvbmZpZy5nZXRCb29sZWFuKCdfdGVzdGluZycpKSB7XG4gICAgICAgICAgaW1wb3J0KCcuL2luZGV4LUM2V2VScjA5LmpzJykudGhlbihtb2R1bGUgPT4gbW9kdWxlLnN0YXJ0VGFwQ2xpY2soY29uZmlnKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbmZpZy5nZXRCb29sZWFuKCdzdGF0dXNUYXAnLCBpc0h5YnJpZCkpIHtcbiAgICAgICAgICBpbXBvcnQoJy4vc3RhdHVzLXRhcC1wQVROWEV0ci5qcycpLnRoZW4obW9kdWxlID0+IG1vZHVsZS5zdGFydFN0YXR1c1RhcCgpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29uZmlnLmdldEJvb2xlYW4oJ2lucHV0U2hpbXMnLCBuZWVkSW5wdXRTaGltcygpKSkge1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIG5lZWRJbnB1dFNoaW1zKCkgZW5zdXJlcyB0aGF0IG9ubHkgaU9TIGFuZCBBbmRyb2lkXG4gICAgICAgICAgICogcGxhdGZvcm1zIHByb2NlZWQgaW50byB0aGlzIGJsb2NrLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIGNvbnN0IHBsYXRmb3JtID0gaXNQbGF0Zm9ybSh3aW5kb3csICdpb3MnKSA/ICdpb3MnIDogJ2FuZHJvaWQnO1xuICAgICAgICAgIGltcG9ydCgnLi9pbnB1dC1zaGltcy1DNEtEbmh4Yi5qcycpLnRoZW4obW9kdWxlID0+IG1vZHVsZS5zdGFydElucHV0U2hpbXMoY29uZmlnLCBwbGF0Zm9ybSkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhcmR3YXJlQmFja0J1dHRvbk1vZHVsZSA9IGF3YWl0IGltcG9ydCgnLi9oYXJkd2FyZS1iYWNrLWJ1dHRvbi1EaGJkLTIzSC5qcycpO1xuICAgICAgICBjb25zdCBzdXBwb3J0c0hhcmR3YXJlQmFja0J1dHRvbkV2ZW50cyA9IGlzSHlicmlkIHx8IHNob3VsZFVzZUNsb3NlV2F0Y2hlcigpO1xuICAgICAgICBpZiAoY29uZmlnLmdldEJvb2xlYW4oJ2hhcmR3YXJlQmFja0J1dHRvbicsIHN1cHBvcnRzSGFyZHdhcmVCYWNrQnV0dG9uRXZlbnRzKSkge1xuICAgICAgICAgIGhhcmR3YXJlQmFja0J1dHRvbk1vZHVsZS5zdGFydEhhcmR3YXJlQmFja0J1dHRvbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIElmIGFuIGFwcCBzZXRzIGhhcmR3YXJlQmFja0J1dHRvbjogZmFsc2UgYW5kIGV4cGVyaW1lbnRhbENsb3NlV2F0Y2hlcjogdHJ1ZVxuICAgICAgICAgICAqIHRoZW4gdGhlIGNsb3NlIHdhdGNoZXIgd2lsbCBub3QgYmUgdXNlZC5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBpZiAoc2hvdWxkVXNlQ2xvc2VXYXRjaGVyKCkpIHtcbiAgICAgICAgICAgIHByaW50SW9uV2FybmluZygnW2lvbi1hcHBdIC0gZXhwZXJpbWVudGFsQ2xvc2VXYXRjaGVyIHdhcyBzZXQgdG8gYHRydWVgLCBidXQgaGFyZHdhcmVCYWNrQnV0dG9uIHdhcyBzZXQgdG8gYGZhbHNlYC4gQm90aCBjb25maWcgb3B0aW9ucyBtdXN0IGJlIGB0cnVlYCBmb3IgdGhlIENsb3NlIFdhdGNoZXIgQVBJIHRvIGJlIHVzZWQuJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGhhcmR3YXJlQmFja0J1dHRvbk1vZHVsZS5ibG9ja0hhcmR3YXJlQmFja0J1dHRvbigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIGltcG9ydCgnLi9rZXlib2FyZC15d2dzNWVmQS5qcycpLnRoZW4obW9kdWxlID0+IG1vZHVsZS5zdGFydEtleWJvYXJkQXNzaXN0KHdpbmRvdykpO1xuICAgICAgICB9XG4gICAgICAgIGltcG9ydCgnLi9mb2N1cy12aXNpYmxlLUJtVlJYUjF5LmpzJykudGhlbihtb2R1bGUgPT4gdGhpcy5mb2N1c1Zpc2libGUgPSBtb2R1bGUuc3RhcnRGb2N1c1Zpc2libGUoKSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFVzZWQgdG8gc2V0IGZvY3VzIG9uIGFuIGVsZW1lbnQgdGhhdCB1c2VzIGBpb24tZm9jdXNhYmxlYC5cbiAgICogRG8gbm90IHVzZSB0aGlzIGlmIGZvY3VzaW5nIHRoZSBlbGVtZW50IGFzIGEgcmVzdWx0IG9mIGEga2V5Ym9hcmRcbiAgICogZXZlbnQgYXMgdGhlIGZvY3VzIHV0aWxpdHkgc2hvdWxkIGhhbmRsZSB0aGlzIGZvciB1cy4gVGhpcyBtZXRob2RcbiAgICogc2hvdWxkIGJlIHVzZWQgd2hlbiB3ZSB3YW50IHRvIHByb2dyYW1tYXRpY2FsbHkgZm9jdXMgYW4gZWxlbWVudCBhc1xuICAgKiBhIHJlc3VsdCBvZiBhbm90aGVyIHVzZXIgYWN0aW9uLiAoRXg6IFdlIGZvY3VzIHRoZSBmaXJzdCBlbGVtZW50XG4gICAqIGluc2lkZSBvZiBhIHBvcG92ZXIgd2hlbiB0aGUgdXNlciBwcmVzZW50cyBpdCwgYnV0IHRoZSBwb3BvdmVyIGlzIG5vdCBhbHdheXNcbiAgICogcHJlc2VudGVkIGFzIGEgcmVzdWx0IG9mIGtleWJvYXJkIGFjdGlvbi4pXG4gICAqXG4gICAqIEBwYXJhbSBlbGVtZW50cyBBbiBhcnJheSBvZiBIVE1MIGVsZW1lbnRzIHRvIHNldCBmb2N1cyBvbi5cbiAgICovXG4gIGFzeW5jIHNldEZvY3VzKGVsZW1lbnRzKSB7XG4gICAgaWYgKHRoaXMuZm9jdXNWaXNpYmxlKSB7XG4gICAgICB0aGlzLmZvY3VzVmlzaWJsZS5zZXRGb2N1cyhlbGVtZW50cyk7XG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICByZXR1cm4gaChIb3N0LCB7XG4gICAgICBrZXk6ICc5YmU0NDBjNjU4MTllNGZhNjdjMmMzYzY0NzdhYjQwYjNhZDNlZWQzJyxcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgIFttb2RlXTogdHJ1ZSxcbiAgICAgICAgJ2lvbi1wYWdlJzogdHJ1ZSxcbiAgICAgICAgJ2ZvcmNlLXN0YXR1c2Jhci1wYWRkaW5nJzogY29uZmlnLmdldEJvb2xlYW4oJ19mb3JjZVN0YXR1c2JhclBhZGRpbmcnKVxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGdldCBlbCgpIHtcbiAgICByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTtcbiAgfVxufTtcbmNvbnN0IG5lZWRJbnB1dFNoaW1zID0gKCkgPT4ge1xuICAvKipcbiAgICogaU9TIGFsd2F5cyBuZWVkcyBpbnB1dCBzaGltc1xuICAgKi9cbiAgY29uc3QgbmVlZHNTaGltc0lPUyA9IGlzUGxhdGZvcm0od2luZG93LCAnaW9zJykgJiYgaXNQbGF0Zm9ybSh3aW5kb3csICdtb2JpbGUnKTtcbiAgaWYgKG5lZWRzU2hpbXNJT1MpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvKipcbiAgICogQW5kcm9pZCBvbmx5IG5lZWRzIGlucHV0IHNoaW1zIHdoZW4gcnVubmluZ1xuICAgKiBpbiB0aGUgYnJvd3NlciBhbmQgb25seSBpZiB0aGUgYnJvd3NlciBpcyB1c2luZyB0aGVcbiAgICogbmV3IENocm9tZSAxMDgrIHJlc2l6ZSBiZWhhdmlvcjogaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9ibG9nL3ZpZXdwb3J0LXJlc2l6ZS1iZWhhdmlvci9cbiAgICovXG4gIGNvbnN0IGlzQW5kcm9pZE1vYmlsZVdlYiA9IGlzUGxhdGZvcm0od2luZG93LCAnYW5kcm9pZCcpICYmIGlzUGxhdGZvcm0od2luZG93LCAnbW9iaWxld2ViJyk7XG4gIGlmIChpc0FuZHJvaWRNb2JpbGVXZWIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuY29uc3QgcklDID0gY2FsbGJhY2sgPT4ge1xuICBpZiAoJ3JlcXVlc3RJZGxlQ2FsbGJhY2snIGluIHdpbmRvdykge1xuICAgIHdpbmRvdy5yZXF1ZXN0SWRsZUNhbGxiYWNrKGNhbGxiYWNrKTtcbiAgfSBlbHNlIHtcbiAgICBzZXRUaW1lb3V0KGNhbGxiYWNrLCAzMik7XG4gIH1cbn07XG5BcHAuc3R5bGUgPSBhcHBDc3M7XG5jb25zdCBidXR0b25zSW9zQ3NzID0gXCIuc2MtaW9uLWJ1dHRvbnMtaW9zLWh7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3otaW5kZXg6OTl9LnNjLWlvbi1idXR0b25zLWlvcy1zIGlvbi1idXR0b257LS1wYWRkaW5nLXRvcDowOy0tcGFkZGluZy1ib3R0b206MDttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjB9LnNjLWlvbi1idXR0b25zLWlvcy1zIGlvbi1idXR0b257LS1wYWRkaW5nLXRvcDozcHg7LS1wYWRkaW5nLWJvdHRvbTozcHg7LS1wYWRkaW5nLXN0YXJ0OjVweDstLXBhZGRpbmctZW5kOjVweDstd2Via2l0LW1hcmdpbi1zdGFydDoycHg7bWFyZ2luLWlubGluZS1zdGFydDoycHg7LXdlYmtpdC1tYXJnaW4tZW5kOjJweDttYXJnaW4taW5saW5lLWVuZDoycHg7bWluLWhlaWdodDozMnB4fS5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uLWhhcy1pY29uLW9ubHl7LS1wYWRkaW5nLXRvcDowOy0tcGFkZGluZy1ib3R0b206MH0uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgaW9uLWJ1dHRvbjpub3QoLmJ1dHRvbi1yb3VuZCl7LS1ib3JkZXItcmFkaXVzOjRweH0uc2MtaW9uLWJ1dHRvbnMtaW9zLWguaW9uLWNvbG9yLnNjLWlvbi1idXR0b25zLWlvcy1zIC5idXR0b24sLmlvbi1jb2xvciAuc2MtaW9uLWJ1dHRvbnMtaW9zLWguc2MtaW9uLWJ1dHRvbnMtaW9zLXMgLmJ1dHRvbnstLWNvbG9yOmluaXRpYWw7LS1ib3JkZXItY29sb3I6aW5pdGlhbDstLWJhY2tncm91bmQtZm9jdXNlZDp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpfS5zYy1pb24tYnV0dG9ucy1pb3MtaC5pb24tY29sb3Iuc2MtaW9uLWJ1dHRvbnMtaW9zLXMgLmJ1dHRvbi1zb2xpZCwuaW9uLWNvbG9yIC5zYy1pb24tYnV0dG9ucy1pb3MtaC5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uLXNvbGlkey0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpOy0tYmFja2dyb3VuZC1mb2N1c2VkOiMwMDA7LS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTouMTI7LS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDojMDAwOy0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTouMTI7LS1iYWNrZ3JvdW5kLWhvdmVyOnZhcigtLWlvbi1jb2xvci1iYXNlKTstLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTowLjQ1Oy0tY29sb3I6dmFyKC0taW9uLWNvbG9yLWJhc2UpOy0tY29sb3ItZm9jdXNlZDp2YXIoLS1pb24tY29sb3ItYmFzZSl9LnNjLWlvbi1idXR0b25zLWlvcy1oLmlvbi1jb2xvci5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uLWNsZWFyLC5pb24tY29sb3IgLnNjLWlvbi1idXR0b25zLWlvcy1oLnNjLWlvbi1idXR0b25zLWlvcy1zIC5idXR0b24tY2xlYXJ7LS1jb2xvci1hY3RpdmF0ZWQ6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KTstLWNvbG9yLWZvY3VzZWQ6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KX0uc2MtaW9uLWJ1dHRvbnMtaW9zLWguaW9uLWNvbG9yLnNjLWlvbi1idXR0b25zLWlvcy1zIC5idXR0b24tb3V0bGluZSwuaW9uLWNvbG9yIC5zYy1pb24tYnV0dG9ucy1pb3MtaC5zYy1pb24tYnV0dG9ucy1pb3MtcyAuYnV0dG9uLW91dGxpbmV7LS1jb2xvci1hY3RpdmF0ZWQ6dmFyKC0taW9uLWNvbG9yLWJhc2UpOy0tY29sb3ItZm9jdXNlZDp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpOy0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KX0uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgLmJ1dHRvbi1jbGVhciwuc2MtaW9uLWJ1dHRvbnMtaW9zLXMgLmJ1dHRvbi1vdXRsaW5ley0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6dHJhbnNwYXJlbnQ7LS1iYWNrZ3JvdW5kLWZvY3VzZWQ6Y3VycmVudENvbG9yOy0tYmFja2dyb3VuZC1ob3Zlcjp0cmFuc3BhcmVudH0uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgLmJ1dHRvbi1zb2xpZDpub3QoLmlvbi1jb2xvcil7LS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IzAwMDstLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5Oi4xMjstLWJhY2tncm91bmQtYWN0aXZhdGVkOiMwMDA7LS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5Oi4xMn0uc2MtaW9uLWJ1dHRvbnMtaW9zLXMgaW9uLWljb25bc2xvdD1zdGFydF17bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowOy13ZWJraXQtbWFyZ2luLWVuZDowLjNlbTttYXJnaW4taW5saW5lLWVuZDowLjNlbTtmb250LXNpemU6MS40MWVtO2xpbmUtaGVpZ2h0OjAuNjd9LnNjLWlvbi1idXR0b25zLWlvcy1zIGlvbi1pY29uW3Nsb3Q9ZW5kXXttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MC40ZW07bWFyZ2luLWlubGluZS1zdGFydDowLjRlbTtmb250LXNpemU6MS40MWVtO2xpbmUtaGVpZ2h0OjAuNjd9LnNjLWlvbi1idXR0b25zLWlvcy1zIGlvbi1pY29uW3Nsb3Q9aWNvbi1vbmx5XXtwYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjA7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowO21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtmb250LXNpemU6MS42NWVtO2xpbmUtaGVpZ2h0OjAuNjd9XCI7XG5jb25zdCBidXR0b25zTWRDc3MgPSBcIi5zYy1pb24tYnV0dG9ucy1tZC1oe2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt6LWluZGV4Ojk5fS5zYy1pb24tYnV0dG9ucy1tZC1zIGlvbi1idXR0b257LS1wYWRkaW5nLXRvcDowOy0tcGFkZGluZy1ib3R0b206MDttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjB9LnNjLWlvbi1idXR0b25zLW1kLXMgaW9uLWJ1dHRvbnstLXBhZGRpbmctdG9wOjNweDstLXBhZGRpbmctYm90dG9tOjNweDstLXBhZGRpbmctc3RhcnQ6OHB4Oy0tcGFkZGluZy1lbmQ6OHB4Oy0tYm94LXNoYWRvdzpub25lOy13ZWJraXQtbWFyZ2luLXN0YXJ0OjJweDttYXJnaW4taW5saW5lLXN0YXJ0OjJweDstd2Via2l0LW1hcmdpbi1lbmQ6MnB4O21hcmdpbi1pbmxpbmUtZW5kOjJweDttaW4taGVpZ2h0OjMycHh9LnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbi1oYXMtaWNvbi1vbmx5ey0tcGFkZGluZy10b3A6MDstLXBhZGRpbmctYm90dG9tOjB9LnNjLWlvbi1idXR0b25zLW1kLXMgaW9uLWJ1dHRvbjpub3QoLmJ1dHRvbi1yb3VuZCl7LS1ib3JkZXItcmFkaXVzOjJweH0uc2MtaW9uLWJ1dHRvbnMtbWQtaC5pb24tY29sb3Iuc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uLC5pb24tY29sb3IgLnNjLWlvbi1idXR0b25zLW1kLWguc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uey0tY29sb3I6aW5pdGlhbDstLWNvbG9yLWZvY3VzZWQ6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KTstLWNvbG9yLWhvdmVyOnZhcigtLWlvbi1jb2xvci1jb250cmFzdCk7LS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDp0cmFuc3BhcmVudDstLWJhY2tncm91bmQtZm9jdXNlZDp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpOy0tYmFja2dyb3VuZC1ob3Zlcjp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpfS5zYy1pb24tYnV0dG9ucy1tZC1oLmlvbi1jb2xvci5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24tc29saWQsLmlvbi1jb2xvciAuc2MtaW9uLWJ1dHRvbnMtbWQtaC5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24tc29saWR7LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1jb250cmFzdCk7LS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDp0cmFuc3BhcmVudDstLWJhY2tncm91bmQtZm9jdXNlZDp2YXIoLS1pb24tY29sb3Itc2hhZGUpOy0tYmFja2dyb3VuZC1ob3Zlcjp2YXIoLS1pb24tY29sb3ItYmFzZSk7LS1jb2xvcjp2YXIoLS1pb24tY29sb3ItYmFzZSk7LS1jb2xvci1mb2N1c2VkOnZhcigtLWlvbi1jb2xvci1iYXNlKTstLWNvbG9yLWhvdmVyOnZhcigtLWlvbi1jb2xvci1iYXNlKX0uc2MtaW9uLWJ1dHRvbnMtbWQtaC5pb24tY29sb3Iuc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uLW91dGxpbmUsLmlvbi1jb2xvciAuc2MtaW9uLWJ1dHRvbnMtbWQtaC5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24tb3V0bGluZXstLWJvcmRlci1jb2xvcjp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpfS5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24taGFzLWljb24tb25seS5idXR0b24tY2xlYXJ7LS1wYWRkaW5nLXRvcDoxMnB4Oy0tcGFkZGluZy1lbmQ6MTJweDstLXBhZGRpbmctYm90dG9tOjEycHg7LS1wYWRkaW5nLXN0YXJ0OjEycHg7LS1ib3JkZXItcmFkaXVzOjUwJTttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7d2lkdGg6M3JlbTtoZWlnaHQ6M3JlbX0uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uey0tYmFja2dyb3VuZC1ob3ZlcjpjdXJyZW50Q29sb3J9LnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbi1zb2xpZHstLWNvbG9yOnZhcigtLWlvbi10b29sYmFyLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi10b29sYmFyLWNvbG9yLCB2YXIoLS1pb24tdGV4dC1jb2xvciwgIzQyNDI0MikpOy0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6dHJhbnNwYXJlbnQ7LS1iYWNrZ3JvdW5kLWZvY3VzZWQ6Y3VycmVudENvbG9yfS5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24tb3V0bGluZXstLWNvbG9yOmluaXRpYWw7LS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50Oy0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6dHJhbnNwYXJlbnQ7LS1iYWNrZ3JvdW5kLWZvY3VzZWQ6Y3VycmVudENvbG9yOy0tYmFja2dyb3VuZC1ob3ZlcjpjdXJyZW50Q29sb3I7LS1ib3JkZXItY29sb3I6Y3VycmVudENvbG9yfS5zYy1pb24tYnV0dG9ucy1tZC1zIC5idXR0b24tY2xlYXJ7LS1jb2xvcjppbml0aWFsOy0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDstLWJhY2tncm91bmQtYWN0aXZhdGVkOnRyYW5zcGFyZW50Oy0tYmFja2dyb3VuZC1mb2N1c2VkOmN1cnJlbnRDb2xvcjstLWJhY2tncm91bmQtaG92ZXI6Y3VycmVudENvbG9yfS5zYy1pb24tYnV0dG9ucy1tZC1zIGlvbi1pY29uW3Nsb3Q9c3RhcnRde21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDstd2Via2l0LW1hcmdpbi1lbmQ6MC4zZW07bWFyZ2luLWlubGluZS1lbmQ6MC4zZW07Zm9udC1zaXplOjEuNGVtfS5zYy1pb24tYnV0dG9ucy1tZC1zIGlvbi1pY29uW3Nsb3Q9ZW5kXXttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MC40ZW07bWFyZ2luLWlubGluZS1zdGFydDowLjRlbTtmb250LXNpemU6MS40ZW19LnNjLWlvbi1idXR0b25zLW1kLXMgaW9uLWljb25bc2xvdD1pY29uLW9ubHlde3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6MDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjA7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO2ZvbnQtc2l6ZToxLjhlbX1cIjtcbmNvbnN0IEJ1dHRvbnMgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIC8qKlxuICAgICAqIElmIHRydWUsIGJ1dHRvbnMgd2lsbCBkaXNhcHBlYXIgd2hlbiBpdHNcbiAgICAgKiBwYXJlbnQgdG9vbGJhciBoYXMgZnVsbHkgY29sbGFwc2VkIGlmIHRoZSB0b29sYmFyXG4gICAgICogaXMgbm90IHRoZSBmaXJzdCB0b29sYmFyLiBJZiB0aGUgdG9vbGJhciBpcyB0aGVcbiAgICAgKiBmaXJzdCB0b29sYmFyLCB0aGUgYnV0dG9ucyB3aWxsIGJlIGhpZGRlbiBhbmQgd2lsbFxuICAgICAqIG9ubHkgYmUgc2hvd24gb25jZSBhbGwgdG9vbGJhcnMgaGF2ZSBmdWxseSBjb2xsYXBzZWQuXG4gICAgICpcbiAgICAgKiBPbmx5IGFwcGxpZXMgaW4gYGlvc2AgbW9kZSB3aXRoIGBjb2xsYXBzZWAgc2V0IHRvXG4gICAgICogYHRydWVgIG9uIGBpb24taGVhZGVyYC5cbiAgICAgKlxuICAgICAqIFR5cGljYWxseSB1c2VkIGZvciBbQ29sbGFwc2libGUgTGFyZ2UgVGl0bGVzXShodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2FwaS90aXRsZSNjb2xsYXBzaWJsZS1sYXJnZS10aXRsZXMpXG4gICAgICovXG4gICAgdGhpcy5jb2xsYXBzZSA9IGZhbHNlO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICByZXR1cm4gaChIb3N0LCB7XG4gICAgICBrZXk6ICc1OGMxZmM1ZWI4NjdkMDczMWM2MzU0OWIxY2NiM2VjM2JiYmU2ZTFiJyxcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgIFttb2RlXTogdHJ1ZSxcbiAgICAgICAgWydidXR0b25zLWNvbGxhcHNlJ106IHRoaXMuY29sbGFwc2VcbiAgICAgIH1cbiAgICB9LCBoKFwic2xvdFwiLCB7XG4gICAgICBrZXk6ICcwYzhmOTViOTg0MGM4ZmEwYzRlNTBiZTg0YzUxNTk2MjBhM2ViNWM4J1xuICAgIH0pKTtcbiAgfVxufTtcbkJ1dHRvbnMuc3R5bGUgPSB7XG4gIGlvczogYnV0dG9uc0lvc0NzcyxcbiAgbWQ6IGJ1dHRvbnNNZENzc1xufTtcbmNvbnN0IGNvbnRlbnRDc3MgPSBcIjpob3N0ey0tYmFja2dyb3VuZDp2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZik7LS1jb2xvcjp2YXIoLS1pb24tdGV4dC1jb2xvciwgIzAwMCk7LS1wYWRkaW5nLXRvcDowcHg7LS1wYWRkaW5nLWJvdHRvbTowcHg7LS1wYWRkaW5nLXN0YXJ0OjBweDstLXBhZGRpbmctZW5kOjBweDstLWtleWJvYXJkLW9mZnNldDowcHg7LS1vZmZzZXQtdG9wOjBweDstLW9mZnNldC1ib3R0b206MHB4Oy0tb3ZlcmZsb3c6YXV0bztkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4OjE7ZmxleDoxO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7bWFyZ2luOjAgIWltcG9ydGFudDtwYWRkaW5nOjAgIWltcG9ydGFudDtmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHksIGluaGVyaXQpO2NvbnRhaW46c2l6ZSBzdHlsZX06aG9zdCguaW9uLWNvbG9yKSAuaW5uZXItc2Nyb2xse2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWJhc2UpO2NvbG9yOnZhcigtLWlvbi1jb2xvci1jb250cmFzdCl9I2JhY2tncm91bmQtY29udGVudHtsZWZ0OjBweDtyaWdodDowcHg7dG9wOmNhbGModmFyKC0tb2Zmc2V0LXRvcCkgKiAtMSk7Ym90dG9tOmNhbGModmFyKC0tb2Zmc2V0LWJvdHRvbSkgKiAtMSk7cG9zaXRpb246YWJzb2x1dGU7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKX0uaW5uZXItc2Nyb2xse2xlZnQ6MHB4O3JpZ2h0OjBweDt0b3A6Y2FsYyh2YXIoLS1vZmZzZXQtdG9wKSAqIC0xKTtib3R0b206Y2FsYyh2YXIoLS1vZmZzZXQtYm90dG9tKSAqIC0xKTstd2Via2l0LXBhZGRpbmctc3RhcnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7cGFkZGluZy1pbmxpbmUtc3RhcnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7LXdlYmtpdC1wYWRkaW5nLWVuZDp2YXIoLS1wYWRkaW5nLWVuZCk7cGFkZGluZy1pbmxpbmUtZW5kOnZhcigtLXBhZGRpbmctZW5kKTtwYWRkaW5nLXRvcDpjYWxjKHZhcigtLXBhZGRpbmctdG9wKSArIHZhcigtLW9mZnNldC10b3ApKTtwYWRkaW5nLWJvdHRvbTpjYWxjKHZhcigtLXBhZGRpbmctYm90dG9tKSArIHZhcigtLWtleWJvYXJkLW9mZnNldCkgKyB2YXIoLS1vZmZzZXQtYm90dG9tKSk7cG9zaXRpb246YWJzb2x1dGU7Y29sb3I6dmFyKC0tY29sb3IpOy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDtvdmVyZmxvdzpoaWRkZW47LW1zLXRvdWNoLWFjdGlvbjpwYW4teCBwYW4teSBwaW5jaC16b29tO3RvdWNoLWFjdGlvbjpwYW4teCBwYW4teSBwaW5jaC16b29tfS5zY3JvbGwteSwuc2Nyb2xsLXh7LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2g7ei1pbmRleDowO3dpbGwtY2hhbmdlOnNjcm9sbC1wb3NpdGlvbn0uc2Nyb2xsLXl7b3ZlcmZsb3cteTp2YXIoLS1vdmVyZmxvdyk7b3ZlcnNjcm9sbC1iZWhhdmlvci15OmNvbnRhaW59LnNjcm9sbC14e292ZXJmbG93LXg6dmFyKC0tb3ZlcmZsb3cpO292ZXJzY3JvbGwtYmVoYXZpb3IteDpjb250YWlufS5vdmVyc2Nyb2xsOjpiZWZvcmUsLm92ZXJzY3JvbGw6OmFmdGVye3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjFweDtoZWlnaHQ6MXB4O2NvbnRlbnQ6XFxcIlxcXCJ9Lm92ZXJzY3JvbGw6OmJlZm9yZXtib3R0b206LTFweH0ub3ZlcnNjcm9sbDo6YWZ0ZXJ7dG9wOi0xcHh9Omhvc3QoLmNvbnRlbnQtc2l6aW5nKXtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjttaW4taGVpZ2h0OjA7Y29udGFpbjpub25lfTpob3N0KC5jb250ZW50LXNpemluZykgLmlubmVyLXNjcm9sbHtwb3NpdGlvbjpyZWxhdGl2ZTt0b3A6MDtib3R0b206MDttYXJnaW4tdG9wOmNhbGModmFyKC0tb2Zmc2V0LXRvcCkgKiAtMSk7bWFyZ2luLWJvdHRvbTpjYWxjKHZhcigtLW9mZnNldC1ib3R0b20pICogLTEpfS50cmFuc2l0aW9uLWVmZmVjdHtkaXNwbGF5Om5vbmU7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwdmg7b3BhY2l0eTowO3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3QoLmNvbnRlbnQtbHRyKSAudHJhbnNpdGlvbi1lZmZlY3R7bGVmdDotMTAwJTt9Omhvc3QoLmNvbnRlbnQtcnRsKSAudHJhbnNpdGlvbi1lZmZlY3R7cmlnaHQ6LTEwMCU7fS50cmFuc2l0aW9uLWNvdmVye3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtiYWNrZ3JvdW5kOmJsYWNrO29wYWNpdHk6MC4xfS50cmFuc2l0aW9uLXNoYWRvd3tkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7LXdlYmtpdC1ib3gtc2hhZG93Omluc2V0IC05cHggMCA5cHggMCByZ2JhKDAsIDAsIDEwMCwgMC4wMyk7Ym94LXNoYWRvdzppbnNldCAtOXB4IDAgOXB4IDAgcmdiYSgwLCAwLCAxMDAsIDAuMDMpfTpob3N0KC5jb250ZW50LWx0cikgLnRyYW5zaXRpb24tc2hhZG93e3JpZ2h0OjA7fTpob3N0KC5jb250ZW50LXJ0bCkgLnRyYW5zaXRpb24tc2hhZG93e2xlZnQ6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZVgoLTEpO3RyYW5zZm9ybTpzY2FsZVgoLTEpfTo6c2xvdHRlZChbc2xvdD1maXhlZF0pe3Bvc2l0aW9uOmFic29sdXRlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9XCI7XG5jb25zdCBDb250ZW50ID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmlvblNjcm9sbFN0YXJ0ID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25TY3JvbGxTdGFydFwiLCA3KTtcbiAgICB0aGlzLmlvblNjcm9sbCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uU2Nyb2xsXCIsIDcpO1xuICAgIHRoaXMuaW9uU2Nyb2xsRW5kID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25TY3JvbGxFbmRcIiwgNyk7XG4gICAgdGhpcy53YXRjaERvZyA9IG51bGw7XG4gICAgdGhpcy5pc1Njcm9sbGluZyA9IGZhbHNlO1xuICAgIHRoaXMubGFzdFNjcm9sbCA9IDA7XG4gICAgdGhpcy5xdWV1ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmNUb3AgPSAtMTtcbiAgICB0aGlzLmNCb3R0b20gPSAtMTtcbiAgICB0aGlzLmlzTWFpbkNvbnRlbnQgPSB0cnVlO1xuICAgIHRoaXMucmVzaXplVGltZW91dCA9IG51bGw7XG4gICAgdGhpcy5pbmhlcml0ZWRBdHRyaWJ1dGVzID0ge307XG4gICAgdGhpcy50YWJzRWxlbWVudCA9IG51bGw7XG4gICAgLy8gRGV0YWlsIGlzIHVzZWQgaW4gYSBob3QgbG9vcCBpbiB0aGUgc2Nyb2xsIGV2ZW50LCBieSBhbGxvY2F0aW5nIGl0IGhlcmVcbiAgICAvLyBWOCB3aWxsIGJlIGFibGUgdG8gaW5saW5lIGFueSByZWFkL3dyaXRlIHRvIGl0IHNpbmNlIGl0J3MgYSBtb25vbW9ycGhpYyBjbGFzcy5cbiAgICAvLyBodHRwczovL21yYWxlLnBoL2Jsb2cvMjAxNS8wMS8xMS93aGF0cy11cC13aXRoLW1vbm9tb3JwaGlzbS5odG1sXG4gICAgdGhpcy5kZXRhaWwgPSB7XG4gICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICBzY3JvbGxMZWZ0OiAwLFxuICAgICAgdHlwZTogJ3Njcm9sbCcsXG4gICAgICBldmVudDogdW5kZWZpbmVkLFxuICAgICAgc3RhcnRYOiAwLFxuICAgICAgc3RhcnRZOiAwLFxuICAgICAgc3RhcnRUaW1lOiAwLFxuICAgICAgY3VycmVudFg6IDAsXG4gICAgICBjdXJyZW50WTogMCxcbiAgICAgIHZlbG9jaXR5WDogMCxcbiAgICAgIHZlbG9jaXR5WTogMCxcbiAgICAgIGRlbHRhWDogMCxcbiAgICAgIGRlbHRhWTogMCxcbiAgICAgIGN1cnJlbnRUaW1lOiAwLFxuICAgICAgZGF0YTogdW5kZWZpbmVkLFxuICAgICAgaXNTY3JvbGxpbmc6IHRydWVcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIElmIGB0cnVlYCwgdGhlIGNvbnRlbnQgd2lsbCBzY3JvbGwgYmVoaW5kIHRoZSBoZWFkZXJzXG4gICAgICogYW5kIGZvb3RlcnMuIFRoaXMgZWZmZWN0IGNhbiBlYXNpbHkgYmUgc2VlbiBieSBzZXR0aW5nIHRoZSB0b29sYmFyXG4gICAgICogdG8gdHJhbnNwYXJlbnQuXG4gICAgICovXG4gICAgdGhpcy5mdWxsc2NyZWVuID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogQ29udHJvbHMgd2hlcmUgdGhlIGZpeGVkIGNvbnRlbnQgaXMgcGxhY2VkIHJlbGF0aXZlIHRvIHRoZSBtYWluIGNvbnRlbnRcbiAgICAgKiBpbiB0aGUgRE9NLiBUaGlzIGNhbiBiZSB1c2VkIHRvIGNvbnRyb2wgdGhlIG9yZGVyIGluIHdoaWNoIGZpeGVkIGVsZW1lbnRzXG4gICAgICogcmVjZWl2ZSBrZXlib2FyZCBmb2N1cy5cbiAgICAgKiBGb3IgZXhhbXBsZSwgaWYgYSBGQUIgaW4gdGhlIGZpeGVkIHNsb3Qgc2hvdWxkIHJlY2VpdmUga2V5Ym9hcmQgZm9jdXMgYmVmb3JlXG4gICAgICogdGhlIG1haW4gcGFnZSBjb250ZW50LCBzZXQgdGhpcyBwcm9wZXJ0eSB0byBgJ2JlZm9yZSdgLlxuICAgICAqL1xuICAgIHRoaXMuZml4ZWRTbG90UGxhY2VtZW50ID0gJ2FmdGVyJztcbiAgICAvKipcbiAgICAgKiBJZiB5b3Ugd2FudCB0byBlbmFibGUgdGhlIGNvbnRlbnQgc2Nyb2xsaW5nIGluIHRoZSBYIGF4aXMsIHNldCB0aGlzIHByb3BlcnR5IHRvIGB0cnVlYC5cbiAgICAgKi9cbiAgICB0aGlzLnNjcm9sbFggPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBJZiB5b3Ugd2FudCB0byBkaXNhYmxlIHRoZSBjb250ZW50IHNjcm9sbGluZyBpbiB0aGUgWSBheGlzLCBzZXQgdGhpcyBwcm9wZXJ0eSB0byBgZmFsc2VgLlxuICAgICAqL1xuICAgIHRoaXMuc2Nyb2xsWSA9IHRydWU7XG4gICAgLyoqXG4gICAgICogQmVjYXVzZSBvZiBwZXJmb3JtYW5jZSByZWFzb25zLCBpb25TY3JvbGwgZXZlbnRzIGFyZSBkaXNhYmxlZCBieSBkZWZhdWx0LCBpbiBvcmRlciB0byBlbmFibGUgdGhlbVxuICAgICAqIGFuZCBzdGFydCBsaXN0ZW5pbmcgZnJvbSAoaW9uU2Nyb2xsKSwgc2V0IHRoaXMgcHJvcGVydHkgdG8gYHRydWVgLlxuICAgICAqL1xuICAgIHRoaXMuc2Nyb2xsRXZlbnRzID0gZmFsc2U7XG4gIH1cbiAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgdGhpcy5pbmhlcml0ZWRBdHRyaWJ1dGVzID0gaW5oZXJpdEFyaWFBdHRyaWJ1dGVzKHRoaXMuZWwpO1xuICB9XG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuaXNNYWluQ29udGVudCA9IHRoaXMuZWwuY2xvc2VzdCgnaW9uLW1lbnUsIGlvbi1wb3BvdmVyLCBpb24tbW9kYWwnKSA9PT0gbnVsbDtcbiAgICAvKipcbiAgICAgKiBUaGUgZnVsbHNjcmVlbiBjb250ZW50IG9mZnNldHMgbmVlZCB0byBiZVxuICAgICAqIGNvbXB1dGVkIGFmdGVyIHRoZSB0YWIgYmFyIGhhcyBsb2FkZWQuIFNpbmNlXG4gICAgICogbGF6eSBldmFsdWF0aW9uIG1lYW5zIGNvbXBvbmVudHMgYXJlIG5vdCBoeWRyYXRlZFxuICAgICAqIGF0IHRoZSBzYW1lIHRpbWUsIHdlIG5lZWQgdG8gd2FpdCBmb3IgdGhlIGlvblRhYkJhckxvYWRlZFxuICAgICAqIGV2ZW50IHRvIGZpcmUuIFRoaXMgZG9lcyBub3QgaW1wYWN0IGRpc3QtY3VzdG9tLWVsZW1lbnRzXG4gICAgICogYmVjYXVzZSB0aGVyZSBpcyBubyBoeWRyYXRpb24gdGhlcmUuXG4gICAgICovXG4gICAgaWYgKGhhc0xhenlCdWlsZCh0aGlzLmVsKSkge1xuICAgICAgLyoqXG4gICAgICAgKiBXZSBuZWVkIHRvIGNhY2hlIHRoZSByZWZlcmVuY2UgdG8gdGhlIHRhYnMuXG4gICAgICAgKiBJZiBqdXN0IHRoZSBjb250ZW50IGlzIHVubW91bnRlZCB0aGVuIHdlIHdvbid0XG4gICAgICAgKiBiZSBhYmxlIHRvIHF1ZXJ5IGZvciB0aGUgY2xvc2VzdCB0YWJzIG9uIGRpc2Nvbm5lY3RlZENhbGxiYWNrXG4gICAgICAgKiBzaW5jZSB0aGUgY29udGVudCBoYXMgYmVlbiByZW1vdmVkIGZyb20gdGhlIERPTSB0cmVlLlxuICAgICAgICovXG4gICAgICBjb25zdCBjbG9zZXN0VGFicyA9IHRoaXMudGFic0VsZW1lbnQgPSB0aGlzLmVsLmNsb3Nlc3QoJ2lvbi10YWJzJyk7XG4gICAgICBpZiAoY2xvc2VzdFRhYnMgIT09IG51bGwpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoZW4gYWRkaW5nIGFuZCByZW1vdmluZyB0aGUgZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgICogd2UgbmVlZCB0byBtYWtlIHN1cmUgd2UgcGFzcyB0aGUgc2FtZSBmdW5jdGlvbiByZWZlcmVuY2VcbiAgICAgICAgICogb3RoZXJ3aXNlIHRoZSBldmVudCBsaXN0ZW5lciB3aWxsIG5vdCBiZSByZW1vdmVkIHByb3Blcmx5LlxuICAgICAgICAgKiBXZSBjYW4ndCBvbmx5IHBhc3MgYHRoaXMucmVzaXplYCBiZWNhdXNlIFwidGhpc1wiIGluIHRoZSBmdW5jdGlvblxuICAgICAgICAgKiBjb250ZXh0IGJlY29tZXMgYSByZWZlcmVuY2UgdG8gSW9uVGFicyBpbnN0ZWFkIG9mIElvbkNvbnRlbnQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEFkZGl0aW9uYWxseSwgd2UgbGlzdGVuIGZvciBpb25UYWJCYXJMb2FkZWQgb24gdGhlIElvblRhYnNcbiAgICAgICAgICogaW5zdGFuY2UgcmF0aGVyIHRoYW4gdGhlIElvblRhYkJhciBpbnN0YW5jZS4gSXQncyBwb3NzaWJsZSBmb3JcbiAgICAgICAgICogYSB0YWIgYmFyIHRvIGJlIGNvbmRpdGlvbmFsbHkgcmVuZGVyZWQvbW91bnRlZC4gU2luY2UgaW9uVGFiQmFyTG9hZGVkXG4gICAgICAgICAqIGJ1YmJsZXMsIHdlIGNhbiBjYXRjaCBhbnkgaW5zdGFuY2VzIG9mIGNoaWxkIHRhYiBiYXJzIGxvYWRpbmcgYnkgbGlzdGVuaW5nXG4gICAgICAgICAqIG9uIElvblRhYnMuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnRhYnNMb2FkQ2FsbGJhY2sgPSAoKSA9PiB0aGlzLnJlc2l6ZSgpO1xuICAgICAgICBjbG9zZXN0VGFicy5hZGRFdmVudExpc3RlbmVyKCdpb25UYWJCYXJMb2FkZWQnLCB0aGlzLnRhYnNMb2FkQ2FsbGJhY2spO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLm9uU2Nyb2xsRW5kKCk7XG4gICAgaWYgKGhhc0xhenlCdWlsZCh0aGlzLmVsKSkge1xuICAgICAgLyoqXG4gICAgICAgKiBUaGUgZXZlbnQgbGlzdGVuZXIgYW5kIHRhYnMgY2FjaGVzIG5lZWQgdG9cbiAgICAgICAqIGJlIGNsZWFyZWQgb3RoZXJ3aXNlIHRoaXMgd2lsbCBjcmVhdGUgYSBtZW1vcnlcbiAgICAgICAqIGxlYWsgd2hlcmUgdGhlIElvblRhYnMgaW5zdGFuY2UgY2FuIG5ldmVyIGJlXG4gICAgICAgKiBnYXJiYWdlIGNvbGxlY3RlZC5cbiAgICAgICAqL1xuICAgICAgY29uc3Qge1xuICAgICAgICB0YWJzRWxlbWVudCxcbiAgICAgICAgdGFic0xvYWRDYWxsYmFja1xuICAgICAgfSA9IHRoaXM7XG4gICAgICBpZiAodGFic0VsZW1lbnQgIT09IG51bGwgJiYgdGFic0xvYWRDYWxsYmFjayAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRhYnNFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lvblRhYkJhckxvYWRlZCcsIHRhYnNMb2FkQ2FsbGJhY2spO1xuICAgICAgfVxuICAgICAgdGhpcy50YWJzRWxlbWVudCA9IG51bGw7XG4gICAgICB0aGlzLnRhYnNMb2FkQ2FsbGJhY2sgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBSb3RhdGluZyBjZXJ0YWluIGRldmljZXMgY2FuIHVwZGF0ZVxuICAgKiB0aGUgc2FmZSBhcmVhIGluc2V0cy4gQXMgYSByZXN1bHQsXG4gICAqIHRoZSBmdWxsc2NyZWVuIGZlYXR1cmUgb24gaW9uLWNvbnRlbnRcbiAgICogbmVlZHMgdG8gYmUgcmVjYWxjdWxhdGVkLlxuICAgKlxuICAgKiBXZSBsaXN0ZW4gZm9yIFwicmVzaXplXCIgYmVjYXVzZSB3ZVxuICAgKiBkbyBub3QgY2FyZSB3aGF0IHRoZSBvcmllbnRhdGlvbiBvZlxuICAgKiB0aGUgZGV2aWNlIGlzLiBPdGhlciBBUElzXG4gICAqIHN1Y2ggYXMgU2NyZWVuT3JpZW50YXRpb24gb3JcbiAgICogdGhlIGRldmljZW9yaWVudGF0aW9uIGV2ZW50IG11c3QgaGF2ZVxuICAgKiBwZXJtaXNzaW9uIGZyb20gdGhlIHVzZXIgZmlyc3Qgd2hlcmVhc1xuICAgKiB0aGUgXCJyZXNpemVcIiBldmVudCBkb2VzIG5vdC5cbiAgICpcbiAgICogV2UgYWxzbyB0aHJvdHRsZSB0aGUgY2FsbGJhY2sgdG8gbWluaW1pemVcbiAgICogdGhyYXNoaW5nIHdoZW4gcXVpY2tseSByZXNpemluZyBhIHdpbmRvdy5cbiAgICovXG4gIG9uUmVzaXplKCkge1xuICAgIGlmICh0aGlzLnJlc2l6ZVRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnJlc2l6ZVRpbWVvdXQpO1xuICAgICAgdGhpcy5yZXNpemVUaW1lb3V0ID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5yZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAvKipcbiAgICAgICAqIFJlc2l6ZSBzaG91bGQgb25seSBoYXBwZW5cbiAgICAgICAqIGlmIHRoZSBjb250ZW50IGlzIHZpc2libGUuXG4gICAgICAgKiBXaGVuIHRoZSBjb250ZW50IGlzIGhpZGRlblxuICAgICAgICogdGhlbiBvZmZzZXRQYXJlbnQgd2lsbCBiZSBudWxsLlxuICAgICAgICovXG4gICAgICBpZiAodGhpcy5lbC5vZmZzZXRQYXJlbnQgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5yZXNpemUoKTtcbiAgICB9LCAxMDApO1xuICB9XG4gIHNob3VsZEZvcmNlT3ZlcnNjcm9sbCgpIHtcbiAgICBjb25zdCB7XG4gICAgICBmb3JjZU92ZXJzY3JvbGxcbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICByZXR1cm4gZm9yY2VPdmVyc2Nyb2xsID09PSB1bmRlZmluZWQgPyBtb2RlID09PSAnaW9zJyAmJiBpc1BsYXRmb3JtKCdpb3MnKSA6IGZvcmNlT3ZlcnNjcm9sbDtcbiAgfVxuICByZXNpemUoKSB7XG4gICAgLyoqXG4gICAgICogT25seSBmb3JjZSB1cGRhdGUgaWYgdGhlIGNvbXBvbmVudCBpcyByZW5kZXJlZCBpbiBhIGJyb3dzZXIgY29udGV4dC5cbiAgICAgKiBVc2luZyBgZm9yY2VVcGRhdGVgIGluIGEgc2VydmVyIGNvbnRleHQgd2l0aCBwcmUtcmVuZGVyaW5nIGNhbiBsZWFkIHRvIGFuIGluZmluaXRlIGxvb3AuXG4gICAgICogVGhlIGBoeWRyYXRlRG9jdW1lbnRgIGZ1bmN0aW9uIGluIGBAc3RlbmNpbC9jb3JlYCB3aWxsIHJlbmRlciB0aGUgYGlvbi1jb250ZW50YCwgYnV0XG4gICAgICogYGZvcmNlVXBkYXRlYCB3aWxsIHRyaWdnZXIgYW5vdGhlciByZW5kZXIsIGxvY2tpbmcgdXAgdGhlIHNlcnZlci5cbiAgICAgKlxuICAgICAqIFRPRE86IFJlbW92ZSBpZiBTVEVOQ0lMLTgzNCBkZXRlcm1pbmVzIFN0ZW5jaWwgd2lsbCBhY2NvdW50IGZvciB0aGlzLlxuICAgICAqL1xuICAgIHtcbiAgICAgIGlmICh0aGlzLmZ1bGxzY3JlZW4pIHtcbiAgICAgICAgcmVhZFRhc2soKCkgPT4gdGhpcy5yZWFkRGltZW5zaW9ucygpKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jVG9wICE9PSAwIHx8IHRoaXMuY0JvdHRvbSAhPT0gMCkge1xuICAgICAgICB0aGlzLmNUb3AgPSB0aGlzLmNCb3R0b20gPSAwO1xuICAgICAgICBmb3JjZVVwZGF0ZSh0aGlzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmVhZERpbWVuc2lvbnMoKSB7XG4gICAgY29uc3QgcGFnZSA9IGdldFBhZ2VFbGVtZW50KHRoaXMuZWwpO1xuICAgIGNvbnN0IHRvcCA9IE1hdGgubWF4KHRoaXMuZWwub2Zmc2V0VG9wLCAwKTtcbiAgICBjb25zdCBib3R0b20gPSBNYXRoLm1heChwYWdlLm9mZnNldEhlaWdodCAtIHRvcCAtIHRoaXMuZWwub2Zmc2V0SGVpZ2h0LCAwKTtcbiAgICBjb25zdCBkaXJ0eSA9IHRvcCAhPT0gdGhpcy5jVG9wIHx8IGJvdHRvbSAhPT0gdGhpcy5jQm90dG9tO1xuICAgIGlmIChkaXJ0eSkge1xuICAgICAgdGhpcy5jVG9wID0gdG9wO1xuICAgICAgdGhpcy5jQm90dG9tID0gYm90dG9tO1xuICAgICAgZm9yY2VVcGRhdGUodGhpcyk7XG4gICAgfVxuICB9XG4gIG9uU2Nyb2xsKGV2KSB7XG4gICAgY29uc3QgdGltZVN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICBjb25zdCBzaG91bGRTdGFydCA9ICF0aGlzLmlzU2Nyb2xsaW5nO1xuICAgIHRoaXMubGFzdFNjcm9sbCA9IHRpbWVTdGFtcDtcbiAgICBpZiAoc2hvdWxkU3RhcnQpIHtcbiAgICAgIHRoaXMub25TY3JvbGxTdGFydCgpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMucXVldWVkICYmIHRoaXMuc2Nyb2xsRXZlbnRzKSB7XG4gICAgICB0aGlzLnF1ZXVlZCA9IHRydWU7XG4gICAgICByZWFkVGFzayh0cyA9PiB7XG4gICAgICAgIHRoaXMucXVldWVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGV0YWlsLmV2ZW50ID0gZXY7XG4gICAgICAgIHVwZGF0ZVNjcm9sbERldGFpbCh0aGlzLmRldGFpbCwgdGhpcy5zY3JvbGxFbCwgdHMsIHNob3VsZFN0YXJ0KTtcbiAgICAgICAgdGhpcy5pb25TY3JvbGwuZW1pdCh0aGlzLmRldGFpbCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIEdldCB0aGUgZWxlbWVudCB3aGVyZSB0aGUgYWN0dWFsIHNjcm9sbGluZyB0YWtlcyBwbGFjZS5cbiAgICogVGhpcyBlbGVtZW50IGNhbiBiZSB1c2VkIHRvIHN1YnNjcmliZSB0byBgc2Nyb2xsYCBldmVudHMgb3IgbWFudWFsbHkgbW9kaWZ5XG4gICAqIGBzY3JvbGxUb3BgLiBIb3dldmVyLCBpdCdzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgQVBJIHByb3ZpZGVkIGJ5IGBpb24tY29udGVudGA6XG4gICAqXG4gICAqIGkuZS4gVXNpbmcgYGlvblNjcm9sbGAsIGBpb25TY3JvbGxTdGFydGAsIGBpb25TY3JvbGxFbmRgIGZvciBzY3JvbGxpbmcgZXZlbnRzXG4gICAqIGFuZCBgc2Nyb2xsVG9Qb2ludCgpYCB0byBzY3JvbGwgdGhlIGNvbnRlbnQgaW50byBhIGNlcnRhaW4gcG9pbnQuXG4gICAqL1xuICBhc3luYyBnZXRTY3JvbGxFbGVtZW50KCkge1xuICAgIC8qKlxuICAgICAqIElmIHRoaXMgZ2V0cyBjYWxsZWQgaW4gY2VydGFpbiBlYXJseSBsaWZlY3ljbGUgaG9va3MgKGV4OiBWdWUgb25Nb3VudGVkKSxcbiAgICAgKiBzY3JvbGxFbCB3b24ndCBiZSBkZWZpbmVkIHlldCB3aXRoIHRoZSBjdXN0b20gZWxlbWVudHMgYnVpbGQsIHNvIHdhaXQgZm9yIGl0IHRvIGxvYWQgaW4uXG4gICAgICovXG4gICAgaWYgKCF0aGlzLnNjcm9sbEVsKSB7XG4gICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IGNvbXBvbmVudE9uUmVhZHkodGhpcy5lbCwgcmVzb2x2ZSkpO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2Nyb2xsRWwpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBiYWNrZ3JvdW5kIGNvbnRlbnQgZWxlbWVudC5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBhc3luYyBnZXRCYWNrZ3JvdW5kRWxlbWVudCgpIHtcbiAgICBpZiAoIXRoaXMuYmFja2dyb3VuZENvbnRlbnRFbCkge1xuICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBjb21wb25lbnRPblJlYWR5KHRoaXMuZWwsIHJlc29sdmUpKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLmJhY2tncm91bmRDb250ZW50RWwpO1xuICB9XG4gIC8qKlxuICAgKiBTY3JvbGwgdG8gdGhlIHRvcCBvZiB0aGUgY29tcG9uZW50LlxuICAgKlxuICAgKiBAcGFyYW0gZHVyYXRpb24gVGhlIGFtb3VudCBvZiB0aW1lIHRvIHRha2Ugc2Nyb2xsaW5nIHRvIHRoZSB0b3AuIERlZmF1bHRzIHRvIGAwYC5cbiAgICovXG4gIHNjcm9sbFRvVG9wKGR1cmF0aW9uID0gMCkge1xuICAgIHJldHVybiB0aGlzLnNjcm9sbFRvUG9pbnQodW5kZWZpbmVkLCAwLCBkdXJhdGlvbik7XG4gIH1cbiAgLyoqXG4gICAqIFNjcm9sbCB0byB0aGUgYm90dG9tIG9mIHRoZSBjb21wb25lbnQuXG4gICAqXG4gICAqIEBwYXJhbSBkdXJhdGlvbiBUaGUgYW1vdW50IG9mIHRpbWUgdG8gdGFrZSBzY3JvbGxpbmcgdG8gdGhlIGJvdHRvbS4gRGVmYXVsdHMgdG8gYDBgLlxuICAgKi9cbiAgYXN5bmMgc2Nyb2xsVG9Cb3R0b20oZHVyYXRpb24gPSAwKSB7XG4gICAgY29uc3Qgc2Nyb2xsRWwgPSBhd2FpdCB0aGlzLmdldFNjcm9sbEVsZW1lbnQoKTtcbiAgICBjb25zdCB5ID0gc2Nyb2xsRWwuc2Nyb2xsSGVpZ2h0IC0gc2Nyb2xsRWwuY2xpZW50SGVpZ2h0O1xuICAgIHJldHVybiB0aGlzLnNjcm9sbFRvUG9pbnQodW5kZWZpbmVkLCB5LCBkdXJhdGlvbik7XG4gIH1cbiAgLyoqXG4gICAqIFNjcm9sbCBieSBhIHNwZWNpZmllZCBYL1kgZGlzdGFuY2UgaW4gdGhlIGNvbXBvbmVudC5cbiAgICpcbiAgICogQHBhcmFtIHggVGhlIGFtb3VudCB0byBzY3JvbGwgYnkgb24gdGhlIGhvcml6b250YWwgYXhpcy5cbiAgICogQHBhcmFtIHkgVGhlIGFtb3VudCB0byBzY3JvbGwgYnkgb24gdGhlIHZlcnRpY2FsIGF4aXMuXG4gICAqIEBwYXJhbSBkdXJhdGlvbiBUaGUgYW1vdW50IG9mIHRpbWUgdG8gdGFrZSBzY3JvbGxpbmcgYnkgdGhhdCBhbW91bnQuXG4gICAqL1xuICBhc3luYyBzY3JvbGxCeVBvaW50KHgsIHksIGR1cmF0aW9uKSB7XG4gICAgY29uc3Qgc2Nyb2xsRWwgPSBhd2FpdCB0aGlzLmdldFNjcm9sbEVsZW1lbnQoKTtcbiAgICByZXR1cm4gdGhpcy5zY3JvbGxUb1BvaW50KHggKyBzY3JvbGxFbC5zY3JvbGxMZWZ0LCB5ICsgc2Nyb2xsRWwuc2Nyb2xsVG9wLCBkdXJhdGlvbik7XG4gIH1cbiAgLyoqXG4gICAqIFNjcm9sbCB0byBhIHNwZWNpZmllZCBYL1kgbG9jYXRpb24gaW4gdGhlIGNvbXBvbmVudC5cbiAgICpcbiAgICogQHBhcmFtIHggVGhlIHBvaW50IHRvIHNjcm9sbCB0byBvbiB0aGUgaG9yaXpvbnRhbCBheGlzLlxuICAgKiBAcGFyYW0geSBUaGUgcG9pbnQgdG8gc2Nyb2xsIHRvIG9uIHRoZSB2ZXJ0aWNhbCBheGlzLlxuICAgKiBAcGFyYW0gZHVyYXRpb24gVGhlIGFtb3VudCBvZiB0aW1lIHRvIHRha2Ugc2Nyb2xsaW5nIHRvIHRoYXQgcG9pbnQuIERlZmF1bHRzIHRvIGAwYC5cbiAgICovXG4gIGFzeW5jIHNjcm9sbFRvUG9pbnQoeCwgeSwgZHVyYXRpb24gPSAwKSB7XG4gICAgY29uc3QgZWwgPSBhd2FpdCB0aGlzLmdldFNjcm9sbEVsZW1lbnQoKTtcbiAgICBpZiAoZHVyYXRpb24gPCAzMikge1xuICAgICAgaWYgKHkgIT0gbnVsbCkge1xuICAgICAgICBlbC5zY3JvbGxUb3AgPSB5O1xuICAgICAgfVxuICAgICAgaWYgKHggIT0gbnVsbCkge1xuICAgICAgICBlbC5zY3JvbGxMZWZ0ID0geDtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHJlc29sdmU7XG4gICAgbGV0IHN0YXJ0VGltZSA9IDA7XG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKHIgPT4gcmVzb2x2ZSA9IHIpO1xuICAgIGNvbnN0IGZyb21ZID0gZWwuc2Nyb2xsVG9wO1xuICAgIGNvbnN0IGZyb21YID0gZWwuc2Nyb2xsTGVmdDtcbiAgICBjb25zdCBkZWx0YVkgPSB5ICE9IG51bGwgPyB5IC0gZnJvbVkgOiAwO1xuICAgIGNvbnN0IGRlbHRhWCA9IHggIT0gbnVsbCA/IHggLSBmcm9tWCA6IDA7XG4gICAgLy8gc2Nyb2xsIGxvb3BcbiAgICBjb25zdCBzdGVwID0gdGltZVN0YW1wID0+IHtcbiAgICAgIGNvbnN0IGxpbmVhclRpbWUgPSBNYXRoLm1pbigxLCAodGltZVN0YW1wIC0gc3RhcnRUaW1lKSAvIGR1cmF0aW9uKSAtIDE7XG4gICAgICBjb25zdCBlYXNlZFQgPSBNYXRoLnBvdyhsaW5lYXJUaW1lLCAzKSArIDE7XG4gICAgICBpZiAoZGVsdGFZICE9PSAwKSB7XG4gICAgICAgIGVsLnNjcm9sbFRvcCA9IE1hdGguZmxvb3IoZWFzZWRUICogZGVsdGFZICsgZnJvbVkpO1xuICAgICAgfVxuICAgICAgaWYgKGRlbHRhWCAhPT0gMCkge1xuICAgICAgICBlbC5zY3JvbGxMZWZ0ID0gTWF0aC5mbG9vcihlYXNlZFQgKiBkZWx0YVggKyBmcm9tWCk7XG4gICAgICB9XG4gICAgICBpZiAoZWFzZWRUIDwgMSkge1xuICAgICAgICAvLyBkbyBub3QgdXNlIERvbUNvbnRyb2xsZXIgaGVyZVxuICAgICAgICAvLyBtdXN0IHVzZSBuYXRpdmVSYWYgaW4gb3JkZXIgdG8gZmlyZSBpbiB0aGUgbmV4dCBmcmFtZVxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9XG4gICAgfTtcbiAgICAvLyBjaGlsbCBvdXQgZm9yIGEgZnJhbWUgZmlyc3RcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodHMgPT4ge1xuICAgICAgc3RhcnRUaW1lID0gdHM7XG4gICAgICBzdGVwKHRzKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuICBvblNjcm9sbFN0YXJ0KCkge1xuICAgIHRoaXMuaXNTY3JvbGxpbmcgPSB0cnVlO1xuICAgIHRoaXMuaW9uU2Nyb2xsU3RhcnQuZW1pdCh7XG4gICAgICBpc1Njcm9sbGluZzogdHJ1ZVxuICAgIH0pO1xuICAgIGlmICh0aGlzLndhdGNoRG9nKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMud2F0Y2hEb2cpO1xuICAgIH1cbiAgICAvLyB3YXRjaGRvZ1xuICAgIHRoaXMud2F0Y2hEb2cgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5sYXN0U2Nyb2xsIDwgRGF0ZS5ub3coKSAtIDEyMCkge1xuICAgICAgICB0aGlzLm9uU2Nyb2xsRW5kKCk7XG4gICAgICB9XG4gICAgfSwgMTAwKTtcbiAgfVxuICBvblNjcm9sbEVuZCgpIHtcbiAgICBpZiAodGhpcy53YXRjaERvZykgY2xlYXJJbnRlcnZhbCh0aGlzLndhdGNoRG9nKTtcbiAgICB0aGlzLndhdGNoRG9nID0gbnVsbDtcbiAgICBpZiAodGhpcy5pc1Njcm9sbGluZykge1xuICAgICAgdGhpcy5pc1Njcm9sbGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5pb25TY3JvbGxFbmQuZW1pdCh7XG4gICAgICAgIGlzU2Nyb2xsaW5nOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBmaXhlZFNsb3RQbGFjZW1lbnQsXG4gICAgICBpbmhlcml0ZWRBdHRyaWJ1dGVzLFxuICAgICAgaXNNYWluQ29udGVudCxcbiAgICAgIHNjcm9sbFgsXG4gICAgICBzY3JvbGxZLFxuICAgICAgZWxcbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCBydGwgPSBpc1JUTChlbCkgPyAncnRsJyA6ICdsdHInO1xuICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgIGNvbnN0IGZvcmNlT3ZlcnNjcm9sbCA9IHRoaXMuc2hvdWxkRm9yY2VPdmVyc2Nyb2xsKCk7XG4gICAgY29uc3QgdHJhbnNpdGlvblNoYWRvdyA9IG1vZGUgPT09ICdpb3MnO1xuICAgIHRoaXMucmVzaXplKCk7XG4gICAgcmV0dXJuIGgoSG9zdCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICBrZXk6ICdmMmEyNGFhNjZkYmY1Yzc2ZjlkNGIwNmY3MDhlYjczY2FkYzIzOWRmJyxcbiAgICAgIHJvbGU6IGlzTWFpbkNvbnRlbnQgPyAnbWFpbicgOiB1bmRlZmluZWQsXG4gICAgICBjbGFzczogY3JlYXRlQ29sb3JDbGFzc2VzKHRoaXMuY29sb3IsIHtcbiAgICAgICAgW21vZGVdOiB0cnVlLFxuICAgICAgICAnY29udGVudC1zaXppbmcnOiBob3N0Q29udGV4dCgnaW9uLXBvcG92ZXInLCB0aGlzLmVsKSxcbiAgICAgICAgb3ZlcnNjcm9sbDogZm9yY2VPdmVyc2Nyb2xsLFxuICAgICAgICBbYGNvbnRlbnQtJHtydGx9YF06IHRydWVcbiAgICAgIH0pLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgJy0tb2Zmc2V0LXRvcCc6IGAke3RoaXMuY1RvcH1weGAsXG4gICAgICAgICctLW9mZnNldC1ib3R0b20nOiBgJHt0aGlzLmNCb3R0b219cHhgXG4gICAgICB9XG4gICAgfSwgaW5oZXJpdGVkQXR0cmlidXRlcyksIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnNjQ4MGNhNzY0OGIyNzhhYmIzNjQ3N2IzODM4YmNjYmNkNDk5NWUyYScsXG4gICAgICByZWY6IGVsID0+IHRoaXMuYmFja2dyb3VuZENvbnRlbnRFbCA9IGVsLFxuICAgICAgaWQ6IFwiYmFja2dyb3VuZC1jb250ZW50XCIsXG4gICAgICBwYXJ0OiBcImJhY2tncm91bmRcIlxuICAgIH0pLCBmaXhlZFNsb3RQbGFjZW1lbnQgPT09ICdiZWZvcmUnID8gaChcInNsb3RcIiwge1xuICAgICAgbmFtZTogXCJmaXhlZFwiXG4gICAgfSkgOiBudWxsLCBoKFwiZGl2XCIsIHtcbiAgICAgIGtleTogJzI5YTIzYjY2M2Y1ZjAyMTViYjAwMDgyMGMwMWUxODE0YzBkNTU5ODUnLFxuICAgICAgY2xhc3M6IHtcbiAgICAgICAgJ2lubmVyLXNjcm9sbCc6IHRydWUsXG4gICAgICAgICdzY3JvbGwteCc6IHNjcm9sbFgsXG4gICAgICAgICdzY3JvbGwteSc6IHNjcm9sbFksXG4gICAgICAgIG92ZXJzY3JvbGw6IChzY3JvbGxYIHx8IHNjcm9sbFkpICYmIGZvcmNlT3ZlcnNjcm9sbFxuICAgICAgfSxcbiAgICAgIHJlZjogc2Nyb2xsRWwgPT4gdGhpcy5zY3JvbGxFbCA9IHNjcm9sbEVsLFxuICAgICAgb25TY3JvbGw6IHRoaXMuc2Nyb2xsRXZlbnRzID8gZXYgPT4gdGhpcy5vblNjcm9sbChldikgOiB1bmRlZmluZWQsXG4gICAgICBwYXJ0OiBcInNjcm9sbFwiXG4gICAgfSwgaChcInNsb3RcIiwge1xuICAgICAga2V5OiAnMGZlMWJkMDU2MDlhNGI4OGFlMmNlOWFkZGY1ZDVkYzVkYzE4MDZmMCdcbiAgICB9KSksIHRyYW5zaXRpb25TaGFkb3cgPyBoKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBcInRyYW5zaXRpb24tZWZmZWN0XCJcbiAgICB9LCBoKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBcInRyYW5zaXRpb24tY292ZXJcIlxuICAgIH0pLCBoKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBcInRyYW5zaXRpb24tc2hhZG93XCJcbiAgICB9KSkgOiBudWxsLCBmaXhlZFNsb3RQbGFjZW1lbnQgPT09ICdhZnRlcicgPyBoKFwic2xvdFwiLCB7XG4gICAgICBuYW1lOiBcImZpeGVkXCJcbiAgICB9KSA6IG51bGwpO1xuICB9XG4gIGdldCBlbCgpIHtcbiAgICByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTtcbiAgfVxufTtcbmNvbnN0IGdldFBhcmVudEVsZW1lbnQgPSBlbCA9PiB7XG4gIHZhciBfYTtcbiAgaWYgKGVsLnBhcmVudEVsZW1lbnQpIHtcbiAgICAvLyBub3JtYWwgZWxlbWVudCB3aXRoIGEgcGFyZW50IGVsZW1lbnRcbiAgICByZXR1cm4gZWwucGFyZW50RWxlbWVudDtcbiAgfVxuICBpZiAoKF9hID0gZWwucGFyZW50Tm9kZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmhvc3QpIHtcbiAgICAvLyBzaGFkb3cgZG9tJ3MgZG9jdW1lbnQgZnJhZ21lbnRcbiAgICByZXR1cm4gZWwucGFyZW50Tm9kZS5ob3N0O1xuICB9XG4gIHJldHVybiBudWxsO1xufTtcbmNvbnN0IGdldFBhZ2VFbGVtZW50ID0gZWwgPT4ge1xuICBjb25zdCB0YWJzID0gZWwuY2xvc2VzdCgnaW9uLXRhYnMnKTtcbiAgaWYgKHRhYnMpIHtcbiAgICByZXR1cm4gdGFicztcbiAgfVxuICAvKipcbiAgICogSWYgd2UncmUgaW4gYSBwb3BvdmVyLCB3ZSBuZWVkIHRvIHVzZSBpdHMgd3JhcHBlciBzbyB3ZSBjYW4gYWNjb3VudCBmb3Igc3BhY2VcbiAgICogYmV0d2VlbiB0aGUgcG9wb3ZlciBhbmQgdGhlIGVkZ2VzIG9mIHRoZSBzY3JlZW4uIEJ1dCBpZiB0aGUgcG9wb3ZlciBjb250YWluc1xuICAgKiBpdHMgb3duIHBhZ2UgZWxlbWVudCwgd2Ugc2hvdWxkIHVzZSB0aGF0IGluc3RlYWQuXG4gICAqL1xuICBjb25zdCBwYWdlID0gZWwuY2xvc2VzdCgnaW9uLWFwcCwgaW9uLXBhZ2UsIC5pb24tcGFnZSwgcGFnZS1pbm5lciwgLnBvcG92ZXItY29udGVudCcpO1xuICBpZiAocGFnZSkge1xuICAgIHJldHVybiBwYWdlO1xuICB9XG4gIHJldHVybiBnZXRQYXJlbnRFbGVtZW50KGVsKTtcbn07XG4vLyAqKioqKioqKiBET00gUkVBRCAqKioqKioqKioqKioqKioqXG5jb25zdCB1cGRhdGVTY3JvbGxEZXRhaWwgPSAoZGV0YWlsLCBlbCwgdGltZXN0YW1wLCBzaG91bGRTdGFydCkgPT4ge1xuICBjb25zdCBwcmV2WCA9IGRldGFpbC5jdXJyZW50WDtcbiAgY29uc3QgcHJldlkgPSBkZXRhaWwuY3VycmVudFk7XG4gIGNvbnN0IHByZXZUID0gZGV0YWlsLmN1cnJlbnRUaW1lO1xuICBjb25zdCBjdXJyZW50WCA9IGVsLnNjcm9sbExlZnQ7XG4gIGNvbnN0IGN1cnJlbnRZID0gZWwuc2Nyb2xsVG9wO1xuICBjb25zdCB0aW1lRGVsdGEgPSB0aW1lc3RhbXAgLSBwcmV2VDtcbiAgaWYgKHNob3VsZFN0YXJ0KSB7XG4gICAgLy8gcmVtZW1iZXIgdGhlIHN0YXJ0IHBvc2l0aW9uc1xuICAgIGRldGFpbC5zdGFydFRpbWUgPSB0aW1lc3RhbXA7XG4gICAgZGV0YWlsLnN0YXJ0WCA9IGN1cnJlbnRYO1xuICAgIGRldGFpbC5zdGFydFkgPSBjdXJyZW50WTtcbiAgICBkZXRhaWwudmVsb2NpdHlYID0gZGV0YWlsLnZlbG9jaXR5WSA9IDA7XG4gIH1cbiAgZGV0YWlsLmN1cnJlbnRUaW1lID0gdGltZXN0YW1wO1xuICBkZXRhaWwuY3VycmVudFggPSBkZXRhaWwuc2Nyb2xsTGVmdCA9IGN1cnJlbnRYO1xuICBkZXRhaWwuY3VycmVudFkgPSBkZXRhaWwuc2Nyb2xsVG9wID0gY3VycmVudFk7XG4gIGRldGFpbC5kZWx0YVggPSBjdXJyZW50WCAtIGRldGFpbC5zdGFydFg7XG4gIGRldGFpbC5kZWx0YVkgPSBjdXJyZW50WSAtIGRldGFpbC5zdGFydFk7XG4gIGlmICh0aW1lRGVsdGEgPiAwICYmIHRpbWVEZWx0YSA8IDEwMCkge1xuICAgIGNvbnN0IHZlbG9jaXR5WCA9IChjdXJyZW50WCAtIHByZXZYKSAvIHRpbWVEZWx0YTtcbiAgICBjb25zdCB2ZWxvY2l0eVkgPSAoY3VycmVudFkgLSBwcmV2WSkgLyB0aW1lRGVsdGE7XG4gICAgZGV0YWlsLnZlbG9jaXR5WCA9IHZlbG9jaXR5WCAqIDAuNyArIGRldGFpbC52ZWxvY2l0eVggKiAwLjM7XG4gICAgZGV0YWlsLnZlbG9jaXR5WSA9IHZlbG9jaXR5WSAqIDAuNyArIGRldGFpbC52ZWxvY2l0eVkgKiAwLjM7XG4gIH1cbn07XG5Db250ZW50LnN0eWxlID0gY29udGVudENzcztcbmNvbnN0IGhhbmRsZUZvb3RlckZhZGUgPSAoc2Nyb2xsRWwsIGJhc2VFbCkgPT4ge1xuICByZWFkVGFzaygoKSA9PiB7XG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gc2Nyb2xsRWwuc2Nyb2xsVG9wO1xuICAgIGNvbnN0IG1heFNjcm9sbCA9IHNjcm9sbEVsLnNjcm9sbEhlaWdodCAtIHNjcm9sbEVsLmNsaWVudEhlaWdodDtcbiAgICAvKipcbiAgICAgKiBUb29sYmFyIGJhY2tncm91bmQgd2lsbCBmYWRlXG4gICAgICogb3V0IG92ZXIgZmFkZUR1cmF0aW9uIGluIHBpeGVscy5cbiAgICAgKi9cbiAgICBjb25zdCBmYWRlRHVyYXRpb24gPSAxMDtcbiAgICAvKipcbiAgICAgKiBCZWdpbiBmYWRpbmcgb3V0IG1heFNjcm9sbCAtIDMwcHhcbiAgICAgKiBmcm9tIHRoZSBib3R0b20gb2YgdGhlIGNvbnRlbnQuXG4gICAgICogQWxzbyBkZXRlcm1pbmUgaG93IGNsb3NlIHdlIGFyZVxuICAgICAqIHRvIHN0YXJ0aW5nIHRoZSBmYWRlLiBJZiB3ZSBhcmVcbiAgICAgKiBiZWZvcmUgdGhlIHN0YXJ0aW5nIHBvaW50LCB0aGVcbiAgICAgKiBzY2FsZSB2YWx1ZSB3aWxsIGdldCBjbGFtcGVkIHRvIDAuXG4gICAgICogSWYgd2UgYXJlIGFmdGVyIHRoZSBtYXhTY3JvbGwgKHJ1YmJlclxuICAgICAqIGJhbmQgc2Nyb2xsaW5nKSwgdGhlIHNjYWxlIHZhbHVlIHdpbGxcbiAgICAgKiBnZXQgY2xhbXBlZCB0byAxLlxuICAgICAqL1xuICAgIGNvbnN0IGZhZGVTdGFydCA9IG1heFNjcm9sbCAtIGZhZGVEdXJhdGlvbjtcbiAgICBjb25zdCBkaXN0YW5jZVRvU3RhcnQgPSBzY3JvbGxUb3AgLSBmYWRlU3RhcnQ7XG4gICAgY29uc3Qgc2NhbGUgPSBjbGFtcCgwLCAxIC0gZGlzdGFuY2VUb1N0YXJ0IC8gZmFkZUR1cmF0aW9uLCAxKTtcbiAgICB3cml0ZVRhc2soKCkgPT4ge1xuICAgICAgYmFzZUVsLnN0eWxlLnNldFByb3BlcnR5KCctLW9wYWNpdHktc2NhbGUnLCBzY2FsZS50b1N0cmluZygpKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuY29uc3QgZm9vdGVySW9zQ3NzID0gXCJpb24tZm9vdGVye2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtb3JkZXI6MTtvcmRlcjoxO3dpZHRoOjEwMCU7ei1pbmRleDoxMH1pb24tZm9vdGVyLmZvb3Rlci10b29sYmFyLXBhZGRpbmcgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBle3BhZGRpbmctYm90dG9tOnZhcigtLWlvbi1zYWZlLWFyZWEtYm90dG9tLCAwKX0uZm9vdGVyLWlvcyBpb24tdG9vbGJhcjpmaXJzdC1vZi10eXBley0tYm9yZGVyLXdpZHRoOjAuNTVweCAwIDB9QHN1cHBvcnRzICgoLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMCkpIG9yIChiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMCkpKXsuZm9vdGVyLWJhY2tncm91bmR7bGVmdDowO3JpZ2h0OjA7dG9wOjA7Ym90dG9tOjA7cG9zaXRpb246YWJzb2x1dGU7LXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6c2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KTtiYWNrZHJvcC1maWx0ZXI6c2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KX0uZm9vdGVyLXRyYW5zbHVjZW50LWlvcyBpb24tdG9vbGJhcnstLW9wYWNpdHk6Ljh9fS5mb290ZXItaW9zLmlvbi1uby1ib3JkZXIgaW9uLXRvb2xiYXI6Zmlyc3Qtb2YtdHlwZXstLWJvcmRlci13aWR0aDowfS5mb290ZXItY29sbGFwc2UtZmFkZSBpb24tdG9vbGJhcnstLW9wYWNpdHktc2NhbGU6aW5oZXJpdH1cIjtcbmNvbnN0IGZvb3Rlck1kQ3NzID0gXCJpb24tZm9vdGVye2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtb3JkZXI6MTtvcmRlcjoxO3dpZHRoOjEwMCU7ei1pbmRleDoxMH1pb24tZm9vdGVyLmZvb3Rlci10b29sYmFyLXBhZGRpbmcgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBle3BhZGRpbmctYm90dG9tOnZhcigtLWlvbi1zYWZlLWFyZWEtYm90dG9tLCAwKX0uZm9vdGVyLW1key13ZWJraXQtYm94LXNoYWRvdzowIDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNHB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO2JveC1zaGFkb3c6MCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDRweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKX0uZm9vdGVyLW1kLmlvbi1uby1ib3JkZXJ7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lfVwiO1xuY29uc3QgRm9vdGVyID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmtleWJvYXJkQ3RybCA9IG51bGw7XG4gICAgdGhpcy5rZXlib2FyZFZpc2libGUgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBmb290ZXIgd2lsbCBiZSB0cmFuc2x1Y2VudC5cbiAgICAgKiBPbmx5IGFwcGxpZXMgd2hlbiB0aGUgbW9kZSBpcyBgXCJpb3NcImAgYW5kIHRoZSBkZXZpY2Ugc3VwcG9ydHNcbiAgICAgKiBbYGJhY2tkcm9wLWZpbHRlcmBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9iYWNrZHJvcC1maWx0ZXIjQnJvd3Nlcl9jb21wYXRpYmlsaXR5KS5cbiAgICAgKlxuICAgICAqIE5vdGU6IEluIG9yZGVyIHRvIHNjcm9sbCBjb250ZW50IGJlaGluZCB0aGUgZm9vdGVyLCB0aGUgYGZ1bGxzY3JlZW5gXG4gICAgICogYXR0cmlidXRlIG5lZWRzIHRvIGJlIHNldCBvbiB0aGUgY29udGVudC5cbiAgICAgKi9cbiAgICB0aGlzLnRyYW5zbHVjZW50ID0gZmFsc2U7XG4gICAgdGhpcy5jaGVja0NvbGxhcHNpYmxlRm9vdGVyID0gKCkgPT4ge1xuICAgICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICBpZiAobW9kZSAhPT0gJ2lvcycpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qge1xuICAgICAgICBjb2xsYXBzZVxuICAgICAgfSA9IHRoaXM7XG4gICAgICBjb25zdCBoYXNGYWRlID0gY29sbGFwc2UgPT09ICdmYWRlJztcbiAgICAgIHRoaXMuZGVzdHJveUNvbGxhcHNpYmxlRm9vdGVyKCk7XG4gICAgICBpZiAoaGFzRmFkZSkge1xuICAgICAgICBjb25zdCBwYWdlRWwgPSB0aGlzLmVsLmNsb3Nlc3QoJ2lvbi1hcHAsaW9uLXBhZ2UsLmlvbi1wYWdlLHBhZ2UtaW5uZXInKTtcbiAgICAgICAgY29uc3QgY29udGVudEVsID0gcGFnZUVsID8gZmluZElvbkNvbnRlbnQocGFnZUVsKSA6IG51bGw7XG4gICAgICAgIGlmICghY29udGVudEVsKSB7XG4gICAgICAgICAgcHJpbnRJb25Db250ZW50RXJyb3JNc2codGhpcy5lbCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0dXBGYWRlRm9vdGVyKGNvbnRlbnRFbCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnNldHVwRmFkZUZvb3RlciA9IGFzeW5jIGNvbnRlbnRFbCA9PiB7XG4gICAgICBjb25zdCBzY3JvbGxFbCA9IHRoaXMuc2Nyb2xsRWwgPSBhd2FpdCBnZXRTY3JvbGxFbGVtZW50KGNvbnRlbnRFbCk7XG4gICAgICAvKipcbiAgICAgICAqIEhhbmRsZSBmYWRpbmcgb2YgdG9vbGJhcnMgb24gc2Nyb2xsXG4gICAgICAgKi9cbiAgICAgIHRoaXMuY29udGVudFNjcm9sbENhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICBoYW5kbGVGb290ZXJGYWRlKHNjcm9sbEVsLCB0aGlzLmVsKTtcbiAgICAgIH07XG4gICAgICBzY3JvbGxFbC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmNvbnRlbnRTY3JvbGxDYWxsYmFjayk7XG4gICAgICBoYW5kbGVGb290ZXJGYWRlKHNjcm9sbEVsLCB0aGlzLmVsKTtcbiAgICB9O1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgdGhpcy5jaGVja0NvbGxhcHNpYmxlRm9vdGVyKCk7XG4gIH1cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMuY2hlY2tDb2xsYXBzaWJsZUZvb3RlcigpO1xuICB9XG4gIGFzeW5jIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMua2V5Ym9hcmRDdHJsID0gYXdhaXQgY3JlYXRlS2V5Ym9hcmRDb250cm9sbGVyKGFzeW5jIChrZXlib2FyZE9wZW4sIHdhaXRGb3JSZXNpemUpID0+IHtcbiAgICAgIC8qKlxuICAgICAgICogSWYgdGhlIGtleWJvYXJkIGlzIGhpZGluZywgdGhlbiB3ZSBuZWVkIHRvIHdhaXRcbiAgICAgICAqIGZvciB0aGUgd2VidmlldyB0byByZXNpemUuIE90aGVyd2lzZSwgdGhlIGZvb3RlclxuICAgICAgICogd2lsbCBmbGlja2VyIGJlZm9yZSB0aGUgd2VidmlldyByZXNpemVzLlxuICAgICAgICovXG4gICAgICBpZiAoa2V5Ym9hcmRPcGVuID09PSBmYWxzZSAmJiB3YWl0Rm9yUmVzaXplICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgYXdhaXQgd2FpdEZvclJlc2l6ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMua2V5Ym9hcmRWaXNpYmxlID0ga2V5Ym9hcmRPcGVuOyAvLyB0cmlnZ2VyIHJlLXJlbmRlciBieSB1cGRhdGluZyBzdGF0ZVxuICAgIH0pO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGlmICh0aGlzLmtleWJvYXJkQ3RybCkge1xuICAgICAgdGhpcy5rZXlib2FyZEN0cmwuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuICBkZXN0cm95Q29sbGFwc2libGVGb290ZXIoKSB7XG4gICAgaWYgKHRoaXMuc2Nyb2xsRWwgJiYgdGhpcy5jb250ZW50U2Nyb2xsQ2FsbGJhY2spIHtcbiAgICAgIHRoaXMuc2Nyb2xsRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5jb250ZW50U2Nyb2xsQ2FsbGJhY2spO1xuICAgICAgdGhpcy5jb250ZW50U2Nyb2xsQ2FsbGJhY2sgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB0cmFuc2x1Y2VudCxcbiAgICAgIGNvbGxhcHNlXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgY29uc3QgdGFicyA9IHRoaXMuZWwuY2xvc2VzdCgnaW9uLXRhYnMnKTtcbiAgICBjb25zdCB0YWJCYXIgPSB0YWJzID09PSBudWxsIHx8IHRhYnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRhYnMucXVlcnlTZWxlY3RvcignOnNjb3BlID4gaW9uLXRhYi1iYXInKTtcbiAgICByZXR1cm4gaChIb3N0LCB7XG4gICAgICBrZXk6ICdkZGMyMjhmMWExZTdmYTRmNzA3ZGNjZjc0ZGIyNDkwY2EzMjQxMTM3JyxcbiAgICAgIHJvbGU6IFwiY29udGVudGluZm9cIixcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgIFttb2RlXTogdHJ1ZSxcbiAgICAgICAgLy8gVXNlZCBpbnRlcm5hbGx5IGZvciBzdHlsaW5nXG4gICAgICAgIFtgZm9vdGVyLSR7bW9kZX1gXTogdHJ1ZSxcbiAgICAgICAgW2Bmb290ZXItdHJhbnNsdWNlbnRgXTogdHJhbnNsdWNlbnQsXG4gICAgICAgIFtgZm9vdGVyLXRyYW5zbHVjZW50LSR7bW9kZX1gXTogdHJhbnNsdWNlbnQsXG4gICAgICAgIFsnZm9vdGVyLXRvb2xiYXItcGFkZGluZyddOiAhdGhpcy5rZXlib2FyZFZpc2libGUgJiYgKCF0YWJCYXIgfHwgdGFiQmFyLnNsb3QgIT09ICdib3R0b20nKSxcbiAgICAgICAgW2Bmb290ZXItY29sbGFwc2UtJHtjb2xsYXBzZX1gXTogY29sbGFwc2UgIT09IHVuZGVmaW5lZFxuICAgICAgfVxuICAgIH0sIG1vZGUgPT09ICdpb3MnICYmIHRyYW5zbHVjZW50ICYmIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnZTE2ZWQ0OTYzZmY5NGUwNmRlNzdlYjgwMzgyMDE4MjBhZjczOTM3YycsXG4gICAgICBjbGFzczogXCJmb290ZXItYmFja2dyb3VuZFwiXG4gICAgfSksIGgoXCJzbG90XCIsIHtcbiAgICAgIGtleTogJ2YxODY5MzRmZWJmODVkMzcxMzNkOTM1MWE5NmMxYTY0YjBhNGIyMDMnXG4gICAgfSkpO1xuICB9XG4gIGdldCBlbCgpIHtcbiAgICByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTtcbiAgfVxufTtcbkZvb3Rlci5zdHlsZSA9IHtcbiAgaW9zOiBmb290ZXJJb3NDc3MsXG4gIG1kOiBmb290ZXJNZENzc1xufTtcbmNvbnN0IFRSQU5TSVRJT04gPSAnYWxsIDAuMnMgZWFzZS1pbi1vdXQnO1xuY29uc3QgY2xvbmVFbGVtZW50ID0gdGFnTmFtZSA9PiB7XG4gIGNvbnN0IGdldENhY2hlZEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHt0YWdOYW1lfS5pb24tY2xvbmVkLWVsZW1lbnRgKTtcbiAgaWYgKGdldENhY2hlZEVsICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIGdldENhY2hlZEVsO1xuICB9XG4gIGNvbnN0IGNsb25lZEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbiAgY2xvbmVkRWwuY2xhc3NMaXN0LmFkZCgnaW9uLWNsb25lZC1lbGVtZW50Jyk7XG4gIGNsb25lZEVsLnN0eWxlLnNldFByb3BlcnR5KCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjbG9uZWRFbCk7XG4gIHJldHVybiBjbG9uZWRFbDtcbn07XG5jb25zdCBjcmVhdGVIZWFkZXJJbmRleCA9IGhlYWRlckVsID0+IHtcbiAgaWYgKCFoZWFkZXJFbCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB0b29sYmFycyA9IGhlYWRlckVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lvbi10b29sYmFyJyk7XG4gIHJldHVybiB7XG4gICAgZWw6IGhlYWRlckVsLFxuICAgIHRvb2xiYXJzOiBBcnJheS5mcm9tKHRvb2xiYXJzKS5tYXAodG9vbGJhciA9PiB7XG4gICAgICBjb25zdCBpb25UaXRsZUVsID0gdG9vbGJhci5xdWVyeVNlbGVjdG9yKCdpb24tdGl0bGUnKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVsOiB0b29sYmFyLFxuICAgICAgICBiYWNrZ3JvdW5kOiB0b29sYmFyLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLnRvb2xiYXItYmFja2dyb3VuZCcpLFxuICAgICAgICBpb25UaXRsZUVsLFxuICAgICAgICBpbm5lclRpdGxlRWw6IGlvblRpdGxlRWwgPyBpb25UaXRsZUVsLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLnRvb2xiYXItdGl0bGUnKSA6IG51bGwsXG4gICAgICAgIGlvbkJ1dHRvbnNFbDogQXJyYXkuZnJvbSh0b29sYmFyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lvbi1idXR0b25zJykpXG4gICAgICB9O1xuICAgIH0pXG4gIH07XG59O1xuY29uc3QgaGFuZGxlQ29udGVudFNjcm9sbCA9IChzY3JvbGxFbCwgc2Nyb2xsSGVhZGVySW5kZXgsIGNvbnRlbnRFbCkgPT4ge1xuICByZWFkVGFzaygoKSA9PiB7XG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gc2Nyb2xsRWwuc2Nyb2xsVG9wO1xuICAgIGNvbnN0IHNjYWxlID0gY2xhbXAoMSwgMSArIC1zY3JvbGxUb3AgLyA1MDAsIDEuMSk7XG4gICAgLy8gTmF0aXZlIHJlZnJlc2hlciBzaG91bGQgbm90IGNhdXNlIHRpdGxlcyB0byBzY2FsZVxuICAgIGNvbnN0IG5hdGl2ZVJlZnJlc2hlciA9IGNvbnRlbnRFbC5xdWVyeVNlbGVjdG9yKCdpb24tcmVmcmVzaGVyLnJlZnJlc2hlci1uYXRpdmUnKTtcbiAgICBpZiAobmF0aXZlUmVmcmVzaGVyID09PSBudWxsKSB7XG4gICAgICB3cml0ZVRhc2soKCkgPT4ge1xuICAgICAgICBzY2FsZUxhcmdlVGl0bGVzKHNjcm9sbEhlYWRlckluZGV4LnRvb2xiYXJzLCBzY2FsZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufTtcbmNvbnN0IHNldFRvb2xiYXJCYWNrZ3JvdW5kT3BhY2l0eSA9IChoZWFkZXJFbCwgb3BhY2l0eSkgPT4ge1xuICAvKipcbiAgICogRmFkaW5nIGluIHRoZSBiYWNrZHJvcCBvcGFjaXR5XG4gICAqIHNob3VsZCBoYXBwZW4gYWZ0ZXIgdGhlIGxhcmdlIHRpdGxlXG4gICAqIGhhcyBjb2xsYXBzZWQsIHNvIGl0IGlzIGhhbmRsZWRcbiAgICogYnkgaGFuZGxlSGVhZGVyRmFkZSgpXG4gICAqL1xuICBpZiAoaGVhZGVyRWwuY29sbGFwc2UgPT09ICdmYWRlJykge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAob3BhY2l0eSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgaGVhZGVyRWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoJy0tb3BhY2l0eS1zY2FsZScpO1xuICB9IGVsc2Uge1xuICAgIGhlYWRlckVsLnN0eWxlLnNldFByb3BlcnR5KCctLW9wYWNpdHktc2NhbGUnLCBvcGFjaXR5LnRvU3RyaW5nKCkpO1xuICB9XG59O1xuY29uc3QgaGFuZGxlVG9vbGJhckJvcmRlckludGVyc2VjdGlvbiA9IChldiwgbWFpbkhlYWRlckluZGV4LCBzY3JvbGxUb3ApID0+IHtcbiAgaWYgKCFldlswXS5pc0ludGVyc2VjdGluZykge1xuICAgIHJldHVybjtcbiAgfVxuICAvKipcbiAgICogVGhlcmUgaXMgYSBidWcgaW4gU2FmYXJpIHdoZXJlIG92ZXJmbG93IHNjcm9sbGluZyBvbiBhIG5vbi1ib2R5IGVsZW1lbnRcbiAgICogZG9lcyBub3QgYWx3YXlzIHJlc2V0IHRoZSBzY3JvbGxUb3AgcG9zaXRpb24gdG8gMCB3aGVuIGxldHRpbmcgZ28uIEl0IHdpbGxcbiAgICogc2V0IHRvIDEgb25jZSB0aGUgcnViYmVyIGJhbmQgZWZmZWN0IGhhcyBlbmRlZC4gVGhpcyBjYXVzZXMgdGhlIGJhY2tncm91bmQgdG9cbiAgICogYXBwZWFyIHNsaWdodGx5IG9uIGNlcnRhaW4gYXBwIHNldHVwcy5cbiAgICpcbiAgICogQWRkaXRpb25hbGx5LCB3ZSBjaGVjayBpZiB1c2VyIGlzIHJ1YmJlciBiYW5kaW5nIChzY3JvbGxpbmcgaXMgbmVnYXRpdmUpXG4gICAqIGFzIHRoaXMgY2FuIG1lYW4gdGhleSBhcmUgdXNpbmcgcHVsbCB0byByZWZyZXNoLiBPbmNlIHRoZSByZWZyZXNoZXIgc3RhcnRzLFxuICAgKiB0aGUgY29udGVudCBpcyB0cmFuc2Zvcm1lZCB3aGljaCBjYW4gY2F1c2UgdGhlIGludGVyc2VjdGlvbiBvYnNlcnZlciB0byBlcnJvbmVvdXNseVxuICAgKiBmaXJlIGhlcmUgYXMgd2VsbC5cbiAgICovXG4gIGNvbnN0IHNjYWxlID0gZXZbMF0uaW50ZXJzZWN0aW9uUmF0aW8gPiAwLjkgfHwgc2Nyb2xsVG9wIDw9IDAgPyAwIDogKDEgLSBldlswXS5pbnRlcnNlY3Rpb25SYXRpbykgKiAxMDAgLyA3NTtcbiAgc2V0VG9vbGJhckJhY2tncm91bmRPcGFjaXR5KG1haW5IZWFkZXJJbmRleC5lbCwgc2NhbGUgPT09IDEgPyB1bmRlZmluZWQgOiBzY2FsZSk7XG59O1xuLyoqXG4gKiBJZiB0b29sYmFycyBhcmUgaW50ZXJzZWN0aW5nLCBoaWRlIHRoZSBzY3JvbGxhYmxlIHRvb2xiYXIgY29udGVudFxuICogYW5kIHNob3cgdGhlIHByaW1hcnkgdG9vbGJhciBjb250ZW50LiBJZiB0aGUgdG9vbGJhcnMgYXJlIG5vdCBpbnRlcnNlY3RpbmcsXG4gKiBoaWRlIHRoZSBwcmltYXJ5IHRvb2xiYXIgY29udGVudCBhbmQgc2hvdyB0aGUgc2Nyb2xsYWJsZSB0b29sYmFyIGNvbnRlbnRcbiAqL1xuY29uc3QgaGFuZGxlVG9vbGJhckludGVyc2VjdGlvbiA9IChldixcbi8vIFRPRE8oRlctMjgzMik6IHR5cGUgKEludGVyc2VjdGlvbk9ic2VydmVyRW50cnlbXSB0cmlnZ2VycyBlcnJvcnMgd2hpY2ggc2hvdWxkIGJlIHNvcnRlZClcbm1haW5IZWFkZXJJbmRleCwgc2Nyb2xsSGVhZGVySW5kZXgsIHNjcm9sbEVsKSA9PiB7XG4gIHdyaXRlVGFzaygoKSA9PiB7XG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gc2Nyb2xsRWwuc2Nyb2xsVG9wO1xuICAgIGhhbmRsZVRvb2xiYXJCb3JkZXJJbnRlcnNlY3Rpb24oZXYsIG1haW5IZWFkZXJJbmRleCwgc2Nyb2xsVG9wKTtcbiAgICBjb25zdCBldmVudCA9IGV2WzBdO1xuICAgIGNvbnN0IGludGVyc2VjdGlvbiA9IGV2ZW50LmludGVyc2VjdGlvblJlY3Q7XG4gICAgY29uc3QgaW50ZXJzZWN0aW9uQXJlYSA9IGludGVyc2VjdGlvbi53aWR0aCAqIGludGVyc2VjdGlvbi5oZWlnaHQ7XG4gICAgY29uc3Qgcm9vdEFyZWEgPSBldmVudC5yb290Qm91bmRzLndpZHRoICogZXZlbnQucm9vdEJvdW5kcy5oZWlnaHQ7XG4gICAgY29uc3QgaXNQYWdlSGlkZGVuID0gaW50ZXJzZWN0aW9uQXJlYSA9PT0gMCAmJiByb290QXJlYSA9PT0gMDtcbiAgICBjb25zdCBsZWZ0RGlmZiA9IE1hdGguYWJzKGludGVyc2VjdGlvbi5sZWZ0IC0gZXZlbnQuYm91bmRpbmdDbGllbnRSZWN0LmxlZnQpO1xuICAgIGNvbnN0IHJpZ2h0RGlmZiA9IE1hdGguYWJzKGludGVyc2VjdGlvbi5yaWdodCAtIGV2ZW50LmJvdW5kaW5nQ2xpZW50UmVjdC5yaWdodCk7XG4gICAgY29uc3QgaXNQYWdlVHJhbnNpdGlvbmluZyA9IGludGVyc2VjdGlvbkFyZWEgPiAwICYmIChsZWZ0RGlmZiA+PSA1IHx8IHJpZ2h0RGlmZiA+PSA1KTtcbiAgICBpZiAoaXNQYWdlSGlkZGVuIHx8IGlzUGFnZVRyYW5zaXRpb25pbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGV2ZW50LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICBzZXRIZWFkZXJBY3RpdmUobWFpbkhlYWRlckluZGV4LCBmYWxzZSk7XG4gICAgICBzZXRIZWFkZXJBY3RpdmUoc2Nyb2xsSGVhZGVySW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvKipcbiAgICAgICAqIFRoZXJlIGlzIGEgYnVnIHdpdGggSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgb24gU2FmYXJpXG4gICAgICAgKiB3aGVyZSBgZXZlbnQuaXNJbnRlcnNlY3RpbmcgPT09IGZhbHNlYCB3aGVuIGNhbmNlbGxpbmdcbiAgICAgICAqIGEgc3dpcGUgdG8gZ28gYmFjayBnZXN0dXJlLiBDaGVja2luZyB0aGUgaW50ZXJzZWN0aW9uXG4gICAgICAgKiB4LCB5LCB3aWR0aCwgYW5kIGhlaWdodCBwcm92aWRlcyBhIHdvcmthcm91bmQuIFRoaXMgYnVnXG4gICAgICAgKiBkb2VzIG5vdCBoYXBwZW4gd2hlbiB1c2luZyBTYWZhcmkgKyBXZWIgQW5pbWF0aW9ucyxcbiAgICAgICAqIG9ubHkgU2FmYXJpICsgQ1NTIEFuaW1hdGlvbnMuXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IGhhc1ZhbGlkSW50ZXJzZWN0aW9uID0gaW50ZXJzZWN0aW9uLnggPT09IDAgJiYgaW50ZXJzZWN0aW9uLnkgPT09IDAgfHwgaW50ZXJzZWN0aW9uLndpZHRoICE9PSAwICYmIGludGVyc2VjdGlvbi5oZWlnaHQgIT09IDA7XG4gICAgICBpZiAoaGFzVmFsaWRJbnRlcnNlY3Rpb24gJiYgc2Nyb2xsVG9wID4gMCkge1xuICAgICAgICBzZXRIZWFkZXJBY3RpdmUobWFpbkhlYWRlckluZGV4KTtcbiAgICAgICAgc2V0SGVhZGVyQWN0aXZlKHNjcm9sbEhlYWRlckluZGV4LCBmYWxzZSk7XG4gICAgICAgIHNldFRvb2xiYXJCYWNrZ3JvdW5kT3BhY2l0eShtYWluSGVhZGVySW5kZXguZWwpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59O1xuY29uc3Qgc2V0SGVhZGVyQWN0aXZlID0gKGhlYWRlckluZGV4LCBhY3RpdmUgPSB0cnVlKSA9PiB7XG4gIGNvbnN0IGhlYWRlckVsID0gaGVhZGVySW5kZXguZWw7XG4gIGNvbnN0IHRvb2xiYXJzID0gaGVhZGVySW5kZXgudG9vbGJhcnM7XG4gIGNvbnN0IGlvblRpdGxlcyA9IHRvb2xiYXJzLm1hcCh0b29sYmFyID0+IHRvb2xiYXIuaW9uVGl0bGVFbCk7XG4gIGlmIChhY3RpdmUpIHtcbiAgICBoZWFkZXJFbC5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXItY29sbGFwc2UtY29uZGVuc2UtaW5hY3RpdmUnKTtcbiAgICBpb25UaXRsZXMuZm9yRWFjaChpb25UaXRsZSA9PiB7XG4gICAgICBpZiAoaW9uVGl0bGUpIHtcbiAgICAgICAgaW9uVGl0bGUucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGhlYWRlckVsLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1jb2xsYXBzZS1jb25kZW5zZS1pbmFjdGl2ZScpO1xuICAgIC8qKlxuICAgICAqIFRoZSBzbWFsbCB0aXRsZSBzaG91bGQgb25seSBiZSBhY2Nlc3NlZCBieSBzY3JlZW4gcmVhZGVyc1xuICAgICAqIHdoZW4gdGhlIGxhcmdlIHRpdGxlIGNvbGxhcHNlcyBpbnRvIHRoZSBzbWFsbCB0aXRsZSBkdWVcbiAgICAgKiB0byBzY3JvbGxpbmcuXG4gICAgICpcbiAgICAgKiBPcmlnaW5hbGx5LCB0aGUgaGVhZGVyIHdhcyBnaXZlbiBgYXJpYS1oaWRkZW49XCJ0cnVlXCJgXG4gICAgICogYnV0IHRoaXMgY2F1c2VkIGlzc3VlcyB3aXRoIHNjcmVlbiByZWFkZXJzIG5vdCBiZWluZ1xuICAgICAqIGFibGUgdG8gYWNjZXNzIGFueSBmb2N1c2FibGUgZWxlbWVudHMgd2l0aGluIHRoZSBoZWFkZXIuXG4gICAgICovXG4gICAgaW9uVGl0bGVzLmZvckVhY2goaW9uVGl0bGUgPT4ge1xuICAgICAgaWYgKGlvblRpdGxlKSB7XG4gICAgICAgIGlvblRpdGxlLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuY29uc3Qgc2NhbGVMYXJnZVRpdGxlcyA9ICh0b29sYmFycyA9IFtdLCBzY2FsZSA9IDEsIHRyYW5zaXRpb24gPSBmYWxzZSkgPT4ge1xuICB0b29sYmFycy5mb3JFYWNoKHRvb2xiYXIgPT4ge1xuICAgIGNvbnN0IGlvblRpdGxlID0gdG9vbGJhci5pb25UaXRsZUVsO1xuICAgIGNvbnN0IHRpdGxlRGl2ID0gdG9vbGJhci5pbm5lclRpdGxlRWw7XG4gICAgaWYgKCFpb25UaXRsZSB8fCBpb25UaXRsZS5zaXplICE9PSAnbGFyZ2UnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRpdGxlRGl2LnN0eWxlLnRyYW5zaXRpb24gPSB0cmFuc2l0aW9uID8gVFJBTlNJVElPTiA6ICcnO1xuICAgIHRpdGxlRGl2LnN0eWxlLnRyYW5zZm9ybSA9IGBzY2FsZTNkKCR7c2NhbGV9LCAke3NjYWxlfSwgMSlgO1xuICB9KTtcbn07XG5jb25zdCBoYW5kbGVIZWFkZXJGYWRlID0gKHNjcm9sbEVsLCBiYXNlRWwsIGNvbmRlbnNlSGVhZGVyKSA9PiB7XG4gIHJlYWRUYXNrKCgpID0+IHtcbiAgICBjb25zdCBzY3JvbGxUb3AgPSBzY3JvbGxFbC5zY3JvbGxUb3A7XG4gICAgY29uc3QgYmFzZUVsSGVpZ2h0ID0gYmFzZUVsLmNsaWVudEhlaWdodDtcbiAgICBjb25zdCBmYWRlU3RhcnQgPSBjb25kZW5zZUhlYWRlciA/IGNvbmRlbnNlSGVhZGVyLmNsaWVudEhlaWdodCA6IDA7XG4gICAgLyoqXG4gICAgICogSWYgd2UgYXJlIHVzaW5nIGZhZGUgaGVhZGVyIHdpdGggYSBjb25kZW5zZVxuICAgICAqIGhlYWRlciwgdGhlbiB0aGUgdG9vbGJhciBiYWNrZ3JvdW5kcyBzaG91bGRcbiAgICAgKiBub3QgYmVnaW4gdG8gZmFkZSBpbiB1bnRpbCB0aGUgY29uZGVuc2VcbiAgICAgKiBoZWFkZXIgaGFzIGZ1bGx5IGNvbGxhcHNlZC5cbiAgICAgKlxuICAgICAqIEFkZGl0aW9uYWxseSwgdGhlIG1haW4gY29udGVudCBzaG91bGQgbm90XG4gICAgICogb3ZlcmZsb3cgb3V0IG9mIHRoZSBjb250YWluZXIgdW50aWwgdGhlXG4gICAgICogY29uZGVuc2UgaGVhZGVyIGhhcyBmdWxseSBjb2xsYXBzZWQuIFdoZW5cbiAgICAgKiB1c2luZyBqdXN0IHRoZSBjb25kZW5zZSBoZWFkZXIgdGhlIGNvbnRlbnRcbiAgICAgKiBzaG91bGQgb3ZlcmZsb3cgb3V0IG9mIHRoZSBjb250YWluZXIuXG4gICAgICovXG4gICAgaWYgKGNvbmRlbnNlSGVhZGVyICE9PSBudWxsICYmIHNjcm9sbFRvcCA8IGZhZGVTdGFydCkge1xuICAgICAgYmFzZUVsLnN0eWxlLnNldFByb3BlcnR5KCctLW9wYWNpdHktc2NhbGUnLCAnMCcpO1xuICAgICAgc2Nyb2xsRWwuc3R5bGUuc2V0UHJvcGVydHkoJ2NsaXAtcGF0aCcsIGBpbnNldCgke2Jhc2VFbEhlaWdodH1weCAwcHggMHB4IDBweClgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZGlzdGFuY2VUb1N0YXJ0ID0gc2Nyb2xsVG9wIC0gZmFkZVN0YXJ0O1xuICAgIGNvbnN0IGZhZGVEdXJhdGlvbiA9IDEwO1xuICAgIGNvbnN0IHNjYWxlID0gY2xhbXAoMCwgZGlzdGFuY2VUb1N0YXJ0IC8gZmFkZUR1cmF0aW9uLCAxKTtcbiAgICB3cml0ZVRhc2soKCkgPT4ge1xuICAgICAgc2Nyb2xsRWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2NsaXAtcGF0aCcpO1xuICAgICAgYmFzZUVsLnN0eWxlLnNldFByb3BlcnR5KCctLW9wYWNpdHktc2NhbGUnLCBzY2FsZS50b1N0cmluZygpKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuY29uc3QgaGVhZGVySW9zQ3NzID0gXCJpb24taGVhZGVye2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtb3JkZXI6LTE7b3JkZXI6LTE7d2lkdGg6MTAwJTt6LWluZGV4OjEwfWlvbi1oZWFkZXIgaW9uLXRvb2xiYXI6Zmlyc3Qtb2YtdHlwZXtwYWRkaW5nLXRvcDp2YXIoLS1pb24tc2FmZS1hcmVhLXRvcCwgMCl9LmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBley0tYm9yZGVyLXdpZHRoOjAgMCAwLjU1cHh9QHN1cHBvcnRzICgoLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMCkpIG9yIChiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMCkpKXsuaGVhZGVyLWJhY2tncm91bmR7bGVmdDowO3JpZ2h0OjA7dG9wOjA7Ym90dG9tOjA7cG9zaXRpb246YWJzb2x1dGU7LXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6c2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KTtiYWNrZHJvcC1maWx0ZXI6c2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KX0uaGVhZGVyLXRyYW5zbHVjZW50LWlvcyBpb24tdG9vbGJhcnstLW9wYWNpdHk6Ljh9LmhlYWRlci1jb2xsYXBzZS1jb25kZW5zZS1pbmFjdGl2ZSAuaGVhZGVyLWJhY2tncm91bmR7LXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6Ymx1cigyMHB4KTtiYWNrZHJvcC1maWx0ZXI6Ymx1cigyMHB4KX19LmhlYWRlci1pb3MuaW9uLW5vLWJvcmRlciBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGV7LS1ib3JkZXItd2lkdGg6MH0uaGVhZGVyLWNvbGxhcHNlLWZhZGUgaW9uLXRvb2xiYXJ7LS1vcGFjaXR5LXNjYWxlOmluaGVyaXR9LmhlYWRlci1jb2xsYXBzZS1jb25kZW5zZXt6LWluZGV4Ojl9LmhlYWRlci1jb2xsYXBzZS1jb25kZW5zZSBpb24tdG9vbGJhcntwb3NpdGlvbjotd2Via2l0LXN0aWNreTtwb3NpdGlvbjpzdGlja3k7dG9wOjB9LmhlYWRlci1jb2xsYXBzZS1jb25kZW5zZSBpb24tdG9vbGJhcjpmaXJzdC1vZi10eXBle3BhZGRpbmctdG9wOjBweDt6LWluZGV4OjF9LmhlYWRlci1jb2xsYXBzZS1jb25kZW5zZSBpb24tdG9vbGJhcnstLWJhY2tncm91bmQ6dmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpO3otaW5kZXg6MH0uaGVhZGVyLWNvbGxhcHNlLWNvbmRlbnNlIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZXstLWJvcmRlci13aWR0aDowcHh9LmhlYWRlci1jb2xsYXBzZS1jb25kZW5zZSBpb24tdG9vbGJhciBpb24tc2VhcmNoYmFye3BhZGRpbmctdG9wOjBweDtwYWRkaW5nLWJvdHRvbToxM3B4fS5oZWFkZXItY29sbGFwc2UtbWFpbnstLW9wYWNpdHktc2NhbGU6MX0uaGVhZGVyLWNvbGxhcHNlLW1haW4gaW9uLXRvb2xiYXJ7LS1vcGFjaXR5LXNjYWxlOmluaGVyaXR9LmhlYWRlci1jb2xsYXBzZS1tYWluIGlvbi10b29sYmFyLmluLXRvb2xiYXIgaW9uLXRpdGxlLC5oZWFkZXItY29sbGFwc2UtbWFpbiBpb24tdG9vbGJhci5pbi10b29sYmFyIGlvbi1idXR0b25zey13ZWJraXQtdHJhbnNpdGlvbjphbGwgMC4ycyBlYXNlLWluLW91dDt0cmFuc2l0aW9uOmFsbCAwLjJzIGVhc2UtaW4tb3V0fS5oZWFkZXItY29sbGFwc2UtY29uZGVuc2UtaW5hY3RpdmU6bm90KC5oZWFkZXItY29sbGFwc2UtY29uZGVuc2UpIGlvbi10b29sYmFyLmluLXRvb2xiYXIgaW9uLXRpdGxlLC5oZWFkZXItY29sbGFwc2UtY29uZGVuc2UtaW5hY3RpdmU6bm90KC5oZWFkZXItY29sbGFwc2UtY29uZGVuc2UpIGlvbi10b29sYmFyLmluLXRvb2xiYXIgaW9uLWJ1dHRvbnMuYnV0dG9ucy1jb2xsYXBzZXtvcGFjaXR5OjA7cG9pbnRlci1ldmVudHM6bm9uZX0uaGVhZGVyLWNvbGxhcHNlLWNvbmRlbnNlLWluYWN0aXZlLmhlYWRlci1jb2xsYXBzZS1jb25kZW5zZSBpb24tdG9vbGJhci5pbi10b29sYmFyIGlvbi10aXRsZSwuaGVhZGVyLWNvbGxhcHNlLWNvbmRlbnNlLWluYWN0aXZlLmhlYWRlci1jb2xsYXBzZS1jb25kZW5zZSBpb24tdG9vbGJhci5pbi10b29sYmFyIGlvbi1idXR0b25zLmJ1dHRvbnMtY29sbGFwc2V7dmlzaWJpbGl0eTpoaWRkZW59aW9uLWhlYWRlci5oZWFkZXItaW9zOm5vdCguaGVhZGVyLWNvbGxhcHNlLW1haW4pOmhhcyh+aW9uLWNvbnRlbnQgaW9uLWhlYWRlci5oZWFkZXItaW9zW2NvbGxhcHNlPWNvbmRlbnNlXSx+aW9uLWNvbnRlbnQgaW9uLWhlYWRlci5oZWFkZXItaW9zLmhlYWRlci1jb2xsYXBzZS1jb25kZW5zZSl7b3BhY2l0eTowfVwiO1xuY29uc3QgaGVhZGVyTWRDc3MgPSBcImlvbi1oZWFkZXJ7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTstbXMtZmxleC1vcmRlcjotMTtvcmRlcjotMTt3aWR0aDoxMDAlO3otaW5kZXg6MTB9aW9uLWhlYWRlciBpb24tdG9vbGJhcjpmaXJzdC1vZi10eXBle3BhZGRpbmctdG9wOnZhcigtLWlvbi1zYWZlLWFyZWEtdG9wLCAwKX0uaGVhZGVyLW1key13ZWJraXQtYm94LXNoYWRvdzowIDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNHB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO2JveC1zaGFkb3c6MCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDRweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKX0uaGVhZGVyLWNvbGxhcHNlLWNvbmRlbnNle2Rpc3BsYXk6bm9uZX0uaGVhZGVyLW1kLmlvbi1uby1ib3JkZXJ7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lfVwiO1xuY29uc3QgSGVhZGVyID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmluaGVyaXRlZEF0dHJpYnV0ZXMgPSB7fTtcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBoZWFkZXIgd2lsbCBiZSB0cmFuc2x1Y2VudC5cbiAgICAgKiBPbmx5IGFwcGxpZXMgd2hlbiB0aGUgbW9kZSBpcyBgXCJpb3NcImAgYW5kIHRoZSBkZXZpY2Ugc3VwcG9ydHNcbiAgICAgKiBbYGJhY2tkcm9wLWZpbHRlcmBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9iYWNrZHJvcC1maWx0ZXIjQnJvd3Nlcl9jb21wYXRpYmlsaXR5KS5cbiAgICAgKlxuICAgICAqIE5vdGU6IEluIG9yZGVyIHRvIHNjcm9sbCBjb250ZW50IGJlaGluZCB0aGUgaGVhZGVyLCB0aGUgYGZ1bGxzY3JlZW5gXG4gICAgICogYXR0cmlidXRlIG5lZWRzIHRvIGJlIHNldCBvbiB0aGUgY29udGVudC5cbiAgICAgKi9cbiAgICB0aGlzLnRyYW5zbHVjZW50ID0gZmFsc2U7XG4gICAgdGhpcy5zZXR1cEZhZGVIZWFkZXIgPSBhc3luYyAoY29udGVudEVsLCBjb25kZW5zZUhlYWRlcikgPT4ge1xuICAgICAgY29uc3Qgc2Nyb2xsRWwgPSB0aGlzLnNjcm9sbEVsID0gYXdhaXQgZ2V0U2Nyb2xsRWxlbWVudChjb250ZW50RWwpO1xuICAgICAgLyoqXG4gICAgICAgKiBIYW5kbGUgZmFkaW5nIG9mIHRvb2xiYXJzIG9uIHNjcm9sbFxuICAgICAgICovXG4gICAgICB0aGlzLmNvbnRlbnRTY3JvbGxDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgaGFuZGxlSGVhZGVyRmFkZSh0aGlzLnNjcm9sbEVsLCB0aGlzLmVsLCBjb25kZW5zZUhlYWRlcik7XG4gICAgICB9O1xuICAgICAgc2Nyb2xsRWwuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5jb250ZW50U2Nyb2xsQ2FsbGJhY2spO1xuICAgICAgaGFuZGxlSGVhZGVyRmFkZSh0aGlzLnNjcm9sbEVsLCB0aGlzLmVsLCBjb25kZW5zZUhlYWRlcik7XG4gICAgfTtcbiAgfVxuICBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICB0aGlzLmluaGVyaXRlZEF0dHJpYnV0ZXMgPSBpbmhlcml0QXJpYUF0dHJpYnV0ZXModGhpcy5lbCk7XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICB0aGlzLmNoZWNrQ29sbGFwc2libGVIZWFkZXIoKTtcbiAgfVxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy5jaGVja0NvbGxhcHNpYmxlSGVhZGVyKCk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5kZXN0cm95Q29sbGFwc2libGVIZWFkZXIoKTtcbiAgfVxuICBhc3luYyBjaGVja0NvbGxhcHNpYmxlSGVhZGVyKCkge1xuICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgIGlmIChtb2RlICE9PSAnaW9zJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7XG4gICAgICBjb2xsYXBzZVxuICAgIH0gPSB0aGlzO1xuICAgIGNvbnN0IGhhc0NvbmRlbnNlID0gY29sbGFwc2UgPT09ICdjb25kZW5zZSc7XG4gICAgY29uc3QgaGFzRmFkZSA9IGNvbGxhcHNlID09PSAnZmFkZSc7XG4gICAgdGhpcy5kZXN0cm95Q29sbGFwc2libGVIZWFkZXIoKTtcbiAgICBpZiAoaGFzQ29uZGVuc2UpIHtcbiAgICAgIGNvbnN0IHBhZ2VFbCA9IHRoaXMuZWwuY2xvc2VzdCgnaW9uLWFwcCxpb24tcGFnZSwuaW9uLXBhZ2UscGFnZS1pbm5lcicpO1xuICAgICAgY29uc3QgY29udGVudEVsID0gcGFnZUVsID8gZmluZElvbkNvbnRlbnQocGFnZUVsKSA6IG51bGw7XG4gICAgICAvLyBDbG9uZWQgZWxlbWVudHMgYXJlIGFsd2F5cyBuZWVkZWQgaW4gaU9TIHRyYW5zaXRpb25cbiAgICAgIHdyaXRlVGFzaygoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gY2xvbmVFbGVtZW50KCdpb24tdGl0bGUnKTtcbiAgICAgICAgdGl0bGUuc2l6ZSA9ICdsYXJnZSc7XG4gICAgICAgIGNsb25lRWxlbWVudCgnaW9uLWJhY2stYnV0dG9uJyk7XG4gICAgICB9KTtcbiAgICAgIGF3YWl0IHRoaXMuc2V0dXBDb25kZW5zZUhlYWRlcihjb250ZW50RWwsIHBhZ2VFbCk7XG4gICAgfSBlbHNlIGlmIChoYXNGYWRlKSB7XG4gICAgICBjb25zdCBwYWdlRWwgPSB0aGlzLmVsLmNsb3Nlc3QoJ2lvbi1hcHAsaW9uLXBhZ2UsLmlvbi1wYWdlLHBhZ2UtaW5uZXInKTtcbiAgICAgIGNvbnN0IGNvbnRlbnRFbCA9IHBhZ2VFbCA/IGZpbmRJb25Db250ZW50KHBhZ2VFbCkgOiBudWxsO1xuICAgICAgaWYgKCFjb250ZW50RWwpIHtcbiAgICAgICAgcHJpbnRJb25Db250ZW50RXJyb3JNc2codGhpcy5lbCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNvbmRlbnNlSGVhZGVyID0gY29udGVudEVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1oZWFkZXJbY29sbGFwc2U9XCJjb25kZW5zZVwiXScpO1xuICAgICAgYXdhaXQgdGhpcy5zZXR1cEZhZGVIZWFkZXIoY29udGVudEVsLCBjb25kZW5zZUhlYWRlcik7XG4gICAgfVxuICB9XG4gIGRlc3Ryb3lDb2xsYXBzaWJsZUhlYWRlcigpIHtcbiAgICBpZiAodGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgdGhpcy5pbnRlcnNlY3Rpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICB0aGlzLmludGVyc2VjdGlvbk9ic2VydmVyID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAodGhpcy5zY3JvbGxFbCAmJiB0aGlzLmNvbnRlbnRTY3JvbGxDYWxsYmFjaykge1xuICAgICAgdGhpcy5zY3JvbGxFbC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmNvbnRlbnRTY3JvbGxDYWxsYmFjayk7XG4gICAgICB0aGlzLmNvbnRlbnRTY3JvbGxDYWxsYmFjayA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuY29sbGFwc2libGVNYWluSGVhZGVyKSB7XG4gICAgICB0aGlzLmNvbGxhcHNpYmxlTWFpbkhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXItY29sbGFwc2UtbWFpbicpO1xuICAgICAgdGhpcy5jb2xsYXBzaWJsZU1haW5IZWFkZXIgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG4gIGFzeW5jIHNldHVwQ29uZGVuc2VIZWFkZXIoY29udGVudEVsLCBwYWdlRWwpIHtcbiAgICBpZiAoIWNvbnRlbnRFbCB8fCAhcGFnZUVsKSB7XG4gICAgICBwcmludElvbkNvbnRlbnRFcnJvck1zZyh0aGlzLmVsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zY3JvbGxFbCA9IGF3YWl0IGdldFNjcm9sbEVsZW1lbnQoY29udGVudEVsKTtcbiAgICBjb25zdCBoZWFkZXJzID0gcGFnZUVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lvbi1oZWFkZXInKTtcbiAgICB0aGlzLmNvbGxhcHNpYmxlTWFpbkhlYWRlciA9IEFycmF5LmZyb20oaGVhZGVycykuZmluZChoZWFkZXIgPT4gaGVhZGVyLmNvbGxhcHNlICE9PSAnY29uZGVuc2UnKTtcbiAgICBpZiAoIXRoaXMuY29sbGFwc2libGVNYWluSGVhZGVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG1haW5IZWFkZXJJbmRleCA9IGNyZWF0ZUhlYWRlckluZGV4KHRoaXMuY29sbGFwc2libGVNYWluSGVhZGVyKTtcbiAgICBjb25zdCBzY3JvbGxIZWFkZXJJbmRleCA9IGNyZWF0ZUhlYWRlckluZGV4KHRoaXMuZWwpO1xuICAgIGlmICghbWFpbkhlYWRlckluZGV4IHx8ICFzY3JvbGxIZWFkZXJJbmRleCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRIZWFkZXJBY3RpdmUobWFpbkhlYWRlckluZGV4LCBmYWxzZSk7XG4gICAgc2V0VG9vbGJhckJhY2tncm91bmRPcGFjaXR5KG1haW5IZWFkZXJJbmRleC5lbCwgMCk7XG4gICAgLyoqXG4gICAgICogSGFuZGxlIGludGVyYWN0aW9uIGJldHdlZW4gdG9vbGJhciBjb2xsYXBzZSBhbmRcbiAgICAgKiBzaG93aW5nL2hpZGluZyBjb250ZW50IGluIHRoZSBwcmltYXJ5IGlvbi1oZWFkZXJcbiAgICAgKiBhcyB3ZWxsIGFzIHByb2dyZXNzaXZlbHkgc2hvd2luZy9oaWRpbmcgdGhlIG1haW4gaGVhZGVyXG4gICAgICogYm9yZGVyIGFzIHRoZSB0b3AtbW9zdCB0b29sYmFyIGNvbGxhcHNlcyBvciBleHBhbmRzLlxuICAgICAqL1xuICAgIGNvbnN0IHRvb2xiYXJJbnRlcnNlY3Rpb24gPSBldiA9PiB7XG4gICAgICBoYW5kbGVUb29sYmFySW50ZXJzZWN0aW9uKGV2LCBtYWluSGVhZGVySW5kZXgsIHNjcm9sbEhlYWRlckluZGV4LCB0aGlzLnNjcm9sbEVsKTtcbiAgICB9O1xuICAgIHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIodG9vbGJhckludGVyc2VjdGlvbiwge1xuICAgICAgcm9vdDogY29udGVudEVsLFxuICAgICAgdGhyZXNob2xkOiBbMC4yNSwgMC4zLCAwLjQsIDAuNSwgMC42LCAwLjcsIDAuOCwgMC45LCAxXVxuICAgIH0pO1xuICAgIHRoaXMuaW50ZXJzZWN0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShzY3JvbGxIZWFkZXJJbmRleC50b29sYmFyc1tzY3JvbGxIZWFkZXJJbmRleC50b29sYmFycy5sZW5ndGggLSAxXS5lbCk7XG4gICAgLyoqXG4gICAgICogSGFuZGxlIHNjYWxpbmcgb2YgbGFyZ2UgaU9TIHRpdGxlcyBhbmRcbiAgICAgKiBzaG93aW5nL2hpZGluZyBib3JkZXIgb24gbGFzdCB0b29sYmFyXG4gICAgICogaW4gcHJpbWFyeSBoZWFkZXJcbiAgICAgKi9cbiAgICB0aGlzLmNvbnRlbnRTY3JvbGxDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgIGhhbmRsZUNvbnRlbnRTY3JvbGwodGhpcy5zY3JvbGxFbCwgc2Nyb2xsSGVhZGVySW5kZXgsIGNvbnRlbnRFbCk7XG4gICAgfTtcbiAgICB0aGlzLnNjcm9sbEVsLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuY29udGVudFNjcm9sbENhbGxiYWNrKTtcbiAgICB3cml0ZVRhc2soKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuY29sbGFwc2libGVNYWluSGVhZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5jb2xsYXBzaWJsZU1haW5IZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWNvbGxhcHNlLW1haW4nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdHJhbnNsdWNlbnQsXG4gICAgICBpbmhlcml0ZWRBdHRyaWJ1dGVzXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgY29uc3QgY29sbGFwc2UgPSB0aGlzLmNvbGxhcHNlIHx8ICdub25lJztcbiAgICAvLyBiYW5uZXIgcm9sZSBtdXN0IGJlIGF0IHRvcCBsZXZlbCwgc28gcmVtb3ZlIHJvbGUgaWYgaW5zaWRlIGEgbWVudVxuICAgIGNvbnN0IHJvbGVUeXBlID0gaG9zdENvbnRleHQoJ2lvbi1tZW51JywgdGhpcy5lbCkgPyAnbm9uZScgOiAnYmFubmVyJztcbiAgICByZXR1cm4gaChIb3N0LCBPYmplY3QuYXNzaWduKHtcbiAgICAgIGtleTogJ2I2Y2MyN2YwYjA4YWZjOWZjYzg4OTY4MzUyNWRhNzY1ZDgwYmE2NzInLFxuICAgICAgcm9sZTogcm9sZVR5cGUsXG4gICAgICBjbGFzczoge1xuICAgICAgICBbbW9kZV06IHRydWUsXG4gICAgICAgIC8vIFVzZWQgaW50ZXJuYWxseSBmb3Igc3R5bGluZ1xuICAgICAgICBbYGhlYWRlci0ke21vZGV9YF06IHRydWUsXG4gICAgICAgIFtgaGVhZGVyLXRyYW5zbHVjZW50YF06IHRoaXMudHJhbnNsdWNlbnQsXG4gICAgICAgIFtgaGVhZGVyLWNvbGxhcHNlLSR7Y29sbGFwc2V9YF06IHRydWUsXG4gICAgICAgIFtgaGVhZGVyLXRyYW5zbHVjZW50LSR7bW9kZX1gXTogdGhpcy50cmFuc2x1Y2VudFxuICAgICAgfVxuICAgIH0sIGluaGVyaXRlZEF0dHJpYnV0ZXMpLCBtb2RlID09PSAnaW9zJyAmJiB0cmFuc2x1Y2VudCAmJiBoKFwiZGl2XCIsIHtcbiAgICAgIGtleTogJzM5NTc2NmQ0ZGNlZTMzOThiYzkxOTYwZGIyMWY5MjIwOTUyOTJmMTQnLFxuICAgICAgY2xhc3M6IFwiaGVhZGVyLWJhY2tncm91bmRcIlxuICAgIH0pLCBoKFwic2xvdFwiLCB7XG4gICAgICBrZXk6ICcwOWE2N2VjZTI3YjI1OGZmMTI0ODgwNWQ0M2Q5MmE0OWIyYzY4NTlhJ1xuICAgIH0pKTtcbiAgfVxuICBnZXQgZWwoKSB7XG4gICAgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7XG4gIH1cbn07XG5IZWFkZXIuc3R5bGUgPSB7XG4gIGlvczogaGVhZGVySW9zQ3NzLFxuICBtZDogaGVhZGVyTWRDc3Ncbn07XG5jb25zdCByb3V0ZXJPdXRsZXRDc3MgPSBcIjpob3N0e2xlZnQ6MDtyaWdodDowO3RvcDowO2JvdHRvbTowO3Bvc2l0aW9uOmFic29sdXRlO2NvbnRhaW46bGF5b3V0IHNpemUgc3R5bGU7ei1pbmRleDowfVwiO1xuY29uc3QgUm91dGVyT3V0bGV0ID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmlvbk5hdldpbGxMb2FkID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25OYXZXaWxsTG9hZFwiLCA3KTtcbiAgICB0aGlzLmlvbk5hdldpbGxDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbk5hdldpbGxDaGFuZ2VcIiwgMyk7XG4gICAgdGhpcy5pb25OYXZEaWRDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbk5hdkRpZENoYW5nZVwiLCAzKTtcbiAgICB0aGlzLmxvY2tDb250cm9sbGVyID0gY3JlYXRlTG9ja0NvbnRyb2xsZXIoKTtcbiAgICB0aGlzLmdlc3R1cmVPckFuaW1hdGlvbkluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBUaGUgbW9kZSBkZXRlcm1pbmVzIHdoaWNoIHBsYXRmb3JtIHN0eWxlcyB0byB1c2UuXG4gICAgICovXG4gICAgdGhpcy5tb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIHRoZSByb3V0ZXItb3V0bGV0IHNob3VsZCBhbmltYXRlIHRoZSB0cmFuc2l0aW9uIG9mIGNvbXBvbmVudHMuXG4gICAgICovXG4gICAgdGhpcy5hbmltYXRlZCA9IHRydWU7XG4gIH1cbiAgc3dpcGVIYW5kbGVyQ2hhbmdlZCgpIHtcbiAgICBpZiAodGhpcy5nZXN0dXJlKSB7XG4gICAgICB0aGlzLmdlc3R1cmUuZW5hYmxlKHRoaXMuc3dpcGVIYW5kbGVyICE9PSB1bmRlZmluZWQpO1xuICAgIH1cbiAgfVxuICBhc3luYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25zdCBvblN0YXJ0ID0gKCkgPT4ge1xuICAgICAgdGhpcy5nZXN0dXJlT3JBbmltYXRpb25JblByb2dyZXNzID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLnN3aXBlSGFuZGxlcikge1xuICAgICAgICB0aGlzLnN3aXBlSGFuZGxlci5vblN0YXJ0KCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmdlc3R1cmUgPSAoYXdhaXQgaW1wb3J0KCcuL3N3aXBlLWJhY2stQjJZZk9IUk0uanMnKSkuY3JlYXRlU3dpcGVCYWNrR2VzdHVyZSh0aGlzLmVsLCAoKSA9PiAhdGhpcy5nZXN0dXJlT3JBbmltYXRpb25JblByb2dyZXNzICYmICEhdGhpcy5zd2lwZUhhbmRsZXIgJiYgdGhpcy5zd2lwZUhhbmRsZXIuY2FuU3RhcnQoKSwgKCkgPT4gb25TdGFydCgpLCBzdGVwID0+IHtcbiAgICAgIHZhciBfYTtcbiAgICAgIHJldHVybiAoX2EgPSB0aGlzLmFuaSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnByb2dyZXNzU3RlcChzdGVwKTtcbiAgICB9LCAoc2hvdWxkQ29tcGxldGUsIHN0ZXAsIGR1cikgPT4ge1xuICAgICAgaWYgKHRoaXMuYW5pKSB7XG4gICAgICAgIHRoaXMuYW5pLm9uRmluaXNoKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmdlc3R1cmVPckFuaW1hdGlvbkluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgICBpZiAodGhpcy5zd2lwZUhhbmRsZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc3dpcGVIYW5kbGVyLm9uRW5kKHNob3VsZENvbXBsZXRlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBvbmVUaW1lQ2FsbGJhY2s6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEFjY291bnQgZm9yIHJvdW5kaW5nIGVycm9ycyBpbiBKU1xuICAgICAgICBsZXQgbmV3U3RlcFZhbHVlID0gc2hvdWxkQ29tcGxldGUgPyAtMWUtMyA6IDAuMDAxO1xuICAgICAgICAvKipcbiAgICAgICAgICogQW5pbWF0aW9uIHdpbGwgYmUgcmV2ZXJzZWQgaGVyZSwgc28gbmVlZCB0b1xuICAgICAgICAgKiByZXZlcnNlIHRoZSBlYXNpbmcgY3VydmUgYXMgd2VsbFxuICAgICAgICAgKlxuICAgICAgICAgKiBBZGRpdGlvbmFsbHksIHdlIG5lZWQgdG8gYWNjb3VudCBmb3IgdGhlIHRpbWUgcmVsYXRpdmVcbiAgICAgICAgICogdG8gdGhlIG5ldyBlYXNpbmcgY3VydmUsIGFzIGBzdGVwVmFsdWVgIGlzIGdvaW5nIHRvIGJlIGdpdmVuXG4gICAgICAgICAqIGluIHRlcm1zIG9mIGEgbGluZWFyIGN1cnZlLlxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKCFzaG91bGRDb21wbGV0ZSkge1xuICAgICAgICAgIHRoaXMuYW5pLmVhc2luZygnY3ViaWMtYmV6aWVyKDEsIDAsIDAuNjgsIDAuMjgpJyk7XG4gICAgICAgICAgbmV3U3RlcFZhbHVlICs9IGdldFRpbWVHaXZlblByb2dyZXNzaW9uKFswLCAwXSwgWzEsIDBdLCBbMC42OCwgMC4yOF0sIFsxLCAxXSwgc3RlcClbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3U3RlcFZhbHVlICs9IGdldFRpbWVHaXZlblByb2dyZXNzaW9uKFswLCAwXSwgWzAuMzIsIDAuNzJdLCBbMCwgMV0sIFsxLCAxXSwgc3RlcClbMF07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hbmkucHJvZ3Jlc3NFbmQoc2hvdWxkQ29tcGxldGUgPyAxIDogMCwgbmV3U3RlcFZhbHVlLCBkdXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5nZXN0dXJlT3JBbmltYXRpb25JblByb2dyZXNzID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5zd2lwZUhhbmRsZXJDaGFuZ2VkKCk7XG4gIH1cbiAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgdGhpcy5pb25OYXZXaWxsTG9hZC5lbWl0KCk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHRoaXMuZ2VzdHVyZSkge1xuICAgICAgdGhpcy5nZXN0dXJlLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuZ2VzdHVyZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBhc3luYyBjb21taXQoZW50ZXJpbmdFbCwgbGVhdmluZ0VsLCBvcHRzKSB7XG4gICAgY29uc3QgdW5sb2NrID0gYXdhaXQgdGhpcy5sb2NrQ29udHJvbGxlci5sb2NrKCk7XG4gICAgbGV0IGNoYW5nZWQgPSBmYWxzZTtcbiAgICB0cnkge1xuICAgICAgY2hhbmdlZCA9IGF3YWl0IHRoaXMudHJhbnNpdGlvbihlbnRlcmluZ0VsLCBsZWF2aW5nRWwsIG9wdHMpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHByaW50SW9uRXJyb3IoJ1tpb24tcm91dGVyLW91dGxldF0gLSBFeGNlcHRpb24gaW4gY29tbWl0OicsIGUpO1xuICAgIH1cbiAgICB1bmxvY2soKTtcbiAgICByZXR1cm4gY2hhbmdlZDtcbiAgfVxuICAvKiogQGludGVybmFsICovXG4gIGFzeW5jIHNldFJvdXRlSWQoaWQsIHBhcmFtcywgZGlyZWN0aW9uLCBhbmltYXRpb24pIHtcbiAgICBjb25zdCBjaGFuZ2VkID0gYXdhaXQgdGhpcy5zZXRSb290KGlkLCBwYXJhbXMsIHtcbiAgICAgIGR1cmF0aW9uOiBkaXJlY3Rpb24gPT09ICdyb290JyA/IDAgOiB1bmRlZmluZWQsXG4gICAgICBkaXJlY3Rpb246IGRpcmVjdGlvbiA9PT0gJ2JhY2snID8gJ2JhY2snIDogJ2ZvcndhcmQnLFxuICAgICAgYW5pbWF0aW9uQnVpbGRlcjogYW5pbWF0aW9uXG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNoYW5nZWQsXG4gICAgICBlbGVtZW50OiB0aGlzLmFjdGl2ZUVsXG4gICAgfTtcbiAgfVxuICAvKiogQGludGVybmFsICovXG4gIGFzeW5jIGdldFJvdXRlSWQoKSB7XG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5hY3RpdmVFbDtcbiAgICByZXR1cm4gYWN0aXZlID8ge1xuICAgICAgaWQ6IGFjdGl2ZS50YWdOYW1lLFxuICAgICAgZWxlbWVudDogYWN0aXZlLFxuICAgICAgcGFyYW1zOiB0aGlzLmFjdGl2ZVBhcmFtc1xuICAgIH0gOiB1bmRlZmluZWQ7XG4gIH1cbiAgYXN5bmMgc2V0Um9vdChjb21wb25lbnQsIHBhcmFtcywgb3B0cykge1xuICAgIGlmICh0aGlzLmFjdGl2ZUNvbXBvbmVudCA9PT0gY29tcG9uZW50ICYmIHNoYWxsb3dFcXVhbFN0cmluZ01hcChwYXJhbXMsIHRoaXMuYWN0aXZlUGFyYW1zKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBhdHRhY2ggZW50ZXJpbmcgdmlldyB0byBET01cbiAgICBjb25zdCBsZWF2aW5nRWwgPSB0aGlzLmFjdGl2ZUVsO1xuICAgIGNvbnN0IGVudGVyaW5nRWwgPSBhd2FpdCBhdHRhY2hDb21wb25lbnQodGhpcy5kZWxlZ2F0ZSwgdGhpcy5lbCwgY29tcG9uZW50LCBbJ2lvbi1wYWdlJywgJ2lvbi1wYWdlLWludmlzaWJsZSddLCBwYXJhbXMpO1xuICAgIHRoaXMuYWN0aXZlQ29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIHRoaXMuYWN0aXZlRWwgPSBlbnRlcmluZ0VsO1xuICAgIHRoaXMuYWN0aXZlUGFyYW1zID0gcGFyYW1zO1xuICAgIC8vIGNvbW1pdCBhbmltYXRpb25cbiAgICBhd2FpdCB0aGlzLmNvbW1pdChlbnRlcmluZ0VsLCBsZWF2aW5nRWwsIG9wdHMpO1xuICAgIGF3YWl0IGRldGFjaENvbXBvbmVudCh0aGlzLmRlbGVnYXRlLCBsZWF2aW5nRWwpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGFzeW5jIHRyYW5zaXRpb24oZW50ZXJpbmdFbCwgbGVhdmluZ0VsLCBvcHRzID0ge30pIHtcbiAgICBpZiAobGVhdmluZ0VsID09PSBlbnRlcmluZ0VsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIGVtaXQgbmF2IHdpbGwgY2hhbmdlIGV2ZW50XG4gICAgdGhpcy5pb25OYXZXaWxsQ2hhbmdlLmVtaXQoKTtcbiAgICBjb25zdCB7XG4gICAgICBlbCxcbiAgICAgIG1vZGVcbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCBhbmltYXRlZCA9IHRoaXMuYW5pbWF0ZWQgJiYgY29uZmlnLmdldEJvb2xlYW4oJ2FuaW1hdGVkJywgdHJ1ZSk7XG4gICAgY29uc3QgYW5pbWF0aW9uQnVpbGRlciA9IG9wdHMuYW5pbWF0aW9uQnVpbGRlciB8fCB0aGlzLmFuaW1hdGlvbiB8fCBjb25maWcuZ2V0KCduYXZBbmltYXRpb24nKTtcbiAgICBhd2FpdCB0cmFuc2l0aW9uKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7XG4gICAgICBtb2RlLFxuICAgICAgYW5pbWF0ZWQsXG4gICAgICBlbnRlcmluZ0VsLFxuICAgICAgbGVhdmluZ0VsLFxuICAgICAgYmFzZUVsOiBlbCxcbiAgICAgIC8qKlxuICAgICAgICogV2UgbmVlZCB0byB3YWl0IGZvciBhbGwgU3RlbmNpbCBjb21wb25lbnRzXG4gICAgICAgKiB0byBiZSByZWFkeSBvbmx5IHdoZW4gdXNpbmcgdGhlIGxhenlcbiAgICAgICAqIGxvYWRlZCBidW5kbGUuXG4gICAgICAgKi9cbiAgICAgIGRlZXBXYWl0OiBoYXNMYXp5QnVpbGQoZWwpLFxuICAgICAgcHJvZ3Jlc3NDYWxsYmFjazogb3B0cy5wcm9ncmVzc0FuaW1hdGlvbiA/IGFuaSA9PiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBCZWNhdXNlIHRoaXMgcHJvZ3Jlc3MgY2FsbGJhY2sgaXMgY2FsbGVkIGFzeW5jaHJvbm91c2x5XG4gICAgICAgICAqIGl0IGlzIHBvc3NpYmxlIGZvciB0aGUgZ2VzdHVyZSB0byBzdGFydCBhbmQgZW5kIGJlZm9yZVxuICAgICAgICAgKiB0aGUgYW5pbWF0aW9uIGlzIGV2ZXIgc2V0LiBJbiB0aGF0IHNjZW5hcmlvLCB3ZSBzaG91bGRcbiAgICAgICAgICogaW1tZWRpYXRlbHkgY2FsbCBwcm9ncmVzc0VuZCBzbyB0aGF0IHRoZSB0cmFuc2l0aW9uIHByb21pc2VcbiAgICAgICAgICogcmVzb2x2ZXMgYW5kIHRoZSBnZXN0dXJlIGRvZXMgbm90IGdldCBsb2NrZWQgdXAuXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoYW5pICE9PSB1bmRlZmluZWQgJiYgIXRoaXMuZ2VzdHVyZU9yQW5pbWF0aW9uSW5Qcm9ncmVzcykge1xuICAgICAgICAgIHRoaXMuZ2VzdHVyZU9yQW5pbWF0aW9uSW5Qcm9ncmVzcyA9IHRydWU7XG4gICAgICAgICAgYW5pLm9uRmluaXNoKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ2VzdHVyZU9yQW5pbWF0aW9uSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHRoaXMuc3dpcGVIYW5kbGVyKSB7XG4gICAgICAgICAgICAgIHRoaXMuc3dpcGVIYW5kbGVyLm9uRW5kKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBvbmVUaW1lQ2FsbGJhY2s6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBQbGF5aW5nIGFuaW1hdGlvbiB0byBiZWdpbm5pbmdcbiAgICAgICAgICAgKiB3aXRoIGEgZHVyYXRpb24gb2YgMCBwcmV2ZW50c1xuICAgICAgICAgICAqIGFueSBmbGlja2VyaW5nIHdoZW4gdGhlIGFuaW1hdGlvblxuICAgICAgICAgICAqIGlzIGxhdGVyIGNsZWFuZWQgdXAuXG4gICAgICAgICAgICovXG4gICAgICAgICAgYW5pLnByb2dyZXNzRW5kKDAsIDAsIDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuYW5pID0gYW5pO1xuICAgICAgICB9XG4gICAgICB9IDogdW5kZWZpbmVkXG4gICAgfSwgb3B0cyksIHtcbiAgICAgIGFuaW1hdGlvbkJ1aWxkZXJcbiAgICB9KSk7XG4gICAgLy8gZW1pdCBuYXYgY2hhbmdlZCBldmVudFxuICAgIHRoaXMuaW9uTmF2RGlkQ2hhbmdlLmVtaXQoKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGgoXCJzbG90XCIsIHtcbiAgICAgIGtleTogJzg0YjUwZjExNTViMGQ3ODBkZmY4MDJlZTEzMjIzMjg3MjU5ZmQ1MjUnXG4gICAgfSk7XG4gIH1cbiAgZ2V0IGVsKCkge1xuICAgIHJldHVybiBnZXRFbGVtZW50KHRoaXMpO1xuICB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwic3dpcGVIYW5kbGVyXCI6IFtcInN3aXBlSGFuZGxlckNoYW5nZWRcIl1cbiAgICB9O1xuICB9XG59O1xuUm91dGVyT3V0bGV0LnN0eWxlID0gcm91dGVyT3V0bGV0Q3NzO1xuY29uc3QgdGl0bGVJb3NDc3MgPSBcIjpob3N0ey0tY29sb3I6aW5pdGlhbDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleDoxO2ZsZXg6MTstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7Y29sb3I6dmFyKC0tY29sb3IpfTpob3N0KC5pb24tY29sb3Ipe2NvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKX0udG9vbGJhci10aXRsZXtkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVuO3BvaW50ZXItZXZlbnRzOmF1dG99Omhvc3QoLnRpdGxlLXNtYWxsKSAudG9vbGJhci10aXRsZXt3aGl0ZS1zcGFjZTpub3JtYWx9Omhvc3R7dG9wOjA7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjkwcHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6OTBweDstd2Via2l0LXBhZGRpbmctZW5kOjkwcHg7cGFkZGluZy1pbmxpbmUtZW5kOjkwcHg7cGFkZGluZy10b3A6dmFyKC0tcGFkZGluZy10b3ApO3BhZGRpbmctYm90dG9tOnZhcigtLXBhZGRpbmctYm90dG9tKTtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7Zm9udC1zaXplOm1pbigxLjA2MjVyZW0sIDIwLjRweCk7Zm9udC13ZWlnaHQ6NjAwO3RleHQtYWxpZ246Y2VudGVyOy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDtwb2ludGVyLWV2ZW50czpub25lfTpob3N0e2luc2V0LWlubGluZS1zdGFydDowfTpob3N0KC50aXRsZS1zbWFsbCl7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjlweDtwYWRkaW5nLWlubGluZS1zdGFydDo5cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDo5cHg7cGFkZGluZy1pbmxpbmUtZW5kOjlweDtwYWRkaW5nLXRvcDo2cHg7cGFkZGluZy1ib3R0b206MTZweDtwb3NpdGlvbjpyZWxhdGl2ZTtmb250LXNpemU6bWluKDAuODEyNXJlbSwgMjMuNHB4KTtmb250LXdlaWdodDpub3JtYWx9Omhvc3QoLnRpdGxlLWxhcmdlKXstd2Via2l0LXBhZGRpbmctc3RhcnQ6MTJweDtwYWRkaW5nLWlubGluZS1zdGFydDoxMnB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MTJweDtwYWRkaW5nLWlubGluZS1lbmQ6MTJweDtwYWRkaW5nLXRvcDoycHg7cGFkZGluZy1ib3R0b206NHB4Oy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpsZWZ0IGNlbnRlcjt0cmFuc2Zvcm0tb3JpZ2luOmxlZnQgY2VudGVyO3Bvc2l0aW9uOnN0YXRpYzstbXMtZmxleC1hbGlnbjplbmQ7YWxpZ24taXRlbXM6ZmxleC1lbmQ7bWluLXdpZHRoOjEwMCU7Zm9udC1zaXplOm1pbigyLjEyNXJlbSwgNjEuMnB4KTtmb250LXdlaWdodDo3MDA7dGV4dC1hbGlnbjpzdGFydH06aG9zdCgudGl0bGUtbGFyZ2UudGl0bGUtcnRsKXstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46cmlnaHQgY2VudGVyO3RyYW5zZm9ybS1vcmlnaW46cmlnaHQgY2VudGVyfTpob3N0KC50aXRsZS1sYXJnZS5pb24tY2xvbmVkLWVsZW1lbnQpey0tY29sb3I6dmFyKC0taW9uLXRleHQtY29sb3IsICMwMDApO2ZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseSl9Omhvc3QoLnRpdGxlLWxhcmdlKSAudG9vbGJhci10aXRsZXstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46aW5oZXJpdDt0cmFuc2Zvcm0tb3JpZ2luOmluaGVyaXQ7d2lkdGg6YXV0b306aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCgudGl0bGUtbGFyZ2UpIC50b29sYmFyLXRpdGxlLDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS50aXRsZS1sYXJnZSAudG9vbGJhci10aXRsZXstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Y2FsYygxMDAlIC0gaW5oZXJpdCk7dHJhbnNmb3JtLW9yaWdpbjpjYWxjKDEwMCUgLSBpbmhlcml0KX1Ac3VwcG9ydHMgc2VsZWN0b3IoOmRpcihydGwpKXs6aG9zdCgudGl0bGUtbGFyZ2U6ZGlyKHJ0bCkpIC50b29sYmFyLXRpdGxley13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpjYWxjKDEwMCUgLSBpbmhlcml0KTt0cmFuc2Zvcm0tb3JpZ2luOmNhbGMoMTAwJSAtIGluaGVyaXQpfX1cIjtcbmNvbnN0IHRpdGxlTWRDc3MgPSBcIjpob3N0ey0tY29sb3I6aW5pdGlhbDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleDoxO2ZsZXg6MTstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7Y29sb3I6dmFyKC0tY29sb3IpfTpob3N0KC5pb24tY29sb3Ipe2NvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKX0udG9vbGJhci10aXRsZXtkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVuO3BvaW50ZXItZXZlbnRzOmF1dG99Omhvc3QoLnRpdGxlLXNtYWxsKSAudG9vbGJhci10aXRsZXt3aGl0ZS1zcGFjZTpub3JtYWx9Omhvc3R7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjIwcHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MjBweDstd2Via2l0LXBhZGRpbmctZW5kOjIwcHg7cGFkZGluZy1pbmxpbmUtZW5kOjIwcHg7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowO2ZvbnQtc2l6ZToxLjI1cmVtO2ZvbnQtd2VpZ2h0OjUwMDtsZXR0ZXItc3BhY2luZzowLjAxMjVlbX06aG9zdCgudGl0bGUtc21hbGwpe3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Zm9udC1zaXplOjAuOTM3NXJlbTtmb250LXdlaWdodDpub3JtYWx9XCI7XG5jb25zdCBUb29sYmFyVGl0bGUgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuaW9uU3R5bGUgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblN0eWxlXCIsIDcpO1xuICB9XG4gIHNpemVDaGFuZ2VkKCkge1xuICAgIHRoaXMuZW1pdFN0eWxlKCk7XG4gIH1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5lbWl0U3R5bGUoKTtcbiAgfVxuICBlbWl0U3R5bGUoKSB7XG4gICAgY29uc3Qgc2l6ZSA9IHRoaXMuZ2V0U2l6ZSgpO1xuICAgIHRoaXMuaW9uU3R5bGUuZW1pdCh7XG4gICAgICBbYHRpdGxlLSR7c2l6ZX1gXTogdHJ1ZVxuICAgIH0pO1xuICB9XG4gIGdldFNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZSAhPT0gdW5kZWZpbmVkID8gdGhpcy5zaXplIDogJ2RlZmF1bHQnO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICBjb25zdCBzaXplID0gdGhpcy5nZXRTaXplKCk7XG4gICAgcmV0dXJuIGgoSG9zdCwge1xuICAgICAga2V5OiAnZTU5OWMwYmYxYjA4MTdkZjNmYTgzNjBiZGNkNmQ3ODdmNzUxYzM3MScsXG4gICAgICBjbGFzczogY3JlYXRlQ29sb3JDbGFzc2VzKHRoaXMuY29sb3IsIHtcbiAgICAgICAgW21vZGVdOiB0cnVlLFxuICAgICAgICBbYHRpdGxlLSR7c2l6ZX1gXTogdHJ1ZSxcbiAgICAgICAgJ3RpdGxlLXJ0bCc6IGRvY3VtZW50LmRpciA9PT0gJ3J0bCdcbiAgICAgIH0pXG4gICAgfSwgaChcImRpdlwiLCB7XG4gICAgICBrZXk6ICc2ZTdlZWU5MDQ3ZDY3NTk4NzZiYjMxZDczMDViNzZlZmM3YzQzMzhjJyxcbiAgICAgIGNsYXNzOiBcInRvb2xiYXItdGl0bGVcIlxuICAgIH0sIGgoXCJzbG90XCIsIHtcbiAgICAgIGtleTogJ2JmNzkwZWI0YzgzZGQwYWY0ZjJmZDFmODVhYjRhZjU4MTlmNDZmZjQnXG4gICAgfSkpKTtcbiAgfVxuICBnZXQgZWwoKSB7XG4gICAgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7XG4gIH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJzaXplXCI6IFtcInNpemVDaGFuZ2VkXCJdXG4gICAgfTtcbiAgfVxufTtcblRvb2xiYXJUaXRsZS5zdHlsZSA9IHtcbiAgaW9zOiB0aXRsZUlvc0NzcyxcbiAgbWQ6IHRpdGxlTWRDc3Ncbn07XG5jb25zdCB0b29sYmFySW9zQ3NzID0gXCI6aG9zdHstLWJvcmRlci13aWR0aDowOy0tYm9yZGVyLXN0eWxlOnNvbGlkOy0tb3BhY2l0eToxOy0tb3BhY2l0eS1zY2FsZToxOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJTtwYWRkaW5nLXJpZ2h0OnZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpO3BhZGRpbmctbGVmdDp2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpO2NvbG9yOnZhcigtLWNvbG9yKTtmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHksIGluaGVyaXQpO2NvbnRhaW46Y29udGVudDt6LWluZGV4OjEwOy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveH06aG9zdCguaW9uLWNvbG9yKXtjb2xvcjp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpfTpob3N0KC5pb24tY29sb3IpIC50b29sYmFyLWJhY2tncm91bmR7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItYmFzZSl9LnRvb2xiYXItY29udGFpbmVyey13ZWJraXQtcGFkZGluZy1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTtwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTstd2Via2l0LXBhZGRpbmctZW5kOnZhcigtLXBhZGRpbmctZW5kKTtwYWRkaW5nLWlubGluZS1lbmQ6dmFyKC0tcGFkZGluZy1lbmQpO3BhZGRpbmctdG9wOnZhcigtLXBhZGRpbmctdG9wKTtwYWRkaW5nLWJvdHRvbTp2YXIoLS1wYWRkaW5nLWJvdHRvbSk7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LWRpcmVjdGlvbjpyb3c7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmp1c3RpZnk7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47d2lkdGg6MTAwJTttaW4taGVpZ2h0OnZhcigtLW1pbi1oZWlnaHQpO2NvbnRhaW46Y29udGVudDtvdmVyZmxvdzpoaWRkZW47ei1pbmRleDoxMDstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3h9LnRvb2xiYXItYmFja2dyb3VuZHtsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MDtwb3NpdGlvbjphYnNvbHV0ZTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApO2JvcmRlci13aWR0aDp2YXIoLS1ib3JkZXItd2lkdGgpO2JvcmRlci1zdHlsZTp2YXIoLS1ib3JkZXItc3R5bGUpO2JvcmRlci1jb2xvcjp2YXIoLS1ib3JkZXItY29sb3IpO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7Y29udGFpbjpzdHJpY3Q7b3BhY2l0eTpjYWxjKHZhcigtLW9wYWNpdHkpICogdmFyKC0tb3BhY2l0eS1zY2FsZSkpO3otaW5kZXg6LTE7cG9pbnRlci1ldmVudHM6bm9uZX06OnNsb3R0ZWQoaW9uLXByb2dyZXNzLWJhcil7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7cG9zaXRpb246YWJzb2x1dGV9Omhvc3R7LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi10b29sYmFyLWJhY2tncm91bmQsIHZhcigtLWlvbi1jb2xvci1zdGVwLTUwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTUwLCAjZjdmN2Y3KSkpOy0tY29sb3I6dmFyKC0taW9uLXRvb2xiYXItY29sb3IsIHZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwKSk7LS1ib3JkZXItY29sb3I6dmFyKC0taW9uLXRvb2xiYXItYm9yZGVyLWNvbG9yLCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yLCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXN0ZXAtMTUwLCByZ2JhKDAsIDAsIDAsIDAuMikpKSkpOy0tcGFkZGluZy10b3A6M3B4Oy0tcGFkZGluZy1ib3R0b206M3B4Oy0tcGFkZGluZy1zdGFydDo0cHg7LS1wYWRkaW5nLWVuZDo0cHg7LS1taW4taGVpZ2h0OjQ0cHh9LnRvb2xiYXItY29udGVudHstbXMtZmxleDoxO2ZsZXg6MTstbXMtZmxleC1vcmRlcjo0O29yZGVyOjQ7bWluLXdpZHRoOjB9Omhvc3QoLnRvb2xiYXItc2VnbWVudCkgLnRvb2xiYXItY29udGVudHtkaXNwbGF5Oi1tcy1pbmxpbmUtZmxleGJveDtkaXNwbGF5OmlubGluZS1mbGV4fTpob3N0KC50b29sYmFyLXNlYXJjaGJhcikgLnRvb2xiYXItY29udGFpbmVye3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MH06aG9zdCgudG9vbGJhci1zZWFyY2hiYXIpIDo6c2xvdHRlZCgqKXstbXMtZmxleC1pdGVtLWFsaWduOnN0YXJ0O2FsaWduLXNlbGY6c3RhcnR9Omhvc3QoLnRvb2xiYXItc2VhcmNoYmFyKSA6OnNsb3R0ZWQoaW9uLWNoaXApe21hcmdpbi10b3A6M3B4fTo6c2xvdHRlZChpb24tYnV0dG9ucyl7bWluLWhlaWdodDozOHB4fTo6c2xvdHRlZChbc2xvdD1zdGFydF0pey1tcy1mbGV4LW9yZGVyOjI7b3JkZXI6Mn06OnNsb3R0ZWQoW3Nsb3Q9c2Vjb25kYXJ5XSl7LW1zLWZsZXgtb3JkZXI6MztvcmRlcjozfTo6c2xvdHRlZChbc2xvdD1wcmltYXJ5XSl7LW1zLWZsZXgtb3JkZXI6NTtvcmRlcjo1O3RleHQtYWxpZ246ZW5kfTo6c2xvdHRlZChbc2xvdD1lbmRdKXstbXMtZmxleC1vcmRlcjo2O29yZGVyOjY7dGV4dC1hbGlnbjplbmR9Omhvc3QoLnRvb2xiYXItdGl0bGUtbGFyZ2UpIC50b29sYmFyLWNvbnRhaW5lcnstbXMtZmxleC13cmFwOndyYXA7ZmxleC13cmFwOndyYXA7LW1zLWZsZXgtYWxpZ246c3RhcnQ7YWxpZ24taXRlbXM6ZmxleC1zdGFydH06aG9zdCgudG9vbGJhci10aXRsZS1sYXJnZSkgLnRvb2xiYXItY29udGVudCBpb24tdGl0bGV7LW1zLWZsZXg6MTtmbGV4OjE7LW1zLWZsZXgtb3JkZXI6ODtvcmRlcjo4O21pbi13aWR0aDoxMDAlfVwiO1xuY29uc3QgdG9vbGJhck1kQ3NzID0gXCI6aG9zdHstLWJvcmRlci13aWR0aDowOy0tYm9yZGVyLXN0eWxlOnNvbGlkOy0tb3BhY2l0eToxOy0tb3BhY2l0eS1zY2FsZToxOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJTtwYWRkaW5nLXJpZ2h0OnZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpO3BhZGRpbmctbGVmdDp2YXIoLS1pb24tc2FmZS1hcmVhLWxlZnQpO2NvbG9yOnZhcigtLWNvbG9yKTtmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHksIGluaGVyaXQpO2NvbnRhaW46Y29udGVudDt6LWluZGV4OjEwOy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveH06aG9zdCguaW9uLWNvbG9yKXtjb2xvcjp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpfTpob3N0KC5pb24tY29sb3IpIC50b29sYmFyLWJhY2tncm91bmR7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItYmFzZSl9LnRvb2xiYXItY29udGFpbmVyey13ZWJraXQtcGFkZGluZy1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTtwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTstd2Via2l0LXBhZGRpbmctZW5kOnZhcigtLXBhZGRpbmctZW5kKTtwYWRkaW5nLWlubGluZS1lbmQ6dmFyKC0tcGFkZGluZy1lbmQpO3BhZGRpbmctdG9wOnZhcigtLXBhZGRpbmctdG9wKTtwYWRkaW5nLWJvdHRvbTp2YXIoLS1wYWRkaW5nLWJvdHRvbSk7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LWRpcmVjdGlvbjpyb3c7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmp1c3RpZnk7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47d2lkdGg6MTAwJTttaW4taGVpZ2h0OnZhcigtLW1pbi1oZWlnaHQpO2NvbnRhaW46Y29udGVudDtvdmVyZmxvdzpoaWRkZW47ei1pbmRleDoxMDstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3h9LnRvb2xiYXItYmFja2dyb3VuZHtsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MDtwb3NpdGlvbjphYnNvbHV0ZTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApO2JvcmRlci13aWR0aDp2YXIoLS1ib3JkZXItd2lkdGgpO2JvcmRlci1zdHlsZTp2YXIoLS1ib3JkZXItc3R5bGUpO2JvcmRlci1jb2xvcjp2YXIoLS1ib3JkZXItY29sb3IpO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7Y29udGFpbjpzdHJpY3Q7b3BhY2l0eTpjYWxjKHZhcigtLW9wYWNpdHkpICogdmFyKC0tb3BhY2l0eS1zY2FsZSkpO3otaW5kZXg6LTE7cG9pbnRlci1ldmVudHM6bm9uZX06OnNsb3R0ZWQoaW9uLXByb2dyZXNzLWJhcil7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7cG9zaXRpb246YWJzb2x1dGV9Omhvc3R7LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi10b29sYmFyLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7LS1jb2xvcjp2YXIoLS1pb24tdG9vbGJhci1jb2xvciwgdmFyKC0taW9uLXRleHQtY29sb3IsICM0MjQyNDIpKTstLWJvcmRlci1jb2xvcjp2YXIoLS1pb24tdG9vbGJhci1ib3JkZXItY29sb3IsIHZhcigtLWlvbi1ib3JkZXItY29sb3IsIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3Itc3RlcC0xNTAsICNjMWM0Y2QpKSkpOy0tcGFkZGluZy10b3A6MDstLXBhZGRpbmctYm90dG9tOjA7LS1wYWRkaW5nLXN0YXJ0OjA7LS1wYWRkaW5nLWVuZDowOy0tbWluLWhlaWdodDo1NnB4fS50b29sYmFyLWNvbnRlbnR7LW1zLWZsZXg6MTtmbGV4OjE7LW1zLWZsZXgtb3JkZXI6MztvcmRlcjozO21pbi13aWR0aDowO21heC13aWR0aDoxMDAlfTo6c2xvdHRlZCguYnV0dG9ucy1maXJzdC1zbG90KXstd2Via2l0LW1hcmdpbi1zdGFydDo0cHg7bWFyZ2luLWlubGluZS1zdGFydDo0cHh9OjpzbG90dGVkKC5idXR0b25zLWxhc3Qtc2xvdCl7LXdlYmtpdC1tYXJnaW4tZW5kOjRweDttYXJnaW4taW5saW5lLWVuZDo0cHh9OjpzbG90dGVkKFtzbG90PXN0YXJ0XSl7LW1zLWZsZXgtb3JkZXI6MjtvcmRlcjoyfTo6c2xvdHRlZChbc2xvdD1zZWNvbmRhcnldKXstbXMtZmxleC1vcmRlcjo0O29yZGVyOjR9OjpzbG90dGVkKFtzbG90PXByaW1hcnldKXstbXMtZmxleC1vcmRlcjo1O29yZGVyOjU7dGV4dC1hbGlnbjplbmR9OjpzbG90dGVkKFtzbG90PWVuZF0pey1tcy1mbGV4LW9yZGVyOjY7b3JkZXI6Njt0ZXh0LWFsaWduOmVuZH1cIjtcbmNvbnN0IFRvb2xiYXIgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuY2hpbGRyZW5TdHlsZXMgPSBuZXcgTWFwKCk7XG4gIH1cbiAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgY29uc3QgYnV0dG9ucyA9IEFycmF5LmZyb20odGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKCdpb24tYnV0dG9ucycpKTtcbiAgICBjb25zdCBmaXJzdEJ1dHRvbnMgPSBidXR0b25zLmZpbmQoYnV0dG9uID0+IHtcbiAgICAgIHJldHVybiBidXR0b24uc2xvdCA9PT0gJ3N0YXJ0JztcbiAgICB9KTtcbiAgICBpZiAoZmlyc3RCdXR0b25zKSB7XG4gICAgICBmaXJzdEJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgnYnV0dG9ucy1maXJzdC1zbG90Jyk7XG4gICAgfVxuICAgIGNvbnN0IGJ1dHRvbnNSZXZlcnNlZCA9IGJ1dHRvbnMucmV2ZXJzZSgpO1xuICAgIGNvbnN0IGxhc3RCdXR0b25zID0gYnV0dG9uc1JldmVyc2VkLmZpbmQoYnV0dG9uID0+IGJ1dHRvbi5zbG90ID09PSAnZW5kJykgfHwgYnV0dG9uc1JldmVyc2VkLmZpbmQoYnV0dG9uID0+IGJ1dHRvbi5zbG90ID09PSAncHJpbWFyeScpIHx8IGJ1dHRvbnNSZXZlcnNlZC5maW5kKGJ1dHRvbiA9PiBidXR0b24uc2xvdCA9PT0gJ3NlY29uZGFyeScpO1xuICAgIGlmIChsYXN0QnV0dG9ucykge1xuICAgICAgbGFzdEJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgnYnV0dG9ucy1sYXN0LXNsb3QnKTtcbiAgICB9XG4gIH1cbiAgY2hpbGRyZW5TdHlsZShldikge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IHRhZ05hbWUgPSBldi50YXJnZXQudGFnTmFtZTtcbiAgICBjb25zdCB1cGRhdGVkU3R5bGVzID0gZXYuZGV0YWlsO1xuICAgIGNvbnN0IG5ld1N0eWxlcyA9IHt9O1xuICAgIGNvbnN0IGNoaWxkU3R5bGVzID0gdGhpcy5jaGlsZHJlblN0eWxlcy5nZXQodGFnTmFtZSkgfHwge307XG4gICAgbGV0IGhhc1N0eWxlQ2hhbmdlID0gZmFsc2U7XG4gICAgT2JqZWN0LmtleXModXBkYXRlZFN0eWxlcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgY29uc3QgY2hpbGRLZXkgPSBgdG9vbGJhci0ke2tleX1gO1xuICAgICAgY29uc3QgbmV3VmFsdWUgPSB1cGRhdGVkU3R5bGVzW2tleV07XG4gICAgICBpZiAobmV3VmFsdWUgIT09IGNoaWxkU3R5bGVzW2NoaWxkS2V5XSkge1xuICAgICAgICBoYXNTdHlsZUNoYW5nZSA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAobmV3VmFsdWUpIHtcbiAgICAgICAgbmV3U3R5bGVzW2NoaWxkS2V5XSA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGhhc1N0eWxlQ2hhbmdlKSB7XG4gICAgICB0aGlzLmNoaWxkcmVuU3R5bGVzLnNldCh0YWdOYW1lLCBuZXdTdHlsZXMpO1xuICAgICAgZm9yY2VVcGRhdGUodGhpcyk7XG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICBjb25zdCBjaGlsZFN0eWxlcyA9IHt9O1xuICAgIHRoaXMuY2hpbGRyZW5TdHlsZXMuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICBPYmplY3QuYXNzaWduKGNoaWxkU3R5bGVzLCB2YWx1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGgoSG9zdCwge1xuICAgICAga2V5OiAnZjZjNGY2NjlhNmE2MWM1ZWFjNGNiYjVlYTBhYTk3YzQ4YWU1YmQ0NicsXG4gICAgICBjbGFzczogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjaGlsZFN0eWxlcyksIGNyZWF0ZUNvbG9yQ2xhc3Nlcyh0aGlzLmNvbG9yLCB7XG4gICAgICAgIFttb2RlXTogdHJ1ZSxcbiAgICAgICAgJ2luLXRvb2xiYXInOiBob3N0Q29udGV4dCgnaW9uLXRvb2xiYXInLCB0aGlzLmVsKVxuICAgICAgfSkpXG4gICAgfSwgaChcImRpdlwiLCB7XG4gICAgICBrZXk6ICc5YzgxNzQyZmZhMDJkZTliYTc0MTcwMjViMDc3ZDA1ZTY3MzA1MDc0JyxcbiAgICAgIGNsYXNzOiBcInRvb2xiYXItYmFja2dyb3VuZFwiLFxuICAgICAgcGFydDogXCJiYWNrZ3JvdW5kXCJcbiAgICB9KSwgaChcImRpdlwiLCB7XG4gICAgICBrZXk6ICc1ZmM5NmQxNjZmYTQ3ODk0YTA2MmU0MTU0MWE5YmVlZTM4MDc4YTM2JyxcbiAgICAgIGNsYXNzOiBcInRvb2xiYXItY29udGFpbmVyXCIsXG4gICAgICBwYXJ0OiBcImNvbnRhaW5lclwiXG4gICAgfSwgaChcInNsb3RcIiwge1xuICAgICAga2V5OiAnYjYyYzBkOWQ1OWE3MDE3NmJkYmY3NjlhZWM2MDkwZDdhMTY2ODUzYicsXG4gICAgICBuYW1lOiBcInN0YXJ0XCJcbiAgICB9KSwgaChcInNsb3RcIiwge1xuICAgICAga2V5OiAnZDAxZDNjYzJjNTBlNWFhYTQ5YzM0NWIyMDlmZThkYmRmM2Q0ODEzMScsXG4gICAgICBuYW1lOiBcInNlY29uZGFyeVwiXG4gICAgfSksIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnM2FhYTNhMjgxMGFlZGQzOGMzN2ViNjE2MTU4ZWM3Yjk2Mzg1MjhmYycsXG4gICAgICBjbGFzczogXCJ0b29sYmFyLWNvbnRlbnRcIixcbiAgICAgIHBhcnQ6IFwiY29udGVudFwiXG4gICAgfSwgaChcInNsb3RcIiwge1xuICAgICAga2V5OiAnMzU3MjQ2NjkwZjhkNWUxY2MzY2EzNjk2MTFkNDg0NWE3OWVkZjYxMCdcbiAgICB9KSksIGgoXCJzbG90XCIsIHtcbiAgICAgIGtleTogJzA2ZWQzY2NhNGY3ZWJmZjRhNTRjZDg3N2RhZDNjYzkyNWNjZjlmNzUnLFxuICAgICAgbmFtZTogXCJwcmltYXJ5XCJcbiAgICB9KSwgaChcInNsb3RcIiwge1xuICAgICAga2V5OiAnZTQ1M2Q0M2QxNGEyNmIwZDcyZjQxZTFiODFhNTU0YmFiOGVjZTgxMScsXG4gICAgICBuYW1lOiBcImVuZFwiXG4gICAgfSkpKTtcbiAgfVxuICBnZXQgZWwoKSB7XG4gICAgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7XG4gIH1cbn07XG5Ub29sYmFyLnN0eWxlID0ge1xuICBpb3M6IHRvb2xiYXJJb3NDc3MsXG4gIG1kOiB0b29sYmFyTWRDc3Ncbn07XG5leHBvcnQgeyBBcHAgYXMgaW9uX2FwcCwgQnV0dG9ucyBhcyBpb25fYnV0dG9ucywgQ29udGVudCBhcyBpb25fY29udGVudCwgRm9vdGVyIGFzIGlvbl9mb290ZXIsIEhlYWRlciBhcyBpb25faGVhZGVyLCBSb3V0ZXJPdXRsZXQgYXMgaW9uX3JvdXRlcl9vdXRsZXQsIFRvb2xiYXJUaXRsZSBhcyBpb25fdGl0bGUsIFRvb2xiYXIgYXMgaW9uX3Rvb2xiYXIgfTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQSxJQUFNLFNBQVM7QUFDZixJQUFNLE1BQU0sTUFBTTtBQUFBLEVBQ2hCLFlBQVksU0FBUztBQUNuQixxQkFBaUIsTUFBTSxPQUFPO0FBQUEsRUFDaEM7QUFBQSxFQUNBLG1CQUFtQjtBQUNqQjtBQUNFLFVBQUksTUFBWTtBQUNkLGNBQU0sV0FBVyxXQUFXLFFBQVEsUUFBUTtBQUM1QyxZQUFJLENBQUMsT0FBTyxXQUFXLFVBQVUsR0FBRztBQUNsQyxpQkFBTyw4QkFBcUIsRUFBRSxLQUFLLFlBQVUsT0FBTyxjQUFjLE1BQU0sQ0FBQztBQUFBLFFBQzNFO0FBQ0EsWUFBSSxPQUFPLFdBQVcsYUFBYSxRQUFRLEdBQUc7QUFDNUMsaUJBQU8sbUNBQTBCLEVBQUUsS0FBSyxZQUFVLE9BQU8sZUFB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LE1BQ0wsTUFBTTtBQUFBLElBQ1IsQ0FBQyxHQUFHLEVBQUUsUUFBUTtBQUFBLE1BQ1osS0FBSztBQUFBLE1BQ0wsTUFBTTtBQUFBLElBQ1IsQ0FBQyxHQUFHLEVBQUUsT0FBTztBQUFBLE1BQ1gsS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLE1BQ1AsTUFBTTtBQUFBLElBQ1IsR0FBRyxFQUFFLFFBQVE7QUFBQSxNQUNYLEtBQUs7QUFBQSxJQUNQLENBQUMsQ0FBQyxHQUFHLEVBQUUsUUFBUTtBQUFBLE1BQ2IsS0FBSztBQUFBLE1BQ0wsTUFBTTtBQUFBLElBQ1IsQ0FBQyxHQUFHLEVBQUUsUUFBUTtBQUFBLE1BQ1osS0FBSztBQUFBLE1BQ0wsTUFBTTtBQUFBLElBQ1IsQ0FBQyxDQUFDLENBQUM7QUFBQSxFQUNMO0FBQUEsRUFDQSxJQUFJLEtBQUs7QUFDUCxXQUFPLFdBQVcsSUFBSTtBQUFBLEVBQ3hCO0FBQ0Y7QUFDQSxRQUFRLFFBQVE7QUFBQSxFQUNkLEtBQUs7QUFBQSxFQUNMLElBQUk7QUFDTjsiLCJuYW1lcyI6WyJlbCIsInRyYW5zaXRpb24iXSwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==
