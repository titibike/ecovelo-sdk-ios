import {
  Build,
  writeTask
} from "./chunk-3T6NUUZ7.js";
import {
  raf
} from "./chunk-EV4ZQC67.js";
import {
  config,
  printIonError,
  printIonWarning
} from "./chunk-7OBOYUXW.js";
import {
  win
} from "./chunk-34HBWEZ3.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// node_modules/@ionic/core/components/animation.js
var animationPrefix;
var getAnimationPrefix = (el) => {
  if (animationPrefix === void 0) {
    const supportsUnprefixed = el.style.animationName !== void 0;
    const supportsWebkitPrefix = el.style.webkitAnimationName !== void 0;
    animationPrefix = !supportsUnprefixed && supportsWebkitPrefix ? "-webkit-" : "";
  }
  return animationPrefix;
};
var setStyleProperty = (element, propertyName, value) => {
  const prefix = propertyName.startsWith("animation") ? getAnimationPrefix(element) : "";
  element.style.setProperty(prefix + propertyName, value);
};
var addClassToArray = (classes = [], className) => {
  if (className !== void 0) {
    const classNameToAppend = Array.isArray(className) ? className : [className];
    return [...classes, ...classNameToAppend];
  }
  return classes;
};
var createAnimation = (animationId) => {
  let _delay;
  let _duration;
  let _easing;
  let _iterations;
  let _fill;
  let _direction;
  let _keyframes = [];
  let beforeAddClasses = [];
  let beforeRemoveClasses = [];
  let initialized = false;
  let parentAnimation;
  let beforeStylesValue = {};
  let afterAddClasses = [];
  let afterRemoveClasses = [];
  let afterStylesValue = {};
  let numAnimationsRunning = 0;
  let shouldForceLinearEasing = false;
  let shouldForceSyncPlayback = false;
  let forceDirectionValue;
  let forceDurationValue;
  let forceDelayValue;
  let willComplete = true;
  let finished = false;
  let shouldCalculateNumAnimations = true;
  let ani;
  let paused = false;
  const id = animationId;
  const onFinishCallbacks = [];
  const onFinishOneTimeCallbacks = [];
  const onStopOneTimeCallbacks = [];
  const elements = [];
  const childAnimations = [];
  const stylesheets = [];
  const _beforeAddReadFunctions = [];
  const _beforeAddWriteFunctions = [];
  const _afterAddReadFunctions = [];
  const _afterAddWriteFunctions = [];
  const webAnimations = [];
  const supportsAnimationEffect = typeof AnimationEffect === "function" || win !== void 0 && typeof win.AnimationEffect === "function";
  const supportsWebAnimations = typeof Element === "function" && typeof Element.prototype.animate === "function" && supportsAnimationEffect;
  const getWebAnimations = () => {
    return webAnimations;
  };
  const destroy = (clearStyleSheets) => {
    childAnimations.forEach((childAnimation) => {
      childAnimation.destroy(clearStyleSheets);
    });
    cleanUp(clearStyleSheets);
    elements.length = 0;
    childAnimations.length = 0;
    _keyframes.length = 0;
    clearOnFinish();
    initialized = false;
    shouldCalculateNumAnimations = true;
    return ani;
  };
  const cleanUp = (clearStyleSheets) => {
    cleanUpElements();
    if (clearStyleSheets) {
      cleanUpStyleSheets();
    }
  };
  const resetFlags = () => {
    shouldForceLinearEasing = false;
    shouldForceSyncPlayback = false;
    shouldCalculateNumAnimations = true;
    forceDirectionValue = void 0;
    forceDurationValue = void 0;
    forceDelayValue = void 0;
    numAnimationsRunning = 0;
    finished = false;
    willComplete = true;
    paused = false;
  };
  const isRunning = () => {
    return numAnimationsRunning !== 0 && !paused;
  };
  const clearCallback = (callbackToRemove, callbackObjects) => {
    const index = callbackObjects.findIndex((callbackObject) => callbackObject.c === callbackToRemove);
    if (index > -1) {
      callbackObjects.splice(index, 1);
    }
  };
  const onStop = (callback, opts) => {
    onStopOneTimeCallbacks.push({
      c: callback,
      o: opts
    });
    return ani;
  };
  const onFinish = (callback, opts) => {
    const callbacks = (opts === null || opts === void 0 ? void 0 : opts.oneTimeCallback) ? onFinishOneTimeCallbacks : onFinishCallbacks;
    callbacks.push({
      c: callback,
      o: opts
    });
    return ani;
  };
  const clearOnFinish = () => {
    onFinishCallbacks.length = 0;
    onFinishOneTimeCallbacks.length = 0;
    return ani;
  };
  const cleanUpElements = () => {
    if (supportsWebAnimations) {
      webAnimations.forEach((animation2) => {
        animation2.cancel();
      });
      webAnimations.length = 0;
    }
  };
  const cleanUpStyleSheets = () => {
    stylesheets.forEach((stylesheet) => {
      if (stylesheet === null || stylesheet === void 0 ? void 0 : stylesheet.parentNode) {
        stylesheet.parentNode.removeChild(stylesheet);
      }
    });
    stylesheets.length = 0;
  };
  const beforeAddRead = (readFn) => {
    _beforeAddReadFunctions.push(readFn);
    return ani;
  };
  const beforeAddWrite = (writeFn) => {
    _beforeAddWriteFunctions.push(writeFn);
    return ani;
  };
  const afterAddRead = (readFn) => {
    _afterAddReadFunctions.push(readFn);
    return ani;
  };
  const afterAddWrite = (writeFn) => {
    _afterAddWriteFunctions.push(writeFn);
    return ani;
  };
  const beforeAddClass = (className) => {
    beforeAddClasses = addClassToArray(beforeAddClasses, className);
    return ani;
  };
  const beforeRemoveClass = (className) => {
    beforeRemoveClasses = addClassToArray(beforeRemoveClasses, className);
    return ani;
  };
  const beforeStyles = (styles = {}) => {
    beforeStylesValue = styles;
    return ani;
  };
  const beforeClearStyles = (propertyNames = []) => {
    for (const property of propertyNames) {
      beforeStylesValue[property] = "";
    }
    return ani;
  };
  const afterAddClass = (className) => {
    afterAddClasses = addClassToArray(afterAddClasses, className);
    return ani;
  };
  const afterRemoveClass = (className) => {
    afterRemoveClasses = addClassToArray(afterRemoveClasses, className);
    return ani;
  };
  const afterStyles = (styles = {}) => {
    afterStylesValue = styles;
    return ani;
  };
  const afterClearStyles = (propertyNames = []) => {
    for (const property of propertyNames) {
      afterStylesValue[property] = "";
    }
    return ani;
  };
  const getFill = () => {
    if (_fill !== void 0) {
      return _fill;
    }
    if (parentAnimation) {
      return parentAnimation.getFill();
    }
    return "both";
  };
  const getDirection = () => {
    if (forceDirectionValue !== void 0) {
      return forceDirectionValue;
    }
    if (_direction !== void 0) {
      return _direction;
    }
    if (parentAnimation) {
      return parentAnimation.getDirection();
    }
    return "normal";
  };
  const getEasing = () => {
    if (shouldForceLinearEasing) {
      return "linear";
    }
    if (_easing !== void 0) {
      return _easing;
    }
    if (parentAnimation) {
      return parentAnimation.getEasing();
    }
    return "linear";
  };
  const getDuration = () => {
    if (shouldForceSyncPlayback) {
      return 0;
    }
    if (forceDurationValue !== void 0) {
      return forceDurationValue;
    }
    if (_duration !== void 0) {
      return _duration;
    }
    if (parentAnimation) {
      return parentAnimation.getDuration();
    }
    return 0;
  };
  const getIterations = () => {
    if (_iterations !== void 0) {
      return _iterations;
    }
    if (parentAnimation) {
      return parentAnimation.getIterations();
    }
    return 1;
  };
  const getDelay = () => {
    if (forceDelayValue !== void 0) {
      return forceDelayValue;
    }
    if (_delay !== void 0) {
      return _delay;
    }
    if (parentAnimation) {
      return parentAnimation.getDelay();
    }
    return 0;
  };
  const getKeyframes = () => {
    return _keyframes;
  };
  const direction = (animationDirection) => {
    _direction = animationDirection;
    update(true);
    return ani;
  };
  const fill = (animationFill) => {
    _fill = animationFill;
    update(true);
    return ani;
  };
  const delay = (animationDelay) => {
    _delay = animationDelay;
    update(true);
    return ani;
  };
  const easing = (animationEasing) => {
    _easing = animationEasing;
    update(true);
    return ani;
  };
  const duration = (animationDuration) => {
    if (!supportsWebAnimations && animationDuration === 0) {
      animationDuration = 1;
    }
    _duration = animationDuration;
    update(true);
    return ani;
  };
  const iterations = (animationIterations) => {
    _iterations = animationIterations;
    update(true);
    return ani;
  };
  const parent = (animation2) => {
    parentAnimation = animation2;
    return ani;
  };
  const addElement = (el) => {
    if (el != null) {
      if (el.nodeType === 1) {
        elements.push(el);
      } else if (el.length >= 0) {
        for (let i = 0; i < el.length; i++) {
          elements.push(el[i]);
        }
      } else {
        printIonError("createAnimation - Invalid addElement value.");
      }
    }
    return ani;
  };
  const addAnimation = (animationToAdd) => {
    if (animationToAdd != null) {
      if (Array.isArray(animationToAdd)) {
        for (const animation2 of animationToAdd) {
          animation2.parent(ani);
          childAnimations.push(animation2);
        }
      } else {
        animationToAdd.parent(ani);
        childAnimations.push(animationToAdd);
      }
    }
    return ani;
  };
  const keyframes = (keyframeValues) => {
    const different = _keyframes !== keyframeValues;
    _keyframes = keyframeValues;
    if (different) {
      updateKeyframes(_keyframes);
    }
    return ani;
  };
  const updateKeyframes = (keyframeValues) => {
    if (supportsWebAnimations) {
      getWebAnimations().forEach((animation2) => {
        const keyframeEffect = animation2.effect;
        if (keyframeEffect.setKeyframes) {
          keyframeEffect.setKeyframes(keyframeValues);
        } else {
          const newEffect = new KeyframeEffect(keyframeEffect.target, keyframeValues, keyframeEffect.getTiming());
          animation2.effect = newEffect;
        }
      });
    }
  };
  const beforeAnimation = () => {
    _beforeAddReadFunctions.forEach((callback) => callback());
    _beforeAddWriteFunctions.forEach((callback) => callback());
    const addClasses = beforeAddClasses;
    const removeClasses = beforeRemoveClasses;
    const styles = beforeStylesValue;
    elements.forEach((el) => {
      const elementClassList = el.classList;
      addClasses.forEach((c) => elementClassList.add(c));
      removeClasses.forEach((c) => elementClassList.remove(c));
      for (const property in styles) {
        if (styles.hasOwnProperty(property)) {
          setStyleProperty(el, property, styles[property]);
        }
      }
    });
  };
  const afterAnimation = () => {
    _afterAddReadFunctions.forEach((callback) => callback());
    _afterAddWriteFunctions.forEach((callback) => callback());
    const currentStep = willComplete ? 1 : 0;
    const addClasses = afterAddClasses;
    const removeClasses = afterRemoveClasses;
    const styles = afterStylesValue;
    elements.forEach((el) => {
      const elementClassList = el.classList;
      addClasses.forEach((c) => elementClassList.add(c));
      removeClasses.forEach((c) => elementClassList.remove(c));
      for (const property in styles) {
        if (styles.hasOwnProperty(property)) {
          setStyleProperty(el, property, styles[property]);
        }
      }
    });
    forceDurationValue = void 0;
    forceDirectionValue = void 0;
    forceDelayValue = void 0;
    onFinishCallbacks.forEach((onFinishCallback) => {
      return onFinishCallback.c(currentStep, ani);
    });
    onFinishOneTimeCallbacks.forEach((onFinishCallback) => {
      return onFinishCallback.c(currentStep, ani);
    });
    onFinishOneTimeCallbacks.length = 0;
    shouldCalculateNumAnimations = true;
    if (willComplete) {
      finished = true;
    }
    willComplete = true;
  };
  const animationFinish = () => {
    if (numAnimationsRunning === 0) {
      return;
    }
    numAnimationsRunning--;
    if (numAnimationsRunning === 0) {
      afterAnimation();
      if (parentAnimation) {
        parentAnimation.animationFinish();
      }
    }
  };
  const initializeWebAnimation = () => {
    elements.forEach((element) => {
      const animation2 = element.animate(_keyframes, {
        id,
        delay: getDelay(),
        duration: getDuration(),
        easing: getEasing(),
        iterations: getIterations(),
        fill: getFill(),
        direction: getDirection()
      });
      animation2.pause();
      webAnimations.push(animation2);
    });
    if (webAnimations.length > 0) {
      webAnimations[0].onfinish = () => {
        animationFinish();
      };
    }
  };
  const initializeAnimation = () => {
    beforeAnimation();
    if (_keyframes.length > 0) {
      if (supportsWebAnimations) {
        initializeWebAnimation();
      }
    }
    initialized = true;
  };
  const setAnimationStep = (step) => {
    step = Math.min(Math.max(step, 0), 0.9999);
    if (supportsWebAnimations) {
      webAnimations.forEach((animation2) => {
        animation2.currentTime = animation2.effect.getComputedTiming().delay + getDuration() * step;
        animation2.pause();
      });
    }
  };
  const updateWebAnimation = (step) => {
    webAnimations.forEach((animation2) => {
      animation2.effect.updateTiming({
        delay: getDelay(),
        duration: getDuration(),
        easing: getEasing(),
        iterations: getIterations(),
        fill: getFill(),
        direction: getDirection()
      });
    });
    if (step !== void 0) {
      setAnimationStep(step);
    }
  };
  const update = (deep = false, toggleAnimationName = true, step) => {
    if (deep) {
      childAnimations.forEach((animation2) => {
        animation2.update(deep, toggleAnimationName, step);
      });
    }
    if (supportsWebAnimations) {
      updateWebAnimation(step);
    }
    return ani;
  };
  const progressStart = (forceLinearEasing = false, step) => {
    childAnimations.forEach((animation2) => {
      animation2.progressStart(forceLinearEasing, step);
    });
    pauseAnimation();
    shouldForceLinearEasing = forceLinearEasing;
    if (!initialized) {
      initializeAnimation();
    }
    update(false, true, step);
    return ani;
  };
  const progressStep = (step) => {
    childAnimations.forEach((animation2) => {
      animation2.progressStep(step);
    });
    setAnimationStep(step);
    return ani;
  };
  const progressEnd = (playTo, step, dur) => {
    shouldForceLinearEasing = false;
    childAnimations.forEach((animation2) => {
      animation2.progressEnd(playTo, step, dur);
    });
    if (dur !== void 0) {
      forceDurationValue = dur;
    }
    finished = false;
    willComplete = true;
    if (playTo === 0) {
      forceDirectionValue = getDirection() === "reverse" ? "normal" : "reverse";
      if (forceDirectionValue === "reverse") {
        willComplete = false;
      }
      if (supportsWebAnimations) {
        update();
        setAnimationStep(1 - step);
      } else {
        forceDelayValue = (1 - step) * getDuration() * -1;
        update(false, false);
      }
    } else if (playTo === 1) {
      if (supportsWebAnimations) {
        update();
        setAnimationStep(step);
      } else {
        forceDelayValue = step * getDuration() * -1;
        update(false, false);
      }
    }
    if (playTo !== void 0 && !parentAnimation) {
      play();
    }
    return ani;
  };
  const pauseAnimation = () => {
    if (initialized) {
      if (supportsWebAnimations) {
        webAnimations.forEach((animation2) => {
          animation2.pause();
        });
      } else {
        elements.forEach((element) => {
          setStyleProperty(element, "animation-play-state", "paused");
        });
      }
      paused = true;
    }
  };
  const pause = () => {
    childAnimations.forEach((animation2) => {
      animation2.pause();
    });
    pauseAnimation();
    return ani;
  };
  const playCSSAnimations = () => {
    animationFinish();
  };
  const playWebAnimations = () => {
    webAnimations.forEach((animation2) => {
      animation2.play();
    });
    if (_keyframes.length === 0 || elements.length === 0) {
      animationFinish();
    }
  };
  const resetAnimation = () => {
    if (supportsWebAnimations) {
      setAnimationStep(0);
      updateWebAnimation();
    }
  };
  const play = (opts) => {
    return new Promise((resolve) => {
      if (opts === null || opts === void 0 ? void 0 : opts.sync) {
        shouldForceSyncPlayback = true;
        onFinish(() => shouldForceSyncPlayback = false, {
          oneTimeCallback: true
        });
      }
      if (!initialized) {
        initializeAnimation();
      }
      if (finished) {
        resetAnimation();
        finished = false;
      }
      if (shouldCalculateNumAnimations) {
        numAnimationsRunning = childAnimations.length + 1;
        shouldCalculateNumAnimations = false;
      }
      const onStopCallback = () => {
        clearCallback(onFinishCallback, onFinishOneTimeCallbacks);
        resolve();
      };
      const onFinishCallback = () => {
        clearCallback(onStopCallback, onStopOneTimeCallbacks);
        resolve();
      };
      onFinish(onFinishCallback, {
        oneTimeCallback: true
      });
      onStop(onStopCallback, {
        oneTimeCallback: true
      });
      childAnimations.forEach((animation2) => {
        animation2.play();
      });
      if (supportsWebAnimations) {
        playWebAnimations();
      } else {
        playCSSAnimations();
      }
      paused = false;
    });
  };
  const stop = () => {
    childAnimations.forEach((animation2) => {
      animation2.stop();
    });
    if (initialized) {
      cleanUpElements();
      initialized = false;
    }
    resetFlags();
    onStopOneTimeCallbacks.forEach((onStopCallback) => onStopCallback.c(0, ani));
    onStopOneTimeCallbacks.length = 0;
  };
  const from = (property, value) => {
    const firstFrame = _keyframes[0];
    if (firstFrame !== void 0 && (firstFrame.offset === void 0 || firstFrame.offset === 0)) {
      firstFrame[property] = value;
    } else {
      _keyframes = [{
        offset: 0,
        [property]: value
      }, ..._keyframes];
    }
    return ani;
  };
  const to = (property, value) => {
    const lastFrame = _keyframes[_keyframes.length - 1];
    if (lastFrame !== void 0 && (lastFrame.offset === void 0 || lastFrame.offset === 1)) {
      lastFrame[property] = value;
    } else {
      _keyframes = [..._keyframes, {
        offset: 1,
        [property]: value
      }];
    }
    return ani;
  };
  const fromTo = (property, fromValue, toValue) => {
    return from(property, fromValue).to(property, toValue);
  };
  return ani = {
    parentAnimation,
    elements,
    childAnimations,
    id,
    animationFinish,
    from,
    to,
    fromTo,
    parent,
    play,
    pause,
    stop,
    destroy,
    keyframes,
    addAnimation,
    addElement,
    update,
    fill,
    direction,
    iterations,
    duration,
    easing,
    delay,
    getWebAnimations,
    getKeyframes,
    getFill,
    getDirection,
    getDelay,
    getIterations,
    getEasing,
    getDuration,
    afterAddRead,
    afterAddWrite,
    afterClearStyles,
    afterStyles,
    afterRemoveClass,
    afterAddClass,
    beforeAddRead,
    beforeAddWrite,
    beforeClearStyles,
    beforeStyles,
    beforeRemoveClass,
    beforeAddClass,
    onFinish,
    isRunning,
    progressStart,
    progressStep,
    progressEnd
  };
};

