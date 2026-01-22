import {
  compareOptions,
  isOptionSelected
} from "./chunk-Y75TVRVW.js";
import {
  watchForOptions
} from "./chunk-KXXXZCB6.js";
import {
  createNotchController
} from "./chunk-6Z3RPGOG.js";
import {
  isRTL
} from "./chunk-4LZLDCVM.js";
import {
  caretDownSharp,
  chevronExpand
} from "./chunk-D4BGZ3LF.js";
import {
  actionSheetController,
  alertController,
  modalController,
  popoverController,
  safeCall
} from "./chunk-QATEHYOA.js";
import "./chunk-3MKGIXIK.js";
import {
  createColorClasses,
  getClassMap,
  hostContext
} from "./chunk-5VP4V3BN.js";
import {
  getIonMode
} from "./chunk-TXLH22R2.js";
import "./chunk-J5JVDPFK.js";
import "./chunk-MUBGKTGO.js";
import {
  focusVisibleElement,
  inheritAttributes,
  renderHiddenInput
} from "./chunk-RZR7LWTQ.js";
import "./chunk-YSZWGYJT.js";
import {
  Host,
  createEvent,
  forceUpdate,
  getElement,
  h,
  printIonWarning,
  registerInstance
} from "./chunk-BFPTXCSH.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// node_modules/@ionic/core/dist/esm/ion-select_3.entry.js
var selectIosCss = ":host{--padding-top:0px;--padding-end:0px;--padding-bottom:0px;--padding-start:0px;--placeholder-color:currentColor;--placeholder-opacity:var(--ion-placeholder-opacity, 0.6);--background:transparent;--border-style:solid;--highlight-color-focused:var(--ion-color-primary, #0054e9);--highlight-color-valid:var(--ion-color-success, #2dd55b);--highlight-color-invalid:var(--ion-color-danger, #c5000f);--highlight-color:var(--highlight-color-focused);display:block;position:relative;width:100%;min-height:44px;font-family:var(--ion-font-family, inherit);white-space:nowrap;cursor:pointer;z-index:2}:host(.select-label-placement-floating),:host(.select-label-placement-stacked){min-height:56px}:host(.ion-color){--highlight-color-focused:var(--ion-color-base)}:host(.in-item){-ms-flex:1 1 0px;flex:1 1 0}:host(.select-disabled){pointer-events:none}:host(.has-focus) button{border:2px solid #5e9ed6}:host([slot=start]),:host([slot=end]){-ms-flex:initial;flex:initial;width:auto}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0;position:relative;-ms-flex-negative:0;flex-shrink:0}:host(.in-item-color) .select-icon{color:inherit}:host(.select-label-placement-stacked) .select-icon,:host(.select-label-placement-floating) .select-icon{position:absolute;height:100%}:host(.select-ltr.select-label-placement-stacked) .select-icon,:host(.select-ltr.select-label-placement-floating) .select-icon{right:var(--padding-end, 0)}:host(.select-rtl.select-label-placement-stacked) .select-icon,:host(.select-rtl.select-label-placement-floating) .select-icon{left:var(--padding-start, 0)}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:inherit;overflow:hidden}.select-wrapper{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);border-radius:var(--border-radius);display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;height:inherit;min-height:inherit;-webkit-transition:background-color 15ms linear;transition:background-color 15ms linear;background:var(--background);line-height:normal;cursor:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.select-wrapper .select-placeholder{-webkit-transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)}.select-wrapper-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;overflow:hidden}:host(.select-label-placement-stacked) .select-wrapper-inner,:host(.select-label-placement-floating) .select-wrapper-inner{-ms-flex-positive:1;flex-grow:1}:host(.ion-touched.ion-invalid){--highlight-color:var(--highlight-color-invalid)}:host(.ion-valid){--highlight-color:var(--highlight-color-valid)}.select-bottom{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:5px;padding-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;border-top:var(--border-width) var(--border-style) var(--border-color);font-size:0.75rem;white-space:normal}:host(.has-focus.ion-valid),:host(.select-expanded.ion-valid),:host(.ion-touched.ion-invalid),:host(.select-expanded.ion-touched.ion-invalid){--border-color:var(--highlight-color)}.select-bottom .error-text{display:none;color:var(--highlight-color-invalid)}.select-bottom .helper-text{display:block;color:var(--ion-color-step-700, var(--ion-text-color-step-300, #4d4d4d))}:host(.ion-touched.ion-invalid) .select-bottom .error-text{display:block}:host(.ion-touched.ion-invalid) .select-bottom .helper-text{display:none}.label-text-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;max-width:200px;-webkit-transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);pointer-events:none}.label-text,::slotted([slot=label]){text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden,.select-outline-notch-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);overflow:hidden}:host(.select-justify-space-between) .select-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.select-justify-start) .select-wrapper{-ms-flex-pack:start;justify-content:start}:host(.select-justify-end) .select-wrapper{-ms-flex-pack:end;justify-content:end}:host(.select-label-placement-start) .select-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.select-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.select-label-placement-end) .select-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.select-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.select-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.select-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.select-label-placement-stacked) .select-wrapper,:host(.select-label-placement-floating) .select-wrapper{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:start}:host(.select-label-placement-stacked) .label-text-wrapper,:host(.select-label-placement-floating) .label-text-wrapper{max-width:100%}:host(.select-ltr.select-label-placement-stacked) .label-text-wrapper,:host(.select-ltr.select-label-placement-floating) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top}:host(.select-rtl.select-label-placement-stacked) .label-text-wrapper,:host(.select-rtl.select-label-placement-floating) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}:host(.select-label-placement-stacked) .native-wrapper,:host(.select-label-placement-floating) .native-wrapper{margin-left:0;margin-right:0;margin-top:1px;margin-bottom:0;-ms-flex-positive:1;flex-grow:1;width:100%}:host(.select-label-placement-floating) .label-text-wrapper{-webkit-transform:translateY(100%) scale(1);transform:translateY(100%) scale(1)}:host(.select-label-placement-floating:not(.label-floating)) .native-wrapper .select-placeholder{opacity:0}:host(.select-expanded.select-label-placement-floating) .native-wrapper .select-placeholder,:host(.has-focus.select-label-placement-floating) .native-wrapper .select-placeholder,:host(.has-value.select-label-placement-floating) .native-wrapper .select-placeholder{opacity:1}:host(.label-floating) .label-text-wrapper{-webkit-transform:translateY(50%) scale(0.75);transform:translateY(50%) scale(0.75);max-width:calc(100% / 0.75)}::slotted([slot=start]),::slotted([slot=end]){-ms-flex-negative:0;flex-shrink:0}::slotted([slot=start]:last-of-type){-webkit-margin-end:16px;margin-inline-end:16px;-webkit-margin-start:0;margin-inline-start:0}::slotted([slot=end]:first-of-type){-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}:host{--border-width:0.55px;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, var(--ion-background-color-step-250, #c8c7cc))));--highlight-height:0px}.select-icon{width:1.125rem;height:1.125rem;color:var(--ion-color-step-650, var(--ion-text-color-step-350, #595959))}:host(.select-label-placement-stacked) .select-wrapper-inner,:host(.select-label-placement-floating) .select-wrapper-inner{width:calc(100% - 1.125rem - 4px)}:host(.select-disabled){opacity:0.3}::slotted(ion-button[slot=start].button-has-icon-only),::slotted(ion-button[slot=end].button-has-icon-only){--border-radius:50%;--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;aspect-ratio:1}";
var selectMdCss = ":host{--padding-top:0px;--padding-end:0px;--padding-bottom:0px;--padding-start:0px;--placeholder-color:currentColor;--placeholder-opacity:var(--ion-placeholder-opacity, 0.6);--background:transparent;--border-style:solid;--highlight-color-focused:var(--ion-color-primary, #0054e9);--highlight-color-valid:var(--ion-color-success, #2dd55b);--highlight-color-invalid:var(--ion-color-danger, #c5000f);--highlight-color:var(--highlight-color-focused);display:block;position:relative;width:100%;min-height:44px;font-family:var(--ion-font-family, inherit);white-space:nowrap;cursor:pointer;z-index:2}:host(.select-label-placement-floating),:host(.select-label-placement-stacked){min-height:56px}:host(.ion-color){--highlight-color-focused:var(--ion-color-base)}:host(.in-item){-ms-flex:1 1 0px;flex:1 1 0}:host(.select-disabled){pointer-events:none}:host(.has-focus) button{border:2px solid #5e9ed6}:host([slot=start]),:host([slot=end]){-ms-flex:initial;flex:initial;width:auto}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0;position:relative;-ms-flex-negative:0;flex-shrink:0}:host(.in-item-color) .select-icon{color:inherit}:host(.select-label-placement-stacked) .select-icon,:host(.select-label-placement-floating) .select-icon{position:absolute;height:100%}:host(.select-ltr.select-label-placement-stacked) .select-icon,:host(.select-ltr.select-label-placement-floating) .select-icon{right:var(--padding-end, 0)}:host(.select-rtl.select-label-placement-stacked) .select-icon,:host(.select-rtl.select-label-placement-floating) .select-icon{left:var(--padding-start, 0)}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:inherit;overflow:hidden}.select-wrapper{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);border-radius:var(--border-radius);display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;height:inherit;min-height:inherit;-webkit-transition:background-color 15ms linear;transition:background-color 15ms linear;background:var(--background);line-height:normal;cursor:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.select-wrapper .select-placeholder{-webkit-transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)}.select-wrapper-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;overflow:hidden}:host(.select-label-placement-stacked) .select-wrapper-inner,:host(.select-label-placement-floating) .select-wrapper-inner{-ms-flex-positive:1;flex-grow:1}:host(.ion-touched.ion-invalid){--highlight-color:var(--highlight-color-invalid)}:host(.ion-valid){--highlight-color:var(--highlight-color-valid)}.select-bottom{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:5px;padding-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;border-top:var(--border-width) var(--border-style) var(--border-color);font-size:0.75rem;white-space:normal}:host(.has-focus.ion-valid),:host(.select-expanded.ion-valid),:host(.ion-touched.ion-invalid),:host(.select-expanded.ion-touched.ion-invalid){--border-color:var(--highlight-color)}.select-bottom .error-text{display:none;color:var(--highlight-color-invalid)}.select-bottom .helper-text{display:block;color:var(--ion-color-step-700, var(--ion-text-color-step-300, #4d4d4d))}:host(.ion-touched.ion-invalid) .select-bottom .error-text{display:block}:host(.ion-touched.ion-invalid) .select-bottom .helper-text{display:none}.label-text-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;max-width:200px;-webkit-transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);pointer-events:none}.label-text,::slotted([slot=label]){text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden,.select-outline-notch-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);overflow:hidden}:host(.select-justify-space-between) .select-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.select-justify-start) .select-wrapper{-ms-flex-pack:start;justify-content:start}:host(.select-justify-end) .select-wrapper{-ms-flex-pack:end;justify-content:end}:host(.select-label-placement-start) .select-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.select-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.select-label-placement-end) .select-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.select-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.select-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:0;margin-bottom:0}:host(.select-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.select-label-placement-stacked) .select-wrapper,:host(.select-label-placement-floating) .select-wrapper{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:start}:host(.select-label-placement-stacked) .label-text-wrapper,:host(.select-label-placement-floating) .label-text-wrapper{max-width:100%}:host(.select-ltr.select-label-placement-stacked) .label-text-wrapper,:host(.select-ltr.select-label-placement-floating) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top}:host(.select-rtl.select-label-placement-stacked) .label-text-wrapper,:host(.select-rtl.select-label-placement-floating) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}:host(.select-label-placement-stacked) .native-wrapper,:host(.select-label-placement-floating) .native-wrapper{margin-left:0;margin-right:0;margin-top:1px;margin-bottom:0;-ms-flex-positive:1;flex-grow:1;width:100%}:host(.select-label-placement-floating) .label-text-wrapper{-webkit-transform:translateY(100%) scale(1);transform:translateY(100%) scale(1)}:host(.select-label-placement-floating:not(.label-floating)) .native-wrapper .select-placeholder{opacity:0}:host(.select-expanded.select-label-placement-floating) .native-wrapper .select-placeholder,:host(.has-focus.select-label-placement-floating) .native-wrapper .select-placeholder,:host(.has-value.select-label-placement-floating) .native-wrapper .select-placeholder{opacity:1}:host(.label-floating) .label-text-wrapper{-webkit-transform:translateY(50%) scale(0.75);transform:translateY(50%) scale(0.75);max-width:calc(100% / 0.75)}::slotted([slot=start]),::slotted([slot=end]){-ms-flex-negative:0;flex-shrink:0}::slotted([slot=start]:last-of-type){-webkit-margin-end:16px;margin-inline-end:16px;-webkit-margin-start:0;margin-inline-start:0}::slotted([slot=end]:first-of-type){-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}:host(.select-fill-solid){--background:var(--ion-color-step-50, var(--ion-background-color-step-50, #f2f2f2));--border-color:var(--ion-color-step-500, var(--ion-background-color-step-500, gray));--border-radius:4px;--padding-start:16px;--padding-end:16px;min-height:56px}:host(.select-fill-solid) .select-wrapper{border-bottom:var(--border-width) var(--border-style) var(--border-color)}:host(.select-expanded.select-fill-solid.ion-valid),:host(.has-focus.select-fill-solid.ion-valid),:host(.select-fill-solid.ion-touched.ion-invalid){--border-color:var(--highlight-color)}:host(.select-fill-solid) .select-bottom{border-top:none}@media (any-hover: hover){:host(.select-fill-solid:hover){--background:var(--ion-color-step-100, var(--ion-background-color-step-100, #e6e6e6));--border-color:var(--ion-color-step-750, var(--ion-background-color-step-750, #404040))}}:host(.select-fill-solid.select-expanded),:host(.select-fill-solid.has-focus){--background:var(--ion-color-step-150, var(--ion-background-color-step-150, #d9d9d9));--border-color:var(--highlight-color)}:host(.select-fill-solid) .select-wrapper{border-start-start-radius:var(--border-radius);border-start-end-radius:var(--border-radius);border-end-end-radius:0px;border-end-start-radius:0px}:host(.label-floating.select-fill-solid) .label-text-wrapper{max-width:calc(100% / 0.75)}:host(.in-item.select-expanded.select-fill-solid) .select-wrapper .select-icon,:host(.in-item.has-focus.select-fill-solid) .select-wrapper .select-icon,:host(.in-item.has-focus.ion-valid.select-fill-solid) .select-wrapper .select-icon,:host(.in-item.ion-touched.ion-invalid.select-fill-solid) .select-wrapper .select-icon{color:var(--highlight-color)}:host(.select-fill-outline){--border-color:var(--ion-color-step-300, var(--ion-background-color-step-300, #b3b3b3));--border-radius:4px;--padding-start:16px;--padding-end:16px;min-height:56px}:host(.select-fill-outline.select-shape-round){--border-radius:28px;--padding-start:32px;--padding-end:32px}:host(.has-focus.select-fill-outline.ion-valid),:host(.select-fill-outline.ion-touched.ion-invalid){--border-color:var(--highlight-color)}@media (any-hover: hover){:host(.select-fill-outline:hover){--border-color:var(--ion-color-step-750, var(--ion-background-color-step-750, #404040))}}:host(.select-fill-outline.select-expanded),:host(.select-fill-outline.has-focus){--border-width:var(--highlight-height);--border-color:var(--highlight-color)}:host(.select-fill-outline) .select-bottom{border-top:none}:host(.select-fill-outline) .select-wrapper{border-bottom:none}:host(.select-ltr.select-fill-outline.select-label-placement-stacked) .label-text-wrapper,:host(.select-ltr.select-fill-outline.select-label-placement-floating) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top}:host(.select-rtl.select-fill-outline.select-label-placement-stacked) .label-text-wrapper,:host(.select-rtl.select-fill-outline.select-label-placement-floating) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}:host(.select-fill-outline.select-label-placement-stacked) .label-text-wrapper,:host(.select-fill-outline.select-label-placement-floating) .label-text-wrapper{position:absolute;max-width:calc(100% - var(--padding-start) - var(--padding-end))}:host(.select-fill-outline) .label-text-wrapper{position:relative;z-index:1}:host(.label-floating.select-fill-outline) .label-text-wrapper{-webkit-transform:translateY(-32%) scale(0.75);transform:translateY(-32%) scale(0.75);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;max-width:calc((100% - var(--padding-start) - var(--padding-end) - 8px) / 0.75)}:host(.select-fill-outline.select-label-placement-stacked) select,:host(.select-fill-outline.select-label-placement-floating) select{margin-left:0;margin-right:0;margin-top:6px;margin-bottom:6px}:host(.select-fill-outline) .select-outline-container{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;width:100%;height:100%}:host(.select-fill-outline) .select-outline-start,:host(.select-fill-outline) .select-outline-end{pointer-events:none}:host(.select-fill-outline) .select-outline-start,:host(.select-fill-outline) .select-outline-notch,:host(.select-fill-outline) .select-outline-end{border-top:var(--border-width) var(--border-style) var(--border-color);border-bottom:var(--border-width) var(--border-style) var(--border-color);-webkit-box-sizing:border-box;box-sizing:border-box}:host(.select-fill-outline) .select-outline-notch{max-width:calc(100% - var(--padding-start) - var(--padding-end))}:host(.select-fill-outline) .notch-spacer{-webkit-padding-end:8px;padding-inline-end:8px;font-size:calc(1em * 0.75);opacity:0;pointer-events:none}:host(.select-fill-outline) .select-outline-start{-webkit-border-start:var(--border-width) var(--border-style) var(--border-color);border-inline-start:var(--border-width) var(--border-style) var(--border-color)}:host(.select-fill-outline) .select-outline-start{border-start-start-radius:var(--border-radius);border-start-end-radius:0px;border-end-end-radius:0px;border-end-start-radius:var(--border-radius)}:host(.select-fill-outline) .select-outline-start{width:calc(var(--padding-start) - 4px)}:host(.select-fill-outline) .select-outline-end{-webkit-border-end:var(--border-width) var(--border-style) var(--border-color);border-inline-end:var(--border-width) var(--border-style) var(--border-color)}:host(.select-fill-outline) .select-outline-end{border-start-start-radius:0px;border-start-end-radius:var(--border-radius);border-end-end-radius:var(--border-radius);border-end-start-radius:0px}:host(.select-fill-outline) .select-outline-end{-ms-flex-positive:1;flex-grow:1}:host(.label-floating.select-fill-outline) .select-outline-notch{border-top:none}:host(.in-item.select-expanded.select-fill-outline) .select-wrapper .select-icon,:host(.in-item.has-focus.select-fill-outline) .select-wrapper .select-icon,:host(.in-item.has-focus.ion-valid.select-fill-outline) .select-wrapper .select-icon,:host(.in-item.ion-touched.ion-invalid.select-fill-outline) .select-wrapper .select-icon{color:var(--highlight-color)}:host{--border-width:1px;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.13)))));--highlight-height:2px}:host(.select-label-placement-floating.select-expanded) .label-text-wrapper,:host(.select-label-placement-floating.has-focus) .label-text-wrapper,:host(.select-label-placement-stacked.select-expanded) .label-text-wrapper,:host(.select-label-placement-stacked.has-focus) .label-text-wrapper{color:var(--highlight-color)}:host(.has-focus.select-label-placement-floating.ion-valid) .label-text-wrapper,:host(.select-label-placement-floating.ion-touched.ion-invalid) .label-text-wrapper,:host(.has-focus.select-label-placement-stacked.ion-valid) .label-text-wrapper,:host(.select-label-placement-stacked.ion-touched.ion-invalid) .label-text-wrapper{color:var(--highlight-color)}.select-highlight{bottom:-1px;position:absolute;width:100%;height:var(--highlight-height);-webkit-transform:scale(0);transform:scale(0);-webkit-transition:-webkit-transform 200ms;transition:-webkit-transform 200ms;transition:transform 200ms;transition:transform 200ms, -webkit-transform 200ms;background:var(--highlight-color)}.select-highlight{inset-inline-start:0}:host(.select-expanded) .select-highlight,:host(.has-focus) .select-highlight{-webkit-transform:scale(1);transform:scale(1)}:host(.in-item) .select-highlight{bottom:0}:host(.in-item) .select-highlight{inset-inline-start:0}.select-icon{width:0.8125rem;-webkit-transition:-webkit-transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:-webkit-transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:transform 0.15s cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);color:var(--ion-color-step-500, var(--ion-text-color-step-500, gray))}:host(.select-expanded:not(.has-expanded-icon)) .select-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host(.in-item.select-expanded) .select-wrapper .select-icon,:host(.in-item.has-focus) .select-wrapper .select-icon,:host(.in-item.has-focus.ion-valid) .select-wrapper .select-icon,:host(.in-item.ion-touched.ion-invalid) .select-wrapper .select-icon{color:var(--ion-color-step-500, var(--ion-text-color-step-500, gray))}:host(.select-expanded) .select-wrapper .select-icon,:host(.has-focus.ion-valid) .select-wrapper .select-icon,:host(.ion-touched.ion-invalid) .select-wrapper .select-icon,:host(.has-focus) .select-wrapper .select-icon{color:var(--highlight-color)}:host(.select-shape-round){--border-radius:16px}:host(.select-label-placement-stacked) .select-wrapper-inner,:host(.select-label-placement-floating) .select-wrapper-inner{width:calc(100% - 0.8125rem - 4px)}:host(.select-disabled){opacity:0.38}::slotted(ion-button[slot=start].button-has-icon-only),::slotted(ion-button[slot=end].button-has-icon-only){--border-radius:50%;--padding-start:8px;--padding-end:8px;--padding-top:8px;--padding-bottom:8px;aspect-ratio:1;min-height:40px}";
var Select = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionChange = createEvent(this, "ionChange", 7);
    this.ionCancel = createEvent(this, "ionCancel", 7);
    this.ionDismiss = createEvent(this, "ionDismiss", 7);
    this.ionFocus = createEvent(this, "ionFocus", 7);
    this.ionBlur = createEvent(this, "ionBlur", 7);
    this.ionStyle = createEvent(this, "ionStyle", 7);
    this.inputId = `ion-sel-${selectIds++}`;
    this.helperTextId = `${this.inputId}-helper-text`;
    this.errorTextId = `${this.inputId}-error-text`;
    this.inheritedAttributes = {};
    this.isExpanded = false;
    this.hasFocus = false;
    this.cancelText = "Cancel";
    this.disabled = false;
    this.interface = "alert";
    this.interfaceOptions = {};
    this.labelPlacement = "start";
    this.multiple = false;
    this.name = this.inputId;
    this.okText = "OK";
    this.required = false;
    this.onClick = (ev) => {
      const target = ev.target;
      const closestSlot = target.closest('[slot="start"], [slot="end"]');
      if (target === this.el || closestSlot === null) {
        this.setFocus();
        this.open(ev);
      } else {
        ev.preventDefault();
      }
    };
    this.onFocus = () => {
      this.hasFocus = true;
      this.ionFocus.emit();
    };
    this.onBlur = () => {
      this.hasFocus = false;
      this.ionBlur.emit();
    };
    this.onLabelClick = (ev) => {
      if (ev.target === ev.currentTarget) {
        ev.stopPropagation();
      }
    };
  }
  styleChanged() {
    this.emitStyle();
  }
  setValue(value) {
    this.value = value;
    this.ionChange.emit({
      value
    });
  }
  connectedCallback() {
    return __async(this, null, function* () {
      const {
        el
      } = this;
      this.notchController = createNotchController(el, () => this.notchSpacerEl, () => this.labelSlot);
      this.updateOverlayOptions();
      this.emitStyle();
      this.mutationO = watchForOptions(this.el, "ion-select-option", () => __async(this, null, function* () {
        this.updateOverlayOptions();
        forceUpdate(this);
      }));
    });
  }
  componentWillLoad() {
    this.inheritedAttributes = inheritAttributes(this.el, ["aria-label"]);
  }
  componentDidLoad() {
    this.emitStyle();
  }
  disconnectedCallback() {
    if (this.mutationO) {
      this.mutationO.disconnect();
      this.mutationO = void 0;
    }
    if (this.notchController) {
      this.notchController.destroy();
      this.notchController = void 0;
    }
  }
  /**
   * Open the select overlay. The overlay is either an alert, action sheet, or popover,
   * depending on the `interface` property on the `ion-select`.
   *
   * @param event The user interface event that called the open.
   */
  open(event) {
    return __async(this, null, function* () {
      if (this.disabled || this.isExpanded) {
        return void 0;
      }
      this.isExpanded = true;
      const overlay = this.overlay = yield this.createOverlay(event);
      const scrollSelectedIntoView = () => {
        const indexOfSelected = this.childOpts.findIndex((o) => o.value === this.value);
        if (indexOfSelected > -1) {
          const selectedItem = overlay.querySelector(`.select-interface-option:nth-of-type(${indexOfSelected + 1})`);
          if (selectedItem) {
            const interactiveEl = selectedItem.querySelector("ion-radio, ion-checkbox");
            if (interactiveEl) {
              selectedItem.scrollIntoView({
                block: "nearest"
              });
              interactiveEl.setFocus();
            }
            focusVisibleElement(selectedItem);
          }
        } else {
          const firstEnabledOption = overlay.querySelector("ion-radio:not(.radio-disabled), ion-checkbox:not(.checkbox-disabled)");
          if (firstEnabledOption) {
            firstEnabledOption.setFocus();
            focusVisibleElement(firstEnabledOption.closest("ion-item"));
          }
        }
      };
      if (this.interface === "modal") {
        overlay.addEventListener("ionModalWillPresent", scrollSelectedIntoView, {
          once: true
        });
      } else if (this.interface === "popover") {
        overlay.addEventListener("ionPopoverWillPresent", scrollSelectedIntoView, {
          once: true
        });
      } else {
        const scrollAfterRender = () => {
          requestAnimationFrame(() => {
            scrollSelectedIntoView();
          });
        };
        if (this.interface === "alert") {
          overlay.addEventListener("ionAlertWillPresent", scrollAfterRender, {
            once: true
          });
        } else if (this.interface === "action-sheet") {
          overlay.addEventListener("ionActionSheetWillPresent", scrollAfterRender, {
            once: true
          });
        }
      }
      overlay.onDidDismiss().then(() => {
        this.overlay = void 0;
        this.isExpanded = false;
        this.ionDismiss.emit();
        this.setFocus();
      });
      yield overlay.present();
      return overlay;
    });
  }
  createOverlay(ev) {
    let selectInterface = this.interface;
    if (selectInterface === "action-sheet" && this.multiple) {
      printIonWarning(`[ion-select] - Interface cannot be "${selectInterface}" with a multi-value select. Using the "alert" interface instead.`);
      selectInterface = "alert";
    }
    if (selectInterface === "popover" && !ev) {
      printIonWarning(`[ion-select] - Interface cannot be a "${selectInterface}" without passing an event. Using the "alert" interface instead.`);
      selectInterface = "alert";
    }
    if (selectInterface === "action-sheet") {
      return this.openActionSheet();
    }
    if (selectInterface === "popover") {
      return this.openPopover(ev);
    }
    if (selectInterface === "modal") {
      return this.openModal();
    }
    return this.openAlert();
  }
  updateOverlayOptions() {
    const overlay = this.overlay;
    if (!overlay) {
      return;
    }
    const childOpts = this.childOpts;
    const value = this.value;
    switch (this.interface) {
      case "action-sheet":
        overlay.buttons = this.createActionSheetButtons(childOpts, value);
        break;
      case "popover":
        const popover = overlay.querySelector("ion-select-popover");
        if (popover) {
          popover.options = this.createOverlaySelectOptions(childOpts, value);
        }
        break;
      case "modal":
        const modal = overlay.querySelector("ion-select-modal");
        if (modal) {
          modal.options = this.createOverlaySelectOptions(childOpts, value);
        }
        break;
      case "alert":
        const inputType = this.multiple ? "checkbox" : "radio";
        overlay.inputs = this.createAlertInputs(childOpts, inputType, value);
        break;
    }
  }
  createActionSheetButtons(data, selectValue) {
    const actionSheetButtons = data.map((option) => {
      const value = getOptionValue(option);
      const copyClasses = Array.from(option.classList).filter((cls) => cls !== "hydrated").join(" ");
      const optClass = `${OPTION_CLASS} ${copyClasses}`;
      return {
        role: isOptionSelected(selectValue, value, this.compareWith) ? "selected" : "",
        text: option.textContent,
        cssClass: optClass,
        handler: () => {
          this.setValue(value);
        }
      };
    });
    actionSheetButtons.push({
      text: this.cancelText,
      role: "cancel",
      handler: () => {
        this.ionCancel.emit();
      }
    });
    return actionSheetButtons;
  }
  createAlertInputs(data, inputType, selectValue) {
    const alertInputs = data.map((option) => {
      const value = getOptionValue(option);
      const copyClasses = Array.from(option.classList).filter((cls) => cls !== "hydrated").join(" ");
      const optClass = `${OPTION_CLASS} ${copyClasses}`;
      return {
        type: inputType,
        cssClass: optClass,
        label: option.textContent || "",
        value,
        checked: isOptionSelected(selectValue, value, this.compareWith),
        disabled: option.disabled
      };
    });
    return alertInputs;
  }
  createOverlaySelectOptions(data, selectValue) {
    const popoverOptions = data.map((option) => {
      const value = getOptionValue(option);
      const copyClasses = Array.from(option.classList).filter((cls) => cls !== "hydrated").join(" ");
      const optClass = `${OPTION_CLASS} ${copyClasses}`;
      return {
        text: option.textContent || "",
        cssClass: optClass,
        value,
        checked: isOptionSelected(selectValue, value, this.compareWith),
        disabled: option.disabled,
        handler: (selected) => {
          this.setValue(selected);
          if (!this.multiple) {
            this.close();
          }
        }
      };
    });
    return popoverOptions;
  }
  openPopover(ev) {
    return __async(this, null, function* () {
      const {
        fill,
        labelPlacement
      } = this;
      const interfaceOptions = this.interfaceOptions;
      const mode = getIonMode(this);
      const showBackdrop = mode === "md" ? false : true;
      const multiple = this.multiple;
      const value = this.value;
      let event = ev;
      let size = "auto";
      const hasFloatingOrStackedLabel = labelPlacement === "floating" || labelPlacement === "stacked";
      if (hasFloatingOrStackedLabel || mode === "md" && fill !== void 0) {
        size = "cover";
      } else {
        event = Object.assign(Object.assign({}, ev), {
          detail: {
            ionShadowTarget: this.nativeWrapperEl
          }
        });
      }
      const popoverOpts = Object.assign(Object.assign({
        mode,
        event,
        alignment: "center",
        size,
        showBackdrop
      }, interfaceOptions), {
        component: "ion-select-popover",
        cssClass: ["select-popover", interfaceOptions.cssClass],
        componentProps: {
          header: interfaceOptions.header,
          subHeader: interfaceOptions.subHeader,
          message: interfaceOptions.message,
          multiple,
          value,
          options: this.createOverlaySelectOptions(this.childOpts, value)
        }
      });
      return popoverController.create(popoverOpts);
    });
  }
  openActionSheet() {
    return __async(this, null, function* () {
      const mode = getIonMode(this);
      const interfaceOptions = this.interfaceOptions;
      const actionSheetOpts = Object.assign(Object.assign({
        mode
      }, interfaceOptions), {
        buttons: this.createActionSheetButtons(this.childOpts, this.value),
        cssClass: ["select-action-sheet", interfaceOptions.cssClass]
      });
      return actionSheetController.create(actionSheetOpts);
    });
  }
  openAlert() {
    return __async(this, null, function* () {
      const interfaceOptions = this.interfaceOptions;
      const inputType = this.multiple ? "checkbox" : "radio";
      const mode = getIonMode(this);
      const alertOpts = Object.assign(Object.assign({
        mode
      }, interfaceOptions), {
        header: interfaceOptions.header ? interfaceOptions.header : this.labelText,
        inputs: this.createAlertInputs(this.childOpts, inputType, this.value),
        buttons: [{
          text: this.cancelText,
          role: "cancel",
          handler: () => {
            this.ionCancel.emit();
          }
        }, {
          text: this.okText,
          handler: (selectedValues) => {
            this.setValue(selectedValues);
          }
        }],
        cssClass: ["select-alert", interfaceOptions.cssClass, this.multiple ? "multiple-select-alert" : "single-select-alert"]
      });
      return alertController.create(alertOpts);
    });
  }
  openModal() {
    const {
      multiple,
      value,
      interfaceOptions
    } = this;
    const mode = getIonMode(this);
    const modalOpts = Object.assign(Object.assign({}, interfaceOptions), {
      mode,
      cssClass: ["select-modal", interfaceOptions.cssClass],
      component: "ion-select-modal",
      componentProps: {
        header: interfaceOptions.header,
        multiple,
        value,
        options: this.createOverlaySelectOptions(this.childOpts, value)
      }
    });
    return modalController.create(modalOpts);
  }
  /**
   * Close the select interface.
   */
  close() {
    if (!this.overlay) {
      return Promise.resolve(false);
    }
    return this.overlay.dismiss();
  }
  hasValue() {
    return this.getText() !== "";
  }
  get childOpts() {
    return Array.from(this.el.querySelectorAll("ion-select-option"));
  }
  /**
   * Returns any plaintext associated with
   * the label (either prop or slot).
   * Note: This will not return any custom
   * HTML. Use the `hasLabel` getter if you
   * want to know if any slotted label content
   * was passed.
   */
  get labelText() {
    const {
      label
    } = this;
    if (label !== void 0) {
      return label;
    }
    const {
      labelSlot
    } = this;
    if (labelSlot !== null) {
      return labelSlot.textContent;
    }
    return;
  }
  getText() {
    const selectedText = this.selectedText;
    if (selectedText != null && selectedText !== "") {
      return selectedText;
    }
    return generateText(this.childOpts, this.value, this.compareWith);
  }
  setFocus() {
    if (this.focusEl) {
      this.focusEl.focus();
    }
  }
  emitStyle() {
    const {
      disabled
    } = this;
    const style = {
      "interactive-disabled": disabled
    };
    this.ionStyle.emit(style);
  }
  renderLabel() {
    const {
      label
    } = this;
    return h("div", {
      class: {
        "label-text-wrapper": true,
        "label-text-wrapper-hidden": !this.hasLabel
      },
      part: "label"
    }, label === void 0 ? h("slot", {
      name: "label"
    }) : h("div", {
      class: "label-text"
    }, label));
  }
  componentDidRender() {
    var _a;
    (_a = this.notchController) === null || _a === void 0 ? void 0 : _a.calculateNotchWidth();
  }
  /**
   * Gets any content passed into the `label` slot,
   * not the <slot> definition.
   */
  get labelSlot() {
    return this.el.querySelector('[slot="label"]');
  }
  /**
   * Returns `true` if label content is provided
   * either by a prop or a content. If you want
   * to get the plaintext value of the label use
   * the `labelText` getter instead.
   */
  get hasLabel() {
    return this.label !== void 0 || this.labelSlot !== null;
  }
  /**
   * Renders the border container
   * when fill="outline".
   */
  renderLabelContainer() {
    const mode = getIonMode(this);
    const hasOutlineFill = mode === "md" && this.fill === "outline";
    if (hasOutlineFill) {
      return [h("div", {
        class: "select-outline-container"
      }, h("div", {
        class: "select-outline-start"
      }), h("div", {
        class: {
          "select-outline-notch": true,
          "select-outline-notch-hidden": !this.hasLabel
        }
      }, h("div", {
        class: "notch-spacer",
        "aria-hidden": "true",
        ref: (el) => this.notchSpacerEl = el
      }, this.label)), h("div", {
        class: "select-outline-end"
      })), this.renderLabel()];
    }
    return this.renderLabel();
  }
  /**
   * Renders either the placeholder
   * or the selected values based on
   * the state of the select.
   */
  renderSelectText() {
    const {
      placeholder
    } = this;
    const displayValue = this.getText();
    let addPlaceholderClass = false;
    let selectText = displayValue;
    if (selectText === "" && placeholder !== void 0) {
      selectText = placeholder;
      addPlaceholderClass = true;
    }
    const selectTextClasses = {
      "select-text": true,
      "select-placeholder": addPlaceholderClass
    };
    const textPart = addPlaceholderClass ? "placeholder" : "text";
    return h("div", {
      "aria-hidden": "true",
      class: selectTextClasses,
      part: textPart
    }, selectText);
  }
  /**
   * Renders the chevron icon
   * next to the select text.
   */
  renderSelectIcon() {
    const mode = getIonMode(this);
    const {
      isExpanded,
      toggleIcon,
      expandedIcon
    } = this;
    let icon;
    if (isExpanded && expandedIcon !== void 0) {
      icon = expandedIcon;
    } else {
      const defaultIcon = mode === "ios" ? chevronExpand : caretDownSharp;
      icon = toggleIcon !== null && toggleIcon !== void 0 ? toggleIcon : defaultIcon;
    }
    return h("ion-icon", {
      class: "select-icon",
      part: "icon",
      "aria-hidden": "true",
      icon
    });
  }
  get ariaLabel() {
    var _a;
    const {
      placeholder,
      inheritedAttributes
    } = this;
    const displayValue = this.getText();
    const definedLabel = (_a = inheritedAttributes["aria-label"]) !== null && _a !== void 0 ? _a : this.labelText;
    let renderedLabel = displayValue;
    if (renderedLabel === "" && placeholder !== void 0) {
      renderedLabel = placeholder;
    }
    if (definedLabel !== void 0) {
      renderedLabel = renderedLabel === "" ? definedLabel : `${definedLabel}, ${renderedLabel}`;
    }
    return renderedLabel;
  }
  renderListbox() {
    const {
      disabled,
      inputId,
      isExpanded,
      required
    } = this;
    return h("button", {
      disabled,
      id: inputId,
      "aria-label": this.ariaLabel,
      "aria-haspopup": "dialog",
      "aria-expanded": `${isExpanded}`,
      "aria-describedby": this.getHintTextID(),
      "aria-invalid": this.getHintTextID() === this.errorTextId,
      "aria-required": `${required}`,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      ref: (focusEl) => this.focusEl = focusEl
    });
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
    return [h("div", {
      id: helperTextId,
      class: "helper-text",
      part: "supporting-text helper-text"
    }, helperText), h("div", {
      id: errorTextId,
      class: "error-text",
      part: "supporting-text error-text"
    }, errorText)];
  }
  /**
   * Responsible for rendering helper text, and error text. This element
   * should only be rendered if hint text is set.
   */
  renderBottomContent() {
    const {
      helperText,
      errorText
    } = this;
    const hasHintText = !!helperText || !!errorText;
    if (!hasHintText) {
      return;
    }
    return h("div", {
      class: "select-bottom"
    }, this.renderHintText());
  }
  render() {
    const {
      disabled,
      el,
      isExpanded,
      expandedIcon,
      labelPlacement,
      justify,
      placeholder,
      fill,
      shape,
      name,
      value,
      hasFocus
    } = this;
    const mode = getIonMode(this);
    const hasFloatingOrStackedLabel = labelPlacement === "floating" || labelPlacement === "stacked";
    const justifyEnabled = !hasFloatingOrStackedLabel && justify !== void 0;
    const rtl = isRTL(el) ? "rtl" : "ltr";
    const inItem = hostContext("ion-item", this.el);
    const shouldRenderHighlight = mode === "md" && fill !== "outline" && !inItem;
    const hasValue = this.hasValue();
    const hasStartEndSlots = el.querySelector('[slot="start"], [slot="end"]') !== null;
    renderHiddenInput(true, el, name, parseValue(value), disabled);
    const labelShouldFloat = labelPlacement === "stacked" || labelPlacement === "floating" && (hasValue || isExpanded || hasStartEndSlots);
    return h(Host, {
      key: "c03fb65e8fc9f9aab295e07b282377d57d910519",
      onClick: this.onClick,
      class: createColorClasses(this.color, {
        [mode]: true,
        "in-item": inItem,
        "in-item-color": hostContext("ion-item.ion-color", el),
        "select-disabled": disabled,
        "select-expanded": isExpanded,
        "has-expanded-icon": expandedIcon !== void 0,
        "has-value": hasValue,
        "label-floating": labelShouldFloat,
        "has-placeholder": placeholder !== void 0,
        "has-focus": hasFocus,
        // TODO(FW-6451): Remove `ion-focusable` class in favor of `has-focus`.
        "ion-focusable": true,
        [`select-${rtl}`]: true,
        [`select-fill-${fill}`]: fill !== void 0,
        [`select-justify-${justify}`]: justifyEnabled,
        [`select-shape-${shape}`]: shape !== void 0,
        [`select-label-placement-${labelPlacement}`]: true
      })
    }, h("label", {
      key: "0d0c8ec55269adcac625f2899a547f4e7f3e3741",
      class: "select-wrapper",
      id: "select-label",
      onClick: this.onLabelClick
    }, this.renderLabelContainer(), h("div", {
      key: "f6dfc93c0e23cbe75a2947abde67d842db2dad78",
      class: "select-wrapper-inner"
    }, h("slot", {
      key: "957bfadf9f101f519091419a362d3abdc2be66f6",
      name: "start"
    }), h("div", {
      key: "ca349202a484e7f2e884533fd330f0b136754f7d",
      class: "native-wrapper",
      ref: (el2) => this.nativeWrapperEl = el2,
      part: "container"
    }, this.renderSelectText(), this.renderListbox()), h("slot", {
      key: "f0e62a6533ff1c8f62bd2d27f60b23385c4fa9ed",
      name: "end"
    }), !hasFloatingOrStackedLabel && this.renderSelectIcon()), hasFloatingOrStackedLabel && this.renderSelectIcon(), shouldRenderHighlight && h("div", {
      key: "fb840d46bafafb09898ebeebbe8c181906a3d8a2",
      class: "select-highlight"
    })), this.renderBottomContent());
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "disabled": ["styleChanged"],
      "isExpanded": ["styleChanged"],
      "placeholder": ["styleChanged"],
      "value": ["styleChanged"]
    };
  }
};
var getOptionValue = (el) => {
  const value = el.value;
  return value === void 0 ? el.textContent || "" : value;
};
var parseValue = (value) => {
  if (value == null) {
    return void 0;
  }
  if (Array.isArray(value)) {
    return value.join(",");
  }
  return value.toString();
};
var generateText = (opts, value, compareWith) => {
  if (value === void 0) {
    return "";
  }
  if (Array.isArray(value)) {
    return value.map((v) => textForValue(opts, v, compareWith)).filter((opt) => opt !== null).join(", ");
  } else {
    return textForValue(opts, value, compareWith) || "";
  }
};
var textForValue = (opts, value, compareWith) => {
  const selectOpt = opts.find((opt) => {
    return compareOptions(value, getOptionValue(opt), compareWith);
  });
  return selectOpt ? selectOpt.textContent : null;
};
var selectIds = 0;
var OPTION_CLASS = "select-interface-option";
Select.style = {
  ios: selectIosCss,
  md: selectMdCss
};
var selectOptionCss = ":host{display:none}";
var SelectOption = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.inputId = `ion-selopt-${selectOptionIds++}`;
    this.disabled = false;
  }
  render() {
    return h(Host, {
      key: "3a70eea9fa03a9acba582180761d18347c72acee",
      role: "option",
      id: this.inputId,
      class: getIonMode(this)
    });
  }
  get el() {
    return getElement(this);
  }
};
var selectOptionIds = 0;
SelectOption.style = selectOptionCss;
var selectPopoverIosCss = ".sc-ion-select-popover-ios-h ion-list.sc-ion-select-popover-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-list-header.sc-ion-select-popover-ios,ion-label.sc-ion-select-popover-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.sc-ion-select-popover-ios-h{overflow-y:auto}";
var selectPopoverMdCss = '.sc-ion-select-popover-md-h ion-list.sc-ion-select-popover-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-list-header.sc-ion-select-popover-md,ion-label.sc-ion-select-popover-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.sc-ion-select-popover-md-h{overflow-y:auto}ion-list.sc-ion-select-popover-md ion-radio.sc-ion-select-popover-md::part(container),ion-list.sc-ion-select-popover-md ion-radio.sc-ion-select-popover-md [part~="container"]{display:none}ion-list.sc-ion-select-popover-md ion-radio.sc-ion-select-popover-md::part(label),ion-list.sc-ion-select-popover-md ion-radio.sc-ion-select-popover-md [part~="label"]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-item.sc-ion-select-popover-md{--inner-border-width:0}.item-radio-checked.sc-ion-select-popover-md{--background:rgba(var(--ion-color-primary-rgb, 0, 84, 233), 0.08);--background-focused:var(--ion-color-primary, #0054e9);--background-focused-opacity:0.2;--background-hover:var(--ion-color-primary, #0054e9);--background-hover-opacity:0.12}.item-checkbox-checked.sc-ion-select-popover-md{--background-activated:var(--ion-item-color, var(--ion-text-color, #000));--background-focused:var(--ion-item-color, var(--ion-text-color, #000));--background-hover:var(--ion-item-color, var(--ion-text-color, #000));--color:var(--ion-color-primary, #0054e9)}';
var SelectPopover = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.options = [];
  }
  findOptionFromEvent(ev) {
    const {
      options
    } = this;
    return options.find((o) => o.value === ev.target.value);
  }
  /**
   * When an option is selected we need to get the value(s)
   * of the selected option(s) and return it in the option
   * handler
   */
  callOptionHandler(ev) {
    const option = this.findOptionFromEvent(ev);
    const values = this.getValues(ev);
    if (option === null || option === void 0 ? void 0 : option.handler) {
      safeCall(option.handler, values);
    }
  }
  /**
   * Dismisses the host popover that the `ion-select-popover`
   * is rendered within.
   */
  dismissParentPopover() {
    const popover = this.el.closest("ion-popover");
    if (popover) {
      popover.dismiss();
    }
  }
  setChecked(ev) {
    const {
      multiple
    } = this;
    const option = this.findOptionFromEvent(ev);
    if (multiple && option) {
      option.checked = ev.detail.checked;
    }
  }
  getValues(ev) {
    const {
      multiple,
      options
    } = this;
    if (multiple) {
      return options.filter((o) => o.checked).map((o) => o.value);
    }
    const option = this.findOptionFromEvent(ev);
    return option ? option.value : void 0;
  }
  renderOptions(options) {
    const {
      multiple
    } = this;
    switch (multiple) {
      case true:
        return this.renderCheckboxOptions(options);
      default:
        return this.renderRadioOptions(options);
    }
  }
  renderCheckboxOptions(options) {
    return options.map((option) => h("ion-item", {
      class: Object.assign({
        // TODO FW-4784
        "item-checkbox-checked": option.checked
      }, getClassMap(option.cssClass))
    }, h("ion-checkbox", {
      value: option.value,
      disabled: option.disabled,
      checked: option.checked,
      justify: "start",
      labelPlacement: "end",
      onIonChange: (ev) => {
        this.setChecked(ev);
        this.callOptionHandler(ev);
        forceUpdate(this);
      }
    }, option.text)));
  }
  renderRadioOptions(options) {
    const checked = options.filter((o) => o.checked).map((o) => o.value)[0];
    return h("ion-radio-group", {
      value: checked,
      onIonChange: (ev) => this.callOptionHandler(ev)
    }, options.map((option) => h("ion-item", {
      class: Object.assign({
        // TODO FW-4784
        "item-radio-checked": option.value === checked
      }, getClassMap(option.cssClass))
    }, h("ion-radio", {
      value: option.value,
      disabled: option.disabled,
      onClick: () => this.dismissParentPopover(),
      onKeyUp: (ev) => {
        if (ev.key === " ") {
          this.dismissParentPopover();
        }
      }
    }, option.text))));
  }
  render() {
    const {
      header,
      message,
      options,
      subHeader
    } = this;
    const hasSubHeaderOrMessage = subHeader !== void 0 || message !== void 0;
    return h(Host, {
      key: "ab931b49b59283825bd2afa3f7f995b0e6e05bef",
      class: getIonMode(this)
    }, h("ion-list", {
      key: "3bd12b67832607596b912a73d5b3ae9b954b244d"
    }, header !== void 0 && h("ion-list-header", {
      key: "97da930246edf7423a039c030d40e3ff7a5148a3"
    }, header), hasSubHeaderOrMessage && h("ion-item", {
      key: "c579df6ea8fac07bb0c59d34c69b149656863224"
    }, h("ion-label", {
      key: "af699c5f465710ccb13b8cf8e7be66f0e8acfad1",
      class: "ion-text-wrap"
    }, subHeader !== void 0 && h("h3", {
      key: "df9a936d42064b134e843c7229f314a2a3ec7e80"
    }, subHeader), message !== void 0 && h("p", {
      key: "9c3ddad378df00f106afa94e9928cf68c17124dd"
    }, message))), this.renderOptions(options)));
  }
  get el() {
    return getElement(this);
  }
};
SelectPopover.style = {
  ios: selectPopoverIosCss,
  md: selectPopoverMdCss
};
export {
  Select as ion_select,
  SelectOption as ion_select_option,
  SelectPopover as ion_select_popover
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-select_3.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tc2VsZWN0XzMuZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBjcmVhdGVFdmVudCwgZiBhcyBwcmludElvbldhcm5pbmcsIGgsIGQgYXMgSG9zdCwgZyBhcyBnZXRFbGVtZW50LCBpIGFzIGZvcmNlVXBkYXRlIH0gZnJvbSAnLi9pbmRleC00RHhZNl9nRy5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZU5vdGNoQ29udHJvbGxlciB9IGZyb20gJy4vbm90Y2gtY29udHJvbGxlci1sYjQxNy1rVS5qcyc7XG5pbXBvcnQgeyBpIGFzIGlzT3B0aW9uU2VsZWN0ZWQsIGMgYXMgY29tcGFyZU9wdGlvbnMgfSBmcm9tICcuL2NvbXBhcmUtd2l0aC11dGlscy1zT2JZeXZPeS5qcyc7XG5pbXBvcnQgeyBiIGFzIGluaGVyaXRBdHRyaWJ1dGVzLCBhIGFzIHJlbmRlckhpZGRlbklucHV0LCBuIGFzIGZvY3VzVmlzaWJsZUVsZW1lbnQgfSBmcm9tICcuL2hlbHBlcnMtOEtTUVFHUXkuanMnO1xuaW1wb3J0IHsgYyBhcyBwb3BvdmVyQ29udHJvbGxlciwgYiBhcyBhY3Rpb25TaGVldENvbnRyb2xsZXIsIGEgYXMgYWxlcnRDb250cm9sbGVyLCBtIGFzIG1vZGFsQ29udHJvbGxlciwgcyBhcyBzYWZlQ2FsbCB9IGZyb20gJy4vb3ZlcmxheXMtWlhfNC10X3IuanMnO1xuaW1wb3J0IHsgaSBhcyBpc1JUTCB9IGZyb20gJy4vZGlyLUM1M2ZlYWdELmpzJztcbmltcG9ydCB7IGggYXMgaG9zdENvbnRleHQsIGMgYXMgY3JlYXRlQ29sb3JDbGFzc2VzLCBnIGFzIGdldENsYXNzTWFwIH0gZnJvbSAnLi90aGVtZS1EaVZKeXFsWC5qcyc7XG5pbXBvcnQgeyB3IGFzIHdhdGNoRm9yT3B0aW9ucyB9IGZyb20gJy4vd2F0Y2gtb3B0aW9ucy1EdGRtOGxLQy5qcyc7XG5pbXBvcnQgeyB3IGFzIGNoZXZyb25FeHBhbmQsIHEgYXMgY2FyZXREb3duU2hhcnAgfSBmcm9tICcuL2luZGV4LURWM3NKSlc4LmpzJztcbmltcG9ydCB7IGIgYXMgZ2V0SW9uTW9kZSB9IGZyb20gJy4vaW9uaWMtZ2xvYmFsLUNUU3l1ZmhGLmpzJztcbmltcG9ydCAnLi9pbmRleC1aalA0Q2plWi5qcyc7XG5pbXBvcnQgJy4vaGFyZHdhcmUtYmFjay1idXR0b24tRGhiZC0yM0guanMnO1xuaW1wb3J0ICcuL2ZyYW1ld29yay1kZWxlZ2F0ZS1CTEVCZ0gwNi5qcyc7XG5pbXBvcnQgJy4vZ2VzdHVyZS1jb250cm9sbGVyLUJURU9zMWF0LmpzJztcbmNvbnN0IHNlbGVjdElvc0NzcyA9IFwiOmhvc3R7LS1wYWRkaW5nLXRvcDowcHg7LS1wYWRkaW5nLWVuZDowcHg7LS1wYWRkaW5nLWJvdHRvbTowcHg7LS1wYWRkaW5nLXN0YXJ0OjBweDstLXBsYWNlaG9sZGVyLWNvbG9yOmN1cnJlbnRDb2xvcjstLXBsYWNlaG9sZGVyLW9wYWNpdHk6dmFyKC0taW9uLXBsYWNlaG9sZGVyLW9wYWNpdHksIDAuNik7LS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50Oy0tYm9yZGVyLXN0eWxlOnNvbGlkOy0taGlnaGxpZ2h0LWNvbG9yLWZvY3VzZWQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMwMDU0ZTkpOy0taGlnaGxpZ2h0LWNvbG9yLXZhbGlkOnZhcigtLWlvbi1jb2xvci1zdWNjZXNzLCAjMmRkNTViKTstLWhpZ2hsaWdodC1jb2xvci1pbnZhbGlkOnZhcigtLWlvbi1jb2xvci1kYW5nZXIsICNjNTAwMGYpOy0taGlnaGxpZ2h0LWNvbG9yOnZhcigtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkKTtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCU7bWluLWhlaWdodDo0NHB4O2ZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseSwgaW5oZXJpdCk7d2hpdGUtc3BhY2U6bm93cmFwO2N1cnNvcjpwb2ludGVyO3otaW5kZXg6Mn06aG9zdCguc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1mbG9hdGluZyksOmhvc3QoLnNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZCl7bWluLWhlaWdodDo1NnB4fTpob3N0KC5pb24tY29sb3Ipey0taGlnaGxpZ2h0LWNvbG9yLWZvY3VzZWQ6dmFyKC0taW9uLWNvbG9yLWJhc2UpfTpob3N0KC5pbi1pdGVtKXstbXMtZmxleDoxIDEgMHB4O2ZsZXg6MSAxIDB9Omhvc3QoLnNlbGVjdC1kaXNhYmxlZCl7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdCguaGFzLWZvY3VzKSBidXR0b257Ym9yZGVyOjJweCBzb2xpZCAjNWU5ZWQ2fTpob3N0KFtzbG90PXN0YXJ0XSksOmhvc3QoW3Nsb3Q9ZW5kXSl7LW1zLWZsZXg6aW5pdGlhbDtmbGV4OmluaXRpYWw7d2lkdGg6YXV0b30uc2VsZWN0LXBsYWNlaG9sZGVye2NvbG9yOnZhcigtLXBsYWNlaG9sZGVyLWNvbG9yKTtvcGFjaXR5OnZhcigtLXBsYWNlaG9sZGVyLW9wYWNpdHkpfWJ1dHRvbntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDtib3R0b206MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO21hcmdpbjowO3BhZGRpbmc6MDtib3JkZXI6MDtvdXRsaW5lOjA7Y2xpcDpyZWN0KDAgMCAwIDApO29wYWNpdHk6MDtvdmVyZmxvdzpoaWRkZW47LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmV9LnNlbGVjdC1pY29uey13ZWJraXQtbWFyZ2luLXN0YXJ0OjRweDttYXJnaW4taW5saW5lLXN0YXJ0OjRweDstd2Via2l0LW1hcmdpbi1lbmQ6MDttYXJnaW4taW5saW5lLWVuZDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtbmVnYXRpdmU6MDtmbGV4LXNocmluazowfTpob3N0KC5pbi1pdGVtLWNvbG9yKSAuc2VsZWN0LWljb257Y29sb3I6aW5oZXJpdH06aG9zdCguc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1zdGFja2VkKSAuc2VsZWN0LWljb24sOmhvc3QoLnNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtZmxvYXRpbmcpIC5zZWxlY3QtaWNvbntwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6MTAwJX06aG9zdCguc2VsZWN0LWx0ci5zZWxlY3QtbGFiZWwtcGxhY2VtZW50LXN0YWNrZWQpIC5zZWxlY3QtaWNvbiw6aG9zdCguc2VsZWN0LWx0ci5zZWxlY3QtbGFiZWwtcGxhY2VtZW50LWZsb2F0aW5nKSAuc2VsZWN0LWljb257cmlnaHQ6dmFyKC0tcGFkZGluZy1lbmQsIDApfTpob3N0KC5zZWxlY3QtcnRsLnNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZCkgLnNlbGVjdC1pY29uLDpob3N0KC5zZWxlY3QtcnRsLnNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtZmxvYXRpbmcpIC5zZWxlY3QtaWNvbntsZWZ0OnZhcigtLXBhZGRpbmctc3RhcnQsIDApfS5zZWxlY3QtdGV4dHstbXMtZmxleDoxO2ZsZXg6MTttaW4td2lkdGg6MTZweDtmb250LXNpemU6aW5oZXJpdDt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOmluaGVyaXQ7b3ZlcmZsb3c6aGlkZGVufS5zZWxlY3Qtd3JhcHBlcnstd2Via2l0LXBhZGRpbmctc3RhcnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7cGFkZGluZy1pbmxpbmUtc3RhcnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7LXdlYmtpdC1wYWRkaW5nLWVuZDp2YXIoLS1wYWRkaW5nLWVuZCk7cGFkZGluZy1pbmxpbmUtZW5kOnZhcigtLXBhZGRpbmctZW5kKTtwYWRkaW5nLXRvcDp2YXIoLS1wYWRkaW5nLXRvcCk7cGFkZGluZy1ib3R0b206dmFyKC0tcGFkZGluZy1ib3R0b20pO2JvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtcG9zaXRpdmU6MTtmbGV4LWdyb3c6MTstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6anVzdGlmeTtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtoZWlnaHQ6aW5oZXJpdDttaW4taGVpZ2h0OmluaGVyaXQ7LXdlYmtpdC10cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgMTVtcyBsaW5lYXI7dHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIDE1bXMgbGluZWFyO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7bGluZS1oZWlnaHQ6bm9ybWFsO2N1cnNvcjppbmhlcml0Oy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveH0uc2VsZWN0LXdyYXBwZXIgLnNlbGVjdC1wbGFjZWhvbGRlcnstd2Via2l0LXRyYW5zaXRpb246b3BhY2l0eSAxNTBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO3RyYW5zaXRpb246b3BhY2l0eSAxNTBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpfS5zZWxlY3Qtd3JhcHBlci1pbm5lcntkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO292ZXJmbG93OmhpZGRlbn06aG9zdCguc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1zdGFja2VkKSAuc2VsZWN0LXdyYXBwZXItaW5uZXIsOmhvc3QoLnNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtZmxvYXRpbmcpIC5zZWxlY3Qtd3JhcHBlci1pbm5lcnstbXMtZmxleC1wb3NpdGl2ZToxO2ZsZXgtZ3JvdzoxfTpob3N0KC5pb24tdG91Y2hlZC5pb24taW52YWxpZCl7LS1oaWdobGlnaHQtY29sb3I6dmFyKC0taGlnaGxpZ2h0LWNvbG9yLWludmFsaWQpfTpob3N0KC5pb24tdmFsaWQpey0taGlnaGxpZ2h0LWNvbG9yOnZhcigtLWhpZ2hsaWdodC1jb2xvci12YWxpZCl9LnNlbGVjdC1ib3R0b217LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OnZhcigtLXBhZGRpbmctc3RhcnQpO3BhZGRpbmctaW5saW5lLXN0YXJ0OnZhcigtLXBhZGRpbmctc3RhcnQpOy13ZWJraXQtcGFkZGluZy1lbmQ6dmFyKC0tcGFkZGluZy1lbmQpO3BhZGRpbmctaW5saW5lLWVuZDp2YXIoLS1wYWRkaW5nLWVuZCk7cGFkZGluZy10b3A6NXB4O3BhZGRpbmctYm90dG9tOjA7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtcGFjazpqdXN0aWZ5O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2JvcmRlci10b3A6dmFyKC0tYm9yZGVyLXdpZHRoKSB2YXIoLS1ib3JkZXItc3R5bGUpIHZhcigtLWJvcmRlci1jb2xvcik7Zm9udC1zaXplOjAuNzVyZW07d2hpdGUtc3BhY2U6bm9ybWFsfTpob3N0KC5oYXMtZm9jdXMuaW9uLXZhbGlkKSw6aG9zdCguc2VsZWN0LWV4cGFuZGVkLmlvbi12YWxpZCksOmhvc3QoLmlvbi10b3VjaGVkLmlvbi1pbnZhbGlkKSw6aG9zdCguc2VsZWN0LWV4cGFuZGVkLmlvbi10b3VjaGVkLmlvbi1pbnZhbGlkKXstLWJvcmRlci1jb2xvcjp2YXIoLS1oaWdobGlnaHQtY29sb3IpfS5zZWxlY3QtYm90dG9tIC5lcnJvci10ZXh0e2Rpc3BsYXk6bm9uZTtjb2xvcjp2YXIoLS1oaWdobGlnaHQtY29sb3ItaW52YWxpZCl9LnNlbGVjdC1ib3R0b20gLmhlbHBlci10ZXh0e2Rpc3BsYXk6YmxvY2s7Y29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtNzAwLCB2YXIoLS1pb24tdGV4dC1jb2xvci1zdGVwLTMwMCwgIzRkNGQ0ZCkpfTpob3N0KC5pb24tdG91Y2hlZC5pb24taW52YWxpZCkgLnNlbGVjdC1ib3R0b20gLmVycm9yLXRleHR7ZGlzcGxheTpibG9ja306aG9zdCguaW9uLXRvdWNoZWQuaW9uLWludmFsaWQpIC5zZWxlY3QtYm90dG9tIC5oZWxwZXItdGV4dHtkaXNwbGF5Om5vbmV9LmxhYmVsLXRleHQtd3JhcHBlcntkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO21heC13aWR0aDoyMDBweDstd2Via2l0LXRyYW5zaXRpb246Y29sb3IgMTUwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSwgLXdlYmtpdC10cmFuc2Zvcm0gMTUwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTt0cmFuc2l0aW9uOmNvbG9yIDE1MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSksIC13ZWJraXQtdHJhbnNmb3JtIDE1MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7dHJhbnNpdGlvbjpjb2xvciAxNTBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpLCB0cmFuc2Zvcm0gMTUwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTt0cmFuc2l0aW9uOmNvbG9yIDE1MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSksIHRyYW5zZm9ybSAxNTBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpLCAtd2Via2l0LXRyYW5zZm9ybSAxNTBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO3BvaW50ZXItZXZlbnRzOm5vbmV9LmxhYmVsLXRleHQsOjpzbG90dGVkKFtzbG90PWxhYmVsXSl7dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVufS5sYWJlbC10ZXh0LXdyYXBwZXItaGlkZGVuLC5zZWxlY3Qtb3V0bGluZS1ub3RjaC1oaWRkZW57ZGlzcGxheTpub25lfS5uYXRpdmUtd3JhcHBlcntkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy13ZWJraXQtdHJhbnNpdGlvbjpvcGFjaXR5IDE1MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7dHJhbnNpdGlvbjpvcGFjaXR5IDE1MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7b3ZlcmZsb3c6aGlkZGVufTpob3N0KC5zZWxlY3QtanVzdGlmeS1zcGFjZS1iZXR3ZWVuKSAuc2VsZWN0LXdyYXBwZXJ7LW1zLWZsZXgtcGFjazpqdXN0aWZ5O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufTpob3N0KC5zZWxlY3QtanVzdGlmeS1zdGFydCkgLnNlbGVjdC13cmFwcGVyey1tcy1mbGV4LXBhY2s6c3RhcnQ7anVzdGlmeS1jb250ZW50OnN0YXJ0fTpob3N0KC5zZWxlY3QtanVzdGlmeS1lbmQpIC5zZWxlY3Qtd3JhcHBlcnstbXMtZmxleC1wYWNrOmVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZW5kfTpob3N0KC5zZWxlY3QtbGFiZWwtcGxhY2VtZW50LXN0YXJ0KSAuc2VsZWN0LXdyYXBwZXJ7LW1zLWZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LWRpcmVjdGlvbjpyb3d9Omhvc3QoLnNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtc3RhcnQpIC5sYWJlbC10ZXh0LXdyYXBwZXJ7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MDttYXJnaW4taW5saW5lLXN0YXJ0OjA7LXdlYmtpdC1tYXJnaW4tZW5kOjE2cHg7bWFyZ2luLWlubGluZS1lbmQ6MTZweDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfTpob3N0KC5zZWxlY3QtbGFiZWwtcGxhY2VtZW50LWVuZCkgLnNlbGVjdC13cmFwcGVyey1tcy1mbGV4LWRpcmVjdGlvbjpyb3ctcmV2ZXJzZTtmbGV4LWRpcmVjdGlvbjpyb3ctcmV2ZXJzZX06aG9zdCguc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1lbmQpIC5sYWJlbC10ZXh0LXdyYXBwZXJ7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MTZweDttYXJnaW4taW5saW5lLXN0YXJ0OjE2cHg7LXdlYmtpdC1tYXJnaW4tZW5kOjA7bWFyZ2luLWlubGluZS1lbmQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfTpob3N0KC5zZWxlY3QtbGFiZWwtcGxhY2VtZW50LWZpeGVkKSAubGFiZWwtdGV4dC13cmFwcGVyey13ZWJraXQtbWFyZ2luLXN0YXJ0OjA7bWFyZ2luLWlubGluZS1zdGFydDowOy13ZWJraXQtbWFyZ2luLWVuZDoxNnB4O21hcmdpbi1pbmxpbmUtZW5kOjE2cHg7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MH06aG9zdCguc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1maXhlZCkgLmxhYmVsLXRleHQtd3JhcHBlcnstbXMtZmxleDowIDAgMTAwcHg7ZmxleDowIDAgMTAwcHg7d2lkdGg6MTAwcHg7bWluLXdpZHRoOjEwMHB4O21heC13aWR0aDoyMDBweH06aG9zdCguc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1zdGFja2VkKSAuc2VsZWN0LXdyYXBwZXIsOmhvc3QoLnNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtZmxvYXRpbmcpIC5zZWxlY3Qtd3JhcHBlcnstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjstbXMtZmxleC1hbGlnbjpzdGFydDthbGlnbi1pdGVtczpzdGFydH06aG9zdCguc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1zdGFja2VkKSAubGFiZWwtdGV4dC13cmFwcGVyLDpob3N0KC5zZWxlY3QtbGFiZWwtcGxhY2VtZW50LWZsb2F0aW5nKSAubGFiZWwtdGV4dC13cmFwcGVye21heC13aWR0aDoxMDAlfTpob3N0KC5zZWxlY3QtbHRyLnNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZCkgLmxhYmVsLXRleHQtd3JhcHBlciw6aG9zdCguc2VsZWN0LWx0ci5zZWxlY3QtbGFiZWwtcGxhY2VtZW50LWZsb2F0aW5nKSAubGFiZWwtdGV4dC13cmFwcGVyey13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpsZWZ0IHRvcDt0cmFuc2Zvcm0tb3JpZ2luOmxlZnQgdG9wfTpob3N0KC5zZWxlY3QtcnRsLnNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZCkgLmxhYmVsLXRleHQtd3JhcHBlciw6aG9zdCguc2VsZWN0LXJ0bC5zZWxlY3QtbGFiZWwtcGxhY2VtZW50LWZsb2F0aW5nKSAubGFiZWwtdGV4dC13cmFwcGVyey13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpyaWdodCB0b3A7dHJhbnNmb3JtLW9yaWdpbjpyaWdodCB0b3B9Omhvc3QoLnNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZCkgLm5hdGl2ZS13cmFwcGVyLDpob3N0KC5zZWxlY3QtbGFiZWwtcGxhY2VtZW50LWZsb2F0aW5nKSAubmF0aXZlLXdyYXBwZXJ7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjFweDttYXJnaW4tYm90dG9tOjA7LW1zLWZsZXgtcG9zaXRpdmU6MTtmbGV4LWdyb3c6MTt3aWR0aDoxMDAlfTpob3N0KC5zZWxlY3QtbGFiZWwtcGxhY2VtZW50LWZsb2F0aW5nKSAubGFiZWwtdGV4dC13cmFwcGVyey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMTAwJSkgc2NhbGUoMSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMTAwJSkgc2NhbGUoMSl9Omhvc3QoLnNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtZmxvYXRpbmc6bm90KC5sYWJlbC1mbG9hdGluZykpIC5uYXRpdmUtd3JhcHBlciAuc2VsZWN0LXBsYWNlaG9sZGVye29wYWNpdHk6MH06aG9zdCguc2VsZWN0LWV4cGFuZGVkLnNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtZmxvYXRpbmcpIC5uYXRpdmUtd3JhcHBlciAuc2VsZWN0LXBsYWNlaG9sZGVyLDpob3N0KC5oYXMtZm9jdXMuc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1mbG9hdGluZykgLm5hdGl2ZS13cmFwcGVyIC5zZWxlY3QtcGxhY2Vob2xkZXIsOmhvc3QoLmhhcy12YWx1ZS5zZWxlY3QtbGFiZWwtcGxhY2VtZW50LWZsb2F0aW5nKSAubmF0aXZlLXdyYXBwZXIgLnNlbGVjdC1wbGFjZWhvbGRlcntvcGFjaXR5OjF9Omhvc3QoLmxhYmVsLWZsb2F0aW5nKSAubGFiZWwtdGV4dC13cmFwcGVyey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoNTAlKSBzY2FsZSgwLjc1KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSg1MCUpIHNjYWxlKDAuNzUpO21heC13aWR0aDpjYWxjKDEwMCUgLyAwLjc1KX06OnNsb3R0ZWQoW3Nsb3Q9c3RhcnRdKSw6OnNsb3R0ZWQoW3Nsb3Q9ZW5kXSl7LW1zLWZsZXgtbmVnYXRpdmU6MDtmbGV4LXNocmluazowfTo6c2xvdHRlZChbc2xvdD1zdGFydF06bGFzdC1vZi10eXBlKXstd2Via2l0LW1hcmdpbi1lbmQ6MTZweDttYXJnaW4taW5saW5lLWVuZDoxNnB4Oy13ZWJraXQtbWFyZ2luLXN0YXJ0OjA7bWFyZ2luLWlubGluZS1zdGFydDowfTo6c2xvdHRlZChbc2xvdD1lbmRdOmZpcnN0LW9mLXR5cGUpey13ZWJraXQtbWFyZ2luLXN0YXJ0OjE2cHg7bWFyZ2luLWlubGluZS1zdGFydDoxNnB4Oy13ZWJraXQtbWFyZ2luLWVuZDowO21hcmdpbi1pbmxpbmUtZW5kOjB9Omhvc3R7LS1ib3JkZXItd2lkdGg6MC41NXB4Oy0tYm9yZGVyLWNvbG9yOnZhcigtLWlvbi1pdGVtLWJvcmRlci1jb2xvciwgdmFyKC0taW9uLWJvcmRlci1jb2xvciwgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjUwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTI1MCwgI2M4YzdjYykpKSk7LS1oaWdobGlnaHQtaGVpZ2h0OjBweH0uc2VsZWN0LWljb257d2lkdGg6MS4xMjVyZW07aGVpZ2h0OjEuMTI1cmVtO2NvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTY1MCwgdmFyKC0taW9uLXRleHQtY29sb3Itc3RlcC0zNTAsICM1OTU5NTkpKX06aG9zdCguc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1zdGFja2VkKSAuc2VsZWN0LXdyYXBwZXItaW5uZXIsOmhvc3QoLnNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtZmxvYXRpbmcpIC5zZWxlY3Qtd3JhcHBlci1pbm5lcnt3aWR0aDpjYWxjKDEwMCUgLSAxLjEyNXJlbSAtIDRweCl9Omhvc3QoLnNlbGVjdC1kaXNhYmxlZCl7b3BhY2l0eTowLjN9OjpzbG90dGVkKGlvbi1idXR0b25bc2xvdD1zdGFydF0uYnV0dG9uLWhhcy1pY29uLW9ubHkpLDo6c2xvdHRlZChpb24tYnV0dG9uW3Nsb3Q9ZW5kXS5idXR0b24taGFzLWljb24tb25seSl7LS1ib3JkZXItcmFkaXVzOjUwJTstLXBhZGRpbmctc3RhcnQ6MDstLXBhZGRpbmctZW5kOjA7LS1wYWRkaW5nLXRvcDowOy0tcGFkZGluZy1ib3R0b206MDthc3BlY3QtcmF0aW86MX1cIjtcbmNvbnN0IHNlbGVjdE1kQ3NzID0gXCI6aG9zdHstLXBhZGRpbmctdG9wOjBweDstLXBhZGRpbmctZW5kOjBweDstLXBhZGRpbmctYm90dG9tOjBweDstLXBhZGRpbmctc3RhcnQ6MHB4Oy0tcGxhY2Vob2xkZXItY29sb3I6Y3VycmVudENvbG9yOy0tcGxhY2Vob2xkZXItb3BhY2l0eTp2YXIoLS1pb24tcGxhY2Vob2xkZXItb3BhY2l0eSwgMC42KTstLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7LS1ib3JkZXItc3R5bGU6c29saWQ7LS1oaWdobGlnaHQtY29sb3ItZm9jdXNlZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzAwNTRlOSk7LS1oaWdobGlnaHQtY29sb3ItdmFsaWQ6dmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MsICMyZGQ1NWIpOy0taGlnaGxpZ2h0LWNvbG9yLWludmFsaWQ6dmFyKC0taW9uLWNvbG9yLWRhbmdlciwgI2M1MDAwZik7LS1oaWdobGlnaHQtY29sb3I6dmFyKC0taGlnaGxpZ2h0LWNvbG9yLWZvY3VzZWQpO2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJTttaW4taGVpZ2h0OjQ0cHg7Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LCBpbmhlcml0KTt3aGl0ZS1zcGFjZTpub3dyYXA7Y3Vyc29yOnBvaW50ZXI7ei1pbmRleDoyfTpob3N0KC5zZWxlY3QtbGFiZWwtcGxhY2VtZW50LWZsb2F0aW5nKSw6aG9zdCguc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1zdGFja2VkKXttaW4taGVpZ2h0OjU2cHh9Omhvc3QoLmlvbi1jb2xvcil7LS1oaWdobGlnaHQtY29sb3ItZm9jdXNlZDp2YXIoLS1pb24tY29sb3ItYmFzZSl9Omhvc3QoLmluLWl0ZW0pey1tcy1mbGV4OjEgMSAwcHg7ZmxleDoxIDEgMH06aG9zdCguc2VsZWN0LWRpc2FibGVkKXtwb2ludGVyLWV2ZW50czpub25lfTpob3N0KC5oYXMtZm9jdXMpIGJ1dHRvbntib3JkZXI6MnB4IHNvbGlkICM1ZTllZDZ9Omhvc3QoW3Nsb3Q9c3RhcnRdKSw6aG9zdChbc2xvdD1lbmRdKXstbXMtZmxleDppbml0aWFsO2ZsZXg6aW5pdGlhbDt3aWR0aDphdXRvfS5zZWxlY3QtcGxhY2Vob2xkZXJ7Y29sb3I6dmFyKC0tcGxhY2Vob2xkZXItY29sb3IpO29wYWNpdHk6dmFyKC0tcGxhY2Vob2xkZXItb3BhY2l0eSl9YnV0dG9ue3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDtyaWdodDowO2JvdHRvbTowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7bWFyZ2luOjA7cGFkZGluZzowO2JvcmRlcjowO291dGxpbmU6MDtjbGlwOnJlY3QoMCAwIDAgMCk7b3BhY2l0eTowO292ZXJmbG93OmhpZGRlbjstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZX0uc2VsZWN0LWljb257LXdlYmtpdC1tYXJnaW4tc3RhcnQ6NHB4O21hcmdpbi1pbmxpbmUtc3RhcnQ6NHB4Oy13ZWJraXQtbWFyZ2luLWVuZDowO21hcmdpbi1pbmxpbmUtZW5kOjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtwb3NpdGlvbjpyZWxhdGl2ZTstbXMtZmxleC1uZWdhdGl2ZTowO2ZsZXgtc2hyaW5rOjB9Omhvc3QoLmluLWl0ZW0tY29sb3IpIC5zZWxlY3QtaWNvbntjb2xvcjppbmhlcml0fTpob3N0KC5zZWxlY3QtbGFiZWwtcGxhY2VtZW50LXN0YWNrZWQpIC5zZWxlY3QtaWNvbiw6aG9zdCguc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1mbG9hdGluZykgLnNlbGVjdC1pY29ue3Bvc2l0aW9uOmFic29sdXRlO2hlaWdodDoxMDAlfTpob3N0KC5zZWxlY3QtbHRyLnNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZCkgLnNlbGVjdC1pY29uLDpob3N0KC5zZWxlY3QtbHRyLnNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtZmxvYXRpbmcpIC5zZWxlY3QtaWNvbntyaWdodDp2YXIoLS1wYWRkaW5nLWVuZCwgMCl9Omhvc3QoLnNlbGVjdC1ydGwuc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1zdGFja2VkKSAuc2VsZWN0LWljb24sOmhvc3QoLnNlbGVjdC1ydGwuc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1mbG9hdGluZykgLnNlbGVjdC1pY29ue2xlZnQ6dmFyKC0tcGFkZGluZy1zdGFydCwgMCl9LnNlbGVjdC10ZXh0ey1tcy1mbGV4OjE7ZmxleDoxO21pbi13aWR0aDoxNnB4O2ZvbnQtc2l6ZTppbmhlcml0O3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6aW5oZXJpdDtvdmVyZmxvdzpoaWRkZW59LnNlbGVjdC13cmFwcGVyey13ZWJraXQtcGFkZGluZy1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTtwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTstd2Via2l0LXBhZGRpbmctZW5kOnZhcigtLXBhZGRpbmctZW5kKTtwYWRkaW5nLWlubGluZS1lbmQ6dmFyKC0tcGFkZGluZy1lbmQpO3BhZGRpbmctdG9wOnZhcigtLXBhZGRpbmctdG9wKTtwYWRkaW5nLWJvdHRvbTp2YXIoLS1wYWRkaW5nLWJvdHRvbSk7Ym9yZGVyLXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjpyZWxhdGl2ZTstbXMtZmxleC1wb3NpdGl2ZToxO2ZsZXgtZ3JvdzoxOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpqdXN0aWZ5O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2hlaWdodDppbmhlcml0O21pbi1oZWlnaHQ6aW5oZXJpdDstd2Via2l0LXRyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAxNW1zIGxpbmVhcjt0cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgMTVtcyBsaW5lYXI7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTtsaW5lLWhlaWdodDpub3JtYWw7Y3Vyc29yOmluaGVyaXQ7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94fS5zZWxlY3Qtd3JhcHBlciAuc2VsZWN0LXBsYWNlaG9sZGVyey13ZWJraXQtdHJhbnNpdGlvbjpvcGFjaXR5IDE1MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7dHJhbnNpdGlvbjpvcGFjaXR5IDE1MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSl9LnNlbGVjdC13cmFwcGVyLWlubmVye2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7b3ZlcmZsb3c6aGlkZGVufTpob3N0KC5zZWxlY3QtbGFiZWwtcGxhY2VtZW50LXN0YWNrZWQpIC5zZWxlY3Qtd3JhcHBlci1pbm5lciw6aG9zdCguc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1mbG9hdGluZykgLnNlbGVjdC13cmFwcGVyLWlubmVyey1tcy1mbGV4LXBvc2l0aXZlOjE7ZmxleC1ncm93OjF9Omhvc3QoLmlvbi10b3VjaGVkLmlvbi1pbnZhbGlkKXstLWhpZ2hsaWdodC1jb2xvcjp2YXIoLS1oaWdobGlnaHQtY29sb3ItaW52YWxpZCl9Omhvc3QoLmlvbi12YWxpZCl7LS1oaWdobGlnaHQtY29sb3I6dmFyKC0taGlnaGxpZ2h0LWNvbG9yLXZhbGlkKX0uc2VsZWN0LWJvdHRvbXstd2Via2l0LXBhZGRpbmctc3RhcnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7cGFkZGluZy1pbmxpbmUtc3RhcnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7LXdlYmtpdC1wYWRkaW5nLWVuZDp2YXIoLS1wYWRkaW5nLWVuZCk7cGFkZGluZy1pbmxpbmUtZW5kOnZhcigtLXBhZGRpbmctZW5kKTtwYWRkaW5nLXRvcDo1cHg7cGFkZGluZy1ib3R0b206MDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1wYWNrOmp1c3RpZnk7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47Ym9yZGVyLXRvcDp2YXIoLS1ib3JkZXItd2lkdGgpIHZhcigtLWJvcmRlci1zdHlsZSkgdmFyKC0tYm9yZGVyLWNvbG9yKTtmb250LXNpemU6MC43NXJlbTt3aGl0ZS1zcGFjZTpub3JtYWx9Omhvc3QoLmhhcy1mb2N1cy5pb24tdmFsaWQpLDpob3N0KC5zZWxlY3QtZXhwYW5kZWQuaW9uLXZhbGlkKSw6aG9zdCguaW9uLXRvdWNoZWQuaW9uLWludmFsaWQpLDpob3N0KC5zZWxlY3QtZXhwYW5kZWQuaW9uLXRvdWNoZWQuaW9uLWludmFsaWQpey0tYm9yZGVyLWNvbG9yOnZhcigtLWhpZ2hsaWdodC1jb2xvcil9LnNlbGVjdC1ib3R0b20gLmVycm9yLXRleHR7ZGlzcGxheTpub25lO2NvbG9yOnZhcigtLWhpZ2hsaWdodC1jb2xvci1pbnZhbGlkKX0uc2VsZWN0LWJvdHRvbSAuaGVscGVyLXRleHR7ZGlzcGxheTpibG9jaztjb2xvcjp2YXIoLS1pb24tY29sb3Itc3RlcC03MDAsIHZhcigtLWlvbi10ZXh0LWNvbG9yLXN0ZXAtMzAwLCAjNGQ0ZDRkKSl9Omhvc3QoLmlvbi10b3VjaGVkLmlvbi1pbnZhbGlkKSAuc2VsZWN0LWJvdHRvbSAuZXJyb3ItdGV4dHtkaXNwbGF5OmJsb2NrfTpob3N0KC5pb24tdG91Y2hlZC5pb24taW52YWxpZCkgLnNlbGVjdC1ib3R0b20gLmhlbHBlci10ZXh0e2Rpc3BsYXk6bm9uZX0ubGFiZWwtdGV4dC13cmFwcGVye2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7bWF4LXdpZHRoOjIwMHB4Oy13ZWJraXQtdHJhbnNpdGlvbjpjb2xvciAxNTBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpLCAtd2Via2l0LXRyYW5zZm9ybSAxNTBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO3RyYW5zaXRpb246Y29sb3IgMTUwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSwgLXdlYmtpdC10cmFuc2Zvcm0gMTUwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTt0cmFuc2l0aW9uOmNvbG9yIDE1MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSksIHRyYW5zZm9ybSAxNTBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO3RyYW5zaXRpb246Y29sb3IgMTUwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSwgdHJhbnNmb3JtIDE1MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSksIC13ZWJraXQtdHJhbnNmb3JtIDE1MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7cG9pbnRlci1ldmVudHM6bm9uZX0ubGFiZWwtdGV4dCw6OnNsb3R0ZWQoW3Nsb3Q9bGFiZWxdKXt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW59LmxhYmVsLXRleHQtd3JhcHBlci1oaWRkZW4sLnNlbGVjdC1vdXRsaW5lLW5vdGNoLWhpZGRlbntkaXNwbGF5Om5vbmV9Lm5hdGl2ZS13cmFwcGVye2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LXdlYmtpdC10cmFuc2l0aW9uOm9wYWNpdHkgMTUwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTt0cmFuc2l0aW9uOm9wYWNpdHkgMTUwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtvdmVyZmxvdzpoaWRkZW59Omhvc3QoLnNlbGVjdC1qdXN0aWZ5LXNwYWNlLWJldHdlZW4pIC5zZWxlY3Qtd3JhcHBlcnstbXMtZmxleC1wYWNrOmp1c3RpZnk7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59Omhvc3QoLnNlbGVjdC1qdXN0aWZ5LXN0YXJ0KSAuc2VsZWN0LXdyYXBwZXJ7LW1zLWZsZXgtcGFjazpzdGFydDtqdXN0aWZ5LWNvbnRlbnQ6c3RhcnR9Omhvc3QoLnNlbGVjdC1qdXN0aWZ5LWVuZCkgLnNlbGVjdC13cmFwcGVyey1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDplbmR9Omhvc3QoLnNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtc3RhcnQpIC5zZWxlY3Qtd3JhcHBlcnstbXMtZmxleC1kaXJlY3Rpb246cm93O2ZsZXgtZGlyZWN0aW9uOnJvd306aG9zdCguc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1zdGFydCkgLmxhYmVsLXRleHQtd3JhcHBlcnstd2Via2l0LW1hcmdpbi1zdGFydDowO21hcmdpbi1pbmxpbmUtc3RhcnQ6MDstd2Via2l0LW1hcmdpbi1lbmQ6MTZweDttYXJnaW4taW5saW5lLWVuZDoxNnB4O21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjB9Omhvc3QoLnNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtZW5kKSAuc2VsZWN0LXdyYXBwZXJ7LW1zLWZsZXgtZGlyZWN0aW9uOnJvdy1yZXZlcnNlO2ZsZXgtZGlyZWN0aW9uOnJvdy1yZXZlcnNlfTpob3N0KC5zZWxlY3QtbGFiZWwtcGxhY2VtZW50LWVuZCkgLmxhYmVsLXRleHQtd3JhcHBlcnstd2Via2l0LW1hcmdpbi1zdGFydDoxNnB4O21hcmdpbi1pbmxpbmUtc3RhcnQ6MTZweDstd2Via2l0LW1hcmdpbi1lbmQ6MDttYXJnaW4taW5saW5lLWVuZDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjB9Omhvc3QoLnNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtZml4ZWQpIC5sYWJlbC10ZXh0LXdyYXBwZXJ7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MDttYXJnaW4taW5saW5lLXN0YXJ0OjA7LXdlYmtpdC1tYXJnaW4tZW5kOjE2cHg7bWFyZ2luLWlubGluZS1lbmQ6MTZweDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfTpob3N0KC5zZWxlY3QtbGFiZWwtcGxhY2VtZW50LWZpeGVkKSAubGFiZWwtdGV4dC13cmFwcGVyey1tcy1mbGV4OjAgMCAxMDBweDtmbGV4OjAgMCAxMDBweDt3aWR0aDoxMDBweDttaW4td2lkdGg6MTAwcHg7bWF4LXdpZHRoOjIwMHB4fTpob3N0KC5zZWxlY3QtbGFiZWwtcGxhY2VtZW50LXN0YWNrZWQpIC5zZWxlY3Qtd3JhcHBlciw6aG9zdCguc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1mbG9hdGluZykgLnNlbGVjdC13cmFwcGVyey1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1uOy1tcy1mbGV4LWFsaWduOnN0YXJ0O2FsaWduLWl0ZW1zOnN0YXJ0fTpob3N0KC5zZWxlY3QtbGFiZWwtcGxhY2VtZW50LXN0YWNrZWQpIC5sYWJlbC10ZXh0LXdyYXBwZXIsOmhvc3QoLnNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtZmxvYXRpbmcpIC5sYWJlbC10ZXh0LXdyYXBwZXJ7bWF4LXdpZHRoOjEwMCV9Omhvc3QoLnNlbGVjdC1sdHIuc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1zdGFja2VkKSAubGFiZWwtdGV4dC13cmFwcGVyLDpob3N0KC5zZWxlY3QtbHRyLnNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtZmxvYXRpbmcpIC5sYWJlbC10ZXh0LXdyYXBwZXJ7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmxlZnQgdG9wO3RyYW5zZm9ybS1vcmlnaW46bGVmdCB0b3B9Omhvc3QoLnNlbGVjdC1ydGwuc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1zdGFja2VkKSAubGFiZWwtdGV4dC13cmFwcGVyLDpob3N0KC5zZWxlY3QtcnRsLnNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtZmxvYXRpbmcpIC5sYWJlbC10ZXh0LXdyYXBwZXJ7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOnJpZ2h0IHRvcDt0cmFuc2Zvcm0tb3JpZ2luOnJpZ2h0IHRvcH06aG9zdCguc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1zdGFja2VkKSAubmF0aXZlLXdyYXBwZXIsOmhvc3QoLnNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtZmxvYXRpbmcpIC5uYXRpdmUtd3JhcHBlcnttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MXB4O21hcmdpbi1ib3R0b206MDstbXMtZmxleC1wb3NpdGl2ZToxO2ZsZXgtZ3JvdzoxO3dpZHRoOjEwMCV9Omhvc3QoLnNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtZmxvYXRpbmcpIC5sYWJlbC10ZXh0LXdyYXBwZXJ7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgxMDAlKSBzY2FsZSgxKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgxMDAlKSBzY2FsZSgxKX06aG9zdCguc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1mbG9hdGluZzpub3QoLmxhYmVsLWZsb2F0aW5nKSkgLm5hdGl2ZS13cmFwcGVyIC5zZWxlY3QtcGxhY2Vob2xkZXJ7b3BhY2l0eTowfTpob3N0KC5zZWxlY3QtZXhwYW5kZWQuc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1mbG9hdGluZykgLm5hdGl2ZS13cmFwcGVyIC5zZWxlY3QtcGxhY2Vob2xkZXIsOmhvc3QoLmhhcy1mb2N1cy5zZWxlY3QtbGFiZWwtcGxhY2VtZW50LWZsb2F0aW5nKSAubmF0aXZlLXdyYXBwZXIgLnNlbGVjdC1wbGFjZWhvbGRlciw6aG9zdCguaGFzLXZhbHVlLnNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtZmxvYXRpbmcpIC5uYXRpdmUtd3JhcHBlciAuc2VsZWN0LXBsYWNlaG9sZGVye29wYWNpdHk6MX06aG9zdCgubGFiZWwtZmxvYXRpbmcpIC5sYWJlbC10ZXh0LXdyYXBwZXJ7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSg1MCUpIHNjYWxlKDAuNzUpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDUwJSkgc2NhbGUoMC43NSk7bWF4LXdpZHRoOmNhbGMoMTAwJSAvIDAuNzUpfTo6c2xvdHRlZChbc2xvdD1zdGFydF0pLDo6c2xvdHRlZChbc2xvdD1lbmRdKXstbXMtZmxleC1uZWdhdGl2ZTowO2ZsZXgtc2hyaW5rOjB9OjpzbG90dGVkKFtzbG90PXN0YXJ0XTpsYXN0LW9mLXR5cGUpey13ZWJraXQtbWFyZ2luLWVuZDoxNnB4O21hcmdpbi1pbmxpbmUtZW5kOjE2cHg7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MDttYXJnaW4taW5saW5lLXN0YXJ0OjB9OjpzbG90dGVkKFtzbG90PWVuZF06Zmlyc3Qtb2YtdHlwZSl7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MTZweDttYXJnaW4taW5saW5lLXN0YXJ0OjE2cHg7LXdlYmtpdC1tYXJnaW4tZW5kOjA7bWFyZ2luLWlubGluZS1lbmQ6MH06aG9zdCguc2VsZWN0LWZpbGwtc29saWQpey0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3Itc3RlcC01MCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3Itc3RlcC01MCwgI2YyZjJmMikpOy0tYm9yZGVyLWNvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTUwMCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3Itc3RlcC01MDAsIGdyYXkpKTstLWJvcmRlci1yYWRpdXM6NHB4Oy0tcGFkZGluZy1zdGFydDoxNnB4Oy0tcGFkZGluZy1lbmQ6MTZweDttaW4taGVpZ2h0OjU2cHh9Omhvc3QoLnNlbGVjdC1maWxsLXNvbGlkKSAuc2VsZWN0LXdyYXBwZXJ7Ym9yZGVyLWJvdHRvbTp2YXIoLS1ib3JkZXItd2lkdGgpIHZhcigtLWJvcmRlci1zdHlsZSkgdmFyKC0tYm9yZGVyLWNvbG9yKX06aG9zdCguc2VsZWN0LWV4cGFuZGVkLnNlbGVjdC1maWxsLXNvbGlkLmlvbi12YWxpZCksOmhvc3QoLmhhcy1mb2N1cy5zZWxlY3QtZmlsbC1zb2xpZC5pb24tdmFsaWQpLDpob3N0KC5zZWxlY3QtZmlsbC1zb2xpZC5pb24tdG91Y2hlZC5pb24taW52YWxpZCl7LS1ib3JkZXItY29sb3I6dmFyKC0taGlnaGxpZ2h0LWNvbG9yKX06aG9zdCguc2VsZWN0LWZpbGwtc29saWQpIC5zZWxlY3QtYm90dG9te2JvcmRlci10b3A6bm9uZX1AbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpezpob3N0KC5zZWxlY3QtZmlsbC1zb2xpZDpob3Zlcil7LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1zdGVwLTEwMCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3Itc3RlcC0xMDAsICNlNmU2ZTYpKTstLWJvcmRlci1jb2xvcjp2YXIoLS1pb24tY29sb3Itc3RlcC03NTAsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXN0ZXAtNzUwLCAjNDA0MDQwKSl9fTpob3N0KC5zZWxlY3QtZmlsbC1zb2xpZC5zZWxlY3QtZXhwYW5kZWQpLDpob3N0KC5zZWxlY3QtZmlsbC1zb2xpZC5oYXMtZm9jdXMpey0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXN0ZXAtMTUwLCAjZDlkOWQ5KSk7LS1ib3JkZXItY29sb3I6dmFyKC0taGlnaGxpZ2h0LWNvbG9yKX06aG9zdCguc2VsZWN0LWZpbGwtc29saWQpIC5zZWxlY3Qtd3JhcHBlcntib3JkZXItc3RhcnQtc3RhcnQtcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2JvcmRlci1zdGFydC1lbmQtcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2JvcmRlci1lbmQtZW5kLXJhZGl1czowcHg7Ym9yZGVyLWVuZC1zdGFydC1yYWRpdXM6MHB4fTpob3N0KC5sYWJlbC1mbG9hdGluZy5zZWxlY3QtZmlsbC1zb2xpZCkgLmxhYmVsLXRleHQtd3JhcHBlcnttYXgtd2lkdGg6Y2FsYygxMDAlIC8gMC43NSl9Omhvc3QoLmluLWl0ZW0uc2VsZWN0LWV4cGFuZGVkLnNlbGVjdC1maWxsLXNvbGlkKSAuc2VsZWN0LXdyYXBwZXIgLnNlbGVjdC1pY29uLDpob3N0KC5pbi1pdGVtLmhhcy1mb2N1cy5zZWxlY3QtZmlsbC1zb2xpZCkgLnNlbGVjdC13cmFwcGVyIC5zZWxlY3QtaWNvbiw6aG9zdCguaW4taXRlbS5oYXMtZm9jdXMuaW9uLXZhbGlkLnNlbGVjdC1maWxsLXNvbGlkKSAuc2VsZWN0LXdyYXBwZXIgLnNlbGVjdC1pY29uLDpob3N0KC5pbi1pdGVtLmlvbi10b3VjaGVkLmlvbi1pbnZhbGlkLnNlbGVjdC1maWxsLXNvbGlkKSAuc2VsZWN0LXdyYXBwZXIgLnNlbGVjdC1pY29ue2NvbG9yOnZhcigtLWhpZ2hsaWdodC1jb2xvcil9Omhvc3QoLnNlbGVjdC1maWxsLW91dGxpbmUpey0tYm9yZGVyLWNvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTMwMCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3Itc3RlcC0zMDAsICNiM2IzYjMpKTstLWJvcmRlci1yYWRpdXM6NHB4Oy0tcGFkZGluZy1zdGFydDoxNnB4Oy0tcGFkZGluZy1lbmQ6MTZweDttaW4taGVpZ2h0OjU2cHh9Omhvc3QoLnNlbGVjdC1maWxsLW91dGxpbmUuc2VsZWN0LXNoYXBlLXJvdW5kKXstLWJvcmRlci1yYWRpdXM6MjhweDstLXBhZGRpbmctc3RhcnQ6MzJweDstLXBhZGRpbmctZW5kOjMycHh9Omhvc3QoLmhhcy1mb2N1cy5zZWxlY3QtZmlsbC1vdXRsaW5lLmlvbi12YWxpZCksOmhvc3QoLnNlbGVjdC1maWxsLW91dGxpbmUuaW9uLXRvdWNoZWQuaW9uLWludmFsaWQpey0tYm9yZGVyLWNvbG9yOnZhcigtLWhpZ2hsaWdodC1jb2xvcil9QG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKXs6aG9zdCguc2VsZWN0LWZpbGwtb3V0bGluZTpob3Zlcil7LS1ib3JkZXItY29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtNzUwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTc1MCwgIzQwNDA0MCkpfX06aG9zdCguc2VsZWN0LWZpbGwtb3V0bGluZS5zZWxlY3QtZXhwYW5kZWQpLDpob3N0KC5zZWxlY3QtZmlsbC1vdXRsaW5lLmhhcy1mb2N1cyl7LS1ib3JkZXItd2lkdGg6dmFyKC0taGlnaGxpZ2h0LWhlaWdodCk7LS1ib3JkZXItY29sb3I6dmFyKC0taGlnaGxpZ2h0LWNvbG9yKX06aG9zdCguc2VsZWN0LWZpbGwtb3V0bGluZSkgLnNlbGVjdC1ib3R0b217Ym9yZGVyLXRvcDpub25lfTpob3N0KC5zZWxlY3QtZmlsbC1vdXRsaW5lKSAuc2VsZWN0LXdyYXBwZXJ7Ym9yZGVyLWJvdHRvbTpub25lfTpob3N0KC5zZWxlY3QtbHRyLnNlbGVjdC1maWxsLW91dGxpbmUuc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1zdGFja2VkKSAubGFiZWwtdGV4dC13cmFwcGVyLDpob3N0KC5zZWxlY3QtbHRyLnNlbGVjdC1maWxsLW91dGxpbmUuc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1mbG9hdGluZykgLmxhYmVsLXRleHQtd3JhcHBlcnstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46bGVmdCB0b3A7dHJhbnNmb3JtLW9yaWdpbjpsZWZ0IHRvcH06aG9zdCguc2VsZWN0LXJ0bC5zZWxlY3QtZmlsbC1vdXRsaW5lLnNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZCkgLmxhYmVsLXRleHQtd3JhcHBlciw6aG9zdCguc2VsZWN0LXJ0bC5zZWxlY3QtZmlsbC1vdXRsaW5lLnNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtZmxvYXRpbmcpIC5sYWJlbC10ZXh0LXdyYXBwZXJ7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOnJpZ2h0IHRvcDt0cmFuc2Zvcm0tb3JpZ2luOnJpZ2h0IHRvcH06aG9zdCguc2VsZWN0LWZpbGwtb3V0bGluZS5zZWxlY3QtbGFiZWwtcGxhY2VtZW50LXN0YWNrZWQpIC5sYWJlbC10ZXh0LXdyYXBwZXIsOmhvc3QoLnNlbGVjdC1maWxsLW91dGxpbmUuc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1mbG9hdGluZykgLmxhYmVsLXRleHQtd3JhcHBlcntwb3NpdGlvbjphYnNvbHV0ZTttYXgtd2lkdGg6Y2FsYygxMDAlIC0gdmFyKC0tcGFkZGluZy1zdGFydCkgLSB2YXIoLS1wYWRkaW5nLWVuZCkpfTpob3N0KC5zZWxlY3QtZmlsbC1vdXRsaW5lKSAubGFiZWwtdGV4dC13cmFwcGVye3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6MX06aG9zdCgubGFiZWwtZmxvYXRpbmcuc2VsZWN0LWZpbGwtb3V0bGluZSkgLmxhYmVsLXRleHQtd3JhcHBlcnstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0zMiUpIHNjYWxlKDAuNzUpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0zMiUpIHNjYWxlKDAuNzUpO21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDttYXgtd2lkdGg6Y2FsYygoMTAwJSAtIHZhcigtLXBhZGRpbmctc3RhcnQpIC0gdmFyKC0tcGFkZGluZy1lbmQpIC0gOHB4KSAvIDAuNzUpfTpob3N0KC5zZWxlY3QtZmlsbC1vdXRsaW5lLnNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZCkgc2VsZWN0LDpob3N0KC5zZWxlY3QtZmlsbC1vdXRsaW5lLnNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtZmxvYXRpbmcpIHNlbGVjdHttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6NnB4O21hcmdpbi1ib3R0b206NnB4fTpob3N0KC5zZWxlY3QtZmlsbC1vdXRsaW5lKSAuc2VsZWN0LW91dGxpbmUtY29udGFpbmVye2xlZnQ6MDtyaWdodDowO3RvcDowO2JvdHRvbTowO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9Omhvc3QoLnNlbGVjdC1maWxsLW91dGxpbmUpIC5zZWxlY3Qtb3V0bGluZS1zdGFydCw6aG9zdCguc2VsZWN0LWZpbGwtb3V0bGluZSkgLnNlbGVjdC1vdXRsaW5lLWVuZHtwb2ludGVyLWV2ZW50czpub25lfTpob3N0KC5zZWxlY3QtZmlsbC1vdXRsaW5lKSAuc2VsZWN0LW91dGxpbmUtc3RhcnQsOmhvc3QoLnNlbGVjdC1maWxsLW91dGxpbmUpIC5zZWxlY3Qtb3V0bGluZS1ub3RjaCw6aG9zdCguc2VsZWN0LWZpbGwtb3V0bGluZSkgLnNlbGVjdC1vdXRsaW5lLWVuZHtib3JkZXItdG9wOnZhcigtLWJvcmRlci13aWR0aCkgdmFyKC0tYm9yZGVyLXN0eWxlKSB2YXIoLS1ib3JkZXItY29sb3IpO2JvcmRlci1ib3R0b206dmFyKC0tYm9yZGVyLXdpZHRoKSB2YXIoLS1ib3JkZXItc3R5bGUpIHZhcigtLWJvcmRlci1jb2xvcik7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94fTpob3N0KC5zZWxlY3QtZmlsbC1vdXRsaW5lKSAuc2VsZWN0LW91dGxpbmUtbm90Y2h7bWF4LXdpZHRoOmNhbGMoMTAwJSAtIHZhcigtLXBhZGRpbmctc3RhcnQpIC0gdmFyKC0tcGFkZGluZy1lbmQpKX06aG9zdCguc2VsZWN0LWZpbGwtb3V0bGluZSkgLm5vdGNoLXNwYWNlcnstd2Via2l0LXBhZGRpbmctZW5kOjhweDtwYWRkaW5nLWlubGluZS1lbmQ6OHB4O2ZvbnQtc2l6ZTpjYWxjKDFlbSAqIDAuNzUpO29wYWNpdHk6MDtwb2ludGVyLWV2ZW50czpub25lfTpob3N0KC5zZWxlY3QtZmlsbC1vdXRsaW5lKSAuc2VsZWN0LW91dGxpbmUtc3RhcnR7LXdlYmtpdC1ib3JkZXItc3RhcnQ6dmFyKC0tYm9yZGVyLXdpZHRoKSB2YXIoLS1ib3JkZXItc3R5bGUpIHZhcigtLWJvcmRlci1jb2xvcik7Ym9yZGVyLWlubGluZS1zdGFydDp2YXIoLS1ib3JkZXItd2lkdGgpIHZhcigtLWJvcmRlci1zdHlsZSkgdmFyKC0tYm9yZGVyLWNvbG9yKX06aG9zdCguc2VsZWN0LWZpbGwtb3V0bGluZSkgLnNlbGVjdC1vdXRsaW5lLXN0YXJ0e2JvcmRlci1zdGFydC1zdGFydC1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7Ym9yZGVyLXN0YXJ0LWVuZC1yYWRpdXM6MHB4O2JvcmRlci1lbmQtZW5kLXJhZGl1czowcHg7Ym9yZGVyLWVuZC1zdGFydC1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyl9Omhvc3QoLnNlbGVjdC1maWxsLW91dGxpbmUpIC5zZWxlY3Qtb3V0bGluZS1zdGFydHt3aWR0aDpjYWxjKHZhcigtLXBhZGRpbmctc3RhcnQpIC0gNHB4KX06aG9zdCguc2VsZWN0LWZpbGwtb3V0bGluZSkgLnNlbGVjdC1vdXRsaW5lLWVuZHstd2Via2l0LWJvcmRlci1lbmQ6dmFyKC0tYm9yZGVyLXdpZHRoKSB2YXIoLS1ib3JkZXItc3R5bGUpIHZhcigtLWJvcmRlci1jb2xvcik7Ym9yZGVyLWlubGluZS1lbmQ6dmFyKC0tYm9yZGVyLXdpZHRoKSB2YXIoLS1ib3JkZXItc3R5bGUpIHZhcigtLWJvcmRlci1jb2xvcil9Omhvc3QoLnNlbGVjdC1maWxsLW91dGxpbmUpIC5zZWxlY3Qtb3V0bGluZS1lbmR7Ym9yZGVyLXN0YXJ0LXN0YXJ0LXJhZGl1czowcHg7Ym9yZGVyLXN0YXJ0LWVuZC1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7Ym9yZGVyLWVuZC1lbmQtcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2JvcmRlci1lbmQtc3RhcnQtcmFkaXVzOjBweH06aG9zdCguc2VsZWN0LWZpbGwtb3V0bGluZSkgLnNlbGVjdC1vdXRsaW5lLWVuZHstbXMtZmxleC1wb3NpdGl2ZToxO2ZsZXgtZ3JvdzoxfTpob3N0KC5sYWJlbC1mbG9hdGluZy5zZWxlY3QtZmlsbC1vdXRsaW5lKSAuc2VsZWN0LW91dGxpbmUtbm90Y2h7Ym9yZGVyLXRvcDpub25lfTpob3N0KC5pbi1pdGVtLnNlbGVjdC1leHBhbmRlZC5zZWxlY3QtZmlsbC1vdXRsaW5lKSAuc2VsZWN0LXdyYXBwZXIgLnNlbGVjdC1pY29uLDpob3N0KC5pbi1pdGVtLmhhcy1mb2N1cy5zZWxlY3QtZmlsbC1vdXRsaW5lKSAuc2VsZWN0LXdyYXBwZXIgLnNlbGVjdC1pY29uLDpob3N0KC5pbi1pdGVtLmhhcy1mb2N1cy5pb24tdmFsaWQuc2VsZWN0LWZpbGwtb3V0bGluZSkgLnNlbGVjdC13cmFwcGVyIC5zZWxlY3QtaWNvbiw6aG9zdCguaW4taXRlbS5pb24tdG91Y2hlZC5pb24taW52YWxpZC5zZWxlY3QtZmlsbC1vdXRsaW5lKSAuc2VsZWN0LXdyYXBwZXIgLnNlbGVjdC1pY29ue2NvbG9yOnZhcigtLWhpZ2hsaWdodC1jb2xvcil9Omhvc3R7LS1ib3JkZXItd2lkdGg6MXB4Oy0tYm9yZGVyLWNvbG9yOnZhcigtLWlvbi1pdGVtLWJvcmRlci1jb2xvciwgdmFyKC0taW9uLWJvcmRlci1jb2xvciwgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTE1MCwgcmdiYSgwLCAwLCAwLCAwLjEzKSkpKSk7LS1oaWdobGlnaHQtaGVpZ2h0OjJweH06aG9zdCguc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1mbG9hdGluZy5zZWxlY3QtZXhwYW5kZWQpIC5sYWJlbC10ZXh0LXdyYXBwZXIsOmhvc3QoLnNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtZmxvYXRpbmcuaGFzLWZvY3VzKSAubGFiZWwtdGV4dC13cmFwcGVyLDpob3N0KC5zZWxlY3QtbGFiZWwtcGxhY2VtZW50LXN0YWNrZWQuc2VsZWN0LWV4cGFuZGVkKSAubGFiZWwtdGV4dC13cmFwcGVyLDpob3N0KC5zZWxlY3QtbGFiZWwtcGxhY2VtZW50LXN0YWNrZWQuaGFzLWZvY3VzKSAubGFiZWwtdGV4dC13cmFwcGVye2NvbG9yOnZhcigtLWhpZ2hsaWdodC1jb2xvcil9Omhvc3QoLmhhcy1mb2N1cy5zZWxlY3QtbGFiZWwtcGxhY2VtZW50LWZsb2F0aW5nLmlvbi12YWxpZCkgLmxhYmVsLXRleHQtd3JhcHBlciw6aG9zdCguc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1mbG9hdGluZy5pb24tdG91Y2hlZC5pb24taW52YWxpZCkgLmxhYmVsLXRleHQtd3JhcHBlciw6aG9zdCguaGFzLWZvY3VzLnNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZC5pb24tdmFsaWQpIC5sYWJlbC10ZXh0LXdyYXBwZXIsOmhvc3QoLnNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtc3RhY2tlZC5pb24tdG91Y2hlZC5pb24taW52YWxpZCkgLmxhYmVsLXRleHQtd3JhcHBlcntjb2xvcjp2YXIoLS1oaWdobGlnaHQtY29sb3IpfS5zZWxlY3QtaGlnaGxpZ2h0e2JvdHRvbTotMXB4O3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7aGVpZ2h0OnZhcigtLWhpZ2hsaWdodC1oZWlnaHQpOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybTpzY2FsZSgwKTstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gMjAwbXM7dHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAyMDBtczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAyMDBtczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAyMDBtcywgLXdlYmtpdC10cmFuc2Zvcm0gMjAwbXM7YmFja2dyb3VuZDp2YXIoLS1oaWdobGlnaHQtY29sb3IpfS5zZWxlY3QtaGlnaGxpZ2h0e2luc2V0LWlubGluZS1zdGFydDowfTpob3N0KC5zZWxlY3QtZXhwYW5kZWQpIC5zZWxlY3QtaGlnaGxpZ2h0LDpob3N0KC5oYXMtZm9jdXMpIC5zZWxlY3QtaGlnaGxpZ2h0ey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX06aG9zdCguaW4taXRlbSkgLnNlbGVjdC1oaWdobGlnaHR7Ym90dG9tOjB9Omhvc3QoLmluLWl0ZW0pIC5zZWxlY3QtaGlnaGxpZ2h0e2luc2V0LWlubGluZS1zdGFydDowfS5zZWxlY3QtaWNvbnt3aWR0aDowLjgxMjVyZW07LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIDAuMTVzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7dHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAwLjE1cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO3RyYW5zaXRpb246dHJhbnNmb3JtIDAuMTVzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMC4xNXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSwgLXdlYmtpdC10cmFuc2Zvcm0gMC4xNXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtjb2xvcjp2YXIoLS1pb24tY29sb3Itc3RlcC01MDAsIHZhcigtLWlvbi10ZXh0LWNvbG9yLXN0ZXAtNTAwLCBncmF5KSl9Omhvc3QoLnNlbGVjdC1leHBhbmRlZDpub3QoLmhhcy1leHBhbmRlZC1pY29uKSkgLnNlbGVjdC1pY29uey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKX06aG9zdCguaW4taXRlbS5zZWxlY3QtZXhwYW5kZWQpIC5zZWxlY3Qtd3JhcHBlciAuc2VsZWN0LWljb24sOmhvc3QoLmluLWl0ZW0uaGFzLWZvY3VzKSAuc2VsZWN0LXdyYXBwZXIgLnNlbGVjdC1pY29uLDpob3N0KC5pbi1pdGVtLmhhcy1mb2N1cy5pb24tdmFsaWQpIC5zZWxlY3Qtd3JhcHBlciAuc2VsZWN0LWljb24sOmhvc3QoLmluLWl0ZW0uaW9uLXRvdWNoZWQuaW9uLWludmFsaWQpIC5zZWxlY3Qtd3JhcHBlciAuc2VsZWN0LWljb257Y29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtNTAwLCB2YXIoLS1pb24tdGV4dC1jb2xvci1zdGVwLTUwMCwgZ3JheSkpfTpob3N0KC5zZWxlY3QtZXhwYW5kZWQpIC5zZWxlY3Qtd3JhcHBlciAuc2VsZWN0LWljb24sOmhvc3QoLmhhcy1mb2N1cy5pb24tdmFsaWQpIC5zZWxlY3Qtd3JhcHBlciAuc2VsZWN0LWljb24sOmhvc3QoLmlvbi10b3VjaGVkLmlvbi1pbnZhbGlkKSAuc2VsZWN0LXdyYXBwZXIgLnNlbGVjdC1pY29uLDpob3N0KC5oYXMtZm9jdXMpIC5zZWxlY3Qtd3JhcHBlciAuc2VsZWN0LWljb257Y29sb3I6dmFyKC0taGlnaGxpZ2h0LWNvbG9yKX06aG9zdCguc2VsZWN0LXNoYXBlLXJvdW5kKXstLWJvcmRlci1yYWRpdXM6MTZweH06aG9zdCguc2VsZWN0LWxhYmVsLXBsYWNlbWVudC1zdGFja2VkKSAuc2VsZWN0LXdyYXBwZXItaW5uZXIsOmhvc3QoLnNlbGVjdC1sYWJlbC1wbGFjZW1lbnQtZmxvYXRpbmcpIC5zZWxlY3Qtd3JhcHBlci1pbm5lcnt3aWR0aDpjYWxjKDEwMCUgLSAwLjgxMjVyZW0gLSA0cHgpfTpob3N0KC5zZWxlY3QtZGlzYWJsZWQpe29wYWNpdHk6MC4zOH06OnNsb3R0ZWQoaW9uLWJ1dHRvbltzbG90PXN0YXJ0XS5idXR0b24taGFzLWljb24tb25seSksOjpzbG90dGVkKGlvbi1idXR0b25bc2xvdD1lbmRdLmJ1dHRvbi1oYXMtaWNvbi1vbmx5KXstLWJvcmRlci1yYWRpdXM6NTAlOy0tcGFkZGluZy1zdGFydDo4cHg7LS1wYWRkaW5nLWVuZDo4cHg7LS1wYWRkaW5nLXRvcDo4cHg7LS1wYWRkaW5nLWJvdHRvbTo4cHg7YXNwZWN0LXJhdGlvOjE7bWluLWhlaWdodDo0MHB4fVwiO1xuY29uc3QgU2VsZWN0ID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmlvbkNoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uQ2hhbmdlXCIsIDcpO1xuICAgIHRoaXMuaW9uQ2FuY2VsID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25DYW5jZWxcIiwgNyk7XG4gICAgdGhpcy5pb25EaXNtaXNzID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25EaXNtaXNzXCIsIDcpO1xuICAgIHRoaXMuaW9uRm9jdXMgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkZvY3VzXCIsIDcpO1xuICAgIHRoaXMuaW9uQmx1ciA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uQmx1clwiLCA3KTtcbiAgICB0aGlzLmlvblN0eWxlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25TdHlsZVwiLCA3KTtcbiAgICB0aGlzLmlucHV0SWQgPSBgaW9uLXNlbC0ke3NlbGVjdElkcysrfWA7XG4gICAgdGhpcy5oZWxwZXJUZXh0SWQgPSBgJHt0aGlzLmlucHV0SWR9LWhlbHBlci10ZXh0YDtcbiAgICB0aGlzLmVycm9yVGV4dElkID0gYCR7dGhpcy5pbnB1dElkfS1lcnJvci10ZXh0YDtcbiAgICB0aGlzLmluaGVyaXRlZEF0dHJpYnV0ZXMgPSB7fTtcbiAgICB0aGlzLmlzRXhwYW5kZWQgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBUaGUgYGhhc0ZvY3VzYCBzdGF0ZSBlbnN1cmVzIHRoZSBmb2N1cyBjbGFzcyBpc1xuICAgICAqIGFkZGVkIHJlZ2FyZGxlc3Mgb2YgaG93IHRoZSBlbGVtZW50IGlzIGZvY3VzZWQuXG4gICAgICogVGhlIGBpb24tZm9jdXNlZGAgY2xhc3Mgb25seSBhcHBsaWVzIHdoZW4gZm9jdXNlZFxuICAgICAqIHZpYSB0YWJiaW5nLCBub3QgYnkgY2xpY2tpbmcuXG4gICAgICogVGhlIGBoYXMtZm9jdXNgIGxvZ2ljIHdhcyBhZGRlZCB0byBlbnN1cmUgdGhlIGNsYXNzXG4gICAgICogaXMgYXBwbGllZCBpbiBib3RoIGNhc2VzLlxuICAgICAqL1xuICAgIHRoaXMuaGFzRm9jdXMgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBUaGUgdGV4dCB0byBkaXNwbGF5IG9uIHRoZSBjYW5jZWwgYnV0dG9uLlxuICAgICAqL1xuICAgIHRoaXMuY2FuY2VsVGV4dCA9ICdDYW5jZWwnO1xuICAgIC8qKlxuICAgICAqIElmIGB0cnVlYCwgdGhlIHVzZXIgY2Fubm90IGludGVyYWN0IHdpdGggdGhlIHNlbGVjdC5cbiAgICAgKi9cbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogVGhlIGludGVyZmFjZSB0aGUgc2VsZWN0IHNob3VsZCB1c2U6IGBhY3Rpb24tc2hlZXRgLCBgcG9wb3ZlcmAsIGBhbGVydGAsIG9yIGBtb2RhbGAuXG4gICAgICovXG4gICAgdGhpcy5pbnRlcmZhY2UgPSAnYWxlcnQnO1xuICAgIC8qKlxuICAgICAqIEFueSBhZGRpdGlvbmFsIG9wdGlvbnMgdGhhdCB0aGUgYGFsZXJ0YCwgYGFjdGlvbi1zaGVldGAgb3IgYHBvcG92ZXJgIGludGVyZmFjZVxuICAgICAqIGNhbiB0YWtlLiBTZWUgdGhlIFtpb24tYWxlcnQgZG9jc10oLi9hbGVydCksIHRoZVxuICAgICAqIFtpb24tYWN0aW9uLXNoZWV0IGRvY3NdKC4vYWN0aW9uLXNoZWV0KSwgdGhlXG4gICAgICogW2lvbi1wb3BvdmVyIGRvY3NdKC4vcG9wb3ZlciksIGFuZCB0aGUgW2lvbi1tb2RhbCBkb2NzXSguL21vZGFsKSBmb3IgdGhlXG4gICAgICogY3JlYXRlIG9wdGlvbnMgZm9yIGVhY2ggaW50ZXJmYWNlLlxuICAgICAqXG4gICAgICogTm90ZTogYGludGVyZmFjZU9wdGlvbnNgIHdpbGwgbm90IG92ZXJyaWRlIGBpbnB1dHNgIG9yIGBidXR0b25zYCB3aXRoIHRoZSBgYWxlcnRgIGludGVyZmFjZS5cbiAgICAgKi9cbiAgICB0aGlzLmludGVyZmFjZU9wdGlvbnMgPSB7fTtcbiAgICAvKipcbiAgICAgKiBXaGVyZSB0byBwbGFjZSB0aGUgbGFiZWwgcmVsYXRpdmUgdG8gdGhlIHNlbGVjdC5cbiAgICAgKiBgXCJzdGFydFwiYDogVGhlIGxhYmVsIHdpbGwgYXBwZWFyIHRvIHRoZSBsZWZ0IG9mIHRoZSBzZWxlY3QgaW4gTFRSIGFuZCB0byB0aGUgcmlnaHQgaW4gUlRMLlxuICAgICAqIGBcImVuZFwiYDogVGhlIGxhYmVsIHdpbGwgYXBwZWFyIHRvIHRoZSByaWdodCBvZiB0aGUgc2VsZWN0IGluIExUUiBhbmQgdG8gdGhlIGxlZnQgaW4gUlRMLlxuICAgICAqIGBcImZsb2F0aW5nXCJgOiBUaGUgbGFiZWwgd2lsbCBhcHBlYXIgc21hbGxlciBhbmQgYWJvdmUgdGhlIHNlbGVjdCB3aGVuIHRoZSBzZWxlY3QgaXMgZm9jdXNlZCBvciBpdCBoYXMgYSB2YWx1ZS4gT3RoZXJ3aXNlIGl0IHdpbGwgYXBwZWFyIG9uIHRvcCBvZiB0aGUgc2VsZWN0LlxuICAgICAqIGBcInN0YWNrZWRcImA6IFRoZSBsYWJlbCB3aWxsIGFwcGVhciBzbWFsbGVyIGFuZCBhYm92ZSB0aGUgc2VsZWN0IHJlZ2FyZGxlc3MgZXZlbiB3aGVuIHRoZSBzZWxlY3QgaXMgYmx1cnJlZCBvciBoYXMgbm8gdmFsdWUuXG4gICAgICogYFwiZml4ZWRcImA6IFRoZSBsYWJlbCBoYXMgdGhlIHNhbWUgYmVoYXZpb3IgYXMgYFwic3RhcnRcImAgZXhjZXB0IGl0IGFsc28gaGFzIGEgZml4ZWQgd2lkdGguIExvbmcgdGV4dCB3aWxsIGJlIHRydW5jYXRlZCB3aXRoIGVsbGlwc2VzIChcIi4uLlwiKS5cbiAgICAgKiBXaGVuIHVzaW5nIGBcImZsb2F0aW5nXCJgIG9yIGBcInN0YWNrZWRcImAgd2UgcmVjb21tZW5kIGluaXRpYWxpemluZyB0aGUgc2VsZWN0IHdpdGggZWl0aGVyIGEgYHZhbHVlYCBvciBhIGBwbGFjZWhvbGRlcmAuXG4gICAgICovXG4gICAgdGhpcy5sYWJlbFBsYWNlbWVudCA9ICdzdGFydCc7XG4gICAgLyoqXG4gICAgICogSWYgYHRydWVgLCB0aGUgc2VsZWN0IGNhbiBhY2NlcHQgbXVsdGlwbGUgdmFsdWVzLlxuICAgICAqL1xuICAgIHRoaXMubXVsdGlwbGUgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGUgY29udHJvbCwgd2hpY2ggaXMgc3VibWl0dGVkIHdpdGggdGhlIGZvcm0gZGF0YS5cbiAgICAgKi9cbiAgICB0aGlzLm5hbWUgPSB0aGlzLmlucHV0SWQ7XG4gICAgLyoqXG4gICAgICogVGhlIHRleHQgdG8gZGlzcGxheSBvbiB0aGUgb2sgYnV0dG9uLlxuICAgICAqL1xuICAgIHRoaXMub2tUZXh0ID0gJ09LJztcbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCBzY3JlZW4gcmVhZGVycyB3aWxsIGFubm91bmNlIGl0IGFzIGEgcmVxdWlyZWQgZmllbGQuIFRoaXMgcHJvcGVydHlcbiAgICAgKiB3b3JrcyBvbmx5IGZvciBhY2Nlc3NpYmlsaXR5IHB1cnBvc2VzLCBpdCB3aWxsIG5vdCBwcmV2ZW50IHRoZSBmb3JtIGZyb21cbiAgICAgKiBzdWJtaXR0aW5nIGlmIHRoZSB2YWx1ZSBpcyBpbnZhbGlkLlxuICAgICAqL1xuICAgIHRoaXMucmVxdWlyZWQgPSBmYWxzZTtcbiAgICB0aGlzLm9uQ2xpY2sgPSBldiA9PiB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQ7XG4gICAgICBjb25zdCBjbG9zZXN0U2xvdCA9IHRhcmdldC5jbG9zZXN0KCdbc2xvdD1cInN0YXJ0XCJdLCBbc2xvdD1cImVuZFwiXScpO1xuICAgICAgaWYgKHRhcmdldCA9PT0gdGhpcy5lbCB8fCBjbG9zZXN0U2xvdCA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNldEZvY3VzKCk7XG4gICAgICAgIHRoaXMub3Blbihldik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKipcbiAgICAgICAgICogUHJldmVudCBjbGlja3MgdG8gdGhlIHN0YXJ0L2VuZCBzbG90cyBmcm9tIG9wZW5pbmcgdGhlIHNlbGVjdC5cbiAgICAgICAgICogV2UgZW5zdXJlIHRoZSB0YXJnZXQgaXNuJ3QgdGhpcyBlbGVtZW50IGluIGNhc2UgdGhlIHNlbGVjdCBpcyBzbG90dGVkXG4gICAgICAgICAqIGluLCBmb3IgZXhhbXBsZSwgYW4gaXRlbS4gVGhpcyB3b3VsZCBwcmV2ZW50IHRoZSBzZWxlY3QgZnJvbSBldmVyXG4gICAgICAgICAqIGJlaW5nIG9wZW5lZCBzaW5jZSB0aGUgZWxlbWVudCBpdHNlbGYgaGFzIHNsb3Q9XCJzdGFydFwiL1wiZW5kXCIuXG4gICAgICAgICAqXG4gICAgICAgICAqIENsaWNraW5nIGEgc2xvdHRlZCBlbGVtZW50IGFsc28gY2F1c2VzIGEgY2xpY2tcbiAgICAgICAgICogb24gdGhlIDxsYWJlbD4gZWxlbWVudCAoc2luY2UgaXQgd3JhcHMgdGhlIHNsb3RzKS5cbiAgICAgICAgICogQ2xpY2tpbmcgPGxhYmVsPiBkaXNwYXRjaGVzIGFub3RoZXIgY2xpY2sgZXZlbnQgb25cbiAgICAgICAgICogdGhlIG5hdGl2ZSBmb3JtIGNvbnRyb2wgdGhhdCB0aGVuIGJ1YmJsZXMgdXAgdG8gdGhpc1xuICAgICAgICAgKiBsaXN0ZW5lci4gVGhpcyBhZGRpdGlvbmFsIGV2ZW50IHRhcmdldHMgdGhlIGhvc3RcbiAgICAgICAgICogZWxlbWVudCwgc28gdGhlIHNlbGVjdCBvdmVybGF5IGlzIG9wZW5lZC5cbiAgICAgICAgICpcbiAgICAgICAgICogV2hlbiB0aGUgc2xvdHRlZCBlbGVtZW50cyBhcmUgY2xpY2tlZCAoYW5kIHRoZXJlZm9yZVxuICAgICAgICAgKiB0aGUgYW5jZXN0b3IgPGxhYmVsPiBlbGVtZW50KSB3ZSB3YW50IHRvIHByZXZlbnQgdGhlIGxhYmVsXG4gICAgICAgICAqIGZyb20gZGlzcGF0Y2hpbmcgYW5vdGhlciBjbGljayBldmVudC5cbiAgICAgICAgICpcbiAgICAgICAgICogRG8gbm90IGNhbGwgc3RvcFByb3BhZ2F0aW9uKCkgYmVjYXVzZSB0aGlzIHdpbGwgY2F1c2VcbiAgICAgICAgICogY2xpY2sgaGFuZGxlcnMgb24gdGhlIHNsb3R0ZWQgZWxlbWVudHMgdG8gbmV2ZXIgZmlyZSBpbiBSZWFjdC5cbiAgICAgICAgICogV2hlbiBkZXZlbG9wZXJzIGRvIG9uQ2xpY2sgaW4gUmVhY3QgYSBuYXRpdmUgXCJjbGlja1wiIGxpc3RlbmVyXG4gICAgICAgICAqIGlzIGFkZGVkIG9uIHRoZSByb290IGVsZW1lbnQsIG5vdCB0aGUgc2xvdHRlZCBlbGVtZW50LiBXaGVuIHRoYXRcbiAgICAgICAgICogbmF0aXZlIGNsaWNrIGxpc3RlbmVyIGZpcmVzLCBSZWFjdCB0aGVuIGRpc3BhdGNoZXMgdGhlIHN5bnRoZXRpY1xuICAgICAgICAgKiBjbGljayBldmVudCBvbiB0aGUgc2xvdHRlZCBlbGVtZW50LiBIb3dldmVyLCBpZiBzdG9wUHJvcGFnYXRpb25cbiAgICAgICAgICogaXMgY2FsbGVkIHRoZW4gdGhlIG5hdGl2ZSBjbGljayBldmVudCB3aWxsIG5ldmVyIGJ1YmJsZSB1cFxuICAgICAgICAgKiB0byB0aGUgcm9vdCBlbGVtZW50LlxuICAgICAgICAgKi9cbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMub25Gb2N1cyA9ICgpID0+IHtcbiAgICAgIHRoaXMuaGFzRm9jdXMgPSB0cnVlO1xuICAgICAgdGhpcy5pb25Gb2N1cy5lbWl0KCk7XG4gICAgfTtcbiAgICB0aGlzLm9uQmx1ciA9ICgpID0+IHtcbiAgICAgIHRoaXMuaGFzRm9jdXMgPSBmYWxzZTtcbiAgICAgIHRoaXMuaW9uQmx1ci5lbWl0KCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTdG9wcyBwcm9wYWdhdGlvbiB3aGVuIHRoZSBsYWJlbCBpcyBjbGlja2VkLFxuICAgICAqIG90aGVyd2lzZSwgdHdvIGNsaWNrcyB3aWxsIGJlIHRyaWdnZXJlZC5cbiAgICAgKi9cbiAgICB0aGlzLm9uTGFiZWxDbGljayA9IGV2ID0+IHtcbiAgICAgIC8vIE9ubHkgc3RvcCBwcm9wYWdhdGlvbiBpZiB0aGUgY2xpY2sgd2FzIGRpcmVjdGx5IG9uIHRoZSBsYWJlbFxuICAgICAgLy8gYW5kIG5vdCBvbiB0aGUgaW5wdXQgb3Igb3RoZXIgY2hpbGQgZWxlbWVudHNcbiAgICAgIGlmIChldi50YXJnZXQgPT09IGV2LmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBzdHlsZUNoYW5nZWQoKSB7XG4gICAgdGhpcy5lbWl0U3R5bGUoKTtcbiAgfVxuICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmlvbkNoYW5nZS5lbWl0KHtcbiAgICAgIHZhbHVlXG4gICAgfSk7XG4gIH1cbiAgYXN5bmMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY29uc3Qge1xuICAgICAgZWxcbiAgICB9ID0gdGhpcztcbiAgICB0aGlzLm5vdGNoQ29udHJvbGxlciA9IGNyZWF0ZU5vdGNoQ29udHJvbGxlcihlbCwgKCkgPT4gdGhpcy5ub3RjaFNwYWNlckVsLCAoKSA9PiB0aGlzLmxhYmVsU2xvdCk7XG4gICAgdGhpcy51cGRhdGVPdmVybGF5T3B0aW9ucygpO1xuICAgIHRoaXMuZW1pdFN0eWxlKCk7XG4gICAgdGhpcy5tdXRhdGlvbk8gPSB3YXRjaEZvck9wdGlvbnModGhpcy5lbCwgJ2lvbi1zZWxlY3Qtb3B0aW9uJywgYXN5bmMgKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVPdmVybGF5T3B0aW9ucygpO1xuICAgICAgLyoqXG4gICAgICAgKiBXZSBuZWVkIHRvIHJlLXJlbmRlciB0aGUgY29tcG9uZW50XG4gICAgICAgKiBiZWNhdXNlIG9uZSBvZiB0aGUgbmV3IGlvbi1zZWxlY3Qtb3B0aW9uXG4gICAgICAgKiBlbGVtZW50cyBtYXkgbWF0Y2ggdGhlIHZhbHVlLiBJbiB0aGlzIGNhc2UsXG4gICAgICAgKiB0aGUgcmVuZGVyZWQgc2VsZWN0ZWQgdGV4dCBzaG91bGQgYmUgdXBkYXRlZC5cbiAgICAgICAqL1xuICAgICAgZm9yY2VVcGRhdGUodGhpcyk7XG4gICAgfSk7XG4gIH1cbiAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgdGhpcy5pbmhlcml0ZWRBdHRyaWJ1dGVzID0gaW5oZXJpdEF0dHJpYnV0ZXModGhpcy5lbCwgWydhcmlhLWxhYmVsJ10pO1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgLyoqXG4gICAgICogSWYgYW55IG9mIHRoZSBjb25kaXRpb25zIHRoYXQgdHJpZ2dlciB0aGUgc3R5bGVDaGFuZ2VkIGNhbGxiYWNrXG4gICAgICogYXJlIG1ldCBvbiBjb21wb25lbnQgbG9hZCwgaXQgaXMgcG9zc2libGUgdGhlIGV2ZW50IGVtaXR0ZWRcbiAgICAgKiBwcmlvciB0byBhIHBhcmVudCB3ZWIgY29tcG9uZW50IHJlZ2lzdGVyaW5nIGFuIGV2ZW50IGxpc3RlbmVyLlxuICAgICAqXG4gICAgICogVG8gZW5zdXJlIHRoZSBwYXJlbnQgd2ViIGNvbXBvbmVudCByZWNlaXZlcyB0aGUgZXZlbnQsIHdlXG4gICAgICogZW1pdCB0aGUgc3R5bGUgZXZlbnQgYWdhaW4gYWZ0ZXIgdGhlIGNvbXBvbmVudCBoYXMgbG9hZGVkLlxuICAgICAqXG4gICAgICogVGhpcyBpcyBvZnRlbiBzZWVuIGluIEFuZ3VsYXIgd2l0aCB0aGUgYGRpc3RgIG91dHB1dCB0YXJnZXQuXG4gICAgICovXG4gICAgdGhpcy5lbWl0U3R5bGUoKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBpZiAodGhpcy5tdXRhdGlvbk8pIHtcbiAgICAgIHRoaXMubXV0YXRpb25PLmRpc2Nvbm5lY3QoKTtcbiAgICAgIHRoaXMubXV0YXRpb25PID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAodGhpcy5ub3RjaENvbnRyb2xsZXIpIHtcbiAgICAgIHRoaXMubm90Y2hDb250cm9sbGVyLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMubm90Y2hDb250cm9sbGVyID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogT3BlbiB0aGUgc2VsZWN0IG92ZXJsYXkuIFRoZSBvdmVybGF5IGlzIGVpdGhlciBhbiBhbGVydCwgYWN0aW9uIHNoZWV0LCBvciBwb3BvdmVyLFxuICAgKiBkZXBlbmRpbmcgb24gdGhlIGBpbnRlcmZhY2VgIHByb3BlcnR5IG9uIHRoZSBgaW9uLXNlbGVjdGAuXG4gICAqXG4gICAqIEBwYXJhbSBldmVudCBUaGUgdXNlciBpbnRlcmZhY2UgZXZlbnQgdGhhdCBjYWxsZWQgdGhlIG9wZW4uXG4gICAqL1xuICBhc3luYyBvcGVuKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5pc0V4cGFuZGVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICB0aGlzLmlzRXhwYW5kZWQgPSB0cnVlO1xuICAgIGNvbnN0IG92ZXJsYXkgPSB0aGlzLm92ZXJsYXkgPSBhd2FpdCB0aGlzLmNyZWF0ZU92ZXJsYXkoZXZlbnQpO1xuICAgIC8vIEFkZCBsb2dpYyB0byBzY3JvbGwgc2VsZWN0ZWQgaXRlbSBpbnRvIHZpZXcgYmVmb3JlIHByZXNlbnRpbmdcbiAgICBjb25zdCBzY3JvbGxTZWxlY3RlZEludG9WaWV3ID0gKCkgPT4ge1xuICAgICAgY29uc3QgaW5kZXhPZlNlbGVjdGVkID0gdGhpcy5jaGlsZE9wdHMuZmluZEluZGV4KG8gPT4gby52YWx1ZSA9PT0gdGhpcy52YWx1ZSk7XG4gICAgICBpZiAoaW5kZXhPZlNlbGVjdGVkID4gLTEpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtID0gb3ZlcmxheS5xdWVyeVNlbGVjdG9yKGAuc2VsZWN0LWludGVyZmFjZS1vcHRpb246bnRoLW9mLXR5cGUoJHtpbmRleE9mU2VsZWN0ZWQgKyAxfSlgKTtcbiAgICAgICAgaWYgKHNlbGVjdGVkSXRlbSkge1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIEJyb3dzZXJzIHN1Y2ggYXMgRmlyZWZveCBkbyBub3RcbiAgICAgICAgICAgKiBjb3JyZWN0bHkgZGVsZWdhdGUgZm9jdXMgd2hlbiBtYW51YWxseVxuICAgICAgICAgICAqIGZvY3VzaW5nIGFuIGVsZW1lbnQgd2l0aCBkZWxlZ2F0ZXNGb2N1cy5cbiAgICAgICAgICAgKiBXZSB3b3JrIGFyb3VuZCB0aGlzIGJ5IG1hbnVhbGx5IGZvY3VzaW5nXG4gICAgICAgICAgICogdGhlIGludGVyYWN0aXZlIGVsZW1lbnQuXG4gICAgICAgICAgICogaW9uLXJhZGlvIGFuZCBpb24tY2hlY2tib3ggYXJlIHRoZSBvbmx5XG4gICAgICAgICAgICogZWxlbWVudHMgdGhhdCBpb24tc2VsZWN0LXBvcG92ZXIgdXNlcywgc29cbiAgICAgICAgICAgKiB3ZSBvbmx5IG5lZWQgdG8gd29ycnkgYWJvdXQgdGhvc2UgdHdvIGNvbXBvbmVudHNcbiAgICAgICAgICAgKiB3aGVuIGZvY3VzaW5nLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIGNvbnN0IGludGVyYWN0aXZlRWwgPSBzZWxlY3RlZEl0ZW0ucXVlcnlTZWxlY3RvcignaW9uLXJhZGlvLCBpb24tY2hlY2tib3gnKTtcbiAgICAgICAgICBpZiAoaW50ZXJhY3RpdmVFbCkge1xuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtLnNjcm9sbEludG9WaWV3KHtcbiAgICAgICAgICAgICAgYmxvY2s6ICduZWFyZXN0J1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBOZWVkcyB0byBiZSBjYWxsZWQgYmVmb3JlIGBmb2N1c1Zpc2libGVFbGVtZW50YCB0byBwcmV2ZW50IGlzc3VlIHdpdGggZm9jdXMgZXZlbnQgYnViYmxpbmdcbiAgICAgICAgICAgIC8vIGFuZCByZW1vdmluZyBgaW9uLWZvY3VzZWRgIHN0eWxlXG4gICAgICAgICAgICBpbnRlcmFjdGl2ZUVsLnNldEZvY3VzKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvY3VzVmlzaWJsZUVsZW1lbnQoc2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIG5vIHZhbHVlIGlzIHNldCB0aGVuIGZvY3VzIHRoZSBmaXJzdCBlbmFibGVkIG9wdGlvbi5cbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IGZpcnN0RW5hYmxlZE9wdGlvbiA9IG92ZXJsYXkucXVlcnlTZWxlY3RvcignaW9uLXJhZGlvOm5vdCgucmFkaW8tZGlzYWJsZWQpLCBpb24tY2hlY2tib3g6bm90KC5jaGVja2JveC1kaXNhYmxlZCknKTtcbiAgICAgICAgaWYgKGZpcnN0RW5hYmxlZE9wdGlvbikge1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIEZvY3VzIHRoZSBvcHRpb24gZm9yIHRoZSBzYW1lIHJlYXNvbiBhcyB3ZSBkbyBhYm92ZS5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIE5lZWRzIHRvIGJlIGNhbGxlZCBiZWZvcmUgYGZvY3VzVmlzaWJsZUVsZW1lbnRgIHRvIHByZXZlbnQgaXNzdWUgd2l0aCBmb2N1cyBldmVudCBidWJibGluZ1xuICAgICAgICAgICAqIGFuZCByZW1vdmluZyBgaW9uLWZvY3VzZWRgIHN0eWxlXG4gICAgICAgICAgICovXG4gICAgICAgICAgZmlyc3RFbmFibGVkT3B0aW9uLnNldEZvY3VzKCk7XG4gICAgICAgICAgZm9jdXNWaXNpYmxlRWxlbWVudChmaXJzdEVuYWJsZWRPcHRpb24uY2xvc2VzdCgnaW9uLWl0ZW0nKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIC8vIEZvciBtb2RhbHMgYW5kIHBvcG92ZXJzLCB3ZSBjYW4gc2Nyb2xsIGJlZm9yZSB0aGV5J3JlIHZpc2libGVcbiAgICBpZiAodGhpcy5pbnRlcmZhY2UgPT09ICdtb2RhbCcpIHtcbiAgICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignaW9uTW9kYWxXaWxsUHJlc2VudCcsIHNjcm9sbFNlbGVjdGVkSW50b1ZpZXcsIHtcbiAgICAgICAgb25jZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmludGVyZmFjZSA9PT0gJ3BvcG92ZXInKSB7XG4gICAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2lvblBvcG92ZXJXaWxsUHJlc2VudCcsIHNjcm9sbFNlbGVjdGVkSW50b1ZpZXcsIHtcbiAgICAgICAgb25jZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8qKlxuICAgICAgICogRm9yIGFsZXJ0cyBhbmQgYWN0aW9uIHNoZWV0cywgd2UgbmVlZCB0byB3YWl0IGEgZnJhbWUgYWZ0ZXIgd2lsbFByZXNlbnRcbiAgICAgICAqIGJlY2F1c2UgdGhlc2Ugb3ZlcmxheXMgZG9uJ3QgaGF2ZSB0aGVpciBjb250ZW50IGluIHRoZSBET00gaW1tZWRpYXRlbHlcbiAgICAgICAqIHdoZW4gd2lsbFByZXNlbnQgZmlyZXMuIEJ5IHdhaXRpbmcgYSBmcmFtZSwgd2UgZW5zdXJlIHRoZSBjb250ZW50IGlzXG4gICAgICAgKiByZW5kZXJlZCBhbmQgY2FuIGJlIHByb3Blcmx5IHNjcm9sbGVkIGludG8gdmlldy5cbiAgICAgICAqL1xuICAgICAgY29uc3Qgc2Nyb2xsQWZ0ZXJSZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgc2Nyb2xsU2VsZWN0ZWRJbnRvVmlldygpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICBpZiAodGhpcy5pbnRlcmZhY2UgPT09ICdhbGVydCcpIHtcbiAgICAgICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdpb25BbGVydFdpbGxQcmVzZW50Jywgc2Nyb2xsQWZ0ZXJSZW5kZXIsIHtcbiAgICAgICAgICBvbmNlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmludGVyZmFjZSA9PT0gJ2FjdGlvbi1zaGVldCcpIHtcbiAgICAgICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdpb25BY3Rpb25TaGVldFdpbGxQcmVzZW50Jywgc2Nyb2xsQWZ0ZXJSZW5kZXIsIHtcbiAgICAgICAgICBvbmNlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBvdmVybGF5Lm9uRGlkRGlzbWlzcygpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5vdmVybGF5ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5pc0V4cGFuZGVkID0gZmFsc2U7XG4gICAgICB0aGlzLmlvbkRpc21pc3MuZW1pdCgpO1xuICAgICAgdGhpcy5zZXRGb2N1cygpO1xuICAgIH0pO1xuICAgIGF3YWl0IG92ZXJsYXkucHJlc2VudCgpO1xuICAgIHJldHVybiBvdmVybGF5O1xuICB9XG4gIGNyZWF0ZU92ZXJsYXkoZXYpIHtcbiAgICBsZXQgc2VsZWN0SW50ZXJmYWNlID0gdGhpcy5pbnRlcmZhY2U7XG4gICAgaWYgKHNlbGVjdEludGVyZmFjZSA9PT0gJ2FjdGlvbi1zaGVldCcgJiYgdGhpcy5tdWx0aXBsZSkge1xuICAgICAgcHJpbnRJb25XYXJuaW5nKGBbaW9uLXNlbGVjdF0gLSBJbnRlcmZhY2UgY2Fubm90IGJlIFwiJHtzZWxlY3RJbnRlcmZhY2V9XCIgd2l0aCBhIG11bHRpLXZhbHVlIHNlbGVjdC4gVXNpbmcgdGhlIFwiYWxlcnRcIiBpbnRlcmZhY2UgaW5zdGVhZC5gKTtcbiAgICAgIHNlbGVjdEludGVyZmFjZSA9ICdhbGVydCc7XG4gICAgfVxuICAgIGlmIChzZWxlY3RJbnRlcmZhY2UgPT09ICdwb3BvdmVyJyAmJiAhZXYpIHtcbiAgICAgIHByaW50SW9uV2FybmluZyhgW2lvbi1zZWxlY3RdIC0gSW50ZXJmYWNlIGNhbm5vdCBiZSBhIFwiJHtzZWxlY3RJbnRlcmZhY2V9XCIgd2l0aG91dCBwYXNzaW5nIGFuIGV2ZW50LiBVc2luZyB0aGUgXCJhbGVydFwiIGludGVyZmFjZSBpbnN0ZWFkLmApO1xuICAgICAgc2VsZWN0SW50ZXJmYWNlID0gJ2FsZXJ0JztcbiAgICB9XG4gICAgaWYgKHNlbGVjdEludGVyZmFjZSA9PT0gJ2FjdGlvbi1zaGVldCcpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wZW5BY3Rpb25TaGVldCgpO1xuICAgIH1cbiAgICBpZiAoc2VsZWN0SW50ZXJmYWNlID09PSAncG9wb3ZlcicpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wZW5Qb3BvdmVyKGV2KTtcbiAgICB9XG4gICAgaWYgKHNlbGVjdEludGVyZmFjZSA9PT0gJ21vZGFsJykge1xuICAgICAgcmV0dXJuIHRoaXMub3Blbk1vZGFsKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm9wZW5BbGVydCgpO1xuICB9XG4gIHVwZGF0ZU92ZXJsYXlPcHRpb25zKCkge1xuICAgIGNvbnN0IG92ZXJsYXkgPSB0aGlzLm92ZXJsYXk7XG4gICAgaWYgKCFvdmVybGF5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNoaWxkT3B0cyA9IHRoaXMuY2hpbGRPcHRzO1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICBzd2l0Y2ggKHRoaXMuaW50ZXJmYWNlKSB7XG4gICAgICBjYXNlICdhY3Rpb24tc2hlZXQnOlxuICAgICAgICBvdmVybGF5LmJ1dHRvbnMgPSB0aGlzLmNyZWF0ZUFjdGlvblNoZWV0QnV0dG9ucyhjaGlsZE9wdHMsIHZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdwb3BvdmVyJzpcbiAgICAgICAgY29uc3QgcG9wb3ZlciA9IG92ZXJsYXkucXVlcnlTZWxlY3RvcignaW9uLXNlbGVjdC1wb3BvdmVyJyk7XG4gICAgICAgIGlmIChwb3BvdmVyKSB7XG4gICAgICAgICAgcG9wb3Zlci5vcHRpb25zID0gdGhpcy5jcmVhdGVPdmVybGF5U2VsZWN0T3B0aW9ucyhjaGlsZE9wdHMsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ21vZGFsJzpcbiAgICAgICAgY29uc3QgbW9kYWwgPSBvdmVybGF5LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1zZWxlY3QtbW9kYWwnKTtcbiAgICAgICAgaWYgKG1vZGFsKSB7XG4gICAgICAgICAgbW9kYWwub3B0aW9ucyA9IHRoaXMuY3JlYXRlT3ZlcmxheVNlbGVjdE9wdGlvbnMoY2hpbGRPcHRzLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdhbGVydCc6XG4gICAgICAgIGNvbnN0IGlucHV0VHlwZSA9IHRoaXMubXVsdGlwbGUgPyAnY2hlY2tib3gnIDogJ3JhZGlvJztcbiAgICAgICAgb3ZlcmxheS5pbnB1dHMgPSB0aGlzLmNyZWF0ZUFsZXJ0SW5wdXRzKGNoaWxkT3B0cywgaW5wdXRUeXBlLCB2YWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBjcmVhdGVBY3Rpb25TaGVldEJ1dHRvbnMoZGF0YSwgc2VsZWN0VmFsdWUpIHtcbiAgICBjb25zdCBhY3Rpb25TaGVldEJ1dHRvbnMgPSBkYXRhLm1hcChvcHRpb24gPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBnZXRPcHRpb25WYWx1ZShvcHRpb24pO1xuICAgICAgLy8gUmVtb3ZlIGh5ZHJhdGVkIGJlZm9yZSBjb3B5aW5nIG92ZXIgY2xhc3Nlc1xuICAgICAgY29uc3QgY29weUNsYXNzZXMgPSBBcnJheS5mcm9tKG9wdGlvbi5jbGFzc0xpc3QpLmZpbHRlcihjbHMgPT4gY2xzICE9PSAnaHlkcmF0ZWQnKS5qb2luKCcgJyk7XG4gICAgICBjb25zdCBvcHRDbGFzcyA9IGAke09QVElPTl9DTEFTU30gJHtjb3B5Q2xhc3Nlc31gO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcm9sZTogaXNPcHRpb25TZWxlY3RlZChzZWxlY3RWYWx1ZSwgdmFsdWUsIHRoaXMuY29tcGFyZVdpdGgpID8gJ3NlbGVjdGVkJyA6ICcnLFxuICAgICAgICB0ZXh0OiBvcHRpb24udGV4dENvbnRlbnQsXG4gICAgICAgIGNzc0NsYXNzOiBvcHRDbGFzcyxcbiAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pO1xuICAgIC8vIEFkZCBcImNhbmNlbFwiIGJ1dHRvblxuICAgIGFjdGlvblNoZWV0QnV0dG9ucy5wdXNoKHtcbiAgICAgIHRleHQ6IHRoaXMuY2FuY2VsVGV4dCxcbiAgICAgIHJvbGU6ICdjYW5jZWwnLFxuICAgICAgaGFuZGxlcjogKCkgPT4ge1xuICAgICAgICB0aGlzLmlvbkNhbmNlbC5lbWl0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGFjdGlvblNoZWV0QnV0dG9ucztcbiAgfVxuICBjcmVhdGVBbGVydElucHV0cyhkYXRhLCBpbnB1dFR5cGUsIHNlbGVjdFZhbHVlKSB7XG4gICAgY29uc3QgYWxlcnRJbnB1dHMgPSBkYXRhLm1hcChvcHRpb24gPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBnZXRPcHRpb25WYWx1ZShvcHRpb24pO1xuICAgICAgLy8gUmVtb3ZlIGh5ZHJhdGVkIGJlZm9yZSBjb3B5aW5nIG92ZXIgY2xhc3Nlc1xuICAgICAgY29uc3QgY29weUNsYXNzZXMgPSBBcnJheS5mcm9tKG9wdGlvbi5jbGFzc0xpc3QpLmZpbHRlcihjbHMgPT4gY2xzICE9PSAnaHlkcmF0ZWQnKS5qb2luKCcgJyk7XG4gICAgICBjb25zdCBvcHRDbGFzcyA9IGAke09QVElPTl9DTEFTU30gJHtjb3B5Q2xhc3Nlc31gO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogaW5wdXRUeXBlLFxuICAgICAgICBjc3NDbGFzczogb3B0Q2xhc3MsXG4gICAgICAgIGxhYmVsOiBvcHRpb24udGV4dENvbnRlbnQgfHwgJycsXG4gICAgICAgIHZhbHVlLFxuICAgICAgICBjaGVja2VkOiBpc09wdGlvblNlbGVjdGVkKHNlbGVjdFZhbHVlLCB2YWx1ZSwgdGhpcy5jb21wYXJlV2l0aCksXG4gICAgICAgIGRpc2FibGVkOiBvcHRpb24uZGlzYWJsZWRcbiAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIGFsZXJ0SW5wdXRzO1xuICB9XG4gIGNyZWF0ZU92ZXJsYXlTZWxlY3RPcHRpb25zKGRhdGEsIHNlbGVjdFZhbHVlKSB7XG4gICAgY29uc3QgcG9wb3Zlck9wdGlvbnMgPSBkYXRhLm1hcChvcHRpb24gPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBnZXRPcHRpb25WYWx1ZShvcHRpb24pO1xuICAgICAgLy8gUmVtb3ZlIGh5ZHJhdGVkIGJlZm9yZSBjb3B5aW5nIG92ZXIgY2xhc3Nlc1xuICAgICAgY29uc3QgY29weUNsYXNzZXMgPSBBcnJheS5mcm9tKG9wdGlvbi5jbGFzc0xpc3QpLmZpbHRlcihjbHMgPT4gY2xzICE9PSAnaHlkcmF0ZWQnKS5qb2luKCcgJyk7XG4gICAgICBjb25zdCBvcHRDbGFzcyA9IGAke09QVElPTl9DTEFTU30gJHtjb3B5Q2xhc3Nlc31gO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGV4dDogb3B0aW9uLnRleHRDb250ZW50IHx8ICcnLFxuICAgICAgICBjc3NDbGFzczogb3B0Q2xhc3MsXG4gICAgICAgIHZhbHVlLFxuICAgICAgICBjaGVja2VkOiBpc09wdGlvblNlbGVjdGVkKHNlbGVjdFZhbHVlLCB2YWx1ZSwgdGhpcy5jb21wYXJlV2l0aCksXG4gICAgICAgIGRpc2FibGVkOiBvcHRpb24uZGlzYWJsZWQsXG4gICAgICAgIGhhbmRsZXI6IHNlbGVjdGVkID0+IHtcbiAgICAgICAgICB0aGlzLnNldFZhbHVlKHNlbGVjdGVkKTtcbiAgICAgICAgICBpZiAoIXRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIHBvcG92ZXJPcHRpb25zO1xuICB9XG4gIGFzeW5jIG9wZW5Qb3BvdmVyKGV2KSB7XG4gICAgY29uc3Qge1xuICAgICAgZmlsbCxcbiAgICAgIGxhYmVsUGxhY2VtZW50XG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgaW50ZXJmYWNlT3B0aW9ucyA9IHRoaXMuaW50ZXJmYWNlT3B0aW9ucztcbiAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICBjb25zdCBzaG93QmFja2Ryb3AgPSBtb2RlID09PSAnbWQnID8gZmFsc2UgOiB0cnVlO1xuICAgIGNvbnN0IG11bHRpcGxlID0gdGhpcy5tdWx0aXBsZTtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgbGV0IGV2ZW50ID0gZXY7XG4gICAgbGV0IHNpemUgPSAnYXV0byc7XG4gICAgY29uc3QgaGFzRmxvYXRpbmdPclN0YWNrZWRMYWJlbCA9IGxhYmVsUGxhY2VtZW50ID09PSAnZmxvYXRpbmcnIHx8IGxhYmVsUGxhY2VtZW50ID09PSAnc3RhY2tlZCc7XG4gICAgLyoqXG4gICAgICogVGhlIHBvcG92ZXIgc2hvdWxkIHRha2UgdXAgdGhlIGZ1bGwgd2lkdGhcbiAgICAgKiB3aGVuIHVzaW5nIGEgZmlsbCBpbiBNRCBtb2RlIG9yIGlmIHRoZVxuICAgICAqIGxhYmVsIGlzIGZsb2F0aW5nL3N0YWNrZWQuXG4gICAgICovXG4gICAgaWYgKGhhc0Zsb2F0aW5nT3JTdGFja2VkTGFiZWwgfHwgbW9kZSA9PT0gJ21kJyAmJiBmaWxsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHNpemUgPSAnY292ZXInO1xuICAgICAgLyoqXG4gICAgICAgKiBPdGhlcndpc2UgdGhlIHBvcG92ZXJcbiAgICAgICAqIHNob3VsZCBiZSBwb3NpdGlvbmVkIHJlbGF0aXZlXG4gICAgICAgKiB0byB0aGUgbmF0aXZlIGVsZW1lbnQuXG4gICAgICAgKi9cbiAgICB9IGVsc2Uge1xuICAgICAgZXZlbnQgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGV2KSwge1xuICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICBpb25TaGFkb3dUYXJnZXQ6IHRoaXMubmF0aXZlV3JhcHBlckVsXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBwb3BvdmVyT3B0cyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7XG4gICAgICBtb2RlLFxuICAgICAgZXZlbnQsXG4gICAgICBhbGlnbm1lbnQ6ICdjZW50ZXInLFxuICAgICAgc2l6ZSxcbiAgICAgIHNob3dCYWNrZHJvcFxuICAgIH0sIGludGVyZmFjZU9wdGlvbnMpLCB7XG4gICAgICBjb21wb25lbnQ6ICdpb24tc2VsZWN0LXBvcG92ZXInLFxuICAgICAgY3NzQ2xhc3M6IFsnc2VsZWN0LXBvcG92ZXInLCBpbnRlcmZhY2VPcHRpb25zLmNzc0NsYXNzXSxcbiAgICAgIGNvbXBvbmVudFByb3BzOiB7XG4gICAgICAgIGhlYWRlcjogaW50ZXJmYWNlT3B0aW9ucy5oZWFkZXIsXG4gICAgICAgIHN1YkhlYWRlcjogaW50ZXJmYWNlT3B0aW9ucy5zdWJIZWFkZXIsXG4gICAgICAgIG1lc3NhZ2U6IGludGVyZmFjZU9wdGlvbnMubWVzc2FnZSxcbiAgICAgICAgbXVsdGlwbGUsXG4gICAgICAgIHZhbHVlLFxuICAgICAgICBvcHRpb25zOiB0aGlzLmNyZWF0ZU92ZXJsYXlTZWxlY3RPcHRpb25zKHRoaXMuY2hpbGRPcHRzLCB2YWx1ZSlcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcG9wb3ZlckNvbnRyb2xsZXIuY3JlYXRlKHBvcG92ZXJPcHRzKTtcbiAgfVxuICBhc3luYyBvcGVuQWN0aW9uU2hlZXQoKSB7XG4gICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgY29uc3QgaW50ZXJmYWNlT3B0aW9ucyA9IHRoaXMuaW50ZXJmYWNlT3B0aW9ucztcbiAgICBjb25zdCBhY3Rpb25TaGVldE9wdHMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe1xuICAgICAgbW9kZVxuICAgIH0sIGludGVyZmFjZU9wdGlvbnMpLCB7XG4gICAgICBidXR0b25zOiB0aGlzLmNyZWF0ZUFjdGlvblNoZWV0QnV0dG9ucyh0aGlzLmNoaWxkT3B0cywgdGhpcy52YWx1ZSksXG4gICAgICBjc3NDbGFzczogWydzZWxlY3QtYWN0aW9uLXNoZWV0JywgaW50ZXJmYWNlT3B0aW9ucy5jc3NDbGFzc11cbiAgICB9KTtcbiAgICByZXR1cm4gYWN0aW9uU2hlZXRDb250cm9sbGVyLmNyZWF0ZShhY3Rpb25TaGVldE9wdHMpO1xuICB9XG4gIGFzeW5jIG9wZW5BbGVydCgpIHtcbiAgICBjb25zdCBpbnRlcmZhY2VPcHRpb25zID0gdGhpcy5pbnRlcmZhY2VPcHRpb25zO1xuICAgIGNvbnN0IGlucHV0VHlwZSA9IHRoaXMubXVsdGlwbGUgPyAnY2hlY2tib3gnIDogJ3JhZGlvJztcbiAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICBjb25zdCBhbGVydE9wdHMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe1xuICAgICAgbW9kZVxuICAgIH0sIGludGVyZmFjZU9wdGlvbnMpLCB7XG4gICAgICBoZWFkZXI6IGludGVyZmFjZU9wdGlvbnMuaGVhZGVyID8gaW50ZXJmYWNlT3B0aW9ucy5oZWFkZXIgOiB0aGlzLmxhYmVsVGV4dCxcbiAgICAgIGlucHV0czogdGhpcy5jcmVhdGVBbGVydElucHV0cyh0aGlzLmNoaWxkT3B0cywgaW5wdXRUeXBlLCB0aGlzLnZhbHVlKSxcbiAgICAgIGJ1dHRvbnM6IFt7XG4gICAgICAgIHRleHQ6IHRoaXMuY2FuY2VsVGV4dCxcbiAgICAgICAgcm9sZTogJ2NhbmNlbCcsXG4gICAgICAgIGhhbmRsZXI6ICgpID0+IHtcbiAgICAgICAgICB0aGlzLmlvbkNhbmNlbC5lbWl0KCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgdGV4dDogdGhpcy5va1RleHQsXG4gICAgICAgIGhhbmRsZXI6IHNlbGVjdGVkVmFsdWVzID0+IHtcbiAgICAgICAgICB0aGlzLnNldFZhbHVlKHNlbGVjdGVkVmFsdWVzKTtcbiAgICAgICAgfVxuICAgICAgfV0sXG4gICAgICBjc3NDbGFzczogWydzZWxlY3QtYWxlcnQnLCBpbnRlcmZhY2VPcHRpb25zLmNzc0NsYXNzLCB0aGlzLm11bHRpcGxlID8gJ211bHRpcGxlLXNlbGVjdC1hbGVydCcgOiAnc2luZ2xlLXNlbGVjdC1hbGVydCddXG4gICAgfSk7XG4gICAgcmV0dXJuIGFsZXJ0Q29udHJvbGxlci5jcmVhdGUoYWxlcnRPcHRzKTtcbiAgfVxuICBvcGVuTW9kYWwoKSB7XG4gICAgY29uc3Qge1xuICAgICAgbXVsdGlwbGUsXG4gICAgICB2YWx1ZSxcbiAgICAgIGludGVyZmFjZU9wdGlvbnNcbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICBjb25zdCBtb2RhbE9wdHMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGludGVyZmFjZU9wdGlvbnMpLCB7XG4gICAgICBtb2RlLFxuICAgICAgY3NzQ2xhc3M6IFsnc2VsZWN0LW1vZGFsJywgaW50ZXJmYWNlT3B0aW9ucy5jc3NDbGFzc10sXG4gICAgICBjb21wb25lbnQ6ICdpb24tc2VsZWN0LW1vZGFsJyxcbiAgICAgIGNvbXBvbmVudFByb3BzOiB7XG4gICAgICAgIGhlYWRlcjogaW50ZXJmYWNlT3B0aW9ucy5oZWFkZXIsXG4gICAgICAgIG11bHRpcGxlLFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgb3B0aW9uczogdGhpcy5jcmVhdGVPdmVybGF5U2VsZWN0T3B0aW9ucyh0aGlzLmNoaWxkT3B0cywgdmFsdWUpXG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG1vZGFsQ29udHJvbGxlci5jcmVhdGUobW9kYWxPcHRzKTtcbiAgfVxuICAvKipcbiAgICogQ2xvc2UgdGhlIHNlbGVjdCBpbnRlcmZhY2UuXG4gICAqL1xuICBjbG9zZSgpIHtcbiAgICBpZiAoIXRoaXMub3ZlcmxheSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm92ZXJsYXkuZGlzbWlzcygpO1xuICB9XG4gIGhhc1ZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmdldFRleHQoKSAhPT0gJyc7XG4gIH1cbiAgZ2V0IGNoaWxkT3B0cygpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lvbi1zZWxlY3Qtb3B0aW9uJykpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGFueSBwbGFpbnRleHQgYXNzb2NpYXRlZCB3aXRoXG4gICAqIHRoZSBsYWJlbCAoZWl0aGVyIHByb3Agb3Igc2xvdCkuXG4gICAqIE5vdGU6IFRoaXMgd2lsbCBub3QgcmV0dXJuIGFueSBjdXN0b21cbiAgICogSFRNTC4gVXNlIHRoZSBgaGFzTGFiZWxgIGdldHRlciBpZiB5b3VcbiAgICogd2FudCB0byBrbm93IGlmIGFueSBzbG90dGVkIGxhYmVsIGNvbnRlbnRcbiAgICogd2FzIHBhc3NlZC5cbiAgICovXG4gIGdldCBsYWJlbFRleHQoKSB7XG4gICAgY29uc3Qge1xuICAgICAgbGFiZWxcbiAgICB9ID0gdGhpcztcbiAgICBpZiAobGFiZWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH1cbiAgICBjb25zdCB7XG4gICAgICBsYWJlbFNsb3RcbiAgICB9ID0gdGhpcztcbiAgICBpZiAobGFiZWxTbG90ICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbGFiZWxTbG90LnRleHRDb250ZW50O1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbiAgZ2V0VGV4dCgpIHtcbiAgICBjb25zdCBzZWxlY3RlZFRleHQgPSB0aGlzLnNlbGVjdGVkVGV4dDtcbiAgICBpZiAoc2VsZWN0ZWRUZXh0ICE9IG51bGwgJiYgc2VsZWN0ZWRUZXh0ICE9PSAnJykge1xuICAgICAgcmV0dXJuIHNlbGVjdGVkVGV4dDtcbiAgICB9XG4gICAgcmV0dXJuIGdlbmVyYXRlVGV4dCh0aGlzLmNoaWxkT3B0cywgdGhpcy52YWx1ZSwgdGhpcy5jb21wYXJlV2l0aCk7XG4gIH1cbiAgc2V0Rm9jdXMoKSB7XG4gICAgaWYgKHRoaXMuZm9jdXNFbCkge1xuICAgICAgdGhpcy5mb2N1c0VsLmZvY3VzKCk7XG4gICAgfVxuICB9XG4gIGVtaXRTdHlsZSgpIHtcbiAgICBjb25zdCB7XG4gICAgICBkaXNhYmxlZFxuICAgIH0gPSB0aGlzO1xuICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgJ2ludGVyYWN0aXZlLWRpc2FibGVkJzogZGlzYWJsZWRcbiAgICB9O1xuICAgIHRoaXMuaW9uU3R5bGUuZW1pdChzdHlsZSk7XG4gIH1cbiAgcmVuZGVyTGFiZWwoKSB7XG4gICAgY29uc3Qge1xuICAgICAgbGFiZWxcbiAgICB9ID0gdGhpcztcbiAgICByZXR1cm4gaChcImRpdlwiLCB7XG4gICAgICBjbGFzczoge1xuICAgICAgICAnbGFiZWwtdGV4dC13cmFwcGVyJzogdHJ1ZSxcbiAgICAgICAgJ2xhYmVsLXRleHQtd3JhcHBlci1oaWRkZW4nOiAhdGhpcy5oYXNMYWJlbFxuICAgICAgfSxcbiAgICAgIHBhcnQ6IFwibGFiZWxcIlxuICAgIH0sIGxhYmVsID09PSB1bmRlZmluZWQgPyBoKFwic2xvdFwiLCB7XG4gICAgICBuYW1lOiBcImxhYmVsXCJcbiAgICB9KSA6IGgoXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IFwibGFiZWwtdGV4dFwiXG4gICAgfSwgbGFiZWwpKTtcbiAgfVxuICBjb21wb25lbnREaWRSZW5kZXIoKSB7XG4gICAgdmFyIF9hO1xuICAgIChfYSA9IHRoaXMubm90Y2hDb250cm9sbGVyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsY3VsYXRlTm90Y2hXaWR0aCgpO1xuICB9XG4gIC8qKlxuICAgKiBHZXRzIGFueSBjb250ZW50IHBhc3NlZCBpbnRvIHRoZSBgbGFiZWxgIHNsb3QsXG4gICAqIG5vdCB0aGUgPHNsb3Q+IGRlZmluaXRpb24uXG4gICAqL1xuICBnZXQgbGFiZWxTbG90KCkge1xuICAgIHJldHVybiB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ1tzbG90PVwibGFiZWxcIl0nKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBgdHJ1ZWAgaWYgbGFiZWwgY29udGVudCBpcyBwcm92aWRlZFxuICAgKiBlaXRoZXIgYnkgYSBwcm9wIG9yIGEgY29udGVudC4gSWYgeW91IHdhbnRcbiAgICogdG8gZ2V0IHRoZSBwbGFpbnRleHQgdmFsdWUgb2YgdGhlIGxhYmVsIHVzZVxuICAgKiB0aGUgYGxhYmVsVGV4dGAgZ2V0dGVyIGluc3RlYWQuXG4gICAqL1xuICBnZXQgaGFzTGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWwgIT09IHVuZGVmaW5lZCB8fCB0aGlzLmxhYmVsU2xvdCAhPT0gbnVsbDtcbiAgfVxuICAvKipcbiAgICogUmVuZGVycyB0aGUgYm9yZGVyIGNvbnRhaW5lclxuICAgKiB3aGVuIGZpbGw9XCJvdXRsaW5lXCIuXG4gICAqL1xuICByZW5kZXJMYWJlbENvbnRhaW5lcigpIHtcbiAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICBjb25zdCBoYXNPdXRsaW5lRmlsbCA9IG1vZGUgPT09ICdtZCcgJiYgdGhpcy5maWxsID09PSAnb3V0bGluZSc7XG4gICAgaWYgKGhhc091dGxpbmVGaWxsKSB7XG4gICAgICAvKipcbiAgICAgICAqIFRoZSBvdXRsaW5lIGZpbGwgaGFzIGEgc3BlY2lhbCBvdXRsaW5lXG4gICAgICAgKiB0aGF0IGFwcGVhcnMgYXJvdW5kIHRoZSBzZWxlY3QgYW5kIHRoZSBsYWJlbC5cbiAgICAgICAqIENlcnRhaW4gc3RhY2tlZCBhbmQgZmxvYXRpbmcgbGFiZWwgcGxhY2VtZW50cyBjYXVzZSB0aGVcbiAgICAgICAqIGxhYmVsIHRvIHRyYW5zbGF0ZSB1cCBhbmQgY3JlYXRlIGEgXCJjdXQgb3V0XCJcbiAgICAgICAqIGluc2lkZSBvZiB0aGF0IGJvcmRlciBieSB1c2luZyB0aGUgbm90Y2gtc3BhY2VyIGVsZW1lbnQuXG4gICAgICAgKi9cbiAgICAgIHJldHVybiBbaChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzOiBcInNlbGVjdC1vdXRsaW5lLWNvbnRhaW5lclwiXG4gICAgICB9LCBoKFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3M6IFwic2VsZWN0LW91dGxpbmUtc3RhcnRcIlxuICAgICAgfSksIGgoXCJkaXZcIiwge1xuICAgICAgICBjbGFzczoge1xuICAgICAgICAgICdzZWxlY3Qtb3V0bGluZS1ub3RjaCc6IHRydWUsXG4gICAgICAgICAgJ3NlbGVjdC1vdXRsaW5lLW5vdGNoLWhpZGRlbic6ICF0aGlzLmhhc0xhYmVsXG4gICAgICAgIH1cbiAgICAgIH0sIGgoXCJkaXZcIiwge1xuICAgICAgICBjbGFzczogXCJub3RjaC1zcGFjZXJcIixcbiAgICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIixcbiAgICAgICAgcmVmOiBlbCA9PiB0aGlzLm5vdGNoU3BhY2VyRWwgPSBlbFxuICAgICAgfSwgdGhpcy5sYWJlbCkpLCBoKFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3M6IFwic2VsZWN0LW91dGxpbmUtZW5kXCJcbiAgICAgIH0pKSwgdGhpcy5yZW5kZXJMYWJlbCgpXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSWYgbm90IHVzaW5nIHRoZSBvdXRsaW5lIHN0eWxlLFxuICAgICAqIHdlIGNhbiByZW5kZXIganVzdCB0aGUgbGFiZWwuXG4gICAgICovXG4gICAgcmV0dXJuIHRoaXMucmVuZGVyTGFiZWwoKTtcbiAgfVxuICAvKipcbiAgICogUmVuZGVycyBlaXRoZXIgdGhlIHBsYWNlaG9sZGVyXG4gICAqIG9yIHRoZSBzZWxlY3RlZCB2YWx1ZXMgYmFzZWQgb25cbiAgICogdGhlIHN0YXRlIG9mIHRoZSBzZWxlY3QuXG4gICAqL1xuICByZW5kZXJTZWxlY3RUZXh0KCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHBsYWNlaG9sZGVyXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgZGlzcGxheVZhbHVlID0gdGhpcy5nZXRUZXh0KCk7XG4gICAgbGV0IGFkZFBsYWNlaG9sZGVyQ2xhc3MgPSBmYWxzZTtcbiAgICBsZXQgc2VsZWN0VGV4dCA9IGRpc3BsYXlWYWx1ZTtcbiAgICBpZiAoc2VsZWN0VGV4dCA9PT0gJycgJiYgcGxhY2Vob2xkZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc2VsZWN0VGV4dCA9IHBsYWNlaG9sZGVyO1xuICAgICAgYWRkUGxhY2Vob2xkZXJDbGFzcyA9IHRydWU7XG4gICAgfVxuICAgIGNvbnN0IHNlbGVjdFRleHRDbGFzc2VzID0ge1xuICAgICAgJ3NlbGVjdC10ZXh0JzogdHJ1ZSxcbiAgICAgICdzZWxlY3QtcGxhY2Vob2xkZXInOiBhZGRQbGFjZWhvbGRlckNsYXNzXG4gICAgfTtcbiAgICBjb25zdCB0ZXh0UGFydCA9IGFkZFBsYWNlaG9sZGVyQ2xhc3MgPyAncGxhY2Vob2xkZXInIDogJ3RleHQnO1xuICAgIHJldHVybiBoKFwiZGl2XCIsIHtcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsXG4gICAgICBjbGFzczogc2VsZWN0VGV4dENsYXNzZXMsXG4gICAgICBwYXJ0OiB0ZXh0UGFydFxuICAgIH0sIHNlbGVjdFRleHQpO1xuICB9XG4gIC8qKlxuICAgKiBSZW5kZXJzIHRoZSBjaGV2cm9uIGljb25cbiAgICogbmV4dCB0byB0aGUgc2VsZWN0IHRleHQuXG4gICAqL1xuICByZW5kZXJTZWxlY3RJY29uKCkge1xuICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgIGNvbnN0IHtcbiAgICAgIGlzRXhwYW5kZWQsXG4gICAgICB0b2dnbGVJY29uLFxuICAgICAgZXhwYW5kZWRJY29uXG4gICAgfSA9IHRoaXM7XG4gICAgbGV0IGljb247XG4gICAgaWYgKGlzRXhwYW5kZWQgJiYgZXhwYW5kZWRJY29uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGljb24gPSBleHBhbmRlZEljb247XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRJY29uID0gbW9kZSA9PT0gJ2lvcycgPyBjaGV2cm9uRXhwYW5kIDogY2FyZXREb3duU2hhcnA7XG4gICAgICBpY29uID0gdG9nZ2xlSWNvbiAhPT0gbnVsbCAmJiB0b2dnbGVJY29uICE9PSB2b2lkIDAgPyB0b2dnbGVJY29uIDogZGVmYXVsdEljb247XG4gICAgfVxuICAgIHJldHVybiBoKFwiaW9uLWljb25cIiwge1xuICAgICAgY2xhc3M6IFwic2VsZWN0LWljb25cIixcbiAgICAgIHBhcnQ6IFwiaWNvblwiLFxuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIixcbiAgICAgIGljb246IGljb25cbiAgICB9KTtcbiAgfVxuICBnZXQgYXJpYUxhYmVsKCkge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCB7XG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIGluaGVyaXRlZEF0dHJpYnV0ZXNcbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCBkaXNwbGF5VmFsdWUgPSB0aGlzLmdldFRleHQoKTtcbiAgICAvLyBUaGUgYXJpYSBsYWJlbCBzaG91bGQgYmUgcHJlZmVycmVkIG92ZXIgdmlzaWJsZSB0ZXh0IGlmIGJvdGggYXJlIHNwZWNpZmllZFxuICAgIGNvbnN0IGRlZmluZWRMYWJlbCA9IChfYSA9IGluaGVyaXRlZEF0dHJpYnV0ZXNbJ2FyaWEtbGFiZWwnXSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogdGhpcy5sYWJlbFRleHQ7XG4gICAgLyoqXG4gICAgICogSWYgZGV2ZWxvcGVyIGhhcyBzcGVjaWZpZWQgYSBwbGFjZWhvbGRlclxuICAgICAqIGFuZCB0aGVyZSBpcyBub3RoaW5nIHNlbGVjdGVkLCB0aGUgc2VsZWN0VGV4dFxuICAgICAqIHNob3VsZCBoYXZlIHRoZSBwbGFjZWhvbGRlciB2YWx1ZS5cbiAgICAgKi9cbiAgICBsZXQgcmVuZGVyZWRMYWJlbCA9IGRpc3BsYXlWYWx1ZTtcbiAgICBpZiAocmVuZGVyZWRMYWJlbCA9PT0gJycgJiYgcGxhY2Vob2xkZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVuZGVyZWRMYWJlbCA9IHBsYWNlaG9sZGVyO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJZiB0aGVyZSBpcyBhIGRldmVsb3Blci1kZWZpbmVkIGxhYmVsLFxuICAgICAqIHRoZW4gd2UgbmVlZCB0byBjb25jYXRlbmF0ZSB0aGUgZGV2ZWxvcGVyIGxhYmVsXG4gICAgICogc3RyaW5nIHdpdGggdGhlIGN1cnJlbnQgY3VycmVudCB2YWx1ZS5cbiAgICAgKiBUaGUgbGFiZWwgZm9yIHRoZSBjb250cm9sIHNob3VsZCBiZSByZWFkXG4gICAgICogYmVmb3JlIHRoZSB2YWx1ZXMgb2YgdGhlIGNvbnRyb2wuXG4gICAgICovXG4gICAgaWYgKGRlZmluZWRMYWJlbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZW5kZXJlZExhYmVsID0gcmVuZGVyZWRMYWJlbCA9PT0gJycgPyBkZWZpbmVkTGFiZWwgOiBgJHtkZWZpbmVkTGFiZWx9LCAke3JlbmRlcmVkTGFiZWx9YDtcbiAgICB9XG4gICAgcmV0dXJuIHJlbmRlcmVkTGFiZWw7XG4gIH1cbiAgcmVuZGVyTGlzdGJveCgpIHtcbiAgICBjb25zdCB7XG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGlucHV0SWQsXG4gICAgICBpc0V4cGFuZGVkLFxuICAgICAgcmVxdWlyZWRcbiAgICB9ID0gdGhpcztcbiAgICByZXR1cm4gaChcImJ1dHRvblwiLCB7XG4gICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICBpZDogaW5wdXRJZCxcbiAgICAgIFwiYXJpYS1sYWJlbFwiOiB0aGlzLmFyaWFMYWJlbCxcbiAgICAgIFwiYXJpYS1oYXNwb3B1cFwiOiBcImRpYWxvZ1wiLFxuICAgICAgXCJhcmlhLWV4cGFuZGVkXCI6IGAke2lzRXhwYW5kZWR9YCxcbiAgICAgIFwiYXJpYS1kZXNjcmliZWRieVwiOiB0aGlzLmdldEhpbnRUZXh0SUQoKSxcbiAgICAgIFwiYXJpYS1pbnZhbGlkXCI6IHRoaXMuZ2V0SGludFRleHRJRCgpID09PSB0aGlzLmVycm9yVGV4dElkLFxuICAgICAgXCJhcmlhLXJlcXVpcmVkXCI6IGAke3JlcXVpcmVkfWAsXG4gICAgICBvbkZvY3VzOiB0aGlzLm9uRm9jdXMsXG4gICAgICBvbkJsdXI6IHRoaXMub25CbHVyLFxuICAgICAgcmVmOiBmb2N1c0VsID0+IHRoaXMuZm9jdXNFbCA9IGZvY3VzRWxcbiAgICB9KTtcbiAgfVxuICBnZXRIaW50VGV4dElEKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGVsLFxuICAgICAgaGVscGVyVGV4dCxcbiAgICAgIGVycm9yVGV4dCxcbiAgICAgIGhlbHBlclRleHRJZCxcbiAgICAgIGVycm9yVGV4dElkXG4gICAgfSA9IHRoaXM7XG4gICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnaW9uLXRvdWNoZWQnKSAmJiBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2lvbi1pbnZhbGlkJykgJiYgZXJyb3JUZXh0KSB7XG4gICAgICByZXR1cm4gZXJyb3JUZXh0SWQ7XG4gICAgfVxuICAgIGlmIChoZWxwZXJUZXh0KSB7XG4gICAgICByZXR1cm4gaGVscGVyVGV4dElkO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIC8qKlxuICAgKiBSZW5kZXJzIHRoZSBoZWxwZXIgdGV4dCBvciBlcnJvciB0ZXh0IHZhbHVlc1xuICAgKi9cbiAgcmVuZGVySGludFRleHQoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaGVscGVyVGV4dCxcbiAgICAgIGVycm9yVGV4dCxcbiAgICAgIGhlbHBlclRleHRJZCxcbiAgICAgIGVycm9yVGV4dElkXG4gICAgfSA9IHRoaXM7XG4gICAgcmV0dXJuIFtoKFwiZGl2XCIsIHtcbiAgICAgIGlkOiBoZWxwZXJUZXh0SWQsXG4gICAgICBjbGFzczogXCJoZWxwZXItdGV4dFwiLFxuICAgICAgcGFydDogXCJzdXBwb3J0aW5nLXRleHQgaGVscGVyLXRleHRcIlxuICAgIH0sIGhlbHBlclRleHQpLCBoKFwiZGl2XCIsIHtcbiAgICAgIGlkOiBlcnJvclRleHRJZCxcbiAgICAgIGNsYXNzOiBcImVycm9yLXRleHRcIixcbiAgICAgIHBhcnQ6IFwic3VwcG9ydGluZy10ZXh0IGVycm9yLXRleHRcIlxuICAgIH0sIGVycm9yVGV4dCldO1xuICB9XG4gIC8qKlxuICAgKiBSZXNwb25zaWJsZSBmb3IgcmVuZGVyaW5nIGhlbHBlciB0ZXh0LCBhbmQgZXJyb3IgdGV4dC4gVGhpcyBlbGVtZW50XG4gICAqIHNob3VsZCBvbmx5IGJlIHJlbmRlcmVkIGlmIGhpbnQgdGV4dCBpcyBzZXQuXG4gICAqL1xuICByZW5kZXJCb3R0b21Db250ZW50KCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGhlbHBlclRleHQsXG4gICAgICBlcnJvclRleHRcbiAgICB9ID0gdGhpcztcbiAgICAvKipcbiAgICAgKiB1bmRlZmluZWQgYW5kIGVtcHR5IHN0cmluZyB2YWx1ZXMgc2hvdWxkXG4gICAgICogYmUgdHJlYXRlZCBhcyBub3QgaGF2aW5nIGhlbHBlci9lcnJvciB0ZXh0LlxuICAgICAqL1xuICAgIGNvbnN0IGhhc0hpbnRUZXh0ID0gISFoZWxwZXJUZXh0IHx8ICEhZXJyb3JUZXh0O1xuICAgIGlmICghaGFzSGludFRleHQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIGgoXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IFwic2VsZWN0LWJvdHRvbVwiXG4gICAgfSwgdGhpcy5yZW5kZXJIaW50VGV4dCgpKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZGlzYWJsZWQsXG4gICAgICBlbCxcbiAgICAgIGlzRXhwYW5kZWQsXG4gICAgICBleHBhbmRlZEljb24sXG4gICAgICBsYWJlbFBsYWNlbWVudCxcbiAgICAgIGp1c3RpZnksXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIGZpbGwsXG4gICAgICBzaGFwZSxcbiAgICAgIG5hbWUsXG4gICAgICB2YWx1ZSxcbiAgICAgIGhhc0ZvY3VzXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgY29uc3QgaGFzRmxvYXRpbmdPclN0YWNrZWRMYWJlbCA9IGxhYmVsUGxhY2VtZW50ID09PSAnZmxvYXRpbmcnIHx8IGxhYmVsUGxhY2VtZW50ID09PSAnc3RhY2tlZCc7XG4gICAgY29uc3QganVzdGlmeUVuYWJsZWQgPSAhaGFzRmxvYXRpbmdPclN0YWNrZWRMYWJlbCAmJiBqdXN0aWZ5ICE9PSB1bmRlZmluZWQ7XG4gICAgY29uc3QgcnRsID0gaXNSVEwoZWwpID8gJ3J0bCcgOiAnbHRyJztcbiAgICBjb25zdCBpbkl0ZW0gPSBob3N0Q29udGV4dCgnaW9uLWl0ZW0nLCB0aGlzLmVsKTtcbiAgICBjb25zdCBzaG91bGRSZW5kZXJIaWdobGlnaHQgPSBtb2RlID09PSAnbWQnICYmIGZpbGwgIT09ICdvdXRsaW5lJyAmJiAhaW5JdGVtO1xuICAgIGNvbnN0IGhhc1ZhbHVlID0gdGhpcy5oYXNWYWx1ZSgpO1xuICAgIGNvbnN0IGhhc1N0YXJ0RW5kU2xvdHMgPSBlbC5xdWVyeVNlbGVjdG9yKCdbc2xvdD1cInN0YXJ0XCJdLCBbc2xvdD1cImVuZFwiXScpICE9PSBudWxsO1xuICAgIHJlbmRlckhpZGRlbklucHV0KHRydWUsIGVsLCBuYW1lLCBwYXJzZVZhbHVlKHZhbHVlKSwgZGlzYWJsZWQpO1xuICAgIC8qKlxuICAgICAqIElmIHRoZSBsYWJlbCBpcyBzdGFja2VkLCBpdCBzaG91bGQgYWx3YXlzIHNpdCBhYm92ZSB0aGUgc2VsZWN0LlxuICAgICAqIEZvciBmbG9hdGluZyBsYWJlbHMsIHRoZSBsYWJlbCBzaG91bGQgbW92ZSBhYm92ZSB0aGUgc2VsZWN0IGlmXG4gICAgICogdGhlIHNlbGVjdCBoYXMgYSB2YWx1ZSwgaXMgb3Blbiwgb3IgaGFzIGFueXRoaW5nIGluIGVpdGhlclxuICAgICAqIHRoZSBzdGFydCBvciBlbmQgc2xvdC5cbiAgICAgKlxuICAgICAqIElmIHRoZXJlIGlzIGNvbnRlbnQgaW4gdGhlIHN0YXJ0IHNsb3QsIHRoZSBsYWJlbCB3b3VsZCBvdmVybGFwXG4gICAgICogaXQgaWYgbm90IGZvcmNlZCB0byBmbG9hdC4gVGhpcyBpcyBhbHNvIGFwcGxpZWQgdG8gdGhlIGVuZCBzbG90XG4gICAgICogYmVjYXVzZSB3aXRoIHRoZSBkZWZhdWx0IG9yIHNvbGlkIGZpbGxzLCB0aGUgc2VsZWN0IGlzIG5vdFxuICAgICAqIHZlcnRpY2FsbHkgY2VudGVyZWQgaW4gdGhlIGNvbnRhaW5lciwgYnV0IHRoZSBsYWJlbCBpcy4gVGhpc1xuICAgICAqIGNhdXNlcyB0aGUgc2xvdHMgYW5kIGxhYmVsIHRvIGFwcGVhciB2ZXJ0aWNhbGx5IG9mZnNldCBmcm9tIGVhY2hcbiAgICAgKiBvdGhlciB3aGVuIHRoZSBsYWJlbCBpc24ndCBmbG9hdGluZyBhYm92ZSB0aGUgaW5wdXQuIFRoaXMgZG9lc24ndFxuICAgICAqIGFwcGx5IHRvIHRoZSBvdXRsaW5lIGZpbGwsIGJ1dCB0aGlzIHdhcyBub3QgYWNjb3VudGVkIGZvciB0byBrZWVwXG4gICAgICogdGhpbmdzIGNvbnNpc3RlbnQuXG4gICAgICpcbiAgICAgKiBUT0RPKEZXLTU1OTIpOiBSZW1vdmUgaGFzU3RhcnRFbmRTbG90cyBjb25kaXRpb25cbiAgICAgKi9cbiAgICBjb25zdCBsYWJlbFNob3VsZEZsb2F0ID0gbGFiZWxQbGFjZW1lbnQgPT09ICdzdGFja2VkJyB8fCBsYWJlbFBsYWNlbWVudCA9PT0gJ2Zsb2F0aW5nJyAmJiAoaGFzVmFsdWUgfHwgaXNFeHBhbmRlZCB8fCBoYXNTdGFydEVuZFNsb3RzKTtcbiAgICByZXR1cm4gaChIb3N0LCB7XG4gICAgICBrZXk6ICdjMDNmYjY1ZThmYzlmOWFhYjI5NWUwN2IyODIzNzdkNTdkOTEwNTE5JyxcbiAgICAgIG9uQ2xpY2s6IHRoaXMub25DbGljayxcbiAgICAgIGNsYXNzOiBjcmVhdGVDb2xvckNsYXNzZXModGhpcy5jb2xvciwge1xuICAgICAgICBbbW9kZV06IHRydWUsXG4gICAgICAgICdpbi1pdGVtJzogaW5JdGVtLFxuICAgICAgICAnaW4taXRlbS1jb2xvcic6IGhvc3RDb250ZXh0KCdpb24taXRlbS5pb24tY29sb3InLCBlbCksXG4gICAgICAgICdzZWxlY3QtZGlzYWJsZWQnOiBkaXNhYmxlZCxcbiAgICAgICAgJ3NlbGVjdC1leHBhbmRlZCc6IGlzRXhwYW5kZWQsXG4gICAgICAgICdoYXMtZXhwYW5kZWQtaWNvbic6IGV4cGFuZGVkSWNvbiAhPT0gdW5kZWZpbmVkLFxuICAgICAgICAnaGFzLXZhbHVlJzogaGFzVmFsdWUsXG4gICAgICAgICdsYWJlbC1mbG9hdGluZyc6IGxhYmVsU2hvdWxkRmxvYXQsXG4gICAgICAgICdoYXMtcGxhY2Vob2xkZXInOiBwbGFjZWhvbGRlciAhPT0gdW5kZWZpbmVkLFxuICAgICAgICAnaGFzLWZvY3VzJzogaGFzRm9jdXMsXG4gICAgICAgIC8vIFRPRE8oRlctNjQ1MSk6IFJlbW92ZSBgaW9uLWZvY3VzYWJsZWAgY2xhc3MgaW4gZmF2b3Igb2YgYGhhcy1mb2N1c2AuXG4gICAgICAgICdpb24tZm9jdXNhYmxlJzogdHJ1ZSxcbiAgICAgICAgW2BzZWxlY3QtJHtydGx9YF06IHRydWUsXG4gICAgICAgIFtgc2VsZWN0LWZpbGwtJHtmaWxsfWBdOiBmaWxsICE9PSB1bmRlZmluZWQsXG4gICAgICAgIFtgc2VsZWN0LWp1c3RpZnktJHtqdXN0aWZ5fWBdOiBqdXN0aWZ5RW5hYmxlZCxcbiAgICAgICAgW2BzZWxlY3Qtc2hhcGUtJHtzaGFwZX1gXTogc2hhcGUgIT09IHVuZGVmaW5lZCxcbiAgICAgICAgW2BzZWxlY3QtbGFiZWwtcGxhY2VtZW50LSR7bGFiZWxQbGFjZW1lbnR9YF06IHRydWVcbiAgICAgIH0pXG4gICAgfSwgaChcImxhYmVsXCIsIHtcbiAgICAgIGtleTogJzBkMGM4ZWM1NTI2OWFkY2FjNjI1ZjI4OTlhNTQ3ZjRlN2YzZTM3NDEnLFxuICAgICAgY2xhc3M6IFwic2VsZWN0LXdyYXBwZXJcIixcbiAgICAgIGlkOiBcInNlbGVjdC1sYWJlbFwiLFxuICAgICAgb25DbGljazogdGhpcy5vbkxhYmVsQ2xpY2tcbiAgICB9LCB0aGlzLnJlbmRlckxhYmVsQ29udGFpbmVyKCksIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnZjZkZmM5M2MwZTIzY2JlNzVhMjk0N2FiZGU2N2Q4NDJkYjJkYWQ3OCcsXG4gICAgICBjbGFzczogXCJzZWxlY3Qtd3JhcHBlci1pbm5lclwiXG4gICAgfSwgaChcInNsb3RcIiwge1xuICAgICAga2V5OiAnOTU3YmZhZGY5ZjEwMWY1MTkwOTE0MTlhMzYyZDNhYmRjMmJlNjZmNicsXG4gICAgICBuYW1lOiBcInN0YXJ0XCJcbiAgICB9KSwgaChcImRpdlwiLCB7XG4gICAgICBrZXk6ICdjYTM0OTIwMmE0ODRlN2YyZTg4NDUzM2ZkMzMwZjBiMTM2NzU0ZjdkJyxcbiAgICAgIGNsYXNzOiBcIm5hdGl2ZS13cmFwcGVyXCIsXG4gICAgICByZWY6IGVsID0+IHRoaXMubmF0aXZlV3JhcHBlckVsID0gZWwsXG4gICAgICBwYXJ0OiBcImNvbnRhaW5lclwiXG4gICAgfSwgdGhpcy5yZW5kZXJTZWxlY3RUZXh0KCksIHRoaXMucmVuZGVyTGlzdGJveCgpKSwgaChcInNsb3RcIiwge1xuICAgICAga2V5OiAnZjBlNjJhNjUzM2ZmMWM4ZjYyYmQyZDI3ZjYwYjIzMzg1YzRmYTllZCcsXG4gICAgICBuYW1lOiBcImVuZFwiXG4gICAgfSksICFoYXNGbG9hdGluZ09yU3RhY2tlZExhYmVsICYmIHRoaXMucmVuZGVyU2VsZWN0SWNvbigpKSwgaGFzRmxvYXRpbmdPclN0YWNrZWRMYWJlbCAmJiB0aGlzLnJlbmRlclNlbGVjdEljb24oKSwgc2hvdWxkUmVuZGVySGlnaGxpZ2h0ICYmIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnZmI4NDBkNDZiYWZhZmIwOTg5OGViZWViYmU4YzE4MTkwNmEzZDhhMicsXG4gICAgICBjbGFzczogXCJzZWxlY3QtaGlnaGxpZ2h0XCJcbiAgICB9KSksIHRoaXMucmVuZGVyQm90dG9tQ29udGVudCgpKTtcbiAgfVxuICBnZXQgZWwoKSB7XG4gICAgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7XG4gIH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkaXNhYmxlZFwiOiBbXCJzdHlsZUNoYW5nZWRcIl0sXG4gICAgICBcImlzRXhwYW5kZWRcIjogW1wic3R5bGVDaGFuZ2VkXCJdLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBbXCJzdHlsZUNoYW5nZWRcIl0sXG4gICAgICBcInZhbHVlXCI6IFtcInN0eWxlQ2hhbmdlZFwiXVxuICAgIH07XG4gIH1cbn07XG5jb25zdCBnZXRPcHRpb25WYWx1ZSA9IGVsID0+IHtcbiAgY29uc3QgdmFsdWUgPSBlbC52YWx1ZTtcbiAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyBlbC50ZXh0Q29udGVudCB8fCAnJyA6IHZhbHVlO1xufTtcbmNvbnN0IHBhcnNlVmFsdWUgPSB2YWx1ZSA9PiB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWUuam9pbignLCcpO1xuICB9XG4gIHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xufTtcbmNvbnN0IGdlbmVyYXRlVGV4dCA9IChvcHRzLCB2YWx1ZSwgY29tcGFyZVdpdGgpID0+IHtcbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlLm1hcCh2ID0+IHRleHRGb3JWYWx1ZShvcHRzLCB2LCBjb21wYXJlV2l0aCkpLmZpbHRlcihvcHQgPT4gb3B0ICE9PSBudWxsKS5qb2luKCcsICcpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0ZXh0Rm9yVmFsdWUob3B0cywgdmFsdWUsIGNvbXBhcmVXaXRoKSB8fCAnJztcbiAgfVxufTtcbmNvbnN0IHRleHRGb3JWYWx1ZSA9IChvcHRzLCB2YWx1ZSwgY29tcGFyZVdpdGgpID0+IHtcbiAgY29uc3Qgc2VsZWN0T3B0ID0gb3B0cy5maW5kKG9wdCA9PiB7XG4gICAgcmV0dXJuIGNvbXBhcmVPcHRpb25zKHZhbHVlLCBnZXRPcHRpb25WYWx1ZShvcHQpLCBjb21wYXJlV2l0aCk7XG4gIH0pO1xuICByZXR1cm4gc2VsZWN0T3B0ID8gc2VsZWN0T3B0LnRleHRDb250ZW50IDogbnVsbDtcbn07XG5sZXQgc2VsZWN0SWRzID0gMDtcbmNvbnN0IE9QVElPTl9DTEFTUyA9ICdzZWxlY3QtaW50ZXJmYWNlLW9wdGlvbic7XG5TZWxlY3Quc3R5bGUgPSB7XG4gIGlvczogc2VsZWN0SW9zQ3NzLFxuICBtZDogc2VsZWN0TWRDc3Ncbn07XG5jb25zdCBzZWxlY3RPcHRpb25Dc3MgPSBcIjpob3N0e2Rpc3BsYXk6bm9uZX1cIjtcbmNvbnN0IFNlbGVjdE9wdGlvbiA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5pbnB1dElkID0gYGlvbi1zZWxvcHQtJHtzZWxlY3RPcHRpb25JZHMrK31gO1xuICAgIC8qKlxuICAgICAqIElmIGB0cnVlYCwgdGhlIHVzZXIgY2Fubm90IGludGVyYWN0IHdpdGggdGhlIHNlbGVjdCBvcHRpb24uIFRoaXMgcHJvcGVydHkgZG9lcyBub3QgYXBwbHkgd2hlbiBgaW50ZXJmYWNlPVwiYWN0aW9uLXNoZWV0XCJgIGFzIGBpb24tYWN0aW9uLXNoZWV0YCBkb2VzIG5vdCBhbGxvdyBmb3IgZGlzYWJsZWQgYnV0dG9ucy5cbiAgICAgKi9cbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBoKEhvc3QsIHtcbiAgICAgIGtleTogJzNhNzBlZWE5ZmEwM2E5YWNiYTU4MjE4MDc2MWQxODM0N2M3MmFjZWUnLFxuICAgICAgcm9sZTogXCJvcHRpb25cIixcbiAgICAgIGlkOiB0aGlzLmlucHV0SWQsXG4gICAgICBjbGFzczogZ2V0SW9uTW9kZSh0aGlzKVxuICAgIH0pO1xuICB9XG4gIGdldCBlbCgpIHtcbiAgICByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTtcbiAgfVxufTtcbmxldCBzZWxlY3RPcHRpb25JZHMgPSAwO1xuU2VsZWN0T3B0aW9uLnN0eWxlID0gc2VsZWN0T3B0aW9uQ3NzO1xuY29uc3Qgc2VsZWN0UG9wb3Zlcklvc0NzcyA9IFwiLnNjLWlvbi1zZWxlY3QtcG9wb3Zlci1pb3MtaCBpb24tbGlzdC5zYy1pb24tc2VsZWN0LXBvcG92ZXItaW9ze21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MH1pb24tbGlzdC1oZWFkZXIuc2MtaW9uLXNlbGVjdC1wb3BvdmVyLWlvcyxpb24tbGFiZWwuc2MtaW9uLXNlbGVjdC1wb3BvdmVyLWlvc3ttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjB9LnNjLWlvbi1zZWxlY3QtcG9wb3Zlci1pb3MtaHtvdmVyZmxvdy15OmF1dG99XCI7XG5jb25zdCBzZWxlY3RQb3BvdmVyTWRDc3MgPSBcIi5zYy1pb24tc2VsZWN0LXBvcG92ZXItbWQtaCBpb24tbGlzdC5zYy1pb24tc2VsZWN0LXBvcG92ZXItbWR7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfWlvbi1saXN0LWhlYWRlci5zYy1pb24tc2VsZWN0LXBvcG92ZXItbWQsaW9uLWxhYmVsLnNjLWlvbi1zZWxlY3QtcG9wb3Zlci1tZHttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjB9LnNjLWlvbi1zZWxlY3QtcG9wb3Zlci1tZC1oe292ZXJmbG93LXk6YXV0b31pb24tbGlzdC5zYy1pb24tc2VsZWN0LXBvcG92ZXItbWQgaW9uLXJhZGlvLnNjLWlvbi1zZWxlY3QtcG9wb3Zlci1tZDo6cGFydChjb250YWluZXIpLGlvbi1saXN0LnNjLWlvbi1zZWxlY3QtcG9wb3Zlci1tZCBpb24tcmFkaW8uc2MtaW9uLXNlbGVjdC1wb3BvdmVyLW1kIFtwYXJ0fj1cXFwiY29udGFpbmVyXFxcIl17ZGlzcGxheTpub25lfWlvbi1saXN0LnNjLWlvbi1zZWxlY3QtcG9wb3Zlci1tZCBpb24tcmFkaW8uc2MtaW9uLXNlbGVjdC1wb3BvdmVyLW1kOjpwYXJ0KGxhYmVsKSxpb24tbGlzdC5zYy1pb24tc2VsZWN0LXBvcG92ZXItbWQgaW9uLXJhZGlvLnNjLWlvbi1zZWxlY3QtcG9wb3Zlci1tZCBbcGFydH49XFxcImxhYmVsXFxcIl17bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfWlvbi1pdGVtLnNjLWlvbi1zZWxlY3QtcG9wb3Zlci1tZHstLWlubmVyLWJvcmRlci13aWR0aDowfS5pdGVtLXJhZGlvLWNoZWNrZWQuc2MtaW9uLXNlbGVjdC1wb3BvdmVyLW1key0tYmFja2dyb3VuZDpyZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiwgMCwgODQsIDIzMyksIDAuMDgpOy0tYmFja2dyb3VuZC1mb2N1c2VkOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMDA1NGU5KTstLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OjAuMjstLWJhY2tncm91bmQtaG92ZXI6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMwMDU0ZTkpOy0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OjAuMTJ9Lml0ZW0tY2hlY2tib3gtY2hlY2tlZC5zYy1pb24tc2VsZWN0LXBvcG92ZXItbWR7LS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDp2YXIoLS1pb24taXRlbS1jb2xvciwgdmFyKC0taW9uLXRleHQtY29sb3IsICMwMDApKTstLWJhY2tncm91bmQtZm9jdXNlZDp2YXIoLS1pb24taXRlbS1jb2xvciwgdmFyKC0taW9uLXRleHQtY29sb3IsICMwMDApKTstLWJhY2tncm91bmQtaG92ZXI6dmFyKC0taW9uLWl0ZW0tY29sb3IsIHZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwKSk7LS1jb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzAwNTRlOSl9XCI7XG5jb25zdCBTZWxlY3RQb3BvdmVyID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBvcHRpb25zIGZvciB0aGUgcG9wb3ZlclxuICAgICAqL1xuICAgIHRoaXMub3B0aW9ucyA9IFtdO1xuICB9XG4gIGZpbmRPcHRpb25Gcm9tRXZlbnQoZXYpIHtcbiAgICBjb25zdCB7XG4gICAgICBvcHRpb25zXG4gICAgfSA9IHRoaXM7XG4gICAgcmV0dXJuIG9wdGlvbnMuZmluZChvID0+IG8udmFsdWUgPT09IGV2LnRhcmdldC52YWx1ZSk7XG4gIH1cbiAgLyoqXG4gICAqIFdoZW4gYW4gb3B0aW9uIGlzIHNlbGVjdGVkIHdlIG5lZWQgdG8gZ2V0IHRoZSB2YWx1ZShzKVxuICAgKiBvZiB0aGUgc2VsZWN0ZWQgb3B0aW9uKHMpIGFuZCByZXR1cm4gaXQgaW4gdGhlIG9wdGlvblxuICAgKiBoYW5kbGVyXG4gICAqL1xuICBjYWxsT3B0aW9uSGFuZGxlcihldikge1xuICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMuZmluZE9wdGlvbkZyb21FdmVudChldik7XG4gICAgY29uc3QgdmFsdWVzID0gdGhpcy5nZXRWYWx1ZXMoZXYpO1xuICAgIGlmIChvcHRpb24gPT09IG51bGwgfHwgb3B0aW9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb24uaGFuZGxlcikge1xuICAgICAgc2FmZUNhbGwob3B0aW9uLmhhbmRsZXIsIHZhbHVlcyk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBEaXNtaXNzZXMgdGhlIGhvc3QgcG9wb3ZlciB0aGF0IHRoZSBgaW9uLXNlbGVjdC1wb3BvdmVyYFxuICAgKiBpcyByZW5kZXJlZCB3aXRoaW4uXG4gICAqL1xuICBkaXNtaXNzUGFyZW50UG9wb3ZlcigpIHtcbiAgICBjb25zdCBwb3BvdmVyID0gdGhpcy5lbC5jbG9zZXN0KCdpb24tcG9wb3ZlcicpO1xuICAgIGlmIChwb3BvdmVyKSB7XG4gICAgICBwb3BvdmVyLmRpc21pc3MoKTtcbiAgICB9XG4gIH1cbiAgc2V0Q2hlY2tlZChldikge1xuICAgIGNvbnN0IHtcbiAgICAgIG11bHRpcGxlXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3Qgb3B0aW9uID0gdGhpcy5maW5kT3B0aW9uRnJvbUV2ZW50KGV2KTtcbiAgICAvLyB0aGlzIGlzIGEgcG9wb3ZlciB3aXRoIGNoZWNrYm94ZXMgKG11bHRpcGxlIHZhbHVlIHNlbGVjdClcbiAgICAvLyB3ZSBuZWVkIHRvIHNldCB0aGUgY2hlY2tlZCB2YWx1ZSBmb3IgdGhpcyBvcHRpb25cbiAgICBpZiAobXVsdGlwbGUgJiYgb3B0aW9uKSB7XG4gICAgICBvcHRpb24uY2hlY2tlZCA9IGV2LmRldGFpbC5jaGVja2VkO1xuICAgIH1cbiAgfVxuICBnZXRWYWx1ZXMoZXYpIHtcbiAgICBjb25zdCB7XG4gICAgICBtdWx0aXBsZSxcbiAgICAgIG9wdGlvbnNcbiAgICB9ID0gdGhpcztcbiAgICBpZiAobXVsdGlwbGUpIHtcbiAgICAgIC8vIHRoaXMgaXMgYSBwb3BvdmVyIHdpdGggY2hlY2tib3hlcyAobXVsdGlwbGUgdmFsdWUgc2VsZWN0KVxuICAgICAgLy8gcmV0dXJuIGFuIGFycmF5IG9mIGFsbCB0aGUgY2hlY2tlZCB2YWx1ZXNcbiAgICAgIHJldHVybiBvcHRpb25zLmZpbHRlcihvID0+IG8uY2hlY2tlZCkubWFwKG8gPT4gby52YWx1ZSk7XG4gICAgfVxuICAgIC8vIHRoaXMgaXMgYSBwb3BvdmVyIHdpdGggcmFkaW8gYnV0dG9ucyAoc2luZ2xlIHZhbHVlIHNlbGVjdClcbiAgICAvLyByZXR1cm4gdGhlIHZhbHVlIHRoYXQgd2FzIGNsaWNrZWQsIG90aGVyd2lzZSB1bmRlZmluZWRcbiAgICBjb25zdCBvcHRpb24gPSB0aGlzLmZpbmRPcHRpb25Gcm9tRXZlbnQoZXYpO1xuICAgIHJldHVybiBvcHRpb24gPyBvcHRpb24udmFsdWUgOiB1bmRlZmluZWQ7XG4gIH1cbiAgcmVuZGVyT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgY29uc3Qge1xuICAgICAgbXVsdGlwbGVcbiAgICB9ID0gdGhpcztcbiAgICBzd2l0Y2ggKG11bHRpcGxlKSB7XG4gICAgICBjYXNlIHRydWU6XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlckNoZWNrYm94T3B0aW9ucyhvcHRpb25zKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlclJhZGlvT3B0aW9ucyhvcHRpb25zKTtcbiAgICB9XG4gIH1cbiAgcmVuZGVyQ2hlY2tib3hPcHRpb25zKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5tYXAob3B0aW9uID0+IGgoXCJpb24taXRlbVwiLCB7XG4gICAgICBjbGFzczogT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIC8vIFRPRE8gRlctNDc4NFxuICAgICAgICAnaXRlbS1jaGVja2JveC1jaGVja2VkJzogb3B0aW9uLmNoZWNrZWRcbiAgICAgIH0sIGdldENsYXNzTWFwKG9wdGlvbi5jc3NDbGFzcykpXG4gICAgfSwgaChcImlvbi1jaGVja2JveFwiLCB7XG4gICAgICB2YWx1ZTogb3B0aW9uLnZhbHVlLFxuICAgICAgZGlzYWJsZWQ6IG9wdGlvbi5kaXNhYmxlZCxcbiAgICAgIGNoZWNrZWQ6IG9wdGlvbi5jaGVja2VkLFxuICAgICAganVzdGlmeTogXCJzdGFydFwiLFxuICAgICAgbGFiZWxQbGFjZW1lbnQ6IFwiZW5kXCIsXG4gICAgICBvbklvbkNoYW5nZTogZXYgPT4ge1xuICAgICAgICB0aGlzLnNldENoZWNrZWQoZXYpO1xuICAgICAgICB0aGlzLmNhbGxPcHRpb25IYW5kbGVyKGV2KTtcbiAgICAgICAgLy8gVE9ETyBGVy00Nzg0XG4gICAgICAgIGZvcmNlVXBkYXRlKHRoaXMpO1xuICAgICAgfVxuICAgIH0sIG9wdGlvbi50ZXh0KSkpO1xuICB9XG4gIHJlbmRlclJhZGlvT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgY29uc3QgY2hlY2tlZCA9IG9wdGlvbnMuZmlsdGVyKG8gPT4gby5jaGVja2VkKS5tYXAobyA9PiBvLnZhbHVlKVswXTtcbiAgICByZXR1cm4gaChcImlvbi1yYWRpby1ncm91cFwiLCB7XG4gICAgICB2YWx1ZTogY2hlY2tlZCxcbiAgICAgIG9uSW9uQ2hhbmdlOiBldiA9PiB0aGlzLmNhbGxPcHRpb25IYW5kbGVyKGV2KVxuICAgIH0sIG9wdGlvbnMubWFwKG9wdGlvbiA9PiBoKFwiaW9uLWl0ZW1cIiwge1xuICAgICAgY2xhc3M6IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAvLyBUT0RPIEZXLTQ3ODRcbiAgICAgICAgJ2l0ZW0tcmFkaW8tY2hlY2tlZCc6IG9wdGlvbi52YWx1ZSA9PT0gY2hlY2tlZFxuICAgICAgfSwgZ2V0Q2xhc3NNYXAob3B0aW9uLmNzc0NsYXNzKSlcbiAgICB9LCBoKFwiaW9uLXJhZGlvXCIsIHtcbiAgICAgIHZhbHVlOiBvcHRpb24udmFsdWUsXG4gICAgICBkaXNhYmxlZDogb3B0aW9uLmRpc2FibGVkLFxuICAgICAgb25DbGljazogKCkgPT4gdGhpcy5kaXNtaXNzUGFyZW50UG9wb3ZlcigpLFxuICAgICAgb25LZXlVcDogZXYgPT4ge1xuICAgICAgICBpZiAoZXYua2V5ID09PSAnICcpIHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBTZWxlY3RpbmcgYSByYWRpbyBvcHRpb24gd2l0aCBrZXlib2FyZCBuYXZpZ2F0aW9uLFxuICAgICAgICAgICAqIGVpdGhlciB0aHJvdWdoIHRoZSBFbnRlciBvciBTcGFjZSBrZXlzLCBzaG91bGRcbiAgICAgICAgICAgKiBkaXNtaXNzIHRoZSBwb3BvdmVyLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIHRoaXMuZGlzbWlzc1BhcmVudFBvcG92ZXIoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIG9wdGlvbi50ZXh0KSkpKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaGVhZGVyLFxuICAgICAgbWVzc2FnZSxcbiAgICAgIG9wdGlvbnMsXG4gICAgICBzdWJIZWFkZXJcbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCBoYXNTdWJIZWFkZXJPck1lc3NhZ2UgPSBzdWJIZWFkZXIgIT09IHVuZGVmaW5lZCB8fCBtZXNzYWdlICE9PSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIGgoSG9zdCwge1xuICAgICAga2V5OiAnYWI5MzFiNDliNTkyODM4MjViZDJhZmEzZjdmOTk1YjBlNmUwNWJlZicsXG4gICAgICBjbGFzczogZ2V0SW9uTW9kZSh0aGlzKVxuICAgIH0sIGgoXCJpb24tbGlzdFwiLCB7XG4gICAgICBrZXk6ICczYmQxMmI2NzgzMjYwNzU5NmI5MTJhNzNkNWIzYWU5Yjk1NGIyNDRkJ1xuICAgIH0sIGhlYWRlciAhPT0gdW5kZWZpbmVkICYmIGgoXCJpb24tbGlzdC1oZWFkZXJcIiwge1xuICAgICAga2V5OiAnOTdkYTkzMDI0NmVkZjc0MjNhMDM5YzAzMGQ0MGUzZmY3YTUxNDhhMydcbiAgICB9LCBoZWFkZXIpLCBoYXNTdWJIZWFkZXJPck1lc3NhZ2UgJiYgaChcImlvbi1pdGVtXCIsIHtcbiAgICAgIGtleTogJ2M1NzlkZjZlYThmYWMwN2JiMGM1OWQzNGM2OWIxNDk2NTY4NjMyMjQnXG4gICAgfSwgaChcImlvbi1sYWJlbFwiLCB7XG4gICAgICBrZXk6ICdhZjY5OWM1ZjQ2NTcxMGNjYjEzYjhjZjhlN2JlNjZmMGU4YWNmYWQxJyxcbiAgICAgIGNsYXNzOiBcImlvbi10ZXh0LXdyYXBcIlxuICAgIH0sIHN1YkhlYWRlciAhPT0gdW5kZWZpbmVkICYmIGgoXCJoM1wiLCB7XG4gICAgICBrZXk6ICdkZjlhOTM2ZDQyMDY0YjEzNGU4NDNjNzIyOWYzMTRhMmEzZWM3ZTgwJ1xuICAgIH0sIHN1YkhlYWRlciksIG1lc3NhZ2UgIT09IHVuZGVmaW5lZCAmJiBoKFwicFwiLCB7XG4gICAgICBrZXk6ICc5YzNkZGFkMzc4ZGYwMGYxMDZhZmE5NGU5OTI4Y2Y2OGMxNzEyNGRkJ1xuICAgIH0sIG1lc3NhZ2UpKSksIHRoaXMucmVuZGVyT3B0aW9ucyhvcHRpb25zKSkpO1xuICB9XG4gIGdldCBlbCgpIHtcbiAgICByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTtcbiAgfVxufTtcblNlbGVjdFBvcG92ZXIuc3R5bGUgPSB7XG4gIGlvczogc2VsZWN0UG9wb3Zlcklvc0NzcyxcbiAgbWQ6IHNlbGVjdFBvcG92ZXJNZENzc1xufTtcbmV4cG9ydCB7IFNlbGVjdCBhcyBpb25fc2VsZWN0LCBTZWxlY3RPcHRpb24gYXMgaW9uX3NlbGVjdF9vcHRpb24sIFNlbGVjdFBvcG92ZXIgYXMgaW9uX3NlbGVjdF9wb3BvdmVyIH07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBLElBQU0sZUFBZTtBQUNyQixJQUFNLGNBQWM7QUFDcEIsSUFBTSxTQUFTLE1BQU07QUFBQSxFQUNuQixZQUFZLFNBQVM7QUFDbkIscUJBQWlCLE1BQU0sT0FBTztBQUM5QixTQUFLLFlBQVksWUFBWSxNQUFNLGFBQWEsQ0FBQztBQUNqRCxTQUFLLFlBQVksWUFBWSxNQUFNLGFBQWEsQ0FBQztBQUNqRCxTQUFLLGFBQWEsWUFBWSxNQUFNLGNBQWMsQ0FBQztBQUNuRCxTQUFLLFdBQVcsWUFBWSxNQUFNLFlBQVksQ0FBQztBQUMvQyxTQUFLLFVBQVUsWUFBWSxNQUFNLFdBQVcsQ0FBQztBQUM3QyxTQUFLLFdBQVcsWUFBWSxNQUFNLFlBQVksQ0FBQztBQUMvQyxTQUFLLFVBQVUsV0FBVyxXQUFXO0FBQ3JDLFNBQUssZUFBZSxHQUFHLEtBQUssT0FBTztBQUNuQyxTQUFLLGNBQWMsR0FBRyxLQUFLLE9BQU87QUFD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
