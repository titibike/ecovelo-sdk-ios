// node_modules/@ionic/core/components/gesture-controller.js
var GestureController = class {
  constructor() {
    this.gestureId = 0;
    this.requestedStart = /* @__PURE__ */ new Map();
    this.disabledGestures = /* @__PURE__ */ new Map();
    this.disabledScroll = /* @__PURE__ */ new Set();
  }
  /**
   * Creates a gesture delegate based on the GestureConfig passed
   */
  createGesture(config) {
    var _a;
    return new GestureDelegate(this, this.newID(), config.name, (_a = config.priority) !== null && _a !== void 0 ? _a : 0, !!config.disableScroll);
  }
  /**
   * Creates a blocker that will block any other gesture events from firing. Set in the ion-gesture component.
   */
  createBlocker(opts = {}) {
    return new BlockerDelegate(this, this.newID(), opts.disable, !!opts.disableScroll);
  }
  start(gestureName, id, priority) {
    if (!this.canStart(gestureName)) {
      this.requestedStart.delete(id);
      return false;
    }
    this.requestedStart.set(id, priority);
    return true;
  }
  capture(gestureName, id, priority) {
    if (!this.start(gestureName, id, priority)) {
      return false;
    }
    const requestedStart = this.requestedStart;
    let maxPriority = -1e4;
    requestedStart.forEach((value) => {
      maxPriority = Math.max(maxPriority, value);
    });
    if (maxPriority === priority) {
      this.capturedId = id;
      requestedStart.clear();
      const event = new CustomEvent("ionGestureCaptured", {
        detail: {
          gestureName
        }
      });
      document.dispatchEvent(event);
      return true;
    }
    requestedStart.delete(id);
    return false;
  }
  release(id) {
    this.requestedStart.delete(id);
    if (this.capturedId === id) {
      this.capturedId = void 0;
    }
  }
  disableGesture(gestureName, id) {
    let set = this.disabledGestures.get(gestureName);
    if (set === void 0) {
      set = /* @__PURE__ */ new Set();
      this.disabledGestures.set(gestureName, set);
    }
    set.add(id);
  }
  enableGesture(gestureName, id) {
    const set = this.disabledGestures.get(gestureName);
    if (set !== void 0) {
      set.delete(id);
    }
  }
  disableScroll(id) {
    this.disabledScroll.add(id);
    if (this.disabledScroll.size === 1) {
      document.body.classList.add(BACKDROP_NO_SCROLL);
    }
  }
  enableScroll(id) {
    this.disabledScroll.delete(id);
    if (this.disabledScroll.size === 0) {
      document.body.classList.remove(BACKDROP_NO_SCROLL);
    }
  }
  canStart(gestureName) {
    if (this.capturedId !== void 0) {
      return false;
    }
    if (this.isDisabled(gestureName)) {
      return false;
    }
    return true;
  }
  isCaptured() {
    return this.capturedId !== void 0;
  }
  isScrollDisabled() {
    return this.disabledScroll.size > 0;
  }
  isDisabled(gestureName) {
    const disabled = this.disabledGestures.get(gestureName);
    if (disabled && disabled.size > 0) {
      return true;
    }
    return false;
  }
  newID() {
    this.gestureId++;
    return this.gestureId;
  }
};
var GestureDelegate = class {
  constructor(ctrl, id, name, priority, disableScroll) {
    this.id = id;
    this.name = name;
    this.disableScroll = disableScroll;
    this.priority = priority * 1e6 + id;
    this.ctrl = ctrl;
  }
  canStart() {
    if (!this.ctrl) {
      return false;
    }
    return this.ctrl.canStart(this.name);
  }
  start() {
    if (!this.ctrl) {
      return false;
    }
    return this.ctrl.start(this.name, this.id, this.priority);
  }
  capture() {
    if (!this.ctrl) {
      return false;
    }
    const captured = this.ctrl.capture(this.name, this.id, this.priority);
    if (captured && this.disableScroll) {
      this.ctrl.disableScroll(this.id);
    }
    return captured;
  }
  release() {
    if (this.ctrl) {
      this.ctrl.release(this.id);
      if (this.disableScroll) {
        this.ctrl.enableScroll(this.id);
      }
    }
  }
  destroy() {
    this.release();
    this.ctrl = void 0;
  }
};
var BlockerDelegate = class {
  constructor(ctrl, id, disable, disableScroll) {
    this.id = id;
    this.disable = disable;
    this.disableScroll = disableScroll;
    this.ctrl = ctrl;
  }
  block() {
    if (!this.ctrl) {
      return;
    }
    if (this.disable) {
      for (const gesture of this.disable) {
        this.ctrl.disableGesture(gesture, this.id);
      }
    }
    if (this.disableScroll) {
      this.ctrl.disableScroll(this.id);
    }
  }
  unblock() {
    if (!this.ctrl) {
      return;
    }
    if (this.disable) {
      for (const gesture of this.disable) {
        this.ctrl.enableGesture(gesture, this.id);
      }
    }
    if (this.disableScroll) {
      this.ctrl.enableScroll(this.id);
    }
  }
  destroy() {
    this.unblock();
    this.ctrl = void 0;
  }
};
var BACKDROP_NO_SCROLL = "backdrop-no-scroll";
var GESTURE_CONTROLLER = new GestureController();

