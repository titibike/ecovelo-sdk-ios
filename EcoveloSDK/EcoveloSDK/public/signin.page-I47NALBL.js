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
  AuthService
} from "./chunk-WJQU3GMM.js";
import "./chunk-CHFOG66O.js";
import "./chunk-RAVV2QIY.js";
import "./chunk-T6WE2PS5.js";
import "./chunk-XK4I5MHM.js";
import "./chunk-GVYZRG6X.js";
import "./chunk-FOJAXRYS.js";
import "./chunk-Y7HI6USV.js";
import {
  ToastService,
  ToastType
} from "./chunk-SARQRLZR.js";
import {
  addIcons,
  logoApple,
  logoGoogle
} from "./chunk-3E6DEK7U.js";
import "./chunk-U6SJAXLK.js";
import {
  ActivatedRoute,
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
  IonIcon,
  IonInput,
  IonInputPasswordToggle,
  IonItem,
  IonRow,
  IonText,
  LoadingController,
  ModalController,
  NgControlStatus,
  NgControlStatusGroup,
  NgIf,
  ReactiveFormsModule,
  RequiredValidator,
  RouterLink,
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
  ɵɵpureFunction0,
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

// src/app/pages/auth/signin/signin.page.ts
var _c0 = ["phoneInput"];
var _c1 = () => ["/enter-phone"];
var _c2 = () => ["/signup"];
var _c3 = () => ["/map"];
function SigninPage_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275listener("click", function SigninPage_div_11_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openCountryPage());
    });
    \u0275\u0275element(1, "img", 21);
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
var _SigninPage = class _SigninPage {
  constructor(translateService, modalController, countryService, loadingController, route, authService, toastService, phoneService) {
    this.translateService = translateService;
    this.modalController = modalController;
    this.countryService = countryService;
    this.loadingController = loadingController;
    this.route = route;
    this.authService = authService;
    this.toastService = toastService;
    this.phoneService = phoneService;
    this.phoneCodes = [];
    this.currentCountry = null;
    this.form = new FormGroup({
      tel: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });
    addIcons({ logoApple, logoGoogle });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      try {
        const countries = yield this.countryService.getCountries();
        this.currentCountry = countries.find((x) => x.code === "FR") || null;
        this.route.queryParams.subscribe((params) => {
          var _a, _b;
          if (params["phone"]) {
            const phoneNumber = params["phone"];
            const numberWithoutCode = phoneNumber.replace(((_a = this.currentCountry) == null ? void 0 : _a.dial_code) || "", "");
            this.form.controls["tel"].setValue(numberWithoutCode);
            if ((_b = this.phoneInput) == null ? void 0 : _b.nativeElement) {
              const formattedNumber = this.phoneService.formatPhoneNumber(numberWithoutCode, this.currentCountry);
              this.phoneInput.nativeElement.value = formattedNumber;
            }
          }
        });
        if (this.currentCountry) {
          const placeHolder = yield this.phoneService.getPhoneNumberPattern(this.currentCountry);
          this.phoneInput.nativeElement.placeholder = placeHolder;
        }
      } catch (err) {
        console.error("Erreur lors de la r\xE9cup\xE9ration des pays:", err);
      }
    });
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
              console.warn("Aucun placeholder trouv\xE9");
              this.phoneInput.nativeElement.placeholder = this.translateService.instant("GENERIC.phone_number");
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
  signIn() {
    return __async(this, null, function* () {
      var _a;
      if (!this.form.controls["tel"].value.trim() || !this.form.controls["password"].value.trim()) {
        this.toastService.createWithJustMessage(this.translateService.instant("error.missing_credentials"), ToastType.Error);
        return;
      }
      const loading = yield this.loadingController.create({
        message: this.translateService.instant("generic.please_wait")
      });
      yield loading.present();
      const phone = ((_a = this.currentCountry) == null ? void 0 : _a.dial_code) + this.form.value.tel.replace(/[(),\-,\s]/g, "").replace(/^0+/, "");
      const password = this.form.value.password;
      this.authService.signIn(phone, password).finally(() => {
        loading.dismiss();
      });
    });
  }
};
_SigninPage.\u0275fac = function SigninPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SigninPage)(\u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(CountryService), \u0275\u0275directiveInject(LoadingController), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(PhoneUtilsService));
};
_SigninPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SigninPage, selectors: [["app-signin"]], viewQuery: function SigninPage_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 7, ElementRef);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.phoneInput = _t.first);
  }
}, decls: 59, vars: 39, consts: [["phoneInput", ""], [1, "ion-padding"], [3, "ngSubmit", "formGroup"], [1, "ion-justify-content-center"], ["size", "12", "size-md", "6", "size-lg", "4"], [1, "ion-no-padding"], ["class", "ecl-phone__container", 3, "click", 4, "ngIf"], ["type", "tel", "inputmode", "tel", "name", "tel", "required", "", "formControlName", "tel", 3, "ionChange", "placeholder"], ["fill", "outline", 1, "ion-no-padding"], ["type", "password", "name", "password", "formControlName", "password", "required", "", 3, "placeholder"], ["slot", "end"], ["type", "submit", "shape", "round", "expand", "block", 3, "disabled"], [1, "ion-justify-content-center", "ion-margin-top"], ["size", "12", "size-md", "6", "size-lg", "4", 1, "ion-text-center"], [3, "routerLink"], ["replaceUrl", "true", 3, "routerLink"], ["expand", "block", "shape", "round", "color", "light", 3, "click"], ["name", "logo-apple", "slot", "start"], ["name", "logo-google", "slot", "start"], ["color", "medium", 1, "ion-text-center"], [1, "ecl-phone__container", 3, "click"], [3, "src"]], template: function SigninPage_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "app-header");
    \u0275\u0275elementStart(1, "ion-content", 1)(2, "form", 2);
    \u0275\u0275listener("ngSubmit", function SigninPage_Template_form_ngSubmit_2_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.signIn());
    });
    \u0275\u0275elementStart(3, "ion-row", 3)(4, "ion-col", 4)(5, "h1");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "ion-row", 3)(9, "ion-col", 4)(10, "ion-item", 5);
    \u0275\u0275template(11, SigninPage_div_11_Template, 4, 2, "div", 6);
    \u0275\u0275elementStart(12, "ion-input", 7, 0);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275listener("ionChange", function SigninPage_Template_ion_input_ionChange_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.changePhoneNumber($event));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "ion-row", 3)(16, "ion-col", 4)(17, "ion-item", 8)(18, "ion-input", 9);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275element(20, "ion-input-password-toggle", 10);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(21, "ion-row", 3)(22, "ion-col", 4)(23, "ion-button", 11);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "ion-row", 12)(27, "ion-col", 13)(28, "ion-text")(29, "a", 14);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(32, "ion-row", 12)(33, "ion-col", 13)(34, "ion-text")(35, "a", 15);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(38, "ion-row", 12)(39, "ion-col", 4)(40, "ion-button", 16);
    \u0275\u0275listener("click", function SigninPage_Template_ion_button_click_40_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.authService.signInWithSocialProvider("Apple"));
    });
    \u0275\u0275element(41, "ion-icon", 17);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "ion-row", 3)(45, "ion-col", 4)(46, "ion-button", 16);
    \u0275\u0275listener("click", function SigninPage_Template_ion_button_click_46_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.authService.signInWithSocialProvider("Google"));
    });
    \u0275\u0275element(47, "ion-icon", 18);
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "ion-text", 19)(51, "p");
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "ion-text", 19)(55, "p")(56, "u", 14);
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 16, "signin.title"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx.currentCountry);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(14, 18, "generic.phone_number"));
    \u0275\u0275advance(6);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(19, 20, "generic.password"));
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx.form.invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 22, "signin.title"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(36, _c1));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 24, "signin.forgot_password"), "");
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(37, _c2));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 26, "signin.signup"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(43, 28, "signin.apple_signin"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(49, 30, "signin.google_signin"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 32, "signin.or"));
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(38, _c3));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(58, 34, "signin.skip_step"));
  }
}, dependencies: [
  IonContent,
  IonInput,
  IonCol,
  IonText,
  IonRow,
  IonInputPasswordToggle,
  IonItem,
  IonIcon,
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
  HeaderComponent,
  RouterLink
], encapsulation: 2 });
var SigninPage = _SigninPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SigninPage, [{
    type: Component,
    args: [{ selector: "app-signin", imports: [
      IonContent,
      IonInput,
      IonCol,
      IonText,
      IonRow,
      IonInputPasswordToggle,
      IonItem,
      IonIcon,
      IonButton,
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      TranslateModule,
      HeaderComponent,
      RouterLink
    ], template: `<app-header></app-header>
<ion-content class="ion-padding">
  <form (ngSubmit)="signIn()" [formGroup]="form">
    <!-- TITRE -->
    <ion-row class="ion-justify-content-center">
      <ion-col size="12" size-md="6" size-lg="4">
        <h1>{{ 'signin.title' | translate }}</h1>
      </ion-col>
    </ion-row>
    <!-- PHONE_INPUT -->
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
    <!-- PASSWORD_INPUT -->
    <ion-row class="ion-justify-content-center">
      <ion-col size="12" size-md="6" size-lg="4">
        <ion-item fill="outline" class="ion-no-padding">
          <ion-input
            placeholder="{{ 'generic.password' | translate }}"
            type="password"
            name="password"
            formControlName="password"
            required
          >
            <ion-input-password-toggle slot="end"></ion-input-password-toggle
          ></ion-input>
        </ion-item>
      </ion-col>
    </ion-row>
    <!-- BOUTON_LOGIN -->
    <ion-row class="ion-justify-content-center">
      <ion-col size="12" size-md="6" size-lg="4">
        <ion-button
          type="submit"
          shape="round"
          expand="block"
          [disabled]="form.invalid"
        >
          {{ 'signin.title' | translate }}
        </ion-button>
      </ion-col>
    </ion-row>
    <!-- MOT_DE_PASSE_OUBLIE -->

    <ion-row class="ion-justify-content-center ion-margin-top">
      <ion-col size="12" size-md="6" size-lg="4" class="ion-text-center">
        <ion-text>
          <a [routerLink]="['/enter-phone']">
            {{ 'signin.forgot_password' | translate }}</a
          >
        </ion-text>
      </ion-col>
    </ion-row>
    <!-- SIGNUP -->
    <ion-row class="ion-justify-content-center ion-margin-top">
      <ion-col size="12" size-md="6" size-lg="4" class="ion-text-center">
        <ion-text
          ><a [routerLink]="['/signup']" replaceUrl="true"
            >{{ 'signin.signup' | translate }}</a
          ></ion-text
        >
      </ion-col>
    </ion-row>
    <!-- BOUTON_APPLE -->
    <ion-row class="ion-justify-content-center ion-margin-top">
      <ion-col size="12" size-md="6" size-lg="4">
        <ion-button
          expand="block"
          shape="round"
          color="light"
          (click)="authService.signInWithSocialProvider('Apple')"
        >
          <ion-icon name="logo-apple" slot="start"></ion-icon>
          {{ 'signin.apple_signin' | translate }}
        </ion-button>
      </ion-col>
    </ion-row>
    <!-- BOUTON_GOOGLE -->
    <ion-row class="ion-justify-content-center">
      <ion-col size="12" size-md="6" size-lg="4">
        <ion-button
          expand="block"
          shape="round"
          color="light"
          (click)="authService.signInWithSocialProvider('Google')"
        >
          <ion-icon name="logo-google" slot="start"></ion-icon>
          {{ 'signin.google_signin' | translate }}
        </ion-button>
      </ion-col>
    </ion-row>
    <!-- "OU" -->
    <ion-text color="medium" class="ion-text-center">
      <p>{{ 'signin.or' | translate }}</p>
    </ion-text>
    <ion-text color="medium" class="ion-text-center">
      <p>
        <u [routerLink]="['/map']">{{ 'signin.skip_step' | translate }}</u>
      </p>
    </ion-text>
  </form>
</ion-content>
` }]
  }], () => [{ type: TranslateService }, { type: ModalController }, { type: CountryService }, { type: LoadingController }, { type: ActivatedRoute }, { type: AuthService }, { type: ToastService }, { type: PhoneUtilsService }], { phoneInput: [{
    type: ViewChild,
    args: ["phoneInput", { read: ElementRef, static: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SigninPage, { className: "SigninPage", filePath: "src/app/pages/auth/signin/signin.page.ts", lineNumber: 58 });
})();
export {
  SigninPage
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wYWdlcy9hdXRoL3NpZ25pbi9zaWduaW4ucGFnZS50cyIsICJzcmMvYXBwL3BhZ2VzL2F1dGgvc2lnbmluL3NpZ25pbi5wYWdlLmh0bWwiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJ1xuaW1wb3J0IHtcbiAgRm9ybUNvbnRyb2wsXG4gIEZvcm1Hcm91cCxcbiAgRm9ybXNNb2R1bGUsXG4gIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gIFZhbGlkYXRvcnMsXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJ1xuaW1wb3J0IHtcbiAgSW9uQ29udGVudCxcbiAgSW9uSW5wdXQsXG4gIElvbkJ1dHRvbixcbiAgSW9uQ29sLFxuICBJb25JbnB1dFBhc3N3b3JkVG9nZ2xlLFxuICBJb25UZXh0LFxuICBJb25MYWJlbCxcbiAgSW9uSWNvbixcbiAgSW9uSXRlbSxcbiAgSW9uUm93LFxuICBNb2RhbENvbnRyb2xsZXIsXG4gIExvYWRpbmdDb250cm9sbGVyLFxufSBmcm9tICdAaW9uaWMvYW5ndWxhci9zdGFuZGFsb25lJ1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlLCBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSdcbmltcG9ydCB7IGZpbmFsaXplIH0gZnJvbSAncnhqcydcbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCB9IGZyb20gJ3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudCdcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy9leHRlcm5hbC9hdXRoLnNlcnZpY2UnXG5pbXBvcnQgeyBSb3V0ZXJMaW5rLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcbmltcG9ydCB7IFRvYXN0U2VydmljZSwgVG9hc3RUeXBlIH0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy91dGlscy90b2FzdC5zZXJ2aWNlJ1xuaW1wb3J0IHsgQ291bnRyaWVzQ29tcG9uZW50IH0gZnJvbSAnc3JjL2FwcC9jb21wb25lbnRzL21vZGFscy9jb3VudHJpZXMvY291bnRyaWVzLmNvbXBvbmVudCdcbmltcG9ydCB7IENvdW50cnksIENvdW50cnlTZXJ2aWNlIH0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy91dGlscy9jb3VudHJ5LnNlcnZpY2UnXG5pbXBvcnQgeyBQaG9uZVV0aWxzU2VydmljZSB9IGZyb20gJ3NyYy9hcHAvc2VydmljZXMvdXRpbHMvcGhvbmUuc2VydmljZSdcbmltcG9ydCB7IGFkZEljb25zIH0gZnJvbSAnaW9uaWNvbnMnXG5pbXBvcnQgeyBsb2dvQXBwbGUsIGxvZ29Hb29nbGUgfSBmcm9tICdpb25pY29ucy9pY29ucydcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNpZ25pbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWduaW4ucGFnZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2lnbmluLnBhZ2Uuc2NzcyddLFxuICBpbXBvcnRzOiBbXG4gICAgSW9uQ29udGVudCxcbiAgICBJb25JbnB1dCxcbiAgICBJb25Db2wsXG4gICAgSW9uVGV4dCxcbiAgICBJb25Sb3csXG4gICAgSW9uSW5wdXRQYXNzd29yZFRvZ2dsZSxcbiAgICBJb25JdGVtLFxuICAgIElvbkljb24sXG4gICAgSW9uQnV0dG9uLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIFRyYW5zbGF0ZU1vZHVsZSxcbiAgICBIZWFkZXJDb21wb25lbnQsXG4gICAgUm91dGVyTGluayxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU2lnbmluUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ3Bob25lSW5wdXQnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICBwaG9uZUlucHV0ITogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PlxuICBwdWJsaWMgZm9ybTogRm9ybUdyb3VwXG4gIHB1YmxpYyBwaG9uZUNvZGVzOiBDb3VudHJ5W10gPSBbXVxuICBwdWJsaWMgY3VycmVudENvdW50cnk6IENvdW50cnkgfCBudWxsID0gbnVsbFxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSxcbiAgICBwcml2YXRlIG1vZGFsQ29udHJvbGxlcjogTW9kYWxDb250cm9sbGVyLFxuICAgIHByaXZhdGUgY291bnRyeVNlcnZpY2U6IENvdW50cnlTZXJ2aWNlLFxuICAgIHByaXZhdGUgbG9hZGluZ0NvbnRyb2xsZXI6IExvYWRpbmdDb250cm9sbGVyLFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHB1YmxpYyBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0b2FzdFNlcnZpY2U6IFRvYXN0U2VydmljZSxcbiAgICBwcml2YXRlIHBob25lU2VydmljZTogUGhvbmVVdGlsc1NlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5mb3JtID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgICB0ZWw6IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCksXG4gICAgICBwYXNzd29yZDogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcbiAgICB9KVxuICAgIGFkZEljb25zKHsgbG9nb0FwcGxlLCBsb2dvR29vZ2xlIH0pXG4gIH1cblxuICBhc3luYyBuZ09uSW5pdCgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY291bnRyaWVzID0gYXdhaXQgdGhpcy5jb3VudHJ5U2VydmljZS5nZXRDb3VudHJpZXMoKVxuICAgICAgdGhpcy5jdXJyZW50Q291bnRyeSA9XG4gICAgICAgIGNvdW50cmllcy5maW5kKCh4OiBDb3VudHJ5KSA9PiB4LmNvZGUgPT09ICdGUicpIHx8IG51bGxcblxuICAgICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xuICAgICAgICBpZiAocGFyYW1zWydwaG9uZSddKSB7XG4gICAgICAgICAgY29uc3QgcGhvbmVOdW1iZXIgPSBwYXJhbXNbJ3Bob25lJ11cbiAgICAgICAgICBjb25zdCBudW1iZXJXaXRob3V0Q29kZSA9IHBob25lTnVtYmVyLnJlcGxhY2UoXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRDb3VudHJ5Py5kaWFsX2NvZGUgfHwgJycsXG4gICAgICAgICAgICAnJ1xuICAgICAgICAgIClcbiAgICAgICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ3RlbCddLnNldFZhbHVlKG51bWJlcldpdGhvdXRDb2RlKVxuXG4gICAgICAgICAgaWYgKHRoaXMucGhvbmVJbnB1dD8ubmF0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkTnVtYmVyID0gdGhpcy5waG9uZVNlcnZpY2UuZm9ybWF0UGhvbmVOdW1iZXIoXG4gICAgICAgICAgICAgIG51bWJlcldpdGhvdXRDb2RlLFxuICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRDb3VudHJ5IGFzIENvdW50cnlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIHRoaXMucGhvbmVJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gZm9ybWF0dGVkTnVtYmVyXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBpZiAodGhpcy5jdXJyZW50Q291bnRyeSkge1xuICAgICAgICBjb25zdCBwbGFjZUhvbGRlciA9IGF3YWl0IHRoaXMucGhvbmVTZXJ2aWNlLmdldFBob25lTnVtYmVyUGF0dGVybihcbiAgICAgICAgICB0aGlzLmN1cnJlbnRDb3VudHJ5XG4gICAgICAgIClcbiAgICAgICAgdGhpcy5waG9uZUlucHV0Lm5hdGl2ZUVsZW1lbnQucGxhY2Vob2xkZXIgPSBwbGFjZUhvbGRlclxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZGUgbGEgcsOpY3Vww6lyYXRpb24gZGVzIHBheXM6JywgZXJyKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBvcGVuQ291bnRyeVBhZ2UoKSB7XG4gICAgY29uc3QgbW9kYWwgPSBhd2FpdCB0aGlzLm1vZGFsQ29udHJvbGxlci5jcmVhdGUoe1xuICAgICAgY29tcG9uZW50OiBDb3VudHJpZXNDb21wb25lbnQsXG4gICAgICBjb21wb25lbnRQcm9wczogeyBjdXJyZW50UG9zaXRpb246ICdGUicgfSxcbiAgICAgIGluaXRpYWxCcmVha3BvaW50OiAwLjc1LFxuICAgICAgYnJlYWtwb2ludHM6IFswLCAwLjc1XSxcbiAgICB9KVxuXG4gICAgbW9kYWwub25EaWREaXNtaXNzKCkudGhlbihhc3luYyAoZGF0YSkgPT4ge1xuICAgICAgaWYgKGRhdGE/LmRhdGE/LnNlbGVjdGVkQ291bnRyeSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRDb3VudHJ5ID0gZGF0YS5kYXRhLnNlbGVjdGVkQ291bnRyeVxuICAgICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ3RlbCddLnNldFZhbHVlKCcnKVxuICAgICAgICBpZiAodGhpcy5jdXJyZW50Q291bnRyeSkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBwbGFjZUhvbGRlciA9IGF3YWl0IHRoaXMucGhvbmVTZXJ2aWNlLmdldFBob25lTnVtYmVyUGF0dGVybihcbiAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Q291bnRyeVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgdGhpcy5waG9uZUlucHV0Lm5hdGl2ZUVsZW1lbnQucGxhY2Vob2xkZXIgPSBwbGFjZUhvbGRlclxuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdBdWN1biBwbGFjZWhvbGRlciB0cm91dsOpJylcbiAgICAgICAgICAgIHRoaXMucGhvbmVJbnB1dC5uYXRpdmVFbGVtZW50LnBsYWNlaG9sZGVyID1cbiAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQoJ0dFTkVSSUMucGhvbmVfbnVtYmVyJylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgYXdhaXQgbW9kYWwucHJlc2VudCgpXG4gIH1cblxuICBwdWJsaWMgY2hhbmdlUGhvbmVOdW1iZXIoZXZlbnQ6IEV2ZW50KSB7XG4gICAgY29uc3QgaW5wdXRFbGVtZW50ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnRcbiAgICBjb25zdCBpbnB1dFZhbHVlID0gaW5wdXRFbGVtZW50LnZhbHVlXG5cbiAgICBpZiAodGhpcy5jdXJyZW50Q291bnRyeSkge1xuICAgICAgY29uc3QgbnVtT3V0cHV0ID0gdGhpcy5waG9uZVNlcnZpY2UuZm9ybWF0UGhvbmVOdW1iZXIoXG4gICAgICAgIGlucHV0VmFsdWUsXG4gICAgICAgIHRoaXMuY3VycmVudENvdW50cnlcbiAgICAgIClcbiAgICAgIGlucHV0RWxlbWVudC52YWx1ZSA9IGlucHV0VmFsdWUuc3RhcnRzV2l0aCgnMCcpXG4gICAgICAgID8gaW5wdXRWYWx1ZS5zdWJzdHJpbmcoMSlcbiAgICAgICAgOiBudW1PdXRwdXRcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgc2lnbkluKCkge1xuICAgIGlmIChcbiAgICAgICF0aGlzLmZvcm0uY29udHJvbHNbJ3RlbCddLnZhbHVlLnRyaW0oKSB8fFxuICAgICAgIXRoaXMuZm9ybS5jb250cm9sc1sncGFzc3dvcmQnXS52YWx1ZS50cmltKClcbiAgICApIHtcbiAgICAgIHRoaXMudG9hc3RTZXJ2aWNlLmNyZWF0ZVdpdGhKdXN0TWVzc2FnZShcbiAgICAgICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQoJ2Vycm9yLm1pc3NpbmdfY3JlZGVudGlhbHMnKSxcbiAgICAgICAgVG9hc3RUeXBlLkVycm9yXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgbG9hZGluZyA9IGF3YWl0IHRoaXMubG9hZGluZ0NvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgIG1lc3NhZ2U6IHRoaXMudHJhbnNsYXRlU2VydmljZS5pbnN0YW50KCdnZW5lcmljLnBsZWFzZV93YWl0JyksXG4gICAgfSlcbiAgICBhd2FpdCBsb2FkaW5nLnByZXNlbnQoKVxuICAgIGNvbnN0IHBob25lID1cbiAgICAgIHRoaXMuY3VycmVudENvdW50cnk/LmRpYWxfY29kZSArXG4gICAgICB0aGlzLmZvcm0udmFsdWUudGVsLnJlcGxhY2UoL1soKSxcXC0sXFxzXS9nLCAnJykucmVwbGFjZSgvXjArLywgJycpXG4gICAgY29uc3QgcGFzc3dvcmQgPSB0aGlzLmZvcm0udmFsdWUucGFzc3dvcmRcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLnNpZ25JbihwaG9uZSwgcGFzc3dvcmQpLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgbG9hZGluZy5kaXNtaXNzKClcbiAgICB9KVxuICB9XG59XG4iLCAiPGFwcC1oZWFkZXI+PC9hcHAtaGVhZGVyPlxuPGlvbi1jb250ZW50IGNsYXNzPVwiaW9uLXBhZGRpbmdcIj5cbiAgPGZvcm0gKG5nU3VibWl0KT1cInNpZ25JbigpXCIgW2Zvcm1Hcm91cF09XCJmb3JtXCI+XG4gICAgPCEtLSBUSVRSRSAtLT5cbiAgICA8aW9uLXJvdyBjbGFzcz1cImlvbi1qdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICA8aW9uLWNvbCBzaXplPVwiMTJcIiBzaXplLW1kPVwiNlwiIHNpemUtbGc9XCI0XCI+XG4gICAgICAgIDxoMT57eyAnc2lnbmluLnRpdGxlJyB8IHRyYW5zbGF0ZSB9fTwvaDE+XG4gICAgICA8L2lvbi1jb2w+XG4gICAgPC9pb24tcm93PlxuICAgIDwhLS0gUEhPTkVfSU5QVVQgLS0+XG4gICAgPGlvbi1yb3cgY2xhc3M9XCJpb24tanVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgPGlvbi1jb2wgc2l6ZT1cIjEyXCIgc2l6ZS1tZD1cIjZcIiBzaXplLWxnPVwiNFwiPlxuICAgICAgICA8aW9uLWl0ZW0gY2xhc3M9XCJpb24tbm8tcGFkZGluZ1wiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwiZWNsLXBob25lX19jb250YWluZXJcIlxuICAgICAgICAgICAgKm5nSWY9XCJjdXJyZW50Q291bnRyeVwiXG4gICAgICAgICAgICAoY2xpY2spPVwib3BlbkNvdW50cnlQYWdlKClcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbWcgW3NyY109XCJjdXJyZW50Q291bnRyeS5pbWdcIiAvPlxuICAgICAgICAgICAgPHNwYW4+e3sgY3VycmVudENvdW50cnkuZGlhbF9jb2RlIH19PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxpb24taW5wdXRcbiAgICAgICAgICAgICNwaG9uZUlucHV0XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cInt7ICdnZW5lcmljLnBob25lX251bWJlcicgfCB0cmFuc2xhdGUgfX1cIlxuICAgICAgICAgICAgdHlwZT1cInRlbFwiXG4gICAgICAgICAgICBpbnB1dG1vZGU9XCJ0ZWxcIlxuICAgICAgICAgICAgbmFtZT1cInRlbFwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwidGVsXCJcbiAgICAgICAgICAgIChpb25DaGFuZ2UpPVwiY2hhbmdlUGhvbmVOdW1iZXIoJGV2ZW50KVwiXG4gICAgICAgICAgPjwvaW9uLWlucHV0PlxuICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgPC9pb24tY29sPlxuICAgIDwvaW9uLXJvdz5cbiAgICA8IS0tIFBBU1NXT1JEX0lOUFVUIC0tPlxuICAgIDxpb24tcm93IGNsYXNzPVwiaW9uLWp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgIDxpb24tY29sIHNpemU9XCIxMlwiIHNpemUtbWQ9XCI2XCIgc2l6ZS1sZz1cIjRcIj5cbiAgICAgICAgPGlvbi1pdGVtIGZpbGw9XCJvdXRsaW5lXCIgY2xhc3M9XCJpb24tbm8tcGFkZGluZ1wiPlxuICAgICAgICAgIDxpb24taW5wdXRcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3sgJ2dlbmVyaWMucGFzc3dvcmQnIHwgdHJhbnNsYXRlIH19XCJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW9uLWlucHV0LXBhc3N3b3JkLXRvZ2dsZSBzbG90PVwiZW5kXCI+PC9pb24taW5wdXQtcGFzc3dvcmQtdG9nZ2xlXG4gICAgICAgICAgPjwvaW9uLWlucHV0PlxuICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgPC9pb24tY29sPlxuICAgIDwvaW9uLXJvdz5cbiAgICA8IS0tIEJPVVRPTl9MT0dJTiAtLT5cbiAgICA8aW9uLXJvdyBjbGFzcz1cImlvbi1qdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICA8aW9uLWNvbCBzaXplPVwiMTJcIiBzaXplLW1kPVwiNlwiIHNpemUtbGc9XCI0XCI+XG4gICAgICAgIDxpb24tYnV0dG9uXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgc2hhcGU9XCJyb3VuZFwiXG4gICAgICAgICAgZXhwYW5kPVwiYmxvY2tcIlxuICAgICAgICAgIFtkaXNhYmxlZF09XCJmb3JtLmludmFsaWRcIlxuICAgICAgICA+XG4gICAgICAgICAge3sgJ3NpZ25pbi50aXRsZScgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgPC9pb24tYnV0dG9uPlxuICAgICAgPC9pb24tY29sPlxuICAgIDwvaW9uLXJvdz5cbiAgICA8IS0tIE1PVF9ERV9QQVNTRV9PVUJMSUUgLS0+XG5cbiAgICA8aW9uLXJvdyBjbGFzcz1cImlvbi1qdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGlvbi1tYXJnaW4tdG9wXCI+XG4gICAgICA8aW9uLWNvbCBzaXplPVwiMTJcIiBzaXplLW1kPVwiNlwiIHNpemUtbGc9XCI0XCIgY2xhc3M9XCJpb24tdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPGlvbi10ZXh0PlxuICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL2VudGVyLXBob25lJ11cIj5cbiAgICAgICAgICAgIHt7ICdzaWduaW4uZm9yZ290X3Bhc3N3b3JkJyB8IHRyYW5zbGF0ZSB9fTwvYVxuICAgICAgICAgID5cbiAgICAgICAgPC9pb24tdGV4dD5cbiAgICAgIDwvaW9uLWNvbD5cbiAgICA8L2lvbi1yb3c+XG4gICAgPCEtLSBTSUdOVVAgLS0+XG4gICAgPGlvbi1yb3cgY2xhc3M9XCJpb24tanVzdGlmeS1jb250ZW50LWNlbnRlciBpb24tbWFyZ2luLXRvcFwiPlxuICAgICAgPGlvbi1jb2wgc2l6ZT1cIjEyXCIgc2l6ZS1tZD1cIjZcIiBzaXplLWxnPVwiNFwiIGNsYXNzPVwiaW9uLXRleHQtY2VudGVyXCI+XG4gICAgICAgIDxpb24tdGV4dFxuICAgICAgICAgID48YSBbcm91dGVyTGlua109XCJbJy9zaWdudXAnXVwiIHJlcGxhY2VVcmw9XCJ0cnVlXCJcbiAgICAgICAgICAgID57eyAnc2lnbmluLnNpZ251cCcgfCB0cmFuc2xhdGUgfX08L2FcbiAgICAgICAgICA+PC9pb24tdGV4dFxuICAgICAgICA+XG4gICAgICA8L2lvbi1jb2w+XG4gICAgPC9pb24tcm93PlxuICAgIDwhLS0gQk9VVE9OX0FQUExFIC0tPlxuICAgIDxpb24tcm93IGNsYXNzPVwiaW9uLWp1c3RpZnktY29udGVudC1jZW50ZXIgaW9uLW1hcmdpbi10b3BcIj5cbiAgICAgIDxpb24tY29sIHNpemU9XCIxMlwiIHNpemUtbWQ9XCI2XCIgc2l6ZS1sZz1cIjRcIj5cbiAgICAgICAgPGlvbi1idXR0b25cbiAgICAgICAgICBleHBhbmQ9XCJibG9ja1wiXG4gICAgICAgICAgc2hhcGU9XCJyb3VuZFwiXG4gICAgICAgICAgY29sb3I9XCJsaWdodFwiXG4gICAgICAgICAgKGNsaWNrKT1cImF1dGhTZXJ2aWNlLnNpZ25JbldpdGhTb2NpYWxQcm92aWRlcignQXBwbGUnKVwiXG4gICAgICAgID5cbiAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImxvZ28tYXBwbGVcIiBzbG90PVwic3RhcnRcIj48L2lvbi1pY29uPlxuICAgICAgICAgIHt7ICdzaWduaW4uYXBwbGVfc2lnbmluJyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICA8L2lvbi1idXR0b24+XG4gICAgICA8L2lvbi1jb2w+XG4gICAgPC9pb24tcm93PlxuICAgIDwhLS0gQk9VVE9OX0dPT0dMRSAtLT5cbiAgICA8aW9uLXJvdyBjbGFzcz1cImlvbi1qdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICA8aW9uLWNvbCBzaXplPVwiMTJcIiBzaXplLW1kPVwiNlwiIHNpemUtbGc9XCI0XCI+XG4gICAgICAgIDxpb24tYnV0dG9uXG4gICAgICAgICAgZXhwYW5kPVwiYmxvY2tcIlxuICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxuICAgICAgICAgIGNvbG9yPVwibGlnaHRcIlxuICAgICAgICAgIChjbGljayk9XCJhdXRoU2VydmljZS5zaWduSW5XaXRoU29jaWFsUHJvdmlkZXIoJ0dvb2dsZScpXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwibG9nby1nb29nbGVcIiBzbG90PVwic3RhcnRcIj48L2lvbi1pY29uPlxuICAgICAgICAgIHt7ICdzaWduaW4uZ29vZ2xlX3NpZ25pbicgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgPC9pb24tYnV0dG9uPlxuICAgICAgPC9pb24tY29sPlxuICAgIDwvaW9uLXJvdz5cbiAgICA8IS0tIFwiT1VcIiAtLT5cbiAgICA8aW9uLXRleHQgY29sb3I9XCJtZWRpdW1cIiBjbGFzcz1cImlvbi10ZXh0LWNlbnRlclwiPlxuICAgICAgPHA+e3sgJ3NpZ25pbi5vcicgfCB0cmFuc2xhdGUgfX08L3A+XG4gICAgPC9pb24tdGV4dD5cbiAgICA8aW9uLXRleHQgY29sb3I9XCJtZWRpdW1cIiBjbGFzcz1cImlvbi10ZXh0LWNlbnRlclwiPlxuICAgICAgPHA+XG4gICAgICAgIDx1IFtyb3V0ZXJMaW5rXT1cIlsnL21hcCddXCI+e3sgJ3NpZ25pbi5za2lwX3N0ZXAnIHwgdHJhbnNsYXRlIH19PC91PlxuICAgICAgPC9wPlxuICAgIDwvaW9uLXRleHQ+XG4gIDwvZm9ybT5cbjwvaW9uLWNvbnRlbnQ+XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2FVLElBQUEseUJBQUEsR0FBQSxPQUFBLEVBQUE7QUFHRSxJQUFBLHFCQUFBLFNBQUEsU0FBQSxrREFBQTtBQUFBLE1BQUEsd0JBQUEsR0FBQTtBQUFBLFlBQUEsU0FBQSx3QkFBQTtBQUFBLGFBQUEsc0JBQVMsT0FBQSxnQkFBQSxDQUFpQjtJQUFBLENBQUE7QUFFMUIsSUFBQSxvQkFBQSxHQUFBLE9BQUEsRUFBQTtBQUNBLElBQUEseUJBQUEsR0FBQSxNQUFBO0FBQU0sSUFBQSxpQkFBQSxDQUFBO0FBQThCLElBQUEsdUJBQUEsRUFBTzs7OztBQUR0QyxJQUFBLG9CQUFBO0FBQUEsSUFBQSxxQkFBQSxPQUFBLE9BQUEsZUFBQSxLQUFBLHVCQUFBO0FBQ0MsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSw0QkFBQSxPQUFBLGVBQUEsU0FBQTs7O0FEc0NaLElBQU8sY0FBUCxNQUFPLFlBQVU7RUFPckIsWUFDVSxrQkFDQSxpQkFDQSxn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
