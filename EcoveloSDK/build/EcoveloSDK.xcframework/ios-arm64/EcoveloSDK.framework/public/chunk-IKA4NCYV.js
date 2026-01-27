import {
  CommonModule,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  IonButton,
  Output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty
} from "./chunk-DGENMXJW.js";

// src/app/components/fill-button/fill-button.component.ts
var _c0 = ["*"];
var _FillButtonComponent = class _FillButtonComponent {
  constructor(elementRef) {
    this.elementRef = elementRef;
    this.disabled = false;
    this.color = "light";
    this.fill = "outline";
    this.autoAnimate = true;
    this.animationDuration = 2e3;
    this.buttonClick = new EventEmitter();
  }
  ngAfterViewInit() {
    if (this.autoAnimate) {
      this.waitForElementAndAnimate();
    }
  }
  waitForElementAndAnimate() {
    setTimeout(() => {
      this.startAnimation();
    }, 200);
  }
  onButtonClick() {
    this.buttonClick.emit();
  }
  startAnimation() {
    const buttonElement = this.elementRef.nativeElement.querySelector(".fill-button");
    if (!buttonElement) {
      console.warn("FillButtonComponent: ion-button element not found in DOM");
      return;
    }
    const duration = this.animationDuration;
    const steps = 100;
    const interval = duration / steps;
    let currentStep = 0;
    const animation = setInterval(() => {
      if (currentStep >= steps) {
        clearInterval(animation);
        return;
      }
      const progress = currentStep / steps * 100;
      buttonElement.style.setProperty("--fill-width", `${progress}%`);
      currentStep++;
    }, interval);
  }
  resetAnimation() {
    const buttonElement = this.elementRef.nativeElement.querySelector(".fill-button");
    if (buttonElement) {
      buttonElement.style.setProperty("--fill-width", "0%");
    }
  }
};
_FillButtonComponent.\u0275fac = function FillButtonComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FillButtonComponent)(\u0275\u0275directiveInject(ElementRef));
};
_FillButtonComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FillButtonComponent, selectors: [["app-fill-button"]], inputs: { disabled: "disabled", color: "color", fill: "fill", autoAnimate: "autoAnimate", animationDuration: "animationDuration" }, outputs: { buttonClick: "buttonClick" }, ngContentSelectors: _c0, decls: 2, vars: 3, consts: [[1, "fill-button", 3, "click", "color", "fill", "disabled"]], template: function FillButtonComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275elementStart(0, "ion-button", 0);
    \u0275\u0275listener("click", function FillButtonComponent_Template_ion_button_click_0_listener() {
      return ctx.onButtonClick();
    });
    \u0275\u0275projection(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("color", ctx.color)("fill", ctx.fill)("disabled", ctx.disabled);
  }
}, dependencies: [CommonModule, IonButton], styles: ['\n\n.fill-button[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n  color: #fff;\n  --border-style: none;\n  --fill-width: 0%;\n}\n.fill-button[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  background: var(--ion-color-primary-tint);\n  top: 0;\n  left: 0;\n  width: var(--fill-width);\n  height: 100%;\n  z-index: -1;\n  transition: width 0.1s linear;\n}\n/*# sourceMappingURL=fill-button.component.css.map */'] });
var FillButtonComponent = _FillButtonComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FillButtonComponent, [{
    type: Component,
    args: [{ selector: "app-fill-button", imports: [CommonModule, IonButton], template: '<ion-button\n  class="fill-button"\n  [color]="color"\n  [fill]="fill"\n  [disabled]="disabled"\n  (click)="onButtonClick()"\n>\n  <ng-content></ng-content>\n</ion-button>\n', styles: ['/* src/app/components/fill-button/fill-button.component.scss */\n.fill-button {\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n  color: #fff;\n  --border-style: none;\n  --fill-width: 0%;\n}\n.fill-button::before {\n  content: "";\n  position: absolute;\n  background: var(--ion-color-primary-tint);\n  top: 0;\n  left: 0;\n  width: var(--fill-width);\n  height: 100%;\n  z-index: -1;\n  transition: width 0.1s linear;\n}\n/*# sourceMappingURL=fill-button.component.css.map */\n'] }]
  }], () => [{ type: ElementRef }], { disabled: [{
    type: Input
  }], color: [{
    type: Input
  }], fill: [{
    type: Input
  }], autoAnimate: [{
    type: Input
  }], animationDuration: [{
    type: Input
  }], buttonClick: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FillButtonComponent, { className: "FillButtonComponent", filePath: "src/app/components/fill-button/fill-button.component.ts", lineNumber: 18 });
})();

