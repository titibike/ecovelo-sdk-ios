import {
  findClosestIonContent,
  getScrollElement,
  scrollByPoint
} from "./chunk-JBNXL77H.js";
import {
  Keyboard,
  KeyboardResize
} from "./chunk-PWUDMNGE.js";
import {
  addEventListener,
  componentOnReady,
  raf,
  removeEventListener
} from "./chunk-EV4ZQC67.js";
import "./chunk-7OBOYUXW.js";
import {
  doc,
  win
} from "./chunk-34HBWEZ3.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// node_modules/@ionic/core/components/input-shims.js
var cloneMap = /* @__PURE__ */ new WeakMap();
var relocateInput = (componentEl, inputEl, shouldRelocate, inputRelativeY = 0, disabledClonedInput = false) => {
  if (cloneMap.has(componentEl) === shouldRelocate) {
    return;
  }
  if (shouldRelocate) {
    addClone(componentEl, inputEl, inputRelativeY, disabledClonedInput);
  } else {
    removeClone(componentEl, inputEl);
  }
};
var isFocused = (input) => {
  return input === input.getRootNode().activeElement;
};
var addClone = (componentEl, inputEl, inputRelativeY, disabledClonedInput = false) => {
  const parentEl = inputEl.parentNode;
  const clonedEl = inputEl.cloneNode(false);
  clonedEl.classList.add("cloned-input");
  clonedEl.tabIndex = -1;
  if (disabledClonedInput) {
    clonedEl.disabled = true;
  }
  parentEl.appendChild(clonedEl);
  cloneMap.set(componentEl, clonedEl);
  const doc2 = componentEl.ownerDocument;
  const tx = doc2.dir === "rtl" ? 9999 : -9999;
  componentEl.style.pointerEvents = "none";
  inputEl.style.transform = `translate3d(${tx}px,${inputRelativeY}px,0) scale(0)`;
};
var removeClone = (componentEl, inputEl) => {
  const clone = cloneMap.get(componentEl);
  if (clone) {
    cloneMap.delete(componentEl);
    clone.remove();
  }
  componentEl.style.pointerEvents = "";
  inputEl.style.transform = "";
};
var SCROLL_AMOUNT_PADDING = 50;
var enableHideCaretOnScroll = (componentEl, inputEl, scrollEl) => {
  if (!scrollEl || !inputEl) {
    return () => {
      return;
    };
  }
  const scrollHideCaret = (shouldHideCaret) => {
    if (isFocused(inputEl)) {
      relocateInput(componentEl, inputEl, shouldHideCaret);
    }
  };
  const onBlur = () => relocateInput(componentEl, inputEl, false);
  const hideCaret = () => scrollHideCaret(true);
  const showCaret = () => scrollHideCaret(false);
  addEventListener(scrollEl, "ionScrollStart", hideCaret);
  addEventListener(scrollEl, "ionScrollEnd", showCaret);
  inputEl.addEventListener("blur", onBlur);
  return () => {
    removeEventListener(scrollEl, "ionScrollStart", hideCaret);
    removeEventListener(scrollEl, "ionScrollEnd", showCaret);
    inputEl.removeEventListener("blur", onBlur);
  };
};
var SKIP_SELECTOR = "input, textarea, [no-blur], [contenteditable]";
var enableInputBlurring = () => {
  let focused = true;
  let didScroll = false;
  const doc2 = document;
  const onScroll = () => {
    didScroll = true;
  };
  const onFocusin = () => {
    focused = true;
  };
  const onTouchend = (ev) => {
    if (didScroll) {
      didScroll = false;
      return;
    }
    const active = doc2.activeElement;
    if (!active) {
      return;
    }
    if (active.matches(SKIP_SELECTOR)) {
      return;
    }
    const tapped = ev.target;
    if (tapped === active) {
      return;
    }
    if (tapped.matches(SKIP_SELECTOR) || tapped.closest(SKIP_SELECTOR)) {
      return;
    }
    focused = false;
    setTimeout(() => {
      if (!focused) {
        active.blur();
      }
    }, 50);
  };
  addEventListener(doc2, "ionScrollStart", onScroll);
  doc2.addEventListener("focusin", onFocusin, true);
  doc2.addEventListener("touchend", onTouchend, false);
  return () => {
    removeEventListener(doc2, "ionScrollStart", onScroll, true);
    doc2.removeEventListener("focusin", onFocusin, true);
    doc2.removeEventListener("touchend", onTouchend, false);
  };
};
var SCROLL_ASSIST_SPEED = 0.3;
var getScrollData = (componentEl, contentEl, keyboardHeight, platformHeight) => {
  var _a;
  const itemEl = (_a = componentEl.closest("ion-item,[ion-item]")) !== null && _a !== void 0 ? _a : componentEl;
  return calcScrollData(itemEl.getBoundingClientRect(), contentEl.getBoundingClientRect(), keyboardHeight, platformHeight);
};
var calcScrollData = (inputRect, contentRect, keyboardHeight, platformHeight) => {
  const inputTop = inputRect.top;
  const inputBottom = inputRect.bottom;
  const visibleAreaTop = contentRect.top;
  const visibleAreaBottom = Math.min(contentRect.bottom, platformHeight - keyboardHeight);
  const safeAreaTop = visibleAreaTop + 15;
  const safeAreaBottom = visibleAreaBottom - SCROLL_AMOUNT_PADDING;
  const distanceToBottom = safeAreaBottom - inputBottom;
  const distanceToTop = safeAreaTop - inputTop;
  const desiredScrollAmount = Math.round(distanceToBottom < 0 ? -distanceToBottom : distanceToTop > 0 ? -distanceToTop : 0);
  const scrollAmount = Math.min(desiredScrollAmount, inputTop - visibleAreaTop);
  const distance = Math.abs(scrollAmount);
  const duration = distance / SCROLL_ASSIST_SPEED;
  const scrollDuration = Math.min(400, Math.max(150, duration));
  return {
    scrollAmount,
    scrollDuration,
    scrollPadding: keyboardHeight,
    inputSafeY: -(inputTop - safeAreaTop) + 4
  };
};
var PADDING_TIMER_KEY = "$ionPaddingTimer";
var setScrollPadding = (contentEl, paddingAmount, clearCallback) => {
  const timer = contentEl[PADDING_TIMER_KEY];
  if (timer) {
    clearTimeout(timer);
  }
  if (paddingAmount > 0) {
    contentEl.style.setProperty("--keyboard-offset", `${paddingAmount}px`);
  } else {
    contentEl[PADDING_TIMER_KEY] = setTimeout(() => {
      contentEl.style.setProperty("--keyboard-offset", "0px");
      if (clearCallback) {
        clearCallback();
      }
    }, 120);
  }
};
var setClearScrollPaddingListener = (inputEl, contentEl, doneCallback) => {
  const clearScrollPadding = () => {
    if (contentEl) {
      setScrollPadding(contentEl, 0, doneCallback);
    }
  };
  inputEl.addEventListener("focusout", clearScrollPadding, {
    once: true
  });
};
var currentPadding = 0;
var SKIP_SCROLL_ASSIST = "data-ionic-skip-scroll-assist";
var enableScrollAssist = (componentEl, inputEl, contentEl, footerEl, keyboardHeight, enableScrollPadding, keyboardResize, disableClonedInput = false) => {
  const addScrollPadding = enableScrollPadding && (keyboardResize === void 0 || keyboardResize.mode === KeyboardResize.None);
  let hasKeyboardBeenPresentedForTextField = false;
  const platformHeight = win !== void 0 ? win.innerHeight : 0;
  const keyboardShow = (ev) => {
    if (hasKeyboardBeenPresentedForTextField === false) {
      hasKeyboardBeenPresentedForTextField = true;
      return;
    }
    jsSetFocus(componentEl, inputEl, contentEl, footerEl, ev.detail.keyboardHeight, addScrollPadding, disableClonedInput, platformHeight, false);
  };
  const focusOut = () => {
    hasKeyboardBeenPresentedForTextField = false;
    win === null || win === void 0 ? void 0 : win.removeEventListener("ionKeyboardDidShow", keyboardShow);
    componentEl.removeEventListener("focusout", focusOut);
  };
  const focusIn = () => __async(null, null, function* () {
    if (inputEl.hasAttribute(SKIP_SCROLL_ASSIST)) {
      inputEl.removeAttribute(SKIP_SCROLL_ASSIST);
      return;
    }
    jsSetFocus(componentEl, inputEl, contentEl, footerEl, keyboardHeight, addScrollPadding, disableClonedInput, platformHeight);
    win === null || win === void 0 ? void 0 : win.addEventListener("ionKeyboardDidShow", keyboardShow);
    componentEl.addEventListener("focusout", focusOut);
  });
  componentEl.addEventListener("focusin", focusIn);
  return () => {
    componentEl.removeEventListener("focusin", focusIn);
    win === null || win === void 0 ? void 0 : win.removeEventListener("ionKeyboardDidShow", keyboardShow);
    componentEl.removeEventListener("focusout", focusOut);
  };
};
var setManualFocus = (el) => {
  var _a;
  if (document.activeElement === el) {
    return;
  }
  const inputId = el.getAttribute("id");
  const label = el.closest(`label[for="${inputId}"]`);
  const activeElLabel = (_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.closest(`label[for="${inputId}"]`);
  if (label !== null && label === activeElLabel) {
    return;
  }
  el.setAttribute(SKIP_SCROLL_ASSIST, "true");
  el.focus();
};
var jsSetFocus = (componentEl, inputEl, contentEl, footerEl, keyboardHeight, enableScrollPadding, disableClonedInput = false, platformHeight = 0, waitForResize = true) => __async(null, null, function* () {
  if (!contentEl && !footerEl) {
    return;
  }
  const scrollData = getScrollData(componentEl, contentEl || footerEl, keyboardHeight, platformHeight);
  if (contentEl && Math.abs(scrollData.scrollAmount) < 4) {
    setManualFocus(inputEl);
    if (enableScrollPadding && contentEl !== null) {
      setScrollPadding(contentEl, currentPadding);
      setClearScrollPaddingListener(inputEl, contentEl, () => currentPadding = 0);
    }
    return;
  }
  relocateInput(componentEl, inputEl, true, scrollData.inputSafeY, disableClonedInput);
  setManualFocus(inputEl);
  raf(() => componentEl.click());
  if (enableScrollPadding && contentEl) {
    currentPadding = scrollData.scrollPadding;
    setScrollPadding(contentEl, currentPadding);
  }
  if (typeof window !== "undefined") {
    let scrollContentTimeout;
    const scrollContent = () => __async(null, null, function* () {
      if (scrollContentTimeout !== void 0) {
        clearTimeout(scrollContentTimeout);
      }
      window.removeEventListener("ionKeyboardDidShow", doubleKeyboardEventListener);
      window.removeEventListener("ionKeyboardDidShow", scrollContent);
      if (contentEl) {
        yield scrollByPoint(contentEl, 0, scrollData.scrollAmount, scrollData.scrollDuration);
      }
      relocateInput(componentEl, inputEl, false, scrollData.inputSafeY);
      setManualFocus(inputEl);
      if (enableScrollPadding) {
        setClearScrollPaddingListener(inputEl, contentEl, () => currentPadding = 0);
      }
    });
    const doubleKeyboardEventListener = () => {
      window.removeEventListener("ionKeyboardDidShow", doubleKeyboardEventListener);
      window.addEventListener("ionKeyboardDidShow", scrollContent);
    };
    if (contentEl) {
      const scrollEl = yield getScrollElement(contentEl);
      const totalScrollAmount = scrollEl.scrollHeight - scrollEl.clientHeight;
      if (waitForResize && scrollData.scrollAmount > totalScrollAmount - scrollEl.scrollTop) {
        if (inputEl.type === "password") {
          scrollData.scrollAmount += SCROLL_AMOUNT_PADDING;
          window.addEventListener("ionKeyboardDidShow", doubleKeyboardEventListener);
        } else {
          window.addEventListener("ionKeyboardDidShow", scrollContent);
        }
        scrollContentTimeout = setTimeout(scrollContent, 1e3);
        return;
      }
    }
    scrollContent();
  }
});
var INPUT_BLURRING = true;
var startInputShims = (config, platform) => __async(null, null, function* () {
  if (doc === void 0) {
    return;
  }
  const isIOS = platform === "ios";
  const isAndroid = platform === "android";
  const keyboardHeight = config.getNumber("keyboardHeight", 290);
  const scrollAssist = config.getBoolean("scrollAssist", true);
  const hideCaret = config.getBoolean("hideCaretOnScroll", isIOS);
  const inputBlurring = config.getBoolean("inputBlurring", false);
  const scrollPadding = config.getBoolean("scrollPadding", true);
  const inputs = Array.from(doc.querySelectorAll("ion-input, ion-textarea"));
  const hideCaretMap = /* @__PURE__ */ new WeakMap();
  const scrollAssistMap = /* @__PURE__ */ new WeakMap();
  const keyboardResizeMode = yield Keyboard.getResizeMode();
  const registerInput = (componentEl) => __async(null, null, function* () {
    yield new Promise((resolve) => componentOnReady(componentEl, resolve));
    const inputRoot = componentEl.shadowRoot || componentEl;
    const inputEl = inputRoot.querySelector("input") || inputRoot.querySelector("textarea");
    const scrollEl = findClosestIonContent(componentEl);
    const footerEl = !scrollEl ? componentEl.closest("ion-footer") : null;
    if (!inputEl) {
      return;
    }
    if (!!scrollEl && hideCaret && !hideCaretMap.has(componentEl)) {
      const rmFn = enableHideCaretOnScroll(componentEl, inputEl, scrollEl);
      hideCaretMap.set(componentEl, rmFn);
    }
    const isDateInput = inputEl.type === "date" || inputEl.type === "datetime-local";
    if (!isDateInput && (!!scrollEl || !!footerEl) && scrollAssist && !scrollAssistMap.has(componentEl)) {
      const rmFn = enableScrollAssist(componentEl, inputEl, scrollEl, footerEl, keyboardHeight, scrollPadding, keyboardResizeMode, isAndroid);
      scrollAssistMap.set(componentEl, rmFn);
    }
  });
  const unregisterInput = (componentEl) => {
    if (hideCaret) {
      const fn = hideCaretMap.get(componentEl);
      if (fn) {
        fn();
      }
      hideCaretMap.delete(componentEl);
    }
    if (scrollAssist) {
      const fn = scrollAssistMap.get(componentEl);
      if (fn) {
        fn();
      }
      scrollAssistMap.delete(componentEl);
    }
  };
  if (inputBlurring && INPUT_BLURRING) {
    enableInputBlurring();
  }
  for (const input of inputs) {
    registerInput(input);
  }
  doc.addEventListener("ionInputDidLoad", (ev) => {
    registerInput(ev.detail);
  });
  doc.addEventListener("ionInputDidUnload", (ev) => {
    unregisterInput(ev.detail);
  });
});
export {
  startInputShims
};
/*! Bundled license information:

@ionic/core/components/input-shims.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9jb21wb25lbnRzL2lucHV0LXNoaW1zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyB3IGFzIHdpbiwgZCBhcyBkb2MgfSBmcm9tICcuL2luZGV4OS5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldFNjcm9sbEVsZW1lbnQsIGMgYXMgc2Nyb2xsQnlQb2ludCwgYSBhcyBmaW5kQ2xvc2VzdElvbkNvbnRlbnQgfSBmcm9tICcuL2luZGV4OC5qcyc7XG5pbXBvcnQgeyBhIGFzIGFkZEV2ZW50TGlzdGVuZXIsIGIgYXMgcmVtb3ZlRXZlbnRMaXN0ZW5lciwgciBhcyByYWYsIGMgYXMgY29tcG9uZW50T25SZWFkeSB9IGZyb20gJy4vaGVscGVycy5qcyc7XG5pbXBvcnQgeyBhIGFzIEtleWJvYXJkUmVzaXplLCBLIGFzIEtleWJvYXJkIH0gZnJvbSAnLi9rZXlib2FyZDIuanMnO1xuY29uc3QgY2xvbmVNYXAgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgcmVsb2NhdGVJbnB1dCA9IChjb21wb25lbnRFbCwgaW5wdXRFbCwgc2hvdWxkUmVsb2NhdGUsIGlucHV0UmVsYXRpdmVZID0gMCwgZGlzYWJsZWRDbG9uZWRJbnB1dCA9IGZhbHNlKSA9PiB7XG4gIGlmIChjbG9uZU1hcC5oYXMoY29tcG9uZW50RWwpID09PSBzaG91bGRSZWxvY2F0ZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoc2hvdWxkUmVsb2NhdGUpIHtcbiAgICBhZGRDbG9uZShjb21wb25lbnRFbCwgaW5wdXRFbCwgaW5wdXRSZWxhdGl2ZVksIGRpc2FibGVkQ2xvbmVkSW5wdXQpO1xuICB9IGVsc2Uge1xuICAgIHJlbW92ZUNsb25lKGNvbXBvbmVudEVsLCBpbnB1dEVsKTtcbiAgfVxufTtcbmNvbnN0IGlzRm9jdXNlZCA9IGlucHV0ID0+IHtcbiAgLyoqXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Ob2RlL2dldFJvb3ROb2RlXG4gICAqIENhbGxpbmcgZ2V0Um9vdE5vZGUgb24gYW4gZWxlbWVudCBpbiBzdGFuZGFyZCB3ZWIgcGFnZSB3aWxsIHJldHVybiBIVE1MRG9jdW1lbnQuXG4gICAqIENhbGxpbmcgZ2V0Um9vdE5vZGUgb24gYW4gZWxlbWVudCBpbnNpZGUgb2YgdGhlIFNoYWRvdyBET00gd2lsbCByZXR1cm4gdGhlIGFzc29jaWF0ZWQgU2hhZG93Um9vdC5cbiAgICogQ2FsbGluZyBnZXRSb290Tm9kZSBvbiBhbiBlbGVtZW50IHRoYXQgaXMgbm90IGF0dGFjaGVkIHRvIGEgZG9jdW1lbnQvc2hhZG93IHRyZWUgd2lsbCByZXR1cm5cbiAgICogdGhlIHJvb3Qgb2YgdGhlIERPTSB0cmVlIGl0IGJlbG9uZ3MgdG8uXG4gICAqIGlzRm9jdXNlZCBpcyB1c2VkIGZvciB0aGUgaGlkZS1jYXJldCB1dGlsaXR5IHdoaWNoIG9ubHkgY29uc2lkZXJzIGlucHV0L3RleHRhcmVhIGVsZW1lbnRzXG4gICAqIHRoYXQgYXJlIHByZXNlbnQgaW4gdGhlIERPTSwgc28gd2UgZG9uJ3Qgc2V0IHR5cGVzIGZvciB0aGF0IGZpbmFsIGNhc2Ugc2luY2UgaXQgZG9lcyBub3QgYXBwbHkuXG4gICAqL1xuICByZXR1cm4gaW5wdXQgPT09IGlucHV0LmdldFJvb3ROb2RlKCkuYWN0aXZlRWxlbWVudDtcbn07XG5jb25zdCBhZGRDbG9uZSA9IChjb21wb25lbnRFbCwgaW5wdXRFbCwgaW5wdXRSZWxhdGl2ZVksIGRpc2FibGVkQ2xvbmVkSW5wdXQgPSBmYWxzZSkgPT4ge1xuICAvLyB0aGlzIGFsbG93cyBmb3IgdGhlIGFjdHVhbCBpbnB1dCB0byByZWNlaXZlIHRoZSBmb2N1cyBmcm9tXG4gIC8vIHRoZSB1c2VyJ3MgdG91Y2ggZXZlbnQsIGJ1dCBiZWZvcmUgaXQgcmVjZWl2ZXMgZm9jdXMsIGl0XG4gIC8vIG1vdmVzIHRoZSBhY3R1YWwgaW5wdXQgdG8gYSBsb2NhdGlvbiB0aGF0IHdpbGwgbm90IHNjcmV3XG4gIC8vIHVwIHRoZSBhcHAncyBsYXlvdXQsIGFuZCBkb2VzIG5vdCBhbGxvdyB0aGUgbmF0aXZlIGJyb3dzZXJcbiAgLy8gdG8gYXR0ZW1wdCB0byBzY3JvbGwgdGhlIGlucHV0IGludG8gcGxhY2UgKG1lc3NpbmcgdXAgaGVhZGVycy9mb290ZXJzKVxuICAvLyB0aGUgY2xvbmVkIGlucHV0IGZpbGxzIHRoZSBhcmVhIG9mIHdoZXJlIG5hdGl2ZSBpbnB1dCBzaG91bGQgYmVcbiAgLy8gd2hpbGUgdGhlIG5hdGl2ZSBpbnB1dCBmYWtlcyBvdXQgdGhlIGJyb3dzZXIgYnkgcmVsb2NhdGluZyBpdHNlbGZcbiAgLy8gYmVmb3JlIGl0IHJlY2VpdmVzIHRoZSBhY3R1YWwgZm9jdXMgZXZlbnRcbiAgLy8gV2UgaGlkZSB0aGUgZm9jdXNlZCBpbnB1dCAod2l0aCB0aGUgdmlzaWJsZSBjYXJldCkgaW52aXNpYmxlIGJ5IG1ha2luZyBpdCBzY2FsZSgwKSxcbiAgY29uc3QgcGFyZW50RWwgPSBpbnB1dEVsLnBhcmVudE5vZGU7XG4gIC8vIERPTSBXUklURVNcbiAgY29uc3QgY2xvbmVkRWwgPSBpbnB1dEVsLmNsb25lTm9kZShmYWxzZSk7XG4gIGNsb25lZEVsLmNsYXNzTGlzdC5hZGQoJ2Nsb25lZC1pbnB1dCcpO1xuICBjbG9uZWRFbC50YWJJbmRleCA9IC0xO1xuICAvKipcbiAgICogTWFraW5nIHRoZSBjbG9uZWQgaW5wdXQgZGlzYWJsZWQgcHJldmVudHNcbiAgICogQ2hyb21lIGZvciBBbmRyb2lkIGZyb20gc3RpbGwgc2Nyb2xsaW5nXG4gICAqIHRoZSBlbnRpcmUgcGFnZSBzaW5jZSB0aGlzIGNsb25lZCBpbnB1dFxuICAgKiB3aWxsIGJyaWVmbHkgYmUgaGlkZGVuIGJ5IHRoZSBrZXlib2FyZFxuICAgKiBldmVuIHRob3VnaCBpdCBpcyBub3QgZm9jdXNlZC5cbiAgICpcbiAgICogVGhpcyBpcyBub3QgbmVlZGVkIG9uIGlPUy4gV2hpbGUgdGhpc1xuICAgKiBkb2VzIG5vdCBjYXVzZSBmdW5jdGlvbmFsIGlzc3VlcyBvbiBpT1MsXG4gICAqIHRoZSBpbnB1dCBzdGlsbCBhcHBlYXJzIHNsaWdodGx5IGRpbW1lZCBldmVuXG4gICAqIGlmIHdlIHNldCBvcGFjaXR5OiAxLlxuICAgKi9cbiAgaWYgKGRpc2FibGVkQ2xvbmVkSW5wdXQpIHtcbiAgICBjbG9uZWRFbC5kaXNhYmxlZCA9IHRydWU7XG4gIH1cbiAgcGFyZW50RWwuYXBwZW5kQ2hpbGQoY2xvbmVkRWwpO1xuICBjbG9uZU1hcC5zZXQoY29tcG9uZW50RWwsIGNsb25lZEVsKTtcbiAgY29uc3QgZG9jID0gY29tcG9uZW50RWwub3duZXJEb2N1bWVudDtcbiAgY29uc3QgdHggPSBkb2MuZGlyID09PSAncnRsJyA/IDk5OTkgOiAtOTk5OTtcbiAgY29tcG9uZW50RWwuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgaW5wdXRFbC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHt0eH1weCwke2lucHV0UmVsYXRpdmVZfXB4LDApIHNjYWxlKDApYDtcbn07XG5jb25zdCByZW1vdmVDbG9uZSA9IChjb21wb25lbnRFbCwgaW5wdXRFbCkgPT4ge1xuICBjb25zdCBjbG9uZSA9IGNsb25lTWFwLmdldChjb21wb25lbnRFbCk7XG4gIGlmIChjbG9uZSkge1xuICAgIGNsb25lTWFwLmRlbGV0ZShjb21wb25lbnRFbCk7XG4gICAgY2xvbmUucmVtb3ZlKCk7XG4gIH1cbiAgY29tcG9uZW50RWwuc3R5bGUucG9pbnRlckV2ZW50cyA9ICcnO1xuICBpbnB1dEVsLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xufTtcbi8qKlxuICogRmFjdG9yaW5nIGluIDUwcHggZ2l2ZXMgdXMgc29tZSByb29tXG4gKiBpbiBjYXNlIHRoZSBrZXlib2FyZCBzaG93cyBwYXNzd29yZC9hdXRvZmlsbCBiYXJzXG4gKiBhc3luY2hyb25vdXNseS5cbiAqL1xuY29uc3QgU0NST0xMX0FNT1VOVF9QQURESU5HID0gNTA7XG5jb25zdCBlbmFibGVIaWRlQ2FyZXRPblNjcm9sbCA9IChjb21wb25lbnRFbCwgaW5wdXRFbCwgc2Nyb2xsRWwpID0+IHtcbiAgaWYgKCFzY3JvbGxFbCB8fCAhaW5wdXRFbCkge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICByZXR1cm47XG4gICAgfTtcbiAgfVxuICBjb25zdCBzY3JvbGxIaWRlQ2FyZXQgPSBzaG91bGRIaWRlQ2FyZXQgPT4ge1xuICAgIGlmIChpc0ZvY3VzZWQoaW5wdXRFbCkpIHtcbiAgICAgIHJlbG9jYXRlSW5wdXQoY29tcG9uZW50RWwsIGlucHV0RWwsIHNob3VsZEhpZGVDYXJldCk7XG4gICAgfVxuICB9O1xuICBjb25zdCBvbkJsdXIgPSAoKSA9PiByZWxvY2F0ZUlucHV0KGNvbXBvbmVudEVsLCBpbnB1dEVsLCBmYWxzZSk7XG4gIGNvbnN0IGhpZGVDYXJldCA9ICgpID0+IHNjcm9sbEhpZGVDYXJldCh0cnVlKTtcbiAgY29uc3Qgc2hvd0NhcmV0ID0gKCkgPT4gc2Nyb2xsSGlkZUNhcmV0KGZhbHNlKTtcbiAgYWRkRXZlbnRMaXN0ZW5lcihzY3JvbGxFbCwgJ2lvblNjcm9sbFN0YXJ0JywgaGlkZUNhcmV0KTtcbiAgYWRkRXZlbnRMaXN0ZW5lcihzY3JvbGxFbCwgJ2lvblNjcm9sbEVuZCcsIHNob3dDYXJldCk7XG4gIGlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIG9uQmx1cik7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihzY3JvbGxFbCwgJ2lvblNjcm9sbFN0YXJ0JywgaGlkZUNhcmV0KTtcbiAgICByZW1vdmVFdmVudExpc3RlbmVyKHNjcm9sbEVsLCAnaW9uU2Nyb2xsRW5kJywgc2hvd0NhcmV0KTtcbiAgICBpbnB1dEVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCBvbkJsdXIpO1xuICB9O1xufTtcbmNvbnN0IFNLSVBfU0VMRUNUT1IgPSAnaW5wdXQsIHRleHRhcmVhLCBbbm8tYmx1cl0sIFtjb250ZW50ZWRpdGFibGVdJztcbmNvbnN0IGVuYWJsZUlucHV0Qmx1cnJpbmcgPSAoKSA9PiB7XG4gIGxldCBmb2N1c2VkID0gdHJ1ZTtcbiAgbGV0IGRpZFNjcm9sbCA9IGZhbHNlO1xuICBjb25zdCBkb2MgPSBkb2N1bWVudDtcbiAgY29uc3Qgb25TY3JvbGwgPSAoKSA9PiB7XG4gICAgZGlkU2Nyb2xsID0gdHJ1ZTtcbiAgfTtcbiAgY29uc3Qgb25Gb2N1c2luID0gKCkgPT4ge1xuICAgIGZvY3VzZWQgPSB0cnVlO1xuICB9O1xuICBjb25zdCBvblRvdWNoZW5kID0gZXYgPT4ge1xuICAgIC8vIGlmIGFwcCBkaWQgc2Nyb2xsIHJldHVybiBlYXJseVxuICAgIGlmIChkaWRTY3JvbGwpIHtcbiAgICAgIGRpZFNjcm9sbCA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBhY3RpdmUgPSBkb2MuYWN0aXZlRWxlbWVudDtcbiAgICBpZiAoIWFjdGl2ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBvbmx5IGJsdXIgaWYgdGhlIGFjdGl2ZSBlbGVtZW50IGlzIGEgdGV4dC1pbnB1dCBvciBhIHRleHRhcmVhXG4gICAgaWYgKGFjdGl2ZS5tYXRjaGVzKFNLSVBfU0VMRUNUT1IpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGlmIHRoZSBzZWxlY3RlZCB0YXJnZXQgaXMgdGhlIGFjdGl2ZSBlbGVtZW50LCBkbyBub3QgYmx1clxuICAgIGNvbnN0IHRhcHBlZCA9IGV2LnRhcmdldDtcbiAgICBpZiAodGFwcGVkID09PSBhY3RpdmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRhcHBlZC5tYXRjaGVzKFNLSVBfU0VMRUNUT1IpIHx8IHRhcHBlZC5jbG9zZXN0KFNLSVBfU0VMRUNUT1IpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvY3VzZWQgPSBmYWxzZTtcbiAgICAvLyBUT0RPIEZXLTI3OTY6IGZpbmQgYSBiZXR0ZXIgd2F5LCB3aHkgNTBtcz9cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICghZm9jdXNlZCkge1xuICAgICAgICBhY3RpdmUuYmx1cigpO1xuICAgICAgfVxuICAgIH0sIDUwKTtcbiAgfTtcbiAgYWRkRXZlbnRMaXN0ZW5lcihkb2MsICdpb25TY3JvbGxTdGFydCcsIG9uU2Nyb2xsKTtcbiAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCBvbkZvY3VzaW4sIHRydWUpO1xuICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvblRvdWNoZW5kLCBmYWxzZSk7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihkb2MsICdpb25TY3JvbGxTdGFydCcsIG9uU2Nyb2xsLCB0cnVlKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIG9uRm9jdXNpbiwgdHJ1ZSk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Ub3VjaGVuZCwgZmFsc2UpO1xuICB9O1xufTtcbmNvbnN0IFNDUk9MTF9BU1NJU1RfU1BFRUQgPSAwLjM7XG5jb25zdCBnZXRTY3JvbGxEYXRhID0gKGNvbXBvbmVudEVsLCBjb250ZW50RWwsIGtleWJvYXJkSGVpZ2h0LCBwbGF0Zm9ybUhlaWdodCkgPT4ge1xuICB2YXIgX2E7XG4gIGNvbnN0IGl0ZW1FbCA9IChfYSA9IGNvbXBvbmVudEVsLmNsb3Nlc3QoJ2lvbi1pdGVtLFtpb24taXRlbV0nKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogY29tcG9uZW50RWw7XG4gIHJldHVybiBjYWxjU2Nyb2xsRGF0YShpdGVtRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksIGNvbnRlbnRFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwga2V5Ym9hcmRIZWlnaHQsIHBsYXRmb3JtSGVpZ2h0KTtcbn07XG5jb25zdCBjYWxjU2Nyb2xsRGF0YSA9IChpbnB1dFJlY3QsIGNvbnRlbnRSZWN0LCBrZXlib2FyZEhlaWdodCwgcGxhdGZvcm1IZWlnaHQpID0+IHtcbiAgLy8gY29tcHV0ZSBpbnB1dCdzIFkgdmFsdWVzIHJlbGF0aXZlIHRvIHRoZSBib2R5XG4gIGNvbnN0IGlucHV0VG9wID0gaW5wdXRSZWN0LnRvcDtcbiAgY29uc3QgaW5wdXRCb3R0b20gPSBpbnB1dFJlY3QuYm90dG9tO1xuICAvLyBjb21wdXRlIHZpc2libGUgYXJlYVxuICBjb25zdCB2aXNpYmxlQXJlYVRvcCA9IGNvbnRlbnRSZWN0LnRvcDtcbiAgY29uc3QgdmlzaWJsZUFyZWFCb3R0b20gPSBNYXRoLm1pbihjb250ZW50UmVjdC5ib3R0b20sIHBsYXRmb3JtSGVpZ2h0IC0ga2V5Ym9hcmRIZWlnaHQpO1xuICAvLyBjb21wdXRlIHNhZmUgYXJlYVxuICBjb25zdCBzYWZlQXJlYVRvcCA9IHZpc2libGVBcmVhVG9wICsgMTU7XG4gIGNvbnN0IHNhZmVBcmVhQm90dG9tID0gdmlzaWJsZUFyZWFCb3R0b20gLSBTQ1JPTExfQU1PVU5UX1BBRERJTkc7XG4gIC8vIGZpZ3VyZSBvdXQgaWYgZWFjaCBlZGdlIG9mIHRoZSBpbnB1dCBpcyB3aXRoaW4gdGhlIHNhZmUgYXJlYVxuICBjb25zdCBkaXN0YW5jZVRvQm90dG9tID0gc2FmZUFyZWFCb3R0b20gLSBpbnB1dEJvdHRvbTtcbiAgY29uc3QgZGlzdGFuY2VUb1RvcCA9IHNhZmVBcmVhVG9wIC0gaW5wdXRUb3A7XG4gIC8vIGRlc2lyZWRTY3JvbGxBbW91bnQgaXMgdGhlIG5lZ2F0ZWQgZGlzdGFuY2UgdG8gdGhlIHNhZmUgYXJlYSBhY2NvcmRpbmcgdG8gb3VyIGNhbGN1bGF0aW9ucy5cbiAgY29uc3QgZGVzaXJlZFNjcm9sbEFtb3VudCA9IE1hdGgucm91bmQoZGlzdGFuY2VUb0JvdHRvbSA8IDAgPyAtZGlzdGFuY2VUb0JvdHRvbSA6IGRpc3RhbmNlVG9Ub3AgPiAwID8gLWRpc3RhbmNlVG9Ub3AgOiAwKTtcbiAgLy8gb3VyIGNhbGN1bGF0aW9ucyBtYWtlIHNvbWUgYXNzdW1wdGlvbnMgdGhhdCBhcmVuJ3QgYWx3YXlzIHRydWUsIGxpa2UgdGhlIGtleWJvYXJkIGJlaW5nIGNsb3NlZCB3aGVuIGFuIGlucHV0XG4gIC8vIGdldHMgZm9jdXMsIHNvIG1ha2Ugc3VyZSB3ZSBkb24ndCBzY3JvbGwgdGhlIGlucHV0IGFib3ZlIHRoZSB2aXNpYmxlIGFyZWFcbiAgY29uc3Qgc2Nyb2xsQW1vdW50ID0gTWF0aC5taW4oZGVzaXJlZFNjcm9sbEFtb3VudCwgaW5wdXRUb3AgLSB2aXNpYmxlQXJlYVRvcCk7XG4gIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5hYnMoc2Nyb2xsQW1vdW50KTtcbiAgY29uc3QgZHVyYXRpb24gPSBkaXN0YW5jZSAvIFNDUk9MTF9BU1NJU1RfU1BFRUQ7XG4gIGNvbnN0IHNjcm9sbER1cmF0aW9uID0gTWF0aC5taW4oNDAwLCBNYXRoLm1heCgxNTAsIGR1cmF0aW9uKSk7XG4gIHJldHVybiB7XG4gICAgc2Nyb2xsQW1vdW50LFxuICAgIHNjcm9sbER1cmF0aW9uLFxuICAgIHNjcm9sbFBhZGRpbmc6IGtleWJvYXJkSGVpZ2h0LFxuICAgIGlucHV0U2FmZVk6IC0oaW5wdXRUb3AgLSBzYWZlQXJlYVRvcCkgKyA0XG4gIH07XG59O1xuY29uc3QgUEFERElOR19USU1FUl9LRVkgPSAnJGlvblBhZGRpbmdUaW1lcic7XG4vKipcbiAqIFNjcm9sbCBwYWRkaW5nIGFkZHMgYWRkaXRpb25hbCBwYWRkaW5nIHRvIHRoZSBib3R0b21cbiAqIG9mIGlvbi1jb250ZW50IHNvIHRoYXQgdGhlcmUgaXMgZW5vdWdoIHNjcm9sbCBzcGFjZVxuICogZm9yIGFuIGlucHV0IHRvIGJlIHNjcm9sbGVkIGFib3ZlIHRoZSBrZXlib2FyZC4gVGhpc1xuICogaXMgbmVlZGVkIGluIGVudmlyb25tZW50cyB3aGVyZSB0aGUgd2VidmlldyBkb2VzIG5vdFxuICogcmVzaXplIHdoZW4gdGhlIGtleWJvYXJkIG9wZW5zLlxuICpcbiAqIEV4YW1wbGU6IElmIGFuIGlucHV0IGF0IHRoZSBib3R0b20gb2YgaW9uLWNvbnRlbnQgaXNcbiAqIGZvY3VzZWQsIHRoZXJlIGlzIG5vIGFkZGl0aW9uYWwgc2Nyb2xsaW5nIHNwYWNlIGJlbG93XG4gKiBpdCwgc28gdGhlIGlucHV0IGNhbm5vdCBiZSBzY3JvbGxlZCBhYm92ZSB0aGUga2V5Ym9hcmQuXG4gKiBTY3JvbGwgcGFkZGluZyBmaXhlcyB0aGlzIGJ5IGFkZGluZyBwYWRkaW5nIGVxdWFsIHRvIHRoZVxuICogaGVpZ2h0IG9mIHRoZSBrZXlib2FyZCB0byB0aGUgYm90dG9tIG9mIHRoZSBjb250ZW50LlxuICpcbiAqIENvbW1vbiBlbnZpcm9ubWVudHMgd2hlcmUgdGhpcyBpcyBuZWVkZWQ6XG4gKiAtIE1vYmlsZSBTYWZhcmk6IFRoZSBrZXlib2FyZCBvdmVybGF5cyB0aGUgY29udGVudFxuICogLSBDYXBhY2l0b3IvQ29yZG92YSBvbiBpT1M6IFRoZSBrZXlib2FyZCBvdmVybGF5cyB0aGUgY29udGVudFxuICogd2hlbiB0aGUgS2V5Ym9hcmRSZXNpemUgbW9kZSBpcyBzZXQgdG8gJ25vbmUnLlxuICovXG5jb25zdCBzZXRTY3JvbGxQYWRkaW5nID0gKGNvbnRlbnRFbCwgcGFkZGluZ0Ftb3VudCwgY2xlYXJDYWxsYmFjaykgPT4ge1xuICBjb25zdCB0aW1lciA9IGNvbnRlbnRFbFtQQURESU5HX1RJTUVSX0tFWV07XG4gIGlmICh0aW1lcikge1xuICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gIH1cbiAgaWYgKHBhZGRpbmdBbW91bnQgPiAwKSB7XG4gICAgY29udGVudEVsLnN0eWxlLnNldFByb3BlcnR5KCctLWtleWJvYXJkLW9mZnNldCcsIGAke3BhZGRpbmdBbW91bnR9cHhgKTtcbiAgfSBlbHNlIHtcbiAgICBjb250ZW50RWxbUEFERElOR19USU1FUl9LRVldID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb250ZW50RWwuc3R5bGUuc2V0UHJvcGVydHkoJy0ta2V5Ym9hcmQtb2Zmc2V0JywgJzBweCcpO1xuICAgICAgaWYgKGNsZWFyQ2FsbGJhY2spIHtcbiAgICAgICAgY2xlYXJDYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH0sIDEyMCk7XG4gIH1cbn07XG4vKipcbiAqIFdoZW4gYW4gaW5wdXQgaXMgYWJvdXQgdG8gYmUgZm9jdXNlZCxcbiAqIHNldCBhIHRpbWVvdXQgdG8gY2xlYXIgYW55IHNjcm9sbCBwYWRkaW5nXG4gKiBvbiB0aGUgY29udGVudC4gTm90ZTogVGhlIGNsZWFyaW5nXG4gKiBpcyBkb25lIG9uIGEgdGltZW91dCBzbyB0aGF0IGlmIHVzZXJzXG4gKiBhcmUgbW92aW5nIGZvY3VzIGZyb20gb25lIGlucHV0IHRvIHRoZSBuZXh0XG4gKiB0aGVuIHJlLWFkZGluZyBzY3JvbGwgcGFkZGluZyB0byB0aGUgbmV3XG4gKiBpbnB1dCB3aXRoIGNhbmNlbCB0aGUgdGltZW91dCB0byBjbGVhciB0aGVcbiAqIHNjcm9sbCBwYWRkaW5nLlxuICovXG5jb25zdCBzZXRDbGVhclNjcm9sbFBhZGRpbmdMaXN0ZW5lciA9IChpbnB1dEVsLCBjb250ZW50RWwsIGRvbmVDYWxsYmFjaykgPT4ge1xuICBjb25zdCBjbGVhclNjcm9sbFBhZGRpbmcgPSAoKSA9PiB7XG4gICAgaWYgKGNvbnRlbnRFbCkge1xuICAgICAgc2V0U2Nyb2xsUGFkZGluZyhjb250ZW50RWwsIDAsIGRvbmVDYWxsYmFjayk7XG4gICAgfVxuICB9O1xuICBpbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgY2xlYXJTY3JvbGxQYWRkaW5nLCB7XG4gICAgb25jZTogdHJ1ZVxuICB9KTtcbn07XG5sZXQgY3VycmVudFBhZGRpbmcgPSAwO1xuY29uc3QgU0tJUF9TQ1JPTExfQVNTSVNUID0gJ2RhdGEtaW9uaWMtc2tpcC1zY3JvbGwtYXNzaXN0JztcbmNvbnN0IGVuYWJsZVNjcm9sbEFzc2lzdCA9IChjb21wb25lbnRFbCwgaW5wdXRFbCwgY29udGVudEVsLCBmb290ZXJFbCwga2V5Ym9hcmRIZWlnaHQsIGVuYWJsZVNjcm9sbFBhZGRpbmcsIGtleWJvYXJkUmVzaXplLCBkaXNhYmxlQ2xvbmVkSW5wdXQgPSBmYWxzZSkgPT4ge1xuICAvKipcbiAgICogU2Nyb2xsIHBhZGRpbmcgc2hvdWxkIG9ubHkgYmUgYWRkZWQgaWY6XG4gICAqIDEuIFRoZSBnbG9iYWwgc2Nyb2xsUGFkZGluZyBjb25maWcgb3B0aW9uXG4gICAqIGlzIHNldCB0byB0cnVlLlxuICAgKiAyLiBUaGUgbmF0aXZlIGtleWJvYXJkIHJlc2l6ZSBtb2RlIGlzIGVpdGhlciBcIm5vbmVcIlxuICAgKiAoa2V5Ym9hcmQgb3ZlcmxheXMgd2Vidmlldykgb3IgdW5kZWZpbmVkIChyZXNpemVcbiAgICogaW5mb3JtYXRpb24gdW5hdmFpbGFibGUpXG4gICAqIFJlc2l6ZSBpbmZvIGlzIGF2YWlsYWJsZSBvbiBDYXBhY2l0b3IgNCtcbiAgICovXG4gIGNvbnN0IGFkZFNjcm9sbFBhZGRpbmcgPSBlbmFibGVTY3JvbGxQYWRkaW5nICYmIChrZXlib2FyZFJlc2l6ZSA9PT0gdW5kZWZpbmVkIHx8IGtleWJvYXJkUmVzaXplLm1vZGUgPT09IEtleWJvYXJkUmVzaXplLk5vbmUpO1xuICAvKipcbiAgICogVGhpcyB0cmFja3Mgd2hldGhlciBvciBub3QgdGhlIGtleWJvYXJkIGhhcyBiZWVuXG4gICAqIHByZXNlbnRlZCBmb3IgYSBzaW5nbGUgZm9jdXNlZCB0ZXh0IGZpZWxkLiBOb3RlXG4gICAqIHRoYXQgaXQgZG9lcyBub3QgdHJhY2sgaWYgdGhlIGtleWJvYXJkIGlzIG9wZW5cbiAgICogaW4gZ2VuZXJhbCBzdWNoIGFzIGlmIHRoZSBrZXlib2FyZCBpcyBvcGVuIGZvclxuICAgKiBhIGRpZmZlcmVudCBmb2N1c2VkIHRleHQgZmllbGQuXG4gICAqL1xuICBsZXQgaGFzS2V5Ym9hcmRCZWVuUHJlc2VudGVkRm9yVGV4dEZpZWxkID0gZmFsc2U7XG4gIC8qKlxuICAgKiBXaGVuIGFkZGluZyBzY3JvbGwgcGFkZGluZyB3ZSBuZWVkIHRvIGtub3dcbiAgICogaG93IG11Y2ggb2YgdGhlIHZpZXdwb3J0IHRoZSBrZXlib2FyZCBvYnNjdXJlcy5cbiAgICogV2UgZG8gdGhpcyBieSBzdWJ0cmFjdGluZyB0aGUga2V5Ym9hcmQgaGVpZ2h0XG4gICAqIGZyb20gdGhlIHBsYXRmb3JtIGhlaWdodC5cbiAgICpcbiAgICogSWYgd2UgY29tcHV0ZSB0aGlzIHZhbHVlIHdoZW4gc3dpdGNoaW5nIGJldHdlZW5cbiAgICogaW5wdXRzIHRoZW4gdGhlIHdlYnZpZXcgbWF5IGFscmVhZHkgYmUgcmVzaXplZC5cbiAgICogQXQgdGhpcyBwb2ludCwgYHdpbi5pbm5lckhlaWdodGAgaGFzIGFscmVhZHkgYWNjb3VudGVkXG4gICAqIGZvciB0aGUga2V5Ym9hcmQgbWVhbmluZyB3ZSB3b3VsZCB0aGVuIHN1YnRyYWN0XG4gICAqIHRoZSBrZXlib2FyZCBoZWlnaHQgYWdhaW4uIFRoaXMgd2lsbCByZXN1bHQgaW4gdGhlIGlucHV0XG4gICAqIGJlaW5nIHNjcm9sbGVkIG1vcmUgdGhhbiBpdCBuZWVkcyB0by5cbiAgICovXG4gIGNvbnN0IHBsYXRmb3JtSGVpZ2h0ID0gd2luICE9PSB1bmRlZmluZWQgPyB3aW4uaW5uZXJIZWlnaHQgOiAwO1xuICAvKipcbiAgICogU2Nyb2xsIGFzc2lzdCBpcyBydW4gd2hlbiBhIHRleHQgZmllbGRcbiAgICogaXMgZm9jdXNlZC4gSG93ZXZlciwgaXQgbWF5IG5lZWQgdG9cbiAgICogcmUtcnVuIHdoZW4gdGhlIGtleWJvYXJkIHNpemUgY2hhbmdlc1xuICAgKiBzdWNoIHRoYXQgdGhlIHRleHQgZmllbGQgaXMgbm93IGhpZGRlblxuICAgKiB1bmRlcm5lYXRoIHRoZSBrZXlib2FyZC5cbiAgICogVGhpcyBmdW5jdGlvbiByZS1ydW5zIHNjcm9sbCBhc3Npc3RcbiAgICogd2hlbiB0aGF0IGhhcHBlbnMuXG4gICAqXG4gICAqIE9uZSBsaW1pdGF0aW9uIG9mIHRoaXMgaXMgb24gYSB3ZWIgYnJvd3NlclxuICAgKiB3aGVyZSBuYXRpdmUga2V5Ym9hcmQgQVBJcyBkbyBub3QgaGF2ZSBjcm9zcy1icm93c2VyXG4gICAqIHN1cHBvcnQuIGBpb25LZXlib2FyZERpZFNob3dgIHJlbGllcyBvbiB0aGUgVmlzdWFsIFZpZXdwb3J0IEFQSS5cbiAgICogVGhpcyBtZWFucyB0aGF0IGlmIHRoZSBrZXlib2FyZCBjaGFuZ2VzIGJ1dCBkb2VzIG5vdCBjaGFuZ2VcbiAgICogZ2VvbWV0cnksIHRoZW4gc2Nyb2xsIGFzc2lzdCB3aWxsIG5vdCByZS1ydW4gZXZlbiBpZlxuICAgKiB0aGUgdXNlciBoYXMgc2Nyb2xsZWQgdGhlIHRleHQgZmllbGQgdW5kZXIgdGhlIGtleWJvYXJkLlxuICAgKiBUaGlzIGlzIG5vdCBhIHByb2JsZW0gd2hlbiBydW5uaW5nIGluIENvcmRvdmEvQ2FwYWNpdG9yXG4gICAqIGJlY2F1c2UgYGlvbktleWJvYXJkRGlkU2hvd2AgdXNlcyB0aGUgbmF0aXZlIGV2ZW50c1xuICAgKiB3aGljaCBmaXJlIGV2ZXJ5IHRpbWUgdGhlIGtleWJvYXJkIGNoYW5nZXMuXG4gICAqL1xuICBjb25zdCBrZXlib2FyZFNob3cgPSBldiA9PiB7XG4gICAgLyoqXG4gICAgICogSWYgdGhlIGtleWJvYXJkIGhhcyBub3QgeWV0IGJlZW4gcHJlc2VudGVkXG4gICAgICogZm9yIHRoaXMgdGV4dCBmaWVsZCB0aGVuIHRoZSB0ZXh0IGZpZWxkIGhhcyBqdXN0XG4gICAgICogcmVjZWl2ZWQgZm9jdXMuIEluIHRoYXQgY2FzZSwgdGhlIGZvY3VzaW4gbGlzdGVuZXJcbiAgICAgKiB3aWxsIHJ1biBzY3JvbGwgYXNzaXN0LlxuICAgICAqL1xuICAgIGlmIChoYXNLZXlib2FyZEJlZW5QcmVzZW50ZWRGb3JUZXh0RmllbGQgPT09IGZhbHNlKSB7XG4gICAgICBoYXNLZXlib2FyZEJlZW5QcmVzZW50ZWRGb3JUZXh0RmllbGQgPSB0cnVlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBPdGhlcndpc2UsIHRoZSBrZXlib2FyZCBoYXMgYWxyZWFkeSBiZWVuIHByZXNlbnRlZFxuICAgICAqIGZvciB0aGUgZm9jdXNlZCB0ZXh0IGZpZWxkLlxuICAgICAqIFRoaXMgbWVhbnMgdGhhdCB0aGUga2V5Ym9hcmQgbGlrZWx5IGNoYW5nZWRcbiAgICAgKiBnZW9tZXRyeSwgYW5kIHdlIG5lZWQgdG8gcmUtcnVuIHNjcm9sbCBhc3Npc3QuXG4gICAgICogVGhpcyBjYW4gaGFwcGVuIHdoZW4gdGhlIHVzZXIgcm90YXRlcyB0aGVpciBkZXZpY2VcbiAgICAgKiBvciB3aGVuIHRoZXkgc3dpdGNoIGtleWJvYXJkcy5cbiAgICAgKlxuICAgICAqIE1ha2Ugc3VyZSB3ZSBwYXNzIGluIHRoZSBjb21wdXRlZCBrZXlib2FyZCBoZWlnaHRcbiAgICAgKiByYXRoZXIgdGhhbiB0aGUgZXN0aW1hdGVkIGtleWJvYXJkIGhlaWdodC5cbiAgICAgKlxuICAgICAqIFNpbmNlIHRoZSBrZXlib2FyZCBpcyBhbHJlYWR5IG9wZW4gdGhlbiB3ZSBkbyBub3RcbiAgICAgKiBuZWVkIHRvIHdhaXQgZm9yIHRoZSB3ZWJ2aWV3IHRvIHJlc2l6ZSwgc28gd2UgcGFzc1xuICAgICAqIFwid2FpdEZvclJlc2l6ZTogZmFsc2VcIi5cbiAgICAgKi9cbiAgICBqc1NldEZvY3VzKGNvbXBvbmVudEVsLCBpbnB1dEVsLCBjb250ZW50RWwsIGZvb3RlckVsLCBldi5kZXRhaWwua2V5Ym9hcmRIZWlnaHQsIGFkZFNjcm9sbFBhZGRpbmcsIGRpc2FibGVDbG9uZWRJbnB1dCwgcGxhdGZvcm1IZWlnaHQsIGZhbHNlKTtcbiAgfTtcbiAgLyoqXG4gICAqIFJlc2V0IHRoZSBpbnRlcm5hbCBzdGF0ZSB3aGVuIHRoZSB0ZXh0IGZpZWxkIGxvc2VzIGZvY3VzLlxuICAgKi9cbiAgY29uc3QgZm9jdXNPdXQgPSAoKSA9PiB7XG4gICAgaGFzS2V5Ym9hcmRCZWVuUHJlc2VudGVkRm9yVGV4dEZpZWxkID0gZmFsc2U7XG4gICAgd2luID09PSBudWxsIHx8IHdpbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogd2luLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lvbktleWJvYXJkRGlkU2hvdycsIGtleWJvYXJkU2hvdyk7XG4gICAgY29tcG9uZW50RWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBmb2N1c091dCk7XG4gIH07XG4gIC8qKlxuICAgKiBXaGVuIHRoZSBpbnB1dCBpcyBhYm91dCB0byByZWNlaXZlXG4gICAqIGZvY3VzLCB3ZSBuZWVkIHRvIG1vdmUgaXQgdG8gcHJldmVudFxuICAgKiBtb2JpbGUgU2FmYXJpIGZyb20gYWRqdXN0aW5nIHRoZSB2aWV3cG9ydC5cbiAgICovXG4gIGNvbnN0IGZvY3VzSW4gPSBhc3luYyAoKSA9PiB7XG4gICAgLyoqXG4gICAgICogU2Nyb2xsIGFzc2lzdCBzaG91bGQgbm90IHJ1biBhZ2FpblxuICAgICAqIG9uIGlucHV0cyB0aGF0IGhhdmUgYmVlbiBtYW51YWxseVxuICAgICAqIGZvY3VzZWQgaW5zaWRlIG9mIHRoZSBzY3JvbGwgYXNzaXN0XG4gICAgICogaW1wbGVtZW50YXRpb24uXG4gICAgICovXG4gICAgaWYgKGlucHV0RWwuaGFzQXR0cmlidXRlKFNLSVBfU0NST0xMX0FTU0lTVCkpIHtcbiAgICAgIGlucHV0RWwucmVtb3ZlQXR0cmlidXRlKFNLSVBfU0NST0xMX0FTU0lTVCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGpzU2V0Rm9jdXMoY29tcG9uZW50RWwsIGlucHV0RWwsIGNvbnRlbnRFbCwgZm9vdGVyRWwsIGtleWJvYXJkSGVpZ2h0LCBhZGRTY3JvbGxQYWRkaW5nLCBkaXNhYmxlQ2xvbmVkSW5wdXQsIHBsYXRmb3JtSGVpZ2h0KTtcbiAgICB3aW4gPT09IG51bGwgfHwgd2luID09PSB2b2lkIDAgPyB2b2lkIDAgOiB3aW4uYWRkRXZlbnRMaXN0ZW5lcignaW9uS2V5Ym9hcmREaWRTaG93Jywga2V5Ym9hcmRTaG93KTtcbiAgICBjb21wb25lbnRFbC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIGZvY3VzT3V0KTtcbiAgfTtcbiAgY29tcG9uZW50RWwuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIGZvY3VzSW4pO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGNvbXBvbmVudEVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCBmb2N1c0luKTtcbiAgICB3aW4gPT09IG51bGwgfHwgd2luID09PSB2b2lkIDAgPyB2b2lkIDAgOiB3aW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW9uS2V5Ym9hcmREaWRTaG93Jywga2V5Ym9hcmRTaG93KTtcbiAgICBjb21wb25lbnRFbC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIGZvY3VzT3V0KTtcbiAgfTtcbn07XG4vKipcbiAqIFVzZSB0aGlzIGZ1bmN0aW9uIHdoZW4geW91IHdhbnQgdG8gbWFudWFsbHlcbiAqIGZvY3VzIGFuIGlucHV0IGJ1dCBub3QgaGF2ZSBzY3JvbGwgYXNzaXN0IHJ1biBhZ2Fpbi5cbiAqL1xuY29uc3Qgc2V0TWFudWFsRm9jdXMgPSBlbCA9PiB7XG4gIHZhciBfYTtcbiAgLyoqXG4gICAqIElmIGVsZW1lbnQgaXMgYWxyZWFkeSBmb2N1c2VkIHRoZW5cbiAgICogYSBuZXcgZm9jdXNpbiBldmVudCB3aWxsIG5vdCBiZSBkaXNwYXRjaGVkXG4gICAqIHRvIHJlbW92ZSB0aGUgU0tJTF9TQ1JPTExfQVNTSVNUIGF0dHJpYnV0ZS5cbiAgICovXG4gIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBlbCkge1xuICAgIHJldHVybjtcbiAgfVxuICAvKipcbiAgICogT3B0aW1pemF0aW9uIGZvciBzY2VuYXJpb3Mgd2hlcmUgdGhlIGN1cnJlbnRseSBmb2N1c2VkIGVsZW1lbnQgaXMgYSBzaWJsaW5nXG4gICAqIG9mIHRoZSB0YXJnZXQgZWxlbWVudC4gSW4gc3VjaCBjYXNlcywgd2UgYXZvaWQgc2V0dGluZyBgU0tJUF9TQ1JPTExfQVNTSVNUYC5cbiAgICpcbiAgICogVGhpcyBpcyBjcnVjaWFsIGZvciBhY2Nlc3NpYmlsaXR5OiBpbnB1dCBlbGVtZW50cyBjYW4gbm93IGNvbnRhaW4gZm9jdXNhYmxlXG4gICAqIHNpYmxpbmdzIChlLmcuLCBjbGVhciBidXR0b25zLCBzbG90dGVkIGVsZW1lbnRzKS4gSWYgd2UgZGlkbid0IHNraXAgc2V0dGluZ1xuICAgKiB0aGUgYXR0cmlidXRlIGhlcmUsIHNjcmVlbiByZWFkZXJzIHdvdWxkIGJlIHVuYWJsZSB0byBuYXZpZ2F0ZSB0byBhbmQgaW50ZXJhY3RcbiAgICogd2l0aCB0aGVzZSBzaWJsaW5nIGVsZW1lbnRzLlxuICAgKlxuICAgKiBXaXRob3V0IHRoaXMgY2hlY2ssIHdlIHdvdWxkIG5lZWQgdG8gY2FsbCBgZXYuc3RvcFByb3BhZ2F0aW9uKClgIG9uIHRoZVxuICAgKiAnZm9jdXNpbicgZXZlbnQgb2YgZWFjaCBmb2N1c2FibGUgc2libGluZyB0byBwcmV2ZW50IHRoZSBzY3JvbGwgYXNzaXN0XG4gICAqIGxpc3RlbmVyIGZyb20gaW5jb3JyZWN0bHkgbW92aW5nIGZvY3VzIGJhY2sgdG8gdGhlIGlucHV0LiBUaGF0IGFwcHJvYWNoXG4gICAqIHdvdWxkIGJlIGxlc3MgbWFpbnRhaW5hYmxlIGFuZCBtb3JlIGVycm9yLXByb25lLlxuICAgKi9cbiAgY29uc3QgaW5wdXRJZCA9IGVsLmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgY29uc3QgbGFiZWwgPSBlbC5jbG9zZXN0KGBsYWJlbFtmb3I9XCIke2lucHV0SWR9XCJdYCk7XG4gIGNvbnN0IGFjdGl2ZUVsTGFiZWwgPSAoX2EgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2xvc2VzdChgbGFiZWxbZm9yPVwiJHtpbnB1dElkfVwiXWApO1xuICBpZiAobGFiZWwgIT09IG51bGwgJiYgbGFiZWwgPT09IGFjdGl2ZUVsTGFiZWwpIHtcbiAgICAvLyBJZiB0aGUgbGFiZWwgaXMgdGhlIHNhbWUgYXMgdGhlIGFjdGl2ZSBlbGVtZW50IGxhYmVsLCB0aGVuXG4gICAgLy8gd2UgZG9uJ3QgbmVlZCB0byBzZXQgdGhlIGBTS0lQX1NDUk9MTF9BU1NJU1RgIGFuZCByZXNldCBmb2N1cy5cbiAgICByZXR1cm47XG4gIH1cbiAgZWwuc2V0QXR0cmlidXRlKFNLSVBfU0NST0xMX0FTU0lTVCwgJ3RydWUnKTtcbiAgZWwuZm9jdXMoKTtcbn07XG5jb25zdCBqc1NldEZvY3VzID0gYXN5bmMgKGNvbXBvbmVudEVsLCBpbnB1dEVsLCBjb250ZW50RWwsIGZvb3RlckVsLCBrZXlib2FyZEhlaWdodCwgZW5hYmxlU2Nyb2xsUGFkZGluZywgZGlzYWJsZUNsb25lZElucHV0ID0gZmFsc2UsIHBsYXRmb3JtSGVpZ2h0ID0gMCwgd2FpdEZvclJlc2l6ZSA9IHRydWUpID0+IHtcbiAgaWYgKCFjb250ZW50RWwgJiYgIWZvb3RlckVsKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHNjcm9sbERhdGEgPSBnZXRTY3JvbGxEYXRhKGNvbXBvbmVudEVsLCBjb250ZW50RWwgfHwgZm9vdGVyRWwsIGtleWJvYXJkSGVpZ2h0LCBwbGF0Zm9ybUhlaWdodCk7XG4gIGlmIChjb250ZW50RWwgJiYgTWF0aC5hYnMoc2Nyb2xsRGF0YS5zY3JvbGxBbW91bnQpIDwgNCkge1xuICAgIC8vIHRoZSB0ZXh0IGlucHV0IGlzIGluIGEgc2FmZSBwb3NpdGlvbiB0aGF0IGRvZXNuJ3RcbiAgICAvLyByZXF1aXJlIGl0IHRvIGJlIHNjcm9sbGVkIGludG8gdmlldywganVzdCBzZXQgZm9jdXMgbm93XG4gICAgc2V0TWFudWFsRm9jdXMoaW5wdXRFbCk7XG4gICAgLyoqXG4gICAgICogRXZlbiB0aG91Z2ggdGhlIGlucHV0IGRvZXMgbm90IG5lZWRcbiAgICAgKiBzY3JvbGwgYXNzaXN0LCB3ZSBzaG91bGQgcHJlc2VydmUgdGhlXG4gICAgICogdGhlIHNjcm9sbCBwYWRkaW5nIGFzIHVzZXJzIGNvdWxkIGJlIG1vdmluZ1xuICAgICAqIGZvY3VzIGZyb20gYW4gaW5wdXQgdGhhdCBuZWVkcyBzY3JvbGwgcGFkZGluZ1xuICAgICAqIHRvIGFuIGlucHV0IHRoYXQgZG9lcyBub3QgbmVlZCBzY3JvbGwgcGFkZGluZy5cbiAgICAgKiBJZiB3ZSByZW1vdmUgdGhlIHNjcm9sbCBwYWRkaW5nIG5vdywgdXNlcnMgd2lsbFxuICAgICAqIHNlZSB0aGUgcGFnZSBqdW1wLlxuICAgICAqL1xuICAgIGlmIChlbmFibGVTY3JvbGxQYWRkaW5nICYmIGNvbnRlbnRFbCAhPT0gbnVsbCkge1xuICAgICAgc2V0U2Nyb2xsUGFkZGluZyhjb250ZW50RWwsIGN1cnJlbnRQYWRkaW5nKTtcbiAgICAgIHNldENsZWFyU2Nyb2xsUGFkZGluZ0xpc3RlbmVyKGlucHV0RWwsIGNvbnRlbnRFbCwgKCkgPT4gY3VycmVudFBhZGRpbmcgPSAwKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIHRlbXBvcmFyaWx5IG1vdmUgdGhlIGZvY3VzIHRvIHRoZSBmb2N1cyBob2xkZXIgc28gdGhlIGJyb3dzZXJcbiAgLy8gZG9lc24ndCBmcmVhayBvdXQgd2hpbGUgaXQncyB0cnlpbmcgdG8gZ2V0IHRoZSBpbnB1dCBpbiBwbGFjZVxuICAvLyBhdCB0aGlzIHBvaW50IHRoZSBuYXRpdmUgdGV4dCBpbnB1dCBzdGlsbCBkb2VzIG5vdCBoYXZlIGZvY3VzXG4gIHJlbG9jYXRlSW5wdXQoY29tcG9uZW50RWwsIGlucHV0RWwsIHRydWUsIHNjcm9sbERhdGEuaW5wdXRTYWZlWSwgZGlzYWJsZUNsb25lZElucHV0KTtcbiAgc2V0TWFudWFsRm9jdXMoaW5wdXRFbCk7XG4gIC8qKlxuICAgKiBSZWxvY2F0aW5nL0ZvY3VzaW5nIGlucHV0IGNhdXNlcyB0aGVcbiAgICogY2xpY2sgZXZlbnQgdG8gYmUgY2FuY2VsbGVkLCBzb1xuICAgKiBtYW51YWxseSBmaXJlIG9uZSBoZXJlLlxuICAgKi9cbiAgcmFmKCgpID0+IGNvbXBvbmVudEVsLmNsaWNrKCkpO1xuICAvKipcbiAgICogSWYgZW5hYmxlZCwgd2UgY2FuIGFkZCBzY3JvbGwgcGFkZGluZyB0b1xuICAgKiB0aGUgYm90dG9tIG9mIHRoZSBjb250ZW50IHNvIHRoYXQgc2Nyb2xsIGFzc2lzdFxuICAgKiBoYXMgZW5vdWdoIHJvb20gdG8gc2Nyb2xsIHRoZSBpbnB1dCBhYm92ZVxuICAgKiB0aGUga2V5Ym9hcmQuXG4gICAqL1xuICBpZiAoZW5hYmxlU2Nyb2xsUGFkZGluZyAmJiBjb250ZW50RWwpIHtcbiAgICBjdXJyZW50UGFkZGluZyA9IHNjcm9sbERhdGEuc2Nyb2xsUGFkZGluZztcbiAgICBzZXRTY3JvbGxQYWRkaW5nKGNvbnRlbnRFbCwgY3VycmVudFBhZGRpbmcpO1xuICB9XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGxldCBzY3JvbGxDb250ZW50VGltZW91dDtcbiAgICBjb25zdCBzY3JvbGxDb250ZW50ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgLy8gY2xlYW4gdXAgbGlzdGVuZXJzIGFuZCB0aW1lb3V0c1xuICAgICAgaWYgKHNjcm9sbENvbnRlbnRUaW1lb3V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHNjcm9sbENvbnRlbnRUaW1lb3V0KTtcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdpb25LZXlib2FyZERpZFNob3cnLCBkb3VibGVLZXlib2FyZEV2ZW50TGlzdGVuZXIpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lvbktleWJvYXJkRGlkU2hvdycsIHNjcm9sbENvbnRlbnQpO1xuICAgICAgLy8gc2Nyb2xsIHRoZSBpbnB1dCBpbnRvIHBsYWNlXG4gICAgICBpZiAoY29udGVudEVsKSB7XG4gICAgICAgIGF3YWl0IHNjcm9sbEJ5UG9pbnQoY29udGVudEVsLCAwLCBzY3JvbGxEYXRhLnNjcm9sbEFtb3VudCwgc2Nyb2xsRGF0YS5zY3JvbGxEdXJhdGlvbik7XG4gICAgICB9XG4gICAgICAvLyB0aGUgc2Nyb2xsIHZpZXcgaXMgaW4gdGhlIGNvcnJlY3QgcG9zaXRpb24gbm93XG4gICAgICAvLyBnaXZlIHRoZSBuYXRpdmUgdGV4dCBpbnB1dCBmb2N1c1xuICAgICAgcmVsb2NhdGVJbnB1dChjb21wb25lbnRFbCwgaW5wdXRFbCwgZmFsc2UsIHNjcm9sbERhdGEuaW5wdXRTYWZlWSk7XG4gICAgICAvLyBlbnN1cmUgdGhpcyBpcyB0aGUgZm9jdXNlZCBpbnB1dFxuICAgICAgc2V0TWFudWFsRm9jdXMoaW5wdXRFbCk7XG4gICAgICAvKipcbiAgICAgICAqIFdoZW4gdGhlIGlucHV0IGlzIGFib3V0IHRvIGJlIGJsdXJyZWRcbiAgICAgICAqIHdlIHNob3VsZCBzZXQgYSB0aW1lb3V0IHRvIHJlbW92ZVxuICAgICAgICogYW55IHNjcm9sbCBwYWRkaW5nLlxuICAgICAgICovXG4gICAgICBpZiAoZW5hYmxlU2Nyb2xsUGFkZGluZykge1xuICAgICAgICBzZXRDbGVhclNjcm9sbFBhZGRpbmdMaXN0ZW5lcihpbnB1dEVsLCBjb250ZW50RWwsICgpID0+IGN1cnJlbnRQYWRkaW5nID0gMCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBkb3VibGVLZXlib2FyZEV2ZW50TGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW9uS2V5Ym9hcmREaWRTaG93JywgZG91YmxlS2V5Ym9hcmRFdmVudExpc3RlbmVyKTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdpb25LZXlib2FyZERpZFNob3cnLCBzY3JvbGxDb250ZW50KTtcbiAgICB9O1xuICAgIGlmIChjb250ZW50RWwpIHtcbiAgICAgIGNvbnN0IHNjcm9sbEVsID0gYXdhaXQgZ2V0U2Nyb2xsRWxlbWVudChjb250ZW50RWwpO1xuICAgICAgLyoqXG4gICAgICAgKiBzY3JvbGxEYXRhIHdpbGwgb25seSBjb25zaWRlciB0aGUgYW1vdW50IHdlIG5lZWRcbiAgICAgICAqIHRvIHNjcm9sbCBpbiBvcmRlciB0byBwcm9wZXJseSBicmluZyB0aGUgaW5wdXRcbiAgICAgICAqIGludG8gdmlldy4gSXQgd2lsbCBub3QgY29uc2lkZXIgdGhlIGFtb3VudFxuICAgICAgICogd2UgY2FuIHNjcm9sbCBpbiB0aGUgY29udGVudCBlbGVtZW50LlxuICAgICAgICogQXMgYSByZXN1bHQsIHNjcm9sbERhdGEgbWF5IHJlcXVlc3QgYSBncmVhdGVyXG4gICAgICAgKiBzY3JvbGwgcG9zaXRpb24gdGhhbiBpcyBjdXJyZW50bHkgYXZhaWxhYmxlXG4gICAgICAgKiBpbiB0aGUgRE9NLiBJZiB0aGlzIGlzIHRoZSBjYXNlLCB3ZSBuZWVkIHRvXG4gICAgICAgKiB3YWl0IGZvciB0aGUgd2VidmlldyB0byByZXNpemUvdGhlIGtleWJvYXJkXG4gICAgICAgKiB0byBzaG93IGluIG9yZGVyIGZvciBhZGRpdGlvbmFsIHNjcm9sbFxuICAgICAgICogYmFuZHdpZHRoIHRvIGJlY29tZSBhdmFpbGFibGUuXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IHRvdGFsU2Nyb2xsQW1vdW50ID0gc2Nyb2xsRWwuc2Nyb2xsSGVpZ2h0IC0gc2Nyb2xsRWwuY2xpZW50SGVpZ2h0O1xuICAgICAgaWYgKHdhaXRGb3JSZXNpemUgJiYgc2Nyb2xsRGF0YS5zY3JvbGxBbW91bnQgPiB0b3RhbFNjcm9sbEFtb3VudCAtIHNjcm9sbEVsLnNjcm9sbFRvcCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogT24gaU9TIGRldmljZXMsIHRoZSBzeXN0ZW0gd2lsbCBzaG93IGEgXCJQYXNzd29yZHNcIiBiYXIgYWJvdmUgdGhlIGtleWJvYXJkXG4gICAgICAgICAqIGFmdGVyIHRoZSBpbml0aWFsIGtleWJvYXJkIGlzIHNob3duLiBUaGlzIHByZXZlbnRzIHRoZSB3ZWJ2aWV3IGZyb20gcmVzaXppbmdcbiAgICAgICAgICogdW50aWwgdGhlIFwiUGFzc3dvcmRzXCIgYmFyIGlzIHNob3duLCBzbyB3ZSBuZWVkIHRvIHdhaXQgZm9yIHRoYXQgdG8gaGFwcGVuIGZpcnN0LlxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKGlucHV0RWwudHlwZSA9PT0gJ3Bhc3N3b3JkJykge1xuICAgICAgICAgIC8vIEFkZCA1MHB4IHRvIGFjY291bnQgZm9yIHRoZSBcIlBhc3N3b3Jkc1wiIGJhclxuICAgICAgICAgIHNjcm9sbERhdGEuc2Nyb2xsQW1vdW50ICs9IFNDUk9MTF9BTU9VTlRfUEFERElORztcbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaW9uS2V5Ym9hcmREaWRTaG93JywgZG91YmxlS2V5Ym9hcmRFdmVudExpc3RlbmVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaW9uS2V5Ym9hcmREaWRTaG93Jywgc2Nyb2xsQ29udGVudCk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgc2hvdWxkIG9ubHkgZmlyZSBpbiAyIGluc3RhbmNlczpcbiAgICAgICAgICogMS4gVGhlIGFwcCBpcyB2ZXJ5IHNsb3cuXG4gICAgICAgICAqIDIuIFRoZSBhcHAgaXMgcnVubmluZyBpbiBhIGJyb3dzZXIgb24gYW4gb2xkIE9TXG4gICAgICAgICAqIHRoYXQgZG9lcyBub3Qgc3VwcG9ydCBJb25pYyBLZXlib2FyZCBFdmVudHNcbiAgICAgICAgICovXG4gICAgICAgIHNjcm9sbENvbnRlbnRUaW1lb3V0ID0gc2V0VGltZW91dChzY3JvbGxDb250ZW50LCAxMDAwKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBzY3JvbGxDb250ZW50KCk7XG4gIH1cbn07XG5jb25zdCBJTlBVVF9CTFVSUklORyA9IHRydWU7XG5jb25zdCBzdGFydElucHV0U2hpbXMgPSBhc3luYyAoY29uZmlnLCBwbGF0Zm9ybSkgPT4ge1xuICAvKipcbiAgICogSWYgZG9jIGlzIHVuZGVmaW5lZCB0aGVuIHdlIGFyZSBpbiBhbiBTU1IgZW52aXJvbm1lbnRcbiAgICogd2hlcmUgaW5wdXQgc2hpbXMgZG8gbm90IGFwcGx5LlxuICAgKi9cbiAgaWYgKGRvYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGlzSU9TID0gcGxhdGZvcm0gPT09ICdpb3MnO1xuICBjb25zdCBpc0FuZHJvaWQgPSBwbGF0Zm9ybSA9PT0gJ2FuZHJvaWQnO1xuICAvKipcbiAgICogSGlkZSBDYXJldCBhbmQgSW5wdXQgQmx1cnJpbmcgYXJlIG5lZWRlZCBvbiBpT1MuXG4gICAqIFNjcm9sbCBBc3Npc3QgYW5kIFNjcm9sbCBQYWRkaW5nIGFyZSBuZWVkZWQgb24gaU9TIGFuZCBBbmRyb2lkXG4gICAqIHdpdGggQ2hyb21lIHdlYiBicm93c2VyIChub3QgQ2hyb21lIHdlYnZpZXcpLlxuICAgKi9cbiAgY29uc3Qga2V5Ym9hcmRIZWlnaHQgPSBjb25maWcuZ2V0TnVtYmVyKCdrZXlib2FyZEhlaWdodCcsIDI5MCk7XG4gIGNvbnN0IHNjcm9sbEFzc2lzdCA9IGNvbmZpZy5nZXRCb29sZWFuKCdzY3JvbGxBc3Npc3QnLCB0cnVlKTtcbiAgY29uc3QgaGlkZUNhcmV0ID0gY29uZmlnLmdldEJvb2xlYW4oJ2hpZGVDYXJldE9uU2Nyb2xsJywgaXNJT1MpO1xuICAvKipcbiAgICogVGhlIHRlYW0gaXMgZXZhbHVhdGluZyBpZiBpbnB1dEJsdXJyaW5nIGlzIHN0aWxsIG5lZWRlZC4gQXMgYSByZXN1bHRcbiAgICogdGhpcyBmZWF0dXJlIGlzIGRpc2FibGVkIGJ5IGRlZmF1bHQgYXMgb2YgSW9uaWMgOC4wLiBEZXZlbG9wZXJzIGFyZVxuICAgKiBhYmxlIHRvIHJlLWVuYWJsZSBpdCB0ZW1wb3JhcmlseS4gVGhlIHRlYW0gbWF5IHJlbW92ZSB0aGlzIHV0aWxpdHlcbiAgICogaWYgaXQgaXMgZGV0ZXJtaW5lZCB0aGF0IGRvaW5nIHNvIHdvdWxkIG5vdCBicmluZyBhbnkgYWR2ZXJzZSBzaWRlIGVmZmVjdHMuXG4gICAqIFRPRE8gRlctNjAxNCByZW1vdmUgaW5wdXQgYmx1cnJpbmcgdXRpbGl0eSAoaW5jbHVkaW5nIGltcGxlbWVudGF0aW9uKVxuICAgKi9cbiAgY29uc3QgaW5wdXRCbHVycmluZyA9IGNvbmZpZy5nZXRCb29sZWFuKCdpbnB1dEJsdXJyaW5nJywgZmFsc2UpO1xuICBjb25zdCBzY3JvbGxQYWRkaW5nID0gY29uZmlnLmdldEJvb2xlYW4oJ3Njcm9sbFBhZGRpbmcnLCB0cnVlKTtcbiAgY29uc3QgaW5wdXRzID0gQXJyYXkuZnJvbShkb2MucXVlcnlTZWxlY3RvckFsbCgnaW9uLWlucHV0LCBpb24tdGV4dGFyZWEnKSk7XG4gIGNvbnN0IGhpZGVDYXJldE1hcCA9IG5ldyBXZWFrTWFwKCk7XG4gIGNvbnN0IHNjcm9sbEFzc2lzdE1hcCA9IG5ldyBXZWFrTWFwKCk7XG4gIC8qKlxuICAgKiBHcmFiIHRoZSBuYXRpdmUga2V5Ym9hcmQgcmVzaXplIGNvbmZpZ3VyYXRpb25cbiAgICogYW5kIHBhc3MgaXQgdG8gc2Nyb2xsIGFzc2lzdC4gU2Nyb2xsIGFzc2lzdCByZXF1aXJlc1xuICAgKiB0aGF0IHdlIGFkanVzdCB0aGUgaW5wdXQgcmlnaHQgYmVmb3JlIHRoZSBpbnB1dFxuICAgKiBpcyBhYm91dCB0byBiZSBmb2N1c2VkLiBJZiB3ZSBjYWxsZWQgYEtleWJvYXJkLmdldFJlc2l6ZU1vZGVgXG4gICAqIG9uIGZvY3VzaW4gaW4gc2Nyb2xsIGFzc2lzdCwgd2UgY291bGQgcG90ZW50aWFsbHkgYWRqdXN0IHRoZVxuICAgKiBpbnB1dCB0b28gbGF0ZSBzaW5jZSB0aGlzIGNhbGwgaXMgYXN5bmMuXG4gICAqL1xuICBjb25zdCBrZXlib2FyZFJlc2l6ZU1vZGUgPSBhd2FpdCBLZXlib2FyZC5nZXRSZXNpemVNb2RlKCk7XG4gIGNvbnN0IHJlZ2lzdGVySW5wdXQgPSBhc3luYyBjb21wb25lbnRFbCA9PiB7XG4gICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBjb21wb25lbnRPblJlYWR5KGNvbXBvbmVudEVsLCByZXNvbHZlKSk7XG4gICAgY29uc3QgaW5wdXRSb290ID0gY29tcG9uZW50RWwuc2hhZG93Um9vdCB8fCBjb21wb25lbnRFbDtcbiAgICBjb25zdCBpbnB1dEVsID0gaW5wdXRSb290LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykgfHwgaW5wdXRSb290LnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJyk7XG4gICAgY29uc3Qgc2Nyb2xsRWwgPSBmaW5kQ2xvc2VzdElvbkNvbnRlbnQoY29tcG9uZW50RWwpO1xuICAgIGNvbnN0IGZvb3RlckVsID0gIXNjcm9sbEVsID8gY29tcG9uZW50RWwuY2xvc2VzdCgnaW9uLWZvb3RlcicpIDogbnVsbDtcbiAgICBpZiAoIWlucHV0RWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCEhc2Nyb2xsRWwgJiYgaGlkZUNhcmV0ICYmICFoaWRlQ2FyZXRNYXAuaGFzKGNvbXBvbmVudEVsKSkge1xuICAgICAgY29uc3Qgcm1GbiA9IGVuYWJsZUhpZGVDYXJldE9uU2Nyb2xsKGNvbXBvbmVudEVsLCBpbnB1dEVsLCBzY3JvbGxFbCk7XG4gICAgICBoaWRlQ2FyZXRNYXAuc2V0KGNvbXBvbmVudEVsLCBybUZuKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogZGF0ZS9kYXRldGltZS1sb2NhbGUgaW5wdXRzIG9uIG1vYmlsZSBkZXZpY2VzIHNob3cgZGF0ZSBwaWNrZXJcbiAgICAgKiBvdmVybGF5cyBpbnN0ZWFkIG9mIGtleWJvYXJkcy4gQXMgYSByZXN1bHQsIHNjcm9sbCBhc3Npc3QgaXNcbiAgICAgKiBub3QgbmVlZGVkLiBUaGlzIGFsc28gd29ya3MgYXJvdW5kIGEgYnVnIGluIGlPUyA8MTYgd2hlcmVcbiAgICAgKiBzY3JvbGwgYXNzaXN0IGNhdXNlcyB0aGUgYnJvd3NlciB0byBsb2NrIHVwLiBTZWUgRlctMTk5Ny5cbiAgICAgKi9cbiAgICBjb25zdCBpc0RhdGVJbnB1dCA9IGlucHV0RWwudHlwZSA9PT0gJ2RhdGUnIHx8IGlucHV0RWwudHlwZSA9PT0gJ2RhdGV0aW1lLWxvY2FsJztcbiAgICBpZiAoIWlzRGF0ZUlucHV0ICYmICghIXNjcm9sbEVsIHx8ICEhZm9vdGVyRWwpICYmIHNjcm9sbEFzc2lzdCAmJiAhc2Nyb2xsQXNzaXN0TWFwLmhhcyhjb21wb25lbnRFbCkpIHtcbiAgICAgIGNvbnN0IHJtRm4gPSBlbmFibGVTY3JvbGxBc3Npc3QoY29tcG9uZW50RWwsIGlucHV0RWwsIHNjcm9sbEVsLCBmb290ZXJFbCwga2V5Ym9hcmRIZWlnaHQsIHNjcm9sbFBhZGRpbmcsIGtleWJvYXJkUmVzaXplTW9kZSwgaXNBbmRyb2lkKTtcbiAgICAgIHNjcm9sbEFzc2lzdE1hcC5zZXQoY29tcG9uZW50RWwsIHJtRm4pO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgdW5yZWdpc3RlcklucHV0ID0gY29tcG9uZW50RWwgPT4ge1xuICAgIGlmIChoaWRlQ2FyZXQpIHtcbiAgICAgIGNvbnN0IGZuID0gaGlkZUNhcmV0TWFwLmdldChjb21wb25lbnRFbCk7XG4gICAgICBpZiAoZm4pIHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH1cbiAgICAgIGhpZGVDYXJldE1hcC5kZWxldGUoY29tcG9uZW50RWwpO1xuICAgIH1cbiAgICBpZiAoc2Nyb2xsQXNzaXN0KSB7XG4gICAgICBjb25zdCBmbiA9IHNjcm9sbEFzc2lzdE1hcC5nZXQoY29tcG9uZW50RWwpO1xuICAgICAgaWYgKGZuKSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9XG4gICAgICBzY3JvbGxBc3Npc3RNYXAuZGVsZXRlKGNvbXBvbmVudEVsKTtcbiAgICB9XG4gIH07XG4gIGlmIChpbnB1dEJsdXJyaW5nICYmIElOUFVUX0JMVVJSSU5HKSB7XG4gICAgZW5hYmxlSW5wdXRCbHVycmluZygpO1xuICB9XG4gIC8vIElucHV0IG1pZ2h0IGJlIGFscmVhZHkgbG9hZGVkIGluIHRoZSBET00gYmVmb3JlIGlvbi1kZXZpY2UtaGFja3MgZGlkLlxuICAvLyBBdCB0aGlzIHBvaW50IHdlIG5lZWQgdG8gbG9vayBmb3IgYWxsIG9mIHRoZSBpbnB1dHMgbm90IHJlZ2lzdGVyZWQgeWV0XG4gIC8vIGFuZCByZWdpc3RlciB0aGVtLlxuICBmb3IgKGNvbnN0IGlucHV0IG9mIGlucHV0cykge1xuICAgIHJlZ2lzdGVySW5wdXQoaW5wdXQpO1xuICB9XG4gIGRvYy5hZGRFdmVudExpc3RlbmVyKCdpb25JbnB1dERpZExvYWQnLCBldiA9PiB7XG4gICAgcmVnaXN0ZXJJbnB1dChldi5kZXRhaWwpO1xuICB9KTtcbiAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ2lvbklucHV0RGlkVW5sb2FkJywgZXYgPT4ge1xuICAgIHVucmVnaXN0ZXJJbnB1dChldi5kZXRhaWwpO1xuICB9KTtcbn07XG5leHBvcnQgeyBzdGFydElucHV0U2hpbXMgfTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQSxJQUFNLFdBQVcsb0JBQUksUUFBUTtBQUM3QixJQUFNLGdCQUFnQixDQUFDLGFBQWEsU0FBUyxnQkFBZ0IsaUJBQWlCLEdBQUcsc0JBQXNCLFVBQVU7QUFDL0csTUFBSSxTQUFTLElBQUksV0FBVyxNQUFNLGdCQUFnQjtBQUNoRDtBQUFBLEVBQ0Y7QUFDQSxNQUFJLGdCQUFnQjtBQUNsQixhQUFTLGFBQWEsU0FBUyxnQkFBZ0IsbUJBQW1CO0FBQUEsRUFDcEUsT0FBTztBQUNMLGdCQUFZLGFBQWEsT0FBTztBQUFBLEVBQ2xDO0FBQ0Y7QUFDQSxJQUFNLFlBQVksV0FBUztBQVV6QixTQUFPLFVBQVUsTUFBTSxZQUFZLEVBQUU7QUFDdkM7QUFDQSxJQUFNLFdBQVcsQ0FBQyxhQUFhLFNBQVMsZ0JBQWdCLHNCQUFzQixVQUFVO0FBVXRGLFFBQU0sV0FBVyxRQUFRO0FBRXpCLFFBQU0sV0FBVyxRQUFRLFVBQVUsS0FBSztBQUN4QyxXQUFTLFVBQVUsSUFBSSxjQUFjO0FBQ3JDLFdBQVMsV0FBVztBQWFwQixNQUFJLHFCQUFxQjtBQUN2QixhQUFTLFdBQVc7QUFBQSxFQUN0QjtBQUNBLFdBQVMsWUFBWSxRQUFR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
