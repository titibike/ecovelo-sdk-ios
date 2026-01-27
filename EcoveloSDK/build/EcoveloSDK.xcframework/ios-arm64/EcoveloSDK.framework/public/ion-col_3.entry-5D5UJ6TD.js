import {
  getIonMode
} from "./chunk-TXLH22R2.js";
import {
  Host,
  forceUpdate,
  h,
  registerInstance
} from "./chunk-BFPTXCSH.js";
import "./chunk-UESUV5PM.js";

// node_modules/@ionic/core/dist/esm/ion-col_3.entry.js
var SIZE_TO_MEDIA = {
  xs: "(min-width: 0px)",
  sm: "(min-width: 576px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 992px)",
  xl: "(min-width: 1200px)"
};
var matchBreakpoint = (breakpoint) => {
  if (breakpoint === void 0 || breakpoint === "") {
    return true;
  }
  if (window.matchMedia) {
    const mediaQuery = SIZE_TO_MEDIA[breakpoint];
    return window.matchMedia(mediaQuery).matches;
  }
  return false;
};
var colCss = ":host{-webkit-padding-start:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;width:100%;max-width:100%;min-height:1px}@media (min-width: 576px){:host{-webkit-padding-start:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px))}}@media (min-width: 768px){:host{-webkit-padding-start:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px))}}@media (min-width: 992px){:host{-webkit-padding-start:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px))}}@media (min-width: 1200px){:host{-webkit-padding-start:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px))}}";
var win = typeof window !== "undefined" ? window : void 0;
var SUPPORTS_VARS = win && !!(win.CSS && win.CSS.supports && win.CSS.supports("--a: 0"));
var BREAKPOINTS = ["", "xs", "sm", "md", "lg", "xl"];
var Col = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  onResize() {
    forceUpdate(this);
  }
  // Loop through all of the breakpoints to see if the media query
  // matches and grab the column value from the relevant prop if so
  getColumns(property) {
    let matched;
    for (const breakpoint of BREAKPOINTS) {
      const matches = matchBreakpoint(breakpoint);
      const columns = this[property + breakpoint.charAt(0).toUpperCase() + breakpoint.slice(1)];
      if (matches && columns !== void 0) {
        matched = columns;
      }
    }
    return matched;
  }
  calculateSize() {
    const columns = this.getColumns("size");
    if (!columns || columns === "") {
      return;
    }
    const colSize = columns === "auto" ? "auto" : (
      // If CSS supports variables we should use the grid columns var
      SUPPORTS_VARS ? `calc(calc(${columns} / var(--ion-grid-columns, 12)) * 100%)` : (
        // Convert the columns to a percentage by dividing by the total number
        // of columns (12) and then multiplying by 100
        columns / 12 * 100 + "%"
      )
    );
    return {
      flex: `0 0 ${colSize}`,
      width: `${colSize}`,
      "max-width": `${colSize}`
    };
  }
  // Called by push, pull, and offset since they use the same calculations
  calculatePosition(property, modifier) {
    const columns = this.getColumns(property);
    if (!columns) {
      return;
    }
    const amount = SUPPORTS_VARS ? (
      // If CSS supports variables we should use the grid columns var
      `calc(calc(${columns} / var(--ion-grid-columns, 12)) * 100%)`
    ) : (
      // Convert the columns to a percentage by dividing by the total number
      // of columns (12) and then multiplying by 100
      columns > 0 && columns < 12 ? columns / 12 * 100 + "%" : "auto"
    );
    return {
      [modifier]: amount
    };
  }
  calculateOffset(isRTL) {
    return this.calculatePosition("offset", isRTL ? "margin-right" : "margin-left");
  }
  calculatePull(isRTL) {
    return this.calculatePosition("pull", isRTL ? "left" : "right");
  }
  calculatePush(isRTL) {
    return this.calculatePosition("push", isRTL ? "right" : "left");
  }
  render() {
    const isRTL = document.dir === "rtl";
    const mode = getIonMode(this);
    return h(Host, {
      key: "32ed75d81dd09d9bc8999f6d42e5b3cb99c84d91",
      class: {
        [mode]: true
      },
      style: Object.assign(Object.assign(Object.assign(Object.assign({}, this.calculateOffset(isRTL)), this.calculatePull(isRTL)), this.calculatePush(isRTL)), this.calculateSize())
    }, h("slot", {
      key: "38f8d0440c20cc6d1b1d6a654d07f16de61d8134"
    }));
  }
};
Col.style = colCss;
var gridCss = ":host{-webkit-padding-start:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));padding-inline-start:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));-webkit-padding-end:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));padding-inline-end:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));padding-top:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));padding-bottom:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;display:block;-ms-flex:1;flex:1}@media (min-width: 576px){:host{-webkit-padding-start:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));padding-inline-start:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));-webkit-padding-end:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));padding-inline-end:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));padding-top:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));padding-bottom:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px))}}@media (min-width: 768px){:host{-webkit-padding-start:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));padding-inline-start:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));-webkit-padding-end:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));padding-inline-end:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));padding-top:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));padding-bottom:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px))}}@media (min-width: 992px){:host{-webkit-padding-start:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));padding-inline-start:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));-webkit-padding-end:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));padding-inline-end:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));padding-top:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));padding-bottom:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px))}}@media (min-width: 1200px){:host{-webkit-padding-start:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));padding-inline-start:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));-webkit-padding-end:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));padding-inline-end:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));padding-top:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));padding-bottom:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px))}}:host(.grid-fixed){width:var(--ion-grid-width-xs, var(--ion-grid-width, 100%));max-width:100%}@media (min-width: 576px){:host(.grid-fixed){width:var(--ion-grid-width-sm, var(--ion-grid-width, 540px))}}@media (min-width: 768px){:host(.grid-fixed){width:var(--ion-grid-width-md, var(--ion-grid-width, 720px))}}@media (min-width: 992px){:host(.grid-fixed){width:var(--ion-grid-width-lg, var(--ion-grid-width, 960px))}}@media (min-width: 1200px){:host(.grid-fixed){width:var(--ion-grid-width-xl, var(--ion-grid-width, 1140px))}}:host(.ion-no-padding){--ion-grid-column-padding:0;--ion-grid-column-padding-xs:0;--ion-grid-column-padding-sm:0;--ion-grid-column-padding-md:0;--ion-grid-column-padding-lg:0;--ion-grid-column-padding-xl:0}";
var Grid = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.fixed = false;
  }
  render() {
    const mode = getIonMode(this);
    return h(Host, {
      key: "617127ecfabf9bf615bef1dda1be3fed5a065949",
      class: {
        [mode]: true,
        "grid-fixed": this.fixed
      }
    }, h("slot", {
      key: "c781fff853b093d8f44bdb7943bbc4f17c903803"
    }));
  }
};
Grid.style = gridCss;
var rowCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}";
var Row = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, {
      key: "65592a79621bd8f75f9566db3e8c05a4b8fc6048",
      class: getIonMode(this)
    }, h("slot", {
      key: "56f09784db7a0299c9ce76dfcede185b295251ff"
    }));
  }
};
Row.style = rowCss;
export {
  Col as ion_col,
  Grid as ion_grid,
  Row as ion_row
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-col_3.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tY29sXzMuZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgaSBhcyBmb3JjZVVwZGF0ZSwgaCwgZCBhcyBIb3N0IH0gZnJvbSAnLi9pbmRleC00RHhZNl9nRy5qcyc7XG5pbXBvcnQgeyBiIGFzIGdldElvbk1vZGUgfSBmcm9tICcuL2lvbmljLWdsb2JhbC1DVFN5dWZoRi5qcyc7XG5jb25zdCBTSVpFX1RPX01FRElBID0ge1xuICB4czogJyhtaW4td2lkdGg6IDBweCknLFxuICBzbTogJyhtaW4td2lkdGg6IDU3NnB4KScsXG4gIG1kOiAnKG1pbi13aWR0aDogNzY4cHgpJyxcbiAgbGc6ICcobWluLXdpZHRoOiA5OTJweCknLFxuICB4bDogJyhtaW4td2lkdGg6IDEyMDBweCknXG59O1xuLy8gQ2hlY2sgaWYgdGhlIHdpbmRvdyBtYXRjaGVzIHRoZSBtZWRpYSBxdWVyeVxuLy8gYXQgdGhlIGJyZWFrcG9pbnQgcGFzc2VkXG4vLyBlLmcuIG1hdGNoQnJlYWtwb2ludCgnc20nKSA9PiB0cnVlIGlmIHNjcmVlbiB3aWR0aCBleGNlZWRzIDU3NnB4XG5jb25zdCBtYXRjaEJyZWFrcG9pbnQgPSBicmVha3BvaW50ID0+IHtcbiAgaWYgKGJyZWFrcG9pbnQgPT09IHVuZGVmaW5lZCB8fCBicmVha3BvaW50ID09PSAnJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmICh3aW5kb3cubWF0Y2hNZWRpYSkge1xuICAgIGNvbnN0IG1lZGlhUXVlcnkgPSBTSVpFX1RPX01FRElBW2JyZWFrcG9pbnRdO1xuICAgIHJldHVybiB3aW5kb3cubWF0Y2hNZWRpYShtZWRpYVF1ZXJ5KS5tYXRjaGVzO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5jb25zdCBjb2xDc3MgPSBcIjpob3N0ey13ZWJraXQtcGFkZGluZy1zdGFydDp2YXIoLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZy14cywgdmFyKC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmcsIDVweCkpO3BhZGRpbmctaW5saW5lLXN0YXJ0OnZhcigtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nLXhzLCB2YXIoLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZywgNXB4KSk7LXdlYmtpdC1wYWRkaW5nLWVuZDp2YXIoLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZy14cywgdmFyKC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmcsIDVweCkpO3BhZGRpbmctaW5saW5lLWVuZDp2YXIoLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZy14cywgdmFyKC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmcsIDVweCkpO3BhZGRpbmctdG9wOnZhcigtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nLXhzLCB2YXIoLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZywgNXB4KSk7cGFkZGluZy1ib3R0b206dmFyKC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmcteHMsIHZhcigtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nLCA1cHgpKTttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94O3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4LXByZWZlcnJlZC1zaXplOjA7ZmxleC1iYXNpczowOy1tcy1mbGV4LXBvc2l0aXZlOjE7ZmxleC1ncm93OjE7d2lkdGg6MTAwJTttYXgtd2lkdGg6MTAwJTttaW4taGVpZ2h0OjFweH1AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpezpob3N0ey13ZWJraXQtcGFkZGluZy1zdGFydDp2YXIoLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZy1zbSwgdmFyKC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmcsIDVweCkpO3BhZGRpbmctaW5saW5lLXN0YXJ0OnZhcigtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nLXNtLCB2YXIoLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZywgNXB4KSk7LXdlYmtpdC1wYWRkaW5nLWVuZDp2YXIoLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZy1zbSwgdmFyKC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmcsIDVweCkpO3BhZGRpbmctaW5saW5lLWVuZDp2YXIoLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZy1zbSwgdmFyKC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmcsIDVweCkpO3BhZGRpbmctdG9wOnZhcigtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nLXNtLCB2YXIoLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZywgNXB4KSk7cGFkZGluZy1ib3R0b206dmFyKC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmctc20sIHZhcigtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nLCA1cHgpKX19QG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KXs6aG9zdHstd2Via2l0LXBhZGRpbmctc3RhcnQ6dmFyKC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmctbWQsIHZhcigtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nLCA1cHgpKTtwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZy1tZCwgdmFyKC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmcsIDVweCkpOy13ZWJraXQtcGFkZGluZy1lbmQ6dmFyKC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmctbWQsIHZhcigtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nLCA1cHgpKTtwYWRkaW5nLWlubGluZS1lbmQ6dmFyKC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmctbWQsIHZhcigtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nLCA1cHgpKTtwYWRkaW5nLXRvcDp2YXIoLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZy1tZCwgdmFyKC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmcsIDVweCkpO3BhZGRpbmctYm90dG9tOnZhcigtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nLW1kLCB2YXIoLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZywgNXB4KSl9fUBtZWRpYSAobWluLXdpZHRoOiA5OTJweCl7Omhvc3R7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OnZhcigtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nLWxnLCB2YXIoLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZywgNXB4KSk7cGFkZGluZy1pbmxpbmUtc3RhcnQ6dmFyKC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmctbGcsIHZhcigtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nLCA1cHgpKTstd2Via2l0LXBhZGRpbmctZW5kOnZhcigtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nLWxnLCB2YXIoLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZywgNXB4KSk7cGFkZGluZy1pbmxpbmUtZW5kOnZhcigtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nLWxnLCB2YXIoLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZywgNXB4KSk7cGFkZGluZy10b3A6dmFyKC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmctbGcsIHZhcigtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nLCA1cHgpKTtwYWRkaW5nLWJvdHRvbTp2YXIoLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZy1sZywgdmFyKC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmcsIDVweCkpfX1AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KXs6aG9zdHstd2Via2l0LXBhZGRpbmctc3RhcnQ6dmFyKC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmcteGwsIHZhcigtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nLCA1cHgpKTtwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZy14bCwgdmFyKC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmcsIDVweCkpOy13ZWJraXQtcGFkZGluZy1lbmQ6dmFyKC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmcteGwsIHZhcigtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nLCA1cHgpKTtwYWRkaW5nLWlubGluZS1lbmQ6dmFyKC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmcteGwsIHZhcigtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nLCA1cHgpKTtwYWRkaW5nLXRvcDp2YXIoLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZy14bCwgdmFyKC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmcsIDVweCkpO3BhZGRpbmctYm90dG9tOnZhcigtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nLXhsLCB2YXIoLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZywgNXB4KSl9fVwiO1xuY29uc3Qgd2luID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB1bmRlZmluZWQ7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3ByZWZlci1vcHRpb25hbC1jaGFpblxuY29uc3QgU1VQUE9SVFNfVkFSUyA9IHdpbiAmJiAhISh3aW4uQ1NTICYmIHdpbi5DU1Muc3VwcG9ydHMgJiYgd2luLkNTUy5zdXBwb3J0cygnLS1hOiAwJykpO1xuY29uc3QgQlJFQUtQT0lOVFMgPSBbJycsICd4cycsICdzbScsICdtZCcsICdsZycsICd4bCddO1xuY29uc3QgQ29sID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgfVxuICBvblJlc2l6ZSgpIHtcbiAgICBmb3JjZVVwZGF0ZSh0aGlzKTtcbiAgfVxuICAvLyBMb29wIHRocm91Z2ggYWxsIG9mIHRoZSBicmVha3BvaW50cyB0byBzZWUgaWYgdGhlIG1lZGlhIHF1ZXJ5XG4gIC8vIG1hdGNoZXMgYW5kIGdyYWIgdGhlIGNvbHVtbiB2YWx1ZSBmcm9tIHRoZSByZWxldmFudCBwcm9wIGlmIHNvXG4gIGdldENvbHVtbnMocHJvcGVydHkpIHtcbiAgICBsZXQgbWF0Y2hlZDtcbiAgICBmb3IgKGNvbnN0IGJyZWFrcG9pbnQgb2YgQlJFQUtQT0lOVFMpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSBtYXRjaEJyZWFrcG9pbnQoYnJlYWtwb2ludCk7XG4gICAgICAvLyBHcmFiIHRoZSB2YWx1ZSBvZiB0aGUgcHJvcGVydHksIGlmIGl0IGV4aXN0cyBhbmQgb3VyXG4gICAgICAvLyBtZWRpYSBxdWVyeSBtYXRjaGVzIHdlIHJldHVybiB0aGUgdmFsdWVcbiAgICAgIGNvbnN0IGNvbHVtbnMgPSB0aGlzW3Byb3BlcnR5ICsgYnJlYWtwb2ludC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGJyZWFrcG9pbnQuc2xpY2UoMSldO1xuICAgICAgaWYgKG1hdGNoZXMgJiYgY29sdW1ucyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG1hdGNoZWQgPSBjb2x1bW5zO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBSZXR1cm4gdGhlIGxhc3QgbWF0Y2hlZCBjb2x1bW5zIHNpbmNlIHRoZSBicmVha3BvaW50c1xuICAgIC8vIGluY3JlYXNlIGluIHNpemUgYW5kIHdlIHdhbnQgdG8gcmV0dXJuIHRoZSBsYXJnZXN0IG1hdGNoXG4gICAgcmV0dXJuIG1hdGNoZWQ7XG4gIH1cbiAgY2FsY3VsYXRlU2l6ZSgpIHtcbiAgICBjb25zdCBjb2x1bW5zID0gdGhpcy5nZXRDb2x1bW5zKCdzaXplJyk7XG4gICAgLy8gSWYgc2l6ZSB3YXNuJ3Qgc2V0IGZvciBhbnkgYnJlYWtwb2ludFxuICAgIC8vIG9yIGlmIHRoZSB1c2VyIHNldCB0aGUgc2l6ZSB3aXRob3V0IGEgdmFsdWVcbiAgICAvLyBpdCBtZWFucyB3ZSBuZWVkIHRvIHN0aWNrIHdpdGggdGhlIGRlZmF1bHQgYW5kIHJldHVyblxuICAgIC8vIGUuZy4gPGlvbi1jb2wgc2l6ZS1tZD5cbiAgICBpZiAoIWNvbHVtbnMgfHwgY29sdW1ucyA9PT0gJycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gSWYgdGhlIHNpemUgaXMgc2V0IHRvIGF1dG8gdGhlbiBkb24ndCBjYWxjdWxhdGUgYSBzaXplXG4gICAgY29uc3QgY29sU2l6ZSA9IGNvbHVtbnMgPT09ICdhdXRvJyA/ICdhdXRvJyA6XG4gICAgLy8gSWYgQ1NTIHN1cHBvcnRzIHZhcmlhYmxlcyB3ZSBzaG91bGQgdXNlIHRoZSBncmlkIGNvbHVtbnMgdmFyXG4gICAgU1VQUE9SVFNfVkFSUyA/IGBjYWxjKGNhbGMoJHtjb2x1bW5zfSAvIHZhcigtLWlvbi1ncmlkLWNvbHVtbnMsIDEyKSkgKiAxMDAlKWAgOlxuICAgIC8vIENvbnZlcnQgdGhlIGNvbHVtbnMgdG8gYSBwZXJjZW50YWdlIGJ5IGRpdmlkaW5nIGJ5IHRoZSB0b3RhbCBudW1iZXJcbiAgICAvLyBvZiBjb2x1bW5zICgxMikgYW5kIHRoZW4gbXVsdGlwbHlpbmcgYnkgMTAwXG4gICAgY29sdW1ucyAvIDEyICogMTAwICsgJyUnO1xuICAgIHJldHVybiB7XG4gICAgICBmbGV4OiBgMCAwICR7Y29sU2l6ZX1gLFxuICAgICAgd2lkdGg6IGAke2NvbFNpemV9YCxcbiAgICAgICdtYXgtd2lkdGgnOiBgJHtjb2xTaXplfWBcbiAgICB9O1xuICB9XG4gIC8vIENhbGxlZCBieSBwdXNoLCBwdWxsLCBhbmQgb2Zmc2V0IHNpbmNlIHRoZXkgdXNlIHRoZSBzYW1lIGNhbGN1bGF0aW9uc1xuICBjYWxjdWxhdGVQb3NpdGlvbihwcm9wZXJ0eSwgbW9kaWZpZXIpIHtcbiAgICBjb25zdCBjb2x1bW5zID0gdGhpcy5nZXRDb2x1bW5zKHByb3BlcnR5KTtcbiAgICBpZiAoIWNvbHVtbnMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gSWYgdGhlIG51bWJlciBvZiBjb2x1bW5zIHBhc3NlZCBhcmUgZ3JlYXRlciB0aGFuIDAgYW5kIGxlc3MgdGhhblxuICAgIC8vIDEyIHdlIGNhbiBwb3NpdGlvbiB0aGUgY29sdW1uLCBlbHNlIGRlZmF1bHQgdG8gYXV0b1xuICAgIGNvbnN0IGFtb3VudCA9IFNVUFBPUlRTX1ZBUlMgP1xuICAgIC8vIElmIENTUyBzdXBwb3J0cyB2YXJpYWJsZXMgd2Ugc2hvdWxkIHVzZSB0aGUgZ3JpZCBjb2x1bW5zIHZhclxuICAgIGBjYWxjKGNhbGMoJHtjb2x1bW5zfSAvIHZhcigtLWlvbi1ncmlkLWNvbHVtbnMsIDEyKSkgKiAxMDAlKWAgOlxuICAgIC8vIENvbnZlcnQgdGhlIGNvbHVtbnMgdG8gYSBwZXJjZW50YWdlIGJ5IGRpdmlkaW5nIGJ5IHRoZSB0b3RhbCBudW1iZXJcbiAgICAvLyBvZiBjb2x1bW5zICgxMikgYW5kIHRoZW4gbXVsdGlwbHlpbmcgYnkgMTAwXG4gICAgY29sdW1ucyA+IDAgJiYgY29sdW1ucyA8IDEyID8gY29sdW1ucyAvIDEyICogMTAwICsgJyUnIDogJ2F1dG8nO1xuICAgIHJldHVybiB7XG4gICAgICBbbW9kaWZpZXJdOiBhbW91bnRcbiAgICB9O1xuICB9XG4gIGNhbGN1bGF0ZU9mZnNldChpc1JUTCkge1xuICAgIHJldHVybiB0aGlzLmNhbGN1bGF0ZVBvc2l0aW9uKCdvZmZzZXQnLCBpc1JUTCA/ICdtYXJnaW4tcmlnaHQnIDogJ21hcmdpbi1sZWZ0Jyk7XG4gIH1cbiAgY2FsY3VsYXRlUHVsbChpc1JUTCkge1xuICAgIHJldHVybiB0aGlzLmNhbGN1bGF0ZVBvc2l0aW9uKCdwdWxsJywgaXNSVEwgPyAnbGVmdCcgOiAncmlnaHQnKTtcbiAgfVxuICBjYWxjdWxhdGVQdXNoKGlzUlRMKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FsY3VsYXRlUG9zaXRpb24oJ3B1c2gnLCBpc1JUTCA/ICdyaWdodCcgOiAnbGVmdCcpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpc1JUTCA9IGRvY3VtZW50LmRpciA9PT0gJ3J0bCc7XG4gICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgcmV0dXJuIGgoSG9zdCwge1xuICAgICAga2V5OiAnMzJlZDc1ZDgxZGQwOWQ5YmM4OTk5ZjZkNDJlNWIzY2I5OWM4NGQ5MScsXG4gICAgICBjbGFzczoge1xuICAgICAgICBbbW9kZV06IHRydWVcbiAgICAgIH0sXG4gICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5jYWxjdWxhdGVPZmZzZXQoaXNSVEwpKSwgdGhpcy5jYWxjdWxhdGVQdWxsKGlzUlRMKSksIHRoaXMuY2FsY3VsYXRlUHVzaChpc1JUTCkpLCB0aGlzLmNhbGN1bGF0ZVNpemUoKSlcbiAgICB9LCBoKFwic2xvdFwiLCB7XG4gICAgICBrZXk6ICczOGY4ZDA0NDBjMjBjYzZkMWIxZDZhNjU0ZDA3ZjE2ZGU2MWQ4MTM0J1xuICAgIH0pKTtcbiAgfVxufTtcbkNvbC5zdHlsZSA9IGNvbENzcztcbmNvbnN0IGdyaWRDc3MgPSBcIjpob3N0ey13ZWJraXQtcGFkZGluZy1zdGFydDp2YXIoLS1pb24tZ3JpZC1wYWRkaW5nLXhzLCB2YXIoLS1pb24tZ3JpZC1wYWRkaW5nLCA1cHgpKTtwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1pb24tZ3JpZC1wYWRkaW5nLXhzLCB2YXIoLS1pb24tZ3JpZC1wYWRkaW5nLCA1cHgpKTstd2Via2l0LXBhZGRpbmctZW5kOnZhcigtLWlvbi1ncmlkLXBhZGRpbmcteHMsIHZhcigtLWlvbi1ncmlkLXBhZGRpbmcsIDVweCkpO3BhZGRpbmctaW5saW5lLWVuZDp2YXIoLS1pb24tZ3JpZC1wYWRkaW5nLXhzLCB2YXIoLS1pb24tZ3JpZC1wYWRkaW5nLCA1cHgpKTtwYWRkaW5nLXRvcDp2YXIoLS1pb24tZ3JpZC1wYWRkaW5nLXhzLCB2YXIoLS1pb24tZ3JpZC1wYWRkaW5nLCA1cHgpKTtwYWRkaW5nLWJvdHRvbTp2YXIoLS1pb24tZ3JpZC1wYWRkaW5nLXhzLCB2YXIoLS1pb24tZ3JpZC1wYWRkaW5nLCA1cHgpKTstd2Via2l0LW1hcmdpbi1zdGFydDphdXRvO21hcmdpbi1pbmxpbmUtc3RhcnQ6YXV0bzstd2Via2l0LW1hcmdpbi1lbmQ6YXV0bzttYXJnaW4taW5saW5lLWVuZDphdXRvO2Rpc3BsYXk6YmxvY2s7LW1zLWZsZXg6MTtmbGV4OjF9QG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KXs6aG9zdHstd2Via2l0LXBhZGRpbmctc3RhcnQ6dmFyKC0taW9uLWdyaWQtcGFkZGluZy1zbSwgdmFyKC0taW9uLWdyaWQtcGFkZGluZywgNXB4KSk7cGFkZGluZy1pbmxpbmUtc3RhcnQ6dmFyKC0taW9uLWdyaWQtcGFkZGluZy1zbSwgdmFyKC0taW9uLWdyaWQtcGFkZGluZywgNXB4KSk7LXdlYmtpdC1wYWRkaW5nLWVuZDp2YXIoLS1pb24tZ3JpZC1wYWRkaW5nLXNtLCB2YXIoLS1pb24tZ3JpZC1wYWRkaW5nLCA1cHgpKTtwYWRkaW5nLWlubGluZS1lbmQ6dmFyKC0taW9uLWdyaWQtcGFkZGluZy1zbSwgdmFyKC0taW9uLWdyaWQtcGFkZGluZywgNXB4KSk7cGFkZGluZy10b3A6dmFyKC0taW9uLWdyaWQtcGFkZGluZy1zbSwgdmFyKC0taW9uLWdyaWQtcGFkZGluZywgNXB4KSk7cGFkZGluZy1ib3R0b206dmFyKC0taW9uLWdyaWQtcGFkZGluZy1zbSwgdmFyKC0taW9uLWdyaWQtcGFkZGluZywgNXB4KSl9fUBtZWRpYSAobWluLXdpZHRoOiA3NjhweCl7Omhvc3R7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OnZhcigtLWlvbi1ncmlkLXBhZGRpbmctbWQsIHZhcigtLWlvbi1ncmlkLXBhZGRpbmcsIDVweCkpO3BhZGRpbmctaW5saW5lLXN0YXJ0OnZhcigtLWlvbi1ncmlkLXBhZGRpbmctbWQsIHZhcigtLWlvbi1ncmlkLXBhZGRpbmcsIDVweCkpOy13ZWJraXQtcGFkZGluZy1lbmQ6dmFyKC0taW9uLWdyaWQtcGFkZGluZy1tZCwgdmFyKC0taW9uLWdyaWQtcGFkZGluZywgNXB4KSk7cGFkZGluZy1pbmxpbmUtZW5kOnZhcigtLWlvbi1ncmlkLXBhZGRpbmctbWQsIHZhcigtLWlvbi1ncmlkLXBhZGRpbmcsIDVweCkpO3BhZGRpbmctdG9wOnZhcigtLWlvbi1ncmlkLXBhZGRpbmctbWQsIHZhcigtLWlvbi1ncmlkLXBhZGRpbmcsIDVweCkpO3BhZGRpbmctYm90dG9tOnZhcigtLWlvbi1ncmlkLXBhZGRpbmctbWQsIHZhcigtLWlvbi1ncmlkLXBhZGRpbmcsIDVweCkpfX1AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpezpob3N0ey13ZWJraXQtcGFkZGluZy1zdGFydDp2YXIoLS1pb24tZ3JpZC1wYWRkaW5nLWxnLCB2YXIoLS1pb24tZ3JpZC1wYWRkaW5nLCA1cHgpKTtwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1pb24tZ3JpZC1wYWRkaW5nLWxnLCB2YXIoLS1pb24tZ3JpZC1wYWRkaW5nLCA1cHgpKTstd2Via2l0LXBhZGRpbmctZW5kOnZhcigtLWlvbi1ncmlkLXBhZGRpbmctbGcsIHZhcigtLWlvbi1ncmlkLXBhZGRpbmcsIDVweCkpO3BhZGRpbmctaW5saW5lLWVuZDp2YXIoLS1pb24tZ3JpZC1wYWRkaW5nLWxnLCB2YXIoLS1pb24tZ3JpZC1wYWRkaW5nLCA1cHgpKTtwYWRkaW5nLXRvcDp2YXIoLS1pb24tZ3JpZC1wYWRkaW5nLWxnLCB2YXIoLS1pb24tZ3JpZC1wYWRkaW5nLCA1cHgpKTtwYWRkaW5nLWJvdHRvbTp2YXIoLS1pb24tZ3JpZC1wYWRkaW5nLWxnLCB2YXIoLS1pb24tZ3JpZC1wYWRkaW5nLCA1cHgpKX19QG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCl7Omhvc3R7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OnZhcigtLWlvbi1ncmlkLXBhZGRpbmcteGwsIHZhcigtLWlvbi1ncmlkLXBhZGRpbmcsIDVweCkpO3BhZGRpbmctaW5saW5lLXN0YXJ0OnZhcigtLWlvbi1ncmlkLXBhZGRpbmcteGwsIHZhcigtLWlvbi1ncmlkLXBhZGRpbmcsIDVweCkpOy13ZWJraXQtcGFkZGluZy1lbmQ6dmFyKC0taW9uLWdyaWQtcGFkZGluZy14bCwgdmFyKC0taW9uLWdyaWQtcGFkZGluZywgNXB4KSk7cGFkZGluZy1pbmxpbmUtZW5kOnZhcigtLWlvbi1ncmlkLXBhZGRpbmcteGwsIHZhcigtLWlvbi1ncmlkLXBhZGRpbmcsIDVweCkpO3BhZGRpbmctdG9wOnZhcigtLWlvbi1ncmlkLXBhZGRpbmcteGwsIHZhcigtLWlvbi1ncmlkLXBhZGRpbmcsIDVweCkpO3BhZGRpbmctYm90dG9tOnZhcigtLWlvbi1ncmlkLXBhZGRpbmcteGwsIHZhcigtLWlvbi1ncmlkLXBhZGRpbmcsIDVweCkpfX06aG9zdCguZ3JpZC1maXhlZCl7d2lkdGg6dmFyKC0taW9uLWdyaWQtd2lkdGgteHMsIHZhcigtLWlvbi1ncmlkLXdpZHRoLCAxMDAlKSk7bWF4LXdpZHRoOjEwMCV9QG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KXs6aG9zdCguZ3JpZC1maXhlZCl7d2lkdGg6dmFyKC0taW9uLWdyaWQtd2lkdGgtc20sIHZhcigtLWlvbi1ncmlkLXdpZHRoLCA1NDBweCkpfX1AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpezpob3N0KC5ncmlkLWZpeGVkKXt3aWR0aDp2YXIoLS1pb24tZ3JpZC13aWR0aC1tZCwgdmFyKC0taW9uLWdyaWQtd2lkdGgsIDcyMHB4KSl9fUBtZWRpYSAobWluLXdpZHRoOiA5OTJweCl7Omhvc3QoLmdyaWQtZml4ZWQpe3dpZHRoOnZhcigtLWlvbi1ncmlkLXdpZHRoLWxnLCB2YXIoLS1pb24tZ3JpZC13aWR0aCwgOTYwcHgpKX19QG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCl7Omhvc3QoLmdyaWQtZml4ZWQpe3dpZHRoOnZhcigtLWlvbi1ncmlkLXdpZHRoLXhsLCB2YXIoLS1pb24tZ3JpZC13aWR0aCwgMTE0MHB4KSl9fTpob3N0KC5pb24tbm8tcGFkZGluZyl7LS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzowOy0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmcteHM6MDstLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nLXNtOjA7LS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZy1tZDowOy0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmctbGc6MDstLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nLXhsOjB9XCI7XG5jb25zdCBHcmlkID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBncmlkIHdpbGwgaGF2ZSBhIGZpeGVkIHdpZHRoIGJhc2VkIG9uIHRoZSBzY3JlZW4gc2l6ZS5cbiAgICAgKi9cbiAgICB0aGlzLmZpeGVkID0gZmFsc2U7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgIHJldHVybiBoKEhvc3QsIHtcbiAgICAgIGtleTogJzYxNzEyN2VjZmFiZjliZjYxNWJlZjFkZGExYmUzZmVkNWEwNjU5NDknLFxuICAgICAgY2xhc3M6IHtcbiAgICAgICAgW21vZGVdOiB0cnVlLFxuICAgICAgICAnZ3JpZC1maXhlZCc6IHRoaXMuZml4ZWRcbiAgICAgIH1cbiAgICB9LCBoKFwic2xvdFwiLCB7XG4gICAgICBrZXk6ICdjNzgxZmZmODUzYjA5M2Q4ZjQ0YmRiNzk0M2JiYzRmMTdjOTAzODAzJ1xuICAgIH0pKTtcbiAgfVxufTtcbkdyaWQuc3R5bGUgPSBncmlkQ3NzO1xuY29uc3Qgcm93Q3NzID0gXCI6aG9zdHtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC13cmFwOndyYXA7ZmxleC13cmFwOndyYXB9XCI7XG5jb25zdCBSb3cgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaChIb3N0LCB7XG4gICAgICBrZXk6ICc2NTU5MmE3OTYyMWJkOGY3NWY5NTY2ZGIzZThjMDVhNGI4ZmM2MDQ4JyxcbiAgICAgIGNsYXNzOiBnZXRJb25Nb2RlKHRoaXMpXG4gICAgfSwgaChcInNsb3RcIiwge1xuICAgICAga2V5OiAnNTZmMDk3ODRkYjdhMDI5OWM5Y2U3NmRmY2VkZTE4NWIyOTUyNTFmZidcbiAgICB9KSk7XG4gIH1cbn07XG5Sb3cuc3R5bGUgPSByb3dDc3M7XG5leHBvcnQgeyBDb2wgYXMgaW9uX2NvbCwgR3JpZCBhcyBpb25fZ3JpZCwgUm93IGFzIGlvbl9yb3cgfTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUtBLElBQU0sZ0JBQWdCO0FBQUEsRUFDcEIsSUFBSTtBQUFBLEVBQ0osSUFBSTtBQUFBLEVBQ0osSUFBSTtBQUFBLEVBQ0osSUFBSTtBQUFBLEVBQ0osSUFBSTtBQUNOO0FBSUEsSUFBTSxrQkFBa0IsZ0JBQWM7QUFDcEMsTUFBSSxlQUFlLFVBQWEsZUFBZSxJQUFJO0FBQ2pELFdBQU87QUFBQSxFQUNUO0FBQ0EsTUFBSSxPQUFPLFlBQVk7QUFDckIsVUFBTSxhQUFhLGNBQWMsVUFBVTtBQUMzQyxXQUFPLE9BQU8sV0FBVyxVQUFVLEVBQUU7QUFBQSxFQUN2QztBQUNBLFNBQU87QUFDVDtBQUNBLElBQU0sU0FBUztBQUNmLElBQU0sTUFBTSxPQUFPLFdBQVcsY0FBYyxTQUFTO0FBRXJELElBQU0sZ0JBQWdCLE9BQU8sQ0FBQyxFQUFFLElBQUksT0FBTyxJQUFJLElBQUksWUFBWSxJQUFJLElBQUksU0FBUyxRQUFRO0FBQ3hGLElBQU0sY0FBYyxDQUFDLElBQUksTUFBTSxNQUFNLE1BQU0sTUFBTSxJQUFJO0FBQ3JELElBQU0sTUFBTSxNQUFNO0FBQUEsRUFDaEIsWUFBWSxTQUFTO0FBQ25CLHFCQUFpQixNQUFNLE9BQU87QUFBQSxFQUNoQztBQUFBLEVBQ0EsV0FBVztBQUNULGdCQUFZLElBQUk7QUFBQSxFQUNsQjtBQUFBO0FBQUE7QUFBQSxFQUdBLFdBQVcsVUFBVTtBQUNuQixRQUFJO0FBQ0osZUFBVyxjQUFjLGFBQWE7QUFDcEMsWUFBTSxVQUFVLGdCQUFnQixVQUFVO0FBRzFDLFlBQU0sVUFBVSxLQUFLLFdBQVcsV0FBVyxPQUFPLENBQUMsRUFBRSxZQUFZLElBQUksV0FBVyxNQUFNLENBQUMsQ0FBQztBQUN4RixVQUFJLFdBQVcsWUFBWSxRQUFXO0FBQ3BDLGtCQUFVO0FBQUEsTUFDWjtBQUFBLElBQ0Y7QUFHQSxXQUFPO0FBQUEsRUFDVDtBQUFBLEVBQ0EsZ0JBQWdCO0FBQ2QsVUFBTSxVQUFVLEtBQUssV0FBVyxNQUFNO0FBS3RDLFFBQUksQ0FBQyxXQUFXLFlBQVksSUFBSTtBQUM5QjtBQUFBLElBQ0Y7QUFFQSxVQUFNLFVBQVUsWUFBWSxTQUFTO0FBQUE7QUFBQSxNQUVyQyxnQkFBZ0IsYUFBYSxPQUFPO0FBQUE7QUFBQTtBQUFBLFFBR3BDLFVBQVUsS0FBSyxNQUFNO0FBQUE7QUFBQTtBQUNyQixXQUFPO0FBQUEsTUFDTCxNQUFNLE9BQU8sT0FBTztBQUFBLE1BQ3BCLE9BQU8sR0FBRyxPQUFPO0FBQUEsTUFDakIsYUFBYSxHQUFHLE9BQU87QUFBQSxJQUN6QjtBQUFBLEVBQ0Y7QUFBQTtBQUFBLEVBRUEsa0JBQWtCLFVBQVUsVUFBVTtBQUNwQyxVQUFNLFVBQVUsS0FBSyxXQUFXLFFBQVE7QUFDeEMsUUFBSSxDQUFDLFNBQVM7QUFDWjtBQUFBLElBQ0Y7QUFHQSxVQUFNLFNBQVM7QUFBQTtBQUFBLE1BRWYsYUFBYSxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFHcEIsVUFBVSxLQUFLLFVBQVUsS0FBSyxVQUFVLEtBQUssTUFBTSxNQUFNO0FBQUE7QUFDekQsV0FBTztBQUFBLE1BQ0wsQ0FBQyxRQUFRLEdBQUc7QUFBQSxJQUNkO0FBQUEsRUFDRjtBQUFBLEVBQ0EsZ0JBQWdCLE9BQU87QUFDckIsV0FBTyxLQUFLLGtCQUFrQixVQUFVLFFBQVEsaUJBQWlCLGFBQWE7QUFBQSxFQUNoRjtBQUFBLEVBQ0EsY0FBYyxPQUFPO0FBQ25CLFdBQU8sS0FBSyxrQkFBa0IsUUFBUSxRQUFRLFNBQVMsT0FBTztBQUFBLEVBQ2hFO0FBQUEsRUFDQSxjQUFjLE9BQU87QUFDbkIsV0FBTyxLQUFLLGtCQUFrQixRQUFRLFFBQVEsVUFBVSxNQUFNO0FBQUEsRUFDaEU7QUFBQSxFQUNBLFNBQVM7QUFDUCxVQUFNLFFBQVEsU0FBUyxRQUFRO0FBQy9CLFVBQU0sT0FBTyxXQUFXLElBQUk7QUFDNUIsV0FBTyxFQUFFLE1BQU07QUFBQSxNQUNiLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxRQUNMLENBQUMsSUFBSSxHQUFHO0FBQUEsTUFDVjtBQUFBLE1BQ0EsT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sQ0FBQyxHQUFHLEtBQUssZ0JBQWdCLEtBQUssQ0FBQyxHQUFHLEtBQUssY0FBYyxLQUFLLENBQUMsR0FBRyxLQUFLLGNBQWMsS0FBSyxDQUFDLEdBQUcsS0FBSyxjQUFjLENBQUM7QUFBQSxJQUMvSyxHQUFHLEVBQUUsUUFBUTtBQUFBLE1BQ1gsS0FBSztBQUFBLElBQ1AsQ0FBQyxDQUFDO0FBQUEsRUFDSjtBQUNGO0FBQ0EsSUFBSSxRQUFRO0FBQ1osSUFBTSxVQUFVO0FBQ2hCLElBQU0sT0FBTyxNQUFNO0FBQUEsRUFDakIsWUFBWSxTQUFTO0FBQ25CLHFCQUFpQixNQUFNLE9BQU87QUFJOUIsU0FBSyxRQUFRO0FBQUEsRUFDZjtBQUFBLEVBQ0EsU0FBUztBQUNQLFVBQU0sT0FBTyxXQUFXLElBQUk7QUFDNUIsV0FBTyxFQUFFLE1BQU07QUFBQSxNQUNiLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxRQUNMLENBQUMsSUFBSSxHQUFHO0FBQUEsUUFDUixjQUFjLEtBQUs7QUFBQSxNQUNyQjtBQUFBLElBQ0YsR0FBRyxFQUFFLFFBQVE7QUFBQSxNQUNYLEtBQUs7QUFBQSxJQUNQLENBQUMsQ0FBQztBQUFBLEVBQ0o7QUFDRjtBQUNBLEtBQUssUUFBUTtBQUNiLElBQU0sU0FBUztBQUNmLElBQU0sTUFBTSxNQUFNO0FBQUEsRUFDaEIsWUFBWSxTQUFTO0FBQ25CLHFCQUFpQixNQUFNLE9BQU87QUFBQSxFQUNoQztBQUFBLEVBQ0EsU0FBUztBQUNQLFdBQU8sRUFBRSxNQUFNO0FBQUEsTUFDYixLQUFLO0FBQUEsTUFDTCxPQUFPLFdBQVcsSUFBSTtBQUFBLElBQ3hCLEdBQUcsRUFBRSxRQUFRO0FBQUEsTUFDWCxLQUFLO0FBQUEsSUFDUCxDQUFDLENBQUM7QUFBQSxFQUNKO0FBQ0Y7QUFDQSxJQUFJLFFBQVE7IiwibmFtZXMiOltdLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19
