import {
  isRTL
} from "./chunk-4LZLDCVM.js";
import {
  createColorClasses
} from "./chunk-5VP4V3BN.js";
import {
  getIonMode
} from "./chunk-TXLH22R2.js";
import {
  inheritAriaAttributes
} from "./chunk-RZR7LWTQ.js";
import {
  Fragment,
  Host,
  createEvent,
  getElement,
  h,
  printIonWarning,
  registerInstance
} from "./chunk-BFPTXCSH.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// node_modules/@ionic/core/dist/esm/ion-input-otp.entry.js
var inputOtpIosCss = ".sc-ion-input-otp-ios-h{--margin-top:0;--margin-end:0;--margin-bottom:0;--margin-start:0;--padding-top:16px;--padding-end:0;--padding-bottom:16px;--padding-start:0;--color:initial;--min-width:40px;--separator-width:8px;--separator-height:var(--separator-width);--separator-border-radius:999px;--separator-color:var(--ion-color-step-150, var(--ion-background-color-step-150, #d9d9d9));--highlight-color-focused:var(--ion-color-primary, #0054e9);--highlight-color-valid:var(--ion-color-success, #2dd55b);--highlight-color-invalid:var(--ion-color-danger, #c5000f);--highlight-color:var(--highlight-color-focused);display:block;position:relative;font-size:0.875rem}.input-otp-group.sc-ion-input-otp-ios{-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.native-wrapper.sc-ion-input-otp-ios{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;min-width:var(--min-width)}.native-input.sc-ion-input-otp-ios{border-radius:var(--border-radius);width:var(--width);min-width:inherit;height:var(--height);border-width:var(--border-width);border-style:solid;border-color:var(--border-color);background:var(--background);color:var(--color);font-size:inherit;text-align:center;-webkit-appearance:none;-moz-appearance:none;appearance:none}.has-focus.sc-ion-input-otp-ios-h .native-input.sc-ion-input-otp-ios{caret-color:var(--highlight-color)}.input-otp-description.sc-ion-input-otp-ios{color:var(--ion-color-step-700, var(--ion-text-color-step-300, #4d4d4d));font-size:0.75rem;line-height:1.25rem;text-align:center}.input-otp-description-hidden.sc-ion-input-otp-ios{display:none}.input-otp-separator.sc-ion-input-otp-ios{border-radius:var(--separator-border-radius);-ms-flex-negative:0;flex-shrink:0;width:var(--separator-width);height:var(--separator-height);background:var(--separator-color)}.input-otp-size-small.sc-ion-input-otp-ios-h{--width:40px;--height:40px}.input-otp-size-small.sc-ion-input-otp-ios-h .input-otp-group.sc-ion-input-otp-ios{gap:8px}.input-otp-size-medium.sc-ion-input-otp-ios-h{--width:48px;--height:48px}.input-otp-size-large.sc-ion-input-otp-ios-h{--width:56px;--height:56px}.input-otp-size-medium.sc-ion-input-otp-ios-h .input-otp-group.sc-ion-input-otp-ios,.input-otp-size-large.sc-ion-input-otp-ios-h .input-otp-group.sc-ion-input-otp-ios{gap:12px}.input-otp-shape-round.sc-ion-input-otp-ios-h{--border-radius:16px}.input-otp-shape-soft.sc-ion-input-otp-ios-h{--border-radius:8px}.input-otp-shape-rectangular.sc-ion-input-otp-ios-h{--border-radius:0}.input-otp-fill-outline.sc-ion-input-otp-ios-h{--background:none}.input-otp-fill-solid.sc-ion-input-otp-ios-h{--border-color:var(--ion-color-step-50, var(--ion-background-color-step-50, #f2f2f2));--background:var(--ion-color-step-50, var(--ion-background-color-step-50, #f2f2f2))}.input-otp-disabled.sc-ion-input-otp-ios-h{--color:var(--ion-color-step-350, var(--ion-text-color-step-650, #a6a6a6))}.input-otp-fill-outline.input-otp-disabled.sc-ion-input-otp-ios-h{--background:var(--ion-color-step-50, var(--ion-background-color-step-50, #f2f2f2));--border-color:var(--ion-color-step-100, var(--ion-background-color-step-100, #e6e6e6))}.input-otp-disabled.sc-ion-input-otp-ios-h,.input-otp-disabled.sc-ion-input-otp-ios-h .native-input.sc-ion-input-otp-ios:disabled{cursor:not-allowed}.has-focus.sc-ion-input-otp-ios-h .native-input.sc-ion-input-otp-ios:focus{--border-color:var(--highlight-color);outline:none}.input-otp-fill-outline.input-otp-readonly.sc-ion-input-otp-ios-h{--background:var(--ion-color-step-50, var(--ion-background-color-step-50, #f2f2f2))}.input-otp-fill-solid.input-otp-disabled.sc-ion-input-otp-ios-h,.input-otp-fill-solid.input-otp-readonly.sc-ion-input-otp-ios-h{--border-color:var(--ion-color-step-100, var(--ion-background-color-step-100, #e6e6e6));--background:var(--ion-color-step-100, var(--ion-background-color-step-100, #e6e6e6))}.ion-touched.ion-invalid.sc-ion-input-otp-ios-h{--highlight-color:var(--highlight-color-invalid)}.ion-valid.sc-ion-input-otp-ios-h{--highlight-color:var(--highlight-color-valid)}.has-focus.ion-valid.sc-ion-input-otp-ios-h,.ion-touched.ion-invalid.sc-ion-input-otp-ios-h{--border-color:var(--highlight-color)}.ion-color.sc-ion-input-otp-ios-h{--highlight-color-focused:var(--ion-color-base)}.input-otp-fill-outline.ion-color.sc-ion-input-otp-ios-h .native-input.sc-ion-input-otp-ios,.input-otp-fill-solid.ion-color.sc-ion-input-otp-ios-h .native-input.sc-ion-input-otp-ios:focus{border-color:rgba(var(--ion-color-base-rgb), 0.6)}.input-otp-fill-outline.ion-color.ion-invalid.sc-ion-input-otp-ios-h .native-input.sc-ion-input-otp-ios,.input-otp-fill-solid.ion-color.ion-invalid.sc-ion-input-otp-ios-h .native-input.sc-ion-input-otp-ios,.input-otp-fill-outline.ion-color.has-focus.ion-invalid.sc-ion-input-otp-ios-h .native-input.sc-ion-input-otp-ios,.input-otp-fill-solid.ion-color.has-focus.ion-invalid.sc-ion-input-otp-ios-h .native-input.sc-ion-input-otp-ios{border-color:var(--ion-color-danger, #c5000f)}.input-otp-fill-outline.ion-color.ion-valid.sc-ion-input-otp-ios-h .native-input.sc-ion-input-otp-ios,.input-otp-fill-solid.ion-color.ion-valid.sc-ion-input-otp-ios-h .native-input.sc-ion-input-otp-ios,.input-otp-fill-outline.ion-color.has-focus.ion-valid.sc-ion-input-otp-ios-h .native-input.sc-ion-input-otp-ios,.input-otp-fill-solid.ion-color.has-focus.ion-valid.sc-ion-input-otp-ios-h .native-input.sc-ion-input-otp-ios{border-color:var(--ion-color-success, #2dd55b)}.input-otp-fill-outline.input-otp-disabled.ion-color.sc-ion-input-otp-ios-h .native-input.sc-ion-input-otp-ios{border-color:rgba(var(--ion-color-base-rgb), 0.3)}.sc-ion-input-otp-ios-h{--border-width:0.55px}.has-focus.sc-ion-input-otp-ios-h .native-input.sc-ion-input-otp-ios:focus{--border-width:1px}.input-otp-fill-outline.sc-ion-input-otp-ios-h{--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, var(--ion-background-color-step-250, #c8c7cc))))}";
var inputOtpMdCss = ".sc-ion-input-otp-md-h{--margin-top:0;--margin-end:0;--margin-bottom:0;--margin-start:0;--padding-top:16px;--padding-end:0;--padding-bottom:16px;--padding-start:0;--color:initial;--min-width:40px;--separator-width:8px;--separator-height:var(--separator-width);--separator-border-radius:999px;--separator-color:var(--ion-color-step-150, var(--ion-background-color-step-150, #d9d9d9));--highlight-color-focused:var(--ion-color-primary, #0054e9);--highlight-color-valid:var(--ion-color-success, #2dd55b);--highlight-color-invalid:var(--ion-color-danger, #c5000f);--highlight-color:var(--highlight-color-focused);display:block;position:relative;font-size:0.875rem}.input-otp-group.sc-ion-input-otp-md{-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.native-wrapper.sc-ion-input-otp-md{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;min-width:var(--min-width)}.native-input.sc-ion-input-otp-md{border-radius:var(--border-radius);width:var(--width);min-width:inherit;height:var(--height);border-width:var(--border-width);border-style:solid;border-color:var(--border-color);background:var(--background);color:var(--color);font-size:inherit;text-align:center;-webkit-appearance:none;-moz-appearance:none;appearance:none}.has-focus.sc-ion-input-otp-md-h .native-input.sc-ion-input-otp-md{caret-color:var(--highlight-color)}.input-otp-description.sc-ion-input-otp-md{color:var(--ion-color-step-700, var(--ion-text-color-step-300, #4d4d4d));font-size:0.75rem;line-height:1.25rem;text-align:center}.input-otp-description-hidden.sc-ion-input-otp-md{display:none}.input-otp-separator.sc-ion-input-otp-md{border-radius:var(--separator-border-radius);-ms-flex-negative:0;flex-shrink:0;width:var(--separator-width);height:var(--separator-height);background:var(--separator-color)}.input-otp-size-small.sc-ion-input-otp-md-h{--width:40px;--height:40px}.input-otp-size-small.sc-ion-input-otp-md-h .input-otp-group.sc-ion-input-otp-md{gap:8px}.input-otp-size-medium.sc-ion-input-otp-md-h{--width:48px;--height:48px}.input-otp-size-large.sc-ion-input-otp-md-h{--width:56px;--height:56px}.input-otp-size-medium.sc-ion-input-otp-md-h .input-otp-group.sc-ion-input-otp-md,.input-otp-size-large.sc-ion-input-otp-md-h .input-otp-group.sc-ion-input-otp-md{gap:12px}.input-otp-shape-round.sc-ion-input-otp-md-h{--border-radius:16px}.input-otp-shape-soft.sc-ion-input-otp-md-h{--border-radius:8px}.input-otp-shape-rectangular.sc-ion-input-otp-md-h{--border-radius:0}.input-otp-fill-outline.sc-ion-input-otp-md-h{--background:none}.input-otp-fill-solid.sc-ion-input-otp-md-h{--border-color:var(--ion-color-step-50, var(--ion-background-color-step-50, #f2f2f2));--background:var(--ion-color-step-50, var(--ion-background-color-step-50, #f2f2f2))}.input-otp-disabled.sc-ion-input-otp-md-h{--color:var(--ion-color-step-350, var(--ion-text-color-step-650, #a6a6a6))}.input-otp-fill-outline.input-otp-disabled.sc-ion-input-otp-md-h{--background:var(--ion-color-step-50, var(--ion-background-color-step-50, #f2f2f2));--border-color:var(--ion-color-step-100, var(--ion-background-color-step-100, #e6e6e6))}.input-otp-disabled.sc-ion-input-otp-md-h,.input-otp-disabled.sc-ion-input-otp-md-h .native-input.sc-ion-input-otp-md:disabled{cursor:not-allowed}.has-focus.sc-ion-input-otp-md-h .native-input.sc-ion-input-otp-md:focus{--border-color:var(--highlight-color);outline:none}.input-otp-fill-outline.input-otp-readonly.sc-ion-input-otp-md-h{--background:var(--ion-color-step-50, var(--ion-background-color-step-50, #f2f2f2))}.input-otp-fill-solid.input-otp-disabled.sc-ion-input-otp-md-h,.input-otp-fill-solid.input-otp-readonly.sc-ion-input-otp-md-h{--border-color:var(--ion-color-step-100, var(--ion-background-color-step-100, #e6e6e6));--background:var(--ion-color-step-100, var(--ion-background-color-step-100, #e6e6e6))}.ion-touched.ion-invalid.sc-ion-input-otp-md-h{--highlight-color:var(--highlight-color-invalid)}.ion-valid.sc-ion-input-otp-md-h{--highlight-color:var(--highlight-color-valid)}.has-focus.ion-valid.sc-ion-input-otp-md-h,.ion-touched.ion-invalid.sc-ion-input-otp-md-h{--border-color:var(--highlight-color)}.ion-color.sc-ion-input-otp-md-h{--highlight-color-focused:var(--ion-color-base)}.input-otp-fill-outline.ion-color.sc-ion-input-otp-md-h .native-input.sc-ion-input-otp-md,.input-otp-fill-solid.ion-color.sc-ion-input-otp-md-h .native-input.sc-ion-input-otp-md:focus{border-color:rgba(var(--ion-color-base-rgb), 0.6)}.input-otp-fill-outline.ion-color.ion-invalid.sc-ion-input-otp-md-h .native-input.sc-ion-input-otp-md,.input-otp-fill-solid.ion-color.ion-invalid.sc-ion-input-otp-md-h .native-input.sc-ion-input-otp-md,.input-otp-fill-outline.ion-color.has-focus.ion-invalid.sc-ion-input-otp-md-h .native-input.sc-ion-input-otp-md,.input-otp-fill-solid.ion-color.has-focus.ion-invalid.sc-ion-input-otp-md-h .native-input.sc-ion-input-otp-md{border-color:var(--ion-color-danger, #c5000f)}.input-otp-fill-outline.ion-color.ion-valid.sc-ion-input-otp-md-h .native-input.sc-ion-input-otp-md,.input-otp-fill-solid.ion-color.ion-valid.sc-ion-input-otp-md-h .native-input.sc-ion-input-otp-md,.input-otp-fill-outline.ion-color.has-focus.ion-valid.sc-ion-input-otp-md-h .native-input.sc-ion-input-otp-md,.input-otp-fill-solid.ion-color.has-focus.ion-valid.sc-ion-input-otp-md-h .native-input.sc-ion-input-otp-md{border-color:var(--ion-color-success, #2dd55b)}.input-otp-fill-outline.input-otp-disabled.ion-color.sc-ion-input-otp-md-h .native-input.sc-ion-input-otp-md{border-color:rgba(var(--ion-color-base-rgb), 0.3)}.sc-ion-input-otp-md-h{--border-width:1px}.has-focus.sc-ion-input-otp-md-h .native-input.sc-ion-input-otp-md:focus{--border-width:2px}.input-otp-fill-outline.sc-ion-input-otp-md-h{--border-color:var(--ion-color-step-300, var(--ion-background-color-step-300, #b3b3b3))}";
var InputOTP = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionInput = createEvent(this, "ionInput", 7);
    this.ionChange = createEvent(this, "ionChange", 7);
    this.ionComplete = createEvent(this, "ionComplete", 7);
    this.ionBlur = createEvent(this, "ionBlur", 7);
    this.ionFocus = createEvent(this, "ionFocus", 7);
    this.inheritedAttributes = {};
    this.inputRefs = [];
    this.inputId = `ion-input-otp-${inputIds++}`;
    this.parsedSeparators = [];
    this.isKeyboardNavigation = false;
    this.inputValues = [];
    this.hasFocus = false;
    this.previousInputValues = [];
    this.autocapitalize = "off";
    this.disabled = false;
    this.fill = "outline";
    this.length = 4;
    this.readonly = false;
    this.shape = "round";
    this.size = "medium";
    this.type = "number";
    this.value = "";
    this.onFocus = (index) => (event) => {
      var _a;
      const {
        inputRefs
      } = this;
      if (!this.hasFocus) {
        this.ionFocus.emit(event);
        this.focusedValue = this.value;
      }
      this.hasFocus = true;
      let finalIndex = index;
      if (!this.isKeyboardNavigation) {
        const targetIndex = this.inputValues[index] ? index : this.getFirstEmptyIndex();
        finalIndex = targetIndex === -1 ? this.length - 1 : targetIndex;
        (_a = this.inputRefs[finalIndex]) === null || _a === void 0 ? void 0 : _a.focus();
      }
      inputRefs.forEach((input, i) => {
        input.tabIndex = i === finalIndex ? 0 : -1;
      });
      this.isKeyboardNavigation = false;
    };
    this.onBlur = (event) => {
      const {
        inputRefs
      } = this;
      const relatedTarget = event.relatedTarget;
      const isInternalFocus = relatedTarget != null && inputRefs.includes(relatedTarget);
      if (!isInternalFocus) {
        this.hasFocus = false;
        this.updateTabIndexes();
        this.ionBlur.emit(event);
        if (this.focusedValue !== this.value) {
          this.emitIonChange(event);
        }
      }
    };
    this.onKeyDown = (index) => (event) => {
      const {
        length
      } = this;
      const rtl = isRTL(this.el);
      const input = event.target;
      const metaShortcuts = ["a", "c", "v", "x", "r", "z", "y"];
      const isTextSelection = input.selectionStart !== input.selectionEnd;
      if (isTextSelection || (event.metaKey || event.ctrlKey) && metaShortcuts.includes(event.key.toLowerCase())) {
        return;
      }
      if (event.key === "Backspace") {
        if (this.inputValues[index]) {
          for (let i = index; i < length - 1; i++) {
            this.inputValues[i] = this.inputValues[i + 1];
          }
          this.inputValues[length - 1] = "";
          for (let i = 0; i < length; i++) {
            this.inputRefs[i].value = this.inputValues[i] || "";
          }
          this.updateValue(event);
          event.preventDefault();
        } else if (!this.inputValues[index] && index > 0) {
          this.focusPrevious(index);
        }
      } else if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        this.isKeyboardNavigation = true;
        event.preventDefault();
        const isLeft = event.key === "ArrowLeft";
        const shouldMoveNext = isLeft && rtl || !isLeft && !rtl;
        if (shouldMoveNext) {
          if (this.inputValues[index] && index < length - 1) {
            this.focusNext(index);
          }
        } else {
          this.focusPrevious(index);
        }
      } else if (event.key === "Tab") {
        this.isKeyboardNavigation = true;
        return;
      }
    };
    this.onInput = (index) => (event) => {
      var _a, _b;
      const {
        length,
        validKeyPattern
      } = this;
      const input = event.target;
      const value = input.value;
      const previousValue = this.previousInputValues[index] || "";
      const isAutofill = value.length - previousValue.length > 1;
      if (isAutofill) {
        const validChars = value.split("").filter((char) => validKeyPattern.test(char)).slice(0, length);
        if (validChars.length === 0) {
          requestAnimationFrame(() => {
            this.inputRefs.forEach((input2) => {
              input2.value = "";
            });
          });
        }
        for (let i = 0; i < length; i++) {
          this.inputValues[i] = validChars[i] || "";
          this.inputRefs[i].value = validChars[i] || "";
        }
        this.updateValue(event);
        setTimeout(() => {
          var _a2;
          const nextIndex = validChars.length < length ? validChars.length : length - 1;
          (_a2 = this.inputRefs[nextIndex]) === null || _a2 === void 0 ? void 0 : _a2.focus();
        }, 20);
        this.previousInputValues = [...this.inputValues];
        return;
      }
      if (value.length > 0 && !validKeyPattern.test(value[value.length - 1])) {
        input.value = this.inputValues[index] || "";
        this.previousInputValues = [...this.inputValues];
        return;
      }
      const isAllSelected = input.selectionStart === 0 && input.selectionEnd === value.length;
      const isEmpty = !this.inputValues[index];
      if (isAllSelected || isEmpty) {
        this.inputValues[index] = value;
        input.value = value;
        this.updateValue(event);
        this.focusNext(index);
        this.previousInputValues = [...this.inputValues];
        return;
      }
      const hasAvailableBoxAtEnd = this.inputValues[this.inputValues.length - 1] === "";
      if (this.inputValues[index] && hasAvailableBoxAtEnd && value.length === 2) {
        let newChar2 = event.data;
        if (!newChar2) {
          newChar2 = value.split("").find((c, i) => c !== previousValue[i]) || value[value.length - 1];
        }
        if (!validKeyPattern.test(newChar2)) {
          input.value = this.inputValues[index] || "";
          this.previousInputValues = [...this.inputValues];
          return;
        }
        for (let i = this.inputValues.length - 1; i > index; i--) {
          this.inputValues[i] = this.inputValues[i - 1];
          this.inputRefs[i].value = this.inputValues[i] || "";
        }
        this.inputValues[index] = newChar2;
        this.inputRefs[index].value = newChar2;
        this.updateValue(event);
        this.previousInputValues = [...this.inputValues];
        return;
      }
      const cursorPos = (_a = input.selectionStart) !== null && _a !== void 0 ? _a : value.length;
      const newCharIndex = cursorPos - 1;
      const newChar = (_b = value[newCharIndex]) !== null && _b !== void 0 ? _b : value[0];
      if (!validKeyPattern.test(newChar)) {
        input.value = this.inputValues[index] || "";
        this.previousInputValues = [...this.inputValues];
        return;
      }
      this.inputValues[index] = newChar;
      input.value = newChar;
      this.updateValue(event);
      this.previousInputValues = [...this.inputValues];
    };
    this.onPaste = (event) => {
      var _a, _b;
      const {
        inputRefs,
        length,
        validKeyPattern
      } = this;
      event.preventDefault();
      const pastedText = (_a = event.clipboardData) === null || _a === void 0 ? void 0 : _a.getData("text");
      if (!pastedText) {
        this.emitIonInput(event);
        return;
      }
      const validChars = pastedText.split("").filter((char) => validKeyPattern.test(char)).slice(0, length);
      validChars.forEach((char, index) => {
        if (index < length) {
          this.inputRefs[index].value = char;
          this.inputValues[index] = char;
        }
      });
      this.value = validChars.join("");
      this.updateValue(event);
      const nextEmptyIndex = validChars.length < length ? validChars.length : length - 1;
      (_b = inputRefs[nextEmptyIndex]) === null || _b === void 0 ? void 0 : _b.focus();
    };
  }
  /**
   * Sets focus to an input box.
   * @param index - The index of the input box to focus (0-based).
   * If provided and the input box has a value, the input box at that index will be focused.
   * Otherwise, the first empty input box or the last input if all are filled will be focused.
   */
  setFocus(index) {
    return __async(this, null, function* () {
      var _a, _b;
      if (typeof index === "number") {
        const validIndex = Math.max(0, Math.min(index, this.length - 1));
        (_a = this.inputRefs[validIndex]) === null || _a === void 0 ? void 0 : _a.focus();
      } else {
        const tabbableIndex = this.getTabbableIndex();
        (_b = this.inputRefs[tabbableIndex]) === null || _b === void 0 ? void 0 : _b.focus();
      }
    });
  }
  valueChanged() {
    this.initializeValues();
    this.updateTabIndexes();
  }
  /**
   * Processes the separators prop into an array of numbers.
   *
   * If the separators prop is not provided, returns an empty array.
   * If the separators prop is 'all', returns an array of all valid positions (1 to length-1).
   * If the separators prop is an array, returns it as is.
   * If the separators prop is a string, splits it by commas and parses each part as a number.
   *
   * If the separators are greater than the input length, it will warn and ignore the separators.
   */
  processSeparators() {
    const {
      separators,
      length
    } = this;
    if (separators === void 0) {
      this.parsedSeparators = [];
      return;
    }
    if (typeof separators === "string" && separators !== "all") {
      const isValidFormat = /^(\d+)(,\d+)*$/.test(separators);
      if (!isValidFormat) {
        printIonWarning(`[ion-input-otp] - Invalid separators format. Expected a comma-separated list of numbers, an array of numbers, or "all". Received: ${separators}`, this.el);
        this.parsedSeparators = [];
        return;
      }
    }
    let separatorValues;
    if (separators === "all") {
      separatorValues = Array.from({
        length: length - 1
      }, (_, i) => i + 1);
    } else if (Array.isArray(separators)) {
      separatorValues = separators;
    } else {
      separatorValues = separators.split(",").map((pos) => parseInt(pos, 10)).filter((pos) => !isNaN(pos));
    }
    const duplicates = separatorValues.filter((pos, index) => separatorValues.indexOf(pos) !== index);
    if (duplicates.length > 0) {
      printIonWarning(`[ion-input-otp] - Duplicate separator positions are not allowed. Received: ${separators}`, this.el);
    }
    const invalidSeparators = separatorValues.filter((pos) => pos > length);
    if (invalidSeparators.length > 0) {
      printIonWarning(`[ion-input-otp] - The following separator positions are greater than the input length (${length}): ${invalidSeparators.join(", ")}. These separators will be ignored.`, this.el);
    }
    this.parsedSeparators = separatorValues.filter((pos) => pos <= length);
  }
  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
    this.processSeparators();
    this.initializeValues();
  }
  componentDidLoad() {
    this.updateTabIndexes();
  }
  /**
   * Get the regex pattern for allowed characters.
   * If a pattern is provided, use it to create a regex pattern
   * Otherwise, use the default regex pattern based on type
   */
  get validKeyPattern() {
    return new RegExp(`^${this.getPattern()}$`, "u");
  }
  /**
   * Gets the string pattern to pass to the input element
   * and use in the regex for allowed characters.
   */
  getPattern() {
    const {
      pattern,
      type
    } = this;
    if (pattern) {
      return pattern;
    }
    return type === "number" ? "[\\p{N}]" : "[\\p{L}\\p{N}]";
  }
  /**
   * Get the default value for inputmode.
   * If inputmode is provided, use it.
   * Otherwise, use the default inputmode based on type
   */
  getInputmode() {
    const {
      inputmode
    } = this;
    if (inputmode) {
      return inputmode;
    }
    if (this.type == "number") {
      return "numeric";
    } else {
      return "text";
    }
  }
  /**
   * Initializes the input values array based on the current value prop.
   * This splits the value into individual characters and validates them against
   * the allowed pattern. The values are then used as the values in the native
   * input boxes and the value of the input group is updated.
   */
  initializeValues() {
    this.inputValues = Array(this.length).fill("");
    if (this.value == null || String(this.value).length === 0) {
      return;
    }
    const chars = String(this.value).split("").slice(0, this.length);
    chars.forEach((char, index) => {
      if (this.validKeyPattern.test(char)) {
        this.inputValues[index] = char;
      }
    });
    this.value = this.inputValues.join("");
    this.previousInputValues = [...this.inputValues];
  }
  /**
   * Updates the value of the input group.
   * This updates the value of the input group and emits an `ionChange` event.
   * If all of the input boxes are filled, it emits an `ionComplete` event.
   */
  updateValue(event) {
    const {
      inputValues,
      length
    } = this;
    const newValue = inputValues.join("");
    this.value = newValue;
    this.emitIonInput(event);
    if (newValue.length === length) {
      this.ionComplete.emit({
        value: newValue
      });
    }
  }
  /**
   * Emits an `ionChange` event.
   * This API should be called for user committed changes.
   * This API should not be used for external value changes.
   */
  emitIonChange(event) {
    const {
      value
    } = this;
    const newValue = value == null ? value : value.toString();
    this.ionChange.emit({
      value: newValue,
      event
    });
  }
  /**
   * Emits an `ionInput` event.
   * This is used to emit the input value when the user types,
   * backspaces, or pastes.
   */
  emitIonInput(event) {
    const {
      value
    } = this;
    const newValue = value == null ? value : value.toString();
    this.ionInput.emit({
      value: newValue,
      event
    });
  }
  /**
   * Focuses the next input box.
   */
  focusNext(currentIndex) {
    var _a;
    const {
      inputRefs,
      length
    } = this;
    if (currentIndex < length - 1) {
      (_a = inputRefs[currentIndex + 1]) === null || _a === void 0 ? void 0 : _a.focus();
    }
  }
  /**
   * Focuses the previous input box.
   */
  focusPrevious(currentIndex) {
    var _a;
    const {
      inputRefs
    } = this;
    if (currentIndex > 0) {
      (_a = inputRefs[currentIndex - 1]) === null || _a === void 0 ? void 0 : _a.focus();
    }
  }
  /**
   * Searches through the input values and returns the index
   * of the first empty input.
   * Returns -1 if all inputs are filled.
   */
  getFirstEmptyIndex() {
    var _a;
    const {
      inputValues,
      length
    } = this;
    const values = Array.from({
      length
    }, (_, i) => inputValues[i] || "");
    return (_a = values.findIndex((value) => !value || value === "")) !== null && _a !== void 0 ? _a : -1;
  }
  /**
   * Returns the index of the input that should be tabbed to.
   * If all inputs are filled, returns the last input's index.
   * Otherwise, returns the index of the first empty input.
   */
  getTabbableIndex() {
    const {
      length
    } = this;
    const firstEmptyIndex = this.getFirstEmptyIndex();
    return firstEmptyIndex === -1 ? length - 1 : firstEmptyIndex;
  }
  /**
   * Updates the tabIndexes for the input boxes.
   * This is used to ensure that the correct input is
   * focused when the user navigates using the tab key.
   */
  updateTabIndexes() {
    const {
      inputRefs,
      inputValues,
      length
    } = this;
    let firstEmptyIndex = -1;
    for (let i = 0; i < length; i++) {
      if (!inputValues[i] || inputValues[i] === "") {
        firstEmptyIndex = i;
        break;
      }
    }
    inputRefs.forEach((input, index) => {
      const shouldBeTabbable = firstEmptyIndex === -1 ? index === length - 1 : firstEmptyIndex === index;
      input.tabIndex = shouldBeTabbable ? 0 : -1;
      const isEmpty = !inputValues[index] || inputValues[index] === "";
      input.setAttribute("aria-hidden", isEmpty && !shouldBeTabbable ? "true" : "false");
    });
  }
  /**
   * Determines if a separator should be shown for a given index by
   * checking if the index is included in the parsed separators array.
   */
  showSeparator(index) {
    const {
      length
    } = this;
    return this.parsedSeparators.includes(index + 1) && index < length - 1;
  }
  render() {
    var _a, _b;
    const {
      autocapitalize,
      color,
      disabled,
      el,
      fill,
      hasFocus,
      inheritedAttributes,
      inputId,
      inputRefs,
      inputValues,
      length,
      readonly,
      shape,
      size
    } = this;
    const mode = getIonMode(this);
    const inputmode = this.getInputmode();
    const tabbableIndex = this.getTabbableIndex();
    const pattern = this.getPattern();
    const hasDescription = ((_b = (_a = el.querySelector(".input-otp-description")) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.trim()) !== "";
    return h(Host, {
      key: "f15a29fb17b681ef55885ca36d3d5f899cbaca83",
      class: createColorClasses(color, {
        [mode]: true,
        "has-focus": hasFocus,
        [`input-otp-size-${size}`]: true,
        [`input-otp-shape-${shape}`]: true,
        [`input-otp-fill-${fill}`]: true,
        "input-otp-disabled": disabled,
        "input-otp-readonly": readonly
      })
    }, h("div", Object.assign({
      key: "d7e1d4edd8aafcf2ed4313301287282e90fc7e82",
      role: "group",
      "aria-label": "One-time password input",
      class: "input-otp-group"
    }, inheritedAttributes), Array.from({
      length
    }).map((_, index) => h(Fragment, null, h("div", {
      class: "native-wrapper"
    }, h("input", {
      class: "native-input",
      id: `${inputId}-${index}`,
      "aria-label": `Input ${index + 1} of ${length}`,
      type: "text",
      autoCapitalize: autocapitalize,
      inputmode,
      pattern,
      disabled,
      readOnly: readonly,
      tabIndex: index === tabbableIndex ? 0 : -1,
      value: inputValues[index] || "",
      autocomplete: "one-time-code",
      ref: (el2) => inputRefs[index] = el2,
      onInput: this.onInput(index),
      onBlur: this.onBlur,
      onFocus: this.onFocus(index),
      onKeyDown: this.onKeyDown(index),
      onPaste: this.onPaste
    })), this.showSeparator(index) && h("div", {
      class: "input-otp-separator"
    })))), h("div", {
      key: "3724a3159d02860971879a906092f9965f5a7c47",
      class: {
        "input-otp-description": true,
        "input-otp-description-hidden": !hasDescription
      }
    }, h("slot", {
      key: "11baa2624926a08274508afe0833d9237a8dc35c"
    })));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "value": ["valueChanged"],
      "separators": ["processSeparators"],
      "length": ["processSeparators"]
    };
  }
};
var inputIds = 0;
InputOTP.style = {
  ios: inputOtpIosCss,
  md: inputOtpMdCss
};
export {
  InputOTP as ion_input_otp
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-input-otp.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24taW5wdXQtb3RwLmVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgY3JlYXRlRXZlbnQsIGYgYXMgcHJpbnRJb25XYXJuaW5nLCBoLCBGIGFzIEZyYWdtZW50LCBkIGFzIEhvc3QsIGcgYXMgZ2V0RWxlbWVudCB9IGZyb20gJy4vaW5kZXgtNER4WTZfZ0cuanMnO1xuaW1wb3J0IHsgaSBhcyBpbmhlcml0QXJpYUF0dHJpYnV0ZXMgfSBmcm9tICcuL2hlbHBlcnMtOEtTUVFHUXkuanMnO1xuaW1wb3J0IHsgaSBhcyBpc1JUTCB9IGZyb20gJy4vZGlyLUM1M2ZlYWdELmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlQ29sb3JDbGFzc2VzIH0gZnJvbSAnLi90aGVtZS1EaVZKeXFsWC5qcyc7XG5pbXBvcnQgeyBiIGFzIGdldElvbk1vZGUgfSBmcm9tICcuL2lvbmljLWdsb2JhbC1DVFN5dWZoRi5qcyc7XG5jb25zdCBpbnB1dE90cElvc0NzcyA9IFwiLnNjLWlvbi1pbnB1dC1vdHAtaW9zLWh7LS1tYXJnaW4tdG9wOjA7LS1tYXJnaW4tZW5kOjA7LS1tYXJnaW4tYm90dG9tOjA7LS1tYXJnaW4tc3RhcnQ6MDstLXBhZGRpbmctdG9wOjE2cHg7LS1wYWRkaW5nLWVuZDowOy0tcGFkZGluZy1ib3R0b206MTZweDstLXBhZGRpbmctc3RhcnQ6MDstLWNvbG9yOmluaXRpYWw7LS1taW4td2lkdGg6NDBweDstLXNlcGFyYXRvci13aWR0aDo4cHg7LS1zZXBhcmF0b3ItaGVpZ2h0OnZhcigtLXNlcGFyYXRvci13aWR0aCk7LS1zZXBhcmF0b3ItYm9yZGVyLXJhZGl1czo5OTlweDstLXNlcGFyYXRvci1jb2xvcjp2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXN0ZXAtMTUwLCAjZDlkOWQ5KSk7LS1oaWdobGlnaHQtY29sb3ItZm9jdXNlZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzAwNTRlOSk7LS1oaWdobGlnaHQtY29sb3ItdmFsaWQ6dmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MsICMyZGQ1NWIpOy0taGlnaGxpZ2h0LWNvbG9yLWludmFsaWQ6dmFyKC0taW9uLWNvbG9yLWRhbmdlciwgI2M1MDAwZik7LS1oaWdobGlnaHQtY29sb3I6dmFyKC0taGlnaGxpZ2h0LWNvbG9yLWZvY3VzZWQpO2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7Zm9udC1zaXplOjAuODc1cmVtfS5pbnB1dC1vdHAtZ3JvdXAuc2MtaW9uLWlucHV0LW90cC1pb3N7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6dmFyKC0tbWFyZ2luLXN0YXJ0KTttYXJnaW4taW5saW5lLXN0YXJ0OnZhcigtLW1hcmdpbi1zdGFydCk7LXdlYmtpdC1tYXJnaW4tZW5kOnZhcigtLW1hcmdpbi1lbmQpO21hcmdpbi1pbmxpbmUtZW5kOnZhcigtLW1hcmdpbi1lbmQpO21hcmdpbi10b3A6dmFyKC0tbWFyZ2luLXRvcCk7bWFyZ2luLWJvdHRvbTp2YXIoLS1tYXJnaW4tYm90dG9tKTstd2Via2l0LXBhZGRpbmctc3RhcnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7cGFkZGluZy1pbmxpbmUtc3RhcnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7LXdlYmtpdC1wYWRkaW5nLWVuZDp2YXIoLS1wYWRkaW5nLWVuZCk7cGFkZGluZy1pbmxpbmUtZW5kOnZhcigtLXBhZGRpbmctZW5kKTtwYWRkaW5nLXRvcDp2YXIoLS1wYWRkaW5nLXRvcCk7cGFkZGluZy1ib3R0b206dmFyKC0tcGFkZGluZy1ib3R0b20pO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn0ubmF0aXZlLXdyYXBwZXIuc2MtaW9uLWlucHV0LW90cC1pb3N7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO21pbi13aWR0aDp2YXIoLS1taW4td2lkdGgpfS5uYXRpdmUtaW5wdXQuc2MtaW9uLWlucHV0LW90cC1pb3N7Ym9yZGVyLXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTt3aWR0aDp2YXIoLS13aWR0aCk7bWluLXdpZHRoOmluaGVyaXQ7aGVpZ2h0OnZhcigtLWhlaWdodCk7Ym9yZGVyLXdpZHRoOnZhcigtLWJvcmRlci13aWR0aCk7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjp2YXIoLS1ib3JkZXItY29sb3IpO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7Y29sb3I6dmFyKC0tY29sb3IpO2ZvbnQtc2l6ZTppbmhlcml0O3RleHQtYWxpZ246Y2VudGVyOy13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lO2FwcGVhcmFuY2U6bm9uZX0uaGFzLWZvY3VzLnNjLWlvbi1pbnB1dC1vdHAtaW9zLWggLm5hdGl2ZS1pbnB1dC5zYy1pb24taW5wdXQtb3RwLWlvc3tjYXJldC1jb2xvcjp2YXIoLS1oaWdobGlnaHQtY29sb3IpfS5pbnB1dC1vdHAtZGVzY3JpcHRpb24uc2MtaW9uLWlucHV0LW90cC1pb3N7Y29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtNzAwLCB2YXIoLS1pb24tdGV4dC1jb2xvci1zdGVwLTMwMCwgIzRkNGQ0ZCkpO2ZvbnQtc2l6ZTowLjc1cmVtO2xpbmUtaGVpZ2h0OjEuMjVyZW07dGV4dC1hbGlnbjpjZW50ZXJ9LmlucHV0LW90cC1kZXNjcmlwdGlvbi1oaWRkZW4uc2MtaW9uLWlucHV0LW90cC1pb3N7ZGlzcGxheTpub25lfS5pbnB1dC1vdHAtc2VwYXJhdG9yLnNjLWlvbi1pbnB1dC1vdHAtaW9ze2JvcmRlci1yYWRpdXM6dmFyKC0tc2VwYXJhdG9yLWJvcmRlci1yYWRpdXMpOy1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MDt3aWR0aDp2YXIoLS1zZXBhcmF0b3Itd2lkdGgpO2hlaWdodDp2YXIoLS1zZXBhcmF0b3ItaGVpZ2h0KTtiYWNrZ3JvdW5kOnZhcigtLXNlcGFyYXRvci1jb2xvcil9LmlucHV0LW90cC1zaXplLXNtYWxsLnNjLWlvbi1pbnB1dC1vdHAtaW9zLWh7LS13aWR0aDo0MHB4Oy0taGVpZ2h0OjQwcHh9LmlucHV0LW90cC1zaXplLXNtYWxsLnNjLWlvbi1pbnB1dC1vdHAtaW9zLWggLmlucHV0LW90cC1ncm91cC5zYy1pb24taW5wdXQtb3RwLWlvc3tnYXA6OHB4fS5pbnB1dC1vdHAtc2l6ZS1tZWRpdW0uc2MtaW9uLWlucHV0LW90cC1pb3MtaHstLXdpZHRoOjQ4cHg7LS1oZWlnaHQ6NDhweH0uaW5wdXQtb3RwLXNpemUtbGFyZ2Uuc2MtaW9uLWlucHV0LW90cC1pb3MtaHstLXdpZHRoOjU2cHg7LS1oZWlnaHQ6NTZweH0uaW5wdXQtb3RwLXNpemUtbWVkaXVtLnNjLWlvbi1pbnB1dC1vdHAtaW9zLWggLmlucHV0LW90cC1ncm91cC5zYy1pb24taW5wdXQtb3RwLWlvcywuaW5wdXQtb3RwLXNpemUtbGFyZ2Uuc2MtaW9uLWlucHV0LW90cC1pb3MtaCAuaW5wdXQtb3RwLWdyb3VwLnNjLWlvbi1pbnB1dC1vdHAtaW9ze2dhcDoxMnB4fS5pbnB1dC1vdHAtc2hhcGUtcm91bmQuc2MtaW9uLWlucHV0LW90cC1pb3MtaHstLWJvcmRlci1yYWRpdXM6MTZweH0uaW5wdXQtb3RwLXNoYXBlLXNvZnQuc2MtaW9uLWlucHV0LW90cC1pb3MtaHstLWJvcmRlci1yYWRpdXM6OHB4fS5pbnB1dC1vdHAtc2hhcGUtcmVjdGFuZ3VsYXIuc2MtaW9uLWlucHV0LW90cC1pb3MtaHstLWJvcmRlci1yYWRpdXM6MH0uaW5wdXQtb3RwLWZpbGwtb3V0bGluZS5zYy1pb24taW5wdXQtb3RwLWlvcy1oey0tYmFja2dyb3VuZDpub25lfS5pbnB1dC1vdHAtZmlsbC1zb2xpZC5zYy1pb24taW5wdXQtb3RwLWlvcy1oey0tYm9yZGVyLWNvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTUwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTUwLCAjZjJmMmYyKSk7LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1zdGVwLTUwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTUwLCAjZjJmMmYyKSl9LmlucHV0LW90cC1kaXNhYmxlZC5zYy1pb24taW5wdXQtb3RwLWlvcy1oey0tY29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtMzUwLCB2YXIoLS1pb24tdGV4dC1jb2xvci1zdGVwLTY1MCwgI2E2YTZhNikpfS5pbnB1dC1vdHAtZmlsbC1vdXRsaW5lLmlucHV0LW90cC1kaXNhYmxlZC5zYy1pb24taW5wdXQtb3RwLWlvcy1oey0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3Itc3RlcC01MCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3Itc3RlcC01MCwgI2YyZjJmMikpOy0tYm9yZGVyLWNvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTEwMCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3Itc3RlcC0xMDAsICNlNmU2ZTYpKX0uaW5wdXQtb3RwLWRpc2FibGVkLnNjLWlvbi1pbnB1dC1vdHAtaW9zLWgsLmlucHV0LW90cC1kaXNhYmxlZC5zYy1pb24taW5wdXQtb3RwLWlvcy1oIC5uYXRpdmUtaW5wdXQuc2MtaW9uLWlucHV0LW90cC1pb3M6ZGlzYWJsZWR7Y3Vyc29yOm5vdC1hbGxvd2VkfS5oYXMtZm9jdXMuc2MtaW9uLWlucHV0LW90cC1pb3MtaCAubmF0aXZlLWlucHV0LnNjLWlvbi1pbnB1dC1vdHAtaW9zOmZvY3Vzey0tYm9yZGVyLWNvbG9yOnZhcigtLWhpZ2hsaWdodC1jb2xvcik7b3V0bGluZTpub25lfS5pbnB1dC1vdHAtZmlsbC1vdXRsaW5lLmlucHV0LW90cC1yZWFkb25seS5zYy1pb24taW5wdXQtb3RwLWlvcy1oey0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3Itc3RlcC01MCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3Itc3RlcC01MCwgI2YyZjJmMikpfS5pbnB1dC1vdHAtZmlsbC1zb2xpZC5pbnB1dC1vdHAtZGlzYWJsZWQuc2MtaW9uLWlucHV0LW90cC1pb3MtaCwuaW5wdXQtb3RwLWZpbGwtc29saWQuaW5wdXQtb3RwLXJlYWRvbmx5LnNjLWlvbi1pbnB1dC1vdHAtaW9zLWh7LS1ib3JkZXItY29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtMTAwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTEwMCwgI2U2ZTZlNikpOy0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3Itc3RlcC0xMDAsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXN0ZXAtMTAwLCAjZTZlNmU2KSl9Lmlvbi10b3VjaGVkLmlvbi1pbnZhbGlkLnNjLWlvbi1pbnB1dC1vdHAtaW9zLWh7LS1oaWdobGlnaHQtY29sb3I6dmFyKC0taGlnaGxpZ2h0LWNvbG9yLWludmFsaWQpfS5pb24tdmFsaWQuc2MtaW9uLWlucHV0LW90cC1pb3MtaHstLWhpZ2hsaWdodC1jb2xvcjp2YXIoLS1oaWdobGlnaHQtY29sb3ItdmFsaWQpfS5oYXMtZm9jdXMuaW9uLXZhbGlkLnNjLWlvbi1pbnB1dC1vdHAtaW9zLWgsLmlvbi10b3VjaGVkLmlvbi1pbnZhbGlkLnNjLWlvbi1pbnB1dC1vdHAtaW9zLWh7LS1ib3JkZXItY29sb3I6dmFyKC0taGlnaGxpZ2h0LWNvbG9yKX0uaW9uLWNvbG9yLnNjLWlvbi1pbnB1dC1vdHAtaW9zLWh7LS1oaWdobGlnaHQtY29sb3ItZm9jdXNlZDp2YXIoLS1pb24tY29sb3ItYmFzZSl9LmlucHV0LW90cC1maWxsLW91dGxpbmUuaW9uLWNvbG9yLnNjLWlvbi1pbnB1dC1vdHAtaW9zLWggLm5hdGl2ZS1pbnB1dC5zYy1pb24taW5wdXQtb3RwLWlvcywuaW5wdXQtb3RwLWZpbGwtc29saWQuaW9uLWNvbG9yLnNjLWlvbi1pbnB1dC1vdHAtaW9zLWggLm5hdGl2ZS1pbnB1dC5zYy1pb24taW5wdXQtb3RwLWlvczpmb2N1c3tib3JkZXItY29sb3I6cmdiYSh2YXIoLS1pb24tY29sb3ItYmFzZS1yZ2IpLCAwLjYpfS5pbnB1dC1vdHAtZmlsbC1vdXRsaW5lLmlvbi1jb2xvci5pb24taW52YWxpZC5zYy1pb24taW5wdXQtb3RwLWlvcy1oIC5uYXRpdmUtaW5wdXQuc2MtaW9uLWlucHV0LW90cC1pb3MsLmlucHV0LW90cC1maWxsLXNvbGlkLmlvbi1jb2xvci5pb24taW52YWxpZC5zYy1pb24taW5wdXQtb3RwLWlvcy1oIC5uYXRpdmUtaW5wdXQuc2MtaW9uLWlucHV0LW90cC1pb3MsLmlucHV0LW90cC1maWxsLW91dGxpbmUuaW9uLWNvbG9yLmhhcy1mb2N1cy5pb24taW52YWxpZC5zYy1pb24taW5wdXQtb3RwLWlvcy1oIC5uYXRpdmUtaW5wdXQuc2MtaW9uLWlucHV0LW90cC1pb3MsLmlucHV0LW90cC1maWxsLXNvbGlkLmlvbi1jb2xvci5oYXMtZm9jdXMuaW9uLWludmFsaWQuc2MtaW9uLWlucHV0LW90cC1pb3MtaCAubmF0aXZlLWlucHV0LnNjLWlvbi1pbnB1dC1vdHAtaW9ze2JvcmRlci1jb2xvcjp2YXIoLS1pb24tY29sb3ItZGFuZ2VyLCAjYzUwMDBmKX0uaW5wdXQtb3RwLWZpbGwtb3V0bGluZS5pb24tY29sb3IuaW9uLXZhbGlkLnNjLWlvbi1pbnB1dC1vdHAtaW9zLWggLm5hdGl2ZS1pbnB1dC5zYy1pb24taW5wdXQtb3RwLWlvcywuaW5wdXQtb3RwLWZpbGwtc29saWQuaW9uLWNvbG9yLmlvbi12YWxpZC5zYy1pb24taW5wdXQtb3RwLWlvcy1oIC5uYXRpdmUtaW5wdXQuc2MtaW9uLWlucHV0LW90cC1pb3MsLmlucHV0LW90cC1maWxsLW91dGxpbmUuaW9uLWNvbG9yLmhhcy1mb2N1cy5pb24tdmFsaWQuc2MtaW9uLWlucHV0LW90cC1pb3MtaCAubmF0aXZlLWlucHV0LnNjLWlvbi1pbnB1dC1vdHAtaW9zLC5pbnB1dC1vdHAtZmlsbC1zb2xpZC5pb24tY29sb3IuaGFzLWZvY3VzLmlvbi12YWxpZC5zYy1pb24taW5wdXQtb3RwLWlvcy1oIC5uYXRpdmUtaW5wdXQuc2MtaW9uLWlucHV0LW90cC1pb3N7Ym9yZGVyLWNvbG9yOnZhcigtLWlvbi1jb2xvci1zdWNjZXNzLCAjMmRkNTViKX0uaW5wdXQtb3RwLWZpbGwtb3V0bGluZS5pbnB1dC1vdHAtZGlzYWJsZWQuaW9uLWNvbG9yLnNjLWlvbi1pbnB1dC1vdHAtaW9zLWggLm5hdGl2ZS1pbnB1dC5zYy1pb24taW5wdXQtb3RwLWlvc3tib3JkZXItY29sb3I6cmdiYSh2YXIoLS1pb24tY29sb3ItYmFzZS1yZ2IpLCAwLjMpfS5zYy1pb24taW5wdXQtb3RwLWlvcy1oey0tYm9yZGVyLXdpZHRoOjAuNTVweH0uaGFzLWZvY3VzLnNjLWlvbi1pbnB1dC1vdHAtaW9zLWggLm5hdGl2ZS1pbnB1dC5zYy1pb24taW5wdXQtb3RwLWlvczpmb2N1c3stLWJvcmRlci13aWR0aDoxcHh9LmlucHV0LW90cC1maWxsLW91dGxpbmUuc2MtaW9uLWlucHV0LW90cC1pb3MtaHstLWJvcmRlci1jb2xvcjp2YXIoLS1pb24taXRlbS1ib3JkZXItY29sb3IsIHZhcigtLWlvbi1ib3JkZXItY29sb3IsIHZhcigtLWlvbi1jb2xvci1zdGVwLTI1MCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3Itc3RlcC0yNTAsICNjOGM3Y2MpKSkpfVwiO1xuY29uc3QgaW5wdXRPdHBNZENzcyA9IFwiLnNjLWlvbi1pbnB1dC1vdHAtbWQtaHstLW1hcmdpbi10b3A6MDstLW1hcmdpbi1lbmQ6MDstLW1hcmdpbi1ib3R0b206MDstLW1hcmdpbi1zdGFydDowOy0tcGFkZGluZy10b3A6MTZweDstLXBhZGRpbmctZW5kOjA7LS1wYWRkaW5nLWJvdHRvbToxNnB4Oy0tcGFkZGluZy1zdGFydDowOy0tY29sb3I6aW5pdGlhbDstLW1pbi13aWR0aDo0MHB4Oy0tc2VwYXJhdG9yLXdpZHRoOjhweDstLXNlcGFyYXRvci1oZWlnaHQ6dmFyKC0tc2VwYXJhdG9yLXdpZHRoKTstLXNlcGFyYXRvci1ib3JkZXItcmFkaXVzOjk5OXB4Oy0tc2VwYXJhdG9yLWNvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3Itc3RlcC0xNTAsICNkOWQ5ZDkpKTstLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMDA1NGU5KTstLWhpZ2hsaWdodC1jb2xvci12YWxpZDp2YXIoLS1pb24tY29sb3Itc3VjY2VzcywgIzJkZDU1Yik7LS1oaWdobGlnaHQtY29sb3ItaW52YWxpZDp2YXIoLS1pb24tY29sb3ItZGFuZ2VyLCAjYzUwMDBmKTstLWhpZ2hsaWdodC1jb2xvcjp2YXIoLS1oaWdobGlnaHQtY29sb3ItZm9jdXNlZCk7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTtmb250LXNpemU6MC44NzVyZW19LmlucHV0LW90cC1ncm91cC5zYy1pb24taW5wdXQtb3RwLW1key13ZWJraXQtbWFyZ2luLXN0YXJ0OnZhcigtLW1hcmdpbi1zdGFydCk7bWFyZ2luLWlubGluZS1zdGFydDp2YXIoLS1tYXJnaW4tc3RhcnQpOy13ZWJraXQtbWFyZ2luLWVuZDp2YXIoLS1tYXJnaW4tZW5kKTttYXJnaW4taW5saW5lLWVuZDp2YXIoLS1tYXJnaW4tZW5kKTttYXJnaW4tdG9wOnZhcigtLW1hcmdpbi10b3ApO21hcmdpbi1ib3R0b206dmFyKC0tbWFyZ2luLWJvdHRvbSk7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OnZhcigtLXBhZGRpbmctc3RhcnQpO3BhZGRpbmctaW5saW5lLXN0YXJ0OnZhcigtLXBhZGRpbmctc3RhcnQpOy13ZWJraXQtcGFkZGluZy1lbmQ6dmFyKC0tcGFkZGluZy1lbmQpO3BhZGRpbmctaW5saW5lLWVuZDp2YXIoLS1wYWRkaW5nLWVuZCk7cGFkZGluZy10b3A6dmFyKC0tcGFkZGluZy10b3ApO3BhZGRpbmctYm90dG9tOnZhcigtLXBhZGRpbmctYm90dG9tKTtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9Lm5hdGl2ZS13cmFwcGVyLnNjLWlvbi1pbnB1dC1vdHAtbWR7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO21pbi13aWR0aDp2YXIoLS1taW4td2lkdGgpfS5uYXRpdmUtaW5wdXQuc2MtaW9uLWlucHV0LW90cC1tZHtib3JkZXItcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO3dpZHRoOnZhcigtLXdpZHRoKTttaW4td2lkdGg6aW5oZXJpdDtoZWlnaHQ6dmFyKC0taGVpZ2h0KTtib3JkZXItd2lkdGg6dmFyKC0tYm9yZGVyLXdpZHRoKTtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWJvcmRlci1jb2xvcik7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTtjb2xvcjp2YXIoLS1jb2xvcik7Zm9udC1zaXplOmluaGVyaXQ7dGV4dC1hbGlnbjpjZW50ZXI7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lfS5oYXMtZm9jdXMuc2MtaW9uLWlucHV0LW90cC1tZC1oIC5uYXRpdmUtaW5wdXQuc2MtaW9uLWlucHV0LW90cC1tZHtjYXJldC1jb2xvcjp2YXIoLS1oaWdobGlnaHQtY29sb3IpfS5pbnB1dC1vdHAtZGVzY3JpcHRpb24uc2MtaW9uLWlucHV0LW90cC1tZHtjb2xvcjp2YXIoLS1pb24tY29sb3Itc3RlcC03MDAsIHZhcigtLWlvbi10ZXh0LWNvbG9yLXN0ZXAtMzAwLCAjNGQ0ZDRkKSk7Zm9udC1zaXplOjAuNzVyZW07bGluZS1oZWlnaHQ6MS4yNXJlbTt0ZXh0LWFsaWduOmNlbnRlcn0uaW5wdXQtb3RwLWRlc2NyaXB0aW9uLWhpZGRlbi5zYy1pb24taW5wdXQtb3RwLW1ke2Rpc3BsYXk6bm9uZX0uaW5wdXQtb3RwLXNlcGFyYXRvci5zYy1pb24taW5wdXQtb3RwLW1ke2JvcmRlci1yYWRpdXM6dmFyKC0tc2VwYXJhdG9yLWJvcmRlci1yYWRpdXMpOy1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MDt3aWR0aDp2YXIoLS1zZXBhcmF0b3Itd2lkdGgpO2hlaWdodDp2YXIoLS1zZXBhcmF0b3ItaGVpZ2h0KTtiYWNrZ3JvdW5kOnZhcigtLXNlcGFyYXRvci1jb2xvcil9LmlucHV0LW90cC1zaXplLXNtYWxsLnNjLWlvbi1pbnB1dC1vdHAtbWQtaHstLXdpZHRoOjQwcHg7LS1oZWlnaHQ6NDBweH0uaW5wdXQtb3RwLXNpemUtc21hbGwuc2MtaW9uLWlucHV0LW90cC1tZC1oIC5pbnB1dC1vdHAtZ3JvdXAuc2MtaW9uLWlucHV0LW90cC1tZHtnYXA6OHB4fS5pbnB1dC1vdHAtc2l6ZS1tZWRpdW0uc2MtaW9uLWlucHV0LW90cC1tZC1oey0td2lkdGg6NDhweDstLWhlaWdodDo0OHB4fS5pbnB1dC1vdHAtc2l6ZS1sYXJnZS5zYy1pb24taW5wdXQtb3RwLW1kLWh7LS13aWR0aDo1NnB4Oy0taGVpZ2h0OjU2cHh9LmlucHV0LW90cC1zaXplLW1lZGl1bS5zYy1pb24taW5wdXQtb3RwLW1kLWggLmlucHV0LW90cC1ncm91cC5zYy1pb24taW5wdXQtb3RwLW1kLC5pbnB1dC1vdHAtc2l6ZS1sYXJnZS5zYy1pb24taW5wdXQtb3RwLW1kLWggLmlucHV0LW90cC1ncm91cC5zYy1pb24taW5wdXQtb3RwLW1ke2dhcDoxMnB4fS5pbnB1dC1vdHAtc2hhcGUtcm91bmQuc2MtaW9uLWlucHV0LW90cC1tZC1oey0tYm9yZGVyLXJhZGl1czoxNnB4fS5pbnB1dC1vdHAtc2hhcGUtc29mdC5zYy1pb24taW5wdXQtb3RwLW1kLWh7LS1ib3JkZXItcmFkaXVzOjhweH0uaW5wdXQtb3RwLXNoYXBlLXJlY3Rhbmd1bGFyLnNjLWlvbi1pbnB1dC1vdHAtbWQtaHstLWJvcmRlci1yYWRpdXM6MH0uaW5wdXQtb3RwLWZpbGwtb3V0bGluZS5zYy1pb24taW5wdXQtb3RwLW1kLWh7LS1iYWNrZ3JvdW5kOm5vbmV9LmlucHV0LW90cC1maWxsLXNvbGlkLnNjLWlvbi1pbnB1dC1vdHAtbWQtaHstLWJvcmRlci1jb2xvcjp2YXIoLS1pb24tY29sb3Itc3RlcC01MCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3Itc3RlcC01MCwgI2YyZjJmMikpOy0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3Itc3RlcC01MCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3Itc3RlcC01MCwgI2YyZjJmMikpfS5pbnB1dC1vdHAtZGlzYWJsZWQuc2MtaW9uLWlucHV0LW90cC1tZC1oey0tY29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtMzUwLCB2YXIoLS1pb24tdGV4dC1jb2xvci1zdGVwLTY1MCwgI2E2YTZhNikpfS5pbnB1dC1vdHAtZmlsbC1vdXRsaW5lLmlucHV0LW90cC1kaXNhYmxlZC5zYy1pb24taW5wdXQtb3RwLW1kLWh7LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1zdGVwLTUwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTUwLCAjZjJmMmYyKSk7LS1ib3JkZXItY29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtMTAwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTEwMCwgI2U2ZTZlNikpfS5pbnB1dC1vdHAtZGlzYWJsZWQuc2MtaW9uLWlucHV0LW90cC1tZC1oLC5pbnB1dC1vdHAtZGlzYWJsZWQuc2MtaW9uLWlucHV0LW90cC1tZC1oIC5uYXRpdmUtaW5wdXQuc2MtaW9uLWlucHV0LW90cC1tZDpkaXNhYmxlZHtjdXJzb3I6bm90LWFsbG93ZWR9Lmhhcy1mb2N1cy5zYy1pb24taW5wdXQtb3RwLW1kLWggLm5hdGl2ZS1pbnB1dC5zYy1pb24taW5wdXQtb3RwLW1kOmZvY3Vzey0tYm9yZGVyLWNvbG9yOnZhcigtLWhpZ2hsaWdodC1jb2xvcik7b3V0bGluZTpub25lfS5pbnB1dC1vdHAtZmlsbC1vdXRsaW5lLmlucHV0LW90cC1yZWFkb25seS5zYy1pb24taW5wdXQtb3RwLW1kLWh7LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1zdGVwLTUwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTUwLCAjZjJmMmYyKSl9LmlucHV0LW90cC1maWxsLXNvbGlkLmlucHV0LW90cC1kaXNhYmxlZC5zYy1pb24taW5wdXQtb3RwLW1kLWgsLmlucHV0LW90cC1maWxsLXNvbGlkLmlucHV0LW90cC1yZWFkb25seS5zYy1pb24taW5wdXQtb3RwLW1kLWh7LS1ib3JkZXItY29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtMTAwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTEwMCwgI2U2ZTZlNikpOy0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3Itc3RlcC0xMDAsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXN0ZXAtMTAwLCAjZTZlNmU2KSl9Lmlvbi10b3VjaGVkLmlvbi1pbnZhbGlkLnNjLWlvbi1pbnB1dC1vdHAtbWQtaHstLWhpZ2hsaWdodC1jb2xvcjp2YXIoLS1oaWdobGlnaHQtY29sb3ItaW52YWxpZCl9Lmlvbi12YWxpZC5zYy1pb24taW5wdXQtb3RwLW1kLWh7LS1oaWdobGlnaHQtY29sb3I6dmFyKC0taGlnaGxpZ2h0LWNvbG9yLXZhbGlkKX0uaGFzLWZvY3VzLmlvbi12YWxpZC5zYy1pb24taW5wdXQtb3RwLW1kLWgsLmlvbi10b3VjaGVkLmlvbi1pbnZhbGlkLnNjLWlvbi1pbnB1dC1vdHAtbWQtaHstLWJvcmRlci1jb2xvcjp2YXIoLS1oaWdobGlnaHQtY29sb3IpfS5pb24tY29sb3Iuc2MtaW9uLWlucHV0LW90cC1tZC1oey0taGlnaGxpZ2h0LWNvbG9yLWZvY3VzZWQ6dmFyKC0taW9uLWNvbG9yLWJhc2UpfS5pbnB1dC1vdHAtZmlsbC1vdXRsaW5lLmlvbi1jb2xvci5zYy1pb24taW5wdXQtb3RwLW1kLWggLm5hdGl2ZS1pbnB1dC5zYy1pb24taW5wdXQtb3RwLW1kLC5pbnB1dC1vdHAtZmlsbC1zb2xpZC5pb24tY29sb3Iuc2MtaW9uLWlucHV0LW90cC1tZC1oIC5uYXRpdmUtaW5wdXQuc2MtaW9uLWlucHV0LW90cC1tZDpmb2N1c3tib3JkZXItY29sb3I6cmdiYSh2YXIoLS1pb24tY29sb3ItYmFzZS1yZ2IpLCAwLjYpfS5pbnB1dC1vdHAtZmlsbC1vdXRsaW5lLmlvbi1jb2xvci5pb24taW52YWxpZC5zYy1pb24taW5wdXQtb3RwLW1kLWggLm5hdGl2ZS1pbnB1dC5zYy1pb24taW5wdXQtb3RwLW1kLC5pbnB1dC1vdHAtZmlsbC1zb2xpZC5pb24tY29sb3IuaW9uLWludmFsaWQuc2MtaW9uLWlucHV0LW90cC1tZC1oIC5uYXRpdmUtaW5wdXQuc2MtaW9uLWlucHV0LW90cC1tZCwuaW5wdXQtb3RwLWZpbGwtb3V0bGluZS5pb24tY29sb3IuaGFzLWZvY3VzLmlvbi1pbnZhbGlkLnNjLWlvbi1pbnB1dC1vdHAtbWQtaCAubmF0aXZlLWlucHV0LnNjLWlvbi1pbnB1dC1vdHAtbWQsLmlucHV0LW90cC1maWxsLXNvbGlkLmlvbi1jb2xvci5oYXMtZm9jdXMuaW9uLWludmFsaWQuc2MtaW9uLWlucHV0LW90cC1tZC1oIC5uYXRpdmUtaW5wdXQuc2MtaW9uLWlucHV0LW90cC1tZHtib3JkZXItY29sb3I6dmFyKC0taW9uLWNvbG9yLWRhbmdlciwgI2M1MDAwZil9LmlucHV0LW90cC1maWxsLW91dGxpbmUuaW9uLWNvbG9yLmlvbi12YWxpZC5zYy1pb24taW5wdXQtb3RwLW1kLWggLm5hdGl2ZS1pbnB1dC5zYy1pb24taW5wdXQtb3RwLW1kLC5pbnB1dC1vdHAtZmlsbC1zb2xpZC5pb24tY29sb3IuaW9uLXZhbGlkLnNjLWlvbi1pbnB1dC1vdHAtbWQtaCAubmF0aXZlLWlucHV0LnNjLWlvbi1pbnB1dC1vdHAtbWQsLmlucHV0LW90cC1maWxsLW91dGxpbmUuaW9uLWNvbG9yLmhhcy1mb2N1cy5pb24tdmFsaWQuc2MtaW9uLWlucHV0LW90cC1tZC1oIC5uYXRpdmUtaW5wdXQuc2MtaW9uLWlucHV0LW90cC1tZCwuaW5wdXQtb3RwLWZpbGwtc29saWQuaW9uLWNvbG9yLmhhcy1mb2N1cy5pb24tdmFsaWQuc2MtaW9uLWlucHV0LW90cC1tZC1oIC5uYXRpdmUtaW5wdXQuc2MtaW9uLWlucHV0LW90cC1tZHtib3JkZXItY29sb3I6dmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MsICMyZGQ1NWIpfS5pbnB1dC1vdHAtZmlsbC1vdXRsaW5lLmlucHV0LW90cC1kaXNhYmxlZC5pb24tY29sb3Iuc2MtaW9uLWlucHV0LW90cC1tZC1oIC5uYXRpdmUtaW5wdXQuc2MtaW9uLWlucHV0LW90cC1tZHtib3JkZXItY29sb3I6cmdiYSh2YXIoLS1pb24tY29sb3ItYmFzZS1yZ2IpLCAwLjMpfS5zYy1pb24taW5wdXQtb3RwLW1kLWh7LS1ib3JkZXItd2lkdGg6MXB4fS5oYXMtZm9jdXMuc2MtaW9uLWlucHV0LW90cC1tZC1oIC5uYXRpdmUtaW5wdXQuc2MtaW9uLWlucHV0LW90cC1tZDpmb2N1c3stLWJvcmRlci13aWR0aDoycHh9LmlucHV0LW90cC1maWxsLW91dGxpbmUuc2MtaW9uLWlucHV0LW90cC1tZC1oey0tYm9yZGVyLWNvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTMwMCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3Itc3RlcC0zMDAsICNiM2IzYjMpKX1cIjtcbmNvbnN0IElucHV0T1RQID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmlvbklucHV0ID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25JbnB1dFwiLCA3KTtcbiAgICB0aGlzLmlvbkNoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uQ2hhbmdlXCIsIDcpO1xuICAgIHRoaXMuaW9uQ29tcGxldGUgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkNvbXBsZXRlXCIsIDcpO1xuICAgIHRoaXMuaW9uQmx1ciA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uQmx1clwiLCA3KTtcbiAgICB0aGlzLmlvbkZvY3VzID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Gb2N1c1wiLCA3KTtcbiAgICB0aGlzLmluaGVyaXRlZEF0dHJpYnV0ZXMgPSB7fTtcbiAgICB0aGlzLmlucHV0UmVmcyA9IFtdO1xuICAgIHRoaXMuaW5wdXRJZCA9IGBpb24taW5wdXQtb3RwLSR7aW5wdXRJZHMrK31gO1xuICAgIHRoaXMucGFyc2VkU2VwYXJhdG9ycyA9IFtdO1xuICAgIC8qKlxuICAgICAqIFRyYWNrcyB3aGV0aGVyIHRoZSB1c2VyIGlzIG5hdmlnYXRpbmcgdGhyb3VnaCBpbnB1dCBib3hlcyB1c2luZyBrZXlib2FyZCBuYXZpZ2F0aW9uXG4gICAgICogKGFycm93IGtleXMsIHRhYikgdmVyc3VzIG1vdXNlIGNsaWNrcy4gVGhpcyBpcyB1c2VkIHRvIGRldGVybWluZSB0aGUgYXBwcm9wcmlhdGVcbiAgICAgKiBmb2N1cyBiZWhhdmlvciB3aGVuIGFuIGlucHV0IGJveCBpcyBmb2N1c2VkLlxuICAgICAqL1xuICAgIHRoaXMuaXNLZXlib2FyZE5hdmlnYXRpb24gPSBmYWxzZTtcbiAgICB0aGlzLmlucHV0VmFsdWVzID0gW107XG4gICAgdGhpcy5oYXNGb2N1cyA9IGZhbHNlO1xuICAgIHRoaXMucHJldmlvdXNJbnB1dFZhbHVlcyA9IFtdO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB3aGV0aGVyIGFuZCBob3cgdGhlIHRleHQgdmFsdWUgc2hvdWxkIGJlIGF1dG9tYXRpY2FsbHkgY2FwaXRhbGl6ZWQgYXMgaXQgaXMgZW50ZXJlZC9lZGl0ZWQgYnkgdGhlIHVzZXIuXG4gICAgICogQXZhaWxhYmxlIG9wdGlvbnM6IGBcIm9mZlwiYCwgYFwibm9uZVwiYCwgYFwib25cImAsIGBcInNlbnRlbmNlc1wiYCwgYFwid29yZHNcImAsIGBcImNoYXJhY3RlcnNcImAuXG4gICAgICovXG4gICAgdGhpcy5hdXRvY2FwaXRhbGl6ZSA9ICdvZmYnO1xuICAgIC8qKlxuICAgICAqIElmIGB0cnVlYCwgdGhlIHVzZXIgY2Fubm90IGludGVyYWN0IHdpdGggdGhlIGlucHV0LlxuICAgICAqL1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBUaGUgZmlsbCBmb3IgdGhlIGlucHV0IGJveGVzLiBJZiBgXCJzb2xpZFwiYCB0aGUgaW5wdXQgYm94ZXMgd2lsbCBoYXZlIGEgYmFja2dyb3VuZC4gSWZcbiAgICAgKiBgXCJvdXRsaW5lXCJgIHRoZSBpbnB1dCBib3hlcyB3aWxsIGJlIHRyYW5zcGFyZW50IHdpdGggYSBib3JkZXIuXG4gICAgICovXG4gICAgdGhpcy5maWxsID0gJ291dGxpbmUnO1xuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2YgaW5wdXQgYm94ZXMgdG8gZGlzcGxheS5cbiAgICAgKi9cbiAgICB0aGlzLmxlbmd0aCA9IDQ7XG4gICAgLyoqXG4gICAgICogSWYgYHRydWVgLCB0aGUgdXNlciBjYW5ub3QgbW9kaWZ5IHRoZSB2YWx1ZS5cbiAgICAgKi9cbiAgICB0aGlzLnJlYWRvbmx5ID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogVGhlIHNoYXBlIG9mIHRoZSBpbnB1dCBib3hlcy5cbiAgICAgKiBJZiBcInJvdW5kXCIgdGhleSB3aWxsIGhhdmUgYW4gaW5jcmVhc2VkIGJvcmRlciByYWRpdXMuXG4gICAgICogSWYgXCJyZWN0YW5ndWxhclwiIHRoZXkgd2lsbCBoYXZlIG5vIGJvcmRlciByYWRpdXMuXG4gICAgICogSWYgXCJzb2Z0XCIgdGhleSB3aWxsIGhhdmUgYSBzb2Z0IGJvcmRlciByYWRpdXMuXG4gICAgICovXG4gICAgdGhpcy5zaGFwZSA9ICdyb3VuZCc7XG4gICAgLyoqXG4gICAgICogVGhlIHNpemUgb2YgdGhlIGlucHV0IGJveGVzLlxuICAgICAqL1xuICAgIHRoaXMuc2l6ZSA9ICdtZWRpdW0nO1xuICAgIC8qKlxuICAgICAqIFRoZSB0eXBlIG9mIGlucHV0IGFsbG93ZWQgaW4gdGhlIGlucHV0IGJveGVzLlxuICAgICAqL1xuICAgIHRoaXMudHlwZSA9ICdudW1iZXInO1xuICAgIC8qKlxuICAgICAqIFRoZSB2YWx1ZSBvZiB0aGUgaW5wdXQgZ3JvdXAuXG4gICAgICovXG4gICAgdGhpcy52YWx1ZSA9ICcnO1xuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgdGhlIGZvY3VzIGJlaGF2aW9yIGZvciB0aGUgaW5wdXQgT1RQIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEZvY3VzIGJlaGF2aW9yOlxuICAgICAqIDEuIEtleWJvYXJkIG5hdmlnYXRpb246IEFsbG93IG5vcm1hbCBmb2N1cyBtb3ZlbWVudFxuICAgICAqIDIuIE1vdXNlIGNsaWNrOlxuICAgICAqICAgIC0gSWYgY2xpY2tlZCBib3ggaGFzIHZhbHVlOiBGb2N1cyB0aGF0IGJveFxuICAgICAqICAgIC0gSWYgY2xpY2tlZCBib3ggaXMgZW1wdHk6IEZvY3VzIGZpcnN0IGVtcHR5IGJveFxuICAgICAqXG4gICAgICogRW1pdHMgdGhlIGBpb25Gb2N1c2AgZXZlbnQgd2hlbiB0aGUgaW5wdXQgZ3JvdXAgZ2FpbnMgZm9jdXMuXG4gICAgICovXG4gICAgdGhpcy5vbkZvY3VzID0gaW5kZXggPT4gZXZlbnQgPT4ge1xuICAgICAgdmFyIF9hO1xuICAgICAgY29uc3Qge1xuICAgICAgICBpbnB1dFJlZnNcbiAgICAgIH0gPSB0aGlzO1xuICAgICAgLy8gT25seSBlbWl0IGlvbkZvY3VzIGFuZCBzZXQgdGhlIGZvY3VzZWRWYWx1ZSB3aGVuIHRoZVxuICAgICAgLy8gY29tcG9uZW50IGZpcnN0IGdhaW5zIGZvY3VzXG4gICAgICBpZiAoIXRoaXMuaGFzRm9jdXMpIHtcbiAgICAgICAgdGhpcy5pb25Gb2N1cy5lbWl0KGV2ZW50KTtcbiAgICAgICAgdGhpcy5mb2N1c2VkVmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgfVxuICAgICAgdGhpcy5oYXNGb2N1cyA9IHRydWU7XG4gICAgICBsZXQgZmluYWxJbmRleCA9IGluZGV4O1xuICAgICAgaWYgKCF0aGlzLmlzS2V5Ym9hcmROYXZpZ2F0aW9uKSB7XG4gICAgICAgIC8vIElmIHRoZSBjbGlja2VkIGJveCBoYXMgYSB2YWx1ZSwgZm9jdXMgaXRcbiAgICAgICAgLy8gT3RoZXJ3aXNlIGZvY3VzIHRoZSBmaXJzdCBlbXB0eSBib3hcbiAgICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSB0aGlzLmlucHV0VmFsdWVzW2luZGV4XSA/IGluZGV4IDogdGhpcy5nZXRGaXJzdEVtcHR5SW5kZXgoKTtcbiAgICAgICAgZmluYWxJbmRleCA9IHRhcmdldEluZGV4ID09PSAtMSA/IHRoaXMubGVuZ3RoIC0gMSA6IHRhcmdldEluZGV4O1xuICAgICAgICAvLyBGb2N1cyB0aGUgdGFyZ2V0IGJveFxuICAgICAgICAoX2EgPSB0aGlzLmlucHV0UmVmc1tmaW5hbEluZGV4XSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZvY3VzKCk7XG4gICAgICB9XG4gICAgICAvLyBVcGRhdGUgdGFiSW5kZXhlcyB0byBtYXRjaCB0aGUgZm9jdXNlZCBib3hcbiAgICAgIGlucHV0UmVmcy5mb3JFYWNoKChpbnB1dCwgaSkgPT4ge1xuICAgICAgICBpbnB1dC50YWJJbmRleCA9IGkgPT09IGZpbmFsSW5kZXggPyAwIDogLTE7XG4gICAgICB9KTtcbiAgICAgIC8vIFJlc2V0IHRoZSBrZXlib2FyZCBuYXZpZ2F0aW9uIGZsYWdcbiAgICAgIHRoaXMuaXNLZXlib2FyZE5hdmlnYXRpb24gPSBmYWxzZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgdGhlIGJsdXIgYmVoYXZpb3IgZm9yIHRoZSBpbnB1dCBPVFAgY29tcG9uZW50LlxuICAgICAqIEVtaXRzIHRoZSBgaW9uQmx1cmAgZXZlbnQgd2hlbiB0aGUgaW5wdXQgZ3JvdXAgbG9zZXMgZm9jdXMuXG4gICAgICovXG4gICAgdGhpcy5vbkJsdXIgPSBldmVudCA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGlucHV0UmVmc1xuICAgICAgfSA9IHRoaXM7XG4gICAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0gZXZlbnQucmVsYXRlZFRhcmdldDtcbiAgICAgIC8vIERvIG5vdCBlbWl0IGJsdXIgaWYgd2UncmUgbW92aW5nIHRvIGFub3RoZXIgaW5wdXQgYm94IGluIHRoZSBzYW1lIGNvbXBvbmVudFxuICAgICAgY29uc3QgaXNJbnRlcm5hbEZvY3VzID0gcmVsYXRlZFRhcmdldCAhPSBudWxsICYmIGlucHV0UmVmcy5pbmNsdWRlcyhyZWxhdGVkVGFyZ2V0KTtcbiAgICAgIGlmICghaXNJbnRlcm5hbEZvY3VzKSB7XG4gICAgICAgIHRoaXMuaGFzRm9jdXMgPSBmYWxzZTtcbiAgICAgICAgLy8gUmVzZXQgdGFiSW5kZXhlcyB3aGVuIGZvY3VzIGxlYXZlcyB0aGUgY29tcG9uZW50XG4gICAgICAgIHRoaXMudXBkYXRlVGFiSW5kZXhlcygpO1xuICAgICAgICAvLyBBbHdheXMgZW1pdCBpb25CbHVyIHdoZW4gZm9jdXMgbGVhdmVzIHRoZSBjb21wb25lbnRcbiAgICAgICAgdGhpcy5pb25CbHVyLmVtaXQoZXZlbnQpO1xuICAgICAgICAvLyBPbmx5IGVtaXQgaW9uQ2hhbmdlIGlmIHRoZSB2YWx1ZSBoYXMgYWN0dWFsbHkgY2hhbmdlZFxuICAgICAgICBpZiAodGhpcy5mb2N1c2VkVmFsdWUgIT09IHRoaXMudmFsdWUpIHtcbiAgICAgICAgICB0aGlzLmVtaXRJb25DaGFuZ2UoZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIGtleWJvYXJkIG5hdmlnYXRpb24gZm9yIHRoZSBPVFAgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogTmF2aWdhdGlvbjpcbiAgICAgKiAtIEJhY2tzcGFjZTogQ2xlYXJzIGN1cnJlbnQgaW5wdXQgYW5kIG1vdmVzIHRvIHByZXZpb3VzIGJveCBpZiBlbXB0eVxuICAgICAqIC0gQXJyb3cgTGVmdC9SaWdodDogTW92ZXMgZm9jdXMgYmV0d2VlbiBpbnB1dCBib3hlc1xuICAgICAqIC0gVGFiOiBBbGxvd3Mgbm9ybWFsIHRhYiBuYXZpZ2F0aW9uIGJldHdlZW4gY29tcG9uZW50c1xuICAgICAqL1xuICAgIHRoaXMub25LZXlEb3duID0gaW5kZXggPT4gZXZlbnQgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBsZW5ndGhcbiAgICAgIH0gPSB0aGlzO1xuICAgICAgY29uc3QgcnRsID0gaXNSVEwodGhpcy5lbCk7XG4gICAgICBjb25zdCBpbnB1dCA9IGV2ZW50LnRhcmdldDtcbiAgICAgIC8vIE1ldGEgc2hvcnRjdXRzIGFyZSB1c2VkIHRvIGNvcHksIHBhc3RlLCBhbmQgc2VsZWN0IHRleHRcbiAgICAgIC8vIFdlIGRvbid0IHdhbnQgdG8gaGFuZGxlIHRoZXNlIGtleXMgaGVyZVxuICAgICAgY29uc3QgbWV0YVNob3J0Y3V0cyA9IFsnYScsICdjJywgJ3YnLCAneCcsICdyJywgJ3onLCAneSddO1xuICAgICAgY29uc3QgaXNUZXh0U2VsZWN0aW9uID0gaW5wdXQuc2VsZWN0aW9uU3RhcnQgIT09IGlucHV0LnNlbGVjdGlvbkVuZDtcbiAgICAgIC8vIFJldHVybiBpZiB0aGUga2V5IGlzIGEgbWV0YSBzaG9ydGN1dCBvciB0aGUgaW5wdXQgdmFsdWVcbiAgICAgIC8vIHRleHQgaXMgc2VsZWN0ZWQgYW5kIGxldCB0aGUgb25QYXN0ZSAvIG9uSW5wdXQgaGFuZGxlciBtYW5hZ2UgaXRcbiAgICAgIGlmIChpc1RleHRTZWxlY3Rpb24gfHwgKGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuY3RybEtleSkgJiYgbWV0YVNob3J0Y3V0cy5pbmNsdWRlcyhldmVudC5rZXkudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0JhY2tzcGFjZScpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5wdXRWYWx1ZXNbaW5kZXhdKSB7XG4gICAgICAgICAgLy8gU2hpZnQgYWxsIHZhbHVlcyB0byB0aGUgcmlnaHQgb2YgdGhlIGN1cnJlbnQgaW5kZXggbGVmdCBieSBvbmVcbiAgICAgICAgICBmb3IgKGxldCBpID0gaW5kZXg7IGkgPCBsZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRWYWx1ZXNbaV0gPSB0aGlzLmlucHV0VmFsdWVzW2kgKyAxXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gQ2xlYXIgdGhlIGxhc3QgYm94XG4gICAgICAgICAgdGhpcy5pbnB1dFZhbHVlc1tsZW5ndGggLSAxXSA9ICcnO1xuICAgICAgICAgIC8vIFVwZGF0ZSBhbGwgaW5wdXRSZWZzIHRvIG1hdGNoIGlucHV0VmFsdWVzXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5pbnB1dFJlZnNbaV0udmFsdWUgPSB0aGlzLmlucHV0VmFsdWVzW2ldIHx8ICcnO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKGV2ZW50KTtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmlucHV0VmFsdWVzW2luZGV4XSAmJiBpbmRleCA+IDApIHtcbiAgICAgICAgICAvLyBJZiBjdXJyZW50IGlucHV0IGlzIGVtcHR5LCBtb3ZlIHRvIHByZXZpb3VzIGlucHV0XG4gICAgICAgICAgdGhpcy5mb2N1c1ByZXZpb3VzKGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT09ICdBcnJvd0xlZnQnIHx8IGV2ZW50LmtleSA9PT0gJ0Fycm93UmlnaHQnKSB7XG4gICAgICAgIHRoaXMuaXNLZXlib2FyZE5hdmlnYXRpb24gPSB0cnVlO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBpc0xlZnQgPSBldmVudC5rZXkgPT09ICdBcnJvd0xlZnQnO1xuICAgICAgICBjb25zdCBzaG91bGRNb3ZlTmV4dCA9IGlzTGVmdCAmJiBydGwgfHwgIWlzTGVmdCAmJiAhcnRsO1xuICAgICAgICAvLyBPbmx5IGFsbG93IG1vdmluZyB0byB0aGUgbmV4dCBpbnB1dCBpZiB0aGUgY3VycmVudCBoYXMgYSB2YWx1ZVxuICAgICAgICBpZiAoc2hvdWxkTW92ZU5leHQpIHtcbiAgICAgICAgICBpZiAodGhpcy5pbnB1dFZhbHVlc1tpbmRleF0gJiYgaW5kZXggPCBsZW5ndGggLSAxKSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzTmV4dChpbmRleCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZm9jdXNQcmV2aW91cyhpbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnVGFiJykge1xuICAgICAgICB0aGlzLmlzS2V5Ym9hcmROYXZpZ2F0aW9uID0gdHJ1ZTtcbiAgICAgICAgLy8gTGV0IGFsbCB0YWIgZXZlbnRzIHByb2NlZWQgbm9ybWFsbHlcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogUHJvY2Vzc2VzIGFsbCBpbnB1dCBzY2VuYXJpb3MgZm9yIGVhY2ggaW5wdXQgYm94LlxuICAgICAqXG4gICAgICogVGhpcyBmdW5jdGlvbiBtYW5hZ2VzOlxuICAgICAqIDEuIEF1dG9maWxsIGhhbmRsaW5nXG4gICAgICogMi4gSW5wdXQgdmFsaWRhdGlvblxuICAgICAqIDMuIEZ1bGwgc2VsZWN0aW9uIHJlcGxhY2VtZW50IG9yIHR5cGluZyBpbiBhbiBlbXB0eSBib3hcbiAgICAgKiA0LiBJbnNlcnRpbmcgaW4gdGhlIG1pZGRsZSB3aXRoIGF2YWlsYWJsZSBzcGFjZSAoc2hpZnRpbmcpXG4gICAgICogNS4gU2luZ2xlIGNoYXJhY3RlciByZXBsYWNlbWVudFxuICAgICAqL1xuICAgIHRoaXMub25JbnB1dCA9IGluZGV4ID0+IGV2ZW50ID0+IHtcbiAgICAgIHZhciBfYSwgX2I7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGxlbmd0aCxcbiAgICAgICAgdmFsaWRLZXlQYXR0ZXJuXG4gICAgICB9ID0gdGhpcztcbiAgICAgIGNvbnN0IGlucHV0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgY29uc3QgdmFsdWUgPSBpbnB1dC52YWx1ZTtcbiAgICAgIGNvbnN0IHByZXZpb3VzVmFsdWUgPSB0aGlzLnByZXZpb3VzSW5wdXRWYWx1ZXNbaW5kZXhdIHx8ICcnO1xuICAgICAgLy8gMS4gQXV0b2ZpbGwgaGFuZGxpbmdcbiAgICAgIC8vIElmIHRoZSBsZW5ndGggb2YgdGhlIHZhbHVlIGluY3JlYXNlcyBieSBtb3JlIHRoYW4gMSBmcm9tIHRoZSBwcmV2aW91c1xuICAgICAgLy8gdmFsdWUsIHRyZWF0IHRoaXMgYXMgYXV0b2ZpbGwuIFRoaXMgaXMgdG8gcHJldmVudCB0aGUgY2FzZSB3aGVyZSB0aGVcbiAgICAgIC8vIHVzZXIgaXMgdHlwaW5nIGEgc2luZ2xlIGNoYXJhY3RlciBpbnRvIGFuIGlucHV0IGJveCBjb250YWluaW5nIGEgdmFsdWVcbiAgICAgIC8vIGFzIHRoYXQgd2lsbCB0cmlnZ2VyIHRoaXMgZnVuY3Rpb24gd2l0aCBhIHZhbHVlIGxlbmd0aCBvZiAyIGNoYXJhY3RlcnMuXG4gICAgICBjb25zdCBpc0F1dG9maWxsID0gdmFsdWUubGVuZ3RoIC0gcHJldmlvdXNWYWx1ZS5sZW5ndGggPiAxO1xuICAgICAgaWYgKGlzQXV0b2ZpbGwpIHtcbiAgICAgICAgLy8gRGlzdHJpYnV0ZSB2YWxpZCBjaGFyYWN0ZXJzIGFjcm9zcyBpbnB1dCBib3hlc1xuICAgICAgICBjb25zdCB2YWxpZENoYXJzID0gdmFsdWUuc3BsaXQoJycpLmZpbHRlcihjaGFyID0+IHZhbGlkS2V5UGF0dGVybi50ZXN0KGNoYXIpKS5zbGljZSgwLCBsZW5ndGgpO1xuICAgICAgICAvLyBJZiB0aGVyZSBhcmUgbm8gdmFsaWQgY2hhcmFjdGVycyBjb21pbmcgZnJvbSB0aGVcbiAgICAgICAgLy8gYXV0b2ZpbGwsIGFsbCBpbnB1dCByZWZzIGhhdmUgdG8gYmUgY2xlYXJlZCBhZnRlciB0aGVcbiAgICAgICAgLy8gYnJvd3NlciBoYXMgZmluaXNoZWQgdGhlIGF1dG9maWxsIGJlaGF2aW9yXG4gICAgICAgIGlmICh2YWxpZENoYXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlucHV0UmVmcy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aGlzLmlucHV0VmFsdWVzW2ldID0gdmFsaWRDaGFyc1tpXSB8fCAnJztcbiAgICAgICAgICB0aGlzLmlucHV0UmVmc1tpXS52YWx1ZSA9IHZhbGlkQ2hhcnNbaV0gfHwgJyc7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZShldmVudCk7XG4gICAgICAgIC8vIEZvY3VzIHRoZSBmaXJzdCBlbXB0eSBpbnB1dCBib3ggb3IgdGhlIGxhc3QgaW5wdXQgYm94IGlmIGFsbCBib3hlc1xuICAgICAgICAvLyBhcmUgZmlsbGVkIGFmdGVyIGEgc21hbGwgZGVsYXkgdG8gZW5zdXJlIHRoZSBpbnB1dCBib3hlcyBoYXZlIGJlZW5cbiAgICAgICAgLy8gdXBkYXRlZCBiZWZvcmUgbW92aW5nIHRoZSBmb2N1c1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgY29uc3QgbmV4dEluZGV4ID0gdmFsaWRDaGFycy5sZW5ndGggPCBsZW5ndGggPyB2YWxpZENoYXJzLmxlbmd0aCA6IGxlbmd0aCAtIDE7XG4gICAgICAgICAgKF9hID0gdGhpcy5pbnB1dFJlZnNbbmV4dEluZGV4XSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZvY3VzKCk7XG4gICAgICAgIH0sIDIwKTtcbiAgICAgICAgdGhpcy5wcmV2aW91c0lucHV0VmFsdWVzID0gWy4uLnRoaXMuaW5wdXRWYWx1ZXNdO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyAyLiBJbnB1dCB2YWxpZGF0aW9uXG4gICAgICAvLyBJZiB0aGUgY2hhcmFjdGVyIGVudGVyZWQgaXMgaW52YWxpZCAoZG9lcyBub3QgbWF0Y2ggdGhlIHBhdHRlcm4pLFxuICAgICAgLy8gcmVzdG9yZSB0aGUgcHJldmlvdXMgdmFsdWUgYW5kIGV4aXRcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiAwICYmICF2YWxpZEtleVBhdHRlcm4udGVzdCh2YWx1ZVt2YWx1ZS5sZW5ndGggLSAxXSkpIHtcbiAgICAgICAgaW5wdXQudmFsdWUgPSB0aGlzLmlucHV0VmFsdWVzW2luZGV4XSB8fCAnJztcbiAgICAgICAgdGhpcy5wcmV2aW91c0lucHV0VmFsdWVzID0gWy4uLnRoaXMuaW5wdXRWYWx1ZXNdO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyAzLiBGdWxsIHNlbGVjdGlvbiByZXBsYWNlbWVudCBvciB0eXBpbmcgaW4gYW4gZW1wdHkgYm94XG4gICAgICAvLyBJZiB0aGUgdXNlciBzZWxlY3RzIGFsbCB0ZXh0IGluIHRoZSBpbnB1dCBib3ggYW5kIHR5cGVzLCBvciBpZiB0aGVcbiAgICAgIC8vIGlucHV0IGJveCBpcyBlbXB0eSwgcmVwbGFjZSBvbmx5IHRoaXMgaW5wdXQgYm94LiBJZiB0aGUgYm94IGlzIGVtcHR5LFxuICAgICAgLy8gbW92ZSB0byB0aGUgbmV4dCBib3gsIG90aGVyd2lzZSBzdGF5IGZvY3VzZWQgb24gdGhpcyBib3guXG4gICAgICBjb25zdCBpc0FsbFNlbGVjdGVkID0gaW5wdXQuc2VsZWN0aW9uU3RhcnQgPT09IDAgJiYgaW5wdXQuc2VsZWN0aW9uRW5kID09PSB2YWx1ZS5sZW5ndGg7XG4gICAgICBjb25zdCBpc0VtcHR5ID0gIXRoaXMuaW5wdXRWYWx1ZXNbaW5kZXhdO1xuICAgICAgaWYgKGlzQWxsU2VsZWN0ZWQgfHwgaXNFbXB0eSkge1xuICAgICAgICB0aGlzLmlucHV0VmFsdWVzW2luZGV4XSA9IHZhbHVlO1xuICAgICAgICBpbnB1dC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKGV2ZW50KTtcbiAgICAgICAgdGhpcy5mb2N1c05leHQoaW5kZXgpO1xuICAgICAgICB0aGlzLnByZXZpb3VzSW5wdXRWYWx1ZXMgPSBbLi4udGhpcy5pbnB1dFZhbHVlc107XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIDQuIEluc2VydGluZyBpbiB0aGUgbWlkZGxlIHdpdGggYXZhaWxhYmxlIHNwYWNlIChzaGlmdGluZylcbiAgICAgIC8vIElmIHR5cGluZyBpbiBhIGZpbGxlZCBpbnB1dCBib3ggYW5kIHRoZXJlIGFyZSBlbXB0eSBib3hlcyBhdCB0aGUgZW5kLFxuICAgICAgLy8gc2hpZnQgYWxsIHZhbHVlcyBzdGFydGluZyBhdCB0aGUgY3VycmVudCBib3ggdG8gdGhlIHJpZ2h0LCBhbmQgaW5zZXJ0XG4gICAgICAvLyB0aGUgbmV3IGNoYXJhY3RlciBhdCB0aGUgY3VycmVudCBib3guXG4gICAgICBjb25zdCBoYXNBdmFpbGFibGVCb3hBdEVuZCA9IHRoaXMuaW5wdXRWYWx1ZXNbdGhpcy5pbnB1dFZhbHVlcy5sZW5ndGggLSAxXSA9PT0gJyc7XG4gICAgICBpZiAodGhpcy5pbnB1dFZhbHVlc1tpbmRleF0gJiYgaGFzQXZhaWxhYmxlQm94QXRFbmQgJiYgdmFsdWUubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIC8vIEdldCB0aGUgaW5zZXJ0ZWQgY2hhcmFjdGVyIChmcm9tIGV2ZW50IG9yIGJ5IGRpZmZpbmcgdmFsdWUvcHJldmlvdXNWYWx1ZSlcbiAgICAgICAgbGV0IG5ld0NoYXIgPSBldmVudC5kYXRhO1xuICAgICAgICBpZiAoIW5ld0NoYXIpIHtcbiAgICAgICAgICBuZXdDaGFyID0gdmFsdWUuc3BsaXQoJycpLmZpbmQoKGMsIGkpID0+IGMgIT09IHByZXZpb3VzVmFsdWVbaV0pIHx8IHZhbHVlW3ZhbHVlLmxlbmd0aCAtIDFdO1xuICAgICAgICB9XG4gICAgICAgIC8vIFZhbGlkYXRlIHRoZSBuZXcgY2hhcmFjdGVyIGJlZm9yZSBzaGlmdGluZ1xuICAgICAgICBpZiAoIXZhbGlkS2V5UGF0dGVybi50ZXN0KG5ld0NoYXIpKSB7XG4gICAgICAgICAgaW5wdXQudmFsdWUgPSB0aGlzLmlucHV0VmFsdWVzW2luZGV4XSB8fCAnJztcbiAgICAgICAgICB0aGlzLnByZXZpb3VzSW5wdXRWYWx1ZXMgPSBbLi4udGhpcy5pbnB1dFZhbHVlc107XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNoaWZ0IHZhbHVlcyByaWdodCBmcm9tIHRoZSBlbmQgdG8gdGhlIGluc2VydGlvbiBwb2ludFxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5pbnB1dFZhbHVlcy5sZW5ndGggLSAxOyBpID4gaW5kZXg7IGktLSkge1xuICAgICAgICAgIHRoaXMuaW5wdXRWYWx1ZXNbaV0gPSB0aGlzLmlucHV0VmFsdWVzW2kgLSAxXTtcbiAgICAgICAgICB0aGlzLmlucHV0UmVmc1tpXS52YWx1ZSA9IHRoaXMuaW5wdXRWYWx1ZXNbaV0gfHwgJyc7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbnB1dFZhbHVlc1tpbmRleF0gPSBuZXdDaGFyO1xuICAgICAgICB0aGlzLmlucHV0UmVmc1tpbmRleF0udmFsdWUgPSBuZXdDaGFyO1xuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKGV2ZW50KTtcbiAgICAgICAgdGhpcy5wcmV2aW91c0lucHV0VmFsdWVzID0gWy4uLnRoaXMuaW5wdXRWYWx1ZXNdO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyA1LiBTaW5nbGUgY2hhcmFjdGVyIHJlcGxhY2VtZW50XG4gICAgICAvLyBIYW5kbGVzIHJlcGxhY2luZyBhIHNpbmdsZSBjaGFyYWN0ZXIgaW4gYSBib3ggY29udGFpbmluZyBhIHZhbHVlIGJhc2VkXG4gICAgICAvLyBvbiB0aGUgY3Vyc29yIHBvc2l0aW9uLiBXZSBuZWVkIHRoZSBjdXJzb3IgcG9zaXRpb24gdG8gZGV0ZXJtaW5lIHdoaWNoXG4gICAgICAvLyBjaGFyYWN0ZXIgd2FzIHRoZSBsYXN0IGNoYXJhY3RlciB0eXBlZC4gRm9yIGV4YW1wbGUsIGlmIHRoZSB1c2VyIHR5cGVzIFwiMlwiXG4gICAgICAvLyBpbiBhbiBpbnB1dCBib3ggd2l0aCB0aGUgY3Vyc29yIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIHZhbHVlIG9mIFwiNlwiLFxuICAgICAgLy8gdGhlIHZhbHVlIHdpbGwgYmUgXCIyNlwiLCBidXQgd2Ugd2FudCB0byBncmFiIHRoZSBcIjJcIiBhcyB0aGUgbGFzdCBjaGFyYWN0ZXJcbiAgICAgIC8vIHR5cGVkLlxuICAgICAgY29uc3QgY3Vyc29yUG9zID0gKF9hID0gaW5wdXQuc2VsZWN0aW9uU3RhcnQpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHZhbHVlLmxlbmd0aDtcbiAgICAgIGNvbnN0IG5ld0NoYXJJbmRleCA9IGN1cnNvclBvcyAtIDE7XG4gICAgICBjb25zdCBuZXdDaGFyID0gKF9iID0gdmFsdWVbbmV3Q2hhckluZGV4XSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogdmFsdWVbMF07XG4gICAgICAvLyBDaGVjayBpZiB0aGUgbmV3IGNoYXJhY3RlciBpcyB2YWxpZCBiZWZvcmUgdXBkYXRpbmcgdGhlIHZhbHVlXG4gICAgICBpZiAoIXZhbGlkS2V5UGF0dGVybi50ZXN0KG5ld0NoYXIpKSB7XG4gICAgICAgIGlucHV0LnZhbHVlID0gdGhpcy5pbnB1dFZhbHVlc1tpbmRleF0gfHwgJyc7XG4gICAgICAgIHRoaXMucHJldmlvdXNJbnB1dFZhbHVlcyA9IFsuLi50aGlzLmlucHV0VmFsdWVzXTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5pbnB1dFZhbHVlc1tpbmRleF0gPSBuZXdDaGFyO1xuICAgICAgaW5wdXQudmFsdWUgPSBuZXdDaGFyO1xuICAgICAgdGhpcy51cGRhdGVWYWx1ZShldmVudCk7XG4gICAgICB0aGlzLnByZXZpb3VzSW5wdXRWYWx1ZXMgPSBbLi4udGhpcy5pbnB1dFZhbHVlc107XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIHBhc3RpbmcgdGV4dCBpbnRvIHRoZSBpbnB1dCBPVFAgY29tcG9uZW50LlxuICAgICAqIFRoaXMgZnVuY3Rpb24gcHJldmVudHMgdGhlIGRlZmF1bHQgcGFzdGUgYmVoYXZpb3IgYW5kXG4gICAgICogdmFsaWRhdGVzIHRoZSBwYXN0ZWQgdGV4dCBhZ2FpbnN0IHRoZSBhbGxvd2VkIHBhdHRlcm4uXG4gICAgICogSXQgdGhlbiB1cGRhdGVzIHRoZSB2YWx1ZSBvZiB0aGUgaW5wdXQgZ3JvdXAgYW5kIGZvY3VzZXNcbiAgICAgKiB0aGUgbmV4dCBlbXB0eSBpbnB1dCBhZnRlciBwYXN0aW5nLlxuICAgICAqL1xuICAgIHRoaXMub25QYXN0ZSA9IGV2ZW50ID0+IHtcbiAgICAgIHZhciBfYSwgX2I7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGlucHV0UmVmcyxcbiAgICAgICAgbGVuZ3RoLFxuICAgICAgICB2YWxpZEtleVBhdHRlcm5cbiAgICAgIH0gPSB0aGlzO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IHBhc3RlZFRleHQgPSAoX2EgPSBldmVudC5jbGlwYm9hcmREYXRhKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0RGF0YSgndGV4dCcpO1xuICAgICAgLy8gSWYgdGhlcmUgaXMgbm8gcGFzdGVkIHRleHQsIHN0aWxsIGVtaXQgdGhlIGlucHV0IGNoYW5nZSBldmVudFxuICAgICAgLy8gYmVjYXVzZSB0aGlzIGlzIGhvdyB0aGUgbmF0aXZlIGlucHV0IGVsZW1lbnQgYmVoYXZlc1xuICAgICAgLy8gYnV0IHJldHVybiBlYXJseSBiZWNhdXNlIHRoZXJlIGlzIG5vdGhpbmcgdG8gcGFzdGUuXG4gICAgICBpZiAoIXBhc3RlZFRleHQpIHtcbiAgICAgICAgdGhpcy5lbWl0SW9uSW5wdXQoZXZlbnQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB2YWxpZENoYXJzID0gcGFzdGVkVGV4dC5zcGxpdCgnJykuZmlsdGVyKGNoYXIgPT4gdmFsaWRLZXlQYXR0ZXJuLnRlc3QoY2hhcikpLnNsaWNlKDAsIGxlbmd0aCk7XG4gICAgICAvLyBBbHdheXMgcGFzdGUgc3RhcnRpbmcgYXQgdGhlIGZpcnN0IGJveFxuICAgICAgdmFsaWRDaGFycy5mb3JFYWNoKChjaGFyLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLmlucHV0UmVmc1tpbmRleF0udmFsdWUgPSBjaGFyO1xuICAgICAgICAgIHRoaXMuaW5wdXRWYWx1ZXNbaW5kZXhdID0gY2hhcjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBVcGRhdGUgdGhlIHZhbHVlIHNvIHRoYXQgYWxsIGlucHV0IGJveGVzIGFyZSB1cGRhdGVkXG4gICAgICB0aGlzLnZhbHVlID0gdmFsaWRDaGFycy5qb2luKCcnKTtcbiAgICAgIHRoaXMudXBkYXRlVmFsdWUoZXZlbnQpO1xuICAgICAgLy8gRm9jdXMgdGhlIG5leHQgZW1wdHkgaW5wdXQgYWZ0ZXIgcGFzdGluZ1xuICAgICAgLy8gSWYgYWxsIGJveGVzIGFyZSBmaWxsZWQsIGZvY3VzIHRoZSBsYXN0IGlucHV0XG4gICAgICBjb25zdCBuZXh0RW1wdHlJbmRleCA9IHZhbGlkQ2hhcnMubGVuZ3RoIDwgbGVuZ3RoID8gdmFsaWRDaGFycy5sZW5ndGggOiBsZW5ndGggLSAxO1xuICAgICAgKF9iID0gaW5wdXRSZWZzW25leHRFbXB0eUluZGV4XSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmZvY3VzKCk7XG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogU2V0cyBmb2N1cyB0byBhbiBpbnB1dCBib3guXG4gICAqIEBwYXJhbSBpbmRleCAtIFRoZSBpbmRleCBvZiB0aGUgaW5wdXQgYm94IHRvIGZvY3VzICgwLWJhc2VkKS5cbiAgICogSWYgcHJvdmlkZWQgYW5kIHRoZSBpbnB1dCBib3ggaGFzIGEgdmFsdWUsIHRoZSBpbnB1dCBib3ggYXQgdGhhdCBpbmRleCB3aWxsIGJlIGZvY3VzZWQuXG4gICAqIE90aGVyd2lzZSwgdGhlIGZpcnN0IGVtcHR5IGlucHV0IGJveCBvciB0aGUgbGFzdCBpbnB1dCBpZiBhbGwgYXJlIGZpbGxlZCB3aWxsIGJlIGZvY3VzZWQuXG4gICAqL1xuICBhc3luYyBzZXRGb2N1cyhpbmRleCkge1xuICAgIHZhciBfYSwgX2I7XG4gICAgaWYgKHR5cGVvZiBpbmRleCA9PT0gJ251bWJlcicpIHtcbiAgICAgIGNvbnN0IHZhbGlkSW5kZXggPSBNYXRoLm1heCgwLCBNYXRoLm1pbihpbmRleCwgdGhpcy5sZW5ndGggLSAxKSk7XG4gICAgICAoX2EgPSB0aGlzLmlucHV0UmVmc1t2YWxpZEluZGV4XSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZvY3VzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRhYmJhYmxlSW5kZXggPSB0aGlzLmdldFRhYmJhYmxlSW5kZXgoKTtcbiAgICAgIChfYiA9IHRoaXMuaW5wdXRSZWZzW3RhYmJhYmxlSW5kZXhdKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZm9jdXMoKTtcbiAgICB9XG4gIH1cbiAgdmFsdWVDaGFuZ2VkKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZVZhbHVlcygpO1xuICAgIHRoaXMudXBkYXRlVGFiSW5kZXhlcygpO1xuICB9XG4gIC8qKlxuICAgKiBQcm9jZXNzZXMgdGhlIHNlcGFyYXRvcnMgcHJvcCBpbnRvIGFuIGFycmF5IG9mIG51bWJlcnMuXG4gICAqXG4gICAqIElmIHRoZSBzZXBhcmF0b3JzIHByb3AgaXMgbm90IHByb3ZpZGVkLCByZXR1cm5zIGFuIGVtcHR5IGFycmF5LlxuICAgKiBJZiB0aGUgc2VwYXJhdG9ycyBwcm9wIGlzICdhbGwnLCByZXR1cm5zIGFuIGFycmF5IG9mIGFsbCB2YWxpZCBwb3NpdGlvbnMgKDEgdG8gbGVuZ3RoLTEpLlxuICAgKiBJZiB0aGUgc2VwYXJhdG9ycyBwcm9wIGlzIGFuIGFycmF5LCByZXR1cm5zIGl0IGFzIGlzLlxuICAgKiBJZiB0aGUgc2VwYXJhdG9ycyBwcm9wIGlzIGEgc3RyaW5nLCBzcGxpdHMgaXQgYnkgY29tbWFzIGFuZCBwYXJzZXMgZWFjaCBwYXJ0IGFzIGEgbnVtYmVyLlxuICAgKlxuICAgKiBJZiB0aGUgc2VwYXJhdG9ycyBhcmUgZ3JlYXRlciB0aGFuIHRoZSBpbnB1dCBsZW5ndGgsIGl0IHdpbGwgd2FybiBhbmQgaWdub3JlIHRoZSBzZXBhcmF0b3JzLlxuICAgKi9cbiAgcHJvY2Vzc1NlcGFyYXRvcnMoKSB7XG4gICAgY29uc3Qge1xuICAgICAgc2VwYXJhdG9ycyxcbiAgICAgIGxlbmd0aFxuICAgIH0gPSB0aGlzO1xuICAgIGlmIChzZXBhcmF0b3JzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMucGFyc2VkU2VwYXJhdG9ycyA9IFtdO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHNlcGFyYXRvcnMgPT09ICdzdHJpbmcnICYmIHNlcGFyYXRvcnMgIT09ICdhbGwnKSB7XG4gICAgICBjb25zdCBpc1ZhbGlkRm9ybWF0ID0gL14oXFxkKykoLFxcZCspKiQvLnRlc3Qoc2VwYXJhdG9ycyk7XG4gICAgICBpZiAoIWlzVmFsaWRGb3JtYXQpIHtcbiAgICAgICAgcHJpbnRJb25XYXJuaW5nKGBbaW9uLWlucHV0LW90cF0gLSBJbnZhbGlkIHNlcGFyYXRvcnMgZm9ybWF0LiBFeHBlY3RlZCBhIGNvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIG51bWJlcnMsIGFuIGFycmF5IG9mIG51bWJlcnMsIG9yIFwiYWxsXCIuIFJlY2VpdmVkOiAke3NlcGFyYXRvcnN9YCwgdGhpcy5lbCk7XG4gICAgICAgIHRoaXMucGFyc2VkU2VwYXJhdG9ycyA9IFtdO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBzZXBhcmF0b3JWYWx1ZXM7XG4gICAgaWYgKHNlcGFyYXRvcnMgPT09ICdhbGwnKSB7XG4gICAgICBzZXBhcmF0b3JWYWx1ZXMgPSBBcnJheS5mcm9tKHtcbiAgICAgICAgbGVuZ3RoOiBsZW5ndGggLSAxXG4gICAgICB9LCAoXywgaSkgPT4gaSArIDEpO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShzZXBhcmF0b3JzKSkge1xuICAgICAgc2VwYXJhdG9yVmFsdWVzID0gc2VwYXJhdG9ycztcbiAgICB9IGVsc2Uge1xuICAgICAgc2VwYXJhdG9yVmFsdWVzID0gc2VwYXJhdG9ycy5zcGxpdCgnLCcpLm1hcChwb3MgPT4gcGFyc2VJbnQocG9zLCAxMCkpLmZpbHRlcihwb3MgPT4gIWlzTmFOKHBvcykpO1xuICAgIH1cbiAgICAvLyBDaGVjayBmb3IgZHVwbGljYXRlIHNlcGFyYXRvciBwb3NpdGlvbnNcbiAgICBjb25zdCBkdXBsaWNhdGVzID0gc2VwYXJhdG9yVmFsdWVzLmZpbHRlcigocG9zLCBpbmRleCkgPT4gc2VwYXJhdG9yVmFsdWVzLmluZGV4T2YocG9zKSAhPT0gaW5kZXgpO1xuICAgIGlmIChkdXBsaWNhdGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHByaW50SW9uV2FybmluZyhgW2lvbi1pbnB1dC1vdHBdIC0gRHVwbGljYXRlIHNlcGFyYXRvciBwb3NpdGlvbnMgYXJlIG5vdCBhbGxvd2VkLiBSZWNlaXZlZDogJHtzZXBhcmF0b3JzfWAsIHRoaXMuZWwpO1xuICAgIH1cbiAgICBjb25zdCBpbnZhbGlkU2VwYXJhdG9ycyA9IHNlcGFyYXRvclZhbHVlcy5maWx0ZXIocG9zID0+IHBvcyA+IGxlbmd0aCk7XG4gICAgaWYgKGludmFsaWRTZXBhcmF0b3JzLmxlbmd0aCA+IDApIHtcbiAgICAgIHByaW50SW9uV2FybmluZyhgW2lvbi1pbnB1dC1vdHBdIC0gVGhlIGZvbGxvd2luZyBzZXBhcmF0b3IgcG9zaXRpb25zIGFyZSBncmVhdGVyIHRoYW4gdGhlIGlucHV0IGxlbmd0aCAoJHtsZW5ndGh9KTogJHtpbnZhbGlkU2VwYXJhdG9ycy5qb2luKCcsICcpfS4gVGhlc2Ugc2VwYXJhdG9ycyB3aWxsIGJlIGlnbm9yZWQuYCwgdGhpcy5lbCk7XG4gICAgfVxuICAgIHRoaXMucGFyc2VkU2VwYXJhdG9ycyA9IHNlcGFyYXRvclZhbHVlcy5maWx0ZXIocG9zID0+IHBvcyA8PSBsZW5ndGgpO1xuICB9XG4gIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHRoaXMuaW5oZXJpdGVkQXR0cmlidXRlcyA9IGluaGVyaXRBcmlhQXR0cmlidXRlcyh0aGlzLmVsKTtcbiAgICB0aGlzLnByb2Nlc3NTZXBhcmF0b3JzKCk7XG4gICAgdGhpcy5pbml0aWFsaXplVmFsdWVzKCk7XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICB0aGlzLnVwZGF0ZVRhYkluZGV4ZXMoKTtcbiAgfVxuICAvKipcbiAgICogR2V0IHRoZSByZWdleCBwYXR0ZXJuIGZvciBhbGxvd2VkIGNoYXJhY3RlcnMuXG4gICAqIElmIGEgcGF0dGVybiBpcyBwcm92aWRlZCwgdXNlIGl0IHRvIGNyZWF0ZSBhIHJlZ2V4IHBhdHRlcm5cbiAgICogT3RoZXJ3aXNlLCB1c2UgdGhlIGRlZmF1bHQgcmVnZXggcGF0dGVybiBiYXNlZCBvbiB0eXBlXG4gICAqL1xuICBnZXQgdmFsaWRLZXlQYXR0ZXJuKCkge1xuICAgIHJldHVybiBuZXcgUmVnRXhwKGBeJHt0aGlzLmdldFBhdHRlcm4oKX0kYCwgJ3UnKTtcbiAgfVxuICAvKipcbiAgICogR2V0cyB0aGUgc3RyaW5nIHBhdHRlcm4gdG8gcGFzcyB0byB0aGUgaW5wdXQgZWxlbWVudFxuICAgKiBhbmQgdXNlIGluIHRoZSByZWdleCBmb3IgYWxsb3dlZCBjaGFyYWN0ZXJzLlxuICAgKi9cbiAgZ2V0UGF0dGVybigpIHtcbiAgICBjb25zdCB7XG4gICAgICBwYXR0ZXJuLFxuICAgICAgdHlwZVxuICAgIH0gPSB0aGlzO1xuICAgIGlmIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybjtcbiAgICB9XG4gICAgcmV0dXJuIHR5cGUgPT09ICdudW1iZXInID8gJ1tcXFxccHtOfV0nIDogJ1tcXFxccHtMfVxcXFxwe059XSc7XG4gIH1cbiAgLyoqXG4gICAqIEdldCB0aGUgZGVmYXVsdCB2YWx1ZSBmb3IgaW5wdXRtb2RlLlxuICAgKiBJZiBpbnB1dG1vZGUgaXMgcHJvdmlkZWQsIHVzZSBpdC5cbiAgICogT3RoZXJ3aXNlLCB1c2UgdGhlIGRlZmF1bHQgaW5wdXRtb2RlIGJhc2VkIG9uIHR5cGVcbiAgICovXG4gIGdldElucHV0bW9kZSgpIHtcbiAgICBjb25zdCB7XG4gICAgICBpbnB1dG1vZGVcbiAgICB9ID0gdGhpcztcbiAgICBpZiAoaW5wdXRtb2RlKSB7XG4gICAgICByZXR1cm4gaW5wdXRtb2RlO1xuICAgIH1cbiAgICBpZiAodGhpcy50eXBlID09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4gJ251bWVyaWMnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ3RleHQnO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIGlucHV0IHZhbHVlcyBhcnJheSBiYXNlZCBvbiB0aGUgY3VycmVudCB2YWx1ZSBwcm9wLlxuICAgKiBUaGlzIHNwbGl0cyB0aGUgdmFsdWUgaW50byBpbmRpdmlkdWFsIGNoYXJhY3RlcnMgYW5kIHZhbGlkYXRlcyB0aGVtIGFnYWluc3RcbiAgICogdGhlIGFsbG93ZWQgcGF0dGVybi4gVGhlIHZhbHVlcyBhcmUgdGhlbiB1c2VkIGFzIHRoZSB2YWx1ZXMgaW4gdGhlIG5hdGl2ZVxuICAgKiBpbnB1dCBib3hlcyBhbmQgdGhlIHZhbHVlIG9mIHRoZSBpbnB1dCBncm91cCBpcyB1cGRhdGVkLlxuICAgKi9cbiAgaW5pdGlhbGl6ZVZhbHVlcygpIHtcbiAgICAvLyBDbGVhciBhbGwgaW5wdXQgdmFsdWVzXG4gICAgdGhpcy5pbnB1dFZhbHVlcyA9IEFycmF5KHRoaXMubGVuZ3RoKS5maWxsKCcnKTtcbiAgICAvLyBJZiB0aGUgdmFsdWUgaXMgbnVsbCwgdW5kZWZpbmVkLCBvciBhbiBlbXB0eSBzdHJpbmcsIHJldHVyblxuICAgIGlmICh0aGlzLnZhbHVlID09IG51bGwgfHwgU3RyaW5nKHRoaXMudmFsdWUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBTcGxpdCB0aGUgdmFsdWUgaW50byBpbmRpdmlkdWFsIGNoYXJhY3RlcnMgYW5kIHZhbGlkYXRlXG4gICAgLy8gdGhlbSBhZ2FpbnN0IHRoZSBhbGxvd2VkIHBhdHRlcm5cbiAgICBjb25zdCBjaGFycyA9IFN0cmluZyh0aGlzLnZhbHVlKS5zcGxpdCgnJykuc2xpY2UoMCwgdGhpcy5sZW5ndGgpO1xuICAgIGNoYXJzLmZvckVhY2goKGNoYXIsIGluZGV4KSA9PiB7XG4gICAgICBpZiAodGhpcy52YWxpZEtleVBhdHRlcm4udGVzdChjaGFyKSkge1xuICAgICAgICB0aGlzLmlucHV0VmFsdWVzW2luZGV4XSA9IGNoYXI7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gVXBkYXRlIHRoZSB2YWx1ZSB3aXRob3V0IGVtaXR0aW5nIGV2ZW50c1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLmlucHV0VmFsdWVzLmpvaW4oJycpO1xuICAgIHRoaXMucHJldmlvdXNJbnB1dFZhbHVlcyA9IFsuLi50aGlzLmlucHV0VmFsdWVzXTtcbiAgfVxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgdmFsdWUgb2YgdGhlIGlucHV0IGdyb3VwLlxuICAgKiBUaGlzIHVwZGF0ZXMgdGhlIHZhbHVlIG9mIHRoZSBpbnB1dCBncm91cCBhbmQgZW1pdHMgYW4gYGlvbkNoYW5nZWAgZXZlbnQuXG4gICAqIElmIGFsbCBvZiB0aGUgaW5wdXQgYm94ZXMgYXJlIGZpbGxlZCwgaXQgZW1pdHMgYW4gYGlvbkNvbXBsZXRlYCBldmVudC5cbiAgICovXG4gIHVwZGF0ZVZhbHVlKGV2ZW50KSB7XG4gICAgY29uc3Qge1xuICAgICAgaW5wdXRWYWx1ZXMsXG4gICAgICBsZW5ndGhcbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGlucHV0VmFsdWVzLmpvaW4oJycpO1xuICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICB0aGlzLmVtaXRJb25JbnB1dChldmVudCk7XG4gICAgaWYgKG5ld1ZhbHVlLmxlbmd0aCA9PT0gbGVuZ3RoKSB7XG4gICAgICB0aGlzLmlvbkNvbXBsZXRlLmVtaXQoe1xuICAgICAgICB2YWx1ZTogbmV3VmFsdWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogRW1pdHMgYW4gYGlvbkNoYW5nZWAgZXZlbnQuXG4gICAqIFRoaXMgQVBJIHNob3VsZCBiZSBjYWxsZWQgZm9yIHVzZXIgY29tbWl0dGVkIGNoYW5nZXMuXG4gICAqIFRoaXMgQVBJIHNob3VsZCBub3QgYmUgdXNlZCBmb3IgZXh0ZXJuYWwgdmFsdWUgY2hhbmdlcy5cbiAgICovXG4gIGVtaXRJb25DaGFuZ2UoZXZlbnQpIHtcbiAgICBjb25zdCB7XG4gICAgICB2YWx1ZVxuICAgIH0gPSB0aGlzO1xuICAgIC8vIENoZWNrcyBmb3IgYm90aCBudWxsIGFuZCB1bmRlZmluZWQgdmFsdWVzXG4gICAgY29uc3QgbmV3VmFsdWUgPSB2YWx1ZSA9PSBudWxsID8gdmFsdWUgOiB2YWx1ZS50b1N0cmluZygpO1xuICAgIHRoaXMuaW9uQ2hhbmdlLmVtaXQoe1xuICAgICAgdmFsdWU6IG5ld1ZhbHVlLFxuICAgICAgZXZlbnRcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogRW1pdHMgYW4gYGlvbklucHV0YCBldmVudC5cbiAgICogVGhpcyBpcyB1c2VkIHRvIGVtaXQgdGhlIGlucHV0IHZhbHVlIHdoZW4gdGhlIHVzZXIgdHlwZXMsXG4gICAqIGJhY2tzcGFjZXMsIG9yIHBhc3Rlcy5cbiAgICovXG4gIGVtaXRJb25JbnB1dChldmVudCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHZhbHVlXG4gICAgfSA9IHRoaXM7XG4gICAgLy8gQ2hlY2tzIGZvciBib3RoIG51bGwgYW5kIHVuZGVmaW5lZCB2YWx1ZXNcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHZhbHVlID09IG51bGwgPyB2YWx1ZSA6IHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgdGhpcy5pb25JbnB1dC5lbWl0KHtcbiAgICAgIHZhbHVlOiBuZXdWYWx1ZSxcbiAgICAgIGV2ZW50XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIEZvY3VzZXMgdGhlIG5leHQgaW5wdXQgYm94LlxuICAgKi9cbiAgZm9jdXNOZXh0KGN1cnJlbnRJbmRleCkge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCB7XG4gICAgICBpbnB1dFJlZnMsXG4gICAgICBsZW5ndGhcbiAgICB9ID0gdGhpcztcbiAgICBpZiAoY3VycmVudEluZGV4IDwgbGVuZ3RoIC0gMSkge1xuICAgICAgKF9hID0gaW5wdXRSZWZzW2N1cnJlbnRJbmRleCArIDFdKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZm9jdXMoKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIEZvY3VzZXMgdGhlIHByZXZpb3VzIGlucHV0IGJveC5cbiAgICovXG4gIGZvY3VzUHJldmlvdXMoY3VycmVudEluZGV4KSB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IHtcbiAgICAgIGlucHV0UmVmc1xuICAgIH0gPSB0aGlzO1xuICAgIGlmIChjdXJyZW50SW5kZXggPiAwKSB7XG4gICAgICAoX2EgPSBpbnB1dFJlZnNbY3VycmVudEluZGV4IC0gMV0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb2N1cygpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogU2VhcmNoZXMgdGhyb3VnaCB0aGUgaW5wdXQgdmFsdWVzIGFuZCByZXR1cm5zIHRoZSBpbmRleFxuICAgKiBvZiB0aGUgZmlyc3QgZW1wdHkgaW5wdXQuXG4gICAqIFJldHVybnMgLTEgaWYgYWxsIGlucHV0cyBhcmUgZmlsbGVkLlxuICAgKi9cbiAgZ2V0Rmlyc3RFbXB0eUluZGV4KCkge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCB7XG4gICAgICBpbnB1dFZhbHVlcyxcbiAgICAgIGxlbmd0aFxuICAgIH0gPSB0aGlzO1xuICAgIC8vIENyZWF0ZSBhbiBhcnJheSBvZiB0aGUgc2FtZSBsZW5ndGggYXMgdGhlIGlucHV0IE9UUFxuICAgIC8vIGFuZCBmaWxsIGl0IHdpdGggdGhlIGlucHV0IHZhbHVlc1xuICAgIGNvbnN0IHZhbHVlcyA9IEFycmF5LmZyb20oe1xuICAgICAgbGVuZ3RoXG4gICAgfSwgKF8sIGkpID0+IGlucHV0VmFsdWVzW2ldIHx8ICcnKTtcbiAgICByZXR1cm4gKF9hID0gdmFsdWVzLmZpbmRJbmRleCh2YWx1ZSA9PiAhdmFsdWUgfHwgdmFsdWUgPT09ICcnKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogLTE7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBpbnB1dCB0aGF0IHNob3VsZCBiZSB0YWJiZWQgdG8uXG4gICAqIElmIGFsbCBpbnB1dHMgYXJlIGZpbGxlZCwgcmV0dXJucyB0aGUgbGFzdCBpbnB1dCdzIGluZGV4LlxuICAgKiBPdGhlcndpc2UsIHJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBlbXB0eSBpbnB1dC5cbiAgICovXG4gIGdldFRhYmJhYmxlSW5kZXgoKSB7XG4gICAgY29uc3Qge1xuICAgICAgbGVuZ3RoXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgZmlyc3RFbXB0eUluZGV4ID0gdGhpcy5nZXRGaXJzdEVtcHR5SW5kZXgoKTtcbiAgICByZXR1cm4gZmlyc3RFbXB0eUluZGV4ID09PSAtMSA/IGxlbmd0aCAtIDEgOiBmaXJzdEVtcHR5SW5kZXg7XG4gIH1cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIHRhYkluZGV4ZXMgZm9yIHRoZSBpbnB1dCBib3hlcy5cbiAgICogVGhpcyBpcyB1c2VkIHRvIGVuc3VyZSB0aGF0IHRoZSBjb3JyZWN0IGlucHV0IGlzXG4gICAqIGZvY3VzZWQgd2hlbiB0aGUgdXNlciBuYXZpZ2F0ZXMgdXNpbmcgdGhlIHRhYiBrZXkuXG4gICAqL1xuICB1cGRhdGVUYWJJbmRleGVzKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlucHV0UmVmcyxcbiAgICAgIGlucHV0VmFsdWVzLFxuICAgICAgbGVuZ3RoXG4gICAgfSA9IHRoaXM7XG4gICAgLy8gRmluZCBmaXJzdCBlbXB0eSBpbmRleCBhZnRlciBhbnkgZmlsbGVkIGJveGVzXG4gICAgbGV0IGZpcnN0RW1wdHlJbmRleCA9IC0xO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghaW5wdXRWYWx1ZXNbaV0gfHwgaW5wdXRWYWx1ZXNbaV0gPT09ICcnKSB7XG4gICAgICAgIGZpcnN0RW1wdHlJbmRleCA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBVcGRhdGUgdGFiSW5kZXggYW5kIGFyaWEtaGlkZGVuIGZvciBhbGwgaW5wdXRzXG4gICAgaW5wdXRSZWZzLmZvckVhY2goKGlucHV0LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgc2hvdWxkQmVUYWJiYWJsZSA9IGZpcnN0RW1wdHlJbmRleCA9PT0gLTEgPyBpbmRleCA9PT0gbGVuZ3RoIC0gMSA6IGZpcnN0RW1wdHlJbmRleCA9PT0gaW5kZXg7XG4gICAgICBpbnB1dC50YWJJbmRleCA9IHNob3VsZEJlVGFiYmFibGUgPyAwIDogLTE7XG4gICAgICAvLyBJZiB0aGUgaW5wdXQgaXMgZW1wdHkgYW5kIG5vdCB0aGUgZmlyc3QgZW1wdHkgaW5wdXQsXG4gICAgICAvLyBpdCBzaG91bGQgYmUgaGlkZGVuIGZyb20gc2NyZWVuIHJlYWRlcnMuXG4gICAgICBjb25zdCBpc0VtcHR5ID0gIWlucHV0VmFsdWVzW2luZGV4XSB8fCBpbnB1dFZhbHVlc1tpbmRleF0gPT09ICcnO1xuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIGlzRW1wdHkgJiYgIXNob3VsZEJlVGFiYmFibGUgPyAndHJ1ZScgOiAnZmFsc2UnKTtcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogRGV0ZXJtaW5lcyBpZiBhIHNlcGFyYXRvciBzaG91bGQgYmUgc2hvd24gZm9yIGEgZ2l2ZW4gaW5kZXggYnlcbiAgICogY2hlY2tpbmcgaWYgdGhlIGluZGV4IGlzIGluY2x1ZGVkIGluIHRoZSBwYXJzZWQgc2VwYXJhdG9ycyBhcnJheS5cbiAgICovXG4gIHNob3dTZXBhcmF0b3IoaW5kZXgpIHtcbiAgICBjb25zdCB7XG4gICAgICBsZW5ndGhcbiAgICB9ID0gdGhpcztcbiAgICByZXR1cm4gdGhpcy5wYXJzZWRTZXBhcmF0b3JzLmluY2x1ZGVzKGluZGV4ICsgMSkgJiYgaW5kZXggPCBsZW5ndGggLSAxO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIGNvbnN0IHtcbiAgICAgIGF1dG9jYXBpdGFsaXplLFxuICAgICAgY29sb3IsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGVsLFxuICAgICAgZmlsbCxcbiAgICAgIGhhc0ZvY3VzLFxuICAgICAgaW5oZXJpdGVkQXR0cmlidXRlcyxcbiAgICAgIGlucHV0SWQsXG4gICAgICBpbnB1dFJlZnMsXG4gICAgICBpbnB1dFZhbHVlcyxcbiAgICAgIGxlbmd0aCxcbiAgICAgIHJlYWRvbmx5LFxuICAgICAgc2hhcGUsXG4gICAgICBzaXplXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgY29uc3QgaW5wdXRtb2RlID0gdGhpcy5nZXRJbnB1dG1vZGUoKTtcbiAgICBjb25zdCB0YWJiYWJsZUluZGV4ID0gdGhpcy5nZXRUYWJiYWJsZUluZGV4KCk7XG4gICAgY29uc3QgcGF0dGVybiA9IHRoaXMuZ2V0UGF0dGVybigpO1xuICAgIGNvbnN0IGhhc0Rlc2NyaXB0aW9uID0gKChfYiA9IChfYSA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1vdHAtZGVzY3JpcHRpb24nKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRleHRDb250ZW50KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IudHJpbSgpKSAhPT0gJyc7XG4gICAgcmV0dXJuIGgoSG9zdCwge1xuICAgICAga2V5OiAnZjE1YTI5ZmIxN2I2ODFlZjU1ODg1Y2EzNmQzZDVmODk5Y2JhY2E4MycsXG4gICAgICBjbGFzczogY3JlYXRlQ29sb3JDbGFzc2VzKGNvbG9yLCB7XG4gICAgICAgIFttb2RlXTogdHJ1ZSxcbiAgICAgICAgJ2hhcy1mb2N1cyc6IGhhc0ZvY3VzLFxuICAgICAgICBbYGlucHV0LW90cC1zaXplLSR7c2l6ZX1gXTogdHJ1ZSxcbiAgICAgICAgW2BpbnB1dC1vdHAtc2hhcGUtJHtzaGFwZX1gXTogdHJ1ZSxcbiAgICAgICAgW2BpbnB1dC1vdHAtZmlsbC0ke2ZpbGx9YF06IHRydWUsXG4gICAgICAgICdpbnB1dC1vdHAtZGlzYWJsZWQnOiBkaXNhYmxlZCxcbiAgICAgICAgJ2lucHV0LW90cC1yZWFkb25seSc6IHJlYWRvbmx5XG4gICAgICB9KVxuICAgIH0sIGgoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgICBrZXk6ICdkN2UxZDRlZGQ4YWFmY2YyZWQ0MzEzMzAxMjg3MjgyZTkwZmM3ZTgyJyxcbiAgICAgIHJvbGU6IFwiZ3JvdXBcIixcbiAgICAgIFwiYXJpYS1sYWJlbFwiOiBcIk9uZS10aW1lIHBhc3N3b3JkIGlucHV0XCIsXG4gICAgICBjbGFzczogXCJpbnB1dC1vdHAtZ3JvdXBcIlxuICAgIH0sIGluaGVyaXRlZEF0dHJpYnV0ZXMpLCBBcnJheS5mcm9tKHtcbiAgICAgIGxlbmd0aFxuICAgIH0pLm1hcCgoXywgaW5kZXgpID0+IGgoRnJhZ21lbnQsIG51bGwsIGgoXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IFwibmF0aXZlLXdyYXBwZXJcIlxuICAgIH0sIGgoXCJpbnB1dFwiLCB7XG4gICAgICBjbGFzczogXCJuYXRpdmUtaW5wdXRcIixcbiAgICAgIGlkOiBgJHtpbnB1dElkfS0ke2luZGV4fWAsXG4gICAgICBcImFyaWEtbGFiZWxcIjogYElucHV0ICR7aW5kZXggKyAxfSBvZiAke2xlbmd0aH1gLFxuICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICBhdXRvQ2FwaXRhbGl6ZTogYXV0b2NhcGl0YWxpemUsXG4gICAgICBpbnB1dG1vZGU6IGlucHV0bW9kZSxcbiAgICAgIHBhdHRlcm46IHBhdHRlcm4sXG4gICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICByZWFkT25seTogcmVhZG9ubHksXG4gICAgICB0YWJJbmRleDogaW5kZXggPT09IHRhYmJhYmxlSW5kZXggPyAwIDogLTEsXG4gICAgICB2YWx1ZTogaW5wdXRWYWx1ZXNbaW5kZXhdIHx8ICcnLFxuICAgICAgYXV0b2NvbXBsZXRlOiBcIm9uZS10aW1lLWNvZGVcIixcbiAgICAgIHJlZjogZWwgPT4gaW5wdXRSZWZzW2luZGV4XSA9IGVsLFxuICAgICAgb25JbnB1dDogdGhpcy5vbklucHV0KGluZGV4KSxcbiAgICAgIG9uQmx1cjogdGhpcy5vbkJsdXIsXG4gICAgICBvbkZvY3VzOiB0aGlzLm9uRm9jdXMoaW5kZXgpLFxuICAgICAgb25LZXlEb3duOiB0aGlzLm9uS2V5RG93bihpbmRleCksXG4gICAgICBvblBhc3RlOiB0aGlzLm9uUGFzdGVcbiAgICB9KSksIHRoaXMuc2hvd1NlcGFyYXRvcihpbmRleCkgJiYgaChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJpbnB1dC1vdHAtc2VwYXJhdG9yXCJcbiAgICB9KSkpKSwgaChcImRpdlwiLCB7XG4gICAgICBrZXk6ICczNzI0YTMxNTlkMDI4NjA5NzE4NzlhOTA2MDkyZjk5NjVmNWE3YzQ3JyxcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgICdpbnB1dC1vdHAtZGVzY3JpcHRpb24nOiB0cnVlLFxuICAgICAgICAnaW5wdXQtb3RwLWRlc2NyaXB0aW9uLWhpZGRlbic6ICFoYXNEZXNjcmlwdGlvblxuICAgICAgfVxuICAgIH0sIGgoXCJzbG90XCIsIHtcbiAgICAgIGtleTogJzExYmFhMjYyNDkyNmEwODI3NDUwOGFmZTA4MzNkOTIzN2E4ZGMzNWMnXG4gICAgfSkpKTtcbiAgfVxuICBnZXQgZWwoKSB7XG4gICAgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7XG4gIH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJ2YWx1ZVwiOiBbXCJ2YWx1ZUNoYW5nZWRcIl0sXG4gICAgICBcInNlcGFyYXRvcnNcIjogW1wicHJvY2Vzc1NlcGFyYXRvcnNcIl0sXG4gICAgICBcImxlbmd0aFwiOiBbXCJwcm9jZXNzU2VwYXJhdG9yc1wiXVxuICAgIH07XG4gIH1cbn07XG5sZXQgaW5wdXRJZHMgPSAwO1xuSW5wdXRPVFAuc3R5bGUgPSB7XG4gIGlvczogaW5wdXRPdHBJb3NDc3MsXG4gIG1kOiBpbnB1dE90cE1kQ3NzXG59O1xuZXhwb3J0IHsgSW5wdXRPVFAgYXMgaW9uX2lucHV0X290cCB9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LEVBQUUsVUFBVSxNQUFNLEVBQUUsT0FBTztBQUFBLE1BQzlDLE9BQU87QUFBQSxJQUNULEdBQUcsRUFBRSxTQUFTO0FBQUEsTUFDWixPQUFPO0FBQUEsTUFDUCxJQUFJLEdBQUcsT0FBTyxJQUFJLEtBQUs7QUFBQSxNQUN2QixjQUFjLFNBQVMsUUFBUSxDQUFDLE9BQU8sTUFBTTtBQUFBLE1BQzdDLE1BQU07QUFBQSxNQUNOLGdCQUFnQjtBQUFBLE1BQ2hCO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBLFVBQVU7QUFBQSxNQUNWLFVBQVUsVUFBVSxnQkFBZ0IsSUFBSTtBQUFBLE1BQ3hDLE9BQU8sWUFBWSxLQUFLLEtBQUs7QUFBQSxNQUM3QixjQUFjO0FBQUEsTUFDZCxLQUFLLENBQUFDLFFBQU0sVUFBVSxLQUFLLElBQUlBO0FBQUEsTUFDOUIsU0FBUyxLQUFLLFFBQVEsS0FBSztBQUFBLE1BQzNCLFFBQVEsS0FBSztBQUFBLE1BQ2IsU0FBUyxLQUFLLFFBQVEsS0FBSztBQUFBLE1BQzNCLFdBQVcsS0FBSyxVQUFVLEtBQUs7QUFBQSxNQUMvQixTQUFTLEtBQUs7QUFBQSxJQUNoQixDQUFDLENBQUMsR0FBRyxLQUFLLGNBQWMsS0FBSyxLQUFLLEVBQUUsT0FBTztBQUFBLE1BQ3pDLE9BQU87QUFBQSxJQUNULENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLE9BQU87QUFBQSxNQUNkLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxRQUNMLHlCQUF5QjtBQUFBLFFBQ3pCLGdDQUFnQyxDQUFDO0FBQUEsTUFDbkM7QUFBQSxJQUNGLEdBQUcsRUFBRSxRQUFRO0FBQUEsTUFDWCxLQUFLO0FBQUEsSUFDUCxDQUFDLENBQUMsQ0FBQztBQUFBLEVBQ0w7QUFBQSxFQUNBLElBQUksS0FBSztBQUNQLFdBQU8sV0FBVyxJQUFJO0FBQUEsRUFDeEI7QUFBQSxFQUNBLFdBQVcsV0FBVztBQUNwQixXQUFPO0FBQUEsTUFDTCxTQUFTLENBQUMsY0FBYztBQUFBLE1BQ3hCLGNBQWMsQ0FBQyxtQkFBbUI7QUFBQSxNQUNsQyxVQUFVLENBQUMsbUJBQW1CO0FBQUEsSUFDaEM7QUFBQSxFQUNGO0FBQ0Y7QUFDQSxJQUFJLFdBQVc7QUFDZixTQUFTLFFBQVE7QUFBQSxFQUNmLEtBQUs7QUFBQSxFQUNMLElBQUk7QUFDTjsiLCJuYW1lcyI6WyJpbnB1dCIsIl9hIiwibmV3Q2hhciIsImVsIl0sInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswXX0=
