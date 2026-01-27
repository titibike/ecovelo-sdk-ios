import {
  SPINNERS
} from "./chunk-UIVJRARY.js";
import {
  ION_CONTENT_CLASS_SELECTOR,
  ION_CONTENT_ELEMENT_SELECTOR,
  getScrollElement,
  printIonContentErrorMsg
} from "./chunk-WRI2MF6U.js";
import {
  arrowDown,
  caretBackSharp
} from "./chunk-D4BGZ3LF.js";
import {
  ImpactStyle,
  hapticImpact
} from "./chunk-QINLMX2Z.js";
import "./chunk-VZXYYFOL.js";
import {
  getTimeGivenProgression
} from "./chunk-H7W7X3R4.js";
import {
  ENABLE_HTML_CONTENT_DEFAULT,
  sanitizeDOMString
} from "./chunk-644FBQT2.js";
import {
  getIonMode
} from "./chunk-TXLH22R2.js";
import {
  createAnimation
} from "./chunk-2BRJTTQT.js";
import {
  clamp,
  componentOnReady,
  getElementRoot,
  raf,
  transitionEndAsync
} from "./chunk-RZR7LWTQ.js";
import "./chunk-YSZWGYJT.js";
import {
  Host,
  config,
  createEvent,
  getElement,
  h,
  printIonError,
  readTask,
  registerInstance,
  writeTask
} from "./chunk-BFPTXCSH.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js
var getRefresherAnimationType = (contentEl) => {
  const previousSibling = contentEl.previousElementSibling;
  const hasHeader = previousSibling !== null && previousSibling.tagName === "ION-HEADER";
  return hasHeader ? "translate" : "scale";
};
var createPullingAnimation = (type, pullingSpinner, refresherEl) => {
  return type === "scale" ? createScaleAnimation(pullingSpinner, refresherEl) : createTranslateAnimation(pullingSpinner, refresherEl);
};
var createBaseAnimation = (pullingRefresherIcon) => {
  const spinner = pullingRefresherIcon.querySelector("ion-spinner");
  const circle = spinner.shadowRoot.querySelector("circle");
  const spinnerArrowContainer = pullingRefresherIcon.querySelector(".spinner-arrow-container");
  const arrowContainer = pullingRefresherIcon.querySelector(".arrow-container");
  const arrow = arrowContainer ? arrowContainer.querySelector("ion-icon") : null;
  const baseAnimation = createAnimation().duration(1e3).easing("ease-out");
  const spinnerArrowContainerAnimation = createAnimation().addElement(spinnerArrowContainer).keyframes([{
    offset: 0,
    opacity: "0.3"
  }, {
    offset: 0.45,
    opacity: "0.3"
  }, {
    offset: 0.55,
    opacity: "1"
  }, {
    offset: 1,
    opacity: "1"
  }]);
  const circleInnerAnimation = createAnimation().addElement(circle).keyframes([{
    offset: 0,
    strokeDasharray: "1px, 200px"
  }, {
    offset: 0.2,
    strokeDasharray: "1px, 200px"
  }, {
    offset: 0.55,
    strokeDasharray: "100px, 200px"
  }, {
    offset: 1,
    strokeDasharray: "100px, 200px"
  }]);
  const circleOuterAnimation = createAnimation().addElement(spinner).keyframes([{
    offset: 0,
    transform: "rotate(-90deg)"
  }, {
    offset: 1,
    transform: "rotate(210deg)"
  }]);
  if (arrowContainer && arrow) {
    const arrowContainerAnimation = createAnimation().addElement(arrowContainer).keyframes([{
      offset: 0,
      transform: "rotate(0deg)"
    }, {
      offset: 0.3,
      transform: "rotate(0deg)"
    }, {
      offset: 0.55,
      transform: "rotate(280deg)"
    }, {
      offset: 1,
      transform: "rotate(400deg)"
    }]);
    const arrowAnimation = createAnimation().addElement(arrow).keyframes([{
      offset: 0,
      transform: "translateX(2px) scale(0)"
    }, {
      offset: 0.3,
      transform: "translateX(2px) scale(0)"
    }, {
      offset: 0.55,
      transform: "translateX(-1.5px) scale(1)"
    }, {
      offset: 1,
      transform: "translateX(-1.5px) scale(1)"
    }]);
    baseAnimation.addAnimation([arrowContainerAnimation, arrowAnimation]);
  }
  return baseAnimation.addAnimation([spinnerArrowContainerAnimation, circleInnerAnimation, circleOuterAnimation]);
};
var createScaleAnimation = (pullingRefresherIcon, refresherEl) => {
  const height = refresherEl.clientHeight;
  const spinnerAnimation = createAnimation().addElement(pullingRefresherIcon).keyframes([{
    offset: 0,
    transform: `scale(0) translateY(-${height}px)`
  }, {
    offset: 1,
    transform: "scale(1) translateY(100px)"
  }]);
  return createBaseAnimation(pullingRefresherIcon).addAnimation([spinnerAnimation]);
};
var createTranslateAnimation = (pullingRefresherIcon, refresherEl) => {
  const height = refresherEl.clientHeight;
  const spinnerAnimation = createAnimation().addElement(pullingRefresherIcon).keyframes([{
    offset: 0,
    transform: `translateY(-${height}px)`
  }, {
    offset: 1,
    transform: "translateY(100px)"
  }]);
  return createBaseAnimation(pullingRefresherIcon).addAnimation([spinnerAnimation]);
};
var createSnapBackAnimation = (pullingRefresherIcon) => {
  return createAnimation().duration(125).addElement(pullingRefresherIcon).fromTo("transform", "translateY(var(--ion-pulling-refresher-translate, 100px))", "translateY(0px)");
};
var setSpinnerOpacity = (spinner, opacity) => {
  spinner.style.setProperty("opacity", opacity.toString());
};
var handleScrollWhilePulling = (ticks, numTicks, pullAmount) => {
  const max = 1;
  writeTask(() => {
    ticks.forEach((el, i) => {
      const min = i * (max / numTicks);
      const range = max - min;
      const start = pullAmount - min;
      const progression = clamp(0, start / range, 1);
      el.style.setProperty("opacity", progression.toString());
    });
  });
};
var handleScrollWhileRefreshing = (spinner, lastVelocityY) => {
  writeTask(() => {
    spinner.style.setProperty("--refreshing-rotation-duration", lastVelocityY >= 1 ? "0.5s" : "2s");
    spinner.style.setProperty("opacity", "1");
  });
};
var translateElement = (el, value, duration = 200) => {
  if (!el) {
    return Promise.resolve();
  }
  const trans = transitionEndAsync(el, duration);
  writeTask(() => {
    el.style.setProperty("transition", `${duration}ms all ease-out`);
    if (value === void 0) {
      el.style.removeProperty("transform");
    } else {
      el.style.setProperty("transform", `translate3d(0px, ${value}, 0px)`);
    }
  });
  return trans;
};
var supportsRubberBandScrolling = () => {
  return navigator.maxTouchPoints > 0 && CSS.supports("background: -webkit-named-image(apple-pay-logo-black)");
};
var shouldUseNativeRefresher = (referenceEl, mode) => __async(null, null, function* () {
  const refresherContent = referenceEl.querySelector("ion-refresher-content");
  if (!refresherContent) {
    return Promise.resolve(false);
  }
  yield new Promise((resolve) => componentOnReady(refresherContent, resolve));
  const pullingSpinner = referenceEl.querySelector("ion-refresher-content .refresher-pulling ion-spinner");
  const refreshingSpinner = referenceEl.querySelector("ion-refresher-content .refresher-refreshing ion-spinner");
  return pullingSpinner !== null && refreshingSpinner !== null && (mode === "ios" && supportsRubberBandScrolling() || mode === "md");
});
var refresherIosCss = "ion-refresher{top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}ion-refresher{inset-inline-start:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}:host-context([dir=rtl]) .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}[dir=rtl] .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}@supports selector(:dir(rtl)){.refresher-pulling-icon:dir(rtl),.refresher-refreshing-icon:dir(rtl){-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-ios .refresher-pulling-icon,.refresher-ios .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-ios .refresher-pulling-text,.refresher-ios .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-lines-ios line,.refresher-ios .refresher-refreshing .spinner-lines-small-ios line,.refresher-ios .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-bubbles circle,.refresher-ios .refresher-refreshing .spinner-circles circle,.refresher-ios .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0}.refresher-native .refresher-refreshing ion-spinner{--refreshing-rotation-duration:2s;display:none;-webkit-animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards;animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards}.refresher-native .refresher-refreshing{display:none;-webkit-animation:250ms linear refresher-pop forwards;animation:250ms linear refresher-pop forwards}.refresher-native ion-spinner{width:32px;height:32px;color:var(--ion-color-step-450, var(--ion-background-color-step-450, #747577))}.refresher-native.refresher-refreshing .refresher-pulling ion-spinner,.refresher-native.refresher-completing .refresher-pulling ion-spinner{display:none}.refresher-native.refresher-refreshing .refresher-refreshing ion-spinner,.refresher-native.refresher-completing .refresher-refreshing ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-pulling ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-refreshing ion-spinner{display:none}.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0) rotate(180deg);transform:scale(0) rotate(180deg);-webkit-transition:300ms;transition:300ms}@-webkit-keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}";
var refresherMdCss = "ion-refresher{top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}ion-refresher{inset-inline-start:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}:host-context([dir=rtl]) .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}[dir=rtl] .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}@supports selector(:dir(rtl)){.refresher-pulling-icon:dir(rtl),.refresher-refreshing-icon:dir(rtl){-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-md .refresher-pulling-icon,.refresher-md .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-md .refresher-pulling-text,.refresher-md .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-lines-md line,.refresher-md .refresher-refreshing .spinner-lines-small-md line,.refresher-md .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-bubbles circle,.refresher-md .refresher-refreshing .spinner-circles circle,.refresher-md .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;width:24px;height:24px;color:var(--ion-color-primary, #0054e9)}ion-refresher.refresher-native .spinner-arrow-container{display:inherit}ion-refresher.refresher-native .arrow-container{display:block;position:absolute;width:24px;height:24px}ion-refresher.refresher-native .arrow-container ion-icon{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;left:0;right:0;bottom:-4px;position:absolute;color:var(--ion-color-primary, #0054e9);font-size:12px}ion-refresher.refresher-native.refresher-pulling ion-refresher-content .refresher-pulling,ion-refresher.refresher-native.refresher-ready ion-refresher-content .refresher-pulling{display:-ms-flexbox;display:flex}ion-refresher.refresher-native.refresher-refreshing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-cancelling ion-refresher-content .refresher-refreshing{display:-ms-flexbox;display:flex}ion-refresher.refresher-native .refresher-pulling-icon{-webkit-transform:translateY(calc(-100% - 10px));transform:translateY(calc(-100% - 10px))}ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;border-radius:100%;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;display:-ms-flexbox;display:flex;border:1px solid var(--ion-color-step-200, var(--ion-background-color-step-200, #ececec));background:var(--ion-color-step-250, var(--ion-background-color-step-250, #ffffff));-webkit-box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1);box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1)}";
var Refresher = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionRefresh = createEvent(this, "ionRefresh", 7);
    this.ionPull = createEvent(this, "ionPull", 7);
    this.ionStart = createEvent(this, "ionStart", 7);
    this.appliedStyles = false;
    this.didStart = false;
    this.progress = 0;
    this.pointerDown = false;
    this.needsCompletion = false;
    this.didRefresh = false;
    this.contentFullscreen = false;
    this.lastVelocityY = 0;
    this.animations = [];
    this.nativeRefresher = false;
    this.state = 1;
    this.pullMin = 60;
    this.pullMax = this.pullMin + 60;
    this.closeDuration = "280ms";
    this.snapbackDuration = "280ms";
    this.pullFactor = 1;
    this.disabled = false;
  }
  disabledChanged() {
    if (this.gesture) {
      this.gesture.enable(!this.disabled);
    }
  }
  checkNativeRefresher() {
    return __async(this, null, function* () {
      const useNativeRefresher = yield shouldUseNativeRefresher(this.el, getIonMode(this));
      if (useNativeRefresher && !this.nativeRefresher) {
        const contentEl = this.el.closest("ion-content");
        this.setupNativeRefresher(contentEl);
      } else if (!useNativeRefresher) {
        this.destroyNativeRefresher();
      }
    });
  }
  destroyNativeRefresher() {
    if (this.scrollEl && this.scrollListenerCallback) {
      this.scrollEl.removeEventListener("scroll", this.scrollListenerCallback);
      this.scrollListenerCallback = void 0;
    }
    this.nativeRefresher = false;
  }
  resetNativeRefresher(el, state) {
    return __async(this, null, function* () {
      this.state = state;
      if (getIonMode(this) === "ios") {
        yield translateElement(el, void 0, 300);
      } else {
        yield transitionEndAsync(this.el.querySelector(".refresher-refreshing-icon"), 200);
      }
      this.didRefresh = false;
      this.needsCompletion = false;
      this.pointerDown = false;
      this.animations.forEach((ani) => ani.destroy());
      this.animations = [];
      this.progress = 0;
      this.state = 1;
    });
  }
  setupiOSNativeRefresher(pullingSpinner, refreshingSpinner) {
    return __async(this, null, function* () {
      this.elementToTransform = this.scrollEl;
      const ticks = pullingSpinner.shadowRoot.querySelectorAll("svg");
      let MAX_PULL = this.scrollEl.clientHeight * 0.16;
      const NUM_TICKS = ticks.length;
      writeTask(() => ticks.forEach((el) => el.style.setProperty("animation", "none")));
      this.scrollListenerCallback = () => {
        if (!this.pointerDown && this.state === 1) {
          return;
        }
        readTask(() => {
          const scrollTop = this.scrollEl.scrollTop;
          const refresherHeight = this.el.clientHeight;
          if (scrollTop > 0) {
            if (this.state === 8) {
              const ratio = clamp(0, scrollTop / (refresherHeight * 0.5), 1);
              writeTask(() => setSpinnerOpacity(refreshingSpinner, 1 - ratio));
              return;
            }
            return;
          }
          if (this.pointerDown) {
            if (!this.didStart) {
              this.didStart = true;
              this.ionStart.emit();
            }
            if (this.pointerDown) {
              this.ionPull.emit();
            }
          }
          const offset = this.didStart ? 30 : 0;
          const pullAmount = this.progress = clamp(0, (Math.abs(scrollTop) - offset) / MAX_PULL, 1);
          const shouldShowRefreshingSpinner = this.state === 8 || pullAmount === 1;
          if (shouldShowRefreshingSpinner) {
            if (this.pointerDown) {
              handleScrollWhileRefreshing(refreshingSpinner, this.lastVelocityY);
            }
            if (!this.didRefresh) {
              this.beginRefresh();
              this.didRefresh = true;
              hapticImpact({
                style: ImpactStyle.Light
              });
              const activeElement = document.activeElement;
              if ((activeElement === null || activeElement === void 0 ? void 0 : activeElement.blur) !== void 0) {
                activeElement.blur();
              }
              if (!this.pointerDown) {
                translateElement(this.elementToTransform, `${refresherHeight}px`);
              }
            }
          } else {
            this.state = 2;
            handleScrollWhilePulling(ticks, NUM_TICKS, pullAmount);
          }
        });
      };
      this.scrollEl.addEventListener("scroll", this.scrollListenerCallback);
      this.gesture = (yield import("./index-CfgBF1SE-H675UNH5.js")).createGesture({
        el: this.scrollEl,
        gestureName: "refresher",
        gesturePriority: 31,
        direction: "y",
        threshold: 5,
        onStart: () => {
          this.pointerDown = true;
          if (!this.didRefresh) {
            translateElement(this.elementToTransform, "0px");
          }
          if (MAX_PULL === 0) {
            MAX_PULL = this.scrollEl.clientHeight * 0.16;
          }
        },
        onMove: (ev) => {
          this.lastVelocityY = ev.velocityY;
        },
        onEnd: () => {
          this.pointerDown = false;
          this.didStart = false;
          if (this.needsCompletion) {
            this.resetNativeRefresher(
              this.elementToTransform,
              32
              /* RefresherState.Completing */
            );
            this.needsCompletion = false;
          } else if (this.didRefresh) {
            readTask(() => translateElement(this.elementToTransform, `${this.el.clientHeight}px`));
          }
        }
      });
      this.disabledChanged();
    });
  }
  setupMDNativeRefresher(contentEl, pullingSpinner, refreshingSpinner) {
    return __async(this, null, function* () {
      const circle = getElementRoot(pullingSpinner).querySelector("circle");
      const pullingRefresherIcon = this.el.querySelector("ion-refresher-content .refresher-pulling-icon");
      const refreshingCircle = getElementRoot(refreshingSpinner).querySelector("circle");
      if (circle !== null && refreshingCircle !== null) {
        writeTask(() => {
          circle.style.setProperty("animation", "none");
          refreshingSpinner.style.setProperty("animation-delay", "-655ms");
          refreshingCircle.style.setProperty("animation-delay", "-655ms");
        });
      }
      this.gesture = (yield import("./index-CfgBF1SE-H675UNH5.js")).createGesture({
        el: this.scrollEl,
        gestureName: "refresher",
        gesturePriority: 31,
        direction: "y",
        threshold: 5,
        canStart: () => this.state !== 8 && this.state !== 32 && this.scrollEl.scrollTop === 0,
        onStart: (ev) => {
          this.progress = 0;
          ev.data = {
            animation: void 0,
            didStart: false,
            cancelled: false
          };
        },
        onMove: (ev) => {
          if (ev.velocityY < 0 && this.progress === 0 && !ev.data.didStart || ev.data.cancelled) {
            ev.data.cancelled = true;
            return;
          }
          if (!ev.data.didStart) {
            ev.data.didStart = true;
            this.state = 2;
            const {
              scrollEl
            } = this;
            const overflowProperty = scrollEl.matches(ION_CONTENT_CLASS_SELECTOR) ? "overflow" : "--overflow";
            writeTask(() => scrollEl.style.setProperty(overflowProperty, "hidden"));
            const animationType = getRefresherAnimationType(contentEl);
            const animation = createPullingAnimation(animationType, pullingRefresherIcon, this.el);
            ev.data.animation = animation;
            animation.progressStart(false, 0);
            this.ionStart.emit();
            this.animations.push(animation);
            return;
          }
          this.progress = clamp(0, ev.deltaY / 180 * 0.5, 1);
          ev.data.animation.progressStep(this.progress);
          this.ionPull.emit();
        },
        onEnd: (ev) => {
          if (!ev.data.didStart) {
            return;
          }
          this.gesture.enable(false);
          const {
            scrollEl
          } = this;
          const overflowProperty = scrollEl.matches(ION_CONTENT_CLASS_SELECTOR) ? "overflow" : "--overflow";
          writeTask(() => scrollEl.style.removeProperty(overflowProperty));
          if (this.progress <= 0.4) {
            ev.data.animation.progressEnd(0, this.progress, 500).onFinish(() => {
              this.animations.forEach((ani) => ani.destroy());
              this.animations = [];
              this.gesture.enable(true);
              this.state = 1;
            });
            return;
          }
          const progress = getTimeGivenProgression([0, 0], [0, 0], [1, 1], [1, 1], this.progress)[0];
          const snapBackAnimation = createSnapBackAnimation(pullingRefresherIcon);
          this.animations.push(snapBackAnimation);
          writeTask(() => __async(this, null, function* () {
            pullingRefresherIcon.style.setProperty("--ion-pulling-refresher-translate", `${progress * 100}px`);
            ev.data.animation.progressEnd();
            yield snapBackAnimation.play();
            this.beginRefresh();
            ev.data.animation.destroy();
            this.gesture.enable(true);
          }));
        }
      });
      this.disabledChanged();
    });
  }
  setupNativeRefresher(contentEl) {
    return __async(this, null, function* () {
      if (this.scrollListenerCallback || !contentEl || this.nativeRefresher || !this.scrollEl) {
        return;
      }
      this.setCss(0, "", false, "");
      this.nativeRefresher = true;
      const pullingSpinner = this.el.querySelector("ion-refresher-content .refresher-pulling ion-spinner");
      const refreshingSpinner = this.el.querySelector("ion-refresher-content .refresher-refreshing ion-spinner");
      if (getIonMode(this) === "ios") {
        this.setupiOSNativeRefresher(pullingSpinner, refreshingSpinner);
      } else {
        this.setupMDNativeRefresher(contentEl, pullingSpinner, refreshingSpinner);
      }
    });
  }
  componentDidUpdate() {
    this.checkNativeRefresher();
  }
  connectedCallback() {
    return __async(this, null, function* () {
      if (this.el.getAttribute("slot") !== "fixed") {
        printIonError('[ion-refresher] - Make sure you use: <ion-refresher slot="fixed">');
        return;
      }
      const contentEl = this.el.closest(ION_CONTENT_ELEMENT_SELECTOR);
      if (!contentEl) {
        printIonContentErrorMsg(this.el);
        return;
      }
      componentOnReady(contentEl, () => __async(this, null, function* () {
        const customScrollTarget = contentEl.querySelector(ION_CONTENT_CLASS_SELECTOR);
        this.scrollEl = yield getScrollElement(customScrollTarget !== null && customScrollTarget !== void 0 ? customScrollTarget : contentEl);
        this.backgroundContentEl = yield contentEl.getBackgroundElement();
        this.contentFullscreen = contentEl.fullscreen;
        if (yield shouldUseNativeRefresher(this.el, getIonMode(this))) {
          this.setupNativeRefresher(contentEl);
        } else {
          this.gesture = (yield import("./index-CfgBF1SE-H675UNH5.js")).createGesture({
            el: contentEl,
            gestureName: "refresher",
            gesturePriority: 31,
            direction: "y",
            threshold: 20,
            passive: false,
            canStart: () => this.canStart(),
            onStart: () => this.onStart(),
            onMove: (ev) => this.onMove(ev),
            onEnd: () => this.onEnd()
          });
          this.disabledChanged();
        }
      }));
    });
  }
  disconnectedCallback() {
    this.destroyNativeRefresher();
    this.scrollEl = void 0;
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = void 0;
    }
  }
  /**
   * Call `complete()` when your async operation has completed.
   * For example, the `refreshing` state is while the app is performing
   * an asynchronous operation, such as receiving more data from an
   * AJAX request. Once the data has been received, you then call this
   * method to signify that the refreshing has completed and to close
   * the refresher. This method also changes the refresher's state from
   * `refreshing` to `completing`.
   */
  complete() {
    return __async(this, null, function* () {
      if (this.nativeRefresher) {
        this.needsCompletion = true;
        if (!this.pointerDown) {
          raf(() => raf(() => this.resetNativeRefresher(
            this.elementToTransform,
            32
            /* RefresherState.Completing */
          )));
        }
      } else {
        this.close(32, "120ms");
      }
    });
  }
  /**
   * Changes the refresher's state from `refreshing` to `cancelling`.
   */
  cancel() {
    return __async(this, null, function* () {
      if (this.nativeRefresher) {
        if (!this.pointerDown) {
          raf(() => raf(() => this.resetNativeRefresher(
            this.elementToTransform,
            16
            /* RefresherState.Cancelling */
          )));
        }
      } else {
        this.close(16, "");
      }
    });
  }
  /**
   * A number representing how far down the user has pulled.
   * The number `0` represents the user hasn't pulled down at all. The
   * number `1`, and anything greater than `1`, represents that the user
   * has pulled far enough down that when they let go then the refresh will
   * happen. If they let go and the number is less than `1`, then the
   * refresh will not happen, and the content will return to it's original
   * position.
   */
  getProgress() {
    return Promise.resolve(this.progress);
  }
  canStart() {
    if (!this.scrollEl) {
      return false;
    }
    if (this.state !== 1) {
      return false;
    }
    if (this.scrollEl.scrollTop > 0) {
      return false;
    }
    return true;
  }
  onStart() {
    this.progress = 0;
    this.state = 1;
    this.memoizeOverflowStyle();
    if (this.contentFullscreen && this.backgroundContentEl) {
      this.backgroundContentEl.style.setProperty("--offset-top", "0px");
    }
  }
  onMove(detail) {
    if (!this.scrollEl) {
      return;
    }
    const ev = detail.event;
    if (ev.touches !== void 0 && ev.touches.length > 1) {
      return;
    }
    if ((this.state & 56) !== 0) {
      return;
    }
    const pullFactor = Number.isNaN(this.pullFactor) || this.pullFactor < 0 ? 1 : this.pullFactor;
    const deltaY = detail.deltaY * pullFactor;
    if (deltaY <= 0) {
      this.progress = 0;
      this.state = 1;
      if (this.appliedStyles) {
        this.setCss(0, "", false, "");
        return;
      }
      return;
    }
    if (this.state === 1) {
      const scrollHostScrollTop = this.scrollEl.scrollTop;
      if (scrollHostScrollTop > 0) {
        this.progress = 0;
        return;
      }
      this.state = 2;
    }
    if (ev.cancelable) {
      ev.preventDefault();
    }
    this.setCss(deltaY, "0ms", true, "");
    if (deltaY === 0) {
      this.progress = 0;
      return;
    }
    const pullMin = this.pullMin;
    this.progress = deltaY / pullMin;
    if (!this.didStart) {
      this.didStart = true;
      this.ionStart.emit();
    }
    this.ionPull.emit();
    if (deltaY < pullMin) {
      this.state = 2;
      return;
    }
    if (deltaY > this.pullMax) {
      this.beginRefresh();
      return;
    }
    this.state = 4;
    return;
  }
  onEnd() {
    if (this.state === 4) {
      this.beginRefresh();
    } else if (this.state === 2) {
      this.cancel();
    } else if (this.state === 1) {
      this.restoreOverflowStyle();
    }
  }
  beginRefresh() {
    this.state = 8;
    this.setCss(this.pullMin, this.snapbackDuration, true, "");
    const activeElement = document.activeElement;
    if ((activeElement === null || activeElement === void 0 ? void 0 : activeElement.blur) !== void 0) {
      activeElement.blur();
    }
    this.ionRefresh.emit({
      complete: this.complete.bind(this)
    });
  }
  close(state, delay) {
    setTimeout(() => {
      var _a;
      this.state = 1;
      this.progress = 0;
      this.didStart = false;
      this.setCss(0, "0ms", false, "", true);
      if (this.contentFullscreen && this.backgroundContentEl) {
        (_a = this.backgroundContentEl) === null || _a === void 0 ? void 0 : _a.style.removeProperty("--offset-top");
      }
    }, 600);
    this.state = state;
    this.setCss(0, this.closeDuration, true, delay);
  }
  setCss(y, duration, overflowVisible, delay, shouldRestoreOverflowStyle = false) {
    if (this.nativeRefresher) {
      return;
    }
    this.appliedStyles = y > 0;
    writeTask(() => {
      if (this.scrollEl && this.backgroundContentEl) {
        const scrollStyle = this.scrollEl.style;
        const backgroundStyle = this.backgroundContentEl.style;
        scrollStyle.transform = backgroundStyle.transform = y > 0 ? `translateY(${y}px) translateZ(0px)` : "";
        scrollStyle.transitionDuration = backgroundStyle.transitionDuration = duration;
        scrollStyle.transitionDelay = backgroundStyle.transitionDelay = delay;
        scrollStyle.overflow = overflowVisible ? "hidden" : "";
      }
      if (shouldRestoreOverflowStyle) {
        this.restoreOverflowStyle();
      }
    });
  }
  memoizeOverflowStyle() {
    if (this.scrollEl) {
      const {
        overflow,
        overflowX,
        overflowY
      } = this.scrollEl.style;
      this.overflowStyles = {
        overflow: overflow !== null && overflow !== void 0 ? overflow : "",
        overflowX: overflowX !== null && overflowX !== void 0 ? overflowX : "",
        overflowY: overflowY !== null && overflowY !== void 0 ? overflowY : ""
      };
    }
  }
  restoreOverflowStyle() {
    if (this.overflowStyles !== void 0 && this.scrollEl !== void 0) {
      const {
        overflow,
        overflowX,
        overflowY
      } = this.overflowStyles;
      this.scrollEl.style.overflow = overflow;
      this.scrollEl.style.overflowX = overflowX;
      this.scrollEl.style.overflowY = overflowY;
      this.overflowStyles = void 0;
    }
  }
  render() {
    const mode = getIonMode(this);
    return h(Host, {
      key: "2d1bd880877b698604542ab2d602d38b9504d975",
      slot: "fixed",
      class: {
        [mode]: true,
        // Used internally for styling
        [`refresher-${mode}`]: true,
        "refresher-native": this.nativeRefresher,
        "refresher-active": this.state !== 1,
        "refresher-pulling": this.state === 2,
        "refresher-ready": this.state === 4,
        "refresher-refreshing": this.state === 8,
        "refresher-cancelling": this.state === 16,
        "refresher-completing": this.state === 32
        /* RefresherState.Completing */
      }
    });
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "disabled": ["disabledChanged"]
    };
  }
};
Refresher.style = {
  ios: refresherIosCss,
  md: refresherMdCss
};
var RefresherContent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.customHTMLEnabled = config.get("innerHTMLTemplatesEnabled", ENABLE_HTML_CONTENT_DEFAULT);
  }
  componentWillLoad() {
    if (this.pullingIcon === void 0) {
      const hasRubberBandScrolling = supportsRubberBandScrolling();
      const mode = getIonMode(this);
      const overflowRefresher = hasRubberBandScrolling ? "lines" : arrowDown;
      this.pullingIcon = config.get("refreshingIcon", mode === "ios" && hasRubberBandScrolling ? config.get("spinner", overflowRefresher) : "circular");
    }
    if (this.refreshingSpinner === void 0) {
      const mode = getIonMode(this);
      this.refreshingSpinner = config.get("refreshingSpinner", config.get("spinner", mode === "ios" ? "lines" : "circular"));
    }
  }
  renderPullingText() {
    const {
      customHTMLEnabled,
      pullingText
    } = this;
    if (customHTMLEnabled) {
      return h("div", {
        class: "refresher-pulling-text",
        innerHTML: sanitizeDOMString(pullingText)
      });
    }
    return h("div", {
      class: "refresher-pulling-text"
    }, pullingText);
  }
  renderRefreshingText() {
    const {
      customHTMLEnabled,
      refreshingText
    } = this;
    if (customHTMLEnabled) {
      return h("div", {
        class: "refresher-refreshing-text",
        innerHTML: sanitizeDOMString(refreshingText)
      });
    }
    return h("div", {
      class: "refresher-refreshing-text"
    }, refreshingText);
  }
  render() {
    const pullingIcon = this.pullingIcon;
    const hasSpinner = pullingIcon != null && SPINNERS[pullingIcon] !== void 0;
    const mode = getIonMode(this);
    return h(Host, {
      key: "e235f8a9a84070ece2e2066ced234a64663bfa1d",
      class: mode
    }, h("div", {
      key: "9121691818ddaa35801a5f442e144ac27686cf19",
      class: "refresher-pulling"
    }, this.pullingIcon && hasSpinner && h("div", {
      key: "c8d65d740f1575041bd3b752c789077927397fe4",
      class: "refresher-pulling-icon"
    }, h("div", {
      key: "309dd904977eaa788b09ea95b7fa4996a73bec5b",
      class: "spinner-arrow-container"
    }, h("ion-spinner", {
      key: "a2a1480f67775d56ca7822e76be1e9f983bca2f9",
      name: this.pullingIcon,
      paused: true
    }), mode === "md" && this.pullingIcon === "circular" && h("div", {
      key: "811d7e06d324bf4b6a18a31427a43e5177f3ae3a",
      class: "arrow-container"
    }, h("ion-icon", {
      key: "86cc48e2e8dc054ff6ff1299094da35b524be63d",
      icon: caretBackSharp,
      "aria-hidden": "true"
    })))), this.pullingIcon && !hasSpinner && h("div", {
      key: "464ae097dbc95c18a2dd7dfd03f8489153dab719",
      class: "refresher-pulling-icon"
    }, h("ion-icon", {
      key: "ed6875978b9035add562caa743a68353743d978f",
      icon: this.pullingIcon,
      lazy: false,
      "aria-hidden": "true"
    })), this.pullingText !== void 0 && this.renderPullingText()), h("div", {
      key: "aff891924e44354543fec484e5cde1ca92e69904",
      class: "refresher-refreshing"
    }, this.refreshingSpinner && h("div", {
      key: "842d7ac4ff10a1058775493d62f31cbdcd34f7a0",
      class: "refresher-refreshing-icon"
    }, h("ion-spinner", {
      key: "8c3e6195501e7e78d5cde1e3ad1fef90fd4a953f",
      name: this.refreshingSpinner
    })), this.refreshingText !== void 0 && this.renderRefreshingText()));
  }
  get el() {
    return getElement(this);
  }
};
export {
  Refresher as ion_refresher,
  RefresherContent as ion_refresher_content
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-refresher_2.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tcmVmcmVzaGVyXzIuZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydCB7IHcgYXMgd3JpdGVUYXNrLCByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgY3JlYXRlRXZlbnQsIGEgYXMgcmVhZFRhc2ssIGogYXMgcHJpbnRJb25FcnJvciwgaCwgZCBhcyBIb3N0LCBnIGFzIGdldEVsZW1lbnQsIGUgYXMgY29uZmlnIH0gZnJvbSAnLi9pbmRleC00RHhZNl9nRy5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldFRpbWVHaXZlblByb2dyZXNzaW9uIH0gZnJvbSAnLi9jdWJpYy1iZXppZXItaEhtWUxPZkUuanMnO1xuaW1wb3J0IHsgSSBhcyBJT05fQ09OVEVOVF9DTEFTU19TRUxFQ1RPUiwgYiBhcyBJT05fQ09OVEVOVF9FTEVNRU5UX1NFTEVDVE9SLCBwIGFzIHByaW50SW9uQ29udGVudEVycm9yTXNnLCBnIGFzIGdldFNjcm9sbEVsZW1lbnQgfSBmcm9tICcuL2luZGV4LTdVYlNsdjdOLmpzJztcbmltcG9ydCB7IGMgYXMgY29tcG9uZW50T25SZWFkeSwgdCBhcyB0cmFuc2l0aW9uRW5kQXN5bmMsIGUgYXMgY2xhbXAsIGcgYXMgZ2V0RWxlbWVudFJvb3QsIHIgYXMgcmFmIH0gZnJvbSAnLi9oZWxwZXJzLThLU1FRR1F5LmpzJztcbmltcG9ydCB7IGQgYXMgaGFwdGljSW1wYWN0LCBJIGFzIEltcGFjdFN0eWxlIH0gZnJvbSAnLi9oYXB0aWMtRHpBTVdKdWsuanMnO1xuaW1wb3J0IHsgYiBhcyBnZXRJb25Nb2RlIH0gZnJvbSAnLi9pb25pYy1nbG9iYWwtQ1RTeXVmaEYuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVBbmltYXRpb24gfSBmcm9tICcuL2FuaW1hdGlvbi1CdmhBdGdjYS5qcyc7XG5pbXBvcnQgeyBFIGFzIEVOQUJMRV9IVE1MX0NPTlRFTlRfREVGQVVMVCwgYSBhcyBzYW5pdGl6ZURPTVN0cmluZyB9IGZyb20gJy4vY29uZmlnLUR4XzZ3UElKLmpzJztcbmltcG9ydCB7IGggYXMgYXJyb3dEb3duLCBpIGFzIGNhcmV0QmFja1NoYXJwIH0gZnJvbSAnLi9pbmRleC1EVjNzSkpXOC5qcyc7XG5pbXBvcnQgeyBTIGFzIFNQSU5ORVJTIH0gZnJvbSAnLi9zcGlubmVyLWNvbmZpZ3MtRDRSSXA3MEUuanMnO1xuaW1wb3J0ICcuL2NhcGFjaXRvci1DRkVSSWVhVS5qcyc7XG5pbXBvcnQgJy4vaW5kZXgtWmpQNENqZVouanMnO1xuY29uc3QgZ2V0UmVmcmVzaGVyQW5pbWF0aW9uVHlwZSA9IGNvbnRlbnRFbCA9PiB7XG4gIGNvbnN0IHByZXZpb3VzU2libGluZyA9IGNvbnRlbnRFbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICBjb25zdCBoYXNIZWFkZXIgPSBwcmV2aW91c1NpYmxpbmcgIT09IG51bGwgJiYgcHJldmlvdXNTaWJsaW5nLnRhZ05hbWUgPT09ICdJT04tSEVBREVSJztcbiAgcmV0dXJuIGhhc0hlYWRlciA/ICd0cmFuc2xhdGUnIDogJ3NjYWxlJztcbn07XG5jb25zdCBjcmVhdGVQdWxsaW5nQW5pbWF0aW9uID0gKHR5cGUsIHB1bGxpbmdTcGlubmVyLCByZWZyZXNoZXJFbCkgPT4ge1xuICByZXR1cm4gdHlwZSA9PT0gJ3NjYWxlJyA/IGNyZWF0ZVNjYWxlQW5pbWF0aW9uKHB1bGxpbmdTcGlubmVyLCByZWZyZXNoZXJFbCkgOiBjcmVhdGVUcmFuc2xhdGVBbmltYXRpb24ocHVsbGluZ1NwaW5uZXIsIHJlZnJlc2hlckVsKTtcbn07XG5jb25zdCBjcmVhdGVCYXNlQW5pbWF0aW9uID0gcHVsbGluZ1JlZnJlc2hlckljb24gPT4ge1xuICBjb25zdCBzcGlubmVyID0gcHVsbGluZ1JlZnJlc2hlckljb24ucXVlcnlTZWxlY3RvcignaW9uLXNwaW5uZXInKTtcbiAgY29uc3QgY2lyY2xlID0gc3Bpbm5lci5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJ2NpcmNsZScpO1xuICBjb25zdCBzcGlubmVyQXJyb3dDb250YWluZXIgPSBwdWxsaW5nUmVmcmVzaGVySWNvbi5xdWVyeVNlbGVjdG9yKCcuc3Bpbm5lci1hcnJvdy1jb250YWluZXInKTtcbiAgY29uc3QgYXJyb3dDb250YWluZXIgPSBwdWxsaW5nUmVmcmVzaGVySWNvbi5xdWVyeVNlbGVjdG9yKCcuYXJyb3ctY29udGFpbmVyJyk7XG4gIGNvbnN0IGFycm93ID0gYXJyb3dDb250YWluZXIgPyBhcnJvd0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdpb24taWNvbicpIDogbnVsbDtcbiAgY29uc3QgYmFzZUFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpLmR1cmF0aW9uKDEwMDApLmVhc2luZygnZWFzZS1vdXQnKTtcbiAgY29uc3Qgc3Bpbm5lckFycm93Q29udGFpbmVyQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCkuYWRkRWxlbWVudChzcGlubmVyQXJyb3dDb250YWluZXIpLmtleWZyYW1lcyhbe1xuICAgIG9mZnNldDogMCxcbiAgICBvcGFjaXR5OiAnMC4zJ1xuICB9LCB7XG4gICAgb2Zmc2V0OiAwLjQ1LFxuICAgIG9wYWNpdHk6ICcwLjMnXG4gIH0sIHtcbiAgICBvZmZzZXQ6IDAuNTUsXG4gICAgb3BhY2l0eTogJzEnXG4gIH0sIHtcbiAgICBvZmZzZXQ6IDEsXG4gICAgb3BhY2l0eTogJzEnXG4gIH1dKTtcbiAgY29uc3QgY2lyY2xlSW5uZXJBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKS5hZGRFbGVtZW50KGNpcmNsZSkua2V5ZnJhbWVzKFt7XG4gICAgb2Zmc2V0OiAwLFxuICAgIHN0cm9rZURhc2hhcnJheTogJzFweCwgMjAwcHgnXG4gIH0sIHtcbiAgICBvZmZzZXQ6IDAuMixcbiAgICBzdHJva2VEYXNoYXJyYXk6ICcxcHgsIDIwMHB4J1xuICB9LCB7XG4gICAgb2Zmc2V0OiAwLjU1LFxuICAgIHN0cm9rZURhc2hhcnJheTogJzEwMHB4LCAyMDBweCdcbiAgfSwge1xuICAgIG9mZnNldDogMSxcbiAgICBzdHJva2VEYXNoYXJyYXk6ICcxMDBweCwgMjAwcHgnXG4gIH1dKTtcbiAgY29uc3QgY2lyY2xlT3V0ZXJBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKS5hZGRFbGVtZW50KHNwaW5uZXIpLmtleWZyYW1lcyhbe1xuICAgIG9mZnNldDogMCxcbiAgICB0cmFuc2Zvcm06ICdyb3RhdGUoLTkwZGVnKSdcbiAgfSwge1xuICAgIG9mZnNldDogMSxcbiAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMjEwZGVnKSdcbiAgfV0pO1xuICAvKipcbiAgICogT25seSBhZGQgYXJyb3cgYW5pbWF0aW9uIGlmIHByZXNlbnRcbiAgICogdGhpcyBhbGxvd3MgdXNlcnMgdG8gY3VzdG9taXplIHRoZSBzcGlubmVyc1xuICAgKiB3aXRob3V0IGVycm9ycyBiZWluZyB0aHJvd25cbiAgICovXG4gIGlmIChhcnJvd0NvbnRhaW5lciAmJiBhcnJvdykge1xuICAgIGNvbnN0IGFycm93Q29udGFpbmVyQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCkuYWRkRWxlbWVudChhcnJvd0NvbnRhaW5lcikua2V5ZnJhbWVzKFt7XG4gICAgICBvZmZzZXQ6IDAsXG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMGRlZyknXG4gICAgfSwge1xuICAgICAgb2Zmc2V0OiAwLjMsXG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMGRlZyknXG4gICAgfSwge1xuICAgICAgb2Zmc2V0OiAwLjU1LFxuICAgICAgdHJhbnNmb3JtOiAncm90YXRlKDI4MGRlZyknXG4gICAgfSwge1xuICAgICAgb2Zmc2V0OiAxLFxuICAgICAgdHJhbnNmb3JtOiAncm90YXRlKDQwMGRlZyknXG4gICAgfV0pO1xuICAgIGNvbnN0IGFycm93QW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCkuYWRkRWxlbWVudChhcnJvdykua2V5ZnJhbWVzKFt7XG4gICAgICBvZmZzZXQ6IDAsXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDJweCkgc2NhbGUoMCknXG4gICAgfSwge1xuICAgICAgb2Zmc2V0OiAwLjMsXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDJweCkgc2NhbGUoMCknXG4gICAgfSwge1xuICAgICAgb2Zmc2V0OiAwLjU1LFxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtMS41cHgpIHNjYWxlKDEpJ1xuICAgIH0sIHtcbiAgICAgIG9mZnNldDogMSxcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTEuNXB4KSBzY2FsZSgxKSdcbiAgICB9XSk7XG4gICAgYmFzZUFuaW1hdGlvbi5hZGRBbmltYXRpb24oW2Fycm93Q29udGFpbmVyQW5pbWF0aW9uLCBhcnJvd0FuaW1hdGlvbl0pO1xuICB9XG4gIHJldHVybiBiYXNlQW5pbWF0aW9uLmFkZEFuaW1hdGlvbihbc3Bpbm5lckFycm93Q29udGFpbmVyQW5pbWF0aW9uLCBjaXJjbGVJbm5lckFuaW1hdGlvbiwgY2lyY2xlT3V0ZXJBbmltYXRpb25dKTtcbn07XG5jb25zdCBjcmVhdGVTY2FsZUFuaW1hdGlvbiA9IChwdWxsaW5nUmVmcmVzaGVySWNvbiwgcmVmcmVzaGVyRWwpID0+IHtcbiAgLyoqXG4gICAqIERvIG5vdCB0YWtlIHRoZSBoZWlnaHQgb2YgdGhlIHJlZnJlc2hlciBpY29uXG4gICAqIGJlY2F1c2UgYXQgdGhpcyBwb2ludCB0aGUgRE9NIGhhcyBub3QgdXBkYXRlZCxcbiAgICogc28gdGhlIHJlZnJlc2hlciBpY29uIGlzIHN0aWxsIGhpZGRlbiB3aXRoXG4gICAqIGRpc3BsYXk6IG5vbmUuXG4gICAqIFRoZSBgaW9uLXJlZnJlc2hlcmAgY29udGFpbmVyIGhlaWdodFxuICAgKiBpcyByb3VnaGx5IHRoZSBhbW91bnQgd2UgbmVlZCB0byBvZmZzZXRcbiAgICogdGhlIGljb24gYnkgd2hlbiBwdWxsaW5nIGRvd24uXG4gICAqL1xuICBjb25zdCBoZWlnaHQgPSByZWZyZXNoZXJFbC5jbGllbnRIZWlnaHQ7XG4gIGNvbnN0IHNwaW5uZXJBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKS5hZGRFbGVtZW50KHB1bGxpbmdSZWZyZXNoZXJJY29uKS5rZXlmcmFtZXMoW3tcbiAgICBvZmZzZXQ6IDAsXG4gICAgdHJhbnNmb3JtOiBgc2NhbGUoMCkgdHJhbnNsYXRlWSgtJHtoZWlnaHR9cHgpYFxuICB9LCB7XG4gICAgb2Zmc2V0OiAxLFxuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpIHRyYW5zbGF0ZVkoMTAwcHgpJ1xuICB9XSk7XG4gIHJldHVybiBjcmVhdGVCYXNlQW5pbWF0aW9uKHB1bGxpbmdSZWZyZXNoZXJJY29uKS5hZGRBbmltYXRpb24oW3NwaW5uZXJBbmltYXRpb25dKTtcbn07XG5jb25zdCBjcmVhdGVUcmFuc2xhdGVBbmltYXRpb24gPSAocHVsbGluZ1JlZnJlc2hlckljb24sIHJlZnJlc2hlckVsKSA9PiB7XG4gIC8qKlxuICAgKiBEbyBub3QgdGFrZSB0aGUgaGVpZ2h0IG9mIHRoZSByZWZyZXNoZXIgaWNvblxuICAgKiBiZWNhdXNlIGF0IHRoaXMgcG9pbnQgdGhlIERPTSBoYXMgbm90IHVwZGF0ZWQsXG4gICAqIHNvIHRoZSByZWZyZXNoZXIgaWNvbiBpcyBzdGlsbCBoaWRkZW4gd2l0aFxuICAgKiBkaXNwbGF5OiBub25lLlxuICAgKiBUaGUgYGlvbi1yZWZyZXNoZXJgIGNvbnRhaW5lciBoZWlnaHRcbiAgICogaXMgcm91Z2hseSB0aGUgYW1vdW50IHdlIG5lZWQgdG8gb2Zmc2V0XG4gICAqIHRoZSBpY29uIGJ5IHdoZW4gcHVsbGluZyBkb3duLlxuICAgKi9cbiAgY29uc3QgaGVpZ2h0ID0gcmVmcmVzaGVyRWwuY2xpZW50SGVpZ2h0O1xuICBjb25zdCBzcGlubmVyQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCkuYWRkRWxlbWVudChwdWxsaW5nUmVmcmVzaGVySWNvbikua2V5ZnJhbWVzKFt7XG4gICAgb2Zmc2V0OiAwLFxuICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoLSR7aGVpZ2h0fXB4KWBcbiAgfSwge1xuICAgIG9mZnNldDogMSxcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDEwMHB4KSdcbiAgfV0pO1xuICByZXR1cm4gY3JlYXRlQmFzZUFuaW1hdGlvbihwdWxsaW5nUmVmcmVzaGVySWNvbikuYWRkQW5pbWF0aW9uKFtzcGlubmVyQW5pbWF0aW9uXSk7XG59O1xuY29uc3QgY3JlYXRlU25hcEJhY2tBbmltYXRpb24gPSBwdWxsaW5nUmVmcmVzaGVySWNvbiA9PiB7XG4gIHJldHVybiBjcmVhdGVBbmltYXRpb24oKS5kdXJhdGlvbigxMjUpLmFkZEVsZW1lbnQocHVsbGluZ1JlZnJlc2hlckljb24pLmZyb21UbygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVkodmFyKC0taW9uLXB1bGxpbmctcmVmcmVzaGVyLXRyYW5zbGF0ZSwgMTAwcHgpKScsICd0cmFuc2xhdGVZKDBweCknKTtcbn07XG4vLyBpT1MgTmF0aXZlIFJlZnJlc2hlclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmNvbnN0IHNldFNwaW5uZXJPcGFjaXR5ID0gKHNwaW5uZXIsIG9wYWNpdHkpID0+IHtcbiAgc3Bpbm5lci5zdHlsZS5zZXRQcm9wZXJ0eSgnb3BhY2l0eScsIG9wYWNpdHkudG9TdHJpbmcoKSk7XG59O1xuY29uc3QgaGFuZGxlU2Nyb2xsV2hpbGVQdWxsaW5nID0gKHRpY2tzLCBudW1UaWNrcywgcHVsbEFtb3VudCkgPT4ge1xuICBjb25zdCBtYXggPSAxO1xuICB3cml0ZVRhc2soKCkgPT4ge1xuICAgIHRpY2tzLmZvckVhY2goKGVsLCBpKSA9PiB7XG4gICAgICAvKipcbiAgICAgICAqIENvbXB1dGUgdGhlIG9wYWNpdHkgb2YgZWFjaCB0aWNrXG4gICAgICAgKiBtYXJrIGFzIGEgcGVyY2VudGFnZSBvZiB0aGUgcHVsbEFtb3VudFxuICAgICAgICogb2Zmc2V0IGJ5IG1heCAvIG51bVRpY2tzIHNvXG4gICAgICAgKiB0aGUgdGljayBtYXJrcyBhcmUgc2hvd24gc3RhZ2dlcmVkLlxuICAgICAgICovXG4gICAgICBjb25zdCBtaW4gPSBpICogKG1heCAvIG51bVRpY2tzKTtcbiAgICAgIGNvbnN0IHJhbmdlID0gbWF4IC0gbWluO1xuICAgICAgY29uc3Qgc3RhcnQgPSBwdWxsQW1vdW50IC0gbWluO1xuICAgICAgY29uc3QgcHJvZ3Jlc3Npb24gPSBjbGFtcCgwLCBzdGFydCAvIHJhbmdlLCAxKTtcbiAgICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KCdvcGFjaXR5JywgcHJvZ3Jlc3Npb24udG9TdHJpbmcoKSk7XG4gICAgfSk7XG4gIH0pO1xufTtcbmNvbnN0IGhhbmRsZVNjcm9sbFdoaWxlUmVmcmVzaGluZyA9IChzcGlubmVyLCBsYXN0VmVsb2NpdHlZKSA9PiB7XG4gIHdyaXRlVGFzaygoKSA9PiB7XG4gICAgLy8gSWYgdXNlciBwdWxscyBkb3duIHF1aWNrbHksIHRoZSBzcGlubmVyIHNob3VsZCBzcGluIGZhc3RlclxuICAgIHNwaW5uZXIuc3R5bGUuc2V0UHJvcGVydHkoJy0tcmVmcmVzaGluZy1yb3RhdGlvbi1kdXJhdGlvbicsIGxhc3RWZWxvY2l0eVkgPj0gMS4wID8gJzAuNXMnIDogJzJzJyk7XG4gICAgc3Bpbm5lci5zdHlsZS5zZXRQcm9wZXJ0eSgnb3BhY2l0eScsICcxJyk7XG4gIH0pO1xufTtcbmNvbnN0IHRyYW5zbGF0ZUVsZW1lbnQgPSAoZWwsIHZhbHVlLCBkdXJhdGlvbiA9IDIwMCkgPT4ge1xuICBpZiAoIWVsKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG4gIGNvbnN0IHRyYW5zID0gdHJhbnNpdGlvbkVuZEFzeW5jKGVsLCBkdXJhdGlvbik7XG4gIHdyaXRlVGFzaygoKSA9PiB7XG4gICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoJ3RyYW5zaXRpb24nLCBgJHtkdXJhdGlvbn1tcyBhbGwgZWFzZS1vdXRgKTtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zZm9ybScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eSgndHJhbnNmb3JtJywgYHRyYW5zbGF0ZTNkKDBweCwgJHt2YWx1ZX0sIDBweClgKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gdHJhbnM7XG59O1xuLy8gVXRpbHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vKipcbiAqIEluIG9yZGVyIHRvIHVzZSB0aGUgbmF0aXZlIGlPUyByZWZyZXNoZXIgdGhlIGRldmljZSBtdXN0IHN1cHBvcnQgcnViYmVyIGJhbmQgc2Nyb2xsaW5nLlxuICogQXMgcGFydCBvZiB0aGlzLCB3ZSBuZWVkIHRvIGV4Y2x1ZGUgRGVza3RvcCBTYWZhcmkgYmVjYXVzZSBpdCBoYXMgYSBzbGlnaHRseSBkaWZmZXJlbnQgcnViYmVyIGJhbmQgZWZmZWN0IHRoYXQgaXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGUgbmF0aXZlIHJlZnJlc2hlciBpbiBJb25pYy5cbiAqXG4gKiBXZSBhbHNvIG5lZWQgdG8gYmUgY2FyZWZ1bCBub3QgdG8gaW5jbHVkZSBkZXZpY2VzIHRoYXQgc3Bvb2YgdGhlaXIgdXNlciBhZ2VudC5cbiAqIEZvciBleGFtcGxlLCB3aGVuIHVzaW5nIGlPUyBlbXVsYXRpb24gaW4gQ2hyb21lIHRoZSB1c2VyIGFnZW50IHdpbGwgYmUgc3Bvb2ZlZCBzdWNoIHRoYXRcbiAqIG5hdmlnYXRvci5tYXhUb3VjaFBvaW50ZXIgPiAwLiBUbyB3b3JrIGFyb3VuZCB0aGlzLFxuICogd2UgY2hlY2sgdG8gc2VlIGlmIHRoZSBhcHBsZS1wYXktbG9nbyBpcyBzdXBwb3J0ZWQgYXMgYSBuYW1lZCBpbWFnZSB3aGljaCBpcyBvbmx5XG4gKiB0cnVlIG9uIEFwcGxlIGRldmljZXMuXG4gKlxuICogV2UgcHJldmlvdXNseSBjaGVja2VkIHJlZmVyZW5jRWwuc3R5bGUud2Via2l0T3ZlcmZsb3dTY3JvbGxpbmcgdG8gZXhwbGljaXRseSBjaGVja1xuICogZm9yIHJ1YmJlciBiYW5kIHN1cHBvcnQuIEhvd2V2ZXIsIHRoaXMgcHJvcGVydHkgd2FzIHJlbW92ZWQgb24gaVBhZE9TIGFuZCBpdCdzIHBvc3NpYmxlXG4gKiB0aGF0IHRoaXMgd2lsbCBiZSByZW1vdmVkIG9uIGlPUyBpbiB0aGUgZnV0dXJlIHRvby5cbiAqXG4gKi9cbmNvbnN0IHN1cHBvcnRzUnViYmVyQmFuZFNjcm9sbGluZyA9ICgpID0+IHtcbiAgcmV0dXJuIG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDAgJiYgQ1NTLnN1cHBvcnRzKCdiYWNrZ3JvdW5kOiAtd2Via2l0LW5hbWVkLWltYWdlKGFwcGxlLXBheS1sb2dvLWJsYWNrKScpO1xufTtcbmNvbnN0IHNob3VsZFVzZU5hdGl2ZVJlZnJlc2hlciA9IGFzeW5jIChyZWZlcmVuY2VFbCwgbW9kZSkgPT4ge1xuICBjb25zdCByZWZyZXNoZXJDb250ZW50ID0gcmVmZXJlbmNlRWwucXVlcnlTZWxlY3RvcignaW9uLXJlZnJlc2hlci1jb250ZW50Jyk7XG4gIGlmICghcmVmcmVzaGVyQ29udGVudCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICB9XG4gIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gY29tcG9uZW50T25SZWFkeShyZWZyZXNoZXJDb250ZW50LCByZXNvbHZlKSk7XG4gIGNvbnN0IHB1bGxpbmdTcGlubmVyID0gcmVmZXJlbmNlRWwucXVlcnlTZWxlY3RvcignaW9uLXJlZnJlc2hlci1jb250ZW50IC5yZWZyZXNoZXItcHVsbGluZyBpb24tc3Bpbm5lcicpO1xuICBjb25zdCByZWZyZXNoaW5nU3Bpbm5lciA9IHJlZmVyZW5jZUVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1yZWZyZXNoZXItY29udGVudCAucmVmcmVzaGVyLXJlZnJlc2hpbmcgaW9uLXNwaW5uZXInKTtcbiAgcmV0dXJuIHB1bGxpbmdTcGlubmVyICE9PSBudWxsICYmIHJlZnJlc2hpbmdTcGlubmVyICE9PSBudWxsICYmIChtb2RlID09PSAnaW9zJyAmJiBzdXBwb3J0c1J1YmJlckJhbmRTY3JvbGxpbmcoKSB8fCBtb2RlID09PSAnbWQnKTtcbn07XG5jb25zdCByZWZyZXNoZXJJb3NDc3MgPSBcImlvbi1yZWZyZXNoZXJ7dG9wOjA7ZGlzcGxheTpub25lO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7aGVpZ2h0OjYwcHg7cG9pbnRlci1ldmVudHM6bm9uZTt6LWluZGV4Oi0xfWlvbi1yZWZyZXNoZXJ7aW5zZXQtaW5saW5lLXN0YXJ0OjB9aW9uLXJlZnJlc2hlci5yZWZyZXNoZXItYWN0aXZle2Rpc3BsYXk6YmxvY2t9aW9uLXJlZnJlc2hlci1jb250ZW50e2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1uOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7aGVpZ2h0OjEwMCV9LnJlZnJlc2hlci1wdWxsaW5nLC5yZWZyZXNoZXItcmVmcmVzaGluZ3tkaXNwbGF5Om5vbmU7d2lkdGg6MTAwJX0ucmVmcmVzaGVyLXB1bGxpbmctaWNvbiwucmVmcmVzaGVyLXJlZnJlc2hpbmctaWNvbnstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Y2VudGVyO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyOy13ZWJraXQtdHJhbnNpdGlvbjoyMDBtczt0cmFuc2l0aW9uOjIwMG1zO2ZvbnQtc2l6ZTozMHB4O3RleHQtYWxpZ246Y2VudGVyfTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAucmVmcmVzaGVyLXB1bGxpbmctaWNvbiw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLnJlZnJlc2hlci1yZWZyZXNoaW5nLWljb257LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNhbGMoMTAwJSAtIGNlbnRlcik7dHJhbnNmb3JtLW9yaWdpbjpjYWxjKDEwMCUgLSBjZW50ZXIpfVtkaXI9cnRsXSAucmVmcmVzaGVyLXB1bGxpbmctaWNvbixbZGlyPXJ0bF0gLnJlZnJlc2hlci1yZWZyZXNoaW5nLWljb257LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNhbGMoMTAwJSAtIGNlbnRlcik7dHJhbnNmb3JtLW9yaWdpbjpjYWxjKDEwMCUgLSBjZW50ZXIpfUBzdXBwb3J0cyBzZWxlY3Rvcig6ZGlyKHJ0bCkpey5yZWZyZXNoZXItcHVsbGluZy1pY29uOmRpcihydGwpLC5yZWZyZXNoZXItcmVmcmVzaGluZy1pY29uOmRpcihydGwpey13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpjYWxjKDEwMCUgLSBjZW50ZXIpO3RyYW5zZm9ybS1vcmlnaW46Y2FsYygxMDAlIC0gY2VudGVyKX19LnJlZnJlc2hlci1wdWxsaW5nLXRleHQsLnJlZnJlc2hlci1yZWZyZXNoaW5nLXRleHR7Zm9udC1zaXplOjE2cHg7dGV4dC1hbGlnbjpjZW50ZXJ9aW9uLXJlZnJlc2hlci1jb250ZW50IC5hcnJvdy1jb250YWluZXJ7ZGlzcGxheTpub25lfS5yZWZyZXNoZXItcHVsbGluZyBpb24tcmVmcmVzaGVyLWNvbnRlbnQgLnJlZnJlc2hlci1wdWxsaW5ne2Rpc3BsYXk6YmxvY2t9LnJlZnJlc2hlci1yZWFkeSBpb24tcmVmcmVzaGVyLWNvbnRlbnQgLnJlZnJlc2hlci1wdWxsaW5ne2Rpc3BsYXk6YmxvY2t9LnJlZnJlc2hlci1yZWFkeSBpb24tcmVmcmVzaGVyLWNvbnRlbnQgLnJlZnJlc2hlci1wdWxsaW5nLWljb257LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDE4MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpfS5yZWZyZXNoZXItcmVmcmVzaGluZyBpb24tcmVmcmVzaGVyLWNvbnRlbnQgLnJlZnJlc2hlci1yZWZyZXNoaW5ne2Rpc3BsYXk6YmxvY2t9LnJlZnJlc2hlci1jYW5jZWxsaW5nIGlvbi1yZWZyZXNoZXItY29udGVudCAucmVmcmVzaGVyLXB1bGxpbmd7ZGlzcGxheTpibG9ja30ucmVmcmVzaGVyLWNhbmNlbGxpbmcgaW9uLXJlZnJlc2hlci1jb250ZW50IC5yZWZyZXNoZXItcHVsbGluZy1pY29uey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybTpzY2FsZSgwKX0ucmVmcmVzaGVyLWNvbXBsZXRpbmcgaW9uLXJlZnJlc2hlci1jb250ZW50IC5yZWZyZXNoZXItcmVmcmVzaGluZ3tkaXNwbGF5OmJsb2NrfS5yZWZyZXNoZXItY29tcGxldGluZyBpb24tcmVmcmVzaGVyLWNvbnRlbnQgLnJlZnJlc2hlci1yZWZyZXNoaW5nLWljb257LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtOnNjYWxlKDApfS5yZWZyZXNoZXItbmF0aXZlIC5yZWZyZXNoZXItcHVsbGluZy10ZXh0LC5yZWZyZXNoZXItbmF0aXZlIC5yZWZyZXNoZXItcmVmcmVzaGluZy10ZXh0e2Rpc3BsYXk6bm9uZX0ucmVmcmVzaGVyLWlvcyAucmVmcmVzaGVyLXB1bGxpbmctaWNvbiwucmVmcmVzaGVyLWlvcyAucmVmcmVzaGVyLXJlZnJlc2hpbmctaWNvbntjb2xvcjp2YXIoLS1pb24tdGV4dC1jb2xvciwgIzAwMCl9LnJlZnJlc2hlci1pb3MgLnJlZnJlc2hlci1wdWxsaW5nLXRleHQsLnJlZnJlc2hlci1pb3MgLnJlZnJlc2hlci1yZWZyZXNoaW5nLXRleHR7Y29sb3I6dmFyKC0taW9uLXRleHQtY29sb3IsICMwMDApfS5yZWZyZXNoZXItaW9zIC5yZWZyZXNoZXItcmVmcmVzaGluZyAuc3Bpbm5lci1saW5lcy1pb3MgbGluZSwucmVmcmVzaGVyLWlvcyAucmVmcmVzaGVyLXJlZnJlc2hpbmcgLnNwaW5uZXItbGluZXMtc21hbGwtaW9zIGxpbmUsLnJlZnJlc2hlci1pb3MgLnJlZnJlc2hlci1yZWZyZXNoaW5nIC5zcGlubmVyLWNyZXNjZW50IGNpcmNsZXtzdHJva2U6dmFyKC0taW9uLXRleHQtY29sb3IsICMwMDApfS5yZWZyZXNoZXItaW9zIC5yZWZyZXNoZXItcmVmcmVzaGluZyAuc3Bpbm5lci1idWJibGVzIGNpcmNsZSwucmVmcmVzaGVyLWlvcyAucmVmcmVzaGVyLXJlZnJlc2hpbmcgLnNwaW5uZXItY2lyY2xlcyBjaXJjbGUsLnJlZnJlc2hlci1pb3MgLnJlZnJlc2hlci1yZWZyZXNoaW5nIC5zcGlubmVyLWRvdHMgY2lyY2xle2ZpbGw6dmFyKC0taW9uLXRleHQtY29sb3IsICMwMDApfWlvbi1yZWZyZXNoZXIucmVmcmVzaGVyLW5hdGl2ZXtkaXNwbGF5OmJsb2NrO3otaW5kZXg6MX1pb24tcmVmcmVzaGVyLnJlZnJlc2hlci1uYXRpdmUgaW9uLXNwaW5uZXJ7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6YXV0bzttYXJnaW4taW5saW5lLXN0YXJ0OmF1dG87LXdlYmtpdC1tYXJnaW4tZW5kOmF1dG87bWFyZ2luLWlubGluZS1lbmQ6YXV0bzttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfS5yZWZyZXNoZXItbmF0aXZlIC5yZWZyZXNoZXItcmVmcmVzaGluZyBpb24tc3Bpbm5lcnstLXJlZnJlc2hpbmctcm90YXRpb24tZHVyYXRpb246MnM7ZGlzcGxheTpub25lOy13ZWJraXQtYW5pbWF0aW9uOnZhcigtLXJlZnJlc2hpbmctcm90YXRpb24tZHVyYXRpb24pIGVhc2Utb3V0IHJlZnJlc2hlci1yb3RhdGUgZm9yd2FyZHM7YW5pbWF0aW9uOnZhcigtLXJlZnJlc2hpbmctcm90YXRpb24tZHVyYXRpb24pIGVhc2Utb3V0IHJlZnJlc2hlci1yb3RhdGUgZm9yd2FyZHN9LnJlZnJlc2hlci1uYXRpdmUgLnJlZnJlc2hlci1yZWZyZXNoaW5ne2Rpc3BsYXk6bm9uZTstd2Via2l0LWFuaW1hdGlvbjoyNTBtcyBsaW5lYXIgcmVmcmVzaGVyLXBvcCBmb3J3YXJkczthbmltYXRpb246MjUwbXMgbGluZWFyIHJlZnJlc2hlci1wb3AgZm9yd2FyZHN9LnJlZnJlc2hlci1uYXRpdmUgaW9uLXNwaW5uZXJ7d2lkdGg6MzJweDtoZWlnaHQ6MzJweDtjb2xvcjp2YXIoLS1pb24tY29sb3Itc3RlcC00NTAsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXN0ZXAtNDUwLCAjNzQ3NTc3KSl9LnJlZnJlc2hlci1uYXRpdmUucmVmcmVzaGVyLXJlZnJlc2hpbmcgLnJlZnJlc2hlci1wdWxsaW5nIGlvbi1zcGlubmVyLC5yZWZyZXNoZXItbmF0aXZlLnJlZnJlc2hlci1jb21wbGV0aW5nIC5yZWZyZXNoZXItcHVsbGluZyBpb24tc3Bpbm5lcntkaXNwbGF5Om5vbmV9LnJlZnJlc2hlci1uYXRpdmUucmVmcmVzaGVyLXJlZnJlc2hpbmcgLnJlZnJlc2hlci1yZWZyZXNoaW5nIGlvbi1zcGlubmVyLC5yZWZyZXNoZXItbmF0aXZlLnJlZnJlc2hlci1jb21wbGV0aW5nIC5yZWZyZXNoZXItcmVmcmVzaGluZyBpb24tc3Bpbm5lcntkaXNwbGF5OmJsb2NrfS5yZWZyZXNoZXItbmF0aXZlLnJlZnJlc2hlci1wdWxsaW5nIC5yZWZyZXNoZXItcHVsbGluZyBpb24tc3Bpbm5lcntkaXNwbGF5OmJsb2NrfS5yZWZyZXNoZXItbmF0aXZlLnJlZnJlc2hlci1wdWxsaW5nIC5yZWZyZXNoZXItcmVmcmVzaGluZyBpb24tc3Bpbm5lcntkaXNwbGF5Om5vbmV9LnJlZnJlc2hlci1uYXRpdmUucmVmcmVzaGVyLWNvbXBsZXRpbmcgaW9uLXJlZnJlc2hlci1jb250ZW50IC5yZWZyZXNoZXItcmVmcmVzaGluZy1pY29uey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDApIHJvdGF0ZSgxODBkZWcpO3RyYW5zZm9ybTpzY2FsZSgwKSByb3RhdGUoMTgwZGVnKTstd2Via2l0LXRyYW5zaXRpb246MzAwbXM7dHJhbnNpdGlvbjozMDBtc31ALXdlYmtpdC1rZXlmcmFtZXMgcmVmcmVzaGVyLXBvcHswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWlufTUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjIpO3RyYW5zZm9ybTpzY2FsZSgxLjIpOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dDthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0fTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfX1Aa2V5ZnJhbWVzIHJlZnJlc2hlci1wb3B7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbn01MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4yKTt0cmFuc2Zvcm06c2NhbGUoMS4yKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXQ7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dH0xMDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19QC13ZWJraXQta2V5ZnJhbWVzIHJlZnJlc2hlci1yb3RhdGV7ZnJvbXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKX10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDE4MGRlZyl9fUBrZXlmcmFtZXMgcmVmcmVzaGVyLXJvdGF0ZXtmcm9tey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDBkZWcpfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKX19XCI7XG5jb25zdCByZWZyZXNoZXJNZENzcyA9IFwiaW9uLXJlZnJlc2hlcnt0b3A6MDtkaXNwbGF5Om5vbmU7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTtoZWlnaHQ6NjBweDtwb2ludGVyLWV2ZW50czpub25lO3otaW5kZXg6LTF9aW9uLXJlZnJlc2hlcntpbnNldC1pbmxpbmUtc3RhcnQ6MH1pb24tcmVmcmVzaGVyLnJlZnJlc2hlci1hY3RpdmV7ZGlzcGxheTpibG9ja31pb24tcmVmcmVzaGVyLWNvbnRlbnR7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtoZWlnaHQ6MTAwJX0ucmVmcmVzaGVyLXB1bGxpbmcsLnJlZnJlc2hlci1yZWZyZXNoaW5ne2Rpc3BsYXk6bm9uZTt3aWR0aDoxMDAlfS5yZWZyZXNoZXItcHVsbGluZy1pY29uLC5yZWZyZXNoZXItcmVmcmVzaGluZy1pY29uey13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7LXdlYmtpdC10cmFuc2l0aW9uOjIwMG1zO3RyYW5zaXRpb246MjAwbXM7Zm9udC1zaXplOjMwcHg7dGV4dC1hbGlnbjpjZW50ZXJ9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5yZWZyZXNoZXItcHVsbGluZy1pY29uLDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAucmVmcmVzaGVyLXJlZnJlc2hpbmctaWNvbnstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Y2FsYygxMDAlIC0gY2VudGVyKTt0cmFuc2Zvcm0tb3JpZ2luOmNhbGMoMTAwJSAtIGNlbnRlcil9W2Rpcj1ydGxdIC5yZWZyZXNoZXItcHVsbGluZy1pY29uLFtkaXI9cnRsXSAucmVmcmVzaGVyLXJlZnJlc2hpbmctaWNvbnstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Y2FsYygxMDAlIC0gY2VudGVyKTt0cmFuc2Zvcm0tb3JpZ2luOmNhbGMoMTAwJSAtIGNlbnRlcil9QHN1cHBvcnRzIHNlbGVjdG9yKDpkaXIocnRsKSl7LnJlZnJlc2hlci1wdWxsaW5nLWljb246ZGlyKHJ0bCksLnJlZnJlc2hlci1yZWZyZXNoaW5nLWljb246ZGlyKHJ0bCl7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNhbGMoMTAwJSAtIGNlbnRlcik7dHJhbnNmb3JtLW9yaWdpbjpjYWxjKDEwMCUgLSBjZW50ZXIpfX0ucmVmcmVzaGVyLXB1bGxpbmctdGV4dCwucmVmcmVzaGVyLXJlZnJlc2hpbmctdGV4dHtmb250LXNpemU6MTZweDt0ZXh0LWFsaWduOmNlbnRlcn1pb24tcmVmcmVzaGVyLWNvbnRlbnQgLmFycm93LWNvbnRhaW5lcntkaXNwbGF5Om5vbmV9LnJlZnJlc2hlci1wdWxsaW5nIGlvbi1yZWZyZXNoZXItY29udGVudCAucmVmcmVzaGVyLXB1bGxpbmd7ZGlzcGxheTpibG9ja30ucmVmcmVzaGVyLXJlYWR5IGlvbi1yZWZyZXNoZXItY29udGVudCAucmVmcmVzaGVyLXB1bGxpbmd7ZGlzcGxheTpibG9ja30ucmVmcmVzaGVyLXJlYWR5IGlvbi1yZWZyZXNoZXItY29udGVudCAucmVmcmVzaGVyLXB1bGxpbmctaWNvbnstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDE4MGRlZyl9LnJlZnJlc2hlci1yZWZyZXNoaW5nIGlvbi1yZWZyZXNoZXItY29udGVudCAucmVmcmVzaGVyLXJlZnJlc2hpbmd7ZGlzcGxheTpibG9ja30ucmVmcmVzaGVyLWNhbmNlbGxpbmcgaW9uLXJlZnJlc2hlci1jb250ZW50IC5yZWZyZXNoZXItcHVsbGluZ3tkaXNwbGF5OmJsb2NrfS5yZWZyZXNoZXItY2FuY2VsbGluZyBpb24tcmVmcmVzaGVyLWNvbnRlbnQgLnJlZnJlc2hlci1wdWxsaW5nLWljb257LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtOnNjYWxlKDApfS5yZWZyZXNoZXItY29tcGxldGluZyBpb24tcmVmcmVzaGVyLWNvbnRlbnQgLnJlZnJlc2hlci1yZWZyZXNoaW5ne2Rpc3BsYXk6YmxvY2t9LnJlZnJlc2hlci1jb21wbGV0aW5nIGlvbi1yZWZyZXNoZXItY29udGVudCAucmVmcmVzaGVyLXJlZnJlc2hpbmctaWNvbnstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm06c2NhbGUoMCl9LnJlZnJlc2hlci1uYXRpdmUgLnJlZnJlc2hlci1wdWxsaW5nLXRleHQsLnJlZnJlc2hlci1uYXRpdmUgLnJlZnJlc2hlci1yZWZyZXNoaW5nLXRleHR7ZGlzcGxheTpub25lfS5yZWZyZXNoZXItbWQgLnJlZnJlc2hlci1wdWxsaW5nLWljb24sLnJlZnJlc2hlci1tZCAucmVmcmVzaGVyLXJlZnJlc2hpbmctaWNvbntjb2xvcjp2YXIoLS1pb24tdGV4dC1jb2xvciwgIzAwMCl9LnJlZnJlc2hlci1tZCAucmVmcmVzaGVyLXB1bGxpbmctdGV4dCwucmVmcmVzaGVyLW1kIC5yZWZyZXNoZXItcmVmcmVzaGluZy10ZXh0e2NvbG9yOnZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwKX0ucmVmcmVzaGVyLW1kIC5yZWZyZXNoZXItcmVmcmVzaGluZyAuc3Bpbm5lci1saW5lcy1tZCBsaW5lLC5yZWZyZXNoZXItbWQgLnJlZnJlc2hlci1yZWZyZXNoaW5nIC5zcGlubmVyLWxpbmVzLXNtYWxsLW1kIGxpbmUsLnJlZnJlc2hlci1tZCAucmVmcmVzaGVyLXJlZnJlc2hpbmcgLnNwaW5uZXItY3Jlc2NlbnQgY2lyY2xle3N0cm9rZTp2YXIoLS1pb24tdGV4dC1jb2xvciwgIzAwMCl9LnJlZnJlc2hlci1tZCAucmVmcmVzaGVyLXJlZnJlc2hpbmcgLnNwaW5uZXItYnViYmxlcyBjaXJjbGUsLnJlZnJlc2hlci1tZCAucmVmcmVzaGVyLXJlZnJlc2hpbmcgLnNwaW5uZXItY2lyY2xlcyBjaXJjbGUsLnJlZnJlc2hlci1tZCAucmVmcmVzaGVyLXJlZnJlc2hpbmcgLnNwaW5uZXItZG90cyBjaXJjbGV7ZmlsbDp2YXIoLS1pb24tdGV4dC1jb2xvciwgIzAwMCl9aW9uLXJlZnJlc2hlci5yZWZyZXNoZXItbmF0aXZle2Rpc3BsYXk6YmxvY2s7ei1pbmRleDoxfWlvbi1yZWZyZXNoZXIucmVmcmVzaGVyLW5hdGl2ZSBpb24tc3Bpbm5lcnstd2Via2l0LW1hcmdpbi1zdGFydDphdXRvO21hcmdpbi1pbmxpbmUtc3RhcnQ6YXV0bzstd2Via2l0LW1hcmdpbi1lbmQ6YXV0bzttYXJnaW4taW5saW5lLWVuZDphdXRvO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7d2lkdGg6MjRweDtoZWlnaHQ6MjRweDtjb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzAwNTRlOSl9aW9uLXJlZnJlc2hlci5yZWZyZXNoZXItbmF0aXZlIC5zcGlubmVyLWFycm93LWNvbnRhaW5lcntkaXNwbGF5OmluaGVyaXR9aW9uLXJlZnJlc2hlci5yZWZyZXNoZXItbmF0aXZlIC5hcnJvdy1jb250YWluZXJ7ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoyNHB4O2hlaWdodDoyNHB4fWlvbi1yZWZyZXNoZXIucmVmcmVzaGVyLW5hdGl2ZSAuYXJyb3ctY29udGFpbmVyIGlvbi1pY29uey13ZWJraXQtbWFyZ2luLXN0YXJ0OmF1dG87bWFyZ2luLWlubGluZS1zdGFydDphdXRvOy13ZWJraXQtbWFyZ2luLWVuZDphdXRvO21hcmdpbi1pbmxpbmUtZW5kOmF1dG87bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtsZWZ0OjA7cmlnaHQ6MDtib3R0b206LTRweDtwb3NpdGlvbjphYnNvbHV0ZTtjb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzAwNTRlOSk7Zm9udC1zaXplOjEycHh9aW9uLXJlZnJlc2hlci5yZWZyZXNoZXItbmF0aXZlLnJlZnJlc2hlci1wdWxsaW5nIGlvbi1yZWZyZXNoZXItY29udGVudCAucmVmcmVzaGVyLXB1bGxpbmcsaW9uLXJlZnJlc2hlci5yZWZyZXNoZXItbmF0aXZlLnJlZnJlc2hlci1yZWFkeSBpb24tcmVmcmVzaGVyLWNvbnRlbnQgLnJlZnJlc2hlci1wdWxsaW5ne2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4fWlvbi1yZWZyZXNoZXIucmVmcmVzaGVyLW5hdGl2ZS5yZWZyZXNoZXItcmVmcmVzaGluZyBpb24tcmVmcmVzaGVyLWNvbnRlbnQgLnJlZnJlc2hlci1yZWZyZXNoaW5nLGlvbi1yZWZyZXNoZXIucmVmcmVzaGVyLW5hdGl2ZS5yZWZyZXNoZXItY29tcGxldGluZyBpb24tcmVmcmVzaGVyLWNvbnRlbnQgLnJlZnJlc2hlci1yZWZyZXNoaW5nLGlvbi1yZWZyZXNoZXIucmVmcmVzaGVyLW5hdGl2ZS5yZWZyZXNoZXItY2FuY2VsbGluZyBpb24tcmVmcmVzaGVyLWNvbnRlbnQgLnJlZnJlc2hlci1yZWZyZXNoaW5ne2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4fWlvbi1yZWZyZXNoZXIucmVmcmVzaGVyLW5hdGl2ZSAucmVmcmVzaGVyLXB1bGxpbmctaWNvbnstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKGNhbGMoLTEwMCUgLSAxMHB4KSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoY2FsYygtMTAwJSAtIDEwcHgpKX1pb24tcmVmcmVzaGVyLnJlZnJlc2hlci1uYXRpdmUgLnJlZnJlc2hlci1wdWxsaW5nLWljb24saW9uLXJlZnJlc2hlci5yZWZyZXNoZXItbmF0aXZlIC5yZWZyZXNoZXItcmVmcmVzaGluZy1pY29uey13ZWJraXQtbWFyZ2luLXN0YXJ0OmF1dG87bWFyZ2luLWlubGluZS1zdGFydDphdXRvOy13ZWJraXQtbWFyZ2luLWVuZDphdXRvO21hcmdpbi1pbmxpbmUtZW5kOmF1dG87bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtib3JkZXItcmFkaXVzOjEwMCU7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjhweDtwYWRkaW5nLWlubGluZS1zdGFydDo4cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDo4cHg7cGFkZGluZy1pbmxpbmUtZW5kOjhweDtwYWRkaW5nLXRvcDo4cHg7cGFkZGluZy1ib3R0b206OHB4O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O2JvcmRlcjoxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjAwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTIwMCwgI2VjZWNlYykpO2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXN0ZXAtMjUwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTI1MCwgI2ZmZmZmZikpOy13ZWJraXQtYm94LXNoYWRvdzowcHggMXB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7Ym94LXNoYWRvdzowcHggMXB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSl9XCI7XG5jb25zdCBSZWZyZXNoZXIgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuaW9uUmVmcmVzaCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uUmVmcmVzaFwiLCA3KTtcbiAgICB0aGlzLmlvblB1bGwgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblB1bGxcIiwgNyk7XG4gICAgdGhpcy5pb25TdGFydCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uU3RhcnRcIiwgNyk7XG4gICAgdGhpcy5hcHBsaWVkU3R5bGVzID0gZmFsc2U7XG4gICAgdGhpcy5kaWRTdGFydCA9IGZhbHNlO1xuICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgIHRoaXMucG9pbnRlckRvd24gPSBmYWxzZTtcbiAgICB0aGlzLm5lZWRzQ29tcGxldGlvbiA9IGZhbHNlO1xuICAgIHRoaXMuZGlkUmVmcmVzaCA9IGZhbHNlO1xuICAgIHRoaXMuY29udGVudEZ1bGxzY3JlZW4gPSBmYWxzZTtcbiAgICB0aGlzLmxhc3RWZWxvY2l0eVkgPSAwO1xuICAgIHRoaXMuYW5pbWF0aW9ucyA9IFtdO1xuICAgIHRoaXMubmF0aXZlUmVmcmVzaGVyID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgc3RhdGUgd2hpY2ggdGhlIHJlZnJlc2hlciBpcyBpbi4gVGhlIHJlZnJlc2hlcidzIHN0YXRlcyBpbmNsdWRlOlxuICAgICAqXG4gICAgICogLSBgaW5hY3RpdmVgIC0gVGhlIHJlZnJlc2hlciBpcyBub3QgYmVpbmcgcHVsbGVkIGRvd24gb3IgcmVmcmVzaGluZyBhbmQgaXMgY3VycmVudGx5IGhpZGRlbi5cbiAgICAgKiAtIGBwdWxsaW5nYCAtIFRoZSB1c2VyIGlzIGFjdGl2ZWx5IHB1bGxpbmcgZG93biB0aGUgcmVmcmVzaGVyLCBidXQgaGFzIG5vdCByZWFjaGVkIHRoZSBwb2ludCB5ZXQgdGhhdCBpZiB0aGUgdXNlciBsZXRzIGdvLCBpdCdsbCByZWZyZXNoLlxuICAgICAqIC0gYGNhbmNlbGxpbmdgIC0gVGhlIHVzZXIgcHVsbGVkIGRvd24gdGhlIHJlZnJlc2hlciBhbmQgbGV0IGdvLCBidXQgZGlkIG5vdCBwdWxsIGRvd24gZmFyIGVub3VnaCB0byBraWNrIG9mZiB0aGUgYHJlZnJlc2hpbmdgIHN0YXRlLiBBZnRlciBsZXR0aW5nIGdvLCB0aGUgcmVmcmVzaGVyIGlzIGluIHRoZSBgY2FuY2VsbGluZ2Agc3RhdGUgd2hpbGUgaXQgaXMgY2xvc2luZywgYW5kIHdpbGwgZ28gYmFjayB0byB0aGUgYGluYWN0aXZlYCBzdGF0ZSBvbmNlIGNsb3NlZC5cbiAgICAgKiAtIGByZWFkeWAgLSBUaGUgdXNlciBoYXMgcHVsbGVkIGRvd24gdGhlIHJlZnJlc2hlciBmYXIgZW5vdWdoIHRoYXQgaWYgdGhleSBsZXQgZ28sIGl0J2xsIGJlZ2luIHRoZSBgcmVmcmVzaGluZ2Agc3RhdGUuXG4gICAgICogLSBgcmVmcmVzaGluZ2AgLSBUaGUgcmVmcmVzaGVyIGlzIGFjdGl2ZWx5IHdhaXRpbmcgb24gdGhlIGFzeW5jIG9wZXJhdGlvbiB0byBlbmQuIE9uY2UgdGhlIHJlZnJlc2ggaGFuZGxlciBjYWxscyBgY29tcGxldGUoKWAgaXQgd2lsbCBiZWdpbiB0aGUgYGNvbXBsZXRpbmdgIHN0YXRlLlxuICAgICAqIC0gYGNvbXBsZXRpbmdgIC0gVGhlIGByZWZyZXNoaW5nYCBzdGF0ZSBoYXMgZmluaXNoZWQgYW5kIHRoZSByZWZyZXNoZXIgaXMgaW4gdGhlIHdheSBvZiBjbG9zaW5nIGl0c2VsZi4gT25jZSBjbG9zZWQsIHRoZSByZWZyZXNoZXIgd2lsbCBnbyBiYWNrIHRvIHRoZSBgaW5hY3RpdmVgIHN0YXRlLlxuICAgICAqL1xuICAgIHRoaXMuc3RhdGUgPSAxIC8qIFJlZnJlc2hlclN0YXRlLkluYWN0aXZlICovO1xuICAgIC8qKlxuICAgICAqIFRoZSBtaW5pbXVtIGRpc3RhbmNlIHRoZSB1c2VyIG11c3QgcHVsbCBkb3duIHVudGlsIHRoZVxuICAgICAqIHJlZnJlc2hlciB3aWxsIGdvIGludG8gdGhlIGByZWZyZXNoaW5nYCBzdGF0ZS5cbiAgICAgKiBEb2VzIG5vdCBhcHBseSB3aGVuIHRoZSByZWZyZXNoZXIgY29udGVudCB1c2VzIGEgc3Bpbm5lcixcbiAgICAgKiBlbmFibGluZyB0aGUgbmF0aXZlIHJlZnJlc2hlci5cbiAgICAgKi9cbiAgICB0aGlzLnB1bGxNaW4gPSA2MDtcbiAgICAvKipcbiAgICAgKiBUaGUgbWF4aW11bSBkaXN0YW5jZSBvZiB0aGUgcHVsbCB1bnRpbCB0aGUgcmVmcmVzaGVyXG4gICAgICogd2lsbCBhdXRvbWF0aWNhbGx5IGdvIGludG8gdGhlIGByZWZyZXNoaW5nYCBzdGF0ZS5cbiAgICAgKiBEZWZhdWx0cyB0byB0aGUgcmVzdWx0IG9mIGBwdWxsTWluICsgNjBgLlxuICAgICAqIERvZXMgbm90IGFwcGx5IHdoZW4gIHRoZSByZWZyZXNoZXIgY29udGVudCB1c2VzIGEgc3Bpbm5lcixcbiAgICAgKiBlbmFibGluZyB0aGUgbmF0aXZlIHJlZnJlc2hlci5cbiAgICAgKi9cbiAgICB0aGlzLnB1bGxNYXggPSB0aGlzLnB1bGxNaW4gKyA2MDtcbiAgICAvKipcbiAgICAgKiBUaW1lIGl0IHRha2VzIHRvIGNsb3NlIHRoZSByZWZyZXNoZXIuXG4gICAgICogRG9lcyBub3QgYXBwbHkgd2hlbiB0aGUgcmVmcmVzaGVyIGNvbnRlbnQgdXNlcyBhIHNwaW5uZXIsXG4gICAgICogZW5hYmxpbmcgdGhlIG5hdGl2ZSByZWZyZXNoZXIuXG4gICAgICovXG4gICAgdGhpcy5jbG9zZUR1cmF0aW9uID0gJzI4MG1zJztcbiAgICAvKipcbiAgICAgKiBUaW1lIGl0IHRha2VzIHRoZSByZWZyZXNoZXIgdG8gc25hcCBiYWNrIHRvIHRoZSBgcmVmcmVzaGluZ2Agc3RhdGUuXG4gICAgICogRG9lcyBub3QgYXBwbHkgd2hlbiB0aGUgcmVmcmVzaGVyIGNvbnRlbnQgdXNlcyBhIHNwaW5uZXIsXG4gICAgICogZW5hYmxpbmcgdGhlIG5hdGl2ZSByZWZyZXNoZXIuXG4gICAgICovXG4gICAgdGhpcy5zbmFwYmFja0R1cmF0aW9uID0gJzI4MG1zJztcbiAgICAvKipcbiAgICAgKiBIb3cgbXVjaCB0byBtdWx0aXBseSB0aGUgcHVsbCBzcGVlZCBieS4gVG8gc2xvdyB0aGUgcHVsbCBhbmltYXRpb24gZG93bixcbiAgICAgKiBwYXNzIGEgbnVtYmVyIGxlc3MgdGhhbiBgMWAuIFRvIHNwZWVkIHVwIHRoZSBwdWxsLCBwYXNzIGEgbnVtYmVyIGdyZWF0ZXJcbiAgICAgKiB0aGFuIGAxYC4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgYDFgIHdoaWNoIGlzIGVxdWFsIHRvIHRoZSBzcGVlZCBvZiB0aGUgY3Vyc29yLlxuICAgICAqIElmIGEgbmVnYXRpdmUgdmFsdWUgaXMgcGFzc2VkIGluLCB0aGUgZmFjdG9yIHdpbGwgYmUgYDFgIGluc3RlYWQuXG4gICAgICpcbiAgICAgKiBGb3IgZXhhbXBsZTogSWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBgMS4yYCBhbmQgdGhlIGNvbnRlbnQgaXMgZHJhZ2dlZCBieVxuICAgICAqIGAxMGAgcGl4ZWxzLCBpbnN0ZWFkIG9mIGAxMGAgcGl4ZWxzIHRoZSBjb250ZW50IHdpbGwgYmUgcHVsbGVkIGJ5IGAxMmAgcGl4ZWxzXG4gICAgICogKGFuIGluY3JlYXNlIG9mIDIwIHBlcmNlbnQpLiBJZiB0aGUgdmFsdWUgcGFzc2VkIGlzIGAwLjhgLCB0aGUgZHJhZ2dlZCBhbW91bnRcbiAgICAgKiB3aWxsIGJlIGA4YCBwaXhlbHMsIGxlc3MgdGhhbiB0aGUgYW1vdW50IHRoZSBjdXJzb3IgaGFzIG1vdmVkLlxuICAgICAqXG4gICAgICogRG9lcyBub3QgYXBwbHkgd2hlbiB0aGUgcmVmcmVzaGVyIGNvbnRlbnQgdXNlcyBhIHNwaW5uZXIsXG4gICAgICogZW5hYmxpbmcgdGhlIG5hdGl2ZSByZWZyZXNoZXIuXG4gICAgICovXG4gICAgdGhpcy5wdWxsRmFjdG9yID0gMTtcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIHRoZSByZWZyZXNoZXIgd2lsbCBiZSBoaWRkZW4uXG4gICAgICovXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICB9XG4gIGRpc2FibGVkQ2hhbmdlZCgpIHtcbiAgICBpZiAodGhpcy5nZXN0dXJlKSB7XG4gICAgICB0aGlzLmdlc3R1cmUuZW5hYmxlKCF0aGlzLmRpc2FibGVkKTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgY2hlY2tOYXRpdmVSZWZyZXNoZXIoKSB7XG4gICAgY29uc3QgdXNlTmF0aXZlUmVmcmVzaGVyID0gYXdhaXQgc2hvdWxkVXNlTmF0aXZlUmVmcmVzaGVyKHRoaXMuZWwsIGdldElvbk1vZGUodGhpcykpO1xuICAgIGlmICh1c2VOYXRpdmVSZWZyZXNoZXIgJiYgIXRoaXMubmF0aXZlUmVmcmVzaGVyKSB7XG4gICAgICBjb25zdCBjb250ZW50RWwgPSB0aGlzLmVsLmNsb3Nlc3QoJ2lvbi1jb250ZW50Jyk7XG4gICAgICB0aGlzLnNldHVwTmF0aXZlUmVmcmVzaGVyKGNvbnRlbnRFbCk7XG4gICAgfSBlbHNlIGlmICghdXNlTmF0aXZlUmVmcmVzaGVyKSB7XG4gICAgICB0aGlzLmRlc3Ryb3lOYXRpdmVSZWZyZXNoZXIoKTtcbiAgICB9XG4gIH1cbiAgZGVzdHJveU5hdGl2ZVJlZnJlc2hlcigpIHtcbiAgICBpZiAodGhpcy5zY3JvbGxFbCAmJiB0aGlzLnNjcm9sbExpc3RlbmVyQ2FsbGJhY2spIHtcbiAgICAgIHRoaXMuc2Nyb2xsRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5zY3JvbGxMaXN0ZW5lckNhbGxiYWNrKTtcbiAgICAgIHRoaXMuc2Nyb2xsTGlzdGVuZXJDYWxsYmFjayA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgdGhpcy5uYXRpdmVSZWZyZXNoZXIgPSBmYWxzZTtcbiAgfVxuICBhc3luYyByZXNldE5hdGl2ZVJlZnJlc2hlcihlbCwgc3RhdGUpIHtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgaWYgKGdldElvbk1vZGUodGhpcykgPT09ICdpb3MnKSB7XG4gICAgICBhd2FpdCB0cmFuc2xhdGVFbGVtZW50KGVsLCB1bmRlZmluZWQsIDMwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGF3YWl0IHRyYW5zaXRpb25FbmRBc3luYyh0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJy5yZWZyZXNoZXItcmVmcmVzaGluZy1pY29uJyksIDIwMCk7XG4gICAgfVxuICAgIHRoaXMuZGlkUmVmcmVzaCA9IGZhbHNlO1xuICAgIHRoaXMubmVlZHNDb21wbGV0aW9uID0gZmFsc2U7XG4gICAgdGhpcy5wb2ludGVyRG93biA9IGZhbHNlO1xuICAgIHRoaXMuYW5pbWF0aW9ucy5mb3JFYWNoKGFuaSA9PiBhbmkuZGVzdHJveSgpKTtcbiAgICB0aGlzLmFuaW1hdGlvbnMgPSBbXTtcbiAgICB0aGlzLnByb2dyZXNzID0gMDtcbiAgICB0aGlzLnN0YXRlID0gMSAvKiBSZWZyZXNoZXJTdGF0ZS5JbmFjdGl2ZSAqLztcbiAgfVxuICBhc3luYyBzZXR1cGlPU05hdGl2ZVJlZnJlc2hlcihwdWxsaW5nU3Bpbm5lciwgcmVmcmVzaGluZ1NwaW5uZXIpIHtcbiAgICB0aGlzLmVsZW1lbnRUb1RyYW5zZm9ybSA9IHRoaXMuc2Nyb2xsRWw7XG4gICAgY29uc3QgdGlja3MgPSBwdWxsaW5nU3Bpbm5lci5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3JBbGwoJ3N2ZycpO1xuICAgIGxldCBNQVhfUFVMTCA9IHRoaXMuc2Nyb2xsRWwuY2xpZW50SGVpZ2h0ICogMC4xNjtcbiAgICBjb25zdCBOVU1fVElDS1MgPSB0aWNrcy5sZW5ndGg7XG4gICAgd3JpdGVUYXNrKCgpID0+IHRpY2tzLmZvckVhY2goZWwgPT4gZWwuc3R5bGUuc2V0UHJvcGVydHkoJ2FuaW1hdGlvbicsICdub25lJykpKTtcbiAgICB0aGlzLnNjcm9sbExpc3RlbmVyQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAvLyBJZiBwb2ludGVyIGlzIG5vdCBvbiBzY3JlZW4gb3IgcmVmcmVzaGVyIGlzIG5vdCBhY3RpdmUsIGlnbm9yZSBzY3JvbGxcbiAgICAgIGlmICghdGhpcy5wb2ludGVyRG93biAmJiB0aGlzLnN0YXRlID09PSAxIC8qIFJlZnJlc2hlclN0YXRlLkluYWN0aXZlICovKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHJlYWRUYXNrKCgpID0+IHtcbiAgICAgICAgLy8gUFRSIHNob3VsZCBvbmx5IGJlIGFjdGl2ZSB3aGVuIG92ZXJmbG93IHNjcm9sbGluZyBhdCB0aGUgdG9wXG4gICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuc2Nyb2xsRWwuc2Nyb2xsVG9wO1xuICAgICAgICBjb25zdCByZWZyZXNoZXJIZWlnaHQgPSB0aGlzLmVsLmNsaWVudEhlaWdodDtcbiAgICAgICAgaWYgKHNjcm9sbFRvcCA+IDApIHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBJZiByZWZyZXNoZXIgaXMgcmVmcmVzaGluZyBhbmQgdXNlciB0cmllcyB0byBzY3JvbGxcbiAgICAgICAgICAgKiBwcm9ncmVzc2l2ZWx5IGZhZGUgcmVmcmVzaGVyIG91dC9pblxuICAgICAgICAgICAqL1xuICAgICAgICAgIGlmICh0aGlzLnN0YXRlID09PSA4IC8qIFJlZnJlc2hlclN0YXRlLlJlZnJlc2hpbmcgKi8pIHtcbiAgICAgICAgICAgIGNvbnN0IHJhdGlvID0gY2xhbXAoMCwgc2Nyb2xsVG9wIC8gKHJlZnJlc2hlckhlaWdodCAqIDAuNSksIDEpO1xuICAgICAgICAgICAgd3JpdGVUYXNrKCgpID0+IHNldFNwaW5uZXJPcGFjaXR5KHJlZnJlc2hpbmdTcGlubmVyLCAxIC0gcmF0aW8pKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBvaW50ZXJEb3duKSB7XG4gICAgICAgICAgaWYgKCF0aGlzLmRpZFN0YXJ0KSB7XG4gICAgICAgICAgICB0aGlzLmRpZFN0YXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaW9uU3RhcnQuZW1pdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBlbWl0IFwicHVsbGluZ1wiIG9uIGV2ZXJ5IG1vdmVcbiAgICAgICAgICBpZiAodGhpcy5wb2ludGVyRG93bikge1xuICAgICAgICAgICAgdGhpcy5pb25QdWxsLmVtaXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdlIHdhbnQgdG8gZGVsYXkgdGhlIHN0YXJ0IG9mIHRoaXMgZ2VzdHVyZSBieSB+MzBweFxuICAgICAgICAgKiB3aGVuIGluaXRpYWxseSBwdWxsaW5nIGRvd24gc28gdGhlIHJlZnJlc2hlciBkb2VzIG5vdFxuICAgICAgICAgKiBvdmVybGFwIHdpdGggdGhlIGNvbnRlbnQuIEJ1dCB3aGVuIGxldHRpbmcgZ28gb2YgdGhlXG4gICAgICAgICAqIGdlc3R1cmUgYmVmb3JlIHRoZSByZWZyZXNoZXIgY29tcGxldGVzLCB3ZSB3YW50IHRoZVxuICAgICAgICAgKiByZWZyZXNoZXIgdGljayBtYXJrcyB0byBxdWlja2x5IGZhZGUgb3V0LlxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5kaWRTdGFydCA/IDMwIDogMDtcbiAgICAgICAgY29uc3QgcHVsbEFtb3VudCA9IHRoaXMucHJvZ3Jlc3MgPSBjbGFtcCgwLCAoTWF0aC5hYnMoc2Nyb2xsVG9wKSAtIG9mZnNldCkgLyBNQVhfUFVMTCwgMSk7XG4gICAgICAgIGNvbnN0IHNob3VsZFNob3dSZWZyZXNoaW5nU3Bpbm5lciA9IHRoaXMuc3RhdGUgPT09IDggLyogUmVmcmVzaGVyU3RhdGUuUmVmcmVzaGluZyAqLyB8fCBwdWxsQW1vdW50ID09PSAxO1xuICAgICAgICBpZiAoc2hvdWxkU2hvd1JlZnJlc2hpbmdTcGlubmVyKSB7XG4gICAgICAgICAgaWYgKHRoaXMucG9pbnRlckRvd24pIHtcbiAgICAgICAgICAgIGhhbmRsZVNjcm9sbFdoaWxlUmVmcmVzaGluZyhyZWZyZXNoaW5nU3Bpbm5lciwgdGhpcy5sYXN0VmVsb2NpdHlZKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCF0aGlzLmRpZFJlZnJlc2gpIHtcbiAgICAgICAgICAgIHRoaXMuYmVnaW5SZWZyZXNoKCk7XG4gICAgICAgICAgICB0aGlzLmRpZFJlZnJlc2ggPSB0cnVlO1xuICAgICAgICAgICAgaGFwdGljSW1wYWN0KHtcbiAgICAgICAgICAgICAgc3R5bGU6IEltcGFjdFN0eWxlLkxpZ2h0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2xlYXIgZm9jdXMgZnJvbSBhbnkgYWN0aXZlIGVsZW1lbnQgdG8gcHJldmVudCBzY3JvbGwganVtcHNcbiAgICAgICAgICAgICAqIHdoZW4gdGhlIHJlZnJlc2ggY29tcGxldGVzXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgICAgICAgICAgaWYgKChhY3RpdmVFbGVtZW50ID09PSBudWxsIHx8IGFjdGl2ZUVsZW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFjdGl2ZUVsZW1lbnQuYmx1cikgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBhY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVHJhbnNsYXRlIHRoZSBjb250ZW50IGVsZW1lbnQgb3RoZXJ3aXNlIHdoZW4gcG9pbnRlciBpcyByZW1vdmVkXG4gICAgICAgICAgICAgKiBmcm9tIHNjcmVlbiB0aGUgc2Nyb2xsIGNvbnRlbnQgd2lsbCBib3VuY2UgYmFjayBvdmVyIHRoZSByZWZyZXNoZXJcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBvaW50ZXJEb3duKSB7XG4gICAgICAgICAgICAgIHRyYW5zbGF0ZUVsZW1lbnQodGhpcy5lbGVtZW50VG9UcmFuc2Zvcm0sIGAke3JlZnJlc2hlckhlaWdodH1weGApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnN0YXRlID0gMiAvKiBSZWZyZXNoZXJTdGF0ZS5QdWxsaW5nICovO1xuICAgICAgICAgIGhhbmRsZVNjcm9sbFdoaWxlUHVsbGluZyh0aWNrcywgTlVNX1RJQ0tTLCBwdWxsQW1vdW50KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgICB0aGlzLnNjcm9sbEVsLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsTGlzdGVuZXJDYWxsYmFjayk7XG4gICAgdGhpcy5nZXN0dXJlID0gKGF3YWl0IGltcG9ydCgnLi9pbmRleC1DZmdCRjFTRS5qcycpKS5jcmVhdGVHZXN0dXJlKHtcbiAgICAgIGVsOiB0aGlzLnNjcm9sbEVsLFxuICAgICAgZ2VzdHVyZU5hbWU6ICdyZWZyZXNoZXInLFxuICAgICAgZ2VzdHVyZVByaW9yaXR5OiAzMSxcbiAgICAgIGRpcmVjdGlvbjogJ3knLFxuICAgICAgdGhyZXNob2xkOiA1LFxuICAgICAgb25TdGFydDogKCkgPT4ge1xuICAgICAgICB0aGlzLnBvaW50ZXJEb3duID0gdHJ1ZTtcbiAgICAgICAgaWYgKCF0aGlzLmRpZFJlZnJlc2gpIHtcbiAgICAgICAgICB0cmFuc2xhdGVFbGVtZW50KHRoaXMuZWxlbWVudFRvVHJhbnNmb3JtLCAnMHB4Jyk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIHRoZSBjb250ZW50IGhhZCBgZGlzcGxheTogbm9uZWAgd2hlblxuICAgICAgICAgKiB0aGUgcmVmcmVzaGVyIHdhcyBpbml0aWFsaXplZCwgaXRzIGNsaWVudEhlaWdodFxuICAgICAgICAgKiB3aWxsIGJlIDAuIFdoZW4gdGhlIGdlc3R1cmUgc3RhcnRzLCB0aGUgY29udGVudFxuICAgICAgICAgKiB3aWxsIGJlIHZpc2libGUsIHNvIHRyeSB0byBnZXQgdGhlIGNvcnJlY3RcbiAgICAgICAgICogY2xpZW50IGhlaWdodCBhZ2Fpbi4gVGhpcyBpcyBtb3N0IGNvbW1vbiB3aGVuXG4gICAgICAgICAqIHVzaW5nIHRoZSByZWZyZXNoZXIgaW4gYW4gaW9uLW1lbnUuXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoTUFYX1BVTEwgPT09IDApIHtcbiAgICAgICAgICBNQVhfUFVMTCA9IHRoaXMuc2Nyb2xsRWwuY2xpZW50SGVpZ2h0ICogMC4xNjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uTW92ZTogZXYgPT4ge1xuICAgICAgICB0aGlzLmxhc3RWZWxvY2l0eVkgPSBldi52ZWxvY2l0eVk7XG4gICAgICB9LFxuICAgICAgb25FbmQ6ICgpID0+IHtcbiAgICAgICAgdGhpcy5wb2ludGVyRG93biA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRpZFN0YXJ0ID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLm5lZWRzQ29tcGxldGlvbikge1xuICAgICAgICAgIHRoaXMucmVzZXROYXRpdmVSZWZyZXNoZXIodGhpcy5lbGVtZW50VG9UcmFuc2Zvcm0sIDMyIC8qIFJlZnJlc2hlclN0YXRlLkNvbXBsZXRpbmcgKi8pO1xuICAgICAgICAgIHRoaXMubmVlZHNDb21wbGV0aW9uID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5kaWRSZWZyZXNoKSB7XG4gICAgICAgICAgcmVhZFRhc2soKCkgPT4gdHJhbnNsYXRlRWxlbWVudCh0aGlzLmVsZW1lbnRUb1RyYW5zZm9ybSwgYCR7dGhpcy5lbC5jbGllbnRIZWlnaHR9cHhgKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmRpc2FibGVkQ2hhbmdlZCgpO1xuICB9XG4gIGFzeW5jIHNldHVwTUROYXRpdmVSZWZyZXNoZXIoY29udGVudEVsLCBwdWxsaW5nU3Bpbm5lciwgcmVmcmVzaGluZ1NwaW5uZXIpIHtcbiAgICBjb25zdCBjaXJjbGUgPSBnZXRFbGVtZW50Um9vdChwdWxsaW5nU3Bpbm5lcikucXVlcnlTZWxlY3RvcignY2lyY2xlJyk7XG4gICAgY29uc3QgcHVsbGluZ1JlZnJlc2hlckljb24gPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1yZWZyZXNoZXItY29udGVudCAucmVmcmVzaGVyLXB1bGxpbmctaWNvbicpO1xuICAgIGNvbnN0IHJlZnJlc2hpbmdDaXJjbGUgPSBnZXRFbGVtZW50Um9vdChyZWZyZXNoaW5nU3Bpbm5lcikucXVlcnlTZWxlY3RvcignY2lyY2xlJyk7XG4gICAgaWYgKGNpcmNsZSAhPT0gbnVsbCAmJiByZWZyZXNoaW5nQ2lyY2xlICE9PSBudWxsKSB7XG4gICAgICB3cml0ZVRhc2soKCkgPT4ge1xuICAgICAgICBjaXJjbGUuc3R5bGUuc2V0UHJvcGVydHkoJ2FuaW1hdGlvbicsICdub25lJyk7XG4gICAgICAgIC8vIFRoaXMgbGluZXMgdXAgdGhlIGFuaW1hdGlvbiBvbiB0aGUgcmVmcmVzaGluZyBzcGlubmVyIHdpdGggdGhlIHB1bGxpbmcgc3Bpbm5lclxuICAgICAgICByZWZyZXNoaW5nU3Bpbm5lci5zdHlsZS5zZXRQcm9wZXJ0eSgnYW5pbWF0aW9uLWRlbGF5JywgJy02NTVtcycpO1xuICAgICAgICByZWZyZXNoaW5nQ2lyY2xlLnN0eWxlLnNldFByb3BlcnR5KCdhbmltYXRpb24tZGVsYXknLCAnLTY1NW1zJyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5nZXN0dXJlID0gKGF3YWl0IGltcG9ydCgnLi9pbmRleC1DZmdCRjFTRS5qcycpKS5jcmVhdGVHZXN0dXJlKHtcbiAgICAgIGVsOiB0aGlzLnNjcm9sbEVsLFxuICAgICAgZ2VzdHVyZU5hbWU6ICdyZWZyZXNoZXInLFxuICAgICAgZ2VzdHVyZVByaW9yaXR5OiAzMSxcbiAgICAgIGRpcmVjdGlvbjogJ3knLFxuICAgICAgdGhyZXNob2xkOiA1LFxuICAgICAgY2FuU3RhcnQ6ICgpID0+IHRoaXMuc3RhdGUgIT09IDggLyogUmVmcmVzaGVyU3RhdGUuUmVmcmVzaGluZyAqLyAmJiB0aGlzLnN0YXRlICE9PSAzMiAvKiBSZWZyZXNoZXJTdGF0ZS5Db21wbGV0aW5nICovICYmIHRoaXMuc2Nyb2xsRWwuc2Nyb2xsVG9wID09PSAwLFxuICAgICAgb25TdGFydDogZXYgPT4ge1xuICAgICAgICB0aGlzLnByb2dyZXNzID0gMDtcbiAgICAgICAgZXYuZGF0YSA9IHtcbiAgICAgICAgICBhbmltYXRpb246IHVuZGVmaW5lZCxcbiAgICAgICAgICBkaWRTdGFydDogZmFsc2UsXG4gICAgICAgICAgY2FuY2VsbGVkOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIG9uTW92ZTogZXYgPT4ge1xuICAgICAgICBpZiAoZXYudmVsb2NpdHlZIDwgMCAmJiB0aGlzLnByb2dyZXNzID09PSAwICYmICFldi5kYXRhLmRpZFN0YXJ0IHx8IGV2LmRhdGEuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgZXYuZGF0YS5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWV2LmRhdGEuZGlkU3RhcnQpIHtcbiAgICAgICAgICBldi5kYXRhLmRpZFN0YXJ0ID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnN0YXRlID0gMiAvKiBSZWZyZXNoZXJTdGF0ZS5QdWxsaW5nICovO1xuICAgICAgICAgIC8vIFdoZW4gaW9uLXJlZnJlc2hlciBpcyBiZWluZyB1c2VkIHdpdGggYSBjdXN0b20gc2Nyb2xsIHRhcmdldCwgdGhlIG92ZXJmbG93IHN0eWxlcyBuZWVkIHRvIGJlIGFwcGxpZWQgZGlyZWN0bHkgaW5zdGVhZCBvZiB2aWEgYSBjc3MgdmFyaWFibGVcbiAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBzY3JvbGxFbFxuICAgICAgICAgIH0gPSB0aGlzO1xuICAgICAgICAgIGNvbnN0IG92ZXJmbG93UHJvcGVydHkgPSBzY3JvbGxFbC5tYXRjaGVzKElPTl9DT05URU5UX0NMQVNTX1NFTEVDVE9SKSA/ICdvdmVyZmxvdycgOiAnLS1vdmVyZmxvdyc7XG4gICAgICAgICAgd3JpdGVUYXNrKCgpID0+IHNjcm9sbEVsLnN0eWxlLnNldFByb3BlcnR5KG92ZXJmbG93UHJvcGVydHksICdoaWRkZW4nKSk7XG4gICAgICAgICAgY29uc3QgYW5pbWF0aW9uVHlwZSA9IGdldFJlZnJlc2hlckFuaW1hdGlvblR5cGUoY29udGVudEVsKTtcbiAgICAgICAgICBjb25zdCBhbmltYXRpb24gPSBjcmVhdGVQdWxsaW5nQW5pbWF0aW9uKGFuaW1hdGlvblR5cGUsIHB1bGxpbmdSZWZyZXNoZXJJY29uLCB0aGlzLmVsKTtcbiAgICAgICAgICBldi5kYXRhLmFuaW1hdGlvbiA9IGFuaW1hdGlvbjtcbiAgICAgICAgICBhbmltYXRpb24ucHJvZ3Jlc3NTdGFydChmYWxzZSwgMCk7XG4gICAgICAgICAgdGhpcy5pb25TdGFydC5lbWl0KCk7XG4gICAgICAgICAgdGhpcy5hbmltYXRpb25zLnB1c2goYW5pbWF0aW9uKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2luY2Ugd2UgYXJlIHVzaW5nIGFuIGVhc2luZyBjdXJ2ZSwgc2xvdyB0aGUgZ2VzdHVyZSB0cmFja2luZyBkb3duIGEgYml0XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MgPSBjbGFtcCgwLCBldi5kZWx0YVkgLyAxODAgKiAwLjUsIDEpO1xuICAgICAgICBldi5kYXRhLmFuaW1hdGlvbi5wcm9ncmVzc1N0ZXAodGhpcy5wcm9ncmVzcyk7XG4gICAgICAgIHRoaXMuaW9uUHVsbC5lbWl0KCk7XG4gICAgICB9LFxuICAgICAgb25FbmQ6IGV2ID0+IHtcbiAgICAgICAgaWYgKCFldi5kYXRhLmRpZFN0YXJ0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2VzdHVyZS5lbmFibGUoZmFsc2UpO1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgc2Nyb2xsRWxcbiAgICAgICAgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG92ZXJmbG93UHJvcGVydHkgPSBzY3JvbGxFbC5tYXRjaGVzKElPTl9DT05URU5UX0NMQVNTX1NFTEVDVE9SKSA/ICdvdmVyZmxvdycgOiAnLS1vdmVyZmxvdyc7XG4gICAgICAgIHdyaXRlVGFzaygoKSA9PiBzY3JvbGxFbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShvdmVyZmxvd1Byb3BlcnR5KSk7XG4gICAgICAgIGlmICh0aGlzLnByb2dyZXNzIDw9IDAuNCkge1xuICAgICAgICAgIGV2LmRhdGEuYW5pbWF0aW9uLnByb2dyZXNzRW5kKDAsIHRoaXMucHJvZ3Jlc3MsIDUwMCkub25GaW5pc2goKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25zLmZvckVhY2goYW5pID0+IGFuaS5kZXN0cm95KCkpO1xuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25zID0gW107XG4gICAgICAgICAgICB0aGlzLmdlc3R1cmUuZW5hYmxlKHRydWUpO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IDEgLyogUmVmcmVzaGVyU3RhdGUuSW5hY3RpdmUgKi87XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByb2dyZXNzID0gZ2V0VGltZUdpdmVuUHJvZ3Jlc3Npb24oWzAsIDBdLCBbMCwgMF0sIFsxLCAxXSwgWzEsIDFdLCB0aGlzLnByb2dyZXNzKVswXTtcbiAgICAgICAgY29uc3Qgc25hcEJhY2tBbmltYXRpb24gPSBjcmVhdGVTbmFwQmFja0FuaW1hdGlvbihwdWxsaW5nUmVmcmVzaGVySWNvbik7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucy5wdXNoKHNuYXBCYWNrQW5pbWF0aW9uKTtcbiAgICAgICAgd3JpdGVUYXNrKGFzeW5jICgpID0+IHtcbiAgICAgICAgICBwdWxsaW5nUmVmcmVzaGVySWNvbi5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1pb24tcHVsbGluZy1yZWZyZXNoZXItdHJhbnNsYXRlJywgYCR7cHJvZ3Jlc3MgKiAxMDB9cHhgKTtcbiAgICAgICAgICBldi5kYXRhLmFuaW1hdGlvbi5wcm9ncmVzc0VuZCgpO1xuICAgICAgICAgIGF3YWl0IHNuYXBCYWNrQW5pbWF0aW9uLnBsYXkoKTtcbiAgICAgICAgICB0aGlzLmJlZ2luUmVmcmVzaCgpO1xuICAgICAgICAgIGV2LmRhdGEuYW5pbWF0aW9uLmRlc3Ryb3koKTtcbiAgICAgICAgICB0aGlzLmdlc3R1cmUuZW5hYmxlKHRydWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmRpc2FibGVkQ2hhbmdlZCgpO1xuICB9XG4gIGFzeW5jIHNldHVwTmF0aXZlUmVmcmVzaGVyKGNvbnRlbnRFbCkge1xuICAgIGlmICh0aGlzLnNjcm9sbExpc3RlbmVyQ2FsbGJhY2sgfHwgIWNvbnRlbnRFbCB8fCB0aGlzLm5hdGl2ZVJlZnJlc2hlciB8fCAhdGhpcy5zY3JvbGxFbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJZiB1c2luZyBub24tbmF0aXZlIHJlZnJlc2hlciBiZWZvcmUgbWFrZSBzdXJlXG4gICAgICogd2UgY2xlYW4gdXAgYW55IG9sZCBDU1MuIFRoaXMgY2FuIGhhcHBlbiB3aGVuXG4gICAgICogYSB1c2VyIG1hbnVhbGx5IGNhbGxzIHRoZSByZWZyZXNoIG1ldGhvZCBpbiBhXG4gICAgICogY29tcG9uZW50IGNyZWF0ZSBjYWxsYmFjayBiZWZvcmUgdGhlIG5hdGl2ZVxuICAgICAqIHJlZnJlc2hlciBpcyBzZXR1cC5cbiAgICAgKi9cbiAgICB0aGlzLnNldENzcygwLCAnJywgZmFsc2UsICcnKTtcbiAgICB0aGlzLm5hdGl2ZVJlZnJlc2hlciA9IHRydWU7XG4gICAgY29uc3QgcHVsbGluZ1NwaW5uZXIgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1yZWZyZXNoZXItY29udGVudCAucmVmcmVzaGVyLXB1bGxpbmcgaW9uLXNwaW5uZXInKTtcbiAgICBjb25zdCByZWZyZXNoaW5nU3Bpbm5lciA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignaW9uLXJlZnJlc2hlci1jb250ZW50IC5yZWZyZXNoZXItcmVmcmVzaGluZyBpb24tc3Bpbm5lcicpO1xuICAgIGlmIChnZXRJb25Nb2RlKHRoaXMpID09PSAnaW9zJykge1xuICAgICAgdGhpcy5zZXR1cGlPU05hdGl2ZVJlZnJlc2hlcihwdWxsaW5nU3Bpbm5lciwgcmVmcmVzaGluZ1NwaW5uZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldHVwTUROYXRpdmVSZWZyZXNoZXIoY29udGVudEVsLCBwdWxsaW5nU3Bpbm5lciwgcmVmcmVzaGluZ1NwaW5uZXIpO1xuICAgIH1cbiAgfVxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy5jaGVja05hdGl2ZVJlZnJlc2hlcigpO1xuICB9XG4gIGFzeW5jIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGlmICh0aGlzLmVsLmdldEF0dHJpYnV0ZSgnc2xvdCcpICE9PSAnZml4ZWQnKSB7XG4gICAgICBwcmludElvbkVycm9yKCdbaW9uLXJlZnJlc2hlcl0gLSBNYWtlIHN1cmUgeW91IHVzZTogPGlvbi1yZWZyZXNoZXIgc2xvdD1cImZpeGVkXCI+Jyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNvbnRlbnRFbCA9IHRoaXMuZWwuY2xvc2VzdChJT05fQ09OVEVOVF9FTEVNRU5UX1NFTEVDVE9SKTtcbiAgICBpZiAoIWNvbnRlbnRFbCkge1xuICAgICAgcHJpbnRJb25Db250ZW50RXJyb3JNc2codGhpcy5lbCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFdhaXRzIGZvciB0aGUgY29udGVudCB0byBiZSByZWFkeSBiZWZvcmUgcXVlcnlpbmcgdGhlIHNjcm9sbFxuICAgICAqIG9yIHRoZSBiYWNrZ3JvdW5kIGNvbnRlbnQgZWxlbWVudC5cbiAgICAgKi9cbiAgICBjb21wb25lbnRPblJlYWR5KGNvbnRlbnRFbCwgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgY3VzdG9tU2Nyb2xsVGFyZ2V0ID0gY29udGVudEVsLnF1ZXJ5U2VsZWN0b3IoSU9OX0NPTlRFTlRfQ0xBU1NfU0VMRUNUT1IpO1xuICAgICAgLyoqXG4gICAgICAgKiBRdWVyeSB0aGUgY3VzdG9tIHNjcm9sbCB0YXJnZXQgKGlmIGF2YWlsYWJsZSksIGZpcnN0LiBJbiByZWZyZXNoZXIgaW1wbGVtZW50YXRpb25zLFxuICAgICAgICogdGhlIGlvbi1yZWZyZXNoZXIgZWxlbWVudCB3aWxsIGFsd2F5cyBiZSBhIGRpcmVjdCBjaGlsZCBvZiBpb24tY29udGVudCAoc2xvdD1cImZpeGVkXCIpLiBCeVxuICAgICAgICogcXVlcnlpbmcgdGhlIGN1c3RvbSBzY3JvbGwgdGFyZ2V0IGZpcnN0IGFuZCBmYWxsaW5nIGJhY2sgdG8gdGhlIGlvbi1jb250ZW50IGVsZW1lbnQsXG4gICAgICAgKiB0aGUgY29ycmVjdCBzY3JvbGwgZWxlbWVudCB3aWxsIGJlIHJldHVybmVkIGJ5IHRoZSBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAqL1xuICAgICAgdGhpcy5zY3JvbGxFbCA9IGF3YWl0IGdldFNjcm9sbEVsZW1lbnQoY3VzdG9tU2Nyb2xsVGFyZ2V0ICE9PSBudWxsICYmIGN1c3RvbVNjcm9sbFRhcmdldCAhPT0gdm9pZCAwID8gY3VzdG9tU2Nyb2xsVGFyZ2V0IDogY29udGVudEVsKTtcbiAgICAgIC8qKlxuICAgICAgICogUXVlcnkgdGhlIGJhY2tncm91bmQgY29udGVudCBlbGVtZW50IGZyb20gdGhlIGhvc3QgaW9uLWNvbnRlbnQgZWxlbWVudCBkaXJlY3RseS5cbiAgICAgICAqL1xuICAgICAgdGhpcy5iYWNrZ3JvdW5kQ29udGVudEVsID0gYXdhaXQgY29udGVudEVsLmdldEJhY2tncm91bmRFbGVtZW50KCk7XG4gICAgICAvKipcbiAgICAgICAqIENoZWNrIGlmIHRoZSBjb250ZW50IGVsZW1lbnQgaXMgZnVsbHNjcmVlbiB0byBhcHBseSB0aGUgY29ycmVjdCBzdHlsZXNcbiAgICAgICAqIHdoZW4gdGhlIHJlZnJlc2hlciBpcyByZWZyZXNoaW5nLiBPdGhlcndpc2UsIHRoZSByZWZyZXNoZXIgd2lsbCBiZVxuICAgICAgICogaGlkZGVuIGJlY2F1c2UgaXQgaXMgcG9zaXRpb25lZCBiZWhpbmQgdGhlIGJhY2tncm91bmQgY29udGVudCBlbGVtZW50LlxuICAgICAgICovXG4gICAgICB0aGlzLmNvbnRlbnRGdWxsc2NyZWVuID0gY29udGVudEVsLmZ1bGxzY3JlZW47XG4gICAgICBpZiAoYXdhaXQgc2hvdWxkVXNlTmF0aXZlUmVmcmVzaGVyKHRoaXMuZWwsIGdldElvbk1vZGUodGhpcykpKSB7XG4gICAgICAgIHRoaXMuc2V0dXBOYXRpdmVSZWZyZXNoZXIoY29udGVudEVsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZ2VzdHVyZSA9IChhd2FpdCBpbXBvcnQoJy4vaW5kZXgtQ2ZnQkYxU0UuanMnKSkuY3JlYXRlR2VzdHVyZSh7XG4gICAgICAgICAgZWw6IGNvbnRlbnRFbCxcbiAgICAgICAgICBnZXN0dXJlTmFtZTogJ3JlZnJlc2hlcicsXG4gICAgICAgICAgZ2VzdHVyZVByaW9yaXR5OiAzMSxcbiAgICAgICAgICBkaXJlY3Rpb246ICd5JyxcbiAgICAgICAgICB0aHJlc2hvbGQ6IDIwLFxuICAgICAgICAgIHBhc3NpdmU6IGZhbHNlLFxuICAgICAgICAgIGNhblN0YXJ0OiAoKSA9PiB0aGlzLmNhblN0YXJ0KCksXG4gICAgICAgICAgb25TdGFydDogKCkgPT4gdGhpcy5vblN0YXJ0KCksXG4gICAgICAgICAgb25Nb3ZlOiBldiA9PiB0aGlzLm9uTW92ZShldiksXG4gICAgICAgICAgb25FbmQ6ICgpID0+IHRoaXMub25FbmQoKVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5kaXNhYmxlZENoYW5nZWQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLmRlc3Ryb3lOYXRpdmVSZWZyZXNoZXIoKTtcbiAgICB0aGlzLnNjcm9sbEVsID0gdW5kZWZpbmVkO1xuICAgIGlmICh0aGlzLmdlc3R1cmUpIHtcbiAgICAgIHRoaXMuZ2VzdHVyZS5kZXN0cm95KCk7XG4gICAgICB0aGlzLmdlc3R1cmUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBDYWxsIGBjb21wbGV0ZSgpYCB3aGVuIHlvdXIgYXN5bmMgb3BlcmF0aW9uIGhhcyBjb21wbGV0ZWQuXG4gICAqIEZvciBleGFtcGxlLCB0aGUgYHJlZnJlc2hpbmdgIHN0YXRlIGlzIHdoaWxlIHRoZSBhcHAgaXMgcGVyZm9ybWluZ1xuICAgKiBhbiBhc3luY2hyb25vdXMgb3BlcmF0aW9uLCBzdWNoIGFzIHJlY2VpdmluZyBtb3JlIGRhdGEgZnJvbSBhblxuICAgKiBBSkFYIHJlcXVlc3QuIE9uY2UgdGhlIGRhdGEgaGFzIGJlZW4gcmVjZWl2ZWQsIHlvdSB0aGVuIGNhbGwgdGhpc1xuICAgKiBtZXRob2QgdG8gc2lnbmlmeSB0aGF0IHRoZSByZWZyZXNoaW5nIGhhcyBjb21wbGV0ZWQgYW5kIHRvIGNsb3NlXG4gICAqIHRoZSByZWZyZXNoZXIuIFRoaXMgbWV0aG9kIGFsc28gY2hhbmdlcyB0aGUgcmVmcmVzaGVyJ3Mgc3RhdGUgZnJvbVxuICAgKiBgcmVmcmVzaGluZ2AgdG8gYGNvbXBsZXRpbmdgLlxuICAgKi9cbiAgYXN5bmMgY29tcGxldGUoKSB7XG4gICAgaWYgKHRoaXMubmF0aXZlUmVmcmVzaGVyKSB7XG4gICAgICB0aGlzLm5lZWRzQ29tcGxldGlvbiA9IHRydWU7XG4gICAgICAvLyBEbyBub3QgcmVzZXQgc2Nyb2xsIGVsIHVudGlsIHVzZXIgcmVtb3ZlcyBwb2ludGVyIGZyb20gc2NyZWVuXG4gICAgICBpZiAoIXRoaXMucG9pbnRlckRvd24pIHtcbiAgICAgICAgcmFmKCgpID0+IHJhZigoKSA9PiB0aGlzLnJlc2V0TmF0aXZlUmVmcmVzaGVyKHRoaXMuZWxlbWVudFRvVHJhbnNmb3JtLCAzMiAvKiBSZWZyZXNoZXJTdGF0ZS5Db21wbGV0aW5nICovKSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsb3NlKDMyIC8qIFJlZnJlc2hlclN0YXRlLkNvbXBsZXRpbmcgKi8sICcxMjBtcycpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgcmVmcmVzaGVyJ3Mgc3RhdGUgZnJvbSBgcmVmcmVzaGluZ2AgdG8gYGNhbmNlbGxpbmdgLlxuICAgKi9cbiAgYXN5bmMgY2FuY2VsKCkge1xuICAgIGlmICh0aGlzLm5hdGl2ZVJlZnJlc2hlcikge1xuICAgICAgLy8gRG8gbm90IHJlc2V0IHNjcm9sbCBlbCB1bnRpbCB1c2VyIHJlbW92ZXMgcG9pbnRlciBmcm9tIHNjcmVlblxuICAgICAgaWYgKCF0aGlzLnBvaW50ZXJEb3duKSB7XG4gICAgICAgIHJhZigoKSA9PiByYWYoKCkgPT4gdGhpcy5yZXNldE5hdGl2ZVJlZnJlc2hlcih0aGlzLmVsZW1lbnRUb1RyYW5zZm9ybSwgMTYgLyogUmVmcmVzaGVyU3RhdGUuQ2FuY2VsbGluZyAqLykpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbG9zZSgxNiAvKiBSZWZyZXNoZXJTdGF0ZS5DYW5jZWxsaW5nICovLCAnJyk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBBIG51bWJlciByZXByZXNlbnRpbmcgaG93IGZhciBkb3duIHRoZSB1c2VyIGhhcyBwdWxsZWQuXG4gICAqIFRoZSBudW1iZXIgYDBgIHJlcHJlc2VudHMgdGhlIHVzZXIgaGFzbid0IHB1bGxlZCBkb3duIGF0IGFsbC4gVGhlXG4gICAqIG51bWJlciBgMWAsIGFuZCBhbnl0aGluZyBncmVhdGVyIHRoYW4gYDFgLCByZXByZXNlbnRzIHRoYXQgdGhlIHVzZXJcbiAgICogaGFzIHB1bGxlZCBmYXIgZW5vdWdoIGRvd24gdGhhdCB3aGVuIHRoZXkgbGV0IGdvIHRoZW4gdGhlIHJlZnJlc2ggd2lsbFxuICAgKiBoYXBwZW4uIElmIHRoZXkgbGV0IGdvIGFuZCB0aGUgbnVtYmVyIGlzIGxlc3MgdGhhbiBgMWAsIHRoZW4gdGhlXG4gICAqIHJlZnJlc2ggd2lsbCBub3QgaGFwcGVuLCBhbmQgdGhlIGNvbnRlbnQgd2lsbCByZXR1cm4gdG8gaXQncyBvcmlnaW5hbFxuICAgKiBwb3NpdGlvbi5cbiAgICovXG4gIGdldFByb2dyZXNzKCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5wcm9ncmVzcyk7XG4gIH1cbiAgY2FuU3RhcnQoKSB7XG4gICAgaWYgKCF0aGlzLnNjcm9sbEVsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlICE9PSAxIC8qIFJlZnJlc2hlclN0YXRlLkluYWN0aXZlICovKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIGlmIHRoZSBzY3JvbGxUb3AgaXMgZ3JlYXRlciB0aGFuIHplcm8gdGhlbiBpdCdzXG4gICAgLy8gbm90IHBvc3NpYmxlIHRvIHB1bGwgdGhlIGNvbnRlbnQgZG93biB5ZXRcbiAgICBpZiAodGhpcy5zY3JvbGxFbC5zY3JvbGxUb3AgPiAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIG9uU3RhcnQoKSB7XG4gICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gICAgdGhpcy5zdGF0ZSA9IDEgLyogUmVmcmVzaGVyU3RhdGUuSW5hY3RpdmUgKi87XG4gICAgdGhpcy5tZW1vaXplT3ZlcmZsb3dTdHlsZSgpO1xuICAgIC8qKlxuICAgICAqIElmIHRoZSBjb250ZW50IGlzIGZ1bGxzY3JlZW4sIHRoZW4gd2UgbmVlZCB0b1xuICAgICAqIHNldCB0aGUgb2Zmc2V0LXRvcCBzdHlsZSBvbiB0aGUgYmFja2dyb3VuZCBjb250ZW50XG4gICAgICogZWxlbWVudCB0byBlbnN1cmUgdGhhdCB0aGUgcmVmcmVzaGVyIGlzIHNob3duLlxuICAgICAqL1xuICAgIGlmICh0aGlzLmNvbnRlbnRGdWxsc2NyZWVuICYmIHRoaXMuYmFja2dyb3VuZENvbnRlbnRFbCkge1xuICAgICAgdGhpcy5iYWNrZ3JvdW5kQ29udGVudEVsLnN0eWxlLnNldFByb3BlcnR5KCctLW9mZnNldC10b3AnLCAnMHB4Jyk7XG4gICAgfVxuICB9XG4gIG9uTW92ZShkZXRhaWwpIHtcbiAgICBpZiAoIXRoaXMuc2Nyb2xsRWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gdGhpcyBtZXRob2QgY2FuIGdldCBjYWxsZWQgbGlrZSBhIGJhemlsbGlvbiB0aW1lcyBwZXIgc2Vjb25kLFxuICAgIC8vIHNvIGl0J3MgYnVpbHQgdG8gYmUgYXMgZWZmaWNpZW50IGFzIHBvc3NpYmxlLCBhbmQgZG9lcyBpdHNcbiAgICAvLyBiZXN0IHRvIGRvIGFueSBET00gcmVhZC93cml0ZXMgb25seSB3aGVuIGFic29sdXRlbHkgbmVjZXNzYXJ5XG4gICAgLy8gaWYgbXVsdGktdG91Y2ggdGhlbiBnZXQgb3V0IGltbWVkaWF0ZWx5XG4gICAgY29uc3QgZXYgPSBkZXRhaWwuZXZlbnQ7XG4gICAgaWYgKGV2LnRvdWNoZXMgIT09IHVuZGVmaW5lZCAmJiBldi50b3VjaGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gZG8gbm90aGluZyBpZiBpdCdzIGFjdGl2ZWx5IHJlZnJlc2hpbmdcbiAgICAvLyBvciBpdCdzIGluIHRoZSB3YXkgb2YgY2xvc2luZ1xuICAgIC8vIG9yIHRoaXMgd2FzIG5ldmVyIGEgc3RhcnRZXG4gICAgaWYgKCh0aGlzLnN0YXRlICYgNTYgLyogUmVmcmVzaGVyU3RhdGUuX0JVU1lfICovKSAhPT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwdWxsRmFjdG9yID0gTnVtYmVyLmlzTmFOKHRoaXMucHVsbEZhY3RvcikgfHwgdGhpcy5wdWxsRmFjdG9yIDwgMCA/IDEgOiB0aGlzLnB1bGxGYWN0b3I7XG4gICAgY29uc3QgZGVsdGFZID0gZGV0YWlsLmRlbHRhWSAqIHB1bGxGYWN0b3I7XG4gICAgLy8gZG9uJ3QgYm90aGVyIGlmIHRoZXkncmUgc2Nyb2xsaW5nIHVwXG4gICAgLy8gYW5kIGhhdmUgbm90IGFscmVhZHkgc3RhcnRlZCBkcmFnZ2luZ1xuICAgIGlmIChkZWx0YVkgPD0gMCkge1xuICAgICAgLy8gdGhlIGN1cnJlbnQgWSBpcyBoaWdoZXIgdGhhbiB0aGUgc3RhcnRpbmcgWVxuICAgICAgLy8gc28gdGhleSBzY3JvbGxlZCB1cCBlbm91Z2ggdG8gYmUgaWdub3JlZFxuICAgICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gICAgICB0aGlzLnN0YXRlID0gMSAvKiBSZWZyZXNoZXJTdGF0ZS5JbmFjdGl2ZSAqLztcbiAgICAgIGlmICh0aGlzLmFwcGxpZWRTdHlsZXMpIHtcbiAgICAgICAgLy8gcmVzZXQgdGhlIHN0eWxlcyBvbmx5IGlmIHRoZXkgd2VyZSBhcHBsaWVkXG4gICAgICAgIHRoaXMuc2V0Q3NzKDAsICcnLCBmYWxzZSwgJycpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlID09PSAxIC8qIFJlZnJlc2hlclN0YXRlLkluYWN0aXZlICovKSB7XG4gICAgICAvLyB0aGlzIHJlZnJlc2ggaXMgbm90IGFscmVhZHkgYWN0aXZlbHkgcHVsbGluZyBkb3duXG4gICAgICAvLyBnZXQgdGhlIGNvbnRlbnQncyBzY3JvbGxUb3BcbiAgICAgIGNvbnN0IHNjcm9sbEhvc3RTY3JvbGxUb3AgPSB0aGlzLnNjcm9sbEVsLnNjcm9sbFRvcDtcbiAgICAgIC8vIGlmIHRoZSBzY3JvbGxUb3AgaXMgZ3JlYXRlciB0aGFuIHplcm8gdGhlbiBpdCdzXG4gICAgICAvLyBub3QgcG9zc2libGUgdG8gcHVsbCB0aGUgY29udGVudCBkb3duIHlldFxuICAgICAgaWYgKHNjcm9sbEhvc3RTY3JvbGxUb3AgPiAwKSB7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBjb250ZW50IHNjcm9sbGVkIGFsbCB0aGUgd2F5IHRvIHRoZSB0b3AsIGFuZCBkcmFnZ2luZyBkb3duXG4gICAgICB0aGlzLnN0YXRlID0gMiAvKiBSZWZyZXNoZXJTdGF0ZS5QdWxsaW5nICovO1xuICAgIH1cbiAgICAvLyBwcmV2ZW50IG5hdGl2ZSBzY3JvbGwgZXZlbnRzXG4gICAgaWYgKGV2LmNhbmNlbGFibGUpIHtcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIC8vIHRoZSByZWZyZXNoZXIgaXMgYWN0aXZlbHkgcHVsbGluZyBhdCB0aGlzIHBvaW50XG4gICAgLy8gbW92ZSB0aGUgc2Nyb2xsIGVsZW1lbnQgd2l0aGluIHRoZSBjb250ZW50IGVsZW1lbnRcbiAgICB0aGlzLnNldENzcyhkZWx0YVksICcwbXMnLCB0cnVlLCAnJyk7XG4gICAgaWYgKGRlbHRhWSA9PT0gMCkge1xuICAgICAgLy8gZG9uJ3QgY29udGludWUgaWYgdGhlcmUncyBubyBkZWx0YSB5ZXRcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwdWxsTWluID0gdGhpcy5wdWxsTWluO1xuICAgIC8vIHNldCBwdWxsIHByb2dyZXNzXG4gICAgdGhpcy5wcm9ncmVzcyA9IGRlbHRhWSAvIHB1bGxNaW47XG4gICAgLy8gZW1pdCBcInN0YXJ0XCIgaWYgaXQgaGFzbid0IHN0YXJ0ZWQgeWV0XG4gICAgaWYgKCF0aGlzLmRpZFN0YXJ0KSB7XG4gICAgICB0aGlzLmRpZFN0YXJ0ID0gdHJ1ZTtcbiAgICAgIHRoaXMuaW9uU3RhcnQuZW1pdCgpO1xuICAgIH1cbiAgICAvLyBlbWl0IFwicHVsbGluZ1wiIG9uIGV2ZXJ5IG1vdmVcbiAgICB0aGlzLmlvblB1bGwuZW1pdCgpO1xuICAgIC8vIGRvIG5vdGhpbmcgaWYgdGhlIGRlbHRhIGlzIGxlc3MgdGhhbiB0aGUgcHVsbCB0aHJlc2hvbGRcbiAgICBpZiAoZGVsdGFZIDwgcHVsbE1pbikge1xuICAgICAgLy8gZW5zdXJlIGl0IHN0YXlzIGluIHRoZSBwdWxsaW5nIHN0YXRlLCBjdXogaXRzIG5vdCByZWFkeSB5ZXRcbiAgICAgIHRoaXMuc3RhdGUgPSAyIC8qIFJlZnJlc2hlclN0YXRlLlB1bGxpbmcgKi87XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChkZWx0YVkgPiB0aGlzLnB1bGxNYXgpIHtcbiAgICAgIC8vIHRoZXkgcHVsbGVkIGZhcnRoZXIgdGhhbiB0aGUgbWF4LCBzbyBraWNrIG9mZiB0aGUgcmVmcmVzaFxuICAgICAgdGhpcy5iZWdpblJlZnJlc2goKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gcHVsbGVkIGZhcnRoZXIgdGhhbiB0aGUgcHVsbCBtaW4hIVxuICAgIC8vIGl0IGlzIG5vdyBpbiB0aGUgYHJlYWR5YCBzdGF0ZSEhXG4gICAgLy8gaWYgdGhleSBsZXQgZ28gdGhlbiBpdCdsbCByZWZyZXNoLCBrZXJwb3chIVxuICAgIHRoaXMuc3RhdGUgPSA0IC8qIFJlZnJlc2hlclN0YXRlLlJlYWR5ICovO1xuICAgIHJldHVybjtcbiAgfVxuICBvbkVuZCgpIHtcbiAgICAvLyBvbmx5IHJ1biBpbiBhIHpvbmUgd2hlbiBhYnNvbHV0ZWx5IG5lY2Vzc2FyeVxuICAgIGlmICh0aGlzLnN0YXRlID09PSA0IC8qIFJlZnJlc2hlclN0YXRlLlJlYWR5ICovKSB7XG4gICAgICAvLyB0aGV5IHB1bGxlZCBkb3duIGZhciBlbm91Z2gsIHNvIGl0J3MgcmVhZHkgdG8gcmVmcmVzaFxuICAgICAgdGhpcy5iZWdpblJlZnJlc2goKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09IDIgLyogUmVmcmVzaGVyU3RhdGUuUHVsbGluZyAqLykge1xuICAgICAgLy8gdGhleSB3ZXJlIHB1bGxpbmcgZG93biwgYnV0IGRpZG4ndCBwdWxsIGRvd24gZmFyIGVub3VnaFxuICAgICAgLy8gc2V0IHRoZSBjb250ZW50IGJhY2sgdG8gaXQncyBvcmlnaW5hbCBsb2NhdGlvblxuICAgICAgLy8gYW5kIGNsb3NlIHRoZSByZWZyZXNoZXJcbiAgICAgIC8vIHNldCB0aGF0IHRoZSByZWZyZXNoIGlzIGFjdGl2ZWx5IGNhbmNlbGxpbmdcbiAgICAgIHRoaXMuY2FuY2VsKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09PSAxIC8qIFJlZnJlc2hlclN0YXRlLkluYWN0aXZlICovKSB7XG4gICAgICAvKipcbiAgICAgICAqIFRoZSBwdWxsIHRvIHJlZnJlc2ggZ2VzdHVyZSB3YXMgYWJvcnRlZFxuICAgICAgICogc28gd2Ugc2hvdWxkIGltbWVkaWF0ZWx5IHJlc3RvcmUgYW55IG92ZXJmbG93IHN0eWxlc1xuICAgICAgICogdGhhdCBoYXZlIGJlZW4gbW9kaWZpZWQuIERvIG5vdCBjYWxsIHRoaXMuY2FuY2VsXG4gICAgICAgKiBiZWNhdXNlIHRoZSBzdHlsZXMgd2lsbCBvbmx5IGJlIHJlc2V0IGFmdGVyIGEgdGltZW91dC5cbiAgICAgICAqIElmIHRoZSBnZXN0dXJlIGlzIGFib3J0ZWQgdGhlbiBzY3JvbGxpbmcgc2hvdWxkIGJlXG4gICAgICAgKiBhdmFpbGFibGUgcmlnaHQgYXdheS5cbiAgICAgICAqL1xuICAgICAgdGhpcy5yZXN0b3JlT3ZlcmZsb3dTdHlsZSgpO1xuICAgIH1cbiAgfVxuICBiZWdpblJlZnJlc2goKSB7XG4gICAgLy8gYXNzdW1lcyB3ZSdyZSBhbHJlYWR5IGJhY2sgaW4gYSB6b25lXG4gICAgLy8gdGhleSBwdWxsZWQgZG93biBmYXIgZW5vdWdoLCBzbyBpdCdzIHJlYWR5IHRvIHJlZnJlc2hcbiAgICB0aGlzLnN0YXRlID0gOCAvKiBSZWZyZXNoZXJTdGF0ZS5SZWZyZXNoaW5nICovO1xuICAgIC8vIHBsYWNlIHRoZSBjb250ZW50IGluIGEgaGFuZ291dCBwb3NpdGlvbiB3aGlsZSBpdCB0aGlua3NcbiAgICB0aGlzLnNldENzcyh0aGlzLnB1bGxNaW4sIHRoaXMuc25hcGJhY2tEdXJhdGlvbiwgdHJ1ZSwgJycpO1xuICAgIC8qKlxuICAgICAqIENsZWFyIGZvY3VzIGZyb20gYW55IGFjdGl2ZSBlbGVtZW50IHRvIHByZXZlbnQgdGhlIGJyb3dzZXJcbiAgICAgKiBmcm9tIHJlc3RvcmluZyBmb2N1cyBhbmQgY2F1c2luZyBzY3JvbGwganVtcHMgYWZ0ZXIgcmVmcmVzaC5cbiAgICAgKiBUaGlzIGVuc3VyZXMgdGhlIHZpZXcgc3RheXMgYXQgdGhlIHRvcCBhZnRlciByZWZyZXNoIGNvbXBsZXRlcy5cbiAgICAgKi9cbiAgICBjb25zdCBhY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICBpZiAoKGFjdGl2ZUVsZW1lbnQgPT09IG51bGwgfHwgYWN0aXZlRWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogYWN0aXZlRWxlbWVudC5ibHVyKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBhY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICB9XG4gICAgLy8gZW1pdCBcInJlZnJlc2hcIiBiZWNhdXNlIGl0IHdhcyBwdWxsZWQgZG93biBmYXIgZW5vdWdoXG4gICAgLy8gYW5kIHRoZXkgbGV0IGdvIHRvIGJlZ2luIHJlZnJlc2hpbmdcbiAgICB0aGlzLmlvblJlZnJlc2guZW1pdCh7XG4gICAgICBjb21wbGV0ZTogdGhpcy5jb21wbGV0ZS5iaW5kKHRoaXMpXG4gICAgfSk7XG4gIH1cbiAgY2xvc2Uoc3RhdGUsIGRlbGF5KSB7XG4gICAgLy8gY3JlYXRlIGZhbGxiYWNrIHRpbWVyIGluY2FzZSBzb21ldGhpbmcgZ29lcyB3cm9uZyB3aXRoIHRyYW5zaXRpb25FbmQgZXZlbnRcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHZhciBfYTtcbiAgICAgIHRoaXMuc3RhdGUgPSAxIC8qIFJlZnJlc2hlclN0YXRlLkluYWN0aXZlICovO1xuICAgICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gICAgICB0aGlzLmRpZFN0YXJ0ID0gZmFsc2U7XG4gICAgICAvKipcbiAgICAgICAqIFJlc2V0IGFueSBvdmVyZmxvdyBzdHlsZXMgc28gdGhlXG4gICAgICAgKiB1c2VyIGNhbiBzY3JvbGwgYWdhaW4uXG4gICAgICAgKi9cbiAgICAgIHRoaXMuc2V0Q3NzKDAsICcwbXMnLCBmYWxzZSwgJycsIHRydWUpO1xuICAgICAgLyoqXG4gICAgICAgKiBSZXNldCB0aGUgb2Zmc2V0LXRvcCBzdHlsZSBvbiB0aGUgYmFja2dyb3VuZCBjb250ZW50XG4gICAgICAgKiB3aGVuIHRoZSByZWZyZXNoZXIgaXMgbm8gbG9uZ2VyIHJlZnJlc2hpbmcgYW5kIHRoZVxuICAgICAgICogY29udGVudCBpcyBmdWxsc2NyZWVuLlxuICAgICAgICpcbiAgICAgICAqIFRoaXMgZW5zdXJlcyB0aGF0IHRoZSBiZWhhdmlvciBvZiBiYWNrZ3JvdW5kIGNvbnRlbnRcbiAgICAgICAqIGRvZXMgbm90IGNoYW5nZSB3aGVuIHJlZnJlc2hpbmcgaXMgY29tcGxldGUuXG4gICAgICAgKi9cbiAgICAgIGlmICh0aGlzLmNvbnRlbnRGdWxsc2NyZWVuICYmIHRoaXMuYmFja2dyb3VuZENvbnRlbnRFbCkge1xuICAgICAgICAoX2EgPSB0aGlzLmJhY2tncm91bmRDb250ZW50RWwpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnLS1vZmZzZXQtdG9wJyk7XG4gICAgICB9XG4gICAgfSwgNjAwKTtcbiAgICAvLyByZXNldCB0aGUgc3R5bGVzIG9uIHRoZSBzY3JvbGwgZWxlbWVudFxuICAgIC8vIHNldCB0aGF0IHRoZSByZWZyZXNoIGlzIGFjdGl2ZWx5IGNhbmNlbGxpbmcvY29tcGxldGluZ1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB0aGlzLnNldENzcygwLCB0aGlzLmNsb3NlRHVyYXRpb24sIHRydWUsIGRlbGF5KTtcbiAgfVxuICBzZXRDc3MoeSwgZHVyYXRpb24sIG92ZXJmbG93VmlzaWJsZSwgZGVsYXksIHNob3VsZFJlc3RvcmVPdmVyZmxvd1N0eWxlID0gZmFsc2UpIHtcbiAgICBpZiAodGhpcy5uYXRpdmVSZWZyZXNoZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5hcHBsaWVkU3R5bGVzID0geSA+IDA7XG4gICAgd3JpdGVUYXNrKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLnNjcm9sbEVsICYmIHRoaXMuYmFja2dyb3VuZENvbnRlbnRFbCkge1xuICAgICAgICBjb25zdCBzY3JvbGxTdHlsZSA9IHRoaXMuc2Nyb2xsRWwuc3R5bGU7XG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRTdHlsZSA9IHRoaXMuYmFja2dyb3VuZENvbnRlbnRFbC5zdHlsZTtcbiAgICAgICAgc2Nyb2xsU3R5bGUudHJhbnNmb3JtID0gYmFja2dyb3VuZFN0eWxlLnRyYW5zZm9ybSA9IHkgPiAwID8gYHRyYW5zbGF0ZVkoJHt5fXB4KSB0cmFuc2xhdGVaKDBweClgIDogJyc7XG4gICAgICAgIHNjcm9sbFN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGJhY2tncm91bmRTdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICAgICAgc2Nyb2xsU3R5bGUudHJhbnNpdGlvbkRlbGF5ID0gYmFja2dyb3VuZFN0eWxlLnRyYW5zaXRpb25EZWxheSA9IGRlbGF5O1xuICAgICAgICBzY3JvbGxTdHlsZS5vdmVyZmxvdyA9IG92ZXJmbG93VmlzaWJsZSA/ICdoaWRkZW4nIDogJyc7XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIFJlc2V0IHRoZSBvdmVyZmxvdyBzdHlsZXMgb25seSBvbmNlXG4gICAgICAgKiB0aGUgcHVsbCB0byByZWZyZXNoIGVmZmVjdCBoYXMgYmVlbiBjbG9zZWQuXG4gICAgICAgKiBUaGlzIGVuc3VyZXMgdGhhdCB0aGUgZ2VzdHVyZSBpcyBkb25lXG4gICAgICAgKiBhbmQgdGhlIHJlZnJlc2ggb3BlcmF0aW9uIGhhcyBlaXRoZXJcbiAgICAgICAqIGJlZW4gYWJvcnRlZCBvciBoYXMgY29tcGxldGVkLlxuICAgICAgICovXG4gICAgICBpZiAoc2hvdWxkUmVzdG9yZU92ZXJmbG93U3R5bGUpIHtcbiAgICAgICAgdGhpcy5yZXN0b3JlT3ZlcmZsb3dTdHlsZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIG1lbW9pemVPdmVyZmxvd1N0eWxlKCkge1xuICAgIGlmICh0aGlzLnNjcm9sbEVsKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIG92ZXJmbG93LFxuICAgICAgICBvdmVyZmxvd1gsXG4gICAgICAgIG92ZXJmbG93WVxuICAgICAgfSA9IHRoaXMuc2Nyb2xsRWwuc3R5bGU7XG4gICAgICB0aGlzLm92ZXJmbG93U3R5bGVzID0ge1xuICAgICAgICBvdmVyZmxvdzogb3ZlcmZsb3cgIT09IG51bGwgJiYgb3ZlcmZsb3cgIT09IHZvaWQgMCA/IG92ZXJmbG93IDogJycsXG4gICAgICAgIG92ZXJmbG93WDogb3ZlcmZsb3dYICE9PSBudWxsICYmIG92ZXJmbG93WCAhPT0gdm9pZCAwID8gb3ZlcmZsb3dYIDogJycsXG4gICAgICAgIG92ZXJmbG93WTogb3ZlcmZsb3dZICE9PSBudWxsICYmIG92ZXJmbG93WSAhPT0gdm9pZCAwID8gb3ZlcmZsb3dZIDogJydcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIHJlc3RvcmVPdmVyZmxvd1N0eWxlKCkge1xuICAgIGlmICh0aGlzLm92ZXJmbG93U3R5bGVzICE9PSB1bmRlZmluZWQgJiYgdGhpcy5zY3JvbGxFbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIG92ZXJmbG93LFxuICAgICAgICBvdmVyZmxvd1gsXG4gICAgICAgIG92ZXJmbG93WVxuICAgICAgfSA9IHRoaXMub3ZlcmZsb3dTdHlsZXM7XG4gICAgICB0aGlzLnNjcm9sbEVsLnN0eWxlLm92ZXJmbG93ID0gb3ZlcmZsb3c7XG4gICAgICB0aGlzLnNjcm9sbEVsLnN0eWxlLm92ZXJmbG93WCA9IG92ZXJmbG93WDtcbiAgICAgIHRoaXMuc2Nyb2xsRWwuc3R5bGUub3ZlcmZsb3dZID0gb3ZlcmZsb3dZO1xuICAgICAgdGhpcy5vdmVyZmxvd1N0eWxlcyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgIHJldHVybiBoKEhvc3QsIHtcbiAgICAgIGtleTogJzJkMWJkODgwODc3YjY5ODYwNDU0MmFiMmQ2MDJkMzhiOTUwNGQ5NzUnLFxuICAgICAgc2xvdDogXCJmaXhlZFwiLFxuICAgICAgY2xhc3M6IHtcbiAgICAgICAgW21vZGVdOiB0cnVlLFxuICAgICAgICAvLyBVc2VkIGludGVybmFsbHkgZm9yIHN0eWxpbmdcbiAgICAgICAgW2ByZWZyZXNoZXItJHttb2RlfWBdOiB0cnVlLFxuICAgICAgICAncmVmcmVzaGVyLW5hdGl2ZSc6IHRoaXMubmF0aXZlUmVmcmVzaGVyLFxuICAgICAgICAncmVmcmVzaGVyLWFjdGl2ZSc6IHRoaXMuc3RhdGUgIT09IDEgLyogUmVmcmVzaGVyU3RhdGUuSW5hY3RpdmUgKi8sXG4gICAgICAgICdyZWZyZXNoZXItcHVsbGluZyc6IHRoaXMuc3RhdGUgPT09IDIgLyogUmVmcmVzaGVyU3RhdGUuUHVsbGluZyAqLyxcbiAgICAgICAgJ3JlZnJlc2hlci1yZWFkeSc6IHRoaXMuc3RhdGUgPT09IDQgLyogUmVmcmVzaGVyU3RhdGUuUmVhZHkgKi8sXG4gICAgICAgICdyZWZyZXNoZXItcmVmcmVzaGluZyc6IHRoaXMuc3RhdGUgPT09IDggLyogUmVmcmVzaGVyU3RhdGUuUmVmcmVzaGluZyAqLyxcbiAgICAgICAgJ3JlZnJlc2hlci1jYW5jZWxsaW5nJzogdGhpcy5zdGF0ZSA9PT0gMTYgLyogUmVmcmVzaGVyU3RhdGUuQ2FuY2VsbGluZyAqLyxcbiAgICAgICAgJ3JlZnJlc2hlci1jb21wbGV0aW5nJzogdGhpcy5zdGF0ZSA9PT0gMzIgLyogUmVmcmVzaGVyU3RhdGUuQ29tcGxldGluZyAqL1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGdldCBlbCgpIHtcbiAgICByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBcImRpc2FibGVkXCI6IFtcImRpc2FibGVkQ2hhbmdlZFwiXVxuICAgIH07XG4gIH1cbn07XG5SZWZyZXNoZXIuc3R5bGUgPSB7XG4gIGlvczogcmVmcmVzaGVySW9zQ3NzLFxuICBtZDogcmVmcmVzaGVyTWRDc3Ncbn07XG5jb25zdCBSZWZyZXNoZXJDb250ZW50ID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmN1c3RvbUhUTUxFbmFibGVkID0gY29uZmlnLmdldCgnaW5uZXJIVE1MVGVtcGxhdGVzRW5hYmxlZCcsIEVOQUJMRV9IVE1MX0NPTlRFTlRfREVGQVVMVCk7XG4gIH1cbiAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgaWYgKHRoaXMucHVsbGluZ0ljb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgLyoqXG4gICAgICAgKiBUaGUgbmF0aXZlIGlPUyByZWZyZXNoZXIgdXNlcyBhIHNwaW5uZXIgaW5zdGVhZCBvZlxuICAgICAgICogYW4gaWNvbiwgc28gd2UgbmVlZCB0byBzZWUgaWYgdGhpcyBkZXZpY2Ugc3VwcG9ydHNcbiAgICAgICAqIHRoZSBuYXRpdmUgaU9TIHJlZnJlc2hlci5cbiAgICAgICAqL1xuICAgICAgY29uc3QgaGFzUnViYmVyQmFuZFNjcm9sbGluZyA9IHN1cHBvcnRzUnViYmVyQmFuZFNjcm9sbGluZygpO1xuICAgICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICBjb25zdCBvdmVyZmxvd1JlZnJlc2hlciA9IGhhc1J1YmJlckJhbmRTY3JvbGxpbmcgPyAnbGluZXMnIDogYXJyb3dEb3duO1xuICAgICAgdGhpcy5wdWxsaW5nSWNvbiA9IGNvbmZpZy5nZXQoJ3JlZnJlc2hpbmdJY29uJywgbW9kZSA9PT0gJ2lvcycgJiYgaGFzUnViYmVyQmFuZFNjcm9sbGluZyA/IGNvbmZpZy5nZXQoJ3NwaW5uZXInLCBvdmVyZmxvd1JlZnJlc2hlcikgOiAnY2lyY3VsYXInKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucmVmcmVzaGluZ1NwaW5uZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgICB0aGlzLnJlZnJlc2hpbmdTcGlubmVyID0gY29uZmlnLmdldCgncmVmcmVzaGluZ1NwaW5uZXInLCBjb25maWcuZ2V0KCdzcGlubmVyJywgbW9kZSA9PT0gJ2lvcycgPyAnbGluZXMnIDogJ2NpcmN1bGFyJykpO1xuICAgIH1cbiAgfVxuICByZW5kZXJQdWxsaW5nVGV4dCgpIHtcbiAgICBjb25zdCB7XG4gICAgICBjdXN0b21IVE1MRW5hYmxlZCxcbiAgICAgIHB1bGxpbmdUZXh0XG4gICAgfSA9IHRoaXM7XG4gICAgaWYgKGN1c3RvbUhUTUxFbmFibGVkKSB7XG4gICAgICByZXR1cm4gaChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzOiBcInJlZnJlc2hlci1wdWxsaW5nLXRleHRcIixcbiAgICAgICAgaW5uZXJIVE1MOiBzYW5pdGl6ZURPTVN0cmluZyhwdWxsaW5nVGV4dClcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gaChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJyZWZyZXNoZXItcHVsbGluZy10ZXh0XCJcbiAgICB9LCBwdWxsaW5nVGV4dCk7XG4gIH1cbiAgcmVuZGVyUmVmcmVzaGluZ1RleHQoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY3VzdG9tSFRNTEVuYWJsZWQsXG4gICAgICByZWZyZXNoaW5nVGV4dFxuICAgIH0gPSB0aGlzO1xuICAgIGlmIChjdXN0b21IVE1MRW5hYmxlZCkge1xuICAgICAgcmV0dXJuIGgoXCJkaXZcIiwge1xuICAgICAgICBjbGFzczogXCJyZWZyZXNoZXItcmVmcmVzaGluZy10ZXh0XCIsXG4gICAgICAgIGlubmVySFRNTDogc2FuaXRpemVET01TdHJpbmcocmVmcmVzaGluZ1RleHQpXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGgoXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IFwicmVmcmVzaGVyLXJlZnJlc2hpbmctdGV4dFwiXG4gICAgfSwgcmVmcmVzaGluZ1RleHQpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBwdWxsaW5nSWNvbiA9IHRoaXMucHVsbGluZ0ljb247XG4gICAgY29uc3QgaGFzU3Bpbm5lciA9IHB1bGxpbmdJY29uICE9IG51bGwgJiYgU1BJTk5FUlNbcHVsbGluZ0ljb25dICE9PSB1bmRlZmluZWQ7XG4gICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgcmV0dXJuIGgoSG9zdCwge1xuICAgICAga2V5OiAnZTIzNWY4YTlhODQwNzBlY2UyZTIwNjZjZWQyMzRhNjQ2NjNiZmExZCcsXG4gICAgICBjbGFzczogbW9kZVxuICAgIH0sIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnOTEyMTY5MTgxOGRkYWEzNTgwMWE1ZjQ0MmUxNDRhYzI3Njg2Y2YxOScsXG4gICAgICBjbGFzczogXCJyZWZyZXNoZXItcHVsbGluZ1wiXG4gICAgfSwgdGhpcy5wdWxsaW5nSWNvbiAmJiBoYXNTcGlubmVyICYmIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnYzhkNjVkNzQwZjE1NzUwNDFiZDNiNzUyYzc4OTA3NzkyNzM5N2ZlNCcsXG4gICAgICBjbGFzczogXCJyZWZyZXNoZXItcHVsbGluZy1pY29uXCJcbiAgICB9LCBoKFwiZGl2XCIsIHtcbiAgICAgIGtleTogJzMwOWRkOTA0OTc3ZWFhNzg4YjA5ZWE5NWI3ZmE0OTk2YTczYmVjNWInLFxuICAgICAgY2xhc3M6IFwic3Bpbm5lci1hcnJvdy1jb250YWluZXJcIlxuICAgIH0sIGgoXCJpb24tc3Bpbm5lclwiLCB7XG4gICAgICBrZXk6ICdhMmExNDgwZjY3Nzc1ZDU2Y2E3ODIyZTc2YmUxZTlmOTgzYmNhMmY5JyxcbiAgICAgIG5hbWU6IHRoaXMucHVsbGluZ0ljb24sXG4gICAgICBwYXVzZWQ6IHRydWVcbiAgICB9KSwgbW9kZSA9PT0gJ21kJyAmJiB0aGlzLnB1bGxpbmdJY29uID09PSAnY2lyY3VsYXInICYmIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnODExZDdlMDZkMzI0YmY0YjZhMThhMzE0MjdhNDNlNTE3N2YzYWUzYScsXG4gICAgICBjbGFzczogXCJhcnJvdy1jb250YWluZXJcIlxuICAgIH0sIGgoXCJpb24taWNvblwiLCB7XG4gICAgICBrZXk6ICc4NmNjNDhlMmU4ZGMwNTRmZjZmZjEyOTkwOTRkYTM1YjUyNGJlNjNkJyxcbiAgICAgIGljb246IGNhcmV0QmFja1NoYXJwLFxuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIlxuICAgIH0pKSkpLCB0aGlzLnB1bGxpbmdJY29uICYmICFoYXNTcGlubmVyICYmIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnNDY0YWUwOTdkYmM5NWMxOGEyZGQ3ZGZkMDNmODQ4OTE1M2RhYjcxOScsXG4gICAgICBjbGFzczogXCJyZWZyZXNoZXItcHVsbGluZy1pY29uXCJcbiAgICB9LCBoKFwiaW9uLWljb25cIiwge1xuICAgICAga2V5OiAnZWQ2ODc1OTc4YjkwMzVhZGQ1NjJjYWE3NDNhNjgzNTM3NDNkOTc4ZicsXG4gICAgICBpY29uOiB0aGlzLnB1bGxpbmdJY29uLFxuICAgICAgbGF6eTogZmFsc2UsXG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiXG4gICAgfSkpLCB0aGlzLnB1bGxpbmdUZXh0ICE9PSB1bmRlZmluZWQgJiYgdGhpcy5yZW5kZXJQdWxsaW5nVGV4dCgpKSwgaChcImRpdlwiLCB7XG4gICAgICBrZXk6ICdhZmY4OTE5MjRlNDQzNTQ1NDNmZWM0ODRlNWNkZTFjYTkyZTY5OTA0JyxcbiAgICAgIGNsYXNzOiBcInJlZnJlc2hlci1yZWZyZXNoaW5nXCJcbiAgICB9LCB0aGlzLnJlZnJlc2hpbmdTcGlubmVyICYmIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnODQyZDdhYzRmZjEwYTEwNTg3NzU0OTNkNjJmMzFjYmRjZDM0ZjdhMCcsXG4gICAgICBjbGFzczogXCJyZWZyZXNoZXItcmVmcmVzaGluZy1pY29uXCJcbiAgICB9LCBoKFwiaW9uLXNwaW5uZXJcIiwge1xuICAgICAga2V5OiAnOGMzZTYxOTU1MDFlN2U3OGQ1Y2RlMWUzYWQxZmVmOTBmZDRhOTUzZicsXG4gICAgICBuYW1lOiB0aGlzLnJlZnJlc2hpbmdTcGlubmVyXG4gICAgfSkpLCB0aGlzLnJlZnJlc2hpbmdUZXh0ICE9PSB1bmRlZmluZWQgJiYgdGhpcy5yZW5kZXJSZWZyZXNoaW5nVGV4dCgpKSk7XG4gIH1cbiAgZ2V0IGVsKCkge1xuICAgIHJldHVybiBnZXRFbGVtZW50KHRoaXMpO1xuICB9XG59O1xuZXhwb3J0IHsgUmVmcmVzaGVyIGFzIGlvbl9yZWZyZXNoZXIsIFJlZnJlc2hlckNvbnRlbnQgYXMgaW9uX3JlZnJlc2hlcl9jb250ZW50IH07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZUEsSUFBTSw0QkFBNEIs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
