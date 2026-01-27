import {
  hapticSelectionChanged,
  hapticSelectionEnd,
  hapticSelectionStart
} from "./chunk-QINLMX2Z.js";
import "./chunk-VZXYYFOL.js";
import {
  createColorClasses
} from "./chunk-5VP4V3BN.js";
import {
  getIonMode,
  isPlatform
} from "./chunk-TXLH22R2.js";
import {
  getElementRoot,
  raf
} from "./chunk-RZR7LWTQ.js";
import {
  doc
} from "./chunk-YSZWGYJT.js";
import {
  Host,
  createEvent,
  getElement,
  h,
  registerInstance
} from "./chunk-BFPTXCSH.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// node_modules/@ionic/core/dist/esm/ion-picker-column.entry.js
var pickerColumnCss = ":host{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;max-width:100%;height:200px;font-size:22px;text-align:center}.assistive-focusable{left:0;right:0;top:0;bottom:0;position:absolute;z-index:1;pointer-events:none}.assistive-focusable:focus{outline:none}.picker-opts{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0px;padding-bottom:0px;min-width:26px;max-height:200px;outline:none;text-align:inherit;-webkit-scroll-snap-type:y mandatory;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory;overflow-x:hidden;overflow-y:scroll;scrollbar-width:none}.picker-item-empty{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;height:34px;border:0px;outline:none;background:transparent;color:inherit;font-family:var(--ion-font-family, inherit);font-size:inherit;line-height:34px;text-align:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.picker-opts::-webkit-scrollbar{display:none}::slotted(ion-picker-column-option){display:block;scroll-snap-align:center}.picker-item-empty,:host(:not([disabled])) ::slotted(ion-picker-column-option.option-disabled){scroll-snap-align:none}::slotted([slot=prefix]),::slotted([slot=suffix]){max-width:200px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}::slotted([slot=prefix]){-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0;padding-bottom:0;-ms-flex-pack:end;justify-content:end}::slotted([slot=suffix]){-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0;padding-bottom:0;-ms-flex-pack:start;justify-content:start}:host(.picker-column-disabled) .picker-opts{overflow-y:hidden}:host(.picker-column-disabled) ::slotted(ion-picker-column-option){cursor:default;opacity:0.4;pointer-events:none}@media (any-hover: hover){:host(:focus) .picker-opts{outline:none;background:rgba(var(--ion-color-base-rgb), 0.2)}}";
var PickerColumn = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionChange = createEvent(this, "ionChange", 7);
    this.isScrolling = false;
    this.isColumnVisible = false;
    this.canExitInputMode = true;
    this.updateValueTextOnScroll = false;
    this.ariaLabel = null;
    this.isActive = false;
    this.disabled = false;
    this.color = "primary";
    this.numericInput = false;
    this.centerPickerItemInView = (target, smooth = true, canExitInputMode = true) => {
      const {
        isColumnVisible,
        scrollEl
      } = this;
      if (isColumnVisible && scrollEl) {
        const top = target.offsetTop - 3 * target.clientHeight + target.clientHeight / 2;
        if (scrollEl.scrollTop !== top) {
          this.canExitInputMode = canExitInputMode;
          this.updateValueTextOnScroll = false;
          scrollEl.scroll({
            top,
            left: 0,
            behavior: smooth ? "smooth" : void 0
          });
        }
      }
    };
    this.setPickerItemActiveState = (item, isActive) => {
      if (isActive) {
        item.classList.add(PICKER_ITEM_ACTIVE_CLASS);
      } else {
        item.classList.remove(PICKER_ITEM_ACTIVE_CLASS);
      }
    };
    this.inputModeChange = (ev) => {
      if (!this.numericInput) {
        return;
      }
      const {
        useInputMode,
        inputModeColumn
      } = ev.detail;
      const isColumnActive = inputModeColumn === void 0 || inputModeColumn === this.el;
      if (!useInputMode || !isColumnActive) {
        this.setInputModeActive(false);
        return;
      }
      this.setInputModeActive(true);
    };
    this.setInputModeActive = (state) => {
      if (this.isScrolling) {
        this.scrollEndCallback = () => {
          this.isActive = state;
        };
        return;
      }
      this.isActive = state;
    };
    this.initializeScrollListener = () => {
      const enableHaptics = isPlatform("ios");
      const {
        el,
        scrollEl
      } = this;
      let timeout;
      let activeEl = this.activeItem;
      const scrollCallback = () => {
        raf(() => {
          var _a;
          if (!scrollEl) return;
          if (timeout) {
            clearTimeout(timeout);
            timeout = void 0;
          }
          if (!this.isScrolling) {
            enableHaptics && hapticSelectionStart();
            this.isScrolling = true;
          }
          const bbox = scrollEl.getBoundingClientRect();
          const centerX = bbox.x + bbox.width / 2;
          const centerY = bbox.y + bbox.height / 2;
          const rootNode = el.getRootNode();
          const hasParentShadow = rootNode instanceof ShadowRoot;
          const referenceNode = hasParentShadow ? rootNode : doc;
          if (referenceNode === void 0) {
            return;
          }
          const elementsAtPoint = referenceNode.elementsFromPoint(centerX, centerY);
          let newActiveElement = elementsAtPoint.find((el2) => el2.tagName === "ION-PICKER-COLUMN-OPTION");
          if (newActiveElement === void 0) {
            const fallbackActiveElement = referenceNode.elementFromPoint(centerX, centerY);
            if ((fallbackActiveElement === null || fallbackActiveElement === void 0 ? void 0 : fallbackActiveElement.tagName) === "ION-PICKER-COLUMN-OPTION") {
              newActiveElement = fallbackActiveElement;
            }
          }
          if (activeEl !== void 0) {
            this.setPickerItemActiveState(activeEl, false);
          }
          if (newActiveElement === void 0 || newActiveElement.disabled) {
            return;
          }
          if (newActiveElement !== activeEl) {
            enableHaptics && hapticSelectionChanged();
            if (this.canExitInputMode) {
              this.exitInputMode();
            }
          }
          activeEl = newActiveElement;
          this.setPickerItemActiveState(newActiveElement, true);
          if (this.updateValueTextOnScroll) {
            (_a = this.assistiveFocusable) === null || _a === void 0 ? void 0 : _a.setAttribute("aria-valuetext", this.getOptionValueText(newActiveElement));
          }
          timeout = setTimeout(() => {
            this.isScrolling = false;
            this.updateValueTextOnScroll = true;
            enableHaptics && hapticSelectionEnd();
            const {
              scrollEndCallback
            } = this;
            if (scrollEndCallback) {
              scrollEndCallback();
              this.scrollEndCallback = void 0;
            }
            this.canExitInputMode = true;
            this.setValue(newActiveElement.value);
          }, 250);
        });
      };
      raf(() => {
        if (!scrollEl) return;
        scrollEl.addEventListener("scroll", scrollCallback);
        this.destroyScrollListener = () => {
          scrollEl.removeEventListener("scroll", scrollCallback);
        };
      });
    };
    this.exitInputMode = () => {
      const {
        parentEl
      } = this;
      if (parentEl == null) return;
      parentEl.exitInputMode();
      this.el.classList.remove("picker-column-active");
    };
    this.findNextOption = (stride = 1) => {
      const {
        activeItem
      } = this;
      if (!activeItem) return null;
      let prevNode = activeItem;
      let node = activeItem.nextElementSibling;
      while (node != null) {
        if (stride > 0) {
          stride--;
        }
        if (node.tagName === "ION-PICKER-COLUMN-OPTION" && !node.disabled && stride === 0) {
          return node;
        }
        prevNode = node;
        node = node.nextElementSibling;
      }
      return prevNode;
    };
    this.findPreviousOption = (stride = 1) => {
      const {
        activeItem
      } = this;
      if (!activeItem) return null;
      let nextNode = activeItem;
      let node = activeItem.previousElementSibling;
      while (node != null) {
        if (stride > 0) {
          stride--;
        }
        if (node.tagName === "ION-PICKER-COLUMN-OPTION" && !node.disabled && stride === 0) {
          return node;
        }
        nextNode = node;
        node = node.previousElementSibling;
      }
      return nextNode;
    };
    this.onKeyDown = (ev) => {
      const mobile = isPlatform("mobile");
      let newOption = null;
      switch (ev.key) {
        case "ArrowDown":
          newOption = mobile ? this.findPreviousOption() : this.findNextOption();
          break;
        case "ArrowUp":
          newOption = mobile ? this.findNextOption() : this.findPreviousOption();
          break;
        case "PageUp":
          newOption = mobile ? this.findNextOption(5) : this.findPreviousOption(5);
          break;
        case "PageDown":
          newOption = mobile ? this.findPreviousOption(5) : this.findNextOption(5);
          break;
        case "Home":
          newOption = this.el.querySelector("ion-picker-column-option:first-of-type");
          break;
        case "End":
          newOption = this.el.querySelector("ion-picker-column-option:last-of-type");
          break;
      }
      if (newOption !== null) {
        this.setValue(newOption.value);
        ev.preventDefault();
      }
    };
    this.getOptionValueText = (el) => {
      var _a;
      return el ? (_a = el.getAttribute("aria-label")) !== null && _a !== void 0 ? _a : el.innerText : "";
    };
    this.renderAssistiveFocusable = () => {
      const {
        activeItem
      } = this;
      const valueText = this.getOptionValueText(activeItem);
      return h("div", {
        ref: (el) => this.assistiveFocusable = el,
        class: "assistive-focusable",
        role: "slider",
        tabindex: this.disabled ? void 0 : 0,
        "aria-label": this.ariaLabel,
        "aria-valuemin": 0,
        "aria-valuemax": 0,
        "aria-valuenow": 0,
        "aria-valuetext": valueText,
        "aria-orientation": "vertical",
        onKeyDown: (ev) => this.onKeyDown(ev)
      });
    };
  }
  ariaLabelChanged(newValue) {
    this.ariaLabel = newValue;
  }
  valueChange() {
    if (this.isColumnVisible) {
      this.scrollActiveItemIntoView(true);
    }
  }
  /**
   * Only setup scroll listeners
   * when the picker is visible, otherwise
   * the container will have a scroll
   * height of 0px.
   */
  componentWillLoad() {
    const parentEl = this.parentEl = this.el.closest("ion-picker");
    const visibleCallback = (entries) => {
      const ev = entries[entries.length - 1];
      if (ev.isIntersecting) {
        const {
          activeItem,
          el
        } = this;
        this.isColumnVisible = true;
        const oldActive = getElementRoot(el).querySelector(`.${PICKER_ITEM_ACTIVE_CLASS}`);
        if (oldActive) {
          this.setPickerItemActiveState(oldActive, false);
        }
        this.scrollActiveItemIntoView();
        if (activeItem) {
          this.setPickerItemActiveState(activeItem, true);
        }
        this.initializeScrollListener();
      } else {
        this.isColumnVisible = false;
        if (this.destroyScrollListener) {
          this.destroyScrollListener();
          this.destroyScrollListener = void 0;
        }
      }
    };
    new IntersectionObserver(visibleCallback, {
      threshold: 1e-3,
      root: this.parentEl
    }).observe(this.el);
    if (parentEl !== null) {
      parentEl.addEventListener("ionInputModeChange", (ev) => this.inputModeChange(ev));
    }
  }
  componentDidRender() {
    const {
      el,
      activeItem,
      isColumnVisible,
      value
    } = this;
    if (isColumnVisible && !activeItem) {
      const firstOption = el.querySelector("ion-picker-column-option");
      if (firstOption !== null && firstOption.value !== value) {
        this.setValue(firstOption.value);
      }
    }
  }
  /** @internal  */
  scrollActiveItemIntoView(smooth = false) {
    return __async(this, null, function* () {
      const activeEl = this.activeItem;
      if (activeEl) {
        this.centerPickerItemInView(activeEl, smooth, false);
      }
    });
  }
  /**
   * Sets the value prop and fires the ionChange event.
   * This is used when we need to fire ionChange from
   * user-generated events that cannot be caught with normal
   * input/change event listeners.
   * @internal
   */
  setValue(value) {
    return __async(this, null, function* () {
      if (this.disabled === true || this.value === value) {
        return;
      }
      this.value = value;
      this.ionChange.emit({
        value
      });
    });
  }
  /**
   * Sets focus on the scrollable container within the picker column.
   * Use this method instead of the global `pickerColumn.focus()`.
   */
  setFocus() {
    return __async(this, null, function* () {
      if (this.assistiveFocusable) {
        this.assistiveFocusable.focus();
      }
    });
  }
  connectedCallback() {
    var _a;
    this.ariaLabel = (_a = this.el.getAttribute("aria-label")) !== null && _a !== void 0 ? _a : "Select a value";
  }
  get activeItem() {
    const {
      value
    } = this;
    const options = Array.from(this.el.querySelectorAll("ion-picker-column-option"));
    return options.find((option) => {
      if (!this.disabled && option.disabled) {
        return false;
      }
      return option.value === value;
    });
  }
  render() {
    const {
      color,
      disabled,
      isActive,
      numericInput
    } = this;
    const mode = getIonMode(this);
    return h(Host, {
      key: "ea0280355b2f87895bf7dddd289ccf473aa759f3",
      class: createColorClasses(color, {
        [mode]: true,
        ["picker-column-active"]: isActive,
        ["picker-column-numeric-input"]: numericInput,
        ["picker-column-disabled"]: disabled
      })
    }, this.renderAssistiveFocusable(), h("slot", {
      key: "482992131cdeb85b1f61430d7fe1322a16345769",
      name: "prefix"
    }), h("div", {
      key: "43f7f80d621d411ef366b3ca1396299e8c9a0c97",
      "aria-hidden": "true",
      class: "picker-opts",
      ref: (el) => {
        this.scrollEl = el;
      },
      /**
       * When an element has an overlay scroll style and
       * a fixed height, Firefox will focus the scrollable
       * container if the content exceeds the container's
       * dimensions.
       *
       * This causes keyboard navigation to focus to this
       * element instead of going to the next element in
       * the tab order.
       *
       * The desired behavior is for the user to be able to
       * focus the assistive focusable element and tab to
       * the next element in the tab order. Instead of tabbing
       * to this element.
       *
       * To prevent this, we set the tabIndex to -1. This
       * will match the behavior of the other browsers.
       */
      tabIndex: -1
    }, h("div", {
      key: "13a9ee686132af32240710730765de4c0003a9e8",
      class: "picker-item-empty",
      "aria-hidden": "true"
    }, "\xA0"), h("div", {
      key: "dbccba4920833cfcebe9b0fc763458ec3053705a",
      class: "picker-item-empty",
      "aria-hidden": "true"
    }, "\xA0"), h("div", {
      key: "682b43f83a5ea2e46067457f3af118535e111edb",
      class: "picker-item-empty",
      "aria-hidden": "true"
    }, "\xA0"), h("slot", {
      key: "d27e1e1dc0504b2f4627a29912a05bb91e8e413a"
    }), h("div", {
      key: "61c948dbb9cf7469aed3018542bc0954211585ba",
      class: "picker-item-empty",
      "aria-hidden": "true"
    }, "\xA0"), h("div", {
      key: "cf46c277fbee65e35ff44ce0d53ce12aa9cbf9db",
      class: "picker-item-empty",
      "aria-hidden": "true"
    }, "\xA0"), h("div", {
      key: "bbc0e2d491d3f836ab849493ade2f7fa6ad9244e",
      class: "picker-item-empty",
      "aria-hidden": "true"
    }, "\xA0")), h("slot", {
      key: "d25cbbe14b2914fe7b878d43b4e3f4a8c8177d24",
      name: "suffix"
    }));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "aria-label": ["ariaLabelChanged"],
      "value": ["valueChange"]
    };
  }
};
var PICKER_ITEM_ACTIVE_CLASS = "option-active";
PickerColumn.style = pickerColumnCss;
export {
  PickerColumn as ion_picker_column
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-picker-column.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tcGlja2VyLWNvbHVtbi5lbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGNyZWF0ZUV2ZW50LCBoLCBkIGFzIEhvc3QsIGcgYXMgZ2V0RWxlbWVudCB9IGZyb20gJy4vaW5kZXgtNER4WTZfZ0cuanMnO1xuaW1wb3J0IHsgZCBhcyBkb2MgfSBmcm9tICcuL2luZGV4LVpqUDRDamVaLmpzJztcbmltcG9ydCB7IHIgYXMgcmFmLCBnIGFzIGdldEVsZW1lbnRSb290IH0gZnJvbSAnLi9oZWxwZXJzLThLU1FRR1F5LmpzJztcbmltcG9ydCB7IGIgYXMgaGFwdGljU2VsZWN0aW9uU3RhcnQsIGEgYXMgaGFwdGljU2VsZWN0aW9uQ2hhbmdlZCwgaCBhcyBoYXB0aWNTZWxlY3Rpb25FbmQgfSBmcm9tICcuL2hhcHRpYy1EekFNV0p1ay5qcyc7XG5pbXBvcnQgeyBhIGFzIGlzUGxhdGZvcm0sIGIgYXMgZ2V0SW9uTW9kZSB9IGZyb20gJy4vaW9uaWMtZ2xvYmFsLUNUU3l1ZmhGLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlQ29sb3JDbGFzc2VzIH0gZnJvbSAnLi90aGVtZS1EaVZKeXFsWC5qcyc7XG5pbXBvcnQgJy4vY2FwYWNpdG9yLUNGRVJJZWFVLmpzJztcbmNvbnN0IHBpY2tlckNvbHVtbkNzcyA9IFwiOmhvc3R7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO21heC13aWR0aDoxMDAlO2hlaWdodDoyMDBweDtmb250LXNpemU6MjJweDt0ZXh0LWFsaWduOmNlbnRlcn0uYXNzaXN0aXZlLWZvY3VzYWJsZXtsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MDtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjE7cG9pbnRlci1ldmVudHM6bm9uZX0uYXNzaXN0aXZlLWZvY3VzYWJsZTpmb2N1c3tvdXRsaW5lOm5vbmV9LnBpY2tlci1vcHRzey13ZWJraXQtcGFkZGluZy1zdGFydDoxNnB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjE2cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDoxNnB4O3BhZGRpbmctaW5saW5lLWVuZDoxNnB4O3BhZGRpbmctdG9wOjBweDtwYWRkaW5nLWJvdHRvbTowcHg7bWluLXdpZHRoOjI2cHg7bWF4LWhlaWdodDoyMDBweDtvdXRsaW5lOm5vbmU7dGV4dC1hbGlnbjppbmhlcml0Oy13ZWJraXQtc2Nyb2xsLXNuYXAtdHlwZTp5IG1hbmRhdG9yeTstbXMtc2Nyb2xsLXNuYXAtdHlwZTp5IG1hbmRhdG9yeTtzY3JvbGwtc25hcC10eXBlOnkgbWFuZGF0b3J5O292ZXJmbG93LXg6aGlkZGVuO292ZXJmbG93LXk6c2Nyb2xsO3Njcm9sbGJhci13aWR0aDpub25lfS5waWNrZXItaXRlbS1lbXB0eXtwYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjA7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowO21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7aGVpZ2h0OjM0cHg7Ym9yZGVyOjBweDtvdXRsaW5lOm5vbmU7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtjb2xvcjppbmhlcml0O2ZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseSwgaW5oZXJpdCk7Zm9udC1zaXplOmluaGVyaXQ7bGluZS1oZWlnaHQ6MzRweDt0ZXh0LWFsaWduOmluaGVyaXQ7dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVufS5waWNrZXItb3B0czo6LXdlYmtpdC1zY3JvbGxiYXJ7ZGlzcGxheTpub25lfTo6c2xvdHRlZChpb24tcGlja2VyLWNvbHVtbi1vcHRpb24pe2Rpc3BsYXk6YmxvY2s7c2Nyb2xsLXNuYXAtYWxpZ246Y2VudGVyfS5waWNrZXItaXRlbS1lbXB0eSw6aG9zdCg6bm90KFtkaXNhYmxlZF0pKSA6OnNsb3R0ZWQoaW9uLXBpY2tlci1jb2x1bW4tb3B0aW9uLm9wdGlvbi1kaXNhYmxlZCl7c2Nyb2xsLXNuYXAtYWxpZ246bm9uZX06OnNsb3R0ZWQoW3Nsb3Q9cHJlZml4XSksOjpzbG90dGVkKFtzbG90PXN1ZmZpeF0pe21heC13aWR0aDoyMDBweDt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW59OjpzbG90dGVkKFtzbG90PXByZWZpeF0pey13ZWJraXQtcGFkZGluZy1zdGFydDoxNnB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjE2cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDoxNnB4O3BhZGRpbmctaW5saW5lLWVuZDoxNnB4O3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDstbXMtZmxleC1wYWNrOmVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZW5kfTo6c2xvdHRlZChbc2xvdD1zdWZmaXhdKXstd2Via2l0LXBhZGRpbmctc3RhcnQ6MTZweDtwYWRkaW5nLWlubGluZS1zdGFydDoxNnB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MTZweDtwYWRkaW5nLWlubGluZS1lbmQ6MTZweDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjA7LW1zLWZsZXgtcGFjazpzdGFydDtqdXN0aWZ5LWNvbnRlbnQ6c3RhcnR9Omhvc3QoLnBpY2tlci1jb2x1bW4tZGlzYWJsZWQpIC5waWNrZXItb3B0c3tvdmVyZmxvdy15OmhpZGRlbn06aG9zdCgucGlja2VyLWNvbHVtbi1kaXNhYmxlZCkgOjpzbG90dGVkKGlvbi1waWNrZXItY29sdW1uLW9wdGlvbil7Y3Vyc29yOmRlZmF1bHQ7b3BhY2l0eTowLjQ7cG9pbnRlci1ldmVudHM6bm9uZX1AbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpezpob3N0KDpmb2N1cykgLnBpY2tlci1vcHRze291dGxpbmU6bm9uZTtiYWNrZ3JvdW5kOnJnYmEodmFyKC0taW9uLWNvbG9yLWJhc2UtcmdiKSwgMC4yKX19XCI7XG5jb25zdCBQaWNrZXJDb2x1bW4gPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuaW9uQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25DaGFuZ2VcIiwgNyk7XG4gICAgdGhpcy5pc1Njcm9sbGluZyA9IGZhbHNlO1xuICAgIHRoaXMuaXNDb2x1bW5WaXNpYmxlID0gZmFsc2U7XG4gICAgdGhpcy5jYW5FeGl0SW5wdXRNb2RlID0gdHJ1ZTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlVGV4dE9uU2Nyb2xsID0gZmFsc2U7XG4gICAgdGhpcy5hcmlhTGFiZWwgPSBudWxsO1xuICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIHRoZSB1c2VyIGNhbm5vdCBpbnRlcmFjdCB3aXRoIHRoZSBwaWNrZXIuXG4gICAgICovXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIFRoZSBjb2xvciB0byB1c2UgZnJvbSB5b3VyIGFwcGxpY2F0aW9uJ3MgY29sb3IgcGFsZXR0ZS5cbiAgICAgKiBEZWZhdWx0IG9wdGlvbnMgYXJlOiBgXCJwcmltYXJ5XCJgLCBgXCJzZWNvbmRhcnlcImAsIGBcInRlcnRpYXJ5XCJgLCBgXCJzdWNjZXNzXCJgLCBgXCJ3YXJuaW5nXCJgLCBgXCJkYW5nZXJcImAsIGBcImxpZ2h0XCJgLCBgXCJtZWRpdW1cImAsIGFuZCBgXCJkYXJrXCJgLlxuICAgICAqIEZvciBtb3JlIGluZm9ybWF0aW9uIG9uIGNvbG9ycywgc2VlIFt0aGVtaW5nXSgvZG9jcy90aGVtaW5nL2Jhc2ljcykuXG4gICAgICovXG4gICAgdGhpcy5jb2xvciA9ICdwcmltYXJ5JztcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIHRhcHBpbmcgdGhlIHBpY2tlciB3aWxsXG4gICAgICogcmV2ZWFsIGEgbnVtYmVyIGlucHV0IGtleWJvYXJkIHRoYXQgbGV0c1xuICAgICAqIHRoZSB1c2VyIHR5cGUgaW4gdmFsdWVzIGZvciBlYWNoIHBpY2tlclxuICAgICAqIGNvbHVtbi4gVGhpcyBpcyB1c2VmdWwgd2hlbiB3b3JraW5nXG4gICAgICogd2l0aCB0aW1lIHBpY2tlcnMuXG4gICAgICpcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICB0aGlzLm51bWVyaWNJbnB1dCA9IGZhbHNlO1xuICAgIHRoaXMuY2VudGVyUGlja2VySXRlbUluVmlldyA9ICh0YXJnZXQsIHNtb290aCA9IHRydWUsIGNhbkV4aXRJbnB1dE1vZGUgPSB0cnVlKSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGlzQ29sdW1uVmlzaWJsZSxcbiAgICAgICAgc2Nyb2xsRWxcbiAgICAgIH0gPSB0aGlzO1xuICAgICAgaWYgKGlzQ29sdW1uVmlzaWJsZSAmJiBzY3JvbGxFbCkge1xuICAgICAgICAvLyAoVmVydGljYWwgb2Zmc2V0IGZyb20gcGFyZW50KSAtICh0aHJlZSBlbXB0eSBwaWNrZXIgcm93cykgKyAoaGFsZiB0aGUgaGVpZ2h0IG9mIHRoZSB0YXJnZXQgdG8gZW5zdXJlIHRoZSBzY3JvbGwgdHJpZ2dlcnMpXG4gICAgICAgIGNvbnN0IHRvcCA9IHRhcmdldC5vZmZzZXRUb3AgLSAzICogdGFyZ2V0LmNsaWVudEhlaWdodCArIHRhcmdldC5jbGllbnRIZWlnaHQgLyAyO1xuICAgICAgICBpZiAoc2Nyb2xsRWwuc2Nyb2xsVG9wICE9PSB0b3ApIHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBTZXR0aW5nIHRoaXMgZmxhZyBwcmV2ZW50cyBpbnB1dFxuICAgICAgICAgICAqIG1vZGUgZnJvbSBleGl0aW5nIGluIHRoZSBwaWNrZXIgY29sdW1uJ3NcbiAgICAgICAgICAgKiBzY3JvbGwgY2FsbGJhY2suIFRoaXMgaXMgdXNlZnVsIHdoZW4gdGhlIHVzZXIgbWFudWFsbHlcbiAgICAgICAgICAgKiB0YXBzIGFuIGl0ZW0gb3IgdHlwZXMgb24gdGhlIGtleWJvYXJkIGFzIGJvdGhcbiAgICAgICAgICAgKiBvZiB0aGVzZSBjYW4gY2F1c2UgYSBzY3JvbGwgdG8gb2NjdXIuXG4gICAgICAgICAgICovXG4gICAgICAgICAgdGhpcy5jYW5FeGl0SW5wdXRNb2RlID0gY2FuRXhpdElucHV0TW9kZTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlVGV4dE9uU2Nyb2xsID0gZmFsc2U7XG4gICAgICAgICAgc2Nyb2xsRWwuc2Nyb2xsKHtcbiAgICAgICAgICAgIHRvcCxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICBiZWhhdmlvcjogc21vb3RoID8gJ3Ntb290aCcgOiB1bmRlZmluZWRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5zZXRQaWNrZXJJdGVtQWN0aXZlU3RhdGUgPSAoaXRlbSwgaXNBY3RpdmUpID0+IHtcbiAgICAgIGlmIChpc0FjdGl2ZSkge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoUElDS0VSX0lURU1fQUNUSVZFX0NMQVNTKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShQSUNLRVJfSVRFTV9BQ1RJVkVfQ0xBU1MpO1xuICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogV2hlbiBpb25JbnB1dE1vZGVDaGFuZ2UgaXMgZW1pdHRlZCwgZWFjaCBjb2x1bW5cbiAgICAgKiBuZWVkcyB0byBjaGVjayBpZiBpdCBpcyB0aGUgb25lIGJlaW5nIG1hZGUgYXZhaWxhYmxlXG4gICAgICogZm9yIHRleHQgZW50cnkuXG4gICAgICovXG4gICAgdGhpcy5pbnB1dE1vZGVDaGFuZ2UgPSBldiA9PiB7XG4gICAgICBpZiAoIXRoaXMubnVtZXJpY0lucHV0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHtcbiAgICAgICAgdXNlSW5wdXRNb2RlLFxuICAgICAgICBpbnB1dE1vZGVDb2x1bW5cbiAgICAgIH0gPSBldi5kZXRhaWw7XG4gICAgICAvKipcbiAgICAgICAqIElmIGlucHV0TW9kZUNvbHVtbiBpcyB1bmRlZmluZWQgdGhlbiB0aGlzIG1lYW5zXG4gICAgICAgKiBhbGwgbnVtZXJpY0lucHV0IGNvbHVtbnMgYXJlIGJlaW5nIHNlbGVjdGVkLlxuICAgICAgICovXG4gICAgICBjb25zdCBpc0NvbHVtbkFjdGl2ZSA9IGlucHV0TW9kZUNvbHVtbiA9PT0gdW5kZWZpbmVkIHx8IGlucHV0TW9kZUNvbHVtbiA9PT0gdGhpcy5lbDtcbiAgICAgIGlmICghdXNlSW5wdXRNb2RlIHx8ICFpc0NvbHVtbkFjdGl2ZSkge1xuICAgICAgICB0aGlzLnNldElucHV0TW9kZUFjdGl2ZShmYWxzZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0SW5wdXRNb2RlQWN0aXZlKHRydWUpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0dGluZyBpc0FjdGl2ZSB3aWxsIGNhdXNlIGEgcmUtcmVuZGVyLlxuICAgICAqIEFzIGEgcmVzdWx0LCB3ZSBkbyBub3Qgd2FudCB0byBjYXVzZSB0aGVcbiAgICAgKiByZS1yZW5kZXIgbWlkIHNjcm9sbCBhcyB0aGlzIHdpbGwgY2F1c2VcbiAgICAgKiB0aGUgcGlja2VyIGNvbHVtbiB0byBqdW1wIGJhY2sgdG9cbiAgICAgKiB3aGF0ZXZlciB2YWx1ZSB3YXMgc2VsZWN0ZWQgYXQgdGhlXG4gICAgICogc3RhcnQgb2YgdGhlIHNjcm9sbCBpbnRlcmFjdGlvbi5cbiAgICAgKi9cbiAgICB0aGlzLnNldElucHV0TW9kZUFjdGl2ZSA9IHN0YXRlID0+IHtcbiAgICAgIGlmICh0aGlzLmlzU2Nyb2xsaW5nKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsRW5kQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHN0YXRlO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmlzQWN0aXZlID0gc3RhdGU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBXaGVuIHRoZSBjb2x1bW4gc2Nyb2xscywgdGhlIGNvbXBvbmVudFxuICAgICAqIG5lZWRzIHRvIGRldGVybWluZSB3aGljaCBpdGVtIGlzIGNlbnRlcmVkXG4gICAgICogaW4gdGhlIHZpZXcgYW5kIHdpbGwgZW1pdCBhbiBpb25DaGFuZ2Ugd2l0aFxuICAgICAqIHRoZSBpdGVtIG9iamVjdC5cbiAgICAgKi9cbiAgICB0aGlzLmluaXRpYWxpemVTY3JvbGxMaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgIC8qKlxuICAgICAgICogVGhlIGhhcHRpY3MgZm9yIHRoZSB3aGVlbCBwaWNrZXIgYXJlXG4gICAgICAgKiBhbiBpT1Mtb25seSBmZWF0dXJlLiBBcyBhIHJlc3VsdCwgdGhleSBzaG91bGRcbiAgICAgICAqIGJlIGRpc2FibGVkIG9uIEFuZHJvaWQuXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IGVuYWJsZUhhcHRpY3MgPSBpc1BsYXRmb3JtKCdpb3MnKTtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZWwsXG4gICAgICAgIHNjcm9sbEVsXG4gICAgICB9ID0gdGhpcztcbiAgICAgIGxldCB0aW1lb3V0O1xuICAgICAgbGV0IGFjdGl2ZUVsID0gdGhpcy5hY3RpdmVJdGVtO1xuICAgICAgY29uc3Qgc2Nyb2xsQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgIHJhZigoKSA9PiB7XG4gICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgIGlmICghc2Nyb2xsRWwpIHJldHVybjtcbiAgICAgICAgICBpZiAodGltZW91dCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgICAgdGltZW91dCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCF0aGlzLmlzU2Nyb2xsaW5nKSB7XG4gICAgICAgICAgICBlbmFibGVIYXB0aWNzICYmIGhhcHRpY1NlbGVjdGlvblN0YXJ0KCk7XG4gICAgICAgICAgICB0aGlzLmlzU2Nyb2xsaW5nID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogU2VsZWN0IGl0ZW0gaW4gdGhlIGNlbnRlciBvZiB0aGUgY29sdW1uXG4gICAgICAgICAgICogd2hpY2ggaXMgdGhlIG1vbnRoL3llYXIgdGhhdCB3ZSB3YW50IHRvIHNlbGVjdFxuICAgICAgICAgICAqL1xuICAgICAgICAgIGNvbnN0IGJib3ggPSBzY3JvbGxFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICBjb25zdCBjZW50ZXJYID0gYmJveC54ICsgYmJveC53aWR0aCAvIDI7XG4gICAgICAgICAgY29uc3QgY2VudGVyWSA9IGJib3gueSArIGJib3guaGVpZ2h0IC8gMjtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBlbGVtZW50RnJvbVBvaW50IHJldHVybnMgdGhlIHRvcC1tb3N0IGVsZW1lbnQuXG4gICAgICAgICAgICogVGhpcyBtZWFucyB0aGF0IGlmIGFuIGlvbi1iYWNrZHJvcCBpcyBvdmVybGF5aW5nIHRoZVxuICAgICAgICAgICAqIHBpY2tlciB0aGVuIHRoZSBhcHByb3ByaWF0ZSBwaWNrZXIgY29sdW1uIG9wdGlvbiB3aWxsXG4gICAgICAgICAgICogbm90IGJlIHNlbGVjdGVkLiBUbyBhY2NvdW50IGZvciB0aGlzLCB3ZSB1c2UgZWxlbWVudHNGcm9tUG9pbnRcbiAgICAgICAgICAgKiBhbmQgdXNlIGFuIEFycmF5LmZpbmQgdG8gZmluZCB0aGUgYXBwcm9wcmlhdGUgY29sdW1uIG9wdGlvblxuICAgICAgICAgICAqIGF0IHRoYXQgcG9pbnQuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBBZGRpdGlvbmFsbHksIHRoZSBwaWNrZXIgY29sdW1uIGNvdWxkIGJlIHVzZWQgaW4gdGhlXG4gICAgICAgICAgICogU2hhZG93IERPTSAoaS5lLiBpbiBpb24tZGF0ZXRpbWUpIHNvIHdlIG5lZWQgdG8gbWFrZVxuICAgICAgICAgICAqIHN1cmUgd2UgYXJlIGNob29zaW5nIHRoZSBjb3JyZWN0IGhvc3Qgb3RoZXJ3aXNlXG4gICAgICAgICAgICogdGhlIGVsZW1lbnRzIHJldHVybnMgYnkgZWxlbWVudHNGcm9tUG9pbnQgd2lsbCBiZVxuICAgICAgICAgICAqIHJldGFyZ2V0ZWQuIFRvIGFjY291bnQgZm9yIHRoaXMsIHdlIGNoZWNrIHRvIHNlZVxuICAgICAgICAgICAqIGlmIHRoZSBwaWNrZXIgY29sdW1uIGhhcyBhIHBhcmVudCBzaGFkb3cgcm9vdC4gSWZcbiAgICAgICAgICAgKiBzbywgd2UgdXNlIHRoYXQgc2hhZG93IHJvb3Qgd2hlbiBkb2luZyBlbGVtZW50c0Zyb21Qb2ludC5cbiAgICAgICAgICAgKiBPdGhlcndpc2UsIHdlIGp1c3QgdXNlIHRoZSBkb2N1bWVudC5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBjb25zdCByb290Tm9kZSA9IGVsLmdldFJvb3ROb2RlKCk7XG4gICAgICAgICAgY29uc3QgaGFzUGFyZW50U2hhZG93ID0gcm9vdE5vZGUgaW5zdGFuY2VvZiBTaGFkb3dSb290O1xuICAgICAgICAgIGNvbnN0IHJlZmVyZW5jZU5vZGUgPSBoYXNQYXJlbnRTaGFkb3cgPyByb290Tm9kZSA6IGRvYztcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBJZiB0aGUgcmVmZXJlbmNlIG5vZGUgaXMgdW5kZWZpbmVkXG4gICAgICAgICAgICogdGhlbiBpdCdzIGxpa2VseSB0aGF0IGRvYyBpcyB1bmRlZmluZWRcbiAgICAgICAgICAgKiBkdWUgdG8gYmVpbmcgaW4gYW4gU1NSIGVudmlyb25tZW50LlxuICAgICAgICAgICAqL1xuICAgICAgICAgIGlmIChyZWZlcmVuY2VOb2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgZWxlbWVudHNBdFBvaW50ID0gcmVmZXJlbmNlTm9kZS5lbGVtZW50c0Zyb21Qb2ludChjZW50ZXJYLCBjZW50ZXJZKTtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBlbGVtZW50c0Zyb21Qb2ludCBjYW4gcmV0dXJucyBtdWx0aXBsZSBlbGVtZW50c1xuICAgICAgICAgICAqIHNvIGZpbmQgdGhlIHJlbGV2YW50IHBpY2tlciBjb2x1bW4gb3B0aW9uIGlmIG9uZSBleGlzdHMuXG4gICAgICAgICAgICovXG4gICAgICAgICAgbGV0IG5ld0FjdGl2ZUVsZW1lbnQgPSBlbGVtZW50c0F0UG9pbnQuZmluZChlbCA9PiBlbC50YWdOYW1lID09PSAnSU9OLVBJQ0tFUi1DT0xVTU4tT1BUSU9OJyk7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogVE9ETyhGVy02NTk0KTogUmVtb3ZlIHRoaXMgd29ya2Fyb3VuZCB3aGVuIGlPUyAxNiBpcyBubyBsb25nZXJcbiAgICAgICAgICAgKiBzdXBwb3J0ZWQuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBJZiBgZWxlbWVudHNGcm9tUG9pbnRgIGZhaWxlZCB0byBmaW5kIHRoZSBhY3RpdmUgZWxlbWVudCAoYSBrbm93blxuICAgICAgICAgICAqIGlzc3VlIG9uIGlPUyAxNiB3aGVuIGVsZW1lbnRzIGFyZSBpbiBhIFNoYWRvdyBET00gYW5kIHRoZVxuICAgICAgICAgICAqIHJlZmVyZW5jZU5vZGUgaXMgdGhlIGRvY3VtZW50KSwgYSBmYWxsYmFjayB0byBgZWxlbWVudEZyb21Qb2ludGBcbiAgICAgICAgICAgKiBpcyB1c2VkLiBXaGlsZSBgZWxlbWVudHNGcm9tUG9pbnRgIHJldHVybnMgYWxsIGVsZW1lbnRzLFxuICAgICAgICAgICAqIGBlbGVtZW50RnJvbVBvaW50YCByZXR1cm5zIG9ubHkgdGhlIHRvcC1tb3N0LCB3aGljaCBpcyBzdWZmaWNpZW50XG4gICAgICAgICAgICogZm9yIHRoaXMgdXNlIGNhc2UgYW5kIGFwcGVhcnMgdG8gaGFuZGxlIFNoYWRvdyBET00gcmV0YXJnZXRpbmdcbiAgICAgICAgICAgKiBtb3JlIHJlbGlhYmx5IGluIHRoaXMgc3BlY2lmaWMgaU9TIGJ1Zy5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBpZiAobmV3QWN0aXZlRWxlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBmYWxsYmFja0FjdGl2ZUVsZW1lbnQgPSByZWZlcmVuY2VOb2RlLmVsZW1lbnRGcm9tUG9pbnQoY2VudGVyWCwgY2VudGVyWSk7XG4gICAgICAgICAgICBpZiAoKGZhbGxiYWNrQWN0aXZlRWxlbWVudCA9PT0gbnVsbCB8fCBmYWxsYmFja0FjdGl2ZUVsZW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGZhbGxiYWNrQWN0aXZlRWxlbWVudC50YWdOYW1lKSA9PT0gJ0lPTi1QSUNLRVItQ09MVU1OLU9QVElPTicpIHtcbiAgICAgICAgICAgICAgbmV3QWN0aXZlRWxlbWVudCA9IGZhbGxiYWNrQWN0aXZlRWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGFjdGl2ZUVsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0UGlja2VySXRlbUFjdGl2ZVN0YXRlKGFjdGl2ZUVsLCBmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChuZXdBY3RpdmVFbGVtZW50ID09PSB1bmRlZmluZWQgfHwgbmV3QWN0aXZlRWxlbWVudC5kaXNhYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBJZiB3ZSBhcmUgc2VsZWN0aW5nIGEgbmV3IHZhbHVlLFxuICAgICAgICAgICAqIHdlIG5lZWQgdG8gcnVuIGhhcHRpY3MgYWdhaW4uXG4gICAgICAgICAgICovXG4gICAgICAgICAgaWYgKG5ld0FjdGl2ZUVsZW1lbnQgIT09IGFjdGl2ZUVsKSB7XG4gICAgICAgICAgICBlbmFibGVIYXB0aWNzICYmIGhhcHRpY1NlbGVjdGlvbkNoYW5nZWQoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNhbkV4aXRJbnB1dE1vZGUpIHtcbiAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAqIFRoZSBuYXRpdmUgaU9TIHdoZWVsIHBpY2tlclxuICAgICAgICAgICAgICAgKiBvbmx5IGRpc21pc3NlcyB0aGUga2V5Ym9hcmRcbiAgICAgICAgICAgICAgICogb25jZSB0aGUgc2VsZWN0ZWQgaXRlbSBoYXMgY2hhbmdlZFxuICAgICAgICAgICAgICAgKiBhcyBhIHJlc3VsdCBvZiBhIHN3aXBlXG4gICAgICAgICAgICAgICAqIGZyb20gdGhlIHVzZXIuIElmIGBjYW5FeGl0SW5wdXRNb2RlYCBpc1xuICAgICAgICAgICAgICAgKiBgZmFsc2VgIHRoZW4gdGhpcyBtZWFucyB0aGF0IHRoZVxuICAgICAgICAgICAgICAgKiBzY3JvbGwgaXMgaGFwcGVuaW5nIGFzIGEgcmVzdWx0IG9mXG4gICAgICAgICAgICAgICAqIHRoZSBgdmFsdWVgIHByb3BlcnR5IHByb2dyYW1tYXRpY2FsbHkgY2hhbmdpbmdcbiAgICAgICAgICAgICAgICogZWl0aGVyIGJ5IGFuIGFwcGxpY2F0aW9uIG9yIGJ5IHRoZSB1c2VyIHZpYSB0aGUga2V5Ym9hcmQuXG4gICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICB0aGlzLmV4aXRJbnB1dE1vZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYWN0aXZlRWwgPSBuZXdBY3RpdmVFbGVtZW50O1xuICAgICAgICAgIHRoaXMuc2V0UGlja2VySXRlbUFjdGl2ZVN0YXRlKG5ld0FjdGl2ZUVsZW1lbnQsIHRydWUpO1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFNldCB0aGUgYXJpYS12YWx1ZXRleHQgZXZlbiB0aG91Z2ggdGhlIHZhbHVlIHByb3AgaGFzIG5vdCBiZWVuIHVwZGF0ZWQgeWV0LlxuICAgICAgICAgICAqIFRoaXMgZW5hYmxlcyBzb21lIHNjcmVlbiByZWFkZXJzIHRvIGFubm91bmNlIHRoZSB2YWx1ZSBhcyB0aGUgdXNlcnMgZHJhZ1xuICAgICAgICAgICAqIGFzIG9wcG9zZWQgdG8gd2hlbiB0aGVpciByZWxlYXNlIHRoZWlyIHBvaW50ZXIgZnJvbSB0aGUgc2NyZWVuLlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogV2hlbiB0aGUgdmFsdWUgaXMgcHJvZ3JhbW1hdGljYWxseSB1cGRhdGVkLCB3ZSB3aWxsIHNtb290aGx5IHNjcm9sbFxuICAgICAgICAgICAqIHRvIHRoZSBuZXcgb3B0aW9uLiBIb3dldmVyLCB3ZSBkbyBub3Qgd2FudCB0byB1cGRhdGUgYXJpYS12YWx1ZXRleHQgbWlkLXNjcm9sbFxuICAgICAgICAgICAqIGFzIHRoYXQgY2FuIGNhdXNlIHRoZSBvbGQgdmFsdWUgdG8gYmUgYnJpZWZseSBzZXQgYmVmb3JlIGJlaW5nIHNldCB0byB0aGVcbiAgICAgICAgICAgKiBjb3JyZWN0IG9wdGlvbi4gVGhpcyB3aWxsIGNhdXNlIHNvbWUgc2NyZWVuIHJlYWRlcnMgdG8gYW5ub3VuY2UgdGhlIG9sZCB2YWx1ZVxuICAgICAgICAgICAqIGFnYWluIGJlZm9yZSBhbm5vdW5jaW5nIHRoZSBuZXcgdmFsdWUuIFRoZSBjb3JyZWN0IHZhbHVldGV4dCB3aWxsIGJlIHNldCBvbiByZW5kZXIuXG4gICAgICAgICAgICovXG4gICAgICAgICAgaWYgKHRoaXMudXBkYXRlVmFsdWVUZXh0T25TY3JvbGwpIHtcbiAgICAgICAgICAgIChfYSA9IHRoaXMuYXNzaXN0aXZlRm9jdXNhYmxlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2V0QXR0cmlidXRlKCdhcmlhLXZhbHVldGV4dCcsIHRoaXMuZ2V0T3B0aW9uVmFsdWVUZXh0KG5ld0FjdGl2ZUVsZW1lbnQpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc1Njcm9sbGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZVRleHRPblNjcm9sbCA9IHRydWU7XG4gICAgICAgICAgICBlbmFibGVIYXB0aWNzICYmIGhhcHRpY1NlbGVjdGlvbkVuZCgpO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDZXJ0YWluIHRhc2tzIChzdWNoIGFzIHRob3NlIHRoYXRcbiAgICAgICAgICAgICAqIGNhdXNlIHJlLXJlbmRlcnMpIHNob3VsZCBvbmx5IGJlIGRvbmVcbiAgICAgICAgICAgICAqIG9uY2Ugc2Nyb2xsaW5nIGhhcyBmaW5pc2hlZCwgb3RoZXJ3aXNlXG4gICAgICAgICAgICAgKiBmbGlja2VyaW5nIG1heSBvY2N1ci5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICBzY3JvbGxFbmRDYWxsYmFja1xuICAgICAgICAgICAgfSA9IHRoaXM7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRW5kQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgc2Nyb2xsRW5kQ2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgdGhpcy5zY3JvbGxFbmRDYWxsYmFjayA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUmVzZXQgdGhpcyBmbGFnIGFzIHRoZVxuICAgICAgICAgICAgICogbmV4dCBzY3JvbGwgaW50ZXJhY3Rpb24gY291bGRcbiAgICAgICAgICAgICAqIGJlIGEgc2Nyb2xsIGZyb20gdGhlIHVzZXIuIEluIHRoaXNcbiAgICAgICAgICAgICAqIGNhc2UsIHdlIHNob3VsZCBleGl0IGlucHV0IG1vZGUuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMuY2FuRXhpdElucHV0TW9kZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNldFZhbHVlKG5ld0FjdGl2ZUVsZW1lbnQudmFsdWUpO1xuICAgICAgICAgIH0sIDI1MCk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIC8qKlxuICAgICAgICogV3JhcCB0aGlzIGluIGFuIHJhZiBzbyB0aGF0IHRoZSBzY3JvbGwgY2FsbGJhY2tcbiAgICAgICAqIGRvZXMgbm90IGZpcmUgd2hlbiBjb21wb25lbnQgaXMgaW5pdGlhbGx5IHNob3duLlxuICAgICAgICovXG4gICAgICByYWYoKCkgPT4ge1xuICAgICAgICBpZiAoIXNjcm9sbEVsKSByZXR1cm47XG4gICAgICAgIHNjcm9sbEVsLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbENhbGxiYWNrKTtcbiAgICAgICAgdGhpcy5kZXN0cm95U2Nyb2xsTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICAgICAgc2Nyb2xsRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsQ2FsbGJhY2spO1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUZWxscyB0aGUgcGFyZW50IHBpY2tlciB0b1xuICAgICAqIGV4aXQgdGV4dCBlbnRyeSBtb2RlLiBUaGlzIGlzIG9ubHkgY2FsbGVkXG4gICAgICogd2hlbiB0aGUgc2VsZWN0ZWQgaXRlbSBjaGFuZ2VzIGR1cmluZyBzY3JvbGwsIHNvXG4gICAgICogd2Uga25vdyB0aGF0IHRoZSB1c2VyIGxpa2VseSB3YW50cyB0byBzY3JvbGxcbiAgICAgKiBpbnN0ZWFkIG9mIHR5cGUuXG4gICAgICovXG4gICAgdGhpcy5leGl0SW5wdXRNb2RlID0gKCkgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBwYXJlbnRFbFxuICAgICAgfSA9IHRoaXM7XG4gICAgICBpZiAocGFyZW50RWwgPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgcGFyZW50RWwuZXhpdElucHV0TW9kZSgpO1xuICAgICAgLyoqXG4gICAgICAgKiBzZXRJbnB1dE1vZGVBY3RpdmUgb25seSB0YWtlc1xuICAgICAgICogZWZmZWN0IG9uY2Ugc2Nyb2xsaW5nIHN0b3BzIHRvIGF2b2lkXG4gICAgICAgKiBhIGNvbXBvbmVudCByZS1yZW5kZXIgd2hpbGUgc2Nyb2xsaW5nLlxuICAgICAgICogSG93ZXZlciwgd2Ugd2FudCB0aGUgdmlzdWFsIGFjdGl2ZVxuICAgICAgICogaW5kaWNhdG9yIHRvIGdvIGF3YXkgaW1tZWRpYXRlbHksIHNvXG4gICAgICAgKiB3ZSBjYWxsIGNsYXNzTGlzdC5yZW1vdmUgaGVyZS5cbiAgICAgICAqL1xuICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCdwaWNrZXItY29sdW1uLWFjdGl2ZScpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRmluZCB0aGUgbmV4dCBlbmFibGVkIG9wdGlvbiBhZnRlciB0aGUgYWN0aXZlIG9wdGlvbi5cbiAgICAgKiBAcGFyYW0gc3RyaWRlIC0gSG93IG1hbnkgb3B0aW9ucyB0byBcImp1bXBcIiBvdmVyIGluIG9yZGVyIHRvIHNlbGVjdCB0aGUgbmV4dCBvcHRpb24uXG4gICAgICogVGhpcyBjYW4gYmUgdXNlZCB0byBpbXBsZW1lbnQgUGFnZVVwL1BhZ2VEb3duIGJlaGF2aW9ycyB3aGVyZSBwcmVzc2luZyB0aGVzZSBrZXlzXG4gICAgICogc2Nyb2xscyB0aGUgcGlja2VyIGJ5IG1vcmUgdGhhbiAxIG9wdGlvbi4gRm9yIGV4YW1wbGUsIGEgc3RyaWRlIG9mIDUgbWVhbnMgc2VsZWN0XG4gICAgICogdGhlIGVuYWJsZWQgb3B0aW9uIDUgb3B0aW9ucyBhZnRlciB0aGUgYWN0aXZlIG9uZS4gTm90ZSB0aGF0IHRoZSBhY3R1YWwgb3B0aW9uIHNlbGVjdGVkXG4gICAgICogbWF5IGJlIHBhc3QgdGhlIHN0cmlkZSBpZiB0aGUgb3B0aW9uIGF0IHRoZSBzdHJpZGUgaXMgZGlzYWJsZWQuXG4gICAgICovXG4gICAgdGhpcy5maW5kTmV4dE9wdGlvbiA9IChzdHJpZGUgPSAxKSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGFjdGl2ZUl0ZW1cbiAgICAgIH0gPSB0aGlzO1xuICAgICAgaWYgKCFhY3RpdmVJdGVtKSByZXR1cm4gbnVsbDtcbiAgICAgIGxldCBwcmV2Tm9kZSA9IGFjdGl2ZUl0ZW07XG4gICAgICBsZXQgbm9kZSA9IGFjdGl2ZUl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xuICAgICAgICBpZiAoc3RyaWRlID4gMCkge1xuICAgICAgICAgIHN0cmlkZS0tO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlLnRhZ05hbWUgPT09ICdJT04tUElDS0VSLUNPTFVNTi1PUFRJT04nICYmICFub2RlLmRpc2FibGVkICYmIHN0cmlkZSA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9XG4gICAgICAgIHByZXZOb2RlID0gbm9kZTtcbiAgICAgICAgLy8gVXNlIG5leHRFbGVtZW50U2libGluZyBpbnN0ZWFkIG9mIG5leHRTaWJsaW5nIHRvIGF2b2lkIHRleHQvY29tbWVudCBub2Rlc1xuICAgICAgICBub2RlID0gbm9kZS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJldk5vZGU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBGaW5kIHRoZSBuZXh0IGVuYWJsZWQgb3B0aW9uIGFmdGVyIHRoZSBhY3RpdmUgb3B0aW9uLlxuICAgICAqIEBwYXJhbSBzdHJpZGUgLSBIb3cgbWFueSBvcHRpb25zIHRvIFwianVtcFwiIG92ZXIgaW4gb3JkZXIgdG8gc2VsZWN0IHRoZSBuZXh0IG9wdGlvbi5cbiAgICAgKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGltcGxlbWVudCBQYWdlVXAvUGFnZURvd24gYmVoYXZpb3JzIHdoZXJlIHByZXNzaW5nIHRoZXNlIGtleXNcbiAgICAgKiBzY3JvbGxzIHRoZSBwaWNrZXIgYnkgbW9yZSB0aGFuIDEgb3B0aW9uLiBGb3IgZXhhbXBsZSwgYSBzdHJpZGUgb2YgNSBtZWFucyBzZWxlY3RcbiAgICAgKiB0aGUgZW5hYmxlZCBvcHRpb24gNSBvcHRpb25zIGJlZm9yZSB0aGUgYWN0aXZlIG9uZS4gTm90ZSB0aGF0IHRoZSBhY3R1YWwgb3B0aW9uIHNlbGVjdGVkXG4gICAgICogIG1heSBiZSBwYXN0IHRoZSBzdHJpZGUgaWYgdGhlIG9wdGlvbiBhdCB0aGUgc3RyaWRlIGlzIGRpc2FibGVkLlxuICAgICAqL1xuICAgIHRoaXMuZmluZFByZXZpb3VzT3B0aW9uID0gKHN0cmlkZSA9IDEpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgYWN0aXZlSXRlbVxuICAgICAgfSA9IHRoaXM7XG4gICAgICBpZiAoIWFjdGl2ZUl0ZW0pIHJldHVybiBudWxsO1xuICAgICAgbGV0IG5leHROb2RlID0gYWN0aXZlSXRlbTtcbiAgICAgIGxldCBub2RlID0gYWN0aXZlSXRlbS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xuICAgICAgICBpZiAoc3RyaWRlID4gMCkge1xuICAgICAgICAgIHN0cmlkZS0tO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlLnRhZ05hbWUgPT09ICdJT04tUElDS0VSLUNPTFVNTi1PUFRJT04nICYmICFub2RlLmRpc2FibGVkICYmIHN0cmlkZSA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9XG4gICAgICAgIG5leHROb2RlID0gbm9kZTtcbiAgICAgICAgLy8gVXNlIHByZXZpb3VzRWxlbWVudFNpYmxpbmcgaW5zdGVhZCBvZiBwcmV2aW91c1NpYmxpbmcgdG8gYXZvaWQgdGV4dC9jb21tZW50IG5vZGVzXG4gICAgICAgIG5vZGUgPSBub2RlLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV4dE5vZGU7XG4gICAgfTtcbiAgICB0aGlzLm9uS2V5RG93biA9IGV2ID0+IHtcbiAgICAgIC8qKlxuICAgICAgICogVGhlIGJlbG93IG9wZXJhdGlvbnMgc2hvdWxkIGJlIGludmVydGVkIHdoZW4gcnVubmluZyBvbiBhIG1vYmlsZSBkZXZpY2UuXG4gICAgICAgKiBGb3IgZXhhbXBsZSwgc3dpcGluZyB1cCB3aWxsIGRpc3BhdGNoIGFuIFwiQXJyb3dVcFwiIGV2ZW50LiBPbiBkZXNrdG9wLFxuICAgICAgICogdGhpcyBzaG91bGQgY2F1c2UgdGhlIHByZXZpb3VzIG9wdGlvbiB0byBiZSBzZWxlY3RlZC4gT24gbW9iaWxlLCBzd2lwaW5nXG4gICAgICAgKiB1cCBjYXVzZXMgYSB2aWV3IHRvIHNjcm9sbCBkb3duLiBBcyBhIHJlc3VsdCwgc3dpcGluZyB1cCBvbiBtb2JpbGUgc2hvdWxkXG4gICAgICAgKiBjYXVzZSB0aGUgbmV4dCBvcHRpb24gdG8gYmUgc2VsZWN0ZWQuIFRoZSBIb21lL0VuZCBvcGVyYXRpb25zIHJlbWFpblxuICAgICAgICogdW5jaGFuZ2VkIGJlY2F1c2UgdGhvc2UgYWx3YXlzIHJlcHJlc2VudCB0aGUgZmlyc3QvbGFzdCBvcHRpb25zLCByZXNwZWN0aXZlbHkuXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IG1vYmlsZSA9IGlzUGxhdGZvcm0oJ21vYmlsZScpO1xuICAgICAgbGV0IG5ld09wdGlvbiA9IG51bGw7XG4gICAgICBzd2l0Y2ggKGV2LmtleSkge1xuICAgICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICAgIG5ld09wdGlvbiA9IG1vYmlsZSA/IHRoaXMuZmluZFByZXZpb3VzT3B0aW9uKCkgOiB0aGlzLmZpbmROZXh0T3B0aW9uKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICAgIG5ld09wdGlvbiA9IG1vYmlsZSA/IHRoaXMuZmluZE5leHRPcHRpb24oKSA6IHRoaXMuZmluZFByZXZpb3VzT3B0aW9uKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1BhZ2VVcCc6XG4gICAgICAgICAgbmV3T3B0aW9uID0gbW9iaWxlID8gdGhpcy5maW5kTmV4dE9wdGlvbig1KSA6IHRoaXMuZmluZFByZXZpb3VzT3B0aW9uKDUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdQYWdlRG93bic6XG4gICAgICAgICAgbmV3T3B0aW9uID0gbW9iaWxlID8gdGhpcy5maW5kUHJldmlvdXNPcHRpb24oNSkgOiB0aGlzLmZpbmROZXh0T3B0aW9uKDUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdIb21lJzpcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCB0aGUgZmlyc3QgY2hpbGQgd2lsbCBiZSBhbiBpb24tcGlja2VyLWNvbHVtbi1vcHRpb24sXG4gICAgICAgICAgICogc28gd2UgZG8gbm90IHVzZSBmaXJzdEVsZW1lbnRDaGlsZC5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBuZXdPcHRpb24gPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1waWNrZXItY29sdW1uLW9wdGlvbjpmaXJzdC1vZi10eXBlJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0VuZCc6XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgdGhlIGxhc3QgY2hpbGQgd2lsbCBiZSBhbiBpb24tcGlja2VyLWNvbHVtbi1vcHRpb24sXG4gICAgICAgICAgICogc28gd2UgZG8gbm90IHVzZSBsYXN0RWxlbWVudENoaWxkLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIG5ld09wdGlvbiA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignaW9uLXBpY2tlci1jb2x1bW4tb3B0aW9uOmxhc3Qtb2YtdHlwZScpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKG5ld09wdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNldFZhbHVlKG5ld09wdGlvbi52YWx1ZSk7XG4gICAgICAgIC8vIFRoaXMgc3RvcHMgYW55IGRlZmF1bHQgYnJvd3NlciBiZWhhdmlvciBzdWNoIGFzIHNjcm9sbGluZ1xuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogVXRpbGl0eSB0byBnZW5lcmF0ZSB0aGUgY29ycmVjdCB0ZXh0IGZvciBhcmlhLXZhbHVldGV4dC5cbiAgICAgKi9cbiAgICB0aGlzLmdldE9wdGlvblZhbHVlVGV4dCA9IGVsID0+IHtcbiAgICAgIHZhciBfYTtcbiAgICAgIHJldHVybiBlbCA/IChfYSA9IGVsLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBlbC5pbm5lclRleHQgOiAnJztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbmRlciBhbiBlbGVtZW50IHRoYXQgb3ZlcmxheXMgdGhlIGNvbHVtbi4gVGhpcyBlbGVtZW50IGlzIGZvciBhc3Npc3RpdmVcbiAgICAgKiB0ZWNoIHRvIGFsbG93IHVzZXJzIHRvIG5hdmlnYXRlIHRoZSBjb2x1bW4gdXAvZG93bi4gVGhpcyBlbGVtZW50IHNob3VsZCByZWNlaXZlXG4gICAgICogZm9jdXMgYXMgaXQgbGlzdGVucyBmb3Igc3ludGhlc2l6ZWQga2V5Ym9hcmQgZXZlbnRzIGFzIHJlcXVpcmVkIGJ5IHRoZVxuICAgICAqIHNsaWRlciByb2xlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BY2Nlc3NpYmlsaXR5L0FSSUEvUm9sZXMvc2xpZGVyX3JvbGVcbiAgICAgKi9cbiAgICB0aGlzLnJlbmRlckFzc2lzdGl2ZUZvY3VzYWJsZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgYWN0aXZlSXRlbVxuICAgICAgfSA9IHRoaXM7XG4gICAgICBjb25zdCB2YWx1ZVRleHQgPSB0aGlzLmdldE9wdGlvblZhbHVlVGV4dChhY3RpdmVJdGVtKTtcbiAgICAgIC8qKlxuICAgICAgICogV2hlbiB1c2luZyB0aGUgcGlja2VyLCB0aGUgdmFsdWV0ZXh0IHByb3ZpZGVzIGltcG9ydGFudCBjb250ZXh0IHRoYXQgdmFsdWVub3dcbiAgICAgICAqIGRvZXMgbm90LiBBZGRpdGlvbmFsbHksIHVzaW5nIG5vbi16ZXJvIHZhbHVlbWluL3ZhbHVlbWF4IHZhbHVlcyBjYW4gY2F1c2VcbiAgICAgICAqIFdlYktpdCB0byBpbmNvcnJlY3RseSBhbm5vdW5jZSBudW1lcmljIHZhbHVldGV4dCB2YWx1ZXMgKHN1Y2ggYXMgYSB5ZWFyXG4gICAgICAgKiBsaWtlIFwiMjAyNFwiKSBhcyBwZXJjZW50YWdlczogaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTI3MzEyNlxuICAgICAgICovXG4gICAgICByZXR1cm4gaChcImRpdlwiLCB7XG4gICAgICAgIHJlZjogZWwgPT4gdGhpcy5hc3Npc3RpdmVGb2N1c2FibGUgPSBlbCxcbiAgICAgICAgY2xhc3M6IFwiYXNzaXN0aXZlLWZvY3VzYWJsZVwiLFxuICAgICAgICByb2xlOiBcInNsaWRlclwiLFxuICAgICAgICB0YWJpbmRleDogdGhpcy5kaXNhYmxlZCA/IHVuZGVmaW5lZCA6IDAsXG4gICAgICAgIFwiYXJpYS1sYWJlbFwiOiB0aGlzLmFyaWFMYWJlbCxcbiAgICAgICAgXCJhcmlhLXZhbHVlbWluXCI6IDAsXG4gICAgICAgIFwiYXJpYS12YWx1ZW1heFwiOiAwLFxuICAgICAgICBcImFyaWEtdmFsdWVub3dcIjogMCxcbiAgICAgICAgXCJhcmlhLXZhbHVldGV4dFwiOiB2YWx1ZVRleHQsXG4gICAgICAgIFwiYXJpYS1vcmllbnRhdGlvblwiOiBcInZlcnRpY2FsXCIsXG4gICAgICAgIG9uS2V5RG93bjogZXYgPT4gdGhpcy5vbktleURvd24oZXYpXG4gICAgICB9KTtcbiAgICB9O1xuICB9XG4gIGFyaWFMYWJlbENoYW5nZWQobmV3VmFsdWUpIHtcbiAgICB0aGlzLmFyaWFMYWJlbCA9IG5ld1ZhbHVlO1xuICB9XG4gIHZhbHVlQ2hhbmdlKCkge1xuICAgIGlmICh0aGlzLmlzQ29sdW1uVmlzaWJsZSkge1xuICAgICAgLyoqXG4gICAgICAgKiBPbmx5IHNjcm9sbCB0aGUgYWN0aXZlIGl0ZW0gaW50byB2aWV3IHdoZW4gdGhlIHBpY2tlciBjb2x1bW5cbiAgICAgICAqIGlzIGFjdGl2ZWx5IHZpc2libGUgdG8gdGhlIHVzZXIuXG4gICAgICAgKi9cbiAgICAgIHRoaXMuc2Nyb2xsQWN0aXZlSXRlbUludG9WaWV3KHRydWUpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogT25seSBzZXR1cCBzY3JvbGwgbGlzdGVuZXJzXG4gICAqIHdoZW4gdGhlIHBpY2tlciBpcyB2aXNpYmxlLCBvdGhlcndpc2VcbiAgICogdGhlIGNvbnRhaW5lciB3aWxsIGhhdmUgYSBzY3JvbGxcbiAgICogaGVpZ2h0IG9mIDBweC5cbiAgICovXG4gIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIC8qKlxuICAgICAqIFdlIGNhY2hlIHBhcmVudEVsIGluIGEgbG9jYWwgdmFyaWFibGVcbiAgICAgKiBzbyB3ZSBkb24ndCBuZWVkIHRvIGtlZXAgYWNjZXNzaW5nXG4gICAgICogdGhlIGNsYXNzIHZhcmlhYmxlICh3aGljaCBjb21lcyB3aXRoXG4gICAgICogYSBzbWFsbCBwZXJmb3JtYW5jZSBoaXQpXG4gICAgICovXG4gICAgY29uc3QgcGFyZW50RWwgPSB0aGlzLnBhcmVudEVsID0gdGhpcy5lbC5jbG9zZXN0KCdpb24tcGlja2VyJyk7XG4gICAgY29uc3QgdmlzaWJsZUNhbGxiYWNrID0gZW50cmllcyA9PiB7XG4gICAgICAvKipcbiAgICAgICAqIEJyb3dzZXJzIHdpbGwgc29tZXRpbWVzIGdyb3VwIG11bHRpcGxlIElPIGV2ZW50cyBpbnRvIGEgc2luZ2xlIGNhbGxiYWNrLlxuICAgICAgICogQXMgYSByZXN1bHQsIHdlIHdhbnQgdG8gZ3JhYiB0aGUgbGFzdC9tb3N0IHJlY2VudCBldmVudCBpbiBjYXNlIHRoZXJlIGFyZSBtdWx0aXBsZSBldmVudHMuXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IGV2ID0gZW50cmllc1tlbnRyaWVzLmxlbmd0aCAtIDFdO1xuICAgICAgaWYgKGV2LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBhY3RpdmVJdGVtLFxuICAgICAgICAgIGVsXG4gICAgICAgIH0gPSB0aGlzO1xuICAgICAgICB0aGlzLmlzQ29sdW1uVmlzaWJsZSA9IHRydWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBCZWNhdXNlIHRoaXMgaW5pdGlhbCBjYWxsIHRvIHNjcm9sbEFjdGl2ZUl0ZW1JbnRvVmlldyBoYXMgdG8gZmlyZSBiZWZvcmVcbiAgICAgICAgICogdGhlIHNjcm9sbCBsaXN0ZW5lciBpcyBzZXQgdXAsIHdlIG5lZWQgdG8gbWFuYWdlIHRoZSBhY3RpdmUgY2xhc3MgbWFudWFsbHkuXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBvbGRBY3RpdmUgPSBnZXRFbGVtZW50Um9vdChlbCkucXVlcnlTZWxlY3RvcihgLiR7UElDS0VSX0lURU1fQUNUSVZFX0NMQVNTfWApO1xuICAgICAgICBpZiAob2xkQWN0aXZlKSB7XG4gICAgICAgICAgdGhpcy5zZXRQaWNrZXJJdGVtQWN0aXZlU3RhdGUob2xkQWN0aXZlLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zY3JvbGxBY3RpdmVJdGVtSW50b1ZpZXcoKTtcbiAgICAgICAgaWYgKGFjdGl2ZUl0ZW0pIHtcbiAgICAgICAgICB0aGlzLnNldFBpY2tlckl0ZW1BY3RpdmVTdGF0ZShhY3RpdmVJdGVtLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluaXRpYWxpemVTY3JvbGxMaXN0ZW5lcigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pc0NvbHVtblZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuZGVzdHJveVNjcm9sbExpc3RlbmVyKSB7XG4gICAgICAgICAgdGhpcy5kZXN0cm95U2Nyb2xsTGlzdGVuZXIoKTtcbiAgICAgICAgICB0aGlzLmRlc3Ryb3lTY3JvbGxMaXN0ZW5lciA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0IHRoZSByb290IHRvIGJlIHRoZSBwYXJlbnQgcGlja2VyIGVsZW1lbnRcbiAgICAgKiBUaGlzIGNhdXNlcyB0aGUgSU8gY2FsbGJhY2tcbiAgICAgKiB0byBiZSBmaXJlZCBpbiBXZWJLaXQgYXMgc29vbiBhcyB0aGUgZWxlbWVudFxuICAgICAqIGlzIHZpc2libGUuIElmIHdlIHVzZWQgdGhlIGRlZmF1bHQgcm9vdCB2YWx1ZVxuICAgICAqIHRoZW4gV2ViS2l0IHdvdWxkIG9ubHkgZmlyZSB0aGUgSU8gY2FsbGJhY2tcbiAgICAgKiBhZnRlciBhbnkgYW5pbWF0aW9ucyAoc3VjaCBhcyBhIG1vZGFsIHRyYW5zaXRpb24pXG4gICAgICogZmluaXNoZWQsIGFuZCB0aGVyZSB3b3VsZCBwb3RlbnRpYWxseSBiZSBhIGZsaWNrZXIuXG4gICAgICovXG4gICAgbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKHZpc2libGVDYWxsYmFjaywge1xuICAgICAgdGhyZXNob2xkOiAwLjAwMSxcbiAgICAgIHJvb3Q6IHRoaXMucGFyZW50RWxcbiAgICB9KS5vYnNlcnZlKHRoaXMuZWwpO1xuICAgIGlmIChwYXJlbnRFbCAhPT0gbnVsbCkge1xuICAgICAgLy8gVE9ETyhGVy0yODMyKTogdHlwZVxuICAgICAgcGFyZW50RWwuYWRkRXZlbnRMaXN0ZW5lcignaW9uSW5wdXRNb2RlQ2hhbmdlJywgZXYgPT4gdGhpcy5pbnB1dE1vZGVDaGFuZ2UoZXYpKTtcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50RGlkUmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGVsLFxuICAgICAgYWN0aXZlSXRlbSxcbiAgICAgIGlzQ29sdW1uVmlzaWJsZSxcbiAgICAgIHZhbHVlXG4gICAgfSA9IHRoaXM7XG4gICAgaWYgKGlzQ29sdW1uVmlzaWJsZSAmJiAhYWN0aXZlSXRlbSkge1xuICAgICAgY29uc3QgZmlyc3RPcHRpb24gPSBlbC5xdWVyeVNlbGVjdG9yKCdpb24tcGlja2VyLWNvbHVtbi1vcHRpb24nKTtcbiAgICAgIC8qKlxuICAgICAgICogSWYgdGhlIHBpY2tlciBjb2x1bW4gZG9lcyBub3QgaGF2ZSBhbiBhY3RpdmUgaXRlbSBhbmQgdGhlIGN1cnJlbnQgdmFsdWVcbiAgICAgICAqIGRvZXMgbm90IG1hdGNoIHRoZSBmaXJzdCBpdGVtIGluIHRoZSBwaWNrZXIgY29sdW1uLCB0aGF0IG1lYW5zXG4gICAgICAgKiB0aGUgdmFsdWUgaXMgb3V0IG9mIGJvdW5kcy4gSW4gdGhpcyBjYXNlLCB3ZSBhc3NpZ24gdGhlIHZhbHVlIHRvIHRoZVxuICAgICAgICogZmlyc3QgaXRlbSB0byBtYXRjaCB0aGUgc2Nyb2xsIHBvc2l0aW9uIG9mIHRoZSBjb2x1bW4uXG4gICAgICAgKlxuICAgICAgICovXG4gICAgICBpZiAoZmlyc3RPcHRpb24gIT09IG51bGwgJiYgZmlyc3RPcHRpb24udmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoZmlyc3RPcHRpb24udmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvKiogQGludGVybmFsICAqL1xuICBhc3luYyBzY3JvbGxBY3RpdmVJdGVtSW50b1ZpZXcoc21vb3RoID0gZmFsc2UpIHtcbiAgICBjb25zdCBhY3RpdmVFbCA9IHRoaXMuYWN0aXZlSXRlbTtcbiAgICBpZiAoYWN0aXZlRWwpIHtcbiAgICAgIHRoaXMuY2VudGVyUGlja2VySXRlbUluVmlldyhhY3RpdmVFbCwgc21vb3RoLCBmYWxzZSk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBTZXRzIHRoZSB2YWx1ZSBwcm9wIGFuZCBmaXJlcyB0aGUgaW9uQ2hhbmdlIGV2ZW50LlxuICAgKiBUaGlzIGlzIHVzZWQgd2hlbiB3ZSBuZWVkIHRvIGZpcmUgaW9uQ2hhbmdlIGZyb21cbiAgICogdXNlci1nZW5lcmF0ZWQgZXZlbnRzIHRoYXQgY2Fubm90IGJlIGNhdWdodCB3aXRoIG5vcm1hbFxuICAgKiBpbnB1dC9jaGFuZ2UgZXZlbnQgbGlzdGVuZXJzLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGFzeW5jIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgPT09IHRydWUgfHwgdGhpcy52YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuaW9uQ2hhbmdlLmVtaXQoe1xuICAgICAgdmFsdWVcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogU2V0cyBmb2N1cyBvbiB0aGUgc2Nyb2xsYWJsZSBjb250YWluZXIgd2l0aGluIHRoZSBwaWNrZXIgY29sdW1uLlxuICAgKiBVc2UgdGhpcyBtZXRob2QgaW5zdGVhZCBvZiB0aGUgZ2xvYmFsIGBwaWNrZXJDb2x1bW4uZm9jdXMoKWAuXG4gICAqL1xuICBhc3luYyBzZXRGb2N1cygpIHtcbiAgICBpZiAodGhpcy5hc3Npc3RpdmVGb2N1c2FibGUpIHtcbiAgICAgIHRoaXMuYXNzaXN0aXZlRm9jdXNhYmxlLmZvY3VzKCk7XG4gICAgfVxuICB9XG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHZhciBfYTtcbiAgICB0aGlzLmFyaWFMYWJlbCA9IChfYSA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICdTZWxlY3QgYSB2YWx1ZSc7XG4gIH1cbiAgZ2V0IGFjdGl2ZUl0ZW0oKSB7XG4gICAgY29uc3Qge1xuICAgICAgdmFsdWVcbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCBvcHRpb25zID0gQXJyYXkuZnJvbSh0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lvbi1waWNrZXItY29sdW1uLW9wdGlvbicpKTtcbiAgICByZXR1cm4gb3B0aW9ucy5maW5kKG9wdGlvbiA9PiB7XG4gICAgICAvKipcbiAgICAgICAqIElmIHRoZSB3aG9sZSBwaWNrZXIgY29sdW1uIGlzIGRpc2FibGVkLCB0aGUgY3VycmVudCB2YWx1ZSBzaG91bGQgYXBwZWFyIGFjdGl2ZVxuICAgICAgICogSWYgdGhlIGN1cnJlbnQgdmFsdWUgaXRlbSBpcyBzcGVjaWZpY2FsbHkgZGlzYWJsZWQsIGl0IHNob3VsZCBub3QgYXBwZWFyIGFjdGl2ZVxuICAgICAgICovXG4gICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgb3B0aW9uLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvcHRpb24udmFsdWUgPT09IHZhbHVlO1xuICAgIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjb2xvcixcbiAgICAgIGRpc2FibGVkLFxuICAgICAgaXNBY3RpdmUsXG4gICAgICBudW1lcmljSW5wdXRcbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICByZXR1cm4gaChIb3N0LCB7XG4gICAgICBrZXk6ICdlYTAyODAzNTViMmY4Nzg5NWJmN2RkZGQyODljY2Y0NzNhYTc1OWYzJyxcbiAgICAgIGNsYXNzOiBjcmVhdGVDb2xvckNsYXNzZXMoY29sb3IsIHtcbiAgICAgICAgW21vZGVdOiB0cnVlLFxuICAgICAgICBbJ3BpY2tlci1jb2x1bW4tYWN0aXZlJ106IGlzQWN0aXZlLFxuICAgICAgICBbJ3BpY2tlci1jb2x1bW4tbnVtZXJpYy1pbnB1dCddOiBudW1lcmljSW5wdXQsXG4gICAgICAgIFsncGlja2VyLWNvbHVtbi1kaXNhYmxlZCddOiBkaXNhYmxlZFxuICAgICAgfSlcbiAgICB9LCB0aGlzLnJlbmRlckFzc2lzdGl2ZUZvY3VzYWJsZSgpLCBoKFwic2xvdFwiLCB7XG4gICAgICBrZXk6ICc0ODI5OTIxMzFjZGViODViMWY2MTQzMGQ3ZmUxMzIyYTE2MzQ1NzY5JyxcbiAgICAgIG5hbWU6IFwicHJlZml4XCJcbiAgICB9KSwgaChcImRpdlwiLCB7XG4gICAgICBrZXk6ICc0M2Y3ZjgwZDYyMWQ0MTFlZjM2NmIzY2ExMzk2Mjk5ZThjOWEwYzk3JyxcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsXG4gICAgICBjbGFzczogXCJwaWNrZXItb3B0c1wiLFxuICAgICAgcmVmOiBlbCA9PiB7XG4gICAgICAgIHRoaXMuc2Nyb2xsRWwgPSBlbDtcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIFdoZW4gYW4gZWxlbWVudCBoYXMgYW4gb3ZlcmxheSBzY3JvbGwgc3R5bGUgYW5kXG4gICAgICAgKiBhIGZpeGVkIGhlaWdodCwgRmlyZWZveCB3aWxsIGZvY3VzIHRoZSBzY3JvbGxhYmxlXG4gICAgICAgKiBjb250YWluZXIgaWYgdGhlIGNvbnRlbnQgZXhjZWVkcyB0aGUgY29udGFpbmVyJ3NcbiAgICAgICAqIGRpbWVuc2lvbnMuXG4gICAgICAgKlxuICAgICAgICogVGhpcyBjYXVzZXMga2V5Ym9hcmQgbmF2aWdhdGlvbiB0byBmb2N1cyB0byB0aGlzXG4gICAgICAgKiBlbGVtZW50IGluc3RlYWQgb2YgZ29pbmcgdG8gdGhlIG5leHQgZWxlbWVudCBpblxuICAgICAgICogdGhlIHRhYiBvcmRlci5cbiAgICAgICAqXG4gICAgICAgKiBUaGUgZGVzaXJlZCBiZWhhdmlvciBpcyBmb3IgdGhlIHVzZXIgdG8gYmUgYWJsZSB0b1xuICAgICAgICogZm9jdXMgdGhlIGFzc2lzdGl2ZSBmb2N1c2FibGUgZWxlbWVudCBhbmQgdGFiIHRvXG4gICAgICAgKiB0aGUgbmV4dCBlbGVtZW50IGluIHRoZSB0YWIgb3JkZXIuIEluc3RlYWQgb2YgdGFiYmluZ1xuICAgICAgICogdG8gdGhpcyBlbGVtZW50LlxuICAgICAgICpcbiAgICAgICAqIFRvIHByZXZlbnQgdGhpcywgd2Ugc2V0IHRoZSB0YWJJbmRleCB0byAtMS4gVGhpc1xuICAgICAgICogd2lsbCBtYXRjaCB0aGUgYmVoYXZpb3Igb2YgdGhlIG90aGVyIGJyb3dzZXJzLlxuICAgICAgICovXG4gICAgICB0YWJJbmRleDogLTFcbiAgICB9LCBoKFwiZGl2XCIsIHtcbiAgICAgIGtleTogJzEzYTllZTY4NjEzMmFmMzIyNDA3MTA3MzA3NjVkZTRjMDAwM2E5ZTgnLFxuICAgICAgY2xhc3M6IFwicGlja2VyLWl0ZW0tZW1wdHlcIixcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCJcbiAgICB9LCBcIlxcdTAwQTBcIiksIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnZGJjY2JhNDkyMDgzM2NmY2ViZTliMGZjNzYzNDU4ZWMzMDUzNzA1YScsXG4gICAgICBjbGFzczogXCJwaWNrZXItaXRlbS1lbXB0eVwiLFxuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIlxuICAgIH0sIFwiXFx1MDBBMFwiKSwgaChcImRpdlwiLCB7XG4gICAgICBrZXk6ICc2ODJiNDNmODNhNWVhMmU0NjA2NzQ1N2YzYWYxMTg1MzVlMTExZWRiJyxcbiAgICAgIGNsYXNzOiBcInBpY2tlci1pdGVtLWVtcHR5XCIsXG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiXG4gICAgfSwgXCJcXHUwMEEwXCIpLCBoKFwic2xvdFwiLCB7XG4gICAgICBrZXk6ICdkMjdlMWUxZGMwNTA0YjJmNDYyN2EyOTkxMmEwNWJiOTFlOGU0MTNhJ1xuICAgIH0pLCBoKFwiZGl2XCIsIHtcbiAgICAgIGtleTogJzYxYzk0OGRiYjljZjc0NjlhZWQzMDE4NTQyYmMwOTU0MjExNTg1YmEnLFxuICAgICAgY2xhc3M6IFwicGlja2VyLWl0ZW0tZW1wdHlcIixcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCJcbiAgICB9LCBcIlxcdTAwQTBcIiksIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnY2Y0NmMyNzdmYmVlNjVlMzVmZjQ0Y2UwZDUzY2UxMmFhOWNiZjlkYicsXG4gICAgICBjbGFzczogXCJwaWNrZXItaXRlbS1lbXB0eVwiLFxuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIlxuICAgIH0sIFwiXFx1MDBBMFwiKSwgaChcImRpdlwiLCB7XG4gICAgICBrZXk6ICdiYmMwZTJkNDkxZDNmODM2YWI4NDk0OTNhZGUyZjdmYTZhZDkyNDRlJyxcbiAgICAgIGNsYXNzOiBcInBpY2tlci1pdGVtLWVtcHR5XCIsXG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiXG4gICAgfSwgXCJcXHUwMEEwXCIpKSwgaChcInNsb3RcIiwge1xuICAgICAga2V5OiAnZDI1Y2JiZTE0YjI5MTRmZTdiODc4ZDQzYjRlM2Y0YThjODE3N2QyNCcsXG4gICAgICBuYW1lOiBcInN1ZmZpeFwiXG4gICAgfSkpO1xuICB9XG4gIGdldCBlbCgpIHtcbiAgICByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBcImFyaWEtbGFiZWxcIjogW1wiYXJpYUxhYmVsQ2hhbmdlZFwiXSxcbiAgICAgIFwidmFsdWVcIjogW1widmFsdWVDaGFuZ2VcIl1cbiAgICB9O1xuICB9XG59O1xuY29uc3QgUElDS0VSX0lURU1fQUNUSVZFX0NMQVNTID0gJ29wdGlvbi1hY3RpdmUnO1xuUGlja2VyQ29sdW1uLnN0eWxlID0gcGlja2VyQ29sdW1uQ3NzO1xuZXhwb3J0IHsgUGlja2VyQ29sdW1uIGFzIGlvbl9waWNrZXJfY29sdW1uIH07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQU0sa0JBQWtCO0FBQ3hCLElBQU0sZUFBZSxNQUFNO0FBQUEsRUFDekIsWUFBWSxTQUFTO0FBQ25CLHFCQUFpQixNQUFNLE9BQU87QUFDOUIsU0FBSyxZQUFZLFlBQVks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
