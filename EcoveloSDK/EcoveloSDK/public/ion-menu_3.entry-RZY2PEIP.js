import {
  menuOutline,
  menuSharp
} from "./chunk-D4BGZ3LF.js";
import {
  menuController
} from "./chunk-SE3ANTEE.js";
import {
  getTimeGivenProgression
} from "./chunk-H7W7X3R4.js";
import {
  BACKDROP,
  GESTURE,
  focusFirstDescendant,
  focusLastDescendant,
  getPresentedOverlay
} from "./chunk-QATEHYOA.js";
import "./chunk-3MKGIXIK.js";
import {
  createColorClasses,
  hostContext
} from "./chunk-5VP4V3BN.js";
import {
  getIonMode,
  isPlatform
} from "./chunk-TXLH22R2.js";
import {
  GESTURE_CONTROLLER
} from "./chunk-J5JVDPFK.js";
import {
  shouldUseCloseWatcher
} from "./chunk-MUBGKTGO.js";
import "./chunk-2BRJTTQT.js";
import {
  assert,
  clamp,
  inheritAriaAttributes,
  isEndSide
} from "./chunk-RZR7LWTQ.js";
import "./chunk-YSZWGYJT.js";
import {
  Host,
  config,
  createEvent,
  getElement,
  h,
  printIonError,
  registerInstance
} from "./chunk-BFPTXCSH.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js
var menuIosCss = ":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{-webkit-transform:translateX(-9999px);transform:translateX(-9999px);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;top:0;bottom:0}:host(.menu-side-start) .menu-inner{inset-inline-start:0;inset-inline-end:auto}:host-context([dir=rtl]):host(.menu-side-start) .menu-inner,:host-context([dir=rtl]).menu-side-start .menu-inner{--ion-safe-area-right:unset;--ion-safe-area-left:0px}@supports selector(:dir(rtl)){:host(.menu-side-start:dir(rtl)) .menu-inner{--ion-safe-area-right:unset;--ion-safe-area-left:0px}}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;top:0;bottom:0}:host(.menu-side-end) .menu-inner{inset-inline-start:auto;inset-inline-end:0}:host-context([dir=rtl]):host(.menu-side-end) .menu-inner,:host-context([dir=rtl]).menu-side-end .menu-inner{--ion-safe-area-left:unset;--ion-safe-area-right:0px}@supports selector(:dir(rtl)){:host(.menu-side-end:dir(rtl)) .menu-inner{--ion-safe-area-left:unset;--ion-safe-area-right:0px}}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){-ms-flex:0 1 auto;flex:0 1 auto;width:var(--side-width, var(--width));min-width:var(--side-min-width, var(--min-width));max-width:var(--side-max-width, var(--max-width))}:host(.menu-pane-visible.split-pane-side){left:0;right:0;top:0;bottom:0;position:relative;-webkit-box-shadow:none;box-shadow:none;z-index:0}:host(.menu-pane-visible.split-pane-side.menu-enabled){display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}:host(.menu-pane-visible.split-pane-side){-ms-flex-order:-1;order:-1}:host(.menu-pane-visible.split-pane-side[side=end]){-ms-flex-order:1;order:1}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none;transform:none;-webkit-box-shadow:none;box-shadow:none}:host(.menu-pane-visible) ion-backdrop{display:hidden !important}:host(.menu-pane-visible.split-pane-side){-webkit-border-start:0;border-inline-start:0;-webkit-border-end:var(--border);border-inline-end:var(--border);border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.menu-pane-visible.split-pane-side[side=end]){-webkit-border-start:var(--border);border-inline-start:var(--border);-webkit-border-end:0;border-inline-end:0;border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.menu-type-push){z-index:1000}:host(.menu-type-push) .show-backdrop{display:block}";
var menuMdCss = ":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{-webkit-transform:translateX(-9999px);transform:translateX(-9999px);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;top:0;bottom:0}:host(.menu-side-start) .menu-inner{inset-inline-start:0;inset-inline-end:auto}:host-context([dir=rtl]):host(.menu-side-start) .menu-inner,:host-context([dir=rtl]).menu-side-start .menu-inner{--ion-safe-area-right:unset;--ion-safe-area-left:0px}@supports selector(:dir(rtl)){:host(.menu-side-start:dir(rtl)) .menu-inner{--ion-safe-area-right:unset;--ion-safe-area-left:0px}}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;top:0;bottom:0}:host(.menu-side-end) .menu-inner{inset-inline-start:auto;inset-inline-end:0}:host-context([dir=rtl]):host(.menu-side-end) .menu-inner,:host-context([dir=rtl]).menu-side-end .menu-inner{--ion-safe-area-left:unset;--ion-safe-area-right:0px}@supports selector(:dir(rtl)){:host(.menu-side-end:dir(rtl)) .menu-inner{--ion-safe-area-left:unset;--ion-safe-area-right:0px}}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){-ms-flex:0 1 auto;flex:0 1 auto;width:var(--side-width, var(--width));min-width:var(--side-min-width, var(--min-width));max-width:var(--side-max-width, var(--max-width))}:host(.menu-pane-visible.split-pane-side){left:0;right:0;top:0;bottom:0;position:relative;-webkit-box-shadow:none;box-shadow:none;z-index:0}:host(.menu-pane-visible.split-pane-side.menu-enabled){display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}:host(.menu-pane-visible.split-pane-side){-ms-flex-order:-1;order:-1}:host(.menu-pane-visible.split-pane-side[side=end]){-ms-flex-order:1;order:1}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none;transform:none;-webkit-box-shadow:none;box-shadow:none}:host(.menu-pane-visible) ion-backdrop{display:hidden !important}:host(.menu-pane-visible.split-pane-side){-webkit-border-start:0;border-inline-start:0;-webkit-border-end:var(--border);border-inline-end:var(--border);border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.menu-pane-visible.split-pane-side[side=end]){-webkit-border-start:var(--border);border-inline-start:var(--border);-webkit-border-end:0;border-inline-end:0;border-top:0;border-bottom:0;min-width:var(--side-min-width);max-width:var(--side-max-width)}:host(.menu-type-overlay) .menu-inner{-webkit-box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18);box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}";
var iosEasing = "cubic-bezier(0.32,0.72,0,1)";
var mdEasing = "cubic-bezier(0.0,0.0,0.2,1)";
var iosEasingReverse = "cubic-bezier(1, 0, 0.68, 0.28)";
var mdEasingReverse = "cubic-bezier(0.4, 0, 0.6, 1)";
var Menu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionWillOpen = createEvent(this, "ionWillOpen", 7);
    this.ionWillClose = createEvent(this, "ionWillClose", 7);
    this.ionDidOpen = createEvent(this, "ionDidOpen", 7);
    this.ionDidClose = createEvent(this, "ionDidClose", 7);
    this.ionMenuChange = createEvent(this, "ionMenuChange", 7);
    this.lastOnEnd = 0;
    this.blocker = GESTURE_CONTROLLER.createBlocker({
      disableScroll: true
    });
    this.didLoad = false;
    this.operationCancelled = false;
    this.isAnimating = false;
    this._isOpen = false;
    this.inheritedAttributes = {};
    this.handleFocus = (ev) => {
      const lastOverlay = getPresentedOverlay(document);
      if (lastOverlay && !lastOverlay.contains(this.el)) {
        return;
      }
      this.trapKeyboardFocus(ev, document);
    };
    this.isPaneVisible = false;
    this.isEndSide = false;
    this.disabled = false;
    this.side = "start";
    this.swipeGesture = true;
    this.maxEdgeStart = 50;
  }
  typeChanged(type, oldType) {
    const contentEl = this.contentEl;
    if (contentEl) {
      if (oldType !== void 0) {
        contentEl.classList.remove(`menu-content-${oldType}`);
      }
      contentEl.classList.add(`menu-content-${type}`);
      contentEl.removeAttribute("style");
    }
    if (this.menuInnerEl) {
      this.menuInnerEl.removeAttribute("style");
    }
    this.animation = void 0;
  }
  disabledChanged() {
    this.updateState();
    this.ionMenuChange.emit({
      disabled: this.disabled,
      open: this._isOpen
    });
  }
  sideChanged() {
    this.isEndSide = isEndSide(this.side);
    this.animation = void 0;
  }
  swipeGestureChanged() {
    this.updateState();
  }
  connectedCallback() {
    return __async(this, null, function* () {
      if (typeof customElements !== "undefined" && customElements != null) {
        yield customElements.whenDefined("ion-menu");
      }
      if (this.type === void 0) {
        this.type = config.get("menuType", "overlay");
      }
      const content = this.contentId !== void 0 ? document.getElementById(this.contentId) : null;
      if (content === null) {
        printIonError('[ion-menu] - Must have a "content" element to listen for drag events on.');
        return;
      }
      if (this.el.contains(content)) {
        printIonError(`[ion-menu] - The "contentId" should refer to the main view's ion-content, not the ion-content inside of the ion-menu.`);
      }
      this.contentEl = content;
      content.classList.add("menu-content");
      this.typeChanged(this.type, void 0);
      this.sideChanged();
      menuController._register(this);
      this.menuChanged();
      this.gesture = (yield import("./index-CfgBF1SE-H675UNH5.js")).createGesture({
        el: document,
        gestureName: "menu-swipe",
        gesturePriority: 30,
        threshold: 10,
        blurOnStart: true,
        canStart: (ev) => this.canStart(ev),
        onWillStart: () => this.onWillStart(),
        onStart: () => this.onStart(),
        onMove: (ev) => this.onMove(ev),
        onEnd: (ev) => this.onEnd(ev)
      });
      this.updateState();
    });
  }
  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }
  componentDidLoad() {
    return __async(this, null, function* () {
      this.didLoad = true;
      const splitPane = this.el.closest("ion-split-pane");
      if (splitPane !== null) {
        this.isPaneVisible = yield splitPane.isVisible();
      }
      this.menuChanged();
      this.updateState();
    });
  }
  menuChanged() {
    if (this.didLoad) {
      this.ionMenuChange.emit({
        disabled: this.disabled,
        open: this._isOpen
      });
    }
  }
  disconnectedCallback() {
    return __async(this, null, function* () {
      yield this.close(false);
      this.blocker.destroy();
      menuController._unregister(this);
      if (this.animation) {
        this.animation.destroy();
      }
      if (this.gesture) {
        this.gesture.destroy();
        this.gesture = void 0;
      }
      this.animation = void 0;
      this.contentEl = void 0;
    });
  }
  onSplitPaneChanged(ev) {
    const closestSplitPane = this.el.closest("ion-split-pane");
    if (closestSplitPane !== null && closestSplitPane === ev.target) {
      this.isPaneVisible = ev.detail.visible;
      this.updateState();
    }
  }
  onBackdropClick(ev) {
    if (this._isOpen && this.lastOnEnd < ev.timeStamp - 100) {
      const shouldClose = ev.composedPath ? !ev.composedPath().includes(this.menuInnerEl) : false;
      if (shouldClose) {
        ev.preventDefault();
        ev.stopPropagation();
        this.close(void 0, BACKDROP);
      }
    }
  }
  onKeydown(ev) {
    if (ev.key === "Escape") {
      this.close(void 0, BACKDROP);
    }
  }
  /**
   * Returns `true` is the menu is open.
   */
  isOpen() {
    return Promise.resolve(this._isOpen);
  }
  /**
   * Returns `true` if the menu is active.
   *
   * A menu is active when it can be opened or closed, meaning it's enabled
   * and it's not part of a `ion-split-pane`.
   */
  isActive() {
    return Promise.resolve(this._isActive());
  }
  /**
   * Opens the menu. If the menu is already open or it can't be opened,
   * it returns `false`.
   *
   * @param animated If `true`, the menu will animate when opening.
   * If `false`, the menu will open instantly without animation.
   * Defaults to `true`.
   */
  open(animated = true) {
    return this.setOpen(true, animated);
  }
  /**
   * Closes the menu. If the menu is already closed or it can't be closed,
   * it returns `false`.
   *
   * @param animated If `true`, the menu will animate when closing. If `false`,
   * the menu will close instantly without animation. Defaults to `true`.
   * @param role The role of the element that is closing the menu.
   * This can be useful in a button handler for determining which button was
   * clicked to close the menu. Some examples include:
   * `"cancel"`, `"destructive"`, `"selected"`, and `"backdrop"`.
   */
  close(animated = true, role) {
    return this.setOpen(false, animated, role);
  }
  /**
   * Toggles the menu. If the menu is already open, it will try to close,
   * otherwise it will try to open it.
   * If the operation can't be completed successfully, it returns `false`.
   *
   * @param animated If `true`, the menu will animate when opening/closing.
   * If `false`, the menu will open/close instantly without animation.
   * Defaults to `true`.
   */
  toggle(animated = true) {
    return this.setOpen(!this._isOpen, animated);
  }
  /**
   * Opens or closes the menu.
   * If the operation can't be completed successfully, it returns `false`.
   *
   * @param shouldOpen If `true`, the menu will open. If `false`, the menu
   * will close.
   * @param animated If `true`, the menu will animate when opening/closing.
   * If `false`, the menu will open/close instantly without animation.
   * @param role The role of the element that is closing the menu.
   */
  setOpen(shouldOpen, animated = true, role) {
    return menuController._setOpen(this, shouldOpen, animated, role);
  }
  trapKeyboardFocus(ev, doc) {
    const target = ev.target;
    if (!target) {
      return;
    }
    if (this.el.contains(target)) {
      this.lastFocus = target;
    } else {
      const {
        el
      } = this;
      focusFirstDescendant(el);
      if (this.lastFocus === doc.activeElement) {
        focusLastDescendant(el);
      }
    }
  }
  _setOpen(shouldOpen, animated = true, role) {
    return __async(this, null, function* () {
      if (!this._isActive() || this.isAnimating || shouldOpen === this._isOpen) {
        return false;
      }
      this.beforeAnimation(shouldOpen, role);
      yield this.loadAnimation();
      yield this.startAnimation(shouldOpen, animated);
      if (this.operationCancelled) {
        this.operationCancelled = false;
        return false;
      }
      this.afterAnimation(shouldOpen, role);
      return true;
    });
  }
  loadAnimation() {
    return __async(this, null, function* () {
      const width = this.menuInnerEl.offsetWidth;
      const isEndSide$1 = isEndSide(this.side);
      if (width === this.width && this.animation !== void 0 && isEndSide$1 === this.isEndSide) {
        return;
      }
      this.width = width;
      this.isEndSide = isEndSide$1;
      if (this.animation) {
        this.animation.destroy();
        this.animation = void 0;
      }
      const animation = this.animation = yield menuController._createAnimation(this.type, this);
      if (!config.getBoolean("animated", true)) {
        animation.duration(0);
      }
      animation.fill("both");
    });
  }
  startAnimation(shouldOpen, animated) {
    return __async(this, null, function* () {
      const isReversed = !shouldOpen;
      const mode = getIonMode(this);
      const easing = mode === "ios" ? iosEasing : mdEasing;
      const easingReverse = mode === "ios" ? iosEasingReverse : mdEasingReverse;
      const ani = this.animation.direction(isReversed ? "reverse" : "normal").easing(isReversed ? easingReverse : easing);
      if (animated) {
        yield ani.play();
      } else {
        ani.play({
          sync: true
        });
      }
      if (ani.getDirection() === "reverse") {
        ani.direction("normal");
      }
    });
  }
  _isActive() {
    return !this.disabled && !this.isPaneVisible;
  }
  canSwipe() {
    return this.swipeGesture && !this.isAnimating && this._isActive();
  }
  canStart(detail) {
    const isModalPresented = !!document.querySelector("ion-modal.show-modal");
    if (isModalPresented || !this.canSwipe()) {
      return false;
    }
    if (this._isOpen) {
      return true;
    } else if (menuController._getOpenSync()) {
      return false;
    }
    return checkEdgeSide(window, detail.currentX, this.isEndSide, this.maxEdgeStart);
  }
  onWillStart() {
    this.beforeAnimation(!this._isOpen, GESTURE);
    return this.loadAnimation();
  }
  onStart() {
    if (!this.isAnimating || !this.animation) {
      assert(false, "isAnimating has to be true");
      return;
    }
    this.animation.progressStart(true, this._isOpen ? 1 : 0);
  }
  onMove(detail) {
    if (!this.isAnimating || !this.animation) {
      assert(false, "isAnimating has to be true");
      return;
    }
    const delta = computeDelta(detail.deltaX, this._isOpen, this.isEndSide);
    const stepValue = delta / this.width;
    this.animation.progressStep(this._isOpen ? 1 - stepValue : stepValue);
  }
  onEnd(detail) {
    if (!this.isAnimating || !this.animation) {
      assert(false, "isAnimating has to be true");
      return;
    }
    const isOpen = this._isOpen;
    const isEndSide2 = this.isEndSide;
    const delta = computeDelta(detail.deltaX, isOpen, isEndSide2);
    const width = this.width;
    const stepValue = delta / width;
    const velocity = detail.velocityX;
    const z = width / 2;
    const shouldCompleteRight = velocity >= 0 && (velocity > 0.2 || detail.deltaX > z);
    const shouldCompleteLeft = velocity <= 0 && (velocity < -0.2 || detail.deltaX < -z);
    const shouldComplete = isOpen ? isEndSide2 ? shouldCompleteRight : shouldCompleteLeft : isEndSide2 ? shouldCompleteLeft : shouldCompleteRight;
    let shouldOpen = !isOpen && shouldComplete;
    if (isOpen && !shouldComplete) {
      shouldOpen = true;
    }
    this.lastOnEnd = detail.currentTime;
    let newStepValue = shouldComplete ? 1e-3 : -1e-3;
    const adjustedStepValue = stepValue < 0 ? 0.01 : stepValue;
    newStepValue += getTimeGivenProgression([0, 0], [0.4, 0], [0.6, 1], [1, 1], clamp(0, adjustedStepValue, 0.9999))[0] || 0;
    const playTo = this._isOpen ? !shouldComplete : shouldComplete;
    this.animation.easing("cubic-bezier(0.4, 0.0, 0.6, 1)").onFinish(() => this.afterAnimation(shouldOpen, GESTURE), {
      oneTimeCallback: true
    }).progressEnd(playTo ? 1 : 0, this._isOpen ? 1 - newStepValue : newStepValue, 300);
  }
  beforeAnimation(shouldOpen, role) {
    assert(!this.isAnimating, "_before() should not be called while animating");
    if (isPlatform("android")) {
      this.el.setAttribute("aria-hidden", "true");
    }
    this.el.classList.add(SHOW_MENU);
    this.el.setAttribute("tabindex", "0");
    if (this.backdropEl) {
      this.backdropEl.classList.add(SHOW_BACKDROP);
    }
    if (this.contentEl) {
      this.contentEl.classList.add(MENU_CONTENT_OPEN);
      this.contentEl.setAttribute("aria-hidden", "true");
    }
    this.blocker.block();
    this.isAnimating = true;
    if (shouldOpen) {
      this.ionWillOpen.emit();
    } else {
      this.ionWillClose.emit({
        role
      });
    }
  }
  afterAnimation(isOpen, role) {
    var _a;
    this._isOpen = isOpen;
    this.isAnimating = false;
    if (!this._isOpen) {
      this.blocker.unblock();
    }
    if (isOpen) {
      if (isPlatform("android")) {
        this.el.removeAttribute("aria-hidden");
      }
      this.ionDidOpen.emit();
      const focusedMenu = (_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.closest("ion-menu");
      if (focusedMenu !== this.el) {
        this.el.focus();
      }
      document.addEventListener("focus", this.handleFocus, true);
    } else {
      this.el.removeAttribute("aria-hidden");
      this.el.classList.remove(SHOW_MENU);
      this.el.removeAttribute("tabindex");
      if (this.contentEl) {
        this.contentEl.classList.remove(MENU_CONTENT_OPEN);
        this.contentEl.removeAttribute("aria-hidden");
      }
      if (this.backdropEl) {
        this.backdropEl.classList.remove(SHOW_BACKDROP);
      }
      if (this.animation) {
        this.animation.stop();
      }
      this.ionDidClose.emit({
        role
      });
      document.removeEventListener("focus", this.handleFocus, true);
    }
  }
  updateState() {
    const isActive = this._isActive();
    if (this.gesture) {
      this.gesture.enable(isActive && this.swipeGesture);
    }
    if (!isActive) {
      if (this.isAnimating) {
        this.operationCancelled = true;
      }
      this.afterAnimation(false, GESTURE);
    }
  }
  render() {
    const {
      type,
      disabled,
      el,
      isPaneVisible,
      inheritedAttributes,
      side
    } = this;
    const mode = getIonMode(this);
    return h(Host, {
      key: "a5c75aa40a34530b56ee3b98d706a5ac5ae300de",
      onKeyDown: shouldUseCloseWatcher() ? null : this.onKeydown,
      role: "navigation",
      "aria-label": inheritedAttributes["aria-label"] || "menu",
      class: {
        [mode]: true,
        [`menu-type-${type}`]: true,
        "menu-enabled": !disabled,
        [`menu-side-${side}`]: true,
        "menu-pane-visible": isPaneVisible,
        "split-pane-side": hostContext("ion-split-pane", el)
      }
    }, h("div", {
      key: "3f5f70acd4d3ed6bb445122f4f01d73db738a75f",
      class: "menu-inner",
      part: "container",
      ref: (el2) => this.menuInnerEl = el2
    }, h("slot", {
      key: "3161326c9330e7f7441299c428b87a91b31a83e9"
    })), h("ion-backdrop", {
      key: "917b50f38489bdf03d0c642af8b4e4e172c7dc4c",
      ref: (el2) => this.backdropEl = el2,
      class: "menu-backdrop",
      tappable: false,
      stopPropagation: false,
      part: "backdrop"
    }));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "type": ["typeChanged"],
      "disabled": ["disabledChanged"],
      "side": ["sideChanged"],
      "swipeGesture": ["swipeGestureChanged"]
    };
  }
};
var computeDelta = (deltaX, isOpen, isEndSide2) => {
  return Math.max(0, isOpen !== isEndSide2 ? -deltaX : deltaX);
};
var checkEdgeSide = (win, posX, isEndSide2, maxEdgeStart) => {
  if (isEndSide2) {
    return posX >= win.innerWidth - maxEdgeStart;
  } else {
    return posX <= maxEdgeStart;
  }
};
var SHOW_MENU = "show-menu";
var SHOW_BACKDROP = "show-backdrop";
var MENU_CONTENT_OPEN = "menu-content-open";
Menu.style = {
  ios: menuIosCss,
  md: menuMdCss
};
var updateVisibility = (menu) => __async(null, null, function* () {
  const menuEl = yield menuController.get(menu);
  return !!(menuEl && (yield menuEl.isActive()));
});
var menuButtonIosCss = ':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;min-height:inherit;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;min-height:inherit;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.1;--border-radius:4px;--color:var(--ion-color-primary, #0054e9);--padding-start:5px;--padding-end:5px;min-height:32px;font-size:clamp(31px, 1.9375rem, 38.13px)}:host(.ion-activated){opacity:0.4}@media (any-hover: hover){:host(:hover){opacity:0.6}}';
var menuButtonMdCss = ':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;min-height:inherit;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;min-height:inherit;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.12;--background-hover:currentColor;--background-hover-opacity:.04;--border-radius:50%;--color:initial;--padding-start:8px;--padding-end:8px;width:3rem;height:3rem;font-size:1.5rem}:host(.ion-color.ion-focused)::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}';
var MenuButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.inheritedAttributes = {};
    this.visible = false;
    this.disabled = false;
    this.autoHide = true;
    this.type = "button";
    this.onClick = () => __async(this, null, function* () {
      return menuController.toggle(this.menu);
    });
  }
  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }
  componentDidLoad() {
    this.visibilityChanged();
  }
  visibilityChanged() {
    return __async(this, null, function* () {
      this.visible = yield updateVisibility(this.menu);
    });
  }
  render() {
    const {
      color,
      disabled,
      inheritedAttributes
    } = this;
    const mode = getIonMode(this);
    const menuIcon = config.get("menuIcon", mode === "ios" ? menuOutline : menuSharp);
    const hidden = this.autoHide && !this.visible;
    const attrs = {
      type: this.type
    };
    const ariaLabel = inheritedAttributes["aria-label"] || "menu";
    return h(Host, {
      key: "9f0f0e50d39a6872508220c58e64bb2092a0d7ef",
      onClick: this.onClick,
      "aria-disabled": disabled ? "true" : null,
      "aria-hidden": hidden ? "true" : null,
      class: createColorClasses(color, {
        [mode]: true,
        button: true,
        // ion-buttons target .button
        "menu-button-hidden": hidden,
        "menu-button-disabled": disabled,
        "in-toolbar": hostContext("ion-toolbar", this.el),
        "in-toolbar-color": hostContext("ion-toolbar[color]", this.el),
        "ion-activatable": true,
        "ion-focusable": true
      })
    }, h("button", Object.assign({
      key: "ffebf7083d23501839970059ef8e411b571de197"
    }, attrs, {
      disabled,
      class: "button-native",
      part: "native",
      "aria-label": ariaLabel
    }), h("span", {
      key: "cab0c1c763b3ce33ef11dba1d230f66126e59424",
      class: "button-inner"
    }, h("slot", {
      key: "ccfd2be8479b75b5c63e97e1ca7dfe203e9b36ee"
    }, h("ion-icon", {
      key: "ac254fe7f327b08f1ae3fcea89d5cf0e83c9a96c",
      part: "icon",
      icon: menuIcon,
      mode,
      lazy: false,
      "aria-hidden": "true"
    }))), mode === "md" && h("ion-ripple-effect", {
      key: "f0f17c4ca96e3eed3c1727ee00578d40af8f0115",
      type: "unbounded"
    })));
  }
  get el() {
    return getElement(this);
  }
};
MenuButton.style = {
  ios: menuButtonIosCss,
  md: menuButtonMdCss
};
var menuToggleCss = ":host(.menu-toggle-hidden){display:none}";
var MenuToggle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.visible = false;
    this.autoHide = true;
    this.onClick = () => {
      return menuController.toggle(this.menu);
    };
  }
  connectedCallback() {
    this.visibilityChanged();
  }
  visibilityChanged() {
    return __async(this, null, function* () {
      this.visible = yield updateVisibility(this.menu);
    });
  }
  render() {
    const mode = getIonMode(this);
    const hidden = this.autoHide && !this.visible;
    return h(Host, {
      key: "cd567114769a30bd3871ed5d15bf42aed39956e1",
      onClick: this.onClick,
      "aria-hidden": hidden ? "true" : null,
      class: {
        [mode]: true,
        "menu-toggle-hidden": hidden
      }
    }, h("slot", {
      key: "773d4cff95ca75f23578b1e1dca53c9933f28a33"
    }));
  }
};
MenuToggle.style = menuToggleCss;
export {
  Menu as ion_menu,
  MenuButton as ion_menu_button,
  MenuToggle as ion_menu_toggle
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-menu_3.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tbWVudV8zLmVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgY3JlYXRlRXZlbnQsIGUgYXMgY29uZmlnLCBqIGFzIHByaW50SW9uRXJyb3IsIGgsIGQgYXMgSG9zdCwgZyBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9pbmRleC00RHhZNl9nRy5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldFRpbWVHaXZlblByb2dyZXNzaW9uIH0gZnJvbSAnLi9jdWJpYy1iZXppZXItaEhtWUxPZkUuanMnO1xuaW1wb3J0IHsgbyBhcyBnZXRQcmVzZW50ZWRPdmVybGF5LCBCIGFzIEJBQ0tEUk9QLCBuIGFzIGZvY3VzRmlyc3REZXNjZW5kYW50LCBxIGFzIGZvY3VzTGFzdERlc2NlbmRhbnQsIEcgYXMgR0VTVFVSRSB9IGZyb20gJy4vb3ZlcmxheXMtWlhfNC10X3IuanMnO1xuaW1wb3J0IHsgRyBhcyBHRVNUVVJFX0NPTlRST0xMRVIgfSBmcm9tICcuL2dlc3R1cmUtY29udHJvbGxlci1CVEVPczFhdC5qcyc7XG5pbXBvcnQgeyBzaG91bGRVc2VDbG9zZVdhdGNoZXIgfSBmcm9tICcuL2hhcmR3YXJlLWJhY2stYnV0dG9uLURoYmQtMjNILmpzJztcbmltcG9ydCB7IG8gYXMgaXNFbmRTaWRlLCBpIGFzIGluaGVyaXRBcmlhQXR0cmlidXRlcywgbCBhcyBhc3NlcnQsIGUgYXMgY2xhbXAgfSBmcm9tICcuL2hlbHBlcnMtOEtTUVFHUXkuanMnO1xuaW1wb3J0IHsgbSBhcyBtZW51Q29udHJvbGxlciB9IGZyb20gJy4vaW5kZXgtQ1hTVGNhQVcuanMnO1xuaW1wb3J0IHsgYiBhcyBnZXRJb25Nb2RlLCBhIGFzIGlzUGxhdGZvcm0gfSBmcm9tICcuL2lvbmljLWdsb2JhbC1DVFN5dWZoRi5qcyc7XG5pbXBvcnQgeyBoIGFzIGhvc3RDb250ZXh0LCBjIGFzIGNyZWF0ZUNvbG9yQ2xhc3NlcyB9IGZyb20gJy4vdGhlbWUtRGlWSnlxbFguanMnO1xuaW1wb3J0IHsgdSBhcyBtZW51T3V0bGluZSwgdiBhcyBtZW51U2hhcnAgfSBmcm9tICcuL2luZGV4LURWM3NKSlc4LmpzJztcbmltcG9ydCAnLi9pbmRleC1aalA0Q2plWi5qcyc7XG5pbXBvcnQgJy4vZnJhbWV3b3JrLWRlbGVnYXRlLUJMRUJnSDA2LmpzJztcbmltcG9ydCAnLi9hbmltYXRpb24tQnZoQXRnY2EuanMnO1xuY29uc3QgbWVudUlvc0NzcyA9IFwiOmhvc3R7LS13aWR0aDozMDRweDstLW1pbi13aWR0aDphdXRvOy0tbWF4LXdpZHRoOmF1dG87LS1oZWlnaHQ6MTAwJTstLW1pbi1oZWlnaHQ6YXV0bzstLW1heC1oZWlnaHQ6YXV0bzstLWJhY2tncm91bmQ6dmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpO2xlZnQ6MDtyaWdodDowO3RvcDowO2JvdHRvbTowO2Rpc3BsYXk6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTtjb250YWluOnN0cmljdH06aG9zdCguc2hvdy1tZW51KXtkaXNwbGF5OmJsb2NrfS5tZW51LWlubmVyey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTk5OTlweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTk5OTlweCk7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246YWJzb2x1dGU7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47LW1zLWZsZXgtcGFjazpqdXN0aWZ5O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO3dpZHRoOnZhcigtLXdpZHRoKTttaW4td2lkdGg6dmFyKC0tbWluLXdpZHRoKTttYXgtd2lkdGg6dmFyKC0tbWF4LXdpZHRoKTtoZWlnaHQ6dmFyKC0taGVpZ2h0KTttaW4taGVpZ2h0OnZhcigtLW1pbi1oZWlnaHQpO21heC1oZWlnaHQ6dmFyKC0tbWF4LWhlaWdodCk7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTtjb250YWluOnN0cmljdH06aG9zdCgubWVudS1zaWRlLXN0YXJ0KSAubWVudS1pbm5lcnstLWlvbi1zYWZlLWFyZWEtcmlnaHQ6MHB4O3RvcDowO2JvdHRvbTowfTpob3N0KC5tZW51LXNpZGUtc3RhcnQpIC5tZW51LWlubmVye2luc2V0LWlubGluZS1zdGFydDowO2luc2V0LWlubGluZS1lbmQ6YXV0b306aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCgubWVudS1zaWRlLXN0YXJ0KSAubWVudS1pbm5lciw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkubWVudS1zaWRlLXN0YXJ0IC5tZW51LWlubmVyey0taW9uLXNhZmUtYXJlYS1yaWdodDp1bnNldDstLWlvbi1zYWZlLWFyZWEtbGVmdDowcHh9QHN1cHBvcnRzIHNlbGVjdG9yKDpkaXIocnRsKSl7Omhvc3QoLm1lbnUtc2lkZS1zdGFydDpkaXIocnRsKSkgLm1lbnUtaW5uZXJ7LS1pb24tc2FmZS1hcmVhLXJpZ2h0OnVuc2V0Oy0taW9uLXNhZmUtYXJlYS1sZWZ0OjBweH19Omhvc3QoLm1lbnUtc2lkZS1lbmQpIC5tZW51LWlubmVyey0taW9uLXNhZmUtYXJlYS1sZWZ0OjBweDt0b3A6MDtib3R0b206MH06aG9zdCgubWVudS1zaWRlLWVuZCkgLm1lbnUtaW5uZXJ7aW5zZXQtaW5saW5lLXN0YXJ0OmF1dG87aW5zZXQtaW5saW5lLWVuZDowfTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0KC5tZW51LXNpZGUtZW5kKSAubWVudS1pbm5lciw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkubWVudS1zaWRlLWVuZCAubWVudS1pbm5lcnstLWlvbi1zYWZlLWFyZWEtbGVmdDp1bnNldDstLWlvbi1zYWZlLWFyZWEtcmlnaHQ6MHB4fUBzdXBwb3J0cyBzZWxlY3Rvcig6ZGlyKHJ0bCkpezpob3N0KC5tZW51LXNpZGUtZW5kOmRpcihydGwpKSAubWVudS1pbm5lcnstLWlvbi1zYWZlLWFyZWEtbGVmdDp1bnNldDstLWlvbi1zYWZlLWFyZWEtcmlnaHQ6MHB4fX1pb24tYmFja2Ryb3B7ZGlzcGxheTpub25lO29wYWNpdHk6MC4wMTt6LWluZGV4Oi0xfUBtZWRpYSAobWF4LXdpZHRoOiAzNDBweCl7Lm1lbnUtaW5uZXJ7LS13aWR0aDoyNjRweH19Omhvc3QoLm1lbnUtdHlwZS1yZXZlYWwpe3otaW5kZXg6MH06aG9zdCgubWVudS10eXBlLXJldmVhbC5zaG93LW1lbnUpIC5tZW51LWlubmVyey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsICAwLCAgMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsICAwLCAgMCl9Omhvc3QoLm1lbnUtdHlwZS1vdmVybGF5KXt6LWluZGV4OjEwMDB9Omhvc3QoLm1lbnUtdHlwZS1vdmVybGF5KSAuc2hvdy1iYWNrZHJvcHtkaXNwbGF5OmJsb2NrO2N1cnNvcjpwb2ludGVyfTpob3N0KC5tZW51LXBhbmUtdmlzaWJsZSl7LW1zLWZsZXg6MCAxIGF1dG87ZmxleDowIDEgYXV0bzt3aWR0aDp2YXIoLS1zaWRlLXdpZHRoLCB2YXIoLS13aWR0aCkpO21pbi13aWR0aDp2YXIoLS1zaWRlLW1pbi13aWR0aCwgdmFyKC0tbWluLXdpZHRoKSk7bWF4LXdpZHRoOnZhcigtLXNpZGUtbWF4LXdpZHRoLCB2YXIoLS1tYXgtd2lkdGgpKX06aG9zdCgubWVudS1wYW5lLXZpc2libGUuc3BsaXQtcGFuZS1zaWRlKXtsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MDtwb3NpdGlvbjpyZWxhdGl2ZTstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmU7ei1pbmRleDowfTpob3N0KC5tZW51LXBhbmUtdmlzaWJsZS5zcGxpdC1wYW5lLXNpZGUubWVudS1lbmFibGVkKXtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1uZWdhdGl2ZTowO2ZsZXgtc2hyaW5rOjB9Omhvc3QoLm1lbnUtcGFuZS12aXNpYmxlLnNwbGl0LXBhbmUtc2lkZSl7LW1zLWZsZXgtb3JkZXI6LTE7b3JkZXI6LTF9Omhvc3QoLm1lbnUtcGFuZS12aXNpYmxlLnNwbGl0LXBhbmUtc2lkZVtzaWRlPWVuZF0pey1tcy1mbGV4LW9yZGVyOjE7b3JkZXI6MX06aG9zdCgubWVudS1wYW5lLXZpc2libGUpIC5tZW51LWlubmVye2xlZnQ6MDtyaWdodDowO3dpZHRoOmF1dG87LXdlYmtpdC10cmFuc2Zvcm06bm9uZTt0cmFuc2Zvcm06bm9uZTstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmV9Omhvc3QoLm1lbnUtcGFuZS12aXNpYmxlKSBpb24tYmFja2Ryb3B7ZGlzcGxheTpoaWRkZW4gIWltcG9ydGFudH06aG9zdCgubWVudS1wYW5lLXZpc2libGUuc3BsaXQtcGFuZS1zaWRlKXstd2Via2l0LWJvcmRlci1zdGFydDowO2JvcmRlci1pbmxpbmUtc3RhcnQ6MDstd2Via2l0LWJvcmRlci1lbmQ6dmFyKC0tYm9yZGVyKTtib3JkZXItaW5saW5lLWVuZDp2YXIoLS1ib3JkZXIpO2JvcmRlci10b3A6MDtib3JkZXItYm90dG9tOjA7bWluLXdpZHRoOnZhcigtLXNpZGUtbWluLXdpZHRoKTttYXgtd2lkdGg6dmFyKC0tc2lkZS1tYXgtd2lkdGgpfTpob3N0KC5tZW51LXBhbmUtdmlzaWJsZS5zcGxpdC1wYW5lLXNpZGVbc2lkZT1lbmRdKXstd2Via2l0LWJvcmRlci1zdGFydDp2YXIoLS1ib3JkZXIpO2JvcmRlci1pbmxpbmUtc3RhcnQ6dmFyKC0tYm9yZGVyKTstd2Via2l0LWJvcmRlci1lbmQ6MDtib3JkZXItaW5saW5lLWVuZDowO2JvcmRlci10b3A6MDtib3JkZXItYm90dG9tOjA7bWluLXdpZHRoOnZhcigtLXNpZGUtbWluLXdpZHRoKTttYXgtd2lkdGg6dmFyKC0tc2lkZS1tYXgtd2lkdGgpfTpob3N0KC5tZW51LXR5cGUtcHVzaCl7ei1pbmRleDoxMDAwfTpob3N0KC5tZW51LXR5cGUtcHVzaCkgLnNob3ctYmFja2Ryb3B7ZGlzcGxheTpibG9ja31cIjtcbmNvbnN0IG1lbnVNZENzcyA9IFwiOmhvc3R7LS13aWR0aDozMDRweDstLW1pbi13aWR0aDphdXRvOy0tbWF4LXdpZHRoOmF1dG87LS1oZWlnaHQ6MTAwJTstLW1pbi1oZWlnaHQ6YXV0bzstLW1heC1oZWlnaHQ6YXV0bzstLWJhY2tncm91bmQ6dmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpO2xlZnQ6MDtyaWdodDowO3RvcDowO2JvdHRvbTowO2Rpc3BsYXk6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTtjb250YWluOnN0cmljdH06aG9zdCguc2hvdy1tZW51KXtkaXNwbGF5OmJsb2NrfS5tZW51LWlubmVyey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTk5OTlweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTk5OTlweCk7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246YWJzb2x1dGU7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47LW1zLWZsZXgtcGFjazpqdXN0aWZ5O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO3dpZHRoOnZhcigtLXdpZHRoKTttaW4td2lkdGg6dmFyKC0tbWluLXdpZHRoKTttYXgtd2lkdGg6dmFyKC0tbWF4LXdpZHRoKTtoZWlnaHQ6dmFyKC0taGVpZ2h0KTttaW4taGVpZ2h0OnZhcigtLW1pbi1oZWlnaHQpO21heC1oZWlnaHQ6dmFyKC0tbWF4LWhlaWdodCk7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTtjb250YWluOnN0cmljdH06aG9zdCgubWVudS1zaWRlLXN0YXJ0KSAubWVudS1pbm5lcnstLWlvbi1zYWZlLWFyZWEtcmlnaHQ6MHB4O3RvcDowO2JvdHRvbTowfTpob3N0KC5tZW51LXNpZGUtc3RhcnQpIC5tZW51LWlubmVye2luc2V0LWlubGluZS1zdGFydDowO2luc2V0LWlubGluZS1lbmQ6YXV0b306aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCgubWVudS1zaWRlLXN0YXJ0KSAubWVudS1pbm5lciw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkubWVudS1zaWRlLXN0YXJ0IC5tZW51LWlubmVyey0taW9uLXNhZmUtYXJlYS1yaWdodDp1bnNldDstLWlvbi1zYWZlLWFyZWEtbGVmdDowcHh9QHN1cHBvcnRzIHNlbGVjdG9yKDpkaXIocnRsKSl7Omhvc3QoLm1lbnUtc2lkZS1zdGFydDpkaXIocnRsKSkgLm1lbnUtaW5uZXJ7LS1pb24tc2FmZS1hcmVhLXJpZ2h0OnVuc2V0Oy0taW9uLXNhZmUtYXJlYS1sZWZ0OjBweH19Omhvc3QoLm1lbnUtc2lkZS1lbmQpIC5tZW51LWlubmVyey0taW9uLXNhZmUtYXJlYS1sZWZ0OjBweDt0b3A6MDtib3R0b206MH06aG9zdCgubWVudS1zaWRlLWVuZCkgLm1lbnUtaW5uZXJ7aW5zZXQtaW5saW5lLXN0YXJ0OmF1dG87aW5zZXQtaW5saW5lLWVuZDowfTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0KC5tZW51LXNpZGUtZW5kKSAubWVudS1pbm5lciw6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkubWVudS1zaWRlLWVuZCAubWVudS1pbm5lcnstLWlvbi1zYWZlLWFyZWEtbGVmdDp1bnNldDstLWlvbi1zYWZlLWFyZWEtcmlnaHQ6MHB4fUBzdXBwb3J0cyBzZWxlY3Rvcig6ZGlyKHJ0bCkpezpob3N0KC5tZW51LXNpZGUtZW5kOmRpcihydGwpKSAubWVudS1pbm5lcnstLWlvbi1zYWZlLWFyZWEtbGVmdDp1bnNldDstLWlvbi1zYWZlLWFyZWEtcmlnaHQ6MHB4fX1pb24tYmFja2Ryb3B7ZGlzcGxheTpub25lO29wYWNpdHk6MC4wMTt6LWluZGV4Oi0xfUBtZWRpYSAobWF4LXdpZHRoOiAzNDBweCl7Lm1lbnUtaW5uZXJ7LS13aWR0aDoyNjRweH19Omhvc3QoLm1lbnUtdHlwZS1yZXZlYWwpe3otaW5kZXg6MH06aG9zdCgubWVudS10eXBlLXJldmVhbC5zaG93LW1lbnUpIC5tZW51LWlubmVyey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsICAwLCAgMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsICAwLCAgMCl9Omhvc3QoLm1lbnUtdHlwZS1vdmVybGF5KXt6LWluZGV4OjEwMDB9Omhvc3QoLm1lbnUtdHlwZS1vdmVybGF5KSAuc2hvdy1iYWNrZHJvcHtkaXNwbGF5OmJsb2NrO2N1cnNvcjpwb2ludGVyfTpob3N0KC5tZW51LXBhbmUtdmlzaWJsZSl7LW1zLWZsZXg6MCAxIGF1dG87ZmxleDowIDEgYXV0bzt3aWR0aDp2YXIoLS1zaWRlLXdpZHRoLCB2YXIoLS13aWR0aCkpO21pbi13aWR0aDp2YXIoLS1zaWRlLW1pbi13aWR0aCwgdmFyKC0tbWluLXdpZHRoKSk7bWF4LXdpZHRoOnZhcigtLXNpZGUtbWF4LXdpZHRoLCB2YXIoLS1tYXgtd2lkdGgpKX06aG9zdCgubWVudS1wYW5lLXZpc2libGUuc3BsaXQtcGFuZS1zaWRlKXtsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MDtwb3NpdGlvbjpyZWxhdGl2ZTstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmU7ei1pbmRleDowfTpob3N0KC5tZW51LXBhbmUtdmlzaWJsZS5zcGxpdC1wYW5lLXNpZGUubWVudS1lbmFibGVkKXtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1uZWdhdGl2ZTowO2ZsZXgtc2hyaW5rOjB9Omhvc3QoLm1lbnUtcGFuZS12aXNpYmxlLnNwbGl0LXBhbmUtc2lkZSl7LW1zLWZsZXgtb3JkZXI6LTE7b3JkZXI6LTF9Omhvc3QoLm1lbnUtcGFuZS12aXNpYmxlLnNwbGl0LXBhbmUtc2lkZVtzaWRlPWVuZF0pey1tcy1mbGV4LW9yZGVyOjE7b3JkZXI6MX06aG9zdCgubWVudS1wYW5lLXZpc2libGUpIC5tZW51LWlubmVye2xlZnQ6MDtyaWdodDowO3dpZHRoOmF1dG87LXdlYmtpdC10cmFuc2Zvcm06bm9uZTt0cmFuc2Zvcm06bm9uZTstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmV9Omhvc3QoLm1lbnUtcGFuZS12aXNpYmxlKSBpb24tYmFja2Ryb3B7ZGlzcGxheTpoaWRkZW4gIWltcG9ydGFudH06aG9zdCgubWVudS1wYW5lLXZpc2libGUuc3BsaXQtcGFuZS1zaWRlKXstd2Via2l0LWJvcmRlci1zdGFydDowO2JvcmRlci1pbmxpbmUtc3RhcnQ6MDstd2Via2l0LWJvcmRlci1lbmQ6dmFyKC0tYm9yZGVyKTtib3JkZXItaW5saW5lLWVuZDp2YXIoLS1ib3JkZXIpO2JvcmRlci10b3A6MDtib3JkZXItYm90dG9tOjA7bWluLXdpZHRoOnZhcigtLXNpZGUtbWluLXdpZHRoKTttYXgtd2lkdGg6dmFyKC0tc2lkZS1tYXgtd2lkdGgpfTpob3N0KC5tZW51LXBhbmUtdmlzaWJsZS5zcGxpdC1wYW5lLXNpZGVbc2lkZT1lbmRdKXstd2Via2l0LWJvcmRlci1zdGFydDp2YXIoLS1ib3JkZXIpO2JvcmRlci1pbmxpbmUtc3RhcnQ6dmFyKC0tYm9yZGVyKTstd2Via2l0LWJvcmRlci1lbmQ6MDtib3JkZXItaW5saW5lLWVuZDowO2JvcmRlci10b3A6MDtib3JkZXItYm90dG9tOjA7bWluLXdpZHRoOnZhcigtLXNpZGUtbWluLXdpZHRoKTttYXgtd2lkdGg6dmFyKC0tc2lkZS1tYXgtd2lkdGgpfTpob3N0KC5tZW51LXR5cGUtb3ZlcmxheSkgLm1lbnUtaW5uZXJ7LXdlYmtpdC1ib3gtc2hhZG93OjRweCAwcHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMTgpO2JveC1zaGFkb3c6NHB4IDBweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xOCl9XCI7XG5jb25zdCBpb3NFYXNpbmcgPSAnY3ViaWMtYmV6aWVyKDAuMzIsMC43MiwwLDEpJztcbmNvbnN0IG1kRWFzaW5nID0gJ2N1YmljLWJlemllcigwLjAsMC4wLDAuMiwxKSc7XG5jb25zdCBpb3NFYXNpbmdSZXZlcnNlID0gJ2N1YmljLWJlemllcigxLCAwLCAwLjY4LCAwLjI4KSc7XG5jb25zdCBtZEVhc2luZ1JldmVyc2UgPSAnY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC42LCAxKSc7XG5jb25zdCBNZW51ID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmlvbldpbGxPcGVuID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25XaWxsT3BlblwiLCA3KTtcbiAgICB0aGlzLmlvbldpbGxDbG9zZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uV2lsbENsb3NlXCIsIDcpO1xuICAgIHRoaXMuaW9uRGlkT3BlbiA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uRGlkT3BlblwiLCA3KTtcbiAgICB0aGlzLmlvbkRpZENsb3NlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25EaWRDbG9zZVwiLCA3KTtcbiAgICB0aGlzLmlvbk1lbnVDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbk1lbnVDaGFuZ2VcIiwgNyk7XG4gICAgdGhpcy5sYXN0T25FbmQgPSAwO1xuICAgIHRoaXMuYmxvY2tlciA9IEdFU1RVUkVfQ09OVFJPTExFUi5jcmVhdGVCbG9ja2VyKHtcbiAgICAgIGRpc2FibGVTY3JvbGw6IHRydWVcbiAgICB9KTtcbiAgICB0aGlzLmRpZExvYWQgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBGbGFnIHVzZWQgdG8gZGV0ZXJtaW5lIGlmIGFuIG9wZW4vY2xvc2VcbiAgICAgKiBvcGVyYXRpb24gd2FzIGNhbmNlbGxlZC4gRm9yIGV4YW1wbGUsIGlmXG4gICAgICogYW4gYXBwIGNhbGxzIFwibWVudS5vcGVuXCIgdGhlbiBkaXNhYmxlcyB0aGUgbWVudVxuICAgICAqIHBhcnQgd2F5IHRocm91Z2ggdGhlIGFuaW1hdGlvbiwgdGhlbiB0aGlzIHdvdWxkXG4gICAgICogYmUgY29uc2lkZXJlZCBhIGNhbmNlbGxlZCBvcGVyYXRpb24uXG4gICAgICovXG4gICAgdGhpcy5vcGVyYXRpb25DYW5jZWxsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmlzQW5pbWF0aW5nID0gZmFsc2U7XG4gICAgdGhpcy5faXNPcGVuID0gZmFsc2U7XG4gICAgdGhpcy5pbmhlcml0ZWRBdHRyaWJ1dGVzID0ge307XG4gICAgdGhpcy5oYW5kbGVGb2N1cyA9IGV2ID0+IHtcbiAgICAgIC8qKlxuICAgICAgICogT3ZlcmxheXMgaGF2ZSB0aGVpciBvd24gZm9jdXMgdHJhcHBpbmcgbGlzdGVuZXJcbiAgICAgICAqIHNvIHdlIGRvIG5vdCB3YW50IHRoZSB0d28gbGlzdGVuZXJzIHRvIGNvbmZsaWN0XG4gICAgICAgKiB3aXRoIGVhY2ggb3RoZXIuIElmIHRoZSB0b3AtbW9zdCBvdmVybGF5IHRoYXQgaXNcbiAgICAgICAqIG9wZW4gZG9lcyBub3QgY29udGFpbiB0aGlzIGlvbi1tZW51LCB0aGVuIGlvbi1tZW51J3NcbiAgICAgICAqIGZvY3VzIHRyYXBwaW5nIHNob3VsZCBub3QgcnVuLlxuICAgICAgICovXG4gICAgICBjb25zdCBsYXN0T3ZlcmxheSA9IGdldFByZXNlbnRlZE92ZXJsYXkoZG9jdW1lbnQpO1xuICAgICAgaWYgKGxhc3RPdmVybGF5ICYmICFsYXN0T3ZlcmxheS5jb250YWlucyh0aGlzLmVsKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnRyYXBLZXlib2FyZEZvY3VzKGV2LCBkb2N1bWVudCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCB0aGVuIHRoZSBtZW51IHNob3VsZCBiZVxuICAgICAqIHZpc2libGUgd2l0aGluIGEgc3BsaXQgcGFuZS5cbiAgICAgKiBJZiBmYWxzZSwgdGhlbiB0aGUgbWVudSBpcyBoaWRkZW4uXG4gICAgICogSG93ZXZlciwgdGhlIG1lbnUtYnV0dG9uL21lbnUtdG9nZ2xlXG4gICAgICogY29tcG9uZW50cyBjYW4gYmUgdXNlZCB0byBvcGVuIHRoZVxuICAgICAqIG1lbnUuXG4gICAgICovXG4gICAgdGhpcy5pc1BhbmVWaXNpYmxlID0gZmFsc2U7XG4gICAgdGhpcy5pc0VuZFNpZGUgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBtZW51IGlzIGRpc2FibGVkLlxuICAgICAqL1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBXaGljaCBzaWRlIG9mIHRoZSB2aWV3IHRoZSBtZW51IHNob3VsZCBiZSBwbGFjZWQuXG4gICAgICovXG4gICAgdGhpcy5zaWRlID0gJ3N0YXJ0JztcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIHN3aXBpbmcgdGhlIG1lbnUgaXMgZW5hYmxlZC5cbiAgICAgKi9cbiAgICB0aGlzLnN3aXBlR2VzdHVyZSA9IHRydWU7XG4gICAgLyoqXG4gICAgICogVGhlIGVkZ2UgdGhyZXNob2xkIGZvciBkcmFnZ2luZyB0aGUgbWVudSBvcGVuLlxuICAgICAqIElmIGEgZHJhZy9zd2lwZSBoYXBwZW5zIG92ZXIgdGhpcyB2YWx1ZSwgdGhlIG1lbnUgaXMgbm90IHRyaWdnZXJlZC5cbiAgICAgKi9cbiAgICB0aGlzLm1heEVkZ2VTdGFydCA9IDUwO1xuICB9XG4gIHR5cGVDaGFuZ2VkKHR5cGUsIG9sZFR5cGUpIHtcbiAgICBjb25zdCBjb250ZW50RWwgPSB0aGlzLmNvbnRlbnRFbDtcbiAgICBpZiAoY29udGVudEVsKSB7XG4gICAgICBpZiAob2xkVHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnRlbnRFbC5jbGFzc0xpc3QucmVtb3ZlKGBtZW51LWNvbnRlbnQtJHtvbGRUeXBlfWApO1xuICAgICAgfVxuICAgICAgY29udGVudEVsLmNsYXNzTGlzdC5hZGQoYG1lbnUtY29udGVudC0ke3R5cGV9YCk7XG4gICAgICBjb250ZW50RWwucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgIH1cbiAgICBpZiAodGhpcy5tZW51SW5uZXJFbCkge1xuICAgICAgLy8gUmVtb3ZlIGVmZmVjdHMgb2YgcHJldmlvdXMgYW5pbWF0aW9uc1xuICAgICAgdGhpcy5tZW51SW5uZXJFbC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgfVxuICAgIHRoaXMuYW5pbWF0aW9uID0gdW5kZWZpbmVkO1xuICB9XG4gIGRpc2FibGVkQ2hhbmdlZCgpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgdGhpcy5pb25NZW51Q2hhbmdlLmVtaXQoe1xuICAgICAgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQsXG4gICAgICBvcGVuOiB0aGlzLl9pc09wZW5cbiAgICB9KTtcbiAgfVxuICBzaWRlQ2hhbmdlZCgpIHtcbiAgICB0aGlzLmlzRW5kU2lkZSA9IGlzRW5kU2lkZSh0aGlzLnNpZGUpO1xuICAgIC8qKlxuICAgICAqIE1lbnUgZGlyZWN0aW9uIGFuaW1hdGlvbiBpcyBjYWxjdWxhdGVkIGJhc2VkIG9uIHRoZSBkb2N1bWVudCBkaXJlY3Rpb24uXG4gICAgICogSWYgdGhlIGRvY3VtZW50IGRpcmVjdGlvbiBjaGFuZ2VzLCB3ZSBuZWVkIHRvIGNyZWF0ZSBhIG5ldyBhbmltYXRpb24uXG4gICAgICovXG4gICAgdGhpcy5hbmltYXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cbiAgc3dpcGVHZXN0dXJlQ2hhbmdlZCgpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gIH1cbiAgYXN5bmMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgLy8gVE9ETzogY29ubmVjdGVkQ2FsbGJhY2sgaXMgZmlyZWQgaW4gQ0UgYnVpbGRcbiAgICAvLyBiZWZvcmUgV0MgaXMgZGVmaW5lZC4gVGhpcyBuZWVkcyB0byBiZSBmaXhlZCBpbiBTdGVuY2lsLlxuICAgIGlmICh0eXBlb2YgY3VzdG9tRWxlbWVudHMgIT09ICd1bmRlZmluZWQnICYmIGN1c3RvbUVsZW1lbnRzICE9IG51bGwpIHtcbiAgICAgIGF3YWl0IGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKCdpb24tbWVudScpO1xuICAgIH1cbiAgICBpZiAodGhpcy50eXBlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMudHlwZSA9IGNvbmZpZy5nZXQoJ21lbnVUeXBlJywgJ292ZXJsYXknKTtcbiAgICB9XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuY29udGVudElkICE9PSB1bmRlZmluZWQgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmNvbnRlbnRJZCkgOiBudWxsO1xuICAgIGlmIChjb250ZW50ID09PSBudWxsKSB7XG4gICAgICBwcmludElvbkVycm9yKCdbaW9uLW1lbnVdIC0gTXVzdCBoYXZlIGEgXCJjb250ZW50XCIgZWxlbWVudCB0byBsaXN0ZW4gZm9yIGRyYWcgZXZlbnRzIG9uLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5lbC5jb250YWlucyhjb250ZW50KSkge1xuICAgICAgcHJpbnRJb25FcnJvcihgW2lvbi1tZW51XSAtIFRoZSBcImNvbnRlbnRJZFwiIHNob3VsZCByZWZlciB0byB0aGUgbWFpbiB2aWV3J3MgaW9uLWNvbnRlbnQsIG5vdCB0aGUgaW9uLWNvbnRlbnQgaW5zaWRlIG9mIHRoZSBpb24tbWVudS5gKTtcbiAgICB9XG4gICAgdGhpcy5jb250ZW50RWwgPSBjb250ZW50O1xuICAgIC8vIGFkZCBtZW51J3MgY29udGVudCBjbGFzc2VzXG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdtZW51LWNvbnRlbnQnKTtcbiAgICB0aGlzLnR5cGVDaGFuZ2VkKHRoaXMudHlwZSwgdW5kZWZpbmVkKTtcbiAgICB0aGlzLnNpZGVDaGFuZ2VkKCk7XG4gICAgLy8gcmVnaXN0ZXIgdGhpcyBtZW51IHdpdGggdGhlIGFwcCdzIG1lbnUgY29udHJvbGxlclxuICAgIG1lbnVDb250cm9sbGVyLl9yZWdpc3Rlcih0aGlzKTtcbiAgICB0aGlzLm1lbnVDaGFuZ2VkKCk7XG4gICAgdGhpcy5nZXN0dXJlID0gKGF3YWl0IGltcG9ydCgnLi9pbmRleC1DZmdCRjFTRS5qcycpKS5jcmVhdGVHZXN0dXJlKHtcbiAgICAgIGVsOiBkb2N1bWVudCxcbiAgICAgIGdlc3R1cmVOYW1lOiAnbWVudS1zd2lwZScsXG4gICAgICBnZXN0dXJlUHJpb3JpdHk6IDMwLFxuICAgICAgdGhyZXNob2xkOiAxMCxcbiAgICAgIGJsdXJPblN0YXJ0OiB0cnVlLFxuICAgICAgY2FuU3RhcnQ6IGV2ID0+IHRoaXMuY2FuU3RhcnQoZXYpLFxuICAgICAgb25XaWxsU3RhcnQ6ICgpID0+IHRoaXMub25XaWxsU3RhcnQoKSxcbiAgICAgIG9uU3RhcnQ6ICgpID0+IHRoaXMub25TdGFydCgpLFxuICAgICAgb25Nb3ZlOiBldiA9PiB0aGlzLm9uTW92ZShldiksXG4gICAgICBvbkVuZDogZXYgPT4gdGhpcy5vbkVuZChldilcbiAgICB9KTtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gIH1cbiAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgdGhpcy5pbmhlcml0ZWRBdHRyaWJ1dGVzID0gaW5oZXJpdEFyaWFBdHRyaWJ1dGVzKHRoaXMuZWwpO1xuICB9XG4gIGFzeW5jIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgdGhpcy5kaWRMb2FkID0gdHJ1ZTtcbiAgICAvKipcbiAgICAgKiBBIG1lbnUgaW5zaWRlIG9mIGEgc3BsaXQgcGFuZSBpcyBhc3N1bWVkXG4gICAgICogdG8gYmUgYSBzaWRlIHBhbmUuXG4gICAgICpcbiAgICAgKiBXaGVuIHRoZSBtZW51IGlzIGxvYWRlZCBpdCBuZWVkcyB0b1xuICAgICAqIHNlZSBpZiBpdCBzaG91bGQgYmUgY29uc2lkZXJlZCB2aXNpYmxlIGluc2lkZVxuICAgICAqIG9mIHRoZSBzcGxpdCBwYW5lLiBJZiB0aGUgc3BsaXQgcGFuZSBpc1xuICAgICAqIGhpZGRlbiB0aGVuIHRoZSBtZW51IHNob3VsZCBiZSB0b28uXG4gICAgICovXG4gICAgY29uc3Qgc3BsaXRQYW5lID0gdGhpcy5lbC5jbG9zZXN0KCdpb24tc3BsaXQtcGFuZScpO1xuICAgIGlmIChzcGxpdFBhbmUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuaXNQYW5lVmlzaWJsZSA9IGF3YWl0IHNwbGl0UGFuZS5pc1Zpc2libGUoKTtcbiAgICB9XG4gICAgdGhpcy5tZW51Q2hhbmdlZCgpO1xuICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgfVxuICBtZW51Q2hhbmdlZCgpIHtcbiAgICAvKipcbiAgICAgKiBJbmZvcm0gZGVwZW5kZW50IGNvbXBvbmVudHMgc3VjaCBhcyBpb24tbWVudS1idXR0b25cbiAgICAgKiB0aGF0IHRoZSBtZW51IGlzIHJlYWR5LiBOb3RlIHRoYXQgd2Ugb25seSB3YW50IHRvIGRvIHRoaXNcbiAgICAgKiBvbmNlIHRoZSBtZW51IGhhcyBiZWVuIHJlbmRlcmVkIHdoaWNoIGlzIHdoeSB3ZSBjaGVjayBmb3IgZGlkTG9hZC5cbiAgICAgKi9cbiAgICBpZiAodGhpcy5kaWRMb2FkKSB7XG4gICAgICB0aGlzLmlvbk1lbnVDaGFuZ2UuZW1pdCh7XG4gICAgICAgIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkLFxuICAgICAgICBvcGVuOiB0aGlzLl9pc09wZW5cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBhc3luYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgbWVudSBzaG91bGQgYmUgY2xvc2VkIHdoZW4gaXQgaXNcbiAgICAgKiB1bm1vdW50ZWQgZnJvbSB0aGUgRE9NLlxuICAgICAqIFRoaXMgaXMgYW4gYXN5bmMgY2FsbCwgc28gd2UgbmVlZCB0byB3YWl0IGZvclxuICAgICAqIHRoaXMgdG8gZmluaXNoIG90aGVyd2lzZSBjb250ZW50RWxcbiAgICAgKiB3aWxsIG5vdCBoYXZlIE1FTlVfQ09OVEVOVF9PUEVOIHJlbW92ZWQuXG4gICAgICovXG4gICAgYXdhaXQgdGhpcy5jbG9zZShmYWxzZSk7XG4gICAgdGhpcy5ibG9ja2VyLmRlc3Ryb3koKTtcbiAgICBtZW51Q29udHJvbGxlci5fdW5yZWdpc3Rlcih0aGlzKTtcbiAgICBpZiAodGhpcy5hbmltYXRpb24pIHtcbiAgICAgIHRoaXMuYW5pbWF0aW9uLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZ2VzdHVyZSkge1xuICAgICAgdGhpcy5nZXN0dXJlLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuZ2VzdHVyZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgdGhpcy5hbmltYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5jb250ZW50RWwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgb25TcGxpdFBhbmVDaGFuZ2VkKGV2KSB7XG4gICAgY29uc3QgY2xvc2VzdFNwbGl0UGFuZSA9IHRoaXMuZWwuY2xvc2VzdCgnaW9uLXNwbGl0LXBhbmUnKTtcbiAgICBpZiAoY2xvc2VzdFNwbGl0UGFuZSAhPT0gbnVsbCAmJiBjbG9zZXN0U3BsaXRQYW5lID09PSBldi50YXJnZXQpIHtcbiAgICAgIHRoaXMuaXNQYW5lVmlzaWJsZSA9IGV2LmRldGFpbC52aXNpYmxlO1xuICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgIH1cbiAgfVxuICBvbkJhY2tkcm9wQ2xpY2soZXYpIHtcbiAgICAvLyBUT0RPKEZXLTI4MzIpOiB0eXBlIChDdXN0b21FdmVudCB0cmlnZ2VycyBlcnJvcnMgd2hpY2ggc2hvdWxkIGJlIHNvcnRlZClcbiAgICBpZiAodGhpcy5faXNPcGVuICYmIHRoaXMubGFzdE9uRW5kIDwgZXYudGltZVN0YW1wIC0gMTAwKSB7XG4gICAgICBjb25zdCBzaG91bGRDbG9zZSA9IGV2LmNvbXBvc2VkUGF0aCA/ICFldi5jb21wb3NlZFBhdGgoKS5pbmNsdWRlcyh0aGlzLm1lbnVJbm5lckVsKSA6IGZhbHNlO1xuICAgICAgaWYgKHNob3VsZENsb3NlKSB7XG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLmNsb3NlKHVuZGVmaW5lZCwgQkFDS0RST1ApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBvbktleWRvd24oZXYpIHtcbiAgICBpZiAoZXYua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgdGhpcy5jbG9zZSh1bmRlZmluZWQsIEJBQ0tEUk9QKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgYHRydWVgIGlzIHRoZSBtZW51IGlzIG9wZW4uXG4gICAqL1xuICBpc09wZW4oKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9pc09wZW4pO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgbWVudSBpcyBhY3RpdmUuXG4gICAqXG4gICAqIEEgbWVudSBpcyBhY3RpdmUgd2hlbiBpdCBjYW4gYmUgb3BlbmVkIG9yIGNsb3NlZCwgbWVhbmluZyBpdCdzIGVuYWJsZWRcbiAgICogYW5kIGl0J3Mgbm90IHBhcnQgb2YgYSBgaW9uLXNwbGl0LXBhbmVgLlxuICAgKi9cbiAgaXNBY3RpdmUoKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9pc0FjdGl2ZSgpKTtcbiAgfVxuICAvKipcbiAgICogT3BlbnMgdGhlIG1lbnUuIElmIHRoZSBtZW51IGlzIGFscmVhZHkgb3BlbiBvciBpdCBjYW4ndCBiZSBvcGVuZWQsXG4gICAqIGl0IHJldHVybnMgYGZhbHNlYC5cbiAgICpcbiAgICogQHBhcmFtIGFuaW1hdGVkIElmIGB0cnVlYCwgdGhlIG1lbnUgd2lsbCBhbmltYXRlIHdoZW4gb3BlbmluZy5cbiAgICogSWYgYGZhbHNlYCwgdGhlIG1lbnUgd2lsbCBvcGVuIGluc3RhbnRseSB3aXRob3V0IGFuaW1hdGlvbi5cbiAgICogRGVmYXVsdHMgdG8gYHRydWVgLlxuICAgKi9cbiAgb3BlbihhbmltYXRlZCA9IHRydWUpIHtcbiAgICByZXR1cm4gdGhpcy5zZXRPcGVuKHRydWUsIGFuaW1hdGVkKTtcbiAgfVxuICAvKipcbiAgICogQ2xvc2VzIHRoZSBtZW51LiBJZiB0aGUgbWVudSBpcyBhbHJlYWR5IGNsb3NlZCBvciBpdCBjYW4ndCBiZSBjbG9zZWQsXG4gICAqIGl0IHJldHVybnMgYGZhbHNlYC5cbiAgICpcbiAgICogQHBhcmFtIGFuaW1hdGVkIElmIGB0cnVlYCwgdGhlIG1lbnUgd2lsbCBhbmltYXRlIHdoZW4gY2xvc2luZy4gSWYgYGZhbHNlYCxcbiAgICogdGhlIG1lbnUgd2lsbCBjbG9zZSBpbnN0YW50bHkgd2l0aG91dCBhbmltYXRpb24uIERlZmF1bHRzIHRvIGB0cnVlYC5cbiAgICogQHBhcmFtIHJvbGUgVGhlIHJvbGUgb2YgdGhlIGVsZW1lbnQgdGhhdCBpcyBjbG9zaW5nIHRoZSBtZW51LlxuICAgKiBUaGlzIGNhbiBiZSB1c2VmdWwgaW4gYSBidXR0b24gaGFuZGxlciBmb3IgZGV0ZXJtaW5pbmcgd2hpY2ggYnV0dG9uIHdhc1xuICAgKiBjbGlja2VkIHRvIGNsb3NlIHRoZSBtZW51LiBTb21lIGV4YW1wbGVzIGluY2x1ZGU6XG4gICAqIGBcImNhbmNlbFwiYCwgYFwiZGVzdHJ1Y3RpdmVcImAsIGBcInNlbGVjdGVkXCJgLCBhbmQgYFwiYmFja2Ryb3BcImAuXG4gICAqL1xuICBjbG9zZShhbmltYXRlZCA9IHRydWUsIHJvbGUpIHtcbiAgICByZXR1cm4gdGhpcy5zZXRPcGVuKGZhbHNlLCBhbmltYXRlZCwgcm9sZSk7XG4gIH1cbiAgLyoqXG4gICAqIFRvZ2dsZXMgdGhlIG1lbnUuIElmIHRoZSBtZW51IGlzIGFscmVhZHkgb3BlbiwgaXQgd2lsbCB0cnkgdG8gY2xvc2UsXG4gICAqIG90aGVyd2lzZSBpdCB3aWxsIHRyeSB0byBvcGVuIGl0LlxuICAgKiBJZiB0aGUgb3BlcmF0aW9uIGNhbid0IGJlIGNvbXBsZXRlZCBzdWNjZXNzZnVsbHksIGl0IHJldHVybnMgYGZhbHNlYC5cbiAgICpcbiAgICogQHBhcmFtIGFuaW1hdGVkIElmIGB0cnVlYCwgdGhlIG1lbnUgd2lsbCBhbmltYXRlIHdoZW4gb3BlbmluZy9jbG9zaW5nLlxuICAgKiBJZiBgZmFsc2VgLCB0aGUgbWVudSB3aWxsIG9wZW4vY2xvc2UgaW5zdGFudGx5IHdpdGhvdXQgYW5pbWF0aW9uLlxuICAgKiBEZWZhdWx0cyB0byBgdHJ1ZWAuXG4gICAqL1xuICB0b2dnbGUoYW5pbWF0ZWQgPSB0cnVlKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0T3BlbighdGhpcy5faXNPcGVuLCBhbmltYXRlZCk7XG4gIH1cbiAgLyoqXG4gICAqIE9wZW5zIG9yIGNsb3NlcyB0aGUgbWVudS5cbiAgICogSWYgdGhlIG9wZXJhdGlvbiBjYW4ndCBiZSBjb21wbGV0ZWQgc3VjY2Vzc2Z1bGx5LCBpdCByZXR1cm5zIGBmYWxzZWAuXG4gICAqXG4gICAqIEBwYXJhbSBzaG91bGRPcGVuIElmIGB0cnVlYCwgdGhlIG1lbnUgd2lsbCBvcGVuLiBJZiBgZmFsc2VgLCB0aGUgbWVudVxuICAgKiB3aWxsIGNsb3NlLlxuICAgKiBAcGFyYW0gYW5pbWF0ZWQgSWYgYHRydWVgLCB0aGUgbWVudSB3aWxsIGFuaW1hdGUgd2hlbiBvcGVuaW5nL2Nsb3NpbmcuXG4gICAqIElmIGBmYWxzZWAsIHRoZSBtZW51IHdpbGwgb3Blbi9jbG9zZSBpbnN0YW50bHkgd2l0aG91dCBhbmltYXRpb24uXG4gICAqIEBwYXJhbSByb2xlIFRoZSByb2xlIG9mIHRoZSBlbGVtZW50IHRoYXQgaXMgY2xvc2luZyB0aGUgbWVudS5cbiAgICovXG4gIHNldE9wZW4oc2hvdWxkT3BlbiwgYW5pbWF0ZWQgPSB0cnVlLCByb2xlKSB7XG4gICAgcmV0dXJuIG1lbnVDb250cm9sbGVyLl9zZXRPcGVuKHRoaXMsIHNob3VsZE9wZW4sIGFuaW1hdGVkLCByb2xlKTtcbiAgfVxuICB0cmFwS2V5Ym9hcmRGb2N1cyhldiwgZG9jKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0O1xuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIElmIHRoZSB0YXJnZXQgaXMgaW5zaWRlIHRoZSBtZW51IGNvbnRlbnRzLCBsZXQgdGhlIGJyb3dzZXJcbiAgICAgKiBmb2N1cyBhcyBub3JtYWwgYW5kIGtlZXAgYSBsb2cgb2YgdGhlIGxhc3QgZm9jdXNlZCBlbGVtZW50LlxuICAgICAqL1xuICAgIGlmICh0aGlzLmVsLmNvbnRhaW5zKHRhcmdldCkpIHtcbiAgICAgIHRoaXMubGFzdEZvY3VzID0gdGFyZ2V0O1xuICAgIH0gZWxzZSB7XG4gICAgICAvKipcbiAgICAgICAqIE90aGVyd2lzZSwgd2UgYXJlIGFib3V0IHRvIGhhdmUgZm9jdXMgZ28gb3V0IG9mIHRoZSBtZW51LlxuICAgICAgICogV3JhcCB0aGUgZm9jdXMgdG8gZWl0aGVyIHRoZSBmaXJzdCBvciBsYXN0IGVsZW1lbnQuXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZWxcbiAgICAgIH0gPSB0aGlzO1xuICAgICAgLyoqXG4gICAgICAgKiBPbmNlIHdlIGNhbGwgYGZvY3VzRmlyc3REZXNjZW5kYW50YCwgYW5vdGhlciBmb2N1cyBldmVudFxuICAgICAgICogd2lsbCBmaXJlLCB3aGljaCB3aWxsIGNhdXNlIGBsYXN0Rm9jdXNgIHRvIGJlIHVwZGF0ZWRcbiAgICAgICAqIGJlZm9yZSB3ZSBjYW4gcnVuIHRoZSBjb2RlIGFmdGVyIHRoYXQuIFdlIGNhY2hlIHRoZSB2YWx1ZVxuICAgICAgICogaGVyZSB0byBhdm9pZCB0aGF0LlxuICAgICAgICovXG4gICAgICBmb2N1c0ZpcnN0RGVzY2VuZGFudChlbCk7XG4gICAgICAvKipcbiAgICAgICAqIElmIHRoZSBjYWNoZWQgbGFzdCBmb2N1c2VkIGVsZW1lbnQgaXMgdGhlIHNhbWUgYXMgdGhlIG5vdy1cbiAgICAgICAqIGFjdGl2ZSBlbGVtZW50LCB0aGF0IG1lYW5zIHRoZSB1c2VyIHdhcyBvbiB0aGUgZmlyc3QgZWxlbWVudFxuICAgICAgICogYWxyZWFkeSBhbmQgcHJlc3NlZCBTaGlmdCArIFRhYiwgc28gd2UgbmVlZCB0byB3cmFwIHRvIHRoZVxuICAgICAgICogbGFzdCBkZXNjZW5kYW50LlxuICAgICAgICovXG4gICAgICBpZiAodGhpcy5sYXN0Rm9jdXMgPT09IGRvYy5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgIGZvY3VzTGFzdERlc2NlbmRhbnQoZWwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBhc3luYyBfc2V0T3BlbihzaG91bGRPcGVuLCBhbmltYXRlZCA9IHRydWUsIHJvbGUpIHtcbiAgICAvLyBJZiB0aGUgbWVudSBpcyBkaXNhYmxlZCBvciBpdCBpcyBjdXJyZW50bHkgYmVpbmcgYW5pbWF0ZWQsIGxldCdzIGRvIG5vdGhpbmdcbiAgICBpZiAoIXRoaXMuX2lzQWN0aXZlKCkgfHwgdGhpcy5pc0FuaW1hdGluZyB8fCBzaG91bGRPcGVuID09PSB0aGlzLl9pc09wZW4pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5iZWZvcmVBbmltYXRpb24oc2hvdWxkT3Blbiwgcm9sZSk7XG4gICAgYXdhaXQgdGhpcy5sb2FkQW5pbWF0aW9uKCk7XG4gICAgYXdhaXQgdGhpcy5zdGFydEFuaW1hdGlvbihzaG91bGRPcGVuLCBhbmltYXRlZCk7XG4gICAgLyoqXG4gICAgICogSWYgdGhlIGFuaW1hdGlvbiB3YXMgY2FuY2VsbGVkIHRoZW5cbiAgICAgKiByZXR1cm4gZmFsc2UgYmVjYXVzZSB0aGUgb3BlcmF0aW9uXG4gICAgICogZGlkIG5vdCBzdWNjZWVkLlxuICAgICAqL1xuICAgIGlmICh0aGlzLm9wZXJhdGlvbkNhbmNlbGxlZCkge1xuICAgICAgdGhpcy5vcGVyYXRpb25DYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5hZnRlckFuaW1hdGlvbihzaG91bGRPcGVuLCByb2xlKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBhc3luYyBsb2FkQW5pbWF0aW9uKCkge1xuICAgIC8vIE1lbnUgc3dpcGUgYW5pbWF0aW9uIHRha2VzIHRoZSBtZW51J3MgaW5uZXIgd2lkdGggYXMgcGFyYW1ldGVyLFxuICAgIC8vIElmIGBvZmZzZXRXaWR0aGAgY2hhbmdlcywgd2UgbmVlZCB0byBjcmVhdGUgYSBuZXcgYW5pbWF0aW9uLlxuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5tZW51SW5uZXJFbC5vZmZzZXRXaWR0aDtcbiAgICAvKipcbiAgICAgKiBNZW51IGRpcmVjdGlvbiBhbmltYXRpb24gaXMgY2FsY3VsYXRlZCBiYXNlZCBvbiB0aGUgZG9jdW1lbnQgZGlyZWN0aW9uLlxuICAgICAqIElmIHRoZSBkb2N1bWVudCBkaXJlY3Rpb24gY2hhbmdlcywgd2UgbmVlZCB0byBjcmVhdGUgYSBuZXcgYW5pbWF0aW9uLlxuICAgICAqL1xuICAgIGNvbnN0IGlzRW5kU2lkZSQxID0gaXNFbmRTaWRlKHRoaXMuc2lkZSk7XG4gICAgaWYgKHdpZHRoID09PSB0aGlzLndpZHRoICYmIHRoaXMuYW5pbWF0aW9uICE9PSB1bmRlZmluZWQgJiYgaXNFbmRTaWRlJDEgPT09IHRoaXMuaXNFbmRTaWRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmlzRW5kU2lkZSA9IGlzRW5kU2lkZSQxO1xuICAgIC8vIERlc3Ryb3kgZXhpc3RpbmcgYW5pbWF0aW9uXG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uKSB7XG4gICAgICB0aGlzLmFuaW1hdGlvbi5kZXN0cm95KCk7XG4gICAgICB0aGlzLmFuaW1hdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLy8gQ3JlYXRlIG5ldyBhbmltYXRpb25cbiAgICBjb25zdCBhbmltYXRpb24gPSB0aGlzLmFuaW1hdGlvbiA9IGF3YWl0IG1lbnVDb250cm9sbGVyLl9jcmVhdGVBbmltYXRpb24odGhpcy50eXBlLCB0aGlzKTtcbiAgICBpZiAoIWNvbmZpZy5nZXRCb29sZWFuKCdhbmltYXRlZCcsIHRydWUpKSB7XG4gICAgICBhbmltYXRpb24uZHVyYXRpb24oMCk7XG4gICAgfVxuICAgIGFuaW1hdGlvbi5maWxsKCdib3RoJyk7XG4gIH1cbiAgYXN5bmMgc3RhcnRBbmltYXRpb24oc2hvdWxkT3BlbiwgYW5pbWF0ZWQpIHtcbiAgICBjb25zdCBpc1JldmVyc2VkID0gIXNob3VsZE9wZW47XG4gICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgY29uc3QgZWFzaW5nID0gbW9kZSA9PT0gJ2lvcycgPyBpb3NFYXNpbmcgOiBtZEVhc2luZztcbiAgICBjb25zdCBlYXNpbmdSZXZlcnNlID0gbW9kZSA9PT0gJ2lvcycgPyBpb3NFYXNpbmdSZXZlcnNlIDogbWRFYXNpbmdSZXZlcnNlO1xuICAgIGNvbnN0IGFuaSA9IHRoaXMuYW5pbWF0aW9uLmRpcmVjdGlvbihpc1JldmVyc2VkID8gJ3JldmVyc2UnIDogJ25vcm1hbCcpLmVhc2luZyhpc1JldmVyc2VkID8gZWFzaW5nUmV2ZXJzZSA6IGVhc2luZyk7XG4gICAgaWYgKGFuaW1hdGVkKSB7XG4gICAgICBhd2FpdCBhbmkucGxheSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbmkucGxheSh7XG4gICAgICAgIHN5bmM6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBXZSBydW4gdGhpcyBhZnRlciB0aGUgcGxheSBpbnZvY2F0aW9uXG4gICAgICogaW5zdGVhZCBvZiB1c2luZyBhbmkub25GaW5pc2ggc28gdGhhdFxuICAgICAqIG11bHRpcGxlIG9uRmluaXNoIGNhbGxiYWNrcyBkbyBub3QgZ2V0XG4gICAgICogcnVuIGlmIGFuIGFuaW1hdGlvbiBpcyBwbGF5ZWQsIHN0b3BwZWQsXG4gICAgICogYW5kIHRoZW4gcGxheWVkIGFnYWluLlxuICAgICAqL1xuICAgIGlmIChhbmkuZ2V0RGlyZWN0aW9uKCkgPT09ICdyZXZlcnNlJykge1xuICAgICAgYW5pLmRpcmVjdGlvbignbm9ybWFsJyk7XG4gICAgfVxuICB9XG4gIF9pc0FjdGl2ZSgpIHtcbiAgICByZXR1cm4gIXRoaXMuZGlzYWJsZWQgJiYgIXRoaXMuaXNQYW5lVmlzaWJsZTtcbiAgfVxuICBjYW5Td2lwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zd2lwZUdlc3R1cmUgJiYgIXRoaXMuaXNBbmltYXRpbmcgJiYgdGhpcy5faXNBY3RpdmUoKTtcbiAgfVxuICBjYW5TdGFydChkZXRhaWwpIHtcbiAgICAvLyBEbyBub3QgYWxsb3cgc3dpcGUgZ2VzdHVyZSBpZiBhIG1vZGFsIGlzIG9wZW5cbiAgICBjb25zdCBpc01vZGFsUHJlc2VudGVkID0gISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpb24tbW9kYWwuc2hvdy1tb2RhbCcpO1xuICAgIGlmIChpc01vZGFsUHJlc2VudGVkIHx8ICF0aGlzLmNhblN3aXBlKCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2lzT3Blbikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmIChtZW51Q29udHJvbGxlci5fZ2V0T3BlblN5bmMoKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gY2hlY2tFZGdlU2lkZSh3aW5kb3csIGRldGFpbC5jdXJyZW50WCwgdGhpcy5pc0VuZFNpZGUsIHRoaXMubWF4RWRnZVN0YXJ0KTtcbiAgfVxuICBvbldpbGxTdGFydCgpIHtcbiAgICB0aGlzLmJlZm9yZUFuaW1hdGlvbighdGhpcy5faXNPcGVuLCBHRVNUVVJFKTtcbiAgICByZXR1cm4gdGhpcy5sb2FkQW5pbWF0aW9uKCk7XG4gIH1cbiAgb25TdGFydCgpIHtcbiAgICBpZiAoIXRoaXMuaXNBbmltYXRpbmcgfHwgIXRoaXMuYW5pbWF0aW9uKSB7XG4gICAgICBhc3NlcnQoZmFsc2UsICdpc0FuaW1hdGluZyBoYXMgdG8gYmUgdHJ1ZScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyB0aGUgY2xvbmVkIGFuaW1hdGlvbiBzaG91bGQgbm90IHVzZSBhbiBlYXNpbmcgY3VydmUgZHVyaW5nIHNlZWtcbiAgICB0aGlzLmFuaW1hdGlvbi5wcm9ncmVzc1N0YXJ0KHRydWUsIHRoaXMuX2lzT3BlbiA/IDEgOiAwKTtcbiAgfVxuICBvbk1vdmUoZGV0YWlsKSB7XG4gICAgaWYgKCF0aGlzLmlzQW5pbWF0aW5nIHx8ICF0aGlzLmFuaW1hdGlvbikge1xuICAgICAgYXNzZXJ0KGZhbHNlLCAnaXNBbmltYXRpbmcgaGFzIHRvIGJlIHRydWUnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZGVsdGEgPSBjb21wdXRlRGVsdGEoZGV0YWlsLmRlbHRhWCwgdGhpcy5faXNPcGVuLCB0aGlzLmlzRW5kU2lkZSk7XG4gICAgY29uc3Qgc3RlcFZhbHVlID0gZGVsdGEgLyB0aGlzLndpZHRoO1xuICAgIHRoaXMuYW5pbWF0aW9uLnByb2dyZXNzU3RlcCh0aGlzLl9pc09wZW4gPyAxIC0gc3RlcFZhbHVlIDogc3RlcFZhbHVlKTtcbiAgfVxuICBvbkVuZChkZXRhaWwpIHtcbiAgICBpZiAoIXRoaXMuaXNBbmltYXRpbmcgfHwgIXRoaXMuYW5pbWF0aW9uKSB7XG4gICAgICBhc3NlcnQoZmFsc2UsICdpc0FuaW1hdGluZyBoYXMgdG8gYmUgdHJ1ZScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpc09wZW4gPSB0aGlzLl9pc09wZW47XG4gICAgY29uc3QgaXNFbmRTaWRlID0gdGhpcy5pc0VuZFNpZGU7XG4gICAgY29uc3QgZGVsdGEgPSBjb21wdXRlRGVsdGEoZGV0YWlsLmRlbHRhWCwgaXNPcGVuLCBpc0VuZFNpZGUpO1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy53aWR0aDtcbiAgICBjb25zdCBzdGVwVmFsdWUgPSBkZWx0YSAvIHdpZHRoO1xuICAgIGNvbnN0IHZlbG9jaXR5ID0gZGV0YWlsLnZlbG9jaXR5WDtcbiAgICBjb25zdCB6ID0gd2lkdGggLyAyLjA7XG4gICAgY29uc3Qgc2hvdWxkQ29tcGxldGVSaWdodCA9IHZlbG9jaXR5ID49IDAgJiYgKHZlbG9jaXR5ID4gMC4yIHx8IGRldGFpbC5kZWx0YVggPiB6KTtcbiAgICBjb25zdCBzaG91bGRDb21wbGV0ZUxlZnQgPSB2ZWxvY2l0eSA8PSAwICYmICh2ZWxvY2l0eSA8IC0wLjIgfHwgZGV0YWlsLmRlbHRhWCA8IC16KTtcbiAgICBjb25zdCBzaG91bGRDb21wbGV0ZSA9IGlzT3BlbiA/IGlzRW5kU2lkZSA/IHNob3VsZENvbXBsZXRlUmlnaHQgOiBzaG91bGRDb21wbGV0ZUxlZnQgOiBpc0VuZFNpZGUgPyBzaG91bGRDb21wbGV0ZUxlZnQgOiBzaG91bGRDb21wbGV0ZVJpZ2h0O1xuICAgIGxldCBzaG91bGRPcGVuID0gIWlzT3BlbiAmJiBzaG91bGRDb21wbGV0ZTtcbiAgICBpZiAoaXNPcGVuICYmICFzaG91bGRDb21wbGV0ZSkge1xuICAgICAgc2hvdWxkT3BlbiA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMubGFzdE9uRW5kID0gZGV0YWlsLmN1cnJlbnRUaW1lO1xuICAgIC8vIEFjY291bnQgZm9yIHJvdW5kaW5nIGVycm9ycyBpbiBKU1xuICAgIGxldCBuZXdTdGVwVmFsdWUgPSBzaG91bGRDb21wbGV0ZSA/IDAuMDAxIDogLTFlLTM7XG4gICAgLyoqXG4gICAgICogc3RlcFZhbHVlIGNhbiBzb21ldGltZXMgcmV0dXJuIGEgbmVnYXRpdmVcbiAgICAgKiB2YWx1ZSwgYnV0IHlvdSBjYW4ndCBoYXZlIGEgbmVnYXRpdmUgdGltZSB2YWx1ZVxuICAgICAqIGZvciB0aGUgY3ViaWMgYmV6aWVyIGN1cnZlIChhdCBsZWFzdCB3aXRoIHdlYiBhbmltYXRpb25zKVxuICAgICAqL1xuICAgIGNvbnN0IGFkanVzdGVkU3RlcFZhbHVlID0gc3RlcFZhbHVlIDwgMCA/IDAuMDEgOiBzdGVwVmFsdWU7XG4gICAgLyoqXG4gICAgICogQW5pbWF0aW9uIHdpbGwgYmUgcmV2ZXJzZWQgaGVyZSwgc28gbmVlZCB0b1xuICAgICAqIHJldmVyc2UgdGhlIGVhc2luZyBjdXJ2ZSBhcyB3ZWxsXG4gICAgICpcbiAgICAgKiBBZGRpdGlvbmFsbHksIHdlIG5lZWQgdG8gYWNjb3VudCBmb3IgdGhlIHRpbWUgcmVsYXRpdmVcbiAgICAgKiB0byB0aGUgbmV3IGVhc2luZyBjdXJ2ZSwgYXMgYHN0ZXBWYWx1ZWAgaXMgZ29pbmcgdG8gYmUgZ2l2ZW5cbiAgICAgKiBpbiB0ZXJtcyBvZiBhIGxpbmVhciBjdXJ2ZS5cbiAgICAgKi9cbiAgICBuZXdTdGVwVmFsdWUgKz0gZ2V0VGltZUdpdmVuUHJvZ3Jlc3Npb24oWzAsIDBdLCBbMC40LCAwXSwgWzAuNiwgMV0sIFsxLCAxXSwgY2xhbXAoMCwgYWRqdXN0ZWRTdGVwVmFsdWUsIDAuOTk5OSkpWzBdIHx8IDA7XG4gICAgY29uc3QgcGxheVRvID0gdGhpcy5faXNPcGVuID8gIXNob3VsZENvbXBsZXRlIDogc2hvdWxkQ29tcGxldGU7XG4gICAgdGhpcy5hbmltYXRpb24uZWFzaW5nKCdjdWJpYy1iZXppZXIoMC40LCAwLjAsIDAuNiwgMSknKS5vbkZpbmlzaCgoKSA9PiB0aGlzLmFmdGVyQW5pbWF0aW9uKHNob3VsZE9wZW4sIEdFU1RVUkUpLCB7XG4gICAgICBvbmVUaW1lQ2FsbGJhY2s6IHRydWVcbiAgICB9KS5wcm9ncmVzc0VuZChwbGF5VG8gPyAxIDogMCwgdGhpcy5faXNPcGVuID8gMSAtIG5ld1N0ZXBWYWx1ZSA6IG5ld1N0ZXBWYWx1ZSwgMzAwKTtcbiAgfVxuICBiZWZvcmVBbmltYXRpb24oc2hvdWxkT3Blbiwgcm9sZSkge1xuICAgIGFzc2VydCghdGhpcy5pc0FuaW1hdGluZywgJ19iZWZvcmUoKSBzaG91bGQgbm90IGJlIGNhbGxlZCB3aGlsZSBhbmltYXRpbmcnKTtcbiAgICAvKipcbiAgICAgKiBXaGVuIHRoZSBtZW51IGlzIHByZXNlbnRlZCBvbiBhbiBBbmRyb2lkIGRldmljZSwgVGFsa0JhY2sncyBmb2N1cyByaW5nc1xuICAgICAqIG1heSBhcHBlYXIgaW4gdGhlIHdyb25nIHBvc2l0aW9uIGR1ZSB0byB0aGUgdHJhbnNpdGlvbiAoc3BlY2lmaWNhbGx5XG4gICAgICogYHRyYW5zZm9ybWAgc3R5bGVzKS4gVGhpcyBvY2N1cnMgYmVjYXVzZSB0aGUgZm9jdXMgcmluZ3MgYXJlIGluaXRpYWxseVxuICAgICAqIGRpc3BsYXllZCBhdCB0aGUgc3RhcnRpbmcgcG9zaXRpb24gb2YgdGhlIGVsZW1lbnRzIGJlZm9yZSB0aGUgdHJhbnNpdGlvblxuICAgICAqIGJlZ2lucy4gVGhpcyB3b3JrYXJvdW5kIGVuc3VyZXMgdGhlIGZvY3VzIHJpbmdzIGRvIG5vdCBhcHBlYXIgaW4gdGhlXG4gICAgICogaW5jb3JyZWN0IGxvY2F0aW9uLlxuICAgICAqXG4gICAgICogSWYgdGhpcyBzb2x1dGlvbiBpcyBhcHBsaWVkIHRvIGlPUyBkZXZpY2VzLCB0aGVuIGl0IGxlYWRzIHRvIGEgYnVnIHdoZXJlXG4gICAgICogdGhlIG92ZXJsYXlzIGNhbm5vdCBiZSBhY2Nlc3NlZCBieSBzY3JlZW4gcmVhZGVycy4gVGhpcyBpcyBkdWUgdG9cbiAgICAgKiBWb2ljZU92ZXIgbm90IGJlaW5nIGFibGUgdG8gdXBkYXRlIHRoZSBhY2Nlc3NpYmlsaXR5IHRyZWUgd2hlbiB0aGVcbiAgICAgKiBgYXJpYS1oaWRkZW5gIGlzIHJlbW92ZWQuXG4gICAgICovXG4gICAgaWYgKGlzUGxhdGZvcm0oJ2FuZHJvaWQnKSkge1xuICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICB9XG4gICAgLy8gdGhpcyBwbGFjZXMgdGhlIG1lbnUgaW50byB0aGUgY29ycmVjdCBsb2NhdGlvbiBiZWZvcmUgaXQgYW5pbWF0ZXMgaW5cbiAgICAvLyB0aGlzIGNzcyBjbGFzcyBkb2Vzbid0IGFjdHVhbGx5IGtpY2sgb2ZmIGFueSBhbmltYXRpb25zXG4gICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKFNIT1dfTUVOVSk7XG4gICAgLyoqXG4gICAgICogV2UgYWRkIGEgdGFiaW5kZXggaGVyZSBzbyB0aGF0IGZvY3VzIHRyYXBwaW5nXG4gICAgICogc3RpbGwgd29ya3MgZXZlbiBpZiB0aGUgbWVudSBkb2VzIG5vdCBoYXZlXG4gICAgICogYW55IGZvY3VzYWJsZSBlbGVtZW50cyBzbG90dGVkIGluc2lkZS4gVGhlXG4gICAgICogZm9jdXMgdHJhcHBpbmcgdXRpbGl0eSB3aWxsIGZhbGxiYWNrIHRvIGZvY3VzaW5nXG4gICAgICogdGhlIG1lbnUgc28gZm9jdXMgZG9lcyBub3QgbGVhdmUgd2hlbiB0aGUgbWVudVxuICAgICAqIGlzIG9wZW4uXG4gICAgICovXG4gICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICBpZiAodGhpcy5iYWNrZHJvcEVsKSB7XG4gICAgICB0aGlzLmJhY2tkcm9wRWwuY2xhc3NMaXN0LmFkZChTSE9XX0JBQ0tEUk9QKTtcbiAgICB9XG4gICAgLy8gYWRkIGNzcyBjbGFzcyBhbmQgaGlkZSBjb250ZW50IGJlaGluZCBtZW51IGZyb20gc2NyZWVuIHJlYWRlcnNcbiAgICBpZiAodGhpcy5jb250ZW50RWwpIHtcbiAgICAgIHRoaXMuY29udGVudEVsLmNsYXNzTGlzdC5hZGQoTUVOVV9DT05URU5UX09QRU4pO1xuICAgICAgLyoqXG4gICAgICAgKiBXaGVuIHRoZSBtZW51IGlzIG9wZW4gYW5kIG92ZXJsYXlpbmcgdGhlIG1haW5cbiAgICAgICAqIGNvbnRlbnQsIHRoZSBtYWluIGNvbnRlbnQgc2hvdWxkIG5vdCBiZSBhbm5vdW5jZWRcbiAgICAgICAqIGJ5IHRoZSBzY3JlZW5yZWFkZXIgYXMgdGhlIG1lbnUgaXMgdGhlIG1haW5cbiAgICAgICAqIGZvY3VzLiBUaGlzIGlzIHVzZWZ1bCB3aXRoIHNjcmVlbnJlYWRlcnMgdGhhdCBoYXZlXG4gICAgICAgKiBcInJlYWQgZnJvbSB0b3BcIiBnZXN0dXJlcyB0aGF0IHJlYWQgdGhlIGVudGlyZVxuICAgICAgICogcGFnZSBmcm9tIHRvcCB0byBib3R0b20gd2hlbiBhY3RpdmF0ZWQuXG4gICAgICAgKiBUaGlzIHNob3VsZCBiZSBkb25lIGJlZm9yZSB0aGUgYW5pbWF0aW9uIHN0YXJ0c1xuICAgICAgICogc28gdGhhdCB1c2VycyBjYW5ub3QgYWNjaWRlbnRhbGx5IHNjcm9sbFxuICAgICAgICogdGhlIGNvbnRlbnQgd2hpbGUgZHJhZ2dpbmcgYSBtZW51IG9wZW4uXG4gICAgICAgKi9cbiAgICAgIHRoaXMuY29udGVudEVsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgIH1cbiAgICB0aGlzLmJsb2NrZXIuYmxvY2soKTtcbiAgICB0aGlzLmlzQW5pbWF0aW5nID0gdHJ1ZTtcbiAgICBpZiAoc2hvdWxkT3Blbikge1xuICAgICAgdGhpcy5pb25XaWxsT3Blbi5lbWl0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW9uV2lsbENsb3NlLmVtaXQoe1xuICAgICAgICByb2xlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgYWZ0ZXJBbmltYXRpb24oaXNPcGVuLCByb2xlKSB7XG4gICAgdmFyIF9hO1xuICAgIC8vIGtlZXAgb3BlbmluZy9jbG9zaW5nIHRoZSBtZW51IGRpc2FibGVkIGZvciBhIHRvdWNoIG1vcmUgeWV0XG4gICAgLy8gb25seSBhZGQgbGlzdGVuZXJzL2NzcyBpZiBpdCdzIGVuYWJsZWQgYW5kIGlzT3BlblxuICAgIC8vIGFuZCBvbmx5IHJlbW92ZSBsaXN0ZW5lcnMvY3NzIGlmIGl0J3Mgbm90IG9wZW5cbiAgICAvLyBlbWl0IG9wZW5lZC9jbG9zZWQgZXZlbnRzXG4gICAgdGhpcy5faXNPcGVuID0gaXNPcGVuO1xuICAgIHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZTtcbiAgICBpZiAoIXRoaXMuX2lzT3Blbikge1xuICAgICAgdGhpcy5ibG9ja2VyLnVuYmxvY2soKTtcbiAgICB9XG4gICAgaWYgKGlzT3Blbikge1xuICAgICAgLyoqXG4gICAgICAgKiBXaGVuIHRoZSBtZW51IGlzIHByZXNlbnRlZCBvbiBhbiBBbmRyb2lkIGRldmljZSwgVGFsa0JhY2sncyBmb2N1cyByaW5nc1xuICAgICAgICogbWF5IGFwcGVhciBpbiB0aGUgd3JvbmcgcG9zaXRpb24gZHVlIHRvIHRoZSB0cmFuc2l0aW9uIChzcGVjaWZpY2FsbHlcbiAgICAgICAqIGB0cmFuc2Zvcm1gIHN0eWxlcykuIFRoZSBtZW51IGlzIGhpZGRlbiBmcm9tIHNjcmVlbiByZWFkZXJzIGR1cmluZyB0aGVcbiAgICAgICAqIHRyYW5zaXRpb24gdG8gcHJldmVudCB0aGlzLiBPbmNlIHRoZSB0cmFuc2l0aW9uIGlzIGNvbXBsZXRlLCB0aGUgbWVudVxuICAgICAgICogaXMgc2hvd24gYWdhaW4uXG4gICAgICAgKi9cbiAgICAgIGlmIChpc1BsYXRmb3JtKCdhbmRyb2lkJykpIHtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG4gICAgICB9XG4gICAgICAvLyBlbWl0IG9wZW4gZXZlbnRcbiAgICAgIHRoaXMuaW9uRGlkT3Blbi5lbWl0KCk7XG4gICAgICAvKipcbiAgICAgICAqIE1vdmUgZm9jdXMgdG8gdGhlIG1lbnUgdG8gcHJlcGFyZSBmb2N1cyB0cmFwcGluZywgYXMgbG9uZyBhc1xuICAgICAgICogaXQgaXNuJ3QgYWxyZWFkeSBmb2N1c2VkLiBVc2UgdGhlIGhvc3QgZWxlbWVudCBpbnN0ZWFkIG9mIHRoZVxuICAgICAgICogZmlyc3QgZGVzY2VuZGFudCB0byBhdm9pZCB0aGUgc2Nyb2xsIHBvc2l0aW9uIGp1bXBpbmcgYXJvdW5kLlxuICAgICAgICovXG4gICAgICBjb25zdCBmb2N1c2VkTWVudSA9IChfYSA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jbG9zZXN0KCdpb24tbWVudScpO1xuICAgICAgaWYgKGZvY3VzZWRNZW51ICE9PSB0aGlzLmVsKSB7XG4gICAgICAgIHRoaXMuZWwuZm9jdXMoKTtcbiAgICAgIH1cbiAgICAgIC8vIHN0YXJ0IGZvY3VzIHRyYXBwaW5nXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuaGFuZGxlRm9jdXMsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICAgIC8vIHJlbW92ZSBjc3MgY2xhc3NlcyBhbmQgdW5oaWRlIGNvbnRlbnQgZnJvbSBzY3JlZW4gcmVhZGVyc1xuICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKFNIT1dfTUVOVSk7XG4gICAgICAvKipcbiAgICAgICAqIFJlbW92ZSB0YWJpbmRleCBmcm9tIHRoZSBtZW51IGNvbXBvbmVudFxuICAgICAgICogc28gdGhhdCBpcyBjYW5ub3QgYmUgdGFiYmVkIHRvLlxuICAgICAgICovXG4gICAgICB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICAgIGlmICh0aGlzLmNvbnRlbnRFbCkge1xuICAgICAgICB0aGlzLmNvbnRlbnRFbC5jbGFzc0xpc3QucmVtb3ZlKE1FTlVfQ09OVEVOVF9PUEVOKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZSBhcmlhLWhpZGRlbiBzbyBzY3JlZW4gcmVhZGVyc1xuICAgICAgICAgKiBjYW4gYW5ub3VuY2UgdGhlIG1haW4gY29udGVudCBhZ2FpblxuICAgICAgICAgKiBub3cgdGhhdCB0aGUgbWVudSBpcyBub3QgdGhlIG1haW4gZm9jdXMuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNvbnRlbnRFbC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5iYWNrZHJvcEVsKSB7XG4gICAgICAgIHRoaXMuYmFja2Ryb3BFbC5jbGFzc0xpc3QucmVtb3ZlKFNIT1dfQkFDS0RST1ApO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uLnN0b3AoKTtcbiAgICAgIH1cbiAgICAgIC8vIGVtaXQgY2xvc2UgZXZlbnRcbiAgICAgIHRoaXMuaW9uRGlkQ2xvc2UuZW1pdCh7XG4gICAgICAgIHJvbGVcbiAgICAgIH0pO1xuICAgICAgLy8gdW5kbyBmb2N1cyB0cmFwcGluZyBzbyBtdWx0aXBsZSBtZW51cyBkb24ndCBjb2xsaWRlXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuaGFuZGxlRm9jdXMsIHRydWUpO1xuICAgIH1cbiAgfVxuICB1cGRhdGVTdGF0ZSgpIHtcbiAgICBjb25zdCBpc0FjdGl2ZSA9IHRoaXMuX2lzQWN0aXZlKCk7XG4gICAgaWYgKHRoaXMuZ2VzdHVyZSkge1xuICAgICAgdGhpcy5nZXN0dXJlLmVuYWJsZShpc0FjdGl2ZSAmJiB0aGlzLnN3aXBlR2VzdHVyZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIElmIHRoZSBtZW51IGlzIGRpc2FibGVkIGJ1dCBpdCBpcyBzdGlsbCBvcGVuXG4gICAgICogdGhlbiB3ZSBzaG91bGQgY2xvc2UgdGhlIG1lbnUgaW1tZWRpYXRlbHkuXG4gICAgICogQWRkaXRpb25hbGx5LCBpZiB0aGUgbWVudSBpcyBpbiB0aGUgcHJvY2Vzc1xuICAgICAqIG9mIGFuaW1hdGluZyB7b3BlbiwgY2xvc2V9IGFuZCB0aGUgbWVudSBpcyBkaXNhYmxlZFxuICAgICAqIHRoZW4gaXQgc2hvdWxkIHN0aWxsIGJlIGNsb3NlZCBpbW1lZGlhdGVseS5cbiAgICAgKi9cbiAgICBpZiAoIWlzQWN0aXZlKSB7XG4gICAgICAvKipcbiAgICAgICAqIEl0IGlzIHBvc3NpYmxlIHRvIGRpc2FibGUgdGhlIG1lbnUgd2hpbGVcbiAgICAgICAqIGl0IGlzIG1pZC1hbmltYXRpb24uIFdoZW4gdGhpcyBoYXBwZW5zLCB3ZVxuICAgICAgICogbmVlZCB0byBzZXQgdGhlIG9wZXJhdGlvbkNhbmNlbGxlZCBmbGFnXG4gICAgICAgKiBzbyB0aGF0IHRoaXMuX3NldE9wZW4ga25vd3MgdG8gcmV0dXJuIGZhbHNlXG4gICAgICAgKiBhbmQgbm90IHJ1biB0aGUgXCJhZnRlckFuaW1hdGlvblwiIGNhbGxiYWNrLlxuICAgICAgICovXG4gICAgICBpZiAodGhpcy5pc0FuaW1hdGluZykge1xuICAgICAgICB0aGlzLm9wZXJhdGlvbkNhbmNlbGxlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIElmIHRoZSBtZW51IGlzIGRpc2FibGVkIHRoZW4gd2Ugc2hvdWxkXG4gICAgICAgKiBmb3JjaWJseSBjbG9zZSB0aGUgbWVudSBldmVuIGlmIGl0IGlzIG9wZW4uXG4gICAgICAgKi9cbiAgICAgIHRoaXMuYWZ0ZXJBbmltYXRpb24oZmFsc2UsIEdFU1RVUkUpO1xuICAgIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdHlwZSxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgZWwsXG4gICAgICBpc1BhbmVWaXNpYmxlLFxuICAgICAgaW5oZXJpdGVkQXR0cmlidXRlcyxcbiAgICAgIHNpZGVcbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICAvKipcbiAgICAgKiBJZiB0aGUgQ2xvc2UgV2F0Y2hlciBpcyBlbmFibGVkIHRoZW5cbiAgICAgKiB0aGUgaW9uQmFja0J1dHRvbiBsaXN0ZW5lciBpbiB0aGUgbWVudSBjb250cm9sbGVyXG4gICAgICogd2lsbCBoYW5kbGUgY2xvc2luZyB0aGUgbWVudSB3aGVuIEVzY2FwZSBpcyBwcmVzc2VkLlxuICAgICAqL1xuICAgIHJldHVybiBoKEhvc3QsIHtcbiAgICAgIGtleTogJ2E1Yzc1YWE0MGEzNDUzMGI1NmVlM2I5OGQ3MDZhNWFjNWFlMzAwZGUnLFxuICAgICAgb25LZXlEb3duOiBzaG91bGRVc2VDbG9zZVdhdGNoZXIoKSA/IG51bGwgOiB0aGlzLm9uS2V5ZG93bixcbiAgICAgIHJvbGU6IFwibmF2aWdhdGlvblwiLFxuICAgICAgXCJhcmlhLWxhYmVsXCI6IGluaGVyaXRlZEF0dHJpYnV0ZXNbJ2FyaWEtbGFiZWwnXSB8fCAnbWVudScsXG4gICAgICBjbGFzczoge1xuICAgICAgICBbbW9kZV06IHRydWUsXG4gICAgICAgIFtgbWVudS10eXBlLSR7dHlwZX1gXTogdHJ1ZSxcbiAgICAgICAgJ21lbnUtZW5hYmxlZCc6ICFkaXNhYmxlZCxcbiAgICAgICAgW2BtZW51LXNpZGUtJHtzaWRlfWBdOiB0cnVlLFxuICAgICAgICAnbWVudS1wYW5lLXZpc2libGUnOiBpc1BhbmVWaXNpYmxlLFxuICAgICAgICAnc3BsaXQtcGFuZS1zaWRlJzogaG9zdENvbnRleHQoJ2lvbi1zcGxpdC1wYW5lJywgZWwpXG4gICAgICB9XG4gICAgfSwgaChcImRpdlwiLCB7XG4gICAgICBrZXk6ICczZjVmNzBhY2Q0ZDNlZDZiYjQ0NTEyMmY0ZjAxZDczZGI3MzhhNzVmJyxcbiAgICAgIGNsYXNzOiBcIm1lbnUtaW5uZXJcIixcbiAgICAgIHBhcnQ6IFwiY29udGFpbmVyXCIsXG4gICAgICByZWY6IGVsID0+IHRoaXMubWVudUlubmVyRWwgPSBlbFxuICAgIH0sIGgoXCJzbG90XCIsIHtcbiAgICAgIGtleTogJzMxNjEzMjZjOTMzMGU3Zjc0NDEyOTljNDI4Yjg3YTkxYjMxYTgzZTknXG4gICAgfSkpLCBoKFwiaW9uLWJhY2tkcm9wXCIsIHtcbiAgICAgIGtleTogJzkxN2I1MGYzODQ4OWJkZjAzZDBjNjQyYWY4YjRlNGUxNzJjN2RjNGMnLFxuICAgICAgcmVmOiBlbCA9PiB0aGlzLmJhY2tkcm9wRWwgPSBlbCxcbiAgICAgIGNsYXNzOiBcIm1lbnUtYmFja2Ryb3BcIixcbiAgICAgIHRhcHBhYmxlOiBmYWxzZSxcbiAgICAgIHN0b3BQcm9wYWdhdGlvbjogZmFsc2UsXG4gICAgICBwYXJ0OiBcImJhY2tkcm9wXCJcbiAgICB9KSk7XG4gIH1cbiAgZ2V0IGVsKCkge1xuICAgIHJldHVybiBnZXRFbGVtZW50KHRoaXMpO1xuICB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwidHlwZVwiOiBbXCJ0eXBlQ2hhbmdlZFwiXSxcbiAgICAgIFwiZGlzYWJsZWRcIjogW1wiZGlzYWJsZWRDaGFuZ2VkXCJdLFxuICAgICAgXCJzaWRlXCI6IFtcInNpZGVDaGFuZ2VkXCJdLFxuICAgICAgXCJzd2lwZUdlc3R1cmVcIjogW1wic3dpcGVHZXN0dXJlQ2hhbmdlZFwiXVxuICAgIH07XG4gIH1cbn07XG5jb25zdCBjb21wdXRlRGVsdGEgPSAoZGVsdGFYLCBpc09wZW4sIGlzRW5kU2lkZSkgPT4ge1xuICByZXR1cm4gTWF0aC5tYXgoMCwgaXNPcGVuICE9PSBpc0VuZFNpZGUgPyAtZGVsdGFYIDogZGVsdGFYKTtcbn07XG5jb25zdCBjaGVja0VkZ2VTaWRlID0gKHdpbiwgcG9zWCwgaXNFbmRTaWRlLCBtYXhFZGdlU3RhcnQpID0+IHtcbiAgaWYgKGlzRW5kU2lkZSkge1xuICAgIHJldHVybiBwb3NYID49IHdpbi5pbm5lcldpZHRoIC0gbWF4RWRnZVN0YXJ0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBwb3NYIDw9IG1heEVkZ2VTdGFydDtcbiAgfVxufTtcbmNvbnN0IFNIT1dfTUVOVSA9ICdzaG93LW1lbnUnO1xuY29uc3QgU0hPV19CQUNLRFJPUCA9ICdzaG93LWJhY2tkcm9wJztcbmNvbnN0IE1FTlVfQ09OVEVOVF9PUEVOID0gJ21lbnUtY29udGVudC1vcGVuJztcbk1lbnUuc3R5bGUgPSB7XG4gIGlvczogbWVudUlvc0NzcyxcbiAgbWQ6IG1lbnVNZENzc1xufTtcblxuLy8gR2l2ZW4gYSBtZW51LCByZXR1cm4gd2hldGhlciBvciBub3QgdGhlIG1lbnUgdG9nZ2xlIHNob3VsZCBiZSB2aXNpYmxlXG5jb25zdCB1cGRhdGVWaXNpYmlsaXR5ID0gYXN5bmMgbWVudSA9PiB7XG4gIGNvbnN0IG1lbnVFbCA9IGF3YWl0IG1lbnVDb250cm9sbGVyLmdldChtZW51KTtcbiAgcmV0dXJuICEhKG1lbnVFbCAmJiAoYXdhaXQgbWVudUVsLmlzQWN0aXZlKCkpKTtcbn07XG5jb25zdCBtZW51QnV0dG9uSW9zQ3NzID0gXCI6aG9zdHstLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7LS1jb2xvci1mb2N1c2VkOmN1cnJlbnRDb2xvcjstLWJvcmRlci1yYWRpdXM6aW5pdGlhbDstLXBhZGRpbmctdG9wOjA7LS1wYWRkaW5nLWJvdHRvbTowO2NvbG9yOnZhcigtLWNvbG9yKTt0ZXh0LWFsaWduOmNlbnRlcjt0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3RleHQtdHJhbnNmb3JtOm5vbmU7d2hpdGUtc3BhY2U6bm93cmFwOy13ZWJraXQtZm9udC1rZXJuaW5nOm5vbmU7Zm9udC1rZXJuaW5nOm5vbmV9LmJ1dHRvbi1uYXRpdmV7Ym9yZGVyLXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZTppbmhlcml0O2ZvbnQtc3R5bGU6aW5oZXJpdDtmb250LXdlaWdodDppbmhlcml0O2xldHRlci1zcGFjaW5nOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC1pbmRlbnQ6aW5oZXJpdDt0ZXh0LW92ZXJmbG93OmluaGVyaXQ7dGV4dC10cmFuc2Zvcm06aW5oZXJpdDt0ZXh0LWFsaWduOmluaGVyaXQ7d2hpdGUtc3BhY2U6aW5oZXJpdDtjb2xvcjppbmhlcml0O21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDstd2Via2l0LXBhZGRpbmctc3RhcnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7cGFkZGluZy1pbmxpbmUtc3RhcnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7LXdlYmtpdC1wYWRkaW5nLWVuZDp2YXIoLS1wYWRkaW5nLWVuZCk7cGFkZGluZy1pbmxpbmUtZW5kOnZhcigtLXBhZGRpbmctZW5kKTtwYWRkaW5nLXRvcDp2YXIoLS1wYWRkaW5nLXRvcCk7cGFkZGluZy1ib3R0b206dmFyKC0tcGFkZGluZy1ib3R0b20pOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4LWZsb3c6cm93IG5vd3JhcDtmbGV4LWZsb3c6cm93IG5vd3JhcDstbXMtZmxleC1uZWdhdGl2ZTowO2ZsZXgtc2hyaW5rOjA7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7bWluLWhlaWdodDppbmhlcml0O2JvcmRlcjowO291dGxpbmU6bm9uZTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2xpbmUtaGVpZ2h0OjE7Y3Vyc29yOnBvaW50ZXI7b3ZlcmZsb3c6aGlkZGVuOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTt6LWluZGV4OjA7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lfS5idXR0b24taW5uZXJ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtZmxvdzpyb3cgbm93cmFwO2ZsZXgtZmxvdzpyb3cgbm93cmFwOy1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTttaW4taGVpZ2h0OmluaGVyaXQ7ei1pbmRleDoxfWlvbi1pY29ue21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtwYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjA7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowO3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3QoLm1lbnUtYnV0dG9uLWhpZGRlbil7ZGlzcGxheTpub25lfTpob3N0KC5tZW51LWJ1dHRvbi1kaXNhYmxlZCl7Y3Vyc29yOmRlZmF1bHQ7b3BhY2l0eTowLjU7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdCguaW9uLWZvY3VzZWQpIC5idXR0b24tbmF0aXZle2NvbG9yOnZhcigtLWNvbG9yLWZvY3VzZWQpfTpob3N0KC5pb24tZm9jdXNlZCkgLmJ1dHRvbi1uYXRpdmU6OmFmdGVye2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZC1mb2N1c2VkKTtvcGFjaXR5OnZhcigtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5KX0uYnV0dG9uLW5hdGl2ZTo6YWZ0ZXJ7bGVmdDowO3JpZ2h0OjA7dG9wOjA7Ym90dG9tOjA7cG9zaXRpb246YWJzb2x1dGU7Y29udGVudDpcXFwiXFxcIjtvcGFjaXR5OjB9QG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKXs6aG9zdCg6aG92ZXIpIC5idXR0b24tbmF0aXZle2NvbG9yOnZhcigtLWNvbG9yLWhvdmVyKX06aG9zdCg6aG92ZXIpIC5idXR0b24tbmF0aXZlOjphZnRlcntiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQtaG92ZXIpO29wYWNpdHk6dmFyKC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5LCAwKX19Omhvc3QoLmlvbi1jb2xvcikgLmJ1dHRvbi1uYXRpdmV7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWJhc2UpfTpob3N0KC5pbi10b29sYmFyOm5vdCguaW4tdG9vbGJhci1jb2xvcikpe2NvbG9yOnZhcigtLWlvbi10b29sYmFyLWNvbG9yLCB2YXIoLS1jb2xvcikpfTpob3N0ey0tYmFja2dyb3VuZC1mb2N1c2VkOmN1cnJlbnRDb2xvcjstLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5Oi4xOy0tYm9yZGVyLXJhZGl1czo0cHg7LS1jb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzAwNTRlOSk7LS1wYWRkaW5nLXN0YXJ0OjVweDstLXBhZGRpbmctZW5kOjVweDttaW4taGVpZ2h0OjMycHg7Zm9udC1zaXplOmNsYW1wKDMxcHgsIDEuOTM3NXJlbSwgMzguMTNweCl9Omhvc3QoLmlvbi1hY3RpdmF0ZWQpe29wYWNpdHk6MC40fUBtZWRpYSAoYW55LWhvdmVyOiBob3Zlcil7Omhvc3QoOmhvdmVyKXtvcGFjaXR5OjAuNn19XCI7XG5jb25zdCBtZW51QnV0dG9uTWRDc3MgPSBcIjpob3N0ey0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDstLWNvbG9yLWZvY3VzZWQ6Y3VycmVudENvbG9yOy0tYm9yZGVyLXJhZGl1czppbml0aWFsOy0tcGFkZGluZy10b3A6MDstLXBhZGRpbmctYm90dG9tOjA7Y29sb3I6dmFyKC0tY29sb3IpO3RleHQtYWxpZ246Y2VudGVyO3RleHQtZGVjb3JhdGlvbjpub25lO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7dGV4dC10cmFuc2Zvcm06bm9uZTt3aGl0ZS1zcGFjZTpub3dyYXA7LXdlYmtpdC1mb250LWtlcm5pbmc6bm9uZTtmb250LWtlcm5pbmc6bm9uZX0uYnV0dG9uLW5hdGl2ZXtib3JkZXItcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOmluaGVyaXQ7Zm9udC1zdHlsZTppbmhlcml0O2ZvbnQtd2VpZ2h0OmluaGVyaXQ7bGV0dGVyLXNwYWNpbmc6aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt0ZXh0LWluZGVudDppbmhlcml0O3RleHQtb3ZlcmZsb3c6aW5oZXJpdDt0ZXh0LXRyYW5zZm9ybTppbmhlcml0O3RleHQtYWxpZ246aW5oZXJpdDt3aGl0ZS1zcGFjZTppbmhlcml0O2NvbG9yOmluaGVyaXQ7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowOy13ZWJraXQtcGFkZGluZy1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTtwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTstd2Via2l0LXBhZGRpbmctZW5kOnZhcigtLXBhZGRpbmctZW5kKTtwYWRkaW5nLWlubGluZS1lbmQ6dmFyKC0tcGFkZGluZy1lbmQpO3BhZGRpbmctdG9wOnZhcigtLXBhZGRpbmctdG9wKTtwYWRkaW5nLWJvdHRvbTp2YXIoLS1wYWRkaW5nLWJvdHRvbSk7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtZmxvdzpyb3cgbm93cmFwO2ZsZXgtZmxvdzpyb3cgbm93cmFwOy1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTttaW4taGVpZ2h0OmluaGVyaXQ7Ym9yZGVyOjA7b3V0bGluZTpub25lO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7bGluZS1oZWlnaHQ6MTtjdXJzb3I6cG9pbnRlcjtvdmVyZmxvdzpoaWRkZW47LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO3otaW5kZXg6MDstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmV9LmJ1dHRvbi1pbm5lcntkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjpyZWxhdGl2ZTstbXMtZmxleC1mbG93OnJvdyBub3dyYXA7ZmxleC1mbG93OnJvdyBub3dyYXA7LW1zLWZsZXgtbmVnYXRpdmU6MDtmbGV4LXNocmluazowOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO21pbi1oZWlnaHQ6aW5oZXJpdDt6LWluZGV4OjF9aW9uLWljb257bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6MDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjA7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdCgubWVudS1idXR0b24taGlkZGVuKXtkaXNwbGF5Om5vbmV9Omhvc3QoLm1lbnUtYnV0dG9uLWRpc2FibGVkKXtjdXJzb3I6ZGVmYXVsdDtvcGFjaXR5OjAuNTtwb2ludGVyLWV2ZW50czpub25lfTpob3N0KC5pb24tZm9jdXNlZCkgLmJ1dHRvbi1uYXRpdmV7Y29sb3I6dmFyKC0tY29sb3ItZm9jdXNlZCl9Omhvc3QoLmlvbi1mb2N1c2VkKSAuYnV0dG9uLW5hdGl2ZTo6YWZ0ZXJ7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kLWZvY3VzZWQpO29wYWNpdHk6dmFyKC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHkpfS5idXR0b24tbmF0aXZlOjphZnRlcntsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MDtwb3NpdGlvbjphYnNvbHV0ZTtjb250ZW50OlxcXCJcXFwiO29wYWNpdHk6MH1AbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpezpob3N0KDpob3ZlcikgLmJ1dHRvbi1uYXRpdmV7Y29sb3I6dmFyKC0tY29sb3ItaG92ZXIpfTpob3N0KDpob3ZlcikgLmJ1dHRvbi1uYXRpdmU6OmFmdGVye2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZC1ob3Zlcik7b3BhY2l0eTp2YXIoLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHksIDApfX06aG9zdCguaW9uLWNvbG9yKSAuYnV0dG9uLW5hdGl2ZXtjb2xvcjp2YXIoLS1pb24tY29sb3ItYmFzZSl9Omhvc3QoLmluLXRvb2xiYXI6bm90KC5pbi10b29sYmFyLWNvbG9yKSl7Y29sb3I6dmFyKC0taW9uLXRvb2xiYXItY29sb3IsIHZhcigtLWNvbG9yKSl9Omhvc3R7LS1iYWNrZ3JvdW5kLWZvY3VzZWQ6Y3VycmVudENvbG9yOy0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6LjEyOy0tYmFja2dyb3VuZC1ob3ZlcjpjdXJyZW50Q29sb3I7LS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6LjA0Oy0tYm9yZGVyLXJhZGl1czo1MCU7LS1jb2xvcjppbml0aWFsOy0tcGFkZGluZy1zdGFydDo4cHg7LS1wYWRkaW5nLWVuZDo4cHg7d2lkdGg6M3JlbTtoZWlnaHQ6M3JlbTtmb250LXNpemU6MS41cmVtfTpob3N0KC5pb24tY29sb3IuaW9uLWZvY3VzZWQpOjphZnRlcntiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1iYXNlKX1AbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpezpob3N0KC5pb24tY29sb3I6aG92ZXIpIC5idXR0b24tbmF0aXZlOjphZnRlcntiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1iYXNlKX19XCI7XG5jb25zdCBNZW51QnV0dG9uID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmluaGVyaXRlZEF0dHJpYnV0ZXMgPSB7fTtcbiAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIHRoZSB1c2VyIGNhbm5vdCBpbnRlcmFjdCB3aXRoIHRoZSBtZW51IGJ1dHRvbi5cbiAgICAgKi9cbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogQXV0b21hdGljYWxseSBoaWRlcyB0aGUgbWVudSBidXR0b24gd2hlbiB0aGUgY29ycmVzcG9uZGluZyBtZW51IGlzIG5vdCBhY3RpdmVcbiAgICAgKi9cbiAgICB0aGlzLmF1dG9IaWRlID0gdHJ1ZTtcbiAgICAvKipcbiAgICAgKiBUaGUgdHlwZSBvZiB0aGUgYnV0dG9uLlxuICAgICAqL1xuICAgIHRoaXMudHlwZSA9ICdidXR0b24nO1xuICAgIHRoaXMub25DbGljayA9IGFzeW5jICgpID0+IHtcbiAgICAgIHJldHVybiBtZW51Q29udHJvbGxlci50b2dnbGUodGhpcy5tZW51KTtcbiAgICB9O1xuICB9XG4gIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHRoaXMuaW5oZXJpdGVkQXR0cmlidXRlcyA9IGluaGVyaXRBcmlhQXR0cmlidXRlcyh0aGlzLmVsKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHRoaXMudmlzaWJpbGl0eUNoYW5nZWQoKTtcbiAgfVxuICBhc3luYyB2aXNpYmlsaXR5Q2hhbmdlZCgpIHtcbiAgICB0aGlzLnZpc2libGUgPSBhd2FpdCB1cGRhdGVWaXNpYmlsaXR5KHRoaXMubWVudSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNvbG9yLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBpbmhlcml0ZWRBdHRyaWJ1dGVzXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgY29uc3QgbWVudUljb24gPSBjb25maWcuZ2V0KCdtZW51SWNvbicsIG1vZGUgPT09ICdpb3MnID8gbWVudU91dGxpbmUgOiBtZW51U2hhcnApO1xuICAgIGNvbnN0IGhpZGRlbiA9IHRoaXMuYXV0b0hpZGUgJiYgIXRoaXMudmlzaWJsZTtcbiAgICBjb25zdCBhdHRycyA9IHtcbiAgICAgIHR5cGU6IHRoaXMudHlwZVxuICAgIH07XG4gICAgY29uc3QgYXJpYUxhYmVsID0gaW5oZXJpdGVkQXR0cmlidXRlc1snYXJpYS1sYWJlbCddIHx8ICdtZW51JztcbiAgICByZXR1cm4gaChIb3N0LCB7XG4gICAgICBrZXk6ICc5ZjBmMGU1MGQzOWE2ODcyNTA4MjIwYzU4ZTY0YmIyMDkyYTBkN2VmJyxcbiAgICAgIG9uQ2xpY2s6IHRoaXMub25DbGljayxcbiAgICAgIFwiYXJpYS1kaXNhYmxlZFwiOiBkaXNhYmxlZCA/ICd0cnVlJyA6IG51bGwsXG4gICAgICBcImFyaWEtaGlkZGVuXCI6IGhpZGRlbiA/ICd0cnVlJyA6IG51bGwsXG4gICAgICBjbGFzczogY3JlYXRlQ29sb3JDbGFzc2VzKGNvbG9yLCB7XG4gICAgICAgIFttb2RlXTogdHJ1ZSxcbiAgICAgICAgYnV0dG9uOiB0cnVlLFxuICAgICAgICAvLyBpb24tYnV0dG9ucyB0YXJnZXQgLmJ1dHRvblxuICAgICAgICAnbWVudS1idXR0b24taGlkZGVuJzogaGlkZGVuLFxuICAgICAgICAnbWVudS1idXR0b24tZGlzYWJsZWQnOiBkaXNhYmxlZCxcbiAgICAgICAgJ2luLXRvb2xiYXInOiBob3N0Q29udGV4dCgnaW9uLXRvb2xiYXInLCB0aGlzLmVsKSxcbiAgICAgICAgJ2luLXRvb2xiYXItY29sb3InOiBob3N0Q29udGV4dCgnaW9uLXRvb2xiYXJbY29sb3JdJywgdGhpcy5lbCksXG4gICAgICAgICdpb24tYWN0aXZhdGFibGUnOiB0cnVlLFxuICAgICAgICAnaW9uLWZvY3VzYWJsZSc6IHRydWVcbiAgICAgIH0pXG4gICAgfSwgaChcImJ1dHRvblwiLCBPYmplY3QuYXNzaWduKHtcbiAgICAgIGtleTogJ2ZmZWJmNzA4M2QyMzUwMTgzOTk3MDA1OWVmOGU0MTFiNTcxZGUxOTcnXG4gICAgfSwgYXR0cnMsIHtcbiAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgIGNsYXNzOiBcImJ1dHRvbi1uYXRpdmVcIixcbiAgICAgIHBhcnQ6IFwibmF0aXZlXCIsXG4gICAgICBcImFyaWEtbGFiZWxcIjogYXJpYUxhYmVsXG4gICAgfSksIGgoXCJzcGFuXCIsIHtcbiAgICAgIGtleTogJ2NhYjBjMWM3NjNiM2NlMzNlZjExZGJhMWQyMzBmNjYxMjZlNTk0MjQnLFxuICAgICAgY2xhc3M6IFwiYnV0dG9uLWlubmVyXCJcbiAgICB9LCBoKFwic2xvdFwiLCB7XG4gICAgICBrZXk6ICdjY2ZkMmJlODQ3OWI3NWI1YzYzZTk3ZTFjYTdkZmUyMDNlOWIzNmVlJ1xuICAgIH0sIGgoXCJpb24taWNvblwiLCB7XG4gICAgICBrZXk6ICdhYzI1NGZlN2YzMjdiMDhmMWFlM2ZjZWE4OWQ1Y2YwZTgzYzlhOTZjJyxcbiAgICAgIHBhcnQ6IFwiaWNvblwiLFxuICAgICAgaWNvbjogbWVudUljb24sXG4gICAgICBtb2RlOiBtb2RlLFxuICAgICAgbGF6eTogZmFsc2UsXG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiXG4gICAgfSkpKSwgbW9kZSA9PT0gJ21kJyAmJiBoKFwiaW9uLXJpcHBsZS1lZmZlY3RcIiwge1xuICAgICAga2V5OiAnZjBmMTdjNGNhOTZlM2VlZDNjMTcyN2VlMDA1NzhkNDBhZjhmMDExNScsXG4gICAgICB0eXBlOiBcInVuYm91bmRlZFwiXG4gICAgfSkpKTtcbiAgfVxuICBnZXQgZWwoKSB7XG4gICAgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7XG4gIH1cbn07XG5NZW51QnV0dG9uLnN0eWxlID0ge1xuICBpb3M6IG1lbnVCdXR0b25Jb3NDc3MsXG4gIG1kOiBtZW51QnV0dG9uTWRDc3Ncbn07XG5jb25zdCBtZW51VG9nZ2xlQ3NzID0gXCI6aG9zdCgubWVudS10b2dnbGUtaGlkZGVuKXtkaXNwbGF5Om5vbmV9XCI7XG5jb25zdCBNZW51VG9nZ2xlID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBBdXRvbWF0aWNhbGx5IGhpZGVzIHRoZSBjb250ZW50IHdoZW4gdGhlIGNvcnJlc3BvbmRpbmcgbWVudSBpcyBub3QgYWN0aXZlLlxuICAgICAqXG4gICAgICogQnkgZGVmYXVsdCwgaXQncyBgdHJ1ZWAuIENoYW5nZSBpdCB0byBgZmFsc2VgIGluIG9yZGVyIHRvXG4gICAgICoga2VlcCBgaW9uLW1lbnUtdG9nZ2xlYCBhbHdheXMgdmlzaWJsZSByZWdhcmRsZXNzIHRoZSBzdGF0ZSBvZiB0aGUgbWVudS5cbiAgICAgKi9cbiAgICB0aGlzLmF1dG9IaWRlID0gdHJ1ZTtcbiAgICB0aGlzLm9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgICByZXR1cm4gbWVudUNvbnRyb2xsZXIudG9nZ2xlKHRoaXMubWVudSk7XG4gICAgfTtcbiAgfVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLnZpc2liaWxpdHlDaGFuZ2VkKCk7XG4gIH1cbiAgYXN5bmMgdmlzaWJpbGl0eUNoYW5nZWQoKSB7XG4gICAgdGhpcy52aXNpYmxlID0gYXdhaXQgdXBkYXRlVmlzaWJpbGl0eSh0aGlzLm1lbnUpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICBjb25zdCBoaWRkZW4gPSB0aGlzLmF1dG9IaWRlICYmICF0aGlzLnZpc2libGU7XG4gICAgcmV0dXJuIGgoSG9zdCwge1xuICAgICAga2V5OiAnY2Q1NjcxMTQ3NjlhMzBiZDM4NzFlZDVkMTViZjQyYWVkMzk5NTZlMScsXG4gICAgICBvbkNsaWNrOiB0aGlzLm9uQ2xpY2ssXG4gICAgICBcImFyaWEtaGlkZGVuXCI6IGhpZGRlbiA/ICd0cnVlJyA6IG51bGwsXG4gICAgICBjbGFzczoge1xuICAgICAgICBbbW9kZV06IHRydWUsXG4gICAgICAgICdtZW51LXRvZ2dsZS1oaWRkZW4nOiBoaWRkZW5cbiAgICAgIH1cbiAgICB9LCBoKFwic2xvdFwiLCB7XG4gICAgICBrZXk6ICc3NzNkNGNmZjk1Y2E3NWYyMzU3OGIxZTFkY2E1M2M5OTMzZjI4YTMzJ1xuICAgIH0pKTtcbiAgfVxufTtcbk1lbnVUb2dnbGUuc3R5bGUgPSBtZW51VG9nZ2xlQ3NzO1xuZXhwb3J0IHsgTWVudSBhcyBpb25fbWVudSwgTWVudUJ1dHRvbiBhcyBpb25fbWVudV9idXR0b24sIE1lbnVU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
