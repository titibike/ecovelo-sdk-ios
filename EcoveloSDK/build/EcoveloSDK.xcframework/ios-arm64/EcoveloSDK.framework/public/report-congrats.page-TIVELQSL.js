import {
  ConfettiComponent
} from "./chunk-PKEPRIZF.js";
import {
  CommonModule,
  Component,
  IonContent,
  Router,
  TranslateModule,
  TranslatePipe,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-DGENMXJW.js";
import "./chunk-JBNXL77H.js";
import "./chunk-KQEJHESJ.js";
import "./chunk-HYH3NCU4.js";
import "./chunk-DJK765JH.js";
import "./chunk-MCANDFRG.js";
import "./chunk-3T6NUUZ7.js";
import "./chunk-VSCHB6XS.js";
import "./chunk-LHYYZWFK.js";
import "./chunk-2HURGHOF.js";
import "./chunk-WMICZ6Q4.js";
import "./chunk-PWUDMNGE.js";
import "./chunk-EV4ZQC67.js";
import "./chunk-7OBOYUXW.js";
import "./chunk-34HBWEZ3.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// src/app/pages/congrats/report/report-congrats.page.ts
var _ReportCongratsPage = class _ReportCongratsPage {
  constructor(router) {
    this.router = router;
  }
  ionViewWillEnter() {
    return __async(this, null, function* () {
      setTimeout(() => {
        this.router.navigate(["/map"], { replaceUrl: true });
      }, 3e3);
    });
  }
};
_ReportCongratsPage.\u0275fac = function ReportCongratsPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReportCongratsPage)(\u0275\u0275directiveInject(Router));
};
_ReportCongratsPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportCongratsPage, selectors: [["app-report-congrats"]], decls: 12, vars: 11, consts: [["color", "primary", 1, "ion-text-center", "ion-justify-content-center", "ion-align-items-center", 3, "fullscreen"], [1, "fullheight"], [3, "count"], [1, "inner-content"], ["src", "assets/icon/animated/unlock.gif", 3, "alt"], [1, "ion-padding-top"]], template: function ReportCongratsPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content", 0)(1, "div", 1);
    \u0275\u0275element(2, "app-confetti", 2);
    \u0275\u0275elementStart(3, "div", 3);
    \u0275\u0275element(4, "img", 4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "h1", 5);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("count", 50);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("alt", \u0275\u0275pipeBind1(5, 5, "report_congrats.success_alt"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 7, "generic.thanks"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, "report_congrats.message"));
  }
}, dependencies: [IonContent, CommonModule, ConfettiComponent, TranslateModule, TranslatePipe], styles: ["\n\n.fullheight[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.fullheight[_ngcontent-%COMP%]   .inner-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 300px;\n}\n.code[_ngcontent-%COMP%] {\n  border: 1px solid #fff;\n  padding: 1rem 0rem 1rem 1rem;\n  font-size: 2rem;\n  letter-spacing: 1rem;\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=report-congrats.page.css.map */"] });
var ReportCongratsPage = _ReportCongratsPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportCongratsPage, [{
    type: Component,
    args: [{ selector: "app-report-congrats", imports: [IonContent, CommonModule, ConfettiComponent, TranslateModule], template: `<ion-content
  [fullscreen]="true"
  color="primary"
  class="ion-text-center ion-justify-content-center ion-align-items-center"
>
  <div class="fullheight">
    <app-confetti [count]="50"></app-confetti>
    <div class="inner-content">
      <img
        src="assets/icon/animated/unlock.gif"
        alt="{{ 'report_congrats.success_alt' | translate }}"
      />
      <h1 class="ion-padding-top">{{ 'generic.thanks' | translate }}</h1>
      <p>{{ 'report_congrats.message' | translate }}</p>
    </div>
  </div>
</ion-content>
`, styles: ["/* src/app/pages/congrats/report/report-congrats.page.scss */\n.fullheight {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.fullheight .inner-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 300px;\n}\n.code {\n  border: 1px solid #fff;\n  padding: 1rem 0rem 1rem 1rem;\n  font-size: 2rem;\n  letter-spacing: 1rem;\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=report-congrats.page.css.map */\n"] }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportCongratsPage, { className: "ReportCongratsPage", filePath: "src/app/pages/congrats/report/report-congrats.page.ts", lineNumber: 13 });
})();
export {
  ReportCongratsPage
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wYWdlcy9jb25ncmF0cy9yZXBvcnQvcmVwb3J0LWNvbmdyYXRzLnBhZ2UudHMiLCAic3JjL2FwcC9wYWdlcy9jb25ncmF0cy9yZXBvcnQvcmVwb3J0LWNvbmdyYXRzLnBhZ2UuaHRtbCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbidcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcbmltcG9ydCB7IElvbkNvbnRlbnQgfSBmcm9tICdAaW9uaWMvYW5ndWxhci9zdGFuZGFsb25lJ1xuaW1wb3J0IHsgQ29uZmV0dGlDb21wb25lbnQgfSBmcm9tICdzcmMvYXBwL2NvbXBvbmVudHMvY29uZmV0dGkvY29uZmV0dGkuY29tcG9uZW50J1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSdcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLXJlcG9ydC1jb25ncmF0cycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3JlcG9ydC1jb25ncmF0cy5wYWdlLmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3JlcG9ydC1jb25ncmF0cy5wYWdlLnNjc3MnXSxcbiAgICBpbXBvcnRzOiBbSW9uQ29udGVudCwgQ29tbW9uTW9kdWxlLCBDb25mZXR0aUNvbXBvbmVudCwgVHJhbnNsYXRlTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBSZXBvcnRDb25ncmF0c1BhZ2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxuXG4gIGFzeW5jIGlvblZpZXdXaWxsRW50ZXIoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9tYXAnXSwgeyByZXBsYWNlVXJsOiB0cnVlIH0pXG4gICAgfSwgMzAwMClcbiAgfVxufVxuIiwgIjxpb24tY29udGVudFxuICBbZnVsbHNjcmVlbl09XCJ0cnVlXCJcbiAgY29sb3I9XCJwcmltYXJ5XCJcbiAgY2xhc3M9XCJpb24tdGV4dC1jZW50ZXIgaW9uLWp1c3RpZnktY29udGVudC1jZW50ZXIgaW9uLWFsaWduLWl0ZW1zLWNlbnRlclwiXG4+XG4gIDxkaXYgY2xhc3M9XCJmdWxsaGVpZ2h0XCI+XG4gICAgPGFwcC1jb25mZXR0aSBbY291bnRdPVwiNTBcIj48L2FwcC1jb25mZXR0aT5cbiAgICA8ZGl2IGNsYXNzPVwiaW5uZXItY29udGVudFwiPlxuICAgICAgPGltZ1xuICAgICAgICBzcmM9XCJhc3NldHMvaWNvbi9hbmltYXRlZC91bmxvY2suZ2lmXCJcbiAgICAgICAgYWx0PVwie3sgJ3JlcG9ydF9jb25ncmF0cy5zdWNjZXNzX2FsdCcgfCB0cmFuc2xhdGUgfX1cIlxuICAgICAgLz5cbiAgICAgIDxoMSBjbGFzcz1cImlvbi1wYWRkaW5nLXRvcFwiPnt7ICdnZW5lcmljLnRoYW5rcycgfCB0cmFuc2xhdGUgfX08L2gxPlxuICAgICAgPHA+e3sgJ3JlcG9ydF9jb25ncmF0cy5tZXNzYWdlJyB8IHRyYW5zbGF0ZSB9fTwvcD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2lvbi1jb250ZW50PlxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZTSxJQUFPLHNCQUFQLE1BQU8sb0JBQWtCO0VBQzdCLFlBQW9CLFFBQWM7QUFBZCxTQUFBLFNBQUE7RUFBaUI7RUFFL0IsbUJBQWdCOztBQUNwQixpQkFBVyxNQUFLO0FBQ2QsYUFBSyxPQUFPLFNBQVMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxZQUFZLEtBQUksQ0FBRTtNQUNyRCxHQUFHLEdBQUk7SUFDVDs7OzttQ0FQVyxxQkFBa0IsNEJBQUEsTUFBQSxDQUFBO0FBQUE7b0ZBQWxCLHFCQUFrQixXQUFBLENBQUEsQ0FBQSxxQkFBQSxDQUFBLEdBQUEsT0FBQSxJQUFBLE1BQUEsSUFBQSxRQUFBLENBQUEsQ0FBQSxTQUFBLFdBQUEsR0FBQSxtQkFBQSw4QkFBQSwwQkFBQSxHQUFBLFlBQUEsR0FBQSxDQUFBLEdBQUEsWUFBQSxHQUFBLENBQUEsR0FBQSxPQUFBLEdBQUEsQ0FBQSxHQUFBLGVBQUEsR0FBQSxDQUFBLE9BQUEsbUNBQUEsR0FBQSxLQUFBLEdBQUEsQ0FBQSxHQUFBLGlCQUFBLENBQUEsR0FBQSxVQUFBLFNBQUEsNEJBQUEsSUFBQSxLQUFBO0FBQUEsTUFBQSxLQUFBLEdBQUE7QUNaL0IsSUFBQSx5QkFBQSxHQUFBLGVBQUEsQ0FBQSxFQUlDLEdBQUEsT0FBQSxDQUFBO0FBRUcsSUFBQSxvQkFBQSxHQUFBLGdCQUFBLENBQUE7QUFDQSxJQUFBLHlCQUFBLEdBQUEsT0FBQSxDQUFBO0FBQ0UsSUFBQSxvQkFBQSxHQUFBLE9BQUEsQ0FBQTs7QUFJQSxJQUFBLHlCQUFBLEdBQUEsTUFBQSxDQUFBO0FBQTRCLElBQUEsaUJBQUEsQ0FBQTs7QUFBa0MsSUFBQSx1QkFBQTtBQUM5RCxJQUFBLHlCQUFBLEdBQUEsR0FBQTtBQUFHLElBQUEsaUJBQUEsRUFBQTs7QUFBMkMsSUFBQSx1QkFBQSxFQUFJLEVBQzlDLEVBQ0Y7OztBQWROLElBQUEscUJBQUEsY0FBQSxJQUFBO0FBS2dCLElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEscUJBQUEsU0FBQSxFQUFBO0FBSVYsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSxnQ0FBQSxPQUFBLHNCQUFBLEdBQUEsR0FBQSw2QkFBQSxDQUFBO0FBRTBCLElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEsNEJBQUEsc0JBQUEsR0FBQSxHQUFBLGdCQUFBLENBQUE7QUFDekIsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSw0QkFBQSxzQkFBQSxJQUFBLEdBQUEseUJBQUEsQ0FBQTs7a0JESEssWUFBWSxjQUFjLG1CQUFtQixpQkFBZSxhQUFBLEdBQUEsUUFBQSxDQUFBLG9oQkFBQSxFQUFBLENBQUE7QUFFcEUsSUFBTyxxQkFBUDs7c0VBQU8sb0JBQWtCLENBQUE7VUFOOUI7dUJBQ2EsdUJBQXFCLFNBR3RCLENBQUMsWUFBWSxjQUFjLG1CQUFtQixlQUFlLEdBQUMsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FBQSxRQUFBLENBQUEsbWdCQUFBLEVBQUEsQ0FBQTs7Ozs2RUFFOUQsb0JBQWtCLEVBQUEsV0FBQSxzQkFBQSxVQUFBLHlEQUFBLFlBQUEsR0FBQSxDQUFBO0FBQUEsR0FBQTsiLAogICJuYW1lcyI6IFtdCn0K
