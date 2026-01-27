// node_modules/@ionic/core/dist/esm/gesture-controller-BTEOs1at.js
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

export {
  BACKDROP_NO_SCROLL,
  GESTURE_CONTROLLER
};
/*! Bundled license information:

@ionic/core/dist/esm/gesture-controller-BTEOs1at.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9nZXN0dXJlLWNvbnRyb2xsZXItQlRFT3MxYXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmNsYXNzIEdlc3R1cmVDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5nZXN0dXJlSWQgPSAwO1xuICAgIHRoaXMucmVxdWVzdGVkU3RhcnQgPSBuZXcgTWFwKCk7XG4gICAgdGhpcy5kaXNhYmxlZEdlc3R1cmVzID0gbmV3IE1hcCgpO1xuICAgIHRoaXMuZGlzYWJsZWRTY3JvbGwgPSBuZXcgU2V0KCk7XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBnZXN0dXJlIGRlbGVnYXRlIGJhc2VkIG9uIHRoZSBHZXN0dXJlQ29uZmlnIHBhc3NlZFxuICAgKi9cbiAgY3JlYXRlR2VzdHVyZShjb25maWcpIHtcbiAgICB2YXIgX2E7XG4gICAgcmV0dXJuIG5ldyBHZXN0dXJlRGVsZWdhdGUodGhpcywgdGhpcy5uZXdJRCgpLCBjb25maWcubmFtZSwgKF9hID0gY29uZmlnLnByaW9yaXR5KSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAwLCAhIWNvbmZpZy5kaXNhYmxlU2Nyb2xsKTtcbiAgfVxuICAvKipcbiAgICogQ3JlYXRlcyBhIGJsb2NrZXIgdGhhdCB3aWxsIGJsb2NrIGFueSBvdGhlciBnZXN0dXJlIGV2ZW50cyBmcm9tIGZpcmluZy4gU2V0IGluIHRoZSBpb24tZ2VzdHVyZSBjb21wb25lbnQuXG4gICAqL1xuICBjcmVhdGVCbG9ja2VyKG9wdHMgPSB7fSkge1xuICAgIHJldHVybiBuZXcgQmxvY2tlckRlbGVnYXRlKHRoaXMsIHRoaXMubmV3SUQoKSwgb3B0cy5kaXNhYmxlLCAhIW9wdHMuZGlzYWJsZVNjcm9sbCk7XG4gIH1cbiAgc3RhcnQoZ2VzdHVyZU5hbWUsIGlkLCBwcmlvcml0eSkge1xuICAgIGlmICghdGhpcy5jYW5TdGFydChnZXN0dXJlTmFtZSkpIHtcbiAgICAgIHRoaXMucmVxdWVzdGVkU3RhcnQuZGVsZXRlKGlkKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5yZXF1ZXN0ZWRTdGFydC5zZXQoaWQsIHByaW9yaXR5KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBjYXB0dXJlKGdlc3R1cmVOYW1lLCBpZCwgcHJpb3JpdHkpIHtcbiAgICBpZiAoIXRoaXMuc3RhcnQoZ2VzdHVyZU5hbWUsIGlkLCBwcmlvcml0eSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgcmVxdWVzdGVkU3RhcnQgPSB0aGlzLnJlcXVlc3RlZFN0YXJ0O1xuICAgIGxldCBtYXhQcmlvcml0eSA9IC0xZTQ7XG4gICAgcmVxdWVzdGVkU3RhcnQuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICBtYXhQcmlvcml0eSA9IE1hdGgubWF4KG1heFByaW9yaXR5LCB2YWx1ZSk7XG4gICAgfSk7XG4gICAgaWYgKG1heFByaW9yaXR5ID09PSBwcmlvcml0eSkge1xuICAgICAgdGhpcy5jYXB0dXJlZElkID0gaWQ7XG4gICAgICByZXF1ZXN0ZWRTdGFydC5jbGVhcigpO1xuICAgICAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2lvbkdlc3R1cmVDYXB0dXJlZCcsIHtcbiAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgZ2VzdHVyZU5hbWVcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXF1ZXN0ZWRTdGFydC5kZWxldGUoaWQpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZWxlYXNlKGlkKSB7XG4gICAgdGhpcy5yZXF1ZXN0ZWRTdGFydC5kZWxldGUoaWQpO1xuICAgIGlmICh0aGlzLmNhcHR1cmVkSWQgPT09IGlkKSB7XG4gICAgICB0aGlzLmNhcHR1cmVkSWQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG4gIGRpc2FibGVHZXN0dXJlKGdlc3R1cmVOYW1lLCBpZCkge1xuICAgIGxldCBzZXQgPSB0aGlzLmRpc2FibGVkR2VzdHVyZXMuZ2V0KGdlc3R1cmVOYW1lKTtcbiAgICBpZiAoc2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHNldCA9IG5ldyBTZXQoKTtcbiAgICAgIHRoaXMuZGlzYWJsZWRHZXN0dXJlcy5zZXQoZ2VzdHVyZU5hbWUsIHNldCk7XG4gICAgfVxuICAgIHNldC5hZGQoaWQpO1xuICB9XG4gIGVuYWJsZUdlc3R1cmUoZ2VzdHVyZU5hbWUsIGlkKSB7XG4gICAgY29uc3Qgc2V0ID0gdGhpcy5kaXNhYmxlZEdlc3R1cmVzLmdldChnZXN0dXJlTmFtZSk7XG4gICAgaWYgKHNldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZXQuZGVsZXRlKGlkKTtcbiAgICB9XG4gIH1cbiAgZGlzYWJsZVNjcm9sbChpZCkge1xuICAgIHRoaXMuZGlzYWJsZWRTY3JvbGwuYWRkKGlkKTtcbiAgICBpZiAodGhpcy5kaXNhYmxlZFNjcm9sbC5zaXplID09PSAxKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoQkFDS0RST1BfTk9fU0NST0xMKTtcbiAgICB9XG4gIH1cbiAgZW5hYmxlU2Nyb2xsKGlkKSB7XG4gICAgdGhpcy5kaXNhYmxlZFNjcm9sbC5kZWxldGUoaWQpO1xuICAgIGlmICh0aGlzLmRpc2FibGVkU2Nyb2xsLnNpemUgPT09IDApIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShCQUNLRFJPUF9OT19TQ1JPTEwpO1xuICAgIH1cbiAgfVxuICBjYW5TdGFydChnZXN0dXJlTmFtZSkge1xuICAgIGlmICh0aGlzLmNhcHR1cmVkSWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gYSBnZXN0dXJlIGFscmVhZHkgY2FwdHVyZWRcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNEaXNhYmxlZChnZXN0dXJlTmFtZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaXNDYXB0dXJlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5jYXB0dXJlZElkICE9PSB1bmRlZmluZWQ7XG4gIH1cbiAgaXNTY3JvbGxEaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZFNjcm9sbC5zaXplID4gMDtcbiAgfVxuICBpc0Rpc2FibGVkKGdlc3R1cmVOYW1lKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkR2VzdHVyZXMuZ2V0KGdlc3R1cmVOYW1lKTtcbiAgICBpZiAoZGlzYWJsZWQgJiYgZGlzYWJsZWQuc2l6ZSA+IDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgbmV3SUQoKSB7XG4gICAgdGhpcy5nZXN0dXJlSWQrKztcbiAgICByZXR1cm4gdGhpcy5nZXN0dXJlSWQ7XG4gIH1cbn1cbmNsYXNzIEdlc3R1cmVEZWxlZ2F0ZSB7XG4gIGNvbnN0cnVjdG9yKGN0cmwsIGlkLCBuYW1lLCBwcmlvcml0eSwgZGlzYWJsZVNjcm9sbCkge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGlzYWJsZVNjcm9sbCA9IGRpc2FibGVTY3JvbGw7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5ICogMTAwMDAwMCArIGlkO1xuICAgIHRoaXMuY3RybCA9IGN0cmw7XG4gIH1cbiAgY2FuU3RhcnQoKSB7XG4gICAgaWYgKCF0aGlzLmN0cmwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY3RybC5jYW5TdGFydCh0aGlzLm5hbWUpO1xuICB9XG4gIHN0YXJ0KCkge1xuICAgIGlmICghdGhpcy5jdHJsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmN0cmwuc3RhcnQodGhpcy5uYW1lLCB0aGlzLmlkLCB0aGlzLnByaW9yaXR5KTtcbiAgfVxuICBjYXB0dXJlKCkge1xuICAgIGlmICghdGhpcy5jdHJsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGNhcHR1cmVkID0gdGhpcy5jdHJsLmNhcHR1cmUodGhpcy5uYW1lLCB0aGlzLmlkLCB0aGlzLnByaW9yaXR5KTtcbiAgICBpZiAoY2FwdHVyZWQgJiYgdGhpcy5kaXNhYmxlU2Nyb2xsKSB7XG4gICAgICB0aGlzLmN0cmwuZGlzYWJsZVNjcm9sbCh0aGlzLmlkKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhcHR1cmVkO1xuICB9XG4gIHJlbGVhc2UoKSB7XG4gICAgaWYgKHRoaXMuY3RybCkge1xuICAgICAgdGhpcy5jdHJsLnJlbGVhc2UodGhpcy5pZCk7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlU2Nyb2xsKSB7XG4gICAgICAgIHRoaXMuY3RybC5lbmFibGVTY3JvbGwodGhpcy5pZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5yZWxlYXNlKCk7XG4gICAgdGhpcy5jdHJsID0gdW5kZWZpbmVkO1xuICB9XG59XG5jbGFzcyBCbG9ja2VyRGVsZWdhdGUge1xuICBjb25zdHJ1Y3RvcihjdHJsLCBpZCwgZGlzYWJsZSwgZGlzYWJsZVNjcm9sbCkge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLmRpc2FibGUgPSBkaXNhYmxlO1xuICAgIHRoaXMuZGlzYWJsZVNjcm9sbCA9IGRpc2FibGVTY3JvbGw7XG4gICAgdGhpcy5jdHJsID0gY3RybDtcbiAgfVxuICBibG9jaygpIHtcbiAgICBpZiAoIXRoaXMuY3RybCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5kaXNhYmxlKSB7XG4gICAgICBmb3IgKGNvbnN0IGdlc3R1cmUgb2YgdGhpcy5kaXNhYmxlKSB7XG4gICAgICAgIHRoaXMuY3RybC5kaXNhYmxlR2VzdHVyZShnZXN0dXJlLCB0aGlzLmlkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuZGlzYWJsZVNjcm9sbCkge1xuICAgICAgdGhpcy5jdHJsLmRpc2FibGVTY3JvbGwodGhpcy5pZCk7XG4gICAgfVxuICB9XG4gIHVuYmxvY2soKSB7XG4gICAgaWYgKCF0aGlzLmN0cmwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGlzYWJsZSkge1xuICAgICAgZm9yIChjb25zdCBnZXN0dXJlIG9mIHRoaXMuZGlzYWJsZSkge1xuICAgICAgICB0aGlzLmN0cmwuZW5hYmxlR2VzdHVyZShnZXN0dXJlLCB0aGlzLmlkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuZGlzYWJsZVNjcm9sbCkge1xuICAgICAgdGhpcy5jdHJsLmVuYWJsZVNjcm9sbCh0aGlzLmlkKTtcbiAgICB9XG4gIH1cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLnVuYmxvY2soKTtcbiAgICB0aGlzLmN0cmwgPSB1bmRlZmluZWQ7XG4gIH1cbn1cbmNvbnN0IEJBQ0tEUk9QX05PX1NDUk9MTCA9ICdiYWNrZHJvcC1uby1zY3JvbGwnO1xuY29uc3QgR0VTVFVSRV9DT05UUk9MTEVSID0gbmV3IEdlc3R1cmVDb250cm9sbGVyKCk7XG5leHBvcnQgeyBCQUNLRFJPUF9OT19TQ1JPTEwgYXMgQiwgR0VTVFVSRV9DT05UUk9MTEVSIGFzIEcgfTsiXSwibWFwcGluZ3MiOiI7QUFHQSxJQUFNLG9CQUFOLE1BQXdCO0FBQUEsRUFDdEIsY0FBYztBQUNaLFNBQUssWUFBWTtBQUNqQixTQUFLLGlCQUFpQixvQkFBSSxJQUFJO0FBQzlCLFNBQUssbUJBQW1CLG9CQUFJLElBQUk7QUFDaEMsU0FBSyxpQkFBaUIsb0JBQUksSUFBSTtBQUFBLEVBQ2hDO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFJQSxjQUFj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
