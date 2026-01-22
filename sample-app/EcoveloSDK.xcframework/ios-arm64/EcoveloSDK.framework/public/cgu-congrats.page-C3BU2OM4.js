import {
  ConfettiComponent
} from "./chunk-PKEPRIZF.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  FormsModule,
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

// src/app/pages/congrats/cgu-congrats/cgu-congrats.page.ts
var _CguCongratsPage = class _CguCongratsPage {
  constructor(route, router) {
    this.route = route;
    this.router = router;
  }
  ionViewWillEnter() {
    return __async(this, null, function* () {
      this.route.queryParams.subscribe((params) => {
        if (params["nextUrl"]) {
          setTimeout(() => {
            this.router.navigate([params["nextUrl"]], { replaceUrl: true });
          }, 5e3);
        } else {
          setTimeout(() => {
            this.router.navigate(["/account/settings/cgu"], { replaceUrl: true });
          }, 5e3);
        }
      });
    });
  }
};
_CguCongratsPage.\u0275fac = function CguCongratsPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CguCongratsPage)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
};
_CguCongratsPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CguCongratsPage, selectors: [["app-cgu-congrats"]], decls: 12, vars: 11, consts: [["color", "primary", 1, "ion-text-center", "ion-justify-content-center", "ion-align-items-center", 3, "fullscreen"], [1, "fullheight"], [3, "count"], [1, "inner-content"], ["src", "assets/icon/animated/unlock.gif", 3, "alt"], [1, "ion-padding-top"]], template: function CguCongratsPage_Template(rf, ctx) {
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
    \u0275\u0275propertyInterpolate("alt", \u0275\u0275pipeBind1(5, 5, "cgu_congrats.success_alt"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 7, "cgu_congrats.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, "cgu_congrats.message"));
  }
}, dependencies: [
  IonContent,
  CommonModule,
  FormsModule,
  TranslateModule,
  TranslatePipe,
  ConfettiComponent
], styles: ["\n\n.fullheight[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.fullheight[_ngcontent-%COMP%]   .inner-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 300px;\n}\n.code[_ngcontent-%COMP%] {\n  border: 1px solid #fff;\n  padding: 1rem 0rem 1rem 1rem;\n  font-size: 2rem;\n  letter-spacing: 1rem;\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=cgu-congrats.page.css.map */"] });
var CguCongratsPage = _CguCongratsPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CguCongratsPage, [{
    type: Component,
    args: [{ selector: "app-cgu-congrats", imports: [
      IonContent,
      CommonModule,
      FormsModule,
      TranslateModule,
      ConfettiComponent
    ], template: `<ion-content
  [fullscreen]="true"
  color="primary"
  class="ion-text-center ion-justify-content-center ion-align-items-center"
>
  <div class="fullheight">
    <app-confetti [count]="50"></app-confetti>
    <div class="inner-content">
      <img
        src="assets/icon/animated/unlock.gif"
        alt="{{ 'cgu_congrats.success_alt' | translate }}"
      />
      <h1 class="ion-padding-top">{{ 'cgu_congrats.title' | translate }}</h1>
      <p>{{ 'cgu_congrats.message' | translate }}</p>
    </div>
  </div>
</ion-content>
`, styles: ["/* src/app/pages/congrats/cgu-congrats/cgu-congrats.page.scss */\n.fullheight {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.fullheight .inner-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 300px;\n}\n.code {\n  border: 1px solid #fff;\n  padding: 1rem 0rem 1rem 1rem;\n  font-size: 2rem;\n  letter-spacing: 1rem;\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=cgu-congrats.page.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CguCongratsPage, { className: "CguCongratsPage", filePath: "src/app/pages/congrats/cgu-congrats/cgu-congrats.page.ts", lineNumber: 26 });
})();
export {
  CguCongratsPage
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wYWdlcy9jb25ncmF0cy9jZ3UtY29uZ3JhdHMvY2d1LWNvbmdyYXRzLnBhZ2UudHMiLCAic3JjL2FwcC9wYWdlcy9jb25ncmF0cy9jZ3UtY29uZ3JhdHMvY2d1LWNvbmdyYXRzLnBhZ2UuaHRtbCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJ1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3JtcydcbmltcG9ydCB7XG4gIElvbkNvbnRlbnQsXG4gIElvbkhlYWRlcixcbiAgSW9uVGl0bGUsXG4gIElvblRvb2xiYXIsXG59IGZyb20gJ0Bpb25pYy9hbmd1bGFyL3N0YW5kYWxvbmUnXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSdcbmltcG9ydCB7IENvbmZldHRpQ29tcG9uZW50IH0gZnJvbSAnc3JjL2FwcC9jb21wb25lbnRzL2NvbmZldHRpL2NvbmZldHRpLmNvbXBvbmVudCdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWNndS1jb25ncmF0cycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jZ3UtY29uZ3JhdHMucGFnZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2d1LWNvbmdyYXRzLnBhZ2Uuc2NzcyddLFxuICBpbXBvcnRzOiBbXG4gICAgSW9uQ29udGVudCxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICAgIENvbmZldHRpQ29tcG9uZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDZ3VDb25ncmF0c1BhZ2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cblxuICBhc3luYyBpb25WaWV3V2lsbEVudGVyKCkge1xuICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcbiAgICAgIGlmIChwYXJhbXNbJ25leHRVcmwnXSkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbcGFyYW1zWyduZXh0VXJsJ11dLCB7IHJlcGxhY2VVcmw6IHRydWUgfSlcbiAgICAgICAgfSwgNTAwMClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FjY291bnQvc2V0dGluZ3MvY2d1J10sIHsgcmVwbGFjZVVybDogdHJ1ZSB9KVxuICAgICAgICB9LCA1MDAwKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiIsICI8aW9uLWNvbnRlbnRcbiAgW2Z1bGxzY3JlZW5dPVwidHJ1ZVwiXG4gIGNvbG9yPVwicHJpbWFyeVwiXG4gIGNsYXNzPVwiaW9uLXRleHQtY2VudGVyIGlvbi1qdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGlvbi1hbGlnbi1pdGVtcy1jZW50ZXJcIlxuPlxuICA8ZGl2IGNsYXNzPVwiZnVsbGhlaWdodFwiPlxuICAgIDxhcHAtY29uZmV0dGkgW2NvdW50XT1cIjUwXCI+PC9hcHAtY29uZmV0dGk+XG4gICAgPGRpdiBjbGFzcz1cImlubmVyLWNvbnRlbnRcIj5cbiAgICAgIDxpbWdcbiAgICAgICAgc3JjPVwiYXNzZXRzL2ljb24vYW5pbWF0ZWQvdW5sb2NrLmdpZlwiXG4gICAgICAgIGFsdD1cInt7ICdjZ3VfY29uZ3JhdHMuc3VjY2Vzc19hbHQnIHwgdHJhbnNsYXRlIH19XCJcbiAgICAgIC8+XG4gICAgICA8aDEgY2xhc3M9XCJpb24tcGFkZGluZy10b3BcIj57eyAnY2d1X2NvbmdyYXRzLnRpdGxlJyB8IHRyYW5zbGF0ZSB9fTwvaDE+XG4gICAgICA8cD57eyAnY2d1X2NvbmdyYXRzLm1lc3NhZ2UnIHwgdHJhbnNsYXRlIH19PC9wPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvaW9uLWNvbnRlbnQ+XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJNLElBQU8sbUJBQVAsTUFBTyxpQkFBZTtFQUMxQixZQUFvQixPQUErQixRQUFjO0FBQTdDLFNBQUEsUUFBQTtBQUErQixTQUFBLFNBQUE7RUFBaUI7RUFFOUQsbUJBQWdCOztBQUNwQixXQUFLLE1BQU0sWUFBWSxVQUFVLENBQUMsV0FBVTtBQUMxQyxZQUFJLE9BQU8sU0FBUyxHQUFHO0FBQ3JCLHFCQUFXLE1BQUs7QUFDZCxpQkFBSyxPQUFPLFNBQVMsQ0FBQyxPQUFPLFNBQVMsQ0FBQyxHQUFHLEVBQUUsWUFBWSxLQUFJLENBQUU7VUFDaEUsR0FBRyxHQUFJO1FBQ1QsT0FBTztBQUNMLHFCQUFXLE1BQUs7QUFDZCxpQkFBSyxPQUFPLFNBQVMsQ0FBQyx1QkFBdUIsR0FBRyxFQUFFLFlBQVksS0FBSSxDQUFFO1VBQ3RFLEdBQUcsR0FBSTtRQUNUO01BQ0YsQ0FBQztJQUNIOzs7O21DQWZXLGtCQUFlLDRCQUFBLGNBQUEsR0FBQSw0QkFBQSxNQUFBLENBQUE7QUFBQTtpRkFBZixrQkFBZSxXQUFBLENBQUEsQ0FBQSxrQkFBQSxDQUFBLEdBQUEsT0FBQSxJQUFBLE1BQUEsSUFBQSxRQUFBLENBQUEsQ0FBQSxTQUFBLFdBQUEsR0FBQSxtQkFBQSw4QkFBQSwwQkFBQSxHQUFBLFlBQUEsR0FBQSxDQUFBLEdBQUEsWUFBQSxHQUFBLENBQUEsR0FBQSxPQUFBLEdBQUEsQ0FBQSxHQUFBLGVBQUEsR0FBQSxDQUFBLE9BQUEsbUNBQUEsR0FBQSxLQUFBLEdBQUEsQ0FBQSxHQUFBLGlCQUFBLENBQUEsR0FBQSxVQUFBLFNBQUEseUJBQUEsSUFBQSxLQUFBO0FBQUEsTUFBQSxLQUFBLEdBQUE7QUN6QjVCLElBQUEseUJBQUEsR0FBQSxlQUFBLENBQUEsRUFJQyxHQUFBLE9BQUEsQ0FBQTtBQUVHLElBQUEsb0JBQUEsR0FBQSxnQkFBQSxDQUFBO0FBQ0EsSUFBQSx5QkFBQSxHQUFBLE9BQUEsQ0FBQTtBQUNFLElBQUEsb0JBQUEsR0FBQSxPQUFBLENBQUE7O0FBSUEsSUFBQSx5QkFBQSxHQUFBLE1BQUEsQ0FBQTtBQUE0QixJQUFBLGlCQUFBLENBQUE7O0FBQXNDLElBQUEsdUJBQUE7QUFDbEUsSUFBQSx5QkFBQSxHQUFBLEdBQUE7QUFBRyxJQUFBLGlCQUFBLEVBQUE7O0FBQXdDLElBQUEsdUJBQUEsRUFBSSxFQUMzQyxFQUNGOzs7QUFkTixJQUFBLHFCQUFBLGNBQUEsSUFBQTtBQUtnQixJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLHFCQUFBLFNBQUEsRUFBQTtBQUlWLElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEsZ0NBQUEsT0FBQSxzQkFBQSxHQUFBLEdBQUEsMEJBQUEsQ0FBQTtBQUUwQixJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLDRCQUFBLHNCQUFBLEdBQUEsR0FBQSxvQkFBQSxDQUFBO0FBQ3pCLElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEsNEJBQUEsc0JBQUEsSUFBQSxHQUFBLHNCQUFBLENBQUE7OztFREtMO0VBQ0E7RUFDQTtFQUNBO0VBQWU7RUFDZjtBQUFpQixHQUFBLFFBQUEsQ0FBQSxpaEJBQUEsRUFBQSxDQUFBO0FBR2YsSUFBTyxrQkFBUDs7c0VBQU8saUJBQWUsQ0FBQTtVQVozQjt1QkFDVyxvQkFBa0IsU0FHbkI7TUFDUDtNQUNBO01BQ0E7TUFDQTtNQUNBO09BQ0QsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FBQSxRQUFBLENBQUEsbWdCQUFBLEVBQUEsQ0FBQTs7Ozs2RUFFVSxpQkFBZSxFQUFBLFdBQUEsbUJBQUEsVUFBQSw0REFBQSxZQUFBLEdBQUEsQ0FBQTtBQUFBLEdBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
