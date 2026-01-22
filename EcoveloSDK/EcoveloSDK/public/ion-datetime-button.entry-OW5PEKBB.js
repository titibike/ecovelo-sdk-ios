import {
  getHourCycle,
  getLocalizedDateTime,
  getLocalizedTime,
  getToday,
  parseDate
} from "./chunk-IRPX4VRE.js";
import {
  createColorClasses
} from "./chunk-5VP4V3BN.js";
import {
  getIonMode
} from "./chunk-TXLH22R2.js";
import {
  addEventListener,
  componentOnReady
} from "./chunk-RZR7LWTQ.js";
import {
  Host,
  getElement,
  h,
  printIonError,
  registerInstance
} from "./chunk-BFPTXCSH.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// node_modules/@ionic/core/dist/esm/ion-datetime-button.entry.js
var datetimeButtonIosCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host button{border-radius:8px;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:0px;margin-bottom:0px;position:relative;-webkit-transition:150ms color ease-in-out;transition:150ms color ease-in-out;border:none;background:var(--ion-color-step-300, var(--ion-background-color-step-300, #edeef0));color:var(--ion-text-color, #000);font-family:inherit;font-size:1rem;cursor:pointer;overflow:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none}:host(.time-active) #time-button,:host(.date-active) #date-button{color:var(--ion-color-base)}:host(.datetime-button-disabled){pointer-events:none}:host(.datetime-button-disabled) button{opacity:0.4}:host button{-webkit-padding-start:13px;padding-inline-start:13px;-webkit-padding-end:13px;padding-inline-end:13px;padding-top:7px;padding-bottom:7px}:host button.ion-activated{color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}";
var datetimeButtonMdCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host button{border-radius:8px;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:0px;margin-bottom:0px;position:relative;-webkit-transition:150ms color ease-in-out;transition:150ms color ease-in-out;border:none;background:var(--ion-color-step-300, var(--ion-background-color-step-300, #edeef0));color:var(--ion-text-color, #000);font-family:inherit;font-size:1rem;cursor:pointer;overflow:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none}:host(.time-active) #time-button,:host(.date-active) #date-button{color:var(--ion-color-base)}:host(.datetime-button-disabled){pointer-events:none}:host(.datetime-button-disabled) button{opacity:0.4}:host button{-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:6px;padding-bottom:6px}";
var DatetimeButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.datetimeEl = null;
    this.overlayEl = null;
    this.datetimePresentation = "date-time";
    this.datetimeActive = false;
    this.color = "primary";
    this.disabled = false;
    this.getParsedDateValues = (value) => {
      if (value === void 0 || value === null) {
        return [];
      }
      if (Array.isArray(value)) {
        return value;
      }
      return [value];
    };
    this.setDateTimeText = () => {
      var _a, _b, _c, _d, _e;
      const {
        datetimeEl,
        datetimePresentation
      } = this;
      if (!datetimeEl) {
        return;
      }
      const {
        value,
        locale,
        formatOptions,
        hourCycle,
        preferWheel,
        multiple,
        titleSelectedDatesFormatter
      } = datetimeEl;
      const parsedValues = this.getParsedDateValues(value);
      const parsedDatetimes = parseDate(parsedValues.length > 0 ? parsedValues : [getToday()]);
      if (!parsedDatetimes) {
        return;
      }
      const firstParsedDatetime = parsedDatetimes[0];
      const computedHourCycle = getHourCycle(locale, hourCycle);
      this.dateText = this.timeText = void 0;
      switch (datetimePresentation) {
        case "date-time":
        case "time-date":
          const dateText = getLocalizedDateTime(locale, firstParsedDatetime, (_a = formatOptions === null || formatOptions === void 0 ? void 0 : formatOptions.date) !== null && _a !== void 0 ? _a : {
            month: "short",
            day: "numeric",
            year: "numeric"
          });
          const timeText = getLocalizedTime(locale, firstParsedDatetime, computedHourCycle, formatOptions === null || formatOptions === void 0 ? void 0 : formatOptions.time);
          if (preferWheel) {
            this.dateText = `${dateText} ${timeText}`;
          } else {
            this.dateText = dateText;
            this.timeText = timeText;
          }
          break;
        case "date":
          if (multiple && parsedValues.length !== 1) {
            let headerText = `${parsedValues.length} days`;
            if (titleSelectedDatesFormatter !== void 0) {
              try {
                headerText = titleSelectedDatesFormatter(parsedValues);
              } catch (e) {
                printIonError("[ion-datetime-button] - Exception in provided `titleSelectedDatesFormatter`:", e);
              }
            }
            this.dateText = headerText;
          } else {
            this.dateText = getLocalizedDateTime(locale, firstParsedDatetime, (_b = formatOptions === null || formatOptions === void 0 ? void 0 : formatOptions.date) !== null && _b !== void 0 ? _b : {
              month: "short",
              day: "numeric",
              year: "numeric"
            });
          }
          break;
        case "time":
          this.timeText = getLocalizedTime(locale, firstParsedDatetime, computedHourCycle, formatOptions === null || formatOptions === void 0 ? void 0 : formatOptions.time);
          break;
        case "month-year":
          this.dateText = getLocalizedDateTime(locale, firstParsedDatetime, (_c = formatOptions === null || formatOptions === void 0 ? void 0 : formatOptions.date) !== null && _c !== void 0 ? _c : {
            month: "long",
            year: "numeric"
          });
          break;
        case "month":
          this.dateText = getLocalizedDateTime(locale, firstParsedDatetime, (_d = formatOptions === null || formatOptions === void 0 ? void 0 : formatOptions.time) !== null && _d !== void 0 ? _d : {
            month: "long"
          });
          break;
        case "year":
          this.dateText = getLocalizedDateTime(locale, firstParsedDatetime, (_e = formatOptions === null || formatOptions === void 0 ? void 0 : formatOptions.time) !== null && _e !== void 0 ? _e : {
            year: "numeric"
          });
          break;
      }
    };
    this.waitForDatetimeChanges = () => __async(this, null, function* () {
      const {
        datetimeEl
      } = this;
      if (!datetimeEl) {
        return Promise.resolve();
      }
      return new Promise((resolve) => {
        addEventListener(datetimeEl, "ionRender", resolve, {
          once: true
        });
      });
    });
    this.handleDateClick = (ev) => __async(this, null, function* () {
      const {
        datetimeEl,
        datetimePresentation
      } = this;
      if (!datetimeEl) {
        return;
      }
      let needsPresentationChange = false;
      switch (datetimePresentation) {
        case "date-time":
        case "time-date":
          const needsChange = datetimeEl.presentation !== "date";
          if (!datetimeEl.preferWheel && needsChange) {
            datetimeEl.presentation = "date";
            needsPresentationChange = true;
          }
          break;
      }
      this.selectedButton = "date";
      this.presentOverlay(ev, needsPresentationChange, this.dateTargetEl);
    });
    this.handleTimeClick = (ev) => {
      const {
        datetimeEl,
        datetimePresentation
      } = this;
      if (!datetimeEl) {
        return;
      }
      let needsPresentationChange = false;
      switch (datetimePresentation) {
        case "date-time":
        case "time-date":
          const needsChange = datetimeEl.presentation !== "time";
          if (needsChange) {
            datetimeEl.presentation = "time";
            needsPresentationChange = true;
          }
          break;
      }
      this.selectedButton = "time";
      this.presentOverlay(ev, needsPresentationChange, this.timeTargetEl);
    };
    this.presentOverlay = (ev, needsPresentationChange, triggerEl) => __async(this, null, function* () {
      const {
        overlayEl
      } = this;
      if (!overlayEl) {
        return;
      }
      if (overlayEl.tagName === "ION-POPOVER") {
        if (needsPresentationChange) {
          yield this.waitForDatetimeChanges();
        }
        overlayEl.present(Object.assign(Object.assign({}, ev), {
          detail: {
            ionShadowTarget: triggerEl
          }
        }));
      } else {
        overlayEl.present();
      }
    });
  }
  componentWillLoad() {
    return __async(this, null, function* () {
      const {
        datetime
      } = this;
      if (!datetime) {
        printIonError("[ion-datetime-button] - An ID associated with an ion-datetime instance is required to function properly.", this.el);
        return;
      }
      const datetimeEl = this.datetimeEl = document.getElementById(datetime);
      if (!datetimeEl) {
        printIonError(`[ion-datetime-button] - No ion-datetime instance found for ID '${datetime}'.`, this.el);
        return;
      }
      if (datetimeEl.tagName !== "ION-DATETIME") {
        printIonError(`[ion-datetime-button] - Expected an ion-datetime instance for ID '${datetime}' but received '${datetimeEl.tagName.toLowerCase()}' instead.`, datetimeEl);
        return;
      }
      const io = new IntersectionObserver((entries) => {
        const ev = entries[0];
        this.datetimeActive = ev.isIntersecting;
      }, {
        threshold: 0.01
      });
      io.observe(datetimeEl);
      const overlayEl = this.overlayEl = datetimeEl.closest("ion-modal, ion-popover");
      if (overlayEl) {
        overlayEl.classList.add("ion-datetime-button-overlay");
      }
      componentOnReady(datetimeEl, () => {
        const datetimePresentation = this.datetimePresentation = datetimeEl.presentation || "date-time";
        this.setDateTimeText();
        addEventListener(datetimeEl, "ionValueChange", this.setDateTimeText);
        switch (datetimePresentation) {
          case "date-time":
          case "date":
          case "month-year":
          case "month":
          case "year":
            this.selectedButton = "date";
            break;
          case "time-date":
          case "time":
            this.selectedButton = "time";
            break;
        }
      });
    });
  }
  render() {
    const {
      color,
      dateText,
      timeText,
      selectedButton,
      datetimeActive,
      disabled
    } = this;
    const mode = getIonMode(this);
    return h(Host, {
      key: "11d037e6ab061e5116842970760b04850b42f2c7",
      class: createColorClasses(color, {
        [mode]: true,
        [`${selectedButton}-active`]: datetimeActive,
        ["datetime-button-disabled"]: disabled
      })
    }, dateText && h("button", {
      key: "08ecb62da0fcbf7466a1f2403276712a3ff17fbc",
      class: "ion-activatable",
      id: "date-button",
      "aria-expanded": datetimeActive ? "true" : "false",
      onClick: this.handleDateClick,
      disabled,
      part: "native",
      ref: (el) => this.dateTargetEl = el
    }, h("slot", {
      key: "1c04853d4d23c0f1a594602bde44511c98355644",
      name: "date-target"
    }, dateText), mode === "md" && h("ion-ripple-effect", {
      key: "5fc566cd4bc885bcf983ce99e3dc65d7f485bf9b"
    })), timeText && h("button", {
      key: "c9c5c34ac338badf8659da22bea5829d62c51169",
      class: "ion-activatable",
      id: "time-button",
      "aria-expanded": datetimeActive ? "true" : "false",
      onClick: this.handleTimeClick,
      disabled,
      part: "native",
      ref: (el) => this.timeTargetEl = el
    }, h("slot", {
      key: "147a9d2069dbf737f6fc64787823d6d5af5aa653",
      name: "time-target"
    }, timeText), mode === "md" && h("ion-ripple-effect", {
      key: "70a5e25b75ed90ac6bba003468435f67aa9d8f0a"
    })));
  }
  get el() {
    return getElement(this);
  }
};
DatetimeButton.style = {
  ios: datetimeButtonIosCss,
  md: datetimeButtonMdCss
};
export {
  DatetimeButton as ion_datetime_button
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-datetime-button.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tZGF0ZXRpbWUtYnV0dG9uLmVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGogYXMgcHJpbnRJb25FcnJvciwgaCwgZCBhcyBIb3N0LCBnIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2luZGV4LTREeFk2X2dHLmpzJztcbmltcG9ydCB7IGYgYXMgYWRkRXZlbnRMaXN0ZW5lciwgYyBhcyBjb21wb25lbnRPblJlYWR5IH0gZnJvbSAnLi9oZWxwZXJzLThLU1FRR1F5LmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlQ29sb3JDbGFzc2VzIH0gZnJvbSAnLi90aGVtZS1EaVZKeXFsWC5qcyc7XG5pbXBvcnQgeyBiIGFzIGdldElvbk1vZGUgfSBmcm9tICcuL2lvbmljLWdsb2JhbC1DVFN5dWZoRi5qcyc7XG5pbXBvcnQgeyBzIGFzIHBhcnNlRGF0ZSwgeiBhcyBnZXRUb2RheSwgTyBhcyBnZXRIb3VyQ3ljbGUsIFEgYXMgZ2V0TG9jYWxpemVkRGF0ZVRpbWUsIFAgYXMgZ2V0TG9jYWxpemVkVGltZSB9IGZyb20gJy4vZGF0YS1DS0hNV3hmZS5qcyc7XG5jb25zdCBkYXRldGltZUJ1dHRvbklvc0NzcyA9IFwiOmhvc3R7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtd3JhcDp3cmFwO2ZsZXgtd3JhcDp3cmFwOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn06aG9zdCBidXR0b257Ym9yZGVyLXJhZGl1czo4cHg7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MnB4O21hcmdpbi1pbmxpbmUtc3RhcnQ6MnB4Oy13ZWJraXQtbWFyZ2luLWVuZDoycHg7bWFyZ2luLWlubGluZS1lbmQ6MnB4O21hcmdpbi10b3A6MHB4O21hcmdpbi1ib3R0b206MHB4O3Bvc2l0aW9uOnJlbGF0aXZlOy13ZWJraXQtdHJhbnNpdGlvbjoxNTBtcyBjb2xvciBlYXNlLWluLW91dDt0cmFuc2l0aW9uOjE1MG1zIGNvbG9yIGVhc2UtaW4tb3V0O2JvcmRlcjpub25lO2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXN0ZXAtMzAwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTMwMCwgI2VkZWVmMCkpO2NvbG9yOnZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZToxcmVtO2N1cnNvcjpwb2ludGVyO292ZXJmbG93OmhpZGRlbjstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmV9Omhvc3QoLnRpbWUtYWN0aXZlKSAjdGltZS1idXR0b24sOmhvc3QoLmRhdGUtYWN0aXZlKSAjZGF0ZS1idXR0b257Y29sb3I6dmFyKC0taW9uLWNvbG9yLWJhc2UpfTpob3N0KC5kYXRldGltZS1idXR0b24tZGlzYWJsZWQpe3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3QoLmRhdGV0aW1lLWJ1dHRvbi1kaXNhYmxlZCkgYnV0dG9ue29wYWNpdHk6MC40fTpob3N0IGJ1dHRvbnstd2Via2l0LXBhZGRpbmctc3RhcnQ6MTNweDtwYWRkaW5nLWlubGluZS1zdGFydDoxM3B4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MTNweDtwYWRkaW5nLWlubGluZS1lbmQ6MTNweDtwYWRkaW5nLXRvcDo3cHg7cGFkZGluZy1ib3R0b206N3B4fTpob3N0IGJ1dHRvbi5pb24tYWN0aXZhdGVke2NvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCwgdmFyKC0taW9uLXRleHQtY29sb3Itc3RlcC00MDAsICM2NjY2NjYpKX1cIjtcbmNvbnN0IGRhdGV0aW1lQnV0dG9uTWRDc3MgPSBcIjpob3N0e2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LXdyYXA6d3JhcDtmbGV4LXdyYXA6d3JhcDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9Omhvc3QgYnV0dG9ue2JvcmRlci1yYWRpdXM6OHB4Oy13ZWJraXQtbWFyZ2luLXN0YXJ0OjJweDttYXJnaW4taW5saW5lLXN0YXJ0OjJweDstd2Via2l0LW1hcmdpbi1lbmQ6MnB4O21hcmdpbi1pbmxpbmUtZW5kOjJweDttYXJnaW4tdG9wOjBweDttYXJnaW4tYm90dG9tOjBweDtwb3NpdGlvbjpyZWxhdGl2ZTstd2Via2l0LXRyYW5zaXRpb246MTUwbXMgY29sb3IgZWFzZS1pbi1vdXQ7dHJhbnNpdGlvbjoxNTBtcyBjb2xvciBlYXNlLWluLW91dDtib3JkZXI6bm9uZTtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1zdGVwLTMwMCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3Itc3RlcC0zMDAsICNlZGVlZjApKTtjb2xvcjp2YXIoLS1pb24tdGV4dC1jb2xvciwgIzAwMCk7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6MXJlbTtjdXJzb3I6cG9pbnRlcjtvdmVyZmxvdzpoaWRkZW47LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lfTpob3N0KC50aW1lLWFjdGl2ZSkgI3RpbWUtYnV0dG9uLDpob3N0KC5kYXRlLWFjdGl2ZSkgI2RhdGUtYnV0dG9ue2NvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKX06aG9zdCguZGF0ZXRpbWUtYnV0dG9uLWRpc2FibGVkKXtwb2ludGVyLWV2ZW50czpub25lfTpob3N0KC5kYXRldGltZS1idXR0b24tZGlzYWJsZWQpIGJ1dHRvbntvcGFjaXR5OjAuNH06aG9zdCBidXR0b257LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjEycHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MTJweDstd2Via2l0LXBhZGRpbmctZW5kOjEycHg7cGFkZGluZy1pbmxpbmUtZW5kOjEycHg7cGFkZGluZy10b3A6NnB4O3BhZGRpbmctYm90dG9tOjZweH1cIjtcbmNvbnN0IERhdGV0aW1lQnV0dG9uID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmRhdGV0aW1lRWwgPSBudWxsO1xuICAgIHRoaXMub3ZlcmxheUVsID0gbnVsbDtcbiAgICB0aGlzLmRhdGV0aW1lUHJlc2VudGF0aW9uID0gJ2RhdGUtdGltZSc7XG4gICAgdGhpcy5kYXRldGltZUFjdGl2ZSA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIFRoZSBjb2xvciB0byB1c2UgZnJvbSB5b3VyIGFwcGxpY2F0aW9uJ3MgY29sb3IgcGFsZXR0ZS5cbiAgICAgKiBEZWZhdWx0IG9wdGlvbnMgYXJlOiBgXCJwcmltYXJ5XCJgLCBgXCJzZWNvbmRhcnlcImAsIGBcInRlcnRpYXJ5XCJgLCBgXCJzdWNjZXNzXCJgLCBgXCJ3YXJuaW5nXCJgLCBgXCJkYW5nZXJcImAsIGBcImxpZ2h0XCJgLCBgXCJtZWRpdW1cImAsIGFuZCBgXCJkYXJrXCJgLlxuICAgICAqIEZvciBtb3JlIGluZm9ybWF0aW9uIG9uIGNvbG9ycywgc2VlIFt0aGVtaW5nXSgvZG9jcy90aGVtaW5nL2Jhc2ljcykuXG4gICAgICovXG4gICAgdGhpcy5jb2xvciA9ICdwcmltYXJ5JztcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIHRoZSB1c2VyIGNhbm5vdCBpbnRlcmFjdCB3aXRoIHRoZSBidXR0b24uXG4gICAgICovXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIEFjY2VwdHMgb25lIG9yIG1vcmUgc3RyaW5nIHZhbHVlcyBhbmQgY29udmVydHNcbiAgICAgKiB0aGVtIHRvIERhdGV0aW1lUGFydHMuIFRoaXMgaXMgZG9uZSBzbyBkYXRldGltZS1idXR0b25cbiAgICAgKiBjYW4gd29yayB3aXRoIGFuIGFycmF5IGludGVybmFsbHkgYW5kIG5vdCBuZWVkXG4gICAgICogdG8ga2VlcCBjaGVja2luZyBpZiB0aGUgZGF0ZXRpbWUgdmFsdWUgaXMgYHN0cmluZ2Agb3IgYHN0cmluZ1tdYC5cbiAgICAgKi9cbiAgICB0aGlzLmdldFBhcnNlZERhdGVWYWx1ZXMgPSB2YWx1ZSA9PiB7XG4gICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFt2YWx1ZV07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDaGVjayB0aGUgdmFsdWUgcHJvcGVydHkgb24gdGhlIGxpbmtlZFxuICAgICAqIGlvbi1kYXRldGltZSBhbmQgdGhlbiBmb3JtYXQgaXQgYWNjb3JkaW5nXG4gICAgICogdG8gdGhlIGxvY2FsZSBzcGVjaWZpZWQgb24gaW9uLWRhdGV0aW1lLlxuICAgICAqL1xuICAgIHRoaXMuc2V0RGF0ZVRpbWVUZXh0ID0gKCkgPT4ge1xuICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZTtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZGF0ZXRpbWVFbCxcbiAgICAgICAgZGF0ZXRpbWVQcmVzZW50YXRpb25cbiAgICAgIH0gPSB0aGlzO1xuICAgICAgaWYgKCFkYXRldGltZUVsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHtcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgZm9ybWF0T3B0aW9ucyxcbiAgICAgICAgaG91ckN5Y2xlLFxuICAgICAgICBwcmVmZXJXaGVlbCxcbiAgICAgICAgbXVsdGlwbGUsXG4gICAgICAgIHRpdGxlU2VsZWN0ZWREYXRlc0Zvcm1hdHRlclxuICAgICAgfSA9IGRhdGV0aW1lRWw7XG4gICAgICBjb25zdCBwYXJzZWRWYWx1ZXMgPSB0aGlzLmdldFBhcnNlZERhdGVWYWx1ZXModmFsdWUpO1xuICAgICAgLyoqXG4gICAgICAgKiBCb3RoIGlvbi1kYXRldGltZSBhbmQgaW9uLWRhdGV0aW1lLWJ1dHRvbiBkZWZhdWx0XG4gICAgICAgKiB0byB0b2RheSdzIGRhdGUgYW5kIHRpbWUgaWYgbm8gdmFsdWUgaXMgc2V0LlxuICAgICAgICovXG4gICAgICBjb25zdCBwYXJzZWREYXRldGltZXMgPSBwYXJzZURhdGUocGFyc2VkVmFsdWVzLmxlbmd0aCA+IDAgPyBwYXJzZWRWYWx1ZXMgOiBbZ2V0VG9kYXkoKV0pO1xuICAgICAgaWYgKCFwYXJzZWREYXRldGltZXMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBJZiBkZXZlbG9wZXJzIGluY29ycmVjdGx5IHVzZSBtdWx0aXBsZT1cInRydWVcIlxuICAgICAgICogd2l0aCBub24gXCJkYXRlXCIgZGF0ZXRpbWVzLCB0aGVuIGp1c3Qgc2VsZWN0XG4gICAgICAgKiB0aGUgZmlyc3QgdmFsdWUgc28gdGhlIGludGVyZmFjZSBkb2VzXG4gICAgICAgKiBub3QgYXBwZWFyIGJyb2tlbi4gRGF0ZXRpbWUgd2lsbCBwcm92aWRlIGFcbiAgICAgICAqIHdhcm5pbmcgaW4gdGhlIGNvbnNvbGUuXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IGZpcnN0UGFyc2VkRGF0ZXRpbWUgPSBwYXJzZWREYXRldGltZXNbMF07XG4gICAgICBjb25zdCBjb21wdXRlZEhvdXJDeWNsZSA9IGdldEhvdXJDeWNsZShsb2NhbGUsIGhvdXJDeWNsZSk7XG4gICAgICB0aGlzLmRhdGVUZXh0ID0gdGhpcy50aW1lVGV4dCA9IHVuZGVmaW5lZDtcbiAgICAgIHN3aXRjaCAoZGF0ZXRpbWVQcmVzZW50YXRpb24pIHtcbiAgICAgICAgY2FzZSAnZGF0ZS10aW1lJzpcbiAgICAgICAgY2FzZSAndGltZS1kYXRlJzpcbiAgICAgICAgICBjb25zdCBkYXRlVGV4dCA9IGdldExvY2FsaXplZERhdGVUaW1lKGxvY2FsZSwgZmlyc3RQYXJzZWREYXRldGltZSwgKF9hID0gZm9ybWF0T3B0aW9ucyA9PT0gbnVsbCB8fCBmb3JtYXRPcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBmb3JtYXRPcHRpb25zLmRhdGUpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHtcbiAgICAgICAgICAgIG1vbnRoOiAnc2hvcnQnLFxuICAgICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgICB5ZWFyOiAnbnVtZXJpYydcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25zdCB0aW1lVGV4dCA9IGdldExvY2FsaXplZFRpbWUobG9jYWxlLCBmaXJzdFBhcnNlZERhdGV0aW1lLCBjb21wdXRlZEhvdXJDeWNsZSwgZm9ybWF0T3B0aW9ucyA9PT0gbnVsbCB8fCBmb3JtYXRPcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBmb3JtYXRPcHRpb25zLnRpbWUpO1xuICAgICAgICAgIGlmIChwcmVmZXJXaGVlbCkge1xuICAgICAgICAgICAgdGhpcy5kYXRlVGV4dCA9IGAke2RhdGVUZXh0fSAke3RpbWVUZXh0fWA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGF0ZVRleHQgPSBkYXRlVGV4dDtcbiAgICAgICAgICAgIHRoaXMudGltZVRleHQgPSB0aW1lVGV4dDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgICAgIGlmIChtdWx0aXBsZSAmJiBwYXJzZWRWYWx1ZXMubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICBsZXQgaGVhZGVyVGV4dCA9IGAke3BhcnNlZFZhbHVlcy5sZW5ndGh9IGRheXNgOyAvLyBkZWZhdWx0L2ZhbGxiYWNrIGZvciBtdWx0aXBsZSBzZWxlY3Rpb25cbiAgICAgICAgICAgIGlmICh0aXRsZVNlbGVjdGVkRGF0ZXNGb3JtYXR0ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGhlYWRlclRleHQgPSB0aXRsZVNlbGVjdGVkRGF0ZXNGb3JtYXR0ZXIocGFyc2VkVmFsdWVzKTtcbiAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHByaW50SW9uRXJyb3IoJ1tpb24tZGF0ZXRpbWUtYnV0dG9uXSAtIEV4Y2VwdGlvbiBpbiBwcm92aWRlZCBgdGl0bGVTZWxlY3RlZERhdGVzRm9ybWF0dGVyYDonLCBlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kYXRlVGV4dCA9IGhlYWRlclRleHQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGF0ZVRleHQgPSBnZXRMb2NhbGl6ZWREYXRlVGltZShsb2NhbGUsIGZpcnN0UGFyc2VkRGF0ZXRpbWUsIChfYiA9IGZvcm1hdE9wdGlvbnMgPT09IG51bGwgfHwgZm9ybWF0T3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZm9ybWF0T3B0aW9ucy5kYXRlKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiB7XG4gICAgICAgICAgICAgIG1vbnRoOiAnc2hvcnQnLFxuICAgICAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgICAgICAgeWVhcjogJ251bWVyaWMnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3RpbWUnOlxuICAgICAgICAgIHRoaXMudGltZVRleHQgPSBnZXRMb2NhbGl6ZWRUaW1lKGxvY2FsZSwgZmlyc3RQYXJzZWREYXRldGltZSwgY29tcHV0ZWRIb3VyQ3ljbGUsIGZvcm1hdE9wdGlvbnMgPT09IG51bGwgfHwgZm9ybWF0T3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZm9ybWF0T3B0aW9ucy50aW1lKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbW9udGgteWVhcic6XG4gICAgICAgICAgdGhpcy5kYXRlVGV4dCA9IGdldExvY2FsaXplZERhdGVUaW1lKGxvY2FsZSwgZmlyc3RQYXJzZWREYXRldGltZSwgKF9jID0gZm9ybWF0T3B0aW9ucyA9PT0gbnVsbCB8fCBmb3JtYXRPcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBmb3JtYXRPcHRpb25zLmRhdGUpICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IHtcbiAgICAgICAgICAgIG1vbnRoOiAnbG9uZycsXG4gICAgICAgICAgICB5ZWFyOiAnbnVtZXJpYydcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICAgIHRoaXMuZGF0ZVRleHQgPSBnZXRMb2NhbGl6ZWREYXRlVGltZShsb2NhbGUsIGZpcnN0UGFyc2VkRGF0ZXRpbWUsIChfZCA9IGZvcm1hdE9wdGlvbnMgPT09IG51bGwgfHwgZm9ybWF0T3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZm9ybWF0T3B0aW9ucy50aW1lKSAhPT0gbnVsbCAmJiBfZCAhPT0gdm9pZCAwID8gX2QgOiB7XG4gICAgICAgICAgICBtb250aDogJ2xvbmcnXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3llYXInOlxuICAgICAgICAgIHRoaXMuZGF0ZVRleHQgPSBnZXRMb2NhbGl6ZWREYXRlVGltZShsb2NhbGUsIGZpcnN0UGFyc2VkRGF0ZXRpbWUsIChfZSA9IGZvcm1hdE9wdGlvbnMgPT09IG51bGwgfHwgZm9ybWF0T3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZm9ybWF0T3B0aW9ucy50aW1lKSAhPT0gbnVsbCAmJiBfZSAhPT0gdm9pZCAwID8gX2UgOiB7XG4gICAgICAgICAgICB5ZWFyOiAnbnVtZXJpYydcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFdhaXRzIGZvciB0aGUgaW9uLWRhdGV0aW1lIHRvIHJlLXJlbmRlci5cbiAgICAgKiBUaGlzIGlzIG5lZWRlZCBpbiBvcmRlciB0byBjb3JyZWN0bHkgcG9zaXRpb25cbiAgICAgKiBhIHBvcG92ZXIgcmVsYXRpdmUgdG8gdGhlIHRyaWdnZXIgZWxlbWVudC5cbiAgICAgKi9cbiAgICB0aGlzLndhaXRGb3JEYXRldGltZUNoYW5nZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGRhdGV0aW1lRWxcbiAgICAgIH0gPSB0aGlzO1xuICAgICAgaWYgKCFkYXRldGltZUVsKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcihkYXRldGltZUVsLCAnaW9uUmVuZGVyJywgcmVzb2x2ZSwge1xuICAgICAgICAgIG9uY2U6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlRGF0ZUNsaWNrID0gYXN5bmMgZXYgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBkYXRldGltZUVsLFxuICAgICAgICBkYXRldGltZVByZXNlbnRhdGlvblxuICAgICAgfSA9IHRoaXM7XG4gICAgICBpZiAoIWRhdGV0aW1lRWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IG5lZWRzUHJlc2VudGF0aW9uQ2hhbmdlID0gZmFsc2U7XG4gICAgICAvKipcbiAgICAgICAqIFdoZW4gY2xpY2tpbmcgdGhlIGRhdGUgYnV0dG9uLFxuICAgICAgICogd2UgbmVlZCB0byBtYWtlIHN1cmUgdGhhdCBvbmx5IGEgZGF0ZVxuICAgICAgICogcGlja2VyIGlzIGRpc3BsYXllZC4gRm9yIHByZXNlbnRhdGlvbiBzdHlsZXNcbiAgICAgICAqIHRoYXQgZGlzcGxheSBjb250ZW50IG90aGVyIHRoYW4gYSBkYXRlIHBpY2tlcixcbiAgICAgICAqIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBwcmVzZW50YXRpb24gc3R5bGUuXG4gICAgICAgKi9cbiAgICAgIHN3aXRjaCAoZGF0ZXRpbWVQcmVzZW50YXRpb24pIHtcbiAgICAgICAgY2FzZSAnZGF0ZS10aW1lJzpcbiAgICAgICAgY2FzZSAndGltZS1kYXRlJzpcbiAgICAgICAgICBjb25zdCBuZWVkc0NoYW5nZSA9IGRhdGV0aW1lRWwucHJlc2VudGF0aW9uICE9PSAnZGF0ZSc7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogVGhlIGRhdGUrdGltZSB3aGVlbCBwaWNrZXJcbiAgICAgICAgICAgKiBzaG93cyBkYXRlIGFuZCB0aW1lIHRvZ2V0aGVyLFxuICAgICAgICAgICAqIHNvIGRvIG5vdCBhZGp1c3QgdGhlIHByZXNlbnRhdGlvblxuICAgICAgICAgICAqIGluIHRoYXQgY2FzZS5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBpZiAoIWRhdGV0aW1lRWwucHJlZmVyV2hlZWwgJiYgbmVlZHNDaGFuZ2UpIHtcbiAgICAgICAgICAgIGRhdGV0aW1lRWwucHJlc2VudGF0aW9uID0gJ2RhdGUnO1xuICAgICAgICAgICAgbmVlZHNQcmVzZW50YXRpb25DaGFuZ2UgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogVHJhY2sgd2hpY2ggYnV0dG9uIHdhcyBjbGlja2VkXG4gICAgICAgKiBzbyB0aGF0IGl0IGNhbiBoYXZlIHRoZSBjb3JyZWN0XG4gICAgICAgKiBhY3RpdmF0ZWQgc3R5bGVzIGFwcGxpZWQgd2hlblxuICAgICAgICogdGhlIG1vZGFsL3BvcG92ZXIgY29udGFpbmluZ1xuICAgICAgICogdGhlIGRhdGV0aW1lIGlzIG9wZW5lZC5cbiAgICAgICAqL1xuICAgICAgdGhpcy5zZWxlY3RlZEJ1dHRvbiA9ICdkYXRlJztcbiAgICAgIHRoaXMucHJlc2VudE92ZXJsYXkoZXYsIG5lZWRzUHJlc2VudGF0aW9uQ2hhbmdlLCB0aGlzLmRhdGVUYXJnZXRFbCk7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZVRpbWVDbGljayA9IGV2ID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZGF0ZXRpbWVFbCxcbiAgICAgICAgZGF0ZXRpbWVQcmVzZW50YXRpb25cbiAgICAgIH0gPSB0aGlzO1xuICAgICAgaWYgKCFkYXRldGltZUVsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxldCBuZWVkc1ByZXNlbnRhdGlvbkNoYW5nZSA9IGZhbHNlO1xuICAgICAgLyoqXG4gICAgICAgKiBXaGVuIGNsaWNraW5nIHRoZSB0aW1lIGJ1dHRvbixcbiAgICAgICAqIHdlIG5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgb25seSBhIHRpbWVcbiAgICAgICAqIHBpY2tlciBpcyBkaXNwbGF5ZWQuIEZvciBwcmVzZW50YXRpb24gc3R5bGVzXG4gICAgICAgKiB0aGF0IGRpc3BsYXkgY29udGVudCBvdGhlciB0aGFuIGEgdGltZSBwaWNrZXIsXG4gICAgICAgKiB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgcHJlc2VudGF0aW9uIHN0eWxlLlxuICAgICAgICovXG4gICAgICBzd2l0Y2ggKGRhdGV0aW1lUHJlc2VudGF0aW9uKSB7XG4gICAgICAgIGNhc2UgJ2RhdGUtdGltZSc6XG4gICAgICAgIGNhc2UgJ3RpbWUtZGF0ZSc6XG4gICAgICAgICAgY29uc3QgbmVlZHNDaGFuZ2UgPSBkYXRldGltZUVsLnByZXNlbnRhdGlvbiAhPT0gJ3RpbWUnO1xuICAgICAgICAgIGlmIChuZWVkc0NoYW5nZSkge1xuICAgICAgICAgICAgZGF0ZXRpbWVFbC5wcmVzZW50YXRpb24gPSAndGltZSc7XG4gICAgICAgICAgICBuZWVkc1ByZXNlbnRhdGlvbkNoYW5nZSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBUcmFjayB3aGljaCBidXR0b24gd2FzIGNsaWNrZWRcbiAgICAgICAqIHNvIHRoYXQgaXQgY2FuIGhhdmUgdGhlIGNvcnJlY3RcbiAgICAgICAqIGFjdGl2YXRlZCBzdHlsZXMgYXBwbGllZCB3aGVuXG4gICAgICAgKiB0aGUgbW9kYWwvcG9wb3ZlciBjb250YWluaW5nXG4gICAgICAgKiB0aGUgZGF0ZXRpbWUgaXMgb3BlbmVkLlxuICAgICAgICovXG4gICAgICB0aGlzLnNlbGVjdGVkQnV0dG9uID0gJ3RpbWUnO1xuICAgICAgdGhpcy5wcmVzZW50T3ZlcmxheShldiwgbmVlZHNQcmVzZW50YXRpb25DaGFuZ2UsIHRoaXMudGltZVRhcmdldEVsKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIElmIHRoZSBkYXRldGltZSBpcyBwcmVzZW50ZWQgaW4gYW5cbiAgICAgKiBvdmVybGF5LCB0aGUgZGF0ZXRpbWUgYW5kIG92ZXJsYXlcbiAgICAgKiBzaG91bGQgYmUgYXBwcm9wcmlhdGVseSBzaXplZC5cbiAgICAgKiBUaGVzZSBjbGFzc2VzIHByb3ZpZGUgZGVmYXVsdCBzaXppbmcgdmFsdWVzXG4gICAgICogdGhhdCBkZXZlbG9wZXJzIGNhbiBjdXN0b21pemUuXG4gICAgICogVGhlIGdvYWwgaXMgdG8gcHJvdmlkZSBhbiBvdmVybGF5IHRoYXQgaXNcbiAgICAgKiByZWFzb25hYmx5IHNpemVkIHdpdGggYSBkYXRldGltZSB0aGF0XG4gICAgICogZmlsbHMgdGhlIGVudGlyZSBjb250YWluZXIuXG4gICAgICovXG4gICAgdGhpcy5wcmVzZW50T3ZlcmxheSA9IGFzeW5jIChldiwgbmVlZHNQcmVzZW50YXRpb25DaGFuZ2UsIHRyaWdnZXJFbCkgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBvdmVybGF5RWxcbiAgICAgIH0gPSB0aGlzO1xuICAgICAgaWYgKCFvdmVybGF5RWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG92ZXJsYXlFbC50YWdOYW1lID09PSAnSU9OLVBPUE9WRVInKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaGVuIHRoZSBwcmVzZW50YXRpb24gb24gZGF0ZXRpbWUgY2hhbmdlcyxcbiAgICAgICAgICogd2UgbmVlZCB0byB3YWl0IGZvciB0aGUgY29tcG9uZW50IHRvIHJlLXJlbmRlclxuICAgICAgICAgKiBvdGhlcndpc2UgdGhlIGNvbXB1dGVkIHdpZHRoL2hlaWdodCBvZiB0aGVcbiAgICAgICAgICogcG9wb3ZlciBjb250ZW50IHdpbGwgYmUgd3JvbmcsIGNhdXNpbmdcbiAgICAgICAgICogdGhlIHBvcG92ZXIgdG8gbm90IGFsaWduIHdpdGggdGhlIHRyaWdnZXIgZWxlbWVudC5cbiAgICAgICAgICovXG4gICAgICAgIGlmIChuZWVkc1ByZXNlbnRhdGlvbkNoYW5nZSkge1xuICAgICAgICAgIGF3YWl0IHRoaXMud2FpdEZvckRhdGV0aW1lQ2hhbmdlcygpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXZSBwYXNzIHRoZSB0cmlnZ2VyIGJ1dHRvbiBlbGVtZW50XG4gICAgICAgICAqIHNvIHRoYXQgdGhlIHBvcG92ZXIgYWxpZ25zIHdpdGggdGhlIGluZGl2aWR1YWxcbiAgICAgICAgICogYnV0dG9uIHRoYXQgd2FzIGNsaWNrZWQsIG5vdCB0aGUgY29tcG9uZW50IGNvbnRhaW5lci5cbiAgICAgICAgICovXG4gICAgICAgIG92ZXJsYXlFbC5wcmVzZW50KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZXYpLCB7XG4gICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICBpb25TaGFkb3dUYXJnZXQ6IHRyaWdnZXJFbFxuICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3ZlcmxheUVsLnByZXNlbnQoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIGFzeW5jIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGRhdGV0aW1lXG4gICAgfSA9IHRoaXM7XG4gICAgaWYgKCFkYXRldGltZSkge1xuICAgICAgcHJpbnRJb25FcnJvcignW2lvbi1kYXRldGltZS1idXR0b25dIC0gQW4gSUQgYXNzb2NpYXRlZCB3aXRoIGFuIGlvbi1kYXRldGltZSBpbnN0YW5jZSBpcyByZXF1aXJlZCB0byBmdW5jdGlvbiBwcm9wZXJseS4nLCB0aGlzLmVsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZGF0ZXRpbWVFbCA9IHRoaXMuZGF0ZXRpbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRhdGV0aW1lKTtcbiAgICBpZiAoIWRhdGV0aW1lRWwpIHtcbiAgICAgIHByaW50SW9uRXJyb3IoYFtpb24tZGF0ZXRpbWUtYnV0dG9uXSAtIE5vIGlvbi1kYXRldGltZSBpbnN0YW5jZSBmb3VuZCBmb3IgSUQgJyR7ZGF0ZXRpbWV9Jy5gLCB0aGlzLmVsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhlIGVsZW1lbnQgcmVmZXJlbmNlIG11c3QgYmUgYW4gaW9uLWRhdGV0aW1lLiBQcmludCBhbiBlcnJvclxuICAgICAqIGlmIGEgbm9uLWRhdGV0aW1lIGVsZW1lbnQgd2FzIHByb3ZpZGVkLlxuICAgICAqL1xuICAgIGlmIChkYXRldGltZUVsLnRhZ05hbWUgIT09ICdJT04tREFURVRJTUUnKSB7XG4gICAgICBwcmludElvbkVycm9yKGBbaW9uLWRhdGV0aW1lLWJ1dHRvbl0gLSBFeHBlY3RlZCBhbiBpb24tZGF0ZXRpbWUgaW5zdGFuY2UgZm9yIElEICcke2RhdGV0aW1lfScgYnV0IHJlY2VpdmVkICcke2RhdGV0aW1lRWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpfScgaW5zdGVhZC5gLCBkYXRldGltZUVsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2luY2UgdGhlIGRhdGV0aW1lIGNhbiBiZSB1c2VkIGluIGFueSBjb250ZXh0IChvdmVybGF5cywgYWNjb3JkaW9uLCBldGMpXG4gICAgICogd2UgdHJhY2sgd2hlbiBpdCBpcyB2aXNpYmxlIHRvIGRldGVybWluZSB3aGVuIGl0IGlzIGFjdGl2ZS5cbiAgICAgKiBUaGlzIGluZm9ybXMgd2hpY2ggYnV0dG9uIGlzIGhpZ2hsaWdodGVkIGFzIHdlbGwgYXMgdGhlXG4gICAgICogYXJpYS1leHBhbmRlZCBzdGF0ZS5cbiAgICAgKi9cbiAgICBjb25zdCBpbyA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcbiAgICAgIGNvbnN0IGV2ID0gZW50cmllc1swXTtcbiAgICAgIHRoaXMuZGF0ZXRpbWVBY3RpdmUgPSBldi5pc0ludGVyc2VjdGluZztcbiAgICB9LCB7XG4gICAgICB0aHJlc2hvbGQ6IDAuMDFcbiAgICB9KTtcbiAgICBpby5vYnNlcnZlKGRhdGV0aW1lRWwpO1xuICAgIC8qKlxuICAgICAqIEdldCBhIHJlZmVyZW5jZSB0byBhbnkgbW9kYWwvcG9wb3ZlclxuICAgICAqIHRoZSBkYXRldGltZSBpcyBiZWluZyB1c2VkIGluIHNvIHdlIGNhblxuICAgICAqIGNvcnJlY3RseSBzaXplIGl0IHdoZW4gaXQgaXMgcHJlc2VudGVkLlxuICAgICAqL1xuICAgIGNvbnN0IG92ZXJsYXlFbCA9IHRoaXMub3ZlcmxheUVsID0gZGF0ZXRpbWVFbC5jbG9zZXN0KCdpb24tbW9kYWwsIGlvbi1wb3BvdmVyJyk7XG4gICAgLyoqXG4gICAgICogVGhlIC5pb24tZGF0ZXRpbWUtYnV0dG9uLW92ZXJsYXkgY2xhc3MgY29udGFpbnNcbiAgICAgKiBzdHlsZXMgdGhhdCBhbGxvdyBhbnkgbW9kYWwvcG9wb3ZlciB0byBiZVxuICAgICAqIHNpemVkIGFjY29yZGluZyB0byB0aGUgZGltZW5zaW9ucyBvZiB0aGUgZGF0ZXRpbWUuXG4gICAgICogSWYgZGV2ZWxvcGVycyB3YW50IGEgc21hbGxlci9sYXJnZXIgb3ZlcmxheSBhbGwgdGhleSBuZWVkXG4gICAgICogdG8gZG8gaXMgY2hhbmdlIHRoZSB3aWR0aC9oZWlnaHQgb2YgdGhlIGRhdGV0aW1lLlxuICAgICAqIEFkZGl0aW9uYWxseSwgdGhpcyBsZXRzIHVzIGF2b2lkIGhhdmluZyB0byBzZXRcbiAgICAgKiBleHBsaWNpdCB3aWR0aHMgb24gZWFjaCB2YXJpYW50IG9mIGRhdGV0aW1lLlxuICAgICAqL1xuICAgIGlmIChvdmVybGF5RWwpIHtcbiAgICAgIG92ZXJsYXlFbC5jbGFzc0xpc3QuYWRkKCdpb24tZGF0ZXRpbWUtYnV0dG9uLW92ZXJsYXknKTtcbiAgICB9XG4gICAgY29tcG9uZW50T25SZWFkeShkYXRldGltZUVsLCAoKSA9PiB7XG4gICAgICBjb25zdCBkYXRldGltZVByZXNlbnRhdGlvbiA9IHRoaXMuZGF0ZXRpbWVQcmVzZW50YXRpb24gPSBkYXRldGltZUVsLnByZXNlbnRhdGlvbiB8fCAnZGF0ZS10aW1lJztcbiAgICAgIC8qKlxuICAgICAgICogU2V0IHRoZSBpbml0aWFsIGRpc3BsYXlcbiAgICAgICAqIGluIHRoZSByZW5kZXJlZCBidXR0b25zLlxuICAgICAgICpcbiAgICAgICAqIEZyb20gdGhlcmUsIHdlIG5lZWQgdG8gbGlzdGVuXG4gICAgICAgKiBmb3IgaW9uQ2hhbmdlIHRvIGJlIGVtaXR0ZWRcbiAgICAgICAqIGZyb20gZGF0ZXRpbWUgc28gd2Uga25vdyB3aGVuXG4gICAgICAgKiB0byByZS1yZW5kZXIgdGhlIGRpc3BsYXllZFxuICAgICAgICogdGV4dCBpbiB0aGUgYnV0dG9ucy5cbiAgICAgICAqL1xuICAgICAgdGhpcy5zZXREYXRlVGltZVRleHQoKTtcbiAgICAgIGFkZEV2ZW50TGlzdGVuZXIoZGF0ZXRpbWVFbCwgJ2lvblZhbHVlQ2hhbmdlJywgdGhpcy5zZXREYXRlVGltZVRleHQpO1xuICAgICAgLyoqXG4gICAgICAgKiBDb25maWd1cmUgdGhlIGluaXRpYWwgc2VsZWN0ZWQgYnV0dG9uXG4gICAgICAgKiBpbiB0aGUgZXZlbnQgdGhhdCB0aGUgZGF0ZXRpbWUgaXMgZGlzcGxheWVkXG4gICAgICAgKiB3aXRob3V0IGNsaWNraW5nIG9uZSBvZiB0aGUgZGF0ZXRpbWUgYnV0dG9ucy5cbiAgICAgICAqIEZvciBleGFtcGxlLCBhIGRhdGV0aW1lIGNvdWxkIGJlIGV4cGFuZGVkXG4gICAgICAgKiBpbiBhbiBhY2NvcmRpb24uIEluIHRoaXMgY2FzZSB1c2VycyBvbmx5XG4gICAgICAgKiBuZWVkIHRvIGNsaWNrIHRoZSBhY2NvcmRpb24gaGVhZGVyIHRvIHNob3dcbiAgICAgICAqIHRoZSBkYXRldGltZS5cbiAgICAgICAqL1xuICAgICAgc3dpdGNoIChkYXRldGltZVByZXNlbnRhdGlvbikge1xuICAgICAgICBjYXNlICdkYXRlLXRpbWUnOlxuICAgICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgY2FzZSAnbW9udGgteWVhcic6XG4gICAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgY2FzZSAneWVhcic6XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEJ1dHRvbiA9ICdkYXRlJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAndGltZS1kYXRlJzpcbiAgICAgICAgY2FzZSAndGltZSc6XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEJ1dHRvbiA9ICd0aW1lJztcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY29sb3IsXG4gICAgICBkYXRlVGV4dCxcbiAgICAgIHRpbWVUZXh0LFxuICAgICAgc2VsZWN0ZWRCdXR0b24sXG4gICAgICBkYXRldGltZUFjdGl2ZSxcbiAgICAgIGRpc2FibGVkXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgcmV0dXJuIGgoSG9zdCwge1xuICAgICAga2V5OiAnMTFkMDM3ZTZhYjA2MWU1MTE2ODQyOTcwNzYwYjA0ODUwYjQyZjJjNycsXG4gICAgICBjbGFzczogY3JlYXRlQ29sb3JDbGFzc2VzKGNvbG9yLCB7XG4gICAgICAgIFttb2RlXTogdHJ1ZSxcbiAgICAgICAgW2Ake3NlbGVjdGVkQnV0dG9ufS1hY3RpdmVgXTogZGF0ZXRpbWVBY3RpdmUsXG4gICAgICAgIFsnZGF0ZXRpbWUtYnV0dG9uLWRpc2FibGVkJ106IGRpc2FibGVkXG4gICAgICB9KVxuICAgIH0sIGRhdGVUZXh0ICYmIGgoXCJidXR0b25cIiwge1xuICAgICAga2V5OiAnMDhlY2I2MmRhMGZjYmY3NDY2YTFmMjQwMzI3NjcxMmEzZmYxN2ZiYycsXG4gICAgICBjbGFzczogXCJpb24tYWN0aXZhdGFibGVcIixcbiAgICAgIGlkOiBcImRhdGUtYnV0dG9uXCIsXG4gICAgICBcImFyaWEtZXhwYW5kZWRcIjogZGF0ZXRpbWVBY3RpdmUgPyAndHJ1ZScgOiAnZmFsc2UnLFxuICAgICAgb25DbGljazogdGhpcy5oYW5kbGVEYXRlQ2xpY2ssXG4gICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICBwYXJ0OiBcIm5hdGl2ZVwiLFxuICAgICAgcmVmOiBlbCA9PiB0aGlzLmRhdGVUYXJnZXRFbCA9IGVsXG4gICAgfSwgaChcInNsb3RcIiwge1xuICAgICAga2V5OiAnMWMwNDg1M2Q0ZDIzYzBmMWE1OTQ2MDJiZGU0NDUxMWM5ODM1NTY0NCcsXG4gICAgICBuYW1lOiBcImRhdGUtdGFyZ2V0XCJcbiAgICB9LCBkYXRlVGV4dCksIG1vZGUgPT09ICdtZCcgJiYgaChcImlvbi1yaXBwbGUtZWZmZWN0XCIsIHtcbiAgICAgIGtleTogJzVmYzU2NmNkNGJjODg1YmNmOTgzY2U5OWUzZGM2NWQ3ZjQ4NWJmOWInXG4gICAgfSkpLCB0aW1lVGV4dCAmJiBoKFwiYnV0dG9uXCIsIHtcbiAgICAgIGtleTogJ2M5YzVjMzRhYzMzOGJhZGY4NjU5ZGEyMmJlYTU4MjlkNjJjNTExNjknLFxuICAgICAgY2xhc3M6IFwiaW9uLWFjdGl2YXRhYmxlXCIsXG4gICAgICBpZDogXCJ0aW1lLWJ1dHRvblwiLFxuICAgICAgXCJhcmlhLWV4cGFuZGVkXCI6IGRhdGV0aW1lQWN0aXZlID8gJ3RydWUnIDogJ2ZhbHNlJyxcbiAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlVGltZUNsaWNrLFxuICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgcGFydDogXCJuYXRpdmVcIixcbiAgICAgIHJlZjogZWwgPT4gdGhpcy50aW1lVGFyZ2V0RWwgPSBlbFxuICAgIH0sIGgoXCJzbG90XCIsIHtcbiAgICAgIGtleTogJzE0N2E5ZDIwNjlkYmY3MzdmNmZjNjQ3ODc4MjNkNmQ1YWY1YWE2NTMnLFxuICAgICAgbmFtZTogXCJ0aW1lLXRhcmdldFwiXG4gICAgfSwgdGltZVRleHQpLCBtb2RlID09PSAnbWQnICYmIGgoXCJpb24tcmlwcGxlLWVmZmVjdFwiLCB7XG4gICAgICBrZXk6ICc3MGE1ZTI1Yjc1ZWQ5MGFjNmJiYTAwMzQ2ODQzNWY2N2FhOWQ4ZjBhJ1xuICAgIH0pKSk7XG4gIH1cbiAgZ2V0IGVsKCkge1xuICAgIHJldHVybiBnZXRFbGVtZW50KHRoaXMpO1xuICB9XG59O1xuRGF0ZXRpbWVCdXR0b24uc3R5bGUgPSB7XG4gIGlvczogZGF0ZXRpbWVCdXR0b25Jb3NDc3MsXG4gIG1kOiBkYXRldGltZUJ1dHRvbk1kQ3NzXG59O1xuZXhwb3J0IHsgRGF0ZXRpbWVCdXR0b24gYXMgaW9uX2RhdGV0aW1lX2J1dHRvbiB9OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQSxJQUFNLHVCQUF1QjtBQUM3QixJQUFNLHNCQUFzQjtBQUM1QixJQUFNLGlCQUFpQixNQUFNO0FBQUEsRUFDM0IsWUFBWSxTQUFTO0FBQ25CLHFCQUFpQixNQUFNLE9BQU87QUFDOUIsU0FBSyxhQUFhO0FBQ2xCLFNBQUssWUFBWTtBQUNqQixTQUFLLHVCQUF1QjtBQUM1QixTQUFLLGlCQUFpQjtB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