// node_modules/@ionic/core/components/index3.js
var addEventListener = (el, eventName, callback, opts) => {
  const listenerOpts = supportsPassive(el) ? {
    capture: false,
    passive: !!opts.passive
  } : false;
  let add;
  let remove;
  if (el["__zone_symbol__addEventListener"]) {
    add = "__zone_symbol__addEventListener";
    remove = "__zone_symbol__removeEventListener";
  } else {
    add = "addEventListener";
    remove = "removeEventListener";
  }
  el[add](eventName, callback, listenerOpts);
  return () => {
    el[remove](eventName, callback, listenerOpts);
  };
};
var supportsPassive = (node) => {
  if (_sPassive === void 0) {
    try {
      const opts = Object.defineProperty({}, "passive", {
        get: () => {
          _sPassive = true;
        }
      });
      node.addEventListener("optsTest", () => {
        return;
      }, opts);
    } catch (e) {
      _sPassive = false;
    }
  }
  return !!_sPassive;
};
var _sPassive;
var MOUSE_WAIT = 2e3;
var createPointerEvents = (el, pointerDown, pointerMove, pointerUp, options) => {
  let rmTouchStart;
  let rmTouchMove;
  let rmTouchEnd;
  let rmTouchCancel;
  let rmMouseStart;
  let rmMouseMove;
  let rmMouseUp;
  let lastTouchEvent = 0;
  const handleTouchStart = (ev) => {
    lastTouchEvent = Date.now() + MOUSE_WAIT;
    if (!pointerDown(ev)) {
      return;
    }
    if (!rmTouchMove && pointerMove) {
      rmTouchMove = addEventListener(el, "touchmove", pointerMove, options);
    }
    if (!rmTouchEnd) {
      rmTouchEnd = addEventListener(ev.target, "touchend", handleTouchEnd, options);
    }
    if (!rmTouchCancel) {
      rmTouchCancel = addEventListener(ev.target, "touchcancel", handleTouchEnd, options);
    }
  };
  const handleMouseDown = (ev) => {
    if (lastTouchEvent > Date.now()) {
      return;
    }
    if (!pointerDown(ev)) {
      return;
    }
    if (!rmMouseMove && pointerMove) {
      rmMouseMove = addEventListener(getDocument(el), "mousemove", pointerMove, options);
    }
    if (!rmMouseUp) {
      rmMouseUp = addEventListener(getDocument(el), "mouseup", handleMouseUp, options);
    }
  };
  const handleTouchEnd = (ev) => {
    stopTouch();
    if (pointerUp) {
      pointerUp(ev);
    }
  };
  const handleMouseUp = (ev) => {
    stopMouse();
    if (pointerUp) {
      pointerUp(ev);
    }
  };
  const stopTouch = () => {
    if (rmTouchMove) {
      rmTouchMove();
    }
    if (rmTouchEnd) {
      rmTouchEnd();
    }
    if (rmTouchCancel) {
      rmTouchCancel();
    }
    rmTouchMove = rmTouchEnd = rmTouchCancel = void 0;
  };
  const stopMouse = () => {
    if (rmMouseMove) {
      rmMouseMove();
    }
    if (rmMouseUp) {
      rmMouseUp();
    }
    rmMouseMove = rmMouseUp = void 0;
  };
  const stop = () => {
    stopTouch();
    stopMouse();
  };
  const enable = (isEnabled = true) => {
    if (!isEnabled) {
      if (rmTouchStart) {
        rmTouchStart();
      }
      if (rmMouseStart) {
        rmMouseStart();
      }
      rmTouchStart = rmMouseStart = void 0;
      stop();
    } else {
      if (!rmTouchStart) {
        rmTouchStart = addEventListener(el, "touchstart", handleTouchStart, options);
      }
      if (!rmMouseStart) {
        rmMouseStart = addEventListener(el, "mousedown", handleMouseDown, options);
      }
    }
  };
  const destroy = () => {
    enable(false);
    pointerUp = pointerMove = pointerDown = void 0;
  };
  return {
    enable,
    stop,
    destroy
  };
};
var getDocument = (node) => {
  return node instanceof Document ? node : node.ownerDocument;
};
var createPanRecognizer = (direction, thresh, maxAngle) => {
  const radians = maxAngle * (Math.PI / 180);
  const isDirX = direction === "x";
  const maxCosine = Math.cos(radians);
  const threshold = thresh * thresh;
  let startX = 0;
  let startY = 0;
  let dirty = false;
  let isPan = 0;
  return {
    start(x, y) {
      startX = x;
      startY = y;
      isPan = 0;
      dirty = true;
    },
    detect(x, y) {
      if (!dirty) {
        return false;
      }
      const deltaX = x - startX;
      const deltaY = y - startY;
      const distance = deltaX * deltaX + deltaY * deltaY;
      if (distance < threshold) {
        return false;
      }
      const hypotenuse = Math.sqrt(distance);
      const cosine = (isDirX ? deltaX : deltaY) / hypotenuse;
      if (cosine > maxCosine) {
        isPan = 1;
      } else if (cosine < -maxCosine) {
        isPan = -1;
      } else {
        isPan = 0;
      }
      dirty = false;
      return true;
    },
    isGesture() {
      return isPan !== 0;
    },
    getDirection() {
      return isPan;
    }
  };
};
var createGesture = (config) => {
  let hasCapturedPan = false;
  let hasStartedPan = false;
  let hasFiredStart = true;
  let isMoveQueued = false;
  const finalConfig = Object.assign({
    disableScroll: false,
    direction: "x",
    gesturePriority: 0,
    passive: true,
    maxAngle: 40,
    threshold: 10
  }, config);
  const canStart = finalConfig.canStart;
  const onWillStart = finalConfig.onWillStart;
  const onStart = finalConfig.onStart;
  const onEnd = finalConfig.onEnd;
  const notCaptured = finalConfig.notCaptured;
  const onMove = finalConfig.onMove;
  const threshold = finalConfig.threshold;
  const passive = finalConfig.passive;
  const blurOnStart = finalConfig.blurOnStart;
  const detail = {
    type: "pan",
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
    event: void 0,
    data: void 0
  };
  const pan = createPanRecognizer(finalConfig.direction, finalConfig.threshold, finalConfig.maxAngle);
  const gesture = GESTURE_CONTROLLER.createGesture({
    name: config.gestureName,
    priority: config.gesturePriority,
    disableScroll: config.disableScroll
  });
  const pointerDown = (ev) => {
    const timeStamp = now(ev);
    if (hasStartedPan || !hasFiredStart) {
      return false;
    }
    updateDetail(ev, detail);
    detail.startX = detail.currentX;
    detail.startY = detail.currentY;
    detail.startTime = detail.currentTime = timeStamp;
    detail.velocityX = detail.velocityY = detail.deltaX = detail.deltaY = 0;
    detail.event = ev;
    if (canStart && canStart(detail) === false) {
      return false;
    }
    gesture.release();
    if (!gesture.start()) {
      return false;
    }
    hasStartedPan = true;
    if (threshold === 0) {
      return tryToCapturePan();
    }
    pan.start(detail.startX, detail.startY);
    return true;
  };
  const pointerMove = (ev) => {
    if (hasCapturedPan) {
      if (!isMoveQueued && hasFiredStart) {
        isMoveQueued = true;
        calcGestureData(detail, ev);
        requestAnimationFrame(fireOnMove);
      }
      return;
    }
    calcGestureData(detail, ev);
    if (pan.detect(detail.currentX, detail.currentY)) {
      if (!pan.isGesture() || !tryToCapturePan()) {
        abortGesture();
      }
    }
  };
  const fireOnMove = () => {
    if (!hasCapturedPan) {
      return;
    }
    isMoveQueued = false;
    if (onMove) {
      onMove(detail);
    }
  };
  const tryToCapturePan = () => {
    if (!gesture.capture()) {
      return false;
    }
    hasCapturedPan = true;
    hasFiredStart = false;
    detail.startX = detail.currentX;
    detail.startY = detail.currentY;
    detail.startTime = detail.currentTime;
    if (onWillStart) {
      onWillStart(detail).then(fireOnStart);
    } else {
      fireOnStart();
    }
    return true;
  };
  const blurActiveElement = () => {
    if (typeof document !== "undefined") {
      const activeElement = document.activeElement;
      if (activeElement === null || activeElement === void 0 ? void 0 : activeElement.blur) {
        activeElement.blur();
      }
    }
  };
  const fireOnStart = () => {
    if (blurOnStart) {
      blurActiveElement();
    }
    if (onStart) {
      onStart(detail);
    }
    hasFiredStart = true;
  };
  const reset = () => {
    hasCapturedPan = false;
    hasStartedPan = false;
    isMoveQueued = false;
    hasFiredStart = true;
    gesture.release();
  };
  const pointerUp = (ev) => {
    const tmpHasCaptured = hasCapturedPan;
    const tmpHasFiredStart = hasFiredStart;
    reset();
    if (!tmpHasFiredStart) {
      return;
    }
    calcGestureData(detail, ev);
    if (tmpHasCaptured) {
      if (onEnd) {
        onEnd(detail);
      }
      return;
    }
    if (notCaptured) {
      notCaptured(detail);
    }
  };
  const pointerEvents = createPointerEvents(finalConfig.el, pointerDown, pointerMove, pointerUp, {
    passive
  });
  const abortGesture = () => {
    reset();
    pointerEvents.stop();
    if (notCaptured) {
      notCaptured(detail);
    }
  };
  return {
    enable(enable = true) {
      if (!enable) {
        if (hasCapturedPan) {
          pointerUp(void 0);
        }
        reset();
      }
      pointerEvents.enable(enable);
    },
    destroy() {
      gesture.destroy();
      pointerEvents.destroy();
    }
  };
};
var calcGestureData = (detail, ev) => {
  if (!ev) {
    return;
  }
  const prevX = detail.currentX;
  const prevY = detail.currentY;
  const prevT = detail.currentTime;
  updateDetail(ev, detail);
  const currentX = detail.currentX;
  const currentY = detail.currentY;
  const timestamp = detail.currentTime = now(ev);
  const timeDelta = timestamp - prevT;
  if (timeDelta > 0 && timeDelta < 100) {
    const velocityX = (currentX - prevX) / timeDelta;
    const velocityY = (currentY - prevY) / timeDelta;
    detail.velocityX = velocityX * 0.7 + detail.velocityX * 0.3;
    detail.velocityY = velocityY * 0.7 + detail.velocityY * 0.3;
  }
  detail.deltaX = currentX - detail.startX;
  detail.deltaY = currentY - detail.startY;
  detail.event = ev;
};
var updateDetail = (ev, detail) => {
  let x = 0;
  let y = 0;
  if (ev) {
    const changedTouches = ev.changedTouches;
    if (changedTouches && changedTouches.length > 0) {
      const touch = changedTouches[0];
      x = touch.clientX;
      y = touch.clientY;
    } else if (ev.pageX !== void 0) {
      x = ev.pageX;
      y = ev.pageY;
    }
  }
  detail.currentX = x;
  detail.currentY = y;
};
var now = (ev) => {
  return ev.timeStamp || Date.now();
};