// node_modules/@ionic/core/components/index2.js
var LIFECYCLE_WILL_ENTER = "ionViewWillEnter";
var LIFECYCLE_DID_ENTER = "ionViewDidEnter";
var LIFECYCLE_WILL_LEAVE = "ionViewWillLeave";
var LIFECYCLE_DID_LEAVE = "ionViewDidLeave";
var LIFECYCLE_WILL_UNLOAD = "ionViewWillUnload";
var moveFocus = (el) => {
  el.tabIndex = -1;
  el.focus();
};
var isVisible = (el) => {
  return el.offsetParent !== null;
};
var createFocusController = () => {
  const saveViewFocus = (referenceEl) => {
    const focusManagerEnabled = config.get("focusManagerPriority", false);
    if (focusManagerEnabled) {
      const activeEl = document.activeElement;
      if (activeEl !== null && (referenceEl === null || referenceEl === void 0 ? void 0 : referenceEl.contains(activeEl))) {
        activeEl.setAttribute(LAST_FOCUS, "true");
      }
    }
  };
  const setViewFocus = (referenceEl) => {
    const focusManagerPriorities = config.get("focusManagerPriority", false);
    if (Array.isArray(focusManagerPriorities) && !referenceEl.contains(document.activeElement)) {
      const lastFocus = referenceEl.querySelector(`[${LAST_FOCUS}]`);
      if (lastFocus && isVisible(lastFocus)) {
        moveFocus(lastFocus);
        return;
      }
      for (const priority of focusManagerPriorities) {
        switch (priority) {
          case "content":
            const content = referenceEl.querySelector('main, [role="main"]');
            if (content && isVisible(content)) {
              moveFocus(content);
              return;
            }
            break;
          case "heading":
            const headingOne = referenceEl.querySelector('h1, [role="heading"][aria-level="1"]');
            if (headingOne && isVisible(headingOne)) {
              moveFocus(headingOne);
              return;
            }
            break;
          case "banner":
            const header = referenceEl.querySelector('header, [role="banner"]');
            if (header && isVisible(header)) {
              moveFocus(header);
              return;
            }
            break;
          default:
            printIonWarning(`Unrecognized focus manager priority value ${priority}`);
            break;
        }
      }
      moveFocus(referenceEl);
    }
  };
  return {
    saveViewFocus,
    setViewFocus
  };
};
var LAST_FOCUS = "ion-last-focus";
var iosTransitionAnimation = () => import("./ios.transition-NOG3XK7C.js");
var mdTransitionAnimation = () => import("./md.transition-X5ZBZF6K.js");
var focusController = createFocusController();
var transition = (opts) => {
  return new Promise((resolve, reject) => {
    writeTask(() => {
      beforeTransition(opts);
      runTransition(opts).then((result) => {
        if (result.animation) {
          result.animation.destroy();
        }
        afterTransition(opts);
        resolve(result);
      }, (error) => {
        afterTransition(opts);
        reject(error);
      });
    });
  });
};
var beforeTransition = (opts) => {
  const enteringEl = opts.enteringEl;
  const leavingEl = opts.leavingEl;
  focusController.saveViewFocus(leavingEl);
  setZIndex(enteringEl, leavingEl, opts.direction);
  if (opts.showGoBack) {
    enteringEl.classList.add("can-go-back");
  } else {
    enteringEl.classList.remove("can-go-back");
  }
  setPageHidden(enteringEl, false);
  enteringEl.style.setProperty("pointer-events", "none");
  if (leavingEl) {
    setPageHidden(leavingEl, false);
    leavingEl.style.setProperty("pointer-events", "none");
  }
};
var runTransition = (opts) => __async(null, null, function* () {
  const animationBuilder = yield getAnimationBuilder(opts);
  const ani = animationBuilder && Build.isBrowser ? animation(animationBuilder, opts) : noAnimation(opts);
  return ani;
});
var afterTransition = (opts) => {
  const enteringEl = opts.enteringEl;
  const leavingEl = opts.leavingEl;
  enteringEl.classList.remove("ion-page-invisible");
  enteringEl.style.removeProperty("pointer-events");
  if (leavingEl !== void 0) {
    leavingEl.classList.remove("ion-page-invisible");
    leavingEl.style.removeProperty("pointer-events");
  }
  focusController.setViewFocus(enteringEl);
};
var getAnimationBuilder = (opts) => __async(null, null, function* () {
  if (!opts.leavingEl || !opts.animated || opts.duration === 0) {
    return void 0;
  }
  if (opts.animationBuilder) {
    return opts.animationBuilder;
  }
  const getAnimation = opts.mode === "ios" ? (yield iosTransitionAnimation()).iosTransitionAnimation : (yield mdTransitionAnimation()).mdTransitionAnimation;
  return getAnimation;
});
var animation = (animationBuilder, opts) => __async(null, null, function* () {
  yield waitForReady(opts, true);
  const trans = animationBuilder(opts.baseEl, opts);
  fireWillEvents(opts.enteringEl, opts.leavingEl);
  const didComplete = yield playTransition(trans, opts);
  if (opts.progressCallback) {
    opts.progressCallback(void 0);
  }
  if (didComplete) {
    fireDidEvents(opts.enteringEl, opts.leavingEl);
  }
  return {
    hasCompleted: didComplete,
    animation: trans
  };
});
var noAnimation = (opts) => __async(null, null, function* () {
  const enteringEl = opts.enteringEl;
  const leavingEl = opts.leavingEl;
  const focusManagerEnabled = config.get("focusManagerPriority", false);
  yield waitForReady(opts, focusManagerEnabled);
  fireWillEvents(enteringEl, leavingEl);
  fireDidEvents(enteringEl, leavingEl);
  return {
    hasCompleted: true
  };
});
var waitForReady = (opts, defaultDeep) => __async(null, null, function* () {
  const deep = opts.deepWait !== void 0 ? opts.deepWait : defaultDeep;
  if (deep) {
    yield Promise.all([deepReady(opts.enteringEl), deepReady(opts.leavingEl)]);
  }
  yield notifyViewReady(opts.viewIsReady, opts.enteringEl);
});
var notifyViewReady = (viewIsReady, enteringEl) => __async(null, null, function* () {
  if (viewIsReady) {
    yield viewIsReady(enteringEl);
  }
});
var playTransition = (trans, opts) => {
  const progressCallback = opts.progressCallback;
  const promise = new Promise((resolve) => {
    trans.onFinish((currentStep) => resolve(currentStep === 1));
  });
  if (progressCallback) {
    trans.progressStart(true);
    progressCallback(trans);
  } else {
    trans.play();
  }
  return promise;
};
var fireWillEvents = (enteringEl, leavingEl) => {
  lifecycle(leavingEl, LIFECYCLE_WILL_LEAVE);
  lifecycle(enteringEl, LIFECYCLE_WILL_ENTER);
};
var fireDidEvents = (enteringEl, leavingEl) => {
  lifecycle(enteringEl, LIFECYCLE_DID_ENTER);
  lifecycle(leavingEl, LIFECYCLE_DID_LEAVE);
};
var lifecycle = (el, eventName) => {
  if (el) {
    const ev = new CustomEvent(eventName, {
      bubbles: false,
      cancelable: false
    });
    el.dispatchEvent(ev);
  }
};
var waitForMount = () => {
  return new Promise((resolve) => raf(() => raf(() => resolve())));
};
var deepReady = (el) => __async(null, null, function* () {
  const element = el;
  if (element) {
    if (element.componentOnReady != null) {
      const stencilEl = yield element.componentOnReady();
      if (stencilEl != null) {
        return;
      }
    } else if (element.__registerHost != null) {
      const waitForCustomElement = new Promise((resolve) => raf(resolve));
      yield waitForCustomElement;
      return;
    }
    yield Promise.all(Array.from(element.children).map(deepReady));
  }
});
var setPageHidden = (el, hidden) => {
  if (hidden) {
    el.setAttribute("aria-hidden", "true");
    el.classList.add("ion-page-hidden");
  } else {
    el.hidden = false;
    el.removeAttribute("aria-hidden");
    el.classList.remove("ion-page-hidden");
  }
};
var setZIndex = (enteringEl, leavingEl, direction) => {
  if (enteringEl !== void 0) {
    enteringEl.style.zIndex = direction === "back" ? "99" : "101";
  }
  if (leavingEl !== void 0) {
    leavingEl.style.zIndex = "100";
  }
};
var getIonPageElement = (element) => {
  if (element.classList.contains("ion-page")) {
    return element;
  }
  const ionPage = element.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs");
  if (ionPage) {
    return ionPage;
  }
  return element;
};

