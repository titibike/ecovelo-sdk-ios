import {
  isOptionSelected
} from "./chunk-Y75TVRVW.js";
import {
  createColorClasses,
  hostContext
} from "./chunk-5VP4V3BN.js";
import {
  getIonMode
} from "./chunk-TXLH22R2.js";
import {
  addEventListener,
  removeEventListener,
  renderHiddenInput
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

// node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js
var radioIosCss = ':host{--inner-border-radius:50%;display:inline-block;position:relative;max-width:100%;min-height:inherit;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;contain:layout size style}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host(:focus){outline:none}:host(.in-item){-ms-flex:1 1 0px;flex:1 1 0;width:100%;height:100%}:host([slot=start]),:host([slot=end]){-ms-flex:initial;flex:initial;width:auto}.radio-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;height:inherit;min-height:inherit;cursor:inherit}.label-text-wrapper{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host(.in-item) .label-text-wrapper{margin-top:10px;margin-bottom:10px}:host(.in-item.radio-label-placement-stacked) .label-text-wrapper{margin-top:10px;margin-bottom:16px}:host(.in-item.radio-label-placement-stacked) .native-wrapper{margin-bottom:10px}.label-text-wrapper-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host(.radio-justify-space-between) .radio-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.radio-justify-start) .radio-wrapper{-ms-flex-pack:start;justify-content:start}:host(.radio-justify-end) .radio-wrapper{-ms-flex-pack:end;justify-content:end}:host(.radio-alignment-start) .radio-wrapper{-ms-flex-align:start;align-items:start}:host(.radio-alignment-center) .radio-wrapper{-ms-flex-align:center;align-items:center}:host(.radio-justify-space-between),:host(.radio-justify-start),:host(.radio-justify-end),:host(.radio-alignment-start),:host(.radio-alignment-center){display:block}:host(.radio-label-placement-start) .radio-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.radio-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.radio-label-placement-end) .radio-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.radio-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}:host(.radio-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.radio-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px}:host(.radio-label-placement-stacked) .radio-wrapper{-ms-flex-direction:column;flex-direction:column}:host(.radio-label-placement-stacked) .label-text-wrapper{-webkit-transform:scale(0.75);transform:scale(0.75);margin-left:0;margin-right:0;margin-bottom:16px;max-width:calc(100% / 0.75)}:host(.radio-label-placement-stacked.radio-alignment-start) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top}:host-context([dir=rtl]):host(.radio-label-placement-stacked.radio-alignment-start) .label-text-wrapper,:host-context([dir=rtl]).radio-label-placement-stacked.radio-alignment-start .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){:host(.radio-label-placement-stacked.radio-alignment-start:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}}:host(.radio-label-placement-stacked.radio-alignment-center) .label-text-wrapper{-webkit-transform-origin:center top;transform-origin:center top}:host-context([dir=rtl]):host(.radio-label-placement-stacked.radio-alignment-center) .label-text-wrapper,:host-context([dir=rtl]).radio-label-placement-stacked.radio-alignment-center .label-text-wrapper{-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}@supports selector(:dir(rtl)){:host(.radio-label-placement-stacked.radio-alignment-center:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}}:host{--color-checked:var(--ion-color-primary, #0054e9)}:host(.ion-color.radio-checked) .radio-inner{border-color:var(--ion-color-base)}.item-radio.item-ios ion-label{-webkit-margin-start:0;margin-inline-start:0}.radio-inner{width:33%;height:50%}:host(.radio-checked) .radio-inner{-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:0.125rem;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--color-checked)}:host(.radio-disabled){opacity:0.3}:host(.ion-focused) .radio-icon::after{border-radius:var(--inner-border-radius);top:-8px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint, #1a65eb);content:"";opacity:0.2}:host(.ion-focused) .radio-icon::after{inset-inline-start:-9px}.native-wrapper .radio-icon{width:0.9375rem;height:1.5rem}';
var radioMdCss = ':host{--inner-border-radius:50%;display:inline-block;position:relative;max-width:100%;min-height:inherit;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;contain:layout size style}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host(:focus){outline:none}:host(.in-item){-ms-flex:1 1 0px;flex:1 1 0;width:100%;height:100%}:host([slot=start]),:host([slot=end]){-ms-flex:initial;flex:initial;width:auto}.radio-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;height:inherit;min-height:inherit;cursor:inherit}.label-text-wrapper{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host(.in-item) .label-text-wrapper{margin-top:10px;margin-bottom:10px}:host(.in-item.radio-label-placement-stacked) .label-text-wrapper{margin-top:10px;margin-bottom:16px}:host(.in-item.radio-label-placement-stacked) .native-wrapper{margin-bottom:10px}.label-text-wrapper-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host(.radio-justify-space-between) .radio-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.radio-justify-start) .radio-wrapper{-ms-flex-pack:start;justify-content:start}:host(.radio-justify-end) .radio-wrapper{-ms-flex-pack:end;justify-content:end}:host(.radio-alignment-start) .radio-wrapper{-ms-flex-align:start;align-items:start}:host(.radio-alignment-center) .radio-wrapper{-ms-flex-align:center;align-items:center}:host(.radio-justify-space-between),:host(.radio-justify-start),:host(.radio-justify-end),:host(.radio-alignment-start),:host(.radio-alignment-center){display:block}:host(.radio-label-placement-start) .radio-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.radio-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.radio-label-placement-end) .radio-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.radio-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}:host(.radio-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.radio-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px}:host(.radio-label-placement-stacked) .radio-wrapper{-ms-flex-direction:column;flex-direction:column}:host(.radio-label-placement-stacked) .label-text-wrapper{-webkit-transform:scale(0.75);transform:scale(0.75);margin-left:0;margin-right:0;margin-bottom:16px;max-width:calc(100% / 0.75)}:host(.radio-label-placement-stacked.radio-alignment-start) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top}:host-context([dir=rtl]):host(.radio-label-placement-stacked.radio-alignment-start) .label-text-wrapper,:host-context([dir=rtl]).radio-label-placement-stacked.radio-alignment-start .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){:host(.radio-label-placement-stacked.radio-alignment-start:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}}:host(.radio-label-placement-stacked.radio-alignment-center) .label-text-wrapper{-webkit-transform-origin:center top;transform-origin:center top}:host-context([dir=rtl]):host(.radio-label-placement-stacked.radio-alignment-center) .label-text-wrapper,:host-context([dir=rtl]).radio-label-placement-stacked.radio-alignment-center .label-text-wrapper{-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}@supports selector(:dir(rtl)){:host(.radio-label-placement-stacked.radio-alignment-center:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}}:host{--color:rgb(var(--ion-text-color-rgb, 0, 0, 0), 0.6);--color-checked:var(--ion-color-primary, #0054e9);--border-width:0.125rem;--border-style:solid;--border-radius:50%}:host(.ion-color) .radio-inner{background:var(--ion-color-base)}:host(.ion-color.radio-checked) .radio-icon{border-color:var(--ion-color-base)}.radio-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:var(--border-radius);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--color)}.radio-inner{border-radius:var(--inner-border-radius);width:calc(50% + var(--border-width));height:calc(50% + var(--border-width));-webkit-transform:scale3d(0, 0, 0);transform:scale3d(0, 0, 0);-webkit-transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);background:var(--color-checked)}:host(.radio-checked) .radio-icon{border-color:var(--color-checked)}:host(.radio-checked) .radio-inner{-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1)}:host(.radio-disabled) .label-text-wrapper{opacity:0.38}:host(.radio-disabled) .native-wrapper{opacity:0.63}:host(.ion-focused) .radio-icon::after{border-radius:var(--inner-border-radius);display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint, #1a65eb);content:"";opacity:0.2}.native-wrapper .radio-icon{width:1.25rem;height:1.25rem}';
var Radio = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionFocus = createEvent(this, "ionFocus", 7);
    this.ionBlur = createEvent(this, "ionBlur", 7);
    this.inputId = `ion-rb-${radioButtonIds++}`;
    this.radioGroup = null;
    this.checked = false;
    this.buttonTabindex = -1;
    this.name = this.inputId;
    this.disabled = false;
    this.labelPlacement = "start";
    this.updateState = () => {
      if (this.radioGroup) {
        const {
          compareWith,
          value: radioGroupValue
        } = this.radioGroup;
        this.checked = isOptionSelected(radioGroupValue, this.value, compareWith);
      }
    };
    this.onClick = () => {
      const {
        radioGroup,
        checked,
        disabled
      } = this;
      if (disabled) {
        return;
      }
      if (checked && (radioGroup === null || radioGroup === void 0 ? void 0 : radioGroup.allowEmptySelection)) {
        this.checked = false;
      } else {
        this.checked = true;
      }
    };
    this.onFocus = () => {
      this.ionFocus.emit();
    };
    this.onBlur = () => {
      this.ionBlur.emit();
    };
  }
  valueChanged() {
    this.updateState();
  }
  componentDidLoad() {
    this.updateState();
  }
  /** @internal */
  setFocus(ev) {
    return __async(this, null, function* () {
      if (ev !== void 0) {
        ev.stopPropagation();
        ev.preventDefault();
      }
      this.el.focus();
    });
  }
  /** @internal */
  setButtonTabindex(value) {
    return __async(this, null, function* () {
      this.buttonTabindex = value;
    });
  }
  connectedCallback() {
    if (this.value === void 0) {
      this.value = this.inputId;
    }
    const radioGroup = this.radioGroup = this.el.closest("ion-radio-group");
    if (radioGroup) {
      this.updateState();
      addEventListener(radioGroup, "ionValueChange", this.updateState);
    }
  }
  disconnectedCallback() {
    const radioGroup = this.radioGroup;
    if (radioGroup) {
      removeEventListener(radioGroup, "ionValueChange", this.updateState);
      this.radioGroup = null;
    }
  }
  get hasLabel() {
    return this.el.textContent !== "";
  }
  renderRadioControl() {
    return h("div", {
      class: "radio-icon",
      part: "container"
    }, h("div", {
      class: "radio-inner",
      part: "mark"
    }), h("div", {
      class: "radio-ripple"
    }));
  }
  render() {
    const {
      checked,
      disabled,
      color,
      el,
      justify,
      labelPlacement,
      hasLabel,
      buttonTabindex,
      alignment
    } = this;
    const mode = getIonMode(this);
    const inItem = hostContext("ion-item", el);
    return h(Host, {
      key: "3353b28172b7f837d4b38964169b5b5f4ba02788",
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onClick: this.onClick,
      class: createColorClasses(color, {
        [mode]: true,
        "in-item": inItem,
        "radio-checked": checked,
        "radio-disabled": disabled,
        [`radio-justify-${justify}`]: justify !== void 0,
        [`radio-alignment-${alignment}`]: alignment !== void 0,
        [`radio-label-placement-${labelPlacement}`]: true,
        // Focus and active styling should not apply when the radio is in an item
        "ion-activatable": !inItem,
        "ion-focusable": !inItem
      }),
      role: "radio",
      "aria-checked": checked ? "true" : "false",
      "aria-disabled": disabled ? "true" : null,
      tabindex: buttonTabindex
    }, h("label", {
      key: "418a0a48366ff900e97da123abf665bbbda87fb7",
      class: "radio-wrapper"
    }, h("div", {
      key: "6e5acdd8c8f5d0ad26632a65396afef8094153d1",
      class: {
        "label-text-wrapper": true,
        "label-text-wrapper-hidden": !hasLabel
      },
      part: "label"
    }, h("slot", {
      key: "10b157162cd283d624153c747679609cf0bbf11e"
    })), h("div", {
      key: "4c45cca95cb105cd6df1025a26e3c045272184a0",
      class: "native-wrapper"
    }, this.renderRadioControl())));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "value": ["valueChanged"]
    };
  }
};
var radioButtonIds = 0;
Radio.style = {
  ios: radioIosCss,
  md: radioMdCss
};
var radioGroupIosCss = "ion-radio-group{vertical-align:top}.radio-group-wrapper{display:inline}.radio-group-top{line-height:1.5}.radio-group-top .error-text{display:none;color:var(--ion-color-danger, #c5000f)}.radio-group-top .helper-text{display:block;color:var(--ion-color-step-700, var(--ion-text-color-step-300, #4d4d4d))}.ion-touched.ion-invalid .radio-group-top .error-text{display:block}.ion-touched.ion-invalid .radio-group-top .helper-text{display:none}ion-list .radio-group-top{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}";
var radioGroupMdCss = "ion-radio-group{vertical-align:top}.radio-group-wrapper{display:inline}.radio-group-top{line-height:1.5}.radio-group-top .error-text{display:none;color:var(--ion-color-danger, #c5000f)}.radio-group-top .helper-text{display:block;color:var(--ion-color-step-700, var(--ion-text-color-step-300, #4d4d4d))}.ion-touched.ion-invalid .radio-group-top .error-text{display:block}.ion-touched.ion-invalid .radio-group-top .helper-text{display:none}ion-list .radio-group-top{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}";
var RadioGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionChange = createEvent(this, "ionChange", 7);
    this.ionValueChange = createEvent(this, "ionValueChange", 7);
    this.inputId = `ion-rg-${radioGroupIds++}`;
    this.helperTextId = `${this.inputId}-helper-text`;
    this.errorTextId = `${this.inputId}-error-text`;
    this.labelId = `${this.inputId}-lbl`;
    this.allowEmptySelection = false;
    this.name = this.inputId;
    this.setRadioTabindex = (value) => {
      const radios = this.getRadios();
      const first = radios.find((radio) => !radio.disabled);
      const checked = radios.find((radio) => radio.value === value && !radio.disabled);
      if (!first && !checked) {
        return;
      }
      const focusable = checked || first;
      for (const radio of radios) {
        const tabindex = radio === focusable ? 0 : -1;
        radio.setButtonTabindex(tabindex);
      }
    };
    this.onClick = (ev) => {
      ev.preventDefault();
      const selectedRadio = ev.target && ev.target.closest("ion-radio");
      if (selectedRadio && !selectedRadio.disabled) {
        const currentValue = this.value;
        const newValue = selectedRadio.value;
        if (newValue !== currentValue) {
          this.value = newValue;
          this.emitValueChange(ev);
        } else if (this.allowEmptySelection) {
          this.value = void 0;
          this.emitValueChange(ev);
        }
      }
    };
  }
  valueChanged(value) {
    this.setRadioTabindex(value);
    this.ionValueChange.emit({
      value
    });
  }
  componentDidLoad() {
    this.valueChanged(this.value);
  }
  connectedCallback() {
    return __async(this, null, function* () {
      const header = this.el.querySelector("ion-list-header") || this.el.querySelector("ion-item-divider");
      if (header) {
        const label = this.label = header.querySelector("ion-label");
        if (label) {
          this.labelId = label.id = this.name + "-lbl";
        }
      }
    });
  }
  getRadios() {
    return Array.from(this.el.querySelectorAll("ion-radio"));
  }
  /**
   * Emits an `ionChange` event.
   *
   * This API should be called for user committed changes.
   * This API should not be used for external value changes.
   */
  emitValueChange(event) {
    const {
      value
    } = this;
    this.ionChange.emit({
      value,
      event
    });
  }
  onKeydown(ev) {
    const inSelectInterface = !!this.el.closest("ion-select-popover") || !!this.el.closest("ion-select-modal");
    if (ev.target && !this.el.contains(ev.target)) {
      return;
    }
    const radios = this.getRadios().filter((radio) => !radio.disabled);
    if (ev.target && radios.includes(ev.target)) {
      const index = radios.findIndex((radio) => radio === ev.target);
      const current = radios[index];
      let next;
      if (["ArrowDown", "ArrowRight"].includes(ev.key)) {
        next = index === radios.length - 1 ? radios[0] : radios[index + 1];
      }
      if (["ArrowUp", "ArrowLeft"].includes(ev.key)) {
        next = index === 0 ? radios[radios.length - 1] : radios[index - 1];
      }
      if (next && radios.includes(next)) {
        next.setFocus(ev);
        if (!inSelectInterface) {
          this.value = next.value;
          this.emitValueChange(ev);
        }
      }
      if ([" "].includes(ev.key)) {
        const previousValue = this.value;
        this.value = this.allowEmptySelection && this.value !== void 0 ? void 0 : current.value;
        if (previousValue !== this.value || this.allowEmptySelection) {
          this.emitValueChange(ev);
        }
        ev.preventDefault();
      }
    }
  }
  /** @internal */
  setFocus() {
    return __async(this, null, function* () {
      const radioToFocus = this.getRadios().find((r) => r.tabIndex !== -1);
      radioToFocus === null || radioToFocus === void 0 ? void 0 : radioToFocus.setFocus();
    });
  }
  /**
   * Renders the helper text or error text values
   */
  renderHintText() {
    const {
      helperText,
      errorText,
      helperTextId,
      errorTextId
    } = this;
    const hasHintText = !!helperText || !!errorText;
    if (!hasHintText) {
      return;
    }
    return h("div", {
      class: "radio-group-top"
    }, h("div", {
      id: helperTextId,
      class: "helper-text"
    }, helperText), h("div", {
      id: errorTextId,
      class: "error-text"
    }, errorText));
  }
  getHintTextID() {
    const {
      el,
      helperText,
      errorText,
      helperTextId,
      errorTextId
    } = this;
    if (el.classList.contains("ion-touched") && el.classList.contains("ion-invalid") && errorText) {
      return errorTextId;
    }
    if (helperText) {
      return helperTextId;
    }
    return void 0;
  }
  render() {
    const {
      label,
      labelId,
      el,
      name,
      value
    } = this;
    const mode = getIonMode(this);
    renderHiddenInput(true, el, name, value, false);
    return h(Host, {
      key: "81b8ebc96b2f383c36717f290d2959cc921ad6e8",
      role: "radiogroup",
      "aria-labelledby": label ? labelId : null,
      "aria-describedby": this.getHintTextID(),
      "aria-invalid": this.getHintTextID() === this.errorTextId,
      onClick: this.onClick,
      class: mode
    }, this.renderHintText(), h("div", {
      key: "45b09efc10776b889a8f372cba80d25a3fc849da",
      class: "radio-group-wrapper"
    }, h("slot", {
      key: "58714934542c2fdd7396de160364f3f06b32e8f8"
    })));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "value": ["valueChanged"]
    };
  }
};
var radioGroupIds = 0;
RadioGroup.style = {
  ios: radioGroupIosCss,
  md: radioGroupMdCss
};
export {
  Radio as ion_radio,
  RadioGroup as ion_radio_group
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-radio_2.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tcmFkaW9fMi5lbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGNyZWF0ZUV2ZW50LCBoLCBkIGFzIEhvc3QsIGcgYXMgZ2V0RWxlbWVudCB9IGZyb20gJy4vaW5kZXgtNER4WTZfZ0cuanMnO1xuaW1wb3J0IHsgZiBhcyBhZGRFdmVudExpc3RlbmVyLCBtIGFzIHJlbW92ZUV2ZW50TGlzdGVuZXIsIGEgYXMgcmVuZGVySGlkZGVuSW5wdXQgfSBmcm9tICcuL2hlbHBlcnMtOEtTUVFHUXkuanMnO1xuaW1wb3J0IHsgaSBhcyBpc09wdGlvblNlbGVjdGVkIH0gZnJvbSAnLi9jb21wYXJlLXdpdGgtdXRpbHMtc09iWXl2T3kuanMnO1xuaW1wb3J0IHsgaCBhcyBob3N0Q29udGV4dCwgYyBhcyBjcmVhdGVDb2xvckNsYXNzZXMgfSBmcm9tICcuL3RoZW1lLURpVkp5cWxYLmpzJztcbmltcG9ydCB7IGIgYXMgZ2V0SW9uTW9kZSB9IGZyb20gJy4vaW9uaWMtZ2xvYmFsLUNUU3l1ZmhGLmpzJztcbmNvbnN0IHJhZGlvSW9zQ3NzID0gXCI6aG9zdHstLWlubmVyLWJvcmRlci1yYWRpdXM6NTAlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO21heC13aWR0aDoxMDAlO21pbi1oZWlnaHQ6aW5oZXJpdDtjdXJzb3I6cG9pbnRlcjstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7ei1pbmRleDoyOy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveH06aG9zdCgucmFkaW8tZGlzYWJsZWQpe3BvaW50ZXItZXZlbnRzOm5vbmV9LnJhZGlvLWljb257ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Y29udGFpbjpsYXlvdXQgc2l6ZSBzdHlsZX0ucmFkaW8taWNvbiwucmFkaW8taW5uZXJ7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94fWlucHV0e3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDtyaWdodDowO2JvdHRvbTowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7bWFyZ2luOjA7cGFkZGluZzowO2JvcmRlcjowO291dGxpbmU6MDtjbGlwOnJlY3QoMCAwIDAgMCk7b3BhY2l0eTowO292ZXJmbG93OmhpZGRlbjstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZX06aG9zdCg6Zm9jdXMpe291dGxpbmU6bm9uZX06aG9zdCguaW4taXRlbSl7LW1zLWZsZXg6MSAxIDBweDtmbGV4OjEgMSAwO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9Omhvc3QoW3Nsb3Q9c3RhcnRdKSw6aG9zdChbc2xvdD1lbmRdKXstbXMtZmxleDppbml0aWFsO2ZsZXg6aW5pdGlhbDt3aWR0aDphdXRvfS5yYWRpby13cmFwcGVye2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4LXBvc2l0aXZlOjE7ZmxleC1ncm93OjE7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmp1c3RpZnk7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47aGVpZ2h0OmluaGVyaXQ7bWluLWhlaWdodDppbmhlcml0O2N1cnNvcjppbmhlcml0fS5sYWJlbC10ZXh0LXdyYXBwZXJ7dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVufTpob3N0KC5pbi1pdGVtKSAubGFiZWwtdGV4dC13cmFwcGVye21hcmdpbi10b3A6MTBweDttYXJnaW4tYm90dG9tOjEwcHh9Omhvc3QoLmluLWl0ZW0ucmFkaW8tbGFiZWwtcGxhY2VtZW50LXN0YWNrZWQpIC5sYWJlbC10ZXh0LXdyYXBwZXJ7bWFyZ2luLXRvcDoxMHB4O21hcmdpbi1ib3R0b206MTZweH06aG9zdCguaW4taXRlbS5yYWRpby1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZCkgLm5hdGl2ZS13cmFwcGVye21hcmdpbi1ib3R0b206MTBweH0ubGFiZWwtdGV4dC13cmFwcGVyLWhpZGRlbntkaXNwbGF5Om5vbmV9Lm5hdGl2ZS13cmFwcGVye2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXJ9Omhvc3QoLnJhZGlvLWp1c3RpZnktc3BhY2UtYmV0d2VlbikgLnJhZGlvLXdyYXBwZXJ7LW1zLWZsZXgtcGFjazpqdXN0aWZ5O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufTpob3N0KC5yYWRpby1qdXN0aWZ5LXN0YXJ0KSAucmFkaW8td3JhcHBlcnstbXMtZmxleC1wYWNrOnN0YXJ0O2p1c3RpZnktY29udGVudDpzdGFydH06aG9zdCgucmFkaW8tanVzdGlmeS1lbmQpIC5yYWRpby13cmFwcGVyey1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDplbmR9Omhvc3QoLnJhZGlvLWFsaWdubWVudC1zdGFydCkgLnJhZGlvLXdyYXBwZXJ7LW1zLWZsZXgtYWxpZ246c3RhcnQ7YWxpZ24taXRlbXM6c3RhcnR9Omhvc3QoLnJhZGlvLWFsaWdubWVudC1jZW50ZXIpIC5yYWRpby13cmFwcGVyey1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXJ9Omhvc3QoLnJhZGlvLWp1c3RpZnktc3BhY2UtYmV0d2VlbiksOmhvc3QoLnJhZGlvLWp1c3RpZnktc3RhcnQpLDpob3N0KC5yYWRpby1qdXN0aWZ5LWVuZCksOmhvc3QoLnJhZGlvLWFsaWdubWVudC1zdGFydCksOmhvc3QoLnJhZGlvLWFsaWdubWVudC1jZW50ZXIpe2Rpc3BsYXk6YmxvY2t9Omhvc3QoLnJhZGlvLWxhYmVsLXBsYWNlbWVudC1zdGFydCkgLnJhZGlvLXdyYXBwZXJ7LW1zLWZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LWRpcmVjdGlvbjpyb3d9Omhvc3QoLnJhZGlvLWxhYmVsLXBsYWNlbWVudC1zdGFydCkgLmxhYmVsLXRleHQtd3JhcHBlcnstd2Via2l0LW1hcmdpbi1zdGFydDowO21hcmdpbi1pbmxpbmUtc3RhcnQ6MDstd2Via2l0LW1hcmdpbi1lbmQ6MTZweDttYXJnaW4taW5saW5lLWVuZDoxNnB4fTpob3N0KC5yYWRpby1sYWJlbC1wbGFjZW1lbnQtZW5kKSAucmFkaW8td3JhcHBlcnstbXMtZmxleC1kaXJlY3Rpb246cm93LXJldmVyc2U7ZmxleC1kaXJlY3Rpb246cm93LXJldmVyc2V9Omhvc3QoLnJhZGlvLWxhYmVsLXBsYWNlbWVudC1lbmQpIC5sYWJlbC10ZXh0LXdyYXBwZXJ7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MTZweDttYXJnaW4taW5saW5lLXN0YXJ0OjE2cHg7LXdlYmtpdC1tYXJnaW4tZW5kOjA7bWFyZ2luLWlubGluZS1lbmQ6MH06aG9zdCgucmFkaW8tbGFiZWwtcGxhY2VtZW50LWZpeGVkKSAubGFiZWwtdGV4dC13cmFwcGVyey13ZWJraXQtbWFyZ2luLXN0YXJ0OjA7bWFyZ2luLWlubGluZS1zdGFydDowOy13ZWJraXQtbWFyZ2luLWVuZDoxNnB4O21hcmdpbi1pbmxpbmUtZW5kOjE2cHh9Omhvc3QoLnJhZGlvLWxhYmVsLXBsYWNlbWVudC1maXhlZCkgLmxhYmVsLXRleHQtd3JhcHBlcnstbXMtZmxleDowIDAgMTAwcHg7ZmxleDowIDAgMTAwcHg7d2lkdGg6MTAwcHg7bWluLXdpZHRoOjEwMHB4fTpob3N0KC5yYWRpby1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZCkgLnJhZGlvLXdyYXBwZXJ7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW59Omhvc3QoLnJhZGlvLWxhYmVsLXBsYWNlbWVudC1zdGFja2VkKSAubGFiZWwtdGV4dC13cmFwcGVyey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDAuNzUpO3RyYW5zZm9ybTpzY2FsZSgwLjc1KTttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi1ib3R0b206MTZweDttYXgtd2lkdGg6Y2FsYygxMDAlIC8gMC43NSl9Omhvc3QoLnJhZGlvLWxhYmVsLXBsYWNlbWVudC1zdGFja2VkLnJhZGlvLWFsaWdubWVudC1zdGFydCkgLmxhYmVsLXRleHQtd3JhcHBlcnstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46bGVmdCB0b3A7dHJhbnNmb3JtLW9yaWdpbjpsZWZ0IHRvcH06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCgucmFkaW8tbGFiZWwtcGxhY2VtZW50LXN0YWNrZWQucmFkaW8tYWxpZ25tZW50LXN0YXJ0KSAubGFiZWwtdGV4dC13cmFwcGVyLDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5yYWRpby1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZC5yYWRpby1hbGlnbm1lbnQtc3RhcnQgLmxhYmVsLXRleHQtd3JhcHBlcnstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46cmlnaHQgdG9wO3RyYW5zZm9ybS1vcmlnaW46cmlnaHQgdG9wfUBzdXBwb3J0cyBzZWxlY3Rvcig6ZGlyKHJ0bCkpezpob3N0KC5yYWRpby1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZC5yYWRpby1hbGlnbm1lbnQtc3RhcnQ6ZGlyKHJ0bCkpIC5sYWJlbC10ZXh0LXdyYXBwZXJ7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOnJpZ2h0IHRvcDt0cmFuc2Zvcm0tb3JpZ2luOnJpZ2h0IHRvcH19Omhvc3QoLnJhZGlvLWxhYmVsLXBsYWNlbWVudC1zdGFja2VkLnJhZGlvLWFsaWdubWVudC1jZW50ZXIpIC5sYWJlbC10ZXh0LXdyYXBwZXJ7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciB0b3A7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgdG9wfTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0KC5yYWRpby1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZC5yYWRpby1hbGlnbm1lbnQtY2VudGVyKSAubGFiZWwtdGV4dC13cmFwcGVyLDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5yYWRpby1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZC5yYWRpby1hbGlnbm1lbnQtY2VudGVyIC5sYWJlbC10ZXh0LXdyYXBwZXJ7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNhbGMoMTAwJSAtIGNlbnRlcikgdG9wO3RyYW5zZm9ybS1vcmlnaW46Y2FsYygxMDAlIC0gY2VudGVyKSB0b3B9QHN1cHBvcnRzIHNlbGVjdG9yKDpkaXIocnRsKSl7Omhvc3QoLnJhZGlvLWxhYmVsLXBsYWNlbWVudC1zdGFja2VkLnJhZGlvLWFsaWdubWVudC1jZW50ZXI6ZGlyKHJ0bCkpIC5sYWJlbC10ZXh0LXdyYXBwZXJ7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNhbGMoMTAwJSAtIGNlbnRlcikgdG9wO3RyYW5zZm9ybS1vcmlnaW46Y2FsYygxMDAlIC0gY2VudGVyKSB0b3B9fTpob3N0ey0tY29sb3ItY2hlY2tlZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzAwNTRlOSl9Omhvc3QoLmlvbi1jb2xvci5yYWRpby1jaGVja2VkKSAucmFkaW8taW5uZXJ7Ym9yZGVyLWNvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKX0uaXRlbS1yYWRpby5pdGVtLWlvcyBpb24tbGFiZWx7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MDttYXJnaW4taW5saW5lLXN0YXJ0OjB9LnJhZGlvLWlubmVye3dpZHRoOjMzJTtoZWlnaHQ6NTAlfTpob3N0KC5yYWRpby1jaGVja2VkKSAucmFkaW8taW5uZXJ7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTtib3JkZXItd2lkdGg6MC4xMjVyZW07Ym9yZGVyLXRvcC13aWR0aDowO2JvcmRlci1sZWZ0LXdpZHRoOjA7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjp2YXIoLS1jb2xvci1jaGVja2VkKX06aG9zdCgucmFkaW8tZGlzYWJsZWQpe29wYWNpdHk6MC4zfTpob3N0KC5pb24tZm9jdXNlZCkgLnJhZGlvLWljb246OmFmdGVye2JvcmRlci1yYWRpdXM6dmFyKC0taW5uZXItYm9yZGVyLXJhZGl1cyk7dG9wOi04cHg7ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDozNnB4O2hlaWdodDozNnB4O2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnktdGludCwgIzFhNjVlYik7Y29udGVudDpcXFwiXFxcIjtvcGFjaXR5OjAuMn06aG9zdCguaW9uLWZvY3VzZWQpIC5yYWRpby1pY29uOjphZnRlcntpbnNldC1pbmxpbmUtc3RhcnQ6LTlweH0ubmF0aXZlLXdyYXBwZXIgLnJhZGlvLWljb257d2lkdGg6MC45Mzc1cmVtO2hlaWdodDoxLjVyZW19XCI7XG5jb25zdCByYWRpb01kQ3NzID0gXCI6aG9zdHstLWlubmVyLWJvcmRlci1yYWRpdXM6NTAlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO21heC13aWR0aDoxMDAlO21pbi1oZWlnaHQ6aW5oZXJpdDtjdXJzb3I6cG9pbnRlcjstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7ei1pbmRleDoyOy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveH06aG9zdCgucmFkaW8tZGlzYWJsZWQpe3BvaW50ZXItZXZlbnRzOm5vbmV9LnJhZGlvLWljb257ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Y29udGFpbjpsYXlvdXQgc2l6ZSBzdHlsZX0ucmFkaW8taWNvbiwucmFkaW8taW5uZXJ7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94fWlucHV0e3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDtyaWdodDowO2JvdHRvbTowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7bWFyZ2luOjA7cGFkZGluZzowO2JvcmRlcjowO291dGxpbmU6MDtjbGlwOnJlY3QoMCAwIDAgMCk7b3BhY2l0eTowO292ZXJmbG93OmhpZGRlbjstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZX06aG9zdCg6Zm9jdXMpe291dGxpbmU6bm9uZX06aG9zdCguaW4taXRlbSl7LW1zLWZsZXg6MSAxIDBweDtmbGV4OjEgMSAwO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9Omhvc3QoW3Nsb3Q9c3RhcnRdKSw6aG9zdChbc2xvdD1lbmRdKXstbXMtZmxleDppbml0aWFsO2ZsZXg6aW5pdGlhbDt3aWR0aDphdXRvfS5yYWRpby13cmFwcGVye2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4LXBvc2l0aXZlOjE7ZmxleC1ncm93OjE7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmp1c3RpZnk7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47aGVpZ2h0OmluaGVyaXQ7bWluLWhlaWdodDppbmhlcml0O2N1cnNvcjppbmhlcml0fS5sYWJlbC10ZXh0LXdyYXBwZXJ7dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVufTpob3N0KC5pbi1pdGVtKSAubGFiZWwtdGV4dC13cmFwcGVye21hcmdpbi10b3A6MTBweDttYXJnaW4tYm90dG9tOjEwcHh9Omhvc3QoLmluLWl0ZW0ucmFkaW8tbGFiZWwtcGxhY2VtZW50LXN0YWNrZWQpIC5sYWJlbC10ZXh0LXdyYXBwZXJ7bWFyZ2luLXRvcDoxMHB4O21hcmdpbi1ib3R0b206MTZweH06aG9zdCguaW4taXRlbS5yYWRpby1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZCkgLm5hdGl2ZS13cmFwcGVye21hcmdpbi1ib3R0b206MTBweH0ubGFiZWwtdGV4dC13cmFwcGVyLWhpZGRlbntkaXNwbGF5Om5vbmV9Lm5hdGl2ZS13cmFwcGVye2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXJ9Omhvc3QoLnJhZGlvLWp1c3RpZnktc3BhY2UtYmV0d2VlbikgLnJhZGlvLXdyYXBwZXJ7LW1zLWZsZXgtcGFjazpqdXN0aWZ5O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufTpob3N0KC5yYWRpby1qdXN0aWZ5LXN0YXJ0KSAucmFkaW8td3JhcHBlcnstbXMtZmxleC1wYWNrOnN0YXJ0O2p1c3RpZnktY29udGVudDpzdGFydH06aG9zdCgucmFkaW8tanVzdGlmeS1lbmQpIC5yYWRpby13cmFwcGVyey1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDplbmR9Omhvc3QoLnJhZGlvLWFsaWdubWVudC1zdGFydCkgLnJhZGlvLXdyYXBwZXJ7LW1zLWZsZXgtYWxpZ246c3RhcnQ7YWxpZ24taXRlbXM6c3RhcnR9Omhvc3QoLnJhZGlvLWFsaWdubWVudC1jZW50ZXIpIC5yYWRpby13cmFwcGVyey1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXJ9Omhvc3QoLnJhZGlvLWp1c3RpZnktc3BhY2UtYmV0d2VlbiksOmhvc3QoLnJhZGlvLWp1c3RpZnktc3RhcnQpLDpob3N0KC5yYWRpby1qdXN0aWZ5LWVuZCksOmhvc3QoLnJhZGlvLWFsaWdubWVudC1zdGFydCksOmhvc3QoLnJhZGlvLWFsaWdubWVudC1jZW50ZXIpe2Rpc3BsYXk6YmxvY2t9Omhvc3QoLnJhZGlvLWxhYmVsLXBsYWNlbWVudC1zdGFydCkgLnJhZGlvLXdyYXBwZXJ7LW1zLWZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LWRpcmVjdGlvbjpyb3d9Omhvc3QoLnJhZGlvLWxhYmVsLXBsYWNlbWVudC1zdGFydCkgLmxhYmVsLXRleHQtd3JhcHBlcnstd2Via2l0LW1hcmdpbi1zdGFydDowO21hcmdpbi1pbmxpbmUtc3RhcnQ6MDstd2Via2l0LW1hcmdpbi1lbmQ6MTZweDttYXJnaW4taW5saW5lLWVuZDoxNnB4fTpob3N0KC5yYWRpby1sYWJlbC1wbGFjZW1lbnQtZW5kKSAucmFkaW8td3JhcHBlcnstbXMtZmxleC1kaXJlY3Rpb246cm93LXJldmVyc2U7ZmxleC1kaXJlY3Rpb246cm93LXJldmVyc2V9Omhvc3QoLnJhZGlvLWxhYmVsLXBsYWNlbWVudC1lbmQpIC5sYWJlbC10ZXh0LXdyYXBwZXJ7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MTZweDttYXJnaW4taW5saW5lLXN0YXJ0OjE2cHg7LXdlYmtpdC1tYXJnaW4tZW5kOjA7bWFyZ2luLWlubGluZS1lbmQ6MH06aG9zdCgucmFkaW8tbGFiZWwtcGxhY2VtZW50LWZpeGVkKSAubGFiZWwtdGV4dC13cmFwcGVyey13ZWJraXQtbWFyZ2luLXN0YXJ0OjA7bWFyZ2luLWlubGluZS1zdGFydDowOy13ZWJraXQtbWFyZ2luLWVuZDoxNnB4O21hcmdpbi1pbmxpbmUtZW5kOjE2cHh9Omhvc3QoLnJhZGlvLWxhYmVsLXBsYWNlbWVudC1maXhlZCkgLmxhYmVsLXRleHQtd3JhcHBlcnstbXMtZmxleDowIDAgMTAwcHg7ZmxleDowIDAgMTAwcHg7d2lkdGg6MTAwcHg7bWluLXdpZHRoOjEwMHB4fTpob3N0KC5yYWRpby1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZCkgLnJhZGlvLXdyYXBwZXJ7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW59Omhvc3QoLnJhZGlvLWxhYmVsLXBsYWNlbWVudC1zdGFja2VkKSAubGFiZWwtdGV4dC13cmFwcGVyey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDAuNzUpO3RyYW5zZm9ybTpzY2FsZSgwLjc1KTttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi1ib3R0b206MTZweDttYXgtd2lkdGg6Y2FsYygxMDAlIC8gMC43NSl9Omhvc3QoLnJhZGlvLWxhYmVsLXBsYWNlbWVudC1zdGFja2VkLnJhZGlvLWFsaWdubWVudC1zdGFydCkgLmxhYmVsLXRleHQtd3JhcHBlcnstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46bGVmdCB0b3A7dHJhbnNmb3JtLW9yaWdpbjpsZWZ0IHRvcH06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCgucmFkaW8tbGFiZWwtcGxhY2VtZW50LXN0YWNrZWQucmFkaW8tYWxpZ25tZW50LXN0YXJ0KSAubGFiZWwtdGV4dC13cmFwcGVyLDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5yYWRpby1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZC5yYWRpby1hbGlnbm1lbnQtc3RhcnQgLmxhYmVsLXRleHQtd3JhcHBlcnstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46cmlnaHQgdG9wO3RyYW5zZm9ybS1vcmlnaW46cmlnaHQgdG9wfUBzdXBwb3J0cyBzZWxlY3Rvcig6ZGlyKHJ0bCkpezpob3N0KC5yYWRpby1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZC5yYWRpby1hbGlnbm1lbnQtc3RhcnQ6ZGlyKHJ0bCkpIC5sYWJlbC10ZXh0LXdyYXBwZXJ7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOnJpZ2h0IHRvcDt0cmFuc2Zvcm0tb3JpZ2luOnJpZ2h0IHRvcH19Omhvc3QoLnJhZGlvLWxhYmVsLXBsYWNlbWVudC1zdGFja2VkLnJhZGlvLWFsaWdubWVudC1jZW50ZXIpIC5sYWJlbC10ZXh0LXdyYXBwZXJ7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciB0b3A7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgdG9wfTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0KC5yYWRpby1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZC5yYWRpby1hbGlnbm1lbnQtY2VudGVyKSAubGFiZWwtdGV4dC13cmFwcGVyLDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5yYWRpby1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZC5yYWRpby1hbGlnbm1lbnQtY2VudGVyIC5sYWJlbC10ZXh0LXdyYXBwZXJ7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNhbGMoMTAwJSAtIGNlbnRlcikgdG9wO3RyYW5zZm9ybS1vcmlnaW46Y2FsYygxMDAlIC0gY2VudGVyKSB0b3B9QHN1cHBvcnRzIHNlbGVjdG9yKDpkaXIocnRsKSl7Omhvc3QoLnJhZGlvLWxhYmVsLXBsYWNlbWVudC1zdGFja2VkLnJhZGlvLWFsaWdubWVudC1jZW50ZXI6ZGlyKHJ0bCkpIC5sYWJlbC10ZXh0LXdyYXBwZXJ7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNhbGMoMTAwJSAtIGNlbnRlcikgdG9wO3RyYW5zZm9ybS1vcmlnaW46Y2FsYygxMDAlIC0gY2VudGVyKSB0b3B9fTpob3N0ey0tY29sb3I6cmdiKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwgMCwgMCwgMCksIDAuNik7LS1jb2xvci1jaGVja2VkOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMDA1NGU5KTstLWJvcmRlci13aWR0aDowLjEyNXJlbTstLWJvcmRlci1zdHlsZTpzb2xpZDstLWJvcmRlci1yYWRpdXM6NTAlfTpob3N0KC5pb24tY29sb3IpIC5yYWRpby1pbm5lcntiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1iYXNlKX06aG9zdCguaW9uLWNvbG9yLnJhZGlvLWNoZWNrZWQpIC5yYWRpby1pY29ue2JvcmRlci1jb2xvcjp2YXIoLS1pb24tY29sb3ItYmFzZSl9LnJhZGlvLWljb257bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO2JvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7Ym9yZGVyLXdpZHRoOnZhcigtLWJvcmRlci13aWR0aCk7Ym9yZGVyLXN0eWxlOnZhcigtLWJvcmRlci1zdHlsZSk7Ym9yZGVyLWNvbG9yOnZhcigtLWNvbG9yKX0ucmFkaW8taW5uZXJ7Ym9yZGVyLXJhZGl1czp2YXIoLS1pbm5lci1ib3JkZXItcmFkaXVzKTt3aWR0aDpjYWxjKDUwJSArIHZhcigtLWJvcmRlci13aWR0aCkpO2hlaWdodDpjYWxjKDUwJSArIHZhcigtLWJvcmRlci13aWR0aCkpOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMCwgMCwgMCk7dHJhbnNmb3JtOnNjYWxlM2QoMCwgMCwgMCk7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIDI4MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7dHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAyODBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO3RyYW5zaXRpb246dHJhbnNmb3JtIDI4MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMjgwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSwgLXdlYmtpdC10cmFuc2Zvcm0gMjgwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtiYWNrZ3JvdW5kOnZhcigtLWNvbG9yLWNoZWNrZWQpfTpob3N0KC5yYWRpby1jaGVja2VkKSAucmFkaW8taWNvbntib3JkZXItY29sb3I6dmFyKC0tY29sb3ItY2hlY2tlZCl9Omhvc3QoLnJhZGlvLWNoZWNrZWQpIC5yYWRpby1pbm5lcnstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEsIDEsIDEpO3RyYW5zZm9ybTpzY2FsZTNkKDEsIDEsIDEpfTpob3N0KC5yYWRpby1kaXNhYmxlZCkgLmxhYmVsLXRleHQtd3JhcHBlcntvcGFjaXR5OjAuMzh9Omhvc3QoLnJhZGlvLWRpc2FibGVkKSAubmF0aXZlLXdyYXBwZXJ7b3BhY2l0eTowLjYzfTpob3N0KC5pb24tZm9jdXNlZCkgLnJhZGlvLWljb246OmFmdGVye2JvcmRlci1yYWRpdXM6dmFyKC0taW5uZXItYm9yZGVyLXJhZGl1cyk7ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDozNnB4O2hlaWdodDozNnB4O2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnktdGludCwgIzFhNjVlYik7Y29udGVudDpcXFwiXFxcIjtvcGFjaXR5OjAuMn0ubmF0aXZlLXdyYXBwZXIgLnJhZGlvLWljb257d2lkdGg6MS4yNXJlbTtoZWlnaHQ6MS4yNXJlbX1cIjtcbmNvbnN0IFJhZGlvID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmlvbkZvY3VzID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Gb2N1c1wiLCA3KTtcbiAgICB0aGlzLmlvbkJsdXIgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkJsdXJcIiwgNyk7XG4gICAgdGhpcy5pbnB1dElkID0gYGlvbi1yYi0ke3JhZGlvQnV0dG9uSWRzKyt9YDtcbiAgICB0aGlzLnJhZGlvR3JvdXAgPSBudWxsO1xuICAgIC8qKlxuICAgICAqIElmIGB0cnVlYCwgdGhlIHJhZGlvIGlzIHNlbGVjdGVkLlxuICAgICAqL1xuICAgIHRoaXMuY2hlY2tlZCA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIFRoZSB0YWJpbmRleCBvZiB0aGUgcmFkaW8gYnV0dG9uLlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHRoaXMuYnV0dG9uVGFiaW5kZXggPSAtMTtcbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGUgY29udHJvbCwgd2hpY2ggaXMgc3VibWl0dGVkIHdpdGggdGhlIGZvcm0gZGF0YS5cbiAgICAgKi9cbiAgICB0aGlzLm5hbWUgPSB0aGlzLmlucHV0SWQ7XG4gICAgLyoqXG4gICAgICogSWYgYHRydWVgLCB0aGUgdXNlciBjYW5ub3QgaW50ZXJhY3Qgd2l0aCB0aGUgcmFkaW8uXG4gICAgICovXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIFdoZXJlIHRvIHBsYWNlIHRoZSBsYWJlbCByZWxhdGl2ZSB0byB0aGUgcmFkaW8uXG4gICAgICogYFwic3RhcnRcImA6IFRoZSBsYWJlbCB3aWxsIGFwcGVhciB0byB0aGUgbGVmdCBvZiB0aGUgcmFkaW8gaW4gTFRSIGFuZCB0byB0aGUgcmlnaHQgaW4gUlRMLlxuICAgICAqIGBcImVuZFwiYDogVGhlIGxhYmVsIHdpbGwgYXBwZWFyIHRvIHRoZSByaWdodCBvZiB0aGUgcmFkaW8gaW4gTFRSIGFuZCB0byB0aGUgbGVmdCBpbiBSVEwuXG4gICAgICogYFwiZml4ZWRcImA6IFRoZSBsYWJlbCBoYXMgdGhlIHNhbWUgYmVoYXZpb3IgYXMgYFwic3RhcnRcImAgZXhjZXB0IGl0IGFsc28gaGFzIGEgZml4ZWQgd2lkdGguIExvbmcgdGV4dCB3aWxsIGJlIHRydW5jYXRlZCB3aXRoIGVsbGlwc2VzIChcIi4uLlwiKS5cbiAgICAgKiBgXCJzdGFja2VkXCJgOiBUaGUgbGFiZWwgd2lsbCBhcHBlYXIgYWJvdmUgdGhlIHJhZGlvIHJlZ2FyZGxlc3Mgb2YgdGhlIGRpcmVjdGlvbi4gVGhlIGFsaWdubWVudCBvZiB0aGUgbGFiZWwgY2FuIGJlIGNvbnRyb2xsZWQgd2l0aCB0aGUgYGFsaWdubWVudGAgcHJvcGVydHkuXG4gICAgICovXG4gICAgdGhpcy5sYWJlbFBsYWNlbWVudCA9ICdzdGFydCc7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnJhZGlvR3JvdXApIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIGNvbXBhcmVXaXRoLFxuICAgICAgICAgIHZhbHVlOiByYWRpb0dyb3VwVmFsdWVcbiAgICAgICAgfSA9IHRoaXMucmFkaW9Hcm91cDtcbiAgICAgICAgdGhpcy5jaGVja2VkID0gaXNPcHRpb25TZWxlY3RlZChyYWRpb0dyb3VwVmFsdWUsIHRoaXMudmFsdWUsIGNvbXBhcmVXaXRoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMub25DbGljayA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgcmFkaW9Hcm91cCxcbiAgICAgICAgY2hlY2tlZCxcbiAgICAgICAgZGlzYWJsZWRcbiAgICAgIH0gPSB0aGlzO1xuICAgICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogVGhlIG1vZGVybiBjb250cm9sIGRvZXMgbm90IHVzZSBhIG5hdGl2ZSBpbnB1dFxuICAgICAgICogaW5zaWRlIG9mIHRoZSByYWRpbyBob3N0LCBzbyB3ZSBjYW5ub3QgcmVseSBvbiB0aGVcbiAgICAgICAqIGV2LnByZXZlbnREZWZhdWx0KCkgYmVoYXZpb3IgYWJvdmUuIElmIHRoZSByYWRpb1xuICAgICAgICogaXMgY2hlY2tlZCBhbmQgdGhlIHBhcmVudCByYWRpbyBncm91cCBhbGxvd3MgZm9yIGVtcHR5XG4gICAgICAgKiBzZWxlY3Rpb24sIHRoZW4gd2UgY2FuIHNldCB0aGUgY2hlY2tlZCBzdGF0ZSB0byBmYWxzZS5cbiAgICAgICAqIE90aGVyd2lzZSwgdGhlIGNoZWNrZWQgc3RhdGUgc2hvdWxkIGFsd2F5cyBiZSBzZXRcbiAgICAgICAqIHRvIHRydWUgYmVjYXVzZSB0aGUgY2hlY2tlZCBzdGF0ZSBjYW5ub3QgYmUgdG9nZ2xlZC5cbiAgICAgICAqL1xuICAgICAgaWYgKGNoZWNrZWQgJiYgKHJhZGlvR3JvdXAgPT09IG51bGwgfHwgcmFkaW9Hcm91cCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmFkaW9Hcm91cC5hbGxvd0VtcHR5U2VsZWN0aW9uKSkge1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2hlY2tlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLm9uRm9jdXMgPSAoKSA9PiB7XG4gICAgICB0aGlzLmlvbkZvY3VzLmVtaXQoKTtcbiAgICB9O1xuICAgIHRoaXMub25CbHVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5pb25CbHVyLmVtaXQoKTtcbiAgICB9O1xuICB9XG4gIHZhbHVlQ2hhbmdlZCgpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgbmV3IHZhbHVlIG9mIHRoZSByYWRpbyBtYXlcbiAgICAgKiBtYXRjaCB0aGUgcmFkaW8gZ3JvdXAncyB2YWx1ZSxcbiAgICAgKiBzbyB3ZSBzZWUgaWYgaXQgc2hvdWxkIGJlIGNoZWNrZWQuXG4gICAgICovXG4gICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgLyoqXG4gICAgICogVGhlIHZhbHVlIG1heSBiZSBgdW5kZWZpbmVkYCBpZiBpdFxuICAgICAqIGdldHMgc2V0IGJlZm9yZSB0aGUgcmFkaW8gaXNcbiAgICAgKiByZW5kZXJlZC4gVGhpcyBlbnN1cmVzIHRoYXQgdGhlIHJhZGlvXG4gICAgICogaXMgY2hlY2tlZCBpZiB0aGUgdmFsdWUgbWF0Y2hlcy4gVGhpc1xuICAgICAqIGhhcHBlbnMgbW9zdCBvZnRlbiB3aGVuIEFuZ3VsYXIgaXNcbiAgICAgKiByZW5kZXJpbmcgdGhlIHJhZGlvLlxuICAgICAqL1xuICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgfVxuICAvKiogQGludGVybmFsICovXG4gIGFzeW5jIHNldEZvY3VzKGV2KSB7XG4gICAgaWYgKGV2ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgdGhpcy5lbC5mb2N1cygpO1xuICB9XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgYXN5bmMgc2V0QnV0dG9uVGFiaW5kZXgodmFsdWUpIHtcbiAgICB0aGlzLmJ1dHRvblRhYmluZGV4ID0gdmFsdWU7XG4gIH1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHRoaXMudmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuaW5wdXRJZDtcbiAgICB9XG4gICAgY29uc3QgcmFkaW9Hcm91cCA9IHRoaXMucmFkaW9Hcm91cCA9IHRoaXMuZWwuY2xvc2VzdCgnaW9uLXJhZGlvLWdyb3VwJyk7XG4gICAgaWYgKHJhZGlvR3JvdXApIHtcbiAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICAgIGFkZEV2ZW50TGlzdGVuZXIocmFkaW9Hcm91cCwgJ2lvblZhbHVlQ2hhbmdlJywgdGhpcy51cGRhdGVTdGF0ZSk7XG4gICAgfVxuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGNvbnN0IHJhZGlvR3JvdXAgPSB0aGlzLnJhZGlvR3JvdXA7XG4gICAgaWYgKHJhZGlvR3JvdXApIHtcbiAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIocmFkaW9Hcm91cCwgJ2lvblZhbHVlQ2hhbmdlJywgdGhpcy51cGRhdGVTdGF0ZSk7XG4gICAgICB0aGlzLnJhZGlvR3JvdXAgPSBudWxsO1xuICAgIH1cbiAgfVxuICBnZXQgaGFzTGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWwudGV4dENvbnRlbnQgIT09ICcnO1xuICB9XG4gIHJlbmRlclJhZGlvQ29udHJvbCgpIHtcbiAgICByZXR1cm4gaChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJyYWRpby1pY29uXCIsXG4gICAgICBwYXJ0OiBcImNvbnRhaW5lclwiXG4gICAgfSwgaChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJyYWRpby1pbm5lclwiLFxuICAgICAgcGFydDogXCJtYXJrXCJcbiAgICB9KSwgaChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJyYWRpby1yaXBwbGVcIlxuICAgIH0pKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hlY2tlZCxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgY29sb3IsXG4gICAgICBlbCxcbiAgICAgIGp1c3RpZnksXG4gICAgICBsYWJlbFBsYWNlbWVudCxcbiAgICAgIGhhc0xhYmVsLFxuICAgICAgYnV0dG9uVGFiaW5kZXgsXG4gICAgICBhbGlnbm1lbnRcbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICBjb25zdCBpbkl0ZW0gPSBob3N0Q29udGV4dCgnaW9uLWl0ZW0nLCBlbCk7XG4gICAgcmV0dXJuIGgoSG9zdCwge1xuICAgICAga2V5OiAnMzM1M2IyODE3MmI3ZjgzN2Q0YjM4OTY0MTY5YjViNWY0YmEwMjc4OCcsXG4gICAgICBvbkZvY3VzOiB0aGlzLm9uRm9jdXMsXG4gICAgICBvbkJsdXI6IHRoaXMub25CbHVyLFxuICAgICAgb25DbGljazogdGhpcy5vbkNsaWNrLFxuICAgICAgY2xhc3M6IGNyZWF0ZUNvbG9yQ2xhc3Nlcyhjb2xvciwge1xuICAgICAgICBbbW9kZV06IHRydWUsXG4gICAgICAgICdpbi1pdGVtJzogaW5JdGVtLFxuICAgICAgICAncmFkaW8tY2hlY2tlZCc6IGNoZWNrZWQsXG4gICAgICAgICdyYWRpby1kaXNhYmxlZCc6IGRpc2FibGVkLFxuICAgICAgICBbYHJhZGlvLWp1c3RpZnktJHtqdXN0aWZ5fWBdOiBqdXN0aWZ5ICE9PSB1bmRlZmluZWQsXG4gICAgICAgIFtgcmFkaW8tYWxpZ25tZW50LSR7YWxpZ25tZW50fWBdOiBhbGlnbm1lbnQgIT09IHVuZGVmaW5lZCxcbiAgICAgICAgW2ByYWRpby1sYWJlbC1wbGFjZW1lbnQtJHtsYWJlbFBsYWNlbWVudH1gXTogdHJ1ZSxcbiAgICAgICAgLy8gRm9jdXMgYW5kIGFjdGl2ZSBzdHlsaW5nIHNob3VsZCBub3QgYXBwbHkgd2hlbiB0aGUgcmFkaW8gaXMgaW4gYW4gaXRlbVxuICAgICAgICAnaW9uLWFjdGl2YXRhYmxlJzogIWluSXRlbSxcbiAgICAgICAgJ2lvbi1mb2N1c2FibGUnOiAhaW5JdGVtXG4gICAgICB9KSxcbiAgICAgIHJvbGU6IFwicmFkaW9cIixcbiAgICAgIFwiYXJpYS1jaGVja2VkXCI6IGNoZWNrZWQgPyAndHJ1ZScgOiAnZmFsc2UnLFxuICAgICAgXCJhcmlhLWRpc2FibGVkXCI6IGRpc2FibGVkID8gJ3RydWUnIDogbnVsbCxcbiAgICAgIHRhYmluZGV4OiBidXR0b25UYWJpbmRleFxuICAgIH0sIGgoXCJsYWJlbFwiLCB7XG4gICAgICBrZXk6ICc0MThhMGE0ODM2NmZmOTAwZTk3ZGExMjNhYmY2NjViYmJkYTg3ZmI3JyxcbiAgICAgIGNsYXNzOiBcInJhZGlvLXdyYXBwZXJcIlxuICAgIH0sIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnNmU1YWNkZDhjOGY1ZDBhZDI2NjMyYTY1Mzk2YWZlZjgwOTQxNTNkMScsXG4gICAgICBjbGFzczoge1xuICAgICAgICAnbGFiZWwtdGV4dC13cmFwcGVyJzogdHJ1ZSxcbiAgICAgICAgJ2xhYmVsLXRleHQtd3JhcHBlci1oaWRkZW4nOiAhaGFzTGFiZWxcbiAgICAgIH0sXG4gICAgICBwYXJ0OiBcImxhYmVsXCJcbiAgICB9LCBoKFwic2xvdFwiLCB7XG4gICAgICBrZXk6ICcxMGIxNTcxNjJjZDI4M2Q2MjQxNTNjNzQ3Njc5NjA5Y2YwYmJmMTFlJ1xuICAgIH0pKSwgaChcImRpdlwiLCB7XG4gICAgICBrZXk6ICc0YzQ1Y2NhOTVjYjEwNWNkNmRmMTAyNWEyNmUzYzA0NTI3MjE4NGEwJyxcbiAgICAgIGNsYXNzOiBcIm5hdGl2ZS13cmFwcGVyXCJcbiAgICB9LCB0aGlzLnJlbmRlclJhZGlvQ29udHJvbCgpKSkpO1xuICB9XG4gIGdldCBlbCgpIHtcbiAgICByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBcInZhbHVlXCI6IFtcInZhbHVlQ2hhbmdlZFwiXVxuICAgIH07XG4gIH1cbn07XG5sZXQgcmFkaW9CdXR0b25JZHMgPSAwO1xuUmFkaW8uc3R5bGUgPSB7XG4gIGlvczogcmFkaW9Jb3NDc3MsXG4gIG1kOiByYWRpb01kQ3NzXG59O1xuY29uc3QgcmFkaW9Hcm91cElvc0NzcyA9IFwiaW9uLXJhZGlvLWdyb3Vwe3ZlcnRpY2FsLWFsaWduOnRvcH0ucmFkaW8tZ3JvdXAtd3JhcHBlcntkaXNwbGF5OmlubGluZX0ucmFkaW8tZ3JvdXAtdG9we2xpbmUtaGVpZ2h0OjEuNX0ucmFkaW8tZ3JvdXAtdG9wIC5lcnJvci10ZXh0e2Rpc3BsYXk6bm9uZTtjb2xvcjp2YXIoLS1pb24tY29sb3ItZGFuZ2VyLCAjYzUwMDBmKX0ucmFkaW8tZ3JvdXAtdG9wIC5oZWxwZXItdGV4dHtkaXNwbGF5OmJsb2NrO2NvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTcwMCwgdmFyKC0taW9uLXRleHQtY29sb3Itc3RlcC0zMDAsICM0ZDRkNGQpKX0uaW9uLXRvdWNoZWQuaW9uLWludmFsaWQgLnJhZGlvLWdyb3VwLXRvcCAuZXJyb3ItdGV4dHtkaXNwbGF5OmJsb2NrfS5pb24tdG91Y2hlZC5pb24taW52YWxpZCAucmFkaW8tZ3JvdXAtdG9wIC5oZWxwZXItdGV4dHtkaXNwbGF5Om5vbmV9aW9uLWxpc3QgLnJhZGlvLWdyb3VwLXRvcHstd2Via2l0LXBhZGRpbmctc3RhcnQ6MTZweDtwYWRkaW5nLWlubGluZS1zdGFydDoxNnB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MTZweDtwYWRkaW5nLWlubGluZS1lbmQ6MTZweH1cIjtcbmNvbnN0IHJhZGlvR3JvdXBNZENzcyA9IFwiaW9uLXJhZGlvLWdyb3Vwe3ZlcnRpY2FsLWFsaWduOnRvcH0ucmFkaW8tZ3JvdXAtd3JhcHBlcntkaXNwbGF5OmlubGluZX0ucmFkaW8tZ3JvdXAtdG9we2xpbmUtaGVpZ2h0OjEuNX0ucmFkaW8tZ3JvdXAtdG9wIC5lcnJvci10ZXh0e2Rpc3BsYXk6bm9uZTtjb2xvcjp2YXIoLS1pb24tY29sb3ItZGFuZ2VyLCAjYzUwMDBmKX0ucmFkaW8tZ3JvdXAtdG9wIC5oZWxwZXItdGV4dHtkaXNwbGF5OmJsb2NrO2NvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTcwMCwgdmFyKC0taW9uLXRleHQtY29sb3Itc3RlcC0zMDAsICM0ZDRkNGQpKX0uaW9uLXRvdWNoZWQuaW9uLWludmFsaWQgLnJhZGlvLWdyb3VwLXRvcCAuZXJyb3ItdGV4dHtkaXNwbGF5OmJsb2NrfS5pb24tdG91Y2hlZC5pb24taW52YWxpZCAucmFkaW8tZ3JvdXAtdG9wIC5oZWxwZXItdGV4dHtkaXNwbGF5Om5vbmV9aW9uLWxpc3QgLnJhZGlvLWdyb3VwLXRvcHstd2Via2l0LXBhZGRpbmctc3RhcnQ6MTZweDtwYWRkaW5nLWlubGluZS1zdGFydDoxNnB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MTZweDtwYWRkaW5nLWlubGluZS1lbmQ6MTZweH1cIjtcbmNvbnN0IFJhZGlvR3JvdXAgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuaW9uQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25DaGFuZ2VcIiwgNyk7XG4gICAgdGhpcy5pb25WYWx1ZUNoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uVmFsdWVDaGFuZ2VcIiwgNyk7XG4gICAgdGhpcy5pbnB1dElkID0gYGlvbi1yZy0ke3JhZGlvR3JvdXBJZHMrK31gO1xuICAgIHRoaXMuaGVscGVyVGV4dElkID0gYCR7dGhpcy5pbnB1dElkfS1oZWxwZXItdGV4dGA7XG4gICAgdGhpcy5lcnJvclRleHRJZCA9IGAke3RoaXMuaW5wdXRJZH0tZXJyb3ItdGV4dGA7XG4gICAgdGhpcy5sYWJlbElkID0gYCR7dGhpcy5pbnB1dElkfS1sYmxgO1xuICAgIC8qKlxuICAgICAqIElmIGB0cnVlYCwgdGhlIHJhZGlvcyBjYW4gYmUgZGVzZWxlY3RlZC5cbiAgICAgKi9cbiAgICB0aGlzLmFsbG93RW1wdHlTZWxlY3Rpb24gPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGUgY29udHJvbCwgd2hpY2ggaXMgc3VibWl0dGVkIHdpdGggdGhlIGZvcm0gZGF0YS5cbiAgICAgKi9cbiAgICB0aGlzLm5hbWUgPSB0aGlzLmlucHV0SWQ7XG4gICAgdGhpcy5zZXRSYWRpb1RhYmluZGV4ID0gdmFsdWUgPT4ge1xuICAgICAgY29uc3QgcmFkaW9zID0gdGhpcy5nZXRSYWRpb3MoKTtcbiAgICAgIC8vIEdldCB0aGUgZmlyc3QgcmFkaW8gdGhhdCBpcyBub3QgZGlzYWJsZWQgYW5kIHRoZSBjaGVja2VkIG9uZVxuICAgICAgY29uc3QgZmlyc3QgPSByYWRpb3MuZmluZChyYWRpbyA9PiAhcmFkaW8uZGlzYWJsZWQpO1xuICAgICAgY29uc3QgY2hlY2tlZCA9IHJhZGlvcy5maW5kKHJhZGlvID0+IHJhZGlvLnZhbHVlID09PSB2YWx1ZSAmJiAhcmFkaW8uZGlzYWJsZWQpO1xuICAgICAgaWYgKCFmaXJzdCAmJiAhY2hlY2tlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBJZiBhbiBlbmFibGVkIGNoZWNrZWQgcmFkaW8gZXhpc3RzLCBzZXQgaXQgdG8gYmUgdGhlIGZvY3VzYWJsZSByYWRpb1xuICAgICAgLy8gb3RoZXJ3aXNlIHdlIGRlZmF1bHQgdG8gZm9jdXMgdGhlIGZpcnN0IHJhZGlvXG4gICAgICBjb25zdCBmb2N1c2FibGUgPSBjaGVja2VkIHx8IGZpcnN0O1xuICAgICAgZm9yIChjb25zdCByYWRpbyBvZiByYWRpb3MpIHtcbiAgICAgICAgY29uc3QgdGFiaW5kZXggPSByYWRpbyA9PT0gZm9jdXNhYmxlID8gMCA6IC0xO1xuICAgICAgICByYWRpby5zZXRCdXR0b25UYWJpbmRleCh0YWJpbmRleCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLm9uQ2xpY2sgPSBldiA9PiB7XG4gICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgLyoqXG4gICAgICAgKiBUaGUgUmFkaW8gR3JvdXAgY29tcG9uZW50IG1hbmRhdGVzIHRoYXQgb25seSBvbmUgcmFkaW8gYnV0dG9uXG4gICAgICAgKiB3aXRoaW4gdGhlIGdyb3VwIGNhbiBiZSBzZWxlY3RlZCBhdCBhbnkgZ2l2ZW4gdGltZS4gU2luY2UgYGlvbi1yYWRpb2BcbiAgICAgICAqIGlzIGEgc2hhZG93IERPTSBjb21wb25lbnQsIGl0IGNhbm5vdCBuYXRpdmVseSBwZXJmb3JtIHRoaXMgYmVoYXZpb3JcbiAgICAgICAqIHVzaW5nIHRoZSBgbmFtZWAgYXR0cmlidXRlLlxuICAgICAgICovXG4gICAgICBjb25zdCBzZWxlY3RlZFJhZGlvID0gZXYudGFyZ2V0ICYmIGV2LnRhcmdldC5jbG9zZXN0KCdpb24tcmFkaW8nKTtcbiAgICAgIC8qKlxuICAgICAgICogT3VyIGN1cnJlbnQgZGlzYWJsZWQgcHJvcCBkZWZpbml0aW9uIGNhdXNlcyBTdGVuY2lsIHRvIG1hcmsgaXRcbiAgICAgICAqIGFzIG9wdGlvbmFsLiBXaGlsZSB0aGlzIGlzIG5vdCBkZXNpcmVkLCBmaXhpbmcgdGhpcyBiZWhhdmlvclxuICAgICAgICogaW4gU3RlbmNpbCBpcyBhIHNpZ25pZmljYW50IGJyZWFraW5nIGNoYW5nZSwgc28gdGhpcyBlZmZvcnQgaXNcbiAgICAgICAqIGJlaW5nIGRlLXJpc2tlZCBpbiBTVEVOQ0lMLTkxNy4gVW50aWwgdGhlbiwgd2UgY29tcHJvbWlzZVxuICAgICAgICogaGVyZSBieSBjaGVja2luZyBmb3IgZmFsc3kgYGRpc2FibGVkYCB2YWx1ZXMgaW5zdGVhZCBvZiBzdHJpY3RseVxuICAgICAgICogY2hlY2tpbmcgYGRpc2FibGVkID09PSBmYWxzZWAuXG4gICAgICAgKi9cbiAgICAgIGlmIChzZWxlY3RlZFJhZGlvICYmICFzZWxlY3RlZFJhZGlvLmRpc2FibGVkKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gc2VsZWN0ZWRSYWRpby52YWx1ZTtcbiAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSBjdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgICAgdGhpcy5lbWl0VmFsdWVDaGFuZ2UoZXYpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYWxsb3dFbXB0eVNlbGVjdGlvbikge1xuICAgICAgICAgIHRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgdGhpcy5lbWl0VmFsdWVDaGFuZ2UoZXYpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICB2YWx1ZUNoYW5nZWQodmFsdWUpIHtcbiAgICB0aGlzLnNldFJhZGlvVGFiaW5kZXgodmFsdWUpO1xuICAgIHRoaXMuaW9uVmFsdWVDaGFuZ2UuZW1pdCh7XG4gICAgICB2YWx1ZVxuICAgIH0pO1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgLyoqXG4gICAgICogVGhlcmUncyBhbiBpc3N1ZSB3aGVuIGFzc2lnbmluZyBhIHZhbHVlIHRvIHRoZSByYWRpbyBncm91cFxuICAgICAqIHdpdGhpbiB0aGUgQW5ndWxhciBwcmltYXJ5IGNvbnRlbnQgKHJlbmRlcmluZyB3aXRoaW4gdGhlXG4gICAgICogYXBwIGNvbXBvbmVudCB0ZW1wbGF0ZSkuIFdoZW4gdGhlIHRlbXBsYXRlIGlzIGlzb2xhdGVkIHRvIGEgcm91dGUsXG4gICAgICogdGhlIHZhbHVlIGlzIGFzc2lnbmVkIGNvcnJlY3RseS5cbiAgICAgKiBUbyBhZGRyZXNzIHRoaXMgaXNzdWUsIHdlIG5lZWQgdG8gZW5zdXJlIHRoYXQgdGhlIHdhdGNoZXIgaXNcbiAgICAgKiBjYWxsZWQgYWZ0ZXIgdGhlIGNvbXBvbmVudCBoYXMgZmluaXNoZWQgbG9hZGluZyxcbiAgICAgKiBhbGxvd2luZyB0aGUgZW1pdCB0byBiZSBkaXNwYXRjaGVkIGNvcnJlY3RseS5cbiAgICAgKi9cbiAgICB0aGlzLnZhbHVlQ2hhbmdlZCh0aGlzLnZhbHVlKTtcbiAgfVxuICBhc3luYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAvLyBHZXQgdGhlIGxpc3QgaGVhZGVyIGlmIGl0IGV4aXN0cyBhbmQgc2V0IHRoZSBpZFxuICAgIC8vIHRoaXMgaXMgdXNlZCB0byBzZXQgYXJpYS1sYWJlbGxlZGJ5XG4gICAgY29uc3QgaGVhZGVyID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCdpb24tbGlzdC1oZWFkZXInKSB8fCB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1pdGVtLWRpdmlkZXInKTtcbiAgICBpZiAoaGVhZGVyKSB7XG4gICAgICBjb25zdCBsYWJlbCA9IHRoaXMubGFiZWwgPSBoZWFkZXIucXVlcnlTZWxlY3RvcignaW9uLWxhYmVsJyk7XG4gICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgdGhpcy5sYWJlbElkID0gbGFiZWwuaWQgPSB0aGlzLm5hbWUgKyAnLWxibCc7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGdldFJhZGlvcygpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lvbi1yYWRpbycpKTtcbiAgfVxuICAvKipcbiAgICogRW1pdHMgYW4gYGlvbkNoYW5nZWAgZXZlbnQuXG4gICAqXG4gICAqIFRoaXMgQVBJIHNob3VsZCBiZSBjYWxsZWQgZm9yIHVzZXIgY29tbWl0dGVkIGNoYW5nZXMuXG4gICAqIFRoaXMgQVBJIHNob3VsZCBub3QgYmUgdXNlZCBmb3IgZXh0ZXJuYWwgdmFsdWUgY2hhbmdlcy5cbiAgICovXG4gIGVtaXRWYWx1ZUNoYW5nZShldmVudCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHZhbHVlXG4gICAgfSA9IHRoaXM7XG4gICAgdGhpcy5pb25DaGFuZ2UuZW1pdCh7XG4gICAgICB2YWx1ZSxcbiAgICAgIGV2ZW50XG4gICAgfSk7XG4gIH1cbiAgb25LZXlkb3duKGV2KSB7XG4gICAgLy8gV2UgZG9uJ3Qgd2FudCB0aGUgdmFsdWUgdG8gYXV0b21hdGljYWxseSBjaGFuZ2UvZW1pdCB3aGVuIHRoZSByYWRpbyBncm91cCBpcyBwYXJ0IG9mIGEgc2VsZWN0IGludGVyZmFjZVxuICAgIC8vIGFzIHRoaXMgd2lsbCBjYXVzZSB0aGUgaW50ZXJmYWNlIHRvIGNsb3NlIHdoZW4gbmF2aWdhdGluZyB0aHJvdWdoIHRoZSByYWRpbyBncm91cCBvcHRpb25zXG4gICAgY29uc3QgaW5TZWxlY3RJbnRlcmZhY2UgPSAhIXRoaXMuZWwuY2xvc2VzdCgnaW9uLXNlbGVjdC1wb3BvdmVyJykgfHwgISF0aGlzLmVsLmNsb3Nlc3QoJ2lvbi1zZWxlY3QtbW9kYWwnKTtcbiAgICBpZiAoZXYudGFyZ2V0ICYmICF0aGlzLmVsLmNvbnRhaW5zKGV2LnRhcmdldCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gR2V0IGFsbCByYWRpb3MgaW5zaWRlIG9mIHRoZSByYWRpbyBncm91cCBhbmQgdGhlblxuICAgIC8vIGZpbHRlciBvdXQgZGlzYWJsZWQgcmFkaW9zIHNpbmNlIHdlIG5lZWQgdG8gc2tpcCB0aG9zZVxuICAgIGNvbnN0IHJhZGlvcyA9IHRoaXMuZ2V0UmFkaW9zKCkuZmlsdGVyKHJhZGlvID0+ICFyYWRpby5kaXNhYmxlZCk7XG4gICAgLy8gT25seSBtb3ZlIHRoZSByYWRpbyBpZiB0aGUgY3VycmVudCBmb2N1cyBpcyBpbiB0aGUgcmFkaW8gZ3JvdXBcbiAgICBpZiAoZXYudGFyZ2V0ICYmIHJhZGlvcy5pbmNsdWRlcyhldi50YXJnZXQpKSB7XG4gICAgICBjb25zdCBpbmRleCA9IHJhZGlvcy5maW5kSW5kZXgocmFkaW8gPT4gcmFkaW8gPT09IGV2LnRhcmdldCk7XG4gICAgICBjb25zdCBjdXJyZW50ID0gcmFkaW9zW2luZGV4XTtcbiAgICAgIGxldCBuZXh0O1xuICAgICAgLy8gSWYgaGl0dGluZyBhcnJvdyBkb3duIG9yIGFycm93IHJpZ2h0LCBtb3ZlIHRvIHRoZSBuZXh0IHJhZGlvXG4gICAgICAvLyBJZiB3ZSdyZSBvbiB0aGUgbGFzdCByYWRpbywgbW92ZSB0byB0aGUgZmlyc3QgcmFkaW9cbiAgICAgIGlmIChbJ0Fycm93RG93bicsICdBcnJvd1JpZ2h0J10uaW5jbHVkZXMoZXYua2V5KSkge1xuICAgICAgICBuZXh0ID0gaW5kZXggPT09IHJhZGlvcy5sZW5ndGggLSAxID8gcmFkaW9zWzBdIDogcmFkaW9zW2luZGV4ICsgMV07XG4gICAgICB9XG4gICAgICAvLyBJZiBoaXR0aW5nIGFycm93IHVwIG9yIGFycm93IGxlZnQsIG1vdmUgdG8gdGhlIHByZXZpb3VzIHJhZGlvXG4gICAgICAvLyBJZiB3ZSdyZSBvbiB0aGUgZmlyc3QgcmFkaW8sIG1vdmUgdG8gdGhlIGxhc3QgcmFkaW9cbiAgICAgIGlmIChbJ0Fycm93VXAnLCAnQXJyb3dMZWZ0J10uaW5jbHVkZXMoZXYua2V5KSkge1xuICAgICAgICBuZXh0ID0gaW5kZXggPT09IDAgPyByYWRpb3NbcmFkaW9zLmxlbmd0aCAtIDFdIDogcmFkaW9zW2luZGV4IC0gMV07XG4gICAgICB9XG4gICAgICBpZiAobmV4dCAmJiByYWRpb3MuaW5jbHVkZXMobmV4dCkpIHtcbiAgICAgICAgbmV4dC5zZXRGb2N1cyhldik7XG4gICAgICAgIGlmICghaW5TZWxlY3RJbnRlcmZhY2UpIHtcbiAgICAgICAgICB0aGlzLnZhbHVlID0gbmV4dC52YWx1ZTtcbiAgICAgICAgICB0aGlzLmVtaXRWYWx1ZUNoYW5nZShldik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIFVwZGF0ZSB0aGUgcmFkaW8gZ3JvdXAgdmFsdWUgd2hlbiBhIHVzZXIgcHJlc3NlcyB0aGVcbiAgICAgIC8vIHNwYWNlIGJhciBvbiB0b3Agb2YgYSBzZWxlY3RlZCByYWRpb1xuICAgICAgaWYgKFsnICddLmluY2x1ZGVzKGV2LmtleSkpIHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmFsbG93RW1wdHlTZWxlY3Rpb24gJiYgdGhpcy52YWx1ZSAhPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogY3VycmVudC52YWx1ZTtcbiAgICAgICAgaWYgKHByZXZpb3VzVmFsdWUgIT09IHRoaXMudmFsdWUgfHwgdGhpcy5hbGxvd0VtcHR5U2VsZWN0aW9uKSB7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogVmFsdWUgY2hhbmdlIHNob3VsZCBvbmx5IGJlIGVtaXR0ZWQgaWYgdGhlIHZhbHVlIGlzIGRpZmZlcmVudCxcbiAgICAgICAgICAgKiBzdWNoIGFzIHNlbGVjdGluZyBhIG5ldyByYWRpbyB3aXRoIHRoZSBzcGFjZSBiYXIgb3IgaWZcbiAgICAgICAgICAgKiB0aGUgcmFkaW8gZ3JvdXAgYWxsb3dzIGZvciBlbXB0eSBzZWxlY3Rpb24gYW5kIHRoZSB1c2VyXG4gICAgICAgICAgICogaXMgZGVzZWxlY3RpbmcgYSBjaGVja2VkIHJhZGlvLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIHRoaXMuZW1pdFZhbHVlQ2hhbmdlKGV2KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBQcmV2ZW50IGJyb3dzZXJzIGZyb20ganVtcGluZ1xuICAgICAgICAvLyB0byB0aGUgYm90dG9tIG9mIHRoZSBzY3JlZW5cbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBhc3luYyBzZXRGb2N1cygpIHtcbiAgICBjb25zdCByYWRpb1RvRm9jdXMgPSB0aGlzLmdldFJhZGlvcygpLmZpbmQociA9PiByLnRhYkluZGV4ICE9PSAtMSk7XG4gICAgcmFkaW9Ub0ZvY3VzID09PSBudWxsIHx8IHJhZGlvVG9Gb2N1cyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmFkaW9Ub0ZvY3VzLnNldEZvY3VzKCk7XG4gIH1cbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhlIGhlbHBlciB0ZXh0IG9yIGVycm9yIHRleHQgdmFsdWVzXG4gICAqL1xuICByZW5kZXJIaW50VGV4dCgpIHtcbiAgICBjb25zdCB7XG4gICAgICBoZWxwZXJUZXh0LFxuICAgICAgZXJyb3JUZXh0LFxuICAgICAgaGVscGVyVGV4dElkLFxuICAgICAgZXJyb3JUZXh0SWRcbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCBoYXNIaW50VGV4dCA9ICEhaGVscGVyVGV4dCB8fCAhIWVycm9yVGV4dDtcbiAgICBpZiAoIWhhc0hpbnRUZXh0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiBoKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBcInJhZGlvLWdyb3VwLXRvcFwiXG4gICAgfSwgaChcImRpdlwiLCB7XG4gICAgICBpZDogaGVscGVyVGV4dElkLFxuICAgICAgY2xhc3M6IFwiaGVscGVyLXRleHRcIlxuICAgIH0sIGhlbHBlclRleHQpLCBoKFwiZGl2XCIsIHtcbiAgICAgIGlkOiBlcnJvclRleHRJZCxcbiAgICAgIGNsYXNzOiBcImVycm9yLXRleHRcIlxuICAgIH0sIGVycm9yVGV4dCkpO1xuICB9XG4gIGdldEhpbnRUZXh0SUQoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZWwsXG4gICAgICBoZWxwZXJUZXh0LFxuICAgICAgZXJyb3JUZXh0LFxuICAgICAgaGVscGVyVGV4dElkLFxuICAgICAgZXJyb3JUZXh0SWRcbiAgICB9ID0gdGhpcztcbiAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdpb24tdG91Y2hlZCcpICYmIGVsLmNsYXNzTGlzdC5jb250YWlucygnaW9uLWludmFsaWQnKSAmJiBlcnJvclRleHQpIHtcbiAgICAgIHJldHVybiBlcnJvclRleHRJZDtcbiAgICB9XG4gICAgaWYgKGhlbHBlclRleHQpIHtcbiAgICAgIHJldHVybiBoZWxwZXJUZXh0SWQ7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGxhYmVsLFxuICAgICAgbGFiZWxJZCxcbiAgICAgIGVsLFxuICAgICAgbmFtZSxcbiAgICAgIHZhbHVlXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgcmVuZGVySGlkZGVuSW5wdXQodHJ1ZSwgZWwsIG5hbWUsIHZhbHVlLCBmYWxzZSk7XG4gICAgcmV0dXJuIGgoSG9zdCwge1xuICAgICAga2V5OiAnODFiOGViYzk2YjJmMzgzYzM2NzE3ZjI5MGQyOTU5Y2M5MjFhZDZlOCcsXG4gICAgICByb2xlOiBcInJhZGlvZ3JvdXBcIixcbiAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IGxhYmVsID8gbGFiZWxJZCA6IG51bGwsXG4gICAgICBcImFyaWEtZGVzY3JpYmVkYnlcIjogdGhpcy5nZXRIaW50VGV4dElEKCksXG4gICAgICBcImFyaWEtaW52YWxpZFwiOiB0aGlzLmdldEhpbnRUZXh0SUQoKSA9PT0gdGhpcy5lcnJvclRleHRJZCxcbiAgICAgIG9uQ2xpY2s6IHRoaXMub25DbGljayxcbiAgICAgIGNsYXNzOiBtb2RlXG4gICAgfSwgdGhpcy5yZW5kZXJIaW50VGV4dCgpLCBoKFwiZGl2XCIsIHtcbiAgICAgIGtleTogJzQ1YjA5ZWZjMTA3NzZiODg5YThmMzcyY2JhODBkMjVhM2ZjODQ5ZGEnLFxuICAgICAgY2xhc3M6IFwicmFkaW8tZ3JvdXAtd3JhcHBlclwiXG4gICAgfSwgaChcInNsb3RcIiwge1xuICAgICAga2V5OiAnNTg3MTQ5MzQ1NDJjMmZkZDczOTZkZTE2MDM2NGYzZjA2YjMyZThmOCdcbiAgICB9KSkpO1xuICB9XG4gIGdldCBlbCgpIHtcbiAgICByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBcInZhbHVlXCI6IFtcInZhbHVlQ2hhbmdlZFwiXVxuICAgIH07XG4gIH1cbn07XG5sZXQgcmFkaW9Hcm91cElkcyA9IDA7XG5SYWRpb0dyb3VwLnN0eWxlID0ge1xuICBpb3M6IHJhZGlvR3JvdXBJb3NDc3MsXG4gIG1kOiByYWRpb0dyb3VwTWRDc3Ncbn07XG5leHBvcnQgeyBSYWRpbyBhcyBpb25fcmFkaW8sIFJhZGlvR3JvdXAgYXMgaW9uX3JhZGlvX2dyb3VwIH07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQSxJQUFNLGNBQWM7QUFDcEIsSUFBTSxhQUFhO0FBQ25CLElBQU0sUUFBUSxNQUFNO0FBQUEsRUFDbEIsWUFBWSxTQUFTO0FBQ25CLHFCQUFpQixNQUFNLE9BQU87QUFDOUIsU0FBSyxXQUFXLFlBQVksTUFBTSxZQUFZLENBQUM7QUFDL0MsU0FBSyxVQUFVLFlBQVksTUFBTSxXQUFXLENBQUM7QUFDN0MsU0FBSyxVQUFVLFVBQVUsZ0JBQWdCO0FBQ3pDLFNBQUssYUFBYTtBQUlsQixTQUFLLFVBQVU7QUFLZixTQUFLLGlCQUFpQjtBQUl0QixTQUFLLE9BQU8sS0FBSztBQUlqQixTQUFLLFdBQVc7QUFRaEIsU0FBSyxpQkFBaUI7QUFDdEIsU0FBSyxjQUFjLE1BQU07QUFDdkIsVUFBSSxLQUFLLFlBQVk7QUFDbkIsY0FBTTtBQUFBLFVBQ0o7QUFBQSxVQUNBLE9BQU87QUFBQSxRQUNULElBQUksS0FBSztBQUNULGFBQUssVUFBVSxpQkFBaUIsaUJBQWlCLEtBQUssT0FBTyxXQUFXO0FBQUEsTUFDMUU7QUFBQSxJQUNGO0FBQ0EsU0FBSyxVQUFVLE1BQU07QUFDbkIsWUFBTTtBQUFBLFFBQ0o7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0YsSUFBSTtBQUNKLFVBQUksVUFBVTtBQUNaO0FBQUEsTUFDRjtBQVVBLFVBQUksWUFBWSxlQUFlLFFBQVEsZUFBZSxTQUFTLFNBQVMsV0FBVyxzQkFBc0I7QUFDdkcsYUFBSyxVQUFVO0FBQUEsTUFDakIsT0FBTztBQUNMLGFBQUssVUFBVTtBQUFBLE1BQ2pCO0FBQUEsSUFDRjtBQUNBLFNBQUssVUFBVSxNQUFNO0FBQ25CLFdBQUssU0FBUyxLQUFLO0FBQUEsSUFDckI7QUFDQSxTQUFLLFNBQVMsTUFBTTtBQUNsQixXQUFLLFFBQVEsS0FBSztBQUFBLElBQ3BCO0FBQUEsRUFDRjtBQUFBLEVBQ0EsZUFBZTtBQU1iLFNBQUssWUFBWTtBQUFBLEVBQ25CO0FBQUEsRUFDQSxtQkFBbUI7QUFTakIsU0FBSyxZQUFZO0FBQUEsRUFDbkI7QUFBQTtBQUFBLEVBRU0sU0FBUyxJQUFJO0FBQUE7QUFDakIsVUFBSSxPQUFPLFFBQVc7QUFDcEIsV0FBRyxnQkFBZ0I7QUFDbkIsV0FBRyxlQUFlO0FBQUEsTUFDcEI7QUFDQSxXQUFLLEdBQUcsTUFBTTtBQUFBLElBQ2hCO0FBQUE7QUFBQTtBQUFBLEVBRU0sa0JBQWtCLE9BQU87QUFBQTtBQUM3QixXQUFLLGlCQUFpQjtBQUFBLElBQ3hCO0FBQUE7QUFBQSxFQUNBLG9CQUFvQjtBQUNsQixRQUFJLEtBQUssVUFBVSxRQUFXO0FBQzVCLFdBQUssUUFBUSxLQUFLO0FBQUEsSUFDcEI7QUFDQSxVQUFNLGFBQWEsS0FBSyxhQUFhLEtBQUssR0FBRyxRQUFRLGlCQUFpQjtBQUN0RSxRQUFJLFlBQVk7QUFDZCxXQUFLLFlBQVk7QUFDakIsdUJBQWlCLFlBQVksa0JBQWtCLEtBQUssV0FBVztBQUFBLElBQ2pFO0FBQUEsRUFDRjtBQUFBLEVBQ0EsdUJBQXVCO0FBQ3JCLFVBQU0sYUFBYSxLQUFLO0FBQ3hCLFFBQUksWUFBWTtBQUNkLDBCQUFvQixZQUFZLGtCQUFrQixLQUFLLFdBQVc7QUFDbEUsV0FBSyxhQUFhO0FBQUEsSUFDcEI7QUFBQSxFQUNGO0FBQUEsRUFDQSxJQUFJLFdBQVc7QUFDYixXQUFPLEtBQUssR0FBRyxnQkFBZ0I7QUFBQSxFQUNqQztBQUFBLEVBQ0EscUJBQXFCO0FBQ25CLFdBQU8sRUFBRSxPQUFPO0FBQUEsTUFDZCxPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsSUFDUixHQUFHLEVBQUUsT0FBTztBQUFBLE1BQ1YsT0FBTztBQUFBLE1BQ1AsTUFBTTtBQUFBLElBQ1IsQ0FBQyxHQUFHLEVBQUUsT0FBTztBQUFBLE1BQ1gsT0FBTztBQUFBLElBQ1QsQ0FBQyxDQUFDO0FBQUEsRUFDSjtBQUFBLEVBQ0EsU0FBUztBQUNQLFVBQU07QUFBQSxNQUNKO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGLElBQUk7QUFDSixVQUFNLE9BQU8sV0FBVyxJQUFJO0FBQzVCLFVBQU0sU0FBUyxZQUFZLFlBQVksRUFBRTtBQUN6QyxXQUFPLEVBQUUsTUFBTTtBQUFBLE1BQ2IsS0FBSztBQUFBLE1BQ0wsU0FBUyxLQUFLO0FBQUEsTUFDZCxRQUFRLEtBQUs7QUFBQSxNQUNiLFNBQVMsS0FBSztBQUFBLE1BQ2QsT0FBTyxtQkFBbUIsT0FBTztBQUFBLFFBQy9CLENBQUMsSUFBSSxHQUFHO0FBQUEsUUFDUixXQUFXO0FBQUEsUUFDWCxpQkFBaUI7QUFBQSxRQUNqQixrQkFBa0I7QUFBQSxRQUNsQixDQUFDLGlCQUFpQixPQUFPLEVBQUUsR0FBRyxZQUFZO0FBQUEsUUFDMUMsQ0FBQyxtQkFBbUIsU0FBUyxFQUFFLEdBQUcsY0FBYztBQUFBLFFBQ2hELENBQUMseUJBQXlCLGNBQWMsRUFBRSxHQUFHO0FBQUE7QUFBQSxRQUU3QyxtQkFBbUIsQ0FBQztBQUFBLFFBQ3BCLGlCQUFpQixDQUFDO0FBQUEsTUFDcEIsQ0FBQztBQUFBLE1BQ0QsTUFBTTtBQUFBLE1BQ04sZ0JBQWdCLFVBQVUsU0FBUztBQUFBLE1BQ25DLGlCQUFpQixXQUFXLFNBQVM7QUFBQSxNQUNyQyxVQUFVO0FBQUEsSUFDWixHQUFHLEVBQUUsU0FBUztBQUFBLE1BQ1osS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLElBQ1QsR0FBRyxFQUFFLE9BQU87QUFBQSxNQUNWLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxRQUNMLHNCQUFzQjtBQUFBLFFBQ3RCLDZCQUE2QixDQUFDO0FBQUEsTUFDaEM7QUFBQSxNQUNBLE1BQU07QUFBQSxJQUNSLEdBQUcsRUFBRSxRQUFRO0FBQUEsTUFDWCxLQUFLO0FBQUEsSUFDUCxDQUFDLENBQUMsR0FBRyxFQUFFLE9BQU87QUFBQSxNQUNaLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxJQUNULEdBQUcsS0FBSyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7QUFBQSxFQUNoQztBQUFBLEVBQ0EsSUFBSSxLQUFLO0FBQ1AsV0FBTyxXQUFXLElBQUk7QUFBQSxFQUN4QjtBQUFBLEVBQ0EsV0FBVyxXQUFXO0FBQ3BCLFdBQU87QUFBQSxNQUNMLFNBQVMsQ0FBQyxjQUFjO0FBQUEsSUFDMUI7QUFBQSxFQUNGO0FBQ0Y7QUFDQSxJQUFJLGlCQUFpQjtBQUNyQixNQUFNLFFBQVE7QUFBQSxFQUNaLEtBQUs7QUFBQSxFQUNMLElBQUk7QUFDTjtBQUNBLElBQU0sbUJBQW1CO0FBQ3pCLElBQU0sa0JBQWtCO0FBQ3hCLElBQU0sYUFBYSxNQUFNO0FBQUEsRUFDdkIsWUFBWSxTQUFTO0FBQ25CLHFCQUFpQixNQUFNLE9BQU87QUFDOUIsU0FBSyxZQUFZLFlBQVksTUFBTSxhQUFhLENBQUM7QUFDakQsU0FBSyxpQkFBaUIsWUFBWSxNQUFNLGtCQUFrQixDQUFDO0FBQzNELFNBQUssVUFBVSxVQUFVLGVBQWU7QUFDeEMsU0FBSyxlQUFlLEdBQUcsS0FBSyxPQUFPO0FBQ25DLFNBQUssY0FBYyxHQUFHLEtBQUssT0FBTztBQUNsQyxTQUFLLFVBQVUsR0FBRyxLQUFLLE9BQU87QUFJOUIsU0FBSyxzQkFBc0I7QUFJM0IsU0FBSyxPQUFPLEtBQUs7QUFDakIsU0FBSyxtQkFBbUIsV0FBUztBQUMvQixZQUFNLFNBQVMsS0FBSyxVQUFVO0FBRTlCLFlBQU0sUUFBUSxPQUFPLEtBQUssV0FBUyxDQUFDLE1BQU0sUUFBUTtBQUNsRCxZQUFNLFVBQVUsT0FBTyxLQUFLLFdBQVMsTUFBTSxVQUFVLFNBQVMsQ0FBQyxNQUFNLFFBQVE7QUFDN0UsVUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTO0FBQ3RCO0FBQUEsTUFDRjtBQUdBLFlBQU0sWUFBWSxXQUFXO0FBQzdCLGlCQUFXLFNBQVMsUUFBUTtBQUMxQixjQUFNLFdBQVcsVUFBVSxZQUFZLElBQUk7QUFDM0MsY0FBTSxrQkFBa0IsUUFBUTtBQUFBLE1BQ2xDO0FBQUEsSUFDRjtBQUNBLFNBQUssVUFBVSxRQUFNO0FBQ25CLFNBQUcsZUFBZTtBQU9sQixZQUFNLGdCQUFnQixHQUFHLFVBQVUsR0FBRyxPQUFPLFFBQVEsV0FBVztBQVNoRSxVQUFJLGlCQUFpQixDQUFDLGNBQWMsVUFBVTtBQUM1QyxjQUFNLGVBQWUsS0FBSztBQUMxQixjQUFNLFdBQVcsY0FBYztBQUMvQixZQUFJLGFBQWEsY0FBYztBQUM3QixlQUFLLFFBQVE7QUFDYixlQUFLLGdCQUFnQixFQUFFO0FBQUEsUUFDekIsV0FBVyxLQUFLLHFCQUFxQjtBQUNuQyxlQUFLLFFBQVE7QUFDYixlQUFLLGdCQUFnQixFQUFFO0FBQUEsUUFDekI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLGFBQWEsT0FBTztBQUNsQixTQUFLLGlCQUFpQixLQUFLO0FBQzNCLFNBQUssZUFBZSxLQUFLO0FBQUEsTUFDdkI7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxtQkFBbUI7QUFVakIsU0FBSyxhQUFhLEtBQUssS0FBSztBQUFBLEVBQzlCO0FBQUEsRUFDTSxvQkFBb0I7QUFBQTtBQUd4QixZQUFNLFNBQVMsS0FBSyxHQUFHLGNBQWMsaUJBQWlCLEtBQUssS0FBSyxHQUFHLGNBQWMsa0JBQWtCO0FBQ25HLFVBQUksUUFBUTtBQUNWLGNBQU0sUUFBUSxLQUFLLFFBQVEsT0FBTyxjQUFjLFdBQVc7QUFDM0QsWUFBSSxPQUFPO0FBQ1QsZUFBSyxVQUFVLE1BQU0sS0FBSyxLQUFLLE9BQU87QUFBQSxRQUN4QztBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUE7QUFBQSxFQUNBLFlBQVk7QUFDVixXQUFPLE1BQU0sS0FBSyxLQUFLLEdBQUcsaUJBQWlCLFdBQVcsQ0FBQztBQUFBLEVBQ3pEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFPQSxnQkFBZ0IsT0FBTztBQUNyQixVQUFNO0FBQUEsTUFDSjtBQUFBLElBQ0YsSUFBSTtBQUNKLFNBQUssVUFBVSxLQUFLO0FBQUEsTUFDbEI7QUFBQSxNQUNBO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsVUFBVSxJQUFJO0FBR1osVUFBTSxvQkFBb0IsQ0FBQyxDQUFDLEtBQUssR0FBRyxRQUFRLG9CQUFvQixLQUFLLENBQUMsQ0FBQyxLQUFLLEdBQUcsUUFBUSxrQkFBa0I7QUFDekcsUUFBSSxHQUFHLFVBQVUsQ0FBQyxLQUFLLEdBQUcsU0FBUyxHQUFHLE1BQU0sR0FBRztBQUM3QztBQUFBLElBQ0Y7QUFHQSxVQUFNLFNBQVMsS0FBSyxVQUFVLEVBQUUsT0FBTyxXQUFTLENBQUMsTUFBTSxRQUFRO0FBRS9ELFFBQUksR0FBRyxVQUFVLE9BQU8sU0FBUyxHQUFHLE1BQU0sR0FBRztBQUMzQyxZQUFNLFFBQVEsT0FBTyxVQUFVLFdBQVMsVUFBVSxHQUFHLE1BQU07QUFDM0QsWUFBTSxVQUFVLE9BQU8sS0FBSztBQUM1QixVQUFJO0FBR0osVUFBSSxDQUFDLGFBQWEsWUFBWSxFQUFFLFNBQVMsR0FBRyxHQUFHLEdBQUc7QUFDaEQsZUFBTyxVQUFVLE9BQU8sU0FBUyxJQUFJLE9BQU8sQ0FBQyxJQUFJLE9BQU8sUUFBUSxDQUFDO0FBQUEsTUFDbkU7QUFHQSxVQUFJLENBQUMsV0FBVyxXQUFXLEVBQUUsU0FBUyxHQUFHLEdBQUcsR0FBRztBQUM3QyxlQUFPLFVBQVUsSUFBSSxPQUFPLE9BQU8sU0FBUyxDQUFDLElBQUksT0FBTyxRQUFRLENBQUM7QUFBQSxNQUNuRTtBQUNBLFVBQUksUUFBUSxPQUFPLFNBQVMsSUFBSSxHQUFHO0FBQ2pDLGFBQUssU0FBUyxFQUFFO0FBQ2hCLFlBQUksQ0FBQyxtQkFBbUI7QUFDdEIsZUFBSyxRQUFRLEtBQUs7QUFDbEIsZUFBSyxnQkFBZ0IsRUFBRTtBQUFBLFFBQ3pCO0FBQUEsTUFDRjtBQUdBLFVBQUksQ0FBQyxHQUFHLEVBQUUsU0FBUyxHQUFHLEdBQUcsR0FBRztBQUMxQixjQUFNLGdCQUFnQixLQUFLO0FBQzNCLGFBQUssUUFBUSxLQUFLLHVCQUF1QixLQUFLLFVBQVUsU0FBWSxTQUFZLFFBQVE7QUFDeEYsWUFBSSxrQkFBa0IsS0FBSyxTQUFTLEtBQUsscUJBQXFCO0FBTzVELGVBQUssZ0JBQWdCLEVBQUU7QUFBQSxRQUN6QjtBQUdBLFdBQUcsZUFBZTtBQUFBLE1BQ3BCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQTtBQUFBLEVBRU0sV0FBVztBQUFBO0FBQ2YsWUFBTSxlQUFlLEtBQUssVUFBVSxFQUFFLEtBQUssT0FBSyxFQUFFLGFBQWEsRUFBRTtBQUNqRSx1QkFBaUIsUUFBUSxpQkFBaUIsU0FBUyxTQUFTLGFBQWEsU0FBUztBQUFBLElBQ3BGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUlBLGlCQUFpQjtBQUNmLFVBQU07QUFBQSxNQUNKO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRixJQUFJO0FBQ0osVUFBTSxjQUFjLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUN0QyxRQUFJLENBQUMsYUFBYTtBQUNoQjtBQUFBLElBQ0Y7QUFDQSxXQUFPLEVBQUUsT0FBTztBQUFBLE1BQ2QsT0FBTztBQUFBLElBQ1QsR0FBRyxFQUFFLE9BQU87QUFBQSxNQUNWLElBQUk7QUFBQSxNQUNKLE9BQU87QUFBQSxJQUNULEdBQUcsVUFBVSxHQUFHLEVBQUUsT0FBTztBQUFBLE1BQ3ZCLElBQUk7QUFBQSxNQUNKLE9BQU87QUFBQSxJQUNULEdBQUcsU0FBUyxDQUFDO0FBQUEsRUFDZjtBQUFBLEVBQ0EsZ0JBQWdCO0FBQ2QsVUFBTTtBQUFBLE1BQ0o7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRixJQUFJO0FBQ0osUUFBSSxHQUFHLFVBQVUsU0FBUyxhQUFhLEtBQUssR0FBRyxVQUFVLFNBQVMsYUFBYSxLQUFLLFdBQVc7QUFDN0YsYUFBTztBQUFBLElBQ1Q7QUFDQSxRQUFJLFlBQVk7QUFDZCxhQUFPO0FBQUEsSUFDVDtBQUNBLFdBQU87QUFBQSxFQUNUO0FBQUEsRUFDQSxTQUFTO0FBQ1AsVUFBTTtBQUFBLE1BQ0o7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRixJQUFJO0FBQ0osVUFBTSxPQUFPLFdBQVcsSUFBSTtBQUM1QixzQkFBa0IsTUFBTSxJQUFJLE1BQU0sT0FBTyxLQUFLO0FBQzlDLFdBQU8sRUFBRSxNQUFNO0FBQUEsTUFDYixLQUFLO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixtQkFBbUIsUUFBUSxVQUFVO0FBQUEsTUFDckMsb0JBQW9CLEtBQUssY0FBYztBQUFBLE1BQ3ZDLGdCQUFnQixLQUFLLGNBQWMsTUFBTSxLQUFLO0FBQUEsTUFDOUMsU0FBUyxLQUFLO0FBQUEsTUFDZCxPQUFPO0FBQUEsSUFDVCxHQUFHLEtBQUssZUFBZSxHQUFHLEVBQUUsT0FBTztBQUFBLE1BQ2pDLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxJQUNULEdBQUcsRUFBRSxRQUFRO0FBQUEsTUFDWCxLQUFLO0FBQUEsSUFDUCxDQUFDLENBQUMsQ0FBQztBQUFBLEVBQ0w7QUFBQSxFQUNBLElBQUksS0FBSztBQUNQLFdBQU8sV0FBVyxJQUFJO0FBQUEsRUFDeEI7QUFBQSxFQUNBLFdBQVcsV0FBVztBQUNwQixXQUFPO0FBQUEsTUFDTCxTQUFTLENBQUMsY0FBYztBQUFBLElBQzFCO0FBQUEsRUFDRjtBQUNGO0FBQ0EsSUFBSSxnQkFBZ0I7QUFDcEIsV0FBVyxRQUFRO0FBQUEsRUFDakIsS0FBSztBQUFBLEVBQ0wsSUFBSTtBQUNOOyIsIm5hbWVzIjpbXSwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==
