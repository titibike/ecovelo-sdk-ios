import {
  isRTL
} from "./chunk-4LZLDCVM.js";
import {
  arrowBackSharp,
  closeCircle,
  closeSharp,
  searchOutline,
  searchSharp
} from "./chunk-D4BGZ3LF.js";
import {
  createColorClasses
} from "./chunk-5VP4V3BN.js";
import {
  getIonMode
} from "./chunk-TXLH22R2.js";
import {
  componentOnReady,
  debounceEvent,
  inheritAttributes,
  raf
} from "./chunk-RZR7LWTQ.js";
import {
  Host,
  config,
  createEvent,
  forceUpdate,
  getElement,
  h,
  registerInstance
} from "./chunk-BFPTXCSH.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js
var searchbarIosCss = ".sc-ion-searchbar-ios-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:var(--ion-placeholder-opacity, 0.6);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;color:var(--color);font-family:var(--ion-font-family, inherit);-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-searchbar-ios-h{color:var(--ion-color-contrast)}.ion-color.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios{background:var(--ion-color-base)}.ion-color.sc-ion-searchbar-ios-h .searchbar-clear-button.sc-ion-searchbar-ios,.ion-color.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios,.ion-color.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{color:inherit}.searchbar-search-icon.sc-ion-searchbar-ios{color:var(--icon-color);pointer-events:none}.searchbar-input-container.sc-ion-searchbar-ios{display:block;position:relative;-ms-flex-negative:1;flex-shrink:1;width:100%}.searchbar-input.sc-ion-searchbar-ios{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;border-radius:var(--border-radius);display:block;width:100%;min-height:inherit;border:0;outline:none;background:var(--background);font-family:inherit;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-input.sc-ion-searchbar-ios::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::-webkit-search-cancel-button,.searchbar-input.sc-ion-searchbar-ios::-ms-clear{display:none}.searchbar-cancel-button.sc-ion-searchbar-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:none;height:100%;border:0;outline:none;color:var(--cancel-button-color);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-cancel-button.sc-ion-searchbar-ios>div.sc-ion-searchbar-ios{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.searchbar-clear-button.sc-ion-searchbar-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:none;min-height:0;outline:none;color:var(--clear-button-color);-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-clear-button.sc-ion-searchbar-ios:focus{opacity:0.5}.searchbar-has-value.searchbar-should-show-clear.sc-ion-searchbar-ios-h .searchbar-clear-button.sc-ion-searchbar-ios{display:block}.searchbar-disabled.sc-ion-searchbar-ios-h{cursor:default;opacity:0.4;pointer-events:none}.sc-ion-searchbar-ios-h{--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.07);--border-radius:10px;--box-shadow:none;--cancel-button-color:var(--ion-color-primary, #0054e9);--clear-button-color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666));--color:var(--ion-text-color, #000);--icon-color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666));-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:12px;padding-bottom:12px;min-height:60px;contain:content}.searchbar-input-container.sc-ion-searchbar-ios{min-height:36px}.searchbar-search-icon.sc-ion-searchbar-ios{-webkit-margin-start:calc(50% - 60px);margin-inline-start:calc(50% - 60px);top:0;position:absolute;width:1.375rem;height:100%;contain:strict}.searchbar-search-icon.sc-ion-searchbar-ios{inset-inline-start:5px}.searchbar-input.sc-ion-searchbar-ios{-webkit-padding-start:0px;padding-inline-start:0px;-webkit-padding-end:0px;padding-inline-end:0px;padding-top:6px;padding-bottom:6px;height:100%;font-size:1.0625rem;font-weight:400;contain:strict}.searchbar-has-value.searchbar-should-show-clear.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios{-webkit-padding-start:1.75rem;padding-inline-start:1.75rem;-webkit-padding-end:1.75rem;padding-inline-end:1.75rem}.searchbar-clear-button.sc-ion-searchbar-ios{top:0;background-position:center;position:absolute;width:1.875rem;height:100%;border:0;background-color:transparent}.searchbar-clear-button.sc-ion-searchbar-ios{inset-inline-end:0}.searchbar-clear-icon.sc-ion-searchbar-ios{width:1.125rem;height:100%}.searchbar-cancel-button.sc-ion-searchbar-ios{-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:0;padding-inline-end:0;padding-top:0;padding-bottom:0;-ms-flex-negative:0;flex-shrink:0;background-color:transparent;font-size:17px}.searchbar-left-aligned.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{-webkit-margin-start:0;margin-inline-start:0}.searchbar-left-aligned.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios{-webkit-padding-start:1.875rem;padding-inline-start:1.875rem}.searchbar-has-focus.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios,.searchbar-should-show-cancel.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios,.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{display:block}.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios,.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios{-webkit-transition:all 300ms ease;transition:all 300ms ease}.searchbar-animated.searchbar-has-focus.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios,.searchbar-animated.searchbar-should-show-cancel.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{opacity:1;pointer-events:auto}.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{-webkit-margin-end:-100%;margin-inline-end:-100%;-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0);-webkit-transition:all 300ms ease;transition:all 300ms ease;opacity:0;pointer-events:none}.searchbar-no-animate.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios,.searchbar-no-animate.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios,.searchbar-no-animate.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{-webkit-transition-duration:0ms;transition-duration:0ms}.ion-color.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{color:var(--ion-color-base)}@media (any-hover: hover){.ion-color.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios:hover{color:var(--ion-color-tint)}}ion-toolbar.sc-ion-searchbar-ios-h,ion-toolbar .sc-ion-searchbar-ios-h{padding-top:1px;padding-bottom:15px;min-height:52px}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color),ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color){color:inherit}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-cancel-button.sc-ion-searchbar-ios,ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-cancel-button.sc-ion-searchbar-ios{color:currentColor}ion-toolbar.ion-color.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios,ion-toolbar.ion-color .sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{color:currentColor;opacity:0.5}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-input.sc-ion-searchbar-ios,ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-input.sc-ion-searchbar-ios{background:rgba(var(--ion-color-contrast-rgb), 0.07);color:currentColor}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-clear-button.sc-ion-searchbar-ios,ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-clear-button.sc-ion-searchbar-ios{color:currentColor;opacity:0.5}";
var searchbarMdCss = ".sc-ion-searchbar-md-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:var(--ion-placeholder-opacity, 0.6);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;color:var(--color);font-family:var(--ion-font-family, inherit);-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-searchbar-md-h{color:var(--ion-color-contrast)}.ion-color.sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md{background:var(--ion-color-base)}.ion-color.sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md,.ion-color.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md,.ion-color.sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md{color:inherit}.searchbar-search-icon.sc-ion-searchbar-md{color:var(--icon-color);pointer-events:none}.searchbar-input-container.sc-ion-searchbar-md{display:block;position:relative;-ms-flex-negative:1;flex-shrink:1;width:100%}.searchbar-input.sc-ion-searchbar-md{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;border-radius:var(--border-radius);display:block;width:100%;min-height:inherit;border:0;outline:none;background:var(--background);font-family:inherit;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-input.sc-ion-searchbar-md::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-webkit-search-cancel-button,.searchbar-input.sc-ion-searchbar-md::-ms-clear{display:none}.searchbar-cancel-button.sc-ion-searchbar-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:none;height:100%;border:0;outline:none;color:var(--cancel-button-color);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-cancel-button.sc-ion-searchbar-md>div.sc-ion-searchbar-md{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.searchbar-clear-button.sc-ion-searchbar-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:none;min-height:0;outline:none;color:var(--clear-button-color);-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-clear-button.sc-ion-searchbar-md:focus{opacity:0.5}.searchbar-has-value.searchbar-should-show-clear.sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md{display:block}.searchbar-disabled.sc-ion-searchbar-md-h{cursor:default;opacity:0.4;pointer-events:none}.sc-ion-searchbar-md-h{--background:var(--ion-background-color, #fff);--border-radius:2px;--box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);--cancel-button-color:var(--ion-color-step-900, var(--ion-text-color-step-100, #1a1a1a));--clear-button-color:initial;--color:var(--ion-color-step-850, var(--ion-text-color-step-150, #262626));--icon-color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666));-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;background:inherit}.searchbar-search-icon.sc-ion-searchbar-md{top:11px;width:1.3125rem;height:1.3125rem}.searchbar-search-icon.sc-ion-searchbar-md{inset-inline-start:16px}.searchbar-cancel-button.sc-ion-searchbar-md{top:0;background-color:transparent;font-size:1.5em}.searchbar-cancel-button.sc-ion-searchbar-md{inset-inline-start:9px}.searchbar-search-icon.sc-ion-searchbar-md,.searchbar-cancel-button.sc-ion-searchbar-md{position:absolute}.searchbar-search-icon.ion-activated.sc-ion-searchbar-md,.searchbar-cancel-button.ion-activated.sc-ion-searchbar-md{background-color:transparent}.searchbar-input.sc-ion-searchbar-md{-webkit-padding-start:3.4375rem;padding-inline-start:3.4375rem;-webkit-padding-end:3.4375rem;padding-inline-end:3.4375rem;padding-top:0.375rem;padding-bottom:0.375rem;background-position:left 8px center;height:auto;font-size:1rem;font-weight:400;line-height:30px}[dir=rtl].sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md,[dir=rtl] .sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md{background-position:right 8px center}[dir=rtl].sc-ion-searchbar-md .searchbar-input.sc-ion-searchbar-md{background-position:right 8px center}@supports selector(:dir(rtl)){.searchbar-input.sc-ion-searchbar-md:dir(rtl){background-position:right 8px center}}.searchbar-clear-button.sc-ion-searchbar-md{top:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;position:absolute;height:100%;border:0;background-color:transparent}.searchbar-clear-button.sc-ion-searchbar-md{inset-inline-end:13px}.searchbar-clear-button.ion-activated.sc-ion-searchbar-md{background-color:transparent}.searchbar-clear-icon.sc-ion-searchbar-md{width:1.375rem;height:100%}.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md{display:block}.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md,.searchbar-should-show-cancel.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md{display:block}.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md+.searchbar-search-icon.sc-ion-searchbar-md,.searchbar-should-show-cancel.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md+.searchbar-search-icon.sc-ion-searchbar-md{display:none}ion-toolbar.sc-ion-searchbar-md-h,ion-toolbar .sc-ion-searchbar-md-h{-webkit-padding-start:7px;padding-inline-start:7px;-webkit-padding-end:7px;padding-inline-end:7px;padding-top:3px;padding-bottom:3px}";
var Searchbar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionInput = createEvent(this, "ionInput", 7);
    this.ionChange = createEvent(this, "ionChange", 7);
    this.ionCancel = createEvent(this, "ionCancel", 7);
    this.ionClear = createEvent(this, "ionClear", 7);
    this.ionBlur = createEvent(this, "ionBlur", 7);
    this.ionFocus = createEvent(this, "ionFocus", 7);
    this.ionStyle = createEvent(this, "ionStyle", 7);
    this.isCancelVisible = false;
    this.shouldAlignLeft = true;
    this.inputId = `ion-searchbar-${searchbarIds++}`;
    this.inheritedAttributes = {};
    this.focused = false;
    this.noAnimate = true;
    this.animated = false;
    this.autocapitalize = "off";
    this.autocomplete = "off";
    this.autocorrect = "off";
    this.cancelButtonIcon = config.get("backButtonIcon", arrowBackSharp);
    this.cancelButtonText = "Cancel";
    this.disabled = false;
    this.name = this.inputId;
    this.placeholder = "Search";
    this.showCancelButton = "never";
    this.showClearButton = "always";
    this.spellcheck = false;
    this.type = "search";
    this.value = "";
    this.onClearInput = (shouldFocus) => __async(this, null, function* () {
      this.ionClear.emit();
      return new Promise((resolve) => {
        setTimeout(() => {
          const value = this.getValue();
          if (value !== "") {
            this.value = "";
            this.emitInputChange();
            if (shouldFocus && !this.focused) {
              this.setFocus();
              this.focusedValue = value;
            }
          }
          resolve();
        }, 16 * 4);
      });
    });
    this.onCancelSearchbar = (ev) => __async(this, null, function* () {
      if (ev) {
        ev.preventDefault();
        ev.stopPropagation();
      }
      this.ionCancel.emit();
      const value = this.getValue();
      const focused = this.focused;
      yield this.onClearInput();
      if (value && !focused) {
        this.emitValueChange(ev);
      }
      if (this.nativeInput) {
        this.nativeInput.blur();
      }
    });
    this.onInput = (ev) => {
      const input = ev.target;
      if (input) {
        this.value = input.value;
      }
      this.emitInputChange(ev);
    };
    this.onChange = (ev) => {
      this.emitValueChange(ev);
    };
    this.onBlur = (ev) => {
      this.focused = false;
      this.ionBlur.emit();
      this.positionElements();
      if (this.focusedValue !== this.value) {
        this.emitValueChange(ev);
      }
      this.focusedValue = void 0;
    };
    this.onFocus = () => {
      this.focused = true;
      this.focusedValue = this.value;
      this.ionFocus.emit();
      this.positionElements();
    };
  }
  /**
   * lang and dir are globally enumerated attributes.
   * As a result, creating these as properties
   * can have unintended side effects. Instead, we
   * listen for attribute changes and inherit them
   * to the inner `<input>` element.
   */
  onLangChanged(newValue) {
    this.inheritedAttributes = Object.assign(Object.assign({}, this.inheritedAttributes), {
      lang: newValue
    });
    forceUpdate(this);
  }
  onDirChanged(newValue) {
    this.inheritedAttributes = Object.assign(Object.assign({}, this.inheritedAttributes), {
      dir: newValue
    });
    forceUpdate(this);
  }
  debounceChanged() {
    const {
      ionInput,
      debounce,
      originalIonInput
    } = this;
    this.ionInput = debounce === void 0 ? originalIonInput !== null && originalIonInput !== void 0 ? originalIonInput : ionInput : debounceEvent(ionInput, debounce);
  }
  valueChanged() {
    const inputEl = this.nativeInput;
    const value = this.getValue();
    if (inputEl && inputEl.value !== value) {
      inputEl.value = value;
    }
  }
  showCancelButtonChanged() {
    requestAnimationFrame(() => {
      this.positionElements();
      forceUpdate(this);
    });
  }
  connectedCallback() {
    this.emitStyle();
  }
  componentWillLoad() {
    this.inheritedAttributes = Object.assign({}, inheritAttributes(this.el, ["lang", "dir"]));
  }
  componentDidLoad() {
    this.originalIonInput = this.ionInput;
    this.positionElements();
    this.debounceChanged();
    setTimeout(() => {
      this.noAnimate = false;
    }, 300);
  }
  emitStyle() {
    this.ionStyle.emit({
      searchbar: true
    });
  }
  /**
   * Sets focus on the native `input` in `ion-searchbar`. Use this method instead of the global
   * `input.focus()`.
   * Developers who wish to focus an input when a page enters
   * should call `setFocus()` in the `ionViewDidEnter()` lifecycle method.
   * Developers who wish to focus an input when an overlay is presented
   * should call `setFocus` after `didPresent` has resolved.
   *
   * See [managing focus](/docs/developing/managing-focus) for more information.
   */
  setFocus() {
    return __async(this, null, function* () {
      if (this.nativeInput) {
        this.nativeInput.focus();
      }
    });
  }
  /**
   * Returns the native `<input>` element used under the hood.
   */
  getInputElement() {
    return __async(this, null, function* () {
      if (!this.nativeInput) {
        yield new Promise((resolve) => componentOnReady(this.el, resolve));
      }
      return Promise.resolve(this.nativeInput);
    });
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
    const newValue = value == null ? value : value.toString();
    this.focusedValue = newValue;
    this.ionChange.emit({
      value: newValue,
      event
    });
  }
  /**
   * Emits an `ionInput` event.
   */
  emitInputChange(event) {
    const {
      value
    } = this;
    this.ionInput.emit({
      value,
      event
    });
  }
  /**
   * Positions the input search icon, placeholder, and the cancel button
   * based on the input value and if it is focused. (ios only)
   */
  positionElements() {
    const value = this.getValue();
    const prevAlignLeft = this.shouldAlignLeft;
    const mode = getIonMode(this);
    const shouldAlignLeft = !this.animated || value.trim() !== "" || !!this.focused;
    this.shouldAlignLeft = shouldAlignLeft;
    if (mode !== "ios") {
      return;
    }
    if (prevAlignLeft !== shouldAlignLeft) {
      this.positionPlaceholder();
    }
    if (this.animated) {
      this.positionCancelButton();
    }
  }
  /**
   * Positions the input placeholder
   */
  positionPlaceholder() {
    const inputEl = this.nativeInput;
    if (!inputEl) {
      return;
    }
    const rtl = isRTL(this.el);
    const iconEl = (this.el.shadowRoot || this.el).querySelector(".searchbar-search-icon");
    if (this.shouldAlignLeft) {
      inputEl.removeAttribute("style");
      iconEl.removeAttribute("style");
    } else {
      const doc = document;
      const tempSpan = doc.createElement("span");
      tempSpan.innerText = this.placeholder || "";
      doc.body.appendChild(tempSpan);
      raf(() => {
        const textWidth = tempSpan.offsetWidth;
        tempSpan.remove();
        const inputLeft = "calc(50% - " + textWidth / 2 + "px)";
        const iconLeft = "calc(50% - " + (textWidth / 2 + iconEl.clientWidth + 8) + "px)";
        if (rtl) {
          inputEl.style.paddingRight = inputLeft;
          iconEl.style.marginRight = iconLeft;
        } else {
          inputEl.style.paddingLeft = inputLeft;
          iconEl.style.marginLeft = iconLeft;
        }
      });
    }
  }
  /**
   * Show the iOS Cancel button on focus, hide it offscreen otherwise
   */
  positionCancelButton() {
    const rtl = isRTL(this.el);
    const cancelButton = (this.el.shadowRoot || this.el).querySelector(".searchbar-cancel-button");
    const shouldShowCancel = this.shouldShowCancelButton();
    if (cancelButton !== null && shouldShowCancel !== this.isCancelVisible) {
      const cancelStyle = cancelButton.style;
      this.isCancelVisible = shouldShowCancel;
      if (shouldShowCancel) {
        if (rtl) {
          cancelStyle.marginLeft = "0";
        } else {
          cancelStyle.marginRight = "0";
        }
      } else {
        const offset = cancelButton.offsetWidth;
        if (offset > 0) {
          if (rtl) {
            cancelStyle.marginLeft = -offset + "px";
          } else {
            cancelStyle.marginRight = -offset + "px";
          }
        }
      }
    }
  }
  getValue() {
    return this.value || "";
  }
  hasValue() {
    return this.getValue() !== "";
  }
  /**
   * Determines whether or not the cancel button should be visible onscreen.
   * Cancel button should be shown if one of two conditions applies:
   * 1. `showCancelButton` is set to `always`.
   * 2. `showCancelButton` is set to `focus`, and the searchbar has been focused.
   */
  shouldShowCancelButton() {
    if (this.showCancelButton === "never" || this.showCancelButton === "focus" && !this.focused) {
      return false;
    }
    return true;
  }
  /**
   * Determines whether or not the clear button should be visible onscreen.
   * Clear button should be shown if one of two conditions applies:
   * 1. `showClearButton` is set to `always`.
   * 2. `showClearButton` is set to `focus`, and the searchbar has been focused.
   */
  shouldShowClearButton() {
    if (this.showClearButton === "never" || this.showClearButton === "focus" && !this.focused) {
      return false;
    }
    return true;
  }
  render() {
    const {
      cancelButtonText,
      autocapitalize
    } = this;
    const animated = this.animated && config.getBoolean("animated", true);
    const mode = getIonMode(this);
    const clearIcon = this.clearIcon || (mode === "ios" ? closeCircle : closeSharp);
    const searchIcon = this.searchIcon || (mode === "ios" ? searchOutline : searchSharp);
    const shouldShowCancelButton = this.shouldShowCancelButton();
    const cancelButton = this.showCancelButton !== "never" && h("button", {
      key: "19e18775856db87daeb4b9e3d7bca0461915a0df",
      "aria-label": cancelButtonText,
      "aria-hidden": shouldShowCancelButton ? void 0 : "true",
      type: "button",
      tabIndex: mode === "ios" && !shouldShowCancelButton ? -1 : void 0,
      onMouseDown: this.onCancelSearchbar,
      onTouchStart: this.onCancelSearchbar,
      class: "searchbar-cancel-button"
    }, h("div", {
      key: "b3bbdcc033f3bd3441d619e4a252cef0dad4d07e",
      "aria-hidden": "true"
    }, mode === "md" ? h("ion-icon", {
      "aria-hidden": "true",
      mode,
      icon: this.cancelButtonIcon,
      lazy: false
    }) : cancelButtonText));
    return h(Host, {
      key: "074aa60e051bfb3225e87d44bbb6346c59c73574",
      role: "search",
      "aria-disabled": this.disabled ? "true" : null,
      class: createColorClasses(this.color, {
        [mode]: true,
        "searchbar-animated": animated,
        "searchbar-disabled": this.disabled,
        "searchbar-no-animate": animated && this.noAnimate,
        "searchbar-has-value": this.hasValue(),
        "searchbar-left-aligned": this.shouldAlignLeft,
        "searchbar-has-focus": this.focused,
        "searchbar-should-show-clear": this.shouldShowClearButton(),
        "searchbar-should-show-cancel": this.shouldShowCancelButton()
      })
    }, h("div", {
      key: "54f58a79fe36e85d9295157303f1be89c98bbdaf",
      class: "searchbar-input-container"
    }, h("input", Object.assign({
      key: "f991a37fcf54d26b7ad10d89084764e03d97b9de",
      "aria-label": "search text",
      disabled: this.disabled,
      ref: (el) => this.nativeInput = el,
      class: "searchbar-input",
      inputMode: this.inputmode,
      enterKeyHint: this.enterkeyhint,
      name: this.name,
      onInput: this.onInput,
      onChange: this.onChange,
      onBlur: this.onBlur,
      onFocus: this.onFocus,
      minLength: this.minlength,
      maxLength: this.maxlength,
      placeholder: this.placeholder,
      type: this.type,
      value: this.getValue(),
      autoCapitalize: autocapitalize === "default" ? void 0 : autocapitalize,
      autoComplete: this.autocomplete,
      autoCorrect: this.autocorrect,
      spellcheck: this.spellcheck
    }, this.inheritedAttributes)), mode === "md" && cancelButton, h("ion-icon", {
      key: "8b44dd90a3292c5cf872ef16a8520675f5673494",
      "aria-hidden": "true",
      mode,
      icon: searchIcon,
      lazy: false,
      class: "searchbar-search-icon"
    }), h("button", {
      key: "79d9cfed8f01268044f82811a35d323a12dca749",
      "aria-label": "reset",
      type: "button",
      "no-blur": true,
      class: "searchbar-clear-button",
      onPointerDown: (ev) => {
        ev.preventDefault();
      },
      onClick: () => this.onClearInput(true)
    }, h("ion-icon", {
      key: "aa3b9fa8a61f853236783ac7bcd0b113ea65ece2",
      "aria-hidden": "true",
      mode,
      icon: clearIcon,
      lazy: false,
      class: "searchbar-clear-icon"
    }))), mode === "ios" && cancelButton);
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "lang": ["onLangChanged"],
      "dir": ["onDirChanged"],
      "debounce": ["debounceChanged"],
      "value": ["valueChanged"],
      "showCancelButton": ["showCancelButtonChanged"]
    };
  }
};
var searchbarIds = 0;
Searchbar.style = {
  ios: searchbarIosCss,
  md: searchbarMdCss
};
export {
  Searchbar as ion_searchbar
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-searchbar.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tc2VhcmNoYmFyLmVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgY3JlYXRlRXZlbnQsIGUgYXMgY29uZmlnLCBpIGFzIGZvcmNlVXBkYXRlLCBoLCBkIGFzIEhvc3QsIGcgYXMgZ2V0RWxlbWVudCB9IGZyb20gJy4vaW5kZXgtNER4WTZfZ0cuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWJvdW5jZUV2ZW50LCBiIGFzIGluaGVyaXRBdHRyaWJ1dGVzLCBjIGFzIGNvbXBvbmVudE9uUmVhZHksIHIgYXMgcmFmIH0gZnJvbSAnLi9oZWxwZXJzLThLU1FRR1F5LmpzJztcbmltcG9ydCB7IGkgYXMgaXNSVEwgfSBmcm9tICcuL2Rpci1DNTNmZWFnRC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZUNvbG9yQ2xhc3NlcyB9IGZyb20gJy4vdGhlbWUtRGlWSnlxbFguanMnO1xuaW1wb3J0IHsgYSBhcyBhcnJvd0JhY2tTaGFycCwgcyBhcyBzZWFyY2hPdXRsaW5lLCBlIGFzIHNlYXJjaFNoYXJwLCBiIGFzIGNsb3NlQ2lyY2xlLCBkIGFzIGNsb3NlU2hhcnAgfSBmcm9tICcuL2luZGV4LURWM3NKSlc4LmpzJztcbmltcG9ydCB7IGIgYXMgZ2V0SW9uTW9kZSB9IGZyb20gJy4vaW9uaWMtZ2xvYmFsLUNUU3l1ZmhGLmpzJztcbmNvbnN0IHNlYXJjaGJhcklvc0NzcyA9IFwiLnNjLWlvbi1zZWFyY2hiYXItaW9zLWh7LS1wbGFjZWhvbGRlci1jb2xvcjppbml0aWFsOy0tcGxhY2Vob2xkZXItZm9udC1zdHlsZTppbml0aWFsOy0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6aW5pdGlhbDstLXBsYWNlaG9sZGVyLW9wYWNpdHk6dmFyKC0taW9uLXBsYWNlaG9sZGVyLW9wYWNpdHksIDAuNik7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjt3aWR0aDoxMDAlO2NvbG9yOnZhcigtLWNvbG9yKTtmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHksIGluaGVyaXQpOy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveH0uaW9uLWNvbG9yLnNjLWlvbi1zZWFyY2hiYXItaW9zLWh7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KX0uaW9uLWNvbG9yLnNjLWlvbi1zZWFyY2hiYXItaW9zLWggLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLWlvc3tiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1iYXNlKX0uaW9uLWNvbG9yLnNjLWlvbi1zZWFyY2hiYXItaW9zLWggLnNlYXJjaGJhci1jbGVhci1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1pb3MsLmlvbi1jb2xvci5zYy1pb24tc2VhcmNoYmFyLWlvcy1oIC5zZWFyY2hiYXItY2FuY2VsLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLWlvcywuaW9uLWNvbG9yLnNjLWlvbi1zZWFyY2hiYXItaW9zLWggLnNlYXJjaGJhci1zZWFyY2gtaWNvbi5zYy1pb24tc2VhcmNoYmFyLWlvc3tjb2xvcjppbmhlcml0fS5zZWFyY2hiYXItc2VhcmNoLWljb24uc2MtaW9uLXNlYXJjaGJhci1pb3N7Y29sb3I6dmFyKC0taWNvbi1jb2xvcik7cG9pbnRlci1ldmVudHM6bm9uZX0uc2VhcmNoYmFyLWlucHV0LWNvbnRhaW5lci5zYy1pb24tc2VhcmNoYmFyLWlvc3tkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4LW5lZ2F0aXZlOjE7ZmxleC1zaHJpbms6MTt3aWR0aDoxMDAlfS5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1pb3N7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6aW5oZXJpdDtmb250LXN0eWxlOmluaGVyaXQ7Zm9udC13ZWlnaHQ6aW5oZXJpdDtsZXR0ZXItc3BhY2luZzppbmhlcml0O3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3RleHQtaW5kZW50OmluaGVyaXQ7dGV4dC1vdmVyZmxvdzppbmhlcml0O3RleHQtdHJhbnNmb3JtOmluaGVyaXQ7dGV4dC1hbGlnbjppbmhlcml0O3doaXRlLXNwYWNlOmluaGVyaXQ7Y29sb3I6aW5oZXJpdDtib3JkZXItcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJTttaW4taGVpZ2h0OmluaGVyaXQ7Ym9yZGVyOjA7b3V0bGluZTpub25lO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7Zm9udC1mYW1pbHk6aW5oZXJpdDstd2Via2l0LWJveC1zaGFkb3c6dmFyKC0tYm94LXNoYWRvdyk7Ym94LXNoYWRvdzp2YXIoLS1ib3gtc2hhZG93KTstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lfS5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1pb3M6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0tcGxhY2Vob2xkZXItY29sb3IpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zdHlsZTp2YXIoLS1wbGFjZWhvbGRlci1mb250LXN0eWxlKTtmb250LXdlaWdodDp2YXIoLS1wbGFjZWhvbGRlci1mb250LXdlaWdodCk7b3BhY2l0eTp2YXIoLS1wbGFjZWhvbGRlci1vcGFjaXR5KX0uc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItaW9zOjotbW96LXBsYWNlaG9sZGVye2NvbG9yOnZhcigtLXBsYWNlaG9sZGVyLWNvbG9yKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc3R5bGU6dmFyKC0tcGxhY2Vob2xkZXItZm9udC1zdHlsZSk7Zm9udC13ZWlnaHQ6dmFyKC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQpO29wYWNpdHk6dmFyKC0tcGxhY2Vob2xkZXItb3BhY2l0eSl9LnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLWlvczotbXMtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0tcGxhY2Vob2xkZXItY29sb3IpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zdHlsZTp2YXIoLS1wbGFjZWhvbGRlci1mb250LXN0eWxlKTtmb250LXdlaWdodDp2YXIoLS1wbGFjZWhvbGRlci1mb250LXdlaWdodCk7b3BhY2l0eTp2YXIoLS1wbGFjZWhvbGRlci1vcGFjaXR5KX0uc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItaW9zOjotbXMtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0tcGxhY2Vob2xkZXItY29sb3IpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zdHlsZTp2YXIoLS1wbGFjZWhvbGRlci1mb250LXN0eWxlKTtmb250LXdlaWdodDp2YXIoLS1wbGFjZWhvbGRlci1mb250LXdlaWdodCk7b3BhY2l0eTp2YXIoLS1wbGFjZWhvbGRlci1vcGFjaXR5KX0uc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItaW9zOjpwbGFjZWhvbGRlcntjb2xvcjp2YXIoLS1wbGFjZWhvbGRlci1jb2xvcik7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXN0eWxlOnZhcigtLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGUpO2ZvbnQtd2VpZ2h0OnZhcigtLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0KTtvcGFjaXR5OnZhcigtLXBsYWNlaG9sZGVyLW9wYWNpdHkpfS5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1pb3M6Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLWlvczo6LW1zLWNsZWFye2Rpc3BsYXk6bm9uZX0uc2VhcmNoYmFyLWNhbmNlbC1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1pb3N7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO2Rpc3BsYXk6bm9uZTtoZWlnaHQ6MTAwJTtib3JkZXI6MDtvdXRsaW5lOm5vbmU7Y29sb3I6dmFyKC0tY2FuY2VsLWJ1dHRvbi1jb2xvcik7Y3Vyc29yOnBvaW50ZXI7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lfS5zZWFyY2hiYXItY2FuY2VsLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLWlvcz5kaXYuc2MtaW9uLXNlYXJjaGJhci1pb3N7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9LnNlYXJjaGJhci1jbGVhci1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1pb3N7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6MDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjA7ZGlzcGxheTpub25lO21pbi1oZWlnaHQ6MDtvdXRsaW5lOm5vbmU7Y29sb3I6dmFyKC0tY2xlYXItYnV0dG9uLWNvbG9yKTstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmV9LnNlYXJjaGJhci1jbGVhci1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1pb3M6Zm9jdXN7b3BhY2l0eTowLjV9LnNlYXJjaGJhci1oYXMtdmFsdWUuc2VhcmNoYmFyLXNob3VsZC1zaG93LWNsZWFyLnNjLWlvbi1zZWFyY2hiYXItaW9zLWggLnNlYXJjaGJhci1jbGVhci1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1pb3N7ZGlzcGxheTpibG9ja30uc2VhcmNoYmFyLWRpc2FibGVkLnNjLWlvbi1zZWFyY2hiYXItaW9zLWh7Y3Vyc29yOmRlZmF1bHQ7b3BhY2l0eTowLjQ7cG9pbnRlci1ldmVudHM6bm9uZX0uc2MtaW9uLXNlYXJjaGJhci1pb3MtaHstLWJhY2tncm91bmQ6cmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsIDAsIDAsIDApLCAwLjA3KTstLWJvcmRlci1yYWRpdXM6MTBweDstLWJveC1zaGFkb3c6bm9uZTstLWNhbmNlbC1idXR0b24tY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMwMDU0ZTkpOy0tY2xlYXItYnV0dG9uLWNvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCwgdmFyKC0taW9uLXRleHQtY29sb3Itc3RlcC00MDAsICM2NjY2NjYpKTstLWNvbG9yOnZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwKTstLWljb24tY29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtNjAwLCB2YXIoLS1pb24tdGV4dC1jb2xvci1zdGVwLTQwMCwgIzY2NjY2NikpOy13ZWJraXQtcGFkZGluZy1zdGFydDoxMnB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjEycHg7LXdlYmtpdC1wYWRkaW5nLWVuZDoxMnB4O3BhZGRpbmctaW5saW5lLWVuZDoxMnB4O3BhZGRpbmctdG9wOjEycHg7cGFkZGluZy1ib3R0b206MTJweDttaW4taGVpZ2h0OjYwcHg7Y29udGFpbjpjb250ZW50fS5zZWFyY2hiYXItaW5wdXQtY29udGFpbmVyLnNjLWlvbi1zZWFyY2hiYXItaW9ze21pbi1oZWlnaHQ6MzZweH0uc2VhcmNoYmFyLXNlYXJjaC1pY29uLnNjLWlvbi1zZWFyY2hiYXItaW9zey13ZWJraXQtbWFyZ2luLXN0YXJ0OmNhbGMoNTAlIC0gNjBweCk7bWFyZ2luLWlubGluZS1zdGFydDpjYWxjKDUwJSAtIDYwcHgpO3RvcDowO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEuMzc1cmVtO2hlaWdodDoxMDAlO2NvbnRhaW46c3RyaWN0fS5zZWFyY2hiYXItc2VhcmNoLWljb24uc2MtaW9uLXNlYXJjaGJhci1pb3N7aW5zZXQtaW5saW5lLXN0YXJ0OjVweH0uc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItaW9zey13ZWJraXQtcGFkZGluZy1zdGFydDowcHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MHB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MHB4O3BhZGRpbmctaW5saW5lLWVuZDowcHg7cGFkZGluZy10b3A6NnB4O3BhZGRpbmctYm90dG9tOjZweDtoZWlnaHQ6MTAwJTtmb250LXNpemU6MS4wNjI1cmVtO2ZvbnQtd2VpZ2h0OjQwMDtjb250YWluOnN0cmljdH0uc2VhcmNoYmFyLWhhcy12YWx1ZS5zZWFyY2hiYXItc2hvdWxkLXNob3ctY2xlYXIuc2MtaW9uLXNlYXJjaGJhci1pb3MtaCAuc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItaW9zey13ZWJraXQtcGFkZGluZy1zdGFydDoxLjc1cmVtO3BhZGRpbmctaW5saW5lLXN0YXJ0OjEuNzVyZW07LXdlYmtpdC1wYWRkaW5nLWVuZDoxLjc1cmVtO3BhZGRpbmctaW5saW5lLWVuZDoxLjc1cmVtfS5zZWFyY2hiYXItY2xlYXItYnV0dG9uLnNjLWlvbi1zZWFyY2hiYXItaW9ze3RvcDowO2JhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEuODc1cmVtO2hlaWdodDoxMDAlO2JvcmRlcjowO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9LnNlYXJjaGJhci1jbGVhci1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1pb3N7aW5zZXQtaW5saW5lLWVuZDowfS5zZWFyY2hiYXItY2xlYXItaWNvbi5zYy1pb24tc2VhcmNoYmFyLWlvc3t3aWR0aDoxLjEyNXJlbTtoZWlnaHQ6MTAwJX0uc2VhcmNoYmFyLWNhbmNlbC1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1pb3N7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjEycHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MTJweDstd2Via2l0LXBhZGRpbmctZW5kOjA7cGFkZGluZy1pbmxpbmUtZW5kOjA7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowOy1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MDtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2ZvbnQtc2l6ZToxN3B4fS5zZWFyY2hiYXItbGVmdC1hbGlnbmVkLnNjLWlvbi1zZWFyY2hiYXItaW9zLWggLnNlYXJjaGJhci1zZWFyY2gtaWNvbi5zYy1pb24tc2VhcmNoYmFyLWlvc3std2Via2l0LW1hcmdpbi1zdGFydDowO21hcmdpbi1pbmxpbmUtc3RhcnQ6MH0uc2VhcmNoYmFyLWxlZnQtYWxpZ25lZC5zYy1pb24tc2VhcmNoYmFyLWlvcy1oIC5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1pb3N7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjEuODc1cmVtO3BhZGRpbmctaW5saW5lLXN0YXJ0OjEuODc1cmVtfS5zZWFyY2hiYXItaGFzLWZvY3VzLnNjLWlvbi1zZWFyY2hiYXItaW9zLWggLnNlYXJjaGJhci1jYW5jZWwtYnV0dG9uLnNjLWlvbi1zZWFyY2hiYXItaW9zLC5zZWFyY2hiYXItc2hvdWxkLXNob3ctY2FuY2VsLnNjLWlvbi1zZWFyY2hiYXItaW9zLWggLnNlYXJjaGJhci1jYW5jZWwtYnV0dG9uLnNjLWlvbi1zZWFyY2hiYXItaW9zLC5zZWFyY2hiYXItYW5pbWF0ZWQuc2MtaW9uLXNlYXJjaGJhci1pb3MtaCAuc2VhcmNoYmFyLWNhbmNlbC1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1pb3N7ZGlzcGxheTpibG9ja30uc2VhcmNoYmFyLWFuaW1hdGVkLnNjLWlvbi1zZWFyY2hiYXItaW9zLWggLnNlYXJjaGJhci1zZWFyY2gtaWNvbi5zYy1pb24tc2VhcmNoYmFyLWlvcywuc2VhcmNoYmFyLWFuaW1hdGVkLnNjLWlvbi1zZWFyY2hiYXItaW9zLWggLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLWlvc3std2Via2l0LXRyYW5zaXRpb246YWxsIDMwMG1zIGVhc2U7dHJhbnNpdGlvbjphbGwgMzAwbXMgZWFzZX0uc2VhcmNoYmFyLWFuaW1hdGVkLnNlYXJjaGJhci1oYXMtZm9jdXMuc2MtaW9uLXNlYXJjaGJhci1pb3MtaCAuc2VhcmNoYmFyLWNhbmNlbC1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1pb3MsLnNlYXJjaGJhci1hbmltYXRlZC5zZWFyY2hiYXItc2hvdWxkLXNob3ctY2FuY2VsLnNjLWlvbi1zZWFyY2hiYXItaW9zLWggLnNlYXJjaGJhci1jYW5jZWwtYnV0dG9uLnNjLWlvbi1zZWFyY2hiYXItaW9ze29wYWNpdHk6MTtwb2ludGVyLWV2ZW50czphdXRvfS5zZWFyY2hiYXItYW5pbWF0ZWQuc2MtaW9uLXNlYXJjaGJhci1pb3MtaCAuc2VhcmNoYmFyLWNhbmNlbC1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1pb3N7LXdlYmtpdC1tYXJnaW4tZW5kOi0xMDAlO21hcmdpbi1pbmxpbmUtZW5kOi0xMDAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsICAwLCAgMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsICAwLCAgMCk7LXdlYmtpdC10cmFuc2l0aW9uOmFsbCAzMDBtcyBlYXNlO3RyYW5zaXRpb246YWxsIDMwMG1zIGVhc2U7b3BhY2l0eTowO3BvaW50ZXItZXZlbnRzOm5vbmV9LnNlYXJjaGJhci1uby1hbmltYXRlLnNjLWlvbi1zZWFyY2hiYXItaW9zLWggLnNlYXJjaGJhci1zZWFyY2gtaWNvbi5zYy1pb24tc2VhcmNoYmFyLWlvcywuc2VhcmNoYmFyLW5vLWFuaW1hdGUuc2MtaW9uLXNlYXJjaGJhci1pb3MtaCAuc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItaW9zLC5zZWFyY2hiYXItbm8tYW5pbWF0ZS5zYy1pb24tc2VhcmNoYmFyLWlvcy1oIC5zZWFyY2hiYXItY2FuY2VsLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLWlvc3std2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246MG1zO3RyYW5zaXRpb24tZHVyYXRpb246MG1zfS5pb24tY29sb3Iuc2MtaW9uLXNlYXJjaGJhci1pb3MtaCAuc2VhcmNoYmFyLWNhbmNlbC1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1pb3N7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWJhc2UpfUBtZWRpYSAoYW55LWhvdmVyOiBob3Zlcil7Lmlvbi1jb2xvci5zYy1pb24tc2VhcmNoYmFyLWlvcy1oIC5zZWFyY2hiYXItY2FuY2VsLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLWlvczpob3Zlcntjb2xvcjp2YXIoLS1pb24tY29sb3ItdGludCl9fWlvbi10b29sYmFyLnNjLWlvbi1zZWFyY2hiYXItaW9zLWgsaW9uLXRvb2xiYXIgLnNjLWlvbi1zZWFyY2hiYXItaW9zLWh7cGFkZGluZy10b3A6MXB4O3BhZGRpbmctYm90dG9tOjE1cHg7bWluLWhlaWdodDo1MnB4fWlvbi10b29sYmFyLmlvbi1jb2xvci5zYy1pb24tc2VhcmNoYmFyLWlvcy1oOm5vdCguaW9uLWNvbG9yKSxpb24tdG9vbGJhci5pb24tY29sb3IgLnNjLWlvbi1zZWFyY2hiYXItaW9zLWg6bm90KC5pb24tY29sb3Ipe2NvbG9yOmluaGVyaXR9aW9uLXRvb2xiYXIuaW9uLWNvbG9yLnNjLWlvbi1zZWFyY2hiYXItaW9zLWg6bm90KC5pb24tY29sb3IpIC5zZWFyY2hiYXItY2FuY2VsLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLWlvcyxpb24tdG9vbGJhci5pb24tY29sb3IgLnNjLWlvbi1zZWFyY2hiYXItaW9zLWg6bm90KC5pb24tY29sb3IpIC5zZWFyY2hiYXItY2FuY2VsLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLWlvc3tjb2xvcjpjdXJyZW50Q29sb3J9aW9uLXRvb2xiYXIuaW9uLWNvbG9yLnNjLWlvbi1zZWFyY2hiYXItaW9zLWggLnNlYXJjaGJhci1zZWFyY2gtaWNvbi5zYy1pb24tc2VhcmNoYmFyLWlvcyxpb24tdG9vbGJhci5pb24tY29sb3IgLnNjLWlvbi1zZWFyY2hiYXItaW9zLWggLnNlYXJjaGJhci1zZWFyY2gtaWNvbi5zYy1pb24tc2VhcmNoYmFyLWlvc3tjb2xvcjpjdXJyZW50Q29sb3I7b3BhY2l0eTowLjV9aW9uLXRvb2xiYXIuaW9uLWNvbG9yLnNjLWlvbi1zZWFyY2hiYXItaW9zLWg6bm90KC5pb24tY29sb3IpIC5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1pb3MsaW9uLXRvb2xiYXIuaW9uLWNvbG9yIC5zYy1pb24tc2VhcmNoYmFyLWlvcy1oOm5vdCguaW9uLWNvbG9yKSAuc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItaW9ze2JhY2tncm91bmQ6cmdiYSh2YXIoLS1pb24tY29sb3ItY29udHJhc3QtcmdiKSwgMC4wNyk7Y29sb3I6Y3VycmVudENvbG9yfWlvbi10b29sYmFyLmlvbi1jb2xvci5zYy1pb24tc2VhcmNoYmFyLWlvcy1oOm5vdCguaW9uLWNvbG9yKSAuc2VhcmNoYmFyLWNsZWFyLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLWlvcyxpb24tdG9vbGJhci5pb24tY29sb3IgLnNjLWlvbi1zZWFyY2hiYXItaW9zLWg6bm90KC5pb24tY29sb3IpIC5zZWFyY2hiYXItY2xlYXItYnV0dG9uLnNjLWlvbi1zZWFyY2hiYXItaW9ze2NvbG9yOmN1cnJlbnRDb2xvcjtvcGFjaXR5OjAuNX1cIjtcbmNvbnN0IHNlYXJjaGJhck1kQ3NzID0gXCIuc2MtaW9uLXNlYXJjaGJhci1tZC1oey0tcGxhY2Vob2xkZXItY29sb3I6aW5pdGlhbDstLXBsYWNlaG9sZGVyLWZvbnQtc3R5bGU6aW5pdGlhbDstLXBsYWNlaG9sZGVyLWZvbnQtd2VpZ2h0OmluaXRpYWw7LS1wbGFjZWhvbGRlci1vcGFjaXR5OnZhcigtLWlvbi1wbGFjZWhvbGRlci1vcGFjaXR5LCAwLjYpOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7d2lkdGg6MTAwJTtjb2xvcjp2YXIoLS1jb2xvcik7Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LCBpbmhlcml0KTstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3h9Lmlvbi1jb2xvci5zYy1pb24tc2VhcmNoYmFyLW1kLWh7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KX0uaW9uLWNvbG9yLnNjLWlvbi1zZWFyY2hiYXItbWQtaCAuc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItbWR7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItYmFzZSl9Lmlvbi1jb2xvci5zYy1pb24tc2VhcmNoYmFyLW1kLWggLnNlYXJjaGJhci1jbGVhci1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1tZCwuaW9uLWNvbG9yLnNjLWlvbi1zZWFyY2hiYXItbWQtaCAuc2VhcmNoYmFyLWNhbmNlbC1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1tZCwuaW9uLWNvbG9yLnNjLWlvbi1zZWFyY2hiYXItbWQtaCAuc2VhcmNoYmFyLXNlYXJjaC1pY29uLnNjLWlvbi1zZWFyY2hiYXItbWR7Y29sb3I6aW5oZXJpdH0uc2VhcmNoYmFyLXNlYXJjaC1pY29uLnNjLWlvbi1zZWFyY2hiYXItbWR7Y29sb3I6dmFyKC0taWNvbi1jb2xvcik7cG9pbnRlci1ldmVudHM6bm9uZX0uc2VhcmNoYmFyLWlucHV0LWNvbnRhaW5lci5zYy1pb24tc2VhcmNoYmFyLW1ke2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtbmVnYXRpdmU6MTtmbGV4LXNocmluazoxO3dpZHRoOjEwMCV9LnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLW1ke2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOmluaGVyaXQ7Zm9udC1zdHlsZTppbmhlcml0O2ZvbnQtd2VpZ2h0OmluaGVyaXQ7bGV0dGVyLXNwYWNpbmc6aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt0ZXh0LWluZGVudDppbmhlcml0O3RleHQtb3ZlcmZsb3c6aW5oZXJpdDt0ZXh0LXRyYW5zZm9ybTppbmhlcml0O3RleHQtYWxpZ246aW5oZXJpdDt3aGl0ZS1zcGFjZTppbmhlcml0O2NvbG9yOmluaGVyaXQ7Ym9yZGVyLXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7bWluLWhlaWdodDppbmhlcml0O2JvcmRlcjowO291dGxpbmU6bm9uZTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7LXdlYmtpdC1ib3gtc2hhZG93OnZhcigtLWJveC1zaGFkb3cpO2JveC1zaGFkb3c6dmFyKC0tYm94LXNoYWRvdyk7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94Oy13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lO2FwcGVhcmFuY2U6bm9uZX0uc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItbWQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0tcGxhY2Vob2xkZXItY29sb3IpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zdHlsZTp2YXIoLS1wbGFjZWhvbGRlci1mb250LXN0eWxlKTtmb250LXdlaWdodDp2YXIoLS1wbGFjZWhvbGRlci1mb250LXdlaWdodCk7b3BhY2l0eTp2YXIoLS1wbGFjZWhvbGRlci1vcGFjaXR5KX0uc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItbWQ6Oi1tb3otcGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0tcGxhY2Vob2xkZXItY29sb3IpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zdHlsZTp2YXIoLS1wbGFjZWhvbGRlci1mb250LXN0eWxlKTtmb250LXdlaWdodDp2YXIoLS1wbGFjZWhvbGRlci1mb250LXdlaWdodCk7b3BhY2l0eTp2YXIoLS1wbGFjZWhvbGRlci1vcGFjaXR5KX0uc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItbWQ6LW1zLWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOnZhcigtLXBsYWNlaG9sZGVyLWNvbG9yKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc3R5bGU6dmFyKC0tcGxhY2Vob2xkZXItZm9udC1zdHlsZSk7Zm9udC13ZWlnaHQ6dmFyKC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQpO29wYWNpdHk6dmFyKC0tcGxhY2Vob2xkZXItb3BhY2l0eSl9LnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLW1kOjotbXMtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0tcGxhY2Vob2xkZXItY29sb3IpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zdHlsZTp2YXIoLS1wbGFjZWhvbGRlci1mb250LXN0eWxlKTtmb250LXdlaWdodDp2YXIoLS1wbGFjZWhvbGRlci1mb250LXdlaWdodCk7b3BhY2l0eTp2YXIoLS1wbGFjZWhvbGRlci1vcGFjaXR5KX0uc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItbWQ6OnBsYWNlaG9sZGVye2NvbG9yOnZhcigtLXBsYWNlaG9sZGVyLWNvbG9yKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc3R5bGU6dmFyKC0tcGxhY2Vob2xkZXItZm9udC1zdHlsZSk7Zm9udC13ZWlnaHQ6dmFyKC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQpO29wYWNpdHk6dmFyKC0tcGxhY2Vob2xkZXItb3BhY2l0eSl9LnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLW1kOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLC5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1tZDo6LW1zLWNsZWFye2Rpc3BsYXk6bm9uZX0uc2VhcmNoYmFyLWNhbmNlbC1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1tZHttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7ZGlzcGxheTpub25lO2hlaWdodDoxMDAlO2JvcmRlcjowO291dGxpbmU6bm9uZTtjb2xvcjp2YXIoLS1jYW5jZWwtYnV0dG9uLWNvbG9yKTtjdXJzb3I6cG9pbnRlcjstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmV9LnNlYXJjaGJhci1jYW5jZWwtYnV0dG9uLnNjLWlvbi1zZWFyY2hiYXItbWQ+ZGl2LnNjLWlvbi1zZWFyY2hiYXItbWR7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9LnNlYXJjaGJhci1jbGVhci1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1tZHttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDtkaXNwbGF5Om5vbmU7bWluLWhlaWdodDowO291dGxpbmU6bm9uZTtjb2xvcjp2YXIoLS1jbGVhci1idXR0b24tY29sb3IpOy13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lO2FwcGVhcmFuY2U6bm9uZX0uc2VhcmNoYmFyLWNsZWFyLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLW1kOmZvY3Vze29wYWNpdHk6MC41fS5zZWFyY2hiYXItaGFzLXZhbHVlLnNlYXJjaGJhci1zaG91bGQtc2hvdy1jbGVhci5zYy1pb24tc2VhcmNoYmFyLW1kLWggLnNlYXJjaGJhci1jbGVhci1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1tZHtkaXNwbGF5OmJsb2NrfS5zZWFyY2hiYXItZGlzYWJsZWQuc2MtaW9uLXNlYXJjaGJhci1tZC1oe2N1cnNvcjpkZWZhdWx0O29wYWNpdHk6MC40O3BvaW50ZXItZXZlbnRzOm5vbmV9LnNjLWlvbi1zZWFyY2hiYXItbWQtaHstLWJhY2tncm91bmQ6dmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpOy0tYm9yZGVyLXJhZGl1czoycHg7LS1ib3gtc2hhZG93OjAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTstLWNhbmNlbC1idXR0b24tY29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtOTAwLCB2YXIoLS1pb24tdGV4dC1jb2xvci1zdGVwLTEwMCwgIzFhMWExYSkpOy0tY2xlYXItYnV0dG9uLWNvbG9yOmluaXRpYWw7LS1jb2xvcjp2YXIoLS1pb24tY29sb3Itc3RlcC04NTAsIHZhcigtLWlvbi10ZXh0LWNvbG9yLXN0ZXAtMTUwLCAjMjYyNjI2KSk7LS1pY29uLWNvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCwgdmFyKC0taW9uLXRleHQtY29sb3Itc3RlcC00MDAsICM2NjY2NjYpKTstd2Via2l0LXBhZGRpbmctc3RhcnQ6OHB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjhweDstd2Via2l0LXBhZGRpbmctZW5kOjhweDtwYWRkaW5nLWlubGluZS1lbmQ6OHB4O3BhZGRpbmctdG9wOjhweDtwYWRkaW5nLWJvdHRvbTo4cHg7YmFja2dyb3VuZDppbmhlcml0fS5zZWFyY2hiYXItc2VhcmNoLWljb24uc2MtaW9uLXNlYXJjaGJhci1tZHt0b3A6MTFweDt3aWR0aDoxLjMxMjVyZW07aGVpZ2h0OjEuMzEyNXJlbX0uc2VhcmNoYmFyLXNlYXJjaC1pY29uLnNjLWlvbi1zZWFyY2hiYXItbWR7aW5zZXQtaW5saW5lLXN0YXJ0OjE2cHh9LnNlYXJjaGJhci1jYW5jZWwtYnV0dG9uLnNjLWlvbi1zZWFyY2hiYXItbWR7dG9wOjA7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtmb250LXNpemU6MS41ZW19LnNlYXJjaGJhci1jYW5jZWwtYnV0dG9uLnNjLWlvbi1zZWFyY2hiYXItbWR7aW5zZXQtaW5saW5lLXN0YXJ0OjlweH0uc2VhcmNoYmFyLXNlYXJjaC1pY29uLnNjLWlvbi1zZWFyY2hiYXItbWQsLnNlYXJjaGJhci1jYW5jZWwtYnV0dG9uLnNjLWlvbi1zZWFyY2hiYXItbWR7cG9zaXRpb246YWJzb2x1dGV9LnNlYXJjaGJhci1zZWFyY2gtaWNvbi5pb24tYWN0aXZhdGVkLnNjLWlvbi1zZWFyY2hiYXItbWQsLnNlYXJjaGJhci1jYW5jZWwtYnV0dG9uLmlvbi1hY3RpdmF0ZWQuc2MtaW9uLXNlYXJjaGJhci1tZHtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1tZHstd2Via2l0LXBhZGRpbmctc3RhcnQ6My40Mzc1cmVtO3BhZGRpbmctaW5saW5lLXN0YXJ0OjMuNDM3NXJlbTstd2Via2l0LXBhZGRpbmctZW5kOjMuNDM3NXJlbTtwYWRkaW5nLWlubGluZS1lbmQ6My40Mzc1cmVtO3BhZGRpbmctdG9wOjAuMzc1cmVtO3BhZGRpbmctYm90dG9tOjAuMzc1cmVtO2JhY2tncm91bmQtcG9zaXRpb246bGVmdCA4cHggY2VudGVyO2hlaWdodDphdXRvO2ZvbnQtc2l6ZToxcmVtO2ZvbnQtd2VpZ2h0OjQwMDtsaW5lLWhlaWdodDozMHB4fVtkaXI9cnRsXS5zYy1pb24tc2VhcmNoYmFyLW1kLWggLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLW1kLFtkaXI9cnRsXSAuc2MtaW9uLXNlYXJjaGJhci1tZC1oIC5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1tZHtiYWNrZ3JvdW5kLXBvc2l0aW9uOnJpZ2h0IDhweCBjZW50ZXJ9W2Rpcj1ydGxdLnNjLWlvbi1zZWFyY2hiYXItbWQgLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLW1ke2JhY2tncm91bmQtcG9zaXRpb246cmlnaHQgOHB4IGNlbnRlcn1Ac3VwcG9ydHMgc2VsZWN0b3IoOmRpcihydGwpKXsuc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItbWQ6ZGlyKHJ0bCl7YmFja2dyb3VuZC1wb3NpdGlvbjpyaWdodCA4cHggY2VudGVyfX0uc2VhcmNoYmFyLWNsZWFyLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLW1ke3RvcDowO3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6MDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjA7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OjEwMCU7Ym9yZGVyOjA7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0uc2VhcmNoYmFyLWNsZWFyLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLW1ke2luc2V0LWlubGluZS1lbmQ6MTNweH0uc2VhcmNoYmFyLWNsZWFyLWJ1dHRvbi5pb24tYWN0aXZhdGVkLnNjLWlvbi1zZWFyY2hiYXItbWR7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0uc2VhcmNoYmFyLWNsZWFyLWljb24uc2MtaW9uLXNlYXJjaGJhci1tZHt3aWR0aDoxLjM3NXJlbTtoZWlnaHQ6MTAwJX0uc2VhcmNoYmFyLWhhcy1mb2N1cy5zYy1pb24tc2VhcmNoYmFyLW1kLWggLnNlYXJjaGJhci1zZWFyY2gtaWNvbi5zYy1pb24tc2VhcmNoYmFyLW1ke2Rpc3BsYXk6YmxvY2t9LnNlYXJjaGJhci1oYXMtZm9jdXMuc2MtaW9uLXNlYXJjaGJhci1tZC1oIC5zZWFyY2hiYXItY2FuY2VsLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLW1kLC5zZWFyY2hiYXItc2hvdWxkLXNob3ctY2FuY2VsLnNjLWlvbi1zZWFyY2hiYXItbWQtaCAuc2VhcmNoYmFyLWNhbmNlbC1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1tZHtkaXNwbGF5OmJsb2NrfS5zZWFyY2hiYXItaGFzLWZvY3VzLnNjLWlvbi1zZWFyY2hiYXItbWQtaCAuc2VhcmNoYmFyLWNhbmNlbC1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1tZCsuc2VhcmNoYmFyLXNlYXJjaC1pY29uLnNjLWlvbi1zZWFyY2hiYXItbWQsLnNlYXJjaGJhci1zaG91bGQtc2hvdy1jYW5jZWwuc2MtaW9uLXNlYXJjaGJhci1tZC1oIC5zZWFyY2hiYXItY2FuY2VsLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLW1kKy5zZWFyY2hiYXItc2VhcmNoLWljb24uc2MtaW9uLXNlYXJjaGJhci1tZHtkaXNwbGF5Om5vbmV9aW9uLXRvb2xiYXIuc2MtaW9uLXNlYXJjaGJhci1tZC1oLGlvbi10b29sYmFyIC5zYy1pb24tc2VhcmNoYmFyLW1kLWh7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjdweDtwYWRkaW5nLWlubGluZS1zdGFydDo3cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDo3cHg7cGFkZGluZy1pbmxpbmUtZW5kOjdweDtwYWRkaW5nLXRvcDozcHg7cGFkZGluZy1ib3R0b206M3B4fVwiO1xuY29uc3QgU2VhcmNoYmFyID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmlvbklucHV0ID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25JbnB1dFwiLCA3KTtcbiAgICB0aGlzLmlvbkNoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uQ2hhbmdlXCIsIDcpO1xuICAgIHRoaXMuaW9uQ2FuY2VsID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25DYW5jZWxcIiwgNyk7XG4gICAgdGhpcy5pb25DbGVhciA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uQ2xlYXJcIiwgNyk7XG4gICAgdGhpcy5pb25CbHVyID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25CbHVyXCIsIDcpO1xuICAgIHRoaXMuaW9uRm9jdXMgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkZvY3VzXCIsIDcpO1xuICAgIHRoaXMuaW9uU3R5bGUgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblN0eWxlXCIsIDcpO1xuICAgIHRoaXMuaXNDYW5jZWxWaXNpYmxlID0gZmFsc2U7XG4gICAgdGhpcy5zaG91bGRBbGlnbkxlZnQgPSB0cnVlO1xuICAgIHRoaXMuaW5wdXRJZCA9IGBpb24tc2VhcmNoYmFyLSR7c2VhcmNoYmFySWRzKyt9YDtcbiAgICB0aGlzLmluaGVyaXRlZEF0dHJpYnV0ZXMgPSB7fTtcbiAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcbiAgICB0aGlzLm5vQW5pbWF0ZSA9IHRydWU7XG4gICAgLyoqXG4gICAgICogSWYgYHRydWVgLCBlbmFibGUgc2VhcmNoYmFyIGFuaW1hdGlvbi5cbiAgICAgKi9cbiAgICB0aGlzLmFuaW1hdGVkID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHdoZXRoZXIgYW5kIGhvdyB0aGUgdGV4dCB2YWx1ZSBzaG91bGQgYmUgYXV0b21hdGljYWxseSBjYXBpdGFsaXplZCBhcyBpdCBpcyBlbnRlcmVkL2VkaXRlZCBieSB0aGUgdXNlci5cbiAgICAgKiBBdmFpbGFibGUgb3B0aW9uczogYFwib2ZmXCJgLCBgXCJub25lXCJgLCBgXCJvblwiYCwgYFwic2VudGVuY2VzXCJgLCBgXCJ3b3Jkc1wiYCwgYFwiY2hhcmFjdGVyc1wiYC5cbiAgICAgKi9cbiAgICB0aGlzLmF1dG9jYXBpdGFsaXplID0gJ29mZic7XG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBpbnB1dCdzIGF1dG9jb21wbGV0ZSBwcm9wZXJ0eS5cbiAgICAgKi9cbiAgICB0aGlzLmF1dG9jb21wbGV0ZSA9ICdvZmYnO1xuICAgIC8qKlxuICAgICAqIFNldCB0aGUgaW5wdXQncyBhdXRvY29ycmVjdCBwcm9wZXJ0eS5cbiAgICAgKi9cbiAgICB0aGlzLmF1dG9jb3JyZWN0ID0gJ29mZic7XG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBjYW5jZWwgYnV0dG9uIGljb24uIE9ubHkgYXBwbGllcyB0byBgbWRgIG1vZGUuXG4gICAgICogRGVmYXVsdHMgdG8gYGFycm93LWJhY2stc2hhcnBgLlxuICAgICAqL1xuICAgIHRoaXMuY2FuY2VsQnV0dG9uSWNvbiA9IGNvbmZpZy5nZXQoJ2JhY2tCdXR0b25JY29uJywgYXJyb3dCYWNrU2hhcnApO1xuICAgIC8qKlxuICAgICAqIFNldCB0aGUgY2FuY2VsIGJ1dHRvbiB0ZXh0LiBPbmx5IGFwcGxpZXMgdG8gYGlvc2AgbW9kZS5cbiAgICAgKi9cbiAgICB0aGlzLmNhbmNlbEJ1dHRvblRleHQgPSAnQ2FuY2VsJztcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIHRoZSB1c2VyIGNhbm5vdCBpbnRlcmFjdCB3aXRoIHRoZSBpbnB1dC5cbiAgICAgKi9cbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogSWYgdXNlZCBpbiBhIGZvcm0sIHNldCB0aGUgbmFtZSBvZiB0aGUgY29udHJvbCwgd2hpY2ggaXMgc3VibWl0dGVkIHdpdGggdGhlIGZvcm0gZGF0YS5cbiAgICAgKi9cbiAgICB0aGlzLm5hbWUgPSB0aGlzLmlucHV0SWQ7XG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBpbnB1dCdzIHBsYWNlaG9sZGVyLlxuICAgICAqIGBwbGFjZWhvbGRlcmAgY2FuIGFjY2VwdCBlaXRoZXIgcGxhaW50ZXh0IG9yIEhUTUwgYXMgYSBzdHJpbmcuXG4gICAgICogVG8gZGlzcGxheSBjaGFyYWN0ZXJzIG5vcm1hbGx5IHJlc2VydmVkIGZvciBIVE1MLCB0aGV5XG4gICAgICogbXVzdCBiZSBlc2NhcGVkLiBGb3IgZXhhbXBsZSBgPElvbmljPmAgd291bGQgYmVjb21lXG4gICAgICogYCZsdDtJb25pYyZndDtgXG4gICAgICpcbiAgICAgKiBGb3IgbW9yZSBpbmZvcm1hdGlvbjogW1NlY3VyaXR5IERvY3VtZW50YXRpb25dKGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvZmFxL3NlY3VyaXR5KVxuICAgICAqL1xuICAgIHRoaXMucGxhY2Vob2xkZXIgPSAnU2VhcmNoJztcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBiZWhhdmlvciBmb3IgdGhlIGNhbmNlbCBidXR0b24uIERlZmF1bHRzIHRvIGBcIm5ldmVyXCJgLlxuICAgICAqIFNldHRpbmcgdG8gYFwiZm9jdXNcImAgc2hvd3MgdGhlIGNhbmNlbCBidXR0b24gb24gZm9jdXMuXG4gICAgICogU2V0dGluZyB0byBgXCJuZXZlclwiYCBoaWRlcyB0aGUgY2FuY2VsIGJ1dHRvbi5cbiAgICAgKiBTZXR0aW5nIHRvIGBcImFsd2F5c1wiYCBzaG93cyB0aGUgY2FuY2VsIGJ1dHRvbiByZWdhcmRsZXNzXG4gICAgICogb2YgZm9jdXMgc3RhdGUuXG4gICAgICovXG4gICAgdGhpcy5zaG93Q2FuY2VsQnV0dG9uID0gJ25ldmVyJztcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBiZWhhdmlvciBmb3IgdGhlIGNsZWFyIGJ1dHRvbi4gRGVmYXVsdHMgdG8gYFwiZm9jdXNcImAuXG4gICAgICogU2V0dGluZyB0byBgXCJmb2N1c1wiYCBzaG93cyB0aGUgY2xlYXIgYnV0dG9uIG9uIGZvY3VzIGlmIHRoZVxuICAgICAqIGlucHV0IGlzIG5vdCBlbXB0eS5cbiAgICAgKiBTZXR0aW5nIHRvIGBcIm5ldmVyXCJgIGhpZGVzIHRoZSBjbGVhciBidXR0b24uXG4gICAgICogU2V0dGluZyB0byBgXCJhbHdheXNcImAgc2hvd3MgdGhlIGNsZWFyIGJ1dHRvbiByZWdhcmRsZXNzXG4gICAgICogb2YgZm9jdXMgc3RhdGUsIGJ1dCBvbmx5IGlmIHRoZSBpbnB1dCBpcyBub3QgZW1wdHkuXG4gICAgICovXG4gICAgdGhpcy5zaG93Q2xlYXJCdXR0b24gPSAnYWx3YXlzJztcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIGVuYWJsZSBzcGVsbGNoZWNrIG9uIHRoZSBpbnB1dC5cbiAgICAgKi9cbiAgICB0aGlzLnNwZWxsY2hlY2sgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIHR5cGUgb2YgdGhlIGlucHV0LlxuICAgICAqL1xuICAgIHRoaXMudHlwZSA9ICdzZWFyY2gnO1xuICAgIC8qKlxuICAgICAqIHRoZSB2YWx1ZSBvZiB0aGUgc2VhcmNoYmFyLlxuICAgICAqL1xuICAgIHRoaXMudmFsdWUgPSAnJztcbiAgICAvKipcbiAgICAgKiBDbGVhcnMgdGhlIGlucHV0IGZpZWxkIGFuZCB0cmlnZ2VycyB0aGUgY29udHJvbCBjaGFuZ2UuXG4gICAgICovXG4gICAgdGhpcy5vbkNsZWFySW5wdXQgPSBhc3luYyBzaG91bGRGb2N1cyA9PiB7XG4gICAgICB0aGlzLmlvbkNsZWFyLmVtaXQoKTtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgLy8gc2V0VGltZW91dCgpIGZpeGVzIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9pc3N1ZXMvNzUyN1xuICAgICAgICAvLyB3YWl0IGZvciA0IGZyYW1lc1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcbiAgICAgICAgICBpZiAodmFsdWUgIT09ICcnKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gJyc7XG4gICAgICAgICAgICB0aGlzLmVtaXRJbnB1dENoYW5nZSgpO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBXaGVuIHRhcHBpbmcgY2xlYXIgYnV0dG9uXG4gICAgICAgICAgICAgKiBlbnN1cmUgaW5wdXQgaXMgZm9jdXNlZCBhZnRlclxuICAgICAgICAgICAgICogY2xlYXJpbmcgaW5wdXQgc28gdXNlcnNcbiAgICAgICAgICAgICAqIGNhbiBxdWlja2x5IHN0YXJ0IHR5cGluZy5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaWYgKHNob3VsZEZvY3VzICYmICF0aGlzLmZvY3VzZWQpIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRGb2N1cygpO1xuICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICogVGhlIHNldEZvY3VzIGNhbGwgYWJvdmUgd2lsbCBjbGVhciBmb2N1c2VkVmFsdWUsXG4gICAgICAgICAgICAgICAqIGJ1dCBpb25DaGFuZ2Ugd2lsbCBuZXZlciBoYXZlIGdvdHRlbiBhIGNoYW5jZSB0b1xuICAgICAgICAgICAgICAgKiBmaXJlLiBNYW51YWxseSByZXZlcnQgZm9jdXNlZFZhbHVlIHNvIG9uQmx1ciBjYW5cbiAgICAgICAgICAgICAgICogY29tcGFyZSBhZ2FpbnN0IHdoYXQgd2FzIGluIHRoZSBib3ggYmVmb3JlIHRoZSBjbGVhci5cbiAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgIHRoaXMuZm9jdXNlZFZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSwgMTYgKiA0KTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2xlYXJzIHRoZSBpbnB1dCBmaWVsZCBhbmQgdGVsbHMgdGhlIGlucHV0IHRvIGJsdXIgc2luY2VcbiAgICAgKiB0aGUgY2xlYXJJbnB1dCBmdW5jdGlvbiBkb2Vzbid0IHdhbnQgdGhlIGlucHV0IHRvIGJsdXJcbiAgICAgKiB0aGVuIGNhbGxzIHRoZSBjdXN0b20gY2FuY2VsIGZ1bmN0aW9uIGlmIHRoZSB1c2VyIHBhc3NlZCBvbmUgaW4uXG4gICAgICovXG4gICAgdGhpcy5vbkNhbmNlbFNlYXJjaGJhciA9IGFzeW5jIGV2ID0+IHtcbiAgICAgIGlmIChldikge1xuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaW9uQ2FuY2VsLmVtaXQoKTtcbiAgICAgIC8vIGdldCBjYWNoZWQgdmFsdWVzIGJlZm9yZSBjbGVhcmluZyB0aGUgaW5wdXRcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xuICAgICAgY29uc3QgZm9jdXNlZCA9IHRoaXMuZm9jdXNlZDtcbiAgICAgIGF3YWl0IHRoaXMub25DbGVhcklucHV0KCk7XG4gICAgICAvKipcbiAgICAgICAqIElmIHRoZXJlIHVzZWQgdG8gYmUgc29tZXRoaW5nIGluIHRoZSBib3gsIGFuZCB3ZSB3ZXJlbid0IGZvY3VzZWRcbiAgICAgICAqIGJlZm9yZWhhbmQgKG1lYW5pbmcgbm8gYmx1ciBmaXJlZCB0aGF0IHdvdWxkIGFscmVhZHkgaGFuZGxlIHRoaXMpLFxuICAgICAgICogbWFudWFsbHkgZmlyZSBpb25DaGFuZ2UuXG4gICAgICAgKi9cbiAgICAgIGlmICh2YWx1ZSAmJiAhZm9jdXNlZCkge1xuICAgICAgICB0aGlzLmVtaXRWYWx1ZUNoYW5nZShldik7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5uYXRpdmVJbnB1dCkge1xuICAgICAgICB0aGlzLm5hdGl2ZUlucHV0LmJsdXIoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgU2VhcmNoYmFyIGlucHV0IHZhbHVlIHdoZW4gdGhlIGlucHV0IGNoYW5nZXNcbiAgICAgKi9cbiAgICB0aGlzLm9uSW5wdXQgPSBldiA9PiB7XG4gICAgICBjb25zdCBpbnB1dCA9IGV2LnRhcmdldDtcbiAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICB0aGlzLnZhbHVlID0gaW5wdXQudmFsdWU7XG4gICAgICB9XG4gICAgICB0aGlzLmVtaXRJbnB1dENoYW5nZShldik7XG4gICAgfTtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZXYgPT4ge1xuICAgICAgdGhpcy5lbWl0VmFsdWVDaGFuZ2UoZXYpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgU2VhcmNoYmFyIHRvIG5vdCBmb2N1c2VkIGFuZCBjaGVja3MgaWYgaXQgc2hvdWxkIGFsaWduIGxlZnRcbiAgICAgKiBiYXNlZCBvbiB3aGV0aGVyIHRoZXJlIGlzIGEgdmFsdWUgaW4gdGhlIHNlYXJjaGJhciBvciBub3QuXG4gICAgICovXG4gICAgdGhpcy5vbkJsdXIgPSBldiA9PiB7XG4gICAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuaW9uQmx1ci5lbWl0KCk7XG4gICAgICB0aGlzLnBvc2l0aW9uRWxlbWVudHMoKTtcbiAgICAgIGlmICh0aGlzLmZvY3VzZWRWYWx1ZSAhPT0gdGhpcy52YWx1ZSkge1xuICAgICAgICB0aGlzLmVtaXRWYWx1ZUNoYW5nZShldik7XG4gICAgICB9XG4gICAgICB0aGlzLmZvY3VzZWRWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIFNlYXJjaGJhciB0byBmb2N1c2VkIGFuZCBhY3RpdmUgb24gaW5wdXQgZm9jdXMuXG4gICAgICovXG4gICAgdGhpcy5vbkZvY3VzID0gKCkgPT4ge1xuICAgICAgdGhpcy5mb2N1c2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMuZm9jdXNlZFZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgIHRoaXMuaW9uRm9jdXMuZW1pdCgpO1xuICAgICAgdGhpcy5wb3NpdGlvbkVsZW1lbnRzKCk7XG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogbGFuZyBhbmQgZGlyIGFyZSBnbG9iYWxseSBlbnVtZXJhdGVkIGF0dHJpYnV0ZXMuXG4gICAqIEFzIGEgcmVzdWx0LCBjcmVhdGluZyB0aGVzZSBhcyBwcm9wZXJ0aWVzXG4gICAqIGNhbiBoYXZlIHVuaW50ZW5kZWQgc2lkZSBlZmZlY3RzLiBJbnN0ZWFkLCB3ZVxuICAgKiBsaXN0ZW4gZm9yIGF0dHJpYnV0ZSBjaGFuZ2VzIGFuZCBpbmhlcml0IHRoZW1cbiAgICogdG8gdGhlIGlubmVyIGA8aW5wdXQ+YCBlbGVtZW50LlxuICAgKi9cbiAgb25MYW5nQ2hhbmdlZChuZXdWYWx1ZSkge1xuICAgIHRoaXMuaW5oZXJpdGVkQXR0cmlidXRlcyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5pbmhlcml0ZWRBdHRyaWJ1dGVzKSwge1xuICAgICAgbGFuZzogbmV3VmFsdWVcbiAgICB9KTtcbiAgICBmb3JjZVVwZGF0ZSh0aGlzKTtcbiAgfVxuICBvbkRpckNoYW5nZWQobmV3VmFsdWUpIHtcbiAgICB0aGlzLmluaGVyaXRlZEF0dHJpYnV0ZXMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuaW5oZXJpdGVkQXR0cmlidXRlcyksIHtcbiAgICAgIGRpcjogbmV3VmFsdWVcbiAgICB9KTtcbiAgICBmb3JjZVVwZGF0ZSh0aGlzKTtcbiAgfVxuICBkZWJvdW5jZUNoYW5nZWQoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaW9uSW5wdXQsXG4gICAgICBkZWJvdW5jZSxcbiAgICAgIG9yaWdpbmFsSW9uSW5wdXRcbiAgICB9ID0gdGhpcztcbiAgICAvKipcbiAgICAgKiBJZiBkZWJvdW5jZSBpcyB1bmRlZmluZWQsIHdlIGhhdmUgdG8gbWFudWFsbHkgcmV2ZXJ0IHRoZSBpb25JbnB1dCBlbWl0dGVyIGluIGNhc2VcbiAgICAgKiBkZWJvdW5jZSB1c2VkIHRvIGJlIHNldCB0byBhIG51bWJlci4gT3RoZXJ3aXNlLCB0aGUgZXZlbnQgd291bGQgc3RheSBkZWJvdW5jZWQuXG4gICAgICovXG4gICAgdGhpcy5pb25JbnB1dCA9IGRlYm91bmNlID09PSB1bmRlZmluZWQgPyBvcmlnaW5hbElvbklucHV0ICE9PSBudWxsICYmIG9yaWdpbmFsSW9uSW5wdXQgIT09IHZvaWQgMCA/IG9yaWdpbmFsSW9uSW5wdXQgOiBpb25JbnB1dCA6IGRlYm91bmNlRXZlbnQoaW9uSW5wdXQsIGRlYm91bmNlKTtcbiAgfVxuICB2YWx1ZUNoYW5nZWQoKSB7XG4gICAgY29uc3QgaW5wdXRFbCA9IHRoaXMubmF0aXZlSW5wdXQ7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG4gICAgaWYgKGlucHV0RWwgJiYgaW5wdXRFbC52YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgIGlucHV0RWwudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgc2hvd0NhbmNlbEJ1dHRvbkNoYW5nZWQoKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMucG9zaXRpb25FbGVtZW50cygpO1xuICAgICAgZm9yY2VVcGRhdGUodGhpcyk7XG4gICAgfSk7XG4gIH1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5lbWl0U3R5bGUoKTtcbiAgfVxuICBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICB0aGlzLmluaGVyaXRlZEF0dHJpYnV0ZXMgPSBPYmplY3QuYXNzaWduKHt9LCBpbmhlcml0QXR0cmlidXRlcyh0aGlzLmVsLCBbJ2xhbmcnLCAnZGlyJ10pKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHRoaXMub3JpZ2luYWxJb25JbnB1dCA9IHRoaXMuaW9uSW5wdXQ7XG4gICAgdGhpcy5wb3NpdGlvbkVsZW1lbnRzKCk7XG4gICAgdGhpcy5kZWJvdW5jZUNoYW5nZWQoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubm9BbmltYXRlID0gZmFsc2U7XG4gICAgfSwgMzAwKTtcbiAgfVxuICBlbWl0U3R5bGUoKSB7XG4gICAgdGhpcy5pb25TdHlsZS5lbWl0KHtcbiAgICAgIHNlYXJjaGJhcjogdHJ1ZVxuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBTZXRzIGZvY3VzIG9uIHRoZSBuYXRpdmUgYGlucHV0YCBpbiBgaW9uLXNlYXJjaGJhcmAuIFVzZSB0aGlzIG1ldGhvZCBpbnN0ZWFkIG9mIHRoZSBnbG9iYWxcbiAgICogYGlucHV0LmZvY3VzKClgLlxuICAgKiBEZXZlbG9wZXJzIHdobyB3aXNoIHRvIGZvY3VzIGFuIGlucHV0IHdoZW4gYSBwYWdlIGVudGVyc1xuICAgKiBzaG91bGQgY2FsbCBgc2V0Rm9jdXMoKWAgaW4gdGhlIGBpb25WaWV3RGlkRW50ZXIoKWAgbGlmZWN5Y2xlIG1ldGhvZC5cbiAgICogRGV2ZWxvcGVycyB3aG8gd2lzaCB0byBmb2N1cyBhbiBpbnB1dCB3aGVuIGFuIG92ZXJsYXkgaXMgcHJlc2VudGVkXG4gICAqIHNob3VsZCBjYWxsIGBzZXRGb2N1c2AgYWZ0ZXIgYGRpZFByZXNlbnRgIGhhcyByZXNvbHZlZC5cbiAgICpcbiAgICogU2VlIFttYW5hZ2luZyBmb2N1c10oL2RvY3MvZGV2ZWxvcGluZy9tYW5hZ2luZy1mb2N1cykgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gICAqL1xuICBhc3luYyBzZXRGb2N1cygpIHtcbiAgICBpZiAodGhpcy5uYXRpdmVJbnB1dCkge1xuICAgICAgdGhpcy5uYXRpdmVJbnB1dC5mb2N1cygpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbmF0aXZlIGA8aW5wdXQ+YCBlbGVtZW50IHVzZWQgdW5kZXIgdGhlIGhvb2QuXG4gICAqL1xuICBhc3luYyBnZXRJbnB1dEVsZW1lbnQoKSB7XG4gICAgLyoqXG4gICAgICogSWYgdGhpcyBnZXRzIGNhbGxlZCBpbiBjZXJ0YWluIGVhcmx5IGxpZmVjeWNsZSBob29rcyAoZXg6IFZ1ZSBvbk1vdW50ZWQpLFxuICAgICAqIG5hdGl2ZUlucHV0IHdvbid0IGJlIGRlZmluZWQgeWV0IHdpdGggdGhlIGN1c3RvbSBlbGVtZW50cyBidWlsZCwgc28gd2FpdCBmb3IgaXQgdG8gbG9hZCBpbi5cbiAgICAgKi9cbiAgICBpZiAoIXRoaXMubmF0aXZlSW5wdXQpIHtcbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gY29tcG9uZW50T25SZWFkeSh0aGlzLmVsLCByZXNvbHZlKSk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5uYXRpdmVJbnB1dCk7XG4gIH1cbiAgLyoqXG4gICAqIEVtaXRzIGFuIGBpb25DaGFuZ2VgIGV2ZW50LlxuICAgKlxuICAgKiBUaGlzIEFQSSBzaG91bGQgYmUgY2FsbGVkIGZvciB1c2VyIGNvbW1pdHRlZCBjaGFuZ2VzLlxuICAgKiBUaGlzIEFQSSBzaG91bGQgbm90IGJlIHVzZWQgZm9yIGV4dGVybmFsIHZhbHVlIGNoYW5nZXMuXG4gICAqL1xuICBlbWl0VmFsdWVDaGFuZ2UoZXZlbnQpIHtcbiAgICBjb25zdCB7XG4gICAgICB2YWx1ZVxuICAgIH0gPSB0aGlzO1xuICAgIC8vIENoZWNrcyBmb3IgYm90aCBudWxsIGFuZCB1bmRlZmluZWQgdmFsdWVzXG4gICAgY29uc3QgbmV3VmFsdWUgPSB2YWx1ZSA9PSBudWxsID8gdmFsdWUgOiB2YWx1ZS50b1N0cmluZygpO1xuICAgIC8vIEVtaXR0aW5nIGEgdmFsdWUgY2hhbmdlIHNob3VsZCB1cGRhdGUgdGhlIGludGVybmFsIHN0YXRlIGZvciB0cmFja2luZyB0aGUgZm9jdXNlZCB2YWx1ZVxuICAgIHRoaXMuZm9jdXNlZFZhbHVlID0gbmV3VmFsdWU7XG4gICAgdGhpcy5pb25DaGFuZ2UuZW1pdCh7XG4gICAgICB2YWx1ZTogbmV3VmFsdWUsXG4gICAgICBldmVudFxuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBFbWl0cyBhbiBgaW9uSW5wdXRgIGV2ZW50LlxuICAgKi9cbiAgZW1pdElucHV0Q2hhbmdlKGV2ZW50KSB7XG4gICAgY29uc3Qge1xuICAgICAgdmFsdWVcbiAgICB9ID0gdGhpcztcbiAgICB0aGlzLmlvbklucHV0LmVtaXQoe1xuICAgICAgdmFsdWUsXG4gICAgICBldmVudFxuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBQb3NpdGlvbnMgdGhlIGlucHV0IHNlYXJjaCBpY29uLCBwbGFjZWhvbGRlciwgYW5kIHRoZSBjYW5jZWwgYnV0dG9uXG4gICAqIGJhc2VkIG9uIHRoZSBpbnB1dCB2YWx1ZSBhbmQgaWYgaXQgaXMgZm9jdXNlZC4gKGlvcyBvbmx5KVxuICAgKi9cbiAgcG9zaXRpb25FbGVtZW50cygpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcbiAgICBjb25zdCBwcmV2QWxpZ25MZWZ0ID0gdGhpcy5zaG91bGRBbGlnbkxlZnQ7XG4gICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgY29uc3Qgc2hvdWxkQWxpZ25MZWZ0ID0gIXRoaXMuYW5pbWF0ZWQgfHwgdmFsdWUudHJpbSgpICE9PSAnJyB8fCAhIXRoaXMuZm9jdXNlZDtcbiAgICB0aGlzLnNob3VsZEFsaWduTGVmdCA9IHNob3VsZEFsaWduTGVmdDtcbiAgICBpZiAobW9kZSAhPT0gJ2lvcycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHByZXZBbGlnbkxlZnQgIT09IHNob3VsZEFsaWduTGVmdCkge1xuICAgICAgdGhpcy5wb3NpdGlvblBsYWNlaG9sZGVyKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmFuaW1hdGVkKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uQ2FuY2VsQnV0dG9uKCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBQb3NpdGlvbnMgdGhlIGlucHV0IHBsYWNlaG9sZGVyXG4gICAqL1xuICBwb3NpdGlvblBsYWNlaG9sZGVyKCkge1xuICAgIGNvbnN0IGlucHV0RWwgPSB0aGlzLm5hdGl2ZUlucHV0O1xuICAgIGlmICghaW5wdXRFbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBydGwgPSBpc1JUTCh0aGlzLmVsKTtcbiAgICBjb25zdCBpY29uRWwgPSAodGhpcy5lbC5zaGFkb3dSb290IHx8IHRoaXMuZWwpLnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hiYXItc2VhcmNoLWljb24nKTtcbiAgICBpZiAodGhpcy5zaG91bGRBbGlnbkxlZnQpIHtcbiAgICAgIGlucHV0RWwucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgaWNvbkVsLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ3JlYXRlIGEgZHVtbXkgc3BhbiB0byBnZXQgdGhlIHBsYWNlaG9sZGVyIHdpZHRoXG4gICAgICBjb25zdCBkb2MgPSBkb2N1bWVudDtcbiAgICAgIGNvbnN0IHRlbXBTcGFuID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHRlbXBTcGFuLmlubmVyVGV4dCA9IHRoaXMucGxhY2Vob2xkZXIgfHwgJyc7XG4gICAgICBkb2MuYm9keS5hcHBlbmRDaGlsZCh0ZW1wU3Bhbik7XG4gICAgICAvLyBHZXQgdGhlIHdpZHRoIG9mIHRoZSBzcGFuIHRoZW4gcmVtb3ZlIGl0XG4gICAgICByYWYoKCkgPT4ge1xuICAgICAgICBjb25zdCB0ZXh0V2lkdGggPSB0ZW1wU3Bhbi5vZmZzZXRXaWR0aDtcbiAgICAgICAgdGVtcFNwYW4ucmVtb3ZlKCk7XG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgaW5wdXQgcGFkZGluZ1xuICAgICAgICBjb25zdCBpbnB1dExlZnQgPSAnY2FsYyg1MCUgLSAnICsgdGV4dFdpZHRoIC8gMiArICdweCknO1xuICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIGljb24gbWFyZ2luXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXZSB0YWtlIHRoZSBpY29uIHdpZHRoIHRvIGFjY291bnRcbiAgICAgICAgICogZm9yIGFueSB0ZXh0IHNjYWxlcyBhcHBsaWVkIHRvIHRoZSBpY29uXG4gICAgICAgICAqIHN1Y2ggYXMgRHluYW1pYyBUeXBlIG9uIGlPUyBhcyB3ZWxsIGFzIDhweFxuICAgICAgICAgKiBvZiBwYWRkaW5nLlxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgaWNvbkxlZnQgPSAnY2FsYyg1MCUgLSAnICsgKHRleHRXaWR0aCAvIDIgKyBpY29uRWwuY2xpZW50V2lkdGggKyA4KSArICdweCknO1xuICAgICAgICAvLyBTZXQgdGhlIGlucHV0IHBhZGRpbmcgc3RhcnQgYW5kIGljb24gbWFyZ2luIHN0YXJ0XG4gICAgICAgIGlmIChydGwpIHtcbiAgICAgICAgICBpbnB1dEVsLnN0eWxlLnBhZGRpbmdSaWdodCA9IGlucHV0TGVmdDtcbiAgICAgICAgICBpY29uRWwuc3R5bGUubWFyZ2luUmlnaHQgPSBpY29uTGVmdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpbnB1dEVsLnN0eWxlLnBhZGRpbmdMZWZ0ID0gaW5wdXRMZWZ0O1xuICAgICAgICAgIGljb25FbC5zdHlsZS5tYXJnaW5MZWZ0ID0gaWNvbkxlZnQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogU2hvdyB0aGUgaU9TIENhbmNlbCBidXR0b24gb24gZm9jdXMsIGhpZGUgaXQgb2Zmc2NyZWVuIG90aGVyd2lzZVxuICAgKi9cbiAgcG9zaXRpb25DYW5jZWxCdXR0b24oKSB7XG4gICAgY29uc3QgcnRsID0gaXNSVEwodGhpcy5lbCk7XG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gKHRoaXMuZWwuc2hhZG93Um9vdCB8fCB0aGlzLmVsKS5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoYmFyLWNhbmNlbC1idXR0b24nKTtcbiAgICBjb25zdCBzaG91bGRTaG93Q2FuY2VsID0gdGhpcy5zaG91bGRTaG93Q2FuY2VsQnV0dG9uKCk7XG4gICAgaWYgKGNhbmNlbEJ1dHRvbiAhPT0gbnVsbCAmJiBzaG91bGRTaG93Q2FuY2VsICE9PSB0aGlzLmlzQ2FuY2VsVmlzaWJsZSkge1xuICAgICAgY29uc3QgY2FuY2VsU3R5bGUgPSBjYW5jZWxCdXR0b24uc3R5bGU7XG4gICAgICB0aGlzLmlzQ2FuY2VsVmlzaWJsZSA9IHNob3VsZFNob3dDYW5jZWw7XG4gICAgICBpZiAoc2hvdWxkU2hvd0NhbmNlbCkge1xuICAgICAgICBpZiAocnRsKSB7XG4gICAgICAgICAgY2FuY2VsU3R5bGUubWFyZ2luTGVmdCA9ICcwJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYW5jZWxTdHlsZS5tYXJnaW5SaWdodCA9ICcwJztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gY2FuY2VsQnV0dG9uLm9mZnNldFdpZHRoO1xuICAgICAgICBpZiAob2Zmc2V0ID4gMCkge1xuICAgICAgICAgIGlmIChydGwpIHtcbiAgICAgICAgICAgIGNhbmNlbFN0eWxlLm1hcmdpbkxlZnQgPSAtb2Zmc2V0ICsgJ3B4JztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FuY2VsU3R5bGUubWFyZ2luUmlnaHQgPSAtb2Zmc2V0ICsgJ3B4JztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWUgfHwgJyc7XG4gIH1cbiAgaGFzVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoKSAhPT0gJyc7XG4gIH1cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciBvciBub3QgdGhlIGNhbmNlbCBidXR0b24gc2hvdWxkIGJlIHZpc2libGUgb25zY3JlZW4uXG4gICAqIENhbmNlbCBidXR0b24gc2hvdWxkIGJlIHNob3duIGlmIG9uZSBvZiB0d28gY29uZGl0aW9ucyBhcHBsaWVzOlxuICAgKiAxLiBgc2hvd0NhbmNlbEJ1dHRvbmAgaXMgc2V0IHRvIGBhbHdheXNgLlxuICAgKiAyLiBgc2hvd0NhbmNlbEJ1dHRvbmAgaXMgc2V0IHRvIGBmb2N1c2AsIGFuZCB0aGUgc2VhcmNoYmFyIGhhcyBiZWVuIGZvY3VzZWQuXG4gICAqL1xuICBzaG91bGRTaG93Q2FuY2VsQnV0dG9uKCkge1xuICAgIGlmICh0aGlzLnNob3dDYW5jZWxCdXR0b24gPT09ICduZXZlcicgfHwgdGhpcy5zaG93Q2FuY2VsQnV0dG9uID09PSAnZm9jdXMnICYmICF0aGlzLmZvY3VzZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciBvciBub3QgdGhlIGNsZWFyIGJ1dHRvbiBzaG91bGQgYmUgdmlzaWJsZSBvbnNjcmVlbi5cbiAgICogQ2xlYXIgYnV0dG9uIHNob3VsZCBiZSBzaG93biBpZiBvbmUgb2YgdHdvIGNvbmRpdGlvbnMgYXBwbGllczpcbiAgICogMS4gYHNob3dDbGVhckJ1dHRvbmAgaXMgc2V0IHRvIGBhbHdheXNgLlxuICAgKiAyLiBgc2hvd0NsZWFyQnV0dG9uYCBpcyBzZXQgdG8gYGZvY3VzYCwgYW5kIHRoZSBzZWFyY2hiYXIgaGFzIGJlZW4gZm9jdXNlZC5cbiAgICovXG4gIHNob3VsZFNob3dDbGVhckJ1dHRvbigpIHtcbiAgICBpZiAodGhpcy5zaG93Q2xlYXJCdXR0b24gPT09ICduZXZlcicgfHwgdGhpcy5zaG93Q2xlYXJCdXR0b24gPT09ICdmb2N1cycgJiYgIXRoaXMuZm9jdXNlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2FuY2VsQnV0dG9uVGV4dCxcbiAgICAgIGF1dG9jYXBpdGFsaXplXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgYW5pbWF0ZWQgPSB0aGlzLmFuaW1hdGVkICYmIGNvbmZpZy5nZXRCb29sZWFuKCdhbmltYXRlZCcsIHRydWUpO1xuICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgIGNvbnN0IGNsZWFySWNvbiA9IHRoaXMuY2xlYXJJY29uIHx8IChtb2RlID09PSAnaW9zJyA/IGNsb3NlQ2lyY2xlIDogY2xvc2VTaGFycCk7XG4gICAgY29uc3Qgc2VhcmNoSWNvbiA9IHRoaXMuc2VhcmNoSWNvbiB8fCAobW9kZSA9PT0gJ2lvcycgPyBzZWFyY2hPdXRsaW5lIDogc2VhcmNoU2hhcnApO1xuICAgIGNvbnN0IHNob3VsZFNob3dDYW5jZWxCdXR0b24gPSB0aGlzLnNob3VsZFNob3dDYW5jZWxCdXR0b24oKTtcbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSB0aGlzLnNob3dDYW5jZWxCdXR0b24gIT09ICduZXZlcicgJiYgaChcImJ1dHRvblwiLCB7XG4gICAgICBrZXk6ICcxOWUxODc3NTg1NmRiODdkYWViNGI5ZTNkN2JjYTA0NjE5MTVhMGRmJyxcbiAgICAgIFwiYXJpYS1sYWJlbFwiOiBjYW5jZWxCdXR0b25UZXh0LFxuICAgICAgXCJhcmlhLWhpZGRlblwiOiBzaG91bGRTaG93Q2FuY2VsQnV0dG9uID8gdW5kZWZpbmVkIDogJ3RydWUnLFxuICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgIHRhYkluZGV4OiBtb2RlID09PSAnaW9zJyAmJiAhc2hvdWxkU2hvd0NhbmNlbEJ1dHRvbiA/IC0xIDogdW5kZWZpbmVkLFxuICAgICAgb25Nb3VzZURvd246IHRoaXMub25DYW5jZWxTZWFyY2hiYXIsXG4gICAgICBvblRvdWNoU3RhcnQ6IHRoaXMub25DYW5jZWxTZWFyY2hiYXIsXG4gICAgICBjbGFzczogXCJzZWFyY2hiYXItY2FuY2VsLWJ1dHRvblwiXG4gICAgfSwgaChcImRpdlwiLCB7XG4gICAgICBrZXk6ICdiM2JiZGNjMDMzZjNiZDM0NDFkNjE5ZTRhMjUyY2VmMGRhZDRkMDdlJyxcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCJcbiAgICB9LCBtb2RlID09PSAnbWQnID8gaChcImlvbi1pY29uXCIsIHtcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsXG4gICAgICBtb2RlOiBtb2RlLFxuICAgICAgaWNvbjogdGhpcy5jYW5jZWxCdXR0b25JY29uLFxuICAgICAgbGF6eTogZmFsc2VcbiAgICB9KSA6IGNhbmNlbEJ1dHRvblRleHQpKTtcbiAgICByZXR1cm4gaChIb3N0LCB7XG4gICAgICBrZXk6ICcwNzRhYTYwZTA1MWJmYjMyMjVlODdkNDRiYmI2MzQ2YzU5YzczNTc0JyxcbiAgICAgIHJvbGU6IFwic2VhcmNoXCIsXG4gICAgICBcImFyaWEtZGlzYWJsZWRcIjogdGhpcy5kaXNhYmxlZCA/ICd0cnVlJyA6IG51bGwsXG4gICAgICBjbGFzczogY3JlYXRlQ29sb3JDbGFzc2VzKHRoaXMuY29sb3IsIHtcbiAgICAgICAgW21vZGVdOiB0cnVlLFxuICAgICAgICAnc2VhcmNoYmFyLWFuaW1hdGVkJzogYW5pbWF0ZWQsXG4gICAgICAgICdzZWFyY2hiYXItZGlzYWJsZWQnOiB0aGlzLmRpc2FibGVkLFxuICAgICAgICAnc2VhcmNoYmFyLW5vLWFuaW1hdGUnOiBhbmltYXRlZCAmJiB0aGlzLm5vQW5pbWF0ZSxcbiAgICAgICAgJ3NlYXJjaGJhci1oYXMtdmFsdWUnOiB0aGlzLmhhc1ZhbHVlKCksXG4gICAgICAgICdzZWFyY2hiYXItbGVmdC1hbGlnbmVkJzogdGhpcy5zaG91bGRBbGlnbkxlZnQsXG4gICAgICAgICdzZWFyY2hiYXItaGFzLWZvY3VzJzogdGhpcy5mb2N1c2VkLFxuICAgICAgICAnc2VhcmNoYmFyLXNob3VsZC1zaG93LWNsZWFyJzogdGhpcy5zaG91bGRTaG93Q2xlYXJCdXR0b24oKSxcbiAgICAgICAgJ3NlYXJjaGJhci1zaG91bGQtc2hvdy1jYW5jZWwnOiB0aGlzLnNob3VsZFNob3dDYW5jZWxCdXR0b24oKVxuICAgICAgfSlcbiAgICB9LCBoKFwiZGl2XCIsIHtcbiAgICAgIGtleTogJzU0ZjU4YTc5ZmUzNmU4NWQ5Mjk1MTU3MzAzZjFiZTg5Yzk4YmJkYWYnLFxuICAgICAgY2xhc3M6IFwic2VhcmNoYmFyLWlucHV0LWNvbnRhaW5lclwiXG4gICAgfSwgaChcImlucHV0XCIsIE9iamVjdC5hc3NpZ24oe1xuICAgICAga2V5OiAnZjk5MWEzN2ZjZjU0ZDI2YjdhZDEwZDg5MDg0NzY0ZTAzZDk3YjlkZScsXG4gICAgICBcImFyaWEtbGFiZWxcIjogXCJzZWFyY2ggdGV4dFwiLFxuICAgICAgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQsXG4gICAgICByZWY6IGVsID0+IHRoaXMubmF0aXZlSW5wdXQgPSBlbCxcbiAgICAgIGNsYXNzOiBcInNlYXJjaGJhci1pbnB1dFwiLFxuICAgICAgaW5wdXRNb2RlOiB0aGlzLmlucHV0bW9kZSxcbiAgICAgIGVudGVyS2V5SGludDogdGhpcy5lbnRlcmtleWhpbnQsXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICBvbklucHV0OiB0aGlzLm9uSW5wdXQsXG4gICAgICBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZSxcbiAgICAgIG9uQmx1cjogdGhpcy5vbkJsdXIsXG4gICAgICBvbkZvY3VzOiB0aGlzLm9uRm9jdXMsXG4gICAgICBtaW5MZW5ndGg6IHRoaXMubWlubGVuZ3RoLFxuICAgICAgbWF4TGVuZ3RoOiB0aGlzLm1heGxlbmd0aCxcbiAgICAgIHBsYWNlaG9sZGVyOiB0aGlzLnBsYWNlaG9sZGVyLFxuICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgdmFsdWU6IHRoaXMuZ2V0VmFsdWUoKSxcbiAgICAgIGF1dG9DYXBpdGFsaXplOiBhdXRvY2FwaXRhbGl6ZSA9PT0gJ2RlZmF1bHQnID8gdW5kZWZpbmVkIDogYXV0b2NhcGl0YWxpemUsXG4gICAgICBhdXRvQ29tcGxldGU6IHRoaXMuYXV0b2NvbXBsZXRlLFxuICAgICAgYXV0b0NvcnJlY3Q6IHRoaXMuYXV0b2NvcnJlY3QsXG4gICAgICBzcGVsbGNoZWNrOiB0aGlzLnNwZWxsY2hlY2tcbiAgICB9LCB0aGlzLmluaGVyaXRlZEF0dHJpYnV0ZXMpKSwgbW9kZSA9PT0gJ21kJyAmJiBjYW5jZWxCdXR0b24sIGgoXCJpb24taWNvblwiLCB7XG4gICAgICBrZXk6ICc4YjQ0ZGQ5MGEzMjkyYzVjZjg3MmVmMTZhODUyMDY3NWY1NjczNDk0JyxcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsXG4gICAgICBtb2RlOiBtb2RlLFxuICAgICAgaWNvbjogc2VhcmNoSWNvbixcbiAgICAgIGxhenk6IGZhbHNlLFxuICAgICAgY2xhc3M6IFwic2VhcmNoYmFyLXNlYXJjaC1pY29uXCJcbiAgICB9KSwgaChcImJ1dHRvblwiLCB7XG4gICAgICBrZXk6ICc3OWQ5Y2ZlZDhmMDEyNjgwNDRmODI4MTFhMzVkMzIzYTEyZGNhNzQ5JyxcbiAgICAgIFwiYXJpYS1sYWJlbFwiOiBcInJlc2V0XCIsXG4gICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgXCJuby1ibHVyXCI6IHRydWUsXG4gICAgICBjbGFzczogXCJzZWFyY2hiYXItY2xlYXItYnV0dG9uXCIsXG4gICAgICBvblBvaW50ZXJEb3duOiBldiA9PiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIHByZXZlbnRzIG1vYmlsZSBicm93c2VycyBmcm9tXG4gICAgICAgICAqIGJsdXJyaW5nIHRoZSBpbnB1dCB3aGVuIHRoZSBjbGVhclxuICAgICAgICAgKiBidXR0b24gaXMgYWN0aXZhdGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0sXG4gICAgICBvbkNsaWNrOiAoKSA9PiB0aGlzLm9uQ2xlYXJJbnB1dCh0cnVlKVxuICAgIH0sIGgoXCJpb24taWNvblwiLCB7XG4gICAgICBrZXk6ICdhYTNiOWZhOGE2MWY4NTMyMzY3ODNhYzdiY2QwYjExM2VhNjVlY2UyJyxcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsXG4gICAgICBtb2RlOiBtb2RlLFxuICAgICAgaWNvbjogY2xlYXJJY29uLFxuICAgICAgbGF6eTogZmFsc2UsXG4gICAgICBjbGFzczogXCJzZWFyY2hiYXItY2xlYXItaWNvblwiXG4gICAgfSkpKSwgbW9kZSA9PT0gJ2lvcycgJiYgY2FuY2VsQnV0dG9uKTtcbiAgfVxuICBnZXQgZWwoKSB7XG4gICAgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7XG4gIH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJsYW5nXCI6IFtcIm9uTGFuZ0NoYW5nZWRcIl0sXG4gICAgICBcImRpclwiOiBbXCJvbkRpckNoYW5nZWRcIl0sXG4gICAgICBcImRlYm91bmNlXCI6IFtcImRlYm91bmNlQ2hhbmdlZFwiXSxcbiAgICAgIFwidmFsdWVcIjogW1widmFsdWVDaGFuZ2VkXCJdLFxuICAgICAgXCJzaG93Q2FuY2VsQnV0dG9uXCI6IFtcInNob3dDYW5jZWxCdXR0b25DaGFuZ2VkXCJdXG4gICAgfTtcbiAgfVxufTtcbmxldCBzZWFyY2hiYXJJZHMgPSAwO1xuU2VhcmNoYmFyLnN0eWxlID0ge1xuICBpb3M6IHNlYXJjaGJhcklvc0NzcyxcbiAgbWQ6IHNlYXJjaGJhck1kQ3NzXG59O1xuZXhwb3J0IHsgU2VhcmNoYmFyIGFzIGlvbl9zZWFyY2hiYXIgfTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNBLElBQU0sa0JBQWtCO0FBQ3hCLElBQU0saUJBQWlCO0FBQ3ZCLElBQU0sWUFBWSxNQUFNO0FBQUEsRUFDdEIsWUFBWSxTQUFTO0FBQ25CLHFCQUFpQixNQUFNLE9BQU87QUFDOUIsU0FBSyxXQUFXLFlBQVksTUFBTSxZQUFZLENBQUM7QUFDL0MsU0FBSyxZQUFZLFlBQVksTUFBTSxhQUFhLENBQUM7QUFDakQsU0FBSyxZQUFZLFlBQVksTUFBTSxhQUFhLENBQUM7QUFDakQsU0FBSyxXQUFXLFlBQVksTUFBTSxZQUFZLENBQUM7QUFDL0MsU0FBSyxVQUFVLFlBQVksTUFBTSxXQUFXLENBQUM7QUFDN0MsU0FBSyxXQUFXLFlBQVksTUFBTSxZQUFZLENBQUM7QUFDL0MsU0FBSyxXQUFXLFlBQVksTUFBTSxZQUFZLENBQUM7QUFDL0MsU0FBSyxrQkFBa0I7QUFDdkIsU0FBSyxrQkFBa0I7QUFDdkIsU0FBSyxVQUFVLGlCQUFpQixjQUFjO0FBQzlDLFNBQUssc0JBQXNCLENBQUM7QUFDNUIsU0FBSyxVQUFVO0FBQ2Ys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QUFBQSxNQUNiLFNBQVMsS0FBSztBQUFBLE1BQ2QsV0FBVyxLQUFLO0FBQUEsTUFDaEIsV0FBVyxLQUFLO0FBQUEsTUFDaEIsYUFBYSxLQUFLO0FBQUEsTUFDbEIsTUFBTSxLQUFLO0FBQUEsTUFDWCxPQUFPLEtBQUssU0FBUztBQUFBLE1BQ3JCLGdCQUFnQixtQkFBbUIsWUFBWSxTQUFZO0FBQUEsTUFDM0QsY0FBYyxLQUFLO0FBQUEsTUFDbkIsYUFBYSxLQUFLO0FBQUEsTUFDbEIsWUFBWSxLQUFLO0FBQUEsSUFDbkIsR0FBRyxLQUFLLG1CQUFtQixDQUFDLEdBQUcsU0FBUyxRQUFRLGNBQWMsRUFBRSxZQUFZO0FBQUEsTUFDMUUsS0FBSztBQUFBLE1BQ0wsZUFBZTtBQUFBLE1BQ2Y7QUFBQSxNQUNBLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxJQUNULENBQUMsR0FBRyxFQUFFLFVBQVU7QUFBQSxNQUNkLEtBQUs7QUFBQSxNQUNMLGNBQWM7QUFBQSxNQUNkLE1BQU07QUFBQSxNQUNOLFdBQVc7QUFBQSxNQUNYLE9BQU87QUFBQSxNQUNQLGVBQWUsUUFBTTtBQU1uQixXQUFHLGVBQWU7QUFBQSxNQUNwQjtBQUFBLE1BQ0EsU0FBUyxNQUFNLEtBQUssYUFBYSxJQUFJO0FBQUEsSUFDdkMsR0FBRyxFQUFFLFlBQVk7QUFBQSxNQUNmLEtBQUs7QUFBQSxNQUNMLGVBQWU7QUFBQSxNQUNmO0FBQUEsTUFDQSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsSUFDVCxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsU0FBUyxZQUFZO0FBQUEsRUFDdEM7QUFBQSxFQUNBLElBQUksS0FBSztBQUNQLFdBQU8sV0FBVyxJQUFJO0FBQUEsRUFDeEI7QUFBQSxFQUNBLFdBQVcsV0FBVztBQUNwQixXQUFPO0FBQUEsTUFDTCxRQUFRLENBQUMsZUFBZTtBQUFBLE1BQ3hCLE9BQU8sQ0FBQyxjQUFjO0FBQUEsTUFDdEIsWUFBWSxDQUFDLGlCQUFpQjtBQUFBLE1BQzlCLFNBQVMsQ0FBQyxjQUFjO0FBQUEsTUFDeEIsb0JBQW9CLENBQUMseUJBQXlCO0FBQUEsSUFDaEQ7QUFBQSxFQUNGO0FBQ0Y7QUFDQSxJQUFJLGVBQWU7QUFDbkIsVUFBVSxRQUFRO0FBQUEsRUFDaEIsS0FBSztBQUFBLEVBQ0wsSUFBSTtBQUNOOyIsIm5hbWVzIjpbXSwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==