export {
  createAnimation,
  LIFECYCLE_WILL_ENTER,
  LIFECYCLE_DID_ENTER,
  LIFECYCLE_WILL_LEAVE,
  LIFECYCLE_DID_LEAVE,
  LIFECYCLE_WILL_UNLOAD,
  transition,
  lifecycle,
  waitForMount,
  deepReady,
  setPageHidden,
  getIonPageElement
};
/*! Bundled license information:

@ionic/core/components/animation.js:
@ionic/core/components/index2.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9jb21wb25lbnRzL2FuaW1hdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9jb21wb25lbnRzL2luZGV4Mi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgYSBhcyBwcmludElvbkVycm9yIH0gZnJvbSAnLi9pbmRleDQuanMnO1xuaW1wb3J0IHsgdyBhcyB3aW4gfSBmcm9tICcuL2luZGV4OS5qcyc7XG5sZXQgYW5pbWF0aW9uUHJlZml4O1xuY29uc3QgZ2V0QW5pbWF0aW9uUHJlZml4ID0gZWwgPT4ge1xuICBpZiAoYW5pbWF0aW9uUHJlZml4ID09PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBzdXBwb3J0c1VucHJlZml4ZWQgPSBlbC5zdHlsZS5hbmltYXRpb25OYW1lICE9PSB1bmRlZmluZWQ7XG4gICAgY29uc3Qgc3VwcG9ydHNXZWJraXRQcmVmaXggPSBlbC5zdHlsZS53ZWJraXRBbmltYXRpb25OYW1lICE9PSB1bmRlZmluZWQ7XG4gICAgYW5pbWF0aW9uUHJlZml4ID0gIXN1cHBvcnRzVW5wcmVmaXhlZCAmJiBzdXBwb3J0c1dlYmtpdFByZWZpeCA/ICctd2Via2l0LScgOiAnJztcbiAgfVxuICByZXR1cm4gYW5pbWF0aW9uUHJlZml4O1xufTtcbmNvbnN0IHNldFN0eWxlUHJvcGVydHkgPSAoZWxlbWVudCwgcHJvcGVydHlOYW1lLCB2YWx1ZSkgPT4ge1xuICBjb25zdCBwcmVmaXggPSBwcm9wZXJ0eU5hbWUuc3RhcnRzV2l0aCgnYW5pbWF0aW9uJykgPyBnZXRBbmltYXRpb25QcmVmaXgoZWxlbWVudCkgOiAnJztcbiAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShwcmVmaXggKyBwcm9wZXJ0eU5hbWUsIHZhbHVlKTtcbn07XG5jb25zdCBhZGRDbGFzc1RvQXJyYXkgPSAoY2xhc3NlcyA9IFtdLCBjbGFzc05hbWUpID0+IHtcbiAgaWYgKGNsYXNzTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lVG9BcHBlbmQgPSBBcnJheS5pc0FycmF5KGNsYXNzTmFtZSkgPyBjbGFzc05hbWUgOiBbY2xhc3NOYW1lXTtcbiAgICByZXR1cm4gWy4uLmNsYXNzZXMsIC4uLmNsYXNzTmFtZVRvQXBwZW5kXTtcbiAgfVxuICByZXR1cm4gY2xhc3Nlcztcbn07XG5jb25zdCBjcmVhdGVBbmltYXRpb24gPSBhbmltYXRpb25JZCA9PiB7XG4gIGxldCBfZGVsYXk7XG4gIGxldCBfZHVyYXRpb247XG4gIGxldCBfZWFzaW5nO1xuICBsZXQgX2l0ZXJhdGlvbnM7XG4gIGxldCBfZmlsbDtcbiAgbGV0IF9kaXJlY3Rpb247XG4gIGxldCBfa2V5ZnJhbWVzID0gW107XG4gIGxldCBiZWZvcmVBZGRDbGFzc2VzID0gW107XG4gIGxldCBiZWZvcmVSZW1vdmVDbGFzc2VzID0gW107XG4gIGxldCBpbml0aWFsaXplZCA9IGZhbHNlO1xuICBsZXQgcGFyZW50QW5pbWF0aW9uO1xuICBsZXQgYmVmb3JlU3R5bGVzVmFsdWUgPSB7fTtcbiAgbGV0IGFmdGVyQWRkQ2xhc3NlcyA9IFtdO1xuICBsZXQgYWZ0ZXJSZW1vdmVDbGFzc2VzID0gW107XG4gIGxldCBhZnRlclN0eWxlc1ZhbHVlID0ge307XG4gIGxldCBudW1BbmltYXRpb25zUnVubmluZyA9IDA7XG4gIGxldCBzaG91bGRGb3JjZUxpbmVhckVhc2luZyA9IGZhbHNlO1xuICBsZXQgc2hvdWxkRm9yY2VTeW5jUGxheWJhY2sgPSBmYWxzZTtcbiAgbGV0IGZvcmNlRGlyZWN0aW9uVmFsdWU7XG4gIGxldCBmb3JjZUR1cmF0aW9uVmFsdWU7XG4gIGxldCBmb3JjZURlbGF5VmFsdWU7XG4gIGxldCB3aWxsQ29tcGxldGUgPSB0cnVlO1xuICBsZXQgZmluaXNoZWQgPSBmYWxzZTtcbiAgbGV0IHNob3VsZENhbGN1bGF0ZU51bUFuaW1hdGlvbnMgPSB0cnVlO1xuICBsZXQgYW5pO1xuICBsZXQgcGF1c2VkID0gZmFsc2U7XG4gIGNvbnN0IGlkID0gYW5pbWF0aW9uSWQ7XG4gIGNvbnN0IG9uRmluaXNoQ2FsbGJhY2tzID0gW107XG4gIGNvbnN0IG9uRmluaXNoT25lVGltZUNhbGxiYWNrcyA9IFtdO1xuICBjb25zdCBvblN0b3BPbmVUaW1lQ2FsbGJhY2tzID0gW107XG4gIGNvbnN0IGVsZW1lbnRzID0gW107XG4gIGNvbnN0IGNoaWxkQW5pbWF0aW9ucyA9IFtdO1xuICBjb25zdCBzdHlsZXNoZWV0cyA9IFtdO1xuICBjb25zdCBfYmVmb3JlQWRkUmVhZEZ1bmN0aW9ucyA9IFtdO1xuICBjb25zdCBfYmVmb3JlQWRkV3JpdGVGdW5jdGlvbnMgPSBbXTtcbiAgY29uc3QgX2FmdGVyQWRkUmVhZEZ1bmN0aW9ucyA9IFtdO1xuICBjb25zdCBfYWZ0ZXJBZGRXcml0ZUZ1bmN0aW9ucyA9IFtdO1xuICBjb25zdCB3ZWJBbmltYXRpb25zID0gW107XG4gIGNvbnN0IHN1cHBvcnRzQW5pbWF0aW9uRWZmZWN0ID0gdHlwZW9mIEFuaW1hdGlvbkVmZmVjdCA9PT0gJ2Z1bmN0aW9uJyB8fCB3aW4gIT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygd2luLkFuaW1hdGlvbkVmZmVjdCA9PT0gJ2Z1bmN0aW9uJztcbiAgLyoqXG4gICAqIFRoaXMgaXMgYSBmZWF0dXJlIGRldGVjdGlvbiBmb3IgV2ViIEFuaW1hdGlvbnMuXG4gICAqXG4gICAqIENlcnRhaW4gZW52aXJvbm1lbnRzIHN1Y2ggYXMgZW11bGF0ZWQgYnJvd3NlciBlbnZpcm9ubWVudHMgZm9yIHRlc3RpbmcsXG4gICAqIGRvIG5vdCBzdXBwb3J0IFdlYiBBbmltYXRpb25zLiBBcyBhIHJlc3VsdCwgd2UgbmVlZCB0byBjaGVjayBmb3Igc3VwcG9ydFxuICAgKiBhbmQgcHJvdmlkZSBhIGZhbGxiYWNrIHRvIHRlc3QgY2VydGFpbiBmdW5jdGlvbmFsaXR5IHJlbGF0ZWQgdG8gV2ViIEFuaW1hdGlvbnMuXG4gICAqL1xuICBjb25zdCBzdXBwb3J0c1dlYkFuaW1hdGlvbnMgPSB0eXBlb2YgRWxlbWVudCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgRWxlbWVudC5wcm90b3R5cGUuYW5pbWF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiBzdXBwb3J0c0FuaW1hdGlvbkVmZmVjdDtcbiAgY29uc3QgZ2V0V2ViQW5pbWF0aW9ucyA9ICgpID0+IHtcbiAgICByZXR1cm4gd2ViQW5pbWF0aW9ucztcbiAgfTtcbiAgY29uc3QgZGVzdHJveSA9IGNsZWFyU3R5bGVTaGVldHMgPT4ge1xuICAgIGNoaWxkQW5pbWF0aW9ucy5mb3JFYWNoKGNoaWxkQW5pbWF0aW9uID0+IHtcbiAgICAgIGNoaWxkQW5pbWF0aW9uLmRlc3Ryb3koY2xlYXJTdHlsZVNoZWV0cyk7XG4gICAgfSk7XG4gICAgY2xlYW5VcChjbGVhclN0eWxlU2hlZXRzKTtcbiAgICBlbGVtZW50cy5sZW5ndGggPSAwO1xuICAgIGNoaWxkQW5pbWF0aW9ucy5sZW5ndGggPSAwO1xuICAgIF9rZXlmcmFtZXMubGVuZ3RoID0gMDtcbiAgICBjbGVhck9uRmluaXNoKCk7XG4gICAgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICBzaG91bGRDYWxjdWxhdGVOdW1BbmltYXRpb25zID0gdHJ1ZTtcbiAgICByZXR1cm4gYW5pO1xuICB9O1xuICAvKipcbiAgICogQ2FuY2VscyBhbnkgV2ViIEFuaW1hdGlvbnMsIHJlbW92ZXNcbiAgICogYW55IGFuaW1hdGlvbiBwcm9wZXJ0aWVzIGZyb20gdGhlXG4gICAqIGFuaW1hdGlvbidzIGVsZW1lbnRzLCBhbmQgcmVtb3ZlcyB0aGVcbiAgICogYW5pbWF0aW9uJ3Mgc3R5bGVzaGVldHMgZnJvbSB0aGUgRE9NLlxuICAgKi9cbiAgY29uc3QgY2xlYW5VcCA9IGNsZWFyU3R5bGVTaGVldHMgPT4ge1xuICAgIGNsZWFuVXBFbGVtZW50cygpO1xuICAgIGlmIChjbGVhclN0eWxlU2hlZXRzKSB7XG4gICAgICBjbGVhblVwU3R5bGVTaGVldHMoKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHJlc2V0RmxhZ3MgPSAoKSA9PiB7XG4gICAgc2hvdWxkRm9yY2VMaW5lYXJFYXNpbmcgPSBmYWxzZTtcbiAgICBzaG91bGRGb3JjZVN5bmNQbGF5YmFjayA9IGZhbHNlO1xuICAgIHNob3VsZENhbGN1bGF0ZU51bUFuaW1hdGlvbnMgPSB0cnVlO1xuICAgIGZvcmNlRGlyZWN0aW9uVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgZm9yY2VEdXJhdGlvblZhbHVlID0gdW5kZWZpbmVkO1xuICAgIGZvcmNlRGVsYXlWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICBudW1BbmltYXRpb25zUnVubmluZyA9IDA7XG4gICAgZmluaXNoZWQgPSBmYWxzZTtcbiAgICB3aWxsQ29tcGxldGUgPSB0cnVlO1xuICAgIHBhdXNlZCA9IGZhbHNlO1xuICB9O1xuICBjb25zdCBpc1J1bm5pbmcgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG51bUFuaW1hdGlvbnNSdW5uaW5nICE9PSAwICYmICFwYXVzZWQ7XG4gIH07XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogUmVtb3ZlIGEgY2FsbGJhY2sgZnJvbSBhIGNob3NlbiBjYWxsYmFjayBhcnJheVxuICAgKiBAcGFyYW0gY2FsbGJhY2tUb1JlbW92ZTogQSByZWZlcmVuY2UgdG8gdGhlIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIHJlbW92ZWRcbiAgICogQHBhcmFtIGNhbGxiYWNrT2JqZWN0czogQW4gYXJyYXkgb2YgY2FsbGJhY2tzIHRoYXQgY2FsbGJhY2tUb1JlbW92ZSBzaG91bGQgYmUgcmVtb3ZlZCBmcm9tLlxuICAgKi9cbiAgY29uc3QgY2xlYXJDYWxsYmFjayA9IChjYWxsYmFja1RvUmVtb3ZlLCBjYWxsYmFja09iamVjdHMpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IGNhbGxiYWNrT2JqZWN0cy5maW5kSW5kZXgoY2FsbGJhY2tPYmplY3QgPT4gY2FsbGJhY2tPYmplY3QuYyA9PT0gY2FsbGJhY2tUb1JlbW92ZSk7XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIGNhbGxiYWNrT2JqZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfTtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBBZGQgYSBjYWxsYmFjayB0byBiZSBmaXJlZCB3aGVuIGFuIGFuaW1hdGlvbiBpcyBzdG9wcGVkL2NhbmNlbGxlZC5cbiAgICogQHBhcmFtIGNhbGxiYWNrOiBBIHJlZmVyZW5jZSB0byB0aGUgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgZmlyZWRcbiAgICogQHBhcmFtIG9wdHM6IEFueSBvcHRpb25zIGFzc29jaWF0ZWQgd2l0aCB0aGlzIHBhcnRpY3VsYXIgY2FsbGJhY2tcbiAgICovXG4gIGNvbnN0IG9uU3RvcCA9IChjYWxsYmFjaywgb3B0cykgPT4ge1xuICAgIG9uU3RvcE9uZVRpbWVDYWxsYmFja3MucHVzaCh7XG4gICAgICBjOiBjYWxsYmFjayxcbiAgICAgIG86IG9wdHNcbiAgICB9KTtcbiAgICByZXR1cm4gYW5pO1xuICB9O1xuICBjb25zdCBvbkZpbmlzaCA9IChjYWxsYmFjaywgb3B0cykgPT4ge1xuICAgIGNvbnN0IGNhbGxiYWNrcyA9IChvcHRzID09PSBudWxsIHx8IG9wdHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdHMub25lVGltZUNhbGxiYWNrKSA/IG9uRmluaXNoT25lVGltZUNhbGxiYWNrcyA6IG9uRmluaXNoQ2FsbGJhY2tzO1xuICAgIGNhbGxiYWNrcy5wdXNoKHtcbiAgICAgIGM6IGNhbGxiYWNrLFxuICAgICAgbzogb3B0c1xuICAgIH0pO1xuICAgIHJldHVybiBhbmk7XG4gIH07XG4gIGNvbnN0IGNsZWFyT25GaW5pc2ggPSAoKSA9PiB7XG4gICAgb25GaW5pc2hDYWxsYmFja3MubGVuZ3RoID0gMDtcbiAgICBvbkZpbmlzaE9uZVRpbWVDYWxsYmFja3MubGVuZ3RoID0gMDtcbiAgICByZXR1cm4gYW5pO1xuICB9O1xuICAvKipcbiAgICogQ2FuY2VscyBhbnkgV2ViIEFuaW1hdGlvbnMgYW5kIHJlbW92ZXNcbiAgICogYW55IGFuaW1hdGlvbiBwcm9wZXJ0aWVzIGZyb20gdGhlXG4gICAqIHRoZSBhbmltYXRpb24ncyBlbGVtZW50cy5cbiAgICovXG4gIGNvbnN0IGNsZWFuVXBFbGVtZW50cyA9ICgpID0+IHtcbiAgICBpZiAoc3VwcG9ydHNXZWJBbmltYXRpb25zKSB7XG4gICAgICB3ZWJBbmltYXRpb25zLmZvckVhY2goYW5pbWF0aW9uID0+IHtcbiAgICAgICAgYW5pbWF0aW9uLmNhbmNlbCgpO1xuICAgICAgfSk7XG4gICAgICB3ZWJBbmltYXRpb25zLmxlbmd0aCA9IDA7XG4gICAgfVxuICB9O1xuICAvKipcbiAgICogUmVtb3ZlcyB0aGUgYW5pbWF0aW9uJ3Mgc3R5bGVzaGVldHNcbiAgICogZnJvbSB0aGUgRE9NLlxuICAgKi9cbiAgY29uc3QgY2xlYW5VcFN0eWxlU2hlZXRzID0gKCkgPT4ge1xuICAgIHN0eWxlc2hlZXRzLmZvckVhY2goc3R5bGVzaGVldCA9PiB7XG4gICAgICAvKipcbiAgICAgICAqIFdoZW4gc2hhcmluZyBzdHlsZXNoZWV0cywgaXQncyBwb3NzaWJsZVxuICAgICAgICogZm9yIGFub3RoZXIgYW5pbWF0aW9uIHRvIGhhdmUgYWxyZWFkeVxuICAgICAgICogY2xlYW5lZCB1cCBhIHBhcnRpY3VsYXIgc3R5bGVzaGVldFxuICAgICAgICovXG4gICAgICBpZiAoc3R5bGVzaGVldCA9PT0gbnVsbCB8fCBzdHlsZXNoZWV0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdHlsZXNoZWV0LnBhcmVudE5vZGUpIHtcbiAgICAgICAgc3R5bGVzaGVldC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlc2hlZXQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHN0eWxlc2hlZXRzLmxlbmd0aCA9IDA7XG4gIH07XG4gIGNvbnN0IGJlZm9yZUFkZFJlYWQgPSByZWFkRm4gPT4ge1xuICAgIF9iZWZvcmVBZGRSZWFkRnVuY3Rpb25zLnB1c2gocmVhZEZuKTtcbiAgICByZXR1cm4gYW5pO1xuICB9O1xuICBjb25zdCBiZWZvcmVBZGRXcml0ZSA9IHdyaXRlRm4gPT4ge1xuICAgIF9iZWZvcmVBZGRXcml0ZUZ1bmN0aW9ucy5wdXNoKHdyaXRlRm4pO1xuICAgIHJldHVybiBhbmk7XG4gIH07XG4gIGNvbnN0IGFmdGVyQWRkUmVhZCA9IHJlYWRGbiA9PiB7XG4gICAgX2FmdGVyQWRkUmVhZEZ1bmN0aW9ucy5wdXNoKHJlYWRGbik7XG4gICAgcmV0dXJuIGFuaTtcbiAgfTtcbiAgY29uc3QgYWZ0ZXJBZGRXcml0ZSA9IHdyaXRlRm4gPT4ge1xuICAgIF9hZnRlckFkZFdyaXRlRnVuY3Rpb25zLnB1c2god3JpdGVGbik7XG4gICAgcmV0dXJuIGFuaTtcbiAgfTtcbiAgY29uc3QgYmVmb3JlQWRkQ2xhc3MgPSBjbGFzc05hbWUgPT4ge1xuICAgIGJlZm9yZUFkZENsYXNzZXMgPSBhZGRDbGFzc1RvQXJyYXkoYmVmb3JlQWRkQ2xhc3NlcywgY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gYW5pO1xuICB9O1xuICBjb25zdCBiZWZvcmVSZW1vdmVDbGFzcyA9IGNsYXNzTmFtZSA9PiB7XG4gICAgYmVmb3JlUmVtb3ZlQ2xhc3NlcyA9IGFkZENsYXNzVG9BcnJheShiZWZvcmVSZW1vdmVDbGFzc2VzLCBjbGFzc05hbWUpO1xuICAgIHJldHVybiBhbmk7XG4gIH07XG4gIC8qKlxuICAgKiBTZXQgQ1NTIGlubGluZSBzdHlsZXMgdG8gdGhlIGFuaW1hdGlvbidzXG4gICAqIGVsZW1lbnRzIGJlZm9yZSB0aGUgYW5pbWF0aW9uIGJlZ2lucy5cbiAgICovXG4gIGNvbnN0IGJlZm9yZVN0eWxlcyA9IChzdHlsZXMgPSB7fSkgPT4ge1xuICAgIGJlZm9yZVN0eWxlc1ZhbHVlID0gc3R5bGVzO1xuICAgIHJldHVybiBhbmk7XG4gIH07XG4gIC8qKlxuICAgKiBDbGVhciBDU1MgaW5saW5lIHN0eWxlcyBmcm9tIHRoZSBhbmltYXRpb24nc1xuICAgKiBlbGVtZW50cyBiZWZvcmUgdGhlIGFuaW1hdGlvbiBiZWdpbnMuXG4gICAqL1xuICBjb25zdCBiZWZvcmVDbGVhclN0eWxlcyA9IChwcm9wZXJ0eU5hbWVzID0gW10pID0+IHtcbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHByb3BlcnR5TmFtZXMpIHtcbiAgICAgIGJlZm9yZVN0eWxlc1ZhbHVlW3Byb3BlcnR5XSA9ICcnO1xuICAgIH1cbiAgICByZXR1cm4gYW5pO1xuICB9O1xuICBjb25zdCBhZnRlckFkZENsYXNzID0gY2xhc3NOYW1lID0+IHtcbiAgICBhZnRlckFkZENsYXNzZXMgPSBhZGRDbGFzc1RvQXJyYXkoYWZ0ZXJBZGRDbGFzc2VzLCBjbGFzc05hbWUpO1xuICAgIHJldHVybiBhbmk7XG4gIH07XG4gIGNvbnN0IGFmdGVyUmVtb3ZlQ2xhc3MgPSBjbGFzc05hbWUgPT4ge1xuICAgIGFmdGVyUmVtb3ZlQ2xhc3NlcyA9IGFkZENsYXNzVG9BcnJheShhZnRlclJlbW92ZUNsYXNzZXMsIGNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIGFuaTtcbiAgfTtcbiAgY29uc3QgYWZ0ZXJTdHlsZXMgPSAoc3R5bGVzID0ge30pID0+IHtcbiAgICBhZnRlclN0eWxlc1ZhbHVlID0gc3R5bGVzO1xuICAgIHJldHVybiBhbmk7XG4gIH07XG4gIGNvbnN0IGFmdGVyQ2xlYXJTdHlsZXMgPSAocHJvcGVydHlOYW1lcyA9IFtdKSA9PiB7XG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiBwcm9wZXJ0eU5hbWVzKSB7XG4gICAgICBhZnRlclN0eWxlc1ZhbHVlW3Byb3BlcnR5XSA9ICcnO1xuICAgIH1cbiAgICByZXR1cm4gYW5pO1xuICB9O1xuICBjb25zdCBnZXRGaWxsID0gKCkgPT4ge1xuICAgIGlmIChfZmlsbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gX2ZpbGw7XG4gICAgfVxuICAgIGlmIChwYXJlbnRBbmltYXRpb24pIHtcbiAgICAgIHJldHVybiBwYXJlbnRBbmltYXRpb24uZ2V0RmlsbCgpO1xuICAgIH1cbiAgICByZXR1cm4gJ2JvdGgnO1xuICB9O1xuICBjb25zdCBnZXREaXJlY3Rpb24gPSAoKSA9PiB7XG4gICAgaWYgKGZvcmNlRGlyZWN0aW9uVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZvcmNlRGlyZWN0aW9uVmFsdWU7XG4gICAgfVxuICAgIGlmIChfZGlyZWN0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBfZGlyZWN0aW9uO1xuICAgIH1cbiAgICBpZiAocGFyZW50QW5pbWF0aW9uKSB7XG4gICAgICByZXR1cm4gcGFyZW50QW5pbWF0aW9uLmdldERpcmVjdGlvbigpO1xuICAgIH1cbiAgICByZXR1cm4gJ25vcm1hbCc7XG4gIH07XG4gIGNvbnN0IGdldEVhc2luZyA9ICgpID0+IHtcbiAgICBpZiAoc2hvdWxkRm9yY2VMaW5lYXJFYXNpbmcpIHtcbiAgICAgIHJldHVybiAnbGluZWFyJztcbiAgICB9XG4gICAgaWYgKF9lYXNpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIF9lYXNpbmc7XG4gICAgfVxuICAgIGlmIChwYXJlbnRBbmltYXRpb24pIHtcbiAgICAgIHJldHVybiBwYXJlbnRBbmltYXRpb24uZ2V0RWFzaW5nKCk7XG4gICAgfVxuICAgIHJldHVybiAnbGluZWFyJztcbiAgfTtcbiAgY29uc3QgZ2V0RHVyYXRpb24gPSAoKSA9PiB7XG4gICAgaWYgKHNob3VsZEZvcmNlU3luY1BsYXliYWNrKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgaWYgKGZvcmNlRHVyYXRpb25WYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZm9yY2VEdXJhdGlvblZhbHVlO1xuICAgIH1cbiAgICBpZiAoX2R1cmF0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBfZHVyYXRpb247XG4gICAgfVxuICAgIGlmIChwYXJlbnRBbmltYXRpb24pIHtcbiAgICAgIHJldHVybiBwYXJlbnRBbmltYXRpb24uZ2V0RHVyYXRpb24oKTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH07XG4gIGNvbnN0IGdldEl0ZXJhdGlvbnMgPSAoKSA9PiB7XG4gICAgaWYgKF9pdGVyYXRpb25zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBfaXRlcmF0aW9ucztcbiAgICB9XG4gICAgaWYgKHBhcmVudEFuaW1hdGlvbikge1xuICAgICAgcmV0dXJuIHBhcmVudEFuaW1hdGlvbi5nZXRJdGVyYXRpb25zKCk7XG4gICAgfVxuICAgIHJldHVybiAxO1xuICB9O1xuICBjb25zdCBnZXREZWxheSA9ICgpID0+IHtcbiAgICBpZiAoZm9yY2VEZWxheVZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmb3JjZURlbGF5VmFsdWU7XG4gICAgfVxuICAgIGlmIChfZGVsYXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIF9kZWxheTtcbiAgICB9XG4gICAgaWYgKHBhcmVudEFuaW1hdGlvbikge1xuICAgICAgcmV0dXJuIHBhcmVudEFuaW1hdGlvbi5nZXREZWxheSgpO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfTtcbiAgY29uc3QgZ2V0S2V5ZnJhbWVzID0gKCkgPT4ge1xuICAgIHJldHVybiBfa2V5ZnJhbWVzO1xuICB9O1xuICBjb25zdCBkaXJlY3Rpb24gPSBhbmltYXRpb25EaXJlY3Rpb24gPT4ge1xuICAgIF9kaXJlY3Rpb24gPSBhbmltYXRpb25EaXJlY3Rpb247XG4gICAgdXBkYXRlKHRydWUpO1xuICAgIHJldHVybiBhbmk7XG4gIH07XG4gIGNvbnN0IGZpbGwgPSBhbmltYXRpb25GaWxsID0+IHtcbiAgICBfZmlsbCA9IGFuaW1hdGlvbkZpbGw7XG4gICAgdXBkYXRlKHRydWUpO1xuICAgIHJldHVybiBhbmk7XG4gIH07XG4gIGNvbnN0IGRlbGF5ID0gYW5pbWF0aW9uRGVsYXkgPT4ge1xuICAgIF9kZWxheSA9IGFuaW1hdGlvbkRlbGF5O1xuICAgIHVwZGF0ZSh0cnVlKTtcbiAgICByZXR1cm4gYW5pO1xuICB9O1xuICBjb25zdCBlYXNpbmcgPSBhbmltYXRpb25FYXNpbmcgPT4ge1xuICAgIF9lYXNpbmcgPSBhbmltYXRpb25FYXNpbmc7XG4gICAgdXBkYXRlKHRydWUpO1xuICAgIHJldHVybiBhbmk7XG4gIH07XG4gIGNvbnN0IGR1cmF0aW9uID0gYW5pbWF0aW9uRHVyYXRpb24gPT4ge1xuICAgIC8qKlxuICAgICAqIENTUyBBbmltYXRpb24gRHVyYXRpb25zIG9mIDBtcyB3b3JrIGZpbmUgb24gQ2hyb21lXG4gICAgICogYnV0IGRvIG5vdCBydW4gb24gU2FmYXJpLCBzbyBmb3JjZSBpdCB0byAxbXMgdG9cbiAgICAgKiBnZXQgaXQgdG8gcnVuIG9uIGJvdGggcGxhdGZvcm1zLlxuICAgICAqL1xuICAgIGlmICghc3VwcG9ydHNXZWJBbmltYXRpb25zICYmIGFuaW1hdGlvbkR1cmF0aW9uID09PSAwKSB7XG4gICAgICBhbmltYXRpb25EdXJhdGlvbiA9IDE7XG4gICAgfVxuICAgIF9kdXJhdGlvbiA9IGFuaW1hdGlvbkR1cmF0aW9uO1xuICAgIHVwZGF0ZSh0cnVlKTtcbiAgICByZXR1cm4gYW5pO1xuICB9O1xuICBjb25zdCBpdGVyYXRpb25zID0gYW5pbWF0aW9uSXRlcmF0aW9ucyA9PiB7XG4gICAgX2l0ZXJhdGlvbnMgPSBhbmltYXRpb25JdGVyYXRpb25zO1xuICAgIHVwZGF0ZSh0cnVlKTtcbiAgICByZXR1cm4gYW5pO1xuICB9O1xuICBjb25zdCBwYXJlbnQgPSBhbmltYXRpb24gPT4ge1xuICAgIHBhcmVudEFuaW1hdGlvbiA9IGFuaW1hdGlvbjtcbiAgICByZXR1cm4gYW5pO1xuICB9O1xuICBjb25zdCBhZGRFbGVtZW50ID0gZWwgPT4ge1xuICAgIGlmIChlbCAhPSBudWxsKSB7XG4gICAgICBpZiAoZWwubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgZWxlbWVudHMucHVzaChlbCk7XG4gICAgICB9IGVsc2UgaWYgKGVsLmxlbmd0aCA+PSAwKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBlbGVtZW50cy5wdXNoKGVsW2ldKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJpbnRJb25FcnJvcignY3JlYXRlQW5pbWF0aW9uIC0gSW52YWxpZCBhZGRFbGVtZW50IHZhbHVlLicpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYW5pO1xuICB9O1xuICBjb25zdCBhZGRBbmltYXRpb24gPSBhbmltYXRpb25Ub0FkZCA9PiB7XG4gICAgaWYgKGFuaW1hdGlvblRvQWRkICE9IG51bGwpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGFuaW1hdGlvblRvQWRkKSkge1xuICAgICAgICBmb3IgKGNvbnN0IGFuaW1hdGlvbiBvZiBhbmltYXRpb25Ub0FkZCkge1xuICAgICAgICAgIGFuaW1hdGlvbi5wYXJlbnQoYW5pKTtcbiAgICAgICAgICBjaGlsZEFuaW1hdGlvbnMucHVzaChhbmltYXRpb24pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbmltYXRpb25Ub0FkZC5wYXJlbnQoYW5pKTtcbiAgICAgICAgY2hpbGRBbmltYXRpb25zLnB1c2goYW5pbWF0aW9uVG9BZGQpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYW5pO1xuICB9O1xuICBjb25zdCBrZXlmcmFtZXMgPSBrZXlmcmFtZVZhbHVlcyA9PiB7XG4gICAgY29uc3QgZGlmZmVyZW50ID0gX2tleWZyYW1lcyAhPT0ga2V5ZnJhbWVWYWx1ZXM7XG4gICAgX2tleWZyYW1lcyA9IGtleWZyYW1lVmFsdWVzO1xuICAgIGlmIChkaWZmZXJlbnQpIHtcbiAgICAgIHVwZGF0ZUtleWZyYW1lcyhfa2V5ZnJhbWVzKTtcbiAgICB9XG4gICAgcmV0dXJuIGFuaTtcbiAgfTtcbiAgY29uc3QgdXBkYXRlS2V5ZnJhbWVzID0ga2V5ZnJhbWVWYWx1ZXMgPT4ge1xuICAgIGlmIChzdXBwb3J0c1dlYkFuaW1hdGlvbnMpIHtcbiAgICAgIGdldFdlYkFuaW1hdGlvbnMoKS5mb3JFYWNoKGFuaW1hdGlvbiA9PiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhbmltYXRpb24uZWZmZWN0J3MgdHlwZSBpcyBBbmltYXRpb25FZmZlY3QuXG4gICAgICAgICAqIEhvd2V2ZXIsIGluIHRoaXMgY2FzZSB3ZSBoYXZlIGEgbW9yZSBzcGVjaWZpY1xuICAgICAgICAgKiB0eXBlIG9mIEFuaW1hdGlvbkVmZmVjdCBjYWxsZWQgS2V5ZnJhbWVFZmZlY3Qgd2hpY2hcbiAgICAgICAgICogaW5oZXJpdHMgZnJvbSBBbmltYXRpb25FZmZlY3QuIEFzIGEgcmVzdWx0LFxuICAgICAgICAgKiB3ZSBjYXN0IGFuaW1hdGlvbi5lZmZlY3QgdG8gS2V5ZnJhbWVFZmZlY3QuXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBrZXlmcmFtZUVmZmVjdCA9IGFuaW1hdGlvbi5lZmZlY3Q7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBzZXRLZXlmcmFtZXMgaXMgbm90IHN1cHBvcnRlZCBpbiBhbGwgYnJvd3NlclxuICAgICAgICAgKiB2ZXJzaW9ucyB0aGF0IElvbmljIHN1cHBvcnRzLCBzbyB3ZSBuZWVkIHRvXG4gICAgICAgICAqIGNoZWNrIGZvciBzdXBwb3J0IGJlZm9yZSB1c2luZyBpdC5cbiAgICAgICAgICovXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvc3RyaWN0LWJvb2xlYW4tZXhwcmVzc2lvbnNcbiAgICAgICAgaWYgKGtleWZyYW1lRWZmZWN0LnNldEtleWZyYW1lcykge1xuICAgICAgICAgIGtleWZyYW1lRWZmZWN0LnNldEtleWZyYW1lcyhrZXlmcmFtZVZhbHVlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgbmV3RWZmZWN0ID0gbmV3IEtleWZyYW1lRWZmZWN0KGtleWZyYW1lRWZmZWN0LnRhcmdldCwga2V5ZnJhbWVWYWx1ZXMsIGtleWZyYW1lRWZmZWN0LmdldFRpbWluZygpKTtcbiAgICAgICAgICBhbmltYXRpb24uZWZmZWN0ID0gbmV3RWZmZWN0O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIC8qKlxuICAgKiBSdW4gYWxsIFwiYmVmb3JlXCIgYW5pbWF0aW9uIGhvb2tzLlxuICAgKi9cbiAgY29uc3QgYmVmb3JlQW5pbWF0aW9uID0gKCkgPT4ge1xuICAgIC8vIFJ1bnMgYWxsIGJlZm9yZSByZWFkIGNhbGxiYWNrc1xuICAgIF9iZWZvcmVBZGRSZWFkRnVuY3Rpb25zLmZvckVhY2goY2FsbGJhY2sgPT4gY2FsbGJhY2soKSk7XG4gICAgLy8gUnVucyBhbGwgYmVmb3JlIHdyaXRlIGNhbGxiYWNrc1xuICAgIF9iZWZvcmVBZGRXcml0ZUZ1bmN0aW9ucy5mb3JFYWNoKGNhbGxiYWNrID0+IGNhbGxiYWNrKCkpO1xuICAgIC8vIFVwZGF0ZXMgc3R5bGVzIGFuZCBjbGFzc2VzIGJlZm9yZSBhbmltYXRpb24gcnVuc1xuICAgIGNvbnN0IGFkZENsYXNzZXMgPSBiZWZvcmVBZGRDbGFzc2VzO1xuICAgIGNvbnN0IHJlbW92ZUNsYXNzZXMgPSBiZWZvcmVSZW1vdmVDbGFzc2VzO1xuICAgIGNvbnN0IHN0eWxlcyA9IGJlZm9yZVN0eWxlc1ZhbHVlO1xuICAgIGVsZW1lbnRzLmZvckVhY2goZWwgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudENsYXNzTGlzdCA9IGVsLmNsYXNzTGlzdDtcbiAgICAgIGFkZENsYXNzZXMuZm9yRWFjaChjID0+IGVsZW1lbnRDbGFzc0xpc3QuYWRkKGMpKTtcbiAgICAgIHJlbW92ZUNsYXNzZXMuZm9yRWFjaChjID0+IGVsZW1lbnRDbGFzc0xpc3QucmVtb3ZlKGMpKTtcbiAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gc3R5bGVzKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgICAgICAgaWYgKHN0eWxlcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgICBzZXRTdHlsZVByb3BlcnR5KGVsLCBwcm9wZXJ0eSwgc3R5bGVzW3Byb3BlcnR5XSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgLyoqXG4gICAqIFJ1biBhbGwgXCJhZnRlclwiIGFuaW1hdGlvbiBob29rcy5cbiAgICovXG4gIGNvbnN0IGFmdGVyQW5pbWF0aW9uID0gKCkgPT4ge1xuICAgIC8vIFJ1bnMgYWxsIGFmdGVyIHJlYWQgY2FsbGJhY2tzXG4gICAgX2FmdGVyQWRkUmVhZEZ1bmN0aW9ucy5mb3JFYWNoKGNhbGxiYWNrID0+IGNhbGxiYWNrKCkpO1xuICAgIC8vIFJ1bnMgYWxsIGFmdGVyIHdyaXRlIGNhbGxiYWNrc1xuICAgIF9hZnRlckFkZFdyaXRlRnVuY3Rpb25zLmZvckVhY2goY2FsbGJhY2sgPT4gY2FsbGJhY2soKSk7XG4gICAgLy8gVXBkYXRlcyBzdHlsZXMgYW5kIGNsYXNzZXMgYmVmb3JlIGFuaW1hdGlvbiBlbmRzXG4gICAgY29uc3QgY3VycmVudFN0ZXAgPSB3aWxsQ29tcGxldGUgPyAxIDogMDtcbiAgICBjb25zdCBhZGRDbGFzc2VzID0gYWZ0ZXJBZGRDbGFzc2VzO1xuICAgIGNvbnN0IHJlbW92ZUNsYXNzZXMgPSBhZnRlclJlbW92ZUNsYXNzZXM7XG4gICAgY29uc3Qgc3R5bGVzID0gYWZ0ZXJTdHlsZXNWYWx1ZTtcbiAgICBlbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnRDbGFzc0xpc3QgPSBlbC5jbGFzc0xpc3Q7XG4gICAgICBhZGRDbGFzc2VzLmZvckVhY2goYyA9PiBlbGVtZW50Q2xhc3NMaXN0LmFkZChjKSk7XG4gICAgICByZW1vdmVDbGFzc2VzLmZvckVhY2goYyA9PiBlbGVtZW50Q2xhc3NMaXN0LnJlbW92ZShjKSk7XG4gICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIHN0eWxlcykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gICAgICAgIGlmIChzdHlsZXMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgICAgc2V0U3R5bGVQcm9wZXJ0eShlbCwgcHJvcGVydHksIHN0eWxlc1twcm9wZXJ0eV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogQ2xlYW4gdXAgYW55IHZhbHVlIGNvZXJjaW9uIGJlZm9yZVxuICAgICAqIHRoZSB1c2VyIGNhbGxiYWNrcyBmaXJlIG90aGVyd2lzZVxuICAgICAqIHRoZXkgbWF5IGdldCBzdGFsZSB2YWx1ZXMuIEZvciBleGFtcGxlLFxuICAgICAqIGlmIHNvbWVvbmUgY2FsbHMgcHJvZ3Jlc3NTdGFydCgwKSB0aGVcbiAgICAgKiBhbmltYXRpb24gbWF5IHN0aWxsIGJlIHJldmVyc2VkLlxuICAgICAqL1xuICAgIGZvcmNlRHVyYXRpb25WYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICBmb3JjZURpcmVjdGlvblZhbHVlID0gdW5kZWZpbmVkO1xuICAgIGZvcmNlRGVsYXlWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICBvbkZpbmlzaENhbGxiYWNrcy5mb3JFYWNoKG9uRmluaXNoQ2FsbGJhY2sgPT4ge1xuICAgICAgcmV0dXJuIG9uRmluaXNoQ2FsbGJhY2suYyhjdXJyZW50U3RlcCwgYW5pKTtcbiAgICB9KTtcbiAgICBvbkZpbmlzaE9uZVRpbWVDYWxsYmFja3MuZm9yRWFjaChvbkZpbmlzaENhbGxiYWNrID0+IHtcbiAgICAgIHJldHVybiBvbkZpbmlzaENhbGxiYWNrLmMoY3VycmVudFN0ZXAsIGFuaSk7XG4gICAgfSk7XG4gICAgb25GaW5pc2hPbmVUaW1lQ2FsbGJhY2tzLmxlbmd0aCA9IDA7XG4gICAgc2hvdWxkQ2FsY3VsYXRlTnVtQW5pbWF0aW9ucyA9IHRydWU7XG4gICAgaWYgKHdpbGxDb21wbGV0ZSkge1xuICAgICAgZmluaXNoZWQgPSB0cnVlO1xuICAgIH1cbiAgICB3aWxsQ29tcGxldGUgPSB0cnVlO1xuICB9O1xuICBjb25zdCBhbmltYXRpb25GaW5pc2ggPSAoKSA9PiB7XG4gICAgaWYgKG51bUFuaW1hdGlvbnNSdW5uaW5nID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG51bUFuaW1hdGlvbnNSdW5uaW5nLS07XG4gICAgaWYgKG51bUFuaW1hdGlvbnNSdW5uaW5nID09PSAwKSB7XG4gICAgICBhZnRlckFuaW1hdGlvbigpO1xuICAgICAgaWYgKHBhcmVudEFuaW1hdGlvbikge1xuICAgICAgICBwYXJlbnRBbmltYXRpb24uYW5pbWF0aW9uRmluaXNoKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBjb25zdCBpbml0aWFsaXplV2ViQW5pbWF0aW9uID0gKCkgPT4ge1xuICAgIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBjb25zdCBhbmltYXRpb24gPSBlbGVtZW50LmFuaW1hdGUoX2tleWZyYW1lcywge1xuICAgICAgICBpZCxcbiAgICAgICAgZGVsYXk6IGdldERlbGF5KCksXG4gICAgICAgIGR1cmF0aW9uOiBnZXREdXJhdGlvbigpLFxuICAgICAgICBlYXNpbmc6IGdldEVhc2luZygpLFxuICAgICAgICBpdGVyYXRpb25zOiBnZXRJdGVyYXRpb25zKCksXG4gICAgICAgIGZpbGw6IGdldEZpbGwoKSxcbiAgICAgICAgZGlyZWN0aW9uOiBnZXREaXJlY3Rpb24oKVxuICAgICAgfSk7XG4gICAgICBhbmltYXRpb24ucGF1c2UoKTtcbiAgICAgIHdlYkFuaW1hdGlvbnMucHVzaChhbmltYXRpb24pO1xuICAgIH0pO1xuICAgIGlmICh3ZWJBbmltYXRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgIHdlYkFuaW1hdGlvbnNbMF0ub25maW5pc2ggPSAoKSA9PiB7XG4gICAgICAgIGFuaW1hdGlvbkZpbmlzaCgpO1xuICAgICAgfTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGluaXRpYWxpemVBbmltYXRpb24gPSAoKSA9PiB7XG4gICAgYmVmb3JlQW5pbWF0aW9uKCk7XG4gICAgaWYgKF9rZXlmcmFtZXMubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKHN1cHBvcnRzV2ViQW5pbWF0aW9ucykge1xuICAgICAgICBpbml0aWFsaXplV2ViQW5pbWF0aW9uKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGluaXRpYWxpemVkID0gdHJ1ZTtcbiAgfTtcbiAgY29uc3Qgc2V0QW5pbWF0aW9uU3RlcCA9IHN0ZXAgPT4ge1xuICAgIHN0ZXAgPSBNYXRoLm1pbihNYXRoLm1heChzdGVwLCAwKSwgMC45OTk5KTtcbiAgICBpZiAoc3VwcG9ydHNXZWJBbmltYXRpb25zKSB7XG4gICAgICB3ZWJBbmltYXRpb25zLmZvckVhY2goYW5pbWF0aW9uID0+IHtcbiAgICAgICAgLy8gV2hlbiBjcmVhdGluZyB0aGUgYW5pbWF0aW9uIHRoZSBkZWxheSBpcyBndWFyYW50ZWVkIHRvIGJlIHNldCB0byBhIG51bWJlci5cbiAgICAgICAgYW5pbWF0aW9uLmN1cnJlbnRUaW1lID0gYW5pbWF0aW9uLmVmZmVjdC5nZXRDb21wdXRlZFRpbWluZygpLmRlbGF5ICsgZ2V0RHVyYXRpb24oKSAqIHN0ZXA7XG4gICAgICAgIGFuaW1hdGlvbi5wYXVzZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBjb25zdCB1cGRhdGVXZWJBbmltYXRpb24gPSBzdGVwID0+IHtcbiAgICB3ZWJBbmltYXRpb25zLmZvckVhY2goYW5pbWF0aW9uID0+IHtcbiAgICAgIGFuaW1hdGlvbi5lZmZlY3QudXBkYXRlVGltaW5nKHtcbiAgICAgICAgZGVsYXk6IGdldERlbGF5KCksXG4gICAgICAgIGR1cmF0aW9uOiBnZXREdXJhdGlvbigpLFxuICAgICAgICBlYXNpbmc6IGdldEVhc2luZygpLFxuICAgICAgICBpdGVyYXRpb25zOiBnZXRJdGVyYXRpb25zKCksXG4gICAgICAgIGZpbGw6IGdldEZpbGwoKSxcbiAgICAgICAgZGlyZWN0aW9uOiBnZXREaXJlY3Rpb24oKVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYgKHN0ZXAgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc2V0QW5pbWF0aW9uU3RlcChzdGVwKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHVwZGF0ZSA9IChkZWVwID0gZmFsc2UsIHRvZ2dsZUFuaW1hdGlvbk5hbWUgPSB0cnVlLCBzdGVwKSA9PiB7XG4gICAgaWYgKGRlZXApIHtcbiAgICAgIGNoaWxkQW5pbWF0aW9ucy5mb3JFYWNoKGFuaW1hdGlvbiA9PiB7XG4gICAgICAgIGFuaW1hdGlvbi51cGRhdGUoZGVlcCwgdG9nZ2xlQW5pbWF0aW9uTmFtZSwgc3RlcCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHN1cHBvcnRzV2ViQW5pbWF0aW9ucykge1xuICAgICAgdXBkYXRlV2ViQW5pbWF0aW9uKHN0ZXApO1xuICAgIH1cbiAgICByZXR1cm4gYW5pO1xuICB9O1xuICBjb25zdCBwcm9ncmVzc1N0YXJ0ID0gKGZvcmNlTGluZWFyRWFzaW5nID0gZmFsc2UsIHN0ZXApID0+IHtcbiAgICBjaGlsZEFuaW1hdGlvbnMuZm9yRWFjaChhbmltYXRpb24gPT4ge1xuICAgICAgYW5pbWF0aW9uLnByb2dyZXNzU3RhcnQoZm9yY2VMaW5lYXJFYXNpbmcsIHN0ZXApO1xuICAgIH0pO1xuICAgIHBhdXNlQW5pbWF0aW9uKCk7XG4gICAgc2hvdWxkRm9yY2VMaW5lYXJFYXNpbmcgPSBmb3JjZUxpbmVhckVhc2luZztcbiAgICBpZiAoIWluaXRpYWxpemVkKSB7XG4gICAgICBpbml0aWFsaXplQW5pbWF0aW9uKCk7XG4gICAgfVxuICAgIHVwZGF0ZShmYWxzZSwgdHJ1ZSwgc3RlcCk7XG4gICAgcmV0dXJuIGFuaTtcbiAgfTtcbiAgY29uc3QgcHJvZ3Jlc3NTdGVwID0gc3RlcCA9PiB7XG4gICAgY2hpbGRBbmltYXRpb25zLmZvckVhY2goYW5pbWF0aW9uID0+IHtcbiAgICAgIGFuaW1hdGlvbi5wcm9ncmVzc1N0ZXAoc3RlcCk7XG4gICAgfSk7XG4gICAgc2V0QW5pbWF0aW9uU3RlcChzdGVwKTtcbiAgICByZXR1cm4gYW5pO1xuICB9O1xuICBjb25zdCBwcm9ncmVzc0VuZCA9IChwbGF5VG8sIHN0ZXAsIGR1cikgPT4ge1xuICAgIHNob3VsZEZvcmNlTGluZWFyRWFzaW5nID0gZmFsc2U7XG4gICAgY2hpbGRBbmltYXRpb25zLmZvckVhY2goYW5pbWF0aW9uID0+IHtcbiAgICAgIGFuaW1hdGlvbi5wcm9ncmVzc0VuZChwbGF5VG8sIHN0ZXAsIGR1cik7XG4gICAgfSk7XG4gICAgaWYgKGR1ciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBmb3JjZUR1cmF0aW9uVmFsdWUgPSBkdXI7XG4gICAgfVxuICAgIGZpbmlzaGVkID0gZmFsc2U7XG4gICAgd2lsbENvbXBsZXRlID0gdHJ1ZTtcbiAgICBpZiAocGxheVRvID09PSAwKSB7XG4gICAgICBmb3JjZURpcmVjdGlvblZhbHVlID0gZ2V0RGlyZWN0aW9uKCkgPT09ICdyZXZlcnNlJyA/ICdub3JtYWwnIDogJ3JldmVyc2UnO1xuICAgICAgaWYgKGZvcmNlRGlyZWN0aW9uVmFsdWUgPT09ICdyZXZlcnNlJykge1xuICAgICAgICB3aWxsQ29tcGxldGUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0c1dlYkFuaW1hdGlvbnMpIHtcbiAgICAgICAgdXBkYXRlKCk7XG4gICAgICAgIHNldEFuaW1hdGlvblN0ZXAoMSAtIHN0ZXApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yY2VEZWxheVZhbHVlID0gKDEgLSBzdGVwKSAqIGdldER1cmF0aW9uKCkgKiAtMTtcbiAgICAgICAgdXBkYXRlKGZhbHNlLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChwbGF5VG8gPT09IDEpIHtcbiAgICAgIGlmIChzdXBwb3J0c1dlYkFuaW1hdGlvbnMpIHtcbiAgICAgICAgdXBkYXRlKCk7XG4gICAgICAgIHNldEFuaW1hdGlvblN0ZXAoc3RlcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3JjZURlbGF5VmFsdWUgPSBzdGVwICogZ2V0RHVyYXRpb24oKSAqIC0xO1xuICAgICAgICB1cGRhdGUoZmFsc2UsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHBsYXlUbyAhPT0gdW5kZWZpbmVkICYmICFwYXJlbnRBbmltYXRpb24pIHtcbiAgICAgIHBsYXkoKTtcbiAgICB9XG4gICAgcmV0dXJuIGFuaTtcbiAgfTtcbiAgY29uc3QgcGF1c2VBbmltYXRpb24gPSAoKSA9PiB7XG4gICAgaWYgKGluaXRpYWxpemVkKSB7XG4gICAgICBpZiAoc3VwcG9ydHNXZWJBbmltYXRpb25zKSB7XG4gICAgICAgIHdlYkFuaW1hdGlvbnMuZm9yRWFjaChhbmltYXRpb24gPT4ge1xuICAgICAgICAgIGFuaW1hdGlvbi5wYXVzZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgc2V0U3R5bGVQcm9wZXJ0eShlbGVtZW50LCAnYW5pbWF0aW9uLXBsYXktc3RhdGUnLCAncGF1c2VkJyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcGF1c2VkID0gdHJ1ZTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHBhdXNlID0gKCkgPT4ge1xuICAgIGNoaWxkQW5pbWF0aW9ucy5mb3JFYWNoKGFuaW1hdGlvbiA9PiB7XG4gICAgICBhbmltYXRpb24ucGF1c2UoKTtcbiAgICB9KTtcbiAgICBwYXVzZUFuaW1hdGlvbigpO1xuICAgIHJldHVybiBhbmk7XG4gIH07XG4gIGNvbnN0IHBsYXlDU1NBbmltYXRpb25zID0gKCkgPT4ge1xuICAgIGFuaW1hdGlvbkZpbmlzaCgpO1xuICB9O1xuICBjb25zdCBwbGF5V2ViQW5pbWF0aW9ucyA9ICgpID0+IHtcbiAgICB3ZWJBbmltYXRpb25zLmZvckVhY2goYW5pbWF0aW9uID0+IHtcbiAgICAgIGFuaW1hdGlvbi5wbGF5KCk7XG4gICAgfSk7XG4gICAgaWYgKF9rZXlmcmFtZXMubGVuZ3RoID09PSAwIHx8IGVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgYW5pbWF0aW9uRmluaXNoKCk7XG4gICAgfVxuICB9O1xuICBjb25zdCByZXNldEFuaW1hdGlvbiA9ICgpID0+IHtcbiAgICBpZiAoc3VwcG9ydHNXZWJBbmltYXRpb25zKSB7XG4gICAgICBzZXRBbmltYXRpb25TdGVwKDApO1xuICAgICAgdXBkYXRlV2ViQW5pbWF0aW9uKCk7XG4gICAgfVxuICB9O1xuICBjb25zdCBwbGF5ID0gb3B0cyA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgaWYgKG9wdHMgPT09IG51bGwgfHwgb3B0cyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0cy5zeW5jKSB7XG4gICAgICAgIHNob3VsZEZvcmNlU3luY1BsYXliYWNrID0gdHJ1ZTtcbiAgICAgICAgb25GaW5pc2goKCkgPT4gc2hvdWxkRm9yY2VTeW5jUGxheWJhY2sgPSBmYWxzZSwge1xuICAgICAgICAgIG9uZVRpbWVDYWxsYmFjazogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICghaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgaW5pdGlhbGl6ZUFuaW1hdGlvbigpO1xuICAgICAgfVxuICAgICAgaWYgKGZpbmlzaGVkKSB7XG4gICAgICAgIHJlc2V0QW5pbWF0aW9uKCk7XG4gICAgICAgIGZpbmlzaGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoc2hvdWxkQ2FsY3VsYXRlTnVtQW5pbWF0aW9ucykge1xuICAgICAgICBudW1BbmltYXRpb25zUnVubmluZyA9IGNoaWxkQW5pbWF0aW9ucy5sZW5ndGggKyAxO1xuICAgICAgICBzaG91bGRDYWxjdWxhdGVOdW1BbmltYXRpb25zID0gZmFsc2U7XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIFdoZW4gb25lIG9mIHRoZXNlIGNhbGxiYWNrcyBmaXJlcyB3ZVxuICAgICAgICogbmVlZCB0byBjbGVhciB0aGUgb3RoZXIncyBjYWxsYmFjayBvdGhlcndpc2VcbiAgICAgICAqIHlvdSBjYW4gcG90ZW50aWFsbHkgZ2V0IHRoZXNlIGNhbGxiYWNrc1xuICAgICAgICogZmlyaW5nIG11bHRpcGxlIHRpbWVzIGlmIHRoZSBwbGF5IG1ldGhvZFxuICAgICAgICogaXMgc3Vic2VxdWVudGx5IGNhbGxlZC5cbiAgICAgICAqIEV4YW1wbGU6XG4gICAgICAgKiBhbmltYXRpb24ucGxheSgpIChvblN0b3AgYW5kIG9uRmluaXNoIGNhbGxiYWNrcyBhcmUgcmVnaXN0ZXJlZClcbiAgICAgICAqIGFuaW1hdGlvbi5zdG9wKCkgKG9uU3RvcCBjYWxsYmFjayBpcyBmaXJlZCwgb25GaW5pc2ggaXMgbm90KVxuICAgICAgICogYW5pbWF0aW9uLnBsYXkoKSAob25TdG9wIGFuZCBvbkZpbmlzaCBjYWxsYmFja3MgYXJlIHJlZ2lzdGVyZWQpXG4gICAgICAgKiBUb3RhbCBvblN0b3AgY2FsbGJhY2tzOiAxXG4gICAgICAgKiBUb3RhbCBvbkZpbmlzaCBjYWxsYmFja3M6IDJcbiAgICAgICAqL1xuICAgICAgY29uc3Qgb25TdG9wQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgIGNsZWFyQ2FsbGJhY2sob25GaW5pc2hDYWxsYmFjaywgb25GaW5pc2hPbmVUaW1lQ2FsbGJhY2tzKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IG9uRmluaXNoQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgIGNsZWFyQ2FsbGJhY2sob25TdG9wQ2FsbGJhY2ssIG9uU3RvcE9uZVRpbWVDYWxsYmFja3MpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9O1xuICAgICAgLyoqXG4gICAgICAgKiBUaGUgcGxheSBtZXRob2QgcmVzb2x2ZXMgd2hlbiBhbiBhbmltYXRpb25cbiAgICAgICAqIHJ1biBlaXRoZXIgZmluaXNoZXMgb3IgaXMgY2FuY2VsbGVkLlxuICAgICAgICovXG4gICAgICBvbkZpbmlzaChvbkZpbmlzaENhbGxiYWNrLCB7XG4gICAgICAgIG9uZVRpbWVDYWxsYmFjazogdHJ1ZVxuICAgICAgfSk7XG4gICAgICBvblN0b3Aob25TdG9wQ2FsbGJhY2ssIHtcbiAgICAgICAgb25lVGltZUNhbGxiYWNrOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIGNoaWxkQW5pbWF0aW9ucy5mb3JFYWNoKGFuaW1hdGlvbiA9PiB7XG4gICAgICAgIGFuaW1hdGlvbi5wbGF5KCk7XG4gICAgICB9KTtcbiAgICAgIGlmIChzdXBwb3J0c1dlYkFuaW1hdGlvbnMpIHtcbiAgICAgICAgcGxheVdlYkFuaW1hdGlvbnMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBsYXlDU1NBbmltYXRpb25zKCk7XG4gICAgICB9XG4gICAgICBwYXVzZWQgPSBmYWxzZTtcbiAgICB9KTtcbiAgfTtcbiAgLyoqXG4gICAqIFN0b3BzIGFuIGFuaW1hdGlvbiBhbmQgcmVzZXRzIGl0IHN0YXRlIHRvIHRoZVxuICAgKiBiZWdpbm5pbmcuIFRoaXMgZG9lcyBub3QgZmlyZSBhbnkgb25GaW5pc2hcbiAgICogY2FsbGJhY2tzIGJlY2F1c2UgdGhlIGFuaW1hdGlvbiBkaWQgbm90IGZpbmlzaC5cbiAgICogSG93ZXZlciwgc2luY2UgdGhlIGFuaW1hdGlvbiB3YXMgbm90IGRlc3Ryb3llZFxuICAgKiAoaS5lLiB0aGUgYW5pbWF0aW9uIGNvdWxkIHJ1biBhZ2Fpbikgd2UgZG8gbm90XG4gICAqIGNsZWFyIHRoZSBvbkZpbmlzaCBjYWxsYmFja3MuXG4gICAqL1xuICBjb25zdCBzdG9wID0gKCkgPT4ge1xuICAgIGNoaWxkQW5pbWF0aW9ucy5mb3JFYWNoKGFuaW1hdGlvbiA9PiB7XG4gICAgICBhbmltYXRpb24uc3RvcCgpO1xuICAgIH0pO1xuICAgIGlmIChpbml0aWFsaXplZCkge1xuICAgICAgY2xlYW5VcEVsZW1lbnRzKCk7XG4gICAgICBpbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXNldEZsYWdzKCk7XG4gICAgb25TdG9wT25lVGltZUNhbGxiYWNrcy5mb3JFYWNoKG9uU3RvcENhbGxiYWNrID0+IG9uU3RvcENhbGxiYWNrLmMoMCwgYW5pKSk7XG4gICAgb25TdG9wT25lVGltZUNhbGxiYWNrcy5sZW5ndGggPSAwO1xuICB9O1xuICBjb25zdCBmcm9tID0gKHByb3BlcnR5LCB2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IGZpcnN0RnJhbWUgPSBfa2V5ZnJhbWVzWzBdO1xuICAgIGlmIChmaXJzdEZyYW1lICE9PSB1bmRlZmluZWQgJiYgKGZpcnN0RnJhbWUub2Zmc2V0ID09PSB1bmRlZmluZWQgfHwgZmlyc3RGcmFtZS5vZmZzZXQgPT09IDApKSB7XG4gICAgICBmaXJzdEZyYW1lW3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBfa2V5ZnJhbWVzID0gW3tcbiAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICBbcHJvcGVydHldOiB2YWx1ZVxuICAgICAgfSwgLi4uX2tleWZyYW1lc107XG4gICAgfVxuICAgIHJldHVybiBhbmk7XG4gIH07XG4gIGNvbnN0IHRvID0gKHByb3BlcnR5LCB2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IGxhc3RGcmFtZSA9IF9rZXlmcmFtZXNbX2tleWZyYW1lcy5sZW5ndGggLSAxXTtcbiAgICBpZiAobGFzdEZyYW1lICE9PSB1bmRlZmluZWQgJiYgKGxhc3RGcmFtZS5vZmZzZXQgPT09IHVuZGVmaW5lZCB8fCBsYXN0RnJhbWUub2Zmc2V0ID09PSAxKSkge1xuICAgICAgbGFzdEZyYW1lW3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBfa2V5ZnJhbWVzID0gWy4uLl9rZXlmcmFtZXMsIHtcbiAgICAgICAgb2Zmc2V0OiAxLFxuICAgICAgICBbcHJvcGVydHldOiB2YWx1ZVxuICAgICAgfV07XG4gICAgfVxuICAgIHJldHVybiBhbmk7XG4gIH07XG4gIGNvbnN0IGZyb21UbyA9IChwcm9wZXJ0eSwgZnJvbVZhbHVlLCB0b1ZhbHVlKSA9PiB7XG4gICAgcmV0dXJuIGZyb20ocHJvcGVydHksIGZyb21WYWx1ZSkudG8ocHJvcGVydHksIHRvVmFsdWUpO1xuICB9O1xuICByZXR1cm4gYW5pID0ge1xuICAgIHBhcmVudEFuaW1hdGlvbixcbiAgICBlbGVtZW50cyxcbiAgICBjaGlsZEFuaW1hdGlvbnMsXG4gICAgaWQsXG4gICAgYW5pbWF0aW9uRmluaXNoLFxuICAgIGZyb20sXG4gICAgdG8sXG4gICAgZnJvbVRvLFxuICAgIHBhcmVudCxcbiAgICBwbGF5LFxuICAgIHBhdXNlLFxuICAgIHN0b3AsXG4gICAgZGVzdHJveSxcbiAgICBrZXlmcmFtZXMsXG4gICAgYWRkQW5pbWF0aW9uLFxuICAgIGFkZEVsZW1lbnQsXG4gICAgdXBkYXRlLFxuICAgIGZpbGwsXG4gICAgZGlyZWN0aW9uLFxuICAgIGl0ZXJhdGlvbnMsXG4gICAgZHVyYXRpb24sXG4gICAgZWFzaW5nLFxuICAgIGRlbGF5LFxuICAgIGdldFdlYkFuaW1hdGlvbnMsXG4gICAgZ2V0S2V5ZnJhbWVzLFxuICAgIGdldEZpbGwsXG4gICAgZ2V0RGlyZWN0aW9uLFxuICAgIGdldERlbGF5LFxuICAgIGdldEl0ZXJhdGlvbnMsXG4gICAgZ2V0RWFzaW5nLFxuICAgIGdldER1cmF0aW9uLFxuICAgIGFmdGVyQWRkUmVhZCxcbiAgICBhZnRlckFkZFdyaXRlLFxuICAgIGFmdGVyQ2xlYXJTdHlsZXMsXG4gICAgYWZ0ZXJTdHlsZXMsXG4gICAgYWZ0ZXJSZW1vdmVDbGFzcyxcbiAgICBhZnRlckFkZENsYXNzLFxuICAgIGJlZm9yZUFkZFJlYWQsXG4gICAgYmVmb3JlQWRkV3JpdGUsXG4gICAgYmVmb3JlQ2xlYXJTdHlsZXMsXG4gICAgYmVmb3JlU3R5bGVzLFxuICAgIGJlZm9yZVJlbW92ZUNsYXNzLFxuICAgIGJlZm9yZUFkZENsYXNzLFxuICAgIG9uRmluaXNoLFxuICAgIGlzUnVubmluZyxcbiAgICBwcm9ncmVzc1N0YXJ0LFxuICAgIHByb2dyZXNzU3RlcCxcbiAgICBwcm9ncmVzc0VuZFxuICB9O1xufTtcbmV4cG9ydCB7IGNyZWF0ZUFuaW1hdGlvbiBhcyBjIH07IiwiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydCB7IGMgYXMgY29uZmlnLCBwIGFzIHByaW50SW9uV2FybmluZyB9IGZyb20gJy4vaW5kZXg0LmpzJztcbmltcG9ydCB7IHdyaXRlVGFzaywgQnVpbGQgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudCc7XG5pbXBvcnQgeyByIGFzIHJhZiB9IGZyb20gJy4vaGVscGVycy5qcyc7XG5jb25zdCBMSUZFQ1lDTEVfV0lMTF9FTlRFUiA9ICdpb25WaWV3V2lsbEVudGVyJztcbmNvbnN0IExJRkVDWUNMRV9ESURfRU5URVIgPSAnaW9uVmlld0RpZEVudGVyJztcbmNvbnN0IExJRkVDWUNMRV9XSUxMX0xFQVZFID0gJ2lvblZpZXdXaWxsTGVhdmUnO1xuY29uc3QgTElGRUNZQ0xFX0RJRF9MRUFWRSA9ICdpb25WaWV3RGlkTGVhdmUnO1xuY29uc3QgTElGRUNZQ0xFX1dJTExfVU5MT0FEID0gJ2lvblZpZXdXaWxsVW5sb2FkJztcblxuLyoqXG4gKiBNb3ZlcyBmb2N1cyB0byBhIHNwZWNpZmllZCBlbGVtZW50LiBOb3RlIHRoYXQgd2UgZG8gbm90IHJlbW92ZSB0aGUgdGFiaW5kZXhcbiAqIGJlY2F1c2UgdGhhdCBjYW4gcmVzdWx0IGluIGFuIHVuaW50ZW50aW9uYWwgYmx1ci4gTm9uLWZvY3VzYWJsZXMgY2FuJ3QgYmVcbiAqIGZvY3VzZWQsIHNvIHRoZSBib2R5IHdpbGwgZ2V0IGZvY3VzZWQgYWdhaW4uXG4gKi9cbmNvbnN0IG1vdmVGb2N1cyA9IGVsID0+IHtcbiAgZWwudGFiSW5kZXggPSAtMTtcbiAgZWwuZm9jdXMoKTtcbn07XG4vKipcbiAqIEVsZW1lbnRzIHRoYXQgYXJlIGhpZGRlbiB1c2luZyBgZGlzcGxheTogbm9uZWAgc2hvdWxkIG5vdCBiZSBmb2N1c2VkIGV2ZW4gaWZcbiAqIHRoZXkgYXJlIHByZXNlbnQgaW4gdGhlIERPTS5cbiAqL1xuY29uc3QgaXNWaXNpYmxlID0gZWwgPT4ge1xuICByZXR1cm4gZWwub2Zmc2V0UGFyZW50ICE9PSBudWxsO1xufTtcbi8qKlxuICogVGhlIGZvY3VzIGNvbnRyb2xsZXIgYWxsb3dzIHVzIHRvIG1hbmFnZSBmb2N1cyB3aXRoaW4gYSB2aWV3IHNvIGFzc2lzdGl2ZVxuICogdGVjaG5vbG9naWVzIGNhbiBpbmZvcm0gdXNlcnMgb2YgY2hhbmdlcyB0byB0aGUgbmF2aWdhdGlvbiBzdGF0ZS4gVHJhZGl0aW9uYWxcbiAqIG5hdGl2ZSBhcHBzIGhhdmUgYSB3YXkgb2YgaW5mb3JtaW5nIGFzc2lzdGl2ZSB0ZWNobm9sb2d5IGFib3V0IGEgbmF2aWdhdGlvblxuICogc3RhdGUgY2hhbmdlLiBNb2JpbGUgYnJvd3NlcnMgaGF2ZSB0aGlzIHRvbywgYnV0IG9ubHkgd2hlbiBkb2luZyBhIGZ1bGwgcGFnZVxuICogbG9hZC4gSW4gYSBzaW5nbGUgcGFnZSBhcHAgd2UgZG8gbm90IGRvIHRoYXQsIHNvIHdlIG5lZWQgdG8gYnVpbGQgdGhpc1xuICogaW50ZWdyYXRpb24gb3Vyc2VsdmVzLlxuICovXG5jb25zdCBjcmVhdGVGb2N1c0NvbnRyb2xsZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHNhdmVWaWV3Rm9jdXMgPSByZWZlcmVuY2VFbCA9PiB7XG4gICAgY29uc3QgZm9jdXNNYW5hZ2VyRW5hYmxlZCA9IGNvbmZpZy5nZXQoJ2ZvY3VzTWFuYWdlclByaW9yaXR5JywgZmFsc2UpO1xuICAgIC8qKlxuICAgICAqIFdoZW4gZ29pbmcgYmFjayB0byBhIHByZXZpb3VzbHkgdmlzaXRlZCBwYWdlIGZvY3VzIHNob3VsZCB0eXBpY2FsbHkgYmUgbW92ZWRcbiAgICAgKiBiYWNrIHRvIHRoZSBlbGVtZW50IHRoYXQgd2FzIGxhc3QgZm9jdXNlZCB3aGVuIHRoZSB1c2VyIHdhcyBvbiB0aGlzIHZpZXcuXG4gICAgICovXG4gICAgaWYgKGZvY3VzTWFuYWdlckVuYWJsZWQpIHtcbiAgICAgIGNvbnN0IGFjdGl2ZUVsID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICAgIGlmIChhY3RpdmVFbCAhPT0gbnVsbCAmJiAocmVmZXJlbmNlRWwgPT09IG51bGwgfHwgcmVmZXJlbmNlRWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZmVyZW5jZUVsLmNvbnRhaW5zKGFjdGl2ZUVsKSkpIHtcbiAgICAgICAgYWN0aXZlRWwuc2V0QXR0cmlidXRlKExBU1RfRk9DVVMsICd0cnVlJyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBjb25zdCBzZXRWaWV3Rm9jdXMgPSByZWZlcmVuY2VFbCA9PiB7XG4gICAgY29uc3QgZm9jdXNNYW5hZ2VyUHJpb3JpdGllcyA9IGNvbmZpZy5nZXQoJ2ZvY3VzTWFuYWdlclByaW9yaXR5JywgZmFsc2UpO1xuICAgIC8qKlxuICAgICAqIElmIHRoZSBmb2N1c2VkIGVsZW1lbnQgaXMgYSBkZXNjZW5kYW50IG9mIHRoZSByZWZlcmVuY2VFbCB0aGVuIGl0J3MgcG9zc2libGVcbiAgICAgKiB0aGF0IHRoZSBhcHAgZGV2ZWxvcGVyIG1hbnVhbGx5IG1vdmVkIGZvY3VzLCBzbyB3ZSBkbyBub3Qgd2FudCB0byBvdmVycmlkZSB0aGF0LlxuICAgICAqIFRoaXMgY2FuIGhhcHBlbiB3aXRoIGlucHV0cyB0aGUgYXJlIGZvY3VzZWQgd2hlbiBhIHZpZXcgdHJhbnNpdGlvbnMgaW4uXG4gICAgICovXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZm9jdXNNYW5hZ2VyUHJpb3JpdGllcykgJiYgIXJlZmVyZW5jZUVsLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAvKipcbiAgICAgICAqIFdoZW4gZ29pbmcgYmFjayB0byBhIHByZXZpb3VzbHkgdmlzaXRlZCB2aWV3IGZvY3VzIHNob3VsZCBhbHdheXMgYmUgbW92ZWQgYmFja1xuICAgICAgICogdG8gdGhlIGVsZW1lbnQgdGhhdCB0aGUgdXNlciB3YXMgbGFzdCBmb2N1c2VkIG9uIHdoZW4gdGhleSB3ZXJlIG9uIHRoaXMgdmlldy5cbiAgICAgICAqL1xuICAgICAgY29uc3QgbGFzdEZvY3VzID0gcmVmZXJlbmNlRWwucXVlcnlTZWxlY3RvcihgWyR7TEFTVF9GT0NVU31dYCk7XG4gICAgICBpZiAobGFzdEZvY3VzICYmIGlzVmlzaWJsZShsYXN0Rm9jdXMpKSB7XG4gICAgICAgIG1vdmVGb2N1cyhsYXN0Rm9jdXMpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IHByaW9yaXR5IG9mIGZvY3VzTWFuYWdlclByaW9yaXRpZXMpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZvciBlYWNoIHJlY29nbml6ZWQgY2FzZSAoZXhjbHVkaW5nIHRoZSBkZWZhdWx0IGNhc2UpIG1ha2Ugc3VyZSB0byByZXR1cm5cbiAgICAgICAgICogc28gdGhhdCB0aGUgZmFsbGJhY2sgZm9jdXMgYmVoYXZpb3IgZG9lcyBub3QgcnVuLlxuICAgICAgICAgKlxuICAgICAgICAgKiBXZSBpbnRlbnRpb25hbGx5IHF1ZXJ5IGZvciBzcGVjaWZpYyByb2xlcy9zZW1hbnRpYyBlbGVtZW50cyBzbyB0aGF0IHRoZVxuICAgICAgICAgKiB0cmFuc2l0aW9uIG1hbmFnZXIgY2FuIHdvcmsgd2l0aCBib3RoIElvbmljIGFuZCBub24tSW9uaWMgVUkgY29tcG9uZW50cy5cbiAgICAgICAgICpcbiAgICAgICAgICogSWYgbmV3IHNlbGVjdG9ycyBhcmUgYWRkZWQsIGJlIHN1cmUgdG8gcmVtb3ZlIHRoZSBvdXRsaW5lIHJpbmcgYnkgYWRkaW5nXG4gICAgICAgICAqIG5ldyBzZWxlY3RvcnMgdG8gcnVsZSBpbiBjb3JlLnNjc3MuXG4gICAgICAgICAqL1xuICAgICAgICBzd2l0Y2ggKHByaW9yaXR5KSB7XG4gICAgICAgICAgY2FzZSAnY29udGVudCc6XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gcmVmZXJlbmNlRWwucXVlcnlTZWxlY3RvcignbWFpbiwgW3JvbGU9XCJtYWluXCJdJyk7XG4gICAgICAgICAgICBpZiAoY29udGVudCAmJiBpc1Zpc2libGUoY29udGVudCkpIHtcbiAgICAgICAgICAgICAgbW92ZUZvY3VzKGNvbnRlbnQpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdoZWFkaW5nJzpcbiAgICAgICAgICAgIGNvbnN0IGhlYWRpbmdPbmUgPSByZWZlcmVuY2VFbC5xdWVyeVNlbGVjdG9yKCdoMSwgW3JvbGU9XCJoZWFkaW5nXCJdW2FyaWEtbGV2ZWw9XCIxXCJdJyk7XG4gICAgICAgICAgICBpZiAoaGVhZGluZ09uZSAmJiBpc1Zpc2libGUoaGVhZGluZ09uZSkpIHtcbiAgICAgICAgICAgICAgbW92ZUZvY3VzKGhlYWRpbmdPbmUpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdiYW5uZXInOlxuICAgICAgICAgICAgY29uc3QgaGVhZGVyID0gcmVmZXJlbmNlRWwucXVlcnlTZWxlY3RvcignaGVhZGVyLCBbcm9sZT1cImJhbm5lclwiXScpO1xuICAgICAgICAgICAgaWYgKGhlYWRlciAmJiBpc1Zpc2libGUoaGVhZGVyKSkge1xuICAgICAgICAgICAgICBtb3ZlRm9jdXMoaGVhZGVyKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHByaW50SW9uV2FybmluZyhgVW5yZWNvZ25pemVkIGZvY3VzIG1hbmFnZXIgcHJpb3JpdHkgdmFsdWUgJHtwcmlvcml0eX1gKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIElmIHRoZXJlIGlzIG5vdGhpbmcgdG8gZm9jdXMgdGhlbiBmb2N1cyB0aGUgcGFnZSBzbyBmb2N1cyBhdCBsZWFzdCBtb3ZlcyB0b1xuICAgICAgICogdGhlIGNvcnJlY3Qgdmlldy4gVGhlIGJyb3dzZXIgd2lsbCB0aGVuIGRldGVybWluZSB3aGVyZSB3aXRoaW4gdGhlIHBhZ2UgdG9cbiAgICAgICAqIG1vdmUgZm9jdXMgdG8uXG4gICAgICAgKi9cbiAgICAgIG1vdmVGb2N1cyhyZWZlcmVuY2VFbCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4ge1xuICAgIHNhdmVWaWV3Rm9jdXMsXG4gICAgc2V0Vmlld0ZvY3VzXG4gIH07XG59O1xuY29uc3QgTEFTVF9GT0NVUyA9ICdpb24tbGFzdC1mb2N1cyc7XG5jb25zdCBpb3NUcmFuc2l0aW9uQW5pbWF0aW9uID0gKCkgPT4gaW1wb3J0KCcuL2lvcy50cmFuc2l0aW9uLmpzJyk7XG5jb25zdCBtZFRyYW5zaXRpb25BbmltYXRpb24gPSAoKSA9PiBpbXBvcnQoJy4vbWQudHJhbnNpdGlvbi5qcycpO1xuY29uc3QgZm9jdXNDb250cm9sbGVyID0gY3JlYXRlRm9jdXNDb250cm9sbGVyKCk7XG4vLyBUT0RPKEZXLTI4MzIpOiB0eXBlc1xuY29uc3QgdHJhbnNpdGlvbiA9IG9wdHMgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHdyaXRlVGFzaygoKSA9PiB7XG4gICAgICBiZWZvcmVUcmFuc2l0aW9uKG9wdHMpO1xuICAgICAgcnVuVHJhbnNpdGlvbihvcHRzKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgcmVzdWx0LmFuaW1hdGlvbi5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgYWZ0ZXJUcmFuc2l0aW9uKG9wdHMpO1xuICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgIGFmdGVyVHJhbnNpdGlvbihvcHRzKTtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn07XG5jb25zdCBiZWZvcmVUcmFuc2l0aW9uID0gb3B0cyA9PiB7XG4gIGNvbnN0IGVudGVyaW5nRWwgPSBvcHRzLmVudGVyaW5nRWw7XG4gIGNvbnN0IGxlYXZpbmdFbCA9IG9wdHMubGVhdmluZ0VsO1xuICBmb2N1c0NvbnRyb2xsZXIuc2F2ZVZpZXdGb2N1cyhsZWF2aW5nRWwpO1xuICBzZXRaSW5kZXgoZW50ZXJpbmdFbCwgbGVhdmluZ0VsLCBvcHRzLmRpcmVjdGlvbik7XG4gIGlmIChvcHRzLnNob3dHb0JhY2spIHtcbiAgICBlbnRlcmluZ0VsLmNsYXNzTGlzdC5hZGQoJ2Nhbi1nby1iYWNrJyk7XG4gIH0gZWxzZSB7XG4gICAgZW50ZXJpbmdFbC5jbGFzc0xpc3QucmVtb3ZlKCdjYW4tZ28tYmFjaycpO1xuICB9XG4gIHNldFBhZ2VIaWRkZW4oZW50ZXJpbmdFbCwgZmFsc2UpO1xuICAvKipcbiAgICogV2hlbiB0cmFuc2l0aW9uaW5nLCB0aGUgcGFnZSBzaG91bGQgbm90XG4gICAqIHJlc3BvbmQgdG8gY2xpY2sgZXZlbnRzLiBUaGlzIHJlc29sdmVzIHNtYWxsXG4gICAqIGlzc3VlcyBsaWtlIHVzZXJzIGRvdWJsZSB0YXBwaW5nIHRoZSBpb24tYmFjay1idXR0b24uXG4gICAqIFRoZXNlIHBvaW50ZXIgZXZlbnRzIGFyZSByZW1vdmVkIGluIGBhZnRlclRyYW5zaXRpb25gLlxuICAgKi9cbiAgZW50ZXJpbmdFbC5zdHlsZS5zZXRQcm9wZXJ0eSgncG9pbnRlci1ldmVudHMnLCAnbm9uZScpO1xuICBpZiAobGVhdmluZ0VsKSB7XG4gICAgc2V0UGFnZUhpZGRlbihsZWF2aW5nRWwsIGZhbHNlKTtcbiAgICBsZWF2aW5nRWwuc3R5bGUuc2V0UHJvcGVydHkoJ3BvaW50ZXItZXZlbnRzJywgJ25vbmUnKTtcbiAgfVxufTtcbmNvbnN0IHJ1blRyYW5zaXRpb24gPSBhc3luYyBvcHRzID0+IHtcbiAgY29uc3QgYW5pbWF0aW9uQnVpbGRlciA9IGF3YWl0IGdldEFuaW1hdGlvbkJ1aWxkZXIob3B0cyk7XG4gIGNvbnN0IGFuaSA9IGFuaW1hdGlvbkJ1aWxkZXIgJiYgQnVpbGQuaXNCcm93c2VyID8gYW5pbWF0aW9uKGFuaW1hdGlvbkJ1aWxkZXIsIG9wdHMpIDogbm9BbmltYXRpb24ob3B0cyk7IC8vIGZhc3QgcGF0aCBmb3Igbm8gYW5pbWF0aW9uXG4gIHJldHVybiBhbmk7XG59O1xuY29uc3QgYWZ0ZXJUcmFuc2l0aW9uID0gb3B0cyA9PiB7XG4gIGNvbnN0IGVudGVyaW5nRWwgPSBvcHRzLmVudGVyaW5nRWw7XG4gIGNvbnN0IGxlYXZpbmdFbCA9IG9wdHMubGVhdmluZ0VsO1xuICBlbnRlcmluZ0VsLmNsYXNzTGlzdC5yZW1vdmUoJ2lvbi1wYWdlLWludmlzaWJsZScpO1xuICBlbnRlcmluZ0VsLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwb2ludGVyLWV2ZW50cycpO1xuICBpZiAobGVhdmluZ0VsICE9PSB1bmRlZmluZWQpIHtcbiAgICBsZWF2aW5nRWwuY2xhc3NMaXN0LnJlbW92ZSgnaW9uLXBhZ2UtaW52aXNpYmxlJyk7XG4gICAgbGVhdmluZ0VsLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwb2ludGVyLWV2ZW50cycpO1xuICB9XG4gIGZvY3VzQ29udHJvbGxlci5zZXRWaWV3Rm9jdXMoZW50ZXJpbmdFbCk7XG59O1xuY29uc3QgZ2V0QW5pbWF0aW9uQnVpbGRlciA9IGFzeW5jIG9wdHMgPT4ge1xuICBpZiAoIW9wdHMubGVhdmluZ0VsIHx8ICFvcHRzLmFuaW1hdGVkIHx8IG9wdHMuZHVyYXRpb24gPT09IDApIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIGlmIChvcHRzLmFuaW1hdGlvbkJ1aWxkZXIpIHtcbiAgICByZXR1cm4gb3B0cy5hbmltYXRpb25CdWlsZGVyO1xuICB9XG4gIGNvbnN0IGdldEFuaW1hdGlvbiA9IG9wdHMubW9kZSA9PT0gJ2lvcycgPyAoYXdhaXQgaW9zVHJhbnNpdGlvbkFuaW1hdGlvbigpKS5pb3NUcmFuc2l0aW9uQW5pbWF0aW9uIDogKGF3YWl0IG1kVHJhbnNpdGlvbkFuaW1hdGlvbigpKS5tZFRyYW5zaXRpb25BbmltYXRpb247XG4gIHJldHVybiBnZXRBbmltYXRpb247XG59O1xuY29uc3QgYW5pbWF0aW9uID0gYXN5bmMgKGFuaW1hdGlvbkJ1aWxkZXIsIG9wdHMpID0+IHtcbiAgYXdhaXQgd2FpdEZvclJlYWR5KG9wdHMsIHRydWUpO1xuICBjb25zdCB0cmFucyA9IGFuaW1hdGlvbkJ1aWxkZXIob3B0cy5iYXNlRWwsIG9wdHMpO1xuICBmaXJlV2lsbEV2ZW50cyhvcHRzLmVudGVyaW5nRWwsIG9wdHMubGVhdmluZ0VsKTtcbiAgY29uc3QgZGlkQ29tcGxldGUgPSBhd2FpdCBwbGF5VHJhbnNpdGlvbih0cmFucywgb3B0cyk7XG4gIGlmIChvcHRzLnByb2dyZXNzQ2FsbGJhY2spIHtcbiAgICBvcHRzLnByb2dyZXNzQ2FsbGJhY2sodW5kZWZpbmVkKTtcbiAgfVxuICBpZiAoZGlkQ29tcGxldGUpIHtcbiAgICBmaXJlRGlkRXZlbnRzKG9wdHMuZW50ZXJpbmdFbCwgb3B0cy5sZWF2aW5nRWwpO1xuICB9XG4gIHJldHVybiB7XG4gICAgaGFzQ29tcGxldGVkOiBkaWRDb21wbGV0ZSxcbiAgICBhbmltYXRpb246IHRyYW5zXG4gIH07XG59O1xuY29uc3Qgbm9BbmltYXRpb24gPSBhc3luYyBvcHRzID0+IHtcbiAgY29uc3QgZW50ZXJpbmdFbCA9IG9wdHMuZW50ZXJpbmdFbDtcbiAgY29uc3QgbGVhdmluZ0VsID0gb3B0cy5sZWF2aW5nRWw7XG4gIGNvbnN0IGZvY3VzTWFuYWdlckVuYWJsZWQgPSBjb25maWcuZ2V0KCdmb2N1c01hbmFnZXJQcmlvcml0eScsIGZhbHNlKTtcbiAgLyoqXG4gICAqIElmIHRoZSBmb2N1cyBtYW5hZ2VyIGlzIGVuYWJsZWQgdGhlbiB3ZSBuZWVkIHRvIHdhaXQgZm9yIElvbmljIGNvbXBvbmVudHMgdG8gYmVcbiAgICogcmVuZGVyZWQgb3RoZXJ3aXNlIHRoZSBjb21wb25lbnQgdG8gZm9jdXMgbWF5IG5vdCBiZSBmb2N1c2VkIGJlY2F1c2UgaXQgaXMgaGlkZGVuLlxuICAgKi9cbiAgYXdhaXQgd2FpdEZvclJlYWR5KG9wdHMsIGZvY3VzTWFuYWdlckVuYWJsZWQpO1xuICBmaXJlV2lsbEV2ZW50cyhlbnRlcmluZ0VsLCBsZWF2aW5nRWwpO1xuICBmaXJlRGlkRXZlbnRzKGVudGVyaW5nRWwsIGxlYXZpbmdFbCk7XG4gIHJldHVybiB7XG4gICAgaGFzQ29tcGxldGVkOiB0cnVlXG4gIH07XG59O1xuY29uc3Qgd2FpdEZvclJlYWR5ID0gYXN5bmMgKG9wdHMsIGRlZmF1bHREZWVwKSA9PiB7XG4gIGNvbnN0IGRlZXAgPSBvcHRzLmRlZXBXYWl0ICE9PSB1bmRlZmluZWQgPyBvcHRzLmRlZXBXYWl0IDogZGVmYXVsdERlZXA7XG4gIGlmIChkZWVwKSB7XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW2RlZXBSZWFkeShvcHRzLmVudGVyaW5nRWwpLCBkZWVwUmVhZHkob3B0cy5sZWF2aW5nRWwpXSk7XG4gIH1cbiAgYXdhaXQgbm90aWZ5Vmlld1JlYWR5KG9wdHMudmlld0lzUmVhZHksIG9wdHMuZW50ZXJpbmdFbCk7XG59O1xuY29uc3Qgbm90aWZ5Vmlld1JlYWR5ID0gYXN5bmMgKHZpZXdJc1JlYWR5LCBlbnRlcmluZ0VsKSA9PiB7XG4gIGlmICh2aWV3SXNSZWFkeSkge1xuICAgIGF3YWl0IHZpZXdJc1JlYWR5KGVudGVyaW5nRWwpO1xuICB9XG59O1xuY29uc3QgcGxheVRyYW5zaXRpb24gPSAodHJhbnMsIG9wdHMpID0+IHtcbiAgY29uc3QgcHJvZ3Jlc3NDYWxsYmFjayA9IG9wdHMucHJvZ3Jlc3NDYWxsYmFjaztcbiAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIHRyYW5zLm9uRmluaXNoKGN1cnJlbnRTdGVwID0+IHJlc29sdmUoY3VycmVudFN0ZXAgPT09IDEpKTtcbiAgfSk7XG4gIC8vIGNvb2wsIGxldCdzIGRvIHRoaXMsIHN0YXJ0IHRoZSB0cmFuc2l0aW9uXG4gIGlmIChwcm9ncmVzc0NhbGxiYWNrKSB7XG4gICAgLy8gdGhpcyBpcyBhIHN3aXBlIHRvIGdvIGJhY2ssIGp1c3QgZ2V0IHRoZSB0cmFuc2l0aW9uIHByb2dyZXNzIHJlYWR5XG4gICAgLy8ga2ljayBvZmYgdGhlIHN3aXBlIGFuaW1hdGlvbiBzdGFydFxuICAgIHRyYW5zLnByb2dyZXNzU3RhcnQodHJ1ZSk7XG4gICAgcHJvZ3Jlc3NDYWxsYmFjayh0cmFucyk7XG4gIH0gZWxzZSB7XG4gICAgLy8gb25seSB0aGUgdG9wIGxldmVsIHRyYW5zaXRpb24gc2hvdWxkIGFjdHVhbGx5IHN0YXJ0IFwicGxheVwiXG4gICAgLy8ga2ljayBpdCBvZmYgYW5kIGxldCBpdCBwbGF5IHRocm91Z2hcbiAgICAvLyAqKioqKioqKiBET00gV1JJVEUgKioqKioqKioqKioqKioqKlxuICAgIHRyYW5zLnBsYXkoKTtcbiAgfVxuICAvLyBjcmVhdGUgYSBjYWxsYmFjayBmb3Igd2hlbiB0aGUgYW5pbWF0aW9uIGlzIGRvbmVcbiAgcmV0dXJuIHByb21pc2U7XG59O1xuY29uc3QgZmlyZVdpbGxFdmVudHMgPSAoZW50ZXJpbmdFbCwgbGVhdmluZ0VsKSA9PiB7XG4gIGxpZmVjeWNsZShsZWF2aW5nRWwsIExJRkVDWUNMRV9XSUxMX0xFQVZFKTtcbiAgbGlmZWN5Y2xlKGVudGVyaW5nRWwsIExJRkVDWUNMRV9XSUxMX0VOVEVSKTtcbn07XG5jb25zdCBmaXJlRGlkRXZlbnRzID0gKGVudGVyaW5nRWwsIGxlYXZpbmdFbCkgPT4ge1xuICBsaWZlY3ljbGUoZW50ZXJpbmdFbCwgTElGRUNZQ0xFX0RJRF9FTlRFUik7XG4gIGxpZmVjeWNsZShsZWF2aW5nRWwsIExJRkVDWUNMRV9ESURfTEVBVkUpO1xufTtcbmNvbnN0IGxpZmVjeWNsZSA9IChlbCwgZXZlbnROYW1lKSA9PiB7XG4gIGlmIChlbCkge1xuICAgIGNvbnN0IGV2ID0gbmV3IEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwge1xuICAgICAgYnViYmxlczogZmFsc2UsXG4gICAgICBjYW5jZWxhYmxlOiBmYWxzZVxuICAgIH0pO1xuICAgIGVsLmRpc3BhdGNoRXZlbnQoZXYpO1xuICB9XG59O1xuLyoqXG4gKiBXYWl0IHR3byByZXF1ZXN0IGFuaW1hdGlvbiBmcmFtZSBsb29wcy5cbiAqIFRoaXMgYWxsb3dzIHRoZSBmcmFtZXdvcmsgaW1wbGVtZW50YXRpb25zIGVub3VnaCB0aW1lIHRvIG1vdW50XG4gKiB0aGUgdXNlci1kZWZpbmVkIGNvbnRlbnRzLiBUaGlzIGlzIG9mdGVuIG5lZWRlZCB3aGVuIHVzaW5nIGlubGluZVxuICogbW9kYWxzIGFuZCBwb3BvdmVycyB0aGF0IGFjY2VwdCB1c2VyIGNvbXBvbmVudHMuIEZvciBwb3BvdmVyLFxuICogdGhlIGNvbnRlbnRzIG11c3QgYmUgbW91bnRlZCBmb3IgdGhlIHBvcG92ZXIgdG8gYmUgc2l6ZWQgY29ycmVjdGx5LlxuICogRm9yIG1vZGFscywgdGhlIGNvbnRlbnRzIG11c3QgYmUgbW91bnRlZCBmb3IgaU9TIHRvIHJ1biB0aGVcbiAqIHRyYW5zaXRpb24gY29ycmVjdGx5LlxuICpcbiAqIE9uIEFuZ3VsYXIgYW5kIFJlYWN0LCBhIHNpbmdsZSByYWYgaXMgZW5vdWdoIHRpbWUsIGJ1dCBmb3IgVnVlXG4gKiB3ZSBuZWVkIHRvIHdhaXQgdHdvIHJhZnMuIEFzIGEgcmVzdWx0IHdlIGFyZSB1c2luZyB0d28gcmFmcyBmb3JcbiAqIGFsbCBmcmFtZXdvcmtzIHRvIGVuc3VyZSBjb250ZW50cyBhcmUgbW91bnRlZC5cbiAqL1xuY29uc3Qgd2FpdEZvck1vdW50ID0gKCkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiByYWYoKCkgPT4gcmFmKCgpID0+IHJlc29sdmUoKSkpKTtcbn07XG5jb25zdCBkZWVwUmVhZHkgPSBhc3luYyBlbCA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgaWYgKGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudC5jb21wb25lbnRPblJlYWR5ICE9IG51bGwpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjdXN0b20tcnVsZXMvbm8tY29tcG9uZW50LW9uLXJlYWR5LW1ldGhvZFxuICAgICAgY29uc3Qgc3RlbmNpbEVsID0gYXdhaXQgZWxlbWVudC5jb21wb25lbnRPblJlYWR5KCk7XG4gICAgICBpZiAoc3RlbmNpbEVsICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBDdXN0b20gZWxlbWVudHMgaW4gU3RlbmNpbCB3aWxsIGhhdmUgX19yZWdpc3Rlckhvc3QuXG4gICAgICAgKi9cbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQuX19yZWdpc3Rlckhvc3QgIT0gbnVsbCkge1xuICAgICAgLyoqXG4gICAgICAgKiBOb24tbGF6eSBsb2FkZWQgY3VzdG9tIGVsZW1lbnRzIG5lZWQgdG8gd2FpdFxuICAgICAgICogb25lIGZyYW1lIGZvciBjb21wb25lbnQgdG8gYmUgbG9hZGVkLlxuICAgICAgICovXG4gICAgICBjb25zdCB3YWl0Rm9yQ3VzdG9tRWxlbWVudCA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gcmFmKHJlc29sdmUpKTtcbiAgICAgIGF3YWl0IHdhaXRGb3JDdXN0b21FbGVtZW50O1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhd2FpdCBQcm9taXNlLmFsbChBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGRyZW4pLm1hcChkZWVwUmVhZHkpKTtcbiAgfVxufTtcbmNvbnN0IHNldFBhZ2VIaWRkZW4gPSAoZWwsIGhpZGRlbikgPT4ge1xuICBpZiAoaGlkZGVuKSB7XG4gICAgZWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgZWwuY2xhc3NMaXN0LmFkZCgnaW9uLXBhZ2UtaGlkZGVuJyk7XG4gIH0gZWxzZSB7XG4gICAgZWwuaGlkZGVuID0gZmFsc2U7XG4gICAgZWwucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2lvbi1wYWdlLWhpZGRlbicpO1xuICB9XG59O1xuY29uc3Qgc2V0WkluZGV4ID0gKGVudGVyaW5nRWwsIGxlYXZpbmdFbCwgZGlyZWN0aW9uKSA9PiB7XG4gIGlmIChlbnRlcmluZ0VsICE9PSB1bmRlZmluZWQpIHtcbiAgICBlbnRlcmluZ0VsLnN0eWxlLnpJbmRleCA9IGRpcmVjdGlvbiA9PT0gJ2JhY2snID8gJzk5JyA6ICcxMDEnO1xuICB9XG4gIGlmIChsZWF2aW5nRWwgIT09IHVuZGVmaW5lZCkge1xuICAgIGxlYXZpbmdFbC5zdHlsZS56SW5kZXggPSAnMTAwJztcbiAgfVxufTtcbmNvbnN0IGdldElvblBhZ2VFbGVtZW50ID0gZWxlbWVudCA9PiB7XG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnaW9uLXBhZ2UnKSkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG4gIGNvbnN0IGlvblBhZ2UgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJzpzY29wZSA+IC5pb24tcGFnZSwgOnNjb3BlID4gaW9uLW5hdiwgOnNjb3BlID4gaW9uLXRhYnMnKTtcbiAgaWYgKGlvblBhZ2UpIHtcbiAgICByZXR1cm4gaW9uUGFnZTtcbiAgfVxuICAvLyBpZGssIHJldHVybiB0aGUgb3JpZ2luYWwgZWxlbWVudCBzbyBhdCBsZWFzdCBzb21ldGhpbmcgYW5pbWF0ZXMgYW5kIHdlIGRvbid0IGhhdmUgYSBudWxsIHBvaW50ZXJcbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuZXhwb3J0IHsgTElGRUNZQ0xFX1dJTExfRU5URVIgYXMgTCwgTElGRUNZQ0xFX0RJRF9FTlRFUiBhcyBhLCBMSUZFQ1lDTEVfV0lMTF9MRUFWRSBhcyBiLCBMSUZFQ1lDTEVfRElEX0xFQVZFIGFzIGMsIExJRkVDWUNMRV9XSUxMX1VOTE9BRCBhcyBkLCBkZWVwUmVhZHkgYXMgZSwgZ2V0SW9uUGFnZUVsZW1lbnQgYXMgZywgbGlmZWN5Y2xlIGFzIGwsIHNldFBhZ2VIaWRkZW4gYXMgcywgdHJhbnNpdGlvbiBhcyB0LCB3YWl0Rm9yTW91bnQgYXMgdyB9OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQSxJQUFJO0FBQ0osSUFBTSxxQkFBcUIsUUFBTTtBQUMvQixNQUFJLG9CQUFvQixRQUFXO0FBQ2pDLFVBQU0scUJBQXFCLEdBQUcsTUFBTSxrQkFBa0I7QUFDdEQsVUFBTSx1QkFBdUIsR0FBRyxNQUFNLHdCQUF3QjtBQUM5RCxzQkFBa0IsQ0FBQyxzQkFBc0IsdUJBQXVCLGFBQWE7QUFBQSxFQUMvRTtBQUNBLFNBQU87QUFDVDtBQUNBLElBQU0sbUJBQW1CLENBQUMsU0FBUyxjQUFjLFVBQVU7QUFDekQsUUFBTSxTQUFTLGFBQWEsV0FBVyxXQUFXLElBQUksbUJBQW1CLE9BQU8sSUFBSTtBQUNwRixVQUFRLE1BQU0sWUFBWSxTQUFTLGNBQWMsS0FBSztBQUN4RDtBQUNBLElBQU0sa0JBQWtCLENBQUMsVUFBVSxDQUFDLEdBQUcsY0FBYztBQUNuRCxNQUFJLGNBQWMsUUFBVztBQUMzQixVQUFNLG9CQUFvQixNQUFNLFFBQVEsU0FBUyxJQUFJLFlBQVksQ0FBQyxTQUFTO0FBQzNFLFdBQU8sQ0FBQyxHQUFHLFNBQVMsR0FBRyxpQkFBaUI7QUFBQSxFQUMxQztBQUNBLFNBQU87QUFDVDtBQUNBLElBQU0sa0JBQWtCLGlCQUFlO0FBQ3JDLE1BQUk7QUFDSixNQUFJO0FBQ0osTUFBSTtBQUNKLE1BQUk7QUFDSixNQUFJO0FBQ0osTUFBSTtBQUNKLE1BQUksYUFBYSxDQUFDO0FBQ2xCLE1BQUksbUJBQW1CLENBQUM7QUFDeEIsTUFBSSxzQkFBc0IsQ0FBQztBQUMzQixNQUFJLGNBQWM7QUFDbEIsTUFBSTtBQUNKLE1BQUksb0JBQW9CLENBQUM7QUFDekIsTUFBSSxrQkFBa0IsQ0FBQztBQUN2QixNQUFJLHFCQUFxQixDQUFDO0FBQzFCLE1BQUksbUJBQW1CLENBQUM7QUFDeEIsTUFBSSx1QkFBdUI7QUFDM0Is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SSxRQUFRO0FBQ1YsT0FBRyxhQUFhLGVBQWUsTUFBTTtBQUNyQyxPQUFHLFVBQVUsSUFBSSxpQkFBaUI7QUFBQSxFQUNwQyxPQUFPO0FBQ0wsT0FBRyxTQUFTO0FBQ1osT0FBRyxnQkFBZ0IsYUFBYTtBQUNoQyxPQUFHLFVBQVUsT0FBTyxpQkFBaUI7QUFBQSxFQUN2QztBQUNGO0FBQ0EsSUFBTSxZQUFZLENBQUMsWUFBWSxXQUFXLGNBQWM7QUFDdEQsTUFBSSxlQUFlLFFBQVc7QUFDNUIsZUFBVyxNQUFNLFNBQVMsY0FBYyxTQUFTLE9BQU87QUFBQSxFQUMxRDtBQUNBLE1BQUksY0FBYyxRQUFXO0FBQzNCLGNBQVUsTUFBTSxTQUFTO0FBQUEsRUFDM0I7QUFDRjtBQUNBLElBQU0sb0JBQW9CLGFBQVc7QUFDbkMsTUFBSSxRQUFRLFVBQVUsU0FBUyxVQUFVLEdBQUc7QUFDMUMsV0FBTztBQUFBLEVBQ1Q7QUFDQSxRQUFNLFVBQVUsUUFBUSxjQUFjLHlEQUF5RDtBQUMvRixNQUFJLFNBQVM7QUFDWCxXQUFPO0FBQUEsRUFDVDtBQUVBLFNBQU87QUFDVDsiLCJuYW1lcyI6WyJhbmltYXRpb24iXSwieF9nb29nbGVfaWdub3JlTGlzdCI6WzAsMV19
