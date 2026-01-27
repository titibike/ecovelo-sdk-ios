import {
  CoreDelegate
} from "./chunk-3MKGIXIK.js";
import {
  getIonMode,
  isPlatform
} from "./chunk-TXLH22R2.js";
import {
  BACKDROP_NO_SCROLL
} from "./chunk-J5JVDPFK.js";
import {
  OVERLAY_BACK_BUTTON_PRIORITY,
  shouldUseCloseWatcher
} from "./chunk-MUBGKTGO.js";
import {
  addEventListener,
  componentOnReady,
  focusVisibleElement,
  getElementRoot,
  removeEventListener
} from "./chunk-RZR7LWTQ.js";
import {
  doc
} from "./chunk-YSZWGYJT.js";
import {
  config,
  printIonError,
  printIonWarning
} from "./chunk-BFPTXCSH.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// node_modules/@ionic/core/dist/esm/overlays-ZX_4-t_r.js
var focusableQueryString = '[tabindex]:not([tabindex^="-"]):not([hidden]):not([disabled]), input:not([type=hidden]):not([tabindex^="-"]):not([hidden]):not([disabled]), textarea:not([tabindex^="-"]):not([hidden]):not([disabled]), button:not([tabindex^="-"]):not([hidden]):not([disabled]), select:not([tabindex^="-"]):not([hidden]):not([disabled]), ion-checkbox:not([tabindex^="-"]):not([hidden]):not([disabled]), ion-radio:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable[disabled="false"]:not([tabindex^="-"]):not([hidden])';
var focusFirstDescendant = (ref, fallbackElement) => {
  const firstInput = ref.querySelector(focusableQueryString);
  focusElementInContext(firstInput, fallbackElement !== null && fallbackElement !== void 0 ? fallbackElement : ref);
};
var focusLastDescendant = (ref, fallbackElement) => {
  const inputs = Array.from(ref.querySelectorAll(focusableQueryString));
  const lastInput = inputs.length > 0 ? inputs[inputs.length - 1] : null;
  focusElementInContext(lastInput, fallbackElement !== null && fallbackElement !== void 0 ? fallbackElement : ref);
};
var focusElementInContext = (hostToFocus, fallbackElement) => {
  let elementToFocus = hostToFocus;
  const shadowRoot = hostToFocus === null || hostToFocus === void 0 ? void 0 : hostToFocus.shadowRoot;
  if (shadowRoot) {
    elementToFocus = shadowRoot.querySelector(focusableQueryString) || hostToFocus;
  }
  if (elementToFocus) {
    const radioGroup = elementToFocus.closest("ion-radio-group");
    if (radioGroup) {
      radioGroup.setFocus();
    } else {
      focusVisibleElement(elementToFocus);
    }
  } else {
    fallbackElement.focus();
  }
};
var lastOverlayIndex = 0;
var lastId = 0;
var activeAnimations = /* @__PURE__ */ new WeakMap();
var createController = (tagName) => {
  return {
    create(options) {
      return createOverlay(tagName, options);
    },
    dismiss(data, role, id) {
      return dismissOverlay(document, data, role, tagName, id);
    },
    getTop() {
      return __async(this, null, function* () {
        return getPresentedOverlay(document, tagName);
      });
    }
  };
};
var alertController = /* @__PURE__ */ createController("ion-alert");
var actionSheetController = /* @__PURE__ */ createController("ion-action-sheet");
var loadingController = /* @__PURE__ */ createController("ion-loading");
var modalController = /* @__PURE__ */ createController("ion-modal");
var pickerController = /* @__PURE__ */ createController("ion-picker-legacy");
var popoverController = /* @__PURE__ */ createController("ion-popover");
var toastController = /* @__PURE__ */ createController("ion-toast");
var prepareOverlay = (el) => {
  if (typeof document !== "undefined") {
    connectListeners(document);
  }
  const overlayIndex = lastOverlayIndex++;
  el.overlayIndex = overlayIndex;
};
var setOverlayId = (el) => {
  if (!el.hasAttribute("id")) {
    el.id = `ion-overlay-${++lastId}`;
  }
  return el.id;
};
var createOverlay = (tagName, opts) => {
  if (typeof window !== "undefined" && typeof window.customElements !== "undefined") {
    return window.customElements.whenDefined(tagName).then(() => {
      const element = document.createElement(tagName);
      element.classList.add("overlay-hidden");
      Object.assign(element, Object.assign(Object.assign({}, opts), {
        hasController: true
      }));
      getAppRoot(document).appendChild(element);
      return new Promise((resolve) => componentOnReady(element, resolve));
    });
  }
  return Promise.resolve();
};
var isOverlayHidden = (overlay) => overlay.classList.contains("overlay-hidden");
var focusElementInOverlay = (hostToFocus, overlay) => {
  let elementToFocus = hostToFocus;
  const shadowRoot = hostToFocus === null || hostToFocus === void 0 ? void 0 : hostToFocus.shadowRoot;
  if (shadowRoot) {
    elementToFocus = shadowRoot.querySelector(focusableQueryString) || hostToFocus;
  }
  if (elementToFocus) {
    focusVisibleElement(elementToFocus);
  } else {
    overlay.focus();
  }
};
var trapKeyboardFocus = (ev, doc2) => {
  const lastOverlay = getPresentedOverlay(doc2, "ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker-legacy,ion-popover");
  const target = ev.target;
  if (!lastOverlay || !target) {
    return;
  }
  if (lastOverlay.classList.contains(FOCUS_TRAP_DISABLE_CLASS)) {
    return;
  }
  const trapScopedFocus = () => {
    if (lastOverlay === target) {
      lastOverlay.lastFocus = void 0;
    } else if (target.tagName === "ION-TOAST") {
      focusElementInOverlay(lastOverlay.lastFocus, lastOverlay);
    } else {
      const overlayRoot = getElementRoot(lastOverlay);
      if (!overlayRoot.contains(target)) {
        return;
      }
      const overlayWrapper = overlayRoot.querySelector(".ion-overlay-wrapper");
      if (!overlayWrapper) {
        return;
      }
      if (overlayWrapper.contains(target) || target === overlayRoot.querySelector("ion-backdrop")) {
        lastOverlay.lastFocus = target;
      } else {
        const lastFocus = lastOverlay.lastFocus;
        focusFirstDescendant(overlayWrapper, lastOverlay);
        if (lastFocus === doc2.activeElement) {
          focusLastDescendant(overlayWrapper, lastOverlay);
        }
        lastOverlay.lastFocus = doc2.activeElement;
      }
    }
  };
  const trapShadowFocus = () => {
    if (lastOverlay.contains(target)) {
      lastOverlay.lastFocus = target;
    } else if (target.tagName === "ION-TOAST") {
      focusElementInOverlay(lastOverlay.lastFocus, lastOverlay);
    } else {
      const lastFocus = lastOverlay.lastFocus;
      focusFirstDescendant(lastOverlay);
      if (lastFocus === doc2.activeElement) {
        focusLastDescendant(lastOverlay);
      }
      lastOverlay.lastFocus = doc2.activeElement;
    }
  };
  if (lastOverlay.shadowRoot) {
    trapShadowFocus();
  } else {
    trapScopedFocus();
  }
};
var connectListeners = (doc2) => {
  if (lastOverlayIndex === 0) {
    lastOverlayIndex = 1;
    doc2.addEventListener("focus", (ev) => {
      trapKeyboardFocus(ev, doc2);
    }, true);
    doc2.addEventListener("ionBackButton", (ev) => {
      const lastOverlay = getPresentedOverlay(doc2);
      if (lastOverlay === null || lastOverlay === void 0 ? void 0 : lastOverlay.backdropDismiss) {
        ev.detail.register(OVERLAY_BACK_BUTTON_PRIORITY, () => {
          lastOverlay.dismiss(void 0, BACKDROP);
        });
      }
    });
    if (!shouldUseCloseWatcher()) {
      doc2.addEventListener("keydown", (ev) => {
        if (ev.key === "Escape") {
          const lastOverlay = getPresentedOverlay(doc2);
          if (lastOverlay === null || lastOverlay === void 0 ? void 0 : lastOverlay.backdropDismiss) {
            lastOverlay.dismiss(void 0, BACKDROP);
          }
        }
      });
    }
  }
};
var dismissOverlay = (doc2, data, role, overlayTag, id) => {
  const overlay = getPresentedOverlay(doc2, overlayTag, id);
  if (!overlay) {
    return Promise.reject("overlay does not exist");
  }
  return overlay.dismiss(data, role);
};
var getOverlays = (doc2, selector) => {
  if (selector === void 0) {
    selector = "ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker-legacy,ion-popover,ion-toast";
  }
  return Array.from(doc2.querySelectorAll(selector)).filter((c) => c.overlayIndex > 0);
};
var getPresentedOverlays = (doc2, overlayTag) => {
  return getOverlays(doc2, overlayTag).filter((o) => !isOverlayHidden(o));
};
var getPresentedOverlay = (doc2, overlayTag, id) => {
  const overlays = getPresentedOverlays(doc2, overlayTag);
  return id === void 0 ? overlays[overlays.length - 1] : overlays.find((o) => o.id === id);
};
var setRootAriaHidden = (hidden = false) => {
  const root = getAppRoot(document);
  const viewContainer = root.querySelector("ion-router-outlet, ion-nav, #ion-view-container-root");
  if (!viewContainer) {
    return;
  }
  if (hidden) {
    viewContainer.setAttribute("aria-hidden", "true");
  } else {
    viewContainer.removeAttribute("aria-hidden");
  }
};
var present = (overlay, name, iosEnterAnimation, mdEnterAnimation, opts) => __async(null, null, function* () {
  var _a, _b;
  if (overlay.presented) {
    return;
  }
  if (overlay.el.tagName !== "ION-TOAST") {
    setRootAriaHidden(true);
    document.body.classList.add(BACKDROP_NO_SCROLL);
  }
  hideUnderlyingOverlaysFromScreenReaders(overlay.el);
  hideAnimatingOverlayFromScreenReaders(overlay.el);
  overlay.presented = true;
  overlay.willPresent.emit();
  (_a = overlay.willPresentShorthand) === null || _a === void 0 ? void 0 : _a.emit();
  const mode = getIonMode(overlay);
  const animationBuilder = overlay.enterAnimation ? overlay.enterAnimation : config.get(name, mode === "ios" ? iosEnterAnimation : mdEnterAnimation);
  const completed = yield overlayAnimation(overlay, animationBuilder, overlay.el, opts);
  if (completed) {
    overlay.didPresent.emit();
    (_b = overlay.didPresentShorthand) === null || _b === void 0 ? void 0 : _b.emit();
  }
  if (overlay.el.tagName !== "ION-TOAST") {
    restoreElementFocus(overlay.el);
  }
  if (overlay.keyboardClose && (document.activeElement === null || !overlay.el.contains(document.activeElement))) {
    overlay.el.focus();
  }
  overlay.el.removeAttribute("aria-hidden");
});
var restoreElementFocus = (overlayEl) => __async(null, null, function* () {
  let previousElement = document.activeElement;
  if (!previousElement) {
    return;
  }
  const shadowRoot = previousElement === null || previousElement === void 0 ? void 0 : previousElement.shadowRoot;
  if (shadowRoot) {
    previousElement = shadowRoot.querySelector(focusableQueryString) || previousElement;
  }
  yield overlayEl.onDidDismiss();
  if (document.activeElement === null || document.activeElement === document.body) {
    previousElement.focus();
  }
});
var dismiss = (overlay, data, role, name, iosLeaveAnimation, mdLeaveAnimation, opts) => __async(null, null, function* () {
  var _a, _b;
  if (!overlay.presented) {
    return false;
  }
  const presentedOverlays = doc !== void 0 ? getPresentedOverlays(doc) : [];
  const overlaysNotToast = presentedOverlays.filter((o) => o.tagName !== "ION-TOAST");
  const lastOverlayNotToast = overlaysNotToast.length === 1 && overlaysNotToast[0].id === overlay.el.id;
  if (lastOverlayNotToast) {
    setRootAriaHidden(false);
    document.body.classList.remove(BACKDROP_NO_SCROLL);
  }
  overlay.presented = false;
  try {
    hideAnimatingOverlayFromScreenReaders(overlay.el);
    overlay.el.style.setProperty("pointer-events", "none");
    overlay.willDismiss.emit({
      data,
      role
    });
    (_a = overlay.willDismissShorthand) === null || _a === void 0 ? void 0 : _a.emit({
      data,
      role
    });
    const mode = getIonMode(overlay);
    const animationBuilder = overlay.leaveAnimation ? overlay.leaveAnimation : config.get(name, mode === "ios" ? iosLeaveAnimation : mdLeaveAnimation);
    if (role !== GESTURE) {
      yield overlayAnimation(overlay, animationBuilder, overlay.el, opts);
    }
    overlay.didDismiss.emit({
      data,
      role
    });
    (_b = overlay.didDismissShorthand) === null || _b === void 0 ? void 0 : _b.emit({
      data,
      role
    });
    const animations = activeAnimations.get(overlay) || [];
    animations.forEach((ani) => ani.destroy());
    activeAnimations.delete(overlay);
    overlay.el.classList.add("overlay-hidden");
    overlay.el.style.removeProperty("pointer-events");
    if (overlay.el.lastFocus !== void 0) {
      overlay.el.lastFocus = void 0;
    }
  } catch (err) {
    printIonError(`[${overlay.el.tagName.toLowerCase()}] - `, err);
  }
  overlay.el.remove();
  revealOverlaysToScreenReaders();
  return true;
});
var getAppRoot = (doc2) => {
  return doc2.querySelector("ion-app") || doc2.body;
};
var overlayAnimation = (overlay, animationBuilder, baseEl, opts) => __async(null, null, function* () {
  baseEl.classList.remove("overlay-hidden");
  const aniRoot = overlay.el;
  const animation = animationBuilder(aniRoot, opts);
  if (!overlay.animated || !config.getBoolean("animated", true)) {
    animation.duration(0);
  }
  if (overlay.keyboardClose) {
    animation.beforeAddWrite(() => {
      const activeElement = baseEl.ownerDocument.activeElement;
      if (activeElement === null || activeElement === void 0 ? void 0 : activeElement.matches("input,ion-input, ion-textarea")) {
        activeElement.blur();
      }
    });
  }
  const activeAni = activeAnimations.get(overlay) || [];
  activeAnimations.set(overlay, [...activeAni, animation]);
  yield animation.play();
  return true;
});
var eventMethod = (element, eventName) => {
  let resolve;
  const promise = new Promise((r) => resolve = r);
  onceEvent(element, eventName, (event) => {
    resolve(event.detail);
  });
  return promise;
};
var onceEvent = (element, eventName, callback) => {
  const handler = (ev) => {
    removeEventListener(element, eventName, handler);
    callback(ev);
  };
  addEventListener(element, eventName, handler);
};
var isCancel = (role) => {
  return role === "cancel" || role === BACKDROP;
};
var defaultGate = (h) => h();
var safeCall = (handler, arg) => {
  if (typeof handler === "function") {
    const jmp = config.get("_zoneGate", defaultGate);
    return jmp(() => {
      try {
        return handler(arg);
      } catch (e) {
        throw e;
      }
    });
  }
  return void 0;
};
var BACKDROP = "backdrop";
var GESTURE = "gesture";
var OVERLAY_GESTURE_PRIORITY = 39;
var createDelegateController = (ref) => {
  let inline = false;
  let workingDelegate;
  const coreDelegate = CoreDelegate();
  const getDelegate = (force = false) => {
    if (workingDelegate && !force) {
      return {
        delegate: workingDelegate,
        inline
      };
    }
    const {
      el,
      hasController,
      delegate
    } = ref;
    const parentEl = el.parentNode;
    inline = parentEl !== null && !hasController;
    workingDelegate = inline ? delegate || coreDelegate : delegate;
    return {
      inline,
      delegate: workingDelegate
    };
  };
  const attachViewToDom = (component) => __async(null, null, function* () {
    const {
      delegate
    } = getDelegate(true);
    if (delegate) {
      return yield delegate.attachViewToDom(ref.el, component);
    }
    const {
      hasController
    } = ref;
    if (hasController && component !== void 0) {
      throw new Error("framework delegate is missing");
    }
    return null;
  });
  const removeViewFromDom = () => {
    const {
      delegate
    } = getDelegate();
    if (delegate && ref.el !== void 0) {
      delegate.removeViewFromDom(ref.el.parentElement, ref.el);
    }
  };
  return {
    attachViewToDom,
    removeViewFromDom
  };
};
var createTriggerController = () => {
  let destroyTriggerInteraction;
  const removeClickListener = () => {
    if (destroyTriggerInteraction) {
      destroyTriggerInteraction();
      destroyTriggerInteraction = void 0;
    }
  };
  const addClickListener = (el, trigger) => {
    removeClickListener();
    const triggerEl = trigger !== void 0 ? document.getElementById(trigger) : null;
    if (!triggerEl) {
      printIonWarning(`[${el.tagName.toLowerCase()}] - A trigger element with the ID "${trigger}" was not found in the DOM. The trigger element must be in the DOM when the "trigger" property is set on an overlay component.`, el);
      return;
    }
    const configureTriggerInteraction = (targetEl, overlayEl) => {
      const openOverlay = () => {
        overlayEl.present();
      };
      targetEl.addEventListener("click", openOverlay);
      return () => {
        targetEl.removeEventListener("click", openOverlay);
      };
    };
    destroyTriggerInteraction = configureTriggerInteraction(triggerEl, el);
  };
  return {
    addClickListener,
    removeClickListener
  };
};
var hideAnimatingOverlayFromScreenReaders = (overlay) => {
  if (doc === void 0) return;
  if (isPlatform("android")) {
    overlay.setAttribute("aria-hidden", "true");
  }
};
var hideUnderlyingOverlaysFromScreenReaders = (newTopMostOverlay) => {
  var _a;
  if (doc === void 0) return;
  const overlays = getPresentedOverlays(doc);
  for (let i = overlays.length - 1; i >= 0; i--) {
    const presentedOverlay = overlays[i];
    const nextPresentedOverlay = (_a = overlays[i + 1]) !== null && _a !== void 0 ? _a : newTopMostOverlay;
    if (nextPresentedOverlay.hasAttribute("aria-hidden") || nextPresentedOverlay.tagName !== "ION-TOAST") {
      presentedOverlay.setAttribute("aria-hidden", "true");
    }
  }
};
var revealOverlaysToScreenReaders = () => {
  if (doc === void 0) return;
  const overlays = getPresentedOverlays(doc);
  for (let i = overlays.length - 1; i >= 0; i--) {
    const currentOverlay = overlays[i];
    currentOverlay.removeAttribute("aria-hidden");
    if (currentOverlay.tagName !== "ION-TOAST") {
      break;
    }
  }
};
var FOCUS_TRAP_DISABLE_CLASS = "ion-disable-focus-trap";

