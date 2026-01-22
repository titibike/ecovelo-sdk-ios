import {
  ConfettiComponent
} from "./chunk-PKEPRIZF.js";
import {
  LottieComponent
} from "./chunk-CWHK67UA.js";
import {
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

// src/app/pages/congrats/recommandation/recommandation.page.ts
var _RecommandationPage = class _RecommandationPage {
  constructor(router) {
    this.router = router;
    this.options = {
      path: "/assets/icon/animated/thumb.json"
    };
  }
  ionViewWillEnter() {
    return __async(this, null, function* () {
      setTimeout(() => {
        this.router.navigate(["/map"], { replaceUrl: true });
      }, 5e3);
    });
  }
};
_RecommandationPage.\u0275fac = function RecommandationPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RecommandationPage)(\u0275\u0275directiveInject(Router));
};
_RecommandationPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecommandationPage, selectors: [["app-recommandation"]], decls: 10, vars: 9, consts: [["color", "primary", 1, "ion-text-center", "ion-justify-content-center", "ion-align-items-center", 3, "fullscreen"], [1, "ecl-congrats-modal"], [3, "count"], [3, "options"], [1, "ion-padding-top"]], template: function RecommandationPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content", 0)(1, "div", 1);
    \u0275\u0275element(2, "app-confetti", 2)(3, "ng-lottie", 3);
    \u0275\u0275elementStart(4, "h1", 4);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("count", 50);
    \u0275\u0275advance();
    \u0275\u0275property("options", ctx.options);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 5, "generic.thanks"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 7, "recommandation_congrats.message"));
  }
}, dependencies: [
  IonContent,
  CommonModule,
  FormsModule,
  TranslateModule,
  TranslatePipe,
  ConfettiComponent,
  LottieComponent
], encapsulation: 2 });
var RecommandationPage = _RecommandationPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecommandationPage, [{
    type: Component,
    args: [{ selector: "app-recommandation", imports: [
      IonContent,
      CommonModule,
      FormsModule,
      TranslateModule,
      ConfettiComponent,
      LottieComponent
    ], template: `<ion-content
  [fullscreen]="true"
  color="primary"
  class="ion-text-center ion-justify-content-center ion-align-items-center"
>
  <div class="ecl-congrats-modal">
    <app-confetti [count]="50"></app-confetti>
    <ng-lottie [options]="options"></ng-lottie>
    <h1 class="ion-padding-top">{{ 'generic.thanks' | translate }}</h1>
    <p>{{ 'recommandation_congrats.message' | translate }}</p>
  </div>
</ion-content>
` }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecommandationPage, { className: "RecommandationPage", filePath: "src/app/pages/congrats/recommandation/recommandation.page.ts", lineNumber: 28 });
})();
export {
  RecommandationPage
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wYWdlcy9jb25ncmF0cy9yZWNvbW1hbmRhdGlvbi9yZWNvbW1hbmRhdGlvbi5wYWdlLnRzIiwgInNyYy9hcHAvcGFnZXMvY29uZ3JhdHMvcmVjb21tYW5kYXRpb24vcmVjb21tYW5kYXRpb24ucGFnZS5odG1sIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJ1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3JtcydcbmltcG9ydCB7XG4gIElvbkNvbnRlbnQsXG4gIElvbkhlYWRlcixcbiAgSW9uVGl0bGUsXG4gIElvblRvb2xiYXIsXG59IGZyb20gJ0Bpb25pYy9hbmd1bGFyL3N0YW5kYWxvbmUnXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInXG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJ1xuaW1wb3J0IHsgQ29uZmV0dGlDb21wb25lbnQgfSBmcm9tICdzcmMvYXBwL2NvbXBvbmVudHMvY29uZmV0dGkvY29uZmV0dGkuY29tcG9uZW50J1xuaW1wb3J0IHsgQW5pbWF0aW9uT3B0aW9ucywgTG90dGllQ29tcG9uZW50IH0gZnJvbSAnbmd4LWxvdHRpZSdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXJlY29tbWFuZGF0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JlY29tbWFuZGF0aW9uLnBhZ2UuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3JlY29tbWFuZGF0aW9uLnBhZ2Uuc2NzcyddLFxuICBpbXBvcnRzOiBbXG4gICAgSW9uQ29udGVudCxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICAgIENvbmZldHRpQ29tcG9uZW50LFxuICAgIExvdHRpZUNvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUmVjb21tYW5kYXRpb25QYWdlIHtcbiAgb3B0aW9uczogQW5pbWF0aW9uT3B0aW9ucyA9IHtcbiAgICBwYXRoOiAnL2Fzc2V0cy9pY29uL2FuaW1hdGVkL3RodW1iLmpzb24nLFxuICB9XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHt9XG5cbiAgYXN5bmMgaW9uVmlld1dpbGxFbnRlcigpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL21hcCddLCB7IHJlcGxhY2VVcmw6IHRydWUgfSlcbiAgICB9LCA1MDAwKVxuICB9XG59XG4iLCAiPGlvbi1jb250ZW50XG4gIFtmdWxsc2NyZWVuXT1cInRydWVcIlxuICBjb2xvcj1cInByaW1hcnlcIlxuICBjbGFzcz1cImlvbi10ZXh0LWNlbnRlciBpb24tanVzdGlmeS1jb250ZW50LWNlbnRlciBpb24tYWxpZ24taXRlbXMtY2VudGVyXCJcbj5cbiAgPGRpdiBjbGFzcz1cImVjbC1jb25ncmF0cy1tb2RhbFwiPlxuICAgIDxhcHAtY29uZmV0dGkgW2NvdW50XT1cIjUwXCI+PC9hcHAtY29uZmV0dGk+XG4gICAgPG5nLWxvdHRpZSBbb3B0aW9uc109XCJvcHRpb25zXCI+PC9uZy1sb3R0aWU+XG4gICAgPGgxIGNsYXNzPVwiaW9uLXBhZGRpbmctdG9wXCI+e3sgJ2dlbmVyaWMudGhhbmtzJyB8IHRyYW5zbGF0ZSB9fTwvaDE+XG4gICAgPHA+e3sgJ3JlY29tbWFuZGF0aW9uX2NvbmdyYXRzLm1lc3NhZ2UnIHwgdHJhbnNsYXRlIH19PC9wPlxuICA8L2Rpdj5cbjwvaW9uLWNvbnRlbnQ+XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCTSxJQUFPLHNCQUFQLE1BQU8sb0JBQWtCO0VBSTdCLFlBQW9CLFFBQWM7QUFBZCxTQUFBLFNBQUE7QUFIcEIsU0FBQSxVQUE0QjtNQUMxQixNQUFNOztFQUU2QjtFQUUvQixtQkFBZ0I7O0FBQ3BCLGlCQUFXLE1BQUs7QUFDZCxhQUFLLE9BQU8sU0FBUyxDQUFDLE1BQU0sR0FBRyxFQUFFLFlBQVksS0FBSSxDQUFFO01BQ3JELEdBQUcsR0FBSTtJQUNUOzs7O21DQVZXLHFCQUFrQiw0QkFBQSxNQUFBLENBQUE7QUFBQTtvRkFBbEIscUJBQWtCLFdBQUEsQ0FBQSxDQUFBLG9CQUFBLENBQUEsR0FBQSxPQUFBLElBQUEsTUFBQSxHQUFBLFFBQUEsQ0FBQSxDQUFBLFNBQUEsV0FBQSxHQUFBLG1CQUFBLDhCQUFBLDBCQUFBLEdBQUEsWUFBQSxHQUFBLENBQUEsR0FBQSxvQkFBQSxHQUFBLENBQUEsR0FBQSxPQUFBLEdBQUEsQ0FBQSxHQUFBLFNBQUEsR0FBQSxDQUFBLEdBQUEsaUJBQUEsQ0FBQSxHQUFBLFVBQUEsU0FBQSw0QkFBQSxJQUFBLEtBQUE7QUFBQSxNQUFBLEtBQUEsR0FBQTtBQzNCL0IsSUFBQSx5QkFBQSxHQUFBLGVBQUEsQ0FBQSxFQUlDLEdBQUEsT0FBQSxDQUFBO0FBRUcsSUFBQSxvQkFBQSxHQUFBLGdCQUFBLENBQUEsRUFBMEMsR0FBQSxhQUFBLENBQUE7QUFFMUMsSUFBQSx5QkFBQSxHQUFBLE1BQUEsQ0FBQTtBQUE0QixJQUFBLGlCQUFBLENBQUE7O0FBQWtDLElBQUEsdUJBQUE7QUFDOUQsSUFBQSx5QkFBQSxHQUFBLEdBQUE7QUFBRyxJQUFBLGlCQUFBLENBQUE7O0FBQW1ELElBQUEsdUJBQUEsRUFBSSxFQUN0RDs7O0FBVE4sSUFBQSxxQkFBQSxjQUFBLElBQUE7QUFLZ0IsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSxxQkFBQSxTQUFBLEVBQUE7QUFDSCxJQUFBLG9CQUFBO0FBQUEsSUFBQSxxQkFBQSxXQUFBLElBQUEsT0FBQTtBQUNpQixJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLDRCQUFBLHNCQUFBLEdBQUEsR0FBQSxnQkFBQSxDQUFBO0FBQ3pCLElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEsNEJBQUEsc0JBQUEsR0FBQSxHQUFBLGlDQUFBLENBQUE7OztFRFVIO0VBQ0E7RUFDQTtFQUNBO0VBQWU7RUFDZjtFQUNBO0FBQWUsR0FBQSxlQUFBLEVBQUEsQ0FBQTtBQUdiLElBQU8scUJBQVA7O3NFQUFPLG9CQUFrQixDQUFBO1VBYjlCO3VCQUNXLHNCQUFvQixTQUdyQjtNQUNQO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtPQUNELFVBQUE7Ozs7Ozs7Ozs7OztFQUFBLENBQUE7Ozs7NkVBRVUsb0JBQWtCLEVBQUEsV0FBQSxzQkFBQSxVQUFBLGdFQUFBLFlBQUEsR0FBQSxDQUFBO0FBQUEsR0FBQTsiLAogICJuYW1lcyI6IFtdCn0K
