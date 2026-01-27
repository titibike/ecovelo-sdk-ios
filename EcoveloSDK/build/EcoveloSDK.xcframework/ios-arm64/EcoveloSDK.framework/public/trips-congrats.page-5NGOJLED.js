import {
  FillButtonComponent
} from "./chunk-IKA4NCYV.js";
import {
  ConfettiComponent
} from "./chunk-PKEPRIZF.js";
import {
  FormatPinPipe
} from "./chunk-LKSCFV7E.js";
import {
  LottieComponent
} from "./chunk-CWHK67UA.js";
import {
  AppstateService
} from "./chunk-T6WE2PS5.js";
import "./chunk-U6SJAXLK.js";
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
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
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

// src/app/pages/congrats/trips/trips-congrats.page.ts
var _c0 = (a0) => ({ number: a0 });
function TripsCongratsPage_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 5);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "formatPin");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 2, "trips_congrats.unlock_code_message", \u0275\u0275pureFunction1(7, _c0, ctx_r0.trip.vehicule_number || "****")), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 5, ctx_r0.trip.pin || "******"));
  }
}
function TripsCongratsPage_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "trips_congrats.scooter_message"));
  }
}
var _TripsCongratsPage = class _TripsCongratsPage {
  constructor(router, appState) {
    this.router = router;
    this.appState = appState;
    this.options = {
      path: "/assets/icon/animated/lock.json"
    };
  }
  ngOnInit() {
    return __async(this, null, function* () {
      var _a;
      const navigation = yield this.router.getCurrentNavigation();
      if (((_a = navigation == null ? void 0 : navigation.extras) == null ? void 0 : _a.state) && navigation.extras.state["trip"]) {
        this.trip = navigation.extras.state["trip"];
      } else {
        console.warn("No trip data found, redirecting to map");
        setTimeout(() => {
          this.router.navigate(["/map"]);
        }, 2e3);
        return;
      }
    });
  }
  ionViewWillEnter() {
    return __async(this, null, function* () {
      const appState = this.appState.getAppState();
      if (appState.state === "fresh_cyclist" || appState.state === "regular_cyclist") {
        let tripStarted = (appState.trip_started || 0) + 1;
        switch (true) {
          case tripStarted == 1:
            this.appState.setAppState({
              state: "fresh_cyclist",
              trip_started: tripStarted,
              dring_state: {
                geolocation_dring: appState.state === "fresh_cyclist" ? appState.dring_state.geolocation_dring : "not_shown"
              },
              push_notifications: appState.state === "fresh_cyclist" ? appState.push_notifications : "not_shown"
            });
            break;
          case (tripStarted >= 2 && tripStarted < 30):
            this.appState.setAppState({
              state: "regular_cyclist",
              trip_started: tripStarted
            });
            break;
          case tripStarted >= 30:
            this.appState.setAppState({
              state: "passionate_cyclist",
              trip_started: tripStarted
            });
            break;
          default:
            break;
        }
      } else if (appState.state === "new_cyclist") {
        this.appState.setAppState({
          state: "fresh_cyclist",
          trip_started: 1,
          dring_state: {
            geolocation_dring: appState.dring_state.geolocation_dring
          },
          push_notifications: appState.push_notifications
        });
      }
    });
  }
  ionViewDidEnter() {
    setTimeout(() => {
      this.router.navigate(["/map"]);
    }, 14e3);
  }
};
_TripsCongratsPage.\u0275fac = function TripsCongratsPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TripsCongratsPage)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AppstateService));
};
_TripsCongratsPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TripsCongratsPage, selectors: [["app-trips-congrats"]], decls: 12, vars: 11, consts: [["color", "primary", 1, "ion-text-center", "ion-justify-content-center", "ion-align-items-center", 3, "fullscreen"], [1, "ecl-congrats-modal"], [3, "count"], [3, "options"], ["color", "light", "fill", "outline", 3, "buttonClick", "animationDuration"], [1, "code"]], template: function TripsCongratsPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content", 0)(1, "div", 1);
    \u0275\u0275element(2, "app-confetti", 2)(3, "ng-lottie", 3);
    \u0275\u0275elementStart(4, "h1");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, TripsCongratsPage_Conditional_7_Template, 6, 9)(8, TripsCongratsPage_Conditional_8_Template, 3, 3, "p");
    \u0275\u0275elementStart(9, "app-fill-button", 4);
    \u0275\u0275listener("buttonClick", function TripsCongratsPage_Template_app_fill_button_buttonClick_9_listener() {
      return ctx.router.navigate(["/map"]);
    });
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("count", 50);
    \u0275\u0275advance();
    \u0275\u0275property("options", ctx.options);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 7, "trips_congrats.lets_go"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.trip && ctx.trip.vehicule_type !== "scooter" ? 7 : ctx.trip && ctx.trip.vehicule_type === "scooter" ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("animationDuration", 14e3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 9, "vehicle.continue"), " ");
  }
}, dependencies: [
  IonContent,
  CommonModule,
  FormsModule,
  ConfettiComponent,
  TranslateModule,
  TranslatePipe,
  LottieComponent,
  FormatPinPipe,
  FillButtonComponent
], styles: ["\n\n.code[_ngcontent-%COMP%] {\n  border: 1px solid #fff;\n  padding: 1rem;\n  font-size: 2rem;\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=trips-congrats.page.css.map */"] });
var TripsCongratsPage = _TripsCongratsPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TripsCongratsPage, [{
    type: Component,
    args: [{ selector: "app-trips-congrats", imports: [
      IonContent,
      CommonModule,
      FormsModule,
      ConfettiComponent,
      TranslateModule,
      LottieComponent,
      FormatPinPipe,
      FillButtonComponent
    ], template: `<ion-content
  [fullscreen]="true"
  color="primary"
  class="ion-text-center ion-justify-content-center ion-align-items-center"
>
  <div class="ecl-congrats-modal">
    <app-confetti [count]="50"></app-confetti>
    <ng-lottie [options]="options"></ng-lottie>
    <h1>{{ 'trips_congrats.lets_go' | translate }}</h1>
    @if (trip && trip.vehicule_type !== 'scooter') {
    <p>
      {{ 'trips_congrats.unlock_code_message' | translate:{ number:
      trip.vehicule_number || '****' } }}
    </p>
    <div class="code">{{ trip.pin || '******' | formatPin }}</div>
    } @else if (trip && trip.vehicule_type === 'scooter') {
    <p>{{ 'trips_congrats.scooter_message' | translate }}</p>
    }
    <!-- <ion-button
      color="light"
      shape="round"
      [routerLink]="['/map']"
      class="animated-button"
    >
      {{ 'trips_congrats.continue' | translate }}
    </ion-button> -->
    <app-fill-button
      color="light"
      fill="outline"
      [animationDuration]="14000"
      (buttonClick)="router.navigate(['/map'])"
    >
      {{ 'vehicle.continue' | translate }}
    </app-fill-button>
  </div>
</ion-content>
`, styles: ["/* src/app/pages/congrats/trips/trips-congrats.page.scss */\n.code {\n  border: 1px solid #fff;\n  padding: 1rem;\n  font-size: 2rem;\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=trips-congrats.page.css.map */\n"] }]
  }], () => [{ type: Router }, { type: AppstateService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TripsCongratsPage, { className: "TripsCongratsPage", filePath: "src/app/pages/congrats/trips/trips-congrats.page.ts", lineNumber: 38 });
})();
export {
  TripsCongratsPage
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wYWdlcy9jb25ncmF0cy90cmlwcy90cmlwcy1jb25ncmF0cy5wYWdlLnRzIiwgInNyYy9hcHAvcGFnZXMvY29uZ3JhdHMvdHJpcHMvdHJpcHMtY29uZ3JhdHMucGFnZS5odG1sIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJ1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3JtcydcbmltcG9ydCB7IFJvdXRlciwgUm91dGVyTGluayB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcbmltcG9ydCB7XG4gIElvbkNvbnRlbnQsXG4gIElvbkhlYWRlcixcbiAgSW9uVGl0bGUsXG4gIElvblRvb2xiYXIsXG4gIElvbkdyaWQsXG4gIElvblJvdyxcbiAgSW9uQ29sLFxuICBJb25JbWcsXG4gIElvbkJ1dHRvbixcbn0gZnJvbSAnQGlvbmljL2FuZ3VsYXIvc3RhbmRhbG9uZSdcbmltcG9ydCB7IExpc3RUcmlwMjAwUmVzcG9uc2VBbGxPZkRhdGFJbm5lciB9IGZyb20gJ3NyYy9hcGktY3ljbGlzdCdcbmltcG9ydCB7IENvbmZldHRpQ29tcG9uZW50IH0gZnJvbSAnc3JjL2FwcC9jb21wb25lbnRzL2NvbmZldHRpL2NvbmZldHRpLmNvbXBvbmVudCdcbmltcG9ydCB7IEFwcHN0YXRlU2VydmljZSB9IGZyb20gJ3NyYy9hcHAvc2VydmljZXMvaW50ZXJuYWwvYXBwc3RhdGUuc2VydmljZSdcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnXG5pbXBvcnQgeyBBbmltYXRpb25PcHRpb25zLCBMb3R0aWVDb21wb25lbnQgfSBmcm9tICduZ3gtbG90dGllJ1xuaW1wb3J0IHsgRm9ybWF0UGluUGlwZSB9IGZyb20gJ3NyYy9hcHAvcGlwZXMvZm9ybWF0UGluLnBpcGUnXG5pbXBvcnQgeyBGaWxsQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnc3JjL2FwcC9jb21wb25lbnRzL2ZpbGwtYnV0dG9uL2ZpbGwtYnV0dG9uLmNvbXBvbmVudCdcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC10cmlwcy1jb25ncmF0cycsXG4gIHRlbXBsYXRlVXJsOiAnLi90cmlwcy1jb25ncmF0cy5wYWdlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90cmlwcy1jb25ncmF0cy5wYWdlLnNjc3MnXSxcbiAgaW1wb3J0czogW1xuICAgIElvbkNvbnRlbnQsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIENvbmZldHRpQ29tcG9uZW50LFxuICAgIFRyYW5zbGF0ZU1vZHVsZSxcbiAgICBMb3R0aWVDb21wb25lbnQsXG4gICAgRm9ybWF0UGluUGlwZSxcbiAgICBGaWxsQnV0dG9uQ29tcG9uZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUcmlwc0NvbmdyYXRzUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHRyaXA/OiBMaXN0VHJpcDIwMFJlc3BvbnNlQWxsT2ZEYXRhSW5uZXJcbiAgb3B0aW9uczogQW5pbWF0aW9uT3B0aW9ucyA9IHtcbiAgICBwYXRoOiAnL2Fzc2V0cy9pY29uL2FuaW1hdGVkL2xvY2suanNvbicsXG4gIH1cbiAgY29uc3RydWN0b3IocHVibGljIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGFwcFN0YXRlOiBBcHBzdGF0ZVNlcnZpY2UpIHt9XG5cbiAgYXN5bmMgbmdPbkluaXQoKSB7XG4gICAgLy8gRXNzYXllciBkZSByw6ljdXDDqXJlciBsZSB0cmlwIGRlcHVpcyBsYSBuYXZpZ2F0aW9uXG4gICAgY29uc3QgbmF2aWdhdGlvbiA9IGF3YWl0IHRoaXMucm91dGVyLmdldEN1cnJlbnROYXZpZ2F0aW9uKClcbiAgICBpZiAobmF2aWdhdGlvbj8uZXh0cmFzPy5zdGF0ZSAmJiBuYXZpZ2F0aW9uLmV4dHJhcy5zdGF0ZVsndHJpcCddKSB7XG4gICAgICB0aGlzLnRyaXAgPSBuYXZpZ2F0aW9uLmV4dHJhcy5zdGF0ZVsndHJpcCddXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFNpIHBhcyBkZSB0cmlwIGRhbnMgbGEgbmF2aWdhdGlvbiwgcmVkaXJpZ2VyIHZlcnMgbGEgbWFwXG4gICAgICBjb25zb2xlLndhcm4oJ05vIHRyaXAgZGF0YSBmb3VuZCwgcmVkaXJlY3RpbmcgdG8gbWFwJylcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9tYXAnXSlcbiAgICAgIH0sIDIwMDApXG4gICAgICByZXR1cm5cbiAgICB9XG4gIH1cblxuICBhc3luYyBpb25WaWV3V2lsbEVudGVyKCkge1xuICAgIGNvbnN0IGFwcFN0YXRlID0gdGhpcy5hcHBTdGF0ZS5nZXRBcHBTdGF0ZSgpXG4gICAgaWYgKFxuICAgICAgYXBwU3RhdGUuc3RhdGUgPT09ICdmcmVzaF9jeWNsaXN0JyB8fFxuICAgICAgYXBwU3RhdGUuc3RhdGUgPT09ICdyZWd1bGFyX2N5Y2xpc3QnXG4gICAgKSB7XG4gICAgICBsZXQgdHJpcFN0YXJ0ZWQgPSAoYXBwU3RhdGUudHJpcF9zdGFydGVkIHx8IDApICsgMVxuICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgIGNhc2UgdHJpcFN0YXJ0ZWQgPT0gMTpcbiAgICAgICAgICB0aGlzLmFwcFN0YXRlLnNldEFwcFN0YXRlKHtcbiAgICAgICAgICAgIHN0YXRlOiAnZnJlc2hfY3ljbGlzdCcsXG4gICAgICAgICAgICB0cmlwX3N0YXJ0ZWQ6IHRyaXBTdGFydGVkLFxuICAgICAgICAgICAgZHJpbmdfc3RhdGU6IHtcbiAgICAgICAgICAgICAgZ2VvbG9jYXRpb25fZHJpbmc6XG4gICAgICAgICAgICAgICAgYXBwU3RhdGUuc3RhdGUgPT09ICdmcmVzaF9jeWNsaXN0J1xuICAgICAgICAgICAgICAgICAgPyBhcHBTdGF0ZS5kcmluZ19zdGF0ZS5nZW9sb2NhdGlvbl9kcmluZ1xuICAgICAgICAgICAgICAgICAgOiAnbm90X3Nob3duJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwdXNoX25vdGlmaWNhdGlvbnM6XG4gICAgICAgICAgICAgIGFwcFN0YXRlLnN0YXRlID09PSAnZnJlc2hfY3ljbGlzdCdcbiAgICAgICAgICAgICAgICA/IGFwcFN0YXRlLnB1c2hfbm90aWZpY2F0aW9uc1xuICAgICAgICAgICAgICAgIDogJ25vdF9zaG93bicsXG4gICAgICAgICAgfSlcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIHRyaXBTdGFydGVkID49IDIgJiYgdHJpcFN0YXJ0ZWQgPCAzMDpcbiAgICAgICAgICB0aGlzLmFwcFN0YXRlLnNldEFwcFN0YXRlKHtcbiAgICAgICAgICAgIHN0YXRlOiAncmVndWxhcl9jeWNsaXN0JyxcbiAgICAgICAgICAgIHRyaXBfc3RhcnRlZDogdHJpcFN0YXJ0ZWQsXG4gICAgICAgICAgfSlcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIHRyaXBTdGFydGVkID49IDMwOlxuICAgICAgICAgIHRoaXMuYXBwU3RhdGUuc2V0QXBwU3RhdGUoe1xuICAgICAgICAgICAgc3RhdGU6ICdwYXNzaW9uYXRlX2N5Y2xpc3QnLFxuICAgICAgICAgICAgdHJpcF9zdGFydGVkOiB0cmlwU3RhcnRlZCxcbiAgICAgICAgICB9KVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFwcFN0YXRlLnN0YXRlID09PSAnbmV3X2N5Y2xpc3QnKSB7XG4gICAgICB0aGlzLmFwcFN0YXRlLnNldEFwcFN0YXRlKHtcbiAgICAgICAgc3RhdGU6ICdmcmVzaF9jeWNsaXN0JyxcbiAgICAgICAgdHJpcF9zdGFydGVkOiAxLFxuICAgICAgICBkcmluZ19zdGF0ZToge1xuICAgICAgICAgIGdlb2xvY2F0aW9uX2RyaW5nOiBhcHBTdGF0ZS5kcmluZ19zdGF0ZS5nZW9sb2NhdGlvbl9kcmluZyxcbiAgICAgICAgfSxcbiAgICAgICAgcHVzaF9ub3RpZmljYXRpb25zOiBhcHBTdGF0ZS5wdXNoX25vdGlmaWNhdGlvbnMsXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGlvblZpZXdEaWRFbnRlcigpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL21hcCddKVxuICAgIH0sIDE0MDAwKVxuICB9XG59XG4iLCAiPGlvbi1jb250ZW50XG4gIFtmdWxsc2NyZWVuXT1cInRydWVcIlxuICBjb2xvcj1cInByaW1hcnlcIlxuICBjbGFzcz1cImlvbi10ZXh0LWNlbnRlciBpb24tanVzdGlmeS1jb250ZW50LWNlbnRlciBpb24tYWxpZ24taXRlbXMtY2VudGVyXCJcbj5cbiAgPGRpdiBjbGFzcz1cImVjbC1jb25ncmF0cy1tb2RhbFwiPlxuICAgIDxhcHAtY29uZmV0dGkgW2NvdW50XT1cIjUwXCI+PC9hcHAtY29uZmV0dGk+XG4gICAgPG5nLWxvdHRpZSBbb3B0aW9uc109XCJvcHRpb25zXCI+PC9uZy1sb3R0aWU+XG4gICAgPGgxPnt7ICd0cmlwc19jb25ncmF0cy5sZXRzX2dvJyB8IHRyYW5zbGF0ZSB9fTwvaDE+XG4gICAgQGlmICh0cmlwICYmIHRyaXAudmVoaWN1bGVfdHlwZSAhPT0gJ3Njb290ZXInKSB7XG4gICAgPHA+XG4gICAgICB7eyAndHJpcHNfY29uZ3JhdHMudW5sb2NrX2NvZGVfbWVzc2FnZScgfCB0cmFuc2xhdGU6eyBudW1iZXI6XG4gICAgICB0cmlwLnZlaGljdWxlX251bWJlciB8fCAnKioqKicgfSB9fVxuICAgIDwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiY29kZVwiPnt7IHRyaXAucGluIHx8ICcqKioqKionIHwgZm9ybWF0UGluIH19PC9kaXY+XG4gICAgfSBAZWxzZSBpZiAodHJpcCAmJiB0cmlwLnZlaGljdWxlX3R5cGUgPT09ICdzY29vdGVyJykge1xuICAgIDxwPnt7ICd0cmlwc19jb25ncmF0cy5zY29vdGVyX21lc3NhZ2UnIHwgdHJhbnNsYXRlIH19PC9wPlxuICAgIH1cbiAgICA8IS0tIDxpb24tYnV0dG9uXG4gICAgICBjb2xvcj1cImxpZ2h0XCJcbiAgICAgIHNoYXBlPVwicm91bmRcIlxuICAgICAgW3JvdXRlckxpbmtdPVwiWycvbWFwJ11cIlxuICAgICAgY2xhc3M9XCJhbmltYXRlZC1idXR0b25cIlxuICAgID5cbiAgICAgIHt7ICd0cmlwc19jb25ncmF0cy5jb250aW51ZScgfCB0cmFuc2xhdGUgfX1cbiAgICA8L2lvbi1idXR0b24+IC0tPlxuICAgIDxhcHAtZmlsbC1idXR0b25cbiAgICAgIGNvbG9yPVwibGlnaHRcIlxuICAgICAgZmlsbD1cIm91dGxpbmVcIlxuICAgICAgW2FuaW1hdGlvbkR1cmF0aW9uXT1cIjE0MDAwXCJcbiAgICAgIChidXR0b25DbGljayk9XCJyb3V0ZXIubmF2aWdhdGUoWycvbWFwJ10pXCJcbiAgICA+XG4gICAgICB7eyAndmVoaWNsZS5jb250aW51ZScgfCB0cmFuc2xhdGUgfX1cbiAgICA8L2FwcC1maWxsLWJ1dHRvbj5cbiAgPC9kaXY+XG48L2lvbi1jb250ZW50PlxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1VJLElBQUEseUJBQUEsR0FBQSxHQUFBO0FBQ0UsSUFBQSxpQkFBQSxDQUFBOztBQUVGLElBQUEsdUJBQUE7QUFDQSxJQUFBLHlCQUFBLEdBQUEsT0FBQSxDQUFBO0FBQWtCLElBQUEsaUJBQUEsQ0FBQTs7QUFBc0MsSUFBQSx1QkFBQTs7OztBQUh0RCxJQUFBLG9CQUFBO0FBQUEsSUFBQSw2QkFBQSxLQUFBLHNCQUFBLEdBQUEsR0FBQSxzQ0FBQSwwQkFBQSxHQUFBLEtBQUEsT0FBQSxLQUFBLG1CQUFBLE1BQUEsQ0FBQSxHQUFBLEdBQUE7QUFH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
