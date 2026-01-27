import {
  createLockController
} from "./chunk-MEM7IN4A.js";
import {
  ENABLE_HTML_CONTENT_DEFAULT,
  sanitizeDOMString
} from "./chunk-644FBQT2.js";
import {
  GESTURE,
  OVERLAY_GESTURE_PRIORITY,
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
  createColorClasses,
  getClassMap
} from "./chunk-5VP4V3BN.js";
import {
  getIonMode
} from "./chunk-TXLH22R2.js";
import {
  createGesture
} from "./chunk-7NA53B7M.js";
import "./chunk-J5JVDPFK.js";
import "./chunk-MUBGKTGO.js";
import {
  createAnimation
} from "./chunk-2BRJTTQT.js";
import {
  getElementRoot,
  raf
} from "./chunk-RZR7LWTQ.js";
import {
  win
} from "./chunk-YSZWGYJT.js";
import {
  Host,
  config,
  createEvent,
  getElement,
  h,
  printIonError,
  printIonWarning,
  registerInstance
} from "./chunk-BFPTXCSH.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// node_modules/@ionic/core/dist/esm/ion-toast.entry.js
function getAnimationPosition(position, positionAnchor, mode, toast) {
  let offset;
  if (mode === "md") {
    offset = position === "top" ? 8 : -8;
  } else {
    offset = position === "top" ? 10 : -10;
  }
  if (positionAnchor && win) {
    warnIfAnchorIsHidden(positionAnchor, toast);
    const box = positionAnchor.getBoundingClientRect();
    if (position === "top") {
      offset += box.bottom;
    } else if (position === "bottom") {
      offset -= win.innerHeight - box.top;
    }
    return {
      top: `${offset}px`,
      bottom: `${offset}px`
    };
  } else {
    return {
      top: `calc(${offset}px + var(--ion-safe-area-top, 0px))`,
      bottom: `calc(${offset}px - var(--ion-safe-area-bottom, 0px))`
    };
  }
}
function warnIfAnchorIsHidden(positionAnchor, toast) {
  if (positionAnchor.offsetParent === null) {
    printIonWarning("[ion-toast] - The positionAnchor element for ion-toast was found in the DOM, but appears to be hidden. This may lead to unexpected positioning of the toast.", toast);
  }
}
var getOffsetForMiddlePosition = (toastHeight, wrapperHeight) => {
  return Math.floor(toastHeight / 2 - wrapperHeight / 2);
};
var iosEnterAnimation = (baseEl, opts) => {
  const baseAnimation = createAnimation();
  const wrapperAnimation = createAnimation();
  const {
    position,
    top,
    bottom
  } = opts;
  const root = getElementRoot(baseEl);
  const wrapperEl = root.querySelector(".toast-wrapper");
  wrapperAnimation.addElement(wrapperEl);
  switch (position) {
    case "top":
      wrapperAnimation.fromTo("transform", "translateY(-100%)", `translateY(${top})`);
      break;
    case "middle":
      const topPosition = getOffsetForMiddlePosition(baseEl.clientHeight, wrapperEl.clientHeight);
      wrapperEl.style.top = `${topPosition}px`;
      wrapperAnimation.fromTo("opacity", 0.01, 1);
      break;
    default:
      wrapperAnimation.fromTo("transform", "translateY(100%)", `translateY(${bottom})`);
      break;
  }
  return baseAnimation.easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).addAnimation(wrapperAnimation);
};
var iosLeaveAnimation = (baseEl, opts) => {
  const baseAnimation = createAnimation();
  const wrapperAnimation = createAnimation();
  const {
    position,
    top,
    bottom
  } = opts;
  const root = getElementRoot(baseEl);
  const wrapperEl = root.querySelector(".toast-wrapper");
  wrapperAnimation.addElement(wrapperEl);
  switch (position) {
    case "top":
      wrapperAnimation.fromTo("transform", `translateY(${top})`, "translateY(-100%)");
      break;
    case "middle":
      wrapperAnimation.fromTo("opacity", 0.99, 0);
      break;
    default:
      wrapperAnimation.fromTo("transform", `translateY(${bottom})`, "translateY(100%)");
      break;
  }
  return baseAnimation.easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(wrapperAnimation);
};
var mdEnterAnimation = (baseEl, opts) => {
  const baseAnimation = createAnimation();
  const wrapperAnimation = createAnimation();
  const {
    position,
    top,
    bottom
  } = opts;
  const root = getElementRoot(baseEl);
  const wrapperEl = root.querySelector(".toast-wrapper");
  wrapperAnimation.addElement(wrapperEl);
  switch (position) {
    case "top":
      wrapperEl.style.setProperty("transform", `translateY(${top})`);
      wrapperAnimation.fromTo("opacity", 0.01, 1);
      break;
    case "middle":
      const topPosition = getOffsetForMiddlePosition(baseEl.clientHeight, wrapperEl.clientHeight);
      wrapperEl.style.top = `${topPosition}px`;
      wrapperAnimation.fromTo("opacity", 0.01, 1);
      break;
    default:
      wrapperEl.style.setProperty("transform", `translateY(${bottom})`);
      wrapperAnimation.fromTo("opacity", 0.01, 1);
      break;
  }
  return baseAnimation.easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation(wrapperAnimation);
};
var mdLeaveAnimation = (baseEl) => {
  const baseAnimation = createAnimation();
  const wrapperAnimation = createAnimation();
  const root = getElementRoot(baseEl);
  const wrapperEl = root.querySelector(".toast-wrapper");
  wrapperAnimation.addElement(wrapperEl).fromTo("opacity", 0.99, 0);
  return baseAnimation.easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(wrapperAnimation);
};
var createSwipeToDismissGesture = (el, toastPosition, onDismiss) => {
  const wrapperEl = getElementRoot(el).querySelector(".toast-wrapper");
  const hostElHeight = el.clientHeight;
  const wrapperElBox = wrapperEl.getBoundingClientRect();
  let MAX_SWIPE_DISTANCE = 0;
  const DISMISS_THRESHOLD = 0.5;
  const STEP_OFFSET = el.position === "middle" ? 0.5 : 0;
  const INVERSION_FACTOR = el.position === "top" ? -1 : 1;
  const topPosition = getOffsetForMiddlePosition(hostElHeight, wrapperElBox.height);
  const SWIPE_UP_DOWN_KEYFRAMES = [{
    offset: 0,
    transform: `translateY(-${topPosition + wrapperElBox.height}px)`
  }, {
    offset: 0.5,
    transform: `translateY(0px)`
  }, {
    offset: 1,
    transform: `translateY(${topPosition + wrapperElBox.height}px)`
  }];
  const swipeAnimation = createAnimation("toast-swipe-to-dismiss-animation").addElement(wrapperEl).duration(100);
  switch (el.position) {
    case "middle":
      MAX_SWIPE_DISTANCE = hostElHeight + wrapperElBox.height;
      swipeAnimation.keyframes(SWIPE_UP_DOWN_KEYFRAMES);
      swipeAnimation.progressStart(true, 0.5);
      break;
    case "top":
      MAX_SWIPE_DISTANCE = wrapperElBox.bottom;
      swipeAnimation.keyframes([{
        offset: 0,
        transform: `translateY(${toastPosition.top})`
      }, {
        offset: 1,
        transform: "translateY(-100%)"
      }]);
      swipeAnimation.progressStart(true, 0);
      break;
    case "bottom":
    default:
      MAX_SWIPE_DISTANCE = hostElHeight - wrapperElBox.top;
      swipeAnimation.keyframes([{
        offset: 0,
        transform: `translateY(${toastPosition.bottom})`
      }, {
        offset: 1,
        transform: "translateY(100%)"
      }]);
      swipeAnimation.progressStart(true, 0);
      break;
  }
  const computeStep = (delta) => {
    return delta * INVERSION_FACTOR / MAX_SWIPE_DISTANCE;
  };
  const onMove = (detail) => {
    const step = STEP_OFFSET + computeStep(detail.deltaY);
    swipeAnimation.progressStep(step);
  };
  const onEnd = (detail) => {
    const velocity = detail.velocityY;
    const threshold = (detail.deltaY + velocity * 1e3) / MAX_SWIPE_DISTANCE * INVERSION_FACTOR;
    gesture.enable(false);
    let shouldDismiss = true;
    let playTo = 1;
    let step = 0;
    let remainingDistance = 0;
    if (el.position === "middle") {
      shouldDismiss = threshold >= DISMISS_THRESHOLD / 2 || threshold <= -0.5 / 2;
      playTo = 1;
      step = 0;
      const wrapperElBox2 = wrapperEl.getBoundingClientRect();
      const startOffset = wrapperElBox2.top - topPosition;
      const startPosition = `${startOffset}px`;
      const offsetFactor = detail.deltaY <= 0 ? -1 : 1;
      const endOffset = (topPosition + wrapperElBox2.height) * offsetFactor;
      const endPosition = shouldDismiss ? `${endOffset}px` : "0px";
      const KEYFRAMES = [{
        offset: 0,
        transform: `translateY(${startPosition})`
      }, {
        offset: 1,
        transform: `translateY(${endPosition})`
      }];
      swipeAnimation.keyframes(KEYFRAMES);
      remainingDistance = endOffset - startOffset;
    } else {
      shouldDismiss = threshold >= DISMISS_THRESHOLD;
      playTo = shouldDismiss ? 1 : 0;
      step = computeStep(detail.deltaY);
      const remainingStepAmount = shouldDismiss ? 1 - step : step;
      remainingDistance = remainingStepAmount * MAX_SWIPE_DISTANCE;
    }
    const duration = Math.min(Math.abs(remainingDistance) / Math.abs(velocity), 200);
    swipeAnimation.onFinish(() => {
      if (shouldDismiss) {
        onDismiss();
        swipeAnimation.destroy();
      } else {
        if (el.position === "middle") {
          swipeAnimation.keyframes(SWIPE_UP_DOWN_KEYFRAMES).progressStart(true, 0.5);
        } else {
          swipeAnimation.progressStart(true, 0);
        }
        gesture.enable(true);
      }
    }, {
      oneTimeCallback: true
    }).progressEnd(playTo, step, duration);
  };
  const gesture = createGesture({
    el: wrapperEl,
    gestureName: "toast-swipe-to-dismiss",
    gesturePriority: OVERLAY_GESTURE_PRIORITY,
    /**
     * Toast only supports vertical swipes.
     * This needs to be updated if we later
     * support horizontal swipes.
     */
    direction: "y",
    onMove,
    onEnd
  });
  return gesture;
};
var toastIosCss = ":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:normal;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}:host{inset-inline-start:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);pointer-events:auto}.toast-wrapper{inset-inline-start:var(--start);inset-inline-end:var(--end)}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,  -100%,  0);transform:translate3d(0,  -100%,  0);top:0}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);bottom:0}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-layout-stacked .toast-container{-ms-flex-wrap:wrap;flex-wrap:wrap}.toast-layout-baseline .toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-icon{-webkit-margin-start:16px;margin-inline-start:16px}.toast-content{min-width:0}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-layout-stacked .toast-button-group{-ms-flex-pack:end;justify-content:end;width:100%}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon,.toast-button-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-50, var(--ion-background-color-step-50, #f2f2f2));--border-radius:14px;--button-color:var(--ion-color-primary, #0054e9);--color:var(--ion-color-step-850, var(--ion-text-color-step-150, #262626));--max-width:700px;--max-height:478px;--start:10px;--end:10px;font-size:clamp(14px, 0.875rem, 43.4px)}.toast-wrapper{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;z-index:10}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.toast-translucent) .toast-wrapper{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}:host(.ion-color.toast-translucent) .toast-wrapper{background:rgba(var(--ion-color-base-rgb), 0.8)}}.toast-wrapper.toast-middle{opacity:0.01}.toast-content{-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px;padding-top:15px;padding-bottom:15px}.toast-header{margin-bottom:2px;font-weight:500}.toast-button{-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px;padding-top:10px;padding-bottom:10px;min-height:44px;-webkit-transition:background-color, opacity 100ms linear;transition:background-color, opacity 100ms linear;border:0;background-color:transparent;font-family:var(--ion-font-family);font-size:clamp(17px, 1.0625rem, 21.998px);font-weight:500;overflow:hidden}.toast-button.ion-activated{opacity:0.4}@media (any-hover: hover){.toast-button:hover{opacity:0.6}}";
var toastMdCss = ":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:normal;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}:host{inset-inline-start:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);pointer-events:auto}.toast-wrapper{inset-inline-start:var(--start);inset-inline-end:var(--end)}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,  -100%,  0);transform:translate3d(0,  -100%,  0);top:0}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);bottom:0}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-layout-stacked .toast-container{-ms-flex-wrap:wrap;flex-wrap:wrap}.toast-layout-baseline .toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-icon{-webkit-margin-start:16px;margin-inline-start:16px}.toast-content{min-width:0}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-layout-stacked .toast-button-group{-ms-flex-pack:end;justify-content:end;width:100%}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon,.toast-button-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-800, var(--ion-background-color-step-800, #333333));--border-radius:4px;--box-shadow:0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);--button-color:var(--ion-color-primary, #0054e9);--color:var(--ion-color-step-50, var(--ion-text-color-step-950, #f2f2f2));--max-width:700px;--start:8px;--end:8px;font-size:0.875rem}.toast-wrapper{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;opacity:0.01;z-index:10}.toast-content{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:14px;padding-bottom:14px}.toast-header{margin-bottom:2px;font-weight:500;line-height:1.25rem}.toast-message{line-height:1.25rem}.toast-layout-baseline .toast-button-group-start{-webkit-margin-start:8px;margin-inline-start:8px}.toast-layout-stacked .toast-button-group-start{-webkit-margin-end:8px;margin-inline-end:8px;margin-top:8px}.toast-layout-baseline .toast-button-group-end{-webkit-margin-end:8px;margin-inline-end:8px}.toast-layout-stacked .toast-button-group-end{-webkit-margin-end:8px;margin-inline-end:8px;margin-bottom:8px}.toast-button{-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;font-family:var(--ion-font-family);font-size:0.875rem;font-weight:500;letter-spacing:0.84px;text-transform:uppercase;overflow:hidden}.toast-button-cancel{color:var(--ion-color-step-100, var(--ion-text-color-step-900, #e6e6e6))}.toast-button-icon-only{border-radius:50%;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px;padding-top:9px;padding-bottom:9px;width:36px;height:36px}@media (any-hover: hover){.toast-button:hover{background-color:rgba(var(--ion-color-primary-rgb, 0, 84, 233), 0.08)}.toast-button-cancel:hover{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.08)}}";
var Toast = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.didPresent = createEvent(this, "ionToastDidPresent", 7);
    this.willPresent = createEvent(this, "ionToastWillPresent", 7);
    this.willDismiss = createEvent(this, "ionToastWillDismiss", 7);
    this.didDismiss = createEvent(this, "ionToastDidDismiss", 7);
    this.didPresentShorthand = createEvent(this, "didPresent", 7);
    this.willPresentShorthand = createEvent(this, "willPresent", 7);
    this.willDismissShorthand = createEvent(this, "willDismiss", 7);
    this.didDismissShorthand = createEvent(this, "didDismiss", 7);
    this.delegateController = createDelegateController(this);
    this.lockController = createLockController();
    this.triggerController = createTriggerController();
    this.customHTMLEnabled = config.get("innerHTMLTemplatesEnabled", ENABLE_HTML_CONTENT_DEFAULT);
    this.presented = false;
    this.revealContentToScreenReader = false;
    this.hasController = false;
    this.duration = config.getNumber("toastDuration", 0);
    this.layout = "baseline";
    this.keyboardClose = false;
    this.position = "bottom";
    this.translucent = false;
    this.animated = true;
    this.isOpen = false;
    this.dispatchCancelHandler = (ev) => {
      const role = ev.detail.role;
      if (isCancel(role)) {
        const cancelButton = this.getButtons().find((b) => b.role === "cancel");
        this.callButtonHandler(cancelButton);
      }
    };
    this.createSwipeGesture = (toastPosition) => {
      const gesture = this.gesture = createSwipeToDismissGesture(this.el, toastPosition, () => {
        this.dismiss(void 0, GESTURE);
      });
      gesture.enable(true);
    };
    this.destroySwipeGesture = () => {
      const {
        gesture
      } = this;
      if (gesture === void 0) {
        return;
      }
      gesture.destroy();
      this.gesture = void 0;
    };
    this.prefersSwipeGesture = () => {
      const {
        swipeGesture
      } = this;
      return swipeGesture === "vertical";
    };
  }
  swipeGestureChanged() {
    this.destroySwipeGesture();
    if (this.presented && this.prefersSwipeGesture()) {
      this.createSwipeGesture(this.lastPresentedPosition);
    }
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
  disconnectedCallback() {
    this.triggerController.removeClickListener();
  }
  componentWillLoad() {
    var _a;
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
  /**
   * Present the toast overlay after it has been created.
   */
  present() {
    return __async(this, null, function* () {
      const unlock = yield this.lockController.lock();
      yield this.delegateController.attachViewToDom();
      const {
        el,
        position
      } = this;
      const anchor = this.getAnchorElement();
      const animationPosition = getAnimationPosition(position, anchor, getIonMode(this), el);
      this.lastPresentedPosition = animationPosition;
      yield present(this, "toastEnter", iosEnterAnimation, mdEnterAnimation, {
        position,
        top: animationPosition.top,
        bottom: animationPosition.bottom
      });
      this.revealContentToScreenReader = true;
      if (this.duration > 0) {
        this.durationTimeout = setTimeout(() => this.dismiss(void 0, "timeout"), this.duration);
      }
      if (this.prefersSwipeGesture()) {
        this.createSwipeGesture(animationPosition);
      }
      unlock();
    });
  }
  /**
   * Dismiss the toast overlay after it has been presented.
   * This is a no-op if the overlay has not been presented yet. If you want
   * to remove an overlay from the DOM that was never presented, use the
   * [remove](https://developer.mozilla.org/en-US/docs/Web/API/Element/remove) method.
   *
   * @param data Any data to emit in the dismiss events.
   * @param role The role of the element that is dismissing the toast.
   * This can be useful in a button handler for determining which button was
   * clicked to dismiss the toast.
   * Some examples include: `"cancel"`, `"destructive"`, `"selected"`, and `"backdrop"`.
   */
  dismiss(data, role) {
    return __async(this, null, function* () {
      var _a, _b;
      const unlock = yield this.lockController.lock();
      const {
        durationTimeout,
        position,
        lastPresentedPosition
      } = this;
      if (durationTimeout) {
        clearTimeout(durationTimeout);
      }
      const dismissed = yield dismiss(
        this,
        data,
        role,
        "toastLeave",
        iosLeaveAnimation,
        mdLeaveAnimation,
        /**
         * Fetch the cached position that was calculated back in the present
         * animation. We always want to animate the dismiss from the same
         * position the present stopped at, so the animation looks continuous.
         */
        {
          position,
          top: (_a = lastPresentedPosition === null || lastPresentedPosition === void 0 ? void 0 : lastPresentedPosition.top) !== null && _a !== void 0 ? _a : "",
          bottom: (_b = lastPresentedPosition === null || lastPresentedPosition === void 0 ? void 0 : lastPresentedPosition.bottom) !== null && _b !== void 0 ? _b : ""
        }
      );
      if (dismissed) {
        this.delegateController.removeViewFromDom();
        this.revealContentToScreenReader = false;
      }
      this.lastPresentedPosition = void 0;
      this.destroySwipeGesture();
      unlock();
      return dismissed;
    });
  }
  /**
   * Returns a promise that resolves when the toast did dismiss.
   */
  onDidDismiss() {
    return eventMethod(this.el, "ionToastDidDismiss");
  }
  /**
   * Returns a promise that resolves when the toast will dismiss.
   */
  onWillDismiss() {
    return eventMethod(this.el, "ionToastWillDismiss");
  }
  getButtons() {
    const buttons = this.buttons ? this.buttons.map((b) => {
      return typeof b === "string" ? {
        text: b
      } : b;
    }) : [];
    return buttons;
  }
  /**
   * Returns the element specified by the positionAnchor prop,
   * or undefined if prop's value is an ID string and the element
   * is not found in the DOM.
   */
  getAnchorElement() {
    const {
      position,
      positionAnchor,
      el
    } = this;
    if (positionAnchor === void 0) {
      return;
    }
    if (position === "middle" && positionAnchor !== void 0) {
      printIonWarning('[ion-toast] - The positionAnchor property is ignored when using position="middle".', this.el);
      return void 0;
    }
    if (typeof positionAnchor === "string") {
      const foundEl = document.getElementById(positionAnchor);
      if (foundEl === null) {
        printIonWarning(`[ion-toast] - An anchor element with an ID of "${positionAnchor}" was not found in the DOM.`, el);
        return void 0;
      }
      return foundEl;
    }
    if (positionAnchor instanceof HTMLElement) {
      return positionAnchor;
    }
    printIonWarning("[ion-toast] - Invalid positionAnchor value:", positionAnchor, el);
    return void 0;
  }
  buttonClick(button) {
    return __async(this, null, function* () {
      const role = button.role;
      if (isCancel(role)) {
        return this.dismiss(void 0, role);
      }
      const shouldDismiss = yield this.callButtonHandler(button);
      if (shouldDismiss) {
        return this.dismiss(void 0, role);
      }
      return Promise.resolve();
    });
  }
  callButtonHandler(button) {
    return __async(this, null, function* () {
      if (button === null || button === void 0 ? void 0 : button.handler) {
        try {
          const rtn = yield safeCall(button.handler);
          if (rtn === false) {
            return false;
          }
        } catch (e) {
          printIonError("[ion-toast] - Exception in callButtonHandler:", e);
        }
      }
      return true;
    });
  }
  renderButtons(buttons, side) {
    if (buttons.length === 0) {
      return;
    }
    const mode = getIonMode(this);
    const buttonGroupsClasses = {
      "toast-button-group": true,
      [`toast-button-group-${side}`]: true
    };
    return h("div", {
      class: buttonGroupsClasses
    }, buttons.map((b) => h("button", Object.assign({}, b.htmlAttributes, {
      type: "button",
      class: buttonClass(b),
      tabIndex: 0,
      onClick: () => this.buttonClick(b),
      part: buttonPart(b)
    }), h("div", {
      class: "toast-button-inner"
    }, b.icon && h("ion-icon", {
      "aria-hidden": "true",
      icon: b.icon,
      slot: b.text === void 0 ? "icon-only" : void 0,
      class: "toast-button-icon"
    }), b.text), mode === "md" && h("ion-ripple-effect", {
      type: b.icon !== void 0 && b.text === void 0 ? "unbounded" : "bounded"
    }))));
  }
  /**
   * Render the `message` property.
   * @param key - A key to give the element a stable identity. This is used to improve compatibility with screen readers.
   * @param ariaHidden - If "true" then content will be hidden from screen readers.
   */
  renderToastMessage(key, ariaHidden = null) {
    const {
      customHTMLEnabled,
      message
    } = this;
    if (customHTMLEnabled) {
      return h("div", {
        key,
        "aria-hidden": ariaHidden,
        class: "toast-message",
        part: "message",
        innerHTML: sanitizeDOMString(message)
      });
    }
    return h("div", {
      key,
      "aria-hidden": ariaHidden,
      class: "toast-message",
      part: "message"
    }, message);
  }
  /**
   * Render the `header` property.
   * @param key - A key to give the element a stable identity. This is used to improve compatibility with screen readers.
   * @param ariaHidden - If "true" then content will be hidden from screen readers.
   */
  renderHeader(key, ariaHidden = null) {
    return h("div", {
      key,
      class: "toast-header",
      "aria-hidden": ariaHidden,
      part: "header"
    }, this.header);
  }
  render() {
    const {
      layout,
      el,
      revealContentToScreenReader,
      header,
      message
    } = this;
    const allButtons = this.getButtons();
    const startButtons = allButtons.filter((b) => b.side === "start");
    const endButtons = allButtons.filter((b) => b.side !== "start");
    const mode = getIonMode(this);
    const wrapperClass = {
      "toast-wrapper": true,
      [`toast-${this.position}`]: true,
      [`toast-layout-${layout}`]: true
    };
    if (layout === "stacked" && startButtons.length > 0 && endButtons.length > 0) {
      printIonWarning("[ion-toast] - This toast is using start and end buttons with the stacked toast layout. We recommend following the best practice of using either start or end buttons with the stacked toast layout.", el);
    }
    return h(Host, Object.assign({
      key: "d1ecd90c87700aad4685e230cdd430aa286b8791",
      tabindex: "-1"
    }, this.htmlAttributes, {
      style: {
        zIndex: `${6e4 + this.overlayIndex}`
      },
      class: createColorClasses(this.color, Object.assign(Object.assign({
        [mode]: true
      }, getClassMap(this.cssClass)), {
        "overlay-hidden": true,
        "toast-translucent": this.translucent
      })),
      onIonToastWillDismiss: this.dispatchCancelHandler
    }), h("div", {
      key: "4bfc863417324de69e222054d5cf9c452038b41e",
      class: wrapperClass
    }, h("div", {
      key: "3417940afec0392e81b7d54c7cb00f3ab6c30d47",
      class: "toast-container",
      part: "container"
    }, this.renderButtons(startButtons, "start"), this.icon !== void 0 && h("ion-icon", {
      key: "6bf878fbc85c01e1e5faa9d97d46255a6511a952",
      class: "toast-icon",
      part: "icon",
      icon: this.icon,
      lazy: false,
      "aria-hidden": "true"
    }), h("div", {
      key: "54b500348a9c37660c3aff37436d9188e4374947",
      class: "toast-content",
      role: "status",
      "aria-atomic": "true",
      "aria-live": "polite"
    }, !revealContentToScreenReader && header !== void 0 && this.renderHeader("oldHeader", "true"), !revealContentToScreenReader && message !== void 0 && this.renderToastMessage("oldMessage", "true"), revealContentToScreenReader && header !== void 0 && this.renderHeader("header"), revealContentToScreenReader && message !== void 0 && this.renderToastMessage("header")), this.renderButtons(endButtons, "end"))));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "swipeGesture": ["swipeGestureChanged"],
      "isOpen": ["onIsOpenChange"],
      "trigger": ["triggerChanged"]
    };
  }
};
var buttonClass = (button) => {
  return {
    "toast-button": true,
    "toast-button-icon-only": button.icon !== void 0 && button.text === void 0,
    [`toast-button-${button.role}`]: button.role !== void 0,
    "ion-focusable": true,
    "ion-activatable": true
  };
};
var buttonPart = (button) => {
  return isCancel(button.role) ? "button cancel" : "button";
};
Toast.style = {
  ios: toastIosCss,
  md: toastMdCss
};
export {
  Toast as ion_toast
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-toast.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tdG9hc3QuZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydCB7IGYgYXMgcHJpbnRJb25XYXJuaW5nLCByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgY3JlYXRlRXZlbnQsIGUgYXMgY29uZmlnLCBqIGFzIHByaW50SW9uRXJyb3IsIGgsIGQgYXMgSG9zdCwgZyBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9pbmRleC00RHhZNl9nRy5qcyc7XG5pbXBvcnQgeyBFIGFzIEVOQUJMRV9IVE1MX0NPTlRFTlRfREVGQVVMVCwgYSBhcyBzYW5pdGl6ZURPTVN0cmluZyB9IGZyb20gJy4vY29uZmlnLUR4XzZ3UElKLmpzJztcbmltcG9ydCB7IGcgYXMgZ2V0RWxlbWVudFJvb3QsIHIgYXMgcmFmIH0gZnJvbSAnLi9oZWxwZXJzLThLU1FRR1F5LmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlTG9ja0NvbnRyb2xsZXIgfSBmcm9tICcuL2xvY2stY29udHJvbGxlci1CLWhpclQwdi5qcyc7XG5pbXBvcnQgeyBPIGFzIE9WRVJMQVlfR0VTVFVSRV9QUklPUklUWSwgZCBhcyBjcmVhdGVEZWxlZ2F0ZUNvbnRyb2xsZXIsIGUgYXMgY3JlYXRlVHJpZ2dlckNvbnRyb2xsZXIsIGkgYXMgaXNDYW5jZWwsIGogYXMgcHJlcGFyZU92ZXJsYXksIGsgYXMgc2V0T3ZlcmxheUlkLCBmIGFzIHByZXNlbnQsIGcgYXMgZGlzbWlzcywgaCBhcyBldmVudE1ldGhvZCwgcyBhcyBzYWZlQ2FsbCwgRyBhcyBHRVNUVVJFIH0gZnJvbSAnLi9vdmVybGF5cy1aWF80LXRfci5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZUNvbG9yQ2xhc3NlcywgZyBhcyBnZXRDbGFzc01hcCB9IGZyb20gJy4vdGhlbWUtRGlWSnlxbFguanMnO1xuaW1wb3J0IHsgYiBhcyBnZXRJb25Nb2RlIH0gZnJvbSAnLi9pb25pYy1nbG9iYWwtQ1RTeXVmaEYuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVBbmltYXRpb24gfSBmcm9tICcuL2FuaW1hdGlvbi1CdmhBdGdjYS5qcyc7XG5pbXBvcnQgeyB3IGFzIHdpbiB9IGZyb20gJy4vaW5kZXgtWmpQNENqZVouanMnO1xuaW1wb3J0IHsgY3JlYXRlR2VzdHVyZSB9IGZyb20gJy4vaW5kZXgtQ2ZnQkYxU0UuanMnO1xuaW1wb3J0ICcuL2hhcmR3YXJlLWJhY2stYnV0dG9uLURoYmQtMjNILmpzJztcbmltcG9ydCAnLi9mcmFtZXdvcmstZGVsZWdhdGUtQkxFQmdIMDYuanMnO1xuaW1wb3J0ICcuL2dlc3R1cmUtY29udHJvbGxlci1CVEVPczFhdC5qcyc7XG5cbi8qKlxuICogQ2FsY3VsYXRlIHRoZSBDU1MgdG9wIGFuZCBib3R0b20gcG9zaXRpb24gb2YgdGhlIHRvYXN0LCB0byBiZSB1c2VkXG4gKiBhcyBzdGFydGluZyBwb2ludHMgZm9yIHRoZSBhbmltYXRpb24ga2V5ZnJhbWVzLlxuICpcbiAqIFRoZSBkZWZhdWx0IGFuaW1hdGlvbnMgZm9yIGJvdGggTUQgYW5kIGlPU1xuICogdXNlIHRyYW5zbGF0ZVksIHdoaWNoIGNhbGN1bGF0ZXMgZnJvbSB0aGVcbiAqIHRvcCBlZGdlIG9mIHRoZSBzY3JlZW4uIFRoaXMgYmVoYXZpb3IgaW1wYWN0c1xuICogaG93IHdlIGNvbXB1dGUgdGhlIG9mZnNldCB3aGVuIGEgdG9hc3QgaGFzXG4gKiBwb3NpdGlvbj0nYm90dG9tJyBzaW5jZSB3ZSBuZWVkIHRvIGNhbGN1bGF0ZSBmcm9tXG4gKiB0aGUgYm90dG9tIGVkZ2Ugb2YgdGhlIHNjcmVlbiBpbnN0ZWFkLlxuICpcbiAqIEBwYXJhbSBwb3NpdGlvbiBUaGUgdmFsdWUgb2YgdGhlIHRvYXN0J3MgcG9zaXRpb24gcHJvcC5cbiAqIEBwYXJhbSBwb3NpdGlvbkFuY2hvciBUaGUgZWxlbWVudCB0aGUgdG9hc3Qgc2hvdWxkIGJlIGFuY2hvcmVkIHRvLFxuICogaWYgYXBwbGljYWJsZS5cbiAqIEBwYXJhbSBtb2RlIFRoZSB0b2FzdCBjb21wb25lbnQncyBtb2RlIChtZCwgaW9zLCBldGMpLlxuICogQHBhcmFtIHRvYXN0IEEgcmVmZXJlbmNlIHRvIHRoZSB0b2FzdCBlbGVtZW50IGl0c2VsZi5cbiAqL1xuZnVuY3Rpb24gZ2V0QW5pbWF0aW9uUG9zaXRpb24ocG9zaXRpb24sIHBvc2l0aW9uQW5jaG9yLCBtb2RlLCB0b2FzdCkge1xuICAvKipcbiAgICogU3RhcnQgd2l0aCBhIHByZWRlZmluZWQgb2Zmc2V0IGZyb20gdGhlIGVkZ2UgdGhlIHRvYXN0IHdpbGwgYmVcbiAgICogcG9zaXRpb25lZCByZWxhdGl2ZSB0bywgd2hldGhlciBvbiB0aGUgc2NyZWVuIG9yIGFuY2hvciBlbGVtZW50LlxuICAgKi9cbiAgbGV0IG9mZnNldDtcbiAgaWYgKG1vZGUgPT09ICdtZCcpIHtcbiAgICBvZmZzZXQgPSBwb3NpdGlvbiA9PT0gJ3RvcCcgPyA4IDogLTg7XG4gIH0gZWxzZSB7XG4gICAgb2Zmc2V0ID0gcG9zaXRpb24gPT09ICd0b3AnID8gMTAgOiAtMTA7XG4gIH1cbiAgLyoqXG4gICAqIElmIHBvc2l0aW9uQW5jaG9yIGlzIGRlZmluZWQsIGFkZCBpbiB0aGUgZGlzdGFuY2UgZnJvbSB0aGUgdGFyZ2V0XG4gICAqIHNjcmVlbiBlZGdlIHRvIHRoZSB0YXJnZXQgYW5jaG9yIGVkZ2UuIEZvciBwb3NpdGlvbj1cInRvcFwiLCB0aGVcbiAgICogYm90dG9tIGFuY2hvciBlZGdlIGlzIHRhcmdldGVkLiBGb3IgcG9zaXRpb249XCJib3R0b21cIiwgdGhlIHRvcFxuICAgKiBhbmNob3IgZWRnZSBpcyB0YXJnZXRlZC5cbiAgICovXG4gIGlmIChwb3NpdGlvbkFuY2hvciAmJiB3aW4pIHtcbiAgICB3YXJuSWZBbmNob3JJc0hpZGRlbihwb3NpdGlvbkFuY2hvciwgdG9hc3QpO1xuICAgIGNvbnN0IGJveCA9IHBvc2l0aW9uQW5jaG9yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmIChwb3NpdGlvbiA9PT0gJ3RvcCcpIHtcbiAgICAgIG9mZnNldCArPSBib3guYm90dG9tO1xuICAgIH0gZWxzZSBpZiAocG9zaXRpb24gPT09ICdib3R0b20nKSB7XG4gICAgICAvKipcbiAgICAgICAqIEp1c3QgYm94LnRvcCBpcyB0aGUgZGlzdGFuY2UgZnJvbSB0aGUgdG9wIGVkZ2Ugb2YgdGhlIHNjcmVlblxuICAgICAgICogdG8gdGhlIHRvcCBlZGdlIG9mIHRoZSBhbmNob3IuIFdlIHdhbnQgdG8gY2FsY3VsYXRlIGZyb20gdGhlXG4gICAgICAgKiBib3R0b20gZWRnZSBvZiB0aGUgc2NyZWVuIGluc3RlYWQuXG4gICAgICAgKi9cbiAgICAgIG9mZnNldCAtPSB3aW4uaW5uZXJIZWlnaHQgLSBib3gudG9wO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBXZSBkb24ndCBpbmNsdWRlIHNhZmUgYXJlYSBoZXJlIGJlY2F1c2UgdGhhdCBzaG91bGQgYWxyZWFkeSBiZVxuICAgICAqIGFjY291bnRlZCBmb3Igd2hlbiBjaGVja2luZyB0aGUgcG9zaXRpb24gb2YgdGhlIGFuY2hvci5cbiAgICAgKi9cbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiBgJHtvZmZzZXR9cHhgLFxuICAgICAgYm90dG9tOiBgJHtvZmZzZXR9cHhgXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiBgY2FsYygke29mZnNldH1weCArIHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wLCAwcHgpKWAsXG4gICAgICBib3R0b206IGBjYWxjKCR7b2Zmc2V0fXB4IC0gdmFyKC0taW9uLXNhZmUtYXJlYS1ib3R0b20sIDBweCkpYFxuICAgIH07XG4gIH1cbn1cbi8qKlxuICogSWYgdGhlIGFuY2hvciBlbGVtZW50IGlzIGhpZGRlbiwgZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAqIHdpbGwgcmV0dXJuIGFsbCAwcyBmb3IgaXQsIHdoaWNoIGNhbiBjYXVzZSB1bmV4cGVjdGVkXG4gKiByZXN1bHRzIGluIHRoZSBwb3NpdGlvbiBjYWxjdWxhdGlvbiB3aGVuIGFuaW1hdGluZy5cbiAqL1xuZnVuY3Rpb24gd2FybklmQW5jaG9ySXNIaWRkZW4ocG9zaXRpb25BbmNob3IsIHRvYXN0KSB7XG4gIGlmIChwb3NpdGlvbkFuY2hvci5vZmZzZXRQYXJlbnQgPT09IG51bGwpIHtcbiAgICBwcmludElvbldhcm5pbmcoJ1tpb24tdG9hc3RdIC0gVGhlIHBvc2l0aW9uQW5jaG9yIGVsZW1lbnQgZm9yIGlvbi10b2FzdCB3YXMgZm91bmQgaW4gdGhlIERPTSwgYnV0IGFwcGVhcnMgdG8gYmUgaGlkZGVuLiBUaGlzIG1heSBsZWFkIHRvIHVuZXhwZWN0ZWQgcG9zaXRpb25pbmcgb2YgdGhlIHRvYXN0LicsIHRvYXN0KTtcbiAgfVxufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSB0b3Agb2Zmc2V0IHJlcXVpcmVkIHRvIHBsYWNlXG4gKiB0aGUgdG9hc3QgaW4gdGhlIG1pZGRsZSBvZiB0aGUgc2NyZWVuLlxuICogT25seSBuZWVkZWQgd2hlbiBwb3NpdGlvbj1cInRvYXN0XCIuXG4gKiBAcGFyYW0gdG9hc3RIZWlnaHQgLSBUaGUgaGVpZ2h0IG9mIHRoZSBpb24tdG9hc3QgZWxlbWVudFxuICogQHBhcmFtIHdyYXBwZXJIZWlnaHQgLSBUaGUgaGVpZ2h0IG9mIHRoZSAudG9hc3Qtd3JhcHBlciBlbGVtZW50XG4gKiBpbnNpZGUgdGhlIHRvYXN0J3Mgc2hhZG93IHJvb3QuXG4gKi9cbmNvbnN0IGdldE9mZnNldEZvck1pZGRsZVBvc2l0aW9uID0gKHRvYXN0SGVpZ2h0LCB3cmFwcGVySGVpZ2h0KSA9PiB7XG4gIHJldHVybiBNYXRoLmZsb29yKHRvYXN0SGVpZ2h0IC8gMiAtIHdyYXBwZXJIZWlnaHQgLyAyKTtcbn07XG5cbi8qKlxuICogaU9TIFRvYXN0IEVudGVyIEFuaW1hdGlvblxuICovXG5jb25zdCBpb3NFbnRlckFuaW1hdGlvbiA9IChiYXNlRWwsIG9wdHMpID0+IHtcbiAgY29uc3QgYmFzZUFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICBjb25zdCB3cmFwcGVyQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gIGNvbnN0IHtcbiAgICBwb3NpdGlvbixcbiAgICB0b3AsXG4gICAgYm90dG9tXG4gIH0gPSBvcHRzO1xuICBjb25zdCByb290ID0gZ2V0RWxlbWVudFJvb3QoYmFzZUVsKTtcbiAgY29uc3Qgd3JhcHBlckVsID0gcm9vdC5xdWVyeVNlbGVjdG9yKCcudG9hc3Qtd3JhcHBlcicpO1xuICB3cmFwcGVyQW5pbWF0aW9uLmFkZEVsZW1lbnQod3JhcHBlckVsKTtcbiAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgIGNhc2UgJ3RvcCc6XG4gICAgICB3cmFwcGVyQW5pbWF0aW9uLmZyb21UbygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVkoLTEwMCUpJywgYHRyYW5zbGF0ZVkoJHt0b3B9KWApO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbWlkZGxlJzpcbiAgICAgIGNvbnN0IHRvcFBvc2l0aW9uID0gZ2V0T2Zmc2V0Rm9yTWlkZGxlUG9zaXRpb24oYmFzZUVsLmNsaWVudEhlaWdodCwgd3JhcHBlckVsLmNsaWVudEhlaWdodCk7XG4gICAgICB3cmFwcGVyRWwuc3R5bGUudG9wID0gYCR7dG9wUG9zaXRpb259cHhgO1xuICAgICAgd3JhcHBlckFuaW1hdGlvbi5mcm9tVG8oJ29wYWNpdHknLCAwLjAxLCAxKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB3cmFwcGVyQW5pbWF0aW9uLmZyb21UbygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVkoMTAwJSknLCBgdHJhbnNsYXRlWSgke2JvdHRvbX0pYCk7XG4gICAgICBicmVhaztcbiAgfVxuICByZXR1cm4gYmFzZUFuaW1hdGlvbi5lYXNpbmcoJ2N1YmljLWJlemllciguMTU1LDEuMTA1LC4yOTUsMS4xMiknKS5kdXJhdGlvbig0MDApLmFkZEFuaW1hdGlvbih3cmFwcGVyQW5pbWF0aW9uKTtcbn07XG5cbi8qKlxuICogaU9TIFRvYXN0IExlYXZlIEFuaW1hdGlvblxuICovXG5jb25zdCBpb3NMZWF2ZUFuaW1hdGlvbiA9IChiYXNlRWwsIG9wdHMpID0+IHtcbiAgY29uc3QgYmFzZUFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICBjb25zdCB3cmFwcGVyQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gIGNvbnN0IHtcbiAgICBwb3NpdGlvbixcbiAgICB0b3AsXG4gICAgYm90dG9tXG4gIH0gPSBvcHRzO1xuICBjb25zdCByb290ID0gZ2V0RWxlbWVudFJvb3QoYmFzZUVsKTtcbiAgY29uc3Qgd3JhcHBlckVsID0gcm9vdC5xdWVyeVNlbGVjdG9yKCcudG9hc3Qtd3JhcHBlcicpO1xuICB3cmFwcGVyQW5pbWF0aW9uLmFkZEVsZW1lbnQod3JhcHBlckVsKTtcbiAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgIGNhc2UgJ3RvcCc6XG4gICAgICB3cmFwcGVyQW5pbWF0aW9uLmZyb21UbygndHJhbnNmb3JtJywgYHRyYW5zbGF0ZVkoJHt0b3B9KWAsICd0cmFuc2xhdGVZKC0xMDAlKScpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbWlkZGxlJzpcbiAgICAgIHdyYXBwZXJBbmltYXRpb24uZnJvbVRvKCdvcGFjaXR5JywgMC45OSwgMCk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgd3JhcHBlckFuaW1hdGlvbi5mcm9tVG8oJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVZKCR7Ym90dG9tfSlgLCAndHJhbnNsYXRlWSgxMDAlKScpO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIGJhc2VBbmltYXRpb24uZWFzaW5nKCdjdWJpYy1iZXppZXIoLjM2LC42NiwuMDQsMSknKS5kdXJhdGlvbigzMDApLmFkZEFuaW1hdGlvbih3cmFwcGVyQW5pbWF0aW9uKTtcbn07XG5cbi8qKlxuICogTUQgVG9hc3QgRW50ZXIgQW5pbWF0aW9uXG4gKi9cbmNvbnN0IG1kRW50ZXJBbmltYXRpb24gPSAoYmFzZUVsLCBvcHRzKSA9PiB7XG4gIGNvbnN0IGJhc2VBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgY29uc3Qgd3JhcHBlckFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICBjb25zdCB7XG4gICAgcG9zaXRpb24sXG4gICAgdG9wLFxuICAgIGJvdHRvbVxuICB9ID0gb3B0cztcbiAgY29uc3Qgcm9vdCA9IGdldEVsZW1lbnRSb290KGJhc2VFbCk7XG4gIGNvbnN0IHdyYXBwZXJFbCA9IHJvb3QucXVlcnlTZWxlY3RvcignLnRvYXN0LXdyYXBwZXInKTtcbiAgd3JhcHBlckFuaW1hdGlvbi5hZGRFbGVtZW50KHdyYXBwZXJFbCk7XG4gIHN3aXRjaCAocG9zaXRpb24pIHtcbiAgICBjYXNlICd0b3AnOlxuICAgICAgd3JhcHBlckVsLnN0eWxlLnNldFByb3BlcnR5KCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlWSgke3RvcH0pYCk7XG4gICAgICB3cmFwcGVyQW5pbWF0aW9uLmZyb21Ubygnb3BhY2l0eScsIDAuMDEsIDEpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbWlkZGxlJzpcbiAgICAgIGNvbnN0IHRvcFBvc2l0aW9uID0gZ2V0T2Zmc2V0Rm9yTWlkZGxlUG9zaXRpb24oYmFzZUVsLmNsaWVudEhlaWdodCwgd3JhcHBlckVsLmNsaWVudEhlaWdodCk7XG4gICAgICB3cmFwcGVyRWwuc3R5bGUudG9wID0gYCR7dG9wUG9zaXRpb259cHhgO1xuICAgICAgd3JhcHBlckFuaW1hdGlvbi5mcm9tVG8oJ29wYWNpdHknLCAwLjAxLCAxKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB3cmFwcGVyRWwuc3R5bGUuc2V0UHJvcGVydHkoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVZKCR7Ym90dG9tfSlgKTtcbiAgICAgIHdyYXBwZXJBbmltYXRpb24uZnJvbVRvKCdvcGFjaXR5JywgMC4wMSwgMSk7XG4gICAgICBicmVhaztcbiAgfVxuICByZXR1cm4gYmFzZUFuaW1hdGlvbi5lYXNpbmcoJ2N1YmljLWJlemllciguMzYsLjY2LC4wNCwxKScpLmR1cmF0aW9uKDQwMCkuYWRkQW5pbWF0aW9uKHdyYXBwZXJBbmltYXRpb24pO1xufTtcblxuLyoqXG4gKiBtZCBUb2FzdCBMZWF2ZSBBbmltYXRpb25cbiAqL1xuY29uc3QgbWRMZWF2ZUFuaW1hdGlvbiA9IGJhc2VFbCA9PiB7XG4gIGNvbnN0IGJhc2VBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgY29uc3Qgd3JhcHBlckFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICBjb25zdCByb290ID0gZ2V0RWxlbWVudFJvb3QoYmFzZUVsKTtcbiAgY29uc3Qgd3JhcHBlckVsID0gcm9vdC5xdWVyeVNlbGVjdG9yKCcudG9hc3Qtd3JhcHBlcicpO1xuICB3cmFwcGVyQW5pbWF0aW9uLmFkZEVsZW1lbnQod3JhcHBlckVsKS5mcm9tVG8oJ29wYWNpdHknLCAwLjk5LCAwKTtcbiAgcmV0dXJuIGJhc2VBbmltYXRpb24uZWFzaW5nKCdjdWJpYy1iZXppZXIoLjM2LC42NiwuMDQsMSknKS5kdXJhdGlvbigzMDApLmFkZEFuaW1hdGlvbih3cmFwcGVyQW5pbWF0aW9uKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgZ2VzdHVyZSB0aGF0IGFsbG93cyB0aGUgVG9hc3RcbiAqIHRvIGJlIHN3aXBlZCB0byBkaXNtaXNzLlxuICogQHBhcmFtIGVsIC0gVGhlIFRvYXN0IGVsZW1lbnRcbiAqIEBwYXJhbSB0b2FzdFBvc2l0aW9uIC0gVGhlIGxhc3QgY29tcHV0ZWQgcG9zaXRpb24gb2YgdGhlIFRvYXN0LiBUaGlzIGlzIGNvbXB1dGVkIGluIHRoZSBcInByZXNlbnRcIiBtZXRob2QuXG4gKiBAcGFyYW0gb25EaXNtaXNzIC0gQSBjYWxsYmFjayB0byBmaXJlIHdoZW4gdGhlIFRvYXN0IHdhcyBzd2lwZWQgdG8gZGlzbWlzcy5cbiAqL1xuY29uc3QgY3JlYXRlU3dpcGVUb0Rpc21pc3NHZXN0dXJlID0gKGVsLCB0b2FzdFBvc2l0aW9uLCBvbkRpc21pc3MpID0+IHtcbiAgLyoqXG4gICAqIFVzZXJzIHNob3VsZCBzd2lwZSBvbiB0aGUgdmlzaWJsZSB0b2FzdCB3cmFwcGVyXG4gICAqIHJhdGhlciB0aGFuIG9uIGlvbi10b2FzdCB3aGljaCBjb3ZlcnMgdGhlIGVudGlyZSBzY3JlZW4uXG4gICAqIFdoZW4gdGVzdGluZyB0aGUgY2xhc3MgaW5zdGFuY2UgdGhlIGlubmVyIHdyYXBwZXIgd2lsbCBub3RcbiAgICogYmUgZGVmaW5lZC4gQXMgYSByZXN1bHQsIHdlIHVzZSBhIHBsYWNlaG9sZGVyIGVsZW1lbnQgaW4gdGhvc2UgZW52aXJvbm1lbnRzLlxuICAgKi9cbiAgY29uc3Qgd3JhcHBlckVsID0gZ2V0RWxlbWVudFJvb3QoZWwpLnF1ZXJ5U2VsZWN0b3IoJy50b2FzdC13cmFwcGVyJyk7XG4gIGNvbnN0IGhvc3RFbEhlaWdodCA9IGVsLmNsaWVudEhlaWdodDtcbiAgY29uc3Qgd3JhcHBlckVsQm94ID0gd3JhcHBlckVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAvKipcbiAgICogVGhlIG1heGltdW0gYW1vdW50IHRoYXRcbiAgICogdGhlIHRvYXN0IGNhbiBiZSBzd2lwZWQuIFRoaXMgc2hvdWxkXG4gICAqIGFjY291bnQgZm9yIHRoZSB3cmFwcGVyIGVsZW1lbnQncyBoZWlnaHRcbiAgICogdG9vIHNvIHRoZSB0b2FzdCBjYW4gYmUgc3dpcGVkIG9mZnNjcmVlblxuICAgKiBjb21wbGV0ZWx5LlxuICAgKi9cbiAgbGV0IE1BWF9TV0lQRV9ESVNUQU5DRSA9IDA7XG4gIC8qKlxuICAgKiBUaGUgc3RlcCB2YWx1ZSBhdCB3aGljaCBhIHRvYXN0XG4gICAqIGlzIGVsaWdpYmxlIGZvciBkaXNtaXNzaW5nIHZpYSBnZXN0dXJlLlxuICAgKi9cbiAgY29uc3QgRElTTUlTU19USFJFU0hPTEQgPSAwLjU7XG4gIC8qKlxuICAgKiBUaGUgbWlkZGxlIHBvc2l0aW9uIFRvYXN0IHN0YXJ0cyA1MCUgb2YgdGhlIHdheVxuICAgKiB0aHJvdWdoIHRoZSBhbmltYXRpb24sIHNvIHdlIG5lZWQgdG8gdXNlIHRoaXNcbiAgICogYXMgdGhlIHN0YXJ0aW5nIHBvaW50IGZvciBvdXIgc3RlcCB2YWx1ZXMuXG4gICAqL1xuICBjb25zdCBTVEVQX09GRlNFVCA9IGVsLnBvc2l0aW9uID09PSAnbWlkZGxlJyA/IDAuNSA6IDA7XG4gIC8qKlxuICAgKiBXaGVuIHRoZSBUb2FzdCBpcyBhdCB0aGUgdG9wIHVzZXJzIHdpbGwgYmVcbiAgICogc3dpcGluZyB1cC4gQXMgYSByZXN1bHQsIHRoZSBkZWx0YSB2YWx1ZXMgd2lsbCBiZVxuICAgKiBuZWdhdGl2ZSBudW1iZXJzIHdoaWNoIHdpbGwgcmVzdWx0IGluIG5lZ2F0aXZlIHN0ZXBzXG4gICAqIGFuZCB0aHJlc2hvbGRzLiBBcyBhIHJlc3VsdCwgd2UgbmVlZCB0byBtYWtlIHRob3NlIG51bWJlcnNcbiAgICogcG9zaXRpdmUuXG4gICAqL1xuICBjb25zdCBJTlZFUlNJT05fRkFDVE9SID0gZWwucG9zaXRpb24gPT09ICd0b3AnID8gLTEgOiAxO1xuICAvKipcbiAgICogVGhlIHRvcCBvZmZzZXQgdGhhdCBwbGFjZXMgdGhlXG4gICAqIHRvYXN0IGluIHRoZSBtaWRkbGUgb2YgdGhlIHNjcmVlbi5cbiAgICogT25seSBuZWVkZWQgd2hlbiBwb3NpdGlvbj1cIm1pZGRsZVwiLlxuICAgKi9cbiAgY29uc3QgdG9wUG9zaXRpb24gPSBnZXRPZmZzZXRGb3JNaWRkbGVQb3NpdGlvbihob3N0RWxIZWlnaHQsIHdyYXBwZXJFbEJveC5oZWlnaHQpO1xuICBjb25zdCBTV0lQRV9VUF9ET1dOX0tFWUZSQU1FUyA9IFt7XG4gICAgb2Zmc2V0OiAwLFxuICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoLSR7dG9wUG9zaXRpb24gKyB3cmFwcGVyRWxCb3guaGVpZ2h0fXB4KWBcbiAgfSwge1xuICAgIG9mZnNldDogMC41LFxuICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoMHB4KWBcbiAgfSwge1xuICAgIG9mZnNldDogMSxcbiAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKCR7dG9wUG9zaXRpb24gKyB3cmFwcGVyRWxCb3guaGVpZ2h0fXB4KWBcbiAgfV07XG4gIGNvbnN0IHN3aXBlQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCd0b2FzdC1zd2lwZS10by1kaXNtaXNzLWFuaW1hdGlvbicpLmFkZEVsZW1lbnQod3JhcHBlckVsKVxuICAvKipcbiAgICogVGhlIHNwZWNpZmljIHZhbHVlIGhlcmUgZG9lcyBub3QgYWN0dWFsbHlcbiAgICogbWF0dGVyLiBXZSBqdXN0IG5lZWQgdGhpcyB0byBiZSBhIHBvc2l0aXZlXG4gICAqIHZhbHVlIHNvIHRoZSBhbmltYXRpb24gZG9lcyBub3QganVtcFxuICAgKiB0byB0aGUgZW5kIHdoZW4gdGhlIHVzZXIgYmVpbmdzIHRvIGRyYWcuXG4gICAqLy5kdXJhdGlvbigxMDApO1xuICBzd2l0Y2ggKGVsLnBvc2l0aW9uKSB7XG4gICAgY2FzZSAnbWlkZGxlJzpcbiAgICAgIE1BWF9TV0lQRV9ESVNUQU5DRSA9IGhvc3RFbEhlaWdodCArIHdyYXBwZXJFbEJveC5oZWlnaHQ7XG4gICAgICBzd2lwZUFuaW1hdGlvbi5rZXlmcmFtZXMoU1dJUEVfVVBfRE9XTl9LRVlGUkFNRVMpO1xuICAgICAgLyoqXG4gICAgICAgKiBUb2FzdCBjYW4gYmUgc3dpcGVkIHVwIG9yIGRvd24gYnV0XG4gICAgICAgKiBzaG91bGQgc3RhcnQgaW4gdGhlIG1pZGRsZSBvZiB0aGUgc2NyZWVuLlxuICAgICAgICovXG4gICAgICBzd2lwZUFuaW1hdGlvbi5wcm9ncmVzc1N0YXJ0KHRydWUsIDAuNSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICd0b3AnOlxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgYm90dG9tIGVkZ2Ugb2YgdGhlIHdyYXBwZXJcbiAgICAgICAqIGluY2x1ZGVzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0b3BcbiAgICAgICAqIG9mIHRoZSBzY3JlZW4gYW5kIHRoZSB0b3Agb2YgdGhlIHdyYXBwZXJcbiAgICAgICAqIGFzIHdlbGwgYXMgdGhlIHdyYXBwZXIgaGVpZ2h0IHNvIHRoZSB3cmFwcGVyXG4gICAgICAgKiBjYW4gYmUgZHJhZ2dlZCBmdWxseSBvZmZzY3JlZW4uXG4gICAgICAgKi9cbiAgICAgIE1BWF9TV0lQRV9ESVNUQU5DRSA9IHdyYXBwZXJFbEJveC5ib3R0b207XG4gICAgICBzd2lwZUFuaW1hdGlvbi5rZXlmcmFtZXMoW3tcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKCR7dG9hc3RQb3NpdGlvbi50b3B9KWBcbiAgICAgIH0sIHtcbiAgICAgICAgb2Zmc2V0OiAxLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0xMDAlKSdcbiAgICAgIH1dKTtcbiAgICAgIHN3aXBlQW5pbWF0aW9uLnByb2dyZXNzU3RhcnQodHJ1ZSwgMCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdib3R0b20nOlxuICAgIGRlZmF1bHQ6XG4gICAgICAvKipcbiAgICAgICAqIFRoaXMgY29tcHV0ZXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlXG4gICAgICAgKiB0b3Agb2YgdGhlIHdyYXBwZXIgYW5kIHRoZSBib3R0b20gb2YgdGhlXG4gICAgICAgKiBzY3JlZW4gaW5jbHVkaW5nIHRoZSBoZWlnaHQgb2YgdGhlIHdyYXBwZXJcbiAgICAgICAqIGVsZW1lbnQgc28gaXQgY2FuIGJlIGRyYWdnZWQgZnVsbHkgb2Zmc2NyZWVuLlxuICAgICAgICovXG4gICAgICBNQVhfU1dJUEVfRElTVEFOQ0UgPSBob3N0RWxIZWlnaHQgLSB3cmFwcGVyRWxCb3gudG9wO1xuICAgICAgc3dpcGVBbmltYXRpb24ua2V5ZnJhbWVzKFt7XG4gICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgke3RvYXN0UG9zaXRpb24uYm90dG9tfSlgXG4gICAgICB9LCB7XG4gICAgICAgIG9mZnNldDogMSxcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgxMDAlKSdcbiAgICAgIH1dKTtcbiAgICAgIHN3aXBlQW5pbWF0aW9uLnByb2dyZXNzU3RhcnQodHJ1ZSwgMCk7XG4gICAgICBicmVhaztcbiAgfVxuICBjb25zdCBjb21wdXRlU3RlcCA9IGRlbHRhID0+IHtcbiAgICByZXR1cm4gZGVsdGEgKiBJTlZFUlNJT05fRkFDVE9SIC8gTUFYX1NXSVBFX0RJU1RBTkNFO1xuICB9O1xuICBjb25zdCBvbk1vdmUgPSBkZXRhaWwgPT4ge1xuICAgIGNvbnN0IHN0ZXAgPSBTVEVQX09GRlNFVCArIGNvbXB1dGVTdGVwKGRldGFpbC5kZWx0YVkpO1xuICAgIHN3aXBlQW5pbWF0aW9uLnByb2dyZXNzU3RlcChzdGVwKTtcbiAgfTtcbiAgY29uc3Qgb25FbmQgPSBkZXRhaWwgPT4ge1xuICAgIGNvbnN0IHZlbG9jaXR5ID0gZGV0YWlsLnZlbG9jaXR5WTtcbiAgICBjb25zdCB0aHJlc2hvbGQgPSAoZGV0YWlsLmRlbHRhWSArIHZlbG9jaXR5ICogMTAwMCkgLyBNQVhfU1dJUEVfRElTVEFOQ0UgKiBJTlZFUlNJT05fRkFDVE9SO1xuICAgIC8qKlxuICAgICAqIERpc2FibGUgdGhlIGdlc3R1cmUgZm9yIHRoZSByZW1haW5kZXIgb2YgdGhlIGFuaW1hdGlvbi5cbiAgICAgKiBJdCB3aWxsIGJlIHJlLWVuYWJsZWQgaWYgdGhlIHRvYXN0IGFuaW1hdGVzIGJhY2sgdG9cbiAgICAgKiBpdHMgaW5pdGlhbCBwcmVzZW50ZWQgcG9zaXRpb24uXG4gICAgICovXG4gICAgZ2VzdHVyZS5lbmFibGUoZmFsc2UpO1xuICAgIGxldCBzaG91bGREaXNtaXNzID0gdHJ1ZTtcbiAgICBsZXQgcGxheVRvID0gMTtcbiAgICBsZXQgc3RlcCA9IDA7XG4gICAgbGV0IHJlbWFpbmluZ0Rpc3RhbmNlID0gMDtcbiAgICBpZiAoZWwucG9zaXRpb24gPT09ICdtaWRkbGUnKSB7XG4gICAgICAvKipcbiAgICAgICAqIEEgbWlkZGxlIHBvc2l0aW9uZWQgVG9hc3QgYXBwZWFyc1xuICAgICAgICogaW4gdGhlIG1pZGRsZSBvZiB0aGUgc2NyZWVuIChhdCBhbmltYXRpb24gb2Zmc2V0IDAuNSkuXG4gICAgICAgKiBBcyBhIHJlc3VsdCwgdGhlIHRocmVzaG9sZCB3aWxsIGJlIGNhbGN1bGF0ZWQgcmVsYXRpdmVcbiAgICAgICAqIHRvIHRoaXMgc3RhcnRpbmcgcG9zaXRpb24uIEluIG90aGVyIHdvcmRzIGF0IGFuaW1hdGlvbiBvZmZzZXQgMC41XG4gICAgICAgKiB0aGUgdGhyZXNob2xkIHdpbGwgYmUgMC4gV2Ugd2FudCB0aGUgbWlkZGxlIFRvYXN0IHRvIGJlIGVsaWdpYmxlXG4gICAgICAgKiBmb3IgZGlzbWlzcyB3aGVuIHRoZSB1c2VyIGhhcyBzd2lwZWQgZWl0aGVyIGhhbGYgd2F5IHVwIG9yIGRvd24gdGhlXG4gICAgICAgKiBzY3JlZW4uIEFzIGEgcmVzdWx0LCB3ZSBkaXZpZGUgRElTTUlTU19USFJFU0hPTEQgaW4gaGFsZi4gV2UgYWxzb1xuICAgICAgICogY29uc2lkZXIgd2hlbiB0aGUgdGhyZXNob2xkIGlzIGEgbmVnYXRpdmUgaW4gdGhlIGV2ZW50IHRoZVxuICAgICAgICogdXNlciBkcmFncyB1cCAoc2luY2UgdGhlIGRlbHRhWSB3aWxsIGFsc28gYmUgbmVnYXRpdmUpLlxuICAgICAgICovXG4gICAgICBzaG91bGREaXNtaXNzID0gdGhyZXNob2xkID49IERJU01JU1NfVEhSRVNIT0xEIC8gMiB8fCB0aHJlc2hvbGQgPD0gLTAuNSAvIDI7XG4gICAgICAvKipcbiAgICAgICAqIFNpbmNlIHdlIGFyZSByZXBsYWNpbmcgdGhlIGtleWZyYW1lc1xuICAgICAgICogYmVsb3cgdGhlIGFuaW1hdGlvbiBhbHdheXMgc3RhcnRzIGZyb21cbiAgICAgICAqIHRoZSBiZWdpbm5pbmcgb2YgdGhlIG5ldyBrZXlmcmFtZXMuXG4gICAgICAgKiBTaW1pbGFybHksIHdlIGFyZSBhbHdheXMgcGxheWluZyB0b1xuICAgICAgICogdGhlIGVuZCBvZiB0aGUgbmV3IGtleWZyYW1lcy5cbiAgICAgICAqL1xuICAgICAgcGxheVRvID0gMTtcbiAgICAgIHN0ZXAgPSAwO1xuICAgICAgLyoqXG4gICAgICAgKiBUaGUgVG9hc3Qgc2hvdWxkIGFuaW1hdGUgZnJvbSB3aGVyZXZlciBpdHNcbiAgICAgICAqIGN1cnJlbnQgcG9zaXRpb24gaXMgdG8gdGhlIGRlc2lyZWQgZW5kIHN0YXRlLlxuICAgICAgICpcbiAgICAgICAqIFRvIGJlZ2luLCB3ZSBnZXQgdGhlIGN1cnJlbnQgcG9zaXRpb24gb2YgdGhlXG4gICAgICAgKiBUb2FzdCBmb3IgaXRzIHN0YXJ0aW5nIHN0YXRlLlxuICAgICAgICovXG4gICAgICBjb25zdCB3cmFwcGVyRWxCb3ggPSB3cmFwcGVyRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBzdGFydE9mZnNldCA9IHdyYXBwZXJFbEJveC50b3AgLSB0b3BQb3NpdGlvbjtcbiAgICAgIGNvbnN0IHN0YXJ0UG9zaXRpb24gPSBgJHtzdGFydE9mZnNldH1weGA7XG4gICAgICAvKipcbiAgICAgICAqIElmIHRoZSBkZWx0YVkgaXMgbmVnYXRpdmUgdGhlbiB0aGUgdXNlciBpcyBzd2lwaW5nXG4gICAgICAgKiB1cCwgc28gdGhlIFRvYXN0IHNob3VsZCBhbmltYXRlIHRvIHRoZSB0b3Agb2YgdGhlIHNjcmVlbi5cbiAgICAgICAqIElmIHRoZSBkZWx0YVkgaXMgcG9zaXRpdmUgdGhlbiB0aGUgdXNlciBpcyBzd2lwaW5nXG4gICAgICAgKiBkb3duLCBzbyB0aGUgVG9hc3Qgc2hvdWxkIGFuaW1hdGUgdG8gdGhlIGJvdHRvbSBvZiB0aGUgc2NyZWVuLlxuICAgICAgICogV2UgYWxzbyBhY2NvdW50IGZvciB3aGVuIHRoZSBkZWx0YVkgaXMgMCwgYnV0IHJlYWxpc3RpY2FsbHlcbiAgICAgICAqIHRoYXQgc2hvdWxkIG5ldmVyIGhhcHBlbiBiZWNhdXNlIGl0IG1lYW5zIHRoZSB1c2VyIGRpZCBub3QgZHJhZ1xuICAgICAgICogdGhlIHRvYXN0LlxuICAgICAgICovXG4gICAgICBjb25zdCBvZmZzZXRGYWN0b3IgPSBkZXRhaWwuZGVsdGFZIDw9IDAgPyAtMSA6IDE7XG4gICAgICBjb25zdCBlbmRPZmZzZXQgPSAodG9wUG9zaXRpb24gKyB3cmFwcGVyRWxCb3guaGVpZ2h0KSAqIG9mZnNldEZhY3RvcjtcbiAgICAgIC8qKlxuICAgICAgICogSWYgdGhlIFRvYXN0IHNob3VsZCBkaXNtaXNzXG4gICAgICAgKiB0aGVuIHdlIG5lZWQgdG8gZmlndXJlIG91dCB3aGljaCBlZGdlIG9mXG4gICAgICAgKiB0aGUgc2NyZWVuIGl0IHNob3VsZCBhbmltYXRlIHRvd2FyZHMuXG4gICAgICAgKiBCeSBkZWZhdWx0LCB0aGUgVG9hc3Qgd2lsbCBjb21lXG4gICAgICAgKiBiYWNrIHRvIGl0cyBkZWZhdWx0IHN0YXRlIGluIHRoZVxuICAgICAgICogbWlkZGxlIG9mIHRoZSBzY3JlZW4uXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IGVuZFBvc2l0aW9uID0gc2hvdWxkRGlzbWlzcyA/IGAke2VuZE9mZnNldH1weGAgOiAnMHB4JztcbiAgICAgIGNvbnN0IEtFWUZSQU1FUyA9IFt7XG4gICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgke3N0YXJ0UG9zaXRpb259KWBcbiAgICAgIH0sIHtcbiAgICAgICAgb2Zmc2V0OiAxLFxuICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKCR7ZW5kUG9zaXRpb259KWBcbiAgICAgIH1dO1xuICAgICAgc3dpcGVBbmltYXRpb24ua2V5ZnJhbWVzKEtFWUZSQU1FUyk7XG4gICAgICAvKipcbiAgICAgICAqIENvbXB1dGUgdGhlIHJlbWFpbmluZyBhbW91bnQgb2YgcGl4ZWxzIHRoZVxuICAgICAgICogdG9hc3QgbmVlZHMgdG8gbW92ZSB0byBiZSBmdWxseSBkaXNtaXNzZWQuXG4gICAgICAgKi9cbiAgICAgIHJlbWFpbmluZ0Rpc3RhbmNlID0gZW5kT2Zmc2V0IC0gc3RhcnRPZmZzZXQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNob3VsZERpc21pc3MgPSB0aHJlc2hvbGQgPj0gRElTTUlTU19USFJFU0hPTEQ7XG4gICAgICBwbGF5VG8gPSBzaG91bGREaXNtaXNzID8gMSA6IDA7XG4gICAgICBzdGVwID0gY29tcHV0ZVN0ZXAoZGV0YWlsLmRlbHRhWSk7XG4gICAgICAvKipcbiAgICAgICAqIENvbXB1dGUgdGhlIHJlbWFpbmluZyBhbW91bnQgb2YgcGl4ZWxzIHRoZVxuICAgICAgICogdG9hc3QgbmVlZHMgdG8gbW92ZSB0byBiZSBmdWxseSBkaXNtaXNzZWQuXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IHJlbWFpbmluZ1N0ZXBBbW91bnQgPSBzaG91bGREaXNtaXNzID8gMSAtIHN0ZXAgOiBzdGVwO1xuICAgICAgcmVtYWluaW5nRGlzdGFuY2UgPSByZW1haW5pbmdTdGVwQW1vdW50ICogTUFYX1NXSVBFX0RJU1RBTkNFO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGUgYW5pbWF0aW9uIHNwZWVkIHNob3VsZCBkZXBlbmQgb24gaG93IHF1aWNrbHlcbiAgICAgKiB0aGUgdXNlciBmbGlja3MgdGhlIHRvYXN0IGFjcm9zcyB0aGUgc2NyZWVuLiBIb3dldmVyLFxuICAgICAqIGl0IHNob3VsZCBiZSBubyBzbG93ZXIgdGhhbiAyMDBtcy5cbiAgICAgKiBXZSB1c2UgTWF0aC5hYnMgb24gdGhlIHJlbWFpbmluZ0Rpc3RhbmNlIGJlY2F1c2UgdGhhdCB2YWx1ZVxuICAgICAqIGNhbiBiZSBuZWdhdGl2ZSB3aGVuIHN3aXBpbmcgdXAgb24gYSBtaWRkbGUgcG9zaXRpb24gdG9hc3QuXG4gICAgICovXG4gICAgY29uc3QgZHVyYXRpb24gPSBNYXRoLm1pbihNYXRoLmFicyhyZW1haW5pbmdEaXN0YW5jZSkgLyBNYXRoLmFicyh2ZWxvY2l0eSksIDIwMCk7XG4gICAgc3dpcGVBbmltYXRpb24ub25GaW5pc2goKCkgPT4ge1xuICAgICAgaWYgKHNob3VsZERpc21pc3MpIHtcbiAgICAgICAgb25EaXNtaXNzKCk7XG4gICAgICAgIHN3aXBlQW5pbWF0aW9uLmRlc3Ryb3koKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChlbC5wb3NpdGlvbiA9PT0gJ21pZGRsZScpIHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBJZiB0aGUgdG9hc3Qgc25hcHBlZCBiYWNrIHRvXG4gICAgICAgICAgICogdGhlIG1pZGRsZSBvZiB0aGUgc2NyZWVuIHdlIG5lZWRcbiAgICAgICAgICAgKiB0byByZXNldCB0aGUga2V5ZnJhbWVzXG4gICAgICAgICAgICogc28gdGhlIHRvYXN0IGNhbiBiZSBzd2lwZWRcbiAgICAgICAgICAgKiB1cCBvciBkb3duIGFnYWluLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIHN3aXBlQW5pbWF0aW9uLmtleWZyYW1lcyhTV0lQRV9VUF9ET1dOX0tFWUZSQU1FUykucHJvZ3Jlc3NTdGFydCh0cnVlLCAwLjUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN3aXBlQW5pbWF0aW9uLnByb2dyZXNzU3RhcnQodHJ1ZSwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIHRoZSB0b2FzdCBkaWQgbm90IGRpc21pc3MgdGhlblxuICAgICAgICAgKiB0aGUgdXNlciBzaG91bGQgYmUgYWJsZSB0byBzd2lwZSBhZ2Fpbi5cbiAgICAgICAgICovXG4gICAgICAgIGdlc3R1cmUuZW5hYmxlKHRydWUpO1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBUaGlzIG11c3QgYmUgYSBvbmUgdGltZSBjYWxsYmFja1xuICAgICAgICogb3RoZXJ3aXNlIGEgbmV3IGNhbGxiYWNrIHdpbGxcbiAgICAgICAqIGJlIGFkZGVkIGV2ZXJ5IHRpbWUgb25FbmQgcnVucy5cbiAgICAgICAqL1xuICAgIH0sIHtcbiAgICAgIG9uZVRpbWVDYWxsYmFjazogdHJ1ZVxuICAgIH0pLnByb2dyZXNzRW5kKHBsYXlUbywgc3RlcCwgZHVyYXRpb24pO1xuICB9O1xuICBjb25zdCBnZXN0dXJlID0gY3JlYXRlR2VzdHVyZSh7XG4gICAgZWw6IHdyYXBwZXJFbCxcbiAgICBnZXN0dXJlTmFtZTogJ3RvYXN0LXN3aXBlLXRvLWRpc21pc3MnLFxuICAgIGdlc3R1cmVQcmlvcml0eTogT1ZFUkxBWV9HRVNUVVJFX1BSSU9SSVRZLFxuICAgIC8qKlxuICAgICAqIFRvYXN0IG9ubHkgc3VwcG9ydHMgdmVydGljYWwgc3dpcGVzLlxuICAgICAqIFRoaXMgbmVlZHMgdG8gYmUgdXBkYXRlZCBpZiB3ZSBsYXRlclxuICAgICAqIHN1cHBvcnQgaG9yaXpvbnRhbCBzd2lwZXMuXG4gICAgICovXG4gICAgZGlyZWN0aW9uOiAneScsXG4gICAgb25Nb3ZlLFxuICAgIG9uRW5kXG4gIH0pO1xuICByZXR1cm4gZ2VzdHVyZTtcbn07XG5jb25zdCB0b2FzdElvc0NzcyA9IFwiOmhvc3R7LS1ib3JkZXItd2lkdGg6MDstLWJvcmRlci1zdHlsZTpub25lOy0tYm9yZGVyLWNvbG9yOmluaXRpYWw7LS1ib3gtc2hhZG93Om5vbmU7LS1taW4td2lkdGg6YXV0bzstLXdpZHRoOmF1dG87LS1taW4taGVpZ2h0OmF1dG87LS1oZWlnaHQ6YXV0bzstLW1heC1oZWlnaHQ6YXV0bzstLXdoaXRlLXNwYWNlOm5vcm1hbDt0b3A6MDtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7b3V0bGluZTpub25lO2NvbG9yOnZhcigtLWNvbG9yKTtmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHksIGluaGVyaXQpO2NvbnRhaW46c3RyaWN0O3otaW5kZXg6MTAwMTtwb2ludGVyLWV2ZW50czpub25lfTpob3N0e2luc2V0LWlubGluZS1zdGFydDowfTpob3N0KC5vdmVybGF5LWhpZGRlbil7ZGlzcGxheTpub25lfTpob3N0KC5pb24tY29sb3Ipey0tYnV0dG9uLWNvbG9yOmluaGVyaXQ7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KX06aG9zdCguaW9uLWNvbG9yKSAudG9hc3QtYnV0dG9uLWNhbmNlbHtjb2xvcjppbmhlcml0fTpob3N0KC5pb24tY29sb3IpIC50b2FzdC13cmFwcGVye2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWJhc2UpfS50b2FzdC13cmFwcGVye2JvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7d2lkdGg6dmFyKC0td2lkdGgpO21pbi13aWR0aDp2YXIoLS1taW4td2lkdGgpO21heC13aWR0aDp2YXIoLS1tYXgtd2lkdGgpO2hlaWdodDp2YXIoLS1oZWlnaHQpO21pbi1oZWlnaHQ6dmFyKC0tbWluLWhlaWdodCk7bWF4LWhlaWdodDp2YXIoLS1tYXgtaGVpZ2h0KTtib3JkZXItd2lkdGg6dmFyKC0tYm9yZGVyLXdpZHRoKTtib3JkZXItc3R5bGU6dmFyKC0tYm9yZGVyLXN0eWxlKTtib3JkZXItY29sb3I6dmFyKC0tYm9yZGVyLWNvbG9yKTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpOy13ZWJraXQtYm94LXNoYWRvdzp2YXIoLS1ib3gtc2hhZG93KTtib3gtc2hhZG93OnZhcigtLWJveC1zaGFkb3cpO3BvaW50ZXItZXZlbnRzOmF1dG99LnRvYXN0LXdyYXBwZXJ7aW5zZXQtaW5saW5lLXN0YXJ0OnZhcigtLXN0YXJ0KTtpbnNldC1pbmxpbmUtZW5kOnZhcigtLWVuZCl9LnRvYXN0LXdyYXBwZXIudG9hc3QtdG9wey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsICAtMTAwJSwgIDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCAgLTEwMCUsICAwKTt0b3A6MH0udG9hc3Qtd3JhcHBlci50b2FzdC1ib3R0b217LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwgIDEwMCUsICAwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwgIDEwMCUsICAwKTtib3R0b206MH0udG9hc3QtY29udGFpbmVye2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7aGVpZ2h0OmluaGVyaXQ7bWluLWhlaWdodDppbmhlcml0O21heC1oZWlnaHQ6aW5oZXJpdDtjb250YWluOmNvbnRlbnR9LnRvYXN0LWxheW91dC1zdGFja2VkIC50b2FzdC1jb250YWluZXJ7LW1zLWZsZXgtd3JhcDp3cmFwO2ZsZXgtd3JhcDp3cmFwfS50b2FzdC1sYXlvdXQtYmFzZWxpbmUgLnRvYXN0LWNvbnRlbnR7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXg6MTtmbGV4OjE7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn0udG9hc3QtaWNvbnstd2Via2l0LW1hcmdpbi1zdGFydDoxNnB4O21hcmdpbi1pbmxpbmUtc3RhcnQ6MTZweH0udG9hc3QtY29udGVudHttaW4td2lkdGg6MH0udG9hc3QtbWVzc2FnZXstbXMtZmxleDoxO2ZsZXg6MTt3aGl0ZS1zcGFjZTp2YXIoLS13aGl0ZS1zcGFjZSl9LnRvYXN0LWJ1dHRvbi1ncm91cHtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleH0udG9hc3QtbGF5b3V0LXN0YWNrZWQgLnRvYXN0LWJ1dHRvbi1ncm91cHstbXMtZmxleC1wYWNrOmVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZW5kO3dpZHRoOjEwMCV9LnRvYXN0LWJ1dHRvbntib3JkZXI6MDtvdXRsaW5lOm5vbmU7Y29sb3I6dmFyKC0tYnV0dG9uLWNvbG9yKTt6LWluZGV4OjB9LnRvYXN0LWljb24sLnRvYXN0LWJ1dHRvbi1pY29ue2ZvbnQtc2l6ZToxLjRlbX0udG9hc3QtYnV0dG9uLWlubmVye2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXJ9QG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKXsudG9hc3QtYnV0dG9uOmhvdmVye2N1cnNvcjpwb2ludGVyfX06aG9zdHstLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXN0ZXAtNTAsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXN0ZXAtNTAsICNmMmYyZjIpKTstLWJvcmRlci1yYWRpdXM6MTRweDstLWJ1dHRvbi1jb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzAwNTRlOSk7LS1jb2xvcjp2YXIoLS1pb24tY29sb3Itc3RlcC04NTAsIHZhcigtLWlvbi10ZXh0LWNvbG9yLXN0ZXAtMTUwLCAjMjYyNjI2KSk7LS1tYXgtd2lkdGg6NzAwcHg7LS1tYXgtaGVpZ2h0OjQ3OHB4Oy0tc3RhcnQ6MTBweDstLWVuZDoxMHB4O2ZvbnQtc2l6ZTpjbGFtcCgxNHB4LCAwLjg3NXJlbSwgNDMuNHB4KX0udG9hc3Qtd3JhcHBlcnstd2Via2l0LW1hcmdpbi1zdGFydDphdXRvO21hcmdpbi1pbmxpbmUtc3RhcnQ6YXV0bzstd2Via2l0LW1hcmdpbi1lbmQ6YXV0bzttYXJnaW4taW5saW5lLWVuZDphdXRvO21hcmdpbi10b3A6YXV0bzttYXJnaW4tYm90dG9tOmF1dG87ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjEwfUBzdXBwb3J0cyAoKC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDApKSBvciAoYmFja2Ryb3AtZmlsdGVyOiBibHVyKDApKSl7Omhvc3QoLnRvYXN0LXRyYW5zbHVjZW50KSAudG9hc3Qtd3JhcHBlcntiYWNrZ3JvdW5kOnJnYmEodmFyKC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiLCAyNTUsIDI1NSwgMjU1KSwgMC44KTstd2Via2l0LWJhY2tkcm9wLWZpbHRlcjpzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpO2JhY2tkcm9wLWZpbHRlcjpzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpfTpob3N0KC5pb24tY29sb3IudG9hc3QtdHJhbnNsdWNlbnQpIC50b2FzdC13cmFwcGVye2JhY2tncm91bmQ6cmdiYSh2YXIoLS1pb24tY29sb3ItYmFzZS1yZ2IpLCAwLjgpfX0udG9hc3Qtd3JhcHBlci50b2FzdC1taWRkbGV7b3BhY2l0eTowLjAxfS50b2FzdC1jb250ZW50ey13ZWJraXQtcGFkZGluZy1zdGFydDoxNXB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjE1cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDoxNXB4O3BhZGRpbmctaW5saW5lLWVuZDoxNXB4O3BhZGRpbmctdG9wOjE1cHg7cGFkZGluZy1ib3R0b206MTVweH0udG9hc3QtaGVhZGVye21hcmdpbi1ib3R0b206MnB4O2ZvbnQtd2VpZ2h0OjUwMH0udG9hc3QtYnV0dG9uey13ZWJraXQtcGFkZGluZy1zdGFydDoxNXB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjE1cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDoxNXB4O3BhZGRpbmctaW5saW5lLWVuZDoxNXB4O3BhZGRpbmctdG9wOjEwcHg7cGFkZGluZy1ib3R0b206MTBweDttaW4taGVpZ2h0OjQ0cHg7LXdlYmtpdC10cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IsIG9wYWNpdHkgMTAwbXMgbGluZWFyO3RyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciwgb3BhY2l0eSAxMDBtcyBsaW5lYXI7Ym9yZGVyOjA7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHkpO2ZvbnQtc2l6ZTpjbGFtcCgxN3B4LCAxLjA2MjVyZW0sIDIxLjk5OHB4KTtmb250LXdlaWdodDo1MDA7b3ZlcmZsb3c6aGlkZGVufS50b2FzdC1idXR0b24uaW9uLWFjdGl2YXRlZHtvcGFjaXR5OjAuNH1AbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpey50b2FzdC1idXR0b246aG92ZXJ7b3BhY2l0eTowLjZ9fVwiO1xuY29uc3QgdG9hc3RNZENzcyA9IFwiOmhvc3R7LS1ib3JkZXItd2lkdGg6MDstLWJvcmRlci1zdHlsZTpub25lOy0tYm9yZGVyLWNvbG9yOmluaXRpYWw7LS1ib3gtc2hhZG93Om5vbmU7LS1taW4td2lkdGg6YXV0bzstLXdpZHRoOmF1dG87LS1taW4taGVpZ2h0OmF1dG87LS1oZWlnaHQ6YXV0bzstLW1heC1oZWlnaHQ6YXV0bzstLXdoaXRlLXNwYWNlOm5vcm1hbDt0b3A6MDtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7b3V0bGluZTpub25lO2NvbG9yOnZhcigtLWNvbG9yKTtmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHksIGluaGVyaXQpO2NvbnRhaW46c3RyaWN0O3otaW5kZXg6MTAwMTtwb2ludGVyLWV2ZW50czpub25lfTpob3N0e2luc2V0LWlubGluZS1zdGFydDowfTpob3N0KC5vdmVybGF5LWhpZGRlbil7ZGlzcGxheTpub25lfTpob3N0KC5pb24tY29sb3Ipey0tYnV0dG9uLWNvbG9yOmluaGVyaXQ7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KX06aG9zdCguaW9uLWNvbG9yKSAudG9hc3QtYnV0dG9uLWNhbmNlbHtjb2xvcjppbmhlcml0fTpob3N0KC5pb24tY29sb3IpIC50b2FzdC13cmFwcGVye2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWJhc2UpfS50b2FzdC13cmFwcGVye2JvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7d2lkdGg6dmFyKC0td2lkdGgpO21pbi13aWR0aDp2YXIoLS1taW4td2lkdGgpO21heC13aWR0aDp2YXIoLS1tYXgtd2lkdGgpO2hlaWdodDp2YXIoLS1oZWlnaHQpO21pbi1oZWlnaHQ6dmFyKC0tbWluLWhlaWdodCk7bWF4LWhlaWdodDp2YXIoLS1tYXgtaGVpZ2h0KTtib3JkZXItd2lkdGg6dmFyKC0tYm9yZGVyLXdpZHRoKTtib3JkZXItc3R5bGU6dmFyKC0tYm9yZGVyLXN0eWxlKTtib3JkZXItY29sb3I6dmFyKC0tYm9yZGVyLWNvbG9yKTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpOy13ZWJraXQtYm94LXNoYWRvdzp2YXIoLS1ib3gtc2hhZG93KTtib3gtc2hhZG93OnZhcigtLWJveC1zaGFkb3cpO3BvaW50ZXItZXZlbnRzOmF1dG99LnRvYXN0LXdyYXBwZXJ7aW5zZXQtaW5saW5lLXN0YXJ0OnZhcigtLXN0YXJ0KTtpbnNldC1pbmxpbmUtZW5kOnZhcigtLWVuZCl9LnRvYXN0LXdyYXBwZXIudG9hc3QtdG9wey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsICAtMTAwJSwgIDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCAgLTEwMCUsICAwKTt0b3A6MH0udG9hc3Qtd3JhcHBlci50b2FzdC1ib3R0b217LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwgIDEwMCUsICAwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwgIDEwMCUsICAwKTtib3R0b206MH0udG9hc3QtY29udGFpbmVye2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7aGVpZ2h0OmluaGVyaXQ7bWluLWhlaWdodDppbmhlcml0O21heC1oZWlnaHQ6aW5oZXJpdDtjb250YWluOmNvbnRlbnR9LnRvYXN0LWxheW91dC1zdGFja2VkIC50b2FzdC1jb250YWluZXJ7LW1zLWZsZXgtd3JhcDp3cmFwO2ZsZXgtd3JhcDp3cmFwfS50b2FzdC1sYXlvdXQtYmFzZWxpbmUgLnRvYXN0LWNvbnRlbnR7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXg6MTtmbGV4OjE7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn0udG9hc3QtaWNvbnstd2Via2l0LW1hcmdpbi1zdGFydDoxNnB4O21hcmdpbi1pbmxpbmUtc3RhcnQ6MTZweH0udG9hc3QtY29udGVudHttaW4td2lkdGg6MH0udG9hc3QtbWVzc2FnZXstbXMtZmxleDoxO2ZsZXg6MTt3aGl0ZS1zcGFjZTp2YXIoLS13aGl0ZS1zcGFjZSl9LnRvYXN0LWJ1dHRvbi1ncm91cHtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleH0udG9hc3QtbGF5b3V0LXN0YWNrZWQgLnRvYXN0LWJ1dHRvbi1ncm91cHstbXMtZmxleC1wYWNrOmVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZW5kO3dpZHRoOjEwMCV9LnRvYXN0LWJ1dHRvbntib3JkZXI6MDtvdXRsaW5lOm5vbmU7Y29sb3I6dmFyKC0tYnV0dG9uLWNvbG9yKTt6LWluZGV4OjB9LnRvYXN0LWljb24sLnRvYXN0LWJ1dHRvbi1pY29ue2ZvbnQtc2l6ZToxLjRlbX0udG9hc3QtYnV0dG9uLWlubmVye2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXJ9QG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKXsudG9hc3QtYnV0dG9uOmhvdmVye2N1cnNvcjpwb2ludGVyfX06aG9zdHstLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXN0ZXAtODAwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTgwMCwgIzMzMzMzMykpOy0tYm9yZGVyLXJhZGl1czo0cHg7LS1ib3gtc2hhZG93OjAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpOy0tYnV0dG9uLWNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMDA1NGU5KTstLWNvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTUwLCB2YXIoLS1pb24tdGV4dC1jb2xvci1zdGVwLTk1MCwgI2YyZjJmMikpOy0tbWF4LXdpZHRoOjcwMHB4Oy0tc3RhcnQ6OHB4Oy0tZW5kOjhweDtmb250LXNpemU6MC44NzVyZW19LnRvYXN0LXdyYXBwZXJ7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6YXV0bzttYXJnaW4taW5saW5lLXN0YXJ0OmF1dG87LXdlYmtpdC1tYXJnaW4tZW5kOmF1dG87bWFyZ2luLWlubGluZS1lbmQ6YXV0bzttYXJnaW4tdG9wOmF1dG87bWFyZ2luLWJvdHRvbTphdXRvO2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7b3BhY2l0eTowLjAxO3otaW5kZXg6MTB9LnRvYXN0LWNvbnRlbnR7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjE2cHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MTZweDstd2Via2l0LXBhZGRpbmctZW5kOjE2cHg7cGFkZGluZy1pbmxpbmUtZW5kOjE2cHg7cGFkZGluZy10b3A6MTRweDtwYWRkaW5nLWJvdHRvbToxNHB4fS50b2FzdC1oZWFkZXJ7bWFyZ2luLWJvdHRvbToycHg7Zm9udC13ZWlnaHQ6NTAwO2xpbmUtaGVpZ2h0OjEuMjVyZW19LnRvYXN0LW1lc3NhZ2V7bGluZS1oZWlnaHQ6MS4yNXJlbX0udG9hc3QtbGF5b3V0LWJhc2VsaW5lIC50b2FzdC1idXR0b24tZ3JvdXAtc3RhcnR7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6OHB4O21hcmdpbi1pbmxpbmUtc3RhcnQ6OHB4fS50b2FzdC1sYXlvdXQtc3RhY2tlZCAudG9hc3QtYnV0dG9uLWdyb3VwLXN0YXJ0ey13ZWJraXQtbWFyZ2luLWVuZDo4cHg7bWFyZ2luLWlubGluZS1lbmQ6OHB4O21hcmdpbi10b3A6OHB4fS50b2FzdC1sYXlvdXQtYmFzZWxpbmUgLnRvYXN0LWJ1dHRvbi1ncm91cC1lbmR7LXdlYmtpdC1tYXJnaW4tZW5kOjhweDttYXJnaW4taW5saW5lLWVuZDo4cHh9LnRvYXN0LWxheW91dC1zdGFja2VkIC50b2FzdC1idXR0b24tZ3JvdXAtZW5key13ZWJraXQtbWFyZ2luLWVuZDo4cHg7bWFyZ2luLWlubGluZS1lbmQ6OHB4O21hcmdpbi1ib3R0b206OHB4fS50b2FzdC1idXR0b257LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjE1cHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MTVweDstd2Via2l0LXBhZGRpbmctZW5kOjE1cHg7cGFkZGluZy1pbmxpbmUtZW5kOjE1cHg7cGFkZGluZy10b3A6MTBweDtwYWRkaW5nLWJvdHRvbToxMHB4O3Bvc2l0aW9uOnJlbGF0aXZlO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5KTtmb250LXNpemU6MC44NzVyZW07Zm9udC13ZWlnaHQ6NTAwO2xldHRlci1zcGFjaW5nOjAuODRweDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7b3ZlcmZsb3c6aGlkZGVufS50b2FzdC1idXR0b24tY2FuY2Vse2NvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTEwMCwgdmFyKC0taW9uLXRleHQtY29sb3Itc3RlcC05MDAsICNlNmU2ZTYpKX0udG9hc3QtYnV0dG9uLWljb24tb25seXtib3JkZXItcmFkaXVzOjUwJTstd2Via2l0LXBhZGRpbmctc3RhcnQ6OXB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjlweDstd2Via2l0LXBhZGRpbmctZW5kOjlweDtwYWRkaW5nLWlubGluZS1lbmQ6OXB4O3BhZGRpbmctdG9wOjlweDtwYWRkaW5nLWJvdHRvbTo5cHg7d2lkdGg6MzZweDtoZWlnaHQ6MzZweH1AbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpey50b2FzdC1idXR0b246aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiwgMCwgODQsIDIzMyksIDAuMDgpfS50b2FzdC1idXR0b24tY2FuY2VsOmhvdmVye2JhY2tncm91bmQtY29sb3I6cmdiYSh2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2IsIDI1NSwgMjU1LCAyNTUpLCAwLjA4KX19XCI7XG5jb25zdCBUb2FzdCA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5kaWRQcmVzZW50ID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Ub2FzdERpZFByZXNlbnRcIiwgNyk7XG4gICAgdGhpcy53aWxsUHJlc2VudCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uVG9hc3RXaWxsUHJlc2VudFwiLCA3KTtcbiAgICB0aGlzLndpbGxEaXNtaXNzID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Ub2FzdFdpbGxEaXNtaXNzXCIsIDcpO1xuICAgIHRoaXMuZGlkRGlzbWlzcyA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uVG9hc3REaWREaXNtaXNzXCIsIDcpO1xuICAgIHRoaXMuZGlkUHJlc2VudFNob3J0aGFuZCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiZGlkUHJlc2VudFwiLCA3KTtcbiAgICB0aGlzLndpbGxQcmVzZW50U2hvcnRoYW5kID0gY3JlYXRlRXZlbnQodGhpcywgXCJ3aWxsUHJlc2VudFwiLCA3KTtcbiAgICB0aGlzLndpbGxEaXNtaXNzU2hvcnRoYW5kID0gY3JlYXRlRXZlbnQodGhpcywgXCJ3aWxsRGlzbWlzc1wiLCA3KTtcbiAgICB0aGlzLmRpZERpc21pc3NTaG9ydGhhbmQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImRpZERpc21pc3NcIiwgNyk7XG4gICAgdGhpcy5kZWxlZ2F0ZUNvbnRyb2xsZXIgPSBjcmVhdGVEZWxlZ2F0ZUNvbnRyb2xsZXIodGhpcyk7XG4gICAgdGhpcy5sb2NrQ29udHJvbGxlciA9IGNyZWF0ZUxvY2tDb250cm9sbGVyKCk7XG4gICAgdGhpcy50cmlnZ2VyQ29udHJvbGxlciA9IGNyZWF0ZVRyaWdnZXJDb250cm9sbGVyKCk7XG4gICAgdGhpcy5jdXN0b21IVE1MRW5hYmxlZCA9IGNvbmZpZy5nZXQoJ2lubmVySFRNTFRlbXBsYXRlc0VuYWJsZWQnLCBFTkFCTEVfSFRNTF9DT05URU5UX0RFRkFVTFQpO1xuICAgIHRoaXMucHJlc2VudGVkID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogV2hlbiBgdHJ1ZWAsIGNvbnRlbnQgaW5zaWRlIG9mIC50b2FzdC1jb250ZW50XG4gICAgICogd2lsbCBoYXZlIGFyaWEtaGlkZGVuIGVsZW1lbnRzIHJlbW92ZWQgY2F1c2luZ1xuICAgICAqIHNjcmVlbiByZWFkZXJzIHRvIGFubm91bmNlIHRoZSByZW1haW5pbmcgY29udGVudC5cbiAgICAgKi9cbiAgICB0aGlzLnJldmVhbENvbnRlbnRUb1NjcmVlblJlYWRlciA9IGZhbHNlO1xuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICB0aGlzLmhhc0NvbnRyb2xsZXIgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBIb3cgbWFueSBtaWxsaXNlY29uZHMgdG8gd2FpdCBiZWZvcmUgaGlkaW5nIHRoZSB0b2FzdC4gQnkgZGVmYXVsdCwgaXQgd2lsbCBzaG93XG4gICAgICogdW50aWwgYGRpc21pc3MoKWAgaXMgY2FsbGVkLlxuICAgICAqL1xuICAgIHRoaXMuZHVyYXRpb24gPSBjb25maWcuZ2V0TnVtYmVyKCd0b2FzdER1cmF0aW9uJywgMCk7XG4gICAgLyoqXG4gICAgICogRGVmaW5lcyBob3cgdGhlIG1lc3NhZ2UgYW5kIGJ1dHRvbnMgYXJlIGxhaWQgb3V0IGluIHRoZSB0b2FzdC5cbiAgICAgKiAnYmFzZWxpbmUnOiBUaGUgbWVzc2FnZSBhbmQgdGhlIGJ1dHRvbnMgd2lsbCBhcHBlYXIgb24gdGhlIHNhbWUgbGluZS5cbiAgICAgKiBNZXNzYWdlIHRleHQgbWF5IHdyYXAgd2l0aGluIHRoZSBtZXNzYWdlIGNvbnRhaW5lci5cbiAgICAgKiAnc3RhY2tlZCc6IFRoZSBidXR0b25zIGNvbnRhaW5lcnMgYW5kIG1lc3NhZ2Ugd2lsbCBzdGFjayBvbiB0b3BcbiAgICAgKiBvZiBlYWNoIG90aGVyLiBVc2UgdGhpcyBpZiB5b3UgaGF2ZSBsb25nIHRleHQgaW4geW91ciBidXR0b25zLlxuICAgICAqL1xuICAgIHRoaXMubGF5b3V0ID0gJ2Jhc2VsaW5lJztcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBrZXlib2FyZCB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgZGlzbWlzc2VkIHdoZW4gdGhlIG92ZXJsYXkgaXMgcHJlc2VudGVkLlxuICAgICAqL1xuICAgIHRoaXMua2V5Ym9hcmRDbG9zZSA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIFRoZSBzdGFydGluZyBwb3NpdGlvbiBvZiB0aGUgdG9hc3Qgb24gdGhlIHNjcmVlbi4gQ2FuIGJlIHR3ZWFrZWQgZnVydGhlclxuICAgICAqIHVzaW5nIHRoZSBgcG9zaXRpb25BbmNob3JgIHByb3BlcnR5LlxuICAgICAqL1xuICAgIHRoaXMucG9zaXRpb24gPSAnYm90dG9tJztcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIHRoZSB0b2FzdCB3aWxsIGJlIHRyYW5zbHVjZW50LlxuICAgICAqIE9ubHkgYXBwbGllcyB3aGVuIHRoZSBtb2RlIGlzIGBcImlvc1wiYCBhbmQgdGhlIGRldmljZSBzdXBwb3J0c1xuICAgICAqIFtgYmFja2Ryb3AtZmlsdGVyYF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JhY2tkcm9wLWZpbHRlciNCcm93c2VyX2NvbXBhdGliaWxpdHkpLlxuICAgICAqL1xuICAgIHRoaXMudHJhbnNsdWNlbnQgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIHRoZSB0b2FzdCB3aWxsIGFuaW1hdGUuXG4gICAgICovXG4gICAgdGhpcy5hbmltYXRlZCA9IHRydWU7XG4gICAgLyoqXG4gICAgICogSWYgYHRydWVgLCB0aGUgdG9hc3Qgd2lsbCBvcGVuLiBJZiBgZmFsc2VgLCB0aGUgdG9hc3Qgd2lsbCBjbG9zZS5cbiAgICAgKiBVc2UgdGhpcyBpZiB5b3UgbmVlZCBmaW5lciBncmFpbmVkIGNvbnRyb2wgb3ZlciBwcmVzZW50YXRpb24sIG90aGVyd2lzZVxuICAgICAqIGp1c3QgdXNlIHRoZSB0b2FzdENvbnRyb2xsZXIgb3IgdGhlIGB0cmlnZ2VyYCBwcm9wZXJ0eS5cbiAgICAgKiBOb3RlOiBgaXNPcGVuYCB3aWxsIG5vdCBhdXRvbWF0aWNhbGx5IGJlIHNldCBiYWNrIHRvIGBmYWxzZWAgd2hlblxuICAgICAqIHRoZSB0b2FzdCBkaXNtaXNzZXMuIFlvdSB3aWxsIG5lZWQgdG8gZG8gdGhhdCBpbiB5b3VyIGNvZGUuXG4gICAgICovXG4gICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICB0aGlzLmRpc3BhdGNoQ2FuY2VsSGFuZGxlciA9IGV2ID0+IHtcbiAgICAgIGNvbnN0IHJvbGUgPSBldi5kZXRhaWwucm9sZTtcbiAgICAgIGlmIChpc0NhbmNlbChyb2xlKSkge1xuICAgICAgICBjb25zdCBjYW5jZWxCdXR0b24gPSB0aGlzLmdldEJ1dHRvbnMoKS5maW5kKGIgPT4gYi5yb2xlID09PSAnY2FuY2VsJyk7XG4gICAgICAgIHRoaXMuY2FsbEJ1dHRvbkhhbmRsZXIoY2FuY2VsQnV0dG9uKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBzd2lwZSBnZXN0dXJlIHNvIFRvYXN0XG4gICAgICogY2FuIGJlIHN3aXBlZCB0byBkaXNtaXNzLlxuICAgICAqL1xuICAgIHRoaXMuY3JlYXRlU3dpcGVHZXN0dXJlID0gdG9hc3RQb3NpdGlvbiA9PiB7XG4gICAgICBjb25zdCBnZXN0dXJlID0gdGhpcy5nZXN0dXJlID0gY3JlYXRlU3dpcGVUb0Rpc21pc3NHZXN0dXJlKHRoaXMuZWwsIHRvYXN0UG9zaXRpb24sICgpID0+IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIHRoZSBnZXN0dXJlIGNvbXBsZXRlZCB0aGVuXG4gICAgICAgICAqIHdlIHNob3VsZCBkaXNtaXNzIHRoZSB0b2FzdC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlzbWlzcyh1bmRlZmluZWQsIEdFU1RVUkUpO1xuICAgICAgfSk7XG4gICAgICBnZXN0dXJlLmVuYWJsZSh0cnVlKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERlc3Ryb3kgYW4gZXhpc3Rpbmcgc3dpcGUgZ2VzdHVyZVxuICAgICAqIHNvIFRvYXN0IGNhbiBubyBsb25nZXIgYmUgc3dpcGVkIHRvIGRpc21pc3MuXG4gICAgICovXG4gICAgdGhpcy5kZXN0cm95U3dpcGVHZXN0dXJlID0gKCkgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBnZXN0dXJlXG4gICAgICB9ID0gdGhpcztcbiAgICAgIGlmIChnZXN0dXJlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZ2VzdHVyZS5kZXN0cm95KCk7XG4gICAgICB0aGlzLmdlc3R1cmUgPSB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGB0cnVlYCBpZiBzd2lwZUdlc3R1cmVcbiAgICAgKiBpcyBjb25maWd1cmVkIHRvIGEgdmFsdWUgdGhhdCBlbmFibGVzIHRoZSBzd2lwZSBiZWhhdmlvci5cbiAgICAgKiBSZXR1cm5zIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIHRoaXMucHJlZmVyc1N3aXBlR2VzdHVyZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgc3dpcGVHZXN0dXJlXG4gICAgICB9ID0gdGhpcztcbiAgICAgIHJldHVybiBzd2lwZUdlc3R1cmUgPT09ICd2ZXJ0aWNhbCc7XG4gICAgfTtcbiAgfVxuICBzd2lwZUdlc3R1cmVDaGFuZ2VkKCkge1xuICAgIC8qKlxuICAgICAqIElmIHRoZSBUb2FzdCBpcyBwcmVzZW50ZWQsIHRoZW4gd2UgbmVlZCB0byBkZXN0cm95XG4gICAgICogYW55IGFjdGl2ZXMgZ2VzdHVyZXMgYmVmb3JlIGEgbmV3IGdlc3R1cmUgaXMgcG90ZW50aWFsbHlcbiAgICAgKiBjcmVhdGVkIGJlbG93LlxuICAgICAqXG4gICAgICogSWYgdGhlIFRvYXN0IGlzIGRpc21pc3NlZCwgdGhlbiBubyBnZXN0dXJlIHNob3VsZCBiZSBhdmFpbGFibGVcbiAgICAgKiBzaW5jZSB0aGUgVG9hc3QgaXMgbm90IHZpc2libGUuIFRoaXMgY2FzZSBzaG91bGQgbmV2ZXJcbiAgICAgKiBoYXBwZW4gc2luY2UgdGhlIFwiZGlzbWlzc1wiIG1ldGhvZCBoYW5kbGVzIGRlc3Ryb3lpbmdcbiAgICAgKiBhbnkgYWN0aXZlIHN3aXBlIGdlc3R1cmVzLCBidXQgd2Uga2VlcCB0aGlzIGNvZGVcbiAgICAgKiBhcm91bmQgdG8gaGFuZGxlIHRoZSBmaXJzdCBjYXNlLlxuICAgICAqL1xuICAgIHRoaXMuZGVzdHJveVN3aXBlR2VzdHVyZSgpO1xuICAgIC8qKlxuICAgICAqIEEgbmV3IHN3aXBlIGdlc3R1cmUgc2hvdWxkIG9ubHkgYmUgY3JlYXRlZFxuICAgICAqIGlmIHRoZSBUb2FzdCBpcyBwcmVzZW50ZWQuIElmIHRoZSBUb2FzdCBpcyBub3RcbiAgICAgKiB5ZXQgcHJlc2VudGVkIHRoZW4gdGhlIFwicHJlc2VudFwiIG1ldGhvZCB3aWxsXG4gICAgICogaGFuZGxlIGNhbGxpbmcgdGhlIHN3aXBlIGdlc3R1cmUgc2V0dXAgZnVuY3Rpb24uXG4gICAgICovXG4gICAgaWYgKHRoaXMucHJlc2VudGVkICYmIHRoaXMucHJlZmVyc1N3aXBlR2VzdHVyZSgpKSB7XG4gICAgICAvKipcbiAgICAgICAqIElmIHRoZSBUb2FzdCBpcyBwcmVzZW50ZWQgdGhlblxuICAgICAgICogbGFzdFByZXNlbnRlZFBvc2l0aW9uIGlzIGRlZmluZWQuXG4gICAgICAgKi9cbiAgICAgIHRoaXMuY3JlYXRlU3dpcGVHZXN0dXJlKHRoaXMubGFzdFByZXNlbnRlZFBvc2l0aW9uKTtcbiAgICB9XG4gIH1cbiAgb25Jc09wZW5DaGFuZ2UobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgaWYgKG5ld1ZhbHVlID09PSB0cnVlICYmIG9sZFZhbHVlID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5wcmVzZW50KCk7XG4gICAgfSBlbHNlIGlmIChuZXdWYWx1ZSA9PT0gZmFsc2UgJiYgb2xkVmFsdWUgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuZGlzbWlzcygpO1xuICAgIH1cbiAgfVxuICB0cmlnZ2VyQ2hhbmdlZCgpIHtcbiAgICBjb25zdCB7XG4gICAgICB0cmlnZ2VyLFxuICAgICAgZWwsXG4gICAgICB0cmlnZ2VyQ29udHJvbGxlclxuICAgIH0gPSB0aGlzO1xuICAgIGlmICh0cmlnZ2VyKSB7XG4gICAgICB0cmlnZ2VyQ29udHJvbGxlci5hZGRDbGlja0xpc3RlbmVyKGVsLCB0cmlnZ2VyKTtcbiAgICB9XG4gIH1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgcHJlcGFyZU92ZXJsYXkodGhpcy5lbCk7XG4gICAgdGhpcy50cmlnZ2VyQ2hhbmdlZCgpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMudHJpZ2dlckNvbnRyb2xsZXIucmVtb3ZlQ2xpY2tMaXN0ZW5lcigpO1xuICB9XG4gIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHZhciBfYTtcbiAgICBpZiAoISgoX2EgPSB0aGlzLmh0bWxBdHRyaWJ1dGVzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaWQpKSB7XG4gICAgICBzZXRPdmVybGF5SWQodGhpcy5lbCk7XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgLyoqXG4gICAgICogSWYgdG9hc3Qgd2FzIHJlbmRlcmVkIHdpdGggaXNPcGVuPVwidHJ1ZVwiXG4gICAgICogdGhlbiB3ZSBzaG91bGQgb3BlbiB0b2FzdCBpbW1lZGlhdGVseS5cbiAgICAgKi9cbiAgICBpZiAodGhpcy5pc09wZW4gPT09IHRydWUpIHtcbiAgICAgIHJhZigoKSA9PiB0aGlzLnByZXNlbnQoKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFdoZW4gYmluZGluZyB2YWx1ZXMgaW4gZnJhbWV3b3JrcyBzdWNoIGFzIEFuZ3VsYXJcbiAgICAgKiBpdCBpcyBwb3NzaWJsZSBmb3IgdGhlIHZhbHVlIHRvIGJlIHNldCBhZnRlciB0aGUgV2ViIENvbXBvbmVudFxuICAgICAqIGluaXRpYWxpemVzIGJ1dCBiZWZvcmUgdGhlIHZhbHVlIHdhdGNoZXIgaXMgc2V0IHVwIGluIFN0ZW5jaWwuXG4gICAgICogQXMgYSByZXN1bHQsIHRoZSB3YXRjaGVyIGNhbGxiYWNrIG1heSBub3QgYmUgZmlyZWQuXG4gICAgICogV2Ugd29yayBhcm91bmQgdGhpcyBieSBtYW51YWxseSBjYWxsaW5nIHRoZSB3YXRjaGVyXG4gICAgICogY2FsbGJhY2sgd2hlbiB0aGUgY29tcG9uZW50IGhhcyBsb2FkZWQgYW5kIHRoZSB3YXRjaGVyXG4gICAgICogaXMgY29uZmlndXJlZC5cbiAgICAgKi9cbiAgICB0aGlzLnRyaWdnZXJDaGFuZ2VkKCk7XG4gIH1cbiAgLyoqXG4gICAqIFByZXNlbnQgdGhlIHRvYXN0IG92ZXJsYXkgYWZ0ZXIgaXQgaGFzIGJlZW4gY3JlYXRlZC5cbiAgICovXG4gIGFzeW5jIHByZXNlbnQoKSB7XG4gICAgY29uc3QgdW5sb2NrID0gYXdhaXQgdGhpcy5sb2NrQ29udHJvbGxlci5sb2NrKCk7XG4gICAgYXdhaXQgdGhpcy5kZWxlZ2F0ZUNvbnRyb2xsZXIuYXR0YWNoVmlld1RvRG9tKCk7XG4gICAgY29uc3Qge1xuICAgICAgZWwsXG4gICAgICBwb3NpdGlvblxuICAgIH0gPSB0aGlzO1xuICAgIGNvbnN0IGFuY2hvciA9IHRoaXMuZ2V0QW5jaG9yRWxlbWVudCgpO1xuICAgIGNvbnN0IGFuaW1hdGlvblBvc2l0aW9uID0gZ2V0QW5pbWF0aW9uUG9zaXRpb24ocG9zaXRpb24sIGFuY2hvciwgZ2V0SW9uTW9kZSh0aGlzKSwgZWwpO1xuICAgIC8qKlxuICAgICAqIENhY2hlIHRoZSBjYWxjdWxhdGVkIHBvc2l0aW9uIG9mIHRoZSB0b2FzdCwgc28gd2UgY2FuIHJlLXVzZSBpdFxuICAgICAqIGluIHRoZSBkaXNtaXNzIGFuaW1hdGlvbi5cbiAgICAgKi9cbiAgICB0aGlzLmxhc3RQcmVzZW50ZWRQb3NpdGlvbiA9IGFuaW1hdGlvblBvc2l0aW9uO1xuICAgIGF3YWl0IHByZXNlbnQodGhpcywgJ3RvYXN0RW50ZXInLCBpb3NFbnRlckFuaW1hdGlvbiwgbWRFbnRlckFuaW1hdGlvbiwge1xuICAgICAgcG9zaXRpb24sXG4gICAgICB0b3A6IGFuaW1hdGlvblBvc2l0aW9uLnRvcCxcbiAgICAgIGJvdHRvbTogYW5pbWF0aW9uUG9zaXRpb24uYm90dG9tXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogQ29udGVudCBpcyByZXZlYWxlZCB0byBzY3JlZW4gcmVhZGVycyBhZnRlclxuICAgICAqIHRoZSB0cmFuc2l0aW9uIHRvIGF2b2lkIGphbmsgc2luY2UgdGhpc1xuICAgICAqIHN0YXRlIHVwZGF0ZXMgd2lsbCBjYXVzZSBhIHJlLXJlbmRlci5cbiAgICAgKi9cbiAgICB0aGlzLnJldmVhbENvbnRlbnRUb1NjcmVlblJlYWRlciA9IHRydWU7XG4gICAgaWYgKHRoaXMuZHVyYXRpb24gPiAwKSB7XG4gICAgICB0aGlzLmR1cmF0aW9uVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5kaXNtaXNzKHVuZGVmaW5lZCwgJ3RpbWVvdXQnKSwgdGhpcy5kdXJhdGlvbik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIElmIHRoZSBUb2FzdCBoYXMgYSBzd2lwZSBnZXN0dXJlIHRoZW4gd2UgY2FuXG4gICAgICogY3JlYXRlIHRoZSBnZXN0dXJlIHNvIHVzZXJzIGNhbiBzd2lwZSB0aGVcbiAgICAgKiBwcmVzZW50ZWQgVG9hc3QuXG4gICAgICovXG4gICAgaWYgKHRoaXMucHJlZmVyc1N3aXBlR2VzdHVyZSgpKSB7XG4gICAgICB0aGlzLmNyZWF0ZVN3aXBlR2VzdHVyZShhbmltYXRpb25Qb3NpdGlvbik7XG4gICAgfVxuICAgIHVubG9jaygpO1xuICB9XG4gIC8qKlxuICAgKiBEaXNtaXNzIHRoZSB0b2FzdCBvdmVybGF5IGFmdGVyIGl0IGhhcyBiZWVuIHByZXNlbnRlZC5cbiAgICogVGhpcyBpcyBhIG5vLW9wIGlmIHRoZSBvdmVybGF5IGhhcyBub3QgYmVlbiBwcmVzZW50ZWQgeWV0LiBJZiB5b3Ugd2FudFxuICAgKiB0byByZW1vdmUgYW4gb3ZlcmxheSBmcm9tIHRoZSBET00gdGhhdCB3YXMgbmV2ZXIgcHJlc2VudGVkLCB1c2UgdGhlXG4gICAqIFtyZW1vdmVdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FbGVtZW50L3JlbW92ZSkgbWV0aG9kLlxuICAgKlxuICAgKiBAcGFyYW0gZGF0YSBBbnkgZGF0YSB0byBlbWl0IGluIHRoZSBkaXNtaXNzIGV2ZW50cy5cbiAgICogQHBhcmFtIHJvbGUgVGhlIHJvbGUgb2YgdGhlIGVsZW1lbnQgdGhhdCBpcyBkaXNtaXNzaW5nIHRoZSB0b2FzdC5cbiAgICogVGhpcyBjYW4gYmUgdXNlZnVsIGluIGEgYnV0dG9uIGhhbmRsZXIgZm9yIGRldGVybWluaW5nIHdoaWNoIGJ1dHRvbiB3YXNcbiAgICogY2xpY2tlZCB0byBkaXNtaXNzIHRoZSB0b2FzdC5cbiAgICogU29tZSBleGFtcGxlcyBpbmNsdWRlOiBgXCJjYW5jZWxcImAsIGBcImRlc3RydWN0aXZlXCJgLCBgXCJzZWxlY3RlZFwiYCwgYW5kIGBcImJhY2tkcm9wXCJgLlxuICAgKi9cbiAgYXN5bmMgZGlzbWlzcyhkYXRhLCByb2xlKSB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICBjb25zdCB1bmxvY2sgPSBhd2FpdCB0aGlzLmxvY2tDb250cm9sbGVyLmxvY2soKTtcbiAgICBjb25zdCB7XG4gICAgICBkdXJhdGlvblRpbWVvdXQsXG4gICAgICBwb3NpdGlvbixcbiAgICAgIGxhc3RQcmVzZW50ZWRQb3NpdGlvblxuICAgIH0gPSB0aGlzO1xuICAgIGlmIChkdXJhdGlvblRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dChkdXJhdGlvblRpbWVvdXQpO1xuICAgIH1cbiAgICBjb25zdCBkaXNtaXNzZWQgPSBhd2FpdCBkaXNtaXNzKHRoaXMsIGRhdGEsIHJvbGUsICd0b2FzdExlYXZlJywgaW9zTGVhdmVBbmltYXRpb24sIG1kTGVhdmVBbmltYXRpb24sXG4gICAgLyoqXG4gICAgICogRmV0Y2ggdGhlIGNhY2hlZCBwb3NpdGlvbiB0aGF0IHdhcyBjYWxjdWxhdGVkIGJhY2sgaW4gdGhlIHByZXNlbnRcbiAgICAgKiBhbmltYXRpb24uIFdlIGFsd2F5cyB3YW50IHRvIGFuaW1hdGUgdGhlIGRpc21pc3MgZnJvbSB0aGUgc2FtZVxuICAgICAqIHBvc2l0aW9uIHRoZSBwcmVzZW50IHN0b3BwZWQgYXQsIHNvIHRoZSBhbmltYXRpb24gbG9va3MgY29udGludW91cy5cbiAgICAgKi9cbiAgICB7XG4gICAgICBwb3NpdGlvbixcbiAgICAgIHRvcDogKF9hID0gbGFzdFByZXNlbnRlZFBvc2l0aW9uID09PSBudWxsIHx8IGxhc3RQcmVzZW50ZWRQb3NpdGlvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogbGFzdFByZXNlbnRlZFBvc2l0aW9uLnRvcCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJycsXG4gICAgICBib3R0b206IChfYiA9IGxhc3RQcmVzZW50ZWRQb3NpdGlvbiA9PT0gbnVsbCB8fCBsYXN0UHJlc2VudGVkUG9zaXRpb24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGxhc3RQcmVzZW50ZWRQb3NpdGlvbi5ib3R0b20pICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6ICcnXG4gICAgfSk7XG4gICAgaWYgKGRpc21pc3NlZCkge1xuICAgICAgdGhpcy5kZWxlZ2F0ZUNvbnRyb2xsZXIucmVtb3ZlVmlld0Zyb21Eb20oKTtcbiAgICAgIHRoaXMucmV2ZWFsQ29udGVudFRvU2NyZWVuUmVhZGVyID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMubGFzdFByZXNlbnRlZFBvc2l0aW9uID0gdW5kZWZpbmVkO1xuICAgIC8qKlxuICAgICAqIElmIHRoZSBUb2FzdCBoYXMgYSBzd2lwZSBnZXN0dXJlIHRoZW4gd2UgY2FuXG4gICAgICogc2FmZWx5IGRlc3Ryb3kgaXQgbm93IHRoYXQgaXQgaXMgZGlzbWlzc2VkLlxuICAgICAqL1xuICAgIHRoaXMuZGVzdHJveVN3aXBlR2VzdHVyZSgpO1xuICAgIHVubG9jaygpO1xuICAgIHJldHVybiBkaXNtaXNzZWQ7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgdG9hc3QgZGlkIGRpc21pc3MuXG4gICAqL1xuICBvbkRpZERpc21pc3MoKSB7XG4gICAgcmV0dXJuIGV2ZW50TWV0aG9kKHRoaXMuZWwsICdpb25Ub2FzdERpZERpc21pc3MnKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSB0b2FzdCB3aWxsIGRpc21pc3MuXG4gICAqL1xuICBvbldpbGxEaXNtaXNzKCkge1xuICAgIHJldHVybiBldmVudE1ldGhvZCh0aGlzLmVsLCAnaW9uVG9hc3RXaWxsRGlzbWlzcycpO1xuICB9XG4gIGdldEJ1dHRvbnMoKSB7XG4gICAgY29uc3QgYnV0dG9ucyA9IHRoaXMuYnV0dG9ucyA/IHRoaXMuYnV0dG9ucy5tYXAoYiA9PiB7XG4gICAgICByZXR1cm4gdHlwZW9mIGIgPT09ICdzdHJpbmcnID8ge1xuICAgICAgICB0ZXh0OiBiXG4gICAgICB9IDogYjtcbiAgICB9KSA6IFtdO1xuICAgIHJldHVybiBidXR0b25zO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBlbGVtZW50IHNwZWNpZmllZCBieSB0aGUgcG9zaXRpb25BbmNob3IgcHJvcCxcbiAgICogb3IgdW5kZWZpbmVkIGlmIHByb3AncyB2YWx1ZSBpcyBhbiBJRCBzdHJpbmcgYW5kIHRoZSBlbGVtZW50XG4gICAqIGlzIG5vdCBmb3VuZCBpbiB0aGUgRE9NLlxuICAgKi9cbiAgZ2V0QW5jaG9yRWxlbWVudCgpIHtcbiAgICBjb25zdCB7XG4gICAgICBwb3NpdGlvbixcbiAgICAgIHBvc2l0aW9uQW5jaG9yLFxuICAgICAgZWxcbiAgICB9ID0gdGhpcztcbiAgICAvKipcbiAgICAgKiBJZiBwb3NpdGlvbkFuY2hvciBpcyB1bmRlZmluZWQgdGhlblxuICAgICAqIG5vIGFuY2hvciBzaG91bGQgYmUgdXNlZCB3aGVuIHByZXNlbnRpbmcgdGhlIHRvYXN0LlxuICAgICAqL1xuICAgIGlmIChwb3NpdGlvbkFuY2hvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChwb3NpdGlvbiA9PT0gJ21pZGRsZScgJiYgcG9zaXRpb25BbmNob3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcHJpbnRJb25XYXJuaW5nKCdbaW9uLXRvYXN0XSAtIFRoZSBwb3NpdGlvbkFuY2hvciBwcm9wZXJ0eSBpcyBpZ25vcmVkIHdoZW4gdXNpbmcgcG9zaXRpb249XCJtaWRkbGVcIi4nLCB0aGlzLmVsKTtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgcG9zaXRpb25BbmNob3IgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvKipcbiAgICAgICAqIElmIHRoZSBhbmNob3IgaXMgZGVmaW5lZCBhcyBhbiBJRCwgZmluZCB0aGUgZWxlbWVudC5cbiAgICAgICAqIFdlIGRvIHRoaXMgb24gZXZlcnkgcHJlc2VudCBzbyB0aGUgdG9hc3QgZG9lc24ndCBuZWVkXG4gICAgICAgKiB0byBhY2NvdW50IGZvciB0aGUgc3Vycm91bmRpbmcgRE9NIGNoYW5naW5nIHNpbmNlIHRoZVxuICAgICAgICogbGFzdCB0aW1lIGl0IHdhcyBwcmVzZW50ZWQuXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IGZvdW5kRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwb3NpdGlvbkFuY2hvcik7XG4gICAgICBpZiAoZm91bmRFbCA9PT0gbnVsbCkge1xuICAgICAgICBwcmludElvbldhcm5pbmcoYFtpb24tdG9hc3RdIC0gQW4gYW5jaG9yIGVsZW1lbnQgd2l0aCBhbiBJRCBvZiBcIiR7cG9zaXRpb25BbmNob3J9XCIgd2FzIG5vdCBmb3VuZCBpbiB0aGUgRE9NLmAsIGVsKTtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmb3VuZEVsO1xuICAgIH1cbiAgICBpZiAocG9zaXRpb25BbmNob3IgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgcmV0dXJuIHBvc2l0aW9uQW5jaG9yO1xuICAgIH1cbiAgICBwcmludElvbldhcm5pbmcoJ1tpb24tdG9hc3RdIC0gSW52YWxpZCBwb3NpdGlvbkFuY2hvciB2YWx1ZTonLCBwb3NpdGlvbkFuY2hvciwgZWwpO1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgYXN5bmMgYnV0dG9uQ2xpY2soYnV0dG9uKSB7XG4gICAgY29uc3Qgcm9sZSA9IGJ1dHRvbi5yb2xlO1xuICAgIGlmIChpc0NhbmNlbChyb2xlKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZGlzbWlzcyh1bmRlZmluZWQsIHJvbGUpO1xuICAgIH1cbiAgICBjb25zdCBzaG91bGREaXNtaXNzID0gYXdhaXQgdGhpcy5jYWxsQnV0dG9uSGFuZGxlcihidXR0b24pO1xuICAgIGlmIChzaG91bGREaXNtaXNzKSB7XG4gICAgICByZXR1cm4gdGhpcy5kaXNtaXNzKHVuZGVmaW5lZCwgcm9sZSk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuICBhc3luYyBjYWxsQnV0dG9uSGFuZGxlcihidXR0b24pIHtcbiAgICBpZiAoYnV0dG9uID09PSBudWxsIHx8IGJ1dHRvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogYnV0dG9uLmhhbmRsZXIpIHtcbiAgICAgIC8vIGEgaGFuZGxlciBoYXMgYmVlbiBwcm92aWRlZCwgZXhlY3V0ZSBpdFxuICAgICAgLy8gcGFzcyB0aGUgaGFuZGxlciB0aGUgdmFsdWVzIGZyb20gdGhlIGlucHV0c1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcnRuID0gYXdhaXQgc2FmZUNhbGwoYnV0dG9uLmhhbmRsZXIpO1xuICAgICAgICBpZiAocnRuID09PSBmYWxzZSkge1xuICAgICAgICAgIC8vIGlmIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGhhbmRsZXIgaXMgZmFsc2UgdGhlbiBkbyBub3QgZGlzbWlzc1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBwcmludElvbkVycm9yKCdbaW9uLXRvYXN0XSAtIEV4Y2VwdGlvbiBpbiBjYWxsQnV0dG9uSGFuZGxlcjonLCBlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmVuZGVyQnV0dG9ucyhidXR0b25zLCBzaWRlKSB7XG4gICAgaWYgKGJ1dHRvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgIGNvbnN0IGJ1dHRvbkdyb3Vwc0NsYXNzZXMgPSB7XG4gICAgICAndG9hc3QtYnV0dG9uLWdyb3VwJzogdHJ1ZSxcbiAgICAgIFtgdG9hc3QtYnV0dG9uLWdyb3VwLSR7c2lkZX1gXTogdHJ1ZVxuICAgIH07XG4gICAgcmV0dXJuIGgoXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IGJ1dHRvbkdyb3Vwc0NsYXNzZXNcbiAgICB9LCBidXR0b25zLm1hcChiID0+IGgoXCJidXR0b25cIiwgT2JqZWN0LmFzc2lnbih7fSwgYi5odG1sQXR0cmlidXRlcywge1xuICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgIGNsYXNzOiBidXR0b25DbGFzcyhiKSxcbiAgICAgIHRhYkluZGV4OiAwLFxuICAgICAgb25DbGljazogKCkgPT4gdGhpcy5idXR0b25DbGljayhiKSxcbiAgICAgIHBhcnQ6IGJ1dHRvblBhcnQoYilcbiAgICB9KSwgaChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJ0b2FzdC1idXR0b24taW5uZXJcIlxuICAgIH0sIGIuaWNvbiAmJiBoKFwiaW9uLWljb25cIiwge1xuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIixcbiAgICAgIGljb246IGIuaWNvbixcbiAgICAgIHNsb3Q6IGIudGV4dCA9PT0gdW5kZWZpbmVkID8gJ2ljb24tb25seScgOiB1bmRlZmluZWQsXG4gICAgICBjbGFzczogXCJ0b2FzdC1idXR0b24taWNvblwiXG4gICAgfSksIGIudGV4dCksIG1vZGUgPT09ICdtZCcgJiYgaChcImlvbi1yaXBwbGUtZWZmZWN0XCIsIHtcbiAgICAgIHR5cGU6IGIuaWNvbiAhPT0gdW5kZWZpbmVkICYmIGIudGV4dCA9PT0gdW5kZWZpbmVkID8gJ3VuYm91bmRlZCcgOiAnYm91bmRlZCdcbiAgICB9KSkpKTtcbiAgfVxuICAvKipcbiAgICogUmVuZGVyIHRoZSBgbWVzc2FnZWAgcHJvcGVydHkuXG4gICAqIEBwYXJhbSBrZXkgLSBBIGtleSB0byBnaXZlIHRoZSBlbGVtZW50IGEgc3RhYmxlIGlkZW50aXR5LiBUaGlzIGlzIHVzZWQgdG8gaW1wcm92ZSBjb21wYXRpYmlsaXR5IHdpdGggc2NyZWVuIHJlYWRlcnMuXG4gICAqIEBwYXJhbSBhcmlhSGlkZGVuIC0gSWYgXCJ0cnVlXCIgdGhlbiBjb250ZW50IHdpbGwgYmUgaGlkZGVuIGZyb20gc2NyZWVuIHJlYWRlcnMuXG4gICAqL1xuICByZW5kZXJUb2FzdE1lc3NhZ2Uoa2V5LCBhcmlhSGlkZGVuID0gbnVsbCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGN1c3RvbUhUTUxFbmFibGVkLFxuICAgICAgbWVzc2FnZVxuICAgIH0gPSB0aGlzO1xuICAgIGlmIChjdXN0b21IVE1MRW5hYmxlZCkge1xuICAgICAgcmV0dXJuIGgoXCJkaXZcIiwge1xuICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgXCJhcmlhLWhpZGRlblwiOiBhcmlhSGlkZGVuLFxuICAgICAgICBjbGFzczogXCJ0b2FzdC1tZXNzYWdlXCIsXG4gICAgICAgIHBhcnQ6IFwibWVzc2FnZVwiLFxuICAgICAgICBpbm5lckhUTUw6IHNhbml0aXplRE9NU3RyaW5nKG1lc3NhZ2UpXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiBrZXksXG4gICAgICBcImFyaWEtaGlkZGVuXCI6IGFyaWFIaWRkZW4sXG4gICAgICBjbGFzczogXCJ0b2FzdC1tZXNzYWdlXCIsXG4gICAgICBwYXJ0OiBcIm1lc3NhZ2VcIlxuICAgIH0sIG1lc3NhZ2UpO1xuICB9XG4gIC8qKlxuICAgKiBSZW5kZXIgdGhlIGBoZWFkZXJgIHByb3BlcnR5LlxuICAgKiBAcGFyYW0ga2V5IC0gQSBrZXkgdG8gZ2l2ZSB0aGUgZWxlbWVudCBhIHN0YWJsZSBpZGVudGl0eS4gVGhpcyBpcyB1c2VkIHRvIGltcHJvdmUgY29tcGF0aWJpbGl0eSB3aXRoIHNjcmVlbiByZWFkZXJzLlxuICAgKiBAcGFyYW0gYXJpYUhpZGRlbiAtIElmIFwidHJ1ZVwiIHRoZW4gY29udGVudCB3aWxsIGJlIGhpZGRlbiBmcm9tIHNjcmVlbiByZWFkZXJzLlxuICAgKi9cbiAgcmVuZGVySGVhZGVyKGtleSwgYXJpYUhpZGRlbiA9IG51bGwpIHtcbiAgICByZXR1cm4gaChcImRpdlwiLCB7XG4gICAgICBrZXk6IGtleSxcbiAgICAgIGNsYXNzOiBcInRvYXN0LWhlYWRlclwiLFxuICAgICAgXCJhcmlhLWhpZGRlblwiOiBhcmlhSGlkZGVuLFxuICAgICAgcGFydDogXCJoZWFkZXJcIlxuICAgIH0sIHRoaXMuaGVhZGVyKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgbGF5b3V0LFxuICAgICAgZWwsXG4gICAgICByZXZlYWxDb250ZW50VG9TY3JlZW5SZWFkZXIsXG4gICAgICBoZWFkZXIsXG4gICAgICBtZXNzYWdlXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgYWxsQnV0dG9ucyA9IHRoaXMuZ2V0QnV0dG9ucygpO1xuICAgIGNvbnN0IHN0YXJ0QnV0dG9ucyA9IGFsbEJ1dHRvbnMuZmlsdGVyKGIgPT4gYi5zaWRlID09PSAnc3RhcnQnKTtcbiAgICBjb25zdCBlbmRCdXR0b25zID0gYWxsQnV0dG9ucy5maWx0ZXIoYiA9PiBiLnNpZGUgIT09ICdzdGFydCcpO1xuICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgIGNvbnN0IHdyYXBwZXJDbGFzcyA9IHtcbiAgICAgICd0b2FzdC13cmFwcGVyJzogdHJ1ZSxcbiAgICAgIFtgdG9hc3QtJHt0aGlzLnBvc2l0aW9ufWBdOiB0cnVlLFxuICAgICAgW2B0b2FzdC1sYXlvdXQtJHtsYXlvdXR9YF06IHRydWVcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFN0YWNrZWQgYnV0dG9ucyBhcmUgb25seSBtZWFudCB0byBiZVxuICAgICAqICB1c2VkIHdpdGggb25lIHR5cGUgb2YgYnV0dG9uLlxuICAgICAqL1xuICAgIGlmIChsYXlvdXQgPT09ICdzdGFja2VkJyAmJiBzdGFydEJ1dHRvbnMubGVuZ3RoID4gMCAmJiBlbmRCdXR0b25zLmxlbmd0aCA+IDApIHtcbiAgICAgIHByaW50SW9uV2FybmluZygnW2lvbi10b2FzdF0gLSBUaGlzIHRvYXN0IGlzIHVzaW5nIHN0YXJ0IGFuZCBlbmQgYnV0dG9ucyB3aXRoIHRoZSBzdGFja2VkIHRvYXN0IGxheW91dC4gV2UgcmVjb21tZW5kIGZvbGxvd2luZyB0aGUgYmVzdCBwcmFjdGljZSBvZiB1c2luZyBlaXRoZXIgc3RhcnQgb3IgZW5kIGJ1dHRvbnMgd2l0aCB0aGUgc3RhY2tlZCB0b2FzdCBsYXlvdXQuJywgZWwpO1xuICAgIH1cbiAgICByZXR1cm4gaChIb3N0LCBPYmplY3QuYXNzaWduKHtcbiAgICAgIGtleTogJ2QxZWNkOTBjODc3MDBhYWQ0Njg1ZTIzMGNkZDQzMGFhMjg2Yjg3OTEnLFxuICAgICAgdGFiaW5kZXg6IFwiLTFcIlxuICAgIH0sIHRoaXMuaHRtbEF0dHJpYnV0ZXMsIHtcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIHpJbmRleDogYCR7NjAwMDAgKyB0aGlzLm92ZXJsYXlJbmRleH1gXG4gICAgICB9LFxuICAgICAgY2xhc3M6IGNyZWF0ZUNvbG9yQ2xhc3Nlcyh0aGlzLmNvbG9yLCBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBbbW9kZV06IHRydWVcbiAgICAgIH0sIGdldENsYXNzTWFwKHRoaXMuY3NzQ2xhc3MpKSwge1xuICAgICAgICAnb3ZlcmxheS1oaWRkZW4nOiB0cnVlLFxuICAgICAgICAndG9hc3QtdHJhbnNsdWNlbnQnOiB0aGlzLnRyYW5zbHVjZW50XG4gICAgICB9KSksXG4gICAgICBvbklvblRvYXN0V2lsbERpc21pc3M6IHRoaXMuZGlzcGF0Y2hDYW5jZWxIYW5kbGVyXG4gICAgfSksIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnNGJmYzg2MzQxNzMyNGRlNjllMjIyMDU0ZDVjZjljNDUyMDM4YjQxZScsXG4gICAgICBjbGFzczogd3JhcHBlckNsYXNzXG4gICAgfSwgaChcImRpdlwiLCB7XG4gICAgICBrZXk6ICczNDE3OTQwYWZlYzAzOTJlODFiN2Q1NGM3Y2IwMGYzYWI2YzMwZDQ3JyxcbiAgICAgIGNsYXNzOiBcInRvYXN0LWNvbnRhaW5lclwiLFxuICAgICAgcGFydDogXCJjb250YWluZXJcIlxuICAgIH0sIHRoaXMucmVuZGVyQnV0dG9ucyhzdGFydEJ1dHRvbnMsICdzdGFydCcpLCB0aGlzLmljb24gIT09IHVuZGVmaW5lZCAmJiBoKFwiaW9uLWljb25cIiwge1xuICAgICAga2V5OiAnNmJmODc4ZmJjODVjMDFlMWU1ZmFhOWQ5N2Q0NjI1NWE2NTExYTk1MicsXG4gICAgICBjbGFzczogXCJ0b2FzdC1pY29uXCIsXG4gICAgICBwYXJ0OiBcImljb25cIixcbiAgICAgIGljb246IHRoaXMuaWNvbixcbiAgICAgIGxhenk6IGZhbHNlLFxuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIlxuICAgIH0pLCBoKFwiZGl2XCIsIHtcbiAgICAgIGtleTogJzU0YjUwMDM0OGE5YzM3NjYwYzNhZmYzNzQzNmQ5MTg4ZTQzNzQ5NDcnLFxuICAgICAgY2xhc3M6IFwidG9hc3QtY29udGVudFwiLFxuICAgICAgcm9sZTogXCJzdGF0dXNcIixcbiAgICAgIFwiYXJpYS1hdG9taWNcIjogXCJ0cnVlXCIsXG4gICAgICBcImFyaWEtbGl2ZVwiOiBcInBvbGl0ZVwiXG4gICAgfSwgIXJldmVhbENvbnRlbnRUb1NjcmVlblJlYWRlciAmJiBoZWFkZXIgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnJlbmRlckhlYWRlcignb2xkSGVhZGVyJywgJ3RydWUnKSwgIXJldmVhbENvbnRlbnRUb1NjcmVlblJlYWRlciAmJiBtZXNzYWdlICE9PSB1bmRlZmluZWQgJiYgdGhpcy5yZW5kZXJUb2FzdE1lc3NhZ2UoJ29sZE1lc3NhZ2UnLCAndHJ1ZScpLCByZXZlYWxDb250ZW50VG9TY3JlZW5SZWFkZXIgJiYgaGVhZGVyICE9PSB1bmRlZmluZWQgJiYgdGhpcy5yZW5kZXJIZWFkZXIoJ2hlYWRlcicpLCByZXZlYWxDb250ZW50VG9TY3JlZW5SZWFkZXIgJiYgbWVzc2FnZSAhPT0gdW5kZWZpbmVkICYmIHRoaXMucmVuZGVyVG9hc3RNZXNzYWdlKCdoZWFkZXInKSksIHRoaXMucmVuZGVyQnV0dG9ucyhlbmRCdXR0b25zLCAnZW5kJykpKSk7XG4gIH1cbiAgZ2V0IGVsKCkge1xuICAgIHJldHVybiBnZXRFbGVtZW50KHRoaXMpO1xuICB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwic3dpcGVHZXN0dXJlXCI6IFtcInN3aXBlR2VzdHVyZUNoYW5nZWRcIl0sXG4gICAgICBcImlzT3BlblwiOiBbXCJvbklzT3BlbkNoYW5nZVwiXSxcbiAgICAgIFwidHJpZ2dlclwiOiBbXCJ0cmlnZ2VyQ2hhbmdlZFwiXVxuICAgIH07XG4gIH1cbn07XG5jb25zdCBidXR0b25DbGFzcyA9IGJ1dHRvbiA9PiB7XG4gIHJldHVybiB7XG4gICAgJ3RvYXN0LWJ1dHRvbic6IHRydWUsXG4gICAgJ3RvYXN0LWJ1dHRvbi1pY29uLW9ubHknOiBidXR0b24uaWNvbiAhPT0gdW5kZWZpbmVkICYmIGJ1dHRvbi50ZXh0ID09PSB1bmRlZmluZWQsXG4gICAgW2B0b2FzdC1idXR0b24tJHtidXR0b24ucm9sZX1gXTogYnV0dG9uLnJvbGUgIT09IHVuZGVmaW5lZCxcbiAgICAnaW9uLWZvY3VzYWJsZSc6IHRydWUsXG4gICAgJ2lvbi1hY3RpdmF0YWJsZSc6IHRydWVcbiAgfTtcbn07XG5jb25zdCBidXR0b25QYXJ0ID0gYnV0dG9uID0+IHtcbiAgcmV0dXJuIGlzQ2FuY2VsKGJ1dHRvbi5yb2xlKSA/ICdidXR0b24gY2FuY2VsJyA6ICdidXR0b24nO1xufTtcblRvYXN0LnN0eWxlID0ge1xuICBpb3M6IHRvYXN0SW9zQ3NzLFxuICBtZDogdG9hc3RNZENzc1xufTtcbmV4cG9ydCB7IFRvYXN0IGFzIGlvbl90b2FzdCB9OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtDQSxTQUFTLHFCQUFxQixVQUFVLGdCQUFnQixNQUFNLE9BQU87QUFLbkUsTUFBSTtBQUNKLE1BQUksU0FBUyxNQUFNO0FBQ2pCLGFBQVMsYUFBYSxRQUFRLElBQUk7QUFBQSxFQUNwQyxPQUFPO0FBQ0wsYUFBUyxhQUFhLFFBQVEsS0FBSztBQUFBLEVBQ3JDO0FBT0EsTUFBSSxrQkFBa0IsS0FBSztBQUN6Qix5QkFBcUIsZ0JBQWdCLEtBQUs7QUFDMUMsVUFBTSxNQUFNLGVBQWUsc0JBQXNCO0FBQ2pELFFBQUksYUFBYSxPQUFPO0FBQ3RCLGdCQUFVLElBQUk7QUFBQSxJQUNoQixXQUFXLGFBQWEsVUFBVTtBQU1oQyxnQkFBVSxJQUFJLGNBQWMsSUFBSTtBQUFBLElBQ2xDO0FBS0EsV0FBTztBQUFBLE1BQ0wsS0FBSyxHQUFHLE1BQU07QUFBQSxNQUNkLFFBQVEsR0FBRyxNQUFNO0FBQUEsSUFDbkI7QUFBQSxFQUNGLE9BQU87QUFDTCxXQUFPO0FBQUEsTUFDTCxLQUFLLFFBQVEs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
