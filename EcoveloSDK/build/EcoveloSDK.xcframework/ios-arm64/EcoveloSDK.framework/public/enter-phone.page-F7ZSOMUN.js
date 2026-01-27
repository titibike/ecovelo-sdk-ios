import {
  CountriesComponent,
  CountryService,
  PhoneUtilsService
} from "./chunk-Y5PJEEYK.js";
import {
  HeaderComponent
} from "./chunk-AVAJ3QHV.js";
import "./chunk-K2AWDLYV.js";
import {
  RecaptchaService
} from "./chunk-GVYZRG6X.js";
import {
  environment
} from "./chunk-FOJAXRYS.js";
import {
  resetPassword
} from "./chunk-Y7HI6USV.js";
import {
  ErrorHandlerService,
  ToastService,
  ToastType
} from "./chunk-SARQRLZR.js";
import "./chunk-3E6DEK7U.js";
import "./chunk-U6SJAXLK.js";
import {
  CommonModule,
  Component,
  ElementRef,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  IonButton,
  IonCol,
  IonContent,
  IonInput,
  IonItem,
  IonRow,
  LoadingController,
  ModalController,
  NgControlStatus,
  NgControlStatusGroup,
  NgIf,
  ReactiveFormsModule,
  RequiredValidator,
  Router,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  Validators,
  ViewChild,
  setClassMetadata,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
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

// src/app/pages/auth/reset-password/enter-phone/enter-phone.page.ts
var _c0 = ["phoneInput"];
function EnterPhonePage_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function EnterPhonePage_div_11_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openCountryPage());
    });
    \u0275\u0275element(1, "img", 10);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.currentCountry.img, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.currentCountry.dial_code);
  }
}
var _EnterPhonePage = class _EnterPhonePage {
  constructor(translateService, modalController, countryService, router, loadingCtrl, toastService, phoneService, recaptchaService, errorHandler) {
    this.translateService = translateService;
    this.modalController = modalController;
    this.countryService = countryService;
    this.router = router;
    this.loadingCtrl = loadingCtrl;
    this.toastService = toastService;
    this.phoneService = phoneService;
    this.recaptchaService = recaptchaService;
    this.errorHandler = errorHandler;
    this.currentCountry = null;
    this.form = new FormGroup({
      tel: new FormControl("", Validators.required)
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      try {
        const countries = yield this.countryService.getCountries();
        this.currentCountry = countries.find((x) => x.code === "FR") || null;
        if (this.currentCountry) {
          const placeHolder = yield this.phoneService.getPhoneNumberPattern(this.currentCountry);
          this.phoneInput.nativeElement.placeholder = placeHolder;
        }
        yield this.recaptchaService.loadRecaptcha();
      } catch (err) {
        console.error("Error fetching countries:", err);
      }
    });
  }
  ngOnDestroy() {
    this.recaptchaService.unloadRecaptcha();
  }
  openCountryPage() {
    return __async(this, null, function* () {
      const modal = yield this.modalController.create({
        component: CountriesComponent,
        componentProps: { currentPosition: "FR" },
        initialBreakpoint: 0.75,
        breakpoints: [0, 0.75]
      });
      modal.onDidDismiss().then((data) => __async(this, null, function* () {
        var _a;
        if ((_a = data == null ? void 0 : data.data) == null ? void 0 : _a.selectedCountry) {
          this.currentCountry = data.data.selectedCountry;
          this.form.controls["tel"].setValue("");
          if (this.currentCountry) {
            try {
              const placeHolder = yield this.phoneService.getPhoneNumberPattern(this.currentCountry);
              this.phoneInput.nativeElement.placeholder = placeHolder;
            } catch {
              console.warn("No placeholder found");
              this.phoneInput.nativeElement.placeholder = this.translateService.instant("generic.phone_number");
            }
          }
        }
      }));
      yield modal.present();
    });
  }
  changePhoneNumber(event) {
    const inputElement = event.target;
    const inputValue = inputElement.value;
    if (this.currentCountry) {
      const numOutput = this.phoneService.formatPhoneNumber(inputValue, this.currentCountry);
      inputElement.value = inputValue.startsWith("0") ? inputValue.substring(1) : numOutput;
    }
  }
  sendResetCode() {
    return __async(this, null, function* () {
      var _a;
      if (!this.form.controls["tel"].value.trim()) {
        this.toastService.createWithJustMessage(this.translateService.instant("error.phone_required"), ToastType.Error);
        return;
      }
      const loading = yield this.loadingCtrl.create({
        message: this.translateService.instant("generic.please_wait")
      });
      yield loading.present();
      const phone = ((_a = this.currentCountry) == null ? void 0 : _a.dial_code) + this.form.value.tel.replace(/[(),\-,\s]/g, "").replace(/^0+/, "");
      try {
        const token = yield this.recaptchaService.executeRecaptcha("forgotPassword");
        if (!token) {
          throw new Error("Token is null");
        }
        const result = yield resetPassword({
          username: phone,
          options: {
            clientMetadata: {
              recaptchaToken: token,
              program: environment.program
            }
          }
        });
        if (result) {
          this.toastService.createWithJustMessage(this.translateService.instant("reset_password.code_sent"), ToastType.Success);
          this.router.navigate(["/confirm-code"], { state: { phone } });
        }
      } catch (error) {
        this.errorHandler.handleError(error);
      } finally {
        yield loading.dismiss();
      }
    });
  }
};
_EnterPhonePage.\u0275fac = function EnterPhonePage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EnterPhonePage)(\u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(CountryService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(LoadingController), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(PhoneUtilsService), \u0275\u0275directiveInject(RecaptchaService), \u0275\u0275directiveInject(ErrorHandlerService));
};
_EnterPhonePage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EnterPhonePage, selectors: [["app-enter-phone"]], viewQuery: function EnterPhonePage_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 7, ElementRef);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.phoneInput = _t.first);
  }
}, decls: 20, vars: 12, consts: [["phoneInput", ""], [1, "ion-padding"], [3, "ngSubmit", "formGroup"], [1, "ion-justify-content-center"], ["size", "12", "size-md", "6", "size-lg", "4"], [1, "ion-no-padding"], ["class", "ecl-phone__container", 3, "click", 4, "ngIf"], ["type", "tel", "inputmode", "tel", "name", "tel", "required", "", "formControlName", "tel", 3, "ionChange", "placeholder"], ["type", "submit", "expand", "block", "shape", "round", 1, "ion-margin-top", "ecl-btn--shadow", 3, "disabled"], [1, "ecl-phone__container", 3, "click"], [3, "src"]], template: function EnterPhonePage_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "app-header");
    \u0275\u0275elementStart(1, "ion-content", 1)(2, "form", 2);
    \u0275\u0275listener("ngSubmit", function EnterPhonePage_Template_form_ngSubmit_2_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.sendResetCode());
    });
    \u0275\u0275elementStart(3, "ion-row", 3)(4, "ion-col", 4)(5, "h1");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "ion-row", 3)(9, "ion-col", 4)(10, "ion-item", 5);
    \u0275\u0275template(11, EnterPhonePage_div_11_Template, 4, 2, "div", 6);
    \u0275\u0275elementStart(12, "ion-input", 7, 0);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275listener("ionChange", function EnterPhonePage_Template_ion_input_ionChange_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.changePhoneNumber($event));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "ion-row", 3)(16, "ion-col", 4)(17, "ion-button", 8);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 6, "reset_password.title"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx.currentCountry);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(14, 8, "generic.phone_number"));
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx.form.invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 10, "reset_password.send_code"), " ");
  }
}, dependencies: [
  IonContent,
  IonInput,
  IonCol,
  IonRow,
  IonItem,
  IonButton,
  CommonModule,
  NgIf,
  FormsModule,
  \u0275NgNoValidate,
  NgControlStatus,
  NgControlStatusGroup,
  RequiredValidator,
  ReactiveFormsModule,
  FormGroupDirective,
  FormControlName,
  TranslateModule,
  TranslatePipe,
  HeaderComponent
], encapsulation: 2 });
var EnterPhonePage = _EnterPhonePage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EnterPhonePage, [{
    type: Component,
    args: [{ selector: "app-enter-phone", imports: [
      IonContent,
      IonInput,
      IonCol,
      IonRow,
      IonItem,
      IonButton,
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      TranslateModule,
      HeaderComponent
    ], template: `<app-header></app-header>
<ion-content class="ion-padding">
  <form (ngSubmit)="sendResetCode()" [formGroup]="form">
    <ion-row class="ion-justify-content-center">
      <ion-col size="12" size-md="6" size-lg="4">
        <h1>{{ 'reset_password.title' | translate }}</h1>
      </ion-col>
    </ion-row>
    <ion-row class="ion-justify-content-center">
      <ion-col size="12" size-md="6" size-lg="4">
        <ion-item class="ion-no-padding">
          <div
            class="ecl-phone__container"
            *ngIf="currentCountry"
            (click)="openCountryPage()"
          >
            <img [src]="currentCountry.img" />
            <span>{{ currentCountry.dial_code }}</span>
          </div>
          <ion-input
            #phoneInput
            placeholder="{{ 'generic.phone_number' | translate }}"
            type="tel"
            inputmode="tel"
            name="tel"
            required
            formControlName="tel"
            (ionChange)="changePhoneNumber($event)"
          ></ion-input>
        </ion-item>
      </ion-col>
    </ion-row>
    <ion-row class="ion-justify-content-center">
      <ion-col size="12" size-md="6" size-lg="4">
        <ion-button
          type="submit"
          expand="block"
          shape="round"
          [disabled]="form.invalid"
          class="ion-margin-top ecl-btn--shadow"
        >
          {{ 'reset_password.send_code' | translate }}
        </ion-button>
      </ion-col>
    </ion-row>
  </form>
</ion-content>
` }]
  }], () => [{ type: TranslateService }, { type: ModalController }, { type: CountryService }, { type: Router }, { type: LoadingController }, { type: ToastService }, { type: PhoneUtilsService }, { type: RecaptchaService }, { type: ErrorHandlerService }], { phoneInput: [{
    type: ViewChild,
    args: ["phoneInput", { read: ElementRef, static: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EnterPhonePage, { className: "EnterPhonePage", filePath: "src/app/pages/auth/reset-password/enter-phone/enter-phone.page.ts", lineNumber: 59 });
})();
export {
  EnterPhonePage
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wYWdlcy9hdXRoL3Jlc2V0LXBhc3N3b3JkL2VudGVyLXBob25lL2VudGVyLXBob25lLnBhZ2UudHMiLCAic3JjL2FwcC9wYWdlcy9hdXRoL3Jlc2V0LXBhc3N3b3JkL2VudGVyLXBob25lL2VudGVyLXBob25lLnBhZ2UuaHRtbCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBWaWV3Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJ1xuaW1wb3J0IHtcbiAgRm9ybUNvbnRyb2wsXG4gIEZvcm1Hcm91cCxcbiAgRm9ybXNNb2R1bGUsXG4gIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gIFZhbGlkYXRvcnMsXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJ1xuaW1wb3J0IHtcbiAgSW9uQ29udGVudCxcbiAgSW9uSW5wdXQsXG4gIElvbkJ1dHRvbixcbiAgSW9uQ29sLFxuICBJb25UZXh0LFxuICBJb25Sb3csXG4gIElvbkl0ZW0sXG4gIExvYWRpbmdDb250cm9sbGVyLFxuICBNb2RhbENvbnRyb2xsZXIsXG59IGZyb20gJ0Bpb25pYy9hbmd1bGFyL3N0YW5kYWxvbmUnXG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUsIFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJ1xuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnc3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50J1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICdzcmMvYXBwL3NlcnZpY2VzL2V4dGVybmFsL2F1dGguc2VydmljZSdcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcbmltcG9ydCB7IFRvYXN0U2VydmljZSwgVG9hc3RUeXBlIH0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy91dGlscy90b2FzdC5zZXJ2aWNlJ1xuaW1wb3J0IHsgQ291bnRyaWVzQ29tcG9uZW50IH0gZnJvbSAnc3JjL2FwcC9jb21wb25lbnRzL21vZGFscy9jb3VudHJpZXMvY291bnRyaWVzLmNvbXBvbmVudCdcbmltcG9ydCB7IENvdW50cnksIENvdW50cnlTZXJ2aWNlIH0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy91dGlscy9jb3VudHJ5LnNlcnZpY2UnXG5pbXBvcnQgeyBQaG9uZVV0aWxzU2VydmljZSB9IGZyb20gJ3NyYy9hcHAvc2VydmljZXMvdXRpbHMvcGhvbmUuc2VydmljZSdcbmltcG9ydCB7IFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy91dGlscy9zdG9yYWdlLnNlcnZpY2UnXG5pbXBvcnQgeyBSZWNhcHRjaGFTZXJ2aWNlIH0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy9leHRlcm5hbC9yZWNhcHRjaGEuc2VydmljZSdcbmltcG9ydCB7IHJlc2V0UGFzc3dvcmQgfSBmcm9tICdhd3MtYW1wbGlmeS9hdXRoJ1xuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICdzcmMvZW52aXJvbm1lbnRzL2Vudmlyb25tZW50J1xuaW1wb3J0IHsgRXJyb3JIYW5kbGVyU2VydmljZSB9IGZyb20gJ3NyYy9hcHAvc2VydmljZXMvdXRpbHMvZXJyb3ItaGFuZGxlci5zZXJ2aWNlJ1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZW50ZXItcGhvbmUnLFxuICB0ZW1wbGF0ZVVybDogJy4vZW50ZXItcGhvbmUucGFnZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZW50ZXItcGhvbmUucGFnZS5zY3NzJ10sXG4gIGltcG9ydHM6IFtcbiAgICBJb25Db250ZW50LFxuICAgIElvbklucHV0LFxuICAgIElvbkNvbCxcbiAgICBJb25Sb3csXG4gICAgSW9uSXRlbSxcbiAgICBJb25CdXR0b24sXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICAgIEhlYWRlckNvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRW50ZXJQaG9uZVBhZ2UgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBWaWV3Q2hpbGQoJ3Bob25lSW5wdXQnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICBwaG9uZUlucHV0ITogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PlxuXG4gIHB1YmxpYyBmb3JtOiBGb3JtR3JvdXBcbiAgcHVibGljIGN1cnJlbnRDb3VudHJ5OiBDb3VudHJ5IHwgbnVsbCA9IG51bGxcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBtb2RhbENvbnRyb2xsZXI6IE1vZGFsQ29udHJvbGxlcixcbiAgICBwcml2YXRlIGNvdW50cnlTZXJ2aWNlOiBDb3VudHJ5U2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgbG9hZGluZ0N0cmw6IExvYWRpbmdDb250cm9sbGVyLFxuICAgIHByaXZhdGUgdG9hc3RTZXJ2aWNlOiBUb2FzdFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBwaG9uZVNlcnZpY2U6IFBob25lVXRpbHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVjYXB0Y2hhU2VydmljZTogUmVjYXB0Y2hhU2VydmljZSxcbiAgICBwcml2YXRlIGVycm9ySGFuZGxlcjogRXJyb3JIYW5kbGVyU2VydmljZVxuICApIHtcbiAgICB0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgIHRlbDogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgbmdPbkluaXQoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvdW50cmllcyA9IGF3YWl0IHRoaXMuY291bnRyeVNlcnZpY2UuZ2V0Q291bnRyaWVzKClcbiAgICAgIHRoaXMuY3VycmVudENvdW50cnkgPVxuICAgICAgICBjb3VudHJpZXMuZmluZCgoeDogQ291bnRyeSkgPT4geC5jb2RlID09PSAnRlInKSB8fCBudWxsXG5cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRDb3VudHJ5KSB7XG4gICAgICAgIGNvbnN0IHBsYWNlSG9sZGVyID0gYXdhaXQgdGhpcy5waG9uZVNlcnZpY2UuZ2V0UGhvbmVOdW1iZXJQYXR0ZXJuKFxuICAgICAgICAgIHRoaXMuY3VycmVudENvdW50cnlcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnBob25lSW5wdXQubmF0aXZlRWxlbWVudC5wbGFjZWhvbGRlciA9IHBsYWNlSG9sZGVyXG4gICAgICB9XG4gICAgICAvLyBMb2FkIHJlQ0FQVENIQVxuICAgICAgYXdhaXQgdGhpcy5yZWNhcHRjaGFTZXJ2aWNlLmxvYWRSZWNhcHRjaGEoKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY291bnRyaWVzOicsIGVycilcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICAvLyBVbmxvYWQgcmVDQVBUQ0hBIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWRcbiAgICB0aGlzLnJlY2FwdGNoYVNlcnZpY2UudW5sb2FkUmVjYXB0Y2hhKClcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBvcGVuQ291bnRyeVBhZ2UoKSB7XG4gICAgY29uc3QgbW9kYWwgPSBhd2FpdCB0aGlzLm1vZGFsQ29udHJvbGxlci5jcmVhdGUoe1xuICAgICAgY29tcG9uZW50OiBDb3VudHJpZXNDb21wb25lbnQsXG4gICAgICBjb21wb25lbnRQcm9wczogeyBjdXJyZW50UG9zaXRpb246ICdGUicgfSxcbiAgICAgIGluaXRpYWxCcmVha3BvaW50OiAwLjc1LFxuICAgICAgYnJlYWtwb2ludHM6IFswLCAwLjc1XSxcbiAgICB9KVxuXG4gICAgbW9kYWwub25EaWREaXNtaXNzKCkudGhlbihhc3luYyAoZGF0YSkgPT4ge1xuICAgICAgaWYgKGRhdGE/LmRhdGE/LnNlbGVjdGVkQ291bnRyeSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRDb3VudHJ5ID0gZGF0YS5kYXRhLnNlbGVjdGVkQ291bnRyeVxuICAgICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ3RlbCddLnNldFZhbHVlKCcnKVxuICAgICAgICBpZiAodGhpcy5jdXJyZW50Q291bnRyeSkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBwbGFjZUhvbGRlciA9IGF3YWl0IHRoaXMucGhvbmVTZXJ2aWNlLmdldFBob25lTnVtYmVyUGF0dGVybihcbiAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Q291bnRyeVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgdGhpcy5waG9uZUlucHV0Lm5hdGl2ZUVsZW1lbnQucGxhY2Vob2xkZXIgPSBwbGFjZUhvbGRlclxuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdObyBwbGFjZWhvbGRlciBmb3VuZCcpXG4gICAgICAgICAgICB0aGlzLnBob25lSW5wdXQubmF0aXZlRWxlbWVudC5wbGFjZWhvbGRlciA9XG4gICAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5pbnN0YW50KCdnZW5lcmljLnBob25lX251bWJlcicpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIGF3YWl0IG1vZGFsLnByZXNlbnQoKVxuICB9XG5cbiAgcHVibGljIGNoYW5nZVBob25lTnVtYmVyKGV2ZW50OiBFdmVudCkge1xuICAgIGNvbnN0IGlucHV0RWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IGlucHV0RWxlbWVudC52YWx1ZVxuXG4gICAgaWYgKHRoaXMuY3VycmVudENvdW50cnkpIHtcbiAgICAgIGNvbnN0IG51bU91dHB1dCA9IHRoaXMucGhvbmVTZXJ2aWNlLmZvcm1hdFBob25lTnVtYmVyKFxuICAgICAgICBpbnB1dFZhbHVlLFxuICAgICAgICB0aGlzLmN1cnJlbnRDb3VudHJ5XG4gICAgICApXG4gICAgICBpbnB1dEVsZW1lbnQudmFsdWUgPSBpbnB1dFZhbHVlLnN0YXJ0c1dpdGgoJzAnKVxuICAgICAgICA/IGlucHV0VmFsdWUuc3Vic3RyaW5nKDEpXG4gICAgICAgIDogbnVtT3V0cHV0XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGFzeW5jIHNlbmRSZXNldENvZGUoKSB7XG4gICAgaWYgKCF0aGlzLmZvcm0uY29udHJvbHNbJ3RlbCddLnZhbHVlLnRyaW0oKSkge1xuICAgICAgdGhpcy50b2FzdFNlcnZpY2UuY3JlYXRlV2l0aEp1c3RNZXNzYWdlKFxuICAgICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuaW5zdGFudCgnZXJyb3IucGhvbmVfcmVxdWlyZWQnKSxcbiAgICAgICAgVG9hc3RUeXBlLkVycm9yXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgbG9hZGluZyA9IGF3YWl0IHRoaXMubG9hZGluZ0N0cmwuY3JlYXRlKHtcbiAgICAgIG1lc3NhZ2U6IHRoaXMudHJhbnNsYXRlU2VydmljZS5pbnN0YW50KCdnZW5lcmljLnBsZWFzZV93YWl0JyksXG4gICAgfSlcbiAgICBhd2FpdCBsb2FkaW5nLnByZXNlbnQoKVxuXG4gICAgY29uc3QgcGhvbmUgPVxuICAgICAgdGhpcy5jdXJyZW50Q291bnRyeT8uZGlhbF9jb2RlICtcbiAgICAgIHRoaXMuZm9ybS52YWx1ZS50ZWwucmVwbGFjZSgvWygpLFxcLSxcXHNdL2csICcnKS5yZXBsYWNlKC9eMCsvLCAnJylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IHRoaXMucmVjYXB0Y2hhU2VydmljZS5leGVjdXRlUmVjYXB0Y2hhKFxuICAgICAgICAnZm9yZ290UGFzc3dvcmQnXG4gICAgICApXG4gICAgICBpZiAoIXRva2VuKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVG9rZW4gaXMgbnVsbCcpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc2V0UGFzc3dvcmQoe1xuICAgICAgICB1c2VybmFtZTogcGhvbmUsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBjbGllbnRNZXRhZGF0YToge1xuICAgICAgICAgICAgcmVjYXB0Y2hhVG9rZW46IHRva2VuLFxuICAgICAgICAgICAgcHJvZ3JhbTogZW52aXJvbm1lbnQucHJvZ3JhbSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSlcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICB0aGlzLnRvYXN0U2VydmljZS5jcmVhdGVXaXRoSnVzdE1lc3NhZ2UoXG4gICAgICAgICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQoJ3Jlc2V0X3Bhc3N3b3JkLmNvZGVfc2VudCcpLFxuICAgICAgICAgIFRvYXN0VHlwZS5TdWNjZXNzXG4gICAgICAgIClcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvY29uZmlybS1jb2RlJ10sIHsgc3RhdGU6IHsgcGhvbmU6IHBob25lIH0gfSlcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGF3YWl0IGxvYWRpbmcuZGlzbWlzcygpXG4gICAgfVxuICB9XG59XG4iLCAiPGFwcC1oZWFkZXI+PC9hcHAtaGVhZGVyPlxuPGlvbi1jb250ZW50IGNsYXNzPVwiaW9uLXBhZGRpbmdcIj5cbiAgPGZvcm0gKG5nU3VibWl0KT1cInNlbmRSZXNldENvZGUoKVwiIFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxuICAgIDxpb24tcm93IGNsYXNzPVwiaW9uLWp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgIDxpb24tY29sIHNpemU9XCIxMlwiIHNpemUtbWQ9XCI2XCIgc2l6ZS1sZz1cIjRcIj5cbiAgICAgICAgPGgxPnt7ICdyZXNldF9wYXNzd29yZC50aXRsZScgfCB0cmFuc2xhdGUgfX08L2gxPlxuICAgICAgPC9pb24tY29sPlxuICAgIDwvaW9uLXJvdz5cbiAgICA8aW9uLXJvdyBjbGFzcz1cImlvbi1qdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICA8aW9uLWNvbCBzaXplPVwiMTJcIiBzaXplLW1kPVwiNlwiIHNpemUtbGc9XCI0XCI+XG4gICAgICAgIDxpb24taXRlbSBjbGFzcz1cImlvbi1uby1wYWRkaW5nXCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJlY2wtcGhvbmVfX2NvbnRhaW5lclwiXG4gICAgICAgICAgICAqbmdJZj1cImN1cnJlbnRDb3VudHJ5XCJcbiAgICAgICAgICAgIChjbGljayk9XCJvcGVuQ291bnRyeVBhZ2UoKVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGltZyBbc3JjXT1cImN1cnJlbnRDb3VudHJ5LmltZ1wiIC8+XG4gICAgICAgICAgICA8c3Bhbj57eyBjdXJyZW50Q291bnRyeS5kaWFsX2NvZGUgfX08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGlvbi1pbnB1dFxuICAgICAgICAgICAgI3Bob25lSW5wdXRcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3sgJ2dlbmVyaWMucGhvbmVfbnVtYmVyJyB8IHRyYW5zbGF0ZSB9fVwiXG4gICAgICAgICAgICB0eXBlPVwidGVsXCJcbiAgICAgICAgICAgIGlucHV0bW9kZT1cInRlbFwiXG4gICAgICAgICAgICBuYW1lPVwidGVsXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJ0ZWxcIlxuICAgICAgICAgICAgKGlvbkNoYW5nZSk9XCJjaGFuZ2VQaG9uZU51bWJlcigkZXZlbnQpXCJcbiAgICAgICAgICA+PC9pb24taW5wdXQ+XG4gICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICA8L2lvbi1jb2w+XG4gICAgPC9pb24tcm93PlxuICAgIDxpb24tcm93IGNsYXNzPVwiaW9uLWp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgIDxpb24tY29sIHNpemU9XCIxMlwiIHNpemUtbWQ9XCI2XCIgc2l6ZS1sZz1cIjRcIj5cbiAgICAgICAgPGlvbi1idXR0b25cbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICBleHBhbmQ9XCJibG9ja1wiXG4gICAgICAgICAgc2hhcGU9XCJyb3VuZFwiXG4gICAgICAgICAgW2Rpc2FibGVkXT1cImZvcm0uaW52YWxpZFwiXG4gICAgICAgICAgY2xhc3M9XCJpb24tbWFyZ2luLXRvcCBlY2wtYnRuLS1zaGFkb3dcIlxuICAgICAgICA+XG4gICAgICAgICAge3sgJ3Jlc2V0X3Bhc3N3b3JkLnNlbmRfY29kZScgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgPC9pb24tYnV0dG9uPlxuICAgICAgPC9pb24tY29sPlxuICAgIDwvaW9uLXJvdz5cbiAgPC9mb3JtPlxuPC9pb24tY29udGVudD5cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNXVSxJQUFBLHlCQUFBLEdBQUEsT0FBQSxDQUFBO0FBR0UsSUFBQSxxQkFBQSxTQUFBLFNBQUEsc0RBQUE7QUFBQSxNQUFBLHdCQUFBLEdBQUE7QUFBQSxZQUFBLFNBQUEsd0JBQUE7QUFBQSxhQUFBLHNCQUFTLE9BQUEsZ0JBQUEsQ0FBaUI7SUFBQSxDQUFBO0FBRTFCLElBQUEsb0JBQUEsR0FBQSxPQUFB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
