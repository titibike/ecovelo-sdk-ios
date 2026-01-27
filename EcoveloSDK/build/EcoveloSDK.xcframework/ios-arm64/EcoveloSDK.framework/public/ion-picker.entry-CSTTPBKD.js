import {
  getElementRoot
} from "./chunk-RZR7LWTQ.js";
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

// node_modules/@ionic/core/dist/esm/ion-picker.entry.js
var pickerIosCss = ":host{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:200px;direction:ltr;z-index:0}:host .picker-before,:host .picker-after{position:absolute;width:100%;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:1;pointer-events:none}:host .picker-before{top:0;height:83px}:host .picker-before{inset-inline-start:0}:host .picker-after{top:116px;height:84px}:host .picker-after{inset-inline-start:0}:host .picker-highlight{border-radius:var(--highlight-border-radius, 8px);left:0;right:0;top:50%;bottom:0;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;position:absolute;width:calc(100% - 16px);height:34px;-webkit-transform:translateY(-50%);transform:translateY(-50%);background:var(--highlight-background);z-index:-1}:host input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host ::slotted(ion-picker-column:first-of-type){text-align:start}:host ::slotted(ion-picker-column:last-of-type){text-align:end}:host ::slotted(ion-picker-column:only-child){text-align:center}:host .picker-before{background:-webkit-gradient(linear, left top, left bottom, color-stop(20%, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1)), to(rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0.8)));background:linear-gradient(to bottom, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1) 20%, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0.8) 100%)}:host .picker-after{background:-webkit-gradient(linear, left bottom, left top, color-stop(20%, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1)), to(rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0.8)));background:linear-gradient(to top, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1) 20%, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0.8) 100%)}:host .picker-highlight{background:var(--highlight-background, var(--ion-color-step-150, var(--ion-background-color-step-150, #eeeeef)))}";
var pickerMdCss = ":host{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:200px;direction:ltr;z-index:0}:host .picker-before,:host .picker-after{position:absolute;width:100%;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:1;pointer-events:none}:host .picker-before{top:0;height:83px}:host .picker-before{inset-inline-start:0}:host .picker-after{top:116px;height:84px}:host .picker-after{inset-inline-start:0}:host .picker-highlight{border-radius:var(--highlight-border-radius, 8px);left:0;right:0;top:50%;bottom:0;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;position:absolute;width:calc(100% - 16px);height:34px;-webkit-transform:translateY(-50%);transform:translateY(-50%);background:var(--highlight-background);z-index:-1}:host input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host ::slotted(ion-picker-column:first-of-type){text-align:start}:host ::slotted(ion-picker-column:last-of-type){text-align:end}:host ::slotted(ion-picker-column:only-child){text-align:center}:host .picker-before{background:-webkit-gradient(linear, left top, left bottom, color-stop(20%, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1)), color-stop(90%, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0)));background:linear-gradient(to bottom, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1) 20%, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0) 90%)}:host .picker-after{background:-webkit-gradient(linear, left bottom, left top, color-stop(30%, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1)), color-stop(90%, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0)));background:linear-gradient(to top, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1) 30%, rgba(var(--fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0) 90%)}";
var Picker = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionInputModeChange = createEvent(this, "ionInputModeChange", 7);
    this.useInputMode = false;
    this.isInHighlightBounds = (ev) => {
      const {
        highlightEl
      } = this;
      if (!highlightEl) {
        return false;
      }
      const bbox = highlightEl.getBoundingClientRect();
      const outsideX = ev.clientX < bbox.left || ev.clientX > bbox.right;
      const outsideY = ev.clientY < bbox.top || ev.clientY > bbox.bottom;
      if (outsideX || outsideY) {
        return false;
      }
      return true;
    };
    this.onFocusOut = (ev) => {
      const {
        relatedTarget
      } = ev;
      if (!relatedTarget || relatedTarget.tagName !== "ION-PICKER-COLUMN" && relatedTarget !== this.inputEl) {
        this.exitInputMode();
      }
    };
    this.onFocusIn = (ev) => {
      const {
        target
      } = ev;
      if (target.tagName !== "ION-PICKER-COLUMN") {
        return;
      }
      if (!this.actionOnClick) {
        const columnEl = target;
        const allowInput = columnEl.numericInput;
        if (allowInput) {
          this.enterInputMode(columnEl, false);
        } else {
          this.exitInputMode();
        }
      }
    };
    this.onClick = () => {
      const {
        actionOnClick
      } = this;
      if (actionOnClick) {
        actionOnClick();
        this.actionOnClick = void 0;
      }
    };
    this.onPointerDown = (ev) => {
      const {
        useInputMode,
        inputModeColumn,
        el
      } = this;
      if (this.isInHighlightBounds(ev)) {
        if (useInputMode) {
          if (ev.target.tagName === "ION-PICKER-COLUMN") {
            if (inputModeColumn && inputModeColumn === ev.target) {
              this.actionOnClick = () => {
                this.enterInputMode();
              };
            } else {
              this.actionOnClick = () => {
                this.enterInputMode(ev.target);
              };
            }
          } else {
            this.actionOnClick = () => {
              this.exitInputMode();
            };
          }
        } else {
          const columns = el.querySelectorAll("ion-picker-column.picker-column-numeric-input");
          const columnEl = columns.length === 1 ? ev.target : void 0;
          this.actionOnClick = () => {
            this.enterInputMode(columnEl);
          };
        }
        return;
      }
      this.actionOnClick = () => {
        this.exitInputMode();
      };
    };
    this.enterInputMode = (columnEl, focusInput = true) => {
      const {
        inputEl,
        el
      } = this;
      if (!inputEl) {
        return;
      }
      const hasInputColumn = el.querySelector("ion-picker-column.picker-column-numeric-input");
      if (!hasInputColumn) {
        return;
      }
      this.useInputMode = true;
      this.inputModeColumn = columnEl;
      if (focusInput) {
        if (this.destroyKeypressListener) {
          this.destroyKeypressListener();
          this.destroyKeypressListener = void 0;
        }
        inputEl.focus();
      } else {
        el.addEventListener("keypress", this.onKeyPress);
        this.destroyKeypressListener = () => {
          el.removeEventListener("keypress", this.onKeyPress);
        };
      }
      this.emitInputModeChange();
    };
    this.onKeyPress = (ev) => {
      const {
        inputEl
      } = this;
      if (!inputEl) {
        return;
      }
      const parsedValue = parseInt(ev.key, 10);
      if (!Number.isNaN(parsedValue)) {
        inputEl.value += ev.key;
        this.onInputChange();
      }
    };
    this.selectSingleColumn = () => {
      const {
        inputEl,
        inputModeColumn,
        singleColumnSearchTimeout
      } = this;
      if (!inputEl || !inputModeColumn) {
        return;
      }
      const options = Array.from(inputModeColumn.querySelectorAll("ion-picker-column-option")).filter((el) => el.disabled !== true);
      if (singleColumnSearchTimeout) {
        clearTimeout(singleColumnSearchTimeout);
      }
      this.singleColumnSearchTimeout = setTimeout(() => {
        inputEl.value = "";
        this.singleColumnSearchTimeout = void 0;
      }, 1e3);
      if (inputEl.value.length >= 3) {
        const startIndex = inputEl.value.length - 2;
        const newString = inputEl.value.substring(startIndex);
        inputEl.value = newString;
        this.selectSingleColumn();
        return;
      }
      const findItemFromCompleteValue = options.find(({
        textContent
      }) => {
        const parsedText = textContent.replace(/^0+(?=[1-9])|0+(?=0$)/, "");
        return parsedText === inputEl.value;
      });
      if (findItemFromCompleteValue) {
        inputModeColumn.setValue(findItemFromCompleteValue.value);
        return;
      }
      if (inputEl.value.length === 2) {
        const changedCharacter = inputEl.value.substring(inputEl.value.length - 1);
        inputEl.value = changedCharacter;
        this.selectSingleColumn();
      }
    };
    this.searchColumn = (colEl, value, zeroBehavior = "start") => {
      if (!value) {
        return false;
      }
      const behavior = zeroBehavior === "start" ? /^0+/ : /0$/;
      value = value.replace(behavior, "");
      const option = Array.from(colEl.querySelectorAll("ion-picker-column-option")).find((el) => {
        return el.disabled !== true && el.textContent.replace(behavior, "") === value;
      });
      if (option) {
        colEl.setValue(option.value);
      }
      return !!option;
    };
    this.multiColumnSearch = (firstColumn, secondColumn, input) => {
      if (input.length === 0) {
        return;
      }
      const inputArray = input.split("");
      const hourValue = inputArray.slice(0, 2).join("");
      const foundHour = this.searchColumn(firstColumn, hourValue);
      if (inputArray.length > 2 && foundHour) {
        const minuteValue = inputArray.slice(2, 4).join("");
        this.searchColumn(secondColumn, minuteValue);
      } else if (!foundHour && inputArray.length >= 1) {
        let singleDigitHour = inputArray[0];
        let singleDigitFound = this.searchColumn(firstColumn, singleDigitHour);
        if (!singleDigitFound) {
          inputArray.shift();
          singleDigitHour = inputArray[0];
          singleDigitFound = this.searchColumn(firstColumn, singleDigitHour);
        }
        if (singleDigitFound && inputArray.length > 1) {
          const remainingDigits = inputArray.slice(1, 3).join("");
          this.searchColumn(secondColumn, remainingDigits);
        }
      }
    };
    this.selectMultiColumn = () => {
      const {
        inputEl,
        el
      } = this;
      if (!inputEl) {
        return;
      }
      const numericPickers = Array.from(el.querySelectorAll("ion-picker-column")).filter((col) => col.numericInput);
      const firstColumn = numericPickers[0];
      const lastColumn = numericPickers[1];
      let value = inputEl.value;
      if (value.length > 4) {
        const startIndex = inputEl.value.length - 4;
        const newString = inputEl.value.substring(startIndex);
        inputEl.value = newString;
        value = newString;
      }
      this.multiColumnSearch(firstColumn, lastColumn, value);
    };
    this.onInputChange = () => {
      const {
        useInputMode,
        inputEl,
        inputModeColumn
      } = this;
      if (!useInputMode || !inputEl) {
        return;
      }
      if (inputModeColumn) {
        this.selectSingleColumn();
      } else {
        this.selectMultiColumn();
      }
    };
    this.emitInputModeChange = () => {
      const {
        useInputMode,
        inputModeColumn
      } = this;
      this.ionInputModeChange.emit({
        useInputMode,
        inputModeColumn
      });
    };
  }
  /**
   * When the picker is interacted with
   * we need to prevent touchstart so other
   * gestures do not fire. For example,
   * scrolling on the wheel picker
   * in ion-datetime should not cause
   * a card modal to swipe to close.
   */
  preventTouchStartPropagation(ev) {
    ev.stopPropagation();
  }
  componentWillLoad() {
    getElementRoot(this.el).addEventListener("focusin", this.onFocusIn);
    getElementRoot(this.el).addEventListener("focusout", this.onFocusOut);
  }
  /**
   * @internal
   * Exits text entry mode for the picker
   * This method blurs the hidden input
   * and cause the keyboard to dismiss.
   */
  exitInputMode() {
    return __async(this, null, function* () {
      const {
        inputEl,
        useInputMode
      } = this;
      if (!useInputMode || !inputEl) {
        return;
      }
      this.useInputMode = false;
      this.inputModeColumn = void 0;
      inputEl.blur();
      inputEl.value = "";
      if (this.destroyKeypressListener) {
        this.destroyKeypressListener();
        this.destroyKeypressListener = void 0;
      }
      this.emitInputModeChange();
    });
  }
  render() {
    return h(Host, {
      key: "28f81e4ed44a633178561757c5199c2c98f94b74",
      onPointerDown: (ev) => this.onPointerDown(ev),
      onClick: () => this.onClick()
    }, h("input", {
      key: "abb3d1ad25ef63856af7804111175a4d50008bc0",
      "aria-hidden": "true",
      tabindex: -1,
      inputmode: "numeric",
      type: "number",
      onKeyDown: (ev) => {
        var _a;
        if (ev.key === "Enter") {
          (_a = this.inputEl) === null || _a === void 0 ? void 0 : _a.blur();
        }
      },
      ref: (el) => this.inputEl = el,
      onInput: () => this.onInputChange(),
      onBlur: () => this.exitInputMode()
    }), h("div", {
      key: "334a5abdc02e6b127c57177f626d7e4ff5526183",
      class: "picker-before"
    }), h("div", {
      key: "ffd6271931129e88fc7c820e919d684899e420c5",
      class: "picker-after"
    }), h("div", {
      key: "78d1d95fd09e04f154ea59f24a1cece72c47ed7b",
      class: "picker-highlight",
      ref: (el) => this.highlightEl = el
    }), h("slot", {
      key: "0bd5b9f875d3c71f6cbbde2054baeb1b0a2e8cd5"
    }));
  }
  get el() {
    return getElement(this);
  }
};
Picker.style = {
  ios: pickerIosCss,
  md: pickerMdCss
};
export {
  Picker as ion_picker
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-picker.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tcGlja2VyLmVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgY3JlYXRlRXZlbnQsIGgsIGQgYXMgSG9zdCwgZyBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9pbmRleC00RHhZNl9nRy5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldEVsZW1lbnRSb290IH0gZnJvbSAnLi9oZWxwZXJzLThLU1FRR1F5LmpzJztcbmNvbnN0IHBpY2tlcklvc0NzcyA9IFwiOmhvc3R7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjEwMCU7aGVpZ2h0OjIwMHB4O2RpcmVjdGlvbjpsdHI7ei1pbmRleDowfTpob3N0IC5waWNrZXItYmVmb3JlLDpob3N0IC5waWNrZXItYWZ0ZXJ7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3otaW5kZXg6MTtwb2ludGVyLWV2ZW50czpub25lfTpob3N0IC5waWNrZXItYmVmb3Jle3RvcDowO2hlaWdodDo4M3B4fTpob3N0IC5waWNrZXItYmVmb3Jle2luc2V0LWlubGluZS1zdGFydDowfTpob3N0IC5waWNrZXItYWZ0ZXJ7dG9wOjExNnB4O2hlaWdodDo4NHB4fTpob3N0IC5waWNrZXItYWZ0ZXJ7aW5zZXQtaW5saW5lLXN0YXJ0OjB9Omhvc3QgLnBpY2tlci1oaWdobGlnaHR7Ym9yZGVyLXJhZGl1czp2YXIoLS1oaWdobGlnaHQtYm9yZGVyLXJhZGl1cywgOHB4KTtsZWZ0OjA7cmlnaHQ6MDt0b3A6NTAlO2JvdHRvbTowOy13ZWJraXQtbWFyZ2luLXN0YXJ0OmF1dG87bWFyZ2luLWlubGluZS1zdGFydDphdXRvOy13ZWJraXQtbWFyZ2luLWVuZDphdXRvO21hcmdpbi1pbmxpbmUtZW5kOmF1dG87bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDpjYWxjKDEwMCUgLSAxNnB4KTtoZWlnaHQ6MzRweDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO2JhY2tncm91bmQ6dmFyKC0taGlnaGxpZ2h0LWJhY2tncm91bmQpO3otaW5kZXg6LTF9Omhvc3QgaW5wdXR7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTttYXJnaW46MDtwYWRkaW5nOjA7Ym9yZGVyOjA7b3V0bGluZTowO2NsaXA6cmVjdCgwIDAgMCAwKTtvcGFjaXR5OjA7b3ZlcmZsb3c6aGlkZGVuOy13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lfTpob3N0IDo6c2xvdHRlZChpb24tcGlja2VyLWNvbHVtbjpmaXJzdC1vZi10eXBlKXt0ZXh0LWFsaWduOnN0YXJ0fTpob3N0IDo6c2xvdHRlZChpb24tcGlja2VyLWNvbHVtbjpsYXN0LW9mLXR5cGUpe3RleHQtYWxpZ246ZW5kfTpob3N0IDo6c2xvdHRlZChpb24tcGlja2VyLWNvbHVtbjpvbmx5LWNoaWxkKXt0ZXh0LWFsaWduOmNlbnRlcn06aG9zdCAucGlja2VyLWJlZm9yZXtiYWNrZ3JvdW5kOi13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMjAlLCByZ2JhKHZhcigtLWZhZGUtYmFja2dyb3VuZC1yZ2IsIHZhcigtLWJhY2tncm91bmQtcmdiLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2IsIDI1NSwgMjU1LCAyNTUpKSksIDEpKSwgdG8ocmdiYSh2YXIoLS1mYWRlLWJhY2tncm91bmQtcmdiLCB2YXIoLS1iYWNrZ3JvdW5kLXJnYiwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiLCAyNTUsIDI1NSwgMjU1KSkpLCAwLjgpKSk7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKHZhcigtLWZhZGUtYmFja2dyb3VuZC1yZ2IsIHZhcigtLWJhY2tncm91bmQtcmdiLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2IsIDI1NSwgMjU1LCAyNTUpKSksIDEpIDIwJSwgcmdiYSh2YXIoLS1mYWRlLWJhY2tncm91bmQtcmdiLCB2YXIoLS1iYWNrZ3JvdW5kLXJnYiwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiLCAyNTUsIDI1NSwgMjU1KSkpLCAwLjgpIDEwMCUpfTpob3N0IC5waWNrZXItYWZ0ZXJ7YmFja2dyb3VuZDotd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCBib3R0b20sIGxlZnQgdG9wLCBjb2xvci1zdG9wKDIwJSwgcmdiYSh2YXIoLS1mYWRlLWJhY2tncm91bmQtcmdiLCB2YXIoLS1iYWNrZ3JvdW5kLXJnYiwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiLCAyNTUsIDI1NSwgMjU1KSkpLCAxKSksIHRvKHJnYmEodmFyKC0tZmFkZS1iYWNrZ3JvdW5kLXJnYiwgdmFyKC0tYmFja2dyb3VuZC1yZ2IsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYiwgMjU1LCAyNTUsIDI1NSkpKSwgMC44KSkpO2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSh2YXIoLS1mYWRlLWJhY2tncm91bmQtcmdiLCB2YXIoLS1iYWNrZ3JvdW5kLXJnYiwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiLCAyNTUsIDI1NSwgMjU1KSkpLCAxKSAyMCUsIHJnYmEodmFyKC0tZmFkZS1iYWNrZ3JvdW5kLXJnYiwgdmFyKC0tYmFja2dyb3VuZC1yZ2IsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYiwgMjU1LCAyNTUsIDI1NSkpKSwgMC44KSAxMDAlKX06aG9zdCAucGlja2VyLWhpZ2hsaWdodHtiYWNrZ3JvdW5kOnZhcigtLWhpZ2hsaWdodC1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXN0ZXAtMTUwLCAjZWVlZWVmKSkpfVwiO1xuY29uc3QgcGlja2VyTWRDc3MgPSBcIjpob3N0e2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDoxMDAlO2hlaWdodDoyMDBweDtkaXJlY3Rpb246bHRyO3otaW5kZXg6MH06aG9zdCAucGlja2VyLWJlZm9yZSw6aG9zdCAucGlja2VyLWFmdGVye3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt6LWluZGV4OjE7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdCAucGlja2VyLWJlZm9yZXt0b3A6MDtoZWlnaHQ6ODNweH06aG9zdCAucGlja2VyLWJlZm9yZXtpbnNldC1pbmxpbmUtc3RhcnQ6MH06aG9zdCAucGlja2VyLWFmdGVye3RvcDoxMTZweDtoZWlnaHQ6ODRweH06aG9zdCAucGlja2VyLWFmdGVye2luc2V0LWlubGluZS1zdGFydDowfTpob3N0IC5waWNrZXItaGlnaGxpZ2h0e2JvcmRlci1yYWRpdXM6dmFyKC0taGlnaGxpZ2h0LWJvcmRlci1yYWRpdXMsIDhweCk7bGVmdDowO3JpZ2h0OjA7dG9wOjUwJTtib3R0b206MDstd2Via2l0LW1hcmdpbi1zdGFydDphdXRvO21hcmdpbi1pbmxpbmUtc3RhcnQ6YXV0bzstd2Via2l0LW1hcmdpbi1lbmQ6YXV0bzttYXJnaW4taW5saW5lLWVuZDphdXRvO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6Y2FsYygxMDAlIC0gMTZweCk7aGVpZ2h0OjM0cHg7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTtiYWNrZ3JvdW5kOnZhcigtLWhpZ2hsaWdodC1iYWNrZ3JvdW5kKTt6LWluZGV4Oi0xfTpob3N0IGlucHV0e3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDtyaWdodDowO2JvdHRvbTowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7bWFyZ2luOjA7cGFkZGluZzowO2JvcmRlcjowO291dGxpbmU6MDtjbGlwOnJlY3QoMCAwIDAgMCk7b3BhY2l0eTowO292ZXJmbG93OmhpZGRlbjstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZX06aG9zdCA6OnNsb3R0ZWQoaW9uLXBpY2tlci1jb2x1bW46Zmlyc3Qtb2YtdHlwZSl7dGV4dC1hbGlnbjpzdGFydH06aG9zdCA6OnNsb3R0ZWQoaW9uLXBpY2tlci1jb2x1bW46bGFzdC1vZi10eXBlKXt0ZXh0LWFsaWduOmVuZH06aG9zdCA6OnNsb3R0ZWQoaW9uLXBpY2tlci1jb2x1bW46b25seS1jaGlsZCl7dGV4dC1hbGlnbjpjZW50ZXJ9Omhvc3QgLnBpY2tlci1iZWZvcmV7YmFja2dyb3VuZDotd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDIwJSwgcmdiYSh2YXIoLS1mYWRlLWJhY2tncm91bmQtcmdiLCB2YXIoLS1iYWNrZ3JvdW5kLXJnYiwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiLCAyNTUsIDI1NSwgMjU1KSkpLCAxKSksIGNvbG9yLXN0b3AoOTAlLCByZ2JhKHZhcigtLWZhZGUtYmFja2dyb3VuZC1yZ2IsIHZhcigtLWJhY2tncm91bmQtcmdiLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2IsIDI1NSwgMjU1LCAyNTUpKSksIDApKSk7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKHZhcigtLWZhZGUtYmFja2dyb3VuZC1yZ2IsIHZhcigtLWJhY2tncm91bmQtcmdiLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2IsIDI1NSwgMjU1LCAyNTUpKSksIDEpIDIwJSwgcmdiYSh2YXIoLS1mYWRlLWJhY2tncm91bmQtcmdiLCB2YXIoLS1iYWNrZ3JvdW5kLXJnYiwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiLCAyNTUsIDI1NSwgMjU1KSkpLCAwKSA5MCUpfTpob3N0IC5waWNrZXItYWZ0ZXJ7YmFja2dyb3VuZDotd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCBib3R0b20sIGxlZnQgdG9wLCBjb2xvci1zdG9wKDMwJSwgcmdiYSh2YXIoLS1mYWRlLWJhY2tncm91bmQtcmdiLCB2YXIoLS1iYWNrZ3JvdW5kLXJnYiwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiLCAyNTUsIDI1NSwgMjU1KSkpLCAxKSksIGNvbG9yLXN0b3AoOTAlLCByZ2JhKHZhcigtLWZhZGUtYmFja2dyb3VuZC1yZ2IsIHZhcigtLWJhY2tncm91bmQtcmdiLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2IsIDI1NSwgMjU1LCAyNTUpKSksIDApKSk7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKHZhcigtLWZhZGUtYmFja2dyb3VuZC1yZ2IsIHZhcigtLWJhY2tncm91bmQtcmdiLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2IsIDI1NSwgMjU1LCAyNTUpKSksIDEpIDMwJSwgcmdiYSh2YXIoLS1mYWRlLWJhY2tncm91bmQtcmdiLCB2YXIoLS1iYWNrZ3JvdW5kLXJnYiwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiLCAyNTUsIDI1NSwgMjU1KSkpLCAwKSA5MCUpfVwiO1xuY29uc3QgUGlja2VyID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmlvbklucHV0TW9kZUNoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uSW5wdXRNb2RlQ2hhbmdlXCIsIDcpO1xuICAgIHRoaXMudXNlSW5wdXRNb2RlID0gZmFsc2U7XG4gICAgdGhpcy5pc0luSGlnaGxpZ2h0Qm91bmRzID0gZXYgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBoaWdobGlnaHRFbFxuICAgICAgfSA9IHRoaXM7XG4gICAgICBpZiAoIWhpZ2hsaWdodEVsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGJib3ggPSBoaWdobGlnaHRFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIC8qKlxuICAgICAgICogQ2hlY2sgdG8gc2VlIGlmIHRoZSB1c2VyIGNsaWNrZWRcbiAgICAgICAqIG91dHNpZGUgdGhlIGJvdW5kcyBvZiB0aGUgaGlnaGxpZ2h0LlxuICAgICAgICovXG4gICAgICBjb25zdCBvdXRzaWRlWCA9IGV2LmNsaWVudFggPCBiYm94LmxlZnQgfHwgZXYuY2xpZW50WCA+IGJib3gucmlnaHQ7XG4gICAgICBjb25zdCBvdXRzaWRlWSA9IGV2LmNsaWVudFkgPCBiYm94LnRvcCB8fCBldi5jbGllbnRZID4gYmJveC5ib3R0b207XG4gICAgICBpZiAob3V0c2lkZVggfHwgb3V0c2lkZVkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBJZiB3ZSBhcmUgbm8gbG9uZ2VyIGZvY3VzZWRcbiAgICAgKiBvbiBhIHBpY2tlciBjb2x1bW4sIHRoZW4gd2Ugc2hvdWxkXG4gICAgICogZXhpdCBpbnB1dCBtb2RlLiBBbiBleGNlcHRpb24gaXMgbWFkZVxuICAgICAqIGZvciB0aGUgaW5wdXQgaW4gdGhlIHBpY2tlciBzaW5jZSBoYXZpbmdcbiAgICAgKiB0aGF0IGZvY3VzZWQgbWVhbnMgd2UgYXJlIHN0aWxsIGluIGlucHV0IG1vZGUuXG4gICAgICovXG4gICAgdGhpcy5vbkZvY3VzT3V0ID0gZXYgPT4ge1xuICAgICAgLy8gVE9ETyhGVy0yODMyKTogdHlwZVxuICAgICAgY29uc3Qge1xuICAgICAgICByZWxhdGVkVGFyZ2V0XG4gICAgICB9ID0gZXY7XG4gICAgICBpZiAoIXJlbGF0ZWRUYXJnZXQgfHwgcmVsYXRlZFRhcmdldC50YWdOYW1lICE9PSAnSU9OLVBJQ0tFUi1DT0xVTU4nICYmIHJlbGF0ZWRUYXJnZXQgIT09IHRoaXMuaW5wdXRFbCkge1xuICAgICAgICB0aGlzLmV4aXRJbnB1dE1vZGUoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFdoZW4gcGlja2VyIGNvbHVtbnMgcmVjZWl2ZSBmb2N1c1xuICAgICAqIHRoZSBwYXJlbnQgcGlja2VyIG5lZWRzIHRvIGRldGVybWluZVxuICAgICAqIHdoZXRoZXIgdG8gZW50ZXIvZXhpdCBpbnB1dCBtb2RlLlxuICAgICAqL1xuICAgIHRoaXMub25Gb2N1c0luID0gZXYgPT4ge1xuICAgICAgLy8gVE9ETyhGVy0yODMyKTogdHlwZVxuICAgICAgY29uc3Qge1xuICAgICAgICB0YXJnZXRcbiAgICAgIH0gPSBldjtcbiAgICAgIC8qKlxuICAgICAgICogRHVlIHRvIGJyb3dzZXIgZGlmZmVyZW5jZXMgaW4gaG93L3doZW4gZm9jdXNcbiAgICAgICAqIGlzIGRpc3BhdGNoZWQgb24gY2VydGFpbiBlbGVtZW50cywgd2UgbmVlZCB0b1xuICAgICAgICogbWFrZSBzdXJlIHRoYXQgdGhpcyBmdW5jdGlvbiBvbmx5IGV2ZXIgcnVucyB3aGVuXG4gICAgICAgKiBmb2N1c2luZyBhIHBpY2tlciBjb2x1bW4uXG4gICAgICAgKi9cbiAgICAgIGlmICh0YXJnZXQudGFnTmFtZSAhPT0gJ0lPTi1QSUNLRVItQ09MVU1OJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIElmIHdlIGhhdmUgYWN0aW9uT25DbGlja1xuICAgICAgICogdGhlbiB0aGlzIG1lYW5zIHRoZSB1c2VyIGZvY3VzZWRcbiAgICAgICAqIGEgcGlja2VyIGNvbHVtbiB2aWEgbW91c2Ugb3JcbiAgICAgICAqIHRvdWNoIChpLmUuIGEgUG9pbnRlckV2ZW50KS4gQXMgYSByZXN1bHQsXG4gICAgICAgKiB3ZSBzaG91bGQgbm90IGVudGVyL2V4aXQgaW5wdXQgbW9kZVxuICAgICAgICogdW50aWwgdGhlIGNsaWNrIGV2ZW50IGhhcyBmaXJlZCwgd2hpY2ggaGFwcGVuc1xuICAgICAgICogYWZ0ZXIgdGhlIGBmb2N1c2luYCBldmVudC5cbiAgICAgICAqXG4gICAgICAgKiBPdGhlcndpc2UsIHRoZSB1c2VyIGxpa2VseSBmb2N1c2VkXG4gICAgICAgKiB0aGUgY29sdW1uIHVzaW5nIHRoZWlyIGtleWJvYXJkIGFuZFxuICAgICAgICogd2Ugc2hvdWxkIGVudGVyL2V4aXQgaW5wdXQgbW9kZSBhdXRvbWF0aWNhbGx5LlxuICAgICAgICovXG4gICAgICBpZiAoIXRoaXMuYWN0aW9uT25DbGljaykge1xuICAgICAgICBjb25zdCBjb2x1bW5FbCA9IHRhcmdldDtcbiAgICAgICAgY29uc3QgYWxsb3dJbnB1dCA9IGNvbHVtbkVsLm51bWVyaWNJbnB1dDtcbiAgICAgICAgaWYgKGFsbG93SW5wdXQpIHtcbiAgICAgICAgICB0aGlzLmVudGVySW5wdXRNb2RlKGNvbHVtbkVsLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5leGl0SW5wdXRNb2RlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE9uIGNsaWNrIHdlIG5lZWQgdG8gcnVuIGFuIGFjdGlvbk9uQ2xpY2tcbiAgICAgKiBmdW5jdGlvbiB0aGF0IGhhcyBiZWVuIHNldCBpbiBvblBvaW50ZXJEb3duXG4gICAgICogc28gdGhhdCB3ZSBlbnRlci9leGl0IGlucHV0IG1vZGUgY29ycmVjdGx5LlxuICAgICAqL1xuICAgIHRoaXMub25DbGljayA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgYWN0aW9uT25DbGlja1xuICAgICAgfSA9IHRoaXM7XG4gICAgICBpZiAoYWN0aW9uT25DbGljaykge1xuICAgICAgICBhY3Rpb25PbkNsaWNrKCk7XG4gICAgICAgIHRoaXMuYWN0aW9uT25DbGljayA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENsaWNraW5nIGEgY29sdW1uIGFsc28gZm9jdXNlcyB0aGUgY29sdW1uIG9uXG4gICAgICogY2VydGFpbiBicm93c2Vycywgc28gd2UgdXNlIG9uUG9pbnRlckRvd25cbiAgICAgKiB0byB0ZWxsIHRoZSBvbkZvY3VzSW4gZnVuY3Rpb24gdGhhdCB1c2Vyc1xuICAgICAqIGFyZSB0cnlpbmcgdG8gY2xpY2sgdGhlIGNvbHVtbiByYXRoZXIgdGhhblxuICAgICAqIGZvY3VzIHRoZSBjb2x1bW4gdXNpbmcgdGhlIGtleWJvYXJkLiBXaGVuIHRoZVxuICAgICAqIHVzZXIgY29tcGxldGVzIHRoZSBjbGljaywgdGhlIG9uQ2xpY2sgZnVuY3Rpb25cbiAgICAgKiBydW5zIGFuZCBydW5zIHRoZSBhY3Rpb25PbkNsaWNrIGNhbGxiYWNrLlxuICAgICAqL1xuICAgIHRoaXMub25Qb2ludGVyRG93biA9IGV2ID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgdXNlSW5wdXRNb2RlLFxuICAgICAgICBpbnB1dE1vZGVDb2x1bW4sXG4gICAgICAgIGVsXG4gICAgICB9ID0gdGhpcztcbiAgICAgIGlmICh0aGlzLmlzSW5IaWdobGlnaHRCb3VuZHMoZXYpKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiB3ZSB3ZXJlIGFscmVhZHkgaW5cbiAgICAgICAgICogaW5wdXQgbW9kZSwgdGhlbiB3ZSBzaG91bGQgZGV0ZXJtaW5lXG4gICAgICAgICAqIGlmIHdlIHRhcHBlZCBhIHBhcnRpY3VsYXIgY29sdW1uIGFuZFxuICAgICAgICAgKiBzaG91bGQgc3dpdGNoIHRvIGlucHV0IG1vZGUgZm9yXG4gICAgICAgICAqIHRoYXQgc3BlY2lmaWMgY29sdW1uLlxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKHVzZUlucHV0TW9kZSkge1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIElmIHdlIHRhcHBlZCBhIHBpY2tlciBjb2x1bW5cbiAgICAgICAgICAgKiB0aGVuIHdlIHNob3VsZCBlaXRoZXIgc3dpdGNoIHRvIGlucHV0XG4gICAgICAgICAgICogbW9kZSBmb3IgdGhhdCBjb2x1bW4gb3IgYWxsIGNvbHVtbnMuXG4gICAgICAgICAgICogT3RoZXJ3aXNlIHdlIHNob3VsZCBleGl0IGlucHV0IG1vZGVcbiAgICAgICAgICAgKiBzaW5jZSB3ZSBqdXN0IHRhcHBlZCB0aGUgaGlnaGxpZ2h0IGFuZFxuICAgICAgICAgICAqIG5vdCBhIGNvbHVtbi5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBpZiAoZXYudGFyZ2V0LnRhZ05hbWUgPT09ICdJT04tUElDS0VSLUNPTFVNTicpIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogSWYgdXNlciB0YXBzIDIgZGlmZmVyZW50IGNvbHVtbnNcbiAgICAgICAgICAgICAqIHRoZW4gd2Ugc2hvdWxkIGp1c3Qgc3dpdGNoIHRvIGlucHV0IG1vZGVcbiAgICAgICAgICAgICAqIGZvciB0aGUgbmV3IGNvbHVtbiByYXRoZXIgdGhhbiBzd2l0Y2hpbmcgdG9cbiAgICAgICAgICAgICAqIGlucHV0IG1vZGUgZm9yIGFsbCBjb2x1bW5zLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpZiAoaW5wdXRNb2RlQ29sdW1uICYmIGlucHV0TW9kZUNvbHVtbiA9PT0gZXYudGFyZ2V0KSB7XG4gICAgICAgICAgICAgIHRoaXMuYWN0aW9uT25DbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmVudGVySW5wdXRNb2RlKCk7XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmFjdGlvbk9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbnRlcklucHV0TW9kZShldi50YXJnZXQpO1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbk9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZXhpdElucHV0TW9kZSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogSWYgd2Ugd2VyZSBub3QgYWxyZWFkeSBpblxuICAgICAgICAgICAqIGlucHV0IG1vZGUsIHRoZW4gd2Ugc2hvdWxkXG4gICAgICAgICAgICogZW50ZXIgaW5wdXQgbW9kZSBmb3IgYWxsIGNvbHVtbnMuXG4gICAgICAgICAgICovXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogSWYgdGhlcmUgaXMgb25seSAxIG51bWVyaWMgaW5wdXQgY29sdW1uXG4gICAgICAgICAgICogdGhlbiB3ZSBzaG91bGQgc2tpcCBtdWx0aSBjb2x1bW4gaW5wdXQuXG4gICAgICAgICAgICovXG4gICAgICAgICAgY29uc3QgY29sdW1ucyA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lvbi1waWNrZXItY29sdW1uLnBpY2tlci1jb2x1bW4tbnVtZXJpYy1pbnB1dCcpO1xuICAgICAgICAgIGNvbnN0IGNvbHVtbkVsID0gY29sdW1ucy5sZW5ndGggPT09IDEgPyBldi50YXJnZXQgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgdGhpcy5hY3Rpb25PbkNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbnRlcklucHV0TW9kZShjb2x1bW5FbCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmFjdGlvbk9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuZXhpdElucHV0TW9kZSgpO1xuICAgICAgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEVudGVycyBpbnB1dCBtb2RlIHRvIGFsbG93XG4gICAgICogZm9yIHRleHQgZW50cnkgb2YgbnVtZXJpYyB2YWx1ZXMuXG4gICAgICogSWYgb24gbW9iaWxlLCB3ZSBmb2N1cyBhIGhpZGRlbiBpbnB1dFxuICAgICAqIGZpZWxkIHNvIHRoYXQgdGhlIG9uIHNjcmVlbiBrZXlib2FyZFxuICAgICAqIGlzIGJyb3VnaHQgdXAuIFdoZW4gdGFiYmluZyB1c2luZyBhXG4gICAgICoga2V5Ym9hcmQsIHBpY2tlciBjb2x1bW5zIHJlY2VpdmUgYW4gb3V0bGluZVxuICAgICAqIHRvIGluZGljYXRlIHRoZXkgYXJlIGZvY3VzZWQuIEFzIGEgcmVzdWx0LFxuICAgICAqIHdlIHNob3VsZCBub3QgZm9jdXMgdGhlIGhpZGRlbiBpbnB1dCBhcyBpdFxuICAgICAqIHdvdWxkIGNhdXNlIHRoZSBvdXRsaW5lIHRvIGdvIGF3YXksIHByZXZlbnRpbmdcbiAgICAgKiB1c2VycyBmcm9tIGhhdmluZyBhbnkgdmlzdWFsIGluZGljYXRpb24gb2Ygd2hpY2hcbiAgICAgKiBjb2x1bW4gaXMgZm9jdXNlZC5cbiAgICAgKi9cbiAgICB0aGlzLmVudGVySW5wdXRNb2RlID0gKGNvbHVtbkVsLCBmb2N1c0lucHV0ID0gdHJ1ZSkgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBpbnB1dEVsLFxuICAgICAgICBlbFxuICAgICAgfSA9IHRoaXM7XG4gICAgICBpZiAoIWlucHV0RWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBPbmx5IGFjdGl2ZSBpbnB1dCBtb2RlIGlmIHRoZXJlIGlzIGF0XG4gICAgICAgKiBsZWFzdCBvbmUgY29sdW1uIHRoYXQgYWNjZXB0cyBudW1lcmljIGlucHV0LlxuICAgICAgICovXG4gICAgICBjb25zdCBoYXNJbnB1dENvbHVtbiA9IGVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1waWNrZXItY29sdW1uLnBpY2tlci1jb2x1bW4tbnVtZXJpYy1pbnB1dCcpO1xuICAgICAgaWYgKCFoYXNJbnB1dENvbHVtbikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIElmIGNvbHVtbkVsIGlzIHVuZGVmaW5lZCB0aGVuXG4gICAgICAgKiBpdCBpcyBhc3N1bWVkIHRoYXQgYWxsIG51bWVyaWMgcGlja2Vyc1xuICAgICAgICogYXJlIGVsaWdpYmxlIGZvciB0ZXh0IGVudHJ5LlxuICAgICAgICogKGkuZS4gaG91ciBhbmQgbWludXRlIGNvbHVtbnMpXG4gICAgICAgKi9cbiAgICAgIHRoaXMudXNlSW5wdXRNb2RlID0gdHJ1ZTtcbiAgICAgIHRoaXMuaW5wdXRNb2RlQ29sdW1uID0gY29sdW1uRWw7XG4gICAgICAvKipcbiAgICAgICAqIFVzZXJzIHdpdGggYSBrZXlib2FyZCBhbmQgbW91c2UgY2FuXG4gICAgICAgKiBhY3RpdmF0ZSBpbnB1dCBtb2RlIHdoZXJlIHRoZSBpbnB1dCBpc1xuICAgICAgICogZm9jdXNlZCBhcyB3ZWxsIGFzIHdoZW4gaXQgaXMgbm90IGZvY3VzZWQsXG4gICAgICAgKiBzbyB3ZSBuZWVkIHRvIG1ha2Ugc3VyZSB3ZSBjbGVhbiB1cCBhbnlcbiAgICAgICAqIG9sZCBsaXN0ZW5lcnMuXG4gICAgICAgKi9cbiAgICAgIGlmIChmb2N1c0lucHV0KSB7XG4gICAgICAgIGlmICh0aGlzLmRlc3Ryb3lLZXlwcmVzc0xpc3RlbmVyKSB7XG4gICAgICAgICAgdGhpcy5kZXN0cm95S2V5cHJlc3NMaXN0ZW5lcigpO1xuICAgICAgICAgIHRoaXMuZGVzdHJveUtleXByZXNzTGlzdGVuZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXRFbC5mb2N1cygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVE9ETyBGVy01OTAwIFVzZSBrZXlkb3duIGluc3RlYWRcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCB0aGlzLm9uS2V5UHJlc3MpO1xuICAgICAgICB0aGlzLmRlc3Ryb3lLZXlwcmVzc0xpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgdGhpcy5vbktleVByZXNzKTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZW1pdElucHV0TW9kZUNoYW5nZSgpO1xuICAgIH07XG4gICAgdGhpcy5vbktleVByZXNzID0gZXYgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBpbnB1dEVsXG4gICAgICB9ID0gdGhpcztcbiAgICAgIGlmICghaW5wdXRFbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBwYXJzZWRWYWx1ZSA9IHBhcnNlSW50KGV2LmtleSwgMTApO1xuICAgICAgLyoqXG4gICAgICAgKiBPbmx5IG51bWJlcnMgc2hvdWxkIGJlIGFsbG93ZWRcbiAgICAgICAqL1xuICAgICAgaWYgKCFOdW1iZXIuaXNOYU4ocGFyc2VkVmFsdWUpKSB7XG4gICAgICAgIGlucHV0RWwudmFsdWUgKz0gZXYua2V5O1xuICAgICAgICB0aGlzLm9uSW5wdXRDaGFuZ2UoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuc2VsZWN0U2luZ2xlQ29sdW1uID0gKCkgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBpbnB1dEVsLFxuICAgICAgICBpbnB1dE1vZGVDb2x1bW4sXG4gICAgICAgIHNpbmdsZUNvbHVtblNlYXJjaFRpbWVvdXRcbiAgICAgIH0gPSB0aGlzO1xuICAgICAgaWYgKCFpbnB1dEVsIHx8ICFpbnB1dE1vZGVDb2x1bW4pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgb3B0aW9ucyA9IEFycmF5LmZyb20oaW5wdXRNb2RlQ29sdW1uLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lvbi1waWNrZXItY29sdW1uLW9wdGlvbicpKS5maWx0ZXIoZWwgPT4gZWwuZGlzYWJsZWQgIT09IHRydWUpO1xuICAgICAgLyoqXG4gICAgICAgKiBJZiB1c2VycyBwYXVzZSBmb3IgYSBiaXQsIHRoZSBzZWFyY2hcbiAgICAgICAqIHZhbHVlIHNob3VsZCBiZSByZXNldCBzaW1pbGFyIHRvIGhvdyBhXG4gICAgICAgKiA8c2VsZWN0PiBiZWhhdmVzLiBTbyB0eXBpbmcgXCIzNFwiLCB3YWl0aW5nLFxuICAgICAgICogdGhlbiB0eXBpbmcgXCI1XCIgc2hvdWxkIHNlbGVjdCBcIjA1XCIuXG4gICAgICAgKi9cbiAgICAgIGlmIChzaW5nbGVDb2x1bW5TZWFyY2hUaW1lb3V0KSB7XG4gICAgICAgIGNsZWFyVGltZW91dChzaW5nbGVDb2x1bW5TZWFyY2hUaW1lb3V0KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2luZ2xlQ29sdW1uU2VhcmNoVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpbnB1dEVsLnZhbHVlID0gJyc7XG4gICAgICAgIHRoaXMuc2luZ2xlQ29sdW1uU2VhcmNoVGltZW91dCA9IHVuZGVmaW5lZDtcbiAgICAgIH0sIDEwMDApO1xuICAgICAgLyoqXG4gICAgICAgKiBGb3IgdmFsdWVzIHRoYXQgYXJlIGxvbmdlciB0aGFuIDIgZGlnaXRzIGxvbmdcbiAgICAgICAqIHdlIHNob3VsZCBzaGlmdCB0aGUgdmFsdWUgb3ZlciAxIGNoYXJhY3RlclxuICAgICAgICogdG8gdGhlIGxlZnQuIFNvIHR5cGluZyBcIjQ1NlwiIHdvdWxkIHJlc3VsdCBpbiBcIjU2XCIuXG4gICAgICAgKiBUT0RPOiBJZiB3ZSB3YW50IHRvIHN1cHBvcnQgbW9yZSB0aGFuIGp1c3RcbiAgICAgICAqIHRpbWUgZW50cnksIHdlIHNob3VsZCB1cGRhdGUgdGhpcyB2YWx1ZSB0byBiZVxuICAgICAgICogdGhlIG1heCBsZW5ndGggb2YgYWxsIG9mIHRoZSBwaWNrZXIgaXRlbXMuXG4gICAgICAgKi9cbiAgICAgIGlmIChpbnB1dEVsLnZhbHVlLmxlbmd0aCA+PSAzKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBpbnB1dEVsLnZhbHVlLmxlbmd0aCAtIDI7XG4gICAgICAgIGNvbnN0IG5ld1N0cmluZyA9IGlucHV0RWwudmFsdWUuc3Vic3RyaW5nKHN0YXJ0SW5kZXgpO1xuICAgICAgICBpbnB1dEVsLnZhbHVlID0gbmV3U3RyaW5nO1xuICAgICAgICB0aGlzLnNlbGVjdFNpbmdsZUNvbHVtbigpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIENoZWNraW5nIHRoZSB2YWx1ZSBvZiB0aGUgaW5wdXQgZ2V0cyBwcmlvcml0eVxuICAgICAgICogZmlyc3QuIEZvciBleGFtcGxlLCBpZiB0aGUgdmFsdWUgb2YgdGhlIGlucHV0XG4gICAgICAgKiBpcyBcIjFcIiBhbmQgd2UgZW50ZXJlZCBcIjJcIiwgdGhlbiB0aGUgY29tcGxldGUgdmFsdWVcbiAgICAgICAqIGlzIFwiMTJcIiBhbmQgd2Ugc2hvdWxkIHNlbGVjdCBob3VyIDEyLlxuICAgICAgICpcbiAgICAgICAqIFJlZ2V4IHJlbW92ZXMgYW55IGxlYWRpbmcgemVyb3MgZnJvbSB2YWx1ZXMgbGlrZSBcIjAyXCIsXG4gICAgICAgKiBidXQgaXQga2VlcHMgYSBzaW5nbGUgemVybyBpZiB0aGVyZSBhcmUgb25seSB6ZXJvcyBpbiB0aGUgc3RyaW5nLlxuICAgICAgICogMCsoPz1bMS05XSkgLS0+IE1hdGNoIDEgb3IgbW9yZSB6ZXJvcyB0aGF0IGFyZSBmb2xsb3dlZCBieSAxLTlcbiAgICAgICAqIDArKD89MCQpIC0tPiBNYXRjaCAxIG9yIG1vcmUgemVyb3MgdGhhdCBtdXN0IGJlIGZvbGxvd2VkIGJ5IG9uZSAwIGFuZCBlbmQuXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IGZpbmRJdGVtRnJvbUNvbXBsZXRlVmFsdWUgPSBvcHRpb25zLmZpbmQoKHtcbiAgICAgICAgdGV4dENvbnRlbnRcbiAgICAgIH0pID0+IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEtleWJvYXJkIGVudHJ5IGlzIGN1cnJlbnRseSBvbmx5IHVzZWQgaW5zaWRlIG9mIERhdGV0aW1lXG4gICAgICAgICAqIHdoZXJlIHdlIGd1YXJhbnRlZSB0ZXh0Q29udGVudCBpcyBzZXQuXG4gICAgICAgICAqIElmIHdlIGVuZCB1cCBleHBvc2luZyB0aGlzIGZlYXR1cmUgcHVibGljbHkgd2Ugc2hvdWxkIHJldmlzaXQgdGhpcyBhc3N1bXB0aW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgcGFyc2VkVGV4dCA9IHRleHRDb250ZW50LnJlcGxhY2UoL14wKyg/PVsxLTldKXwwKyg/PTAkKS8sICcnKTtcbiAgICAgICAgcmV0dXJuIHBhcnNlZFRleHQgPT09IGlucHV0RWwudmFsdWU7XG4gICAgICB9KTtcbiAgICAgIGlmIChmaW5kSXRlbUZyb21Db21wbGV0ZVZhbHVlKSB7XG4gICAgICAgIGlucHV0TW9kZUNvbHVtbi5zZXRWYWx1ZShmaW5kSXRlbUZyb21Db21wbGV0ZVZhbHVlLnZhbHVlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBJZiB3ZSB0eXBlZCBcIjU2XCIgdG8gZ2V0IG1pbnV0ZSA1NiwgdGhlbiB0eXBlZCBcIjdcIixcbiAgICAgICAqIHdlIHNob3VsZCBzZWxlY3QgXCIwN1wiIGFzIFwiNTY3XCIgaXMgbm90IGEgdmFsaWQgbWludXRlLlxuICAgICAgICovXG4gICAgICBpZiAoaW5wdXRFbC52YWx1ZS5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgY29uc3QgY2hhbmdlZENoYXJhY3RlciA9IGlucHV0RWwudmFsdWUuc3Vic3RyaW5nKGlucHV0RWwudmFsdWUubGVuZ3RoIC0gMSk7XG4gICAgICAgIGlucHV0RWwudmFsdWUgPSBjaGFuZ2VkQ2hhcmFjdGVyO1xuICAgICAgICB0aGlzLnNlbGVjdFNpbmdsZUNvbHVtbigpO1xuICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogU2VhcmNoZXMgYSBsaXN0IG9mIGNvbHVtbiBpdGVtcyBmb3IgYSBwYXJ0aWN1bGFyXG4gICAgICogdmFsdWUuIFRoaXMgaXMgY3VycmVudGx5IHVzZWQgZm9yIG51bWVyaWMgdmFsdWVzLlxuICAgICAqIFRoZSB6ZXJvQmVoYXZpb3IgY2FuIGJlIHNldCB0byBhY2NvdW50IGZvciBsZWFkaW5nXG4gICAgICogb3IgdHJhaWxpbmcgemVyb3Mgd2hlbiBsb29raW5nIGF0IHRoZSBpdGVtIHRleHQuXG4gICAgICovXG4gICAgdGhpcy5zZWFyY2hDb2x1bW4gPSAoY29sRWwsIHZhbHVlLCB6ZXJvQmVoYXZpb3IgPSAnc3RhcnQnKSA9PiB7XG4gICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGJlaGF2aW9yID0gemVyb0JlaGF2aW9yID09PSAnc3RhcnQnID8gL14wKy8gOiAvMCQvO1xuICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKGJlaGF2aW9yLCAnJyk7XG4gICAgICBjb25zdCBvcHRpb24gPSBBcnJheS5mcm9tKGNvbEVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lvbi1waWNrZXItY29sdW1uLW9wdGlvbicpKS5maW5kKGVsID0+IHtcbiAgICAgICAgcmV0dXJuIGVsLmRpc2FibGVkICE9PSB0cnVlICYmIGVsLnRleHRDb250ZW50LnJlcGxhY2UoYmVoYXZpb3IsICcnKSA9PT0gdmFsdWU7XG4gICAgICB9KTtcbiAgICAgIGlmIChvcHRpb24pIHtcbiAgICAgICAgY29sRWwuc2V0VmFsdWUob3B0aW9uLnZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAhIW9wdGlvbjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEF0dGVtcHRzIHRvIGludGVsbGlnZW50bHkgc2VhcmNoIHRoZSBmaXJzdCBhbmQgc2Vjb25kXG4gICAgICogY29sdW1uIGFzIGlmIHRoZXkncmUgbnVtYmVyIGNvbHVtbnMgZm9yIHRoZSBwcm92aWRlZCBudW1iZXJzXG4gICAgICogd2hlcmUgdGhlIGZpcnN0IHR3byBudW1iZXJzIGFyZSB0aGUgZmlyc3QgY29sdW1uXG4gICAgICogYW5kIHRoZSBsYXN0IDIgYXJlIHRoZSBsYXN0IGNvbHVtbi4gVHJpZXMgdG8gYWxsb3cgZm9yIHRoZSBmaXJzdFxuICAgICAqIG51bWJlciB0byBiZSBpZ25vcmVkIGZvciBzaXR1YXRpb25zIHdoZXJlIHR5cG9zIG9jY3VycmVkLlxuICAgICAqL1xuICAgIHRoaXMubXVsdGlDb2x1bW5TZWFyY2ggPSAoZmlyc3RDb2x1bW4sIHNlY29uZENvbHVtbiwgaW5wdXQpID0+IHtcbiAgICAgIGlmIChpbnB1dC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgaW5wdXRBcnJheSA9IGlucHV0LnNwbGl0KCcnKTtcbiAgICAgIGNvbnN0IGhvdXJWYWx1ZSA9IGlucHV0QXJyYXkuc2xpY2UoMCwgMikuam9pbignJyk7XG4gICAgICAvLyBUcnkgdG8gZmluZCBhIG1hdGNoIGZvciB0aGUgZmlyc3QgdHdvIGRpZ2l0cyBpbiB0aGUgZmlyc3QgY29sdW1uXG4gICAgICBjb25zdCBmb3VuZEhvdXIgPSB0aGlzLnNlYXJjaENvbHVtbihmaXJzdENvbHVtbiwgaG91clZhbHVlKTtcbiAgICAgIC8vIElmIHdlIGhhdmUgbW9yZSB0aGFuIDIgZGlnaXRzIGFuZCBmb3VuZCBhIG1hdGNoIGZvciBob3VycyxcbiAgICAgIC8vIHVzZSB0aGUgcmVtYWluaW5nIGRpZ2l0cyBmb3IgdGhlIHNlY29uZCBjb2x1bW4gKG1pbnV0ZXMpXG4gICAgICBpZiAoaW5wdXRBcnJheS5sZW5ndGggPiAyICYmIGZvdW5kSG91cikge1xuICAgICAgICBjb25zdCBtaW51dGVWYWx1ZSA9IGlucHV0QXJyYXkuc2xpY2UoMiwgNCkuam9pbignJyk7XG4gICAgICAgIHRoaXMuc2VhcmNoQ29sdW1uKHNlY29uZENvbHVtbiwgbWludXRlVmFsdWUpO1xuICAgICAgfVxuICAgICAgLy8gSWYgd2UgY291bGRuJ3QgZmluZCBhIG1hdGNoIGZvciB0aGUgdHdvLWRpZ2l0IGhvdXIsIHRyeSBzaW5nbGUgZGlnaXQgYXBwcm9hY2hlc1xuICAgICAgZWxzZSBpZiAoIWZvdW5kSG91ciAmJiBpbnB1dEFycmF5Lmxlbmd0aCA+PSAxKSB7XG4gICAgICAgIC8vIEZpcnN0IHRyeSB0aGUgZmlyc3QgZGlnaXQgYXMgYSBzaW5nbGUtZGlnaXQgaG91clxuICAgICAgICBsZXQgc2luZ2xlRGlnaXRIb3VyID0gaW5wdXRBcnJheVswXTtcbiAgICAgICAgbGV0IHNpbmdsZURpZ2l0Rm91bmQgPSB0aGlzLnNlYXJjaENvbHVtbihmaXJzdENvbHVtbiwgc2luZ2xlRGlnaXRIb3VyKTtcbiAgICAgICAgLy8gSWYgdGhhdCBkaWRuJ3Qgd29yaywgdHJ5IHRoZSBzZWNvbmQgZGlnaXQgYXMgYSBzaW5nbGUtZGlnaXQgaG91clxuICAgICAgICAvLyAoaGFuZGxlcyBjYXNlIHdoZXJlIHVzZXIgbWFkZSBhIHR5cG8gaW4gdGhlIGZpcnN0IGRpZ2l0LCBvciB0aGV5IHR5cGVkIG92ZXIgdGhlbXNlbHZlcylcbiAgICAgICAgaWYgKCFzaW5nbGVEaWdpdEZvdW5kKSB7XG4gICAgICAgICAgaW5wdXRBcnJheS5zaGlmdCgpO1xuICAgICAgICAgIHNpbmdsZURpZ2l0SG91ciA9IGlucHV0QXJyYXlbMF07XG4gICAgICAgICAgc2luZ2xlRGlnaXRGb3VuZCA9IHRoaXMuc2VhcmNoQ29sdW1uKGZpcnN0Q29sdW1uLCBzaW5nbGVEaWdpdEhvdXIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHdlIGZvdW5kIGEgc2luZ2xlLWRpZ2l0IGhvdXIgYW5kIGhhdmUgcmVtYWluaW5nIGRpZ2l0cyxcbiAgICAgICAgLy8gdXNlIHVwIHRvIDIgb2YgdGhlIHJlbWFpbmluZyBkaWdpdHMgZm9yIHRoZSBzZWNvbmQgY29sdW1uXG4gICAgICAgIGlmIChzaW5nbGVEaWdpdEZvdW5kICYmIGlucHV0QXJyYXkubGVuZ3RoID4gMSkge1xuICAgICAgICAgIGNvbnN0IHJlbWFpbmluZ0RpZ2l0cyA9IGlucHV0QXJyYXkuc2xpY2UoMSwgMykuam9pbignJyk7XG4gICAgICAgICAgdGhpcy5zZWFyY2hDb2x1bW4oc2Vjb25kQ29sdW1uLCByZW1haW5pbmdEaWdpdHMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnNlbGVjdE11bHRpQ29sdW1uID0gKCkgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBpbnB1dEVsLFxuICAgICAgICBlbFxuICAgICAgfSA9IHRoaXM7XG4gICAgICBpZiAoIWlucHV0RWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgbnVtZXJpY1BpY2tlcnMgPSBBcnJheS5mcm9tKGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lvbi1waWNrZXItY29sdW1uJykpLmZpbHRlcihjb2wgPT4gY29sLm51bWVyaWNJbnB1dCk7XG4gICAgICBjb25zdCBmaXJzdENvbHVtbiA9IG51bWVyaWNQaWNrZXJzWzBdO1xuICAgICAgY29uc3QgbGFzdENvbHVtbiA9IG51bWVyaWNQaWNrZXJzWzFdO1xuICAgICAgbGV0IHZhbHVlID0gaW5wdXRFbC52YWx1ZTtcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiA0KSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBpbnB1dEVsLnZhbHVlLmxlbmd0aCAtIDQ7XG4gICAgICAgIGNvbnN0IG5ld1N0cmluZyA9IGlucHV0RWwudmFsdWUuc3Vic3RyaW5nKHN0YXJ0SW5kZXgpO1xuICAgICAgICBpbnB1dEVsLnZhbHVlID0gbmV3U3RyaW5nO1xuICAgICAgICB2YWx1ZSA9IG5ld1N0cmluZztcbiAgICAgIH1cbiAgICAgIHRoaXMubXVsdGlDb2x1bW5TZWFyY2goZmlyc3RDb2x1bW4sIGxhc3RDb2x1bW4sIHZhbHVlKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNlYXJjaGVzIHRoZSB2YWx1ZSBvZiB0aGUgYWN0aXZlIGNvbHVtblxuICAgICAqIHRvIGRldGVybWluZSB3aGljaCB2YWx1ZSB1c2VycyBhcmUgdHJ5aW5nXG4gICAgICogdG8gc2VsZWN0XG4gICAgICovXG4gICAgdGhpcy5vbklucHV0Q2hhbmdlID0gKCkgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICB1c2VJbnB1dE1vZGUsXG4gICAgICAgIGlucHV0RWwsXG4gICAgICAgIGlucHV0TW9kZUNvbHVtblxuICAgICAgfSA9IHRoaXM7XG4gICAgICBpZiAoIXVzZUlucHV0TW9kZSB8fCAhaW5wdXRFbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoaW5wdXRNb2RlQ29sdW1uKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0U2luZ2xlQ29sdW1uKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNlbGVjdE11bHRpQ29sdW1uKCk7XG4gICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBFbWl0IGlvbklucHV0TW9kZUNoYW5nZS4gUGlja2VyIGNvbHVtbnNcbiAgICAgKiBsaXN0ZW4gZm9yIHRoaXMgZXZlbnQgdG8gZGV0ZXJtaW5lIHdoZXRoZXJcbiAgICAgKiBvciBub3QgdGhlaXIgY29sdW1uIGlzIFwiYWN0aXZlXCIgZm9yIHRleHQgaW5wdXQuXG4gICAgICovXG4gICAgdGhpcy5lbWl0SW5wdXRNb2RlQ2hhbmdlID0gKCkgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICB1c2VJbnB1dE1vZGUsXG4gICAgICAgIGlucHV0TW9kZUNvbHVtblxuICAgICAgfSA9IHRoaXM7XG4gICAgICB0aGlzLmlvbklucHV0TW9kZUNoYW5nZS5lbWl0KHtcbiAgICAgICAgdXNlSW5wdXRNb2RlLFxuICAgICAgICBpbnB1dE1vZGVDb2x1bW5cbiAgICAgIH0pO1xuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIFdoZW4gdGhlIHBpY2tlciBpcyBpbnRlcmFjdGVkIHdpdGhcbiAgICogd2UgbmVlZCB0byBwcmV2ZW50IHRvdWNoc3RhcnQgc28gb3RoZXJcbiAgICogZ2VzdHVyZXMgZG8gbm90IGZpcmUuIEZvciBleGFtcGxlLFxuICAgKiBzY3JvbGxpbmcgb24gdGhlIHdoZWVsIHBpY2tlclxuICAgKiBpbiBpb24tZGF0ZXRpbWUgc2hvdWxkIG5vdCBjYXVzZVxuICAgKiBhIGNhcmQgbW9kYWwgdG8gc3dpcGUgdG8gY2xvc2UuXG4gICAqL1xuICBwcmV2ZW50VG91Y2hTdGFydFByb3BhZ2F0aW9uKGV2KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbiAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgZ2V0RWxlbWVudFJvb3QodGhpcy5lbCkuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIHRoaXMub25Gb2N1c0luKTtcbiAgICBnZXRFbGVtZW50Um9vdCh0aGlzLmVsKS5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIHRoaXMub25Gb2N1c091dCk7XG4gIH1cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBFeGl0cyB0ZXh0IGVudHJ5IG1vZGUgZm9yIHRoZSBwaWNrZXJcbiAgICogVGhpcyBtZXRob2QgYmx1cnMgdGhlIGhpZGRlbiBpbnB1dFxuICAgKiBhbmQgY2F1c2UgdGhlIGtleWJvYXJkIHRvIGRpc21pc3MuXG4gICAqL1xuICBhc3luYyBleGl0SW5wdXRNb2RlKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlucHV0RWwsXG4gICAgICB1c2VJbnB1dE1vZGVcbiAgICB9ID0gdGhpcztcbiAgICBpZiAoIXVzZUlucHV0TW9kZSB8fCAhaW5wdXRFbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnVzZUlucHV0TW9kZSA9IGZhbHNlO1xuICAgIHRoaXMuaW5wdXRNb2RlQ29sdW1uID0gdW5kZWZpbmVkO1xuICAgIGlucHV0RWwuYmx1cigpO1xuICAgIGlucHV0RWwudmFsdWUgPSAnJztcbiAgICBpZiAodGhpcy5kZXN0cm95S2V5cHJlc3NMaXN0ZW5lcikge1xuICAgICAgdGhpcy5kZXN0cm95S2V5cHJlc3NMaXN0ZW5lcigpO1xuICAgICAgdGhpcy5kZXN0cm95S2V5cHJlc3NMaXN0ZW5lciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgdGhpcy5lbWl0SW5wdXRNb2RlQ2hhbmdlKCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBoKEhvc3QsIHtcbiAgICAgIGtleTogJzI4ZjgxZTRlZDQ0YTYzMzE3ODU2MTc1N2M1MTk5YzJjOThmOTRiNzQnLFxuICAgICAgb25Qb2ludGVyRG93bjogZXYgPT4gdGhpcy5vblBvaW50ZXJEb3duKGV2KSxcbiAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMub25DbGljaygpXG4gICAgfSwgaChcImlucHV0XCIsIHtcbiAgICAgIGtleTogJ2FiYjNkMWFkMjVlZjYzODU2YWY3ODA0MTExMTc1YTRkNTAwMDhiYzAnLFxuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIixcbiAgICAgIHRhYmluZGV4OiAtMSxcbiAgICAgIGlucHV0bW9kZTogXCJudW1lcmljXCIsXG4gICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgb25LZXlEb3duOiBldiA9PiB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBcIkVudGVyXCIga2V5IHJlcHJlc2VudHNcbiAgICAgICAgICogdGhlIHVzZXIgc3VibWl0dGluZyB0aGVpciB0aW1lXG4gICAgICAgICAqIHNlbGVjdGlvbiwgc28gd2Ugc2hvdWxkIGJsdXIgdGhlXG4gICAgICAgICAqIGlucHV0IChhbmQgdGhlcmVmb3JlIGNsb3NlIHRoZSBrZXlib2FyZClcbiAgICAgICAgICpcbiAgICAgICAgICogVXBkYXRpbmcgdGhlIHBpY2tlcidzIHN0YXRlIHRvIG5vIGxvbmdlclxuICAgICAgICAgKiBiZSBpbiBpbnB1dCBtb2RlIGlzIGhhbmRsZWQgaW4gdGhlIG9uQmx1clxuICAgICAgICAgKiBjYWxsYmFjayBiZWxvdy5cbiAgICAgICAgICovXG4gICAgICAgIGlmIChldi5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAoX2EgPSB0aGlzLmlucHV0RWwpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5ibHVyKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICByZWY6IGVsID0+IHRoaXMuaW5wdXRFbCA9IGVsLFxuICAgICAgb25JbnB1dDogKCkgPT4gdGhpcy5vbklucHV0Q2hhbmdlKCksXG4gICAgICBvbkJsdXI6ICgpID0+IHRoaXMuZXhpdElucHV0TW9kZSgpXG4gICAgfSksIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnMzM0YTVhYmRjMDJlNmIxMjdjNTcxNzdmNjI2ZDdlNGZmNTUyNjE4MycsXG4gICAgICBjbGFzczogXCJwaWNrZXItYmVmb3JlXCJcbiAgICB9KSwgaChcImRpdlwiLCB7XG4gICAgICBrZXk6ICdmZmQ2MjcxOTMxMTI5ZTg4ZmM3YzgyMGU5MTlkNjg0ODk5ZTQyMGM1JyxcbiAgICAgIGNsYXNzOiBcInBpY2tlci1hZnRlclwiXG4gICAgfSksIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnNzhkMWQ5NWZkMDllMDRmMTU0ZWE1OWYyNGExY2VjZTcyYzQ3ZWQ3YicsXG4gICAgICBjbGFzczogXCJwaWNrZXItaGlnaGxpZ2h0XCIsXG4gICAgICByZWY6IGVsID0+IHRoaXMuaGlnaGxpZ2h0RWwgPSBlbFxuICAgIH0pLCBoKFwic2xvdFwiLCB7XG4gICAgICBrZXk6ICcwYmQ1YjlmODc1ZDNjNzFmNmNiYmRlMjA1NGJhZWIxYjBhMmU4Y2Q1J1xuICAgIH0pKTtcbiAgfVxuICBnZXQgZWwoKSB7XG4gICAgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7XG4gIH1cbn07XG5QaWNrZXIuc3R5bGUgPSB7XG4gIGlvczogcGlja2VySW9zQ3NzLFxuICBtZDogcGlja2VyTWRDc3Ncbn07XG5leHBvcnQgeyBQaWNrZXIgYXMgaW9uX3BpY2tlciB9OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBS0EsSUFBTSxlQUFlO0FBQ3JCLElBQU0sY0FBYztBQUNwQixJQUFNLFNBQVMsTUFBTTtBQUFBLEVBQ25CLFlBQVksU0FBUztBQUNuQixxQkFBaUIsTUFBTSxPQUFPO0FBQzlCLFNBQUsscUJBQXFCLFlBQVksTUFBTSxzQkFBc0IsQ0FBQztBQUNuRSxTQUFLLGVBQWU7QUFDcEIsU0FBSyxzQkFBc0IsUUFBTTtBQUMvQixZQUFNO0FBQUEsUUFDSjtBQUFBLE1BQ0YsSUFBSTtBQUNKLFVBQUksQ0FBQyxhQUFhO0FBQ2hCLGVBQU87QUFBQSxNQUNUO0FBQ0EsWUFBTSxPQUFPLFlBQVksc0JBQXNCO0FBSy9DLFlBQU0sV0FBVyxHQUFHLFVBQVUsS0FBSyxRQUFRLEdBQUcsVUFBVSxLQUFLO0FBQzdELFlBQU0sV0FBVyxHQUFHLFVBQVUsS0FBSyxPQUFPLEdBQUcsVUFBVSxLQUFLO0FBQzVELFVBQUksWUFBWSxVQUFVO0FBQ3hCLGVBQU87QUFBQSxNQUNUO0FBQ0EsYUFBTztBQUFBLElBQ1Q7QUFRQSxTQUFLLGFBQWEsUUFBTTtBQUV0QixZQUFNO0FBQUEsUUFDSjtBQUFBLE1BQ0YsSUFBSTtBQUNKLFVBQUksQ0FBQyxpQkFBaUIsY0FBYyxZQUFZLHVCQUF1QixrQkFBa0IsS0FBSyxTQUFTO0FBQ3JHLGFBQUssY0FBYztBQUFBLE1BQ3JCO0FBQUEsSUFDRjtBQU1BLFNBQUssWUFBWSxRQUFNO0FBRXJCLFlBQU07QUFBQSxRQUNKO0FBQUEsTUFDRixJQUFJO0FBT0osVUFBSSxPQUFPLFlBQVkscUJBQXFCO0FBQzFDO0FBQUEsTUFDRjtBQWNBLFVBQUksQ0FBQyxLQUFLLGVBQWU7QUFDdkIs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LFlBQU07QUFBQSxRQUNKO0FBQUEsUUFDQTtBQUFBLE1BQ0YsSUFBSTtBQUNKLFVBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTO0FBQzdCO0FBQUEsTUFDRjtBQUNBLFdBQUssZUFBZTtBQUNwQixXQUFLLGtCQUFrQjtBQUN2QixjQUFRLEtBQUs7QUFDYixjQUFRLFFBQVE7QUFDaEIsVUFBSSxLQUFLLHlCQUF5QjtBQUNoQyxhQUFLLHdCQUF3QjtBQUM3QixhQUFLLDBCQUEwQjtBQUFBLE1BQ2pDO0FBQ0EsV0FBSyxvQkFBb0I7QUFBQSxJQUMzQjtBQUFBO0FBQUEsRUFDQSxTQUFTO0FBQ1AsV0FBTyxFQUFFLE1BQU07QUFBQSxNQUNiLEtBQUs7QUFBQSxNQUNMLGVBQWUsUUFBTSxLQUFLLGNBQWMsRUFBRTtBQUFBLE1BQzFDLFNBQVMsTUFBTSxLQUFLLFFBQVE7QUFBQSxJQUM5QixHQUFHLEVBQUUsU0FBUztBQUFBLE1BQ1osS0FBSztBQUFBLE1BQ0wsZUFBZTtBQUFBLE1BQ2YsVUFBVTtBQUFBLE1BQ1YsV0FBVztBQUFBLE1BQ1gsTUFBTTtBQUFBLE1BQ04sV0FBVyxRQUFNO0FBQ2YsWUFBSTtBQVdKLFlBQUksR0FBRyxRQUFRLFNBQVM7QUFDdEIsV0FBQyxLQUFLLEtBQUssYUFBYSxRQUFRLE9BQU8sU0FBUyxTQUFTLEdBQUcsS0FBSztBQUFBLFFBQ25FO0FBQUEsTUFDRjtBQUFBLE1BQ0EsS0FBSyxRQUFNLEtBQUssVUFBVTtBQUFBLE1BQzFCLFNBQVMsTUFBTSxLQUFLLGNBQWM7QUFBQSxNQUNsQyxRQUFRLE1BQU0sS0FBSyxjQUFjO0FBQUEsSUFDbkMsQ0FBQyxHQUFHLEVBQUUsT0FBTztBQUFBLE1BQ1gsS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLElBQ1QsQ0FBQyxHQUFHLEVBQUUsT0FBTztBQUFBLE1BQ1gsS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLElBQ1QsQ0FBQyxHQUFHLEVBQUUsT0FBTztBQUFBLE1BQ1gsS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLE1BQ1AsS0FBSyxRQUFNLEtBQUssY0FBYztBQUFBLElBQ2hDLENBQUMsR0FBRyxFQUFFLFFBQVE7QUFBQSxNQUNaLEtBQUs7QUFBQSxJQUNQLENBQUMsQ0FBQztBQUFBLEVBQ0o7QUFBQSxFQUNBLElBQUksS0FBSztBQUNQLFdBQU8sV0FBVyxJQUFJO0FBQUEsRUFDeEI7QUFDRjtBQUNBLE9BQU8sUUFBUTtBQUFBLEVBQ2IsS0FBSztBQUFBLEVBQ0wsSUFBSTtBQUNOOyIsIm5hbWVzIjpbXSwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==
