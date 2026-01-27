import {
  KEYBOARD_DID_OPEN
} from "./chunk-HPEO5HJC.js";
import {
  disableContentScrollY,
  findClosestIonContent,
  findIonContent,
  isIonContent,
  printIonContentErrorMsg,
  resetContentScrollY
} from "./chunk-WRI2MF6U.js";
import "./chunk-QTAT7GCA.js";
import {
  createLockController
} from "./chunk-MEM7IN4A.js";
import {
  getCapacitor
} from "./chunk-VZXYYFOL.js";
import {
  getTimeGivenProgression
} from "./chunk-H7W7X3R4.js";
import {
  BACKDROP,
  FOCUS_TRAP_DISABLE_CLASS,
  GESTURE,
  OVERLAY_GESTURE_PRIORITY,
  createTriggerController,
  dismiss,
  eventMethod,
  prepareOverlay,
  present,
  setOverlayId
} from "./chunk-QATEHYOA.js";
import {
  CoreDelegate,
  attachComponent,
  detachComponent
} from "./chunk-3MKGIXIK.js";
import {
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
  deepReady,
  waitForMount
} from "./chunk-LYXK2PRG.js";
import {
  createAnimation
} from "./chunk-2BRJTTQT.js";
import {
  clamp,
  getElementRoot,
  hasLazyBuild,
  inheritAttributes,
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
  printIonWarning,
  registerInstance,
  writeTask
} from "./chunk-BFPTXCSH.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// node_modules/@ionic/core/dist/esm/ion-modal.entry.js
var Style;
(function(Style2) {
  Style2["Dark"] = "DARK";
  Style2["Light"] = "LIGHT";
  Style2["Default"] = "DEFAULT";
})(Style || (Style = {}));
var StatusBar = {
  getEngine() {
    const capacitor = getCapacitor();
    if (capacitor === null || capacitor === void 0 ? void 0 : capacitor.isPluginAvailable("StatusBar")) {
      return capacitor.Plugins.StatusBar;
    }
    return void 0;
  },
  setStyle(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    engine.setStyle(options);
  },
  getStyle: function() {
    return __async(this, null, function* () {
      const engine = this.getEngine();
      if (!engine) {
        return Style.Default;
      }
      const {
        style
      } = yield engine.getInfo();
      return style;
    });
  }
};
var getBackdropValueForSheet = (x, backdropBreakpoint) => {
  if (backdropBreakpoint === 1) {
    return 0;
  }
  const slope = 1 / (1 - backdropBreakpoint);
  const b = -(backdropBreakpoint * slope);
  return x * slope + b;
};
var setCardStatusBarDark = () => {
  if (!win || win.innerWidth >= 768) {
    return;
  }
  StatusBar.setStyle({
    style: Style.Dark
  });
};
var setCardStatusBarDefault = (defaultStyle = Style.Default) => {
  if (!win || win.innerWidth >= 768) {
    return;
  }
  StatusBar.setStyle({
    style: defaultStyle
  });
};
var handleCanDismiss = (el, animation) => __async(null, null, function* () {
  if (typeof el.canDismiss !== "function") {
    return;
  }
  const shouldDismiss = yield el.canDismiss(void 0, GESTURE);
  if (!shouldDismiss) {
    return;
  }
  if (animation.isRunning()) {
    animation.onFinish(() => {
      el.dismiss(void 0, "handler");
    }, {
      oneTimeCallback: true
    });
  } else {
    el.dismiss(void 0, "handler");
  }
});
var calculateSpringStep = (t) => {
  return 255275e-8 * 2.71828 ** (-14.9619 * t) - 1.00255 * 2.71828 ** (-0.0380968 * t) + 1;
};
var SwipeToCloseDefaults = {
  MIN_PRESENTING_SCALE: 0.915
};
var createSwipeToCloseGesture = (el, animation, statusBarStyle, onDismiss) => {
  const DISMISS_THRESHOLD = 0.5;
  const height = el.offsetHeight;
  let isOpen = false;
  let canDismissBlocksGesture = false;
  let contentEl = null;
  let scrollEl = null;
  const canDismissMaxStep = 0.2;
  let initialScrollY = true;
  let lastStep = 0;
  const getScrollY = () => {
    if (contentEl && isIonContent(contentEl)) {
      return contentEl.scrollY;
    } else {
      return true;
    }
  };
  const canStart = (detail) => {
    const target = detail.event.target;
    if (target === null || !target.closest) {
      return true;
    }
    contentEl = findClosestIonContent(target);
    if (contentEl) {
      if (isIonContent(contentEl)) {
        const root = getElementRoot(contentEl);
        scrollEl = root.querySelector(".inner-scroll");
      } else {
        scrollEl = contentEl;
      }
      const hasRefresherInContent = !!contentEl.querySelector("ion-refresher");
      return !hasRefresherInContent && scrollEl.scrollTop === 0;
    }
    const footer = target.closest("ion-footer");
    if (footer === null) {
      return true;
    }
    return false;
  };
  const onStart = (detail) => {
    const {
      deltaY
    } = detail;
    initialScrollY = getScrollY();
    canDismissBlocksGesture = el.canDismiss !== void 0 && el.canDismiss !== true;
    if (deltaY > 0 && contentEl) {
      disableContentScrollY(contentEl);
    }
    animation.progressStart(true, isOpen ? 1 : 0);
  };
  const onMove = (detail) => {
    const {
      deltaY
    } = detail;
    if (deltaY > 0 && contentEl) {
      disableContentScrollY(contentEl);
    }
    const step = detail.deltaY / height;
    const isAttemptingDismissWithCanDismiss = step >= 0 && canDismissBlocksGesture;
    const maxStep = isAttemptingDismissWithCanDismiss ? canDismissMaxStep : 0.9999;
    const processedStep = isAttemptingDismissWithCanDismiss ? calculateSpringStep(step / maxStep) : step;
    const clampedStep = clamp(1e-4, processedStep, maxStep);
    animation.progressStep(clampedStep);
    if (clampedStep >= DISMISS_THRESHOLD && lastStep < DISMISS_THRESHOLD) {
      setCardStatusBarDefault(statusBarStyle);
    } else if (clampedStep < DISMISS_THRESHOLD && lastStep >= DISMISS_THRESHOLD) {
      setCardStatusBarDark();
    }
    lastStep = clampedStep;
  };
  const onEnd = (detail) => {
    const velocity = detail.velocityY;
    const step = detail.deltaY / height;
    const isAttemptingDismissWithCanDismiss = step >= 0 && canDismissBlocksGesture;
    const maxStep = isAttemptingDismissWithCanDismiss ? canDismissMaxStep : 0.9999;
    const processedStep = isAttemptingDismissWithCanDismiss ? calculateSpringStep(step / maxStep) : step;
    const clampedStep = clamp(1e-4, processedStep, maxStep);
    const threshold = (detail.deltaY + velocity * 1e3) / height;
    const shouldComplete = !isAttemptingDismissWithCanDismiss && threshold >= DISMISS_THRESHOLD;
    let newStepValue = shouldComplete ? -1e-3 : 1e-3;
    if (!shouldComplete) {
      animation.easing("cubic-bezier(1, 0, 0.68, 0.28)");
      newStepValue += getTimeGivenProgression([0, 0], [1, 0], [0.68, 0.28], [1, 1], clampedStep)[0];
    } else {
      animation.easing("cubic-bezier(0.32, 0.72, 0, 1)");
      newStepValue += getTimeGivenProgression([0, 0], [0.32, 0.72], [0, 1], [1, 1], clampedStep)[0];
    }
    const duration = shouldComplete ? computeDuration(step * height, velocity) : computeDuration((1 - clampedStep) * height, velocity);
    isOpen = shouldComplete;
    gesture.enable(false);
    if (contentEl) {
      resetContentScrollY(contentEl, initialScrollY);
    }
    animation.onFinish(() => {
      if (!shouldComplete) {
        gesture.enable(true);
      }
    }).progressEnd(shouldComplete ? 1 : 0, newStepValue, duration);
    if (isAttemptingDismissWithCanDismiss && clampedStep > maxStep / 4) {
      handleCanDismiss(el, animation);
    } else if (shouldComplete) {
      onDismiss();
    }
  };
  const gesture = createGesture({
    el,
    gestureName: "modalSwipeToClose",
    gesturePriority: OVERLAY_GESTURE_PRIORITY,
    direction: "y",
    threshold: 10,
    canStart,
    onStart,
    onMove,
    onEnd
  });
  return gesture;
};
var computeDuration = (remaining, velocity) => {
  return clamp(400, remaining / Math.abs(velocity * 1.1), 500);
};
var createSheetEnterAnimation = (opts) => {
  const {
    currentBreakpoint,
    backdropBreakpoint,
    expandToScroll
  } = opts;
  const shouldShowBackdrop = backdropBreakpoint === void 0 || backdropBreakpoint < currentBreakpoint;
  const initialBackdrop = shouldShowBackdrop ? `calc(var(--backdrop-opacity) * ${currentBreakpoint})` : "0";
  const backdropAnimation = createAnimation("backdropAnimation").fromTo("opacity", 0, initialBackdrop);
  if (shouldShowBackdrop) {
    backdropAnimation.beforeStyles({
      "pointer-events": "none"
    }).afterClearStyles(["pointer-events"]);
  }
  const wrapperAnimation = createAnimation("wrapperAnimation").keyframes([{
    offset: 0,
    opacity: 1,
    transform: "translateY(100%)"
  }, {
    offset: 1,
    opacity: 1,
    transform: `translateY(${100 - currentBreakpoint * 100}%)`
  }]);
  const contentAnimation = !expandToScroll ? createAnimation("contentAnimation").keyframes([{
    offset: 0,
    opacity: 1,
    maxHeight: `${(1 - currentBreakpoint) * 100}%`
  }, {
    offset: 1,
    opacity: 1,
    maxHeight: `${currentBreakpoint * 100}%`
  }]) : void 0;
  return {
    wrapperAnimation,
    backdropAnimation,
    contentAnimation
  };
};
var createSheetLeaveAnimation = (opts) => {
  const {
    currentBreakpoint,
    backdropBreakpoint
  } = opts;
  const backdropValue = `calc(var(--backdrop-opacity) * ${getBackdropValueForSheet(currentBreakpoint, backdropBreakpoint)})`;
  const defaultBackdrop = [{
    offset: 0,
    opacity: backdropValue
  }, {
    offset: 1,
    opacity: 0
  }];
  const customBackdrop = [{
    offset: 0,
    opacity: backdropValue
  }, {
    offset: backdropBreakpoint,
    opacity: 0
  }, {
    offset: 1,
    opacity: 0
  }];
  const backdropAnimation = createAnimation("backdropAnimation").keyframes(backdropBreakpoint !== 0 ? customBackdrop : defaultBackdrop);
  const wrapperAnimation = createAnimation("wrapperAnimation").keyframes([{
    offset: 0,
    opacity: 1,
    transform: `translateY(${100 - currentBreakpoint * 100}%)`
  }, {
    offset: 1,
    opacity: 1,
    transform: `translateY(100%)`
  }]);
  return {
    wrapperAnimation,
    backdropAnimation
  };
};
var createEnterAnimation$1 = () => {
  const backdropAnimation = createAnimation().fromTo("opacity", 0.01, "var(--backdrop-opacity)").beforeStyles({
    "pointer-events": "none"
  }).afterClearStyles(["pointer-events"]);
  const wrapperAnimation = createAnimation().fromTo("transform", "translateY(100vh)", "translateY(0vh)");
  return {
    backdropAnimation,
    wrapperAnimation,
    contentAnimation: void 0
  };
};
var iosEnterAnimation = (baseEl, opts) => {
  const {
    presentingEl,
    currentBreakpoint,
    expandToScroll
  } = opts;
  const root = getElementRoot(baseEl);
  const {
    wrapperAnimation,
    backdropAnimation,
    contentAnimation
  } = currentBreakpoint !== void 0 ? createSheetEnterAnimation(opts) : createEnterAnimation$1();
  backdropAnimation.addElement(root.querySelector("ion-backdrop"));
  wrapperAnimation.addElement(root.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({
    opacity: 1
  });
  !expandToScroll && (contentAnimation === null || contentAnimation === void 0 ? void 0 : contentAnimation.addElement(baseEl.querySelector(".ion-page")));
  const baseAnimation = createAnimation("entering-base").addElement(baseEl).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation([wrapperAnimation]);
  if (contentAnimation) {
    baseAnimation.addAnimation(contentAnimation);
  }
  if (presentingEl) {
    const isPortrait = window.innerWidth < 768;
    const hasCardModal = presentingEl.tagName === "ION-MODAL" && presentingEl.presentingElement !== void 0;
    const presentingElRoot = getElementRoot(presentingEl);
    const presentingAnimation = createAnimation().beforeStyles({
      transform: "translateY(0)",
      "transform-origin": "top center",
      overflow: "hidden"
    });
    const bodyEl = document.body;
    if (isPortrait) {
      const transformOffset = !CSS.supports("width", "max(0px, 1px)") ? "30px" : "max(30px, var(--ion-safe-area-top))";
      const modalTransform = hasCardModal ? "-10px" : transformOffset;
      const toPresentingScale = SwipeToCloseDefaults.MIN_PRESENTING_SCALE;
      const finalTransform = `translateY(${modalTransform}) scale(${toPresentingScale})`;
      presentingAnimation.afterStyles({
        transform: finalTransform
      }).beforeAddWrite(() => bodyEl.style.setProperty("background-color", "black")).addElement(presentingEl).keyframes([{
        offset: 0,
        filter: "contrast(1)",
        transform: "translateY(0px) scale(1)",
        borderRadius: "0px"
      }, {
        offset: 1,
        filter: "contrast(0.85)",
        transform: finalTransform,
        borderRadius: "10px 10px 0 0"
      }]);
      baseAnimation.addAnimation(presentingAnimation);
    } else {
      baseAnimation.addAnimation(backdropAnimation);
      if (!hasCardModal) {
        wrapperAnimation.fromTo("opacity", "0", "1");
      } else {
        const toPresentingScale = hasCardModal ? SwipeToCloseDefaults.MIN_PRESENTING_SCALE : 1;
        const finalTransform = `translateY(-10px) scale(${toPresentingScale})`;
        presentingAnimation.afterStyles({
          transform: finalTransform
        }).addElement(presentingElRoot.querySelector(".modal-wrapper")).keyframes([{
          offset: 0,
          filter: "contrast(1)",
          transform: "translateY(0) scale(1)"
        }, {
          offset: 1,
          filter: "contrast(0.85)",
          transform: finalTransform
        }]);
        const shadowAnimation = createAnimation().afterStyles({
          transform: finalTransform
        }).addElement(presentingElRoot.querySelector(".modal-shadow")).keyframes([{
          offset: 0,
          opacity: "1",
          transform: "translateY(0) scale(1)"
        }, {
          offset: 1,
          opacity: "0",
          transform: finalTransform
        }]);
        baseAnimation.addAnimation([presentingAnimation, shadowAnimation]);
      }
    }
  } else {
    baseAnimation.addAnimation(backdropAnimation);
  }
  return baseAnimation;
};
var createLeaveAnimation$1 = () => {
  const backdropAnimation = createAnimation().fromTo("opacity", "var(--backdrop-opacity)", 0);
  const wrapperAnimation = createAnimation().fromTo("transform", "translateY(0vh)", "translateY(100vh)");
  return {
    backdropAnimation,
    wrapperAnimation
  };
};
var iosLeaveAnimation = (baseEl, opts, duration = 500) => {
  const {
    presentingEl,
    currentBreakpoint
  } = opts;
  const root = getElementRoot(baseEl);
  const {
    wrapperAnimation,
    backdropAnimation
  } = currentBreakpoint !== void 0 ? createSheetLeaveAnimation(opts) : createLeaveAnimation$1();
  backdropAnimation.addElement(root.querySelector("ion-backdrop"));
  wrapperAnimation.addElement(root.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({
    opacity: 1
  });
  const baseAnimation = createAnimation("leaving-base").addElement(baseEl).easing("cubic-bezier(0.32,0.72,0,1)").duration(duration).addAnimation(wrapperAnimation);
  if (presentingEl) {
    const isPortrait = window.innerWidth < 768;
    const hasCardModal = presentingEl.tagName === "ION-MODAL" && presentingEl.presentingElement !== void 0;
    const presentingElRoot = getElementRoot(presentingEl);
    const presentingAnimation = createAnimation().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish((currentStep) => {
      if (currentStep !== 1) {
        return;
      }
      presentingEl.style.setProperty("overflow", "");
      const numModals = Array.from(bodyEl.querySelectorAll("ion-modal:not(.overlay-hidden)")).filter((m) => m.presentingElement !== void 0).length;
      if (numModals <= 1) {
        bodyEl.style.setProperty("background-color", "");
      }
    });
    const bodyEl = document.body;
    if (isPortrait) {
      const transformOffset = !CSS.supports("width", "max(0px, 1px)") ? "30px" : "max(30px, var(--ion-safe-area-top))";
      const modalTransform = hasCardModal ? "-10px" : transformOffset;
      const toPresentingScale = SwipeToCloseDefaults.MIN_PRESENTING_SCALE;
      const finalTransform = `translateY(${modalTransform}) scale(${toPresentingScale})`;
      presentingAnimation.addElement(presentingEl).keyframes([{
        offset: 0,
        filter: "contrast(0.85)",
        transform: finalTransform,
        borderRadius: "10px 10px 0 0"
      }, {
        offset: 1,
        filter: "contrast(1)",
        transform: "translateY(0px) scale(1)",
        borderRadius: "0px"
      }]);
      baseAnimation.addAnimation(presentingAnimation);
    } else {
      baseAnimation.addAnimation(backdropAnimation);
      if (!hasCardModal) {
        wrapperAnimation.fromTo("opacity", "1", "0");
      } else {
        const toPresentingScale = hasCardModal ? SwipeToCloseDefaults.MIN_PRESENTING_SCALE : 1;
        const finalTransform = `translateY(-10px) scale(${toPresentingScale})`;
        presentingAnimation.addElement(presentingElRoot.querySelector(".modal-wrapper")).afterStyles({
          transform: "translate3d(0, 0, 0)"
        }).keyframes([{
          offset: 0,
          filter: "contrast(0.85)",
          transform: finalTransform
        }, {
          offset: 1,
          filter: "contrast(1)",
          transform: "translateY(0) scale(1)"
        }]);
        const shadowAnimation = createAnimation().addElement(presentingElRoot.querySelector(".modal-shadow")).afterStyles({
          transform: "translateY(0) scale(1)"
        }).keyframes([{
          offset: 0,
          opacity: "0",
          transform: finalTransform
        }, {
          offset: 1,
          opacity: "1",
          transform: "translateY(0) scale(1)"
        }]);
        baseAnimation.addAnimation([presentingAnimation, shadowAnimation]);
      }
    }
  } else {
    baseAnimation.addAnimation(backdropAnimation);
  }
  return baseAnimation;
};
var portraitToLandscapeTransition = (baseEl, opts, duration = 300) => {
  const {
    presentingEl
  } = opts;
  if (!presentingEl) {
    return createAnimation("portrait-to-landscape-transition");
  }
  const presentingElIsCardModal = presentingEl.tagName === "ION-MODAL" && presentingEl.presentingElement !== void 0;
  const presentingElRoot = getElementRoot(presentingEl);
  const bodyEl = document.body;
  const baseAnimation = createAnimation("portrait-to-landscape-transition").addElement(baseEl).easing("cubic-bezier(0.32,0.72,0,1)").duration(duration);
  const presentingAnimation = createAnimation().beforeStyles({
    transform: "translateY(0)",
    "transform-origin": "top center",
    overflow: "hidden"
  });
  if (!presentingElIsCardModal) {
    const root = getElementRoot(baseEl);
    const wrapperAnimation = createAnimation().addElement(root.querySelectorAll(".modal-wrapper, .modal-shadow")).fromTo("opacity", "1", "1");
    const backdropAnimation = createAnimation().addElement(root.querySelector("ion-backdrop")).fromTo("opacity", "var(--backdrop-opacity)", "var(--backdrop-opacity)");
    const transformOffset = !CSS.supports("width", "max(0px, 1px)") ? "30px" : "max(30px, var(--ion-safe-area-top))";
    const toPresentingScale = SwipeToCloseDefaults.MIN_PRESENTING_SCALE;
    const fromTransform = `translateY(${transformOffset}) scale(${toPresentingScale})`;
    presentingAnimation.addElement(presentingEl).afterStyles({
      transform: "translateY(0px) scale(1)",
      "border-radius": "0px"
    }).beforeAddWrite(() => bodyEl.style.setProperty("background-color", "")).fromTo("transform", fromTransform, "translateY(0px) scale(1)").fromTo("filter", "contrast(0.85)", "contrast(1)").fromTo("border-radius", "10px 10px 0 0", "0px");
    baseAnimation.addAnimation([presentingAnimation, wrapperAnimation, backdropAnimation]);
  } else {
    const toPresentingScale = SwipeToCloseDefaults.MIN_PRESENTING_SCALE;
    const fromTransform = `translateY(-10px) scale(${toPresentingScale})`;
    const toTransform = `translateY(0px) scale(1)`;
    presentingAnimation.addElement(presentingEl).afterStyles({
      transform: toTransform
    }).fromTo("transform", fromTransform, toTransform).fromTo("filter", "contrast(0.85)", "contrast(1)");
    const shadowAnimation = createAnimation().addElement(presentingElRoot.querySelector(".modal-shadow")).afterStyles({
      transform: toTransform,
      opacity: "0"
    }).fromTo("transform", fromTransform, toTransform);
    baseAnimation.addAnimation([presentingAnimation, shadowAnimation]);
  }
  return baseAnimation;
};
var landscapeToPortraitTransition = (baseEl, opts, duration = 300) => {
  const {
    presentingEl
  } = opts;
  if (!presentingEl) {
    return createAnimation("landscape-to-portrait-transition");
  }
  const presentingElIsCardModal = presentingEl.tagName === "ION-MODAL" && presentingEl.presentingElement !== void 0;
  const presentingElRoot = getElementRoot(presentingEl);
  const bodyEl = document.body;
  const baseAnimation = createAnimation("landscape-to-portrait-transition").addElement(baseEl).easing("cubic-bezier(0.32,0.72,0,1)").duration(duration);
  const presentingAnimation = createAnimation().beforeStyles({
    transform: "translateY(0)",
    "transform-origin": "top center",
    overflow: "hidden"
  });
  if (!presentingElIsCardModal) {
    const root = getElementRoot(baseEl);
    const wrapperAnimation = createAnimation().addElement(root.querySelectorAll(".modal-wrapper, .modal-shadow")).fromTo("opacity", "1", "1");
    const backdropAnimation = createAnimation().addElement(root.querySelector("ion-backdrop")).fromTo("opacity", "var(--backdrop-opacity)", "var(--backdrop-opacity)");
    const transformOffset = !CSS.supports("width", "max(0px, 1px)") ? "30px" : "max(30px, var(--ion-safe-area-top))";
    const toPresentingScale = SwipeToCloseDefaults.MIN_PRESENTING_SCALE;
    const toTransform = `translateY(${transformOffset}) scale(${toPresentingScale})`;
    presentingAnimation.addElement(presentingEl).afterStyles({
      transform: toTransform
    }).beforeAddWrite(() => bodyEl.style.setProperty("background-color", "black")).keyframes([{
      offset: 0,
      transform: "translateY(0px) scale(1)",
      filter: "contrast(1)",
      borderRadius: "0px"
    }, {
      offset: 0.2,
      transform: "translateY(0px) scale(1)",
      filter: "contrast(1)",
      borderRadius: "10px 10px 0 0"
    }, {
      offset: 1,
      transform: toTransform,
      filter: "contrast(0.85)",
      borderRadius: "10px 10px 0 0"
    }]);
    baseAnimation.addAnimation([presentingAnimation, wrapperAnimation, backdropAnimation]);
  } else {
    const toPresentingScale = SwipeToCloseDefaults.MIN_PRESENTING_SCALE;
    const fromTransform = `translateY(-10px) scale(${toPresentingScale})`;
    const toTransform = `translateY(0) scale(1)`;
    presentingAnimation.addElement(presentingEl).afterStyles({
      transform: toTransform
    }).fromTo("transform", fromTransform, toTransform);
    const shadowAnimation = createAnimation().addElement(presentingElRoot.querySelector(".modal-shadow")).afterStyles({
      transform: toTransform,
      opacity: "0"
    }).fromTo("transform", fromTransform, toTransform);
    baseAnimation.addAnimation([presentingAnimation, shadowAnimation]);
  }
  return baseAnimation;
};
var createEnterAnimation = () => {
  const backdropAnimation = createAnimation().fromTo("opacity", 0.01, "var(--backdrop-opacity)").beforeStyles({
    "pointer-events": "none"
  }).afterClearStyles(["pointer-events"]);
  const wrapperAnimation = createAnimation().keyframes([{
    offset: 0,
    opacity: 0.01,
    transform: "translateY(40px)"
  }, {
    offset: 1,
    opacity: 1,
    transform: `translateY(0px)`
  }]);
  return {
    backdropAnimation,
    wrapperAnimation,
    contentAnimation: void 0
  };
};
var mdEnterAnimation = (baseEl, opts) => {
  const {
    currentBreakpoint,
    expandToScroll
  } = opts;
  const root = getElementRoot(baseEl);
  const {
    wrapperAnimation,
    backdropAnimation,
    contentAnimation
  } = currentBreakpoint !== void 0 ? createSheetEnterAnimation(opts) : createEnterAnimation();
  backdropAnimation.addElement(root.querySelector("ion-backdrop"));
  wrapperAnimation.addElement(root.querySelector(".modal-wrapper"));
  !expandToScroll && (contentAnimation === null || contentAnimation === void 0 ? void 0 : contentAnimation.addElement(baseEl.querySelector(".ion-page")));
  const baseAnimation = createAnimation().addElement(baseEl).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([backdropAnimation, wrapperAnimation]);
  if (contentAnimation) {
    baseAnimation.addAnimation(contentAnimation);
  }
  return baseAnimation;
};
var createLeaveAnimation = () => {
  const backdropAnimation = createAnimation().fromTo("opacity", "var(--backdrop-opacity)", 0);
  const wrapperAnimation = createAnimation().keyframes([{
    offset: 0,
    opacity: 0.99,
    transform: `translateY(0px)`
  }, {
    offset: 1,
    opacity: 0,
    transform: "translateY(40px)"
  }]);
  return {
    backdropAnimation,
    wrapperAnimation
  };
};
var mdLeaveAnimation = (baseEl, opts) => {
  const {
    currentBreakpoint
  } = opts;
  const root = getElementRoot(baseEl);
  const {
    wrapperAnimation,
    backdropAnimation
  } = currentBreakpoint !== void 0 ? createSheetLeaveAnimation(opts) : createLeaveAnimation();
  backdropAnimation.addElement(root.querySelector("ion-backdrop"));
  wrapperAnimation.addElement(root.querySelector(".modal-wrapper"));
  const baseAnimation = createAnimation().easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([backdropAnimation, wrapperAnimation]);
  return baseAnimation;
};
var createSheetGesture = (baseEl, backdropEl, wrapperEl, initialBreakpoint, backdropBreakpoint, animation, breakpoints = [], expandToScroll, getCurrentBreakpoint, onDismiss, onBreakpointChange) => {
  const defaultBackdrop = [{
    offset: 0,
    opacity: "var(--backdrop-opacity)"
  }, {
    offset: 1,
    opacity: 0.01
  }];
  const customBackdrop = [{
    offset: 0,
    opacity: "var(--backdrop-opacity)"
  }, {
    offset: 1 - backdropBreakpoint,
    opacity: 0
  }, {
    offset: 1,
    opacity: 0
  }];
  const SheetDefaults = {
    WRAPPER_KEYFRAMES: [{
      offset: 0,
      transform: "translateY(0%)"
    }, {
      offset: 1,
      transform: "translateY(100%)"
    }],
    BACKDROP_KEYFRAMES: backdropBreakpoint !== 0 ? customBackdrop : defaultBackdrop,
    CONTENT_KEYFRAMES: [{
      offset: 0,
      maxHeight: "100%"
    }, {
      offset: 1,
      maxHeight: "0%"
    }]
  };
  const contentEl = baseEl.querySelector("ion-content");
  const height = wrapperEl.clientHeight;
  let currentBreakpoint = initialBreakpoint;
  let offset = 0;
  let canDismissBlocksGesture = false;
  let cachedScrollEl = null;
  let cachedFooterEls = null;
  let cachedFooterYPosition = null;
  let currentFooterState = null;
  const canDismissMaxStep = 0.95;
  const maxBreakpoint = breakpoints[breakpoints.length - 1];
  const minBreakpoint = breakpoints[0];
  const wrapperAnimation = animation.childAnimations.find((ani) => ani.id === "wrapperAnimation");
  const backdropAnimation = animation.childAnimations.find((ani) => ani.id === "backdropAnimation");
  const contentAnimation = animation.childAnimations.find((ani) => ani.id === "contentAnimation");
  const enableBackdrop = () => {
    baseEl.style.setProperty("pointer-events", "auto");
    backdropEl.style.setProperty("pointer-events", "auto");
    baseEl.classList.remove(FOCUS_TRAP_DISABLE_CLASS);
  };
  const disableBackdrop = () => {
    baseEl.style.setProperty("pointer-events", "none");
    backdropEl.style.setProperty("pointer-events", "none");
    baseEl.classList.add(FOCUS_TRAP_DISABLE_CLASS);
  };
  const swapFooterPosition = (newPosition) => {
    if (!cachedFooterEls) {
      cachedFooterEls = Array.from(baseEl.querySelectorAll("ion-footer"));
      if (!cachedFooterEls.length) {
        return;
      }
    }
    const page = baseEl.querySelector(".ion-page");
    currentFooterState = newPosition;
    if (newPosition === "stationary") {
      cachedFooterEls.forEach((cachedFooterEl) => {
        cachedFooterEl.classList.remove("modal-footer-moving");
        cachedFooterEl.style.removeProperty("position");
        cachedFooterEl.style.removeProperty("width");
        cachedFooterEl.style.removeProperty("height");
        cachedFooterEl.style.removeProperty("top");
        cachedFooterEl.style.removeProperty("left");
        page === null || page === void 0 ? void 0 : page.style.removeProperty("padding-bottom");
        page === null || page === void 0 ? void 0 : page.appendChild(cachedFooterEl);
      });
    } else {
      let footerHeights = 0;
      cachedFooterEls.forEach((cachedFooterEl, index) => {
        const cachedFooterElRect = cachedFooterEl.getBoundingClientRect();
        const bodyRect = document.body.getBoundingClientRect();
        footerHeights += cachedFooterEl.clientHeight;
        const absoluteTop = cachedFooterElRect.top - bodyRect.top;
        const absoluteLeft = cachedFooterElRect.left - bodyRect.left;
        cachedFooterEl.style.setProperty("--pinned-width", `${cachedFooterEl.clientWidth}px`);
        cachedFooterEl.style.setProperty("--pinned-height", `${cachedFooterEl.clientHeight}px`);
        cachedFooterEl.style.setProperty("--pinned-top", `${absoluteTop}px`);
        cachedFooterEl.style.setProperty("--pinned-left", `${absoluteLeft}px`);
        if (index === 0) {
          cachedFooterYPosition = absoluteTop;
          const header = baseEl.querySelector("ion-header");
          if (header) {
            cachedFooterYPosition -= header.clientHeight;
          }
        }
      });
      cachedFooterEls.forEach((cachedFooterEl) => {
        page === null || page === void 0 ? void 0 : page.style.setProperty("padding-bottom", `${footerHeights}px`);
        cachedFooterEl.classList.add("modal-footer-moving");
        cachedFooterEl.style.setProperty("position", "absolute");
        cachedFooterEl.style.setProperty("width", "var(--pinned-width)");
        cachedFooterEl.style.setProperty("height", "var(--pinned-height)");
        cachedFooterEl.style.setProperty("top", "var(--pinned-top)");
        cachedFooterEl.style.setProperty("left", "var(--pinned-left)");
        document.body.appendChild(cachedFooterEl);
      });
    }
  };
  if (wrapperAnimation && backdropAnimation) {
    wrapperAnimation.keyframes([...SheetDefaults.WRAPPER_KEYFRAMES]);
    backdropAnimation.keyframes([...SheetDefaults.BACKDROP_KEYFRAMES]);
    contentAnimation === null || contentAnimation === void 0 ? void 0 : contentAnimation.keyframes([...SheetDefaults.CONTENT_KEYFRAMES]);
    animation.progressStart(true, 1 - currentBreakpoint);
    const shouldEnableBackdrop = currentBreakpoint > backdropBreakpoint;
    if (shouldEnableBackdrop) {
      enableBackdrop();
    } else {
      disableBackdrop();
    }
  }
  if (contentEl && currentBreakpoint !== maxBreakpoint && expandToScroll) {
    contentEl.scrollY = false;
  }
  const canStart = (detail) => {
    const contentEl2 = findClosestIonContent(detail.event.target);
    currentBreakpoint = getCurrentBreakpoint();
    if (!expandToScroll && contentEl2) {
      const scrollEl = isIonContent(contentEl2) ? getElementRoot(contentEl2).querySelector(".inner-scroll") : contentEl2;
      return scrollEl.scrollTop === 0;
    }
    if (currentBreakpoint === 1 && contentEl2) {
      const scrollEl = isIonContent(contentEl2) ? getElementRoot(contentEl2).querySelector(".inner-scroll") : contentEl2;
      const hasRefresherInContent = !!contentEl2.querySelector("ion-refresher");
      return !hasRefresherInContent && scrollEl.scrollTop === 0;
    }
    return true;
  };
  const onStart = (detail) => {
    canDismissBlocksGesture = baseEl.canDismiss !== void 0 && baseEl.canDismiss !== true && minBreakpoint === 0;
    if (!expandToScroll) {
      const targetEl = findClosestIonContent(detail.event.target);
      cachedScrollEl = targetEl && isIonContent(targetEl) ? getElementRoot(targetEl).querySelector(".inner-scroll") : targetEl;
    }
    if (!expandToScroll) {
      swapFooterPosition("moving");
    }
    if (detail.deltaY > 0 && contentEl) {
      contentEl.scrollY = false;
    }
    raf(() => {
      baseEl.focus();
    });
    animation.progressStart(true, 1 - currentBreakpoint);
  };
  const onMove = (detail) => {
    if (!expandToScroll && cachedFooterYPosition !== null && currentFooterState !== null) {
      if (detail.currentY >= cachedFooterYPosition && currentFooterState === "moving") {
        swapFooterPosition("stationary");
      } else if (detail.currentY < cachedFooterYPosition && currentFooterState === "stationary") {
        swapFooterPosition("moving");
      }
    }
    if (!expandToScroll && detail.deltaY <= 0 && cachedScrollEl) {
      return;
    }
    if (detail.deltaY > 0 && contentEl) {
      contentEl.scrollY = false;
    }
    const initialStep = 1 - currentBreakpoint;
    const secondToLastBreakpoint = breakpoints.length > 1 ? 1 - breakpoints[1] : void 0;
    const step = initialStep + detail.deltaY / height;
    const isAttemptingDismissWithCanDismiss = secondToLastBreakpoint !== void 0 && step >= secondToLastBreakpoint && canDismissBlocksGesture;
    const maxStep = isAttemptingDismissWithCanDismiss ? canDismissMaxStep : 0.9999;
    const processedStep = isAttemptingDismissWithCanDismiss && secondToLastBreakpoint !== void 0 ? secondToLastBreakpoint + calculateSpringStep((step - secondToLastBreakpoint) / (maxStep - secondToLastBreakpoint)) : step;
    offset = clamp(1e-4, processedStep, maxStep);
    animation.progressStep(offset);
  };
  const onEnd = (detail) => {
    if (!expandToScroll && detail.deltaY <= 0 && cachedScrollEl && cachedScrollEl.scrollTop > 0) {
      swapFooterPosition("stationary");
      return;
    }
    const velocity = detail.velocityY;
    const threshold = (detail.deltaY + velocity * 350) / height;
    const diff = currentBreakpoint - threshold;
    const closest = breakpoints.reduce((a, b) => {
      return Math.abs(b - diff) < Math.abs(a - diff) ? b : a;
    });
    moveSheetToBreakpoint({
      breakpoint: closest,
      breakpointOffset: offset,
      canDismiss: canDismissBlocksGesture,
      /**
       * The swipe is user-driven, so we should
       * always animate when the gesture ends.
       */
      animated: true
    });
  };
  const moveSheetToBreakpoint = (options) => {
    const {
      breakpoint,
      canDismiss,
      breakpointOffset,
      animated
    } = options;
    const shouldPreventDismiss = canDismiss && breakpoint === 0;
    const snapToBreakpoint = shouldPreventDismiss ? currentBreakpoint : breakpoint;
    const shouldRemainOpen = snapToBreakpoint !== 0;
    currentBreakpoint = 0;
    if (wrapperAnimation && backdropAnimation) {
      wrapperAnimation.keyframes([{
        offset: 0,
        transform: `translateY(${breakpointOffset * 100}%)`
      }, {
        offset: 1,
        transform: `translateY(${(1 - snapToBreakpoint) * 100}%)`
      }]);
      backdropAnimation.keyframes([{
        offset: 0,
        opacity: `calc(var(--backdrop-opacity) * ${getBackdropValueForSheet(1 - breakpointOffset, backdropBreakpoint)})`
      }, {
        offset: 1,
        opacity: `calc(var(--backdrop-opacity) * ${getBackdropValueForSheet(snapToBreakpoint, backdropBreakpoint)})`
      }]);
      if (contentAnimation) {
        contentAnimation.keyframes([{
          offset: 0,
          maxHeight: `${(1 - breakpointOffset) * 100}%`
        }, {
          offset: 1,
          maxHeight: `${snapToBreakpoint * 100}%`
        }]);
      }
      animation.progressStep(0);
    }
    gesture.enable(false);
    if (shouldPreventDismiss) {
      handleCanDismiss(baseEl, animation);
    } else if (!shouldRemainOpen) {
      onDismiss();
    }
    if (contentEl && (snapToBreakpoint === breakpoints[breakpoints.length - 1] || !expandToScroll)) {
      contentEl.scrollY = true;
    }
    if (!expandToScroll && snapToBreakpoint === 0) {
      swapFooterPosition("stationary");
    }
    return new Promise((resolve) => {
      animation.onFinish(() => {
        if (shouldRemainOpen) {
          if (!expandToScroll) {
            swapFooterPosition("stationary");
          }
          if (wrapperAnimation && backdropAnimation) {
            raf(() => {
              wrapperAnimation.keyframes([...SheetDefaults.WRAPPER_KEYFRAMES]);
              backdropAnimation.keyframes([...SheetDefaults.BACKDROP_KEYFRAMES]);
              contentAnimation === null || contentAnimation === void 0 ? void 0 : contentAnimation.keyframes([...SheetDefaults.CONTENT_KEYFRAMES]);
              animation.progressStart(true, 1 - snapToBreakpoint);
              currentBreakpoint = snapToBreakpoint;
              onBreakpointChange(currentBreakpoint);
              const shouldEnableBackdrop = currentBreakpoint > backdropBreakpoint;
              if (shouldEnableBackdrop) {
                enableBackdrop();
              } else {
                disableBackdrop();
              }
              gesture.enable(true);
              resolve();
            });
          } else {
            gesture.enable(true);
            resolve();
          }
        } else {
          resolve();
        }
      }, {
        oneTimeCallback: true
      }).progressEnd(1, 0, animated ? 500 : 0);
    });
  };
  const gesture = createGesture({
    el: wrapperEl,
    gestureName: "modalSheet",
    gesturePriority: 40,
    direction: "y",
    threshold: 10,
    canStart,
    onStart,
    onMove,
    onEnd
  });
  return {
    gesture,
    moveSheetToBreakpoint
  };
};
var modalIosCss = ':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, var(--ion-background-color-step-350, #c0c0be));cursor:pointer;z-index:11}.modal-handle::before{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host(.modal-sheet.modal-no-expand-scroll) ion-footer{position:absolute;bottom:0;width:var(--width)}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}:host(.modal-card),:host(.modal-sheet){--border-radius:10px}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:10px}}.modal-wrapper{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - 40px)}}:host(.modal-card) .modal-wrapper{border-start-start-radius:var(--border-radius);border-start-end-radius:var(--border-radius);border-end-end-radius:0;border-end-start-radius:0}:host(.modal-card){--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}:host(.modal-card) .modal-shadow{display:none}:host(.modal-card) ion-backdrop{pointer-events:none}}@media screen and (min-width: 768px){:host(.modal-card){--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px;--backdrop-opacity:0;--box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}:host(.modal-card) .modal-wrapper{-webkit-box-shadow:none;box-shadow:none}:host(.modal-card) .modal-shadow{-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}}:host(.modal-sheet) .modal-wrapper{border-start-start-radius:var(--border-radius);border-start-end-radius:var(--border-radius);border-end-end-radius:0;border-end-start-radius:0}';
var modalMdCss = ':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, var(--ion-background-color-step-350, #c0c0be));cursor:pointer;z-index:11}.modal-handle::before{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host(.modal-sheet.modal-no-expand-scroll) ion-footer{position:absolute;bottom:0;width:var(--width)}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:2px;--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}';
var Modal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.didPresent = createEvent(this, "ionModalDidPresent", 7);
    this.willPresent = createEvent(this, "ionModalWillPresent", 7);
    this.willDismiss = createEvent(this, "ionModalWillDismiss", 7);
    this.didDismiss = createEvent(this, "ionModalDidDismiss", 7);
    this.ionBreakpointDidChange = createEvent(this, "ionBreakpointDidChange", 7);
    this.didPresentShorthand = createEvent(this, "didPresent", 7);
    this.willPresentShorthand = createEvent(this, "willPresent", 7);
    this.willDismissShorthand = createEvent(this, "willDismiss", 7);
    this.didDismissShorthand = createEvent(this, "didDismiss", 7);
    this.ionMount = createEvent(this, "ionMount", 7);
    this.lockController = createLockController();
    this.triggerController = createTriggerController();
    this.coreDelegate = CoreDelegate();
    this.isSheetModal = false;
    this.inheritedAttributes = {};
    this.inline = false;
    this.gestureAnimationDismissing = false;
    this.presented = false;
    this.hasController = false;
    this.keyboardClose = true;
    this.expandToScroll = true;
    this.backdropBreakpoint = 0;
    this.handleBehavior = "none";
    this.backdropDismiss = true;
    this.showBackdrop = true;
    this.animated = true;
    this.isOpen = false;
    this.keepContentsMounted = false;
    this.focusTrap = true;
    this.canDismiss = true;
    this.onHandleClick = () => {
      const {
        sheetTransition,
        handleBehavior
      } = this;
      if (handleBehavior !== "cycle" || sheetTransition !== void 0) {
        return;
      }
      this.moveToNextBreakpoint();
    };
    this.onBackdropTap = () => {
      const {
        sheetTransition
      } = this;
      if (sheetTransition !== void 0) {
        return;
      }
      this.dismiss(void 0, BACKDROP);
    };
    this.onLifecycle = (modalEvent) => {
      const el = this.usersElement;
      const name = LIFECYCLE_MAP[modalEvent.type];
      if (el && name) {
        const ev = new CustomEvent(name, {
          bubbles: false,
          cancelable: false,
          detail: modalEvent.detail
        });
        el.dispatchEvent(ev);
      }
    };
    this.onModalFocus = (ev) => {
      const {
        dragHandleEl,
        el
      } = this;
      if (ev.target === el && dragHandleEl && dragHandleEl.tabIndex !== -1) {
        dragHandleEl.focus();
      }
    };
    this.onSlotChange = ({
      target
    }) => {
      const slot = target;
      slot.assignedElements().forEach((el) => {
        el.querySelectorAll("ion-modal").forEach((childModal) => {
          if (childModal.getAttribute("data-parent-ion-modal") === null) {
            childModal.setAttribute("data-parent-ion-modal", this.el.id);
          }
        });
      });
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
  onWindowResize() {
    if (getIonMode(this) !== "ios" || !this.presentingElement || this.enterAnimation || this.leaveAnimation) {
      return;
    }
    clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(() => {
      this.handleViewTransition();
    }, 50);
  }
  breakpointsChanged(breakpoints) {
    if (breakpoints !== void 0) {
      this.sortedBreakpoints = breakpoints.sort((a, b) => a - b);
    }
  }
  connectedCallback() {
    const {
      el
    } = this;
    prepareOverlay(el);
    this.triggerChanged();
  }
  disconnectedCallback() {
    this.triggerController.removeClickListener();
    this.cleanupViewTransitionListener();
    this.cleanupParentRemovalObserver();
  }
  componentWillLoad() {
    var _a;
    const {
      breakpoints,
      initialBreakpoint,
      el,
      htmlAttributes
    } = this;
    const isSheetModal = this.isSheetModal = breakpoints !== void 0 && initialBreakpoint !== void 0;
    const attributesToInherit = ["aria-label", "role"];
    this.inheritedAttributes = inheritAttributes(el, attributesToInherit);
    if (el.parentNode) {
      this.cachedOriginalParent = el.parentNode;
    }
    if (htmlAttributes !== void 0) {
      attributesToInherit.forEach((attribute) => {
        const attributeValue = htmlAttributes[attribute];
        if (attributeValue) {
          this.inheritedAttributes = Object.assign(Object.assign({}, this.inheritedAttributes), {
            [attribute]: htmlAttributes[attribute]
          });
          delete htmlAttributes[attribute];
        }
      });
    }
    if (isSheetModal) {
      this.currentBreakpoint = this.initialBreakpoint;
    }
    if (breakpoints !== void 0 && initialBreakpoint !== void 0 && !breakpoints.includes(initialBreakpoint)) {
      printIonWarning("[ion-modal] - Your breakpoints array must include the initialBreakpoint value.");
    }
    if (!((_a = this.htmlAttributes) === null || _a === void 0 ? void 0 : _a.id)) {
      setOverlayId(this.el);
    }
  }
  componentDidLoad() {
    if (this.isOpen === true) {
      raf(() => this.present());
    }
    this.breakpointsChanged(this.breakpoints);
    this.triggerChanged();
  }
  /**
   * Determines whether or not an overlay
   * is being used inline or via a controller/JS
   * and returns the correct delegate.
   * By default, subsequent calls to getDelegate
   * will use a cached version of the delegate.
   * This is useful for calling dismiss after
   * present so that the correct delegate is given.
   */
  getDelegate(force = false) {
    if (this.workingDelegate && !force) {
      return {
        delegate: this.workingDelegate,
        inline: this.inline
      };
    }
    const parentEl = this.el.parentNode;
    const inline = this.inline = parentEl !== null && !this.hasController;
    const delegate = this.workingDelegate = inline ? this.delegate || this.coreDelegate : this.delegate;
    return {
      inline,
      delegate
    };
  }
  /**
   * Determines whether or not the
   * modal is allowed to dismiss based
   * on the state of the canDismiss prop.
   */
  checkCanDismiss(data, role) {
    return __async(this, null, function* () {
      const {
        canDismiss
      } = this;
      if (typeof canDismiss === "function") {
        return canDismiss(data, role);
      }
      return canDismiss;
    });
  }
  /**
   * Present the modal overlay after it has been created.
   */
  present() {
    return __async(this, null, function* () {
      const unlock = yield this.lockController.lock();
      if (this.presented) {
        unlock();
        return;
      }
      const {
        presentingElement,
        el
      } = this;
      this.currentBreakpoint = this.initialBreakpoint;
      const {
        inline,
        delegate
      } = this.getDelegate(true);
      this.ionMount.emit();
      this.usersElement = yield attachComponent(delegate, el, this.component, ["ion-page"], this.componentProps, inline);
      if (hasLazyBuild(el)) {
        yield deepReady(this.usersElement);
      } else if (!this.keepContentsMounted) {
        yield waitForMount();
      }
      writeTask(() => this.el.classList.add("show-modal"));
      const hasCardModal = presentingElement !== void 0;
      if (hasCardModal && getIonMode(this) === "ios") {
        this.statusBarStyle = yield StatusBar.getStyle();
        setCardStatusBarDark();
      }
      yield present(this, "modalEnter", iosEnterAnimation, mdEnterAnimation, {
        presentingEl: presentingElement,
        currentBreakpoint: this.initialBreakpoint,
        backdropBreakpoint: this.backdropBreakpoint,
        expandToScroll: this.expandToScroll
      });
      if (typeof window !== "undefined") {
        this.keyboardOpenCallback = () => {
          if (this.gesture) {
            this.gesture.enable(false);
            raf(() => {
              if (this.gesture) {
                this.gesture.enable(true);
              }
            });
          }
        };
        window.addEventListener(KEYBOARD_DID_OPEN, this.keyboardOpenCallback);
      }
      if (this.isSheetModal) {
        this.initSheetGesture();
      } else if (hasCardModal) {
        this.initSwipeToClose();
      }
      this.initViewTransitionListener();
      this.initParentRemovalObserver();
      unlock();
    });
  }
  initSwipeToClose() {
    var _a;
    if (getIonMode(this) !== "ios") {
      return;
    }
    const {
      el
    } = this;
    const animationBuilder = this.leaveAnimation || config.get("modalLeave", iosLeaveAnimation);
    const ani = this.animation = animationBuilder(el, {
      presentingEl: this.presentingElement,
      expandToScroll: this.expandToScroll
    });
    const contentEl = findIonContent(el);
    if (!contentEl) {
      printIonContentErrorMsg(el);
      return;
    }
    const statusBarStyle = (_a = this.statusBarStyle) !== null && _a !== void 0 ? _a : Style.Default;
    this.gesture = createSwipeToCloseGesture(el, ani, statusBarStyle, () => {
      this.gestureAnimationDismissing = true;
      setCardStatusBarDefault(this.statusBarStyle);
      this.animation.onFinish(() => __async(this, null, function* () {
        yield this.dismiss(void 0, GESTURE);
        this.gestureAnimationDismissing = false;
      }));
    });
    this.gesture.enable(true);
  }
  initSheetGesture() {
    const {
      wrapperEl,
      initialBreakpoint,
      backdropBreakpoint
    } = this;
    if (!wrapperEl || initialBreakpoint === void 0) {
      return;
    }
    const animationBuilder = this.enterAnimation || config.get("modalEnter", iosEnterAnimation);
    const ani = this.animation = animationBuilder(this.el, {
      presentingEl: this.presentingElement,
      currentBreakpoint: initialBreakpoint,
      backdropBreakpoint,
      expandToScroll: this.expandToScroll
    });
    ani.progressStart(true, 1);
    const {
      gesture,
      moveSheetToBreakpoint
    } = createSheetGesture(this.el, this.backdropEl, wrapperEl, initialBreakpoint, backdropBreakpoint, ani, this.sortedBreakpoints, this.expandToScroll, () => {
      var _a;
      return (_a = this.currentBreakpoint) !== null && _a !== void 0 ? _a : 0;
    }, () => this.sheetOnDismiss(), (breakpoint) => {
      if (this.currentBreakpoint !== breakpoint) {
        this.currentBreakpoint = breakpoint;
        this.ionBreakpointDidChange.emit({
          breakpoint
        });
      }
    });
    this.gesture = gesture;
    this.moveSheetToBreakpoint = moveSheetToBreakpoint;
    this.gesture.enable(true);
  }
  sheetOnDismiss() {
    this.gestureAnimationDismissing = true;
    this.animation.onFinish(() => __async(this, null, function* () {
      this.currentBreakpoint = 0;
      this.ionBreakpointDidChange.emit({
        breakpoint: this.currentBreakpoint
      });
      yield this.dismiss(void 0, GESTURE);
      this.gestureAnimationDismissing = false;
    }));
  }
  /**
   * Dismiss the modal overlay after it has been presented.
   * This is a no-op if the overlay has not been presented yet. If you want
   * to remove an overlay from the DOM that was never presented, use the
   * [remove](https://developer.mozilla.org/en-US/docs/Web/API/Element/remove) method.
   *
   * @param data Any data to emit in the dismiss events.
   * @param role The role of the element that is dismissing the modal.
   * For example, `cancel` or `backdrop`.
   */
  dismiss(data, role) {
    return __async(this, null, function* () {
      var _a;
      if (this.gestureAnimationDismissing && role !== GESTURE) {
        return false;
      }
      const unlock = yield this.lockController.lock();
      yield this.dismissNestedModals();
      if (role !== "handler" && !(yield this.checkCanDismiss(data, role))) {
        unlock();
        return false;
      }
      const {
        presentingElement
      } = this;
      const hasCardModal = presentingElement !== void 0;
      if (hasCardModal && getIonMode(this) === "ios") {
        setCardStatusBarDefault(this.statusBarStyle);
      }
      if (typeof window !== "undefined" && this.keyboardOpenCallback) {
        window.removeEventListener(KEYBOARD_DID_OPEN, this.keyboardOpenCallback);
        this.keyboardOpenCallback = void 0;
      }
      const dismissed = yield dismiss(this, data, role, "modalLeave", iosLeaveAnimation, mdLeaveAnimation, {
        presentingEl: presentingElement,
        currentBreakpoint: (_a = this.currentBreakpoint) !== null && _a !== void 0 ? _a : this.initialBreakpoint,
        backdropBreakpoint: this.backdropBreakpoint,
        expandToScroll: this.expandToScroll
      });
      if (dismissed) {
        const {
          delegate
        } = this.getDelegate();
        yield detachComponent(delegate, this.usersElement);
        writeTask(() => this.el.classList.remove("show-modal"));
        if (this.animation) {
          this.animation.destroy();
        }
        if (this.gesture) {
          this.gesture.destroy();
        }
        this.cleanupViewTransitionListener();
        this.cleanupParentRemovalObserver();
      }
      this.currentBreakpoint = void 0;
      this.animation = void 0;
      unlock();
      return dismissed;
    });
  }
  /**
   * Returns a promise that resolves when the modal did dismiss.
   */
  onDidDismiss() {
    return eventMethod(this.el, "ionModalDidDismiss");
  }
  /**
   * Returns a promise that resolves when the modal will dismiss.
   */
  onWillDismiss() {
    return eventMethod(this.el, "ionModalWillDismiss");
  }
  /**
   * Move a sheet style modal to a specific breakpoint.
   *
   * @param breakpoint The breakpoint value to move the sheet modal to.
   * Must be a value defined in your `breakpoints` array.
   */
  setCurrentBreakpoint(breakpoint) {
    return __async(this, null, function* () {
      if (!this.isSheetModal) {
        printIonWarning("[ion-modal] - setCurrentBreakpoint is only supported on sheet modals.");
        return;
      }
      if (!this.breakpoints.includes(breakpoint)) {
        printIonWarning(`[ion-modal] - Attempted to set invalid breakpoint value ${breakpoint}. Please double check that the breakpoint value is part of your defined breakpoints.`);
        return;
      }
      const {
        currentBreakpoint,
        moveSheetToBreakpoint,
        canDismiss,
        breakpoints,
        animated
      } = this;
      if (currentBreakpoint === breakpoint) {
        return;
      }
      if (moveSheetToBreakpoint) {
        this.sheetTransition = moveSheetToBreakpoint({
          breakpoint,
          breakpointOffset: 1 - currentBreakpoint,
          canDismiss: canDismiss !== void 0 && canDismiss !== true && breakpoints[0] === 0,
          animated
        });
        yield this.sheetTransition;
        this.sheetTransition = void 0;
      }
    });
  }
  /**
   * Returns the current breakpoint of a sheet style modal
   */
  getCurrentBreakpoint() {
    return __async(this, null, function* () {
      return this.currentBreakpoint;
    });
  }
  moveToNextBreakpoint() {
    return __async(this, null, function* () {
      const {
        breakpoints,
        currentBreakpoint
      } = this;
      if (!breakpoints || currentBreakpoint == null) {
        return false;
      }
      const allowedBreakpoints = breakpoints.filter((b) => b !== 0);
      const currentBreakpointIndex = allowedBreakpoints.indexOf(currentBreakpoint);
      const nextBreakpointIndex = (currentBreakpointIndex + 1) % allowedBreakpoints.length;
      const nextBreakpoint = allowedBreakpoints[nextBreakpointIndex];
      yield this.setCurrentBreakpoint(nextBreakpoint);
      return true;
    });
  }
  initViewTransitionListener() {
    if (getIonMode(this) !== "ios" || !this.presentingElement || this.enterAnimation || this.leaveAnimation) {
      return;
    }
    this.currentViewIsPortrait = window.innerWidth < 768;
  }
  handleViewTransition() {
    const isPortrait = window.innerWidth < 768;
    if (this.currentViewIsPortrait === isPortrait) {
      return;
    }
    if (this.viewTransitionAnimation) {
      this.viewTransitionAnimation.destroy();
      this.viewTransitionAnimation = void 0;
    }
    const {
      presentingElement
    } = this;
    if (!presentingElement) {
      return;
    }
    let transitionAnimation;
    if (this.currentViewIsPortrait && !isPortrait) {
      transitionAnimation = portraitToLandscapeTransition(this.el, {
        presentingEl: presentingElement
      });
    } else {
      transitionAnimation = landscapeToPortraitTransition(this.el, {
        presentingEl: presentingElement
      });
    }
    this.currentViewIsPortrait = isPortrait;
    this.viewTransitionAnimation = transitionAnimation;
    transitionAnimation.play().then(() => {
      this.viewTransitionAnimation = void 0;
      this.reinitSwipeToClose();
    });
  }
  cleanupViewTransitionListener() {
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = void 0;
    }
    if (this.viewTransitionAnimation) {
      this.viewTransitionAnimation.destroy();
      this.viewTransitionAnimation = void 0;
    }
  }
  reinitSwipeToClose() {
    if (getIonMode(this) !== "ios" || !this.presentingElement) {
      return;
    }
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = void 0;
    }
    if (this.animation) {
      this.animation.progressEnd(0, 0, 0);
      this.animation.destroy();
      this.animation = void 0;
    }
    raf(() => {
      this.ensureCorrectModalPosition();
      this.initSwipeToClose();
    });
  }
  ensureCorrectModalPosition() {
    const {
      el,
      presentingElement
    } = this;
    const root = getElementRoot(el);
    const wrapperEl = root.querySelector(".modal-wrapper");
    if (wrapperEl) {
      wrapperEl.style.transform = "translateY(0vh)";
      wrapperEl.style.opacity = "1";
    }
    if ((presentingElement === null || presentingElement === void 0 ? void 0 : presentingElement.tagName) === "ION-MODAL") {
      const isPortrait = window.innerWidth < 768;
      if (isPortrait) {
        const transformOffset = !CSS.supports("width", "max(0px, 1px)") ? "30px" : "max(30px, var(--ion-safe-area-top))";
        const scale = SwipeToCloseDefaults.MIN_PRESENTING_SCALE;
        presentingElement.style.transform = `translateY(${transformOffset}) scale(${scale})`;
      } else {
        presentingElement.style.transform = "translateY(0px) scale(1)";
      }
    }
  }
  dismissNestedModals() {
    return __async(this, null, function* () {
      const nestedModals = document.querySelectorAll(`ion-modal[data-parent-ion-modal="${this.el.id}"]`);
      nestedModals === null || nestedModals === void 0 ? void 0 : nestedModals.forEach((modal) => __async(this, null, function* () {
        yield modal.dismiss(void 0, "parent-dismissed");
      }));
    });
  }
  initParentRemovalObserver() {
    if (typeof MutationObserver === "undefined") {
      return;
    }
    if (typeof window === "undefined" || !this.cachedOriginalParent) {
      return;
    }
    if (this.cachedOriginalParent.nodeType === Node.DOCUMENT_NODE || this.cachedOriginalParent.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      return;
    }
    this.parentRemovalObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList" && mutation.removedNodes.length > 0) {
          const cachedParentWasRemoved = Array.from(mutation.removedNodes).some((node) => {
            var _a, _b;
            const isDirectMatch = node === this.cachedOriginalParent;
            const isContainedMatch = this.cachedOriginalParent ? (_b = (_a = node).contains) === null || _b === void 0 ? void 0 : _b.call(_a, this.cachedOriginalParent) : false;
            return isDirectMatch || isContainedMatch;
          });
          const cachedParentDisconnected = this.cachedOriginalParent && !this.cachedOriginalParent.isConnected;
          if (cachedParentWasRemoved || cachedParentDisconnected) {
            this.dismiss(void 0, "parent-removed");
            this.cachedOriginalParent = void 0;
          }
        }
      });
    });
    this.parentRemovalObserver.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
  cleanupParentRemovalObserver() {
    var _a;
    (_a = this.parentRemovalObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    this.parentRemovalObserver = void 0;
  }
  render() {
    const {
      handle,
      isSheetModal,
      presentingElement,
      htmlAttributes,
      handleBehavior,
      inheritedAttributes,
      focusTrap,
      expandToScroll
    } = this;
    const showHandle = handle !== false && isSheetModal;
    const mode = getIonMode(this);
    const isCardModal = presentingElement !== void 0 && mode === "ios";
    const isHandleCycle = handleBehavior === "cycle";
    const isSheetModalWithHandle = isSheetModal && showHandle;
    return h(Host, Object.assign({
      key: "9e9a7bd591eb17a225a00b4fa2e379e94601d17f",
      "no-router": true,
      // Allow the modal to be navigable when the handle is focusable
      tabIndex: isHandleCycle && isSheetModalWithHandle ? 0 : -1
    }, htmlAttributes, {
      style: {
        zIndex: `${2e4 + this.overlayIndex}`
      },
      class: Object.assign({
        [mode]: true,
        ["modal-default"]: !isCardModal && !isSheetModal,
        [`modal-card`]: isCardModal,
        [`modal-sheet`]: isSheetModal,
        [`modal-no-expand-scroll`]: isSheetModal && !expandToScroll,
        "overlay-hidden": true,
        [FOCUS_TRAP_DISABLE_CLASS]: focusTrap === false
      }, getClassMap(this.cssClass)),
      onIonBackdropTap: this.onBackdropTap,
      onIonModalDidPresent: this.onLifecycle,
      onIonModalWillPresent: this.onLifecycle,
      onIonModalWillDismiss: this.onLifecycle,
      onIonModalDidDismiss: this.onLifecycle,
      onFocus: this.onModalFocus
    }), h("ion-backdrop", {
      key: "e5eae2c14f830f75e308fcd7f4c10c86fac5b962",
      ref: (el) => this.backdropEl = el,
      visible: this.showBackdrop,
      tappable: this.backdropDismiss,
      part: "backdrop"
    }), mode === "ios" && h("div", {
      key: "e268f9cd310c3cf4e051b5b92524ce4fb70d005e",
      class: "modal-shadow"
    }), h("div", Object.assign({
      key: "9c380f36c18144c153077b15744d1c3346bce63e",
      /*
        role and aria-modal must be used on the
        same element. They must also be set inside the
        shadow DOM otherwise ion-button will not be highlighted
        when using VoiceOver: https://bugs.webkit.org/show_bug.cgi?id=247134
      */
      role: "dialog"
    }, inheritedAttributes, {
      "aria-modal": "true",
      class: "modal-wrapper ion-overlay-wrapper",
      part: "content",
      ref: (el) => this.wrapperEl = el
    }), showHandle && h("button", {
      key: "2d5ee6d5959d97309c306e8ce72eb0f2c19be144",
      class: "modal-handle",
      // Prevents the handle from receiving keyboard focus when it does not cycle
      tabIndex: !isHandleCycle ? -1 : 0,
      "aria-label": "Activate to adjust the size of the dialog overlaying the screen",
      onClick: isHandleCycle ? this.onHandleClick : void 0,
      part: "handle",
      ref: (el) => this.dragHandleEl = el
    }), h("slot", {
      key: "5590434c35ea04c42fc006498bc189038e15a298",
      onSlotchange: this.onSlotChange
    })));
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
var LIFECYCLE_MAP = {
  ionModalDidPresent: "ionViewDidEnter",
  ionModalWillPresent: "ionViewWillEnter",
  ionModalWillDismiss: "ionViewWillLeave",
  ionModalDidDismiss: "ionViewDidLeave"
};
Modal.style = {
  ios: modalIosCss,
  md: modalMdCss
};
export {
  Modal as ion_modal
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-modal.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tbW9kYWwuZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBjcmVhdGVFdmVudCwgZiBhcyBwcmludElvbldhcm5pbmcsIHcgYXMgd3JpdGVUYXNrLCBlIGFzIGNvbmZpZywgaCwgZCBhcyBIb3N0LCBnIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2luZGV4LTREeFk2X2dHLmpzJztcbmltcG9ydCB7IGYgYXMgZmluZENsb3Nlc3RJb25Db250ZW50LCBpIGFzIGlzSW9uQ29udGVudCwgZCBhcyBkaXNhYmxlQ29udGVudFNjcm9sbFksIHIgYXMgcmVzZXRDb250ZW50U2Nyb2xsWSwgYSBhcyBmaW5kSW9uQ29udGVudCwgcCBhcyBwcmludElvbkNvbnRlbnRFcnJvck1zZyB9IGZyb20gJy4vaW5kZXgtN1ViU2x2N04uanMnO1xuaW1wb3J0IHsgQyBhcyBDb3JlRGVsZWdhdGUsIGEgYXMgYXR0YWNoQ29tcG9uZW50LCBkIGFzIGRldGFjaENvbXBvbmVudCB9IGZyb20gJy4vZnJhbWV3b3JrLWRlbGVnYXRlLUJMRUJnSDA2LmpzJztcbmltcG9ydCB7IGUgYXMgY2xhbXAsIGcgYXMgZ2V0RWxlbWVudFJvb3QsIHIgYXMgcmFmLCBiIGFzIGluaGVyaXRBdHRyaWJ1dGVzLCBoIGFzIGhhc0xhenlCdWlsZCB9IGZyb20gJy4vaGVscGVycy04S1NRUUdReS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZUxvY2tDb250cm9sbGVyIH0gZnJvbSAnLi9sb2NrLWNvbnRyb2xsZXItQi1oaXJUMHYuanMnO1xuaW1wb3J0IHsgZyBhcyBnZXRDYXBhY2l0b3IgfSBmcm9tICcuL2NhcGFjaXRvci1DRkVSSWVhVS5qcyc7XG5pbXBvcnQgeyBHIGFzIEdFU1RVUkUsIE8gYXMgT1ZFUkxBWV9HRVNUVVJFX1BSSU9SSVRZLCBGIGFzIEZPQ1VTX1RSQVBfRElTQUJMRV9DTEFTUywgZSBhcyBjcmVhdGVUcmlnZ2VyQ29udHJvbGxlciwgQiBhcyBCQUNLRFJPUCwgaiBhcyBwcmVwYXJlT3ZlcmxheSwgayBhcyBzZXRPdmVybGF5SWQsIGYgYXMgcHJlc2VudCwgZyBhcyBkaXNtaXNzLCBoIGFzIGV2ZW50TWV0aG9kIH0gZnJvbSAnLi9vdmVybGF5cy1aWF80LXRfci5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldENsYXNzTWFwIH0gZnJvbSAnLi90aGVtZS1EaVZKeXFsWC5qcyc7XG5pbXBvcnQgeyBlIGFzIGRlZXBSZWFkeSwgdyBhcyB3YWl0Rm9yTW91bnQgfSBmcm9tICcuL2luZGV4LURwN0dYSDF6LmpzJztcbmltcG9ydCB7IGIgYXMgZ2V0SW9uTW9kZSB9IGZyb20gJy4vaW9uaWMtZ2xvYmFsLUNUU3l1ZmhGLmpzJztcbmltcG9ydCB7IEtFWUJPQVJEX0RJRF9PUEVOIH0gZnJvbSAnLi9rZXlib2FyZC15d2dzNWVmQS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZUFuaW1hdGlvbiB9IGZyb20gJy4vYW5pbWF0aW9uLUJ2aEF0Z2NhLmpzJztcbmltcG9ydCB7IGcgYXMgZ2V0VGltZUdpdmVuUHJvZ3Jlc3Npb24gfSBmcm9tICcuL2N1YmljLWJlemllci1oSG1ZTE9mRS5qcyc7XG5pbXBvcnQgeyBjcmVhdGVHZXN0dXJlIH0gZnJvbSAnLi9pbmRleC1DZmdCRjFTRS5qcyc7XG5pbXBvcnQgeyB3IGFzIHdpbiB9IGZyb20gJy4vaW5kZXgtWmpQNENqZVouanMnO1xuaW1wb3J0ICcuL2hhcmR3YXJlLWJhY2stYnV0dG9uLURoYmQtMjNILmpzJztcbmltcG9ydCAnLi9nZXN0dXJlLWNvbnRyb2xsZXItQlRFT3MxYXQuanMnO1xuaW1wb3J0ICcuL2tleWJvYXJkLUNVdzRla1Z5LmpzJztcbnZhciBTdHlsZTtcbihmdW5jdGlvbiAoU3R5bGUpIHtcbiAgU3R5bGVbXCJEYXJrXCJdID0gXCJEQVJLXCI7XG4gIFN0eWxlW1wiTGlnaHRcIl0gPSBcIkxJR0hUXCI7XG4gIFN0eWxlW1wiRGVmYXVsdFwiXSA9IFwiREVGQVVMVFwiO1xufSkoU3R5bGUgfHwgKFN0eWxlID0ge30pKTtcbmNvbnN0IFN0YXR1c0JhciA9IHtcbiAgZ2V0RW5naW5lKCkge1xuICAgIGNvbnN0IGNhcGFjaXRvciA9IGdldENhcGFjaXRvcigpO1xuICAgIGlmIChjYXBhY2l0b3IgPT09IG51bGwgfHwgY2FwYWNpdG9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjYXBhY2l0b3IuaXNQbHVnaW5BdmFpbGFibGUoJ1N0YXR1c0JhcicpKSB7XG4gICAgICByZXR1cm4gY2FwYWNpdG9yLlBsdWdpbnMuU3RhdHVzQmFyO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9LFxuICBzZXRTdHlsZShvcHRpb25zKSB7XG4gICAgY29uc3QgZW5naW5lID0gdGhpcy5nZXRFbmdpbmUoKTtcbiAgICBpZiAoIWVuZ2luZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbmdpbmUuc2V0U3R5bGUob3B0aW9ucyk7XG4gIH0sXG4gIGdldFN0eWxlOiBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZW5naW5lID0gdGhpcy5nZXRFbmdpbmUoKTtcbiAgICBpZiAoIWVuZ2luZSkge1xuICAgICAgcmV0dXJuIFN0eWxlLkRlZmF1bHQ7XG4gICAgfVxuICAgIGNvbnN0IHtcbiAgICAgIHN0eWxlXG4gICAgfSA9IGF3YWl0IGVuZ2luZS5nZXRJbmZvKCk7XG4gICAgcmV0dXJuIHN0eWxlO1xuICB9XG59O1xuXG4vKipcbiAqIFVzZSB5ID0gbXggKyBiIHRvXG4gKiBmaWd1cmUgb3V0IHRoZSBiYWNrZHJvcCB2YWx1ZVxuICogYXQgYSBwYXJ0aWN1bGFyIHggY29vcmRpbmF0ZS4gVGhpc1xuICogaXMgdXNlZnVsIHdoZW4gdGhlIGJhY2tkcm9wIGRvZXNcbiAqIG5vdCBiZWdpbiB0byBmYWRlIGluIHVudGlsIGFmdGVyXG4gKiB0aGUgMCBicmVha3BvaW50LlxuICovXG5jb25zdCBnZXRCYWNrZHJvcFZhbHVlRm9yU2hlZXQgPSAoeCwgYmFja2Ryb3BCcmVha3BvaW50KSA9PiB7XG4gIC8qKlxuICAgKiBXZSB3aWxsIHVzZSB0aGVzZSBwb2ludHM6XG4gICAqIChiYWNrZHJvcEJyZWFrcG9pbnQsIDApXG4gICAqIChtYXhCcmVha3BvaW50LCAxKVxuICAgKiBXZSBrbm93IHRoYXQgYXQgdGhlIGJlZ2lubmluZyBicmVha3BvaW50LFxuICAgKiB0aGUgYmFja2Ryb3Agd2lsbCBiZSBoaWRkZW4uIFdlIGFsc29cbiAgICoga25vdyB0aGF0IGF0IHRoZSBtYXhCcmVha3BvaW50LCB0aGUgYmFja2Ryb3BcbiAgICogbXVzdCBiZSBmdWxseSB2aXNpYmxlLiBtYXhCcmVha3BvaW50IHNob3VsZFxuICAgKiBhbHdheXMgYmUgMSBldmVuIGlmIHRoZSBtYXhpbXVtIHZhbHVlXG4gICAqIG9mIHRoZSBicmVha3BvaW50cyBhcnJheSBpcyBub3QgMSBzaW5jZVxuICAgKiB0aGUgYW5pbWF0aW9uIHJ1bnMgZnJvbSBhIHByb2dyZXNzIG9mIDBcbiAgICogdG8gYSBwcm9ncmVzcyBvZiAxLlxuICAgKiBtID0gKHkyIC0geTEpIC8gKHgyIC0geDEpXG4gICAqXG4gICAqIFRoaXMgaXMgc2ltcGxpZmllZCBmcm9tOlxuICAgKiBtID0gKDEgLSAwKSAvIChtYXhCcmVha3BvaW50IC0gYmFja2Ryb3BCcmVha3BvaW50KVxuICAgKlxuICAgKiBJZiB0aGUgYmFja2Ryb3BCcmVha3BvaW50IGlzIDEsIHdlIHJldHVybiAwIGFzIHRoZVxuICAgKiBiYWNrZHJvcCBpcyBjb21wbGV0ZWx5IGhpZGRlbi5cbiAgICpcbiAgICovXG4gIGlmIChiYWNrZHJvcEJyZWFrcG9pbnQgPT09IDEpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICBjb25zdCBzbG9wZSA9IDEgLyAoMSAtIGJhY2tkcm9wQnJlYWtwb2ludCk7XG4gIC8qKlxuICAgKiBGcm9tIGhlcmUsIGNvbXB1dGUgYiB3aGljaCBpc1xuICAgKiB0aGUgYmFja2Ryb3Agb3BhY2l0eSBpZiB0aGUgb2Zmc2V0XG4gICAqIGlzIDAuIElmIHRoZSBiYWNrZHJvcCBkb2VzIG5vdFxuICAgKiBiZWdpbiB0byBmYWRlIGluIHVudGlsIGFmdGVyIHRoZVxuICAgKiAwIGJyZWFrcG9pbnQsIHRoaXMgYiB2YWx1ZSB3aWxsIGJlXG4gICAqIG5lZ2F0aXZlLiBUaGlzIGlzIGZpbmUgYXMgd2UgbmV2ZXIgcGFzc1xuICAgKiBiIGRpcmVjdGx5IGludG8gdGhlIGFuaW1hdGlvbiBrZXlmcmFtZXMuXG4gICAqIGIgPSB5IC0gbXhcbiAgICogVXNlIGEga25vd24gcG9pbnQ6IChiYWNrZHJvcEJyZWFrcG9pbnQsIDApXG4gICAqIFRoaXMgaXMgc2ltcGxpZmllZCBmcm9tOlxuICAgKiBiID0gMCAtIChiYWNrZHJvcEJyZWFrcG9pbnQgKiBzbG9wZSlcbiAgICovXG4gIGNvbnN0IGIgPSAtKGJhY2tkcm9wQnJlYWtwb2ludCAqIHNsb3BlKTtcbiAgLyoqXG4gICAqIEZpbmFsbHksIHdlIGNhbiBub3cgZGV0ZXJtaW5lIHRoZVxuICAgKiBiYWNrZHJvcCBvZmZzZXQgZ2l2ZW4gYW4gYXJiaXRyYXJ5XG4gICAqIGdlc3R1cmUgb2Zmc2V0LlxuICAgKi9cbiAgcmV0dXJuIHggKiBzbG9wZSArIGI7XG59O1xuLyoqXG4gKiBUaGUgdGFibGV0L2Rlc2t0b3AgY2FyZCBtb2RhbCBhY3RpdmF0ZXNcbiAqIHdoZW4gdGhlIHdpbmRvdyB3aWR0aCBpcyA+PSA3NjguXG4gKiBBdCB0aGF0IHBvaW50LCB0aGUgcHJlc2VudGluZyBlbGVtZW50XG4gKiBpcyBub3QgdHJhbnNmb3JtZWQsIHNvIHdlIGRvIG5vdCBuZWVkIHRvXG4gKiBhZGp1c3QgdGhlIHN0YXR1cyBiYXIgY29sb3IuXG4gKlxuICovXG5jb25zdCBzZXRDYXJkU3RhdHVzQmFyRGFyayA9ICgpID0+IHtcbiAgaWYgKCF3aW4gfHwgd2luLmlubmVyV2lkdGggPj0gNzY4KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIFN0YXR1c0Jhci5zZXRTdHlsZSh7XG4gICAgc3R5bGU6IFN0eWxlLkRhcmtcbiAgfSk7XG59O1xuY29uc3Qgc2V0Q2FyZFN0YXR1c0JhckRlZmF1bHQgPSAoZGVmYXVsdFN0eWxlID0gU3R5bGUuRGVmYXVsdCkgPT4ge1xuICBpZiAoIXdpbiB8fCB3aW4uaW5uZXJXaWR0aCA+PSA3NjgpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgU3RhdHVzQmFyLnNldFN0eWxlKHtcbiAgICBzdHlsZTogZGVmYXVsdFN0eWxlXG4gIH0pO1xufTtcbmNvbnN0IGhhbmRsZUNhbkRpc21pc3MgPSBhc3luYyAoZWwsIGFuaW1hdGlvbikgPT4ge1xuICAvKipcbiAgICogSWYgY2FuRGlzbWlzcyBpcyBub3QgYSBmdW5jdGlvblxuICAgKiB0aGVuIHdlIGNhbiByZXR1cm4gZWFybHkuIElmIGNhbkRpc21pc3MgaXMgYHRydWVgLFxuICAgKiB0aGVuIGNhbkRpc21pc3NCbG9ja3NHZXN0dXJlIGlzIGBmYWxzZWAgYXMgY2FuRGlzbWlzc1xuICAgKiB3aWxsIG5ldmVyIGludGVycnVwdCB0aGUgZ2VzdHVyZS4gQXMgYSByZXN1bHQsXG4gICAqIHRoaXMgY29kZSBibG9jayBpcyBuZXZlciByZWFjaGVkLiBJZiBjYW5EaXNtaXNzIGlzIGBmYWxzZWAsXG4gICAqIHRoZW4gd2UgbmV2ZXIgZGlzbWlzcy5cbiAgICovXG4gIGlmICh0eXBlb2YgZWwuY2FuRGlzbWlzcyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybjtcbiAgfVxuICAvKipcbiAgICogUnVuIHRoZSBjYW5EaXNtaXNzIGNhbGxiYWNrLlxuICAgKiBJZiB0aGUgZnVuY3Rpb24gcmV0dXJucyBgdHJ1ZWAsXG4gICAqIHRoZW4gd2UgY2FuIHByb2NlZWQgd2l0aCBkaXNtaXNzLlxuICAgKi9cbiAgY29uc3Qgc2hvdWxkRGlzbWlzcyA9IGF3YWl0IGVsLmNhbkRpc21pc3ModW5kZWZpbmVkLCBHRVNUVVJFKTtcbiAgaWYgKCFzaG91bGREaXNtaXNzKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8qKlxuICAgKiBJZiBjYW5EaXNtaXNzIHJlc29sdmVkIGFmdGVyIHRoZSBzbmFwXG4gICAqIGJhY2sgYW5pbWF0aW9uIGZpbmlzaGVkLCB3ZSBjYW5cbiAgICogZGlzbWlzcyBpbW1lZGlhdGVseS5cbiAgICpcbiAgICogSWYgY2FuRGlzbWlzcyByZXNvbHZlZCBiZWZvcmUgdGhlIHNuYXBcbiAgICogYmFjayBhbmltYXRpb24gZmluaXNoZWQsIHdlIG5lZWQgdG9cbiAgICogd2FpdCB1bnRpbCB0aGUgc25hcCBiYWNrIGFuaW1hdGlvbiBpc1xuICAgKiBkb25lIGJlZm9yZSBkaXNtaXNzaW5nLlxuICAgKi9cbiAgaWYgKGFuaW1hdGlvbi5pc1J1bm5pbmcoKSkge1xuICAgIGFuaW1hdGlvbi5vbkZpbmlzaCgoKSA9PiB7XG4gICAgICBlbC5kaXNtaXNzKHVuZGVmaW5lZCwgJ2hhbmRsZXInKTtcbiAgICB9LCB7XG4gICAgICBvbmVUaW1lQ2FsbGJhY2s6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBlbC5kaXNtaXNzKHVuZGVmaW5lZCwgJ2hhbmRsZXInKTtcbiAgfVxufTtcbi8qKlxuICogVGhpcyBmdW5jdGlvbiBsZXRzIHVzIHNpbXVsYXRlIGEgcmVhbGlzdGljIHNwcmluZy1saWtlIGFuaW1hdGlvblxuICogd2hlbiBzd2lwaW5nIGRvd24gb24gdGhlIG1vZGFsLlxuICogVGhlcmUgYXJlIHR3byBmb3JjZXMgdGhhdCB3ZSBuZWVkIHRvIHVzZSB0byBjb21wdXRlIHRoZSBzcHJpbmcgcGh5c2ljczpcbiAqXG4gKiAxLiBTdGlmZm5lc3MsIGs6IFRoaXMgaXMgYSBtZWFzdXJlIG9mIHJlc2lzdGFuY2UgYXBwbGllZCBhIHNwcmluZy5cbiAqIDIuIERhbXBlbmluZywgYzogVGhpcyB2YWx1ZSBoYXMgdGhlIGVmZmVjdCBvZiByZWR1Y2luZyBvciBwcmV2ZW50aW5nIG9zY2lsbGF0aW9uLlxuICpcbiAqIFVzaW5nIHRoZXNlIHR3byB2YWx1ZXMsIHdlIGNhbiBjYWxjdWxhdGUgdGhlIFNwcmluZyBGb3JjZSBhbmQgdGhlIERhbXBlbmluZyBGb3JjZVxuICogdG8gY29tcHV0ZSB0aGUgdG90YWwgZm9yY2UgYXBwbGllZCB0byBhIHNwcmluZy5cbiAqXG4gKiBTcHJpbmcgRm9yY2U6IFRoaXMgZm9yY2UgcHVsbHMgYSBzcHJpbmcgYmFjayBpbnRvIGl0cyBlcXVpbGlicml1bSBwb3NpdGlvbi5cbiAqIEhvb2tlJ3MgTGF3IHRlbGxzIHVzIHRoYXQgdGhhdCBzcHJpbmcgZm9yY2UgKEZTKSA9IGtYLlxuICogayBpcyB0aGUgc3RpZmZuZXNzIG9mIGEgc3ByaW5nLCBhbmQgWCBpcyB0aGUgZGlzcGxhY2VtZW50IG9mIHRoZSBzcHJpbmcgZnJvbSBpdHNcbiAqIGVxdWlsaWJyaXVtIHBvc2l0aW9uLiBJbiB0aGlzIGNhc2UsIGl0IGlzIHRoZSBhbW91bnQgYnkgd2hpY2ggdGhlIGZyZWUgZW5kXG4gKiBvZiBhIHNwcmluZyB3YXMgZGlzcGxhY2VkIChzdHJldGNoZWQvcHVzaGVkKSBmcm9tIGl0cyBcInJlbGF4ZWRcIiBwb3NpdGlvbi5cbiAqXG4gKiBEYW1wZW5pbmcgRm9yY2U6IFRoaXMgZm9yY2Ugc2xvd3MgZG93biBtb3Rpb24uIFdpdGhvdXQgaXQsIGEgc3ByaW5nIHdvdWxkIG9zY2lsbGF0ZSBmb3JldmVyLlxuICogVGhlIGRhbXBlbmluZyBmb3JjZSwgRkQsIGNhbiBiZSBmb3VuZCB2aWEgdGhpcyBmb3JtdWxhOiBGRCA9IC1jdlxuICogd2hlcmUgYyB0aGUgZGFtcGVuaW5nIHZhbHVlIGFuZCB2IGlzIHZlbG9jaXR5LlxuICpcbiAqIFRoZXJlZm9yZSwgdGhlIHJlc3VsdGluZyBmb3JjZSB0aGF0IGlzIGV4ZXJ0ZWQgb24gdGhlIGJsb2NrIGlzOlxuICogRiA9IEZTICsgRkQgPSAta1ggLSBjdlxuICpcbiAqIE5ld3RvbidzIDJuZCBMYXcgdGVsbHMgdXMgdGhhdCBGID0gbWE6XG4gKiBtYSA9IC1rWCAtIGN2LlxuICpcbiAqIEZvciBJb25pYydzIHB1cnBvc2VzLCB3ZSBjYW4gYXNzdW1lIHRoYXQgbSA9IDE6XG4gKiBhID0gLWtYIC0gY3ZcbiAqXG4gKiBJbWFnaW5lIGEgYmxvY2sgYXR0YWNoZWQgdG8gdGhlIGVuZCBvZiBhIHNwcmluZy4gQXQgZXF1aWxpYnJpdW1cbiAqIHRoZSBibG9jayBpcyBhdCBwb3NpdGlvbiB4ID0gMS5cbiAqIFByZXNzaW5nIG9uIHRoZSBibG9jayBtb3ZlcyBpdCB0byBwb3NpdGlvbiB4ID0gMDtcbiAqIFNvLCB0byBjYWxjdWxhdGUgdGhlIGRpc3BsYWNlbWVudCwgd2UgbmVlZCB0byB0YWtlIHRoZVxuICogY3VycmVudCBwb3NpdGlvbiBhbmQgc3VidHJhY3QgdGhlIHByZXZpb3VzIHBvc2l0aW9uIGZyb20gaXQuXG4gKiBYID0geCAtIHgwID0gMCAtIDEgPSAtMS5cbiAqXG4gKiBGb3IgSW9uaWMncyBwdXJwb3Nlcywgd2UgYXJlIG9ubHkgcHVzaGluZyBvbiB0aGUgc3ByaW5nIG1vZGFsXG4gKiBzbyB3ZSBoYXZlIGEgbWF4IHBvc2l0aW9uIG9mIDEuXG4gKiBBcyBhIHJlc3VsdCwgd2UgY2FuIGV4cGFuZCBkaXNwbGFjZW1lbnQgdG8gdGhpcyBmb3JtdWxhOlxuICogWCA9IHggLSAxXG4gKlxuICogYSA9IC1rKHggLSAxKSAtIGN2XG4gKlxuICogV2UgY2FuIHJlcHJlc2VudCB0aGUgbW90aW9uIG9mIHNvbWV0aGluZyBhcyBhIGZ1bmN0aW9uIG9mIHRpbWU6IGYodCkgPSB4LlxuICogVGhlIGRlcml2YXRpdmUgb2YgcG9zaXRpb24gZ2l2ZXMgdXMgdGhlIHZlbG9jaXR5OiBmJyh0KVxuICogVGhlIGRlcml2YXRpdmUgb2YgdGhlIHZlbG9jaXR5IGdpdmVzIHVzIHRoZSBhY2NlbGVyYXRpb246IGYnJyh0KVxuICpcbiAqIFdlIGNhbiBzdWJzdGl0dXRlIHRoZSBmb3JtdWxhIGFib3ZlIHdpdGggdGhlc2UgdmFsdWVzOlxuICpcbiAqIGZcIih0KSA9IC1rICogKGYodCkgLSAxKSAtIGMgKiBmJyh0KVxuICpcbiAqIFRoaXMgaXMgY2FsbGVkIGEgZGlmZmVyZW50aWFsIGVxdWF0aW9uLlxuICpcbiAqIFdlIGtub3cgdGhhdCBhdCB0ID0gMCwgd2UgYXJlIGF0IHggPSAwIGJlY2F1c2UgdGhlIG1vZGFsIGRvZXMgbm90IG1vdmU6IGYoMCkgPSAwXG4gKiBUaGlzIG1lYW5zIG91ciB2ZWxvY2l0eSBpcyBhbHNvIHplcm86IGYnKDApID0gMC5cbiAqXG4gKiBXZSBjYW4gY2hlYXQgYSBiaXQgYW5kIHBsdWcgdGhlIGZvcm11bGEgaW50byBXb2xmcmFtIEFscGhhLlxuICogSG93ZXZlciwgd2UgbmVlZCB0byBwaWNrIHN0aWZmbmVzcyBhbmQgZGFtcGVuaW5nIHZhbHVlczpcbiAqIGsgPSAwLjU3XG4gKiBjID0gMTVcbiAqXG4gKiBJIHBpY2tlZCB0aGVzZSBhcyB0aGV5IGFyZSBmYWlybHkgY2xvc2UgdG8gbmF0aXZlIGlPUydzIHNwcmluZyBlZmZlY3RcbiAqIHdpdGggdGhlIG1vZGFsLlxuICpcbiAqIFdoYXQgd2UgcGx1ZyBpbiBpcyB0aGlzOiBmKDApID0gMDsgZicoMCkgPSAwOyBmJycodCkgPSAtMC41NyhmKHQpIC0gMSkgLSAxNWYnKHQpXG4gKlxuICogVGhlIHJlc3VsdCBpcyBhIGZvcm11bGEgdGhhdCBsZXRzIHVzIGNhbGN1bGF0ZSB0aGUgYWNjZWxlcmF0aW9uXG4gKiBmb3IgYSBnaXZlbiB0aW1lIHQuXG4gKiBOb3RlOiBUaGlzIGlzIHRoZSBhcHByb3hpbWF0ZSBmb3JtIG9mIHRoZSBzb2x1dGlvbi4gV29sZnJhbSBBbHBoYSB3aWxsXG4gKiBnaXZlIHlvdSBhIGNvbXBsZXggZGlmZmVyZW50aWFsIGVxdWF0aW9uIHRvby5cbiAqL1xuY29uc3QgY2FsY3VsYXRlU3ByaW5nU3RlcCA9IHQgPT4ge1xuICByZXR1cm4gMC4wMDI1NTI3NSAqIDIuNzE4MjggKiogKC0xNC45NjE5ICogdCkgLSAxLjAwMjU1ICogMi43MTgyOCAqKiAoLTAuMDM4MDk2OCAqIHQpICsgMTtcbn07XG5cbi8vIERlZmF1bHRzIGZvciB0aGUgY2FyZCBzd2lwZSBhbmltYXRpb25cbmNvbnN0IFN3aXBlVG9DbG9zZURlZmF1bHRzID0ge1xuICBNSU5fUFJFU0VOVElOR19TQ0FMRTogMC45MTVcbn07XG5jb25zdCBjcmVhdGVTd2lwZVRvQ2xvc2VHZXN0dXJlID0gKGVsLCBhbmltYXRpb24sIHN0YXR1c0JhclN0eWxlLCBvbkRpc21pc3MpID0+IHtcbiAgLyoqXG4gICAqIFRoZSBzdGVwIHZhbHVlIGF0IHdoaWNoIGEgY2FyZCBtb2RhbFxuICAgKiBpcyBlbGlnaWJsZSBmb3IgZGlzbWlzc2luZyB2aWEgZ2VzdHVyZS5cbiAgICovXG4gIGNvbnN0IERJU01JU1NfVEhSRVNIT0xEID0gMC41O1xuICBjb25zdCBoZWlnaHQgPSBlbC5vZmZzZXRIZWlnaHQ7XG4gIGxldCBpc09wZW4gPSBmYWxzZTtcbiAgbGV0IGNhbkRpc21pc3NCbG9ja3NHZXN0dXJlID0gZmFsc2U7XG4gIGxldCBjb250ZW50RWwgPSBudWxsO1xuICBsZXQgc2Nyb2xsRWwgPSBudWxsO1xuICBjb25zdCBjYW5EaXNtaXNzTWF4U3RlcCA9IDAuMjtcbiAgbGV0IGluaXRpYWxTY3JvbGxZID0gdHJ1ZTtcbiAgbGV0IGxhc3RTdGVwID0gMDtcbiAgY29uc3QgZ2V0U2Nyb2xsWSA9ICgpID0+IHtcbiAgICBpZiAoY29udGVudEVsICYmIGlzSW9uQ29udGVudChjb250ZW50RWwpKSB7XG4gICAgICByZXR1cm4gY29udGVudEVsLnNjcm9sbFk7XG4gICAgICAvKipcbiAgICAgICAqIEN1c3RvbSBzY3JvbGwgY29udGFpbmVycyBhcmUgaW50ZW5kZWQgdG8gYmVcbiAgICAgICAqIHVzZWQgd2l0aCB2aXJ0dWFsIHNjcm9sbGluZywgc28gd2UgYXNzdW1lXG4gICAgICAgKiB0aGVyZSBpcyBzY3JvbGxpbmcgaW4gdGhpcyBjYXNlLlxuICAgICAgICovXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgY2FuU3RhcnQgPSBkZXRhaWwgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGRldGFpbC5ldmVudC50YXJnZXQ7XG4gICAgaWYgKHRhcmdldCA9PT0gbnVsbCB8fCAhdGFyZ2V0LmNsb3Nlc3QpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJZiB3ZSBhcmUgc3dpcGluZyBvbiB0aGUgY29udGVudCxcbiAgICAgKiBzd2lwaW5nIHNob3VsZCBvbmx5IGJlIHBvc3NpYmxlIGlmXG4gICAgICogdGhlIGNvbnRlbnQgaXMgc2Nyb2xsZWQgYWxsIHRoZSB3YXlcbiAgICAgKiB0byB0aGUgdG9wIHNvIHRoYXQgd2UgZG8gbm90IGludGVyZmVyZVxuICAgICAqIHdpdGggc2Nyb2xsaW5nLlxuICAgICAqXG4gICAgICogV2UgY2Fubm90IGFzc3VtZSB0aGF0IHRoZSBgaW9uLWNvbnRlbnRgXG4gICAgICogdGFyZ2V0IHdpbGwgcmVtYWluIGNvbnNpc3RlbnQgYmV0d2VlblxuICAgICAqIHN3aXBlcy4gRm9yIGV4YW1wbGUsIHdoZW4gdXNpbmdcbiAgICAgKiBpb24tbmF2IHdpdGhpbiBhIGNhcmQgbW9kYWwgaXQgaXNcbiAgICAgKiBwb3NzaWJsZSB0byBzd2lwZSwgcHVzaCBhIHZpZXcsIGFuZCB0aGVuXG4gICAgICogc3dpcGUgYWdhaW4uIFRoZSB0YXJnZXQgY29udGVudCB3aWxsIG5vdFxuICAgICAqIGJlIHRoZSBzYW1lIGJldHdlZW4gc3dpcGVzLlxuICAgICAqL1xuICAgIGNvbnRlbnRFbCA9IGZpbmRDbG9zZXN0SW9uQ29udGVudCh0YXJnZXQpO1xuICAgIGlmIChjb250ZW50RWwpIHtcbiAgICAgIC8qKlxuICAgICAgICogVGhlIGNhcmQgc2hvdWxkIG5ldmVyIHN3aXBlIHRvIGNsb3NlXG4gICAgICAgKiBvbiB0aGUgY29udGVudCB3aXRoIGEgcmVmcmVzaGVyLlxuICAgICAgICogTm90ZTogV2UgY2Fubm90IHNvbHZlIHRoaXMgYnkgbWFraW5nIHRoZVxuICAgICAgICogc3dpcGVUb0Nsb3NlIGdlc3R1cmUgaGF2ZSBhIGhpZ2hlciBwcmlvcml0eVxuICAgICAgICogdGhhbiB0aGUgcmVmcmVzaGVyIGdlc3R1cmUgYXMgdGhlIGlPUyBuYXRpdmVcbiAgICAgICAqIHJlZnJlc2ggZ2VzdHVyZSB1c2VzIGEgc2Nyb2xsIGxpc3RlbmVyIGluXG4gICAgICAgKiBhZGRpdGlvbiB0byBhIGdlc3R1cmUuXG4gICAgICAgKlxuICAgICAgICogTm90ZTogRG8gbm90IHVzZSBnZXRTY3JvbGxFbGVtZW50IGhlcmVcbiAgICAgICAqIGJlY2F1c2Ugd2UgbmVlZCB0aGlzIHRvIGJlIGEgc3luY2hyb25vdXNcbiAgICAgICAqIG9wZXJhdGlvbiwgYW5kIGdldFNjcm9sbEVsZW1lbnQgaXNcbiAgICAgICAqIGFzeW5jaHJvbm91cy5cbiAgICAgICAqL1xuICAgICAgaWYgKGlzSW9uQ29udGVudChjb250ZW50RWwpKSB7XG4gICAgICAgIGNvbnN0IHJvb3QgPSBnZXRFbGVtZW50Um9vdChjb250ZW50RWwpO1xuICAgICAgICBzY3JvbGxFbCA9IHJvb3QucXVlcnlTZWxlY3RvcignLmlubmVyLXNjcm9sbCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2Nyb2xsRWwgPSBjb250ZW50RWw7XG4gICAgICB9XG4gICAgICBjb25zdCBoYXNSZWZyZXNoZXJJbkNvbnRlbnQgPSAhIWNvbnRlbnRFbC5xdWVyeVNlbGVjdG9yKCdpb24tcmVmcmVzaGVyJyk7XG4gICAgICByZXR1cm4gIWhhc1JlZnJlc2hlckluQ29udGVudCAmJiBzY3JvbGxFbC5zY3JvbGxUb3AgPT09IDA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhcmQgc2hvdWxkIGJlIHN3aXBlYWJsZSBvbiBhbGxcbiAgICAgKiBwYXJ0cyBvZiB0aGUgbW9kYWwgZXhjZXB0IGZvciB0aGUgZm9vdGVyLlxuICAgICAqL1xuICAgIGNvbnN0IGZvb3RlciA9IHRhcmdldC5jbG9zZXN0KCdpb24tZm9vdGVyJyk7XG4gICAgaWYgKGZvb3RlciA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbiAgY29uc3Qgb25TdGFydCA9IGRldGFpbCA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgZGVsdGFZXG4gICAgfSA9IGRldGFpbDtcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGluaXRpYWwgc2Nyb2xsWSB2YWx1ZSBzb1xuICAgICAqIHRoYXQgd2UgY2FuIGNvcnJlY3RseSByZXNldCB0aGUgc2Nyb2xsWVxuICAgICAqIHByb3Agd2hlbiB0aGUgZ2VzdHVyZSBlbmRzLlxuICAgICAqL1xuICAgIGluaXRpYWxTY3JvbGxZID0gZ2V0U2Nyb2xsWSgpO1xuICAgIC8qKlxuICAgICAqIElmIGNhbkRpc21pc3MgaXMgYW55dGhpbmcgb3RoZXIgdGhhbiBgdHJ1ZWBcbiAgICAgKiB0aGVuIHVzZXJzIHNob3VsZCBiZSBhYmxlIHRvIHN3aXBlIGRvd25cbiAgICAgKiB1bnRpbCBhIHRocmVzaG9sZCBpcyBoaXQuIEF0IHRoYXQgcG9pbnQsXG4gICAgICogdGhlIGNhcmQgbW9kYWwgc2hvdWxkIG5vdCBwcm9jZWVkIGFueSBmdXJ0aGVyLlxuICAgICAqIFRPRE8gKEZXLTkzNylcbiAgICAgKiBSZW1vdmUgdW5kZWZpbmVkIGNoZWNrXG4gICAgICovXG4gICAgY2FuRGlzbWlzc0Jsb2Nrc0dlc3R1cmUgPSBlbC5jYW5EaXNtaXNzICE9PSB1bmRlZmluZWQgJiYgZWwuY2FuRGlzbWlzcyAhPT0gdHJ1ZTtcbiAgICAvKipcbiAgICAgKiBJZiB3ZSBhcmUgcHVsbGluZyBkb3duLCB0aGVuXG4gICAgICogaXQgaXMgcG9zc2libGUgd2UgYXJlIHB1bGxpbmcgb24gdGhlXG4gICAgICogY29udGVudC4gV2UgZG8gbm90IHdhbnQgc2Nyb2xsaW5nIHRvXG4gICAgICogaGFwcGVuIGF0IHRoZSBzYW1lIHRpbWUgYXMgdGhlIGdlc3R1cmUuXG4gICAgICovXG4gICAgaWYgKGRlbHRhWSA+IDAgJiYgY29udGVudEVsKSB7XG4gICAgICBkaXNhYmxlQ29udGVudFNjcm9sbFkoY29udGVudEVsKTtcbiAgICB9XG4gICAgYW5pbWF0aW9uLnByb2dyZXNzU3RhcnQodHJ1ZSwgaXNPcGVuID8gMSA6IDApO1xuICB9O1xuICBjb25zdCBvbk1vdmUgPSBkZXRhaWwgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGRlbHRhWVxuICAgIH0gPSBkZXRhaWw7XG4gICAgLyoqXG4gICAgICogSWYgd2UgYXJlIHB1bGxpbmcgZG93biwgdGhlblxuICAgICAqIGl0IGlzIHBvc3NpYmxlIHdlIGFyZSBwdWxsaW5nIG9uIHRoZVxuICAgICAqIGNvbnRlbnQuIFdlIGRvIG5vdCB3YW50IHNjcm9sbGluZyB0b1xuICAgICAqIGhhcHBlbiBhdCB0aGUgc2FtZSB0aW1lIGFzIHRoZSBnZXN0dXJlLlxuICAgICAqL1xuICAgIGlmIChkZWx0YVkgPiAwICYmIGNvbnRlbnRFbCkge1xuICAgICAgZGlzYWJsZUNvbnRlbnRTY3JvbGxZKGNvbnRlbnRFbCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIElmIHdlIGFyZSBzd2lwaW5nIG9uIHRoZSBjb250ZW50XG4gICAgICogdGhlbiB0aGUgc3dpcGUgZ2VzdHVyZSBzaG91bGQgb25seVxuICAgICAqIGhhcHBlbiBpZiB3ZSBhcmUgcHVsbGluZyBkb3duLlxuICAgICAqXG4gICAgICogSG93ZXZlciwgaWYgd2UgcHVsbCB1cCBhbmRcbiAgICAgKiB0aGVuIGRvd24gc3VjaCB0aGF0IHRoZSBzY3JvbGwgcG9zaXRpb25cbiAgICAgKiByZXR1cm5zIHRvIDAsIHdlIHNob3VsZCBiZSBhYmxlIHRvIHN3aXBlXG4gICAgICogdGhlIGNhcmQuXG4gICAgICovXG4gICAgY29uc3Qgc3RlcCA9IGRldGFpbC5kZWx0YVkgLyBoZWlnaHQ7XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdXNlciBpcyBzd2lwaW5nIGRvd24gYW5kXG4gICAgICogaWYgd2UgaGF2ZSBhIGNhbkRpc21pc3MgdmFsdWUgdGhhdFxuICAgICAqIHNob3VsZCBibG9jayB0aGUgZ2VzdHVyZSBmcm9tXG4gICAgICogcHJvY2VlZGluZyxcbiAgICAgKi9cbiAgICBjb25zdCBpc0F0dGVtcHRpbmdEaXNtaXNzV2l0aENhbkRpc21pc3MgPSBzdGVwID49IDAgJiYgY2FuRGlzbWlzc0Jsb2Nrc0dlc3R1cmU7XG4gICAgLyoqXG4gICAgICogSWYgd2UgYXJlIGJsb2NraW5nIHRoZSBnZXN0dXJlIGZyb20gZGlzbWlzc2luZyxcbiAgICAgKiBzZXQgdGhlIG1heCBzdGVwIHZhbHVlIHNvIHRoYXQgdGhlIHNoZWV0IGNhbm5vdCBiZVxuICAgICAqIGNvbXBsZXRlbHkgaGlkZGVuLlxuICAgICAqL1xuICAgIGNvbnN0IG1heFN0ZXAgPSBpc0F0dGVtcHRpbmdEaXNtaXNzV2l0aENhbkRpc21pc3MgPyBjYW5EaXNtaXNzTWF4U3RlcCA6IDAuOTk5OTtcbiAgICAvKipcbiAgICAgKiBJZiB3ZSBhcmUgYmxvY2tpbmcgdGhlIGdlc3R1cmUgZnJvbVxuICAgICAqIGRpc21pc3NpbmcsIGNhbGN1bGF0ZSB0aGUgc3ByaW5nIG1vZGlmaWVyIHZhbHVlXG4gICAgICogdGhpcyB3aWxsIGJlIGFkZGVkIHRvIHRoZSBzdGFydGluZyBicmVha3BvaW50XG4gICAgICogdmFsdWUgdG8gZ2l2ZSB0aGUgZ2VzdHVyZSBhIHNwcmluZy1saWtlIGZlZWxpbmcuXG4gICAgICogTm90ZSB0aGF0IHRoZSBzdGFydGluZyBicmVha3BvaW50IGlzIGFsd2F5cyAwLFxuICAgICAqIHNvIHdlIG9taXQgYWRkaW5nIDAgdG8gdGhlIHJlc3VsdC5cbiAgICAgKi9cbiAgICBjb25zdCBwcm9jZXNzZWRTdGVwID0gaXNBdHRlbXB0aW5nRGlzbWlzc1dpdGhDYW5EaXNtaXNzID8gY2FsY3VsYXRlU3ByaW5nU3RlcChzdGVwIC8gbWF4U3RlcCkgOiBzdGVwO1xuICAgIGNvbnN0IGNsYW1wZWRTdGVwID0gY2xhbXAoMC4wMDAxLCBwcm9jZXNzZWRTdGVwLCBtYXhTdGVwKTtcbiAgICBhbmltYXRpb24ucHJvZ3Jlc3NTdGVwKGNsYW1wZWRTdGVwKTtcbiAgICAvKipcbiAgICAgKiBXaGVuIHN3aXBpbmcgZG93biBoYWxmIHdheSwgdGhlIHN0YXR1cyBiYXIgc3R5bGVcbiAgICAgKiBzaG91bGQgYmUgcmVzZXQgdG8gaXRzIGRlZmF1bHQgdmFsdWUuXG4gICAgICpcbiAgICAgKiBXZSB0cmFjayBsYXN0U3RlcCBzbyB0aGF0IHdlIGRvIG5vdCBmaXJlIHRoZXNlXG4gICAgICogZnVuY3Rpb25zIG9uIGV2ZXJ5IG9uTW92ZSwgb25seSB3aGVuIHRoZSB1c2VyIGhhc1xuICAgICAqIGNyb3NzZWQgYSBjZXJ0YWluIHRocmVzaG9sZC5cbiAgICAgKi9cbiAgICBpZiAoY2xhbXBlZFN0ZXAgPj0gRElTTUlTU19USFJFU0hPTEQgJiYgbGFzdFN0ZXAgPCBESVNNSVNTX1RIUkVTSE9MRCkge1xuICAgICAgc2V0Q2FyZFN0YXR1c0JhckRlZmF1bHQoc3RhdHVzQmFyU3R5bGUpO1xuICAgICAgLyoqXG4gICAgICAgKiBIb3dldmVyLCBpZiB3ZSBzd2lwZSBiYWNrIHVwLCB0aGVuIHRoZVxuICAgICAgICogc3RhdHVzIGJhciBzdHlsZSBzaG91bGQgYmUgc2V0IHRvIGhhdmUgbGlnaHRcbiAgICAgICAqIHRleHQgb24gYSBkYXJrIGJhY2tncm91bmQuXG4gICAgICAgKi9cbiAgICB9IGVsc2UgaWYgKGNsYW1wZWRTdGVwIDwgRElTTUlTU19USFJFU0hPTEQgJiYgbGFzdFN0ZXAgPj0gRElTTUlTU19USFJFU0hPTEQpIHtcbiAgICAgIHNldENhcmRTdGF0dXNCYXJEYXJrKCk7XG4gICAgfVxuICAgIGxhc3RTdGVwID0gY2xhbXBlZFN0ZXA7XG4gIH07XG4gIGNvbnN0IG9uRW5kID0gZGV0YWlsID0+IHtcbiAgICBjb25zdCB2ZWxvY2l0eSA9IGRldGFpbC52ZWxvY2l0eVk7XG4gICAgY29uc3Qgc3RlcCA9IGRldGFpbC5kZWx0YVkgLyBoZWlnaHQ7XG4gICAgY29uc3QgaXNBdHRlbXB0aW5nRGlzbWlzc1dpdGhDYW5EaXNtaXNzID0gc3RlcCA+PSAwICYmIGNhbkRpc21pc3NCbG9ja3NHZXN0dXJlO1xuICAgIGNvbnN0IG1heFN0ZXAgPSBpc0F0dGVtcHRpbmdEaXNtaXNzV2l0aENhbkRpc21pc3MgPyBjYW5EaXNtaXNzTWF4U3RlcCA6IDAuOTk5OTtcbiAgICBjb25zdCBwcm9jZXNzZWRTdGVwID0gaXNBdHRlbXB0aW5nRGlzbWlzc1dpdGhDYW5EaXNtaXNzID8gY2FsY3VsYXRlU3ByaW5nU3RlcChzdGVwIC8gbWF4U3RlcCkgOiBzdGVwO1xuICAgIGNvbnN0IGNsYW1wZWRTdGVwID0gY2xhbXAoMC4wMDAxLCBwcm9jZXNzZWRTdGVwLCBtYXhTdGVwKTtcbiAgICBjb25zdCB0aHJlc2hvbGQgPSAoZGV0YWlsLmRlbHRhWSArIHZlbG9jaXR5ICogMTAwMCkgLyBoZWlnaHQ7XG4gICAgLyoqXG4gICAgICogSWYgY2FuRGlzbWlzcyBibG9ja3NcbiAgICAgKiB0aGUgc3dpcGUgZ2VzdHVyZSwgdGhlbiB0aGVcbiAgICAgKiBhbmltYXRpb24gY2FuIG5ldmVyIGNvbXBsZXRlIHVudGlsXG4gICAgICogY2FuRGlzbWlzcyBpcyBjaGVja2VkLlxuICAgICAqL1xuICAgIGNvbnN0IHNob3VsZENvbXBsZXRlID0gIWlzQXR0ZW1wdGluZ0Rpc21pc3NXaXRoQ2FuRGlzbWlzcyAmJiB0aHJlc2hvbGQgPj0gRElTTUlTU19USFJFU0hPTEQ7XG4gICAgbGV0IG5ld1N0ZXBWYWx1ZSA9IHNob3VsZENvbXBsZXRlID8gLTFlLTMgOiAwLjAwMTtcbiAgICBpZiAoIXNob3VsZENvbXBsZXRlKSB7XG4gICAgICBhbmltYXRpb24uZWFzaW5nKCdjdWJpYy1iZXppZXIoMSwgMCwgMC42OCwgMC4yOCknKTtcbiAgICAgIG5ld1N0ZXBWYWx1ZSArPSBnZXRUaW1lR2l2ZW5Qcm9ncmVzc2lvbihbMCwgMF0sIFsxLCAwXSwgWzAuNjgsIDAuMjhdLCBbMSwgMV0sIGNsYW1wZWRTdGVwKVswXTtcbiAgICB9IGVsc2Uge1xuICAgICAgYW5pbWF0aW9uLmVhc2luZygnY3ViaWMtYmV6aWVyKDAuMzIsIDAuNzIsIDAsIDEpJyk7XG4gICAgICBuZXdTdGVwVmFsdWUgKz0gZ2V0VGltZUdpdmVuUHJvZ3Jlc3Npb24oWzAsIDBdLCBbMC4zMiwgMC43Ml0sIFswLCAxXSwgWzEsIDFdLCBjbGFtcGVkU3RlcClbMF07XG4gICAgfVxuICAgIGNvbnN0IGR1cmF0aW9uID0gc2hvdWxkQ29tcGxldGUgPyBjb21wdXRlRHVyYXRpb24oc3RlcCAqIGhlaWdodCwgdmVsb2NpdHkpIDogY29tcHV0ZUR1cmF0aW9uKCgxIC0gY2xhbXBlZFN0ZXApICogaGVpZ2h0LCB2ZWxvY2l0eSk7XG4gICAgaXNPcGVuID0gc2hvdWxkQ29tcGxldGU7XG4gICAgZ2VzdHVyZS5lbmFibGUoZmFsc2UpO1xuICAgIGlmIChjb250ZW50RWwpIHtcbiAgICAgIHJlc2V0Q29udGVudFNjcm9sbFkoY29udGVudEVsLCBpbml0aWFsU2Nyb2xsWSk7XG4gICAgfVxuICAgIGFuaW1hdGlvbi5vbkZpbmlzaCgoKSA9PiB7XG4gICAgICBpZiAoIXNob3VsZENvbXBsZXRlKSB7XG4gICAgICAgIGdlc3R1cmUuZW5hYmxlKHRydWUpO1xuICAgICAgfVxuICAgIH0pLnByb2dyZXNzRW5kKHNob3VsZENvbXBsZXRlID8gMSA6IDAsIG5ld1N0ZXBWYWx1ZSwgZHVyYXRpb24pO1xuICAgIC8qKlxuICAgICAqIElmIHRoZSBjYW5EaXNtaXNzIHZhbHVlIGJsb2NrZWQgdGhlIGdlc3R1cmVcbiAgICAgKiBmcm9tIHByb2NlZWRpbmcsIHRoZW4gd2Ugc2hvdWxkIGlnbm9yZSB3aGF0ZXZlclxuICAgICAqIHNob3VsZENvbXBsZXRlIGlzLiBXaGV0aGVyIG9yIG5vdCB0aGUgbW9kYWxcbiAgICAgKiBhbmltYXRpb24gc2hvdWxkIGNvbXBsZXRlIGlzIG5vdyBkZXRlcm1pbmVkIGJ5XG4gICAgICogY2FuRGlzbWlzcy5cbiAgICAgKlxuICAgICAqIElmIHRoZSB1c2VyIHN3aXBlZCA+MjUlIG9mIHRoZSB3YXlcbiAgICAgKiB0byB0aGUgbWF4IHN0ZXAsIHRoZW4gd2Ugc2hvdWxkXG4gICAgICogY2hlY2sgY2FuRGlzbWlzcy4gMjUlIHdhcyBjaG9zZW5cbiAgICAgKiB0byBhdm9pZCBhY2NpZGVudGFsIHN3aXBlcy5cbiAgICAgKi9cbiAgICBpZiAoaXNBdHRlbXB0aW5nRGlzbWlzc1dpdGhDYW5EaXNtaXNzICYmIGNsYW1wZWRTdGVwID4gbWF4U3RlcCAvIDQpIHtcbiAgICAgIGhhbmRsZUNhbkRpc21pc3MoZWwsIGFuaW1hdGlvbik7XG4gICAgfSBlbHNlIGlmIChzaG91bGRDb21wbGV0ZSkge1xuICAgICAgb25EaXNtaXNzKCk7XG4gICAgfVxuICB9O1xuICBjb25zdCBnZXN0dXJlID0gY3JlYXRlR2VzdHVyZSh7XG4gICAgZWwsXG4gICAgZ2VzdHVyZU5hbWU6ICdtb2RhbFN3aXBlVG9DbG9zZScsXG4gICAgZ2VzdHVyZVByaW9yaXR5OiBPVkVSTEFZX0dFU1RVUkVfUFJJT1JJVFksXG4gICAgZGlyZWN0aW9uOiAneScsXG4gICAgdGhyZXNob2xkOiAxMCxcbiAgICBjYW5TdGFydCxcbiAgICBvblN0YXJ0LFxuICAgIG9uTW92ZSxcbiAgICBvbkVuZFxuICB9KTtcbiAgcmV0dXJuIGdlc3R1cmU7XG59O1xuY29uc3QgY29tcHV0ZUR1cmF0aW9uID0gKHJlbWFpbmluZywgdmVsb2NpdHkpID0+IHtcbiAgcmV0dXJuIGNsYW1wKDQwMCwgcmVtYWluaW5nIC8gTWF0aC5hYnModmVsb2NpdHkgKiAxLjEpLCA1MDApO1xufTtcbmNvbnN0IGNyZWF0ZVNoZWV0RW50ZXJBbmltYXRpb24gPSBvcHRzID0+IHtcbiAgY29uc3Qge1xuICAgIGN1cnJlbnRCcmVha3BvaW50LFxuICAgIGJhY2tkcm9wQnJlYWtwb2ludCxcbiAgICBleHBhbmRUb1Njcm9sbFxuICB9ID0gb3B0cztcbiAgLyoqXG4gICAqIElmIHRoZSBiYWNrZHJvcEJyZWFrcG9pbnQgaXMgdW5kZWZpbmVkLCB0aGVuIHRoZSBiYWNrZHJvcFxuICAgKiBzaG91bGQgYWx3YXlzIGZhZGUgaW4uIElmIHRoZSBiYWNrZHJvcEJyZWFrcG9pbnQgY2FtZSBiZWZvcmUgdGhlXG4gICAqIGN1cnJlbnQgYnJlYWtwb2ludCwgdGhlbiB0aGUgYmFja2Ryb3Agc2hvdWxkIGJlIGZhZGluZyBpbi5cbiAgICovXG4gIGNvbnN0IHNob3VsZFNob3dCYWNrZHJvcCA9IGJhY2tkcm9wQnJlYWtwb2ludCA9PT0gdW5kZWZpbmVkIHx8IGJhY2tkcm9wQnJlYWtwb2ludCA8IGN1cnJlbnRCcmVha3BvaW50O1xuICBjb25zdCBpbml0aWFsQmFja2Ryb3AgPSBzaG91bGRTaG93QmFja2Ryb3AgPyBgY2FsYyh2YXIoLS1iYWNrZHJvcC1vcGFjaXR5KSAqICR7Y3VycmVudEJyZWFrcG9pbnR9KWAgOiAnMCc7XG4gIGNvbnN0IGJhY2tkcm9wQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCdiYWNrZHJvcEFuaW1hdGlvbicpLmZyb21Ubygnb3BhY2l0eScsIDAsIGluaXRpYWxCYWNrZHJvcCk7XG4gIGlmIChzaG91bGRTaG93QmFja2Ryb3ApIHtcbiAgICBiYWNrZHJvcEFuaW1hdGlvbi5iZWZvcmVTdHlsZXMoe1xuICAgICAgJ3BvaW50ZXItZXZlbnRzJzogJ25vbmUnXG4gICAgfSkuYWZ0ZXJDbGVhclN0eWxlcyhbJ3BvaW50ZXItZXZlbnRzJ10pO1xuICB9XG4gIGNvbnN0IHdyYXBwZXJBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oJ3dyYXBwZXJBbmltYXRpb24nKS5rZXlmcmFtZXMoW3tcbiAgICBvZmZzZXQ6IDAsXG4gICAgb3BhY2l0eTogMSxcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDEwMCUpJ1xuICB9LCB7XG4gICAgb2Zmc2V0OiAxLFxuICAgIG9wYWNpdHk6IDEsXG4gICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgkezEwMCAtIGN1cnJlbnRCcmVha3BvaW50ICogMTAwfSUpYFxuICB9XSk7XG4gIC8qKlxuICAgKiBUaGlzIGFsbG93cyB0aGUgY29udGVudCB0byBiZSBzY3JvbGxhYmxlIGF0IGFueSBicmVha3BvaW50LlxuICAgKi9cbiAgY29uc3QgY29udGVudEFuaW1hdGlvbiA9ICFleHBhbmRUb1Njcm9sbCA/IGNyZWF0ZUFuaW1hdGlvbignY29udGVudEFuaW1hdGlvbicpLmtleWZyYW1lcyhbe1xuICAgIG9mZnNldDogMCxcbiAgICBvcGFjaXR5OiAxLFxuICAgIG1heEhlaWdodDogYCR7KDEgLSBjdXJyZW50QnJlYWtwb2ludCkgKiAxMDB9JWBcbiAgfSwge1xuICAgIG9mZnNldDogMSxcbiAgICBvcGFjaXR5OiAxLFxuICAgIG1heEhlaWdodDogYCR7Y3VycmVudEJyZWFrcG9pbnQgKiAxMDB9JWBcbiAgfV0pIDogdW5kZWZpbmVkO1xuICByZXR1cm4ge1xuICAgIHdyYXBwZXJBbmltYXRpb24sXG4gICAgYmFja2Ryb3BBbmltYXRpb24sXG4gICAgY29udGVudEFuaW1hdGlvblxuICB9O1xufTtcbmNvbnN0IGNyZWF0ZVNoZWV0TGVhdmVBbmltYXRpb24gPSBvcHRzID0+IHtcbiAgY29uc3Qge1xuICAgIGN1cnJlbnRCcmVha3BvaW50LFxuICAgIGJhY2tkcm9wQnJlYWtwb2ludFxuICB9ID0gb3B0cztcbiAgLyoqXG4gICAqIEJhY2tkcm9wIGRvZXMgbm90IGFsd2F5cyBmYWRlIGluIGZyb20gMCB0byAxIGlmIGJhY2tkcm9wQnJlYWtwb2ludFxuICAgKiBpcyBkZWZpbmVkLCBzbyB3ZSBuZWVkIHRvIGFjY291bnQgZm9yIHRoYXQgb2Zmc2V0IGJ5IGZpZ3VyaW5nIG91dFxuICAgKiB3aGF0IHRoZSBjdXJyZW50IGJhY2tkcm9wIHZhbHVlIHNob3VsZCBiZS5cbiAgICovXG4gIGNvbnN0IGJhY2tkcm9wVmFsdWUgPSBgY2FsYyh2YXIoLS1iYWNrZHJvcC1vcGFjaXR5KSAqICR7Z2V0QmFja2Ryb3BWYWx1ZUZvclNoZWV0KGN1cnJlbnRCcmVha3BvaW50LCBiYWNrZHJvcEJyZWFrcG9pbnQpfSlgO1xuICBjb25zdCBkZWZhdWx0QmFja2Ryb3AgPSBbe1xuICAgIG9mZnNldDogMCxcbiAgICBvcGFjaXR5OiBiYWNrZHJvcFZhbHVlXG4gIH0sIHtcbiAgICBvZmZzZXQ6IDEsXG4gICAgb3BhY2l0eTogMFxuICB9XTtcbiAgY29uc3QgY3VzdG9tQmFja2Ryb3AgPSBbe1xuICAgIG9mZnNldDogMCxcbiAgICBvcGFjaXR5OiBiYWNrZHJvcFZhbHVlXG4gIH0sIHtcbiAgICBvZmZzZXQ6IGJhY2tkcm9wQnJlYWtwb2ludCxcbiAgICBvcGFjaXR5OiAwXG4gIH0sIHtcbiAgICBvZmZzZXQ6IDEsXG4gICAgb3BhY2l0eTogMFxuICB9XTtcbiAgY29uc3QgYmFja2Ryb3BBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oJ2JhY2tkcm9wQW5pbWF0aW9uJykua2V5ZnJhbWVzKGJhY2tkcm9wQnJlYWtwb2ludCAhPT0gMCA/IGN1c3RvbUJhY2tkcm9wIDogZGVmYXVsdEJhY2tkcm9wKTtcbiAgY29uc3Qgd3JhcHBlckFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbignd3JhcHBlckFuaW1hdGlvbicpLmtleWZyYW1lcyhbe1xuICAgIG9mZnNldDogMCxcbiAgICBvcGFjaXR5OiAxLFxuICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoJHsxMDAgLSBjdXJyZW50QnJlYWtwb2ludCAqIDEwMH0lKWBcbiAgfSwge1xuICAgIG9mZnNldDogMSxcbiAgICBvcGFjaXR5OiAxLFxuICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoMTAwJSlgXG4gIH1dKTtcbiAgcmV0dXJuIHtcbiAgICB3cmFwcGVyQW5pbWF0aW9uLFxuICAgIGJhY2tkcm9wQW5pbWF0aW9uXG4gIH07XG59O1xuY29uc3QgY3JlYXRlRW50ZXJBbmltYXRpb24kMSA9ICgpID0+IHtcbiAgY29uc3QgYmFja2Ryb3BBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKS5mcm9tVG8oJ29wYWNpdHknLCAwLjAxLCAndmFyKC0tYmFja2Ryb3Atb3BhY2l0eSknKS5iZWZvcmVTdHlsZXMoe1xuICAgICdwb2ludGVyLWV2ZW50cyc6ICdub25lJ1xuICB9KS5hZnRlckNsZWFyU3R5bGVzKFsncG9pbnRlci1ldmVudHMnXSk7XG4gIGNvbnN0IHdyYXBwZXJBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKS5mcm9tVG8oJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVZKDEwMHZoKScsICd0cmFuc2xhdGVZKDB2aCknKTtcbiAgcmV0dXJuIHtcbiAgICBiYWNrZHJvcEFuaW1hdGlvbixcbiAgICB3cmFwcGVyQW5pbWF0aW9uLFxuICAgIGNvbnRlbnRBbmltYXRpb246IHVuZGVmaW5lZFxuICB9O1xufTtcbi8qKlxuICogaU9TIE1vZGFsIEVudGVyIEFuaW1hdGlvbiBmb3IgdGhlIENhcmQgcHJlc2VudGF0aW9uIHN0eWxlXG4gKi9cbmNvbnN0IGlvc0VudGVyQW5pbWF0aW9uID0gKGJhc2VFbCwgb3B0cykgPT4ge1xuICBjb25zdCB7XG4gICAgcHJlc2VudGluZ0VsLFxuICAgIGN1cnJlbnRCcmVha3BvaW50LFxuICAgIGV4cGFuZFRvU2Nyb2xsXG4gIH0gPSBvcHRzO1xuICBjb25zdCByb290ID0gZ2V0RWxlbWVudFJvb3QoYmFzZUVsKTtcbiAgY29uc3Qge1xuICAgIHdyYXBwZXJBbmltYXRpb24sXG4gICAgYmFja2Ryb3BBbmltYXRpb24sXG4gICAgY29udGVudEFuaW1hdGlvblxuICB9ID0gY3VycmVudEJyZWFrcG9pbnQgIT09IHVuZGVmaW5lZCA/IGNyZWF0ZVNoZWV0RW50ZXJBbmltYXRpb24ob3B0cykgOiBjcmVhdGVFbnRlckFuaW1hdGlvbiQxKCk7XG4gIGJhY2tkcm9wQW5pbWF0aW9uLmFkZEVsZW1lbnQocm9vdC5xdWVyeVNlbGVjdG9yKCdpb24tYmFja2Ryb3AnKSk7XG4gIHdyYXBwZXJBbmltYXRpb24uYWRkRWxlbWVudChyb290LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC13cmFwcGVyLCAubW9kYWwtc2hhZG93JykpLmJlZm9yZVN0eWxlcyh7XG4gICAgb3BhY2l0eTogMVxuICB9KTtcbiAgLy8gVGhlIGNvbnRlbnQgYW5pbWF0aW9uIGlzIG9ubHkgYWRkZWQgaWYgc2Nyb2xsaW5nIGlzIGVuYWJsZWQgZm9yXG4gIC8vIGFsbCB0aGUgYnJlYWtwb2ludHMuXG4gICFleHBhbmRUb1Njcm9sbCAmJiAoY29udGVudEFuaW1hdGlvbiA9PT0gbnVsbCB8fCBjb250ZW50QW5pbWF0aW9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb250ZW50QW5pbWF0aW9uLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJy5pb24tcGFnZScpKSk7XG4gIGNvbnN0IGJhc2VBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oJ2VudGVyaW5nLWJhc2UnKS5hZGRFbGVtZW50KGJhc2VFbCkuZWFzaW5nKCdjdWJpYy1iZXppZXIoMC4zMiwwLjcyLDAsMSknKS5kdXJhdGlvbig1MDApLmFkZEFuaW1hdGlvbihbd3JhcHBlckFuaW1hdGlvbl0pO1xuICBpZiAoY29udGVudEFuaW1hdGlvbikge1xuICAgIGJhc2VBbmltYXRpb24uYWRkQW5pbWF0aW9uKGNvbnRlbnRBbmltYXRpb24pO1xuICB9XG4gIGlmIChwcmVzZW50aW5nRWwpIHtcbiAgICBjb25zdCBpc1BvcnRyYWl0ID0gd2luZG93LmlubmVyV2lkdGggPCA3Njg7XG4gICAgY29uc3QgaGFzQ2FyZE1vZGFsID0gcHJlc2VudGluZ0VsLnRhZ05hbWUgPT09ICdJT04tTU9EQUwnICYmIHByZXNlbnRpbmdFbC5wcmVzZW50aW5nRWxlbWVudCAhPT0gdW5kZWZpbmVkO1xuICAgIGNvbnN0IHByZXNlbnRpbmdFbFJvb3QgPSBnZXRFbGVtZW50Um9vdChwcmVzZW50aW5nRWwpO1xuICAgIGNvbnN0IHByZXNlbnRpbmdBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKS5iZWZvcmVTdHlsZXMoe1xuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKScsXG4gICAgICAndHJhbnNmb3JtLW9yaWdpbic6ICd0b3AgY2VudGVyJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgIH0pO1xuICAgIGNvbnN0IGJvZHlFbCA9IGRvY3VtZW50LmJvZHk7XG4gICAgaWYgKGlzUG9ydHJhaXQpIHtcbiAgICAgIC8qKlxuICAgICAgICogRmFsbGJhY2sgZm9yIGJyb3dzZXJzIHRoYXQgZG9lcyBub3Qgc3VwcG9ydCBgbWF4KClgIChleDogRmlyZWZveClcbiAgICAgICAqIE5vIG5lZWQgdG8gd29ycnkgYWJvdXQgc3RhdHVzYmFyIHBhZGRpbmcgc2luY2UgZW5naW5lcyBsaWtlIEdlY2tvXG4gICAgICAgKiBhcmUgbm90IHVzZWQgYXMgdGhlIGVuZ2luZSBmb3Igc3RhbmRhbG9uZSBDb3Jkb3ZhL0NhcGFjaXRvciBhcHBzXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IHRyYW5zZm9ybU9mZnNldCA9ICFDU1Muc3VwcG9ydHMoJ3dpZHRoJywgJ21heCgwcHgsIDFweCknKSA/ICczMHB4JyA6ICdtYXgoMzBweCwgdmFyKC0taW9uLXNhZmUtYXJlYS10b3ApKSc7XG4gICAgICBjb25zdCBtb2RhbFRyYW5zZm9ybSA9IGhhc0NhcmRNb2RhbCA/ICctMTBweCcgOiB0cmFuc2Zvcm1PZmZzZXQ7XG4gICAgICBjb25zdCB0b1ByZXNlbnRpbmdTY2FsZSA9IFN3aXBlVG9DbG9zZURlZmF1bHRzLk1JTl9QUkVTRU5USU5HX1NDQUxFO1xuICAgICAgY29uc3QgZmluYWxUcmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke21vZGFsVHJhbnNmb3JtfSkgc2NhbGUoJHt0b1ByZXNlbnRpbmdTY2FsZX0pYDtcbiAgICAgIHByZXNlbnRpbmdBbmltYXRpb24uYWZ0ZXJTdHlsZXMoe1xuICAgICAgICB0cmFuc2Zvcm06IGZpbmFsVHJhbnNmb3JtXG4gICAgICB9KS5iZWZvcmVBZGRXcml0ZSgoKSA9PiBib2R5RWwuc3R5bGUuc2V0UHJvcGVydHkoJ2JhY2tncm91bmQtY29sb3InLCAnYmxhY2snKSkuYWRkRWxlbWVudChwcmVzZW50aW5nRWwpLmtleWZyYW1lcyhbe1xuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgIGZpbHRlcjogJ2NvbnRyYXN0KDEpJyxcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwcHgpIHNjYWxlKDEpJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnMHB4J1xuICAgICAgfSwge1xuICAgICAgICBvZmZzZXQ6IDEsXG4gICAgICAgIGZpbHRlcjogJ2NvbnRyYXN0KDAuODUpJyxcbiAgICAgICAgdHJhbnNmb3JtOiBmaW5hbFRyYW5zZm9ybSxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCAxMHB4IDAgMCdcbiAgICAgIH1dKTtcbiAgICAgIGJhc2VBbmltYXRpb24uYWRkQW5pbWF0aW9uKHByZXNlbnRpbmdBbmltYXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBiYXNlQW5pbWF0aW9uLmFkZEFuaW1hdGlvbihiYWNrZHJvcEFuaW1hdGlvbik7XG4gICAgICBpZiAoIWhhc0NhcmRNb2RhbCkge1xuICAgICAgICB3cmFwcGVyQW5pbWF0aW9uLmZyb21Ubygnb3BhY2l0eScsICcwJywgJzEnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRvUHJlc2VudGluZ1NjYWxlID0gaGFzQ2FyZE1vZGFsID8gU3dpcGVUb0Nsb3NlRGVmYXVsdHMuTUlOX1BSRVNFTlRJTkdfU0NBTEUgOiAxO1xuICAgICAgICBjb25zdCBmaW5hbFRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKC0xMHB4KSBzY2FsZSgke3RvUHJlc2VudGluZ1NjYWxlfSlgO1xuICAgICAgICBwcmVzZW50aW5nQW5pbWF0aW9uLmFmdGVyU3R5bGVzKHtcbiAgICAgICAgICB0cmFuc2Zvcm06IGZpbmFsVHJhbnNmb3JtXG4gICAgICAgIH0pLmFkZEVsZW1lbnQocHJlc2VudGluZ0VsUm9vdC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtd3JhcHBlcicpKS5rZXlmcmFtZXMoW3tcbiAgICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgICAgZmlsdGVyOiAnY29udHJhc3QoMSknLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCkgc2NhbGUoMSknXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBvZmZzZXQ6IDEsXG4gICAgICAgICAgZmlsdGVyOiAnY29udHJhc3QoMC44NSknLFxuICAgICAgICAgIHRyYW5zZm9ybTogZmluYWxUcmFuc2Zvcm1cbiAgICAgICAgfV0pO1xuICAgICAgICBjb25zdCBzaGFkb3dBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKS5hZnRlclN0eWxlcyh7XG4gICAgICAgICAgdHJhbnNmb3JtOiBmaW5hbFRyYW5zZm9ybVxuICAgICAgICB9KS5hZGRFbGVtZW50KHByZXNlbnRpbmdFbFJvb3QucXVlcnlTZWxlY3RvcignLm1vZGFsLXNoYWRvdycpKS5rZXlmcmFtZXMoW3tcbiAgICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgICAgb3BhY2l0eTogJzEnLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCkgc2NhbGUoMSknXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBvZmZzZXQ6IDEsXG4gICAgICAgICAgb3BhY2l0eTogJzAnLFxuICAgICAgICAgIHRyYW5zZm9ybTogZmluYWxUcmFuc2Zvcm1cbiAgICAgICAgfV0pO1xuICAgICAgICBiYXNlQW5pbWF0aW9uLmFkZEFuaW1hdGlvbihbcHJlc2VudGluZ0FuaW1hdGlvbiwgc2hhZG93QW5pbWF0aW9uXSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGJhc2VBbmltYXRpb24uYWRkQW5pbWF0aW9uKGJhY2tkcm9wQW5pbWF0aW9uKTtcbiAgfVxuICByZXR1cm4gYmFzZUFuaW1hdGlvbjtcbn07XG5jb25zdCBjcmVhdGVMZWF2ZUFuaW1hdGlvbiQxID0gKCkgPT4ge1xuICBjb25zdCBiYWNrZHJvcEFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpLmZyb21Ubygnb3BhY2l0eScsICd2YXIoLS1iYWNrZHJvcC1vcGFjaXR5KScsIDApO1xuICBjb25zdCB3cmFwcGVyQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCkuZnJvbVRvKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWSgwdmgpJywgJ3RyYW5zbGF0ZVkoMTAwdmgpJyk7XG4gIHJldHVybiB7XG4gICAgYmFja2Ryb3BBbmltYXRpb24sXG4gICAgd3JhcHBlckFuaW1hdGlvblxuICB9O1xufTtcbi8qKlxuICogaU9TIE1vZGFsIExlYXZlIEFuaW1hdGlvblxuICovXG5jb25zdCBpb3NMZWF2ZUFuaW1hdGlvbiA9IChiYXNlRWwsIG9wdHMsIGR1cmF0aW9uID0gNTAwKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBwcmVzZW50aW5nRWwsXG4gICAgY3VycmVudEJyZWFrcG9pbnRcbiAgfSA9IG9wdHM7XG4gIGNvbnN0IHJvb3QgPSBnZXRFbGVtZW50Um9vdChiYXNlRWwpO1xuICBjb25zdCB7XG4gICAgd3JhcHBlckFuaW1hdGlvbixcbiAgICBiYWNrZHJvcEFuaW1hdGlvblxuICB9ID0gY3VycmVudEJyZWFrcG9pbnQgIT09IHVuZGVmaW5lZCA/IGNyZWF0ZVNoZWV0TGVhdmVBbmltYXRpb24ob3B0cykgOiBjcmVhdGVMZWF2ZUFuaW1hdGlvbiQxKCk7XG4gIGJhY2tkcm9wQW5pbWF0aW9uLmFkZEVsZW1lbnQocm9vdC5xdWVyeVNlbGVjdG9yKCdpb24tYmFja2Ryb3AnKSk7XG4gIHdyYXBwZXJBbmltYXRpb24uYWRkRWxlbWVudChyb290LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC13cmFwcGVyLCAubW9kYWwtc2hhZG93JykpLmJlZm9yZVN0eWxlcyh7XG4gICAgb3BhY2l0eTogMVxuICB9KTtcbiAgY29uc3QgYmFzZUFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbignbGVhdmluZy1iYXNlJykuYWRkRWxlbWVudChiYXNlRWwpLmVhc2luZygnY3ViaWMtYmV6aWVyKDAuMzIsMC43MiwwLDEpJykuZHVyYXRpb24oZHVyYXRpb24pLmFkZEFuaW1hdGlvbih3cmFwcGVyQW5pbWF0aW9uKTtcbiAgaWYgKHByZXNlbnRpbmdFbCkge1xuICAgIGNvbnN0IGlzUG9ydHJhaXQgPSB3aW5kb3cuaW5uZXJXaWR0aCA8IDc2ODtcbiAgICBjb25zdCBoYXNDYXJkTW9kYWwgPSBwcmVzZW50aW5nRWwudGFnTmFtZSA9PT0gJ0lPTi1NT0RBTCcgJiYgcHJlc2VudGluZ0VsLnByZXNlbnRpbmdFbGVtZW50ICE9PSB1bmRlZmluZWQ7XG4gICAgY29uc3QgcHJlc2VudGluZ0VsUm9vdCA9IGdldEVsZW1lbnRSb290KHByZXNlbnRpbmdFbCk7XG4gICAgY29uc3QgcHJlc2VudGluZ0FuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpLmJlZm9yZUNsZWFyU3R5bGVzKFsndHJhbnNmb3JtJ10pLmFmdGVyQ2xlYXJTdHlsZXMoWyd0cmFuc2Zvcm0nXSkub25GaW5pc2goY3VycmVudFN0ZXAgPT4ge1xuICAgICAgLy8gb25seSByZXNldCBiYWNrZ3JvdW5kIGNvbG9yIGlmIHRoaXMgaXMgdGhlIGxhc3QgY2FyZC1zdHlsZSBtb2RhbFxuICAgICAgaWYgKGN1cnJlbnRTdGVwICE9PSAxKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHByZXNlbnRpbmdFbC5zdHlsZS5zZXRQcm9wZXJ0eSgnb3ZlcmZsb3cnLCAnJyk7XG4gICAgICBjb25zdCBudW1Nb2RhbHMgPSBBcnJheS5mcm9tKGJvZHlFbC5xdWVyeVNlbGVjdG9yQWxsKCdpb24tbW9kYWw6bm90KC5vdmVybGF5LWhpZGRlbiknKSkuZmlsdGVyKG0gPT4gbS5wcmVzZW50aW5nRWxlbWVudCAhPT0gdW5kZWZpbmVkKS5sZW5ndGg7XG4gICAgICBpZiAobnVtTW9kYWxzIDw9IDEpIHtcbiAgICAgICAgYm9keUVsLnN0eWxlLnNldFByb3BlcnR5KCdiYWNrZ3JvdW5kLWNvbG9yJywgJycpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGJvZHlFbCA9IGRvY3VtZW50LmJvZHk7XG4gICAgaWYgKGlzUG9ydHJhaXQpIHtcbiAgICAgIGNvbnN0IHRyYW5zZm9ybU9mZnNldCA9ICFDU1Muc3VwcG9ydHMoJ3dpZHRoJywgJ21heCgwcHgsIDFweCknKSA/ICczMHB4JyA6ICdtYXgoMzBweCwgdmFyKC0taW9uLXNhZmUtYXJlYS10b3ApKSc7XG4gICAgICBjb25zdCBtb2RhbFRyYW5zZm9ybSA9IGhhc0NhcmRNb2RhbCA/ICctMTBweCcgOiB0cmFuc2Zvcm1PZmZzZXQ7XG4gICAgICBjb25zdCB0b1ByZXNlbnRpbmdTY2FsZSA9IFN3aXBlVG9DbG9zZURlZmF1bHRzLk1JTl9QUkVTRU5USU5HX1NDQUxFO1xuICAgICAgY29uc3QgZmluYWxUcmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke21vZGFsVHJhbnNmb3JtfSkgc2NhbGUoJHt0b1ByZXNlbnRpbmdTY2FsZX0pYDtcbiAgICAgIHByZXNlbnRpbmdBbmltYXRpb24uYWRkRWxlbWVudChwcmVzZW50aW5nRWwpLmtleWZyYW1lcyhbe1xuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgIGZpbHRlcjogJ2NvbnRyYXN0KDAuODUpJyxcbiAgICAgICAgdHJhbnNmb3JtOiBmaW5hbFRyYW5zZm9ybSxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCAxMHB4IDAgMCdcbiAgICAgIH0sIHtcbiAgICAgICAgb2Zmc2V0OiAxLFxuICAgICAgICBmaWx0ZXI6ICdjb250cmFzdCgxKScsXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMHB4KSBzY2FsZSgxKScsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzBweCdcbiAgICAgIH1dKTtcbiAgICAgIGJhc2VBbmltYXRpb24uYWRkQW5pbWF0aW9uKHByZXNlbnRpbmdBbmltYXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBiYXNlQW5pbWF0aW9uLmFkZEFuaW1hdGlvbihiYWNrZHJvcEFuaW1hdGlvbik7XG4gICAgICBpZiAoIWhhc0NhcmRNb2RhbCkge1xuICAgICAgICB3cmFwcGVyQW5pbWF0aW9uLmZyb21Ubygnb3BhY2l0eScsICcxJywgJzAnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRvUHJlc2VudGluZ1NjYWxlID0gaGFzQ2FyZE1vZGFsID8gU3dpcGVUb0Nsb3NlRGVmYXVsdHMuTUlOX1BSRVNFTlRJTkdfU0NBTEUgOiAxO1xuICAgICAgICBjb25zdCBmaW5hbFRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKC0xMHB4KSBzY2FsZSgke3RvUHJlc2VudGluZ1NjYWxlfSlgO1xuICAgICAgICBwcmVzZW50aW5nQW5pbWF0aW9uLmFkZEVsZW1lbnQocHJlc2VudGluZ0VsUm9vdC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtd3JhcHBlcicpKS5hZnRlclN0eWxlcyh7XG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgMCwgMCknXG4gICAgICAgIH0pLmtleWZyYW1lcyhbe1xuICAgICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgICBmaWx0ZXI6ICdjb250cmFzdCgwLjg1KScsXG4gICAgICAgICAgdHJhbnNmb3JtOiBmaW5hbFRyYW5zZm9ybVxuICAgICAgICB9LCB7XG4gICAgICAgICAgb2Zmc2V0OiAxLFxuICAgICAgICAgIGZpbHRlcjogJ2NvbnRyYXN0KDEpJyxcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApIHNjYWxlKDEpJ1xuICAgICAgICB9XSk7XG4gICAgICAgIGNvbnN0IHNoYWRvd0FuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpLmFkZEVsZW1lbnQocHJlc2VudGluZ0VsUm9vdC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtc2hhZG93JykpLmFmdGVyU3R5bGVzKHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApIHNjYWxlKDEpJ1xuICAgICAgICB9KS5rZXlmcmFtZXMoW3tcbiAgICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgICAgb3BhY2l0eTogJzAnLFxuICAgICAgICAgIHRyYW5zZm9ybTogZmluYWxUcmFuc2Zvcm1cbiAgICAgICAgfSwge1xuICAgICAgICAgIG9mZnNldDogMSxcbiAgICAgICAgICBvcGFjaXR5OiAnMScsXG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKSBzY2FsZSgxKSdcbiAgICAgICAgfV0pO1xuICAgICAgICBiYXNlQW5pbWF0aW9uLmFkZEFuaW1hdGlvbihbcHJlc2VudGluZ0FuaW1hdGlvbiwgc2hhZG93QW5pbWF0aW9uXSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGJhc2VBbmltYXRpb24uYWRkQW5pbWF0aW9uKGJhY2tkcm9wQW5pbWF0aW9uKTtcbiAgfVxuICByZXR1cm4gYmFzZUFuaW1hdGlvbjtcbn07XG5cbi8qKlxuICogVHJhbnNpdGlvbiBhbmltYXRpb24gZnJvbSBwb3J0cmFpdCB2aWV3IHRvIGxhbmRzY2FwZSB2aWV3XG4gKiBUaGlzIGhhbmRsZXMgdGhlIGNhc2Ugd2hlcmUgYSBjYXJkIG1vZGFsIGlzIG9wZW4gaW4gcG9ydHJhaXQgdmlld1xuICogYW5kIHRoZSB1c2VyIHN3aXRjaGVzIHRvIGxhbmRzY2FwZSB2aWV3XG4gKi9cbmNvbnN0IHBvcnRyYWl0VG9MYW5kc2NhcGVUcmFuc2l0aW9uID0gKGJhc2VFbCwgb3B0cywgZHVyYXRpb24gPSAzMDApID0+IHtcbiAgY29uc3Qge1xuICAgIHByZXNlbnRpbmdFbFxuICB9ID0gb3B0cztcbiAgaWYgKCFwcmVzZW50aW5nRWwpIHtcbiAgICAvLyBObyB0cmFuc2l0aW9uIG5lZWRlZCBmb3Igbm9uLWNhcmQgbW9kYWxzXG4gICAgcmV0dXJuIGNyZWF0ZUFuaW1hdGlvbigncG9ydHJhaXQtdG8tbGFuZHNjYXBlLXRyYW5zaXRpb24nKTtcbiAgfVxuICBjb25zdCBwcmVzZW50aW5nRWxJc0NhcmRNb2RhbCA9IHByZXNlbnRpbmdFbC50YWdOYW1lID09PSAnSU9OLU1PREFMJyAmJiBwcmVzZW50aW5nRWwucHJlc2VudGluZ0VsZW1lbnQgIT09IHVuZGVmaW5lZDtcbiAgY29uc3QgcHJlc2VudGluZ0VsUm9vdCA9IGdldEVsZW1lbnRSb290KHByZXNlbnRpbmdFbCk7XG4gIGNvbnN0IGJvZHlFbCA9IGRvY3VtZW50LmJvZHk7XG4gIGNvbnN0IGJhc2VBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oJ3BvcnRyYWl0LXRvLWxhbmRzY2FwZS10cmFuc2l0aW9uJykuYWRkRWxlbWVudChiYXNlRWwpLmVhc2luZygnY3ViaWMtYmV6aWVyKDAuMzIsMC43MiwwLDEpJykuZHVyYXRpb24oZHVyYXRpb24pO1xuICBjb25zdCBwcmVzZW50aW5nQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCkuYmVmb3JlU3R5bGVzKHtcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJyxcbiAgICAndHJhbnNmb3JtLW9yaWdpbic6ICd0b3AgY2VudGVyJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgfSk7XG4gIGlmICghcHJlc2VudGluZ0VsSXNDYXJkTW9kYWwpIHtcbiAgICAvLyBUaGUgcHJlc2VudGluZyBlbGVtZW50IGlzIG5vdCBhIGNhcmQgbW9kYWwsIHNvIHdlIGRvIG5vdFxuICAgIC8vIG5lZWQgdG8gY2FyZSBhYm91dCBsYXllcmluZyBhbmQgbW9kYWwtc3BlY2lmaWMgc3R5bGVzLlxuICAgIGNvbnN0IHJvb3QgPSBnZXRFbGVtZW50Um9vdChiYXNlRWwpO1xuICAgIGNvbnN0IHdyYXBwZXJBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKS5hZGRFbGVtZW50KHJvb3QucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsLXdyYXBwZXIsIC5tb2RhbC1zaGFkb3cnKSkuZnJvbVRvKCdvcGFjaXR5JywgJzEnLCAnMScpOyAvLyBLZWVwIHdyYXBwZXIgdmlzaWJsZSBpbiBsYW5kc2NhcGVcbiAgICBjb25zdCBiYWNrZHJvcEFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpLmFkZEVsZW1lbnQocm9vdC5xdWVyeVNlbGVjdG9yKCdpb24tYmFja2Ryb3AnKSkuZnJvbVRvKCdvcGFjaXR5JywgJ3ZhcigtLWJhY2tkcm9wLW9wYWNpdHkpJywgJ3ZhcigtLWJhY2tkcm9wLW9wYWNpdHkpJyk7IC8vIEtlZXAgYmFja2Ryb3AgdmlzaWJsZVxuICAgIC8vIEFuaW1hdGUgcHJlc2VudGluZ0VsIGZyb20gcG9ydHJhaXQgc3RhdGUgYmFjayB0byBub3JtYWxcbiAgICBjb25zdCB0cmFuc2Zvcm1PZmZzZXQgPSAhQ1NTLnN1cHBvcnRzKCd3aWR0aCcsICdtYXgoMHB4LCAxcHgpJykgPyAnMzBweCcgOiAnbWF4KDMwcHgsIHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wKSknO1xuICAgIGNvbnN0IHRvUHJlc2VudGluZ1NjYWxlID0gU3dpcGVUb0Nsb3NlRGVmYXVsdHMuTUlOX1BSRVNFTlRJTkdfU0NBTEU7XG4gICAgY29uc3QgZnJvbVRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7dHJhbnNmb3JtT2Zmc2V0fSkgc2NhbGUoJHt0b1ByZXNlbnRpbmdTY2FsZX0pYDtcbiAgICBwcmVzZW50aW5nQW5pbWF0aW9uLmFkZEVsZW1lbnQocHJlc2VudGluZ0VsKS5hZnRlclN0eWxlcyh7XG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDBweCkgc2NhbGUoMSknLFxuICAgICAgJ2JvcmRlci1yYWRpdXMnOiAnMHB4J1xuICAgIH0pLmJlZm9yZUFkZFdyaXRlKCgpID0+IGJvZHlFbC5zdHlsZS5zZXRQcm9wZXJ0eSgnYmFja2dyb3VuZC1jb2xvcicsICcnKSkuZnJvbVRvKCd0cmFuc2Zvcm0nLCBmcm9tVHJhbnNmb3JtLCAndHJhbnNsYXRlWSgwcHgpIHNjYWxlKDEpJykuZnJvbVRvKCdmaWx0ZXInLCAnY29udHJhc3QoMC44NSknLCAnY29udHJhc3QoMSknKS5mcm9tVG8oJ2JvcmRlci1yYWRpdXMnLCAnMTBweCAxMHB4IDAgMCcsICcwcHgnKTtcbiAgICBiYXNlQW5pbWF0aW9uLmFkZEFuaW1hdGlvbihbcHJlc2VudGluZ0FuaW1hdGlvbiwgd3JhcHBlckFuaW1hdGlvbiwgYmFja2Ryb3BBbmltYXRpb25dKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBUaGUgcHJlc2VudGluZyBlbGVtZW50IGlzIGEgY2FyZCBtb2RhbCwgc28gd2UgZG9cbiAgICAvLyBuZWVkIHRvIGNhcmUgYWJvdXQgbGF5ZXJpbmcgYW5kIG1vZGFsLXNwZWNpZmljIHN0eWxlcy5cbiAgICBjb25zdCB0b1ByZXNlbnRpbmdTY2FsZSA9IFN3aXBlVG9DbG9zZURlZmF1bHRzLk1JTl9QUkVTRU5USU5HX1NDQUxFO1xuICAgIGNvbnN0IGZyb21UcmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgtMTBweCkgc2NhbGUoJHt0b1ByZXNlbnRpbmdTY2FsZX0pYDtcbiAgICBjb25zdCB0b1RyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKDBweCkgc2NhbGUoMSlgO1xuICAgIHByZXNlbnRpbmdBbmltYXRpb24uYWRkRWxlbWVudChwcmVzZW50aW5nRWwpLmFmdGVyU3R5bGVzKHtcbiAgICAgIHRyYW5zZm9ybTogdG9UcmFuc2Zvcm1cbiAgICB9KS5mcm9tVG8oJ3RyYW5zZm9ybScsIGZyb21UcmFuc2Zvcm0sIHRvVHJhbnNmb3JtKS5mcm9tVG8oJ2ZpbHRlcicsICdjb250cmFzdCgwLjg1KScsICdjb250cmFzdCgxKScpO1xuICAgIGNvbnN0IHNoYWRvd0FuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpLmFkZEVsZW1lbnQocHJlc2VudGluZ0VsUm9vdC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtc2hhZG93JykpLmFmdGVyU3R5bGVzKHtcbiAgICAgIHRyYW5zZm9ybTogdG9UcmFuc2Zvcm0sXG4gICAgICBvcGFjaXR5OiAnMCdcbiAgICB9KS5mcm9tVG8oJ3RyYW5zZm9ybScsIGZyb21UcmFuc2Zvcm0sIHRvVHJhbnNmb3JtKTtcbiAgICBiYXNlQW5pbWF0aW9uLmFkZEFuaW1hdGlvbihbcHJlc2VudGluZ0FuaW1hdGlvbiwgc2hhZG93QW5pbWF0aW9uXSk7XG4gIH1cbiAgcmV0dXJuIGJhc2VBbmltYXRpb247XG59O1xuLyoqXG4gKiBUcmFuc2l0aW9uIGFuaW1hdGlvbiBmcm9tIGxhbmRzY2FwZSB2aWV3IHRvIHBvcnRyYWl0IHZpZXdcbiAqIFRoaXMgaGFuZGxlcyB0aGUgY2FzZSB3aGVyZSBhIGNhcmQgbW9kYWwgaXMgb3BlbiBpbiBsYW5kc2NhcGUgdmlld1xuICogYW5kIHRoZSB1c2VyIHN3aXRjaGVzIHRvIHBvcnRyYWl0IHZpZXdcbiAqL1xuY29uc3QgbGFuZHNjYXBlVG9Qb3J0cmFpdFRyYW5zaXRpb24gPSAoYmFzZUVsLCBvcHRzLCBkdXJhdGlvbiA9IDMwMCkgPT4ge1xuICBjb25zdCB7XG4gICAgcHJlc2VudGluZ0VsXG4gIH0gPSBvcHRzO1xuICBpZiAoIXByZXNlbnRpbmdFbCkge1xuICAgIC8vIE5vIHRyYW5zaXRpb24gbmVlZGVkIGZvciBub24tY2FyZCBtb2RhbHNcbiAgICByZXR1cm4gY3JlYXRlQW5pbWF0aW9uKCdsYW5kc2NhcGUtdG8tcG9ydHJhaXQtdHJhbnNpdGlvbicpO1xuICB9XG4gIGNvbnN0IHByZXNlbnRpbmdFbElzQ2FyZE1vZGFsID0gcHJlc2VudGluZ0VsLnRhZ05hbWUgPT09ICdJT04tTU9EQUwnICYmIHByZXNlbnRpbmdFbC5wcmVzZW50aW5nRWxlbWVudCAhPT0gdW5kZWZpbmVkO1xuICBjb25zdCBwcmVzZW50aW5nRWxSb290ID0gZ2V0RWxlbWVudFJvb3QocHJlc2VudGluZ0VsKTtcbiAgY29uc3QgYm9keUVsID0gZG9jdW1lbnQuYm9keTtcbiAgY29uc3QgYmFzZUFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbignbGFuZHNjYXBlLXRvLXBvcnRyYWl0LXRyYW5zaXRpb24nKS5hZGRFbGVtZW50KGJhc2VFbCkuZWFzaW5nKCdjdWJpYy1iZXppZXIoMC4zMiwwLjcyLDAsMSknKS5kdXJhdGlvbihkdXJhdGlvbik7XG4gIGNvbnN0IHByZXNlbnRpbmdBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKS5iZWZvcmVTdHlsZXMoe1xuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknLFxuICAgICd0cmFuc2Zvcm0tb3JpZ2luJzogJ3RvcCBjZW50ZXInLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICB9KTtcbiAgaWYgKCFwcmVzZW50aW5nRWxJc0NhcmRNb2RhbCkge1xuICAgIC8vIFRoZSBwcmVzZW50aW5nIGVsZW1lbnQgaXMgbm90IGEgY2FyZCBtb2RhbCwgc28gd2UgZG8gbm90XG4gICAgLy8gbmVlZCB0byBjYXJlIGFib3V0IGxheWVyaW5nIGFuZCBtb2RhbC1zcGVjaWZpYyBzdHlsZXMuXG4gICAgY29uc3Qgcm9vdCA9IGdldEVsZW1lbnRSb290KGJhc2VFbCk7XG4gICAgY29uc3Qgd3JhcHBlckFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpLmFkZEVsZW1lbnQocm9vdC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwtd3JhcHBlciwgLm1vZGFsLXNoYWRvdycpKS5mcm9tVG8oJ29wYWNpdHknLCAnMScsICcxJyk7IC8vIEtlZXAgd3JhcHBlciB2aXNpYmxlXG4gICAgY29uc3QgYmFja2Ryb3BBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKS5hZGRFbGVtZW50KHJvb3QucXVlcnlTZWxlY3RvcignaW9uLWJhY2tkcm9wJykpLmZyb21Ubygnb3BhY2l0eScsICd2YXIoLS1iYWNrZHJvcC1vcGFjaXR5KScsICd2YXIoLS1iYWNrZHJvcC1vcGFjaXR5KScpOyAvLyBLZWVwIGJhY2tkcm9wIHZpc2libGVcbiAgICAvLyBBbmltYXRlIHByZXNlbnRpbmdFbCBmcm9tIG5vcm1hbCBzdGF0ZSB0byBwb3J0cmFpdCBzdGF0ZVxuICAgIGNvbnN0IHRyYW5zZm9ybU9mZnNldCA9ICFDU1Muc3VwcG9ydHMoJ3dpZHRoJywgJ21heCgwcHgsIDFweCknKSA/ICczMHB4JyA6ICdtYXgoMzBweCwgdmFyKC0taW9uLXNhZmUtYXJlYS10b3ApKSc7XG4gICAgY29uc3QgdG9QcmVzZW50aW5nU2NhbGUgPSBTd2lwZVRvQ2xvc2VEZWZhdWx0cy5NSU5fUFJFU0VOVElOR19TQ0FMRTtcbiAgICBjb25zdCB0b1RyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7dHJhbnNmb3JtT2Zmc2V0fSkgc2NhbGUoJHt0b1ByZXNlbnRpbmdTY2FsZX0pYDtcbiAgICBwcmVzZW50aW5nQW5pbWF0aW9uLmFkZEVsZW1lbnQocHJlc2VudGluZ0VsKS5hZnRlclN0eWxlcyh7XG4gICAgICB0cmFuc2Zvcm06IHRvVHJhbnNmb3JtXG4gICAgfSkuYmVmb3JlQWRkV3JpdGUoKCkgPT4gYm9keUVsLnN0eWxlLnNldFByb3BlcnR5KCdiYWNrZ3JvdW5kLWNvbG9yJywgJ2JsYWNrJykpLmtleWZyYW1lcyhbe1xuICAgICAgb2Zmc2V0OiAwLFxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwcHgpIHNjYWxlKDEpJyxcbiAgICAgIGZpbHRlcjogJ2NvbnRyYXN0KDEpJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzBweCdcbiAgICB9LCB7XG4gICAgICBvZmZzZXQ6IDAuMixcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMHB4KSBzY2FsZSgxKScsXG4gICAgICBmaWx0ZXI6ICdjb250cmFzdCgxKScsXG4gICAgICBib3JkZXJSYWRpdXM6ICcxMHB4IDEwcHggMCAwJ1xuICAgIH0sIHtcbiAgICAgIG9mZnNldDogMSxcbiAgICAgIHRyYW5zZm9ybTogdG9UcmFuc2Zvcm0sXG4gICAgICBmaWx0ZXI6ICdjb250cmFzdCgwLjg1KScsXG4gICAgICBib3JkZXJSYWRpdXM6ICcxMHB4IDEwcHggMCAwJ1xuICAgIH1dKTtcbiAgICBiYXNlQW5pbWF0aW9uLmFkZEFuaW1hdGlvbihbcHJlc2VudGluZ0FuaW1hdGlvbiwgd3JhcHBlckFuaW1hdGlvbiwgYmFja2Ryb3BBbmltYXRpb25dKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBUaGUgcHJlc2VudGluZyBlbGVtZW50IGlzIGFsc28gYSBjYXJkIG1vZGFsLCBzbyB3ZSBuZWVkXG4gICAgLy8gdG8gaGFuZGxlIGxheWVyaW5nIGFuZCBtb2RhbC1zcGVjaWZpYyBzdHlsZXMuXG4gICAgY29uc3QgdG9QcmVzZW50aW5nU2NhbGUgPSBTd2lwZVRvQ2xvc2VEZWZhdWx0cy5NSU5fUFJFU0VOVElOR19TQ0FMRTtcbiAgICBjb25zdCBmcm9tVHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoLTEwcHgpIHNjYWxlKCR7dG9QcmVzZW50aW5nU2NhbGV9KWA7XG4gICAgY29uc3QgdG9UcmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgwKSBzY2FsZSgxKWA7XG4gICAgcHJlc2VudGluZ0FuaW1hdGlvbi5hZGRFbGVtZW50KHByZXNlbnRpbmdFbCkuYWZ0ZXJTdHlsZXMoe1xuICAgICAgdHJhbnNmb3JtOiB0b1RyYW5zZm9ybVxuICAgIH0pLmZyb21UbygndHJhbnNmb3JtJywgZnJvbVRyYW5zZm9ybSwgdG9UcmFuc2Zvcm0pO1xuICAgIGNvbnN0IHNoYWRvd0FuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpLmFkZEVsZW1lbnQocHJlc2VudGluZ0VsUm9vdC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtc2hhZG93JykpLmFmdGVyU3R5bGVzKHtcbiAgICAgIHRyYW5zZm9ybTogdG9UcmFuc2Zvcm0sXG4gICAgICBvcGFjaXR5OiAnMCdcbiAgICB9KS5mcm9tVG8oJ3RyYW5zZm9ybScsIGZyb21UcmFuc2Zvcm0sIHRvVHJhbnNmb3JtKTtcbiAgICBiYXNlQW5pbWF0aW9uLmFkZEFuaW1hdGlvbihbcHJlc2VudGluZ0FuaW1hdGlvbiwgc2hhZG93QW5pbWF0aW9uXSk7XG4gIH1cbiAgcmV0dXJuIGJhc2VBbmltYXRpb247XG59O1xuY29uc3QgY3JlYXRlRW50ZXJBbmltYXRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IGJhY2tkcm9wQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCkuZnJvbVRvKCdvcGFjaXR5JywgMC4wMSwgJ3ZhcigtLWJhY2tkcm9wLW9wYWNpdHkpJykuYmVmb3JlU3R5bGVzKHtcbiAgICAncG9pbnRlci1ldmVudHMnOiAnbm9uZSdcbiAgfSkuYWZ0ZXJDbGVhclN0eWxlcyhbJ3BvaW50ZXItZXZlbnRzJ10pO1xuICBjb25zdCB3cmFwcGVyQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCkua2V5ZnJhbWVzKFt7XG4gICAgb2Zmc2V0OiAwLFxuICAgIG9wYWNpdHk6IDAuMDEsXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSg0MHB4KSdcbiAgfSwge1xuICAgIG9mZnNldDogMSxcbiAgICBvcGFjaXR5OiAxLFxuICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoMHB4KWBcbiAgfV0pO1xuICByZXR1cm4ge1xuICAgIGJhY2tkcm9wQW5pbWF0aW9uLFxuICAgIHdyYXBwZXJBbmltYXRpb24sXG4gICAgY29udGVudEFuaW1hdGlvbjogdW5kZWZpbmVkXG4gIH07XG59O1xuLyoqXG4gKiBNZCBNb2RhbCBFbnRlciBBbmltYXRpb25cbiAqL1xuY29uc3QgbWRFbnRlckFuaW1hdGlvbiA9IChiYXNlRWwsIG9wdHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGN1cnJlbnRCcmVha3BvaW50LFxuICAgIGV4cGFuZFRvU2Nyb2xsXG4gIH0gPSBvcHRzO1xuICBjb25zdCByb290ID0gZ2V0RWxlbWVudFJvb3QoYmFzZUVsKTtcbiAgY29uc3Qge1xuICAgIHdyYXBwZXJBbmltYXRpb24sXG4gICAgYmFja2Ryb3BBbmltYXRpb24sXG4gICAgY29udGVudEFuaW1hdGlvblxuICB9ID0gY3VycmVudEJyZWFrcG9pbnQgIT09IHVuZGVmaW5lZCA/IGNyZWF0ZVNoZWV0RW50ZXJBbmltYXRpb24ob3B0cykgOiBjcmVhdGVFbnRlckFuaW1hdGlvbigpO1xuICBiYWNrZHJvcEFuaW1hdGlvbi5hZGRFbGVtZW50KHJvb3QucXVlcnlTZWxlY3RvcignaW9uLWJhY2tkcm9wJykpO1xuICB3cmFwcGVyQW5pbWF0aW9uLmFkZEVsZW1lbnQocm9vdC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtd3JhcHBlcicpKTtcbiAgLy8gVGhlIGNvbnRlbnQgYW5pbWF0aW9uIGlzIG9ubHkgYWRkZWQgaWYgc2Nyb2xsaW5nIGlzIGVuYWJsZWQgZm9yXG4gIC8vIGFsbCB0aGUgYnJlYWtwb2ludHMuXG4gICFleHBhbmRUb1Njcm9sbCAmJiAoY29udGVudEFuaW1hdGlvbiA9PT0gbnVsbCB8fCBjb250ZW50QW5pbWF0aW9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb250ZW50QW5pbWF0aW9uLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJy5pb24tcGFnZScpKSk7XG4gIGNvbnN0IGJhc2VBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKS5hZGRFbGVtZW50KGJhc2VFbCkuZWFzaW5nKCdjdWJpYy1iZXppZXIoMC4zNiwwLjY2LDAuMDQsMSknKS5kdXJhdGlvbigyODApLmFkZEFuaW1hdGlvbihbYmFja2Ryb3BBbmltYXRpb24sIHdyYXBwZXJBbmltYXRpb25dKTtcbiAgaWYgKGNvbnRlbnRBbmltYXRpb24pIHtcbiAgICBiYXNlQW5pbWF0aW9uLmFkZEFuaW1hdGlvbihjb250ZW50QW5pbWF0aW9uKTtcbiAgfVxuICByZXR1cm4gYmFzZUFuaW1hdGlvbjtcbn07XG5jb25zdCBjcmVhdGVMZWF2ZUFuaW1hdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgYmFja2Ryb3BBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKS5mcm9tVG8oJ29wYWNpdHknLCAndmFyKC0tYmFja2Ryb3Atb3BhY2l0eSknLCAwKTtcbiAgY29uc3Qgd3JhcHBlckFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpLmtleWZyYW1lcyhbe1xuICAgIG9mZnNldDogMCxcbiAgICBvcGFjaXR5OiAwLjk5LFxuICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoMHB4KWBcbiAgfSwge1xuICAgIG9mZnNldDogMSxcbiAgICBvcGFjaXR5OiAwLFxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoNDBweCknXG4gIH1dKTtcbiAgcmV0dXJuIHtcbiAgICBiYWNrZHJvcEFuaW1hdGlvbixcbiAgICB3cmFwcGVyQW5pbWF0aW9uXG4gIH07XG59O1xuLyoqXG4gKiBNZCBNb2RhbCBMZWF2ZSBBbmltYXRpb25cbiAqL1xuY29uc3QgbWRMZWF2ZUFuaW1hdGlvbiA9IChiYXNlRWwsIG9wdHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGN1cnJlbnRCcmVha3BvaW50XG4gIH0gPSBvcHRzO1xuICBjb25zdCByb290ID0gZ2V0RWxlbWVudFJvb3QoYmFzZUVsKTtcbiAgY29uc3Qge1xuICAgIHdyYXBwZXJBbmltYXRpb24sXG4gICAgYmFja2Ryb3BBbmltYXRpb25cbiAgfSA9IGN1cnJlbnRCcmVha3BvaW50ICE9PSB1bmRlZmluZWQgPyBjcmVhdGVTaGVldExlYXZlQW5pbWF0aW9uKG9wdHMpIDogY3JlYXRlTGVhdmVBbmltYXRpb24oKTtcbiAgYmFja2Ryb3BBbmltYXRpb24uYWRkRWxlbWVudChyb290LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1iYWNrZHJvcCcpKTtcbiAgd3JhcHBlckFuaW1hdGlvbi5hZGRFbGVtZW50KHJvb3QucXVlcnlTZWxlY3RvcignLm1vZGFsLXdyYXBwZXInKSk7XG4gIGNvbnN0IGJhc2VBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKS5lYXNpbmcoJ2N1YmljLWJlemllcigwLjQ3LDAsMC43NDUsMC43MTUpJykuZHVyYXRpb24oMjAwKS5hZGRBbmltYXRpb24oW2JhY2tkcm9wQW5pbWF0aW9uLCB3cmFwcGVyQW5pbWF0aW9uXSk7XG4gIHJldHVybiBiYXNlQW5pbWF0aW9uO1xufTtcbmNvbnN0IGNyZWF0ZVNoZWV0R2VzdHVyZSA9IChiYXNlRWwsIGJhY2tkcm9wRWwsIHdyYXBwZXJFbCwgaW5pdGlhbEJyZWFrcG9pbnQsIGJhY2tkcm9wQnJlYWtwb2ludCwgYW5pbWF0aW9uLCBicmVha3BvaW50cyA9IFtdLCBleHBhbmRUb1Njcm9sbCwgZ2V0Q3VycmVudEJyZWFrcG9pbnQsIG9uRGlzbWlzcywgb25CcmVha3BvaW50Q2hhbmdlKSA9PiB7XG4gIC8vIERlZmF1bHRzIGZvciB0aGUgc2hlZXQgc3dpcGUgYW5pbWF0aW9uXG4gIGNvbnN0IGRlZmF1bHRCYWNrZHJvcCA9IFt7XG4gICAgb2Zmc2V0OiAwLFxuICAgIG9wYWNpdHk6ICd2YXIoLS1iYWNrZHJvcC1vcGFjaXR5KSdcbiAgfSwge1xuICAgIG9mZnNldDogMSxcbiAgICBvcGFjaXR5OiAwLjAxXG4gIH1dO1xuICBjb25zdCBjdXN0b21CYWNrZHJvcCA9IFt7XG4gICAgb2Zmc2V0OiAwLFxuICAgIG9wYWNpdHk6ICd2YXIoLS1iYWNrZHJvcC1vcGFjaXR5KSdcbiAgfSwge1xuICAgIG9mZnNldDogMSAtIGJhY2tkcm9wQnJlYWtwb2ludCxcbiAgICBvcGFjaXR5OiAwXG4gIH0sIHtcbiAgICBvZmZzZXQ6IDEsXG4gICAgb3BhY2l0eTogMFxuICB9XTtcbiAgY29uc3QgU2hlZXREZWZhdWx0cyA9IHtcbiAgICBXUkFQUEVSX0tFWUZSQU1FUzogW3tcbiAgICAgIG9mZnNldDogMCxcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCUpJ1xuICAgIH0sIHtcbiAgICAgIG9mZnNldDogMSxcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMTAwJSknXG4gICAgfV0sXG4gICAgQkFDS0RST1BfS0VZRlJBTUVTOiBiYWNrZHJvcEJyZWFrcG9pbnQgIT09IDAgPyBjdXN0b21CYWNrZHJvcCA6IGRlZmF1bHRCYWNrZHJvcCxcbiAgICBDT05URU5UX0tFWUZSQU1FUzogW3tcbiAgICAgIG9mZnNldDogMCxcbiAgICAgIG1heEhlaWdodDogJzEwMCUnXG4gICAgfSwge1xuICAgICAgb2Zmc2V0OiAxLFxuICAgICAgbWF4SGVpZ2h0OiAnMCUnXG4gICAgfV1cbiAgfTtcbiAgY29uc3QgY29udGVudEVsID0gYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1jb250ZW50Jyk7XG4gIGNvbnN0IGhlaWdodCA9IHdyYXBwZXJFbC5jbGllbnRIZWlnaHQ7XG4gIGxldCBjdXJyZW50QnJlYWtwb2ludCA9IGluaXRpYWxCcmVha3BvaW50O1xuICBsZXQgb2Zmc2V0ID0gMDtcbiAgbGV0IGNhbkRpc21pc3NCbG9ja3NHZXN0dXJlID0gZmFsc2U7XG4gIGxldCBjYWNoZWRTY3JvbGxFbCA9IG51bGw7XG4gIGxldCBjYWNoZWRGb290ZXJFbHMgPSBudWxsO1xuICBsZXQgY2FjaGVkRm9vdGVyWVBvc2l0aW9uID0gbnVsbDtcbiAgbGV0IGN1cnJlbnRGb290ZXJTdGF0ZSA9IG51bGw7XG4gIGNvbnN0IGNhbkRpc21pc3NNYXhTdGVwID0gMC45NTtcbiAgY29uc3QgbWF4QnJlYWtwb2ludCA9IGJyZWFrcG9pbnRzW2JyZWFrcG9pbnRzLmxlbmd0aCAtIDFdO1xuICBjb25zdCBtaW5CcmVha3BvaW50ID0gYnJlYWtwb2ludHNbMF07XG4gIGNvbnN0IHdyYXBwZXJBbmltYXRpb24gPSBhbmltYXRpb24uY2hpbGRBbmltYXRpb25zLmZpbmQoYW5pID0+IGFuaS5pZCA9PT0gJ3dyYXBwZXJBbmltYXRpb24nKTtcbiAgY29uc3QgYmFja2Ryb3BBbmltYXRpb24gPSBhbmltYXRpb24uY2hpbGRBbmltYXRpb25zLmZpbmQoYW5pID0+IGFuaS5pZCA9PT0gJ2JhY2tkcm9wQW5pbWF0aW9uJyk7XG4gIGNvbnN0IGNvbnRlbnRBbmltYXRpb24gPSBhbmltYXRpb24uY2hpbGRBbmltYXRpb25zLmZpbmQoYW5pID0+IGFuaS5pZCA9PT0gJ2NvbnRlbnRBbmltYXRpb24nKTtcbiAgY29uc3QgZW5hYmxlQmFja2Ryb3AgPSAoKSA9PiB7XG4gICAgYmFzZUVsLnN0eWxlLnNldFByb3BlcnR5KCdwb2ludGVyLWV2ZW50cycsICdhdXRvJyk7XG4gICAgYmFja2Ryb3BFbC5zdHlsZS5zZXRQcm9wZXJ0eSgncG9pbnRlci1ldmVudHMnLCAnYXV0bycpO1xuICAgIC8qKlxuICAgICAqIFdoZW4gdGhlIGJhY2tkcm9wIGlzIGVuYWJsZWQsIGVsZW1lbnRzIHN1Y2hcbiAgICAgKiBhcyBpbnB1dHMgc2hvdWxkIG5vdCBiZSBmb2N1c2FibGUgb3V0c2lkZVxuICAgICAqIHRoZSBzaGVldC5cbiAgICAgKi9cbiAgICBiYXNlRWwuY2xhc3NMaXN0LnJlbW92ZShGT0NVU19UUkFQX0RJU0FCTEVfQ0xBU1MpO1xuICB9O1xuICBjb25zdCBkaXNhYmxlQmFja2Ryb3AgPSAoKSA9PiB7XG4gICAgYmFzZUVsLnN0eWxlLnNldFByb3BlcnR5KCdwb2ludGVyLWV2ZW50cycsICdub25lJyk7XG4gICAgYmFja2Ryb3BFbC5zdHlsZS5zZXRQcm9wZXJ0eSgncG9pbnRlci1ldmVudHMnLCAnbm9uZScpO1xuICAgIC8qKlxuICAgICAqIFdoZW4gdGhlIGJhY2tkcm9wIGlzIGVuYWJsZWQsIGVsZW1lbnRzIHN1Y2hcbiAgICAgKiBhcyBpbnB1dHMgc2hvdWxkIG5vdCBiZSBmb2N1c2FibGUgb3V0c2lkZVxuICAgICAqIHRoZSBzaGVldC5cbiAgICAgKiBBZGRpbmcgdGhpcyBjbGFzcyBkaXNhYmxlcyBmb2N1cyB0cmFwcGluZ1xuICAgICAqIGZvciB0aGUgc2hlZXQgdGVtcG9yYXJpbHkuXG4gICAgICovXG4gICAgYmFzZUVsLmNsYXNzTGlzdC5hZGQoRk9DVVNfVFJBUF9ESVNBQkxFX0NMQVNTKTtcbiAgfTtcbiAgLyoqXG4gICAqIFRvZ2dsZXMgdGhlIGZvb3RlciB0byBhbiBhYnNvbHV0ZSBwb3NpdGlvbiB3aGlsZSBtb3ZpbmcgdG8gcHJldmVudFxuICAgKiBpdCBmcm9tIHNoYWtpbmcgd2hpbGUgdGhlIHNoZWV0IGlzIGJlaW5nIGRyYWdnZWQuXG4gICAqIEBwYXJhbSBuZXdQb3NpdGlvbiBXaGV0aGVyIHRoZSBmb290ZXIgaXMgaW4gYSBtb3Zpbmcgb3Igc3RhdGlvbmFyeSBwb3NpdGlvbi5cbiAgICovXG4gIGNvbnN0IHN3YXBGb290ZXJQb3NpdGlvbiA9IG5ld1Bvc2l0aW9uID0+IHtcbiAgICBpZiAoIWNhY2hlZEZvb3RlckVscykge1xuICAgICAgY2FjaGVkRm9vdGVyRWxzID0gQXJyYXkuZnJvbShiYXNlRWwucXVlcnlTZWxlY3RvckFsbCgnaW9uLWZvb3RlcicpKTtcbiAgICAgIGlmICghY2FjaGVkRm9vdGVyRWxzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhZ2UgPSBiYXNlRWwucXVlcnlTZWxlY3RvcignLmlvbi1wYWdlJyk7XG4gICAgY3VycmVudEZvb3RlclN0YXRlID0gbmV3UG9zaXRpb247XG4gICAgaWYgKG5ld1Bvc2l0aW9uID09PSAnc3RhdGlvbmFyeScpIHtcbiAgICAgIGNhY2hlZEZvb3RlckVscy5mb3JFYWNoKGNhY2hlZEZvb3RlckVsID0+IHtcbiAgICAgICAgLy8gUmVzZXQgcG9zaXRpb25pbmcgc3R5bGVzIHRvIGFsbG93IG5vcm1hbCBkb2N1bWVudCBmbG93XG4gICAgICAgIGNhY2hlZEZvb3RlckVsLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLWZvb3Rlci1tb3ZpbmcnKTtcbiAgICAgICAgY2FjaGVkRm9vdGVyRWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3Bvc2l0aW9uJyk7XG4gICAgICAgIGNhY2hlZEZvb3RlckVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KCd3aWR0aCcpO1xuICAgICAgICBjYWNoZWRGb290ZXJFbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0Jyk7XG4gICAgICAgIGNhY2hlZEZvb3RlckVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0b3AnKTtcbiAgICAgICAgY2FjaGVkRm9vdGVyRWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2xlZnQnKTtcbiAgICAgICAgcGFnZSA9PT0gbnVsbCB8fCBwYWdlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYWdlLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLWJvdHRvbScpO1xuICAgICAgICAvLyBNb3ZlIHRvIHBhZ2VcbiAgICAgICAgcGFnZSA9PT0gbnVsbCB8fCBwYWdlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYWdlLmFwcGVuZENoaWxkKGNhY2hlZEZvb3RlckVsKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgZm9vdGVySGVpZ2h0cyA9IDA7XG4gICAgICBjYWNoZWRGb290ZXJFbHMuZm9yRWFjaCgoY2FjaGVkRm9vdGVyRWwsIGluZGV4KSA9PiB7XG4gICAgICAgIC8vIEdldCBib3RoIHRoZSBmb290ZXIgYW5kIGRvY3VtZW50IGJvZHkgcG9zaXRpb25zXG4gICAgICAgIGNvbnN0IGNhY2hlZEZvb3RlckVsUmVjdCA9IGNhY2hlZEZvb3RlckVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCBib2R5UmVjdCA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgdG90YWwgaGVpZ2h0IG9mIGFsbCBmb290ZXJzXG4gICAgICAgIC8vIHNvIHdlIGNhbiBhZGQgcGFkZGluZyB0byB0aGUgcGFnZSBlbGVtZW50XG4gICAgICAgIGZvb3RlckhlaWdodHMgKz0gY2FjaGVkRm9vdGVyRWwuY2xpZW50SGVpZ2h0O1xuICAgICAgICAvLyBDYWxjdWxhdGUgYWJzb2x1dGUgcG9zaXRpb24gcmVsYXRpdmUgdG8gYm9keVxuICAgICAgICAvLyBXZSBuZWVkIHRvIHN1YnRyYWN0IHRoZSBib2R5J3Mgb2Zmc2V0VG9wIHRvIGdldCB0cnVlIHBvc2l0aW9uIHdpdGhpbiBkb2N1bWVudC5ib2R5XG4gICAgICAgIGNvbnN0IGFic29sdXRlVG9wID0gY2FjaGVkRm9vdGVyRWxSZWN0LnRvcCAtIGJvZHlSZWN0LnRvcDtcbiAgICAgICAgY29uc3QgYWJzb2x1dGVMZWZ0ID0gY2FjaGVkRm9vdGVyRWxSZWN0LmxlZnQgLSBib2R5UmVjdC5sZWZ0O1xuICAgICAgICAvLyBDYXB0dXJlIHRoZSBmb290ZXIncyBjdXJyZW50IGRpbWVuc2lvbnMgYW5kIHN0b3JlIHRoZW0gaW4gQ1NTIHZhcmlhYmxlcyBmb3JcbiAgICAgICAgLy8gbGF0ZXIgdXNlIHdoZW4gYXBwbHlpbmcgYWJzb2x1dGUgcG9zaXRpb25pbmcuXG4gICAgICAgIGNhY2hlZEZvb3RlckVsLnN0eWxlLnNldFByb3BlcnR5KCctLXBpbm5lZC13aWR0aCcsIGAke2NhY2hlZEZvb3RlckVsLmNsaWVudFdpZHRofXB4YCk7XG4gICAgICAgIGNhY2hlZEZvb3RlckVsLnN0eWxlLnNldFByb3BlcnR5KCctLXBpbm5lZC1oZWlnaHQnLCBgJHtjYWNoZWRGb290ZXJFbC5jbGllbnRIZWlnaHR9cHhgKTtcbiAgICAgICAgY2FjaGVkRm9vdGVyRWwuc3R5bGUuc2V0UHJvcGVydHkoJy0tcGlubmVkLXRvcCcsIGAke2Fic29sdXRlVG9wfXB4YCk7XG4gICAgICAgIGNhY2hlZEZvb3RlckVsLnN0eWxlLnNldFByb3BlcnR5KCctLXBpbm5lZC1sZWZ0JywgYCR7YWJzb2x1dGVMZWZ0fXB4YCk7XG4gICAgICAgIC8vIE9ubHkgY2FjaGUgdGhlIGZpcnN0IGZvb3RlcidzIFkgcG9zaXRpb25cbiAgICAgICAgLy8gVGhpcyBpcyB1c2VkIHRvIGRldGVybWluZSBpZiB0aGUgc2hlZXQgaGFzIGJlZW4gbW92ZWQgYmVsb3cgdGhlIGZvb3RlclxuICAgICAgICAvLyBhbmQgbmVlZHMgdG8gYmUgc3dhcHBlZCBiYWNrIHRvIHN0YXRpb25hcnkgc28gaXQgY29sbGFwc2VzIGNvcnJlY3RseS5cbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgY2FjaGVkRm9vdGVyWVBvc2l0aW9uID0gYWJzb2x1dGVUb3A7XG4gICAgICAgICAgLy8gSWYgdGhlcmUncyBhIGhlYWRlciwgd2UgbmVlZCB0byBjb21iaW5lIHRoZSBoZWFkZXIgaGVpZ2h0IHdpdGggdGhlIGZvb3RlciBwb3NpdGlvblxuICAgICAgICAgIC8vIGJlY2F1c2UgdGhlIGhlYWRlciBtb3ZlcyB3aXRoIHRoZSBkcmFnIGhhbmRsZSwgc28gd2hlbiBpdCBzdGFydHMgb3ZlcmxhcHBpbmcgdGhlIGZvb3RlcixcbiAgICAgICAgICAvLyB3ZSBuZWVkIHRvIGFjY291bnQgZm9yIHRoYXQuXG4gICAgICAgICAgY29uc3QgaGVhZGVyID0gYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1oZWFkZXInKTtcbiAgICAgICAgICBpZiAoaGVhZGVyKSB7XG4gICAgICAgICAgICBjYWNoZWRGb290ZXJZUG9zaXRpb24gLT0gaGVhZGVyLmNsaWVudEhlaWdodDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gQXBwbHkgdGhlIHBpbm5pbmcgb2Ygc3R5bGVzIGFmdGVyIHdlJ3ZlIGNhbGN1bGF0ZWQgZXZlcnl0aGluZ1xuICAgICAgLy8gc28gdGhhdCB3ZSBkb24ndCBjYXVzZSBsYXlvdXRzIHRvIHNoaWZ0IHdoaWxlIGNhbGN1bGF0aW5nIHRoZSBmb290ZXIgcG9zaXRpb25zLlxuICAgICAgLy8gT3RoZXJ3aXNlLCB3aXRoIG11bHRpcGxlIGZvb3RlcnMgd2UnbGwgZW5kIHVwIGNhcHR1cmluZyB0aGUgd3JvbmcgcG9zaXRpb25zLlxuICAgICAgY2FjaGVkRm9vdGVyRWxzLmZvckVhY2goY2FjaGVkRm9vdGVyRWwgPT4ge1xuICAgICAgICAvLyBBZGQgcGFkZGluZyB0byB0aGUgcGFyZW50IGVsZW1lbnQgdG8gcHJldmVudCBjb250ZW50IGZyb20gYmVpbmcgaGlkZGVuXG4gICAgICAgIC8vIHdoZW4gdGhlIGZvb3RlciBpcyBwb3NpdGlvbmVkIGFic29sdXRlbHkuIFRoaXMgaGFzIHRvIGJlIGRvbmUgYmVmb3JlIHdlXG4gICAgICAgIC8vIG1ha2UgdGhlIGZvb3RlciBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQgb3Igd2UgbWF5IGFjY2lkZW50YWxseSBjYXVzZSB0aGVcbiAgICAgICAgLy8gc2hlZXQgdG8gc2Nyb2xsLlxuICAgICAgICBwYWdlID09PSBudWxsIHx8IHBhZ2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhZ2Uuc3R5bGUuc2V0UHJvcGVydHkoJ3BhZGRpbmctYm90dG9tJywgYCR7Zm9vdGVySGVpZ2h0c31weGApO1xuICAgICAgICAvLyBBcHBseSBwb3NpdGlvbmluZyBzdHlsZXMgdG8ga2VlcCBmb290ZXIgYXQgYm90dG9tXG4gICAgICAgIGNhY2hlZEZvb3RlckVsLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWZvb3Rlci1tb3ZpbmcnKTtcbiAgICAgICAgLy8gQXBwbHkgb3VyIHByZXNlcnZlZCBzdHlsZXMgdG8gcGluIHRoZSBmb290ZXJcbiAgICAgICAgY2FjaGVkRm9vdGVyRWwuc3R5bGUuc2V0UHJvcGVydHkoJ3Bvc2l0aW9uJywgJ2Fic29sdXRlJyk7XG4gICAgICAgIGNhY2hlZEZvb3RlckVsLnN0eWxlLnNldFByb3BlcnR5KCd3aWR0aCcsICd2YXIoLS1waW5uZWQtd2lkdGgpJyk7XG4gICAgICAgIGNhY2hlZEZvb3RlckVsLnN0eWxlLnNldFByb3BlcnR5KCdoZWlnaHQnLCAndmFyKC0tcGlubmVkLWhlaWdodCknKTtcbiAgICAgICAgY2FjaGVkRm9vdGVyRWwuc3R5bGUuc2V0UHJvcGVydHkoJ3RvcCcsICd2YXIoLS1waW5uZWQtdG9wKScpO1xuICAgICAgICBjYWNoZWRGb290ZXJFbC5zdHlsZS5zZXRQcm9wZXJ0eSgnbGVmdCcsICd2YXIoLS1waW5uZWQtbGVmdCknKTtcbiAgICAgICAgLy8gTW92ZSB0aGUgZWxlbWVudCB0byB0aGUgYm9keSB3aGVuIGV2ZXJ5dGhpbmcgZWxzZSBpcyBkb25lXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FjaGVkRm9vdGVyRWwpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICAvKipcbiAgICogQWZ0ZXIgdGhlIGVudGVyaW5nIGFuaW1hdGlvbiBjb21wbGV0ZXMsXG4gICAqIHdlIG5lZWQgdG8gc2V0IHRoZSBhbmltYXRpb24gdG8gZ28gZnJvbVxuICAgKiBvZmZzZXQgMCB0byBvZmZzZXQgMSBzbyB0aGF0IHVzZXJzIGNhblxuICAgKiBzd2lwZSBpbiBhbnkgZGlyZWN0aW9uLiBXZSB0aGVuIHNldCB0aGVcbiAgICogYW5pbWF0aW9uIG9mZnNldCB0byB0aGUgY3VycmVudCBicmVha3BvaW50XG4gICAqIHNvIHRoZXJlIGlzIG5vIGZsaWNrZXJpbmcuXG4gICAqL1xuICBpZiAod3JhcHBlckFuaW1hdGlvbiAmJiBiYWNrZHJvcEFuaW1hdGlvbikge1xuICAgIHdyYXBwZXJBbmltYXRpb24ua2V5ZnJhbWVzKFsuLi5TaGVldERlZmF1bHRzLldSQVBQRVJfS0VZRlJBTUVTXSk7XG4gICAgYmFja2Ryb3BBbmltYXRpb24ua2V5ZnJhbWVzKFsuLi5TaGVldERlZmF1bHRzLkJBQ0tEUk9QX0tFWUZSQU1FU10pO1xuICAgIGNvbnRlbnRBbmltYXRpb24gPT09IG51bGwgfHwgY29udGVudEFuaW1hdGlvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29udGVudEFuaW1hdGlvbi5rZXlmcmFtZXMoWy4uLlNoZWV0RGVmYXVsdHMuQ09OVEVOVF9LRVlGUkFNRVNdKTtcbiAgICBhbmltYXRpb24ucHJvZ3Jlc3NTdGFydCh0cnVlLCAxIC0gY3VycmVudEJyZWFrcG9pbnQpO1xuICAgIC8qKlxuICAgICAqIElmIGJhY2tkcm9wIGlzIG5vdCBlbmFibGVkLCB0aGVuIGNvbnRlbnRcbiAgICAgKiBiZWhpbmQgbW9kYWwgc2hvdWxkIGJlIGNsaWNrYWJsZS4gVG8gZG8gdGhpcywgd2UgbmVlZFxuICAgICAqIHRvIHJlbW92ZSBwb2ludGVyLWV2ZW50cyBmcm9tIGlvbi1tb2RhbCBhcyBhIHdob2xlLlxuICAgICAqIGlvbi1iYWNrZHJvcCBhbmQgLm1vZGFsLXdyYXBwZXIgYWx3YXlzIGhhdmUgcG9pbnRlci1ldmVudHM6IGF1dG9cbiAgICAgKiBhcHBsaWVkLCBzbyB0aGUgbW9kYWwgY29udGVudCBjYW4gc3RpbGwgYmUgaW50ZXJhY3RlZCB3aXRoLlxuICAgICAqL1xuICAgIGNvbnN0IHNob3VsZEVuYWJsZUJhY2tkcm9wID0gY3VycmVudEJyZWFrcG9pbnQgPiBiYWNrZHJvcEJyZWFrcG9pbnQ7XG4gICAgaWYgKHNob3VsZEVuYWJsZUJhY2tkcm9wKSB7XG4gICAgICBlbmFibGVCYWNrZHJvcCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXNhYmxlQmFja2Ryb3AoKTtcbiAgICB9XG4gIH1cbiAgaWYgKGNvbnRlbnRFbCAmJiBjdXJyZW50QnJlYWtwb2ludCAhPT0gbWF4QnJlYWtwb2ludCAmJiBleHBhbmRUb1Njcm9sbCkge1xuICAgIGNvbnRlbnRFbC5zY3JvbGxZID0gZmFsc2U7XG4gIH1cbiAgY29uc3QgY2FuU3RhcnQgPSBkZXRhaWwgPT4ge1xuICAgIC8qKlxuICAgICAqIElmIHdlIGFyZSBzd2lwaW5nIG9uIHRoZSBjb250ZW50LCBzd2lwaW5nIHNob3VsZCBvbmx5IGJlIHBvc3NpYmxlIGlmIHRoZSBjb250ZW50XG4gICAgICogaXMgc2Nyb2xsZWQgYWxsIHRoZSB3YXkgdG8gdGhlIHRvcCBzbyB0aGF0IHdlIGRvIG5vdCBpbnRlcmZlcmUgd2l0aCBzY3JvbGxpbmcuXG4gICAgICpcbiAgICAgKiBXZSBjYW5ub3QgYXNzdW1lIHRoYXQgdGhlIGBpb24tY29udGVudGAgdGFyZ2V0IHdpbGwgcmVtYWluIGNvbnNpc3RlbnQgYmV0d2VlbiBzd2lwZXMuXG4gICAgICogRm9yIGV4YW1wbGUsIHdoZW4gdXNpbmcgaW9uLW5hdiB3aXRoaW4gYSBtb2RhbCBpdCBpcyBwb3NzaWJsZSB0byBzd2lwZSwgcHVzaCBhIHZpZXcsXG4gICAgICogYW5kIHRoZW4gc3dpcGUgYWdhaW4uIFRoZSB0YXJnZXQgY29udGVudCB3aWxsIG5vdCBiZSB0aGUgc2FtZSBiZXR3ZWVuIHN3aXBlcy5cbiAgICAgKi9cbiAgICBjb25zdCBjb250ZW50RWwgPSBmaW5kQ2xvc2VzdElvbkNvbnRlbnQoZGV0YWlsLmV2ZW50LnRhcmdldCk7XG4gICAgY3VycmVudEJyZWFrcG9pbnQgPSBnZXRDdXJyZW50QnJlYWtwb2ludCgpO1xuICAgIC8qKlxuICAgICAqIElmIGBleHBhbmRUb1Njcm9sbGAgaXMgZGlzYWJsZWQsIHdlIHNob3VsZCBub3QgYWxsb3cgdGhlIHN3aXBlIGdlc3R1cmVcbiAgICAgKiB0byBzdGFydCBpZiB0aGUgY29udGVudCBpcyBub3Qgc2Nyb2xsZWQgdG8gdGhlIHRvcC5cbiAgICAgKi9cbiAgICBpZiAoIWV4cGFuZFRvU2Nyb2xsICYmIGNvbnRlbnRFbCkge1xuICAgICAgY29uc3Qgc2Nyb2xsRWwgPSBpc0lvbkNvbnRlbnQoY29udGVudEVsKSA/IGdldEVsZW1lbnRSb290KGNvbnRlbnRFbCkucXVlcnlTZWxlY3RvcignLmlubmVyLXNjcm9sbCcpIDogY29udGVudEVsO1xuICAgICAgcmV0dXJuIHNjcm9sbEVsLnNjcm9sbFRvcCA9PT0gMDtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRCcmVha3BvaW50ID09PSAxICYmIGNvbnRlbnRFbCkge1xuICAgICAgLyoqXG4gICAgICAgKiBUaGUgbW9kYWwgc2hvdWxkIG5ldmVyIHN3aXBlIHRvIGNsb3NlIG9uIHRoZSBjb250ZW50IHdpdGggYSByZWZyZXNoZXIuXG4gICAgICAgKiBOb3RlIDE6IFdlIGNhbm5vdCBzb2x2ZSB0aGlzIGJ5IG1ha2luZyB0aGlzIGdlc3R1cmUgaGF2ZSBhIGhpZ2hlciBwcmlvcml0eSB0aGFuXG4gICAgICAgKiB0aGUgcmVmcmVzaGVyIGdlc3R1cmUgYXMgdGhlIGlPUyBuYXRpdmUgcmVmcmVzaCBnZXN0dXJlIHVzZXMgYSBzY3JvbGwgbGlzdGVuZXIgaW5cbiAgICAgICAqIGFkZGl0aW9uIHRvIGEgZ2VzdHVyZS5cbiAgICAgICAqXG4gICAgICAgKiBOb3RlIDI6IERvIG5vdCB1c2UgZ2V0U2Nyb2xsRWxlbWVudCBoZXJlIGJlY2F1c2Ugd2UgbmVlZCB0aGlzIHRvIGJlIGEgc3luY2hyb25vdXNcbiAgICAgICAqIG9wZXJhdGlvbiwgYW5kIGdldFNjcm9sbEVsZW1lbnQgaXMgYXN5bmNocm9ub3VzLlxuICAgICAgICovXG4gICAgICBjb25zdCBzY3JvbGxFbCA9IGlzSW9uQ29udGVudChjb250ZW50RWwpID8gZ2V0RWxlbWVudFJvb3QoY29udGVudEVsKS5xdWVyeVNlbGVjdG9yKCcuaW5uZXItc2Nyb2xsJykgOiBjb250ZW50RWw7XG4gICAgICBjb25zdCBoYXNSZWZyZXNoZXJJbkNvbnRlbnQgPSAhIWNvbnRlbnRFbC5xdWVyeVNlbGVjdG9yKCdpb24tcmVmcmVzaGVyJyk7XG4gICAgICByZXR1cm4gIWhhc1JlZnJlc2hlckluQ29udGVudCAmJiBzY3JvbGxFbC5zY3JvbGxUb3AgPT09IDA7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuICBjb25zdCBvblN0YXJ0ID0gZGV0YWlsID0+IHtcbiAgICAvKipcbiAgICAgKiBJZiBjYW5EaXNtaXNzIGlzIGFueXRoaW5nIG90aGVyIHRoYW4gYHRydWVgXG4gICAgICogdGhlbiB1c2VycyBzaG91bGQgYmUgYWJsZSB0byBzd2lwZSBkb3duXG4gICAgICogdW50aWwgYSB0aHJlc2hvbGQgaXMgaGl0LiBBdCB0aGF0IHBvaW50LFxuICAgICAqIHRoZSBjYXJkIG1vZGFsIHNob3VsZCBub3QgcHJvY2VlZCBhbnkgZnVydGhlci5cbiAgICAgKlxuICAgICAqIGNhbkRpc21pc3MgaXMgbmV2ZXIgZmlyZWQgdmlhIGdlc3R1cmUgaWYgdGhlcmUgaXNcbiAgICAgKiBubyAwIGJyZWFrcG9pbnQuIEhvd2V2ZXIsIGl0IGNhbiBiZSBmaXJlZCBpZiB0aGUgdXNlclxuICAgICAqIHByZXNzZXMgRXNjIG9yIHRoZSBoYXJkd2FyZSBiYWNrIGJ1dHRvbi5cbiAgICAgKiBUT0RPIChGVy05MzcpXG4gICAgICogUmVtb3ZlIHVuZGVmaW5lZCBjaGVja1xuICAgICAqL1xuICAgIGNhbkRpc21pc3NCbG9ja3NHZXN0dXJlID0gYmFzZUVsLmNhbkRpc21pc3MgIT09IHVuZGVmaW5lZCAmJiBiYXNlRWwuY2FuRGlzbWlzcyAhPT0gdHJ1ZSAmJiBtaW5CcmVha3BvaW50ID09PSAwO1xuICAgIC8qKlxuICAgICAqIENhY2hlIHRoZSBzY3JvbGwgZWxlbWVudCByZWZlcmVuY2Ugd2hlbiB0aGUgZ2VzdHVyZSBzdGFydHMsXG4gICAgICogdGhpcyBhbGxvd3MgdXMgdG8gYXZvaWQgcXVlcnlpbmcgdGhlIERPTSBmb3IgdGhlIHRhcmdldCBpbiBvbk1vdmUsXG4gICAgICogd2hpY2ggd291bGQgaW1wYWN0IHBlcmZvcm1hbmNlIHNpZ25pZmljYW50bHkuXG4gICAgICovXG4gICAgaWYgKCFleHBhbmRUb1Njcm9sbCkge1xuICAgICAgY29uc3QgdGFyZ2V0RWwgPSBmaW5kQ2xvc2VzdElvbkNvbnRlbnQoZGV0YWlsLmV2ZW50LnRhcmdldCk7XG4gICAgICBjYWNoZWRTY3JvbGxFbCA9IHRhcmdldEVsICYmIGlzSW9uQ29udGVudCh0YXJnZXRFbCkgPyBnZXRFbGVtZW50Um9vdCh0YXJnZXRFbCkucXVlcnlTZWxlY3RvcignLmlubmVyLXNjcm9sbCcpIDogdGFyZ2V0RWw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIElmIGV4cGFuZFRvU2Nyb2xsIGlzIGRpc2FibGVkLCB3ZSBuZWVkIHRvIHN3YXBcbiAgICAgKiB0aGUgZm9vdGVyIHBvc2l0aW9uIHRvIG1vdmluZyBzbyB0aGF0IGl0IGRvZXNuJ3Qgc2hha2VcbiAgICAgKiB3aGlsZSB0aGUgc2hlZXQgaXMgYmVpbmcgZHJhZ2dlZC5cbiAgICAgKi9cbiAgICBpZiAoIWV4cGFuZFRvU2Nyb2xsKSB7XG4gICAgICBzd2FwRm9vdGVyUG9zaXRpb24oJ21vdmluZycpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJZiB3ZSBhcmUgcHVsbGluZyBkb3duLCB0aGVuIGl0IGlzIHBvc3NpYmxlIHdlIGFyZSBwdWxsaW5nIG9uIHRoZSBjb250ZW50LlxuICAgICAqIFdlIGRvIG5vdCB3YW50IHNjcm9sbGluZyB0byBoYXBwZW4gYXQgdGhlIHNhbWUgdGltZSBhcyB0aGUgZ2VzdHVyZS5cbiAgICAgKi9cbiAgICBpZiAoZGV0YWlsLmRlbHRhWSA+IDAgJiYgY29udGVudEVsKSB7XG4gICAgICBjb250ZW50RWwuc2Nyb2xsWSA9IGZhbHNlO1xuICAgIH1cbiAgICByYWYoKCkgPT4ge1xuICAgICAgLyoqXG4gICAgICAgKiBEaXNtaXNzZXMgdGhlIG9wZW4ga2V5Ym9hcmQgd2hlbiB0aGUgc2hlZXQgZHJhZyBnZXN0dXJlIGlzIHN0YXJ0ZWQuXG4gICAgICAgKiBTZXRzIHRoZSBmb2N1cyBvbnRvIHRoZSBtb2RhbCBlbGVtZW50LlxuICAgICAgICovXG4gICAgICBiYXNlRWwuZm9jdXMoKTtcbiAgICB9KTtcbiAgICBhbmltYXRpb24ucHJvZ3Jlc3NTdGFydCh0cnVlLCAxIC0gY3VycmVudEJyZWFrcG9pbnQpO1xuICB9O1xuICBjb25zdCBvbk1vdmUgPSBkZXRhaWwgPT4ge1xuICAgIC8qKlxuICAgICAqIElmIGBleHBhbmRUb1Njcm9sbGAgaXMgZGlzYWJsZWQsIHdlIG5lZWQgdG8gc2VlIGlmIHdlJ3JlIGN1cnJlbnRseSBiZWxvd1xuICAgICAqIHRoZSBmb290ZXIgZWxlbWVudCBhbmQgdGhlIGZvb3RlciBpcyBpbiBhIHN0YXRpb25hcnkgcG9zaXRpb24uIElmIHNvLFxuICAgICAqIHdlIG5lZWQgdG8gbWFrZSB0aGUgc3RhdGlvbmFyeSB0aGUgb3JpZ2luYWwgcG9zaXRpb24gc28gdGhhdCB0aGUgZm9vdGVyXG4gICAgICogY29sbGFwc2VzIHdpdGggdGhlIHNoZWV0LlxuICAgICAqL1xuICAgIGlmICghZXhwYW5kVG9TY3JvbGwgJiYgY2FjaGVkRm9vdGVyWVBvc2l0aW9uICE9PSBudWxsICYmIGN1cnJlbnRGb290ZXJTdGF0ZSAhPT0gbnVsbCkge1xuICAgICAgLy8gQ2hlY2sgaWYgd2UgbmVlZCB0byBzd2FwIHRoZSBmb290ZXIgcG9zaXRpb25cbiAgICAgIGlmIChkZXRhaWwuY3VycmVudFkgPj0gY2FjaGVkRm9vdGVyWVBvc2l0aW9uICYmIGN1cnJlbnRGb290ZXJTdGF0ZSA9PT0gJ21vdmluZycpIHtcbiAgICAgICAgc3dhcEZvb3RlclBvc2l0aW9uKCdzdGF0aW9uYXJ5Jyk7XG4gICAgICB9IGVsc2UgaWYgKGRldGFpbC5jdXJyZW50WSA8IGNhY2hlZEZvb3RlcllQb3NpdGlvbiAmJiBjdXJyZW50Rm9vdGVyU3RhdGUgPT09ICdzdGF0aW9uYXJ5Jykge1xuICAgICAgICBzd2FwRm9vdGVyUG9zaXRpb24oJ21vdmluZycpO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBJZiBgZXhwYW5kVG9TY3JvbGxgIGlzIGRpc2FibGVkLCBhbmQgYW4gdXB3YXJkcyBzd2lwZSBnZXN0dXJlIGlzIGRvbmUgd2l0aGluXG4gICAgICogdGhlIHNjcm9sbGFibGUgY29udGVudCwgd2Ugc2hvdWxkIG5vdCBhbGxvdyB0aGUgc3dpcGUgZ2VzdHVyZSB0byBjb250aW51ZS5cbiAgICAgKi9cbiAgICBpZiAoIWV4cGFuZFRvU2Nyb2xsICYmIGRldGFpbC5kZWx0YVkgPD0gMCAmJiBjYWNoZWRTY3JvbGxFbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJZiB3ZSBhcmUgcHVsbGluZyBkb3duLCB0aGVuIGl0IGlzIHBvc3NpYmxlIHdlIGFyZSBwdWxsaW5nIG9uIHRoZSBjb250ZW50LlxuICAgICAqIFdlIGRvIG5vdCB3YW50IHNjcm9sbGluZyB0byBoYXBwZW4gYXQgdGhlIHNhbWUgdGltZSBhcyB0aGUgZ2VzdHVyZS5cbiAgICAgKiBUaGlzIGFjY291bnRzIGZvciB3aGVuIHRoZSB1c2VyIHNjcm9sbHMgZG93biwgc2Nyb2xscyBhbGwgdGhlIHdheSB1cCwgYW5kIHRoZW5cbiAgICAgKiBwdWxscyBkb3duIGFnYWluIHN1Y2ggdGhhdCB0aGUgbW9kYWwgc2hvdWxkIHN0YXJ0IHRvIG1vdmUuXG4gICAgICovXG4gICAgaWYgKGRldGFpbC5kZWx0YVkgPiAwICYmIGNvbnRlbnRFbCkge1xuICAgICAgY29udGVudEVsLnNjcm9sbFkgPSBmYWxzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2l2ZW4gdGhlIGNoYW5nZSBpbiBnZXN0dXJlIHBvc2l0aW9uIG9uIHRoZSBZIGF4aXMsXG4gICAgICogY29tcHV0ZSB3aGVyZSB0aGUgb2Zmc2V0IG9mIHRoZSBhbmltYXRpb24gc2hvdWxkIGJlXG4gICAgICogcmVsYXRpdmUgdG8gd2hlcmUgdGhlIHVzZXIgZHJhZ2dlZC5cbiAgICAgKi9cbiAgICBjb25zdCBpbml0aWFsU3RlcCA9IDEgLSBjdXJyZW50QnJlYWtwb2ludDtcbiAgICBjb25zdCBzZWNvbmRUb0xhc3RCcmVha3BvaW50ID0gYnJlYWtwb2ludHMubGVuZ3RoID4gMSA/IDEgLSBicmVha3BvaW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCBzdGVwID0gaW5pdGlhbFN0ZXAgKyBkZXRhaWwuZGVsdGFZIC8gaGVpZ2h0O1xuICAgIGNvbnN0IGlzQXR0ZW1wdGluZ0Rpc21pc3NXaXRoQ2FuRGlzbWlzcyA9IHNlY29uZFRvTGFzdEJyZWFrcG9pbnQgIT09IHVuZGVmaW5lZCAmJiBzdGVwID49IHNlY29uZFRvTGFzdEJyZWFrcG9pbnQgJiYgY2FuRGlzbWlzc0Jsb2Nrc0dlc3R1cmU7XG4gICAgLyoqXG4gICAgICogSWYgd2UgYXJlIGJsb2NraW5nIHRoZSBnZXN0dXJlIGZyb20gZGlzbWlzc2luZyxcbiAgICAgKiBzZXQgdGhlIG1heCBzdGVwIHZhbHVlIHNvIHRoYXQgdGhlIHNoZWV0IGNhbm5vdCBiZVxuICAgICAqIGNvbXBsZXRlbHkgaGlkZGVuLlxuICAgICAqL1xuICAgIGNvbnN0IG1heFN0ZXAgPSBpc0F0dGVtcHRpbmdEaXNtaXNzV2l0aENhbkRpc21pc3MgPyBjYW5EaXNtaXNzTWF4U3RlcCA6IDAuOTk5OTtcbiAgICAvKipcbiAgICAgKiBJZiB3ZSBhcmUgYmxvY2tpbmcgdGhlIGdlc3R1cmUgZnJvbVxuICAgICAqIGRpc21pc3NpbmcsIGNhbGN1bGF0ZSB0aGUgc3ByaW5nIG1vZGlmaWVyIHZhbHVlXG4gICAgICogdGhpcyB3aWxsIGJlIGFkZGVkIHRvIHRoZSBzdGFydGluZyBicmVha3BvaW50XG4gICAgICogdmFsdWUgdG8gZ2l2ZSB0aGUgZ2VzdHVyZSBhIHNwcmluZy1saWtlIGZlZWxpbmcuXG4gICAgICogTm90ZSB0aGF0IHdoZW4gaXNBdHRlbXB0aW5nRGlzbWlzc1dpdGhDYW5EaXNtaXNzIGlzIHRydWUsXG4gICAgICogdGhlIG1vZGlmaWVyIGlzIGFsd2F5cyBhZGRlZCB0byB0aGUgYnJlYWtwb2ludCB0aGF0XG4gICAgICogYXBwZWFycyByaWdodCBhZnRlciB0aGUgMCBicmVha3BvaW50LlxuICAgICAqXG4gICAgICogTm90ZSB0aGF0IHRoaXMgbW9kaWZpZXIgaXMgZXNzZW50aWFsbHkgdGhlIHByb2dyZXNzaW9uXG4gICAgICogYmV0d2VlbiBzZWNvbmRUb0xhc3RCcmVha3BvaW50IGFuZCBtYXhTdGVwIHdoaWNoIGlzXG4gICAgICogd2h5IHdlIHN1YnRyYWN0IHNlY29uZFRvTGFzdEJyZWFrcG9pbnQuIFRoaXMgbGV0cyB1cyBnZXRcbiAgICAgKiB0aGUgcmVzdWx0IGFzIGEgdmFsdWUgZnJvbSAwIHRvIDEuXG4gICAgICovXG4gICAgY29uc3QgcHJvY2Vzc2VkU3RlcCA9IGlzQXR0ZW1wdGluZ0Rpc21pc3NXaXRoQ2FuRGlzbWlzcyAmJiBzZWNvbmRUb0xhc3RCcmVha3BvaW50ICE9PSB1bmRlZmluZWQgPyBzZWNvbmRUb0xhc3RCcmVha3BvaW50ICsgY2FsY3VsYXRlU3ByaW5nU3RlcCgoc3RlcCAtIHNlY29uZFRvTGFzdEJyZWFrcG9pbnQpIC8gKG1heFN0ZXAgLSBzZWNvbmRUb0xhc3RCcmVha3BvaW50KSkgOiBzdGVwO1xuICAgIG9mZnNldCA9IGNsYW1wKDAuMDAwMSwgcHJvY2Vzc2VkU3RlcCwgbWF4U3RlcCk7XG4gICAgYW5pbWF0aW9uLnByb2dyZXNzU3RlcChvZmZzZXQpO1xuICB9O1xuICBjb25zdCBvbkVuZCA9IGRldGFpbCA9PiB7XG4gICAgLyoqXG4gICAgICogSWYgZXhwYW5kVG9TY3JvbGwgaXMgZGlzYWJsZWQsIHdlIHNob3VsZCBub3QgYWxsb3cgdGhlIG1vdmVTaGVldFRvQnJlYWtwb2ludFxuICAgICAqIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBpZiB0aGUgdXNlciBpcyB0cnlpbmcgdG8gc3dpcGUgY29udGVudCB1cHdhcmRzIGFuZCB0aGUgY29udGVudFxuICAgICAqIGlzIG5vdCBzY3JvbGxlZCB0byB0aGUgdG9wLlxuICAgICAqL1xuICAgIGlmICghZXhwYW5kVG9TY3JvbGwgJiYgZGV0YWlsLmRlbHRhWSA8PSAwICYmIGNhY2hlZFNjcm9sbEVsICYmIGNhY2hlZFNjcm9sbEVsLnNjcm9sbFRvcCA+IDApIHtcbiAgICAgIC8qKlxuICAgICAgICogSWYgZXhwYW5kIHRvIHNjcm9sbCBpcyBkaXNhYmxlZCwgd2UgbmVlZCB0byBtYWtlIHN1cmUgd2Ugc3dhcCB0aGUgZm9vdGVyIHBvc2l0aW9uXG4gICAgICAgKiBiYWNrIHRvIHN0YXRpb25hcnkgc28gdGhhdCBpdCB3aWxsIGNvbGxhcHNlIGNvcnJlY3RseSBpZiB0aGUgbW9kYWwgaXMgZGlzbWlzc2VkIHdpdGhvdXRcbiAgICAgICAqIGRyYWdnaW5nIChlLmcuIHRocm91Z2ggYSBkaXNtaXNzIGJ1dHRvbikuXG4gICAgICAgKiBUaGlzIGNhbiBjYXVzZSBpc3N1ZXMgaWYgdGhlIHVzZXIgaGFzIGEgbW9kYWwgd2l0aCBjb250ZW50IHRoYXQgY2FuIGJlIGRyYWdnZWQsIGFzIHdlJ2xsXG4gICAgICAgKiBzd2FwIHRvIG1vdmluZyBvbiBkcmFnIGFuZCBpZiB3ZSBkb24ndCBzd2FwIGJhY2sgaGVyZSB0aGVuIHRoZSBmb290ZXIgd2lsbCBnZXQgc3R1Y2suXG4gICAgICAgKi9cbiAgICAgIHN3YXBGb290ZXJQb3NpdGlvbignc3RhdGlvbmFyeScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBXaGVuIHRoZSBnZXN0dXJlIHJlbGVhc2VzLCB3ZSBuZWVkIHRvIGRldGVybWluZVxuICAgICAqIHRoZSBjbG9zZXN0IGJyZWFrcG9pbnQgdG8gc25hcCB0by5cbiAgICAgKi9cbiAgICBjb25zdCB2ZWxvY2l0eSA9IGRldGFpbC52ZWxvY2l0eVk7XG4gICAgY29uc3QgdGhyZXNob2xkID0gKGRldGFpbC5kZWx0YVkgKyB2ZWxvY2l0eSAqIDM1MCkgLyBoZWlnaHQ7XG4gICAgY29uc3QgZGlmZiA9IGN1cnJlbnRCcmVha3BvaW50IC0gdGhyZXNob2xkO1xuICAgIGNvbnN0IGNsb3Nlc3QgPSBicmVha3BvaW50cy5yZWR1Y2UoKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiBNYXRoLmFicyhiIC0gZGlmZikgPCBNYXRoLmFicyhhIC0gZGlmZikgPyBiIDogYTtcbiAgICB9KTtcbiAgICBtb3ZlU2hlZXRUb0JyZWFrcG9pbnQoe1xuICAgICAgYnJlYWtwb2ludDogY2xvc2VzdCxcbiAgICAgIGJyZWFrcG9pbnRPZmZzZXQ6IG9mZnNldCxcbiAgICAgIGNhbkRpc21pc3M6IGNhbkRpc21pc3NCbG9ja3NHZXN0dXJlLFxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgc3dpcGUgaXMgdXNlci1kcml2ZW4sIHNvIHdlIHNob3VsZFxuICAgICAgICogYWx3YXlzIGFuaW1hdGUgd2hlbiB0aGUgZ2VzdHVyZSBlbmRzLlxuICAgICAgICovXG4gICAgICBhbmltYXRlZDogdHJ1ZVxuICAgIH0pO1xuICB9O1xuICBjb25zdCBtb3ZlU2hlZXRUb0JyZWFrcG9pbnQgPSBvcHRpb25zID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBicmVha3BvaW50LFxuICAgICAgY2FuRGlzbWlzcyxcbiAgICAgIGJyZWFrcG9pbnRPZmZzZXQsXG4gICAgICBhbmltYXRlZFxuICAgIH0gPSBvcHRpb25zO1xuICAgIC8qKlxuICAgICAqIGNhbkRpc21pc3Mgc2hvdWxkIG9ubHkgcHJldmVudCBzbmFwcGluZ1xuICAgICAqIHdoZW4gdXNlcnMgYXJlIHRyeWluZyB0byBkaXNtaXNzLiBJZiBjYW5EaXNtaXNzXG4gICAgICogaXMgcHJlc2VudCBidXQgdGhlIHVzZXIgaXMgdHJ5aW5nIHRvIHN3aXBlIHVwd2FyZHMsXG4gICAgICogd2Ugc2hvdWxkIGFsbG93IHRoYXQgdG8gaGFwcGVuLFxuICAgICAqL1xuICAgIGNvbnN0IHNob3VsZFByZXZlbnREaXNtaXNzID0gY2FuRGlzbWlzcyAmJiBicmVha3BvaW50ID09PSAwO1xuICAgIGNvbnN0IHNuYXBUb0JyZWFrcG9pbnQgPSBzaG91bGRQcmV2ZW50RGlzbWlzcyA/IGN1cnJlbnRCcmVha3BvaW50IDogYnJlYWtwb2ludDtcbiAgICBjb25zdCBzaG91bGRSZW1haW5PcGVuID0gc25hcFRvQnJlYWtwb2ludCAhPT0gMDtcbiAgICBjdXJyZW50QnJlYWtwb2ludCA9IDA7XG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBhbmltYXRpb24gc28gdGhhdCBpdCBwbGF5cyBmcm9tXG4gICAgICogdGhlIGxhc3Qgb2Zmc2V0IHRvIHRoZSBjbG9zZXN0IHNuYXAgcG9pbnQuXG4gICAgICovXG4gICAgaWYgKHdyYXBwZXJBbmltYXRpb24gJiYgYmFja2Ryb3BBbmltYXRpb24pIHtcbiAgICAgIHdyYXBwZXJBbmltYXRpb24ua2V5ZnJhbWVzKFt7XG4gICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgke2JyZWFrcG9pbnRPZmZzZXQgKiAxMDB9JSlgXG4gICAgICB9LCB7XG4gICAgICAgIG9mZnNldDogMSxcbiAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgkeygxIC0gc25hcFRvQnJlYWtwb2ludCkgKiAxMDB9JSlgXG4gICAgICB9XSk7XG4gICAgICBiYWNrZHJvcEFuaW1hdGlvbi5rZXlmcmFtZXMoW3tcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICBvcGFjaXR5OiBgY2FsYyh2YXIoLS1iYWNrZHJvcC1vcGFjaXR5KSAqICR7Z2V0QmFja2Ryb3BWYWx1ZUZvclNoZWV0KDEgLSBicmVha3BvaW50T2Zmc2V0LCBiYWNrZHJvcEJyZWFrcG9pbnQpfSlgXG4gICAgICB9LCB7XG4gICAgICAgIG9mZnNldDogMSxcbiAgICAgICAgb3BhY2l0eTogYGNhbGModmFyKC0tYmFja2Ryb3Atb3BhY2l0eSkgKiAke2dldEJhY2tkcm9wVmFsdWVGb3JTaGVldChzbmFwVG9CcmVha3BvaW50LCBiYWNrZHJvcEJyZWFrcG9pbnQpfSlgXG4gICAgICB9XSk7XG4gICAgICBpZiAoY29udGVudEFuaW1hdGlvbikge1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG1vZGFsIGNvbnRlbnQgc2hvdWxkIHNjcm9sbCBhdCBhbnkgYnJlYWtwb2ludCB3aGVuIGV4cGFuZFRvU2Nyb2xsXG4gICAgICAgICAqIGlzIGRpc2FibGVkLiBJbiBvcmRlciB0byBkbyB0aGlzLCB0aGUgY29udGVudCBuZWVkcyB0byBiZSBjb21wbGV0ZWx5XG4gICAgICAgICAqIHZpZXdhYmxlIHNvIHNjcm9sbGluZyBjYW4gYWNjZXNzIGV2ZXJ5dGhpbmcuIE90aGVyd2lzZSwgdGhlIGRlZmF1bHRcbiAgICAgICAgICogYmVoYXZpb3Igd291bGQgc2hvdyB0aGUgY29udGVudCBvZmYgdGhlIHNjcmVlbiBhbmQgb25seSBhbGxvd1xuICAgICAgICAgKiBzY3JvbGxpbmcgd2hlbiB0aGUgc2hlZXQgaXMgZnVsbHkgZXhwYW5kZWQuXG4gICAgICAgICAqL1xuICAgICAgICBjb250ZW50QW5pbWF0aW9uLmtleWZyYW1lcyhbe1xuICAgICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgICBtYXhIZWlnaHQ6IGAkeygxIC0gYnJlYWtwb2ludE9mZnNldCkgKiAxMDB9JWBcbiAgICAgICAgfSwge1xuICAgICAgICAgIG9mZnNldDogMSxcbiAgICAgICAgICBtYXhIZWlnaHQ6IGAke3NuYXBUb0JyZWFrcG9pbnQgKiAxMDB9JWBcbiAgICAgICAgfV0pO1xuICAgICAgfVxuICAgICAgYW5pbWF0aW9uLnByb2dyZXNzU3RlcCgwKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2VzdHVyZSBzaG91bGQgcmVtYWluIGRpc2FibGVkIHVudGlsIHRoZVxuICAgICAqIHNuYXBwaW5nIGFuaW1hdGlvbiBjb21wbGV0ZXMuXG4gICAgICovXG4gICAgZ2VzdHVyZS5lbmFibGUoZmFsc2UpO1xuICAgIGlmIChzaG91bGRQcmV2ZW50RGlzbWlzcykge1xuICAgICAgaGFuZGxlQ2FuRGlzbWlzcyhiYXNlRWwsIGFuaW1hdGlvbik7XG4gICAgfSBlbHNlIGlmICghc2hvdWxkUmVtYWluT3Blbikge1xuICAgICAgb25EaXNtaXNzKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVuYWJsZXMgc2Nyb2xsaW5nIGltbWVkaWF0ZWx5IGlmIHRoZSBzaGVldCBpcyBhYm91dCB0byBmdWxseSBleHBhbmRcbiAgICAgKiBvciBpZiBpdCBhbGxvd3Mgc2Nyb2xsaW5nIGF0IGFueSBicmVha3BvaW50LiBXaXRob3V0IHRoaXMsIHRoZXJlIHdvdWxkXG4gICAgICogYmUgYSB+NTAwbXMgZGVsYXkgd2hpbGUgdGhlIG1vZGFsIGFuaW1hdGlvbiBjb21wbGV0ZXMsIGNhdXNpbmcgYVxuICAgICAqIG5vdGljZWFibGUgbGFnLiBOYXRpdmUgaU9TIGFsbG93cyBzY3JvbGxpbmcgYXMgc29vbiBhcyB0aGUgZ2VzdHVyZSBpc1xuICAgICAqIHJlbGVhc2VkLCBzbyB3ZSBhbGlnbiB3aXRoIHRoYXQgYmVoYXZpb3IuXG4gICAgICovXG4gICAgaWYgKGNvbnRlbnRFbCAmJiAoc25hcFRvQnJlYWtwb2ludCA9PT0gYnJlYWtwb2ludHNbYnJlYWtwb2ludHMubGVuZ3RoIC0gMV0gfHwgIWV4cGFuZFRvU2Nyb2xsKSkge1xuICAgICAgY29udGVudEVsLnNjcm9sbFkgPSB0cnVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJZiBleHBhbmRUb1Njcm9sbCBpcyBkaXNhYmxlZCBhbmQgd2UncmUgYW5pbWF0aW5nXG4gICAgICogdG8gY2xvc2UgdGhlIHNoZWV0LCB3ZSBuZWVkIHRvIHN3YXBcbiAgICAgKiB0aGUgZm9vdGVyIHBvc2l0aW9uIHRvIHN0YXRpb25hcnkgc28gdGhhdCBpdFxuICAgICAqIHdpbGwgY29sbGFwc2UgY29ycmVjdGx5LiBXZSBjYW5ub3QganVzdCBhbHdheXMgc3dhcFxuICAgICAqIGhlcmUgb3IgaXQnbGwgYmUgaml0dGVyeSB3aGlsZSBhbmltYXRpbmcgbW92ZW1lbnQuXG4gICAgICovXG4gICAgaWYgKCFleHBhbmRUb1Njcm9sbCAmJiBzbmFwVG9CcmVha3BvaW50ID09PSAwKSB7XG4gICAgICBzd2FwRm9vdGVyUG9zaXRpb24oJ3N0YXRpb25hcnknKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgYW5pbWF0aW9uLm9uRmluaXNoKCgpID0+IHtcbiAgICAgICAgaWYgKHNob3VsZFJlbWFpbk9wZW4pIHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBJZiBleHBhbmRUb1Njcm9sbCBpcyBkaXNhYmxlZCwgd2UgbmVlZCB0byBzd2FwXG4gICAgICAgICAgICogdGhlIGZvb3RlciBwb3NpdGlvbiB0byBzdGF0aW9uYXJ5IHNvIHRoYXQgaXRcbiAgICAgICAgICAgKiB3aWxsIGFjdCBhcyBpdCB3b3VsZCBieSBkZWZhdWx0LlxuICAgICAgICAgICAqL1xuICAgICAgICAgIGlmICghZXhwYW5kVG9TY3JvbGwpIHtcbiAgICAgICAgICAgIHN3YXBGb290ZXJQb3NpdGlvbignc3RhdGlvbmFyeScpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBPbmNlIHRoZSBzbmFwcGluZyBhbmltYXRpb24gY29tcGxldGVzLFxuICAgICAgICAgICAqIHdlIG5lZWQgdG8gcmVzZXQgdGhlIGFuaW1hdGlvbiB0byBnb1xuICAgICAgICAgICAqIGZyb20gMCB0byAxIHNvIHVzZXJzIGNhbiBzd2lwZSBpbiBhbnkgZGlyZWN0aW9uLlxuICAgICAgICAgICAqIFdlIHRoZW4gc2V0IHRoZSBhbmltYXRpb24gb2Zmc2V0IHRvIHRoZSBjdXJyZW50XG4gICAgICAgICAgICogYnJlYWtwb2ludCBzbyB0aGF0IGl0IHN0YXJ0cyBhdCB0aGUgc25hcHBlZCBwb3NpdGlvbi5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBpZiAod3JhcHBlckFuaW1hdGlvbiAmJiBiYWNrZHJvcEFuaW1hdGlvbikge1xuICAgICAgICAgICAgcmFmKCgpID0+IHtcbiAgICAgICAgICAgICAgd3JhcHBlckFuaW1hdGlvbi5rZXlmcmFtZXMoWy4uLlNoZWV0RGVmYXVsdHMuV1JBUFBFUl9LRVlGUkFNRVNdKTtcbiAgICAgICAgICAgICAgYmFja2Ryb3BBbmltYXRpb24ua2V5ZnJhbWVzKFsuLi5TaGVldERlZmF1bHRzLkJBQ0tEUk9QX0tFWUZSQU1FU10pO1xuICAgICAgICAgICAgICBjb250ZW50QW5pbWF0aW9uID09PSBudWxsIHx8IGNvbnRlbnRBbmltYXRpb24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbnRlbnRBbmltYXRpb24ua2V5ZnJhbWVzKFsuLi5TaGVldERlZmF1bHRzLkNPTlRFTlRfS0VZRlJBTUVTXSk7XG4gICAgICAgICAgICAgIGFuaW1hdGlvbi5wcm9ncmVzc1N0YXJ0KHRydWUsIDEgLSBzbmFwVG9CcmVha3BvaW50KTtcbiAgICAgICAgICAgICAgY3VycmVudEJyZWFrcG9pbnQgPSBzbmFwVG9CcmVha3BvaW50O1xuICAgICAgICAgICAgICBvbkJyZWFrcG9pbnRDaGFuZ2UoY3VycmVudEJyZWFrcG9pbnQpO1xuICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICogQmFja2Ryb3Agc2hvdWxkIGJlY29tZSBlbmFibGVkXG4gICAgICAgICAgICAgICAqIGFmdGVyIHRoZSBiYWNrZHJvcEJyZWFrcG9pbnQgdmFsdWVcbiAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgIGNvbnN0IHNob3VsZEVuYWJsZUJhY2tkcm9wID0gY3VycmVudEJyZWFrcG9pbnQgPiBiYWNrZHJvcEJyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgIGlmIChzaG91bGRFbmFibGVCYWNrZHJvcCkge1xuICAgICAgICAgICAgICAgIGVuYWJsZUJhY2tkcm9wKCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGlzYWJsZUJhY2tkcm9wKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZ2VzdHVyZS5lbmFibGUodHJ1ZSk7XG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnZXN0dXJlLmVuYWJsZSh0cnVlKTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIG11c3QgYmUgYSBvbmUgdGltZSBjYWxsYmFja1xuICAgICAgICAgKiBvdGhlcndpc2UgYSBuZXcgY2FsbGJhY2sgd2lsbFxuICAgICAgICAgKiBiZSBhZGRlZCBldmVyeSB0aW1lIG9uRW5kIHJ1bnMuXG4gICAgICAgICAqL1xuICAgICAgfSwge1xuICAgICAgICBvbmVUaW1lQ2FsbGJhY2s6IHRydWVcbiAgICAgIH0pLnByb2dyZXNzRW5kKDEsIDAsIGFuaW1hdGVkID8gNTAwIDogMCk7XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IGdlc3R1cmUgPSBjcmVhdGVHZXN0dXJlKHtcbiAgICBlbDogd3JhcHBlckVsLFxuICAgIGdlc3R1cmVOYW1lOiAnbW9kYWxTaGVldCcsXG4gICAgZ2VzdHVyZVByaW9yaXR5OiA0MCxcbiAgICBkaXJlY3Rpb246ICd5JyxcbiAgICB0aHJlc2hvbGQ6IDEwLFxuICAgIGNhblN0YXJ0LFxuICAgIG9uU3RhcnQsXG4gICAgb25Nb3ZlLFxuICAgIG9uRW5kXG4gIH0pO1xuICByZXR1cm4ge1xuICAgIGdlc3R1cmUsXG4gICAgbW92ZVNoZWV0VG9CcmVha3BvaW50XG4gIH07XG59O1xuY29uc3QgbW9kYWxJb3NDc3MgPSBcIjpob3N0ey0td2lkdGg6MTAwJTstLW1pbi13aWR0aDphdXRvOy0tbWF4LXdpZHRoOmF1dG87LS1oZWlnaHQ6MTAwJTstLW1pbi1oZWlnaHQ6YXV0bzstLW1heC1oZWlnaHQ6YXV0bzstLW92ZXJmbG93OmhpZGRlbjstLWJvcmRlci1yYWRpdXM6MDstLWJvcmRlci13aWR0aDowOy0tYm9yZGVyLXN0eWxlOm5vbmU7LS1ib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKTstLWJveC1zaGFkb3c6bm9uZTstLWJhY2tkcm9wLW9wYWNpdHk6MDtsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjphYnNvbHV0ZTstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7b3V0bGluZTpub25lO2NvbG9yOnZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwKTtjb250YWluOnN0cmljdH0ubW9kYWwtd3JhcHBlcixpb24tYmFja2Ryb3B7cG9pbnRlci1ldmVudHM6YXV0b306aG9zdCgub3ZlcmxheS1oaWRkZW4pe2Rpc3BsYXk6bm9uZX0ubW9kYWwtd3JhcHBlciwubW9kYWwtc2hhZG93e2JvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7d2lkdGg6dmFyKC0td2lkdGgpO21pbi13aWR0aDp2YXIoLS1taW4td2lkdGgpO21heC13aWR0aDp2YXIoLS1tYXgtd2lkdGgpO2hlaWdodDp2YXIoLS1oZWlnaHQpO21pbi1oZWlnaHQ6dmFyKC0tbWluLWhlaWdodCk7bWF4LWhlaWdodDp2YXIoLS1tYXgtaGVpZ2h0KTtib3JkZXItd2lkdGg6dmFyKC0tYm9yZGVyLXdpZHRoKTtib3JkZXItc3R5bGU6dmFyKC0tYm9yZGVyLXN0eWxlKTtib3JkZXItY29sb3I6dmFyKC0tYm9yZGVyLWNvbG9yKTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpOy13ZWJraXQtYm94LXNoYWRvdzp2YXIoLS1ib3gtc2hhZG93KTtib3gtc2hhZG93OnZhcigtLWJveC1zaGFkb3cpO292ZXJmbG93OnZhcigtLW92ZXJmbG93KTt6LWluZGV4OjEwfS5tb2RhbC1zaGFkb3d7cG9zaXRpb246YWJzb2x1dGU7YmFja2dyb3VuZDp0cmFuc3BhcmVudH1AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDYwMHB4KXs6aG9zdHstLXdpZHRoOjYwMHB4Oy0taGVpZ2h0OjUwMHB4Oy0taW9uLXNhZmUtYXJlYS10b3A6MHB4Oy0taW9uLXNhZmUtYXJlYS1ib3R0b206MHB4Oy0taW9uLXNhZmUtYXJlYS1yaWdodDowcHg7LS1pb24tc2FmZS1hcmVhLWxlZnQ6MHB4fX1AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDc2OHB4KXs6aG9zdHstLXdpZHRoOjYwMHB4Oy0taGVpZ2h0OjYwMHB4fX0ubW9kYWwtaGFuZGxle2xlZnQ6MHB4O3JpZ2h0OjBweDt0b3A6NXB4O2JvcmRlci1yYWRpdXM6OHB4Oy13ZWJraXQtbWFyZ2luLXN0YXJ0OmF1dG87bWFyZ2luLWlubGluZS1zdGFydDphdXRvOy13ZWJraXQtbWFyZ2luLWVuZDphdXRvO21hcmdpbi1pbmxpbmUtZW5kOmF1dG87cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MzZweDtoZWlnaHQ6NXB4Oy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7Ym9yZGVyOjA7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3Itc3RlcC0zNTAsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXN0ZXAtMzUwLCAjYzBjMGJlKSk7Y3Vyc29yOnBvaW50ZXI7ei1pbmRleDoxMX0ubW9kYWwtaGFuZGxlOjpiZWZvcmV7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjRweDtwYWRkaW5nLWlubGluZS1zdGFydDo0cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDo0cHg7cGFkZGluZy1pbmxpbmUtZW5kOjRweDtwYWRkaW5nLXRvcDo0cHg7cGFkZGluZy1ib3R0b206NHB4O3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjM2cHg7aGVpZ2h0OjVweDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwgLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtjb250ZW50OlxcXCJcXFwifTpob3N0KC5tb2RhbC1zaGVldCl7LS1oZWlnaHQ6Y2FsYygxMDAlIC0gKHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wKSArIDEwcHgpKX06aG9zdCgubW9kYWwtc2hlZXQpIC5tb2RhbC13cmFwcGVyLDpob3N0KC5tb2RhbC1zaGVldCkgLm1vZGFsLXNoYWRvd3twb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MH06aG9zdCgubW9kYWwtc2hlZXQubW9kYWwtbm8tZXhwYW5kLXNjcm9sbCkgaW9uLWZvb3Rlcntwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MDt3aWR0aDp2YXIoLS13aWR0aCl9Omhvc3R7LS1iYWNrZHJvcC1vcGFjaXR5OnZhcigtLWlvbi1iYWNrZHJvcC1vcGFjaXR5LCAwLjQpfTpob3N0KC5tb2RhbC1jYXJkKSw6aG9zdCgubW9kYWwtc2hlZXQpey0tYm9yZGVyLXJhZGl1czoxMHB4fUBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWluLWhlaWdodDogNjAwcHgpezpob3N0ey0tYm9yZGVyLXJhZGl1czoxMHB4fX0ubW9kYWwtd3JhcHBlcnstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCAgMTAwJSwgIDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCAgMTAwJSwgIDApfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KXtAc3VwcG9ydHMgKHdpZHRoOiBtYXgoMHB4LCAxcHgpKXs6aG9zdCgubW9kYWwtY2FyZCl7LS1oZWlnaHQ6Y2FsYygxMDAlIC0gbWF4KDMwcHgsIHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wKSkgLSAxMHB4KX19QHN1cHBvcnRzIG5vdCAod2lkdGg6IG1heCgwcHgsIDFweCkpezpob3N0KC5tb2RhbC1jYXJkKXstLWhlaWdodDpjYWxjKDEwMCUgLSA0MHB4KX19Omhvc3QoLm1vZGFsLWNhcmQpIC5tb2RhbC13cmFwcGVye2JvcmRlci1zdGFydC1zdGFydC1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7Ym9yZGVyLXN0YXJ0LWVuZC1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7Ym9yZGVyLWVuZC1lbmQtcmFkaXVzOjA7Ym9yZGVyLWVuZC1zdGFydC1yYWRpdXM6MH06aG9zdCgubW9kYWwtY2FyZCl7LS1iYWNrZHJvcC1vcGFjaXR5OjA7LS13aWR0aDoxMDAlOy1tcy1mbGV4LWFsaWduOmVuZDthbGlnbi1pdGVtczpmbGV4LWVuZH06aG9zdCgubW9kYWwtY2FyZCkgLm1vZGFsLXNoYWRvd3tkaXNwbGF5Om5vbmV9Omhvc3QoLm1vZGFsLWNhcmQpIGlvbi1iYWNrZHJvcHtwb2ludGVyLWV2ZW50czpub25lfX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCl7Omhvc3QoLm1vZGFsLWNhcmQpey0td2lkdGg6Y2FsYygxMDAlIC0gMTIwcHgpOy0taGVpZ2h0OmNhbGMoMTAwJSAtICgxMjBweCArIHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wKSArIHZhcigtLWlvbi1zYWZlLWFyZWEtYm90dG9tKSkpOy0tbWF4LXdpZHRoOjcyMHB4Oy0tbWF4LWhlaWdodDoxMDAwcHg7LS1iYWNrZHJvcC1vcGFjaXR5OjA7LS1ib3gtc2hhZG93OjBweCAwcHggMzBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTstd2Via2l0LXRyYW5zaXRpb246YWxsIDAuNXMgZWFzZS1pbi1vdXQ7dHJhbnNpdGlvbjphbGwgMC41cyBlYXNlLWluLW91dH06aG9zdCgubW9kYWwtY2FyZCkgLm1vZGFsLXdyYXBwZXJ7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lfTpob3N0KC5tb2RhbC1jYXJkKSAubW9kYWwtc2hhZG93ey13ZWJraXQtYm94LXNoYWRvdzp2YXIoLS1ib3gtc2hhZG93KTtib3gtc2hhZG93OnZhcigtLWJveC1zaGFkb3cpfX06aG9zdCgubW9kYWwtc2hlZXQpIC5tb2RhbC13cmFwcGVye2JvcmRlci1zdGFydC1zdGFydC1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7Ym9yZGVyLXN0YXJ0LWVuZC1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7Ym9yZGVyLWVuZC1lbmQtcmFkaXVzOjA7Ym9yZGVyLWVuZC1zdGFydC1yYWRpdXM6MH1cIjtcbmNvbnN0IG1vZGFsTWRDc3MgPSBcIjpob3N0ey0td2lkdGg6MTAwJTstLW1pbi13aWR0aDphdXRvOy0tbWF4LXdpZHRoOmF1dG87LS1oZWlnaHQ6MTAwJTstLW1pbi1oZWlnaHQ6YXV0bzstLW1heC1oZWlnaHQ6YXV0bzstLW92ZXJmbG93OmhpZGRlbjstLWJvcmRlci1yYWRpdXM6MDstLWJvcmRlci13aWR0aDowOy0tYm9yZGVyLXN0eWxlOm5vbmU7LS1ib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKTstLWJveC1zaGFkb3c6bm9uZTstLWJhY2tkcm9wLW9wYWNpdHk6MDtsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjphYnNvbHV0ZTstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7b3V0bGluZTpub25lO2NvbG9yOnZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwKTtjb250YWluOnN0cmljdH0ubW9kYWwtd3JhcHBlcixpb24tYmFja2Ryb3B7cG9pbnRlci1ldmVudHM6YXV0b306aG9zdCgub3ZlcmxheS1oaWRkZW4pe2Rpc3BsYXk6bm9uZX0ubW9kYWwtd3JhcHBlciwubW9kYWwtc2hhZG93e2JvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7d2lkdGg6dmFyKC0td2lkdGgpO21pbi13aWR0aDp2YXIoLS1taW4td2lkdGgpO21heC13aWR0aDp2YXIoLS1tYXgtd2lkdGgpO2hlaWdodDp2YXIoLS1oZWlnaHQpO21pbi1oZWlnaHQ6dmFyKC0tbWluLWhlaWdodCk7bWF4LWhlaWdodDp2YXIoLS1tYXgtaGVpZ2h0KTtib3JkZXItd2lkdGg6dmFyKC0tYm9yZGVyLXdpZHRoKTtib3JkZXItc3R5bGU6dmFyKC0tYm9yZGVyLXN0eWxlKTtib3JkZXItY29sb3I6dmFyKC0tYm9yZGVyLWNvbG9yKTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpOy13ZWJraXQtYm94LXNoYWRvdzp2YXIoLS1ib3gtc2hhZG93KTtib3gtc2hhZG93OnZhcigtLWJveC1zaGFkb3cpO292ZXJmbG93OnZhcigtLW92ZXJmbG93KTt6LWluZGV4OjEwfS5tb2RhbC1zaGFkb3d7cG9zaXRpb246YWJzb2x1dGU7YmFja2dyb3VuZDp0cmFuc3BhcmVudH1AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDYwMHB4KXs6aG9zdHstLXdpZHRoOjYwMHB4Oy0taGVpZ2h0OjUwMHB4Oy0taW9uLXNhZmUtYXJlYS10b3A6MHB4Oy0taW9uLXNhZmUtYXJlYS1ib3R0b206MHB4Oy0taW9uLXNhZmUtYXJlYS1yaWdodDowcHg7LS1pb24tc2FmZS1hcmVhLWxlZnQ6MHB4fX1AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDc2OHB4KXs6aG9zdHstLXdpZHRoOjYwMHB4Oy0taGVpZ2h0OjYwMHB4fX0ubW9kYWwtaGFuZGxle2xlZnQ6MHB4O3JpZ2h0OjBweDt0b3A6NXB4O2JvcmRlci1yYWRpdXM6OHB4Oy13ZWJraXQtbWFyZ2luLXN0YXJ0OmF1dG87bWFyZ2luLWlubGluZS1zdGFydDphdXRvOy13ZWJraXQtbWFyZ2luLWVuZDphdXRvO21hcmdpbi1pbmxpbmUtZW5kOmF1dG87cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MzZweDtoZWlnaHQ6NXB4Oy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7Ym9yZGVyOjA7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3Itc3RlcC0zNTAsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXN0ZXAtMzUwLCAjYzBjMGJlKSk7Y3Vyc29yOnBvaW50ZXI7ei1pbmRleDoxMX0ubW9kYWwtaGFuZGxlOjpiZWZvcmV7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjRweDtwYWRkaW5nLWlubGluZS1zdGFydDo0cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDo0cHg7cGFkZGluZy1pbmxpbmUtZW5kOjRweDtwYWRkaW5nLXRvcDo0cHg7cGFkZGluZy1ib3R0b206NHB4O3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjM2cHg7aGVpZ2h0OjVweDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwgLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtjb250ZW50OlxcXCJcXFwifTpob3N0KC5tb2RhbC1zaGVldCl7LS1oZWlnaHQ6Y2FsYygxMDAlIC0gKHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wKSArIDEwcHgpKX06aG9zdCgubW9kYWwtc2hlZXQpIC5tb2RhbC13cmFwcGVyLDpob3N0KC5tb2RhbC1zaGVldCkgLm1vZGFsLXNoYWRvd3twb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MH06aG9zdCgubW9kYWwtc2hlZXQubW9kYWwtbm8tZXhwYW5kLXNjcm9sbCkgaW9uLWZvb3Rlcntwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MDt3aWR0aDp2YXIoLS13aWR0aCl9Omhvc3R7LS1iYWNrZHJvcC1vcGFjaXR5OnZhcigtLWlvbi1iYWNrZHJvcC1vcGFjaXR5LCAwLjMyKX1AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDYwMHB4KXs6aG9zdHstLWJvcmRlci1yYWRpdXM6MnB4Oy0tYm94LXNoYWRvdzowIDI4cHggNDhweCByZ2JhKDAsIDAsIDAsIDAuNCl9fS5tb2RhbC13cmFwcGVyey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsICA0MHB4LCAgMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsICA0MHB4LCAgMCk7b3BhY2l0eTowLjAxfVwiO1xuY29uc3QgTW9kYWwgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuZGlkUHJlc2VudCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uTW9kYWxEaWRQcmVzZW50XCIsIDcpO1xuICAgIHRoaXMud2lsbFByZXNlbnQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbk1vZGFsV2lsbFByZXNlbnRcIiwgNyk7XG4gICAgdGhpcy53aWxsRGlzbWlzcyA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uTW9kYWxXaWxsRGlzbWlzc1wiLCA3KTtcbiAgICB0aGlzLmRpZERpc21pc3MgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbk1vZGFsRGlkRGlzbWlzc1wiLCA3KTtcbiAgICB0aGlzLmlvbkJyZWFrcG9pbnREaWRDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkJyZWFrcG9pbnREaWRDaGFuZ2VcIiwgNyk7XG4gICAgdGhpcy5kaWRQcmVzZW50U2hvcnRoYW5kID0gY3JlYXRlRXZlbnQodGhpcywgXCJkaWRQcmVzZW50XCIsIDcpO1xuICAgIHRoaXMud2lsbFByZXNlbnRTaG9ydGhhbmQgPSBjcmVhdGVFdmVudCh0aGlzLCBcIndpbGxQcmVzZW50XCIsIDcpO1xuICAgIHRoaXMud2lsbERpc21pc3NTaG9ydGhhbmQgPSBjcmVhdGVFdmVudCh0aGlzLCBcIndpbGxEaXNtaXNzXCIsIDcpO1xuICAgIHRoaXMuZGlkRGlzbWlzc1Nob3J0aGFuZCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiZGlkRGlzbWlzc1wiLCA3KTtcbiAgICB0aGlzLmlvbk1vdW50ID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Nb3VudFwiLCA3KTtcbiAgICB0aGlzLmxvY2tDb250cm9sbGVyID0gY3JlYXRlTG9ja0NvbnRyb2xsZXIoKTtcbiAgICB0aGlzLnRyaWdnZXJDb250cm9sbGVyID0gY3JlYXRlVHJpZ2dlckNvbnRyb2xsZXIoKTtcbiAgICB0aGlzLmNvcmVEZWxlZ2F0ZSA9IENvcmVEZWxlZ2F0ZSgpO1xuICAgIHRoaXMuaXNTaGVldE1vZGFsID0gZmFsc2U7XG4gICAgdGhpcy5pbmhlcml0ZWRBdHRyaWJ1dGVzID0ge307XG4gICAgdGhpcy5pbmxpbmUgPSBmYWxzZTtcbiAgICAvLyBXaGV0aGVyIG9yIG5vdCBtb2RhbCBpcyBiZWluZyBkaXNtaXNzZWQgdmlhIGdlc3R1cmVcbiAgICB0aGlzLmdlc3R1cmVBbmltYXRpb25EaXNtaXNzaW5nID0gZmFsc2U7XG4gICAgdGhpcy5wcmVzZW50ZWQgPSBmYWxzZTtcbiAgICAvKiogQGludGVybmFsICovXG4gICAgdGhpcy5oYXNDb250cm9sbGVyID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogSWYgYHRydWVgLCB0aGUga2V5Ym9hcmQgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGRpc21pc3NlZCB3aGVuIHRoZSBvdmVybGF5IGlzIHByZXNlbnRlZC5cbiAgICAgKi9cbiAgICB0aGlzLmtleWJvYXJkQ2xvc2UgPSB0cnVlO1xuICAgIC8qKlxuICAgICAqIENvbnRyb2xzIHdoZXRoZXIgc2Nyb2xsaW5nIG9yIGRyYWdnaW5nIHdpdGhpbiB0aGUgc2hlZXQgbW9kYWwgZXhwYW5kc1xuICAgICAqIGl0IHRvIGEgbGFyZ2VyIGJyZWFrcG9pbnQuIFRoaXMgb25seSB0YWtlcyBlZmZlY3Qgd2hlbiBgYnJlYWtwb2ludHNgXG4gICAgICogYW5kIGBpbml0aWFsQnJlYWtwb2ludGAgYXJlIHNldC5cbiAgICAgKlxuICAgICAqIElmIGB0cnVlYCwgc2Nyb2xsaW5nIG9yIGRyYWdnaW5nIGFueXdoZXJlIGluIHRoZSBtb2RhbCB3aWxsIGZpcnN0IGV4cGFuZFxuICAgICAqIGl0IHRvIHRoZSBuZXh0IGJyZWFrcG9pbnQuIE9uY2UgZnVsbHkgZXhwYW5kZWQsIHNjcm9sbGluZyB3aWxsIGFmZmVjdCB0aGVcbiAgICAgKiBjb250ZW50LlxuICAgICAqIElmIGBmYWxzZWAsIHNjcm9sbGluZyB3aWxsIGFsd2F5cyBhZmZlY3QgdGhlIGNvbnRlbnQuIFRoZSBtb2RhbCB3aWxsXG4gICAgICogb25seSBleHBhbmQgd2hlbiBkcmFnZ2luZyB0aGUgaGVhZGVyIG9yIGhhbmRsZS4gVGhlIG1vZGFsIHdpbGwgY2xvc2Ugd2hlblxuICAgICAqIGRyYWdnaW5nIHRoZSBoZWFkZXIgb3IgaGFuZGxlLiBJdCBjYW4gYWxzbyBiZSBjbG9zZWQgd2hlbiBkcmFnZ2luZyB0aGVcbiAgICAgKiBjb250ZW50LCBidXQgb25seSBpZiB0aGUgY29udGVudCBpcyBzY3JvbGxlZCB0byB0aGUgdG9wLlxuICAgICAqL1xuICAgIHRoaXMuZXhwYW5kVG9TY3JvbGwgPSB0cnVlO1xuICAgIC8qKlxuICAgICAqIEEgZGVjaW1hbCB2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEgdGhhdCBpbmRpY2F0ZXMgdGhlXG4gICAgICogcG9pbnQgYWZ0ZXIgd2hpY2ggdGhlIGJhY2tkcm9wIHdpbGwgYmVnaW4gdG8gZmFkZSBpblxuICAgICAqIHdoZW4gdXNpbmcgYSBzaGVldCBtb2RhbC4gUHJpb3IgdG8gdGhpcyBwb2ludCwgdGhlXG4gICAgICogYmFja2Ryb3Agd2lsbCBiZSBoaWRkZW4gYW5kIHRoZSBjb250ZW50IHVuZGVybmVhdGhcbiAgICAgKiB0aGUgc2hlZXQgY2FuIGJlIGludGVyYWN0ZWQgd2l0aC4gVGhpcyB2YWx1ZSBpcyBleGNsdXNpdmVcbiAgICAgKiBtZWFuaW5nIHRoZSBiYWNrZHJvcCB3aWxsIGJlY29tZSBhY3RpdmUgYWZ0ZXIgdGhlIHZhbHVlXG4gICAgICogc3BlY2lmaWVkLlxuICAgICAqL1xuICAgIHRoaXMuYmFja2Ryb3BCcmVha3BvaW50ID0gMDtcbiAgICAvKipcbiAgICAgKiBUaGUgaW50ZXJhY3Rpb24gYmVoYXZpb3IgZm9yIHRoZSBzaGVldCBtb2RhbCB3aGVuIHRoZSBoYW5kbGUgaXMgcHJlc3NlZC5cbiAgICAgKlxuICAgICAqIERlZmF1bHRzIHRvIGBcIm5vbmVcImAsIHdoaWNoICBtZWFucyB0aGUgbW9kYWwgd2lsbCBub3QgY2hhbmdlIHNpemUgb3IgcG9zaXRpb24gd2hlbiB0aGUgaGFuZGxlIGlzIHByZXNzZWQuXG4gICAgICogU2V0IHRvIGBcImN5Y2xlXCJgIHRvIGxldCB0aGUgbW9kYWwgY3ljbGUgYmV0d2VlbiBhdmFpbGFibGUgYnJlYWtwb2ludHMgd2hlbiBwcmVzc2VkLlxuICAgICAqXG4gICAgICogSGFuZGxlIGJlaGF2aW9yIGlzIHVuYXZhaWxhYmxlIHdoZW4gdGhlIGBoYW5kbGVgIHByb3BlcnR5IGlzIHNldCB0byBgZmFsc2VgIG9yXG4gICAgICogd2hlbiB0aGUgYGJyZWFrcG9pbnRzYCBwcm9wZXJ0eSBpcyBub3Qgc2V0ICh1c2luZyBhIGZ1bGxzY3JlZW4gb3IgY2FyZCBtb2RhbCkuXG4gICAgICovXG4gICAgdGhpcy5oYW5kbGVCZWhhdmlvciA9ICdub25lJztcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBtb2RhbCB3aWxsIGJlIGRpc21pc3NlZCB3aGVuIHRoZSBiYWNrZHJvcCBpcyBjbGlja2VkLlxuICAgICAqL1xuICAgIHRoaXMuYmFja2Ryb3BEaXNtaXNzID0gdHJ1ZTtcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIGEgYmFja2Ryb3Agd2lsbCBiZSBkaXNwbGF5ZWQgYmVoaW5kIHRoZSBtb2RhbC5cbiAgICAgKiBUaGlzIHByb3BlcnR5IGNvbnRyb2xzIHdoZXRoZXIgb3Igbm90IHRoZSBiYWNrZHJvcFxuICAgICAqIGRhcmtlbnMgdGhlIHNjcmVlbiB3aGVuIHRoZSBtb2RhbCBpcyBwcmVzZW50ZWQuXG4gICAgICogSXQgZG9lcyBub3QgY29udHJvbCB3aGV0aGVyIG9yIG5vdCB0aGUgYmFja2Ryb3BcbiAgICAgKiBpcyBhY3RpdmUgb3IgcHJlc2VudCBpbiB0aGUgRE9NLlxuICAgICAqL1xuICAgIHRoaXMuc2hvd0JhY2tkcm9wID0gdHJ1ZTtcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBtb2RhbCB3aWxsIGFuaW1hdGUuXG4gICAgICovXG4gICAgdGhpcy5hbmltYXRlZCA9IHRydWU7XG4gICAgLyoqXG4gICAgICogSWYgYHRydWVgLCB0aGUgbW9kYWwgd2lsbCBvcGVuLiBJZiBgZmFsc2VgLCB0aGUgbW9kYWwgd2lsbCBjbG9zZS5cbiAgICAgKiBVc2UgdGhpcyBpZiB5b3UgbmVlZCBmaW5lciBncmFpbmVkIGNvbnRyb2wgb3ZlciBwcmVzZW50YXRpb24sIG90aGVyd2lzZVxuICAgICAqIGp1c3QgdXNlIHRoZSBtb2RhbENvbnRyb2xsZXIgb3IgdGhlIGB0cmlnZ2VyYCBwcm9wZXJ0eS5cbiAgICAgKiBOb3RlOiBgaXNPcGVuYCB3aWxsIG5vdCBhdXRvbWF0aWNhbGx5IGJlIHNldCBiYWNrIHRvIGBmYWxzZWAgd2hlblxuICAgICAqIHRoZSBtb2RhbCBkaXNtaXNzZXMuIFlvdSB3aWxsIG5lZWQgdG8gZG8gdGhhdCBpbiB5b3VyIGNvZGUuXG4gICAgICovXG4gICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBjb21wb25lbnQgcGFzc2VkIGludG8gYGlvbi1tb2RhbGAgd2lsbFxuICAgICAqIGF1dG9tYXRpY2FsbHkgYmUgbW91bnRlZCB3aGVuIHRoZSBtb2RhbCBpcyBjcmVhdGVkLiBUaGVcbiAgICAgKiBjb21wb25lbnQgd2lsbCByZW1haW4gbW91bnRlZCBldmVuIHdoZW4gdGhlIG1vZGFsIGlzIGRpc21pc3NlZC5cbiAgICAgKiBIb3dldmVyLCB0aGUgY29tcG9uZW50IHdpbGwgYmUgZGVzdHJveWVkIHdoZW4gdGhlIG1vZGFsIGlzXG4gICAgICogZGVzdHJveWVkLiBUaGlzIHByb3BlcnR5IGlzIG5vdCByZWFjdGl2ZSBhbmQgc2hvdWxkIG9ubHkgYmVcbiAgICAgKiB1c2VkIHdoZW4gaW5pdGlhbGx5IGNyZWF0aW5nIGEgbW9kYWwuXG4gICAgICpcbiAgICAgKiBOb3RlOiBUaGlzIGZlYXR1cmUgb25seSBhcHBsaWVzIHRvIGlubGluZSBtb2RhbHMgaW4gSmF2YVNjcmlwdFxuICAgICAqIGZyYW1ld29ya3Mgc3VjaCBhcyBBbmd1bGFyLCBSZWFjdCwgYW5kIFZ1ZS5cbiAgICAgKi9cbiAgICB0aGlzLmtlZXBDb250ZW50c01vdW50ZWQgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIGZvY3VzIHdpbGwgbm90IGJlIGFsbG93ZWQgdG8gbW92ZSBvdXRzaWRlIG9mIHRoaXMgb3ZlcmxheS5cbiAgICAgKiBJZiBgZmFsc2VgLCBmb2N1cyB3aWxsIGJlIGFsbG93ZWQgdG8gbW92ZSBvdXRzaWRlIG9mIHRoZSBvdmVybGF5LlxuICAgICAqXG4gICAgICogSW4gbW9zdCBzY2VuYXJpb3MgdGhpcyBwcm9wZXJ0eSBzaG91bGQgcmVtYWluIHNldCB0byBgdHJ1ZWAuIFNldHRpbmdcbiAgICAgKiB0aGlzIHByb3BlcnR5IHRvIGBmYWxzZWAgY2FuIGNhdXNlIHNldmVyZSBhY2Nlc3NpYmlsaXR5IGlzc3VlcyBhcyB1c2Vyc1xuICAgICAqIHJlbHlpbmcgb24gYXNzaXN0aXZlIHRlY2hub2xvZ2llcyBtYXkgYmUgYWJsZSB0byBtb3ZlIGZvY3VzIGludG9cbiAgICAgKiBhIGNvbmZ1c2luZyBzdGF0ZS4gV2UgcmVjb21tZW5kIG9ubHkgc2V0dGluZyB0aGlzIHRvIGBmYWxzZWAgd2hlblxuICAgICAqIGFic29sdXRlbHkgbmVjZXNzYXJ5LlxuICAgICAqXG4gICAgICogRGV2ZWxvcGVycyBtYXkgd2FudCB0byBjb25zaWRlciBkaXNhYmxpbmcgZm9jdXMgdHJhcHBpbmcgaWYgdGhpc1xuICAgICAqIG92ZXJsYXkgcHJlc2VudHMgYSBub24tSW9uaWMgb3ZlcmxheSBmcm9tIGEgM3JkIHBhcnR5IGxpYnJhcnkuXG4gICAgICogRGV2ZWxvcGVycyB3b3VsZCBkaXNhYmxlIGZvY3VzIHRyYXBwaW5nIG9uIHRoZSBJb25pYyBvdmVybGF5XG4gICAgICogd2hlbiBwcmVzZW50aW5nIHRoZSAzcmQgcGFydHkgb3ZlcmxheSBhbmQgdGhlbiByZS1lbmFibGVcbiAgICAgKiBmb2N1cyB0cmFwcGluZyB3aGVuIGRpc21pc3NpbmcgdGhlIDNyZCBwYXJ0eSBvdmVybGF5IGFuZCBtb3ZpbmdcbiAgICAgKiBmb2N1cyBiYWNrIHRvIHRoZSBJb25pYyBvdmVybGF5LlxuICAgICAqL1xuICAgIHRoaXMuZm9jdXNUcmFwID0gdHJ1ZTtcbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IGEgbW9kYWwgY2FuIGRpc21pc3NcbiAgICAgKiB3aGVuIGNhbGxpbmcgdGhlIGBkaXNtaXNzYCBtZXRob2QuXG4gICAgICpcbiAgICAgKiBJZiB0aGUgdmFsdWUgaXMgYHRydWVgIG9yIHRoZSB2YWx1ZSdzIGZ1bmN0aW9uIHJldHVybnMgYHRydWVgLCB0aGUgbW9kYWwgd2lsbCBjbG9zZSB3aGVuIHRyeWluZyB0byBkaXNtaXNzLlxuICAgICAqIElmIHRoZSB2YWx1ZSBpcyBgZmFsc2VgIG9yIHRoZSB2YWx1ZSdzIGZ1bmN0aW9uIHJldHVybnMgYGZhbHNlYCwgdGhlIG1vZGFsIHdpbGwgbm90IGNsb3NlIHdoZW4gdHJ5aW5nIHRvIGRpc21pc3MuXG4gICAgICpcbiAgICAgKiBTZWUgaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy90cm91Ymxlc2hvb3RpbmcvcnVudGltZSNhY2Nlc3NpbmctdGhpc1xuICAgICAqIGlmIHlvdSBuZWVkIHRvIGFjY2VzcyBgdGhpc2AgZnJvbSB3aXRoaW4gdGhlIGNhbGxiYWNrLlxuICAgICAqL1xuICAgIHRoaXMuY2FuRGlzbWlzcyA9IHRydWU7XG4gICAgdGhpcy5vbkhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBzaGVldFRyYW5zaXRpb24sXG4gICAgICAgIGhhbmRsZUJlaGF2aW9yXG4gICAgICB9ID0gdGhpcztcbiAgICAgIGlmIChoYW5kbGVCZWhhdmlvciAhPT0gJ2N5Y2xlJyB8fCBzaGVldFRyYW5zaXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHNoZWV0IG1vZGFsIHNob3VsZCBub3QgYWR2YW5jZSB0byB0aGUgbmV4dCBicmVha3BvaW50XG4gICAgICAgICAqIGlmIHRoZSBoYW5kbGUgYmVoYXZpb3IgaXMgbm90IGBjeWNsZWAgb3IgaWYgdGhlIGhhbmRsZVxuICAgICAgICAgKiBpcyBjbGlja2VkIHdoaWxlIHRoZSBzaGVldCBpcyBtb3ZpbmcgdG8gYSBicmVha3BvaW50LlxuICAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5tb3ZlVG9OZXh0QnJlYWtwb2ludCgpO1xuICAgIH07XG4gICAgdGhpcy5vbkJhY2tkcm9wVGFwID0gKCkgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBzaGVldFRyYW5zaXRpb25cbiAgICAgIH0gPSB0aGlzO1xuICAgICAgaWYgKHNoZWV0VHJhbnNpdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaGVuIHRoZSBoYW5kbGUgaXMgZG91YmxlIGNsaWNrZWQgYXQgdGhlIGxhcmdlc3QgYnJlYWtwb2ludCxcbiAgICAgICAgICogaXQgd2lsbCBzdGFydCB0byBtb3ZlIHRvIHRoZSBmaXJzdCBicmVha3BvaW50LiBXaGlsZSB0cmFuc2l0aW9uaW5nLFxuICAgICAgICAgKiB0aGUgYmFja2Ryb3Agd2lsbCBvZnRlbiByZWNlaXZlIHRoZSBzZWNvbmQgY2xpY2suIFdlIHByZXZlbnQgdGhlXG4gICAgICAgICAqIGJhY2tkcm9wIGZyb20gZGlzbWlzc2luZyB0aGUgbW9kYWwgd2hpbGUgbW92aW5nIGJldHdlZW4gYnJlYWtwb2ludHMuXG4gICAgICAgICAqL1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmRpc21pc3ModW5kZWZpbmVkLCBCQUNLRFJPUCk7XG4gICAgfTtcbiAgICB0aGlzLm9uTGlmZWN5Y2xlID0gbW9kYWxFdmVudCA9PiB7XG4gICAgICBjb25zdCBlbCA9IHRoaXMudXNlcnNFbGVtZW50O1xuICAgICAgY29uc3QgbmFtZSA9IExJRkVDWUNMRV9NQVBbbW9kYWxFdmVudC50eXBlXTtcbiAgICAgIGlmIChlbCAmJiBuYW1lKSB7XG4gICAgICAgIGNvbnN0IGV2ID0gbmV3IEN1c3RvbUV2ZW50KG5hbWUsIHtcbiAgICAgICAgICBidWJibGVzOiBmYWxzZSxcbiAgICAgICAgICBjYW5jZWxhYmxlOiBmYWxzZSxcbiAgICAgICAgICBkZXRhaWw6IG1vZGFsRXZlbnQuZGV0YWlsXG4gICAgICAgIH0pO1xuICAgICAgICBlbC5kaXNwYXRjaEV2ZW50KGV2KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFdoZW4gdGhlIG1vZGFsIHJlY2VpdmVzIGZvY3VzIGRpcmVjdGx5LCBwYXNzIGZvY3VzIHRvIHRoZSBoYW5kbGVcbiAgICAgKiBpZiBpdCBleGlzdHMgYW5kIGlzIGZvY3VzYWJsZSwgb3RoZXJ3aXNlIGxldCB0aGUgZm9jdXMgdHJhcCBoYW5kbGUgaXQuXG4gICAgICovXG4gICAgdGhpcy5vbk1vZGFsRm9jdXMgPSBldiA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGRyYWdIYW5kbGVFbCxcbiAgICAgICAgZWxcbiAgICAgIH0gPSB0aGlzO1xuICAgICAgLy8gT25seSBoYW5kbGUgZm9jdXMgaWYgdGhlIG1vZGFsIGl0c2VsZiB3YXMgZm9jdXNlZCAobm90IGEgY2hpbGQgZWxlbWVudClcbiAgICAgIGlmIChldi50YXJnZXQgPT09IGVsICYmIGRyYWdIYW5kbGVFbCAmJiBkcmFnSGFuZGxlRWwudGFiSW5kZXggIT09IC0xKSB7XG4gICAgICAgIGRyYWdIYW5kbGVFbC5mb2N1cygpO1xuICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogV2hlbiB0aGUgc2xvdCBjaGFuZ2VzLCB3ZSBuZWVkIHRvIGZpbmQgYWxsIHRoZSBtb2RhbHMgaW4gdGhlIHNsb3RcbiAgICAgKiBhbmQgc2V0IHRoZSBkYXRhLXBhcmVudC1pb24tbW9kYWwgYXR0cmlidXRlIG9uIHRoZW0gc28gd2UgY2FuIGZpbmQgdGhlbVxuICAgICAqIGFuZCBkaXNtaXNzIHRoZW0gd2hlbiB3ZSBnZXQgZGlzbWlzc2VkLlxuICAgICAqIFdlIG5lZWQgdG8gZG8gaXQgdGhpcyB3YXkgYmVjYXVzZSB3aGVuIGEgbW9kYWwgaXMgb3BlbmVkLCBpdCdzIG1vdmVkIHRvXG4gICAgICogdGhlIGVuZCBvZiB0aGUgYm9keSBhbmQgaXMgbm8gbG9uZ2VyIGFuIGFjdHVhbCBjaGlsZCBvZiB0aGUgbW9kYWwuXG4gICAgICovXG4gICAgdGhpcy5vblNsb3RDaGFuZ2UgPSAoe1xuICAgICAgdGFyZ2V0XG4gICAgfSkgPT4ge1xuICAgICAgY29uc3Qgc2xvdCA9IHRhcmdldDtcbiAgICAgIHNsb3QuYXNzaWduZWRFbGVtZW50cygpLmZvckVhY2goZWwgPT4ge1xuICAgICAgICBlbC5xdWVyeVNlbGVjdG9yQWxsKCdpb24tbW9kYWwnKS5mb3JFYWNoKGNoaWxkTW9kYWwgPT4ge1xuICAgICAgICAgIC8vIFdlIGRvbid0IG5lZWQgdG8gd3JpdGUgdG8gdGhlIERPTSBpZiB0aGUgbW9kYWwgaXMgYWxyZWFkeSB0YWdnZWRcbiAgICAgICAgICAvLyBJZiB0aGlzIGlzIGEgZGVlcGx5IG5lc3RlZCBtb2RhbCwgdGhpcyBlZmZlY3Qgc2hvdWxkIGNhc2NhZGUgc28gd2UgZG9uJ3RcbiAgICAgICAgICAvLyBuZWVkIHRvIHdvcnJ5IGFib3V0IGFub3RoZXIgbW9kYWwgY2xhaW1pbmcgdGhlIHNhbWUgY2hpbGQuXG4gICAgICAgICAgaWYgKGNoaWxkTW9kYWwuZ2V0QXR0cmlidXRlKCdkYXRhLXBhcmVudC1pb24tbW9kYWwnKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY2hpbGRNb2RhbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGFyZW50LWlvbi1tb2RhbCcsIHRoaXMuZWwuaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG4gIG9uSXNPcGVuQ2hhbmdlKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgIGlmIChuZXdWYWx1ZSA9PT0gdHJ1ZSAmJiBvbGRWYWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMucHJlc2VudCgpO1xuICAgIH0gZWxzZSBpZiAobmV3VmFsdWUgPT09IGZhbHNlICYmIG9sZFZhbHVlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmRpc21pc3MoKTtcbiAgICB9XG4gIH1cbiAgdHJpZ2dlckNoYW5nZWQoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdHJpZ2dlcixcbiAgICAgIGVsLFxuICAgICAgdHJpZ2dlckNvbnRyb2xsZXJcbiAgICB9ID0gdGhpcztcbiAgICBpZiAodHJpZ2dlcikge1xuICAgICAgdHJpZ2dlckNvbnRyb2xsZXIuYWRkQ2xpY2tMaXN0ZW5lcihlbCwgdHJpZ2dlcik7XG4gICAgfVxuICB9XG4gIG9uV2luZG93UmVzaXplKCkge1xuICAgIC8vIE9ubHkgaGFuZGxlIHJlc2l6ZSBmb3IgaU9TIGNhcmQgbW9kYWxzIHdoZW4gbm8gY3VzdG9tIGFuaW1hdGlvbnMgYXJlIHByb3ZpZGVkXG4gICAgaWYgKGdldElvbk1vZGUodGhpcykgIT09ICdpb3MnIHx8ICF0aGlzLnByZXNlbnRpbmdFbGVtZW50IHx8IHRoaXMuZW50ZXJBbmltYXRpb24gfHwgdGhpcy5sZWF2ZUFuaW1hdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjbGVhclRpbWVvdXQodGhpcy5yZXNpemVUaW1lb3V0KTtcbiAgICB0aGlzLnJlc2l6ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlVmlld1RyYW5zaXRpb24oKTtcbiAgICB9LCA1MCk7IC8vIERlYm91bmNlIHRvIGF2b2lkIGV4Y2Vzc2l2ZSBjYWxscyBkdXJpbmcgYWN0aXZlIHJlc2l6aW5nXG4gIH1cbiAgYnJlYWtwb2ludHNDaGFuZ2VkKGJyZWFrcG9pbnRzKSB7XG4gICAgaWYgKGJyZWFrcG9pbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuc29ydGVkQnJlYWtwb2ludHMgPSBicmVha3BvaW50cy5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG4gICAgfVxuICB9XG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGVsXG4gICAgfSA9IHRoaXM7XG4gICAgcHJlcGFyZU92ZXJsYXkoZWwpO1xuICAgIHRoaXMudHJpZ2dlckNoYW5nZWQoKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLnRyaWdnZXJDb250cm9sbGVyLnJlbW92ZUNsaWNrTGlzdGVuZXIoKTtcbiAgICB0aGlzLmNsZWFudXBWaWV3VHJhbnNpdGlvbkxpc3RlbmVyKCk7XG4gICAgdGhpcy5jbGVhbnVwUGFyZW50UmVtb3ZhbE9ic2VydmVyKCk7XG4gIH1cbiAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IHtcbiAgICAgIGJyZWFrcG9pbnRzLFxuICAgICAgaW5pdGlhbEJyZWFrcG9pbnQsXG4gICAgICBlbCxcbiAgICAgIGh0bWxBdHRyaWJ1dGVzXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgaXNTaGVldE1vZGFsID0gdGhpcy5pc1NoZWV0TW9kYWwgPSBicmVha3BvaW50cyAhPT0gdW5kZWZpbmVkICYmIGluaXRpYWxCcmVha3BvaW50ICE9PSB1bmRlZmluZWQ7XG4gICAgY29uc3QgYXR0cmlidXRlc1RvSW5oZXJpdCA9IFsnYXJpYS1sYWJlbCcsICdyb2xlJ107XG4gICAgdGhpcy5pbmhlcml0ZWRBdHRyaWJ1dGVzID0gaW5oZXJpdEF0dHJpYnV0ZXMoZWwsIGF0dHJpYnV0ZXNUb0luaGVyaXQpO1xuICAgIC8vIENhY2hlIG9yaWdpbmFsIHBhcmVudCBiZWZvcmUgbW9kYWwgZ2V0cyBtb3ZlZCB0byBib2R5IGR1cmluZyBwcmVzZW50YXRpb25cbiAgICBpZiAoZWwucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5jYWNoZWRPcmlnaW5hbFBhcmVudCA9IGVsLnBhcmVudE5vZGU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFdoZW4gdXNpbmcgYSBjb250cm9sbGVyIG1vZGFsIHlvdSBjYW4gc2V0IGF0dHJpYnV0ZXNcbiAgICAgKiB1c2luZyB0aGUgaHRtbEF0dHJpYnV0ZXMgcHJvcGVydHkuIFNpbmNlIHRoZSBhYm92ZSBhdHRyaWJ1dGVzXG4gICAgICogbmVlZCB0byBiZSBpbmhlcml0ZWQgaW5zaWRlIG9mIHRoZSBtb2RhbCwgd2UgbmVlZCB0byBsb29rXG4gICAgICogYW5kIHNlZSBpZiB0aGVzZSBhdHRyaWJ1dGVzIGFyZSBiZWluZyBzZXQgdmlhIGh0bWxBdHRyaWJ1dGVzLlxuICAgICAqXG4gICAgICogV2UgY291bGQgYWx0ZXJuYXRpdmVseSBtb3ZlIHRoaXMgdG8gY29tcG9uZW50RGlkTG9hZCB0byBzaW1wbGlmeSB0aGUgd29ya1xuICAgICAqIGhlcmUsIGJ1dCB3ZSdkIHRoZW4gbmVlZCB0byBtYWtlIGluaGVyaXRlZEF0dHJpYnV0ZXMgYSBTdGF0ZSB2YXJpYWJsZSxcbiAgICAgKiB0aHVzIGNhdXNpbmcgYW5vdGhlciByZW5kZXIgdG8gYWx3YXlzIGhhcHBlbiBhZnRlciB0aGUgZmlyc3QgcmVuZGVyLlxuICAgICAqL1xuICAgIGlmIChodG1sQXR0cmlidXRlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBhdHRyaWJ1dGVzVG9Jbmhlcml0LmZvckVhY2goYXR0cmlidXRlID0+IHtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPSBodG1sQXR0cmlidXRlc1thdHRyaWJ1dGVdO1xuICAgICAgICBpZiAoYXR0cmlidXRlVmFsdWUpIHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBJZiBhbiBhdHRyaWJ1dGUgd2UgbmVlZCB0byBpbmhlcml0IHdhc1xuICAgICAgICAgICAqIHNldCB1c2luZyBodG1sQXR0cmlidXRlcyB0aGVuIGFkZCBpdCB0b1xuICAgICAgICAgICAqIGluaGVyaXRlZEF0dHJpYnV0ZXMgYW5kIHJlbW92ZSBpdCBmcm9tIGh0bWxBdHRyaWJ1dGVzLlxuICAgICAgICAgICAqIFRoaXMgZW5zdXJlcyB0aGUgYXR0cmlidXRlIGlzIGluaGVyaXRlZCBhbmQgbm90XG4gICAgICAgICAgICogc2V0IG9uIHRoZSBob3N0LlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogSW4gdGhpcyBjYXNlLCBpZiBhbiBpbmhlcml0ZWQgYXR0cmlidXRlIGlzIHNldFxuICAgICAgICAgICAqIG9uIHRoZSBob3N0IGVsZW1lbnQgYW5kIHVzaW5nIGh0bWxBdHRyaWJ1dGVzIHRoZW5cbiAgICAgICAgICAgKiBodG1sQXR0cmlidXRlcyB3aW5zLCBidXQgdGhhdCdzIG5vdCBhIHBhdHRlcm4gdGhhdCB3ZSByZWNvbW1lbmQuXG4gICAgICAgICAgICogVGhlIG9ubHkgdGltZSB5b3UnZCBuZWVkIGh0bWxBdHRyaWJ1dGVzIGlzIHdoZW4gdXNpbmcgbW9kYWxDb250cm9sbGVyLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIHRoaXMuaW5oZXJpdGVkQXR0cmlidXRlcyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5pbmhlcml0ZWRBdHRyaWJ1dGVzKSwge1xuICAgICAgICAgICAgW2F0dHJpYnV0ZV06IGh0bWxBdHRyaWJ1dGVzW2F0dHJpYnV0ZV1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBkZWxldGUgaHRtbEF0dHJpYnV0ZXNbYXR0cmlidXRlXTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChpc1NoZWV0TW9kYWwpIHtcbiAgICAgIHRoaXMuY3VycmVudEJyZWFrcG9pbnQgPSB0aGlzLmluaXRpYWxCcmVha3BvaW50O1xuICAgIH1cbiAgICBpZiAoYnJlYWtwb2ludHMgIT09IHVuZGVmaW5lZCAmJiBpbml0aWFsQnJlYWtwb2ludCAhPT0gdW5kZWZpbmVkICYmICFicmVha3BvaW50cy5pbmNsdWRlcyhpbml0aWFsQnJlYWtwb2ludCkpIHtcbiAgICAgIHByaW50SW9uV2FybmluZygnW2lvbi1tb2RhbF0gLSBZb3VyIGJyZWFrcG9pbnRzIGFycmF5IG11c3QgaW5jbHVkZSB0aGUgaW5pdGlhbEJyZWFrcG9pbnQgdmFsdWUuJyk7XG4gICAgfVxuICAgIGlmICghKChfYSA9IHRoaXMuaHRtbEF0dHJpYnV0ZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pZCkpIHtcbiAgICAgIHNldE92ZXJsYXlJZCh0aGlzLmVsKTtcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICAvKipcbiAgICAgKiBJZiBtb2RhbCB3YXMgcmVuZGVyZWQgd2l0aCBpc09wZW49XCJ0cnVlXCJcbiAgICAgKiB0aGVuIHdlIHNob3VsZCBvcGVuIG1vZGFsIGltbWVkaWF0ZWx5LlxuICAgICAqL1xuICAgIGlmICh0aGlzLmlzT3BlbiA9PT0gdHJ1ZSkge1xuICAgICAgcmFmKCgpID0+IHRoaXMucHJlc2VudCgpKTtcbiAgICB9XG4gICAgdGhpcy5icmVha3BvaW50c0NoYW5nZWQodGhpcy5icmVha3BvaW50cyk7XG4gICAgLyoqXG4gICAgICogV2hlbiBiaW5kaW5nIHZhbHVlcyBpbiBmcmFtZXdvcmtzIHN1Y2ggYXMgQW5ndWxhclxuICAgICAqIGl0IGlzIHBvc3NpYmxlIGZvciB0aGUgdmFsdWUgdG8gYmUgc2V0IGFmdGVyIHRoZSBXZWIgQ29tcG9uZW50XG4gICAgICogaW5pdGlhbGl6ZXMgYnV0IGJlZm9yZSB0aGUgdmFsdWUgd2F0Y2hlciBpcyBzZXQgdXAgaW4gU3RlbmNpbC5cbiAgICAgKiBBcyBhIHJlc3VsdCwgdGhlIHdhdGNoZXIgY2FsbGJhY2sgbWF5IG5vdCBiZSBmaXJlZC5cbiAgICAgKiBXZSB3b3JrIGFyb3VuZCB0aGlzIGJ5IG1hbnVhbGx5IGNhbGxpbmcgdGhlIHdhdGNoZXJcbiAgICAgKiBjYWxsYmFjayB3aGVuIHRoZSBjb21wb25lbnQgaGFzIGxvYWRlZCBhbmQgdGhlIHdhdGNoZXJcbiAgICAgKiBpcyBjb25maWd1cmVkLlxuICAgICAqL1xuICAgIHRoaXMudHJpZ2dlckNoYW5nZWQoKTtcbiAgfVxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCBhbiBvdmVybGF5XG4gICAqIGlzIGJlaW5nIHVzZWQgaW5saW5lIG9yIHZpYSBhIGNvbnRyb2xsZXIvSlNcbiAgICogYW5kIHJldHVybnMgdGhlIGNvcnJlY3QgZGVsZWdhdGUuXG4gICAqIEJ5IGRlZmF1bHQsIHN1YnNlcXVlbnQgY2FsbHMgdG8gZ2V0RGVsZWdhdGVcbiAgICogd2lsbCB1c2UgYSBjYWNoZWQgdmVyc2lvbiBvZiB0aGUgZGVsZWdhdGUuXG4gICAqIFRoaXMgaXMgdXNlZnVsIGZvciBjYWxsaW5nIGRpc21pc3MgYWZ0ZXJcbiAgICogcHJlc2VudCBzbyB0aGF0IHRoZSBjb3JyZWN0IGRlbGVnYXRlIGlzIGdpdmVuLlxuICAgKi9cbiAgZ2V0RGVsZWdhdGUoZm9yY2UgPSBmYWxzZSkge1xuICAgIGlmICh0aGlzLndvcmtpbmdEZWxlZ2F0ZSAmJiAhZm9yY2UpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRlbGVnYXRlOiB0aGlzLndvcmtpbmdEZWxlZ2F0ZSxcbiAgICAgICAgaW5saW5lOiB0aGlzLmlubGluZVxuICAgICAgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSWYgdXNpbmcgb3ZlcmxheSBpbmxpbmVcbiAgICAgKiB3ZSBwb3RlbnRpYWxseSBuZWVkIHRvIHVzZSB0aGUgY29yZURlbGVnYXRlXG4gICAgICogc28gdGhhdCB0aGlzIHdvcmtzIGluIHZhbmlsbGEgSlMgYXBwcy5cbiAgICAgKiBJZiBhIGRldmVsb3BlciBoYXMgcHJlc2VudGVkIHRoaXMgY29tcG9uZW50XG4gICAgICogdmlhIGEgY29udHJvbGxlciwgdGhlbiB3ZSBjYW4gYXNzdW1lXG4gICAgICogdGhlIGNvbXBvbmVudCBpcyBhbHJlYWR5IGluIHRoZVxuICAgICAqIGNvcnJlY3QgcGxhY2UuXG4gICAgICovXG4gICAgY29uc3QgcGFyZW50RWwgPSB0aGlzLmVsLnBhcmVudE5vZGU7XG4gICAgY29uc3QgaW5saW5lID0gdGhpcy5pbmxpbmUgPSBwYXJlbnRFbCAhPT0gbnVsbCAmJiAhdGhpcy5oYXNDb250cm9sbGVyO1xuICAgIGNvbnN0IGRlbGVnYXRlID0gdGhpcy53b3JraW5nRGVsZWdhdGUgPSBpbmxpbmUgPyB0aGlzLmRlbGVnYXRlIHx8IHRoaXMuY29yZURlbGVnYXRlIDogdGhpcy5kZWxlZ2F0ZTtcbiAgICByZXR1cm4ge1xuICAgICAgaW5saW5lLFxuICAgICAgZGVsZWdhdGVcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRoZVxuICAgKiBtb2RhbCBpcyBhbGxvd2VkIHRvIGRpc21pc3MgYmFzZWRcbiAgICogb24gdGhlIHN0YXRlIG9mIHRoZSBjYW5EaXNtaXNzIHByb3AuXG4gICAqL1xuICBhc3luYyBjaGVja0NhbkRpc21pc3MoZGF0YSwgcm9sZSkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNhbkRpc21pc3NcbiAgICB9ID0gdGhpcztcbiAgICBpZiAodHlwZW9mIGNhbkRpc21pc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBjYW5EaXNtaXNzKGRhdGEsIHJvbGUpO1xuICAgIH1cbiAgICByZXR1cm4gY2FuRGlzbWlzcztcbiAgfVxuICAvKipcbiAgICogUHJlc2VudCB0aGUgbW9kYWwgb3ZlcmxheSBhZnRlciBpdCBoYXMgYmVlbiBjcmVhdGVkLlxuICAgKi9cbiAgYXN5bmMgcHJlc2VudCgpIHtcbiAgICBjb25zdCB1bmxvY2sgPSBhd2FpdCB0aGlzLmxvY2tDb250cm9sbGVyLmxvY2soKTtcbiAgICBpZiAodGhpcy5wcmVzZW50ZWQpIHtcbiAgICAgIHVubG9jaygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7XG4gICAgICBwcmVzZW50aW5nRWxlbWVudCxcbiAgICAgIGVsXG4gICAgfSA9IHRoaXM7XG4gICAgLyoqXG4gICAgICogSWYgdGhlIG1vZGFsIGlzIHByZXNlbnRlZCBtdWx0aXBsZSB0aW1lcyAoaW5saW5lIG1vZGFscyksIHdlXG4gICAgICogbmVlZCB0byByZXNldCB0aGUgY3VycmVudCBicmVha3BvaW50IHRvIHRoZSBpbml0aWFsIGJyZWFrcG9pbnQuXG4gICAgICovXG4gICAgdGhpcy5jdXJyZW50QnJlYWtwb2ludCA9IHRoaXMuaW5pdGlhbEJyZWFrcG9pbnQ7XG4gICAgY29uc3Qge1xuICAgICAgaW5saW5lLFxuICAgICAgZGVsZWdhdGVcbiAgICB9ID0gdGhpcy5nZXREZWxlZ2F0ZSh0cnVlKTtcbiAgICAvKipcbiAgICAgKiBFbWl0IGlvbk1vdW50IHNvIEpTIEZyYW1ld29ya3MgaGF2ZSBhbiBvcHBvcnR1bml0eVxuICAgICAqIHRvIGFkZCB0aGUgY2hpbGQgY29tcG9uZW50IHRvIHRoZSBET00uIFRoZSBjaGlsZFxuICAgICAqIGNvbXBvbmVudCB3aWxsIGJlIGFzc2lnbmVkIHRvIHRoaXMudXNlcnNFbGVtZW50IGJlbG93LlxuICAgICAqL1xuICAgIHRoaXMuaW9uTW91bnQuZW1pdCgpO1xuICAgIHRoaXMudXNlcnNFbGVtZW50ID0gYXdhaXQgYXR0YWNoQ29tcG9uZW50KGRlbGVnYXRlLCBlbCwgdGhpcy5jb21wb25lbnQsIFsnaW9uLXBhZ2UnXSwgdGhpcy5jb21wb25lbnRQcm9wcywgaW5saW5lKTtcbiAgICAvKipcbiAgICAgKiBXaGVuIHVzaW5nIHRoZSBsYXp5IGxvYWRlZCBidWlsZCBvZiBTdGVuY2lsLCB3ZSBuZWVkIHRvIHdhaXRcbiAgICAgKiBmb3IgZXZlcnkgU3RlbmNpbCBjb21wb25lbnQgaW5zdGFuY2UgdG8gYmUgcmVhZHkgYmVmb3JlIHByZXNlbnRpbmdcbiAgICAgKiBvdGhlcndpc2UgdGhlcmUgY2FuIGJlIGEgZmxhc2ggb2YgdW5zdHlsZWQgY29udGVudC4gV2l0aCB0aGVcbiAgICAgKiBjdXN0b20gZWxlbWVudHMgYnVuZGxlIHdlIG5lZWQgdG8gd2FpdCBmb3IgdGhlIEpTIGZyYW1ld29ya1xuICAgICAqIG1vdW50IHRoZSBpbm5lciBjb250ZW50cyBvZiB0aGUgb3ZlcmxheSBvdGhlcndpc2UgV2ViS2l0IG1heVxuICAgICAqIGdldCB0aGUgdHJhbnNpdGlvbiBpbmNvcnJlY3QuXG4gICAgICovXG4gICAgaWYgKGhhc0xhenlCdWlsZChlbCkpIHtcbiAgICAgIGF3YWl0IGRlZXBSZWFkeSh0aGlzLnVzZXJzRWxlbWVudCk7XG4gICAgICAvKipcbiAgICAgICAqIElmIGtlZXBDb250ZW50c01vdW50ZWQ9XCJ0cnVlXCIgdGhlbiB0aGVcbiAgICAgICAqIEpTIEZyYW1ld29yayBoYXMgYWxyZWFkeSBtb3VudGVkIHRoZSBpbm5lclxuICAgICAgICogY29udGVudHMgc28gdGhlcmUgaXMgbm8gbmVlZCB0byB3YWl0LlxuICAgICAgICogT3RoZXJ3aXNlLCB3ZSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBKU1xuICAgICAgICogRnJhbWV3b3JrIHRvIG1vdW50IHRoZSBpbm5lciBjb250ZW50c1xuICAgICAgICogb2YgdGhpcyBjb21wb25lbnQuXG4gICAgICAgKi9cbiAgICB9IGVsc2UgaWYgKCF0aGlzLmtlZXBDb250ZW50c01vdW50ZWQpIHtcbiAgICAgIGF3YWl0IHdhaXRGb3JNb3VudCgpO1xuICAgIH1cbiAgICB3cml0ZVRhc2soKCkgPT4gdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdzaG93LW1vZGFsJykpO1xuICAgIGNvbnN0IGhhc0NhcmRNb2RhbCA9IHByZXNlbnRpbmdFbGVtZW50ICE9PSB1bmRlZmluZWQ7XG4gICAgLyoqXG4gICAgICogV2UgbmVlZCB0byBjaGFuZ2UgdGhlIHN0YXR1cyBiYXIgYXQgdGhlXG4gICAgICogc3RhcnQgb2YgdGhlIGFuaW1hdGlvbiBzbyB0aGF0IGl0IGNvbXBsZXRlc1xuICAgICAqIGJ5IHRoZSB0aW1lIHRoZSBjYXJkIGFuaW1hdGlvbiBpcyBkb25lLlxuICAgICAqL1xuICAgIGlmIChoYXNDYXJkTW9kYWwgJiYgZ2V0SW9uTW9kZSh0aGlzKSA9PT0gJ2lvcycpIHtcbiAgICAgIC8vIENhY2hlIHRoZSBvcmlnaW5hbCBzdGF0dXMgYmFyIGNvbG9yIGJlZm9yZSB0aGUgbW9kYWwgaXMgcHJlc2VudGVkXG4gICAgICB0aGlzLnN0YXR1c0JhclN0eWxlID0gYXdhaXQgU3RhdHVzQmFyLmdldFN0eWxlKCk7XG4gICAgICBzZXRDYXJkU3RhdHVzQmFyRGFyaygpO1xuICAgIH1cbiAgICBhd2FpdCBwcmVzZW50KHRoaXMsICdtb2RhbEVudGVyJywgaW9zRW50ZXJBbmltYXRpb24sIG1kRW50ZXJBbmltYXRpb24sIHtcbiAgICAgIHByZXNlbnRpbmdFbDogcHJlc2VudGluZ0VsZW1lbnQsXG4gICAgICBjdXJyZW50QnJlYWtwb2ludDogdGhpcy5pbml0aWFsQnJlYWtwb2ludCxcbiAgICAgIGJhY2tkcm9wQnJlYWtwb2ludDogdGhpcy5iYWNrZHJvcEJyZWFrcG9pbnQsXG4gICAgICBleHBhbmRUb1Njcm9sbDogdGhpcy5leHBhbmRUb1Njcm9sbFxuICAgIH0pO1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLyoqXG4gICAgICAgKiBUaGlzIG5lZWRzIHRvIGJlIHNldHVwIGJlZm9yZSBhbnlcbiAgICAgICAqIG5vbi10cmFuc2l0aW9uIGFzeW5jIHdvcmsgc28gaXQgY2FuIGJlIGRlcmVmZXJlbmNlZFxuICAgICAgICogaW4gdGhlIGRpc21pc3MgbWV0aG9kLiBUaGUgZGlzbWlzcyBtZXRob2RcbiAgICAgICAqIG9ubHkgd2FpdHMgZm9yIHRoZSBlbnRlcmluZyB0cmFuc2l0aW9uXG4gICAgICAgKiB0byBmaW5pc2guIEl0IGRvZXMgbm90IHdhaXQgZm9yIGFsbCBvZiB0aGUgYHByZXNlbnRgXG4gICAgICAgKiBtZXRob2QgdG8gcmVzb2x2ZS5cbiAgICAgICAqL1xuICAgICAgdGhpcy5rZXlib2FyZE9wZW5DYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuZ2VzdHVyZSkge1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFdoZW4gdGhlIG5hdGl2ZSBrZXlib2FyZCBpcyBvcGVuZWQgYW5kIHRoZSB3ZWJ2aWV3XG4gICAgICAgICAgICogaXMgcmVzaXplZCwgdGhlIGdlc3R1cmUgaW1wbGVtZW50YXRpb24gd2lsbCBiZWNvbWUgdW5yZXNwb25zaXZlXG4gICAgICAgICAgICogYW5kIGVudGVyIGEgZnJlZS1zY3JvbGwgbW9kZS5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIFdoZW4gdGhlIGtleWJvYXJkIGlzIG9wZW5lZCwgd2UgZGlzYWJsZSB0aGUgZ2VzdHVyZSBmb3JcbiAgICAgICAgICAgKiBhIHNpbmdsZSBmcmFtZSBhbmQgcmUtZW5hYmxlIG9uY2UgdGhlIGNvbnRlbnRzIGhhdmUgcmVwb3NpdGlvbmVkXG4gICAgICAgICAgICogZnJvbSB0aGUga2V5Ym9hcmQgcGxhY2VtZW50LlxuICAgICAgICAgICAqL1xuICAgICAgICAgIHRoaXMuZ2VzdHVyZS5lbmFibGUoZmFsc2UpO1xuICAgICAgICAgIHJhZigoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5nZXN0dXJlKSB7XG4gICAgICAgICAgICAgIHRoaXMuZ2VzdHVyZS5lbmFibGUodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihLRVlCT0FSRF9ESURfT1BFTiwgdGhpcy5rZXlib2FyZE9wZW5DYWxsYmFjayk7XG4gICAgfVxuICAgIGlmICh0aGlzLmlzU2hlZXRNb2RhbCkge1xuICAgICAgdGhpcy5pbml0U2hlZXRHZXN0dXJlKCk7XG4gICAgfSBlbHNlIGlmIChoYXNDYXJkTW9kYWwpIHtcbiAgICAgIHRoaXMuaW5pdFN3aXBlVG9DbG9zZSgpO1xuICAgIH1cbiAgICAvLyBJbml0aWFsaXplIHZpZXcgdHJhbnNpdGlvbiBsaXN0ZW5lciBmb3IgaU9TIGNhcmQgbW9kYWxzXG4gICAgdGhpcy5pbml0Vmlld1RyYW5zaXRpb25MaXN0ZW5lcigpO1xuICAgIC8vIEluaXRpYWxpemUgcGFyZW50IHJlbW92YWwgb2JzZXJ2ZXJcbiAgICB0aGlzLmluaXRQYXJlbnRSZW1vdmFsT2JzZXJ2ZXIoKTtcbiAgICB1bmxvY2soKTtcbiAgfVxuICBpbml0U3dpcGVUb0Nsb3NlKCkge1xuICAgIHZhciBfYTtcbiAgICBpZiAoZ2V0SW9uTW9kZSh0aGlzKSAhPT0gJ2lvcycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qge1xuICAgICAgZWxcbiAgICB9ID0gdGhpcztcbiAgICAvLyBBbGwgb2YgdGhlIGVsZW1lbnRzIG5lZWRlZCBmb3IgdGhlIHN3aXBlIGdlc3R1cmVcbiAgICAvLyBzaG91bGQgYmUgaW4gdGhlIERPTSBhbmQgcmVmZXJlbmNlZCBieSBub3csIGV4Y2VwdFxuICAgIC8vIGZvciB0aGUgcHJlc2VudGluZyBlbFxuICAgIGNvbnN0IGFuaW1hdGlvbkJ1aWxkZXIgPSB0aGlzLmxlYXZlQW5pbWF0aW9uIHx8IGNvbmZpZy5nZXQoJ21vZGFsTGVhdmUnLCBpb3NMZWF2ZUFuaW1hdGlvbik7XG4gICAgY29uc3QgYW5pID0gdGhpcy5hbmltYXRpb24gPSBhbmltYXRpb25CdWlsZGVyKGVsLCB7XG4gICAgICBwcmVzZW50aW5nRWw6IHRoaXMucHJlc2VudGluZ0VsZW1lbnQsXG4gICAgICBleHBhbmRUb1Njcm9sbDogdGhpcy5leHBhbmRUb1Njcm9sbFxuICAgIH0pO1xuICAgIGNvbnN0IGNvbnRlbnRFbCA9IGZpbmRJb25Db250ZW50KGVsKTtcbiAgICBpZiAoIWNvbnRlbnRFbCkge1xuICAgICAgcHJpbnRJb25Db250ZW50RXJyb3JNc2coZWwpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzdGF0dXNCYXJTdHlsZSA9IChfYSA9IHRoaXMuc3RhdHVzQmFyU3R5bGUpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IFN0eWxlLkRlZmF1bHQ7XG4gICAgdGhpcy5nZXN0dXJlID0gY3JlYXRlU3dpcGVUb0Nsb3NlR2VzdHVyZShlbCwgYW5pLCBzdGF0dXNCYXJTdHlsZSwgKCkgPT4ge1xuICAgICAgLyoqXG4gICAgICAgKiBXaGlsZSB0aGUgZ2VzdHVyZSBhbmltYXRpb24gaXMgZmluaXNoaW5nXG4gICAgICAgKiBpdCBpcyBwb3NzaWJsZSBmb3IgYSB1c2VyIHRvIHRhcCB0aGUgYmFja2Ryb3AuXG4gICAgICAgKiBUaGlzIHdvdWxkIHJlc3VsdCBpbiB0aGUgZGlzbWlzcyBhbmltYXRpb25cbiAgICAgICAqIGJlaW5nIHBsYXllZCBhZ2Fpbi4gVHlwaWNhbGx5IHRoaXMgaXMgYXZvaWRlZFxuICAgICAgICogYnkgc2V0dGluZyBgcHJlc2VudGVkID0gZmFsc2VgIG9uIHRoZSBvdmVybGF5XG4gICAgICAgKiBjb21wb25lbnQ7IGhvd2V2ZXIsIHdlIGNhbm5vdCBkbyB0aGF0IGhlcmUgYXNcbiAgICAgICAqIHRoYXQgd291bGQgcHJldmVudCB0aGUgZWxlbWVudCBmcm9tIGJlaW5nXG4gICAgICAgKiByZW1vdmVkIGZyb20gdGhlIERPTS5cbiAgICAgICAqL1xuICAgICAgdGhpcy5nZXN0dXJlQW5pbWF0aW9uRGlzbWlzc2luZyA9IHRydWU7XG4gICAgICAvKipcbiAgICAgICAqIFJlc2V0IHRoZSBzdGF0dXMgYmFyIHN0eWxlIGFzIHRoZSBkaXNtaXNzIGFuaW1hdGlvblxuICAgICAgICogc3RhcnRzIG90aGVyd2lzZSB0aGUgc3RhdHVzIGJhciB3aWxsIGJlIHRoZSB3cm9uZ1xuICAgICAgICogY29sb3IgZm9yIHRoZSBkdXJhdGlvbiBvZiB0aGUgZGlzbWlzcyBhbmltYXRpb24uXG4gICAgICAgKiBUaGUgZGlzbWlzcyBtZXRob2QgZG9lcyB0aGlzIGFzIHdlbGwsIGJ1dFxuICAgICAgICogaW4gdGhpcyBjYXNlIGl0J3Mgb25seSBjYWxsZWQgb25jZSB0aGUgYW5pbWF0aW9uXG4gICAgICAgKiBoYXMgZmluaXNoZWQuXG4gICAgICAgKi9cbiAgICAgIHNldENhcmRTdGF0dXNCYXJEZWZhdWx0KHRoaXMuc3RhdHVzQmFyU3R5bGUpO1xuICAgICAgdGhpcy5hbmltYXRpb24ub25GaW5pc2goYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCB0aGlzLmRpc21pc3ModW5kZWZpbmVkLCBHRVNUVVJFKTtcbiAgICAgICAgdGhpcy5nZXN0dXJlQW5pbWF0aW9uRGlzbWlzc2luZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5nZXN0dXJlLmVuYWJsZSh0cnVlKTtcbiAgfVxuICBpbml0U2hlZXRHZXN0dXJlKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHdyYXBwZXJFbCxcbiAgICAgIGluaXRpYWxCcmVha3BvaW50LFxuICAgICAgYmFja2Ryb3BCcmVha3BvaW50XG4gICAgfSA9IHRoaXM7XG4gICAgaWYgKCF3cmFwcGVyRWwgfHwgaW5pdGlhbEJyZWFrcG9pbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBhbmltYXRpb25CdWlsZGVyID0gdGhpcy5lbnRlckFuaW1hdGlvbiB8fCBjb25maWcuZ2V0KCdtb2RhbEVudGVyJywgaW9zRW50ZXJBbmltYXRpb24pO1xuICAgIGNvbnN0IGFuaSA9IHRoaXMuYW5pbWF0aW9uID0gYW5pbWF0aW9uQnVpbGRlcih0aGlzLmVsLCB7XG4gICAgICBwcmVzZW50aW5nRWw6IHRoaXMucHJlc2VudGluZ0VsZW1lbnQsXG4gICAgICBjdXJyZW50QnJlYWtwb2ludDogaW5pdGlhbEJyZWFrcG9pbnQsXG4gICAgICBiYWNrZHJvcEJyZWFrcG9pbnQsXG4gICAgICBleHBhbmRUb1Njcm9sbDogdGhpcy5leHBhbmRUb1Njcm9sbFxuICAgIH0pO1xuICAgIGFuaS5wcm9ncmVzc1N0YXJ0KHRydWUsIDEpO1xuICAgIGNvbnN0IHtcbiAgICAgIGdlc3R1cmUsXG4gICAgICBtb3ZlU2hlZXRUb0JyZWFrcG9pbnRcbiAgICB9ID0gY3JlYXRlU2hlZXRHZXN0dXJlKHRoaXMuZWwsIHRoaXMuYmFja2Ryb3BFbCwgd3JhcHBlckVsLCBpbml0aWFsQnJlYWtwb2ludCwgYmFja2Ryb3BCcmVha3BvaW50LCBhbmksIHRoaXMuc29ydGVkQnJlYWtwb2ludHMsIHRoaXMuZXhwYW5kVG9TY3JvbGwsICgpID0+IHtcbiAgICAgIHZhciBfYTtcbiAgICAgIHJldHVybiAoX2EgPSB0aGlzLmN1cnJlbnRCcmVha3BvaW50KSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAwO1xuICAgIH0sICgpID0+IHRoaXMuc2hlZXRPbkRpc21pc3MoKSwgYnJlYWtwb2ludCA9PiB7XG4gICAgICBpZiAodGhpcy5jdXJyZW50QnJlYWtwb2ludCAhPT0gYnJlYWtwb2ludCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRCcmVha3BvaW50ID0gYnJlYWtwb2ludDtcbiAgICAgICAgdGhpcy5pb25CcmVha3BvaW50RGlkQ2hhbmdlLmVtaXQoe1xuICAgICAgICAgIGJyZWFrcG9pbnRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5nZXN0dXJlID0gZ2VzdHVyZTtcbiAgICB0aGlzLm1vdmVTaGVldFRvQnJlYWtwb2ludCA9IG1vdmVTaGVldFRvQnJlYWtwb2ludDtcbiAgICB0aGlzLmdlc3R1cmUuZW5hYmxlKHRydWUpO1xuICB9XG4gIHNoZWV0T25EaXNtaXNzKCkge1xuICAgIC8qKlxuICAgICAqIFdoaWxlIHRoZSBnZXN0dXJlIGFuaW1hdGlvbiBpcyBmaW5pc2hpbmdcbiAgICAgKiBpdCBpcyBwb3NzaWJsZSBmb3IgYSB1c2VyIHRvIHRhcCB0aGUgYmFja2Ryb3AuXG4gICAgICogVGhpcyB3b3VsZCByZXN1bHQgaW4gdGhlIGRpc21pc3MgYW5pbWF0aW9uXG4gICAgICogYmVpbmcgcGxheWVkIGFnYWluLiBUeXBpY2FsbHkgdGhpcyBpcyBhdm9pZGVkXG4gICAgICogYnkgc2V0dGluZyBgcHJlc2VudGVkID0gZmFsc2VgIG9uIHRoZSBvdmVybGF5XG4gICAgICogY29tcG9uZW50OyBob3dldmVyLCB3ZSBjYW5ub3QgZG8gdGhhdCBoZXJlIGFzXG4gICAgICogdGhhdCB3b3VsZCBwcmV2ZW50IHRoZSBlbGVtZW50IGZyb20gYmVpbmdcbiAgICAgKiByZW1vdmVkIGZyb20gdGhlIERPTS5cbiAgICAgKi9cbiAgICB0aGlzLmdlc3R1cmVBbmltYXRpb25EaXNtaXNzaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmFuaW1hdGlvbi5vbkZpbmlzaChhc3luYyAoKSA9PiB7XG4gICAgICB0aGlzLmN1cnJlbnRCcmVha3BvaW50ID0gMDtcbiAgICAgIHRoaXMuaW9uQnJlYWtwb2ludERpZENoYW5nZS5lbWl0KHtcbiAgICAgICAgYnJlYWtwb2ludDogdGhpcy5jdXJyZW50QnJlYWtwb2ludFxuICAgICAgfSk7XG4gICAgICBhd2FpdCB0aGlzLmRpc21pc3ModW5kZWZpbmVkLCBHRVNUVVJFKTtcbiAgICAgIHRoaXMuZ2VzdHVyZUFuaW1hdGlvbkRpc21pc3NpbmcgPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogRGlzbWlzcyB0aGUgbW9kYWwgb3ZlcmxheSBhZnRlciBpdCBoYXMgYmVlbiBwcmVzZW50ZWQuXG4gICAqIFRoaXMgaXMgYSBuby1vcCBpZiB0aGUgb3ZlcmxheSBoYXMgbm90IGJlZW4gcHJlc2VudGVkIHlldC4gSWYgeW91IHdhbnRcbiAgICogdG8gcmVtb3ZlIGFuIG92ZXJsYXkgZnJvbSB0aGUgRE9NIHRoYXQgd2FzIG5ldmVyIHByZXNlbnRlZCwgdXNlIHRoZVxuICAgKiBbcmVtb3ZlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRWxlbWVudC9yZW1vdmUpIG1ldGhvZC5cbiAgICpcbiAgICogQHBhcmFtIGRhdGEgQW55IGRhdGEgdG8gZW1pdCBpbiB0aGUgZGlzbWlzcyBldmVudHMuXG4gICAqIEBwYXJhbSByb2xlIFRoZSByb2xlIG9mIHRoZSBlbGVtZW50IHRoYXQgaXMgZGlzbWlzc2luZyB0aGUgbW9kYWwuXG4gICAqIEZvciBleGFtcGxlLCBgY2FuY2VsYCBvciBgYmFja2Ryb3BgLlxuICAgKi9cbiAgYXN5bmMgZGlzbWlzcyhkYXRhLCByb2xlKSB7XG4gICAgdmFyIF9hO1xuICAgIGlmICh0aGlzLmdlc3R1cmVBbmltYXRpb25EaXNtaXNzaW5nICYmIHJvbGUgIT09IEdFU1RVUkUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQmVjYXVzZSB0aGUgY2FuRGlzbWlzcyBjaGVjayBiZWxvdyBpcyBhc3luYyxcbiAgICAgKiB3ZSBuZWVkIHRvIGNsYWltIGEgbG9jayBiZWZvcmUgdGhlIGNoZWNrIGhhcHBlbnMsXG4gICAgICogaW4gY2FzZSB0aGUgZGlzbWlzcyB0cmFuc2l0aW9uIGRvZXMgcnVuLlxuICAgICAqL1xuICAgIGNvbnN0IHVubG9jayA9IGF3YWl0IHRoaXMubG9ja0NvbnRyb2xsZXIubG9jaygpO1xuICAgIC8qKlxuICAgICAqIERpc21pc3MgYWxsIGNoaWxkIG1vZGFscy4gVGhpcyBpcyBlc3BlY2lhbGx5IGltcG9ydGFudCBpblxuICAgICAqIEFuZ3VsYXIgYW5kIFJlYWN0IGJlY2F1c2UgaXQncyBwb3NzaWJsZSB0byBsb3NlIGNvbnRyb2wgb2YgYSBjaGlsZFxuICAgICAqIG1vZGFsIHdoZW4gdGhlIHBhcmVudCBtb2RhbCBpcyBkaXNtaXNzZWQuXG4gICAgICovXG4gICAgYXdhaXQgdGhpcy5kaXNtaXNzTmVzdGVkTW9kYWxzKCk7XG4gICAgLyoqXG4gICAgICogSWYgYSBjYW5EaXNtaXNzIGhhbmRsZXIgaXMgcmVzcG9uc2libGVcbiAgICAgKiBmb3IgY2FsbGluZyB0aGUgZGlzbWlzcyBtZXRob2QsIHdlIHNob3VsZFxuICAgICAqIG5vdCBydW4gdGhlIGNhbkRpc21pc3MgY2hlY2sgYWdhaW4uXG4gICAgICovXG4gICAgaWYgKHJvbGUgIT09ICdoYW5kbGVyJyAmJiAhKGF3YWl0IHRoaXMuY2hlY2tDYW5EaXNtaXNzKGRhdGEsIHJvbGUpKSkge1xuICAgICAgdW5sb2NrKCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHtcbiAgICAgIHByZXNlbnRpbmdFbGVtZW50XG4gICAgfSA9IHRoaXM7XG4gICAgLyoqXG4gICAgICogV2UgbmVlZCB0byBzdGFydCB0aGUgc3RhdHVzIGJhciBjaGFuZ2VcbiAgICAgKiBiZWZvcmUgdGhlIGFuaW1hdGlvbiBzbyB0aGF0IHRoZSBjaGFuZ2VcbiAgICAgKiBmaW5pc2hlcyB3aGVuIHRoZSBkaXNtaXNzIGFuaW1hdGlvbiBkb2VzLlxuICAgICAqL1xuICAgIGNvbnN0IGhhc0NhcmRNb2RhbCA9IHByZXNlbnRpbmdFbGVtZW50ICE9PSB1bmRlZmluZWQ7XG4gICAgaWYgKGhhc0NhcmRNb2RhbCAmJiBnZXRJb25Nb2RlKHRoaXMpID09PSAnaW9zJykge1xuICAgICAgc2V0Q2FyZFN0YXR1c0JhckRlZmF1bHQodGhpcy5zdGF0dXNCYXJTdHlsZSk7XG4gICAgfVxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLmtleWJvYXJkT3BlbkNhbGxiYWNrKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihLRVlCT0FSRF9ESURfT1BFTiwgdGhpcy5rZXlib2FyZE9wZW5DYWxsYmFjayk7XG4gICAgICB0aGlzLmtleWJvYXJkT3BlbkNhbGxiYWNrID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBjb25zdCBkaXNtaXNzZWQgPSBhd2FpdCBkaXNtaXNzKHRoaXMsIGRhdGEsIHJvbGUsICdtb2RhbExlYXZlJywgaW9zTGVhdmVBbmltYXRpb24sIG1kTGVhdmVBbmltYXRpb24sIHtcbiAgICAgIHByZXNlbnRpbmdFbDogcHJlc2VudGluZ0VsZW1lbnQsXG4gICAgICBjdXJyZW50QnJlYWtwb2ludDogKF9hID0gdGhpcy5jdXJyZW50QnJlYWtwb2ludCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogdGhpcy5pbml0aWFsQnJlYWtwb2ludCxcbiAgICAgIGJhY2tkcm9wQnJlYWtwb2ludDogdGhpcy5iYWNrZHJvcEJyZWFrcG9pbnQsXG4gICAgICBleHBhbmRUb1Njcm9sbDogdGhpcy5leHBhbmRUb1Njcm9sbFxuICAgIH0pO1xuICAgIGlmIChkaXNtaXNzZWQpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZGVsZWdhdGVcbiAgICAgIH0gPSB0aGlzLmdldERlbGVnYXRlKCk7XG4gICAgICBhd2FpdCBkZXRhY2hDb21wb25lbnQoZGVsZWdhdGUsIHRoaXMudXNlcnNFbGVtZW50KTtcbiAgICAgIHdyaXRlVGFzaygoKSA9PiB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3ctbW9kYWwnKSk7XG4gICAgICBpZiAodGhpcy5hbmltYXRpb24pIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb24uZGVzdHJveSgpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZ2VzdHVyZSkge1xuICAgICAgICB0aGlzLmdlc3R1cmUuZGVzdHJveSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5jbGVhbnVwVmlld1RyYW5zaXRpb25MaXN0ZW5lcigpO1xuICAgICAgdGhpcy5jbGVhbnVwUGFyZW50UmVtb3ZhbE9ic2VydmVyKCk7XG4gICAgfVxuICAgIHRoaXMuY3VycmVudEJyZWFrcG9pbnQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5hbmltYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgdW5sb2NrKCk7XG4gICAgcmV0dXJuIGRpc21pc3NlZDtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBtb2RhbCBkaWQgZGlzbWlzcy5cbiAgICovXG4gIG9uRGlkRGlzbWlzcygpIHtcbiAgICByZXR1cm4gZXZlbnRNZXRob2QodGhpcy5lbCwgJ2lvbk1vZGFsRGlkRGlzbWlzcycpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIG1vZGFsIHdpbGwgZGlzbWlzcy5cbiAgICovXG4gIG9uV2lsbERpc21pc3MoKSB7XG4gICAgcmV0dXJuIGV2ZW50TWV0aG9kKHRoaXMuZWwsICdpb25Nb2RhbFdpbGxEaXNtaXNzJyk7XG4gIH1cbiAgLyoqXG4gICAqIE1vdmUgYSBzaGVldCBzdHlsZSBtb2RhbCB0byBhIHNwZWNpZmljIGJyZWFrcG9pbnQuXG4gICAqXG4gICAqIEBwYXJhbSBicmVha3BvaW50IFRoZSBicmVha3BvaW50IHZhbHVlIHRvIG1vdmUgdGhlIHNoZWV0IG1vZGFsIHRvLlxuICAgKiBNdXN0IGJlIGEgdmFsdWUgZGVmaW5lZCBpbiB5b3VyIGBicmVha3BvaW50c2AgYXJyYXkuXG4gICAqL1xuICBhc3luYyBzZXRDdXJyZW50QnJlYWtwb2ludChicmVha3BvaW50KSB7XG4gICAgaWYgKCF0aGlzLmlzU2hlZXRNb2RhbCkge1xuICAgICAgcHJpbnRJb25XYXJuaW5nKCdbaW9uLW1vZGFsXSAtIHNldEN1cnJlbnRCcmVha3BvaW50IGlzIG9ubHkgc3VwcG9ydGVkIG9uIHNoZWV0IG1vZGFscy4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmJyZWFrcG9pbnRzLmluY2x1ZGVzKGJyZWFrcG9pbnQpKSB7XG4gICAgICBwcmludElvbldhcm5pbmcoYFtpb24tbW9kYWxdIC0gQXR0ZW1wdGVkIHRvIHNldCBpbnZhbGlkIGJyZWFrcG9pbnQgdmFsdWUgJHticmVha3BvaW50fS4gUGxlYXNlIGRvdWJsZSBjaGVjayB0aGF0IHRoZSBicmVha3BvaW50IHZhbHVlIGlzIHBhcnQgb2YgeW91ciBkZWZpbmVkIGJyZWFrcG9pbnRzLmApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7XG4gICAgICBjdXJyZW50QnJlYWtwb2ludCxcbiAgICAgIG1vdmVTaGVldFRvQnJlYWtwb2ludCxcbiAgICAgIGNhbkRpc21pc3MsXG4gICAgICBicmVha3BvaW50cyxcbiAgICAgIGFuaW1hdGVkXG4gICAgfSA9IHRoaXM7XG4gICAgaWYgKGN1cnJlbnRCcmVha3BvaW50ID09PSBicmVha3BvaW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChtb3ZlU2hlZXRUb0JyZWFrcG9pbnQpIHtcbiAgICAgIHRoaXMuc2hlZXRUcmFuc2l0aW9uID0gbW92ZVNoZWV0VG9CcmVha3BvaW50KHtcbiAgICAgICAgYnJlYWtwb2ludCxcbiAgICAgICAgYnJlYWtwb2ludE9mZnNldDogMSAtIGN1cnJlbnRCcmVha3BvaW50LFxuICAgICAgICBjYW5EaXNtaXNzOiBjYW5EaXNtaXNzICE9PSB1bmRlZmluZWQgJiYgY2FuRGlzbWlzcyAhPT0gdHJ1ZSAmJiBicmVha3BvaW50c1swXSA9PT0gMCxcbiAgICAgICAgYW5pbWF0ZWRcbiAgICAgIH0pO1xuICAgICAgYXdhaXQgdGhpcy5zaGVldFRyYW5zaXRpb247XG4gICAgICB0aGlzLnNoZWV0VHJhbnNpdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgYnJlYWtwb2ludCBvZiBhIHNoZWV0IHN0eWxlIG1vZGFsXG4gICAqL1xuICBhc3luYyBnZXRDdXJyZW50QnJlYWtwb2ludCgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50QnJlYWtwb2ludDtcbiAgfVxuICBhc3luYyBtb3ZlVG9OZXh0QnJlYWtwb2ludCgpIHtcbiAgICBjb25zdCB7XG4gICAgICBicmVha3BvaW50cyxcbiAgICAgIGN1cnJlbnRCcmVha3BvaW50XG4gICAgfSA9IHRoaXM7XG4gICAgaWYgKCFicmVha3BvaW50cyB8fCBjdXJyZW50QnJlYWtwb2ludCA9PSBudWxsKSB7XG4gICAgICAvKipcbiAgICAgICAqIElmIHRoZSBtb2RhbCBkb2VzIG5vdCBoYXZlIGJyZWFrcG9pbnRzIGFuZC9vciB0aGUgY3VycmVudFxuICAgICAgICogYnJlYWtwb2ludCBpcyBub3Qgc2V0LCB3ZSBjYW4ndCBtb3ZlIHRvIHRoZSBuZXh0IGJyZWFrcG9pbnQuXG4gICAgICAgKi9cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgYWxsb3dlZEJyZWFrcG9pbnRzID0gYnJlYWtwb2ludHMuZmlsdGVyKGIgPT4gYiAhPT0gMCk7XG4gICAgY29uc3QgY3VycmVudEJyZWFrcG9pbnRJbmRleCA9IGFsbG93ZWRCcmVha3BvaW50cy5pbmRleE9mKGN1cnJlbnRCcmVha3BvaW50KTtcbiAgICBjb25zdCBuZXh0QnJlYWtwb2ludEluZGV4ID0gKGN1cnJlbnRCcmVha3BvaW50SW5kZXggKyAxKSAlIGFsbG93ZWRCcmVha3BvaW50cy5sZW5ndGg7XG4gICAgY29uc3QgbmV4dEJyZWFrcG9pbnQgPSBhbGxvd2VkQnJlYWtwb2ludHNbbmV4dEJyZWFrcG9pbnRJbmRleF07XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgY3VycmVudCBicmVha3BvaW50IHRvIHRoZSBuZXh0IGF2YWlsYWJsZSBicmVha3BvaW50LlxuICAgICAqIElmIHRoZSBjdXJyZW50IGJyZWFrcG9pbnQgaXMgdGhlIGxhc3QgYnJlYWtwb2ludCwgd2Ugc2V0IHRoZSBjdXJyZW50XG4gICAgICogYnJlYWtwb2ludCB0byB0aGUgZmlyc3Qgbm9uLXplcm8gYnJlYWtwb2ludCB0byBhdm9pZCBkaXNtaXNzaW5nIHRoZSBzaGVldC5cbiAgICAgKi9cbiAgICBhd2FpdCB0aGlzLnNldEN1cnJlbnRCcmVha3BvaW50KG5leHRCcmVha3BvaW50KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpbml0Vmlld1RyYW5zaXRpb25MaXN0ZW5lcigpIHtcbiAgICAvLyBPbmx5IGVuYWJsZSBmb3IgaU9TIGNhcmQgbW9kYWxzIHdoZW4gbm8gY3VzdG9tIGFuaW1hdGlvbnMgYXJlIHByb3ZpZGVkXG4gICAgaWYgKGdldElvbk1vZGUodGhpcykgIT09ICdpb3MnIHx8ICF0aGlzLnByZXNlbnRpbmdFbGVtZW50IHx8IHRoaXMuZW50ZXJBbmltYXRpb24gfHwgdGhpcy5sZWF2ZUFuaW1hdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBTZXQgaW5pdGlhbCB2aWV3IHN0YXRlXG4gICAgdGhpcy5jdXJyZW50Vmlld0lzUG9ydHJhaXQgPSB3aW5kb3cuaW5uZXJXaWR0aCA8IDc2ODtcbiAgfVxuICBoYW5kbGVWaWV3VHJhbnNpdGlvbigpIHtcbiAgICBjb25zdCBpc1BvcnRyYWl0ID0gd2luZG93LmlubmVyV2lkdGggPCA3Njg7XG4gICAgLy8gT25seSB0cmFuc2l0aW9uIGlmIHZpZXcgc3RhdGUgYWN0dWFsbHkgY2hhbmdlZFxuICAgIGlmICh0aGlzLmN1cnJlbnRWaWV3SXNQb3J0cmFpdCA9PT0gaXNQb3J0cmFpdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBDYW5jZWwgYW55IG9uZ29pbmcgdHJhbnNpdGlvbiBhbmltYXRpb25cbiAgICBpZiAodGhpcy52aWV3VHJhbnNpdGlvbkFuaW1hdGlvbikge1xuICAgICAgdGhpcy52aWV3VHJhbnNpdGlvbkFuaW1hdGlvbi5kZXN0cm95KCk7XG4gICAgICB0aGlzLnZpZXdUcmFuc2l0aW9uQW5pbWF0aW9uID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBjb25zdCB7XG4gICAgICBwcmVzZW50aW5nRWxlbWVudFxuICAgIH0gPSB0aGlzO1xuICAgIGlmICghcHJlc2VudGluZ0VsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gQ3JlYXRlIHRyYW5zaXRpb24gYW5pbWF0aW9uXG4gICAgbGV0IHRyYW5zaXRpb25BbmltYXRpb247XG4gICAgaWYgKHRoaXMuY3VycmVudFZpZXdJc1BvcnRyYWl0ICYmICFpc1BvcnRyYWl0KSB7XG4gICAgICAvLyBQb3J0cmFpdCB0byBsYW5kc2NhcGUgdHJhbnNpdGlvblxuICAgICAgdHJhbnNpdGlvbkFuaW1hdGlvbiA9IHBvcnRyYWl0VG9MYW5kc2NhcGVUcmFuc2l0aW9uKHRoaXMuZWwsIHtcbiAgICAgICAgcHJlc2VudGluZ0VsOiBwcmVzZW50aW5nRWxlbWVudFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIExhbmRzY2FwZSB0byBwb3J0cmFpdCB0cmFuc2l0aW9uXG4gICAgICB0cmFuc2l0aW9uQW5pbWF0aW9uID0gbGFuZHNjYXBlVG9Qb3J0cmFpdFRyYW5zaXRpb24odGhpcy5lbCwge1xuICAgICAgICBwcmVzZW50aW5nRWw6IHByZXNlbnRpbmdFbGVtZW50XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy8gVXBkYXRlIHN0YXRlIGFuZCBwbGF5IGFuaW1hdGlvblxuICAgIHRoaXMuY3VycmVudFZpZXdJc1BvcnRyYWl0ID0gaXNQb3J0cmFpdDtcbiAgICB0aGlzLnZpZXdUcmFuc2l0aW9uQW5pbWF0aW9uID0gdHJhbnNpdGlvbkFuaW1hdGlvbjtcbiAgICB0cmFuc2l0aW9uQW5pbWF0aW9uLnBsYXkoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMudmlld1RyYW5zaXRpb25BbmltYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICAvLyBBZnRlciBvcmllbnRhdGlvbiB0cmFuc2l0aW9uLCByZWNyZWF0ZSB0aGUgc3dpcGUtdG8tY2xvc2UgZ2VzdHVyZVxuICAgICAgLy8gd2l0aCB1cGRhdGVkIGFuaW1hdGlvbiB0aGF0IHJlZmxlY3RzIHRoZSBuZXcgcHJlc2VudGluZyBlbGVtZW50IHN0YXRlXG4gICAgICB0aGlzLnJlaW5pdFN3aXBlVG9DbG9zZSgpO1xuICAgIH0pO1xuICB9XG4gIGNsZWFudXBWaWV3VHJhbnNpdGlvbkxpc3RlbmVyKCkge1xuICAgIC8vIENsZWFyIGFueSBwZW5kaW5nIHJlc2l6ZSB0aW1lb3V0XG4gICAgaWYgKHRoaXMucmVzaXplVGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucmVzaXplVGltZW91dCk7XG4gICAgICB0aGlzLnJlc2l6ZVRpbWVvdXQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLnZpZXdUcmFuc2l0aW9uQW5pbWF0aW9uKSB7XG4gICAgICB0aGlzLnZpZXdUcmFuc2l0aW9uQW5pbWF0aW9uLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMudmlld1RyYW5zaXRpb25BbmltYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG4gIHJlaW5pdFN3aXBlVG9DbG9zZSgpIHtcbiAgICAvLyBPbmx5IHJlaW5pdGlhbGl6ZSBpZiB3ZSBoYXZlIGEgcHJlc2VudGluZyBlbGVtZW50IGFuZCBhcmUgb24gaU9TXG4gICAgaWYgKGdldElvbk1vZGUodGhpcykgIT09ICdpb3MnIHx8ICF0aGlzLnByZXNlbnRpbmdFbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIENsZWFuIHVwIGV4aXN0aW5nIGdlc3R1cmUgYW5kIGFuaW1hdGlvblxuICAgIGlmICh0aGlzLmdlc3R1cmUpIHtcbiAgICAgIHRoaXMuZ2VzdHVyZS5kZXN0cm95KCk7XG4gICAgICB0aGlzLmdlc3R1cmUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLmFuaW1hdGlvbikge1xuICAgICAgLy8gUHJvcGVybHkgZW5kIHRoZSBwcm9ncmVzcy1iYXNlZCBhbmltYXRpb24gYXQgaW5pdGlhbCBzdGF0ZSBiZWZvcmUgZGVzdHJveWluZ1xuICAgICAgLy8gdG8gYXZvaWQgbGVhdmluZyBtb2RhbCBpbiBpbnRlcm1lZGlhdGUgc3dpcGUgcG9zaXRpb25cbiAgICAgIHRoaXMuYW5pbWF0aW9uLnByb2dyZXNzRW5kKDAsIDAsIDApO1xuICAgICAgdGhpcy5hbmltYXRpb24uZGVzdHJveSgpO1xuICAgICAgdGhpcy5hbmltYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8vIEZvcmNlIHRoZSBtb2RhbCBiYWNrIHRvIHRoZSBjb3JyZWN0IHBvc2l0aW9uIG9yIGl0IGNvdWxkIGVuZCB1cFxuICAgIC8vIGluIGEgd2VpcmQgc3RhdGUgYWZ0ZXIgZGVzdHJveWluZyB0aGUgYW5pbWF0aW9uXG4gICAgcmFmKCgpID0+IHtcbiAgICAgIHRoaXMuZW5zdXJlQ29ycmVjdE1vZGFsUG9zaXRpb24oKTtcbiAgICAgIHRoaXMuaW5pdFN3aXBlVG9DbG9zZSgpO1xuICAgIH0pO1xuICB9XG4gIGVuc3VyZUNvcnJlY3RNb2RhbFBvc2l0aW9uKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGVsLFxuICAgICAgcHJlc2VudGluZ0VsZW1lbnRcbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCByb290ID0gZ2V0RWxlbWVudFJvb3QoZWwpO1xuICAgIGNvbnN0IHdyYXBwZXJFbCA9IHJvb3QucXVlcnlTZWxlY3RvcignLm1vZGFsLXdyYXBwZXInKTtcbiAgICBpZiAod3JhcHBlckVsKSB7XG4gICAgICB3cmFwcGVyRWwuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoMHZoKSc7XG4gICAgICB3cmFwcGVyRWwuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICB9XG4gICAgaWYgKChwcmVzZW50aW5nRWxlbWVudCA9PT0gbnVsbCB8fCBwcmVzZW50aW5nRWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJlc2VudGluZ0VsZW1lbnQudGFnTmFtZSkgPT09ICdJT04tTU9EQUwnKSB7XG4gICAgICBjb25zdCBpc1BvcnRyYWl0ID0gd2luZG93LmlubmVyV2lkdGggPCA3Njg7XG4gICAgICBpZiAoaXNQb3J0cmFpdCkge1xuICAgICAgICBjb25zdCB0cmFuc2Zvcm1PZmZzZXQgPSAhQ1NTLnN1cHBvcnRzKCd3aWR0aCcsICdtYXgoMHB4LCAxcHgpJykgPyAnMzBweCcgOiAnbWF4KDMwcHgsIHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wKSknO1xuICAgICAgICBjb25zdCBzY2FsZSA9IFN3aXBlVG9DbG9zZURlZmF1bHRzLk1JTl9QUkVTRU5USU5HX1NDQUxFO1xuICAgICAgICBwcmVzZW50aW5nRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke3RyYW5zZm9ybU9mZnNldH0pIHNjYWxlKCR7c2NhbGV9KWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcmVzZW50aW5nRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgwcHgpIHNjYWxlKDEpJztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgYXN5bmMgZGlzbWlzc05lc3RlZE1vZGFscygpIHtcbiAgICBjb25zdCBuZXN0ZWRNb2RhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBpb24tbW9kYWxbZGF0YS1wYXJlbnQtaW9uLW1vZGFsPVwiJHt0aGlzLmVsLmlkfVwiXWApO1xuICAgIG5lc3RlZE1vZGFscyA9PT0gbnVsbCB8fCBuZXN0ZWRNb2RhbHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5lc3RlZE1vZGFscy5mb3JFYWNoKGFzeW5jIG1vZGFsID0+IHtcbiAgICAgIGF3YWl0IG1vZGFsLmRpc21pc3ModW5kZWZpbmVkLCAncGFyZW50LWRpc21pc3NlZCcpO1xuICAgIH0pO1xuICB9XG4gIGluaXRQYXJlbnRSZW1vdmFsT2JzZXJ2ZXIoKSB7XG4gICAgaWYgKHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBPbmx5IG9ic2VydmUgaWYgd2UgaGF2ZSBhIGNhY2hlZCBwYXJlbnQgYW5kIGFyZSBpbiBicm93c2VyIGVudmlyb25tZW50XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICF0aGlzLmNhY2hlZE9yaWdpbmFsUGFyZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIERvbid0IG9ic2VydmUgZG9jdW1lbnQgb3IgZnJhZ21lbnQgbm9kZXMgYXMgdGhleSBjYW4ndCBiZSBcInJlbW92ZWRcIlxuICAgIGlmICh0aGlzLmNhY2hlZE9yaWdpbmFsUGFyZW50Lm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX05PREUgfHwgdGhpcy5jYWNoZWRPcmlnaW5hbFBhcmVudC5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucGFyZW50UmVtb3ZhbE9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIobXV0YXRpb25zID0+IHtcbiAgICAgIG11dGF0aW9ucy5mb3JFYWNoKG11dGF0aW9uID0+IHtcbiAgICAgICAgaWYgKG11dGF0aW9uLnR5cGUgPT09ICdjaGlsZExpc3QnICYmIG11dGF0aW9uLnJlbW92ZWROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgLy8gQ2hlY2sgaWYgb3VyIGNhY2hlZCBvcmlnaW5hbCBwYXJlbnQgd2FzIHJlbW92ZWRcbiAgICAgICAgICBjb25zdCBjYWNoZWRQYXJlbnRXYXNSZW1vdmVkID0gQXJyYXkuZnJvbShtdXRhdGlvbi5yZW1vdmVkTm9kZXMpLnNvbWUobm9kZSA9PiB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgY29uc3QgaXNEaXJlY3RNYXRjaCA9IG5vZGUgPT09IHRoaXMuY2FjaGVkT3JpZ2luYWxQYXJlbnQ7XG4gICAgICAgICAgICBjb25zdCBpc0NvbnRhaW5lZE1hdGNoID0gdGhpcy5jYWNoZWRPcmlnaW5hbFBhcmVudCA/IChfYiA9IChfYSA9IG5vZGUpLmNvbnRhaW5zKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSwgdGhpcy5jYWNoZWRPcmlnaW5hbFBhcmVudCkgOiBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiBpc0RpcmVjdE1hdGNoIHx8IGlzQ29udGFpbmVkTWF0Y2g7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgLy8gQWxzbyBjaGVjayBpZiBwYXJlbnQgaXMgbm8gbG9uZ2VyIGNvbm5lY3RlZCB0byBET01cbiAgICAgICAgICBjb25zdCBjYWNoZWRQYXJlbnREaXNjb25uZWN0ZWQgPSB0aGlzLmNhY2hlZE9yaWdpbmFsUGFyZW50ICYmICF0aGlzLmNhY2hlZE9yaWdpbmFsUGFyZW50LmlzQ29ubmVjdGVkO1xuICAgICAgICAgIGlmIChjYWNoZWRQYXJlbnRXYXNSZW1vdmVkIHx8IGNhY2hlZFBhcmVudERpc2Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5kaXNtaXNzKHVuZGVmaW5lZCwgJ3BhcmVudC1yZW1vdmVkJyk7XG4gICAgICAgICAgICAvLyBSZWxlYXNlIHRoZSByZWZlcmVuY2UgdG8gdGhlIGNhY2hlZCBvcmlnaW5hbCBwYXJlbnRcbiAgICAgICAgICAgIC8vIHNvIHdlIGRvbid0IGhhdmUgYSBtZW1vcnkgbGVha1xuICAgICAgICAgICAgdGhpcy5jYWNoZWRPcmlnaW5hbFBhcmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIE9ic2VydmUgZG9jdW1lbnQgYm9keSB3aXRoIHN1YnRyZWUgdG8gY2F0Y2ggcmVtb3ZhbHMgYXQgYW55IGxldmVsXG4gICAgdGhpcy5wYXJlbnRSZW1vdmFsT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCB7XG4gICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgfSk7XG4gIH1cbiAgY2xlYW51cFBhcmVudFJlbW92YWxPYnNlcnZlcigpIHtcbiAgICB2YXIgX2E7XG4gICAgKF9hID0gdGhpcy5wYXJlbnRSZW1vdmFsT2JzZXJ2ZXIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5kaXNjb25uZWN0KCk7XG4gICAgdGhpcy5wYXJlbnRSZW1vdmFsT2JzZXJ2ZXIgPSB1bmRlZmluZWQ7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGhhbmRsZSxcbiAgICAgIGlzU2hlZXRNb2RhbCxcbiAgICAgIHByZXNlbnRpbmdFbGVtZW50LFxuICAgICAgaHRtbEF0dHJpYnV0ZXMsXG4gICAgICBoYW5kbGVCZWhhdmlvcixcbiAgICAgIGluaGVyaXRlZEF0dHJpYnV0ZXMsXG4gICAgICBmb2N1c1RyYXAsXG4gICAgICBleHBhbmRUb1Njcm9sbFxuICAgIH0gPSB0aGlzO1xuICAgIGNvbnN0IHNob3dIYW5kbGUgPSBoYW5kbGUgIT09IGZhbHNlICYmIGlzU2hlZXRNb2RhbDtcbiAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICBjb25zdCBpc0NhcmRNb2RhbCA9IHByZXNlbnRpbmdFbGVtZW50ICE9PSB1bmRlZmluZWQgJiYgbW9kZSA9PT0gJ2lvcyc7XG4gICAgY29uc3QgaXNIYW5kbGVDeWNsZSA9IGhhbmRsZUJlaGF2aW9yID09PSAnY3ljbGUnO1xuICAgIGNvbnN0IGlzU2hlZXRNb2RhbFdpdGhIYW5kbGUgPSBpc1NoZWV0TW9kYWwgJiYgc2hvd0hhbmRsZTtcbiAgICByZXR1cm4gaChIb3N0LCBPYmplY3QuYXNzaWduKHtcbiAgICAgIGtleTogJzllOWE3YmQ1OTFlYjE3YTIyNWEwMGI0ZmEyZTM3OWU5NDYwMWQxN2YnLFxuICAgICAgXCJuby1yb3V0ZXJcIjogdHJ1ZSxcbiAgICAgIC8vIEFsbG93IHRoZSBtb2RhbCB0byBiZSBuYXZpZ2FibGUgd2hlbiB0aGUgaGFuZGxlIGlzIGZvY3VzYWJsZVxuICAgICAgdGFiSW5kZXg6IGlzSGFuZGxlQ3ljbGUgJiYgaXNTaGVldE1vZGFsV2l0aEhhbmRsZSA/IDAgOiAtMVxuICAgIH0sIGh0bWxBdHRyaWJ1dGVzLCB7XG4gICAgICBzdHlsZToge1xuICAgICAgICB6SW5kZXg6IGAkezIwMDAwICsgdGhpcy5vdmVybGF5SW5kZXh9YFxuICAgICAgfSxcbiAgICAgIGNsYXNzOiBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgW21vZGVdOiB0cnVlLFxuICAgICAgICBbJ21vZGFsLWRlZmF1bHQnXTogIWlzQ2FyZE1vZGFsICYmICFpc1NoZWV0TW9kYWwsXG4gICAgICAgIFtgbW9kYWwtY2FyZGBdOiBpc0NhcmRNb2RhbCxcbiAgICAgICAgW2Btb2RhbC1zaGVldGBdOiBpc1NoZWV0TW9kYWwsXG4gICAgICAgIFtgbW9kYWwtbm8tZXhwYW5kLXNjcm9sbGBdOiBpc1NoZWV0TW9kYWwgJiYgIWV4cGFuZFRvU2Nyb2xsLFxuICAgICAgICAnb3ZlcmxheS1oaWRkZW4nOiB0cnVlLFxuICAgICAgICBbRk9DVVNfVFJBUF9ESVNBQkxFX0NMQVNTXTogZm9jdXNUcmFwID09PSBmYWxzZVxuICAgICAgfSwgZ2V0Q2xhc3NNYXAodGhpcy5jc3NDbGFzcykpLFxuICAgICAgb25Jb25CYWNrZHJvcFRhcDogdGhpcy5vbkJhY2tkcm9wVGFwLFxuICAgICAgb25Jb25Nb2RhbERpZFByZXNlbnQ6IHRoaXMub25MaWZlY3ljbGUsXG4gICAgICBvbklvbk1vZGFsV2lsbFByZXNlbnQ6IHRoaXMub25MaWZlY3ljbGUsXG4gICAgICBvbklvbk1vZGFsV2lsbERpc21pc3M6IHRoaXMub25MaWZlY3ljbGUsXG4gICAgICBvbklvbk1vZGFsRGlkRGlzbWlzczogdGhpcy5vbkxpZmVjeWNsZSxcbiAgICAgIG9uRm9jdXM6IHRoaXMub25Nb2RhbEZvY3VzXG4gICAgfSksIGgoXCJpb24tYmFja2Ryb3BcIiwge1xuICAgICAga2V5OiAnZTVlYWUyYzE0ZjgzMGY3NWUzMDhmY2Q3ZjRjMTBjODZmYWM1Yjk2MicsXG4gICAgICByZWY6IGVsID0+IHRoaXMuYmFja2Ryb3BFbCA9IGVsLFxuICAgICAgdmlzaWJsZTogdGhpcy5zaG93QmFja2Ryb3AsXG4gICAgICB0YXBwYWJsZTogdGhpcy5iYWNrZHJvcERpc21pc3MsXG4gICAgICBwYXJ0OiBcImJhY2tkcm9wXCJcbiAgICB9KSwgbW9kZSA9PT0gJ2lvcycgJiYgaChcImRpdlwiLCB7XG4gICAgICBrZXk6ICdlMjY4ZjljZDMxMGMzY2Y0ZTA1MWI1YjkyNTI0Y2U0ZmI3MGQwMDVlJyxcbiAgICAgIGNsYXNzOiBcIm1vZGFsLXNoYWRvd1wiXG4gICAgfSksIGgoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgICBrZXk6ICc5YzM4MGYzNmMxODE0NGMxNTMwNzdiMTU3NDRkMWMzMzQ2YmNlNjNlJyxcbiAgICAgIC8qXG4gICAgICAgIHJvbGUgYW5kIGFyaWEtbW9kYWwgbXVzdCBiZSB1c2VkIG9uIHRoZVxuICAgICAgICBzYW1lIGVsZW1lbnQuIFRoZXkgbXVzdCBhbHNvIGJlIHNldCBpbnNpZGUgdGhlXG4gICAgICAgIHNoYWRvdyBET00gb3RoZXJ3aXNlIGlvbi1idXR0b24gd2lsbCBub3QgYmUgaGlnaGxpZ2h0ZWRcbiAgICAgICAgd2hlbiB1c2luZyBWb2ljZU92ZXI6IGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yNDcxMzRcbiAgICAgICovXG4gICAgICByb2xlOiBcImRpYWxvZ1wiXG4gICAgfSwgaW5oZXJpdGVkQXR0cmlidXRlcywge1xuICAgICAgXCJhcmlhLW1vZGFsXCI6IFwidHJ1ZVwiLFxuICAgICAgY2xhc3M6IFwibW9kYWwtd3JhcHBlciBpb24tb3ZlcmxheS13cmFwcGVyXCIsXG4gICAgICBwYXJ0OiBcImNvbnRlbnRcIixcbiAgICAgIHJlZjogZWwgPT4gdGhpcy53cmFwcGVyRWwgPSBlbFxuICAgIH0pLCBzaG93SGFuZGxlICYmIGgoXCJidXR0b25cIiwge1xuICAgICAga2V5OiAnMmQ1ZWU2ZDU5NTlkOTczMDljMzA2ZThjZTcyZWIwZjJjMTliZTE0NCcsXG4gICAgICBjbGFzczogXCJtb2RhbC1oYW5kbGVcIixcbiAgICAgIC8vIFByZXZlbnRzIHRoZSBoYW5kbGUgZnJvbSByZWNlaXZpbmcga2V5Ym9hcmQgZm9jdXMgd2hlbiBpdCBkb2VzIG5vdCBjeWNsZVxuICAgICAgdGFiSW5kZXg6ICFpc0hhbmRsZUN5Y2xlID8gLTEgOiAwLFxuICAgICAgXCJhcmlhLWxhYmVsXCI6IFwiQWN0aXZhdGUgdG8gYWRqdXN0IHRoZSBzaXplIG9mIHRoZSBkaWFsb2cgb3ZlcmxheWluZyB0aGUgc2NyZWVuXCIsXG4gICAgICBvbkNsaWNrOiBpc0hhbmRsZUN5Y2xlID8gdGhpcy5vbkhhbmRsZUNsaWNrIDogdW5kZWZpbmVkLFxuICAgICAgcGFydDogXCJoYW5kbGVcIixcbiAgICAgIHJlZjogZWwgPT4gdGhpcy5kcmFnSGFuZGxlRWwgPSBlbFxuICAgIH0pLCBoKFwic2xvdFwiLCB7XG4gICAgICBrZXk6ICc1NTkwNDM0YzM1ZWEwNGM0MmZjMDA2NDk4YmMxODkwMzhlMTVhMjk4JyxcbiAgICAgIG9uU2xvdGNoYW5nZTogdGhpcy5vblNsb3RDaGFuZ2VcbiAgICB9KSkpO1xuICB9XG4gIGdldCBlbCgpIHtcbiAgICByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBcImlzT3BlblwiOiBbXCJvbklzT3BlbkNoYW5nZVwiXSxcbiAgICAgIFwidHJpZ2dlclwiOiBbXCJ0cmlnZ2VyQ2hhbmdlZFwiXVxuICAgIH07XG4gIH1cbn07XG5jb25zdCBMSUZFQ1lDTEVfTUFQID0ge1xuICBpb25Nb2RhbERpZFByZXNlbnQ6ICdpb25WaWV3RGlkRW50ZXInLFxuICBpb25Nb2RhbFdpbGxQcmVzZW50OiAnaW9uVmlld1dpbGxFbnRlcicsXG4gIGlvbk1vZGFsV2lsbERpc21pc3M6ICdpb25WaWV3V2lsbExlYXZlJyxcbiAgaW9uTW9kYWxEaWREaXNtaXNzOiAnaW9uVmlld0RpZExlYXZlJ1xufTtcbk1vZGFsLnN0eWxlID0ge1xuICBpb3M6IG1vZGFsSW9zQ3NzLFxuICBtZDogbW9kYWxNZENzc1xufTtcbmV4cG9ydCB7IE1vZGFsIGFzIGlvbl9tb2RhbCB9OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBLElBQUk7QUFBQSxDQUNILFNBQVVBLFFBQU87QUFDaEIsRUFBQUEsT0FBTSxNQUFNLElBQUk7QUFDaEIsRUFBQUEsT0FBTSxPQUFPLElBQUk7QUFDakIsRUFBQUEsT0FBTSxTQUFT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
