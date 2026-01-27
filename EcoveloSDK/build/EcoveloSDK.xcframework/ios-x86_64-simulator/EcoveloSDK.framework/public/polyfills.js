var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

// src/zone-flags.ts
window.__Zone_disable_customElements = true;

// node_modules/zone.js/fesm2015/zone.js
var global = globalThis;
function __symbol__(name) {
  const symbolPrefix = global["__Zone_symbol_prefix"] || "__zone_symbol__";
  return symbolPrefix + name;
}
function initZone() {
  const performance = global["performance"];
  function mark(name) {
    performance && performance["mark"] && performance["mark"](name);
  }
  function performanceMeasure(name, label) {
    performance && performance["measure"] && performance["measure"](name, label);
  }
  mark("Zone");
  const _ZoneImpl = class _ZoneImpl {
    static assertZonePatched() {
      if (global["Promise"] !== patches["ZoneAwarePromise"]) {
        throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)");
      }
    }
    static get root() {
      let zone = _ZoneImpl.current;
      while (zone.parent) {
        zone = zone.parent;
      }
      return zone;
    }
    static get current() {
      return _currentZoneFrame.zone;
    }
    static get currentTask() {
      return _currentTask;
    }
    static __load_patch(name, fn, ignoreDuplicate = false) {
      if (patches.hasOwnProperty(name)) {
        const checkDuplicate = global[__symbol__("forceDuplicateZoneCheck")] === true;
        if (!ignoreDuplicate && checkDuplicate) {
          throw Error("Already loaded patch: " + name);
        }
      } else if (!global["__Zone_disable_" + name]) {
        const perfName = "Zone:" + name;
        mark(perfName);
        patches[name] = fn(global, _ZoneImpl, _api);
        performanceMeasure(perfName, perfName);
      }
    }
    get parent() {
      return this._parent;
    }
    get name() {
      return this._name;
    }
    _parent;
    _name;
    _properties;
    _zoneDelegate;
    constructor(parent, zoneSpec) {
      this._parent = parent;
      this._name = zoneSpec ? zoneSpec.name || "unnamed" : "<root>";
      this._properties = zoneSpec && zoneSpec.properties || {};
      this._zoneDelegate = new _ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
    }
    get(key) {
      const zone = this.getZoneWith(key);
      if (zone) return zone._properties[key];
    }
    getZoneWith(key) {
      let current = this;
      while (current) {
        if (current._properties.hasOwnProperty(key)) {
          return current;
        }
        current = current._parent;
      }
      return null;
    }
    fork(zoneSpec) {
      if (!zoneSpec) throw new Error("ZoneSpec required!");
      return this._zoneDelegate.fork(this, zoneSpec);
    }
    wrap(callback, source) {
      if (typeof callback !== "function") {
        throw new Error("Expecting function got: " + callback);
      }
      const _callback = this._zoneDelegate.intercept(this, callback, source);
      const zone = this;
      return function() {
        return zone.runGuarded(_callback, this, arguments, source);
      };
    }
    run(callback, applyThis, applyArgs, source) {
      _currentZoneFrame = {
        parent: _currentZoneFrame,
        zone: this
      };
      try {
        return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
      } finally {
        _currentZoneFrame = _currentZoneFrame.parent;
      }
    }
    runGuarded(callback, applyThis = null, applyArgs, source) {
      _currentZoneFrame = {
        parent: _currentZoneFrame,
        zone: this
      };
      try {
        try {
          return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
        } catch (error) {
          if (this._zoneDelegate.handleError(this, error)) {
            throw error;
          }
        }
      } finally {
        _currentZoneFrame = _currentZoneFrame.parent;
      }
    }
    runTask(task, applyThis, applyArgs) {
      if (task.zone != this) {
        throw new Error("A task can only be run in the zone of creation! (Creation: " + (task.zone || NO_ZONE).name + "; Execution: " + this.name + ")");
      }
      const zoneTask = task;
      const {
        type,
        data: {
          isPeriodic = false,
          isRefreshable = false
        } = {}
      } = task;
      if (task.state === notScheduled && (type === eventTask || type === macroTask)) {
        return;
      }
      const reEntryGuard = task.state != running;
      reEntryGuard && zoneTask._transitionTo(running, scheduled);
      const previousTask = _currentTask;
      _currentTask = zoneTask;
      _currentZoneFrame = {
        parent: _currentZoneFrame,
        zone: this
      };
      try {
        if (type == macroTask && task.data && !isPeriodic && !isRefreshable) {
          task.cancelFn = void 0;
        }
        try {
          return this._zoneDelegate.invokeTask(this, zoneTask, applyThis, applyArgs);
        } catch (error) {
          if (this._zoneDelegate.handleError(this, error)) {
            throw error;
          }
        }
      } finally {
        const state = task.state;
        if (state !== notScheduled && state !== unknown) {
          if (type == eventTask || isPeriodic || isRefreshable && state === scheduling) {
            reEntryGuard && zoneTask._transitionTo(scheduled, running, scheduling);
          } else {
            const zoneDelegates = zoneTask._zoneDelegates;
            this._updateTaskCount(zoneTask, -1);
            reEntryGuard && zoneTask._transitionTo(notScheduled, running, notScheduled);
            if (isRefreshable) {
              zoneTask._zoneDelegates = zoneDelegates;
            }
          }
        }
        _currentZoneFrame = _currentZoneFrame.parent;
        _currentTask = previousTask;
      }
    }
    scheduleTask(task) {
      if (task.zone && task.zone !== this) {
        let newZone = this;
        while (newZone) {
          if (newZone === task.zone) {
            throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${task.zone.name}`);
          }
          newZone = newZone.parent;
        }
      }
      task._transitionTo(scheduling, notScheduled);
      const zoneDelegates = [];
      task._zoneDelegates = zoneDelegates;
      task._zone = this;
      try {
        task = this._zoneDelegate.scheduleTask(this, task);
      } catch (err) {
        task._transitionTo(unknown, scheduling, notScheduled);
        this._zoneDelegate.handleError(this, err);
        throw err;
      }
      if (task._zoneDelegates === zoneDelegates) {
        this._updateTaskCount(task, 1);
      }
      if (task.state == scheduling) {
        task._transitionTo(scheduled, scheduling);
      }
      return task;
    }
    scheduleMicroTask(source, callback, data, customSchedule) {
      return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, void 0));
    }
    scheduleMacroTask(source, callback, data, customSchedule, customCancel) {
      return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
    }
    scheduleEventTask(source, callback, data, customSchedule, customCancel) {
      return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
    }
    cancelTask(task) {
      if (task.zone != this) throw new Error("A task can only be cancelled in the zone of creation! (Creation: " + (task.zone || NO_ZONE).name + "; Execution: " + this.name + ")");
      if (task.state !== scheduled && task.state !== running) {
        return;
      }
      task._transitionTo(canceling, scheduled, running);
      try {
        this._zoneDelegate.cancelTask(this, task);
      } catch (err) {
        task._transitionTo(unknown, canceling);
        this._zoneDelegate.handleError(this, err);
        throw err;
      }
      this._updateTaskCount(task, -1);
      task._transitionTo(notScheduled, canceling);
      task.runCount = -1;
      return task;
    }
    _updateTaskCount(task, count) {
      const zoneDelegates = task._zoneDelegates;
      if (count == -1) {
        task._zoneDelegates = null;
      }
      for (let i = 0; i < zoneDelegates.length; i++) {
        zoneDelegates[i]._updateTaskCount(task.type, count);
      }
    }
  };
  __publicField(_ZoneImpl, "__symbol__", __symbol__);
  let ZoneImpl = _ZoneImpl;
  const DELEGATE_ZS = {
    name: "",
    onHasTask: (delegate, _, target, hasTaskState) => delegate.hasTask(target, hasTaskState),
    onScheduleTask: (delegate, _, target, task) => delegate.scheduleTask(target, task),
    onInvokeTask: (delegate, _, target, task, applyThis, applyArgs) => delegate.invokeTask(target, task, applyThis, applyArgs),
    onCancelTask: (delegate, _, target, task) => delegate.cancelTask(target, task)
  };
  class _ZoneDelegate {
    get zone() {
      return this._zone;
    }
    _zone;
    _taskCounts = {
      "microTask": 0,
      "macroTask": 0,
      "eventTask": 0
    };
    _parentDelegate;
    _forkDlgt;
    _forkZS;
    _forkCurrZone;
    _interceptDlgt;
    _interceptZS;
    _interceptCurrZone;
    _invokeDlgt;
    _invokeZS;
    _invokeCurrZone;
    _handleErrorDlgt;
    _handleErrorZS;
    _handleErrorCurrZone;
    _scheduleTaskDlgt;
    _scheduleTaskZS;
    _scheduleTaskCurrZone;
    _invokeTaskDlgt;
    _invokeTaskZS;
    _invokeTaskCurrZone;
    _cancelTaskDlgt;
    _cancelTaskZS;
    _cancelTaskCurrZone;
    _hasTaskDlgt;
    _hasTaskDlgtOwner;
    _hasTaskZS;
    _hasTaskCurrZone;
    constructor(zone, parentDelegate, zoneSpec) {
      this._zone = zone;
      this._parentDelegate = parentDelegate;
      this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
      this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
      this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this._zone : parentDelegate._forkCurrZone);
      this._interceptZS = zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
      this._interceptDlgt = zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
      this._interceptCurrZone = zoneSpec && (zoneSpec.onIntercept ? this._zone : parentDelegate._interceptCurrZone);
      this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
      this._invokeDlgt = zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
      this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this._zone : parentDelegate._invokeCurrZone);
      this._handleErrorZS = zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
      this._handleErrorDlgt = zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
      this._handleErrorCurrZone = zoneSpec && (zoneSpec.onHandleError ? this._zone : parentDelegate._handleErrorCurrZone);
      this._scheduleTaskZS = zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
      this._scheduleTaskDlgt = zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
      this._scheduleTaskCurrZone = zoneSpec && (zoneSpec.onScheduleTask ? this._zone : parentDelegate._scheduleTaskCurrZone);
      this._invokeTaskZS = zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
      this._invokeTaskDlgt = zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
      this._invokeTaskCurrZone = zoneSpec && (zoneSpec.onInvokeTask ? this._zone : parentDelegate._invokeTaskCurrZone);
      this._cancelTaskZS = zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
      this._cancelTaskDlgt = zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
      this._cancelTaskCurrZone = zoneSpec && (zoneSpec.onCancelTask ? this._zone : parentDelegate._cancelTaskCurrZone);
      this._hasTaskZS = null;
      this._hasTaskDlgt = null;
      this._hasTaskDlgtOwner = null;
      this._hasTaskCurrZone = null;
      const zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
      const parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
      if (zoneSpecHasTask || parentHasTask) {
        this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
        this._hasTaskDlgt = parentDelegate;
        this._hasTaskDlgtOwner = this;
        this._hasTaskCurrZone = this._zone;
        if (!zoneSpec.onScheduleTask) {
          this._scheduleTaskZS = DELEGATE_ZS;
          this._scheduleTaskDlgt = parentDelegate;
          this._scheduleTaskCurrZone = this._zone;
        }
        if (!zoneSpec.onInvokeTask) {
          this._invokeTaskZS = DELEGATE_ZS;
          this._invokeTaskDlgt = parentDelegate;
          this._invokeTaskCurrZone = this._zone;
        }
        if (!zoneSpec.onCancelTask) {
          this._cancelTaskZS = DELEGATE_ZS;
          this._cancelTaskDlgt = parentDelegate;
          this._cancelTaskCurrZone = this._zone;
        }
      }
    }
    fork(targetZone, zoneSpec) {
      return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) : new ZoneImpl(targetZone, zoneSpec);
    }
    intercept(targetZone, callback, source) {
      return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) : callback;
    }
    invoke(targetZone, callback, applyThis, applyArgs, source) {
      return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) : callback.apply(applyThis, applyArgs);
    }
    handleError(targetZone, error) {
      return this._handleErrorZS ? this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) : true;
    }
    scheduleTask(targetZone, task) {
      let returnTask = task;
      if (this._scheduleTaskZS) {
        if (this._hasTaskZS) {
          returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
        }
        returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
        if (!returnTask) returnTask = task;
      } else {
        if (task.scheduleFn) {
          task.scheduleFn(task);
        } else if (task.type == microTask) {
          scheduleMicroTask(task);
        } else {
          throw new Error("Task is missing scheduleFn.");
        }
      }
      return returnTask;
    }
    invokeTask(targetZone, task, applyThis, applyArgs) {
      return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) : task.callback.apply(applyThis, applyArgs);
    }
    cancelTask(targetZone, task) {
      let value;
      if (this._cancelTaskZS) {
        value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
      } else {
        if (!task.cancelFn) {
          throw Error("Task is not cancelable");
        }
        value = task.cancelFn(task);
      }
      return value;
    }
    hasTask(targetZone, isEmpty) {
      try {
        this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
      } catch (err) {
        this.handleError(targetZone, err);
      }
    }
    _updateTaskCount(type, count) {
      const counts = this._taskCounts;
      const prev = counts[type];
      const next = counts[type] = prev + count;
      if (next < 0) {
        throw new Error("More tasks executed then were scheduled.");
      }
      if (prev == 0 || next == 0) {
        const isEmpty = {
          microTask: counts["microTask"] > 0,
          macroTask: counts["macroTask"] > 0,
          eventTask: counts["eventTask"] > 0,
          change: type
        };
        this.hasTask(this._zone, isEmpty);
      }
    }
  }
  class ZoneTask {
    type;
    source;
    invoke;
    callback;
    data;
    scheduleFn;
    cancelFn;
    _zone = null;
    runCount = 0;
    _zoneDelegates = null;
    _state = "notScheduled";
    constructor(type, source, callback, options, scheduleFn, cancelFn) {
      this.type = type;
      this.source = source;
      this.data = options;
      this.scheduleFn = scheduleFn;
      this.cancelFn = cancelFn;
      if (!callback) {
        throw new Error("callback is not defined");
      }
      this.callback = callback;
      const self2 = this;
      if (type === eventTask && options && options.useG) {
        this.invoke = ZoneTask.invokeTask;
      } else {
        this.invoke = function() {
          return ZoneTask.invokeTask.call(global, self2, this, arguments);
        };
      }
    }
    static invokeTask(task, target, args) {
      if (!task) {
        task = this;
      }
      _numberOfNestedTaskFrames++;
      try {
        task.runCount++;
        return task.zone.runTask(task, target, args);
      } finally {
        if (_numberOfNestedTaskFrames == 1) {
          drainMicroTaskQueue();
        }
        _numberOfNestedTaskFrames--;
      }
    }
    get zone() {
      return this._zone;
    }
    get state() {
      return this._state;
    }
    cancelScheduleRequest() {
      this._transitionTo(notScheduled, scheduling);
    }
    _transitionTo(toState, fromState1, fromState2) {
      if (this._state === fromState1 || this._state === fromState2) {
        this._state = toState;
        if (toState == notScheduled) {
          this._zoneDelegates = null;
        }
      } else {
        throw new Error(`${this.type} '${this.source}': can not transition to '${toState}', expecting state '${fromState1}'${fromState2 ? " or '" + fromState2 + "'" : ""}, was '${this._state}'.`);
      }
    }
    toString() {
      if (this.data && typeof this.data.handleId !== "undefined") {
        return this.data.handleId.toString();
      } else {
        return Object.prototype.toString.call(this);
      }
    }
    // add toJSON method to prevent cyclic error when
    // call JSON.stringify(zoneTask)
    toJSON() {
      return {
        type: this.type,
        state: this.state,
        source: this.source,
        zone: this.zone.name,
        runCount: this.runCount
      };
    }
  }
  const symbolSetTimeout = __symbol__("setTimeout");
  const symbolPromise = __symbol__("Promise");
  const symbolThen = __symbol__("then");
  let _microTaskQueue = [];
  let _isDrainingMicrotaskQueue = false;
  let nativeMicroTaskQueuePromise;
  function nativeScheduleMicroTask(func) {
    if (!nativeMicroTaskQueuePromise) {
      if (global[symbolPromise]) {
        nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
      }
    }
    if (nativeMicroTaskQueuePromise) {
      let nativeThen = nativeMicroTaskQueuePromise[symbolThen];
      if (!nativeThen) {
        nativeThen = nativeMicroTaskQueuePromise["then"];
      }
      nativeThen.call(nativeMicroTaskQueuePromise, func);
    } else {
      global[symbolSetTimeout](func, 0);
    }
  }
  function scheduleMicroTask(task) {
    if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
      nativeScheduleMicroTask(drainMicroTaskQueue);
    }
    task && _microTaskQueue.push(task);
  }
  function drainMicroTaskQueue() {
    if (!_isDrainingMicrotaskQueue) {
      _isDrainingMicrotaskQueue = true;
      while (_microTaskQueue.length) {
        const queue = _microTaskQueue;
        _microTaskQueue = [];
        for (let i = 0; i < queue.length; i++) {
          const task = queue[i];
          try {
            task.zone.runTask(task, null, null);
          } catch (error) {
            _api.onUnhandledError(error);
          }
        }
      }
      _api.microtaskDrainDone();
      _isDrainingMicrotaskQueue = false;
    }
  }
  const NO_ZONE = {
    name: "NO ZONE"
  };
  const notScheduled = "notScheduled", scheduling = "scheduling", scheduled = "scheduled", running = "running", canceling = "canceling", unknown = "unknown";
  const microTask = "microTask", macroTask = "macroTask", eventTask = "eventTask";
  const patches = {};
  const _api = {
    symbol: __symbol__,
    currentZoneFrame: () => _currentZoneFrame,
    onUnhandledError: noop,
    microtaskDrainDone: noop,
    scheduleMicroTask,
    showUncaughtError: () => !ZoneImpl[__symbol__("ignoreConsoleErrorUncaughtError")],
    patchEventTarget: () => [],
    patchOnProperties: noop,
    patchMethod: () => noop,
    bindArguments: () => [],
    patchThen: () => noop,
    patchMacroTask: () => noop,
    patchEventPrototype: () => noop,
    isIEOrEdge: () => false,
    getGlobalObjects: () => void 0,
    ObjectDefineProperty: () => noop,
    ObjectGetOwnPropertyDescriptor: () => void 0,
    ObjectCreate: () => void 0,
    ArraySlice: () => [],
    patchClass: () => noop,
    wrapWithCurrentZone: () => noop,
    filterProperties: () => [],
    attachOriginToPatched: () => noop,
    _redefineProperty: () => noop,
    patchCallbacks: () => noop,
    nativeScheduleMicroTask
  };
  let _currentZoneFrame = {
    parent: null,
    zone: new ZoneImpl(null, null)
  };
  let _currentTask = null;
  let _numberOfNestedTaskFrames = 0;
  function noop() {
  }
  performanceMeasure("Zone", "Zone");
  return ZoneImpl;
}
function loadZone() {
  var _a;
  const global2 = globalThis;
  const checkDuplicate = global2[__symbol__("forceDuplicateZoneCheck")] === true;
  if (global2["Zone"] && (checkDuplicate || typeof global2["Zone"].__symbol__ !== "function")) {
    throw new Error("Zone already loaded.");
  }
  (_a = global2["Zone"]) != null ? _a : global2["Zone"] = initZone();
  return global2["Zone"];
}
var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ObjectDefineProperty = Object.defineProperty;
var ObjectGetPrototypeOf = Object.getPrototypeOf;
var ObjectCreate = Object.create;
var ArraySlice = Array.prototype.slice;
var ADD_EVENT_LISTENER_STR = "addEventListener";
var REMOVE_EVENT_LISTENER_STR = "removeEventListener";
var ZONE_SYMBOL_ADD_EVENT_LISTENER = __symbol__(ADD_EVENT_LISTENER_STR);
var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = __symbol__(REMOVE_EVENT_LISTENER_STR);
var TRUE_STR = "true";
var FALSE_STR = "false";
var ZONE_SYMBOL_PREFIX = __symbol__("");
function wrapWithCurrentZone(callback, source) {
  return Zone.current.wrap(callback, source);
}
function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
  return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
}
var zoneSymbol = __symbol__;
var isWindowExists = typeof window !== "undefined";
var internalWindow = isWindowExists ? window : void 0;
var _global = isWindowExists && internalWindow || globalThis;
var REMOVE_ATTRIBUTE = "removeAttribute";
function bindArguments(args, source) {
  for (let i = args.length - 1; i >= 0; i--) {
    if (typeof args[i] === "function") {
      args[i] = wrapWithCurrentZone(args[i], source + "_" + i);
    }
  }
  return args;
}
function patchPrototype(prototype, fnNames) {
  const source = prototype.constructor["name"];
  for (let i = 0; i < fnNames.length; i++) {
    const name = fnNames[i];
    const delegate = prototype[name];
    if (delegate) {
      const prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name);
      if (!isPropertyWritable(prototypeDesc)) {
        continue;
      }
      prototype[name] = ((delegate2) => {
        const patched = function() {
          return delegate2.apply(this, bindArguments(arguments, source + "." + name));
        };
        attachOriginToPatched(patched, delegate2);
        return patched;
      })(delegate);
    }
  }
}
function isPropertyWritable(propertyDesc) {
  if (!propertyDesc) {
    return true;
  }
  if (propertyDesc.writable === false) {
    return false;
  }
  return !(typeof propertyDesc.get === "function" && typeof propertyDesc.set === "undefined");
}
var isWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
var isNode = !("nw" in _global) && typeof _global.process !== "undefined" && _global.process.toString() === "[object process]";
var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow["HTMLElement"]);
var isMix = typeof _global.process !== "undefined" && _global.process.toString() === "[object process]" && !isWebWorker && !!(isWindowExists && internalWindow["HTMLElement"]);
var zoneSymbolEventNames$1 = {};
var enableBeforeunloadSymbol = zoneSymbol("enable_beforeunload");
var wrapFn = function(event) {
  event = event || _global.event;
  if (!event) {
    return;
  }
  let eventNameSymbol = zoneSymbolEventNames$1[event.type];
  if (!eventNameSymbol) {
    eventNameSymbol = zoneSymbolEventNames$1[event.type] = zoneSymbol("ON_PROPERTY" + event.type);
  }
  const target = this || event.target || _global;
  const listener = target[eventNameSymbol];
  let result;
  if (isBrowser && target === internalWindow && event.type === "error") {
    const errorEvent = event;
    result = listener && listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);
    if (result === true) {
      event.preventDefault();
    }
  } else {
    result = listener && listener.apply(this, arguments);
    if (
      // https://github.com/angular/angular/issues/47579
      // https://www.w3.org/TR/2011/WD-html5-20110525/history.html#beforeunloadevent
      // This is the only specific case we should check for. The spec defines that the
      // `returnValue` attribute represents the message to show the user. When the event
      // is created, this attribute must be set to the empty string.
      event.type === "beforeunload" && // To prevent any breaking changes resulting from this change, given that
      // it was already causing a significant number of failures in G3, we have hidden
      // that behavior behind a global configuration flag. Consumers can enable this
      // flag explicitly if they want the `beforeunload` event to be handled as defined
      // in the specification.
      _global[enableBeforeunloadSymbol] && // The IDL event definition is `attribute DOMString returnValue`, so we check whether
      // `typeof result` is a string.
      typeof result === "string"
    ) {
      event.returnValue = result;
    } else if (result != void 0 && !result) {
      event.preventDefault();
    }
  }
  return result;
};
function patchProperty(obj, prop, prototype) {
  let desc = ObjectGetOwnPropertyDescriptor(obj, prop);
  if (!desc && prototype) {
    const prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);
    if (prototypeDesc) {
      desc = {
        enumerable: true,
        configurable: true
      };
    }
  }
  if (!desc || !desc.configurable) {
    return;
  }
  const onPropPatchedSymbol = zoneSymbol("on" + prop + "patched");
  if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
    return;
  }
  delete desc.writable;
  delete desc.value;
  const originalDescGet = desc.get;
  const originalDescSet = desc.set;
  const eventName = prop.slice(2);
  let eventNameSymbol = zoneSymbolEventNames$1[eventName];
  if (!eventNameSymbol) {
    eventNameSymbol = zoneSymbolEventNames$1[eventName] = zoneSymbol("ON_PROPERTY" + eventName);
  }
  desc.set = function(newValue) {
    let target = this;
    if (!target && obj === _global) {
      target = _global;
    }
    if (!target) {
      return;
    }
    const previousValue = target[eventNameSymbol];
    if (typeof previousValue === "function") {
      target.removeEventListener(eventName, wrapFn);
    }
    originalDescSet == null ? void 0 : originalDescSet.call(target, null);
    target[eventNameSymbol] = newValue;
    if (typeof newValue === "function") {
      target.addEventListener(eventName, wrapFn, false);
    }
  };
  desc.get = function() {
    let target = this;
    if (!target && obj === _global) {
      target = _global;
    }
    if (!target) {
      return null;
    }
    const listener = target[eventNameSymbol];
    if (listener) {
      return listener;
    } else if (originalDescGet) {
      let value = originalDescGet.call(this);
      if (value) {
        desc.set.call(this, value);
        if (typeof target[REMOVE_ATTRIBUTE] === "function") {
          target.removeAttribute(prop);
        }
        return value;
      }
    }
    return null;
  };
  ObjectDefineProperty(obj, prop, desc);
  obj[onPropPatchedSymbol] = true;
}
function patchOnProperties(obj, properties, prototype) {
  if (properties) {
    for (let i = 0; i < properties.length; i++) {
      patchProperty(obj, "on" + properties[i], prototype);
    }
  } else {
    const onProperties = [];
    for (const prop in obj) {
      if (prop.slice(0, 2) == "on") {
        onProperties.push(prop);
      }
    }
    for (let j = 0; j < onProperties.length; j++) {
      patchProperty(obj, onProperties[j], prototype);
    }
  }
}
var originalInstanceKey = zoneSymbol("originalInstance");
function patchClass(className) {
  const OriginalClass = _global[className];
  if (!OriginalClass) return;
  _global[zoneSymbol(className)] = OriginalClass;
  _global[className] = function() {
    const a = bindArguments(arguments, className);
    switch (a.length) {
      case 0:
        this[originalInstanceKey] = new OriginalClass();
        break;
      case 1:
        this[originalInstanceKey] = new OriginalClass(a[0]);
        break;
      case 2:
        this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
        break;
      case 3:
        this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
        break;
      case 4:
        this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
        break;
      default:
        throw new Error("Arg list too long.");
    }
  };
  attachOriginToPatched(_global[className], OriginalClass);
  const instance = new OriginalClass(function() {
  });
  let prop;
  for (prop in instance) {
    if (className === "XMLHttpRequest" && prop === "responseBlob") continue;
    (function(prop2) {
      if (typeof instance[prop2] === "function") {
        _global[className].prototype[prop2] = function() {
          return this[originalInstanceKey][prop2].apply(this[originalInstanceKey], arguments);
        };
      } else {
        ObjectDefineProperty(_global[className].prototype, prop2, {
          set: function(fn) {
            if (typeof fn === "function") {
              this[originalInstanceKey][prop2] = wrapWithCurrentZone(fn, className + "." + prop2);
              attachOriginToPatched(this[originalInstanceKey][prop2], fn);
            } else {
              this[originalInstanceKey][prop2] = fn;
            }
          },
          get: function() {
            return this[originalInstanceKey][prop2];
          }
        });
      }
    })(prop);
  }
  for (prop in OriginalClass) {
    if (prop !== "prototype" && OriginalClass.hasOwnProperty(prop)) {
      _global[className][prop] = OriginalClass[prop];
    }
  }
}
function patchMethod(target, name, patchFn) {
  let proto = target;
  while (proto && !proto.hasOwnProperty(name)) {
    proto = ObjectGetPrototypeOf(proto);
  }
  if (!proto && target[name]) {
    proto = target;
  }
  const delegateName = zoneSymbol(name);
  let delegate = null;
  if (proto && (!(delegate = proto[delegateName]) || !proto.hasOwnProperty(delegateName))) {
    delegate = proto[delegateName] = proto[name];
    const desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);
    if (isPropertyWritable(desc)) {
      const patchDelegate = patchFn(delegate, delegateName, name);
      proto[name] = function() {
        return patchDelegate(this, arguments);
      };
      attachOriginToPatched(proto[name], delegate);
    }
  }
  return delegate;
}
function patchMacroTask(obj, funcName, metaCreator) {
  let setNative = null;
  function scheduleTask(task) {
    const data = task.data;
    data.args[data.cbIdx] = function() {
      task.invoke.apply(this, arguments);
    };
    setNative.apply(data.target, data.args);
    return task;
  }
  setNative = patchMethod(obj, funcName, (delegate) => function(self2, args) {
    const meta = metaCreator(self2, args);
    if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === "function") {
      return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
    } else {
      return delegate.apply(self2, args);
    }
  });
}
function attachOriginToPatched(patched, original) {
  patched[zoneSymbol("OriginalDelegate")] = original;
}
var isDetectedIEOrEdge = false;
var ieOrEdge = false;
function isIEOrEdge() {
  if (isDetectedIEOrEdge) {
    return ieOrEdge;
  }
  isDetectedIEOrEdge = true;
  try {
    const ua = internalWindow.navigator.userAgent;
    if (ua.indexOf("MSIE ") !== -1 || ua.indexOf("Trident/") !== -1 || ua.indexOf("Edge/") !== -1) {
      ieOrEdge = true;
    }
  } catch (error) {
  }
  return ieOrEdge;
}
function isFunction(value) {
  return typeof value === "function";
}
function isNumber(value) {
  return typeof value === "number";
}
var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
  useG: true
};
var zoneSymbolEventNames = {};
var globalSources = {};
var EVENT_NAME_SYMBOL_REGX = new RegExp("^" + ZONE_SYMBOL_PREFIX + "(\\w+)(true|false)$");
var IMMEDIATE_PROPAGATION_SYMBOL = zoneSymbol("propagationStopped");
function prepareEventNames(eventName, eventNameToString) {
  const falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
  const trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
  const symbol = ZONE_SYMBOL_PREFIX + falseEventName;
  const symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
  zoneSymbolEventNames[eventName] = {};
  zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
  zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
}
function patchEventTarget(_global2, api, apis, patchOptions) {
  const ADD_EVENT_LISTENER = patchOptions && patchOptions.add || ADD_EVENT_LISTENER_STR;
  const REMOVE_EVENT_LISTENER = patchOptions && patchOptions.rm || REMOVE_EVENT_LISTENER_STR;
  const LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.listeners || "eventListeners";
  const REMOVE_ALL_LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.rmAll || "removeAllListeners";
  const zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
  const ADD_EVENT_LISTENER_SOURCE = "." + ADD_EVENT_LISTENER + ":";
  const PREPEND_EVENT_LISTENER = "prependListener";
  const PREPEND_EVENT_LISTENER_SOURCE = "." + PREPEND_EVENT_LISTENER + ":";
  const invokeTask = function(task, target, event) {
    if (task.isRemoved) {
      return;
    }
    const delegate = task.callback;
    if (typeof delegate === "object" && delegate.handleEvent) {
      task.callback = (event2) => delegate.handleEvent(event2);
      task.originalDelegate = delegate;
    }
    let error;
    try {
      task.invoke(task, target, [event]);
    } catch (err) {
      error = err;
    }
    const options = task.options;
    if (options && typeof options === "object" && options.once) {
      const delegate2 = task.originalDelegate ? task.originalDelegate : task.callback;
      target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate2, options);
    }
    return error;
  };
  function globalCallback(context, event, isCapture) {
    event = event || _global2.event;
    if (!event) {
      return;
    }
    const target = context || event.target || _global2;
    const tasks = target[zoneSymbolEventNames[event.type][isCapture ? TRUE_STR : FALSE_STR]];
    if (tasks) {
      const errors = [];
      if (tasks.length === 1) {
        const err = invokeTask(tasks[0], target, event);
        err && errors.push(err);
      } else {
        const copyTasks = tasks.slice();
        for (let i = 0; i < copyTasks.length; i++) {
          if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
            break;
          }
          const err = invokeTask(copyTasks[i], target, event);
          err && errors.push(err);
        }
      }
      if (errors.length === 1) {
        throw errors[0];
      } else {
        for (let i = 0; i < errors.length; i++) {
          const err = errors[i];
          api.nativeScheduleMicroTask(() => {
            throw err;
          });
        }
      }
    }
  }
  const globalZoneAwareCallback = function(event) {
    return globalCallback(this, event, false);
  };
  const globalZoneAwareCaptureCallback = function(event) {
    return globalCallback(this, event, true);
  };
  function patchEventTargetMethods(obj, patchOptions2) {
    if (!obj) {
      return false;
    }
    let useGlobalCallback = true;
    if (patchOptions2 && patchOptions2.useG !== void 0) {
      useGlobalCallback = patchOptions2.useG;
    }
    const validateHandler = patchOptions2 && patchOptions2.vh;
    let checkDuplicate = true;
    if (patchOptions2 && patchOptions2.chkDup !== void 0) {
      checkDuplicate = patchOptions2.chkDup;
    }
    let returnTarget = false;
    if (patchOptions2 && patchOptions2.rt !== void 0) {
      returnTarget = patchOptions2.rt;
    }
    let proto = obj;
    while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
      proto = ObjectGetPrototypeOf(proto);
    }
    if (!proto && obj[ADD_EVENT_LISTENER]) {
      proto = obj;
    }
    if (!proto) {
      return false;
    }
    if (proto[zoneSymbolAddEventListener]) {
      return false;
    }
    const eventNameToString = patchOptions2 && patchOptions2.eventNameToString;
    const taskData = {};
    const nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
    const nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] = proto[REMOVE_EVENT_LISTENER];
    const nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] = proto[LISTENERS_EVENT_LISTENER];
    const nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] = proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
    let nativePrependEventListener;
    if (patchOptions2 && patchOptions2.prepend) {
      nativePrependEventListener = proto[zoneSymbol(patchOptions2.prepend)] = proto[patchOptions2.prepend];
    }
    function buildEventListenerOptions(options, passive) {
      if (!passive) {
        return options;
      }
      if (typeof options === "boolean") {
        return {
          capture: options,
          passive: true
        };
      }
      if (!options) {
        return {
          passive: true
        };
      }
      if (typeof options === "object" && options.passive !== false) {
        return {
          ...options,
          passive: true
        };
      }
      return options;
    }
    const customScheduleGlobal = function(task) {
      if (taskData.isExisting) {
        return;
      }
      return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
    };
    const customCancelGlobal = function(task) {
      if (!task.isRemoved) {
        const symbolEventNames = zoneSymbolEventNames[task.eventName];
        let symbolEventName;
        if (symbolEventNames) {
          symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
        }
        const existingTasks = symbolEventName && task.target[symbolEventName];
        if (existingTasks) {
          for (let i = 0; i < existingTasks.length; i++) {
            const existingTask = existingTasks[i];
            if (existingTask === task) {
              existingTasks.splice(i, 1);
              task.isRemoved = true;
              if (task.removeAbortListener) {
                task.removeAbortListener();
                task.removeAbortListener = null;
              }
              if (existingTasks.length === 0) {
                task.allRemoved = true;
                task.target[symbolEventName] = null;
              }
              break;
            }
          }
        }
      }
      if (!task.allRemoved) {
        return;
      }
      return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
    };
    const customScheduleNonGlobal = function(task) {
      return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
    };
    const customSchedulePrepend = function(task) {
      return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
    };
    const customCancelNonGlobal = function(task) {
      return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
    };
    const customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
    const customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
    const compareTaskCallbackVsDelegate = function(task, delegate) {
      const typeOfDelegate = typeof delegate;
      return typeOfDelegate === "function" && task.callback === delegate || typeOfDelegate === "object" && task.originalDelegate === delegate;
    };
    const compare = (patchOptions2 == null ? void 0 : patchOptions2.diff) || compareTaskCallbackVsDelegate;
    const unpatchedEvents = Zone[zoneSymbol("UNPATCHED_EVENTS")];
    const passiveEvents = _global2[zoneSymbol("PASSIVE_EVENTS")];
    function copyEventListenerOptions(options) {
      if (typeof options === "object" && options !== null) {
        const newOptions = {
          ...options
        };
        if (options.signal) {
          newOptions.signal = options.signal;
        }
        return newOptions;
      }
      return options;
    }
    const makeAddListener = function(nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget2 = false, prepend = false) {
      return function() {
        const target = this || _global2;
        let eventName = arguments[0];
        if (patchOptions2 && patchOptions2.transferEventName) {
          eventName = patchOptions2.transferEventName(eventName);
        }
        let delegate = arguments[1];
        if (!delegate) {
          return nativeListener.apply(this, arguments);
        }
        if (isNode && eventName === "uncaughtException") {
          return nativeListener.apply(this, arguments);
        }
        let isEventListenerObject = false;
        if (typeof delegate !== "function") {
          if (!delegate.handleEvent) {
            return nativeListener.apply(this, arguments);
          }
          isEventListenerObject = true;
        }
        if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
          return;
        }
        const passive = !!passiveEvents && passiveEvents.indexOf(eventName) !== -1;
        const options = copyEventListenerOptions(buildEventListenerOptions(arguments[2], passive));
        const signal = options == null ? void 0 : options.signal;
        if (signal == null ? void 0 : signal.aborted) {
          return;
        }
        if (unpatchedEvents) {
          for (let i = 0; i < unpatchedEvents.length; i++) {
            if (eventName === unpatchedEvents[i]) {
              if (passive) {
                return nativeListener.call(target, eventName, delegate, options);
              } else {
                return nativeListener.apply(this, arguments);
              }
            }
          }
        }
        const capture = !options ? false : typeof options === "boolean" ? true : options.capture;
        const once = options && typeof options === "object" ? options.once : false;
        const zone = Zone.current;
        let symbolEventNames = zoneSymbolEventNames[eventName];
        if (!symbolEventNames) {
          prepareEventNames(eventName, eventNameToString);
          symbolEventNames = zoneSymbolEventNames[eventName];
        }
        const symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
        let existingTasks = target[symbolEventName];
        let isExisting = false;
        if (existingTasks) {
          isExisting = true;
          if (checkDuplicate) {
            for (let i = 0; i < existingTasks.length; i++) {
              if (compare(existingTasks[i], delegate)) {
                return;
              }
            }
          }
        } else {
          existingTasks = target[symbolEventName] = [];
        }
        let source;
        const constructorName = target.constructor["name"];
        const targetSource = globalSources[constructorName];
        if (targetSource) {
          source = targetSource[eventName];
        }
        if (!source) {
          source = constructorName + addSource + (eventNameToString ? eventNameToString(eventName) : eventName);
        }
        taskData.options = options;
        if (once) {
          taskData.options.once = false;
        }
        taskData.target = target;
        taskData.capture = capture;
        taskData.eventName = eventName;
        taskData.isExisting = isExisting;
        const data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : void 0;
        if (data) {
          data.taskData = taskData;
        }
        if (signal) {
          taskData.options.signal = void 0;
        }
        const task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
        if (signal) {
          taskData.options.signal = signal;
          const onAbort = () => task.zone.cancelTask(task);
          nativeListener.call(signal, "abort", onAbort, {
            once: true
          });
          task.removeAbortListener = () => signal.removeEventListener("abort", onAbort);
        }
        taskData.target = null;
        if (data) {
          data.taskData = null;
        }
        if (once) {
          taskData.options.once = true;
        }
        if (typeof task.options !== "boolean") {
          task.options = options;
        }
        task.target = target;
        task.capture = capture;
        task.eventName = eventName;
        if (isEventListenerObject) {
          task.originalDelegate = delegate;
        }
        if (!prepend) {
          existingTasks.push(task);
        } else {
          existingTasks.unshift(task);
        }
        if (returnTarget2) {
          return target;
        }
      };
    };
    proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
    if (nativePrependEventListener) {
      proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
    }
    proto[REMOVE_EVENT_LISTENER] = function() {
      const target = this || _global2;
      let eventName = arguments[0];
      if (patchOptions2 && patchOptions2.transferEventName) {
        eventName = patchOptions2.transferEventName(eventName);
      }
      const options = arguments[2];
      const capture = !options ? false : typeof options === "boolean" ? true : options.capture;
      const delegate = arguments[1];
      if (!delegate) {
        return nativeRemoveEventListener.apply(this, arguments);
      }
      if (validateHandler && !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
        return;
      }
      const symbolEventNames = zoneSymbolEventNames[eventName];
      let symbolEventName;
      if (symbolEventNames) {
        symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
      }
      const existingTasks = symbolEventName && target[symbolEventName];
      if (existingTasks) {
        for (let i = 0; i < existingTasks.length; i++) {
          const existingTask = existingTasks[i];
          if (compare(existingTask, delegate)) {
            existingTasks.splice(i, 1);
            existingTask.isRemoved = true;
            if (existingTasks.length === 0) {
              existingTask.allRemoved = true;
              target[symbolEventName] = null;
              if (!capture && typeof eventName === "string") {
                const onPropertySymbol = ZONE_SYMBOL_PREFIX + "ON_PROPERTY" + eventName;
                target[onPropertySymbol] = null;
              }
            }
            existingTask.zone.cancelTask(existingTask);
            if (returnTarget) {
              return target;
            }
            return;
          }
        }
      }
      return nativeRemoveEventListener.apply(this, arguments);
    };
    proto[LISTENERS_EVENT_LISTENER] = function() {
      const target = this || _global2;
      let eventName = arguments[0];
      if (patchOptions2 && patchOptions2.transferEventName) {
        eventName = patchOptions2.transferEventName(eventName);
      }
      const listeners = [];
      const tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);
      for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
        listeners.push(delegate);
      }
      return listeners;
    };
    proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function() {
      const target = this || _global2;
      let eventName = arguments[0];
      if (!eventName) {
        const keys = Object.keys(target);
        for (let i = 0; i < keys.length; i++) {
          const prop = keys[i];
          const match = EVENT_NAME_SYMBOL_REGX.exec(prop);
          let evtName = match && match[1];
          if (evtName && evtName !== "removeListener") {
            this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
          }
        }
        this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, "removeListener");
      } else {
        if (patchOptions2 && patchOptions2.transferEventName) {
          eventName = patchOptions2.transferEventName(eventName);
        }
        const symbolEventNames = zoneSymbolEventNames[eventName];
        if (symbolEventNames) {
          const symbolEventName = symbolEventNames[FALSE_STR];
          const symbolCaptureEventName = symbolEventNames[TRUE_STR];
          const tasks = target[symbolEventName];
          const captureTasks = target[symbolCaptureEventName];
          if (tasks) {
            const removeTasks = tasks.slice();
            for (let i = 0; i < removeTasks.length; i++) {
              const task = removeTasks[i];
              let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
              this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
            }
          }
          if (captureTasks) {
            const removeTasks = captureTasks.slice();
            for (let i = 0; i < removeTasks.length; i++) {
              const task = removeTasks[i];
              let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
              this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
            }
          }
        }
      }
      if (returnTarget) {
        return this;
      }
    };
    attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
    attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
    if (nativeRemoveAllListeners) {
      attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
    }
    if (nativeListeners) {
      attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
    }
    return true;
  }
  let results = [];
  for (let i = 0; i < apis.length; i++) {
    results[i] = patchEventTargetMethods(apis[i], patchOptions);
  }
  return results;
}
function findEventTasks(target, eventName) {
  if (!eventName) {
    const foundTasks = [];
    for (let prop in target) {
      const match = EVENT_NAME_SYMBOL_REGX.exec(prop);
      let evtName = match && match[1];
      if (evtName && (!eventName || evtName === eventName)) {
        const tasks = target[prop];
        if (tasks) {
          for (let i = 0; i < tasks.length; i++) {
            foundTasks.push(tasks[i]);
          }
        }
      }
    }
    return foundTasks;
  }
  let symbolEventName = zoneSymbolEventNames[eventName];
  if (!symbolEventName) {
    prepareEventNames(eventName);
    symbolEventName = zoneSymbolEventNames[eventName];
  }
  const captureFalseTasks = target[symbolEventName[FALSE_STR]];
  const captureTrueTasks = target[symbolEventName[TRUE_STR]];
  if (!captureFalseTasks) {
    return captureTrueTasks ? captureTrueTasks.slice() : [];
  } else {
    return captureTrueTasks ? captureFalseTasks.concat(captureTrueTasks) : captureFalseTasks.slice();
  }
}
function patchEventPrototype(global2, api) {
  const Event = global2["Event"];
  if (Event && Event.prototype) {
    api.patchMethod(Event.prototype, "stopImmediatePropagation", (delegate) => function(self2, args) {
      self2[IMMEDIATE_PROPAGATION_SYMBOL] = true;
      delegate && delegate.apply(self2, args);
    });
  }
}
function patchQueueMicrotask(global2, api) {
  api.patchMethod(global2, "queueMicrotask", (delegate) => {
    return function(self2, args) {
      Zone.current.scheduleMicroTask("queueMicrotask", args[0]);
    };
  });
}
var taskSymbol = zoneSymbol("zoneTask");
function patchTimer(window2, setName, cancelName, nameSuffix) {
  let setNative = null;
  let clearNative = null;
  setName += nameSuffix;
  cancelName += nameSuffix;
  const tasksByHandleId = {};
  function scheduleTask(task) {
    const data = task.data;
    data.args[0] = function() {
      return task.invoke.apply(this, arguments);
    };
    const handleOrId = setNative.apply(window2, data.args);
    if (isNumber(handleOrId)) {
      data.handleId = handleOrId;
    } else {
      data.handle = handleOrId;
      data.isRefreshable = isFunction(handleOrId.refresh);
    }
    return task;
  }
  function clearTask(task) {
    const {
      handle,
      handleId
    } = task.data;
    return clearNative.call(window2, handle != null ? handle : handleId);
  }
  setNative = patchMethod(window2, setName, (delegate) => function(self2, args) {
    var _a;
    if (isFunction(args[0])) {
      const options = {
        isRefreshable: false,
        isPeriodic: nameSuffix === "Interval",
        delay: nameSuffix === "Timeout" || nameSuffix === "Interval" ? args[1] || 0 : void 0,
        args
      };
      const callback = args[0];
      args[0] = function timer() {
        try {
          return callback.apply(this, arguments);
        } finally {
          const {
            handle: handle2,
            handleId: handleId2,
            isPeriodic: isPeriodic2,
            isRefreshable: isRefreshable2
          } = options;
          if (!isPeriodic2 && !isRefreshable2) {
            if (handleId2) {
              delete tasksByHandleId[handleId2];
            } else if (handle2) {
              handle2[taskSymbol] = null;
            }
          }
        }
      };
      const task = scheduleMacroTaskWithCurrentZone(setName, args[0], options, scheduleTask, clearTask);
      if (!task) {
        return task;
      }
      const {
        handleId,
        handle,
        isRefreshable,
        isPeriodic
      } = task.data;
      if (handleId) {
        tasksByHandleId[handleId] = task;
      } else if (handle) {
        handle[taskSymbol] = task;
        if (isRefreshable && !isPeriodic) {
          const originalRefresh = handle.refresh;
          handle.refresh = function() {
            const {
              zone,
              state
            } = task;
            if (state === "notScheduled") {
              task._state = "scheduled";
              zone._updateTaskCount(task, 1);
            } else if (state === "running") {
              task._state = "scheduling";
            }
            return originalRefresh.call(this);
          };
        }
      }
      return (_a = handle != null ? handle : handleId) != null ? _a : task;
    } else {
      return delegate.apply(window2, args);
    }
  });
  clearNative = patchMethod(window2, cancelName, (delegate) => function(self2, args) {
    const id = args[0];
    let task;
    if (isNumber(id)) {
      task = tasksByHandleId[id];
      delete tasksByHandleId[id];
    } else {
      task = id == null ? void 0 : id[taskSymbol];
      if (task) {
        id[taskSymbol] = null;
      } else {
        task = id;
      }
    }
    if (task == null ? void 0 : task.type) {
      if (task.cancelFn) {
        task.zone.cancelTask(task);
      }
    } else {
      delegate.apply(window2, args);
    }
  });
}
function patchCustomElements(_global2, api) {
  const {
    isBrowser: isBrowser2,
    isMix: isMix2
  } = api.getGlobalObjects();
  if (!isBrowser2 && !isMix2 || !_global2["customElements"] || !("customElements" in _global2)) {
    return;
  }
  const callbacks = ["connectedCallback", "disconnectedCallback", "adoptedCallback", "attributeChangedCallback", "formAssociatedCallback", "formDisabledCallback", "formResetCallback", "formStateRestoreCallback"];
  api.patchCallbacks(api, _global2.customElements, "customElements", "define", callbacks);
}
function eventTargetPatch(_global2, api) {
  if (Zone[api.symbol("patchEventTarget")]) {
    return;
  }
  const {
    eventNames,
    zoneSymbolEventNames: zoneSymbolEventNames2,
    TRUE_STR: TRUE_STR2,
    FALSE_STR: FALSE_STR2,
    ZONE_SYMBOL_PREFIX: ZONE_SYMBOL_PREFIX2
  } = api.getGlobalObjects();
  for (let i = 0; i < eventNames.length; i++) {
    const eventName = eventNames[i];
    const falseEventName = eventName + FALSE_STR2;
    const trueEventName = eventName + TRUE_STR2;
    const symbol = ZONE_SYMBOL_PREFIX2 + falseEventName;
    const symbolCapture = ZONE_SYMBOL_PREFIX2 + trueEventName;
    zoneSymbolEventNames2[eventName] = {};
    zoneSymbolEventNames2[eventName][FALSE_STR2] = symbol;
    zoneSymbolEventNames2[eventName][TRUE_STR2] = symbolCapture;
  }
  const EVENT_TARGET = _global2["EventTarget"];
  if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
    return;
  }
  api.patchEventTarget(_global2, api, [EVENT_TARGET && EVENT_TARGET.prototype]);
  return true;
}
function patchEvent(global2, api) {
  api.patchEventPrototype(global2, api);
}
function filterProperties(target, onProperties, ignoreProperties) {
  if (!ignoreProperties || ignoreProperties.length === 0) {
    return onProperties;
  }
  const tip = ignoreProperties.filter((ip) => ip.target === target);
  if (tip.length === 0) {
    return onProperties;
  }
  const targetIgnoreProperties = tip[0].ignoreProperties;
  return onProperties.filter((op) => targetIgnoreProperties.indexOf(op) === -1);
}
function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
  if (!target) {
    return;
  }
  const filteredProperties = filterProperties(target, onProperties, ignoreProperties);
  patchOnProperties(target, filteredProperties, prototype);
}
function getOnEventNames(target) {
  return Object.getOwnPropertyNames(target).filter((name) => name.startsWith("on") && name.length > 2).map((name) => name.substring(2));
}
function propertyDescriptorPatch(api, _global2) {
  if (isNode && !isMix) {
    return;
  }
  if (Zone[api.symbol("patchEvents")]) {
    return;
  }
  const ignoreProperties = _global2["__Zone_ignore_on_properties"];
  let patchTargets = [];
  if (isBrowser) {
    const internalWindow2 = window;
    patchTargets = patchTargets.concat(["Document", "SVGElement", "Element", "HTMLElement", "HTMLBodyElement", "HTMLMediaElement", "HTMLFrameSetElement", "HTMLFrameElement", "HTMLIFrameElement", "HTMLMarqueeElement", "Worker"]);
    const ignoreErrorProperties = [];
    patchFilteredProperties(internalWindow2, getOnEventNames(internalWindow2), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(internalWindow2));
  }
  patchTargets = patchTargets.concat(["XMLHttpRequest", "XMLHttpRequestEventTarget", "IDBIndex", "IDBRequest", "IDBOpenDBRequest", "IDBDatabase", "IDBTransaction", "IDBCursor", "WebSocket"]);
  for (let i = 0; i < patchTargets.length; i++) {
    const target = _global2[patchTargets[i]];
    (target == null ? void 0 : target.prototype) && patchFilteredProperties(target.prototype, getOnEventNames(target.prototype), ignoreProperties);
  }
}
function patchBrowser(Zone2) {
  Zone2.__load_patch("legacy", (global2) => {
    const legacyPatch = global2[Zone2.__symbol__("legacyPatch")];
    if (legacyPatch) {
      legacyPatch();
    }
  });
  Zone2.__load_patch("timers", (global2) => {
    const set = "set";
    const clear = "clear";
    patchTimer(global2, set, clear, "Timeout");
    patchTimer(global2, set, clear, "Interval");
    patchTimer(global2, set, clear, "Immediate");
  });
  Zone2.__load_patch("requestAnimationFrame", (global2) => {
    patchTimer(global2, "request", "cancel", "AnimationFrame");
    patchTimer(global2, "mozRequest", "mozCancel", "AnimationFrame");
    patchTimer(global2, "webkitRequest", "webkitCancel", "AnimationFrame");
  });
  Zone2.__load_patch("blocking", (global2, Zone3) => {
    const blockingMethods = ["alert", "prompt", "confirm"];
    for (let i = 0; i < blockingMethods.length; i++) {
      const name = blockingMethods[i];
      patchMethod(global2, name, (delegate, symbol, name2) => {
        return function(s, args) {
          return Zone3.current.run(delegate, global2, args, name2);
        };
      });
    }
  });
  Zone2.__load_patch("EventTarget", (global2, Zone3, api) => {
    patchEvent(global2, api);
    eventTargetPatch(global2, api);
    const XMLHttpRequestEventTarget = global2["XMLHttpRequestEventTarget"];
    if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
      api.patchEventTarget(global2, api, [XMLHttpRequestEventTarget.prototype]);
    }
  });
  Zone2.__load_patch("MutationObserver", (global2, Zone3, api) => {
    patchClass("MutationObserver");
    patchClass("WebKitMutationObserver");
  });
  Zone2.__load_patch("IntersectionObserver", (global2, Zone3, api) => {
    patchClass("IntersectionObserver");
  });
  Zone2.__load_patch("FileReader", (global2, Zone3, api) => {
    patchClass("FileReader");
  });
  Zone2.__load_patch("on_property", (global2, Zone3, api) => {
    propertyDescriptorPatch(api, global2);
  });
  Zone2.__load_patch("customElements", (global2, Zone3, api) => {
    patchCustomElements(global2, api);
  });
  Zone2.__load_patch("XHR", (global2, Zone3) => {
    patchXHR(global2);
    const XHR_TASK = zoneSymbol("xhrTask");
    const XHR_SYNC = zoneSymbol("xhrSync");
    const XHR_LISTENER = zoneSymbol("xhrListener");
    const XHR_SCHEDULED = zoneSymbol("xhrScheduled");
    const XHR_URL = zoneSymbol("xhrURL");
    const XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol("xhrErrorBeforeScheduled");
    function patchXHR(window2) {
      const XMLHttpRequest = window2["XMLHttpRequest"];
      if (!XMLHttpRequest) {
        return;
      }
      const XMLHttpRequestPrototype = XMLHttpRequest.prototype;
      function findPendingTask(target) {
        return target[XHR_TASK];
      }
      let oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
      let oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
      if (!oriAddListener) {
        const XMLHttpRequestEventTarget = window2["XMLHttpRequestEventTarget"];
        if (XMLHttpRequestEventTarget) {
          const XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
          oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
          oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        }
      }
      const READY_STATE_CHANGE = "readystatechange";
      const SCHEDULED = "scheduled";
      function scheduleTask(task) {
        const data = task.data;
        const target = data.target;
        target[XHR_SCHEDULED] = false;
        target[XHR_ERROR_BEFORE_SCHEDULED] = false;
        const listener = target[XHR_LISTENER];
        if (!oriAddListener) {
          oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
          oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        }
        if (listener) {
          oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
        }
        const newListener = target[XHR_LISTENER] = () => {
          if (target.readyState === target.DONE) {
            if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
              const loadTasks = target[Zone3.__symbol__("loadfalse")];
              if (target.status !== 0 && loadTasks && loadTasks.length > 0) {
                const oriInvoke = task.invoke;
                task.invoke = function() {
                  const loadTasks2 = target[Zone3.__symbol__("loadfalse")];
                  for (let i = 0; i < loadTasks2.length; i++) {
                    if (loadTasks2[i] === task) {
                      loadTasks2.splice(i, 1);
                    }
                  }
                  if (!data.aborted && task.state === SCHEDULED) {
                    oriInvoke.call(task);
                  }
                };
                loadTasks.push(task);
              } else {
                task.invoke();
              }
            } else if (!data.aborted && target[XHR_SCHEDULED] === false) {
              target[XHR_ERROR_BEFORE_SCHEDULED] = true;
            }
          }
        };
        oriAddListener.call(target, READY_STATE_CHANGE, newListener);
        const storedTask = target[XHR_TASK];
        if (!storedTask) {
          target[XHR_TASK] = task;
        }
        sendNative.apply(target, data.args);
        target[XHR_SCHEDULED] = true;
        return task;
      }
      function placeholderCallback() {
      }
      function clearTask(task) {
        const data = task.data;
        data.aborted = true;
        return abortNative.apply(data.target, data.args);
      }
      const openNative = patchMethod(XMLHttpRequestPrototype, "open", () => function(self2, args) {
        self2[XHR_SYNC] = args[2] == false;
        self2[XHR_URL] = args[1];
        return openNative.apply(self2, args);
      });
      const XMLHTTPREQUEST_SOURCE = "XMLHttpRequest.send";
      const fetchTaskAborting = zoneSymbol("fetchTaskAborting");
      const fetchTaskScheduling = zoneSymbol("fetchTaskScheduling");
      const sendNative = patchMethod(XMLHttpRequestPrototype, "send", () => function(self2, args) {
        if (Zone3.current[fetchTaskScheduling] === true) {
          return sendNative.apply(self2, args);
        }
        if (self2[XHR_SYNC]) {
          return sendNative.apply(self2, args);
        } else {
          const options = {
            target: self2,
            url: self2[XHR_URL],
            isPeriodic: false,
            args,
            aborted: false
          };
          const task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);
          if (self2 && self2[XHR_ERROR_BEFORE_SCHEDULED] === true && !options.aborted && task.state === SCHEDULED) {
            task.invoke();
          }
        }
      });
      const abortNative = patchMethod(XMLHttpRequestPrototype, "abort", () => function(self2, args) {
        const task = findPendingTask(self2);
        if (task && typeof task.type == "string") {
          if (task.cancelFn == null || task.data && task.data.aborted) {
            return;
          }
          task.zone.cancelTask(task);
        } else if (Zone3.current[fetchTaskAborting] === true) {
          return abortNative.apply(self2, args);
        }
      });
    }
  });
  Zone2.__load_patch("geolocation", (global2) => {
    if (global2["navigator"] && global2["navigator"].geolocation) {
      patchPrototype(global2["navigator"].geolocation, ["getCurrentPosition", "watchPosition"]);
    }
  });
  Zone2.__load_patch("PromiseRejectionEvent", (global2, Zone3) => {
    function findPromiseRejectionHandler(evtName) {
      return function(e) {
        const eventTasks = findEventTasks(global2, evtName);
        eventTasks.forEach((eventTask) => {
          const PromiseRejectionEvent = global2["PromiseRejectionEvent"];
          if (PromiseRejectionEvent) {
            const evt = new PromiseRejectionEvent(evtName, {
              promise: e.promise,
              reason: e.rejection
            });
            eventTask.invoke(evt);
          }
        });
      };
    }
    if (global2["PromiseRejectionEvent"]) {
      Zone3[zoneSymbol("unhandledPromiseRejectionHandler")] = findPromiseRejectionHandler("unhandledrejection");
      Zone3[zoneSymbol("rejectionHandledHandler")] = findPromiseRejectionHandler("rejectionhandled");
    }
  });
  Zone2.__load_patch("queueMicrotask", (global2, Zone3, api) => {
    patchQueueMicrotask(global2, api);
  });
}
function patchPromise(Zone2) {
  Zone2.__load_patch("ZoneAwarePromise", (global2, Zone3, api) => {
    const ObjectGetOwnPropertyDescriptor2 = Object.getOwnPropertyDescriptor;
    const ObjectDefineProperty2 = Object.defineProperty;
    function readableObjectToString(obj) {
      if (obj && obj.toString === Object.prototype.toString) {
        const className = obj.constructor && obj.constructor.name;
        return (className ? className : "") + ": " + JSON.stringify(obj);
      }
      return obj ? obj.toString() : Object.prototype.toString.call(obj);
    }
    const __symbol__2 = api.symbol;
    const _uncaughtPromiseErrors = [];
    const isDisableWrappingUncaughtPromiseRejection = global2[__symbol__2("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")] !== false;
    const symbolPromise = __symbol__2("Promise");
    const symbolThen = __symbol__2("then");
    const creationTrace = "__creationTrace__";
    api.onUnhandledError = (e) => {
      if (api.showUncaughtError()) {
        const rejection = e && e.rejection;
        if (rejection) {
          console.error("Unhandled Promise rejection:", rejection instanceof Error ? rejection.message : rejection, "; Zone:", e.zone.name, "; Task:", e.task && e.task.source, "; Value:", rejection, rejection instanceof Error ? rejection.stack : void 0);
        } else {
          console.error(e);
        }
      }
    };
    api.microtaskDrainDone = () => {
      while (_uncaughtPromiseErrors.length) {
        const uncaughtPromiseError = _uncaughtPromiseErrors.shift();
        try {
          uncaughtPromiseError.zone.runGuarded(() => {
            if (uncaughtPromiseError.throwOriginal) {
              throw uncaughtPromiseError.rejection;
            }
            throw uncaughtPromiseError;
          });
        } catch (error) {
          handleUnhandledRejection(error);
        }
      }
    };
    const UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__2("unhandledPromiseRejectionHandler");
    function handleUnhandledRejection(e) {
      api.onUnhandledError(e);
      try {
        const handler = Zone3[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
        if (typeof handler === "function") {
          handler.call(this, e);
        }
      } catch (err) {
      }
    }
    function isThenable(value) {
      return value && typeof value.then === "function";
    }
    function forwardResolution(value) {
      return value;
    }
    function forwardRejection(rejection) {
      return ZoneAwarePromise.reject(rejection);
    }
    const symbolState = __symbol__2("state");
    const symbolValue = __symbol__2("value");
    const symbolFinally = __symbol__2("finally");
    const symbolParentPromiseValue = __symbol__2("parentPromiseValue");
    const symbolParentPromiseState = __symbol__2("parentPromiseState");
    const source = "Promise.then";
    const UNRESOLVED = null;
    const RESOLVED = true;
    const REJECTED = false;
    const REJECTED_NO_CATCH = 0;
    function makeResolver(promise, state) {
      return (v) => {
        try {
          resolvePromise(promise, state, v);
        } catch (err) {
          resolvePromise(promise, false, err);
        }
      };
    }
    const once = function() {
      let wasCalled = false;
      return function wrapper(wrappedFunction) {
        return function() {
          if (wasCalled) {
            return;
          }
          wasCalled = true;
          wrappedFunction.apply(null, arguments);
        };
      };
    };
    const TYPE_ERROR = "Promise resolved with itself";
    const CURRENT_TASK_TRACE_SYMBOL = __symbol__2("currentTaskTrace");
    function resolvePromise(promise, state, value) {
      const onceWrapper = once();
      if (promise === value) {
        throw new TypeError(TYPE_ERROR);
      }
      if (promise[symbolState] === UNRESOLVED) {
        let then = null;
        try {
          if (typeof value === "object" || typeof value === "function") {
            then = value && value.then;
          }
        } catch (err) {
          onceWrapper(() => {
            resolvePromise(promise, false, err);
          })();
          return promise;
        }
        if (state !== REJECTED && value instanceof ZoneAwarePromise && value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) && value[symbolState] !== UNRESOLVED) {
          clearRejectedNoCatch(value);
          resolvePromise(promise, value[symbolState], value[symbolValue]);
        } else if (state !== REJECTED && typeof then === "function") {
          try {
            then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
          } catch (err) {
            onceWrapper(() => {
              resolvePromise(promise, false, err);
            })();
          }
        } else {
          promise[symbolState] = state;
          const queue = promise[symbolValue];
          promise[symbolValue] = value;
          if (promise[symbolFinally] === symbolFinally) {
            if (state === RESOLVED) {
              promise[symbolState] = promise[symbolParentPromiseState];
              promise[symbolValue] = promise[symbolParentPromiseValue];
            }
          }
          if (state === REJECTED && value instanceof Error) {
            const trace = Zone3.currentTask && Zone3.currentTask.data && Zone3.currentTask.data[creationTrace];
            if (trace) {
              ObjectDefineProperty2(value, CURRENT_TASK_TRACE_SYMBOL, {
                configurable: true,
                enumerable: false,
                writable: true,
                value: trace
              });
            }
          }
          for (let i = 0; i < queue.length; ) {
            scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
          }
          if (queue.length == 0 && state == REJECTED) {
            promise[symbolState] = REJECTED_NO_CATCH;
            let uncaughtPromiseError = value;
            try {
              throw new Error("Uncaught (in promise): " + readableObjectToString(value) + (value && value.stack ? "\n" + value.stack : ""));
            } catch (err) {
              uncaughtPromiseError = err;
            }
            if (isDisableWrappingUncaughtPromiseRejection) {
              uncaughtPromiseError.throwOriginal = true;
            }
            uncaughtPromiseError.rejection = value;
            uncaughtPromiseError.promise = promise;
            uncaughtPromiseError.zone = Zone3.current;
            uncaughtPromiseError.task = Zone3.currentTask;
            _uncaughtPromiseErrors.push(uncaughtPromiseError);
            api.scheduleMicroTask();
          }
        }
      }
      return promise;
    }
    const REJECTION_HANDLED_HANDLER = __symbol__2("rejectionHandledHandler");
    function clearRejectedNoCatch(promise) {
      if (promise[symbolState] === REJECTED_NO_CATCH) {
        try {
          const handler = Zone3[REJECTION_HANDLED_HANDLER];
          if (handler && typeof handler === "function") {
            handler.call(this, {
              rejection: promise[symbolValue],
              promise
            });
          }
        } catch (err) {
        }
        promise[symbolState] = REJECTED;
        for (let i = 0; i < _uncaughtPromiseErrors.length; i++) {
          if (promise === _uncaughtPromiseErrors[i].promise) {
            _uncaughtPromiseErrors.splice(i, 1);
          }
        }
      }
    }
    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
      clearRejectedNoCatch(promise);
      const promiseState = promise[symbolState];
      const delegate = promiseState ? typeof onFulfilled === "function" ? onFulfilled : forwardResolution : typeof onRejected === "function" ? onRejected : forwardRejection;
      zone.scheduleMicroTask(source, () => {
        try {
          const parentPromiseValue = promise[symbolValue];
          const isFinallyPromise = !!chainPromise && symbolFinally === chainPromise[symbolFinally];
          if (isFinallyPromise) {
            chainPromise[symbolParentPromiseValue] = parentPromiseValue;
            chainPromise[symbolParentPromiseState] = promiseState;
          }
          const value = zone.run(delegate, void 0, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ? [] : [parentPromiseValue]);
          resolvePromise(chainPromise, true, value);
        } catch (error) {
          resolvePromise(chainPromise, false, error);
        }
      }, chainPromise);
    }
    const ZONE_AWARE_PROMISE_TO_STRING = "function ZoneAwarePromise() { [native code] }";
    const noop = function() {
    };
    const AggregateError = global2.AggregateError;
    class ZoneAwarePromise {
      static toString() {
        return ZONE_AWARE_PROMISE_TO_STRING;
      }
      static resolve(value) {
        if (value instanceof ZoneAwarePromise) {
          return value;
        }
        return resolvePromise(new this(null), RESOLVED, value);
      }
      static reject(error) {
        return resolvePromise(new this(null), REJECTED, error);
      }
      static withResolvers() {
        const result = {};
        result.promise = new ZoneAwarePromise((res, rej) => {
          result.resolve = res;
          result.reject = rej;
        });
        return result;
      }
      static any(values) {
        if (!values || typeof values[Symbol.iterator] !== "function") {
          return Promise.reject(new AggregateError([], "All promises were rejected"));
        }
        const promises = [];
        let count = 0;
        try {
          for (let v of values) {
            count++;
            promises.push(ZoneAwarePromise.resolve(v));
          }
        } catch (err) {
          return Promise.reject(new AggregateError([], "All promises were rejected"));
        }
        if (count === 0) {
          return Promise.reject(new AggregateError([], "All promises were rejected"));
        }
        let finished = false;
        const errors = [];
        return new ZoneAwarePromise((resolve, reject) => {
          for (let i = 0; i < promises.length; i++) {
            promises[i].then((v) => {
              if (finished) {
                return;
              }
              finished = true;
              resolve(v);
            }, (err) => {
              errors.push(err);
              count--;
              if (count === 0) {
                finished = true;
                reject(new AggregateError(errors, "All promises were rejected"));
              }
            });
          }
        });
      }
      static race(values) {
        let resolve;
        let reject;
        let promise = new this((res, rej) => {
          resolve = res;
          reject = rej;
        });
        function onResolve(value) {
          resolve(value);
        }
        function onReject(error) {
          reject(error);
        }
        for (let value of values) {
          if (!isThenable(value)) {
            value = this.resolve(value);
          }
          value.then(onResolve, onReject);
        }
        return promise;
      }
      static all(values) {
        return ZoneAwarePromise.allWithCallback(values);
      }
      static allSettled(values) {
        const P = this && this.prototype instanceof ZoneAwarePromise ? this : ZoneAwarePromise;
        return P.allWithCallback(values, {
          thenCallback: (value) => ({
            status: "fulfilled",
            value
          }),
          errorCallback: (err) => ({
            status: "rejected",
            reason: err
          })
        });
      }
      static allWithCallback(values, callback) {
        let resolve;
        let reject;
        let promise = new this((res, rej) => {
          resolve = res;
          reject = rej;
        });
        let unresolvedCount = 2;
        let valueIndex = 0;
        const resolvedValues = [];
        for (let value of values) {
          if (!isThenable(value)) {
            value = this.resolve(value);
          }
          const curValueIndex = valueIndex;
          try {
            value.then((value2) => {
              resolvedValues[curValueIndex] = callback ? callback.thenCallback(value2) : value2;
              unresolvedCount--;
              if (unresolvedCount === 0) {
                resolve(resolvedValues);
              }
            }, (err) => {
              if (!callback) {
                reject(err);
              } else {
                resolvedValues[curValueIndex] = callback.errorCallback(err);
                unresolvedCount--;
                if (unresolvedCount === 0) {
                  resolve(resolvedValues);
                }
              }
            });
          } catch (thenErr) {
            reject(thenErr);
          }
          unresolvedCount++;
          valueIndex++;
        }
        unresolvedCount -= 2;
        if (unresolvedCount === 0) {
          resolve(resolvedValues);
        }
        return promise;
      }
      constructor(executor) {
        const promise = this;
        if (!(promise instanceof ZoneAwarePromise)) {
          throw new Error("Must be an instanceof Promise.");
        }
        promise[symbolState] = UNRESOLVED;
        promise[symbolValue] = [];
        try {
          const onceWrapper = once();
          executor && executor(onceWrapper(makeResolver(promise, RESOLVED)), onceWrapper(makeResolver(promise, REJECTED)));
        } catch (error) {
          resolvePromise(promise, false, error);
        }
      }
      get [Symbol.toStringTag]() {
        return "Promise";
      }
      get [Symbol.species]() {
        return ZoneAwarePromise;
      }
      then(onFulfilled, onRejected) {
        var _a;
        let C = (_a = this.constructor) == null ? void 0 : _a[Symbol.species];
        if (!C || typeof C !== "function") {
          C = this.constructor || ZoneAwarePromise;
        }
        const chainPromise = new C(noop);
        const zone = Zone3.current;
        if (this[symbolState] == UNRESOLVED) {
          this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
        } else {
          scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
        }
        return chainPromise;
      }
      catch(onRejected) {
        return this.then(null, onRejected);
      }
      finally(onFinally) {
        var _a;
        let C = (_a = this.constructor) == null ? void 0 : _a[Symbol.species];
        if (!C || typeof C !== "function") {
          C = ZoneAwarePromise;
        }
        const chainPromise = new C(noop);
        chainPromise[symbolFinally] = symbolFinally;
        const zone = Zone3.current;
        if (this[symbolState] == UNRESOLVED) {
          this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
        } else {
          scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
        }
        return chainPromise;
      }
    }
    ZoneAwarePromise["resolve"] = ZoneAwarePromise.resolve;
    ZoneAwarePromise["reject"] = ZoneAwarePromise.reject;
    ZoneAwarePromise["race"] = ZoneAwarePromise.race;
    ZoneAwarePromise["all"] = ZoneAwarePromise.all;
    const NativePromise = global2[symbolPromise] = global2["Promise"];
    global2["Promise"] = ZoneAwarePromise;
    const symbolThenPatched = __symbol__2("thenPatched");
    function patchThen(Ctor) {
      const proto = Ctor.prototype;
      const prop = ObjectGetOwnPropertyDescriptor2(proto, "then");
      if (prop && (prop.writable === false || !prop.configurable)) {
        return;
      }
      const originalThen = proto.then;
      proto[symbolThen] = originalThen;
      Ctor.prototype.then = function(onResolve, onReject) {
        const wrapped = new ZoneAwarePromise((resolve, reject) => {
          originalThen.call(this, resolve, reject);
        });
        return wrapped.then(onResolve, onReject);
      };
      Ctor[symbolThenPatched] = true;
    }
    api.patchThen = patchThen;
    function zoneify(fn) {
      return function(self2, args) {
        let resultPromise = fn.apply(self2, args);
        if (resultPromise instanceof ZoneAwarePromise) {
          return resultPromise;
        }
        let ctor = resultPromise.constructor;
        if (!ctor[symbolThenPatched]) {
          patchThen(ctor);
        }
        return resultPromise;
      };
    }
    if (NativePromise) {
      patchThen(NativePromise);
      patchMethod(global2, "fetch", (delegate) => zoneify(delegate));
    }
    Promise[Zone3.__symbol__("uncaughtPromiseErrors")] = _uncaughtPromiseErrors;
    return ZoneAwarePromise;
  });
}
function patchToString(Zone2) {
  Zone2.__load_patch("toString", (global2) => {
    const originalFunctionToString = Function.prototype.toString;
    const ORIGINAL_DELEGATE_SYMBOL = zoneSymbol("OriginalDelegate");
    const PROMISE_SYMBOL = zoneSymbol("Promise");
    const ERROR_SYMBOL = zoneSymbol("Error");
    const newFunctionToString = function toString() {
      if (typeof this === "function") {
        const originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
        if (originalDelegate) {
          if (typeof originalDelegate === "function") {
            return originalFunctionToString.call(originalDelegate);
          } else {
            return Object.prototype.toString.call(originalDelegate);
          }
        }
        if (this === Promise) {
          const nativePromise = global2[PROMISE_SYMBOL];
          if (nativePromise) {
            return originalFunctionToString.call(nativePromise);
          }
        }
        if (this === Error) {
          const nativeError = global2[ERROR_SYMBOL];
          if (nativeError) {
            return originalFunctionToString.call(nativeError);
          }
        }
      }
      return originalFunctionToString.call(this);
    };
    newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
    Function.prototype.toString = newFunctionToString;
    const originalObjectToString = Object.prototype.toString;
    const PROMISE_OBJECT_TO_STRING = "[object Promise]";
    Object.prototype.toString = function() {
      if (typeof Promise === "function" && this instanceof Promise) {
        return PROMISE_OBJECT_TO_STRING;
      }
      return originalObjectToString.call(this);
    };
  });
}
function patchCallbacks(api, target, targetName, method, callbacks) {
  const symbol = Zone.__symbol__(method);
  if (target[symbol]) {
    return;
  }
  const nativeDelegate = target[symbol] = target[method];
  target[method] = function(name, opts, options) {
    if (opts && opts.prototype) {
      callbacks.forEach(function(callback) {
        const source = `${targetName}.${method}::` + callback;
        const prototype = opts.prototype;
        try {
          if (prototype.hasOwnProperty(callback)) {
            const descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);
            if (descriptor && descriptor.value) {
              descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);
              api._redefineProperty(opts.prototype, callback, descriptor);
            } else if (prototype[callback]) {
              prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
            }
          } else if (prototype[callback]) {
            prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
          }
        } catch {
        }
      });
    }
    return nativeDelegate.call(target, name, opts, options);
  };
  api.attachOriginToPatched(target[method], nativeDelegate);
}
function patchUtil(Zone2) {
  Zone2.__load_patch("util", (global2, Zone3, api) => {
    const eventNames = getOnEventNames(global2);
    api.patchOnProperties = patchOnProperties;
    api.patchMethod = patchMethod;
    api.bindArguments = bindArguments;
    api.patchMacroTask = patchMacroTask;
    const SYMBOL_BLACK_LISTED_EVENTS = Zone3.__symbol__("BLACK_LISTED_EVENTS");
    const SYMBOL_UNPATCHED_EVENTS = Zone3.__symbol__("UNPATCHED_EVENTS");
    if (global2[SYMBOL_UNPATCHED_EVENTS]) {
      global2[SYMBOL_BLACK_LISTED_EVENTS] = global2[SYMBOL_UNPATCHED_EVENTS];
    }
    if (global2[SYMBOL_BLACK_LISTED_EVENTS]) {
      Zone3[SYMBOL_BLACK_LISTED_EVENTS] = Zone3[SYMBOL_UNPATCHED_EVENTS] = global2[SYMBOL_BLACK_LISTED_EVENTS];
    }
    api.patchEventPrototype = patchEventPrototype;
    api.patchEventTarget = patchEventTarget;
    api.isIEOrEdge = isIEOrEdge;
    api.ObjectDefineProperty = ObjectDefineProperty;
    api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
    api.ObjectCreate = ObjectCreate;
    api.ArraySlice = ArraySlice;
    api.patchClass = patchClass;
    api.wrapWithCurrentZone = wrapWithCurrentZone;
    api.filterProperties = filterProperties;
    api.attachOriginToPatched = attachOriginToPatched;
    api._redefineProperty = Object.defineProperty;
    api.patchCallbacks = patchCallbacks;
    api.getGlobalObjects = () => ({
      globalSources,
      zoneSymbolEventNames,
      eventNames,
      isBrowser,
      isMix,
      isNode,
      TRUE_STR,
      FALSE_STR,
      ZONE_SYMBOL_PREFIX,
      ADD_EVENT_LISTENER_STR,
      REMOVE_EVENT_LISTENER_STR
    });
  });
}
function patchCommon(Zone2) {
  patchPromise(Zone2);
  patchToString(Zone2);
  patchUtil(Zone2);
}
var Zone$1 = loadZone();
patchCommon(Zone$1);
patchBrowser(Zone$1);

// src/polyfills.ts
window.global = window;
/*! Bundled license information:

zone.js/fesm2015/zone.js:
  (**
   * @license Angular v<unknown>
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy96b25lLWZsYWdzLnRzIiwibm9kZV9tb2R1bGVzL3pvbmUuanMvZmVzbTIwMTUvem9uZS5qcyIsInNyYy9wb2x5ZmlsbHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBQcmV2ZW50cyBBbmd1bGFyIGNoYW5nZSBkZXRlY3Rpb24gZnJvbVxuICogcnVubmluZyB3aXRoIGNlcnRhaW4gV2ViIENvbXBvbmVudCBjYWxsYmFja3NcbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlXG4od2luZG93IGFzIGFueSkuX19ab25lX2Rpc2FibGVfY3VzdG9tRWxlbWVudHMgPSB0cnVlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEBsaWNlbnNlIEFuZ3VsYXIgdjx1bmtub3duPlxuICogKGMpIDIwMTAtMjAyNSBHb29nbGUgTExDLiBodHRwczovL2FuZ3VsYXIuaW8vXG4gKiBMaWNlbnNlOiBNSVRcbiAqL1xuY29uc3QgZ2xvYmFsID0gZ2xvYmFsVGhpcztcbi8vIF9fWm9uZV9zeW1ib2xfcHJlZml4IGdsb2JhbCBjYW4gYmUgdXNlZCB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCB6b25lXG4vLyBzeW1ib2wgcHJlZml4IHdpdGggYSBjdXN0b20gb25lIGlmIG5lZWRlZC5cbmZ1bmN0aW9uIF9fc3ltYm9sX18obmFtZSkge1xuICBjb25zdCBzeW1ib2xQcmVmaXggPSBnbG9iYWxbJ19fWm9uZV9zeW1ib2xfcHJlZml4J10gfHwgJ19fem9uZV9zeW1ib2xfXyc7XG4gIHJldHVybiBzeW1ib2xQcmVmaXggKyBuYW1lO1xufVxuZnVuY3Rpb24gaW5pdFpvbmUoKSB7XG4gIGNvbnN0IHBlcmZvcm1hbmNlID0gZ2xvYmFsWydwZXJmb3JtYW5jZSddO1xuICBmdW5jdGlvbiBtYXJrKG5hbWUpIHtcbiAgICBwZXJmb3JtYW5jZSAmJiBwZXJmb3JtYW5jZVsnbWFyayddICYmIHBlcmZvcm1hbmNlWydtYXJrJ10obmFtZSk7XG4gIH1cbiAgZnVuY3Rpb24gcGVyZm9ybWFuY2VNZWFzdXJlKG5hbWUsIGxhYmVsKSB7XG4gICAgcGVyZm9ybWFuY2UgJiYgcGVyZm9ybWFuY2VbJ21lYXN1cmUnXSAmJiBwZXJmb3JtYW5jZVsnbWVhc3VyZSddKG5hbWUsIGxhYmVsKTtcbiAgfVxuICBtYXJrKCdab25lJyk7XG4gIGNsYXNzIFpvbmVJbXBsIHtcbiAgICBzdGF0aWMgX19zeW1ib2xfXyA9IF9fc3ltYm9sX187XG4gICAgc3RhdGljIGFzc2VydFpvbmVQYXRjaGVkKCkge1xuICAgICAgaWYgKGdsb2JhbFsnUHJvbWlzZSddICE9PSBwYXRjaGVzWydab25lQXdhcmVQcm9taXNlJ10pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdab25lLmpzIGhhcyBkZXRlY3RlZCB0aGF0IFpvbmVBd2FyZVByb21pc2UgYCh3aW5kb3d8Z2xvYmFsKS5Qcm9taXNlYCAnICsgJ2hhcyBiZWVuIG92ZXJ3cml0dGVuLlxcbicgKyAnTW9zdCBsaWtlbHkgY2F1c2UgaXMgdGhhdCBhIFByb21pc2UgcG9seWZpbGwgaGFzIGJlZW4gbG9hZGVkICcgKyAnYWZ0ZXIgWm9uZS5qcyAoUG9seWZpbGxpbmcgUHJvbWlzZSBhcGkgaXMgbm90IG5lY2Vzc2FyeSB3aGVuIHpvbmUuanMgaXMgbG9hZGVkLiAnICsgJ0lmIHlvdSBtdXN0IGxvYWQgb25lLCBkbyBzbyBiZWZvcmUgbG9hZGluZyB6b25lLmpzLiknKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGdldCByb290KCkge1xuICAgICAgbGV0IHpvbmUgPSBab25lSW1wbC5jdXJyZW50O1xuICAgICAgd2hpbGUgKHpvbmUucGFyZW50KSB7XG4gICAgICAgIHpvbmUgPSB6b25lLnBhcmVudDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB6b25lO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IGN1cnJlbnQoKSB7XG4gICAgICByZXR1cm4gX2N1cnJlbnRab25lRnJhbWUuem9uZTtcbiAgICB9XG4gICAgc3RhdGljIGdldCBjdXJyZW50VGFzaygpIHtcbiAgICAgIHJldHVybiBfY3VycmVudFRhc2s7XG4gICAgfVxuICAgIHN0YXRpYyBfX2xvYWRfcGF0Y2gobmFtZSwgZm4sIGlnbm9yZUR1cGxpY2F0ZSA9IGZhbHNlKSB7XG4gICAgICBpZiAocGF0Y2hlcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAvLyBgY2hlY2tEdXBsaWNhdGVgIG9wdGlvbiBpcyBkZWZpbmVkIGZyb20gZ2xvYmFsIHZhcmlhYmxlXG4gICAgICAgIC8vIHNvIGl0IHdvcmtzIGZvciBhbGwgbW9kdWxlcy5cbiAgICAgICAgLy8gYGlnbm9yZUR1cGxpY2F0ZWAgY2FuIHdvcmsgZm9yIHRoZSBzcGVjaWZpZWQgbW9kdWxlXG4gICAgICAgIGNvbnN0IGNoZWNrRHVwbGljYXRlID0gZ2xvYmFsW19fc3ltYm9sX18oJ2ZvcmNlRHVwbGljYXRlWm9uZUNoZWNrJyldID09PSB0cnVlO1xuICAgICAgICBpZiAoIWlnbm9yZUR1cGxpY2F0ZSAmJiBjaGVja0R1cGxpY2F0ZSkge1xuICAgICAgICAgIHRocm93IEVycm9yKCdBbHJlYWR5IGxvYWRlZCBwYXRjaDogJyArIG5hbWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCFnbG9iYWxbJ19fWm9uZV9kaXNhYmxlXycgKyBuYW1lXSkge1xuICAgICAgICBjb25zdCBwZXJmTmFtZSA9ICdab25lOicgKyBuYW1lO1xuICAgICAgICBtYXJrKHBlcmZOYW1lKTtcbiAgICAgICAgcGF0Y2hlc1tuYW1lXSA9IGZuKGdsb2JhbCwgWm9uZUltcGwsIF9hcGkpO1xuICAgICAgICBwZXJmb3JtYW5jZU1lYXN1cmUocGVyZk5hbWUsIHBlcmZOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2V0IHBhcmVudCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XG4gICAgfVxuICAgIGdldCBuYW1lKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgfVxuICAgIF9wYXJlbnQ7XG4gICAgX25hbWU7XG4gICAgX3Byb3BlcnRpZXM7XG4gICAgX3pvbmVEZWxlZ2F0ZTtcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQsIHpvbmVTcGVjKSB7XG4gICAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICB0aGlzLl9uYW1lID0gem9uZVNwZWMgPyB6b25lU3BlYy5uYW1lIHx8ICd1bm5hbWVkJyA6ICc8cm9vdD4nO1xuICAgICAgdGhpcy5fcHJvcGVydGllcyA9IHpvbmVTcGVjICYmIHpvbmVTcGVjLnByb3BlcnRpZXMgfHwge307XG4gICAgICB0aGlzLl96b25lRGVsZWdhdGUgPSBuZXcgX1pvbmVEZWxlZ2F0ZSh0aGlzLCB0aGlzLl9wYXJlbnQgJiYgdGhpcy5fcGFyZW50Ll96b25lRGVsZWdhdGUsIHpvbmVTcGVjKTtcbiAgICB9XG4gICAgZ2V0KGtleSkge1xuICAgICAgY29uc3Qgem9uZSA9IHRoaXMuZ2V0Wm9uZVdpdGgoa2V5KTtcbiAgICAgIGlmICh6b25lKSByZXR1cm4gem9uZS5fcHJvcGVydGllc1trZXldO1xuICAgIH1cbiAgICBnZXRab25lV2l0aChrZXkpIHtcbiAgICAgIGxldCBjdXJyZW50ID0gdGhpcztcbiAgICAgIHdoaWxlIChjdXJyZW50KSB7XG4gICAgICAgIGlmIChjdXJyZW50Ll9wcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICByZXR1cm4gY3VycmVudDtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50ID0gY3VycmVudC5fcGFyZW50O1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGZvcmsoem9uZVNwZWMpIHtcbiAgICAgIGlmICghem9uZVNwZWMpIHRocm93IG5ldyBFcnJvcignWm9uZVNwZWMgcmVxdWlyZWQhJyk7XG4gICAgICByZXR1cm4gdGhpcy5fem9uZURlbGVnYXRlLmZvcmsodGhpcywgem9uZVNwZWMpO1xuICAgIH1cbiAgICB3cmFwKGNhbGxiYWNrLCBzb3VyY2UpIHtcbiAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RpbmcgZnVuY3Rpb24gZ290OiAnICsgY2FsbGJhY2spO1xuICAgICAgfVxuICAgICAgY29uc3QgX2NhbGxiYWNrID0gdGhpcy5fem9uZURlbGVnYXRlLmludGVyY2VwdCh0aGlzLCBjYWxsYmFjaywgc291cmNlKTtcbiAgICAgIGNvbnN0IHpvbmUgPSB0aGlzO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHpvbmUucnVuR3VhcmRlZChfY2FsbGJhY2ssIHRoaXMsIGFyZ3VtZW50cywgc291cmNlKTtcbiAgICAgIH07XG4gICAgfVxuICAgIHJ1bihjYWxsYmFjaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MsIHNvdXJjZSkge1xuICAgICAgX2N1cnJlbnRab25lRnJhbWUgPSB7XG4gICAgICAgIHBhcmVudDogX2N1cnJlbnRab25lRnJhbWUsXG4gICAgICAgIHpvbmU6IHRoaXNcbiAgICAgIH07XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gdGhpcy5fem9uZURlbGVnYXRlLmludm9rZSh0aGlzLCBjYWxsYmFjaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MsIHNvdXJjZSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBfY3VycmVudFpvbmVGcmFtZSA9IF9jdXJyZW50Wm9uZUZyYW1lLnBhcmVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgcnVuR3VhcmRlZChjYWxsYmFjaywgYXBwbHlUaGlzID0gbnVsbCwgYXBwbHlBcmdzLCBzb3VyY2UpIHtcbiAgICAgIF9jdXJyZW50Wm9uZUZyYW1lID0ge1xuICAgICAgICBwYXJlbnQ6IF9jdXJyZW50Wm9uZUZyYW1lLFxuICAgICAgICB6b25lOiB0aGlzXG4gICAgICB9O1xuICAgICAgdHJ5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fem9uZURlbGVnYXRlLmludm9rZSh0aGlzLCBjYWxsYmFjaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MsIHNvdXJjZSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX3pvbmVEZWxlZ2F0ZS5oYW5kbGVFcnJvcih0aGlzLCBlcnJvcikpIHtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgX2N1cnJlbnRab25lRnJhbWUgPSBfY3VycmVudFpvbmVGcmFtZS5wYXJlbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJ1blRhc2sodGFzaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MpIHtcbiAgICAgIGlmICh0YXNrLnpvbmUgIT0gdGhpcykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgdGFzayBjYW4gb25seSBiZSBydW4gaW4gdGhlIHpvbmUgb2YgY3JlYXRpb24hIChDcmVhdGlvbjogJyArICh0YXNrLnpvbmUgfHwgTk9fWk9ORSkubmFtZSArICc7IEV4ZWN1dGlvbjogJyArIHRoaXMubmFtZSArICcpJyk7XG4gICAgICB9XG4gICAgICBjb25zdCB6b25lVGFzayA9IHRhc2s7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci96b25lLmpzL2lzc3Vlcy83NzgsIHNvbWV0aW1lcyBldmVudFRhc2tcbiAgICAgIC8vIHdpbGwgcnVuIGluIG5vdFNjaGVkdWxlZChjYW5jZWxlZCkgc3RhdGUsIHdlIHNob3VsZCBub3QgdHJ5IHRvXG4gICAgICAvLyBydW4gc3VjaCBraW5kIG9mIHRhc2sgYnV0IGp1c3QgcmV0dXJuXG4gICAgICBjb25zdCB7XG4gICAgICAgIHR5cGUsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBpc1BlcmlvZGljID0gZmFsc2UsXG4gICAgICAgICAgaXNSZWZyZXNoYWJsZSA9IGZhbHNlXG4gICAgICAgIH0gPSB7fVxuICAgICAgfSA9IHRhc2s7XG4gICAgICBpZiAodGFzay5zdGF0ZSA9PT0gbm90U2NoZWR1bGVkICYmICh0eXBlID09PSBldmVudFRhc2sgfHwgdHlwZSA9PT0gbWFjcm9UYXNrKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCByZUVudHJ5R3VhcmQgPSB0YXNrLnN0YXRlICE9IHJ1bm5pbmc7XG4gICAgICByZUVudHJ5R3VhcmQgJiYgem9uZVRhc2suX3RyYW5zaXRpb25UbyhydW5uaW5nLCBzY2hlZHVsZWQpO1xuICAgICAgY29uc3QgcHJldmlvdXNUYXNrID0gX2N1cnJlbnRUYXNrO1xuICAgICAgX2N1cnJlbnRUYXNrID0gem9uZVRhc2s7XG4gICAgICBfY3VycmVudFpvbmVGcmFtZSA9IHtcbiAgICAgICAgcGFyZW50OiBfY3VycmVudFpvbmVGcmFtZSxcbiAgICAgICAgem9uZTogdGhpc1xuICAgICAgfTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlID09IG1hY3JvVGFzayAmJiB0YXNrLmRhdGEgJiYgIWlzUGVyaW9kaWMgJiYgIWlzUmVmcmVzaGFibGUpIHtcbiAgICAgICAgICB0YXNrLmNhbmNlbEZuID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3pvbmVEZWxlZ2F0ZS5pbnZva2VUYXNrKHRoaXMsIHpvbmVUYXNrLCBhcHBseVRoaXMsIGFwcGx5QXJncyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX3pvbmVEZWxlZ2F0ZS5oYW5kbGVFcnJvcih0aGlzLCBlcnJvcikpIHtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgLy8gaWYgdGhlIHRhc2sncyBzdGF0ZSBpcyBub3RTY2hlZHVsZWQgb3IgdW5rbm93biwgdGhlbiBpdCBoYXMgYWxyZWFkeSBiZWVuIGNhbmNlbGxlZFxuICAgICAgICAvLyB3ZSBzaG91bGQgbm90IHJlc2V0IHRoZSBzdGF0ZSB0byBzY2hlZHVsZWRcbiAgICAgICAgY29uc3Qgc3RhdGUgPSB0YXNrLnN0YXRlO1xuICAgICAgICBpZiAoc3RhdGUgIT09IG5vdFNjaGVkdWxlZCAmJiBzdGF0ZSAhPT0gdW5rbm93bikge1xuICAgICAgICAgIGlmICh0eXBlID09IGV2ZW50VGFzayB8fCBpc1BlcmlvZGljIHx8IGlzUmVmcmVzaGFibGUgJiYgc3RhdGUgPT09IHNjaGVkdWxpbmcpIHtcbiAgICAgICAgICAgIHJlRW50cnlHdWFyZCAmJiB6b25lVGFzay5fdHJhbnNpdGlvblRvKHNjaGVkdWxlZCwgcnVubmluZywgc2NoZWR1bGluZyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHpvbmVEZWxlZ2F0ZXMgPSB6b25lVGFzay5fem9uZURlbGVnYXRlcztcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVRhc2tDb3VudCh6b25lVGFzaywgLTEpO1xuICAgICAgICAgICAgcmVFbnRyeUd1YXJkICYmIHpvbmVUYXNrLl90cmFuc2l0aW9uVG8obm90U2NoZWR1bGVkLCBydW5uaW5nLCBub3RTY2hlZHVsZWQpO1xuICAgICAgICAgICAgaWYgKGlzUmVmcmVzaGFibGUpIHtcbiAgICAgICAgICAgICAgem9uZVRhc2suX3pvbmVEZWxlZ2F0ZXMgPSB6b25lRGVsZWdhdGVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBfY3VycmVudFpvbmVGcmFtZSA9IF9jdXJyZW50Wm9uZUZyYW1lLnBhcmVudDtcbiAgICAgICAgX2N1cnJlbnRUYXNrID0gcHJldmlvdXNUYXNrO1xuICAgICAgfVxuICAgIH1cbiAgICBzY2hlZHVsZVRhc2sodGFzaykge1xuICAgICAgaWYgKHRhc2suem9uZSAmJiB0YXNrLnpvbmUgIT09IHRoaXMpIHtcbiAgICAgICAgLy8gY2hlY2sgaWYgdGhlIHRhc2sgd2FzIHJlc2NoZWR1bGVkLCB0aGUgbmV3Wm9uZVxuICAgICAgICAvLyBzaG91bGQgbm90IGJlIHRoZSBjaGlsZHJlbiBvZiB0aGUgb3JpZ2luYWwgem9uZVxuICAgICAgICBsZXQgbmV3Wm9uZSA9IHRoaXM7XG4gICAgICAgIHdoaWxlIChuZXdab25lKSB7XG4gICAgICAgICAgaWYgKG5ld1pvbmUgPT09IHRhc2suem9uZSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYGNhbiBub3QgcmVzY2hlZHVsZSB0YXNrIHRvICR7dGhpcy5uYW1lfSB3aGljaCBpcyBkZXNjZW5kYW50cyBvZiB0aGUgb3JpZ2luYWwgem9uZSAke3Rhc2suem9uZS5uYW1lfWApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBuZXdab25lID0gbmV3Wm9uZS5wYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRhc2suX3RyYW5zaXRpb25UbyhzY2hlZHVsaW5nLCBub3RTY2hlZHVsZWQpO1xuICAgICAgY29uc3Qgem9uZURlbGVnYXRlcyA9IFtdO1xuICAgICAgdGFzay5fem9uZURlbGVnYXRlcyA9IHpvbmVEZWxlZ2F0ZXM7XG4gICAgICB0YXNrLl96b25lID0gdGhpcztcbiAgICAgIHRyeSB7XG4gICAgICAgIHRhc2sgPSB0aGlzLl96b25lRGVsZWdhdGUuc2NoZWR1bGVUYXNrKHRoaXMsIHRhc2spO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIC8vIHNob3VsZCBzZXQgdGFzaydzIHN0YXRlIHRvIHVua25vd24gd2hlbiBzY2hlZHVsZVRhc2sgdGhyb3cgZXJyb3JcbiAgICAgICAgLy8gYmVjYXVzZSB0aGUgZXJyIG1heSBmcm9tIHJlc2NoZWR1bGUsIHNvIHRoZSBmcm9tU3RhdGUgbWF5YmUgbm90U2NoZWR1bGVkXG4gICAgICAgIHRhc2suX3RyYW5zaXRpb25Ubyh1bmtub3duLCBzY2hlZHVsaW5nLCBub3RTY2hlZHVsZWQpO1xuICAgICAgICAvLyBUT0RPOiBASmlhTGlQYXNzaW9uLCBzaG91bGQgd2UgY2hlY2sgdGhlIHJlc3VsdCBmcm9tIGhhbmRsZUVycm9yP1xuICAgICAgICB0aGlzLl96b25lRGVsZWdhdGUuaGFuZGxlRXJyb3IodGhpcywgZXJyKTtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfVxuICAgICAgaWYgKHRhc2suX3pvbmVEZWxlZ2F0ZXMgPT09IHpvbmVEZWxlZ2F0ZXMpIHtcbiAgICAgICAgLy8gd2UgaGF2ZSB0byBjaGVjayBiZWNhdXNlIGludGVybmFsbHkgdGhlIGRlbGVnYXRlIGNhbiByZXNjaGVkdWxlIHRoZSB0YXNrLlxuICAgICAgICB0aGlzLl91cGRhdGVUYXNrQ291bnQodGFzaywgMSk7XG4gICAgICB9XG4gICAgICBpZiAodGFzay5zdGF0ZSA9PSBzY2hlZHVsaW5nKSB7XG4gICAgICAgIHRhc2suX3RyYW5zaXRpb25UbyhzY2hlZHVsZWQsIHNjaGVkdWxpbmcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRhc2s7XG4gICAgfVxuICAgIHNjaGVkdWxlTWljcm9UYXNrKHNvdXJjZSwgY2FsbGJhY2ssIGRhdGEsIGN1c3RvbVNjaGVkdWxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlZHVsZVRhc2sobmV3IFpvbmVUYXNrKG1pY3JvVGFzaywgc291cmNlLCBjYWxsYmFjaywgZGF0YSwgY3VzdG9tU2NoZWR1bGUsIHVuZGVmaW5lZCkpO1xuICAgIH1cbiAgICBzY2hlZHVsZU1hY3JvVGFzayhzb3VyY2UsIGNhbGxiYWNrLCBkYXRhLCBjdXN0b21TY2hlZHVsZSwgY3VzdG9tQ2FuY2VsKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlZHVsZVRhc2sobmV3IFpvbmVUYXNrKG1hY3JvVGFzaywgc291cmNlLCBjYWxsYmFjaywgZGF0YSwgY3VzdG9tU2NoZWR1bGUsIGN1c3RvbUNhbmNlbCkpO1xuICAgIH1cbiAgICBzY2hlZHVsZUV2ZW50VGFzayhzb3VyY2UsIGNhbGxiYWNrLCBkYXRhLCBjdXN0b21TY2hlZHVsZSwgY3VzdG9tQ2FuY2VsKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlZHVsZVRhc2sobmV3IFpvbmVUYXNrKGV2ZW50VGFzaywgc291cmNlLCBjYWxsYmFjaywgZGF0YSwgY3VzdG9tU2NoZWR1bGUsIGN1c3RvbUNhbmNlbCkpO1xuICAgIH1cbiAgICBjYW5jZWxUYXNrKHRhc2spIHtcbiAgICAgIGlmICh0YXNrLnpvbmUgIT0gdGhpcykgdGhyb3cgbmV3IEVycm9yKCdBIHRhc2sgY2FuIG9ubHkgYmUgY2FuY2VsbGVkIGluIHRoZSB6b25lIG9mIGNyZWF0aW9uISAoQ3JlYXRpb246ICcgKyAodGFzay56b25lIHx8IE5PX1pPTkUpLm5hbWUgKyAnOyBFeGVjdXRpb246ICcgKyB0aGlzLm5hbWUgKyAnKScpO1xuICAgICAgaWYgKHRhc2suc3RhdGUgIT09IHNjaGVkdWxlZCAmJiB0YXNrLnN0YXRlICE9PSBydW5uaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRhc2suX3RyYW5zaXRpb25UbyhjYW5jZWxpbmcsIHNjaGVkdWxlZCwgcnVubmluZyk7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLl96b25lRGVsZWdhdGUuY2FuY2VsVGFzayh0aGlzLCB0YXNrKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAvLyBpZiBlcnJvciBvY2N1cnMgd2hlbiBjYW5jZWxUYXNrLCB0cmFuc2l0IHRoZSBzdGF0ZSB0byB1bmtub3duXG4gICAgICAgIHRhc2suX3RyYW5zaXRpb25Ubyh1bmtub3duLCBjYW5jZWxpbmcpO1xuICAgICAgICB0aGlzLl96b25lRGVsZWdhdGUuaGFuZGxlRXJyb3IodGhpcywgZXJyKTtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfVxuICAgICAgdGhpcy5fdXBkYXRlVGFza0NvdW50KHRhc2ssIC0xKTtcbiAgICAgIHRhc2suX3RyYW5zaXRpb25Ubyhub3RTY2hlZHVsZWQsIGNhbmNlbGluZyk7XG4gICAgICB0YXNrLnJ1bkNvdW50ID0gLTE7XG4gICAgICByZXR1cm4gdGFzaztcbiAgICB9XG4gICAgX3VwZGF0ZVRhc2tDb3VudCh0YXNrLCBjb3VudCkge1xuICAgICAgY29uc3Qgem9uZURlbGVnYXRlcyA9IHRhc2suX3pvbmVEZWxlZ2F0ZXM7XG4gICAgICBpZiAoY291bnQgPT0gLTEpIHtcbiAgICAgICAgdGFzay5fem9uZURlbGVnYXRlcyA9IG51bGw7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHpvbmVEZWxlZ2F0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgem9uZURlbGVnYXRlc1tpXS5fdXBkYXRlVGFza0NvdW50KHRhc2sudHlwZSwgY291bnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb25zdCBERUxFR0FURV9aUyA9IHtcbiAgICBuYW1lOiAnJyxcbiAgICBvbkhhc1Rhc2s6IChkZWxlZ2F0ZSwgXywgdGFyZ2V0LCBoYXNUYXNrU3RhdGUpID0+IGRlbGVnYXRlLmhhc1Rhc2sodGFyZ2V0LCBoYXNUYXNrU3RhdGUpLFxuICAgIG9uU2NoZWR1bGVUYXNrOiAoZGVsZWdhdGUsIF8sIHRhcmdldCwgdGFzaykgPT4gZGVsZWdhdGUuc2NoZWR1bGVUYXNrKHRhcmdldCwgdGFzayksXG4gICAgb25JbnZva2VUYXNrOiAoZGVsZWdhdGUsIF8sIHRhcmdldCwgdGFzaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MpID0+IGRlbGVnYXRlLmludm9rZVRhc2sodGFyZ2V0LCB0YXNrLCBhcHBseVRoaXMsIGFwcGx5QXJncyksXG4gICAgb25DYW5jZWxUYXNrOiAoZGVsZWdhdGUsIF8sIHRhcmdldCwgdGFzaykgPT4gZGVsZWdhdGUuY2FuY2VsVGFzayh0YXJnZXQsIHRhc2spXG4gIH07XG4gIGNsYXNzIF9ab25lRGVsZWdhdGUge1xuICAgIGdldCB6b25lKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3pvbmU7XG4gICAgfVxuICAgIF96b25lO1xuICAgIF90YXNrQ291bnRzID0ge1xuICAgICAgJ21pY3JvVGFzayc6IDAsXG4gICAgICAnbWFjcm9UYXNrJzogMCxcbiAgICAgICdldmVudFRhc2snOiAwXG4gICAgfTtcbiAgICBfcGFyZW50RGVsZWdhdGU7XG4gICAgX2ZvcmtEbGd0O1xuICAgIF9mb3JrWlM7XG4gICAgX2ZvcmtDdXJyWm9uZTtcbiAgICBfaW50ZXJjZXB0RGxndDtcbiAgICBfaW50ZXJjZXB0WlM7XG4gICAgX2ludGVyY2VwdEN1cnJab25lO1xuICAgIF9pbnZva2VEbGd0O1xuICAgIF9pbnZva2VaUztcbiAgICBfaW52b2tlQ3VyclpvbmU7XG4gICAgX2hhbmRsZUVycm9yRGxndDtcbiAgICBfaGFuZGxlRXJyb3JaUztcbiAgICBfaGFuZGxlRXJyb3JDdXJyWm9uZTtcbiAgICBfc2NoZWR1bGVUYXNrRGxndDtcbiAgICBfc2NoZWR1bGVUYXNrWlM7XG4gICAgX3NjaGVkdWxlVGFza0N1cnJab25lO1xuICAgIF9pbnZva2VUYXNrRGxndDtcbiAgICBfaW52b2tlVGFza1pTO1xuICAgIF9pbnZva2VUYXNrQ3VyclpvbmU7XG4gICAgX2NhbmNlbFRhc2tEbGd0O1xuICAgIF9jYW5jZWxUYXNrWlM7XG4gICAgX2NhbmNlbFRhc2tDdXJyWm9uZTtcbiAgICBfaGFzVGFza0RsZ3Q7XG4gICAgX2hhc1Rhc2tEbGd0T3duZXI7XG4gICAgX2hhc1Rhc2taUztcbiAgICBfaGFzVGFza0N1cnJab25lO1xuICAgIGNvbnN0cnVjdG9yKHpvbmUsIHBhcmVudERlbGVnYXRlLCB6b25lU3BlYykge1xuICAgICAgdGhpcy5fem9uZSA9IHpvbmU7XG4gICAgICB0aGlzLl9wYXJlbnREZWxlZ2F0ZSA9IHBhcmVudERlbGVnYXRlO1xuICAgICAgdGhpcy5fZm9ya1pTID0gem9uZVNwZWMgJiYgKHpvbmVTcGVjICYmIHpvbmVTcGVjLm9uRm9yayA/IHpvbmVTcGVjIDogcGFyZW50RGVsZWdhdGUuX2ZvcmtaUyk7XG4gICAgICB0aGlzLl9mb3JrRGxndCA9IHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkZvcmsgPyBwYXJlbnREZWxlZ2F0ZSA6IHBhcmVudERlbGVnYXRlLl9mb3JrRGxndCk7XG4gICAgICB0aGlzLl9mb3JrQ3VyclpvbmUgPSB6b25lU3BlYyAmJiAoem9uZVNwZWMub25Gb3JrID8gdGhpcy5fem9uZSA6IHBhcmVudERlbGVnYXRlLl9mb3JrQ3VyclpvbmUpO1xuICAgICAgdGhpcy5faW50ZXJjZXB0WlMgPSB6b25lU3BlYyAmJiAoem9uZVNwZWMub25JbnRlcmNlcHQgPyB6b25lU3BlYyA6IHBhcmVudERlbGVnYXRlLl9pbnRlcmNlcHRaUyk7XG4gICAgICB0aGlzLl9pbnRlcmNlcHREbGd0ID0gem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uSW50ZXJjZXB0ID8gcGFyZW50RGVsZWdhdGUgOiBwYXJlbnREZWxlZ2F0ZS5faW50ZXJjZXB0RGxndCk7XG4gICAgICB0aGlzLl9pbnRlcmNlcHRDdXJyWm9uZSA9IHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkludGVyY2VwdCA/IHRoaXMuX3pvbmUgOiBwYXJlbnREZWxlZ2F0ZS5faW50ZXJjZXB0Q3VyclpvbmUpO1xuICAgICAgdGhpcy5faW52b2tlWlMgPSB6b25lU3BlYyAmJiAoem9uZVNwZWMub25JbnZva2UgPyB6b25lU3BlYyA6IHBhcmVudERlbGVnYXRlLl9pbnZva2VaUyk7XG4gICAgICB0aGlzLl9pbnZva2VEbGd0ID0gem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uSW52b2tlID8gcGFyZW50RGVsZWdhdGUgOiBwYXJlbnREZWxlZ2F0ZS5faW52b2tlRGxndCk7XG4gICAgICB0aGlzLl9pbnZva2VDdXJyWm9uZSA9IHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkludm9rZSA/IHRoaXMuX3pvbmUgOiBwYXJlbnREZWxlZ2F0ZS5faW52b2tlQ3VyclpvbmUpO1xuICAgICAgdGhpcy5faGFuZGxlRXJyb3JaUyA9IHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkhhbmRsZUVycm9yID8gem9uZVNwZWMgOiBwYXJlbnREZWxlZ2F0ZS5faGFuZGxlRXJyb3JaUyk7XG4gICAgICB0aGlzLl9oYW5kbGVFcnJvckRsZ3QgPSB6b25lU3BlYyAmJiAoem9uZVNwZWMub25IYW5kbGVFcnJvciA/IHBhcmVudERlbGVnYXRlIDogcGFyZW50RGVsZWdhdGUuX2hhbmRsZUVycm9yRGxndCk7XG4gICAgICB0aGlzLl9oYW5kbGVFcnJvckN1cnJab25lID0gem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uSGFuZGxlRXJyb3IgPyB0aGlzLl96b25lIDogcGFyZW50RGVsZWdhdGUuX2hhbmRsZUVycm9yQ3VyclpvbmUpO1xuICAgICAgdGhpcy5fc2NoZWR1bGVUYXNrWlMgPSB6b25lU3BlYyAmJiAoem9uZVNwZWMub25TY2hlZHVsZVRhc2sgPyB6b25lU3BlYyA6IHBhcmVudERlbGVnYXRlLl9zY2hlZHVsZVRhc2taUyk7XG4gICAgICB0aGlzLl9zY2hlZHVsZVRhc2tEbGd0ID0gem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uU2NoZWR1bGVUYXNrID8gcGFyZW50RGVsZWdhdGUgOiBwYXJlbnREZWxlZ2F0ZS5fc2NoZWR1bGVUYXNrRGxndCk7XG4gICAgICB0aGlzLl9zY2hlZHVsZVRhc2tDdXJyWm9uZSA9IHpvbmVTcGVjICYmICh6b25lU3BlYy5vblNjaGVkdWxlVGFzayA/IHRoaXMuX3pvbmUgOiBwYXJlbnREZWxlZ2F0ZS5fc2NoZWR1bGVUYXNrQ3VyclpvbmUpO1xuICAgICAgdGhpcy5faW52b2tlVGFza1pTID0gem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uSW52b2tlVGFzayA/IHpvbmVTcGVjIDogcGFyZW50RGVsZWdhdGUuX2ludm9rZVRhc2taUyk7XG4gICAgICB0aGlzLl9pbnZva2VUYXNrRGxndCA9IHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkludm9rZVRhc2sgPyBwYXJlbnREZWxlZ2F0ZSA6IHBhcmVudERlbGVnYXRlLl9pbnZva2VUYXNrRGxndCk7XG4gICAgICB0aGlzLl9pbnZva2VUYXNrQ3VyclpvbmUgPSB6b25lU3BlYyAmJiAoem9uZVNwZWMub25JbnZva2VUYXNrID8gdGhpcy5fem9uZSA6IHBhcmVudERlbGVnYXRlLl9pbnZva2VUYXNrQ3VyclpvbmUpO1xuICAgICAgdGhpcy5fY2FuY2VsVGFza1pTID0gem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uQ2FuY2VsVGFzayA/IHpvbmVTcGVjIDogcGFyZW50RGVsZWdhdGUuX2NhbmNlbFRhc2taUyk7XG4gICAgICB0aGlzLl9jYW5jZWxUYXNrRGxndCA9IHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkNhbmNlbFRhc2sgPyBwYXJlbnREZWxlZ2F0ZSA6IHBhcmVudERlbGVnYXRlLl9jYW5jZWxUYXNrRGxndCk7XG4gICAgICB0aGlzLl9jYW5jZWxUYXNrQ3VyclpvbmUgPSB6b25lU3BlYyAmJiAoem9uZVNwZWMub25DYW5jZWxUYXNrID8gdGhpcy5fem9uZSA6IHBhcmVudERlbGVnYXRlLl9jYW5jZWxUYXNrQ3VyclpvbmUpO1xuICAgICAgdGhpcy5faGFzVGFza1pTID0gbnVsbDtcbiAgICAgIHRoaXMuX2hhc1Rhc2tEbGd0ID0gbnVsbDtcbiAgICAgIHRoaXMuX2hhc1Rhc2tEbGd0T3duZXIgPSBudWxsO1xuICAgICAgdGhpcy5faGFzVGFza0N1cnJab25lID0gbnVsbDtcbiAgICAgIGNvbnN0IHpvbmVTcGVjSGFzVGFzayA9IHpvbmVTcGVjICYmIHpvbmVTcGVjLm9uSGFzVGFzaztcbiAgICAgIGNvbnN0IHBhcmVudEhhc1Rhc2sgPSBwYXJlbnREZWxlZ2F0ZSAmJiBwYXJlbnREZWxlZ2F0ZS5faGFzVGFza1pTO1xuICAgICAgaWYgKHpvbmVTcGVjSGFzVGFzayB8fCBwYXJlbnRIYXNUYXNrKSB7XG4gICAgICAgIC8vIElmIHdlIG5lZWQgdG8gcmVwb3J0IGhhc1Rhc2ssIHRoYW4gdGhpcyBaUyBuZWVkcyB0byBkbyByZWYgY291bnRpbmcgb24gdGFza3MuIEluIHN1Y2hcbiAgICAgICAgLy8gYSBjYXNlIGFsbCB0YXNrIHJlbGF0ZWQgaW50ZXJjZXB0b3JzIG11c3QgZ28gdGhyb3VnaCB0aGlzIFpELiBXZSBjYW4ndCBzaG9ydCBjaXJjdWl0IGl0LlxuICAgICAgICB0aGlzLl9oYXNUYXNrWlMgPSB6b25lU3BlY0hhc1Rhc2sgPyB6b25lU3BlYyA6IERFTEVHQVRFX1pTO1xuICAgICAgICB0aGlzLl9oYXNUYXNrRGxndCA9IHBhcmVudERlbGVnYXRlO1xuICAgICAgICB0aGlzLl9oYXNUYXNrRGxndE93bmVyID0gdGhpcztcbiAgICAgICAgdGhpcy5faGFzVGFza0N1cnJab25lID0gdGhpcy5fem9uZTtcbiAgICAgICAgaWYgKCF6b25lU3BlYy5vblNjaGVkdWxlVGFzaykge1xuICAgICAgICAgIHRoaXMuX3NjaGVkdWxlVGFza1pTID0gREVMRUdBVEVfWlM7XG4gICAgICAgICAgdGhpcy5fc2NoZWR1bGVUYXNrRGxndCA9IHBhcmVudERlbGVnYXRlO1xuICAgICAgICAgIHRoaXMuX3NjaGVkdWxlVGFza0N1cnJab25lID0gdGhpcy5fem9uZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXpvbmVTcGVjLm9uSW52b2tlVGFzaykge1xuICAgICAgICAgIHRoaXMuX2ludm9rZVRhc2taUyA9IERFTEVHQVRFX1pTO1xuICAgICAgICAgIHRoaXMuX2ludm9rZVRhc2tEbGd0ID0gcGFyZW50RGVsZWdhdGU7XG4gICAgICAgICAgdGhpcy5faW52b2tlVGFza0N1cnJab25lID0gdGhpcy5fem9uZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXpvbmVTcGVjLm9uQ2FuY2VsVGFzaykge1xuICAgICAgICAgIHRoaXMuX2NhbmNlbFRhc2taUyA9IERFTEVHQVRFX1pTO1xuICAgICAgICAgIHRoaXMuX2NhbmNlbFRhc2tEbGd0ID0gcGFyZW50RGVsZWdhdGU7XG4gICAgICAgICAgdGhpcy5fY2FuY2VsVGFza0N1cnJab25lID0gdGhpcy5fem9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3JrKHRhcmdldFpvbmUsIHpvbmVTcGVjKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZm9ya1pTID8gdGhpcy5fZm9ya1pTLm9uRm9yayh0aGlzLl9mb3JrRGxndCwgdGhpcy56b25lLCB0YXJnZXRab25lLCB6b25lU3BlYykgOiBuZXcgWm9uZUltcGwodGFyZ2V0Wm9uZSwgem9uZVNwZWMpO1xuICAgIH1cbiAgICBpbnRlcmNlcHQodGFyZ2V0Wm9uZSwgY2FsbGJhY2ssIHNvdXJjZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2ludGVyY2VwdFpTID8gdGhpcy5faW50ZXJjZXB0WlMub25JbnRlcmNlcHQodGhpcy5faW50ZXJjZXB0RGxndCwgdGhpcy5faW50ZXJjZXB0Q3VyclpvbmUsIHRhcmdldFpvbmUsIGNhbGxiYWNrLCBzb3VyY2UpIDogY2FsbGJhY2s7XG4gICAgfVxuICAgIGludm9rZSh0YXJnZXRab25lLCBjYWxsYmFjaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MsIHNvdXJjZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZVpTID8gdGhpcy5faW52b2tlWlMub25JbnZva2UodGhpcy5faW52b2tlRGxndCwgdGhpcy5faW52b2tlQ3VyclpvbmUsIHRhcmdldFpvbmUsIGNhbGxiYWNrLCBhcHBseVRoaXMsIGFwcGx5QXJncywgc291cmNlKSA6IGNhbGxiYWNrLmFwcGx5KGFwcGx5VGhpcywgYXBwbHlBcmdzKTtcbiAgICB9XG4gICAgaGFuZGxlRXJyb3IodGFyZ2V0Wm9uZSwgZXJyb3IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVFcnJvclpTID8gdGhpcy5faGFuZGxlRXJyb3JaUy5vbkhhbmRsZUVycm9yKHRoaXMuX2hhbmRsZUVycm9yRGxndCwgdGhpcy5faGFuZGxlRXJyb3JDdXJyWm9uZSwgdGFyZ2V0Wm9uZSwgZXJyb3IpIDogdHJ1ZTtcbiAgICB9XG4gICAgc2NoZWR1bGVUYXNrKHRhcmdldFpvbmUsIHRhc2spIHtcbiAgICAgIGxldCByZXR1cm5UYXNrID0gdGFzaztcbiAgICAgIGlmICh0aGlzLl9zY2hlZHVsZVRhc2taUykge1xuICAgICAgICBpZiAodGhpcy5faGFzVGFza1pTKSB7XG4gICAgICAgICAgcmV0dXJuVGFzay5fem9uZURlbGVnYXRlcy5wdXNoKHRoaXMuX2hhc1Rhc2tEbGd0T3duZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVyblRhc2sgPSB0aGlzLl9zY2hlZHVsZVRhc2taUy5vblNjaGVkdWxlVGFzayh0aGlzLl9zY2hlZHVsZVRhc2tEbGd0LCB0aGlzLl9zY2hlZHVsZVRhc2tDdXJyWm9uZSwgdGFyZ2V0Wm9uZSwgdGFzayk7XG4gICAgICAgIGlmICghcmV0dXJuVGFzaykgcmV0dXJuVGFzayA9IHRhc2s7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGFzay5zY2hlZHVsZUZuKSB7XG4gICAgICAgICAgdGFzay5zY2hlZHVsZUZuKHRhc2spO1xuICAgICAgICB9IGVsc2UgaWYgKHRhc2sudHlwZSA9PSBtaWNyb1Rhc2spIHtcbiAgICAgICAgICBzY2hlZHVsZU1pY3JvVGFzayh0YXNrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Rhc2sgaXMgbWlzc2luZyBzY2hlZHVsZUZuLicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0dXJuVGFzaztcbiAgICB9XG4gICAgaW52b2tlVGFzayh0YXJnZXRab25lLCB0YXNrLCBhcHBseVRoaXMsIGFwcGx5QXJncykge1xuICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZVRhc2taUyA/IHRoaXMuX2ludm9rZVRhc2taUy5vbkludm9rZVRhc2sodGhpcy5faW52b2tlVGFza0RsZ3QsIHRoaXMuX2ludm9rZVRhc2tDdXJyWm9uZSwgdGFyZ2V0Wm9uZSwgdGFzaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MpIDogdGFzay5jYWxsYmFjay5hcHBseShhcHBseVRoaXMsIGFwcGx5QXJncyk7XG4gICAgfVxuICAgIGNhbmNlbFRhc2sodGFyZ2V0Wm9uZSwgdGFzaykge1xuICAgICAgbGV0IHZhbHVlO1xuICAgICAgaWYgKHRoaXMuX2NhbmNlbFRhc2taUykge1xuICAgICAgICB2YWx1ZSA9IHRoaXMuX2NhbmNlbFRhc2taUy5vbkNhbmNlbFRhc2sodGhpcy5fY2FuY2VsVGFza0RsZ3QsIHRoaXMuX2NhbmNlbFRhc2tDdXJyWm9uZSwgdGFyZ2V0Wm9uZSwgdGFzayk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIXRhc2suY2FuY2VsRm4pIHtcbiAgICAgICAgICB0aHJvdyBFcnJvcignVGFzayBpcyBub3QgY2FuY2VsYWJsZScpO1xuICAgICAgICB9XG4gICAgICAgIHZhbHVlID0gdGFzay5jYW5jZWxGbih0YXNrKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgaGFzVGFzayh0YXJnZXRab25lLCBpc0VtcHR5KSB7XG4gICAgICAvLyBoYXNUYXNrIHNob3VsZCBub3QgdGhyb3cgZXJyb3Igc28gb3RoZXIgWm9uZURlbGVnYXRlXG4gICAgICAvLyBjYW4gc3RpbGwgdHJpZ2dlciBoYXNUYXNrIGNhbGxiYWNrXG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLl9oYXNUYXNrWlMgJiYgdGhpcy5faGFzVGFza1pTLm9uSGFzVGFzayh0aGlzLl9oYXNUYXNrRGxndCwgdGhpcy5faGFzVGFza0N1cnJab25lLCB0YXJnZXRab25lLCBpc0VtcHR5KTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB0aGlzLmhhbmRsZUVycm9yKHRhcmdldFpvbmUsIGVycik7XG4gICAgICB9XG4gICAgfVxuICAgIF91cGRhdGVUYXNrQ291bnQodHlwZSwgY291bnQpIHtcbiAgICAgIGNvbnN0IGNvdW50cyA9IHRoaXMuX3Rhc2tDb3VudHM7XG4gICAgICBjb25zdCBwcmV2ID0gY291bnRzW3R5cGVdO1xuICAgICAgY29uc3QgbmV4dCA9IGNvdW50c1t0eXBlXSA9IHByZXYgKyBjb3VudDtcbiAgICAgIGlmIChuZXh0IDwgMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01vcmUgdGFza3MgZXhlY3V0ZWQgdGhlbiB3ZXJlIHNjaGVkdWxlZC4nKTtcbiAgICAgIH1cbiAgICAgIGlmIChwcmV2ID09IDAgfHwgbmV4dCA9PSAwKSB7XG4gICAgICAgIGNvbnN0IGlzRW1wdHkgPSB7XG4gICAgICAgICAgbWljcm9UYXNrOiBjb3VudHNbJ21pY3JvVGFzayddID4gMCxcbiAgICAgICAgICBtYWNyb1Rhc2s6IGNvdW50c1snbWFjcm9UYXNrJ10gPiAwLFxuICAgICAgICAgIGV2ZW50VGFzazogY291bnRzWydldmVudFRhc2snXSA+IDAsXG4gICAgICAgICAgY2hhbmdlOiB0eXBlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaGFzVGFzayh0aGlzLl96b25lLCBpc0VtcHR5KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY2xhc3MgWm9uZVRhc2sge1xuICAgIHR5cGU7XG4gICAgc291cmNlO1xuICAgIGludm9rZTtcbiAgICBjYWxsYmFjaztcbiAgICBkYXRhO1xuICAgIHNjaGVkdWxlRm47XG4gICAgY2FuY2VsRm47XG4gICAgX3pvbmUgPSBudWxsO1xuICAgIHJ1bkNvdW50ID0gMDtcbiAgICBfem9uZURlbGVnYXRlcyA9IG51bGw7XG4gICAgX3N0YXRlID0gJ25vdFNjaGVkdWxlZCc7XG4gICAgY29uc3RydWN0b3IodHlwZSwgc291cmNlLCBjYWxsYmFjaywgb3B0aW9ucywgc2NoZWR1bGVGbiwgY2FuY2VsRm4pIHtcbiAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgIHRoaXMuZGF0YSA9IG9wdGlvbnM7XG4gICAgICB0aGlzLnNjaGVkdWxlRm4gPSBzY2hlZHVsZUZuO1xuICAgICAgdGhpcy5jYW5jZWxGbiA9IGNhbmNlbEZuO1xuICAgICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NhbGxiYWNrIGlzIG5vdCBkZWZpbmVkJyk7XG4gICAgICB9XG4gICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgIC8vIFRPRE86IEBKaWFMaVBhc3Npb24gb3B0aW9ucyBzaG91bGQgaGF2ZSBpbnRlcmZhY2VcbiAgICAgIGlmICh0eXBlID09PSBldmVudFRhc2sgJiYgb3B0aW9ucyAmJiBvcHRpb25zLnVzZUcpIHtcbiAgICAgICAgdGhpcy5pbnZva2UgPSBab25lVGFzay5pbnZva2VUYXNrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pbnZva2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIFpvbmVUYXNrLmludm9rZVRhc2suY2FsbChnbG9iYWwsIHNlbGYsIHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBpbnZva2VUYXNrKHRhc2ssIHRhcmdldCwgYXJncykge1xuICAgICAgaWYgKCF0YXNrKSB7XG4gICAgICAgIHRhc2sgPSB0aGlzO1xuICAgICAgfVxuICAgICAgX251bWJlck9mTmVzdGVkVGFza0ZyYW1lcysrO1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGFzay5ydW5Db3VudCsrO1xuICAgICAgICByZXR1cm4gdGFzay56b25lLnJ1blRhc2sodGFzaywgdGFyZ2V0LCBhcmdzKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfbnVtYmVyT2ZOZXN0ZWRUYXNrRnJhbWVzID09IDEpIHtcbiAgICAgICAgICBkcmFpbk1pY3JvVGFza1F1ZXVlKCk7XG4gICAgICAgIH1cbiAgICAgICAgX251bWJlck9mTmVzdGVkVGFza0ZyYW1lcy0tO1xuICAgICAgfVxuICAgIH1cbiAgICBnZXQgem9uZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl96b25lO1xuICAgIH1cbiAgICBnZXQgc3RhdGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gICAgfVxuICAgIGNhbmNlbFNjaGVkdWxlUmVxdWVzdCgpIHtcbiAgICAgIHRoaXMuX3RyYW5zaXRpb25Ubyhub3RTY2hlZHVsZWQsIHNjaGVkdWxpbmcpO1xuICAgIH1cbiAgICBfdHJhbnNpdGlvblRvKHRvU3RhdGUsIGZyb21TdGF0ZTEsIGZyb21TdGF0ZTIpIHtcbiAgICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gZnJvbVN0YXRlMSB8fCB0aGlzLl9zdGF0ZSA9PT0gZnJvbVN0YXRlMikge1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IHRvU3RhdGU7XG4gICAgICAgIGlmICh0b1N0YXRlID09IG5vdFNjaGVkdWxlZCkge1xuICAgICAgICAgIHRoaXMuX3pvbmVEZWxlZ2F0ZXMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dGhpcy50eXBlfSAnJHt0aGlzLnNvdXJjZX0nOiBjYW4gbm90IHRyYW5zaXRpb24gdG8gJyR7dG9TdGF0ZX0nLCBleHBlY3Rpbmcgc3RhdGUgJyR7ZnJvbVN0YXRlMX0nJHtmcm9tU3RhdGUyID8gXCIgb3IgJ1wiICsgZnJvbVN0YXRlMiArIFwiJ1wiIDogJyd9LCB3YXMgJyR7dGhpcy5fc3RhdGV9Jy5gKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICBpZiAodGhpcy5kYXRhICYmIHR5cGVvZiB0aGlzLmRhdGEuaGFuZGxlSWQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEuaGFuZGxlSWQudG9TdHJpbmcoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodGhpcyk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGFkZCB0b0pTT04gbWV0aG9kIHRvIHByZXZlbnQgY3ljbGljIGVycm9yIHdoZW5cbiAgICAvLyBjYWxsIEpTT04uc3RyaW5naWZ5KHpvbmVUYXNrKVxuICAgIHRvSlNPTigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgICAgc3RhdGU6IHRoaXMuc3RhdGUsXG4gICAgICAgIHNvdXJjZTogdGhpcy5zb3VyY2UsXG4gICAgICAgIHpvbmU6IHRoaXMuem9uZS5uYW1lLFxuICAgICAgICBydW5Db3VudDogdGhpcy5ydW5Db3VudFxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAvLy8gIE1JQ1JPVEFTSyBRVUVVRVxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIGNvbnN0IHN5bWJvbFNldFRpbWVvdXQgPSBfX3N5bWJvbF9fKCdzZXRUaW1lb3V0Jyk7XG4gIGNvbnN0IHN5bWJvbFByb21pc2UgPSBfX3N5bWJvbF9fKCdQcm9taXNlJyk7XG4gIGNvbnN0IHN5bWJvbFRoZW4gPSBfX3N5bWJvbF9fKCd0aGVuJyk7XG4gIGxldCBfbWljcm9UYXNrUXVldWUgPSBbXTtcbiAgbGV0IF9pc0RyYWluaW5nTWljcm90YXNrUXVldWUgPSBmYWxzZTtcbiAgbGV0IG5hdGl2ZU1pY3JvVGFza1F1ZXVlUHJvbWlzZTtcbiAgZnVuY3Rpb24gbmF0aXZlU2NoZWR1bGVNaWNyb1Rhc2soZnVuYykge1xuICAgIGlmICghbmF0aXZlTWljcm9UYXNrUXVldWVQcm9taXNlKSB7XG4gICAgICBpZiAoZ2xvYmFsW3N5bWJvbFByb21pc2VdKSB7XG4gICAgICAgIG5hdGl2ZU1pY3JvVGFza1F1ZXVlUHJvbWlzZSA9IGdsb2JhbFtzeW1ib2xQcm9taXNlXS5yZXNvbHZlKDApO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobmF0aXZlTWljcm9UYXNrUXVldWVQcm9taXNlKSB7XG4gICAgICBsZXQgbmF0aXZlVGhlbiA9IG5hdGl2ZU1pY3JvVGFza1F1ZXVlUHJvbWlzZVtzeW1ib2xUaGVuXTtcbiAgICAgIGlmICghbmF0aXZlVGhlbikge1xuICAgICAgICAvLyBuYXRpdmUgUHJvbWlzZSBpcyBub3QgcGF0Y2hhYmxlLCB3ZSBuZWVkIHRvIHVzZSBgdGhlbmAgZGlyZWN0bHlcbiAgICAgICAgLy8gaXNzdWUgMTA3OFxuICAgICAgICBuYXRpdmVUaGVuID0gbmF0aXZlTWljcm9UYXNrUXVldWVQcm9taXNlWyd0aGVuJ107XG4gICAgICB9XG4gICAgICBuYXRpdmVUaGVuLmNhbGwobmF0aXZlTWljcm9UYXNrUXVldWVQcm9taXNlLCBmdW5jKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2xvYmFsW3N5bWJvbFNldFRpbWVvdXRdKGZ1bmMsIDApO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBzY2hlZHVsZU1pY3JvVGFzayh0YXNrKSB7XG4gICAgLy8gaWYgd2UgYXJlIG5vdCBydW5uaW5nIGluIGFueSB0YXNrLCBhbmQgdGhlcmUgaGFzIG5vdCBiZWVuIGFueXRoaW5nIHNjaGVkdWxlZFxuICAgIC8vIHdlIG11c3QgYm9vdHN0cmFwIHRoZSBpbml0aWFsIHRhc2sgY3JlYXRpb24gYnkgbWFudWFsbHkgc2NoZWR1bGluZyB0aGUgZHJhaW5cbiAgICBpZiAoX251bWJlck9mTmVzdGVkVGFza0ZyYW1lcyA9PT0gMCAmJiBfbWljcm9UYXNrUXVldWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAvLyBXZSBhcmUgbm90IHJ1bm5pbmcgaW4gVGFzaywgc28gd2UgbmVlZCB0byBraWNrc3RhcnQgdGhlIG1pY3JvdGFzayBxdWV1ZS5cbiAgICAgIG5hdGl2ZVNjaGVkdWxlTWljcm9UYXNrKGRyYWluTWljcm9UYXNrUXVldWUpO1xuICAgIH1cbiAgICB0YXNrICYmIF9taWNyb1Rhc2tRdWV1ZS5wdXNoKHRhc2spO1xuICB9XG4gIGZ1bmN0aW9uIGRyYWluTWljcm9UYXNrUXVldWUoKSB7XG4gICAgaWYgKCFfaXNEcmFpbmluZ01pY3JvdGFza1F1ZXVlKSB7XG4gICAgICBfaXNEcmFpbmluZ01pY3JvdGFza1F1ZXVlID0gdHJ1ZTtcbiAgICAgIHdoaWxlIChfbWljcm9UYXNrUXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IHF1ZXVlID0gX21pY3JvVGFza1F1ZXVlO1xuICAgICAgICBfbWljcm9UYXNrUXVldWUgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IHRhc2sgPSBxdWV1ZVtpXTtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGFzay56b25lLnJ1blRhc2sodGFzaywgbnVsbCwgbnVsbCk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIF9hcGkub25VbmhhbmRsZWRFcnJvcihlcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBfYXBpLm1pY3JvdGFza0RyYWluRG9uZSgpO1xuICAgICAgX2lzRHJhaW5pbmdNaWNyb3Rhc2tRdWV1ZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vLyAgQk9PVFNUUkFQXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgY29uc3QgTk9fWk9ORSA9IHtcbiAgICBuYW1lOiAnTk8gWk9ORSdcbiAgfTtcbiAgY29uc3Qgbm90U2NoZWR1bGVkID0gJ25vdFNjaGVkdWxlZCcsXG4gICAgc2NoZWR1bGluZyA9ICdzY2hlZHVsaW5nJyxcbiAgICBzY2hlZHVsZWQgPSAnc2NoZWR1bGVkJyxcbiAgICBydW5uaW5nID0gJ3J1bm5pbmcnLFxuICAgIGNhbmNlbGluZyA9ICdjYW5jZWxpbmcnLFxuICAgIHVua25vd24gPSAndW5rbm93bic7XG4gIGNvbnN0IG1pY3JvVGFzayA9ICdtaWNyb1Rhc2snLFxuICAgIG1hY3JvVGFzayA9ICdtYWNyb1Rhc2snLFxuICAgIGV2ZW50VGFzayA9ICdldmVudFRhc2snO1xuICBjb25zdCBwYXRjaGVzID0ge307XG4gIGNvbnN0IF9hcGkgPSB7XG4gICAgc3ltYm9sOiBfX3N5bWJvbF9fLFxuICAgIGN1cnJlbnRab25lRnJhbWU6ICgpID0+IF9jdXJyZW50Wm9uZUZyYW1lLFxuICAgIG9uVW5oYW5kbGVkRXJyb3I6IG5vb3AsXG4gICAgbWljcm90YXNrRHJhaW5Eb25lOiBub29wLFxuICAgIHNjaGVkdWxlTWljcm9UYXNrOiBzY2hlZHVsZU1pY3JvVGFzayxcbiAgICBzaG93VW5jYXVnaHRFcnJvcjogKCkgPT4gIVpvbmVJbXBsW19fc3ltYm9sX18oJ2lnbm9yZUNvbnNvbGVFcnJvclVuY2F1Z2h0RXJyb3InKV0sXG4gICAgcGF0Y2hFdmVudFRhcmdldDogKCkgPT4gW10sXG4gICAgcGF0Y2hPblByb3BlcnRpZXM6IG5vb3AsXG4gICAgcGF0Y2hNZXRob2Q6ICgpID0+IG5vb3AsXG4gICAgYmluZEFyZ3VtZW50czogKCkgPT4gW10sXG4gICAgcGF0Y2hUaGVuOiAoKSA9PiBub29wLFxuICAgIHBhdGNoTWFjcm9UYXNrOiAoKSA9PiBub29wLFxuICAgIHBhdGNoRXZlbnRQcm90b3R5cGU6ICgpID0+IG5vb3AsXG4gICAgaXNJRU9yRWRnZTogKCkgPT4gZmFsc2UsXG4gICAgZ2V0R2xvYmFsT2JqZWN0czogKCkgPT4gdW5kZWZpbmVkLFxuICAgIE9iamVjdERlZmluZVByb3BlcnR5OiAoKSA9PiBub29wLFxuICAgIE9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcjogKCkgPT4gdW5kZWZpbmVkLFxuICAgIE9iamVjdENyZWF0ZTogKCkgPT4gdW5kZWZpbmVkLFxuICAgIEFycmF5U2xpY2U6ICgpID0+IFtdLFxuICAgIHBhdGNoQ2xhc3M6ICgpID0+IG5vb3AsXG4gICAgd3JhcFdpdGhDdXJyZW50Wm9uZTogKCkgPT4gbm9vcCxcbiAgICBmaWx0ZXJQcm9wZXJ0aWVzOiAoKSA9PiBbXSxcbiAgICBhdHRhY2hPcmlnaW5Ub1BhdGNoZWQ6ICgpID0+IG5vb3AsXG4gICAgX3JlZGVmaW5lUHJvcGVydHk6ICgpID0+IG5vb3AsXG4gICAgcGF0Y2hDYWxsYmFja3M6ICgpID0+IG5vb3AsXG4gICAgbmF0aXZlU2NoZWR1bGVNaWNyb1Rhc2s6IG5hdGl2ZVNjaGVkdWxlTWljcm9UYXNrXG4gIH07XG4gIGxldCBfY3VycmVudFpvbmVGcmFtZSA9IHtcbiAgICBwYXJlbnQ6IG51bGwsXG4gICAgem9uZTogbmV3IFpvbmVJbXBsKG51bGwsIG51bGwpXG4gIH07XG4gIGxldCBfY3VycmVudFRhc2sgPSBudWxsO1xuICBsZXQgX251bWJlck9mTmVzdGVkVGFza0ZyYW1lcyA9IDA7XG4gIGZ1bmN0aW9uIG5vb3AoKSB7fVxuICBwZXJmb3JtYW5jZU1lYXN1cmUoJ1pvbmUnLCAnWm9uZScpO1xuICByZXR1cm4gWm9uZUltcGw7XG59XG5mdW5jdGlvbiBsb2FkWm9uZSgpIHtcbiAgLy8gaWYgZ2xvYmFsWydab25lJ10gYWxyZWFkeSBleGlzdHMgKG1heWJlIHpvbmUuanMgd2FzIGFscmVhZHkgbG9hZGVkIG9yXG4gIC8vIHNvbWUgb3RoZXIgbGliIGFsc28gcmVnaXN0ZXJlZCBhIGdsb2JhbCBvYmplY3QgbmFtZWQgWm9uZSksIHdlIG1heSBuZWVkXG4gIC8vIHRvIHRocm93IGFuIGVycm9yLCBidXQgc29tZXRpbWVzIHVzZXIgbWF5IG5vdCB3YW50IHRoaXMgZXJyb3IuXG4gIC8vIEZvciBleGFtcGxlLFxuICAvLyB3ZSBoYXZlIHR3byB3ZWIgcGFnZXMsIHBhZ2UxIGluY2x1ZGVzIHpvbmUuanMsIHBhZ2UyIGRvZXNuJ3QuXG4gIC8vIGFuZCB0aGUgMXN0IHRpbWUgdXNlciBsb2FkIHBhZ2UxIGFuZCBwYWdlMiwgZXZlcnl0aGluZyB3b3JrIGZpbmUsXG4gIC8vIGJ1dCB3aGVuIHVzZXIgbG9hZCBwYWdlMiBhZ2FpbiwgZXJyb3Igb2NjdXJzIGJlY2F1c2UgZ2xvYmFsWydab25lJ10gYWxyZWFkeSBleGlzdHMuXG4gIC8vIHNvIHdlIGFkZCBhIGZsYWcgdG8gbGV0IHVzZXIgY2hvb3NlIHdoZXRoZXIgdG8gdGhyb3cgdGhpcyBlcnJvciBvciBub3QuXG4gIC8vIEJ5IGRlZmF1bHQsIGlmIGV4aXN0aW5nIFpvbmUgaXMgZnJvbSB6b25lLmpzLCB3ZSB3aWxsIG5vdCB0aHJvdyB0aGUgZXJyb3IuXG4gIGNvbnN0IGdsb2JhbCA9IGdsb2JhbFRoaXM7XG4gIGNvbnN0IGNoZWNrRHVwbGljYXRlID0gZ2xvYmFsW19fc3ltYm9sX18oJ2ZvcmNlRHVwbGljYXRlWm9uZUNoZWNrJyldID09PSB0cnVlO1xuICBpZiAoZ2xvYmFsWydab25lJ10gJiYgKGNoZWNrRHVwbGljYXRlIHx8IHR5cGVvZiBnbG9iYWxbJ1pvbmUnXS5fX3N5bWJvbF9fICE9PSAnZnVuY3Rpb24nKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignWm9uZSBhbHJlYWR5IGxvYWRlZC4nKTtcbiAgfVxuICAvLyBJbml0aWFsaXplIGdsb2JhbCBgWm9uZWAgY29uc3RhbnQuXG4gIGdsb2JhbFsnWm9uZSddID8/PSBpbml0Wm9uZSgpO1xuICByZXR1cm4gZ2xvYmFsWydab25lJ107XG59XG5cbi8qKlxuICogU3VwcHJlc3MgY2xvc3VyZSBjb21waWxlciBlcnJvcnMgYWJvdXQgdW5rbm93biAnWm9uZScgdmFyaWFibGVcbiAqIEBmaWxlb3ZlcnZpZXdcbiAqIEBzdXBwcmVzcyB7dW5kZWZpbmVkVmFycyxnbG9iYWxUaGlzLG1pc3NpbmdSZXF1aXJlfVxuICovXG4vLy8gPHJlZmVyZW5jZSB0eXBlcz1cIm5vZGVcIi8+XG4vLyBpc3N1ZSAjOTg5LCB0byByZWR1Y2UgYnVuZGxlIHNpemUsIHVzZSBzaG9ydCBuYW1lXG4vKiogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciAqL1xuY29uc3QgT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbi8qKiBPYmplY3QuZGVmaW5lUHJvcGVydHkgKi9cbmNvbnN0IE9iamVjdERlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuLyoqIE9iamVjdC5nZXRQcm90b3R5cGVPZiAqL1xuY29uc3QgT2JqZWN0R2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4vKiogT2JqZWN0LmNyZWF0ZSAqL1xuY29uc3QgT2JqZWN0Q3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcbi8qKiBBcnJheS5wcm90b3R5cGUuc2xpY2UgKi9cbmNvbnN0IEFycmF5U2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG4vKiogYWRkRXZlbnRMaXN0ZW5lciBzdHJpbmcgY29uc3QgKi9cbmNvbnN0IEFERF9FVkVOVF9MSVNURU5FUl9TVFIgPSAnYWRkRXZlbnRMaXN0ZW5lcic7XG4vKiogcmVtb3ZlRXZlbnRMaXN0ZW5lciBzdHJpbmcgY29uc3QgKi9cbmNvbnN0IFJFTU9WRV9FVkVOVF9MSVNURU5FUl9TVFIgPSAncmVtb3ZlRXZlbnRMaXN0ZW5lcic7XG4vKiogem9uZVN5bWJvbCBhZGRFdmVudExpc3RlbmVyICovXG5jb25zdCBaT05FX1NZTUJPTF9BRERfRVZFTlRfTElTVEVORVIgPSBfX3N5bWJvbF9fKEFERF9FVkVOVF9MSVNURU5FUl9TVFIpO1xuLyoqIHpvbmVTeW1ib2wgcmVtb3ZlRXZlbnRMaXN0ZW5lciAqL1xuY29uc3QgWk9ORV9TWU1CT0xfUkVNT1ZFX0VWRU5UX0xJU1RFTkVSID0gX19zeW1ib2xfXyhSRU1PVkVfRVZFTlRfTElTVEVORVJfU1RSKTtcbi8qKiB0cnVlIHN0cmluZyBjb25zdCAqL1xuY29uc3QgVFJVRV9TVFIgPSAndHJ1ZSc7XG4vKiogZmFsc2Ugc3RyaW5nIGNvbnN0ICovXG5jb25zdCBGQUxTRV9TVFIgPSAnZmFsc2UnO1xuLyoqIFpvbmUgc3ltYm9sIHByZWZpeCBzdHJpbmcgY29uc3QuICovXG5jb25zdCBaT05FX1NZTUJPTF9QUkVGSVggPSBfX3N5bWJvbF9fKCcnKTtcbmZ1bmN0aW9uIHdyYXBXaXRoQ3VycmVudFpvbmUoY2FsbGJhY2ssIHNvdXJjZSkge1xuICByZXR1cm4gWm9uZS5jdXJyZW50LndyYXAoY2FsbGJhY2ssIHNvdXJjZSk7XG59XG5mdW5jdGlvbiBzY2hlZHVsZU1hY3JvVGFza1dpdGhDdXJyZW50Wm9uZShzb3VyY2UsIGNhbGxiYWNrLCBkYXRhLCBjdXN0b21TY2hlZHVsZSwgY3VzdG9tQ2FuY2VsKSB7XG4gIHJldHVybiBab25lLmN1cnJlbnQuc2NoZWR1bGVNYWNyb1Rhc2soc291cmNlLCBjYWxsYmFjaywgZGF0YSwgY3VzdG9tU2NoZWR1bGUsIGN1c3RvbUNhbmNlbCk7XG59XG5jb25zdCB6b25lU3ltYm9sID0gX19zeW1ib2xfXztcbmNvbnN0IGlzV2luZG93RXhpc3RzID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG5jb25zdCBpbnRlcm5hbFdpbmRvdyA9IGlzV2luZG93RXhpc3RzID8gd2luZG93IDogdW5kZWZpbmVkO1xuY29uc3QgX2dsb2JhbCA9IGlzV2luZG93RXhpc3RzICYmIGludGVybmFsV2luZG93IHx8IGdsb2JhbFRoaXM7XG5jb25zdCBSRU1PVkVfQVRUUklCVVRFID0gJ3JlbW92ZUF0dHJpYnV0ZSc7XG5mdW5jdGlvbiBiaW5kQXJndW1lbnRzKGFyZ3MsIHNvdXJjZSkge1xuICBmb3IgKGxldCBpID0gYXJncy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGlmICh0eXBlb2YgYXJnc1tpXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYXJnc1tpXSA9IHdyYXBXaXRoQ3VycmVudFpvbmUoYXJnc1tpXSwgc291cmNlICsgJ18nICsgaSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcmdzO1xufVxuZnVuY3Rpb24gcGF0Y2hQcm90b3R5cGUocHJvdG90eXBlLCBmbk5hbWVzKSB7XG4gIGNvbnN0IHNvdXJjZSA9IHByb3RvdHlwZS5jb25zdHJ1Y3RvclsnbmFtZSddO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGZuTmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBuYW1lID0gZm5OYW1lc1tpXTtcbiAgICBjb25zdCBkZWxlZ2F0ZSA9IHByb3RvdHlwZVtuYW1lXTtcbiAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgIGNvbnN0IHByb3RvdHlwZURlc2MgPSBPYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG90eXBlLCBuYW1lKTtcbiAgICAgIGlmICghaXNQcm9wZXJ0eVdyaXRhYmxlKHByb3RvdHlwZURlc2MpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgcHJvdG90eXBlW25hbWVdID0gKGRlbGVnYXRlID0+IHtcbiAgICAgICAgY29uc3QgcGF0Y2hlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gZGVsZWdhdGUuYXBwbHkodGhpcywgYmluZEFyZ3VtZW50cyhhcmd1bWVudHMsIHNvdXJjZSArICcuJyArIG5hbWUpKTtcbiAgICAgICAgfTtcbiAgICAgICAgYXR0YWNoT3JpZ2luVG9QYXRjaGVkKHBhdGNoZWQsIGRlbGVnYXRlKTtcbiAgICAgICAgcmV0dXJuIHBhdGNoZWQ7XG4gICAgICB9KShkZWxlZ2F0ZSk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBpc1Byb3BlcnR5V3JpdGFibGUocHJvcGVydHlEZXNjKSB7XG4gIGlmICghcHJvcGVydHlEZXNjKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKHByb3BlcnR5RGVzYy53cml0YWJsZSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuICEodHlwZW9mIHByb3BlcnR5RGVzYy5nZXQgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHByb3BlcnR5RGVzYy5zZXQgPT09ICd1bmRlZmluZWQnKTtcbn1cbmNvbnN0IGlzV2ViV29ya2VyID0gdHlwZW9mIFdvcmtlckdsb2JhbFNjb3BlICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmIGluc3RhbmNlb2YgV29ya2VyR2xvYmFsU2NvcGU7XG4vLyBNYWtlIHN1cmUgdG8gYWNjZXNzIGBwcm9jZXNzYCB0aHJvdWdoIGBfZ2xvYmFsYCBzbyB0aGF0IFdlYlBhY2sgZG9lcyBub3QgYWNjaWRlbnRhbGx5IGJyb3dzZXJpZnlcbi8vIHRoaXMgY29kZS5cbmNvbnN0IGlzTm9kZSA9ICEoJ253JyBpbiBfZ2xvYmFsKSAmJiB0eXBlb2YgX2dsb2JhbC5wcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBfZ2xvYmFsLnByb2Nlc3MudG9TdHJpbmcoKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nO1xuY29uc3QgaXNCcm93c2VyID0gIWlzTm9kZSAmJiAhaXNXZWJXb3JrZXIgJiYgISEoaXNXaW5kb3dFeGlzdHMgJiYgaW50ZXJuYWxXaW5kb3dbJ0hUTUxFbGVtZW50J10pO1xuLy8gd2UgYXJlIGluIGVsZWN0cm9uIG9mIG53LCBzbyB3ZSBhcmUgYm90aCBicm93c2VyIGFuZCBub2RlanNcbi8vIE1ha2Ugc3VyZSB0byBhY2Nlc3MgYHByb2Nlc3NgIHRocm91Z2ggYF9nbG9iYWxgIHNvIHRoYXQgV2ViUGFjayBkb2VzIG5vdCBhY2NpZGVudGFsbHkgYnJvd3NlcmlmeVxuLy8gdGhpcyBjb2RlLlxuY29uc3QgaXNNaXggPSB0eXBlb2YgX2dsb2JhbC5wcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBfZ2xvYmFsLnByb2Nlc3MudG9TdHJpbmcoKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nICYmICFpc1dlYldvcmtlciAmJiAhIShpc1dpbmRvd0V4aXN0cyAmJiBpbnRlcm5hbFdpbmRvd1snSFRNTEVsZW1lbnQnXSk7XG5jb25zdCB6b25lU3ltYm9sRXZlbnROYW1lcyQxID0ge307XG5jb25zdCBlbmFibGVCZWZvcmV1bmxvYWRTeW1ib2wgPSB6b25lU3ltYm9sKCdlbmFibGVfYmVmb3JldW5sb2FkJyk7XG5jb25zdCB3cmFwRm4gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvem9uZS5qcy9pc3N1ZXMvOTExLCBpbiBJRSwgc29tZXRpbWVzXG4gIC8vIGV2ZW50IHdpbGwgYmUgdW5kZWZpbmVkLCBzbyB3ZSBuZWVkIHRvIHVzZSB3aW5kb3cuZXZlbnRcbiAgZXZlbnQgPSBldmVudCB8fCBfZ2xvYmFsLmV2ZW50O1xuICBpZiAoIWV2ZW50KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBldmVudE5hbWVTeW1ib2wgPSB6b25lU3ltYm9sRXZlbnROYW1lcyQxW2V2ZW50LnR5cGVdO1xuICBpZiAoIWV2ZW50TmFtZVN5bWJvbCkge1xuICAgIGV2ZW50TmFtZVN5bWJvbCA9IHpvbmVTeW1ib2xFdmVudE5hbWVzJDFbZXZlbnQudHlwZV0gPSB6b25lU3ltYm9sKCdPTl9QUk9QRVJUWScgKyBldmVudC50eXBlKTtcbiAgfVxuICBjb25zdCB0YXJnZXQgPSB0aGlzIHx8IGV2ZW50LnRhcmdldCB8fCBfZ2xvYmFsO1xuICBjb25zdCBsaXN0ZW5lciA9IHRhcmdldFtldmVudE5hbWVTeW1ib2xdO1xuICBsZXQgcmVzdWx0O1xuICBpZiAoaXNCcm93c2VyICYmIHRhcmdldCA9PT0gaW50ZXJuYWxXaW5kb3cgJiYgZXZlbnQudHlwZSA9PT0gJ2Vycm9yJykge1xuICAgIC8vIHdpbmRvdy5vbmVycm9yIGhhdmUgZGlmZmVyZW50IHNpZ25hdHVyZVxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9HbG9iYWxFdmVudEhhbmRsZXJzL29uZXJyb3Ijd2luZG93Lm9uZXJyb3JcbiAgICAvLyBhbmQgb25lcnJvciBjYWxsYmFjayB3aWxsIHByZXZlbnQgZGVmYXVsdCB3aGVuIGNhbGxiYWNrIHJldHVybiB0cnVlXG4gICAgY29uc3QgZXJyb3JFdmVudCA9IGV2ZW50O1xuICAgIHJlc3VsdCA9IGxpc3RlbmVyICYmIGxpc3RlbmVyLmNhbGwodGhpcywgZXJyb3JFdmVudC5tZXNzYWdlLCBlcnJvckV2ZW50LmZpbGVuYW1lLCBlcnJvckV2ZW50LmxpbmVubywgZXJyb3JFdmVudC5jb2xubywgZXJyb3JFdmVudC5lcnJvcik7XG4gICAgaWYgKHJlc3VsdCA9PT0gdHJ1ZSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gbGlzdGVuZXIgJiYgbGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAoXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvNDc1NzlcbiAgICAvLyBodHRwczovL3d3dy53My5vcmcvVFIvMjAxMS9XRC1odG1sNS0yMDExMDUyNS9oaXN0b3J5Lmh0bWwjYmVmb3JldW5sb2FkZXZlbnRcbiAgICAvLyBUaGlzIGlzIHRoZSBvbmx5IHNwZWNpZmljIGNhc2Ugd2Ugc2hvdWxkIGNoZWNrIGZvci4gVGhlIHNwZWMgZGVmaW5lcyB0aGF0IHRoZVxuICAgIC8vIGByZXR1cm5WYWx1ZWAgYXR0cmlidXRlIHJlcHJlc2VudHMgdGhlIG1lc3NhZ2UgdG8gc2hvdyB0aGUgdXNlci4gV2hlbiB0aGUgZXZlbnRcbiAgICAvLyBpcyBjcmVhdGVkLCB0aGlzIGF0dHJpYnV0ZSBtdXN0IGJlIHNldCB0byB0aGUgZW1wdHkgc3RyaW5nLlxuICAgIGV2ZW50LnR5cGUgPT09ICdiZWZvcmV1bmxvYWQnICYmXG4gICAgLy8gVG8gcHJldmVudCBhbnkgYnJlYWtpbmcgY2hhbmdlcyByZXN1bHRpbmcgZnJvbSB0aGlzIGNoYW5nZSwgZ2l2ZW4gdGhhdFxuICAgIC8vIGl0IHdhcyBhbHJlYWR5IGNhdXNpbmcgYSBzaWduaWZpY2FudCBudW1iZXIgb2YgZmFpbHVyZXMgaW4gRzMsIHdlIGhhdmUgaGlkZGVuXG4gICAgLy8gdGhhdCBiZWhhdmlvciBiZWhpbmQgYSBnbG9iYWwgY29uZmlndXJhdGlvbiBmbGFnLiBDb25zdW1lcnMgY2FuIGVuYWJsZSB0aGlzXG4gICAgLy8gZmxhZyBleHBsaWNpdGx5IGlmIHRoZXkgd2FudCB0aGUgYGJlZm9yZXVubG9hZGAgZXZlbnQgdG8gYmUgaGFuZGxlZCBhcyBkZWZpbmVkXG4gICAgLy8gaW4gdGhlIHNwZWNpZmljYXRpb24uXG4gICAgX2dsb2JhbFtlbmFibGVCZWZvcmV1bmxvYWRTeW1ib2xdICYmXG4gICAgLy8gVGhlIElETCBldmVudCBkZWZpbml0aW9uIGlzIGBhdHRyaWJ1dGUgRE9NU3RyaW5nIHJldHVyblZhbHVlYCwgc28gd2UgY2hlY2sgd2hldGhlclxuICAgIC8vIGB0eXBlb2YgcmVzdWx0YCBpcyBhIHN0cmluZy5cbiAgICB0eXBlb2YgcmVzdWx0ID09PSAnc3RyaW5nJykge1xuICAgICAgZXZlbnQucmV0dXJuVmFsdWUgPSByZXN1bHQ7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQgIT0gdW5kZWZpbmVkICYmICFyZXN1bHQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuZnVuY3Rpb24gcGF0Y2hQcm9wZXJ0eShvYmosIHByb3AsIHByb3RvdHlwZSkge1xuICBsZXQgZGVzYyA9IE9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIHByb3ApO1xuICBpZiAoIWRlc2MgJiYgcHJvdG90eXBlKSB7XG4gICAgLy8gd2hlbiBwYXRjaCB3aW5kb3cgb2JqZWN0LCB1c2UgcHJvdG90eXBlIHRvIGNoZWNrIHByb3AgZXhpc3Qgb3Igbm90XG4gICAgY29uc3QgcHJvdG90eXBlRGVzYyA9IE9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90b3R5cGUsIHByb3ApO1xuICAgIGlmIChwcm90b3R5cGVEZXNjKSB7XG4gICAgICBkZXNjID0ge1xuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIC8vIGlmIHRoZSBkZXNjcmlwdG9yIG5vdCBleGlzdHMgb3IgaXMgbm90IGNvbmZpZ3VyYWJsZVxuICAvLyBqdXN0IHJldHVyblxuICBpZiAoIWRlc2MgfHwgIWRlc2MuY29uZmlndXJhYmxlKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IG9uUHJvcFBhdGNoZWRTeW1ib2wgPSB6b25lU3ltYm9sKCdvbicgKyBwcm9wICsgJ3BhdGNoZWQnKTtcbiAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShvblByb3BQYXRjaGVkU3ltYm9sKSAmJiBvYmpbb25Qcm9wUGF0Y2hlZFN5bWJvbF0pIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gQSBwcm9wZXJ0eSBkZXNjcmlwdG9yIGNhbm5vdCBoYXZlIGdldHRlci9zZXR0ZXIgYW5kIGJlIHdyaXRhYmxlXG4gIC8vIGRlbGV0aW5nIHRoZSB3cml0YWJsZSBhbmQgdmFsdWUgcHJvcGVydGllcyBhdm9pZHMgdGhpcyBlcnJvcjpcbiAgLy9cbiAgLy8gVHlwZUVycm9yOiBwcm9wZXJ0eSBkZXNjcmlwdG9ycyBtdXN0IG5vdCBzcGVjaWZ5IGEgdmFsdWUgb3IgYmUgd3JpdGFibGUgd2hlbiBhXG4gIC8vIGdldHRlciBvciBzZXR0ZXIgaGFzIGJlZW4gc3BlY2lmaWVkXG4gIGRlbGV0ZSBkZXNjLndyaXRhYmxlO1xuICBkZWxldGUgZGVzYy52YWx1ZTtcbiAgY29uc3Qgb3JpZ2luYWxEZXNjR2V0ID0gZGVzYy5nZXQ7XG4gIGNvbnN0IG9yaWdpbmFsRGVzY1NldCA9IGRlc2Muc2V0O1xuICAvLyBzbGljZSgyKSBjdXogJ29uY2xpY2snIC0+ICdjbGljaycsIGV0Y1xuICBjb25zdCBldmVudE5hbWUgPSBwcm9wLnNsaWNlKDIpO1xuICBsZXQgZXZlbnROYW1lU3ltYm9sID0gem9uZVN5bWJvbEV2ZW50TmFtZXMkMVtldmVudE5hbWVdO1xuICBpZiAoIWV2ZW50TmFtZVN5bWJvbCkge1xuICAgIGV2ZW50TmFtZVN5bWJvbCA9IHpvbmVTeW1ib2xFdmVudE5hbWVzJDFbZXZlbnROYW1lXSA9IHpvbmVTeW1ib2woJ09OX1BST1BFUlRZJyArIGV2ZW50TmFtZSk7XG4gIH1cbiAgZGVzYy5zZXQgPSBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAvLyBJbiBzb21lIHZlcnNpb25zIG9mIFdpbmRvd3MsIHRoZSBgdGhpc2AgY29udGV4dCBtYXkgYmUgdW5kZWZpbmVkXG4gICAgLy8gaW4gb24tcHJvcGVydHkgY2FsbGJhY2tzLlxuICAgIC8vIFRvIGhhbmRsZSB0aGlzIGVkZ2UgY2FzZSwgd2UgY2hlY2sgaWYgYHRoaXNgIGlzIGZhbHN5IGFuZFxuICAgIC8vIGZhbGxiYWNrIHRvIGBfZ2xvYmFsYCBpZiBuZWVkZWQuXG4gICAgbGV0IHRhcmdldCA9IHRoaXM7XG4gICAgaWYgKCF0YXJnZXQgJiYgb2JqID09PSBfZ2xvYmFsKSB7XG4gICAgICB0YXJnZXQgPSBfZ2xvYmFsO1xuICAgIH1cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwcmV2aW91c1ZhbHVlID0gdGFyZ2V0W2V2ZW50TmFtZVN5bWJvbF07XG4gICAgaWYgKHR5cGVvZiBwcmV2aW91c1ZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIHdyYXBGbik7XG4gICAgfVxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3pvbmUuanMvaXNzdWVzLzk3OFxuICAgIC8vIElmIGFuIGlubGluZSBoYW5kbGVyIChsaWtlIGBvbmxvYWRgKSB3YXMgZGVmaW5lZCBiZWZvcmUgem9uZS5qcyB3YXMgbG9hZGVkLFxuICAgIC8vIGNhbGwgdGhlIG9yaWdpbmFsIGRlc2NyaXB0b3IncyBzZXR0ZXIgdG8gY2xlYW4gaXQgdXAuXG4gICAgb3JpZ2luYWxEZXNjU2V0Py5jYWxsKHRhcmdldCwgbnVsbCk7XG4gICAgdGFyZ2V0W2V2ZW50TmFtZVN5bWJvbF0gPSBuZXdWYWx1ZTtcbiAgICBpZiAodHlwZW9mIG5ld1ZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIHdyYXBGbiwgZmFsc2UpO1xuICAgIH1cbiAgfTtcbiAgLy8gVGhlIGdldHRlciB3b3VsZCByZXR1cm4gdW5kZWZpbmVkIGZvciB1bmFzc2lnbmVkIHByb3BlcnRpZXMgYnV0IHRoZSBkZWZhdWx0IHZhbHVlIG9mIGFuXG4gIC8vIHVuYXNzaWduZWQgcHJvcGVydHkgaXMgbnVsbFxuICBkZXNjLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBpbiBzb21lIG9mIHdpbmRvd3MncyBvbnByb3BlcnR5IGNhbGxiYWNrLCB0aGlzIGlzIHVuZGVmaW5lZFxuICAgIC8vIHNvIHdlIG5lZWQgdG8gY2hlY2sgaXRcbiAgICBsZXQgdGFyZ2V0ID0gdGhpcztcbiAgICBpZiAoIXRhcmdldCAmJiBvYmogPT09IF9nbG9iYWwpIHtcbiAgICAgIHRhcmdldCA9IF9nbG9iYWw7XG4gICAgfVxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgbGlzdGVuZXIgPSB0YXJnZXRbZXZlbnROYW1lU3ltYm9sXTtcbiAgICBpZiAobGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICB9IGVsc2UgaWYgKG9yaWdpbmFsRGVzY0dldCkge1xuICAgICAgLy8gcmVzdWx0IHdpbGwgYmUgbnVsbCB3aGVuIHVzZSBpbmxpbmUgZXZlbnQgYXR0cmlidXRlLFxuICAgICAgLy8gc3VjaCBhcyA8YnV0dG9uIG9uY2xpY2s9XCJmdW5jKCk7XCI+T0s8L2J1dHRvbj5cbiAgICAgIC8vIGJlY2F1c2UgdGhlIG9uY2xpY2sgZnVuY3Rpb24gaXMgaW50ZXJuYWwgcmF3IHVuY29tcGlsZWQgaGFuZGxlclxuICAgICAgLy8gdGhlIG9uY2xpY2sgd2lsbCBiZSBldmFsdWF0ZWQgd2hlbiBmaXJzdCB0aW1lIGV2ZW50IHdhcyB0cmlnZ2VyZWQgb3JcbiAgICAgIC8vIHRoZSBwcm9wZXJ0eSBpcyBhY2Nlc3NlZCwgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvem9uZS5qcy9pc3N1ZXMvNTI1XG4gICAgICAvLyBzbyB3ZSBzaG91bGQgdXNlIG9yaWdpbmFsIG5hdGl2ZSBnZXQgdG8gcmV0cmlldmUgdGhlIGhhbmRsZXJcbiAgICAgIGxldCB2YWx1ZSA9IG9yaWdpbmFsRGVzY0dldC5jYWxsKHRoaXMpO1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIGRlc2Muc2V0LmNhbGwodGhpcywgdmFsdWUpO1xuICAgICAgICBpZiAodHlwZW9mIHRhcmdldFtSRU1PVkVfQVRUUklCVVRFXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRhcmdldC5yZW1vdmVBdHRyaWJ1dGUocHJvcCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcbiAgT2JqZWN0RGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCBkZXNjKTtcbiAgb2JqW29uUHJvcFBhdGNoZWRTeW1ib2xdID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIHBhdGNoT25Qcm9wZXJ0aWVzKG9iaiwgcHJvcGVydGllcywgcHJvdG90eXBlKSB7XG4gIGlmIChwcm9wZXJ0aWVzKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBwYXRjaFByb3BlcnR5KG9iaiwgJ29uJyArIHByb3BlcnRpZXNbaV0sIHByb3RvdHlwZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IG9uUHJvcGVydGllcyA9IFtdO1xuICAgIGZvciAoY29uc3QgcHJvcCBpbiBvYmopIHtcbiAgICAgIGlmIChwcm9wLnNsaWNlKDAsIDIpID09ICdvbicpIHtcbiAgICAgICAgb25Qcm9wZXJ0aWVzLnB1c2gocHJvcCk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgb25Qcm9wZXJ0aWVzLmxlbmd0aDsgaisrKSB7XG4gICAgICBwYXRjaFByb3BlcnR5KG9iaiwgb25Qcm9wZXJ0aWVzW2pdLCBwcm90b3R5cGUpO1xuICAgIH1cbiAgfVxufVxuY29uc3Qgb3JpZ2luYWxJbnN0YW5jZUtleSA9IHpvbmVTeW1ib2woJ29yaWdpbmFsSW5zdGFuY2UnKTtcbi8vIHdyYXAgc29tZSBuYXRpdmUgQVBJIG9uIGB3aW5kb3dgXG5mdW5jdGlvbiBwYXRjaENsYXNzKGNsYXNzTmFtZSkge1xuICBjb25zdCBPcmlnaW5hbENsYXNzID0gX2dsb2JhbFtjbGFzc05hbWVdO1xuICBpZiAoIU9yaWdpbmFsQ2xhc3MpIHJldHVybjtcbiAgLy8ga2VlcCBvcmlnaW5hbCBjbGFzcyBpbiBnbG9iYWxcbiAgX2dsb2JhbFt6b25lU3ltYm9sKGNsYXNzTmFtZSldID0gT3JpZ2luYWxDbGFzcztcbiAgX2dsb2JhbFtjbGFzc05hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGEgPSBiaW5kQXJndW1lbnRzKGFyZ3VtZW50cywgY2xhc3NOYW1lKTtcbiAgICBzd2l0Y2ggKGEubGVuZ3RoKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV0gPSBuZXcgT3JpZ2luYWxDbGFzcygpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XSA9IG5ldyBPcmlnaW5hbENsYXNzKGFbMF0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XSA9IG5ldyBPcmlnaW5hbENsYXNzKGFbMF0sIGFbMV0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XSA9IG5ldyBPcmlnaW5hbENsYXNzKGFbMF0sIGFbMV0sIGFbMl0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XSA9IG5ldyBPcmlnaW5hbENsYXNzKGFbMF0sIGFbMV0sIGFbMl0sIGFbM10pO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQXJnIGxpc3QgdG9vIGxvbmcuJyk7XG4gICAgfVxuICB9O1xuICAvLyBhdHRhY2ggb3JpZ2luYWwgZGVsZWdhdGUgdG8gcGF0Y2hlZCBmdW5jdGlvblxuICBhdHRhY2hPcmlnaW5Ub1BhdGNoZWQoX2dsb2JhbFtjbGFzc05hbWVdLCBPcmlnaW5hbENsYXNzKTtcbiAgY29uc3QgaW5zdGFuY2UgPSBuZXcgT3JpZ2luYWxDbGFzcyhmdW5jdGlvbiAoKSB7fSk7XG4gIGxldCBwcm9wO1xuICBmb3IgKHByb3AgaW4gaW5zdGFuY2UpIHtcbiAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NDQ3MjFcbiAgICBpZiAoY2xhc3NOYW1lID09PSAnWE1MSHR0cFJlcXVlc3QnICYmIHByb3AgPT09ICdyZXNwb25zZUJsb2InKSBjb250aW51ZTtcbiAgICAoZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgIGlmICh0eXBlb2YgaW5zdGFuY2VbcHJvcF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgX2dsb2JhbFtjbGFzc05hbWVdLnByb3RvdHlwZVtwcm9wXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XVtwcm9wXS5hcHBseSh0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0RGVmaW5lUHJvcGVydHkoX2dsb2JhbFtjbGFzc05hbWVdLnByb3RvdHlwZSwgcHJvcCwge1xuICAgICAgICAgIHNldDogZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV1bcHJvcF0gPSB3cmFwV2l0aEN1cnJlbnRab25lKGZuLCBjbGFzc05hbWUgKyAnLicgKyBwcm9wKTtcbiAgICAgICAgICAgICAgLy8ga2VlcCBjYWxsYmFjayBpbiB3cmFwcGVkIGZ1bmN0aW9uIHNvIHdlIGNhblxuICAgICAgICAgICAgICAvLyB1c2UgaXQgaW4gRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nIHRvIHJldHVyblxuICAgICAgICAgICAgICAvLyB0aGUgbmF0aXZlIG9uZS5cbiAgICAgICAgICAgICAgYXR0YWNoT3JpZ2luVG9QYXRjaGVkKHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV1bcHJvcF0sIGZuKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV1bcHJvcF0gPSBmbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV1bcHJvcF07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KShwcm9wKTtcbiAgfVxuICBmb3IgKHByb3AgaW4gT3JpZ2luYWxDbGFzcykge1xuICAgIGlmIChwcm9wICE9PSAncHJvdG90eXBlJyAmJiBPcmlnaW5hbENsYXNzLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICBfZ2xvYmFsW2NsYXNzTmFtZV1bcHJvcF0gPSBPcmlnaW5hbENsYXNzW3Byb3BdO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gcGF0Y2hNZXRob2QodGFyZ2V0LCBuYW1lLCBwYXRjaEZuKSB7XG4gIGxldCBwcm90byA9IHRhcmdldDtcbiAgd2hpbGUgKHByb3RvICYmICFwcm90by5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgIHByb3RvID0gT2JqZWN0R2V0UHJvdG90eXBlT2YocHJvdG8pO1xuICB9XG4gIGlmICghcHJvdG8gJiYgdGFyZ2V0W25hbWVdKSB7XG4gICAgLy8gc29tZWhvdyB3ZSBkaWQgbm90IGZpbmQgaXQsIGJ1dCB3ZSBjYW4gc2VlIGl0LiBUaGlzIGhhcHBlbnMgb24gSUUgZm9yIFdpbmRvdyBwcm9wZXJ0aWVzLlxuICAgIHByb3RvID0gdGFyZ2V0O1xuICB9XG4gIGNvbnN0IGRlbGVnYXRlTmFtZSA9IHpvbmVTeW1ib2wobmFtZSk7XG4gIGxldCBkZWxlZ2F0ZSA9IG51bGw7XG4gIGlmIChwcm90byAmJiAoIShkZWxlZ2F0ZSA9IHByb3RvW2RlbGVnYXRlTmFtZV0pIHx8ICFwcm90by5oYXNPd25Qcm9wZXJ0eShkZWxlZ2F0ZU5hbWUpKSkge1xuICAgIGRlbGVnYXRlID0gcHJvdG9bZGVsZWdhdGVOYW1lXSA9IHByb3RvW25hbWVdO1xuICAgIC8vIGNoZWNrIHdoZXRoZXIgcHJvdG9bbmFtZV0gaXMgd3JpdGFibGVcbiAgICAvLyBzb21lIHByb3BlcnR5IGlzIHJlYWRvbmx5IGluIHNhZmFyaSwgc3VjaCBhcyBIdG1sQ2FudmFzRWxlbWVudC5wcm90b3R5cGUudG9CbG9iXG4gICAgY29uc3QgZGVzYyA9IHByb3RvICYmIE9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90bywgbmFtZSk7XG4gICAgaWYgKGlzUHJvcGVydHlXcml0YWJsZShkZXNjKSkge1xuICAgICAgY29uc3QgcGF0Y2hEZWxlZ2F0ZSA9IHBhdGNoRm4oZGVsZWdhdGUsIGRlbGVnYXRlTmFtZSwgbmFtZSk7XG4gICAgICBwcm90b1tuYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHBhdGNoRGVsZWdhdGUodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBhdHRhY2hPcmlnaW5Ub1BhdGNoZWQocHJvdG9bbmFtZV0sIGRlbGVnYXRlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRlbGVnYXRlO1xufVxuLy8gVE9ETzogQEppYUxpUGFzc2lvbiwgc3VwcG9ydCBjYW5jZWwgdGFzayBsYXRlciBpZiBuZWNlc3NhcnlcbmZ1bmN0aW9uIHBhdGNoTWFjcm9UYXNrKG9iaiwgZnVuY05hbWUsIG1ldGFDcmVhdG9yKSB7XG4gIGxldCBzZXROYXRpdmUgPSBudWxsO1xuICBmdW5jdGlvbiBzY2hlZHVsZVRhc2sodGFzaykge1xuICAgIGNvbnN0IGRhdGEgPSB0YXNrLmRhdGE7XG4gICAgZGF0YS5hcmdzW2RhdGEuY2JJZHhdID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGFzay5pbnZva2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICAgIHNldE5hdGl2ZS5hcHBseShkYXRhLnRhcmdldCwgZGF0YS5hcmdzKTtcbiAgICByZXR1cm4gdGFzaztcbiAgfVxuICBzZXROYXRpdmUgPSBwYXRjaE1ldGhvZChvYmosIGZ1bmNOYW1lLCBkZWxlZ2F0ZSA9PiBmdW5jdGlvbiAoc2VsZiwgYXJncykge1xuICAgIGNvbnN0IG1ldGEgPSBtZXRhQ3JlYXRvcihzZWxmLCBhcmdzKTtcbiAgICBpZiAobWV0YS5jYklkeCA+PSAwICYmIHR5cGVvZiBhcmdzW21ldGEuY2JJZHhdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gc2NoZWR1bGVNYWNyb1Rhc2tXaXRoQ3VycmVudFpvbmUobWV0YS5uYW1lLCBhcmdzW21ldGEuY2JJZHhdLCBtZXRhLCBzY2hlZHVsZVRhc2spO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjYXVzZSBhbiBlcnJvciBieSBjYWxsaW5nIGl0IGRpcmVjdGx5LlxuICAgICAgcmV0dXJuIGRlbGVnYXRlLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiBhdHRhY2hPcmlnaW5Ub1BhdGNoZWQocGF0Y2hlZCwgb3JpZ2luYWwpIHtcbiAgcGF0Y2hlZFt6b25lU3ltYm9sKCdPcmlnaW5hbERlbGVnYXRlJyldID0gb3JpZ2luYWw7XG59XG5sZXQgaXNEZXRlY3RlZElFT3JFZGdlID0gZmFsc2U7XG5sZXQgaWVPckVkZ2UgPSBmYWxzZTtcbmZ1bmN0aW9uIGlzSUVPckVkZ2UoKSB7XG4gIGlmIChpc0RldGVjdGVkSUVPckVkZ2UpIHtcbiAgICByZXR1cm4gaWVPckVkZ2U7XG4gIH1cbiAgaXNEZXRlY3RlZElFT3JFZGdlID0gdHJ1ZTtcbiAgdHJ5IHtcbiAgICBjb25zdCB1YSA9IGludGVybmFsV2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XG4gICAgaWYgKHVhLmluZGV4T2YoJ01TSUUgJykgIT09IC0xIHx8IHVhLmluZGV4T2YoJ1RyaWRlbnQvJykgIT09IC0xIHx8IHVhLmluZGV4T2YoJ0VkZ2UvJykgIT09IC0xKSB7XG4gICAgICBpZU9yRWRnZSA9IHRydWU7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge31cbiAgcmV0dXJuIGllT3JFZGdlO1xufVxuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufVxuZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7XG59XG5cbi8qKlxuICogQGZpbGVvdmVydmlld1xuICogQHN1cHByZXNzIHttaXNzaW5nUmVxdWlyZX1cbiAqL1xuLy8gYW4gaWRlbnRpZmllciB0byB0ZWxsIFpvbmVUYXNrIGRvIG5vdCBjcmVhdGUgYSBuZXcgaW52b2tlIGNsb3N1cmVcbmNvbnN0IE9QVElNSVpFRF9aT05FX0VWRU5UX1RBU0tfREFUQSA9IHtcbiAgdXNlRzogdHJ1ZVxufTtcbmNvbnN0IHpvbmVTeW1ib2xFdmVudE5hbWVzID0ge307XG5jb25zdCBnbG9iYWxTb3VyY2VzID0ge307XG5jb25zdCBFVkVOVF9OQU1FX1NZTUJPTF9SRUdYID0gbmV3IFJlZ0V4cCgnXicgKyBaT05FX1NZTUJPTF9QUkVGSVggKyAnKFxcXFx3KykodHJ1ZXxmYWxzZSkkJyk7XG5jb25zdCBJTU1FRElBVEVfUFJPUEFHQVRJT05fU1lNQk9MID0gem9uZVN5bWJvbCgncHJvcGFnYXRpb25TdG9wcGVkJyk7XG5mdW5jdGlvbiBwcmVwYXJlRXZlbnROYW1lcyhldmVudE5hbWUsIGV2ZW50TmFtZVRvU3RyaW5nKSB7XG4gIGNvbnN0IGZhbHNlRXZlbnROYW1lID0gKGV2ZW50TmFtZVRvU3RyaW5nID8gZXZlbnROYW1lVG9TdHJpbmcoZXZlbnROYW1lKSA6IGV2ZW50TmFtZSkgKyBGQUxTRV9TVFI7XG4gIGNvbnN0IHRydWVFdmVudE5hbWUgPSAoZXZlbnROYW1lVG9TdHJpbmcgPyBldmVudE5hbWVUb1N0cmluZyhldmVudE5hbWUpIDogZXZlbnROYW1lKSArIFRSVUVfU1RSO1xuICBjb25zdCBzeW1ib2wgPSBaT05FX1NZTUJPTF9QUkVGSVggKyBmYWxzZUV2ZW50TmFtZTtcbiAgY29uc3Qgc3ltYm9sQ2FwdHVyZSA9IFpPTkVfU1lNQk9MX1BSRUZJWCArIHRydWVFdmVudE5hbWU7XG4gIHpvbmVTeW1ib2xFdmVudE5hbWVzW2V2ZW50TmFtZV0gPSB7fTtcbiAgem9uZVN5bWJvbEV2ZW50TmFtZXNbZXZlbnROYW1lXVtGQUxTRV9TVFJdID0gc3ltYm9sO1xuICB6b25lU3ltYm9sRXZlbnROYW1lc1tldmVudE5hbWVdW1RSVUVfU1RSXSA9IHN5bWJvbENhcHR1cmU7XG59XG5mdW5jdGlvbiBwYXRjaEV2ZW50VGFyZ2V0KF9nbG9iYWwsIGFwaSwgYXBpcywgcGF0Y2hPcHRpb25zKSB7XG4gIGNvbnN0IEFERF9FVkVOVF9MSVNURU5FUiA9IHBhdGNoT3B0aW9ucyAmJiBwYXRjaE9wdGlvbnMuYWRkIHx8IEFERF9FVkVOVF9MSVNURU5FUl9TVFI7XG4gIGNvbnN0IFJFTU9WRV9FVkVOVF9MSVNURU5FUiA9IHBhdGNoT3B0aW9ucyAmJiBwYXRjaE9wdGlvbnMucm0gfHwgUkVNT1ZFX0VWRU5UX0xJU1RFTkVSX1NUUjtcbiAgY29uc3QgTElTVEVORVJTX0VWRU5UX0xJU1RFTkVSID0gcGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy5saXN0ZW5lcnMgfHwgJ2V2ZW50TGlzdGVuZXJzJztcbiAgY29uc3QgUkVNT1ZFX0FMTF9MSVNURU5FUlNfRVZFTlRfTElTVEVORVIgPSBwYXRjaE9wdGlvbnMgJiYgcGF0Y2hPcHRpb25zLnJtQWxsIHx8ICdyZW1vdmVBbGxMaXN0ZW5lcnMnO1xuICBjb25zdCB6b25lU3ltYm9sQWRkRXZlbnRMaXN0ZW5lciA9IHpvbmVTeW1ib2woQUREX0VWRU5UX0xJU1RFTkVSKTtcbiAgY29uc3QgQUREX0VWRU5UX0xJU1RFTkVSX1NPVVJDRSA9ICcuJyArIEFERF9FVkVOVF9MSVNURU5FUiArICc6JztcbiAgY29uc3QgUFJFUEVORF9FVkVOVF9MSVNURU5FUiA9ICdwcmVwZW5kTGlzdGVuZXInO1xuICBjb25zdCBQUkVQRU5EX0VWRU5UX0xJU1RFTkVSX1NPVVJDRSA9ICcuJyArIFBSRVBFTkRfRVZFTlRfTElTVEVORVIgKyAnOic7XG4gIGNvbnN0IGludm9rZVRhc2sgPSBmdW5jdGlvbiAodGFzaywgdGFyZ2V0LCBldmVudCkge1xuICAgIC8vIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2UsIGNoZWNrIGlzUmVtb3ZlZCB3aGljaCBpcyBzZXRcbiAgICAvLyBieSByZW1vdmVFdmVudExpc3RlbmVyXG4gICAgaWYgKHRhc2suaXNSZW1vdmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGRlbGVnYXRlID0gdGFzay5jYWxsYmFjaztcbiAgICBpZiAodHlwZW9mIGRlbGVnYXRlID09PSAnb2JqZWN0JyAmJiBkZWxlZ2F0ZS5oYW5kbGVFdmVudCkge1xuICAgICAgLy8gY3JlYXRlIHRoZSBiaW5kIHZlcnNpb24gb2YgaGFuZGxlRXZlbnQgd2hlbiBpbnZva2VcbiAgICAgIHRhc2suY2FsbGJhY2sgPSBldmVudCA9PiBkZWxlZ2F0ZS5oYW5kbGVFdmVudChldmVudCk7XG4gICAgICB0YXNrLm9yaWdpbmFsRGVsZWdhdGUgPSBkZWxlZ2F0ZTtcbiAgICB9XG4gICAgLy8gaW52b2tlIHN0YXRpYyB0YXNrLmludm9rZVxuICAgIC8vIG5lZWQgdG8gdHJ5L2NhdGNoIGVycm9yIGhlcmUsIG90aGVyd2lzZSwgdGhlIGVycm9yIGluIG9uZSBldmVudCBsaXN0ZW5lclxuICAgIC8vIHdpbGwgYnJlYWsgdGhlIGV4ZWN1dGlvbnMgb2YgdGhlIG90aGVyIGV2ZW50IGxpc3RlbmVycy4gQWxzbyBlcnJvciB3aWxsXG4gICAgLy8gbm90IHJlbW92ZSB0aGUgZXZlbnQgbGlzdGVuZXIgd2hlbiBgb25jZWAgb3B0aW9ucyBpcyB0cnVlLlxuICAgIGxldCBlcnJvcjtcbiAgICB0cnkge1xuICAgICAgdGFzay5pbnZva2UodGFzaywgdGFyZ2V0LCBbZXZlbnRdKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGVycm9yID0gZXJyO1xuICAgIH1cbiAgICBjb25zdCBvcHRpb25zID0gdGFzay5vcHRpb25zO1xuICAgIGlmIChvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0JyAmJiBvcHRpb25zLm9uY2UpIHtcbiAgICAgIC8vIGlmIG9wdGlvbnMub25jZSBpcyB0cnVlLCBhZnRlciBpbnZva2Ugb25jZSByZW1vdmUgbGlzdGVuZXIgaGVyZVxuICAgICAgLy8gb25seSBicm93c2VyIG5lZWQgdG8gZG8gdGhpcywgbm9kZWpzIGV2ZW50RW1pdHRlciB3aWxsIGNhbCByZW1vdmVMaXN0ZW5lclxuICAgICAgLy8gaW5zaWRlIEV2ZW50RW1pdHRlci5vbmNlXG4gICAgICBjb25zdCBkZWxlZ2F0ZSA9IHRhc2sub3JpZ2luYWxEZWxlZ2F0ZSA/IHRhc2sub3JpZ2luYWxEZWxlZ2F0ZSA6IHRhc2suY2FsbGJhY2s7XG4gICAgICB0YXJnZXRbUkVNT1ZFX0VWRU5UX0xJU1RFTkVSXS5jYWxsKHRhcmdldCwgZXZlbnQudHlwZSwgZGVsZWdhdGUsIG9wdGlvbnMpO1xuICAgIH1cbiAgICByZXR1cm4gZXJyb3I7XG4gIH07XG4gIGZ1bmN0aW9uIGdsb2JhbENhbGxiYWNrKGNvbnRleHQsIGV2ZW50LCBpc0NhcHR1cmUpIHtcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci96b25lLmpzL2lzc3Vlcy85MTEsIGluIElFLCBzb21ldGltZXNcbiAgICAvLyBldmVudCB3aWxsIGJlIHVuZGVmaW5lZCwgc28gd2UgbmVlZCB0byB1c2Ugd2luZG93LmV2ZW50XG4gICAgZXZlbnQgPSBldmVudCB8fCBfZ2xvYmFsLmV2ZW50O1xuICAgIGlmICghZXZlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gZXZlbnQudGFyZ2V0IGlzIG5lZWRlZCBmb3IgU2Ftc3VuZyBUViBhbmQgU291cmNlQnVmZmVyXG4gICAgLy8gfHwgZ2xvYmFsIGlzIG5lZWRlZCBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci96b25lLmpzL2lzc3Vlcy8xOTBcbiAgICBjb25zdCB0YXJnZXQgPSBjb250ZXh0IHx8IGV2ZW50LnRhcmdldCB8fCBfZ2xvYmFsO1xuICAgIGNvbnN0IHRhc2tzID0gdGFyZ2V0W3pvbmVTeW1ib2xFdmVudE5hbWVzW2V2ZW50LnR5cGVdW2lzQ2FwdHVyZSA/IFRSVUVfU1RSIDogRkFMU0VfU1RSXV07XG4gICAgaWYgKHRhc2tzKSB7XG4gICAgICBjb25zdCBlcnJvcnMgPSBbXTtcbiAgICAgIC8vIGludm9rZSBhbGwgdGFza3Mgd2hpY2ggYXR0YWNoZWQgdG8gY3VycmVudCB0YXJnZXQgd2l0aCBnaXZlbiBldmVudC50eXBlIGFuZCBjYXB0dXJlID0gZmFsc2VcbiAgICAgIC8vIGZvciBwZXJmb3JtYW5jZSBjb25jZXJuLCBpZiB0YXNrLmxlbmd0aCA9PT0gMSwganVzdCBpbnZva2VcbiAgICAgIGlmICh0YXNrcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgY29uc3QgZXJyID0gaW52b2tlVGFzayh0YXNrc1swXSwgdGFyZ2V0LCBldmVudCk7XG4gICAgICAgIGVyciAmJiBlcnJvcnMucHVzaChlcnIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvem9uZS5qcy9pc3N1ZXMvODM2XG4gICAgICAgIC8vIGNvcHkgdGhlIHRhc2tzIGFycmF5IGJlZm9yZSBpbnZva2UsIHRvIGF2b2lkXG4gICAgICAgIC8vIHRoZSBjYWxsYmFjayB3aWxsIHJlbW92ZSBpdHNlbGYgb3Igb3RoZXIgbGlzdGVuZXJcbiAgICAgICAgY29uc3QgY29weVRhc2tzID0gdGFza3Muc2xpY2UoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3B5VGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoZXZlbnQgJiYgZXZlbnRbSU1NRURJQVRFX1BST1BBR0FUSU9OX1NZTUJPTF0gPT09IHRydWUpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBlcnIgPSBpbnZva2VUYXNrKGNvcHlUYXNrc1tpXSwgdGFyZ2V0LCBldmVudCk7XG4gICAgICAgICAgZXJyICYmIGVycm9ycy5wdXNoKGVycik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIFNpbmNlIHRoZXJlIGlzIG9ubHkgb25lIGVycm9yLCB3ZSBkb24ndCBuZWVkIHRvIHNjaGVkdWxlIG1pY3JvVGFza1xuICAgICAgLy8gdG8gdGhyb3cgdGhlIGVycm9yLlxuICAgICAgaWYgKGVycm9ycy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgdGhyb3cgZXJyb3JzWzBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlcnJvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBlcnIgPSBlcnJvcnNbaV07XG4gICAgICAgICAgYXBpLm5hdGl2ZVNjaGVkdWxlTWljcm9UYXNrKCgpID0+IHtcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBnbG9iYWwgc2hhcmVkIHpvbmVBd2FyZUNhbGxiYWNrIHRvIGhhbmRsZSBhbGwgZXZlbnQgY2FsbGJhY2sgd2l0aCBjYXB0dXJlID0gZmFsc2VcbiAgY29uc3QgZ2xvYmFsWm9uZUF3YXJlQ2FsbGJhY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICByZXR1cm4gZ2xvYmFsQ2FsbGJhY2sodGhpcywgZXZlbnQsIGZhbHNlKTtcbiAgfTtcbiAgLy8gZ2xvYmFsIHNoYXJlZCB6b25lQXdhcmVDYWxsYmFjayB0byBoYW5kbGUgYWxsIGV2ZW50IGNhbGxiYWNrIHdpdGggY2FwdHVyZSA9IHRydWVcbiAgY29uc3QgZ2xvYmFsWm9uZUF3YXJlQ2FwdHVyZUNhbGxiYWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgcmV0dXJuIGdsb2JhbENhbGxiYWNrKHRoaXMsIGV2ZW50LCB0cnVlKTtcbiAgfTtcbiAgZnVuY3Rpb24gcGF0Y2hFdmVudFRhcmdldE1ldGhvZHMob2JqLCBwYXRjaE9wdGlvbnMpIHtcbiAgICBpZiAoIW9iaikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBsZXQgdXNlR2xvYmFsQ2FsbGJhY2sgPSB0cnVlO1xuICAgIGlmIChwYXRjaE9wdGlvbnMgJiYgcGF0Y2hPcHRpb25zLnVzZUcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdXNlR2xvYmFsQ2FsbGJhY2sgPSBwYXRjaE9wdGlvbnMudXNlRztcbiAgICB9XG4gICAgY29uc3QgdmFsaWRhdGVIYW5kbGVyID0gcGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy52aDtcbiAgICBsZXQgY2hlY2tEdXBsaWNhdGUgPSB0cnVlO1xuICAgIGlmIChwYXRjaE9wdGlvbnMgJiYgcGF0Y2hPcHRpb25zLmNoa0R1cCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjaGVja0R1cGxpY2F0ZSA9IHBhdGNoT3B0aW9ucy5jaGtEdXA7XG4gICAgfVxuICAgIGxldCByZXR1cm5UYXJnZXQgPSBmYWxzZTtcbiAgICBpZiAocGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy5ydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm5UYXJnZXQgPSBwYXRjaE9wdGlvbnMucnQ7XG4gICAgfVxuICAgIGxldCBwcm90byA9IG9iajtcbiAgICB3aGlsZSAocHJvdG8gJiYgIXByb3RvLmhhc093blByb3BlcnR5KEFERF9FVkVOVF9MSVNURU5FUikpIHtcbiAgICAgIHByb3RvID0gT2JqZWN0R2V0UHJvdG90eXBlT2YocHJvdG8pO1xuICAgIH1cbiAgICBpZiAoIXByb3RvICYmIG9ialtBRERfRVZFTlRfTElTVEVORVJdKSB7XG4gICAgICAvLyBzb21laG93IHdlIGRpZCBub3QgZmluZCBpdCwgYnV0IHdlIGNhbiBzZWUgaXQuIFRoaXMgaGFwcGVucyBvbiBJRSBmb3IgV2luZG93IHByb3BlcnRpZXMuXG4gICAgICBwcm90byA9IG9iajtcbiAgICB9XG4gICAgaWYgKCFwcm90bykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAocHJvdG9bem9uZVN5bWJvbEFkZEV2ZW50TGlzdGVuZXJdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGV2ZW50TmFtZVRvU3RyaW5nID0gcGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy5ldmVudE5hbWVUb1N0cmluZztcbiAgICAvLyBXZSB1c2UgYSBzaGFyZWQgZ2xvYmFsIGB0YXNrRGF0YWAgdG8gcGFzcyBkYXRhIGZvciBgc2NoZWR1bGVFdmVudFRhc2tgLFxuICAgIC8vIGVsaW1pbmF0aW5nIHRoZSBuZWVkIHRvIGNyZWF0ZSBhIG5ldyBvYmplY3Qgc29sZWx5IGZvciBwYXNzaW5nIGRhdGEuXG4gICAgLy8gV0FSTklORzogVGhpcyBvYmplY3QgaGFzIGEgc3RhdGljIGxpZmV0aW1lLCBtZWFuaW5nIGl0IGlzIG5vdCBjcmVhdGVkXG4gICAgLy8gZWFjaCB0aW1lIGBhZGRFdmVudExpc3RlbmVyYCBpcyBjYWxsZWQuIEl0IGlzIGluc3RhbnRpYXRlZCBvbmx5IG9uY2VcbiAgICAvLyBhbmQgY2FwdHVyZWQgYnkgcmVmZXJlbmNlIGluc2lkZSB0aGUgYGFkZEV2ZW50TGlzdGVuZXJgIGFuZFxuICAgIC8vIGByZW1vdmVFdmVudExpc3RlbmVyYCBmdW5jdGlvbnMuIERvIG5vdCBhZGQgYW55IG5ldyBwcm9wZXJ0aWVzIHRvIHRoaXNcbiAgICAvLyBvYmplY3QsIGFzIGRvaW5nIHNvIHdvdWxkIG5lY2Vzc2l0YXRlIG1haW50YWluaW5nIHRoZSBpbmZvcm1hdGlvblxuICAgIC8vIGJldHdlZW4gYGFkZEV2ZW50TGlzdGVuZXJgIGNhbGxzLlxuICAgIGNvbnN0IHRhc2tEYXRhID0ge307XG4gICAgY29uc3QgbmF0aXZlQWRkRXZlbnRMaXN0ZW5lciA9IHByb3RvW3pvbmVTeW1ib2xBZGRFdmVudExpc3RlbmVyXSA9IHByb3RvW0FERF9FVkVOVF9MSVNURU5FUl07XG4gICAgY29uc3QgbmF0aXZlUmVtb3ZlRXZlbnRMaXN0ZW5lciA9IHByb3RvW3pvbmVTeW1ib2woUkVNT1ZFX0VWRU5UX0xJU1RFTkVSKV0gPSBwcm90b1tSRU1PVkVfRVZFTlRfTElTVEVORVJdO1xuICAgIGNvbnN0IG5hdGl2ZUxpc3RlbmVycyA9IHByb3RvW3pvbmVTeW1ib2woTElTVEVORVJTX0VWRU5UX0xJU1RFTkVSKV0gPSBwcm90b1tMSVNURU5FUlNfRVZFTlRfTElTVEVORVJdO1xuICAgIGNvbnN0IG5hdGl2ZVJlbW92ZUFsbExpc3RlbmVycyA9IHByb3RvW3pvbmVTeW1ib2woUkVNT1ZFX0FMTF9MSVNURU5FUlNfRVZFTlRfTElTVEVORVIpXSA9IHByb3RvW1JFTU9WRV9BTExfTElTVEVORVJTX0VWRU5UX0xJU1RFTkVSXTtcbiAgICBsZXQgbmF0aXZlUHJlcGVuZEV2ZW50TGlzdGVuZXI7XG4gICAgaWYgKHBhdGNoT3B0aW9ucyAmJiBwYXRjaE9wdGlvbnMucHJlcGVuZCkge1xuICAgICAgbmF0aXZlUHJlcGVuZEV2ZW50TGlzdGVuZXIgPSBwcm90b1t6b25lU3ltYm9sKHBhdGNoT3B0aW9ucy5wcmVwZW5kKV0gPSBwcm90b1twYXRjaE9wdGlvbnMucHJlcGVuZF07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoaXMgdXRpbCBmdW5jdGlvbiB3aWxsIGJ1aWxkIGFuIG9wdGlvbiBvYmplY3Qgd2l0aCBwYXNzaXZlIG9wdGlvblxuICAgICAqIHRvIGhhbmRsZSBhbGwgcG9zc2libGUgaW5wdXQgZnJvbSB0aGUgdXNlci5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBidWlsZEV2ZW50TGlzdGVuZXJPcHRpb25zKG9wdGlvbnMsIHBhc3NpdmUpIHtcbiAgICAgIGlmICghcGFzc2l2ZSkge1xuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgY2FwdHVyZTogb3B0aW9ucyxcbiAgICAgICAgICBwYXNzaXZlOiB0cnVlXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwYXNzaXZlOiB0cnVlXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnICYmIG9wdGlvbnMucGFzc2l2ZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICAgIHBhc3NpdmU6IHRydWVcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cbiAgICBjb25zdCBjdXN0b21TY2hlZHVsZUdsb2JhbCA9IGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgICAvLyBpZiB0aGVyZSBpcyBhbHJlYWR5IGEgdGFzayBmb3IgdGhlIGV2ZW50TmFtZSArIGNhcHR1cmUsXG4gICAgICAvLyBqdXN0IHJldHVybiwgYmVjYXVzZSB3ZSB1c2UgdGhlIHNoYXJlZCBnbG9iYWxab25lQXdhcmVDYWxsYmFjayBoZXJlLlxuICAgICAgaWYgKHRhc2tEYXRhLmlzRXhpc3RpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5hdGl2ZUFkZEV2ZW50TGlzdGVuZXIuY2FsbCh0YXNrRGF0YS50YXJnZXQsIHRhc2tEYXRhLmV2ZW50TmFtZSwgdGFza0RhdGEuY2FwdHVyZSA/IGdsb2JhbFpvbmVBd2FyZUNhcHR1cmVDYWxsYmFjayA6IGdsb2JhbFpvbmVBd2FyZUNhbGxiYWNrLCB0YXNrRGF0YS5vcHRpb25zKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEluIHRoZSBjb250ZXh0IG9mIGV2ZW50cyBhbmQgbGlzdGVuZXJzLCB0aGlzIGZ1bmN0aW9uIHdpbGwgYmVcbiAgICAgKiBjYWxsZWQgYXQgdGhlIGVuZCBieSBgY2FuY2VsVGFza2AsIHdoaWNoLCBpbiB0dXJuLCBjYWxscyBgdGFzay5jYW5jZWxGbmAuXG4gICAgICogQ2FuY2VsbGluZyBhIHRhc2sgaXMgcHJpbWFyaWx5IHVzZWQgdG8gcmVtb3ZlIGV2ZW50IGxpc3RlbmVycyBmcm9tXG4gICAgICogdGhlIHRhc2sgdGFyZ2V0LlxuICAgICAqL1xuICAgIGNvbnN0IGN1c3RvbUNhbmNlbEdsb2JhbCA9IGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgICAvLyBpZiB0YXNrIGlzIG5vdCBtYXJrZWQgYXMgaXNSZW1vdmVkLCB0aGlzIGNhbGwgaXMgZGlyZWN0bHlcbiAgICAgIC8vIGZyb20gWm9uZS5wcm90b3R5cGUuY2FuY2VsVGFzaywgd2Ugc2hvdWxkIHJlbW92ZSB0aGUgdGFza1xuICAgICAgLy8gZnJvbSB0YXNrc0xpc3Qgb2YgdGFyZ2V0IGZpcnN0XG4gICAgICBpZiAoIXRhc2suaXNSZW1vdmVkKSB7XG4gICAgICAgIGNvbnN0IHN5bWJvbEV2ZW50TmFtZXMgPSB6b25lU3ltYm9sRXZlbnROYW1lc1t0YXNrLmV2ZW50TmFtZV07XG4gICAgICAgIGxldCBzeW1ib2xFdmVudE5hbWU7XG4gICAgICAgIGlmIChzeW1ib2xFdmVudE5hbWVzKSB7XG4gICAgICAgICAgc3ltYm9sRXZlbnROYW1lID0gc3ltYm9sRXZlbnROYW1lc1t0YXNrLmNhcHR1cmUgPyBUUlVFX1NUUiA6IEZBTFNFX1NUUl07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZXhpc3RpbmdUYXNrcyA9IHN5bWJvbEV2ZW50TmFtZSAmJiB0YXNrLnRhcmdldFtzeW1ib2xFdmVudE5hbWVdO1xuICAgICAgICBpZiAoZXhpc3RpbmdUYXNrcykge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXhpc3RpbmdUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdUYXNrID0gZXhpc3RpbmdUYXNrc1tpXTtcbiAgICAgICAgICAgIGlmIChleGlzdGluZ1Rhc2sgPT09IHRhc2spIHtcbiAgICAgICAgICAgICAgZXhpc3RpbmdUYXNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgIC8vIHNldCBpc1JlbW92ZWQgdG8gZGF0YSBmb3IgZmFzdGVyIGludm9rZVRhc2sgY2hlY2tcbiAgICAgICAgICAgICAgdGFzay5pc1JlbW92ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBpZiAodGFzay5yZW1vdmVBYm9ydExpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgdGFzay5yZW1vdmVBYm9ydExpc3RlbmVyKCk7XG4gICAgICAgICAgICAgICAgdGFzay5yZW1vdmVBYm9ydExpc3RlbmVyID0gbnVsbDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoZXhpc3RpbmdUYXNrcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAvLyBhbGwgdGFza3MgZm9yIHRoZSBldmVudE5hbWUgKyBjYXB0dXJlIGhhdmUgZ29uZSxcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgZ2xvYmFsWm9uZUF3YXJlQ2FsbGJhY2sgYW5kIHJlbW92ZSB0aGUgdGFzayBjYWNoZSBmcm9tIHRhcmdldFxuICAgICAgICAgICAgICAgIHRhc2suYWxsUmVtb3ZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGFzay50YXJnZXRbc3ltYm9sRXZlbnROYW1lXSA9IG51bGw7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBpZiBhbGwgdGFza3MgZm9yIHRoZSBldmVudE5hbWUgKyBjYXB0dXJlIGhhdmUgZ29uZSxcbiAgICAgIC8vIHdlIHdpbGwgcmVhbGx5IHJlbW92ZSB0aGUgZ2xvYmFsIGV2ZW50IGNhbGxiYWNrLFxuICAgICAgLy8gaWYgbm90LCByZXR1cm5cbiAgICAgIGlmICghdGFzay5hbGxSZW1vdmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuYXRpdmVSZW1vdmVFdmVudExpc3RlbmVyLmNhbGwodGFzay50YXJnZXQsIHRhc2suZXZlbnROYW1lLCB0YXNrLmNhcHR1cmUgPyBnbG9iYWxab25lQXdhcmVDYXB0dXJlQ2FsbGJhY2sgOiBnbG9iYWxab25lQXdhcmVDYWxsYmFjaywgdGFzay5vcHRpb25zKTtcbiAgICB9O1xuICAgIGNvbnN0IGN1c3RvbVNjaGVkdWxlTm9uR2xvYmFsID0gZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgIHJldHVybiBuYXRpdmVBZGRFdmVudExpc3RlbmVyLmNhbGwodGFza0RhdGEudGFyZ2V0LCB0YXNrRGF0YS5ldmVudE5hbWUsIHRhc2suaW52b2tlLCB0YXNrRGF0YS5vcHRpb25zKTtcbiAgICB9O1xuICAgIGNvbnN0IGN1c3RvbVNjaGVkdWxlUHJlcGVuZCA9IGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgICByZXR1cm4gbmF0aXZlUHJlcGVuZEV2ZW50TGlzdGVuZXIuY2FsbCh0YXNrRGF0YS50YXJnZXQsIHRhc2tEYXRhLmV2ZW50TmFtZSwgdGFzay5pbnZva2UsIHRhc2tEYXRhLm9wdGlvbnMpO1xuICAgIH07XG4gICAgY29uc3QgY3VzdG9tQ2FuY2VsTm9uR2xvYmFsID0gZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgIHJldHVybiBuYXRpdmVSZW1vdmVFdmVudExpc3RlbmVyLmNhbGwodGFzay50YXJnZXQsIHRhc2suZXZlbnROYW1lLCB0YXNrLmludm9rZSwgdGFzay5vcHRpb25zKTtcbiAgICB9O1xuICAgIGNvbnN0IGN1c3RvbVNjaGVkdWxlID0gdXNlR2xvYmFsQ2FsbGJhY2sgPyBjdXN0b21TY2hlZHVsZUdsb2JhbCA6IGN1c3RvbVNjaGVkdWxlTm9uR2xvYmFsO1xuICAgIGNvbnN0IGN1c3RvbUNhbmNlbCA9IHVzZUdsb2JhbENhbGxiYWNrID8gY3VzdG9tQ2FuY2VsR2xvYmFsIDogY3VzdG9tQ2FuY2VsTm9uR2xvYmFsO1xuICAgIGNvbnN0IGNvbXBhcmVUYXNrQ2FsbGJhY2tWc0RlbGVnYXRlID0gZnVuY3Rpb24gKHRhc2ssIGRlbGVnYXRlKSB7XG4gICAgICBjb25zdCB0eXBlT2ZEZWxlZ2F0ZSA9IHR5cGVvZiBkZWxlZ2F0ZTtcbiAgICAgIHJldHVybiB0eXBlT2ZEZWxlZ2F0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0YXNrLmNhbGxiYWNrID09PSBkZWxlZ2F0ZSB8fCB0eXBlT2ZEZWxlZ2F0ZSA9PT0gJ29iamVjdCcgJiYgdGFzay5vcmlnaW5hbERlbGVnYXRlID09PSBkZWxlZ2F0ZTtcbiAgICB9O1xuICAgIGNvbnN0IGNvbXBhcmUgPSBwYXRjaE9wdGlvbnM/LmRpZmYgfHwgY29tcGFyZVRhc2tDYWxsYmFja1ZzRGVsZWdhdGU7XG4gICAgY29uc3QgdW5wYXRjaGVkRXZlbnRzID0gWm9uZVt6b25lU3ltYm9sKCdVTlBBVENIRURfRVZFTlRTJyldO1xuICAgIGNvbnN0IHBhc3NpdmVFdmVudHMgPSBfZ2xvYmFsW3pvbmVTeW1ib2woJ1BBU1NJVkVfRVZFTlRTJyldO1xuICAgIGZ1bmN0aW9uIGNvcHlFdmVudExpc3RlbmVyT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnICYmIG9wdGlvbnMgIT09IG51bGwpIHtcbiAgICAgICAgLy8gV2UgbmVlZCB0byBkZXN0cnVjdHVyZSB0aGUgdGFyZ2V0IGBvcHRpb25zYCBvYmplY3Qgc2luY2UgaXQgbWF5XG4gICAgICAgIC8vIGJlIGZyb3plbiBvciBzZWFsZWQgKHBvc3NpYmx5IHByb3ZpZGVkIGltcGxpY2l0bHkgYnkgYSB0aGlyZC1wYXJ0eVxuICAgICAgICAvLyBsaWJyYXJ5KSwgb3IgaXRzIHByb3BlcnRpZXMgbWF5IGJlIHJlYWRvbmx5LlxuICAgICAgICBjb25zdCBuZXdPcHRpb25zID0ge1xuICAgICAgICAgIC4uLm9wdGlvbnNcbiAgICAgICAgfTtcbiAgICAgICAgLy8gVGhlIGBzaWduYWxgIG9wdGlvbiB3YXMgcmVjZW50bHkgaW50cm9kdWNlZCwgd2hpY2ggY2F1c2VkIHJlZ3Jlc3Npb25zIGluXG4gICAgICAgIC8vIHRoaXJkLXBhcnR5IHNjZW5hcmlvcyB3aGVyZSBgQWJvcnRDb250cm9sbGVyYCB3YXMgZGlyZWN0bHkgcHJvdmlkZWQgdG9cbiAgICAgICAgLy8gYGFkZEV2ZW50TGlzdGVuZXJgIGFzIG9wdGlvbnMuIEZvciBpbnN0YW5jZSwgaW4gY2FzZXMgbGlrZVxuICAgICAgICAvLyBgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGNhbGxiYWNrLCBhYm9ydENvbnRyb2xsZXJJbnN0YW5jZSlgLFxuICAgICAgICAvLyB3aGljaCBpcyB2YWxpZCBiZWNhdXNlIGBBYm9ydENvbnRyb2xsZXJgIGluY2x1ZGVzIGEgYHNpZ25hbGAgZ2V0dGVyLCBzcHJlYWRpbmdcbiAgICAgICAgLy8gYHsuLi5vcHRpb25zfWAgd291bGRuJ3QgY29weSB0aGUgYHNpZ25hbGAuIEFkZGl0aW9uYWxseSwgdXNpbmcgYE9iamVjdC5jcmVhdGVgXG4gICAgICAgIC8vIGlzbid0IGZlYXNpYmxlIHNpbmNlIGBBYm9ydENvbnRyb2xsZXJgIGlzIGEgYnVpbHQtaW4gb2JqZWN0IHR5cGUsIGFuZCBhdHRlbXB0aW5nXG4gICAgICAgIC8vIHRvIGNyZWF0ZSBhIG5ldyBvYmplY3QgZGlyZWN0bHkgd2l0aCBpdCBhcyB0aGUgcHJvdG90eXBlIG1pZ2h0IHJlc3VsdCBpblxuICAgICAgICAvLyB1bmV4cGVjdGVkIGJlaGF2aW9yLlxuICAgICAgICBpZiAob3B0aW9ucy5zaWduYWwpIHtcbiAgICAgICAgICBuZXdPcHRpb25zLnNpZ25hbCA9IG9wdGlvbnMuc2lnbmFsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdPcHRpb25zO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfVxuICAgIGNvbnN0IG1ha2VBZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIChuYXRpdmVMaXN0ZW5lciwgYWRkU291cmNlLCBjdXN0b21TY2hlZHVsZUZuLCBjdXN0b21DYW5jZWxGbiwgcmV0dXJuVGFyZ2V0ID0gZmFsc2UsIHByZXBlbmQgPSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcyB8fCBfZ2xvYmFsO1xuICAgICAgICBsZXQgZXZlbnROYW1lID0gYXJndW1lbnRzWzBdO1xuICAgICAgICBpZiAocGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy50cmFuc2ZlckV2ZW50TmFtZSkge1xuICAgICAgICAgIGV2ZW50TmFtZSA9IHBhdGNoT3B0aW9ucy50cmFuc2ZlckV2ZW50TmFtZShldmVudE5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBkZWxlZ2F0ZSA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgaWYgKCFkZWxlZ2F0ZSkge1xuICAgICAgICAgIHJldHVybiBuYXRpdmVMaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc05vZGUgJiYgZXZlbnROYW1lID09PSAndW5jYXVnaHRFeGNlcHRpb24nKSB7XG4gICAgICAgICAgLy8gZG9uJ3QgcGF0Y2ggdW5jYXVnaHRFeGNlcHRpb24gb2Ygbm9kZWpzIHRvIHByZXZlbnQgZW5kbGVzcyBsb29wXG4gICAgICAgICAgcmV0dXJuIG5hdGl2ZUxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVG8gaW1wcm92ZSBgYWRkRXZlbnRMaXN0ZW5lcmAgcGVyZm9ybWFuY2UsIHdlIHdpbGwgY3JlYXRlIHRoZSBjYWxsYmFja1xuICAgICAgICAvLyBmb3IgdGhlIHRhc2sgbGF0ZXIgd2hlbiB0aGUgdGFzayBpcyBpbnZva2VkLlxuICAgICAgICBsZXQgaXNFdmVudExpc3RlbmVyT2JqZWN0ID0gZmFsc2U7XG4gICAgICAgIGlmICh0eXBlb2YgZGVsZWdhdGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAvLyBUaGlzIGNoZWNrcyB3aGV0aGVyIHRoZSBwcm92aWRlZCBsaXN0ZW5lciBhcmd1bWVudCBpcyBhbiBvYmplY3Qgd2l0aFxuICAgICAgICAgIC8vIGEgYGhhbmRsZUV2ZW50YCBtZXRob2QgKHNpbmNlIHdlIGNhbiBjYWxsIGBhZGRFdmVudExpc3RlbmVyYCB3aXRoIGFcbiAgICAgICAgICAvLyBmdW5jdGlvbiBgZXZlbnQgPT4gLi4uYCBvciB3aXRoIGFuIG9iamVjdCBgeyBoYW5kbGVFdmVudDogZXZlbnQgPT4gLi4uIH1gKS5cbiAgICAgICAgICBpZiAoIWRlbGVnYXRlLmhhbmRsZUV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gbmF0aXZlTGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaXNFdmVudExpc3RlbmVyT2JqZWN0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsaWRhdGVIYW5kbGVyICYmICF2YWxpZGF0ZUhhbmRsZXIobmF0aXZlTGlzdGVuZXIsIGRlbGVnYXRlLCB0YXJnZXQsIGFyZ3VtZW50cykpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFzc2l2ZSA9ICEhcGFzc2l2ZUV2ZW50cyAmJiBwYXNzaXZlRXZlbnRzLmluZGV4T2YoZXZlbnROYW1lKSAhPT0gLTE7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBjb3B5RXZlbnRMaXN0ZW5lck9wdGlvbnMoYnVpbGRFdmVudExpc3RlbmVyT3B0aW9ucyhhcmd1bWVudHNbMl0sIHBhc3NpdmUpKTtcbiAgICAgICAgY29uc3Qgc2lnbmFsID0gb3B0aW9ucz8uc2lnbmFsO1xuICAgICAgICBpZiAoc2lnbmFsPy5hYm9ydGVkKSB7XG4gICAgICAgICAgLy8gdGhlIHNpZ25hbCBpcyBhbiBhYm9ydGVkIG9uZSwganVzdCByZXR1cm4gd2l0aG91dCBhdHRhY2hpbmcgdGhlIGV2ZW50IGxpc3RlbmVyLlxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodW5wYXRjaGVkRXZlbnRzKSB7XG4gICAgICAgICAgLy8gY2hlY2sgdW5wYXRjaGVkIGxpc3RcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVucGF0Y2hlZEV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGV2ZW50TmFtZSA9PT0gdW5wYXRjaGVkRXZlbnRzW2ldKSB7XG4gICAgICAgICAgICAgIGlmIChwYXNzaXZlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5hdGl2ZUxpc3RlbmVyLmNhbGwodGFyZ2V0LCBldmVudE5hbWUsIGRlbGVnYXRlLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmF0aXZlTGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjYXB0dXJlID0gIW9wdGlvbnMgPyBmYWxzZSA6IHR5cGVvZiBvcHRpb25zID09PSAnYm9vbGVhbicgPyB0cnVlIDogb3B0aW9ucy5jYXB0dXJlO1xuICAgICAgICBjb25zdCBvbmNlID0gb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcgPyBvcHRpb25zLm9uY2UgOiBmYWxzZTtcbiAgICAgICAgY29uc3Qgem9uZSA9IFpvbmUuY3VycmVudDtcbiAgICAgICAgbGV0IHN5bWJvbEV2ZW50TmFtZXMgPSB6b25lU3ltYm9sRXZlbnROYW1lc1tldmVudE5hbWVdO1xuICAgICAgICBpZiAoIXN5bWJvbEV2ZW50TmFtZXMpIHtcbiAgICAgICAgICBwcmVwYXJlRXZlbnROYW1lcyhldmVudE5hbWUsIGV2ZW50TmFtZVRvU3RyaW5nKTtcbiAgICAgICAgICBzeW1ib2xFdmVudE5hbWVzID0gem9uZVN5bWJvbEV2ZW50TmFtZXNbZXZlbnROYW1lXTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzeW1ib2xFdmVudE5hbWUgPSBzeW1ib2xFdmVudE5hbWVzW2NhcHR1cmUgPyBUUlVFX1NUUiA6IEZBTFNFX1NUUl07XG4gICAgICAgIGxldCBleGlzdGluZ1Rhc2tzID0gdGFyZ2V0W3N5bWJvbEV2ZW50TmFtZV07XG4gICAgICAgIGxldCBpc0V4aXN0aW5nID0gZmFsc2U7XG4gICAgICAgIGlmIChleGlzdGluZ1Rhc2tzKSB7XG4gICAgICAgICAgLy8gYWxyZWFkeSBoYXZlIHRhc2sgcmVnaXN0ZXJlZFxuICAgICAgICAgIGlzRXhpc3RpbmcgPSB0cnVlO1xuICAgICAgICAgIGlmIChjaGVja0R1cGxpY2F0ZSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBleGlzdGluZ1Rhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGlmIChjb21wYXJlKGV4aXN0aW5nVGFza3NbaV0sIGRlbGVnYXRlKSkge1xuICAgICAgICAgICAgICAgIC8vIHNhbWUgY2FsbGJhY2ssIHNhbWUgY2FwdHVyZSwgc2FtZSBldmVudCBuYW1lLCBqdXN0IHJldHVyblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBleGlzdGluZ1Rhc2tzID0gdGFyZ2V0W3N5bWJvbEV2ZW50TmFtZV0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc291cmNlO1xuICAgICAgICBjb25zdCBjb25zdHJ1Y3Rvck5hbWUgPSB0YXJnZXQuY29uc3RydWN0b3JbJ25hbWUnXTtcbiAgICAgICAgY29uc3QgdGFyZ2V0U291cmNlID0gZ2xvYmFsU291cmNlc1tjb25zdHJ1Y3Rvck5hbWVdO1xuICAgICAgICBpZiAodGFyZ2V0U291cmNlKSB7XG4gICAgICAgICAgc291cmNlID0gdGFyZ2V0U291cmNlW2V2ZW50TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzb3VyY2UpIHtcbiAgICAgICAgICBzb3VyY2UgPSBjb25zdHJ1Y3Rvck5hbWUgKyBhZGRTb3VyY2UgKyAoZXZlbnROYW1lVG9TdHJpbmcgPyBldmVudE5hbWVUb1N0cmluZyhldmVudE5hbWUpIDogZXZlbnROYW1lKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJbiB0aGUgY29kZSBiZWxvdywgYG9wdGlvbnNgIHNob3VsZCBubyBsb25nZXIgYmUgcmVhc3NpZ25lZDsgaW5zdGVhZCwgaXRcbiAgICAgICAgLy8gc2hvdWxkIG9ubHkgYmUgbXV0YXRlZC4gVGhpcyBpcyBiZWNhdXNlIHdlIHBhc3MgdGhhdCBvYmplY3QgdG8gdGhlIG5hdGl2ZVxuICAgICAgICAvLyBgYWRkRXZlbnRMaXN0ZW5lcmAuXG4gICAgICAgIC8vIEl0J3MgZ2VuZXJhbGx5IHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgc2FtZSBvYmplY3QgcmVmZXJlbmNlIGZvciBvcHRpb25zLlxuICAgICAgICAvLyBUaGlzIGVuc3VyZXMgY29uc2lzdGVuY3kgYW5kIGF2b2lkcyBwb3RlbnRpYWwgaXNzdWVzLlxuICAgICAgICB0YXNrRGF0YS5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgaWYgKG9uY2UpIHtcbiAgICAgICAgICAvLyBXaGVuIHVzaW5nIGBhZGRFdmVudExpc3RlbmVyYCB3aXRoIHRoZSBgb25jZWAgb3B0aW9uLCB3ZSBkb24ndCBwYXNzXG4gICAgICAgICAgLy8gdGhlIGBvbmNlYCBvcHRpb24gZGlyZWN0bHkgdG8gdGhlIG5hdGl2ZSBgYWRkRXZlbnRMaXN0ZW5lcmAgbWV0aG9kLlxuICAgICAgICAgIC8vIEluc3RlYWQsIHdlIGtlZXAgdGhlIGBvbmNlYCBzZXR0aW5nIGFuZCBoYW5kbGUgaXQgb3Vyc2VsdmVzLlxuICAgICAgICAgIHRhc2tEYXRhLm9wdGlvbnMub25jZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRhc2tEYXRhLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGFza0RhdGEuY2FwdHVyZSA9IGNhcHR1cmU7XG4gICAgICAgIHRhc2tEYXRhLmV2ZW50TmFtZSA9IGV2ZW50TmFtZTtcbiAgICAgICAgdGFza0RhdGEuaXNFeGlzdGluZyA9IGlzRXhpc3Rpbmc7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB1c2VHbG9iYWxDYWxsYmFjayA/IE9QVElNSVpFRF9aT05FX0VWRU5UX1RBU0tfREFUQSA6IHVuZGVmaW5lZDtcbiAgICAgICAgLy8ga2VlcCB0YXNrRGF0YSBpbnRvIGRhdGEgdG8gYWxsb3cgb25TY2hlZHVsZUV2ZW50VGFzayB0byBhY2Nlc3MgdGhlIHRhc2sgaW5mb3JtYXRpb25cbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICBkYXRhLnRhc2tEYXRhID0gdGFza0RhdGE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNpZ25hbCkge1xuICAgICAgICAgIC8vIFdoZW4gdXNpbmcgYGFkZEV2ZW50TGlzdGVuZXJgIHdpdGggdGhlIGBzaWduYWxgIG9wdGlvbiwgd2UgZG9uJ3QgcGFzc1xuICAgICAgICAgIC8vIHRoZSBgc2lnbmFsYCBvcHRpb24gZGlyZWN0bHkgdG8gdGhlIG5hdGl2ZSBgYWRkRXZlbnRMaXN0ZW5lcmAgbWV0aG9kLlxuICAgICAgICAgIC8vIEluc3RlYWQsIHdlIGtlZXAgdGhlIGBzaWduYWxgIHNldHRpbmcgYW5kIGhhbmRsZSBpdCBvdXJzZWx2ZXMuXG4gICAgICAgICAgdGFza0RhdGEub3B0aW9ucy5zaWduYWwgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGhlIGBzY2hlZHVsZUV2ZW50VGFza2AgZnVuY3Rpb24gd2lsbCB1bHRpbWF0ZWx5IGNhbGwgYGN1c3RvbVNjaGVkdWxlR2xvYmFsYCxcbiAgICAgICAgLy8gd2hpY2ggaW4gdHVybiBjYWxscyB0aGUgbmF0aXZlIGBhZGRFdmVudExpc3RlbmVyYC4gVGhpcyBpcyB3aHkgYHRhc2tEYXRhLm9wdGlvbnNgXG4gICAgICAgIC8vIGlzIHVwZGF0ZWQgYmVmb3JlIHNjaGVkdWxpbmcgdGhlIHRhc2ssIGFzIGBjdXN0b21TY2hlZHVsZUdsb2JhbGAgdXNlc1xuICAgICAgICAvLyBgdGFza0RhdGEub3B0aW9uc2AgdG8gcGFzcyBpdCB0byB0aGUgbmF0aXZlIGBhZGRFdmVudExpc3RlbmVyYC5cbiAgICAgICAgY29uc3QgdGFzayA9IHpvbmUuc2NoZWR1bGVFdmVudFRhc2soc291cmNlLCBkZWxlZ2F0ZSwgZGF0YSwgY3VzdG9tU2NoZWR1bGVGbiwgY3VzdG9tQ2FuY2VsRm4pO1xuICAgICAgICBpZiAoc2lnbmFsKSB7XG4gICAgICAgICAgLy8gYWZ0ZXIgdGFzayBpcyBzY2hlZHVsZWQsIHdlIG5lZWQgdG8gc3RvcmUgdGhlIHNpZ25hbCBiYWNrIHRvIHRhc2sub3B0aW9uc1xuICAgICAgICAgIHRhc2tEYXRhLm9wdGlvbnMuc2lnbmFsID0gc2lnbmFsO1xuICAgICAgICAgIC8vIFdyYXBwaW5nIGB0YXNrYCBpbiBhIHdlYWsgcmVmZXJlbmNlIHdvdWxkIG5vdCBwcmV2ZW50IG1lbW9yeSBsZWFrcy4gV2VhayByZWZlcmVuY2VzIGFyZVxuICAgICAgICAgIC8vIHByaW1hcmlseSB1c2VkIGZvciBwcmV2ZW50aW5nIHN0cm9uZyByZWZlcmVuY2VzIGN5Y2xlcy4gYG9uQWJvcnRgIGlzIGFsd2F5cyByZWFjaGFibGVcbiAgICAgICAgICAvLyBhcyBpdCdzIGFuIGV2ZW50IGxpc3RlbmVyLCBzbyBpdHMgY2xvc3VyZSByZXRhaW5zIGEgc3Ryb25nIHJlZmVyZW5jZSB0byB0aGUgYHRhc2tgLlxuICAgICAgICAgIGNvbnN0IG9uQWJvcnQgPSAoKSA9PiB0YXNrLnpvbmUuY2FuY2VsVGFzayh0YXNrKTtcbiAgICAgICAgICBuYXRpdmVMaXN0ZW5lci5jYWxsKHNpZ25hbCwgJ2Fib3J0Jywgb25BYm9ydCwge1xuICAgICAgICAgICAgb25jZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIC8vIFdlIG5lZWQgdG8gcmVtb3ZlIHRoZSBgYWJvcnRgIGxpc3RlbmVyIHdoZW4gdGhlIGV2ZW50IGxpc3RlbmVyIGlzIGdvaW5nIHRvIGJlIHJlbW92ZWQsXG4gICAgICAgICAgLy8gYXMgaXQgY3JlYXRlcyBhIGNsb3N1cmUgdGhhdCBjYXB0dXJlcyBgdGFza2AuIFRoaXMgY2xvc3VyZSByZXRhaW5zIGEgcmVmZXJlbmNlIHRvIHRoZVxuICAgICAgICAgIC8vIGB0YXNrYCBvYmplY3QgZXZlbiBhZnRlciBpdCBnb2VzIG91dCBvZiBzY29wZSwgcHJldmVudGluZyBgdGFza2AgZnJvbSBiZWluZyBnYXJiYWdlXG4gICAgICAgICAgLy8gY29sbGVjdGVkLlxuICAgICAgICAgIHRhc2sucmVtb3ZlQWJvcnRMaXN0ZW5lciA9ICgpID0+IHNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKCdhYm9ydCcsIG9uQWJvcnQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHNob3VsZCBjbGVhciB0YXNrRGF0YS50YXJnZXQgdG8gYXZvaWQgbWVtb3J5IGxlYWtcbiAgICAgICAgLy8gaXNzdWUsIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzIwNDQyXG4gICAgICAgIHRhc2tEYXRhLnRhcmdldCA9IG51bGw7XG4gICAgICAgIC8vIG5lZWQgdG8gY2xlYXIgdXAgdGFza0RhdGEgYmVjYXVzZSBpdCBpcyBhIGdsb2JhbCBvYmplY3RcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICBkYXRhLnRhc2tEYXRhID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvLyBoYXZlIHRvIHNhdmUgdGhvc2UgaW5mb3JtYXRpb24gdG8gdGFzayBpbiBjYXNlXG4gICAgICAgIC8vIGFwcGxpY2F0aW9uIG1heSBjYWxsIHRhc2suem9uZS5jYW5jZWxUYXNrKCkgZGlyZWN0bHlcbiAgICAgICAgaWYgKG9uY2UpIHtcbiAgICAgICAgICB0YXNrRGF0YS5vcHRpb25zLm9uY2UgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGFzay5vcHRpb25zICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAvLyBXZSBzaG91bGQgc2F2ZSB0aGUgb3B0aW9ucyBvbiB0aGUgdGFzayAoaWYgaXQncyBhbiBvYmplY3QpIGJlY2F1c2VcbiAgICAgICAgICAvLyB3ZSdsbCBiZSB1c2luZyBgdGFzay5vcHRpb25zYCBsYXRlciB3aGVuIHJlbW92aW5nIHRoZSBldmVudCBsaXN0ZW5lclxuICAgICAgICAgIC8vIGFuZCBwYXNzaW5nIGl0IGJhY2sgdG8gYHJlbW92ZUV2ZW50TGlzdGVuZXJgLlxuICAgICAgICAgIHRhc2sub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIH1cbiAgICAgICAgdGFzay50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRhc2suY2FwdHVyZSA9IGNhcHR1cmU7XG4gICAgICAgIHRhc2suZXZlbnROYW1lID0gZXZlbnROYW1lO1xuICAgICAgICBpZiAoaXNFdmVudExpc3RlbmVyT2JqZWN0KSB7XG4gICAgICAgICAgLy8gc2F2ZSBvcmlnaW5hbCBkZWxlZ2F0ZSBmb3IgY29tcGFyZSB0byBjaGVjayBkdXBsaWNhdGVcbiAgICAgICAgICB0YXNrLm9yaWdpbmFsRGVsZWdhdGUgPSBkZWxlZ2F0ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXByZXBlbmQpIHtcbiAgICAgICAgICBleGlzdGluZ1Rhc2tzLnB1c2godGFzayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZXhpc3RpbmdUYXNrcy51bnNoaWZ0KHRhc2spO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXR1cm5UYXJnZXQpIHtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH07XG4gICAgcHJvdG9bQUREX0VWRU5UX0xJU1RFTkVSXSA9IG1ha2VBZGRMaXN0ZW5lcihuYXRpdmVBZGRFdmVudExpc3RlbmVyLCBBRERfRVZFTlRfTElTVEVORVJfU09VUkNFLCBjdXN0b21TY2hlZHVsZSwgY3VzdG9tQ2FuY2VsLCByZXR1cm5UYXJnZXQpO1xuICAgIGlmIChuYXRpdmVQcmVwZW5kRXZlbnRMaXN0ZW5lcikge1xuICAgICAgcHJvdG9bUFJFUEVORF9FVkVOVF9MSVNURU5FUl0gPSBtYWtlQWRkTGlzdGVuZXIobmF0aXZlUHJlcGVuZEV2ZW50TGlzdGVuZXIsIFBSRVBFTkRfRVZFTlRfTElTVEVORVJfU09VUkNFLCBjdXN0b21TY2hlZHVsZVByZXBlbmQsIGN1c3RvbUNhbmNlbCwgcmV0dXJuVGFyZ2V0LCB0cnVlKTtcbiAgICB9XG4gICAgcHJvdG9bUkVNT1ZFX0VWRU5UX0xJU1RFTkVSXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMgfHwgX2dsb2JhbDtcbiAgICAgIGxldCBldmVudE5hbWUgPSBhcmd1bWVudHNbMF07XG4gICAgICBpZiAocGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy50cmFuc2ZlckV2ZW50TmFtZSkge1xuICAgICAgICBldmVudE5hbWUgPSBwYXRjaE9wdGlvbnMudHJhbnNmZXJFdmVudE5hbWUoZXZlbnROYW1lKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG9wdGlvbnMgPSBhcmd1bWVudHNbMl07XG4gICAgICBjb25zdCBjYXB0dXJlID0gIW9wdGlvbnMgPyBmYWxzZSA6IHR5cGVvZiBvcHRpb25zID09PSAnYm9vbGVhbicgPyB0cnVlIDogb3B0aW9ucy5jYXB0dXJlO1xuICAgICAgY29uc3QgZGVsZWdhdGUgPSBhcmd1bWVudHNbMV07XG4gICAgICBpZiAoIWRlbGVnYXRlKSB7XG4gICAgICAgIHJldHVybiBuYXRpdmVSZW1vdmVFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgICBpZiAodmFsaWRhdGVIYW5kbGVyICYmICF2YWxpZGF0ZUhhbmRsZXIobmF0aXZlUmVtb3ZlRXZlbnRMaXN0ZW5lciwgZGVsZWdhdGUsIHRhcmdldCwgYXJndW1lbnRzKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBzeW1ib2xFdmVudE5hbWVzID0gem9uZVN5bWJvbEV2ZW50TmFtZXNbZXZlbnROYW1lXTtcbiAgICAgIGxldCBzeW1ib2xFdmVudE5hbWU7XG4gICAgICBpZiAoc3ltYm9sRXZlbnROYW1lcykge1xuICAgICAgICBzeW1ib2xFdmVudE5hbWUgPSBzeW1ib2xFdmVudE5hbWVzW2NhcHR1cmUgPyBUUlVFX1NUUiA6IEZBTFNFX1NUUl07XG4gICAgICB9XG4gICAgICBjb25zdCBleGlzdGluZ1Rhc2tzID0gc3ltYm9sRXZlbnROYW1lICYmIHRhcmdldFtzeW1ib2xFdmVudE5hbWVdO1xuICAgICAgLy8gYGV4aXN0aW5nVGFza3NgIG1heSBub3QgZXhpc3QgaWYgdGhlIGBhZGRFdmVudExpc3RlbmVyYCB3YXMgY2FsbGVkIGJlZm9yZVxuICAgICAgLy8gaXQgd2FzIHBhdGNoZWQgYnkgem9uZS5qcy4gUGxlYXNlIHJlZmVyIHRvIHRoZSBhdHRhY2hlZCBpc3N1ZSBmb3JcbiAgICAgIC8vIGNsYXJpZmljYXRpb24sIHBhcnRpY3VsYXJseSBhZnRlciB0aGUgYGlmYCBjb25kaXRpb24sIGJlZm9yZSBjYWxsaW5nXG4gICAgICAvLyB0aGUgbmF0aXZlIGByZW1vdmVFdmVudExpc3RlbmVyYC5cbiAgICAgIGlmIChleGlzdGluZ1Rhc2tzKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXhpc3RpbmdUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IGV4aXN0aW5nVGFzayA9IGV4aXN0aW5nVGFza3NbaV07XG4gICAgICAgICAgaWYgKGNvbXBhcmUoZXhpc3RpbmdUYXNrLCBkZWxlZ2F0ZSkpIHtcbiAgICAgICAgICAgIGV4aXN0aW5nVGFza3Muc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgLy8gc2V0IGlzUmVtb3ZlZCB0byBkYXRhIGZvciBmYXN0ZXIgaW52b2tlVGFzayBjaGVja1xuICAgICAgICAgICAgZXhpc3RpbmdUYXNrLmlzUmVtb3ZlZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAoZXhpc3RpbmdUYXNrcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgLy8gYWxsIHRhc2tzIGZvciB0aGUgZXZlbnROYW1lICsgY2FwdHVyZSBoYXZlIGdvbmUsXG4gICAgICAgICAgICAgIC8vIHJlbW92ZSBnbG9iYWxab25lQXdhcmVDYWxsYmFjayBhbmQgcmVtb3ZlIHRoZSB0YXNrIGNhY2hlIGZyb20gdGFyZ2V0XG4gICAgICAgICAgICAgIGV4aXN0aW5nVGFzay5hbGxSZW1vdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgdGFyZ2V0W3N5bWJvbEV2ZW50TmFtZV0gPSBudWxsO1xuICAgICAgICAgICAgICAvLyBpbiB0aGUgdGFyZ2V0LCB3ZSBoYXZlIGFuIGV2ZW50IGxpc3RlbmVyIHdoaWNoIGlzIGFkZGVkIGJ5IG9uX3Byb3BlcnR5XG4gICAgICAgICAgICAgIC8vIHN1Y2ggYXMgdGFyZ2V0Lm9uY2xpY2sgPSBmdW5jdGlvbigpIHt9LCBzbyB3ZSBuZWVkIHRvIGNsZWFyIHRoaXMgaW50ZXJuYWxcbiAgICAgICAgICAgICAgLy8gcHJvcGVydHkgdG9vIGlmIGFsbCBkZWxlZ2F0ZXMgd2l0aCBjYXB0dXJlPWZhbHNlIHdlcmUgcmVtb3ZlZFxuICAgICAgICAgICAgICAvLyBodHRwczovLyBnaXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMzE2NDNcbiAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvNTQ1ODFcbiAgICAgICAgICAgICAgaWYgKCFjYXB0dXJlICYmIHR5cGVvZiBldmVudE5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb25Qcm9wZXJ0eVN5bWJvbCA9IFpPTkVfU1lNQk9MX1BSRUZJWCArICdPTl9QUk9QRVJUWScgKyBldmVudE5hbWU7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W29uUHJvcGVydHlTeW1ib2xdID0gbnVsbDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSW4gYWxsIG90aGVyIGNvbmRpdGlvbnMsIHdoZW4gYGFkZEV2ZW50TGlzdGVuZXJgIGlzIGNhbGxlZCBhZnRlciBiZWluZ1xuICAgICAgICAgICAgLy8gcGF0Y2hlZCBieSB6b25lLmpzLCB3ZSB3b3VsZCBhbHdheXMgZmluZCBhbiBldmVudCB0YXNrIG9uIHRoZSBgRXZlbnRUYXJnZXRgLlxuICAgICAgICAgICAgLy8gVGhpcyB3aWxsIHRyaWdnZXIgYGNhbmNlbEZuYCBvbiB0aGUgYGV4aXN0aW5nVGFza2AsIGxlYWRpbmcgdG8gYGN1c3RvbUNhbmNlbEdsb2JhbGAsXG4gICAgICAgICAgICAvLyB3aGljaCB1bHRpbWF0ZWx5IHJlbW92ZXMgYW4gZXZlbnQgbGlzdGVuZXIgYW5kIGNsZWFucyB1cCB0aGUgYWJvcnQgbGlzdGVuZXJcbiAgICAgICAgICAgIC8vIChpZiBhbiBgQWJvcnRTaWduYWxgIHdhcyBwcm92aWRlZCB3aGVuIHNjaGVkdWxpbmcgYSB0YXNrKS5cbiAgICAgICAgICAgIGV4aXN0aW5nVGFzay56b25lLmNhbmNlbFRhc2soZXhpc3RpbmdUYXNrKTtcbiAgICAgICAgICAgIGlmIChyZXR1cm5UYXJnZXQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3pvbmUuanMvaXNzdWVzLzkzMFxuICAgICAgLy8gV2UgbWF5IGVuY291bnRlciBhIHNpdHVhdGlvbiB3aGVyZSB0aGUgYGFkZEV2ZW50TGlzdGVuZXJgIHdhc1xuICAgICAgLy8gY2FsbGVkIG9uIHRoZSBldmVudCB0YXJnZXQgYmVmb3JlIHpvbmUuanMgaXMgbG9hZGVkLCByZXN1bHRpbmdcbiAgICAgIC8vIGluIG5vIHRhc2sgYmVpbmcgc3RvcmVkIG9uIHRoZSBldmVudCB0YXJnZXQgZHVlIHRvIGl0cyBpbnZvY2F0aW9uXG4gICAgICAvLyBvZiB0aGUgbmF0aXZlIGltcGxlbWVudGF0aW9uLiBJbiB0aGlzIHNjZW5hcmlvLCB3ZSBzaW1wbHkgbmVlZCB0b1xuICAgICAgLy8gaW52b2tlIHRoZSBuYXRpdmUgYHJlbW92ZUV2ZW50TGlzdGVuZXJgLlxuICAgICAgcmV0dXJuIG5hdGl2ZVJlbW92ZUV2ZW50TGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICAgIHByb3RvW0xJU1RFTkVSU19FVkVOVF9MSVNURU5FUl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSB0aGlzIHx8IF9nbG9iYWw7XG4gICAgICBsZXQgZXZlbnROYW1lID0gYXJndW1lbnRzWzBdO1xuICAgICAgaWYgKHBhdGNoT3B0aW9ucyAmJiBwYXRjaE9wdGlvbnMudHJhbnNmZXJFdmVudE5hbWUpIHtcbiAgICAgICAgZXZlbnROYW1lID0gcGF0Y2hPcHRpb25zLnRyYW5zZmVyRXZlbnROYW1lKGV2ZW50TmFtZSk7XG4gICAgICB9XG4gICAgICBjb25zdCBsaXN0ZW5lcnMgPSBbXTtcbiAgICAgIGNvbnN0IHRhc2tzID0gZmluZEV2ZW50VGFza3ModGFyZ2V0LCBldmVudE5hbWVUb1N0cmluZyA/IGV2ZW50TmFtZVRvU3RyaW5nKGV2ZW50TmFtZSkgOiBldmVudE5hbWUpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0YXNrID0gdGFza3NbaV07XG4gICAgICAgIGxldCBkZWxlZ2F0ZSA9IHRhc2sub3JpZ2luYWxEZWxlZ2F0ZSA/IHRhc2sub3JpZ2luYWxEZWxlZ2F0ZSA6IHRhc2suY2FsbGJhY2s7XG4gICAgICAgIGxpc3RlbmVycy5wdXNoKGRlbGVnYXRlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBsaXN0ZW5lcnM7XG4gICAgfTtcbiAgICBwcm90b1tSRU1PVkVfQUxMX0xJU1RFTkVSU19FVkVOVF9MSVNURU5FUl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSB0aGlzIHx8IF9nbG9iYWw7XG4gICAgICBsZXQgZXZlbnROYW1lID0gYXJndW1lbnRzWzBdO1xuICAgICAgaWYgKCFldmVudE5hbWUpIHtcbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRhcmdldCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IHByb3AgPSBrZXlzW2ldO1xuICAgICAgICAgIGNvbnN0IG1hdGNoID0gRVZFTlRfTkFNRV9TWU1CT0xfUkVHWC5leGVjKHByb3ApO1xuICAgICAgICAgIGxldCBldnROYW1lID0gbWF0Y2ggJiYgbWF0Y2hbMV07XG4gICAgICAgICAgLy8gaW4gbm9kZWpzIEV2ZW50RW1pdHRlciwgcmVtb3ZlTGlzdGVuZXIgZXZlbnQgaXNcbiAgICAgICAgICAvLyB1c2VkIGZvciBtb25pdG9yaW5nIHRoZSByZW1vdmVMaXN0ZW5lciBjYWxsLFxuICAgICAgICAgIC8vIHNvIGp1c3Qga2VlcCByZW1vdmVMaXN0ZW5lciBldmVudExpc3RlbmVyIHVudGlsXG4gICAgICAgICAgLy8gYWxsIG90aGVyIGV2ZW50TGlzdGVuZXJzIGFyZSByZW1vdmVkXG4gICAgICAgICAgaWYgKGV2dE5hbWUgJiYgZXZ0TmFtZSAhPT0gJ3JlbW92ZUxpc3RlbmVyJykge1xuICAgICAgICAgICAgdGhpc1tSRU1PVkVfQUxMX0xJU1RFTkVSU19FVkVOVF9MSVNURU5FUl0uY2FsbCh0aGlzLCBldnROYW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmVtb3ZlIHJlbW92ZUxpc3RlbmVyIGxpc3RlbmVyIGZpbmFsbHlcbiAgICAgICAgdGhpc1tSRU1PVkVfQUxMX0xJU1RFTkVSU19FVkVOVF9MSVNURU5FUl0uY2FsbCh0aGlzLCAncmVtb3ZlTGlzdGVuZXInKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChwYXRjaE9wdGlvbnMgJiYgcGF0Y2hPcHRpb25zLnRyYW5zZmVyRXZlbnROYW1lKSB7XG4gICAgICAgICAgZXZlbnROYW1lID0gcGF0Y2hPcHRpb25zLnRyYW5zZmVyRXZlbnROYW1lKGV2ZW50TmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3ltYm9sRXZlbnROYW1lcyA9IHpvbmVTeW1ib2xFdmVudE5hbWVzW2V2ZW50TmFtZV07XG4gICAgICAgIGlmIChzeW1ib2xFdmVudE5hbWVzKSB7XG4gICAgICAgICAgY29uc3Qgc3ltYm9sRXZlbnROYW1lID0gc3ltYm9sRXZlbnROYW1lc1tGQUxTRV9TVFJdO1xuICAgICAgICAgIGNvbnN0IHN5bWJvbENhcHR1cmVFdmVudE5hbWUgPSBzeW1ib2xFdmVudE5hbWVzW1RSVUVfU1RSXTtcbiAgICAgICAgICBjb25zdCB0YXNrcyA9IHRhcmdldFtzeW1ib2xFdmVudE5hbWVdO1xuICAgICAgICAgIGNvbnN0IGNhcHR1cmVUYXNrcyA9IHRhcmdldFtzeW1ib2xDYXB0dXJlRXZlbnROYW1lXTtcbiAgICAgICAgICBpZiAodGFza3MpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlbW92ZVRhc2tzID0gdGFza3Muc2xpY2UoKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVtb3ZlVGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgY29uc3QgdGFzayA9IHJlbW92ZVRhc2tzW2ldO1xuICAgICAgICAgICAgICBsZXQgZGVsZWdhdGUgPSB0YXNrLm9yaWdpbmFsRGVsZWdhdGUgPyB0YXNrLm9yaWdpbmFsRGVsZWdhdGUgOiB0YXNrLmNhbGxiYWNrO1xuICAgICAgICAgICAgICB0aGlzW1JFTU9WRV9FVkVOVF9MSVNURU5FUl0uY2FsbCh0aGlzLCBldmVudE5hbWUsIGRlbGVnYXRlLCB0YXNrLm9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoY2FwdHVyZVRhc2tzKSB7XG4gICAgICAgICAgICBjb25zdCByZW1vdmVUYXNrcyA9IGNhcHR1cmVUYXNrcy5zbGljZSgpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZW1vdmVUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBjb25zdCB0YXNrID0gcmVtb3ZlVGFza3NbaV07XG4gICAgICAgICAgICAgIGxldCBkZWxlZ2F0ZSA9IHRhc2sub3JpZ2luYWxEZWxlZ2F0ZSA/IHRhc2sub3JpZ2luYWxEZWxlZ2F0ZSA6IHRhc2suY2FsbGJhY2s7XG4gICAgICAgICAgICAgIHRoaXNbUkVNT1ZFX0VWRU5UX0xJU1RFTkVSXS5jYWxsKHRoaXMsIGV2ZW50TmFtZSwgZGVsZWdhdGUsIHRhc2sub3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocmV0dXJuVGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgIH07XG4gICAgLy8gZm9yIG5hdGl2ZSB0b1N0cmluZyBwYXRjaFxuICAgIGF0dGFjaE9yaWdpblRvUGF0Y2hlZChwcm90b1tBRERfRVZFTlRfTElTVEVORVJdLCBuYXRpdmVBZGRFdmVudExpc3RlbmVyKTtcbiAgICBhdHRhY2hPcmlnaW5Ub1BhdGNoZWQocHJvdG9bUkVNT1ZFX0VWRU5UX0xJU1RFTkVSXSwgbmF0aXZlUmVtb3ZlRXZlbnRMaXN0ZW5lcik7XG4gICAgaWYgKG5hdGl2ZVJlbW92ZUFsbExpc3RlbmVycykge1xuICAgICAgYXR0YWNoT3JpZ2luVG9QYXRjaGVkKHByb3RvW1JFTU9WRV9BTExfTElTVEVORVJTX0VWRU5UX0xJU1RFTkVSXSwgbmF0aXZlUmVtb3ZlQWxsTGlzdGVuZXJzKTtcbiAgICB9XG4gICAgaWYgKG5hdGl2ZUxpc3RlbmVycykge1xuICAgICAgYXR0YWNoT3JpZ2luVG9QYXRjaGVkKHByb3RvW0xJU1RFTkVSU19FVkVOVF9MSVNURU5FUl0sIG5hdGl2ZUxpc3RlbmVycyk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGxldCByZXN1bHRzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXBpcy5sZW5ndGg7IGkrKykge1xuICAgIHJlc3VsdHNbaV0gPSBwYXRjaEV2ZW50VGFyZ2V0TWV0aG9kcyhhcGlzW2ldLCBwYXRjaE9wdGlvbnMpO1xuICB9XG4gIHJldHVybiByZXN1bHRzO1xufVxuZnVuY3Rpb24gZmluZEV2ZW50VGFza3ModGFyZ2V0LCBldmVudE5hbWUpIHtcbiAgaWYgKCFldmVudE5hbWUpIHtcbiAgICBjb25zdCBmb3VuZFRhc2tzID0gW107XG4gICAgZm9yIChsZXQgcHJvcCBpbiB0YXJnZXQpIHtcbiAgICAgIGNvbnN0IG1hdGNoID0gRVZFTlRfTkFNRV9TWU1CT0xfUkVHWC5leGVjKHByb3ApO1xuICAgICAgbGV0IGV2dE5hbWUgPSBtYXRjaCAmJiBtYXRjaFsxXTtcbiAgICAgIGlmIChldnROYW1lICYmICghZXZlbnROYW1lIHx8IGV2dE5hbWUgPT09IGV2ZW50TmFtZSkpIHtcbiAgICAgICAgY29uc3QgdGFza3MgPSB0YXJnZXRbcHJvcF07XG4gICAgICAgIGlmICh0YXNrcykge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvdW5kVGFza3MucHVzaCh0YXNrc1tpXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmb3VuZFRhc2tzO1xuICB9XG4gIGxldCBzeW1ib2xFdmVudE5hbWUgPSB6b25lU3ltYm9sRXZlbnROYW1lc1tldmVudE5hbWVdO1xuICBpZiAoIXN5bWJvbEV2ZW50TmFtZSkge1xuICAgIHByZXBhcmVFdmVudE5hbWVzKGV2ZW50TmFtZSk7XG4gICAgc3ltYm9sRXZlbnROYW1lID0gem9uZVN5bWJvbEV2ZW50TmFtZXNbZXZlbnROYW1lXTtcbiAgfVxuICBjb25zdCBjYXB0dXJlRmFsc2VUYXNrcyA9IHRhcmdldFtzeW1ib2xFdmVudE5hbWVbRkFMU0VfU1RSXV07XG4gIGNvbnN0IGNhcHR1cmVUcnVlVGFza3MgPSB0YXJnZXRbc3ltYm9sRXZlbnROYW1lW1RSVUVfU1RSXV07XG4gIGlmICghY2FwdHVyZUZhbHNlVGFza3MpIHtcbiAgICByZXR1cm4gY2FwdHVyZVRydWVUYXNrcyA/IGNhcHR1cmVUcnVlVGFza3Muc2xpY2UoKSA6IFtdO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBjYXB0dXJlVHJ1ZVRhc2tzID8gY2FwdHVyZUZhbHNlVGFza3MuY29uY2F0KGNhcHR1cmVUcnVlVGFza3MpIDogY2FwdHVyZUZhbHNlVGFza3Muc2xpY2UoKTtcbiAgfVxufVxuZnVuY3Rpb24gcGF0Y2hFdmVudFByb3RvdHlwZShnbG9iYWwsIGFwaSkge1xuICBjb25zdCBFdmVudCA9IGdsb2JhbFsnRXZlbnQnXTtcbiAgaWYgKEV2ZW50ICYmIEV2ZW50LnByb3RvdHlwZSkge1xuICAgIGFwaS5wYXRjaE1ldGhvZChFdmVudC5wcm90b3R5cGUsICdzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24nLCBkZWxlZ2F0ZSA9PiBmdW5jdGlvbiAoc2VsZiwgYXJncykge1xuICAgICAgc2VsZltJTU1FRElBVEVfUFJPUEFHQVRJT05fU1lNQk9MXSA9IHRydWU7XG4gICAgICAvLyB3ZSBuZWVkIHRvIGNhbGwgdGhlIG5hdGl2ZSBzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb25cbiAgICAgIC8vIGluIGNhc2UgaW4gc29tZSBoeWJyaWQgYXBwbGljYXRpb24sIHNvbWUgcGFydCBvZlxuICAgICAgLy8gYXBwbGljYXRpb24gd2lsbCBiZSBjb250cm9sbGVkIGJ5IHpvbmUsIHNvbWUgYXJlIG5vdFxuICAgICAgZGVsZWdhdGUgJiYgZGVsZWdhdGUuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgfSk7XG4gIH1cbn1cblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3XG4gKiBAc3VwcHJlc3Mge21pc3NpbmdSZXF1aXJlfVxuICovXG5mdW5jdGlvbiBwYXRjaFF1ZXVlTWljcm90YXNrKGdsb2JhbCwgYXBpKSB7XG4gIGFwaS5wYXRjaE1ldGhvZChnbG9iYWwsICdxdWV1ZU1pY3JvdGFzaycsIGRlbGVnYXRlID0+IHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHNlbGYsIGFyZ3MpIHtcbiAgICAgIFpvbmUuY3VycmVudC5zY2hlZHVsZU1pY3JvVGFzaygncXVldWVNaWNyb3Rhc2snLCBhcmdzWzBdKTtcbiAgICB9O1xuICB9KTtcbn1cblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3XG4gKiBAc3VwcHJlc3Mge21pc3NpbmdSZXF1aXJlfVxuICovXG5jb25zdCB0YXNrU3ltYm9sID0gem9uZVN5bWJvbCgnem9uZVRhc2snKTtcbmZ1bmN0aW9uIHBhdGNoVGltZXIod2luZG93LCBzZXROYW1lLCBjYW5jZWxOYW1lLCBuYW1lU3VmZml4KSB7XG4gIGxldCBzZXROYXRpdmUgPSBudWxsO1xuICBsZXQgY2xlYXJOYXRpdmUgPSBudWxsO1xuICBzZXROYW1lICs9IG5hbWVTdWZmaXg7XG4gIGNhbmNlbE5hbWUgKz0gbmFtZVN1ZmZpeDtcbiAgY29uc3QgdGFza3NCeUhhbmRsZUlkID0ge307XG4gIGZ1bmN0aW9uIHNjaGVkdWxlVGFzayh0YXNrKSB7XG4gICAgY29uc3QgZGF0YSA9IHRhc2suZGF0YTtcbiAgICBkYXRhLmFyZ3NbMF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGFzay5pbnZva2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZU9ySWQgPSBzZXROYXRpdmUuYXBwbHkod2luZG93LCBkYXRhLmFyZ3MpO1xuICAgIC8vIFdobGlzdCBvbiBOb2RlLmpzIHdoZW4gZ2V0IGNhbiB0aGUgSUQgYnkgdXNpbmcgYFtTeW1ib2wudG9QcmltaXRpdmVdKClgIHdlIGRvXG4gICAgLy8gdG8gdGhpcyBzbyB0aGF0IHdlIGRvIG5vdCBjYXVzZSBwb3RlbnRhbGx5IGxlYWtzIHdoZW4gdXNpbmcgYHNldFRpbWVvdXRgXG4gICAgLy8gc2luY2UgdGhpcyBjYW4gYmUgcGVyaW9kaWMgd2hlbiB1c2luZyBgLnJlZnJlc2hgLlxuICAgIGlmIChpc051bWJlcihoYW5kbGVPcklkKSkge1xuICAgICAgZGF0YS5oYW5kbGVJZCA9IGhhbmRsZU9ySWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEuaGFuZGxlID0gaGFuZGxlT3JJZDtcbiAgICAgIC8vIE9uIE5vZGUuanMgYSB0aW1lb3V0IGFuZCBpbnRlcnZhbCBjYW4gYmUgcmVzdGFydGVkIG92ZXIgYW5kIG92ZXIgYWdhaW4gYnkgdXNpbmcgdGhlIGAucmVmcmVzaGAgbWV0aG9kLlxuICAgICAgZGF0YS5pc1JlZnJlc2hhYmxlID0gaXNGdW5jdGlvbihoYW5kbGVPcklkLnJlZnJlc2gpO1xuICAgIH1cbiAgICByZXR1cm4gdGFzaztcbiAgfVxuICBmdW5jdGlvbiBjbGVhclRhc2sodGFzaykge1xuICAgIGNvbnN0IHtcbiAgICAgIGhhbmRsZSxcbiAgICAgIGhhbmRsZUlkXG4gICAgfSA9IHRhc2suZGF0YTtcbiAgICByZXR1cm4gY2xlYXJOYXRpdmUuY2FsbCh3aW5kb3csIGhhbmRsZSA/PyBoYW5kbGVJZCk7XG4gIH1cbiAgc2V0TmF0aXZlID0gcGF0Y2hNZXRob2Qod2luZG93LCBzZXROYW1lLCBkZWxlZ2F0ZSA9PiBmdW5jdGlvbiAoc2VsZiwgYXJncykge1xuICAgIGlmIChpc0Z1bmN0aW9uKGFyZ3NbMF0pKSB7XG4gICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBpc1JlZnJlc2hhYmxlOiBmYWxzZSxcbiAgICAgICAgaXNQZXJpb2RpYzogbmFtZVN1ZmZpeCA9PT0gJ0ludGVydmFsJyxcbiAgICAgICAgZGVsYXk6IG5hbWVTdWZmaXggPT09ICdUaW1lb3V0JyB8fCBuYW1lU3VmZml4ID09PSAnSW50ZXJ2YWwnID8gYXJnc1sxXSB8fCAwIDogdW5kZWZpbmVkLFxuICAgICAgICBhcmdzOiBhcmdzXG4gICAgICB9O1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBhcmdzWzBdO1xuICAgICAgYXJnc1swXSA9IGZ1bmN0aW9uIHRpbWVyKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIC8vIGlzc3VlLTkzNCwgdGFzayB3aWxsIGJlIGNhbmNlbGxlZFxuICAgICAgICAgIC8vIGV2ZW4gaXQgaXMgYSBwZXJpb2RpYyB0YXNrIHN1Y2ggYXNcbiAgICAgICAgICAvLyBzZXRJbnRlcnZhbFxuICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzQwMzg3XG4gICAgICAgICAgLy8gQ2xlYW51cCB0YXNrc0J5SGFuZGxlSWQgc2hvdWxkIGJlIGhhbmRsZWQgYmVmb3JlIHNjaGVkdWxlVGFza1xuICAgICAgICAgIC8vIFNpbmNlIHNvbWUgem9uZVNwZWMgbWF5IGludGVyY2VwdCBhbmQgZG9lc24ndCB0cmlnZ2VyXG4gICAgICAgICAgLy8gc2NoZWR1bGVGbihzY2hlZHVsZVRhc2spIHByb3ZpZGVkIGhlcmUuXG4gICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgaGFuZGxlLFxuICAgICAgICAgICAgaGFuZGxlSWQsXG4gICAgICAgICAgICBpc1BlcmlvZGljLFxuICAgICAgICAgICAgaXNSZWZyZXNoYWJsZVxuICAgICAgICAgIH0gPSBvcHRpb25zO1xuICAgICAgICAgIGlmICghaXNQZXJpb2RpYyAmJiAhaXNSZWZyZXNoYWJsZSkge1xuICAgICAgICAgICAgaWYgKGhhbmRsZUlkKSB7XG4gICAgICAgICAgICAgIC8vIGluIG5vbi1ub2RlanMgZW52LCB3ZSByZW1vdmUgdGltZXJJZFxuICAgICAgICAgICAgICAvLyBmcm9tIGxvY2FsIGNhY2hlXG4gICAgICAgICAgICAgIGRlbGV0ZSB0YXNrc0J5SGFuZGxlSWRbaGFuZGxlSWRdO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChoYW5kbGUpIHtcbiAgICAgICAgICAgICAgLy8gTm9kZSByZXR1cm5zIGNvbXBsZXggb2JqZWN0cyBhcyBoYW5kbGVJZHNcbiAgICAgICAgICAgICAgLy8gd2UgcmVtb3ZlIHRhc2sgcmVmZXJlbmNlIGZyb20gdGltZXIgb2JqZWN0XG4gICAgICAgICAgICAgIGhhbmRsZVt0YXNrU3ltYm9sXSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY29uc3QgdGFzayA9IHNjaGVkdWxlTWFjcm9UYXNrV2l0aEN1cnJlbnRab25lKHNldE5hbWUsIGFyZ3NbMF0sIG9wdGlvbnMsIHNjaGVkdWxlVGFzaywgY2xlYXJUYXNrKTtcbiAgICAgIGlmICghdGFzaykge1xuICAgICAgICByZXR1cm4gdGFzaztcbiAgICAgIH1cbiAgICAgIC8vIE5vZGUuanMgbXVzdCBhZGRpdGlvbmFsbHkgc3VwcG9ydCB0aGUgcmVmIGFuZCB1bnJlZiBmdW5jdGlvbnMuXG4gICAgICBjb25zdCB7XG4gICAgICAgIGhhbmRsZUlkLFxuICAgICAgICBoYW5kbGUsXG4gICAgICAgIGlzUmVmcmVzaGFibGUsXG4gICAgICAgIGlzUGVyaW9kaWNcbiAgICAgIH0gPSB0YXNrLmRhdGE7XG4gICAgICBpZiAoaGFuZGxlSWQpIHtcbiAgICAgICAgLy8gZm9yIG5vbiBub2RlanMgZW52LCB3ZSBzYXZlIGhhbmRsZUlkOiB0YXNrXG4gICAgICAgIC8vIG1hcHBpbmcgaW4gbG9jYWwgY2FjaGUgZm9yIGNsZWFyVGltZW91dFxuICAgICAgICB0YXNrc0J5SGFuZGxlSWRbaGFuZGxlSWRdID0gdGFzaztcbiAgICAgIH0gZWxzZSBpZiAoaGFuZGxlKSB7XG4gICAgICAgIC8vIGZvciBub2RlanMgZW52LCB3ZSBzYXZlIHRhc2tcbiAgICAgICAgLy8gcmVmZXJlbmNlIGluIHRpbWVySWQgT2JqZWN0IGZvciBjbGVhclRpbWVvdXRcbiAgICAgICAgaGFuZGxlW3Rhc2tTeW1ib2xdID0gdGFzaztcbiAgICAgICAgaWYgKGlzUmVmcmVzaGFibGUgJiYgIWlzUGVyaW9kaWMpIHtcbiAgICAgICAgICBjb25zdCBvcmlnaW5hbFJlZnJlc2ggPSBoYW5kbGUucmVmcmVzaDtcbiAgICAgICAgICBoYW5kbGUucmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgem9uZSxcbiAgICAgICAgICAgICAgc3RhdGVcbiAgICAgICAgICAgIH0gPSB0YXNrO1xuICAgICAgICAgICAgaWYgKHN0YXRlID09PSAnbm90U2NoZWR1bGVkJykge1xuICAgICAgICAgICAgICB0YXNrLl9zdGF0ZSA9ICdzY2hlZHVsZWQnO1xuICAgICAgICAgICAgICB6b25lLl91cGRhdGVUYXNrQ291bnQodGFzaywgMSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXRlID09PSAncnVubmluZycpIHtcbiAgICAgICAgICAgICAgdGFzay5fc3RhdGUgPSAnc2NoZWR1bGluZyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxSZWZyZXNoLmNhbGwodGhpcyk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGhhbmRsZSA/PyBoYW5kbGVJZCA/PyB0YXNrO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjYXVzZSBhbiBlcnJvciBieSBjYWxsaW5nIGl0IGRpcmVjdGx5LlxuICAgICAgcmV0dXJuIGRlbGVnYXRlLmFwcGx5KHdpbmRvdywgYXJncyk7XG4gICAgfVxuICB9KTtcbiAgY2xlYXJOYXRpdmUgPSBwYXRjaE1ldGhvZCh3aW5kb3csIGNhbmNlbE5hbWUsIGRlbGVnYXRlID0+IGZ1bmN0aW9uIChzZWxmLCBhcmdzKSB7XG4gICAgY29uc3QgaWQgPSBhcmdzWzBdO1xuICAgIGxldCB0YXNrO1xuICAgIGlmIChpc051bWJlcihpZCkpIHtcbiAgICAgIC8vIG5vbiBub2RlanMgZW52LlxuICAgICAgdGFzayA9IHRhc2tzQnlIYW5kbGVJZFtpZF07XG4gICAgICBkZWxldGUgdGFza3NCeUhhbmRsZUlkW2lkXTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gbm9kZWpzIGVudiA/PyBvdGhlciBlbnZpcm9ubWVudHMuXG4gICAgICB0YXNrID0gaWQ/Llt0YXNrU3ltYm9sXTtcbiAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgIGlkW3Rhc2tTeW1ib2xdID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhc2sgPSBpZDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRhc2s/LnR5cGUpIHtcbiAgICAgIGlmICh0YXNrLmNhbmNlbEZuKSB7XG4gICAgICAgIC8vIERvIG5vdCBjYW5jZWwgYWxyZWFkeSBjYW5jZWxlZCBmdW5jdGlvbnNcbiAgICAgICAgdGFzay56b25lLmNhbmNlbFRhc2sodGFzayk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNhdXNlIGFuIGVycm9yIGJ5IGNhbGxpbmcgaXQgZGlyZWN0bHkuXG4gICAgICBkZWxlZ2F0ZS5hcHBseSh3aW5kb3csIGFyZ3MpO1xuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiBwYXRjaEN1c3RvbUVsZW1lbnRzKF9nbG9iYWwsIGFwaSkge1xuICBjb25zdCB7XG4gICAgaXNCcm93c2VyLFxuICAgIGlzTWl4XG4gIH0gPSBhcGkuZ2V0R2xvYmFsT2JqZWN0cygpO1xuICBpZiAoIWlzQnJvd3NlciAmJiAhaXNNaXggfHwgIV9nbG9iYWxbJ2N1c3RvbUVsZW1lbnRzJ10gfHwgISgnY3VzdG9tRWxlbWVudHMnIGluIF9nbG9iYWwpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2N1c3RvbS1lbGVtZW50cy5odG1sI2NvbmNlcHQtY3VzdG9tLWVsZW1lbnQtZGVmaW5pdGlvbi1saWZlY3ljbGUtY2FsbGJhY2tzXG4gIGNvbnN0IGNhbGxiYWNrcyA9IFsnY29ubmVjdGVkQ2FsbGJhY2snLCAnZGlzY29ubmVjdGVkQ2FsbGJhY2snLCAnYWRvcHRlZENhbGxiYWNrJywgJ2F0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaycsICdmb3JtQXNzb2NpYXRlZENhbGxiYWNrJywgJ2Zvcm1EaXNhYmxlZENhbGxiYWNrJywgJ2Zvcm1SZXNldENhbGxiYWNrJywgJ2Zvcm1TdGF0ZVJlc3RvcmVDYWxsYmFjayddO1xuICBhcGkucGF0Y2hDYWxsYmFja3MoYXBpLCBfZ2xvYmFsLmN1c3RvbUVsZW1lbnRzLCAnY3VzdG9tRWxlbWVudHMnLCAnZGVmaW5lJywgY2FsbGJhY2tzKTtcbn1cbmZ1bmN0aW9uIGV2ZW50VGFyZ2V0UGF0Y2goX2dsb2JhbCwgYXBpKSB7XG4gIGlmIChab25lW2FwaS5zeW1ib2woJ3BhdGNoRXZlbnRUYXJnZXQnKV0pIHtcbiAgICAvLyBFdmVudFRhcmdldCBpcyBhbHJlYWR5IHBhdGNoZWQuXG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHtcbiAgICBldmVudE5hbWVzLFxuICAgIHpvbmVTeW1ib2xFdmVudE5hbWVzLFxuICAgIFRSVUVfU1RSLFxuICAgIEZBTFNFX1NUUixcbiAgICBaT05FX1NZTUJPTF9QUkVGSVhcbiAgfSA9IGFwaS5nZXRHbG9iYWxPYmplY3RzKCk7XG4gIC8vICBwcmVkZWZpbmUgYWxsIF9fem9uZV9zeW1ib2xfXyArIGV2ZW50TmFtZSArIHRydWUvZmFsc2Ugc3RyaW5nXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnROYW1lcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGV2ZW50TmFtZSA9IGV2ZW50TmFtZXNbaV07XG4gICAgY29uc3QgZmFsc2VFdmVudE5hbWUgPSBldmVudE5hbWUgKyBGQUxTRV9TVFI7XG4gICAgY29uc3QgdHJ1ZUV2ZW50TmFtZSA9IGV2ZW50TmFtZSArIFRSVUVfU1RSO1xuICAgIGNvbnN0IHN5bWJvbCA9IFpPTkVfU1lNQk9MX1BSRUZJWCArIGZhbHNlRXZlbnROYW1lO1xuICAgIGNvbnN0IHN5bWJvbENhcHR1cmUgPSBaT05FX1NZTUJPTF9QUkVGSVggKyB0cnVlRXZlbnROYW1lO1xuICAgIHpvbmVTeW1ib2xFdmVudE5hbWVzW2V2ZW50TmFtZV0gPSB7fTtcbiAgICB6b25lU3ltYm9sRXZlbnROYW1lc1tldmVudE5hbWVdW0ZBTFNFX1NUUl0gPSBzeW1ib2w7XG4gICAgem9uZVN5bWJvbEV2ZW50TmFtZXNbZXZlbnROYW1lXVtUUlVFX1NUUl0gPSBzeW1ib2xDYXB0dXJlO1xuICB9XG4gIGNvbnN0IEVWRU5UX1RBUkdFVCA9IF9nbG9iYWxbJ0V2ZW50VGFyZ2V0J107XG4gIGlmICghRVZFTlRfVEFSR0VUIHx8ICFFVkVOVF9UQVJHRVQucHJvdG90eXBlKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGFwaS5wYXRjaEV2ZW50VGFyZ2V0KF9nbG9iYWwsIGFwaSwgW0VWRU5UX1RBUkdFVCAmJiBFVkVOVF9UQVJHRVQucHJvdG90eXBlXSk7XG4gIHJldHVybiB0cnVlO1xufVxuZnVuY3Rpb24gcGF0Y2hFdmVudChnbG9iYWwsIGFwaSkge1xuICBhcGkucGF0Y2hFdmVudFByb3RvdHlwZShnbG9iYWwsIGFwaSk7XG59XG5cbi8qKlxuICogQGZpbGVvdmVydmlld1xuICogQHN1cHByZXNzIHtnbG9iYWxUaGlzfVxuICovXG5mdW5jdGlvbiBmaWx0ZXJQcm9wZXJ0aWVzKHRhcmdldCwgb25Qcm9wZXJ0aWVzLCBpZ25vcmVQcm9wZXJ0aWVzKSB7XG4gIGlmICghaWdub3JlUHJvcGVydGllcyB8fCBpZ25vcmVQcm9wZXJ0aWVzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBvblByb3BlcnRpZXM7XG4gIH1cbiAgY29uc3QgdGlwID0gaWdub3JlUHJvcGVydGllcy5maWx0ZXIoaXAgPT4gaXAudGFyZ2V0ID09PSB0YXJnZXQpO1xuICBpZiAodGlwLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBvblByb3BlcnRpZXM7XG4gIH1cbiAgY29uc3QgdGFyZ2V0SWdub3JlUHJvcGVydGllcyA9IHRpcFswXS5pZ25vcmVQcm9wZXJ0aWVzO1xuICByZXR1cm4gb25Qcm9wZXJ0aWVzLmZpbHRlcihvcCA9PiB0YXJnZXRJZ25vcmVQcm9wZXJ0aWVzLmluZGV4T2Yob3ApID09PSAtMSk7XG59XG5mdW5jdGlvbiBwYXRjaEZpbHRlcmVkUHJvcGVydGllcyh0YXJnZXQsIG9uUHJvcGVydGllcywgaWdub3JlUHJvcGVydGllcywgcHJvdG90eXBlKSB7XG4gIC8vIGNoZWNrIHdoZXRoZXIgdGFyZ2V0IGlzIGF2YWlsYWJsZSwgc29tZXRpbWVzIHRhcmdldCB3aWxsIGJlIHVuZGVmaW5lZFxuICAvLyBiZWNhdXNlIGRpZmZlcmVudCBicm93c2VyIG9yIHNvbWUgM3JkIHBhcnR5IHBsdWdpbi5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgZmlsdGVyZWRQcm9wZXJ0aWVzID0gZmlsdGVyUHJvcGVydGllcyh0YXJnZXQsIG9uUHJvcGVydGllcywgaWdub3JlUHJvcGVydGllcyk7XG4gIHBhdGNoT25Qcm9wZXJ0aWVzKHRhcmdldCwgZmlsdGVyZWRQcm9wZXJ0aWVzLCBwcm90b3R5cGUpO1xufVxuLyoqXG4gKiBHZXQgYWxsIGV2ZW50IG5hbWUgcHJvcGVydGllcyB3aGljaCB0aGUgZXZlbnQgbmFtZSBzdGFydHNXaXRoIGBvbmBcbiAqIGZyb20gdGhlIHRhcmdldCBvYmplY3QgaXRzZWxmLCBpbmhlcml0ZWQgcHJvcGVydGllcyBhcmUgbm90IGNvbnNpZGVyZWQuXG4gKi9cbmZ1bmN0aW9uIGdldE9uRXZlbnROYW1lcyh0YXJnZXQpIHtcbiAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldCkuZmlsdGVyKG5hbWUgPT4gbmFtZS5zdGFydHNXaXRoKCdvbicpICYmIG5hbWUubGVuZ3RoID4gMikubWFwKG5hbWUgPT4gbmFtZS5zdWJzdHJpbmcoMikpO1xufVxuZnVuY3Rpb24gcHJvcGVydHlEZXNjcmlwdG9yUGF0Y2goYXBpLCBfZ2xvYmFsKSB7XG4gIGlmIChpc05vZGUgJiYgIWlzTWl4KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChab25lW2FwaS5zeW1ib2woJ3BhdGNoRXZlbnRzJyldKSB7XG4gICAgLy8gZXZlbnRzIGFyZSBhbHJlYWR5IGJlZW4gcGF0Y2hlZCBieSBsZWdhY3kgcGF0Y2guXG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGlnbm9yZVByb3BlcnRpZXMgPSBfZ2xvYmFsWydfX1pvbmVfaWdub3JlX29uX3Byb3BlcnRpZXMnXTtcbiAgLy8gZm9yIGJyb3dzZXJzIHRoYXQgd2UgY2FuIHBhdGNoIHRoZSBkZXNjcmlwdG9yOiAgQ2hyb21lICYgRmlyZWZveFxuICBsZXQgcGF0Y2hUYXJnZXRzID0gW107XG4gIGlmIChpc0Jyb3dzZXIpIHtcbiAgICBjb25zdCBpbnRlcm5hbFdpbmRvdyA9IHdpbmRvdztcbiAgICBwYXRjaFRhcmdldHMgPSBwYXRjaFRhcmdldHMuY29uY2F0KFsnRG9jdW1lbnQnLCAnU1ZHRWxlbWVudCcsICdFbGVtZW50JywgJ0hUTUxFbGVtZW50JywgJ0hUTUxCb2R5RWxlbWVudCcsICdIVE1MTWVkaWFFbGVtZW50JywgJ0hUTUxGcmFtZVNldEVsZW1lbnQnLCAnSFRNTEZyYW1lRWxlbWVudCcsICdIVE1MSUZyYW1lRWxlbWVudCcsICdIVE1MTWFycXVlZUVsZW1lbnQnLCAnV29ya2VyJ10pO1xuICAgIGNvbnN0IGlnbm9yZUVycm9yUHJvcGVydGllcyA9IFtdO1xuICAgIC8vIEluIG9sZGVyIGJyb3dzZXJzIGxpa2UgSUUgb3IgRWRnZSwgZXZlbnQgaGFuZGxlciBwcm9wZXJ0aWVzIChlLmcuLCBgb25jbGlja2ApXG4gICAgLy8gbWF5IG5vdCBiZSBkZWZpbmVkIGRpcmVjdGx5IG9uIHRoZSBgd2luZG93YCBvYmplY3QgYnV0IG9uIGl0cyBwcm90b3R5cGUgKGBXaW5kb3dQcm90b3R5cGVgKS5cbiAgICAvLyBUbyBlbnN1cmUgY29tcGxldGUgY292ZXJhZ2UsIHdlIHVzZSB0aGUgcHJvdG90eXBlIHdoZW4gY2hlY2tpbmdcbiAgICAvLyBmb3IgYW5kIHBhdGNoaW5nIHRoZXNlIHByb3BlcnRpZXMuXG4gICAgcGF0Y2hGaWx0ZXJlZFByb3BlcnRpZXMoaW50ZXJuYWxXaW5kb3csIGdldE9uRXZlbnROYW1lcyhpbnRlcm5hbFdpbmRvdyksIGlnbm9yZVByb3BlcnRpZXMgPyBpZ25vcmVQcm9wZXJ0aWVzLmNvbmNhdChpZ25vcmVFcnJvclByb3BlcnRpZXMpIDogaWdub3JlUHJvcGVydGllcywgT2JqZWN0R2V0UHJvdG90eXBlT2YoaW50ZXJuYWxXaW5kb3cpKTtcbiAgfVxuICBwYXRjaFRhcmdldHMgPSBwYXRjaFRhcmdldHMuY29uY2F0KFsnWE1MSHR0cFJlcXVlc3QnLCAnWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCcsICdJREJJbmRleCcsICdJREJSZXF1ZXN0JywgJ0lEQk9wZW5EQlJlcXVlc3QnLCAnSURCRGF0YWJhc2UnLCAnSURCVHJhbnNhY3Rpb24nLCAnSURCQ3Vyc29yJywgJ1dlYlNvY2tldCddKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRjaFRhcmdldHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB0YXJnZXQgPSBfZ2xvYmFsW3BhdGNoVGFyZ2V0c1tpXV07XG4gICAgdGFyZ2V0Py5wcm90b3R5cGUgJiYgcGF0Y2hGaWx0ZXJlZFByb3BlcnRpZXModGFyZ2V0LnByb3RvdHlwZSwgZ2V0T25FdmVudE5hbWVzKHRhcmdldC5wcm90b3R5cGUpLCBpZ25vcmVQcm9wZXJ0aWVzKTtcbiAgfVxufVxuXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXdcbiAqIEBzdXBwcmVzcyB7bWlzc2luZ1JlcXVpcmV9XG4gKi9cbmZ1bmN0aW9uIHBhdGNoQnJvd3Nlcihab25lKSB7XG4gIFpvbmUuX19sb2FkX3BhdGNoKCdsZWdhY3knLCBnbG9iYWwgPT4ge1xuICAgIGNvbnN0IGxlZ2FjeVBhdGNoID0gZ2xvYmFsW1pvbmUuX19zeW1ib2xfXygnbGVnYWN5UGF0Y2gnKV07XG4gICAgaWYgKGxlZ2FjeVBhdGNoKSB7XG4gICAgICBsZWdhY3lQYXRjaCgpO1xuICAgIH1cbiAgfSk7XG4gIFpvbmUuX19sb2FkX3BhdGNoKCd0aW1lcnMnLCBnbG9iYWwgPT4ge1xuICAgIGNvbnN0IHNldCA9ICdzZXQnO1xuICAgIGNvbnN0IGNsZWFyID0gJ2NsZWFyJztcbiAgICBwYXRjaFRpbWVyKGdsb2JhbCwgc2V0LCBjbGVhciwgJ1RpbWVvdXQnKTtcbiAgICBwYXRjaFRpbWVyKGdsb2JhbCwgc2V0LCBjbGVhciwgJ0ludGVydmFsJyk7XG4gICAgcGF0Y2hUaW1lcihnbG9iYWwsIHNldCwgY2xlYXIsICdJbW1lZGlhdGUnKTtcbiAgfSk7XG4gIFpvbmUuX19sb2FkX3BhdGNoKCdyZXF1ZXN0QW5pbWF0aW9uRnJhbWUnLCBnbG9iYWwgPT4ge1xuICAgIHBhdGNoVGltZXIoZ2xvYmFsLCAncmVxdWVzdCcsICdjYW5jZWwnLCAnQW5pbWF0aW9uRnJhbWUnKTtcbiAgICBwYXRjaFRpbWVyKGdsb2JhbCwgJ21velJlcXVlc3QnLCAnbW96Q2FuY2VsJywgJ0FuaW1hdGlvbkZyYW1lJyk7XG4gICAgcGF0Y2hUaW1lcihnbG9iYWwsICd3ZWJraXRSZXF1ZXN0JywgJ3dlYmtpdENhbmNlbCcsICdBbmltYXRpb25GcmFtZScpO1xuICB9KTtcbiAgWm9uZS5fX2xvYWRfcGF0Y2goJ2Jsb2NraW5nJywgKGdsb2JhbCwgWm9uZSkgPT4ge1xuICAgIGNvbnN0IGJsb2NraW5nTWV0aG9kcyA9IFsnYWxlcnQnLCAncHJvbXB0JywgJ2NvbmZpcm0nXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJsb2NraW5nTWV0aG9kcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgbmFtZSA9IGJsb2NraW5nTWV0aG9kc1tpXTtcbiAgICAgIHBhdGNoTWV0aG9kKGdsb2JhbCwgbmFtZSwgKGRlbGVnYXRlLCBzeW1ib2wsIG5hbWUpID0+IHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChzLCBhcmdzKSB7XG4gICAgICAgICAgcmV0dXJuIFpvbmUuY3VycmVudC5ydW4oZGVsZWdhdGUsIGdsb2JhbCwgYXJncywgbmFtZSk7XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICBab25lLl9fbG9hZF9wYXRjaCgnRXZlbnRUYXJnZXQnLCAoZ2xvYmFsLCBab25lLCBhcGkpID0+IHtcbiAgICBwYXRjaEV2ZW50KGdsb2JhbCwgYXBpKTtcbiAgICBldmVudFRhcmdldFBhdGNoKGdsb2JhbCwgYXBpKTtcbiAgICAvLyBwYXRjaCBYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0J3MgYWRkRXZlbnRMaXN0ZW5lci9yZW1vdmVFdmVudExpc3RlbmVyXG4gICAgY29uc3QgWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCA9IGdsb2JhbFsnWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCddO1xuICAgIGlmIChYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0ICYmIFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQucHJvdG90eXBlKSB7XG4gICAgICBhcGkucGF0Y2hFdmVudFRhcmdldChnbG9iYWwsIGFwaSwgW1hNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQucHJvdG90eXBlXSk7XG4gICAgfVxuICB9KTtcbiAgWm9uZS5fX2xvYWRfcGF0Y2goJ011dGF0aW9uT2JzZXJ2ZXInLCAoZ2xvYmFsLCBab25lLCBhcGkpID0+IHtcbiAgICBwYXRjaENsYXNzKCdNdXRhdGlvbk9ic2VydmVyJyk7XG4gICAgcGF0Y2hDbGFzcygnV2ViS2l0TXV0YXRpb25PYnNlcnZlcicpO1xuICB9KTtcbiAgWm9uZS5fX2xvYWRfcGF0Y2goJ0ludGVyc2VjdGlvbk9ic2VydmVyJywgKGdsb2JhbCwgWm9uZSwgYXBpKSA9PiB7XG4gICAgcGF0Y2hDbGFzcygnSW50ZXJzZWN0aW9uT2JzZXJ2ZXInKTtcbiAgfSk7XG4gIFpvbmUuX19sb2FkX3BhdGNoKCdGaWxlUmVhZGVyJywgKGdsb2JhbCwgWm9uZSwgYXBpKSA9PiB7XG4gICAgcGF0Y2hDbGFzcygnRmlsZVJlYWRlcicpO1xuICB9KTtcbiAgWm9uZS5fX2xvYWRfcGF0Y2goJ29uX3Byb3BlcnR5JywgKGdsb2JhbCwgWm9uZSwgYXBpKSA9PiB7XG4gICAgcHJvcGVydHlEZXNjcmlwdG9yUGF0Y2goYXBpLCBnbG9iYWwpO1xuICB9KTtcbiAgWm9uZS5fX2xvYWRfcGF0Y2goJ2N1c3RvbUVsZW1lbnRzJywgKGdsb2JhbCwgWm9uZSwgYXBpKSA9PiB7XG4gICAgcGF0Y2hDdXN0b21FbGVtZW50cyhnbG9iYWwsIGFwaSk7XG4gIH0pO1xuICBab25lLl9fbG9hZF9wYXRjaCgnWEhSJywgKGdsb2JhbCwgWm9uZSkgPT4ge1xuICAgIC8vIFRyZWF0IFhNTEh0dHBSZXF1ZXN0IGFzIGEgbWFjcm90YXNrLlxuICAgIHBhdGNoWEhSKGdsb2JhbCk7XG4gICAgY29uc3QgWEhSX1RBU0sgPSB6b25lU3ltYm9sKCd4aHJUYXNrJyk7XG4gICAgY29uc3QgWEhSX1NZTkMgPSB6b25lU3ltYm9sKCd4aHJTeW5jJyk7XG4gICAgY29uc3QgWEhSX0xJU1RFTkVSID0gem9uZVN5bWJvbCgneGhyTGlzdGVuZXInKTtcbiAgICBjb25zdCBYSFJfU0NIRURVTEVEID0gem9uZVN5bWJvbCgneGhyU2NoZWR1bGVkJyk7XG4gICAgY29uc3QgWEhSX1VSTCA9IHpvbmVTeW1ib2woJ3hoclVSTCcpO1xuICAgIGNvbnN0IFhIUl9FUlJPUl9CRUZPUkVfU0NIRURVTEVEID0gem9uZVN5bWJvbCgneGhyRXJyb3JCZWZvcmVTY2hlZHVsZWQnKTtcbiAgICBmdW5jdGlvbiBwYXRjaFhIUih3aW5kb3cpIHtcbiAgICAgIGNvbnN0IFhNTEh0dHBSZXF1ZXN0ID0gd2luZG93WydYTUxIdHRwUmVxdWVzdCddO1xuICAgICAgaWYgKCFYTUxIdHRwUmVxdWVzdCkge1xuICAgICAgICAvLyBYTUxIdHRwUmVxdWVzdCBpcyBub3QgYXZhaWxhYmxlIGluIHNlcnZpY2Ugd29ya2VyXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IFhNTEh0dHBSZXF1ZXN0UHJvdG90eXBlID0gWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlO1xuICAgICAgZnVuY3Rpb24gZmluZFBlbmRpbmdUYXNrKHRhcmdldCkge1xuICAgICAgICByZXR1cm4gdGFyZ2V0W1hIUl9UQVNLXTtcbiAgICAgIH1cbiAgICAgIGxldCBvcmlBZGRMaXN0ZW5lciA9IFhNTEh0dHBSZXF1ZXN0UHJvdG90eXBlW1pPTkVfU1lNQk9MX0FERF9FVkVOVF9MSVNURU5FUl07XG4gICAgICBsZXQgb3JpUmVtb3ZlTGlzdGVuZXIgPSBYTUxIdHRwUmVxdWVzdFByb3RvdHlwZVtaT05FX1NZTUJPTF9SRU1PVkVfRVZFTlRfTElTVEVORVJdO1xuICAgICAgaWYgKCFvcmlBZGRMaXN0ZW5lcikge1xuICAgICAgICBjb25zdCBYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0ID0gd2luZG93WydYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0J107XG4gICAgICAgIGlmIChYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0KSB7XG4gICAgICAgICAgY29uc3QgWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldFByb3RvdHlwZSA9IFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQucHJvdG90eXBlO1xuICAgICAgICAgIG9yaUFkZExpc3RlbmVyID0gWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldFByb3RvdHlwZVtaT05FX1NZTUJPTF9BRERfRVZFTlRfTElTVEVORVJdO1xuICAgICAgICAgIG9yaVJlbW92ZUxpc3RlbmVyID0gWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldFByb3RvdHlwZVtaT05FX1NZTUJPTF9SRU1PVkVfRVZFTlRfTElTVEVORVJdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCBSRUFEWV9TVEFURV9DSEFOR0UgPSAncmVhZHlzdGF0ZWNoYW5nZSc7XG4gICAgICBjb25zdCBTQ0hFRFVMRUQgPSAnc2NoZWR1bGVkJztcbiAgICAgIGZ1bmN0aW9uIHNjaGVkdWxlVGFzayh0YXNrKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0YXNrLmRhdGE7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGRhdGEudGFyZ2V0O1xuICAgICAgICB0YXJnZXRbWEhSX1NDSEVEVUxFRF0gPSBmYWxzZTtcbiAgICAgICAgdGFyZ2V0W1hIUl9FUlJPUl9CRUZPUkVfU0NIRURVTEVEXSA9IGZhbHNlO1xuICAgICAgICAvLyByZW1vdmUgZXhpc3RpbmcgZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSB0YXJnZXRbWEhSX0xJU1RFTkVSXTtcbiAgICAgICAgaWYgKCFvcmlBZGRMaXN0ZW5lcikge1xuICAgICAgICAgIG9yaUFkZExpc3RlbmVyID0gdGFyZ2V0W1pPTkVfU1lNQk9MX0FERF9FVkVOVF9MSVNURU5FUl07XG4gICAgICAgICAgb3JpUmVtb3ZlTGlzdGVuZXIgPSB0YXJnZXRbWk9ORV9TWU1CT0xfUkVNT1ZFX0VWRU5UX0xJU1RFTkVSXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGlzdGVuZXIpIHtcbiAgICAgICAgICBvcmlSZW1vdmVMaXN0ZW5lci5jYWxsKHRhcmdldCwgUkVBRFlfU1RBVEVfQ0hBTkdFLCBsaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3TGlzdGVuZXIgPSB0YXJnZXRbWEhSX0xJU1RFTkVSXSA9ICgpID0+IHtcbiAgICAgICAgICBpZiAodGFyZ2V0LnJlYWR5U3RhdGUgPT09IHRhcmdldC5ET05FKSB7XG4gICAgICAgICAgICAvLyBzb21ldGltZXMgb24gc29tZSBicm93c2VycyBYTUxIdHRwUmVxdWVzdCB3aWxsIGZpcmUgb25yZWFkeXN0YXRlY2hhbmdlIHdpdGhcbiAgICAgICAgICAgIC8vIHJlYWR5U3RhdGU9NCBtdWx0aXBsZSB0aW1lcywgc28gd2UgbmVlZCB0byBjaGVjayB0YXNrIHN0YXRlIGhlcmVcbiAgICAgICAgICAgIGlmICghZGF0YS5hYm9ydGVkICYmIHRhcmdldFtYSFJfU0NIRURVTEVEXSAmJiB0YXNrLnN0YXRlID09PSBTQ0hFRFVMRUQpIHtcbiAgICAgICAgICAgICAgLy8gY2hlY2sgd2hldGhlciB0aGUgeGhyIGhhcyByZWdpc3RlcmVkIG9ubG9hZCBsaXN0ZW5lclxuICAgICAgICAgICAgICAvLyBpZiB0aGF0IGlzIHRoZSBjYXNlLCB0aGUgdGFzayBzaG91bGQgaW52b2tlIGFmdGVyIGFsbFxuICAgICAgICAgICAgICAvLyBvbmxvYWQgbGlzdGVuZXJzIGZpbmlzaC5cbiAgICAgICAgICAgICAgLy8gQWxzbyBpZiB0aGUgcmVxdWVzdCBmYWlsZWQgd2l0aG91dCByZXNwb25zZSAoc3RhdHVzID0gMCksIHRoZSBsb2FkIGV2ZW50IGhhbmRsZXJcbiAgICAgICAgICAgICAgLy8gd2lsbCBub3QgYmUgdHJpZ2dlcmVkLCBpbiB0aGF0IGNhc2UsIHdlIHNob3VsZCBhbHNvIGludm9rZSB0aGUgcGxhY2Vob2xkZXIgY2FsbGJhY2tcbiAgICAgICAgICAgICAgLy8gdG8gY2xvc2UgdGhlIFhNTEh0dHBSZXF1ZXN0OjpzZW5kIG1hY3JvVGFzay5cbiAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMzg3OTVcbiAgICAgICAgICAgICAgY29uc3QgbG9hZFRhc2tzID0gdGFyZ2V0W1pvbmUuX19zeW1ib2xfXygnbG9hZGZhbHNlJyldO1xuICAgICAgICAgICAgICBpZiAodGFyZ2V0LnN0YXR1cyAhPT0gMCAmJiBsb2FkVGFza3MgJiYgbG9hZFRhc2tzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvcmlJbnZva2UgPSB0YXNrLmludm9rZTtcbiAgICAgICAgICAgICAgICB0YXNrLmludm9rZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIC8vIG5lZWQgdG8gbG9hZCB0aGUgdGFza3MgYWdhaW4sIGJlY2F1c2UgaW4gb3RoZXJcbiAgICAgICAgICAgICAgICAgIC8vIGxvYWQgbGlzdGVuZXIsIHRoZXkgbWF5IHJlbW92ZSB0aGVtc2VsdmVzXG4gICAgICAgICAgICAgICAgICBjb25zdCBsb2FkVGFza3MgPSB0YXJnZXRbWm9uZS5fX3N5bWJvbF9fKCdsb2FkZmFsc2UnKV07XG4gICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvYWRUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAobG9hZFRhc2tzW2ldID09PSB0YXNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgbG9hZFRhc2tzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhLmFib3J0ZWQgJiYgdGFzay5zdGF0ZSA9PT0gU0NIRURVTEVEKSB7XG4gICAgICAgICAgICAgICAgICAgIG9yaUludm9rZS5jYWxsKHRhc2spO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgbG9hZFRhc2tzLnB1c2godGFzayk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFzay5pbnZva2UoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICghZGF0YS5hYm9ydGVkICYmIHRhcmdldFtYSFJfU0NIRURVTEVEXSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgLy8gZXJyb3Igb2NjdXJzIHdoZW4geGhyLnNlbmQoKVxuICAgICAgICAgICAgICB0YXJnZXRbWEhSX0VSUk9SX0JFRk9SRV9TQ0hFRFVMRURdID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIG9yaUFkZExpc3RlbmVyLmNhbGwodGFyZ2V0LCBSRUFEWV9TVEFURV9DSEFOR0UsIG5ld0xpc3RlbmVyKTtcbiAgICAgICAgY29uc3Qgc3RvcmVkVGFzayA9IHRhcmdldFtYSFJfVEFTS107XG4gICAgICAgIGlmICghc3RvcmVkVGFzaykge1xuICAgICAgICAgIHRhcmdldFtYSFJfVEFTS10gPSB0YXNrO1xuICAgICAgICB9XG4gICAgICAgIHNlbmROYXRpdmUuYXBwbHkodGFyZ2V0LCBkYXRhLmFyZ3MpO1xuICAgICAgICB0YXJnZXRbWEhSX1NDSEVEVUxFRF0gPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGFzaztcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIHBsYWNlaG9sZGVyQ2FsbGJhY2soKSB7fVxuICAgICAgZnVuY3Rpb24gY2xlYXJUYXNrKHRhc2spIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRhc2suZGF0YTtcbiAgICAgICAgLy8gTm90ZSAtIGlkZWFsbHksIHdlIHdvdWxkIGNhbGwgZGF0YS50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lciBoZXJlLCBidXQgaXQncyB0b28gbGF0ZVxuICAgICAgICAvLyB0byBwcmV2ZW50IGl0IGZyb20gZmlyaW5nLiBTbyBpbnN0ZWFkLCB3ZSBzdG9yZSBpbmZvIGZvciB0aGUgZXZlbnQgbGlzdGVuZXIuXG4gICAgICAgIGRhdGEuYWJvcnRlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBhYm9ydE5hdGl2ZS5hcHBseShkYXRhLnRhcmdldCwgZGF0YS5hcmdzKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG9wZW5OYXRpdmUgPSBwYXRjaE1ldGhvZChYTUxIdHRwUmVxdWVzdFByb3RvdHlwZSwgJ29wZW4nLCAoKSA9PiBmdW5jdGlvbiAoc2VsZiwgYXJncykge1xuICAgICAgICBzZWxmW1hIUl9TWU5DXSA9IGFyZ3NbMl0gPT0gZmFsc2U7XG4gICAgICAgIHNlbGZbWEhSX1VSTF0gPSBhcmdzWzFdO1xuICAgICAgICByZXR1cm4gb3Blbk5hdGl2ZS5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgIH0pO1xuICAgICAgY29uc3QgWE1MSFRUUFJFUVVFU1RfU09VUkNFID0gJ1hNTEh0dHBSZXF1ZXN0LnNlbmQnO1xuICAgICAgY29uc3QgZmV0Y2hUYXNrQWJvcnRpbmcgPSB6b25lU3ltYm9sKCdmZXRjaFRhc2tBYm9ydGluZycpO1xuICAgICAgY29uc3QgZmV0Y2hUYXNrU2NoZWR1bGluZyA9IHpvbmVTeW1ib2woJ2ZldGNoVGFza1NjaGVkdWxpbmcnKTtcbiAgICAgIGNvbnN0IHNlbmROYXRpdmUgPSBwYXRjaE1ldGhvZChYTUxIdHRwUmVxdWVzdFByb3RvdHlwZSwgJ3NlbmQnLCAoKSA9PiBmdW5jdGlvbiAoc2VsZiwgYXJncykge1xuICAgICAgICBpZiAoWm9uZS5jdXJyZW50W2ZldGNoVGFza1NjaGVkdWxpbmddID09PSB0cnVlKSB7XG4gICAgICAgICAgLy8gYSBmZXRjaCBpcyBzY2hlZHVsaW5nLCBzbyB3ZSBhcmUgdXNpbmcgeGhyIHRvIHBvbHlmaWxsIGZldGNoXG4gICAgICAgICAgLy8gYW5kIGJlY2F1c2Ugd2UgYWxyZWFkeSBzY2hlZHVsZSBtYWNyb1Rhc2sgZm9yIGZldGNoLCB3ZSBzaG91bGRcbiAgICAgICAgICAvLyBub3Qgc2NoZWR1bGUgYSBtYWNyb1Rhc2sgZm9yIHhociBhZ2FpblxuICAgICAgICAgIHJldHVybiBzZW5kTmF0aXZlLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxmW1hIUl9TWU5DXSkge1xuICAgICAgICAgIC8vIGlmIHRoZSBYSFIgaXMgc3luYyB0aGVyZSBpcyBubyB0YXNrIHRvIHNjaGVkdWxlLCBqdXN0IGV4ZWN1dGUgdGhlIGNvZGUuXG4gICAgICAgICAgcmV0dXJuIHNlbmROYXRpdmUuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRhcmdldDogc2VsZixcbiAgICAgICAgICAgIHVybDogc2VsZltYSFJfVVJMXSxcbiAgICAgICAgICAgIGlzUGVyaW9kaWM6IGZhbHNlLFxuICAgICAgICAgICAgYXJnczogYXJncyxcbiAgICAgICAgICAgIGFib3J0ZWQ6IGZhbHNlXG4gICAgICAgICAgfTtcbiAgICAgICAgICBjb25zdCB0YXNrID0gc2NoZWR1bGVNYWNyb1Rhc2tXaXRoQ3VycmVudFpvbmUoWE1MSFRUUFJFUVVFU1RfU09VUkNFLCBwbGFjZWhvbGRlckNhbGxiYWNrLCBvcHRpb25zLCBzY2hlZHVsZVRhc2ssIGNsZWFyVGFzayk7XG4gICAgICAgICAgaWYgKHNlbGYgJiYgc2VsZltYSFJfRVJST1JfQkVGT1JFX1NDSEVEVUxFRF0gPT09IHRydWUgJiYgIW9wdGlvbnMuYWJvcnRlZCAmJiB0YXNrLnN0YXRlID09PSBTQ0hFRFVMRUQpIHtcbiAgICAgICAgICAgIC8vIHhociByZXF1ZXN0IHRocm93IGVycm9yIHdoZW4gc2VuZFxuICAgICAgICAgICAgLy8gd2Ugc2hvdWxkIGludm9rZSB0YXNrIGluc3RlYWQgb2YgbGVhdmluZyBhIHNjaGVkdWxlZFxuICAgICAgICAgICAgLy8gcGVuZGluZyBtYWNyb1Rhc2tcbiAgICAgICAgICAgIHRhc2suaW52b2tlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGFib3J0TmF0aXZlID0gcGF0Y2hNZXRob2QoWE1MSHR0cFJlcXVlc3RQcm90b3R5cGUsICdhYm9ydCcsICgpID0+IGZ1bmN0aW9uIChzZWxmLCBhcmdzKSB7XG4gICAgICAgIGNvbnN0IHRhc2sgPSBmaW5kUGVuZGluZ1Rhc2soc2VsZik7XG4gICAgICAgIGlmICh0YXNrICYmIHR5cGVvZiB0YXNrLnR5cGUgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgWEhSIGhhcyBhbHJlYWR5IGNvbXBsZXRlZCwgZG8gbm90aGluZy5cbiAgICAgICAgICAvLyBJZiB0aGUgWEhSIGhhcyBhbHJlYWR5IGJlZW4gYWJvcnRlZCwgZG8gbm90aGluZy5cbiAgICAgICAgICAvLyBGaXggIzU2OSwgY2FsbCBhYm9ydCBtdWx0aXBsZSB0aW1lcyBiZWZvcmUgZG9uZSB3aWxsIGNhdXNlXG4gICAgICAgICAgLy8gbWFjcm9UYXNrIHRhc2sgY291bnQgYmUgbmVnYXRpdmUgbnVtYmVyXG4gICAgICAgICAgaWYgKHRhc2suY2FuY2VsRm4gPT0gbnVsbCB8fCB0YXNrLmRhdGEgJiYgdGFzay5kYXRhLmFib3J0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGFzay56b25lLmNhbmNlbFRhc2sodGFzayk7XG4gICAgICAgIH0gZWxzZSBpZiAoWm9uZS5jdXJyZW50W2ZldGNoVGFza0Fib3J0aW5nXSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIC8vIHRoZSBhYm9ydCBpcyBjYWxsZWQgZnJvbSBmZXRjaCBwb2x5ZmlsbCwgd2UgbmVlZCB0byBjYWxsIG5hdGl2ZSBhYm9ydCBvZiBYSFIuXG4gICAgICAgICAgcmV0dXJuIGFib3J0TmF0aXZlLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIC8vIE90aGVyd2lzZSwgd2UgYXJlIHRyeWluZyB0byBhYm9ydCBhbiBYSFIgd2hpY2ggaGFzIG5vdCB5ZXQgYmVlbiBzZW50LCBzbyB0aGVyZSBpcyBub1xuICAgICAgICAvLyB0YXNrXG4gICAgICAgIC8vIHRvIGNhbmNlbC4gRG8gbm90aGluZy5cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIFpvbmUuX19sb2FkX3BhdGNoKCdnZW9sb2NhdGlvbicsIGdsb2JhbCA9PiB7XG4gICAgLy8vIEdFT19MT0NBVElPTlxuICAgIGlmIChnbG9iYWxbJ25hdmlnYXRvciddICYmIGdsb2JhbFsnbmF2aWdhdG9yJ10uZ2VvbG9jYXRpb24pIHtcbiAgICAgIHBhdGNoUHJvdG90eXBlKGdsb2JhbFsnbmF2aWdhdG9yJ10uZ2VvbG9jYXRpb24sIFsnZ2V0Q3VycmVudFBvc2l0aW9uJywgJ3dhdGNoUG9zaXRpb24nXSk7XG4gICAgfVxuICB9KTtcbiAgWm9uZS5fX2xvYWRfcGF0Y2goJ1Byb21pc2VSZWplY3Rpb25FdmVudCcsIChnbG9iYWwsIFpvbmUpID0+IHtcbiAgICAvLyBoYW5kbGUgdW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uXG4gICAgZnVuY3Rpb24gZmluZFByb21pc2VSZWplY3Rpb25IYW5kbGVyKGV2dE5hbWUpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zdCBldmVudFRhc2tzID0gZmluZEV2ZW50VGFza3MoZ2xvYmFsLCBldnROYW1lKTtcbiAgICAgICAgZXZlbnRUYXNrcy5mb3JFYWNoKGV2ZW50VGFzayA9PiB7XG4gICAgICAgICAgLy8gd2luZG93cyBoYXMgYWRkZWQgdW5oYW5kbGVkcmVqZWN0aW9uIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgICAgLy8gdHJpZ2dlciB0aGUgZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgICBjb25zdCBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPSBnbG9iYWxbJ1Byb21pc2VSZWplY3Rpb25FdmVudCddO1xuICAgICAgICAgIGlmIChQcm9taXNlUmVqZWN0aW9uRXZlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGV2dCA9IG5ldyBQcm9taXNlUmVqZWN0aW9uRXZlbnQoZXZ0TmFtZSwge1xuICAgICAgICAgICAgICBwcm9taXNlOiBlLnByb21pc2UsXG4gICAgICAgICAgICAgIHJlYXNvbjogZS5yZWplY3Rpb25cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZXZlbnRUYXNrLmludm9rZShldnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoZ2xvYmFsWydQcm9taXNlUmVqZWN0aW9uRXZlbnQnXSkge1xuICAgICAgWm9uZVt6b25lU3ltYm9sKCd1bmhhbmRsZWRQcm9taXNlUmVqZWN0aW9uSGFuZGxlcicpXSA9IGZpbmRQcm9taXNlUmVqZWN0aW9uSGFuZGxlcigndW5oYW5kbGVkcmVqZWN0aW9uJyk7XG4gICAgICBab25lW3pvbmVTeW1ib2woJ3JlamVjdGlvbkhhbmRsZWRIYW5kbGVyJyldID0gZmluZFByb21pc2VSZWplY3Rpb25IYW5kbGVyKCdyZWplY3Rpb25oYW5kbGVkJyk7XG4gICAgfVxuICB9KTtcbiAgWm9uZS5fX2xvYWRfcGF0Y2goJ3F1ZXVlTWljcm90YXNrJywgKGdsb2JhbCwgWm9uZSwgYXBpKSA9PiB7XG4gICAgcGF0Y2hRdWV1ZU1pY3JvdGFzayhnbG9iYWwsIGFwaSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gcGF0Y2hQcm9taXNlKFpvbmUpIHtcbiAgWm9uZS5fX2xvYWRfcGF0Y2goJ1pvbmVBd2FyZVByb21pc2UnLCAoZ2xvYmFsLCBab25lLCBhcGkpID0+IHtcbiAgICBjb25zdCBPYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAgIGNvbnN0IE9iamVjdERlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuICAgIGZ1bmN0aW9uIHJlYWRhYmxlT2JqZWN0VG9TdHJpbmcob2JqKSB7XG4gICAgICBpZiAob2JqICYmIG9iai50b1N0cmluZyA9PT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZykge1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBvYmouY29uc3RydWN0b3IgJiYgb2JqLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgIHJldHVybiAoY2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJycpICsgJzogJyArIEpTT04uc3RyaW5naWZ5KG9iaik7XG4gICAgICB9XG4gICAgICByZXR1cm4gb2JqID8gb2JqLnRvU3RyaW5nKCkgOiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKTtcbiAgICB9XG4gICAgY29uc3QgX19zeW1ib2xfXyA9IGFwaS5zeW1ib2w7XG4gICAgY29uc3QgX3VuY2F1Z2h0UHJvbWlzZUVycm9ycyA9IFtdO1xuICAgIGNvbnN0IGlzRGlzYWJsZVdyYXBwaW5nVW5jYXVnaHRQcm9taXNlUmVqZWN0aW9uID0gZ2xvYmFsW19fc3ltYm9sX18oJ0RJU0FCTEVfV1JBUFBJTkdfVU5DQVVHSFRfUFJPTUlTRV9SRUpFQ1RJT04nKV0gIT09IGZhbHNlO1xuICAgIGNvbnN0IHN5bWJvbFByb21pc2UgPSBfX3N5bWJvbF9fKCdQcm9taXNlJyk7XG4gICAgY29uc3Qgc3ltYm9sVGhlbiA9IF9fc3ltYm9sX18oJ3RoZW4nKTtcbiAgICBjb25zdCBjcmVhdGlvblRyYWNlID0gJ19fY3JlYXRpb25UcmFjZV9fJztcbiAgICBhcGkub25VbmhhbmRsZWRFcnJvciA9IGUgPT4ge1xuICAgICAgaWYgKGFwaS5zaG93VW5jYXVnaHRFcnJvcigpKSB7XG4gICAgICAgIGNvbnN0IHJlamVjdGlvbiA9IGUgJiYgZS5yZWplY3Rpb247XG4gICAgICAgIGlmIChyZWplY3Rpb24pIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgUHJvbWlzZSByZWplY3Rpb246JywgcmVqZWN0aW9uIGluc3RhbmNlb2YgRXJyb3IgPyByZWplY3Rpb24ubWVzc2FnZSA6IHJlamVjdGlvbiwgJzsgWm9uZTonLCBlLnpvbmUubmFtZSwgJzsgVGFzazonLCBlLnRhc2sgJiYgZS50YXNrLnNvdXJjZSwgJzsgVmFsdWU6JywgcmVqZWN0aW9uLCByZWplY3Rpb24gaW5zdGFuY2VvZiBFcnJvciA/IHJlamVjdGlvbi5zdGFjayA6IHVuZGVmaW5lZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgYXBpLm1pY3JvdGFza0RyYWluRG9uZSA9ICgpID0+IHtcbiAgICAgIHdoaWxlIChfdW5jYXVnaHRQcm9taXNlRXJyb3JzLmxlbmd0aCkge1xuICAgICAgICBjb25zdCB1bmNhdWdodFByb21pc2VFcnJvciA9IF91bmNhdWdodFByb21pc2VFcnJvcnMuc2hpZnQoKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB1bmNhdWdodFByb21pc2VFcnJvci56b25lLnJ1bkd1YXJkZWQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHVuY2F1Z2h0UHJvbWlzZUVycm9yLnRocm93T3JpZ2luYWwpIHtcbiAgICAgICAgICAgICAgdGhyb3cgdW5jYXVnaHRQcm9taXNlRXJyb3IucmVqZWN0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgdW5jYXVnaHRQcm9taXNlRXJyb3I7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgaGFuZGxlVW5oYW5kbGVkUmVqZWN0aW9uKGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgVU5IQU5ETEVEX1BST01JU0VfUkVKRUNUSU9OX0hBTkRMRVJfU1lNQk9MID0gX19zeW1ib2xfXygndW5oYW5kbGVkUHJvbWlzZVJlamVjdGlvbkhhbmRsZXInKTtcbiAgICBmdW5jdGlvbiBoYW5kbGVVbmhhbmRsZWRSZWplY3Rpb24oZSkge1xuICAgICAgYXBpLm9uVW5oYW5kbGVkRXJyb3IoZSk7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBoYW5kbGVyID0gWm9uZVtVTkhBTkRMRURfUFJPTUlTRV9SRUpFQ1RJT05fSEFORExFUl9TWU1CT0xdO1xuICAgICAgICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgZSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge31cbiAgICB9XG4gICAgZnVuY3Rpb24gaXNUaGVuYWJsZSh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSAnZnVuY3Rpb24nO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmb3J3YXJkUmVzb2x1dGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmb3J3YXJkUmVqZWN0aW9uKHJlamVjdGlvbikge1xuICAgICAgcmV0dXJuIFpvbmVBd2FyZVByb21pc2UucmVqZWN0KHJlamVjdGlvbik7XG4gICAgfVxuICAgIGNvbnN0IHN5bWJvbFN0YXRlID0gX19zeW1ib2xfXygnc3RhdGUnKTtcbiAgICBjb25zdCBzeW1ib2xWYWx1ZSA9IF9fc3ltYm9sX18oJ3ZhbHVlJyk7XG4gICAgY29uc3Qgc3ltYm9sRmluYWxseSA9IF9fc3ltYm9sX18oJ2ZpbmFsbHknKTtcbiAgICBjb25zdCBzeW1ib2xQYXJlbnRQcm9taXNlVmFsdWUgPSBfX3N5bWJvbF9fKCdwYXJlbnRQcm9taXNlVmFsdWUnKTtcbiAgICBjb25zdCBzeW1ib2xQYXJlbnRQcm9taXNlU3RhdGUgPSBfX3N5bWJvbF9fKCdwYXJlbnRQcm9taXNlU3RhdGUnKTtcbiAgICBjb25zdCBzb3VyY2UgPSAnUHJvbWlzZS50aGVuJztcbiAgICBjb25zdCBVTlJFU09MVkVEID0gbnVsbDtcbiAgICBjb25zdCBSRVNPTFZFRCA9IHRydWU7XG4gICAgY29uc3QgUkVKRUNURUQgPSBmYWxzZTtcbiAgICBjb25zdCBSRUpFQ1RFRF9OT19DQVRDSCA9IDA7XG4gICAgZnVuY3Rpb24gbWFrZVJlc29sdmVyKHByb21pc2UsIHN0YXRlKSB7XG4gICAgICByZXR1cm4gdiA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzb2x2ZVByb21pc2UocHJvbWlzZSwgc3RhdGUsIHYpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICByZXNvbHZlUHJvbWlzZShwcm9taXNlLCBmYWxzZSwgZXJyKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBEbyBub3QgcmV0dXJuIHZhbHVlIG9yIHlvdSB3aWxsIGJyZWFrIHRoZSBQcm9taXNlIHNwZWMuXG4gICAgICB9O1xuICAgIH1cbiAgICBjb25zdCBvbmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IHdhc0NhbGxlZCA9IGZhbHNlO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHdyYXBwZXIod3JhcHBlZEZ1bmN0aW9uKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHdhc0NhbGxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB3YXNDYWxsZWQgPSB0cnVlO1xuICAgICAgICAgIHdyYXBwZWRGdW5jdGlvbi5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgICAgfTtcbiAgICB9O1xuICAgIGNvbnN0IFRZUEVfRVJST1IgPSAnUHJvbWlzZSByZXNvbHZlZCB3aXRoIGl0c2VsZic7XG4gICAgY29uc3QgQ1VSUkVOVF9UQVNLX1RSQUNFX1NZTUJPTCA9IF9fc3ltYm9sX18oJ2N1cnJlbnRUYXNrVHJhY2UnKTtcbiAgICAvLyBQcm9taXNlIFJlc29sdXRpb25cbiAgICBmdW5jdGlvbiByZXNvbHZlUHJvbWlzZShwcm9taXNlLCBzdGF0ZSwgdmFsdWUpIHtcbiAgICAgIGNvbnN0IG9uY2VXcmFwcGVyID0gb25jZSgpO1xuICAgICAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoVFlQRV9FUlJPUik7XG4gICAgICB9XG4gICAgICBpZiAocHJvbWlzZVtzeW1ib2xTdGF0ZV0gPT09IFVOUkVTT0xWRUQpIHtcbiAgICAgICAgLy8gc2hvdWxkIG9ubHkgZ2V0IHZhbHVlLnRoZW4gb25jZSBiYXNlZCBvbiBwcm9taXNlIHNwZWMuXG4gICAgICAgIGxldCB0aGVuID0gbnVsbDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoZW4gPSB2YWx1ZSAmJiB2YWx1ZS50aGVuO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgb25jZVdyYXBwZXIoKCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZVByb21pc2UocHJvbWlzZSwgZmFsc2UsIGVycik7XG4gICAgICAgICAgfSkoKTtcbiAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiAodmFsdWUgaW5zdGFuY2VvZiBab25lQXdhcmVQcm9taXNlKSB7XG4gICAgICAgIGlmIChzdGF0ZSAhPT0gUkVKRUNURUQgJiYgdmFsdWUgaW5zdGFuY2VvZiBab25lQXdhcmVQcm9taXNlICYmIHZhbHVlLmhhc093blByb3BlcnR5KHN5bWJvbFN0YXRlKSAmJiB2YWx1ZS5oYXNPd25Qcm9wZXJ0eShzeW1ib2xWYWx1ZSkgJiYgdmFsdWVbc3ltYm9sU3RhdGVdICE9PSBVTlJFU09MVkVEKSB7XG4gICAgICAgICAgY2xlYXJSZWplY3RlZE5vQ2F0Y2godmFsdWUpO1xuICAgICAgICAgIHJlc29sdmVQcm9taXNlKHByb21pc2UsIHZhbHVlW3N5bWJvbFN0YXRlXSwgdmFsdWVbc3ltYm9sVmFsdWVdKTtcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0ZSAhPT0gUkVKRUNURUQgJiYgdHlwZW9mIHRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBvbmNlV3JhcHBlcihtYWtlUmVzb2x2ZXIocHJvbWlzZSwgc3RhdGUpKSwgb25jZVdyYXBwZXIobWFrZVJlc29sdmVyKHByb21pc2UsIGZhbHNlKSkpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgb25jZVdyYXBwZXIoKCkgPT4ge1xuICAgICAgICAgICAgICByZXNvbHZlUHJvbWlzZShwcm9taXNlLCBmYWxzZSwgZXJyKTtcbiAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb21pc2Vbc3ltYm9sU3RhdGVdID0gc3RhdGU7XG4gICAgICAgICAgY29uc3QgcXVldWUgPSBwcm9taXNlW3N5bWJvbFZhbHVlXTtcbiAgICAgICAgICBwcm9taXNlW3N5bWJvbFZhbHVlXSA9IHZhbHVlO1xuICAgICAgICAgIGlmIChwcm9taXNlW3N5bWJvbEZpbmFsbHldID09PSBzeW1ib2xGaW5hbGx5KSB7XG4gICAgICAgICAgICAvLyB0aGUgcHJvbWlzZSBpcyBnZW5lcmF0ZWQgYnkgUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseVxuICAgICAgICAgICAgaWYgKHN0YXRlID09PSBSRVNPTFZFRCkge1xuICAgICAgICAgICAgICAvLyB0aGUgc3RhdGUgaXMgcmVzb2x2ZWQsIHNob3VsZCBpZ25vcmUgdGhlIHZhbHVlXG4gICAgICAgICAgICAgIC8vIGFuZCB1c2UgcGFyZW50IHByb21pc2UgdmFsdWVcbiAgICAgICAgICAgICAgcHJvbWlzZVtzeW1ib2xTdGF0ZV0gPSBwcm9taXNlW3N5bWJvbFBhcmVudFByb21pc2VTdGF0ZV07XG4gICAgICAgICAgICAgIHByb21pc2Vbc3ltYm9sVmFsdWVdID0gcHJvbWlzZVtzeW1ib2xQYXJlbnRQcm9taXNlVmFsdWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyByZWNvcmQgdGFzayBpbmZvcm1hdGlvbiBpbiB2YWx1ZSB3aGVuIGVycm9yIG9jY3Vycywgc28gd2UgY2FuXG4gICAgICAgICAgLy8gZG8gc29tZSBhZGRpdGlvbmFsIHdvcmsgc3VjaCBhcyByZW5kZXIgbG9uZ1N0YWNrVHJhY2VcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IFJFSkVDVEVEICYmIHZhbHVlIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIGxvbmdTdGFja1RyYWNlWm9uZSBpcyBoZXJlXG4gICAgICAgICAgICBjb25zdCB0cmFjZSA9IFpvbmUuY3VycmVudFRhc2sgJiYgWm9uZS5jdXJyZW50VGFzay5kYXRhICYmIFpvbmUuY3VycmVudFRhc2suZGF0YVtjcmVhdGlvblRyYWNlXTtcbiAgICAgICAgICAgIGlmICh0cmFjZSkge1xuICAgICAgICAgICAgICAvLyBvbmx5IGtlZXAgdGhlIGxvbmcgc3RhY2sgdHJhY2UgaW50byBlcnJvciB3aGVuIGluIGxvbmdTdGFja1RyYWNlWm9uZVxuICAgICAgICAgICAgICBPYmplY3REZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgQ1VSUkVOVF9UQVNLX1RSQUNFX1NZTUJPTCwge1xuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdHJhY2VcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOykge1xuICAgICAgICAgICAgc2NoZWR1bGVSZXNvbHZlT3JSZWplY3QocHJvbWlzZSwgcXVldWVbaSsrXSwgcXVldWVbaSsrXSwgcXVldWVbaSsrXSwgcXVldWVbaSsrXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChxdWV1ZS5sZW5ndGggPT0gMCAmJiBzdGF0ZSA9PSBSRUpFQ1RFRCkge1xuICAgICAgICAgICAgcHJvbWlzZVtzeW1ib2xTdGF0ZV0gPSBSRUpFQ1RFRF9OT19DQVRDSDtcbiAgICAgICAgICAgIGxldCB1bmNhdWdodFByb21pc2VFcnJvciA9IHZhbHVlO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgLy8gSGVyZSB3ZSB0aHJvd3MgYSBuZXcgRXJyb3IgdG8gcHJpbnQgbW9yZSByZWFkYWJsZSBlcnJvciBsb2dcbiAgICAgICAgICAgICAgLy8gYW5kIGlmIHRoZSB2YWx1ZSBpcyBub3QgYW4gZXJyb3IsIHpvbmUuanMgYnVpbGRzIGFuIGBFcnJvcmBcbiAgICAgICAgICAgICAgLy8gT2JqZWN0IGhlcmUgdG8gYXR0YWNoIHRoZSBzdGFjayBpbmZvcm1hdGlvbi5cbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmNhdWdodCAoaW4gcHJvbWlzZSk6ICcgKyByZWFkYWJsZU9iamVjdFRvU3RyaW5nKHZhbHVlKSArICh2YWx1ZSAmJiB2YWx1ZS5zdGFjayA/ICdcXG4nICsgdmFsdWUuc3RhY2sgOiAnJykpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgIHVuY2F1Z2h0UHJvbWlzZUVycm9yID0gZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzRGlzYWJsZVdyYXBwaW5nVW5jYXVnaHRQcm9taXNlUmVqZWN0aW9uKSB7XG4gICAgICAgICAgICAgIC8vIElmIGRpc2FibGUgd3JhcHBpbmcgdW5jYXVnaHQgcHJvbWlzZSByZWplY3RcbiAgICAgICAgICAgICAgLy8gdXNlIHRoZSB2YWx1ZSBpbnN0ZWFkIG9mIHdyYXBwaW5nIGl0LlxuICAgICAgICAgICAgICB1bmNhdWdodFByb21pc2VFcnJvci50aHJvd09yaWdpbmFsID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVuY2F1Z2h0UHJvbWlzZUVycm9yLnJlamVjdGlvbiA9IHZhbHVlO1xuICAgICAgICAgICAgdW5jYXVnaHRQcm9taXNlRXJyb3IucHJvbWlzZSA9IHByb21pc2U7XG4gICAgICAgICAgICB1bmNhdWdodFByb21pc2VFcnJvci56b25lID0gWm9uZS5jdXJyZW50O1xuICAgICAgICAgICAgdW5jYXVnaHRQcm9taXNlRXJyb3IudGFzayA9IFpvbmUuY3VycmVudFRhc2s7XG4gICAgICAgICAgICBfdW5jYXVnaHRQcm9taXNlRXJyb3JzLnB1c2godW5jYXVnaHRQcm9taXNlRXJyb3IpO1xuICAgICAgICAgICAgYXBpLnNjaGVkdWxlTWljcm9UYXNrKCk7IC8vIHRvIG1ha2Ugc3VyZSB0aGF0IGl0IGlzIHJ1bm5pbmdcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIFJlc29sdmluZyBhbiBhbHJlYWR5IHJlc29sdmVkIHByb21pc2UgaXMgYSBub29wLlxuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICAgIGNvbnN0IFJFSkVDVElPTl9IQU5ETEVEX0hBTkRMRVIgPSBfX3N5bWJvbF9fKCdyZWplY3Rpb25IYW5kbGVkSGFuZGxlcicpO1xuICAgIGZ1bmN0aW9uIGNsZWFyUmVqZWN0ZWROb0NhdGNoKHByb21pc2UpIHtcbiAgICAgIGlmIChwcm9taXNlW3N5bWJvbFN0YXRlXSA9PT0gUkVKRUNURURfTk9fQ0FUQ0gpIHtcbiAgICAgICAgLy8gaWYgdGhlIHByb21pc2UgaXMgcmVqZWN0ZWQgbm8gY2F0Y2ggc3RhdHVzXG4gICAgICAgIC8vIGFuZCBxdWV1ZS5sZW5ndGggPiAwLCBtZWFucyB0aGVyZSBpcyBhIGVycm9yIGhhbmRsZXJcbiAgICAgICAgLy8gaGVyZSB0byBoYW5kbGUgdGhlIHJlamVjdGVkIHByb21pc2UsIHdlIHNob3VsZCB0cmlnZ2VyXG4gICAgICAgIC8vIHdpbmRvd3MucmVqZWN0aW9uaGFuZGxlZCBldmVudEhhbmRsZXIgb3Igbm9kZWpzIHJlamVjdGlvbkhhbmRsZWRcbiAgICAgICAgLy8gZXZlbnRIYW5kbGVyXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgaGFuZGxlciA9IFpvbmVbUkVKRUNUSU9OX0hBTkRMRURfSEFORExFUl07XG4gICAgICAgICAgaWYgKGhhbmRsZXIgJiYgdHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCB7XG4gICAgICAgICAgICAgIHJlamVjdGlvbjogcHJvbWlzZVtzeW1ib2xWYWx1ZV0sXG4gICAgICAgICAgICAgIHByb21pc2U6IHByb21pc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxuICAgICAgICBwcm9taXNlW3N5bWJvbFN0YXRlXSA9IFJFSkVDVEVEO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IF91bmNhdWdodFByb21pc2VFcnJvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAocHJvbWlzZSA9PT0gX3VuY2F1Z2h0UHJvbWlzZUVycm9yc1tpXS5wcm9taXNlKSB7XG4gICAgICAgICAgICBfdW5jYXVnaHRQcm9taXNlRXJyb3JzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gc2NoZWR1bGVSZXNvbHZlT3JSZWplY3QocHJvbWlzZSwgem9uZSwgY2hhaW5Qcm9taXNlLCBvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgICAgY2xlYXJSZWplY3RlZE5vQ2F0Y2gocHJvbWlzZSk7XG4gICAgICBjb25zdCBwcm9taXNlU3RhdGUgPSBwcm9taXNlW3N5bWJvbFN0YXRlXTtcbiAgICAgIGNvbnN0IGRlbGVnYXRlID0gcHJvbWlzZVN0YXRlID8gdHlwZW9mIG9uRnVsZmlsbGVkID09PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiBmb3J3YXJkUmVzb2x1dGlvbiA6IHR5cGVvZiBvblJlamVjdGVkID09PSAnZnVuY3Rpb24nID8gb25SZWplY3RlZCA6IGZvcndhcmRSZWplY3Rpb247XG4gICAgICB6b25lLnNjaGVkdWxlTWljcm9UYXNrKHNvdXJjZSwgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHBhcmVudFByb21pc2VWYWx1ZSA9IHByb21pc2Vbc3ltYm9sVmFsdWVdO1xuICAgICAgICAgIGNvbnN0IGlzRmluYWxseVByb21pc2UgPSAhIWNoYWluUHJvbWlzZSAmJiBzeW1ib2xGaW5hbGx5ID09PSBjaGFpblByb21pc2Vbc3ltYm9sRmluYWxseV07XG4gICAgICAgICAgaWYgKGlzRmluYWxseVByb21pc2UpIHtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBwcm9taXNlIGlzIGdlbmVyYXRlZCBmcm9tIGZpbmFsbHkgY2FsbCwga2VlcCBwYXJlbnQgcHJvbWlzZSdzIHN0YXRlIGFuZCB2YWx1ZVxuICAgICAgICAgICAgY2hhaW5Qcm9taXNlW3N5bWJvbFBhcmVudFByb21pc2VWYWx1ZV0gPSBwYXJlbnRQcm9taXNlVmFsdWU7XG4gICAgICAgICAgICBjaGFpblByb21pc2Vbc3ltYm9sUGFyZW50UHJvbWlzZVN0YXRlXSA9IHByb21pc2VTdGF0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gc2hvdWxkIG5vdCBwYXNzIHZhbHVlIHRvIGZpbmFsbHkgY2FsbGJhY2tcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHpvbmUucnVuKGRlbGVnYXRlLCB1bmRlZmluZWQsIGlzRmluYWxseVByb21pc2UgJiYgZGVsZWdhdGUgIT09IGZvcndhcmRSZWplY3Rpb24gJiYgZGVsZWdhdGUgIT09IGZvcndhcmRSZXNvbHV0aW9uID8gW10gOiBbcGFyZW50UHJvbWlzZVZhbHVlXSk7XG4gICAgICAgICAgcmVzb2x2ZVByb21pc2UoY2hhaW5Qcm9taXNlLCB0cnVlLCB2YWx1ZSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgLy8gaWYgZXJyb3Igb2NjdXJzLCBzaG91bGQgYWx3YXlzIHJldHVybiB0aGlzIGVycm9yXG4gICAgICAgICAgcmVzb2x2ZVByb21pc2UoY2hhaW5Qcm9taXNlLCBmYWxzZSwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9LCBjaGFpblByb21pc2UpO1xuICAgIH1cbiAgICBjb25zdCBaT05FX0FXQVJFX1BST01JU0VfVE9fU1RSSU5HID0gJ2Z1bmN0aW9uIFpvbmVBd2FyZVByb21pc2UoKSB7IFtuYXRpdmUgY29kZV0gfSc7XG4gICAgY29uc3Qgbm9vcCA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIGNvbnN0IEFnZ3JlZ2F0ZUVycm9yID0gZ2xvYmFsLkFnZ3JlZ2F0ZUVycm9yO1xuICAgIGNsYXNzIFpvbmVBd2FyZVByb21pc2Uge1xuICAgICAgc3RhdGljIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gWk9ORV9BV0FSRV9QUk9NSVNFX1RPX1NUUklORztcbiAgICAgIH1cbiAgICAgIHN0YXRpYyByZXNvbHZlKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFpvbmVBd2FyZVByb21pc2UpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmVQcm9taXNlKG5ldyB0aGlzKG51bGwpLCBSRVNPTFZFRCwgdmFsdWUpO1xuICAgICAgfVxuICAgICAgc3RhdGljIHJlamVjdChlcnJvcikge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZVByb21pc2UobmV3IHRoaXMobnVsbCksIFJFSkVDVEVELCBlcnJvcik7XG4gICAgICB9XG4gICAgICBzdGF0aWMgd2l0aFJlc29sdmVycygpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgICAgIHJlc3VsdC5wcm9taXNlID0gbmV3IFpvbmVBd2FyZVByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgICAgICAgcmVzdWx0LnJlc29sdmUgPSByZXM7XG4gICAgICAgICAgcmVzdWx0LnJlamVjdCA9IHJlajtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gICAgICBzdGF0aWMgYW55KHZhbHVlcykge1xuICAgICAgICBpZiAoIXZhbHVlcyB8fCB0eXBlb2YgdmFsdWVzW1N5bWJvbC5pdGVyYXRvcl0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEFnZ3JlZ2F0ZUVycm9yKFtdLCAnQWxsIHByb21pc2VzIHdlcmUgcmVqZWN0ZWQnKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBbXTtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmb3IgKGxldCB2IG9mIHZhbHVlcykge1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2goWm9uZUF3YXJlUHJvbWlzZS5yZXNvbHZlKHYpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgQWdncmVnYXRlRXJyb3IoW10sICdBbGwgcHJvbWlzZXMgd2VyZSByZWplY3RlZCcpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEFnZ3JlZ2F0ZUVycm9yKFtdLCAnQWxsIHByb21pc2VzIHdlcmUgcmVqZWN0ZWQnKSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZpbmlzaGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGVycm9ycyA9IFtdO1xuICAgICAgICByZXR1cm4gbmV3IFpvbmVBd2FyZVByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvbWlzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHByb21pc2VzW2ldLnRoZW4odiA9PiB7XG4gICAgICAgICAgICAgIGlmIChmaW5pc2hlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBmaW5pc2hlZCA9IHRydWU7XG4gICAgICAgICAgICAgIHJlc29sdmUodik7XG4gICAgICAgICAgICB9LCBlcnIgPT4ge1xuICAgICAgICAgICAgICBlcnJvcnMucHVzaChlcnIpO1xuICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICBmaW5pc2hlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBBZ2dyZWdhdGVFcnJvcihlcnJvcnMsICdBbGwgcHJvbWlzZXMgd2VyZSByZWplY3RlZCcpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHN0YXRpYyByYWNlKHZhbHVlcykge1xuICAgICAgICBsZXQgcmVzb2x2ZTtcbiAgICAgICAgbGV0IHJlamVjdDtcbiAgICAgICAgbGV0IHByb21pc2UgPSBuZXcgdGhpcygocmVzLCByZWopID0+IHtcbiAgICAgICAgICByZXNvbHZlID0gcmVzO1xuICAgICAgICAgIHJlamVjdCA9IHJlajtcbiAgICAgICAgfSk7XG4gICAgICAgIGZ1bmN0aW9uIG9uUmVzb2x2ZSh2YWx1ZSkge1xuICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIG9uUmVqZWN0KGVycm9yKSB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCB2YWx1ZSBvZiB2YWx1ZXMpIHtcbiAgICAgICAgICBpZiAoIWlzVGhlbmFibGUodmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMucmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhbHVlLnRoZW4ob25SZXNvbHZlLCBvblJlamVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICB9XG4gICAgICBzdGF0aWMgYWxsKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gWm9uZUF3YXJlUHJvbWlzZS5hbGxXaXRoQ2FsbGJhY2sodmFsdWVzKTtcbiAgICAgIH1cbiAgICAgIHN0YXRpYyBhbGxTZXR0bGVkKHZhbHVlcykge1xuICAgICAgICBjb25zdCBQID0gdGhpcyAmJiB0aGlzLnByb3RvdHlwZSBpbnN0YW5jZW9mIFpvbmVBd2FyZVByb21pc2UgPyB0aGlzIDogWm9uZUF3YXJlUHJvbWlzZTtcbiAgICAgICAgcmV0dXJuIFAuYWxsV2l0aENhbGxiYWNrKHZhbHVlcywge1xuICAgICAgICAgIHRoZW5DYWxsYmFjazogdmFsdWUgPT4gKHtcbiAgICAgICAgICAgIHN0YXR1czogJ2Z1bGZpbGxlZCcsXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGVycm9yQ2FsbGJhY2s6IGVyciA9PiAoe1xuICAgICAgICAgICAgc3RhdHVzOiAncmVqZWN0ZWQnLFxuICAgICAgICAgICAgcmVhc29uOiBlcnJcbiAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHN0YXRpYyBhbGxXaXRoQ2FsbGJhY2sodmFsdWVzLCBjYWxsYmFjaykge1xuICAgICAgICBsZXQgcmVzb2x2ZTtcbiAgICAgICAgbGV0IHJlamVjdDtcbiAgICAgICAgbGV0IHByb21pc2UgPSBuZXcgdGhpcygocmVzLCByZWopID0+IHtcbiAgICAgICAgICByZXNvbHZlID0gcmVzO1xuICAgICAgICAgIHJlamVjdCA9IHJlajtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFN0YXJ0IGF0IDIgdG8gcHJldmVudCBwcmVtYXR1cmVseSByZXNvbHZpbmcgaWYgLnRoZW4gaXMgY2FsbGVkIGltbWVkaWF0ZWx5LlxuICAgICAgICBsZXQgdW5yZXNvbHZlZENvdW50ID0gMjtcbiAgICAgICAgbGV0IHZhbHVlSW5kZXggPSAwO1xuICAgICAgICBjb25zdCByZXNvbHZlZFZhbHVlcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCB2YWx1ZSBvZiB2YWx1ZXMpIHtcbiAgICAgICAgICBpZiAoIWlzVGhlbmFibGUodmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMucmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGN1clZhbHVlSW5kZXggPSB2YWx1ZUluZGV4O1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YWx1ZS50aGVuKHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgcmVzb2x2ZWRWYWx1ZXNbY3VyVmFsdWVJbmRleF0gPSBjYWxsYmFjayA/IGNhbGxiYWNrLnRoZW5DYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICAgICAgICAgICAgdW5yZXNvbHZlZENvdW50LS07XG4gICAgICAgICAgICAgIGlmICh1bnJlc29sdmVkQ291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc29sdmVkVmFsdWVzKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgZXJyID0+IHtcbiAgICAgICAgICAgICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmVkVmFsdWVzW2N1clZhbHVlSW5kZXhdID0gY2FsbGJhY2suZXJyb3JDYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgICAgIHVucmVzb2x2ZWRDb3VudC0tO1xuICAgICAgICAgICAgICAgIGlmICh1bnJlc29sdmVkQ291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzb2x2ZWRWYWx1ZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBjYXRjaCAodGhlbkVycikge1xuICAgICAgICAgICAgcmVqZWN0KHRoZW5FcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB1bnJlc29sdmVkQ291bnQrKztcbiAgICAgICAgICB2YWx1ZUluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTWFrZSB0aGUgdW5yZXNvbHZlZENvdW50IHplcm8tYmFzZWQgYWdhaW4uXG4gICAgICAgIHVucmVzb2x2ZWRDb3VudCAtPSAyO1xuICAgICAgICBpZiAodW5yZXNvbHZlZENvdW50ID09PSAwKSB7XG4gICAgICAgICAgcmVzb2x2ZShyZXNvbHZlZFZhbHVlcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICB9XG4gICAgICBjb25zdHJ1Y3RvcihleGVjdXRvcikge1xuICAgICAgICBjb25zdCBwcm9taXNlID0gdGhpcztcbiAgICAgICAgaWYgKCEocHJvbWlzZSBpbnN0YW5jZW9mIFpvbmVBd2FyZVByb21pc2UpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdXN0IGJlIGFuIGluc3RhbmNlb2YgUHJvbWlzZS4nKTtcbiAgICAgICAgfVxuICAgICAgICBwcm9taXNlW3N5bWJvbFN0YXRlXSA9IFVOUkVTT0xWRUQ7XG4gICAgICAgIHByb21pc2Vbc3ltYm9sVmFsdWVdID0gW107IC8vIHF1ZXVlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IG9uY2VXcmFwcGVyID0gb25jZSgpO1xuICAgICAgICAgIGV4ZWN1dG9yICYmIGV4ZWN1dG9yKG9uY2VXcmFwcGVyKG1ha2VSZXNvbHZlcihwcm9taXNlLCBSRVNPTFZFRCkpLCBvbmNlV3JhcHBlcihtYWtlUmVzb2x2ZXIocHJvbWlzZSwgUkVKRUNURUQpKSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgcmVzb2x2ZVByb21pc2UocHJvbWlzZSwgZmFsc2UsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZ2V0IFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xuICAgICAgICByZXR1cm4gJ1Byb21pc2UnO1xuICAgICAgfVxuICAgICAgZ2V0IFtTeW1ib2wuc3BlY2llc10oKSB7XG4gICAgICAgIHJldHVybiBab25lQXdhcmVQcm9taXNlO1xuICAgICAgfVxuICAgICAgdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgICAgICAvLyBXZSBtdXN0IHJlYWQgYFN5bWJvbC5zcGVjaWVzYCBzYWZlbHkgYmVjYXVzZSBgdGhpc2AgbWF5IGJlIGFueXRoaW5nLiBGb3IgaW5zdGFuY2UsIGB0aGlzYFxuICAgICAgICAvLyBtYXkgYmUgYW4gb2JqZWN0IHdpdGhvdXQgYSBwcm90b3R5cGUgKGNyZWF0ZWQgdGhyb3VnaCBgT2JqZWN0LmNyZWF0ZShudWxsKWApOyB0aHVzXG4gICAgICAgIC8vIGB0aGlzLmNvbnN0cnVjdG9yYCB3aWxsIGJlIHVuZGVmaW5lZC4gT25lIG9mIHRoZSB1c2UgY2FzZXMgaXMgU3lzdGVtSlMgY3JlYXRpbmdcbiAgICAgICAgLy8gcHJvdG90eXBlLWxlc3Mgb2JqZWN0cyAobW9kdWxlcykgdmlhIGBPYmplY3QuY3JlYXRlKG51bGwpYC4gVGhlIFN5c3RlbUpTIGNyZWF0ZXMgYW4gZW1wdHlcbiAgICAgICAgLy8gb2JqZWN0IGFuZCBjb3BpZXMgcHJvbWlzZSBwcm9wZXJ0aWVzIGludG8gdGhhdCBvYmplY3QgKHdpdGhpbiB0aGUgYGdldE9yQ3JlYXRlTG9hZGBcbiAgICAgICAgLy8gZnVuY3Rpb24pLiBUaGUgem9uZS5qcyB0aGVuIGNoZWNrcyBpZiB0aGUgcmVzb2x2ZWQgdmFsdWUgaGFzIHRoZSBgdGhlbmAgbWV0aG9kIGFuZFxuICAgICAgICAvLyBpbnZva2VzIGl0IHdpdGggdGhlIGB2YWx1ZWAgY29udGV4dC4gT3RoZXJ3aXNlLCB0aGlzIHdpbGwgdGhyb3cgYW4gZXJyb3I6IGBUeXBlRXJyb3I6XG4gICAgICAgIC8vIENhbm5vdCByZWFkIHByb3BlcnRpZXMgb2YgdW5kZWZpbmVkIChyZWFkaW5nICdTeW1ib2woU3ltYm9sLnNwZWNpZXMpJylgLlxuICAgICAgICBsZXQgQyA9IHRoaXMuY29uc3RydWN0b3I/LltTeW1ib2wuc3BlY2llc107XG4gICAgICAgIGlmICghQyB8fCB0eXBlb2YgQyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIEMgPSB0aGlzLmNvbnN0cnVjdG9yIHx8IFpvbmVBd2FyZVByb21pc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2hhaW5Qcm9taXNlID0gbmV3IEMobm9vcCk7XG4gICAgICAgIGNvbnN0IHpvbmUgPSBab25lLmN1cnJlbnQ7XG4gICAgICAgIGlmICh0aGlzW3N5bWJvbFN0YXRlXSA9PSBVTlJFU09MVkVEKSB7XG4gICAgICAgICAgdGhpc1tzeW1ib2xWYWx1ZV0ucHVzaCh6b25lLCBjaGFpblByb21pc2UsIG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzY2hlZHVsZVJlc29sdmVPclJlamVjdCh0aGlzLCB6b25lLCBjaGFpblByb21pc2UsIG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hhaW5Qcm9taXNlO1xuICAgICAgfVxuICAgICAgY2F0Y2gob25SZWplY3RlZCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0ZWQpO1xuICAgICAgfVxuICAgICAgZmluYWxseShvbkZpbmFsbHkpIHtcbiAgICAgICAgLy8gU2VlIGNvbW1lbnQgb24gdGhlIGNhbGwgdG8gYHRoZW5gIGFib3V0IHdoeSB0aGVlIGBTeW1ib2wuc3BlY2llc2AgaXMgc2FmZWx5IGFjY2Vzc2VkLlxuICAgICAgICBsZXQgQyA9IHRoaXMuY29uc3RydWN0b3I/LltTeW1ib2wuc3BlY2llc107XG4gICAgICAgIGlmICghQyB8fCB0eXBlb2YgQyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIEMgPSBab25lQXdhcmVQcm9taXNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNoYWluUHJvbWlzZSA9IG5ldyBDKG5vb3ApO1xuICAgICAgICBjaGFpblByb21pc2Vbc3ltYm9sRmluYWxseV0gPSBzeW1ib2xGaW5hbGx5O1xuICAgICAgICBjb25zdCB6b25lID0gWm9uZS5jdXJyZW50O1xuICAgICAgICBpZiAodGhpc1tzeW1ib2xTdGF0ZV0gPT0gVU5SRVNPTFZFRCkge1xuICAgICAgICAgIHRoaXNbc3ltYm9sVmFsdWVdLnB1c2goem9uZSwgY2hhaW5Qcm9taXNlLCBvbkZpbmFsbHksIG9uRmluYWxseSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2NoZWR1bGVSZXNvbHZlT3JSZWplY3QodGhpcywgem9uZSwgY2hhaW5Qcm9taXNlLCBvbkZpbmFsbHksIG9uRmluYWxseSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoYWluUHJvbWlzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gUHJvdGVjdCBhZ2FpbnN0IGFnZ3Jlc3NpdmUgb3B0aW1pemVycyBkcm9wcGluZyBzZWVtaW5nbHkgdW51c2VkIHByb3BlcnRpZXMuXG4gICAgLy8gRS5nLiBDbG9zdXJlIENvbXBpbGVyIGluIGFkdmFuY2VkIG1vZGUuXG4gICAgWm9uZUF3YXJlUHJvbWlzZVsncmVzb2x2ZSddID0gWm9uZUF3YXJlUHJvbWlzZS5yZXNvbHZlO1xuICAgIFpvbmVBd2FyZVByb21pc2VbJ3JlamVjdCddID0gWm9uZUF3YXJlUHJvbWlzZS5yZWplY3Q7XG4gICAgWm9uZUF3YXJlUHJvbWlzZVsncmFjZSddID0gWm9uZUF3YXJlUHJvbWlzZS5yYWNlO1xuICAgIFpvbmVBd2FyZVByb21pc2VbJ2FsbCddID0gWm9uZUF3YXJlUHJvbWlzZS5hbGw7XG4gICAgY29uc3QgTmF0aXZlUHJvbWlzZSA9IGdsb2JhbFtzeW1ib2xQcm9taXNlXSA9IGdsb2JhbFsnUHJvbWlzZSddO1xuICAgIGdsb2JhbFsnUHJvbWlzZSddID0gWm9uZUF3YXJlUHJvbWlzZTtcbiAgICBjb25zdCBzeW1ib2xUaGVuUGF0Y2hlZCA9IF9fc3ltYm9sX18oJ3RoZW5QYXRjaGVkJyk7XG4gICAgZnVuY3Rpb24gcGF0Y2hUaGVuKEN0b3IpIHtcbiAgICAgIGNvbnN0IHByb3RvID0gQ3Rvci5wcm90b3R5cGU7XG4gICAgICBjb25zdCBwcm9wID0gT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvLCAndGhlbicpO1xuICAgICAgaWYgKHByb3AgJiYgKHByb3Aud3JpdGFibGUgPT09IGZhbHNlIHx8ICFwcm9wLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgICAgLy8gY2hlY2sgQ3Rvci5wcm90b3R5cGUudGhlbiBwcm9wZXJ0eURlc2NyaXB0b3IgaXMgd3JpdGFibGUgb3Igbm90XG4gICAgICAgIC8vIGluIG1ldGVvciBlbnYsIHdyaXRhYmxlIGlzIGZhbHNlLCB3ZSBzaG91bGQgaWdub3JlIHN1Y2ggY2FzZVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBvcmlnaW5hbFRoZW4gPSBwcm90by50aGVuO1xuICAgICAgLy8gS2VlcCBhIHJlZmVyZW5jZSB0byB0aGUgb3JpZ2luYWwgbWV0aG9kLlxuICAgICAgcHJvdG9bc3ltYm9sVGhlbl0gPSBvcmlnaW5hbFRoZW47XG4gICAgICBDdG9yLnByb3RvdHlwZS50aGVuID0gZnVuY3Rpb24gKG9uUmVzb2x2ZSwgb25SZWplY3QpIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlZCA9IG5ldyBab25lQXdhcmVQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBvcmlnaW5hbFRoZW4uY2FsbCh0aGlzLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHdyYXBwZWQudGhlbihvblJlc29sdmUsIG9uUmVqZWN0KTtcbiAgICAgIH07XG4gICAgICBDdG9yW3N5bWJvbFRoZW5QYXRjaGVkXSA9IHRydWU7XG4gICAgfVxuICAgIGFwaS5wYXRjaFRoZW4gPSBwYXRjaFRoZW47XG4gICAgZnVuY3Rpb24gem9uZWlmeShmbikge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChzZWxmLCBhcmdzKSB7XG4gICAgICAgIGxldCByZXN1bHRQcm9taXNlID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICAgIGlmIChyZXN1bHRQcm9taXNlIGluc3RhbmNlb2YgWm9uZUF3YXJlUHJvbWlzZSkge1xuICAgICAgICAgIHJldHVybiByZXN1bHRQcm9taXNlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjdG9yID0gcmVzdWx0UHJvbWlzZS5jb25zdHJ1Y3RvcjtcbiAgICAgICAgaWYgKCFjdG9yW3N5bWJvbFRoZW5QYXRjaGVkXSkge1xuICAgICAgICAgIHBhdGNoVGhlbihjdG9yKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0UHJvbWlzZTtcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChOYXRpdmVQcm9taXNlKSB7XG4gICAgICBwYXRjaFRoZW4oTmF0aXZlUHJvbWlzZSk7XG4gICAgICBwYXRjaE1ldGhvZChnbG9iYWwsICdmZXRjaCcsIGRlbGVnYXRlID0+IHpvbmVpZnkoZGVsZWdhdGUpKTtcbiAgICB9XG4gICAgLy8gVGhpcyBpcyBub3QgcGFydCBvZiBwdWJsaWMgQVBJLCBidXQgaXQgaXMgdXNlZnVsIGZvciB0ZXN0cywgc28gd2UgZXhwb3NlIGl0LlxuICAgIFByb21pc2VbWm9uZS5fX3N5bWJvbF9fKCd1bmNhdWdodFByb21pc2VFcnJvcnMnKV0gPSBfdW5jYXVnaHRQcm9taXNlRXJyb3JzO1xuICAgIHJldHVybiBab25lQXdhcmVQcm9taXNlO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHBhdGNoVG9TdHJpbmcoWm9uZSkge1xuICAvLyBvdmVycmlkZSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmcgdG8gbWFrZSB6b25lLmpzIHBhdGNoZWQgZnVuY3Rpb25cbiAgLy8gbG9vayBsaWtlIG5hdGl2ZSBmdW5jdGlvblxuICBab25lLl9fbG9hZF9wYXRjaCgndG9TdHJpbmcnLCBnbG9iYWwgPT4ge1xuICAgIC8vIHBhdGNoIEZ1bmMucHJvdG90eXBlLnRvU3RyaW5nIHRvIGxldCB0aGVtIGxvb2sgbGlrZSBuYXRpdmVcbiAgICBjb25zdCBvcmlnaW5hbEZ1bmN0aW9uVG9TdHJpbmcgPSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmc7XG4gICAgY29uc3QgT1JJR0lOQUxfREVMRUdBVEVfU1lNQk9MID0gem9uZVN5bWJvbCgnT3JpZ2luYWxEZWxlZ2F0ZScpO1xuICAgIGNvbnN0IFBST01JU0VfU1lNQk9MID0gem9uZVN5bWJvbCgnUHJvbWlzZScpO1xuICAgIGNvbnN0IEVSUk9SX1NZTUJPTCA9IHpvbmVTeW1ib2woJ0Vycm9yJyk7XG4gICAgY29uc3QgbmV3RnVuY3Rpb25Ub1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsRGVsZWdhdGUgPSB0aGlzW09SSUdJTkFMX0RFTEVHQVRFX1NZTUJPTF07XG4gICAgICAgIGlmIChvcmlnaW5hbERlbGVnYXRlKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBvcmlnaW5hbERlbGVnYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxGdW5jdGlvblRvU3RyaW5nLmNhbGwob3JpZ2luYWxEZWxlZ2F0ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob3JpZ2luYWxEZWxlZ2F0ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzID09PSBQcm9taXNlKSB7XG4gICAgICAgICAgY29uc3QgbmF0aXZlUHJvbWlzZSA9IGdsb2JhbFtQUk9NSVNFX1NZTUJPTF07XG4gICAgICAgICAgaWYgKG5hdGl2ZVByb21pc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbEZ1bmN0aW9uVG9TdHJpbmcuY2FsbChuYXRpdmVQcm9taXNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMgPT09IEVycm9yKSB7XG4gICAgICAgICAgY29uc3QgbmF0aXZlRXJyb3IgPSBnbG9iYWxbRVJST1JfU1lNQk9MXTtcbiAgICAgICAgICBpZiAobmF0aXZlRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbEZ1bmN0aW9uVG9TdHJpbmcuY2FsbChuYXRpdmVFcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gb3JpZ2luYWxGdW5jdGlvblRvU3RyaW5nLmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICBuZXdGdW5jdGlvblRvU3RyaW5nW09SSUdJTkFMX0RFTEVHQVRFX1NZTUJPTF0gPSBvcmlnaW5hbEZ1bmN0aW9uVG9TdHJpbmc7XG4gICAgRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nID0gbmV3RnVuY3Rpb25Ub1N0cmluZztcbiAgICAvLyBwYXRjaCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nIHRvIGxldCB0aGVtIGxvb2sgbGlrZSBuYXRpdmVcbiAgICBjb25zdCBvcmlnaW5hbE9iamVjdFRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbiAgICBjb25zdCBQUk9NSVNFX09CSkVDVF9UT19TVFJJTkcgPSAnW29iamVjdCBQcm9taXNlXSc7XG4gICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0eXBlb2YgUHJvbWlzZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0aGlzIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICByZXR1cm4gUFJPTUlTRV9PQkpFQ1RfVE9fU1RSSU5HO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9yaWdpbmFsT2JqZWN0VG9TdHJpbmcuY2FsbCh0aGlzKTtcbiAgICB9O1xuICB9KTtcbn1cbmZ1bmN0aW9uIHBhdGNoQ2FsbGJhY2tzKGFwaSwgdGFyZ2V0LCB0YXJnZXROYW1lLCBtZXRob2QsIGNhbGxiYWNrcykge1xuICBjb25zdCBzeW1ib2wgPSBab25lLl9fc3ltYm9sX18obWV0aG9kKTtcbiAgaWYgKHRhcmdldFtzeW1ib2xdKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IG5hdGl2ZURlbGVnYXRlID0gdGFyZ2V0W3N5bWJvbF0gPSB0YXJnZXRbbWV0aG9kXTtcbiAgdGFyZ2V0W21ldGhvZF0gPSBmdW5jdGlvbiAobmFtZSwgb3B0cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRzICYmIG9wdHMucHJvdG90eXBlKSB7XG4gICAgICBjYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3Qgc291cmNlID0gYCR7dGFyZ2V0TmFtZX0uJHttZXRob2R9OjpgICsgY2FsbGJhY2s7XG4gICAgICAgIGNvbnN0IHByb3RvdHlwZSA9IG9wdHMucHJvdG90eXBlO1xuICAgICAgICAvLyBOb3RlOiB0aGUgYHBhdGNoQ2FsbGJhY2tzYCBpcyB1c2VkIGZvciBwYXRjaGluZyB0aGUgYGRvY3VtZW50LnJlZ2lzdGVyRWxlbWVudGAgYW5kXG4gICAgICAgIC8vIGBjdXN0b21FbGVtZW50cy5kZWZpbmVgLiBXZSBleHBsaWNpdGx5IHdyYXAgdGhlIHBhdGNoaW5nIGNvZGUgaW50byB0cnktY2F0Y2ggc2luY2VcbiAgICAgICAgLy8gY2FsbGJhY2tzIG1heSBiZSBhbHJlYWR5IHBhdGNoZWQgYnkgb3RoZXIgd2ViIGNvbXBvbmVudHMgZnJhbWV3b3JrcyAoZS5nLiBMV0MpLCBhbmQgdGhleVxuICAgICAgICAvLyBtYWtlIHRob3NlIHByb3BlcnRpZXMgbm9uLXdyaXRhYmxlLiBUaGlzIG1lYW5zIHRoYXQgcGF0Y2hpbmcgY2FsbGJhY2sgd2lsbCB0aHJvdyBhbiBlcnJvclxuICAgICAgICAvLyBgY2Fubm90IGFzc2lnbiB0byByZWFkLW9ubHkgcHJvcGVydHlgLiBTZWUgdGhpcyBjb2RlIGFzIGFuIGV4YW1wbGU6XG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zYWxlc2ZvcmNlL2x3Yy9ibG9iL21hc3Rlci9wYWNrYWdlcy9AbHdjL2VuZ2luZS1jb3JlL3NyYy9mcmFtZXdvcmsvYmFzZS1icmlkZ2UtZWxlbWVudC50cyNMMTgwLUwxODZcbiAgICAgICAgLy8gV2UgZG9uJ3Qgd2FudCB0byBzdG9wIHRoZSBhcHBsaWNhdGlvbiByZW5kZXJpbmcgaWYgd2UgY291bGRuJ3QgcGF0Y2ggc29tZVxuICAgICAgICAvLyBjYWxsYmFjaywgZS5nLiBgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrYC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAocHJvdG90eXBlLmhhc093blByb3BlcnR5KGNhbGxiYWNrKSkge1xuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IGFwaS5PYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG90eXBlLCBjYWxsYmFjayk7XG4gICAgICAgICAgICBpZiAoZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLnZhbHVlKSB7XG4gICAgICAgICAgICAgIGRlc2NyaXB0b3IudmFsdWUgPSBhcGkud3JhcFdpdGhDdXJyZW50Wm9uZShkZXNjcmlwdG9yLnZhbHVlLCBzb3VyY2UpO1xuICAgICAgICAgICAgICBhcGkuX3JlZGVmaW5lUHJvcGVydHkob3B0cy5wcm90b3R5cGUsIGNhbGxiYWNrLCBkZXNjcmlwdG9yKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvdG90eXBlW2NhbGxiYWNrXSkge1xuICAgICAgICAgICAgICBwcm90b3R5cGVbY2FsbGJhY2tdID0gYXBpLndyYXBXaXRoQ3VycmVudFpvbmUocHJvdG90eXBlW2NhbGxiYWNrXSwgc291cmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKHByb3RvdHlwZVtjYWxsYmFja10pIHtcbiAgICAgICAgICAgIHByb3RvdHlwZVtjYWxsYmFja10gPSBhcGkud3JhcFdpdGhDdXJyZW50Wm9uZShwcm90b3R5cGVbY2FsbGJhY2tdLCBzb3VyY2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgLy8gTm90ZTogd2UgbGVhdmUgdGhlIGNhdGNoIGJsb2NrIGVtcHR5IHNpbmNlIHRoZXJlJ3Mgbm8gd2F5IHRvIGhhbmRsZSB0aGUgZXJyb3IgcmVsYXRlZFxuICAgICAgICAgIC8vIHRvIG5vbi13cml0YWJsZSBwcm9wZXJ0eS5cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBuYXRpdmVEZWxlZ2F0ZS5jYWxsKHRhcmdldCwgbmFtZSwgb3B0cywgb3B0aW9ucyk7XG4gIH07XG4gIGFwaS5hdHRhY2hPcmlnaW5Ub1BhdGNoZWQodGFyZ2V0W21ldGhvZF0sIG5hdGl2ZURlbGVnYXRlKTtcbn1cbmZ1bmN0aW9uIHBhdGNoVXRpbChab25lKSB7XG4gIFpvbmUuX19sb2FkX3BhdGNoKCd1dGlsJywgKGdsb2JhbCwgWm9uZSwgYXBpKSA9PiB7XG4gICAgLy8gQ29sbGVjdCBuYXRpdmUgZXZlbnQgbmFtZXMgYnkgbG9va2luZyBhdCBwcm9wZXJ0aWVzXG4gICAgLy8gb24gdGhlIGdsb2JhbCBuYW1lc3BhY2UsIGUuZy4gJ29uY2xpY2snLlxuICAgIGNvbnN0IGV2ZW50TmFtZXMgPSBnZXRPbkV2ZW50TmFtZXMoZ2xvYmFsKTtcbiAgICBhcGkucGF0Y2hPblByb3BlcnRpZXMgPSBwYXRjaE9uUHJvcGVydGllcztcbiAgICBhcGkucGF0Y2hNZXRob2QgPSBwYXRjaE1ldGhvZDtcbiAgICBhcGkuYmluZEFyZ3VtZW50cyA9IGJpbmRBcmd1bWVudHM7XG4gICAgYXBpLnBhdGNoTWFjcm9UYXNrID0gcGF0Y2hNYWNyb1Rhc2s7XG4gICAgLy8gSW4gZWFybGllciB2ZXJzaW9uIG9mIHpvbmUuanMgKDwwLjkuMCksIHdlIHVzZSBlbnYgbmFtZSBgX196b25lX3N5bWJvbF9fQkxBQ0tfTElTVEVEX0VWRU5UU2BcbiAgICAvLyB0byBkZWZpbmUgd2hpY2ggZXZlbnRzIHdpbGwgbm90IGJlIHBhdGNoZWQgYnkgYFpvbmUuanNgLiBJbiBuZXdlciB2ZXJzaW9uICg+PTAuOS4wKSwgd2VcbiAgICAvLyBjaGFuZ2UgdGhlIGVudiBuYW1lIHRvIGBfX3pvbmVfc3ltYm9sX19VTlBBVENIRURfRVZFTlRTYCB0byBrZWVwIHRoZSBuYW1lIGNvbnNpc3RlbnQgd2l0aFxuICAgIC8vIGFuZ3VsYXIgcmVwby4gVGhlICBgX196b25lX3N5bWJvbF9fQkxBQ0tfTElTVEVEX0VWRU5UU2AgaXMgZGVwcmVjYXRlZCwgYnV0IGl0IGlzIHN0aWxsIGJlXG4gICAgLy8gc3VwcG9ydGVkIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgICBjb25zdCBTWU1CT0xfQkxBQ0tfTElTVEVEX0VWRU5UUyA9IFpvbmUuX19zeW1ib2xfXygnQkxBQ0tfTElTVEVEX0VWRU5UUycpO1xuICAgIGNvbnN0IFNZTUJPTF9VTlBBVENIRURfRVZFTlRTID0gWm9uZS5fX3N5bWJvbF9fKCdVTlBBVENIRURfRVZFTlRTJyk7XG4gICAgaWYgKGdsb2JhbFtTWU1CT0xfVU5QQVRDSEVEX0VWRU5UU10pIHtcbiAgICAgIGdsb2JhbFtTWU1CT0xfQkxBQ0tfTElTVEVEX0VWRU5UU10gPSBnbG9iYWxbU1lNQk9MX1VOUEFUQ0hFRF9FVkVOVFNdO1xuICAgIH1cbiAgICBpZiAoZ2xvYmFsW1NZTUJPTF9CTEFDS19MSVNURURfRVZFTlRTXSkge1xuICAgICAgWm9uZVtTWU1CT0xfQkxBQ0tfTElTVEVEX0VWRU5UU10gPSBab25lW1NZTUJPTF9VTlBBVENIRURfRVZFTlRTXSA9IGdsb2JhbFtTWU1CT0xfQkxBQ0tfTElTVEVEX0VWRU5UU107XG4gICAgfVxuICAgIGFwaS5wYXRjaEV2ZW50UHJvdG90eXBlID0gcGF0Y2hFdmVudFByb3RvdHlwZTtcbiAgICBhcGkucGF0Y2hFdmVudFRhcmdldCA9IHBhdGNoRXZlbnRUYXJnZXQ7XG4gICAgYXBpLmlzSUVPckVkZ2UgPSBpc0lFT3JFZGdlO1xuICAgIGFwaS5PYmplY3REZWZpbmVQcm9wZXJ0eSA9IE9iamVjdERlZmluZVByb3BlcnR5O1xuICAgIGFwaS5PYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICAgYXBpLk9iamVjdENyZWF0ZSA9IE9iamVjdENyZWF0ZTtcbiAgICBhcGkuQXJyYXlTbGljZSA9IEFycmF5U2xpY2U7XG4gICAgYXBpLnBhdGNoQ2xhc3MgPSBwYXRjaENsYXNzO1xuICAgIGFwaS53cmFwV2l0aEN1cnJlbnRab25lID0gd3JhcFdpdGhDdXJyZW50Wm9uZTtcbiAgICBhcGkuZmlsdGVyUHJvcGVydGllcyA9IGZpbHRlclByb3BlcnRpZXM7XG4gICAgYXBpLmF0dGFjaE9yaWdpblRvUGF0Y2hlZCA9IGF0dGFjaE9yaWdpblRvUGF0Y2hlZDtcbiAgICBhcGkuX3JlZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG4gICAgYXBpLnBhdGNoQ2FsbGJhY2tzID0gcGF0Y2hDYWxsYmFja3M7XG4gICAgYXBpLmdldEdsb2JhbE9iamVjdHMgPSAoKSA9PiAoe1xuICAgICAgZ2xvYmFsU291cmNlcyxcbiAgICAgIHpvbmVTeW1ib2xFdmVudE5hbWVzLFxuICAgICAgZXZlbnROYW1lcyxcbiAgICAgIGlzQnJvd3NlcixcbiAgICAgIGlzTWl4LFxuICAgICAgaXNOb2RlLFxuICAgICAgVFJVRV9TVFIsXG4gICAgICBGQUxTRV9TVFIsXG4gICAgICBaT05FX1NZTUJPTF9QUkVGSVgsXG4gICAgICBBRERfRVZFTlRfTElTVEVORVJfU1RSLFxuICAgICAgUkVNT1ZFX0VWRU5UX0xJU1RFTkVSX1NUUlxuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHBhdGNoQ29tbW9uKFpvbmUpIHtcbiAgcGF0Y2hQcm9taXNlKFpvbmUpO1xuICBwYXRjaFRvU3RyaW5nKFpvbmUpO1xuICBwYXRjaFV0aWwoWm9uZSk7XG59XG5jb25zdCBab25lJDEgPSBsb2FkWm9uZSgpO1xucGF0Y2hDb21tb24oWm9uZSQxKTtcbnBhdGNoQnJvd3Nlcihab25lJDEpOyIsIi8qKlxuICogVGhpcyBmaWxlIGluY2x1ZGVzIHBvbHlmaWxscyBuZWVkZWQgYnkgQW5ndWxhciBhbmQgaXMgbG9hZGVkIGJlZm9yZSB0aGUgYXBwLlxuICogWW91IGNhbiBhZGQgeW91ciBvd24gZXh0cmEgcG9seWZpbGxzIHRvIHRoaXMgZmlsZS5cbiAqXG4gKiBUaGlzIGZpbGUgaXMgZGl2aWRlZCBpbnRvIDIgc2VjdGlvbnM6XG4gKiAgIDEuIEJyb3dzZXIgcG9seWZpbGxzLiBUaGVzZSBhcmUgYXBwbGllZCBiZWZvcmUgbG9hZGluZyBab25lSlMgYW5kIGFyZSBzb3J0ZWQgYnkgYnJvd3NlcnMuXG4gKiAgIDIuIEFwcGxpY2F0aW9uIGltcG9ydHMuIEZpbGVzIGltcG9ydGVkIGFmdGVyIFpvbmVKUyB0aGF0IHNob3VsZCBiZSBsb2FkZWQgYmVmb3JlIHlvdXIgbWFpblxuICogICAgICBmaWxlLlxuICpcbiAqIFRoZSBjdXJyZW50IHNldHVwIGlzIGZvciBzby1jYWxsZWQgXCJldmVyZ3JlZW5cIiBicm93c2VyczsgdGhlIGxhc3QgdmVyc2lvbnMgb2YgYnJvd3NlcnMgdGhhdFxuICogYXV0b21hdGljYWxseSB1cGRhdGUgdGhlbXNlbHZlcy4gVGhpcyBpbmNsdWRlcyByZWNlbnQgdmVyc2lvbnMgb2YgU2FmYXJpLCBDaHJvbWUgKGluY2x1ZGluZ1xuICogT3BlcmEpLCBFZGdlIG9uIHRoZSBkZXNrdG9wLCBhbmQgaU9TIGFuZCBDaHJvbWUgb24gbW9iaWxlLlxuICpcbiAqIExlYXJuIG1vcmUgaW4gaHR0cHM6Ly9hbmd1bGFyLmlvL2d1aWRlL2Jyb3dzZXItc3VwcG9ydFxuICovXG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIEJST1dTRVIgUE9MWUZJTExTXG4gKi9cblxuLyoqXG4gKiBCeSBkZWZhdWx0LCB6b25lLmpzIHdpbGwgcGF0Y2ggYWxsIHBvc3NpYmxlIG1hY3JvVGFzayBhbmQgRG9tRXZlbnRzXG4gKiB1c2VyIGNhbiBkaXNhYmxlIHBhcnRzIG9mIG1hY3JvVGFzay9Eb21FdmVudHMgcGF0Y2ggYnkgc2V0dGluZyBmb2xsb3dpbmcgZmxhZ3NcbiAqIGJlY2F1c2UgdGhvc2UgZmxhZ3MgbmVlZCB0byBiZSBzZXQgYmVmb3JlIGB6b25lLmpzYCBiZWluZyBsb2FkZWQsIGFuZCB3ZWJwYWNrXG4gKiB3aWxsIHB1dCBpbXBvcnQgaW4gdGhlIHRvcCBvZiBidW5kbGUsIHNvIHVzZXIgbmVlZCB0byBjcmVhdGUgYSBzZXBhcmF0ZSBmaWxlXG4gKiBpbiB0aGlzIGRpcmVjdG9yeSAoZm9yIGV4YW1wbGU6IHpvbmUtZmxhZ3MudHMpLCBhbmQgcHV0IHRoZSBmb2xsb3dpbmcgZmxhZ3NcbiAqIGludG8gdGhhdCBmaWxlLCBhbmQgdGhlbiBhZGQgdGhlIGZvbGxvd2luZyBjb2RlIGJlZm9yZSBpbXBvcnRpbmcgem9uZS5qcy5cbiAqIGltcG9ydCAnLi96b25lLWZsYWdzJztcbiAqXG4gKiBUaGUgZmxhZ3MgYWxsb3dlZCBpbiB6b25lLWZsYWdzLnRzIGFyZSBsaXN0ZWQgaGVyZS5cbiAqXG4gKiBUaGUgZm9sbG93aW5nIGZsYWdzIHdpbGwgd29yayBmb3IgYWxsIGJyb3dzZXJzLlxuICpcbiAqICh3aW5kb3cgYXMgYW55KS5fX1pvbmVfZGlzYWJsZV9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB0cnVlOyAvLyBkaXNhYmxlIHBhdGNoIHJlcXVlc3RBbmltYXRpb25GcmFtZVxuICogKHdpbmRvdyBhcyBhbnkpLl9fWm9uZV9kaXNhYmxlX29uX3Byb3BlcnR5ID0gdHJ1ZTsgLy8gZGlzYWJsZSBwYXRjaCBvblByb3BlcnR5IHN1Y2ggYXMgb25jbGlja1xuICogKHdpbmRvdyBhcyBhbnkpLl9fem9uZV9zeW1ib2xfX1VOUEFUQ0hFRF9FVkVOVFMgPSBbJ3Njcm9sbCcsICdtb3VzZW1vdmUnXTsgLy8gZGlzYWJsZSBwYXRjaCBzcGVjaWZpZWQgZXZlbnROYW1lc1xuICpcbiAqICBpbiBJRS9FZGdlIGRldmVsb3BlciB0b29scywgdGhlIGFkZEV2ZW50TGlzdGVuZXIgd2lsbCBhbHNvIGJlIHdyYXBwZWQgYnkgem9uZS5qc1xuICogIHdpdGggdGhlIGZvbGxvd2luZyBmbGFnLCBpdCB3aWxsIGJ5cGFzcyBgem9uZS5qc2AgcGF0Y2ggZm9yIElFL0VkZ2VcbiAqXG4gKiAgKHdpbmRvdyBhcyBhbnkpLl9fWm9uZV9lbmFibGVfY3Jvc3NfY29udGV4dF9jaGVjayA9IHRydWU7XG4gKlxuICovXG5cbmltcG9ydCAnLi96b25lLWZsYWdzJ1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBab25lIEpTIGlzIHJlcXVpcmVkIGJ5IGRlZmF1bHQgZm9yIEFuZ3VsYXIgaXRzZWxmLlxuICovXG5pbXBvcnQgJ3pvbmUuanMnIC8vIEluY2x1ZGVkIHdpdGggQW5ndWxhciBDTEkuXG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIEFQUExJQ0FUSU9OIElNUE9SVFNcbiAqL1xuOyh3aW5kb3cgYXMgYW55KS5nbG9iYWwgPSB3aW5kb3dcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQyxPQUFlLGdDQUFnQzs7O0FDRWhELElBQU0sU0FBUztBQUdmLFNBQVMsV0FBVyxNQUFNO0FBQ3hCLFFBQU0sZUFBZSxPQUFPLHNCQUFzQixLQUFLO0FBQ3ZELFNBQU8sZUFBZTtBQUN4QjtBQUNBLFNBQVMsV0FBVztBQUNsQixRQUFNLGNBQWMsT0FBTyxhQUFhO0FBQ3hDLFdBQVMsS0FBSyxNQUFNO0FBQ2xCLG1CQUFlLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxFQUFFLElBQUk7QUFBQSxFQUNoRTtBQUNBLFdBQVMsbUJBQW1CLE1BQU0sT0FBTztBQUN2QyxtQkFBZSxZQUFZLFNBQVMsS0FB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QUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsRUFDRixDQUFDO0FBQ0g7QUFDQSxTQUFTLFlBQVltQixPQUFNO0FBQ3pCLGVBQWFBLEtBQUk7QUFDakIsZ0JBQWNBLEtBQUk7QUFDbEIsWUFBVUEsS0FBSTtBQUNoQjtBQUNBLElBQU0sU0FBUyxTQUFTO0FBQ3hCLFlBQVksTUFBTTtBQUNsQixhQUFhLE1BQU07OztBQ2h1RmpCLE9BQWUsU0FBUzsiLCJuYW1lcyI6WyJzZWxmIiwiZ2xvYmFsIiwiZGVsZWdhdGUiLCJwcm9wIiwiX2dsb2JhbCIsImV2ZW50IiwicGF0Y2hPcHRpb25zIiwicmV0dXJuVGFyZ2V0Iiwid2luZG93IiwiaGFuZGxlIiwiaGFuZGxlSWQiLCJpc1BlcmlvZGljIiwiaXNSZWZyZXNoYWJsZSIsImlzQnJvd3NlciIsImlzTWl4Iiwiem9uZVN5bWJvbEV2ZW50TmFtZXMiLCJUUlVFX1NUUiIsIkZBTFNFX1NUUiIsIlpPTkVfU1lNQk9MX1BSRUZJWCIsImludGVybmFsV2luZG93IiwiWm9uZSIsIm5hbWUiLCJsb2FkVGFza3MiLCJPYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJPYmplY3REZWZpbmVQcm9wZXJ0eSIsIl9fc3ltYm9sX18iLCJ2YWx1ZSJdLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMV19