export {
  BACKDROP_NO_SCROLL,
  GESTURE_CONTROLLER,
  createGesture
};
/*! Bundled license information:

@ionic/core/components/gesture-controller.js:
@ionic/core/components/index3.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9jb21wb25lbnRzL2dlc3R1cmUtY29udHJvbGxlci5qcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9jb21wb25lbnRzL2luZGV4My5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuY2xhc3MgR2VzdHVyZUNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmdlc3R1cmVJZCA9IDA7XG4gICAgdGhpcy5yZXF1ZXN0ZWRTdGFydCA9IG5ldyBNYXAoKTtcbiAgICB0aGlzLmRpc2FibGVkR2VzdHVyZXMgPSBuZXcgTWFwKCk7XG4gICAgdGhpcy5kaXNhYmxlZFNjcm9sbCA9IG5ldyBTZXQoKTtcbiAgfVxuICAvKipcbiAgICogQ3JlYXRlcyBhIGdlc3R1cmUgZGVsZWdhdGUgYmFzZWQgb24gdGhlIEdlc3R1cmVDb25maWcgcGFzc2VkXG4gICAqL1xuICBjcmVhdGVHZXN0dXJlKGNvbmZpZykge1xuICAgIHZhciBfYTtcbiAgICByZXR1cm4gbmV3IEdlc3R1cmVEZWxlZ2F0ZSh0aGlzLCB0aGlzLm5ld0lEKCksIGNvbmZpZy5uYW1lLCAoX2EgPSBjb25maWcucHJpb3JpdHkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IDAsICEhY29uZmlnLmRpc2FibGVTY3JvbGwpO1xuICB9XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgYmxvY2tlciB0aGF0IHdpbGwgYmxvY2sgYW55IG90aGVyIGdlc3R1cmUgZXZlbnRzIGZyb20gZmlyaW5nLiBTZXQgaW4gdGhlIGlvbi1nZXN0dXJlIGNvbXBvbmVudC5cbiAgICovXG4gIGNyZWF0ZUJsb2NrZXIob3B0cyA9IHt9KSB7XG4gICAgcmV0dXJuIG5ldyBCbG9ja2VyRGVsZWdhdGUodGhpcywgdGhpcy5uZXdJRCgpLCBvcHRzLmRpc2FibGUsICEhb3B0cy5kaXNhYmxlU2Nyb2xsKTtcbiAgfVxuICBzdGFydChnZXN0dXJlTmFtZSwgaWQsIHByaW9yaXR5KSB7XG4gICAgaWYgKCF0aGlzLmNhblN0YXJ0KGdlc3R1cmVOYW1lKSkge1xuICAgICAgdGhpcy5yZXF1ZXN0ZWRTdGFydC5kZWxldGUoaWQpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLnJlcXVlc3RlZFN0YXJ0LnNldChpZCwgcHJpb3JpdHkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGNhcHR1cmUoZ2VzdHVyZU5hbWUsIGlkLCBwcmlvcml0eSkge1xuICAgIGlmICghdGhpcy5zdGFydChnZXN0dXJlTmFtZSwgaWQsIHByaW9yaXR5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCByZXF1ZXN0ZWRTdGFydCA9IHRoaXMucmVxdWVzdGVkU3RhcnQ7XG4gICAgbGV0IG1heFByaW9yaXR5ID0gLTFlNDtcbiAgICByZXF1ZXN0ZWRTdGFydC5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgIG1heFByaW9yaXR5ID0gTWF0aC5tYXgobWF4UHJpb3JpdHksIHZhbHVlKTtcbiAgICB9KTtcbiAgICBpZiAobWF4UHJpb3JpdHkgPT09IHByaW9yaXR5KSB7XG4gICAgICB0aGlzLmNhcHR1cmVkSWQgPSBpZDtcbiAgICAgIHJlcXVlc3RlZFN0YXJ0LmNsZWFyKCk7XG4gICAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnaW9uR2VzdHVyZUNhcHR1cmVkJywge1xuICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICBnZXN0dXJlTmFtZVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJlcXVlc3RlZFN0YXJ0LmRlbGV0ZShpZCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJlbGVhc2UoaWQpIHtcbiAgICB0aGlzLnJlcXVlc3RlZFN0YXJ0LmRlbGV0ZShpZCk7XG4gICAgaWYgKHRoaXMuY2FwdHVyZWRJZCA9PT0gaWQpIHtcbiAgICAgIHRoaXMuY2FwdHVyZWRJZCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cbiAgZGlzYWJsZUdlc3R1cmUoZ2VzdHVyZU5hbWUsIGlkKSB7XG4gICAgbGV0IHNldCA9IHRoaXMuZGlzYWJsZWRHZXN0dXJlcy5nZXQoZ2VzdHVyZU5hbWUpO1xuICAgIGlmIChzZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgc2V0ID0gbmV3IFNldCgpO1xuICAgICAgdGhpcy5kaXNhYmxlZEdlc3R1cmVzLnNldChnZXN0dXJlTmFtZSwgc2V0KTtcbiAgICB9XG4gICAgc2V0LmFkZChpZCk7XG4gIH1cbiAgZW5hYmxlR2VzdHVyZShnZXN0dXJlTmFtZSwgaWQpIHtcbiAgICBjb25zdCBzZXQgPSB0aGlzLmRpc2FibGVkR2VzdHVyZXMuZ2V0KGdlc3R1cmVOYW1lKTtcbiAgICBpZiAoc2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHNldC5kZWxldGUoaWQpO1xuICAgIH1cbiAgfVxuICBkaXNhYmxlU2Nyb2xsKGlkKSB7XG4gICAgdGhpcy5kaXNhYmxlZFNjcm9sbC5hZGQoaWQpO1xuICAgIGlmICh0aGlzLmRpc2FibGVkU2Nyb2xsLnNpemUgPT09IDEpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChCQUNLRFJPUF9OT19TQ1JPTEwpO1xuICAgIH1cbiAgfVxuICBlbmFibGVTY3JvbGwoaWQpIHtcbiAgICB0aGlzLmRpc2FibGVkU2Nyb2xsLmRlbGV0ZShpZCk7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWRTY3JvbGwuc2l6ZSA9PT0gMCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKEJBQ0tEUk9QX05PX1NDUk9MTCk7XG4gICAgfVxuICB9XG4gIGNhblN0YXJ0KGdlc3R1cmVOYW1lKSB7XG4gICAgaWYgKHRoaXMuY2FwdHVyZWRJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBhIGdlc3R1cmUgYWxyZWFkeSBjYXB0dXJlZFxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc0Rpc2FibGVkKGdlc3R1cmVOYW1lKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpc0NhcHR1cmVkKCkge1xuICAgIHJldHVybiB0aGlzLmNhcHR1cmVkSWQgIT09IHVuZGVmaW5lZDtcbiAgfVxuICBpc1Njcm9sbERpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmRpc2FibGVkU2Nyb2xsLnNpemUgPiAwO1xuICB9XG4gIGlzRGlzYWJsZWQoZ2VzdHVyZU5hbWUpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRHZXN0dXJlcy5nZXQoZ2VzdHVyZU5hbWUpO1xuICAgIGlmIChkaXNhYmxlZCAmJiBkaXNhYmxlZC5zaXplID4gMCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBuZXdJRCgpIHtcbiAgICB0aGlzLmdlc3R1cmVJZCsrO1xuICAgIHJldHVybiB0aGlzLmdlc3R1cmVJZDtcbiAgfVxufVxuY2xhc3MgR2VzdHVyZURlbGVnYXRlIHtcbiAgY29uc3RydWN0b3IoY3RybCwgaWQsIG5hbWUsIHByaW9yaXR5LCBkaXNhYmxlU2Nyb2xsKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kaXNhYmxlU2Nyb2xsID0gZGlzYWJsZVNjcm9sbDtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHkgKiAxMDAwMDAwICsgaWQ7XG4gICAgdGhpcy5jdHJsID0gY3RybDtcbiAgfVxuICBjYW5TdGFydCgpIHtcbiAgICBpZiAoIXRoaXMuY3RybCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jdHJsLmNhblN0YXJ0KHRoaXMubmFtZSk7XG4gIH1cbiAgc3RhcnQoKSB7XG4gICAgaWYgKCF0aGlzLmN0cmwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY3RybC5zdGFydCh0aGlzLm5hbWUsIHRoaXMuaWQsIHRoaXMucHJpb3JpdHkpO1xuICB9XG4gIGNhcHR1cmUoKSB7XG4gICAgaWYgKCF0aGlzLmN0cmwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgY2FwdHVyZWQgPSB0aGlzLmN0cmwuY2FwdHVyZSh0aGlzLm5hbWUsIHRoaXMuaWQsIHRoaXMucHJpb3JpdHkpO1xuICAgIGlmIChjYXB0dXJlZCAmJiB0aGlzLmRpc2FibGVTY3JvbGwpIHtcbiAgICAgIHRoaXMuY3RybC5kaXNhYmxlU2Nyb2xsKHRoaXMuaWQpO1xuICAgIH1cbiAgICByZXR1cm4gY2FwdHVyZWQ7XG4gIH1cbiAgcmVsZWFzZSgpIHtcbiAgICBpZiAodGhpcy5jdHJsKSB7XG4gICAgICB0aGlzLmN0cmwucmVsZWFzZSh0aGlzLmlkKTtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVTY3JvbGwpIHtcbiAgICAgICAgdGhpcy5jdHJsLmVuYWJsZVNjcm9sbCh0aGlzLmlkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLnJlbGVhc2UoKTtcbiAgICB0aGlzLmN0cmwgPSB1bmRlZmluZWQ7XG4gIH1cbn1cbmNsYXNzIEJsb2NrZXJEZWxlZ2F0ZSB7XG4gIGNvbnN0cnVjdG9yKGN0cmwsIGlkLCBkaXNhYmxlLCBkaXNhYmxlU2Nyb2xsKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMuZGlzYWJsZSA9IGRpc2FibGU7XG4gICAgdGhpcy5kaXNhYmxlU2Nyb2xsID0gZGlzYWJsZVNjcm9sbDtcbiAgICB0aGlzLmN0cmwgPSBjdHJsO1xuICB9XG4gIGJsb2NrKCkge1xuICAgIGlmICghdGhpcy5jdHJsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmRpc2FibGUpIHtcbiAgICAgIGZvciAoY29uc3QgZ2VzdHVyZSBvZiB0aGlzLmRpc2FibGUpIHtcbiAgICAgICAgdGhpcy5jdHJsLmRpc2FibGVHZXN0dXJlKGdlc3R1cmUsIHRoaXMuaWQpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5kaXNhYmxlU2Nyb2xsKSB7XG4gICAgICB0aGlzLmN0cmwuZGlzYWJsZVNjcm9sbCh0aGlzLmlkKTtcbiAgICB9XG4gIH1cbiAgdW5ibG9jaygpIHtcbiAgICBpZiAoIXRoaXMuY3RybCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5kaXNhYmxlKSB7XG4gICAgICBmb3IgKGNvbnN0IGdlc3R1cmUgb2YgdGhpcy5kaXNhYmxlKSB7XG4gICAgICAgIHRoaXMuY3RybC5lbmFibGVHZXN0dXJlKGdlc3R1cmUsIHRoaXMuaWQpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5kaXNhYmxlU2Nyb2xsKSB7XG4gICAgICB0aGlzLmN0cmwuZW5hYmxlU2Nyb2xsKHRoaXMuaWQpO1xuICAgIH1cbiAgfVxuICBkZXN0cm95KCkge1xuICAgIHRoaXMudW5ibG9jaygpO1xuICAgIHRoaXMuY3RybCA9IHVuZGVmaW5lZDtcbiAgfVxufVxuY29uc3QgQkFDS0RST1BfTk9fU0NST0xMID0gJ2JhY2tkcm9wLW5vLXNjcm9sbCc7XG5jb25zdCBHRVNUVVJFX0NPTlRST0xMRVIgPSBuZXcgR2VzdHVyZUNvbnRyb2xsZXIoKTtcbmV4cG9ydCB7IEJBQ0tEUk9QX05PX1NDUk9MTCBhcyBCLCBHRVNUVVJFX0NPTlRST0xMRVIgYXMgRyB9OyIsIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyBHIGFzIEdFU1RVUkVfQ09OVFJPTExFUiB9IGZyb20gJy4vZ2VzdHVyZS1jb250cm9sbGVyLmpzJztcbmNvbnN0IGFkZEV2ZW50TGlzdGVuZXIgPSAoZWwsXG4vLyBUT0RPKEZXLTI4MzIpOiB0eXBlXG5ldmVudE5hbWUsIGNhbGxiYWNrLCBvcHRzKSA9PiB7XG4gIC8vIHVzZSBldmVudCBsaXN0ZW5lciBvcHRpb25zIHdoZW4gc3VwcG9ydGVkXG4gIC8vIG90aGVyd2lzZSBpdCdzIGp1c3QgYSBib29sZWFuIGZvciB0aGUgXCJjYXB0dXJlXCIgYXJnXG4gIGNvbnN0IGxpc3RlbmVyT3B0cyA9IHN1cHBvcnRzUGFzc2l2ZShlbCkgPyB7XG4gICAgY2FwdHVyZTogZmFsc2UsXG4gICAgcGFzc2l2ZTogISFvcHRzLnBhc3NpdmVcbiAgfSA6IGZhbHNlO1xuICBsZXQgYWRkO1xuICBsZXQgcmVtb3ZlO1xuICBpZiAoZWxbJ19fem9uZV9zeW1ib2xfX2FkZEV2ZW50TGlzdGVuZXInXSkge1xuICAgIGFkZCA9ICdfX3pvbmVfc3ltYm9sX19hZGRFdmVudExpc3RlbmVyJztcbiAgICByZW1vdmUgPSAnX196b25lX3N5bWJvbF9fcmVtb3ZlRXZlbnRMaXN0ZW5lcic7XG4gIH0gZWxzZSB7XG4gICAgYWRkID0gJ2FkZEV2ZW50TGlzdGVuZXInO1xuICAgIHJlbW92ZSA9ICdyZW1vdmVFdmVudExpc3RlbmVyJztcbiAgfVxuICBlbFthZGRdKGV2ZW50TmFtZSwgY2FsbGJhY2ssIGxpc3RlbmVyT3B0cyk7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgZWxbcmVtb3ZlXShldmVudE5hbWUsIGNhbGxiYWNrLCBsaXN0ZW5lck9wdHMpO1xuICB9O1xufTtcbmNvbnN0IHN1cHBvcnRzUGFzc2l2ZSA9IG5vZGUgPT4ge1xuICBpZiAoX3NQYXNzaXZlID09PSB1bmRlZmluZWQpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgb3B0cyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ3Bhc3NpdmUnLCB7XG4gICAgICAgIGdldDogKCkgPT4ge1xuICAgICAgICAgIF9zUGFzc2l2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdvcHRzVGVzdCcsICgpID0+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSwgb3B0cyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgX3NQYXNzaXZlID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiAhIV9zUGFzc2l2ZTtcbn07XG5sZXQgX3NQYXNzaXZlO1xuY29uc3QgTU9VU0VfV0FJVCA9IDIwMDA7XG4vLyBUT0RPKEZXLTI4MzIpOiB0eXBlc1xuY29uc3QgY3JlYXRlUG9pbnRlckV2ZW50cyA9IChlbCwgcG9pbnRlckRvd24sIHBvaW50ZXJNb3ZlLCBwb2ludGVyVXAsIG9wdGlvbnMpID0+IHtcbiAgbGV0IHJtVG91Y2hTdGFydDtcbiAgbGV0IHJtVG91Y2hNb3ZlO1xuICBsZXQgcm1Ub3VjaEVuZDtcbiAgbGV0IHJtVG91Y2hDYW5jZWw7XG4gIGxldCBybU1vdXNlU3RhcnQ7XG4gIGxldCBybU1vdXNlTW92ZTtcbiAgbGV0IHJtTW91c2VVcDtcbiAgbGV0IGxhc3RUb3VjaEV2ZW50ID0gMDtcbiAgY29uc3QgaGFuZGxlVG91Y2hTdGFydCA9IGV2ID0+IHtcbiAgICBsYXN0VG91Y2hFdmVudCA9IERhdGUubm93KCkgKyBNT1VTRV9XQUlUO1xuICAgIGlmICghcG9pbnRlckRvd24oZXYpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghcm1Ub3VjaE1vdmUgJiYgcG9pbnRlck1vdmUpIHtcbiAgICAgIHJtVG91Y2hNb3ZlID0gYWRkRXZlbnRMaXN0ZW5lcihlbCwgJ3RvdWNobW92ZScsIHBvaW50ZXJNb3ZlLCBvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRXZlbnRzIGFyZSBkaXNwYXRjaGVkIG9uIHRoZSBlbGVtZW50IHRoYXQgaXMgdGFwcGVkIGFuZCBidWJibGUgdXAgdG9cbiAgICAgKiB0aGUgcmVmZXJlbmNlIGVsZW1lbnQgaW4gdGhlIGdlc3R1cmUuIEluIHRoZSBldmVudCB0aGF0IHRoZSBlbGVtZW50IHRoaXNcbiAgICAgKiBldmVudCB3YXMgZmlyc3QgZGlzcGF0Y2hlZCBvbiBpcyByZW1vdmVkIGZyb20gdGhlIERPTSwgdGhlIGV2ZW50IHdpbGwgbm9cbiAgICAgKiBsb25nZXIgYnViYmxlIHVwIHRvIG91ciByZWZlcmVuY2UgZWxlbWVudC4gVGhpcyBsZWF2ZXMgdGhlIGdlc3R1cmUgaW4gYW5cbiAgICAgKiB1bnVzYWJsZSBzdGF0ZS4gVG8gYWNjb3VudCBmb3IgdGhpcywgdGhlIHRvdWNoZW5kIGFuZCB0b3VjaGNhbmNlbCBsaXN0ZW5lcnNcbiAgICAgKiBzaG91bGQgYmUgYWRkZWQgdG8gdGhlIGV2ZW50IHRhcmdldCBzbyB0aGF0IHRoZXkgc3RpbGwgZmlyZSBldmVuIGlmIHRoZSB0YXJnZXRcbiAgICAgKiBpcyByZW1vdmVkIGZyb20gdGhlIERPTS5cbiAgICAgKi9cbiAgICBpZiAoIXJtVG91Y2hFbmQpIHtcbiAgICAgIHJtVG91Y2hFbmQgPSBhZGRFdmVudExpc3RlbmVyKGV2LnRhcmdldCwgJ3RvdWNoZW5kJywgaGFuZGxlVG91Y2hFbmQsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBpZiAoIXJtVG91Y2hDYW5jZWwpIHtcbiAgICAgIHJtVG91Y2hDYW5jZWwgPSBhZGRFdmVudExpc3RlbmVyKGV2LnRhcmdldCwgJ3RvdWNoY2FuY2VsJywgaGFuZGxlVG91Y2hFbmQsIG9wdGlvbnMpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgaGFuZGxlTW91c2VEb3duID0gZXYgPT4ge1xuICAgIGlmIChsYXN0VG91Y2hFdmVudCA+IERhdGUubm93KCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFwb2ludGVyRG93bihldikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFybU1vdXNlTW92ZSAmJiBwb2ludGVyTW92ZSkge1xuICAgICAgcm1Nb3VzZU1vdmUgPSBhZGRFdmVudExpc3RlbmVyKGdldERvY3VtZW50KGVsKSwgJ21vdXNlbW92ZScsIHBvaW50ZXJNb3ZlLCBvcHRpb25zKTtcbiAgICB9XG4gICAgaWYgKCFybU1vdXNlVXApIHtcbiAgICAgIHJtTW91c2VVcCA9IGFkZEV2ZW50TGlzdGVuZXIoZ2V0RG9jdW1lbnQoZWwpLCAnbW91c2V1cCcsIGhhbmRsZU1vdXNlVXAsIG9wdGlvbnMpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgaGFuZGxlVG91Y2hFbmQgPSBldiA9PiB7XG4gICAgc3RvcFRvdWNoKCk7XG4gICAgaWYgKHBvaW50ZXJVcCkge1xuICAgICAgcG9pbnRlclVwKGV2KTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGhhbmRsZU1vdXNlVXAgPSBldiA9PiB7XG4gICAgc3RvcE1vdXNlKCk7XG4gICAgaWYgKHBvaW50ZXJVcCkge1xuICAgICAgcG9pbnRlclVwKGV2KTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHN0b3BUb3VjaCA9ICgpID0+IHtcbiAgICBpZiAocm1Ub3VjaE1vdmUpIHtcbiAgICAgIHJtVG91Y2hNb3ZlKCk7XG4gICAgfVxuICAgIGlmIChybVRvdWNoRW5kKSB7XG4gICAgICBybVRvdWNoRW5kKCk7XG4gICAgfVxuICAgIGlmIChybVRvdWNoQ2FuY2VsKSB7XG4gICAgICBybVRvdWNoQ2FuY2VsKCk7XG4gICAgfVxuICAgIHJtVG91Y2hNb3ZlID0gcm1Ub3VjaEVuZCA9IHJtVG91Y2hDYW5jZWwgPSB1bmRlZmluZWQ7XG4gIH07XG4gIGNvbnN0IHN0b3BNb3VzZSA9ICgpID0+IHtcbiAgICBpZiAocm1Nb3VzZU1vdmUpIHtcbiAgICAgIHJtTW91c2VNb3ZlKCk7XG4gICAgfVxuICAgIGlmIChybU1vdXNlVXApIHtcbiAgICAgIHJtTW91c2VVcCgpO1xuICAgIH1cbiAgICBybU1vdXNlTW92ZSA9IHJtTW91c2VVcCA9IHVuZGVmaW5lZDtcbiAgfTtcbiAgY29uc3Qgc3RvcCA9ICgpID0+IHtcbiAgICBzdG9wVG91Y2goKTtcbiAgICBzdG9wTW91c2UoKTtcbiAgfTtcbiAgY29uc3QgZW5hYmxlID0gKGlzRW5hYmxlZCA9IHRydWUpID0+IHtcbiAgICBpZiAoIWlzRW5hYmxlZCkge1xuICAgICAgaWYgKHJtVG91Y2hTdGFydCkge1xuICAgICAgICBybVRvdWNoU3RhcnQoKTtcbiAgICAgIH1cbiAgICAgIGlmIChybU1vdXNlU3RhcnQpIHtcbiAgICAgICAgcm1Nb3VzZVN0YXJ0KCk7XG4gICAgICB9XG4gICAgICBybVRvdWNoU3RhcnQgPSBybU1vdXNlU3RhcnQgPSB1bmRlZmluZWQ7XG4gICAgICBzdG9wKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghcm1Ub3VjaFN0YXJ0KSB7XG4gICAgICAgIHJtVG91Y2hTdGFydCA9IGFkZEV2ZW50TGlzdGVuZXIoZWwsICd0b3VjaHN0YXJ0JywgaGFuZGxlVG91Y2hTdGFydCwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgICBpZiAoIXJtTW91c2VTdGFydCkge1xuICAgICAgICBybU1vdXNlU3RhcnQgPSBhZGRFdmVudExpc3RlbmVyKGVsLCAnbW91c2Vkb3duJywgaGFuZGxlTW91c2VEb3duLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGNvbnN0IGRlc3Ryb3kgPSAoKSA9PiB7XG4gICAgZW5hYmxlKGZhbHNlKTtcbiAgICBwb2ludGVyVXAgPSBwb2ludGVyTW92ZSA9IHBvaW50ZXJEb3duID0gdW5kZWZpbmVkO1xuICB9O1xuICByZXR1cm4ge1xuICAgIGVuYWJsZSxcbiAgICBzdG9wLFxuICAgIGRlc3Ryb3lcbiAgfTtcbn07XG5jb25zdCBnZXREb2N1bWVudCA9IG5vZGUgPT4ge1xuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIERvY3VtZW50ID8gbm9kZSA6IG5vZGUub3duZXJEb2N1bWVudDtcbn07XG5jb25zdCBjcmVhdGVQYW5SZWNvZ25pemVyID0gKGRpcmVjdGlvbiwgdGhyZXNoLCBtYXhBbmdsZSkgPT4ge1xuICBjb25zdCByYWRpYW5zID0gbWF4QW5nbGUgKiAoTWF0aC5QSSAvIDE4MCk7XG4gIGNvbnN0IGlzRGlyWCA9IGRpcmVjdGlvbiA9PT0gJ3gnO1xuICBjb25zdCBtYXhDb3NpbmUgPSBNYXRoLmNvcyhyYWRpYW5zKTtcbiAgY29uc3QgdGhyZXNob2xkID0gdGhyZXNoICogdGhyZXNoO1xuICBsZXQgc3RhcnRYID0gMDtcbiAgbGV0IHN0YXJ0WSA9IDA7XG4gIGxldCBkaXJ0eSA9IGZhbHNlO1xuICBsZXQgaXNQYW4gPSAwO1xuICByZXR1cm4ge1xuICAgIHN0YXJ0KHgsIHkpIHtcbiAgICAgIHN0YXJ0WCA9IHg7XG4gICAgICBzdGFydFkgPSB5O1xuICAgICAgaXNQYW4gPSAwO1xuICAgICAgZGlydHkgPSB0cnVlO1xuICAgIH0sXG4gICAgZGV0ZWN0KHgsIHkpIHtcbiAgICAgIGlmICghZGlydHkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgY29uc3QgZGVsdGFYID0geCAtIHN0YXJ0WDtcbiAgICAgIGNvbnN0IGRlbHRhWSA9IHkgLSBzdGFydFk7XG4gICAgICBjb25zdCBkaXN0YW5jZSA9IGRlbHRhWCAqIGRlbHRhWCArIGRlbHRhWSAqIGRlbHRhWTtcbiAgICAgIGlmIChkaXN0YW5jZSA8IHRocmVzaG9sZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBjb25zdCBoeXBvdGVudXNlID0gTWF0aC5zcXJ0KGRpc3RhbmNlKTtcbiAgICAgIGNvbnN0IGNvc2luZSA9IChpc0RpclggPyBkZWx0YVggOiBkZWx0YVkpIC8gaHlwb3RlbnVzZTtcbiAgICAgIGlmIChjb3NpbmUgPiBtYXhDb3NpbmUpIHtcbiAgICAgICAgaXNQYW4gPSAxO1xuICAgICAgfSBlbHNlIGlmIChjb3NpbmUgPCAtbWF4Q29zaW5lKSB7XG4gICAgICAgIGlzUGFuID0gLTE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpc1BhbiA9IDA7XG4gICAgICB9XG4gICAgICBkaXJ0eSA9IGZhbHNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBpc0dlc3R1cmUoKSB7XG4gICAgICByZXR1cm4gaXNQYW4gIT09IDA7XG4gICAgfSxcbiAgICBnZXREaXJlY3Rpb24oKSB7XG4gICAgICByZXR1cm4gaXNQYW47XG4gICAgfVxuICB9O1xufTtcblxuLy8gVE9ETyhGVy0yODMyKTogdHlwZXNcbmNvbnN0IGNyZWF0ZUdlc3R1cmUgPSBjb25maWcgPT4ge1xuICBsZXQgaGFzQ2FwdHVyZWRQYW4gPSBmYWxzZTtcbiAgbGV0IGhhc1N0YXJ0ZWRQYW4gPSBmYWxzZTtcbiAgbGV0IGhhc0ZpcmVkU3RhcnQgPSB0cnVlO1xuICBsZXQgaXNNb3ZlUXVldWVkID0gZmFsc2U7XG4gIGNvbnN0IGZpbmFsQ29uZmlnID0gT2JqZWN0LmFzc2lnbih7XG4gICAgZGlzYWJsZVNjcm9sbDogZmFsc2UsXG4gICAgZGlyZWN0aW9uOiAneCcsXG4gICAgZ2VzdHVyZVByaW9yaXR5OiAwLFxuICAgIHBhc3NpdmU6IHRydWUsXG4gICAgbWF4QW5nbGU6IDQwLFxuICAgIHRocmVzaG9sZDogMTBcbiAgfSwgY29uZmlnKTtcbiAgY29uc3QgY2FuU3RhcnQgPSBmaW5hbENvbmZpZy5jYW5TdGFydDtcbiAgY29uc3Qgb25XaWxsU3RhcnQgPSBmaW5hbENvbmZpZy5vbldpbGxTdGFydDtcbiAgY29uc3Qgb25TdGFydCA9IGZpbmFsQ29uZmlnLm9uU3RhcnQ7XG4gIGNvbnN0IG9uRW5kID0gZmluYWxDb25maWcub25FbmQ7XG4gIGNvbnN0IG5vdENhcHR1cmVkID0gZmluYWxDb25maWcubm90Q2FwdHVyZWQ7XG4gIGNvbnN0IG9uTW92ZSA9IGZpbmFsQ29uZmlnLm9uTW92ZTtcbiAgY29uc3QgdGhyZXNob2xkID0gZmluYWxDb25maWcudGhyZXNob2xkO1xuICBjb25zdCBwYXNzaXZlID0gZmluYWxDb25maWcucGFzc2l2ZTtcbiAgY29uc3QgYmx1ck9uU3RhcnQgPSBmaW5hbENvbmZpZy5ibHVyT25TdGFydDtcbiAgY29uc3QgZGV0YWlsID0ge1xuICAgIHR5cGU6ICdwYW4nLFxuICAgIHN0YXJ0WDogMCxcbiAgICBzdGFydFk6IDAsXG4gICAgc3RhcnRUaW1lOiAwLFxuICAgIGN1cnJlbnRYOiAwLFxuICAgIGN1cnJlbnRZOiAwLFxuICAgIHZlbG9jaXR5WDogMCxcbiAgICB2ZWxvY2l0eVk6IDAsXG4gICAgZGVsdGFYOiAwLFxuICAgIGRlbHRhWTogMCxcbiAgICBjdXJyZW50VGltZTogMCxcbiAgICBldmVudDogdW5kZWZpbmVkLFxuICAgIGRhdGE6IHVuZGVmaW5lZFxuICB9O1xuICBjb25zdCBwYW4gPSBjcmVhdGVQYW5SZWNvZ25pemVyKGZpbmFsQ29uZmlnLmRpcmVjdGlvbiwgZmluYWxDb25maWcudGhyZXNob2xkLCBmaW5hbENvbmZpZy5tYXhBbmdsZSk7XG4gIGNvbnN0IGdlc3R1cmUgPSBHRVNUVVJFX0NPTlRST0xMRVIuY3JlYXRlR2VzdHVyZSh7XG4gICAgbmFtZTogY29uZmlnLmdlc3R1cmVOYW1lLFxuICAgIHByaW9yaXR5OiBjb25maWcuZ2VzdHVyZVByaW9yaXR5LFxuICAgIGRpc2FibGVTY3JvbGw6IGNvbmZpZy5kaXNhYmxlU2Nyb2xsXG4gIH0pO1xuICBjb25zdCBwb2ludGVyRG93biA9IGV2ID0+IHtcbiAgICBjb25zdCB0aW1lU3RhbXAgPSBub3coZXYpO1xuICAgIGlmIChoYXNTdGFydGVkUGFuIHx8ICFoYXNGaXJlZFN0YXJ0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHVwZGF0ZURldGFpbChldiwgZGV0YWlsKTtcbiAgICBkZXRhaWwuc3RhcnRYID0gZGV0YWlsLmN1cnJlbnRYO1xuICAgIGRldGFpbC5zdGFydFkgPSBkZXRhaWwuY3VycmVudFk7XG4gICAgZGV0YWlsLnN0YXJ0VGltZSA9IGRldGFpbC5jdXJyZW50VGltZSA9IHRpbWVTdGFtcDtcbiAgICBkZXRhaWwudmVsb2NpdHlYID0gZGV0YWlsLnZlbG9jaXR5WSA9IGRldGFpbC5kZWx0YVggPSBkZXRhaWwuZGVsdGFZID0gMDtcbiAgICBkZXRhaWwuZXZlbnQgPSBldjtcbiAgICAvLyBDaGVjayBpZiBnZXN0dXJlIGNhbiBzdGFydFxuICAgIGlmIChjYW5TdGFydCAmJiBjYW5TdGFydChkZXRhaWwpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBSZWxlYXNlIGZhbGxiYWNrXG4gICAgZ2VzdHVyZS5yZWxlYXNlKCk7XG4gICAgLy8gU3RhcnQgZ2VzdHVyZVxuICAgIGlmICghZ2VzdHVyZS5zdGFydCgpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGhhc1N0YXJ0ZWRQYW4gPSB0cnVlO1xuICAgIGlmICh0aHJlc2hvbGQgPT09IDApIHtcbiAgICAgIHJldHVybiB0cnlUb0NhcHR1cmVQYW4oKTtcbiAgICB9XG4gICAgcGFuLnN0YXJ0KGRldGFpbC5zdGFydFgsIGRldGFpbC5zdGFydFkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuICBjb25zdCBwb2ludGVyTW92ZSA9IGV2ID0+IHtcbiAgICAvLyBmYXN0IHBhdGgsIGlmIGdlc3R1cmUgaXMgY3VycmVudGx5IGNhcHR1cmVkXG4gICAgLy8gZG8gbWluaW11bSBqb2IgdG8gZ2V0IHVzZXItbGFuZCBldmVuIGRpc3BhdGNoZWRcbiAgICBpZiAoaGFzQ2FwdHVyZWRQYW4pIHtcbiAgICAgIGlmICghaXNNb3ZlUXVldWVkICYmIGhhc0ZpcmVkU3RhcnQpIHtcbiAgICAgICAgaXNNb3ZlUXVldWVkID0gdHJ1ZTtcbiAgICAgICAgY2FsY0dlc3R1cmVEYXRhKGRldGFpbCwgZXYpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZmlyZU9uTW92ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGdlc3R1cmUgaXMgY3VycmVudGx5IGJlaW5nIGRldGVjdGVkXG4gICAgY2FsY0dlc3R1cmVEYXRhKGRldGFpbCwgZXYpO1xuICAgIGlmIChwYW4uZGV0ZWN0KGRldGFpbC5jdXJyZW50WCwgZGV0YWlsLmN1cnJlbnRZKSkge1xuICAgICAgaWYgKCFwYW4uaXNHZXN0dXJlKCkgfHwgIXRyeVRvQ2FwdHVyZVBhbigpKSB7XG4gICAgICAgIGFib3J0R2VzdHVyZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgY29uc3QgZmlyZU9uTW92ZSA9ICgpID0+IHtcbiAgICAvLyBTaW5jZSBmaXJlT25Nb3ZlIGlzIGNhbGxlZCBpbnNpZGUgYSBSQUYsIG9uRW5kKCkgbWlnaHQgYmUgY2FsbGVkLFxuICAgIC8vIHdlIG11c3QgZG91YmxlIGNoZWNrIGhhc0NhcHR1cmVkUGFuXG4gICAgaWYgKCFoYXNDYXB0dXJlZFBhbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpc01vdmVRdWV1ZWQgPSBmYWxzZTtcbiAgICBpZiAob25Nb3ZlKSB7XG4gICAgICBvbk1vdmUoZGV0YWlsKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHRyeVRvQ2FwdHVyZVBhbiA9ICgpID0+IHtcbiAgICBpZiAoIWdlc3R1cmUuY2FwdHVyZSgpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGhhc0NhcHR1cmVkUGFuID0gdHJ1ZTtcbiAgICBoYXNGaXJlZFN0YXJ0ID0gZmFsc2U7XG4gICAgLy8gcmVzZXQgc3RhcnQgcG9zaXRpb24gc2luY2UgdGhlIHJlYWwgdXNlci1sYW5kIGV2ZW50IHN0YXJ0cyBoZXJlXG4gICAgLy8gSWYgdGhlIHBhbiBkZXRlY3RvciB0aHJlc2hvbGQgaXMgYmlnLCBub3QgcmVzZXR0aW5nIHRoZSBzdGFydCBwb3NpdGlvblxuICAgIC8vIHdpbGwgY2F1c2UgYSBqdW1wIGluIHRoZSBhbmltYXRpb24gZXF1YWwgdG8gdGhlIGRldGVjdG9yIHRocmVzaG9sZC5cbiAgICAvLyB0aGUgYXJyYXkgb2YgcG9zaXRpb25zIHVzZWQgdG8gY2FsY3VsYXRlIHRoZSBnZXN0dXJlIHZlbG9jaXR5IGRvZXMgbm90XG4gICAgLy8gbmVlZCB0byBiZSBjbGVhbmVkLCBtb3JlIHBvaW50cyBpbiB0aGUgcG9zaXRpb25zIGFycmF5IGFsd2F5cyByZXN1bHRzIGluIGFcbiAgICAvLyBtb3JlIGFjY3VyYXRlIHZhbHVlIG9mIHRoZSB2ZWxvY2l0eS5cbiAgICBkZXRhaWwuc3RhcnRYID0gZGV0YWlsLmN1cnJlbnRYO1xuICAgIGRldGFpbC5zdGFydFkgPSBkZXRhaWwuY3VycmVudFk7XG4gICAgZGV0YWlsLnN0YXJ0VGltZSA9IGRldGFpbC5jdXJyZW50VGltZTtcbiAgICBpZiAob25XaWxsU3RhcnQpIHtcbiAgICAgIG9uV2lsbFN0YXJ0KGRldGFpbCkudGhlbihmaXJlT25TdGFydCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpcmVPblN0YXJ0KCk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuICBjb25zdCBibHVyQWN0aXZlRWxlbWVudCA9ICgpID0+IHtcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc3QgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICBpZiAoYWN0aXZlRWxlbWVudCA9PT0gbnVsbCB8fCBhY3RpdmVFbGVtZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhY3RpdmVFbGVtZW50LmJsdXIpIHtcbiAgICAgICAgYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBjb25zdCBmaXJlT25TdGFydCA9ICgpID0+IHtcbiAgICBpZiAoYmx1ck9uU3RhcnQpIHtcbiAgICAgIGJsdXJBY3RpdmVFbGVtZW50KCk7XG4gICAgfVxuICAgIGlmIChvblN0YXJ0KSB7XG4gICAgICBvblN0YXJ0KGRldGFpbCk7XG4gICAgfVxuICAgIGhhc0ZpcmVkU3RhcnQgPSB0cnVlO1xuICB9O1xuICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICBoYXNDYXB0dXJlZFBhbiA9IGZhbHNlO1xuICAgIGhhc1N0YXJ0ZWRQYW4gPSBmYWxzZTtcbiAgICBpc01vdmVRdWV1ZWQgPSBmYWxzZTtcbiAgICBoYXNGaXJlZFN0YXJ0ID0gdHJ1ZTtcbiAgICBnZXN0dXJlLnJlbGVhc2UoKTtcbiAgfTtcbiAgLy8gRU5EICoqKioqKioqKioqKioqKioqKioqKioqKipcbiAgY29uc3QgcG9pbnRlclVwID0gZXYgPT4ge1xuICAgIGNvbnN0IHRtcEhhc0NhcHR1cmVkID0gaGFzQ2FwdHVyZWRQYW47XG4gICAgY29uc3QgdG1wSGFzRmlyZWRTdGFydCA9IGhhc0ZpcmVkU3RhcnQ7XG4gICAgcmVzZXQoKTtcbiAgICBpZiAoIXRtcEhhc0ZpcmVkU3RhcnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2FsY0dlc3R1cmVEYXRhKGRldGFpbCwgZXYpO1xuICAgIC8vIFRyeSB0byBjYXB0dXJlIHByZXNzXG4gICAgaWYgKHRtcEhhc0NhcHR1cmVkKSB7XG4gICAgICBpZiAob25FbmQpIHtcbiAgICAgICAgb25FbmQoZGV0YWlsKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gTm90IGNhcHR1cmVkIGFueSBldmVudFxuICAgIGlmIChub3RDYXB0dXJlZCkge1xuICAgICAgbm90Q2FwdHVyZWQoZGV0YWlsKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHBvaW50ZXJFdmVudHMgPSBjcmVhdGVQb2ludGVyRXZlbnRzKGZpbmFsQ29uZmlnLmVsLCBwb2ludGVyRG93biwgcG9pbnRlck1vdmUsIHBvaW50ZXJVcCwge1xuICAgIHBhc3NpdmVcbiAgfSk7XG4gIGNvbnN0IGFib3J0R2VzdHVyZSA9ICgpID0+IHtcbiAgICByZXNldCgpO1xuICAgIHBvaW50ZXJFdmVudHMuc3RvcCgpO1xuICAgIGlmIChub3RDYXB0dXJlZCkge1xuICAgICAgbm90Q2FwdHVyZWQoZGV0YWlsKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB7XG4gICAgZW5hYmxlKGVuYWJsZSA9IHRydWUpIHtcbiAgICAgIGlmICghZW5hYmxlKSB7XG4gICAgICAgIGlmIChoYXNDYXB0dXJlZFBhbikge1xuICAgICAgICAgIHBvaW50ZXJVcCh1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgICAgIHJlc2V0KCk7XG4gICAgICB9XG4gICAgICBwb2ludGVyRXZlbnRzLmVuYWJsZShlbmFibGUpO1xuICAgIH0sXG4gICAgZGVzdHJveSgpIHtcbiAgICAgIGdlc3R1cmUuZGVzdHJveSgpO1xuICAgICAgcG9pbnRlckV2ZW50cy5kZXN0cm95KCk7XG4gICAgfVxuICB9O1xufTtcbmNvbnN0IGNhbGNHZXN0dXJlRGF0YSA9IChkZXRhaWwsIGV2KSA9PiB7XG4gIGlmICghZXYpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgcHJldlggPSBkZXRhaWwuY3VycmVudFg7XG4gIGNvbnN0IHByZXZZID0gZGV0YWlsLmN1cnJlbnRZO1xuICBjb25zdCBwcmV2VCA9IGRldGFpbC5jdXJyZW50VGltZTtcbiAgdXBkYXRlRGV0YWlsKGV2LCBkZXRhaWwpO1xuICBjb25zdCBjdXJyZW50WCA9IGRldGFpbC5jdXJyZW50WDtcbiAgY29uc3QgY3VycmVudFkgPSBkZXRhaWwuY3VycmVudFk7XG4gIGNvbnN0IHRpbWVzdGFtcCA9IGRldGFpbC5jdXJyZW50VGltZSA9IG5vdyhldik7XG4gIGNvbnN0IHRpbWVEZWx0YSA9IHRpbWVzdGFtcCAtIHByZXZUO1xuICBpZiAodGltZURlbHRhID4gMCAmJiB0aW1lRGVsdGEgPCAxMDApIHtcbiAgICBjb25zdCB2ZWxvY2l0eVggPSAoY3VycmVudFggLSBwcmV2WCkgLyB0aW1lRGVsdGE7XG4gICAgY29uc3QgdmVsb2NpdHlZID0gKGN1cnJlbnRZIC0gcHJldlkpIC8gdGltZURlbHRhO1xuICAgIGRldGFpbC52ZWxvY2l0eVggPSB2ZWxvY2l0eVggKiAwLjcgKyBkZXRhaWwudmVsb2NpdHlYICogMC4zO1xuICAgIGRldGFpbC52ZWxvY2l0eVkgPSB2ZWxvY2l0eVkgKiAwLjcgKyBkZXRhaWwudmVsb2NpdHlZICogMC4zO1xuICB9XG4gIGRldGFpbC5kZWx0YVggPSBjdXJyZW50WCAtIGRldGFpbC5zdGFydFg7XG4gIGRldGFpbC5kZWx0YVkgPSBjdXJyZW50WSAtIGRldGFpbC5zdGFydFk7XG4gIGRldGFpbC5ldmVudCA9IGV2O1xufTtcbmNvbnN0IHVwZGF0ZURldGFpbCA9IChldiwgZGV0YWlsKSA9PiB7XG4gIC8vIGdldCBYIGNvb3JkaW5hdGVzIGZvciBlaXRoZXIgYSBtb3VzZSBjbGlja1xuICAvLyBvciBhIHRvdWNoIGRlcGVuZGluZyBvbiB0aGUgZ2l2ZW4gZXZlbnRcbiAgbGV0IHggPSAwO1xuICBsZXQgeSA9IDA7XG4gIGlmIChldikge1xuICAgIGNvbnN0IGNoYW5nZWRUb3VjaGVzID0gZXYuY2hhbmdlZFRvdWNoZXM7XG4gICAgaWYgKGNoYW5nZWRUb3VjaGVzICYmIGNoYW5nZWRUb3VjaGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHRvdWNoID0gY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICB4ID0gdG91Y2guY2xpZW50WDtcbiAgICAgIHkgPSB0b3VjaC5jbGllbnRZO1xuICAgIH0gZWxzZSBpZiAoZXYucGFnZVggIT09IHVuZGVmaW5lZCkge1xuICAgICAgeCA9IGV2LnBhZ2VYO1xuICAgICAgeSA9IGV2LnBhZ2VZO1xuICAgIH1cbiAgfVxuICBkZXRhaWwuY3VycmVudFggPSB4O1xuICBkZXRhaWwuY3VycmVudFkgPSB5O1xufTtcbmNvbnN0IG5vdyA9IGV2ID0+IHtcbiAgcmV0dXJuIGV2LnRpbWVTdGFtcCB8fCBEYXRlLm5vdygpO1xufTtcbmV4cG9ydCB7IEdFU1RVUkVfQ09OVFJPTExFUiwgY3JlYXRlR2VzdHVyZSB9OyJdLCJtYXBwaW5ncyI6IjtBQUdBLElBQU0sb0JBQU4sTUFBd0I7QUFBQSxFQUN0QixjQUFjO0FBQ1osU0FBSyxZQUFZO0FBQ2pCLFNBQUssaUJBQWlCLG9CQUFJLElBQUk7QUFDOUIsU0FBSyxtQkFBbUIsb0JBQUksSUFBSTtBQUNoQyxTQUFLLGlCQUFpQixvQkFBSSxJQUFJO0FBQUEsRUFDaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUlBLGNBQWMsUUFBUTtBQUNwQixRQUFJO0FBQ0osV0FBTyxJQUFJLGdCQUFnQixNQUFNLEtBQUssTUFBTSxHQUFHLE9BQU8s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
