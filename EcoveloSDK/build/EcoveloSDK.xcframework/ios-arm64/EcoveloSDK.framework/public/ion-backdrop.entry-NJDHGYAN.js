import {
  getIonMode
} from "./chunk-TXLH22R2.js";
import {
  Host,
  createEvent,
  h,
  registerInstance
} from "./chunk-BFPTXCSH.js";
import "./chunk-UESUV5PM.js";

// node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js
var backdropIosCss = ":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}";
var backdropMdCss = ":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}";
var Backdrop = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionBackdropTap = createEvent(this, "ionBackdropTap", 7);
    this.visible = true;
    this.tappable = true;
    this.stopPropagation = true;
  }
  onMouseDown(ev) {
    this.emitTap(ev);
  }
  emitTap(ev) {
    if (this.stopPropagation) {
      ev.preventDefault();
      ev.stopPropagation();
    }
    if (this.tappable) {
      this.ionBackdropTap.emit();
    }
  }
  render() {
    const mode = getIonMode(this);
    return h(Host, {
      key: "7abaf2c310aa399607451b14063265e8a5846938",
      "aria-hidden": "true",
      class: {
        [mode]: true,
        "backdrop-hide": !this.visible,
        "backdrop-no-tappable": !this.tappable
      }
    });
  }
};
Backdrop.style = {
  ios: backdropIosCss,
  md: backdropMdCss
};
export {
  Backdrop as ion_backdrop
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-backdrop.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tYmFja2Ryb3AuZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBjcmVhdGVFdmVudCwgaCwgZCBhcyBIb3N0IH0gZnJvbSAnLi9pbmRleC00RHhZNl9nRy5qcyc7XG5pbXBvcnQgeyBiIGFzIGdldElvbk1vZGUgfSBmcm9tICcuL2lvbmljLWdsb2JhbC1DVFN5dWZoRi5qcyc7XG5jb25zdCBiYWNrZHJvcElvc0NzcyA9IFwiOmhvc3R7bGVmdDowO3JpZ2h0OjA7dG9wOjA7Ym90dG9tOjA7ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApO2NvbnRhaW46c3RyaWN0O2N1cnNvcjpwb2ludGVyO29wYWNpdHk6MC4wMTstbXMtdG91Y2gtYWN0aW9uOm5vbmU7dG91Y2gtYWN0aW9uOm5vbmU7ei1pbmRleDoyfTpob3N0KC5iYWNrZHJvcC1oaWRlKXtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50fTpob3N0KC5iYWNrZHJvcC1uby10YXBwYWJsZSl7Y3Vyc29yOmF1dG99Omhvc3R7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1pb24tYmFja2Ryb3AtY29sb3IsICMwMDApfVwiO1xuY29uc3QgYmFja2Ryb3BNZENzcyA9IFwiOmhvc3R7bGVmdDowO3JpZ2h0OjA7dG9wOjA7Ym90dG9tOjA7ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApO2NvbnRhaW46c3RyaWN0O2N1cnNvcjpwb2ludGVyO29wYWNpdHk6MC4wMTstbXMtdG91Y2gtYWN0aW9uOm5vbmU7dG91Y2gtYWN0aW9uOm5vbmU7ei1pbmRleDoyfTpob3N0KC5iYWNrZHJvcC1oaWRlKXtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50fTpob3N0KC5iYWNrZHJvcC1uby10YXBwYWJsZSl7Y3Vyc29yOmF1dG99Omhvc3R7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1pb24tYmFja2Ryb3AtY29sb3IsICMwMDApfVwiO1xuY29uc3QgQmFja2Ryb3AgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuaW9uQmFja2Ryb3BUYXAgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkJhY2tkcm9wVGFwXCIsIDcpO1xuICAgIC8qKlxuICAgICAqIElmIGB0cnVlYCwgdGhlIGJhY2tkcm9wIHdpbGwgYmUgdmlzaWJsZS5cbiAgICAgKi9cbiAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgIC8qKlxuICAgICAqIElmIGB0cnVlYCwgdGhlIGJhY2tkcm9wIHdpbGwgY2FuIGJlIGNsaWNrZWQgYW5kIHdpbGwgZW1pdCB0aGUgYGlvbkJhY2tkcm9wVGFwYCBldmVudC5cbiAgICAgKi9cbiAgICB0aGlzLnRhcHBhYmxlID0gdHJ1ZTtcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBiYWNrZHJvcCB3aWxsIHN0b3AgcHJvcGFnYXRpb24gb24gdGFwLlxuICAgICAqL1xuICAgIHRoaXMuc3RvcFByb3BhZ2F0aW9uID0gdHJ1ZTtcbiAgfVxuICBvbk1vdXNlRG93bihldikge1xuICAgIHRoaXMuZW1pdFRhcChldik7XG4gIH1cbiAgZW1pdFRhcChldikge1xuICAgIGlmICh0aGlzLnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgICBpZiAodGhpcy50YXBwYWJsZSkge1xuICAgICAgdGhpcy5pb25CYWNrZHJvcFRhcC5lbWl0KCk7XG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICByZXR1cm4gaChIb3N0LCB7XG4gICAgICBrZXk6ICc3YWJhZjJjMzEwYWEzOTk2MDc0NTFiMTQwNjMyNjVlOGE1ODQ2OTM4JyxcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsXG4gICAgICBjbGFzczoge1xuICAgICAgICBbbW9kZV06IHRydWUsXG4gICAgICAgICdiYWNrZHJvcC1oaWRlJzogIXRoaXMudmlzaWJsZSxcbiAgICAgICAgJ2JhY2tkcm9wLW5vLXRhcHBhYmxlJzogIXRoaXMudGFwcGFibGVcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcbkJhY2tkcm9wLnN0eWxlID0ge1xuICBpb3M6IGJhY2tkcm9wSW9zQ3NzLFxuICBtZDogYmFja2Ryb3BNZENzc1xufTtcbmV4cG9ydCB7IEJhY2tkcm9wIGFzIGlvbl9iYWNrZHJvcCB9OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBS0EsSUFBTSxpQkFBaUI7QUFDdkIsSUFBTSxnQkFBZ0I7QUFDdEIsSUFBTSxXQUFXLE1BQU07QUFBQSxFQUNyQixZQUFZLFNBQVM7QUFDbkIscUJBQWlCLE1BQU0sT0FBTztBQUM5QixTQUFLLGlCQUFpQixZQUFZLE1BQU0sa0JBQWtCLENBQUM7QUFJM0QsU0FBSyxVQUFVO0FBSWYsU0FBSyxXQUFXO0FBSWhCLFNBQUssa0JBQWtCO0FBQUEsRUFDekI7QUFBQSxFQUNBLFlBQVksSUFBSTtBQUNkLFNBQUssUUFBUSxFQUFFO0FBQUEsRUFDakI7QUFBQSxFQUNBLFFBQVEsSUFBSTtBQUNWLFFBQUksS0FBSyxpQkFBaUI7QUFDeEIsU0FBRyxlQUFlO0FBQ2xCLFNBQUcsZ0JBQWdCO0FBQUEsSUFDckI7QUFDQSxRQUFJLEtBQUssVUFBVTtBQUNqQixXQUFLLGVBQWUsS0FBSztBQUFBLElBQzNCO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUNQLFVBQU0sT0FBTyxXQUFXLElBQUk7QUFDNUIsV0FBTyxFQUFFLE1BQU07QUFBQSxNQUNiLEtBQUs7QUFBQSxNQUNMLGVBQWU7QUFBQSxNQUNmLE9BQU87QUFBQSxRQUNMLENBQUMsSUFBSSxHQUFHO0FBQUEsUUFDUixpQkFBaUIsQ0FBQyxLQUFLO0FBQUEsUUFDdkIsd0JBQXdCLENBQUMsS0FBSztBQUFBLE1BQ2hDO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUNGO0FBQ0EsU0FBUyxRQUFRO0FBQUEsRUFDZixLQUFLO0FBQUEsRUFDTCxJQUFJO0FBQ047IiwibmFtZXMiOltdLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19
