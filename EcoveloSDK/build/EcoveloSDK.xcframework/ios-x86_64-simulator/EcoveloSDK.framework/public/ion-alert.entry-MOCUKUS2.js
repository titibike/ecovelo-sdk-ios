import {
  createButtonActiveGesture
} from "./chunk-AMLHYIPK.js";
import "./chunk-QINLMX2Z.js";
import {
  createLockController
} from "./chunk-MEM7IN4A.js";
import "./chunk-VZXYYFOL.js";
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
  isCancel,
  prepareOverlay,
  present,
  safeCall,
  setOverlayId
} from "./chunk-QATEHYOA.js";
import "./chunk-3MKGIXIK.js";
import {
  getClassMap
} from "./chunk-5VP4V3BN.js";
import {
  getIonMode
} from "./chunk-TXLH22R2.js";
import "./chunk-7NA53B7M.js";
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
  forceUpdate,
  getElement,
  h,
  printIonWarning,
  registerInstance
} from "./chunk-BFPTXCSH.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// node_modules/@ionic/core/dist/esm/ion-alert.entry.js
var iosEnterAnimation = (baseEl) => {
  const baseAnimation = createAnimation();
  const backdropAnimation = createAnimation();
  const wrapperAnimation = createAnimation();
  backdropAnimation.addElement(baseEl.querySelector("ion-backdrop")).fromTo("opacity", 0.01, "var(--backdrop-opacity)").beforeStyles({
    "pointer-events": "none"
  }).afterClearStyles(["pointer-events"]);
  wrapperAnimation.addElement(baseEl.querySelector(".alert-wrapper")).keyframes([{
    offset: 0,
    opacity: "0.01",
    transform: "scale(1.1)"
  }, {
    offset: 1,
    opacity: "1",
    transform: "scale(1)"
  }]);
  return baseAnimation.addElement(baseEl).easing("ease-in-out").duration(200).addAnimation([backdropAnimation, wrapperAnimation]);
};
var iosLeaveAnimation = (baseEl) => {
  const baseAnimation = createAnimation();
  const backdropAnimation = createAnimation();
  const wrapperAnimation = createAnimation();
  backdropAnimation.addElement(baseEl.querySelector("ion-backdrop")).fromTo("opacity", "var(--backdrop-opacity)", 0);
  wrapperAnimation.addElement(baseEl.querySelector(".alert-wrapper")).keyframes([{
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
  wrapperAnimation.addElement(baseEl.querySelector(".alert-wrapper")).keyframes([{
    offset: 0,
    opacity: "0.01",
    transform: "scale(0.9)"
  }, {
    offset: 1,
    opacity: "1",
    transform: "scale(1)"
  }]);
  return baseAnimation.addElement(baseEl).easing("ease-in-out").duration(150).addAnimation([backdropAnimation, wrapperAnimation]);
};
var mdLeaveAnimation = (baseEl) => {
  const baseAnimation = createAnimation();
  const backdropAnimation = createAnimation();
  const wrapperAnimation = createAnimation();
  backdropAnimation.addElement(baseEl.querySelector("ion-backdrop")).fromTo("opacity", "var(--backdrop-opacity)", 0);
  wrapperAnimation.addElement(baseEl.querySelector(".alert-wrapper")).fromTo("opacity", 0.99, 0);
  return baseAnimation.addElement(baseEl).easing("ease-in-out").duration(150).addAnimation([backdropAnimation, wrapperAnimation]);
};
var alertIosCss = ".sc-ion-alert-ios-h{--min-width:250px;--width:auto;--min-height:auto;--height:auto;--max-height:90%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-alert-ios-h{display:none}.alert-top.sc-ion-alert-ios-h{padding-top:50px;-ms-flex-align:start;align-items:flex-start}.alert-wrapper.sc-ion-alert-ios{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:content;opacity:0;z-index:10}.alert-title.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}.alert-sub-title.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:5px;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-weight:normal}.alert-message.sc-ion-alert-ios,.alert-input-group.sc-ion-alert-ios{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-overflow-scrolling:touch;overflow-y:auto;overscroll-behavior-y:contain}.alert-checkbox-label.sc-ion-alert-ios,.alert-radio-label.sc-ion-alert-ios{overflow-wrap:anywhere}@media (any-pointer: coarse){.alert-checkbox-group.sc-ion-alert-ios::-webkit-scrollbar,.alert-radio-group.sc-ion-alert-ios::-webkit-scrollbar,.alert-message.sc-ion-alert-ios::-webkit-scrollbar{display:none}}.alert-input.sc-ion-alert-ios{padding-left:0;padding-right:0;padding-top:10px;padding-bottom:10px;width:100%;border:0;background:inherit;font:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.alert-button-group.sc-ion-alert-ios{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;width:100%}.alert-button-group-vertical.sc-ion-alert-ios{-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.alert-button.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;border:0;font-size:0.875rem;line-height:1.25rem;z-index:0}.alert-button.ion-focused.sc-ion-alert-ios,.alert-tappable.ion-focused.sc-ion-alert-ios{background:var(--ion-color-step-100, var(--ion-background-color-step-100, #e6e6e6))}.alert-button-inner.sc-ion-alert-ios{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;min-height:inherit}.alert-input-disabled.sc-ion-alert-ios,.alert-checkbox-button-disabled.sc-ion-alert-ios .alert-button-inner.sc-ion-alert-ios,.alert-radio-button-disabled.sc-ion-alert-ios .alert-button-inner.sc-ion-alert-ios{cursor:default;opacity:0.5;pointer-events:none}.alert-tappable.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:-ms-flexbox;display:flex;width:100%;border:0;background:transparent;font-size:inherit;line-height:initial;text-align:start;-webkit-appearance:none;-moz-appearance:none;appearance:none;contain:content}.alert-button.sc-ion-alert-ios,.alert-checkbox.sc-ion-alert-ios,.alert-input.sc-ion-alert-ios,.alert-radio.sc-ion-alert-ios{outline:none}.alert-radio-icon.sc-ion-alert-ios,.alert-checkbox-icon.sc-ion-alert-ios,.alert-checkbox-inner.sc-ion-alert-ios{-webkit-box-sizing:border-box;box-sizing:border-box}textarea.alert-input.sc-ion-alert-ios{min-height:37px;resize:none}.sc-ion-alert-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, var(--ion-background-color-step-100, #f9f9f9)));--max-width:clamp(270px, 16.875rem, 324px);--backdrop-opacity:var(--ion-backdrop-opacity, 0.3);font-size:max(14px, 0.875rem)}.alert-wrapper.sc-ion-alert-ios{border-radius:13px;-webkit-box-shadow:none;box-shadow:none;overflow:hidden}.alert-button.sc-ion-alert-ios .alert-button-inner.sc-ion-alert-ios{pointer-events:none}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.alert-translucent.sc-ion-alert-ios-h .alert-wrapper.sc-ion-alert-ios{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.9);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.alert-head.sc-ion-alert-ios{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:12px;padding-bottom:7px;text-align:center}.alert-title.sc-ion-alert-ios{margin-top:8px;color:var(--ion-text-color, #000);font-size:max(17px, 1.0625rem);font-weight:600}.alert-sub-title.sc-ion-alert-ios{color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666));font-size:max(14px, 0.875rem)}.alert-message.sc-ion-alert-ios,.alert-input-group.sc-ion-alert-ios{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0;padding-bottom:21px;color:var(--ion-text-color, #000);font-size:max(13px, 0.8125rem);text-align:center}.alert-message.sc-ion-alert-ios{max-height:240px}.alert-message.sc-ion-alert-ios:empty{padding-left:0;padding-right:0;padding-top:0;padding-bottom:12px}.alert-input.sc-ion-alert-ios{border-radius:7px;margin-top:10px;-webkit-padding-start:7px;padding-inline-start:7px;-webkit-padding-end:7px;padding-inline-end:7px;padding-top:7px;padding-bottom:7px;border:0.55px solid var(--ion-color-step-250, var(--ion-background-color-step-250, #bfbfbf));background-color:var(--ion-background-color, #fff);-webkit-appearance:none;-moz-appearance:none;appearance:none;font-size:1rem}.alert-input.sc-ion-alert-ios::-webkit-input-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, var(--ion-text-color-step-600, #999999)));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::-moz-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, var(--ion-text-color-step-600, #999999)));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios:-ms-input-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, var(--ion-text-color-step-600, #999999)));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::-ms-input-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, var(--ion-text-color-step-600, #999999)));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, var(--ion-text-color-step-600, #999999)));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::-ms-clear{display:none}.alert-input.sc-ion-alert-ios::-webkit-date-and-time-value{height:18px}.alert-radio-group.sc-ion-alert-ios,.alert-checkbox-group.sc-ion-alert-ios{-ms-scroll-chaining:none;overscroll-behavior:contain;max-height:240px;border-top:0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2);overflow-y:auto;-webkit-overflow-scrolling:touch}.alert-tappable.sc-ion-alert-ios{min-height:44px}.alert-radio-label.sc-ion-alert-ios{-webkit-padding-start:13px;padding-inline-start:13px;-webkit-padding-end:13px;padding-inline-end:13px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;-ms-flex-order:0;order:0;color:var(--ion-text-color, #000)}[aria-checked=true].sc-ion-alert-ios .alert-radio-label.sc-ion-alert-ios{color:var(--ion-color-primary, #0054e9)}.alert-radio-icon.sc-ion-alert-ios{position:relative;-ms-flex-order:1;order:1;min-width:30px}[aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios{top:-7px;position:absolute;width:6px;height:12px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--ion-color-primary, #0054e9)}[aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios{inset-inline-start:7px}.alert-checkbox-label.sc-ion-alert-ios{-webkit-padding-start:13px;padding-inline-start:13px;-webkit-padding-end:13px;padding-inline-end:13px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;color:var(--ion-text-color, #000)}.alert-checkbox-icon.sc-ion-alert-ios{border-radius:50%;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:6px;margin-inline-end:6px;margin-top:10px;margin-bottom:10px;position:relative;width:min(1.375rem, 55.836px);height:min(1.375rem, 55.836px);border-width:0.125rem;border-style:solid;border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, var(--ion-background-color-step-250, #c8c7cc))));background-color:var(--ion-item-background, var(--ion-background-color, #fff));contain:strict}[aria-checked=true].sc-ion-alert-ios .alert-checkbox-icon.sc-ion-alert-ios{border-color:var(--ion-color-primary, #0054e9);background-color:var(--ion-color-primary, #0054e9)}[aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios{top:calc(min(1.375rem, 55.836px) / 8);position:absolute;width:calc(min(1.375rem, 55.836px) / 6 + 1px);height:calc(min(1.375rem, 55.836px) * 0.5);-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:0.125rem;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--ion-background-color, #fff)}[aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios{inset-inline-start:calc(min(1.375rem, 55.836px) / 3)}.alert-button-group.sc-ion-alert-ios{-webkit-margin-end:-0.55px;margin-inline-end:-0.55px;-ms-flex-wrap:wrap;flex-wrap:wrap}.alert-button-group-vertical.sc-ion-alert-ios .alert-button.sc-ion-alert-ios{border-right:none}[dir=rtl].sc-ion-alert-ios-h .alert-button-group-vertical.sc-ion-alert-ios .alert-button.sc-ion-alert-ios:last-child,[dir=rtl] .sc-ion-alert-ios-h .alert-button-group-vertical.sc-ion-alert-ios .alert-button.sc-ion-alert-ios:last-child{border-right:none}[dir=rtl].sc-ion-alert-ios .alert-button-group-vertical.sc-ion-alert-ios .alert-button.sc-ion-alert-ios:last-child{border-right:none}@supports selector(:dir(rtl)){.alert-button-group-vertical.sc-ion-alert-ios .alert-button.sc-ion-alert-ios:last-child:dir(rtl){border-right:none}}.alert-button.sc-ion-alert-ios{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:0;-ms-flex:1 1 auto;flex:1 1 auto;min-width:50%;height:max(44px, 2.75rem);border-top:0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2);border-right:0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2);background-color:transparent;color:var(--ion-color-primary, #0054e9);font-size:max(17px, 1.0625rem);overflow:hidden}[dir=rtl].sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:first-child,[dir=rtl] .sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:first-child{border-right:0}[dir=rtl].sc-ion-alert-ios .alert-button.sc-ion-alert-ios:first-child{border-right:0}@supports selector(:dir(rtl)){.alert-button.sc-ion-alert-ios:first-child:dir(rtl){border-right:0}}.alert-button.sc-ion-alert-ios:last-child{border-right:0;font-weight:bold}[dir=rtl].sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:last-child,[dir=rtl] .sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:last-child{border-right:0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2)}[dir=rtl].sc-ion-alert-ios .alert-button.sc-ion-alert-ios:last-child{border-right:0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2)}@supports selector(:dir(rtl)){.alert-button.sc-ion-alert-ios:last-child:dir(rtl){border-right:0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2)}}.alert-button.ion-activated.sc-ion-alert-ios{background-color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1)}.alert-button-role-destructive.sc-ion-alert-ios,.alert-button-role-destructive.ion-activated.sc-ion-alert-ios,.alert-button-role-destructive.ion-focused.sc-ion-alert-ios{color:var(--ion-color-danger, #c5000f)}";
var alertMdCss = ".sc-ion-alert-md-h{--min-width:250px;--width:auto;--min-height:auto;--height:auto;--max-height:90%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-alert-md-h{display:none}.alert-top.sc-ion-alert-md-h{padding-top:50px;-ms-flex-align:start;align-items:flex-start}.alert-wrapper.sc-ion-alert-md{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:content;opacity:0;z-index:10}.alert-title.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}.alert-sub-title.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:5px;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-weight:normal}.alert-message.sc-ion-alert-md,.alert-input-group.sc-ion-alert-md{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-overflow-scrolling:touch;overflow-y:auto;overscroll-behavior-y:contain}.alert-checkbox-label.sc-ion-alert-md,.alert-radio-label.sc-ion-alert-md{overflow-wrap:anywhere}@media (any-pointer: coarse){.alert-checkbox-group.sc-ion-alert-md::-webkit-scrollbar,.alert-radio-group.sc-ion-alert-md::-webkit-scrollbar,.alert-message.sc-ion-alert-md::-webkit-scrollbar{display:none}}.alert-input.sc-ion-alert-md{padding-left:0;padding-right:0;padding-top:10px;padding-bottom:10px;width:100%;border:0;background:inherit;font:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.alert-button-group.sc-ion-alert-md{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;width:100%}.alert-button-group-vertical.sc-ion-alert-md{-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.alert-button.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;border:0;font-size:0.875rem;line-height:1.25rem;z-index:0}.alert-button.ion-focused.sc-ion-alert-md,.alert-tappable.ion-focused.sc-ion-alert-md{background:var(--ion-color-step-100, var(--ion-background-color-step-100, #e6e6e6))}.alert-button-inner.sc-ion-alert-md{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;min-height:inherit}.alert-input-disabled.sc-ion-alert-md,.alert-checkbox-button-disabled.sc-ion-alert-md .alert-button-inner.sc-ion-alert-md,.alert-radio-button-disabled.sc-ion-alert-md .alert-button-inner.sc-ion-alert-md{cursor:default;opacity:0.5;pointer-events:none}.alert-tappable.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:-ms-flexbox;display:flex;width:100%;border:0;background:transparent;font-size:inherit;line-height:initial;text-align:start;-webkit-appearance:none;-moz-appearance:none;appearance:none;contain:content}.alert-button.sc-ion-alert-md,.alert-checkbox.sc-ion-alert-md,.alert-input.sc-ion-alert-md,.alert-radio.sc-ion-alert-md{outline:none}.alert-radio-icon.sc-ion-alert-md,.alert-checkbox-icon.sc-ion-alert-md,.alert-checkbox-inner.sc-ion-alert-md{-webkit-box-sizing:border-box;box-sizing:border-box}textarea.alert-input.sc-ion-alert-md{min-height:37px;resize:none}.sc-ion-alert-md-h{--background:var(--ion-overlay-background-color, var(--ion-background-color, #fff));--max-width:280px;--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);font-size:0.875rem}.alert-wrapper.sc-ion-alert-md{border-radius:4px;-webkit-box-shadow:0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);box-shadow:0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12)}.alert-head.sc-ion-alert-md{-webkit-padding-start:23px;padding-inline-start:23px;-webkit-padding-end:23px;padding-inline-end:23px;padding-top:20px;padding-bottom:15px;text-align:start}.alert-title.sc-ion-alert-md{color:var(--ion-text-color, #000);font-size:1.25rem;font-weight:500}.alert-sub-title.sc-ion-alert-md{color:var(--ion-text-color, #000);font-size:1rem}.alert-message.sc-ion-alert-md,.alert-input-group.sc-ion-alert-md{-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px;padding-top:20px;padding-bottom:20px;color:var(--ion-color-step-550, var(--ion-text-color-step-450, #737373))}.alert-message.sc-ion-alert-md{font-size:1rem}@media screen and (max-width: 767px){.alert-message.sc-ion-alert-md{max-height:266px}}.alert-message.sc-ion-alert-md:empty{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}.alert-head.sc-ion-alert-md+.alert-message.sc-ion-alert-md{padding-top:0}.alert-input.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:5px;margin-bottom:5px;border-bottom:1px solid var(--ion-color-step-150, var(--ion-background-color-step-150, #d9d9d9));color:var(--ion-text-color, #000)}.alert-input.sc-ion-alert-md::-webkit-input-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, var(--ion-text-color-step-600, #999999)));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::-moz-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, var(--ion-text-color-step-600, #999999)));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md:-ms-input-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, var(--ion-text-color-step-600, #999999)));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::-ms-input-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, var(--ion-text-color-step-600, #999999)));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, var(--ion-text-color-step-600, #999999)));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::-ms-clear{display:none}.alert-input.sc-ion-alert-md:focus{margin-bottom:4px;border-bottom:2px solid var(--ion-color-primary, #0054e9)}.alert-radio-group.sc-ion-alert-md,.alert-checkbox-group.sc-ion-alert-md{position:relative;border-top:1px solid var(--ion-color-step-150, var(--ion-background-color-step-150, #d9d9d9));border-bottom:1px solid var(--ion-color-step-150, var(--ion-background-color-step-150, #d9d9d9));overflow:auto}@media screen and (max-width: 767px){.alert-radio-group.sc-ion-alert-md,.alert-checkbox-group.sc-ion-alert-md{max-height:266px}}.alert-tappable.sc-ion-alert-md{position:relative;min-height:48px}.alert-radio-label.sc-ion-alert-md{-webkit-padding-start:52px;padding-inline-start:52px;-webkit-padding-end:26px;padding-inline-end:26px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;color:var(--ion-color-step-850, var(--ion-text-color-step-150, #262626));font-size:1rem}.alert-radio-icon.sc-ion-alert-md{top:0;border-radius:50%;display:block;position:relative;width:20px;height:20px;border-width:2px;border-style:solid;border-color:var(--ion-color-step-550, var(--ion-background-color-step-550, #737373))}.alert-radio-icon.sc-ion-alert-md{inset-inline-start:26px}.alert-radio-inner.sc-ion-alert-md{top:3px;border-radius:50%;position:absolute;width:10px;height:10px;-webkit-transform:scale3d(0, 0, 0);transform:scale3d(0, 0, 0);-webkit-transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:var(--ion-color-primary, #0054e9)}.alert-radio-inner.sc-ion-alert-md{inset-inline-start:3px}[aria-checked=true].sc-ion-alert-md .alert-radio-label.sc-ion-alert-md{color:var(--ion-color-step-850, var(--ion-text-color-step-150, #262626))}[aria-checked=true].sc-ion-alert-md .alert-radio-icon.sc-ion-alert-md{border-color:var(--ion-color-primary, #0054e9)}[aria-checked=true].sc-ion-alert-md .alert-radio-inner.sc-ion-alert-md{-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1)}.alert-checkbox-label.sc-ion-alert-md{-webkit-padding-start:53px;padding-inline-start:53px;-webkit-padding-end:26px;padding-inline-end:26px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;width:calc(100% - 53px);color:var(--ion-color-step-850, var(--ion-text-color-step-150, #262626));font-size:1rem}.alert-checkbox-icon.sc-ion-alert-md{top:0;border-radius:2px;position:relative;width:16px;height:16px;border-width:2px;border-style:solid;border-color:var(--ion-color-step-550, var(--ion-background-color-step-550, #737373));contain:strict}.alert-checkbox-icon.sc-ion-alert-md{inset-inline-start:26px}[aria-checked=true].sc-ion-alert-md .alert-checkbox-icon.sc-ion-alert-md{border-color:var(--ion-color-primary, #0054e9);background-color:var(--ion-color-primary, #0054e9)}[aria-checked=true].sc-ion-alert-md .alert-checkbox-inner.sc-ion-alert-md{top:0;position:absolute;width:6px;height:10px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--ion-color-primary-contrast, #fff)}[aria-checked=true].sc-ion-alert-md .alert-checkbox-inner.sc-ion-alert-md{inset-inline-start:3px}.alert-button-group.sc-ion-alert-md{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse;-ms-flex-pack:end;justify-content:flex-end}.alert-button.sc-ion-alert-md{border-radius:2px;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px;margin-top:0;margin-bottom:0;-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;color:var(--ion-color-primary, #0054e9);font-weight:500;text-align:end;text-transform:uppercase;overflow:hidden}.alert-button-inner.sc-ion-alert-md{-ms-flex-pack:end;justify-content:flex-end}@media screen and (min-width: 768px){.sc-ion-alert-md-h{--max-width:min(100vw - 96px, 560px);--max-height:min(100vh - 96px, 560px)}}";
var Alert = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.didPresent = createEvent(this, "ionAlertDidPresent", 7);
    this.willPresent = createEvent(this, "ionAlertWillPresent", 7);
    this.willDismiss = createEvent(this, "ionAlertWillDismiss", 7);
    this.didDismiss = createEvent(this, "ionAlertDidDismiss", 7);
    this.didPresentShorthand = createEvent(this, "didPresent", 7);
    this.willPresentShorthand = createEvent(this, "willPresent", 7);
    this.willDismissShorthand = createEvent(this, "willDismiss", 7);
    this.didDismissShorthand = createEvent(this, "didDismiss", 7);
    this.delegateController = createDelegateController(this);
    this.lockController = createLockController();
    this.triggerController = createTriggerController();
    this.customHTMLEnabled = config.get("innerHTMLTemplatesEnabled", ENABLE_HTML_CONTENT_DEFAULT);
    this.processedInputs = [];
    this.processedButtons = [];
    this.presented = false;
    this.hasController = false;
    this.keyboardClose = true;
    this.buttons = [];
    this.inputs = [];
    this.backdropDismiss = true;
    this.translucent = false;
    this.animated = true;
    this.isOpen = false;
    this.onBackdropTap = () => {
      this.dismiss(void 0, BACKDROP);
    };
    this.dispatchCancelHandler = (ev) => {
      const role = ev.detail.role;
      if (isCancel(role)) {
        const cancelButton = this.processedButtons.find((b) => b.role === "cancel");
        this.callButtonHandler(cancelButton);
      }
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
  onKeydown(ev) {
    var _a;
    const inputTypes = new Set(this.processedInputs.map((i) => i.type));
    if (inputTypes.has("checkbox") && ev.key === "Enter") {
      ev.preventDefault();
      return;
    }
    if (ev.target.classList.contains("alert-wrapper")) {
      if (ev.key === "Tab" && ev.shiftKey) {
        ev.preventDefault();
        const lastChildBtn = (_a = this.wrapperEl) === null || _a === void 0 ? void 0 : _a.querySelector(".alert-button:last-child");
        lastChildBtn.focus();
        return;
      }
    }
    if (!inputTypes.has("radio") || ev.target && !this.el.contains(ev.target) || ev.target.classList.contains("alert-button")) {
      return;
    }
    const query = this.el.querySelectorAll(".alert-radio");
    const radios = Array.from(query).filter((radio) => !radio.disabled);
    const index = radios.findIndex((radio) => radio.id === ev.target.id);
    let nextEl;
    if (["ArrowDown", "ArrowRight"].includes(ev.key)) {
      nextEl = index === radios.length - 1 ? radios[0] : radios[index + 1];
    }
    if (["ArrowUp", "ArrowLeft"].includes(ev.key)) {
      nextEl = index === 0 ? radios[radios.length - 1] : radios[index - 1];
    }
    if (nextEl && radios.includes(nextEl)) {
      const nextProcessed = this.processedInputs.find((input) => input.id === (nextEl === null || nextEl === void 0 ? void 0 : nextEl.id));
      if (nextProcessed) {
        this.rbClick(nextProcessed);
        nextEl.focus();
      }
    }
  }
  buttonsChanged() {
    const buttons = this.buttons;
    this.processedButtons = buttons.map((btn) => {
      return typeof btn === "string" ? {
        text: btn,
        role: btn.toLowerCase() === "cancel" ? "cancel" : void 0
      } : btn;
    });
  }
  inputsChanged() {
    const inputs = this.inputs;
    const first = inputs.find((input) => !input.disabled);
    const checked = inputs.find((input) => input.checked && !input.disabled);
    const focusable = checked || first;
    const inputTypes = new Set(inputs.map((i) => i.type));
    if (inputTypes.has("checkbox") && inputTypes.has("radio")) {
      printIonWarning(`[ion-alert] - Alert cannot mix input types: ${Array.from(inputTypes.values()).join("/")}. Please see alert docs for more info.`);
    }
    this.inputType = inputTypes.values().next().value;
    this.processedInputs = inputs.map((i, index) => {
      var _a;
      return {
        type: i.type || "text",
        name: i.name || `${index}`,
        placeholder: i.placeholder || "",
        value: i.value,
        label: i.label,
        checked: !!i.checked,
        disabled: !!i.disabled,
        id: i.id || `alert-input-${this.overlayIndex}-${index}`,
        handler: i.handler,
        min: i.min,
        max: i.max,
        cssClass: (_a = i.cssClass) !== null && _a !== void 0 ? _a : "",
        attributes: i.attributes || {},
        tabindex: i.type === "radio" && i !== focusable ? -1 : 0
      };
    });
  }
  connectedCallback() {
    prepareOverlay(this.el);
    this.triggerChanged();
  }
  componentWillLoad() {
    var _a;
    if (!((_a = this.htmlAttributes) === null || _a === void 0 ? void 0 : _a.id)) {
      setOverlayId(this.el);
    }
    this.inputsChanged();
    this.buttonsChanged();
  }
  disconnectedCallback() {
    this.triggerController.removeClickListener();
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = void 0;
    }
  }
  componentDidLoad() {
    if (!this.gesture && getIonMode(this) === "ios" && this.wrapperEl) {
      this.gesture = createButtonActiveGesture(this.wrapperEl, (refEl) => refEl.classList.contains("alert-button"));
      this.gesture.enable(true);
    }
    if (this.isOpen === true) {
      raf(() => this.present());
    }
    this.triggerChanged();
  }
  /**
   * Present the alert overlay after it has been created.
   */
  present() {
    return __async(this, null, function* () {
      const unlock = yield this.lockController.lock();
      yield this.delegateController.attachViewToDom();
      yield present(this, "alertEnter", iosEnterAnimation, mdEnterAnimation).then(() => {
        var _a, _b;
        if (this.buttons.length === 1 && this.inputs.length === 0) {
          const queryBtn = (_a = this.wrapperEl) === null || _a === void 0 ? void 0 : _a.querySelector(".alert-button");
          queryBtn.focus();
        } else {
          (_b = this.wrapperEl) === null || _b === void 0 ? void 0 : _b.focus();
        }
      });
      unlock();
    });
  }
  /**
   * Dismiss the alert overlay after it has been presented.
   * This is a no-op if the overlay has not been presented yet. If you want
   * to remove an overlay from the DOM that was never presented, use the
   * [remove](https://developer.mozilla.org/en-US/docs/Web/API/Element/remove) method.
   *
   * @param data Any data to emit in the dismiss events.
   * @param role The role of the element that is dismissing the alert.
   * This can be useful in a button handler for determining which button was
   * clicked to dismiss the alert. Some examples include:
   * `"cancel"`, `"destructive"`, `"selected"`, and `"backdrop"`.
   */
  dismiss(data, role) {
    return __async(this, null, function* () {
      const unlock = yield this.lockController.lock();
      const dismissed = yield dismiss(this, data, role, "alertLeave", iosLeaveAnimation, mdLeaveAnimation);
      if (dismissed) {
        this.delegateController.removeViewFromDom();
      }
      unlock();
      return dismissed;
    });
  }
  /**
   * Returns a promise that resolves when the alert did dismiss.
   */
  onDidDismiss() {
    return eventMethod(this.el, "ionAlertDidDismiss");
  }
  /**
   * Returns a promise that resolves when the alert will dismiss.
   */
  onWillDismiss() {
    return eventMethod(this.el, "ionAlertWillDismiss");
  }
  rbClick(selectedInput) {
    for (const input of this.processedInputs) {
      input.checked = input === selectedInput;
      input.tabindex = input === selectedInput ? 0 : -1;
    }
    this.activeId = selectedInput.id;
    safeCall(selectedInput.handler, selectedInput);
    forceUpdate(this);
  }
  cbClick(selectedInput) {
    selectedInput.checked = !selectedInput.checked;
    safeCall(selectedInput.handler, selectedInput);
    forceUpdate(this);
  }
  buttonClick(button) {
    return __async(this, null, function* () {
      const role = button.role;
      const values = this.getValues();
      if (isCancel(role)) {
        return this.dismiss({
          values
        }, role);
      }
      const returnData = yield this.callButtonHandler(button, values);
      if (returnData !== false) {
        return this.dismiss(Object.assign({
          values
        }, returnData), button.role);
      }
      return false;
    });
  }
  callButtonHandler(button, data) {
    return __async(this, null, function* () {
      if (button === null || button === void 0 ? void 0 : button.handler) {
        const returnData = yield safeCall(button.handler, data);
        if (returnData === false) {
          return false;
        }
        if (typeof returnData === "object") {
          return returnData;
        }
      }
      return {};
    });
  }
  getValues() {
    if (this.processedInputs.length === 0) {
      return void 0;
    }
    if (this.inputType === "radio") {
      const checkedInput = this.processedInputs.find((i) => !!i.checked);
      return checkedInput ? checkedInput.value : void 0;
    }
    if (this.inputType === "checkbox") {
      return this.processedInputs.filter((i) => i.checked).map((i) => i.value);
    }
    const values = {};
    this.processedInputs.forEach((i) => {
      values[i.name] = i.value || "";
    });
    return values;
  }
  renderAlertInputs() {
    switch (this.inputType) {
      case "checkbox":
        return this.renderCheckbox();
      case "radio":
        return this.renderRadio();
      default:
        return this.renderInput();
    }
  }
  renderCheckbox() {
    const inputs = this.processedInputs;
    const mode = getIonMode(this);
    if (inputs.length === 0) {
      return null;
    }
    return h("div", {
      class: "alert-checkbox-group"
    }, inputs.map((i) => h("button", {
      type: "button",
      onClick: () => this.cbClick(i),
      "aria-checked": `${i.checked}`,
      id: i.id,
      disabled: i.disabled,
      tabIndex: i.tabindex,
      role: "checkbox",
      class: Object.assign(Object.assign({}, getClassMap(i.cssClass)), {
        "alert-tappable": true,
        "alert-checkbox": true,
        "alert-checkbox-button": true,
        "ion-focusable": true,
        "alert-checkbox-button-disabled": i.disabled || false
      })
    }, h("div", {
      class: "alert-button-inner"
    }, h("div", {
      class: "alert-checkbox-icon"
    }, h("div", {
      class: "alert-checkbox-inner"
    })), h("div", {
      class: "alert-checkbox-label"
    }, i.label)), mode === "md" && h("ion-ripple-effect", null))));
  }
  renderRadio() {
    const inputs = this.processedInputs;
    if (inputs.length === 0) {
      return null;
    }
    return h("div", {
      class: "alert-radio-group",
      role: "radiogroup",
      "aria-activedescendant": this.activeId
    }, inputs.map((i) => h("button", {
      type: "button",
      onClick: () => this.rbClick(i),
      "aria-checked": `${i.checked}`,
      disabled: i.disabled,
      id: i.id,
      tabIndex: i.tabindex,
      class: Object.assign(Object.assign({}, getClassMap(i.cssClass)), {
        "alert-radio-button": true,
        "alert-tappable": true,
        "alert-radio": true,
        "ion-focusable": true,
        "alert-radio-button-disabled": i.disabled || false
      }),
      role: "radio"
    }, h("div", {
      class: "alert-button-inner"
    }, h("div", {
      class: "alert-radio-icon"
    }, h("div", {
      class: "alert-radio-inner"
    })), h("div", {
      class: "alert-radio-label"
    }, i.label)))));
  }
  renderInput() {
    const inputs = this.processedInputs;
    if (inputs.length === 0) {
      return null;
    }
    return h("div", {
      class: "alert-input-group"
    }, inputs.map((i) => {
      var _a, _b, _c, _d;
      if (i.type === "textarea") {
        return h("div", {
          class: "alert-input-wrapper"
        }, h("textarea", Object.assign({
          placeholder: i.placeholder,
          value: i.value,
          id: i.id,
          tabIndex: i.tabindex
        }, i.attributes, {
          disabled: (_b = (_a = i.attributes) === null || _a === void 0 ? void 0 : _a.disabled) !== null && _b !== void 0 ? _b : i.disabled,
          class: inputClass(i),
          onInput: (e) => {
            var _a2;
            i.value = e.target.value;
            if ((_a2 = i.attributes) === null || _a2 === void 0 ? void 0 : _a2.onInput) {
              i.attributes.onInput(e);
            }
          }
        })));
      } else {
        return h("div", {
          class: "alert-input-wrapper"
        }, h("input", Object.assign({
          placeholder: i.placeholder,
          type: i.type,
          min: i.min,
          max: i.max,
          value: i.value,
          id: i.id,
          tabIndex: i.tabindex
        }, i.attributes, {
          disabled: (_d = (_c = i.attributes) === null || _c === void 0 ? void 0 : _c.disabled) !== null && _d !== void 0 ? _d : i.disabled,
          class: inputClass(i),
          onInput: (e) => {
            var _a2;
            i.value = e.target.value;
            if ((_a2 = i.attributes) === null || _a2 === void 0 ? void 0 : _a2.onInput) {
              i.attributes.onInput(e);
            }
          }
        })));
      }
    }));
  }
  renderAlertButtons() {
    const buttons = this.processedButtons;
    const mode = getIonMode(this);
    const alertButtonGroupClass = {
      "alert-button-group": true,
      "alert-button-group-vertical": buttons.length > 2
    };
    return h("div", {
      class: alertButtonGroupClass
    }, buttons.map((button) => h("button", Object.assign({}, button.htmlAttributes, {
      type: "button",
      id: button.id,
      class: buttonClass(button),
      tabIndex: 0,
      onClick: () => this.buttonClick(button)
    }), h("span", {
      class: "alert-button-inner"
    }, button.text), mode === "md" && h("ion-ripple-effect", null))));
  }
  renderAlertMessage(msgId) {
    const {
      customHTMLEnabled,
      message
    } = this;
    if (customHTMLEnabled) {
      return h("div", {
        id: msgId,
        class: "alert-message",
        innerHTML: sanitizeDOMString(message)
      });
    }
    return h("div", {
      id: msgId,
      class: "alert-message"
    }, message);
  }
  render() {
    const {
      overlayIndex,
      header,
      subHeader,
      message,
      htmlAttributes
    } = this;
    const mode = getIonMode(this);
    const hdrId = `alert-${overlayIndex}-hdr`;
    const msgId = `alert-${overlayIndex}-msg`;
    const subHdrId = `alert-${overlayIndex}-sub-hdr`;
    const role = this.inputs.length > 0 || this.buttons.length > 0 ? "alertdialog" : "alert";
    const ariaLabelledBy = header && subHeader ? `${hdrId} ${subHdrId}` : header ? hdrId : subHeader ? subHdrId : null;
    return h(Host, {
      key: "6025440b9cd369d4fac89e7e4296c84a10a0b8e0",
      tabindex: "-1",
      style: {
        zIndex: `${2e4 + overlayIndex}`
      },
      class: Object.assign(Object.assign({}, getClassMap(this.cssClass)), {
        [mode]: true,
        "overlay-hidden": true,
        "alert-translucent": this.translucent
      }),
      onIonAlertWillDismiss: this.dispatchCancelHandler,
      onIonBackdropTap: this.onBackdropTap
    }, h("ion-backdrop", {
      key: "3cd5ca8b99cb95b11dd22ab41a820d841142896f",
      tappable: this.backdropDismiss
    }), h("div", {
      key: "4cc62ae6e21424057d22aeef1e8fc77011e77cd5",
      tabindex: "0",
      "aria-hidden": "true"
    }), h("div", Object.assign({
      key: "364057a69f25aa88904df17bdcf7e5bf714e7830",
      class: "alert-wrapper ion-overlay-wrapper",
      role,
      "aria-modal": "true",
      "aria-labelledby": ariaLabelledBy,
      "aria-describedby": message !== void 0 ? msgId : null,
      tabindex: "0",
      ref: (el) => this.wrapperEl = el
    }, htmlAttributes), h("div", {
      key: "78694e3c0db2d408df3899fb1a90859bcc8d14cc",
      class: "alert-head"
    }, header && h("h2", {
      key: "ec88ff3e4e1ea871b5975133fdcf4cac38b05e0f",
      id: hdrId,
      class: "alert-title"
    }, header), subHeader && !header && h("h2", {
      key: "9b09bc8bb68af255ef8b7d22587acc946148e544",
      id: subHdrId,
      class: "alert-sub-title"
    }, subHeader), subHeader && header && h("h3", {
      key: "99abe815f75d2df7f1b77c0df9f3436724fea76f",
      id: subHdrId,
      class: "alert-sub-title"
    }, subHeader)), this.renderAlertMessage(msgId), this.renderAlertInputs(), this.renderAlertButtons()), h("div", {
      key: "a43d0c22c0e46b1ef911f92ffeb253d7911b85f7",
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
      "trigger": ["triggerChanged"],
      "buttons": ["buttonsChanged"],
      "inputs": ["inputsChanged"]
    };
  }
};
var inputClass = (input) => {
  var _a, _b, _c;
  return Object.assign(Object.assign({
    "alert-input": true,
    "alert-input-disabled": ((_b = (_a = input.attributes) === null || _a === void 0 ? void 0 : _a.disabled) !== null && _b !== void 0 ? _b : input.disabled) || false
  }, getClassMap(input.cssClass)), getClassMap(input.attributes ? (_c = input.attributes.class) === null || _c === void 0 ? void 0 : _c.toString() : ""));
};
var buttonClass = (button) => {
  return Object.assign({
    "alert-button": true,
    "ion-focusable": true,
    "ion-activatable": true,
    [`alert-button-role-${button.role}`]: button.role !== void 0
  }, getClassMap(button.cssClass));
};
Alert.style = {
  ios: alertIosCss,
  md: alertMdCss
};
export {
  Alert as ion_alert
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-alert.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tYWxlcnQuZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBjcmVhdGVFdmVudCwgZSBhcyBjb25maWcsIGYgYXMgcHJpbnRJb25XYXJuaW5nLCBpIGFzIGZvcmNlVXBkYXRlLCBoLCBkIGFzIEhvc3QsIGcgYXMgZ2V0RWxlbWVudCB9IGZyb20gJy4vaW5kZXgtNER4WTZfZ0cuanMnO1xuaW1wb3J0IHsgRSBhcyBFTkFCTEVfSFRNTF9DT05URU5UX0RFRkFVTFQsIGEgYXMgc2FuaXRpemVET01TdHJpbmcgfSBmcm9tICcuL2NvbmZpZy1EeF82d1BJSi5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZUJ1dHRvbkFjdGl2ZUdlc3R1cmUgfSBmcm9tICcuL2J1dHRvbi1hY3RpdmUtREJVUHVMTncuanMnO1xuaW1wb3J0IHsgciBhcyByYWYgfSBmcm9tICcuL2hlbHBlcnMtOEtTUVFHUXkuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVMb2NrQ29udHJvbGxlciB9IGZyb20gJy4vbG9jay1jb250cm9sbGVyLUItaGlyVDB2LmpzJztcbmltcG9ydCB7IGQgYXMgY3JlYXRlRGVsZWdhdGVDb250cm9sbGVyLCBlIGFzIGNyZWF0ZVRyaWdnZXJDb250cm9sbGVyLCBCIGFzIEJBQ0tEUk9QLCBpIGFzIGlzQ2FuY2VsLCBqIGFzIHByZXBhcmVPdmVybGF5LCBrIGFzIHNldE92ZXJsYXlJZCwgZiBhcyBwcmVzZW50LCBnIGFzIGRpc21pc3MsIGggYXMgZXZlbnRNZXRob2QsIHMgYXMgc2FmZUNhbGwgfSBmcm9tICcuL292ZXJsYXlzLVpYXzQtdF9yLmpzJztcbmltcG9ydCB7IGcgYXMgZ2V0Q2xhc3NNYXAgfSBmcm9tICcuL3RoZW1lLURpVkp5cWxYLmpzJztcbmltcG9ydCB7IGIgYXMgZ2V0SW9uTW9kZSB9IGZyb20gJy4vaW9uaWMtZ2xvYmFsLUNUU3l1ZmhGLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlQW5pbWF0aW9uIH0gZnJvbSAnLi9hbmltYXRpb24tQnZoQXRnY2EuanMnO1xuaW1wb3J0ICcuL2hhcHRpYy1EekFNV0p1ay5qcyc7XG5pbXBvcnQgJy4vY2FwYWNpdG9yLUNGRVJJZWFVLmpzJztcbmltcG9ydCAnLi9pbmRleC1aalA0Q2plWi5qcyc7XG5pbXBvcnQgJy4vaW5kZXgtQ2ZnQkYxU0UuanMnO1xuaW1wb3J0ICcuL2dlc3R1cmUtY29udHJvbGxlci1CVEVPczFhdC5qcyc7XG5pbXBvcnQgJy4vaGFyZHdhcmUtYmFjay1idXR0b24tRGhiZC0yM0guanMnO1xuaW1wb3J0ICcuL2ZyYW1ld29yay1kZWxlZ2F0ZS1CTEVCZ0gwNi5qcyc7XG5cbi8qKlxuICogaU9TIEFsZXJ0IEVudGVyIEFuaW1hdGlvblxuICovXG5jb25zdCBpb3NFbnRlckFuaW1hdGlvbiA9IGJhc2VFbCA9PiB7XG4gIGNvbnN0IGJhc2VBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgY29uc3QgYmFja2Ryb3BBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgY29uc3Qgd3JhcHBlckFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICBiYWNrZHJvcEFuaW1hdGlvbi5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCdpb24tYmFja2Ryb3AnKSkuZnJvbVRvKCdvcGFjaXR5JywgMC4wMSwgJ3ZhcigtLWJhY2tkcm9wLW9wYWNpdHkpJykuYmVmb3JlU3R5bGVzKHtcbiAgICAncG9pbnRlci1ldmVudHMnOiAnbm9uZSdcbiAgfSkuYWZ0ZXJDbGVhclN0eWxlcyhbJ3BvaW50ZXItZXZlbnRzJ10pO1xuICB3cmFwcGVyQW5pbWF0aW9uLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJy5hbGVydC13cmFwcGVyJykpLmtleWZyYW1lcyhbe1xuICAgIG9mZnNldDogMCxcbiAgICBvcGFjaXR5OiAnMC4wMScsXG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMS4xKSdcbiAgfSwge1xuICAgIG9mZnNldDogMSxcbiAgICBvcGFjaXR5OiAnMScsXG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknXG4gIH1dKTtcbiAgcmV0dXJuIGJhc2VBbmltYXRpb24uYWRkRWxlbWVudChiYXNlRWwpLmVhc2luZygnZWFzZS1pbi1vdXQnKS5kdXJhdGlvbigyMDApLmFkZEFuaW1hdGlvbihbYmFja2Ryb3BBbmltYXRpb24sIHdyYXBwZXJBbmltYXRpb25dKTtcbn07XG5cbi8qKlxuICogaU9TIEFsZXJ0IExlYXZlIEFuaW1hdGlvblxuICovXG5jb25zdCBpb3NMZWF2ZUFuaW1hdGlvbiA9IGJhc2VFbCA9PiB7XG4gIGNvbnN0IGJhc2VBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgY29uc3QgYmFja2Ryb3BBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgY29uc3Qgd3JhcHBlckFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICBiYWNrZHJvcEFuaW1hdGlvbi5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCdpb24tYmFja2Ryb3AnKSkuZnJvbVRvKCdvcGFjaXR5JywgJ3ZhcigtLWJhY2tkcm9wLW9wYWNpdHkpJywgMCk7XG4gIHdyYXBwZXJBbmltYXRpb24uYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignLmFsZXJ0LXdyYXBwZXInKSkua2V5ZnJhbWVzKFt7XG4gICAgb2Zmc2V0OiAwLFxuICAgIG9wYWNpdHk6IDAuOTksXG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknXG4gIH0sIHtcbiAgICBvZmZzZXQ6IDEsXG4gICAgb3BhY2l0eTogMCxcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjkpJ1xuICB9XSk7XG4gIHJldHVybiBiYXNlQW5pbWF0aW9uLmFkZEVsZW1lbnQoYmFzZUVsKS5lYXNpbmcoJ2Vhc2UtaW4tb3V0JykuZHVyYXRpb24oMjAwKS5hZGRBbmltYXRpb24oW2JhY2tkcm9wQW5pbWF0aW9uLCB3cmFwcGVyQW5pbWF0aW9uXSk7XG59O1xuXG4vKipcbiAqIE1kIEFsZXJ0IEVudGVyIEFuaW1hdGlvblxuICovXG5jb25zdCBtZEVudGVyQW5pbWF0aW9uID0gYmFzZUVsID0+IHtcbiAgY29uc3QgYmFzZUFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICBjb25zdCBiYWNrZHJvcEFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICBjb25zdCB3cmFwcGVyQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gIGJhY2tkcm9wQW5pbWF0aW9uLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1iYWNrZHJvcCcpKS5mcm9tVG8oJ29wYWNpdHknLCAwLjAxLCAndmFyKC0tYmFja2Ryb3Atb3BhY2l0eSknKS5iZWZvcmVTdHlsZXMoe1xuICAgICdwb2ludGVyLWV2ZW50cyc6ICdub25lJ1xuICB9KS5hZnRlckNsZWFyU3R5bGVzKFsncG9pbnRlci1ldmVudHMnXSk7XG4gIHdyYXBwZXJBbmltYXRpb24uYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignLmFsZXJ0LXdyYXBwZXInKSkua2V5ZnJhbWVzKFt7XG4gICAgb2Zmc2V0OiAwLFxuICAgIG9wYWNpdHk6ICcwLjAxJyxcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjkpJ1xuICB9LCB7XG4gICAgb2Zmc2V0OiAxLFxuICAgIG9wYWNpdHk6ICcxJyxcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKSdcbiAgfV0pO1xuICByZXR1cm4gYmFzZUFuaW1hdGlvbi5hZGRFbGVtZW50KGJhc2VFbCkuZWFzaW5nKCdlYXNlLWluLW91dCcpLmR1cmF0aW9uKDE1MCkuYWRkQW5pbWF0aW9uKFtiYWNrZHJvcEFuaW1hdGlvbiwgd3JhcHBlckFuaW1hdGlvbl0pO1xufTtcblxuLyoqXG4gKiBNZCBBbGVydCBMZWF2ZSBBbmltYXRpb25cbiAqL1xuY29uc3QgbWRMZWF2ZUFuaW1hdGlvbiA9IGJhc2VFbCA9PiB7XG4gIGNvbnN0IGJhc2VBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgY29uc3QgYmFja2Ryb3BBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgY29uc3Qgd3JhcHBlckFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICBiYWNrZHJvcEFuaW1hdGlvbi5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCdpb24tYmFja2Ryb3AnKSkuZnJvbVRvKCdvcGFjaXR5JywgJ3ZhcigtLWJhY2tkcm9wLW9wYWNpdHkpJywgMCk7XG4gIHdyYXBwZXJBbmltYXRpb24uYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignLmFsZXJ0LXdyYXBwZXInKSkuZnJvbVRvKCdvcGFjaXR5JywgMC45OSwgMCk7XG4gIHJldHVybiBiYXNlQW5pbWF0aW9uLmFkZEVsZW1lbnQoYmFzZUVsKS5lYXNpbmcoJ2Vhc2UtaW4tb3V0JykuZHVyYXRpb24oMTUwKS5hZGRBbmltYXRpb24oW2JhY2tkcm9wQW5pbWF0aW9uLCB3cmFwcGVyQW5pbWF0aW9uXSk7XG59O1xuY29uc3QgYWxlcnRJb3NDc3MgPSBcIi5zYy1pb24tYWxlcnQtaW9zLWh7LS1taW4td2lkdGg6MjUwcHg7LS13aWR0aDphdXRvOy0tbWluLWhlaWdodDphdXRvOy0taGVpZ2h0OmF1dG87LS1tYXgtaGVpZ2h0OjkwJTstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjphYnNvbHV0ZTstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7b3V0bGluZTpub25lO2ZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseSwgaW5oZXJpdCk7Y29udGFpbjpzdHJpY3Q7LW1zLXRvdWNoLWFjdGlvbjpub25lO3RvdWNoLWFjdGlvbjpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTt6LWluZGV4OjEwMDF9Lm92ZXJsYXktaGlkZGVuLnNjLWlvbi1hbGVydC1pb3MtaHtkaXNwbGF5Om5vbmV9LmFsZXJ0LXRvcC5zYy1pb24tYWxlcnQtaW9zLWh7cGFkZGluZy10b3A6NTBweDstbXMtZmxleC1hbGlnbjpzdGFydDthbGlnbi1pdGVtczpmbGV4LXN0YXJ0fS5hbGVydC13cmFwcGVyLnNjLWlvbi1hbGVydC1pb3N7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47d2lkdGg6dmFyKC0td2lkdGgpO21pbi13aWR0aDp2YXIoLS1taW4td2lkdGgpO21heC13aWR0aDp2YXIoLS1tYXgtd2lkdGgpO2hlaWdodDp2YXIoLS1oZWlnaHQpO21pbi1oZWlnaHQ6dmFyKC0tbWluLWhlaWdodCk7bWF4LWhlaWdodDp2YXIoLS1tYXgtaGVpZ2h0KTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2NvbnRhaW46Y29udGVudDtvcGFjaXR5OjA7ei1pbmRleDoxMH0uYWxlcnQtdGl0bGUuc2MtaW9uLWFsZXJ0LWlvc3ttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MH0uYWxlcnQtc3ViLXRpdGxlLnNjLWlvbi1hbGVydC1pb3N7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjVweDttYXJnaW4tYm90dG9tOjA7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDtmb250LXdlaWdodDpub3JtYWx9LmFsZXJ0LW1lc3NhZ2Uuc2MtaW9uLWFsZXJ0LWlvcywuYWxlcnQtaW5wdXQtZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvc3std2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2g7b3ZlcmZsb3cteTphdXRvO292ZXJzY3JvbGwtYmVoYXZpb3IteTpjb250YWlufS5hbGVydC1jaGVja2JveC1sYWJlbC5zYy1pb24tYWxlcnQtaW9zLC5hbGVydC1yYWRpby1sYWJlbC5zYy1pb24tYWxlcnQtaW9ze292ZXJmbG93LXdyYXA6YW55d2hlcmV9QG1lZGlhIChhbnktcG9pbnRlcjogY29hcnNlKXsuYWxlcnQtY2hlY2tib3gtZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvczo6LXdlYmtpdC1zY3JvbGxiYXIsLmFsZXJ0LXJhZGlvLWdyb3VwLnNjLWlvbi1hbGVydC1pb3M6Oi13ZWJraXQtc2Nyb2xsYmFyLC5hbGVydC1tZXNzYWdlLnNjLWlvbi1hbGVydC1pb3M6Oi13ZWJraXQtc2Nyb2xsYmFye2Rpc3BsYXk6bm9uZX19LmFsZXJ0LWlucHV0LnNjLWlvbi1hbGVydC1pb3N7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjEwcHg7cGFkZGluZy1ib3R0b206MTBweDt3aWR0aDoxMDAlO2JvcmRlcjowO2JhY2tncm91bmQ6aW5oZXJpdDtmb250OmluaGVyaXQ7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94fS5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvc3tkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1kaXJlY3Rpb246cm93O2ZsZXgtZGlyZWN0aW9uOnJvdzt3aWR0aDoxMDAlfS5hbGVydC1idXR0b24tZ3JvdXAtdmVydGljYWwuc2MtaW9uLWFsZXJ0LWlvc3stbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjstbXMtZmxleC13cmFwOm5vd3JhcDtmbGV4LXdyYXA6bm93cmFwfS5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvc3ttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7ZGlzcGxheTpibG9jaztib3JkZXI6MDtmb250LXNpemU6MC44NzVyZW07bGluZS1oZWlnaHQ6MS4yNXJlbTt6LWluZGV4OjB9LmFsZXJ0LWJ1dHRvbi5pb24tZm9jdXNlZC5zYy1pb24tYWxlcnQtaW9zLC5hbGVydC10YXBwYWJsZS5pb24tZm9jdXNlZC5zYy1pb24tYWxlcnQtaW9ze2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXN0ZXAtMTAwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTEwMCwgI2U2ZTZlNikpfS5hbGVydC1idXR0b24taW5uZXIuc2MtaW9uLWFsZXJ0LWlvc3tkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1mbG93OnJvdyBub3dyYXA7ZmxleC1mbG93OnJvdyBub3dyYXA7LW1zLWZsZXgtbmVnYXRpdmU6MDtmbGV4LXNocmluazowOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO21pbi1oZWlnaHQ6aW5oZXJpdH0uYWxlcnQtaW5wdXQtZGlzYWJsZWQuc2MtaW9uLWFsZXJ0LWlvcywuYWxlcnQtY2hlY2tib3gtYnV0dG9uLWRpc2FibGVkLnNjLWlvbi1hbGVydC1pb3MgLmFsZXJ0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWxlcnQtaW9zLC5hbGVydC1yYWRpby1idXR0b24tZGlzYWJsZWQuc2MtaW9uLWFsZXJ0LWlvcyAuYWxlcnQtYnV0dG9uLWlubmVyLnNjLWlvbi1hbGVydC1pb3N7Y3Vyc29yOmRlZmF1bHQ7b3BhY2l0eTowLjU7cG9pbnRlci1ldmVudHM6bm9uZX0uYWxlcnQtdGFwcGFibGUuc2MtaW9uLWFsZXJ0LWlvc3ttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDt3aWR0aDoxMDAlO2JvcmRlcjowO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Zm9udC1zaXplOmluaGVyaXQ7bGluZS1oZWlnaHQ6aW5pdGlhbDt0ZXh0LWFsaWduOnN0YXJ0Oy13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lO2FwcGVhcmFuY2U6bm9uZTtjb250YWluOmNvbnRlbnR9LmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zLC5hbGVydC1jaGVja2JveC5zYy1pb24tYWxlcnQtaW9zLC5hbGVydC1pbnB1dC5zYy1pb24tYWxlcnQtaW9zLC5hbGVydC1yYWRpby5zYy1pb24tYWxlcnQtaW9ze291dGxpbmU6bm9uZX0uYWxlcnQtcmFkaW8taWNvbi5zYy1pb24tYWxlcnQtaW9zLC5hbGVydC1jaGVja2JveC1pY29uLnNjLWlvbi1hbGVydC1pb3MsLmFsZXJ0LWNoZWNrYm94LWlubmVyLnNjLWlvbi1hbGVydC1pb3N7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94fXRleHRhcmVhLmFsZXJ0LWlucHV0LnNjLWlvbi1hbGVydC1pb3N7bWluLWhlaWdodDozN3B4O3Jlc2l6ZTpub25lfS5zYy1pb24tYWxlcnQtaW9zLWh7LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1vdmVybGF5LWJhY2tncm91bmQtY29sb3IsIHZhcigtLWlvbi1jb2xvci1zdGVwLTEwMCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3Itc3RlcC0xMDAsICNmOWY5ZjkpKSk7LS1tYXgtd2lkdGg6Y2xhbXAoMjcwcHgsIDE2Ljg3NXJlbSwgMzI0cHgpOy0tYmFja2Ryb3Atb3BhY2l0eTp2YXIoLS1pb24tYmFja2Ryb3Atb3BhY2l0eSwgMC4zKTtmb250LXNpemU6bWF4KDE0cHgsIDAuODc1cmVtKX0uYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtaW9ze2JvcmRlci1yYWRpdXM6MTNweDstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmU7b3ZlcmZsb3c6aGlkZGVufS5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvcyAuYWxlcnQtYnV0dG9uLWlubmVyLnNjLWlvbi1hbGVydC1pb3N7cG9pbnRlci1ldmVudHM6bm9uZX1Ac3VwcG9ydHMgKCgtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigwKSkgb3IgKGJhY2tkcm9wLWZpbHRlcjogYmx1cigwKSkpey5hbGVydC10cmFuc2x1Y2VudC5zYy1pb24tYWxlcnQtaW9zLWggLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LWlvc3tiYWNrZ3JvdW5kOnJnYmEodmFyKC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiLCAyNTUsIDI1NSwgMjU1KSwgMC45KTstd2Via2l0LWJhY2tkcm9wLWZpbHRlcjpzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpO2JhY2tkcm9wLWZpbHRlcjpzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpfX0uYWxlcnQtaGVhZC5zYy1pb24tYWxlcnQtaW9zey13ZWJraXQtcGFkZGluZy1zdGFydDoxNnB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjE2cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDoxNnB4O3BhZGRpbmctaW5saW5lLWVuZDoxNnB4O3BhZGRpbmctdG9wOjEycHg7cGFkZGluZy1ib3R0b206N3B4O3RleHQtYWxpZ246Y2VudGVyfS5hbGVydC10aXRsZS5zYy1pb24tYWxlcnQtaW9ze21hcmdpbi10b3A6OHB4O2NvbG9yOnZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwKTtmb250LXNpemU6bWF4KDE3cHgsIDEuMDYyNXJlbSk7Zm9udC13ZWlnaHQ6NjAwfS5hbGVydC1zdWItdGl0bGUuc2MtaW9uLWFsZXJ0LWlvc3tjb2xvcjp2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsIHZhcigtLWlvbi10ZXh0LWNvbG9yLXN0ZXAtNDAwLCAjNjY2NjY2KSk7Zm9udC1zaXplOm1heCgxNHB4LCAwLjg3NXJlbSl9LmFsZXJ0LW1lc3NhZ2Uuc2MtaW9uLWFsZXJ0LWlvcywuYWxlcnQtaW5wdXQtZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvc3std2Via2l0LXBhZGRpbmctc3RhcnQ6MTZweDtwYWRkaW5nLWlubGluZS1zdGFydDoxNnB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MTZweDtwYWRkaW5nLWlubGluZS1lbmQ6MTZweDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjIxcHg7Y29sb3I6dmFyKC0taW9uLXRleHQtY29sb3IsICMwMDApO2ZvbnQtc2l6ZTptYXgoMTNweCwgMC44MTI1cmVtKTt0ZXh0LWFsaWduOmNlbnRlcn0uYWxlcnQtbWVzc2FnZS5zYy1pb24tYWxlcnQtaW9ze21heC1oZWlnaHQ6MjQwcHh9LmFsZXJ0LW1lc3NhZ2Uuc2MtaW9uLWFsZXJ0LWlvczplbXB0eXtwYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjA7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbToxMnB4fS5hbGVydC1pbnB1dC5zYy1pb24tYWxlcnQtaW9ze2JvcmRlci1yYWRpdXM6N3B4O21hcmdpbi10b3A6MTBweDstd2Via2l0LXBhZGRpbmctc3RhcnQ6N3B4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjdweDstd2Via2l0LXBhZGRpbmctZW5kOjdweDtwYWRkaW5nLWlubGluZS1lbmQ6N3B4O3BhZGRpbmctdG9wOjdweDtwYWRkaW5nLWJvdHRvbTo3cHg7Ym9yZGVyOjAuNTVweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0yNTAsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXN0ZXAtMjUwLCAjYmZiZmJmKSk7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZik7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lO2ZvbnQtc2l6ZToxcmVtfS5hbGVydC1pbnB1dC5zYy1pb24tYWxlcnQtaW9zOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOnZhcigtLWlvbi1wbGFjZWhvbGRlci1jb2xvciwgdmFyKC0taW9uLWNvbG9yLXN0ZXAtNDAwLCB2YXIoLS1pb24tdGV4dC1jb2xvci1zdGVwLTYwMCwgIzk5OTk5OSkpKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtd2VpZ2h0OmluaGVyaXR9LmFsZXJ0LWlucHV0LnNjLWlvbi1hbGVydC1pb3M6Oi1tb3otcGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0taW9uLXBsYWNlaG9sZGVyLWNvbG9yLCB2YXIoLS1pb24tY29sb3Itc3RlcC00MDAsIHZhcigtLWlvbi10ZXh0LWNvbG9yLXN0ZXAtNjAwLCAjOTk5OTk5KSkpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC13ZWlnaHQ6aW5oZXJpdH0uYWxlcnQtaW5wdXQuc2MtaW9uLWFsZXJ0LWlvczotbXMtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0taW9uLXBsYWNlaG9sZGVyLWNvbG9yLCB2YXIoLS1pb24tY29sb3Itc3RlcC00MDAsIHZhcigtLWlvbi10ZXh0LWNvbG9yLXN0ZXAtNjAwLCAjOTk5OTk5KSkpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC13ZWlnaHQ6aW5oZXJpdH0uYWxlcnQtaW5wdXQuc2MtaW9uLWFsZXJ0LWlvczo6LW1zLWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOnZhcigtLWlvbi1wbGFjZWhvbGRlci1jb2xvciwgdmFyKC0taW9uLWNvbG9yLXN0ZXAtNDAwLCB2YXIoLS1pb24tdGV4dC1jb2xvci1zdGVwLTYwMCwgIzk5OTk5OSkpKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtd2VpZ2h0OmluaGVyaXR9LmFsZXJ0LWlucHV0LnNjLWlvbi1hbGVydC1pb3M6OnBsYWNlaG9sZGVye2NvbG9yOnZhcigtLWlvbi1wbGFjZWhvbGRlci1jb2xvciwgdmFyKC0taW9uLWNvbG9yLXN0ZXAtNDAwLCB2YXIoLS1pb24tdGV4dC1jb2xvci1zdGVwLTYwMCwgIzk5OTk5OSkpKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtd2VpZ2h0OmluaGVyaXR9LmFsZXJ0LWlucHV0LnNjLWlvbi1hbGVydC1pb3M6Oi1tcy1jbGVhcntkaXNwbGF5Om5vbmV9LmFsZXJ0LWlucHV0LnNjLWlvbi1hbGVydC1pb3M6Oi13ZWJraXQtZGF0ZS1hbmQtdGltZS12YWx1ZXtoZWlnaHQ6MThweH0uYWxlcnQtcmFkaW8tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvcywuYWxlcnQtY2hlY2tib3gtZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvc3stbXMtc2Nyb2xsLWNoYWluaW5nOm5vbmU7b3ZlcnNjcm9sbC1iZWhhdmlvcjpjb250YWluO21heC1oZWlnaHQ6MjQwcHg7Ym9yZGVyLXRvcDowLjU1cHggc29saWQgcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsIDAsIDAsIDApLCAwLjIpO292ZXJmbG93LXk6YXV0bzstd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzp0b3VjaH0uYWxlcnQtdGFwcGFibGUuc2MtaW9uLWFsZXJ0LWlvc3ttaW4taGVpZ2h0OjQ0cHh9LmFsZXJ0LXJhZGlvLWxhYmVsLnNjLWlvbi1hbGVydC1pb3N7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjEzcHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MTNweDstd2Via2l0LXBhZGRpbmctZW5kOjEzcHg7cGFkZGluZy1pbmxpbmUtZW5kOjEzcHg7cGFkZGluZy10b3A6MTNweDtwYWRkaW5nLWJvdHRvbToxM3B4Oy1tcy1mbGV4OjE7ZmxleDoxOy1tcy1mbGV4LW9yZGVyOjA7b3JkZXI6MDtjb2xvcjp2YXIoLS1pb24tdGV4dC1jb2xvciwgIzAwMCl9W2FyaWEtY2hlY2tlZD10cnVlXS5zYy1pb24tYWxlcnQtaW9zIC5hbGVydC1yYWRpby1sYWJlbC5zYy1pb24tYWxlcnQtaW9ze2NvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMDA1NGU5KX0uYWxlcnQtcmFkaW8taWNvbi5zYy1pb24tYWxlcnQtaW9ze3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4LW9yZGVyOjE7b3JkZXI6MTttaW4td2lkdGg6MzBweH1bYXJpYS1jaGVja2VkPXRydWVdLnNjLWlvbi1hbGVydC1pb3MgLmFsZXJ0LXJhZGlvLWlubmVyLnNjLWlvbi1hbGVydC1pb3N7dG9wOi03cHg7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6NnB4O2hlaWdodDoxMnB4Oy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7Ym9yZGVyLXdpZHRoOjJweDtib3JkZXItdG9wLXdpZHRoOjA7Ym9yZGVyLWxlZnQtd2lkdGg6MDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMDA1NGU5KX1bYXJpYS1jaGVja2VkPXRydWVdLnNjLWlvbi1hbGVydC1pb3MgLmFsZXJ0LXJhZGlvLWlubmVyLnNjLWlvbi1hbGVydC1pb3N7aW5zZXQtaW5saW5lLXN0YXJ0OjdweH0uYWxlcnQtY2hlY2tib3gtbGFiZWwuc2MtaW9uLWFsZXJ0LWlvc3std2Via2l0LXBhZGRpbmctc3RhcnQ6MTNweDtwYWRkaW5nLWlubGluZS1zdGFydDoxM3B4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MTNweDtwYWRkaW5nLWlubGluZS1lbmQ6MTNweDtwYWRkaW5nLXRvcDoxM3B4O3BhZGRpbmctYm90dG9tOjEzcHg7LW1zLWZsZXg6MTtmbGV4OjE7Y29sb3I6dmFyKC0taW9uLXRleHQtY29sb3IsICMwMDApfS5hbGVydC1jaGVja2JveC1pY29uLnNjLWlvbi1hbGVydC1pb3N7Ym9yZGVyLXJhZGl1czo1MCU7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MTZweDttYXJnaW4taW5saW5lLXN0YXJ0OjE2cHg7LXdlYmtpdC1tYXJnaW4tZW5kOjZweDttYXJnaW4taW5saW5lLWVuZDo2cHg7bWFyZ2luLXRvcDoxMHB4O21hcmdpbi1ib3R0b206MTBweDtwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDptaW4oMS4zNzVyZW0sIDU1LjgzNnB4KTtoZWlnaHQ6bWluKDEuMzc1cmVtLCA1NS44MzZweCk7Ym9yZGVyLXdpZHRoOjAuMTI1cmVtO2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItY29sb3I6dmFyKC0taW9uLWl0ZW0tYm9yZGVyLWNvbG9yLCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yLCB2YXIoLS1pb24tY29sb3Itc3RlcC0yNTAsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXN0ZXAtMjUwLCAjYzhjN2NjKSkpKTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7Y29udGFpbjpzdHJpY3R9W2FyaWEtY2hlY2tlZD10cnVlXS5zYy1pb24tYWxlcnQtaW9zIC5hbGVydC1jaGVja2JveC1pY29uLnNjLWlvbi1hbGVydC1pb3N7Ym9yZGVyLWNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMDA1NGU5KTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMDA1NGU5KX1bYXJpYS1jaGVja2VkPXRydWVdLnNjLWlvbi1hbGVydC1pb3MgLmFsZXJ0LWNoZWNrYm94LWlubmVyLnNjLWlvbi1hbGVydC1pb3N7dG9wOmNhbGMobWluKDEuMzc1cmVtLCA1NS44MzZweCkgLyA4KTtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDpjYWxjKG1pbigxLjM3NXJlbSwgNTUuODM2cHgpIC8gNiArIDFweCk7aGVpZ2h0OmNhbGMobWluKDEuMzc1cmVtLCA1NS44MzZweCkgKiAwLjUpOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7Ym9yZGVyLXdpZHRoOjAuMTI1cmVtO2JvcmRlci10b3Atd2lkdGg6MDtib3JkZXItbGVmdC13aWR0aDowO2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItY29sb3I6dmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpfVthcmlhLWNoZWNrZWQ9dHJ1ZV0uc2MtaW9uLWFsZXJ0LWlvcyAuYWxlcnQtY2hlY2tib3gtaW5uZXIuc2MtaW9uLWFsZXJ0LWlvc3tpbnNldC1pbmxpbmUtc3RhcnQ6Y2FsYyhtaW4oMS4zNzVyZW0sIDU1LjgzNnB4KSAvIDMpfS5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvc3std2Via2l0LW1hcmdpbi1lbmQ6LTAuNTVweDttYXJnaW4taW5saW5lLWVuZDotMC41NXB4Oy1tcy1mbGV4LXdyYXA6d3JhcDtmbGV4LXdyYXA6d3JhcH0uYWxlcnQtYnV0dG9uLWdyb3VwLXZlcnRpY2FsLnNjLWlvbi1hbGVydC1pb3MgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9ze2JvcmRlci1yaWdodDpub25lfVtkaXI9cnRsXS5zYy1pb24tYWxlcnQtaW9zLWggLmFsZXJ0LWJ1dHRvbi1ncm91cC12ZXJ0aWNhbC5zYy1pb24tYWxlcnQtaW9zIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvczpsYXN0LWNoaWxkLFtkaXI9cnRsXSAuc2MtaW9uLWFsZXJ0LWlvcy1oIC5hbGVydC1idXR0b24tZ3JvdXAtdmVydGljYWwuc2MtaW9uLWFsZXJ0LWlvcyAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3M6bGFzdC1jaGlsZHtib3JkZXItcmlnaHQ6bm9uZX1bZGlyPXJ0bF0uc2MtaW9uLWFsZXJ0LWlvcyAuYWxlcnQtYnV0dG9uLWdyb3VwLXZlcnRpY2FsLnNjLWlvbi1hbGVydC1pb3MgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zOmxhc3QtY2hpbGR7Ym9yZGVyLXJpZ2h0Om5vbmV9QHN1cHBvcnRzIHNlbGVjdG9yKDpkaXIocnRsKSl7LmFsZXJ0LWJ1dHRvbi1ncm91cC12ZXJ0aWNhbC5zYy1pb24tYWxlcnQtaW9zIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvczpsYXN0LWNoaWxkOmRpcihydGwpe2JvcmRlci1yaWdodDpub25lfX0uYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3N7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjhweDtwYWRkaW5nLWlubGluZS1zdGFydDo4cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDo4cHg7cGFkZGluZy1pbmxpbmUtZW5kOjhweDttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7Ym9yZGVyLXJhZGl1czowOy1tcy1mbGV4OjEgMSBhdXRvO2ZsZXg6MSAxIGF1dG87bWluLXdpZHRoOjUwJTtoZWlnaHQ6bWF4KDQ0cHgsIDIuNzVyZW0pO2JvcmRlci10b3A6MC41NXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLCAwLCAwLCAwKSwgMC4yKTtib3JkZXItcmlnaHQ6MC41NXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLCAwLCAwLCAwKSwgMC4yKTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMDA1NGU5KTtmb250LXNpemU6bWF4KDE3cHgsIDEuMDYyNXJlbSk7b3ZlcmZsb3c6aGlkZGVufVtkaXI9cnRsXS5zYy1pb24tYWxlcnQtaW9zLWggLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zOmZpcnN0LWNoaWxkLFtkaXI9cnRsXSAuc2MtaW9uLWFsZXJ0LWlvcy1oIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvczpmaXJzdC1jaGlsZHtib3JkZXItcmlnaHQ6MH1bZGlyPXJ0bF0uc2MtaW9uLWFsZXJ0LWlvcyAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3M6Zmlyc3QtY2hpbGR7Ym9yZGVyLXJpZ2h0OjB9QHN1cHBvcnRzIHNlbGVjdG9yKDpkaXIocnRsKSl7LmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zOmZpcnN0LWNoaWxkOmRpcihydGwpe2JvcmRlci1yaWdodDowfX0uYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3M6bGFzdC1jaGlsZHtib3JkZXItcmlnaHQ6MDtmb250LXdlaWdodDpib2xkfVtkaXI9cnRsXS5zYy1pb24tYWxlcnQtaW9zLWggLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zOmxhc3QtY2hpbGQsW2Rpcj1ydGxdIC5zYy1pb24tYWxlcnQtaW9zLWggLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zOmxhc3QtY2hpbGR7Ym9yZGVyLXJpZ2h0OjAuNTVweCBzb2xpZCByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwgMCwgMCwgMCksIDAuMil9W2Rpcj1ydGxdLnNjLWlvbi1hbGVydC1pb3MgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zOmxhc3QtY2hpbGR7Ym9yZGVyLXJpZ2h0OjAuNTVweCBzb2xpZCByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwgMCwgMCwgMCksIDAuMil9QHN1cHBvcnRzIHNlbGVjdG9yKDpkaXIocnRsKSl7LmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zOmxhc3QtY2hpbGQ6ZGlyKHJ0bCl7Ym9yZGVyLXJpZ2h0OjAuNTVweCBzb2xpZCByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwgMCwgMCwgMCksIDAuMil9fS5hbGVydC1idXR0b24uaW9uLWFjdGl2YXRlZC5zYy1pb24tYWxlcnQtaW9ze2JhY2tncm91bmQtY29sb3I6cmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsIDAsIDAsIDApLCAwLjEpfS5hbGVydC1idXR0b24tcm9sZS1kZXN0cnVjdGl2ZS5zYy1pb24tYWxlcnQtaW9zLC5hbGVydC1idXR0b24tcm9sZS1kZXN0cnVjdGl2ZS5pb24tYWN0aXZhdGVkLnNjLWlvbi1hbGVydC1pb3MsLmFsZXJ0LWJ1dHRvbi1yb2xlLWRlc3RydWN0aXZlLmlvbi1mb2N1c2VkLnNjLWlvbi1hbGVydC1pb3N7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWRhbmdlciwgI2M1MDAwZil9XCI7XG5jb25zdCBhbGVydE1kQ3NzID0gXCIuc2MtaW9uLWFsZXJ0LW1kLWh7LS1taW4td2lkdGg6MjUwcHg7LS13aWR0aDphdXRvOy0tbWluLWhlaWdodDphdXRvOy0taGVpZ2h0OmF1dG87LS1tYXgtaGVpZ2h0OjkwJTstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjphYnNvbHV0ZTstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7b3V0bGluZTpub25lO2ZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseSwgaW5oZXJpdCk7Y29udGFpbjpzdHJpY3Q7LW1zLXRvdWNoLWFjdGlvbjpub25lO3RvdWNoLWFjdGlvbjpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTt6LWluZGV4OjEwMDF9Lm92ZXJsYXktaGlkZGVuLnNjLWlvbi1hbGVydC1tZC1oe2Rpc3BsYXk6bm9uZX0uYWxlcnQtdG9wLnNjLWlvbi1hbGVydC1tZC1oe3BhZGRpbmctdG9wOjUwcHg7LW1zLWZsZXgtYWxpZ246c3RhcnQ7YWxpZ24taXRlbXM6ZmxleC1zdGFydH0uYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtbWR7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47d2lkdGg6dmFyKC0td2lkdGgpO21pbi13aWR0aDp2YXIoLS1taW4td2lkdGgpO21heC13aWR0aDp2YXIoLS1tYXgtd2lkdGgpO2hlaWdodDp2YXIoLS1oZWlnaHQpO21pbi1oZWlnaHQ6dmFyKC0tbWluLWhlaWdodCk7bWF4LWhlaWdodDp2YXIoLS1tYXgtaGVpZ2h0KTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2NvbnRhaW46Y29udGVudDtvcGFjaXR5OjA7ei1pbmRleDoxMH0uYWxlcnQtdGl0bGUuc2MtaW9uLWFsZXJ0LW1ke21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtwYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjA7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowfS5hbGVydC1zdWItdGl0bGUuc2MtaW9uLWFsZXJ0LW1ke21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDo1cHg7bWFyZ2luLWJvdHRvbTowO3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6MDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjA7Zm9udC13ZWlnaHQ6bm9ybWFsfS5hbGVydC1tZXNzYWdlLnNjLWlvbi1hbGVydC1tZCwuYWxlcnQtaW5wdXQtZ3JvdXAuc2MtaW9uLWFsZXJ0LW1key13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDstd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzp0b3VjaDtvdmVyZmxvdy15OmF1dG87b3ZlcnNjcm9sbC1iZWhhdmlvci15OmNvbnRhaW59LmFsZXJ0LWNoZWNrYm94LWxhYmVsLnNjLWlvbi1hbGVydC1tZCwuYWxlcnQtcmFkaW8tbGFiZWwuc2MtaW9uLWFsZXJ0LW1ke292ZXJmbG93LXdyYXA6YW55d2hlcmV9QG1lZGlhIChhbnktcG9pbnRlcjogY29hcnNlKXsuYWxlcnQtY2hlY2tib3gtZ3JvdXAuc2MtaW9uLWFsZXJ0LW1kOjotd2Via2l0LXNjcm9sbGJhciwuYWxlcnQtcmFkaW8tZ3JvdXAuc2MtaW9uLWFsZXJ0LW1kOjotd2Via2l0LXNjcm9sbGJhciwuYWxlcnQtbWVzc2FnZS5zYy1pb24tYWxlcnQtbWQ6Oi13ZWJraXQtc2Nyb2xsYmFye2Rpc3BsYXk6bm9uZX19LmFsZXJ0LWlucHV0LnNjLWlvbi1hbGVydC1tZHtwYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjA7cGFkZGluZy10b3A6MTBweDtwYWRkaW5nLWJvdHRvbToxMHB4O3dpZHRoOjEwMCU7Ym9yZGVyOjA7YmFja2dyb3VuZDppbmhlcml0O2ZvbnQ6aW5oZXJpdDstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtbWR7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LWRpcmVjdGlvbjpyb3c7d2lkdGg6MTAwJX0uYWxlcnQtYnV0dG9uLWdyb3VwLXZlcnRpY2FsLnNjLWlvbi1hbGVydC1tZHstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjstbXMtZmxleC13cmFwOm5vd3JhcDtmbGV4LXdyYXA6bm93cmFwfS5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LW1ke21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtkaXNwbGF5OmJsb2NrO2JvcmRlcjowO2ZvbnQtc2l6ZTowLjg3NXJlbTtsaW5lLWhlaWdodDoxLjI1cmVtO3otaW5kZXg6MH0uYWxlcnQtYnV0dG9uLmlvbi1mb2N1c2VkLnNjLWlvbi1hbGVydC1tZCwuYWxlcnQtdGFwcGFibGUuaW9uLWZvY3VzZWQuc2MtaW9uLWFsZXJ0LW1ke2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXN0ZXAtMTAwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTEwMCwgI2U2ZTZlNikpfS5hbGVydC1idXR0b24taW5uZXIuc2MtaW9uLWFsZXJ0LW1ke2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWZsb3c6cm93IG5vd3JhcDtmbGV4LWZsb3c6cm93IG5vd3JhcDstbXMtZmxleC1uZWdhdGl2ZTowO2ZsZXgtc2hyaW5rOjA7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7bWluLWhlaWdodDppbmhlcml0fS5hbGVydC1pbnB1dC1kaXNhYmxlZC5zYy1pb24tYWxlcnQtbWQsLmFsZXJ0LWNoZWNrYm94LWJ1dHRvbi1kaXNhYmxlZC5zYy1pb24tYWxlcnQtbWQgLmFsZXJ0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWxlcnQtbWQsLmFsZXJ0LXJhZGlvLWJ1dHRvbi1kaXNhYmxlZC5zYy1pb24tYWxlcnQtbWQgLmFsZXJ0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWxlcnQtbWR7Y3Vyc29yOmRlZmF1bHQ7b3BhY2l0eTowLjU7cG9pbnRlci1ldmVudHM6bm9uZX0uYWxlcnQtdGFwcGFibGUuc2MtaW9uLWFsZXJ0LW1ke21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtwYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjA7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3dpZHRoOjEwMCU7Ym9yZGVyOjA7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtmb250LXNpemU6aW5oZXJpdDtsaW5lLWhlaWdodDppbml0aWFsO3RleHQtYWxpZ246c3RhcnQ7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lO2NvbnRhaW46Y29udGVudH0uYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1tZCwuYWxlcnQtY2hlY2tib3guc2MtaW9uLWFsZXJ0LW1kLC5hbGVydC1pbnB1dC5zYy1pb24tYWxlcnQtbWQsLmFsZXJ0LXJhZGlvLnNjLWlvbi1hbGVydC1tZHtvdXRsaW5lOm5vbmV9LmFsZXJ0LXJhZGlvLWljb24uc2MtaW9uLWFsZXJ0LW1kLC5hbGVydC1jaGVja2JveC1pY29uLnNjLWlvbi1hbGVydC1tZCwuYWxlcnQtY2hlY2tib3gtaW5uZXIuc2MtaW9uLWFsZXJ0LW1key13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveH10ZXh0YXJlYS5hbGVydC1pbnB1dC5zYy1pb24tYWxlcnQtbWR7bWluLWhlaWdodDozN3B4O3Jlc2l6ZTpub25lfS5zYy1pb24tYWxlcnQtbWQtaHstLWJhY2tncm91bmQ6dmFyKC0taW9uLW92ZXJsYXktYmFja2dyb3VuZC1jb2xvciwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTstLW1heC13aWR0aDoyODBweDstLWJhY2tkcm9wLW9wYWNpdHk6dmFyKC0taW9uLWJhY2tkcm9wLW9wYWNpdHksIDAuMzIpO2ZvbnQtc2l6ZTowLjg3NXJlbX0uYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtbWR7Ym9yZGVyLXJhZGl1czo0cHg7LXdlYmtpdC1ib3gtc2hhZG93OjAgMTFweCAxNXB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDI0cHggMzhweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA5cHggNDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtib3gtc2hhZG93OjAgMTFweCAxNXB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDI0cHggMzhweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA5cHggNDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKX0uYWxlcnQtaGVhZC5zYy1pb24tYWxlcnQtbWR7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjIzcHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MjNweDstd2Via2l0LXBhZGRpbmctZW5kOjIzcHg7cGFkZGluZy1pbmxpbmUtZW5kOjIzcHg7cGFkZGluZy10b3A6MjBweDtwYWRkaW5nLWJvdHRvbToxNXB4O3RleHQtYWxpZ246c3RhcnR9LmFsZXJ0LXRpdGxlLnNjLWlvbi1hbGVydC1tZHtjb2xvcjp2YXIoLS1pb24tdGV4dC1jb2xvciwgIzAwMCk7Zm9udC1zaXplOjEuMjVyZW07Zm9udC13ZWlnaHQ6NTAwfS5hbGVydC1zdWItdGl0bGUuc2MtaW9uLWFsZXJ0LW1ke2NvbG9yOnZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwKTtmb250LXNpemU6MXJlbX0uYWxlcnQtbWVzc2FnZS5zYy1pb24tYWxlcnQtbWQsLmFsZXJ0LWlucHV0LWdyb3VwLnNjLWlvbi1hbGVydC1tZHstd2Via2l0LXBhZGRpbmctc3RhcnQ6MjRweDtwYWRkaW5nLWlubGluZS1zdGFydDoyNHB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MjRweDtwYWRkaW5nLWlubGluZS1lbmQ6MjRweDtwYWRkaW5nLXRvcDoyMHB4O3BhZGRpbmctYm90dG9tOjIwcHg7Y29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtNTUwLCB2YXIoLS1pb24tdGV4dC1jb2xvci1zdGVwLTQ1MCwgIzczNzM3MykpfS5hbGVydC1tZXNzYWdlLnNjLWlvbi1hbGVydC1tZHtmb250LXNpemU6MXJlbX1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCl7LmFsZXJ0LW1lc3NhZ2Uuc2MtaW9uLWFsZXJ0LW1ke21heC1oZWlnaHQ6MjY2cHh9fS5hbGVydC1tZXNzYWdlLnNjLWlvbi1hbGVydC1tZDplbXB0eXtwYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjA7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowfS5hbGVydC1oZWFkLnNjLWlvbi1hbGVydC1tZCsuYWxlcnQtbWVzc2FnZS5zYy1pb24tYWxlcnQtbWR7cGFkZGluZy10b3A6MH0uYWxlcnQtaW5wdXQuc2MtaW9uLWFsZXJ0LW1ke21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDo1cHg7bWFyZ2luLWJvdHRvbTo1cHg7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTE1MCwgI2Q5ZDlkOSkpO2NvbG9yOnZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwKX0uYWxlcnQtaW5wdXQuc2MtaW9uLWFsZXJ0LW1kOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOnZhcigtLWlvbi1wbGFjZWhvbGRlci1jb2xvciwgdmFyKC0taW9uLWNvbG9yLXN0ZXAtNDAwLCB2YXIoLS1pb24tdGV4dC1jb2xvci1zdGVwLTYwMCwgIzk5OTk5OSkpKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtd2VpZ2h0OmluaGVyaXR9LmFsZXJ0LWlucHV0LnNjLWlvbi1hbGVydC1tZDo6LW1vei1wbGFjZWhvbGRlcntjb2xvcjp2YXIoLS1pb24tcGxhY2Vob2xkZXItY29sb3IsIHZhcigtLWlvbi1jb2xvci1zdGVwLTQwMCwgdmFyKC0taW9uLXRleHQtY29sb3Itc3RlcC02MDAsICM5OTk5OTkpKSk7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXdlaWdodDppbmhlcml0fS5hbGVydC1pbnB1dC5zYy1pb24tYWxlcnQtbWQ6LW1zLWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOnZhcigtLWlvbi1wbGFjZWhvbGRlci1jb2xvciwgdmFyKC0taW9uLWNvbG9yLXN0ZXAtNDAwLCB2YXIoLS1pb24tdGV4dC1jb2xvci1zdGVwLTYwMCwgIzk5OTk5OSkpKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtd2VpZ2h0OmluaGVyaXR9LmFsZXJ0LWlucHV0LnNjLWlvbi1hbGVydC1tZDo6LW1zLWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOnZhcigtLWlvbi1wbGFjZWhvbGRlci1jb2xvciwgdmFyKC0taW9uLWNvbG9yLXN0ZXAtNDAwLCB2YXIoLS1pb24tdGV4dC1jb2xvci1zdGVwLTYwMCwgIzk5OTk5OSkpKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtd2VpZ2h0OmluaGVyaXR9LmFsZXJ0LWlucHV0LnNjLWlvbi1hbGVydC1tZDo6cGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0taW9uLXBsYWNlaG9sZGVyLWNvbG9yLCB2YXIoLS1pb24tY29sb3Itc3RlcC00MDAsIHZhcigtLWlvbi10ZXh0LWNvbG9yLXN0ZXAtNjAwLCAjOTk5OTk5KSkpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC13ZWlnaHQ6aW5oZXJpdH0uYWxlcnQtaW5wdXQuc2MtaW9uLWFsZXJ0LW1kOjotbXMtY2xlYXJ7ZGlzcGxheTpub25lfS5hbGVydC1pbnB1dC5zYy1pb24tYWxlcnQtbWQ6Zm9jdXN7bWFyZ2luLWJvdHRvbTo0cHg7Ym9yZGVyLWJvdHRvbToycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMwMDU0ZTkpfS5hbGVydC1yYWRpby1ncm91cC5zYy1pb24tYWxlcnQtbWQsLmFsZXJ0LWNoZWNrYm94LWdyb3VwLnNjLWlvbi1hbGVydC1tZHtwb3NpdGlvbjpyZWxhdGl2ZTtib3JkZXItdG9wOjFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXN0ZXAtMTUwLCAjZDlkOWQ5KSk7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTE1MCwgI2Q5ZDlkOSkpO292ZXJmbG93OmF1dG99QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpey5hbGVydC1yYWRpby1ncm91cC5zYy1pb24tYWxlcnQtbWQsLmFsZXJ0LWNoZWNrYm94LWdyb3VwLnNjLWlvbi1hbGVydC1tZHttYXgtaGVpZ2h0OjI2NnB4fX0uYWxlcnQtdGFwcGFibGUuc2MtaW9uLWFsZXJ0LW1ke3Bvc2l0aW9uOnJlbGF0aXZlO21pbi1oZWlnaHQ6NDhweH0uYWxlcnQtcmFkaW8tbGFiZWwuc2MtaW9uLWFsZXJ0LW1key13ZWJraXQtcGFkZGluZy1zdGFydDo1MnB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjUycHg7LXdlYmtpdC1wYWRkaW5nLWVuZDoyNnB4O3BhZGRpbmctaW5saW5lLWVuZDoyNnB4O3BhZGRpbmctdG9wOjEzcHg7cGFkZGluZy1ib3R0b206MTNweDstbXMtZmxleDoxO2ZsZXg6MTtjb2xvcjp2YXIoLS1pb24tY29sb3Itc3RlcC04NTAsIHZhcigtLWlvbi10ZXh0LWNvbG9yLXN0ZXAtMTUwLCAjMjYyNjI2KSk7Zm9udC1zaXplOjFyZW19LmFsZXJ0LXJhZGlvLWljb24uc2MtaW9uLWFsZXJ0LW1ke3RvcDowO2JvcmRlci1yYWRpdXM6NTAlO2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MjBweDtoZWlnaHQ6MjBweDtib3JkZXItd2lkdGg6MnB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItY29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtNTUwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTU1MCwgIzczNzM3MykpfS5hbGVydC1yYWRpby1pY29uLnNjLWlvbi1hbGVydC1tZHtpbnNldC1pbmxpbmUtc3RhcnQ6MjZweH0uYWxlcnQtcmFkaW8taW5uZXIuc2MtaW9uLWFsZXJ0LW1ke3RvcDozcHg7Ym9yZGVyLXJhZGl1czo1MCU7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTBweDtoZWlnaHQ6MTBweDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDAsIDAsIDApO3RyYW5zZm9ybTpzY2FsZTNkKDAsIDAsIDApOy13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAyODBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO3RyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gMjgwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTt0cmFuc2l0aW9uOnRyYW5zZm9ybSAyODBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO3RyYW5zaXRpb246dHJhbnNmb3JtIDI4MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSksIC13ZWJraXQtdHJhbnNmb3JtIDI4MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzAwNTRlOSl9LmFsZXJ0LXJhZGlvLWlubmVyLnNjLWlvbi1hbGVydC1tZHtpbnNldC1pbmxpbmUtc3RhcnQ6M3B4fVthcmlhLWNoZWNrZWQ9dHJ1ZV0uc2MtaW9uLWFsZXJ0LW1kIC5hbGVydC1yYWRpby1sYWJlbC5zYy1pb24tYWxlcnQtbWR7Y29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtODUwLCB2YXIoLS1pb24tdGV4dC1jb2xvci1zdGVwLTE1MCwgIzI2MjYyNikpfVthcmlhLWNoZWNrZWQ9dHJ1ZV0uc2MtaW9uLWFsZXJ0LW1kIC5hbGVydC1yYWRpby1pY29uLnNjLWlvbi1hbGVydC1tZHtib3JkZXItY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMwMDU0ZTkpfVthcmlhLWNoZWNrZWQ9dHJ1ZV0uc2MtaW9uLWFsZXJ0LW1kIC5hbGVydC1yYWRpby1pbm5lci5zYy1pb24tYWxlcnQtbWR7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLCAxLCAxKTt0cmFuc2Zvcm06c2NhbGUzZCgxLCAxLCAxKX0uYWxlcnQtY2hlY2tib3gtbGFiZWwuc2MtaW9uLWFsZXJ0LW1key13ZWJraXQtcGFkZGluZy1zdGFydDo1M3B4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjUzcHg7LXdlYmtpdC1wYWRkaW5nLWVuZDoyNnB4O3BhZGRpbmctaW5saW5lLWVuZDoyNnB4O3BhZGRpbmctdG9wOjEzcHg7cGFkZGluZy1ib3R0b206MTNweDstbXMtZmxleDoxO2ZsZXg6MTt3aWR0aDpjYWxjKDEwMCUgLSA1M3B4KTtjb2xvcjp2YXIoLS1pb24tY29sb3Itc3RlcC04NTAsIHZhcigtLWlvbi10ZXh0LWNvbG9yLXN0ZXAtMTUwLCAjMjYyNjI2KSk7Zm9udC1zaXplOjFyZW19LmFsZXJ0LWNoZWNrYm94LWljb24uc2MtaW9uLWFsZXJ0LW1ke3RvcDowO2JvcmRlci1yYWRpdXM6MnB4O3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHg7Ym9yZGVyLXdpZHRoOjJweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTU1MCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3Itc3RlcC01NTAsICM3MzczNzMpKTtjb250YWluOnN0cmljdH0uYWxlcnQtY2hlY2tib3gtaWNvbi5zYy1pb24tYWxlcnQtbWR7aW5zZXQtaW5saW5lLXN0YXJ0OjI2cHh9W2FyaWEtY2hlY2tlZD10cnVlXS5zYy1pb24tYWxlcnQtbWQgLmFsZXJ0LWNoZWNrYm94LWljb24uc2MtaW9uLWFsZXJ0LW1ke2JvcmRlci1jb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzAwNTRlOSk7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzAwNTRlOSl9W2FyaWEtY2hlY2tlZD10cnVlXS5zYy1pb24tYWxlcnQtbWQgLmFsZXJ0LWNoZWNrYm94LWlubmVyLnNjLWlvbi1hbGVydC1tZHt0b3A6MDtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDo2cHg7aGVpZ2h0OjEwcHg7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTtib3JkZXItd2lkdGg6MnB4O2JvcmRlci10b3Atd2lkdGg6MDtib3JkZXItbGVmdC13aWR0aDowO2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QsICNmZmYpfVthcmlhLWNoZWNrZWQ9dHJ1ZV0uc2MtaW9uLWFsZXJ0LW1kIC5hbGVydC1jaGVja2JveC1pbm5lci5zYy1pb24tYWxlcnQtbWR7aW5zZXQtaW5saW5lLXN0YXJ0OjNweH0uYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1tZHstd2Via2l0LXBhZGRpbmctc3RhcnQ6OHB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjhweDstd2Via2l0LXBhZGRpbmctZW5kOjhweDtwYWRkaW5nLWlubGluZS1lbmQ6OHB4O3BhZGRpbmctdG9wOjhweDtwYWRkaW5nLWJvdHRvbTo4cHg7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94Oy1tcy1mbGV4LXdyYXA6d3JhcC1yZXZlcnNlO2ZsZXgtd3JhcDp3cmFwLXJldmVyc2U7LW1zLWZsZXgtcGFjazplbmQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfS5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LW1ke2JvcmRlci1yYWRpdXM6MnB4Oy13ZWJraXQtbWFyZ2luLXN0YXJ0OjA7bWFyZ2luLWlubGluZS1zdGFydDowOy13ZWJraXQtbWFyZ2luLWVuZDo4cHg7bWFyZ2luLWlubGluZS1lbmQ6OHB4O21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjEwcHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MTBweDstd2Via2l0LXBhZGRpbmctZW5kOjEwcHg7cGFkZGluZy1pbmxpbmUtZW5kOjEwcHg7cGFkZGluZy10b3A6MTBweDtwYWRkaW5nLWJvdHRvbToxMHB4O3Bvc2l0aW9uOnJlbGF0aXZlO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMwMDU0ZTkpO2ZvbnQtd2VpZ2h0OjUwMDt0ZXh0LWFsaWduOmVuZDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7b3ZlcmZsb3c6aGlkZGVufS5hbGVydC1idXR0b24taW5uZXIuc2MtaW9uLWFsZXJ0LW1key1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZH1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCl7LnNjLWlvbi1hbGVydC1tZC1oey0tbWF4LXdpZHRoOm1pbigxMDB2dyAtIDk2cHgsIDU2MHB4KTstLW1heC1oZWlnaHQ6bWluKDEwMHZoIC0gOTZweCwgNTYwcHgpfX1cIjtcbmNvbnN0IEFsZXJ0ID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmRpZFByZXNlbnQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkFsZXJ0RGlkUHJlc2VudFwiLCA3KTtcbiAgICB0aGlzLndpbGxQcmVzZW50ID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25BbGVydFdpbGxQcmVzZW50XCIsIDcpO1xuICAgIHRoaXMud2lsbERpc21pc3MgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkFsZXJ0V2lsbERpc21pc3NcIiwgNyk7XG4gICAgdGhpcy5kaWREaXNtaXNzID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25BbGVydERpZERpc21pc3NcIiwgNyk7XG4gICAgdGhpcy5kaWRQcmVzZW50U2hvcnRoYW5kID0gY3JlYXRlRXZlbnQodGhpcywgXCJkaWRQcmVzZW50XCIsIDcpO1xuICAgIHRoaXMud2lsbFByZXNlbnRTaG9ydGhhbmQgPSBjcmVhdGVFdmVudCh0aGlzLCBcIndpbGxQcmVzZW50XCIsIDcpO1xuICAgIHRoaXMud2lsbERpc21pc3NTaG9ydGhhbmQgPSBjcmVhdGVFdmVudCh0aGlzLCBcIndpbGxEaXNtaXNzXCIsIDcpO1xuICAgIHRoaXMuZGlkRGlzbWlzc1Nob3J0aGFuZCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiZGlkRGlzbWlzc1wiLCA3KTtcbiAgICB0aGlzLmRlbGVnYXRlQ29udHJvbGxlciA9IGNyZWF0ZURlbGVnYXRlQ29udHJvbGxlcih0aGlzKTtcbiAgICB0aGlzLmxvY2tDb250cm9sbGVyID0gY3JlYXRlTG9ja0NvbnRyb2xsZXIoKTtcbiAgICB0aGlzLnRyaWdnZXJDb250cm9sbGVyID0gY3JlYXRlVHJpZ2dlckNvbnRyb2xsZXIoKTtcbiAgICB0aGlzLmN1c3RvbUhUTUxFbmFibGVkID0gY29uZmlnLmdldCgnaW5uZXJIVE1MVGVtcGxhdGVzRW5hYmxlZCcsIEVOQUJMRV9IVE1MX0NPTlRFTlRfREVGQVVMVCk7XG4gICAgdGhpcy5wcm9jZXNzZWRJbnB1dHMgPSBbXTtcbiAgICB0aGlzLnByb2Nlc3NlZEJ1dHRvbnMgPSBbXTtcbiAgICB0aGlzLnByZXNlbnRlZCA9IGZhbHNlO1xuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICB0aGlzLmhhc0NvbnRyb2xsZXIgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBrZXlib2FyZCB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgZGlzbWlzc2VkIHdoZW4gdGhlIG92ZXJsYXkgaXMgcHJlc2VudGVkLlxuICAgICAqL1xuICAgIHRoaXMua2V5Ym9hcmRDbG9zZSA9IHRydWU7XG4gICAgLyoqXG4gICAgICogQXJyYXkgb2YgYnV0dG9ucyB0byBiZSBhZGRlZCB0byB0aGUgYWxlcnQuXG4gICAgICovXG4gICAgdGhpcy5idXR0b25zID0gW107XG4gICAgLyoqXG4gICAgICogQXJyYXkgb2YgaW5wdXQgdG8gc2hvdyBpbiB0aGUgYWxlcnQuXG4gICAgICovXG4gICAgdGhpcy5pbnB1dHMgPSBbXTtcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBhbGVydCB3aWxsIGJlIGRpc21pc3NlZCB3aGVuIHRoZSBiYWNrZHJvcCBpcyBjbGlja2VkLlxuICAgICAqL1xuICAgIHRoaXMuYmFja2Ryb3BEaXNtaXNzID0gdHJ1ZTtcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBhbGVydCB3aWxsIGJlIHRyYW5zbHVjZW50LlxuICAgICAqIE9ubHkgYXBwbGllcyB3aGVuIHRoZSBtb2RlIGlzIGBcImlvc1wiYCBhbmQgdGhlIGRldmljZSBzdXBwb3J0c1xuICAgICAqIFtgYmFja2Ryb3AtZmlsdGVyYF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JhY2tkcm9wLWZpbHRlciNCcm93c2VyX2NvbXBhdGliaWxpdHkpLlxuICAgICAqL1xuICAgIHRoaXMudHJhbnNsdWNlbnQgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBhbGVydCB3aWxsIGFuaW1hdGUuXG4gICAgICovXG4gICAgdGhpcy5hbmltYXRlZCA9IHRydWU7XG4gICAgLyoqXG4gICAgICogSWYgYHRydWVgLCB0aGUgYWxlcnQgd2lsbCBvcGVuLiBJZiBgZmFsc2VgLCB0aGUgYWxlcnQgd2lsbCBjbG9zZS5cbiAgICAgKiBVc2UgdGhpcyBpZiB5b3UgbmVlZCBmaW5lciBncmFpbmVkIGNvbnRyb2wgb3ZlciBwcmVzZW50YXRpb24sIG90aGVyd2lzZVxuICAgICAqIGp1c3QgdXNlIHRoZSBhbGVydENvbnRyb2xsZXIgb3IgdGhlIGB0cmlnZ2VyYCBwcm9wZXJ0eS5cbiAgICAgKiBOb3RlOiBgaXNPcGVuYCB3aWxsIG5vdCBhdXRvbWF0aWNhbGx5IGJlIHNldCBiYWNrIHRvIGBmYWxzZWAgd2hlblxuICAgICAqIHRoZSBhbGVydCBkaXNtaXNzZXMuIFlvdSB3aWxsIG5lZWQgdG8gZG8gdGhhdCBpbiB5b3VyIGNvZGUuXG4gICAgICovXG4gICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICB0aGlzLm9uQmFja2Ryb3BUYXAgPSAoKSA9PiB7XG4gICAgICB0aGlzLmRpc21pc3ModW5kZWZpbmVkLCBCQUNLRFJPUCk7XG4gICAgfTtcbiAgICB0aGlzLmRpc3BhdGNoQ2FuY2VsSGFuZGxlciA9IGV2ID0+IHtcbiAgICAgIGNvbnN0IHJvbGUgPSBldi5kZXRhaWwucm9sZTtcbiAgICAgIGlmIChpc0NhbmNlbChyb2xlKSkge1xuICAgICAgICBjb25zdCBjYW5jZWxCdXR0b24gPSB0aGlzLnByb2Nlc3NlZEJ1dHRvbnMuZmluZChiID0+IGIucm9sZSA9PT0gJ2NhbmNlbCcpO1xuICAgICAgICB0aGlzLmNhbGxCdXR0b25IYW5kbGVyKGNhbmNlbEJ1dHRvbik7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBvbklzT3BlbkNoYW5nZShuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICBpZiAobmV3VmFsdWUgPT09IHRydWUgJiYgb2xkVmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLnByZXNlbnQoKTtcbiAgICB9IGVsc2UgaWYgKG5ld1ZhbHVlID09PSBmYWxzZSAmJiBvbGRWYWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5kaXNtaXNzKCk7XG4gICAgfVxuICB9XG4gIHRyaWdnZXJDaGFuZ2VkKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRyaWdnZXIsXG4gICAgICBlbCxcbiAgICAgIHRyaWdnZXJDb250cm9sbGVyXG4gICAgfSA9IHRoaXM7XG4gICAgaWYgKHRyaWdnZXIpIHtcbiAgICAgIHRyaWdnZXJDb250cm9sbGVyLmFkZENsaWNrTGlzdGVuZXIoZWwsIHRyaWdnZXIpO1xuICAgIH1cbiAgfVxuICBvbktleWRvd24oZXYpIHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgaW5wdXRUeXBlcyA9IG5ldyBTZXQodGhpcy5wcm9jZXNzZWRJbnB1dHMubWFwKGkgPT4gaS50eXBlKSk7XG4gICAgLyoqXG4gICAgICogQmFzZWQgb24ga2V5Ym9hcmQgbmF2aWdhdGlvbiByZXF1aXJlbWVudHMsIHRoZVxuICAgICAqIGNoZWNrYm94IHNob3VsZCBub3QgcmVzcG9uZCB0byB0aGUgZW50ZXIga2V5ZG93biBldmVudC5cbiAgICAgKi9cbiAgICBpZiAoaW5wdXRUeXBlcy5oYXMoJ2NoZWNrYm94JykgJiYgZXYua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFbnN1cmUgd2hlbiBhbGVydCBjb250YWluZXIgaXMgYmVpbmcgZm9jdXNlZCwgYW5kIHRoZSB1c2VyIHByZXNzZXMgdGhlIHRhYiArIHNoaWZ0IGtleXMsIHRoZSBmb2N1cyB3aWxsIGJlIHNldCB0byB0aGUgbGFzdCBhbGVydCBidXR0b24uXG4gICAgICovXG4gICAgaWYgKGV2LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FsZXJ0LXdyYXBwZXInKSkge1xuICAgICAgaWYgKGV2LmtleSA9PT0gJ1RhYicgJiYgZXYuc2hpZnRLZXkpIHtcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgbGFzdENoaWxkQnRuID0gKF9hID0gdGhpcy53cmFwcGVyRWwpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5xdWVyeVNlbGVjdG9yKCcuYWxlcnQtYnV0dG9uOmxhc3QtY2hpbGQnKTtcbiAgICAgICAgbGFzdENoaWxkQnRuLmZvY3VzKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gVGhlIG9ubHkgaW5wdXRzIHdlIHdhbnQgdG8gbmF2aWdhdGUgYmV0d2VlbiB1c2luZyBhcnJvdyBrZXlzIGFyZSB0aGUgcmFkaW9zXG4gICAgLy8gaWdub3JlIHRoZSBrZXlkb3duIGV2ZW50IGlmIGl0IGlzIG5vdCBvbiBhIHJhZGlvIGJ1dHRvblxuICAgIGlmICghaW5wdXRUeXBlcy5oYXMoJ3JhZGlvJykgfHwgZXYudGFyZ2V0ICYmICF0aGlzLmVsLmNvbnRhaW5zKGV2LnRhcmdldCkgfHwgZXYudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWxlcnQtYnV0dG9uJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gR2V0IGFsbCByYWRpb3MgaW5zaWRlIG9mIHRoZSByYWRpbyBncm91cCBhbmQgdGhlblxuICAgIC8vIGZpbHRlciBvdXQgZGlzYWJsZWQgcmFkaW9zIHNpbmNlIHdlIG5lZWQgdG8gc2tpcCB0aG9zZVxuICAgIGNvbnN0IHF1ZXJ5ID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKCcuYWxlcnQtcmFkaW8nKTtcbiAgICBjb25zdCByYWRpb3MgPSBBcnJheS5mcm9tKHF1ZXJ5KS5maWx0ZXIocmFkaW8gPT4gIXJhZGlvLmRpc2FibGVkKTtcbiAgICAvLyBUaGUgZm9jdXNlZCByYWRpbyBpcyB0aGUgb25lIHRoYXQgc2hhcmVzIHRoZSBzYW1lIGlkIGFzXG4gICAgLy8gdGhlIGV2ZW50IHRhcmdldFxuICAgIGNvbnN0IGluZGV4ID0gcmFkaW9zLmZpbmRJbmRleChyYWRpbyA9PiByYWRpby5pZCA9PT0gZXYudGFyZ2V0LmlkKTtcbiAgICAvLyBXZSBuZWVkIHRvIGtub3cgd2hhdCB0aGUgbmV4dCByYWRpbyBlbGVtZW50IHNob3VsZFxuICAgIC8vIGJlIGluIG9yZGVyIHRvIGNoYW5nZSB0aGUgZm9jdXNcbiAgICBsZXQgbmV4dEVsO1xuICAgIC8vIElmIGhpdHRpbmcgYXJyb3cgZG93biBvciBhcnJvdyByaWdodCwgbW92ZSB0byB0aGUgbmV4dCByYWRpb1xuICAgIC8vIElmIHdlJ3JlIG9uIHRoZSBsYXN0IHJhZGlvLCBtb3ZlIHRvIHRoZSBmaXJzdCByYWRpb1xuICAgIGlmIChbJ0Fycm93RG93bicsICdBcnJvd1JpZ2h0J10uaW5jbHVkZXMoZXYua2V5KSkge1xuICAgICAgbmV4dEVsID0gaW5kZXggPT09IHJhZGlvcy5sZW5ndGggLSAxID8gcmFkaW9zWzBdIDogcmFkaW9zW2luZGV4ICsgMV07XG4gICAgfVxuICAgIC8vIElmIGhpdHRpbmcgYXJyb3cgdXAgb3IgYXJyb3cgbGVmdCwgbW92ZSB0byB0aGUgcHJldmlvdXMgcmFkaW9cbiAgICAvLyBJZiB3ZSdyZSBvbiB0aGUgZmlyc3QgcmFkaW8sIG1vdmUgdG8gdGhlIGxhc3QgcmFkaW9cbiAgICBpZiAoWydBcnJvd1VwJywgJ0Fycm93TGVmdCddLmluY2x1ZGVzKGV2LmtleSkpIHtcbiAgICAgIG5leHRFbCA9IGluZGV4ID09PSAwID8gcmFkaW9zW3JhZGlvcy5sZW5ndGggLSAxXSA6IHJhZGlvc1tpbmRleCAtIDFdO1xuICAgIH1cbiAgICBpZiAobmV4dEVsICYmIHJhZGlvcy5pbmNsdWRlcyhuZXh0RWwpKSB7XG4gICAgICBjb25zdCBuZXh0UHJvY2Vzc2VkID0gdGhpcy5wcm9jZXNzZWRJbnB1dHMuZmluZChpbnB1dCA9PiBpbnB1dC5pZCA9PT0gKG5leHRFbCA9PT0gbnVsbCB8fCBuZXh0RWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5leHRFbC5pZCkpO1xuICAgICAgaWYgKG5leHRQcm9jZXNzZWQpIHtcbiAgICAgICAgdGhpcy5yYkNsaWNrKG5leHRQcm9jZXNzZWQpO1xuICAgICAgICBuZXh0RWwuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgYnV0dG9uc0NoYW5nZWQoKSB7XG4gICAgY29uc3QgYnV0dG9ucyA9IHRoaXMuYnV0dG9ucztcbiAgICB0aGlzLnByb2Nlc3NlZEJ1dHRvbnMgPSBidXR0b25zLm1hcChidG4gPT4ge1xuICAgICAgcmV0dXJuIHR5cGVvZiBidG4gPT09ICdzdHJpbmcnID8ge1xuICAgICAgICB0ZXh0OiBidG4sXG4gICAgICAgIHJvbGU6IGJ0bi50b0xvd2VyQ2FzZSgpID09PSAnY2FuY2VsJyA/ICdjYW5jZWwnIDogdW5kZWZpbmVkXG4gICAgICB9IDogYnRuO1xuICAgIH0pO1xuICB9XG4gIGlucHV0c0NoYW5nZWQoKSB7XG4gICAgY29uc3QgaW5wdXRzID0gdGhpcy5pbnB1dHM7XG4gICAgLy8gR2V0IHRoZSBmaXJzdCBpbnB1dCB0aGF0IGlzIG5vdCBkaXNhYmxlZCBhbmQgdGhlIGNoZWNrZWQgb25lXG4gICAgLy8gSWYgYW4gZW5hYmxlZCBjaGVja2VkIGlucHV0IGV4aXN0cywgc2V0IGl0IHRvIGJlIHRoZSBmb2N1c2FibGUgaW5wdXRcbiAgICAvLyBvdGhlcndpc2Ugd2UgZGVmYXVsdCB0byBmb2N1cyB0aGUgZmlyc3QgaW5wdXRcbiAgICAvLyBUaGlzIHdpbGwgb25seSBiZSB1c2VkIHdoZW4gdGhlIGlucHV0IGlzIHR5cGUgcmFkaW9cbiAgICBjb25zdCBmaXJzdCA9IGlucHV0cy5maW5kKGlucHV0ID0+ICFpbnB1dC5kaXNhYmxlZCk7XG4gICAgY29uc3QgY2hlY2tlZCA9IGlucHV0cy5maW5kKGlucHV0ID0+IGlucHV0LmNoZWNrZWQgJiYgIWlucHV0LmRpc2FibGVkKTtcbiAgICBjb25zdCBmb2N1c2FibGUgPSBjaGVja2VkIHx8IGZpcnN0O1xuICAgIC8vIEFuIGFsZXJ0IGNhbiBiZSBjcmVhdGVkIHdpdGggc2V2ZXJhbCBkaWZmZXJlbnQgaW5wdXRzLiBSYWRpb3MsXG4gICAgLy8gY2hlY2tib3hlcyBhbmQgaW5wdXRzIGFyZSBhbGwgYWNjZXB0ZWQsIGJ1dCB0aGV5IGNhbm5vdCBiZSBtaXhlZC5cbiAgICBjb25zdCBpbnB1dFR5cGVzID0gbmV3IFNldChpbnB1dHMubWFwKGkgPT4gaS50eXBlKSk7XG4gICAgaWYgKGlucHV0VHlwZXMuaGFzKCdjaGVja2JveCcpICYmIGlucHV0VHlwZXMuaGFzKCdyYWRpbycpKSB7XG4gICAgICBwcmludElvbldhcm5pbmcoYFtpb24tYWxlcnRdIC0gQWxlcnQgY2Fubm90IG1peCBpbnB1dCB0eXBlczogJHtBcnJheS5mcm9tKGlucHV0VHlwZXMudmFsdWVzKCkpLmpvaW4oJy8nKX0uIFBsZWFzZSBzZWUgYWxlcnQgZG9jcyBmb3IgbW9yZSBpbmZvLmApO1xuICAgIH1cbiAgICB0aGlzLmlucHV0VHlwZSA9IGlucHV0VHlwZXMudmFsdWVzKCkubmV4dCgpLnZhbHVlO1xuICAgIHRoaXMucHJvY2Vzc2VkSW5wdXRzID0gaW5wdXRzLm1hcCgoaSwgaW5kZXgpID0+IHtcbiAgICAgIHZhciBfYTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IGkudHlwZSB8fCAndGV4dCcsXG4gICAgICAgIG5hbWU6IGkubmFtZSB8fCBgJHtpbmRleH1gLFxuICAgICAgICBwbGFjZWhvbGRlcjogaS5wbGFjZWhvbGRlciB8fCAnJyxcbiAgICAgICAgdmFsdWU6IGkudmFsdWUsXG4gICAgICAgIGxhYmVsOiBpLmxhYmVsLFxuICAgICAgICBjaGVja2VkOiAhIWkuY2hlY2tlZCxcbiAgICAgICAgZGlzYWJsZWQ6ICEhaS5kaXNhYmxlZCxcbiAgICAgICAgaWQ6IGkuaWQgfHwgYGFsZXJ0LWlucHV0LSR7dGhpcy5vdmVybGF5SW5kZXh9LSR7aW5kZXh9YCxcbiAgICAgICAgaGFuZGxlcjogaS5oYW5kbGVyLFxuICAgICAgICBtaW46IGkubWluLFxuICAgICAgICBtYXg6IGkubWF4LFxuICAgICAgICBjc3NDbGFzczogKF9hID0gaS5jc3NDbGFzcykgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJycsXG4gICAgICAgIGF0dHJpYnV0ZXM6IGkuYXR0cmlidXRlcyB8fCB7fSxcbiAgICAgICAgdGFiaW5kZXg6IGkudHlwZSA9PT0gJ3JhZGlvJyAmJiBpICE9PSBmb2N1c2FibGUgPyAtMSA6IDBcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgcHJlcGFyZU92ZXJsYXkodGhpcy5lbCk7XG4gICAgdGhpcy50cmlnZ2VyQ2hhbmdlZCgpO1xuICB9XG4gIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHZhciBfYTtcbiAgICBpZiAoISgoX2EgPSB0aGlzLmh0bWxBdHRyaWJ1dGVzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaWQpKSB7XG4gICAgICBzZXRPdmVybGF5SWQodGhpcy5lbCk7XG4gICAgfVxuICAgIHRoaXMuaW5wdXRzQ2hhbmdlZCgpO1xuICAgIHRoaXMuYnV0dG9uc0NoYW5nZWQoKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLnRyaWdnZXJDb250cm9sbGVyLnJlbW92ZUNsaWNrTGlzdGVuZXIoKTtcbiAgICBpZiAodGhpcy5nZXN0dXJlKSB7XG4gICAgICB0aGlzLmdlc3R1cmUuZGVzdHJveSgpO1xuICAgICAgdGhpcy5nZXN0dXJlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIC8qKlxuICAgICAqIE9ubHkgY3JlYXRlIGdlc3R1cmUgaWY6XG4gICAgICogMS4gQSBnZXN0dXJlIGRvZXMgbm90IGFscmVhZHkgZXhpc3RcbiAgICAgKiAyLiBBcHAgaXMgcnVubmluZyBpbiBpT1MgbW9kZVxuICAgICAqIDMuIEEgd3JhcHBlciByZWYgZXhpc3RzXG4gICAgICovXG4gICAgaWYgKCF0aGlzLmdlc3R1cmUgJiYgZ2V0SW9uTW9kZSh0aGlzKSA9PT0gJ2lvcycgJiYgdGhpcy53cmFwcGVyRWwpIHtcbiAgICAgIHRoaXMuZ2VzdHVyZSA9IGNyZWF0ZUJ1dHRvbkFjdGl2ZUdlc3R1cmUodGhpcy53cmFwcGVyRWwsIHJlZkVsID0+IHJlZkVsLmNsYXNzTGlzdC5jb250YWlucygnYWxlcnQtYnV0dG9uJykpO1xuICAgICAgdGhpcy5nZXN0dXJlLmVuYWJsZSh0cnVlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSWYgYWxlcnQgd2FzIHJlbmRlcmVkIHdpdGggaXNPcGVuPVwidHJ1ZVwiXG4gICAgICogdGhlbiB3ZSBzaG91bGQgb3BlbiBhbGVydCBpbW1lZGlhdGVseS5cbiAgICAgKi9cbiAgICBpZiAodGhpcy5pc09wZW4gPT09IHRydWUpIHtcbiAgICAgIHJhZigoKSA9PiB0aGlzLnByZXNlbnQoKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFdoZW4gYmluZGluZyB2YWx1ZXMgaW4gZnJhbWV3b3JrcyBzdWNoIGFzIEFuZ3VsYXJcbiAgICAgKiBpdCBpcyBwb3NzaWJsZSBmb3IgdGhlIHZhbHVlIHRvIGJlIHNldCBhZnRlciB0aGUgV2ViIENvbXBvbmVudFxuICAgICAqIGluaXRpYWxpemVzIGJ1dCBiZWZvcmUgdGhlIHZhbHVlIHdhdGNoZXIgaXMgc2V0IHVwIGluIFN0ZW5jaWwuXG4gICAgICogQXMgYSByZXN1bHQsIHRoZSB3YXRjaGVyIGNhbGxiYWNrIG1heSBub3QgYmUgZmlyZWQuXG4gICAgICogV2Ugd29yayBhcm91bmQgdGhpcyBieSBtYW51YWxseSBjYWxsaW5nIHRoZSB3YXRjaGVyXG4gICAgICogY2FsbGJhY2sgd2hlbiB0aGUgY29tcG9uZW50IGhhcyBsb2FkZWQgYW5kIHRoZSB3YXRjaGVyXG4gICAgICogaXMgY29uZmlndXJlZC5cbiAgICAgKi9cbiAgICB0aGlzLnRyaWdnZXJDaGFuZ2VkKCk7XG4gIH1cbiAgLyoqXG4gICAqIFByZXNlbnQgdGhlIGFsZXJ0IG92ZXJsYXkgYWZ0ZXIgaXQgaGFzIGJlZW4gY3JlYXRlZC5cbiAgICovXG4gIGFzeW5jIHByZXNlbnQoKSB7XG4gICAgY29uc3QgdW5sb2NrID0gYXdhaXQgdGhpcy5sb2NrQ29udHJvbGxlci5sb2NrKCk7XG4gICAgYXdhaXQgdGhpcy5kZWxlZ2F0ZUNvbnRyb2xsZXIuYXR0YWNoVmlld1RvRG9tKCk7XG4gICAgYXdhaXQgcHJlc2VudCh0aGlzLCAnYWxlcnRFbnRlcicsIGlvc0VudGVyQW5pbWF0aW9uLCBtZEVudGVyQW5pbWF0aW9uKS50aGVuKCgpID0+IHtcbiAgICAgIHZhciBfYSwgX2I7XG4gICAgICAvKipcbiAgICAgICAqIENoZWNrIGlmIGFsZXJ0IGhhcyBvbmx5IG9uZSBidXR0b24gYW5kIG5vIGlucHV0cy5cbiAgICAgICAqIElmIHNvLCB0aGVuIGZvY3VzIG9uIHRoZSBidXR0b24uIE90aGVyd2lzZSwgZm9jdXMgdGhlIGFsZXJ0IHdyYXBwZXIuXG4gICAgICAgKiBUaGlzIHdpbGwgbWFwIHRvIHRoZSBkZWZhdWx0IG5hdGl2ZSBhbGVydCBiZWhhdmlvci5cbiAgICAgICAqL1xuICAgICAgaWYgKHRoaXMuYnV0dG9ucy5sZW5ndGggPT09IDEgJiYgdGhpcy5pbnB1dHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5QnRuID0gKF9hID0gdGhpcy53cmFwcGVyRWwpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5xdWVyeVNlbGVjdG9yKCcuYWxlcnQtYnV0dG9uJyk7XG4gICAgICAgIHF1ZXJ5QnRuLmZvY3VzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAoX2IgPSB0aGlzLndyYXBwZXJFbCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdW5sb2NrKCk7XG4gIH1cbiAgLyoqXG4gICAqIERpc21pc3MgdGhlIGFsZXJ0IG92ZXJsYXkgYWZ0ZXIgaXQgaGFzIGJlZW4gcHJlc2VudGVkLlxuICAgKiBUaGlzIGlzIGEgbm8tb3AgaWYgdGhlIG92ZXJsYXkgaGFzIG5vdCBiZWVuIHByZXNlbnRlZCB5ZXQuIElmIHlvdSB3YW50XG4gICAqIHRvIHJlbW92ZSBhbiBvdmVybGF5IGZyb20gdGhlIERPTSB0aGF0IHdhcyBuZXZlciBwcmVzZW50ZWQsIHVzZSB0aGVcbiAgICogW3JlbW92ZV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0VsZW1lbnQvcmVtb3ZlKSBtZXRob2QuXG4gICAqXG4gICAqIEBwYXJhbSBkYXRhIEFueSBkYXRhIHRvIGVtaXQgaW4gdGhlIGRpc21pc3MgZXZlbnRzLlxuICAgKiBAcGFyYW0gcm9sZSBUaGUgcm9sZSBvZiB0aGUgZWxlbWVudCB0aGF0IGlzIGRpc21pc3NpbmcgdGhlIGFsZXJ0LlxuICAgKiBUaGlzIGNhbiBiZSB1c2VmdWwgaW4gYSBidXR0b24gaGFuZGxlciBmb3IgZGV0ZXJtaW5pbmcgd2hpY2ggYnV0dG9uIHdhc1xuICAgKiBjbGlja2VkIHRvIGRpc21pc3MgdGhlIGFsZXJ0LiBTb21lIGV4YW1wbGVzIGluY2x1ZGU6XG4gICAqIGBcImNhbmNlbFwiYCwgYFwiZGVzdHJ1Y3RpdmVcImAsIGBcInNlbGVjdGVkXCJgLCBhbmQgYFwiYmFja2Ryb3BcImAuXG4gICAqL1xuICBhc3luYyBkaXNtaXNzKGRhdGEsIHJvbGUpIHtcbiAgICBjb25zdCB1bmxvY2sgPSBhd2FpdCB0aGlzLmxvY2tDb250cm9sbGVyLmxvY2soKTtcbiAgICBjb25zdCBkaXNtaXNzZWQgPSBhd2FpdCBkaXNtaXNzKHRoaXMsIGRhdGEsIHJvbGUsICdhbGVydExlYXZlJywgaW9zTGVhdmVBbmltYXRpb24sIG1kTGVhdmVBbmltYXRpb24pO1xuICAgIGlmIChkaXNtaXNzZWQpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGVDb250cm9sbGVyLnJlbW92ZVZpZXdGcm9tRG9tKCk7XG4gICAgfVxuICAgIHVubG9jaygpO1xuICAgIHJldHVybiBkaXNtaXNzZWQ7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgYWxlcnQgZGlkIGRpc21pc3MuXG4gICAqL1xuICBvbkRpZERpc21pc3MoKSB7XG4gICAgcmV0dXJuIGV2ZW50TWV0aG9kKHRoaXMuZWwsICdpb25BbGVydERpZERpc21pc3MnKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBhbGVydCB3aWxsIGRpc21pc3MuXG4gICAqL1xuICBvbldpbGxEaXNtaXNzKCkge1xuICAgIHJldHVybiBldmVudE1ldGhvZCh0aGlzLmVsLCAnaW9uQWxlcnRXaWxsRGlzbWlzcycpO1xuICB9XG4gIHJiQ2xpY2soc2VsZWN0ZWRJbnB1dCkge1xuICAgIGZvciAoY29uc3QgaW5wdXQgb2YgdGhpcy5wcm9jZXNzZWRJbnB1dHMpIHtcbiAgICAgIGlucHV0LmNoZWNrZWQgPSBpbnB1dCA9PT0gc2VsZWN0ZWRJbnB1dDtcbiAgICAgIGlucHV0LnRhYmluZGV4ID0gaW5wdXQgPT09IHNlbGVjdGVkSW5wdXQgPyAwIDogLTE7XG4gICAgfVxuICAgIHRoaXMuYWN0aXZlSWQgPSBzZWxlY3RlZElucHV0LmlkO1xuICAgIHNhZmVDYWxsKHNlbGVjdGVkSW5wdXQuaGFuZGxlciwgc2VsZWN0ZWRJbnB1dCk7XG4gICAgZm9yY2VVcGRhdGUodGhpcyk7XG4gIH1cbiAgY2JDbGljayhzZWxlY3RlZElucHV0KSB7XG4gICAgc2VsZWN0ZWRJbnB1dC5jaGVja2VkID0gIXNlbGVjdGVkSW5wdXQuY2hlY2tlZDtcbiAgICBzYWZlQ2FsbChzZWxlY3RlZElucHV0LmhhbmRsZXIsIHNlbGVjdGVkSW5wdXQpO1xuICAgIGZvcmNlVXBkYXRlKHRoaXMpO1xuICB9XG4gIGFzeW5jIGJ1dHRvbkNsaWNrKGJ1dHRvbikge1xuICAgIGNvbnN0IHJvbGUgPSBidXR0b24ucm9sZTtcbiAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLmdldFZhbHVlcygpO1xuICAgIGlmIChpc0NhbmNlbChyb2xlKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZGlzbWlzcyh7XG4gICAgICAgIHZhbHVlc1xuICAgICAgfSwgcm9sZSk7XG4gICAgfVxuICAgIGNvbnN0IHJldHVybkRhdGEgPSBhd2FpdCB0aGlzLmNhbGxCdXR0b25IYW5kbGVyKGJ1dHRvbiwgdmFsdWVzKTtcbiAgICBpZiAocmV0dXJuRGF0YSAhPT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiB0aGlzLmRpc21pc3MoT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIHZhbHVlc1xuICAgICAgfSwgcmV0dXJuRGF0YSksIGJ1dHRvbi5yb2xlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGFzeW5jIGNhbGxCdXR0b25IYW5kbGVyKGJ1dHRvbiwgZGF0YSkge1xuICAgIGlmIChidXR0b24gPT09IG51bGwgfHwgYnV0dG9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBidXR0b24uaGFuZGxlcikge1xuICAgICAgLy8gYSBoYW5kbGVyIGhhcyBiZWVuIHByb3ZpZGVkLCBleGVjdXRlIGl0XG4gICAgICAvLyBwYXNzIHRoZSBoYW5kbGVyIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaW5wdXRzXG4gICAgICBjb25zdCByZXR1cm5EYXRhID0gYXdhaXQgc2FmZUNhbGwoYnV0dG9uLmhhbmRsZXIsIGRhdGEpO1xuICAgICAgaWYgKHJldHVybkRhdGEgPT09IGZhbHNlKSB7XG4gICAgICAgIC8vIGlmIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGhhbmRsZXIgaXMgZmFsc2UgdGhlbiBkbyBub3QgZGlzbWlzc1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHJldHVybkRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiByZXR1cm5EYXRhO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge307XG4gIH1cbiAgZ2V0VmFsdWVzKCkge1xuICAgIGlmICh0aGlzLnByb2Nlc3NlZElucHV0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIC8vIHRoaXMgaXMgYW4gYWxlcnQgd2l0aG91dCBhbnkgb3B0aW9ucy9pbnB1dHMgYXQgYWxsXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAodGhpcy5pbnB1dFR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgIC8vIHRoaXMgaXMgYW4gYWxlcnQgd2l0aCByYWRpbyBidXR0b25zIChzaW5nbGUgdmFsdWUgc2VsZWN0KVxuICAgICAgLy8gcmV0dXJuIHRoZSBvbmUgdmFsdWUgd2hpY2ggaXMgY2hlY2tlZCwgb3RoZXJ3aXNlIHVuZGVmaW5lZFxuICAgICAgY29uc3QgY2hlY2tlZElucHV0ID0gdGhpcy5wcm9jZXNzZWRJbnB1dHMuZmluZChpID0+ICEhaS5jaGVja2VkKTtcbiAgICAgIHJldHVybiBjaGVja2VkSW5wdXQgPyBjaGVja2VkSW5wdXQudmFsdWUgOiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLmlucHV0VHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgLy8gdGhpcyBpcyBhbiBhbGVydCB3aXRoIGNoZWNrYm94ZXMgKG11bHRpcGxlIHZhbHVlIHNlbGVjdClcbiAgICAgIC8vIHJldHVybiBhbiBhcnJheSBvZiBhbGwgdGhlIGNoZWNrZWQgdmFsdWVzXG4gICAgICByZXR1cm4gdGhpcy5wcm9jZXNzZWRJbnB1dHMuZmlsdGVyKGkgPT4gaS5jaGVja2VkKS5tYXAoaSA9PiBpLnZhbHVlKTtcbiAgICB9XG4gICAgLy8gdGhpcyBpcyBhbiBhbGVydCB3aXRoIHRleHQgaW5wdXRzXG4gICAgLy8gcmV0dXJuIGFuIG9iamVjdCBvZiBhbGwgdGhlIHZhbHVlcyB3aXRoIHRoZSBpbnB1dCBuYW1lIGFzIHRoZSBrZXlcbiAgICBjb25zdCB2YWx1ZXMgPSB7fTtcbiAgICB0aGlzLnByb2Nlc3NlZElucHV0cy5mb3JFYWNoKGkgPT4ge1xuICAgICAgdmFsdWVzW2kubmFtZV0gPSBpLnZhbHVlIHx8ICcnO1xuICAgIH0pO1xuICAgIHJldHVybiB2YWx1ZXM7XG4gIH1cbiAgcmVuZGVyQWxlcnRJbnB1dHMoKSB7XG4gICAgc3dpdGNoICh0aGlzLmlucHV0VHlwZSkge1xuICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJDaGVja2JveCgpO1xuICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJSYWRpbygpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVySW5wdXQoKTtcbiAgICB9XG4gIH1cbiAgcmVuZGVyQ2hlY2tib3goKSB7XG4gICAgY29uc3QgaW5wdXRzID0gdGhpcy5wcm9jZXNzZWRJbnB1dHM7XG4gICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgaWYgKGlucHV0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gaChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJhbGVydC1jaGVja2JveC1ncm91cFwiXG4gICAgfSwgaW5wdXRzLm1hcChpID0+IGgoXCJidXR0b25cIiwge1xuICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMuY2JDbGljayhpKSxcbiAgICAgIFwiYXJpYS1jaGVja2VkXCI6IGAke2kuY2hlY2tlZH1gLFxuICAgICAgaWQ6IGkuaWQsXG4gICAgICBkaXNhYmxlZDogaS5kaXNhYmxlZCxcbiAgICAgIHRhYkluZGV4OiBpLnRhYmluZGV4LFxuICAgICAgcm9sZTogXCJjaGVja2JveFwiLFxuICAgICAgY2xhc3M6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZ2V0Q2xhc3NNYXAoaS5jc3NDbGFzcykpLCB7XG4gICAgICAgICdhbGVydC10YXBwYWJsZSc6IHRydWUsXG4gICAgICAgICdhbGVydC1jaGVja2JveCc6IHRydWUsXG4gICAgICAgICdhbGVydC1jaGVja2JveC1idXR0b24nOiB0cnVlLFxuICAgICAgICAnaW9uLWZvY3VzYWJsZSc6IHRydWUsXG4gICAgICAgICdhbGVydC1jaGVja2JveC1idXR0b24tZGlzYWJsZWQnOiBpLmRpc2FibGVkIHx8IGZhbHNlXG4gICAgICB9KVxuICAgIH0sIGgoXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IFwiYWxlcnQtYnV0dG9uLWlubmVyXCJcbiAgICB9LCBoKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBcImFsZXJ0LWNoZWNrYm94LWljb25cIlxuICAgIH0sIGgoXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IFwiYWxlcnQtY2hlY2tib3gtaW5uZXJcIlxuICAgIH0pKSwgaChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJhbGVydC1jaGVja2JveC1sYWJlbFwiXG4gICAgfSwgaS5sYWJlbCkpLCBtb2RlID09PSAnbWQnICYmIGgoXCJpb24tcmlwcGxlLWVmZmVjdFwiLCBudWxsKSkpKTtcbiAgfVxuICByZW5kZXJSYWRpbygpIHtcbiAgICBjb25zdCBpbnB1dHMgPSB0aGlzLnByb2Nlc3NlZElucHV0cztcbiAgICBpZiAoaW5wdXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBoKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBcImFsZXJ0LXJhZGlvLWdyb3VwXCIsXG4gICAgICByb2xlOiBcInJhZGlvZ3JvdXBcIixcbiAgICAgIFwiYXJpYS1hY3RpdmVkZXNjZW5kYW50XCI6IHRoaXMuYWN0aXZlSWRcbiAgICB9LCBpbnB1dHMubWFwKGkgPT4gaChcImJ1dHRvblwiLCB7XG4gICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgb25DbGljazogKCkgPT4gdGhpcy5yYkNsaWNrKGkpLFxuICAgICAgXCJhcmlhLWNoZWNrZWRcIjogYCR7aS5jaGVja2VkfWAsXG4gICAgICBkaXNhYmxlZDogaS5kaXNhYmxlZCxcbiAgICAgIGlkOiBpLmlkLFxuICAgICAgdGFiSW5kZXg6IGkudGFiaW5kZXgsXG4gICAgICBjbGFzczogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBnZXRDbGFzc01hcChpLmNzc0NsYXNzKSksIHtcbiAgICAgICAgJ2FsZXJ0LXJhZGlvLWJ1dHRvbic6IHRydWUsXG4gICAgICAgICdhbGVydC10YXBwYWJsZSc6IHRydWUsXG4gICAgICAgICdhbGVydC1yYWRpbyc6IHRydWUsXG4gICAgICAgICdpb24tZm9jdXNhYmxlJzogdHJ1ZSxcbiAgICAgICAgJ2FsZXJ0LXJhZGlvLWJ1dHRvbi1kaXNhYmxlZCc6IGkuZGlzYWJsZWQgfHwgZmFsc2VcbiAgICAgIH0pLFxuICAgICAgcm9sZTogXCJyYWRpb1wiXG4gICAgfSwgaChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJhbGVydC1idXR0b24taW5uZXJcIlxuICAgIH0sIGgoXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IFwiYWxlcnQtcmFkaW8taWNvblwiXG4gICAgfSwgaChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJhbGVydC1yYWRpby1pbm5lclwiXG4gICAgfSkpLCBoKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBcImFsZXJ0LXJhZGlvLWxhYmVsXCJcbiAgICB9LCBpLmxhYmVsKSkpKSk7XG4gIH1cbiAgcmVuZGVySW5wdXQoKSB7XG4gICAgY29uc3QgaW5wdXRzID0gdGhpcy5wcm9jZXNzZWRJbnB1dHM7XG4gICAgaWYgKGlucHV0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gaChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJhbGVydC1pbnB1dC1ncm91cFwiXG4gICAgfSwgaW5wdXRzLm1hcChpID0+IHtcbiAgICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICAgIGlmIChpLnR5cGUgPT09ICd0ZXh0YXJlYScpIHtcbiAgICAgICAgcmV0dXJuIGgoXCJkaXZcIiwge1xuICAgICAgICAgIGNsYXNzOiBcImFsZXJ0LWlucHV0LXdyYXBwZXJcIlxuICAgICAgICB9LCBoKFwidGV4dGFyZWFcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgcGxhY2Vob2xkZXI6IGkucGxhY2Vob2xkZXIsXG4gICAgICAgICAgdmFsdWU6IGkudmFsdWUsXG4gICAgICAgICAgaWQ6IGkuaWQsXG4gICAgICAgICAgdGFiSW5kZXg6IGkudGFiaW5kZXhcbiAgICAgICAgfSwgaS5hdHRyaWJ1dGVzLCB7XG4gICAgICAgICAgZGlzYWJsZWQ6IChfYiA9IChfYSA9IGkuYXR0cmlidXRlcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmRpc2FibGVkKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBpLmRpc2FibGVkLFxuICAgICAgICAgIGNsYXNzOiBpbnB1dENsYXNzKGkpLFxuICAgICAgICAgIG9uSW5wdXQ6IGUgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgaS52YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgaWYgKChfYSA9IGkuYXR0cmlidXRlcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm9uSW5wdXQpIHtcbiAgICAgICAgICAgICAgaS5hdHRyaWJ1dGVzLm9uSW5wdXQoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGgoXCJkaXZcIiwge1xuICAgICAgICAgIGNsYXNzOiBcImFsZXJ0LWlucHV0LXdyYXBwZXJcIlxuICAgICAgICB9LCBoKFwiaW5wdXRcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgcGxhY2Vob2xkZXI6IGkucGxhY2Vob2xkZXIsXG4gICAgICAgICAgdHlwZTogaS50eXBlLFxuICAgICAgICAgIG1pbjogaS5taW4sXG4gICAgICAgICAgbWF4OiBpLm1heCxcbiAgICAgICAgICB2YWx1ZTogaS52YWx1ZSxcbiAgICAgICAgICBpZDogaS5pZCxcbiAgICAgICAgICB0YWJJbmRleDogaS50YWJpbmRleFxuICAgICAgICB9LCBpLmF0dHJpYnV0ZXMsIHtcbiAgICAgICAgICBkaXNhYmxlZDogKF9kID0gKF9jID0gaS5hdHRyaWJ1dGVzKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuZGlzYWJsZWQpICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6IGkuZGlzYWJsZWQsXG4gICAgICAgICAgY2xhc3M6IGlucHV0Q2xhc3MoaSksXG4gICAgICAgICAgb25JbnB1dDogZSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBpLnZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICBpZiAoKF9hID0gaS5hdHRyaWJ1dGVzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eub25JbnB1dCkge1xuICAgICAgICAgICAgICBpLmF0dHJpYnV0ZXMub25JbnB1dChlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pKSk7XG4gICAgICB9XG4gICAgfSkpO1xuICB9XG4gIHJlbmRlckFsZXJ0QnV0dG9ucygpIHtcbiAgICBjb25zdCBidXR0b25zID0gdGhpcy5wcm9jZXNzZWRCdXR0b25zO1xuICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgIGNvbnN0IGFsZXJ0QnV0dG9uR3JvdXBDbGFzcyA9IHtcbiAgICAgICdhbGVydC1idXR0b24tZ3JvdXAnOiB0cnVlLFxuICAgICAgJ2FsZXJ0LWJ1dHRvbi1ncm91cC12ZXJ0aWNhbCc6IGJ1dHRvbnMubGVuZ3RoID4gMlxuICAgIH07XG4gICAgcmV0dXJuIGgoXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IGFsZXJ0QnV0dG9uR3JvdXBDbGFzc1xuICAgIH0sIGJ1dHRvbnMubWFwKGJ1dHRvbiA9PiBoKFwiYnV0dG9uXCIsIE9iamVjdC5hc3NpZ24oe30sIGJ1dHRvbi5odG1sQXR0cmlidXRlcywge1xuICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgIGlkOiBidXR0b24uaWQsXG4gICAgICBjbGFzczogYnV0dG9uQ2xhc3MoYnV0dG9uKSxcbiAgICAgIHRhYkluZGV4OiAwLFxuICAgICAgb25DbGljazogKCkgPT4gdGhpcy5idXR0b25DbGljayhidXR0b24pXG4gICAgfSksIGgoXCJzcGFuXCIsIHtcbiAgICAgIGNsYXNzOiBcImFsZXJ0LWJ1dHRvbi1pbm5lclwiXG4gICAgfSwgYnV0dG9uLnRleHQpLCBtb2RlID09PSAnbWQnICYmIGgoXCJpb24tcmlwcGxlLWVmZmVjdFwiLCBudWxsKSkpKTtcbiAgfVxuICByZW5kZXJBbGVydE1lc3NhZ2UobXNnSWQpIHtcbiAgICBjb25zdCB7XG4gICAgICBjdXN0b21IVE1MRW5hYmxlZCxcbiAgICAgIG1lc3NhZ2VcbiAgICB9ID0gdGhpcztcbiAgICBpZiAoY3VzdG9tSFRNTEVuYWJsZWQpIHtcbiAgICAgIHJldHVybiBoKFwiZGl2XCIsIHtcbiAgICAgICAgaWQ6IG1zZ0lkLFxuICAgICAgICBjbGFzczogXCJhbGVydC1tZXNzYWdlXCIsXG4gICAgICAgIGlubmVySFRNTDogc2FuaXRpemVET01TdHJpbmcobWVzc2FnZSlcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gaChcImRpdlwiLCB7XG4gICAgICBpZDogbXNnSWQsXG4gICAgICBjbGFzczogXCJhbGVydC1tZXNzYWdlXCJcbiAgICB9LCBtZXNzYWdlKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgb3ZlcmxheUluZGV4LFxuICAgICAgaGVhZGVyLFxuICAgICAgc3ViSGVhZGVyLFxuICAgICAgbWVzc2FnZSxcbiAgICAgIGh0bWxBdHRyaWJ1dGVzXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgY29uc3QgaGRySWQgPSBgYWxlcnQtJHtvdmVybGF5SW5kZXh9LWhkcmA7XG4gICAgY29uc3QgbXNnSWQgPSBgYWxlcnQtJHtvdmVybGF5SW5kZXh9LW1zZ2A7XG4gICAgY29uc3Qgc3ViSGRySWQgPSBgYWxlcnQtJHtvdmVybGF5SW5kZXh9LXN1Yi1oZHJgO1xuICAgIGNvbnN0IHJvbGUgPSB0aGlzLmlucHV0cy5sZW5ndGggPiAwIHx8IHRoaXMuYnV0dG9ucy5sZW5ndGggPiAwID8gJ2FsZXJ0ZGlhbG9nJyA6ICdhbGVydCc7XG4gICAgLyoqXG4gICAgICogVXNlIGJvdGggdGhlIGhlYWRlciBhbmQgc3ViSGVhZGVyIGlkcyBpZiB0aGV5IGFyZSBkZWZpbmVkLlxuICAgICAqIElmIG9ubHkgdGhlIGhlYWRlciBpcyBkZWZpbmVkLCB1c2UgdGhlIGhlYWRlciBpZC5cbiAgICAgKiBJZiBvbmx5IHRoZSBzdWJIZWFkZXIgaXMgZGVmaW5lZCwgdXNlIHRoZSBzdWJIZWFkZXIgaWQuXG4gICAgICogSWYgbmVpdGhlciBhcmUgZGVmaW5lZCwgZG8gbm90IHNldCBhcmlhLWxhYmVsbGVkYnkuXG4gICAgICovXG4gICAgY29uc3QgYXJpYUxhYmVsbGVkQnkgPSBoZWFkZXIgJiYgc3ViSGVhZGVyID8gYCR7aGRySWR9ICR7c3ViSGRySWR9YCA6IGhlYWRlciA/IGhkcklkIDogc3ViSGVhZGVyID8gc3ViSGRySWQgOiBudWxsO1xuICAgIHJldHVybiBoKEhvc3QsIHtcbiAgICAgIGtleTogJzYwMjU0NDBiOWNkMzY5ZDRmYWM4OWU3ZTQyOTZjODRhMTBhMGI4ZTAnLFxuICAgICAgdGFiaW5kZXg6IFwiLTFcIixcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIHpJbmRleDogYCR7MjAwMDAgKyBvdmVybGF5SW5kZXh9YFxuICAgICAgfSxcbiAgICAgIGNsYXNzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGdldENsYXNzTWFwKHRoaXMuY3NzQ2xhc3MpKSwge1xuICAgICAgICBbbW9kZV06IHRydWUsXG4gICAgICAgICdvdmVybGF5LWhpZGRlbic6IHRydWUsXG4gICAgICAgICdhbGVydC10cmFuc2x1Y2VudCc6IHRoaXMudHJhbnNsdWNlbnRcbiAgICAgIH0pLFxuICAgICAgb25Jb25BbGVydFdpbGxEaXNtaXNzOiB0aGlzLmRpc3BhdGNoQ2FuY2VsSGFuZGxlcixcbiAgICAgIG9uSW9uQmFja2Ryb3BUYXA6IHRoaXMub25CYWNrZHJvcFRhcFxuICAgIH0sIGgoXCJpb24tYmFja2Ryb3BcIiwge1xuICAgICAga2V5OiAnM2NkNWNhOGI5OWNiOTViMTFkZDIyYWI0MWE4MjBkODQxMTQyODk2ZicsXG4gICAgICB0YXBwYWJsZTogdGhpcy5iYWNrZHJvcERpc21pc3NcbiAgICB9KSwgaChcImRpdlwiLCB7XG4gICAgICBrZXk6ICc0Y2M2MmFlNmUyMTQyNDA1N2QyMmFlZWYxZThmYzc3MDExZTc3Y2Q1JyxcbiAgICAgIHRhYmluZGV4OiBcIjBcIixcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCJcbiAgICB9KSwgaChcImRpdlwiLCBPYmplY3QuYXNzaWduKHtcbiAgICAgIGtleTogJzM2NDA1N2E2OWYyNWFhODg5MDRkZjE3YmRjZjdlNWJmNzE0ZTc4MzAnLFxuICAgICAgY2xhc3M6IFwiYWxlcnQtd3JhcHBlciBpb24tb3ZlcmxheS13cmFwcGVyXCIsXG4gICAgICByb2xlOiByb2xlLFxuICAgICAgXCJhcmlhLW1vZGFsXCI6IFwidHJ1ZVwiLFxuICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogYXJpYUxhYmVsbGVkQnksXG4gICAgICBcImFyaWEtZGVzY3JpYmVkYnlcIjogbWVzc2FnZSAhPT0gdW5kZWZpbmVkID8gbXNnSWQgOiBudWxsLFxuICAgICAgdGFiaW5kZXg6IFwiMFwiLFxuICAgICAgcmVmOiBlbCA9PiB0aGlzLndyYXBwZXJFbCA9IGVsXG4gICAgfSwgaHRtbEF0dHJpYnV0ZXMpLCBoKFwiZGl2XCIsIHtcbiAgICAgIGtleTogJzc4Njk0ZTNjMGRiMmQ0MDhkZjM4OTlmYjFhOTA4NTliY2M4ZDE0Y2MnLFxuICAgICAgY2xhc3M6IFwiYWxlcnQtaGVhZFwiXG4gICAgfSwgaGVhZGVyICYmIGgoXCJoMlwiLCB7XG4gICAgICBrZXk6ICdlYzg4ZmYzZTRlMWVhODcxYjU5NzUxMzNmZGNmNGNhYzM4YjA1ZTBmJyxcbiAgICAgIGlkOiBoZHJJZCxcbiAgICAgIGNsYXNzOiBcImFsZXJ0LXRpdGxlXCJcbiAgICB9LCBoZWFkZXIpLCBzdWJIZWFkZXIgJiYgIWhlYWRlciAmJiBoKFwiaDJcIiwge1xuICAgICAga2V5OiAnOWIwOWJjOGJiNjhhZjI1NWVmOGI3ZDIyNTg3YWNjOTQ2MTQ4ZTU0NCcsXG4gICAgICBpZDogc3ViSGRySWQsXG4gICAgICBjbGFzczogXCJhbGVydC1zdWItdGl0bGVcIlxuICAgIH0sIHN1YkhlYWRlciksIHN1YkhlYWRlciAmJiBoZWFkZXIgJiYgaChcImgzXCIsIHtcbiAgICAgIGtleTogJzk5YWJlODE1Zjc1ZDJkZjdmMWI3N2MwZGY5ZjM0MzY3MjRmZWE3NmYnLFxuICAgICAgaWQ6IHN1YkhkcklkLFxuICAgICAgY2xhc3M6IFwiYWxlcnQtc3ViLXRpdGxlXCJcbiAgICB9LCBzdWJIZWFkZXIpKSwgdGhpcy5yZW5kZXJBbGVydE1lc3NhZ2UobXNnSWQpLCB0aGlzLnJlbmRlckFsZXJ0SW5wdXRzKCksIHRoaXMucmVuZGVyQWxlcnRCdXR0b25zKCkpLCBoKFwiZGl2XCIsIHtcbiAgICAgIGtleTogJ2E0M2QwYzIyYzBlNDZiMWVmOTExZjkyZmZlYjI1M2Q3OTExYjg1ZjcnLFxuICAgICAgdGFiaW5kZXg6IFwiMFwiLFxuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIlxuICAgIH0pKTtcbiAgfVxuICBnZXQgZWwoKSB7XG4gICAgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7XG4gIH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJpc09wZW5cIjogW1wib25Jc09wZW5DaGFuZ2VcIl0sXG4gICAgICBcInRyaWdnZXJcIjogW1widHJpZ2dlckNoYW5nZWRcIl0sXG4gICAgICBcImJ1dHRvbnNcIjogW1wiYnV0dG9uc0NoYW5nZWRcIl0sXG4gICAgICBcImlucHV0c1wiOiBbXCJpbnB1dHNDaGFuZ2VkXCJdXG4gICAgfTtcbiAgfVxufTtcbmNvbnN0IGlucHV0Q2xhc3MgPSBpbnB1dCA9PiB7XG4gIHZhciBfYSwgX2IsIF9jO1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHtcbiAgICAnYWxlcnQtaW5wdXQnOiB0cnVlLFxuICAgICdhbGVydC1pbnB1dC1kaXNhYmxlZCc6ICgoX2IgPSAoX2EgPSBpbnB1dC5hdHRyaWJ1dGVzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZGlzYWJsZWQpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IGlucHV0LmRpc2FibGVkKSB8fCBmYWxzZVxuICB9LCBnZXRDbGFzc01hcChpbnB1dC5jc3NDbGFzcykpLCBnZXRDbGFzc01hcChpbnB1dC5hdHRyaWJ1dGVzID8gKF9jID0gaW5wdXQuYXR0cmlidXRlcy5jbGFzcykgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnRvU3RyaW5nKCkgOiAnJykpO1xufTtcbmNvbnN0IGJ1dHRvbkNsYXNzID0gYnV0dG9uID0+IHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe1xuICAgICdhbGVydC1idXR0b24nOiB0cnVlLFxuICAgICdpb24tZm9jdXNhYmxlJzogdHJ1ZSxcbiAgICAnaW9uLWFjdGl2YXRhYmxlJzogdHJ1ZSxcbiAgICBbYGFsZXJ0LWJ1dHRvbi1yb2xlLSR7YnV0dG9uLnJvbGV9YF06IGJ1dHRvbi5yb2xlICE9PSB1bmRlZmluZWRcbiAgfSwgZ2V0Q2xhc3NNYXAoYnV0dG9uLmNzc0NsYXNzKSk7XG59O1xuQWxlcnQuc3R5bGUgPSB7XG4gIGlvczogYWxlcnRJb3NDc3MsXG4gIG1kOiBhbGVydE1kQ3NzXG59O1xuZXhwb3J0IHsgQWxlcnQgYXMgaW9uX2FsZXJ0IH07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQSxJQUFNLG9CQUFvQixZQUFVO0FBQ2xDLFFBQU0sZ0JBQWdCLGdCQUFnQjtBQUN0QyxRQUFNLG9CQUFvQixnQkFBZ0I7QUFDMUMsUUFBTSxtQkFBbUIsZ0JBQWdCO0FBQ3pDLG9CQUFrQixXQUFXLE9BQU8sY0FBYyxjQUFjLENBQUMsRUFBRSxPQUFPLFdBQVcsTUFBTSx5QkFBeUIsRUFBRSxhQUFhO0FBQUEsSUFDakksa0JBQWtCO0FBQUEsRUFDcEIsQ0FBQyxFQUFFLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDO0FBQ3RDLG1CQUFpQixXQUFXLE9BQU8sY0FBYyxnQkFBZ0IsQ0FBQyxFQUFFLFVBQVUsQ0FBQztBQUFBLElBQzdFLFFBQVE7QUFBQSxJQUNSLFNBQVM7QUFBQSxJQUNULFdBQVc7QUFBQSxFQUNiLEdBQUc7QUFBQSxJQUNELFFBQVE7QUFBQSxJQUNSLFNBQVM7QUFBQSxJQUNULFdBQVc7QUFBQSxFQUNiLENBQUMsQ0FBQztBQUNGLFNBQU8sY0FBYyxXQUFXLE1BQU0sRUFBRSxPQUFP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