export {
  FillButtonComponent
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9jb21wb25lbnRzL2ZpbGwtYnV0dG9uL2ZpbGwtYnV0dG9uLmNvbXBvbmVudC50cyIsICJzcmMvYXBwL2NvbXBvbmVudHMvZmlsbC1idXR0b24vZmlsbC1idXR0b24uY29tcG9uZW50Lmh0bWwiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBBZnRlclZpZXdJbml0LFxuICBFbGVtZW50UmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJ1xuaW1wb3J0IHsgSW9uQnV0dG9uIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXIvc3RhbmRhbG9uZSdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWZpbGwtYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZpbGwtYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmlsbC1idXR0b24uY29tcG9uZW50LnNjc3MnXSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSW9uQnV0dG9uXSxcbn0pXG5leHBvcnQgY2xhc3MgRmlsbEJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlXG4gIEBJbnB1dCgpIGNvbG9yID0gJ2xpZ2h0J1xuICBASW5wdXQoKSBmaWxsOiAnY2xlYXInIHwgJ291dGxpbmUnIHwgJ3NvbGlkJyA9ICdvdXRsaW5lJ1xuICBASW5wdXQoKSBhdXRvQW5pbWF0ZSA9IHRydWVcbiAgQElucHV0KCkgYW5pbWF0aW9uRHVyYXRpb24gPSAyMDAwIC8vIDIgc2Vjb25kc1xuXG4gIEBPdXRwdXQoKSBidXR0b25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMuYXV0b0FuaW1hdGUpIHtcbiAgICAgIHRoaXMud2FpdEZvckVsZW1lbnRBbmRBbmltYXRlKClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHdhaXRGb3JFbGVtZW50QW5kQW5pbWF0ZSgpIHtcbiAgICAvLyBTaW1wbGUgZGVsYXkgdG8gZW5zdXJlIHRoZSBET00gaXMgcmVhZHlcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc3RhcnRBbmltYXRpb24oKVxuICAgIH0sIDIwMClcbiAgfVxuXG4gIG9uQnV0dG9uQ2xpY2soKSB7XG4gICAgdGhpcy5idXR0b25DbGljay5lbWl0KClcbiAgfVxuXG4gIHByaXZhdGUgc3RhcnRBbmltYXRpb24oKSB7XG4gICAgLy8gRmluZCB0aGUgaW9uLWJ1dHRvbiBpbnNpZGUgdGhlIGNvbXBvbmVudFxuICAgIGNvbnN0IGJ1dHRvbkVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJy5maWxsLWJ1dHRvbidcbiAgICApIGFzIEhUTUxFbGVtZW50XG5cbiAgICBpZiAoIWJ1dHRvbkVsZW1lbnQpIHtcbiAgICAgIGNvbnNvbGUud2FybignRmlsbEJ1dHRvbkNvbXBvbmVudDogaW9uLWJ1dHRvbiBlbGVtZW50IG5vdCBmb3VuZCBpbiBET00nKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZHVyYXRpb24gPSB0aGlzLmFuaW1hdGlvbkR1cmF0aW9uXG4gICAgY29uc3Qgc3RlcHMgPSAxMDBcbiAgICBjb25zdCBpbnRlcnZhbCA9IGR1cmF0aW9uIC8gc3RlcHNcbiAgICBsZXQgY3VycmVudFN0ZXAgPSAwXG5cbiAgICBjb25zdCBhbmltYXRpb24gPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAoY3VycmVudFN0ZXAgPj0gc3RlcHMpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChhbmltYXRpb24pXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9ncmVzcyA9IChjdXJyZW50U3RlcCAvIHN0ZXBzKSAqIDEwMFxuICAgICAgYnV0dG9uRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1maWxsLXdpZHRoJywgYCR7cHJvZ3Jlc3N9JWApXG4gICAgICBjdXJyZW50U3RlcCsrXG4gICAgfSwgaW50ZXJ2YWwpXG4gIH1cblxuICByZXNldEFuaW1hdGlvbigpIHtcbiAgICBjb25zdCBidXR0b25FbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcuZmlsbC1idXR0b24nXG4gICAgKSBhcyBIVE1MRWxlbWVudFxuICAgIGlmIChidXR0b25FbGVtZW50KSB7XG4gICAgICBidXR0b25FbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWZpbGwtd2lkdGgnLCAnMCUnKVxuICAgIH1cbiAgfVxufVxuIiwgIjxpb24tYnV0dG9uXG4gIGNsYXNzPVwiZmlsbC1idXR0b25cIlxuICBbY29sb3JdPVwiY29sb3JcIlxuICBbZmlsbF09XCJmaWxsXCJcbiAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgKGNsaWNrKT1cIm9uQnV0dG9uQ2xpY2soKVwiXG4+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvaW9uLWJ1dHRvbj5cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQk0sSUFBTyx1QkFBUCxNQUFPLHFCQUFtQjtFQVM5QixZQUFvQixZQUFzQjtBQUF0QixTQUFBLGFBQUE7QUFSWCxTQUFBLFdBQVc7QUFDWCxTQUFBLFFBQVE7QUFDUixTQUFBLE9BQXNDO0FBQ3RDLFNBQUEsY0FBYztBQUNkLFNBQUEsb0JBQW9CO0FBRW5CLFNBQUEsY0FBYyxJQUFJLGFBQVk7RUFFSztFQUU3QyxrQkFBZTtBQUNi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
