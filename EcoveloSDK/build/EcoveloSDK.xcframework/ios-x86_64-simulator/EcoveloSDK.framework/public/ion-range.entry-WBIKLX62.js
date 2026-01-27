import {
  disableContentScrollY,
  findClosestIonContent,
  resetContentScrollY
} from "./chunk-WRI2MF6U.js";
import {
  isRTL
} from "./chunk-4LZLDCVM.js";
import {
  createColorClasses,
  hostContext
} from "./chunk-5VP4V3BN.js";
import {
  getIonMode
} from "./chunk-TXLH22R2.js";
import {
  clamp,
  debounceEvent,
  inheritAriaAttributes,
  isSafeNumber,
  renderHiddenInput
} from "./chunk-RZR7LWTQ.js";
import {
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

// node_modules/@ionic/core/dist/esm/ion-range.entry.js
function getDecimalPlaces(n) {
  if (!isSafeNumber(n)) return 0;
  if (n % 1 === 0) return 0;
  return n.toString().split(".")[1].length;
}
function roundToMaxDecimalPlaces(n, ...references) {
  if (!isSafeNumber(n)) return 0;
  const maxPlaces = Math.max(...references.map((r) => getDecimalPlaces(r)));
  return Number(n.toFixed(maxPlaces));
}
var rangeIosCss = ":host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{top:calc((var(--height) - var(--knob-handle-size)) / 2);-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-pack:center;justify-content:center;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}.range-knob-handle{inset-inline-start:0}:host-context([dir=rtl]) .range-knob-handle{left:unset}[dir=rtl] .range-knob-handle{left:unset}@supports selector(:dir(rtl)){.range-knob-handle:dir(rtl){left:unset}}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar-container{border-radius:var(--bar-border-radius);top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height)}.range-bar-container{inset-inline-start:0}:host-context([dir=rtl]) .range-bar-container{left:unset}[dir=rtl] .range-bar-container{left:unset}@supports selector(:dir(rtl)){.range-bar-container:dir(rtl){left:unset}}.range-bar{border-radius:var(--bar-border-radius);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}.range-knob{border-radius:var(--knob-border-radius);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}.range-knob{inset-inline-start:calc(50% - var(--knob-size) / 2)}:host-context([dir=rtl]) .range-knob{left:unset}[dir=rtl] .range-knob{left:unset}@supports selector(:dir(rtl)){.range-knob:dir(rtl){left:unset}}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host([slot=start]),:host([slot=end]){width:auto}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}.range-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit}::slotted([slot=label]){max-width:200px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center}:host(.range-label-placement-start) .range-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.range-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.range-label-placement-end) .range-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.range-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.range-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.range-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.range-label-placement-stacked) .range-wrapper{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:stretch;align-items:stretch}:host(.range-label-placement-stacked) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top;-webkit-transform:scale(0.75);transform:scale(0.75);margin-left:0;margin-right:0;margin-bottom:16px;max-width:calc(100% / 0.75)}:host-context([dir=rtl]):host(.range-label-placement-stacked) .label-text-wrapper,:host-context([dir=rtl]).range-label-placement-stacked .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){:host(.range-label-placement-stacked:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}}:host(.in-item.range-label-placement-stacked) .label-text-wrapper{margin-top:10px;margin-bottom:16px}:host(.in-item.range-label-placement-stacked) .native-wrapper{margin-bottom:0px}:host{--knob-border-radius:50%;--knob-background:#ffffff;--knob-box-shadow:0px 0.5px 4px rgba(0, 0, 0, 0.12), 0px 6px 13px rgba(0, 0, 0, 0.12);--knob-size:26px;--bar-height:4px;--bar-background:var(--ion-color-step-900, var(--ion-background-color-step-900, #e6e6e6));--bar-background-active:var(--ion-color-primary, #0054e9);--bar-border-radius:2px;--height:42px}:host(.range-item-start-adjustment){-webkit-padding-start:24px;padding-inline-start:24px}:host(.range-item-end-adjustment){-webkit-padding-end:24px;padding-inline-end:24px}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-tick-active{background:var(--ion-color-base)}::slotted([slot=start]){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}::slotted([slot=end]){-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.range-has-pin:not(.range-label-placement-stacked)){padding-top:calc(8px + 0.75rem)}:host(.range-has-pin.range-label-placement-stacked) .label-text-wrapper{margin-bottom:calc(8px + 0.75rem)}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-bar-active.has-ticks{border-radius:0;-webkit-margin-start:-2px;margin-inline-start:-2px;-webkit-margin-end:-2px;margin-inline-end:-2px}.range-tick{-webkit-margin-start:-2px;margin-inline-start:-2px;border-radius:0;position:absolute;top:17px;width:4px;height:8px;background:var(--ion-color-step-900, var(--ion-background-color-step-900, #e6e6e6));pointer-events:none}.range-tick-active{background:var(--bar-background-active)}.range-pin{-webkit-transform:translate3d(0,  100%,  0) scale(0.01);transform:translate3d(0,  100%,  0) scale(0.01);-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;min-width:28px;-webkit-transition:-webkit-transform 120ms ease;transition:-webkit-transform 120ms ease;transition:transform 120ms ease;transition:transform 120ms ease, -webkit-transform 120ms ease;background:transparent;color:var(--ion-text-color, #000);font-size:0.75rem;text-align:center}.range-knob-pressed .range-pin,.range-knob-handle.ion-focused .range-pin{-webkit-transform:translate3d(0, calc(-100% + 11px), 0) scale(1);transform:translate3d(0, calc(-100% + 11px), 0) scale(1)}:host(.range-disabled){opacity:0.3}";
var rangeMdCss = ':host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{top:calc((var(--height) - var(--knob-handle-size)) / 2);-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-pack:center;justify-content:center;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}.range-knob-handle{inset-inline-start:0}:host-context([dir=rtl]) .range-knob-handle{left:unset}[dir=rtl] .range-knob-handle{left:unset}@supports selector(:dir(rtl)){.range-knob-handle:dir(rtl){left:unset}}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar-container{border-radius:var(--bar-border-radius);top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height)}.range-bar-container{inset-inline-start:0}:host-context([dir=rtl]) .range-bar-container{left:unset}[dir=rtl] .range-bar-container{left:unset}@supports selector(:dir(rtl)){.range-bar-container:dir(rtl){left:unset}}.range-bar{border-radius:var(--bar-border-radius);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}.range-knob{border-radius:var(--knob-border-radius);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}.range-knob{inset-inline-start:calc(50% - var(--knob-size) / 2)}:host-context([dir=rtl]) .range-knob{left:unset}[dir=rtl] .range-knob{left:unset}@supports selector(:dir(rtl)){.range-knob:dir(rtl){left:unset}}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host([slot=start]),:host([slot=end]){width:auto}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}.range-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit}::slotted([slot=label]){max-width:200px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center}:host(.range-label-placement-start) .range-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.range-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.range-label-placement-end) .range-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.range-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.range-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.range-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.range-label-placement-stacked) .range-wrapper{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:stretch;align-items:stretch}:host(.range-label-placement-stacked) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top;-webkit-transform:scale(0.75);transform:scale(0.75);margin-left:0;margin-right:0;margin-bottom:16px;max-width:calc(100% / 0.75)}:host-context([dir=rtl]):host(.range-label-placement-stacked) .label-text-wrapper,:host-context([dir=rtl]).range-label-placement-stacked .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){:host(.range-label-placement-stacked:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}}:host(.in-item.range-label-placement-stacked) .label-text-wrapper{margin-top:10px;margin-bottom:16px}:host(.in-item.range-label-placement-stacked) .native-wrapper{margin-bottom:0px}:host{--knob-border-radius:50%;--knob-background:var(--bar-background-active);--knob-box-shadow:none;--knob-size:18px;--bar-height:2px;--bar-background:rgba(var(--ion-color-primary-rgb, 0, 84, 233), 0.26);--bar-background-active:var(--ion-color-primary, #0054e9);--bar-border-radius:0;--height:42px;--pin-background:var(--ion-color-primary, #0054e9);--pin-color:var(--ion-color-primary-contrast, #fff)}::slotted(:not(ion-icon)[slot=start]),::slotted(:not(ion-icon)[slot=end]),.native-wrapper{font-size:0.75rem}:host(.range-item-start-adjustment){-webkit-padding-start:18px;padding-inline-start:18px}:host(.range-item-end-adjustment){-webkit-padding-end:18px;padding-inline-end:18px}:host(.ion-color) .range-bar{background:rgba(var(--ion-color-base-rgb), 0.26)}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-knob,:host(.ion-color) .range-knob::before,:host(.ion-color) .range-pin,:host(.ion-color) .range-pin::before,:host(.ion-color) .range-tick{background:var(--ion-color-base);color:var(--ion-color-contrast)}::slotted([slot=start]){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:14px;margin-inline-end:14px;margin-top:0;margin-bottom:0}::slotted([slot=end]){-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.range-has-pin:not(.range-label-placement-stacked)){padding-top:1.75rem}:host(.range-has-pin.range-label-placement-stacked) .label-text-wrapper{margin-bottom:1.75rem}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-knob{-webkit-transform:scale(0.67);transform:scale(0.67);-webkit-transition-duration:120ms;transition-duration:120ms;-webkit-transition-property:background-color, border, -webkit-transform;transition-property:background-color, border, -webkit-transform;transition-property:transform, background-color, border;transition-property:transform, background-color, border, -webkit-transform;-webkit-transition-timing-function:ease;transition-timing-function:ease;z-index:2}.range-knob::before{border-radius:50%;position:absolute;width:var(--knob-size);height:var(--knob-size);-webkit-transform:scale(1);transform:scale(1);-webkit-transition:0.267s cubic-bezier(0, 0, 0.58, 1);transition:0.267s cubic-bezier(0, 0, 0.58, 1);background:var(--knob-background);content:"";opacity:0.13;pointer-events:none}.range-knob::before{inset-inline-start:0}.range-tick{position:absolute;top:calc((var(--height) - var(--bar-height)) / 2);width:var(--bar-height);height:var(--bar-height);background:var(--bar-background-active);z-index:1;pointer-events:none}.range-tick-active{background:transparent}.range-pin{padding-left:0;padding-right:0;padding-top:8px;padding-bottom:8px;border-radius:50%;-webkit-transform:translate3d(0,  0,  0) scale(0.01);transform:translate3d(0,  0,  0) scale(0.01);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:1.75rem;height:1.75rem;-webkit-transition:background 120ms ease, -webkit-transform 120ms ease;transition:background 120ms ease, -webkit-transform 120ms ease;transition:transform 120ms ease, background 120ms ease;transition:transform 120ms ease, background 120ms ease, -webkit-transform 120ms ease;background:var(--pin-background);color:var(--pin-color)}.range-pin::before{bottom:-1px;-webkit-margin-start:-13px;margin-inline-start:-13px;border-radius:50% 50% 50% 0;position:absolute;width:26px;height:26px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transition:background 120ms ease;transition:background 120ms ease;background:var(--pin-background);content:"";z-index:-1}.range-pin::before{inset-inline-start:50%}:host-context([dir=rtl]) .range-pin::before{left:unset}[dir=rtl] .range-pin::before{left:unset}@supports selector(:dir(rtl)){.range-pin::before:dir(rtl){left:unset}}.range-knob-pressed .range-pin,.range-knob-handle.ion-focused .range-pin{-webkit-transform:translate3d(0, calc(-100% + 4px), 0) scale(1);transform:translate3d(0, calc(-100% + 4px), 0) scale(1)}@media (any-hover: hover){.range-knob-handle:hover .range-knob:before{-webkit-transform:scale(2);transform:scale(2);opacity:0.13}}.range-knob-handle.ion-activated .range-knob:before,.range-knob-handle.ion-focused .range-knob:before,.range-knob-handle.range-knob-pressed .range-knob:before{-webkit-transform:scale(2);transform:scale(2)}.range-knob-handle.ion-focused .range-knob::before{opacity:0.13}.range-knob-handle.ion-activated .range-knob::before,.range-knob-handle.range-knob-pressed .range-knob::before{opacity:0.25}:host(:not(.range-has-pin)) .range-knob-pressed .range-knob,:host(:not(.range-has-pin)) .range-knob-handle.ion-focused .range-knob{-webkit-transform:scale(1);transform:scale(1)}:host(.range-disabled) .range-bar-active,:host(.range-disabled) .range-bar,:host(.range-disabled) .range-tick{background-color:var(--ion-color-step-250, var(--ion-background-color-step-250, #bfbfbf))}:host(.range-disabled) .range-knob{-webkit-transform:scale(0.55);transform:scale(0.55);outline:5px solid #fff;background-color:var(--ion-color-step-250, var(--ion-background-color-step-250, #bfbfbf))}:host(.range-disabled) .label-text-wrapper,:host(.range-disabled) ::slotted([slot=start]),:host(.range-disabled) ::slotted([slot=end]){opacity:0.38}';
var Range = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionChange = createEvent(this, "ionChange", 7);
    this.ionInput = createEvent(this, "ionInput", 7);
    this.ionFocus = createEvent(this, "ionFocus", 7);
    this.ionBlur = createEvent(this, "ionBlur", 7);
    this.ionKnobMoveStart = createEvent(this, "ionKnobMoveStart", 7);
    this.ionKnobMoveEnd = createEvent(this, "ionKnobMoveEnd", 7);
    this.rangeId = `ion-r-${rangeIds++}`;
    this.didLoad = false;
    this.noUpdate = false;
    this.hasFocus = false;
    this.inheritedAttributes = {};
    this.contentEl = null;
    this.initialContentScrollY = true;
    this.ratioA = 0;
    this.ratioB = 0;
    this.name = this.rangeId;
    this.dualKnobs = false;
    this.min = 0;
    this.max = 100;
    this.pin = false;
    this.pinFormatter = (value) => Math.round(value);
    this.snaps = false;
    this.step = 1;
    this.ticks = true;
    this.disabled = false;
    this.value = 0;
    this.compareValues = (newVal, oldVal) => {
      if (typeof newVal === "object" && typeof oldVal === "object") {
        return newVal.lower !== oldVal.lower || newVal.upper !== oldVal.upper;
      }
      return newVal !== oldVal;
    };
    this.clampBounds = (value) => {
      return clamp(this.min, value, this.max);
    };
    this.ensureValueInBounds = (value) => {
      if (this.dualKnobs) {
        return {
          lower: this.clampBounds(value.lower),
          upper: this.clampBounds(value.upper)
        };
      } else {
        return this.clampBounds(value);
      }
    };
    this.labelPlacement = "start";
    this.setupGesture = () => __async(this, null, function* () {
      const rangeSlider = this.rangeSlider;
      if (rangeSlider) {
        this.gesture = (yield import("./index-CfgBF1SE-H675UNH5.js")).createGesture({
          el: rangeSlider,
          gestureName: "range",
          gesturePriority: 100,
          /**
           * Provide a threshold since the drag movement
           * might be a user scrolling the view.
           * If this is true, then the range
           * should not move.
           */
          threshold: 10,
          onStart: () => this.onStart(),
          onMove: (ev) => this.onMove(ev),
          onEnd: (ev) => this.onEnd(ev)
        });
        this.gesture.enable(!this.disabled);
      }
    });
    this.handleKeyboard = (knob, isIncrease) => {
      const {
        ensureValueInBounds
      } = this;
      let step = this.step;
      step = step > 0 ? step : 1;
      step = step / (this.max - this.min);
      if (!isIncrease) {
        step *= -1;
      }
      if (knob === "A") {
        this.ratioA = clamp(0, this.ratioA + step, 1);
      } else {
        this.ratioB = clamp(0, this.ratioB + step, 1);
      }
      this.ionKnobMoveStart.emit({
        value: ensureValueInBounds(this.value)
      });
      this.updateValue();
      this.emitValueChange();
      this.ionKnobMoveEnd.emit({
        value: ensureValueInBounds(this.value)
      });
    };
    this.onBlur = () => {
      if (this.hasFocus) {
        this.hasFocus = false;
        this.ionBlur.emit();
      }
    };
    this.onFocus = () => {
      if (!this.hasFocus) {
        this.hasFocus = true;
        this.ionFocus.emit();
      }
    };
    this.onKnobFocus = (knob) => {
      if (!this.hasFocus) {
        this.hasFocus = true;
        this.ionFocus.emit();
      }
      if (this.dualKnobs && this.el.shadowRoot) {
        const knobA = this.el.shadowRoot.querySelector(".range-knob-a");
        const knobB = this.el.shadowRoot.querySelector(".range-knob-b");
        knobA === null || knobA === void 0 ? void 0 : knobA.classList.remove("ion-focused");
        knobB === null || knobB === void 0 ? void 0 : knobB.classList.remove("ion-focused");
        const focusedKnobEl = knob === "A" ? knobA : knobB;
        focusedKnobEl === null || focusedKnobEl === void 0 ? void 0 : focusedKnobEl.classList.add("ion-focused");
      }
    };
    this.onKnobBlur = () => {
      setTimeout(() => {
        var _a;
        const activeElement = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.activeElement;
        const isStillFocusedOnKnob = activeElement && activeElement.classList.contains("range-knob-handle");
        if (!isStillFocusedOnKnob) {
          if (this.hasFocus) {
            this.hasFocus = false;
            this.ionBlur.emit();
          }
          if (this.dualKnobs && this.el.shadowRoot) {
            const knobA = this.el.shadowRoot.querySelector(".range-knob-a");
            const knobB = this.el.shadowRoot.querySelector(".range-knob-b");
            knobA === null || knobA === void 0 ? void 0 : knobA.classList.remove("ion-focused");
            knobB === null || knobB === void 0 ? void 0 : knobB.classList.remove("ion-focused");
          }
        }
      }, 0);
    };
  }
  debounceChanged() {
    const {
      ionInput,
      debounce,
      originalIonInput
    } = this;
    this.ionInput = debounce === void 0 ? originalIonInput !== null && originalIonInput !== void 0 ? originalIonInput : ionInput : debounceEvent(ionInput, debounce);
  }
  minChanged(newValue) {
    if (!isSafeNumber(newValue)) {
      this.min = 0;
    }
    if (!this.noUpdate) {
      this.updateRatio();
    }
  }
  maxChanged(newValue) {
    if (!isSafeNumber(newValue)) {
      this.max = 100;
    }
    if (!this.noUpdate) {
      this.updateRatio();
    }
  }
  stepChanged(newValue) {
    if (!isSafeNumber(newValue)) {
      this.step = 1;
    }
  }
  activeBarStartChanged() {
    const {
      activeBarStart
    } = this;
    if (activeBarStart !== void 0) {
      if (activeBarStart > this.max) {
        printIonWarning(`[ion-range] - The value of activeBarStart (${activeBarStart}) is greater than the max (${this.max}). Valid values are greater than or equal to the min value and less than or equal to the max value.`, this.el);
        this.activeBarStart = this.max;
      } else if (activeBarStart < this.min) {
        printIonWarning(`[ion-range] - The value of activeBarStart (${activeBarStart}) is less than the min (${this.min}). Valid values are greater than or equal to the min value and less than or equal to the max value.`, this.el);
        this.activeBarStart = this.min;
      }
    }
  }
  disabledChanged() {
    if (this.gesture) {
      this.gesture.enable(!this.disabled);
    }
  }
  valueChanged(newValue, oldValue) {
    const valuesChanged = this.compareValues(newValue, oldValue);
    if (valuesChanged) {
      this.ionInput.emit({
        value: this.value
      });
    }
    if (!this.noUpdate) {
      this.updateRatio();
    }
  }
  componentWillLoad() {
    if (this.el.hasAttribute("id")) {
      this.rangeId = this.el.getAttribute("id");
    }
    this.inheritedAttributes = inheritAriaAttributes(this.el);
    this.min = isSafeNumber(this.min) ? this.min : 0;
    this.max = isSafeNumber(this.max) ? this.max : 100;
    this.step = isSafeNumber(this.step) ? this.step : 1;
  }
  componentDidLoad() {
    this.originalIonInput = this.ionInput;
    this.setupGesture();
    this.updateRatio();
    this.didLoad = true;
  }
  connectedCallback() {
    var _a;
    this.updateRatio();
    this.debounceChanged();
    this.disabledChanged();
    this.activeBarStartChanged();
    if (this.didLoad) {
      this.setupGesture();
    }
    const ionContent = findClosestIonContent(this.el);
    this.contentEl = (_a = ionContent === null || ionContent === void 0 ? void 0 : ionContent.querySelector(".ion-content-scroll-host")) !== null && _a !== void 0 ? _a : ionContent;
  }
  disconnectedCallback() {
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = void 0;
    }
  }
  getValue() {
    var _a;
    const value = (_a = this.value) !== null && _a !== void 0 ? _a : 0;
    if (this.dualKnobs) {
      if (typeof value === "object") {
        return value;
      }
      return {
        lower: 0,
        upper: value
      };
    } else {
      if (typeof value === "object") {
        return value.upper;
      }
      return value;
    }
  }
  /**
   * Emits an `ionChange` event.
   *
   * This API should be called for user committed changes.
   * This API should not be used for external value changes.
   */
  emitValueChange() {
    this.value = this.ensureValueInBounds(this.value);
    this.ionChange.emit({
      value: this.value
    });
  }
  /**
   * The value should be updated on touch end or
   * when the component is being dragged.
   * This follows the native behavior of mobile devices.
   *
   * For example: When the user lifts their finger from the
   * screen after tapping the bar or dragging the bar or knob.
   */
  onStart() {
    this.ionKnobMoveStart.emit({
      value: this.ensureValueInBounds(this.value)
    });
  }
  /**
   * The value should be updated while dragging the
   * bar or knob.
   *
   * While the user is dragging, the view
   * should not scroll. This is to prevent the user from
   * feeling disoriented while dragging.
   *
   * The user can scroll on the view if the knob or
   * bar is not being dragged.
   *
   * @param detail The details of the gesture event.
   */
  onMove(detail) {
    const {
      contentEl,
      pressedKnob
    } = this;
    const currentX = detail.currentX;
    if (contentEl && this.pressedKnob === void 0) {
      this.initialContentScrollY = disableContentScrollY(contentEl);
    }
    if (pressedKnob === void 0) {
      this.setPressedKnob(currentX);
    }
    this.update(currentX);
  }
  /**
   * The value should be updated on touch end:
   * - When the user lifts their finger from the screen after
   * tapping the bar.
   *
   * @param detail The details of the gesture or mouse event.
   */
  onEnd(detail) {
    var _a;
    const {
      contentEl,
      initialContentScrollY
    } = this;
    const currentX = (_a = detail.currentX) !== null && _a !== void 0 ? _a : detail.clientX;
    if (this.pressedKnob === void 0) {
      this.setPressedKnob(currentX);
    }
    if (contentEl && this.pressedKnob !== void 0) {
      resetContentScrollY(contentEl, initialContentScrollY);
    }
    this.update(currentX);
    this.pressedKnob = void 0;
    this.emitValueChange();
    this.ionKnobMoveEnd.emit({
      value: this.ensureValueInBounds(this.value)
    });
  }
  update(currentX) {
    const rect = this.rect;
    let ratio = clamp(0, (currentX - rect.left) / rect.width, 1);
    if (isRTL(this.el)) {
      ratio = 1 - ratio;
    }
    if (this.snaps) {
      ratio = valueToRatio(ratioToValue(ratio, this.min, this.max, this.step), this.min, this.max);
    }
    if (this.pressedKnob === "A") {
      this.ratioA = ratio;
    } else {
      this.ratioB = ratio;
    }
    this.updateValue();
  }
  setPressedKnob(currentX) {
    const rect = this.rect = this.rangeSlider.getBoundingClientRect();
    let ratio = clamp(0, (currentX - rect.left) / rect.width, 1);
    if (isRTL(this.el)) {
      ratio = 1 - ratio;
    }
    this.pressedKnob = !this.dualKnobs || Math.abs(this.ratioA - ratio) < Math.abs(this.ratioB - ratio) ? "A" : "B";
    this.setFocus(this.pressedKnob);
  }
  get valA() {
    return ratioToValue(this.ratioA, this.min, this.max, this.step);
  }
  get valB() {
    return ratioToValue(this.ratioB, this.min, this.max, this.step);
  }
  get ratioLower() {
    if (this.dualKnobs) {
      return Math.min(this.ratioA, this.ratioB);
    }
    const {
      activeBarStart
    } = this;
    if (activeBarStart == null) {
      return 0;
    }
    return valueToRatio(activeBarStart, this.min, this.max);
  }
  get ratioUpper() {
    if (this.dualKnobs) {
      return Math.max(this.ratioA, this.ratioB);
    }
    return this.ratioA;
  }
  updateRatio() {
    const value = this.getValue();
    const {
      min,
      max
    } = this;
    if (this.dualKnobs) {
      this.ratioA = valueToRatio(value.lower, min, max);
      this.ratioB = valueToRatio(value.upper, min, max);
    } else {
      this.ratioA = valueToRatio(value, min, max);
    }
  }
  updateValue() {
    this.noUpdate = true;
    const {
      valA,
      valB
    } = this;
    this.value = !this.dualKnobs ? valA : {
      lower: Math.min(valA, valB),
      upper: Math.max(valA, valB)
    };
    this.noUpdate = false;
  }
  setFocus(knob) {
    if (this.el.shadowRoot) {
      const knobEl = this.el.shadowRoot.querySelector(knob === "A" ? ".range-knob-a" : ".range-knob-b");
      if (knobEl) {
        knobEl.focus();
      }
    }
  }
  /**
   * Returns true if content was passed to the "start" slot
   */
  get hasStartSlotContent() {
    return this.el.querySelector('[slot="start"]') !== null;
  }
  /**
   * Returns true if content was passed to the "end" slot
   */
  get hasEndSlotContent() {
    return this.el.querySelector('[slot="end"]') !== null;
  }
  get hasLabel() {
    return this.label !== void 0 || this.el.querySelector('[slot="label"]') !== null;
  }
  renderRangeSlider() {
    var _a;
    const {
      min,
      max,
      step,
      handleKeyboard,
      pressedKnob,
      disabled,
      pin,
      ratioLower,
      ratioUpper,
      pinFormatter,
      inheritedAttributes
    } = this;
    let barStart = `${ratioLower * 100}%`;
    let barEnd = `${100 - ratioUpper * 100}%`;
    const rtl = isRTL(this.el);
    const start = rtl ? "right" : "left";
    const end = rtl ? "left" : "right";
    const tickStyle = (tick) => {
      return {
        [start]: tick[start]
      };
    };
    if (this.dualKnobs === false) {
      if (this.valA < ((_a = this.activeBarStart) !== null && _a !== void 0 ? _a : this.min)) {
        barStart = `${ratioUpper * 100}%`;
        barEnd = `${100 - ratioLower * 100}%`;
      } else {
        barStart = `${ratioLower * 100}%`;
        barEnd = `${100 - ratioUpper * 100}%`;
      }
    }
    const barStyle = {
      [start]: barStart,
      [end]: barEnd
    };
    const ticks = [];
    if (this.snaps && this.ticks) {
      for (let value = min; value <= max; value += step) {
        const ratio = valueToRatio(value, min, max);
        const ratioMin = Math.min(ratioLower, ratioUpper);
        const ratioMax = Math.max(ratioLower, ratioUpper);
        const tick = {
          ratio,
          /**
           * Sets the tick mark as active when the tick is between the min bounds and the knob.
           * When using activeBarStart, the tick mark will be active between the knob and activeBarStart.
           */
          active: ratio >= ratioMin && ratio <= ratioMax
        };
        tick[start] = `${ratio * 100}%`;
        ticks.push(tick);
      }
    }
    return h("div", {
      class: "range-slider",
      ref: (rangeEl) => this.rangeSlider = rangeEl,
      /**
       * Since the gesture has a threshold, the value
       * won't change until the user has dragged past
       * the threshold. This is to prevent the range
       * from moving when the user is scrolling.
       *
       * This results in the value not being updated
       * and the event emitters not being triggered
       * if the user taps on the range. This is why
       * we need to listen for the "pointerUp" event.
       */
      onPointerUp: (ev) => {
        if (this.pressedKnob === void 0) {
          this.onStart();
          this.onEnd(ev);
        }
      }
    }, ticks.map((tick) => h("div", {
      style: tickStyle(tick),
      role: "presentation",
      class: {
        "range-tick": true,
        "range-tick-active": tick.active
      },
      part: tick.active ? "tick-active" : "tick"
    })), h("div", {
      class: "range-bar-container"
    }, h("div", {
      class: "range-bar",
      role: "presentation",
      part: "bar"
    }), h("div", {
      class: {
        "range-bar": true,
        "range-bar-active": true,
        "has-ticks": ticks.length > 0
      },
      role: "presentation",
      style: barStyle,
      part: "bar-active"
    })), renderKnob(rtl, {
      knob: "A",
      pressed: pressedKnob === "A",
      value: this.valA,
      ratio: this.ratioA,
      pin,
      pinFormatter,
      disabled,
      handleKeyboard,
      min,
      max,
      inheritedAttributes,
      onKnobFocus: this.onKnobFocus,
      onKnobBlur: this.onKnobBlur
    }), this.dualKnobs && renderKnob(rtl, {
      knob: "B",
      pressed: pressedKnob === "B",
      value: this.valB,
      ratio: this.ratioB,
      pin,
      pinFormatter,
      disabled,
      handleKeyboard,
      min,
      max,
      inheritedAttributes,
      onKnobFocus: this.onKnobFocus,
      onKnobBlur: this.onKnobBlur
    }));
  }
  render() {
    const {
      disabled,
      el,
      hasLabel,
      rangeId,
      pin,
      pressedKnob,
      labelPlacement,
      label
    } = this;
    const inItem = hostContext("ion-item", el);
    const hasStartContent = hasLabel && (labelPlacement === "start" || labelPlacement === "fixed") || this.hasStartSlotContent;
    const needsStartAdjustment = inItem && !hasStartContent;
    const hasEndContent = hasLabel && labelPlacement === "end" || this.hasEndSlotContent;
    const needsEndAdjustment = inItem && !hasEndContent;
    const mode = getIonMode(this);
    renderHiddenInput(true, el, this.name, JSON.stringify(this.getValue()), disabled);
    return h(Host, {
      key: "ef7b01f80515bcaeb2983934ad7f10a6bd5d13ec",
      onFocusin: this.onFocus,
      onFocusout: this.onBlur,
      id: rangeId,
      class: createColorClasses(this.color, {
        [mode]: true,
        "in-item": inItem,
        "range-disabled": disabled,
        "range-pressed": pressedKnob !== void 0,
        "range-has-pin": pin,
        [`range-label-placement-${labelPlacement}`]: true,
        "range-item-start-adjustment": needsStartAdjustment,
        "range-item-end-adjustment": needsEndAdjustment
      })
    }, h("label", {
      key: "fd8aa90a9d52be9da024b907e68858dae424449d",
      class: "range-wrapper",
      id: "range-label"
    }, h("div", {
      key: "2172b4f329c22017dd23475c80aac25ba6e753eb",
      class: {
        "label-text-wrapper": true,
        "label-text-wrapper-hidden": !hasLabel
      },
      part: "label"
    }, label !== void 0 ? h("div", {
      class: "label-text"
    }, label) : h("slot", {
      name: "label"
    })), h("div", {
      key: "3c318bf2ea0576646d4c010bf44573fd0f483186",
      class: "native-wrapper"
    }, h("slot", {
      key: "6586fd6fc96271e73f8a86c202d1913ad1a26f96",
      name: "start"
    }), this.renderRangeSlider(), h("slot", {
      key: "74ac0bc2d2cb66ef708bb729f88b6ecbc1b2155d",
      name: "end"
    }))));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "debounce": ["debounceChanged"],
      "min": ["minChanged"],
      "max": ["maxChanged"],
      "step": ["stepChanged"],
      "activeBarStart": ["activeBarStartChanged"],
      "disabled": ["disabledChanged"],
      "value": ["valueChanged"]
    };
  }
};
var renderKnob = (rtl, {
  knob,
  value,
  ratio,
  min,
  max,
  disabled,
  pressed,
  pin,
  handleKeyboard,
  pinFormatter,
  inheritedAttributes,
  onKnobFocus,
  onKnobBlur
}) => {
  const start = rtl ? "right" : "left";
  const knobStyle = () => {
    const style = {};
    style[start] = `${ratio * 100}%`;
    return style;
  };
  const ariaLabel = inheritedAttributes["aria-label"];
  return h("div", {
    onKeyDown: (ev) => {
      const key = ev.key;
      if (key === "ArrowLeft" || key === "ArrowDown") {
        handleKeyboard(knob, false);
        ev.preventDefault();
        ev.stopPropagation();
      } else if (key === "ArrowRight" || key === "ArrowUp") {
        handleKeyboard(knob, true);
        ev.preventDefault();
        ev.stopPropagation();
      }
    },
    onFocus: () => onKnobFocus(knob),
    onBlur: onKnobBlur,
    class: {
      "range-knob-handle": true,
      "range-knob-a": knob === "A",
      "range-knob-b": knob === "B",
      "range-knob-pressed": pressed,
      "range-knob-min": value === min,
      "range-knob-max": value === max,
      "ion-activatable": true,
      "ion-focusable": true
    },
    style: knobStyle(),
    role: "slider",
    tabindex: disabled ? -1 : 0,
    "aria-label": ariaLabel !== void 0 ? ariaLabel : null,
    "aria-labelledby": ariaLabel === void 0 ? "range-label" : null,
    "aria-valuemin": min,
    "aria-valuemax": max,
    "aria-disabled": disabled ? "true" : null,
    "aria-valuenow": value
  }, pin && h("div", {
    class: "range-pin",
    role: "presentation",
    part: "pin"
  }, pinFormatter(value)), h("div", {
    class: "range-knob",
    role: "presentation",
    part: "knob"
  }));
};
var ratioToValue = (ratio, min, max, step) => {
  let value = (max - min) * ratio;
  if (step > 0) {
    value = Math.round(value / step) * step + min;
  }
  const clampedValue = clamp(min, value, max);
  return roundToMaxDecimalPlaces(clampedValue, min, max, step);
};
var valueToRatio = (value, min, max) => {
  return clamp(0, (value - min) / (max - min), 1);
};
var rangeIds = 0;
Range.style = {
  ios: rangeIosCss,
  md: rangeMdCss
};
export {
  Range as ion_range
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-range.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tcmFuZ2UuZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBjcmVhdGVFdmVudCwgZiBhcyBwcmludElvbldhcm5pbmcsIGgsIGQgYXMgSG9zdCwgZyBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9pbmRleC00RHhZNl9nRy5qcyc7XG5pbXBvcnQgeyBmIGFzIGZpbmRDbG9zZXN0SW9uQ29udGVudCwgZCBhcyBkaXNhYmxlQ29udGVudFNjcm9sbFksIHIgYXMgcmVzZXRDb250ZW50U2Nyb2xsWSB9IGZyb20gJy4vaW5kZXgtN1ViU2x2N04uanMnO1xuaW1wb3J0IHsgaiBhcyBpc1NhZmVOdW1iZXIsIGUgYXMgY2xhbXAsIGQgYXMgZGVib3VuY2VFdmVudCwgaSBhcyBpbmhlcml0QXJpYUF0dHJpYnV0ZXMsIGEgYXMgcmVuZGVySGlkZGVuSW5wdXQgfSBmcm9tICcuL2hlbHBlcnMtOEtTUVFHUXkuanMnO1xuaW1wb3J0IHsgaSBhcyBpc1JUTCB9IGZyb20gJy4vZGlyLUM1M2ZlYWdELmpzJztcbmltcG9ydCB7IGggYXMgaG9zdENvbnRleHQsIGMgYXMgY3JlYXRlQ29sb3JDbGFzc2VzIH0gZnJvbSAnLi90aGVtZS1EaVZKeXFsWC5qcyc7XG5pbXBvcnQgeyBiIGFzIGdldElvbk1vZGUgfSBmcm9tICcuL2lvbmljLWdsb2JhbC1DVFN5dWZoRi5qcyc7XG5mdW5jdGlvbiBnZXREZWNpbWFsUGxhY2VzKG4pIHtcbiAgaWYgKCFpc1NhZmVOdW1iZXIobikpIHJldHVybiAwO1xuICBpZiAobiAlIDEgPT09IDApIHJldHVybiAwO1xuICByZXR1cm4gbi50b1N0cmluZygpLnNwbGl0KCcuJylbMV0ubGVuZ3RoO1xufVxuLyoqXG4gKiBGaXhlcyBmbG9hdGluZyBwb2ludCByb3VuZGluZyBlcnJvcnMgaW4gYSByZXN1bHQgYnkgcm91bmRpbmdcbiAqIHRvIHRoZSBzYW1lIHNwZWNpZmljaXR5LCBvciBudW1iZXIgb2YgZGVjaW1hbCBwbGFjZXMgKCpub3QqXG4gKiBzaWduaWZpY2FudCBmaWd1cmVzKSBhcyBwcm92aWRlZCByZWZlcmVuY2UgbnVtYmVycy4gSWYgbXVsdGlwbGVcbiAqIHJlZmVyZW5jZXMgYXJlIHByb3ZpZGVkLCB0aGUgaGlnaGVzdCBudW1iZXIgb2YgZGVjaW1hbCBwbGFjZXNcbiAqIGJldHdlZW4gdGhlbSB3aWxsIGJlIHVzZWQuXG4gKlxuICogVGhlIG1haW4gdXNlIGNhc2UgaXMgd2hlbiBudW1iZXJzIHggYW5kIHkgYXJlIGFkZGVkIHRvIHByb2R1Y2UgbixcbiAqIGJ1dCB4IGFuZCB5IGFyZSBmbG9hdHMsIHNvIG4gbWF5IGhhdmUgcm91bmRpbmcgZXJyb3JzIChzdWNoIGFzXG4gKiAzLjEwMDAwMDAwMDQgaW5zdGVhZCBvZiAzLjEpLiBBcyBsb25nIGFzIG9ubHkgYWRkaXRpb24vc3VidHJhY3Rpb25cbiAqIG9jY3VycyBiZXR3ZWVuIHggYW5kIHksIHRoZSBzcGVjaWZpY2l0eSBvZiB0aGUgcmVzdWx0IHdpbGwgbmV2ZXJcbiAqIGluY3JlYXNlLCBzbyB4IGFuZCB5IHNob3VsZCBiZSBwYXNzZWQgaW4gYXMgdGhlIHJlZmVyZW5jZXMuXG4gKlxuICogSWYgbXVsdGlwbGljYXRpb24sIGRpdmlzaW9uLCBvciBvdGhlciBvcGVyYXRpb25zIHdlcmUgdXNlZCB0b1xuICogY2FsY3VsYXRlIG4sIHRoZSByb3VuZGVkIHJlc3VsdCBtYXkgaGF2ZSBsZXNzIHNwZWNpZmljaXR5IHRoYW5cbiAqIGRlc2lyZWQuIEZvciBleGFtcGxlLCAxIC8gMyA9IDAuMzMzMzMoLi4uKSwgYnV0XG4gKiByb3VuZFRvTWF4RGVjaW1hbFBsYWNlcygoMSAvIDMpLCAxLCAzKSB3aWxsIHJldHVybiAwLCBzaW5jZSBib3RoXG4gKiAxIGFuZCAzIGFyZSB3aG9sZSBudW1iZXJzLlxuICpcbiAqIE5vdGUgdGhhdCBleHRyZW1lbHkgcHJlY2lzZSByZWZlcmVuY2UgbnVtYmVycyBtYXkgbGVhZCB0byByb3VuZGluZ1xuICogZXJyb3JzIG5vdCBiZWluZyB0cmltbWVkLCBkdWUgdG8gdGhlIGVycm9yIHJlc3VsdCBoYXZpbmcgdGhlIHNhbWUgb3JcbiAqIGZld2VyIGRlY2ltYWwgcGxhY2VzIGFzIHRoZSByZWZlcmVuY2UocykuIFRoaXMgaXMgYWNjZXB0YWJsZSBhcyB3ZVxuICogd291bGQgbm90IGJlIGFibGUgdG8gdGVsbCB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIGEgcm91bmRpbmcgZXJyb3JcbiAqIGFuZCBjb3JyZWN0IHZhbHVlIGluIHRoaXMgY2FzZSwgYnV0IGl0IGRvZXMgbWVhbiB0aGVyZSBpcyBhbiBpbXBsaWNpdFxuICogcHJlY2lzaW9uIGxpbWl0LiBJZiBwcmVjaXNpb24gdGhhdCBoaWdoIGlzIG5lZWRlZCwgaXQgaXMgcmVjb21tZW5kZWRcbiAqIHRvIHVzZSBhIHRoaXJkIHBhcnR5IGRhdGEgdHlwZSBkZXNpZ25lZCB0byBoYW5kbGUgZmxvYXRpbmcgcG9pbnRcbiAqIGVycm9ycyBpbnN0ZWFkLlxuICpcbiAqIEBwYXJhbSBuIFRoZSBudW1iZXIgdG8gcm91bmQuXG4gKiBAcGFyYW0gcmVmZXJlbmNlcyBOdW1iZXIocykgdXNlZCB0byBjYWxjdWxhdGUgbiwgb3IgdGhhdCBzaG91bGQgb3RoZXJ3aXNlXG4gKiBiZSB1c2VkIGFzIGEgcmVmZXJlbmNlIGZvciB0aGUgZGVzaXJlZCBzcGVjaWZpY2l0eS5cbiAqL1xuZnVuY3Rpb24gcm91bmRUb01heERlY2ltYWxQbGFjZXMobiwgLi4ucmVmZXJlbmNlcykge1xuICBpZiAoIWlzU2FmZU51bWJlcihuKSkgcmV0dXJuIDA7XG4gIGNvbnN0IG1heFBsYWNlcyA9IE1hdGgubWF4KC4uLnJlZmVyZW5jZXMubWFwKHIgPT4gZ2V0RGVjaW1hbFBsYWNlcyhyKSkpO1xuICByZXR1cm4gTnVtYmVyKG4udG9GaXhlZChtYXhQbGFjZXMpKTtcbn1cbmNvbnN0IHJhbmdlSW9zQ3NzID0gXCI6aG9zdHstLWtub2ItaGFuZGxlLXNpemU6Y2FsYyh2YXIoLS1rbm9iLXNpemUpICogMik7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXg6MztmbGV4OjM7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHksIGluaGVyaXQpOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTt6LWluZGV4OjJ9Omhvc3QoLnJhbmdlLWRpc2FibGVkKXtwb2ludGVyLWV2ZW50czpub25lfTo6c2xvdHRlZChpb24tbGFiZWwpey1tcy1mbGV4OmluaXRpYWw7ZmxleDppbml0aWFsfTo6c2xvdHRlZChpb24taWNvbltzbG90XSl7Zm9udC1zaXplOjI0cHh9LnJhbmdlLXNsaWRlcntwb3NpdGlvbjpyZWxhdGl2ZTstbXMtZmxleDoxO2ZsZXg6MTt3aWR0aDoxMDAlO2hlaWdodDp2YXIoLS1oZWlnaHQpO2NvbnRhaW46c2l6ZSBsYXlvdXQgc3R5bGU7Y3Vyc29yOi13ZWJraXQtZ3JhYjtjdXJzb3I6Z3JhYjstbXMtdG91Y2gtYWN0aW9uOnBhbi15O3RvdWNoLWFjdGlvbjpwYW4teX06aG9zdCgucmFuZ2UtcHJlc3NlZCkgLnJhbmdlLXNsaWRlcntjdXJzb3I6LXdlYmtpdC1ncmFiYmluZztjdXJzb3I6Z3JhYmJpbmd9LnJhbmdlLXBpbntwb3NpdGlvbjphYnNvbHV0ZTtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1iYXNlKTtjb2xvcjp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpO3RleHQtYWxpZ246Y2VudGVyOy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveH0ucmFuZ2Uta25vYi1oYW5kbGV7dG9wOmNhbGMoKHZhcigtLWhlaWdodCkgLSB2YXIoLS1rbm9iLWhhbmRsZS1zaXplKSkgLyAyKTstd2Via2l0LW1hcmdpbi1zdGFydDpjYWxjKDBweCAtIHZhcigtLWtub2ItaGFuZGxlLXNpemUpIC8gMik7bWFyZ2luLWlubGluZS1zdGFydDpjYWxjKDBweCAtIHZhcigtLWtub2ItaGFuZGxlLXNpemUpIC8gMik7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246YWJzb2x1dGU7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDp2YXIoLS1rbm9iLWhhbmRsZS1zaXplKTtoZWlnaHQ6dmFyKC0ta25vYi1oYW5kbGUtc2l6ZSk7dGV4dC1hbGlnbjpjZW50ZXJ9LnJhbmdlLWtub2ItaGFuZGxle2luc2V0LWlubGluZS1zdGFydDowfTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAucmFuZ2Uta25vYi1oYW5kbGV7bGVmdDp1bnNldH1bZGlyPXJ0bF0gLnJhbmdlLWtub2ItaGFuZGxle2xlZnQ6dW5zZXR9QHN1cHBvcnRzIHNlbGVjdG9yKDpkaXIocnRsKSl7LnJhbmdlLWtub2ItaGFuZGxlOmRpcihydGwpe2xlZnQ6dW5zZXR9fS5yYW5nZS1rbm9iLWhhbmRsZTphY3RpdmUsLnJhbmdlLWtub2ItaGFuZGxlOmZvY3Vze291dGxpbmU6bm9uZX0ucmFuZ2UtYmFyLWNvbnRhaW5lcntib3JkZXItcmFkaXVzOnZhcigtLWJhci1ib3JkZXItcmFkaXVzKTt0b3A6Y2FsYygodmFyKC0taGVpZ2h0KSAtIHZhcigtLWJhci1oZWlnaHQpKSAvIDIpO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7aGVpZ2h0OnZhcigtLWJhci1oZWlnaHQpfS5yYW5nZS1iYXItY29udGFpbmVye2luc2V0LWlubGluZS1zdGFydDowfTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAucmFuZ2UtYmFyLWNvbnRhaW5lcntsZWZ0OnVuc2V0fVtkaXI9cnRsXSAucmFuZ2UtYmFyLWNvbnRhaW5lcntsZWZ0OnVuc2V0fUBzdXBwb3J0cyBzZWxlY3Rvcig6ZGlyKHJ0bCkpey5yYW5nZS1iYXItY29udGFpbmVyOmRpcihydGwpe2xlZnQ6dW5zZXR9fS5yYW5nZS1iYXJ7Ym9yZGVyLXJhZGl1czp2YXIoLS1iYXItYm9yZGVyLXJhZGl1cyk7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTtoZWlnaHQ6dmFyKC0tYmFyLWhlaWdodCk7YmFja2dyb3VuZDp2YXIoLS1iYXItYmFja2dyb3VuZCk7cG9pbnRlci1ldmVudHM6bm9uZX0ucmFuZ2Uta25vYntib3JkZXItcmFkaXVzOnZhcigtLWtub2ItYm9yZGVyLXJhZGl1cyk7dG9wOmNhbGMoNTAlIC0gdmFyKC0ta25vYi1zaXplKSAvIDIpO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOnZhcigtLWtub2Itc2l6ZSk7aGVpZ2h0OnZhcigtLWtub2Itc2l6ZSk7YmFja2dyb3VuZDp2YXIoLS1rbm9iLWJhY2tncm91bmQpOy13ZWJraXQtYm94LXNoYWRvdzp2YXIoLS1rbm9iLWJveC1zaGFkb3cpO2JveC1zaGFkb3c6dmFyKC0ta25vYi1ib3gtc2hhZG93KTt6LWluZGV4OjI7cG9pbnRlci1ldmVudHM6bm9uZX0ucmFuZ2Uta25vYntpbnNldC1pbmxpbmUtc3RhcnQ6Y2FsYyg1MCUgLSB2YXIoLS1rbm9iLXNpemUpIC8gMil9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5yYW5nZS1rbm9ie2xlZnQ6dW5zZXR9W2Rpcj1ydGxdIC5yYW5nZS1rbm9ie2xlZnQ6dW5zZXR9QHN1cHBvcnRzIHNlbGVjdG9yKDpkaXIocnRsKSl7LnJhbmdlLWtub2I6ZGlyKHJ0bCl7bGVmdDp1bnNldH19Omhvc3QoLnJhbmdlLXByZXNzZWQpIC5yYW5nZS1iYXItYWN0aXZle3dpbGwtY2hhbmdlOmxlZnQsIHJpZ2h0fTpob3N0KC5pbi1pdGVtKXt3aWR0aDoxMDAlfTpob3N0KFtzbG90PXN0YXJ0XSksOmhvc3QoW3Nsb3Q9ZW5kXSl7d2lkdGg6YXV0b306aG9zdCguaW4taXRlbSkgOjpzbG90dGVkKGlvbi1sYWJlbCl7LW1zLWZsZXgtaXRlbS1hbGlnbjpjZW50ZXI7YWxpZ24tc2VsZjpjZW50ZXJ9LnJhbmdlLXdyYXBwZXJ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtcG9zaXRpdmU6MTtmbGV4LWdyb3c6MTstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2hlaWdodDppbmhlcml0fTo6c2xvdHRlZChbc2xvdD1sYWJlbF0pe21heC13aWR0aDoyMDBweDt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW59LmxhYmVsLXRleHQtd3JhcHBlci1oaWRkZW57ZGlzcGxheTpub25lfS5uYXRpdmUtd3JhcHBlcntkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1wb3NpdGl2ZToxO2ZsZXgtZ3JvdzoxOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXJ9Omhvc3QoLnJhbmdlLWxhYmVsLXBsYWNlbWVudC1zdGFydCkgLnJhbmdlLXdyYXBwZXJ7LW1zLWZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LWRpcmVjdGlvbjpyb3d9Omhvc3QoLnJhbmdlLWxhYmVsLXBsYWNlbWVudC1zdGFydCkgLmxhYmVsLXRleHQtd3JhcHBlcnstd2Via2l0LW1hcmdpbi1zdGFydDowO21hcmdpbi1pbmxpbmUtc3RhcnQ6MDstd2Via2l0LW1hcmdpbi1lbmQ6MTZweDttYXJnaW4taW5saW5lLWVuZDoxNnB4O21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjB9Omhvc3QoLnJhbmdlLWxhYmVsLXBsYWNlbWVudC1lbmQpIC5yYW5nZS13cmFwcGVyey1tcy1mbGV4LWRpcmVjdGlvbjpyb3ctcmV2ZXJzZTtmbGV4LWRpcmVjdGlvbjpyb3ctcmV2ZXJzZX06aG9zdCgucmFuZ2UtbGFiZWwtcGxhY2VtZW50LWVuZCkgLmxhYmVsLXRleHQtd3JhcHBlcnstd2Via2l0LW1hcmdpbi1zdGFydDoxNnB4O21hcmdpbi1pbmxpbmUtc3RhcnQ6MTZweDstd2Via2l0LW1hcmdpbi1lbmQ6MDttYXJnaW4taW5saW5lLWVuZDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjB9Omhvc3QoLnJhbmdlLWxhYmVsLXBsYWNlbWVudC1maXhlZCkgLmxhYmVsLXRleHQtd3JhcHBlcnstd2Via2l0LW1hcmdpbi1zdGFydDowO21hcmdpbi1pbmxpbmUtc3RhcnQ6MDstd2Via2l0LW1hcmdpbi1lbmQ6MTZweDttYXJnaW4taW5saW5lLWVuZDoxNnB4O21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjB9Omhvc3QoLnJhbmdlLWxhYmVsLXBsYWNlbWVudC1maXhlZCkgLmxhYmVsLXRleHQtd3JhcHBlcnstbXMtZmxleDowIDAgMTAwcHg7ZmxleDowIDAgMTAwcHg7d2lkdGg6MTAwcHg7bWluLXdpZHRoOjEwMHB4O21heC13aWR0aDoyMDBweH06aG9zdCgucmFuZ2UtbGFiZWwtcGxhY2VtZW50LXN0YWNrZWQpIC5yYW5nZS13cmFwcGVyey1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1uOy1tcy1mbGV4LWFsaWduOnN0cmV0Y2g7YWxpZ24taXRlbXM6c3RyZXRjaH06aG9zdCgucmFuZ2UtbGFiZWwtcGxhY2VtZW50LXN0YWNrZWQpIC5sYWJlbC10ZXh0LXdyYXBwZXJ7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmxlZnQgdG9wO3RyYW5zZm9ybS1vcmlnaW46bGVmdCB0b3A7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMC43NSk7dHJhbnNmb3JtOnNjYWxlKDAuNzUpO21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLWJvdHRvbToxNnB4O21heC13aWR0aDpjYWxjKDEwMCUgLyAwLjc1KX06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdCgucmFuZ2UtbGFiZWwtcGxhY2VtZW50LXN0YWNrZWQpIC5sYWJlbC10ZXh0LXdyYXBwZXIsOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pLnJhbmdlLWxhYmVsLXBsYWNlbWVudC1zdGFja2VkIC5sYWJlbC10ZXh0LXdyYXBwZXJ7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOnJpZ2h0IHRvcDt0cmFuc2Zvcm0tb3JpZ2luOnJpZ2h0IHRvcH1Ac3VwcG9ydHMgc2VsZWN0b3IoOmRpcihydGwpKXs6aG9zdCgucmFuZ2UtbGFiZWwtcGxhY2VtZW50LXN0YWNrZWQ6ZGlyKHJ0bCkpIC5sYWJlbC10ZXh0LXdyYXBwZXJ7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOnJpZ2h0IHRvcDt0cmFuc2Zvcm0tb3JpZ2luOnJpZ2h0IHRvcH19Omhvc3QoLmluLWl0ZW0ucmFuZ2UtbGFiZWwtcGxhY2VtZW50LXN0YWNrZWQpIC5sYWJlbC10ZXh0LXdyYXBwZXJ7bWFyZ2luLXRvcDoxMHB4O21hcmdpbi1ib3R0b206MTZweH06aG9zdCguaW4taXRlbS5yYW5nZS1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZCkgLm5hdGl2ZS13cmFwcGVye21hcmdpbi1ib3R0b206MHB4fTpob3N0ey0ta25vYi1ib3JkZXItcmFkaXVzOjUwJTstLWtub2ItYmFja2dyb3VuZDojZmZmZmZmOy0ta25vYi1ib3gtc2hhZG93OjBweCAwLjVweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMHB4IDZweCAxM3B4IHJnYmEoMCwgMCwgMCwgMC4xMik7LS1rbm9iLXNpemU6MjZweDstLWJhci1oZWlnaHQ6NHB4Oy0tYmFyLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXN0ZXAtOTAwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTkwMCwgI2U2ZTZlNikpOy0tYmFyLWJhY2tncm91bmQtYWN0aXZlOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMDA1NGU5KTstLWJhci1ib3JkZXItcmFkaXVzOjJweDstLWhlaWdodDo0MnB4fTpob3N0KC5yYW5nZS1pdGVtLXN0YXJ0LWFkanVzdG1lbnQpey13ZWJraXQtcGFkZGluZy1zdGFydDoyNHB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjI0cHh9Omhvc3QoLnJhbmdlLWl0ZW0tZW5kLWFkanVzdG1lbnQpey13ZWJraXQtcGFkZGluZy1lbmQ6MjRweDtwYWRkaW5nLWlubGluZS1lbmQ6MjRweH06aG9zdCguaW9uLWNvbG9yKSAucmFuZ2UtYmFyLWFjdGl2ZSw6aG9zdCguaW9uLWNvbG9yKSAucmFuZ2UtdGljay1hY3RpdmV7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItYmFzZSl9OjpzbG90dGVkKFtzbG90PXN0YXJ0XSl7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MDttYXJnaW4taW5saW5lLXN0YXJ0OjA7LXdlYmtpdC1tYXJnaW4tZW5kOjE2cHg7bWFyZ2luLWlubGluZS1lbmQ6MTZweDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfTo6c2xvdHRlZChbc2xvdD1lbmRdKXstd2Via2l0LW1hcmdpbi1zdGFydDoxNnB4O21hcmdpbi1pbmxpbmUtc3RhcnQ6MTZweDstd2Via2l0LW1hcmdpbi1lbmQ6MDttYXJnaW4taW5saW5lLWVuZDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjB9Omhvc3QoLnJhbmdlLWhhcy1waW46bm90KC5yYW5nZS1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZCkpe3BhZGRpbmctdG9wOmNhbGMoOHB4ICsgMC43NXJlbSl9Omhvc3QoLnJhbmdlLWhhcy1waW4ucmFuZ2UtbGFiZWwtcGxhY2VtZW50LXN0YWNrZWQpIC5sYWJlbC10ZXh0LXdyYXBwZXJ7bWFyZ2luLWJvdHRvbTpjYWxjKDhweCArIDAuNzVyZW0pfS5yYW5nZS1iYXItYWN0aXZle2JvdHRvbTowO3dpZHRoOmF1dG87YmFja2dyb3VuZDp2YXIoLS1iYXItYmFja2dyb3VuZC1hY3RpdmUpfS5yYW5nZS1iYXItYWN0aXZlLmhhcy10aWNrc3tib3JkZXItcmFkaXVzOjA7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6LTJweDttYXJnaW4taW5saW5lLXN0YXJ0Oi0ycHg7LXdlYmtpdC1tYXJnaW4tZW5kOi0ycHg7bWFyZ2luLWlubGluZS1lbmQ6LTJweH0ucmFuZ2UtdGlja3std2Via2l0LW1hcmdpbi1zdGFydDotMnB4O21hcmdpbi1pbmxpbmUtc3RhcnQ6LTJweDtib3JkZXItcmFkaXVzOjA7cG9zaXRpb246YWJzb2x1dGU7dG9wOjE3cHg7d2lkdGg6NHB4O2hlaWdodDo4cHg7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3Itc3RlcC05MDAsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXN0ZXAtOTAwLCAjZTZlNmU2KSk7cG9pbnRlci1ldmVudHM6bm9uZX0ucmFuZ2UtdGljay1hY3RpdmV7YmFja2dyb3VuZDp2YXIoLS1iYXItYmFja2dyb3VuZC1hY3RpdmUpfS5yYW5nZS1waW57LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwgIDEwMCUsICAwKSBzY2FsZSgwLjAxKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwgIDEwMCUsICAwKSBzY2FsZSgwLjAxKTstd2Via2l0LXBhZGRpbmctc3RhcnQ6OHB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjhweDstd2Via2l0LXBhZGRpbmctZW5kOjhweDtwYWRkaW5nLWlubGluZS1lbmQ6OHB4O3BhZGRpbmctdG9wOjhweDtwYWRkaW5nLWJvdHRvbTo4cHg7bWluLXdpZHRoOjI4cHg7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIDEyMG1zIGVhc2U7dHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAxMjBtcyBlYXNlO3RyYW5zaXRpb246dHJhbnNmb3JtIDEyMG1zIGVhc2U7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMTIwbXMgZWFzZSwgLXdlYmtpdC10cmFuc2Zvcm0gMTIwbXMgZWFzZTtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2NvbG9yOnZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwKTtmb250LXNpemU6MC43NXJlbTt0ZXh0LWFsaWduOmNlbnRlcn0ucmFuZ2Uta25vYi1wcmVzc2VkIC5yYW5nZS1waW4sLnJhbmdlLWtub2ItaGFuZGxlLmlvbi1mb2N1c2VkIC5yYW5nZS1waW57LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwgY2FsYygtMTAwJSArIDExcHgpLCAwKSBzY2FsZSgxKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwgY2FsYygtMTAwJSArIDExcHgpLCAwKSBzY2FsZSgxKX06aG9zdCgucmFuZ2UtZGlzYWJsZWQpe29wYWNpdHk6MC4zfVwiO1xuY29uc3QgcmFuZ2VNZENzcyA9IFwiOmhvc3R7LS1rbm9iLWhhbmRsZS1zaXplOmNhbGModmFyKC0ta25vYi1zaXplKSAqIDIpO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4OjM7ZmxleDozOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LCBpbmhlcml0KTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7ei1pbmRleDoyfTpob3N0KC5yYW5nZS1kaXNhYmxlZCl7cG9pbnRlci1ldmVudHM6bm9uZX06OnNsb3R0ZWQoaW9uLWxhYmVsKXstbXMtZmxleDppbml0aWFsO2ZsZXg6aW5pdGlhbH06OnNsb3R0ZWQoaW9uLWljb25bc2xvdF0pe2ZvbnQtc2l6ZToyNHB4fS5yYW5nZS1zbGlkZXJ7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXg6MTtmbGV4OjE7d2lkdGg6MTAwJTtoZWlnaHQ6dmFyKC0taGVpZ2h0KTtjb250YWluOnNpemUgbGF5b3V0IHN0eWxlO2N1cnNvcjotd2Via2l0LWdyYWI7Y3Vyc29yOmdyYWI7LW1zLXRvdWNoLWFjdGlvbjpwYW4teTt0b3VjaC1hY3Rpb246cGFuLXl9Omhvc3QoLnJhbmdlLXByZXNzZWQpIC5yYW5nZS1zbGlkZXJ7Y3Vyc29yOi13ZWJraXQtZ3JhYmJpbmc7Y3Vyc29yOmdyYWJiaW5nfS5yYW5nZS1waW57cG9zaXRpb246YWJzb2x1dGU7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItYmFzZSk7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KTt0ZXh0LWFsaWduOmNlbnRlcjstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3h9LnJhbmdlLWtub2ItaGFuZGxle3RvcDpjYWxjKCh2YXIoLS1oZWlnaHQpIC0gdmFyKC0ta25vYi1oYW5kbGUtc2l6ZSkpIC8gMik7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6Y2FsYygwcHggLSB2YXIoLS1rbm9iLWhhbmRsZS1zaXplKSAvIDIpO21hcmdpbi1pbmxpbmUtc3RhcnQ6Y2FsYygwcHggLSB2YXIoLS1rbm9iLWhhbmRsZS1zaXplKSAvIDIpO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOmFic29sdXRlOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6dmFyKC0ta25vYi1oYW5kbGUtc2l6ZSk7aGVpZ2h0OnZhcigtLWtub2ItaGFuZGxlLXNpemUpO3RleHQtYWxpZ246Y2VudGVyfS5yYW5nZS1rbm9iLWhhbmRsZXtpbnNldC1pbmxpbmUtc3RhcnQ6MH06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLnJhbmdlLWtub2ItaGFuZGxle2xlZnQ6dW5zZXR9W2Rpcj1ydGxdIC5yYW5nZS1rbm9iLWhhbmRsZXtsZWZ0OnVuc2V0fUBzdXBwb3J0cyBzZWxlY3Rvcig6ZGlyKHJ0bCkpey5yYW5nZS1rbm9iLWhhbmRsZTpkaXIocnRsKXtsZWZ0OnVuc2V0fX0ucmFuZ2Uta25vYi1oYW5kbGU6YWN0aXZlLC5yYW5nZS1rbm9iLWhhbmRsZTpmb2N1c3tvdXRsaW5lOm5vbmV9LnJhbmdlLWJhci1jb250YWluZXJ7Ym9yZGVyLXJhZGl1czp2YXIoLS1iYXItYm9yZGVyLXJhZGl1cyk7dG9wOmNhbGMoKHZhcigtLWhlaWdodCkgLSB2YXIoLS1iYXItaGVpZ2h0KSkgLyAyKTtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2hlaWdodDp2YXIoLS1iYXItaGVpZ2h0KX0ucmFuZ2UtYmFyLWNvbnRhaW5lcntpbnNldC1pbmxpbmUtc3RhcnQ6MH06aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLnJhbmdlLWJhci1jb250YWluZXJ7bGVmdDp1bnNldH1bZGlyPXJ0bF0gLnJhbmdlLWJhci1jb250YWluZXJ7bGVmdDp1bnNldH1Ac3VwcG9ydHMgc2VsZWN0b3IoOmRpcihydGwpKXsucmFuZ2UtYmFyLWNvbnRhaW5lcjpkaXIocnRsKXtsZWZ0OnVuc2V0fX0ucmFuZ2UtYmFye2JvcmRlci1yYWRpdXM6dmFyKC0tYmFyLWJvcmRlci1yYWRpdXMpO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7aGVpZ2h0OnZhcigtLWJhci1oZWlnaHQpO2JhY2tncm91bmQ6dmFyKC0tYmFyLWJhY2tncm91bmQpO3BvaW50ZXItZXZlbnRzOm5vbmV9LnJhbmdlLWtub2J7Ym9yZGVyLXJhZGl1czp2YXIoLS1rbm9iLWJvcmRlci1yYWRpdXMpO3RvcDpjYWxjKDUwJSAtIHZhcigtLWtub2Itc2l6ZSkgLyAyKTtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDp2YXIoLS1rbm9iLXNpemUpO2hlaWdodDp2YXIoLS1rbm9iLXNpemUpO2JhY2tncm91bmQ6dmFyKC0ta25vYi1iYWNrZ3JvdW5kKTstd2Via2l0LWJveC1zaGFkb3c6dmFyKC0ta25vYi1ib3gtc2hhZG93KTtib3gtc2hhZG93OnZhcigtLWtub2ItYm94LXNoYWRvdyk7ei1pbmRleDoyO3BvaW50ZXItZXZlbnRzOm5vbmV9LnJhbmdlLWtub2J7aW5zZXQtaW5saW5lLXN0YXJ0OmNhbGMoNTAlIC0gdmFyKC0ta25vYi1zaXplKSAvIDIpfTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAucmFuZ2Uta25vYntsZWZ0OnVuc2V0fVtkaXI9cnRsXSAucmFuZ2Uta25vYntsZWZ0OnVuc2V0fUBzdXBwb3J0cyBzZWxlY3Rvcig6ZGlyKHJ0bCkpey5yYW5nZS1rbm9iOmRpcihydGwpe2xlZnQ6dW5zZXR9fTpob3N0KC5yYW5nZS1wcmVzc2VkKSAucmFuZ2UtYmFyLWFjdGl2ZXt3aWxsLWNoYW5nZTpsZWZ0LCByaWdodH06aG9zdCguaW4taXRlbSl7d2lkdGg6MTAwJX06aG9zdChbc2xvdD1zdGFydF0pLDpob3N0KFtzbG90PWVuZF0pe3dpZHRoOmF1dG99Omhvc3QoLmluLWl0ZW0pIDo6c2xvdHRlZChpb24tbGFiZWwpey1tcy1mbGV4LWl0ZW0tYWxpZ246Y2VudGVyO2FsaWduLXNlbGY6Y2VudGVyfS5yYW5nZS13cmFwcGVye2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4LXBvc2l0aXZlOjE7ZmxleC1ncm93OjE7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtoZWlnaHQ6aW5oZXJpdH06OnNsb3R0ZWQoW3Nsb3Q9bGFiZWxdKXttYXgtd2lkdGg6MjAwcHg7dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVufS5sYWJlbC10ZXh0LXdyYXBwZXItaGlkZGVue2Rpc3BsYXk6bm9uZX0ubmF0aXZlLXdyYXBwZXJ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtcG9zaXRpdmU6MTtmbGV4LWdyb3c6MTstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyfTpob3N0KC5yYW5nZS1sYWJlbC1wbGFjZW1lbnQtc3RhcnQpIC5yYW5nZS13cmFwcGVyey1tcy1mbGV4LWRpcmVjdGlvbjpyb3c7ZmxleC1kaXJlY3Rpb246cm93fTpob3N0KC5yYW5nZS1sYWJlbC1wbGFjZW1lbnQtc3RhcnQpIC5sYWJlbC10ZXh0LXdyYXBwZXJ7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MDttYXJnaW4taW5saW5lLXN0YXJ0OjA7LXdlYmtpdC1tYXJnaW4tZW5kOjE2cHg7bWFyZ2luLWlubGluZS1lbmQ6MTZweDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfTpob3N0KC5yYW5nZS1sYWJlbC1wbGFjZW1lbnQtZW5kKSAucmFuZ2Utd3JhcHBlcnstbXMtZmxleC1kaXJlY3Rpb246cm93LXJldmVyc2U7ZmxleC1kaXJlY3Rpb246cm93LXJldmVyc2V9Omhvc3QoLnJhbmdlLWxhYmVsLXBsYWNlbWVudC1lbmQpIC5sYWJlbC10ZXh0LXdyYXBwZXJ7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MTZweDttYXJnaW4taW5saW5lLXN0YXJ0OjE2cHg7LXdlYmtpdC1tYXJnaW4tZW5kOjA7bWFyZ2luLWlubGluZS1lbmQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfTpob3N0KC5yYW5nZS1sYWJlbC1wbGFjZW1lbnQtZml4ZWQpIC5sYWJlbC10ZXh0LXdyYXBwZXJ7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MDttYXJnaW4taW5saW5lLXN0YXJ0OjA7LXdlYmtpdC1tYXJnaW4tZW5kOjE2cHg7bWFyZ2luLWlubGluZS1lbmQ6MTZweDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfTpob3N0KC5yYW5nZS1sYWJlbC1wbGFjZW1lbnQtZml4ZWQpIC5sYWJlbC10ZXh0LXdyYXBwZXJ7LW1zLWZsZXg6MCAwIDEwMHB4O2ZsZXg6MCAwIDEwMHB4O3dpZHRoOjEwMHB4O21pbi13aWR0aDoxMDBweDttYXgtd2lkdGg6MjAwcHh9Omhvc3QoLnJhbmdlLWxhYmVsLXBsYWNlbWVudC1zdGFja2VkKSAucmFuZ2Utd3JhcHBlcnstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjstbXMtZmxleC1hbGlnbjpzdHJldGNoO2FsaWduLWl0ZW1zOnN0cmV0Y2h9Omhvc3QoLnJhbmdlLWxhYmVsLXBsYWNlbWVudC1zdGFja2VkKSAubGFiZWwtdGV4dC13cmFwcGVyey13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpsZWZ0IHRvcDt0cmFuc2Zvcm0tb3JpZ2luOmxlZnQgdG9wOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDAuNzUpO3RyYW5zZm9ybTpzY2FsZSgwLjc1KTttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi1ib3R0b206MTZweDttYXgtd2lkdGg6Y2FsYygxMDAlIC8gMC43NSl9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pOmhvc3QoLnJhbmdlLWxhYmVsLXBsYWNlbWVudC1zdGFja2VkKSAubGFiZWwtdGV4dC13cmFwcGVyLDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5yYW5nZS1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZCAubGFiZWwtdGV4dC13cmFwcGVyey13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpyaWdodCB0b3A7dHJhbnNmb3JtLW9yaWdpbjpyaWdodCB0b3B9QHN1cHBvcnRzIHNlbGVjdG9yKDpkaXIocnRsKSl7Omhvc3QoLnJhbmdlLWxhYmVsLXBsYWNlbWVudC1zdGFja2VkOmRpcihydGwpKSAubGFiZWwtdGV4dC13cmFwcGVyey13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpyaWdodCB0b3A7dHJhbnNmb3JtLW9yaWdpbjpyaWdodCB0b3B9fTpob3N0KC5pbi1pdGVtLnJhbmdlLWxhYmVsLXBsYWNlbWVudC1zdGFja2VkKSAubGFiZWwtdGV4dC13cmFwcGVye21hcmdpbi10b3A6MTBweDttYXJnaW4tYm90dG9tOjE2cHh9Omhvc3QoLmluLWl0ZW0ucmFuZ2UtbGFiZWwtcGxhY2VtZW50LXN0YWNrZWQpIC5uYXRpdmUtd3JhcHBlcnttYXJnaW4tYm90dG9tOjBweH06aG9zdHstLWtub2ItYm9yZGVyLXJhZGl1czo1MCU7LS1rbm9iLWJhY2tncm91bmQ6dmFyKC0tYmFyLWJhY2tncm91bmQtYWN0aXZlKTstLWtub2ItYm94LXNoYWRvdzpub25lOy0ta25vYi1zaXplOjE4cHg7LS1iYXItaGVpZ2h0OjJweDstLWJhci1iYWNrZ3JvdW5kOnJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiLCAwLCA4NCwgMjMzKSwgMC4yNik7LS1iYXItYmFja2dyb3VuZC1hY3RpdmU6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMwMDU0ZTkpOy0tYmFyLWJvcmRlci1yYWRpdXM6MDstLWhlaWdodDo0MnB4Oy0tcGluLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMwMDU0ZTkpOy0tcGluLWNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LCAjZmZmKX06OnNsb3R0ZWQoOm5vdChpb24taWNvbilbc2xvdD1zdGFydF0pLDo6c2xvdHRlZCg6bm90KGlvbi1pY29uKVtzbG90PWVuZF0pLC5uYXRpdmUtd3JhcHBlcntmb250LXNpemU6MC43NXJlbX06aG9zdCgucmFuZ2UtaXRlbS1zdGFydC1hZGp1c3RtZW50KXstd2Via2l0LXBhZGRpbmctc3RhcnQ6MThweDtwYWRkaW5nLWlubGluZS1zdGFydDoxOHB4fTpob3N0KC5yYW5nZS1pdGVtLWVuZC1hZGp1c3RtZW50KXstd2Via2l0LXBhZGRpbmctZW5kOjE4cHg7cGFkZGluZy1pbmxpbmUtZW5kOjE4cHh9Omhvc3QoLmlvbi1jb2xvcikgLnJhbmdlLWJhcntiYWNrZ3JvdW5kOnJnYmEodmFyKC0taW9uLWNvbG9yLWJhc2UtcmdiKSwgMC4yNil9Omhvc3QoLmlvbi1jb2xvcikgLnJhbmdlLWJhci1hY3RpdmUsOmhvc3QoLmlvbi1jb2xvcikgLnJhbmdlLWtub2IsOmhvc3QoLmlvbi1jb2xvcikgLnJhbmdlLWtub2I6OmJlZm9yZSw6aG9zdCguaW9uLWNvbG9yKSAucmFuZ2UtcGluLDpob3N0KC5pb24tY29sb3IpIC5yYW5nZS1waW46OmJlZm9yZSw6aG9zdCguaW9uLWNvbG9yKSAucmFuZ2UtdGlja3tiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1iYXNlKTtjb2xvcjp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpfTo6c2xvdHRlZChbc2xvdD1zdGFydF0pey13ZWJraXQtbWFyZ2luLXN0YXJ0OjA7bWFyZ2luLWlubGluZS1zdGFydDowOy13ZWJraXQtbWFyZ2luLWVuZDoxNHB4O21hcmdpbi1pbmxpbmUtZW5kOjE0cHg7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MH06OnNsb3R0ZWQoW3Nsb3Q9ZW5kXSl7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MTRweDttYXJnaW4taW5saW5lLXN0YXJ0OjE0cHg7LXdlYmtpdC1tYXJnaW4tZW5kOjA7bWFyZ2luLWlubGluZS1lbmQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfTpob3N0KC5yYW5nZS1oYXMtcGluOm5vdCgucmFuZ2UtbGFiZWwtcGxhY2VtZW50LXN0YWNrZWQpKXtwYWRkaW5nLXRvcDoxLjc1cmVtfTpob3N0KC5yYW5nZS1oYXMtcGluLnJhbmdlLWxhYmVsLXBsYWNlbWVudC1zdGFja2VkKSAubGFiZWwtdGV4dC13cmFwcGVye21hcmdpbi1ib3R0b206MS43NXJlbX0ucmFuZ2UtYmFyLWFjdGl2ZXtib3R0b206MDt3aWR0aDphdXRvO2JhY2tncm91bmQ6dmFyKC0tYmFyLWJhY2tncm91bmQtYWN0aXZlKX0ucmFuZ2Uta25vYnstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgwLjY3KTt0cmFuc2Zvcm06c2NhbGUoMC42Nyk7LXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOjEyMG1zO3RyYW5zaXRpb24tZHVyYXRpb246MTIwbXM7LXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OmJhY2tncm91bmQtY29sb3IsIGJvcmRlciwgLXdlYmtpdC10cmFuc2Zvcm07dHJhbnNpdGlvbi1wcm9wZXJ0eTpiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXIsIC13ZWJraXQtdHJhbnNmb3JtO3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtLCBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXI7dHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm0sIGJhY2tncm91bmQtY29sb3IsIGJvcmRlciwgLXdlYmtpdC10cmFuc2Zvcm07LXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlO3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2U7ei1pbmRleDoyfS5yYW5nZS1rbm9iOjpiZWZvcmV7Ym9yZGVyLXJhZGl1czo1MCU7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6dmFyKC0ta25vYi1zaXplKTtoZWlnaHQ6dmFyKC0ta25vYi1zaXplKTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7LXdlYmtpdC10cmFuc2l0aW9uOjAuMjY3cyBjdWJpYy1iZXppZXIoMCwgMCwgMC41OCwgMSk7dHJhbnNpdGlvbjowLjI2N3MgY3ViaWMtYmV6aWVyKDAsIDAsIDAuNTgsIDEpO2JhY2tncm91bmQ6dmFyKC0ta25vYi1iYWNrZ3JvdW5kKTtjb250ZW50OlxcXCJcXFwiO29wYWNpdHk6MC4xMztwb2ludGVyLWV2ZW50czpub25lfS5yYW5nZS1rbm9iOjpiZWZvcmV7aW5zZXQtaW5saW5lLXN0YXJ0OjB9LnJhbmdlLXRpY2t7cG9zaXRpb246YWJzb2x1dGU7dG9wOmNhbGMoKHZhcigtLWhlaWdodCkgLSB2YXIoLS1iYXItaGVpZ2h0KSkgLyAyKTt3aWR0aDp2YXIoLS1iYXItaGVpZ2h0KTtoZWlnaHQ6dmFyKC0tYmFyLWhlaWdodCk7YmFja2dyb3VuZDp2YXIoLS1iYXItYmFja2dyb3VuZC1hY3RpdmUpO3otaW5kZXg6MTtwb2ludGVyLWV2ZW50czpub25lfS5yYW5nZS10aWNrLWFjdGl2ZXtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50fS5yYW5nZS1waW57cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjhweDtwYWRkaW5nLWJvdHRvbTo4cHg7Ym9yZGVyLXJhZGl1czo1MCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwgIDAsICAwKSBzY2FsZSgwLjAxKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwgIDAsICAwKSBzY2FsZSgwLjAxKTtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6MS43NXJlbTtoZWlnaHQ6MS43NXJlbTstd2Via2l0LXRyYW5zaXRpb246YmFja2dyb3VuZCAxMjBtcyBlYXNlLCAtd2Via2l0LXRyYW5zZm9ybSAxMjBtcyBlYXNlO3RyYW5zaXRpb246YmFja2dyb3VuZCAxMjBtcyBlYXNlLCAtd2Via2l0LXRyYW5zZm9ybSAxMjBtcyBlYXNlO3RyYW5zaXRpb246dHJhbnNmb3JtIDEyMG1zIGVhc2UsIGJhY2tncm91bmQgMTIwbXMgZWFzZTt0cmFuc2l0aW9uOnRyYW5zZm9ybSAxMjBtcyBlYXNlLCBiYWNrZ3JvdW5kIDEyMG1zIGVhc2UsIC13ZWJraXQtdHJhbnNmb3JtIDEyMG1zIGVhc2U7YmFja2dyb3VuZDp2YXIoLS1waW4tYmFja2dyb3VuZCk7Y29sb3I6dmFyKC0tcGluLWNvbG9yKX0ucmFuZ2UtcGluOjpiZWZvcmV7Ym90dG9tOi0xcHg7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6LTEzcHg7bWFyZ2luLWlubGluZS1zdGFydDotMTNweDtib3JkZXItcmFkaXVzOjUwJSA1MCUgNTAlIDA7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MjZweDtoZWlnaHQ6MjZweDstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7LXdlYmtpdC10cmFuc2l0aW9uOmJhY2tncm91bmQgMTIwbXMgZWFzZTt0cmFuc2l0aW9uOmJhY2tncm91bmQgMTIwbXMgZWFzZTtiYWNrZ3JvdW5kOnZhcigtLXBpbi1iYWNrZ3JvdW5kKTtjb250ZW50OlxcXCJcXFwiO3otaW5kZXg6LTF9LnJhbmdlLXBpbjo6YmVmb3Jle2luc2V0LWlubGluZS1zdGFydDo1MCV9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5yYW5nZS1waW46OmJlZm9yZXtsZWZ0OnVuc2V0fVtkaXI9cnRsXSAucmFuZ2UtcGluOjpiZWZvcmV7bGVmdDp1bnNldH1Ac3VwcG9ydHMgc2VsZWN0b3IoOmRpcihydGwpKXsucmFuZ2UtcGluOjpiZWZvcmU6ZGlyKHJ0bCl7bGVmdDp1bnNldH19LnJhbmdlLWtub2ItcHJlc3NlZCAucmFuZ2UtcGluLC5yYW5nZS1rbm9iLWhhbmRsZS5pb24tZm9jdXNlZCAucmFuZ2UtcGluey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsIGNhbGMoLTEwMCUgKyA0cHgpLCAwKSBzY2FsZSgxKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwgY2FsYygtMTAwJSArIDRweCksIDApIHNjYWxlKDEpfUBtZWRpYSAoYW55LWhvdmVyOiBob3Zlcil7LnJhbmdlLWtub2ItaGFuZGxlOmhvdmVyIC5yYW5nZS1rbm9iOmJlZm9yZXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgyKTt0cmFuc2Zvcm06c2NhbGUoMik7b3BhY2l0eTowLjEzfX0ucmFuZ2Uta25vYi1oYW5kbGUuaW9uLWFjdGl2YXRlZCAucmFuZ2Uta25vYjpiZWZvcmUsLnJhbmdlLWtub2ItaGFuZGxlLmlvbi1mb2N1c2VkIC5yYW5nZS1rbm9iOmJlZm9yZSwucmFuZ2Uta25vYi1oYW5kbGUucmFuZ2Uta25vYi1wcmVzc2VkIC5yYW5nZS1rbm9iOmJlZm9yZXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgyKTt0cmFuc2Zvcm06c2NhbGUoMil9LnJhbmdlLWtub2ItaGFuZGxlLmlvbi1mb2N1c2VkIC5yYW5nZS1rbm9iOjpiZWZvcmV7b3BhY2l0eTowLjEzfS5yYW5nZS1rbm9iLWhhbmRsZS5pb24tYWN0aXZhdGVkIC5yYW5nZS1rbm9iOjpiZWZvcmUsLnJhbmdlLWtub2ItaGFuZGxlLnJhbmdlLWtub2ItcHJlc3NlZCAucmFuZ2Uta25vYjo6YmVmb3Jle29wYWNpdHk6MC4yNX06aG9zdCg6bm90KC5yYW5nZS1oYXMtcGluKSkgLnJhbmdlLWtub2ItcHJlc3NlZCAucmFuZ2Uta25vYiw6aG9zdCg6bm90KC5yYW5nZS1oYXMtcGluKSkgLnJhbmdlLWtub2ItaGFuZGxlLmlvbi1mb2N1c2VkIC5yYW5nZS1rbm9iey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX06aG9zdCgucmFuZ2UtZGlzYWJsZWQpIC5yYW5nZS1iYXItYWN0aXZlLDpob3N0KC5yYW5nZS1kaXNhYmxlZCkgLnJhbmdlLWJhciw6aG9zdCgucmFuZ2UtZGlzYWJsZWQpIC5yYW5nZS10aWNre2JhY2tncm91bmQtY29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtMjUwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTI1MCwgI2JmYmZiZikpfTpob3N0KC5yYW5nZS1kaXNhYmxlZCkgLnJhbmdlLWtub2J7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMC41NSk7dHJhbnNmb3JtOnNjYWxlKDAuNTUpO291dGxpbmU6NXB4IHNvbGlkICNmZmY7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1pb24tY29sb3Itc3RlcC0yNTAsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXN0ZXAtMjUwLCAjYmZiZmJmKSl9Omhvc3QoLnJhbmdlLWRpc2FibGVkKSAubGFiZWwtdGV4dC13cmFwcGVyLDpob3N0KC5yYW5nZS1kaXNhYmxlZCkgOjpzbG90dGVkKFtzbG90PXN0YXJ0XSksOmhvc3QoLnJhbmdlLWRpc2FibGVkKSA6OnNsb3R0ZWQoW3Nsb3Q9ZW5kXSl7b3BhY2l0eTowLjM4fVwiO1xuY29uc3QgUmFuZ2UgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuaW9uQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25DaGFuZ2VcIiwgNyk7XG4gICAgdGhpcy5pb25JbnB1dCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uSW5wdXRcIiwgNyk7XG4gICAgdGhpcy5pb25Gb2N1cyA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uRm9jdXNcIiwgNyk7XG4gICAgdGhpcy5pb25CbHVyID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25CbHVyXCIsIDcpO1xuICAgIHRoaXMuaW9uS25vYk1vdmVTdGFydCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uS25vYk1vdmVTdGFydFwiLCA3KTtcbiAgICB0aGlzLmlvbktub2JNb3ZlRW5kID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Lbm9iTW92ZUVuZFwiLCA3KTtcbiAgICB0aGlzLnJhbmdlSWQgPSBgaW9uLXItJHtyYW5nZUlkcysrfWA7XG4gICAgdGhpcy5kaWRMb2FkID0gZmFsc2U7XG4gICAgdGhpcy5ub1VwZGF0ZSA9IGZhbHNlO1xuICAgIHRoaXMuaGFzRm9jdXMgPSBmYWxzZTtcbiAgICB0aGlzLmluaGVyaXRlZEF0dHJpYnV0ZXMgPSB7fTtcbiAgICB0aGlzLmNvbnRlbnRFbCA9IG51bGw7XG4gICAgdGhpcy5pbml0aWFsQ29udGVudFNjcm9sbFkgPSB0cnVlO1xuICAgIHRoaXMucmF0aW9BID0gMDtcbiAgICB0aGlzLnJhdGlvQiA9IDA7XG4gICAgLyoqXG4gICAgICogVGhlIG5hbWUgb2YgdGhlIGNvbnRyb2wsIHdoaWNoIGlzIHN1Ym1pdHRlZCB3aXRoIHRoZSBmb3JtIGRhdGEuXG4gICAgICovXG4gICAgdGhpcy5uYW1lID0gdGhpcy5yYW5nZUlkO1xuICAgIC8qKlxuICAgICAqIFNob3cgdHdvIGtub2JzLlxuICAgICAqL1xuICAgIHRoaXMuZHVhbEtub2JzID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogTWluaW11bSBpbnRlZ2VyIHZhbHVlIG9mIHRoZSByYW5nZS5cbiAgICAgKi9cbiAgICB0aGlzLm1pbiA9IDA7XG4gICAgLyoqXG4gICAgICogTWF4aW11bSBpbnRlZ2VyIHZhbHVlIG9mIHRoZSByYW5nZS5cbiAgICAgKi9cbiAgICB0aGlzLm1heCA9IDEwMDtcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIGEgcGluIHdpdGggaW50ZWdlciB2YWx1ZSBpcyBzaG93biB3aGVuIHRoZSBrbm9iXG4gICAgICogaXMgcHJlc3NlZC5cbiAgICAgKi9cbiAgICB0aGlzLnBpbiA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIEEgY2FsbGJhY2sgdXNlZCB0byBmb3JtYXQgdGhlIHBpbiB0ZXh0LlxuICAgICAqIEJ5IGRlZmF1bHQgdGhlIHBpbiB0ZXh0IGlzIHNldCB0byBgTWF0aC5yb3VuZCh2YWx1ZSlgLlxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvdHJvdWJsZXNob290aW5nL3J1bnRpbWUjYWNjZXNzaW5nLXRoaXNcbiAgICAgKiBpZiB5b3UgbmVlZCB0byBhY2Nlc3MgYHRoaXNgIGZyb20gd2l0aGluIHRoZSBjYWxsYmFjay5cbiAgICAgKi9cbiAgICB0aGlzLnBpbkZvcm1hdHRlciA9IHZhbHVlID0+IE1hdGgucm91bmQodmFsdWUpO1xuICAgIC8qKlxuICAgICAqIElmIGB0cnVlYCwgdGhlIGtub2Igc25hcHMgdG8gdGljayBtYXJrcyBldmVubHkgc3BhY2VkIGJhc2VkXG4gICAgICogb24gdGhlIHN0ZXAgcHJvcGVydHkgdmFsdWUuXG4gICAgICovXG4gICAgdGhpcy5zbmFwcyA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIFNwZWNpZmllcyB0aGUgdmFsdWUgZ3JhbnVsYXJpdHkuXG4gICAgICovXG4gICAgdGhpcy5zdGVwID0gMTtcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIHRpY2sgbWFya3MgYXJlIGRpc3BsYXllZCBiYXNlZCBvbiB0aGUgc3RlcCB2YWx1ZS5cbiAgICAgKiBPbmx5IGFwcGxpZXMgd2hlbiBgc25hcHNgIGlzIGB0cnVlYC5cbiAgICAgKi9cbiAgICB0aGlzLnRpY2tzID0gdHJ1ZTtcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIHRoZSB1c2VyIGNhbm5vdCBpbnRlcmFjdCB3aXRoIHRoZSByYW5nZS5cbiAgICAgKi9cbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogdGhlIHZhbHVlIG9mIHRoZSByYW5nZS5cbiAgICAgKi9cbiAgICB0aGlzLnZhbHVlID0gMDtcbiAgICAvKipcbiAgICAgKiBDb21wYXJlcyB0d28gUmFuZ2VWYWx1ZSBpbnB1dHMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGRpZmZlcmVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBuZXdWYWwgLSBUaGUgbmV3IHZhbHVlLlxuICAgICAqIEBwYXJhbSBvbGRWYWwgLSBUaGUgb2xkIHZhbHVlLlxuICAgICAqIEByZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBkaWZmZXJlbnQsIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIHRoaXMuY29tcGFyZVZhbHVlcyA9IChuZXdWYWwsIG9sZFZhbCkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBuZXdWYWwgPT09ICdvYmplY3QnICYmIHR5cGVvZiBvbGRWYWwgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXdWYWwubG93ZXIgIT09IG9sZFZhbC5sb3dlciB8fCBuZXdWYWwudXBwZXIgIT09IG9sZFZhbC51cHBlcjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXdWYWwgIT09IG9sZFZhbDtcbiAgICB9O1xuICAgIHRoaXMuY2xhbXBCb3VuZHMgPSB2YWx1ZSA9PiB7XG4gICAgICByZXR1cm4gY2xhbXAodGhpcy5taW4sIHZhbHVlLCB0aGlzLm1heCk7XG4gICAgfTtcbiAgICB0aGlzLmVuc3VyZVZhbHVlSW5Cb3VuZHMgPSB2YWx1ZSA9PiB7XG4gICAgICBpZiAodGhpcy5kdWFsS25vYnMpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBsb3dlcjogdGhpcy5jbGFtcEJvdW5kcyh2YWx1ZS5sb3dlciksXG4gICAgICAgICAgdXBwZXI6IHRoaXMuY2xhbXBCb3VuZHModmFsdWUudXBwZXIpXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5jbGFtcEJvdW5kcyh2YWx1ZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBXaGVyZSB0byBwbGFjZSB0aGUgbGFiZWwgcmVsYXRpdmUgdG8gdGhlIHJhbmdlLlxuICAgICAqIGBcInN0YXJ0XCJgOiBUaGUgbGFiZWwgd2lsbCBhcHBlYXIgdG8gdGhlIGxlZnQgb2YgdGhlIHJhbmdlIGluIExUUiBhbmQgdG8gdGhlIHJpZ2h0IGluIFJUTC5cbiAgICAgKiBgXCJlbmRcImA6IFRoZSBsYWJlbCB3aWxsIGFwcGVhciB0byB0aGUgcmlnaHQgb2YgdGhlIHJhbmdlIGluIExUUiBhbmQgdG8gdGhlIGxlZnQgaW4gUlRMLlxuICAgICAqIGBcImZpeGVkXCJgOiBUaGUgbGFiZWwgaGFzIHRoZSBzYW1lIGJlaGF2aW9yIGFzIGBcInN0YXJ0XCJgIGV4Y2VwdCBpdCBhbHNvIGhhcyBhIGZpeGVkIHdpZHRoLiBMb25nIHRleHQgd2lsbCBiZSB0cnVuY2F0ZWQgd2l0aCBlbGxpcHNlcyAoXCIuLi5cIikuXG4gICAgICogYFwic3RhY2tlZFwiYDogVGhlIGxhYmVsIHdpbGwgYXBwZWFyIGFib3ZlIHRoZSByYW5nZSByZWdhcmRsZXNzIG9mIHRoZSBkaXJlY3Rpb24uXG4gICAgICovXG4gICAgdGhpcy5sYWJlbFBsYWNlbWVudCA9ICdzdGFydCc7XG4gICAgdGhpcy5zZXR1cEdlc3R1cmUgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCByYW5nZVNsaWRlciA9IHRoaXMucmFuZ2VTbGlkZXI7XG4gICAgICBpZiAocmFuZ2VTbGlkZXIpIHtcbiAgICAgICAgdGhpcy5nZXN0dXJlID0gKGF3YWl0IGltcG9ydCgnLi9pbmRleC1DZmdCRjFTRS5qcycpKS5jcmVhdGVHZXN0dXJlKHtcbiAgICAgICAgICBlbDogcmFuZ2VTbGlkZXIsXG4gICAgICAgICAgZ2VzdHVyZU5hbWU6ICdyYW5nZScsXG4gICAgICAgICAgZ2VzdHVyZVByaW9yaXR5OiAxMDAsXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogUHJvdmlkZSBhIHRocmVzaG9sZCBzaW5jZSB0aGUgZHJhZyBtb3ZlbWVudFxuICAgICAgICAgICAqIG1pZ2h0IGJlIGEgdXNlciBzY3JvbGxpbmcgdGhlIHZpZXcuXG4gICAgICAgICAgICogSWYgdGhpcyBpcyB0cnVlLCB0aGVuIHRoZSByYW5nZVxuICAgICAgICAgICAqIHNob3VsZCBub3QgbW92ZS5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICB0aHJlc2hvbGQ6IDEwLFxuICAgICAgICAgIG9uU3RhcnQ6ICgpID0+IHRoaXMub25TdGFydCgpLFxuICAgICAgICAgIG9uTW92ZTogZXYgPT4gdGhpcy5vbk1vdmUoZXYpLFxuICAgICAgICAgIG9uRW5kOiBldiA9PiB0aGlzLm9uRW5kKGV2KVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5nZXN0dXJlLmVuYWJsZSghdGhpcy5kaXNhYmxlZCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUtleWJvYXJkID0gKGtub2IsIGlzSW5jcmVhc2UpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZW5zdXJlVmFsdWVJbkJvdW5kc1xuICAgICAgfSA9IHRoaXM7XG4gICAgICBsZXQgc3RlcCA9IHRoaXMuc3RlcDtcbiAgICAgIHN0ZXAgPSBzdGVwID4gMCA/IHN0ZXAgOiAxO1xuICAgICAgc3RlcCA9IHN0ZXAgLyAodGhpcy5tYXggLSB0aGlzLm1pbik7XG4gICAgICBpZiAoIWlzSW5jcmVhc2UpIHtcbiAgICAgICAgc3RlcCAqPSAtMTtcbiAgICAgIH1cbiAgICAgIGlmIChrbm9iID09PSAnQScpIHtcbiAgICAgICAgdGhpcy5yYXRpb0EgPSBjbGFtcCgwLCB0aGlzLnJhdGlvQSArIHN0ZXAsIDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yYXRpb0IgPSBjbGFtcCgwLCB0aGlzLnJhdGlvQiArIHN0ZXAsIDEpO1xuICAgICAgfVxuICAgICAgdGhpcy5pb25Lbm9iTW92ZVN0YXJ0LmVtaXQoe1xuICAgICAgICB2YWx1ZTogZW5zdXJlVmFsdWVJbkJvdW5kcyh0aGlzLnZhbHVlKVxuICAgICAgfSk7XG4gICAgICB0aGlzLnVwZGF0ZVZhbHVlKCk7XG4gICAgICB0aGlzLmVtaXRWYWx1ZUNoYW5nZSgpO1xuICAgICAgdGhpcy5pb25Lbm9iTW92ZUVuZC5lbWl0KHtcbiAgICAgICAgdmFsdWU6IGVuc3VyZVZhbHVlSW5Cb3VuZHModGhpcy52YWx1ZSlcbiAgICAgIH0pO1xuICAgIH07XG4gICAgdGhpcy5vbkJsdXIgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5oYXNGb2N1cykge1xuICAgICAgICB0aGlzLmhhc0ZvY3VzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaW9uQmx1ci5lbWl0KCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLm9uRm9jdXMgPSAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaGFzRm9jdXMpIHtcbiAgICAgICAgdGhpcy5oYXNGb2N1cyA9IHRydWU7XG4gICAgICAgIHRoaXMuaW9uRm9jdXMuZW1pdCgpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5vbktub2JGb2N1cyA9IGtub2IgPT4ge1xuICAgICAgaWYgKCF0aGlzLmhhc0ZvY3VzKSB7XG4gICAgICAgIHRoaXMuaGFzRm9jdXMgPSB0cnVlO1xuICAgICAgICB0aGlzLmlvbkZvY3VzLmVtaXQoKTtcbiAgICAgIH1cbiAgICAgIC8vIE1hbnVhbGx5IG1hbmFnZSBpb24tZm9jdXNlZCBjbGFzcyBmb3IgZHVhbCBrbm9ic1xuICAgICAgaWYgKHRoaXMuZHVhbEtub2JzICYmIHRoaXMuZWwuc2hhZG93Um9vdCkge1xuICAgICAgICBjb25zdCBrbm9iQSA9IHRoaXMuZWwuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcucmFuZ2Uta25vYi1hJyk7XG4gICAgICAgIGNvbnN0IGtub2JCID0gdGhpcy5lbC5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJy5yYW5nZS1rbm9iLWInKTtcbiAgICAgICAgLy8gUmVtb3ZlIGlvbi1mb2N1c2VkIGZyb20gYm90aCBrbm9icyBmaXJzdFxuICAgICAgICBrbm9iQSA9PT0gbnVsbCB8fCBrbm9iQSA9PT0gdm9pZCAwID8gdm9pZCAwIDoga25vYkEuY2xhc3NMaXN0LnJlbW92ZSgnaW9uLWZvY3VzZWQnKTtcbiAgICAgICAga25vYkIgPT09IG51bGwgfHwga25vYkIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGtub2JCLmNsYXNzTGlzdC5yZW1vdmUoJ2lvbi1mb2N1c2VkJyk7XG4gICAgICAgIC8vIEFkZCBpb24tZm9jdXNlZCBvbmx5IHRvIHRoZSBmb2N1c2VkIGtub2JcbiAgICAgICAgY29uc3QgZm9jdXNlZEtub2JFbCA9IGtub2IgPT09ICdBJyA/IGtub2JBIDoga25vYkI7XG4gICAgICAgIGZvY3VzZWRLbm9iRWwgPT09IG51bGwgfHwgZm9jdXNlZEtub2JFbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZm9jdXNlZEtub2JFbC5jbGFzc0xpc3QuYWRkKCdpb24tZm9jdXNlZCcpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5vbktub2JCbHVyID0gKCkgPT4ge1xuICAgICAgLy8gQ2hlY2sgaWYgZm9jdXMgaXMgbW92aW5nIHRvIGFub3RoZXIga25vYiB3aXRoaW4gdGhlIHNhbWUgcmFuZ2VcbiAgICAgIC8vIGJ5IGRlbGF5aW5nIHRoZSByZXNldCB0byBhbGxvdyB0aGUgbmV3IGZvY3VzIHRvIHJlZ2lzdGVyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBhY3RpdmVFbGVtZW50ID0gKF9hID0gdGhpcy5lbC5zaGFkb3dSb290KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYWN0aXZlRWxlbWVudDtcbiAgICAgICAgY29uc3QgaXNTdGlsbEZvY3VzZWRPbktub2IgPSBhY3RpdmVFbGVtZW50ICYmIGFjdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdyYW5nZS1rbm9iLWhhbmRsZScpO1xuICAgICAgICBpZiAoIWlzU3RpbGxGb2N1c2VkT25Lbm9iKSB7XG4gICAgICAgICAgaWYgKHRoaXMuaGFzRm9jdXMpIHtcbiAgICAgICAgICAgIHRoaXMuaGFzRm9jdXMgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaW9uQmx1ci5lbWl0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFJlbW92ZSBpb24tZm9jdXNlZCBmcm9tIGJvdGgga25vYnMgd2hlbiBmb2N1cyBsZWF2ZXMgdGhlIHJhbmdlXG4gICAgICAgICAgaWYgKHRoaXMuZHVhbEtub2JzICYmIHRoaXMuZWwuc2hhZG93Um9vdCkge1xuICAgICAgICAgICAgY29uc3Qga25vYkEgPSB0aGlzLmVsLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLnJhbmdlLWtub2ItYScpO1xuICAgICAgICAgICAgY29uc3Qga25vYkIgPSB0aGlzLmVsLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLnJhbmdlLWtub2ItYicpO1xuICAgICAgICAgICAga25vYkEgPT09IG51bGwgfHwga25vYkEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGtub2JBLmNsYXNzTGlzdC5yZW1vdmUoJ2lvbi1mb2N1c2VkJyk7XG4gICAgICAgICAgICBrbm9iQiA9PT0gbnVsbCB8fCBrbm9iQiA9PT0gdm9pZCAwID8gdm9pZCAwIDoga25vYkIuY2xhc3NMaXN0LnJlbW92ZSgnaW9uLWZvY3VzZWQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIDApO1xuICAgIH07XG4gIH1cbiAgZGVib3VuY2VDaGFuZ2VkKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlvbklucHV0LFxuICAgICAgZGVib3VuY2UsXG4gICAgICBvcmlnaW5hbElvbklucHV0XG4gICAgfSA9IHRoaXM7XG4gICAgLyoqXG4gICAgICogSWYgZGVib3VuY2UgaXMgdW5kZWZpbmVkLCB3ZSBoYXZlIHRvIG1hbnVhbGx5IHJldmVydCB0aGUgaW9uSW5wdXQgZW1pdHRlciBpbiBjYXNlXG4gICAgICogZGVib3VuY2UgdXNlZCB0byBiZSBzZXQgdG8gYSBudW1iZXIuIE90aGVyd2lzZSwgdGhlIGV2ZW50IHdvdWxkIHN0YXkgZGVib3VuY2VkLlxuICAgICAqL1xuICAgIHRoaXMuaW9uSW5wdXQgPSBkZWJvdW5jZSA9PT0gdW5kZWZpbmVkID8gb3JpZ2luYWxJb25JbnB1dCAhPT0gbnVsbCAmJiBvcmlnaW5hbElvbklucHV0ICE9PSB2b2lkIDAgPyBvcmlnaW5hbElvbklucHV0IDogaW9uSW5wdXQgOiBkZWJvdW5jZUV2ZW50KGlvbklucHV0LCBkZWJvdW5jZSk7XG4gIH1cbiAgbWluQ2hhbmdlZChuZXdWYWx1ZSkge1xuICAgIGlmICghaXNTYWZlTnVtYmVyKG5ld1ZhbHVlKSkge1xuICAgICAgdGhpcy5taW4gPSAwO1xuICAgIH1cbiAgICBpZiAoIXRoaXMubm9VcGRhdGUpIHtcbiAgICAgIHRoaXMudXBkYXRlUmF0aW8oKTtcbiAgICB9XG4gIH1cbiAgbWF4Q2hhbmdlZChuZXdWYWx1ZSkge1xuICAgIGlmICghaXNTYWZlTnVtYmVyKG5ld1ZhbHVlKSkge1xuICAgICAgdGhpcy5tYXggPSAxMDA7XG4gICAgfVxuICAgIGlmICghdGhpcy5ub1VwZGF0ZSkge1xuICAgICAgdGhpcy51cGRhdGVSYXRpbygpO1xuICAgIH1cbiAgfVxuICBzdGVwQ2hhbmdlZChuZXdWYWx1ZSkge1xuICAgIGlmICghaXNTYWZlTnVtYmVyKG5ld1ZhbHVlKSkge1xuICAgICAgdGhpcy5zdGVwID0gMTtcbiAgICB9XG4gIH1cbiAgYWN0aXZlQmFyU3RhcnRDaGFuZ2VkKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGFjdGl2ZUJhclN0YXJ0XG4gICAgfSA9IHRoaXM7XG4gICAgaWYgKGFjdGl2ZUJhclN0YXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChhY3RpdmVCYXJTdGFydCA+IHRoaXMubWF4KSB7XG4gICAgICAgIHByaW50SW9uV2FybmluZyhgW2lvbi1yYW5nZV0gLSBUaGUgdmFsdWUgb2YgYWN0aXZlQmFyU3RhcnQgKCR7YWN0aXZlQmFyU3RhcnR9KSBpcyBncmVhdGVyIHRoYW4gdGhlIG1heCAoJHt0aGlzLm1heH0pLiBWYWxpZCB2YWx1ZXMgYXJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byB0aGUgbWluIHZhbHVlIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gdGhlIG1heCB2YWx1ZS5gLCB0aGlzLmVsKTtcbiAgICAgICAgdGhpcy5hY3RpdmVCYXJTdGFydCA9IHRoaXMubWF4O1xuICAgICAgfSBlbHNlIGlmIChhY3RpdmVCYXJTdGFydCA8IHRoaXMubWluKSB7XG4gICAgICAgIHByaW50SW9uV2FybmluZyhgW2lvbi1yYW5nZV0gLSBUaGUgdmFsdWUgb2YgYWN0aXZlQmFyU3RhcnQgKCR7YWN0aXZlQmFyU3RhcnR9KSBpcyBsZXNzIHRoYW4gdGhlIG1pbiAoJHt0aGlzLm1pbn0pLiBWYWxpZCB2YWx1ZXMgYXJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byB0aGUgbWluIHZhbHVlIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gdGhlIG1heCB2YWx1ZS5gLCB0aGlzLmVsKTtcbiAgICAgICAgdGhpcy5hY3RpdmVCYXJTdGFydCA9IHRoaXMubWluO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBkaXNhYmxlZENoYW5nZWQoKSB7XG4gICAgaWYgKHRoaXMuZ2VzdHVyZSkge1xuICAgICAgdGhpcy5nZXN0dXJlLmVuYWJsZSghdGhpcy5kaXNhYmxlZCk7XG4gICAgfVxuICB9XG4gIHZhbHVlQ2hhbmdlZChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICBjb25zdCB2YWx1ZXNDaGFuZ2VkID0gdGhpcy5jb21wYXJlVmFsdWVzKG5ld1ZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgaWYgKHZhbHVlc0NoYW5nZWQpIHtcbiAgICAgIHRoaXMuaW9uSW5wdXQuZW1pdCh7XG4gICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLm5vVXBkYXRlKSB7XG4gICAgICB0aGlzLnVwZGF0ZVJhdGlvKCk7XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIC8qKlxuICAgICAqIElmIHVzZXIgaGFzIGN1c3RvbSBJRCBzZXQgdGhlbiB3ZSBzaG91bGRcbiAgICAgKiBub3QgYXNzaWduIHRoZSBkZWZhdWx0IGluY3JlbWVudGluZyBJRC5cbiAgICAgKi9cbiAgICBpZiAodGhpcy5lbC5oYXNBdHRyaWJ1dGUoJ2lkJykpIHtcbiAgICAgIHRoaXMucmFuZ2VJZCA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgIH1cbiAgICB0aGlzLmluaGVyaXRlZEF0dHJpYnV0ZXMgPSBpbmhlcml0QXJpYUF0dHJpYnV0ZXModGhpcy5lbCk7XG4gICAgLy8gSWYgbWluLCBtYXgsIG9yIHN0ZXAgYXJlIG5vdCBzYWZlLCBzZXQgdGhlbSB0byAwLCAxMDAsIGFuZCAxLCByZXNwZWN0aXZlbHkuXG4gICAgLy8gRWFjaCB3YXRjaCBkb2VzIHRoaXMsIGJ1dCBub3QgYmVmb3JlIHRoZSBpbml0aWFsIGxvYWQuXG4gICAgdGhpcy5taW4gPSBpc1NhZmVOdW1iZXIodGhpcy5taW4pID8gdGhpcy5taW4gOiAwO1xuICAgIHRoaXMubWF4ID0gaXNTYWZlTnVtYmVyKHRoaXMubWF4KSA/IHRoaXMubWF4IDogMTAwO1xuICAgIHRoaXMuc3RlcCA9IGlzU2FmZU51bWJlcih0aGlzLnN0ZXApID8gdGhpcy5zdGVwIDogMTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHRoaXMub3JpZ2luYWxJb25JbnB1dCA9IHRoaXMuaW9uSW5wdXQ7XG4gICAgdGhpcy5zZXR1cEdlc3R1cmUoKTtcbiAgICB0aGlzLnVwZGF0ZVJhdGlvKCk7XG4gICAgdGhpcy5kaWRMb2FkID0gdHJ1ZTtcbiAgfVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB2YXIgX2E7XG4gICAgdGhpcy51cGRhdGVSYXRpbygpO1xuICAgIHRoaXMuZGVib3VuY2VDaGFuZ2VkKCk7XG4gICAgdGhpcy5kaXNhYmxlZENoYW5nZWQoKTtcbiAgICB0aGlzLmFjdGl2ZUJhclN0YXJ0Q2hhbmdlZCgpO1xuICAgIC8qKlxuICAgICAqIElmIHdlIGhhdmUgbm90IHlldCByZW5kZXJlZFxuICAgICAqIGlvbi1yYW5nZSwgdGhlbiByYW5nZVNsaWRlciBpcyBub3QgZGVmaW5lZC5cbiAgICAgKiBCdXQgaWYgd2UgYXJlIG1vdmluZyBpb24tcmFuZ2UgdmlhIGFwcGVuZENoaWxkLFxuICAgICAqIHRoZW4gcmFuZ2VTbGlkZXIgd2lsbCBiZSBkZWZpbmVkLlxuICAgICAqL1xuICAgIGlmICh0aGlzLmRpZExvYWQpIHtcbiAgICAgIHRoaXMuc2V0dXBHZXN0dXJlKCk7XG4gICAgfVxuICAgIGNvbnN0IGlvbkNvbnRlbnQgPSBmaW5kQ2xvc2VzdElvbkNvbnRlbnQodGhpcy5lbCk7XG4gICAgdGhpcy5jb250ZW50RWwgPSAoX2EgPSBpb25Db250ZW50ID09PSBudWxsIHx8IGlvbkNvbnRlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGlvbkNvbnRlbnQucXVlcnlTZWxlY3RvcignLmlvbi1jb250ZW50LXNjcm9sbC1ob3N0JykpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGlvbkNvbnRlbnQ7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHRoaXMuZ2VzdHVyZSkge1xuICAgICAgdGhpcy5nZXN0dXJlLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuZ2VzdHVyZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cbiAgZ2V0VmFsdWUoKSB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IHZhbHVlID0gKF9hID0gdGhpcy52YWx1ZSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogMDtcbiAgICBpZiAodGhpcy5kdWFsS25vYnMpIHtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxvd2VyOiAwLFxuICAgICAgICB1cHBlcjogdmFsdWVcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS51cHBlcjtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIEVtaXRzIGFuIGBpb25DaGFuZ2VgIGV2ZW50LlxuICAgKlxuICAgKiBUaGlzIEFQSSBzaG91bGQgYmUgY2FsbGVkIGZvciB1c2VyIGNvbW1pdHRlZCBjaGFuZ2VzLlxuICAgKiBUaGlzIEFQSSBzaG91bGQgbm90IGJlIHVzZWQgZm9yIGV4dGVybmFsIHZhbHVlIGNoYW5nZXMuXG4gICAqL1xuICBlbWl0VmFsdWVDaGFuZ2UoKSB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuZW5zdXJlVmFsdWVJbkJvdW5kcyh0aGlzLnZhbHVlKTtcbiAgICB0aGlzLmlvbkNoYW5nZS5lbWl0KHtcbiAgICAgIHZhbHVlOiB0aGlzLnZhbHVlXG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIFRoZSB2YWx1ZSBzaG91bGQgYmUgdXBkYXRlZCBvbiB0b3VjaCBlbmQgb3JcbiAgICogd2hlbiB0aGUgY29tcG9uZW50IGlzIGJlaW5nIGRyYWdnZWQuXG4gICAqIFRoaXMgZm9sbG93cyB0aGUgbmF0aXZlIGJlaGF2aW9yIG9mIG1vYmlsZSBkZXZpY2VzLlxuICAgKlxuICAgKiBGb3IgZXhhbXBsZTogV2hlbiB0aGUgdXNlciBsaWZ0cyB0aGVpciBmaW5nZXIgZnJvbSB0aGVcbiAgICogc2NyZWVuIGFmdGVyIHRhcHBpbmcgdGhlIGJhciBvciBkcmFnZ2luZyB0aGUgYmFyIG9yIGtub2IuXG4gICAqL1xuICBvblN0YXJ0KCkge1xuICAgIHRoaXMuaW9uS25vYk1vdmVTdGFydC5lbWl0KHtcbiAgICAgIHZhbHVlOiB0aGlzLmVuc3VyZVZhbHVlSW5Cb3VuZHModGhpcy52YWx1ZSlcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogVGhlIHZhbHVlIHNob3VsZCBiZSB1cGRhdGVkIHdoaWxlIGRyYWdnaW5nIHRoZVxuICAgKiBiYXIgb3Iga25vYi5cbiAgICpcbiAgICogV2hpbGUgdGhlIHVzZXIgaXMgZHJhZ2dpbmcsIHRoZSB2aWV3XG4gICAqIHNob3VsZCBub3Qgc2Nyb2xsLiBUaGlzIGlzIHRvIHByZXZlbnQgdGhlIHVzZXIgZnJvbVxuICAgKiBmZWVsaW5nIGRpc29yaWVudGVkIHdoaWxlIGRyYWdnaW5nLlxuICAgKlxuICAgKiBUaGUgdXNlciBjYW4gc2Nyb2xsIG9uIHRoZSB2aWV3IGlmIHRoZSBrbm9iIG9yXG4gICAqIGJhciBpcyBub3QgYmVpbmcgZHJhZ2dlZC5cbiAgICpcbiAgICogQHBhcmFtIGRldGFpbCBUaGUgZGV0YWlscyBvZiB0aGUgZ2VzdHVyZSBldmVudC5cbiAgICovXG4gIG9uTW92ZShkZXRhaWwpIHtcbiAgICBjb25zdCB7XG4gICAgICBjb250ZW50RWwsXG4gICAgICBwcmVzc2VkS25vYlxuICAgIH0gPSB0aGlzO1xuICAgIGNvbnN0IGN1cnJlbnRYID0gZGV0YWlsLmN1cnJlbnRYO1xuICAgIC8qKlxuICAgICAqIFNpbmNlIHRoZSB1c2VyIGlzIGRyYWdnaW5nIG9uIHRoZSBiYXIgb3Iga25vYiwgdGhlIHZpZXcgc2hvdWxkIG5vdCBzY3JvbGwuXG4gICAgICpcbiAgICAgKiBUaGlzIG9ubHkgbmVlZHMgdG8gYmUgZG9uZSBvbmNlLlxuICAgICAqL1xuICAgIGlmIChjb250ZW50RWwgJiYgdGhpcy5wcmVzc2VkS25vYiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmluaXRpYWxDb250ZW50U2Nyb2xsWSA9IGRpc2FibGVDb250ZW50U2Nyb2xsWShjb250ZW50RWwpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGUgYHByZXNzZWRLbm9iYCBjYW4gYmUgdW5kZWZpbmVkIGlmIHRoZSB1c2VyIGp1c3RcbiAgICAgKiBzdGFydGVkIGRyYWdnaW5nIHRoZSBrbm9iLlxuICAgICAqXG4gICAgICogVGhpcyBpcyBuZWNlc3NhcnkgdG8gZGV0ZXJtaW5lIHdoaWNoIGtub2IgdGhlIHVzZXIgaXMgZHJhZ2dpbmcsXG4gICAgICogZXNwZWNpYWxseSB3aGVuIGl0J3MgYSBkdWFsIGtub2IuXG4gICAgICogUGx1cywgaXQgZGV0ZXJtaW5lcyB3aGVuIHRvIGFwcGx5IGNlcnRhaW4gc3R5bGVzLlxuICAgICAqXG4gICAgICogVGhpcyBvbmx5IG5lZWRzIHRvIGJlIGRvbmUgb25jZSBzaW5jZSB0aGUga25vYiB3b24ndCBjaGFuZ2VcbiAgICAgKiB3aGlsZSB0aGUgdXNlciBpcyBkcmFnZ2luZy5cbiAgICAgKi9cbiAgICBpZiAocHJlc3NlZEtub2IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5zZXRQcmVzc2VkS25vYihjdXJyZW50WCk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlKGN1cnJlbnRYKTtcbiAgfVxuICAvKipcbiAgICogVGhlIHZhbHVlIHNob3VsZCBiZSB1cGRhdGVkIG9uIHRvdWNoIGVuZDpcbiAgICogLSBXaGVuIHRoZSB1c2VyIGxpZnRzIHRoZWlyIGZpbmdlciBmcm9tIHRoZSBzY3JlZW4gYWZ0ZXJcbiAgICogdGFwcGluZyB0aGUgYmFyLlxuICAgKlxuICAgKiBAcGFyYW0gZGV0YWlsIFRoZSBkZXRhaWxzIG9mIHRoZSBnZXN0dXJlIG9yIG1vdXNlIGV2ZW50LlxuICAgKi9cbiAgb25FbmQoZGV0YWlsKSB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IHtcbiAgICAgIGNvbnRlbnRFbCxcbiAgICAgIGluaXRpYWxDb250ZW50U2Nyb2xsWVxuICAgIH0gPSB0aGlzO1xuICAgIGNvbnN0IGN1cnJlbnRYID0gKF9hID0gZGV0YWlsLmN1cnJlbnRYKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBkZXRhaWwuY2xpZW50WDtcbiAgICAvKipcbiAgICAgKiBUaGUgYHByZXNzZWRLbm9iYCBjYW4gYmUgdW5kZWZpbmVkIGlmIHRoZSB1c2VyIG5ldmVyXG4gICAgICogZHJhZ2dlZCB0aGUga25vYi4gVGhleSBqdXN0IHRhcHBlZCBvbiB0aGUgYmFyLlxuICAgICAqXG4gICAgICogVGhpcyBpcyBuZWNlc3NhcnkgdG8gZGV0ZXJtaW5lIHdoaWNoIGtub2IgdGhlIHVzZXIgaXMgY2hhbmdpbmcsXG4gICAgICogZXNwZWNpYWxseSB3aGVuIGl0J3MgYSBkdWFsIGtub2IuXG4gICAgICogUGx1cywgaXQgZGV0ZXJtaW5lcyB3aGVuIHRvIGFwcGx5IGNlcnRhaW4gc3R5bGVzLlxuICAgICAqL1xuICAgIGlmICh0aGlzLnByZXNzZWRLbm9iID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuc2V0UHJlc3NlZEtub2IoY3VycmVudFgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGUgdXNlciBpcyBubyBsb25nZXIgZHJhZ2dpbmcgdGhlIGJhciBvclxuICAgICAqIGtub2IgKGlmIHRoZXkgd2VyZSBkcmFnZ2luZyBpdCkuXG4gICAgICpcbiAgICAgKiBUaGUgdXNlciBjYW4gbm93IHNjcm9sbCBvbiB0aGUgdmlldyBpbiB0aGUgbmV4dCBnZXN0dXJlIGV2ZW50LlxuICAgICAqL1xuICAgIGlmIChjb250ZW50RWwgJiYgdGhpcy5wcmVzc2VkS25vYiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXNldENvbnRlbnRTY3JvbGxZKGNvbnRlbnRFbCwgaW5pdGlhbENvbnRlbnRTY3JvbGxZKTtcbiAgICB9XG4gICAgLy8gdXBkYXRlIHRoZSBhY3RpdmUga25vYidzIHBvc2l0aW9uXG4gICAgdGhpcy51cGRhdGUoY3VycmVudFgpO1xuICAgIC8qKlxuICAgICAqIFJlc2V0IHRoZSBwcmVzc2VkIGtub2IgdG8gdW5kZWZpbmVkIHNpbmNlIHRoZSB1c2VyXG4gICAgICogbWF5IHN0YXJ0IGRyYWdnaW5nIGEgZGlmZmVyZW50IGtub2IgaW4gdGhlIG5leHQgZ2VzdHVyZSBldmVudC5cbiAgICAgKi9cbiAgICB0aGlzLnByZXNzZWRLbm9iID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZW1pdFZhbHVlQ2hhbmdlKCk7XG4gICAgdGhpcy5pb25Lbm9iTW92ZUVuZC5lbWl0KHtcbiAgICAgIHZhbHVlOiB0aGlzLmVuc3VyZVZhbHVlSW5Cb3VuZHModGhpcy52YWx1ZSlcbiAgICB9KTtcbiAgfVxuICB1cGRhdGUoY3VycmVudFgpIHtcbiAgICAvLyBmaWd1cmUgb3V0IHdoZXJlIHRoZSBwb2ludGVyIGlzIGN1cnJlbnRseSBhdFxuICAgIC8vIHVwZGF0ZSB0aGUga25vYiBiZWluZyBpbnRlcmFjdGVkIHdpdGhcbiAgICBjb25zdCByZWN0ID0gdGhpcy5yZWN0O1xuICAgIGxldCByYXRpbyA9IGNsYW1wKDAsIChjdXJyZW50WCAtIHJlY3QubGVmdCkgLyByZWN0LndpZHRoLCAxKTtcbiAgICBpZiAoaXNSVEwodGhpcy5lbCkpIHtcbiAgICAgIHJhdGlvID0gMSAtIHJhdGlvO1xuICAgIH1cbiAgICBpZiAodGhpcy5zbmFwcykge1xuICAgICAgLy8gc25hcHMgdGhlIHJhdGlvIHRvIHRoZSBjdXJyZW50IHZhbHVlXG4gICAgICByYXRpbyA9IHZhbHVlVG9SYXRpbyhyYXRpb1RvVmFsdWUocmF0aW8sIHRoaXMubWluLCB0aGlzLm1heCwgdGhpcy5zdGVwKSwgdGhpcy5taW4sIHRoaXMubWF4KTtcbiAgICB9XG4gICAgLy8gdXBkYXRlIHdoaWNoIGtub2IgaXMgcHJlc3NlZFxuICAgIGlmICh0aGlzLnByZXNzZWRLbm9iID09PSAnQScpIHtcbiAgICAgIHRoaXMucmF0aW9BID0gcmF0aW87XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmF0aW9CID0gcmF0aW87XG4gICAgfVxuICAgIC8vIFVwZGF0ZSBpbnB1dCB2YWx1ZVxuICAgIHRoaXMudXBkYXRlVmFsdWUoKTtcbiAgfVxuICBzZXRQcmVzc2VkS25vYihjdXJyZW50WCkge1xuICAgIGNvbnN0IHJlY3QgPSB0aGlzLnJlY3QgPSB0aGlzLnJhbmdlU2xpZGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIC8vIGZpZ3VyZSBvdXQgd2hpY2gga25vYiB0aGV5IHN0YXJ0ZWQgY2xvc2VyIHRvXG4gICAgbGV0IHJhdGlvID0gY2xhbXAoMCwgKGN1cnJlbnRYIC0gcmVjdC5sZWZ0KSAvIHJlY3Qud2lkdGgsIDEpO1xuICAgIGlmIChpc1JUTCh0aGlzLmVsKSkge1xuICAgICAgcmF0aW8gPSAxIC0gcmF0aW87XG4gICAgfVxuICAgIHRoaXMucHJlc3NlZEtub2IgPSAhdGhpcy5kdWFsS25vYnMgfHwgTWF0aC5hYnModGhpcy5yYXRpb0EgLSByYXRpbykgPCBNYXRoLmFicyh0aGlzLnJhdGlvQiAtIHJhdGlvKSA/ICdBJyA6ICdCJztcbiAgICB0aGlzLnNldEZvY3VzKHRoaXMucHJlc3NlZEtub2IpO1xuICB9XG4gIGdldCB2YWxBKCkge1xuICAgIHJldHVybiByYXRpb1RvVmFsdWUodGhpcy5yYXRpb0EsIHRoaXMubWluLCB0aGlzLm1heCwgdGhpcy5zdGVwKTtcbiAgfVxuICBnZXQgdmFsQigpIHtcbiAgICByZXR1cm4gcmF0aW9Ub1ZhbHVlKHRoaXMucmF0aW9CLCB0aGlzLm1pbiwgdGhpcy5tYXgsIHRoaXMuc3RlcCk7XG4gIH1cbiAgZ2V0IHJhdGlvTG93ZXIoKSB7XG4gICAgaWYgKHRoaXMuZHVhbEtub2JzKSB7XG4gICAgICByZXR1cm4gTWF0aC5taW4odGhpcy5yYXRpb0EsIHRoaXMucmF0aW9CKTtcbiAgICB9XG4gICAgY29uc3Qge1xuICAgICAgYWN0aXZlQmFyU3RhcnRcbiAgICB9ID0gdGhpcztcbiAgICBpZiAoYWN0aXZlQmFyU3RhcnQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVRvUmF0aW8oYWN0aXZlQmFyU3RhcnQsIHRoaXMubWluLCB0aGlzLm1heCk7XG4gIH1cbiAgZ2V0IHJhdGlvVXBwZXIoKSB7XG4gICAgaWYgKHRoaXMuZHVhbEtub2JzKSB7XG4gICAgICByZXR1cm4gTWF0aC5tYXgodGhpcy5yYXRpb0EsIHRoaXMucmF0aW9CKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucmF0aW9BO1xuICB9XG4gIHVwZGF0ZVJhdGlvKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xuICAgIGNvbnN0IHtcbiAgICAgIG1pbixcbiAgICAgIG1heFxuICAgIH0gPSB0aGlzO1xuICAgIGlmICh0aGlzLmR1YWxLbm9icykge1xuICAgICAgdGhpcy5yYXRpb0EgPSB2YWx1ZVRvUmF0aW8odmFsdWUubG93ZXIsIG1pbiwgbWF4KTtcbiAgICAgIHRoaXMucmF0aW9CID0gdmFsdWVUb1JhdGlvKHZhbHVlLnVwcGVyLCBtaW4sIG1heCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmF0aW9BID0gdmFsdWVUb1JhdGlvKHZhbHVlLCBtaW4sIG1heCk7XG4gICAgfVxuICB9XG4gIHVwZGF0ZVZhbHVlKCkge1xuICAgIHRoaXMubm9VcGRhdGUgPSB0cnVlO1xuICAgIGNvbnN0IHtcbiAgICAgIHZhbEEsXG4gICAgICB2YWxCXG4gICAgfSA9IHRoaXM7XG4gICAgdGhpcy52YWx1ZSA9ICF0aGlzLmR1YWxLbm9icyA/IHZhbEEgOiB7XG4gICAgICBsb3dlcjogTWF0aC5taW4odmFsQSwgdmFsQiksXG4gICAgICB1cHBlcjogTWF0aC5tYXgodmFsQSwgdmFsQilcbiAgICB9O1xuICAgIHRoaXMubm9VcGRhdGUgPSBmYWxzZTtcbiAgfVxuICBzZXRGb2N1cyhrbm9iKSB7XG4gICAgaWYgKHRoaXMuZWwuc2hhZG93Um9vdCkge1xuICAgICAgY29uc3Qga25vYkVsID0gdGhpcy5lbC5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3Ioa25vYiA9PT0gJ0EnID8gJy5yYW5nZS1rbm9iLWEnIDogJy5yYW5nZS1rbm9iLWInKTtcbiAgICAgIGlmIChrbm9iRWwpIHtcbiAgICAgICAga25vYkVsLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgY29udGVudCB3YXMgcGFzc2VkIHRvIHRoZSBcInN0YXJ0XCIgc2xvdFxuICAgKi9cbiAgZ2V0IGhhc1N0YXJ0U2xvdENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWwucXVlcnlTZWxlY3RvcignW3Nsb3Q9XCJzdGFydFwiXScpICE9PSBudWxsO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgY29udGVudCB3YXMgcGFzc2VkIHRvIHRoZSBcImVuZFwiIHNsb3RcbiAgICovXG4gIGdldCBoYXNFbmRTbG90Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCdbc2xvdD1cImVuZFwiXScpICE9PSBudWxsO1xuICB9XG4gIGdldCBoYXNMYWJlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbCAhPT0gdW5kZWZpbmVkIHx8IHRoaXMuZWwucXVlcnlTZWxlY3RvcignW3Nsb3Q9XCJsYWJlbFwiXScpICE9PSBudWxsO1xuICB9XG4gIHJlbmRlclJhbmdlU2xpZGVyKCkge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCB7XG4gICAgICBtaW4sXG4gICAgICBtYXgsXG4gICAgICBzdGVwLFxuICAgICAgaGFuZGxlS2V5Ym9hcmQsXG4gICAgICBwcmVzc2VkS25vYixcbiAgICAgIGRpc2FibGVkLFxuICAgICAgcGluLFxuICAgICAgcmF0aW9Mb3dlcixcbiAgICAgIHJhdGlvVXBwZXIsXG4gICAgICBwaW5Gb3JtYXR0ZXIsXG4gICAgICBpbmhlcml0ZWRBdHRyaWJ1dGVzXG4gICAgfSA9IHRoaXM7XG4gICAgbGV0IGJhclN0YXJ0ID0gYCR7cmF0aW9Mb3dlciAqIDEwMH0lYDtcbiAgICBsZXQgYmFyRW5kID0gYCR7MTAwIC0gcmF0aW9VcHBlciAqIDEwMH0lYDtcbiAgICBjb25zdCBydGwgPSBpc1JUTCh0aGlzLmVsKTtcbiAgICBjb25zdCBzdGFydCA9IHJ0bCA/ICdyaWdodCcgOiAnbGVmdCc7XG4gICAgY29uc3QgZW5kID0gcnRsID8gJ2xlZnQnIDogJ3JpZ2h0JztcbiAgICBjb25zdCB0aWNrU3R5bGUgPSB0aWNrID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIFtzdGFydF06IHRpY2tbc3RhcnRdXG4gICAgICB9O1xuICAgIH07XG4gICAgaWYgKHRoaXMuZHVhbEtub2JzID09PSBmYWxzZSkge1xuICAgICAgLyoqXG4gICAgICAgKiBXaGVuIHRoZSB2YWx1ZSBpcyBsZXNzIHRoYW4gdGhlIGFjdGl2ZUJhclN0YXJ0IG9yIHRoZSBtaW4gdmFsdWUsXG4gICAgICAgKiB0aGUga25vYiB3aWxsIGRpc3BsYXkgYXQgdGhlIHN0YXJ0IG9mIHRoZSBhY3RpdmUgYmFyLlxuICAgICAgICovXG4gICAgICBpZiAodGhpcy52YWxBIDwgKChfYSA9IHRoaXMuYWN0aXZlQmFyU3RhcnQpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHRoaXMubWluKSkge1xuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyB0aGUgYmFyIHBvc2l0aW9ucyByZWxhdGl2ZSB0byB0aGUgdXBwZXIgYW5kIGxvd2VyIGxpbWl0cy5cbiAgICAgICAgICogQ29udmVydHMgdGhlIHJhdGlvIHZhbHVlcyBpbnRvIHBlcmNlbnRhZ2VzLCB1c2VkIGFzIG9mZnNldHMgZm9yIGxlZnQvcmlnaHQgc3R5bGVzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGUgcmF0aW9VcHBlciByZWZlcnMgdG8gdGhlIGtub2IgcG9zaXRpb24gb24gdGhlIGJhci5cbiAgICAgICAgICogVGhlIHJhdGlvTG93ZXIgcmVmZXJzIHRvIHRoZSBlbmQgcG9zaXRpb24gb2YgdGhlIGFjdGl2ZSBiYXIgKHRoZSB2YWx1ZSkuXG4gICAgICAgICAqL1xuICAgICAgICBiYXJTdGFydCA9IGAke3JhdGlvVXBwZXIgKiAxMDB9JWA7XG4gICAgICAgIGJhckVuZCA9IGAkezEwMCAtIHJhdGlvTG93ZXIgKiAxMDB9JWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKipcbiAgICAgICAgICogT3RoZXJ3aXNlLCB0aGUga25vYiB3aWxsIGRpc3BsYXkgYXQgdGhlIGVuZCBvZiB0aGUgYWN0aXZlIGJhci5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhlIHJhdGlvTG93ZXIgcmVmZXJzIHRvIHRoZSBzdGFydCBwb3NpdGlvbiBvZiB0aGUgYWN0aXZlIGJhciAodGhlIHZhbHVlKS5cbiAgICAgICAgICogVGhlIHJhdGlvVXBwZXIgcmVmZXJzIHRvIHRoZSBrbm9iIHBvc2l0aW9uIG9uIHRoZSBiYXIuXG4gICAgICAgICAqL1xuICAgICAgICBiYXJTdGFydCA9IGAke3JhdGlvTG93ZXIgKiAxMDB9JWA7XG4gICAgICAgIGJhckVuZCA9IGAkezEwMCAtIHJhdGlvVXBwZXIgKiAxMDB9JWA7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGJhclN0eWxlID0ge1xuICAgICAgW3N0YXJ0XTogYmFyU3RhcnQsXG4gICAgICBbZW5kXTogYmFyRW5kXG4gICAgfTtcbiAgICBjb25zdCB0aWNrcyA9IFtdO1xuICAgIGlmICh0aGlzLnNuYXBzICYmIHRoaXMudGlja3MpIHtcbiAgICAgIGZvciAobGV0IHZhbHVlID0gbWluOyB2YWx1ZSA8PSBtYXg7IHZhbHVlICs9IHN0ZXApIHtcbiAgICAgICAgY29uc3QgcmF0aW8gPSB2YWx1ZVRvUmF0aW8odmFsdWUsIG1pbiwgbWF4KTtcbiAgICAgICAgY29uc3QgcmF0aW9NaW4gPSBNYXRoLm1pbihyYXRpb0xvd2VyLCByYXRpb1VwcGVyKTtcbiAgICAgICAgY29uc3QgcmF0aW9NYXggPSBNYXRoLm1heChyYXRpb0xvd2VyLCByYXRpb1VwcGVyKTtcbiAgICAgICAgY29uc3QgdGljayA9IHtcbiAgICAgICAgICByYXRpbyxcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBTZXRzIHRoZSB0aWNrIG1hcmsgYXMgYWN0aXZlIHdoZW4gdGhlIHRpY2sgaXMgYmV0d2VlbiB0aGUgbWluIGJvdW5kcyBhbmQgdGhlIGtub2IuXG4gICAgICAgICAgICogV2hlbiB1c2luZyBhY3RpdmVCYXJTdGFydCwgdGhlIHRpY2sgbWFyayB3aWxsIGJlIGFjdGl2ZSBiZXR3ZWVuIHRoZSBrbm9iIGFuZCBhY3RpdmVCYXJTdGFydC5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBhY3RpdmU6IHJhdGlvID49IHJhdGlvTWluICYmIHJhdGlvIDw9IHJhdGlvTWF4XG4gICAgICAgIH07XG4gICAgICAgIHRpY2tbc3RhcnRdID0gYCR7cmF0aW8gKiAxMDB9JWA7XG4gICAgICAgIHRpY2tzLnB1c2godGljayk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBoKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBcInJhbmdlLXNsaWRlclwiLFxuICAgICAgcmVmOiByYW5nZUVsID0+IHRoaXMucmFuZ2VTbGlkZXIgPSByYW5nZUVsLFxuICAgICAgLyoqXG4gICAgICAgKiBTaW5jZSB0aGUgZ2VzdHVyZSBoYXMgYSB0aHJlc2hvbGQsIHRoZSB2YWx1ZVxuICAgICAgICogd29uJ3QgY2hhbmdlIHVudGlsIHRoZSB1c2VyIGhhcyBkcmFnZ2VkIHBhc3RcbiAgICAgICAqIHRoZSB0aHJlc2hvbGQuIFRoaXMgaXMgdG8gcHJldmVudCB0aGUgcmFuZ2VcbiAgICAgICAqIGZyb20gbW92aW5nIHdoZW4gdGhlIHVzZXIgaXMgc2Nyb2xsaW5nLlxuICAgICAgICpcbiAgICAgICAqIFRoaXMgcmVzdWx0cyBpbiB0aGUgdmFsdWUgbm90IGJlaW5nIHVwZGF0ZWRcbiAgICAgICAqIGFuZCB0aGUgZXZlbnQgZW1pdHRlcnMgbm90IGJlaW5nIHRyaWdnZXJlZFxuICAgICAgICogaWYgdGhlIHVzZXIgdGFwcyBvbiB0aGUgcmFuZ2UuIFRoaXMgaXMgd2h5XG4gICAgICAgKiB3ZSBuZWVkIHRvIGxpc3RlbiBmb3IgdGhlIFwicG9pbnRlclVwXCIgZXZlbnQuXG4gICAgICAgKi9cbiAgICAgIG9uUG9pbnRlclVwOiBldiA9PiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiB0aGUgdXNlciBkcmFncyB0aGUga25vYiBvbiB0aGUgd2ViXG4gICAgICAgICAqIHZlcnNpb24gKGRvZXMgbm90IG9jY3VyIG9uIG1vYmlsZSksXG4gICAgICAgICAqIHRoZSBcInBvaW50ZXJVcFwiIGV2ZW50IHdpbGwgYmUgdHJpZ2dlcmVkXG4gICAgICAgICAqIGFsb25nIHdpdGggdGhlIGdlc3R1cmUncyBldmVudHMuXG4gICAgICAgICAqIFRoaXMgbGVhZHMgdG8gZHVwbGljYXRlIGV2ZW50cy5cbiAgICAgICAgICpcbiAgICAgICAgICogQnkgY2hlY2tpbmcgaWYgdGhlIHByZXNzZWRLbm9iIGlzIHVuZGVmaW5lZCxcbiAgICAgICAgICogd2UgY2FuIGRldGVybWluZSBpZiB0aGUgXCJwb2ludGVyVXBcIiBldmVudCB3YXNcbiAgICAgICAgICogdHJpZ2dlcmVkIGJ5IGEgdGFwIG9yIGEgZHJhZy4gSWYgaXQgd2FzXG4gICAgICAgICAqIGRyYWdnZWQsIHRoZSBwcmVzc2VkS25vYiB3aWxsIGJlIGRlZmluZWQuXG4gICAgICAgICAqL1xuICAgICAgICBpZiAodGhpcy5wcmVzc2VkS25vYiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5vblN0YXJ0KCk7XG4gICAgICAgICAgdGhpcy5vbkVuZChldik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB0aWNrcy5tYXAodGljayA9PiBoKFwiZGl2XCIsIHtcbiAgICAgIHN0eWxlOiB0aWNrU3R5bGUodGljayksXG4gICAgICByb2xlOiBcInByZXNlbnRhdGlvblwiLFxuICAgICAgY2xhc3M6IHtcbiAgICAgICAgJ3JhbmdlLXRpY2snOiB0cnVlLFxuICAgICAgICAncmFuZ2UtdGljay1hY3RpdmUnOiB0aWNrLmFjdGl2ZVxuICAgICAgfSxcbiAgICAgIHBhcnQ6IHRpY2suYWN0aXZlID8gJ3RpY2stYWN0aXZlJyA6ICd0aWNrJ1xuICAgIH0pKSwgaChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJyYW5nZS1iYXItY29udGFpbmVyXCJcbiAgICB9LCBoKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBcInJhbmdlLWJhclwiLFxuICAgICAgcm9sZTogXCJwcmVzZW50YXRpb25cIixcbiAgICAgIHBhcnQ6IFwiYmFyXCJcbiAgICB9KSwgaChcImRpdlwiLCB7XG4gICAgICBjbGFzczoge1xuICAgICAgICAncmFuZ2UtYmFyJzogdHJ1ZSxcbiAgICAgICAgJ3JhbmdlLWJhci1hY3RpdmUnOiB0cnVlLFxuICAgICAgICAnaGFzLXRpY2tzJzogdGlja3MubGVuZ3RoID4gMFxuICAgICAgfSxcbiAgICAgIHJvbGU6IFwicHJlc2VudGF0aW9uXCIsXG4gICAgICBzdHlsZTogYmFyU3R5bGUsXG4gICAgICBwYXJ0OiBcImJhci1hY3RpdmVcIlxuICAgIH0pKSwgcmVuZGVyS25vYihydGwsIHtcbiAgICAgIGtub2I6ICdBJyxcbiAgICAgIHByZXNzZWQ6IHByZXNzZWRLbm9iID09PSAnQScsXG4gICAgICB2YWx1ZTogdGhpcy52YWxBLFxuICAgICAgcmF0aW86IHRoaXMucmF0aW9BLFxuICAgICAgcGluLFxuICAgICAgcGluRm9ybWF0dGVyLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBoYW5kbGVLZXlib2FyZCxcbiAgICAgIG1pbixcbiAgICAgIG1heCxcbiAgICAgIGluaGVyaXRlZEF0dHJpYnV0ZXMsXG4gICAgICBvbktub2JGb2N1czogdGhpcy5vbktub2JGb2N1cyxcbiAgICAgIG9uS25vYkJsdXI6IHRoaXMub25Lbm9iQmx1clxuICAgIH0pLCB0aGlzLmR1YWxLbm9icyAmJiByZW5kZXJLbm9iKHJ0bCwge1xuICAgICAga25vYjogJ0InLFxuICAgICAgcHJlc3NlZDogcHJlc3NlZEtub2IgPT09ICdCJyxcbiAgICAgIHZhbHVlOiB0aGlzLnZhbEIsXG4gICAgICByYXRpbzogdGhpcy5yYXRpb0IsXG4gICAgICBwaW4sXG4gICAgICBwaW5Gb3JtYXR0ZXIsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGhhbmRsZUtleWJvYXJkLFxuICAgICAgbWluLFxuICAgICAgbWF4LFxuICAgICAgaW5oZXJpdGVkQXR0cmlidXRlcyxcbiAgICAgIG9uS25vYkZvY3VzOiB0aGlzLm9uS25vYkZvY3VzLFxuICAgICAgb25Lbm9iQmx1cjogdGhpcy5vbktub2JCbHVyXG4gICAgfSkpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGVsLFxuICAgICAgaGFzTGFiZWwsXG4gICAgICByYW5nZUlkLFxuICAgICAgcGluLFxuICAgICAgcHJlc3NlZEtub2IsXG4gICAgICBsYWJlbFBsYWNlbWVudCxcbiAgICAgIGxhYmVsXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgaW5JdGVtID0gaG9zdENvbnRleHQoJ2lvbi1pdGVtJywgZWwpO1xuICAgIC8qKlxuICAgICAqIElmIHRoZXJlIGlzIG5vIHN0YXJ0IGNvbnRlbnQgdGhlbiB0aGUga25vYiBhdFxuICAgICAqIHRoZSBtaW4gdmFsdWUgd2lsbCBiZSBjdXQgb2ZmIGJ5IHRoZSBpdGVtIG1hcmdpbi5cbiAgICAgKi9cbiAgICBjb25zdCBoYXNTdGFydENvbnRlbnQgPSBoYXNMYWJlbCAmJiAobGFiZWxQbGFjZW1lbnQgPT09ICdzdGFydCcgfHwgbGFiZWxQbGFjZW1lbnQgPT09ICdmaXhlZCcpIHx8IHRoaXMuaGFzU3RhcnRTbG90Q29udGVudDtcbiAgICBjb25zdCBuZWVkc1N0YXJ0QWRqdXN0bWVudCA9IGluSXRlbSAmJiAhaGFzU3RhcnRDb250ZW50O1xuICAgIC8qKlxuICAgICAqIElmIHRoZXJlIGlzIG5vIGVuZCBjb250ZW50IHRoZW4gdGhlIGtub2IgYXRcbiAgICAgKiB0aGUgbWF4IHZhbHVlIHdpbGwgYmUgY3V0IG9mZiBieSB0aGUgaXRlbSBtYXJnaW4uXG4gICAgICovXG4gICAgY29uc3QgaGFzRW5kQ29udGVudCA9IGhhc0xhYmVsICYmIGxhYmVsUGxhY2VtZW50ID09PSAnZW5kJyB8fCB0aGlzLmhhc0VuZFNsb3RDb250ZW50O1xuICAgIGNvbnN0IG5lZWRzRW5kQWRqdXN0bWVudCA9IGluSXRlbSAmJiAhaGFzRW5kQ29udGVudDtcbiAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICByZW5kZXJIaWRkZW5JbnB1dCh0cnVlLCBlbCwgdGhpcy5uYW1lLCBKU09OLnN0cmluZ2lmeSh0aGlzLmdldFZhbHVlKCkpLCBkaXNhYmxlZCk7XG4gICAgcmV0dXJuIGgoSG9zdCwge1xuICAgICAga2V5OiAnZWY3YjAxZjgwNTE1YmNhZWIyOTgzOTM0YWQ3ZjEwYTZiZDVkMTNlYycsXG4gICAgICBvbkZvY3VzaW46IHRoaXMub25Gb2N1cyxcbiAgICAgIG9uRm9jdXNvdXQ6IHRoaXMub25CbHVyLFxuICAgICAgaWQ6IHJhbmdlSWQsXG4gICAgICBjbGFzczogY3JlYXRlQ29sb3JDbGFzc2VzKHRoaXMuY29sb3IsIHtcbiAgICAgICAgW21vZGVdOiB0cnVlLFxuICAgICAgICAnaW4taXRlbSc6IGluSXRlbSxcbiAgICAgICAgJ3JhbmdlLWRpc2FibGVkJzogZGlzYWJsZWQsXG4gICAgICAgICdyYW5nZS1wcmVzc2VkJzogcHJlc3NlZEtub2IgIT09IHVuZGVmaW5lZCxcbiAgICAgICAgJ3JhbmdlLWhhcy1waW4nOiBwaW4sXG4gICAgICAgIFtgcmFuZ2UtbGFiZWwtcGxhY2VtZW50LSR7bGFiZWxQbGFjZW1lbnR9YF06IHRydWUsXG4gICAgICAgICdyYW5nZS1pdGVtLXN0YXJ0LWFkanVzdG1lbnQnOiBuZWVkc1N0YXJ0QWRqdXN0bWVudCxcbiAgICAgICAgJ3JhbmdlLWl0ZW0tZW5kLWFkanVzdG1lbnQnOiBuZWVkc0VuZEFkanVzdG1lbnRcbiAgICAgIH0pXG4gICAgfSwgaChcImxhYmVsXCIsIHtcbiAgICAgIGtleTogJ2ZkOGFhOTBhOWQ1MmJlOWRhMDI0YjkwN2U2ODg1OGRhZTQyNDQ0OWQnLFxuICAgICAgY2xhc3M6IFwicmFuZ2Utd3JhcHBlclwiLFxuICAgICAgaWQ6IFwicmFuZ2UtbGFiZWxcIlxuICAgIH0sIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnMjE3MmI0ZjMyOWMyMjAxN2RkMjM0NzVjODBhYWMyNWJhNmU3NTNlYicsXG4gICAgICBjbGFzczoge1xuICAgICAgICAnbGFiZWwtdGV4dC13cmFwcGVyJzogdHJ1ZSxcbiAgICAgICAgJ2xhYmVsLXRleHQtd3JhcHBlci1oaWRkZW4nOiAhaGFzTGFiZWxcbiAgICAgIH0sXG4gICAgICBwYXJ0OiBcImxhYmVsXCJcbiAgICB9LCBsYWJlbCAhPT0gdW5kZWZpbmVkID8gaChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJsYWJlbC10ZXh0XCJcbiAgICB9LCBsYWJlbCkgOiBoKFwic2xvdFwiLCB7XG4gICAgICBuYW1lOiBcImxhYmVsXCJcbiAgICB9KSksIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnM2MzMThiZjJlYTA1NzY2NDZkNGMwMTBiZjQ0NTczZmQwZjQ4MzE4NicsXG4gICAgICBjbGFzczogXCJuYXRpdmUtd3JhcHBlclwiXG4gICAgfSwgaChcInNsb3RcIiwge1xuICAgICAga2V5OiAnNjU4NmZkNmZjOTYyNzFlNzNmOGE4NmMyMDJkMTkxM2FkMWEyNmY5NicsXG4gICAgICBuYW1lOiBcInN0YXJ0XCJcbiAgICB9KSwgdGhpcy5yZW5kZXJSYW5nZVNsaWRlcigpLCBoKFwic2xvdFwiLCB7XG4gICAgICBrZXk6ICc3NGFjMGJjMmQyY2I2NmVmNzA4YmI3MjlmODhiNmVjYmMxYjIxNTVkJyxcbiAgICAgIG5hbWU6IFwiZW5kXCJcbiAgICB9KSkpKTtcbiAgfVxuICBnZXQgZWwoKSB7XG4gICAgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7XG4gIH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWJvdW5jZVwiOiBbXCJkZWJvdW5jZUNoYW5nZWRcIl0sXG4gICAgICBcIm1pblwiOiBbXCJtaW5DaGFuZ2VkXCJdLFxuICAgICAgXCJtYXhcIjogW1wibWF4Q2hhbmdlZFwiXSxcbiAgICAgIFwic3RlcFwiOiBbXCJzdGVwQ2hhbmdlZFwiXSxcbiAgICAgIFwiYWN0aXZlQmFyU3RhcnRcIjogW1wiYWN0aXZlQmFyU3RhcnRDaGFuZ2VkXCJdLFxuICAgICAgXCJkaXNhYmxlZFwiOiBbXCJkaXNhYmxlZENoYW5nZWRcIl0sXG4gICAgICBcInZhbHVlXCI6IFtcInZhbHVlQ2hhbmdlZFwiXVxuICAgIH07XG4gIH1cbn07XG5jb25zdCByZW5kZXJLbm9iID0gKHJ0bCwge1xuICBrbm9iLFxuICB2YWx1ZSxcbiAgcmF0aW8sXG4gIG1pbixcbiAgbWF4LFxuICBkaXNhYmxlZCxcbiAgcHJlc3NlZCxcbiAgcGluLFxuICBoYW5kbGVLZXlib2FyZCxcbiAgcGluRm9ybWF0dGVyLFxuICBpbmhlcml0ZWRBdHRyaWJ1dGVzLFxuICBvbktub2JGb2N1cyxcbiAgb25Lbm9iQmx1clxufSkgPT4ge1xuICBjb25zdCBzdGFydCA9IHJ0bCA/ICdyaWdodCcgOiAnbGVmdCc7XG4gIGNvbnN0IGtub2JTdHlsZSA9ICgpID0+IHtcbiAgICBjb25zdCBzdHlsZSA9IHt9O1xuICAgIHN0eWxlW3N0YXJ0XSA9IGAke3JhdGlvICogMTAwfSVgO1xuICAgIHJldHVybiBzdHlsZTtcbiAgfTtcbiAgLy8gVGhlIGFyaWEgbGFiZWwgc2hvdWxkIGJlIHByZWZlcnJlZCBvdmVyIHZpc2libGUgdGV4dCBpZiBib3RoIGFyZSBzcGVjaWZpZWRcbiAgY29uc3QgYXJpYUxhYmVsID0gaW5oZXJpdGVkQXR0cmlidXRlc1snYXJpYS1sYWJlbCddO1xuICByZXR1cm4gaChcImRpdlwiLCB7XG4gICAgb25LZXlEb3duOiBldiA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBldi5rZXk7XG4gICAgICBpZiAoa2V5ID09PSAnQXJyb3dMZWZ0JyB8fCBrZXkgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICAgIGhhbmRsZUtleWJvYXJkKGtub2IsIGZhbHNlKTtcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0Fycm93UmlnaHQnIHx8IGtleSA9PT0gJ0Fycm93VXAnKSB7XG4gICAgICAgIGhhbmRsZUtleWJvYXJkKGtub2IsIHRydWUpO1xuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uRm9jdXM6ICgpID0+IG9uS25vYkZvY3VzKGtub2IpLFxuICAgIG9uQmx1cjogb25Lbm9iQmx1cixcbiAgICBjbGFzczoge1xuICAgICAgJ3JhbmdlLWtub2ItaGFuZGxlJzogdHJ1ZSxcbiAgICAgICdyYW5nZS1rbm9iLWEnOiBrbm9iID09PSAnQScsXG4gICAgICAncmFuZ2Uta25vYi1iJzoga25vYiA9PT0gJ0InLFxuICAgICAgJ3JhbmdlLWtub2ItcHJlc3NlZCc6IHByZXNzZWQsXG4gICAgICAncmFuZ2Uta25vYi1taW4nOiB2YWx1ZSA9PT0gbWluLFxuICAgICAgJ3JhbmdlLWtub2ItbWF4JzogdmFsdWUgPT09IG1heCxcbiAgICAgICdpb24tYWN0aXZhdGFibGUnOiB0cnVlLFxuICAgICAgJ2lvbi1mb2N1c2FibGUnOiB0cnVlXG4gICAgfSxcbiAgICBzdHlsZToga25vYlN0eWxlKCksXG4gICAgcm9sZTogXCJzbGlkZXJcIixcbiAgICB0YWJpbmRleDogZGlzYWJsZWQgPyAtMSA6IDAsXG4gICAgXCJhcmlhLWxhYmVsXCI6IGFyaWFMYWJlbCAhPT0gdW5kZWZpbmVkID8gYXJpYUxhYmVsIDogbnVsbCxcbiAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBhcmlhTGFiZWwgPT09IHVuZGVmaW5lZCA/ICdyYW5nZS1sYWJlbCcgOiBudWxsLFxuICAgIFwiYXJpYS12YWx1ZW1pblwiOiBtaW4sXG4gICAgXCJhcmlhLXZhbHVlbWF4XCI6IG1heCxcbiAgICBcImFyaWEtZGlzYWJsZWRcIjogZGlzYWJsZWQgPyAndHJ1ZScgOiBudWxsLFxuICAgIFwiYXJpYS12YWx1ZW5vd1wiOiB2YWx1ZVxuICB9LCBwaW4gJiYgaChcImRpdlwiLCB7XG4gICAgY2xhc3M6IFwicmFuZ2UtcGluXCIsXG4gICAgcm9sZTogXCJwcmVzZW50YXRpb25cIixcbiAgICBwYXJ0OiBcInBpblwiXG4gIH0sIHBpbkZvcm1hdHRlcih2YWx1ZSkpLCBoKFwiZGl2XCIsIHtcbiAgICBjbGFzczogXCJyYW5nZS1rbm9iXCIsXG4gICAgcm9sZTogXCJwcmVzZW50YXRpb25cIixcbiAgICBwYXJ0OiBcImtub2JcIlxuICB9KSk7XG59O1xuY29uc3QgcmF0aW9Ub1ZhbHVlID0gKHJhdGlvLCBtaW4sIG1heCwgc3RlcCkgPT4ge1xuICBsZXQgdmFsdWUgPSAobWF4IC0gbWluKSAqIHJhdGlvO1xuICBpZiAoc3RlcCA+IDApIHtcbiAgICAvLyByb3VuZCB0byBuZWFyZXN0IG11bHRpcGxlIG9mIHN0ZXAsIHRoZW4gYWRkIG1pblxuICAgIHZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZSAvIHN0ZXApICogc3RlcCArIG1pbjtcbiAgfVxuICBjb25zdCBjbGFtcGVkVmFsdWUgPSBjbGFtcChtaW4sIHZhbHVlLCBtYXgpO1xuICByZXR1cm4gcm91bmRUb01heERlY2ltYWxQbGFjZXMoY2xhbXBlZFZhbHVlLCBtaW4sIG1heCwgc3RlcCk7XG59O1xuY29uc3QgdmFsdWVUb1JhdGlvID0gKHZhbHVlLCBtaW4sIG1heCkgPT4ge1xuICByZXR1cm4gY2xhbXAoMCwgKHZhbHVlIC0gbWluKSAvIChtYXggLSBtaW4pLCAxKTtcbn07XG5sZXQgcmFuZ2VJZHMgPSAwO1xuUmFuZ2Uuc3R5bGUgPSB7XG4gIGlvczogcmFuZ2VJb3NDc3MsXG4gIG1kOiByYW5nZU1kQ3NzXG59O1xuZXhwb3J0IHsgUmFuZ2UgYXMgaW9uX3JhbmdlIH07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNBLFNBQVMsaUJBQWlCLEdBQUc7QUFDM0IsTUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFHLFFBQU87QUFDN0IsTUFBSSxJQUFJLE1BQU0sRUFBRyxRQUFPO0FBQ3hC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
