import {
  AbonnementWrapperService
} from "./chunk-HCOOL2GW.js";
import {
  LottieComponent
} from "./chunk-CWHK67UA.js";
import {
  IonContent,
  IonicModule
} from "./chunk-Y4K6NO5T.js";
import "./chunk-WJQU3GMM.js";
import "./chunk-CHFOG66O.js";
import "./chunk-RAVV2QIY.js";
import {
  AppstateService
} from "./chunk-T6WE2PS5.js";
import "./chunk-XK4I5MHM.js";
import "./chunk-GVYZRG6X.js";
import "./chunk-FOJAXRYS.js";
import "./chunk-Y7HI6USV.js";
import "./chunk-SARQRLZR.js";
import {
  StorageService
} from "./chunk-U6SJAXLK.js";
import {
  CommonModule,
  Component,
  Router,
  TranslateModule,
  TranslatePipe,
  effect,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-DGENMXJW.js";
import "./chunk-SE3ANTEE.js";
import "./chunk-H7W7X3R4.js";
import "./chunk-644FBQT2.js";
import "./chunk-QATEHYOA.js";
import "./chunk-3MKGIXIK.js";
import "./chunk-5VP4V3BN.js";
import "./chunk-TXLH22R2.js";
import "./chunk-7NA53B7M.js";
import "./chunk-J5JVDPFK.js";
import "./chunk-MUBGKTGO.js";
import "./chunk-FU6YP5BE.js";
import "./chunk-AS7GTWVF.js";
import "./chunk-LYXK2PRG.js";
import "./chunk-2BRJTTQT.js";
import "./chunk-RZR7LWTQ.js";
import "./chunk-YSZWGYJT.js";
import "./chunk-BFPTXCSH.js";
import "./chunk-JBNXL77H.js";
import "./chunk-KQEJHESJ.js";
import "./chunk-KGBWUDTS.js";
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

// src/app/pages/congrats/abonnements/abo-congrats.page.ts
var _c0 = (a0) => ({ program: a0 });
function AboCongratsPage_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "abo_congrats.waiting_validation", \u0275\u0275pureFunction1(4, _c0, ctx_r0.programName)), " ");
  }
}
function AboCongratsPage_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, "abo_congrats.ready_to_ride", \u0275\u0275pureFunction1(4, _c0, ctx_r0.programName)));
  }
}
var _AboCongratsPage = class _AboCongratsPage {
  constructor(router, appStateService, storage, AbonnementWrapperService2) {
    this.router = router;
    this.appStateService = appStateService;
    this.storage = storage;
    this.AbonnementWrapperService = AbonnementWrapperService2;
    this.options = {
      path: "/assets/icon/animated/check.json"
    };
    effect(() => {
      this.currentAbonnement = this.AbonnementWrapperService.currentAbonnementState();
    });
  }
  ionViewWillEnter() {
    return __async(this, null, function* () {
      yield this.storage.get("program").then((prg) => {
        this.programName = prg == null ? void 0 : prg.name;
      });
      setTimeout(() => {
        if (this.appStateService.getAppState().state === "onboarding" || this.appStateService.getAppState().state === "launch") {
          this.appStateService.setAppState({
            state: "new_cyclist",
            dring_state: {
              geolocation_dring: "not_shown"
            },
            push_notifications: "not_shown"
          });
          if (this.currentAbonnement.state == "waiting_validation") {
            this.router.navigate(["/account"], { replaceUrl: true });
          } else {
            this.router.navigate(["/renting"], { replaceUrl: true });
          }
        } else {
          this.router.navigate(["/map"], { replaceUrl: true });
        }
      }, 5e3);
    });
  }
};
_AboCongratsPage.\u0275fac = function AboCongratsPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AboCongratsPage)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AppstateService), \u0275\u0275directiveInject(StorageService), \u0275\u0275directiveInject(AbonnementWrapperService));
};
_AboCongratsPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboCongratsPage, selectors: [["app-abo-congrats"]], decls: 8, vars: 6, consts: [["color", "primary", 1, "ion-text-center", "ion-justify-content-center", "ion-align-items-center", 3, "fullscreen"], [1, "ecl-congrats-modal"], [3, "options"]], template: function AboCongratsPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content", 0)(1, "div", 1);
    \u0275\u0275element(2, "ng-lottie", 2);
    \u0275\u0275elementStart(3, "h1");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, AboCongratsPage_Conditional_6_Template, 3, 6, "p")(7, AboCongratsPage_Conditional_7_Template, 3, 6, "p");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("options", ctx.options);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, "abo_congrats.title"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.programName && ctx.currentAbonnement.state === "waiting_validation" && ctx.currentAbonnement.abonnement.can_rent === false ? 6 : 7);
  }
}, dependencies: [IonicModule, IonContent, CommonModule, TranslateModule, TranslatePipe, LottieComponent], encapsulation: 2 });
var AboCongratsPage = _AboCongratsPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AboCongratsPage, [{
    type: Component,
    args: [{ selector: "app-abo-congrats", imports: [IonicModule, CommonModule, TranslateModule, LottieComponent], template: `<ion-content
  [fullscreen]="true"
  color="primary"
  class="ion-text-center ion-justify-content-center ion-align-items-center"
>
  <div class="ecl-congrats-modal">
    <ng-lottie [options]="options"></ng-lottie>

    <h1>{{ 'abo_congrats.title' | translate }}</h1>
    @if(programName && currentAbonnement.state === 'waiting_validation' &&
    currentAbonnement.abonnement.can_rent === false) {
    <p>
      {{ 'abo_congrats.waiting_validation' | translate:{program: programName} }}
    </p>
    }@else {
    <p>{{ 'abo_congrats.ready_to_ride' | translate:{program: programName} }}</p>
    }
  </div>
</ion-content>
` }]
  }], () => [{ type: Router }, { type: AppstateService }, { type: StorageService }, { type: AbonnementWrapperService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboCongratsPage, { className: "AboCongratsPage", filePath: "src/app/pages/congrats/abonnements/abo-congrats.page.ts", lineNumber: 21 });
})();
export {
  AboCongratsPage
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wYWdlcy9jb25ncmF0cy9hYm9ubmVtZW50cy9hYm8tY29uZ3JhdHMucGFnZS50cyIsICJzcmMvYXBwL3BhZ2VzL2NvbmdyYXRzL2Fib25uZW1lbnRzL2Fiby1jb25ncmF0cy5wYWdlLmh0bWwiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IEFwcGxpY2F0aW9uQ29uZmlnLCBDb21wb25lbnQsIGVmZmVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nXG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJ1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSdcbmltcG9ydCB7IEFwcHN0YXRlU2VydmljZSB9IGZyb20gJ3NyYy9hcHAvc2VydmljZXMvaW50ZXJuYWwvYXBwc3RhdGUuc2VydmljZSdcbmltcG9ydCB7IFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy91dGlscy9zdG9yYWdlLnNlcnZpY2UnXG5pbXBvcnQge1xuICBBYm9ubmVtZW50V3JhcHBlclNlcnZpY2UsXG4gIEN1cnJlbnRBYm9ubmVtZW50U3RhdGUsXG59IGZyb20gJ3NyYy9hcHAvc2VydmljZXMvYXBpLXdyYXBwZXJzL2Fib25uZW1lbnQuc2VydmljZSdcbmltcG9ydCB7IEFuaW1hdGlvbkl0ZW0gfSBmcm9tICdsb3R0aWUtd2ViJ1xuaW1wb3J0IHsgTG90dGllQ29tcG9uZW50LCBBbmltYXRpb25PcHRpb25zIH0gZnJvbSAnbmd4LWxvdHRpZSdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWFiby1jb25ncmF0cycsXG4gIHRlbXBsYXRlVXJsOiAnLi9hYm8tY29uZ3JhdHMucGFnZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWJvLWNvbmdyYXRzLnBhZ2Uuc2NzcyddLFxuICBpbXBvcnRzOiBbSW9uaWNNb2R1bGUsIENvbW1vbk1vZHVsZSwgVHJhbnNsYXRlTW9kdWxlLCBMb3R0aWVDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBBYm9Db25ncmF0c1BhZ2Uge1xuICBwdWJsaWMgcHJvZ3JhbU5hbWU6IHN0cmluZ1xuICBwdWJsaWMgY3VycmVudEFib25uZW1lbnQ6IEN1cnJlbnRBYm9ubmVtZW50U3RhdGVcbiAgb3B0aW9uczogQW5pbWF0aW9uT3B0aW9ucyA9IHtcbiAgICBwYXRoOiAnL2Fzc2V0cy9pY29uL2FuaW1hdGVkL2NoZWNrLmpzb24nLFxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGFwcFN0YXRlU2VydmljZTogQXBwc3RhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgc3RvcmFnZTogU3RvcmFnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBBYm9ubmVtZW50V3JhcHBlclNlcnZpY2U6IEFib25uZW1lbnRXcmFwcGVyU2VydmljZVxuICApIHtcbiAgICBlZmZlY3QoKCkgPT4ge1xuICAgICAgdGhpcy5jdXJyZW50QWJvbm5lbWVudCA9XG4gICAgICAgIHRoaXMuQWJvbm5lbWVudFdyYXBwZXJTZXJ2aWNlLmN1cnJlbnRBYm9ubmVtZW50U3RhdGUoKVxuICAgIH0pXG4gIH1cblxuICBhc3luYyBpb25WaWV3V2lsbEVudGVyKCkge1xuICAgIGF3YWl0IHRoaXMuc3RvcmFnZS5nZXQoJ3Byb2dyYW0nKS50aGVuKChwcmcpID0+IHtcbiAgICAgIHRoaXMucHJvZ3JhbU5hbWUgPSBwcmc/Lm5hbWVcbiAgICB9KVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLmFwcFN0YXRlU2VydmljZS5nZXRBcHBTdGF0ZSgpLnN0YXRlID09PSAnb25ib2FyZGluZycgfHxcbiAgICAgICAgdGhpcy5hcHBTdGF0ZVNlcnZpY2UuZ2V0QXBwU3RhdGUoKS5zdGF0ZSA9PT0gJ2xhdW5jaCdcbiAgICAgICkge1xuICAgICAgICB0aGlzLmFwcFN0YXRlU2VydmljZS5zZXRBcHBTdGF0ZSh7XG4gICAgICAgICAgc3RhdGU6ICduZXdfY3ljbGlzdCcsXG4gICAgICAgICAgZHJpbmdfc3RhdGU6IHtcbiAgICAgICAgICAgIGdlb2xvY2F0aW9uX2RyaW5nOiAnbm90X3Nob3duJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHB1c2hfbm90aWZpY2F0aW9uczogJ25vdF9zaG93bicsXG4gICAgICAgIH0pXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRBYm9ubmVtZW50LnN0YXRlID09ICd3YWl0aW5nX3ZhbGlkYXRpb24nKSB7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYWNjb3VudCddLCB7IHJlcGxhY2VVcmw6IHRydWUgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9yZW50aW5nJ10sIHsgcmVwbGFjZVVybDogdHJ1ZSB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9tYXAnXSwgeyByZXBsYWNlVXJsOiB0cnVlIH0pXG4gICAgICB9XG4gICAgfSwgNTAwMClcbiAgfVxufVxuIiwgIjxpb24tY29udGVudFxuICBbZnVsbHNjcmVlbl09XCJ0cnVlXCJcbiAgY29sb3I9XCJwcmltYXJ5XCJcbiAgY2xhc3M9XCJpb24tdGV4dC1jZW50ZXIgaW9uLWp1c3RpZnktY29udGVudC1jZW50ZXIgaW9uLWFsaWduLWl0ZW1zLWNlbnRlclwiXG4+XG4gIDxkaXYgY2xhc3M9XCJlY2wtY29uZ3JhdHMtbW9kYWxcIj5cbiAgICA8bmctbG90dGllIFtvcHRpb25zXT1cIm9wdGlvbnNcIj48L25nLWxvdHRpZT5cblxuICAgIDxoMT57eyAnYWJvX2NvbmdyYXRzLnRpdGxlJyB8IHRyYW5zbGF0ZSB9fTwvaDE+XG4gICAgQGlmKHByb2dyYW1OYW1lICYmIGN1cnJlbnRBYm9ubmVtZW50LnN0YXRlID09PSAnd2FpdGluZ192YWxpZGF0aW9uJyAmJlxuICAgIGN1cnJlbnRBYm9ubmVtZW50LmFib25uZW1lbnQuY2FuX3JlbnQgPT09IGZhbHNlKSB7XG4gICAgPHA+XG4gICAgICB7eyAnYWJvX2NvbmdyYXRzLndhaXRpbmdfdmFsaWRhdGlvbicgfCB0cmFuc2xhdGU6e3Byb2dyYW06IHByb2dyYW1OYW1lfSB9fVxuICAgIDwvcD5cbiAgICB9QGVsc2Uge1xuICAgIDxwPnt7ICdhYm9fY29uZ3JhdHMucmVhZHlfdG9fcmlkZScgfCB0cmFuc2xhdGU6e3Byb2dyYW06IHByb2dyYW1OYW1lfSB9fTwvcD5cbiAgICB9XG4gIDwvZGl2PlxuPC9pb24tY29udGVudD5cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNXSSxJQUFBLHlCQUFBLEdBQUEsR0FBQTtBQUNFLElBQUEsaUJBQUEsQ0FBQTs7QUFDRixJQUFBLHVCQUFBOzs7O0FBREUsSUFBQSxvQkFBQTtBQUFBLElBQUEsNkJBQUEsS0FBQSxzQkFBQSxHQUFBLEdBQUEsbUNBQUEsMEJBQUEsR0FBQSxLQUFBLE9BQUEsV0FBQSxDQUFBLEdBQUEsR0FBQTs7Ozs7QUFHRixJQUFBLHlCQUFBLEdBQUEsR0FBQTtBQUFHLElBQUEsaUJBQUEsQ0FBQTs7QUFBcUUsSUFBQSx1QkFBQTs7OztBQUFyRSxJQUFBLG9CQUFBO0FBQUEsSUFBQSw0QkFBQSxzQkFBQSxHQUFBLEdBQUEsOEJBQUEsMEJBQUEsR0FBQSxLQUFBLE9BQUEsV0FBQSxDQUFBLENBQUE7OztBREtELElBQU8sbUJBQVAsTUFBTyxpQkFBZTtFQU8xQixZQUNVLFFBQ0EsaUJBQ0EsU0FDQUEsMkJBQWtEO0FBSGxE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
