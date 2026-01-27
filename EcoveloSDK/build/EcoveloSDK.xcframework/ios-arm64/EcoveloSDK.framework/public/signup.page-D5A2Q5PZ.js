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
import {
  RecaptchaService
} from "./chunk-GVYZRG6X.js";
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

// src/app/pages/auth/signup/signup.page.ts
var _c0 = ["phoneInput"];
var _c1 = () => ["/signin"];
var _c2 = () => ["/map"];
function SignupPage_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275listener("click", function SignupPage_div_11_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openCountryPage());
    });
    \u0275\u0275element(1, "img", 26);
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
function SignupPage_ion_text_15_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "signup.phone_required"), " ");
  }
}
function SignupPage_ion_text_15_small_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "signup.phone_invalid"), " ");
  }
}
function SignupPage_ion_text_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-text", 27);
    \u0275\u0275template(1, SignupPage_ion_text_15_small_1_Template, 3, 3, "small", 28)(2, SignupPage_ion_text_15_small_2_Template, 3, 3, "small", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r2.form.get("tel")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r2.form.get("tel")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["pattern"]);
  }
}
function SignupPage_ion_text_21_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "signup.email_required"), " ");
  }
}
function SignupPage_ion_text_21_small_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "signup.email_invalid"), " ");
  }
}
function SignupPage_ion_text_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-text", 27);
    \u0275\u0275template(1, SignupPage_ion_text_21_small_1_Template, 3, 3, "small", 28)(2, SignupPage_ion_text_21_small_2_Template, 3, 3, "small", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r2.form.get("email")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r2.form.get("email")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["pattern"]);
  }
}
function SignupPage_ion_text_27_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "signup.first_name_required"), " ");
  }
}
function SignupPage_ion_text_27_small_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "signup.no_special_characters"), " ");
  }
}
function SignupPage_ion_text_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-text", 27);
    \u0275\u0275template(1, SignupPage_ion_text_27_small_1_Template, 3, 3, "small", 28)(2, SignupPage_ion_text_27_small_2_Template, 3, 3, "small", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r2.form.get("first_name")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r2.form.get("first_name")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["pattern"]);
  }
}
function SignupPage_ion_text_33_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "signup.last_name_required"), " ");
  }
}
function SignupPage_ion_text_33_small_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "signup.no_special_characters"), " ");
  }
}
function SignupPage_ion_text_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-text", 27);
    \u0275\u0275template(1, SignupPage_ion_text_33_small_1_Template, 3, 3, "small", 28)(2, SignupPage_ion_text_33_small_2_Template, 3, 3, "small", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r2.form.get("last_name")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r2.form.get("last_name")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["pattern"]);
  }
}
function SignupPage_ion_text_40_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "signup.password_required"), " ");
  }
}
function SignupPage_ion_text_40_small_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "signup.password_length"), " ");
  }
}
function SignupPage_ion_text_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-text", 27);
    \u0275\u0275template(1, SignupPage_ion_text_40_small_1_Template, 3, 3, "small", 28)(2, SignupPage_ion_text_40_small_2_Template, 3, 3, "small", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r2.form.get("password")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r2.form.get("password")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["minlength"]);
  }
}
var _SignupPage = class _SignupPage {
  constructor(translateService, modalController, countryService, authService, toastService, phoneService, recaptchaService, loadingCtrl) {
    this.translateService = translateService;
    this.modalController = modalController;
    this.countryService = countryService;
    this.authService = authService;
    this.toastService = toastService;
    this.phoneService = phoneService;
    this.recaptchaService = recaptchaService;
    this.loadingCtrl = loadingCtrl;
    this.phoneCodes = [];
    this.currentCountry = null;
    this.form = new FormGroup({
      first_name: new FormControl("", [
        Validators.required,
        Validators.pattern(/^[A-Za-z\u00C0-\u00FF]+(?:[-\s][A-Za-z\u00C0-\u00FF]+)*\s*$/)
      ]),
      last_name: new FormControl("", [
        Validators.required,
        Validators.pattern(/^[A-Za-z\u00C0-\u00FF]+(?:[-\s][A-Za-z\u00C0-\u00FF]+)*\s*$/)
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")
      ]),
      tel: new FormControl("", [Validators.required]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/^(?=.*[0-9]).*$/)
      ])
    });
    addIcons({ logoGoogle, logoApple });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const countries = yield this.countryService.getCountries();
      this.currentCountry = countries.find((x) => x.code === "FR") || null;
      if (this.currentCountry) {
        const placeHolder = yield this.phoneService.getPhoneNumberPattern(this.currentCountry);
        this.phoneInput.nativeElement.placeholder = placeHolder;
      }
      yield this.recaptchaService.loadRecaptcha();
    });
  }
  ionViewWillLeave() {
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
              console.warn("Aucun placeholder trouv\xE9");
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
  signInWithSocialProvider(provider) {
    return __async(this, null, function* () {
      this.authService.signInWithSocialProvider(provider);
    });
  }
  signUp() {
    return __async(this, null, function* () {
      var _a;
      if (this.areFormFieldsEmpty()) {
        this.toastService.createWithJustMessage(this.translateService.instant("error.missing_credentials"), ToastType.Error);
        return;
      }
      const loading = yield this.loadingCtrl.create({
        message: this.translateService.instant("generic.loading")
      });
      yield loading.present();
      const user = {
        name: `${this.form.value.first_name.trim()} ${this.form.value.last_name.trim()}`,
        email: this.form.value.email,
        phone: ((_a = this.currentCountry) == null ? void 0 : _a.dial_code) + this.form.value.tel.replace(/[(),\-,\s]/g, "").replace(/^0+/, ""),
        password: this.form.value.password
      };
      this.authService.signUp(user).finally(() => __async(this, null, function* () {
        yield loading.dismiss();
      }));
    });
  }
  areFormFieldsEmpty() {
    return !(this.form.controls["first_name"].value.trim() && this.form.controls["last_name"].value.trim() && this.form.controls["email"].value.trim() && this.form.controls["tel"].value.trim() && this.form.controls["password"].value.trim());
  }
};
_SignupPage.\u0275fac = function SignupPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SignupPage)(\u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(CountryService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(PhoneUtilsService), \u0275\u0275directiveInject(RecaptchaService), \u0275\u0275directiveInject(LoadingController));
};
_SignupPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignupPage, selectors: [["app-signup"]], viewQuery: function SignupPage_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 7, ElementRef);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.phoneInput = _t.first);
  }
}, decls: 69, vars: 45, consts: [["phoneInput", ""], [1, "ion-padding"], [3, "ngSubmit", "formGroup"], [1, "ion-justify-content-center"], ["size", "12", "size-md", "6", "size-lg", "4"], [1, "ion-no-padding"], ["class", "ecl-phone__container", 3, "click", 4, "ngIf"], ["type", "tel", "inputmode", "tel", "name", "tel", "required", "", "formControlName", "tel", 3, "ionChange", "placeholder"], ["color", "danger", 4, "ngIf"], ["fill", "outline", 1, "ion-no-padding"], ["type", "email", "name", "email", "formControlName", "email", "required", "", 3, "placeholder"], ["type", "text", "name", "first_name", "formControlName", "first_name", "required", "", 3, "placeholder"], ["type", "text", "name", "last_name", "formControlName", "last_name", "required", "", 3, "placeholder"], ["type", "password", "name", "password", "formControlName", "password", "required", "", 3, "placeholder"], ["slot", "end"], ["type", "submit", "expand", "block", "shape", "round", 1, "ion-margin-top", 3, "disabled"], [1, "ion-justify-content-center", "ion-margin-top"], ["size", "12", "size-md", "6", "size-lg", "4", 1, "ion-text-center"], ["replaceUrl", "true", 3, "routerLink"], [1, "ion-justify-content-center", "ion-padding-top"], ["expand", "block", "shape", "round", "color", "light", 3, "click"], ["name", "logo-apple", "slot", "start"], ["name", "logo-google", "slot", "start"], ["color", "medium", 1, "ion-text-center"], [3, "routerLink"], [1, "ecl-phone__container", 3, "click"], [3, "src"], ["color", "danger"], [4, "ngIf"]], template: function SignupPage_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "app-header");
    \u0275\u0275elementStart(1, "ion-content", 1)(2, "form", 2);
    \u0275\u0275listener("ngSubmit", function SignupPage_Template_form_ngSubmit_2_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.signUp());
    });
    \u0275\u0275elementStart(3, "ion-row", 3)(4, "ion-col", 4)(5, "h1");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "ion-row", 3)(9, "ion-col", 4)(10, "ion-item", 5);
    \u0275\u0275template(11, SignupPage_div_11_Template, 4, 2, "div", 6);
    \u0275\u0275elementStart(12, "ion-input", 7, 0);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275listener("ionChange", function SignupPage_Template_ion_input_ionChange_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.changePhoneNumber($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, SignupPage_ion_text_15_Template, 3, 2, "ion-text", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "ion-row", 3)(17, "ion-col", 4)(18, "ion-item", 9);
    \u0275\u0275element(19, "ion-input", 10);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, SignupPage_ion_text_21_Template, 3, 2, "ion-text", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "ion-row", 3)(23, "ion-col", 4)(24, "ion-item", 9);
    \u0275\u0275element(25, "ion-input", 11);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, SignupPage_ion_text_27_Template, 3, 2, "ion-text", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "ion-row", 3)(29, "ion-col", 4)(30, "ion-item", 9);
    \u0275\u0275element(31, "ion-input", 12);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(33, SignupPage_ion_text_33_Template, 3, 2, "ion-text", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "ion-row", 3)(35, "ion-col", 4)(36, "ion-item", 9)(37, "ion-input", 13);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275element(39, "ion-input-password-toggle", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(40, SignupPage_ion_text_40_Template, 3, 2, "ion-text", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "ion-row", 3)(42, "ion-col", 4)(43, "ion-button", 15);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "ion-row", 16)(47, "ion-col", 17)(48, "ion-text")(49, "a", 18);
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(52, "ion-row", 19)(53, "ion-col", 4)(54, "ion-button", 20);
    \u0275\u0275listener("click", function SignupPage_Template_ion_button_click_54_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.signInWithSocialProvider("Apple"));
    });
    \u0275\u0275element(55, "ion-icon", 21);
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(58, "ion-row", 3)(59, "ion-col", 4)(60, "ion-button", 20);
    \u0275\u0275listener("click", function SignupPage_Template_ion_button_click_60_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.signInWithSocialProvider("Google"));
    });
    \u0275\u0275element(61, "ion-icon", 22);
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(64, "ion-text", 23)(65, "p")(66, "u", 24);
    \u0275\u0275text(67);
    \u0275\u0275pipe(68, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_7_0;
    let tmp_9_0;
    let tmp_11_0;
    let tmp_13_0;
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 21, "signup.title"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx.currentCountry);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(14, 23, "generic.phone_number"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx.form.get("tel")) == null ? null : tmp_5_0.touched) && ((tmp_5_0 = ctx.form.get("tel")) == null ? null : tmp_5_0.invalid));
    \u0275\u0275advance(4);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(20, 25, "generic.email"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_7_0 = ctx.form.get("email")) == null ? null : tmp_7_0.touched) && ((tmp_7_0 = ctx.form.get("email")) == null ? null : tmp_7_0.invalid));
    \u0275\u0275advance(4);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(26, 27, "generic.first_name"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_9_0 = ctx.form.get("first_name")) == null ? null : tmp_9_0.touched) && ((tmp_9_0 = ctx.form.get("first_name")) == null ? null : tmp_9_0.invalid));
    \u0275\u0275advance(4);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(32, 29, "generic.last_name"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_11_0 = ctx.form.get("last_name")) == null ? null : tmp_11_0.touched) && ((tmp_11_0 = ctx.form.get("last_name")) == null ? null : tmp_11_0.invalid));
    \u0275\u0275advance(4);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(38, 31, "generic.password"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ((tmp_13_0 = ctx.form.get("password")) == null ? null : tmp_13_0.touched) && ((tmp_13_0 = ctx.form.get("password")) == null ? null : tmp_13_0.invalid));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx.form.invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(45, 33, "signup.title"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(43, _c1));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(51, 35, "signup.signin"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(57, 37, "signup.apple_signup"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(63, 39, "signup.google_signup"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(44, _c2));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(68, 41, "signup.skip_step"));
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
var SignupPage = _SignupPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignupPage, [{
    type: Component,
    args: [{ selector: "app-signup", imports: [
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
  <form (ngSubmit)="signUp()" [formGroup]="form">
    <!-- TITRE -->
    <ion-row class="ion-justify-content-center">
      <ion-col size="12" size-md="6" size-lg="4">
        <h1>{{ 'signup.title' | translate }}</h1>
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
        <!-- Message d'erreur pour le num\xE9ro de t\xE9l\xE9phone -->
        <ion-text
          color="danger"
          *ngIf="form.get('tel')?.touched && form.get('tel')?.invalid"
        >
          <small *ngIf="form.get('tel')?.errors?.['required']">
            {{ 'signup.phone_required' | translate }}
          </small>
          <small *ngIf="form.get('tel')?.errors?.['pattern']">
            {{ 'signup.phone_invalid' | translate }}
          </small>
        </ion-text>
      </ion-col>
    </ion-row>
    <!-- EMAIL_INPUT -->
    <ion-row class="ion-justify-content-center">
      <ion-col size="12" size-md="6" size-lg="4">
        <ion-item fill="outline" class="ion-no-padding">
          <ion-input
            placeholder="{{ 'generic.email' | translate }}"
            type="email"
            name="email"
            formControlName="email"
            required
          ></ion-input>
        </ion-item>
        <!-- Message d'erreur pour l'email -->
        <ion-text
          color="danger"
          *ngIf="form.get('email')?.touched && form.get('email')?.invalid"
        >
          <small *ngIf="form.get('email')?.errors?.['required']">
            {{ 'signup.email_required' | translate }}
          </small>
          <small *ngIf="form.get('email')?.errors?.['pattern']">
            {{ 'signup.email_invalid' | translate }}
          </small>
        </ion-text>
      </ion-col>
    </ion-row>
    <!-- FIRST_NAME_INPUT -->
    <ion-row class="ion-justify-content-center">
      <ion-col size="12" size-md="6" size-lg="4">
        <ion-item fill="outline" class="ion-no-padding">
          <ion-input
            placeholder="{{ 'generic.first_name' | translate }}"
            type="text"
            name="first_name"
            formControlName="first_name"
            required
          ></ion-input>
        </ion-item>
        <!-- Message d'erreur pour le pr\xE9nom -->
        <ion-text
          color="danger"
          *ngIf="form.get('first_name')?.touched && form.get('first_name')?.invalid"
        >
          <small *ngIf="form.get('first_name')?.errors?.['required']">
            {{ 'signup.first_name_required' | translate }}
          </small>
          <small *ngIf="form.get('first_name')?.errors?.['pattern']">
            {{ 'signup.no_special_characters' | translate }}
          </small>
        </ion-text>
      </ion-col>
    </ion-row>
    <!-- LAST_NAME_INPUT -->
    <ion-row class="ion-justify-content-center">
      <ion-col size="12" size-md="6" size-lg="4">
        <ion-item fill="outline" class="ion-no-padding">
          <ion-input
            placeholder="{{ 'generic.last_name' | translate }}"
            type="text"
            name="last_name"
            formControlName="last_name"
            required
          ></ion-input>
        </ion-item>
        <!-- Message d'erreur pour le nom de famille -->
        <ion-text
          color="danger"
          *ngIf="form.get('last_name')?.touched && form.get('last_name')?.invalid"
        >
          <small *ngIf="form.get('last_name')?.errors?.['required']">
            {{ 'signup.last_name_required' | translate }}
          </small>
          <small *ngIf="form.get('last_name')?.errors?.['pattern']">
            {{ 'signup.no_special_characters' | translate }}
          </small>
        </ion-text>
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
            <ion-input-password-toggle slot="end"></ion-input-password-toggle>
          </ion-input>
        </ion-item>
        <!-- Message d'erreur pour le mot de passe -->
        <ion-text
          color="danger"
          *ngIf="form.get('password')?.touched && form.get('password')?.invalid"
        >
          <small *ngIf="form.get('password')?.errors?.['required']">
            {{ 'signup.password_required' | translate }}
          </small>
          <small *ngIf="form.get('password')?.errors?.['minlength']">
            {{ 'signup.password_length' | translate }}
          </small>
        </ion-text>
      </ion-col>
    </ion-row>
    <!-- BOUTON_SIGNUP -->
    <ion-row class="ion-justify-content-center">
      <ion-col size="12" size-md="6" size-lg="4">
        <ion-button
          type="submit"
          expand="block"
          shape="round"
          [disabled]="form.invalid"
          class="ion-margin-top"
        >
          {{ 'signup.title' | translate }}
        </ion-button>
      </ion-col>
    </ion-row>
    <!-- SIGNIN_LINK -->
    <ion-row class="ion-justify-content-center ion-margin-top">
      <ion-col size="12" size-md="6" size-lg="4" class="ion-text-center">
        <ion-text>
          <a [routerLink]="['/signin']" replaceUrl="true"
            >{{ 'signup.signin' | translate }}</a
          >
        </ion-text>
      </ion-col>
    </ion-row>
    <!-- BOUTON_APPLE -->
    <ion-row class="ion-justify-content-center ion-padding-top">
      <ion-col size="12" size-md="6" size-lg="4">
        <ion-button
          expand="block"
          shape="round"
          color="light"
          (click)="signInWithSocialProvider('Apple')"
        >
          <ion-icon name="logo-apple" slot="start"></ion-icon>
          {{"signup.apple_signup" | translate}}
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
          (click)="signInWithSocialProvider('Google')"
        >
          <ion-icon name="logo-google" slot="start"></ion-icon>
          {{"signup.google_signup" | translate}}
        </ion-button>
      </ion-col>
    </ion-row>

    <!-- SKIP -->
    <ion-text color="medium" class="ion-text-center">
      <p>
        <u [routerLink]="['/map']">{{ 'signup.skip_step' | translate }}</u>
      </p>
    </ion-text>
  </form>
</ion-content>
` }]
  }], () => [{ type: TranslateService }, { type: ModalController }, { type: CountryService }, { type: AuthService }, { type: ToastService }, { type: PhoneUtilsService }, { type: RecaptchaService }, { type: LoadingController }], { phoneInput: [{
    type: ViewChild,
    args: ["phoneInput", { read: ElementRef, static: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignupPage, { className: "SignupPage", filePath: "src/app/pages/auth/signup/signup.page.ts", lineNumber: 59 });
})();
export {
  SignupPage
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wYWdlcy9hdXRoL3NpZ251cC9zaWdudXAucGFnZS50cyIsICJzcmMvYXBwL3BhZ2VzL2F1dGgvc2lnbnVwL3NpZ251cC5wYWdlLmh0bWwiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJ1xuaW1wb3J0IHtcbiAgRm9ybUNvbnRyb2wsXG4gIEZvcm1Hcm91cCxcbiAgRm9ybXNNb2R1bGUsXG4gIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gIFZhbGlkYXRvcnMsXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJ1xuaW1wb3J0IHtcbiAgSW9uQ29udGVudCxcbiAgSW9uSW5wdXQsXG4gIElvbkJ1dHRvbixcbiAgSW9uQ29sLFxuICBJb25JbnB1dFBhc3N3b3JkVG9nZ2xlLFxuICBJb25UZXh0LFxuICBJb25MYWJlbCxcbiAgSW9uSWNvbixcbiAgSW9uSXRlbSxcbiAgSW9uUm93LFxuICBMb2FkaW5nQ29udHJvbGxlcixcbiAgTW9kYWxDb250cm9sbGVyLFxufSBmcm9tICdAaW9uaWMvYW5ndWxhci9zdGFuZGFsb25lJ1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlLCBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSdcbmltcG9ydCB7IGZpbmFsaXplIH0gZnJvbSAncnhqcydcbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCB9IGZyb20gJ3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudCdcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy9leHRlcm5hbC9hdXRoLnNlcnZpY2UnXG5pbXBvcnQgeyBSb3V0ZXJMaW5rIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xuaW1wb3J0IHsgVG9hc3RTZXJ2aWNlLCBUb2FzdFR5cGUgfSBmcm9tICdzcmMvYXBwL3NlcnZpY2VzL3V0aWxzL3RvYXN0LnNlcnZpY2UnXG5pbXBvcnQgeyBDb3VudHJpZXNDb21wb25lbnQgfSBmcm9tICdzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWxzL2NvdW50cmllcy9jb3VudHJpZXMuY29tcG9uZW50J1xuaW1wb3J0IHsgQ291bnRyeSwgQ291bnRyeVNlcnZpY2UgfSBmcm9tICdzcmMvYXBwL3NlcnZpY2VzL3V0aWxzL2NvdW50cnkuc2VydmljZSdcbmltcG9ydCB7IGFkZEljb25zIH0gZnJvbSAnaW9uaWNvbnMnXG5pbXBvcnQgeyBsb2dvQXBwbGUsIGxvZ29Hb29nbGUgfSBmcm9tICdpb25pY29ucy9pY29ucydcbmltcG9ydCB7IFBob25lVXRpbHNTZXJ2aWNlIH0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy91dGlscy9waG9uZS5zZXJ2aWNlJ1xuaW1wb3J0IHsgUmVjYXB0Y2hhU2VydmljZSB9IGZyb20gJ3NyYy9hcHAvc2VydmljZXMvZXh0ZXJuYWwvcmVjYXB0Y2hhLnNlcnZpY2UnXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1zaWdudXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2lnbnVwLnBhZ2UuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NpZ251cC5wYWdlLnNjc3MnXSxcbiAgaW1wb3J0czogW1xuICAgIElvbkNvbnRlbnQsXG4gICAgSW9uSW5wdXQsXG4gICAgSW9uQ29sLFxuICAgIElvblRleHQsXG4gICAgSW9uUm93LFxuICAgIElvbklucHV0UGFzc3dvcmRUb2dnbGUsXG4gICAgSW9uSXRlbSxcbiAgICBJb25JY29uLFxuICAgIElvbkJ1dHRvbixcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBUcmFuc2xhdGVNb2R1bGUsXG4gICAgSGVhZGVyQ29tcG9uZW50LFxuICAgIFJvdXRlckxpbmssXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFNpZ251cFBhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKCdwaG9uZUlucHV0JywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgcGhvbmVJbnB1dCE6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD5cbiAgcHVibGljIGZvcm06IEZvcm1Hcm91cFxuICBwdWJsaWMgcGhvbmVDb2RlczogQ291bnRyeVtdID0gW11cbiAgcHVibGljIGN1cnJlbnRDb3VudHJ5OiBDb3VudHJ5IHwgbnVsbCA9IG51bGxcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBtb2RhbENvbnRyb2xsZXI6IE1vZGFsQ29udHJvbGxlcixcbiAgICBwcml2YXRlIGNvdW50cnlTZXJ2aWNlOiBDb3VudHJ5U2VydmljZSxcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIHRvYXN0U2VydmljZTogVG9hc3RTZXJ2aWNlLFxuICAgIHByaXZhdGUgcGhvbmVTZXJ2aWNlOiBQaG9uZVV0aWxzU2VydmljZSxcbiAgICBwcml2YXRlIHJlY2FwdGNoYVNlcnZpY2U6IFJlY2FwdGNoYVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBsb2FkaW5nQ3RybDogTG9hZGluZ0NvbnRyb2xsZXJcbiAgKSB7XG4gICAgdGhpcy5mb3JtID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgICBmaXJzdF9uYW1lOiBuZXcgRm9ybUNvbnRyb2woJycsIFtcbiAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICAgICAgVmFsaWRhdG9ycy5wYXR0ZXJuKFxuICAgICAgICAgIC9eW0EtWmEtelxcdTAwQzAtXFx1MDBGRl0rKD86Wy1cXHNdW0EtWmEtelxcdTAwQzAtXFx1MDBGRl0rKSpcXHMqJC9cbiAgICAgICAgKSxcbiAgICAgIF0pLFxuICAgICAgbGFzdF9uYW1lOiBuZXcgRm9ybUNvbnRyb2woJycsIFtcbiAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICAgICAgVmFsaWRhdG9ycy5wYXR0ZXJuKFxuICAgICAgICAgIC9eW0EtWmEtelxcdTAwQzAtXFx1MDBGRl0rKD86Wy1cXHNdW0EtWmEtelxcdTAwQzAtXFx1MDBGRl0rKSpcXHMqJC9cbiAgICAgICAgKSxcbiAgICAgIF0pLFxuICAgICAgZW1haWw6IG5ldyBGb3JtQ29udHJvbCgnJywgW1xuICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxuICAgICAgICBWYWxpZGF0b3JzLnBhdHRlcm4oJ15bYS16QS1aMC05Ll8lKy1dK0BbYS16QS1aMC05Li1dK1xcXFwuW2EtekEtWl17Mix9JCcpLFxuICAgICAgXSksXG4gICAgICB0ZWw6IG5ldyBGb3JtQ29udHJvbCgnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdKSxcbiAgICAgIHBhc3N3b3JkOiBuZXcgRm9ybUNvbnRyb2woJycsIFtcbiAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICAgICAgVmFsaWRhdG9ycy5taW5MZW5ndGgoNiksXG4gICAgICAgIFZhbGlkYXRvcnMucGF0dGVybigvXig/PS4qWzAtOV0pLiokLyksXG4gICAgICBdKSxcbiAgICB9KVxuXG4gICAgYWRkSWNvbnMoeyBsb2dvR29vZ2xlLCBsb2dvQXBwbGUgfSlcbiAgfVxuXG4gIGFzeW5jIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IGNvdW50cmllcyA9IGF3YWl0IHRoaXMuY291bnRyeVNlcnZpY2UuZ2V0Q291bnRyaWVzKClcbiAgICB0aGlzLmN1cnJlbnRDb3VudHJ5ID1cbiAgICAgIChjb3VudHJpZXMgYXMgQ291bnRyeVtdKS5maW5kKCh4OiBDb3VudHJ5KSA9PiB4LmNvZGUgPT09ICdGUicpIHx8IG51bGxcblxuICAgIGlmICh0aGlzLmN1cnJlbnRDb3VudHJ5KSB7XG4gICAgICBjb25zdCBwbGFjZUhvbGRlciA9IGF3YWl0IHRoaXMucGhvbmVTZXJ2aWNlLmdldFBob25lTnVtYmVyUGF0dGVybihcbiAgICAgICAgdGhpcy5jdXJyZW50Q291bnRyeVxuICAgICAgKVxuICAgICAgdGhpcy5waG9uZUlucHV0Lm5hdGl2ZUVsZW1lbnQucGxhY2Vob2xkZXIgPSBwbGFjZUhvbGRlclxuICAgIH1cbiAgICBhd2FpdCB0aGlzLnJlY2FwdGNoYVNlcnZpY2UubG9hZFJlY2FwdGNoYSgpXG4gIH1cblxuICBpb25WaWV3V2lsbExlYXZlKCkge1xuICAgIHRoaXMucmVjYXB0Y2hhU2VydmljZS51bmxvYWRSZWNhcHRjaGEoKVxuICB9XG5cbiAgcHVibGljIGFzeW5jIG9wZW5Db3VudHJ5UGFnZSgpIHtcbiAgICBjb25zdCBtb2RhbCA9IGF3YWl0IHRoaXMubW9kYWxDb250cm9sbGVyLmNyZWF0ZSh7XG4gICAgICBjb21wb25lbnQ6IENvdW50cmllc0NvbXBvbmVudCxcbiAgICAgIGNvbXBvbmVudFByb3BzOiB7IGN1cnJlbnRQb3NpdGlvbjogJ0ZSJyB9LFxuICAgICAgaW5pdGlhbEJyZWFrcG9pbnQ6IDAuNzUsXG4gICAgICBicmVha3BvaW50czogWzAsIDAuNzVdLFxuICAgIH0pXG5cbiAgICBtb2RhbC5vbkRpZERpc21pc3MoKS50aGVuKGFzeW5jIChkYXRhKSA9PiB7XG4gICAgICBpZiAoZGF0YT8uZGF0YT8uc2VsZWN0ZWRDb3VudHJ5KSB7XG4gICAgICAgIHRoaXMuY3VycmVudENvdW50cnkgPSBkYXRhLmRhdGEuc2VsZWN0ZWRDb3VudHJ5XG4gICAgICAgIHRoaXMuZm9ybS5jb250cm9sc1sndGVsJ10uc2V0VmFsdWUoJycpXG5cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudENvdW50cnkpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcGxhY2VIb2xkZXIgPSBhd2FpdCB0aGlzLnBob25lU2VydmljZS5nZXRQaG9uZU51bWJlclBhdHRlcm4oXG4gICAgICAgICAgICAgIHRoaXMuY3VycmVudENvdW50cnlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIHRoaXMucGhvbmVJbnB1dC5uYXRpdmVFbGVtZW50LnBsYWNlaG9sZGVyID0gcGxhY2VIb2xkZXJcbiAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignQXVjdW4gcGxhY2Vob2xkZXIgdHJvdXbDqScpXG4gICAgICAgICAgICB0aGlzLnBob25lSW5wdXQubmF0aXZlRWxlbWVudC5wbGFjZWhvbGRlciA9XG4gICAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5pbnN0YW50KCdnZW5lcmljLnBob25lX251bWJlcicpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIGF3YWl0IG1vZGFsLnByZXNlbnQoKVxuICB9XG5cbiAgcHVibGljIGNoYW5nZVBob25lTnVtYmVyKGV2ZW50OiBFdmVudCkge1xuICAgIGNvbnN0IGlucHV0RWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IGlucHV0RWxlbWVudC52YWx1ZVxuXG4gICAgaWYgKHRoaXMuY3VycmVudENvdW50cnkpIHtcbiAgICAgIGNvbnN0IG51bU91dHB1dCA9IHRoaXMucGhvbmVTZXJ2aWNlLmZvcm1hdFBob25lTnVtYmVyKFxuICAgICAgICBpbnB1dFZhbHVlLFxuICAgICAgICB0aGlzLmN1cnJlbnRDb3VudHJ5XG4gICAgICApXG4gICAgICBpbnB1dEVsZW1lbnQudmFsdWUgPSBpbnB1dFZhbHVlLnN0YXJ0c1dpdGgoJzAnKVxuICAgICAgICA/IGlucHV0VmFsdWUuc3Vic3RyaW5nKDEpXG4gICAgICAgIDogbnVtT3V0cHV0XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgc2lnbkluV2l0aFNvY2lhbFByb3ZpZGVyKHByb3ZpZGVyOiAnQXBwbGUnIHwgJ0dvb2dsZScpIHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLnNpZ25JbldpdGhTb2NpYWxQcm92aWRlcihwcm92aWRlcilcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBzaWduVXAoKSB7XG4gICAgaWYgKHRoaXMuYXJlRm9ybUZpZWxkc0VtcHR5KCkpIHtcbiAgICAgIHRoaXMudG9hc3RTZXJ2aWNlLmNyZWF0ZVdpdGhKdXN0TWVzc2FnZShcbiAgICAgICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQoJ2Vycm9yLm1pc3NpbmdfY3JlZGVudGlhbHMnKSxcbiAgICAgICAgVG9hc3RUeXBlLkVycm9yXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBsb2FkaW5nID0gYXdhaXQgdGhpcy5sb2FkaW5nQ3RybC5jcmVhdGUoe1xuICAgICAgbWVzc2FnZTogdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQoJ2dlbmVyaWMubG9hZGluZycpLFxuICAgIH0pXG4gICAgYXdhaXQgbG9hZGluZy5wcmVzZW50KClcblxuICAgIGNvbnN0IHVzZXIgPSB7XG4gICAgICBuYW1lOiBgJHt0aGlzLmZvcm0udmFsdWUuZmlyc3RfbmFtZS50cmltKCl9ICR7dGhpcy5mb3JtLnZhbHVlLmxhc3RfbmFtZS50cmltKCl9YCxcbiAgICAgIGVtYWlsOiB0aGlzLmZvcm0udmFsdWUuZW1haWwsXG4gICAgICBwaG9uZTpcbiAgICAgICAgdGhpcy5jdXJyZW50Q291bnRyeT8uZGlhbF9jb2RlICtcbiAgICAgICAgdGhpcy5mb3JtLnZhbHVlLnRlbC5yZXBsYWNlKC9bKCksXFwtLFxcc10vZywgJycpLnJlcGxhY2UoL14wKy8sICcnKSxcbiAgICAgIHBhc3N3b3JkOiB0aGlzLmZvcm0udmFsdWUucGFzc3dvcmQsXG4gICAgfVxuXG4gICAgdGhpcy5hdXRoU2VydmljZS5zaWduVXAodXNlcikuZmluYWxseShhc3luYyAoKSA9PiB7XG4gICAgICBhd2FpdCBsb2FkaW5nLmRpc21pc3MoKVxuICAgIH0pXG4gIH1cblxuICBwcml2YXRlIGFyZUZvcm1GaWVsZHNFbXB0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIShcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snZmlyc3RfbmFtZSddLnZhbHVlLnRyaW0oKSAmJlxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydsYXN0X25hbWUnXS52YWx1ZS50cmltKCkgJiZcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1snZW1haWwnXS52YWx1ZS50cmltKCkgJiZcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1sndGVsJ10udmFsdWUudHJpbSgpICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ10udmFsdWUudHJpbSgpXG4gICAgKVxuICB9XG59XG4iLCAiPGFwcC1oZWFkZXI+PC9hcHAtaGVhZGVyPlxuPGlvbi1jb250ZW50IGNsYXNzPVwiaW9uLXBhZGRpbmdcIj5cbiAgPGZvcm0gKG5nU3VibWl0KT1cInNpZ25VcCgpXCIgW2Zvcm1Hcm91cF09XCJmb3JtXCI+XG4gICAgPCEtLSBUSVRSRSAtLT5cbiAgICA8aW9uLXJvdyBjbGFzcz1cImlvbi1qdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICA8aW9uLWNvbCBzaXplPVwiMTJcIiBzaXplLW1kPVwiNlwiIHNpemUtbGc9XCI0XCI+XG4gICAgICAgIDxoMT57eyAnc2lnbnVwLnRpdGxlJyB8IHRyYW5zbGF0ZSB9fTwvaDE+XG4gICAgICA8L2lvbi1jb2w+XG4gICAgPC9pb24tcm93PlxuICAgIDwhLS0gUEhPTkVfSU5QVVQgLS0+XG4gICAgPGlvbi1yb3cgY2xhc3M9XCJpb24tanVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgPGlvbi1jb2wgc2l6ZT1cIjEyXCIgc2l6ZS1tZD1cIjZcIiBzaXplLWxnPVwiNFwiPlxuICAgICAgICA8aW9uLWl0ZW0gY2xhc3M9XCJpb24tbm8tcGFkZGluZ1wiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwiZWNsLXBob25lX19jb250YWluZXJcIlxuICAgICAgICAgICAgKm5nSWY9XCJjdXJyZW50Q291bnRyeVwiXG4gICAgICAgICAgICAoY2xpY2spPVwib3BlbkNvdW50cnlQYWdlKClcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbWcgW3NyY109XCJjdXJyZW50Q291bnRyeS5pbWdcIiAvPlxuICAgICAgICAgICAgPHNwYW4+e3sgY3VycmVudENvdW50cnkuZGlhbF9jb2RlIH19PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxpb24taW5wdXRcbiAgICAgICAgICAgICNwaG9uZUlucHV0XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cInt7ICdnZW5lcmljLnBob25lX251bWJlcicgfCB0cmFuc2xhdGUgfX1cIlxuICAgICAgICAgICAgdHlwZT1cInRlbFwiXG4gICAgICAgICAgICBpbnB1dG1vZGU9XCJ0ZWxcIlxuICAgICAgICAgICAgbmFtZT1cInRlbFwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwidGVsXCJcbiAgICAgICAgICAgIChpb25DaGFuZ2UpPVwiY2hhbmdlUGhvbmVOdW1iZXIoJGV2ZW50KVwiXG4gICAgICAgICAgPjwvaW9uLWlucHV0PlxuICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgICA8IS0tIE1lc3NhZ2UgZCdlcnJldXIgcG91ciBsZSBudW3DqXJvIGRlIHTDqWzDqXBob25lIC0tPlxuICAgICAgICA8aW9uLXRleHRcbiAgICAgICAgICBjb2xvcj1cImRhbmdlclwiXG4gICAgICAgICAgKm5nSWY9XCJmb3JtLmdldCgndGVsJyk/LnRvdWNoZWQgJiYgZm9ybS5nZXQoJ3RlbCcpPy5pbnZhbGlkXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzbWFsbCAqbmdJZj1cImZvcm0uZ2V0KCd0ZWwnKT8uZXJyb3JzPy5bJ3JlcXVpcmVkJ11cIj5cbiAgICAgICAgICAgIHt7ICdzaWdudXAucGhvbmVfcmVxdWlyZWQnIHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICA8c21hbGwgKm5nSWY9XCJmb3JtLmdldCgndGVsJyk/LmVycm9ycz8uWydwYXR0ZXJuJ11cIj5cbiAgICAgICAgICAgIHt7ICdzaWdudXAucGhvbmVfaW52YWxpZCcgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICA8L2lvbi10ZXh0PlxuICAgICAgPC9pb24tY29sPlxuICAgIDwvaW9uLXJvdz5cbiAgICA8IS0tIEVNQUlMX0lOUFVUIC0tPlxuICAgIDxpb24tcm93IGNsYXNzPVwiaW9uLWp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgIDxpb24tY29sIHNpemU9XCIxMlwiIHNpemUtbWQ9XCI2XCIgc2l6ZS1sZz1cIjRcIj5cbiAgICAgICAgPGlvbi1pdGVtIGZpbGw9XCJvdXRsaW5lXCIgY2xhc3M9XCJpb24tbm8tcGFkZGluZ1wiPlxuICAgICAgICAgIDxpb24taW5wdXRcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3sgJ2dlbmVyaWMuZW1haWwnIHwgdHJhbnNsYXRlIH19XCJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICA+PC9pb24taW5wdXQ+XG4gICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICAgIDwhLS0gTWVzc2FnZSBkJ2VycmV1ciBwb3VyIGwnZW1haWwgLS0+XG4gICAgICAgIDxpb24tdGV4dFxuICAgICAgICAgIGNvbG9yPVwiZGFuZ2VyXCJcbiAgICAgICAgICAqbmdJZj1cImZvcm0uZ2V0KCdlbWFpbCcpPy50b3VjaGVkICYmIGZvcm0uZ2V0KCdlbWFpbCcpPy5pbnZhbGlkXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzbWFsbCAqbmdJZj1cImZvcm0uZ2V0KCdlbWFpbCcpPy5lcnJvcnM/LlsncmVxdWlyZWQnXVwiPlxuICAgICAgICAgICAge3sgJ3NpZ251cC5lbWFpbF9yZXF1aXJlZCcgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgIDxzbWFsbCAqbmdJZj1cImZvcm0uZ2V0KCdlbWFpbCcpPy5lcnJvcnM/LlsncGF0dGVybiddXCI+XG4gICAgICAgICAgICB7eyAnc2lnbnVwLmVtYWlsX2ludmFsaWQnIHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgPC9pb24tdGV4dD5cbiAgICAgIDwvaW9uLWNvbD5cbiAgICA8L2lvbi1yb3c+XG4gICAgPCEtLSBGSVJTVF9OQU1FX0lOUFVUIC0tPlxuICAgIDxpb24tcm93IGNsYXNzPVwiaW9uLWp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgIDxpb24tY29sIHNpemU9XCIxMlwiIHNpemUtbWQ9XCI2XCIgc2l6ZS1sZz1cIjRcIj5cbiAgICAgICAgPGlvbi1pdGVtIGZpbGw9XCJvdXRsaW5lXCIgY2xhc3M9XCJpb24tbm8tcGFkZGluZ1wiPlxuICAgICAgICAgIDxpb24taW5wdXRcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3sgJ2dlbmVyaWMuZmlyc3RfbmFtZScgfCB0cmFuc2xhdGUgfX1cIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgbmFtZT1cImZpcnN0X25hbWVcIlxuICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiZmlyc3RfbmFtZVwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgID48L2lvbi1pbnB1dD5cbiAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgPCEtLSBNZXNzYWdlIGQnZXJyZXVyIHBvdXIgbGUgcHLDqW5vbSAtLT5cbiAgICAgICAgPGlvbi10ZXh0XG4gICAgICAgICAgY29sb3I9XCJkYW5nZXJcIlxuICAgICAgICAgICpuZ0lmPVwiZm9ybS5nZXQoJ2ZpcnN0X25hbWUnKT8udG91Y2hlZCAmJiBmb3JtLmdldCgnZmlyc3RfbmFtZScpPy5pbnZhbGlkXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzbWFsbCAqbmdJZj1cImZvcm0uZ2V0KCdmaXJzdF9uYW1lJyk/LmVycm9ycz8uWydyZXF1aXJlZCddXCI+XG4gICAgICAgICAgICB7eyAnc2lnbnVwLmZpcnN0X25hbWVfcmVxdWlyZWQnIHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICA8c21hbGwgKm5nSWY9XCJmb3JtLmdldCgnZmlyc3RfbmFtZScpPy5lcnJvcnM/LlsncGF0dGVybiddXCI+XG4gICAgICAgICAgICB7eyAnc2lnbnVwLm5vX3NwZWNpYWxfY2hhcmFjdGVycycgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICA8L2lvbi10ZXh0PlxuICAgICAgPC9pb24tY29sPlxuICAgIDwvaW9uLXJvdz5cbiAgICA8IS0tIExBU1RfTkFNRV9JTlBVVCAtLT5cbiAgICA8aW9uLXJvdyBjbGFzcz1cImlvbi1qdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICA8aW9uLWNvbCBzaXplPVwiMTJcIiBzaXplLW1kPVwiNlwiIHNpemUtbGc9XCI0XCI+XG4gICAgICAgIDxpb24taXRlbSBmaWxsPVwib3V0bGluZVwiIGNsYXNzPVwiaW9uLW5vLXBhZGRpbmdcIj5cbiAgICAgICAgICA8aW9uLWlucHV0XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cInt7ICdnZW5lcmljLmxhc3RfbmFtZScgfCB0cmFuc2xhdGUgfX1cIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgbmFtZT1cImxhc3RfbmFtZVwiXG4gICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJsYXN0X25hbWVcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICA+PC9pb24taW5wdXQ+XG4gICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICAgIDwhLS0gTWVzc2FnZSBkJ2VycmV1ciBwb3VyIGxlIG5vbSBkZSBmYW1pbGxlIC0tPlxuICAgICAgICA8aW9uLXRleHRcbiAgICAgICAgICBjb2xvcj1cImRhbmdlclwiXG4gICAgICAgICAgKm5nSWY9XCJmb3JtLmdldCgnbGFzdF9uYW1lJyk/LnRvdWNoZWQgJiYgZm9ybS5nZXQoJ2xhc3RfbmFtZScpPy5pbnZhbGlkXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzbWFsbCAqbmdJZj1cImZvcm0uZ2V0KCdsYXN0X25hbWUnKT8uZXJyb3JzPy5bJ3JlcXVpcmVkJ11cIj5cbiAgICAgICAgICAgIHt7ICdzaWdudXAubGFzdF9uYW1lX3JlcXVpcmVkJyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgPHNtYWxsICpuZ0lmPVwiZm9ybS5nZXQoJ2xhc3RfbmFtZScpPy5lcnJvcnM/LlsncGF0dGVybiddXCI+XG4gICAgICAgICAgICB7eyAnc2lnbnVwLm5vX3NwZWNpYWxfY2hhcmFjdGVycycgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICA8L2lvbi10ZXh0PlxuICAgICAgPC9pb24tY29sPlxuICAgIDwvaW9uLXJvdz5cbiAgICA8IS0tIFBBU1NXT1JEX0lOUFVUIC0tPlxuICAgIDxpb24tcm93IGNsYXNzPVwiaW9uLWp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgIDxpb24tY29sIHNpemU9XCIxMlwiIHNpemUtbWQ9XCI2XCIgc2l6ZS1sZz1cIjRcIj5cbiAgICAgICAgPGlvbi1pdGVtIGZpbGw9XCJvdXRsaW5lXCIgY2xhc3M9XCJpb24tbm8tcGFkZGluZ1wiPlxuICAgICAgICAgIDxpb24taW5wdXRcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3sgJ2dlbmVyaWMucGFzc3dvcmQnIHwgdHJhbnNsYXRlIH19XCJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW9uLWlucHV0LXBhc3N3b3JkLXRvZ2dsZSBzbG90PVwiZW5kXCI+PC9pb24taW5wdXQtcGFzc3dvcmQtdG9nZ2xlPlxuICAgICAgICAgIDwvaW9uLWlucHV0PlxuICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgICA8IS0tIE1lc3NhZ2UgZCdlcnJldXIgcG91ciBsZSBtb3QgZGUgcGFzc2UgLS0+XG4gICAgICAgIDxpb24tdGV4dFxuICAgICAgICAgIGNvbG9yPVwiZGFuZ2VyXCJcbiAgICAgICAgICAqbmdJZj1cImZvcm0uZ2V0KCdwYXNzd29yZCcpPy50b3VjaGVkICYmIGZvcm0uZ2V0KCdwYXNzd29yZCcpPy5pbnZhbGlkXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzbWFsbCAqbmdJZj1cImZvcm0uZ2V0KCdwYXNzd29yZCcpPy5lcnJvcnM/LlsncmVxdWlyZWQnXVwiPlxuICAgICAgICAgICAge3sgJ3NpZ251cC5wYXNzd29yZF9yZXF1aXJlZCcgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgIDxzbWFsbCAqbmdJZj1cImZvcm0uZ2V0KCdwYXNzd29yZCcpPy5lcnJvcnM/LlsnbWlubGVuZ3RoJ11cIj5cbiAgICAgICAgICAgIHt7ICdzaWdudXAucGFzc3dvcmRfbGVuZ3RoJyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgIDwvaW9uLXRleHQ+XG4gICAgICA8L2lvbi1jb2w+XG4gICAgPC9pb24tcm93PlxuICAgIDwhLS0gQk9VVE9OX1NJR05VUCAtLT5cbiAgICA8aW9uLXJvdyBjbGFzcz1cImlvbi1qdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICA8aW9uLWNvbCBzaXplPVwiMTJcIiBzaXplLW1kPVwiNlwiIHNpemUtbGc9XCI0XCI+XG4gICAgICAgIDxpb24tYnV0dG9uXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgZXhwYW5kPVwiYmxvY2tcIlxuICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxuICAgICAgICAgIFtkaXNhYmxlZF09XCJmb3JtLmludmFsaWRcIlxuICAgICAgICAgIGNsYXNzPVwiaW9uLW1hcmdpbi10b3BcIlxuICAgICAgICA+XG4gICAgICAgICAge3sgJ3NpZ251cC50aXRsZScgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgPC9pb24tYnV0dG9uPlxuICAgICAgPC9pb24tY29sPlxuICAgIDwvaW9uLXJvdz5cbiAgICA8IS0tIFNJR05JTl9MSU5LIC0tPlxuICAgIDxpb24tcm93IGNsYXNzPVwiaW9uLWp1c3RpZnktY29udGVudC1jZW50ZXIgaW9uLW1hcmdpbi10b3BcIj5cbiAgICAgIDxpb24tY29sIHNpemU9XCIxMlwiIHNpemUtbWQ9XCI2XCIgc2l6ZS1sZz1cIjRcIiBjbGFzcz1cImlvbi10ZXh0LWNlbnRlclwiPlxuICAgICAgICA8aW9uLXRleHQ+XG4gICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycvc2lnbmluJ11cIiByZXBsYWNlVXJsPVwidHJ1ZVwiXG4gICAgICAgICAgICA+e3sgJ3NpZ251cC5zaWduaW4nIHwgdHJhbnNsYXRlIH19PC9hXG4gICAgICAgICAgPlxuICAgICAgICA8L2lvbi10ZXh0PlxuICAgICAgPC9pb24tY29sPlxuICAgIDwvaW9uLXJvdz5cbiAgICA8IS0tIEJPVVRPTl9BUFBMRSAtLT5cbiAgICA8aW9uLXJvdyBjbGFzcz1cImlvbi1qdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGlvbi1wYWRkaW5nLXRvcFwiPlxuICAgICAgPGlvbi1jb2wgc2l6ZT1cIjEyXCIgc2l6ZS1tZD1cIjZcIiBzaXplLWxnPVwiNFwiPlxuICAgICAgICA8aW9uLWJ1dHRvblxuICAgICAgICAgIGV4cGFuZD1cImJsb2NrXCJcbiAgICAgICAgICBzaGFwZT1cInJvdW5kXCJcbiAgICAgICAgICBjb2xvcj1cImxpZ2h0XCJcbiAgICAgICAgICAoY2xpY2spPVwic2lnbkluV2l0aFNvY2lhbFByb3ZpZGVyKCdBcHBsZScpXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwibG9nby1hcHBsZVwiIHNsb3Q9XCJzdGFydFwiPjwvaW9uLWljb24+XG4gICAgICAgICAge3tcInNpZ251cC5hcHBsZV9zaWdudXBcIiB8IHRyYW5zbGF0ZX19XG4gICAgICAgIDwvaW9uLWJ1dHRvbj5cbiAgICAgIDwvaW9uLWNvbD5cbiAgICA8L2lvbi1yb3c+XG4gICAgPCEtLSBCT1VUT05fR09PR0xFIC0tPlxuICAgIDxpb24tcm93IGNsYXNzPVwiaW9uLWp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgIDxpb24tY29sIHNpemU9XCIxMlwiIHNpemUtbWQ9XCI2XCIgc2l6ZS1sZz1cIjRcIj5cbiAgICAgICAgPGlvbi1idXR0b25cbiAgICAgICAgICBleHBhbmQ9XCJibG9ja1wiXG4gICAgICAgICAgc2hhcGU9XCJyb3VuZFwiXG4gICAgICAgICAgY29sb3I9XCJsaWdodFwiXG4gICAgICAgICAgKGNsaWNrKT1cInNpZ25JbldpdGhTb2NpYWxQcm92aWRlcignR29vZ2xlJylcIlxuICAgICAgICA+XG4gICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJsb2dvLWdvb2dsZVwiIHNsb3Q9XCJzdGFydFwiPjwvaW9uLWljb24+XG4gICAgICAgICAge3tcInNpZ251cC5nb29nbGVfc2lnbnVwXCIgfCB0cmFuc2xhdGV9fVxuICAgICAgICA8L2lvbi1idXR0b24+XG4gICAgICA8L2lvbi1jb2w+XG4gICAgPC9pb24tcm93PlxuXG4gICAgPCEtLSBTS0lQIC0tPlxuICAgIDxpb24tdGV4dCBjb2xvcj1cIm1lZGl1bVwiIGNsYXNzPVwiaW9uLXRleHQtY2VudGVyXCI+XG4gICAgICA8cD5cbiAgICAgICAgPHUgW3JvdXRlckxpbmtdPVwiWycvbWFwJ11cIj57eyAnc2lnbnVwLnNraXBfc3RlcCcgfCB0cmFuc2xhdGUgfX08L3U+XG4gICAgICA8L3A+XG4gICAgPC9pb24tdGV4dD5cbiAgPC9mb3JtPlxuPC9pb24tY29udGVudD5cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYVUsSUFBQSx5QkFBQSxHQUFBLE9BQUEsRUFBQTtBQUdFLElBQUEscUJBQUEsU0FBQSxTQUFBLGtEQUFBO0FBQUEsTUFBQSx3QkFBQSxHQUFBO0FBQUEsWUFBQSxTQUFBLHdCQUFBO0FBQUEsYUFBQSxzQkFBUyxPQUFBLGdCQUFBLENBQWlCO0lBQUEsQ0FBQTtBQUUxQixJQUFBLG9CQUFBLEdBQUEsT0FBQSxFQUFBO0FBQ0EsSUFBQSx5QkFBQSxHQUFBLE1BQUE7QUFBTSxJQUFBLGlCQUFBLENBQUE7QUFBOEIsSUFBQSx1QkFBQSxFQUFPOzs7O0FBRHRDLElBQUEsb0JBQUE7QUFBQSxJQUFBLHFCQUFBLE9BQUEsT0FBQSxlQUFBLEtBQUEsdUJBQUE7QUFDQyxJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLDRCQUFBLE9BQUEsZUFBQSxTQUFBOzs7OztBQWtCUixJQUFBLHlCQUFBLEdBQUEsT0FBQTtBQUNFLElBQUEsaUJBQUEsQ0FBQTs7QUFDRixJQUFBLHVCQUFBOzs7QUFERSxJQUFBLG9CQUFBO0FBQUEsSUFBQSw2QkFBQSxLQUFBLHNCQUFBLEdBQUEsR0FBQSx1QkFBQSxHQUFBLEdBQUE7Ozs7O0FBRUYsSUFBQSx5QkFBQSxHQUFBLE9BQUE7QUFDRSxJQUFBLGlCQUFBLENBQUE7O0FBQ0YsSUFBQSx1QkFBQTs7O0FBREUsSUFBQSxvQkFBQTtBQUFBLElBQUEsNkJBQUEsS0FBQSxzQkFBQSxHQUFBLEdBQUEsc0JBQUEsR0FBQSxHQUFBOzs7OztBQVJKLElBQUEseUJBQUEsR0FBQSxZQUFBLEVBQUE7QUFJRSxJQUFBLHFCQUFBLEdBQUEseUNBQUEsR0FBQSxHQUFBLFNBQUEsRUFBQSxFQUFxRCxHQUFBLHlDQUFBLEdBQUEsR0FBQSxTQUFBLEVBQUE7QUFNdkQsSUFBQSx1QkFBQTs7Ozs7O0FBTlUsSUFBQSxvQkFBQTtBQUFBLElBQUEscUJBQUEsU0FBQSxVQUFBLE9BQUEsS0FBQSxJQUFBLEtBQUEsTUFBQSxPQUFBLE9BQUEsUUFBQSxVQUFBLE9BQUEsT0FBQSxRQUFBLE9BQUEsVUFBQSxDQUFBO0FBR0EsSUFBQSxvQkFBQTtBQUFBLElBQUEscUJBQUEsU0FBQSxVQUFBLE9BQUEsS0FBQSxJQUFBLEtBQUEsTUFBQSxPQUFBLE9BQUEsUUFBQSxVQUFBLE9BQUEsT0FBQSxRQUFBLE9BQUEsU0FBQSxDQUFBOzs7OztBQXVCUixJQUFBLHlCQUFBLEdBQUEsT0FBQTtBQUNFLElBQUEsaUJBQUEsQ0FBQTs7QUFDRixJQUFBLHVCQUFBOzs7QUFERSxJQUFBLG9CQUFBO0FBQUEsSUFBQSw2QkFBQSxLQUFBLHNCQUFBLEdBQUEsR0FBQSx1QkFBQSxHQUFBLEdBQUE7Ozs7O0FBRUYsSUFBQSx5QkFBQSxHQUFBLE9BQUE7QUFDRSxJQUFBLGlCQUFBLENBQUE7O0FBQ0YsSUFBQSx1QkFBQTs7O0FBREUsSUFBQSxvQkFBQTtBQUFBLElBQUEsNkJBQUEsS0FBQSxzQkFBQSxHQUFBLEdBQUEsc0JBQUEsR0FBQSxHQUFBOzs7OztBQVJKLElBQUEseUJBQUEsR0FBQSxZQUFBLEVBQUE7QUFJRSxJQUFBLHFCQUFBLEdBQUEseUNBQUEsR0FBQSxHQUFBLFNBQUEsRUFBQSxFQUF1RCxHQUFBLHlDQUFBLEdBQUEsR0FBQSxTQUFBLEVBQUE7QUFNekQsSUFBQSx1QkFBQTs7Ozs7O0FBTlUsSUFBQSxvQkFBQTtBQUFBLElBQUEscUJBQUEsU0FBQSxVQUFBLE9BQUEsS0FBQSxJQUFBLE9BQUEsTUFBQSxPQUFBLE9BQUEsUUFBQSxVQUFBLE9BQUEsT0FBQSxRQUFBLE9BQUEsVUFBQSxDQUFBO0FBR0EsSUFBQSxvQkFBQTtBQUFBLElBQUEscUJBQUEsU0FBQSxVQUFBLE9BQUEsS0FBQSxJQUFBLE9BQUEsTUFBQSxPQUFBLE9BQUEsUUFBQSxVQUFBLE9BQUEsT0FBQSxRQUFBLE9BQUEsU0FBQSxDQUFBOzs7OztBQXVCUixJQUFBLHlCQUFBLEdBQUEsT0FBQTtBQUNFLElBQUEsaUJBQUEsQ0FBQTs7QUFDRixJQUFBLHVCQUFBOzs7QUFERSxJQUFBLG9CQUFBO0FBQUEsSUFBQSw2QkFBQSxLQUFBLHNCQUFBLEdBQUEsR0FBQSw0QkFBQSxHQUFBLEdBQUE7Ozs7O0FBRUYsSUFBQSx5QkFBQSxHQUFBLE9BQUE7QUFDRSxJQUFBLGlCQUFBLENBQUE7O0FBQ0YsSUFBQSx1QkFBQTs7O0FBREUsSUFBQSxvQkFBQTtBQUFBLElBQUEsNkJBQUEsS0FBQSxzQkFBQSxHQUFBLEdBQUEsOEJBQUEsR0FBQSxHQUFBOzs7OztBQVJKLElBQUEseUJBQUEsR0FBQSxZQUFBLEVBQUE7QUFJRSxJQUFBLHFCQUFBLEdBQUEseUNBQUEsR0FBQSxHQUFBLFNBQUEsRUFBQSxFQUE0RCxHQUFBLHlDQUFBLEdBQUEsR0FBQSxTQUFBLEVBQUE7QUFNOUQsSUFBQSx1QkFBQTs7Ozs7O0FBTlUsSUFBQSxvQkFBQTtBQUFBLElBQUEscUJBQUEsU0FBQSxVQUFBLE9BQUEsS0FBQSxJQUFBLFlBQUEsTUFBQSxPQUFBLE9BQUEsUUFBQSxVQUFBLE9BQUEsT0FBQSxRQUFBLE9BQUEsVUFBQSxDQUFBO0FBR0EsSUFBQSxvQkFBQTtBQUFBLElBQUEscUJBQUEsU0FBQSxVQUFBLE9BQUEsS0FBQSxJQUFBLFlBQUEsTUFBQSxPQUFBLE9BQUEsUUFBQSxVQUFBLE9BQUEsT0FBQSxRQUFBLE9BQUEsU0FBQSxDQUFBOzs7OztBQXVCUixJQUFBLHlCQUFBLEdBQUEsT0FBQTtBQUNFLElBQUEsaUJBQUEsQ0FBQTs7QUFDRixJQUFBLHVCQUFBOzs7QUFERSxJQUFBLG9CQUFBO0FBQUEsSUFBQSw2QkFBQSxLQUFBLHNCQUFBLEdBQUEsR0FBQSwyQkFBQSxHQUFBLEdBQUE7Ozs7O0FBRUYsSUFBQSx5QkFBQSxHQUFBLE9BQUE7QUFDRSxJQUFBLGlCQUFBLENBQUE7O0FBQ0YsSUFBQSx1QkFBQTs7O0FBREUsSUFBQSxvQkFBQTtBQUFBLElBQUEsNkJBQUEsS0FBQSxzQkFBQSxHQUFBLEdBQUEsOEJBQUEsR0FBQSxHQUFBOzs7OztBQVJKLElBQUEseUJBQUEsR0FBQSxZQUFBLEVBQUE7QUFJRSxJQUFBLHFCQUFBLEdBQUEseUNBQUEsR0FBQSxHQUFBLFNBQUEsRUFBQSxFQUEyRCxHQUFBLHlDQUFBLEdBQUEsR0FBQSxTQUFBLEVBQUE7QUFNN0QsSUFBQSx1QkFBQTs7Ozs7O0FBTlUsSUFBQSxvQkFBQTtBQUFBLElBQUEscUJBQUEsU0FBQSxVQUFBLE9BQUEsS0FBQSxJQUFBLFdBQUEsTUFBQSxPQUFBLE9BQUEsUUFBQSxVQUFBLE9BQUEsT0FBQSxRQUFBLE9BQUEsVUFBQSxDQUFBO0FBR0EsSUFBQSxvQkFBQTtBQUFBLElBQUEscUJBQUEsU0FBQSxVQUFBLE9BQUEsS0FBQSxJQUFBLFdBQUEsTUFBQSxPQUFBLE9BQUEsUUFBQSxVQUFBLE9BQUEsT0FBQSxRQUFBLE9BQUEsU0FBQSxDQUFBOzs7OztBQXlCUixJQUFBLHlCQUFBLEdBQUEsT0FBQTtBQUNFLElBQUEsaUJBQUEsQ0FBQTs7QUFDRixJQUFBLHVCQUFBOzs7QUFERSxJQUFBLG9CQUFBO0FBQUEsSUFBQSw2QkFBQSxLQUFBLHNCQUFBLEdBQUEsR0FBQSwwQkFBQSxHQUFBLEdBQUE7Ozs7O0FBRUYsSUFBQSx5QkFBQSxHQUFBLE9BQUE7QUFDRSxJQUFBLGlCQUFBLENBQUE7O0FBQ0YsSUFBQSx1QkFBQTs7O0FBREUsSUFBQSxvQkFBQTtBQUFBLElBQUEsNkJBQUEsS0FBQSxzQkFBQSxHQUFBLEdBQUEsd0JBQUEsR0FBQSxHQUFBOzs7OztBQVJKLElBQUEseUJBQUEsR0FBQSxZQUFBLEVBQUE7QUFJRSxJQUFBLHFCQUFBLEdBQUEseUNBQUEsR0FBQSxHQUFBLFNBQUEsRUFBQSxFQUEwRCxHQUFBLHlDQUFBLEdBQUEsR0FBQSxTQUFBLEVBQUE7QUFNNUQsSUFBQSx1QkFBQTs7Ozs7O0FBTlUsSUFBQSxvQkFBQTtBQUFBLElBQUEscUJBQUEsU0FBQSxVQUFBLE9BQUEsS0FBQSxJQUFBLFVBQUEsTUFBQSxPQUFBLE9BQUEsUUFBQSxVQUFBLE9BQUEsT0FBQSxRQUFBLE9BQUEsVUFBQSxDQUFBO0FBR0EsSUFBQSxvQkFBQTtBQUFBLElBQUEscUJBQUEsU0FBQSxVQUFBLE9BQUEsS0FBQSxJQUFBLFVBQUEsTUFBQSxPQUFBLE9BQUEsUUFBQSxVQUFBLE9BQUEsT0FBQSxRQUFBLE9BQUEsV0FBQSxDQUFBOzs7QUR4RlosSUFBTyxjQUFQLE1BQU8sWUFBVTtFQU9yQixZQUNVLGtCQUNBLGlCQUNBLGdCQUNBLGFBQ0EsY0FDQSxjQUNBLGtCQUNBLGFBQThCO0FBUDlCLFNBQUEsbUJBQUE7QUFDQSxTQUFBLGtCQUFBO0FBQ0EsU0FBQSxpQkFBQTtBQUNBLFNBQUEsY0FBQTtBQUNBLFNBQUEsZUFBQTtBQUNBLFNBQUEsZUFBQTtBQUNBLFNBQUEsbUJBQUE7QUFDQSxTQUFBLGNBQUE7QUFYSCxTQUFBLGFBQXdCLENBQUE7QUFDeEIsU0FBQSxpQkFBaUM7QUFZdEMsU0FBSyxPQUFPLElBQUksVUFBVTtNQUN4QixZQUFZLElBQUksWUFBWSxJQUFJO1FBQzlCLFdBQVc7UUFDWCxXQUFXLFFBQ1QsNkRBQTZEO09BRWhFO01BQ0QsV0FBVyxJQUFJLFlBQVksSUFBSTtRQUM3QixXQUFXO1FBQ1gsV0FBVyxRQUNULDZEQUE2RDtPQUVoRTtNQUNELE9BQU8sSUFBSSxZQUFZLElBQUk7UUFDekIsV0FBVztRQUNYLFdBQVcsUUFBUSxtREFBbUQ7T0FDdkU7TUFDRCxLQUFLLElBQUksWUFBWSxJQUFJLENBQUMsV0FBVyxRQUFRLENBQUM7TUFDOUMsVUFBVSxJQUFJLFlBQVksSUFBSTtRQUM1QixXQUFXO1FBQ1gsV0FBVyxVQUFVLENBQUM7UUFDdEIsV0FBVyxRQUFRLGlCQUFpQjtPQUNyQztLQUNGO0FBRUQsYUFBUyxFQUFFLFlBQVksVUFBUyxDQUFFO0VBQ3BDO0VBRU0sV0FBUTs7QUFDWixZQUFNLFlBQVksTUFBTSxLQUFLLGVBQWUsYUFBWTtBQUN4RCxXQUFLLGlCQUNGLFVBQXdCLEtBQUssQ0FBQyxNQUFlLEVBQUUsU0FBUyxJQUFJLEtBQUs7QUFFcEUsVUFBSSxLQUFLLGdCQUFnQjtBQUN2QixjQUFNLGNBQWMsTUFBTSxLQUFLLGFBQWEsc0JBQzFDLEtBQUssY0FBYztBQUVyQixhQUFLLFdBQVcsY0FBYyxjQUFjO01BQzlDO0FBQ0EsWUFBTSxLQUFLLGlCQUFpQixjQUFhO0lBQzNDOztFQUVBLG1CQUFnQjtBQUNkLFNBQUssaUJBQWlCLGdCQUFlO0VBQ3ZDO0VBRWEsa0JBQWU7O0FBQzFCLFlBQU0sUUFBUSxNQUFNLEtBQUssZ0JBQWdCLE9BQU87UUFDOUMsV0FBVztRQUNYLGdCQUFnQixFQUFFLGlCQUFpQixLQUFJO1FBQ3ZDLG1CQUFtQjtRQUNuQixhQUFhLENBQUMsR0FBRyxJQUFJO09BQ3RCO0FBRUQsWUFBTSxhQUFZLEVBQUcsS0FBSyxDQUFPLFNBQVE7QUFqSTdDO0FBa0lNLGFBQUksa0NBQU0sU0FBTixtQkFBWSxpQkFBaUI7QUFDL0IsZUFBSyxpQkFBaUIsS0FBSyxLQUFLO0FBQ2hDLGVBQUssS0FBSyxTQUFTLEtBQUssRUFBRSxTQUFTLEVBQUU7QUFFckMsY0FBSSxLQUFLLGdCQUFnQjtBQUN2QixnQkFBSTtBQUNGLG9CQUFNLGNBQWMsTUFBTSxLQUFLLGFBQWEsc0JBQzFDLEtBQUssY0FBYztBQUVyQixtQkFBSyxXQUFXLGNBQWMsY0FBYztZQUM5QyxRQUFRO0FBQ04sc0JBQVEsS0FBSyw2QkFBMEI7QUFDdkMsbUJBQUssV0FBVyxjQUFjLGNBQzVCLEtBQUssaUJBQWlCLFFBQVEsc0JBQXNCO1lBQ3hEO1VBQ0Y7UUFDRjtNQUNGLEVBQUM7QUFFRCxZQUFNLE1BQU0sUUFBTztJQUNyQjs7RUFFTyxrQkFBa0IsT0FBWTtBQUNuQyxVQUFNLGVBQWUsTUFBTTtBQUMzQixVQUFNLGFBQWEsYUFBYTtBQUVoQyxRQUFJLEtBQUssZ0JBQWdCO0FBQ3ZCLFlBQU0sWUFBWSxLQUFLLGFBQWEsa0JBQ2xDLFlBQ0EsS0FBSyxjQUFjO0FBRXJCLG1CQUFhLFFBQVEsV0FBVyxXQUFXLEdBQUcsSUFDMUMsV0FBVyxVQUFVLENBQUMsSUFDdEI7SUFDTjtFQUNGO0VBRU0seUJBQXlCLFVBQTRCOztBQUN6RCxXQUFLLFlBQVkseUJBQXlCLFFBQVE7SUFDcEQ7O0VBRWEsU0FBTTs7QUEzS3JCO0FBNEtJLFVBQUksS0FBSyxtQkFBa0IsR0FBSTtBQUM3QixhQUFLLGFBQWEsc0JBQ2hCLEtBQUssaUJBQWlCLFFBQVEsMkJBQTJCLEdBQ3pELFVBQVUsS0FBSztBQUVqQjtNQUNGO0FBRUEsWUFBTSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU87UUFDNUMsU0FBUyxLQUFLLGlCQUFpQixRQUFRLGlCQUFpQjtPQUN6RDtBQUNELFlBQU0sUUFBUSxRQUFPO0FBRXJCLFlBQU0sT0FBTztRQUNYLE1BQU0sR0FBRyxLQUFLLEtBQUssTUFBTSxXQUFXLEtBQUksQ0FBRSxJQUFJLEtBQUssS0FBSyxNQUFNLFVBQVUsS0FBSSxDQUFFO1FBQzlFLE9BQU8sS0FBSyxLQUFLLE1BQU07UUFDdkIsU0FDRSxVQUFLLG1CQUFMLG1CQUFxQixhQUNyQixLQUFLLEtBQUssTUFBTSxJQUFJLFFBQVEsZUFBZSxFQUFFLEVBQUUsUUFBUSxPQUFPLEVBQUU7UUFDbEUsVUFBVSxLQUFLLEtBQUssTUFBTTs7QUFHNUIsV0FBSyxZQUFZLE9BQU8sSUFBSSxFQUFFLFFBQVEsTUFBVztBQUMvQyxjQUFNLFFBQVEsUUFBTztNQUN2QixFQUFDO0lBQ0g7O0VBRVEscUJBQWtCO0FBQ3hCLFdBQU8sRUFDTCxLQUFLLEtBQUssU0FBUyxZQUFZLEVBQUUsTUFBTSxLQUFJLEtBQzNDLEtBQUssS0FBSyxTQUFTLFdBQVcsRUFBRSxNQUFNLEtBQUksS0FDMUMsS0FBSyxLQUFLLFNBQVMsT0FBTyxFQUFFLE1BQU0sS0FBSSxLQUN0QyxLQUFLLEtBQUssU0FBUyxLQUFLLEVBQUUsTUFBTSxLQUFJLEtBQ3BDLEtBQUssS0FBSyxTQUFTLFVBQVUsRUFBRSxNQUFNLEtBQUk7RUFFN0M7OzttQ0FySlcsYUFBVSw0QkFBQSxnQkFBQSxHQUFBLDRCQUFBLGVBQUEsR0FBQSw0QkFBQSxjQUFBLEdBQUEsNEJBQUEsV0FBQSxHQUFBLDRCQUFBLFlBQUEsR0FBQSw0QkFBQSxpQkFBQSxHQUFBLDRCQUFBLGdCQUFBLEdBQUEsNEJBQUEsaUJBQUEsQ0FBQTtBQUFBOzRFQUFWLGFBQVUsV0FBQSxDQUFBLENBQUEsWUFBQSxDQUFBLEdBQUEsV0FBQSxTQUFBLGlCQUFBLElBQUEsS0FBQTtBQUFBLE1BQUEsS0FBQSxHQUFBO2tDQUNZLFVBQVU7Ozs7Ozs7OztBQzNEN0MsSUFBQSxvQkFBQSxHQUFBLFlBQUE7QUFDQSxJQUFBLHlCQUFBLEdBQUEsZUFBQSxDQUFBLEVBQWlDLEdBQUEsUUFBQSxDQUFBO0FBQ3pCLElBQUEscUJBQUEsWUFBQSxTQUFBLCtDQUFBO0FBQUEsTUFBQSx3QkFBQSxHQUFBO0FBQUEsYUFBQSxzQkFBWSxJQUFBLE9BQUEsQ0FBUTtJQUFBLENBQUE7QUFFeEIsSUFBQSx5QkFBQSxHQUFBLFdBQUEsQ0FBQSxFQUE0QyxHQUFBLFdBQUEsQ0FBQSxFQUNDLEdBQUEsSUFBQTtBQUNyQyxJQUFBLGlCQUFBLENBQUE7O0FBQWdDLElBQUEsdUJBQUEsRUFBSyxFQUNqQztBQUdaLElBQUEseUJBQUEsR0FBQSxXQUFBLENBQUEsRUFBNEMsR0FBQSxXQUFBLENBQUEsRUFDQyxJQUFBLFlBQUEsQ0FBQTtBQUV2QyxJQUFBLHFCQUFBLElBQUEsNEJBQUEsR0FBQSxHQUFBLE9BQUEsQ0FBQTtBQVFBLElBQUEseUJBQUEsSUFBQSxhQUFBLEdBQUEsQ0FBQTs7QUFRRSxJQUFBLHFCQUFBLGFBQUEsU0FBQSxvREFBQSxRQUFBO0FBQUEsTUFBQSx3QkFBQSxHQUFBO0FBQUEsYUFBQSxzQkFBYSxJQUFBLGtCQUFBLE1BQUEsQ0FBeUI7SUFBQSxDQUFBO0FBQ3ZDLElBQUEsdUJBQUEsRUFBWTtBQUdmLElBQUEscUJBQUEsSUFBQSxpQ0FBQSxHQUFBLEdBQUEsWUFBQSxDQUFBO0FBV0YsSUFBQSx1QkFBQSxFQUFVO0FBR1osSUFBQSx5QkFBQSxJQUFBLFdBQUEsQ0FBQSxFQUE0QyxJQUFBLFdBQUEsQ0FBQSxFQUNDLElBQUEsWUFBQSxDQUFBO0FBRXZDLElBQUEsb0JBQUEsSUFBQSxhQUFBLEVBQUE7O0FBT0YsSUFBQSx1QkFBQTtBQUVBLElBQUEscUJBQUEsSUFBQSxpQ0FBQSxHQUFBLEdBQUEsWUFBQSxDQUFBO0FBV0YsSUFBQSx1QkFBQSxFQUFVO0FBR1osSUFBQSx5QkFBQSxJQUFBLFdBQUEsQ0FBQSxFQUE0QyxJQUFBLFdBQUEsQ0FBQSxFQUNDLElBQUEsWUFBQSxDQUFBO0FBRXZDLElBQUEsb0JBQUEsSUFBQSxhQUFBLEVBQUE7O0FBT0YsSUFBQSx1QkFBQTtBQUVBLElBQUEscUJBQUEsSUFBQSxpQ0FBQSxHQUFBLEdBQUEsWUFBQSxDQUFBO0FBV0YsSUFBQSx1QkFBQSxFQUFVO0FBR1osSUFBQSx5QkFBQSxJQUFBLFdBQUEsQ0FBQSxFQUE0QyxJQUFBLFdBQUEsQ0FBQSxFQUNDLElBQUEsWUFBQSxDQUFBO0FBRXZDLElBQUEsb0JBQUEsSUFBQSxhQUFBLEVBQUE7O0FBT0YsSUFBQSx1QkFBQTtBQUVBLElBQUEscUJBQUEsSUFBQSxpQ0FBQSxHQUFBLEdBQUEsWUFBQSxDQUFBO0FBV0YsSUFBQSx1QkFBQSxFQUFVO0FBR1osSUFBQSx5QkFBQSxJQUFBLFdBQUEsQ0FBQSxFQUE0QyxJQUFBLFdBQUEsQ0FBQSxFQUNDLElBQUEsWUFBQSxDQUFBLEVBQ08sSUFBQSxhQUFBLEVBQUE7O0FBUTVDLElBQUEsb0JBQUEsSUFBQSw2QkFBQSxFQUFBO0FBQ0YsSUFBQSx1QkFBQSxFQUFZO0FBR2QsSUFBQSxxQkFBQSxJQUFBLGlDQUFBLEdBQUEsR0FBQSxZQUFBLENBQUE7QUFXRixJQUFBLHVCQUFBLEVBQVU7QUFHWixJQUFBLHlCQUFBLElBQUEsV0FBQSxDQUFBLEVBQTRDLElBQUEsV0FBQSxDQUFBLEVBQ0MsSUFBQSxjQUFBLEVBQUE7QUFRdkMsSUFBQSxpQkFBQSxFQUFBOztBQUNGLElBQUEsdUJBQUEsRUFBYSxFQUNMO0FBR1osSUFBQSx5QkFBQSxJQUFBLFdBQUEsRUFBQSxFQUEyRCxJQUFBLFdBQUEsRUFBQSxFQUNVLElBQUEsVUFBQSxFQUN2RCxJQUFBLEtBQUEsRUFBQTtBQUVMLElBQUEsaUJBQUEsRUFBQTs7QUFBaUMsSUFBQSx1QkFBQSxFQUNuQyxFQUNRLEVBQ0g7QUFHWixJQUFBLHlCQUFBLElBQUEsV0FBQSxFQUFBLEVBQTRELElBQUEsV0FBQSxDQUFBLEVBQ2YsSUFBQSxjQUFBLEVBQUE7QUFLdkMsSUFBQSxxQkFBQSxTQUFBLFNBQUEsbURBQUE7QUFBQSxNQUFBLHdCQUFBLEdBQUE7QUFBQSxhQUFBLHNCQUFTLElBQUEseUJBQXlCLE9BQU8sQ0FBQztJQUFBLENBQUE7QUFFMUMsSUFBQSxvQkFBQSxJQUFBLFlBQUEsRUFBQTtBQUNBLElBQUEsaUJBQUEsRUFBQTs7QUFDRixJQUFBLHVCQUFBLEVBQWEsRUFDTDtBQUdaLElBQUEseUJBQUEsSUFBQSxXQUFBLENBQUEsRUFBNEMsSUFBQSxXQUFBLENBQUEsRUFDQyxJQUFBLGNBQUEsRUFBQTtBQUt2QyxJQUFBLHFCQUFBLFNBQUEsU0FBQSxtREFBQTtBQUFBLE1BQUEsd0JBQUEsR0FBQTtBQUFBLGFBQUEsc0JBQVMsSUFBQSx5QkFBeUIsUUFBUSxDQUFDO0lBQUEsQ0FBQTtBQUUzQyxJQUFBLG9CQUFBLElBQUEsWUFBQSxFQUFBO0FBQ0EsSUFBQSxpQkFBQSxFQUFBOztBQUNGLElBQUEsdUJBQUEsRUFBYSxFQUNMO0FBSVosSUFBQSx5QkFBQSxJQUFBLFlBQUEsRUFBQSxFQUFpRCxJQUFBLEdBQUEsRUFDNUMsSUFBQSxLQUFBLEVBQUE7QUFDMEIsSUFBQSxpQkFBQSxFQUFBOztBQUFvQyxJQUFBLHVCQUFBLEVBQUksRUFDakUsRUFDSyxFQUNOOzs7Ozs7OztBQWpOcUIsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSxxQkFBQSxhQUFBLElBQUEsSUFBQTtBQUlsQixJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLDRCQUFBLHNCQUFBLEdBQUEsSUFBQSxjQUFBLENBQUE7QUFTQyxJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLHFCQUFBLFFBQUEsSUFBQSxjQUFBO0FBUUQsSUFBQSxvQkFBQTtBQUFBLElBQUEsZ0NBQUEsZUFBQSxzQkFBQSxJQUFBLElBQUEsc0JBQUEsQ0FBQTtBQVlELElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEscUJBQUEsVUFBQSxVQUFBLElBQUEsS0FBQSxJQUFBLEtBQUEsTUFBQSxPQUFBLE9BQUEsUUFBQSxjQUFBLFVBQUEsSUFBQSxLQUFBLElBQUEsS0FBQSxNQUFBLE9BQUEsT0FBQSxRQUFBLFFBQUE7QUFnQkMsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSxnQ0FBQSxlQUFBLHNCQUFBLElBQUEsSUFBQSxlQUFBLENBQUE7QUFVRCxJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLHFCQUFBLFVBQUEsVUFBQSxJQUFBLEtBQUEsSUFBQSxPQUFBLE1BQUEsT0FBQSxPQUFBLFFBQUEsY0FBQSxVQUFBLElBQUEsS0FBQSxJQUFBLE9BQUEsTUFBQSxPQUFBLE9BQUEsUUFBQSxRQUFBO0FBZ0JDLElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEsZ0NBQUEsZUFBQSxzQkFBQSxJQUFBLElBQUEsb0JBQUEsQ0FBQTtBQVVELElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEscUJBQUEsVUFBQSxVQUFBLElBQUEsS0FBQSxJQUFBLFlBQUEsTUFBQSxPQUFBLE9BQUEsUUFBQSxjQUFBLFVBQUEsSUFBQSxLQUFBLElBQUEsWUFBQSxNQUFBLE9BQUEsT0FBQSxRQUFBLFFBQUE7QUFnQkMsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSxnQ0FBQSxlQUFBLHNCQUFBLElBQUEsSUFBQSxtQkFBQSxDQUFBO0FBVUQsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSxxQkFBQSxVQUFBLFdBQUEsSUFBQSxLQUFBLElBQUEsV0FBQSxNQUFBLE9BQUEsT0FBQSxTQUFBLGNBQUEsV0FBQSxJQUFBLEtBQUEsSUFBQSxXQUFBLE1BQUEsT0FBQSxPQUFBLFNBQUEsUUFBQTtBQWdCQyxJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLGdDQUFBLGVBQUEsc0JBQUEsSUFBQSxJQUFBLGtCQUFBLENBQUE7QUFZRCxJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLHFCQUFBLFVBQUEsV0FBQSxJQUFBLEtBQUEsSUFBQSxVQUFBLE1BQUEsT0FBQSxPQUFBLFNBQUEsY0FBQSxXQUFBLElBQUEsS0FBQSxJQUFBLFVBQUEsTUFBQSxPQUFBLE9BQUEsU0FBQSxRQUFBO0FBa0JELElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEscUJBQUEsWUFBQSxJQUFBLEtBQUEsT0FBQTtBQUdBLElBQUEsb0JBQUE7QUFBQSxJQUFBLDZCQUFBLEtBQUEsc0JBQUEsSUFBQSxJQUFBLGNBQUEsR0FBQSxHQUFBO0FBUUcsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSxxQkFBQSxjQUFBLDBCQUFBLElBQUEsR0FBQSxDQUFBO0FBQ0EsSUFBQSxvQkFBQTtBQUFBLElBQUEsNEJBQUEsc0JBQUEsSUFBQSxJQUFBLGVBQUEsQ0FBQTtBQWVILElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEsNkJBQUEsS0FBQSxzQkFBQSxJQUFBLElBQUEscUJBQUEsR0FBQSxHQUFBO0FBY0EsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSw2QkFBQSxLQUFBLHNCQUFBLElBQUEsSUFBQSxzQkFBQSxHQUFBLEdBQUE7QUFRQyxJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLHFCQUFBLGNBQUEsMEJBQUEsSUFBQSxHQUFBLENBQUE7QUFBd0IsSUFBQSxvQkFBQTtBQUFBLElBQUEsNEJBQUEsc0JBQUEsSUFBQSxJQUFBLGtCQUFBLENBQUE7OztFRHZLL0I7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFBWTtFQUNaO0VBQVc7RUFBQTtFQUFBO0VBQUE7RUFDWDtFQUFtQjtFQUFBO0VBQ25CO0VBQWU7RUFDZjtFQUNBO0FBQVUsR0FBQSxlQUFBLEVBQUEsQ0FBQTtBQUdSLElBQU8sYUFBUDs7c0VBQU8sWUFBVSxDQUFBO1VBdEJ0Qjt1QkFDVyxjQUFZLFNBR2I7TUFDUDtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7T0FDRCxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBQSxDQUFBO3NPQUlELFlBQVUsQ0FBQTtVQURUO1dBQVUsY0FBYyxFQUFFLE1BQU0sWUFBWSxRQUFRLEtBQUksQ0FBRTs7Ozs2RUFEaEQsWUFBVSxFQUFBLFdBQUEsY0FBQSxVQUFBLDRDQUFBLFlBQUEsR0FBQSxDQUFBO0FBQUEsR0FBQTsiLAogICJuYW1lcyI6IFtdCn0K
