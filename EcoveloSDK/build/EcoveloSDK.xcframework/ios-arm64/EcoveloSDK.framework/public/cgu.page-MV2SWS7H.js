import {
  CguComponent
} from "./chunk-JXTFHILF.js";
import {
  CguService
} from "./chunk-ZRNIHMT6.js";
import {
  HeaderComponent
} from "./chunk-AVAJ3QHV.js";
import "./chunk-K2AWDLYV.js";
import "./chunk-7JCEDXGT.js";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonFooter,
  IonItem,
  IonText,
  IonicModule
} from "./chunk-Y4K6NO5T.js";
import {
  AccountService
} from "./chunk-XK4I5MHM.js";
import "./chunk-FOJAXRYS.js";
import {
  ErrorHandlerService
} from "./chunk-SARQRLZR.js";
import "./chunk-3E6DEK7U.js";
import "./chunk-U6SJAXLK.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  DatePipe,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
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

// src/app/pages/account/cgu/cgu.page.ts
function CguPage_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item", 2)(1, "ion-text");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(3, 2, "cgu.accepted_on"), " ", \u0275\u0275pipeBind2(4, 4, (ctx_r0.cyclistState.cyclist.registrations == null ? null : ctx_r0.cyclistState.cyclist.registrations.data == null ? null : ctx_r0.cyclistState.cyclist.registrations.data[0] == null ? null : ctx_r0.cyclistState.cyclist.registrations.data[0].terms_validated_at) * 1e3, "dd/MM/yyyy"), " ");
  }
}
function CguPage_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-card", 3)(1, "ion-card-content", 4)(2, "ion-text");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "ion-button", 5);
    \u0275\u0275listener("click", function CguPage_Conditional_5_Template_ion_button_click_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.validateTerms());
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(4, 3, "cgu.update_message"), " ", \u0275\u0275pipeBind2(5, 5, ctx_r0.cguLoadingState.cgu.updated * 1e3, "dd/MM/yyyy"), "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 8, "cgu.accept_button"), " ");
  }
}
var _CguPage = class _CguPage {
  constructor(cguService, router, accountService, errorHandler, route) {
    this.cguService = cguService;
    this.router = router;
    this.accountService = accountService;
    this.errorHandler = errorHandler;
    this.route = route;
    this.cyclistState = {
      state: "unknown",
      blocked_reasons: ["Unknown account state"]
    };
    this.nextUrl = null;
    this.route.queryParams.subscribe((params) => {
      if (params["nextUrl"]) {
        this.nextUrl = params["nextUrl"];
      }
    });
    this.cguService.cguLoadingState.subscribe((state) => {
      this.cguLoadingState = state;
    });
    effect(() => {
      this.cyclistState = this.accountService.cyclistState();
    });
  }
  validateTerms() {
    return __async(this, null, function* () {
      yield this.cguService.validateTerms().then(() => __async(this, null, function* () {
        yield this.router.navigate(["/cgu-congrats"], {
          queryParams: { nextUrl: this.nextUrl }
        });
      })).catch((error) => __async(this, null, function* () {
        this.errorHandler.handleError(error);
      }));
    });
  }
};
_CguPage.\u0275fac = function CguPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CguPage)(\u0275\u0275directiveInject(CguService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AccountService), \u0275\u0275directiveInject(ErrorHandlerService), \u0275\u0275directiveInject(ActivatedRoute));
};
_CguPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CguPage, selectors: [["app-cgu-page"]], decls: 6, vars: 2, consts: [[3, "defaultHref"], [1, "ion-padding"], ["lines", "none", 1, "ion-text-center"], [1, "ion-no-margin"], [1, "ion-text-center"], ["expand", "block", 1, "ion-margin", 3, "click"]], template: function CguPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-header", 0);
    \u0275\u0275elementStart(1, "ion-content");
    \u0275\u0275element(2, "app-cgu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-footer", 1);
    \u0275\u0275template(4, CguPage_Conditional_4_Template, 5, 7, "ion-item", 2)(5, CguPage_Conditional_5_Template, 9, 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("defaultHref", "/account/settings");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx.cguLoadingState.state === "success" && ctx.cyclistState.state === "active" && (ctx.cyclistState.cyclist.registrations == null ? null : ctx.cyclistState.cyclist.registrations.data == null ? null : ctx.cyclistState.cyclist.registrations.data[0] == null ? null : ctx.cyclistState.cyclist.registrations.data[0].terms_validated) ? 4 : ctx.cguLoadingState.state === "success" && ctx.cyclistState.state !== "unknown" && ctx.cyclistState.state !== "error" && (ctx.cyclistState.cyclist.registrations == null ? null : ctx.cyclistState.cyclist.registrations.data == null ? null : ctx.cyclistState.cyclist.registrations.data[0] == null ? null : ctx.cyclistState.cyclist.registrations.data[0].terms_validated) === false ? 5 : -1);
  }
}, dependencies: [
  CommonModule,
  DatePipe,
  IonicModule,
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonFooter,
  IonItem,
  IonText,
  CguComponent,
  HeaderComponent,
  TranslateModule,
  TranslatePipe
], encapsulation: 2 });
var CguPage = _CguPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CguPage, [{
    type: Component,
    args: [{ selector: "app-cgu-page", imports: [
      CommonModule,
      IonicModule,
      CguComponent,
      HeaderComponent,
      TranslateModule
    ], template: `<app-header [defaultHref]="'/account/settings'"></app-header>
<ion-content>
  <app-cgu></app-cgu>
</ion-content>
<ion-footer class="ion-padding">
  @if(cguLoadingState.state === 'success' && cyclistState.state === 'active' &&
  cyclistState.cyclist.registrations?.data?.[0]?.terms_validated) {
  <ion-item lines="none" class="ion-text-center">
    <ion-text>
      {{ 'cgu.accepted_on' | translate }} {{
      cyclistState.cyclist.registrations?.data?.[0]?.terms_validated_at! * 1000
      | date : 'dd/MM/yyyy' }}
    </ion-text>
  </ion-item>
  } @else if (cguLoadingState.state === 'success' && cyclistState.state !==
  'unknown' && cyclistState.state !== 'error' &&
  cyclistState.cyclist.registrations?.data?.[0]?.terms_validated === false) {
  <ion-card class="ion-no-margin">
    <ion-card-content class="ion-text-center">
      <ion-text
        >{{ 'cgu.update_message' | translate }} {{ cguLoadingState.cgu.updated!
        * 1000 | date : 'dd/MM/yyyy' }}</ion-text
      >
    </ion-card-content>
  </ion-card>
  <ion-button (click)="validateTerms()" expand="block" class="ion-margin">
    {{ 'cgu.accept_button' | translate }}
  </ion-button>
  }
</ion-footer>
` }]
  }], () => [{ type: CguService }, { type: Router }, { type: AccountService }, { type: ErrorHandlerService }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CguPage, { className: "CguPage", filePath: "src/app/pages/account/cgu/cgu.page.ts", lineNumber: 28 });
})();
export {
  CguPage
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wYWdlcy9hY2NvdW50L2NndS9jZ3UucGFnZS50cyIsICJzcmMvYXBwL3BhZ2VzL2FjY291bnQvY2d1L2NndS5wYWdlLmh0bWwiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IENvbXBvbmVudCwgZWZmZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbidcbmltcG9ydCB7IElvbmljTW9kdWxlIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInXG5pbXBvcnQgeyBDZ3VDb21wb25lbnQgfSBmcm9tICdzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWxzL2NndS9jZ3UuY29tcG9uZW50J1xuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnc3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50J1xuaW1wb3J0IHtcbiAgQ2d1U2VydmljZSxcbiAgY2d1TG9hZGluZ1N0YXRlLFxufSBmcm9tICdzcmMvYXBwL3NlcnZpY2VzL2FwaS13cmFwcGVycy9jZ3Uuc2VydmljZSdcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xuaW1wb3J0IHtcbiAgQWNjb3VudFNlcnZpY2UsXG4gIGN5Y2xpc3RTdGF0ZSxcbn0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy9hcGktd3JhcHBlcnMvYWNjb3VudC5zZXJ2aWNlJ1xuaW1wb3J0IHsgRXJyb3JIYW5kbGVyU2VydmljZSB9IGZyb20gJ3NyYy9hcHAvc2VydmljZXMvdXRpbHMvZXJyb3ItaGFuZGxlci5zZXJ2aWNlJ1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWNndS1wYWdlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NndS5wYWdlLmh0bWwnLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIElvbmljTW9kdWxlLFxuICAgIENndUNvbXBvbmVudCxcbiAgICBIZWFkZXJDb21wb25lbnQsXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDZ3VQYWdlIHtcbiAgY2d1TG9hZGluZ1N0YXRlOiBjZ3VMb2FkaW5nU3RhdGVcbiAgY3ljbGlzdFN0YXRlOiBjeWNsaXN0U3RhdGUgPSB7XG4gICAgc3RhdGU6ICd1bmtub3duJyxcbiAgICBibG9ja2VkX3JlYXNvbnM6IFsnVW5rbm93biBhY2NvdW50IHN0YXRlJ10sXG4gIH1cbiAgbmV4dFVybDogc3RyaW5nIHwgbnVsbCA9IG51bGxcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGNndVNlcnZpY2U6IENndVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGFjY291bnRTZXJ2aWNlOiBBY2NvdW50U2VydmljZSxcbiAgICBwcml2YXRlIGVycm9ySGFuZGxlcjogRXJyb3JIYW5kbGVyU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICApIHtcbiAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XG4gICAgICBpZiAocGFyYW1zWyduZXh0VXJsJ10pIHtcbiAgICAgICAgdGhpcy5uZXh0VXJsID0gcGFyYW1zWyduZXh0VXJsJ11cbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuY2d1U2VydmljZS5jZ3VMb2FkaW5nU3RhdGUuc3Vic2NyaWJlKChzdGF0ZSkgPT4ge1xuICAgICAgdGhpcy5jZ3VMb2FkaW5nU3RhdGUgPSBzdGF0ZVxuICAgIH0pXG4gICAgZWZmZWN0KCgpID0+IHtcbiAgICAgIHRoaXMuY3ljbGlzdFN0YXRlID0gdGhpcy5hY2NvdW50U2VydmljZS5jeWNsaXN0U3RhdGUoKVxuICAgIH0pXG4gIH1cblxuICBhc3luYyB2YWxpZGF0ZVRlcm1zKCkge1xuICAgIGF3YWl0IHRoaXMuY2d1U2VydmljZVxuICAgICAgLnZhbGlkYXRlVGVybXMoKVxuICAgICAgLnRoZW4oYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9jZ3UtY29uZ3JhdHMnXSwge1xuICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7IG5leHRVcmw6IHRoaXMubmV4dFVybCB9LFxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChhc3luYyAoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgICB9KVxuICB9XG59XG4iLCAiPGFwcC1oZWFkZXIgW2RlZmF1bHRIcmVmXT1cIicvYWNjb3VudC9zZXR0aW5ncydcIj48L2FwcC1oZWFkZXI+XG48aW9uLWNvbnRlbnQ+XG4gIDxhcHAtY2d1PjwvYXBwLWNndT5cbjwvaW9uLWNvbnRlbnQ+XG48aW9uLWZvb3RlciBjbGFzcz1cImlvbi1wYWRkaW5nXCI+XG4gIEBpZihjZ3VMb2FkaW5nU3RhdGUuc3RhdGUgPT09ICdzdWNjZXNzJyAmJiBjeWNsaXN0U3RhdGUuc3RhdGUgPT09ICdhY3RpdmUnICYmXG4gIGN5Y2xpc3RTdGF0ZS5jeWNsaXN0LnJlZ2lzdHJhdGlvbnM/LmRhdGE/LlswXT8udGVybXNfdmFsaWRhdGVkKSB7XG4gIDxpb24taXRlbSBsaW5lcz1cIm5vbmVcIiBjbGFzcz1cImlvbi10ZXh0LWNlbnRlclwiPlxuICAgIDxpb24tdGV4dD5cbiAgICAgIHt7ICdjZ3UuYWNjZXB0ZWRfb24nIHwgdHJhbnNsYXRlIH19IHt7XG4gICAgICBjeWNsaXN0U3RhdGUuY3ljbGlzdC5yZWdpc3RyYXRpb25zPy5kYXRhPy5bMF0/LnRlcm1zX3ZhbGlkYXRlZF9hdCEgKiAxMDAwXG4gICAgICB8IGRhdGUgOiAnZGQvTU0veXl5eScgfX1cbiAgICA8L2lvbi10ZXh0PlxuICA8L2lvbi1pdGVtPlxuICB9IEBlbHNlIGlmIChjZ3VMb2FkaW5nU3RhdGUuc3RhdGUgPT09ICdzdWNjZXNzJyAmJiBjeWNsaXN0U3RhdGUuc3RhdGUgIT09XG4gICd1bmtub3duJyAmJiBjeWNsaXN0U3RhdGUuc3RhdGUgIT09ICdlcnJvcicgJiZcbiAgY3ljbGlzdFN0YXRlLmN5Y2xpc3QucmVnaXN0cmF0aW9ucz8uZGF0YT8uWzBdPy50ZXJtc192YWxpZGF0ZWQgPT09IGZhbHNlKSB7XG4gIDxpb24tY2FyZCBjbGFzcz1cImlvbi1uby1tYXJnaW5cIj5cbiAgICA8aW9uLWNhcmQtY29udGVudCBjbGFzcz1cImlvbi10ZXh0LWNlbnRlclwiPlxuICAgICAgPGlvbi10ZXh0XG4gICAgICAgID57eyAnY2d1LnVwZGF0ZV9tZXNzYWdlJyB8IHRyYW5zbGF0ZSB9fSB7eyBjZ3VMb2FkaW5nU3RhdGUuY2d1LnVwZGF0ZWQhXG4gICAgICAgICogMTAwMCB8IGRhdGUgOiAnZGQvTU0veXl5eScgfX08L2lvbi10ZXh0XG4gICAgICA+XG4gICAgPC9pb24tY2FyZC1jb250ZW50PlxuICA8L2lvbi1jYXJkPlxuICA8aW9uLWJ1dHRvbiAoY2xpY2spPVwidmFsaWRhdGVUZXJtcygpXCIgZXhwYW5kPVwiYmxvY2tcIiBjbGFzcz1cImlvbi1tYXJnaW5cIj5cbiAgICB7eyAnY2d1LmFjY2VwdF9idXR0b24nIHwgdHJhbnNsYXRlIH19XG4gIDwvaW9uLWJ1dHRvbj5cbiAgfVxuPC9pb24tZm9vdGVyPlxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ09FLElBQUEseUJBQUEsR0FBQSxZQUFBLENBQUEsRUFBK0MsR0FBQSxVQUFBO0FBRTNDLElBQUEsaUJBQUEsQ0FBQTs7O0FBR0YsSUFBQSx1QkFBQSxFQUFXOzs7O0FBSFQsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFB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
