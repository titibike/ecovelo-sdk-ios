import {
  findClosestIonContent,
  getScrollElement,
  scrollByPoint
} from "./chunk-WRI2MF6U.js";
import {
  Keyboard,
  KeyboardResize
} from "./chunk-QTAT7GCA.js";
import "./chunk-VZXYYFOL.js";
import {
  addEventListener,
  componentOnReady,
  raf,
  removeEventListener
} from "./chunk-RZR7LWTQ.js";
import {
  doc,
  win
} from "./chunk-YSZWGYJT.js";
import "./chunk-BFPTXCSH.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// node_modules/@ionic/core/dist/esm/input-shims-C4KDnhxb.js
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

@ionic/core/dist/esm/input-shims-C4KDnhxb.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pbnB1dC1zaGltcy1DNEtEbmh4Yi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgdyBhcyB3aW4sIGQgYXMgZG9jIH0gZnJvbSAnLi9pbmRleC1aalA0Q2plWi5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldFNjcm9sbEVsZW1lbnQsIGMgYXMgc2Nyb2xsQnlQb2ludCwgZiBhcyBmaW5kQ2xvc2VzdElvbkNvbnRlbnQgfSBmcm9tICcuL2luZGV4LTdVYlNsdjdOLmpzJztcbmltcG9ydCB7IGYgYXMgYWRkRXZlbnRMaXN0ZW5lciwgbSBhcyByZW1vdmVFdmVudExpc3RlbmVyLCByIGFzIHJhZiwgYyBhcyBjb21wb25lbnRPblJlYWR5IH0gZnJvbSAnLi9oZWxwZXJzLThLU1FRR1F5LmpzJztcbmltcG9ydCB7IGEgYXMgS2V5Ym9hcmRSZXNpemUsIEsgYXMgS2V5Ym9hcmQgfSBmcm9tICcuL2tleWJvYXJkLUNVdzRla1Z5LmpzJztcbmltcG9ydCAnLi9pbmRleC00RHhZNl9nRy5qcyc7XG5pbXBvcnQgJy4vY2FwYWNpdG9yLUNGRVJJZWFVLmpzJztcbmNvbnN0IGNsb25lTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHJlbG9jYXRlSW5wdXQgPSAoY29tcG9uZW50RWwsIGlucHV0RWwsIHNob3VsZFJlbG9jYXRlLCBpbnB1dFJlbGF0aXZlWSA9IDAsIGRpc2FibGVkQ2xvbmVkSW5wdXQgPSBmYWxzZSkgPT4ge1xuICBpZiAoY2xvbmVNYXAuaGFzKGNvbXBvbmVudEVsKSA9PT0gc2hvdWxkUmVsb2NhdGUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHNob3VsZFJlbG9jYXRlKSB7XG4gICAgYWRkQ2xvbmUoY29tcG9uZW50RWwsIGlucHV0RWwsIGlucHV0UmVsYXRpdmVZLCBkaXNhYmxlZENsb25lZElucHV0KTtcbiAgfSBlbHNlIHtcbiAgICByZW1vdmVDbG9uZShjb21wb25lbnRFbCwgaW5wdXRFbCk7XG4gIH1cbn07XG5jb25zdCBpc0ZvY3VzZWQgPSBpbnB1dCA9PiB7XG4gIC8qKlxuICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvTm9kZS9nZXRSb290Tm9kZVxuICAgKiBDYWxsaW5nIGdldFJvb3ROb2RlIG9uIGFuIGVsZW1lbnQgaW4gc3RhbmRhcmQgd2ViIHBhZ2Ugd2lsbCByZXR1cm4gSFRNTERvY3VtZW50LlxuICAgKiBDYWxsaW5nIGdldFJvb3ROb2RlIG9uIGFuIGVsZW1lbnQgaW5zaWRlIG9mIHRoZSBTaGFkb3cgRE9NIHdpbGwgcmV0dXJuIHRoZSBhc3NvY2lhdGVkIFNoYWRvd1Jvb3QuXG4gICAqIENhbGxpbmcgZ2V0Um9vdE5vZGUgb24gYW4gZWxlbWVudCB0aGF0IGlzIG5vdCBhdHRhY2hlZCB0byBhIGRvY3VtZW50L3NoYWRvdyB0cmVlIHdpbGwgcmV0dXJuXG4gICAqIHRoZSByb290IG9mIHRoZSBET00gdHJlZSBpdCBiZWxvbmdzIHRvLlxuICAgKiBpc0ZvY3VzZWQgaXMgdXNlZCBmb3IgdGhlIGhpZGUtY2FyZXQgdXRpbGl0eSB3aGljaCBvbmx5IGNvbnNpZGVycyBpbnB1dC90ZXh0YXJlYSBlbGVtZW50c1xuICAgKiB0aGF0IGFyZSBwcmVzZW50IGluIHRoZSBET00sIHNvIHdlIGRvbid0IHNldCB0eXBlcyBmb3IgdGhhdCBmaW5hbCBjYXNlIHNpbmNlIGl0IGRvZXMgbm90IGFwcGx5LlxuICAgKi9cbiAgcmV0dXJuIGlucHV0ID09PSBpbnB1dC5nZXRSb290Tm9kZSgpLmFjdGl2ZUVsZW1lbnQ7XG59O1xuY29uc3QgYWRkQ2xvbmUgPSAoY29tcG9uZW50RWwsIGlucHV0RWwsIGlucHV0UmVsYXRpdmVZLCBkaXNhYmxlZENsb25lZElucHV0ID0gZmFsc2UpID0+IHtcbiAgLy8gdGhpcyBhbGxvd3MgZm9yIHRoZSBhY3R1YWwgaW5wdXQgdG8gcmVjZWl2ZSB0aGUgZm9jdXMgZnJvbVxuICAvLyB0aGUgdXNlcidzIHRvdWNoIGV2ZW50LCBidXQgYmVmb3JlIGl0IHJlY2VpdmVzIGZvY3VzLCBpdFxuICAvLyBtb3ZlcyB0aGUgYWN0dWFsIGlucHV0IHRvIGEgbG9jYXRpb24gdGhhdCB3aWxsIG5vdCBzY3Jld1xuICAvLyB1cCB0aGUgYXBwJ3MgbGF5b3V0LCBhbmQgZG9lcyBub3QgYWxsb3cgdGhlIG5hdGl2ZSBicm93c2VyXG4gIC8vIHRvIGF0dGVtcHQgdG8gc2Nyb2xsIHRoZSBpbnB1dCBpbnRvIHBsYWNlIChtZXNzaW5nIHVwIGhlYWRlcnMvZm9vdGVycylcbiAgLy8gdGhlIGNsb25lZCBpbnB1dCBmaWxscyB0aGUgYXJlYSBvZiB3aGVyZSBuYXRpdmUgaW5wdXQgc2hvdWxkIGJlXG4gIC8vIHdoaWxlIHRoZSBuYXRpdmUgaW5wdXQgZmFrZXMgb3V0IHRoZSBicm93c2VyIGJ5IHJlbG9jYXRpbmcgaXRzZWxmXG4gIC8vIGJlZm9yZSBpdCByZWNlaXZlcyB0aGUgYWN0dWFsIGZvY3VzIGV2ZW50XG4gIC8vIFdlIGhpZGUgdGhlIGZvY3VzZWQgaW5wdXQgKHdpdGggdGhlIHZpc2libGUgY2FyZXQpIGludmlzaWJsZSBieSBtYWtpbmcgaXQgc2NhbGUoMCksXG4gIGNvbnN0IHBhcmVudEVsID0gaW5wdXRFbC5wYXJlbnROb2RlO1xuICAvLyBET00gV1JJVEVTXG4gIGNvbnN0IGNsb25lZEVsID0gaW5wdXRFbC5jbG9uZU5vZGUoZmFsc2UpO1xuICBjbG9uZWRFbC5jbGFzc0xpc3QuYWRkKCdjbG9uZWQtaW5wdXQnKTtcbiAgY2xvbmVkRWwudGFiSW5kZXggPSAtMTtcbiAgLyoqXG4gICAqIE1ha2luZyB0aGUgY2xvbmVkIGlucHV0IGRpc2FibGVkIHByZXZlbnRzXG4gICAqIENocm9tZSBmb3IgQW5kcm9pZCBmcm9tIHN0aWxsIHNjcm9sbGluZ1xuICAgKiB0aGUgZW50aXJlIHBhZ2Ugc2luY2UgdGhpcyBjbG9uZWQgaW5wdXRcbiAgICogd2lsbCBicmllZmx5IGJlIGhpZGRlbiBieSB0aGUga2V5Ym9hcmRcbiAgICogZXZlbiB0aG91Z2ggaXQgaXMgbm90IGZvY3VzZWQuXG4gICAqXG4gICAqIFRoaXMgaXMgbm90IG5lZWRlZCBvbiBpT1MuIFdoaWxlIHRoaXNcbiAgICogZG9lcyBub3QgY2F1c2UgZnVuY3Rpb25hbCBpc3N1ZXMgb24gaU9TLFxuICAgKiB0aGUgaW5wdXQgc3RpbGwgYXBwZWFycyBzbGlnaHRseSBkaW1tZWQgZXZlblxuICAgKiBpZiB3ZSBzZXQgb3BhY2l0eTogMS5cbiAgICovXG4gIGlmIChkaXNhYmxlZENsb25lZElucHV0KSB7XG4gICAgY2xvbmVkRWwuZGlzYWJsZWQgPSB0cnVlO1xuICB9XG4gIHBhcmVudEVsLmFwcGVuZENoaWxkKGNsb25lZEVsKTtcbiAgY2xvbmVNYXAuc2V0KGNvbXBvbmVudEVsLCBjbG9uZWRFbCk7XG4gIGNvbnN0IGRvYyA9IGNvbXBvbmVudEVsLm93bmVyRG9jdW1lbnQ7XG4gIGNvbnN0IHR4ID0gZG9jLmRpciA9PT0gJ3J0bCcgPyA5OTk5IDogLTk5OTk7XG4gIGNvbXBvbmVudEVsLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gIGlucHV0RWwuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7dHh9cHgsJHtpbnB1dFJlbGF0aXZlWX1weCwwKSBzY2FsZSgwKWA7XG59O1xuY29uc3QgcmVtb3ZlQ2xvbmUgPSAoY29tcG9uZW50RWwsIGlucHV0RWwpID0+IHtcbiAgY29uc3QgY2xvbmUgPSBjbG9uZU1hcC5nZXQoY29tcG9uZW50RWwpO1xuICBpZiAoY2xvbmUpIHtcbiAgICBjbG9uZU1hcC5kZWxldGUoY29tcG9uZW50RWwpO1xuICAgIGNsb25lLnJlbW92ZSgpO1xuICB9XG4gIGNvbXBvbmVudEVsLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnJztcbiAgaW5wdXRFbC5zdHlsZS50cmFuc2Zvcm0gPSAnJztcbn07XG4vKipcbiAqIEZhY3RvcmluZyBpbiA1MHB4IGdpdmVzIHVzIHNvbWUgcm9vbVxuICogaW4gY2FzZSB0aGUga2V5Ym9hcmQgc2hvd3MgcGFzc3dvcmQvYXV0b2ZpbGwgYmFyc1xuICogYXN5bmNocm9ub3VzbHkuXG4gKi9cbmNvbnN0IFNDUk9MTF9BTU9VTlRfUEFERElORyA9IDUwO1xuY29uc3QgZW5hYmxlSGlkZUNhcmV0T25TY3JvbGwgPSAoY29tcG9uZW50RWwsIGlucHV0RWwsIHNjcm9sbEVsKSA9PiB7XG4gIGlmICghc2Nyb2xsRWwgfHwgIWlucHV0RWwpIHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgcmV0dXJuO1xuICAgIH07XG4gIH1cbiAgY29uc3Qgc2Nyb2xsSGlkZUNhcmV0ID0gc2hvdWxkSGlkZUNhcmV0ID0+IHtcbiAgICBpZiAoaXNGb2N1c2VkKGlucHV0RWwpKSB7XG4gICAgICByZWxvY2F0ZUlucHV0KGNvbXBvbmVudEVsLCBpbnB1dEVsLCBzaG91bGRIaWRlQ2FyZXQpO1xuICAgIH1cbiAgfTtcbiAgY29uc3Qgb25CbHVyID0gKCkgPT4gcmVsb2NhdGVJbnB1dChjb21wb25lbnRFbCwgaW5wdXRFbCwgZmFsc2UpO1xuICBjb25zdCBoaWRlQ2FyZXQgPSAoKSA9PiBzY3JvbGxIaWRlQ2FyZXQodHJ1ZSk7XG4gIGNvbnN0IHNob3dDYXJldCA9ICgpID0+IHNjcm9sbEhpZGVDYXJldChmYWxzZSk7XG4gIGFkZEV2ZW50TGlzdGVuZXIoc2Nyb2xsRWwsICdpb25TY3JvbGxTdGFydCcsIGhpZGVDYXJldCk7XG4gIGFkZEV2ZW50TGlzdGVuZXIoc2Nyb2xsRWwsICdpb25TY3JvbGxFbmQnLCBzaG93Q2FyZXQpO1xuICBpbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBvbkJsdXIpO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIoc2Nyb2xsRWwsICdpb25TY3JvbGxTdGFydCcsIGhpZGVDYXJldCk7XG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihzY3JvbGxFbCwgJ2lvblNjcm9sbEVuZCcsIHNob3dDYXJldCk7XG4gICAgaW5wdXRFbC5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgb25CbHVyKTtcbiAgfTtcbn07XG5jb25zdCBTS0lQX1NFTEVDVE9SID0gJ2lucHV0LCB0ZXh0YXJlYSwgW25vLWJsdXJdLCBbY29udGVudGVkaXRhYmxlXSc7XG5jb25zdCBlbmFibGVJbnB1dEJsdXJyaW5nID0gKCkgPT4ge1xuICBsZXQgZm9jdXNlZCA9IHRydWU7XG4gIGxldCBkaWRTY3JvbGwgPSBmYWxzZTtcbiAgY29uc3QgZG9jID0gZG9jdW1lbnQ7XG4gIGNvbnN0IG9uU2Nyb2xsID0gKCkgPT4ge1xuICAgIGRpZFNjcm9sbCA9IHRydWU7XG4gIH07XG4gIGNvbnN0IG9uRm9jdXNpbiA9ICgpID0+IHtcbiAgICBmb2N1c2VkID0gdHJ1ZTtcbiAgfTtcbiAgY29uc3Qgb25Ub3VjaGVuZCA9IGV2ID0+IHtcbiAgICAvLyBpZiBhcHAgZGlkIHNjcm9sbCByZXR1cm4gZWFybHlcbiAgICBpZiAoZGlkU2Nyb2xsKSB7XG4gICAgICBkaWRTY3JvbGwgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgYWN0aXZlID0gZG9jLmFjdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKCFhY3RpdmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gb25seSBibHVyIGlmIHRoZSBhY3RpdmUgZWxlbWVudCBpcyBhIHRleHQtaW5wdXQgb3IgYSB0ZXh0YXJlYVxuICAgIGlmIChhY3RpdmUubWF0Y2hlcyhTS0lQX1NFTEVDVE9SKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBpZiB0aGUgc2VsZWN0ZWQgdGFyZ2V0IGlzIHRoZSBhY3RpdmUgZWxlbWVudCwgZG8gbm90IGJsdXJcbiAgICBjb25zdCB0YXBwZWQgPSBldi50YXJnZXQ7XG4gICAgaWYgKHRhcHBlZCA9PT0gYWN0aXZlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0YXBwZWQubWF0Y2hlcyhTS0lQX1NFTEVDVE9SKSB8fCB0YXBwZWQuY2xvc2VzdChTS0lQX1NFTEVDVE9SKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb2N1c2VkID0gZmFsc2U7XG4gICAgLy8gVE9ETyBGVy0yNzk2OiBmaW5kIGEgYmV0dGVyIHdheSwgd2h5IDUwbXM/XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIWZvY3VzZWQpIHtcbiAgICAgICAgYWN0aXZlLmJsdXIoKTtcbiAgICAgIH1cbiAgICB9LCA1MCk7XG4gIH07XG4gIGFkZEV2ZW50TGlzdGVuZXIoZG9jLCAnaW9uU2Nyb2xsU3RhcnQnLCBvblNjcm9sbCk7XG4gIGRvYy5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgb25Gb2N1c2luLCB0cnVlKTtcbiAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Ub3VjaGVuZCwgZmFsc2UpO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIoZG9jLCAnaW9uU2Nyb2xsU3RhcnQnLCBvblNjcm9sbCwgdHJ1ZSk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCBvbkZvY3VzaW4sIHRydWUpO1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uVG91Y2hlbmQsIGZhbHNlKTtcbiAgfTtcbn07XG5jb25zdCBTQ1JPTExfQVNTSVNUX1NQRUVEID0gMC4zO1xuY29uc3QgZ2V0U2Nyb2xsRGF0YSA9IChjb21wb25lbnRFbCwgY29udGVudEVsLCBrZXlib2FyZEhlaWdodCwgcGxhdGZvcm1IZWlnaHQpID0+IHtcbiAgdmFyIF9hO1xuICBjb25zdCBpdGVtRWwgPSAoX2EgPSBjb21wb25lbnRFbC5jbG9zZXN0KCdpb24taXRlbSxbaW9uLWl0ZW1dJykpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGNvbXBvbmVudEVsO1xuICByZXR1cm4gY2FsY1Njcm9sbERhdGEoaXRlbUVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCBjb250ZW50RWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksIGtleWJvYXJkSGVpZ2h0LCBwbGF0Zm9ybUhlaWdodCk7XG59O1xuY29uc3QgY2FsY1Njcm9sbERhdGEgPSAoaW5wdXRSZWN0LCBjb250ZW50UmVjdCwga2V5Ym9hcmRIZWlnaHQsIHBsYXRmb3JtSGVpZ2h0KSA9PiB7XG4gIC8vIGNvbXB1dGUgaW5wdXQncyBZIHZhbHVlcyByZWxhdGl2ZSB0byB0aGUgYm9keVxuICBjb25zdCBpbnB1dFRvcCA9IGlucHV0UmVjdC50b3A7XG4gIGNvbnN0IGlucHV0Qm90dG9tID0gaW5wdXRSZWN0LmJvdHRvbTtcbiAgLy8gY29tcHV0ZSB2aXNpYmxlIGFyZWFcbiAgY29uc3QgdmlzaWJsZUFyZWFUb3AgPSBjb250ZW50UmVjdC50b3A7XG4gIGNvbnN0IHZpc2libGVBcmVhQm90dG9tID0gTWF0aC5taW4oY29udGVudFJlY3QuYm90dG9tLCBwbGF0Zm9ybUhlaWdodCAtIGtleWJvYXJkSGVpZ2h0KTtcbiAgLy8gY29tcHV0ZSBzYWZlIGFyZWFcbiAgY29uc3Qgc2FmZUFyZWFUb3AgPSB2aXNpYmxlQXJlYVRvcCArIDE1O1xuICBjb25zdCBzYWZlQXJlYUJvdHRvbSA9IHZpc2libGVBcmVhQm90dG9tIC0gU0NST0xMX0FNT1VOVF9QQURESU5HO1xuICAvLyBmaWd1cmUgb3V0IGlmIGVhY2ggZWRnZSBvZiB0aGUgaW5wdXQgaXMgd2l0aGluIHRoZSBzYWZlIGFyZWFcbiAgY29uc3QgZGlzdGFuY2VUb0JvdHRvbSA9IHNhZmVBcmVhQm90dG9tIC0gaW5wdXRCb3R0b207XG4gIGNvbnN0IGRpc3RhbmNlVG9Ub3AgPSBzYWZlQXJlYVRvcCAtIGlucHV0VG9wO1xuICAvLyBkZXNpcmVkU2Nyb2xsQW1vdW50IGlzIHRoZSBuZWdhdGVkIGRpc3RhbmNlIHRvIHRoZSBzYWZlIGFyZWEgYWNjb3JkaW5nIHRvIG91ciBjYWxjdWxhdGlvbnMuXG4gIGNvbnN0IGRlc2lyZWRTY3JvbGxBbW91bnQgPSBNYXRoLnJvdW5kKGRpc3RhbmNlVG9Cb3R0b20gPCAwID8gLWRpc3RhbmNlVG9Cb3R0b20gOiBkaXN0YW5jZVRvVG9wID4gMCA/IC1kaXN0YW5jZVRvVG9wIDogMCk7XG4gIC8vIG91ciBjYWxjdWxhdGlvbnMgbWFrZSBzb21lIGFzc3VtcHRpb25zIHRoYXQgYXJlbid0IGFsd2F5cyB0cnVlLCBsaWtlIHRoZSBrZXlib2FyZCBiZWluZyBjbG9zZWQgd2hlbiBhbiBpbnB1dFxuICAvLyBnZXRzIGZvY3VzLCBzbyBtYWtlIHN1cmUgd2UgZG9uJ3Qgc2Nyb2xsIHRoZSBpbnB1dCBhYm92ZSB0aGUgdmlzaWJsZSBhcmVhXG4gIGNvbnN0IHNjcm9sbEFtb3VudCA9IE1hdGgubWluKGRlc2lyZWRTY3JvbGxBbW91bnQsIGlucHV0VG9wIC0gdmlzaWJsZUFyZWFUb3ApO1xuICBjb25zdCBkaXN0YW5jZSA9IE1hdGguYWJzKHNjcm9sbEFtb3VudCk7XG4gIGNvbnN0IGR1cmF0aW9uID0gZGlzdGFuY2UgLyBTQ1JPTExfQVNTSVNUX1NQRUVEO1xuICBjb25zdCBzY3JvbGxEdXJhdGlvbiA9IE1hdGgubWluKDQwMCwgTWF0aC5tYXgoMTUwLCBkdXJhdGlvbikpO1xuICByZXR1cm4ge1xuICAgIHNjcm9sbEFtb3VudCxcbiAgICBzY3JvbGxEdXJhdGlvbixcbiAgICBzY3JvbGxQYWRkaW5nOiBrZXlib2FyZEhlaWdodCxcbiAgICBpbnB1dFNhZmVZOiAtKGlucHV0VG9wIC0gc2FmZUFyZWFUb3ApICsgNFxuICB9O1xufTtcbmNvbnN0IFBBRERJTkdfVElNRVJfS0VZID0gJyRpb25QYWRkaW5nVGltZXInO1xuLyoqXG4gKiBTY3JvbGwgcGFkZGluZyBhZGRzIGFkZGl0aW9uYWwgcGFkZGluZyB0byB0aGUgYm90dG9tXG4gKiBvZiBpb24tY29udGVudCBzbyB0aGF0IHRoZXJlIGlzIGVub3VnaCBzY3JvbGwgc3BhY2VcbiAqIGZvciBhbiBpbnB1dCB0byBiZSBzY3JvbGxlZCBhYm92ZSB0aGUga2V5Ym9hcmQuIFRoaXNcbiAqIGlzIG5lZWRlZCBpbiBlbnZpcm9ubWVudHMgd2hlcmUgdGhlIHdlYnZpZXcgZG9lcyBub3RcbiAqIHJlc2l6ZSB3aGVuIHRoZSBrZXlib2FyZCBvcGVucy5cbiAqXG4gKiBFeGFtcGxlOiBJZiBhbiBpbnB1dCBhdCB0aGUgYm90dG9tIG9mIGlvbi1jb250ZW50IGlzXG4gKiBmb2N1c2VkLCB0aGVyZSBpcyBubyBhZGRpdGlvbmFsIHNjcm9sbGluZyBzcGFjZSBiZWxvd1xuICogaXQsIHNvIHRoZSBpbnB1dCBjYW5ub3QgYmUgc2Nyb2xsZWQgYWJvdmUgdGhlIGtleWJvYXJkLlxuICogU2Nyb2xsIHBhZGRpbmcgZml4ZXMgdGhpcyBieSBhZGRpbmcgcGFkZGluZyBlcXVhbCB0byB0aGVcbiAqIGhlaWdodCBvZiB0aGUga2V5Ym9hcmQgdG8gdGhlIGJvdHRvbSBvZiB0aGUgY29udGVudC5cbiAqXG4gKiBDb21tb24gZW52aXJvbm1lbnRzIHdoZXJlIHRoaXMgaXMgbmVlZGVkOlxuICogLSBNb2JpbGUgU2FmYXJpOiBUaGUga2V5Ym9hcmQgb3ZlcmxheXMgdGhlIGNvbnRlbnRcbiAqIC0gQ2FwYWNpdG9yL0NvcmRvdmEgb24gaU9TOiBUaGUga2V5Ym9hcmQgb3ZlcmxheXMgdGhlIGNvbnRlbnRcbiAqIHdoZW4gdGhlIEtleWJvYXJkUmVzaXplIG1vZGUgaXMgc2V0IHRvICdub25lJy5cbiAqL1xuY29uc3Qgc2V0U2Nyb2xsUGFkZGluZyA9IChjb250ZW50RWwsIHBhZGRpbmdBbW91bnQsIGNsZWFyQ2FsbGJhY2spID0+IHtcbiAgY29uc3QgdGltZXIgPSBjb250ZW50RWxbUEFERElOR19USU1FUl9LRVldO1xuICBpZiAodGltZXIpIHtcbiAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICB9XG4gIGlmIChwYWRkaW5nQW1vdW50ID4gMCkge1xuICAgIGNvbnRlbnRFbC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1rZXlib2FyZC1vZmZzZXQnLCBgJHtwYWRkaW5nQW1vdW50fXB4YCk7XG4gIH0gZWxzZSB7XG4gICAgY29udGVudEVsW1BBRERJTkdfVElNRVJfS0VZXSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29udGVudEVsLnN0eWxlLnNldFByb3BlcnR5KCctLWtleWJvYXJkLW9mZnNldCcsICcwcHgnKTtcbiAgICAgIGlmIChjbGVhckNhbGxiYWNrKSB7XG4gICAgICAgIGNsZWFyQ2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9LCAxMjApO1xuICB9XG59O1xuLyoqXG4gKiBXaGVuIGFuIGlucHV0IGlzIGFib3V0IHRvIGJlIGZvY3VzZWQsXG4gKiBzZXQgYSB0aW1lb3V0IHRvIGNsZWFyIGFueSBzY3JvbGwgcGFkZGluZ1xuICogb24gdGhlIGNvbnRlbnQuIE5vdGU6IFRoZSBjbGVhcmluZ1xuICogaXMgZG9uZSBvbiBhIHRpbWVvdXQgc28gdGhhdCBpZiB1c2Vyc1xuICogYXJlIG1vdmluZyBmb2N1cyBmcm9tIG9uZSBpbnB1dCB0byB0aGUgbmV4dFxuICogdGhlbiByZS1hZGRpbmcgc2Nyb2xsIHBhZGRpbmcgdG8gdGhlIG5ld1xuICogaW5wdXQgd2l0aCBjYW5jZWwgdGhlIHRpbWVvdXQgdG8gY2xlYXIgdGhlXG4gKiBzY3JvbGwgcGFkZGluZy5cbiAqL1xuY29uc3Qgc2V0Q2xlYXJTY3JvbGxQYWRkaW5nTGlzdGVuZXIgPSAoaW5wdXRFbCwgY29udGVudEVsLCBkb25lQ2FsbGJhY2spID0+IHtcbiAgY29uc3QgY2xlYXJTY3JvbGxQYWRkaW5nID0gKCkgPT4ge1xuICAgIGlmIChjb250ZW50RWwpIHtcbiAgICAgIHNldFNjcm9sbFBhZGRpbmcoY29udGVudEVsLCAwLCBkb25lQ2FsbGJhY2spO1xuICAgIH1cbiAgfTtcbiAgaW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIGNsZWFyU2Nyb2xsUGFkZGluZywge1xuICAgIG9uY2U6IHRydWVcbiAgfSk7XG59O1xubGV0IGN1cnJlbnRQYWRkaW5nID0gMDtcbmNvbnN0IFNLSVBfU0NST0xMX0FTU0lTVCA9ICdkYXRhLWlvbmljLXNraXAtc2Nyb2xsLWFzc2lzdCc7XG5jb25zdCBlbmFibGVTY3JvbGxBc3Npc3QgPSAoY29tcG9uZW50RWwsIGlucHV0RWwsIGNvbnRlbnRFbCwgZm9vdGVyRWwsIGtleWJvYXJkSGVpZ2h0LCBlbmFibGVTY3JvbGxQYWRkaW5nLCBrZXlib2FyZFJlc2l6ZSwgZGlzYWJsZUNsb25lZElucHV0ID0gZmFsc2UpID0+IHtcbiAgLyoqXG4gICAqIFNjcm9sbCBwYWRkaW5nIHNob3VsZCBvbmx5IGJlIGFkZGVkIGlmOlxuICAgKiAxLiBUaGUgZ2xvYmFsIHNjcm9sbFBhZGRpbmcgY29uZmlnIG9wdGlvblxuICAgKiBpcyBzZXQgdG8gdHJ1ZS5cbiAgICogMi4gVGhlIG5hdGl2ZSBrZXlib2FyZCByZXNpemUgbW9kZSBpcyBlaXRoZXIgXCJub25lXCJcbiAgICogKGtleWJvYXJkIG92ZXJsYXlzIHdlYnZpZXcpIG9yIHVuZGVmaW5lZCAocmVzaXplXG4gICAqIGluZm9ybWF0aW9uIHVuYXZhaWxhYmxlKVxuICAgKiBSZXNpemUgaW5mbyBpcyBhdmFpbGFibGUgb24gQ2FwYWNpdG9yIDQrXG4gICAqL1xuICBjb25zdCBhZGRTY3JvbGxQYWRkaW5nID0gZW5hYmxlU2Nyb2xsUGFkZGluZyAmJiAoa2V5Ym9hcmRSZXNpemUgPT09IHVuZGVmaW5lZCB8fCBrZXlib2FyZFJlc2l6ZS5tb2RlID09PSBLZXlib2FyZFJlc2l6ZS5Ob25lKTtcbiAgLyoqXG4gICAqIFRoaXMgdHJhY2tzIHdoZXRoZXIgb3Igbm90IHRoZSBrZXlib2FyZCBoYXMgYmVlblxuICAgKiBwcmVzZW50ZWQgZm9yIGEgc2luZ2xlIGZvY3VzZWQgdGV4dCBmaWVsZC4gTm90ZVxuICAgKiB0aGF0IGl0IGRvZXMgbm90IHRyYWNrIGlmIHRoZSBrZXlib2FyZCBpcyBvcGVuXG4gICAqIGluIGdlbmVyYWwgc3VjaCBhcyBpZiB0aGUga2V5Ym9hcmQgaXMgb3BlbiBmb3JcbiAgICogYSBkaWZmZXJlbnQgZm9jdXNlZCB0ZXh0IGZpZWxkLlxuICAgKi9cbiAgbGV0IGhhc0tleWJvYXJkQmVlblByZXNlbnRlZEZvclRleHRGaWVsZCA9IGZhbHNlO1xuICAvKipcbiAgICogV2hlbiBhZGRpbmcgc2Nyb2xsIHBhZGRpbmcgd2UgbmVlZCB0byBrbm93XG4gICAqIGhvdyBtdWNoIG9mIHRoZSB2aWV3cG9ydCB0aGUga2V5Ym9hcmQgb2JzY3VyZXMuXG4gICAqIFdlIGRvIHRoaXMgYnkgc3VidHJhY3RpbmcgdGhlIGtleWJvYXJkIGhlaWdodFxuICAgKiBmcm9tIHRoZSBwbGF0Zm9ybSBoZWlnaHQuXG4gICAqXG4gICAqIElmIHdlIGNvbXB1dGUgdGhpcyB2YWx1ZSB3aGVuIHN3aXRjaGluZyBiZXR3ZWVuXG4gICAqIGlucHV0cyB0aGVuIHRoZSB3ZWJ2aWV3IG1heSBhbHJlYWR5IGJlIHJlc2l6ZWQuXG4gICAqIEF0IHRoaXMgcG9pbnQsIGB3aW4uaW5uZXJIZWlnaHRgIGhhcyBhbHJlYWR5IGFjY291bnRlZFxuICAgKiBmb3IgdGhlIGtleWJvYXJkIG1lYW5pbmcgd2Ugd291bGQgdGhlbiBzdWJ0cmFjdFxuICAgKiB0aGUga2V5Ym9hcmQgaGVpZ2h0IGFnYWluLiBUaGlzIHdpbGwgcmVzdWx0IGluIHRoZSBpbnB1dFxuICAgKiBiZWluZyBzY3JvbGxlZCBtb3JlIHRoYW4gaXQgbmVlZHMgdG8uXG4gICAqL1xuICBjb25zdCBwbGF0Zm9ybUhlaWdodCA9IHdpbiAhPT0gdW5kZWZpbmVkID8gd2luLmlubmVySGVpZ2h0IDogMDtcbiAgLyoqXG4gICAqIFNjcm9sbCBhc3Npc3QgaXMgcnVuIHdoZW4gYSB0ZXh0IGZpZWxkXG4gICAqIGlzIGZvY3VzZWQuIEhvd2V2ZXIsIGl0IG1heSBuZWVkIHRvXG4gICAqIHJlLXJ1biB3aGVuIHRoZSBrZXlib2FyZCBzaXplIGNoYW5nZXNcbiAgICogc3VjaCB0aGF0IHRoZSB0ZXh0IGZpZWxkIGlzIG5vdyBoaWRkZW5cbiAgICogdW5kZXJuZWF0aCB0aGUga2V5Ym9hcmQuXG4gICAqIFRoaXMgZnVuY3Rpb24gcmUtcnVucyBzY3JvbGwgYXNzaXN0XG4gICAqIHdoZW4gdGhhdCBoYXBwZW5zLlxuICAgKlxuICAgKiBPbmUgbGltaXRhdGlvbiBvZiB0aGlzIGlzIG9uIGEgd2ViIGJyb3dzZXJcbiAgICogd2hlcmUgbmF0aXZlIGtleWJvYXJkIEFQSXMgZG8gbm90IGhhdmUgY3Jvc3MtYnJvd3NlclxuICAgKiBzdXBwb3J0LiBgaW9uS2V5Ym9hcmREaWRTaG93YCByZWxpZXMgb24gdGhlIFZpc3VhbCBWaWV3cG9ydCBBUEkuXG4gICAqIFRoaXMgbWVhbnMgdGhhdCBpZiB0aGUga2V5Ym9hcmQgY2hhbmdlcyBidXQgZG9lcyBub3QgY2hhbmdlXG4gICAqIGdlb21ldHJ5LCB0aGVuIHNjcm9sbCBhc3Npc3Qgd2lsbCBub3QgcmUtcnVuIGV2ZW4gaWZcbiAgICogdGhlIHVzZXIgaGFzIHNjcm9sbGVkIHRoZSB0ZXh0IGZpZWxkIHVuZGVyIHRoZSBrZXlib2FyZC5cbiAgICogVGhpcyBpcyBub3QgYSBwcm9ibGVtIHdoZW4gcnVubmluZyBpbiBDb3Jkb3ZhL0NhcGFjaXRvclxuICAgKiBiZWNhdXNlIGBpb25LZXlib2FyZERpZFNob3dgIHVzZXMgdGhlIG5hdGl2ZSBldmVudHNcbiAgICogd2hpY2ggZmlyZSBldmVyeSB0aW1lIHRoZSBrZXlib2FyZCBjaGFuZ2VzLlxuICAgKi9cbiAgY29uc3Qga2V5Ym9hcmRTaG93ID0gZXYgPT4ge1xuICAgIC8qKlxuICAgICAqIElmIHRoZSBrZXlib2FyZCBoYXMgbm90IHlldCBiZWVuIHByZXNlbnRlZFxuICAgICAqIGZvciB0aGlzIHRleHQgZmllbGQgdGhlbiB0aGUgdGV4dCBmaWVsZCBoYXMganVzdFxuICAgICAqIHJlY2VpdmVkIGZvY3VzLiBJbiB0aGF0IGNhc2UsIHRoZSBmb2N1c2luIGxpc3RlbmVyXG4gICAgICogd2lsbCBydW4gc2Nyb2xsIGFzc2lzdC5cbiAgICAgKi9cbiAgICBpZiAoaGFzS2V5Ym9hcmRCZWVuUHJlc2VudGVkRm9yVGV4dEZpZWxkID09PSBmYWxzZSkge1xuICAgICAgaGFzS2V5Ym9hcmRCZWVuUHJlc2VudGVkRm9yVGV4dEZpZWxkID0gdHJ1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogT3RoZXJ3aXNlLCB0aGUga2V5Ym9hcmQgaGFzIGFscmVhZHkgYmVlbiBwcmVzZW50ZWRcbiAgICAgKiBmb3IgdGhlIGZvY3VzZWQgdGV4dCBmaWVsZC5cbiAgICAgKiBUaGlzIG1lYW5zIHRoYXQgdGhlIGtleWJvYXJkIGxpa2VseSBjaGFuZ2VkXG4gICAgICogZ2VvbWV0cnksIGFuZCB3ZSBuZWVkIHRvIHJlLXJ1biBzY3JvbGwgYXNzaXN0LlxuICAgICAqIFRoaXMgY2FuIGhhcHBlbiB3aGVuIHRoZSB1c2VyIHJvdGF0ZXMgdGhlaXIgZGV2aWNlXG4gICAgICogb3Igd2hlbiB0aGV5IHN3aXRjaCBrZXlib2FyZHMuXG4gICAgICpcbiAgICAgKiBNYWtlIHN1cmUgd2UgcGFzcyBpbiB0aGUgY29tcHV0ZWQga2V5Ym9hcmQgaGVpZ2h0XG4gICAgICogcmF0aGVyIHRoYW4gdGhlIGVzdGltYXRlZCBrZXlib2FyZCBoZWlnaHQuXG4gICAgICpcbiAgICAgKiBTaW5jZSB0aGUga2V5Ym9hcmQgaXMgYWxyZWFkeSBvcGVuIHRoZW4gd2UgZG8gbm90XG4gICAgICogbmVlZCB0byB3YWl0IGZvciB0aGUgd2VidmlldyB0byByZXNpemUsIHNvIHdlIHBhc3NcbiAgICAgKiBcIndhaXRGb3JSZXNpemU6IGZhbHNlXCIuXG4gICAgICovXG4gICAganNTZXRGb2N1cyhjb21wb25lbnRFbCwgaW5wdXRFbCwgY29udGVudEVsLCBmb290ZXJFbCwgZXYuZGV0YWlsLmtleWJvYXJkSGVpZ2h0LCBhZGRTY3JvbGxQYWRkaW5nLCBkaXNhYmxlQ2xvbmVkSW5wdXQsIHBsYXRmb3JtSGVpZ2h0LCBmYWxzZSk7XG4gIH07XG4gIC8qKlxuICAgKiBSZXNldCB0aGUgaW50ZXJuYWwgc3RhdGUgd2hlbiB0aGUgdGV4dCBmaWVsZCBsb3NlcyBmb2N1cy5cbiAgICovXG4gIGNvbnN0IGZvY3VzT3V0ID0gKCkgPT4ge1xuICAgIGhhc0tleWJvYXJkQmVlblByZXNlbnRlZEZvclRleHRGaWVsZCA9IGZhbHNlO1xuICAgIHdpbiA9PT0gbnVsbCB8fCB3aW4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHdpbi5yZW1vdmVFdmVudExpc3RlbmVyKCdpb25LZXlib2FyZERpZFNob3cnLCBrZXlib2FyZFNob3cpO1xuICAgIGNvbXBvbmVudEVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgZm9jdXNPdXQpO1xuICB9O1xuICAvKipcbiAgICogV2hlbiB0aGUgaW5wdXQgaXMgYWJvdXQgdG8gcmVjZWl2ZVxuICAgKiBmb2N1cywgd2UgbmVlZCB0byBtb3ZlIGl0IHRvIHByZXZlbnRcbiAgICogbW9iaWxlIFNhZmFyaSBmcm9tIGFkanVzdGluZyB0aGUgdmlld3BvcnQuXG4gICAqL1xuICBjb25zdCBmb2N1c0luID0gYXN5bmMgKCkgPT4ge1xuICAgIC8qKlxuICAgICAqIFNjcm9sbCBhc3Npc3Qgc2hvdWxkIG5vdCBydW4gYWdhaW5cbiAgICAgKiBvbiBpbnB1dHMgdGhhdCBoYXZlIGJlZW4gbWFudWFsbHlcbiAgICAgKiBmb2N1c2VkIGluc2lkZSBvZiB0aGUgc2Nyb2xsIGFzc2lzdFxuICAgICAqIGltcGxlbWVudGF0aW9uLlxuICAgICAqL1xuICAgIGlmIChpbnB1dEVsLmhhc0F0dHJpYnV0ZShTS0lQX1NDUk9MTF9BU1NJU1QpKSB7XG4gICAgICBpbnB1dEVsLnJlbW92ZUF0dHJpYnV0ZShTS0lQX1NDUk9MTF9BU1NJU1QpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBqc1NldEZvY3VzKGNvbXBvbmVudEVsLCBpbnB1dEVsLCBjb250ZW50RWwsIGZvb3RlckVsLCBrZXlib2FyZEhlaWdodCwgYWRkU2Nyb2xsUGFkZGluZywgZGlzYWJsZUNsb25lZElucHV0LCBwbGF0Zm9ybUhlaWdodCk7XG4gICAgd2luID09PSBudWxsIHx8IHdpbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogd2luLmFkZEV2ZW50TGlzdGVuZXIoJ2lvbktleWJvYXJkRGlkU2hvdycsIGtleWJvYXJkU2hvdyk7XG4gICAgY29tcG9uZW50RWwuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBmb2N1c091dCk7XG4gIH07XG4gIGNvbXBvbmVudEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCBmb2N1c0luKTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBjb21wb25lbnRFbC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1c2luJywgZm9jdXNJbik7XG4gICAgd2luID09PSBudWxsIHx8IHdpbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogd2luLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lvbktleWJvYXJkRGlkU2hvdycsIGtleWJvYXJkU2hvdyk7XG4gICAgY29tcG9uZW50RWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBmb2N1c091dCk7XG4gIH07XG59O1xuLyoqXG4gKiBVc2UgdGhpcyBmdW5jdGlvbiB3aGVuIHlvdSB3YW50IHRvIG1hbnVhbGx5XG4gKiBmb2N1cyBhbiBpbnB1dCBidXQgbm90IGhhdmUgc2Nyb2xsIGFzc2lzdCBydW4gYWdhaW4uXG4gKi9cbmNvbnN0IHNldE1hbnVhbEZvY3VzID0gZWwgPT4ge1xuICB2YXIgX2E7XG4gIC8qKlxuICAgKiBJZiBlbGVtZW50IGlzIGFscmVhZHkgZm9jdXNlZCB0aGVuXG4gICAqIGEgbmV3IGZvY3VzaW4gZXZlbnQgd2lsbCBub3QgYmUgZGlzcGF0Y2hlZFxuICAgKiB0byByZW1vdmUgdGhlIFNLSUxfU0NST0xMX0FTU0lTVCBhdHRyaWJ1dGUuXG4gICAqL1xuICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gZWwpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLyoqXG4gICAqIE9wdGltaXphdGlvbiBmb3Igc2NlbmFyaW9zIHdoZXJlIHRoZSBjdXJyZW50bHkgZm9jdXNlZCBlbGVtZW50IGlzIGEgc2libGluZ1xuICAgKiBvZiB0aGUgdGFyZ2V0IGVsZW1lbnQuIEluIHN1Y2ggY2FzZXMsIHdlIGF2b2lkIHNldHRpbmcgYFNLSVBfU0NST0xMX0FTU0lTVGAuXG4gICAqXG4gICAqIFRoaXMgaXMgY3J1Y2lhbCBmb3IgYWNjZXNzaWJpbGl0eTogaW5wdXQgZWxlbWVudHMgY2FuIG5vdyBjb250YWluIGZvY3VzYWJsZVxuICAgKiBzaWJsaW5ncyAoZS5nLiwgY2xlYXIgYnV0dG9ucywgc2xvdHRlZCBlbGVtZW50cykuIElmIHdlIGRpZG4ndCBza2lwIHNldHRpbmdcbiAgICogdGhlIGF0dHJpYnV0ZSBoZXJlLCBzY3JlZW4gcmVhZGVycyB3b3VsZCBiZSB1bmFibGUgdG8gbmF2aWdhdGUgdG8gYW5kIGludGVyYWN0XG4gICAqIHdpdGggdGhlc2Ugc2libGluZyBlbGVtZW50cy5cbiAgICpcbiAgICogV2l0aG91dCB0aGlzIGNoZWNrLCB3ZSB3b3VsZCBuZWVkIHRvIGNhbGwgYGV2LnN0b3BQcm9wYWdhdGlvbigpYCBvbiB0aGVcbiAgICogJ2ZvY3VzaW4nIGV2ZW50IG9mIGVhY2ggZm9jdXNhYmxlIHNpYmxpbmcgdG8gcHJldmVudCB0aGUgc2Nyb2xsIGFzc2lzdFxuICAgKiBsaXN0ZW5lciBmcm9tIGluY29ycmVjdGx5IG1vdmluZyBmb2N1cyBiYWNrIHRvIHRoZSBpbnB1dC4gVGhhdCBhcHByb2FjaFxuICAgKiB3b3VsZCBiZSBsZXNzIG1haW50YWluYWJsZSBhbmQgbW9yZSBlcnJvci1wcm9uZS5cbiAgICovXG4gIGNvbnN0IGlucHV0SWQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gIGNvbnN0IGxhYmVsID0gZWwuY2xvc2VzdChgbGFiZWxbZm9yPVwiJHtpbnB1dElkfVwiXWApO1xuICBjb25zdCBhY3RpdmVFbExhYmVsID0gKF9hID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNsb3Nlc3QoYGxhYmVsW2Zvcj1cIiR7aW5wdXRJZH1cIl1gKTtcbiAgaWYgKGxhYmVsICE9PSBudWxsICYmIGxhYmVsID09PSBhY3RpdmVFbExhYmVsKSB7XG4gICAgLy8gSWYgdGhlIGxhYmVsIGlzIHRoZSBzYW1lIGFzIHRoZSBhY3RpdmUgZWxlbWVudCBsYWJlbCwgdGhlblxuICAgIC8vIHdlIGRvbid0IG5lZWQgdG8gc2V0IHRoZSBgU0tJUF9TQ1JPTExfQVNTSVNUYCBhbmQgcmVzZXQgZm9jdXMuXG4gICAgcmV0dXJuO1xuICB9XG4gIGVsLnNldEF0dHJpYnV0ZShTS0lQX1NDUk9MTF9BU1NJU1QsICd0cnVlJyk7XG4gIGVsLmZvY3VzKCk7XG59O1xuY29uc3QganNTZXRGb2N1cyA9IGFzeW5jIChjb21wb25lbnRFbCwgaW5wdXRFbCwgY29udGVudEVsLCBmb290ZXJFbCwga2V5Ym9hcmRIZWlnaHQsIGVuYWJsZVNjcm9sbFBhZGRpbmcsIGRpc2FibGVDbG9uZWRJbnB1dCA9IGZhbHNlLCBwbGF0Zm9ybUhlaWdodCA9IDAsIHdhaXRGb3JSZXNpemUgPSB0cnVlKSA9PiB7XG4gIGlmICghY29udGVudEVsICYmICFmb290ZXJFbCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBzY3JvbGxEYXRhID0gZ2V0U2Nyb2xsRGF0YShjb21wb25lbnRFbCwgY29udGVudEVsIHx8IGZvb3RlckVsLCBrZXlib2FyZEhlaWdodCwgcGxhdGZvcm1IZWlnaHQpO1xuICBpZiAoY29udGVudEVsICYmIE1hdGguYWJzKHNjcm9sbERhdGEuc2Nyb2xsQW1vdW50KSA8IDQpIHtcbiAgICAvLyB0aGUgdGV4dCBpbnB1dCBpcyBpbiBhIHNhZmUgcG9zaXRpb24gdGhhdCBkb2Vzbid0XG4gICAgLy8gcmVxdWlyZSBpdCB0byBiZSBzY3JvbGxlZCBpbnRvIHZpZXcsIGp1c3Qgc2V0IGZvY3VzIG5vd1xuICAgIHNldE1hbnVhbEZvY3VzKGlucHV0RWwpO1xuICAgIC8qKlxuICAgICAqIEV2ZW4gdGhvdWdoIHRoZSBpbnB1dCBkb2VzIG5vdCBuZWVkXG4gICAgICogc2Nyb2xsIGFzc2lzdCwgd2Ugc2hvdWxkIHByZXNlcnZlIHRoZVxuICAgICAqIHRoZSBzY3JvbGwgcGFkZGluZyBhcyB1c2VycyBjb3VsZCBiZSBtb3ZpbmdcbiAgICAgKiBmb2N1cyBmcm9tIGFuIGlucHV0IHRoYXQgbmVlZHMgc2Nyb2xsIHBhZGRpbmdcbiAgICAgKiB0byBhbiBpbnB1dCB0aGF0IGRvZXMgbm90IG5lZWQgc2Nyb2xsIHBhZGRpbmcuXG4gICAgICogSWYgd2UgcmVtb3ZlIHRoZSBzY3JvbGwgcGFkZGluZyBub3csIHVzZXJzIHdpbGxcbiAgICAgKiBzZWUgdGhlIHBhZ2UganVtcC5cbiAgICAgKi9cbiAgICBpZiAoZW5hYmxlU2Nyb2xsUGFkZGluZyAmJiBjb250ZW50RWwgIT09IG51bGwpIHtcbiAgICAgIHNldFNjcm9sbFBhZGRpbmcoY29udGVudEVsLCBjdXJyZW50UGFkZGluZyk7XG4gICAgICBzZXRDbGVhclNjcm9sbFBhZGRpbmdMaXN0ZW5lcihpbnB1dEVsLCBjb250ZW50RWwsICgpID0+IGN1cnJlbnRQYWRkaW5nID0gMCk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuICAvLyB0ZW1wb3JhcmlseSBtb3ZlIHRoZSBmb2N1cyB0byB0aGUgZm9jdXMgaG9sZGVyIHNvIHRoZSBicm93c2VyXG4gIC8vIGRvZXNuJ3QgZnJlYWsgb3V0IHdoaWxlIGl0J3MgdHJ5aW5nIHRvIGdldCB0aGUgaW5wdXQgaW4gcGxhY2VcbiAgLy8gYXQgdGhpcyBwb2ludCB0aGUgbmF0aXZlIHRleHQgaW5wdXQgc3RpbGwgZG9lcyBub3QgaGF2ZSBmb2N1c1xuICByZWxvY2F0ZUlucHV0KGNvbXBvbmVudEVsLCBpbnB1dEVsLCB0cnVlLCBzY3JvbGxEYXRhLmlucHV0U2FmZVksIGRpc2FibGVDbG9uZWRJbnB1dCk7XG4gIHNldE1hbnVhbEZvY3VzKGlucHV0RWwpO1xuICAvKipcbiAgICogUmVsb2NhdGluZy9Gb2N1c2luZyBpbnB1dCBjYXVzZXMgdGhlXG4gICAqIGNsaWNrIGV2ZW50IHRvIGJlIGNhbmNlbGxlZCwgc29cbiAgICogbWFudWFsbHkgZmlyZSBvbmUgaGVyZS5cbiAgICovXG4gIHJhZigoKSA9PiBjb21wb25lbnRFbC5jbGljaygpKTtcbiAgLyoqXG4gICAqIElmIGVuYWJsZWQsIHdlIGNhbiBhZGQgc2Nyb2xsIHBhZGRpbmcgdG9cbiAgICogdGhlIGJvdHRvbSBvZiB0aGUgY29udGVudCBzbyB0aGF0IHNjcm9sbCBhc3Npc3RcbiAgICogaGFzIGVub3VnaCByb29tIHRvIHNjcm9sbCB0aGUgaW5wdXQgYWJvdmVcbiAgICogdGhlIGtleWJvYXJkLlxuICAgKi9cbiAgaWYgKGVuYWJsZVNjcm9sbFBhZGRpbmcgJiYgY29udGVudEVsKSB7XG4gICAgY3VycmVudFBhZGRpbmcgPSBzY3JvbGxEYXRhLnNjcm9sbFBhZGRpbmc7XG4gICAgc2V0U2Nyb2xsUGFkZGluZyhjb250ZW50RWwsIGN1cnJlbnRQYWRkaW5nKTtcbiAgfVxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgc2Nyb2xsQ29udGVudFRpbWVvdXQ7XG4gICAgY29uc3Qgc2Nyb2xsQ29udGVudCA9IGFzeW5jICgpID0+IHtcbiAgICAgIC8vIGNsZWFuIHVwIGxpc3RlbmVycyBhbmQgdGltZW91dHNcbiAgICAgIGlmIChzY3JvbGxDb250ZW50VGltZW91dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChzY3JvbGxDb250ZW50VGltZW91dCk7XG4gICAgICB9XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW9uS2V5Ym9hcmREaWRTaG93JywgZG91YmxlS2V5Ym9hcmRFdmVudExpc3RlbmVyKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdpb25LZXlib2FyZERpZFNob3cnLCBzY3JvbGxDb250ZW50KTtcbiAgICAgIC8vIHNjcm9sbCB0aGUgaW5wdXQgaW50byBwbGFjZVxuICAgICAgaWYgKGNvbnRlbnRFbCkge1xuICAgICAgICBhd2FpdCBzY3JvbGxCeVBvaW50KGNvbnRlbnRFbCwgMCwgc2Nyb2xsRGF0YS5zY3JvbGxBbW91bnQsIHNjcm9sbERhdGEuc2Nyb2xsRHVyYXRpb24pO1xuICAgICAgfVxuICAgICAgLy8gdGhlIHNjcm9sbCB2aWV3IGlzIGluIHRoZSBjb3JyZWN0IHBvc2l0aW9uIG5vd1xuICAgICAgLy8gZ2l2ZSB0aGUgbmF0aXZlIHRleHQgaW5wdXQgZm9jdXNcbiAgICAgIHJlbG9jYXRlSW5wdXQoY29tcG9uZW50RWwsIGlucHV0RWwsIGZhbHNlLCBzY3JvbGxEYXRhLmlucHV0U2FmZVkpO1xuICAgICAgLy8gZW5zdXJlIHRoaXMgaXMgdGhlIGZvY3VzZWQgaW5wdXRcbiAgICAgIHNldE1hbnVhbEZvY3VzKGlucHV0RWwpO1xuICAgICAgLyoqXG4gICAgICAgKiBXaGVuIHRoZSBpbnB1dCBpcyBhYm91dCB0byBiZSBibHVycmVkXG4gICAgICAgKiB3ZSBzaG91bGQgc2V0IGEgdGltZW91dCB0byByZW1vdmVcbiAgICAgICAqIGFueSBzY3JvbGwgcGFkZGluZy5cbiAgICAgICAqL1xuICAgICAgaWYgKGVuYWJsZVNjcm9sbFBhZGRpbmcpIHtcbiAgICAgICAgc2V0Q2xlYXJTY3JvbGxQYWRkaW5nTGlzdGVuZXIoaW5wdXRFbCwgY29udGVudEVsLCAoKSA9PiBjdXJyZW50UGFkZGluZyA9IDApO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgZG91YmxlS2V5Ym9hcmRFdmVudExpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lvbktleWJvYXJkRGlkU2hvdycsIGRvdWJsZUtleWJvYXJkRXZlbnRMaXN0ZW5lcik7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaW9uS2V5Ym9hcmREaWRTaG93Jywgc2Nyb2xsQ29udGVudCk7XG4gICAgfTtcbiAgICBpZiAoY29udGVudEVsKSB7XG4gICAgICBjb25zdCBzY3JvbGxFbCA9IGF3YWl0IGdldFNjcm9sbEVsZW1lbnQoY29udGVudEVsKTtcbiAgICAgIC8qKlxuICAgICAgICogc2Nyb2xsRGF0YSB3aWxsIG9ubHkgY29uc2lkZXIgdGhlIGFtb3VudCB3ZSBuZWVkXG4gICAgICAgKiB0byBzY3JvbGwgaW4gb3JkZXIgdG8gcHJvcGVybHkgYnJpbmcgdGhlIGlucHV0XG4gICAgICAgKiBpbnRvIHZpZXcuIEl0IHdpbGwgbm90IGNvbnNpZGVyIHRoZSBhbW91bnRcbiAgICAgICAqIHdlIGNhbiBzY3JvbGwgaW4gdGhlIGNvbnRlbnQgZWxlbWVudC5cbiAgICAgICAqIEFzIGEgcmVzdWx0LCBzY3JvbGxEYXRhIG1heSByZXF1ZXN0IGEgZ3JlYXRlclxuICAgICAgICogc2Nyb2xsIHBvc2l0aW9uIHRoYW4gaXMgY3VycmVudGx5IGF2YWlsYWJsZVxuICAgICAgICogaW4gdGhlIERPTS4gSWYgdGhpcyBpcyB0aGUgY2FzZSwgd2UgbmVlZCB0b1xuICAgICAgICogd2FpdCBmb3IgdGhlIHdlYnZpZXcgdG8gcmVzaXplL3RoZSBrZXlib2FyZFxuICAgICAgICogdG8gc2hvdyBpbiBvcmRlciBmb3IgYWRkaXRpb25hbCBzY3JvbGxcbiAgICAgICAqIGJhbmR3aWR0aCB0byBiZWNvbWUgYXZhaWxhYmxlLlxuICAgICAgICovXG4gICAgICBjb25zdCB0b3RhbFNjcm9sbEFtb3VudCA9IHNjcm9sbEVsLnNjcm9sbEhlaWdodCAtIHNjcm9sbEVsLmNsaWVudEhlaWdodDtcbiAgICAgIGlmICh3YWl0Rm9yUmVzaXplICYmIHNjcm9sbERhdGEuc2Nyb2xsQW1vdW50ID4gdG90YWxTY3JvbGxBbW91bnQgLSBzY3JvbGxFbC5zY3JvbGxUb3ApIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE9uIGlPUyBkZXZpY2VzLCB0aGUgc3lzdGVtIHdpbGwgc2hvdyBhIFwiUGFzc3dvcmRzXCIgYmFyIGFib3ZlIHRoZSBrZXlib2FyZFxuICAgICAgICAgKiBhZnRlciB0aGUgaW5pdGlhbCBrZXlib2FyZCBpcyBzaG93bi4gVGhpcyBwcmV2ZW50cyB0aGUgd2VidmlldyBmcm9tIHJlc2l6aW5nXG4gICAgICAgICAqIHVudGlsIHRoZSBcIlBhc3N3b3Jkc1wiIGJhciBpcyBzaG93biwgc28gd2UgbmVlZCB0byB3YWl0IGZvciB0aGF0IHRvIGhhcHBlbiBmaXJzdC5cbiAgICAgICAgICovXG4gICAgICAgIGlmIChpbnB1dEVsLnR5cGUgPT09ICdwYXNzd29yZCcpIHtcbiAgICAgICAgICAvLyBBZGQgNTBweCB0byBhY2NvdW50IGZvciB0aGUgXCJQYXNzd29yZHNcIiBiYXJcbiAgICAgICAgICBzY3JvbGxEYXRhLnNjcm9sbEFtb3VudCArPSBTQ1JPTExfQU1PVU5UX1BBRERJTkc7XG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2lvbktleWJvYXJkRGlkU2hvdycsIGRvdWJsZUtleWJvYXJkRXZlbnRMaXN0ZW5lcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2lvbktleWJvYXJkRGlkU2hvdycsIHNjcm9sbENvbnRlbnQpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIHNob3VsZCBvbmx5IGZpcmUgaW4gMiBpbnN0YW5jZXM6XG4gICAgICAgICAqIDEuIFRoZSBhcHAgaXMgdmVyeSBzbG93LlxuICAgICAgICAgKiAyLiBUaGUgYXBwIGlzIHJ1bm5pbmcgaW4gYSBicm93c2VyIG9uIGFuIG9sZCBPU1xuICAgICAgICAgKiB0aGF0IGRvZXMgbm90IHN1cHBvcnQgSW9uaWMgS2V5Ym9hcmQgRXZlbnRzXG4gICAgICAgICAqL1xuICAgICAgICBzY3JvbGxDb250ZW50VGltZW91dCA9IHNldFRpbWVvdXQoc2Nyb2xsQ29udGVudCwgMTAwMCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgc2Nyb2xsQ29udGVudCgpO1xuICB9XG59O1xuY29uc3QgSU5QVVRfQkxVUlJJTkcgPSB0cnVlO1xuY29uc3Qgc3RhcnRJbnB1dFNoaW1zID0gYXN5bmMgKGNvbmZpZywgcGxhdGZvcm0pID0+IHtcbiAgLyoqXG4gICAqIElmIGRvYyBpcyB1bmRlZmluZWQgdGhlbiB3ZSBhcmUgaW4gYW4gU1NSIGVudmlyb25tZW50XG4gICAqIHdoZXJlIGlucHV0IHNoaW1zIGRvIG5vdCBhcHBseS5cbiAgICovXG4gIGlmIChkb2MgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBpc0lPUyA9IHBsYXRmb3JtID09PSAnaW9zJztcbiAgY29uc3QgaXNBbmRyb2lkID0gcGxhdGZvcm0gPT09ICdhbmRyb2lkJztcbiAgLyoqXG4gICAqIEhpZGUgQ2FyZXQgYW5kIElucHV0IEJsdXJyaW5nIGFyZSBuZWVkZWQgb24gaU9TLlxuICAgKiBTY3JvbGwgQXNzaXN0IGFuZCBTY3JvbGwgUGFkZGluZyBhcmUgbmVlZGVkIG9uIGlPUyBhbmQgQW5kcm9pZFxuICAgKiB3aXRoIENocm9tZSB3ZWIgYnJvd3NlciAobm90IENocm9tZSB3ZWJ2aWV3KS5cbiAgICovXG4gIGNvbnN0IGtleWJvYXJkSGVpZ2h0ID0gY29uZmlnLmdldE51bWJlcigna2V5Ym9hcmRIZWlnaHQnLCAyOTApO1xuICBjb25zdCBzY3JvbGxBc3Npc3QgPSBjb25maWcuZ2V0Qm9vbGVhbignc2Nyb2xsQXNzaXN0JywgdHJ1ZSk7XG4gIGNvbnN0IGhpZGVDYXJldCA9IGNvbmZpZy5nZXRCb29sZWFuKCdoaWRlQ2FyZXRPblNjcm9sbCcsIGlzSU9TKTtcbiAgLyoqXG4gICAqIFRoZSB0ZWFtIGlzIGV2YWx1YXRpbmcgaWYgaW5wdXRCbHVycmluZyBpcyBzdGlsbCBuZWVkZWQuIEFzIGEgcmVzdWx0XG4gICAqIHRoaXMgZmVhdHVyZSBpcyBkaXNhYmxlZCBieSBkZWZhdWx0IGFzIG9mIElvbmljIDguMC4gRGV2ZWxvcGVycyBhcmVcbiAgICogYWJsZSB0byByZS1lbmFibGUgaXQgdGVtcG9yYXJpbHkuIFRoZSB0ZWFtIG1heSByZW1vdmUgdGhpcyB1dGlsaXR5XG4gICAqIGlmIGl0IGlzIGRldGVybWluZWQgdGhhdCBkb2luZyBzbyB3b3VsZCBub3QgYnJpbmcgYW55IGFkdmVyc2Ugc2lkZSBlZmZlY3RzLlxuICAgKiBUT0RPIEZXLTYwMTQgcmVtb3ZlIGlucHV0IGJsdXJyaW5nIHV0aWxpdHkgKGluY2x1ZGluZyBpbXBsZW1lbnRhdGlvbilcbiAgICovXG4gIGNvbnN0IGlucHV0Qmx1cnJpbmcgPSBjb25maWcuZ2V0Qm9vbGVhbignaW5wdXRCbHVycmluZycsIGZhbHNlKTtcbiAgY29uc3Qgc2Nyb2xsUGFkZGluZyA9IGNvbmZpZy5nZXRCb29sZWFuKCdzY3JvbGxQYWRkaW5nJywgdHJ1ZSk7XG4gIGNvbnN0IGlucHV0cyA9IEFycmF5LmZyb20oZG9jLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lvbi1pbnB1dCwgaW9uLXRleHRhcmVhJykpO1xuICBjb25zdCBoaWRlQ2FyZXRNYXAgPSBuZXcgV2Vha01hcCgpO1xuICBjb25zdCBzY3JvbGxBc3Npc3RNYXAgPSBuZXcgV2Vha01hcCgpO1xuICAvKipcbiAgICogR3JhYiB0aGUgbmF0aXZlIGtleWJvYXJkIHJlc2l6ZSBjb25maWd1cmF0aW9uXG4gICAqIGFuZCBwYXNzIGl0IHRvIHNjcm9sbCBhc3Npc3QuIFNjcm9sbCBhc3Npc3QgcmVxdWlyZXNcbiAgICogdGhhdCB3ZSBhZGp1c3QgdGhlIGlucHV0IHJpZ2h0IGJlZm9yZSB0aGUgaW5wdXRcbiAgICogaXMgYWJvdXQgdG8gYmUgZm9jdXNlZC4gSWYgd2UgY2FsbGVkIGBLZXlib2FyZC5nZXRSZXNpemVNb2RlYFxuICAgKiBvbiBmb2N1c2luIGluIHNjcm9sbCBhc3Npc3QsIHdlIGNvdWxkIHBvdGVudGlhbGx5IGFkanVzdCB0aGVcbiAgICogaW5wdXQgdG9vIGxhdGUgc2luY2UgdGhpcyBjYWxsIGlzIGFzeW5jLlxuICAgKi9cbiAgY29uc3Qga2V5Ym9hcmRSZXNpemVNb2RlID0gYXdhaXQgS2V5Ym9hcmQuZ2V0UmVzaXplTW9kZSgpO1xuICBjb25zdCByZWdpc3RlcklucHV0ID0gYXN5bmMgY29tcG9uZW50RWwgPT4ge1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gY29tcG9uZW50T25SZWFkeShjb21wb25lbnRFbCwgcmVzb2x2ZSkpO1xuICAgIGNvbnN0IGlucHV0Um9vdCA9IGNvbXBvbmVudEVsLnNoYWRvd1Jvb3QgfHwgY29tcG9uZW50RWw7XG4gICAgY29uc3QgaW5wdXRFbCA9IGlucHV0Um9vdC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpIHx8IGlucHV0Um9vdC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpO1xuICAgIGNvbnN0IHNjcm9sbEVsID0gZmluZENsb3Nlc3RJb25Db250ZW50KGNvbXBvbmVudEVsKTtcbiAgICBjb25zdCBmb290ZXJFbCA9ICFzY3JvbGxFbCA/IGNvbXBvbmVudEVsLmNsb3Nlc3QoJ2lvbi1mb290ZXInKSA6IG51bGw7XG4gICAgaWYgKCFpbnB1dEVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghIXNjcm9sbEVsICYmIGhpZGVDYXJldCAmJiAhaGlkZUNhcmV0TWFwLmhhcyhjb21wb25lbnRFbCkpIHtcbiAgICAgIGNvbnN0IHJtRm4gPSBlbmFibGVIaWRlQ2FyZXRPblNjcm9sbChjb21wb25lbnRFbCwgaW5wdXRFbCwgc2Nyb2xsRWwpO1xuICAgICAgaGlkZUNhcmV0TWFwLnNldChjb21wb25lbnRFbCwgcm1Gbik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIGRhdGUvZGF0ZXRpbWUtbG9jYWxlIGlucHV0cyBvbiBtb2JpbGUgZGV2aWNlcyBzaG93IGRhdGUgcGlja2VyXG4gICAgICogb3ZlcmxheXMgaW5zdGVhZCBvZiBrZXlib2FyZHMuIEFzIGEgcmVzdWx0LCBzY3JvbGwgYXNzaXN0IGlzXG4gICAgICogbm90IG5lZWRlZC4gVGhpcyBhbHNvIHdvcmtzIGFyb3VuZCBhIGJ1ZyBpbiBpT1MgPDE2IHdoZXJlXG4gICAgICogc2Nyb2xsIGFzc2lzdCBjYXVzZXMgdGhlIGJyb3dzZXIgdG8gbG9jayB1cC4gU2VlIEZXLTE5OTcuXG4gICAgICovXG4gICAgY29uc3QgaXNEYXRlSW5wdXQgPSBpbnB1dEVsLnR5cGUgPT09ICdkYXRlJyB8fCBpbnB1dEVsLnR5cGUgPT09ICdkYXRldGltZS1sb2NhbCc7XG4gICAgaWYgKCFpc0RhdGVJbnB1dCAmJiAoISFzY3JvbGxFbCB8fCAhIWZvb3RlckVsKSAmJiBzY3JvbGxBc3Npc3QgJiYgIXNjcm9sbEFzc2lzdE1hcC5oYXMoY29tcG9uZW50RWwpKSB7XG4gICAgICBjb25zdCBybUZuID0gZW5hYmxlU2Nyb2xsQXNzaXN0KGNvbXBvbmVudEVsLCBpbnB1dEVsLCBzY3JvbGxFbCwgZm9vdGVyRWwsIGtleWJvYXJkSGVpZ2h0LCBzY3JvbGxQYWRkaW5nLCBrZXlib2FyZFJlc2l6ZU1vZGUsIGlzQW5kcm9pZCk7XG4gICAgICBzY3JvbGxBc3Npc3RNYXAuc2V0KGNvbXBvbmVudEVsLCBybUZuKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHVucmVnaXN0ZXJJbnB1dCA9IGNvbXBvbmVudEVsID0+IHtcbiAgICBpZiAoaGlkZUNhcmV0KSB7XG4gICAgICBjb25zdCBmbiA9IGhpZGVDYXJldE1hcC5nZXQoY29tcG9uZW50RWwpO1xuICAgICAgaWYgKGZuKSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9XG4gICAgICBoaWRlQ2FyZXRNYXAuZGVsZXRlKGNvbXBvbmVudEVsKTtcbiAgICB9XG4gICAgaWYgKHNjcm9sbEFzc2lzdCkge1xuICAgICAgY29uc3QgZm4gPSBzY3JvbGxBc3Npc3RNYXAuZ2V0KGNvbXBvbmVudEVsKTtcbiAgICAgIGlmIChmbikge1xuICAgICAgICBmbigpO1xuICAgICAgfVxuICAgICAgc2Nyb2xsQXNzaXN0TWFwLmRlbGV0ZShjb21wb25lbnRFbCk7XG4gICAgfVxuICB9O1xuICBpZiAoaW5wdXRCbHVycmluZyAmJiBJTlBVVF9CTFVSUklORykge1xuICAgIGVuYWJsZUlucHV0Qmx1cnJpbmcoKTtcbiAgfVxuICAvLyBJbnB1dCBtaWdodCBiZSBhbHJlYWR5IGxvYWRlZCBpbiB0aGUgRE9NIGJlZm9yZSBpb24tZGV2aWNlLWhhY2tzIGRpZC5cbiAgLy8gQXQgdGhpcyBwb2ludCB3ZSBuZWVkIHRvIGxvb2sgZm9yIGFsbCBvZiB0aGUgaW5wdXRzIG5vdCByZWdpc3RlcmVkIHlldFxuICAvLyBhbmQgcmVnaXN0ZXIgdGhlbS5cbiAgZm9yIChjb25zdCBpbnB1dCBvZiBpbnB1dHMpIHtcbiAgICByZWdpc3RlcklucHV0KGlucHV0KTtcbiAgfVxuICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignaW9uSW5wdXREaWRMb2FkJywgZXYgPT4ge1xuICAgIHJlZ2lzdGVySW5wdXQoZXYuZGV0YWlsKTtcbiAgfSk7XG4gIGRvYy5hZGRFdmVudExpc3RlbmVyKCdpb25JbnB1dERpZFVubG9hZCcsIGV2ID0+IHtcbiAgICB1bnJlZ2lzdGVySW5wdXQoZXYuZGV0YWlsKTtcbiAgfSk7XG59O1xuZXhwb3J0IHsgc3RhcnRJbnB1dFNoaW1zIH07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNBLElBQU0sV0FBVyxvQkFBSSxRQUFRO0FBQzdCLElBQU0sZ0JBQWdCLENBQUMsYUFBYSxTQUFTLGdCQUFnQixpQkFBaUIsR0FBRyxzQkFBc0IsVUFBVTtBQUMvRyxNQUFJLFNBQVMsSUFBSSxXQUFXLE1BQU0sZ0JBQWdCO0FBQ2hEO0FBQUEsRUFDRjtBQUNBLE1BQUksZ0JBQWdCO0FBQ2xCLGFBQVMsYUFBYSxTQUFTLGdCQUFnQixtQkFBbUI7QUFBQSxFQUNwRSxPQUFPO0FBQ0wsZ0JBQVksYUFBYSxPQUFPO0FBQUEsRUFDbEM7QUFDRjtBQUNBLElBQU0sWUFBWSxXQUFTO0FBVXpCLFNBQU8sVUFBVSxNQUFNLFlBQVksRUFBRTtBQUN2QztBQUNBLElBQU0sV0FBVyxDQUFDLGFBQWEsU0FBUyxnQkFBZ0Isc0JBQXNCLFVBQVU7QUFVdEYsUUFBTSxXQUFXLFFBQVE7QUFFekIsUUFBTSxXQUFXLFFBQVEsVUFBVSxLQUFL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
