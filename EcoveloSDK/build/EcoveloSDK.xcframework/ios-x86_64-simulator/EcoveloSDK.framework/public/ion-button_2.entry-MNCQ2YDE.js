import {
  createColorClasses,
  hostContext,
  openURL
} from "./chunk-5VP4V3BN.js";
import {
  getIonMode
} from "./chunk-TXLH22R2.js";
import {
  hasShadowDom,
  inheritAriaAttributes
} from "./chunk-RZR7LWTQ.js";
import {
  Host,
  createEvent,
  forceUpdate,
  getAssetPath,
  getElement,
  h,
  printIonWarning,
  registerInstance
} from "./chunk-BFPTXCSH.js";
import "./chunk-UESUV5PM.js";

// node_modules/@ionic/core/dist/esm/ion-button_2.entry.js
var buttonIosCss = ':host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;white-space:normal;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;-webkit-font-kerning:none;font-kerning:none}:host(.button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary, #0054e9);--color:var(--ion-color-primary-contrast, #fff)}:host(.button-outline){--border-color:var(--ion-color-primary, #0054e9);--background:transparent;--color:var(--ion-color-primary, #0054e9)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary, #0054e9)}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;width:100%;clear:both;contain:content}:host(.button-block) .button-native::after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;height:100%;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}::slotted([slot=start]),::slotted([slot=end]){-ms-flex-negative:0;flex-shrink:0}::slotted(ion-icon){font-size:1.35em;pointer-events:none}::slotted(ion-icon[slot=start]){-webkit-margin-start:-0.3em;margin-inline-start:-0.3em;-webkit-margin-end:0.3em;margin-inline-end:0.3em;margin-top:0;margin-bottom:0}::slotted(ion-icon[slot=end]){-webkit-margin-start:0.3em;margin-inline-start:0.3em;-webkit-margin-end:-0.2em;margin-inline-end:-0.2em;margin-top:0;margin-bottom:0}ion-ripple-effect{color:var(--ripple-color)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover){color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{color:var(--ion-toolbar-color, var(--color))}:host(.button-outline.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{border-color:var(--ion-toolbar-color, var(--color, var(--border-color)))}:host(.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--background));color:var(--ion-toolbar-background, var(--color))}:host{--border-radius:14px;--padding-top:13px;--padding-bottom:13px;--padding-start:1em;--padding-end:1em;--transition:background-color, opacity 100ms linear;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:4px;margin-bottom:4px;min-height:3.1em;font-size:min(1rem, 48px);font-weight:500;letter-spacing:0}:host(.button-solid){--background-activated:var(--ion-color-primary-shade, #004acd);--background-focused:var(--ion-color-primary-shade, #004acd);--background-hover:var(--ion-color-primary-tint, #1a65eb);--background-activated-opacity:1;--background-focused-opacity:1;--background-hover-opacity:1}:host(.button-outline){--border-radius:14px;--border-width:1px;--border-style:solid;--background-activated:var(--ion-color-primary, #0054e9);--background-focused:var(--ion-color-primary, #0054e9);--background-hover:transparent;--background-focused-opacity:.1;--color-activated:var(--ion-color-primary-contrast, #fff)}:host(.button-clear){--background-activated:transparent;--background-activated-opacity:0;--background-focused:var(--ion-color-primary, #0054e9);--background-hover:transparent;--background-focused-opacity:.1;font-size:min(1.0625rem, 51px);font-weight:normal}:host(.in-buttons){font-size:clamp(17px, 1.0625rem, 21.08px);font-weight:400}:host(.button-large){--border-radius:16px;--padding-top:17px;--padding-start:1em;--padding-end:1em;--padding-bottom:17px;min-height:3.1em;font-size:min(1.25rem, 60px)}:host(.button-small){--border-radius:6px;--padding-top:4px;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:4px;min-height:2.1em;font-size:min(0.8125rem, 39px)}:host(.button-round){--border-radius:999px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-strong){font-weight:600}:host(.button-has-icon-only){--padding-top:0;--padding-bottom:var(--padding-top);--padding-end:var(--padding-top);--padding-start:var(--padding-end);min-width:clamp(30px, 2.125em, 60px);min-height:clamp(30px, 2.125em, 60px)}::slotted(ion-icon[slot=icon-only]){font-size:clamp(15.12px, 1.125em, 43.02px)}:host(.button-small.button-has-icon-only){min-width:clamp(23px, 2.16em, 54px);min-height:clamp(23px, 2.16em, 54px)}:host(.button-small) ::slotted(ion-icon[slot=icon-only]){font-size:clamp(12.1394px, 1.308125em, 40.1856px)}:host(.button-large.button-has-icon-only){min-width:clamp(46px, 2.5em, 78px);min-height:clamp(46px, 2.5em, 78px)}:host(.button-large) ::slotted(ion-icon[slot=icon-only]){font-size:clamp(15.12px, 0.9em, 43.056px)}:host(.button-outline.ion-focused.ion-color) .button-native,:host(.button-clear.ion-focused.ion-color) .button-native{color:var(--ion-color-base)}:host(.button-outline.ion-focused.ion-color) .button-native::after,:host(.button-clear.ion-focused.ion-color) .button-native::after{background:var(--ion-color-base)}:host(.button-solid.ion-color.ion-focused) .button-native::after{background:var(--ion-color-shade)}@media (any-hover: hover){:host(.button-clear:not(.ion-activated):hover),:host(.button-outline:not(.ion-activated):hover){opacity:0.6}:host(.button-clear.ion-color:hover) .button-native,:host(.button-outline.ion-color:hover) .button-native{color:var(--ion-color-base)}:host(.button-clear.ion-color:hover) .button-native::after,:host(.button-outline.ion-color:hover) .button-native::after{background:transparent}:host(.button-solid.ion-color:hover) .button-native::after{background:var(--ion-color-tint)}:host(:hover.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color):not(.ion-activated)) .button-native::after{background:#fff;opacity:0.1}}:host(.button-clear.ion-activated){opacity:0.4}:host(.button-outline.ion-activated.ion-color) .button-native{color:var(--ion-color-contrast)}:host(.button-outline.ion-activated.ion-color) .button-native::after{background:var(--ion-color-base)}:host(.button-solid.ion-color.ion-activated) .button-native::after{background:var(--ion-color-shade)}:host(.button-outline.ion-activated.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--color));color:var(--ion-toolbar-background, var(--background), var(--ion-color-primary-contrast, #fff))}';
var buttonMdCss = ':host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;white-space:normal;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;-webkit-font-kerning:none;font-kerning:none}:host(.button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary, #0054e9);--color:var(--ion-color-primary-contrast, #fff)}:host(.button-outline){--border-color:var(--ion-color-primary, #0054e9);--background:transparent;--color:var(--ion-color-primary, #0054e9)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary, #0054e9)}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;width:100%;clear:both;contain:content}:host(.button-block) .button-native::after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;height:100%;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}::slotted([slot=start]),::slotted([slot=end]){-ms-flex-negative:0;flex-shrink:0}::slotted(ion-icon){font-size:1.35em;pointer-events:none}::slotted(ion-icon[slot=start]){-webkit-margin-start:-0.3em;margin-inline-start:-0.3em;-webkit-margin-end:0.3em;margin-inline-end:0.3em;margin-top:0;margin-bottom:0}::slotted(ion-icon[slot=end]){-webkit-margin-start:0.3em;margin-inline-start:0.3em;-webkit-margin-end:-0.2em;margin-inline-end:-0.2em;margin-top:0;margin-bottom:0}ion-ripple-effect{color:var(--ripple-color)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover){color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{color:var(--ion-toolbar-color, var(--color))}:host(.button-outline.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{border-color:var(--ion-toolbar-color, var(--color, var(--border-color)))}:host(.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--background));color:var(--ion-toolbar-background, var(--color))}:host{--border-radius:4px;--padding-top:8px;--padding-bottom:8px;--padding-start:1.1em;--padding-end:1.1em;--transition:box-shadow 280ms cubic-bezier(.4, 0, .2, 1),\n                background-color 15ms linear,\n                color 15ms linear;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:4px;margin-bottom:4px;min-height:36px;font-size:0.875rem;font-weight:500;letter-spacing:0.06em;text-transform:uppercase}:host(.button-solid){--background-activated:transparent;--background-hover:var(--ion-color-primary-contrast, #fff);--background-focused:var(--ion-color-primary-contrast, #fff);--background-activated-opacity:0;--background-focused-opacity:.24;--background-hover-opacity:.08;--box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)}:host(.button-solid.ion-activated){--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)}:host(.button-outline){--border-width:2px;--border-style:solid;--box-shadow:none;--background-activated:transparent;--background-focused:var(--ion-color-primary, #0054e9);--background-hover:var(--ion-color-primary, #0054e9);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04}:host(.button-outline.ion-activated.ion-color) .button-native{background:transparent}:host(.button-clear){--background-activated:transparent;--background-focused:var(--ion-color-primary, #0054e9);--background-hover:var(--ion-color-primary, #0054e9);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04}:host(.button-round){--border-radius:999px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-large){--padding-top:14px;--padding-start:1em;--padding-end:1em;--padding-bottom:14px;min-height:2.8em;font-size:1.25rem}:host(.button-small){--padding-top:4px;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:4px;min-height:2.1em;font-size:0.8125rem}:host(.button-strong){font-weight:bold}:host(.button-has-icon-only){--padding-top:0;--padding-bottom:var(--padding-top);--padding-end:var(--padding-top);--padding-start:var(--padding-end);min-width:clamp(30px, 2.86em, 60px);min-height:clamp(30px, 2.86em, 60px)}::slotted(ion-icon[slot=icon-only]){font-size:clamp(15.104px, 1.6em, 43.008px)}:host(.button-small.button-has-icon-only){min-width:clamp(23px, 2.16em, 54px);min-height:clamp(23px, 2.16em, 54px)}:host(.button-small) ::slotted(ion-icon[slot=icon-only]){font-size:clamp(13.002px, 1.23125em, 40.385px)}:host(.button-large.button-has-icon-only){min-width:clamp(46px, 2.5em, 78px);min-height:clamp(46px, 2.5em, 78px)}:host(.button-large) ::slotted(ion-icon[slot=icon-only]){font-size:clamp(15.008px, 1.4em, 43.008px)}:host(.button-solid.ion-color.ion-focused) .button-native::after{background:var(--ion-color-contrast)}:host(.button-clear.ion-color.ion-focused) .button-native::after,:host(.button-outline.ion-color.ion-focused) .button-native::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.button-solid.ion-color:hover) .button-native::after{background:var(--ion-color-contrast)}:host(.button-clear.ion-color:hover) .button-native::after,:host(.button-outline.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}:host(.button-outline.ion-activated.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-background, var(--color));color:var(--ion-toolbar-color, var(--background), var(--ion-color-primary-contrast, #fff))}';
var Button = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionFocus = createEvent(this, "ionFocus", 7);
    this.ionBlur = createEvent(this, "ionBlur", 7);
    this.inItem = false;
    this.inListHeader = false;
    this.inToolbar = false;
    this.formButtonEl = null;
    this.formEl = null;
    this.inheritedAttributes = {};
    this.isCircle = false;
    this.buttonType = "button";
    this.disabled = false;
    this.routerDirection = "forward";
    this.strong = false;
    this.type = "button";
    this.handleClick = (ev) => {
      const {
        el
      } = this;
      if (this.type === "button") {
        openURL(this.href, ev, this.routerDirection, this.routerAnimation);
      } else if (hasShadowDom(el)) {
        this.submitForm(ev);
      }
    };
    this.onFocus = () => {
      this.ionFocus.emit();
    };
    this.onBlur = () => {
      this.ionBlur.emit();
    };
    this.slotChanged = () => {
      this.isCircle = this.hasIconOnly;
    };
  }
  disabledChanged() {
    const {
      disabled
    } = this;
    if (this.formButtonEl) {
      this.formButtonEl.disabled = disabled;
    }
  }
  /**
   * This component is used within the `ion-input-password-toggle` component
   * to toggle the visibility of the password input.
   * These attributes need to update based on the state of the password input.
   * Otherwise, the values will be stale.
   *
   * @param newValue
   * @param _oldValue
   * @param propName
   */
  onAriaChanged(newValue, _oldValue, propName) {
    this.inheritedAttributes = Object.assign(Object.assign({}, this.inheritedAttributes), {
      [propName]: newValue
    });
    forceUpdate(this);
  }
  /**
   * This is responsible for rendering a hidden native
   * button element inside the associated form. This allows
   * users to submit a form by pressing "Enter" when a text
   * field inside of the form is focused. The native button
   * rendered inside of `ion-button` is in the Shadow DOM
   * and therefore does not participate in form submission
   * which is why the following code is necessary.
   */
  renderHiddenButton() {
    const formEl = this.formEl = this.findForm();
    if (formEl) {
      const {
        formButtonEl
      } = this;
      if (formButtonEl !== null && formEl.contains(formButtonEl)) {
        return;
      }
      const newFormButtonEl = this.formButtonEl = document.createElement("button");
      newFormButtonEl.type = this.type;
      newFormButtonEl.style.display = "none";
      newFormButtonEl.disabled = this.disabled;
      formEl.appendChild(newFormButtonEl);
    }
  }
  componentWillLoad() {
    this.inToolbar = !!this.el.closest("ion-buttons");
    this.inListHeader = !!this.el.closest("ion-list-header");
    this.inItem = !!this.el.closest("ion-item") || !!this.el.closest("ion-item-divider");
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }
  get hasIconOnly() {
    return !!this.el.querySelector('[slot="icon-only"]');
  }
  get rippleType() {
    const hasClearFill = this.fill === void 0 || this.fill === "clear";
    if (hasClearFill && this.hasIconOnly && this.inToolbar) {
      return "unbounded";
    }
    return "bounded";
  }
  /**
   * Finds the form element based on the provided `form` selector
   * or element reference provided.
   */
  findForm() {
    const {
      form
    } = this;
    if (form instanceof HTMLFormElement) {
      return form;
    }
    if (typeof form === "string") {
      const el = document.getElementById(form);
      if (el) {
        if (el instanceof HTMLFormElement) {
          return el;
        } else {
          printIonWarning(`[ion-button] - Form with selector: "#${form}" could not be found. Verify that the id is attached to a <form> element.`, this.el);
          return null;
        }
      } else {
        printIonWarning(`[ion-button] - Form with selector: "#${form}" could not be found. Verify that the id is correct and the form is rendered in the DOM.`, this.el);
        return null;
      }
    }
    if (form !== void 0) {
      printIonWarning(`[ion-button] - The provided "form" element is invalid. Verify that the form is a HTMLFormElement and rendered in the DOM.`, this.el);
      return null;
    }
    return this.el.closest("form");
  }
  submitForm(ev) {
    if (this.formEl && this.formButtonEl) {
      ev.preventDefault();
      this.formButtonEl.click();
    }
  }
  render() {
    const mode = getIonMode(this);
    const {
      buttonType,
      type,
      disabled,
      rel,
      target,
      size,
      href,
      color,
      expand,
      hasIconOnly,
      shape,
      strong,
      inheritedAttributes
    } = this;
    const finalSize = size === void 0 && this.inItem ? "small" : size;
    const TagType = href === void 0 ? "button" : "a";
    const attrs = TagType === "button" ? {
      type
    } : {
      download: this.download,
      href,
      rel,
      target
    };
    let fill = this.fill;
    if (fill == null) {
      fill = this.inToolbar || this.inListHeader ? "clear" : "solid";
    }
    {
      type !== "button" && this.renderHiddenButton();
    }
    return h(Host, {
      key: "b105ad09215adb3ca2298acdadf0dc9154bbb9b0",
      onClick: this.handleClick,
      "aria-disabled": disabled ? "true" : null,
      class: createColorClasses(color, {
        [mode]: true,
        [buttonType]: true,
        [`${buttonType}-${expand}`]: expand !== void 0,
        [`${buttonType}-${finalSize}`]: finalSize !== void 0,
        [`${buttonType}-${shape}`]: shape !== void 0,
        [`${buttonType}-${fill}`]: true,
        [`${buttonType}-strong`]: strong,
        "in-toolbar": hostContext("ion-toolbar", this.el),
        "in-toolbar-color": hostContext("ion-toolbar[color]", this.el),
        "in-buttons": hostContext("ion-buttons", this.el),
        "button-has-icon-only": hasIconOnly,
        "button-disabled": disabled,
        "ion-activatable": true,
        "ion-focusable": true
      })
    }, h(TagType, Object.assign({
      key: "66b4e7112bcb9e41d5a723fbbadb0a3104f9ee1d"
    }, attrs, {
      class: "button-native",
      part: "native",
      disabled,
      onFocus: this.onFocus,
      onBlur: this.onBlur
    }, inheritedAttributes), h("span", {
      key: "1439fc3da280221028dcf7ce8ec9dab273c4d4bb",
      class: "button-inner"
    }, h("slot", {
      key: "d5269ae1afc87ec7b99746032f59cbae93720a9f",
      name: "icon-only",
      onSlotchange: this.slotChanged
    }), h("slot", {
      key: "461c83e97aa246aa86d83e14f1e15a288d35041e",
      name: "start"
    }), h("slot", {
      key: "807170d47101f9f6a333dd4ff489c89284f306fe"
    }), h("slot", {
      key: "e67f116dd0349a0d27893e4f3ff0ccef1d402f80",
      name: "end"
    })), mode === "md" && h("ion-ripple-effect", {
      key: "273f0bd9645a36c1bfd18a5c2ab4f81e22b7b989",
      type: this.rippleType
    })));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "disabled": ["disabledChanged"],
      "aria-checked": ["onAriaChanged"],
      "aria-label": ["onAriaChanged"]
    };
  }
};
Button.style = {
  ios: buttonIosCss,
  md: buttonMdCss
};
var CACHED_MAP;
var getIconMap = () => {
  if (typeof window === "undefined") {
    return /* @__PURE__ */ new Map();
  } else {
    if (!CACHED_MAP) {
      const win = window;
      win.Ionicons = win.Ionicons || {};
      CACHED_MAP = win.Ionicons.map = win.Ionicons.map || /* @__PURE__ */ new Map();
    }
    return CACHED_MAP;
  }
};
var getUrl = (i) => {
  let url = getSrc(i.src);
  if (url) {
    return url;
  }
  url = getName(i.name, i.icon, i.mode, i.ios, i.md);
  if (url) {
    return getNamedUrl(url, i);
  }
  if (i.icon) {
    url = getSrc(i.icon);
    if (url) {
      return url;
    }
    url = getSrc(i.icon[i.mode]);
    if (url) {
      return url;
    }
  }
  return null;
};
var getNamedUrl = (iconName, iconEl) => {
  const url = getIconMap().get(iconName);
  if (url) {
    return url;
  }
  try {
    return getAssetPath(`svg/${iconName}.svg`);
  } catch (e) {
    console.log("e", e);
    console.warn(`[Ionicons Warning]: Could not load icon with name "${iconName}". Ensure that the icon is registered using addIcons or that the icon SVG data is passed directly to the icon component.`, iconEl);
  }
};
var getName = (iconName, icon, mode, ios, md) => {
  mode = (mode && toLower(mode)) === "ios" ? "ios" : "md";
  if (ios && mode === "ios") {
    iconName = toLower(ios);
  } else if (md && mode === "md") {
    iconName = toLower(md);
  } else {
    if (!iconName && icon && !isSrc(icon)) {
      iconName = icon;
    }
    if (isStr(iconName)) {
      iconName = toLower(iconName);
    }
  }
  if (!isStr(iconName) || iconName.trim() === "") {
    return null;
  }
  const invalidChars = iconName.replace(/[a-z]|-|\d/gi, "");
  if (invalidChars !== "") {
    return null;
  }
  return iconName;
};
var getSrc = (src) => {
  if (isStr(src)) {
    src = src.trim();
    if (isSrc(src)) {
      return src;
    }
  }
  return null;
};
var isSrc = (str) => str.length > 0 && /(\/|\.)/.test(str);
var isStr = (val) => typeof val === "string";
var toLower = (val) => val.toLowerCase();
var inheritAttributes = (el, attributes = []) => {
  const attributeObject = {};
  attributes.forEach((attr) => {
    if (el.hasAttribute(attr)) {
      const value = el.getAttribute(attr);
      if (value !== null) {
        attributeObject[attr] = el.getAttribute(attr);
      }
      el.removeAttribute(attr);
    }
  });
  return attributeObject;
};
var isRTL = (hostEl) => {
  if (hostEl) {
    if (hostEl.dir !== "") {
      return hostEl.dir.toLowerCase() === "rtl";
    }
  }
  return (document === null || document === void 0 ? void 0 : document.dir.toLowerCase()) === "rtl";
};
var validateContent = (svgContent) => {
  const div = document.createElement("div");
  div.innerHTML = svgContent;
  for (let i = div.childNodes.length - 1; i >= 0; i--) {
    if (div.childNodes[i].nodeName.toLowerCase() !== "svg") {
      div.removeChild(div.childNodes[i]);
    }
  }
  const svgElm = div.firstElementChild;
  if (svgElm && svgElm.nodeName.toLowerCase() === "svg") {
    const svgClass = svgElm.getAttribute("class") || "";
    svgElm.setAttribute("class", (svgClass + " s-ion-icon").trim());
    if (isValid(svgElm)) {
      return div.innerHTML;
    }
  }
  return "";
};
var isValid = (elm) => {
  if (elm.nodeType === 1) {
    if (elm.nodeName.toLowerCase() === "script") {
      return false;
    }
    for (let i = 0; i < elm.attributes.length; i++) {
      const name = elm.attributes[i].name;
      if (isStr(name) && name.toLowerCase().indexOf("on") === 0) {
        return false;
      }
    }
    for (let i = 0; i < elm.childNodes.length; i++) {
      if (!isValid(elm.childNodes[i])) {
        return false;
      }
    }
  }
  return true;
};
var isSvgDataUrl = (url) => url.startsWith("data:image/svg+xml");
var isEncodedDataUrl = (url) => url.indexOf(";utf8,") !== -1;
var ioniconContent = /* @__PURE__ */ new Map();
var requests = /* @__PURE__ */ new Map();
var parser;
function safeFallback(url) {
  const svg = "";
  ioniconContent.set(url, svg);
  return svg;
}
var getSvgContent = (url, sanitize) => {
  const req = requests.get(url);
  if (req) {
    return req;
  }
  if (typeof fetch !== "undefined" && typeof document !== "undefined") {
    if (isSvgDataUrl(url) && isEncodedDataUrl(url)) {
      return Promise.resolve(getSvgByUrl(url));
    }
    return fetchSvg(url, sanitize);
  }
  return Promise.resolve(safeFallback(url));
};
function getSvgByUrl(url) {
  if (!parser) {
    parser = new DOMParser();
  }
  const doc = parser.parseFromString(url, "text/html");
  const svg = doc.querySelector("svg");
  if (svg) {
    ioniconContent.set(url, svg.outerHTML);
    return svg.outerHTML;
  }
  throw new Error(`Could not parse svg from ${url}`);
}
function fetchSvg(url, sanitize) {
  const req = fetch(url).then((rsp) => {
    return rsp.text().then((svgContent) => {
      if (svgContent && sanitize !== false) {
        svgContent = validateContent(svgContent);
      }
      const svg = svgContent || "";
      ioniconContent.set(url, svg);
      return svg;
    }).catch(() => safeFallback(url));
  }).catch(() => safeFallback(url));
  requests.set(url, req);
  return req;
}
var iconCss = ":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}@supports (background: -webkit-named-image(i)){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}@supports not selector(:dir(rtl)) and selector(:host-context([dir='rtl'])){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}:host(.flip-rtl):host-context([dir='rtl']) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}@supports selector(:dir(rtl)){:host(.flip-rtl:dir(rtl)) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.flip-rtl:dir(ltr)) .icon-inner{-webkit-transform:scaleX(1);transform:scaleX(1)}}:host(.icon-small){font-size:1.125rem !important}:host(.icon-large){font-size:2rem !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}";
var Icon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.iconName = null;
    this.inheritedAttributes = {};
    this.didLoadIcon = false;
    this.isVisible = false;
    this.mode = getIonMode2();
    this.lazy = false;
    this.sanitize = true;
  }
  componentWillLoad() {
    this.inheritedAttributes = inheritAttributes(this.el, ["aria-label"]);
  }
  connectedCallback() {
    this.waitUntilVisible(this.el, "50px", () => {
      this.isVisible = true;
      this.loadIcon();
    });
  }
  /**
   * Loads the icon after the component has finished rendering.
   */
  componentDidLoad() {
    if (!this.didLoadIcon) {
      this.loadIcon();
    }
  }
  /**
   * Disconnect the IntersectionObserver.
   */
  disconnectedCallback() {
    if (this.io) {
      this.io.disconnect();
      this.io = void 0;
    }
  }
  /**
   * Wait until the icon is visible in the viewport.
   * @param el - The element to observe.
   * @param rootMargin - The root margin of the observer.
   * @param cb - The callback to call when the element is visible.
   */
  waitUntilVisible(el, rootMargin, cb) {
    const hasIntersectionObserverSupport = Boolean(this.lazy && typeof window !== "undefined" && window.IntersectionObserver);
    if (!hasIntersectionObserverSupport) {
      return cb();
    }
    const io = this.io = new window.IntersectionObserver((data) => {
      if (data[0].isIntersecting) {
        io.disconnect();
        this.io = void 0;
        cb();
      }
    }, {
      rootMargin
    });
    io.observe(el);
  }
  /**
   * Watch for changes to the icon name, src, icon, ios, or md properties.
   * When a change is detected, the icon will be loaded.
   */
  loadIcon() {
    if (this.isVisible) {
      const url = getUrl(this);
      if (url) {
        if (ioniconContent.has(url)) {
          this.svgContent = ioniconContent.get(url);
        } else {
          getSvgContent(url, this.sanitize).then(() => this.svgContent = ioniconContent.get(url));
        }
        this.didLoadIcon = true;
      }
    }
    this.iconName = getName(this.name, this.icon, this.mode, this.ios, this.md);
  }
  render() {
    const {
      flipRtl,
      iconName,
      inheritedAttributes,
      el
    } = this;
    const mode = this.mode || "md";
    const shouldAutoFlip = iconName ? (iconName.includes("arrow") || iconName.includes("chevron")) && flipRtl !== false : false;
    const shouldBeFlippable = flipRtl || shouldAutoFlip;
    return h(Host, Object.assign({
      key: "0578c899781ca145dd8205acd9670af39b57cf2e",
      role: "img",
      class: Object.assign(Object.assign({
        [mode]: true
      }, createColorClasses2(this.color)), {
        [`icon-${this.size}`]: !!this.size,
        "flip-rtl": shouldBeFlippable,
        "icon-rtl": shouldBeFlippable && isRTL(el)
      })
    }, inheritedAttributes), this.svgContent ? h("div", {
      class: "icon-inner",
      innerHTML: this.svgContent
    }) : h("div", {
      class: "icon-inner"
    }));
  }
  static get assetsDirs() {
    return ["svg"];
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "name": ["loadIcon"],
      "src": ["loadIcon"],
      "icon": ["loadIcon"],
      "ios": ["loadIcon"],
      "md": ["loadIcon"]
    };
  }
};
var getIonMode2 = () => typeof document !== "undefined" && document.documentElement.getAttribute("mode") || "md";
var createColorClasses2 = (color) => {
  return color ? {
    "ion-color": true,
    [`ion-color-${color}`]: true
  } : null;
};
Icon.style = iconCss;
export {
  Button as ion_button,
  Icon as ion_icon
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-button_2.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tYnV0dG9uXzIuZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBjcmVhdGVFdmVudCwgaSBhcyBmb3JjZVVwZGF0ZSwgZiBhcyBwcmludElvbldhcm5pbmcsIGgsIGQgYXMgSG9zdCwgZyBhcyBnZXRFbGVtZW50LCBrIGFzIGdldEFzc2V0UGF0aCB9IGZyb20gJy4vaW5kZXgtNER4WTZfZ0cuanMnO1xuaW1wb3J0IHsgayBhcyBoYXNTaGFkb3dEb20sIGkgYXMgaW5oZXJpdEFyaWFBdHRyaWJ1dGVzIH0gZnJvbSAnLi9oZWxwZXJzLThLU1FRR1F5LmpzJztcbmltcG9ydCB7IG8gYXMgb3BlblVSTCwgYyBhcyBjcmVhdGVDb2xvckNsYXNzZXMkMSwgaCBhcyBob3N0Q29udGV4dCB9IGZyb20gJy4vdGhlbWUtRGlWSnlxbFguanMnO1xuaW1wb3J0IHsgYiBhcyBnZXRJb25Nb2RlJDEgfSBmcm9tICcuL2lvbmljLWdsb2JhbC1DVFN5dWZoRi5qcyc7XG5jb25zdCBidXR0b25Jb3NDc3MgPSBcIjpob3N0ey0tb3ZlcmZsb3c6aGlkZGVuOy0tcmlwcGxlLWNvbG9yOmN1cnJlbnRDb2xvcjstLWJvcmRlci13aWR0aDppbml0aWFsOy0tYm9yZGVyLWNvbG9yOmluaXRpYWw7LS1ib3JkZXItc3R5bGU6aW5pdGlhbDstLWNvbG9yLWFjdGl2YXRlZDp2YXIoLS1jb2xvcik7LS1jb2xvci1mb2N1c2VkOnZhcigtLWNvbG9yKTstLWNvbG9yLWhvdmVyOnZhcigtLWNvbG9yKTstLWJveC1zaGFkb3c6bm9uZTtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDphdXRvO2NvbG9yOnZhcigtLWNvbG9yKTtmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHksIGluaGVyaXQpO3RleHQtYWxpZ246Y2VudGVyO3RleHQtZGVjb3JhdGlvbjpub25lO3doaXRlLXNwYWNlOm5vcm1hbDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7dmVydGljYWwtYWxpZ246dG9wO3ZlcnRpY2FsLWFsaWduOi13ZWJraXQtYmFzZWxpbmUtbWlkZGxlOy13ZWJraXQtZm9udC1rZXJuaW5nOm5vbmU7Zm9udC1rZXJuaW5nOm5vbmV9Omhvc3QoLmJ1dHRvbi1kaXNhYmxlZCl7Y3Vyc29yOmRlZmF1bHQ7b3BhY2l0eTowLjU7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdCguYnV0dG9uLXNvbGlkKXstLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMwMDU0ZTkpOy0tY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QsICNmZmYpfTpob3N0KC5idXR0b24tb3V0bGluZSl7LS1ib3JkZXItY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMwMDU0ZTkpOy0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDstLWNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMDA1NGU5KX06aG9zdCguYnV0dG9uLWNsZWFyKXstLWJvcmRlci13aWR0aDowOy0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDstLWNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMDA1NGU5KX06aG9zdCguYnV0dG9uLWJsb2NrKXtkaXNwbGF5OmJsb2NrfTpob3N0KC5idXR0b24tYmxvY2spIC5idXR0b24tbmF0aXZle21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7d2lkdGg6MTAwJTtjbGVhcjpib3RoO2NvbnRhaW46Y29udGVudH06aG9zdCguYnV0dG9uLWJsb2NrKSAuYnV0dG9uLW5hdGl2ZTo6YWZ0ZXJ7Y2xlYXI6Ym90aH06aG9zdCguYnV0dG9uLWZ1bGwpe2Rpc3BsYXk6YmxvY2t9Omhvc3QoLmJ1dHRvbi1mdWxsKSAuYnV0dG9uLW5hdGl2ZXttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO3dpZHRoOjEwMCU7Y29udGFpbjpjb250ZW50fTpob3N0KC5idXR0b24tZnVsbDpub3QoLmJ1dHRvbi1yb3VuZCkpIC5idXR0b24tbmF0aXZle2JvcmRlci1yYWRpdXM6MDtib3JkZXItcmlnaHQtd2lkdGg6MDtib3JkZXItbGVmdC13aWR0aDowfS5idXR0b24tbmF0aXZle2JvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowOy13ZWJraXQtcGFkZGluZy1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTtwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTstd2Via2l0LXBhZGRpbmctZW5kOnZhcigtLXBhZGRpbmctZW5kKTtwYWRkaW5nLWlubGluZS1lbmQ6dmFyKC0tcGFkZGluZy1lbmQpO3BhZGRpbmctdG9wOnZhcigtLXBhZGRpbmctdG9wKTtwYWRkaW5nLWJvdHRvbTp2YXIoLS1wYWRkaW5nLWJvdHRvbSk7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6aW5oZXJpdDtmb250LXN0eWxlOmluaGVyaXQ7Zm9udC13ZWlnaHQ6aW5oZXJpdDtsZXR0ZXItc3BhY2luZzppbmhlcml0O3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3RleHQtaW5kZW50OmluaGVyaXQ7dGV4dC1vdmVyZmxvdzppbmhlcml0O3RleHQtdHJhbnNmb3JtOmluaGVyaXQ7dGV4dC1hbGlnbjppbmhlcml0O3doaXRlLXNwYWNlOmluaGVyaXQ7Y29sb3I6aW5oZXJpdDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjpyZWxhdGl2ZTstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7bWluLWhlaWdodDppbmhlcml0Oy13ZWJraXQtdHJhbnNpdGlvbjp2YXIoLS10cmFuc2l0aW9uKTt0cmFuc2l0aW9uOnZhcigtLXRyYW5zaXRpb24pO2JvcmRlci13aWR0aDp2YXIoLS1ib3JkZXItd2lkdGgpO2JvcmRlci1zdHlsZTp2YXIoLS1ib3JkZXItc3R5bGUpO2JvcmRlci1jb2xvcjp2YXIoLS1ib3JkZXItY29sb3IpO291dGxpbmU6bm9uZTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2xpbmUtaGVpZ2h0OjE7LXdlYmtpdC1ib3gtc2hhZG93OnZhcigtLWJveC1zaGFkb3cpO2JveC1zaGFkb3c6dmFyKC0tYm94LXNoYWRvdyk7Y29udGFpbjpsYXlvdXQgc3R5bGU7Y3Vyc29yOnBvaW50ZXI7b3BhY2l0eTp2YXIoLS1vcGFjaXR5KTtvdmVyZmxvdzp2YXIoLS1vdmVyZmxvdyk7ei1pbmRleDowOy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmV9LmJ1dHRvbi1uYXRpdmU6Oi1tb3otZm9jdXMtaW5uZXJ7Ym9yZGVyOjB9LmJ1dHRvbi1pbm5lcntkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjpyZWxhdGl2ZTstbXMtZmxleC1mbG93OnJvdyBub3dyYXA7ZmxleC1mbG93OnJvdyBub3dyYXA7LW1zLWZsZXgtbmVnYXRpdmU6MDtmbGV4LXNocmluazowOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3otaW5kZXg6MX06OnNsb3R0ZWQoW3Nsb3Q9c3RhcnRdKSw6OnNsb3R0ZWQoW3Nsb3Q9ZW5kXSl7LW1zLWZsZXgtbmVnYXRpdmU6MDtmbGV4LXNocmluazowfTo6c2xvdHRlZChpb24taWNvbil7Zm9udC1zaXplOjEuMzVlbTtwb2ludGVyLWV2ZW50czpub25lfTo6c2xvdHRlZChpb24taWNvbltzbG90PXN0YXJ0XSl7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6LTAuM2VtO21hcmdpbi1pbmxpbmUtc3RhcnQ6LTAuM2VtOy13ZWJraXQtbWFyZ2luLWVuZDowLjNlbTttYXJnaW4taW5saW5lLWVuZDowLjNlbTttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfTo6c2xvdHRlZChpb24taWNvbltzbG90PWVuZF0pey13ZWJraXQtbWFyZ2luLXN0YXJ0OjAuM2VtO21hcmdpbi1pbmxpbmUtc3RhcnQ6MC4zZW07LXdlYmtpdC1tYXJnaW4tZW5kOi0wLjJlbTttYXJnaW4taW5saW5lLWVuZDotMC4yZW07bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MH1pb24tcmlwcGxlLWVmZmVjdHtjb2xvcjp2YXIoLS1yaXBwbGUtY29sb3IpfS5idXR0b24tbmF0aXZlOjphZnRlcntsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MDtwb3NpdGlvbjphYnNvbHV0ZTtjb250ZW50OlxcXCJcXFwiO29wYWNpdHk6MH06aG9zdCguaW9uLWZvY3VzZWQpe2NvbG9yOnZhcigtLWNvbG9yLWZvY3VzZWQpfTpob3N0KC5pb24tZm9jdXNlZCkgLmJ1dHRvbi1uYXRpdmU6OmFmdGVye2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZC1mb2N1c2VkKTtvcGFjaXR5OnZhcigtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5KX1AbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpezpob3N0KDpob3Zlcil7Y29sb3I6dmFyKC0tY29sb3ItaG92ZXIpfTpob3N0KDpob3ZlcikgLmJ1dHRvbi1uYXRpdmU6OmFmdGVye2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZC1ob3Zlcik7b3BhY2l0eTp2YXIoLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHkpfX06aG9zdCguaW9uLWFjdGl2YXRlZCl7Y29sb3I6dmFyKC0tY29sb3ItYWN0aXZhdGVkKX06aG9zdCguaW9uLWFjdGl2YXRlZCkgLmJ1dHRvbi1uYXRpdmU6OmFmdGVye2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQpO29wYWNpdHk6dmFyKC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eSl9Omhvc3QoLmJ1dHRvbi1zb2xpZC5pb24tY29sb3IpIC5idXR0b24tbmF0aXZle2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWJhc2UpO2NvbG9yOnZhcigtLWlvbi1jb2xvci1jb250cmFzdCl9Omhvc3QoLmJ1dHRvbi1vdXRsaW5lLmlvbi1jb2xvcikgLmJ1dHRvbi1uYXRpdmV7Ym9yZGVyLWNvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKTtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2NvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKX06aG9zdCguYnV0dG9uLWNsZWFyLmlvbi1jb2xvcikgLmJ1dHRvbi1uYXRpdmV7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtjb2xvcjp2YXIoLS1pb24tY29sb3ItYmFzZSl9Omhvc3QoLmluLXRvb2xiYXI6bm90KC5pb24tY29sb3IpOm5vdCguaW4tdG9vbGJhci1jb2xvcikpIC5idXR0b24tbmF0aXZle2NvbG9yOnZhcigtLWlvbi10b29sYmFyLWNvbG9yLCB2YXIoLS1jb2xvcikpfTpob3N0KC5idXR0b24tb3V0bGluZS5pbi10b29sYmFyOm5vdCguaW9uLWNvbG9yKTpub3QoLmluLXRvb2xiYXItY29sb3IpKSAuYnV0dG9uLW5hdGl2ZXtib3JkZXItY29sb3I6dmFyKC0taW9uLXRvb2xiYXItY29sb3IsIHZhcigtLWNvbG9yLCB2YXIoLS1ib3JkZXItY29sb3IpKSl9Omhvc3QoLmJ1dHRvbi1zb2xpZC5pbi10b29sYmFyOm5vdCguaW9uLWNvbG9yKTpub3QoLmluLXRvb2xiYXItY29sb3IpKSAuYnV0dG9uLW5hdGl2ZXtiYWNrZ3JvdW5kOnZhcigtLWlvbi10b29sYmFyLWNvbG9yLCB2YXIoLS1iYWNrZ3JvdW5kKSk7Y29sb3I6dmFyKC0taW9uLXRvb2xiYXItYmFja2dyb3VuZCwgdmFyKC0tY29sb3IpKX06aG9zdHstLWJvcmRlci1yYWRpdXM6MTRweDstLXBhZGRpbmctdG9wOjEzcHg7LS1wYWRkaW5nLWJvdHRvbToxM3B4Oy0tcGFkZGluZy1zdGFydDoxZW07LS1wYWRkaW5nLWVuZDoxZW07LS10cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IsIG9wYWNpdHkgMTAwbXMgbGluZWFyOy13ZWJraXQtbWFyZ2luLXN0YXJ0OjJweDttYXJnaW4taW5saW5lLXN0YXJ0OjJweDstd2Via2l0LW1hcmdpbi1lbmQ6MnB4O21hcmdpbi1pbmxpbmUtZW5kOjJweDttYXJnaW4tdG9wOjRweDttYXJnaW4tYm90dG9tOjRweDttaW4taGVpZ2h0OjMuMWVtO2ZvbnQtc2l6ZTptaW4oMXJlbSwgNDhweCk7Zm9udC13ZWlnaHQ6NTAwO2xldHRlci1zcGFjaW5nOjB9Omhvc3QoLmJ1dHRvbi1zb2xpZCl7LS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSwgIzAwNGFjZCk7LS1iYWNrZ3JvdW5kLWZvY3VzZWQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUsICMwMDRhY2QpOy0tYmFja2dyb3VuZC1ob3Zlcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeS10aW50LCAjMWE2NWViKTstLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6MTstLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OjE7LS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6MX06aG9zdCguYnV0dG9uLW91dGxpbmUpey0tYm9yZGVyLXJhZGl1czoxNHB4Oy0tYm9yZGVyLXdpZHRoOjFweDstLWJvcmRlci1zdHlsZTpzb2xpZDstLWJhY2tncm91bmQtYWN0aXZhdGVkOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMDA1NGU5KTstLWJhY2tncm91bmQtZm9jdXNlZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzAwNTRlOSk7LS1iYWNrZ3JvdW5kLWhvdmVyOnRyYW5zcGFyZW50Oy0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6LjE7LS1jb2xvci1hY3RpdmF0ZWQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QsICNmZmYpfTpob3N0KC5idXR0b24tY2xlYXIpey0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6dHJhbnNwYXJlbnQ7LS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OjA7LS1iYWNrZ3JvdW5kLWZvY3VzZWQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMwMDU0ZTkpOy0tYmFja2dyb3VuZC1ob3Zlcjp0cmFuc3BhcmVudDstLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5Oi4xO2ZvbnQtc2l6ZTptaW4oMS4wNjI1cmVtLCA1MXB4KTtmb250LXdlaWdodDpub3JtYWx9Omhvc3QoLmluLWJ1dHRvbnMpe2ZvbnQtc2l6ZTpjbGFtcCgxN3B4LCAxLjA2MjVyZW0sIDIxLjA4cHgpO2ZvbnQtd2VpZ2h0OjQwMH06aG9zdCguYnV0dG9uLWxhcmdlKXstLWJvcmRlci1yYWRpdXM6MTZweDstLXBhZGRpbmctdG9wOjE3cHg7LS1wYWRkaW5nLXN0YXJ0OjFlbTstLXBhZGRpbmctZW5kOjFlbTstLXBhZGRpbmctYm90dG9tOjE3cHg7bWluLWhlaWdodDozLjFlbTtmb250LXNpemU6bWluKDEuMjVyZW0sIDYwcHgpfTpob3N0KC5idXR0b24tc21hbGwpey0tYm9yZGVyLXJhZGl1czo2cHg7LS1wYWRkaW5nLXRvcDo0cHg7LS1wYWRkaW5nLXN0YXJ0OjAuOWVtOy0tcGFkZGluZy1lbmQ6MC45ZW07LS1wYWRkaW5nLWJvdHRvbTo0cHg7bWluLWhlaWdodDoyLjFlbTtmb250LXNpemU6bWluKDAuODEyNXJlbSwgMzlweCl9Omhvc3QoLmJ1dHRvbi1yb3VuZCl7LS1ib3JkZXItcmFkaXVzOjk5OXB4Oy0tcGFkZGluZy10b3A6MDstLXBhZGRpbmctc3RhcnQ6MjZweDstLXBhZGRpbmctZW5kOjI2cHg7LS1wYWRkaW5nLWJvdHRvbTowfTpob3N0KC5idXR0b24tc3Ryb25nKXtmb250LXdlaWdodDo2MDB9Omhvc3QoLmJ1dHRvbi1oYXMtaWNvbi1vbmx5KXstLXBhZGRpbmctdG9wOjA7LS1wYWRkaW5nLWJvdHRvbTp2YXIoLS1wYWRkaW5nLXRvcCk7LS1wYWRkaW5nLWVuZDp2YXIoLS1wYWRkaW5nLXRvcCk7LS1wYWRkaW5nLXN0YXJ0OnZhcigtLXBhZGRpbmctZW5kKTttaW4td2lkdGg6Y2xhbXAoMzBweCwgMi4xMjVlbSwgNjBweCk7bWluLWhlaWdodDpjbGFtcCgzMHB4LCAyLjEyNWVtLCA2MHB4KX06OnNsb3R0ZWQoaW9uLWljb25bc2xvdD1pY29uLW9ubHldKXtmb250LXNpemU6Y2xhbXAoMTUuMTJweCwgMS4xMjVlbSwgNDMuMDJweCl9Omhvc3QoLmJ1dHRvbi1zbWFsbC5idXR0b24taGFzLWljb24tb25seSl7bWluLXdpZHRoOmNsYW1wKDIzcHgsIDIuMTZlbSwgNTRweCk7bWluLWhlaWdodDpjbGFtcCgyM3B4LCAyLjE2ZW0sIDU0cHgpfTpob3N0KC5idXR0b24tc21hbGwpIDo6c2xvdHRlZChpb24taWNvbltzbG90PWljb24tb25seV0pe2ZvbnQtc2l6ZTpjbGFtcCgxMi4xMzk0cHgsIDEuMzA4MTI1ZW0sIDQwLjE4NTZweCl9Omhvc3QoLmJ1dHRvbi1sYXJnZS5idXR0b24taGFzLWljb24tb25seSl7bWluLXdpZHRoOmNsYW1wKDQ2cHgsIDIuNWVtLCA3OHB4KTttaW4taGVpZ2h0OmNsYW1wKDQ2cHgsIDIuNWVtLCA3OHB4KX06aG9zdCguYnV0dG9uLWxhcmdlKSA6OnNsb3R0ZWQoaW9uLWljb25bc2xvdD1pY29uLW9ubHldKXtmb250LXNpemU6Y2xhbXAoMTUuMTJweCwgMC45ZW0sIDQzLjA1NnB4KX06aG9zdCguYnV0dG9uLW91dGxpbmUuaW9uLWZvY3VzZWQuaW9uLWNvbG9yKSAuYnV0dG9uLW5hdGl2ZSw6aG9zdCguYnV0dG9uLWNsZWFyLmlvbi1mb2N1c2VkLmlvbi1jb2xvcikgLmJ1dHRvbi1uYXRpdmV7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWJhc2UpfTpob3N0KC5idXR0b24tb3V0bGluZS5pb24tZm9jdXNlZC5pb24tY29sb3IpIC5idXR0b24tbmF0aXZlOjphZnRlciw6aG9zdCguYnV0dG9uLWNsZWFyLmlvbi1mb2N1c2VkLmlvbi1jb2xvcikgLmJ1dHRvbi1uYXRpdmU6OmFmdGVye2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWJhc2UpfTpob3N0KC5idXR0b24tc29saWQuaW9uLWNvbG9yLmlvbi1mb2N1c2VkKSAuYnV0dG9uLW5hdGl2ZTo6YWZ0ZXJ7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3Itc2hhZGUpfUBtZWRpYSAoYW55LWhvdmVyOiBob3Zlcil7Omhvc3QoLmJ1dHRvbi1jbGVhcjpub3QoLmlvbi1hY3RpdmF0ZWQpOmhvdmVyKSw6aG9zdCguYnV0dG9uLW91dGxpbmU6bm90KC5pb24tYWN0aXZhdGVkKTpob3Zlcil7b3BhY2l0eTowLjZ9Omhvc3QoLmJ1dHRvbi1jbGVhci5pb24tY29sb3I6aG92ZXIpIC5idXR0b24tbmF0aXZlLDpob3N0KC5idXR0b24tb3V0bGluZS5pb24tY29sb3I6aG92ZXIpIC5idXR0b24tbmF0aXZle2NvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKX06aG9zdCguYnV0dG9uLWNsZWFyLmlvbi1jb2xvcjpob3ZlcikgLmJ1dHRvbi1uYXRpdmU6OmFmdGVyLDpob3N0KC5idXR0b24tb3V0bGluZS5pb24tY29sb3I6aG92ZXIpIC5idXR0b24tbmF0aXZlOjphZnRlcntiYWNrZ3JvdW5kOnRyYW5zcGFyZW50fTpob3N0KC5idXR0b24tc29saWQuaW9uLWNvbG9yOmhvdmVyKSAuYnV0dG9uLW5hdGl2ZTo6YWZ0ZXJ7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItdGludCl9Omhvc3QoOmhvdmVyLmJ1dHRvbi1zb2xpZC5pbi10b29sYmFyOm5vdCguaW9uLWNvbG9yKTpub3QoLmluLXRvb2xiYXItY29sb3IpOm5vdCguaW9uLWFjdGl2YXRlZCkpIC5idXR0b24tbmF0aXZlOjphZnRlcntiYWNrZ3JvdW5kOiNmZmY7b3BhY2l0eTowLjF9fTpob3N0KC5idXR0b24tY2xlYXIuaW9uLWFjdGl2YXRlZCl7b3BhY2l0eTowLjR9Omhvc3QoLmJ1dHRvbi1vdXRsaW5lLmlvbi1hY3RpdmF0ZWQuaW9uLWNvbG9yKSAuYnV0dG9uLW5hdGl2ZXtjb2xvcjp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpfTpob3N0KC5idXR0b24tb3V0bGluZS5pb24tYWN0aXZhdGVkLmlvbi1jb2xvcikgLmJ1dHRvbi1uYXRpdmU6OmFmdGVye2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWJhc2UpfTpob3N0KC5idXR0b24tc29saWQuaW9uLWNvbG9yLmlvbi1hY3RpdmF0ZWQpIC5idXR0b24tbmF0aXZlOjphZnRlcntiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1zaGFkZSl9Omhvc3QoLmJ1dHRvbi1vdXRsaW5lLmlvbi1hY3RpdmF0ZWQuaW4tdG9vbGJhcjpub3QoLmlvbi1jb2xvcik6bm90KC5pbi10b29sYmFyLWNvbG9yKSkgLmJ1dHRvbi1uYXRpdmV7YmFja2dyb3VuZDp2YXIoLS1pb24tdG9vbGJhci1jb2xvciwgdmFyKC0tY29sb3IpKTtjb2xvcjp2YXIoLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kLCB2YXIoLS1iYWNrZ3JvdW5kKSwgdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QsICNmZmYpKX1cIjtcbmNvbnN0IGJ1dHRvbk1kQ3NzID0gXCI6aG9zdHstLW92ZXJmbG93OmhpZGRlbjstLXJpcHBsZS1jb2xvcjpjdXJyZW50Q29sb3I7LS1ib3JkZXItd2lkdGg6aW5pdGlhbDstLWJvcmRlci1jb2xvcjppbml0aWFsOy0tYm9yZGVyLXN0eWxlOmluaXRpYWw7LS1jb2xvci1hY3RpdmF0ZWQ6dmFyKC0tY29sb3IpOy0tY29sb3ItZm9jdXNlZDp2YXIoLS1jb2xvcik7LS1jb2xvci1ob3Zlcjp2YXIoLS1jb2xvcik7LS1ib3gtc2hhZG93Om5vbmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6YXV0bztjb2xvcjp2YXIoLS1jb2xvcik7Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LCBpbmhlcml0KTt0ZXh0LWFsaWduOmNlbnRlcjt0ZXh0LWRlY29yYXRpb246bm9uZTt3aGl0ZS1zcGFjZTpub3JtYWw7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO3ZlcnRpY2FsLWFsaWduOnRvcDt2ZXJ0aWNhbC1hbGlnbjotd2Via2l0LWJhc2VsaW5lLW1pZGRsZTstd2Via2l0LWZvbnQta2VybmluZzpub25lO2ZvbnQta2VybmluZzpub25lfTpob3N0KC5idXR0b24tZGlzYWJsZWQpe2N1cnNvcjpkZWZhdWx0O29wYWNpdHk6MC41O3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3QoLmJ1dHRvbi1zb2xpZCl7LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMDA1NGU5KTstLWNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LCAjZmZmKX06aG9zdCguYnV0dG9uLW91dGxpbmUpey0tYm9yZGVyLWNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMDA1NGU5KTstLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7LS1jb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzAwNTRlOSl9Omhvc3QoLmJ1dHRvbi1jbGVhcil7LS1ib3JkZXItd2lkdGg6MDstLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7LS1jb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzAwNTRlOSl9Omhvc3QoLmJ1dHRvbi1ibG9jayl7ZGlzcGxheTpibG9ja306aG9zdCguYnV0dG9uLWJsb2NrKSAuYnV0dG9uLW5hdGl2ZXttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO3dpZHRoOjEwMCU7Y2xlYXI6Ym90aDtjb250YWluOmNvbnRlbnR9Omhvc3QoLmJ1dHRvbi1ibG9jaykgLmJ1dHRvbi1uYXRpdmU6OmFmdGVye2NsZWFyOmJvdGh9Omhvc3QoLmJ1dHRvbi1mdWxsKXtkaXNwbGF5OmJsb2NrfTpob3N0KC5idXR0b24tZnVsbCkgLmJ1dHRvbi1uYXRpdmV7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDt3aWR0aDoxMDAlO2NvbnRhaW46Y29udGVudH06aG9zdCguYnV0dG9uLWZ1bGw6bm90KC5idXR0b24tcm91bmQpKSAuYnV0dG9uLW5hdGl2ZXtib3JkZXItcmFkaXVzOjA7Ym9yZGVyLXJpZ2h0LXdpZHRoOjA7Ym9yZGVyLWxlZnQtd2lkdGg6MH0uYnV0dG9uLW5hdGl2ZXtib3JkZXItcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDstd2Via2l0LXBhZGRpbmctc3RhcnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7cGFkZGluZy1pbmxpbmUtc3RhcnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7LXdlYmtpdC1wYWRkaW5nLWVuZDp2YXIoLS1wYWRkaW5nLWVuZCk7cGFkZGluZy1pbmxpbmUtZW5kOnZhcigtLXBhZGRpbmctZW5kKTtwYWRkaW5nLXRvcDp2YXIoLS1wYWRkaW5nLXRvcCk7cGFkZGluZy1ib3R0b206dmFyKC0tcGFkZGluZy1ib3R0b20pO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOmluaGVyaXQ7Zm9udC1zdHlsZTppbmhlcml0O2ZvbnQtd2VpZ2h0OmluaGVyaXQ7bGV0dGVyLXNwYWNpbmc6aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt0ZXh0LWluZGVudDppbmhlcml0O3RleHQtb3ZlcmZsb3c6aW5oZXJpdDt0ZXh0LXRyYW5zZm9ybTppbmhlcml0O3RleHQtYWxpZ246aW5oZXJpdDt3aGl0ZS1zcGFjZTppbmhlcml0O2NvbG9yOmluaGVyaXQ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO21pbi1oZWlnaHQ6aW5oZXJpdDstd2Via2l0LXRyYW5zaXRpb246dmFyKC0tdHJhbnNpdGlvbik7dHJhbnNpdGlvbjp2YXIoLS10cmFuc2l0aW9uKTtib3JkZXItd2lkdGg6dmFyKC0tYm9yZGVyLXdpZHRoKTtib3JkZXItc3R5bGU6dmFyKC0tYm9yZGVyLXN0eWxlKTtib3JkZXItY29sb3I6dmFyKC0tYm9yZGVyLWNvbG9yKTtvdXRsaW5lOm5vbmU7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTtsaW5lLWhlaWdodDoxOy13ZWJraXQtYm94LXNoYWRvdzp2YXIoLS1ib3gtc2hhZG93KTtib3gtc2hhZG93OnZhcigtLWJveC1zaGFkb3cpO2NvbnRhaW46bGF5b3V0IHN0eWxlO2N1cnNvcjpwb2ludGVyO29wYWNpdHk6dmFyKC0tb3BhY2l0eSk7b3ZlcmZsb3c6dmFyKC0tb3ZlcmZsb3cpO3otaW5kZXg6MDstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lfS5idXR0b24tbmF0aXZlOjotbW96LWZvY3VzLWlubmVye2JvcmRlcjowfS5idXR0b24taW5uZXJ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtZmxvdzpyb3cgbm93cmFwO2ZsZXgtZmxvdzpyb3cgbm93cmFwOy1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTt6LWluZGV4OjF9OjpzbG90dGVkKFtzbG90PXN0YXJ0XSksOjpzbG90dGVkKFtzbG90PWVuZF0pey1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MH06OnNsb3R0ZWQoaW9uLWljb24pe2ZvbnQtc2l6ZToxLjM1ZW07cG9pbnRlci1ldmVudHM6bm9uZX06OnNsb3R0ZWQoaW9uLWljb25bc2xvdD1zdGFydF0pey13ZWJraXQtbWFyZ2luLXN0YXJ0Oi0wLjNlbTttYXJnaW4taW5saW5lLXN0YXJ0Oi0wLjNlbTstd2Via2l0LW1hcmdpbi1lbmQ6MC4zZW07bWFyZ2luLWlubGluZS1lbmQ6MC4zZW07bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MH06OnNsb3R0ZWQoaW9uLWljb25bc2xvdD1lbmRdKXstd2Via2l0LW1hcmdpbi1zdGFydDowLjNlbTttYXJnaW4taW5saW5lLXN0YXJ0OjAuM2VtOy13ZWJraXQtbWFyZ2luLWVuZDotMC4yZW07bWFyZ2luLWlubGluZS1lbmQ6LTAuMmVtO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjB9aW9uLXJpcHBsZS1lZmZlY3R7Y29sb3I6dmFyKC0tcmlwcGxlLWNvbG9yKX0uYnV0dG9uLW5hdGl2ZTo6YWZ0ZXJ7bGVmdDowO3JpZ2h0OjA7dG9wOjA7Ym90dG9tOjA7cG9zaXRpb246YWJzb2x1dGU7Y29udGVudDpcXFwiXFxcIjtvcGFjaXR5OjB9Omhvc3QoLmlvbi1mb2N1c2VkKXtjb2xvcjp2YXIoLS1jb2xvci1mb2N1c2VkKX06aG9zdCguaW9uLWZvY3VzZWQpIC5idXR0b24tbmF0aXZlOjphZnRlcntiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQtZm9jdXNlZCk7b3BhY2l0eTp2YXIoLS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eSl9QG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKXs6aG9zdCg6aG92ZXIpe2NvbG9yOnZhcigtLWNvbG9yLWhvdmVyKX06aG9zdCg6aG92ZXIpIC5idXR0b24tbmF0aXZlOjphZnRlcntiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQtaG92ZXIpO29wYWNpdHk6dmFyKC0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5KX19Omhvc3QoLmlvbi1hY3RpdmF0ZWQpe2NvbG9yOnZhcigtLWNvbG9yLWFjdGl2YXRlZCl9Omhvc3QoLmlvbi1hY3RpdmF0ZWQpIC5idXR0b24tbmF0aXZlOjphZnRlcntiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQtYWN0aXZhdGVkKTtvcGFjaXR5OnZhcigtLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHkpfTpob3N0KC5idXR0b24tc29saWQuaW9uLWNvbG9yKSAuYnV0dG9uLW5hdGl2ZXtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1iYXNlKTtjb2xvcjp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpfTpob3N0KC5idXR0b24tb3V0bGluZS5pb24tY29sb3IpIC5idXR0b24tbmF0aXZle2JvcmRlci1jb2xvcjp2YXIoLS1pb24tY29sb3ItYmFzZSk7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtjb2xvcjp2YXIoLS1pb24tY29sb3ItYmFzZSl9Omhvc3QoLmJ1dHRvbi1jbGVhci5pb24tY29sb3IpIC5idXR0b24tbmF0aXZle2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWJhc2UpfTpob3N0KC5pbi10b29sYmFyOm5vdCguaW9uLWNvbG9yKTpub3QoLmluLXRvb2xiYXItY29sb3IpKSAuYnV0dG9uLW5hdGl2ZXtjb2xvcjp2YXIoLS1pb24tdG9vbGJhci1jb2xvciwgdmFyKC0tY29sb3IpKX06aG9zdCguYnV0dG9uLW91dGxpbmUuaW4tdG9vbGJhcjpub3QoLmlvbi1jb2xvcik6bm90KC5pbi10b29sYmFyLWNvbG9yKSkgLmJ1dHRvbi1uYXRpdmV7Ym9yZGVyLWNvbG9yOnZhcigtLWlvbi10b29sYmFyLWNvbG9yLCB2YXIoLS1jb2xvciwgdmFyKC0tYm9yZGVyLWNvbG9yKSkpfTpob3N0KC5idXR0b24tc29saWQuaW4tdG9vbGJhcjpub3QoLmlvbi1jb2xvcik6bm90KC5pbi10b29sYmFyLWNvbG9yKSkgLmJ1dHRvbi1uYXRpdmV7YmFja2dyb3VuZDp2YXIoLS1pb24tdG9vbGJhci1jb2xvciwgdmFyKC0tYmFja2dyb3VuZCkpO2NvbG9yOnZhcigtLWlvbi10b29sYmFyLWJhY2tncm91bmQsIHZhcigtLWNvbG9yKSl9Omhvc3R7LS1ib3JkZXItcmFkaXVzOjRweDstLXBhZGRpbmctdG9wOjhweDstLXBhZGRpbmctYm90dG9tOjhweDstLXBhZGRpbmctc3RhcnQ6MS4xZW07LS1wYWRkaW5nLWVuZDoxLjFlbTstLXRyYW5zaXRpb246Ym94LXNoYWRvdyAyODBtcyBjdWJpYy1iZXppZXIoLjQsIDAsIC4yLCAxKSxcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAxNW1zIGxpbmVhcixcXG4gICAgICAgICAgICAgICAgY29sb3IgMTVtcyBsaW5lYXI7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MnB4O21hcmdpbi1pbmxpbmUtc3RhcnQ6MnB4Oy13ZWJraXQtbWFyZ2luLWVuZDoycHg7bWFyZ2luLWlubGluZS1lbmQ6MnB4O21hcmdpbi10b3A6NHB4O21hcmdpbi1ib3R0b206NHB4O21pbi1oZWlnaHQ6MzZweDtmb250LXNpemU6MC44NzVyZW07Zm9udC13ZWlnaHQ6NTAwO2xldHRlci1zcGFjaW5nOjAuMDZlbTt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2V9Omhvc3QoLmJ1dHRvbi1zb2xpZCl7LS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDp0cmFuc3BhcmVudDstLWJhY2tncm91bmQtaG92ZXI6dmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QsICNmZmYpOy0tYmFja2dyb3VuZC1mb2N1c2VkOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LCAjZmZmKTstLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6MDstLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5Oi4yNDstLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTouMDg7LS1ib3gtc2hhZG93OjAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKX06aG9zdCguYnV0dG9uLXNvbGlkLmlvbi1hY3RpdmF0ZWQpey0tYm94LXNoYWRvdzowIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMil9Omhvc3QoLmJ1dHRvbi1vdXRsaW5lKXstLWJvcmRlci13aWR0aDoycHg7LS1ib3JkZXItc3R5bGU6c29saWQ7LS1ib3gtc2hhZG93Om5vbmU7LS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDp0cmFuc3BhcmVudDstLWJhY2tncm91bmQtZm9jdXNlZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzAwNTRlOSk7LS1iYWNrZ3JvdW5kLWhvdmVyOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMDA1NGU5KTstLWJhY2tncm91bmQtYWN0aXZhdGVkLW9wYWNpdHk6MDstLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5Oi4xMjstLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTouMDR9Omhvc3QoLmJ1dHRvbi1vdXRsaW5lLmlvbi1hY3RpdmF0ZWQuaW9uLWNvbG9yKSAuYnV0dG9uLW5hdGl2ZXtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50fTpob3N0KC5idXR0b24tY2xlYXIpey0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6dHJhbnNwYXJlbnQ7LS1iYWNrZ3JvdW5kLWZvY3VzZWQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMwMDU0ZTkpOy0tYmFja2dyb3VuZC1ob3Zlcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzAwNTRlOSk7LS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OjA7LS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTouMTI7LS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6LjA0fTpob3N0KC5idXR0b24tcm91bmQpey0tYm9yZGVyLXJhZGl1czo5OTlweDstLXBhZGRpbmctdG9wOjA7LS1wYWRkaW5nLXN0YXJ0OjI2cHg7LS1wYWRkaW5nLWVuZDoyNnB4Oy0tcGFkZGluZy1ib3R0b206MH06aG9zdCguYnV0dG9uLWxhcmdlKXstLXBhZGRpbmctdG9wOjE0cHg7LS1wYWRkaW5nLXN0YXJ0OjFlbTstLXBhZGRpbmctZW5kOjFlbTstLXBhZGRpbmctYm90dG9tOjE0cHg7bWluLWhlaWdodDoyLjhlbTtmb250LXNpemU6MS4yNXJlbX06aG9zdCguYnV0dG9uLXNtYWxsKXstLXBhZGRpbmctdG9wOjRweDstLXBhZGRpbmctc3RhcnQ6MC45ZW07LS1wYWRkaW5nLWVuZDowLjllbTstLXBhZGRpbmctYm90dG9tOjRweDttaW4taGVpZ2h0OjIuMWVtO2ZvbnQtc2l6ZTowLjgxMjVyZW19Omhvc3QoLmJ1dHRvbi1zdHJvbmcpe2ZvbnQtd2VpZ2h0OmJvbGR9Omhvc3QoLmJ1dHRvbi1oYXMtaWNvbi1vbmx5KXstLXBhZGRpbmctdG9wOjA7LS1wYWRkaW5nLWJvdHRvbTp2YXIoLS1wYWRkaW5nLXRvcCk7LS1wYWRkaW5nLWVuZDp2YXIoLS1wYWRkaW5nLXRvcCk7LS1wYWRkaW5nLXN0YXJ0OnZhcigtLXBhZGRpbmctZW5kKTttaW4td2lkdGg6Y2xhbXAoMzBweCwgMi44NmVtLCA2MHB4KTttaW4taGVpZ2h0OmNsYW1wKDMwcHgsIDIuODZlbSwgNjBweCl9OjpzbG90dGVkKGlvbi1pY29uW3Nsb3Q9aWNvbi1vbmx5XSl7Zm9udC1zaXplOmNsYW1wKDE1LjEwNHB4LCAxLjZlbSwgNDMuMDA4cHgpfTpob3N0KC5idXR0b24tc21hbGwuYnV0dG9uLWhhcy1pY29uLW9ubHkpe21pbi13aWR0aDpjbGFtcCgyM3B4LCAyLjE2ZW0sIDU0cHgpO21pbi1oZWlnaHQ6Y2xhbXAoMjNweCwgMi4xNmVtLCA1NHB4KX06aG9zdCguYnV0dG9uLXNtYWxsKSA6OnNsb3R0ZWQoaW9uLWljb25bc2xvdD1pY29uLW9ubHldKXtmb250LXNpemU6Y2xhbXAoMTMuMDAycHgsIDEuMjMxMjVlbSwgNDAuMzg1cHgpfTpob3N0KC5idXR0b24tbGFyZ2UuYnV0dG9uLWhhcy1pY29uLW9ubHkpe21pbi13aWR0aDpjbGFtcCg0NnB4LCAyLjVlbSwgNzhweCk7bWluLWhlaWdodDpjbGFtcCg0NnB4LCAyLjVlbSwgNzhweCl9Omhvc3QoLmJ1dHRvbi1sYXJnZSkgOjpzbG90dGVkKGlvbi1pY29uW3Nsb3Q9aWNvbi1vbmx5XSl7Zm9udC1zaXplOmNsYW1wKDE1LjAwOHB4LCAxLjRlbSwgNDMuMDA4cHgpfTpob3N0KC5idXR0b24tc29saWQuaW9uLWNvbG9yLmlvbi1mb2N1c2VkKSAuYnV0dG9uLW5hdGl2ZTo6YWZ0ZXJ7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpfTpob3N0KC5idXR0b24tY2xlYXIuaW9uLWNvbG9yLmlvbi1mb2N1c2VkKSAuYnV0dG9uLW5hdGl2ZTo6YWZ0ZXIsOmhvc3QoLmJ1dHRvbi1vdXRsaW5lLmlvbi1jb2xvci5pb24tZm9jdXNlZCkgLmJ1dHRvbi1uYXRpdmU6OmFmdGVye2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWJhc2UpfUBtZWRpYSAoYW55LWhvdmVyOiBob3Zlcil7Omhvc3QoLmJ1dHRvbi1zb2xpZC5pb24tY29sb3I6aG92ZXIpIC5idXR0b24tbmF0aXZlOjphZnRlcntiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1jb250cmFzdCl9Omhvc3QoLmJ1dHRvbi1jbGVhci5pb24tY29sb3I6aG92ZXIpIC5idXR0b24tbmF0aXZlOjphZnRlciw6aG9zdCguYnV0dG9uLW91dGxpbmUuaW9uLWNvbG9yOmhvdmVyKSAuYnV0dG9uLW5hdGl2ZTo6YWZ0ZXJ7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItYmFzZSl9fTpob3N0KC5idXR0b24tb3V0bGluZS5pb24tYWN0aXZhdGVkLmluLXRvb2xiYXI6bm90KC5pb24tY29sb3IpOm5vdCguaW4tdG9vbGJhci1jb2xvcikpIC5idXR0b24tbmF0aXZle2JhY2tncm91bmQ6dmFyKC0taW9uLXRvb2xiYXItYmFja2dyb3VuZCwgdmFyKC0tY29sb3IpKTtjb2xvcjp2YXIoLS1pb24tdG9vbGJhci1jb2xvciwgdmFyKC0tYmFja2dyb3VuZCksIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LCAjZmZmKSl9XCI7XG5jb25zdCBCdXR0b24gPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuaW9uRm9jdXMgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkZvY3VzXCIsIDcpO1xuICAgIHRoaXMuaW9uQmx1ciA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uQmx1clwiLCA3KTtcbiAgICB0aGlzLmluSXRlbSA9IGZhbHNlO1xuICAgIHRoaXMuaW5MaXN0SGVhZGVyID0gZmFsc2U7XG4gICAgdGhpcy5pblRvb2xiYXIgPSBmYWxzZTtcbiAgICB0aGlzLmZvcm1CdXR0b25FbCA9IG51bGw7XG4gICAgdGhpcy5mb3JtRWwgPSBudWxsO1xuICAgIHRoaXMuaW5oZXJpdGVkQXR0cmlidXRlcyA9IHt9O1xuICAgIC8qKlxuICAgICAqIElmIGB0cnVlYCwgdGhlIGJ1dHRvbiBvbmx5IGhhcyBhbiBpY29uLlxuICAgICAqL1xuICAgIHRoaXMuaXNDaXJjbGUgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBUaGUgdHlwZSBvZiBidXR0b24uXG4gICAgICovXG4gICAgdGhpcy5idXR0b25UeXBlID0gJ2J1dHRvbic7XG4gICAgLyoqXG4gICAgICogSWYgYHRydWVgLCB0aGUgdXNlciBjYW5ub3QgaW50ZXJhY3Qgd2l0aCB0aGUgYnV0dG9uLlxuICAgICAqL1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBXaGVuIHVzaW5nIGEgcm91dGVyLCBpdCBzcGVjaWZpZXMgdGhlIHRyYW5zaXRpb24gZGlyZWN0aW9uIHdoZW4gbmF2aWdhdGluZyB0b1xuICAgICAqIGFub3RoZXIgcGFnZSB1c2luZyBgaHJlZmAuXG4gICAgICovXG4gICAgdGhpcy5yb3V0ZXJEaXJlY3Rpb24gPSAnZm9yd2FyZCc7XG4gICAgLyoqXG4gICAgICogSWYgYHRydWVgLCBhY3RpdmF0ZXMgYSBidXR0b24gd2l0aCBhIGhlYXZpZXIgZm9udCB3ZWlnaHQuXG4gICAgICovXG4gICAgdGhpcy5zdHJvbmcgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBUaGUgdHlwZSBvZiB0aGUgYnV0dG9uLlxuICAgICAqL1xuICAgIHRoaXMudHlwZSA9ICdidXR0b24nO1xuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSBldiA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGVsXG4gICAgICB9ID0gdGhpcztcbiAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdidXR0b24nKSB7XG4gICAgICAgIG9wZW5VUkwodGhpcy5ocmVmLCBldiwgdGhpcy5yb3V0ZXJEaXJlY3Rpb24sIHRoaXMucm91dGVyQW5pbWF0aW9uKTtcbiAgICAgIH0gZWxzZSBpZiAoaGFzU2hhZG93RG9tKGVsKSkge1xuICAgICAgICB0aGlzLnN1Ym1pdEZvcm0oZXYpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5vbkZvY3VzID0gKCkgPT4ge1xuICAgICAgdGhpcy5pb25Gb2N1cy5lbWl0KCk7XG4gICAgfTtcbiAgICB0aGlzLm9uQmx1ciA9ICgpID0+IHtcbiAgICAgIHRoaXMuaW9uQmx1ci5lbWl0KCk7XG4gICAgfTtcbiAgICB0aGlzLnNsb3RDaGFuZ2VkID0gKCkgPT4ge1xuICAgICAgLyoqXG4gICAgICAgKiBFbnN1cmVzIHRoYXQgdGhlICdoYXMtaWNvbi1vbmx5JyBjbGFzcyBpcyBwcm9wZXJseSBhZGRlZFxuICAgICAgICogb3IgcmVtb3ZlZCBmcm9tIGBpb24tYnV0dG9uYCB3aGVuIG1hbmlwdWxhdGluZyB0aGVcbiAgICAgICAqIGBpY29uLW9ubHlgIHNsb3QuXG4gICAgICAgKlxuICAgICAgICogV2l0aG91dCB0aGlzLCB0aGUgJ2hhcy1pY29uLW9ubHknIGNsYXNzIGlzIG9ubHkgY2hlY2tlZFxuICAgICAgICogb3IgYWRkZWQgd2hlbiBgaW9uLWJ1dHRvbmAgY29tcG9uZW50IGZpcnN0IHJlbmRlcnMuXG4gICAgICAgKi9cbiAgICAgIHRoaXMuaXNDaXJjbGUgPSB0aGlzLmhhc0ljb25Pbmx5O1xuICAgIH07XG4gIH1cbiAgZGlzYWJsZWRDaGFuZ2VkKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGRpc2FibGVkXG4gICAgfSA9IHRoaXM7XG4gICAgaWYgKHRoaXMuZm9ybUJ1dHRvbkVsKSB7XG4gICAgICB0aGlzLmZvcm1CdXR0b25FbC5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogVGhpcyBjb21wb25lbnQgaXMgdXNlZCB3aXRoaW4gdGhlIGBpb24taW5wdXQtcGFzc3dvcmQtdG9nZ2xlYCBjb21wb25lbnRcbiAgICogdG8gdG9nZ2xlIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBwYXNzd29yZCBpbnB1dC5cbiAgICogVGhlc2UgYXR0cmlidXRlcyBuZWVkIHRvIHVwZGF0ZSBiYXNlZCBvbiB0aGUgc3RhdGUgb2YgdGhlIHBhc3N3b3JkIGlucHV0LlxuICAgKiBPdGhlcndpc2UsIHRoZSB2YWx1ZXMgd2lsbCBiZSBzdGFsZS5cbiAgICpcbiAgICogQHBhcmFtIG5ld1ZhbHVlXG4gICAqIEBwYXJhbSBfb2xkVmFsdWVcbiAgICogQHBhcmFtIHByb3BOYW1lXG4gICAqL1xuICBvbkFyaWFDaGFuZ2VkKG5ld1ZhbHVlLCBfb2xkVmFsdWUsIHByb3BOYW1lKSB7XG4gICAgdGhpcy5pbmhlcml0ZWRBdHRyaWJ1dGVzID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzLmluaGVyaXRlZEF0dHJpYnV0ZXMpLCB7XG4gICAgICBbcHJvcE5hbWVdOiBuZXdWYWx1ZVxuICAgIH0pO1xuICAgIGZvcmNlVXBkYXRlKHRoaXMpO1xuICB9XG4gIC8qKlxuICAgKiBUaGlzIGlzIHJlc3BvbnNpYmxlIGZvciByZW5kZXJpbmcgYSBoaWRkZW4gbmF0aXZlXG4gICAqIGJ1dHRvbiBlbGVtZW50IGluc2lkZSB0aGUgYXNzb2NpYXRlZCBmb3JtLiBUaGlzIGFsbG93c1xuICAgKiB1c2VycyB0byBzdWJtaXQgYSBmb3JtIGJ5IHByZXNzaW5nIFwiRW50ZXJcIiB3aGVuIGEgdGV4dFxuICAgKiBmaWVsZCBpbnNpZGUgb2YgdGhlIGZvcm0gaXMgZm9jdXNlZC4gVGhlIG5hdGl2ZSBidXR0b25cbiAgICogcmVuZGVyZWQgaW5zaWRlIG9mIGBpb24tYnV0dG9uYCBpcyBpbiB0aGUgU2hhZG93IERPTVxuICAgKiBhbmQgdGhlcmVmb3JlIGRvZXMgbm90IHBhcnRpY2lwYXRlIGluIGZvcm0gc3VibWlzc2lvblxuICAgKiB3aGljaCBpcyB3aHkgdGhlIGZvbGxvd2luZyBjb2RlIGlzIG5lY2Vzc2FyeS5cbiAgICovXG4gIHJlbmRlckhpZGRlbkJ1dHRvbigpIHtcbiAgICBjb25zdCBmb3JtRWwgPSB0aGlzLmZvcm1FbCA9IHRoaXMuZmluZEZvcm0oKTtcbiAgICBpZiAoZm9ybUVsKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGZvcm1CdXR0b25FbFxuICAgICAgfSA9IHRoaXM7XG4gICAgICAvKipcbiAgICAgICAqIElmIHRoZSBmb3JtIGFscmVhZHkgaGFzIGEgcmVuZGVyZWQgZm9ybSBidXR0b25cbiAgICAgICAqIHRoZW4gZG8gbm90IGFwcGVuZCBhIG5ldyBvbmUgYWdhaW4uXG4gICAgICAgKi9cbiAgICAgIGlmIChmb3JtQnV0dG9uRWwgIT09IG51bGwgJiYgZm9ybUVsLmNvbnRhaW5zKGZvcm1CdXR0b25FbCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gQ3JlYXRlIGEgaGlkZGVuIG5hdGl2ZSBidXR0b24gaW5zaWRlIG9mIHRoZSBmb3JtXG4gICAgICBjb25zdCBuZXdGb3JtQnV0dG9uRWwgPSB0aGlzLmZvcm1CdXR0b25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgbmV3Rm9ybUJ1dHRvbkVsLnR5cGUgPSB0aGlzLnR5cGU7XG4gICAgICBuZXdGb3JtQnV0dG9uRWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIC8vIE9ubHkgc3VibWl0IGlmIHRoZSBidXR0b24gaXMgbm90IGRpc2FibGVkLlxuICAgICAgbmV3Rm9ybUJ1dHRvbkVsLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZDtcbiAgICAgIGZvcm1FbC5hcHBlbmRDaGlsZChuZXdGb3JtQnV0dG9uRWwpO1xuICAgIH1cbiAgfVxuICBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICB0aGlzLmluVG9vbGJhciA9ICEhdGhpcy5lbC5jbG9zZXN0KCdpb24tYnV0dG9ucycpO1xuICAgIHRoaXMuaW5MaXN0SGVhZGVyID0gISF0aGlzLmVsLmNsb3Nlc3QoJ2lvbi1saXN0LWhlYWRlcicpO1xuICAgIHRoaXMuaW5JdGVtID0gISF0aGlzLmVsLmNsb3Nlc3QoJ2lvbi1pdGVtJykgfHwgISF0aGlzLmVsLmNsb3Nlc3QoJ2lvbi1pdGVtLWRpdmlkZXInKTtcbiAgICB0aGlzLmluaGVyaXRlZEF0dHJpYnV0ZXMgPSBpbmhlcml0QXJpYUF0dHJpYnV0ZXModGhpcy5lbCk7XG4gIH1cbiAgZ2V0IGhhc0ljb25Pbmx5KCkge1xuICAgIHJldHVybiAhIXRoaXMuZWwucXVlcnlTZWxlY3RvcignW3Nsb3Q9XCJpY29uLW9ubHlcIl0nKTtcbiAgfVxuICBnZXQgcmlwcGxlVHlwZSgpIHtcbiAgICBjb25zdCBoYXNDbGVhckZpbGwgPSB0aGlzLmZpbGwgPT09IHVuZGVmaW5lZCB8fCB0aGlzLmZpbGwgPT09ICdjbGVhcic7XG4gICAgLy8gSWYgdGhlIGJ1dHRvbiBpcyBpbiBhIHRvb2xiYXIsIGhhcyBhIGNsZWFyIGZpbGwgKHdoaWNoIGlzIHRoZSBkZWZhdWx0KVxuICAgIC8vIGFuZCBvbmx5IGhhcyBhbiBpY29uIHdlIHVzZSB0aGUgdW5ib3VuZGVkIFwiY2lyY3VsYXJcIiByaXBwbGUgZWZmZWN0XG4gICAgaWYgKGhhc0NsZWFyRmlsbCAmJiB0aGlzLmhhc0ljb25Pbmx5ICYmIHRoaXMuaW5Ub29sYmFyKSB7XG4gICAgICByZXR1cm4gJ3VuYm91bmRlZCc7XG4gICAgfVxuICAgIHJldHVybiAnYm91bmRlZCc7XG4gIH1cbiAgLyoqXG4gICAqIEZpbmRzIHRoZSBmb3JtIGVsZW1lbnQgYmFzZWQgb24gdGhlIHByb3ZpZGVkIGBmb3JtYCBzZWxlY3RvclxuICAgKiBvciBlbGVtZW50IHJlZmVyZW5jZSBwcm92aWRlZC5cbiAgICovXG4gIGZpbmRGb3JtKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGZvcm1cbiAgICB9ID0gdGhpcztcbiAgICBpZiAoZm9ybSBpbnN0YW5jZW9mIEhUTUxGb3JtRWxlbWVudCkge1xuICAgICAgcmV0dXJuIGZvcm07XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZm9ybSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIENoZWNrIGlmIHRoZSBzdHJpbmcgcHJvdmlkZWQgaXMgYSBmb3JtIGlkLlxuICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmb3JtKTtcbiAgICAgIGlmIChlbCkge1xuICAgICAgICBpZiAoZWwgaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogVGhlIGRldmVsb3BlciBzcGVjaWZpZWQgYSBzdHJpbmcgZm9yIHRoZSBmb3JtIGF0dHJpYnV0ZSwgYnV0IHRoZVxuICAgICAgICAgICAqIGVsZW1lbnQgd2l0aCB0aGF0IGlkIGlzIG5vdCBhIGZvcm0gZWxlbWVudC5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBwcmludElvbldhcm5pbmcoYFtpb24tYnV0dG9uXSAtIEZvcm0gd2l0aCBzZWxlY3RvcjogXCIjJHtmb3JtfVwiIGNvdWxkIG5vdCBiZSBmb3VuZC4gVmVyaWZ5IHRoYXQgdGhlIGlkIGlzIGF0dGFjaGVkIHRvIGEgPGZvcm0+IGVsZW1lbnQuYCwgdGhpcy5lbCk7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgZGV2ZWxvcGVyIHNwZWNpZmllZCBhIHN0cmluZyBmb3IgdGhlIGZvcm0gYXR0cmlidXRlLCBidXQgdGhlXG4gICAgICAgICAqIGVsZW1lbnQgd2l0aCB0aGF0IGlkIGNvdWxkIG5vdCBiZSBmb3VuZCBpbiB0aGUgRE9NLlxuICAgICAgICAgKi9cbiAgICAgICAgcHJpbnRJb25XYXJuaW5nKGBbaW9uLWJ1dHRvbl0gLSBGb3JtIHdpdGggc2VsZWN0b3I6IFwiIyR7Zm9ybX1cIiBjb3VsZCBub3QgYmUgZm91bmQuIFZlcmlmeSB0aGF0IHRoZSBpZCBpcyBjb3JyZWN0IGFuZCB0aGUgZm9ybSBpcyByZW5kZXJlZCBpbiB0aGUgRE9NLmAsIHRoaXMuZWwpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGZvcm0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgLyoqXG4gICAgICAgKiBUaGUgZGV2ZWxvcGVyIHNwZWNpZmllZCBhIEhUTUxFbGVtZW50IGZvciB0aGUgZm9ybSBhdHRyaWJ1dGUsXG4gICAgICAgKiBidXQgdGhlIGVsZW1lbnQgaXMgbm90IGEgSFRNTEZvcm1FbGVtZW50LlxuICAgICAgICogVGhpcyB3aWxsIGFsc28gY2F0Y2ggaWYgdGhlIGRldmVsb3BlciB0cmllcyB0byBwYXNzIGluIG51bGxcbiAgICAgICAqIGFzIHRoZSBmb3JtIGF0dHJpYnV0ZS5cbiAgICAgICAqL1xuICAgICAgcHJpbnRJb25XYXJuaW5nKGBbaW9uLWJ1dHRvbl0gLSBUaGUgcHJvdmlkZWQgXCJmb3JtXCIgZWxlbWVudCBpcyBpbnZhbGlkLiBWZXJpZnkgdGhhdCB0aGUgZm9ybSBpcyBhIEhUTUxGb3JtRWxlbWVudCBhbmQgcmVuZGVyZWQgaW4gdGhlIERPTS5gLCB0aGlzLmVsKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJZiB0aGUgZm9ybSBlbGVtZW50IGlzIG5vdCBzZXQsIHRoZSBidXR0b24gbWF5IGJlIGluc2lkZVxuICAgICAqIG9mIGEgZm9ybSBlbGVtZW50LiBRdWVyeSB0aGUgY2xvc2VzdCBmb3JtIGVsZW1lbnQgdG8gdGhlIGJ1dHRvbi5cbiAgICAgKi9cbiAgICByZXR1cm4gdGhpcy5lbC5jbG9zZXN0KCdmb3JtJyk7XG4gIH1cbiAgc3VibWl0Rm9ybShldikge1xuICAgIC8vIHRoaXMgYnV0dG9uIHdhbnRzIHRvIHNwZWNpZmljYWxseSBzdWJtaXQgYSBmb3JtXG4gICAgLy8gY2xpbWIgdXAgdGhlIGRvbSB0byBzZWUgaWYgd2UncmUgaW4gYSA8Zm9ybT5cbiAgICAvLyBhbmQgaWYgc28sIHRoZW4gdXNlIEpTIHRvIHN1Ym1pdCBpdFxuICAgIGlmICh0aGlzLmZvcm1FbCAmJiB0aGlzLmZvcm1CdXR0b25FbCkge1xuICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuZm9ybUJ1dHRvbkVsLmNsaWNrKCk7XG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSQxKHRoaXMpO1xuICAgIGNvbnN0IHtcbiAgICAgIGJ1dHRvblR5cGUsXG4gICAgICB0eXBlLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICByZWwsXG4gICAgICB0YXJnZXQsXG4gICAgICBzaXplLFxuICAgICAgaHJlZixcbiAgICAgIGNvbG9yLFxuICAgICAgZXhwYW5kLFxuICAgICAgaGFzSWNvbk9ubHksXG4gICAgICBzaGFwZSxcbiAgICAgIHN0cm9uZyxcbiAgICAgIGluaGVyaXRlZEF0dHJpYnV0ZXNcbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCBmaW5hbFNpemUgPSBzaXplID09PSB1bmRlZmluZWQgJiYgdGhpcy5pbkl0ZW0gPyAnc21hbGwnIDogc2l6ZTtcbiAgICBjb25zdCBUYWdUeXBlID0gaHJlZiA9PT0gdW5kZWZpbmVkID8gJ2J1dHRvbicgOiAnYSc7XG4gICAgY29uc3QgYXR0cnMgPSBUYWdUeXBlID09PSAnYnV0dG9uJyA/IHtcbiAgICAgIHR5cGVcbiAgICB9IDoge1xuICAgICAgZG93bmxvYWQ6IHRoaXMuZG93bmxvYWQsXG4gICAgICBocmVmLFxuICAgICAgcmVsLFxuICAgICAgdGFyZ2V0XG4gICAgfTtcbiAgICBsZXQgZmlsbCA9IHRoaXMuZmlsbDtcbiAgICAvKipcbiAgICAgKiBXZSBjaGVjayBib3RoIHVuZGVmaW5lZCBhbmQgbnVsbCB0b1xuICAgICAqIHdvcmsgYXJvdW5kIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL3N0ZW5jaWwvaXNzdWVzLzM1ODYuXG4gICAgICovXG4gICAgaWYgKGZpbGwgPT0gbnVsbCkge1xuICAgICAgZmlsbCA9IHRoaXMuaW5Ub29sYmFyIHx8IHRoaXMuaW5MaXN0SGVhZGVyID8gJ2NsZWFyJyA6ICdzb2xpZCc7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFdlIGNhbGwgcmVuZGVySGlkZGVuQnV0dG9uIGluIHRoZSByZW5kZXIgZnVuY3Rpb24gdG8gYWNjb3VudFxuICAgICAqIGZvciBhbnkgcHJvcGVydGllcyBiZWluZyBzZXQgYXN5bmMuIEZvciBleGFtcGxlLCBjaGFuZ2luZyB0aGVcbiAgICAgKiBcInR5cGVcIiBwcm9wIGZyb20gXCJidXR0b25cIiB0byBcInN1Ym1pdFwiIGFmdGVyIHRoZSBjb21wb25lbnQgaGFzXG4gICAgICogbG9hZGVkIHdvdWxkIHdhcnJhbnQgdGhlIGhpZGRlbiBidXR0b24gYmVpbmcgYWRkZWQgdG8gdGhlXG4gICAgICogYXNzb2NpYXRlZCBmb3JtLlxuICAgICAqL1xuICAgIHtcbiAgICAgIHR5cGUgIT09ICdidXR0b24nICYmIHRoaXMucmVuZGVySGlkZGVuQnV0dG9uKCk7XG4gICAgfVxuICAgIHJldHVybiBoKEhvc3QsIHtcbiAgICAgIGtleTogJ2IxMDVhZDA5MjE1YWRiM2NhMjI5OGFjZGFkZjBkYzkxNTRiYmI5YjAnLFxuICAgICAgb25DbGljazogdGhpcy5oYW5kbGVDbGljayxcbiAgICAgIFwiYXJpYS1kaXNhYmxlZFwiOiBkaXNhYmxlZCA/ICd0cnVlJyA6IG51bGwsXG4gICAgICBjbGFzczogY3JlYXRlQ29sb3JDbGFzc2VzJDEoY29sb3IsIHtcbiAgICAgICAgW21vZGVdOiB0cnVlLFxuICAgICAgICBbYnV0dG9uVHlwZV06IHRydWUsXG4gICAgICAgIFtgJHtidXR0b25UeXBlfS0ke2V4cGFuZH1gXTogZXhwYW5kICE9PSB1bmRlZmluZWQsXG4gICAgICAgIFtgJHtidXR0b25UeXBlfS0ke2ZpbmFsU2l6ZX1gXTogZmluYWxTaXplICE9PSB1bmRlZmluZWQsXG4gICAgICAgIFtgJHtidXR0b25UeXBlfS0ke3NoYXBlfWBdOiBzaGFwZSAhPT0gdW5kZWZpbmVkLFxuICAgICAgICBbYCR7YnV0dG9uVHlwZX0tJHtmaWxsfWBdOiB0cnVlLFxuICAgICAgICBbYCR7YnV0dG9uVHlwZX0tc3Ryb25nYF06IHN0cm9uZyxcbiAgICAgICAgJ2luLXRvb2xiYXInOiBob3N0Q29udGV4dCgnaW9uLXRvb2xiYXInLCB0aGlzLmVsKSxcbiAgICAgICAgJ2luLXRvb2xiYXItY29sb3InOiBob3N0Q29udGV4dCgnaW9uLXRvb2xiYXJbY29sb3JdJywgdGhpcy5lbCksXG4gICAgICAgICdpbi1idXR0b25zJzogaG9zdENvbnRleHQoJ2lvbi1idXR0b25zJywgdGhpcy5lbCksXG4gICAgICAgICdidXR0b24taGFzLWljb24tb25seSc6IGhhc0ljb25Pbmx5LFxuICAgICAgICAnYnV0dG9uLWRpc2FibGVkJzogZGlzYWJsZWQsXG4gICAgICAgICdpb24tYWN0aXZhdGFibGUnOiB0cnVlLFxuICAgICAgICAnaW9uLWZvY3VzYWJsZSc6IHRydWVcbiAgICAgIH0pXG4gICAgfSwgaChUYWdUeXBlLCBPYmplY3QuYXNzaWduKHtcbiAgICAgIGtleTogJzY2YjRlNzExMmJjYjllNDFkNWE3MjNmYmJhZGIwYTMxMDRmOWVlMWQnXG4gICAgfSwgYXR0cnMsIHtcbiAgICAgIGNsYXNzOiBcImJ1dHRvbi1uYXRpdmVcIixcbiAgICAgIHBhcnQ6IFwibmF0aXZlXCIsXG4gICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICBvbkZvY3VzOiB0aGlzLm9uRm9jdXMsXG4gICAgICBvbkJsdXI6IHRoaXMub25CbHVyXG4gICAgfSwgaW5oZXJpdGVkQXR0cmlidXRlcyksIGgoXCJzcGFuXCIsIHtcbiAgICAgIGtleTogJzE0MzlmYzNkYTI4MDIyMTAyOGRjZjdjZThlYzlkYWIyNzNjNGQ0YmInLFxuICAgICAgY2xhc3M6IFwiYnV0dG9uLWlubmVyXCJcbiAgICB9LCBoKFwic2xvdFwiLCB7XG4gICAgICBrZXk6ICdkNTI2OWFlMWFmYzg3ZWM3Yjk5NzQ2MDMyZjU5Y2JhZTkzNzIwYTlmJyxcbiAgICAgIG5hbWU6IFwiaWNvbi1vbmx5XCIsXG4gICAgICBvblNsb3RjaGFuZ2U6IHRoaXMuc2xvdENoYW5nZWRcbiAgICB9KSwgaChcInNsb3RcIiwge1xuICAgICAga2V5OiAnNDYxYzgzZTk3YWEyNDZhYTg2ZDgzZTE0ZjFlMTVhMjg4ZDM1MDQxZScsXG4gICAgICBuYW1lOiBcInN0YXJ0XCJcbiAgICB9KSwgaChcInNsb3RcIiwge1xuICAgICAga2V5OiAnODA3MTcwZDQ3MTAxZjlmNmEzMzNkZDRmZjQ4OWM4OTI4NGYzMDZmZSdcbiAgICB9KSwgaChcInNsb3RcIiwge1xuICAgICAga2V5OiAnZTY3ZjExNmRkMDM0OWEwZDI3ODkzZTRmM2ZmMGNjZWYxZDQwMmY4MCcsXG4gICAgICBuYW1lOiBcImVuZFwiXG4gICAgfSkpLCBtb2RlID09PSAnbWQnICYmIGgoXCJpb24tcmlwcGxlLWVmZmVjdFwiLCB7XG4gICAgICBrZXk6ICcyNzNmMGJkOTY0NWEzNmMxYmZkMThhNWMyYWI0ZjgxZTIyYjdiOTg5JyxcbiAgICAgIHR5cGU6IHRoaXMucmlwcGxlVHlwZVxuICAgIH0pKSk7XG4gIH1cbiAgZ2V0IGVsKCkge1xuICAgIHJldHVybiBnZXRFbGVtZW50KHRoaXMpO1xuICB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGlzYWJsZWRcIjogW1wiZGlzYWJsZWRDaGFuZ2VkXCJdLFxuICAgICAgXCJhcmlhLWNoZWNrZWRcIjogW1wib25BcmlhQ2hhbmdlZFwiXSxcbiAgICAgIFwiYXJpYS1sYWJlbFwiOiBbXCJvbkFyaWFDaGFuZ2VkXCJdXG4gICAgfTtcbiAgfVxufTtcbkJ1dHRvbi5zdHlsZSA9IHtcbiAgaW9zOiBidXR0b25Jb3NDc3MsXG4gIG1kOiBidXR0b25NZENzc1xufTtcbmxldCBDQUNIRURfTUFQO1xuY29uc3QgZ2V0SWNvbk1hcCA9ICgpID0+IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIG5ldyBNYXAoKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIUNBQ0hFRF9NQVApIHtcbiAgICAgIGNvbnN0IHdpbiA9IHdpbmRvdztcbiAgICAgIHdpbi5Jb25pY29ucyA9IHdpbi5Jb25pY29ucyB8fCB7fTtcbiAgICAgIENBQ0hFRF9NQVAgPSB3aW4uSW9uaWNvbnMubWFwID0gd2luLklvbmljb25zLm1hcCB8fCBuZXcgTWFwKCk7XG4gICAgfVxuICAgIHJldHVybiBDQUNIRURfTUFQO1xuICB9XG59O1xuY29uc3QgZ2V0VXJsID0gaSA9PiB7XG4gIGxldCB1cmwgPSBnZXRTcmMoaS5zcmMpO1xuICBpZiAodXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBnZXROYW1lKGkubmFtZSwgaS5pY29uLCBpLm1vZGUsIGkuaW9zLCBpLm1kKTtcbiAgaWYgKHVybCkge1xuICAgIHJldHVybiBnZXROYW1lZFVybCh1cmwsIGkpO1xuICB9XG4gIGlmIChpLmljb24pIHtcbiAgICB1cmwgPSBnZXRTcmMoaS5pY29uKTtcbiAgICBpZiAodXJsKSB7XG4gICAgICByZXR1cm4gdXJsO1xuICAgIH1cbiAgICB1cmwgPSBnZXRTcmMoaS5pY29uW2kubW9kZV0pO1xuICAgIGlmICh1cmwpIHtcbiAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufTtcbmNvbnN0IGdldE5hbWVkVXJsID0gKGljb25OYW1lLCBpY29uRWwpID0+IHtcbiAgY29uc3QgdXJsID0gZ2V0SWNvbk1hcCgpLmdldChpY29uTmFtZSk7XG4gIGlmICh1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHRyeSB7XG4gICAgcmV0dXJuIGdldEFzc2V0UGF0aChgc3ZnLyR7aWNvbk5hbWV9LnN2Z2ApO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coJ2UnLCBlKTtcbiAgICAvKipcbiAgICAgKiBJbiB0aGUgY3VzdG9tIGVsZW1lbnRzIGJ1aWxkIHZlcnNpb24gb2YgaW9uaWNvbnMsIHJlZmVyZW5jaW5nIGFuIGljb25cbiAgICAgKiBieSBuYW1lIHdpbGwgdGhyb3cgYW4gaW52YWxpZCBVUkwgZXJyb3IgYmVjYXVzZSB0aGUgYXNzZXQgcGF0aCBpcyBub3QgZGVmaW5lZC5cbiAgICAgKiBUaGlzIGNhdGNoZXMgdGhhdCBlcnJvciBhbmQgbG9ncyBzb21ldGhpbmcgdGhhdCBpcyBtb3JlIGRldmVsb3Blci1mcmllbmRseS5cbiAgICAgKiBXZSBhbHNvIGluY2x1ZGUgYSByZWZlcmVuY2UgdG8gdGhlIGlvbi1pY29uIGVsZW1lbnQgc28gZGV2ZWxvcGVycyBjYW5cbiAgICAgKiBmaWd1cmUgb3V0IHdoaWNoIGluc3RhbmNlIG9mIGlvbi1pY29uIG5lZWRzIHRvIGJlIHVwZGF0ZWQuXG4gICAgICovXG4gICAgY29uc29sZS53YXJuKGBbSW9uaWNvbnMgV2FybmluZ106IENvdWxkIG5vdCBsb2FkIGljb24gd2l0aCBuYW1lIFwiJHtpY29uTmFtZX1cIi4gRW5zdXJlIHRoYXQgdGhlIGljb24gaXMgcmVnaXN0ZXJlZCB1c2luZyBhZGRJY29ucyBvciB0aGF0IHRoZSBpY29uIFNWRyBkYXRhIGlzIHBhc3NlZCBkaXJlY3RseSB0byB0aGUgaWNvbiBjb21wb25lbnQuYCwgaWNvbkVsKTtcbiAgfVxufTtcbmNvbnN0IGdldE5hbWUgPSAoaWNvbk5hbWUsIGljb24sIG1vZGUsIGlvcywgbWQpID0+IHtcbiAgLy8gZGVmYXVsdCB0byBcIm1kXCIgaWYgc29tZWhvdyB0aGUgbW9kZSB3YXNuJ3Qgc2V0XG4gIG1vZGUgPSAobW9kZSAmJiB0b0xvd2VyKG1vZGUpKSA9PT0gJ2lvcycgPyAnaW9zJyA6ICdtZCc7XG4gIC8vIGlmIGFuIGljb24gd2FzIHBhc3NlZCBpbiB1c2luZyB0aGUgaW9zIG9yIG1kIGF0dHJpYnV0ZXNcbiAgLy8gc2V0IHRoZSBpY29uTmFtZSB0byB3aGF0ZXZlciB3YXMgcGFzc2VkIGluXG4gIGlmIChpb3MgJiYgbW9kZSA9PT0gJ2lvcycpIHtcbiAgICBpY29uTmFtZSA9IHRvTG93ZXIoaW9zKTtcbiAgfSBlbHNlIGlmIChtZCAmJiBtb2RlID09PSAnbWQnKSB7XG4gICAgaWNvbk5hbWUgPSB0b0xvd2VyKG1kKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWljb25OYW1lICYmIGljb24gJiYgIWlzU3JjKGljb24pKSB7XG4gICAgICBpY29uTmFtZSA9IGljb247XG4gICAgfVxuICAgIGlmIChpc1N0cihpY29uTmFtZSkpIHtcbiAgICAgIGljb25OYW1lID0gdG9Mb3dlcihpY29uTmFtZSk7XG4gICAgfVxuICB9XG4gIGlmICghaXNTdHIoaWNvbk5hbWUpIHx8IGljb25OYW1lLnRyaW0oKSA9PT0gJycpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICAvLyBvbmx5IGFsbG93IGFscGhhIGNoYXJhY3RlcnMgYW5kIGRhc2hcbiAgY29uc3QgaW52YWxpZENoYXJzID0gaWNvbk5hbWUucmVwbGFjZSgvW2Etel18LXxcXGQvZ2ksICcnKTtcbiAgaWYgKGludmFsaWRDaGFycyAhPT0gJycpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gaWNvbk5hbWU7XG59O1xuY29uc3QgZ2V0U3JjID0gc3JjID0+IHtcbiAgaWYgKGlzU3RyKHNyYykpIHtcbiAgICBzcmMgPSBzcmMudHJpbSgpO1xuICAgIGlmIChpc1NyYyhzcmMpKSB7XG4gICAgICByZXR1cm4gc3JjO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG5jb25zdCBpc1NyYyA9IHN0ciA9PiBzdHIubGVuZ3RoID4gMCAmJiAvKFxcL3xcXC4pLy50ZXN0KHN0cik7XG5jb25zdCBpc1N0ciA9IHZhbCA9PiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcbmNvbnN0IHRvTG93ZXIgPSB2YWwgPT4gdmFsLnRvTG93ZXJDYXNlKCk7XG4vKipcbiAqIEVsZW1lbnRzIGluc2lkZSBvZiB3ZWIgY29tcG9uZW50cyBzb21ldGltZXMgbmVlZCB0byBpbmhlcml0IGdsb2JhbCBhdHRyaWJ1dGVzXG4gKiBzZXQgb24gdGhlIGhvc3QuIEZvciBleGFtcGxlLCB0aGUgaW5uZXIgaW5wdXQgaW4gYGlvbi1pbnB1dGAgc2hvdWxkIGluaGVyaXRcbiAqIHRoZSBgdGl0bGVgIGF0dHJpYnV0ZSB0aGF0IGRldmVsb3BlcnMgc2V0IGRpcmVjdGx5IG9uIGBpb24taW5wdXRgLiBUaGlzXG4gKiBoZWxwZXIgZnVuY3Rpb24gc2hvdWxkIGJlIGNhbGxlZCBpbiBjb21wb25lbnRXaWxsTG9hZCBhbmQgYXNzaWduZWQgdG8gYSB2YXJpYWJsZVxuICogdGhhdCBpcyBsYXRlciB1c2VkIGluIHRoZSByZW5kZXIgZnVuY3Rpb24uXG4gKlxuICogVGhpcyBkb2VzIG5vdCBuZWVkIHRvIGJlIHJlYWN0aXZlIGFzIGNoYW5naW5nIGF0dHJpYnV0ZXMgb24gdGhlIGhvc3QgZWxlbWVudFxuICogZG9lcyBub3QgdHJpZ2dlciBhIHJlLXJlbmRlci5cbiAqL1xuY29uc3QgaW5oZXJpdEF0dHJpYnV0ZXMgPSAoZWwsIGF0dHJpYnV0ZXMgPSBbXSkgPT4ge1xuICBjb25zdCBhdHRyaWJ1dGVPYmplY3QgPSB7fTtcbiAgYXR0cmlidXRlcy5mb3JFYWNoKGF0dHIgPT4ge1xuICAgIGlmIChlbC5oYXNBdHRyaWJ1dGUoYXR0cikpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZWwuZ2V0QXR0cmlidXRlKGF0dHIpO1xuICAgICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIGF0dHJpYnV0ZU9iamVjdFthdHRyXSA9IGVsLmdldEF0dHJpYnV0ZShhdHRyKTtcbiAgICAgIH1cbiAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShhdHRyKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYXR0cmlidXRlT2JqZWN0O1xufTtcbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGRvY3VtZW50IG9yIGhvc3QgZWxlbWVudFxuICogaGFzIGEgYGRpcmAgc2V0IHRvIGBydGxgLiBUaGUgaG9zdCB2YWx1ZSB3aWxsIGFsd2F5c1xuICogdGFrZSBwcmlvcml0eSBvdmVyIHRoZSByb290IGRvY3VtZW50IHZhbHVlLlxuICovXG5jb25zdCBpc1JUTCA9IGhvc3RFbCA9PiB7XG4gIGlmIChob3N0RWwpIHtcbiAgICBpZiAoaG9zdEVsLmRpciAhPT0gJycpIHtcbiAgICAgIHJldHVybiBob3N0RWwuZGlyLnRvTG93ZXJDYXNlKCkgPT09ICdydGwnO1xuICAgIH1cbiAgfVxuICByZXR1cm4gKGRvY3VtZW50ID09PSBudWxsIHx8IGRvY3VtZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkb2N1bWVudC5kaXIudG9Mb3dlckNhc2UoKSkgPT09ICdydGwnO1xufTtcbmNvbnN0IHZhbGlkYXRlQ29udGVudCA9IHN2Z0NvbnRlbnQgPT4ge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmlubmVySFRNTCA9IHN2Z0NvbnRlbnQ7XG4gIC8vIHNldHVwIHRoaXMgd2F5IHRvIGVuc3VyZSBpdCB3b3JrcyBvbiBvdXIgYnVkZHkgSUVcbiAgZm9yIChsZXQgaSA9IGRpdi5jaGlsZE5vZGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgaWYgKGRpdi5jaGlsZE5vZGVzW2ldLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICdzdmcnKSB7XG4gICAgICBkaXYucmVtb3ZlQ2hpbGQoZGl2LmNoaWxkTm9kZXNbaV0pO1xuICAgIH1cbiAgfVxuICAvLyBtdXN0IG9ubHkgaGF2ZSAxIHJvb3QgZWxlbWVudFxuICBjb25zdCBzdmdFbG0gPSBkaXYuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gIGlmIChzdmdFbG0gJiYgc3ZnRWxtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdzdmcnKSB7XG4gICAgY29uc3Qgc3ZnQ2xhc3MgPSBzdmdFbG0uZ2V0QXR0cmlidXRlKCdjbGFzcycpIHx8ICcnO1xuICAgIHN2Z0VsbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgKHN2Z0NsYXNzICsgJyBzLWlvbi1pY29uJykudHJpbSgpKTtcbiAgICAvLyByb290IGVsZW1lbnQgbXVzdCBiZSBhbiBzdmdcbiAgICAvLyBsZXRzIGRvdWJsZSBjaGVjayB3ZSd2ZSBnb3QgdmFsaWQgZWxlbWVudHNcbiAgICAvLyBkbyBub3QgYWxsb3cgc2NyaXB0c1xuICAgIGlmIChpc1ZhbGlkKHN2Z0VsbSkpIHtcbiAgICAgIHJldHVybiBkaXYuaW5uZXJIVE1MO1xuICAgIH1cbiAgfVxuICByZXR1cm4gJyc7XG59O1xuY29uc3QgaXNWYWxpZCA9IGVsbSA9PiB7XG4gIGlmIChlbG0ubm9kZVR5cGUgPT09IDEpIHtcbiAgICBpZiAoZWxtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdzY3JpcHQnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxtLmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IG5hbWUgPSBlbG0uYXR0cmlidXRlc1tpXS5uYW1lO1xuICAgICAgaWYgKGlzU3RyKG5hbWUpICYmIG5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdvbicpID09PSAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbG0uY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCFpc1ZhbGlkKGVsbS5jaGlsZE5vZGVzW2ldKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbmNvbnN0IGlzU3ZnRGF0YVVybCA9IHVybCA9PiB1cmwuc3RhcnRzV2l0aCgnZGF0YTppbWFnZS9zdmcreG1sJyk7XG5jb25zdCBpc0VuY29kZWREYXRhVXJsID0gdXJsID0+IHVybC5pbmRleE9mKCc7dXRmOCwnKSAhPT0gLTE7XG5jb25zdCBpb25pY29uQ29udGVudCA9IG5ldyBNYXAoKTtcbmNvbnN0IHJlcXVlc3RzID0gbmV3IE1hcCgpO1xubGV0IHBhcnNlcjtcbi8qKlxuICogU2FmZWx5IGZhbGxiYWNrIHRvIGFuIGVtcHR5IHN2Z1xuICovXG5mdW5jdGlvbiBzYWZlRmFsbGJhY2sodXJsKSB7XG4gIGNvbnN0IHN2ZyA9ICcnO1xuICBpb25pY29uQ29udGVudC5zZXQodXJsLCBzdmcpO1xuICByZXR1cm4gc3ZnO1xufVxuY29uc3QgZ2V0U3ZnQ29udGVudCA9ICh1cmwsIHNhbml0aXplKSA9PiB7XG4gIC8qKlxuICAgKiBTZWUgaWYgd2UgYWxyZWFkeSBoYXZlIGEgcmVxdWVzdCBmb3IgdGhpcyB1cmxcbiAgICovXG4gIGNvbnN0IHJlcSA9IHJlcXVlc3RzLmdldCh1cmwpO1xuICBpZiAocmVxKSB7XG4gICAgcmV0dXJuIHJlcTtcbiAgfVxuICBpZiAodHlwZW9mIGZldGNoICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLyoqXG4gICAgICogSWYgdGhlIHVybCBpcyBhIGRhdGEgdXJsIG9mIGFuIHN2ZywgdGhlbiB0cnkgdG8gcGFyc2UgaXRcbiAgICAgKiB3aXRoIHRoZSBET01QYXJzZXIuIFRoaXMgd29ya3Mgd2l0aCBjb250ZW50IHNlY3VyaXR5IHBvbGljaWVzIGVuYWJsZWQuXG4gICAgICovXG4gICAgaWYgKGlzU3ZnRGF0YVVybCh1cmwpICYmIGlzRW5jb2RlZERhdGFVcmwodXJsKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShnZXRTdmdCeVVybCh1cmwpKTtcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoU3ZnKHVybCwgc2FuaXRpemUpO1xuICB9XG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2FmZUZhbGxiYWNrKHVybCkpO1xufTtcbmZ1bmN0aW9uIGdldFN2Z0J5VXJsKHVybCkge1xuICBpZiAoIXBhcnNlcikge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiB0aGUgRE9NIHBhcnNlci4gVGhpcyBjcmVhdGVzIGEgc2luZ2xlXG4gICAgICogcGFyc2VyIGluc3RhbmNlIGZvciB0aGUgZW50aXJlIGFwcCwgd2hpY2ggaXMgbW9yZSBlZmZpY2llbnQuXG4gICAgICovXG4gICAgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICB9XG4gIGNvbnN0IGRvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcodXJsLCAndGV4dC9odG1sJyk7XG4gIGNvbnN0IHN2ZyA9IGRvYy5xdWVyeVNlbGVjdG9yKCdzdmcnKTtcbiAgaWYgKHN2Zykge1xuICAgIGlvbmljb25Db250ZW50LnNldCh1cmwsIHN2Zy5vdXRlckhUTUwpO1xuICAgIHJldHVybiBzdmcub3V0ZXJIVE1MO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihgQ291bGQgbm90IHBhcnNlIHN2ZyBmcm9tICR7dXJsfWApO1xufVxuZnVuY3Rpb24gZmV0Y2hTdmcodXJsLCBzYW5pdGl6ZSkge1xuICAvKipcbiAgICogV2UgZG9uJ3QgYWxyZWFkeSBoYXZlIGEgcmVxdWVzdFxuICAgKi9cbiAgY29uc3QgcmVxID0gZmV0Y2godXJsKS50aGVuKHJzcCA9PiB7XG4gICAgLyoqXG4gICAgICogV2hlbiBmZXRjaGluZyBmcm9tIGEgZmlsZTovLyBVUkwsIHNvbWUgYnJvd3NlcnMgcmV0dXJuXG4gICAgICogYSAwIHN0YXR1cyBjb2RlIGV2ZW4gd2hlbiB0aGUgcmVxdWVzdCBzdWNjZWVkcyBzbyBkb24ndFxuICAgICAqIHJlbHkgb24gcnNwLm9rIGFzIHRoZSBvbmx5IHNpZ25hbCBvZiBzdWNjZXNzLlxuICAgICAqL1xuICAgIHJldHVybiByc3AudGV4dCgpLnRoZW4oc3ZnQ29udGVudCA9PiB7XG4gICAgICBpZiAoc3ZnQ29udGVudCAmJiBzYW5pdGl6ZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgc3ZnQ29udGVudCA9IHZhbGlkYXRlQ29udGVudChzdmdDb250ZW50KTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHN2ZyA9IHN2Z0NvbnRlbnQgfHwgJyc7XG4gICAgICBpb25pY29uQ29udGVudC5zZXQodXJsLCBzdmcpO1xuICAgICAgcmV0dXJuIHN2ZztcbiAgICB9KS5jYXRjaCgoKSA9PiBzYWZlRmFsbGJhY2sodXJsKSk7XG4gIH0pLmNhdGNoKCgpID0+IHNhZmVGYWxsYmFjayh1cmwpKTtcbiAgLyoqXG4gICAqIENhY2hlIGZvciB0aGUgc2FtZSByZXF1ZXN0c1xuICAgKi9cbiAgcmVxdWVzdHMuc2V0KHVybCwgcmVxKTtcbiAgcmV0dXJuIHJlcTtcbn1cbmNvbnN0IGljb25Dc3MgPSBcIjpob3N0e2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjFlbTtoZWlnaHQ6MWVtO2NvbnRhaW46c3RyaWN0O2ZpbGw6Y3VycmVudENvbG9yOy13ZWJraXQtYm94LXNpemluZzpjb250ZW50LWJveCAhaW1wb3J0YW50O2JveC1zaXppbmc6Y29udGVudC1ib3ggIWltcG9ydGFudH06aG9zdCAuaW9uaWNvbntzdHJva2U6Y3VycmVudENvbG9yfS5pb25pY29uLWZpbGwtbm9uZXtmaWxsOm5vbmV9Lmlvbmljb24tc3Ryb2tlLXdpZHRoe3N0cm9rZS13aWR0aDp2YXIoLS1pb25pY29uLXN0cm9rZS13aWR0aCwgMzJweCl9Lmljb24taW5uZXIsLmlvbmljb24sc3Zne2Rpc3BsYXk6YmxvY2s7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJX1Ac3VwcG9ydHMgKGJhY2tncm91bmQ6IC13ZWJraXQtbmFtZWQtaW1hZ2UoaSkpezpob3N0KC5pY29uLXJ0bCkgLmljb24taW5uZXJ7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGVYKC0xKTt0cmFuc2Zvcm06c2NhbGVYKC0xKX19QHN1cHBvcnRzIG5vdCBzZWxlY3Rvcig6ZGlyKHJ0bCkpIGFuZCBzZWxlY3Rvcig6aG9zdC1jb250ZXh0KFtkaXI9J3J0bCddKSl7Omhvc3QoLmljb24tcnRsKSAuaWNvbi1pbm5lcnstd2Via2l0LXRyYW5zZm9ybTpzY2FsZVgoLTEpO3RyYW5zZm9ybTpzY2FsZVgoLTEpfX06aG9zdCguZmxpcC1ydGwpOmhvc3QtY29udGV4dChbZGlyPSdydGwnXSkgLmljb24taW5uZXJ7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGVYKC0xKTt0cmFuc2Zvcm06c2NhbGVYKC0xKX1Ac3VwcG9ydHMgc2VsZWN0b3IoOmRpcihydGwpKXs6aG9zdCguZmxpcC1ydGw6ZGlyKHJ0bCkpIC5pY29uLWlubmVyey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlWCgtMSk7dHJhbnNmb3JtOnNjYWxlWCgtMSl9Omhvc3QoLmZsaXAtcnRsOmRpcihsdHIpKSAuaWNvbi1pbm5lcnstd2Via2l0LXRyYW5zZm9ybTpzY2FsZVgoMSk7dHJhbnNmb3JtOnNjYWxlWCgxKX19Omhvc3QoLmljb24tc21hbGwpe2ZvbnQtc2l6ZToxLjEyNXJlbSAhaW1wb3J0YW50fTpob3N0KC5pY29uLWxhcmdlKXtmb250LXNpemU6MnJlbSAhaW1wb3J0YW50fTpob3N0KC5pb24tY29sb3Ipe2NvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKSAhaW1wb3J0YW50fTpob3N0KC5pb24tY29sb3ItcHJpbWFyeSl7LS1pb24tY29sb3ItYmFzZTp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZil9Omhvc3QoLmlvbi1jb2xvci1zZWNvbmRhcnkpey0taW9uLWNvbG9yLWJhc2U6dmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSwgIzBjZDFlOCl9Omhvc3QoLmlvbi1jb2xvci10ZXJ0aWFyeSl7LS1pb24tY29sb3ItYmFzZTp2YXIoLS1pb24tY29sb3ItdGVydGlhcnksICNmNGE5NDIpfTpob3N0KC5pb24tY29sb3Itc3VjY2Vzcyl7LS1pb24tY29sb3ItYmFzZTp2YXIoLS1pb24tY29sb3Itc3VjY2VzcywgIzEwZGM2MCl9Omhvc3QoLmlvbi1jb2xvci13YXJuaW5nKXstLWlvbi1jb2xvci1iYXNlOnZhcigtLWlvbi1jb2xvci13YXJuaW5nLCAjZmZjZTAwKX06aG9zdCguaW9uLWNvbG9yLWRhbmdlcil7LS1pb24tY29sb3ItYmFzZTp2YXIoLS1pb24tY29sb3ItZGFuZ2VyLCAjZjE0MTQxKX06aG9zdCguaW9uLWNvbG9yLWxpZ2h0KXstLWlvbi1jb2xvci1iYXNlOnZhcigtLWlvbi1jb2xvci1saWdodCwgI2Y0ZjVmOCl9Omhvc3QoLmlvbi1jb2xvci1tZWRpdW0pey0taW9uLWNvbG9yLWJhc2U6dmFyKC0taW9uLWNvbG9yLW1lZGl1bSwgIzk4OWFhMil9Omhvc3QoLmlvbi1jb2xvci1kYXJrKXstLWlvbi1jb2xvci1iYXNlOnZhcigtLWlvbi1jb2xvci1kYXJrLCAjMjIyNDI4KX1cIjtcbmNvbnN0IEljb24gPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuaWNvbk5hbWUgPSBudWxsO1xuICAgIHRoaXMuaW5oZXJpdGVkQXR0cmlidXRlcyA9IHt9O1xuICAgIHRoaXMuZGlkTG9hZEljb24gPSBmYWxzZTtcbiAgICB0aGlzLmlzVmlzaWJsZSA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIFRoZSBtb2RlIGRldGVybWluZXMgd2hpY2ggcGxhdGZvcm0gc3R5bGVzIHRvIHVzZS5cbiAgICAgKi9cbiAgICB0aGlzLm1vZGUgPSBnZXRJb25Nb2RlKCk7XG4gICAgLyoqXG4gICAgICogSWYgZW5hYmxlZCwgaW9uLWljb24gd2lsbCBiZSBsb2FkZWQgbGF6aWx5IHdoZW4gaXQncyB2aXNpYmxlIGluIHRoZSB2aWV3cG9ydC5cbiAgICAgKiBEZWZhdWx0LCBgZmFsc2VgLlxuICAgICAqL1xuICAgIHRoaXMubGF6eSA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIFdoZW4gc2V0IHRvIGBmYWxzZWAsIFNWRyBjb250ZW50IHRoYXQgaXMgSFRUUCBmZXRjaGVkIHdpbGwgbm90IGJlIGNoZWNrZWRcbiAgICAgKiBpZiB0aGUgcmVzcG9uc2UgU1ZHIGNvbnRlbnQgaGFzIGFueSBgPHNjcmlwdD5gIGVsZW1lbnRzLCBvciBhbnkgYXR0cmlidXRlc1xuICAgICAqIHRoYXQgc3RhcnQgd2l0aCBgb25gLCBzdWNoIGFzIGBvbmNsaWNrYC5cbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICovXG4gICAgdGhpcy5zYW5pdGl6ZSA9IHRydWU7XG4gIH1cbiAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgdGhpcy5pbmhlcml0ZWRBdHRyaWJ1dGVzID0gaW5oZXJpdEF0dHJpYnV0ZXModGhpcy5lbCwgWydhcmlhLWxhYmVsJ10pO1xuICB9XG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIC8qKlxuICAgICAqIHB1cnBvc2VseSBkbyBub3QgcmV0dXJuIHRoZSBwcm9taXNlIGhlcmUgYmVjYXVzZSBsb2FkaW5nXG4gICAgICogdGhlIHN2ZyBmaWxlIHNob3VsZCBub3QgaG9sZCB1cCBsb2FkaW5nIHRoZSBhcHBcbiAgICAgKiBvbmx5IGxvYWQgdGhlIHN2ZyBpZiBpdCdzIHZpc2libGVcbiAgICAgKi9cbiAgICB0aGlzLndhaXRVbnRpbFZpc2libGUodGhpcy5lbCwgJzUwcHgnLCAoKSA9PiB7XG4gICAgICB0aGlzLmlzVmlzaWJsZSA9IHRydWU7XG4gICAgICB0aGlzLmxvYWRJY29uKCk7XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIExvYWRzIHRoZSBpY29uIGFmdGVyIHRoZSBjb21wb25lbnQgaGFzIGZpbmlzaGVkIHJlbmRlcmluZy5cbiAgICovXG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgLyoqXG4gICAgICogQWRkcmVzc2VzIGFuIEFuZ3VsYXIgaXNzdWUgd2hlcmUgcHJvcGVydHkgdmFsdWVzIGFyZSBhc3NpZ25lZCBhZnRlciB0aGUgJ2Nvbm5lY3RlZENhbGxiYWNrJyBidXQgcHJpb3IgdG8gdGhlIHJlZ2lzdHJhdGlvbiBvZiB3YXRjaGVycy5cbiAgICAgKiBUaGlzIGVuaGFuY2VtZW50IGVuc3VyZXMgdGhlIGxvYWRpbmcgb2YgYW4gaWNvbiB3aGVuIHRoZSBjb21wb25lbnQgaGFzIGZpbmlzaGVkIHJlbmRlcmluZyBhbmQgdGhlIGljb24gaGFzIHlldCB0byBhcHBseSB0aGUgU1ZHIGRhdGEuXG4gICAgICogVGhpcyBtb2RpZmljYXRpb24gcGVydGFpbnMgdG8gdGhlIHVzYWdlIG9mIEFuZ3VsYXIncyBiaW5kaW5nIHN5bnRheDpcbiAgICAgKiBgPGlvbi1pY29uIFtuYW1lXT1cIm15SWNvbk5hbWVcIj48L2lvbi1pY29uPmBcbiAgICAgKi9cbiAgICBpZiAoIXRoaXMuZGlkTG9hZEljb24pIHtcbiAgICAgIHRoaXMubG9hZEljb24oKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIERpc2Nvbm5lY3QgdGhlIEludGVyc2VjdGlvbk9ic2VydmVyLlxuICAgKi9cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHRoaXMuaW8pIHtcbiAgICAgIHRoaXMuaW8uZGlzY29ubmVjdCgpO1xuICAgICAgdGhpcy5pbyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFdhaXQgdW50aWwgdGhlIGljb24gaXMgdmlzaWJsZSBpbiB0aGUgdmlld3BvcnQuXG4gICAqIEBwYXJhbSBlbCAtIFRoZSBlbGVtZW50IHRvIG9ic2VydmUuXG4gICAqIEBwYXJhbSByb290TWFyZ2luIC0gVGhlIHJvb3QgbWFyZ2luIG9mIHRoZSBvYnNlcnZlci5cbiAgICogQHBhcmFtIGNiIC0gVGhlIGNhbGxiYWNrIHRvIGNhbGwgd2hlbiB0aGUgZWxlbWVudCBpcyB2aXNpYmxlLlxuICAgKi9cbiAgd2FpdFVudGlsVmlzaWJsZShlbCwgcm9vdE1hcmdpbiwgY2IpIHtcbiAgICAvKipcbiAgICAgKiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpcyBhIGJyb3dzZXIgQVBJIHRoYXQgYWxsb3dzIHlvdSB0byBvYnNlcnZlXG4gICAgICogdGhlIHZpc2liaWxpdHkgb2YgYW4gZWxlbWVudCByZWxhdGl2ZSB0byBhIHJvb3QgZWxlbWVudC4gSXQgaXNcbiAgICAgKiBzdXBwb3J0ZWQgaW4gYWxsIG1vZGVybiBicm93c2VycywgZXhjZXB0IElFIGFuZCB3aGVuIHNlcnZlci1zaWRlXG4gICAgICogcmVuZGVyaW5nLlxuICAgICAqL1xuICAgIGNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyU3VwcG9ydCA9IEJvb2xlYW4odGhpcy5sYXp5ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlcik7XG4gICAgLyoqXG4gICAgICogYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgICAgKiBzbyBqdXN0IGZhbGxiYWNrIHRvIGFsd2F5cyBzaG93IGl0XG4gICAgICovXG4gICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlclN1cHBvcnQpIHtcbiAgICAgIHJldHVybiBjYigpO1xuICAgIH1cbiAgICBjb25zdCBpbyA9IHRoaXMuaW8gPSBuZXcgd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyKGRhdGEgPT4ge1xuICAgICAgaWYgKGRhdGFbMF0uaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgaW8uZGlzY29ubmVjdCgpO1xuICAgICAgICB0aGlzLmlvID0gdW5kZWZpbmVkO1xuICAgICAgICBjYigpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIHJvb3RNYXJnaW5cbiAgICB9KTtcbiAgICBpby5vYnNlcnZlKGVsKTtcbiAgfVxuICAvKipcbiAgICogV2F0Y2ggZm9yIGNoYW5nZXMgdG8gdGhlIGljb24gbmFtZSwgc3JjLCBpY29uLCBpb3MsIG9yIG1kIHByb3BlcnRpZXMuXG4gICAqIFdoZW4gYSBjaGFuZ2UgaXMgZGV0ZWN0ZWQsIHRoZSBpY29uIHdpbGwgYmUgbG9hZGVkLlxuICAgKi9cbiAgbG9hZEljb24oKSB7XG4gICAgaWYgKHRoaXMuaXNWaXNpYmxlKSB7XG4gICAgICBjb25zdCB1cmwgPSBnZXRVcmwodGhpcyk7XG4gICAgICBpZiAodXJsKSB7XG4gICAgICAgIGlmIChpb25pY29uQ29udGVudC5oYXModXJsKSkge1xuICAgICAgICAgIC8vIHN5bmMgaWYgaXQncyBhbHJlYWR5IGxvYWRlZFxuICAgICAgICAgIHRoaXMuc3ZnQ29udGVudCA9IGlvbmljb25Db250ZW50LmdldCh1cmwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGFzeW5jIGlmIGl0IGhhc24ndCBiZWVuIGxvYWRlZFxuICAgICAgICAgIGdldFN2Z0NvbnRlbnQodXJsLCB0aGlzLnNhbml0aXplKS50aGVuKCgpID0+IHRoaXMuc3ZnQ29udGVudCA9IGlvbmljb25Db250ZW50LmdldCh1cmwpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRpZExvYWRJY29uID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5pY29uTmFtZSA9IGdldE5hbWUodGhpcy5uYW1lLCB0aGlzLmljb24sIHRoaXMubW9kZSwgdGhpcy5pb3MsIHRoaXMubWQpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBmbGlwUnRsLFxuICAgICAgaWNvbk5hbWUsXG4gICAgICBpbmhlcml0ZWRBdHRyaWJ1dGVzLFxuICAgICAgZWxcbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCBtb2RlID0gdGhpcy5tb2RlIHx8ICdtZCc7XG4gICAgLyoqXG4gICAgICogd2UgaGF2ZSBkZXNpZ25hdGVkIHRoYXQgYXJyb3dzICYgY2hldnJvbnMgc2hvdWxkIGF1dG9tYXRpY2FsbHkgZmxpcCAodW5sZXNzIGZsaXAtcnRsXG4gICAgICogaXMgc2V0IHRvIGZhbHNlKSBiZWNhdXNlIFwiYmFja1wiIGlzIGxlZnQgaW4gbHRyIGFuZCByaWdodCBpbiBydGwsIGFuZCBcImZvcndhcmRcIiBpcyB0aGUgb3Bwb3NpdGVcbiAgICAgKi9cbiAgICBjb25zdCBzaG91bGRBdXRvRmxpcCA9IGljb25OYW1lID8gKGljb25OYW1lLmluY2x1ZGVzKCdhcnJvdycpIHx8IGljb25OYW1lLmluY2x1ZGVzKCdjaGV2cm9uJykpICYmIGZsaXBSdGwgIT09IGZhbHNlIDogZmFsc2U7XG4gICAgLyoqXG4gICAgICogaWYgc2hvdWxkQmVGbGlwcGFibGUgaXMgdHJ1ZSwgdGhlIGljb24gc2hvdWxkIGNoYW5nZSBkaXJlY3Rpb24gd2hlbiBgZGlyYCBjaGFuZ2VzXG4gICAgICovXG4gICAgY29uc3Qgc2hvdWxkQmVGbGlwcGFibGUgPSBmbGlwUnRsIHx8IHNob3VsZEF1dG9GbGlwO1xuICAgIHJldHVybiBoKEhvc3QsIE9iamVjdC5hc3NpZ24oe1xuICAgICAga2V5OiAnMDU3OGM4OTk3ODFjYTE0NWRkODIwNWFjZDk2NzBhZjM5YjU3Y2YyZScsXG4gICAgICByb2xlOiBcImltZ1wiLFxuICAgICAgY2xhc3M6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIFttb2RlXTogdHJ1ZVxuICAgICAgfSwgY3JlYXRlQ29sb3JDbGFzc2VzKHRoaXMuY29sb3IpKSwge1xuICAgICAgICBbYGljb24tJHt0aGlzLnNpemV9YF06ICEhdGhpcy5zaXplLFxuICAgICAgICAnZmxpcC1ydGwnOiBzaG91bGRCZUZsaXBwYWJsZSxcbiAgICAgICAgJ2ljb24tcnRsJzogc2hvdWxkQmVGbGlwcGFibGUgJiYgaXNSVEwoZWwpXG4gICAgICB9KVxuICAgIH0sIGluaGVyaXRlZEF0dHJpYnV0ZXMpLCB0aGlzLnN2Z0NvbnRlbnQgPyBoKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBcImljb24taW5uZXJcIixcbiAgICAgIGlubmVySFRNTDogdGhpcy5zdmdDb250ZW50XG4gICAgfSkgOiBoKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBcImljb24taW5uZXJcIlxuICAgIH0pKTtcbiAgfVxuICBzdGF0aWMgZ2V0IGFzc2V0c0RpcnMoKSB7XG4gICAgcmV0dXJuIFtcInN2Z1wiXTtcbiAgfVxuICBnZXQgZWwoKSB7XG4gICAgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7XG4gIH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJuYW1lXCI6IFtcImxvYWRJY29uXCJdLFxuICAgICAgXCJzcmNcIjogW1wibG9hZEljb25cIl0sXG4gICAgICBcImljb25cIjogW1wibG9hZEljb25cIl0sXG4gICAgICBcImlvc1wiOiBbXCJsb2FkSWNvblwiXSxcbiAgICAgIFwibWRcIjogW1wibG9hZEljb25cIl1cbiAgICB9O1xuICB9XG59O1xuLyoqXG4gKiBHZXQgdGhlIG1vZGUgb2YgdGhlIGRvY3VtZW50LlxuICogQHJldHVybnMgVGhlIG1vZGUgb2YgdGhlIGRvY3VtZW50LlxuICovXG5jb25zdCBnZXRJb25Nb2RlID0gKCkgPT4gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdtb2RlJykgfHwgJ21kJztcbi8qKlxuICogQ3JlYXRlIGNvbG9yIGNsYXNzZXMgZm9yIHRoZSBpY29uLlxuICogQHBhcmFtIGNvbG9yIC0gVGhlIGNvbG9yIG9mIHRoZSBpY29uLlxuICogQHJldHVybnMgVGhlIGNvbG9yIGNsYXNzZXMgZm9yIHRoZSBpY29uLlxuICovXG5jb25zdCBjcmVhdGVDb2xvckNsYXNzZXMgPSBjb2xvciA9PiB7XG4gIHJldHVybiBjb2xvciA/IHtcbiAgICAnaW9uLWNvbG9yJzogdHJ1ZSxcbiAgICBbYGlvbi1jb2xvci0ke2NvbG9yfWBdOiB0cnVlXG4gIH0gOiBudWxsO1xufTtcbkljb24uc3R5bGUgPSBpY29uQ3NzO1xuZXhwb3J0IHsgQnV0dG9uIGFzIGlvbl9idXR0b24sIEljb24gYXMgaW9uX2ljb24gfTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQSxJQUFNLGVBQWU7QUFDckIsSUFBTSxjQUFjO0FBQ3BCLElBQU0sU0FBUyxNQUFNO0FBQUEsRUFDbkIsWUFBWSxTQUFTO0FBQ25CLHFCQUFpQixNQUFNLE9BQU87QUFDOUIsU0FBSyxXQUFXLFlBQVksTUFBTSxZQUFZLENBQUM7QUFDL0MsU0FBSyxVQUFVLFlBQVksTUFBTSxXQUFXLENBQUM7QUFDN0MsU0FBSyxTQUFTO0FBQ2QsU0FBSyxlQUFlO0FBQ3BCLFNBQUssWUFBWTtBQUNqQixTQUFLLGVBQWU7QUFDcEIsU0FBSyxTQUFTO0FBQ2QsU0FBSyxzQkFBc0IsQ0FBQztBQUk1QixTQUFLLFdBQVc7QUFJaEIsU0FBSyxhQUFhO0FBSWxCLFNBQUssV0FBVztBQUtoQixTQUFLLGtCQUFrQjtBQUl2QixTQUFLLFNBQVM7QUFJZCxTQUFLLE9BQU87QUFDWixTQUFLLGNBQWMsUUFBTTtBQUN2QixZQUFNO0FBQUEsUUFDSjtBQUFBLE1BQ0YsSUFBSTtBQUNKLFVBQUksS0FBSyxTQUFTLFVBQVU7QUFDMUIsZ0JBQVEsS0FBSyxNQUFNLElBQUksS0FBSyxpQkFBaUIsS0FBSyxlQUFlO0FBQUEsTUFD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QUFBLE1BQ1AsV0FBVyxLQUFLO0FBQUEsSUFDbEIsQ0FBQyxJQUFJLEVBQUUsT0FBTztBQUFBLE1BQ1osT0FBTztBQUFBLElBQ1QsQ0FBQyxDQUFDO0FBQUEsRUFDSjtBQUFBLEVBQ0EsV0FBVyxhQUFhO0FBQ3RCLFdBQU8sQ0FBQyxLQUFLO0FBQUEsRUFDZjtBQUFBLEVBQ0EsSUFBSSxLQUFLO0FBQ1AsV0FBTyxXQUFXLElBQUk7QUFBQSxFQUN4QjtBQUFBLEVBQ0EsV0FBVyxXQUFXO0FBQ3BCLFdBQU87QUFBQSxNQUNMLFFBQVEsQ0FBQyxVQUFVO0FBQUEsTUFDbkIsT0FBTyxDQUFDLFVBQVU7QUFBQSxNQUNsQixRQUFRLENBQUMsVUFBVTtBQUFBLE1BQ25CLE9BQU8sQ0FBQyxVQUFVO0FBQUEsTUFDbEIsTUFBTSxDQUFDLFVBQVU7QUFBQSxJQUNuQjtBQUFBLEVBQ0Y7QUFDRjtBQUtBLElBQU1ELGNBQWEsTUFBTSxPQUFPLGFBQWEsZUFBZSxTQUFTLGdCQUFnQixhQUFhLE1BQU0sS0FBSztBQU03RyxJQUFNQyxzQkFBcUIsV0FBUztBQUNsQyxTQUFPLFFBQVE7QUFBQSxJQUNiLGFBQWE7QUFBQSxJQUNiLENBQUMsYUFBYSxLQUFLLEVBQUUsR0FBRztBQUFBLEVBQzFCLElBQUk7QUFDTjtBQUNBLEtBQUssUUFBUTsiLCJuYW1lcyI6WyJnZXRJb25Nb2RlIiwiY3JlYXRlQ29sb3JDbGFzc2VzIl0sInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswXX0=
