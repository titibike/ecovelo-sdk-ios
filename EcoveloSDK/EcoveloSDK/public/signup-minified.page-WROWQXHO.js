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
  AuthService,
  Browser
} from "./chunk-WJQU3GMM.js";
import "./chunk-CHFOG66O.js";
import "./chunk-RAVV2QIY.js";
import "./chunk-T6WE2PS5.js";
import {
  AccountService,
  CyclistsService
} from "./chunk-XK4I5MHM.js";
import "./chunk-GVYZRG6X.js";
import {
  environment
} from "./chunk-FOJAXRYS.js";
import {
  deleteUser,
  fetchUserAttributes
} from "./chunk-Y7HI6USV.js";
import {
  ErrorHandlerService,
  ToastService,
  ToastType
} from "./chunk-SARQRLZR.js";
import "./chunk-3E6DEK7U.js";
import {
  StorageService
} from "./chunk-U6SJAXLK.js";
import {
  ActivatedRoute,
  AlertController,
  ChangeDetectorRef,
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
  IonText,
  LoadingController,
  ModalController,
  NgControlStatus,
  NgControlStatusGroup,
  NgIf,
  ReactiveFormsModule,
  Router,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  Validators,
  ViewChild,
  firstValueFrom,
  setClassMetadata,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
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

// src/app/pages/auth/signup-minified/signup-minified.page.ts
var _c0 = ["phoneInput"];
function SignupMinifiedPage_ng_container_0_ng_container_9_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275listener("click", function SignupMinifiedPage_ng_container_0_ng_container_9_div_4_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openCountryPage());
    });
    \u0275\u0275element(1, "img", 12);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.currentCountry.img, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.currentCountry.dial_code);
  }
}
function SignupMinifiedPage_ng_container_0_ng_container_9_ion_text_8_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "error.phone_required"), " ");
  }
}
function SignupMinifiedPage_ng_container_0_ng_container_9_ion_text_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-text", 13);
    \u0275\u0275template(1, SignupMinifiedPage_ng_container_0_ng_container_9_ion_text_8_small_1_Template, 3, 3, "small", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r1.form.get("tel")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["required"]);
  }
}
function SignupMinifiedPage_ng_container_0_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-row", 4)(2, "ion-col", 5)(3, "ion-item", 7);
    \u0275\u0275template(4, SignupMinifiedPage_ng_container_0_ng_container_9_div_4_Template, 4, 2, "div", 8);
    \u0275\u0275elementStart(5, "ion-input", 9, 0);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("ionChange", function SignupMinifiedPage_ng_container_0_ng_container_9_Template_ion_input_ionChange_5_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changePhoneNumber($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, SignupMinifiedPage_ng_container_0_ng_container_9_ion_text_8_Template, 2, 1, "ion-text", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.currentCountry);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(7, 3, "generic.phone_number"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r1.form.get("tel")) == null ? null : tmp_5_0.touched) && ((tmp_5_0 = ctx_r1.form.get("tel")) == null ? null : tmp_5_0.invalid));
  }
}
function SignupMinifiedPage_ng_container_0_ng_container_10_ion_text_6_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "error.first_name_required"), " ");
  }
}
function SignupMinifiedPage_ng_container_0_ng_container_10_ion_text_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-text", 13);
    \u0275\u0275template(1, SignupMinifiedPage_ng_container_0_ng_container_10_ion_text_6_small_1_Template, 3, 3, "small", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r1.form.get("firstName")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
  }
}
function SignupMinifiedPage_ng_container_0_ng_container_10_ion_text_12_small_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "error.last_name_required"), " ");
  }
}
function SignupMinifiedPage_ng_container_0_ng_container_10_ion_text_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-text", 13);
    \u0275\u0275template(1, SignupMinifiedPage_ng_container_0_ng_container_10_ion_text_12_small_1_Template, 3, 3, "small", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r1.form.get("lastName")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
  }
}
function SignupMinifiedPage_ng_container_0_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-row", 4)(2, "ion-col", 5)(3, "ion-item", 14);
    \u0275\u0275element(4, "ion-input", 15);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, SignupMinifiedPage_ng_container_0_ng_container_10_ion_text_6_Template, 2, 1, "ion-text", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "ion-row", 4)(8, "ion-col", 5)(9, "ion-item", 14);
    \u0275\u0275element(10, "ion-input", 16);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, SignupMinifiedPage_ng_container_0_ng_container_10_ion_text_12_Template, 2, 1, "ion-text", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(5, 4, "generic.first_name"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_3_0 = ctx_r1.form.get("firstName")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx_r1.form.get("firstName")) == null ? null : tmp_3_0.invalid));
    \u0275\u0275advance(4);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(11, 6, "generic.last_name"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r1.form.get("lastName")) == null ? null : tmp_5_0.touched) && ((tmp_5_0 = ctx_r1.form.get("lastName")) == null ? null : tmp_5_0.invalid));
  }
}
function SignupMinifiedPage_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "app-header");
    \u0275\u0275elementStart(2, "ion-content", 2)(3, "form", 3);
    \u0275\u0275listener("ngSubmit", function SignupMinifiedPage_ng_container_0_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createUser());
    });
    \u0275\u0275elementStart(4, "ion-row", 4)(5, "ion-col", 5)(6, "h1");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, SignupMinifiedPage_ng_container_0_ng_container_9_Template, 9, 5, "ng-container", 1)(10, SignupMinifiedPage_ng_container_0_ng_container_10_Template, 13, 8, "ng-container", 1);
    \u0275\u0275elementStart(11, "ion-row", 4)(12, "ion-col", 5)(13, "ion-button", 6);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 6, "signup.complete_profile"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.needsPhoneNumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.needsName);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.form.invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 8, "generic.continue"), " ");
  }
}
var _SignupMinifiedPage = class _SignupMinifiedPage {
  constructor(translateService, modalController, countryService, phoneService, router, changeDetectorRef, cyclistsService, storageService, loadingController, authService, route, accountService, toastService, alertController, errorHandler) {
    this.translateService = translateService;
    this.modalController = modalController;
    this.countryService = countryService;
    this.phoneService = phoneService;
    this.router = router;
    this.changeDetectorRef = changeDetectorRef;
    this.cyclistsService = cyclistsService;
    this.storageService = storageService;
    this.loadingController = loadingController;
    this.authService = authService;
    this.route = route;
    this.accountService = accountService;
    this.toastService = toastService;
    this.alertController = alertController;
    this.errorHandler = errorHandler;
    this.currentCountry = null;
    this.needsPhoneNumber = false;
    this.needsName = false;
    this.pageReady = false;
    this.form = new FormGroup({
      tel: new FormControl("", []),
      firstName: new FormControl("", []),
      lastName: new FormControl("", [])
    });
  }
  ionViewWillEnter() {
    return __async(this, null, function* () {
      if (Capacitor.isNativePlatform()) {
        Browser.close();
      }
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.route.queryParams.subscribe((params) => __async(this, null, function* () {
        const loader = yield this.loadingController.create({
          message: this.translateService.instant("generic.please_wait")
        });
        yield loader.present();
        if (params["session"]) {
          const sessionData = JSON.parse(decodeURIComponent(params["session"]));
          this.handleSessionData(sessionData);
          yield loader.dismiss();
        } else {
          this.toastService.createWithJustMessage(this.translateService.instant("error.signin_error"), ToastType.Error);
          yield this.authService.signOut();
          yield loader.dismiss();
        }
      }));
    });
  }
  handleSessionData(sessionData) {
    return __async(this, null, function* () {
      if (sessionData.idToken && sessionData.accessToken && sessionData.refreshToken) {
        yield this.authService.createSessionFromTokens({
          idToken: sessionData.idToken,
          accessToken: sessionData.accessToken,
          refreshToken: sessionData.refreshToken
        });
        const attributes = yield fetchUserAttributes();
        if (attributes.phone_number && attributes.email && (attributes.name || attributes.given_name && attributes.family_name)) {
          if (attributes["custom:user"]) {
            yield this.authService.checkAuthStatus(true);
            this.redirectUserBasedOnValidation();
          } else {
            yield this.createUser(attributes);
          }
        } else {
          this.initializeForm();
        }
      } else {
        this.toastService.createWithJustMessage(this.translateService.instant("error.signin_error"), ToastType.Error);
        yield this.authService.signOut();
      }
    });
  }
  initializeForm() {
    return __async(this, null, function* () {
      var _a, _b, _c, _d;
      try {
        const attributes = yield fetchUserAttributes();
        this.needsPhoneNumber = !attributes.phone_number;
        const hasGoogleName = !!attributes.name;
        const hasAppleNames = !!(attributes.given_name && attributes.family_name);
        this.needsName = !hasGoogleName && !hasAppleNames;
        if (Capacitor.isNativePlatform() && !this.needsName && !this.needsPhoneNumber) {
          location.reload();
        }
        this.pageReady = true;
        if (this.needsPhoneNumber) {
          (_a = this.form.get("tel")) == null ? void 0 : _a.setValidators([Validators.required]);
          const countries = yield this.countryService.getCountries();
          this.currentCountry = countries.find((x) => x.code === "FR") || null;
          if (this.currentCountry && ((_b = this.phoneInput) == null ? void 0 : _b.nativeElement)) {
            const placeHolder = yield this.phoneService.getPhoneNumberPattern(this.currentCountry);
            this.phoneInput.nativeElement.placeholder = placeHolder;
          }
        }
        if (this.needsName) {
          (_c = this.form.get("firstName")) == null ? void 0 : _c.setValidators([
            Validators.required,
            Validators.pattern(/^[A-Za-z\u00C0-\u00FF]+(?:[-\s][A-Za-z\u00C0-\u00FF]+)*$/)
          ]);
          (_d = this.form.get("lastName")) == null ? void 0 : _d.setValidators([
            Validators.required,
            Validators.pattern(/^[A-Za-z\u00C0-\u00FF]+(?:[-\s][A-Za-z\u00C0-\u00FF]+)*$/)
          ]);
        }
        this.program = yield this.storageService.get("program");
        this.form.updateValueAndValidity();
        this.changeDetectorRef.detectChanges();
      } catch (err) {
        this.errorHandler.handleError(err);
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
            const placeHolder = yield this.phoneService.getPhoneNumberPattern(this.currentCountry);
            this.phoneInput.nativeElement.placeholder = placeHolder;
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
  createUser(attributes) {
    return __async(this, null, function* () {
      var _a;
      if (this.form.valid) {
        const loading = yield this.loadingController.create({
          message: this.translateService.instant("generic.please_wait")
        });
        yield loading.present();
        try {
          if (!attributes) {
            attributes = yield fetchUserAttributes();
          }
          const userAttributes = {};
          if (this.needsPhoneNumber) {
            userAttributes.phone_number = ((_a = this.currentCountry) == null ? void 0 : _a.dial_code) + this.form.value.tel.replace(/[(),\-,\s]/g, "").replace(/^0+/, "");
          }
          if (this.needsName) {
            userAttributes.name = `${this.form.value.firstName} ${this.form.value.lastName}`.trim();
          }
          let fullName = attributes.name;
          if (!fullName && attributes.given_name && attributes.family_name) {
            fullName = `${attributes.given_name} ${attributes.family_name}`.trim();
          }
          if (this.needsName) {
            fullName = `${this.form.value.firstName} ${this.form.value.lastName}`.trim();
          }
          yield firstValueFrom(this.cyclistsService.createCyclist({
            program: environment.program,
            body: {
              email: this.ensureNonEmptyString(attributes.email, "Email"),
              cognito: this.ensureNonEmptyString(attributes.sub, "Cognito ID"),
              name: this.ensureNonEmptyString(fullName, "Name"),
              phone_number: this.ensureNonEmptyString(attributes.phone_number || userAttributes.phone_number, "Phone number"),
              role: "cyclist",
              program: environment.program
            }
          }));
          yield this.authService.checkAuthStatus(true);
          yield loading.dismiss();
          this.redirectUserBasedOnValidation();
        } catch (error) {
          yield loading.dismiss();
          if (error.error.title === "phone_number_already_used") {
            yield this.presentPhoneNumberAlreadyExistAlert();
          } else {
            this.presentGeneralErrorAlert(error);
          }
        }
      }
    });
  }
  presentPhoneNumberAlreadyExistAlert() {
    return __async(this, null, function* () {
      var _a;
      const phoneNumber = ((_a = this.currentCountry) == null ? void 0 : _a.dial_code) + this.form.value.tel.replace(/[(),\-,\s]/g, "").replace(/^0+/, "");
      const alert = yield this.alertController.create({
        header: this.translateService.instant("auth.existing_account.title"),
        message: this.translateService.instant("auth.existing_account.message"),
        buttons: [
          {
            text: this.translateService.instant("auth.existing_account.forgot_password"),
            handler: () => __async(this, null, function* () {
              try {
                yield deleteUser();
                this.router.navigate(["/enter-phone"]);
              } catch (error) {
                yield this.authService.signOut();
                this.router.navigate(["/enter-phone"]);
                throw error;
              }
            })
          },
          {
            text: this.translateService.instant("auth.existing_account.signin"),
            handler: () => __async(this, null, function* () {
              try {
                yield deleteUser();
                this.router.navigate(["/signin"], {
                  queryParams: { phone: phoneNumber }
                });
              } catch (error) {
                yield this.authService.signOut();
                this.router.navigate(["/signin"], {
                  queryParams: { phone: phoneNumber }
                });
                throw error;
              }
            })
          }
        ]
      });
      yield alert.present();
    });
  }
  presentGeneralErrorAlert(error) {
    return __async(this, null, function* () {
      var _a, _b, _c;
      this.errorHandler.handleError(error);
      if (this.needsPhoneNumber) {
        (_a = this.form.get("tel")) == null ? void 0 : _a.reset();
      }
      if (this.needsName) {
        (_b = this.form.get("firstName")) == null ? void 0 : _b.reset();
        (_c = this.form.get("lastName")) == null ? void 0 : _c.reset();
      }
      const alert = yield this.alertController.create({
        header: this.translateService.instant("generic.error"),
        message: this.translateService.instant("generic.what_to_do"),
        buttons: [
          {
            text: this.translateService.instant("generic.close"),
            role: "cancel"
          },
          {
            text: this.translateService.instant("generic.go_to_home"),
            handler: () => __async(this, null, function* () {
              try {
                yield deleteUser();
                yield this.authService.signOut();
                this.router.navigate(["/signin"]);
              } catch (err) {
                console.error("Error during cleanup:", err);
                yield this.authService.signOut();
                this.router.navigate(["/signin"]);
              }
            })
          }
        ]
      });
      yield alert.present();
    });
  }
  ensureNonEmptyString(value, fieldName) {
    if (value == null || value === "") {
      throw new Error(`${fieldName} is required but was not provided`);
    }
    return String(value);
  }
  redirectUserBasedOnValidation() {
    var _a, _b, _c;
    const cyclistState = this.accountService.cyclistState();
    if ("cyclist" in cyclistState && (cyclistState.cyclist.role == "guest" || ((_c = (_b = (_a = cyclistState.cyclist.registrations) == null ? void 0 : _a.data) == null ? void 0 : _b[0]) == null ? void 0 : _c.role) == "guest")) {
      this.router.navigate(["/verify-phone"]);
      return;
    }
    if (cyclistState.state === "active") {
      this.router.navigate(["/map"]);
    } else if (cyclistState.state === "unconfirmed") {
      if (this.accountService.hasMissingPaymentMethodOrCgu()) {
        this.router.navigate(["/payment-method"]);
      } else {
        this.router.navigate(["/verify-phone"]);
      }
    } else {
      this.router.navigate(["/signin"]);
    }
  }
};
_SignupMinifiedPage.\u0275fac = function SignupMinifiedPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SignupMinifiedPage)(\u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(CountryService), \u0275\u0275directiveInject(PhoneUtilsService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(CyclistsService), \u0275\u0275directiveInject(StorageService), \u0275\u0275directiveInject(LoadingController), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(AccountService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(ErrorHandlerService));
};
_SignupMinifiedPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignupMinifiedPage, selectors: [["app-signup-minified"]], viewQuery: function SignupMinifiedPage_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5, ElementRef);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.phoneInput = _t.first);
  }
}, decls: 1, vars: 1, consts: [["phoneInput", ""], [4, "ngIf"], [1, "ion-padding"], [3, "ngSubmit", "formGroup"], [1, "ion-justify-content-center"], ["size", "12", "size-md", "6", "size-lg", "4"], ["type", "submit", "expand", "block", "shape", "round", 1, "ion-margin-top", 3, "disabled"], [1, "ion-no-padding"], ["class", "ecl-phone__container", 3, "click", 4, "ngIf"], ["type", "tel", "inputmode", "tel", "name", "tel", "formControlName", "tel", 3, "ionChange", "placeholder"], ["color", "danger", 4, "ngIf"], [1, "ecl-phone__container", 3, "click"], [3, "src"], ["color", "danger"], ["fill", "outline", 1, "ion-no-padding"], ["type", "text", "name", "firstName", "formControlName", "firstName", 3, "placeholder"], ["type", "text", "name", "lastName", "formControlName", "lastName", 3, "placeholder"]], template: function SignupMinifiedPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SignupMinifiedPage_ng_container_0_Template, 16, 10, "ng-container", 1);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.pageReady);
  }
}, dependencies: [
  IonContent,
  IonInput,
  IonCol,
  IonText,
  HeaderComponent,
  IonRow,
  IonItem,
  IonButton,
  CommonModule,
  NgIf,
  FormsModule,
  \u0275NgNoValidate,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  FormGroupDirective,
  FormControlName,
  TranslateModule,
  TranslatePipe
], encapsulation: 2 });
var SignupMinifiedPage = _SignupMinifiedPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignupMinifiedPage, [{
    type: Component,
    args: [{ selector: "app-signup-minified", imports: [
      IonContent,
      IonInput,
      IonCol,
      IonText,
      HeaderComponent,
      IonRow,
      IonItem,
      IonButton,
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      TranslateModule
    ], template: `<ng-container *ngIf="pageReady">
  <app-header></app-header>
  <ion-content class="ion-padding">
    <form (ngSubmit)="createUser()" [formGroup]="form">
      <ion-row class="ion-justify-content-center">
        <ion-col size="12" size-md="6" size-lg="4">
          <h1>{{ 'signup.complete_profile' | translate }}</h1>
        </ion-col>
      </ion-row>

      <ng-container *ngIf="needsPhoneNumber">
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
                formControlName="tel"
                (ionChange)="changePhoneNumber($event)"
              ></ion-input>
            </ion-item>
            <ion-text
              color="danger"
              *ngIf="form.get('tel')?.touched && form.get('tel')?.invalid"
            >
              <small *ngIf="form.get('tel')?.errors?.['required']">
                {{ 'error.phone_required' | translate }}
              </small>
            </ion-text>
          </ion-col>
        </ion-row>
      </ng-container>

      <ng-container *ngIf="needsName">
        <ion-row class="ion-justify-content-center">
          <ion-col size="12" size-md="6" size-lg="4">
            <ion-item fill="outline" class="ion-no-padding">
              <ion-input
                placeholder="{{ 'generic.first_name' | translate }}"
                type="text"
                name="firstName"
                formControlName="firstName"
              ></ion-input>
            </ion-item>
            <ion-text
              color="danger"
              *ngIf="form.get('firstName')?.touched && form.get('firstName')?.invalid"
            >
              <small *ngIf="form.get('firstName')?.errors?.['required']">
                {{ 'error.first_name_required' | translate }}
              </small>
            </ion-text>
          </ion-col>
        </ion-row>
        <ion-row class="ion-justify-content-center">
          <ion-col size="12" size-md="6" size-lg="4">
            <ion-item fill="outline" class="ion-no-padding">
              <ion-input
                placeholder="{{ 'generic.last_name' | translate }}"
                type="text"
                name="lastName"
                formControlName="lastName"
              ></ion-input>
            </ion-item>
            <ion-text
              color="danger"
              *ngIf="form.get('lastName')?.touched && form.get('lastName')?.invalid"
            >
              <small *ngIf="form.get('lastName')?.errors?.['required']">
                {{ 'error.last_name_required' | translate }}
              </small>
            </ion-text>
          </ion-col>
        </ion-row>
      </ng-container>

      <ion-row class="ion-justify-content-center">
        <ion-col size="12" size-md="6" size-lg="4">
          <ion-button
            type="submit"
            expand="block"
            shape="round"
            [disabled]="form.invalid"
            class="ion-margin-top"
          >
            {{ 'generic.continue' | translate }}
          </ion-button>
        </ion-col>
      </ion-row>
    </form>
  </ion-content>
</ng-container>
` }]
  }], () => [{ type: TranslateService }, { type: ModalController }, { type: CountryService }, { type: PhoneUtilsService }, { type: Router }, { type: ChangeDetectorRef }, { type: CyclistsService }, { type: StorageService }, { type: LoadingController }, { type: AuthService }, { type: ActivatedRoute }, { type: AccountService }, { type: ToastService }, { type: AlertController }, { type: ErrorHandlerService }], { phoneInput: [{
    type: ViewChild,
    args: ["phoneInput", { read: ElementRef, static: false }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignupMinifiedPage, { className: "SignupMinifiedPage", filePath: "src/app/pages/auth/signup-minified/signup-minified.page.ts", lineNumber: 65 });
})();
export {
  SignupMinifiedPage
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wYWdlcy9hdXRoL3NpZ251cC1taW5pZmllZC9zaWdudXAtbWluaWZpZWQucGFnZS50cyIsICJzcmMvYXBwL3BhZ2VzL2F1dGgvc2lnbnVwLW1pbmlmaWVkL3NpZ251cC1taW5pZmllZC5wYWdlLmh0bWwiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJ1xuaW1wb3J0IHtcbiAgRm9ybUNvbnRyb2wsXG4gIEZvcm1Hcm91cCxcbiAgRm9ybXNNb2R1bGUsXG4gIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gIFZhbGlkYXRvcnMsXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJ1xuaW1wb3J0IHtcbiAgSW9uQ29udGVudCxcbiAgSW9uSW5wdXQsXG4gIElvbkJ1dHRvbixcbiAgSW9uQ29sLFxuICBJb25UZXh0LFxuICBJb25JdGVtLFxuICBJb25Sb3csXG4gIE1vZGFsQ29udHJvbGxlcixcbiAgTG9hZGluZ0NvbnRyb2xsZXIsXG4gIEFsZXJ0Q29udHJvbGxlcixcbn0gZnJvbSAnQGlvbmljL2FuZ3VsYXIvc3RhbmRhbG9uZSdcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSwgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnXG5pbXBvcnQgeyBDb3VudHJpZXNDb21wb25lbnQgfSBmcm9tICdzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWxzL2NvdW50cmllcy9jb3VudHJpZXMuY29tcG9uZW50J1xuaW1wb3J0IHsgQ291bnRyeSwgQ291bnRyeVNlcnZpY2UgfSBmcm9tICdzcmMvYXBwL3NlcnZpY2VzL3V0aWxzL2NvdW50cnkuc2VydmljZSdcbmltcG9ydCB7IFBob25lVXRpbHNTZXJ2aWNlIH0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy91dGlscy9waG9uZS5zZXJ2aWNlJ1xuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnc3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50J1xuaW1wb3J0IHsgZGVsZXRlVXNlciwgZmV0Y2hVc2VyQXR0cmlidXRlcyB9IGZyb20gJ2F3cy1hbXBsaWZ5L2F1dGgnXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJ3NyYy9hcHAvc2VydmljZXMvZXh0ZXJuYWwvYXV0aC5zZXJ2aWNlJ1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcbmltcG9ydCB7IEN5Y2xpc3RzU2VydmljZSB9IGZyb20gJ3NyYy9hcGktY3ljbGlzdC9hcGkvY3ljbGlzdHMuc2VydmljZSdcbmltcG9ydCB7IFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy91dGlscy9zdG9yYWdlLnNlcnZpY2UnXG5pbXBvcnQgeyBmaXJzdFZhbHVlRnJvbSB9IGZyb20gJ3J4anMnXG5pbXBvcnQgeyBCcm93c2VyIH0gZnJvbSAnQGNhcGFjaXRvci9icm93c2VyJ1xuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICdzcmMvZW52aXJvbm1lbnRzL2Vudmlyb25tZW50J1xuaW1wb3J0IHsgQ2FwYWNpdG9yIH0gZnJvbSAnQGNhcGFjaXRvci9jb3JlJ1xuaW1wb3J0IHsgQWNjb3VudFNlcnZpY2UgfSBmcm9tICdzcmMvYXBwL3NlcnZpY2VzL2FwaS13cmFwcGVycy9hY2NvdW50LnNlcnZpY2UnXG5pbXBvcnQgeyBUb2FzdFNlcnZpY2UsIFRvYXN0VHlwZSB9IGZyb20gJ3NyYy9hcHAvc2VydmljZXMvdXRpbHMvdG9hc3Quc2VydmljZSdcbmltcG9ydCB7IEVycm9ySGFuZGxlclNlcnZpY2UgfSBmcm9tICdzcmMvYXBwL3NlcnZpY2VzL3V0aWxzL2Vycm9yLWhhbmRsZXIuc2VydmljZSdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNpZ251cC1taW5pZmllZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWdudXAtbWluaWZpZWQucGFnZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2lnbnVwLW1pbmlmaWVkLnBhZ2Uuc2NzcyddLFxuICBpbXBvcnRzOiBbXG4gICAgSW9uQ29udGVudCxcbiAgICBJb25JbnB1dCxcbiAgICBJb25Db2wsXG4gICAgSW9uVGV4dCxcbiAgICBIZWFkZXJDb21wb25lbnQsXG4gICAgSW9uUm93LFxuICAgIElvbkl0ZW0sXG4gICAgSW9uQnV0dG9uLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIFRyYW5zbGF0ZU1vZHVsZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU2lnbnVwTWluaWZpZWRQYWdlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZCgncGhvbmVJbnB1dCcsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiBmYWxzZSB9KVxuICBwaG9uZUlucHV0ITogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PlxuICBwdWJsaWMgZm9ybTogRm9ybUdyb3VwXG4gIHB1YmxpYyBjdXJyZW50Q291bnRyeTogQ291bnRyeSB8IG51bGwgPSBudWxsXG4gIHB1YmxpYyBuZWVkc1Bob25lTnVtYmVyID0gZmFsc2VcbiAgcHVibGljIG5lZWRzTmFtZSA9IGZhbHNlXG4gIHByaXZhdGUgcHJvZ3JhbTogYW55XG4gIHB1YmxpYyBwYWdlUmVhZHkgPSBmYWxzZVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSxcbiAgICBwcml2YXRlIG1vZGFsQ29udHJvbGxlcjogTW9kYWxDb250cm9sbGVyLFxuICAgIHByaXZhdGUgY291bnRyeVNlcnZpY2U6IENvdW50cnlTZXJ2aWNlLFxuICAgIHByaXZhdGUgcGhvbmVTZXJ2aWNlOiBQaG9uZVV0aWxzU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgY3ljbGlzdHNTZXJ2aWNlOiBDeWNsaXN0c1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBzdG9yYWdlU2VydmljZTogU3RvcmFnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBsb2FkaW5nQ29udHJvbGxlcjogTG9hZGluZ0NvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBhY2NvdW50U2VydmljZTogQWNjb3VudFNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0b2FzdFNlcnZpY2U6IFRvYXN0U2VydmljZSxcbiAgICBwcml2YXRlIGFsZXJ0Q29udHJvbGxlcjogQWxlcnRDb250cm9sbGVyLFxuICAgIHByaXZhdGUgZXJyb3JIYW5kbGVyOiBFcnJvckhhbmRsZXJTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xuICAgICAgdGVsOiBuZXcgRm9ybUNvbnRyb2woJycsIFtdKSxcbiAgICAgIGZpcnN0TmFtZTogbmV3IEZvcm1Db250cm9sKCcnLCBbXSksXG4gICAgICBsYXN0TmFtZTogbmV3IEZvcm1Db250cm9sKCcnLCBbXSksXG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIGlvblZpZXdXaWxsRW50ZXIoKSB7XG4gICAgaWYgKENhcGFjaXRvci5pc05hdGl2ZVBsYXRmb3JtKCkpIHtcbiAgICAgIEJyb3dzZXIuY2xvc2UoKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIG5nT25Jbml0KCkge1xuICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKGFzeW5jIChwYXJhbXMpID0+IHtcbiAgICAgIGNvbnN0IGxvYWRlciA9IGF3YWl0IHRoaXMubG9hZGluZ0NvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgICAgbWVzc2FnZTogdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQoJ2dlbmVyaWMucGxlYXNlX3dhaXQnKSxcbiAgICAgIH0pXG4gICAgICBhd2FpdCBsb2FkZXIucHJlc2VudCgpXG4gICAgICBpZiAocGFyYW1zWydzZXNzaW9uJ10pIHtcbiAgICAgICAgY29uc3Qgc2Vzc2lvbkRhdGEgPSBKU09OLnBhcnNlKGRlY29kZVVSSUNvbXBvbmVudChwYXJhbXNbJ3Nlc3Npb24nXSkpXG4gICAgICAgIHRoaXMuaGFuZGxlU2Vzc2lvbkRhdGEoc2Vzc2lvbkRhdGEpXG4gICAgICAgIGF3YWl0IGxvYWRlci5kaXNtaXNzKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudG9hc3RTZXJ2aWNlLmNyZWF0ZVdpdGhKdXN0TWVzc2FnZShcbiAgICAgICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuaW5zdGFudCgnZXJyb3Iuc2lnbmluX2Vycm9yJyksXG4gICAgICAgICAgVG9hc3RUeXBlLkVycm9yXG4gICAgICAgIClcbiAgICAgICAgYXdhaXQgdGhpcy5hdXRoU2VydmljZS5zaWduT3V0KClcbiAgICAgICAgYXdhaXQgbG9hZGVyLmRpc21pc3MoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGhhbmRsZVNlc3Npb25EYXRhKHNlc3Npb25EYXRhOiBhbnkpIHtcbiAgICBpZiAoXG4gICAgICBzZXNzaW9uRGF0YS5pZFRva2VuICYmXG4gICAgICBzZXNzaW9uRGF0YS5hY2Nlc3NUb2tlbiAmJlxuICAgICAgc2Vzc2lvbkRhdGEucmVmcmVzaFRva2VuXG4gICAgKSB7XG4gICAgICBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmNyZWF0ZVNlc3Npb25Gcm9tVG9rZW5zKHtcbiAgICAgICAgaWRUb2tlbjogc2Vzc2lvbkRhdGEuaWRUb2tlbixcbiAgICAgICAgYWNjZXNzVG9rZW46IHNlc3Npb25EYXRhLmFjY2Vzc1Rva2VuLFxuICAgICAgICByZWZyZXNoVG9rZW46IHNlc3Npb25EYXRhLnJlZnJlc2hUb2tlbixcbiAgICAgIH0pXG4gICAgICBjb25zdCBhdHRyaWJ1dGVzID0gYXdhaXQgZmV0Y2hVc2VyQXR0cmlidXRlcygpXG4gICAgICBpZiAoXG4gICAgICAgIGF0dHJpYnV0ZXMucGhvbmVfbnVtYmVyICYmXG4gICAgICAgIGF0dHJpYnV0ZXMuZW1haWwgJiZcbiAgICAgICAgKGF0dHJpYnV0ZXMubmFtZSB8fCAoYXR0cmlidXRlcy5naXZlbl9uYW1lICYmIGF0dHJpYnV0ZXMuZmFtaWx5X25hbWUpKVxuICAgICAgKSB7XG4gICAgICAgIC8vIENoZWNrIGlmIHdlIGhhdmUgY3VzdG9tOnVzZXJcbiAgICAgICAgaWYgKGF0dHJpYnV0ZXNbJ2N1c3RvbTp1c2VyJ10pIHtcbiAgICAgICAgICBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmNoZWNrQXV0aFN0YXR1cyh0cnVlKVxuICAgICAgICAgIHRoaXMucmVkaXJlY3RVc2VyQmFzZWRPblZhbGlkYXRpb24oKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIElmIHdlIGhhdmUgYWxsIHJlcXVpcmVkIGF0dHJpYnV0ZXMgYnV0IG5vIGN1c3RvbTp1c2VyLCBjcmVhdGUgdGhlIHVzZXIgZGlyZWN0bHlcbiAgICAgICAgICBhd2FpdCB0aGlzLmNyZWF0ZVVzZXIoYXR0cmlidXRlcylcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplRm9ybSgpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG9hc3RTZXJ2aWNlLmNyZWF0ZVdpdGhKdXN0TWVzc2FnZShcbiAgICAgICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQoJ2Vycm9yLnNpZ25pbl9lcnJvcicpLFxuICAgICAgICBUb2FzdFR5cGUuRXJyb3JcbiAgICAgIClcbiAgICAgIGF3YWl0IHRoaXMuYXV0aFNlcnZpY2Uuc2lnbk91dCgpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBpbml0aWFsaXplRm9ybSgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgYXR0cmlidXRlcyA9IGF3YWl0IGZldGNoVXNlckF0dHJpYnV0ZXMoKVxuICAgICAgdGhpcy5uZWVkc1Bob25lTnVtYmVyID0gIWF0dHJpYnV0ZXMucGhvbmVfbnVtYmVyXG5cbiAgICAgIC8vIENoZWNrIGlmIHdlIGhhdmUgZWl0aGVyIEdvb2dsZSdzIG5hbWUgb3IgQXBwbGUncyBnaXZlbl9uYW1lK2ZhbWlseV9uYW1lXG4gICAgICBjb25zdCBoYXNHb29nbGVOYW1lID0gISFhdHRyaWJ1dGVzLm5hbWVcbiAgICAgIGNvbnN0IGhhc0FwcGxlTmFtZXMgPSAhIShhdHRyaWJ1dGVzLmdpdmVuX25hbWUgJiYgYXR0cmlidXRlcy5mYW1pbHlfbmFtZSlcbiAgICAgIHRoaXMubmVlZHNOYW1lID0gIWhhc0dvb2dsZU5hbWUgJiYgIWhhc0FwcGxlTmFtZXNcblxuICAgICAgaWYgKFxuICAgICAgICBDYXBhY2l0b3IuaXNOYXRpdmVQbGF0Zm9ybSgpICYmXG4gICAgICAgICF0aGlzLm5lZWRzTmFtZSAmJlxuICAgICAgICAhdGhpcy5uZWVkc1Bob25lTnVtYmVyXG4gICAgICApIHtcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICAgIH1cbiAgICAgIHRoaXMucGFnZVJlYWR5ID0gdHJ1ZVxuXG4gICAgICBpZiAodGhpcy5uZWVkc1Bob25lTnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZm9ybS5nZXQoJ3RlbCcpPy5zZXRWYWxpZGF0b3JzKFtWYWxpZGF0b3JzLnJlcXVpcmVkXSlcbiAgICAgICAgY29uc3QgY291bnRyaWVzID0gYXdhaXQgdGhpcy5jb3VudHJ5U2VydmljZS5nZXRDb3VudHJpZXMoKVxuICAgICAgICB0aGlzLmN1cnJlbnRDb3VudHJ5ID1cbiAgICAgICAgICAoY291bnRyaWVzIGFzIENvdW50cnlbXSkuZmluZCgoeDogQ291bnRyeSkgPT4geC5jb2RlID09PSAnRlInKSB8fCBudWxsXG5cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudENvdW50cnkgJiYgdGhpcy5waG9uZUlucHV0Py5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgY29uc3QgcGxhY2VIb2xkZXIgPSBhd2FpdCB0aGlzLnBob25lU2VydmljZS5nZXRQaG9uZU51bWJlclBhdHRlcm4oXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRDb3VudHJ5XG4gICAgICAgICAgKVxuICAgICAgICAgIHRoaXMucGhvbmVJbnB1dC5uYXRpdmVFbGVtZW50LnBsYWNlaG9sZGVyID0gcGxhY2VIb2xkZXJcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5uZWVkc05hbWUpIHtcbiAgICAgICAgdGhpcy5mb3JtXG4gICAgICAgICAgLmdldCgnZmlyc3ROYW1lJylcbiAgICAgICAgICA/LnNldFZhbGlkYXRvcnMoW1xuICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICAgICAgICAgIFZhbGlkYXRvcnMucGF0dGVybihcbiAgICAgICAgICAgICAgL15bQS1aYS16XFx1MDBDMC1cXHUwMEZGXSsoPzpbLVxcc11bQS1aYS16XFx1MDBDMC1cXHUwMEZGXSspKiQvXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF0pXG4gICAgICAgIHRoaXMuZm9ybVxuICAgICAgICAgIC5nZXQoJ2xhc3ROYW1lJylcbiAgICAgICAgICA/LnNldFZhbGlkYXRvcnMoW1xuICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICAgICAgICAgIFZhbGlkYXRvcnMucGF0dGVybihcbiAgICAgICAgICAgICAgL15bQS1aYS16XFx1MDBDMC1cXHUwMEZGXSsoPzpbLVxcc11bQS1aYS16XFx1MDBDMC1cXHUwMEZGXSspKiQvXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF0pXG4gICAgICB9XG5cbiAgICAgIC8vIFJldHJpZXZlIHByb2dyYW0gZnJvbSBzdG9yYWdlXG4gICAgICB0aGlzLnByb2dyYW0gPSBhd2FpdCB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldCgncHJvZ3JhbScpXG5cbiAgICAgIHRoaXMuZm9ybS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KClcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihlcnIpXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGFzeW5jIG9wZW5Db3VudHJ5UGFnZSgpIHtcbiAgICBjb25zdCBtb2RhbCA9IGF3YWl0IHRoaXMubW9kYWxDb250cm9sbGVyLmNyZWF0ZSh7XG4gICAgICBjb21wb25lbnQ6IENvdW50cmllc0NvbXBvbmVudCxcbiAgICAgIGNvbXBvbmVudFByb3BzOiB7IGN1cnJlbnRQb3NpdGlvbjogJ0ZSJyB9LFxuICAgICAgaW5pdGlhbEJyZWFrcG9pbnQ6IDAuNzUsXG4gICAgICBicmVha3BvaW50czogWzAsIDAuNzVdLFxuICAgIH0pXG5cbiAgICBtb2RhbC5vbkRpZERpc21pc3MoKS50aGVuKGFzeW5jIChkYXRhKSA9PiB7XG4gICAgICBpZiAoZGF0YT8uZGF0YT8uc2VsZWN0ZWRDb3VudHJ5KSB7XG4gICAgICAgIHRoaXMuY3VycmVudENvdW50cnkgPSBkYXRhLmRhdGEuc2VsZWN0ZWRDb3VudHJ5XG4gICAgICAgIHRoaXMuZm9ybS5jb250cm9sc1sndGVsJ10uc2V0VmFsdWUoJycpXG5cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudENvdW50cnkpIHtcbiAgICAgICAgICBjb25zdCBwbGFjZUhvbGRlciA9IGF3YWl0IHRoaXMucGhvbmVTZXJ2aWNlLmdldFBob25lTnVtYmVyUGF0dGVybihcbiAgICAgICAgICAgIHRoaXMuY3VycmVudENvdW50cnlcbiAgICAgICAgICApXG4gICAgICAgICAgdGhpcy5waG9uZUlucHV0Lm5hdGl2ZUVsZW1lbnQucGxhY2Vob2xkZXIgPSBwbGFjZUhvbGRlclxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIGF3YWl0IG1vZGFsLnByZXNlbnQoKVxuICB9XG5cbiAgcHVibGljIGNoYW5nZVBob25lTnVtYmVyKGV2ZW50OiBFdmVudCkge1xuICAgIGNvbnN0IGlucHV0RWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IGlucHV0RWxlbWVudC52YWx1ZVxuXG4gICAgaWYgKHRoaXMuY3VycmVudENvdW50cnkpIHtcbiAgICAgIGNvbnN0IG51bU91dHB1dCA9IHRoaXMucGhvbmVTZXJ2aWNlLmZvcm1hdFBob25lTnVtYmVyKFxuICAgICAgICBpbnB1dFZhbHVlLFxuICAgICAgICB0aGlzLmN1cnJlbnRDb3VudHJ5XG4gICAgICApXG4gICAgICBpbnB1dEVsZW1lbnQudmFsdWUgPSBpbnB1dFZhbHVlLnN0YXJ0c1dpdGgoJzAnKVxuICAgICAgICA/IGlucHV0VmFsdWUuc3Vic3RyaW5nKDEpXG4gICAgICAgIDogbnVtT3V0cHV0XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGFzeW5jIGNyZWF0ZVVzZXIoYXR0cmlidXRlcz86IGFueSkge1xuICAgIGlmICh0aGlzLmZvcm0udmFsaWQpIHtcbiAgICAgIGNvbnN0IGxvYWRpbmcgPSBhd2FpdCB0aGlzLmxvYWRpbmdDb250cm9sbGVyLmNyZWF0ZSh7XG4gICAgICAgIG1lc3NhZ2U6IHRoaXMudHJhbnNsYXRlU2VydmljZS5pbnN0YW50KCdnZW5lcmljLnBsZWFzZV93YWl0JyksXG4gICAgICB9KVxuICAgICAgYXdhaXQgbG9hZGluZy5wcmVzZW50KClcblxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gSWYgYXR0cmlidXRlcyBhcmUgbm90IHBhc3NlZCwgZmV0Y2ggdGhlbVxuICAgICAgICBpZiAoIWF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICBhdHRyaWJ1dGVzID0gYXdhaXQgZmV0Y2hVc2VyQXR0cmlidXRlcygpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1c2VyQXR0cmlidXRlczogeyBwaG9uZV9udW1iZXI/OiBzdHJpbmc7IG5hbWU/OiBzdHJpbmcgfSA9IHt9XG5cbiAgICAgICAgaWYgKHRoaXMubmVlZHNQaG9uZU51bWJlcikge1xuICAgICAgICAgIHVzZXJBdHRyaWJ1dGVzLnBob25lX251bWJlciA9XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRDb3VudHJ5Py5kaWFsX2NvZGUgK1xuICAgICAgICAgICAgdGhpcy5mb3JtLnZhbHVlLnRlbC5yZXBsYWNlKC9bKCksXFwtLFxcc10vZywgJycpLnJlcGxhY2UoL14wKy8sICcnKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubmVlZHNOYW1lKSB7XG4gICAgICAgICAgdXNlckF0dHJpYnV0ZXMubmFtZSA9XG4gICAgICAgICAgICBgJHt0aGlzLmZvcm0udmFsdWUuZmlyc3ROYW1lfSAke3RoaXMuZm9ybS52YWx1ZS5sYXN0TmFtZX1gLnRyaW0oKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gR2V0IG5hbWUgZnJvbSBlaXRoZXIgR29vZ2xlJ3MgbmFtZSBvciBBcHBsZSdzIGdpdmVuX25hbWUrZmFtaWx5X25hbWVcbiAgICAgICAgbGV0IGZ1bGxOYW1lID0gYXR0cmlidXRlcy5uYW1lXG4gICAgICAgIGlmICghZnVsbE5hbWUgJiYgYXR0cmlidXRlcy5naXZlbl9uYW1lICYmIGF0dHJpYnV0ZXMuZmFtaWx5X25hbWUpIHtcbiAgICAgICAgICBmdWxsTmFtZSA9IGAke2F0dHJpYnV0ZXMuZ2l2ZW5fbmFtZX0gJHthdHRyaWJ1dGVzLmZhbWlseV9uYW1lfWAudHJpbSgpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubmVlZHNOYW1lKSB7XG4gICAgICAgICAgZnVsbE5hbWUgPVxuICAgICAgICAgICAgYCR7dGhpcy5mb3JtLnZhbHVlLmZpcnN0TmFtZX0gJHt0aGlzLmZvcm0udmFsdWUubGFzdE5hbWV9YC50cmltKClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENyZWF0ZSBjeWNsaXN0IHVzaW5nIEN5Y2xpc3RzU2VydmljZVxuICAgICAgICBhd2FpdCBmaXJzdFZhbHVlRnJvbShcbiAgICAgICAgICB0aGlzLmN5Y2xpc3RzU2VydmljZS5jcmVhdGVDeWNsaXN0KHtcbiAgICAgICAgICAgIHByb2dyYW06IGVudmlyb25tZW50LnByb2dyYW0sXG4gICAgICAgICAgICBib2R5OiB7XG4gICAgICAgICAgICAgIGVtYWlsOiB0aGlzLmVuc3VyZU5vbkVtcHR5U3RyaW5nKGF0dHJpYnV0ZXMuZW1haWwsICdFbWFpbCcpLFxuICAgICAgICAgICAgICBjb2duaXRvOiB0aGlzLmVuc3VyZU5vbkVtcHR5U3RyaW5nKGF0dHJpYnV0ZXMuc3ViLCAnQ29nbml0byBJRCcpLFxuICAgICAgICAgICAgICBuYW1lOiB0aGlzLmVuc3VyZU5vbkVtcHR5U3RyaW5nKGZ1bGxOYW1lLCAnTmFtZScpLFxuICAgICAgICAgICAgICBwaG9uZV9udW1iZXI6IHRoaXMuZW5zdXJlTm9uRW1wdHlTdHJpbmcoXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcy5waG9uZV9udW1iZXIgfHwgdXNlckF0dHJpYnV0ZXMucGhvbmVfbnVtYmVyLFxuICAgICAgICAgICAgICAgICdQaG9uZSBudW1iZXInXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIHJvbGU6ICdjeWNsaXN0JyxcbiAgICAgICAgICAgICAgcHJvZ3JhbTogZW52aXJvbm1lbnQucHJvZ3JhbSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmNoZWNrQXV0aFN0YXR1cyh0cnVlKVxuICAgICAgICBhd2FpdCBsb2FkaW5nLmRpc21pc3MoKVxuICAgICAgICB0aGlzLnJlZGlyZWN0VXNlckJhc2VkT25WYWxpZGF0aW9uKClcbiAgICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgYXdhaXQgbG9hZGluZy5kaXNtaXNzKClcbiAgICAgICAgaWYgKGVycm9yLmVycm9yLnRpdGxlID09PSAncGhvbmVfbnVtYmVyX2FscmVhZHlfdXNlZCcpIHtcbiAgICAgICAgICBhd2FpdCB0aGlzLnByZXNlbnRQaG9uZU51bWJlckFscmVhZHlFeGlzdEFsZXJ0KClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnByZXNlbnRHZW5lcmFsRXJyb3JBbGVydChlcnJvcilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgcHJlc2VudFBob25lTnVtYmVyQWxyZWFkeUV4aXN0QWxlcnQoKSB7XG4gICAgY29uc3QgcGhvbmVOdW1iZXIgPVxuICAgICAgdGhpcy5jdXJyZW50Q291bnRyeT8uZGlhbF9jb2RlICtcbiAgICAgIHRoaXMuZm9ybS52YWx1ZS50ZWwucmVwbGFjZSgvWygpLFxcLSxcXHNdL2csICcnKS5yZXBsYWNlKC9eMCsvLCAnJylcblxuICAgIGNvbnN0IGFsZXJ0ID0gYXdhaXQgdGhpcy5hbGVydENvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgIGhlYWRlcjogdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQoJ2F1dGguZXhpc3RpbmdfYWNjb3VudC50aXRsZScpLFxuICAgICAgbWVzc2FnZTogdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQoJ2F1dGguZXhpc3RpbmdfYWNjb3VudC5tZXNzYWdlJyksXG4gICAgICBidXR0b25zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuaW5zdGFudChcbiAgICAgICAgICAgICdhdXRoLmV4aXN0aW5nX2FjY291bnQuZm9yZ290X3Bhc3N3b3JkJ1xuICAgICAgICAgICksXG4gICAgICAgICAgaGFuZGxlcjogYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgYXdhaXQgZGVsZXRlVXNlcigpXG4gICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2VudGVyLXBob25lJ10pXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLnNpZ25PdXQoKVxuICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9lbnRlci1waG9uZSddKVxuICAgICAgICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuaW5zdGFudCgnYXV0aC5leGlzdGluZ19hY2NvdW50LnNpZ25pbicpLFxuICAgICAgICAgIGhhbmRsZXI6IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGF3YWl0IGRlbGV0ZVVzZXIoKVxuICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9zaWduaW4nXSwge1xuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7IHBob25lOiBwaG9uZU51bWJlciB9LFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgYXdhaXQgdGhpcy5hdXRoU2VydmljZS5zaWduT3V0KClcbiAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc2lnbmluJ10sIHtcbiAgICAgICAgICAgICAgICBxdWVyeVBhcmFtczogeyBwaG9uZTogcGhvbmVOdW1iZXIgfSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KVxuICAgIGF3YWl0IGFsZXJ0LnByZXNlbnQoKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBwcmVzZW50R2VuZXJhbEVycm9yQWxlcnQoZXJyb3I6IGFueSkge1xuICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKGVycm9yKVxuICAgIC8vIFJlc2V0IHRoZSBmb3JtIGZpZWxkcyB0aGF0IGNhdXNlZCB0aGUgZXJyb3JcbiAgICBpZiAodGhpcy5uZWVkc1Bob25lTnVtYmVyKSB7XG4gICAgICB0aGlzLmZvcm0uZ2V0KCd0ZWwnKT8ucmVzZXQoKVxuICAgIH1cbiAgICBpZiAodGhpcy5uZWVkc05hbWUpIHtcbiAgICAgIHRoaXMuZm9ybS5nZXQoJ2ZpcnN0TmFtZScpPy5yZXNldCgpXG4gICAgICB0aGlzLmZvcm0uZ2V0KCdsYXN0TmFtZScpPy5yZXNldCgpXG4gICAgfVxuXG4gICAgY29uc3QgYWxlcnQgPSBhd2FpdCB0aGlzLmFsZXJ0Q29udHJvbGxlci5jcmVhdGUoe1xuICAgICAgaGVhZGVyOiB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuaW5zdGFudCgnZ2VuZXJpYy5lcnJvcicpLFxuICAgICAgbWVzc2FnZTogdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQoJ2dlbmVyaWMud2hhdF90b19kbycpLFxuICAgICAgYnV0dG9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQoJ2dlbmVyaWMuY2xvc2UnKSxcbiAgICAgICAgICByb2xlOiAnY2FuY2VsJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IHRoaXMudHJhbnNsYXRlU2VydmljZS5pbnN0YW50KCdnZW5lcmljLmdvX3RvX2hvbWUnKSxcbiAgICAgICAgICBoYW5kbGVyOiBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBhd2FpdCBkZWxldGVVc2VyKClcbiAgICAgICAgICAgICAgYXdhaXQgdGhpcy5hdXRoU2VydmljZS5zaWduT3V0KClcbiAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc2lnbmluJ10pXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZHVyaW5nIGNsZWFudXA6JywgZXJyKVxuICAgICAgICAgICAgICBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLnNpZ25PdXQoKVxuICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9zaWduaW4nXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KVxuICAgIGF3YWl0IGFsZXJ0LnByZXNlbnQoKVxuICB9XG5cbiAgcHJpdmF0ZSBlbnN1cmVOb25FbXB0eVN0cmluZyh2YWx1ZTogYW55LCBmaWVsZE5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHZhbHVlID09IG51bGwgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7ZmllbGROYW1lfSBpcyByZXF1aXJlZCBidXQgd2FzIG5vdCBwcm92aWRlZGApXG4gICAgfVxuICAgIHJldHVybiBTdHJpbmcodmFsdWUpXG4gIH1cblxuICByZWRpcmVjdFVzZXJCYXNlZE9uVmFsaWRhdGlvbigpIHtcbiAgICBjb25zdCBjeWNsaXN0U3RhdGUgPSB0aGlzLmFjY291bnRTZXJ2aWNlLmN5Y2xpc3RTdGF0ZSgpXG4gICAgLy8gSGFuZGxlIGV4dGVybmFsIHVzZXJzIGZpcnN0IC0gcm9sZSB0YWtlcyBwcmlvcml0eVxuICAgIGlmIChcbiAgICAgICdjeWNsaXN0JyBpbiBjeWNsaXN0U3RhdGUgJiZcbiAgICAgIChjeWNsaXN0U3RhdGUuY3ljbGlzdC5yb2xlID09ICdndWVzdCcgfHxcbiAgICAgICAgY3ljbGlzdFN0YXRlLmN5Y2xpc3QucmVnaXN0cmF0aW9ucz8uZGF0YT8uWzBdPy5yb2xlID09ICdndWVzdCcpXG4gICAgKSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy92ZXJpZnktcGhvbmUnXSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEhhbmRsZSByZWd1bGFyIGN5Y2xpc3RzIGJhc2VkIG9uIHN0YXRlXG4gICAgaWYgKGN5Y2xpc3RTdGF0ZS5zdGF0ZSA9PT0gJ2FjdGl2ZScpIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL21hcCddKVxuICAgIH0gZWxzZSBpZiAoY3ljbGlzdFN0YXRlLnN0YXRlID09PSAndW5jb25maXJtZWQnKSB7XG4gICAgICBpZiAodGhpcy5hY2NvdW50U2VydmljZS5oYXNNaXNzaW5nUGF5bWVudE1ldGhvZE9yQ2d1KCkpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvcGF5bWVudC1tZXRob2QnXSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3ZlcmlmeS1waG9uZSddKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9zaWduaW4nXSlcbiAgICB9XG4gIH1cbn1cbiIsICI8bmctY29udGFpbmVyICpuZ0lmPVwicGFnZVJlYWR5XCI+XG4gIDxhcHAtaGVhZGVyPjwvYXBwLWhlYWRlcj5cbiAgPGlvbi1jb250ZW50IGNsYXNzPVwiaW9uLXBhZGRpbmdcIj5cbiAgICA8Zm9ybSAobmdTdWJtaXQpPVwiY3JlYXRlVXNlcigpXCIgW2Zvcm1Hcm91cF09XCJmb3JtXCI+XG4gICAgICA8aW9uLXJvdyBjbGFzcz1cImlvbi1qdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgIDxpb24tY29sIHNpemU9XCIxMlwiIHNpemUtbWQ9XCI2XCIgc2l6ZS1sZz1cIjRcIj5cbiAgICAgICAgICA8aDE+e3sgJ3NpZ251cC5jb21wbGV0ZV9wcm9maWxlJyB8IHRyYW5zbGF0ZSB9fTwvaDE+XG4gICAgICAgIDwvaW9uLWNvbD5cbiAgICAgIDwvaW9uLXJvdz5cblxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm5lZWRzUGhvbmVOdW1iZXJcIj5cbiAgICAgICAgPGlvbi1yb3cgY2xhc3M9XCJpb24tanVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgIDxpb24tY29sIHNpemU9XCIxMlwiIHNpemUtbWQ9XCI2XCIgc2l6ZS1sZz1cIjRcIj5cbiAgICAgICAgICAgIDxpb24taXRlbSBjbGFzcz1cImlvbi1uby1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzcz1cImVjbC1waG9uZV9fY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgICAqbmdJZj1cImN1cnJlbnRDb3VudHJ5XCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwib3BlbkNvdW50cnlQYWdlKClcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGltZyBbc3JjXT1cImN1cnJlbnRDb3VudHJ5LmltZ1wiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+e3sgY3VycmVudENvdW50cnkuZGlhbF9jb2RlIH19PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGlvbi1pbnB1dFxuICAgICAgICAgICAgICAgICNwaG9uZUlucHV0XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7eyAnZ2VuZXJpYy5waG9uZV9udW1iZXInIHwgdHJhbnNsYXRlIH19XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGVsXCJcbiAgICAgICAgICAgICAgICBpbnB1dG1vZGU9XCJ0ZWxcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJ0ZWxcIlxuICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInRlbFwiXG4gICAgICAgICAgICAgICAgKGlvbkNoYW5nZSk9XCJjaGFuZ2VQaG9uZU51bWJlcigkZXZlbnQpXCJcbiAgICAgICAgICAgICAgPjwvaW9uLWlucHV0PlxuICAgICAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgICAgIDxpb24tdGV4dFxuICAgICAgICAgICAgICBjb2xvcj1cImRhbmdlclwiXG4gICAgICAgICAgICAgICpuZ0lmPVwiZm9ybS5nZXQoJ3RlbCcpPy50b3VjaGVkICYmIGZvcm0uZ2V0KCd0ZWwnKT8uaW52YWxpZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzbWFsbCAqbmdJZj1cImZvcm0uZ2V0KCd0ZWwnKT8uZXJyb3JzPy5bJ3JlcXVpcmVkJ11cIj5cbiAgICAgICAgICAgICAgICB7eyAnZXJyb3IucGhvbmVfcmVxdWlyZWQnIHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICA8L2lvbi10ZXh0PlxuICAgICAgICAgIDwvaW9uLWNvbD5cbiAgICAgICAgPC9pb24tcm93PlxuICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJuZWVkc05hbWVcIj5cbiAgICAgICAgPGlvbi1yb3cgY2xhc3M9XCJpb24tanVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgIDxpb24tY29sIHNpemU9XCIxMlwiIHNpemUtbWQ9XCI2XCIgc2l6ZS1sZz1cIjRcIj5cbiAgICAgICAgICAgIDxpb24taXRlbSBmaWxsPVwib3V0bGluZVwiIGNsYXNzPVwiaW9uLW5vLXBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgPGlvbi1pbnB1dFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3sgJ2dlbmVyaWMuZmlyc3RfbmFtZScgfCB0cmFuc2xhdGUgfX1cIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZmlyc3ROYW1lXCJcbiAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJmaXJzdE5hbWVcIlxuICAgICAgICAgICAgICA+PC9pb24taW5wdXQ+XG4gICAgICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgICAgICAgPGlvbi10ZXh0XG4gICAgICAgICAgICAgIGNvbG9yPVwiZGFuZ2VyXCJcbiAgICAgICAgICAgICAgKm5nSWY9XCJmb3JtLmdldCgnZmlyc3ROYW1lJyk/LnRvdWNoZWQgJiYgZm9ybS5nZXQoJ2ZpcnN0TmFtZScpPy5pbnZhbGlkXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNtYWxsICpuZ0lmPVwiZm9ybS5nZXQoJ2ZpcnN0TmFtZScpPy5lcnJvcnM/LlsncmVxdWlyZWQnXVwiPlxuICAgICAgICAgICAgICAgIHt7ICdlcnJvci5maXJzdF9uYW1lX3JlcXVpcmVkJyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgPC9pb24tdGV4dD5cbiAgICAgICAgICA8L2lvbi1jb2w+XG4gICAgICAgIDwvaW9uLXJvdz5cbiAgICAgICAgPGlvbi1yb3cgY2xhc3M9XCJpb24tanVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgIDxpb24tY29sIHNpemU9XCIxMlwiIHNpemUtbWQ9XCI2XCIgc2l6ZS1sZz1cIjRcIj5cbiAgICAgICAgICAgIDxpb24taXRlbSBmaWxsPVwib3V0bGluZVwiIGNsYXNzPVwiaW9uLW5vLXBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgPGlvbi1pbnB1dFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3sgJ2dlbmVyaWMubGFzdF9uYW1lJyB8IHRyYW5zbGF0ZSB9fVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJsYXN0TmFtZVwiXG4gICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICA+PC9pb24taW5wdXQ+XG4gICAgICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgICAgICAgPGlvbi10ZXh0XG4gICAgICAgICAgICAgIGNvbG9yPVwiZGFuZ2VyXCJcbiAgICAgICAgICAgICAgKm5nSWY9XCJmb3JtLmdldCgnbGFzdE5hbWUnKT8udG91Y2hlZCAmJiBmb3JtLmdldCgnbGFzdE5hbWUnKT8uaW52YWxpZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzbWFsbCAqbmdJZj1cImZvcm0uZ2V0KCdsYXN0TmFtZScpPy5lcnJvcnM/LlsncmVxdWlyZWQnXVwiPlxuICAgICAgICAgICAgICAgIHt7ICdlcnJvci5sYXN0X25hbWVfcmVxdWlyZWQnIHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICA8L2lvbi10ZXh0PlxuICAgICAgICAgIDwvaW9uLWNvbD5cbiAgICAgICAgPC9pb24tcm93PlxuICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgIDxpb24tcm93IGNsYXNzPVwiaW9uLWp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgPGlvbi1jb2wgc2l6ZT1cIjEyXCIgc2l6ZS1tZD1cIjZcIiBzaXplLWxnPVwiNFwiPlxuICAgICAgICAgIDxpb24tYnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIGV4cGFuZD1cImJsb2NrXCJcbiAgICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cImZvcm0uaW52YWxpZFwiXG4gICAgICAgICAgICBjbGFzcz1cImlvbi1tYXJnaW4tdG9wXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7eyAnZ2VuZXJpYy5jb250aW51ZScgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgICA8L2lvbi1idXR0b24+XG4gICAgICAgIDwvaW9uLWNvbD5cbiAgICAgIDwvaW9uLXJvdz5cbiAgICA8L2Zvcm0+XG4gIDwvaW9uLWNvbnRlbnQ+XG48L25nLWNvbnRhaW5lcj5cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