export {
  focusFirstDescendant,
  focusLastDescendant,
  alertController,
  actionSheetController,
  loadingController,
  modalController,
  pickerController,
  popoverController,
  toastController,
  prepareOverlay,
  setOverlayId,
  getPresentedOverlay,
  present,
  dismiss,
  eventMethod,
  isCancel,
  safeCall,
  BACKDROP,
  GESTURE,
  OVERLAY_GESTURE_PRIORITY,
  createDelegateController,
  createTriggerController,
  FOCUS_TRAP_DISABLE_CLASS
};
/*! Bundled license information:

@ionic/core/dist/esm/overlays-ZX_4-t_r.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9vdmVybGF5cy1aWF80LXRfci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgZCBhcyBkb2MgfSBmcm9tICcuL2luZGV4LVpqUDRDamVaLmpzJztcbmltcG9ydCB7IG4gYXMgZm9jdXNWaXNpYmxlRWxlbWVudCwgYyBhcyBjb21wb25lbnRPblJlYWR5LCBmIGFzIGFkZEV2ZW50TGlzdGVuZXIsIG0gYXMgcmVtb3ZlRXZlbnRMaXN0ZW5lciwgZyBhcyBnZXRFbGVtZW50Um9vdCB9IGZyb20gJy4vaGVscGVycy04S1NRUUdReS5qcyc7XG5pbXBvcnQgeyBPVkVSTEFZX0JBQ0tfQlVUVE9OX1BSSU9SSVRZLCBzaG91bGRVc2VDbG9zZVdhdGNoZXIgfSBmcm9tICcuL2hhcmR3YXJlLWJhY2stYnV0dG9uLURoYmQtMjNILmpzJztcbmltcG9ydCB7IGUgYXMgY29uZmlnLCBqIGFzIHByaW50SW9uRXJyb3IsIGYgYXMgcHJpbnRJb25XYXJuaW5nIH0gZnJvbSAnLi9pbmRleC00RHhZNl9nRy5qcyc7XG5pbXBvcnQgeyBiIGFzIGdldElvbk1vZGUsIGEgYXMgaXNQbGF0Zm9ybSB9IGZyb20gJy4vaW9uaWMtZ2xvYmFsLUNUU3l1ZmhGLmpzJztcbmltcG9ydCB7IEMgYXMgQ29yZURlbGVnYXRlIH0gZnJvbSAnLi9mcmFtZXdvcmstZGVsZWdhdGUtQkxFQmdIMDYuanMnO1xuaW1wb3J0IHsgQiBhcyBCQUNLRFJPUF9OT19TQ1JPTEwgfSBmcm9tICcuL2dlc3R1cmUtY29udHJvbGxlci1CVEVPczFhdC5qcyc7XG5cbi8qKlxuICogVGhpcyBxdWVyeSBzdHJpbmcgc2VsZWN0cyBlbGVtZW50cyB0aGF0XG4gKiBhcmUgZWxpZ2libGUgdG8gcmVjZWl2ZSBmb2N1cy4gV2Ugc2VsZWN0XG4gKiBpbnRlcmFjdGl2ZSBlbGVtZW50cyB0aGF0IG1lZXQgdGhlIGZvbGxvd2luZ1xuICogY3JpdGVyaWE6XG4gKiAxLiBFbGVtZW50IGRvZXMgbm90IGhhdmUgYSBuZWdhdGl2ZSB0YWJpbmRleFxuICogMi4gRWxlbWVudCBkb2VzIG5vdCBoYXZlIGBoaWRkZW5gXG4gKiAzLiBFbGVtZW50IGRvZXMgbm90IGhhdmUgYGRpc2FibGVkYCBmb3Igbm9uLUlvbmljIGNvbXBvbmVudHMuXG4gKiA0LiBFbGVtZW50IGRvZXMgbm90IGhhdmUgYGRpc2FibGVkYCBvciBgZGlzYWJsZWQ9XCJ0cnVlXCJgIGZvciBJb25pYyBjb21wb25lbnRzLlxuICogTm90ZTogV2UgbmVlZCB0aGlzIGRpc3RpbmN0aW9uIGJlY2F1c2UgYGRpc2FibGVkPVwiZmFsc2VcImAgaXNcbiAqIHZhbGlkIHVzYWdlIGZvciB0aGUgZGlzYWJsZWQgcHJvcGVydHkgb24gaW9uLWJ1dHRvbi5cbiAqL1xuY29uc3QgZm9jdXNhYmxlUXVlcnlTdHJpbmcgPSAnW3RhYmluZGV4XTpub3QoW3RhYmluZGV4Xj1cIi1cIl0pOm5vdChbaGlkZGVuXSk6bm90KFtkaXNhYmxlZF0pLCBpbnB1dDpub3QoW3R5cGU9aGlkZGVuXSk6bm90KFt0YWJpbmRleF49XCItXCJdKTpub3QoW2hpZGRlbl0pOm5vdChbZGlzYWJsZWRdKSwgdGV4dGFyZWE6bm90KFt0YWJpbmRleF49XCItXCJdKTpub3QoW2hpZGRlbl0pOm5vdChbZGlzYWJsZWRdKSwgYnV0dG9uOm5vdChbdGFiaW5kZXhePVwiLVwiXSk6bm90KFtoaWRkZW5dKTpub3QoW2Rpc2FibGVkXSksIHNlbGVjdDpub3QoW3RhYmluZGV4Xj1cIi1cIl0pOm5vdChbaGlkZGVuXSk6bm90KFtkaXNhYmxlZF0pLCBpb24tY2hlY2tib3g6bm90KFt0YWJpbmRleF49XCItXCJdKTpub3QoW2hpZGRlbl0pOm5vdChbZGlzYWJsZWRdKSwgaW9uLXJhZGlvOm5vdChbdGFiaW5kZXhePVwiLVwiXSk6bm90KFtoaWRkZW5dKTpub3QoW2Rpc2FibGVkXSksIC5pb24tZm9jdXNhYmxlOm5vdChbdGFiaW5kZXhePVwiLVwiXSk6bm90KFtoaWRkZW5dKTpub3QoW2Rpc2FibGVkXSksIC5pb24tZm9jdXNhYmxlW2Rpc2FibGVkPVwiZmFsc2VcIl06bm90KFt0YWJpbmRleF49XCItXCJdKTpub3QoW2hpZGRlbl0pJztcbi8qKlxuICogRm9jdXNlcyB0aGUgZmlyc3QgZGVzY2VuZGFudCBpbiBhIGNvbnRleHRcbiAqIHRoYXQgY2FuIHJlY2VpdmUgZm9jdXMuIElmIG5vbmUgZXhpc3RzLFxuICogYSBmYWxsYmFjayBlbGVtZW50IHdpbGwgYmUgZm9jdXNlZC5cbiAqIFRoaXMgZmFsbGJhY2sgaXMgdHlwaWNhbGx5IGFuIGFuY2VzdG9yXG4gKiBjb250YWluZXIgc3VjaCBhcyBhIG1lbnUgb3Igb3ZlcmxheSBzbyBmb2N1cyBkb2VzIG5vdFxuICogbGVhdmUgdGhlIGNvbnRhaW5lciB3ZSBhcmUgdHJ5aW5nIHRvIHRyYXAgZm9jdXMgaW4uXG4gKlxuICogSWYgbm8gZmFsbGJhY2sgaXMgc3BlY2lmaWVkIHRoZW4gd2UgZm9jdXMgdGhlIGNvbnRhaW5lciBpdHNlbGYuXG4gKi9cbmNvbnN0IGZvY3VzRmlyc3REZXNjZW5kYW50ID0gKHJlZiwgZmFsbGJhY2tFbGVtZW50KSA9PiB7XG4gIGNvbnN0IGZpcnN0SW5wdXQgPSByZWYucXVlcnlTZWxlY3Rvcihmb2N1c2FibGVRdWVyeVN0cmluZyk7XG4gIGZvY3VzRWxlbWVudEluQ29udGV4dChmaXJzdElucHV0LCBmYWxsYmFja0VsZW1lbnQgIT09IG51bGwgJiYgZmFsbGJhY2tFbGVtZW50ICE9PSB2b2lkIDAgPyBmYWxsYmFja0VsZW1lbnQgOiByZWYpO1xufTtcbi8qKlxuICogRm9jdXNlcyB0aGUgbGFzdCBkZXNjZW5kYW50IGluIGEgY29udGV4dFxuICogdGhhdCBjYW4gcmVjZWl2ZSBmb2N1cy4gSWYgbm9uZSBleGlzdHMsXG4gKiBhIGZhbGxiYWNrIGVsZW1lbnQgd2lsbCBiZSBmb2N1c2VkLlxuICogVGhpcyBmYWxsYmFjayBpcyB0eXBpY2FsbHkgYW4gYW5jZXN0b3JcbiAqIGNvbnRhaW5lciBzdWNoIGFzIGEgbWVudSBvciBvdmVybGF5IHNvIGZvY3VzIGRvZXMgbm90XG4gKiBsZWF2ZSB0aGUgY29udGFpbmVyIHdlIGFyZSB0cnlpbmcgdG8gdHJhcCBmb2N1cyBpbi5cbiAqXG4gKiBJZiBubyBmYWxsYmFjayBpcyBzcGVjaWZpZWQgdGhlbiB3ZSBmb2N1cyB0aGUgY29udGFpbmVyIGl0c2VsZi5cbiAqL1xuY29uc3QgZm9jdXNMYXN0RGVzY2VuZGFudCA9IChyZWYsIGZhbGxiYWNrRWxlbWVudCkgPT4ge1xuICBjb25zdCBpbnB1dHMgPSBBcnJheS5mcm9tKHJlZi5xdWVyeVNlbGVjdG9yQWxsKGZvY3VzYWJsZVF1ZXJ5U3RyaW5nKSk7XG4gIGNvbnN0IGxhc3RJbnB1dCA9IGlucHV0cy5sZW5ndGggPiAwID8gaW5wdXRzW2lucHV0cy5sZW5ndGggLSAxXSA6IG51bGw7XG4gIGZvY3VzRWxlbWVudEluQ29udGV4dChsYXN0SW5wdXQsIGZhbGxiYWNrRWxlbWVudCAhPT0gbnVsbCAmJiBmYWxsYmFja0VsZW1lbnQgIT09IHZvaWQgMCA/IGZhbGxiYWNrRWxlbWVudCA6IHJlZik7XG59O1xuLyoqXG4gKiBGb2N1c2VzIGEgcGFydGljdWxhciBlbGVtZW50IGluIGEgY29udGV4dC4gSWYgdGhlIGVsZW1lbnRcbiAqIGRvZXNuJ3QgaGF2ZSBhbnl0aGluZyBmb2N1c2FibGUgYXNzb2NpYXRlZCB3aXRoIGl0IHRoZW5cbiAqIGEgZmFsbGJhY2sgZWxlbWVudCB3aWxsIGJlIGZvY3VzZWQuXG4gKlxuICogVGhpcyBmYWxsYmFjayBpcyB0eXBpY2FsbHkgYW4gYW5jZXN0b3JcbiAqIGNvbnRhaW5lciBzdWNoIGFzIGEgbWVudSBvciBvdmVybGF5IHNvIGZvY3VzIGRvZXMgbm90XG4gKiBsZWF2ZSB0aGUgY29udGFpbmVyIHdlIGFyZSB0cnlpbmcgdG8gdHJhcCBmb2N1cyBpbi5cbiAqIFRoaXMgc2hvdWxkIGJlIHVzZWQgaW5zdGVhZCBvZiB0aGUgZm9jdXMoKSBtZXRob2RcbiAqIG9uIG1vc3QgZWxlbWVudHMgYmVjYXVzZSB0aGUgZm9jdXNhYmxlIGVsZW1lbnRcbiAqIG1heSBub3QgYmUgdGhlIGhvc3QgZWxlbWVudC5cbiAqXG4gKiBGb3IgZXhhbXBsZSwgaWYgYW4gaW9uLWJ1dHRvbiBzaG91bGQgYmUgZm9jdXNlZFxuICogdGhlbiB3ZSBzaG91bGQgYWN0dWFsbHkgZm9jdXMgdGhlIG5hdGl2ZSA8YnV0dG9uPlxuICogZWxlbWVudCBpbnNpZGUgb2YgaW9uLWJ1dHRvbidzIHNoYWRvdyByb290LCBub3RcbiAqIHRoZSBob3N0IGVsZW1lbnQgaXRzZWxmLlxuICovXG5jb25zdCBmb2N1c0VsZW1lbnRJbkNvbnRleHQgPSAoaG9zdFRvRm9jdXMsIGZhbGxiYWNrRWxlbWVudCkgPT4ge1xuICBsZXQgZWxlbWVudFRvRm9jdXMgPSBob3N0VG9Gb2N1cztcbiAgY29uc3Qgc2hhZG93Um9vdCA9IGhvc3RUb0ZvY3VzID09PSBudWxsIHx8IGhvc3RUb0ZvY3VzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBob3N0VG9Gb2N1cy5zaGFkb3dSb290O1xuICBpZiAoc2hhZG93Um9vdCkge1xuICAgIC8vIElmIHRoZXJlIGFyZSBubyBpbm5lciBmb2N1c2FibGUgZWxlbWVudHMsIGp1c3QgZm9jdXMgdGhlIGhvc3QgZWxlbWVudC5cbiAgICBlbGVtZW50VG9Gb2N1cyA9IHNoYWRvd1Jvb3QucXVlcnlTZWxlY3Rvcihmb2N1c2FibGVRdWVyeVN0cmluZykgfHwgaG9zdFRvRm9jdXM7XG4gIH1cbiAgaWYgKGVsZW1lbnRUb0ZvY3VzKSB7XG4gICAgY29uc3QgcmFkaW9Hcm91cCA9IGVsZW1lbnRUb0ZvY3VzLmNsb3Nlc3QoJ2lvbi1yYWRpby1ncm91cCcpO1xuICAgIGlmIChyYWRpb0dyb3VwKSB7XG4gICAgICByYWRpb0dyb3VwLnNldEZvY3VzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvY3VzVmlzaWJsZUVsZW1lbnQoZWxlbWVudFRvRm9jdXMpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBGb2N1cyBmYWxsYmFjayBlbGVtZW50IGluc3RlYWQgb2YgbGV0dGluZyBmb2N1cyBlc2NhcGVcbiAgICBmYWxsYmFja0VsZW1lbnQuZm9jdXMoKTtcbiAgfVxufTtcbmxldCBsYXN0T3ZlcmxheUluZGV4ID0gMDtcbmxldCBsYXN0SWQgPSAwO1xuY29uc3QgYWN0aXZlQW5pbWF0aW9ucyA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBjcmVhdGVDb250cm9sbGVyID0gdGFnTmFtZSA9PiB7XG4gIHJldHVybiB7XG4gICAgY3JlYXRlKG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBjcmVhdGVPdmVybGF5KHRhZ05hbWUsIG9wdGlvbnMpO1xuICAgIH0sXG4gICAgZGlzbWlzcyhkYXRhLCByb2xlLCBpZCkge1xuICAgICAgcmV0dXJuIGRpc21pc3NPdmVybGF5KGRvY3VtZW50LCBkYXRhLCByb2xlLCB0YWdOYW1lLCBpZCk7XG4gICAgfSxcbiAgICBhc3luYyBnZXRUb3AoKSB7XG4gICAgICByZXR1cm4gZ2V0UHJlc2VudGVkT3ZlcmxheShkb2N1bWVudCwgdGFnTmFtZSk7XG4gICAgfVxuICB9O1xufTtcbmNvbnN0IGFsZXJ0Q29udHJvbGxlciA9IC8qQF9fUFVSRV9fKi9jcmVhdGVDb250cm9sbGVyKCdpb24tYWxlcnQnKTtcbmNvbnN0IGFjdGlvblNoZWV0Q29udHJvbGxlciA9IC8qQF9fUFVSRV9fKi9jcmVhdGVDb250cm9sbGVyKCdpb24tYWN0aW9uLXNoZWV0Jyk7XG5jb25zdCBsb2FkaW5nQ29udHJvbGxlciA9IC8qQF9fUFVSRV9fKi9jcmVhdGVDb250cm9sbGVyKCdpb24tbG9hZGluZycpO1xuY29uc3QgbW9kYWxDb250cm9sbGVyID0gLypAX19QVVJFX18qL2NyZWF0ZUNvbnRyb2xsZXIoJ2lvbi1tb2RhbCcpO1xuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2UgdGhlIGlubGluZSBpb24tcGlja2VyIGNvbXBvbmVudCBpbnN0ZWFkLlxuICovXG5jb25zdCBwaWNrZXJDb250cm9sbGVyID0gLypAX19QVVJFX18qL2NyZWF0ZUNvbnRyb2xsZXIoJ2lvbi1waWNrZXItbGVnYWN5Jyk7XG5jb25zdCBwb3BvdmVyQ29udHJvbGxlciA9IC8qQF9fUFVSRV9fKi9jcmVhdGVDb250cm9sbGVyKCdpb24tcG9wb3ZlcicpO1xuY29uc3QgdG9hc3RDb250cm9sbGVyID0gLypAX19QVVJFX18qL2NyZWF0ZUNvbnRyb2xsZXIoJ2lvbi10b2FzdCcpO1xuLyoqXG4gKiBQcmVwYXJlcyB0aGUgb3ZlcmxheSBlbGVtZW50IHRvIGJlIHByZXNlbnRlZC5cbiAqL1xuY29uc3QgcHJlcGFyZU92ZXJsYXkgPSBlbCA9PiB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLyoqXG4gICAgICogQWRkcyBhIHNpbmdsZSBpbnN0YW5jZSBvZiBldmVudCBsaXN0ZW5lcnMgZm9yIGFwcGxpY2F0aW9uIGJlaGF2aW9yczpcbiAgICAgKlxuICAgICAqIC0gRXNjYXBlIEtleSBiZWhhdmlvciB0byBkaXNtaXNzIGFuIG92ZXJsYXlcbiAgICAgKiAtIFRyYXBwaW5nIGZvY3VzIHdpdGhpbiBhbiBvdmVybGF5XG4gICAgICogLSBCYWNrIGJ1dHRvbiBiZWhhdmlvciB0byBkaXNtaXNzIGFuIG92ZXJsYXlcbiAgICAgKlxuICAgICAqIFRoaXMgb25seSBvY2N1cnMgd2hlbiB0aGUgZmlyc3Qgb3ZlcmxheSBpcyBjcmVhdGVkLlxuICAgICAqL1xuICAgIGNvbm5lY3RMaXN0ZW5lcnMoZG9jdW1lbnQpO1xuICB9XG4gIGNvbnN0IG92ZXJsYXlJbmRleCA9IGxhc3RPdmVybGF5SW5kZXgrKztcbiAgLyoqXG4gICAqIG92ZXJsYXlJbmRleCBpcyB1c2VkIGluIHRoZSBvdmVybGF5IGNvbXBvbmVudHMgdG8gc2V0IGEgekluZGV4LlxuICAgKiBUaGlzIGVuc3VyZXMgdGhhdCB0aGUgbW9zdCByZWNlbnRseSBwcmVzZW50ZWQgb3ZlcmxheSB3aWxsIGJlXG4gICAqIG9uIHRvcC5cbiAgICovXG4gIGVsLm92ZXJsYXlJbmRleCA9IG92ZXJsYXlJbmRleDtcbn07XG4vKipcbiAqIEFzc2lnbnMgYW4gaW5jcmVtZW50aW5nIGlkIHRvIGFuIG92ZXJsYXkgZWxlbWVudCwgdGhhdCBkb2VzIG5vdFxuICogYWxyZWFkeSBoYXZlIGFuIGlkIGFzc2lnbmVkIHRvIGl0LlxuICpcbiAqIFVzZWQgdG8gdHJhY2sgdW5pcXVlIGluc3RhbmNlcyBvZiBhbiBvdmVybGF5IGVsZW1lbnQuXG4gKi9cbmNvbnN0IHNldE92ZXJsYXlJZCA9IGVsID0+IHtcbiAgaWYgKCFlbC5oYXNBdHRyaWJ1dGUoJ2lkJykpIHtcbiAgICBlbC5pZCA9IGBpb24tb3ZlcmxheS0keysrbGFzdElkfWA7XG4gIH1cbiAgcmV0dXJuIGVsLmlkO1xufTtcbmNvbnN0IGNyZWF0ZU92ZXJsYXkgPSAodGFnTmFtZSwgb3B0cykgPT4ge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3ByZWZlci1vcHRpb25hbC1jaGFpblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5jdXN0b21FbGVtZW50cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gd2luZG93LmN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKHRhZ05hbWUpLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ292ZXJsYXktaGlkZGVuJyk7XG4gICAgICAvKipcbiAgICAgICAqIENvbnZlcnQgdGhlIHBhc3NlZCBpbiBvdmVybGF5IG9wdGlvbnMgaW50byBwcm9wc1xuICAgICAgICogdGhhdCBnZXQgcGFzc2VkIGRvd24gaW50byB0aGUgbmV3IG92ZXJsYXkuXG4gICAgICAgKi9cbiAgICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudCwgT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBvcHRzKSwge1xuICAgICAgICBoYXNDb250cm9sbGVyOiB0cnVlXG4gICAgICB9KSk7XG4gICAgICAvLyBhcHBlbmQgdGhlIG92ZXJsYXkgZWxlbWVudCB0byB0aGUgZG9jdW1lbnQgYm9keVxuICAgICAgZ2V0QXBwUm9vdChkb2N1bWVudCkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBjb21wb25lbnRPblJlYWR5KGVsZW1lbnQsIHJlc29sdmUpKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG59O1xuY29uc3QgaXNPdmVybGF5SGlkZGVuID0gb3ZlcmxheSA9PiBvdmVybGF5LmNsYXNzTGlzdC5jb250YWlucygnb3ZlcmxheS1oaWRkZW4nKTtcbi8qKlxuICogRm9jdXNlcyBhIHBhcnRpY3VsYXIgZWxlbWVudCBpbiBhbiBvdmVybGF5LiBJZiB0aGUgZWxlbWVudFxuICogZG9lc24ndCBoYXZlIGFueXRoaW5nIGZvY3VzYWJsZSBhc3NvY2lhdGVkIHdpdGggaXQgdGhlblxuICogdGhlIG92ZXJsYXkgaXRzZWxmIHdpbGwgYmUgZm9jdXNlZC5cbiAqIFRoaXMgc2hvdWxkIGJlIHVzZWQgaW5zdGVhZCBvZiB0aGUgZm9jdXMoKSBtZXRob2RcbiAqIG9uIG1vc3QgZWxlbWVudHMgYmVjYXVzZSB0aGUgZm9jdXNhYmxlIGVsZW1lbnRcbiAqIG1heSBub3QgYmUgdGhlIGhvc3QgZWxlbWVudC5cbiAqXG4gKiBGb3IgZXhhbXBsZSwgaWYgYW4gaW9uLWJ1dHRvbiBzaG91bGQgYmUgZm9jdXNlZFxuICogdGhlbiB3ZSBzaG91bGQgYWN0dWFsbHkgZm9jdXMgdGhlIG5hdGl2ZSA8YnV0dG9uPlxuICogZWxlbWVudCBpbnNpZGUgb2YgaW9uLWJ1dHRvbidzIHNoYWRvdyByb290LCBub3RcbiAqIHRoZSBob3N0IGVsZW1lbnQgaXRzZWxmLlxuICovXG5jb25zdCBmb2N1c0VsZW1lbnRJbk92ZXJsYXkgPSAoaG9zdFRvRm9jdXMsIG92ZXJsYXkpID0+IHtcbiAgbGV0IGVsZW1lbnRUb0ZvY3VzID0gaG9zdFRvRm9jdXM7XG4gIGNvbnN0IHNoYWRvd1Jvb3QgPSBob3N0VG9Gb2N1cyA9PT0gbnVsbCB8fCBob3N0VG9Gb2N1cyA9PT0gdm9pZCAwID8gdm9pZCAwIDogaG9zdFRvRm9jdXMuc2hhZG93Um9vdDtcbiAgaWYgKHNoYWRvd1Jvb3QpIHtcbiAgICAvLyBJZiB0aGVyZSBhcmUgbm8gaW5uZXIgZm9jdXNhYmxlIGVsZW1lbnRzLCBqdXN0IGZvY3VzIHRoZSBob3N0IGVsZW1lbnQuXG4gICAgZWxlbWVudFRvRm9jdXMgPSBzaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoZm9jdXNhYmxlUXVlcnlTdHJpbmcpIHx8IGhvc3RUb0ZvY3VzO1xuICB9XG4gIGlmIChlbGVtZW50VG9Gb2N1cykge1xuICAgIGZvY3VzVmlzaWJsZUVsZW1lbnQoZWxlbWVudFRvRm9jdXMpO1xuICB9IGVsc2Uge1xuICAgIC8vIEZvY3VzIG92ZXJsYXkgaW5zdGVhZCBvZiBsZXR0aW5nIGZvY3VzIGVzY2FwZVxuICAgIG92ZXJsYXkuZm9jdXMoKTtcbiAgfVxufTtcbi8qKlxuICogVHJhcHMga2V5Ym9hcmQgZm9jdXMgaW5zaWRlIG9mIG92ZXJsYXkgY29tcG9uZW50cy5cbiAqIEJhc2VkIG9uIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9hcmlhLXByYWN0aWNlcy9leGFtcGxlcy9kaWFsb2ctbW9kYWwvYWxlcnRkaWFsb2cuaHRtbFxuICogVGhpcyBpbmNsdWRlcyB0aGUgZm9sbG93aW5nIGNvbXBvbmVudHM6IEFjdGlvbiBTaGVldCwgQWxlcnQsIExvYWRpbmcsIE1vZGFsLFxuICogUGlja2VyLCBhbmQgUG9wb3Zlci5cbiAqIFNob3VsZCBOT1QgaW5jbHVkZTogVG9hc3RcbiAqL1xuY29uc3QgdHJhcEtleWJvYXJkRm9jdXMgPSAoZXYsIGRvYykgPT4ge1xuICBjb25zdCBsYXN0T3ZlcmxheSA9IGdldFByZXNlbnRlZE92ZXJsYXkoZG9jLCAnaW9uLWFsZXJ0LGlvbi1hY3Rpb24tc2hlZXQsaW9uLWxvYWRpbmcsaW9uLW1vZGFsLGlvbi1waWNrZXItbGVnYWN5LGlvbi1wb3BvdmVyJyk7XG4gIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldDtcbiAgLyoqXG4gICAqIElmIG5vIGFjdGl2ZSBvdmVybGF5LCBpZ25vcmUgdGhpcyBldmVudC5cbiAgICpcbiAgICogSWYgdGhpcyBjb21wb25lbnQgdXNlcyB0aGUgc2hhZG93IGRvbSxcbiAgICogdGhpcyBnbG9iYWwgbGlzdGVuZXIgaXMgcG9pbnRsZXNzXG4gICAqIHNpbmNlIGl0IHdpbGwgbm90IGNhdGNoIHRoZSBmb2N1c1xuICAgKiB0cmFwcyBhcyB0aGV5IGFyZSBpbnNpZGUgdGhlIHNoYWRvdyByb290LlxuICAgKiBXZSBuZWVkIHRvIGFkZCBhIGxpc3RlbmVyIHRvIHRoZSBzaGFkb3cgcm9vdFxuICAgKiBpdHNlbGYgdG8gZW5zdXJlIHRoZSBmb2N1cyB0cmFwIHdvcmtzLlxuICAgKi9cbiAgaWYgKCFsYXN0T3ZlcmxheSB8fCAhdGFyZ2V0KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8qKlxuICAgKiBJZiB0aGUgaW9uLWRpc2FibGUtZm9jdXMtdHJhcCBjbGFzc1xuICAgKiBpcyBwcmVzZW50IG9uIGFuIG92ZXJsYXksIHRoZW4gdGhpcyBjb21wb25lbnRcbiAgICogaW5zdGFuY2UgaGFzIG9wdGVkIG91dCBvZiBmb2N1cyB0cmFwcGluZy5cbiAgICogQW4gZXhhbXBsZSBvZiB0aGlzIGlzIHdoZW4gdGhlIHNoZWV0IG1vZGFsXG4gICAqIGhhcyBhIGJhY2tkcm9wIHRoYXQgaXMgZGlzYWJsZWQuIFRoZSBjb250ZW50XG4gICAqIGJlaGluZCB0aGUgc2hlZXQgc2hvdWxkIGJlIGZvY3VzYWJsZSB1bnRpbFxuICAgKiB0aGUgYmFja2Ryb3AgaXMgZW5hYmxlZC5cbiAgICovXG4gIGlmIChsYXN0T3ZlcmxheS5jbGFzc0xpc3QuY29udGFpbnMoRk9DVVNfVFJBUF9ESVNBQkxFX0NMQVNTKSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB0cmFwU2NvcGVkRm9jdXMgPSAoKSA9PiB7XG4gICAgLyoqXG4gICAgICogSWYgd2UgYXJlIGZvY3VzaW5nIHRoZSBvdmVybGF5LCBjbGVhclxuICAgICAqIHRoZSBsYXN0IGZvY3VzZWQgZWxlbWVudCBzbyB0aGF0IGhpdHRpbmdcbiAgICAgKiB0YWIgYWN0aXZhdGVzIHRoZSBmaXJzdCBmb2N1c2FibGUgZWxlbWVudFxuICAgICAqIGluIHRoZSBvdmVybGF5IHdyYXBwZXIuXG4gICAgICovXG4gICAgaWYgKGxhc3RPdmVybGF5ID09PSB0YXJnZXQpIHtcbiAgICAgIGxhc3RPdmVybGF5Lmxhc3RGb2N1cyA9IHVuZGVmaW5lZDtcbiAgICAgIC8qKlxuICAgICAgICogVG9hc3RzIGNhbiBiZSBwcmVzZW50ZWQgZnJvbSBhbiBvdmVybGF5LlxuICAgICAgICogSG93ZXZlciwgZm9jdXMgc2hvdWxkIHN0aWxsIGJlIHJldHVybmVkIHRvXG4gICAgICAgKiB0aGUgb3ZlcmxheSB3aGVuIGNsaWNraW5nIGEgdG9hc3QuIE5vcm1hbGx5LFxuICAgICAgICogZm9jdXMgd291bGQgYmUgcmV0dXJuZWQgdG8gdGhlIGxhc3QgZm9jdXNhYmxlXG4gICAgICAgKiBkZXNjZW5kYW50IGluIHRoZSBvdmVybGF5IHdoaWNoIG1heSBub3QgYWx3YXlzIGJlXG4gICAgICAgKiB0aGUgYnV0dG9uIHRoYXQgdGhlIHRvYXN0IHdhcyBwcmVzZW50ZWQgZnJvbS4gSW4gdGhpcyBjYXNlLFxuICAgICAgICogdGhlIGZvY3VzIG1heSBiZSByZXR1cm5lZCB0byBhbiB1bmV4cGVjdGVkIGVsZW1lbnQuXG4gICAgICAgKiBUbyBhY2NvdW50IGZvciB0aGlzLCB3ZSBtYWtlIHN1cmUgdG8gcmV0dXJuIGZvY3VzIHRvIHRoZVxuICAgICAgICogbGFzdCBmb2N1c2VkIGVsZW1lbnQgaW4gdGhlIG92ZXJsYXkgaWYgZm9jdXMgaXNcbiAgICAgICAqIG1vdmVkIHRvIHRoZSB0b2FzdC5cbiAgICAgICAqL1xuICAgIH0gZWxzZSBpZiAodGFyZ2V0LnRhZ05hbWUgPT09ICdJT04tVE9BU1QnKSB7XG4gICAgICBmb2N1c0VsZW1lbnRJbk92ZXJsYXkobGFzdE92ZXJsYXkubGFzdEZvY3VzLCBsYXN0T3ZlcmxheSk7XG4gICAgICAvKipcbiAgICAgICAqIE90aGVyd2lzZSwgd2UgbXVzdCBiZSBmb2N1c2luZyBhbiBlbGVtZW50XG4gICAgICAgKiBpbnNpZGUgb2YgdGhlIG92ZXJsYXkuIFRoZSB0d28gcG9zc2libGUgb3B0aW9uc1xuICAgICAgICogaGVyZSBhcmUgYW4gaW5wdXQvYnV0dG9uL2V0YyBvciB0aGUgaW9uLWZvY3VzLXRyYXBcbiAgICAgICAqIGVsZW1lbnQuIFRoZSBmb2N1cyB0cmFwIGVsZW1lbnQgaXMgdXNlZCB0byBwcmV2ZW50XG4gICAgICAgKiB0aGUga2V5Ym9hcmQgZm9jdXMgZnJvbSBsZWF2aW5nIHRoZSBvdmVybGF5IHdoZW5cbiAgICAgICAqIHVzaW5nIFRhYiBvciBzY3JlZW4gYXNzaXN0YW50cy5cbiAgICAgICAqL1xuICAgIH0gZWxzZSB7XG4gICAgICAvKipcbiAgICAgICAqIFdlIGRvIG5vdCB3YW50IHRvIGZvY3VzIHRoZSB0cmFwcywgc28gZ2V0IHRoZSBvdmVybGF5XG4gICAgICAgKiB3cmFwcGVyIGVsZW1lbnQgYXMgdGhlIHRyYXBzIGxpdmUgb3V0c2lkZSBvZiB0aGUgd3JhcHBlci5cbiAgICAgICAqL1xuICAgICAgY29uc3Qgb3ZlcmxheVJvb3QgPSBnZXRFbGVtZW50Um9vdChsYXN0T3ZlcmxheSk7XG4gICAgICBpZiAoIW92ZXJsYXlSb290LmNvbnRhaW5zKHRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgb3ZlcmxheVdyYXBwZXIgPSBvdmVybGF5Um9vdC5xdWVyeVNlbGVjdG9yKCcuaW9uLW92ZXJsYXktd3JhcHBlcicpO1xuICAgICAgaWYgKCFvdmVybGF5V3JhcHBlcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIElmIHRoZSB0YXJnZXQgaXMgaW5zaWRlIHRoZSB3cmFwcGVyLCBsZXQgdGhlIGJyb3dzZXJcbiAgICAgICAqIGZvY3VzIGFzIG5vcm1hbCBhbmQga2VlcCBhIGxvZyBvZiB0aGUgbGFzdCBmb2N1c2VkIGVsZW1lbnQuXG4gICAgICAgKiBBZGRpdGlvbmFsbHksIGlmIHRoZSBiYWNrZHJvcCB3YXMgdGFwcGVkIHdlIHNob3VsZCBub3RcbiAgICAgICAqIG1vdmUgZm9jdXMgYmFjayBpbnNpZGUgdGhlIHdyYXBwZXIgYXMgdGhhdCBjb3VsZCBjYXVzZVxuICAgICAgICogYW4gaW50ZXJhY3RpdmUgZWxlbWVudHMgZm9jdXMgc3RhdGUgdG8gYWN0aXZhdGUuXG4gICAgICAgKi9cbiAgICAgIGlmIChvdmVybGF5V3JhcHBlci5jb250YWlucyh0YXJnZXQpIHx8IHRhcmdldCA9PT0gb3ZlcmxheVJvb3QucXVlcnlTZWxlY3RvcignaW9uLWJhY2tkcm9wJykpIHtcbiAgICAgICAgbGFzdE92ZXJsYXkubGFzdEZvY3VzID0gdGFyZ2V0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE90aGVyd2lzZSwgd2UgbXVzdCBoYXZlIGZvY3VzZWQgb25lIG9mIHRoZSBmb2N1cyB0cmFwcy5cbiAgICAgICAgICogV2UgbmVlZCB0byB3cmFwIHRoZSBmb2N1cyB0byBlaXRoZXIgdGhlIGZpcnN0IGVsZW1lbnRcbiAgICAgICAgICogb3IgdGhlIGxhc3QgZWxlbWVudC5cbiAgICAgICAgICovXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPbmNlIHdlIGNhbGwgYGZvY3VzRmlyc3REZXNjZW5kYW50YCBhbmQgZm9jdXMgdGhlIGZpcnN0XG4gICAgICAgICAqIGRlc2NlbmRhbnQsIGFub3RoZXIgZm9jdXMgZXZlbnQgd2lsbCBmaXJlIHdoaWNoIHdpbGxcbiAgICAgICAgICogY2F1c2UgYGxhc3RPdmVybGF5Lmxhc3RGb2N1c2AgdG8gYmUgdXBkYXRlZCBiZWZvcmVcbiAgICAgICAgICogd2UgY2FuIHJ1biB0aGUgY29kZSBhZnRlciB0aGF0LiBXZSB3aWxsIGNhY2hlIHRoZSB2YWx1ZVxuICAgICAgICAgKiBoZXJlIHRvIGF2b2lkIHRoYXQuXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBsYXN0Rm9jdXMgPSBsYXN0T3ZlcmxheS5sYXN0Rm9jdXM7XG4gICAgICAgIC8vIEZvY3VzIHRoZSBmaXJzdCBlbGVtZW50IGluIHRoZSBvdmVybGF5IHdyYXBwZXJcbiAgICAgICAgZm9jdXNGaXJzdERlc2NlbmRhbnQob3ZlcmxheVdyYXBwZXIsIGxhc3RPdmVybGF5KTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIHRoZSBjYWNoZWQgbGFzdCBmb2N1c2VkIGVsZW1lbnQgaXMgdGhlXG4gICAgICAgICAqIHNhbWUgYXMgdGhlIGFjdGl2ZSBlbGVtZW50LCB0aGVuIHdlIG5lZWRcbiAgICAgICAgICogdG8gd3JhcCBmb2N1cyB0byB0aGUgbGFzdCBkZXNjZW5kYW50LiBUaGlzIGhhcHBlbnNcbiAgICAgICAgICogd2hlbiB0aGUgZmlyc3QgZGVzY2VuZGFudCBpcyBmb2N1c2VkLCBhbmQgdGhlIHVzZXJcbiAgICAgICAgICogcHJlc3NlcyBTaGlmdCArIFRhYi4gVGhlIHByZXZpb3VzIGxpbmUgd2lsbCBmb2N1c1xuICAgICAgICAgKiB0aGUgc2FtZSBkZXNjZW5kYW50IGFnYWluICh0aGUgZmlyc3Qgb25lKSwgY2F1c2luZ1xuICAgICAgICAgKiBsYXN0IGZvY3VzIHRvIGVxdWFsIHRoZSBhY3RpdmUgZWxlbWVudC5cbiAgICAgICAgICovXG4gICAgICAgIGlmIChsYXN0Rm9jdXMgPT09IGRvYy5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgZm9jdXNMYXN0RGVzY2VuZGFudChvdmVybGF5V3JhcHBlciwgbGFzdE92ZXJsYXkpO1xuICAgICAgICB9XG4gICAgICAgIGxhc3RPdmVybGF5Lmxhc3RGb2N1cyA9IGRvYy5hY3RpdmVFbGVtZW50O1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgY29uc3QgdHJhcFNoYWRvd0ZvY3VzID0gKCkgPT4ge1xuICAgIC8qKlxuICAgICAqIElmIHRoZSB0YXJnZXQgaXMgaW5zaWRlIHRoZSB3cmFwcGVyLCBsZXQgdGhlIGJyb3dzZXJcbiAgICAgKiBmb2N1cyBhcyBub3JtYWwgYW5kIGtlZXAgYSBsb2cgb2YgdGhlIGxhc3QgZm9jdXNlZCBlbGVtZW50LlxuICAgICAqL1xuICAgIGlmIChsYXN0T3ZlcmxheS5jb250YWlucyh0YXJnZXQpKSB7XG4gICAgICBsYXN0T3ZlcmxheS5sYXN0Rm9jdXMgPSB0YXJnZXQ7XG4gICAgICAvKipcbiAgICAgICAqIFRvYXN0cyBjYW4gYmUgcHJlc2VudGVkIGZyb20gYW4gb3ZlcmxheS5cbiAgICAgICAqIEhvd2V2ZXIsIGZvY3VzIHNob3VsZCBzdGlsbCBiZSByZXR1cm5lZCB0b1xuICAgICAgICogdGhlIG92ZXJsYXkgd2hlbiBjbGlja2luZyBhIHRvYXN0LiBOb3JtYWxseSxcbiAgICAgICAqIGZvY3VzIHdvdWxkIGJlIHJldHVybmVkIHRvIHRoZSBsYXN0IGZvY3VzYWJsZVxuICAgICAgICogZGVzY2VuZGFudCBpbiB0aGUgb3ZlcmxheSB3aGljaCBtYXkgbm90IGFsd2F5cyBiZVxuICAgICAgICogdGhlIGJ1dHRvbiB0aGF0IHRoZSB0b2FzdCB3YXMgcHJlc2VudGVkIGZyb20uIEluIHRoaXMgY2FzZSxcbiAgICAgICAqIHRoZSBmb2N1cyBtYXkgYmUgcmV0dXJuZWQgdG8gYW4gdW5leHBlY3RlZCBlbGVtZW50LlxuICAgICAgICogVG8gYWNjb3VudCBmb3IgdGhpcywgd2UgbWFrZSBzdXJlIHRvIHJldHVybiBmb2N1cyB0byB0aGVcbiAgICAgICAqIGxhc3QgZm9jdXNlZCBlbGVtZW50IGluIHRoZSBvdmVybGF5IGlmIGZvY3VzIGlzXG4gICAgICAgKiBtb3ZlZCB0byB0aGUgdG9hc3QuXG4gICAgICAgKi9cbiAgICB9IGVsc2UgaWYgKHRhcmdldC50YWdOYW1lID09PSAnSU9OLVRPQVNUJykge1xuICAgICAgZm9jdXNFbGVtZW50SW5PdmVybGF5KGxhc3RPdmVybGF5Lmxhc3RGb2N1cywgbGFzdE92ZXJsYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvKipcbiAgICAgICAqIE90aGVyd2lzZSwgd2UgYXJlIGFib3V0IHRvIGhhdmUgZm9jdXNcbiAgICAgICAqIGdvIG91dCBvZiB0aGUgb3ZlcmxheS4gV2UgbmVlZCB0byB3cmFwXG4gICAgICAgKiB0aGUgZm9jdXMgdG8gZWl0aGVyIHRoZSBmaXJzdCBlbGVtZW50XG4gICAgICAgKiBvciB0aGUgbGFzdCBlbGVtZW50LlxuICAgICAgICovXG4gICAgICAvKipcbiAgICAgICAqIE9uY2Ugd2UgY2FsbCBgZm9jdXNGaXJzdERlc2NlbmRhbnRgIGFuZCBmb2N1cyB0aGUgZmlyc3RcbiAgICAgICAqIGRlc2NlbmRhbnQsIGFub3RoZXIgZm9jdXMgZXZlbnQgd2lsbCBmaXJlIHdoaWNoIHdpbGxcbiAgICAgICAqIGNhdXNlIGBsYXN0T3ZlcmxheS5sYXN0Rm9jdXNgIHRvIGJlIHVwZGF0ZWQgYmVmb3JlXG4gICAgICAgKiB3ZSBjYW4gcnVuIHRoZSBjb2RlIGFmdGVyIHRoYXQuIFdlIHdpbGwgY2FjaGUgdGhlIHZhbHVlXG4gICAgICAgKiBoZXJlIHRvIGF2b2lkIHRoYXQuXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IGxhc3RGb2N1cyA9IGxhc3RPdmVybGF5Lmxhc3RGb2N1cztcbiAgICAgIC8vIEZvY3VzIHRoZSBmaXJzdCBlbGVtZW50IGluIHRoZSBvdmVybGF5IHdyYXBwZXJcbiAgICAgIGZvY3VzRmlyc3REZXNjZW5kYW50KGxhc3RPdmVybGF5KTtcbiAgICAgIC8qKlxuICAgICAgICogSWYgdGhlIGNhY2hlZCBsYXN0IGZvY3VzZWQgZWxlbWVudCBpcyB0aGVcbiAgICAgICAqIHNhbWUgYXMgdGhlIGFjdGl2ZSBlbGVtZW50LCB0aGVuIHdlIG5lZWRcbiAgICAgICAqIHRvIHdyYXAgZm9jdXMgdG8gdGhlIGxhc3QgZGVzY2VuZGFudC4gVGhpcyBoYXBwZW5zXG4gICAgICAgKiB3aGVuIHRoZSBmaXJzdCBkZXNjZW5kYW50IGlzIGZvY3VzZWQsIGFuZCB0aGUgdXNlclxuICAgICAgICogcHJlc3NlcyBTaGlmdCArIFRhYi4gVGhlIHByZXZpb3VzIGxpbmUgd2lsbCBmb2N1c1xuICAgICAgICogdGhlIHNhbWUgZGVzY2VuZGFudCBhZ2FpbiAodGhlIGZpcnN0IG9uZSksIGNhdXNpbmdcbiAgICAgICAqIGxhc3QgZm9jdXMgdG8gZXF1YWwgdGhlIGFjdGl2ZSBlbGVtZW50LlxuICAgICAgICovXG4gICAgICBpZiAobGFzdEZvY3VzID09PSBkb2MuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICBmb2N1c0xhc3REZXNjZW5kYW50KGxhc3RPdmVybGF5KTtcbiAgICAgIH1cbiAgICAgIGxhc3RPdmVybGF5Lmxhc3RGb2N1cyA9IGRvYy5hY3RpdmVFbGVtZW50O1xuICAgIH1cbiAgfTtcbiAgaWYgKGxhc3RPdmVybGF5LnNoYWRvd1Jvb3QpIHtcbiAgICB0cmFwU2hhZG93Rm9jdXMoKTtcbiAgfSBlbHNlIHtcbiAgICB0cmFwU2NvcGVkRm9jdXMoKTtcbiAgfVxufTtcbmNvbnN0IGNvbm5lY3RMaXN0ZW5lcnMgPSBkb2MgPT4ge1xuICBpZiAobGFzdE92ZXJsYXlJbmRleCA9PT0gMCkge1xuICAgIGxhc3RPdmVybGF5SW5kZXggPSAxO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGV2ID0+IHtcbiAgICAgIHRyYXBLZXlib2FyZEZvY3VzKGV2LCBkb2MpO1xuICAgIH0sIHRydWUpO1xuICAgIC8vIGhhbmRsZSBiYWNrLWJ1dHRvbiBjbGlja1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdpb25CYWNrQnV0dG9uJywgZXYgPT4ge1xuICAgICAgY29uc3QgbGFzdE92ZXJsYXkgPSBnZXRQcmVzZW50ZWRPdmVybGF5KGRvYyk7XG4gICAgICBpZiAobGFzdE92ZXJsYXkgPT09IG51bGwgfHwgbGFzdE92ZXJsYXkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGxhc3RPdmVybGF5LmJhY2tkcm9wRGlzbWlzcykge1xuICAgICAgICBldi5kZXRhaWwucmVnaXN0ZXIoT1ZFUkxBWV9CQUNLX0JVVFRPTl9QUklPUklUWSwgKCkgPT4ge1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIERvIG5vdCByZXR1cm4gdGhpcyBwcm9taXNlIG90aGVyd2lzZVxuICAgICAgICAgICAqIHRoZSBoYXJkd2FyZSBiYWNrIGJ1dHRvbiB1dGlsaXR5IHdpbGxcbiAgICAgICAgICAgKiBiZSBibG9ja2VkIHVudGlsIHRoZSBvdmVybGF5IGRpc21pc3Nlcy5cbiAgICAgICAgICAgKiBUaGlzIGlzIGltcG9ydGFudCBmb3IgYSBtb2RhbCB3aXRoIGNhbkRpc21pc3MuXG4gICAgICAgICAgICogSWYgdGhlIGFwcGxpY2F0aW9uIHByZXNlbnRzIGEgY29uZmlybWF0aW9uIGFsZXJ0XG4gICAgICAgICAgICogaW4gdGhlIFwiY2FuRGlzbWlzc1wiIGNhbGxiYWNrLCB0aGVuIGl0IHdpbGwgYmUgaW1wb3NzaWJsZVxuICAgICAgICAgICAqIHRvIHVzZSB0aGUgaGFyZHdhcmUgYmFjayBidXR0b24gdG8gZGlzbWlzcyB0aGUgYWxlcnRcbiAgICAgICAgICAgKiBkaWFsb2cgYmVjYXVzZSB0aGUgaGFyZHdhcmUgYmFjayBidXR0b24gdXRpbGl0eVxuICAgICAgICAgICAqIGlzIGJsb2NrZWQgb24gd2FpdGluZyBmb3IgdGhlIG1vZGFsIHRvIGRpc21pc3MuXG4gICAgICAgICAgICovXG4gICAgICAgICAgbGFzdE92ZXJsYXkuZGlzbWlzcyh1bmRlZmluZWQsIEJBQ0tEUk9QKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogSGFuZGxlIEVTQyB0byBjbG9zZSBvdmVybGF5LlxuICAgICAqIENsb3NlV2F0Y2hlciBhbHNvIGhhbmRsZXMgcHJlc3NpbmcgdGhlIEVzY1xuICAgICAqIGtleSwgc28gaWYgYSBicm93c2VyIHN1cHBvcnRzIENsb3NlV2F0Y2hlciB0aGVuXG4gICAgICogdGhpcyBiZWhhdmlvciB3aWxsIGJlIGhhbmRsZWQgdmlhIHRoZSBpb25CYWNrQnV0dG9uXG4gICAgICogZXZlbnQuXG4gICAgICovXG4gICAgaWYgKCFzaG91bGRVc2VDbG9zZVdhdGNoZXIoKSkge1xuICAgICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBldiA9PiB7XG4gICAgICAgIGlmIChldi5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgY29uc3QgbGFzdE92ZXJsYXkgPSBnZXRQcmVzZW50ZWRPdmVybGF5KGRvYyk7XG4gICAgICAgICAgaWYgKGxhc3RPdmVybGF5ID09PSBudWxsIHx8IGxhc3RPdmVybGF5ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBsYXN0T3ZlcmxheS5iYWNrZHJvcERpc21pc3MpIHtcbiAgICAgICAgICAgIGxhc3RPdmVybGF5LmRpc21pc3ModW5kZWZpbmVkLCBCQUNLRFJPUCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn07XG5jb25zdCBkaXNtaXNzT3ZlcmxheSA9IChkb2MsIGRhdGEsIHJvbGUsIG92ZXJsYXlUYWcsIGlkKSA9PiB7XG4gIGNvbnN0IG92ZXJsYXkgPSBnZXRQcmVzZW50ZWRPdmVybGF5KGRvYywgb3ZlcmxheVRhZywgaWQpO1xuICBpZiAoIW92ZXJsYXkpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ292ZXJsYXkgZG9lcyBub3QgZXhpc3QnKTtcbiAgfVxuICByZXR1cm4gb3ZlcmxheS5kaXNtaXNzKGRhdGEsIHJvbGUpO1xufTtcbi8qKlxuICogUmV0dXJucyBhIGxpc3Qgb2YgYWxsIG92ZXJsYXlzIGluIHRoZSBET00gZXZlbiBpZiB0aGV5IGFyZSBub3QgcHJlc2VudGVkLlxuICovXG5jb25zdCBnZXRPdmVybGF5cyA9IChkb2MsIHNlbGVjdG9yKSA9PiB7XG4gIGlmIChzZWxlY3RvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgc2VsZWN0b3IgPSAnaW9uLWFsZXJ0LGlvbi1hY3Rpb24tc2hlZXQsaW9uLWxvYWRpbmcsaW9uLW1vZGFsLGlvbi1waWNrZXItbGVnYWN5LGlvbi1wb3BvdmVyLGlvbi10b2FzdCc7XG4gIH1cbiAgcmV0dXJuIEFycmF5LmZyb20oZG9jLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKS5maWx0ZXIoYyA9PiBjLm92ZXJsYXlJbmRleCA+IDApO1xufTtcbi8qKlxuICogUmV0dXJucyBhIGxpc3Qgb2YgYWxsIHByZXNlbnRlZCBvdmVybGF5cy5cbiAqIElubGluZSBvdmVybGF5cyBjYW4gZXhpc3QgaW4gdGhlIERPTSBidXQgbm90IGJlIHByZXNlbnRlZCxcbiAqIHNvIHRoZXJlIGFyZSB0aW1lcyB3aGVuIHdlIHdhbnQgdG8gZXhjbHVkZSB0aG9zZS5cbiAqIEBwYXJhbSBkb2MgVGhlIGRvY3VtZW50IHRvIGZpbmQgdGhlIGVsZW1lbnQgd2l0aGluLlxuICogQHBhcmFtIG92ZXJsYXlUYWcgVGhlIHNlbGVjdG9yIGZvciB0aGUgb3ZlcmxheSwgZGVmYXVsdHMgdG8gSW9uaWMgb3ZlcmxheSBjb21wb25lbnRzLlxuICovXG5jb25zdCBnZXRQcmVzZW50ZWRPdmVybGF5cyA9IChkb2MsIG92ZXJsYXlUYWcpID0+IHtcbiAgcmV0dXJuIGdldE92ZXJsYXlzKGRvYywgb3ZlcmxheVRhZykuZmlsdGVyKG8gPT4gIWlzT3ZlcmxheUhpZGRlbihvKSk7XG59O1xuLyoqXG4gKiBSZXR1cm5zIGEgcHJlc2VudGVkIG92ZXJsYXkgZWxlbWVudC5cbiAqIEBwYXJhbSBkb2MgVGhlIGRvY3VtZW50IHRvIGZpbmQgdGhlIGVsZW1lbnQgd2l0aGluLlxuICogQHBhcmFtIG92ZXJsYXlUYWcgVGhlIHNlbGVjdG9yIGZvciB0aGUgb3ZlcmxheSwgZGVmYXVsdHMgdG8gSW9uaWMgb3ZlcmxheSBjb21wb25lbnRzLlxuICogQHBhcmFtIGlkIFRoZSB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIG92ZXJsYXkgaW5zdGFuY2UuXG4gKiBAcmV0dXJucyBUaGUgb3ZlcmxheSBlbGVtZW50IG9yIGB1bmRlZmluZWRgIGlmIG5vIG92ZXJsYXkgZWxlbWVudCBpcyBmb3VuZC5cbiAqL1xuY29uc3QgZ2V0UHJlc2VudGVkT3ZlcmxheSA9IChkb2MsIG92ZXJsYXlUYWcsIGlkKSA9PiB7XG4gIGNvbnN0IG92ZXJsYXlzID0gZ2V0UHJlc2VudGVkT3ZlcmxheXMoZG9jLCBvdmVybGF5VGFnKTtcbiAgcmV0dXJuIGlkID09PSB1bmRlZmluZWQgPyBvdmVybGF5c1tvdmVybGF5cy5sZW5ndGggLSAxXSA6IG92ZXJsYXlzLmZpbmQobyA9PiBvLmlkID09PSBpZCk7XG59O1xuLyoqXG4gKiBXaGVuIGFuIG92ZXJsYXkgaXMgcHJlc2VudGVkLCB0aGUgbWFpblxuICogZm9jdXMgaXMgdGhlIG92ZXJsYXkgbm90IHRoZSBwYWdlIGNvbnRlbnQuXG4gKiBXZSBuZWVkIHRvIHJlbW92ZSB0aGUgcGFnZSBjb250ZW50IGZyb20gdGhlXG4gKiBhY2Nlc3NpYmlsaXR5IHRyZWUgb3RoZXJ3aXNlIHdoZW5cbiAqIHVzZXJzIHVzZSBcInJlYWQgc2NyZWVuIGZyb20gdG9wXCIgZ2VzdHVyZXMgd2l0aFxuICogVGFsa0JhY2sgYW5kIFZvaWNlT3ZlciwgdGhlIHNjcmVlbiByZWFkZXIgd2lsbCBiZWdpblxuICogdG8gcmVhZCB0aGUgY29udGVudCB1bmRlcm5lYXRoIHRoZSBvdmVybGF5LlxuICpcbiAqIFdlIG5lZWQgYSBjb250YWluZXIgd2hlcmUgYWxsIHBhZ2UgY29tcG9uZW50c1xuICogZXhpc3QgdGhhdCBpcyBzZXBhcmF0ZSBmcm9tIHdoZXJlIHRoZSBvdmVybGF5c1xuICogYXJlIGFkZGVkIGluIHRoZSBET00uIEZvciBtb3N0IGFwcHMsIHRoaXMgZWxlbWVudFxuICogaXMgdGhlIHRvcCBtb3N0IGlvbi1yb3V0ZXItb3V0bGV0LiBJbiB0aGUgZXZlbnRcbiAqIHRoYXQgZGV2cyBhcmUgbm90IHVzaW5nIGEgcm91dGVyLFxuICogdGhleSB3aWxsIG5lZWQgdG8gYWRkIHRoZSBcImlvbi12aWV3LWNvbnRhaW5lci1yb290XCJcbiAqIGlkIHRvIHRoZSBlbGVtZW50IHRoYXQgY29udGFpbnMgYWxsIG9mIHRoZWlyIHZpZXdzLlxuICpcbiAqIFRPRE86IElmIEZyYW1ld29yayBzdXBwb3J0cyBoYXZpbmcgbXVsdGlwbGUgdG9wXG4gKiBsZXZlbCByb3V0ZXIgb3V0bGV0cyB3ZSB3b3VsZCBuZWVkIHRvIHVwZGF0ZSB0aGlzLlxuICogRXhhbXBsZTogT25lIG91dGxldCBmb3Igc2lkZSBtZW51IGFuZCBvbmUgb3V0bGV0XG4gKiBmb3IgbWFpbiBjb250ZW50LlxuICovXG5jb25zdCBzZXRSb290QXJpYUhpZGRlbiA9IChoaWRkZW4gPSBmYWxzZSkgPT4ge1xuICBjb25zdCByb290ID0gZ2V0QXBwUm9vdChkb2N1bWVudCk7XG4gIGNvbnN0IHZpZXdDb250YWluZXIgPSByb290LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1yb3V0ZXItb3V0bGV0LCBpb24tbmF2LCAjaW9uLXZpZXctY29udGFpbmVyLXJvb3QnKTtcbiAgaWYgKCF2aWV3Q29udGFpbmVyKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChoaWRkZW4pIHtcbiAgICB2aWV3Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICB9IGVsc2Uge1xuICAgIHZpZXdDb250YWluZXIucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuICB9XG59O1xuY29uc3QgcHJlc2VudCA9IGFzeW5jIChvdmVybGF5LCBuYW1lLCBpb3NFbnRlckFuaW1hdGlvbiwgbWRFbnRlckFuaW1hdGlvbiwgb3B0cykgPT4ge1xuICB2YXIgX2EsIF9iO1xuICBpZiAob3ZlcmxheS5wcmVzZW50ZWQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLyoqXG4gICAqIER1ZSB0byBhY2Nlc3NpYmlsaXR5IGd1aWRlbGluZXMsIHRvYXN0cyBkbyBub3QgaGF2ZVxuICAgKiBmb2N1cyB0cmFwcy5cbiAgICpcbiAgICogQWxsIG90aGVyIG92ZXJsYXlzIHNob3VsZCBoYXZlIGZvY3VzIHRyYXBzIHRvIHByZXZlbnRcbiAgICogdGhlIGtleWJvYXJkIGZvY3VzIGZyb20gbGVhdmluZyB0aGUgb3ZlcmxheS5cbiAgICovXG4gIGlmIChvdmVybGF5LmVsLnRhZ05hbWUgIT09ICdJT04tVE9BU1QnKSB7XG4gICAgc2V0Um9vdEFyaWFIaWRkZW4odHJ1ZSk7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKEJBQ0tEUk9QX05PX1NDUk9MTCk7XG4gIH1cbiAgaGlkZVVuZGVybHlpbmdPdmVybGF5c0Zyb21TY3JlZW5SZWFkZXJzKG92ZXJsYXkuZWwpO1xuICBoaWRlQW5pbWF0aW5nT3ZlcmxheUZyb21TY3JlZW5SZWFkZXJzKG92ZXJsYXkuZWwpO1xuICBvdmVybGF5LnByZXNlbnRlZCA9IHRydWU7XG4gIG92ZXJsYXkud2lsbFByZXNlbnQuZW1pdCgpO1xuICAoX2EgPSBvdmVybGF5LndpbGxQcmVzZW50U2hvcnRoYW5kKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZW1pdCgpO1xuICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZShvdmVybGF5KTtcbiAgLy8gZ2V0IHRoZSB1c2VyJ3MgYW5pbWF0aW9uIGZuIGlmIG9uZSB3YXMgcHJvdmlkZWRcbiAgY29uc3QgYW5pbWF0aW9uQnVpbGRlciA9IG92ZXJsYXkuZW50ZXJBbmltYXRpb24gPyBvdmVybGF5LmVudGVyQW5pbWF0aW9uIDogY29uZmlnLmdldChuYW1lLCBtb2RlID09PSAnaW9zJyA/IGlvc0VudGVyQW5pbWF0aW9uIDogbWRFbnRlckFuaW1hdGlvbik7XG4gIGNvbnN0IGNvbXBsZXRlZCA9IGF3YWl0IG92ZXJsYXlBbmltYXRpb24ob3ZlcmxheSwgYW5pbWF0aW9uQnVpbGRlciwgb3ZlcmxheS5lbCwgb3B0cyk7XG4gIGlmIChjb21wbGV0ZWQpIHtcbiAgICBvdmVybGF5LmRpZFByZXNlbnQuZW1pdCgpO1xuICAgIChfYiA9IG92ZXJsYXkuZGlkUHJlc2VudFNob3J0aGFuZCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmVtaXQoKTtcbiAgfVxuICAvKipcbiAgICogV2hlbiBhbiBvdmVybGF5IHRoYXQgc3RlYWxzIGZvY3VzXG4gICAqIGlzIGRpc21pc3NlZCwgZm9jdXMgc2hvdWxkIGJlIHJldHVybmVkXG4gICAqIHRvIHRoZSBlbGVtZW50IHRoYXQgd2FzIGZvY3VzZWRcbiAgICogcHJpb3IgdG8gdGhlIG92ZXJsYXkgb3BlbmluZy4gVG9hc3RcbiAgICogZG9lcyBub3Qgc3RlYWwgZm9jdXMgYW5kIGlzIGV4Y2x1ZGVkXG4gICAqIGZyb20gcmV0dXJuaW5nIGZvY3VzIGFzIGEgcmVzdWx0LlxuICAgKi9cbiAgaWYgKG92ZXJsYXkuZWwudGFnTmFtZSAhPT0gJ0lPTi1UT0FTVCcpIHtcbiAgICByZXN0b3JlRWxlbWVudEZvY3VzKG92ZXJsYXkuZWwpO1xuICB9XG4gIC8qKlxuICAgKiBJZiB0aGUgZm9jdXNlZCBlbGVtZW50IGlzIGFscmVhZHlcbiAgICogaW5zaWRlIHRoZSBvdmVybGF5IGNvbXBvbmVudCB0aGVuXG4gICAqIGZvY3VzIHNob3VsZCBub3QgYmUgbW92ZWQgZnJvbSB0aGF0XG4gICAqIHRvIHRoZSBvdmVybGF5IGNvbnRhaW5lci5cbiAgICovXG4gIGlmIChvdmVybGF5LmtleWJvYXJkQ2xvc2UgJiYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IG51bGwgfHwgIW92ZXJsYXkuZWwuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpKSB7XG4gICAgb3ZlcmxheS5lbC5mb2N1cygpO1xuICB9XG4gIC8qKlxuICAgKiBJZiB0aGlzIG92ZXJsYXkgd2FzIHByZXZpb3VzbHkgZGlzbWlzc2VkIHdpdGhvdXQgYmVpbmdcbiAgICogdGhlIHRvcG1vc3Qgb25lIChzdWNoIGFzIGJ5IG1hbnVhbGx5IGNhbGxpbmcgZGlzbWlzcygpKSxcbiAgICogaXQgd291bGQgc3RpbGwgaGF2ZSBhcmlhLWhpZGRlbiBvbiBiZWluZyBwcmVzZW50ZWQgYWdhaW4uXG4gICAqIFJlbW92aW5nIGl0IGhlcmUgZW5zdXJlcyB0aGUgb3ZlcmxheSBpcyB2aXNpYmxlIHRvIHNjcmVlblxuICAgKiByZWFkZXJzLlxuICAgKlxuICAgKiBJZiB0aGlzIG92ZXJsYXkgd2FzIGJlaW5nIHByZXNlbnRlZCwgdGhlbiBpdCB3YXMgaGlkZGVuXG4gICAqIGZyb20gc2NyZWVuIHJlYWRlcnMgZHVyaW5nIHRoZSBhbmltYXRpb24uIE5vdyB0aGF0IHRoZVxuICAgKiBhbmltYXRpb24gaXMgY29tcGxldGUsIHdlIGNhbiByZXZlYWwgdGhlIG92ZXJsYXkgdG9cbiAgICogc2NyZWVuIHJlYWRlcnMuXG4gICAqL1xuICBvdmVybGF5LmVsLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbn07XG4vKipcbiAqIFdoZW4gYW4gb3ZlcmxheSBjb21wb25lbnQgaXMgZGlzbWlzc2VkLFxuICogZm9jdXMgc2hvdWxkIGJlIHJldHVybmVkIHRvIHRoZSBlbGVtZW50XG4gKiB0aGF0IHByZXNlbnRlZCB0aGUgb3ZlcmxheS4gT3RoZXJ3aXNlXG4gKiBmb2N1cyB3aWxsIGJlIHNldCBvbiB0aGUgYm9keSB3aGljaFxuICogbWVhbnMgdGhhdCBwZW9wbGUgdXNpbmcgc2NyZWVuIHJlYWRlcnNcbiAqIG9yIHRhYmJpbmcgd2lsbCBuZWVkIHRvIHJlLW5hdmlnYXRlXG4gKiB0byB3aGVyZSB0aGV5IHdlcmUgYmVmb3JlIHRoZXlcbiAqIG9wZW5lZCB0aGUgb3ZlcmxheS5cbiAqL1xuY29uc3QgcmVzdG9yZUVsZW1lbnRGb2N1cyA9IGFzeW5jIG92ZXJsYXlFbCA9PiB7XG4gIGxldCBwcmV2aW91c0VsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICBpZiAoIXByZXZpb3VzRWxlbWVudCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBzaGFkb3dSb290ID0gcHJldmlvdXNFbGVtZW50ID09PSBudWxsIHx8IHByZXZpb3VzRWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJldmlvdXNFbGVtZW50LnNoYWRvd1Jvb3Q7XG4gIGlmIChzaGFkb3dSb290KSB7XG4gICAgLy8gSWYgdGhlcmUgYXJlIG5vIGlubmVyIGZvY3VzYWJsZSBlbGVtZW50cywganVzdCBmb2N1cyB0aGUgaG9zdCBlbGVtZW50LlxuICAgIHByZXZpb3VzRWxlbWVudCA9IHNoYWRvd1Jvb3QucXVlcnlTZWxlY3Rvcihmb2N1c2FibGVRdWVyeVN0cmluZykgfHwgcHJldmlvdXNFbGVtZW50O1xuICB9XG4gIGF3YWl0IG92ZXJsYXlFbC5vbkRpZERpc21pc3MoKTtcbiAgLyoqXG4gICAqIEFmdGVyIG9uRGlkRGlzbWlzcywgdGhlIG92ZXJsYXkgbG9zZXMgZm9jdXNcbiAgICogYmVjYXVzZSBpdCBpcyByZW1vdmVkIGZyb20gdGhlIGRvY3VtZW50XG4gICAqXG4gICAqID4gQW4gZWxlbWVudCB3aWxsIGFsc28gbG9zZSBmb2N1cyBbLi4uXVxuICAgKiA+IGlmIHRoZSBlbGVtZW50IGlzIHJlbW92ZWQgZnJvbSB0aGUgZG9jdW1lbnQpXG4gICAqXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FbGVtZW50L2JsdXJfZXZlbnRcbiAgICpcbiAgICogQWRkaXRpb25hbGx5LCBgZG9jdW1lbnQuYWN0aXZlRWxlbWVudGAgcmV0dXJuczpcbiAgICpcbiAgICogPiBUaGUgRWxlbWVudCB3aGljaCBjdXJyZW50bHkgaGFzIGZvY3VzLFxuICAgKiA+IGA8Ym9keT5gIG9yIG51bGwgaWYgdGhlcmUgaXNcbiAgICogPiBubyBmb2N1c2VkIGVsZW1lbnQuXG4gICAqXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Eb2N1bWVudC9hY3RpdmVFbGVtZW50I3ZhbHVlXG4gICAqXG4gICAqIEhvd2V2ZXIsIGlmIHRoZSB1c2VyIGhhcyBhbHJlYWR5IGZvY3VzZWRcbiAgICogYW4gZWxlbWVudCBzb21ldGltZSBiZXR3ZWVuIG9uV2lsbERpc21pc3NcbiAgICogYW5kIG9uRGlkRGlzbWlzcyAoZm9yIGV4YW1wbGUsIGZvY3VzaW5nIGFcbiAgICogdGV4dCBib3ggYWZ0ZXIgdGFwcGluZyBhIGJ1dHRvbiBpbiBhblxuICAgKiBhY3Rpb24gc2hlZXQpIHRoZW4gZG9uJ3QgcmVzdG9yZSBmb2N1cyB0b1xuICAgKiBwcmV2aW91cyBlbGVtZW50XG4gICAqL1xuICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gbnVsbCB8fCBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgcHJldmlvdXNFbGVtZW50LmZvY3VzKCk7XG4gIH1cbn07XG5jb25zdCBkaXNtaXNzID0gYXN5bmMgKG92ZXJsYXksIGRhdGEsIHJvbGUsIG5hbWUsIGlvc0xlYXZlQW5pbWF0aW9uLCBtZExlYXZlQW5pbWF0aW9uLCBvcHRzKSA9PiB7XG4gIHZhciBfYSwgX2I7XG4gIGlmICghb3ZlcmxheS5wcmVzZW50ZWQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgcHJlc2VudGVkT3ZlcmxheXMgPSBkb2MgIT09IHVuZGVmaW5lZCA/IGdldFByZXNlbnRlZE92ZXJsYXlzKGRvYykgOiBbXTtcbiAgLyoqXG4gICAqIEZvciBhY2Nlc3NpYmlsaXR5LCB0b2FzdHMgbGFjayBmb2N1cyB0cmFwcyBhbmQgZG9uJ3QgcmVjZWl2ZVxuICAgKiBgYXJpYS1oaWRkZW5gIG9uIHRoZSByb290IGVsZW1lbnQgd2hlbiBwcmVzZW50ZWQuXG4gICAqXG4gICAqIEFsbCBvdGhlciBvdmVybGF5cyB1c2UgZm9jdXMgdHJhcHMgdG8ga2VlcCBrZXlib2FyZCBmb2N1c1xuICAgKiB3aXRoaW4gdGhlIG92ZXJsYXksIHNldHRpbmcgYGFyaWEtaGlkZGVuYCBvbiB0aGUgcm9vdCBlbGVtZW50XG4gICAqIHRvIGVuaGFuY2UgYWNjZXNzaWJpbGl0eS5cbiAgICpcbiAgICogVGhlcmVmb3JlLCB3ZSBtdXN0IHJlbW92ZSBgYXJpYS1oaWRkZW5gIGZyb20gdGhlIHJvb3QgZWxlbWVudFxuICAgKiB3aGVuIHRoZSBsYXN0IG5vbi10b2FzdCBvdmVybGF5IGlzIGRpc21pc3NlZC5cbiAgICovXG4gIGNvbnN0IG92ZXJsYXlzTm90VG9hc3QgPSBwcmVzZW50ZWRPdmVybGF5cy5maWx0ZXIobyA9PiBvLnRhZ05hbWUgIT09ICdJT04tVE9BU1QnKTtcbiAgY29uc3QgbGFzdE92ZXJsYXlOb3RUb2FzdCA9IG92ZXJsYXlzTm90VG9hc3QubGVuZ3RoID09PSAxICYmIG92ZXJsYXlzTm90VG9hc3RbMF0uaWQgPT09IG92ZXJsYXkuZWwuaWQ7XG4gIC8qKlxuICAgKiBJZiB0aGlzIGlzIHRoZSBsYXN0IHZpc2libGUgb3ZlcmxheSB0aGF0IGlzIG5vdCBhIHRvYXN0XG4gICAqIHRoZW4gd2Ugd2FudCB0byByZS1hZGQgdGhlIHJvb3QgdG8gdGhlIGFjY2Vzc2liaWxpdHkgdHJlZS5cbiAgICovXG4gIGlmIChsYXN0T3ZlcmxheU5vdFRvYXN0KSB7XG4gICAgc2V0Um9vdEFyaWFIaWRkZW4oZmFsc2UpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShCQUNLRFJPUF9OT19TQ1JPTEwpO1xuICB9XG4gIG92ZXJsYXkucHJlc2VudGVkID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgLyoqXG4gICAgICogVGhlcmUgaXMgbm8gbmVlZCB0byBzaG93IHRoZSBvdmVybGF5IHRvIHNjcmVlbiByZWFkZXJzIGR1cmluZ1xuICAgICAqIHRoZSBkaXNtaXNzIGFuaW1hdGlvbi4gVGhpcyBpcyBiZWNhdXNlIHRoZSBvdmVybGF5IHdpbGwgYmUgcmVtb3ZlZFxuICAgICAqIGZyb20gdGhlIERPTSBhZnRlciB0aGUgYW5pbWF0aW9uIGlzIGNvbXBsZXRlLlxuICAgICAqL1xuICAgIGhpZGVBbmltYXRpbmdPdmVybGF5RnJvbVNjcmVlblJlYWRlcnMob3ZlcmxheS5lbCk7XG4gICAgLy8gT3ZlcmxheSBjb250ZW50cyBzaG91bGQgbm90IGJlIGNsaWNrYWJsZSBkdXJpbmcgZGlzbWlzc1xuICAgIG92ZXJsYXkuZWwuc3R5bGUuc2V0UHJvcGVydHkoJ3BvaW50ZXItZXZlbnRzJywgJ25vbmUnKTtcbiAgICBvdmVybGF5LndpbGxEaXNtaXNzLmVtaXQoe1xuICAgICAgZGF0YSxcbiAgICAgIHJvbGVcbiAgICB9KTtcbiAgICAoX2EgPSBvdmVybGF5LndpbGxEaXNtaXNzU2hvcnRoYW5kKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZW1pdCh7XG4gICAgICBkYXRhLFxuICAgICAgcm9sZVxuICAgIH0pO1xuICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKG92ZXJsYXkpO1xuICAgIGNvbnN0IGFuaW1hdGlvbkJ1aWxkZXIgPSBvdmVybGF5LmxlYXZlQW5pbWF0aW9uID8gb3ZlcmxheS5sZWF2ZUFuaW1hdGlvbiA6IGNvbmZpZy5nZXQobmFtZSwgbW9kZSA9PT0gJ2lvcycgPyBpb3NMZWF2ZUFuaW1hdGlvbiA6IG1kTGVhdmVBbmltYXRpb24pO1xuICAgIC8vIElmIGRpc21pc3NlZCB2aWEgZ2VzdHVyZSwgbm8gbmVlZCB0byBwbGF5IGxlYXZpbmcgYW5pbWF0aW9uIGFnYWluXG4gICAgaWYgKHJvbGUgIT09IEdFU1RVUkUpIHtcbiAgICAgIGF3YWl0IG92ZXJsYXlBbmltYXRpb24ob3ZlcmxheSwgYW5pbWF0aW9uQnVpbGRlciwgb3ZlcmxheS5lbCwgb3B0cyk7XG4gICAgfVxuICAgIG92ZXJsYXkuZGlkRGlzbWlzcy5lbWl0KHtcbiAgICAgIGRhdGEsXG4gICAgICByb2xlXG4gICAgfSk7XG4gICAgKF9iID0gb3ZlcmxheS5kaWREaXNtaXNzU2hvcnRoYW5kKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZW1pdCh7XG4gICAgICBkYXRhLFxuICAgICAgcm9sZVxuICAgIH0pO1xuICAgIC8vIEdldCBhIHJlZmVyZW5jZSB0byBhbGwgYW5pbWF0aW9ucyBjdXJyZW50bHkgYXNzaWduZWQgdG8gdGhpcyBvdmVybGF5XG4gICAgLy8gVGhlbiB0ZWFyIHRoZW0gZG93biB0byByZXR1cm4gdGhlIG92ZXJsYXkgdG8gaXRzIGluaXRpYWwgdmlzdWFsIHN0YXRlXG4gICAgY29uc3QgYW5pbWF0aW9ucyA9IGFjdGl2ZUFuaW1hdGlvbnMuZ2V0KG92ZXJsYXkpIHx8IFtdO1xuICAgIGFuaW1hdGlvbnMuZm9yRWFjaChhbmkgPT4gYW5pLmRlc3Ryb3koKSk7XG4gICAgYWN0aXZlQW5pbWF0aW9ucy5kZWxldGUob3ZlcmxheSk7XG4gICAgLyoqXG4gICAgICogTWFrZSBvdmVybGF5IGhpZGRlbiBhZ2FpbiBpbiBjYXNlIGl0IGlzIGJlaW5nIHJldXNlZC5cbiAgICAgKiBXZSBjYW4gc2FmZWx5IHJlbW92ZSBwb2ludGVyLWV2ZW50czogbm9uZSBhc1xuICAgICAqIG92ZXJsYXktaGlkZGVuIHdpbGwgc2V0IGRpc3BsYXk6IG5vbmUuXG4gICAgICovXG4gICAgb3ZlcmxheS5lbC5jbGFzc0xpc3QuYWRkKCdvdmVybGF5LWhpZGRlbicpO1xuICAgIG92ZXJsYXkuZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BvaW50ZXItZXZlbnRzJyk7XG4gICAgLyoqXG4gICAgICogQ2xlYXIgYW55IGZvY3VzIHRyYXBwaW5nIHJlZmVyZW5jZXNcbiAgICAgKiB3aGVuIHRoZSBvdmVybGF5IGlzIGRpc21pc3NlZC5cbiAgICAgKi9cbiAgICBpZiAob3ZlcmxheS5lbC5sYXN0Rm9jdXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgb3ZlcmxheS5lbC5sYXN0Rm9jdXMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBwcmludElvbkVycm9yKGBbJHtvdmVybGF5LmVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKX1dIC0gYCwgZXJyKTtcbiAgfVxuICBvdmVybGF5LmVsLnJlbW92ZSgpO1xuICByZXZlYWxPdmVybGF5c1RvU2NyZWVuUmVhZGVycygpO1xuICByZXR1cm4gdHJ1ZTtcbn07XG5jb25zdCBnZXRBcHBSb290ID0gZG9jID0+IHtcbiAgcmV0dXJuIGRvYy5xdWVyeVNlbGVjdG9yKCdpb24tYXBwJykgfHwgZG9jLmJvZHk7XG59O1xuY29uc3Qgb3ZlcmxheUFuaW1hdGlvbiA9IGFzeW5jIChvdmVybGF5LCBhbmltYXRpb25CdWlsZGVyLCBiYXNlRWwsIG9wdHMpID0+IHtcbiAgLy8gTWFrZSBvdmVybGF5IHZpc2libGUgaW4gY2FzZSBpdCdzIGhpZGRlblxuICBiYXNlRWwuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmxheS1oaWRkZW4nKTtcbiAgY29uc3QgYW5pUm9vdCA9IG92ZXJsYXkuZWw7XG4gIGNvbnN0IGFuaW1hdGlvbiA9IGFuaW1hdGlvbkJ1aWxkZXIoYW5pUm9vdCwgb3B0cyk7XG4gIGlmICghb3ZlcmxheS5hbmltYXRlZCB8fCAhY29uZmlnLmdldEJvb2xlYW4oJ2FuaW1hdGVkJywgdHJ1ZSkpIHtcbiAgICBhbmltYXRpb24uZHVyYXRpb24oMCk7XG4gIH1cbiAgaWYgKG92ZXJsYXkua2V5Ym9hcmRDbG9zZSkge1xuICAgIGFuaW1hdGlvbi5iZWZvcmVBZGRXcml0ZSgoKSA9PiB7XG4gICAgICBjb25zdCBhY3RpdmVFbGVtZW50ID0gYmFzZUVsLm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICAgIGlmIChhY3RpdmVFbGVtZW50ID09PSBudWxsIHx8IGFjdGl2ZUVsZW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFjdGl2ZUVsZW1lbnQubWF0Y2hlcygnaW5wdXQsaW9uLWlucHV0LCBpb24tdGV4dGFyZWEnKSkge1xuICAgICAgICBhY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBjb25zdCBhY3RpdmVBbmkgPSBhY3RpdmVBbmltYXRpb25zLmdldChvdmVybGF5KSB8fCBbXTtcbiAgYWN0aXZlQW5pbWF0aW9ucy5zZXQob3ZlcmxheSwgWy4uLmFjdGl2ZUFuaSwgYW5pbWF0aW9uXSk7XG4gIGF3YWl0IGFuaW1hdGlvbi5wbGF5KCk7XG4gIHJldHVybiB0cnVlO1xufTtcbmNvbnN0IGV2ZW50TWV0aG9kID0gKGVsZW1lbnQsIGV2ZW50TmFtZSkgPT4ge1xuICBsZXQgcmVzb2x2ZTtcbiAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKHIgPT4gcmVzb2x2ZSA9IHIpO1xuICBvbmNlRXZlbnQoZWxlbWVudCwgZXZlbnROYW1lLCBldmVudCA9PiB7XG4gICAgcmVzb2x2ZShldmVudC5kZXRhaWwpO1xuICB9KTtcbiAgcmV0dXJuIHByb21pc2U7XG59O1xuY29uc3Qgb25jZUV2ZW50ID0gKGVsZW1lbnQsIGV2ZW50TmFtZSwgY2FsbGJhY2spID0+IHtcbiAgY29uc3QgaGFuZGxlciA9IGV2ID0+IHtcbiAgICByZW1vdmVFdmVudExpc3RlbmVyKGVsZW1lbnQsIGV2ZW50TmFtZSwgaGFuZGxlcik7XG4gICAgY2FsbGJhY2soZXYpO1xuICB9O1xuICBhZGRFdmVudExpc3RlbmVyKGVsZW1lbnQsIGV2ZW50TmFtZSwgaGFuZGxlcik7XG59O1xuY29uc3QgaXNDYW5jZWwgPSByb2xlID0+IHtcbiAgcmV0dXJuIHJvbGUgPT09ICdjYW5jZWwnIHx8IHJvbGUgPT09IEJBQ0tEUk9QO1xufTtcbmNvbnN0IGRlZmF1bHRHYXRlID0gaCA9PiBoKCk7XG4vKipcbiAqIENhbGxzIGEgZGV2ZWxvcGVyIHByb3ZpZGVkIG1ldGhvZCB3aGlsZSBhdm9pZGluZ1xuICogQW5ndWxhciBab25lcy4gU2luY2UgdGhlIGhhbmRsZXIgaXMgcHJvdmlkZWQgYnlcbiAqIHRoZSBkZXZlbG9wZXIsIHdlIHNob3VsZCB0aHJvdyBhbnkgZXJyb3JzXG4gKiByZWNlaXZlZCBzbyB0aGF0IGRldmVsb3Blci1wcm92aWRlZCBidWdcbiAqIHRyYWNraW5nIHNvZnR3YXJlIGNhbiBsb2cgaXQuXG4gKi9cbmNvbnN0IHNhZmVDYWxsID0gKGhhbmRsZXIsIGFyZykgPT4ge1xuICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCBqbXAgPSBjb25maWcuZ2V0KCdfem9uZUdhdGUnLCBkZWZhdWx0R2F0ZSk7XG4gICAgcmV0dXJuIGptcCgoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gaGFuZGxlcihhcmcpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59O1xuY29uc3QgQkFDS0RST1AgPSAnYmFja2Ryb3AnO1xuY29uc3QgR0VTVFVSRSA9ICdnZXN0dXJlJztcbmNvbnN0IE9WRVJMQVlfR0VTVFVSRV9QUklPUklUWSA9IDM5O1xuLyoqXG4gKiBDcmVhdGVzIGEgZGVsZWdhdGUgY29udHJvbGxlci5cbiAqXG4gKiBSZXF1aXJlcyB0aGF0IHRoZSBjb21wb25lbnQgaGFzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAqIC0gYGVsOiBIVE1MRWxlbWVudGBcbiAqIC0gYGhhc0NvbnRyb2xsZXI6IGJvb2xlYW5gXG4gKiAtIGBkZWxlZ2F0ZT86IEZyYW1ld29ya0RlbGVnYXRlYFxuICpcbiAqIEBwYXJhbSByZWYgVGhlIGNvbXBvbmVudCBjbGFzcyBpbnN0YW5jZS5cbiAqL1xuY29uc3QgY3JlYXRlRGVsZWdhdGVDb250cm9sbGVyID0gcmVmID0+IHtcbiAgbGV0IGlubGluZSA9IGZhbHNlO1xuICBsZXQgd29ya2luZ0RlbGVnYXRlO1xuICBjb25zdCBjb3JlRGVsZWdhdGUgPSBDb3JlRGVsZWdhdGUoKTtcbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciBvciBub3QgYW4gb3ZlcmxheSBpcyBiZWluZyB1c2VkXG4gICAqIGlubGluZSBvciB2aWEgYSBjb250cm9sbGVyL0pTIGFuZCByZXR1cm5zIHRoZSBjb3JyZWN0IGRlbGVnYXRlLlxuICAgKiBCeSBkZWZhdWx0LCBzdWJzZXF1ZW50IGNhbGxzIHRvIGdldERlbGVnYXRlIHdpbGwgdXNlXG4gICAqIGEgY2FjaGVkIHZlcnNpb24gb2YgdGhlIGRlbGVnYXRlLlxuICAgKiBUaGlzIGlzIHVzZWZ1bCBmb3IgY2FsbGluZyBkaXNtaXNzIGFmdGVyIHByZXNlbnQsXG4gICAqIHNvIHRoYXQgdGhlIGNvcnJlY3QgZGVsZWdhdGUgaXMgZ2l2ZW4uXG4gICAqIEBwYXJhbSBmb3JjZSBgdHJ1ZWAgdG8gZm9yY2UgdGhlIG5vbi1jYWNoZWQgdmVyc2lvbiBvZiB0aGUgZGVsZWdhdGUuXG4gICAqIEByZXR1cm5zIFRoZSBkZWxlZ2F0ZSB0byB1c2UgYW5kIHdoZXRoZXIgb3Igbm90IHRoZSBvdmVybGF5IGlzIGlubGluZS5cbiAgICovXG4gIGNvbnN0IGdldERlbGVnYXRlID0gKGZvcmNlID0gZmFsc2UpID0+IHtcbiAgICBpZiAod29ya2luZ0RlbGVnYXRlICYmICFmb3JjZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGVsZWdhdGU6IHdvcmtpbmdEZWxlZ2F0ZSxcbiAgICAgICAgaW5saW5lXG4gICAgICB9O1xuICAgIH1cbiAgICBjb25zdCB7XG4gICAgICBlbCxcbiAgICAgIGhhc0NvbnRyb2xsZXIsXG4gICAgICBkZWxlZ2F0ZVxuICAgIH0gPSByZWY7XG4gICAgLyoqXG4gICAgICogSWYgdXNpbmcgb3ZlcmxheSBpbmxpbmVcbiAgICAgKiB3ZSBwb3RlbnRpYWxseSBuZWVkIHRvIHVzZSB0aGUgY29yZURlbGVnYXRlXG4gICAgICogc28gdGhhdCB0aGlzIHdvcmtzIGluIHZhbmlsbGEgSlMgYXBwcy5cbiAgICAgKiBJZiBhIGRldmVsb3BlciBoYXMgcHJlc2VudGVkIHRoaXMgY29tcG9uZW50XG4gICAgICogdmlhIGEgY29udHJvbGxlciwgdGhlbiB3ZSBjYW4gYXNzdW1lXG4gICAgICogdGhlIGNvbXBvbmVudCBpcyBhbHJlYWR5IGluIHRoZVxuICAgICAqIGNvcnJlY3QgcGxhY2UuXG4gICAgICovXG4gICAgY29uc3QgcGFyZW50RWwgPSBlbC5wYXJlbnROb2RlO1xuICAgIGlubGluZSA9IHBhcmVudEVsICE9PSBudWxsICYmICFoYXNDb250cm9sbGVyO1xuICAgIHdvcmtpbmdEZWxlZ2F0ZSA9IGlubGluZSA/IGRlbGVnYXRlIHx8IGNvcmVEZWxlZ2F0ZSA6IGRlbGVnYXRlO1xuICAgIHJldHVybiB7XG4gICAgICBpbmxpbmUsXG4gICAgICBkZWxlZ2F0ZTogd29ya2luZ0RlbGVnYXRlXG4gICAgfTtcbiAgfTtcbiAgLyoqXG4gICAqIEF0dGFjaGVzIGEgY29tcG9uZW50IGluIHRoZSBET00uIFRlbGVwb3J0cyB0aGUgY29tcG9uZW50XG4gICAqIHRvIHRoZSByb290IG9mIHRoZSBhcHAuXG4gICAqIEBwYXJhbSBjb21wb25lbnQgVGhlIGNvbXBvbmVudCB0byBvcHRpb25hbGx5IGNvbnN0cnVjdCBhbmQgYXBwZW5kIHRvIHRoZSBlbGVtZW50LlxuICAgKi9cbiAgY29uc3QgYXR0YWNoVmlld1RvRG9tID0gYXN5bmMgY29tcG9uZW50ID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBkZWxlZ2F0ZVxuICAgIH0gPSBnZXREZWxlZ2F0ZSh0cnVlKTtcbiAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgIHJldHVybiBhd2FpdCBkZWxlZ2F0ZS5hdHRhY2hWaWV3VG9Eb20ocmVmLmVsLCBjb21wb25lbnQpO1xuICAgIH1cbiAgICBjb25zdCB7XG4gICAgICBoYXNDb250cm9sbGVyXG4gICAgfSA9IHJlZjtcbiAgICBpZiAoaGFzQ29udHJvbGxlciAmJiBjb21wb25lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdmcmFtZXdvcmsgZGVsZWdhdGUgaXMgbWlzc2luZycpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcbiAgLyoqXG4gICAqIE1vdmVzIGEgY29tcG9uZW50IGJhY2sgdG8gaXRzIG9yaWdpbmFsIGxvY2F0aW9uIGluIHRoZSBET00uXG4gICAqL1xuICBjb25zdCByZW1vdmVWaWV3RnJvbURvbSA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBkZWxlZ2F0ZVxuICAgIH0gPSBnZXREZWxlZ2F0ZSgpO1xuICAgIGlmIChkZWxlZ2F0ZSAmJiByZWYuZWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZGVsZWdhdGUucmVtb3ZlVmlld0Zyb21Eb20ocmVmLmVsLnBhcmVudEVsZW1lbnQsIHJlZi5lbCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4ge1xuICAgIGF0dGFjaFZpZXdUb0RvbSxcbiAgICByZW1vdmVWaWV3RnJvbURvbVxuICB9O1xufTtcbi8qKlxuICogQ29uc3RydWN0cyBhIHRyaWdnZXIgaW50ZXJhY3Rpb24gZm9yIGFuIG92ZXJsYXkuXG4gKiBQcmVzZW50cyBhbiBvdmVybGF5IHdoZW4gdGhlIHRyaWdnZXIgaXMgY2xpY2tlZC5cbiAqXG4gKiBVc2FnZTpcbiAqIGBgYHRzXG4gKiB0cmlnZ2VyQ29udHJvbGxlciA9IGNyZWF0ZVRyaWdnZXJDb250cm9sbGVyKCk7XG4gKiB0cmlnZ2VyQ29udHJvbGxlci5hZGRDbGlja0xpc3RlbmVyKGVsLCB0cmlnZ2VyKTtcbiAqIGBgYFxuICovXG5jb25zdCBjcmVhdGVUcmlnZ2VyQ29udHJvbGxlciA9ICgpID0+IHtcbiAgbGV0IGRlc3Ryb3lUcmlnZ2VySW50ZXJhY3Rpb247XG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSBjbGljayBsaXN0ZW5lciBmcm9tIHRoZSB0cmlnZ2VyIGVsZW1lbnQuXG4gICAqL1xuICBjb25zdCByZW1vdmVDbGlja0xpc3RlbmVyID0gKCkgPT4ge1xuICAgIGlmIChkZXN0cm95VHJpZ2dlckludGVyYWN0aW9uKSB7XG4gICAgICBkZXN0cm95VHJpZ2dlckludGVyYWN0aW9uKCk7XG4gICAgICBkZXN0cm95VHJpZ2dlckludGVyYWN0aW9uID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfTtcbiAgLyoqXG4gICAqIEFkZHMgYSBjbGljayBsaXN0ZW5lciB0byB0aGUgdHJpZ2dlciBlbGVtZW50LlxuICAgKiBQcmVzZW50cyB0aGUgb3ZlcmxheSB3aGVuIHRoZSB0cmlnZ2VyIGlzIGNsaWNrZWQuXG4gICAqIEBwYXJhbSBlbCBUaGUgb3ZlcmxheSBlbGVtZW50LlxuICAgKiBAcGFyYW0gdHJpZ2dlciBUaGUgSUQgb2YgdGhlIGVsZW1lbnQgdG8gYWRkIGEgY2xpY2sgbGlzdGVuZXIgdG8uXG4gICAqL1xuICBjb25zdCBhZGRDbGlja0xpc3RlbmVyID0gKGVsLCB0cmlnZ2VyKSA9PiB7XG4gICAgcmVtb3ZlQ2xpY2tMaXN0ZW5lcigpO1xuICAgIGNvbnN0IHRyaWdnZXJFbCA9IHRyaWdnZXIgIT09IHVuZGVmaW5lZCA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRyaWdnZXIpIDogbnVsbDtcbiAgICBpZiAoIXRyaWdnZXJFbCkge1xuICAgICAgcHJpbnRJb25XYXJuaW5nKGBbJHtlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCl9XSAtIEEgdHJpZ2dlciBlbGVtZW50IHdpdGggdGhlIElEIFwiJHt0cmlnZ2VyfVwiIHdhcyBub3QgZm91bmQgaW4gdGhlIERPTS4gVGhlIHRyaWdnZXIgZWxlbWVudCBtdXN0IGJlIGluIHRoZSBET00gd2hlbiB0aGUgXCJ0cmlnZ2VyXCIgcHJvcGVydHkgaXMgc2V0IG9uIGFuIG92ZXJsYXkgY29tcG9uZW50LmAsIGVsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY29uZmlndXJlVHJpZ2dlckludGVyYWN0aW9uID0gKHRhcmdldEVsLCBvdmVybGF5RWwpID0+IHtcbiAgICAgIGNvbnN0IG9wZW5PdmVybGF5ID0gKCkgPT4ge1xuICAgICAgICBvdmVybGF5RWwucHJlc2VudCgpO1xuICAgICAgfTtcbiAgICAgIHRhcmdldEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk92ZXJsYXkpO1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgdGFyZ2V0RWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuT3ZlcmxheSk7XG4gICAgICB9O1xuICAgIH07XG4gICAgZGVzdHJveVRyaWdnZXJJbnRlcmFjdGlvbiA9IGNvbmZpZ3VyZVRyaWdnZXJJbnRlcmFjdGlvbih0cmlnZ2VyRWwsIGVsKTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBhZGRDbGlja0xpc3RlbmVyLFxuICAgIHJlbW92ZUNsaWNrTGlzdGVuZXJcbiAgfTtcbn07XG4vKipcbiAqIFRoZSBvdmVybGF5IHRoYXQgaXMgYmVpbmcgYW5pbWF0ZWQgYWxzbyBuZWVkcyB0byBoaWRlIGZyb20gc2NyZWVuXG4gKiByZWFkZXJzIGR1cmluZyBpdHMgYW5pbWF0aW9uLiBUaGlzIGVuc3VyZXMgdGhhdCBhc3Npc3RpdmUgdGVjaG5vbG9naWVzXG4gKiBsaWtlIFRhbGtCYWNrIGRvIG5vdCBhbm5vdW5jZSBvciBpbnRlcmFjdCB3aXRoIHRoZSBjb250ZW50IHVudGlsIHRoZVxuICogYW5pbWF0aW9uIGlzIGNvbXBsZXRlLCBhdm9pZGluZyBjb25mdXNpb24gZm9yIHVzZXJzLlxuICpcbiAqIFdoZW4gdGhlIG92ZXJsYXkgaXMgcHJlc2VudGVkIG9uIGFuIEFuZHJvaWQgZGV2aWNlLCBUYWxrQmFjaydzIGZvY3VzIHJpbmdzXG4gKiBtYXkgYXBwZWFyIGluIHRoZSB3cm9uZyBwb3NpdGlvbiBkdWUgdG8gdGhlIHRyYW5zaXRpb24gKHNwZWNpZmljYWxseVxuICogYHRyYW5zZm9ybWAgc3R5bGVzKS4gVGhpcyBvY2N1cnMgYmVjYXVzZSB0aGUgZm9jdXMgcmluZ3MgYXJlIGluaXRpYWxseVxuICogZGlzcGxheWVkIGF0IHRoZSBzdGFydGluZyBwb3NpdGlvbiBvZiB0aGUgZWxlbWVudHMgYmVmb3JlIHRoZSB0cmFuc2l0aW9uXG4gKiBiZWdpbnMuIFRoaXMgd29ya2Fyb3VuZCBlbnN1cmVzIHRoZSBmb2N1cyByaW5ncyBkbyBub3QgYXBwZWFyIGluIHRoZVxuICogaW5jb3JyZWN0IGxvY2F0aW9uLlxuICpcbiAqIElmIHRoaXMgc29sdXRpb24gaXMgYXBwbGllZCB0byBpT1MgZGV2aWNlcywgdGhlbiBpdCBsZWFkcyB0byBhIGJ1ZyB3aGVyZVxuICogdGhlIG92ZXJsYXlzIGNhbm5vdCBiZSBhY2Nlc3NlZCBieSBzY3JlZW4gcmVhZGVycy4gVGhpcyBpcyBkdWUgdG9cbiAqIFZvaWNlT3ZlciBub3QgYmVpbmcgYWJsZSB0byB1cGRhdGUgdGhlIGFjY2Vzc2liaWxpdHkgdHJlZSB3aGVuIHRoZVxuICogYGFyaWEtaGlkZGVuYCBpcyByZW1vdmVkLlxuICpcbiAqIEBwYXJhbSBvdmVybGF5IC0gVGhlIG92ZXJsYXkgdGhhdCBpcyBiZWluZyBhbmltYXRlZC5cbiAqL1xuY29uc3QgaGlkZUFuaW1hdGluZ092ZXJsYXlGcm9tU2NyZWVuUmVhZGVycyA9IG92ZXJsYXkgPT4ge1xuICBpZiAoZG9jID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgaWYgKGlzUGxhdGZvcm0oJ2FuZHJvaWQnKSkge1xuICAgIC8qKlxuICAgICAqIE9uY2UgdGhlIGFuaW1hdGlvbiBpcyBjb21wbGV0ZSwgdGhpcyBhdHRyaWJ1dGUgd2lsbCBiZSByZW1vdmVkLlxuICAgICAqIFRoaXMgaXMgZG9uZSBhdCB0aGUgZW5kIG9mIHRoZSBgcHJlc2VudGAgbWV0aG9kLlxuICAgICAqL1xuICAgIG92ZXJsYXkuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gIH1cbn07XG4vKipcbiAqIEVuc3VyZSB0aGF0IHVuZGVybHlpbmcgb3ZlcmxheXMgaGF2ZSBhcmlhLWhpZGRlbiBpZiBuZWNlc3Nhcnkgc28gdGhhdCBzY3JlZW4gcmVhZGVyc1xuICogY2Fubm90IG1vdmUgZm9jdXMgdG8gdGhlc2UgZWxlbWVudHMuIE5vdGUgdGhhdCB3ZSBjYW5ub3QgcmVseSBvbiBmb2N1cy9mb2N1c2luL2ZvY3Vzb3V0XG4gKiBldmVudHMgaGVyZSBiZWNhdXNlIHRob3NlIGV2ZW50cyBkbyBub3QgZmlyZSB3aGVuIHRoZSBzY3JlZW4gcmVhZGVycyBtb3ZlcyB0byBhIG5vbi1mb2N1c2FibGVcbiAqIGVsZW1lbnQgc3VjaCBhcyB0ZXh0LlxuICogV2l0aG91dCB0aGlzIGxvZ2ljIHNjcmVlbiByZWFkZXJzIHdvdWxkIGJlIGFibGUgdG8gbW92ZSBmb2N1cyBvdXRzaWRlIG9mIHRoZSB0b3AgZm9jdXMtdHJhcHBlZCBvdmVybGF5LlxuICpcbiAqIEBwYXJhbSBuZXdUb3BNb3N0T3ZlcmxheSAtIFRoZSBvdmVybGF5IHRoYXQgaXMgYmVpbmcgcHJlc2VudGVkLiBTaW5jZSB0aGUgb3ZlcmxheSBoYXMgbm90IGJlZW5cbiAqIGZ1bGx5IHByZXNlbnRlZCB5ZXQgYXQgdGhlIHRpbWUgdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgaXQgd2lsbCBub3QgYmUgaW5jbHVkZWQgaW4gdGhlIGdldFByZXNlbnRlZE92ZXJsYXlzIHJlc3VsdC5cbiAqL1xuY29uc3QgaGlkZVVuZGVybHlpbmdPdmVybGF5c0Zyb21TY3JlZW5SZWFkZXJzID0gbmV3VG9wTW9zdE92ZXJsYXkgPT4ge1xuICB2YXIgX2E7XG4gIGlmIChkb2MgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICBjb25zdCBvdmVybGF5cyA9IGdldFByZXNlbnRlZE92ZXJsYXlzKGRvYyk7XG4gIGZvciAobGV0IGkgPSBvdmVybGF5cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGNvbnN0IHByZXNlbnRlZE92ZXJsYXkgPSBvdmVybGF5c1tpXTtcbiAgICBjb25zdCBuZXh0UHJlc2VudGVkT3ZlcmxheSA9IChfYSA9IG92ZXJsYXlzW2kgKyAxXSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogbmV3VG9wTW9zdE92ZXJsYXk7XG4gICAgLyoqXG4gICAgICogSWYgbmV4dCBvdmVybGF5IGhhcyBhcmlhLWhpZGRlbiB0aGVuIGFsbCByZW1haW5pbmcgb3ZlcmxheXMgd2lsbCBoYXZlIGl0IHRvby5cbiAgICAgKiBPciwgaWYgdGhlIG5leHQgb3ZlcmxheSBpcyBhIFRvYXN0IHRoYXQgZG9lcyBub3QgaGF2ZSBhcmlhLWhpZGRlbiB0aGVuIGN1cnJlbnQgb3ZlcmxheVxuICAgICAqIHNob3VsZCBub3QgaGF2ZSBhcmlhLWhpZGRlbiBlaXRoZXIgc28gZm9jdXMgY2FuIHJlbWFpbiBpbiB0aGUgY3VycmVudCBvdmVybGF5LlxuICAgICAqL1xuICAgIGlmIChuZXh0UHJlc2VudGVkT3ZlcmxheS5oYXNBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJykgfHwgbmV4dFByZXNlbnRlZE92ZXJsYXkudGFnTmFtZSAhPT0gJ0lPTi1UT0FTVCcpIHtcbiAgICAgIHByZXNlbnRlZE92ZXJsYXkuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgfVxuICB9XG59O1xuLyoqXG4gKiBXaGVuIGRpc21pc3NpbmcgYW4gb3ZlcmxheSB3ZSBuZWVkIHRvIHJldmVhbCB0aGUgbmV3IHRvcC1tb3N0IG92ZXJsYXkgdG8gc2NyZWVuIHJlYWRlcnMuXG4gKiBJZiB0aGUgdG9wLW1vc3Qgb3ZlcmxheSBpcyBhIFRvYXN0IHdlIHBvdGVudGlhbGx5IG5lZWQgdG8gcmV2ZWFsIG1vcmUgb3ZlcmxheXMgc2luY2VcbiAqIGZvY3VzIGlzIG5ldmVyIGF1dG9tYXRpY2FsbHkgbW92ZWQgdG8gdGhlIFRvYXN0LlxuICovXG5jb25zdCByZXZlYWxPdmVybGF5c1RvU2NyZWVuUmVhZGVycyA9ICgpID0+IHtcbiAgaWYgKGRvYyA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG4gIGNvbnN0IG92ZXJsYXlzID0gZ2V0UHJlc2VudGVkT3ZlcmxheXMoZG9jKTtcbiAgZm9yIChsZXQgaSA9IG92ZXJsYXlzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgY29uc3QgY3VycmVudE92ZXJsYXkgPSBvdmVybGF5c1tpXTtcbiAgICAvKipcbiAgICAgKiBJZiB0aGUgY3VycmVudCB3ZSBhcmUgbG9va2luZyBhdCBpcyBhIFRvYXN0IHRoZW4gd2UgY2FuIHJlbW92ZSBhcmlhLWhpZGRlbi5cbiAgICAgKiBIb3dldmVyLCB3ZSBwb3RlbnRpYWxseSBuZWVkIHRvIGtlZXAgbG9va2luZyBhdCB0aGUgb3ZlcmxheSBzdGFjayBiZWNhdXNlIHRoZXJlXG4gICAgICogY291bGQgYmUgbW9yZSBUb2FzdHMgdW5kZXJuZWF0aC4gQWRkaXRpb25hbGx5LCB3ZSBuZWVkIHRvIHVuaGlkZSB0aGUgY2xvc2VzdCBub24tVG9hc3RcbiAgICAgKiBvdmVybGF5IHRvbyBzbyBmb2N1cyBjYW4gbW92ZSB0aGVyZSBzaW5jZSBmb2N1cyBpcyBuZXZlciBhdXRvbWF0aWNhbGx5IG1vdmVkIHRvIHRoZSBUb2FzdC5cbiAgICAgKi9cbiAgICBjdXJyZW50T3ZlcmxheS5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG4gICAgLyoqXG4gICAgICogSWYgd2UgZm91bmQgYSBub24tVG9hc3QgZWxlbWVudCB0aGVuIHdlIGNhbiBqdXN0IHJlbW92ZSBhcmlhLWhpZGRlbiBhbmQgc3RvcCBzZWFyY2hpbmcgZW50aXJlbHlcbiAgICAgKiBzaW5jZSB0aGlzIG92ZXJsYXkgc2hvdWxkIGFsd2F5cyByZWNlaXZlIGZvY3VzLiBBcyBhIHJlc3VsdCwgYWxsIHVuZGVybHlpbmcgb3ZlcmxheXMgc2hvdWxkIHN0aWxsXG4gICAgICogYmUgaGlkZGVuIGZyb20gc2NyZWVuIHJlYWRlcnMuXG4gICAgICovXG4gICAgaWYgKGN1cnJlbnRPdmVybGF5LnRhZ05hbWUgIT09ICdJT04tVE9BU1QnKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbn07XG5jb25zdCBGT0NVU19UUkFQX0RJU0FCTEVfQ0xBU1MgPSAnaW9uLWRpc2FibGUtZm9jdXMtdHJhcCc7XG5leHBvcnQgeyBCQUNLRFJPUCBhcyBCLCBGT0NVU19UUkFQX0RJU0FCTEVfQ0xBU1MgYXMgRiwgR0VTVFVSRSBhcyBHLCBPVkVSTEFZX0dFU1RVUkVfUFJJT1JJVFkgYXMgTywgYWxlcnRDb250cm9sbGVyIGFzIGEsIGFjdGlvblNoZWV0Q29udHJvbGxlciBhcyBiLCBwb3BvdmVyQ29udHJvbGxlciBhcyBjLCBjcmVhdGVEZWxlZ2F0ZUNvbnRyb2xsZXIgYXMgZCwgY3JlYXRlVHJpZ2dlckNvbnRyb2xsZXIgYXMgZSwgcHJlc2VudCBhcyBmLCBkaXNtaXNzIGFzIGcsIGV2ZW50TWV0aG9kIGFzIGgsIGlzQ2FuY2VsIGFzIGksIHByZXBhcmVPdmVybGF5IGFzIGosIHNldE92ZXJsYXlJZCBhcyBrLCBsb2FkaW5nQ29udHJvbGxlciBhcyBsLCBtb2RhbENvbnRyb2xsZXIgYXMgbSwgZm9jdXNGaXJzdERlc2NlbmRhbnQgYXMgbiwgZ2V0UHJlc2VudGVkT3ZlcmxheSBhcyBvLCBwaWNrZXJDb250cm9sbGVyIGFzIHAsIGZvY3VzTGFzdERlc2NlbmRhbnQgYXMgcSwgc2FmZUNhbGwgYXMgcywgdG9hc3RDb250cm9sbGVyIGFzIHQgfTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkEsSUFBTSx1QkFBdUI7QUFXN0IsSUFBTSx1QkFBdUIsQ0FBQyxLQUFLLG9CQUFvQjtBQUNyRCxRQUFNLGFBQWEsSUFBSSxjQUFjLG9CQUFvQjtBQUN6RCx3QkFBc0IsWUFBWSxvQkFBb0IsUUFBUSxvQkFBb0IsU0FBUyxrQkFBa0IsR0FBRztBQUNsSDtBQVdBLElBQU0sc0JBQXNCLENBQUMsS0FBSyxvQkFBb0I7QUFDcEQsUUFBTSxTQUFTLE1BQU0sS0FBSyxJQUFJLGlCQUFpQixvQkFBb0IsQ0FBQztBQUNwRSxRQUFNLFlBQVksT0FBTyxTQUFTLElBQUksT0FBTyxPQUFPLFNBQVMsQ0FBQyxJQUFJO0FBQ2xFLHdCQUFzQixXQUFXLG9CQUFvQixRQUFRLG9CQUFvQixTQUFTLGtCQUFrQixHQUFHO0FBQ2pIO0FBa0JBLElBQU0sd0JBQXdCLENBQUMsYUFBYSxvQkFBb0I7QUFDOUQsTUFBSSxpQkFBaUI7QUFDckIsUUFBTSxhQUFhLGdCQUFnQixRQUFRLGdCQUFnQixTQUFTLFNBQVMsWUFBWTtBQUN6RixNQUFJLFlBQVk7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
