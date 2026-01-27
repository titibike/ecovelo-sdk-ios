import {
  HeaderComponent
} from "./chunk-AVAJ3QHV.js";
import "./chunk-K2AWDLYV.js";
import {
  AuthService,
  Browser
} from "./chunk-WJQU3GMM.js";
import "./chunk-CHFOG66O.js";
import "./chunk-RAVV2QIY.js";
import "./chunk-T6WE2PS5.js";
import "./chunk-XK4I5MHM.js";
import "./chunk-GVYZRG6X.js";
import "./chunk-FOJAXRYS.js";
import "./chunk-Y7HI6USV.js";
import {
  ErrorHandlerService
} from "./chunk-SARQRLZR.js";
import {
  addIcons,
  alertCircleOutline,
  logInOutline
} from "./chunk-3E6DEK7U.js";
import "./chunk-U6SJAXLK.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  IonButton,
  IonContent,
  IonIcon,
  IonText,
  NgIf,
  Router,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-DGENMXJW.js";
import "./chunk-JBNXL77H.js";
import "./chunk-KQEJHESJ.js";
import {
  Capacitor
} from "./chunk-KGBWUDTS.js";
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

// src/app/pages/auth/external-auth-failed/external-auth-failed.page.ts
function ExternalAuthFailedPage_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "ion-text", 7)(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "external_auth.signing_out"));
  }
}
function ExternalAuthFailedPage_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "ion-button", 13);
    \u0275\u0275listener("click", function ExternalAuthFailedPage_div_14_Template_ion_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.signInAgain());
    });
    \u0275\u0275element(2, "ion-icon", 14);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "external_auth.sign_in_again"), " ");
  }
}
var _ExternalAuthFailedPage = class _ExternalAuthFailedPage {
  constructor(translateService, route, router, authService, errorHandler) {
    this.translateService = translateService;
    this.route = route;
    this.router = router;
    this.authService = authService;
    this.errorHandler = errorHandler;
    this.errorMessage = "";
    this.isSigningOut = true;
    addIcons({ logInOutline, alertCircleOutline });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.closeInAppBrowser();
      yield this.signOutUser();
      this.route.queryParams.subscribe((params) => {
        if (params["error"]) {
          this.errorMessage = params["error"];
        } else {
          this.errorMessage = this.translateService.instant("external_auth.generic_error");
        }
      });
    });
  }
  closeInAppBrowser() {
    return __async(this, null, function* () {
      try {
        if (Capacitor.isNativePlatform()) {
          yield Browser.close();
        }
      } catch (error) {
        console.log("No browser to close or error closing browser:", error);
      }
    });
  }
  signOutUser() {
    return __async(this, null, function* () {
      try {
        this.authService.signOut(true);
        this.isSigningOut = false;
      } catch (error) {
        this.errorHandler.handleError(error);
        this.isSigningOut = false;
      }
    });
  }
  signInAgain() {
    return __async(this, null, function* () {
      this.router.navigate(["/signin"], { replaceUrl: true });
    });
  }
};
_ExternalAuthFailedPage.\u0275fac = function ExternalAuthFailedPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExternalAuthFailedPage)(\u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ErrorHandlerService));
};
_ExternalAuthFailedPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExternalAuthFailedPage, selectors: [["app-external-auth-failed"]], decls: 20, vars: 12, consts: [[3, "title"], [1, "ion-padding"], [1, "error-container"], [1, "error-icon"], ["name", "alert-circle-outline", "size", "large", "color", "danger"], [1, "error-title"], [1, "error-message"], ["color", "medium"], ["class", "loading-container", 4, "ngIf"], ["class", "action-buttons", 4, "ngIf"], [1, "help-text"], [1, "loading-container"], [1, "action-buttons"], ["expand", "block", "color", "primary", 1, "action-button", 3, "click"], ["name", "log-in-outline", "slot", "start"]], template: function ExternalAuthFailedPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-header", 0);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "ion-content", 1)(3, "div", 2)(4, "div", 3);
    \u0275\u0275element(5, "ion-icon", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h2", 5);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 6)(10, "ion-text", 7)(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(13, ExternalAuthFailedPage_div_13_Template, 5, 3, "div", 8)(14, ExternalAuthFailedPage_div_14_Template, 5, 3, "div", 9);
    \u0275\u0275elementStart(15, "div", 10)(16, "ion-text", 7)(17, "p");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 6, "external_auth.title"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 8, "external_auth.failed_title"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isSigningOut);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isSigningOut);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 10, "external_auth.help_text"));
  }
}, dependencies: [
  IonContent,
  IonButton,
  IonText,
  IonIcon,
  CommonModule,
  NgIf,
  TranslateModule,
  TranslatePipe,
  HeaderComponent
], styles: ["\n\n.error-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 70vh;\n  text-align: center;\n  padding: 2rem 1rem;\n}\n.error-icon[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.error-icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  opacity: 0.8;\n}\n.error-title[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin-bottom: 1rem;\n  margin-top: 0;\n}\n.error-message[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n  max-width: 400px;\n}\n.error-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.5;\n  margin: 0;\n}\n.loading-container[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n  max-width: 400px;\n}\n.loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.5;\n  margin: 0;\n  text-align: center;\n  font-style: italic;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 320px;\n}\n.action-buttons[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  --border-radius: 12px;\n  height: 48px;\n}\n.action-buttons[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.help-text[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  max-width: 350px;\n}\n.help-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  line-height: 1.4;\n  margin: 0;\n}\n@media (max-height: 600px) {\n  .error-container[_ngcontent-%COMP%] {\n    min-height: 60vh;\n    padding: 1rem;\n  }\n  .error-icon[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n  .error-icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n    font-size: 3rem;\n  }\n  .error-title[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n    margin-bottom: 0.5rem;\n  }\n  .error-message[_ngcontent-%COMP%] {\n    margin-bottom: 1.5rem;\n  }\n  .help-text[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n  }\n}\n/*# sourceMappingURL=external-auth-failed.page.css.map */"] });
var ExternalAuthFailedPage = _ExternalAuthFailedPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExternalAuthFailedPage, [{
    type: Component,
    args: [{ selector: "app-external-auth-failed", imports: [
      IonContent,
      IonButton,
      IonText,
      IonIcon,
      CommonModule,
      TranslateModule,
      HeaderComponent
    ], template: `<app-header [title]="'external_auth.title' | translate"></app-header>

<ion-content class="ion-padding">
  <div class="error-container">
    <!-- Error Icon -->
    <div class="error-icon">
      <ion-icon
        name="alert-circle-outline"
        size="large"
        color="danger"
      ></ion-icon>
    </div>

    <!-- Error Title -->
    <h2 class="error-title">{{ 'external_auth.failed_title' | translate }}</h2>

    <!-- Error Message -->
    <div class="error-message">
      <ion-text color="medium">
        <p>{{ errorMessage }}</p>
      </ion-text>
    </div>

    <!-- Loading State -->
    <div *ngIf="isSigningOut" class="loading-container">
      <ion-text color="medium">
        <p>{{ 'external_auth.signing_out' | translate }}</p>
      </ion-text>
    </div>

    <!-- Action Button -->
    <div *ngIf="!isSigningOut" class="action-buttons">
      <!-- Sign In Again Button -->
      <ion-button
        expand="block"
        color="primary"
        (click)="signInAgain()"
        class="action-button"
      >
        <ion-icon name="log-in-outline" slot="start"></ion-icon>
        {{ 'external_auth.sign_in_again' | translate }}
      </ion-button>
    </div>

    <!-- Help Text -->
    <div class="help-text">
      <ion-text color="medium">
        <p>{{ 'external_auth.help_text' | translate }}</p>
      </ion-text>
    </div>
  </div>
</ion-content>
`, styles: ["/* src/app/pages/auth/external-auth-failed/external-auth-failed.page.scss */\n.error-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 70vh;\n  text-align: center;\n  padding: 2rem 1rem;\n}\n.error-icon {\n  margin-bottom: 2rem;\n}\n.error-icon ion-icon {\n  font-size: 4rem;\n  opacity: 0.8;\n}\n.error-title {\n  color: var(--ion-color-primary);\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin-bottom: 1rem;\n  margin-top: 0;\n}\n.error-message {\n  margin-bottom: 2.5rem;\n  max-width: 400px;\n}\n.error-message p {\n  font-size: 1rem;\n  line-height: 1.5;\n  margin: 0;\n}\n.loading-container {\n  margin-bottom: 2.5rem;\n  max-width: 400px;\n}\n.loading-container p {\n  font-size: 1rem;\n  line-height: 1.5;\n  margin: 0;\n  text-align: center;\n  font-style: italic;\n}\n.action-buttons {\n  width: 100%;\n  max-width: 320px;\n}\n.action-buttons .action-button {\n  margin-bottom: 1rem;\n  --border-radius: 12px;\n  height: 48px;\n}\n.action-buttons .action-button:last-child {\n  margin-bottom: 0;\n}\n.help-text {\n  margin-top: 2rem;\n  max-width: 350px;\n}\n.help-text p {\n  font-size: 0.875rem;\n  line-height: 1.4;\n  margin: 0;\n}\n@media (max-height: 600px) {\n  .error-container {\n    min-height: 60vh;\n    padding: 1rem;\n  }\n  .error-icon {\n    margin-bottom: 1rem;\n  }\n  .error-icon ion-icon {\n    font-size: 3rem;\n  }\n  .error-title {\n    font-size: 1.25rem;\n    margin-bottom: 0.5rem;\n  }\n  .error-message {\n    margin-bottom: 1.5rem;\n  }\n  .help-text {\n    margin-top: 1rem;\n  }\n}\n/*# sourceMappingURL=external-auth-failed.page.css.map */\n"] }]
  }], () => [{ type: TranslateService }, { type: ActivatedRoute }, { type: Router }, { type: AuthService }, { type: ErrorHandlerService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExternalAuthFailedPage, { className: "ExternalAuthFailedPage", filePath: "src/app/pages/auth/external-auth-failed/external-auth-failed.page.ts", lineNumber: 33 });
})();
export {
  ExternalAuthFailedPage
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wYWdlcy9hdXRoL2V4dGVybmFsLWF1dGgtZmFpbGVkL2V4dGVybmFsLWF1dGgtZmFpbGVkLnBhZ2UudHMiLCAic3JjL2FwcC9wYWdlcy9hdXRoL2V4dGVybmFsLWF1dGgtZmFpbGVkL2V4dGVybmFsLWF1dGgtZmFpbGVkLnBhZ2UuaHRtbCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJ1xuaW1wb3J0IHtcbiAgSW9uQ29udGVudCxcbiAgSW9uQnV0dG9uLFxuICBJb25UZXh0LFxuICBJb25JY29uLFxufSBmcm9tICdAaW9uaWMvYW5ndWxhci9zdGFuZGFsb25lJ1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlLCBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSdcbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCB9IGZyb20gJ3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudCdcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy9leHRlcm5hbC9hdXRoLnNlcnZpY2UnXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xuaW1wb3J0IHsgQnJvd3NlciB9IGZyb20gJ0BjYXBhY2l0b3IvYnJvd3NlcidcbmltcG9ydCB7IENhcGFjaXRvciB9IGZyb20gJ0BjYXBhY2l0b3IvY29yZSdcbmltcG9ydCB7IGFkZEljb25zIH0gZnJvbSAnaW9uaWNvbnMnXG5pbXBvcnQgeyBsb2dJbk91dGxpbmUsIGFsZXJ0Q2lyY2xlT3V0bGluZSB9IGZyb20gJ2lvbmljb25zL2ljb25zJ1xuaW1wb3J0IHsgRXJyb3JIYW5kbGVyU2VydmljZSB9IGZyb20gJ3NyYy9hcHAvc2VydmljZXMvdXRpbHMvZXJyb3ItaGFuZGxlci5zZXJ2aWNlJ1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZXh0ZXJuYWwtYXV0aC1mYWlsZWQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZXh0ZXJuYWwtYXV0aC1mYWlsZWQucGFnZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZXh0ZXJuYWwtYXV0aC1mYWlsZWQucGFnZS5zY3NzJ10sXG4gIGltcG9ydHM6IFtcbiAgICBJb25Db250ZW50LFxuICAgIElvbkJ1dHRvbixcbiAgICBJb25UZXh0LFxuICAgIElvbkljb24sXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFRyYW5zbGF0ZU1vZHVsZSxcbiAgICBIZWFkZXJDb21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEV4dGVybmFsQXV0aEZhaWxlZFBhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgZXJyb3JNZXNzYWdlID0gJydcbiAgcHVibGljIGlzU2lnbmluZ091dCA9IHRydWVcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwdWJsaWMgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgZXJyb3JIYW5kbGVyOiBFcnJvckhhbmRsZXJTZXJ2aWNlXG4gICkge1xuICAgIGFkZEljb25zKHsgbG9nSW5PdXRsaW5lLCBhbGVydENpcmNsZU91dGxpbmUgfSlcbiAgfVxuXG4gIGFzeW5jIG5nT25Jbml0KCkge1xuICAgIC8vIEZpcnN0LCBjbG9zZSBhbnkgb3BlbiBpbi1hcHAgYnJvd3NlclxuICAgIGF3YWl0IHRoaXMuY2xvc2VJbkFwcEJyb3dzZXIoKVxuXG4gICAgLy8gVGhlbiBzaWduIG91dCB0aGUgdXNlclxuICAgIGF3YWl0IHRoaXMuc2lnbk91dFVzZXIoKVxuXG4gICAgLy8gQ2hlY2sgcXVlcnkgcGFyYW1ldGVycyBmb3Igc3BlY2lmaWMgZXJyb3IgaW5mb3JtYXRpb25cbiAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XG4gICAgICBpZiAocGFyYW1zWydlcnJvciddKSB7XG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gcGFyYW1zWydlcnJvciddXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHRoaXMudHJhbnNsYXRlU2VydmljZS5pbnN0YW50KFxuICAgICAgICAgICdleHRlcm5hbF9hdXRoLmdlbmVyaWNfZXJyb3InXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjbG9zZUluQXBwQnJvd3NlcigpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKENhcGFjaXRvci5pc05hdGl2ZVBsYXRmb3JtKCkpIHtcbiAgICAgICAgYXdhaXQgQnJvd3Nlci5jbG9zZSgpXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIEJyb3dzZXIgbWlnaHQgbm90IGJlIG9wZW4sIGlnbm9yZSBlcnJvclxuICAgICAgY29uc29sZS5sb2coJ05vIGJyb3dzZXIgdG8gY2xvc2Ugb3IgZXJyb3IgY2xvc2luZyBicm93c2VyOicsIGVycm9yKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgc2lnbk91dFVzZXIoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuYXV0aFNlcnZpY2Uuc2lnbk91dCh0cnVlKSAvLyBCeXBhc3MgcmVkaXJlY3Rpb25cbiAgICAgIHRoaXMuaXNTaWduaW5nT3V0ID0gZmFsc2VcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgICB0aGlzLmlzU2lnbmluZ091dCA9IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGFzeW5jIHNpZ25JbkFnYWluKCkge1xuICAgIC8vIE5hdmlnYXRlIHRvIHNpZ24taW4gcGFnZSAodXNlciBpcyBhbHJlYWR5IHNpZ25lZCBvdXQpXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc2lnbmluJ10sIHsgcmVwbGFjZVVybDogdHJ1ZSB9KVxuICB9XG59XG4iLCAiPGFwcC1oZWFkZXIgW3RpdGxlXT1cIidleHRlcm5hbF9hdXRoLnRpdGxlJyB8IHRyYW5zbGF0ZVwiPjwvYXBwLWhlYWRlcj5cblxuPGlvbi1jb250ZW50IGNsYXNzPVwiaW9uLXBhZGRpbmdcIj5cbiAgPGRpdiBjbGFzcz1cImVycm9yLWNvbnRhaW5lclwiPlxuICAgIDwhLS0gRXJyb3IgSWNvbiAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiZXJyb3ItaWNvblwiPlxuICAgICAgPGlvbi1pY29uXG4gICAgICAgIG5hbWU9XCJhbGVydC1jaXJjbGUtb3V0bGluZVwiXG4gICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgIGNvbG9yPVwiZGFuZ2VyXCJcbiAgICAgID48L2lvbi1pY29uPlxuICAgIDwvZGl2PlxuXG4gICAgPCEtLSBFcnJvciBUaXRsZSAtLT5cbiAgICA8aDIgY2xhc3M9XCJlcnJvci10aXRsZVwiPnt7ICdleHRlcm5hbF9hdXRoLmZhaWxlZF90aXRsZScgfCB0cmFuc2xhdGUgfX08L2gyPlxuXG4gICAgPCEtLSBFcnJvciBNZXNzYWdlIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJlcnJvci1tZXNzYWdlXCI+XG4gICAgICA8aW9uLXRleHQgY29sb3I9XCJtZWRpdW1cIj5cbiAgICAgICAgPHA+e3sgZXJyb3JNZXNzYWdlIH19PC9wPlxuICAgICAgPC9pb24tdGV4dD5cbiAgICA8L2Rpdj5cblxuICAgIDwhLS0gTG9hZGluZyBTdGF0ZSAtLT5cbiAgICA8ZGl2ICpuZ0lmPVwiaXNTaWduaW5nT3V0XCIgY2xhc3M9XCJsb2FkaW5nLWNvbnRhaW5lclwiPlxuICAgICAgPGlvbi10ZXh0IGNvbG9yPVwibWVkaXVtXCI+XG4gICAgICAgIDxwPnt7ICdleHRlcm5hbF9hdXRoLnNpZ25pbmdfb3V0JyB8IHRyYW5zbGF0ZSB9fTwvcD5cbiAgICAgIDwvaW9uLXRleHQ+XG4gICAgPC9kaXY+XG5cbiAgICA8IS0tIEFjdGlvbiBCdXR0b24gLS0+XG4gICAgPGRpdiAqbmdJZj1cIiFpc1NpZ25pbmdPdXRcIiBjbGFzcz1cImFjdGlvbi1idXR0b25zXCI+XG4gICAgICA8IS0tIFNpZ24gSW4gQWdhaW4gQnV0dG9uIC0tPlxuICAgICAgPGlvbi1idXR0b25cbiAgICAgICAgZXhwYW5kPVwiYmxvY2tcIlxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAoY2xpY2spPVwic2lnbkluQWdhaW4oKVwiXG4gICAgICAgIGNsYXNzPVwiYWN0aW9uLWJ1dHRvblwiXG4gICAgICA+XG4gICAgICAgIDxpb24taWNvbiBuYW1lPVwibG9nLWluLW91dGxpbmVcIiBzbG90PVwic3RhcnRcIj48L2lvbi1pY29uPlxuICAgICAgICB7eyAnZXh0ZXJuYWxfYXV0aC5zaWduX2luX2FnYWluJyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgPC9pb24tYnV0dG9uPlxuICAgIDwvZGl2PlxuXG4gICAgPCEtLSBIZWxwIFRleHQgLS0+XG4gICAgPGRpdiBjbGFzcz1cImhlbHAtdGV4dFwiPlxuICAgICAgPGlvbi10ZXh0IGNvbG9yPVwibWVkaXVtXCI+XG4gICAgICAgIDxwPnt7ICdleHRlcm5hbF9hdXRoLmhlbHBfdGV4dCcgfCB0cmFuc2xhdGUgfX08L3A+XG4gICAgICA8L2lvbi10ZXh0PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvaW9uLWNvbnRlbnQ+XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDd0JJLElBQUEseUJBQUEsR0FBQSxPQUFBLEVB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
