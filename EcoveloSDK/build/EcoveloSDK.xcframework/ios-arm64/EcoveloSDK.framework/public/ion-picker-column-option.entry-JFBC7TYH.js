import {
  createColorClasses
} from "./chunk-5VP4V3BN.js";
import {
  getIonMode
} from "./chunk-TXLH22R2.js";
import {
  inheritAttributes
} from "./chunk-RZR7LWTQ.js";
import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-BFPTXCSH.js";
import "./chunk-UESUV5PM.js";

// node_modules/@ionic/core/dist/esm/ion-picker-column-option.entry.js
var pickerColumnOptionIosCss = "button{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;width:100%;height:34px;border:0px;outline:none;background:transparent;color:inherit;font-family:var(--ion-font-family, inherit);font-size:inherit;line-height:34px;text-align:inherit;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;overflow:hidden}:host(.option-disabled){opacity:0.4}:host(.option-disabled) button{cursor:default}";
var pickerColumnOptionMdCss = "button{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;width:100%;height:34px;border:0px;outline:none;background:transparent;color:inherit;font-family:var(--ion-font-family, inherit);font-size:inherit;line-height:34px;text-align:inherit;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;overflow:hidden}:host(.option-disabled){opacity:0.4}:host(.option-disabled) button{cursor:default}:host(.option-active){color:var(--ion-color-base)}";
var PickerColumnOption = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.pickerColumn = null;
    this.ariaLabel = null;
    this.disabled = false;
    this.color = "primary";
  }
  /**
   * The aria-label of the option has changed after the
   * first render and needs to be updated within the component.
   *
   * @param ariaLbl The new aria-label value.
   */
  onAriaLabelChange(ariaLbl) {
    this.ariaLabel = ariaLbl;
  }
  componentWillLoad() {
    const inheritedAttributes = inheritAttributes(this.el, ["aria-label"]);
    this.ariaLabel = inheritedAttributes["aria-label"] || null;
  }
  connectedCallback() {
    this.pickerColumn = this.el.closest("ion-picker-column");
  }
  disconnectedCallback() {
    this.pickerColumn = null;
  }
  /**
   * The column options can load at any time
   * so the options needs to tell the
   * parent picker column when it is loaded
   * so the picker column can ensure it is
   * centered in the view.
   *
   * We intentionally run this for every
   * option. If we only ran this from
   * the selected option then if the newly
   * loaded options were not selected then
   * scrollActiveItemIntoView would not be called.
   */
  componentDidLoad() {
    const {
      pickerColumn
    } = this;
    if (pickerColumn !== null) {
      pickerColumn.scrollActiveItemIntoView();
    }
  }
  /**
   * When an option is clicked, update the
   * parent picker column value. This
   * component will handle centering the option
   * in the column view.
   */
  onClick() {
    const {
      pickerColumn
    } = this;
    if (pickerColumn !== null) {
      pickerColumn.setValue(this.value);
    }
  }
  render() {
    const {
      color,
      disabled,
      ariaLabel
    } = this;
    const mode = getIonMode(this);
    return h(Host, {
      key: "f816729941aabcb31ddfdce3ffe2e2139030d715",
      class: createColorClasses(color, {
        [mode]: true,
        ["option-disabled"]: disabled
      })
    }, h("button", {
      key: "48dff7833bb60fc8331cd353a0885e6affa683d1",
      tabindex: "-1",
      "aria-label": ariaLabel,
      disabled,
      onClick: () => this.onClick()
    }, h("slot", {
      key: "f9224d0e7b7aa6c05b29abfdcfe0f30ad6ee3141"
    })));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "aria-label": ["onAriaLabelChange"]
    };
  }
};
PickerColumnOption.style = {
  ios: pickerColumnOptionIosCss,
  md: pickerColumnOptionMdCss
};
export {
  PickerColumnOption as ion_picker_column_option
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-picker-column-option.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tcGlja2VyLWNvbHVtbi1vcHRpb24uZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgaCwgZCBhcyBIb3N0LCBnIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2luZGV4LTREeFk2X2dHLmpzJztcbmltcG9ydCB7IGIgYXMgaW5oZXJpdEF0dHJpYnV0ZXMgfSBmcm9tICcuL2hlbHBlcnMtOEtTUVFHUXkuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVDb2xvckNsYXNzZXMgfSBmcm9tICcuL3RoZW1lLURpVkp5cWxYLmpzJztcbmltcG9ydCB7IGIgYXMgZ2V0SW9uTW9kZSB9IGZyb20gJy4vaW9uaWMtZ2xvYmFsLUNUU3l1ZmhGLmpzJztcbmNvbnN0IHBpY2tlckNvbHVtbk9wdGlvbklvc0NzcyA9IFwiYnV0dG9ue3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6MDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjA7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO3dpZHRoOjEwMCU7aGVpZ2h0OjM0cHg7Ym9yZGVyOjBweDtvdXRsaW5lOm5vbmU7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtjb2xvcjppbmhlcml0O2ZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseSwgaW5oZXJpdCk7Zm9udC1zaXplOmluaGVyaXQ7bGluZS1oZWlnaHQ6MzRweDt0ZXh0LWFsaWduOmluaGVyaXQ7dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXA7Y3Vyc29yOnBvaW50ZXI7b3ZlcmZsb3c6aGlkZGVufTpob3N0KC5vcHRpb24tZGlzYWJsZWQpe29wYWNpdHk6MC40fTpob3N0KC5vcHRpb24tZGlzYWJsZWQpIGJ1dHRvbntjdXJzb3I6ZGVmYXVsdH1cIjtcbmNvbnN0IHBpY2tlckNvbHVtbk9wdGlvbk1kQ3NzID0gXCJidXR0b257cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MzRweDtib3JkZXI6MHB4O291dGxpbmU6bm9uZTtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2NvbG9yOmluaGVyaXQ7Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LCBpbmhlcml0KTtmb250LXNpemU6aW5oZXJpdDtsaW5lLWhlaWdodDozNHB4O3RleHQtYWxpZ246aW5oZXJpdDt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcDtjdXJzb3I6cG9pbnRlcjtvdmVyZmxvdzpoaWRkZW59Omhvc3QoLm9wdGlvbi1kaXNhYmxlZCl7b3BhY2l0eTowLjR9Omhvc3QoLm9wdGlvbi1kaXNhYmxlZCkgYnV0dG9ue2N1cnNvcjpkZWZhdWx0fTpob3N0KC5vcHRpb24tYWN0aXZlKXtjb2xvcjp2YXIoLS1pb24tY29sb3ItYmFzZSl9XCI7XG5jb25zdCBQaWNrZXJDb2x1bW5PcHRpb24gPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIC8qKlxuICAgICAqIFdlIGtlZXAgdHJhY2sgb2YgdGhlIHBhcmVudCBwaWNrZXIgY29sdW1uXG4gICAgICogc28gd2UgY2FuIHVwZGF0ZSB0aGUgdmFsdWUgb2YgaXQgd2hlblxuICAgICAqIGNsaWNraW5nIGFuIGVuYWJsZSBvcHRpb24uXG4gICAgICovXG4gICAgdGhpcy5waWNrZXJDb2x1bW4gPSBudWxsO1xuICAgIC8qKlxuICAgICAqIFRoZSBhcmlhLWxhYmVsIG9mIHRoZSBvcHRpb24uXG4gICAgICpcbiAgICAgKiBJZiB0aGUgdmFsdWUgY2hhbmdlcywgdGhlbiBpdCB3aWxsIHRyaWdnZXIgYVxuICAgICAqIHJlLXJlbmRlciBvZiB0aGUgcGlja2VyIHNpbmNlIGl0J3MgYSBAU3RhdGUgdmFyaWFibGUuXG4gICAgICogT3RoZXJ3aXNlLCB0aGUgYGFyaWEtbGFiZWxgIGF0dHJpYnV0ZSBjYW5ub3QgYmUgdXBkYXRlZFxuICAgICAqIGFmdGVyIHRoZSBjb21wb25lbnQgaXMgbG9hZGVkLlxuICAgICAqL1xuICAgIHRoaXMuYXJpYUxhYmVsID0gbnVsbDtcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIHRoZSB1c2VyIGNhbm5vdCBpbnRlcmFjdCB3aXRoIHRoZSBwaWNrZXIgY29sdW1uIG9wdGlvbi5cbiAgICAgKi9cbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogVGhlIGNvbG9yIHRvIHVzZSBmcm9tIHlvdXIgYXBwbGljYXRpb24ncyBjb2xvciBwYWxldHRlLlxuICAgICAqIERlZmF1bHQgb3B0aW9ucyBhcmU6IGBcInByaW1hcnlcImAsIGBcInNlY29uZGFyeVwiYCwgYFwidGVydGlhcnlcImAsIGBcInN1Y2Nlc3NcImAsIGBcIndhcm5pbmdcImAsIGBcImRhbmdlclwiYCwgYFwibGlnaHRcImAsIGBcIm1lZGl1bVwiYCwgYW5kIGBcImRhcmtcImAuXG4gICAgICogRm9yIG1vcmUgaW5mb3JtYXRpb24gb24gY29sb3JzLCBzZWUgW3RoZW1pbmddKC9kb2NzL3RoZW1pbmcvYmFzaWNzKS5cbiAgICAgKi9cbiAgICB0aGlzLmNvbG9yID0gJ3ByaW1hcnknO1xuICB9XG4gIC8qKlxuICAgKiBUaGUgYXJpYS1sYWJlbCBvZiB0aGUgb3B0aW9uIGhhcyBjaGFuZ2VkIGFmdGVyIHRoZVxuICAgKiBmaXJzdCByZW5kZXIgYW5kIG5lZWRzIHRvIGJlIHVwZGF0ZWQgd2l0aGluIHRoZSBjb21wb25lbnQuXG4gICAqXG4gICAqIEBwYXJhbSBhcmlhTGJsIFRoZSBuZXcgYXJpYS1sYWJlbCB2YWx1ZS5cbiAgICovXG4gIG9uQXJpYUxhYmVsQ2hhbmdlKGFyaWFMYmwpIHtcbiAgICB0aGlzLmFyaWFMYWJlbCA9IGFyaWFMYmw7XG4gIH1cbiAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgY29uc3QgaW5oZXJpdGVkQXR0cmlidXRlcyA9IGluaGVyaXRBdHRyaWJ1dGVzKHRoaXMuZWwsIFsnYXJpYS1sYWJlbCddKTtcbiAgICAvKipcbiAgICAgKiBUaGUgaW5pdGlhbCB2YWx1ZSBvZiBgYXJpYS1sYWJlbGAgbmVlZHMgdG8gYmUgc2V0IGZvclxuICAgICAqIHRoZSBmaXJzdCByZW5kZXIuXG4gICAgICAgICAgKi9cbiAgICB0aGlzLmFyaWFMYWJlbCA9IGluaGVyaXRlZEF0dHJpYnV0ZXNbJ2FyaWEtbGFiZWwnXSB8fCBudWxsO1xuICB9XG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMucGlja2VyQ29sdW1uID0gdGhpcy5lbC5jbG9zZXN0KCdpb24tcGlja2VyLWNvbHVtbicpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMucGlja2VyQ29sdW1uID0gbnVsbDtcbiAgfVxuICAvKipcbiAgICogVGhlIGNvbHVtbiBvcHRpb25zIGNhbiBsb2FkIGF0IGFueSB0aW1lXG4gICAqIHNvIHRoZSBvcHRpb25zIG5lZWRzIHRvIHRlbGwgdGhlXG4gICAqIHBhcmVudCBwaWNrZXIgY29sdW1uIHdoZW4gaXQgaXMgbG9hZGVkXG4gICAqIHNvIHRoZSBwaWNrZXIgY29sdW1uIGNhbiBlbnN1cmUgaXQgaXNcbiAgICogY2VudGVyZWQgaW4gdGhlIHZpZXcuXG4gICAqXG4gICAqIFdlIGludGVudGlvbmFsbHkgcnVuIHRoaXMgZm9yIGV2ZXJ5XG4gICAqIG9wdGlvbi4gSWYgd2Ugb25seSByYW4gdGhpcyBmcm9tXG4gICAqIHRoZSBzZWxlY3RlZCBvcHRpb24gdGhlbiBpZiB0aGUgbmV3bHlcbiAgICogbG9hZGVkIG9wdGlvbnMgd2VyZSBub3Qgc2VsZWN0ZWQgdGhlblxuICAgKiBzY3JvbGxBY3RpdmVJdGVtSW50b1ZpZXcgd291bGQgbm90IGJlIGNhbGxlZC5cbiAgICovXG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgY29uc3Qge1xuICAgICAgcGlja2VyQ29sdW1uXG4gICAgfSA9IHRoaXM7XG4gICAgaWYgKHBpY2tlckNvbHVtbiAhPT0gbnVsbCkge1xuICAgICAgcGlja2VyQ29sdW1uLnNjcm9sbEFjdGl2ZUl0ZW1JbnRvVmlldygpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogV2hlbiBhbiBvcHRpb24gaXMgY2xpY2tlZCwgdXBkYXRlIHRoZVxuICAgKiBwYXJlbnQgcGlja2VyIGNvbHVtbiB2YWx1ZS4gVGhpc1xuICAgKiBjb21wb25lbnQgd2lsbCBoYW5kbGUgY2VudGVyaW5nIHRoZSBvcHRpb25cbiAgICogaW4gdGhlIGNvbHVtbiB2aWV3LlxuICAgKi9cbiAgb25DbGljaygpIHtcbiAgICBjb25zdCB7XG4gICAgICBwaWNrZXJDb2x1bW5cbiAgICB9ID0gdGhpcztcbiAgICBpZiAocGlja2VyQ29sdW1uICE9PSBudWxsKSB7XG4gICAgICBwaWNrZXJDb2x1bW4uc2V0VmFsdWUodGhpcy52YWx1ZSk7XG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjb2xvcixcbiAgICAgIGRpc2FibGVkLFxuICAgICAgYXJpYUxhYmVsXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgcmV0dXJuIGgoSG9zdCwge1xuICAgICAga2V5OiAnZjgxNjcyOTk0MWFhYmNiMzFkZGZkY2UzZmZlMmUyMTM5MDMwZDcxNScsXG4gICAgICBjbGFzczogY3JlYXRlQ29sb3JDbGFzc2VzKGNvbG9yLCB7XG4gICAgICAgIFttb2RlXTogdHJ1ZSxcbiAgICAgICAgWydvcHRpb24tZGlzYWJsZWQnXTogZGlzYWJsZWRcbiAgICAgIH0pXG4gICAgfSwgaChcImJ1dHRvblwiLCB7XG4gICAgICBrZXk6ICc0OGRmZjc4MzNiYjYwZmM4MzMxY2QzNTNhMDg4NWU2YWZmYTY4M2QxJyxcbiAgICAgIHRhYmluZGV4OiBcIi0xXCIsXG4gICAgICBcImFyaWEtbGFiZWxcIjogYXJpYUxhYmVsLFxuICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgb25DbGljazogKCkgPT4gdGhpcy5vbkNsaWNrKClcbiAgICB9LCBoKFwic2xvdFwiLCB7XG4gICAgICBrZXk6ICdmOTIyNGQwZTdiN2FhNmMwNWIyOWFiZmRjZmUwZjMwYWQ2ZWUzMTQxJ1xuICAgIH0pKSk7XG4gIH1cbiAgZ2V0IGVsKCkge1xuICAgIHJldHVybiBnZXRFbGVtZW50KHRoaXMpO1xuICB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiYXJpYS1sYWJlbFwiOiBbXCJvbkFyaWFMYWJlbENoYW5nZVwiXVxuICAgIH07XG4gIH1cbn07XG5QaWNrZXJDb2x1bW5PcHRpb24uc3R5bGUgPSB7XG4gIGlvczogcGlja2VyQ29sdW1uT3B0aW9uSW9zQ3NzLFxuICBtZDogcGlja2VyQ29sdW1uT3B0aW9uTWRDc3Ncbn07XG5leHBvcnQgeyBQaWNrZXJDb2x1bW5PcHRpb24gYXMgaW9uX3BpY2tlcl9jb2x1bW5fb3B0aW9uIH07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQSxJQUFNLDJCQUEyQjtBQUNqQyxJQUFNLDBCQUEwQjtBQUNoQyxJQUFNLHFCQUFxQixNQUFNO0FBQUEsRUFDL0IsWUFBWSxTQUFTO0FBQ25CLHFCQUFpQixNQUFNLE9BQU87QUFNOUIsU0FBSyxlQUFlO0FBU3BCLFNBQUssWUFBWTtBQUlqQixTQUFLLFdBQVc7QUFNaEIsU0FBSyxRQUFRO0FBQUEsRUFDZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBT0Esa0JBQWtCLFNBQVM7QUFDekIsU0FBSyxZQUFZO0FBQUEsRUFDbkI7QUFBQSxFQUNBLG9CQUFvQjtBQUNsQixVQUFNLHNCQUFzQixrQkFBa0IsS0FBSyxJQUFJLENBQUMsWUFBWSxDQUFDO0FBS3JFLFNBQUssWUFBWSxvQkFBb0IsWUFBWSxLQUFLO0FBQUEsRUFDeEQ7QUFBQSxFQUNBLG9CQUFvQjtBQUNsQixTQUFLLGVBQWUsS0FBSyxHQUFHLFFBQVEsbUJBQW1CO0FBQUEsRUFDekQ7QUFBQSxFQUNBLHVCQUF1QjtBQUNyQixTQUFLLGVBQWU7QUFBQSxFQUN0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFjQSxtQkFBbUI7QUFDakIsVUFBTTtBQUFBLE1BQ0o7QUFBQSxJQUNGLElBQUk7QUFDSixRQUFJLGlCQUFpQixNQUFNO0FBQ3pCLG1CQUFhLHlCQUF5QjtBQUFBLElBQ3hDO0FBQUEsRUFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBT0EsVUFBVTtBQUNSLFVBQU07QUFBQSxNQUNKO0FBQUEsSUFDRixJQUFJO0FBQ0osUUFBSSxpQkFBaUIsTUFBTTtBQUN6QixtQkFBYSxTQUFTLEtBQUssS0FBSztBQUFBLElBQ2xDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUNQLFVBQU07QUFBQSxNQUNKO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGLElBQUk7QUFDSixVQUFNLE9BQU8sV0FBVyxJQUFJO0FBQzVCLFdBQU8sRUFBRSxNQUFNO0FBQUEsTUFDYixLQUFLO0FBQUEsTUFDTCxPQUFPLG1CQUFtQixPQUFPO0FBQUEsUUFDL0IsQ0FBQyxJQUFJLEdBQUc7QUFBQSxRQUNSLENBQUMsaUJBQWlCLEdBQUc7QUFBQSxNQUN2QixDQUFDO0FBQUEsSUFDSCxHQUFHLEVBQUUsVUFBVTtBQUFBLE1BQ2IsS0FBSztBQUFBLE1BQ0wsVUFBVTtBQUFBLE1BQ1YsY0FBYztBQUFBLE1BQ2Q7QUFBQSxNQUNBLFNBQVMsTUFBTSxLQUFLLFFBQVE7QUFBQSxJQUM5QixHQUFHLEVBQUUsUUFBUTtBQUFBLE1BQ1gsS0FBSztBQUFBLElBQ1AsQ0FBQyxDQUFDLENBQUM7QUFBQSxFQUNMO0FBQUEsRUFDQSxJQUFJLEtBQUs7QUFDUCxXQUFPLFdBQVcsSUFBSTtBQUFBLEVBQ3hCO0FBQUEsRUFDQSxXQUFXLFdBQVc7QUFDcEIsV0FBTztBQUFBLE1BQ0wsY0FBYyxDQUFDLG1CQUFtQjtBQUFBLElBQ3BDO0FBQUEsRUFDRjtBQUNGO0FBQ0EsbUJBQW1CLFFBQVE7QUFBQSxFQUN6QixLQUFLO0FBQUEsRUFDTCxJQUFJO0FBQ047IiwibmFtZXMiOltdLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19
