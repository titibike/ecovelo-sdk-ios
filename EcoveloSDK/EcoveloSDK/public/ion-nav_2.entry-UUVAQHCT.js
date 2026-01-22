import {
  getTimeGivenProgression
} from "./chunk-H7W7X3R4.js";
import {
  attachComponent
} from "./chunk-3MKGIXIK.js";
import {
  getIonMode
} from "./chunk-TXLH22R2.js";
import {
  LIFECYCLE_DID_LEAVE,
  LIFECYCLE_WILL_LEAVE,
  LIFECYCLE_WILL_UNLOAD,
  lifecycle,
  setPageHidden,
  transition
} from "./chunk-LYXK2PRG.js";
import {
  assert,
  shallowEqualStringMap
} from "./chunk-RZR7LWTQ.js";
import {
  Host,
  config,
  createEvent,
  getElement,
  h,
  printIonWarning,
  registerInstance
} from "./chunk-BFPTXCSH.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js
var VIEW_STATE_NEW = 1;
var VIEW_STATE_ATTACHED = 2;
var VIEW_STATE_DESTROYED = 3;
var ViewController = class {
  constructor(component, params) {
    this.component = component;
    this.params = params;
    this.state = VIEW_STATE_NEW;
  }
  init(container) {
    return __async(this, null, function* () {
      this.state = VIEW_STATE_ATTACHED;
      if (!this.element) {
        const component = this.component;
        this.element = yield attachComponent(this.delegate, container, component, ["ion-page", "ion-page-invisible"], this.params);
      }
    });
  }
  /**
   * DOM WRITE
   */
  _destroy() {
    assert(this.state !== VIEW_STATE_DESTROYED, "view state must be ATTACHED");
    const element = this.element;
    if (element) {
      if (this.delegate) {
        this.delegate.removeViewFromDom(element.parentElement, element);
      } else {
        element.remove();
      }
    }
    this.nav = void 0;
    this.state = VIEW_STATE_DESTROYED;
  }
};
var matches = (view, id, params) => {
  if (!view) {
    return false;
  }
  if (view.component !== id) {
    return false;
  }
  return shallowEqualStringMap(view.params, params);
};
var convertToView = (page, params) => {
  if (!page) {
    return null;
  }
  if (page instanceof ViewController) {
    return page;
  }
  return new ViewController(page, params);
};
var convertToViews = (pages) => {
  return pages.map((page) => {
    if (page instanceof ViewController) {
      return page;
    }
    if ("component" in page) {
      return convertToView(page.component, page.componentProps === null ? void 0 : page.componentProps);
    }
    return convertToView(page, void 0);
  }).filter((v) => v !== null);
};
var navCss = ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;z-index:0}";
var Nav = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionNavWillLoad = createEvent(this, "ionNavWillLoad", 7);
    this.ionNavWillChange = createEvent(this, "ionNavWillChange", 3);
    this.ionNavDidChange = createEvent(this, "ionNavDidChange", 3);
    this.transInstr = [];
    this.gestureOrAnimationInProgress = false;
    this.useRouter = false;
    this.isTransitioning = false;
    this.destroyed = false;
    this.views = [];
    this.didLoad = false;
    this.animated = true;
  }
  swipeGestureChanged() {
    if (this.gesture) {
      this.gesture.enable(this.swipeGesture === true);
    }
  }
  rootChanged() {
    if (this.root === void 0) {
      return;
    }
    if (this.didLoad === false) {
      return;
    }
    if (!this.useRouter) {
      if (this.root !== void 0) {
        this.setRoot(this.root, this.rootParams);
      }
    }
  }
  componentWillLoad() {
    this.useRouter = document.querySelector("ion-router") !== null && this.el.closest("[no-router]") === null;
    if (this.swipeGesture === void 0) {
      const mode = getIonMode(this);
      this.swipeGesture = config.getBoolean("swipeBackEnabled", mode === "ios");
    }
    this.ionNavWillLoad.emit();
  }
  componentDidLoad() {
    return __async(this, null, function* () {
      this.didLoad = true;
      this.rootChanged();
      this.gesture = (yield import("./swipe-back-B2YfOHRM-CGU3J6KL.js")).createSwipeBackGesture(this.el, this.canStart.bind(this), this.onStart.bind(this), this.onMove.bind(this), this.onEnd.bind(this));
      this.swipeGestureChanged();
    });
  }
  connectedCallback() {
    this.destroyed = false;
  }
  disconnectedCallback() {
    for (const view of this.views) {
      lifecycle(view.element, LIFECYCLE_WILL_UNLOAD);
      view._destroy();
    }
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = void 0;
    }
    this.transInstr.length = 0;
    this.views.length = 0;
    this.destroyed = true;
  }
  /**
   * Push a new component onto the current navigation stack. Pass any additional
   * information along as an object. This additional information is accessible
   * through NavParams.
   *
   * @param component The component to push onto the navigation stack.
   * @param componentProps Any properties of the component.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  push(component, componentProps, opts, done) {
    return this.insert(-1, component, componentProps, opts, done);
  }
  /**
   * Inserts a component into the navigation stack at the specified index.
   * This is useful to add a component at any point in the navigation stack.
   *
   * @param insertIndex The index to insert the component at in the stack.
   * @param component The component to insert into the navigation stack.
   * @param componentProps Any properties of the component.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  insert(insertIndex, component, componentProps, opts, done) {
    return this.insertPages(insertIndex, [{
      component,
      componentProps
    }], opts, done);
  }
  /**
   * Inserts an array of components into the navigation stack at the specified index.
   * The last component in the array will become instantiated as a view, and animate
   * in to become the active view.
   *
   * @param insertIndex The index to insert the components at in the stack.
   * @param insertComponents The components to insert into the navigation stack.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  insertPages(insertIndex, insertComponents, opts, done) {
    return this.queueTrns({
      insertStart: insertIndex,
      insertViews: insertComponents,
      opts
    }, done);
  }
  /**
   * Pop a component off of the navigation stack. Navigates back from the current
   * component.
   *
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  pop(opts, done) {
    return this.removeIndex(-1, 1, opts, done);
  }
  /**
   * Pop to a specific index in the navigation stack.
   *
   * @param indexOrViewCtrl The index or view controller to pop to.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  popTo(indexOrViewCtrl, opts, done) {
    const ti = {
      removeStart: -1,
      removeCount: -1,
      opts
    };
    if (typeof indexOrViewCtrl === "object" && indexOrViewCtrl.component) {
      ti.removeView = indexOrViewCtrl;
      ti.removeStart = 1;
    } else if (typeof indexOrViewCtrl === "number") {
      ti.removeStart = indexOrViewCtrl + 1;
    }
    return this.queueTrns(ti, done);
  }
  /**
   * Navigate back to the root of the stack, no matter how far back that is.
   *
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  popToRoot(opts, done) {
    return this.removeIndex(1, -1, opts, done);
  }
  /**
   * Removes a component from the navigation stack at the specified index.
   *
   * @param startIndex The number to begin removal at.
   * @param removeCount The number of components to remove.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  removeIndex(startIndex, removeCount = 1, opts, done) {
    return this.queueTrns({
      removeStart: startIndex,
      removeCount,
      opts
    }, done);
  }
  /**
   * Set the root for the current navigation stack to a component.
   *
   * @param component The component to set as the root of the navigation stack.
   * @param componentProps Any properties of the component.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  setRoot(component, componentProps, opts, done) {
    return this.setPages([{
      component,
      componentProps
    }], opts, done);
  }
  /**
   * Set the views of the current navigation stack and navigate to the last view.
   * By default animations are disabled, but they can be enabled by passing options
   * to the navigation controller. Navigation parameters can also be passed to the
   * individual pages in the array.
   *
   * @param views The list of views to set as the navigation stack.
   * @param opts The navigation options.
   * @param done The transition complete function.
   */
  setPages(views, opts, done) {
    opts !== null && opts !== void 0 ? opts : opts = {};
    if (opts.animated !== true) {
      opts.animated = false;
    }
    return this.queueTrns({
      insertStart: 0,
      insertViews: views,
      removeStart: 0,
      removeCount: -1,
      opts
    }, done);
  }
  /**
   * Called by the router to update the view.
   *
   * @param id The component tag.
   * @param params The component params.
   * @param direction A direction hint.
   * @param animation an AnimationBuilder.
   *
   * @return the status.
   * @internal
   */
  setRouteId(id, params, direction, animation) {
    const active = this.getActiveSync();
    if (matches(active, id, params)) {
      return Promise.resolve({
        changed: false,
        element: active.element
      });
    }
    let resolve;
    const promise = new Promise((r) => resolve = r);
    let finish;
    const commonOpts = {
      updateURL: false,
      viewIsReady: (enteringEl) => {
        let mark;
        const p = new Promise((r) => mark = r);
        resolve({
          changed: true,
          element: enteringEl,
          markVisible: () => __async(this, null, function* () {
            mark();
            yield finish;
          })
        });
        return p;
      }
    };
    if (direction === "root") {
      finish = this.setRoot(id, params, commonOpts);
    } else {
      const viewController = this.views.find((v) => matches(v, id, params));
      if (viewController) {
        finish = this.popTo(viewController, Object.assign(Object.assign({}, commonOpts), {
          direction: "back",
          animationBuilder: animation
        }));
      } else if (direction === "forward") {
        finish = this.push(id, params, Object.assign(Object.assign({}, commonOpts), {
          animationBuilder: animation
        }));
      } else if (direction === "back") {
        finish = this.setRoot(id, params, Object.assign(Object.assign({}, commonOpts), {
          direction: "back",
          animated: true,
          animationBuilder: animation
        }));
      }
    }
    return promise;
  }
  /**
   * Called by <ion-router> to retrieve the current component.
   *
   * @internal
   */
  getRouteId() {
    return __async(this, null, function* () {
      const active = this.getActiveSync();
      if (active) {
        return {
          id: active.element.tagName,
          params: active.params,
          element: active.element
        };
      }
      return void 0;
    });
  }
  /**
   * Get the active view.
   */
  getActive() {
    return __async(this, null, function* () {
      return this.getActiveSync();
    });
  }
  /**
   * Get the view at the specified index.
   *
   * @param index The index of the view.
   */
  getByIndex(index) {
    return __async(this, null, function* () {
      return this.views[index];
    });
  }
  /**
   * Returns `true` if the current view can go back.
   *
   * @param view The view to check.
   */
  canGoBack(view) {
    return __async(this, null, function* () {
      return this.canGoBackSync(view);
    });
  }
  /**
   * Get the previous view.
   *
   * @param view The view to get.
   */
  getPrevious(view) {
    return __async(this, null, function* () {
      return this.getPreviousSync(view);
    });
  }
  /**
   * Returns the number of views in the stack.
   */
  getLength() {
    return __async(this, null, function* () {
      return Promise.resolve(this.views.length);
    });
  }
  getActiveSync() {
    return this.views[this.views.length - 1];
  }
  canGoBackSync(view = this.getActiveSync()) {
    return !!(view && this.getPreviousSync(view));
  }
  getPreviousSync(view = this.getActiveSync()) {
    if (!view) {
      return void 0;
    }
    const views = this.views;
    const index = views.indexOf(view);
    return index > 0 ? views[index - 1] : void 0;
  }
  /**
   * Adds a navigation stack change to the queue and schedules it to run.
   *
   * @returns Whether the transition succeeds.
   */
  queueTrns(ti, done) {
    return __async(this, null, function* () {
      var _a, _b;
      if (this.isTransitioning && ((_a = ti.opts) === null || _a === void 0 ? void 0 : _a.skipIfBusy)) {
        return false;
      }
      const promise = new Promise((resolve, reject) => {
        ti.resolve = resolve;
        ti.reject = reject;
      });
      ti.done = done;
      if (ti.opts && ti.opts.updateURL !== false && this.useRouter) {
        const router = document.querySelector("ion-router");
        if (router) {
          const canTransition = yield router.canTransition();
          if (canTransition === false) {
            return false;
          }
          if (typeof canTransition === "string") {
            router.push(canTransition, ti.opts.direction || "back");
            return false;
          }
        }
      }
      if (((_b = ti.insertViews) === null || _b === void 0 ? void 0 : _b.length) === 0) {
        ti.insertViews = void 0;
      }
      this.transInstr.push(ti);
      this.nextTrns();
      return promise;
    });
  }
  success(result, ti) {
    if (this.destroyed) {
      this.fireError("nav controller was destroyed", ti);
      return;
    }
    if (ti.done) {
      ti.done(result.hasCompleted, result.requiresTransition, result.enteringView, result.leavingView, result.direction);
    }
    ti.resolve(result.hasCompleted);
    if (ti.opts.updateURL !== false && this.useRouter) {
      const router = document.querySelector("ion-router");
      if (router) {
        const direction = result.direction === "back" ? "back" : "forward";
        router.navChanged(direction);
      }
    }
  }
  failed(rejectReason, ti) {
    if (this.destroyed) {
      this.fireError("nav controller was destroyed", ti);
      return;
    }
    this.transInstr.length = 0;
    this.fireError(rejectReason, ti);
  }
  fireError(rejectReason, ti) {
    if (ti.done) {
      ti.done(false, false, rejectReason);
    }
    if (ti.reject && !this.destroyed) {
      ti.reject(rejectReason);
    } else {
      ti.resolve(false);
    }
  }
  /**
   * Consumes the next transition in the queue.
   *
   * @returns whether the transition is executed.
   */
  nextTrns() {
    if (this.isTransitioning) {
      return false;
    }
    const ti = this.transInstr.shift();
    if (!ti) {
      return false;
    }
    this.runTransition(ti);
    return true;
  }
  /** Executes all the transition instruction from the queue. */
  runTransition(ti) {
    return __async(this, null, function* () {
      try {
        this.ionNavWillChange.emit();
        this.isTransitioning = true;
        this.prepareTI(ti);
        const leavingView = this.getActiveSync();
        const enteringView = this.getEnteringView(ti, leavingView);
        if (!leavingView && !enteringView) {
          throw new Error("no views in the stack to be removed");
        }
        if (enteringView && enteringView.state === VIEW_STATE_NEW) {
          yield enteringView.init(this.el);
        }
        this.postViewInit(enteringView, leavingView, ti);
        const requiresTransition = (ti.enteringRequiresTransition || ti.leavingRequiresTransition) && enteringView !== leavingView;
        if (requiresTransition && ti.opts && leavingView) {
          const isBackDirection = ti.opts.direction === "back";
          if (isBackDirection) {
            ti.opts.animationBuilder = ti.opts.animationBuilder || (enteringView === null || enteringView === void 0 ? void 0 : enteringView.animationBuilder);
          }
          leavingView.animationBuilder = ti.opts.animationBuilder;
        }
        let result;
        if (requiresTransition) {
          result = yield this.transition(enteringView, leavingView, ti);
        } else {
          result = {
            hasCompleted: true,
            requiresTransition: false
          };
        }
        this.success(result, ti);
        this.ionNavDidChange.emit();
      } catch (rejectReason) {
        this.failed(rejectReason, ti);
      }
      this.isTransitioning = false;
      this.nextTrns();
    });
  }
  prepareTI(ti) {
    var _a, _b;
    var _c;
    const viewsLength = this.views.length;
    (_a = ti.opts) !== null && _a !== void 0 ? _a : ti.opts = {};
    (_b = (_c = ti.opts).delegate) !== null && _b !== void 0 ? _b : _c.delegate = this.delegate;
    if (ti.removeView !== void 0) {
      assert(ti.removeStart !== void 0, "removeView needs removeStart");
      assert(ti.removeCount !== void 0, "removeView needs removeCount");
      const index = this.views.indexOf(ti.removeView);
      if (index < 0) {
        throw new Error("removeView was not found");
      }
      ti.removeStart += index;
    }
    if (ti.removeStart !== void 0) {
      if (ti.removeStart < 0) {
        ti.removeStart = viewsLength - 1;
      }
      if (ti.removeCount < 0) {
        ti.removeCount = viewsLength - ti.removeStart;
      }
      ti.leavingRequiresTransition = ti.removeCount > 0 && ti.removeStart + ti.removeCount === viewsLength;
    }
    if (ti.insertViews) {
      if (ti.insertStart < 0 || ti.insertStart > viewsLength) {
        ti.insertStart = viewsLength;
      }
      ti.enteringRequiresTransition = ti.insertStart === viewsLength;
    }
    const insertViews = ti.insertViews;
    if (!insertViews) {
      return;
    }
    assert(insertViews.length > 0, "length can not be zero");
    const viewControllers = convertToViews(insertViews);
    if (viewControllers.length === 0) {
      throw new Error("invalid views to insert");
    }
    for (const view of viewControllers) {
      view.delegate = ti.opts.delegate;
      const nav = view.nav;
      if (nav && nav !== this) {
        throw new Error("inserted view was already inserted");
      }
      if (view.state === VIEW_STATE_DESTROYED) {
        throw new Error("inserted view was already destroyed");
      }
    }
    ti.insertViews = viewControllers;
  }
  /**
   * Returns the view that will be entered considering the transition instructions.
   *
   * @param ti The instructions.
   * @param leavingView The view being left or undefined if none.
   *
   * @returns The view that will be entered, undefined if none.
   */
  getEnteringView(ti, leavingView) {
    const insertViews = ti.insertViews;
    if (insertViews !== void 0) {
      return insertViews[insertViews.length - 1];
    }
    const removeStart = ti.removeStart;
    if (removeStart !== void 0) {
      const views = this.views;
      const removeEnd = removeStart + ti.removeCount;
      for (let i = views.length - 1; i >= 0; i--) {
        const view = views[i];
        if ((i < removeStart || i >= removeEnd) && view !== leavingView) {
          return view;
        }
      }
    }
    return void 0;
  }
  /**
   * Adds and Removes the views from the navigation stack.
   *
   * @param enteringView The view being entered.
   * @param leavingView The view being left.
   * @param ti The instructions.
   */
  postViewInit(enteringView, leavingView, ti) {
    var _a, _b, _c;
    assert(leavingView || enteringView, "Both leavingView and enteringView are null");
    assert(ti.resolve, "resolve must be valid");
    assert(ti.reject, "reject must be valid");
    const opts = ti.opts;
    const {
      insertViews,
      removeStart,
      removeCount
    } = ti;
    let destroyQueue;
    if (removeStart !== void 0 && removeCount !== void 0) {
      assert(removeStart >= 0, "removeStart can not be negative");
      assert(removeCount >= 0, "removeCount can not be negative");
      destroyQueue = [];
      for (let i = removeStart; i < removeStart + removeCount; i++) {
        const view = this.views[i];
        if (view !== void 0 && view !== enteringView && view !== leavingView) {
          destroyQueue.push(view);
        }
      }
      (_a = opts.direction) !== null && _a !== void 0 ? _a : opts.direction = "back";
    }
    const finalNumViews = this.views.length + ((_b = insertViews === null || insertViews === void 0 ? void 0 : insertViews.length) !== null && _b !== void 0 ? _b : 0) - (removeCount !== null && removeCount !== void 0 ? removeCount : 0);
    assert(finalNumViews >= 0, "final balance can not be negative");
    if (finalNumViews === 0) {
      printIonWarning(`[ion-nav] - You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.`, this, this.el);
      throw new Error("navigation stack needs at least one root page");
    }
    if (insertViews) {
      let insertIndex = ti.insertStart;
      for (const view of insertViews) {
        this.insertViewAt(view, insertIndex);
        insertIndex++;
      }
      if (ti.enteringRequiresTransition) {
        (_c = opts.direction) !== null && _c !== void 0 ? _c : opts.direction = "forward";
      }
    }
    if (destroyQueue && destroyQueue.length > 0) {
      for (const view of destroyQueue) {
        lifecycle(view.element, LIFECYCLE_WILL_LEAVE);
        lifecycle(view.element, LIFECYCLE_DID_LEAVE);
        lifecycle(view.element, LIFECYCLE_WILL_UNLOAD);
      }
      for (const view of destroyQueue) {
        this.destroyView(view);
      }
    }
  }
  transition(enteringView, leavingView, ti) {
    return __async(this, null, function* () {
      const opts = ti.opts;
      const progressCallback = opts.progressAnimation ? (ani) => {
        if (ani !== void 0 && !this.gestureOrAnimationInProgress) {
          this.gestureOrAnimationInProgress = true;
          ani.onFinish(() => {
            this.gestureOrAnimationInProgress = false;
          }, {
            oneTimeCallback: true
          });
          ani.progressEnd(0, 0, 0);
        } else {
          this.sbAni = ani;
        }
      } : void 0;
      const mode = getIonMode(this);
      const enteringEl = enteringView.element;
      const leavingEl = leavingView && leavingView.element;
      const animationOpts = Object.assign(Object.assign({
        mode,
        showGoBack: this.canGoBackSync(enteringView),
        baseEl: this.el,
        progressCallback,
        animated: this.animated && config.getBoolean("animated", true),
        enteringEl,
        leavingEl
      }, opts), {
        animationBuilder: opts.animationBuilder || this.animation || config.get("navAnimation")
      });
      const {
        hasCompleted
      } = yield transition(animationOpts);
      return this.transitionFinish(hasCompleted, enteringView, leavingView, opts);
    });
  }
  transitionFinish(hasCompleted, enteringView, leavingView, opts) {
    const activeView = hasCompleted ? enteringView : leavingView;
    if (activeView) {
      this.unmountInactiveViews(activeView);
    }
    return {
      hasCompleted,
      requiresTransition: true,
      enteringView,
      leavingView,
      direction: opts.direction
    };
  }
  /**
   * Inserts a view at the specified index.
   *
   * When the view already is in the stack it will be moved to the new position.
   *
   * @param view The view to insert.
   * @param index The index where to insert the view.
   */
  insertViewAt(view, index) {
    const views = this.views;
    const existingIndex = views.indexOf(view);
    if (existingIndex > -1) {
      assert(view.nav === this, "view is not part of the nav");
      views.splice(existingIndex, 1);
      views.splice(index, 0, view);
    } else {
      assert(!view.nav, "nav is used");
      view.nav = this;
      views.splice(index, 0, view);
    }
  }
  /**
   * Removes a view from the stack.
   *
   * @param view The view to remove.
   */
  removeView(view) {
    assert(view.state === VIEW_STATE_ATTACHED || view.state === VIEW_STATE_DESTROYED, "view state should be loaded or destroyed");
    const views = this.views;
    const index = views.indexOf(view);
    assert(index > -1, "view must be part of the stack");
    if (index >= 0) {
      views.splice(index, 1);
    }
  }
  destroyView(view) {
    view._destroy();
    this.removeView(view);
  }
  /**
   * Unmounts all inactive views after the specified active view.
   *
   * DOM WRITE
   *
   * @param activeView The view that is actively visible in the stack. Used to calculate which views to unmount.
   */
  unmountInactiveViews(activeView) {
    if (this.destroyed) {
      return;
    }
    const views = this.views;
    const activeViewIndex = views.indexOf(activeView);
    for (let i = views.length - 1; i >= 0; i--) {
      const view = views[i];
      const element = view.element;
      if (element) {
        if (i > activeViewIndex) {
          lifecycle(element, LIFECYCLE_WILL_UNLOAD);
          this.destroyView(view);
        } else if (i < activeViewIndex) {
          setPageHidden(element, true);
        }
      }
    }
  }
  canStart() {
    return !this.gestureOrAnimationInProgress && !!this.swipeGesture && !this.isTransitioning && this.transInstr.length === 0 && this.canGoBackSync();
  }
  onStart() {
    this.gestureOrAnimationInProgress = true;
    this.pop({
      direction: "back",
      progressAnimation: true
    });
  }
  onMove(stepValue) {
    if (this.sbAni) {
      this.sbAni.progressStep(stepValue);
    }
  }
  onEnd(shouldComplete, stepValue, dur) {
    if (this.sbAni) {
      this.sbAni.onFinish(() => {
        this.gestureOrAnimationInProgress = false;
      }, {
        oneTimeCallback: true
      });
      let newStepValue = shouldComplete ? -1e-3 : 1e-3;
      if (!shouldComplete) {
        this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)");
        newStepValue += getTimeGivenProgression([0, 0], [1, 0], [0.68, 0.28], [1, 1], stepValue)[0];
      } else {
        newStepValue += getTimeGivenProgression([0, 0], [0.32, 0.72], [0, 1], [1, 1], stepValue)[0];
      }
      this.sbAni.progressEnd(shouldComplete ? 1 : 0, newStepValue, dur);
    } else {
      this.gestureOrAnimationInProgress = false;
    }
  }
  render() {
    return h("slot", {
      key: "8067c9835d255daec61f33dba200fd3a6ff839a0"
    });
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "swipeGesture": ["swipeGestureChanged"],
      "root": ["rootChanged"]
    };
  }
};
Nav.style = navCss;
var navLink = (el, routerDirection, component, componentProps, routerAnimation) => {
  const nav = el.closest("ion-nav");
  if (nav) {
    if (routerDirection === "forward") {
      if (component !== void 0) {
        return nav.push(component, componentProps, {
          skipIfBusy: true,
          animationBuilder: routerAnimation
        });
      }
    } else if (routerDirection === "root") {
      if (component !== void 0) {
        return nav.setRoot(component, componentProps, {
          skipIfBusy: true,
          animationBuilder: routerAnimation
        });
      }
    } else if (routerDirection === "back") {
      return nav.pop({
        skipIfBusy: true,
        animationBuilder: routerAnimation
      });
    }
  }
  return Promise.resolve(false);
};
var NavLink = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.routerDirection = "forward";
    this.onClick = () => {
      return navLink(this.el, this.routerDirection, this.component, this.componentProps, this.routerAnimation);
    };
  }
  render() {
    return h(Host, {
      key: "6dbb1ad4f351e9215375aac11ab9b53762e07a08",
      onClick: this.onClick
    });
  }
  get el() {
    return getElement(this);
  }
};
export {
  Nav as ion_nav,
  NavLink as ion_nav_link
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-nav_2.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tbmF2XzIuZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBjcmVhdGVFdmVudCwgZSBhcyBjb25maWcsIGYgYXMgcHJpbnRJb25XYXJuaW5nLCBoLCBnIGFzIGdldEVsZW1lbnQsIGQgYXMgSG9zdCB9IGZyb20gJy4vaW5kZXgtNER4WTZfZ0cuanMnO1xuaW1wb3J0IHsgZyBhcyBnZXRUaW1lR2l2ZW5Qcm9ncmVzc2lvbiB9IGZyb20gJy4vY3ViaWMtYmV6aWVyLWhIbVlMT2ZFLmpzJztcbmltcG9ydCB7IHMgYXMgc2hhbGxvd0VxdWFsU3RyaW5nTWFwLCBsIGFzIGFzc2VydCB9IGZyb20gJy4vaGVscGVycy04S1NRUUdReS5qcyc7XG5pbXBvcnQgeyBsIGFzIGxpZmVjeWNsZSwgdCBhcyB0cmFuc2l0aW9uLCBzIGFzIHNldFBhZ2VIaWRkZW4sIGQgYXMgTElGRUNZQ0xFX1dJTExfVU5MT0FELCBiIGFzIExJRkVDWUNMRV9XSUxMX0xFQVZFLCBjIGFzIExJRkVDWUNMRV9ESURfTEVBVkUgfSBmcm9tICcuL2luZGV4LURwN0dYSDF6LmpzJztcbmltcG9ydCB7IGIgYXMgZ2V0SW9uTW9kZSB9IGZyb20gJy4vaW9uaWMtZ2xvYmFsLUNUU3l1ZmhGLmpzJztcbmltcG9ydCB7IGEgYXMgYXR0YWNoQ29tcG9uZW50IH0gZnJvbSAnLi9mcmFtZXdvcmstZGVsZWdhdGUtQkxFQmdIMDYuanMnO1xuY29uc3QgVklFV19TVEFURV9ORVcgPSAxO1xuY29uc3QgVklFV19TVEFURV9BVFRBQ0hFRCA9IDI7XG5jb25zdCBWSUVXX1NUQVRFX0RFU1RST1lFRCA9IDM7XG4vLyBUT0RPKEZXLTI4MzIpOiB0eXBlc1xuY2xhc3MgVmlld0NvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3Rvcihjb21wb25lbnQsIHBhcmFtcykge1xuICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICAgIHRoaXMuc3RhdGUgPSBWSUVXX1NUQVRFX05FVztcbiAgfVxuICBhc3luYyBpbml0KGNvbnRhaW5lcikge1xuICAgIHRoaXMuc3RhdGUgPSBWSUVXX1NUQVRFX0FUVEFDSEVEO1xuICAgIGlmICghdGhpcy5lbGVtZW50KSB7XG4gICAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudDtcbiAgICAgIHRoaXMuZWxlbWVudCA9IGF3YWl0IGF0dGFjaENvbXBvbmVudCh0aGlzLmRlbGVnYXRlLCBjb250YWluZXIsIGNvbXBvbmVudCwgWydpb24tcGFnZScsICdpb24tcGFnZS1pbnZpc2libGUnXSwgdGhpcy5wYXJhbXMpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogRE9NIFdSSVRFXG4gICAqL1xuICBfZGVzdHJveSgpIHtcbiAgICBhc3NlcnQodGhpcy5zdGF0ZSAhPT0gVklFV19TVEFURV9ERVNUUk9ZRUQsICd2aWV3IHN0YXRlIG11c3QgYmUgQVRUQUNIRUQnKTtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50O1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBpZiAodGhpcy5kZWxlZ2F0ZSkge1xuICAgICAgICB0aGlzLmRlbGVnYXRlLnJlbW92ZVZpZXdGcm9tRG9tKGVsZW1lbnQucGFyZW50RWxlbWVudCwgZWxlbWVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm5hdiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnN0YXRlID0gVklFV19TVEFURV9ERVNUUk9ZRUQ7XG4gIH1cbn1cbmNvbnN0IG1hdGNoZXMgPSAodmlldywgaWQsIHBhcmFtcykgPT4ge1xuICBpZiAoIXZpZXcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHZpZXcuY29tcG9uZW50ICE9PSBpZCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gc2hhbGxvd0VxdWFsU3RyaW5nTWFwKHZpZXcucGFyYW1zLCBwYXJhbXMpO1xufTtcbmNvbnN0IGNvbnZlcnRUb1ZpZXcgPSAocGFnZSwgcGFyYW1zKSA9PiB7XG4gIGlmICghcGFnZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmIChwYWdlIGluc3RhbmNlb2YgVmlld0NvbnRyb2xsZXIpIHtcbiAgICByZXR1cm4gcGFnZTtcbiAgfVxuICByZXR1cm4gbmV3IFZpZXdDb250cm9sbGVyKHBhZ2UsIHBhcmFtcyk7XG59O1xuY29uc3QgY29udmVydFRvVmlld3MgPSBwYWdlcyA9PiB7XG4gIHJldHVybiBwYWdlcy5tYXAocGFnZSA9PiB7XG4gICAgaWYgKHBhZ2UgaW5zdGFuY2VvZiBWaWV3Q29udHJvbGxlcikge1xuICAgICAgcmV0dXJuIHBhZ2U7XG4gICAgfVxuICAgIGlmICgnY29tcG9uZW50JyBpbiBwYWdlKSB7XG4gICAgICByZXR1cm4gY29udmVydFRvVmlldyhwYWdlLmNvbXBvbmVudCwgcGFnZS5jb21wb25lbnRQcm9wcyA9PT0gbnVsbCA/IHVuZGVmaW5lZCA6IHBhZ2UuY29tcG9uZW50UHJvcHMpO1xuICAgIH1cbiAgICByZXR1cm4gY29udmVydFRvVmlldyhwYWdlLCB1bmRlZmluZWQpO1xuICB9KS5maWx0ZXIodiA9PiB2ICE9PSBudWxsKTtcbn07XG5jb25zdCBuYXZDc3MgPSBcIjpob3N0e2xlZnQ6MDtyaWdodDowO3RvcDowO2JvdHRvbTowO3Bvc2l0aW9uOmFic29sdXRlO2NvbnRhaW46bGF5b3V0IHNpemUgc3R5bGU7ei1pbmRleDowfVwiO1xuY29uc3QgTmF2ID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmlvbk5hdldpbGxMb2FkID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25OYXZXaWxsTG9hZFwiLCA3KTtcbiAgICB0aGlzLmlvbk5hdldpbGxDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbk5hdldpbGxDaGFuZ2VcIiwgMyk7XG4gICAgdGhpcy5pb25OYXZEaWRDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbk5hdkRpZENoYW5nZVwiLCAzKTtcbiAgICB0aGlzLnRyYW5zSW5zdHIgPSBbXTtcbiAgICB0aGlzLmdlc3R1cmVPckFuaW1hdGlvbkluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICB0aGlzLnVzZVJvdXRlciA9IGZhbHNlO1xuICAgIHRoaXMuaXNUcmFuc2l0aW9uaW5nID0gZmFsc2U7XG4gICAgdGhpcy5kZXN0cm95ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnZpZXdzID0gW107XG4gICAgdGhpcy5kaWRMb2FkID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogSWYgYHRydWVgLCB0aGUgbmF2IHNob3VsZCBhbmltYXRlIHRoZSB0cmFuc2l0aW9uIG9mIGNvbXBvbmVudHMuXG4gICAgICovXG4gICAgdGhpcy5hbmltYXRlZCA9IHRydWU7XG4gIH1cbiAgc3dpcGVHZXN0dXJlQ2hhbmdlZCgpIHtcbiAgICBpZiAodGhpcy5nZXN0dXJlKSB7XG4gICAgICB0aGlzLmdlc3R1cmUuZW5hYmxlKHRoaXMuc3dpcGVHZXN0dXJlID09PSB0cnVlKTtcbiAgICB9XG4gIH1cbiAgcm9vdENoYW5nZWQoKSB7XG4gICAgaWYgKHRoaXMucm9vdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmRpZExvYWQgPT09IGZhbHNlKSB7XG4gICAgICAvKipcbiAgICAgICAqIElmIHRoZSBjb21wb25lbnQgaGFzIG5vdCBsb2FkZWQgeWV0LCB3ZSBjYW4gc2tpcCBzZXR0aW5nIHVwIHRoZSByb290IGNvbXBvbmVudC5cbiAgICAgICAqIEl0IHdpbGwgYmUgY2FsbGVkIHdoZW4gYGNvbXBvbmVudERpZExvYWRgIGZpcmVzLlxuICAgICAgICovXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy51c2VSb3V0ZXIpIHtcbiAgICAgIGlmICh0aGlzLnJvb3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnNldFJvb3QodGhpcy5yb290LCB0aGlzLnJvb3RQYXJhbXMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICB0aGlzLnVzZVJvdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1yb3V0ZXInKSAhPT0gbnVsbCAmJiB0aGlzLmVsLmNsb3Nlc3QoJ1tuby1yb3V0ZXJdJykgPT09IG51bGw7XG4gICAgaWYgKHRoaXMuc3dpcGVHZXN0dXJlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgdGhpcy5zd2lwZUdlc3R1cmUgPSBjb25maWcuZ2V0Qm9vbGVhbignc3dpcGVCYWNrRW5hYmxlZCcsIG1vZGUgPT09ICdpb3MnKTtcbiAgICB9XG4gICAgdGhpcy5pb25OYXZXaWxsTG9hZC5lbWl0KCk7XG4gIH1cbiAgYXN5bmMgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICAvLyBXZSB3YW50IHRvIHNldCB0aGlzIGZsYWcgYmVmb3JlIGFueSB3YXRjaCBjYWxsYmFja3MgYXJlIG1hbnVhbGx5IGNhbGxlZFxuICAgIHRoaXMuZGlkTG9hZCA9IHRydWU7XG4gICAgdGhpcy5yb290Q2hhbmdlZCgpO1xuICAgIHRoaXMuZ2VzdHVyZSA9IChhd2FpdCBpbXBvcnQoJy4vc3dpcGUtYmFjay1CMllmT0hSTS5qcycpKS5jcmVhdGVTd2lwZUJhY2tHZXN0dXJlKHRoaXMuZWwsIHRoaXMuY2FuU3RhcnQuYmluZCh0aGlzKSwgdGhpcy5vblN0YXJ0LmJpbmQodGhpcyksIHRoaXMub25Nb3ZlLmJpbmQodGhpcyksIHRoaXMub25FbmQuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5zd2lwZUdlc3R1cmVDaGFuZ2VkKCk7XG4gIH1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5kZXN0cm95ZWQgPSBmYWxzZTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBmb3IgKGNvbnN0IHZpZXcgb2YgdGhpcy52aWV3cykge1xuICAgICAgbGlmZWN5Y2xlKHZpZXcuZWxlbWVudCwgTElGRUNZQ0xFX1dJTExfVU5MT0FEKTtcbiAgICAgIHZpZXcuX2Rlc3Ryb3koKTtcbiAgICB9XG4gICAgLy8gUmVsZWFzZSBzd2lwZSBiYWNrIGdlc3R1cmUgYW5kIHRyYW5zaXRpb24uXG4gICAgaWYgKHRoaXMuZ2VzdHVyZSkge1xuICAgICAgdGhpcy5nZXN0dXJlLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuZ2VzdHVyZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgdGhpcy50cmFuc0luc3RyLmxlbmd0aCA9IDA7XG4gICAgdGhpcy52aWV3cy5sZW5ndGggPSAwO1xuICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcbiAgfVxuICAvKipcbiAgICogUHVzaCBhIG5ldyBjb21wb25lbnQgb250byB0aGUgY3VycmVudCBuYXZpZ2F0aW9uIHN0YWNrLiBQYXNzIGFueSBhZGRpdGlvbmFsXG4gICAqIGluZm9ybWF0aW9uIGFsb25nIGFzIGFuIG9iamVjdC4gVGhpcyBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIGlzIGFjY2Vzc2libGVcbiAgICogdGhyb3VnaCBOYXZQYXJhbXMuXG4gICAqXG4gICAqIEBwYXJhbSBjb21wb25lbnQgVGhlIGNvbXBvbmVudCB0byBwdXNoIG9udG8gdGhlIG5hdmlnYXRpb24gc3RhY2suXG4gICAqIEBwYXJhbSBjb21wb25lbnRQcm9wcyBBbnkgcHJvcGVydGllcyBvZiB0aGUgY29tcG9uZW50LlxuICAgKiBAcGFyYW0gb3B0cyBUaGUgbmF2aWdhdGlvbiBvcHRpb25zLlxuICAgKiBAcGFyYW0gZG9uZSBUaGUgdHJhbnNpdGlvbiBjb21wbGV0ZSBmdW5jdGlvbi5cbiAgICovXG4gIHB1c2goY29tcG9uZW50LCBjb21wb25lbnRQcm9wcywgb3B0cywgZG9uZSkge1xuICAgIHJldHVybiB0aGlzLmluc2VydCgtMSwgY29tcG9uZW50LCBjb21wb25lbnRQcm9wcywgb3B0cywgZG9uZSk7XG4gIH1cbiAgLyoqXG4gICAqIEluc2VydHMgYSBjb21wb25lbnQgaW50byB0aGUgbmF2aWdhdGlvbiBzdGFjayBhdCB0aGUgc3BlY2lmaWVkIGluZGV4LlxuICAgKiBUaGlzIGlzIHVzZWZ1bCB0byBhZGQgYSBjb21wb25lbnQgYXQgYW55IHBvaW50IGluIHRoZSBuYXZpZ2F0aW9uIHN0YWNrLlxuICAgKlxuICAgKiBAcGFyYW0gaW5zZXJ0SW5kZXggVGhlIGluZGV4IHRvIGluc2VydCB0aGUgY29tcG9uZW50IGF0IGluIHRoZSBzdGFjay5cbiAgICogQHBhcmFtIGNvbXBvbmVudCBUaGUgY29tcG9uZW50IHRvIGluc2VydCBpbnRvIHRoZSBuYXZpZ2F0aW9uIHN0YWNrLlxuICAgKiBAcGFyYW0gY29tcG9uZW50UHJvcHMgQW55IHByb3BlcnRpZXMgb2YgdGhlIGNvbXBvbmVudC5cbiAgICogQHBhcmFtIG9wdHMgVGhlIG5hdmlnYXRpb24gb3B0aW9ucy5cbiAgICogQHBhcmFtIGRvbmUgVGhlIHRyYW5zaXRpb24gY29tcGxldGUgZnVuY3Rpb24uXG4gICAqL1xuICBpbnNlcnQoaW5zZXJ0SW5kZXgsIGNvbXBvbmVudCwgY29tcG9uZW50UHJvcHMsIG9wdHMsIGRvbmUpIHtcbiAgICByZXR1cm4gdGhpcy5pbnNlcnRQYWdlcyhpbnNlcnRJbmRleCwgW3tcbiAgICAgIGNvbXBvbmVudCxcbiAgICAgIGNvbXBvbmVudFByb3BzXG4gICAgfV0sIG9wdHMsIGRvbmUpO1xuICB9XG4gIC8qKlxuICAgKiBJbnNlcnRzIGFuIGFycmF5IG9mIGNvbXBvbmVudHMgaW50byB0aGUgbmF2aWdhdGlvbiBzdGFjayBhdCB0aGUgc3BlY2lmaWVkIGluZGV4LlxuICAgKiBUaGUgbGFzdCBjb21wb25lbnQgaW4gdGhlIGFycmF5IHdpbGwgYmVjb21lIGluc3RhbnRpYXRlZCBhcyBhIHZpZXcsIGFuZCBhbmltYXRlXG4gICAqIGluIHRvIGJlY29tZSB0aGUgYWN0aXZlIHZpZXcuXG4gICAqXG4gICAqIEBwYXJhbSBpbnNlcnRJbmRleCBUaGUgaW5kZXggdG8gaW5zZXJ0IHRoZSBjb21wb25lbnRzIGF0IGluIHRoZSBzdGFjay5cbiAgICogQHBhcmFtIGluc2VydENvbXBvbmVudHMgVGhlIGNvbXBvbmVudHMgdG8gaW5zZXJ0IGludG8gdGhlIG5hdmlnYXRpb24gc3RhY2suXG4gICAqIEBwYXJhbSBvcHRzIFRoZSBuYXZpZ2F0aW9uIG9wdGlvbnMuXG4gICAqIEBwYXJhbSBkb25lIFRoZSB0cmFuc2l0aW9uIGNvbXBsZXRlIGZ1bmN0aW9uLlxuICAgKi9cbiAgaW5zZXJ0UGFnZXMoaW5zZXJ0SW5kZXgsIGluc2VydENvbXBvbmVudHMsIG9wdHMsIGRvbmUpIHtcbiAgICByZXR1cm4gdGhpcy5xdWV1ZVRybnMoe1xuICAgICAgaW5zZXJ0U3RhcnQ6IGluc2VydEluZGV4LFxuICAgICAgaW5zZXJ0Vmlld3M6IGluc2VydENvbXBvbmVudHMsXG4gICAgICBvcHRzXG4gICAgfSwgZG9uZSk7XG4gIH1cbiAgLyoqXG4gICAqIFBvcCBhIGNvbXBvbmVudCBvZmYgb2YgdGhlIG5hdmlnYXRpb24gc3RhY2suIE5hdmlnYXRlcyBiYWNrIGZyb20gdGhlIGN1cnJlbnRcbiAgICogY29tcG9uZW50LlxuICAgKlxuICAgKiBAcGFyYW0gb3B0cyBUaGUgbmF2aWdhdGlvbiBvcHRpb25zLlxuICAgKiBAcGFyYW0gZG9uZSBUaGUgdHJhbnNpdGlvbiBjb21wbGV0ZSBmdW5jdGlvbi5cbiAgICovXG4gIHBvcChvcHRzLCBkb25lKSB7XG4gICAgcmV0dXJuIHRoaXMucmVtb3ZlSW5kZXgoLTEsIDEsIG9wdHMsIGRvbmUpO1xuICB9XG4gIC8qKlxuICAgKiBQb3AgdG8gYSBzcGVjaWZpYyBpbmRleCBpbiB0aGUgbmF2aWdhdGlvbiBzdGFjay5cbiAgICpcbiAgICogQHBhcmFtIGluZGV4T3JWaWV3Q3RybCBUaGUgaW5kZXggb3IgdmlldyBjb250cm9sbGVyIHRvIHBvcCB0by5cbiAgICogQHBhcmFtIG9wdHMgVGhlIG5hdmlnYXRpb24gb3B0aW9ucy5cbiAgICogQHBhcmFtIGRvbmUgVGhlIHRyYW5zaXRpb24gY29tcGxldGUgZnVuY3Rpb24uXG4gICAqL1xuICBwb3BUbyhpbmRleE9yVmlld0N0cmwsIG9wdHMsIGRvbmUpIHtcbiAgICBjb25zdCB0aSA9IHtcbiAgICAgIHJlbW92ZVN0YXJ0OiAtMSxcbiAgICAgIHJlbW92ZUNvdW50OiAtMSxcbiAgICAgIG9wdHNcbiAgICB9O1xuICAgIGlmICh0eXBlb2YgaW5kZXhPclZpZXdDdHJsID09PSAnb2JqZWN0JyAmJiBpbmRleE9yVmlld0N0cmwuY29tcG9uZW50KSB7XG4gICAgICB0aS5yZW1vdmVWaWV3ID0gaW5kZXhPclZpZXdDdHJsO1xuICAgICAgdGkucmVtb3ZlU3RhcnQgPSAxO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGluZGV4T3JWaWV3Q3RybCA9PT0gJ251bWJlcicpIHtcbiAgICAgIHRpLnJlbW92ZVN0YXJ0ID0gaW5kZXhPclZpZXdDdHJsICsgMTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucXVldWVUcm5zKHRpLCBkb25lKTtcbiAgfVxuICAvKipcbiAgICogTmF2aWdhdGUgYmFjayB0byB0aGUgcm9vdCBvZiB0aGUgc3RhY2ssIG5vIG1hdHRlciBob3cgZmFyIGJhY2sgdGhhdCBpcy5cbiAgICpcbiAgICogQHBhcmFtIG9wdHMgVGhlIG5hdmlnYXRpb24gb3B0aW9ucy5cbiAgICogQHBhcmFtIGRvbmUgVGhlIHRyYW5zaXRpb24gY29tcGxldGUgZnVuY3Rpb24uXG4gICAqL1xuICBwb3BUb1Jvb3Qob3B0cywgZG9uZSkge1xuICAgIHJldHVybiB0aGlzLnJlbW92ZUluZGV4KDEsIC0xLCBvcHRzLCBkb25lKTtcbiAgfVxuICAvKipcbiAgICogUmVtb3ZlcyBhIGNvbXBvbmVudCBmcm9tIHRoZSBuYXZpZ2F0aW9uIHN0YWNrIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXguXG4gICAqXG4gICAqIEBwYXJhbSBzdGFydEluZGV4IFRoZSBudW1iZXIgdG8gYmVnaW4gcmVtb3ZhbCBhdC5cbiAgICogQHBhcmFtIHJlbW92ZUNvdW50IFRoZSBudW1iZXIgb2YgY29tcG9uZW50cyB0byByZW1vdmUuXG4gICAqIEBwYXJhbSBvcHRzIFRoZSBuYXZpZ2F0aW9uIG9wdGlvbnMuXG4gICAqIEBwYXJhbSBkb25lIFRoZSB0cmFuc2l0aW9uIGNvbXBsZXRlIGZ1bmN0aW9uLlxuICAgKi9cbiAgcmVtb3ZlSW5kZXgoc3RhcnRJbmRleCwgcmVtb3ZlQ291bnQgPSAxLCBvcHRzLCBkb25lKSB7XG4gICAgcmV0dXJuIHRoaXMucXVldWVUcm5zKHtcbiAgICAgIHJlbW92ZVN0YXJ0OiBzdGFydEluZGV4LFxuICAgICAgcmVtb3ZlQ291bnQsXG4gICAgICBvcHRzXG4gICAgfSwgZG9uZSk7XG4gIH1cbiAgLyoqXG4gICAqIFNldCB0aGUgcm9vdCBmb3IgdGhlIGN1cnJlbnQgbmF2aWdhdGlvbiBzdGFjayB0byBhIGNvbXBvbmVudC5cbiAgICpcbiAgICogQHBhcmFtIGNvbXBvbmVudCBUaGUgY29tcG9uZW50IHRvIHNldCBhcyB0aGUgcm9vdCBvZiB0aGUgbmF2aWdhdGlvbiBzdGFjay5cbiAgICogQHBhcmFtIGNvbXBvbmVudFByb3BzIEFueSBwcm9wZXJ0aWVzIG9mIHRoZSBjb21wb25lbnQuXG4gICAqIEBwYXJhbSBvcHRzIFRoZSBuYXZpZ2F0aW9uIG9wdGlvbnMuXG4gICAqIEBwYXJhbSBkb25lIFRoZSB0cmFuc2l0aW9uIGNvbXBsZXRlIGZ1bmN0aW9uLlxuICAgKi9cbiAgc2V0Um9vdChjb21wb25lbnQsIGNvbXBvbmVudFByb3BzLCBvcHRzLCBkb25lKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0UGFnZXMoW3tcbiAgICAgIGNvbXBvbmVudCxcbiAgICAgIGNvbXBvbmVudFByb3BzXG4gICAgfV0sIG9wdHMsIGRvbmUpO1xuICB9XG4gIC8qKlxuICAgKiBTZXQgdGhlIHZpZXdzIG9mIHRoZSBjdXJyZW50IG5hdmlnYXRpb24gc3RhY2sgYW5kIG5hdmlnYXRlIHRvIHRoZSBsYXN0IHZpZXcuXG4gICAqIEJ5IGRlZmF1bHQgYW5pbWF0aW9ucyBhcmUgZGlzYWJsZWQsIGJ1dCB0aGV5IGNhbiBiZSBlbmFibGVkIGJ5IHBhc3Npbmcgb3B0aW9uc1xuICAgKiB0byB0aGUgbmF2aWdhdGlvbiBjb250cm9sbGVyLiBOYXZpZ2F0aW9uIHBhcmFtZXRlcnMgY2FuIGFsc28gYmUgcGFzc2VkIHRvIHRoZVxuICAgKiBpbmRpdmlkdWFsIHBhZ2VzIGluIHRoZSBhcnJheS5cbiAgICpcbiAgICogQHBhcmFtIHZpZXdzIFRoZSBsaXN0IG9mIHZpZXdzIHRvIHNldCBhcyB0aGUgbmF2aWdhdGlvbiBzdGFjay5cbiAgICogQHBhcmFtIG9wdHMgVGhlIG5hdmlnYXRpb24gb3B0aW9ucy5cbiAgICogQHBhcmFtIGRvbmUgVGhlIHRyYW5zaXRpb24gY29tcGxldGUgZnVuY3Rpb24uXG4gICAqL1xuICBzZXRQYWdlcyh2aWV3cywgb3B0cywgZG9uZSkge1xuICAgIG9wdHMgIT09IG51bGwgJiYgb3B0cyAhPT0gdm9pZCAwID8gb3B0cyA6IG9wdHMgPSB7fTtcbiAgICAvLyBpZiBhbmltYXRpb24gd2Fzbid0IHNldCB0byB0cnVlIHRoZW4gZGVmYXVsdCBpdCB0byBOT1QgYW5pbWF0ZVxuICAgIGlmIChvcHRzLmFuaW1hdGVkICE9PSB0cnVlKSB7XG4gICAgICBvcHRzLmFuaW1hdGVkID0gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnF1ZXVlVHJucyh7XG4gICAgICBpbnNlcnRTdGFydDogMCxcbiAgICAgIGluc2VydFZpZXdzOiB2aWV3cyxcbiAgICAgIHJlbW92ZVN0YXJ0OiAwLFxuICAgICAgcmVtb3ZlQ291bnQ6IC0xLFxuICAgICAgb3B0c1xuICAgIH0sIGRvbmUpO1xuICB9XG4gIC8qKlxuICAgKiBDYWxsZWQgYnkgdGhlIHJvdXRlciB0byB1cGRhdGUgdGhlIHZpZXcuXG4gICAqXG4gICAqIEBwYXJhbSBpZCBUaGUgY29tcG9uZW50IHRhZy5cbiAgICogQHBhcmFtIHBhcmFtcyBUaGUgY29tcG9uZW50IHBhcmFtcy5cbiAgICogQHBhcmFtIGRpcmVjdGlvbiBBIGRpcmVjdGlvbiBoaW50LlxuICAgKiBAcGFyYW0gYW5pbWF0aW9uIGFuIEFuaW1hdGlvbkJ1aWxkZXIuXG4gICAqXG4gICAqIEByZXR1cm4gdGhlIHN0YXR1cy5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBzZXRSb3V0ZUlkKGlkLCBwYXJhbXMsIGRpcmVjdGlvbiwgYW5pbWF0aW9uKSB7XG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5nZXRBY3RpdmVTeW5jKCk7XG4gICAgaWYgKG1hdGNoZXMoYWN0aXZlLCBpZCwgcGFyYW1zKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICAgIGNoYW5nZWQ6IGZhbHNlLFxuICAgICAgICBlbGVtZW50OiBhY3RpdmUuZWxlbWVudFxuICAgICAgfSk7XG4gICAgfVxuICAgIGxldCByZXNvbHZlO1xuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZShyID0+IHJlc29sdmUgPSByKTtcbiAgICBsZXQgZmluaXNoO1xuICAgIGNvbnN0IGNvbW1vbk9wdHMgPSB7XG4gICAgICB1cGRhdGVVUkw6IGZhbHNlLFxuICAgICAgdmlld0lzUmVhZHk6IGVudGVyaW5nRWwgPT4ge1xuICAgICAgICBsZXQgbWFyaztcbiAgICAgICAgY29uc3QgcCA9IG5ldyBQcm9taXNlKHIgPT4gbWFyayA9IHIpO1xuICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICBjaGFuZ2VkOiB0cnVlLFxuICAgICAgICAgIGVsZW1lbnQ6IGVudGVyaW5nRWwsXG4gICAgICAgICAgbWFya1Zpc2libGU6IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIG1hcmsoKTtcbiAgICAgICAgICAgIGF3YWl0IGZpbmlzaDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcDtcbiAgICAgIH1cbiAgICB9O1xuICAgIGlmIChkaXJlY3Rpb24gPT09ICdyb290Jykge1xuICAgICAgZmluaXNoID0gdGhpcy5zZXRSb290KGlkLCBwYXJhbXMsIGNvbW1vbk9wdHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBMb29rIGZvciBhIHZpZXcgbWF0Y2hpbmcgdGhlIHRhcmdldCBpbiB0aGUgdmlldyBzdGFjay5cbiAgICAgIGNvbnN0IHZpZXdDb250cm9sbGVyID0gdGhpcy52aWV3cy5maW5kKHYgPT4gbWF0Y2hlcyh2LCBpZCwgcGFyYW1zKSk7XG4gICAgICBpZiAodmlld0NvbnRyb2xsZXIpIHtcbiAgICAgICAgZmluaXNoID0gdGhpcy5wb3BUbyh2aWV3Q29udHJvbGxlciwgT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjb21tb25PcHRzKSwge1xuICAgICAgICAgIGRpcmVjdGlvbjogJ2JhY2snLFxuICAgICAgICAgIGFuaW1hdGlvbkJ1aWxkZXI6IGFuaW1hdGlvblxuICAgICAgICB9KSk7XG4gICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2ZvcndhcmQnKSB7XG4gICAgICAgIGZpbmlzaCA9IHRoaXMucHVzaChpZCwgcGFyYW1zLCBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGNvbW1vbk9wdHMpLCB7XG4gICAgICAgICAgYW5pbWF0aW9uQnVpbGRlcjogYW5pbWF0aW9uXG4gICAgICAgIH0pKTtcbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnYmFjaycpIHtcbiAgICAgICAgZmluaXNoID0gdGhpcy5zZXRSb290KGlkLCBwYXJhbXMsIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uT3B0cyksIHtcbiAgICAgICAgICBkaXJlY3Rpb246ICdiYWNrJyxcbiAgICAgICAgICBhbmltYXRlZDogdHJ1ZSxcbiAgICAgICAgICBhbmltYXRpb25CdWlsZGVyOiBhbmltYXRpb25cbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuICAvKipcbiAgICogQ2FsbGVkIGJ5IDxpb24tcm91dGVyPiB0byByZXRyaWV2ZSB0aGUgY3VycmVudCBjb21wb25lbnQuXG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgYXN5bmMgZ2V0Um91dGVJZCgpIHtcbiAgICBjb25zdCBhY3RpdmUgPSB0aGlzLmdldEFjdGl2ZVN5bmMoKTtcbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZDogYWN0aXZlLmVsZW1lbnQudGFnTmFtZSxcbiAgICAgICAgcGFyYW1zOiBhY3RpdmUucGFyYW1zLFxuICAgICAgICBlbGVtZW50OiBhY3RpdmUuZWxlbWVudFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICAvKipcbiAgICogR2V0IHRoZSBhY3RpdmUgdmlldy5cbiAgICovXG4gIGFzeW5jIGdldEFjdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRBY3RpdmVTeW5jKCk7XG4gIH1cbiAgLyoqXG4gICAqIEdldCB0aGUgdmlldyBhdCB0aGUgc3BlY2lmaWVkIGluZGV4LlxuICAgKlxuICAgKiBAcGFyYW0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSB2aWV3LlxuICAgKi9cbiAgYXN5bmMgZ2V0QnlJbmRleChpbmRleCkge1xuICAgIHJldHVybiB0aGlzLnZpZXdzW2luZGV4XTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGN1cnJlbnQgdmlldyBjYW4gZ28gYmFjay5cbiAgICpcbiAgICogQHBhcmFtIHZpZXcgVGhlIHZpZXcgdG8gY2hlY2suXG4gICAqL1xuICBhc3luYyBjYW5Hb0JhY2sodmlldykge1xuICAgIHJldHVybiB0aGlzLmNhbkdvQmFja1N5bmModmlldyk7XG4gIH1cbiAgLyoqXG4gICAqIEdldCB0aGUgcHJldmlvdXMgdmlldy5cbiAgICpcbiAgICogQHBhcmFtIHZpZXcgVGhlIHZpZXcgdG8gZ2V0LlxuICAgKi9cbiAgYXN5bmMgZ2V0UHJldmlvdXModmlldykge1xuICAgIHJldHVybiB0aGlzLmdldFByZXZpb3VzU3luYyh2aWV3KTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIHZpZXdzIGluIHRoZSBzdGFjay5cbiAgICovXG4gIGFzeW5jIGdldExlbmd0aCgpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMudmlld3MubGVuZ3RoKTtcbiAgfVxuICBnZXRBY3RpdmVTeW5jKCkge1xuICAgIHJldHVybiB0aGlzLnZpZXdzW3RoaXMudmlld3MubGVuZ3RoIC0gMV07XG4gIH1cbiAgY2FuR29CYWNrU3luYyh2aWV3ID0gdGhpcy5nZXRBY3RpdmVTeW5jKCkpIHtcbiAgICByZXR1cm4gISEodmlldyAmJiB0aGlzLmdldFByZXZpb3VzU3luYyh2aWV3KSk7XG4gIH1cbiAgZ2V0UHJldmlvdXNTeW5jKHZpZXcgPSB0aGlzLmdldEFjdGl2ZVN5bmMoKSkge1xuICAgIGlmICghdmlldykge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgY29uc3Qgdmlld3MgPSB0aGlzLnZpZXdzO1xuICAgIGNvbnN0IGluZGV4ID0gdmlld3MuaW5kZXhPZih2aWV3KTtcbiAgICByZXR1cm4gaW5kZXggPiAwID8gdmlld3NbaW5kZXggLSAxXSA6IHVuZGVmaW5lZDtcbiAgfVxuICAvKipcbiAgICogQWRkcyBhIG5hdmlnYXRpb24gc3RhY2sgY2hhbmdlIHRvIHRoZSBxdWV1ZSBhbmQgc2NoZWR1bGVzIGl0IHRvIHJ1bi5cbiAgICpcbiAgICogQHJldHVybnMgV2hldGhlciB0aGUgdHJhbnNpdGlvbiBzdWNjZWVkcy5cbiAgICovXG4gIGFzeW5jIHF1ZXVlVHJucyh0aSwgZG9uZSkge1xuICAgIHZhciBfYSwgX2I7XG4gICAgaWYgKHRoaXMuaXNUcmFuc2l0aW9uaW5nICYmICgoX2EgPSB0aS5vcHRzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2tpcElmQnVzeSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRpLnJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgdGkucmVqZWN0ID0gcmVqZWN0O1xuICAgIH0pO1xuICAgIHRpLmRvbmUgPSBkb25lO1xuICAgIC8qKlxuICAgICAqIElmIHVzaW5nIHJvdXRlciwgY2hlY2sgdG8gc2VlIGlmIG5hdmlnYXRpb24gaG9va3NcbiAgICAgKiB3aWxsIGFsbG93IHVzIHRvIHBlcmZvcm0gdGhpcyB0cmFuc2l0aW9uLiBUaGlzXG4gICAgICogaXMgcmVxdWlyZWQgaW4gb3JkZXIgZm9yIGhvb2tzIHRvIHdvcmsgd2l0aFxuICAgICAqIHRoZSBpb24tYmFjay1idXR0b24gb3Igc3dpcGUgdG8gZ28gYmFjay5cbiAgICAgKi9cbiAgICBpZiAodGkub3B0cyAmJiB0aS5vcHRzLnVwZGF0ZVVSTCAhPT0gZmFsc2UgJiYgdGhpcy51c2VSb3V0ZXIpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1yb3V0ZXInKTtcbiAgICAgIGlmIChyb3V0ZXIpIHtcbiAgICAgICAgY29uc3QgY2FuVHJhbnNpdGlvbiA9IGF3YWl0IHJvdXRlci5jYW5UcmFuc2l0aW9uKCk7XG4gICAgICAgIGlmIChjYW5UcmFuc2l0aW9uID09PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGNhblRyYW5zaXRpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcm91dGVyLnB1c2goY2FuVHJhbnNpdGlvbiwgdGkub3B0cy5kaXJlY3Rpb24gfHwgJ2JhY2snKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gTm9ybWFsaXplIGVtcHR5XG4gICAgaWYgKCgoX2IgPSB0aS5pbnNlcnRWaWV3cykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmxlbmd0aCkgPT09IDApIHtcbiAgICAgIHRpLmluc2VydFZpZXdzID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvLyBFbnF1ZXVlIHRyYW5zaXRpb24gaW5zdHJ1Y3Rpb25cbiAgICB0aGlzLnRyYW5zSW5zdHIucHVzaCh0aSk7XG4gICAgLy8gaWYgdGhlcmUgaXNuJ3QgYSB0cmFuc2l0aW9uIGFscmVhZHkgaGFwcGVuaW5nXG4gICAgLy8gdGhlbiB0aGlzIHdpbGwga2ljayBvZmYgdGhpcyB0cmFuc2l0aW9uXG4gICAgdGhpcy5uZXh0VHJucygpO1xuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG4gIHN1Y2Nlc3MocmVzdWx0LCB0aSkge1xuICAgIGlmICh0aGlzLmRlc3Ryb3llZCkge1xuICAgICAgdGhpcy5maXJlRXJyb3IoJ25hdiBjb250cm9sbGVyIHdhcyBkZXN0cm95ZWQnLCB0aSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aS5kb25lKSB7XG4gICAgICB0aS5kb25lKHJlc3VsdC5oYXNDb21wbGV0ZWQsIHJlc3VsdC5yZXF1aXJlc1RyYW5zaXRpb24sIHJlc3VsdC5lbnRlcmluZ1ZpZXcsIHJlc3VsdC5sZWF2aW5nVmlldywgcmVzdWx0LmRpcmVjdGlvbik7XG4gICAgfVxuICAgIHRpLnJlc29sdmUocmVzdWx0Lmhhc0NvbXBsZXRlZCk7XG4gICAgaWYgKHRpLm9wdHMudXBkYXRlVVJMICE9PSBmYWxzZSAmJiB0aGlzLnVzZVJvdXRlcikge1xuICAgICAgY29uc3Qgcm91dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW9uLXJvdXRlcicpO1xuICAgICAgaWYgKHJvdXRlcikge1xuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSByZXN1bHQuZGlyZWN0aW9uID09PSAnYmFjaycgPyAnYmFjaycgOiAnZm9yd2FyZCc7XG4gICAgICAgIHJvdXRlci5uYXZDaGFuZ2VkKGRpcmVjdGlvbik7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZhaWxlZChyZWplY3RSZWFzb24sIHRpKSB7XG4gICAgaWYgKHRoaXMuZGVzdHJveWVkKSB7XG4gICAgICB0aGlzLmZpcmVFcnJvcignbmF2IGNvbnRyb2xsZXIgd2FzIGRlc3Ryb3llZCcsIHRpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy50cmFuc0luc3RyLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5maXJlRXJyb3IocmVqZWN0UmVhc29uLCB0aSk7XG4gIH1cbiAgZmlyZUVycm9yKHJlamVjdFJlYXNvbiwgdGkpIHtcbiAgICBpZiAodGkuZG9uZSkge1xuICAgICAgdGkuZG9uZShmYWxzZSwgZmFsc2UsIHJlamVjdFJlYXNvbik7XG4gICAgfVxuICAgIGlmICh0aS5yZWplY3QgJiYgIXRoaXMuZGVzdHJveWVkKSB7XG4gICAgICB0aS5yZWplY3QocmVqZWN0UmVhc29uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGkucmVzb2x2ZShmYWxzZSk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBDb25zdW1lcyB0aGUgbmV4dCB0cmFuc2l0aW9uIGluIHRoZSBxdWV1ZS5cbiAgICpcbiAgICogQHJldHVybnMgd2hldGhlciB0aGUgdHJhbnNpdGlvbiBpcyBleGVjdXRlZC5cbiAgICovXG4gIG5leHRUcm5zKCkge1xuICAgIC8vIHRoaXMgaXMgdGhlIGZyYW1ld29yaydzIGJyZWFkICduIGJ1dHRhIGZ1bmN0aW9uXG4gICAgLy8gb25seSBvbmUgdHJhbnNpdGlvbiBpcyBhbGxvd2VkIGF0IGFueSBnaXZlbiB0aW1lXG4gICAgaWYgKHRoaXMuaXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIHRoZXJlIGlzIG5vIHRyYW5zaXRpb24gaGFwcGVuaW5nIHJpZ2h0IG5vdywgZXhlY3V0ZXMgdGhlIG5leHQgaW5zdHJ1Y3Rpb25zLlxuICAgIGNvbnN0IHRpID0gdGhpcy50cmFuc0luc3RyLnNoaWZ0KCk7XG4gICAgaWYgKCF0aSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLnJ1blRyYW5zaXRpb24odGkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8qKiBFeGVjdXRlcyBhbGwgdGhlIHRyYW5zaXRpb24gaW5zdHJ1Y3Rpb24gZnJvbSB0aGUgcXVldWUuICovXG4gIGFzeW5jIHJ1blRyYW5zaXRpb24odGkpIHtcbiAgICB0cnkge1xuICAgICAgLy8gc2V0IHRoYXQgdGhpcyBuYXYgaXMgYWN0aXZlbHkgdHJhbnNpdGlvbmluZ1xuICAgICAgdGhpcy5pb25OYXZXaWxsQ2hhbmdlLmVtaXQoKTtcbiAgICAgIHRoaXMuaXNUcmFuc2l0aW9uaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMucHJlcGFyZVRJKHRpKTtcbiAgICAgIGNvbnN0IGxlYXZpbmdWaWV3ID0gdGhpcy5nZXRBY3RpdmVTeW5jKCk7XG4gICAgICBjb25zdCBlbnRlcmluZ1ZpZXcgPSB0aGlzLmdldEVudGVyaW5nVmlldyh0aSwgbGVhdmluZ1ZpZXcpO1xuICAgICAgaWYgKCFsZWF2aW5nVmlldyAmJiAhZW50ZXJpbmdWaWV3KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gdmlld3MgaW4gdGhlIHN0YWNrIHRvIGJlIHJlbW92ZWQnKTtcbiAgICAgIH1cbiAgICAgIGlmIChlbnRlcmluZ1ZpZXcgJiYgZW50ZXJpbmdWaWV3LnN0YXRlID09PSBWSUVXX1NUQVRFX05FVykge1xuICAgICAgICBhd2FpdCBlbnRlcmluZ1ZpZXcuaW5pdCh0aGlzLmVsKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucG9zdFZpZXdJbml0KGVudGVyaW5nVmlldywgbGVhdmluZ1ZpZXcsIHRpKTtcbiAgICAgIC8vIE5lZWRzIHRyYW5zaXRpb24/XG4gICAgICBjb25zdCByZXF1aXJlc1RyYW5zaXRpb24gPSAodGkuZW50ZXJpbmdSZXF1aXJlc1RyYW5zaXRpb24gfHwgdGkubGVhdmluZ1JlcXVpcmVzVHJhbnNpdGlvbikgJiYgZW50ZXJpbmdWaWV3ICE9PSBsZWF2aW5nVmlldztcbiAgICAgIGlmIChyZXF1aXJlc1RyYW5zaXRpb24gJiYgdGkub3B0cyAmJiBsZWF2aW5nVmlldykge1xuICAgICAgICBjb25zdCBpc0JhY2tEaXJlY3Rpb24gPSB0aS5vcHRzLmRpcmVjdGlvbiA9PT0gJ2JhY2snO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgaGVhZGluZyBiYWNrLCB1c2UgdGhlIGVudGVyaW5nIHBhZ2UncyBhbmltYXRpb25cbiAgICAgICAgICogdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQgYnkgdGhlIGRldmVsb3Blci5cbiAgICAgICAgICovXG4gICAgICAgIGlmIChpc0JhY2tEaXJlY3Rpb24pIHtcbiAgICAgICAgICB0aS5vcHRzLmFuaW1hdGlvbkJ1aWxkZXIgPSB0aS5vcHRzLmFuaW1hdGlvbkJ1aWxkZXIgfHwgKGVudGVyaW5nVmlldyA9PT0gbnVsbCB8fCBlbnRlcmluZ1ZpZXcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVudGVyaW5nVmlldy5hbmltYXRpb25CdWlsZGVyKTtcbiAgICAgICAgfVxuICAgICAgICBsZWF2aW5nVmlldy5hbmltYXRpb25CdWlsZGVyID0gdGkub3B0cy5hbmltYXRpb25CdWlsZGVyO1xuICAgICAgfVxuICAgICAgbGV0IHJlc3VsdDtcbiAgICAgIGlmIChyZXF1aXJlc1RyYW5zaXRpb24pIHtcbiAgICAgICAgcmVzdWx0ID0gYXdhaXQgdGhpcy50cmFuc2l0aW9uKGVudGVyaW5nVmlldywgbGVhdmluZ1ZpZXcsIHRpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHRyYW5zaXRpb24gaXMgbm90IHJlcXVpcmVkLCBzbyB3ZSBhcmUgYWxyZWFkeSBkb25lIVxuICAgICAgICAvLyB0aGV5J3JlIGluc2VydGluZy9yZW1vdmluZyB0aGUgdmlld3Mgc29tZXdoZXJlIGluIHRoZSBtaWRkbGUgb3JcbiAgICAgICAgLy8gYmVnaW5uaW5nLCBzbyB2aXN1YWxseSBub3RoaW5nIG5lZWRzIHRvIGFuaW1hdGUvdHJhbnNpdGlvblxuICAgICAgICAvLyByZXNvbHZlIGltbWVkaWF0ZWx5IGJlY2F1c2UgdGhlcmUncyBubyBhbmltYXRpb24gdGhhdCdzIGhhcHBlbmluZ1xuICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgaGFzQ29tcGxldGVkOiB0cnVlLFxuICAgICAgICAgIHJlcXVpcmVzVHJhbnNpdGlvbjogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc3VjY2VzcyhyZXN1bHQsIHRpKTtcbiAgICAgIHRoaXMuaW9uTmF2RGlkQ2hhbmdlLmVtaXQoKTtcbiAgICB9IGNhdGNoIChyZWplY3RSZWFzb24pIHtcbiAgICAgIHRoaXMuZmFpbGVkKHJlamVjdFJlYXNvbiwgdGkpO1xuICAgIH1cbiAgICB0aGlzLmlzVHJhbnNpdGlvbmluZyA9IGZhbHNlO1xuICAgIHRoaXMubmV4dFRybnMoKTtcbiAgfVxuICBwcmVwYXJlVEkodGkpIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIHZhciBfYztcbiAgICBjb25zdCB2aWV3c0xlbmd0aCA9IHRoaXMudmlld3MubGVuZ3RoO1xuICAgIChfYSA9IHRpLm9wdHMpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHRpLm9wdHMgPSB7fTtcbiAgICAoX2IgPSAoX2MgPSB0aS5vcHRzKS5kZWxlZ2F0ZSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogX2MuZGVsZWdhdGUgPSB0aGlzLmRlbGVnYXRlO1xuICAgIGlmICh0aS5yZW1vdmVWaWV3ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGFzc2VydCh0aS5yZW1vdmVTdGFydCAhPT0gdW5kZWZpbmVkLCAncmVtb3ZlVmlldyBuZWVkcyByZW1vdmVTdGFydCcpO1xuICAgICAgYXNzZXJ0KHRpLnJlbW92ZUNvdW50ICE9PSB1bmRlZmluZWQsICdyZW1vdmVWaWV3IG5lZWRzIHJlbW92ZUNvdW50Jyk7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMudmlld3MuaW5kZXhPZih0aS5yZW1vdmVWaWV3KTtcbiAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdyZW1vdmVWaWV3IHdhcyBub3QgZm91bmQnKTtcbiAgICAgIH1cbiAgICAgIHRpLnJlbW92ZVN0YXJ0ICs9IGluZGV4O1xuICAgIH1cbiAgICBpZiAodGkucmVtb3ZlU3RhcnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHRpLnJlbW92ZVN0YXJ0IDwgMCkge1xuICAgICAgICB0aS5yZW1vdmVTdGFydCA9IHZpZXdzTGVuZ3RoIC0gMTtcbiAgICAgIH1cbiAgICAgIGlmICh0aS5yZW1vdmVDb3VudCA8IDApIHtcbiAgICAgICAgdGkucmVtb3ZlQ291bnQgPSB2aWV3c0xlbmd0aCAtIHRpLnJlbW92ZVN0YXJ0O1xuICAgICAgfVxuICAgICAgdGkubGVhdmluZ1JlcXVpcmVzVHJhbnNpdGlvbiA9IHRpLnJlbW92ZUNvdW50ID4gMCAmJiB0aS5yZW1vdmVTdGFydCArIHRpLnJlbW92ZUNvdW50ID09PSB2aWV3c0xlbmd0aDtcbiAgICB9XG4gICAgaWYgKHRpLmluc2VydFZpZXdzKSB7XG4gICAgICAvLyBhbGxvdyAtMSB0byBiZSBwYXNzZWQgaW4gdG8gYXV0byBwdXNoIGl0IG9uIHRoZSBlbmRcbiAgICAgIC8vIGFuZCBjbGVhbiB1cCB0aGUgaW5kZXggaWYgaXQncyBsYXJnZXIgdGhlbiB0aGUgc2l6ZSBvZiB0aGUgc3RhY2tcbiAgICAgIGlmICh0aS5pbnNlcnRTdGFydCA8IDAgfHwgdGkuaW5zZXJ0U3RhcnQgPiB2aWV3c0xlbmd0aCkge1xuICAgICAgICB0aS5pbnNlcnRTdGFydCA9IHZpZXdzTGVuZ3RoO1xuICAgICAgfVxuICAgICAgdGkuZW50ZXJpbmdSZXF1aXJlc1RyYW5zaXRpb24gPSB0aS5pbnNlcnRTdGFydCA9PT0gdmlld3NMZW5ndGg7XG4gICAgfVxuICAgIGNvbnN0IGluc2VydFZpZXdzID0gdGkuaW5zZXJ0Vmlld3M7XG4gICAgaWYgKCFpbnNlcnRWaWV3cykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhc3NlcnQoaW5zZXJ0Vmlld3MubGVuZ3RoID4gMCwgJ2xlbmd0aCBjYW4gbm90IGJlIHplcm8nKTtcbiAgICBjb25zdCB2aWV3Q29udHJvbGxlcnMgPSBjb252ZXJ0VG9WaWV3cyhpbnNlcnRWaWV3cyk7XG4gICAgaWYgKHZpZXdDb250cm9sbGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCB2aWV3cyB0byBpbnNlcnQnKTtcbiAgICB9XG4gICAgLy8gQ2hlY2sgYWxsIHRoZSBpbnNlcnRlZCB2aWV3IGFyZSBjb3JyZWN0XG4gICAgZm9yIChjb25zdCB2aWV3IG9mIHZpZXdDb250cm9sbGVycykge1xuICAgICAgdmlldy5kZWxlZ2F0ZSA9IHRpLm9wdHMuZGVsZWdhdGU7XG4gICAgICBjb25zdCBuYXYgPSB2aWV3Lm5hdjtcbiAgICAgIGlmIChuYXYgJiYgbmF2ICE9PSB0aGlzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignaW5zZXJ0ZWQgdmlldyB3YXMgYWxyZWFkeSBpbnNlcnRlZCcpO1xuICAgICAgfVxuICAgICAgaWYgKHZpZXcuc3RhdGUgPT09IFZJRVdfU1RBVEVfREVTVFJPWUVEKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignaW5zZXJ0ZWQgdmlldyB3YXMgYWxyZWFkeSBkZXN0cm95ZWQnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGkuaW5zZXJ0Vmlld3MgPSB2aWV3Q29udHJvbGxlcnM7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZpZXcgdGhhdCB3aWxsIGJlIGVudGVyZWQgY29uc2lkZXJpbmcgdGhlIHRyYW5zaXRpb24gaW5zdHJ1Y3Rpb25zLlxuICAgKlxuICAgKiBAcGFyYW0gdGkgVGhlIGluc3RydWN0aW9ucy5cbiAgICogQHBhcmFtIGxlYXZpbmdWaWV3IFRoZSB2aWV3IGJlaW5nIGxlZnQgb3IgdW5kZWZpbmVkIGlmIG5vbmUuXG4gICAqXG4gICAqIEByZXR1cm5zIFRoZSB2aWV3IHRoYXQgd2lsbCBiZSBlbnRlcmVkLCB1bmRlZmluZWQgaWYgbm9uZS5cbiAgICovXG4gIGdldEVudGVyaW5nVmlldyh0aSwgbGVhdmluZ1ZpZXcpIHtcbiAgICAvLyBUaGUgbGFzdCBpbnNlcnRlZCB2aWV3IHdpbGwgYmUgZW50ZXJlZCB3aGVuIHZpZXcgYXJlIGluc2VydGVkLlxuICAgIGNvbnN0IGluc2VydFZpZXdzID0gdGkuaW5zZXJ0Vmlld3M7XG4gICAgaWYgKGluc2VydFZpZXdzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBpbnNlcnRWaWV3c1tpbnNlcnRWaWV3cy5sZW5ndGggLSAxXTtcbiAgICB9XG4gICAgLy8gV2hlbiB2aWV3cyBhcmUgZGVsZXRlZCwgd2Ugd2lsbCBlbnRlciB0aGUgbGFzdCB2aWV3IHRoYXQgaXMgbm90IHJlbW92ZWQgYW5kIG5vdCB0aGUgdmlldyBiZWluZyBsZWZ0LlxuICAgIGNvbnN0IHJlbW92ZVN0YXJ0ID0gdGkucmVtb3ZlU3RhcnQ7XG4gICAgaWYgKHJlbW92ZVN0YXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IHZpZXdzID0gdGhpcy52aWV3cztcbiAgICAgIGNvbnN0IHJlbW92ZUVuZCA9IHJlbW92ZVN0YXJ0ICsgdGkucmVtb3ZlQ291bnQ7XG4gICAgICBmb3IgKGxldCBpID0gdmlld3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgY29uc3QgdmlldyA9IHZpZXdzW2ldO1xuICAgICAgICBpZiAoKGkgPCByZW1vdmVTdGFydCB8fCBpID49IHJlbW92ZUVuZCkgJiYgdmlldyAhPT0gbGVhdmluZ1ZpZXcpIHtcbiAgICAgICAgICByZXR1cm4gdmlldztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIC8qKlxuICAgKiBBZGRzIGFuZCBSZW1vdmVzIHRoZSB2aWV3cyBmcm9tIHRoZSBuYXZpZ2F0aW9uIHN0YWNrLlxuICAgKlxuICAgKiBAcGFyYW0gZW50ZXJpbmdWaWV3IFRoZSB2aWV3IGJlaW5nIGVudGVyZWQuXG4gICAqIEBwYXJhbSBsZWF2aW5nVmlldyBUaGUgdmlldyBiZWluZyBsZWZ0LlxuICAgKiBAcGFyYW0gdGkgVGhlIGluc3RydWN0aW9ucy5cbiAgICovXG4gIHBvc3RWaWV3SW5pdChlbnRlcmluZ1ZpZXcsIGxlYXZpbmdWaWV3LCB0aSkge1xuICAgIHZhciBfYSwgX2IsIF9jO1xuICAgIGFzc2VydChsZWF2aW5nVmlldyB8fCBlbnRlcmluZ1ZpZXcsICdCb3RoIGxlYXZpbmdWaWV3IGFuZCBlbnRlcmluZ1ZpZXcgYXJlIG51bGwnKTtcbiAgICBhc3NlcnQodGkucmVzb2x2ZSwgJ3Jlc29sdmUgbXVzdCBiZSB2YWxpZCcpO1xuICAgIGFzc2VydCh0aS5yZWplY3QsICdyZWplY3QgbXVzdCBiZSB2YWxpZCcpO1xuICAgIC8vIENvbXB1dGUgdGhlIHZpZXdzIHRvIHJlbW92ZS5cbiAgICBjb25zdCBvcHRzID0gdGkub3B0cztcbiAgICBjb25zdCB7XG4gICAgICBpbnNlcnRWaWV3cyxcbiAgICAgIHJlbW92ZVN0YXJ0LFxuICAgICAgcmVtb3ZlQ291bnRcbiAgICB9ID0gdGk7XG4gICAgLyoqIFJlY29yZHMgdGhlIHZpZXcgdG8gZGVzdHJveSAqL1xuICAgIGxldCBkZXN0cm95UXVldWU7XG4gICAgLy8gdGhlcmUgYXJlIHZpZXdzIHRvIHJlbW92ZVxuICAgIGlmIChyZW1vdmVTdGFydCAhPT0gdW5kZWZpbmVkICYmIHJlbW92ZUNvdW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGFzc2VydChyZW1vdmVTdGFydCA+PSAwLCAncmVtb3ZlU3RhcnQgY2FuIG5vdCBiZSBuZWdhdGl2ZScpO1xuICAgICAgYXNzZXJ0KHJlbW92ZUNvdW50ID49IDAsICdyZW1vdmVDb3VudCBjYW4gbm90IGJlIG5lZ2F0aXZlJyk7XG4gICAgICBkZXN0cm95UXVldWUgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSByZW1vdmVTdGFydDsgaSA8IHJlbW92ZVN0YXJ0ICsgcmVtb3ZlQ291bnQ7IGkrKykge1xuICAgICAgICBjb25zdCB2aWV3ID0gdGhpcy52aWV3c1tpXTtcbiAgICAgICAgaWYgKHZpZXcgIT09IHVuZGVmaW5lZCAmJiB2aWV3ICE9PSBlbnRlcmluZ1ZpZXcgJiYgdmlldyAhPT0gbGVhdmluZ1ZpZXcpIHtcbiAgICAgICAgICBkZXN0cm95UXVldWUucHVzaCh2aWV3KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gZGVmYXVsdCB0aGUgZGlyZWN0aW9uIHRvIFwiYmFja1wiXG4gICAgICAoX2EgPSBvcHRzLmRpcmVjdGlvbikgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogb3B0cy5kaXJlY3Rpb24gPSAnYmFjayc7XG4gICAgfVxuICAgIGNvbnN0IGZpbmFsTnVtVmlld3MgPSB0aGlzLnZpZXdzLmxlbmd0aCArICgoX2IgPSBpbnNlcnRWaWV3cyA9PT0gbnVsbCB8fCBpbnNlcnRWaWV3cyA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW5zZXJ0Vmlld3MubGVuZ3RoKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAwKSAtIChyZW1vdmVDb3VudCAhPT0gbnVsbCAmJiByZW1vdmVDb3VudCAhPT0gdm9pZCAwID8gcmVtb3ZlQ291bnQgOiAwKTtcbiAgICBhc3NlcnQoZmluYWxOdW1WaWV3cyA+PSAwLCAnZmluYWwgYmFsYW5jZSBjYW4gbm90IGJlIG5lZ2F0aXZlJyk7XG4gICAgaWYgKGZpbmFsTnVtVmlld3MgPT09IDApIHtcbiAgICAgIHByaW50SW9uV2FybmluZyhgW2lvbi1uYXZdIC0gWW91IGNhbid0IHJlbW92ZSBhbGwgdGhlIHBhZ2VzIGluIHRoZSBuYXZpZ2F0aW9uIHN0YWNrLiBuYXYucG9wKCkgaXMgcHJvYmFibHkgY2FsbGVkIHRvbyBtYW55IHRpbWVzLmAsIHRoaXMsIHRoaXMuZWwpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCduYXZpZ2F0aW9uIHN0YWNrIG5lZWRzIGF0IGxlYXN0IG9uZSByb290IHBhZ2UnKTtcbiAgICB9XG4gICAgLy8gQXQgdGhpcyBwb2ludCB0aGUgdHJhbnNpdGlvbiBjYW4gbm90IGJlIHJlamVjdGVkLCBhbnkgdGhyb3cgc2hvdWxkIGJlIGFuIGVycm9yXG4gICAgLy8gSW5zZXJ0IHRoZSBuZXcgdmlld3MgaW4gdGhlIHN0YWNrLlxuICAgIGlmIChpbnNlcnRWaWV3cykge1xuICAgICAgLy8gYWRkIHRoZSB2aWV3cyB0byB0aGVcbiAgICAgIGxldCBpbnNlcnRJbmRleCA9IHRpLmluc2VydFN0YXJ0O1xuICAgICAgZm9yIChjb25zdCB2aWV3IG9mIGluc2VydFZpZXdzKSB7XG4gICAgICAgIHRoaXMuaW5zZXJ0Vmlld0F0KHZpZXcsIGluc2VydEluZGV4KTtcbiAgICAgICAgaW5zZXJ0SW5kZXgrKztcbiAgICAgIH1cbiAgICAgIGlmICh0aS5lbnRlcmluZ1JlcXVpcmVzVHJhbnNpdGlvbikge1xuICAgICAgICAvLyBkZWZhdWx0IHRvIGZvcndhcmQgaWYgbm90IGFscmVhZHkgc2V0XG4gICAgICAgIChfYyA9IG9wdHMuZGlyZWN0aW9uKSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiBvcHRzLmRpcmVjdGlvbiA9ICdmb3J3YXJkJztcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gaWYgdGhlIHZpZXdzIHRvIGJlIHJlbW92ZWQgYXJlIGluIHRoZSBiZWdpbm5pbmcgb3IgbWlkZGxlXG4gICAgLy8gYW5kIHRoZXJlIGlzIG5vdCBhIHZpZXcgdGhhdCBuZWVkcyB0byB2aXN1YWxseSB0cmFuc2l0aW9uIG91dFxuICAgIC8vIHRoZW4ganVzdCBkZXN0cm95IHRoZW0gYW5kIGRvbid0IHRyYW5zaXRpb24gYW55dGhpbmdcbiAgICAvLyBiYXRjaCBhbGwgb2YgbGlmZWN5Y2xlcyB0b2dldGhlclxuICAgIC8vIGxldCdzIG1ha2Ugc3VyZSwgY2FsbGJhY2tzIGFyZSB6b25lZFxuICAgIGlmIChkZXN0cm95UXVldWUgJiYgZGVzdHJveVF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAoY29uc3QgdmlldyBvZiBkZXN0cm95UXVldWUpIHtcbiAgICAgICAgbGlmZWN5Y2xlKHZpZXcuZWxlbWVudCwgTElGRUNZQ0xFX1dJTExfTEVBVkUpO1xuICAgICAgICBsaWZlY3ljbGUodmlldy5lbGVtZW50LCBMSUZFQ1lDTEVfRElEX0xFQVZFKTtcbiAgICAgICAgbGlmZWN5Y2xlKHZpZXcuZWxlbWVudCwgTElGRUNZQ0xFX1dJTExfVU5MT0FEKTtcbiAgICAgIH1cbiAgICAgIC8vIG9uY2UgYWxsIGxpZmVjeWNsZSBldmVudHMgaGFzIGJlZW4gZGVsaXZlcmVkLCB3ZSBjYW4gc2FmZWx5IGRldHJveSB0aGUgdmlld3NcbiAgICAgIGZvciAoY29uc3QgdmlldyBvZiBkZXN0cm95UXVldWUpIHtcbiAgICAgICAgdGhpcy5kZXN0cm95Vmlldyh2aWV3KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgYXN5bmMgdHJhbnNpdGlvbihlbnRlcmluZ1ZpZXcsIGxlYXZpbmdWaWV3LCB0aSkge1xuICAgIC8vIHdlIHNob3VsZCBhbmltYXRlIChkdXJhdGlvbiA+IDApIGlmIHRoZSBwdXNoZWQgcGFnZSBpcyBub3QgdGhlIGZpcnN0IG9uZSAoc3RhcnR1cClcbiAgICAvLyBvciBpZiBpdCBpcyBhIHBvcnRhbCAobW9kYWwsIGFjdGlvbnNoZWV0LCBldGMuKVxuICAgIGNvbnN0IG9wdHMgPSB0aS5vcHRzO1xuICAgIGNvbnN0IHByb2dyZXNzQ2FsbGJhY2sgPSBvcHRzLnByb2dyZXNzQW5pbWF0aW9uID8gYW5pID0+IHtcbiAgICAgIC8qKlxuICAgICAgICogQmVjYXVzZSB0aGlzIHByb2dyZXNzIGNhbGxiYWNrIGlzIGNhbGxlZCBhc3luY2hyb25vdXNseVxuICAgICAgICogaXQgaXMgcG9zc2libGUgZm9yIHRoZSBnZXN0dXJlIHRvIHN0YXJ0IGFuZCBlbmQgYmVmb3JlXG4gICAgICAgKiB0aGUgYW5pbWF0aW9uIGlzIGV2ZXIgc2V0LiBJbiB0aGF0IHNjZW5hcmlvLCB3ZSBzaG91bGRcbiAgICAgICAqIGltbWVkaWF0ZWx5IGNhbGwgcHJvZ3Jlc3NFbmQgc28gdGhhdCB0aGUgdHJhbnNpdGlvbiBwcm9taXNlXG4gICAgICAgKiByZXNvbHZlcyBhbmQgdGhlIGdlc3R1cmUgZG9lcyBub3QgZ2V0IGxvY2tlZCB1cC5cbiAgICAgICAqL1xuICAgICAgaWYgKGFuaSAhPT0gdW5kZWZpbmVkICYmICF0aGlzLmdlc3R1cmVPckFuaW1hdGlvbkluUHJvZ3Jlc3MpIHtcbiAgICAgICAgdGhpcy5nZXN0dXJlT3JBbmltYXRpb25JblByb2dyZXNzID0gdHJ1ZTtcbiAgICAgICAgYW5pLm9uRmluaXNoKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmdlc3R1cmVPckFuaW1hdGlvbkluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgfSwge1xuICAgICAgICAgIG9uZVRpbWVDYWxsYmFjazogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBsYXlpbmcgYW5pbWF0aW9uIHRvIGJlZ2lubmluZ1xuICAgICAgICAgKiB3aXRoIGEgZHVyYXRpb24gb2YgMCBwcmV2ZW50c1xuICAgICAgICAgKiBhbnkgZmxpY2tlcmluZyB3aGVuIHRoZSBhbmltYXRpb25cbiAgICAgICAgICogaXMgbGF0ZXIgY2xlYW5lZCB1cC5cbiAgICAgICAgICovXG4gICAgICAgIGFuaS5wcm9ncmVzc0VuZCgwLCAwLCAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2JBbmkgPSBhbmk7XG4gICAgICB9XG4gICAgfSA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICBjb25zdCBlbnRlcmluZ0VsID0gZW50ZXJpbmdWaWV3LmVsZW1lbnQ7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9wcmVmZXItb3B0aW9uYWwtY2hhaW5cbiAgICBjb25zdCBsZWF2aW5nRWwgPSBsZWF2aW5nVmlldyAmJiBsZWF2aW5nVmlldy5lbGVtZW50O1xuICAgIGNvbnN0IGFuaW1hdGlvbk9wdHMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe1xuICAgICAgbW9kZSxcbiAgICAgIHNob3dHb0JhY2s6IHRoaXMuY2FuR29CYWNrU3luYyhlbnRlcmluZ1ZpZXcpLFxuICAgICAgYmFzZUVsOiB0aGlzLmVsLFxuICAgICAgcHJvZ3Jlc3NDYWxsYmFjayxcbiAgICAgIGFuaW1hdGVkOiB0aGlzLmFuaW1hdGVkICYmIGNvbmZpZy5nZXRCb29sZWFuKCdhbmltYXRlZCcsIHRydWUpLFxuICAgICAgZW50ZXJpbmdFbCxcbiAgICAgIGxlYXZpbmdFbFxuICAgIH0sIG9wdHMpLCB7XG4gICAgICBhbmltYXRpb25CdWlsZGVyOiBvcHRzLmFuaW1hdGlvbkJ1aWxkZXIgfHwgdGhpcy5hbmltYXRpb24gfHwgY29uZmlnLmdldCgnbmF2QW5pbWF0aW9uJylcbiAgICB9KTtcbiAgICBjb25zdCB7XG4gICAgICBoYXNDb21wbGV0ZWRcbiAgICB9ID0gYXdhaXQgdHJhbnNpdGlvbihhbmltYXRpb25PcHRzKTtcbiAgICByZXR1cm4gdGhpcy50cmFuc2l0aW9uRmluaXNoKGhhc0NvbXBsZXRlZCwgZW50ZXJpbmdWaWV3LCBsZWF2aW5nVmlldywgb3B0cyk7XG4gIH1cbiAgdHJhbnNpdGlvbkZpbmlzaChoYXNDb21wbGV0ZWQsIGVudGVyaW5nVmlldywgbGVhdmluZ1ZpZXcsIG9wdHMpIHtcbiAgICAvKipcbiAgICAgKiBJZiB0aGUgdHJhbnNpdGlvbiBkaWQgbm90IGNvbXBsZXRlLCB0aGUgbGVhdmluZ1ZpZXcgd2lsbCBzdGlsbCBiZSB0aGUgYWN0aXZlXG4gICAgICogdmlldyBvbiB0aGUgc3RhY2suIE90aGVyd2lzZSB1bm1vdW50IGFsbCB0aGUgdmlld3MgYWZ0ZXIgdGhlIGVudGVyaW5nVmlldy5cbiAgICAgKi9cbiAgICBjb25zdCBhY3RpdmVWaWV3ID0gaGFzQ29tcGxldGVkID8gZW50ZXJpbmdWaWV3IDogbGVhdmluZ1ZpZXc7XG4gICAgaWYgKGFjdGl2ZVZpZXcpIHtcbiAgICAgIHRoaXMudW5tb3VudEluYWN0aXZlVmlld3MoYWN0aXZlVmlldyk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBoYXNDb21wbGV0ZWQsXG4gICAgICByZXF1aXJlc1RyYW5zaXRpb246IHRydWUsXG4gICAgICBlbnRlcmluZ1ZpZXcsXG4gICAgICBsZWF2aW5nVmlldyxcbiAgICAgIGRpcmVjdGlvbjogb3B0cy5kaXJlY3Rpb25cbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBJbnNlcnRzIGEgdmlldyBhdCB0aGUgc3BlY2lmaWVkIGluZGV4LlxuICAgKlxuICAgKiBXaGVuIHRoZSB2aWV3IGFscmVhZHkgaXMgaW4gdGhlIHN0YWNrIGl0IHdpbGwgYmUgbW92ZWQgdG8gdGhlIG5ldyBwb3NpdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHZpZXcgVGhlIHZpZXcgdG8gaW5zZXJ0LlxuICAgKiBAcGFyYW0gaW5kZXggVGhlIGluZGV4IHdoZXJlIHRvIGluc2VydCB0aGUgdmlldy5cbiAgICovXG4gIGluc2VydFZpZXdBdCh2aWV3LCBpbmRleCkge1xuICAgIGNvbnN0IHZpZXdzID0gdGhpcy52aWV3cztcbiAgICBjb25zdCBleGlzdGluZ0luZGV4ID0gdmlld3MuaW5kZXhPZih2aWV3KTtcbiAgICBpZiAoZXhpc3RpbmdJbmRleCA+IC0xKSB7XG4gICAgICBhc3NlcnQodmlldy5uYXYgPT09IHRoaXMsICd2aWV3IGlzIG5vdCBwYXJ0IG9mIHRoZSBuYXYnKTtcbiAgICAgIC8vIFRoZSB2aWV3IGFscmVhZHkgaW4gdGhlIHN0YWNrLCByZW1vdmVzIGl0LlxuICAgICAgdmlld3Muc3BsaWNlKGV4aXN0aW5nSW5kZXgsIDEpO1xuICAgICAgLy8gYW5kIGFkZCBpdCBiYWNrIGF0IHRoZSByZXF1ZXN0ZWQgaW5kZXguXG4gICAgICB2aWV3cy5zcGxpY2UoaW5kZXgsIDAsIHZpZXcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhc3NlcnQoIXZpZXcubmF2LCAnbmF2IGlzIHVzZWQnKTtcbiAgICAgIC8vIHRoaXMgaXMgYSBuZXcgdmlldyB0byBhZGQgdG8gdGhlIHN0YWNrXG4gICAgICAvLyBjcmVhdGUgdGhlIG5ldyBlbnRlcmluZyB2aWV3XG4gICAgICB2aWV3Lm5hdiA9IHRoaXM7XG4gICAgICB2aWV3cy5zcGxpY2UoaW5kZXgsIDAsIHZpZXcpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogUmVtb3ZlcyBhIHZpZXcgZnJvbSB0aGUgc3RhY2suXG4gICAqXG4gICAqIEBwYXJhbSB2aWV3IFRoZSB2aWV3IHRvIHJlbW92ZS5cbiAgICovXG4gIHJlbW92ZVZpZXcodmlldykge1xuICAgIGFzc2VydCh2aWV3LnN0YXRlID09PSBWSUVXX1NUQVRFX0FUVEFDSEVEIHx8IHZpZXcuc3RhdGUgPT09IFZJRVdfU1RBVEVfREVTVFJPWUVELCAndmlldyBzdGF0ZSBzaG91bGQgYmUgbG9hZGVkIG9yIGRlc3Ryb3llZCcpO1xuICAgIGNvbnN0IHZpZXdzID0gdGhpcy52aWV3cztcbiAgICBjb25zdCBpbmRleCA9IHZpZXdzLmluZGV4T2Yodmlldyk7XG4gICAgYXNzZXJ0KGluZGV4ID4gLTEsICd2aWV3IG11c3QgYmUgcGFydCBvZiB0aGUgc3RhY2snKTtcbiAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgdmlld3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH1cbiAgZGVzdHJveVZpZXcodmlldykge1xuICAgIHZpZXcuX2Rlc3Ryb3koKTtcbiAgICB0aGlzLnJlbW92ZVZpZXcodmlldyk7XG4gIH1cbiAgLyoqXG4gICAqIFVubW91bnRzIGFsbCBpbmFjdGl2ZSB2aWV3cyBhZnRlciB0aGUgc3BlY2lmaWVkIGFjdGl2ZSB2aWV3LlxuICAgKlxuICAgKiBET00gV1JJVEVcbiAgICpcbiAgICogQHBhcmFtIGFjdGl2ZVZpZXcgVGhlIHZpZXcgdGhhdCBpcyBhY3RpdmVseSB2aXNpYmxlIGluIHRoZSBzdGFjay4gVXNlZCB0byBjYWxjdWxhdGUgd2hpY2ggdmlld3MgdG8gdW5tb3VudC5cbiAgICovXG4gIHVubW91bnRJbmFjdGl2ZVZpZXdzKGFjdGl2ZVZpZXcpIHtcbiAgICAvLyBvaywgY2xlYW51cCB0aW1lISEgRGVzdHJveSBhbGwgb2YgdGhlIHZpZXdzIHRoYXQgYXJlXG4gICAgLy8gSU5BQ1RJVkUgYW5kIGNvbWUgYWZ0ZXIgdGhlIGFjdGl2ZSB2aWV3XG4gICAgLy8gb25seSBkbyB0aGlzIGlmIHRoZSB2aWV3cyBleGlzdCwgdGhvdWdoXG4gICAgaWYgKHRoaXMuZGVzdHJveWVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHZpZXdzID0gdGhpcy52aWV3cztcbiAgICBjb25zdCBhY3RpdmVWaWV3SW5kZXggPSB2aWV3cy5pbmRleE9mKGFjdGl2ZVZpZXcpO1xuICAgIGZvciAobGV0IGkgPSB2aWV3cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgdmlldyA9IHZpZXdzW2ldO1xuICAgICAgLyoqXG4gICAgICAgKiBXaGVuIGluc2VydGluZyBtdWx0aXBsZSB2aWV3cyB2aWEgaW5zZXJ0UGFnZXNcbiAgICAgICAqIHRoZSBsYXN0IHBhZ2Ugd2lsbCBiZSB0cmFuc2l0aW9uZWQgdG8sIGJ1dCB0aGVcbiAgICAgICAqIG90aGVycyB3aWxsIG5vdCBiZS4gQXMgYSByZXN1bHQsIGEgRE9NIGVsZW1lbnRcbiAgICAgICAqIHdpbGwgb25seSBiZSBjcmVhdGVkIGZvciB0aGUgbGFzdCBwYWdlIGluc2VydGVkLlxuICAgICAgICogQXMgYSByZXN1bHQsIGl0IGlzIHBvc3NpYmxlIHRvIGhhdmUgdmlld3MgaW4gdGhlXG4gICAgICAgKiBzdGFjayB0aGF0IGRvIG5vdCBoYXZlIGB2aWV3LmVsZW1lbnRgIHlldC5cbiAgICAgICAqL1xuICAgICAgY29uc3QgZWxlbWVudCA9IHZpZXcuZWxlbWVudDtcbiAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgIGlmIChpID4gYWN0aXZlVmlld0luZGV4KSB7XG4gICAgICAgICAgLy8gdGhpcyB2aWV3IGNvbWVzIGFmdGVyIHRoZSBhY3RpdmUgdmlld1xuICAgICAgICAgIC8vIGxldCdzIHVubG9hZCBpdFxuICAgICAgICAgIGxpZmVjeWNsZShlbGVtZW50LCBMSUZFQ1lDTEVfV0lMTF9VTkxPQUQpO1xuICAgICAgICAgIHRoaXMuZGVzdHJveVZpZXcodmlldyk7XG4gICAgICAgIH0gZWxzZSBpZiAoaSA8IGFjdGl2ZVZpZXdJbmRleCkge1xuICAgICAgICAgIC8vIHRoaXMgdmlldyBjb21lcyBiZWZvcmUgdGhlIGFjdGl2ZSB2aWV3XG4gICAgICAgICAgLy8gYW5kIGl0IGlzIG5vdCBhIHBvcnRhbCB0aGVuIGVuc3VyZSBpdCBpcyBoaWRkZW5cbiAgICAgICAgICBzZXRQYWdlSGlkZGVuKGVsZW1lbnQsIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNhblN0YXJ0KCkge1xuICAgIHJldHVybiAhdGhpcy5nZXN0dXJlT3JBbmltYXRpb25JblByb2dyZXNzICYmICEhdGhpcy5zd2lwZUdlc3R1cmUgJiYgIXRoaXMuaXNUcmFuc2l0aW9uaW5nICYmIHRoaXMudHJhbnNJbnN0ci5sZW5ndGggPT09IDAgJiYgdGhpcy5jYW5Hb0JhY2tTeW5jKCk7XG4gIH1cbiAgb25TdGFydCgpIHtcbiAgICB0aGlzLmdlc3R1cmVPckFuaW1hdGlvbkluUHJvZ3Jlc3MgPSB0cnVlO1xuICAgIHRoaXMucG9wKHtcbiAgICAgIGRpcmVjdGlvbjogJ2JhY2snLFxuICAgICAgcHJvZ3Jlc3NBbmltYXRpb246IHRydWVcbiAgICB9KTtcbiAgfVxuICBvbk1vdmUoc3RlcFZhbHVlKSB7XG4gICAgaWYgKHRoaXMuc2JBbmkpIHtcbiAgICAgIHRoaXMuc2JBbmkucHJvZ3Jlc3NTdGVwKHN0ZXBWYWx1ZSk7XG4gICAgfVxuICB9XG4gIG9uRW5kKHNob3VsZENvbXBsZXRlLCBzdGVwVmFsdWUsIGR1cikge1xuICAgIGlmICh0aGlzLnNiQW5pKSB7XG4gICAgICB0aGlzLnNiQW5pLm9uRmluaXNoKCgpID0+IHtcbiAgICAgICAgdGhpcy5nZXN0dXJlT3JBbmltYXRpb25JblByb2dyZXNzID0gZmFsc2U7XG4gICAgICB9LCB7XG4gICAgICAgIG9uZVRpbWVDYWxsYmFjazogdHJ1ZVxuICAgICAgfSk7XG4gICAgICAvLyBBY2NvdW50IGZvciByb3VuZGluZyBlcnJvcnMgaW4gSlNcbiAgICAgIGxldCBuZXdTdGVwVmFsdWUgPSBzaG91bGRDb21wbGV0ZSA/IC0xZS0zIDogMC4wMDE7XG4gICAgICAvKipcbiAgICAgICAqIEFuaW1hdGlvbiB3aWxsIGJlIHJldmVyc2VkIGhlcmUsIHNvIG5lZWQgdG9cbiAgICAgICAqIHJldmVyc2UgdGhlIGVhc2luZyBjdXJ2ZSBhcyB3ZWxsXG4gICAgICAgKlxuICAgICAgICogQWRkaXRpb25hbGx5LCB3ZSBuZWVkIHRvIGFjY291bnQgZm9yIHRoZSB0aW1lIHJlbGF0aXZlXG4gICAgICAgKiB0byB0aGUgbmV3IGVhc2luZyBjdXJ2ZSwgYXMgYHN0ZXBWYWx1ZWAgaXMgZ29pbmcgdG8gYmUgZ2l2ZW5cbiAgICAgICAqIGluIHRlcm1zIG9mIGEgbGluZWFyIGN1cnZlLlxuICAgICAgICovXG4gICAgICBpZiAoIXNob3VsZENvbXBsZXRlKSB7XG4gICAgICAgIHRoaXMuc2JBbmkuZWFzaW5nKCdjdWJpYy1iZXppZXIoMSwgMCwgMC42OCwgMC4yOCknKTtcbiAgICAgICAgbmV3U3RlcFZhbHVlICs9IGdldFRpbWVHaXZlblByb2dyZXNzaW9uKFswLCAwXSwgWzEsIDBdLCBbMC42OCwgMC4yOF0sIFsxLCAxXSwgc3RlcFZhbHVlKVswXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1N0ZXBWYWx1ZSArPSBnZXRUaW1lR2l2ZW5Qcm9ncmVzc2lvbihbMCwgMF0sIFswLjMyLCAwLjcyXSwgWzAsIDFdLCBbMSwgMV0sIHN0ZXBWYWx1ZSlbMF07XG4gICAgICB9XG4gICAgICB0aGlzLnNiQW5pLnByb2dyZXNzRW5kKHNob3VsZENvbXBsZXRlID8gMSA6IDAsIG5ld1N0ZXBWYWx1ZSwgZHVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5nZXN0dXJlT3JBbmltYXRpb25JblByb2dyZXNzID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaChcInNsb3RcIiwge1xuICAgICAga2V5OiAnODA2N2M5ODM1ZDI1NWRhZWM2MWYzM2RiYTIwMGZkM2E2ZmY4MzlhMCdcbiAgICB9KTtcbiAgfVxuICBnZXQgZWwoKSB7XG4gICAgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7XG4gIH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJzd2lwZUdlc3R1cmVcIjogW1wic3dpcGVHZXN0dXJlQ2hhbmdlZFwiXSxcbiAgICAgIFwicm9vdFwiOiBbXCJyb290Q2hhbmdlZFwiXVxuICAgIH07XG4gIH1cbn07XG5OYXYuc3R5bGUgPSBuYXZDc3M7XG5jb25zdCBuYXZMaW5rID0gKGVsLCByb3V0ZXJEaXJlY3Rpb24sIGNvbXBvbmVudCwgY29tcG9uZW50UHJvcHMsIHJvdXRlckFuaW1hdGlvbikgPT4ge1xuICBjb25zdCBuYXYgPSBlbC5jbG9zZXN0KCdpb24tbmF2Jyk7XG4gIGlmIChuYXYpIHtcbiAgICBpZiAocm91dGVyRGlyZWN0aW9uID09PSAnZm9yd2FyZCcpIHtcbiAgICAgIGlmIChjb21wb25lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbmF2LnB1c2goY29tcG9uZW50LCBjb21wb25lbnRQcm9wcywge1xuICAgICAgICAgIHNraXBJZkJ1c3k6IHRydWUsXG4gICAgICAgICAgYW5pbWF0aW9uQnVpbGRlcjogcm91dGVyQW5pbWF0aW9uXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocm91dGVyRGlyZWN0aW9uID09PSAncm9vdCcpIHtcbiAgICAgIGlmIChjb21wb25lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbmF2LnNldFJvb3QoY29tcG9uZW50LCBjb21wb25lbnRQcm9wcywge1xuICAgICAgICAgIHNraXBJZkJ1c3k6IHRydWUsXG4gICAgICAgICAgYW5pbWF0aW9uQnVpbGRlcjogcm91dGVyQW5pbWF0aW9uXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocm91dGVyRGlyZWN0aW9uID09PSAnYmFjaycpIHtcbiAgICAgIHJldHVybiBuYXYucG9wKHtcbiAgICAgICAgc2tpcElmQnVzeTogdHJ1ZSxcbiAgICAgICAgYW5pbWF0aW9uQnVpbGRlcjogcm91dGVyQW5pbWF0aW9uXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG59O1xuY29uc3QgTmF2TGluayA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgLyoqXG4gICAgICogVGhlIHRyYW5zaXRpb24gZGlyZWN0aW9uIHdoZW4gbmF2aWdhdGluZyB0byBhbm90aGVyIHBhZ2UuXG4gICAgICovXG4gICAgdGhpcy5yb3V0ZXJEaXJlY3Rpb24gPSAnZm9yd2FyZCc7XG4gICAgdGhpcy5vbkNsaWNrID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIG5hdkxpbmsodGhpcy5lbCwgdGhpcy5yb3V0ZXJEaXJlY3Rpb24sIHRoaXMuY29tcG9uZW50LCB0aGlzLmNvbXBvbmVudFByb3BzLCB0aGlzLnJvdXRlckFuaW1hdGlvbik7XG4gICAgfTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGgoSG9zdCwge1xuICAgICAga2V5OiAnNmRiYjFhZDRmMzUxZTkyMTUzNzVhYWMxMWFiOWI1Mzc2MmUwN2EwOCcsXG4gICAgICBvbkNsaWNrOiB0aGlzLm9uQ2xpY2tcbiAgICB9KTtcbiAgfVxuICBnZXQgZWwoKSB7XG4gICAgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7XG4gIH1cbn07XG5leHBvcnQgeyBOYXYgYXMgaW9uX25hdiwgTmF2TGluayBhcyBpb25fbmF2X2xpbmsgfTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0EsSUFBTSxpQkFBaUI7QUFDdkIsSUFBTSxzQkFBc0I7QUFDNUIsSUFBTSx1QkFBdUI7QUFFN0IsSUFBTSxpQkFBTixNQUFxQjtBQUFBLEVBQ25CLFlBQVksV0FBVyxRQUFRO0FBQzdCLFNBQUssWUFBWTtBQUNqQixTQUFLLFNBQVM7QUFDZCxTQUFLLFFBQVE7QUFBQSxFQUNmO0FBQUEsRUFDTSxLQUFLLFdBQVc7QUFBQTtBQUNwQixXQUFLLFFBQVE7QUFDYixVQUFJLENBQUMsS0FBSyxTQUFTO0FBQ2pCLGNBQU0sWUFBWSxLQUFLO0FBQ3ZCLGFBQUssVUFBVSxNQUFNLGdCQUFnQixLQUFLLFVBQVUsV0FBVyxXQUFXLENBQUMsWUFBWSxvQkFBb0IsR0FBRyxLQUFLLE1BQU07QUFBQSxNQUMzSDtBQUFBLElBQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBSUEsV0FBVztBQUNULFdBQU8sS0FBSyxVQUFVLHNCQUFzQiw2QkFBNkI7QUFDekUsVUFBTSxVQUFVLEtBQUs7QUFDckIsUUFBSSxTQUFTO0FBQ1gsVUFBSSxLQUFLLFVBQVU7QUFDakIsYUFBSyxTQUFTLGtCQUFrQixRQUFRLGVBQWUsT0FBTztBQUFBLE1BQ2hFLE9BQU87QUFDTCxnQkFBUSxPQUFPO0FBQUEsTUFDakI7QUFBQSxJQUNGO0FBQ0EsU0FBSyxNQUFNO0FBQ1gsU0FBSyxRQUFRO0FBQUEsRUFDZjtBQUNGO0FBQ0EsSUFBTSxVQUFVLENBQUMsTUFBTSxJQUFJLFdBQVc7QUFDcEMsTUFBSSxDQUFDLE1B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
