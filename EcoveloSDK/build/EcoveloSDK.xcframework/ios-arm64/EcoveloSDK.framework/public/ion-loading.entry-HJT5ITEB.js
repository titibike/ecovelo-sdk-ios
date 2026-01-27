import {
  createLockController
} from "./chunk-MEM7IN4A.js";
import {
  ENABLE_HTML_CONTENT_DEFAULT,
  sanitizeDOMString
} from "./chunk-644FBQT2.js";
import {
  BACKDROP,
  createDelegateController,
  createTriggerController,
  dismiss,
  eventMethod,
  prepareOverlay,
  present,
  setOverlayId
} from "./chunk-QATEHYOA.js";
import "./chunk-3MKGIXIK.js";
import {
  getClassMap
} from "./chunk-5VP4V3BN.js";
import {
  getIonMode
} from "./chunk-TXLH22R2.js";
import "./chunk-J5JVDPFK.js";
import "./chunk-MUBGKTGO.js";
import {
  createAnimation
} from "./chunk-2BRJTTQT.js";
import {
  raf
} from "./chunk-RZR7LWTQ.js";
import "./chunk-YSZWGYJT.js";
import {
  Host,
  config,
  createEvent,
  getElement,
  h,
  registerInstance
} from "./chunk-BFPTXCSH.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// node_modules/@ionic/core/dist/esm/ion-loading.entry.js
var iosEnterAnimation = (baseEl) => {
  const baseAnimation = createAnimation();
  const backdropAnimation = createAnimation();
  const wrapperAnimation = createAnimation();
  backdropAnimation.addElement(baseEl.querySelector("ion-backdrop")).fromTo("opacity", 0.01, "var(--backdrop-opacity)").beforeStyles({
    "pointer-events": "none"
  }).afterClearStyles(["pointer-events"]);
  wrapperAnimation.addElement(baseEl.querySelector(".loading-wrapper")).keyframes([{
    offset: 0,
    opacity: 0.01,
    transform: "scale(1.1)"
  }, {
    offset: 1,
    opacity: 1,
    transform: "scale(1)"
  }]);
  return baseAnimation.addElement(baseEl).easing("ease-in-out").duration(200).addAnimation([backdropAnimation, wrapperAnimation]);
};
var iosLeaveAnimation = (baseEl) => {
  const baseAnimation = createAnimation();
  const backdropAnimation = createAnimation();
  const wrapperAnimation = createAnimation();
  backdropAnimation.addElement(baseEl.querySelector("ion-backdrop")).fromTo("opacity", "var(--backdrop-opacity)", 0);
  wrapperAnimation.addElement(baseEl.querySelector(".loading-wrapper")).keyframes([{
    offset: 0,
    opacity: 0.99,
    transform: "scale(1)"
  }, {
    offset: 1,
    opacity: 0,
    transform: "scale(0.9)"
  }]);
  return baseAnimation.addElement(baseEl).easing("ease-in-out").duration(200).addAnimation([backdropAnimation, wrapperAnimation]);
};
var mdEnterAnimation = (baseEl) => {
  const baseAnimation = createAnimation();
  const backdropAnimation = createAnimation();
  const wrapperAnimation = createAnimation();
  backdropAnimation.addElement(baseEl.querySelector("ion-backdrop")).fromTo("opacity", 0.01, "var(--backdrop-opacity)").beforeStyles({
    "pointer-events": "none"
  }).afterClearStyles(["pointer-events"]);
  wrapperAnimation.addElement(baseEl.querySelector(".loading-wrapper")).keyframes([{
    offset: 0,
    opacity: 0.01,
    transform: "scale(1.1)"
  }, {
    offset: 1,
    opacity: 1,
    transform: "scale(1)"
  }]);
  return baseAnimation.addElement(baseEl).easing("ease-in-out").duration(200).addAnimation([backdropAnimation, wrapperAnimation]);
};
var mdLeaveAnimation = (baseEl) => {
  const baseAnimation = createAnimation();
  const backdropAnimation = createAnimation();
  const wrapperAnimation = createAnimation();
  backdropAnimation.addElement(baseEl.querySelector("ion-backdrop")).fromTo("opacity", "var(--backdrop-opacity)", 0);
  wrapperAnimation.addElement(baseEl.querySelector(".loading-wrapper")).keyframes([{
    offset: 0,
    opacity: 0.99,
    transform: "scale(1)"
  }, {
    offset: 1,
    opacity: 0,
    transform: "scale(0.9)"
  }]);
  return baseAnimation.addElement(baseEl).easing("ease-in-out").duration(200).addAnimation([backdropAnimation, wrapperAnimation]);
};
var loadingIosCss = ".sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}ion-spinner.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, var(--ion-background-color-step-100, #f9f9f9)));--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666));--backdrop-opacity:var(--ion-backdrop-opacity, 0.3);color:var(--ion-text-color, #000);font-size:0.875rem}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px;padding-top:24px;padding-bottom:24px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.loading-translucent.sc-ion-loading-ios-h .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.loading-content.sc-ion-loading-ios{font-weight:bold}.loading-spinner.sc-ion-loading-ios+.loading-content.sc-ion-loading-ios{-webkit-margin-start:16px;margin-inline-start:16px}";
var loadingMdCss = ".sc-ion-loading-md-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-md-h{display:none}.loading-wrapper.sc-ion-loading-md{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}ion-spinner.sc-ion-loading-md{color:var(--spinner-color)}.sc-ion-loading-md-h{--background:var(--ion-color-step-50, var(--ion-background-color-step-50, #f2f2f2));--max-width:280px;--max-height:90%;--spinner-color:var(--ion-color-primary, #0054e9);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);color:var(--ion-color-step-850, var(--ion-text-color-step-150, #262626));font-size:0.875rem}.loading-wrapper.sc-ion-loading-md{border-radius:2px;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px;padding-top:24px;padding-bottom:24px;-webkit-box-shadow:0 16px 20px rgba(0, 0, 0, 0.4);box-shadow:0 16px 20px rgba(0, 0, 0, 0.4)}.loading-spinner.sc-ion-loading-md+.loading-content.sc-ion-loading-md{-webkit-margin-start:16px;margin-inline-start:16px}";
var Loading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.didPresent = createEvent(this, "ionLoadingDidPresent", 7);
    this.willPresent = createEvent(this, "ionLoadingWillPresent", 7);
    this.willDismiss = createEvent(this, "ionLoadingWillDismiss", 7);
    this.didDismiss = createEvent(this, "ionLoadingDidDismiss", 7);
    this.didPresentShorthand = createEvent(this, "didPresent", 7);
    this.willPresentShorthand = createEvent(this, "willPresent", 7);
    this.willDismissShorthand = createEvent(this, "willDismiss", 7);
    this.didDismissShorthand = createEvent(this, "didDismiss", 7);
    this.delegateController = createDelegateController(this);
    this.lockController = createLockController();
    this.triggerController = createTriggerController();
    this.customHTMLEnabled = config.get("innerHTMLTemplatesEnabled", ENABLE_HTML_CONTENT_DEFAULT);
    this.presented = false;
    this.hasController = false;
    this.keyboardClose = true;
    this.duration = 0;
    this.backdropDismiss = false;
    this.showBackdrop = true;
    this.translucent = false;
    this.animated = true;
    this.isOpen = false;
    this.onBackdropTap = () => {
      this.dismiss(void 0, BACKDROP);
    };
  }
  onIsOpenChange(newValue, oldValue) {
    if (newValue === true && oldValue === false) {
      this.present();
    } else if (newValue === false && oldValue === true) {
      this.dismiss();
    }
  }
  triggerChanged() {
    const {
      trigger,
      el,
      triggerController
    } = this;
    if (trigger) {
      triggerController.addClickListener(el, trigger);
    }
  }
  connectedCallback() {
    prepareOverlay(this.el);
    this.triggerChanged();
  }
  componentWillLoad() {
    var _a;
    if (this.spinner === void 0) {
      const mode = getIonMode(this);
      this.spinner = config.get("loadingSpinner", config.get("spinner", mode === "ios" ? "lines" : "crescent"));
    }
    if (!((_a = this.htmlAttributes) === null || _a === void 0 ? void 0 : _a.id)) {
      setOverlayId(this.el);
    }
  }
  componentDidLoad() {
    if (this.isOpen === true) {
      raf(() => this.present());
    }
    this.triggerChanged();
  }
  disconnectedCallback() {
    this.triggerController.removeClickListener();
  }
  /**
   * Present the loading overlay after it has been created.
   */
  present() {
    return __async(this, null, function* () {
      const unlock = yield this.lockController.lock();
      yield this.delegateController.attachViewToDom();
      yield present(this, "loadingEnter", iosEnterAnimation, mdEnterAnimation);
      if (this.duration > 0) {
        this.durationTimeout = setTimeout(() => this.dismiss(), this.duration + 10);
      }
      unlock();
    });
  }
  /**
   * Dismiss the loading overlay after it has been presented.
   * This is a no-op if the overlay has not been presented yet. If you want
   * to remove an overlay from the DOM that was never presented, use the
   * [remove](https://developer.mozilla.org/en-US/docs/Web/API/Element/remove) method.
   *
   * @param data Any data to emit in the dismiss events.
   * @param role The role of the element that is dismissing the loading.
   * This can be useful in a button handler for determining which button was
   * clicked to dismiss the loading. Some examples include:
   * `"cancel"`, `"destructive"`, `"selected"`, and `"backdrop"`.
   */
  dismiss(data, role) {
    return __async(this, null, function* () {
      const unlock = yield this.lockController.lock();
      if (this.durationTimeout) {
        clearTimeout(this.durationTimeout);
      }
      const dismissed = yield dismiss(this, data, role, "loadingLeave", iosLeaveAnimation, mdLeaveAnimation);
      if (dismissed) {
        this.delegateController.removeViewFromDom();
      }
      unlock();
      return dismissed;
    });
  }
  /**
   * Returns a promise that resolves when the loading did dismiss.
   */
  onDidDismiss() {
    return eventMethod(this.el, "ionLoadingDidDismiss");
  }
  /**
   * Returns a promise that resolves when the loading will dismiss.
   */
  onWillDismiss() {
    return eventMethod(this.el, "ionLoadingWillDismiss");
  }
  renderLoadingMessage(msgId) {
    const {
      customHTMLEnabled,
      message
    } = this;
    if (customHTMLEnabled) {
      return h("div", {
        class: "loading-content",
        id: msgId,
        innerHTML: sanitizeDOMString(message)
      });
    }
    return h("div", {
      class: "loading-content",
      id: msgId
    }, message);
  }
  render() {
    const {
      message,
      spinner,
      htmlAttributes,
      overlayIndex
    } = this;
    const mode = getIonMode(this);
    const msgId = `loading-${overlayIndex}-msg`;
    const ariaLabelledBy = message !== void 0 ? msgId : null;
    return h(Host, Object.assign({
      key: "4497183ce220242abe19ae15f328f9a92ccafbbc",
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": ariaLabelledBy,
      tabindex: "-1"
    }, htmlAttributes, {
      style: {
        zIndex: `${4e4 + this.overlayIndex}`
      },
      onIonBackdropTap: this.onBackdropTap,
      class: Object.assign(Object.assign({}, getClassMap(this.cssClass)), {
        [mode]: true,
        "overlay-hidden": true,
        "loading-translucent": this.translucent
      })
    }), h("ion-backdrop", {
      key: "231dec84e424a2dc358ce95b84d6035cf43e4dea",
      visible: this.showBackdrop,
      tappable: this.backdropDismiss
    }), h("div", {
      key: "c9af29b6e6bb49a217396a5c874bbfb8835a926c",
      tabindex: "0",
      "aria-hidden": "true"
    }), h("div", {
      key: "a8659863743cdeccbe1ba810eaabfd3ebfcb86f3",
      class: "loading-wrapper ion-overlay-wrapper"
    }, spinner && h("div", {
      key: "3b346f39bc71691bd8686556a1e142198a7b12fa",
      class: "loading-spinner"
    }, h("ion-spinner", {
      key: "8dc2bf1556e5138e262827f1516c59ecd09f3520",
      name: spinner,
      "aria-hidden": "true"
    })), message !== void 0 && this.renderLoadingMessage(msgId)), h("div", {
      key: "054164c0dbae9a0e0973dd3c8e28f5b771820310",
      tabindex: "0",
      "aria-hidden": "true"
    }));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "isOpen": ["onIsOpenChange"],
      "trigger": ["triggerChanged"]
    };
  }
};
Loading.style = {
  ios: loadingIosCss,
  md: loadingMdCss
};
export {
  Loading as ion_loading
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-loading.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tbG9hZGluZy5lbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGNyZWF0ZUV2ZW50LCBlIGFzIGNvbmZpZywgaCwgZCBhcyBIb3N0LCBnIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2luZGV4LTREeFk2X2dHLmpzJztcbmltcG9ydCB7IEUgYXMgRU5BQkxFX0hUTUxfQ09OVEVOVF9ERUZBVUxULCBhIGFzIHNhbml0aXplRE9NU3RyaW5nIH0gZnJvbSAnLi9jb25maWctRHhfNndQSUouanMnO1xuaW1wb3J0IHsgciBhcyByYWYgfSBmcm9tICcuL2hlbHBlcnMtOEtTUVFHUXkuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVMb2NrQ29udHJvbGxlciB9IGZyb20gJy4vbG9jay1jb250cm9sbGVyLUItaGlyVDB2LmpzJztcbmltcG9ydCB7IGQgYXMgY3JlYXRlRGVsZWdhdGVDb250cm9sbGVyLCBlIGFzIGNyZWF0ZVRyaWdnZXJDb250cm9sbGVyLCBCIGFzIEJBQ0tEUk9QLCBqIGFzIHByZXBhcmVPdmVybGF5LCBrIGFzIHNldE92ZXJsYXlJZCwgZiBhcyBwcmVzZW50LCBnIGFzIGRpc21pc3MsIGggYXMgZXZlbnRNZXRob2QgfSBmcm9tICcuL292ZXJsYXlzLVpYXzQtdF9yLmpzJztcbmltcG9ydCB7IGcgYXMgZ2V0Q2xhc3NNYXAgfSBmcm9tICcuL3RoZW1lLURpVkp5cWxYLmpzJztcbmltcG9ydCB7IGIgYXMgZ2V0SW9uTW9kZSB9IGZyb20gJy4vaW9uaWMtZ2xvYmFsLUNUU3l1ZmhGLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlQW5pbWF0aW9uIH0gZnJvbSAnLi9hbmltYXRpb24tQnZoQXRnY2EuanMnO1xuaW1wb3J0ICcuL2luZGV4LVpqUDRDamVaLmpzJztcbmltcG9ydCAnLi9oYXJkd2FyZS1iYWNrLWJ1dHRvbi1EaGJkLTIzSC5qcyc7XG5pbXBvcnQgJy4vZnJhbWV3b3JrLWRlbGVnYXRlLUJMRUJnSDA2LmpzJztcbmltcG9ydCAnLi9nZXN0dXJlLWNvbnRyb2xsZXItQlRFT3MxYXQuanMnO1xuXG4vKipcbiAqIGlPUyBMb2FkaW5nIEVudGVyIEFuaW1hdGlvblxuICovXG5jb25zdCBpb3NFbnRlckFuaW1hdGlvbiA9IGJhc2VFbCA9PiB7XG4gIGNvbnN0IGJhc2VBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgY29uc3QgYmFja2Ryb3BBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgY29uc3Qgd3JhcHBlckFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICBiYWNrZHJvcEFuaW1hdGlvbi5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCdpb24tYmFja2Ryb3AnKSkuZnJvbVRvKCdvcGFjaXR5JywgMC4wMSwgJ3ZhcigtLWJhY2tkcm9wLW9wYWNpdHkpJykuYmVmb3JlU3R5bGVzKHtcbiAgICAncG9pbnRlci1ldmVudHMnOiAnbm9uZSdcbiAgfSkuYWZ0ZXJDbGVhclN0eWxlcyhbJ3BvaW50ZXItZXZlbnRzJ10pO1xuICB3cmFwcGVyQW5pbWF0aW9uLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJy5sb2FkaW5nLXdyYXBwZXInKSkua2V5ZnJhbWVzKFt7XG4gICAgb2Zmc2V0OiAwLFxuICAgIG9wYWNpdHk6IDAuMDEsXG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMS4xKSdcbiAgfSwge1xuICAgIG9mZnNldDogMSxcbiAgICBvcGFjaXR5OiAxLFxuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJ1xuICB9XSk7XG4gIHJldHVybiBiYXNlQW5pbWF0aW9uLmFkZEVsZW1lbnQoYmFzZUVsKS5lYXNpbmcoJ2Vhc2UtaW4tb3V0JykuZHVyYXRpb24oMjAwKS5hZGRBbmltYXRpb24oW2JhY2tkcm9wQW5pbWF0aW9uLCB3cmFwcGVyQW5pbWF0aW9uXSk7XG59O1xuXG4vKipcbiAqIGlPUyBMb2FkaW5nIExlYXZlIEFuaW1hdGlvblxuICovXG5jb25zdCBpb3NMZWF2ZUFuaW1hdGlvbiA9IGJhc2VFbCA9PiB7XG4gIGNvbnN0IGJhc2VBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgY29uc3QgYmFja2Ryb3BBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgY29uc3Qgd3JhcHBlckFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICBiYWNrZHJvcEFuaW1hdGlvbi5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCdpb24tYmFja2Ryb3AnKSkuZnJvbVRvKCdvcGFjaXR5JywgJ3ZhcigtLWJhY2tkcm9wLW9wYWNpdHkpJywgMCk7XG4gIHdyYXBwZXJBbmltYXRpb24uYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignLmxvYWRpbmctd3JhcHBlcicpKS5rZXlmcmFtZXMoW3tcbiAgICBvZmZzZXQ6IDAsXG4gICAgb3BhY2l0eTogMC45OSxcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKSdcbiAgfSwge1xuICAgIG9mZnNldDogMSxcbiAgICBvcGFjaXR5OiAwLFxuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDAuOSknXG4gIH1dKTtcbiAgcmV0dXJuIGJhc2VBbmltYXRpb24uYWRkRWxlbWVudChiYXNlRWwpLmVhc2luZygnZWFzZS1pbi1vdXQnKS5kdXJhdGlvbigyMDApLmFkZEFuaW1hdGlvbihbYmFja2Ryb3BBbmltYXRpb24sIHdyYXBwZXJBbmltYXRpb25dKTtcbn07XG5cbi8qKlxuICogTWQgTG9hZGluZyBFbnRlciBBbmltYXRpb25cbiAqL1xuY29uc3QgbWRFbnRlckFuaW1hdGlvbiA9IGJhc2VFbCA9PiB7XG4gIGNvbnN0IGJhc2VBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgY29uc3QgYmFja2Ryb3BBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgY29uc3Qgd3JhcHBlckFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICBiYWNrZHJvcEFuaW1hdGlvbi5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCdpb24tYmFja2Ryb3AnKSkuZnJvbVRvKCdvcGFjaXR5JywgMC4wMSwgJ3ZhcigtLWJhY2tkcm9wLW9wYWNpdHkpJykuYmVmb3JlU3R5bGVzKHtcbiAgICAncG9pbnRlci1ldmVudHMnOiAnbm9uZSdcbiAgfSkuYWZ0ZXJDbGVhclN0eWxlcyhbJ3BvaW50ZXItZXZlbnRzJ10pO1xuICB3cmFwcGVyQW5pbWF0aW9uLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJy5sb2FkaW5nLXdyYXBwZXInKSkua2V5ZnJhbWVzKFt7XG4gICAgb2Zmc2V0OiAwLFxuICAgIG9wYWNpdHk6IDAuMDEsXG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMS4xKSdcbiAgfSwge1xuICAgIG9mZnNldDogMSxcbiAgICBvcGFjaXR5OiAxLFxuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJ1xuICB9XSk7XG4gIHJldHVybiBiYXNlQW5pbWF0aW9uLmFkZEVsZW1lbnQoYmFzZUVsKS5lYXNpbmcoJ2Vhc2UtaW4tb3V0JykuZHVyYXRpb24oMjAwKS5hZGRBbmltYXRpb24oW2JhY2tkcm9wQW5pbWF0aW9uLCB3cmFwcGVyQW5pbWF0aW9uXSk7XG59O1xuXG4vKipcbiAqIE1kIExvYWRpbmcgTGVhdmUgQW5pbWF0aW9uXG4gKi9cbmNvbnN0IG1kTGVhdmVBbmltYXRpb24gPSBiYXNlRWwgPT4ge1xuICBjb25zdCBiYXNlQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gIGNvbnN0IGJhY2tkcm9wQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gIGNvbnN0IHdyYXBwZXJBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgYmFja2Ryb3BBbmltYXRpb24uYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignaW9uLWJhY2tkcm9wJykpLmZyb21Ubygnb3BhY2l0eScsICd2YXIoLS1iYWNrZHJvcC1vcGFjaXR5KScsIDApO1xuICB3cmFwcGVyQW5pbWF0aW9uLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJy5sb2FkaW5nLXdyYXBwZXInKSkua2V5ZnJhbWVzKFt7XG4gICAgb2Zmc2V0OiAwLFxuICAgIG9wYWNpdHk6IDAuOTksXG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknXG4gIH0sIHtcbiAgICBvZmZzZXQ6IDEsXG4gICAgb3BhY2l0eTogMCxcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjkpJ1xuICB9XSk7XG4gIHJldHVybiBiYXNlQW5pbWF0aW9uLmFkZEVsZW1lbnQoYmFzZUVsKS5lYXNpbmcoJ2Vhc2UtaW4tb3V0JykuZHVyYXRpb24oMjAwKS5hZGRBbmltYXRpb24oW2JhY2tkcm9wQW5pbWF0aW9uLCB3cmFwcGVyQW5pbWF0aW9uXSk7XG59O1xuY29uc3QgbG9hZGluZ0lvc0NzcyA9IFwiLnNjLWlvbi1sb2FkaW5nLWlvcy1oey0tbWluLXdpZHRoOmF1dG87LS13aWR0aDphdXRvOy0tbWluLWhlaWdodDphdXRvOy0taGVpZ2h0OmF1dG87LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7bGVmdDowO3JpZ2h0OjA7dG9wOjA7Ym90dG9tOjA7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246Zml4ZWQ7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO291dGxpbmU6bm9uZTtmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHksIGluaGVyaXQpO2NvbnRhaW46c3RyaWN0Oy1tcy10b3VjaC1hY3Rpb246bm9uZTt0b3VjaC1hY3Rpb246bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7ei1pbmRleDoxMDAxfS5vdmVybGF5LWhpZGRlbi5zYy1pb24tbG9hZGluZy1pb3MtaHtkaXNwbGF5Om5vbmV9LmxvYWRpbmctd3JhcHBlci5zYy1pb24tbG9hZGluZy1pb3N7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246aW5oZXJpdDthbGlnbi1pdGVtczppbmhlcml0Oy1tcy1mbGV4LXBhY2s6aW5oZXJpdDtqdXN0aWZ5LWNvbnRlbnQ6aW5oZXJpdDt3aWR0aDp2YXIoLS13aWR0aCk7bWluLXdpZHRoOnZhcigtLW1pbi13aWR0aCk7bWF4LXdpZHRoOnZhcigtLW1heC13aWR0aCk7aGVpZ2h0OnZhcigtLWhlaWdodCk7bWluLWhlaWdodDp2YXIoLS1taW4taGVpZ2h0KTttYXgtaGVpZ2h0OnZhcigtLW1heC1oZWlnaHQpO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7b3BhY2l0eTowO3otaW5kZXg6MTB9aW9uLXNwaW5uZXIuc2MtaW9uLWxvYWRpbmctaW9ze2NvbG9yOnZhcigtLXNwaW5uZXItY29sb3IpfS5zYy1pb24tbG9hZGluZy1pb3MtaHstLWJhY2tncm91bmQ6dmFyKC0taW9uLW92ZXJsYXktYmFja2dyb3VuZC1jb2xvciwgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTAwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTEwMCwgI2Y5ZjlmOSkpKTstLW1heC13aWR0aDoyNzBweDstLW1heC1oZWlnaHQ6OTAlOy0tc3Bpbm5lci1jb2xvcjp2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsIHZhcigtLWlvbi10ZXh0LWNvbG9yLXN0ZXAtNDAwLCAjNjY2NjY2KSk7LS1iYWNrZHJvcC1vcGFjaXR5OnZhcigtLWlvbi1iYWNrZHJvcC1vcGFjaXR5LCAwLjMpO2NvbG9yOnZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwKTtmb250LXNpemU6MC44NzVyZW19LmxvYWRpbmctd3JhcHBlci5zYy1pb24tbG9hZGluZy1pb3N7Ym9yZGVyLXJhZGl1czo4cHg7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjM0cHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MzRweDstd2Via2l0LXBhZGRpbmctZW5kOjM0cHg7cGFkZGluZy1pbmxpbmUtZW5kOjM0cHg7cGFkZGluZy10b3A6MjRweDtwYWRkaW5nLWJvdHRvbToyNHB4fUBzdXBwb3J0cyAoKC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDApKSBvciAoYmFja2Ryb3AtZmlsdGVyOiBibHVyKDApKSl7LmxvYWRpbmctdHJhbnNsdWNlbnQuc2MtaW9uLWxvYWRpbmctaW9zLWggLmxvYWRpbmctd3JhcHBlci5zYy1pb24tbG9hZGluZy1pb3N7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYiwgMjU1LCAyNTUsIDI1NSksIDAuOCk7LXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6c2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KTtiYWNrZHJvcC1maWx0ZXI6c2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KX19LmxvYWRpbmctY29udGVudC5zYy1pb24tbG9hZGluZy1pb3N7Zm9udC13ZWlnaHQ6Ym9sZH0ubG9hZGluZy1zcGlubmVyLnNjLWlvbi1sb2FkaW5nLWlvcysubG9hZGluZy1jb250ZW50LnNjLWlvbi1sb2FkaW5nLWlvc3std2Via2l0LW1hcmdpbi1zdGFydDoxNnB4O21hcmdpbi1pbmxpbmUtc3RhcnQ6MTZweH1cIjtcbmNvbnN0IGxvYWRpbmdNZENzcyA9IFwiLnNjLWlvbi1sb2FkaW5nLW1kLWh7LS1taW4td2lkdGg6YXV0bzstLXdpZHRoOmF1dG87LS1taW4taGVpZ2h0OmF1dG87LS1oZWlnaHQ6YXV0bzstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjpmaXhlZDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7b3V0bGluZTpub25lO2ZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseSwgaW5oZXJpdCk7Y29udGFpbjpzdHJpY3Q7LW1zLXRvdWNoLWFjdGlvbjpub25lO3RvdWNoLWFjdGlvbjpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTt6LWluZGV4OjEwMDF9Lm92ZXJsYXktaGlkZGVuLnNjLWlvbi1sb2FkaW5nLW1kLWh7ZGlzcGxheTpub25lfS5sb2FkaW5nLXdyYXBwZXIuc2MtaW9uLWxvYWRpbmctbWR7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246aW5oZXJpdDthbGlnbi1pdGVtczppbmhlcml0Oy1tcy1mbGV4LXBhY2s6aW5oZXJpdDtqdXN0aWZ5LWNvbnRlbnQ6aW5oZXJpdDt3aWR0aDp2YXIoLS13aWR0aCk7bWluLXdpZHRoOnZhcigtLW1pbi13aWR0aCk7bWF4LXdpZHRoOnZhcigtLW1heC13aWR0aCk7aGVpZ2h0OnZhcigtLWhlaWdodCk7bWluLWhlaWdodDp2YXIoLS1taW4taGVpZ2h0KTttYXgtaGVpZ2h0OnZhcigtLW1heC1oZWlnaHQpO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7b3BhY2l0eTowO3otaW5kZXg6MTB9aW9uLXNwaW5uZXIuc2MtaW9uLWxvYWRpbmctbWR7Y29sb3I6dmFyKC0tc3Bpbm5lci1jb2xvcil9LnNjLWlvbi1sb2FkaW5nLW1kLWh7LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1zdGVwLTUwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTUwLCAjZjJmMmYyKSk7LS1tYXgtd2lkdGg6MjgwcHg7LS1tYXgtaGVpZ2h0OjkwJTstLXNwaW5uZXItY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMwMDU0ZTkpOy0tYmFja2Ryb3Atb3BhY2l0eTp2YXIoLS1pb24tYmFja2Ryb3Atb3BhY2l0eSwgMC4zMik7Y29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtODUwLCB2YXIoLS1pb24tdGV4dC1jb2xvci1zdGVwLTE1MCwgIzI2MjYyNikpO2ZvbnQtc2l6ZTowLjg3NXJlbX0ubG9hZGluZy13cmFwcGVyLnNjLWlvbi1sb2FkaW5nLW1ke2JvcmRlci1yYWRpdXM6MnB4Oy13ZWJraXQtcGFkZGluZy1zdGFydDoyNHB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjI0cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDoyNHB4O3BhZGRpbmctaW5saW5lLWVuZDoyNHB4O3BhZGRpbmctdG9wOjI0cHg7cGFkZGluZy1ib3R0b206MjRweDstd2Via2l0LWJveC1zaGFkb3c6MCAxNnB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjQpO2JveC1zaGFkb3c6MCAxNnB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjQpfS5sb2FkaW5nLXNwaW5uZXIuc2MtaW9uLWxvYWRpbmctbWQrLmxvYWRpbmctY29udGVudC5zYy1pb24tbG9hZGluZy1tZHstd2Via2l0LW1hcmdpbi1zdGFydDoxNnB4O21hcmdpbi1pbmxpbmUtc3RhcnQ6MTZweH1cIjtcbmNvbnN0IExvYWRpbmcgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuZGlkUHJlc2VudCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uTG9hZGluZ0RpZFByZXNlbnRcIiwgNyk7XG4gICAgdGhpcy53aWxsUHJlc2VudCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uTG9hZGluZ1dpbGxQcmVzZW50XCIsIDcpO1xuICAgIHRoaXMud2lsbERpc21pc3MgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkxvYWRpbmdXaWxsRGlzbWlzc1wiLCA3KTtcbiAgICB0aGlzLmRpZERpc21pc3MgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkxvYWRpbmdEaWREaXNtaXNzXCIsIDcpO1xuICAgIHRoaXMuZGlkUHJlc2VudFNob3J0aGFuZCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiZGlkUHJlc2VudFwiLCA3KTtcbiAgICB0aGlzLndpbGxQcmVzZW50U2hvcnRoYW5kID0gY3JlYXRlRXZlbnQodGhpcywgXCJ3aWxsUHJlc2VudFwiLCA3KTtcbiAgICB0aGlzLndpbGxEaXNtaXNzU2hvcnRoYW5kID0gY3JlYXRlRXZlbnQodGhpcywgXCJ3aWxsRGlzbWlzc1wiLCA3KTtcbiAgICB0aGlzLmRpZERpc21pc3NTaG9ydGhhbmQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImRpZERpc21pc3NcIiwgNyk7XG4gICAgdGhpcy5kZWxlZ2F0ZUNvbnRyb2xsZXIgPSBjcmVhdGVEZWxlZ2F0ZUNvbnRyb2xsZXIodGhpcyk7XG4gICAgdGhpcy5sb2NrQ29udHJvbGxlciA9IGNyZWF0ZUxvY2tDb250cm9sbGVyKCk7XG4gICAgdGhpcy50cmlnZ2VyQ29udHJvbGxlciA9IGNyZWF0ZVRyaWdnZXJDb250cm9sbGVyKCk7XG4gICAgdGhpcy5jdXN0b21IVE1MRW5hYmxlZCA9IGNvbmZpZy5nZXQoJ2lubmVySFRNTFRlbXBsYXRlc0VuYWJsZWQnLCBFTkFCTEVfSFRNTF9DT05URU5UX0RFRkFVTFQpO1xuICAgIHRoaXMucHJlc2VudGVkID0gZmFsc2U7XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHRoaXMuaGFzQ29udHJvbGxlciA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIElmIGB0cnVlYCwgdGhlIGtleWJvYXJkIHdpbGwgYmUgYXV0b21hdGljYWxseSBkaXNtaXNzZWQgd2hlbiB0aGUgb3ZlcmxheSBpcyBwcmVzZW50ZWQuXG4gICAgICovXG4gICAgdGhpcy5rZXlib2FyZENsb3NlID0gdHJ1ZTtcbiAgICAvKipcbiAgICAgKiBOdW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHdhaXQgYmVmb3JlIGRpc21pc3NpbmcgdGhlIGxvYWRpbmcgaW5kaWNhdG9yLlxuICAgICAqL1xuICAgIHRoaXMuZHVyYXRpb24gPSAwO1xuICAgIC8qKlxuICAgICAqIElmIGB0cnVlYCwgdGhlIGxvYWRpbmcgaW5kaWNhdG9yIHdpbGwgYmUgZGlzbWlzc2VkIHdoZW4gdGhlIGJhY2tkcm9wIGlzIGNsaWNrZWQuXG4gICAgICovXG4gICAgdGhpcy5iYWNrZHJvcERpc21pc3MgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIGEgYmFja2Ryb3Agd2lsbCBiZSBkaXNwbGF5ZWQgYmVoaW5kIHRoZSBsb2FkaW5nIGluZGljYXRvci5cbiAgICAgKi9cbiAgICB0aGlzLnNob3dCYWNrZHJvcCA9IHRydWU7XG4gICAgLyoqXG4gICAgICogSWYgYHRydWVgLCB0aGUgbG9hZGluZyBpbmRpY2F0b3Igd2lsbCBiZSB0cmFuc2x1Y2VudC5cbiAgICAgKiBPbmx5IGFwcGxpZXMgd2hlbiB0aGUgbW9kZSBpcyBgXCJpb3NcImAgYW5kIHRoZSBkZXZpY2Ugc3VwcG9ydHNcbiAgICAgKiBbYGJhY2tkcm9wLWZpbHRlcmBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9iYWNrZHJvcC1maWx0ZXIjQnJvd3Nlcl9jb21wYXRpYmlsaXR5KS5cbiAgICAgKi9cbiAgICB0aGlzLnRyYW5zbHVjZW50ID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogSWYgYHRydWVgLCB0aGUgbG9hZGluZyBpbmRpY2F0b3Igd2lsbCBhbmltYXRlLlxuICAgICAqL1xuICAgIHRoaXMuYW5pbWF0ZWQgPSB0cnVlO1xuICAgIC8qKlxuICAgICAqIElmIGB0cnVlYCwgdGhlIGxvYWRpbmcgaW5kaWNhdG9yIHdpbGwgb3Blbi4gSWYgYGZhbHNlYCwgdGhlIGxvYWRpbmcgaW5kaWNhdG9yIHdpbGwgY2xvc2UuXG4gICAgICogVXNlIHRoaXMgaWYgeW91IG5lZWQgZmluZXIgZ3JhaW5lZCBjb250cm9sIG92ZXIgcHJlc2VudGF0aW9uLCBvdGhlcndpc2VcbiAgICAgKiBqdXN0IHVzZSB0aGUgbG9hZGluZ0NvbnRyb2xsZXIgb3IgdGhlIGB0cmlnZ2VyYCBwcm9wZXJ0eS5cbiAgICAgKiBOb3RlOiBgaXNPcGVuYCB3aWxsIG5vdCBhdXRvbWF0aWNhbGx5IGJlIHNldCBiYWNrIHRvIGBmYWxzZWAgd2hlblxuICAgICAqIHRoZSBsb2FkaW5nIGluZGljYXRvciBkaXNtaXNzZXMuIFlvdSB3aWxsIG5lZWQgdG8gZG8gdGhhdCBpbiB5b3VyIGNvZGUuXG4gICAgICovXG4gICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICB0aGlzLm9uQmFja2Ryb3BUYXAgPSAoKSA9PiB7XG4gICAgICB0aGlzLmRpc21pc3ModW5kZWZpbmVkLCBCQUNLRFJPUCk7XG4gICAgfTtcbiAgfVxuICBvbklzT3BlbkNoYW5nZShuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICBpZiAobmV3VmFsdWUgPT09IHRydWUgJiYgb2xkVmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLnByZXNlbnQoKTtcbiAgICB9IGVsc2UgaWYgKG5ld1ZhbHVlID09PSBmYWxzZSAmJiBvbGRWYWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5kaXNtaXNzKCk7XG4gICAgfVxuICB9XG4gIHRyaWdnZXJDaGFuZ2VkKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRyaWdnZXIsXG4gICAgICBlbCxcbiAgICAgIHRyaWdnZXJDb250cm9sbGVyXG4gICAgfSA9IHRoaXM7XG4gICAgaWYgKHRyaWdnZXIpIHtcbiAgICAgIHRyaWdnZXJDb250cm9sbGVyLmFkZENsaWNrTGlzdGVuZXIoZWwsIHRyaWdnZXIpO1xuICAgIH1cbiAgfVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBwcmVwYXJlT3ZlcmxheSh0aGlzLmVsKTtcbiAgICB0aGlzLnRyaWdnZXJDaGFuZ2VkKCk7XG4gIH1cbiAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgdmFyIF9hO1xuICAgIGlmICh0aGlzLnNwaW5uZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICB0aGlzLnNwaW5uZXIgPSBjb25maWcuZ2V0KCdsb2FkaW5nU3Bpbm5lcicsIGNvbmZpZy5nZXQoJ3NwaW5uZXInLCBtb2RlID09PSAnaW9zJyA/ICdsaW5lcycgOiAnY3Jlc2NlbnQnKSk7XG4gICAgfVxuICAgIGlmICghKChfYSA9IHRoaXMuaHRtbEF0dHJpYnV0ZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pZCkpIHtcbiAgICAgIHNldE92ZXJsYXlJZCh0aGlzLmVsKTtcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICAvKipcbiAgICAgKiBJZiBsb2FkaW5nIGluZGljYXRvciB3YXMgcmVuZGVyZWQgd2l0aCBpc09wZW49XCJ0cnVlXCJcbiAgICAgKiB0aGVuIHdlIHNob3VsZCBvcGVuIGxvYWRpbmcgaW5kaWNhdG9yIGltbWVkaWF0ZWx5LlxuICAgICAqL1xuICAgIGlmICh0aGlzLmlzT3BlbiA9PT0gdHJ1ZSkge1xuICAgICAgcmFmKCgpID0+IHRoaXMucHJlc2VudCgpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogV2hlbiBiaW5kaW5nIHZhbHVlcyBpbiBmcmFtZXdvcmtzIHN1Y2ggYXMgQW5ndWxhclxuICAgICAqIGl0IGlzIHBvc3NpYmxlIGZvciB0aGUgdmFsdWUgdG8gYmUgc2V0IGFmdGVyIHRoZSBXZWIgQ29tcG9uZW50XG4gICAgICogaW5pdGlhbGl6ZXMgYnV0IGJlZm9yZSB0aGUgdmFsdWUgd2F0Y2hlciBpcyBzZXQgdXAgaW4gU3RlbmNpbC5cbiAgICAgKiBBcyBhIHJlc3VsdCwgdGhlIHdhdGNoZXIgY2FsbGJhY2sgbWF5IG5vdCBiZSBmaXJlZC5cbiAgICAgKiBXZSB3b3JrIGFyb3VuZCB0aGlzIGJ5IG1hbnVhbGx5IGNhbGxpbmcgdGhlIHdhdGNoZXJcbiAgICAgKiBjYWxsYmFjayB3aGVuIHRoZSBjb21wb25lbnQgaGFzIGxvYWRlZCBhbmQgdGhlIHdhdGNoZXJcbiAgICAgKiBpcyBjb25maWd1cmVkLlxuICAgICAqL1xuICAgIHRoaXMudHJpZ2dlckNoYW5nZWQoKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLnRyaWdnZXJDb250cm9sbGVyLnJlbW92ZUNsaWNrTGlzdGVuZXIoKTtcbiAgfVxuICAvKipcbiAgICogUHJlc2VudCB0aGUgbG9hZGluZyBvdmVybGF5IGFmdGVyIGl0IGhhcyBiZWVuIGNyZWF0ZWQuXG4gICAqL1xuICBhc3luYyBwcmVzZW50KCkge1xuICAgIGNvbnN0IHVubG9jayA9IGF3YWl0IHRoaXMubG9ja0NvbnRyb2xsZXIubG9jaygpO1xuICAgIGF3YWl0IHRoaXMuZGVsZWdhdGVDb250cm9sbGVyLmF0dGFjaFZpZXdUb0RvbSgpO1xuICAgIGF3YWl0IHByZXNlbnQodGhpcywgJ2xvYWRpbmdFbnRlcicsIGlvc0VudGVyQW5pbWF0aW9uLCBtZEVudGVyQW5pbWF0aW9uKTtcbiAgICBpZiAodGhpcy5kdXJhdGlvbiA+IDApIHtcbiAgICAgIHRoaXMuZHVyYXRpb25UaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLmRpc21pc3MoKSwgdGhpcy5kdXJhdGlvbiArIDEwKTtcbiAgICB9XG4gICAgdW5sb2NrKCk7XG4gIH1cbiAgLyoqXG4gICAqIERpc21pc3MgdGhlIGxvYWRpbmcgb3ZlcmxheSBhZnRlciBpdCBoYXMgYmVlbiBwcmVzZW50ZWQuXG4gICAqIFRoaXMgaXMgYSBuby1vcCBpZiB0aGUgb3ZlcmxheSBoYXMgbm90IGJlZW4gcHJlc2VudGVkIHlldC4gSWYgeW91IHdhbnRcbiAgICogdG8gcmVtb3ZlIGFuIG92ZXJsYXkgZnJvbSB0aGUgRE9NIHRoYXQgd2FzIG5ldmVyIHByZXNlbnRlZCwgdXNlIHRoZVxuICAgKiBbcmVtb3ZlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRWxlbWVudC9yZW1vdmUpIG1ldGhvZC5cbiAgICpcbiAgICogQHBhcmFtIGRhdGEgQW55IGRhdGEgdG8gZW1pdCBpbiB0aGUgZGlzbWlzcyBldmVudHMuXG4gICAqIEBwYXJhbSByb2xlIFRoZSByb2xlIG9mIHRoZSBlbGVtZW50IHRoYXQgaXMgZGlzbWlzc2luZyB0aGUgbG9hZGluZy5cbiAgICogVGhpcyBjYW4gYmUgdXNlZnVsIGluIGEgYnV0dG9uIGhhbmRsZXIgZm9yIGRldGVybWluaW5nIHdoaWNoIGJ1dHRvbiB3YXNcbiAgICogY2xpY2tlZCB0byBkaXNtaXNzIHRoZSBsb2FkaW5nLiBTb21lIGV4YW1wbGVzIGluY2x1ZGU6XG4gICAqIGBcImNhbmNlbFwiYCwgYFwiZGVzdHJ1Y3RpdmVcImAsIGBcInNlbGVjdGVkXCJgLCBhbmQgYFwiYmFja2Ryb3BcImAuXG4gICAqL1xuICBhc3luYyBkaXNtaXNzKGRhdGEsIHJvbGUpIHtcbiAgICBjb25zdCB1bmxvY2sgPSBhd2FpdCB0aGlzLmxvY2tDb250cm9sbGVyLmxvY2soKTtcbiAgICBpZiAodGhpcy5kdXJhdGlvblRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmR1cmF0aW9uVGltZW91dCk7XG4gICAgfVxuICAgIGNvbnN0IGRpc21pc3NlZCA9IGF3YWl0IGRpc21pc3ModGhpcywgZGF0YSwgcm9sZSwgJ2xvYWRpbmdMZWF2ZScsIGlvc0xlYXZlQW5pbWF0aW9uLCBtZExlYXZlQW5pbWF0aW9uKTtcbiAgICBpZiAoZGlzbWlzc2VkKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlQ29udHJvbGxlci5yZW1vdmVWaWV3RnJvbURvbSgpO1xuICAgIH1cbiAgICB1bmxvY2soKTtcbiAgICByZXR1cm4gZGlzbWlzc2VkO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGxvYWRpbmcgZGlkIGRpc21pc3MuXG4gICAqL1xuICBvbkRpZERpc21pc3MoKSB7XG4gICAgcmV0dXJuIGV2ZW50TWV0aG9kKHRoaXMuZWwsICdpb25Mb2FkaW5nRGlkRGlzbWlzcycpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGxvYWRpbmcgd2lsbCBkaXNtaXNzLlxuICAgKi9cbiAgb25XaWxsRGlzbWlzcygpIHtcbiAgICByZXR1cm4gZXZlbnRNZXRob2QodGhpcy5lbCwgJ2lvbkxvYWRpbmdXaWxsRGlzbWlzcycpO1xuICB9XG4gIHJlbmRlckxvYWRpbmdNZXNzYWdlKG1zZ0lkKSB7XG4gICAgY29uc3Qge1xuICAgICAgY3VzdG9tSFRNTEVuYWJsZWQsXG4gICAgICBtZXNzYWdlXG4gICAgfSA9IHRoaXM7XG4gICAgaWYgKGN1c3RvbUhUTUxFbmFibGVkKSB7XG4gICAgICByZXR1cm4gaChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzOiBcImxvYWRpbmctY29udGVudFwiLFxuICAgICAgICBpZDogbXNnSWQsXG4gICAgICAgIGlubmVySFRNTDogc2FuaXRpemVET01TdHJpbmcobWVzc2FnZSlcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gaChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJsb2FkaW5nLWNvbnRlbnRcIixcbiAgICAgIGlkOiBtc2dJZFxuICAgIH0sIG1lc3NhZ2UpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBtZXNzYWdlLFxuICAgICAgc3Bpbm5lcixcbiAgICAgIGh0bWxBdHRyaWJ1dGVzLFxuICAgICAgb3ZlcmxheUluZGV4XG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgY29uc3QgbXNnSWQgPSBgbG9hZGluZy0ke292ZXJsYXlJbmRleH0tbXNnYDtcbiAgICAvKipcbiAgICAgKiBJZiB0aGUgbWVzc2FnZSBpcyBkZWZpbmVkLCB1c2UgdGhhdCBhcyB0aGUgbGFiZWwuXG4gICAgICogT3RoZXJ3aXNlLCBkb24ndCBzZXQgYXJpYS1sYWJlbGxlZGJ5LlxuICAgICAqL1xuICAgIGNvbnN0IGFyaWFMYWJlbGxlZEJ5ID0gbWVzc2FnZSAhPT0gdW5kZWZpbmVkID8gbXNnSWQgOiBudWxsO1xuICAgIHJldHVybiBoKEhvc3QsIE9iamVjdC5hc3NpZ24oe1xuICAgICAga2V5OiAnNDQ5NzE4M2NlMjIwMjQyYWJlMTlhZTE1ZjMyOGY5YTkyY2NhZmJiYycsXG4gICAgICByb2xlOiBcImRpYWxvZ1wiLFxuICAgICAgXCJhcmlhLW1vZGFsXCI6IFwidHJ1ZVwiLFxuICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogYXJpYUxhYmVsbGVkQnksXG4gICAgICB0YWJpbmRleDogXCItMVwiXG4gICAgfSwgaHRtbEF0dHJpYnV0ZXMsIHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIHpJbmRleDogYCR7NDAwMDAgKyB0aGlzLm92ZXJsYXlJbmRleH1gXG4gICAgICB9LFxuICAgICAgb25Jb25CYWNrZHJvcFRhcDogdGhpcy5vbkJhY2tkcm9wVGFwLFxuICAgICAgY2xhc3M6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZ2V0Q2xhc3NNYXAodGhpcy5jc3NDbGFzcykpLCB7XG4gICAgICAgIFttb2RlXTogdHJ1ZSxcbiAgICAgICAgJ292ZXJsYXktaGlkZGVuJzogdHJ1ZSxcbiAgICAgICAgJ2xvYWRpbmctdHJhbnNsdWNlbnQnOiB0aGlzLnRyYW5zbHVjZW50XG4gICAgICB9KVxuICAgIH0pLCBoKFwiaW9uLWJhY2tkcm9wXCIsIHtcbiAgICAgIGtleTogJzIzMWRlYzg0ZTQyNGEyZGMzNThjZTk1Yjg0ZDYwMzVjZjQzZTRkZWEnLFxuICAgICAgdmlzaWJsZTogdGhpcy5zaG93QmFja2Ryb3AsXG4gICAgICB0YXBwYWJsZTogdGhpcy5iYWNrZHJvcERpc21pc3NcbiAgICB9KSwgaChcImRpdlwiLCB7XG4gICAgICBrZXk6ICdjOWFmMjliNmU2YmI0OWEyMTczOTZhNWM4NzRiYmZiODgzNWE5MjZjJyxcbiAgICAgIHRhYmluZGV4OiBcIjBcIixcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCJcbiAgICB9KSwgaChcImRpdlwiLCB7XG4gICAgICBrZXk6ICdhODY1OTg2Mzc0M2NkZWNjYmUxYmE4MTBlYWFiZmQzZWJmY2I4NmYzJyxcbiAgICAgIGNsYXNzOiBcImxvYWRpbmctd3JhcHBlciBpb24tb3ZlcmxheS13cmFwcGVyXCJcbiAgICB9LCBzcGlubmVyICYmIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnM2IzNDZmMzliYzcxNjkxYmQ4Njg2NTU2YTFlMTQyMTk4YTdiMTJmYScsXG4gICAgICBjbGFzczogXCJsb2FkaW5nLXNwaW5uZXJcIlxuICAgIH0sIGgoXCJpb24tc3Bpbm5lclwiLCB7XG4gICAgICBrZXk6ICc4ZGMyYmYxNTU2ZTUxMzhlMjYyODI3ZjE1MTZjNTllY2QwOWYzNTIwJyxcbiAgICAgIG5hbWU6IHNwaW5uZXIsXG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiXG4gICAgfSkpLCBtZXNzYWdlICE9PSB1bmRlZmluZWQgJiYgdGhpcy5yZW5kZXJMb2FkaW5nTWVzc2FnZShtc2dJZCkpLCBoKFwiZGl2XCIsIHtcbiAgICAgIGtleTogJzA1NDE2NGMwZGJhZTlhMGUwOTczZGQzYzhlMjhmNWI3NzE4MjAzMTAnLFxuICAgICAgdGFiaW5kZXg6IFwiMFwiLFxuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIlxuICAgIH0pKTtcbiAgfVxuICBnZXQgZWwoKSB7XG4gICAgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7XG4gIH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJpc09wZW5cIjogW1wib25Jc09wZW5DaGFuZ2VcIl0sXG4gICAgICBcInRyaWdnZXJcIjogW1widHJpZ2dlckNoYW5nZWRcIl1cbiAgICB9O1xuICB9XG59O1xuTG9hZGluZy5zdHlsZSA9IHtcbiAgaW9zOiBsb2FkaW5nSW9zQ3NzLFxuICBtZDogbG9hZGluZ01kQ3NzXG59O1xuZXhwb3J0IHsgTG9hZGluZyBhcyBpb25fbG9hZGluZyB9OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQSxJQUFNLG9CQUFvQixZQUFVO0FBQ2xDLFFBQU0sZ0JBQWdCLGdCQUFnQjtBQUN0QyxRQUFNLG9CQUFvQixnQkFBZ0I7QUFDMUMsUUFBTSxtQkFBbUIsZ0JBQWdCO0FBQ3pDLG9CQUFrQixXQUFXLE9BQU8sY0FBYyxjQUFjLENBQUMsRUFBRSxPQUFPLFdBQVcsTUFBTSx5QkFBeUIsRUFBRSxhQUFhO0FBQUEsSUFDakksa0JBQWtCO0FBQUEsRUFDcEIsQ0FBQyxFQUFFLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDO0FBQ3RDLG1CQUFpQixXQUFXLE9BQU8sY0FBYyxrQkFBa0IsQ0FBQyxFQUFFLFVBQVUsQ0FBQztBQUFBLElBQy9FLFFBQVE7QUFBQSxJQUNSLFNBQVM7QUFBQSxJQUNULFdBQVc7QUFBQSxFQUNiLEdBQUc7QUFBQSxJQUNELFFBQVE7QUFBQSxJQUNSLFNBQVM7QUFBQSxJQUNULFdBQVc7QUFBQSxFQUNiLENBQUMsQ0FBQztBQUNGLFNBQU8sY0FBYyxXQUFXLE1BQU0sRUFBRSxPQUFPLGFBQWEsRUFBRSxTQUFTLEdBQUcsRUFBRSxhQUFhLENBQUMsbUJBQW1CLGdCQUFnQixDQUFDO0FBQ2hJO0FBS0EsSUFBTSxvQkFBb0IsWUFBVTtBQUNsQyxRQUFNLGdCQUFnQixnQkFBZ0I7QUFDdEMsUUFBTSxvQkFBb0IsZ0JBQWdCO0FBQzFDLFFBQU0sbUJBQW1CLGdCQUFnQjtBQUN6QyxvQkFBa0IsV0FBVyxPQUFPLGNBQWMsY0FBYyxDQUFDLEVBQUUsT0FBTyxXQUFXLDJCQUEyQixDQUFDO0FBQ2pILG1C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
