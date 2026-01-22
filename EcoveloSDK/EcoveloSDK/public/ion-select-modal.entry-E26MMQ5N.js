import {
  safeCall
} from "./chunk-QATEHYOA.js";
import "./chunk-3MKGIXIK.js";
import {
  getClassMap
} from "./chunk-5VP4V3BN.js";
import {
  getIonMode
} from "./chunk-TXLH22R2.js";
import "./chunk-J5JVDPFK.js";
import "./chunk-MUBGKTGO.js";
import "./chunk-RZR7LWTQ.js";
import "./chunk-YSZWGYJT.js";
import {
  Host,
  forceUpdate,
  getElement,
  h,
  registerInstance
} from "./chunk-BFPTXCSH.js";
import "./chunk-UESUV5PM.js";

// node_modules/@ionic/core/dist/esm/ion-select-modal.entry.js
var ionicSelectModalMdCss = '.sc-ion-select-modal-ionic-h{height:100%}ion-list.sc-ion-select-modal-ionic ion-radio.sc-ion-select-modal-ionic::part(container),ion-list.sc-ion-select-modal-ionic ion-radio.sc-ion-select-modal-ionic [part~="container"]{display:none}ion-list.sc-ion-select-modal-ionic ion-radio.sc-ion-select-modal-ionic::part(label),ion-list.sc-ion-select-modal-ionic ion-radio.sc-ion-select-modal-ionic [part~="label"]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-item.sc-ion-select-modal-ionic{--inner-border-width:0}.item-radio-checked.sc-ion-select-modal-ionic{--background:rgba(var(--ion-color-primary-rgb, 0, 84, 233), 0.08);--background-focused:var(--ion-color-primary, #0054e9);--background-focused-opacity:0.2;--background-hover:var(--ion-color-primary, #0054e9);--background-hover-opacity:0.12}.item-checkbox-checked.sc-ion-select-modal-ionic{--background-activated:var(--ion-item-color, var(--ion-text-color, #000));--background-focused:var(--ion-item-color, var(--ion-text-color, #000));--background-hover:var(--ion-item-color, var(--ion-text-color, #000));--color:var(--ion-color-primary, #0054e9)}';
var selectModalIosCss = '.sc-ion-select-modal-ios-h{height:100%}ion-item.sc-ion-select-modal-ios{--inner-padding-end:0}ion-radio.sc-ion-select-modal-ios::after{bottom:0;position:absolute;width:calc(100% - 0.9375rem - 16px);border-width:0px 0px 0.55px 0px;border-style:solid;border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, var(--ion-background-color-step-250, #c8c7cc))));content:""}ion-radio.sc-ion-select-modal-ios::after{inset-inline-start:calc(0.9375rem + 16px)}';
var selectModalMdCss = '.sc-ion-select-modal-md-h{height:100%}ion-list.sc-ion-select-modal-md ion-radio.sc-ion-select-modal-md::part(container),ion-list.sc-ion-select-modal-md ion-radio.sc-ion-select-modal-md [part~="container"]{display:none}ion-list.sc-ion-select-modal-md ion-radio.sc-ion-select-modal-md::part(label),ion-list.sc-ion-select-modal-md ion-radio.sc-ion-select-modal-md [part~="label"]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-item.sc-ion-select-modal-md{--inner-border-width:0}.item-radio-checked.sc-ion-select-modal-md{--background:rgba(var(--ion-color-primary-rgb, 0, 84, 233), 0.08);--background-focused:var(--ion-color-primary, #0054e9);--background-focused-opacity:0.2;--background-hover:var(--ion-color-primary, #0054e9);--background-hover-opacity:0.12}.item-checkbox-checked.sc-ion-select-modal-md{--background-activated:var(--ion-item-color, var(--ion-text-color, #000));--background-focused:var(--ion-item-color, var(--ion-text-color, #000));--background-hover:var(--ion-item-color, var(--ion-text-color, #000));--color:var(--ion-color-primary, #0054e9)}';
var SelectModal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.options = [];
  }
  closeModal() {
    const modal = this.el.closest("ion-modal");
    if (modal) {
      modal.dismiss();
    }
  }
  findOptionFromEvent(ev) {
    const {
      options
    } = this;
    return options.find((o) => o.value === ev.target.value);
  }
  getValues(ev) {
    const {
      multiple,
      options
    } = this;
    if (multiple) {
      return options.filter((o) => o.checked).map((o) => o.value);
    }
    const option = ev ? this.findOptionFromEvent(ev) : null;
    return option ? option.value : void 0;
  }
  callOptionHandler(ev) {
    const option = this.findOptionFromEvent(ev);
    const values = this.getValues(ev);
    if (option === null || option === void 0 ? void 0 : option.handler) {
      safeCall(option.handler, values);
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
  renderRadioOptions() {
    const checked = this.options.filter((o) => o.checked).map((o) => o.value)[0];
    return h("ion-radio-group", {
      value: checked,
      onIonChange: (ev) => this.callOptionHandler(ev)
    }, this.options.map((option) => h("ion-item", {
      lines: "none",
      class: Object.assign({
        // TODO FW-4784
        "item-radio-checked": option.value === checked
      }, getClassMap(option.cssClass))
    }, h("ion-radio", {
      value: option.value,
      disabled: option.disabled,
      justify: "start",
      labelPlacement: "end",
      onClick: () => this.closeModal(),
      onKeyUp: (ev) => {
        if (ev.key === " ") {
          this.closeModal();
        }
      }
    }, option.text))));
  }
  renderCheckboxOptions() {
    return this.options.map((option) => h("ion-item", {
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
  render() {
    return h(Host, {
      key: "b6c0dec240b2e41985b15fdf4e5a6d3a145c1567",
      class: getIonMode(this)
    }, h("ion-header", {
      key: "cd177e85ee0f62a60a3a708342d6ab6eb19a44dc"
    }, h("ion-toolbar", {
      key: "aee8222a5a4daa540ad202b2e4cac1ef93d9558c"
    }, this.header !== void 0 && h("ion-title", {
      key: "5f8fecc764d97bf840d3d4cfddeeccd118ab4436"
    }, this.header), h("ion-buttons", {
      key: "919033950d7c2b0101f96a9c9698219de9f568ea",
      slot: "end"
    }, h("ion-button", {
      key: "34b571cab6dced4bde555a077a21e91800829931",
      onClick: () => this.closeModal()
    }, "Close")))), h("ion-content", {
      key: "3c9153d26ba7a5a03d3b20fcd628d0c3031661a7"
    }, h("ion-list", {
      key: "e00b222c071bc97c82ad1bba4db95a8a5c43ed6d"
    }, this.multiple === true ? this.renderCheckboxOptions() : this.renderRadioOptions())));
  }
  get el() {
    return getElement(this);
  }
};
SelectModal.style = {
  ionic: ionicSelectModalMdCss,
  ios: selectModalIosCss,
  md: selectModalMdCss
};
export {
  SelectModal as ion_select_modal
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-select-modal.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tc2VsZWN0LW1vZGFsLmVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGgsIGkgYXMgZm9yY2VVcGRhdGUsIGQgYXMgSG9zdCwgZyBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9pbmRleC00RHhZNl9nRy5qcyc7XG5pbXBvcnQgeyBiIGFzIGdldElvbk1vZGUgfSBmcm9tICcuL2lvbmljLWdsb2JhbC1DVFN5dWZoRi5qcyc7XG5pbXBvcnQgeyBzIGFzIHNhZmVDYWxsIH0gZnJvbSAnLi9vdmVybGF5cy1aWF80LXRfci5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldENsYXNzTWFwIH0gZnJvbSAnLi90aGVtZS1EaVZKeXFsWC5qcyc7XG5pbXBvcnQgJy4vaW5kZXgtWmpQNENqZVouanMnO1xuaW1wb3J0ICcuL2hlbHBlcnMtOEtTUVFHUXkuanMnO1xuaW1wb3J0ICcuL2hhcmR3YXJlLWJhY2stYnV0dG9uLURoYmQtMjNILmpzJztcbmltcG9ydCAnLi9mcmFtZXdvcmstZGVsZWdhdGUtQkxFQmdIMDYuanMnO1xuaW1wb3J0ICcuL2dlc3R1cmUtY29udHJvbGxlci1CVEVPczFhdC5qcyc7XG5jb25zdCBpb25pY1NlbGVjdE1vZGFsTWRDc3MgPSBcIi5zYy1pb24tc2VsZWN0LW1vZGFsLWlvbmljLWh7aGVpZ2h0OjEwMCV9aW9uLWxpc3Quc2MtaW9uLXNlbGVjdC1tb2RhbC1pb25pYyBpb24tcmFkaW8uc2MtaW9uLXNlbGVjdC1tb2RhbC1pb25pYzo6cGFydChjb250YWluZXIpLGlvbi1saXN0LnNjLWlvbi1zZWxlY3QtbW9kYWwtaW9uaWMgaW9uLXJhZGlvLnNjLWlvbi1zZWxlY3QtbW9kYWwtaW9uaWMgW3BhcnR+PVxcXCJjb250YWluZXJcXFwiXXtkaXNwbGF5Om5vbmV9aW9uLWxpc3Quc2MtaW9uLXNlbGVjdC1tb2RhbC1pb25pYyBpb24tcmFkaW8uc2MtaW9uLXNlbGVjdC1tb2RhbC1pb25pYzo6cGFydChsYWJlbCksaW9uLWxpc3Quc2MtaW9uLXNlbGVjdC1tb2RhbC1pb25pYyBpb24tcmFkaW8uc2MtaW9uLXNlbGVjdC1tb2RhbC1pb25pYyBbcGFydH49XFxcImxhYmVsXFxcIl17bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfWlvbi1pdGVtLnNjLWlvbi1zZWxlY3QtbW9kYWwtaW9uaWN7LS1pbm5lci1ib3JkZXItd2lkdGg6MH0uaXRlbS1yYWRpby1jaGVja2VkLnNjLWlvbi1zZWxlY3QtbW9kYWwtaW9uaWN7LS1iYWNrZ3JvdW5kOnJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiLCAwLCA4NCwgMjMzKSwgMC4wOCk7LS1iYWNrZ3JvdW5kLWZvY3VzZWQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMwMDU0ZTkpOy0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHk6MC4yOy0tYmFja2dyb3VuZC1ob3Zlcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzAwNTRlOSk7LS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6MC4xMn0uaXRlbS1jaGVja2JveC1jaGVja2VkLnNjLWlvbi1zZWxlY3QtbW9kYWwtaW9uaWN7LS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDp2YXIoLS1pb24taXRlbS1jb2xvciwgdmFyKC0taW9uLXRleHQtY29sb3IsICMwMDApKTstLWJhY2tncm91bmQtZm9jdXNlZDp2YXIoLS1pb24taXRlbS1jb2xvciwgdmFyKC0taW9uLXRleHQtY29sb3IsICMwMDApKTstLWJhY2tncm91bmQtaG92ZXI6dmFyKC0taW9uLWl0ZW0tY29sb3IsIHZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwKSk7LS1jb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzAwNTRlOSl9XCI7XG5jb25zdCBzZWxlY3RNb2RhbElvc0NzcyA9IFwiLnNjLWlvbi1zZWxlY3QtbW9kYWwtaW9zLWh7aGVpZ2h0OjEwMCV9aW9uLWl0ZW0uc2MtaW9uLXNlbGVjdC1tb2RhbC1pb3N7LS1pbm5lci1wYWRkaW5nLWVuZDowfWlvbi1yYWRpby5zYy1pb24tc2VsZWN0LW1vZGFsLWlvczo6YWZ0ZXJ7Ym90dG9tOjA7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6Y2FsYygxMDAlIC0gMC45Mzc1cmVtIC0gMTZweCk7Ym9yZGVyLXdpZHRoOjBweCAwcHggMC41NXB4IDBweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWlvbi1pdGVtLWJvcmRlci1jb2xvciwgdmFyKC0taW9uLWJvcmRlci1jb2xvciwgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjUwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTI1MCwgI2M4YzdjYykpKSk7Y29udGVudDpcXFwiXFxcIn1pb24tcmFkaW8uc2MtaW9uLXNlbGVjdC1tb2RhbC1pb3M6OmFmdGVye2luc2V0LWlubGluZS1zdGFydDpjYWxjKDAuOTM3NXJlbSArIDE2cHgpfVwiO1xuY29uc3Qgc2VsZWN0TW9kYWxNZENzcyA9IFwiLnNjLWlvbi1zZWxlY3QtbW9kYWwtbWQtaHtoZWlnaHQ6MTAwJX1pb24tbGlzdC5zYy1pb24tc2VsZWN0LW1vZGFsLW1kIGlvbi1yYWRpby5zYy1pb24tc2VsZWN0LW1vZGFsLW1kOjpwYXJ0KGNvbnRhaW5lciksaW9uLWxpc3Quc2MtaW9uLXNlbGVjdC1tb2RhbC1tZCBpb24tcmFkaW8uc2MtaW9uLXNlbGVjdC1tb2RhbC1tZCBbcGFydH49XFxcImNvbnRhaW5lclxcXCJde2Rpc3BsYXk6bm9uZX1pb24tbGlzdC5zYy1pb24tc2VsZWN0LW1vZGFsLW1kIGlvbi1yYWRpby5zYy1pb24tc2VsZWN0LW1vZGFsLW1kOjpwYXJ0KGxhYmVsKSxpb24tbGlzdC5zYy1pb24tc2VsZWN0LW1vZGFsLW1kIGlvbi1yYWRpby5zYy1pb24tc2VsZWN0LW1vZGFsLW1kIFtwYXJ0fj1cXFwibGFiZWxcXFwiXXttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjB9aW9uLWl0ZW0uc2MtaW9uLXNlbGVjdC1tb2RhbC1tZHstLWlubmVyLWJvcmRlci13aWR0aDowfS5pdGVtLXJhZGlvLWNoZWNrZWQuc2MtaW9uLXNlbGVjdC1tb2RhbC1tZHstLWJhY2tncm91bmQ6cmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IsIDAsIDg0LCAyMzMpLCAwLjA4KTstLWJhY2tncm91bmQtZm9jdXNlZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzAwNTRlOSk7LS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTowLjI7LS1iYWNrZ3JvdW5kLWhvdmVyOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMDA1NGU5KTstLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eTowLjEyfS5pdGVtLWNoZWNrYm94LWNoZWNrZWQuc2MtaW9uLXNlbGVjdC1tb2RhbC1tZHstLWJhY2tncm91bmQtYWN0aXZhdGVkOnZhcigtLWlvbi1pdGVtLWNvbG9yLCB2YXIoLS1pb24tdGV4dC1jb2xvciwgIzAwMCkpOy0tYmFja2dyb3VuZC1mb2N1c2VkOnZhcigtLWlvbi1pdGVtLWNvbG9yLCB2YXIoLS1pb24tdGV4dC1jb2xvciwgIzAwMCkpOy0tYmFja2dyb3VuZC1ob3Zlcjp2YXIoLS1pb24taXRlbS1jb2xvciwgdmFyKC0taW9uLXRleHQtY29sb3IsICMwMDApKTstLWNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMDA1NGU5KX1cIjtcbmNvbnN0IFNlbGVjdE1vZGFsID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLm9wdGlvbnMgPSBbXTtcbiAgfVxuICBjbG9zZU1vZGFsKCkge1xuICAgIGNvbnN0IG1vZGFsID0gdGhpcy5lbC5jbG9zZXN0KCdpb24tbW9kYWwnKTtcbiAgICBpZiAobW9kYWwpIHtcbiAgICAgIG1vZGFsLmRpc21pc3MoKTtcbiAgICB9XG4gIH1cbiAgZmluZE9wdGlvbkZyb21FdmVudChldikge1xuICAgIGNvbnN0IHtcbiAgICAgIG9wdGlvbnNcbiAgICB9ID0gdGhpcztcbiAgICByZXR1cm4gb3B0aW9ucy5maW5kKG8gPT4gby52YWx1ZSA9PT0gZXYudGFyZ2V0LnZhbHVlKTtcbiAgfVxuICBnZXRWYWx1ZXMoZXYpIHtcbiAgICBjb25zdCB7XG4gICAgICBtdWx0aXBsZSxcbiAgICAgIG9wdGlvbnNcbiAgICB9ID0gdGhpcztcbiAgICBpZiAobXVsdGlwbGUpIHtcbiAgICAgIC8vIHRoaXMgaXMgYSBtb2RhbCB3aXRoIGNoZWNrYm94ZXMgKG11bHRpcGxlIHZhbHVlIHNlbGVjdClcbiAgICAgIC8vIHJldHVybiBhbiBhcnJheSBvZiBhbGwgdGhlIGNoZWNrZWQgdmFsdWVzXG4gICAgICByZXR1cm4gb3B0aW9ucy5maWx0ZXIobyA9PiBvLmNoZWNrZWQpLm1hcChvID0+IG8udmFsdWUpO1xuICAgIH1cbiAgICAvLyB0aGlzIGlzIGEgbW9kYWwgd2l0aCByYWRpbyBidXR0b25zIChzaW5nbGUgdmFsdWUgc2VsZWN0KVxuICAgIC8vIHJldHVybiB0aGUgdmFsdWUgdGhhdCB3YXMgY2xpY2tlZCwgb3RoZXJ3aXNlIHVuZGVmaW5lZFxuICAgIGNvbnN0IG9wdGlvbiA9IGV2ID8gdGhpcy5maW5kT3B0aW9uRnJvbUV2ZW50KGV2KSA6IG51bGw7XG4gICAgcmV0dXJuIG9wdGlvbiA/IG9wdGlvbi52YWx1ZSA6IHVuZGVmaW5lZDtcbiAgfVxuICBjYWxsT3B0aW9uSGFuZGxlcihldikge1xuICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMuZmluZE9wdGlvbkZyb21FdmVudChldik7XG4gICAgY29uc3QgdmFsdWVzID0gdGhpcy5nZXRWYWx1ZXMoZXYpO1xuICAgIGlmIChvcHRpb24gPT09IG51bGwgfHwgb3B0aW9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb24uaGFuZGxlcikge1xuICAgICAgc2FmZUNhbGwob3B0aW9uLmhhbmRsZXIsIHZhbHVlcyk7XG4gICAgfVxuICB9XG4gIHNldENoZWNrZWQoZXYpIHtcbiAgICBjb25zdCB7XG4gICAgICBtdWx0aXBsZVxuICAgIH0gPSB0aGlzO1xuICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMuZmluZE9wdGlvbkZyb21FdmVudChldik7XG4gICAgLy8gdGhpcyBpcyBhIG1vZGFsIHdpdGggY2hlY2tib3hlcyAobXVsdGlwbGUgdmFsdWUgc2VsZWN0KVxuICAgIC8vIHdlIG5lZWQgdG8gc2V0IHRoZSBjaGVja2VkIHZhbHVlIGZvciB0aGlzIG9wdGlvblxuICAgIGlmIChtdWx0aXBsZSAmJiBvcHRpb24pIHtcbiAgICAgIG9wdGlvbi5jaGVja2VkID0gZXYuZGV0YWlsLmNoZWNrZWQ7XG4gICAgfVxuICB9XG4gIHJlbmRlclJhZGlvT3B0aW9ucygpIHtcbiAgICBjb25zdCBjaGVja2VkID0gdGhpcy5vcHRpb25zLmZpbHRlcihvID0+IG8uY2hlY2tlZCkubWFwKG8gPT4gby52YWx1ZSlbMF07XG4gICAgcmV0dXJuIGgoXCJpb24tcmFkaW8tZ3JvdXBcIiwge1xuICAgICAgdmFsdWU6IGNoZWNrZWQsXG4gICAgICBvbklvbkNoYW5nZTogZXYgPT4gdGhpcy5jYWxsT3B0aW9uSGFuZGxlcihldilcbiAgICB9LCB0aGlzLm9wdGlvbnMubWFwKG9wdGlvbiA9PiBoKFwiaW9uLWl0ZW1cIiwge1xuICAgICAgbGluZXM6IFwibm9uZVwiLFxuICAgICAgY2xhc3M6IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAvLyBUT0RPIEZXLTQ3ODRcbiAgICAgICAgJ2l0ZW0tcmFkaW8tY2hlY2tlZCc6IG9wdGlvbi52YWx1ZSA9PT0gY2hlY2tlZFxuICAgICAgfSwgZ2V0Q2xhc3NNYXAob3B0aW9uLmNzc0NsYXNzKSlcbiAgICB9LCBoKFwiaW9uLXJhZGlvXCIsIHtcbiAgICAgIHZhbHVlOiBvcHRpb24udmFsdWUsXG4gICAgICBkaXNhYmxlZDogb3B0aW9uLmRpc2FibGVkLFxuICAgICAganVzdGlmeTogXCJzdGFydFwiLFxuICAgICAgbGFiZWxQbGFjZW1lbnQ6IFwiZW5kXCIsXG4gICAgICBvbkNsaWNrOiAoKSA9PiB0aGlzLmNsb3NlTW9kYWwoKSxcbiAgICAgIG9uS2V5VXA6IGV2ID0+IHtcbiAgICAgICAgaWYgKGV2LmtleSA9PT0gJyAnKSB7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogU2VsZWN0aW5nIGEgcmFkaW8gb3B0aW9uIHdpdGgga2V5Ym9hcmQgbmF2aWdhdGlvbixcbiAgICAgICAgICAgKiBlaXRoZXIgdGhyb3VnaCB0aGUgRW50ZXIgb3IgU3BhY2Uga2V5cywgc2hvdWxkXG4gICAgICAgICAgICogZGlzbWlzcyB0aGUgbW9kYWwuXG4gICAgICAgICAgICovXG4gICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBvcHRpb24udGV4dCkpKSk7XG4gIH1cbiAgcmVuZGVyQ2hlY2tib3hPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMubWFwKG9wdGlvbiA9PiBoKFwiaW9uLWl0ZW1cIiwge1xuICAgICAgY2xhc3M6IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAvLyBUT0RPIEZXLTQ3ODRcbiAgICAgICAgJ2l0ZW0tY2hlY2tib3gtY2hlY2tlZCc6IG9wdGlvbi5jaGVja2VkXG4gICAgICB9LCBnZXRDbGFzc01hcChvcHRpb24uY3NzQ2xhc3MpKVxuICAgIH0sIGgoXCJpb24tY2hlY2tib3hcIiwge1xuICAgICAgdmFsdWU6IG9wdGlvbi52YWx1ZSxcbiAgICAgIGRpc2FibGVkOiBvcHRpb24uZGlzYWJsZWQsXG4gICAgICBjaGVja2VkOiBvcHRpb24uY2hlY2tlZCxcbiAgICAgIGp1c3RpZnk6IFwic3RhcnRcIixcbiAgICAgIGxhYmVsUGxhY2VtZW50OiBcImVuZFwiLFxuICAgICAgb25Jb25DaGFuZ2U6IGV2ID0+IHtcbiAgICAgICAgdGhpcy5zZXRDaGVja2VkKGV2KTtcbiAgICAgICAgdGhpcy5jYWxsT3B0aW9uSGFuZGxlcihldik7XG4gICAgICAgIC8vIFRPRE8gRlctNDc4NFxuICAgICAgICBmb3JjZVVwZGF0ZSh0aGlzKTtcbiAgICAgIH1cbiAgICB9LCBvcHRpb24udGV4dCkpKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGgoSG9zdCwge1xuICAgICAga2V5OiAnYjZjMGRlYzI0MGIyZTQxOTg1YjE1ZmRmNGU1YTZkM2ExNDVjMTU2NycsXG4gICAgICBjbGFzczogZ2V0SW9uTW9kZSh0aGlzKVxuICAgIH0sIGgoXCJpb24taGVhZGVyXCIsIHtcbiAgICAgIGtleTogJ2NkMTc3ZTg1ZWUwZjYyYTYwYTNhNzA4MzQyZDZhYjZlYjE5YTQ0ZGMnXG4gICAgfSwgaChcImlvbi10b29sYmFyXCIsIHtcbiAgICAgIGtleTogJ2FlZTgyMjJhNWE0ZGFhNTQwYWQyMDJiMmU0Y2FjMWVmOTNkOTU1OGMnXG4gICAgfSwgdGhpcy5oZWFkZXIgIT09IHVuZGVmaW5lZCAmJiBoKFwiaW9uLXRpdGxlXCIsIHtcbiAgICAgIGtleTogJzVmOGZlY2M3NjRkOTdiZjg0MGQzZDRjZmRkZWVjY2QxMThhYjQ0MzYnXG4gICAgfSwgdGhpcy5oZWFkZXIpLCBoKFwiaW9uLWJ1dHRvbnNcIiwge1xuICAgICAga2V5OiAnOTE5MDMzOTUwZDdjMmIwMTAxZjk2YTljOTY5ODIxOWRlOWY1NjhlYScsXG4gICAgICBzbG90OiBcImVuZFwiXG4gICAgfSwgaChcImlvbi1idXR0b25cIiwge1xuICAgICAga2V5OiAnMzRiNTcxY2FiNmRjZWQ0YmRlNTU1YTA3N2EyMWU5MTgwMDgyOTkzMScsXG4gICAgICBvbkNsaWNrOiAoKSA9PiB0aGlzLmNsb3NlTW9kYWwoKVxuICAgIH0sIFwiQ2xvc2VcIikpKSksIGgoXCJpb24tY29udGVudFwiLCB7XG4gICAgICBrZXk6ICczYzkxNTNkMjZiYTdhNWEwM2QzYjIwZmNkNjI4ZDBjMzAzMTY2MWE3J1xuICAgIH0sIGgoXCJpb24tbGlzdFwiLCB7XG4gICAgICBrZXk6ICdlMDBiMjIyYzA3MWJjOTdjODJhZDFiYmE0ZGI5NWE4YTVjNDNlZDZkJ1xuICAgIH0sIHRoaXMubXVsdGlwbGUgPT09IHRydWUgPyB0aGlzLnJlbmRlckNoZWNrYm94T3B0aW9ucygpIDogdGhpcy5yZW5kZXJSYWRpb09wdGlvbnMoKSkpKTtcbiAgfVxuICBnZXQgZWwoKSB7XG4gICAgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7XG4gIH1cbn07XG5TZWxlY3RNb2RhbC5zdHlsZSA9IHtcbiAgaW9uaWM6IGlvbmljU2VsZWN0TW9kYWxNZENzcyxcbiAgaW9zOiBzZWxlY3RNb2RhbElvc0NzcyxcbiAgbWQ6IHNlbGVjdE1vZGFsTWRDc3Ncbn07XG5leHBvcnQgeyBTZWxlY3RNb2RhbCBhcyBpb25fc2VsZWN0X21vZGFsIH07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZQSxJQUFNLHdCQUF3QjtBQUM5QixJQUFNLG9CQUFvQjtBQUMxQixJQUFNLG1CQUFtQjtBQUN6QixJQUFNLGNBQWMsTUFBTTtBQUFBLEVBQ3hCLFlBQVksU0FBUztBQUNuQixxQkFBaUIsTUFBTSxPQUFPO0FBQzlCLFNBQUssVUFBVSxDQUFDO0FBQUEsRUFDbEI7QUFBQSxFQUNBLGFBQWE7QUFDWCxVQUFNLFFBQVEsS0FBSyxHQUFHLFFBQVEsV0FBVztBQUN6QyxRQUFJLE9BQU87QUFDVCxZQUFNLFFBQVE7QUFBQSxJQUNoQjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLG9CQUFvQixJQUFJO0FBQ3RCLFVBQU07QUFBQSxNQUNKO0FBQUEsSUFDRixJQUFJO0FBQ0osV0FBTyxRQUFRLEtBQUssT0FBSyxFQUFFLFVBQVUsR0FBRyxPQUFPLEtBQUs7QUFBQSxFQUN0RDtBQUFBLEVBQ0EsVUFBVSxJQUFJO0FBQ1osVUFBTTtBQUFBLE1BQ0o7QUFBQSxNQUNBO0FBQUEsSUFDRixJQUFJO0FBQ0osUUFBSSxVQUFVO0FBR1osYUFBTyxRQUFRLE9BQU8sT0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLE9BQUssRUFBRSxLQUFLO0FBQUEsSUFDeEQ7QUFHQSxVQUFNLFNBQVMsS0FBSyxLQUFLLG9CQUFvQixFQUFFLElBQUk7QUFDbkQsV0FBTyxTQUFTLE9BQU8sUUFBUTtBQUFBLEVBQ2pDO0FBQUEsRUFDQSxrQkFBa0IsSUFBSTtBQUNwQixVQUFNLFNBQVMsS0FBSyxvQkFBb0IsRUFBRTtBQUMxQyxVQUFNLFNBQVMsS0FBSyxVQUFVLEVBQUU7QUFDaEMsUUFBSSxXQUFXLFFBQVEsV0FBVyxTQUFTLFNBQVMsT0FBTyxTQUFTO0FBQ2xFLGVBQVMsT0FBTyxTQUFTLE1BQU07QUFBQSxJQUNqQztBQUFBLEVBQ0Y7QUFBQSxFQUNBLFdBQVcsSUFBSTtBQUNiLFVBQU07QUFBQSxNQUNKO0FBQUEsSUFDRixJQUFJO0FBQ0osVUFBTSxTQUFTLEtBQUssb0JBQW9CLEVBQUU7QUFHMUMsUUFBSSxZQUFZLFFBQVE7QUFDdEIsYUFBTyxVQUFVLEdBQUcsT0FBTztBQUFBLElBQzdCO0FBQUEsRUFDRjtBQUFBLEVBQ0EscUJBQXFCO0FBQ25CLFVBQU0sVUFBVSxLQUFLLFFBQVEsT0FBTyxPQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksT0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDO0FBQ3ZFLFdBQU8sRUFBRSxtQkFBbUI7QUFBQSxNQUMxQixPQUFPO0FBQUEsTUFDUCxhQUFhLFFBQU0sS0FBSyxrQkFBa0IsRUFBRTtBQUFBLElBQzlDLEdBQUcsS0FBSyxRQUFRLElBQUksWUFBVSxFQUFFLFlBQVk7QUFBQSxNQUMxQyxPQUFPO0FBQUEsTUFDUCxPQUFPLE9BQU8sT0FBTztBQUFBO0FBQUEsUUFFbkIsc0JBQXNCLE9BQU8sVUFBVTtBQUFBLE1BQ3pDLEdBQUcsWUFBWSxPQUFPLFFBQVEsQ0FBQztBQUFBLElBQ2pDLEdBQUcsRUFBRSxhQUFhO0FBQUEsTUFDaEIsT0FBTyxPQUFPO0FBQUEsTUFDZCxVQUFVLE9BQU87QUFBQSxNQUNqQixTQUFTO0FBQUEsTUFDVCxnQkFBZ0I7QUFBQSxNQUNoQixTQUFTLE1BQU0sS0FBSyxXQUFXO0FBQUEsTUFDL0IsU0FBUyxRQUFNO0FBQ2IsWUFBSSxHQUFHLFFBQVEsS0FBSztBQU1sQixlQUFLLFdBQVc7QUFBQSxRQUNsQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLEdBQUcsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQUEsRUFDbkI7QUFBQSxFQUNBLHdCQUF3QjtBQUN0QixXQUFPLEtBQUssUUFBUSxJQUFJLFlBQVUsRUFBRSxZQUFZO0FBQUEsTUFDOUMsT0FBTyxPQUFPLE9BQU87QUFBQTtBQUFBLFFBRW5CLHlCQUF5QixPQUFPO0FBQUEsTUFDbEMsR0FBRyxZQUFZLE9BQU8sUUFBUSxDQUFDO0FBQUEsSUFDakMsR0FBRyxFQUFFLGdCQUFnQjtBQUFBLE1BQ25CLE9BQU8sT0FBTztBQUFBLE1BQ2QsVUFBVSxPQUFPO0FBQUEsTUFDakIsU0FBUyxPQUFPO0FBQUEsTUFDaEIsU0FBUztBQUFBLE1BQ1QsZ0JBQWdCO0FBQUEsTUFDaEIsYUFBYSxRQUFNO0FBQ2pCLGFBQUssV0FBVyxFQUFFO0FBQ2xCLGFBQUssa0JBQWtCLEVBQUU7QUFFekIsb0JBQVksSUFBSTtBQUFBLE1BQ2xCO0FBQUEsSUFDRixHQUFHLE9BQU8sSUFBSSxDQUFDLENBQUM7QUFBQSxFQUNsQjtBQUFBLEVBQ0EsU0FBUztBQUNQLFdBQU8sRUFBRSxNQUFNO0FBQUEsTUFDYixLQUFLO0FBQUEsTUFDTCxPQUFPLFdBQVcsSUFBSTtBQUFBLElBQ3hCLEdBQUcsRUFBRSxjQUFjO0FBQUEsTUFDakIsS0FBSztBQUFBLElBQ1AsR0FBRyxFQUFFLGVBQWU7QUFBQSxNQUNsQixLQUFLO0FBQUEsSUFDUCxHQUFHLEtBQUssV0FBVyxVQUFhLEVBQUUsYUFBYTtBQUFBLE1BQzdDLEtBQUs7QUFBQSxJQUNQLEdBQUcsS0FBSyxNQUFNLEdBQUcsRUFBRSxlQUFlO0FBQUEsTUFDaEMsS0FBSztBQUFBLE1BQ0wsTUFBTTtBQUFBLElBQ1IsR0FBRyxFQUFFLGNBQWM7QUFBQSxNQUNqQixLQUFLO0FBQUEsTUFDTCxTQUFTLE1BQU0sS0FBSyxXQUFXO0FBQUEsSUFDakMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxlQUFlO0FBQUEsTUFDL0IsS0FBSztBQUFBLElBQ1AsR0FBRyxFQUFFLFlBQVk7QUFBQSxNQUNmLEtBQUs7QUFBQSxJQUNQLEdBQUcsS0FBSyxhQUFhLE9BQU8sS0FBSyxzQkFBc0IsSUFBSSxLQUFLLG1CQUFtQixDQUFDLENBQUMsQ0FBQztBQUFBLEVBQ3hGO0FBQUEsRUFDQSxJQUFJLEtBQUs7QUFDUCxXQUFPLFdBQVcsSUFBSTtBQUFBLEVBQ3hCO0FBQ0Y7QUFDQSxZQUFZLFFBQVE7QUFBQSxFQUNsQixPQUFPO0FBQUEsRUFDUCxLQUFLO0FBQUEsRUFDTCxJQUFJO0FBQ047IiwibmFtZXMiOltdLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19
