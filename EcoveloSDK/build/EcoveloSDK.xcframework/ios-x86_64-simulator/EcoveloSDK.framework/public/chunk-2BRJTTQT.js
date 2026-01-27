import {
  win
} from "./chunk-YSZWGYJT.js";
import {
  printIonError
} from "./chunk-BFPTXCSH.js";

// node_modules/@ionic/core/dist/esm/animation-BvhAtgca.js
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
      webAnimations.forEach((animation) => {
        animation.cancel();
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
  const parent = (animation) => {
    parentAnimation = animation;
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
        for (const animation of animationToAdd) {
          animation.parent(ani);
          childAnimations.push(animation);
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
      getWebAnimations().forEach((animation) => {
        const keyframeEffect = animation.effect;
        if (keyframeEffect.setKeyframes) {
          keyframeEffect.setKeyframes(keyframeValues);
        } else {
          const newEffect = new KeyframeEffect(keyframeEffect.target, keyframeValues, keyframeEffect.getTiming());
          animation.effect = newEffect;
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
      const animation = element.animate(_keyframes, {
        id,
        delay: getDelay(),
        duration: getDuration(),
        easing: getEasing(),
        iterations: getIterations(),
        fill: getFill(),
        direction: getDirection()
      });
      animation.pause();
      webAnimations.push(animation);
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
      webAnimations.forEach((animation) => {
        animation.currentTime = animation.effect.getComputedTiming().delay + getDuration() * step;
        animation.pause();
      });
    }
  };
  const updateWebAnimation = (step) => {
    webAnimations.forEach((animation) => {
      animation.effect.updateTiming({
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
      childAnimations.forEach((animation) => {
        animation.update(deep, toggleAnimationName, step);
      });
    }
    if (supportsWebAnimations) {
      updateWebAnimation(step);
    }
    return ani;
  };
  const progressStart = (forceLinearEasing = false, step) => {
    childAnimations.forEach((animation) => {
      animation.progressStart(forceLinearEasing, step);
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
    childAnimations.forEach((animation) => {
      animation.progressStep(step);
    });
    setAnimationStep(step);
    return ani;
  };
  const progressEnd = (playTo, step, dur) => {
    shouldForceLinearEasing = false;
    childAnimations.forEach((animation) => {
      animation.progressEnd(playTo, step, dur);
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
        webAnimations.forEach((animation) => {
          animation.pause();
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
    childAnimations.forEach((animation) => {
      animation.pause();
    });
    pauseAnimation();
    return ani;
  };
  const playCSSAnimations = () => {
    animationFinish();
  };
  const playWebAnimations = () => {
    webAnimations.forEach((animation) => {
      animation.play();
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
      childAnimations.forEach((animation) => {
        animation.play();
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
    childAnimations.forEach((animation) => {
      animation.stop();
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

export {
  createAnimation
};
/*! Bundled license information:

@ionic/core/dist/esm/animation-BvhAtgca.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9hbmltYXRpb24tQnZoQXRnY2EuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydCB7IGogYXMgcHJpbnRJb25FcnJvciB9IGZyb20gJy4vaW5kZXgtNER4WTZfZ0cuanMnO1xuaW1wb3J0IHsgdyBhcyB3aW4gfSBmcm9tICcuL2luZGV4LVpqUDRDamVaLmpzJztcbmxldCBhbmltYXRpb25QcmVmaXg7XG5jb25zdCBnZXRBbmltYXRpb25QcmVmaXggPSBlbCA9PiB7XG4gIGlmIChhbmltYXRpb25QcmVmaXggPT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IHN1cHBvcnRzVW5wcmVmaXhlZCA9IGVsLnN0eWxlLmFuaW1hdGlvbk5hbWUgIT09IHVuZGVmaW5lZDtcbiAgICBjb25zdCBzdXBwb3J0c1dlYmtpdFByZWZpeCA9IGVsLnN0eWxlLndlYmtpdEFuaW1hdGlvbk5hbWUgIT09IHVuZGVmaW5lZDtcbiAgICBhbmltYXRpb25QcmVmaXggPSAhc3VwcG9ydHNVbnByZWZpeGVkICYmIHN1cHBvcnRzV2Via2l0UHJlZml4ID8gJy13ZWJraXQtJyA6ICcnO1xuICB9XG4gIHJldHVybiBhbmltYXRpb25QcmVmaXg7XG59O1xuY29uc3Qgc2V0U3R5bGVQcm9wZXJ0eSA9IChlbGVtZW50LCBwcm9wZXJ0eU5hbWUsIHZhbHVlKSA9PiB7XG4gIGNvbnN0IHByZWZpeCA9IHByb3BlcnR5TmFtZS5zdGFydHNXaXRoKCdhbmltYXRpb24nKSA/IGdldEFuaW1hdGlvblByZWZpeChlbGVtZW50KSA6ICcnO1xuICBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KHByZWZpeCArIHByb3BlcnR5TmFtZSwgdmFsdWUpO1xufTtcbmNvbnN0IGFkZENsYXNzVG9BcnJheSA9IChjbGFzc2VzID0gW10sIGNsYXNzTmFtZSkgPT4ge1xuICBpZiAoY2xhc3NOYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBjbGFzc05hbWVUb0FwcGVuZCA9IEFycmF5LmlzQXJyYXkoY2xhc3NOYW1lKSA/IGNsYXNzTmFtZSA6IFtjbGFzc05hbWVdO1xuICAgIHJldHVybiBbLi4uY2xhc3NlcywgLi4uY2xhc3NOYW1lVG9BcHBlbmRdO1xuICB9XG4gIHJldHVybiBjbGFzc2VzO1xufTtcbmNvbnN0IGNyZWF0ZUFuaW1hdGlvbiA9IGFuaW1hdGlvbklkID0+IHtcbiAgbGV0IF9kZWxheTtcbiAgbGV0IF9kdXJhdGlvbjtcbiAgbGV0IF9lYXNpbmc7XG4gIGxldCBfaXRlcmF0aW9ucztcbiAgbGV0IF9maWxsO1xuICBsZXQgX2RpcmVjdGlvbjtcbiAgbGV0IF9rZXlmcmFtZXMgPSBbXTtcbiAgbGV0IGJlZm9yZUFkZENsYXNzZXMgPSBbXTtcbiAgbGV0IGJlZm9yZVJlbW92ZUNsYXNzZXMgPSBbXTtcbiAgbGV0IGluaXRpYWxpemVkID0gZmFsc2U7XG4gIGxldCBwYXJlbnRBbmltYXRpb247XG4gIGxldCBiZWZvcmVTdHlsZXNWYWx1ZSA9IHt9O1xuICBsZXQgYWZ0ZXJBZGRDbGFzc2VzID0gW107XG4gIGxldCBhZnRlclJlbW92ZUNsYXNzZXMgPSBbXTtcbiAgbGV0IGFmdGVyU3R5bGVzVmFsdWUgPSB7fTtcbiAgbGV0IG51bUFuaW1hdGlvbnNSdW5uaW5nID0gMDtcbiAgbGV0IHNob3VsZEZvcmNlTGluZWFyRWFzaW5nID0gZmFsc2U7XG4gIGxldCBzaG91bGRGb3JjZVN5bmNQbGF5YmFjayA9IGZhbHNlO1xuICBsZXQgZm9yY2VEaXJlY3Rpb25WYWx1ZTtcbiAgbGV0IGZvcmNlRHVyYXRpb25WYWx1ZTtcbiAgbGV0IGZvcmNlRGVsYXlWYWx1ZTtcbiAgbGV0IHdpbGxDb21wbGV0ZSA9IHRydWU7XG4gIGxldCBmaW5pc2hlZCA9IGZhbHNlO1xuICBsZXQgc2hvdWxkQ2FsY3VsYXRlTnVtQW5pbWF0aW9ucyA9IHRydWU7XG4gIGxldCBhbmk7XG4gIGxldCBwYXVzZWQgPSBmYWxzZTtcbiAgY29uc3QgaWQgPSBhbmltYXRpb25JZDtcbiAgY29uc3Qgb25GaW5pc2hDYWxsYmFja3MgPSBbXTtcbiAgY29uc3Qgb25GaW5pc2hPbmVUaW1lQ2FsbGJhY2tzID0gW107XG4gIGNvbnN0IG9uU3RvcE9uZVRpbWVDYWxsYmFja3MgPSBbXTtcbiAgY29uc3QgZWxlbWVudHMgPSBbXTtcbiAgY29uc3QgY2hpbGRBbmltYXRpb25zID0gW107XG4gIGNvbnN0IHN0eWxlc2hlZXRzID0gW107XG4gIGNvbnN0IF9iZWZvcmVBZGRSZWFkRnVuY3Rpb25zID0gW107XG4gIGNvbnN0IF9iZWZvcmVBZGRXcml0ZUZ1bmN0aW9ucyA9IFtdO1xuICBjb25zdCBfYWZ0ZXJBZGRSZWFkRnVuY3Rpb25zID0gW107XG4gIGNvbnN0IF9hZnRlckFkZFdyaXRlRnVuY3Rpb25zID0gW107XG4gIGNvbnN0IHdlYkFuaW1hdGlvbnMgPSBbXTtcbiAgY29uc3Qgc3VwcG9ydHNBbmltYXRpb25FZmZlY3QgPSB0eXBlb2YgQW5pbWF0aW9uRWZmZWN0ID09PSAnZnVuY3Rpb24nIHx8IHdpbiAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB3aW4uQW5pbWF0aW9uRWZmZWN0ID09PSAnZnVuY3Rpb24nO1xuICAvKipcbiAgICogVGhpcyBpcyBhIGZlYXR1cmUgZGV0ZWN0aW9uIGZvciBXZWIgQW5pbWF0aW9ucy5cbiAgICpcbiAgICogQ2VydGFpbiBlbnZpcm9ubWVudHMgc3VjaCBhcyBlbXVsYXRlZCBicm93c2VyIGVudmlyb25tZW50cyBmb3IgdGVzdGluZyxcbiAgICogZG8gbm90IHN1cHBvcnQgV2ViIEFuaW1hdGlvbnMuIEFzIGEgcmVzdWx0LCB3ZSBuZWVkIHRvIGNoZWNrIGZvciBzdXBwb3J0XG4gICAqIGFuZCBwcm92aWRlIGEgZmFsbGJhY2sgdG8gdGVzdCBjZXJ0YWluIGZ1bmN0aW9uYWxpdHkgcmVsYXRlZCB0byBXZWIgQW5pbWF0aW9ucy5cbiAgICovXG4gIGNvbnN0IHN1cHBvcnRzV2ViQW5pbWF0aW9ucyA9IHR5cGVvZiBFbGVtZW50ID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBFbGVtZW50LnByb3RvdHlwZS5hbmltYXRlID09PSAnZnVuY3Rpb24nICYmIHN1cHBvcnRzQW5pbWF0aW9uRWZmZWN0O1xuICBjb25zdCBnZXRXZWJBbmltYXRpb25zID0gKCkgPT4ge1xuICAgIHJldHVybiB3ZWJBbmltYXRpb25zO1xuICB9O1xuICBjb25zdCBkZXN0cm95ID0gY2xlYXJTdHlsZVNoZWV0cyA9PiB7XG4gICAgY2hpbGRBbmltYXRpb25zLmZvckVhY2goY2hpbGRBbmltYXRpb24gPT4ge1xuICAgICAgY2hpbGRBbmltYXRpb24uZGVzdHJveShjbGVhclN0eWxlU2hlZXRzKTtcbiAgICB9KTtcbiAgICBjbGVhblVwKGNsZWFyU3R5bGVTaGVldHMpO1xuICAgIGVsZW1lbnRzLmxlbmd0aCA9IDA7XG4gICAgY2hpbGRBbmltYXRpb25zLmxlbmd0aCA9IDA7XG4gICAgX2tleWZyYW1lcy5sZW5ndGggPSAwO1xuICAgIGNsZWFyT25GaW5pc2goKTtcbiAgICBpbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIHNob3VsZENhbGN1bGF0ZU51bUFuaW1hdGlvbnMgPSB0cnVlO1xuICAgIHJldHVybiBhbmk7XG4gIH07XG4gIC8qKlxuICAgKiBDYW5jZWxzIGFueSBXZWIgQW5pbWF0aW9ucywgcmVtb3Zlc1xuICAgKiBhbnkgYW5pbWF0aW9uIHByb3BlcnRpZXMgZnJvbSB0aGVcbiAgICogYW5pbWF0aW9uJ3MgZWxlbWVudHMsIGFuZCByZW1vdmVzIHRoZVxuICAgKiBhbmltYXRpb24ncyBzdHlsZXNoZWV0cyBmcm9tIHRoZSBET00uXG4gICAqL1xuICBjb25zdCBjbGVhblVwID0gY2xlYXJTdHlsZVNoZWV0cyA9PiB7XG4gICAgY2xlYW5VcEVsZW1lbnRzKCk7XG4gICAgaWYgKGNsZWFyU3R5bGVTaGVldHMpIHtcbiAgICAgIGNsZWFuVXBTdHlsZVNoZWV0cygpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgcmVzZXRGbGFncyA9ICgpID0+IHtcbiAgICBzaG91bGRGb3JjZUxpbmVhckVhc2luZyA9IGZhbHNlO1xuICAgIHNob3VsZEZvcmNlU3luY1BsYXliYWNrID0gZmFsc2U7XG4gICAgc2hvdWxkQ2FsY3VsYXRlTnVtQW5pbWF0aW9ucyA9IHRydWU7XG4gICAgZm9yY2VEaXJlY3Rpb25WYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICBmb3JjZUR1cmF0aW9uVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgZm9yY2VEZWxheVZhbHVlID0gdW5kZWZpbmVkO1xuICAgIG51bUFuaW1hdGlvbnNSdW5uaW5nID0gMDtcbiAgICBmaW5pc2hlZCA9IGZhbHNlO1xuICAgIHdpbGxDb21wbGV0ZSA9IHRydWU7XG4gICAgcGF1c2VkID0gZmFsc2U7XG4gIH07XG4gIGNvbnN0IGlzUnVubmluZyA9ICgpID0+IHtcbiAgICByZXR1cm4gbnVtQW5pbWF0aW9uc1J1bm5pbmcgIT09IDAgJiYgIXBhdXNlZDtcbiAgfTtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBSZW1vdmUgYSBjYWxsYmFjayBmcm9tIGEgY2hvc2VuIGNhbGxiYWNrIGFycmF5XG4gICAqIEBwYXJhbSBjYWxsYmFja1RvUmVtb3ZlOiBBIHJlZmVyZW5jZSB0byB0aGUgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgcmVtb3ZlZFxuICAgKiBAcGFyYW0gY2FsbGJhY2tPYmplY3RzOiBBbiBhcnJheSBvZiBjYWxsYmFja3MgdGhhdCBjYWxsYmFja1RvUmVtb3ZlIHNob3VsZCBiZSByZW1vdmVkIGZyb20uXG4gICAqL1xuICBjb25zdCBjbGVhckNhbGxiYWNrID0gKGNhbGxiYWNrVG9SZW1vdmUsIGNhbGxiYWNrT2JqZWN0cykgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gY2FsbGJhY2tPYmplY3RzLmZpbmRJbmRleChjYWxsYmFja09iamVjdCA9PiBjYWxsYmFja09iamVjdC5jID09PSBjYWxsYmFja1RvUmVtb3ZlKTtcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgY2FsbGJhY2tPYmplY3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9O1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEFkZCBhIGNhbGxiYWNrIHRvIGJlIGZpcmVkIHdoZW4gYW4gYW5pbWF0aW9uIGlzIHN0b3BwZWQvY2FuY2VsbGVkLlxuICAgKiBAcGFyYW0gY2FsbGJhY2s6IEEgcmVmZXJlbmNlIHRvIHRoZSBjYWxsYmFjayB0aGF0IHNob3VsZCBiZSBmaXJlZFxuICAgKiBAcGFyYW0gb3B0czogQW55IG9wdGlvbnMgYXNzb2NpYXRlZCB3aXRoIHRoaXMgcGFydGljdWxhciBjYWxsYmFja1xuICAgKi9cbiAgY29uc3Qgb25TdG9wID0gKGNhbGxiYWNrLCBvcHRzKSA9PiB7XG4gICAgb25TdG9wT25lVGltZUNhbGxiYWNrcy5wdXNoKHtcbiAgICAgIGM6IGNhbGxiYWNrLFxuICAgICAgbzogb3B0c1xuICAgIH0pO1xuICAgIHJldHVybiBhbmk7XG4gIH07XG4gIGNvbnN0IG9uRmluaXNoID0gKGNhbGxiYWNrLCBvcHRzKSA9PiB7XG4gICAgY29uc3QgY2FsbGJhY2tzID0gKG9wdHMgPT09IG51bGwgfHwgb3B0cyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0cy5vbmVUaW1lQ2FsbGJhY2spID8gb25GaW5pc2hPbmVUaW1lQ2FsbGJhY2tzIDogb25GaW5pc2hDYWxsYmFja3M7XG4gICAgY2FsbGJhY2tzLnB1c2goe1xuICAgICAgYzogY2FsbGJhY2ssXG4gICAgICBvOiBvcHRzXG4gICAgfSk7XG4gICAgcmV0dXJuIGFuaTtcbiAgfTtcbiAgY29uc3QgY2xlYXJPbkZpbmlzaCA9ICgpID0+IHtcbiAgICBvbkZpbmlzaENhbGxiYWNrcy5sZW5ndGggPSAwO1xuICAgIG9uRmluaXNoT25lVGltZUNhbGxiYWNrcy5sZW5ndGggPSAwO1xuICAgIHJldHVybiBhbmk7XG4gIH07XG4gIC8qKlxuICAgKiBDYW5jZWxzIGFueSBXZWIgQW5pbWF0aW9ucyBhbmQgcmVtb3Zlc1xuICAgKiBhbnkgYW5pbWF0aW9uIHByb3BlcnRpZXMgZnJvbSB0aGVcbiAgICogdGhlIGFuaW1hdGlvbidzIGVsZW1lbnRzLlxuICAgKi9cbiAgY29uc3QgY2xlYW5VcEVsZW1lbnRzID0gKCkgPT4ge1xuICAgIGlmIChzdXBwb3J0c1dlYkFuaW1hdGlvbnMpIHtcbiAgICAgIHdlYkFuaW1hdGlvbnMuZm9yRWFjaChhbmltYXRpb24gPT4ge1xuICAgICAgICBhbmltYXRpb24uY2FuY2VsKCk7XG4gICAgICB9KTtcbiAgICAgIHdlYkFuaW1hdGlvbnMubGVuZ3RoID0gMDtcbiAgICB9XG4gIH07XG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSBhbmltYXRpb24ncyBzdHlsZXNoZWV0c1xuICAgKiBmcm9tIHRoZSBET00uXG4gICAqL1xuICBjb25zdCBjbGVhblVwU3R5bGVTaGVldHMgPSAoKSA9PiB7XG4gICAgc3R5bGVzaGVldHMuZm9yRWFjaChzdHlsZXNoZWV0ID0+IHtcbiAgICAgIC8qKlxuICAgICAgICogV2hlbiBzaGFyaW5nIHN0eWxlc2hlZXRzLCBpdCdzIHBvc3NpYmxlXG4gICAgICAgKiBmb3IgYW5vdGhlciBhbmltYXRpb24gdG8gaGF2ZSBhbHJlYWR5XG4gICAgICAgKiBjbGVhbmVkIHVwIGEgcGFydGljdWxhciBzdHlsZXNoZWV0XG4gICAgICAgKi9cbiAgICAgIGlmIChzdHlsZXNoZWV0ID09PSBudWxsIHx8IHN0eWxlc2hlZXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHN0eWxlc2hlZXQucGFyZW50Tm9kZSkge1xuICAgICAgICBzdHlsZXNoZWV0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVzaGVldCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgc3R5bGVzaGVldHMubGVuZ3RoID0gMDtcbiAgfTtcbiAgY29uc3QgYmVmb3JlQWRkUmVhZCA9IHJlYWRGbiA9PiB7XG4gICAgX2JlZm9yZUFkZFJlYWRGdW5jdGlvbnMucHVzaChyZWFkRm4pO1xuICAgIHJldHVybiBhbmk7XG4gIH07XG4gIGNvbnN0IGJlZm9yZUFkZFdyaXRlID0gd3JpdGVGbiA9PiB7XG4gICAgX2JlZm9yZUFkZFdyaXRlRnVuY3Rpb25zLnB1c2god3JpdGVGbik7XG4gICAgcmV0dXJuIGFuaTtcbiAgfTtcbiAgY29uc3QgYWZ0ZXJBZGRSZWFkID0gcmVhZEZuID0+IHtcbiAgICBfYWZ0ZXJBZGRSZWFkRnVuY3Rpb25zLnB1c2gocmVhZEZuKTtcbiAgICByZXR1cm4gYW5pO1xuICB9O1xuICBjb25zdCBhZnRlckFkZFdyaXRlID0gd3JpdGVGbiA9PiB7XG4gICAgX2FmdGVyQWRkV3JpdGVGdW5jdGlvbnMucHVzaCh3cml0ZUZuKTtcbiAgICByZXR1cm4gYW5pO1xuICB9O1xuICBjb25zdCBiZWZvcmVBZGRDbGFzcyA9IGNsYXNzTmFtZSA9PiB7XG4gICAgYmVmb3JlQWRkQ2xhc3NlcyA9IGFkZENsYXNzVG9BcnJheShiZWZvcmVBZGRDbGFzc2VzLCBjbGFzc05hbWUpO1xuICAgIHJldHVybiBhbmk7XG4gIH07XG4gIGNvbnN0IGJlZm9yZVJlbW92ZUNsYXNzID0gY2xhc3NOYW1lID0+IHtcbiAgICBiZWZvcmVSZW1vdmVDbGFzc2VzID0gYWRkQ2xhc3NUb0FycmF5KGJlZm9yZVJlbW92ZUNsYXNzZXMsIGNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIGFuaTtcbiAgfTtcbiAgLyoqXG4gICAqIFNldCBDU1MgaW5saW5lIHN0eWxlcyB0byB0aGUgYW5pbWF0aW9uJ3NcbiAgICogZWxlbWVudHMgYmVmb3JlIHRoZSBhbmltYXRpb24gYmVnaW5zLlxuICAgKi9cbiAgY29uc3QgYmVmb3JlU3R5bGVzID0gKHN0eWxlcyA9IHt9KSA9PiB7XG4gICAgYmVmb3JlU3R5bGVzVmFsdWUgPSBzdHlsZXM7XG4gICAgcmV0dXJuIGFuaTtcbiAgfTtcbiAgLyoqXG4gICAqIENsZWFyIENTUyBpbmxpbmUgc3R5bGVzIGZyb20gdGhlIGFuaW1hdGlvbidzXG4gICAqIGVsZW1lbnRzIGJlZm9yZSB0aGUgYW5pbWF0aW9uIGJlZ2lucy5cbiAgICovXG4gIGNvbnN0IGJlZm9yZUNsZWFyU3R5bGVzID0gKHByb3BlcnR5TmFtZXMgPSBbXSkgPT4ge1xuICAgIGZvciAoY29uc3QgcHJvcGVydHkgb2YgcHJvcGVydHlOYW1lcykge1xuICAgICAgYmVmb3JlU3R5bGVzVmFsdWVbcHJvcGVydHldID0gJyc7XG4gICAgfVxuICAgIHJldHVybiBhbmk7XG4gIH07XG4gIGNvbnN0IGFmdGVyQWRkQ2xhc3MgPSBjbGFzc05hbWUgPT4ge1xuICAgIGFmdGVyQWRkQ2xhc3NlcyA9IGFkZENsYXNzVG9BcnJheShhZnRlckFkZENsYXNzZXMsIGNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIGFuaTtcbiAgfTtcbiAgY29uc3QgYWZ0ZXJSZW1vdmVDbGFzcyA9IGNsYXNzTmFtZSA9PiB7XG4gICAgYWZ0ZXJSZW1vdmVDbGFzc2VzID0gYWRkQ2xhc3NUb0FycmF5KGFmdGVyUmVtb3ZlQ2xhc3NlcywgY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gYW5pO1xuICB9O1xuICBjb25zdCBhZnRlclN0eWxlcyA9IChzdHlsZXMgPSB7fSkgPT4ge1xuICAgIGFmdGVyU3R5bGVzVmFsdWUgPSBzdHlsZXM7XG4gICAgcmV0dXJuIGFuaTtcbiAgfTtcbiAgY29uc3QgYWZ0ZXJDbGVhclN0eWxlcyA9IChwcm9wZXJ0eU5hbWVzID0gW10pID0+IHtcbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHByb3BlcnR5TmFtZXMpIHtcbiAgICAgIGFmdGVyU3R5bGVzVmFsdWVbcHJvcGVydHldID0gJyc7XG4gICAgfVxuICAgIHJldHVybiBhbmk7XG4gIH07XG4gIGNvbnN0IGdldEZpbGwgPSAoKSA9PiB7XG4gICAgaWYgKF9maWxsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBfZmlsbDtcbiAgICB9XG4gICAgaWYgKHBhcmVudEFuaW1hdGlvbikge1xuICAgICAgcmV0dXJuIHBhcmVudEFuaW1hdGlvbi5nZXRGaWxsKCk7XG4gICAgfVxuICAgIHJldHVybiAnYm90aCc7XG4gIH07XG4gIGNvbnN0IGdldERpcmVjdGlvbiA9ICgpID0+IHtcbiAgICBpZiAoZm9yY2VEaXJlY3Rpb25WYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZm9yY2VEaXJlY3Rpb25WYWx1ZTtcbiAgICB9XG4gICAgaWYgKF9kaXJlY3Rpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIF9kaXJlY3Rpb247XG4gICAgfVxuICAgIGlmIChwYXJlbnRBbmltYXRpb24pIHtcbiAgICAgIHJldHVybiBwYXJlbnRBbmltYXRpb24uZ2V0RGlyZWN0aW9uKCk7XG4gICAgfVxuICAgIHJldHVybiAnbm9ybWFsJztcbiAgfTtcbiAgY29uc3QgZ2V0RWFzaW5nID0gKCkgPT4ge1xuICAgIGlmIChzaG91bGRGb3JjZUxpbmVhckVhc2luZykge1xuICAgICAgcmV0dXJuICdsaW5lYXInO1xuICAgIH1cbiAgICBpZiAoX2Vhc2luZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gX2Vhc2luZztcbiAgICB9XG4gICAgaWYgKHBhcmVudEFuaW1hdGlvbikge1xuICAgICAgcmV0dXJuIHBhcmVudEFuaW1hdGlvbi5nZXRFYXNpbmcoKTtcbiAgICB9XG4gICAgcmV0dXJuICdsaW5lYXInO1xuICB9O1xuICBjb25zdCBnZXREdXJhdGlvbiA9ICgpID0+IHtcbiAgICBpZiAoc2hvdWxkRm9yY2VTeW5jUGxheWJhY2spIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBpZiAoZm9yY2VEdXJhdGlvblZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmb3JjZUR1cmF0aW9uVmFsdWU7XG4gICAgfVxuICAgIGlmIChfZHVyYXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIF9kdXJhdGlvbjtcbiAgICB9XG4gICAgaWYgKHBhcmVudEFuaW1hdGlvbikge1xuICAgICAgcmV0dXJuIHBhcmVudEFuaW1hdGlvbi5nZXREdXJhdGlvbigpO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfTtcbiAgY29uc3QgZ2V0SXRlcmF0aW9ucyA9ICgpID0+IHtcbiAgICBpZiAoX2l0ZXJhdGlvbnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIF9pdGVyYXRpb25zO1xuICAgIH1cbiAgICBpZiAocGFyZW50QW5pbWF0aW9uKSB7XG4gICAgICByZXR1cm4gcGFyZW50QW5pbWF0aW9uLmdldEl0ZXJhdGlvbnMoKTtcbiAgICB9XG4gICAgcmV0dXJuIDE7XG4gIH07XG4gIGNvbnN0IGdldERlbGF5ID0gKCkgPT4ge1xuICAgIGlmIChmb3JjZURlbGF5VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZvcmNlRGVsYXlWYWx1ZTtcbiAgICB9XG4gICAgaWYgKF9kZWxheSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gX2RlbGF5O1xuICAgIH1cbiAgICBpZiAocGFyZW50QW5pbWF0aW9uKSB7XG4gICAgICByZXR1cm4gcGFyZW50QW5pbWF0aW9uLmdldERlbGF5KCk7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9O1xuICBjb25zdCBnZXRLZXlmcmFtZXMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIF9rZXlmcmFtZXM7XG4gIH07XG4gIGNvbnN0IGRpcmVjdGlvbiA9IGFuaW1hdGlvbkRpcmVjdGlvbiA9PiB7XG4gICAgX2RpcmVjdGlvbiA9IGFuaW1hdGlvbkRpcmVjdGlvbjtcbiAgICB1cGRhdGUodHJ1ZSk7XG4gICAgcmV0dXJuIGFuaTtcbiAgfTtcbiAgY29uc3QgZmlsbCA9IGFuaW1hdGlvbkZpbGwgPT4ge1xuICAgIF9maWxsID0gYW5pbWF0aW9uRmlsbDtcbiAgICB1cGRhdGUodHJ1ZSk7XG4gICAgcmV0dXJuIGFuaTtcbiAgfTtcbiAgY29uc3QgZGVsYXkgPSBhbmltYXRpb25EZWxheSA9PiB7XG4gICAgX2RlbGF5ID0gYW5pbWF0aW9uRGVsYXk7XG4gICAgdXBkYXRlKHRydWUpO1xuICAgIHJldHVybiBhbmk7XG4gIH07XG4gIGNvbnN0IGVhc2luZyA9IGFuaW1hdGlvbkVhc2luZyA9PiB7XG4gICAgX2Vhc2luZyA9IGFuaW1hdGlvbkVhc2luZztcbiAgICB1cGRhdGUodHJ1ZSk7XG4gICAgcmV0dXJuIGFuaTtcbiAgfTtcbiAgY29uc3QgZHVyYXRpb24gPSBhbmltYXRpb25EdXJhdGlvbiA9PiB7XG4gICAgLyoqXG4gICAgICogQ1NTIEFuaW1hdGlvbiBEdXJhdGlvbnMgb2YgMG1zIHdvcmsgZmluZSBvbiBDaHJvbWVcbiAgICAgKiBidXQgZG8gbm90IHJ1biBvbiBTYWZhcmksIHNvIGZvcmNlIGl0IHRvIDFtcyB0b1xuICAgICAqIGdldCBpdCB0byBydW4gb24gYm90aCBwbGF0Zm9ybXMuXG4gICAgICovXG4gICAgaWYgKCFzdXBwb3J0c1dlYkFuaW1hdGlvbnMgJiYgYW5pbWF0aW9uRHVyYXRpb24gPT09IDApIHtcbiAgICAgIGFuaW1hdGlvbkR1cmF0aW9uID0gMTtcbiAgICB9XG4gICAgX2R1cmF0aW9uID0gYW5pbWF0aW9uRHVyYXRpb247XG4gICAgdXBkYXRlKHRydWUpO1xuICAgIHJldHVybiBhbmk7XG4gIH07XG4gIGNvbnN0IGl0ZXJhdGlvbnMgPSBhbmltYXRpb25JdGVyYXRpb25zID0+IHtcbiAgICBfaXRlcmF0aW9ucyA9IGFuaW1hdGlvbkl0ZXJhdGlvbnM7XG4gICAgdXBkYXRlKHRydWUpO1xuICAgIHJldHVybiBhbmk7XG4gIH07XG4gIGNvbnN0IHBhcmVudCA9IGFuaW1hdGlvbiA9PiB7XG4gICAgcGFyZW50QW5pbWF0aW9uID0gYW5pbWF0aW9uO1xuICAgIHJldHVybiBhbmk7XG4gIH07XG4gIGNvbnN0IGFkZEVsZW1lbnQgPSBlbCA9PiB7XG4gICAgaWYgKGVsICE9IG51bGwpIHtcbiAgICAgIGlmIChlbC5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICBlbGVtZW50cy5wdXNoKGVsKTtcbiAgICAgIH0gZWxzZSBpZiAoZWwubGVuZ3RoID49IDApIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGVsZW1lbnRzLnB1c2goZWxbaV0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcmludElvbkVycm9yKCdjcmVhdGVBbmltYXRpb24gLSBJbnZhbGlkIGFkZEVsZW1lbnQgdmFsdWUuJyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhbmk7XG4gIH07XG4gIGNvbnN0IGFkZEFuaW1hdGlvbiA9IGFuaW1hdGlvblRvQWRkID0+IHtcbiAgICBpZiAoYW5pbWF0aW9uVG9BZGQgIT0gbnVsbCkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYW5pbWF0aW9uVG9BZGQpKSB7XG4gICAgICAgIGZvciAoY29uc3QgYW5pbWF0aW9uIG9mIGFuaW1hdGlvblRvQWRkKSB7XG4gICAgICAgICAgYW5pbWF0aW9uLnBhcmVudChhbmkpO1xuICAgICAgICAgIGNoaWxkQW5pbWF0aW9ucy5wdXNoKGFuaW1hdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFuaW1hdGlvblRvQWRkLnBhcmVudChhbmkpO1xuICAgICAgICBjaGlsZEFuaW1hdGlvbnMucHVzaChhbmltYXRpb25Ub0FkZCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhbmk7XG4gIH07XG4gIGNvbnN0IGtleWZyYW1lcyA9IGtleWZyYW1lVmFsdWVzID0+IHtcbiAgICBjb25zdCBkaWZmZXJlbnQgPSBfa2V5ZnJhbWVzICE9PSBrZXlmcmFtZVZhbHVlcztcbiAgICBfa2V5ZnJhbWVzID0ga2V5ZnJhbWVWYWx1ZXM7XG4gICAgaWYgKGRpZmZlcmVudCkge1xuICAgICAgdXBkYXRlS2V5ZnJhbWVzKF9rZXlmcmFtZXMpO1xuICAgIH1cbiAgICByZXR1cm4gYW5pO1xuICB9O1xuICBjb25zdCB1cGRhdGVLZXlmcmFtZXMgPSBrZXlmcmFtZVZhbHVlcyA9PiB7XG4gICAgaWYgKHN1cHBvcnRzV2ViQW5pbWF0aW9ucykge1xuICAgICAgZ2V0V2ViQW5pbWF0aW9ucygpLmZvckVhY2goYW5pbWF0aW9uID0+IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGFuaW1hdGlvbi5lZmZlY3QncyB0eXBlIGlzIEFuaW1hdGlvbkVmZmVjdC5cbiAgICAgICAgICogSG93ZXZlciwgaW4gdGhpcyBjYXNlIHdlIGhhdmUgYSBtb3JlIHNwZWNpZmljXG4gICAgICAgICAqIHR5cGUgb2YgQW5pbWF0aW9uRWZmZWN0IGNhbGxlZCBLZXlmcmFtZUVmZmVjdCB3aGljaFxuICAgICAgICAgKiBpbmhlcml0cyBmcm9tIEFuaW1hdGlvbkVmZmVjdC4gQXMgYSByZXN1bHQsXG4gICAgICAgICAqIHdlIGNhc3QgYW5pbWF0aW9uLmVmZmVjdCB0byBLZXlmcmFtZUVmZmVjdC5cbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IGtleWZyYW1lRWZmZWN0ID0gYW5pbWF0aW9uLmVmZmVjdDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIHNldEtleWZyYW1lcyBpcyBub3Qgc3VwcG9ydGVkIGluIGFsbCBicm93c2VyXG4gICAgICAgICAqIHZlcnNpb25zIHRoYXQgSW9uaWMgc3VwcG9ydHMsIHNvIHdlIG5lZWQgdG9cbiAgICAgICAgICogY2hlY2sgZm9yIHN1cHBvcnQgYmVmb3JlIHVzaW5nIGl0LlxuICAgICAgICAgKi9cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9zdHJpY3QtYm9vbGVhbi1leHByZXNzaW9uc1xuICAgICAgICBpZiAoa2V5ZnJhbWVFZmZlY3Quc2V0S2V5ZnJhbWVzKSB7XG4gICAgICAgICAga2V5ZnJhbWVFZmZlY3Quc2V0S2V5ZnJhbWVzKGtleWZyYW1lVmFsdWVzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBuZXdFZmZlY3QgPSBuZXcgS2V5ZnJhbWVFZmZlY3Qoa2V5ZnJhbWVFZmZlY3QudGFyZ2V0LCBrZXlmcmFtZVZhbHVlcywga2V5ZnJhbWVFZmZlY3QuZ2V0VGltaW5nKCkpO1xuICAgICAgICAgIGFuaW1hdGlvbi5lZmZlY3QgPSBuZXdFZmZlY3Q7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgLyoqXG4gICAqIFJ1biBhbGwgXCJiZWZvcmVcIiBhbmltYXRpb24gaG9va3MuXG4gICAqL1xuICBjb25zdCBiZWZvcmVBbmltYXRpb24gPSAoKSA9PiB7XG4gICAgLy8gUnVucyBhbGwgYmVmb3JlIHJlYWQgY2FsbGJhY2tzXG4gICAgX2JlZm9yZUFkZFJlYWRGdW5jdGlvbnMuZm9yRWFjaChjYWxsYmFjayA9PiBjYWxsYmFjaygpKTtcbiAgICAvLyBSdW5zIGFsbCBiZWZvcmUgd3JpdGUgY2FsbGJhY2tzXG4gICAgX2JlZm9yZUFkZFdyaXRlRnVuY3Rpb25zLmZvckVhY2goY2FsbGJhY2sgPT4gY2FsbGJhY2soKSk7XG4gICAgLy8gVXBkYXRlcyBzdHlsZXMgYW5kIGNsYXNzZXMgYmVmb3JlIGFuaW1hdGlvbiBydW5zXG4gICAgY29uc3QgYWRkQ2xhc3NlcyA9IGJlZm9yZUFkZENsYXNzZXM7XG4gICAgY29uc3QgcmVtb3ZlQ2xhc3NlcyA9IGJlZm9yZVJlbW92ZUNsYXNzZXM7XG4gICAgY29uc3Qgc3R5bGVzID0gYmVmb3JlU3R5bGVzVmFsdWU7XG4gICAgZWxlbWVudHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50Q2xhc3NMaXN0ID0gZWwuY2xhc3NMaXN0O1xuICAgICAgYWRkQ2xhc3Nlcy5mb3JFYWNoKGMgPT4gZWxlbWVudENsYXNzTGlzdC5hZGQoYykpO1xuICAgICAgcmVtb3ZlQ2xhc3Nlcy5mb3JFYWNoKGMgPT4gZWxlbWVudENsYXNzTGlzdC5yZW1vdmUoYykpO1xuICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBzdHlsZXMpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICAgICAgICBpZiAoc3R5bGVzLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICAgIHNldFN0eWxlUHJvcGVydHkoZWwsIHByb3BlcnR5LCBzdHlsZXNbcHJvcGVydHldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICAvKipcbiAgICogUnVuIGFsbCBcImFmdGVyXCIgYW5pbWF0aW9uIGhvb2tzLlxuICAgKi9cbiAgY29uc3QgYWZ0ZXJBbmltYXRpb24gPSAoKSA9PiB7XG4gICAgLy8gUnVucyBhbGwgYWZ0ZXIgcmVhZCBjYWxsYmFja3NcbiAgICBfYWZ0ZXJBZGRSZWFkRnVuY3Rpb25zLmZvckVhY2goY2FsbGJhY2sgPT4gY2FsbGJhY2soKSk7XG4gICAgLy8gUnVucyBhbGwgYWZ0ZXIgd3JpdGUgY2FsbGJhY2tzXG4gICAgX2FmdGVyQWRkV3JpdGVGdW5jdGlvbnMuZm9yRWFjaChjYWxsYmFjayA9PiBjYWxsYmFjaygpKTtcbiAgICAvLyBVcGRhdGVzIHN0eWxlcyBhbmQgY2xhc3NlcyBiZWZvcmUgYW5pbWF0aW9uIGVuZHNcbiAgICBjb25zdCBjdXJyZW50U3RlcCA9IHdpbGxDb21wbGV0ZSA/IDEgOiAwO1xuICAgIGNvbnN0IGFkZENsYXNzZXMgPSBhZnRlckFkZENsYXNzZXM7XG4gICAgY29uc3QgcmVtb3ZlQ2xhc3NlcyA9IGFmdGVyUmVtb3ZlQ2xhc3NlcztcbiAgICBjb25zdCBzdHlsZXMgPSBhZnRlclN0eWxlc1ZhbHVlO1xuICAgIGVsZW1lbnRzLmZvckVhY2goZWwgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudENsYXNzTGlzdCA9IGVsLmNsYXNzTGlzdDtcbiAgICAgIGFkZENsYXNzZXMuZm9yRWFjaChjID0+IGVsZW1lbnRDbGFzc0xpc3QuYWRkKGMpKTtcbiAgICAgIHJlbW92ZUNsYXNzZXMuZm9yRWFjaChjID0+IGVsZW1lbnRDbGFzc0xpc3QucmVtb3ZlKGMpKTtcbiAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gc3R5bGVzKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgICAgICAgaWYgKHN0eWxlcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgICBzZXRTdHlsZVByb3BlcnR5KGVsLCBwcm9wZXJ0eSwgc3R5bGVzW3Byb3BlcnR5XSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBDbGVhbiB1cCBhbnkgdmFsdWUgY29lcmNpb24gYmVmb3JlXG4gICAgICogdGhlIHVzZXIgY2FsbGJhY2tzIGZpcmUgb3RoZXJ3aXNlXG4gICAgICogdGhleSBtYXkgZ2V0IHN0YWxlIHZhbHVlcy4gRm9yIGV4YW1wbGUsXG4gICAgICogaWYgc29tZW9uZSBjYWxscyBwcm9ncmVzc1N0YXJ0KDApIHRoZVxuICAgICAqIGFuaW1hdGlvbiBtYXkgc3RpbGwgYmUgcmV2ZXJzZWQuXG4gICAgICovXG4gICAgZm9yY2VEdXJhdGlvblZhbHVlID0gdW5kZWZpbmVkO1xuICAgIGZvcmNlRGlyZWN0aW9uVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgZm9yY2VEZWxheVZhbHVlID0gdW5kZWZpbmVkO1xuICAgIG9uRmluaXNoQ2FsbGJhY2tzLmZvckVhY2gob25GaW5pc2hDYWxsYmFjayA9PiB7XG4gICAgICByZXR1cm4gb25GaW5pc2hDYWxsYmFjay5jKGN1cnJlbnRTdGVwLCBhbmkpO1xuICAgIH0pO1xuICAgIG9uRmluaXNoT25lVGltZUNhbGxiYWNrcy5mb3JFYWNoKG9uRmluaXNoQ2FsbGJhY2sgPT4ge1xuICAgICAgcmV0dXJuIG9uRmluaXNoQ2FsbGJhY2suYyhjdXJyZW50U3RlcCwgYW5pKTtcbiAgICB9KTtcbiAgICBvbkZpbmlzaE9uZVRpbWVDYWxsYmFja3MubGVuZ3RoID0gMDtcbiAgICBzaG91bGRDYWxjdWxhdGVOdW1BbmltYXRpb25zID0gdHJ1ZTtcbiAgICBpZiAod2lsbENvbXBsZXRlKSB7XG4gICAgICBmaW5pc2hlZCA9IHRydWU7XG4gICAgfVxuICAgIHdpbGxDb21wbGV0ZSA9IHRydWU7XG4gIH07XG4gIGNvbnN0IGFuaW1hdGlvbkZpbmlzaCA9ICgpID0+IHtcbiAgICBpZiAobnVtQW5pbWF0aW9uc1J1bm5pbmcgPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbnVtQW5pbWF0aW9uc1J1bm5pbmctLTtcbiAgICBpZiAobnVtQW5pbWF0aW9uc1J1bm5pbmcgPT09IDApIHtcbiAgICAgIGFmdGVyQW5pbWF0aW9uKCk7XG4gICAgICBpZiAocGFyZW50QW5pbWF0aW9uKSB7XG4gICAgICAgIHBhcmVudEFuaW1hdGlvbi5hbmltYXRpb25GaW5pc2goKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGNvbnN0IGluaXRpYWxpemVXZWJBbmltYXRpb24gPSAoKSA9PiB7XG4gICAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IGVsZW1lbnQuYW5pbWF0ZShfa2V5ZnJhbWVzLCB7XG4gICAgICAgIGlkLFxuICAgICAgICBkZWxheTogZ2V0RGVsYXkoKSxcbiAgICAgICAgZHVyYXRpb246IGdldER1cmF0aW9uKCksXG4gICAgICAgIGVhc2luZzogZ2V0RWFzaW5nKCksXG4gICAgICAgIGl0ZXJhdGlvbnM6IGdldEl0ZXJhdGlvbnMoKSxcbiAgICAgICAgZmlsbDogZ2V0RmlsbCgpLFxuICAgICAgICBkaXJlY3Rpb246IGdldERpcmVjdGlvbigpXG4gICAgICB9KTtcbiAgICAgIGFuaW1hdGlvbi5wYXVzZSgpO1xuICAgICAgd2ViQW5pbWF0aW9ucy5wdXNoKGFuaW1hdGlvbik7XG4gICAgfSk7XG4gICAgaWYgKHdlYkFuaW1hdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgd2ViQW5pbWF0aW9uc1swXS5vbmZpbmlzaCA9ICgpID0+IHtcbiAgICAgICAgYW5pbWF0aW9uRmluaXNoKCk7XG4gICAgICB9O1xuICAgIH1cbiAgfTtcbiAgY29uc3QgaW5pdGlhbGl6ZUFuaW1hdGlvbiA9ICgpID0+IHtcbiAgICBiZWZvcmVBbmltYXRpb24oKTtcbiAgICBpZiAoX2tleWZyYW1lcy5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAoc3VwcG9ydHNXZWJBbmltYXRpb25zKSB7XG4gICAgICAgIGluaXRpYWxpemVXZWJBbmltYXRpb24oKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICB9O1xuICBjb25zdCBzZXRBbmltYXRpb25TdGVwID0gc3RlcCA9PiB7XG4gICAgc3RlcCA9IE1hdGgubWluKE1hdGgubWF4KHN0ZXAsIDApLCAwLjk5OTkpO1xuICAgIGlmIChzdXBwb3J0c1dlYkFuaW1hdGlvbnMpIHtcbiAgICAgIHdlYkFuaW1hdGlvbnMuZm9yRWFjaChhbmltYXRpb24gPT4ge1xuICAgICAgICAvLyBXaGVuIGNyZWF0aW5nIHRoZSBhbmltYXRpb24gdGhlIGRlbGF5IGlzIGd1YXJhbnRlZWQgdG8gYmUgc2V0IHRvIGEgbnVtYmVyLlxuICAgICAgICBhbmltYXRpb24uY3VycmVudFRpbWUgPSBhbmltYXRpb24uZWZmZWN0LmdldENvbXB1dGVkVGltaW5nKCkuZGVsYXkgKyBnZXREdXJhdGlvbigpICogc3RlcDtcbiAgICAgICAgYW5pbWF0aW9uLnBhdXNlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHVwZGF0ZVdlYkFuaW1hdGlvbiA9IHN0ZXAgPT4ge1xuICAgIHdlYkFuaW1hdGlvbnMuZm9yRWFjaChhbmltYXRpb24gPT4ge1xuICAgICAgYW5pbWF0aW9uLmVmZmVjdC51cGRhdGVUaW1pbmcoe1xuICAgICAgICBkZWxheTogZ2V0RGVsYXkoKSxcbiAgICAgICAgZHVyYXRpb246IGdldER1cmF0aW9uKCksXG4gICAgICAgIGVhc2luZzogZ2V0RWFzaW5nKCksXG4gICAgICAgIGl0ZXJhdGlvbnM6IGdldEl0ZXJhdGlvbnMoKSxcbiAgICAgICAgZmlsbDogZ2V0RmlsbCgpLFxuICAgICAgICBkaXJlY3Rpb246IGdldERpcmVjdGlvbigpXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAoc3RlcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZXRBbmltYXRpb25TdGVwKHN0ZXApO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgdXBkYXRlID0gKGRlZXAgPSBmYWxzZSwgdG9nZ2xlQW5pbWF0aW9uTmFtZSA9IHRydWUsIHN0ZXApID0+IHtcbiAgICBpZiAoZGVlcCkge1xuICAgICAgY2hpbGRBbmltYXRpb25zLmZvckVhY2goYW5pbWF0aW9uID0+IHtcbiAgICAgICAgYW5pbWF0aW9uLnVwZGF0ZShkZWVwLCB0b2dnbGVBbmltYXRpb25OYW1lLCBzdGVwKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoc3VwcG9ydHNXZWJBbmltYXRpb25zKSB7XG4gICAgICB1cGRhdGVXZWJBbmltYXRpb24oc3RlcCk7XG4gICAgfVxuICAgIHJldHVybiBhbmk7XG4gIH07XG4gIGNvbnN0IHByb2dyZXNzU3RhcnQgPSAoZm9yY2VMaW5lYXJFYXNpbmcgPSBmYWxzZSwgc3RlcCkgPT4ge1xuICAgIGNoaWxkQW5pbWF0aW9ucy5mb3JFYWNoKGFuaW1hdGlvbiA9PiB7XG4gICAgICBhbmltYXRpb24ucHJvZ3Jlc3NTdGFydChmb3JjZUxpbmVhckVhc2luZywgc3RlcCk7XG4gICAgfSk7XG4gICAgcGF1c2VBbmltYXRpb24oKTtcbiAgICBzaG91bGRGb3JjZUxpbmVhckVhc2luZyA9IGZvcmNlTGluZWFyRWFzaW5nO1xuICAgIGlmICghaW5pdGlhbGl6ZWQpIHtcbiAgICAgIGluaXRpYWxpemVBbmltYXRpb24oKTtcbiAgICB9XG4gICAgdXBkYXRlKGZhbHNlLCB0cnVlLCBzdGVwKTtcbiAgICByZXR1cm4gYW5pO1xuICB9O1xuICBjb25zdCBwcm9ncmVzc1N0ZXAgPSBzdGVwID0+IHtcbiAgICBjaGlsZEFuaW1hdGlvbnMuZm9yRWFjaChhbmltYXRpb24gPT4ge1xuICAgICAgYW5pbWF0aW9uLnByb2dyZXNzU3RlcChzdGVwKTtcbiAgICB9KTtcbiAgICBzZXRBbmltYXRpb25TdGVwKHN0ZXApO1xuICAgIHJldHVybiBhbmk7XG4gIH07XG4gIGNvbnN0IHByb2dyZXNzRW5kID0gKHBsYXlUbywgc3RlcCwgZHVyKSA9PiB7XG4gICAgc2hvdWxkRm9yY2VMaW5lYXJFYXNpbmcgPSBmYWxzZTtcbiAgICBjaGlsZEFuaW1hdGlvbnMuZm9yRWFjaChhbmltYXRpb24gPT4ge1xuICAgICAgYW5pbWF0aW9uLnByb2dyZXNzRW5kKHBsYXlUbywgc3RlcCwgZHVyKTtcbiAgICB9KTtcbiAgICBpZiAoZHVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGZvcmNlRHVyYXRpb25WYWx1ZSA9IGR1cjtcbiAgICB9XG4gICAgZmluaXNoZWQgPSBmYWxzZTtcbiAgICB3aWxsQ29tcGxldGUgPSB0cnVlO1xuICAgIGlmIChwbGF5VG8gPT09IDApIHtcbiAgICAgIGZvcmNlRGlyZWN0aW9uVmFsdWUgPSBnZXREaXJlY3Rpb24oKSA9PT0gJ3JldmVyc2UnID8gJ25vcm1hbCcgOiAncmV2ZXJzZSc7XG4gICAgICBpZiAoZm9yY2VEaXJlY3Rpb25WYWx1ZSA9PT0gJ3JldmVyc2UnKSB7XG4gICAgICAgIHdpbGxDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzV2ViQW5pbWF0aW9ucykge1xuICAgICAgICB1cGRhdGUoKTtcbiAgICAgICAgc2V0QW5pbWF0aW9uU3RlcCgxIC0gc3RlcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3JjZURlbGF5VmFsdWUgPSAoMSAtIHN0ZXApICogZ2V0RHVyYXRpb24oKSAqIC0xO1xuICAgICAgICB1cGRhdGUoZmFsc2UsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHBsYXlUbyA9PT0gMSkge1xuICAgICAgaWYgKHN1cHBvcnRzV2ViQW5pbWF0aW9ucykge1xuICAgICAgICB1cGRhdGUoKTtcbiAgICAgICAgc2V0QW5pbWF0aW9uU3RlcChzdGVwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvcmNlRGVsYXlWYWx1ZSA9IHN0ZXAgKiBnZXREdXJhdGlvbigpICogLTE7XG4gICAgICAgIHVwZGF0ZShmYWxzZSwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocGxheVRvICE9PSB1bmRlZmluZWQgJiYgIXBhcmVudEFuaW1hdGlvbikge1xuICAgICAgcGxheSgpO1xuICAgIH1cbiAgICByZXR1cm4gYW5pO1xuICB9O1xuICBjb25zdCBwYXVzZUFuaW1hdGlvbiA9ICgpID0+IHtcbiAgICBpZiAoaW5pdGlhbGl6ZWQpIHtcbiAgICAgIGlmIChzdXBwb3J0c1dlYkFuaW1hdGlvbnMpIHtcbiAgICAgICAgd2ViQW5pbWF0aW9ucy5mb3JFYWNoKGFuaW1hdGlvbiA9PiB7XG4gICAgICAgICAgYW5pbWF0aW9uLnBhdXNlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICBzZXRTdHlsZVByb3BlcnR5KGVsZW1lbnQsICdhbmltYXRpb24tcGxheS1zdGF0ZScsICdwYXVzZWQnKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBwYXVzZWQgPSB0cnVlO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgcGF1c2UgPSAoKSA9PiB7XG4gICAgY2hpbGRBbmltYXRpb25zLmZvckVhY2goYW5pbWF0aW9uID0+IHtcbiAgICAgIGFuaW1hdGlvbi5wYXVzZSgpO1xuICAgIH0pO1xuICAgIHBhdXNlQW5pbWF0aW9uKCk7XG4gICAgcmV0dXJuIGFuaTtcbiAgfTtcbiAgY29uc3QgcGxheUNTU0FuaW1hdGlvbnMgPSAoKSA9PiB7XG4gICAgYW5pbWF0aW9uRmluaXNoKCk7XG4gIH07XG4gIGNvbnN0IHBsYXlXZWJBbmltYXRpb25zID0gKCkgPT4ge1xuICAgIHdlYkFuaW1hdGlvbnMuZm9yRWFjaChhbmltYXRpb24gPT4ge1xuICAgICAgYW5pbWF0aW9uLnBsYXkoKTtcbiAgICB9KTtcbiAgICBpZiAoX2tleWZyYW1lcy5sZW5ndGggPT09IDAgfHwgZWxlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBhbmltYXRpb25GaW5pc2goKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHJlc2V0QW5pbWF0aW9uID0gKCkgPT4ge1xuICAgIGlmIChzdXBwb3J0c1dlYkFuaW1hdGlvbnMpIHtcbiAgICAgIHNldEFuaW1hdGlvblN0ZXAoMCk7XG4gICAgICB1cGRhdGVXZWJBbmltYXRpb24oKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHBsYXkgPSBvcHRzID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBpZiAob3B0cyA9PT0gbnVsbCB8fCBvcHRzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRzLnN5bmMpIHtcbiAgICAgICAgc2hvdWxkRm9yY2VTeW5jUGxheWJhY2sgPSB0cnVlO1xuICAgICAgICBvbkZpbmlzaCgoKSA9PiBzaG91bGRGb3JjZVN5bmNQbGF5YmFjayA9IGZhbHNlLCB7XG4gICAgICAgICAgb25lVGltZUNhbGxiYWNrOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKCFpbml0aWFsaXplZCkge1xuICAgICAgICBpbml0aWFsaXplQW5pbWF0aW9uKCk7XG4gICAgICB9XG4gICAgICBpZiAoZmluaXNoZWQpIHtcbiAgICAgICAgcmVzZXRBbmltYXRpb24oKTtcbiAgICAgICAgZmluaXNoZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChzaG91bGRDYWxjdWxhdGVOdW1BbmltYXRpb25zKSB7XG4gICAgICAgIG51bUFuaW1hdGlvbnNSdW5uaW5nID0gY2hpbGRBbmltYXRpb25zLmxlbmd0aCArIDE7XG4gICAgICAgIHNob3VsZENhbGN1bGF0ZU51bUFuaW1hdGlvbnMgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogV2hlbiBvbmUgb2YgdGhlc2UgY2FsbGJhY2tzIGZpcmVzIHdlXG4gICAgICAgKiBuZWVkIHRvIGNsZWFyIHRoZSBvdGhlcidzIGNhbGxiYWNrIG90aGVyd2lzZVxuICAgICAgICogeW91IGNhbiBwb3RlbnRpYWxseSBnZXQgdGhlc2UgY2FsbGJhY2tzXG4gICAgICAgKiBmaXJpbmcgbXVsdGlwbGUgdGltZXMgaWYgdGhlIHBsYXkgbWV0aG9kXG4gICAgICAgKiBpcyBzdWJzZXF1ZW50bHkgY2FsbGVkLlxuICAgICAgICogRXhhbXBsZTpcbiAgICAgICAqIGFuaW1hdGlvbi5wbGF5KCkgKG9uU3RvcCBhbmQgb25GaW5pc2ggY2FsbGJhY2tzIGFyZSByZWdpc3RlcmVkKVxuICAgICAgICogYW5pbWF0aW9uLnN0b3AoKSAob25TdG9wIGNhbGxiYWNrIGlzIGZpcmVkLCBvbkZpbmlzaCBpcyBub3QpXG4gICAgICAgKiBhbmltYXRpb24ucGxheSgpIChvblN0b3AgYW5kIG9uRmluaXNoIGNhbGxiYWNrcyBhcmUgcmVnaXN0ZXJlZClcbiAgICAgICAqIFRvdGFsIG9uU3RvcCBjYWxsYmFja3M6IDFcbiAgICAgICAqIFRvdGFsIG9uRmluaXNoIGNhbGxiYWNrczogMlxuICAgICAgICovXG4gICAgICBjb25zdCBvblN0b3BDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgY2xlYXJDYWxsYmFjayhvbkZpbmlzaENhbGxiYWNrLCBvbkZpbmlzaE9uZVRpbWVDYWxsYmFja3MpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9O1xuICAgICAgY29uc3Qgb25GaW5pc2hDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgY2xlYXJDYWxsYmFjayhvblN0b3BDYWxsYmFjaywgb25TdG9wT25lVGltZUNhbGxiYWNrcyk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH07XG4gICAgICAvKipcbiAgICAgICAqIFRoZSBwbGF5IG1ldGhvZCByZXNvbHZlcyB3aGVuIGFuIGFuaW1hdGlvblxuICAgICAgICogcnVuIGVpdGhlciBmaW5pc2hlcyBvciBpcyBjYW5jZWxsZWQuXG4gICAgICAgKi9cbiAgICAgIG9uRmluaXNoKG9uRmluaXNoQ2FsbGJhY2ssIHtcbiAgICAgICAgb25lVGltZUNhbGxiYWNrOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIG9uU3RvcChvblN0b3BDYWxsYmFjaywge1xuICAgICAgICBvbmVUaW1lQ2FsbGJhY2s6IHRydWVcbiAgICAgIH0pO1xuICAgICAgY2hpbGRBbmltYXRpb25zLmZvckVhY2goYW5pbWF0aW9uID0+IHtcbiAgICAgICAgYW5pbWF0aW9uLnBsYXkoKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHN1cHBvcnRzV2ViQW5pbWF0aW9ucykge1xuICAgICAgICBwbGF5V2ViQW5pbWF0aW9ucygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGxheUNTU0FuaW1hdGlvbnMoKTtcbiAgICAgIH1cbiAgICAgIHBhdXNlZCA9IGZhbHNlO1xuICAgIH0pO1xuICB9O1xuICAvKipcbiAgICogU3RvcHMgYW4gYW5pbWF0aW9uIGFuZCByZXNldHMgaXQgc3RhdGUgdG8gdGhlXG4gICAqIGJlZ2lubmluZy4gVGhpcyBkb2VzIG5vdCBmaXJlIGFueSBvbkZpbmlzaFxuICAgKiBjYWxsYmFja3MgYmVjYXVzZSB0aGUgYW5pbWF0aW9uIGRpZCBub3QgZmluaXNoLlxuICAgKiBIb3dldmVyLCBzaW5jZSB0aGUgYW5pbWF0aW9uIHdhcyBub3QgZGVzdHJveWVkXG4gICAqIChpLmUuIHRoZSBhbmltYXRpb24gY291bGQgcnVuIGFnYWluKSB3ZSBkbyBub3RcbiAgICogY2xlYXIgdGhlIG9uRmluaXNoIGNhbGxiYWNrcy5cbiAgICovXG4gIGNvbnN0IHN0b3AgPSAoKSA9PiB7XG4gICAgY2hpbGRBbmltYXRpb25zLmZvckVhY2goYW5pbWF0aW9uID0+IHtcbiAgICAgIGFuaW1hdGlvbi5zdG9wKCk7XG4gICAgfSk7XG4gICAgaWYgKGluaXRpYWxpemVkKSB7XG4gICAgICBjbGVhblVwRWxlbWVudHMoKTtcbiAgICAgIGluaXRpYWxpemVkID0gZmFsc2U7XG4gICAgfVxuICAgIHJlc2V0RmxhZ3MoKTtcbiAgICBvblN0b3BPbmVUaW1lQ2FsbGJhY2tzLmZvckVhY2gob25TdG9wQ2FsbGJhY2sgPT4gb25TdG9wQ2FsbGJhY2suYygwLCBhbmkpKTtcbiAgICBvblN0b3BPbmVUaW1lQ2FsbGJhY2tzLmxlbmd0aCA9IDA7XG4gIH07XG4gIGNvbnN0IGZyb20gPSAocHJvcGVydHksIHZhbHVlKSA9PiB7XG4gICAgY29uc3QgZmlyc3RGcmFtZSA9IF9rZXlmcmFtZXNbMF07XG4gICAgaWYgKGZpcnN0RnJhbWUgIT09IHVuZGVmaW5lZCAmJiAoZmlyc3RGcmFtZS5vZmZzZXQgPT09IHVuZGVmaW5lZCB8fCBmaXJzdEZyYW1lLm9mZnNldCA9PT0gMCkpIHtcbiAgICAgIGZpcnN0RnJhbWVbcHJvcGVydHldID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIF9rZXlmcmFtZXMgPSBbe1xuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgIFtwcm9wZXJ0eV06IHZhbHVlXG4gICAgICB9LCAuLi5fa2V5ZnJhbWVzXTtcbiAgICB9XG4gICAgcmV0dXJuIGFuaTtcbiAgfTtcbiAgY29uc3QgdG8gPSAocHJvcGVydHksIHZhbHVlKSA9PiB7XG4gICAgY29uc3QgbGFzdEZyYW1lID0gX2tleWZyYW1lc1tfa2V5ZnJhbWVzLmxlbmd0aCAtIDFdO1xuICAgIGlmIChsYXN0RnJhbWUgIT09IHVuZGVmaW5lZCAmJiAobGFzdEZyYW1lLm9mZnNldCA9PT0gdW5kZWZpbmVkIHx8IGxhc3RGcmFtZS5vZmZzZXQgPT09IDEpKSB7XG4gICAgICBsYXN0RnJhbWVbcHJvcGVydHldID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIF9rZXlmcmFtZXMgPSBbLi4uX2tleWZyYW1lcywge1xuICAgICAgICBvZmZzZXQ6IDEsXG4gICAgICAgIFtwcm9wZXJ0eV06IHZhbHVlXG4gICAgICB9XTtcbiAgICB9XG4gICAgcmV0dXJuIGFuaTtcbiAgfTtcbiAgY29uc3QgZnJvbVRvID0gKHByb3BlcnR5LCBmcm9tVmFsdWUsIHRvVmFsdWUpID0+IHtcbiAgICByZXR1cm4gZnJvbShwcm9wZXJ0eSwgZnJvbVZhbHVlKS50byhwcm9wZXJ0eSwgdG9WYWx1ZSk7XG4gIH07XG4gIHJldHVybiBhbmkgPSB7XG4gICAgcGFyZW50QW5pbWF0aW9uLFxuICAgIGVsZW1lbnRzLFxuICAgIGNoaWxkQW5pbWF0aW9ucyxcbiAgICBpZCxcbiAgICBhbmltYXRpb25GaW5pc2gsXG4gICAgZnJvbSxcbiAgICB0byxcbiAgICBmcm9tVG8sXG4gICAgcGFyZW50LFxuICAgIHBsYXksXG4gICAgcGF1c2UsXG4gICAgc3RvcCxcbiAgICBkZXN0cm95LFxuICAgIGtleWZyYW1lcyxcbiAgICBhZGRBbmltYXRpb24sXG4gICAgYWRkRWxlbWVudCxcbiAgICB1cGRhdGUsXG4gICAgZmlsbCxcbiAgICBkaXJlY3Rpb24sXG4gICAgaXRlcmF0aW9ucyxcbiAgICBkdXJhdGlvbixcbiAgICBlYXNpbmcsXG4gICAgZGVsYXksXG4gICAgZ2V0V2ViQW5pbWF0aW9ucyxcbiAgICBnZXRLZXlmcmFtZXMsXG4gICAgZ2V0RmlsbCxcbiAgICBnZXREaXJlY3Rpb24sXG4gICAgZ2V0RGVsYXksXG4gICAgZ2V0SXRlcmF0aW9ucyxcbiAgICBnZXRFYXNpbmcsXG4gICAgZ2V0RHVyYXRpb24sXG4gICAgYWZ0ZXJBZGRSZWFkLFxuICAgIGFmdGVyQWRkV3JpdGUsXG4gICAgYWZ0ZXJDbGVhclN0eWxlcyxcbiAgICBhZnRlclN0eWxlcyxcbiAgICBhZnRlclJlbW92ZUNsYXNzLFxuICAgIGFmdGVyQWRkQ2xhc3MsXG4gICAgYmVmb3JlQWRkUmVhZCxcbiAgICBiZWZvcmVBZGRXcml0ZSxcbiAgICBiZWZvcmVDbGVhclN0eWxlcyxcbiAgICBiZWZvcmVTdHlsZXMsXG4gICAgYmVmb3JlUmVtb3ZlQ2xhc3MsXG4gICAgYmVmb3JlQWRkQ2xhc3MsXG4gICAgb25GaW5pc2gsXG4gICAgaXNSdW5uaW5nLFxuICAgIHByb2dyZXNzU3RhcnQsXG4gICAgcHJvZ3Jlc3NTdGVwLFxuICAgIHByb2dyZXNzRW5kXG4gIH07XG59O1xuZXhw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
