import {
  WalletService
} from "./chunk-5GXIE7IT.js";
import {
  AbonnementWrapperService
} from "./chunk-HCOOL2GW.js";
import {
  HeaderComponent
} from "./chunk-AVAJ3QHV.js";
import "./chunk-K2AWDLYV.js";
import {
  IonCol,
  IonContent,
  IonRow,
  IonicModule,
  LoadingController
} from "./chunk-Y4K6NO5T.js";
import {
  AuthService
} from "./chunk-WJQU3GMM.js";
import "./chunk-CHFOG66O.js";
import "./chunk-RAVV2QIY.js";
import "./chunk-T6WE2PS5.js";
import {
  AccountService,
  CyclistsService,
  SubscriptionProcessService
} from "./chunk-XK4I5MHM.js";
import "./chunk-GVYZRG6X.js";
import "./chunk-FOJAXRYS.js";
import {
  confirmUserAttribute,
  sendUserAttributeVerificationCode
} from "./chunk-Y7HI6USV.js";
import {
  ErrorHandlerService
} from "./chunk-SARQRLZR.js";
import "./chunk-3E6DEK7U.js";
import "./chunk-U6SJAXLK.js";
import {
  AlertController,
  CommonModule,
  Component,
  FormsModule,
  NgForOf,
  NgIf,
  Router,
  RouterModule,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  ViewChild,
  firstValueFrom,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
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
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-UESUV5PM.js";

// src/app/pages/auth/verify-phone/verify-phone.page.ts
var _c0 = ["otpInput"];
var _c1 = (a0) => ({ phone: a0 });
function VerifyPhonePage_div_16_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 15);
  }
}
function VerifyPhonePage_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275listener("click", function VerifyPhonePage_div_16_Template_div_click_0_listener() {
      const i_r3 = \u0275\u0275restoreView(_r2).index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onSlotClick(i_r3));
    });
    \u0275\u0275elementStart(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, VerifyPhonePage_div_16_div_3_Template, 1, 0, "div", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const slot_r5 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", i_r3 === ctx_r3.activeSlotIndex);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(slot_r5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", i_r3 === ctx_r3.activeSlotIndex);
  }
}
function VerifyPhonePage_div_18_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 15);
  }
}
function VerifyPhonePage_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275listener("click", function VerifyPhonePage_div_18_Template_div_click_0_listener() {
      const i_r7 = \u0275\u0275restoreView(_r6).index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onSlotClick(i_r7 + 3));
    });
    \u0275\u0275elementStart(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, VerifyPhonePage_div_18_div_3_Template, 1, 0, "div", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const slot_r8 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", i_r7 + 3 === ctx_r3.activeSlotIndex);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(slot_r8);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", i_r7 + 3 === ctx_r3.activeSlotIndex);
  }
}
function VerifyPhonePage_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", ctx_r3.verificationResendTimer, "s) ");
  }
}
var _VerifyPhonePage = class _VerifyPhonePage {
  constructor(loadingController, translateService, loadingCtrl, translate, cyclistService, AbonnementWrapperService2, router, accountService, alertController, authService, subscriptionProcess, walletService, errorHandler) {
    this.loadingController = loadingController;
    this.translateService = translateService;
    this.loadingCtrl = loadingCtrl;
    this.translate = translate;
    this.cyclistService = cyclistService;
    this.AbonnementWrapperService = AbonnementWrapperService2;
    this.router = router;
    this.accountService = accountService;
    this.alertController = alertController;
    this.authService = authService;
    this.subscriptionProcess = subscriptionProcess;
    this.walletService = walletService;
    this.errorHandler = errorHandler;
    this.allowVerificationCodeResend = false;
    this.verificationResendTimer = 20;
    this.verificationCode = "";
    this.slots = new Array(6).fill("");
    this.activeSlotIndex = 0;
    this.userPhoneNumber = "";
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.subscriptionProcess.updateStep("phone");
      yield this.sendVerificationCode();
      this.userPhoneNumber = yield this.authService.getUserPhoneNumber();
    });
  }
  startResendTimer() {
    this.allowVerificationCodeResend = false;
    this.verificationResendTimer = 20;
    if (this.countdownInterval)
      clearInterval(this.countdownInterval);
    this.countdownInterval = setInterval(() => {
      if (this.verificationResendTimer > 0) {
        this.verificationResendTimer--;
      } else {
        this.allowVerificationCodeResend = true;
        clearInterval(this.countdownInterval);
      }
    }, 1e3);
  }
  sendVerificationCode() {
    return __async(this, null, function* () {
      this.startResendTimer();
      try {
        yield sendUserAttributeVerificationCode({
          userAttributeKey: "phone_number"
        });
      } catch (error) {
        this.errorHandler.handleError(error);
      }
    });
  }
  deleteAccount() {
    return __async(this, null, function* () {
      const alert = yield this.alertController.create({
        header: this.translateService.instant("verify_phone.delete_account"),
        message: this.translateService.instant("verify_phone.delete_account_message"),
        buttons: [
          { text: "Annuler", role: "cancel" },
          {
            text: "Supprimer",
            cssClass: "text-danger",
            handler: () => __async(this, null, function* () {
              try {
                yield this.accountService.deleteAccount();
                yield this.authService.signOut();
              } catch (err) {
                this.errorHandler.handleError(err);
              }
            })
          }
        ]
      });
      yield alert.present();
    });
  }
  onInput(event) {
    const input = event.target;
    const value = input.value.replace(/[^0-9]/g, "");
    if (value.length === 6) {
      this.slots = value.split("");
      this.verificationCode = value;
      this.activeSlotIndex = 5;
      this.verifyCode();
      return;
    }
    const lastChar = value[value.length - 1];
    if (lastChar) {
      this.slots[this.activeSlotIndex] = lastChar;
      if (this.activeSlotIndex < 5) {
        this.activeSlotIndex++;
      }
    }
    this.verificationCode = this.slots.join("");
    input.value = this.verificationCode;
  }
  onKeyDown(event) {
    switch (event.key) {
      case "ArrowLeft":
        event.preventDefault();
        this.activeSlotIndex = Math.max(0, this.activeSlotIndex - 1);
        break;
      case "ArrowRight":
        event.preventDefault();
        this.activeSlotIndex = Math.min(5, this.activeSlotIndex + 1);
        break;
      case "Backspace":
        event.preventDefault();
        if (this.slots[this.activeSlotIndex]) {
          this.slots[this.activeSlotIndex] = "";
          this.verificationCode = this.slots.join("");
        } else if (this.activeSlotIndex > 0) {
          this.activeSlotIndex--;
          this.slots[this.activeSlotIndex] = "";
          this.verificationCode = this.slots.join("");
        }
        break;
      default:
        if (/^\d$/.test(event.key)) {
          event.preventDefault();
          this.slots[this.activeSlotIndex] = event.key;
          this.verificationCode = this.slots.join("");
          if (this.activeSlotIndex < 5) {
            this.activeSlotIndex++;
          }
          if (this.verificationCode.length === 6) {
            this.verifyCode();
          }
        }
    }
    this.otpInput.nativeElement.value = this.verificationCode;
    this.setInputCursor(this.activeSlotIndex);
  }
  onSlotClick(index) {
    this.activeSlotIndex = index;
    this.otpInput.nativeElement.focus();
    this.setInputCursor(index);
  }
  setInputCursor(position) {
    requestAnimationFrame(() => {
      this.otpInput.nativeElement.setSelectionRange(position, position);
    });
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.otpInput.nativeElement.focus();
    }, 0);
  }
  verifyCode() {
    return __async(this, null, function* () {
      var _a, _b, _c;
      if (this.verificationCode.length !== 6)
        return;
      const loading = yield this.loadingController.create({
        message: this.translateService.instant("verify_phone.verifying")
      });
      try {
        yield loading.present();
        yield confirmUserAttribute({
          userAttributeKey: "phone_number",
          confirmationCode: this.verificationCode
        });
        yield new Promise((resolve, reject) => {
          this.cyclistService.confirmCyclist().subscribe({
            next: () => {
              const cyclistState2 = this.accountService.cyclistState();
              if ("cyclist" in cyclistState2) {
                const updatedCyclist = __spreadProps(__spreadValues({}, cyclistState2.cyclist), {
                  status: "active"
                });
                this.accountService.checkCyclistAccount(updatedCyclist);
                if (this.accountService.hasBlockedReason("Account not confirmed")) {
                  this.accountService.removeBlockedReason("Account not confirmed");
                }
              }
              resolve();
            },
            error: reject
          });
        });
        loading.message = this.translateService.instant("verify_phone.confirming_cyclist");
        const cyclistState = this.accountService.cyclistState();
        if ("cyclist" in cyclistState && (cyclistState.cyclist.role == "guest" || ((_c = (_b = (_a = cyclistState.cyclist.registrations) == null ? void 0 : _a.data) == null ? void 0 : _b[0]) == null ? void 0 : _c.role) == "guest")) {
          yield loading.dismiss();
          yield this.router.navigate(["/account/settings/cgu"], {
            queryParams: { nextUrl: "/renting" },
            replaceUrl: true
          });
          return;
        }
        yield loading.dismiss();
        if (yield this.subscriptionProcess.hasForfaitSelected()) {
          const payload = yield this.subscriptionProcess.getCreateAbonnementPayload();
          if (payload) {
            yield this.createAbonnement(payload);
            yield this.subscriptionProcess.clearProcess();
          }
          yield this.router.navigate(["/abo-congrats"]);
        } else {
          const process = yield firstValueFrom(this.subscriptionProcess.getCurrentProcess());
          if (process == null ? void 0 : process.reduction) {
            yield this.walletService.applyCodePromo(process.reduction);
          }
          yield this.subscriptionProcess.clearProcess();
          yield this.router.navigate(["/abo-congrats"]);
        }
      } catch (error) {
        yield loading.dismiss();
        this.errorHandler.handleError(error);
      }
    });
  }
  createAbonnement(payload) {
    return __async(this, null, function* () {
      const loading = yield this.loadingCtrl.create({
        message: this.translate.instant("subscription.creation.loading")
      });
      yield loading.present();
      yield this.AbonnementWrapperService.createAbonnement(payload).finally(() => __async(this, null, function* () {
        yield loading.dismiss();
      }));
    });
  }
  ngOnDestroy() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }
};
_VerifyPhonePage.\u0275fac = function VerifyPhonePage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VerifyPhonePage)(\u0275\u0275directiveInject(LoadingController), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(LoadingController), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(CyclistsService), \u0275\u0275directiveInject(AbonnementWrapperService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AccountService), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(SubscriptionProcessService), \u0275\u0275directiveInject(WalletService), \u0275\u0275directiveInject(ErrorHandlerService));
};
_VerifyPhonePage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VerifyPhonePage, selectors: [["app-verify-phone"]], viewQuery: function VerifyPhonePage_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.otpInput = _t.first);
  }
}, decls: 33, vars: 27, consts: [["otpInput", ""], [1, "ion-padding"], [1, "ion-justify-content-center"], ["size", "12", "size-md", "8", "size-lg", "6"], [1, "ecl-otp-container"], ["type", "text", "inputmode", "numeric", "autocomplete", "one-time-code", 1, "ecl-otp-input", 3, "input", "keydown", "value"], [1, "ion-text-center"], [1, "ion-justify-content-center", "ion-align-items-center", 2, "display", "inline-flex"], [1, "ion-align-items-center", 2, "display", "flex", "gap", "4px"], ["class", "ecl-otp-slot ion-align-items-center ion-justify-content-center", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "ion-margin-top"], [3, "click"], [4, "ngIf"], [1, "ecl-otp-slot", "ion-align-items-center", "ion-justify-content-center", 3, "click"], ["class", "ecl-otp-caret", 4, "ngIf"], [1, "ecl-otp-caret"]], template: function VerifyPhonePage_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "app-header");
    \u0275\u0275elementStart(1, "ion-content", 1)(2, "ion-row", 2)(3, "ion-col", 3)(4, "h2");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 4)(11, "input", 5, 0);
    \u0275\u0275listener("input", function VerifyPhonePage_Template_input_input_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onInput($event));
    })("keydown", function VerifyPhonePage_Template_input_keydown_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onKeyDown($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 6)(14, "div", 7)(15, "div", 8);
    \u0275\u0275template(16, VerifyPhonePage_div_16_Template, 4, 4, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 8);
    \u0275\u0275template(18, VerifyPhonePage_div_18_Template, 4, 4, "div", 9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(19, "p", 10);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementStart(22, "a", 11);
    \u0275\u0275listener("click", function VerifyPhonePage_Template_a_click_22_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.sendVerificationCode());
    });
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275template(25, VerifyPhonePage_span_25_Template, 2, 1, "span", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "p");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275element(29, "br");
    \u0275\u0275elementStart(30, "a", 11);
    \u0275\u0275listener("click", function VerifyPhonePage_Template_a_click_30_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.deleteAccount());
    });
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 12, "verify_phone.subtitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 14, "verify_phone.instructions", \u0275\u0275pureFunction1(25, _c1, ctx.userPhoneNumber)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx.verificationCode);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx.slots.slice(0, 3));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx.slots.slice(3));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 17, "verify_phone.resend_code"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("disabled", !ctx.allowVerificationCodeResend);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 19, "verify_phone.resend_code_link"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx.allowVerificationCodeResend);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 21, "verify_phone.phone_error"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 23, "verify_phone.signup_again"), " ");
  }
}, dependencies: [
  IonicModule,
  IonCol,
  IonContent,
  IonRow,
  CommonModule,
  NgForOf,
  NgIf,
  FormsModule,
  TranslateModule,
  TranslatePipe,
  HeaderComponent,
  RouterModule
], styles: ["\n\na[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-decoration: underline;\n}\na.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n/*# sourceMappingURL=verify-phone.page.css.map */"] });
var VerifyPhonePage = _VerifyPhonePage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VerifyPhonePage, [{
    type: Component,
    args: [{ selector: "app-verify-phone", imports: [
      IonicModule,
      CommonModule,
      FormsModule,
      TranslateModule,
      HeaderComponent,
      RouterModule
    ], template: `<app-header></app-header>
<ion-content class="ion-padding">
  <ion-row class="ion-justify-content-center">
    <ion-col size="12" size-md="8" size-lg="6">
      <h2>{{ 'verify_phone.subtitle' | translate }}</h2>
      <p>
        {{ 'verify_phone.instructions' | translate: { phone: userPhoneNumber }
        }}
      </p>

      <div class="ecl-otp-container">
        <!-- Hidden actual input -->
        <input
          #otpInput
          type="text"
          inputmode="numeric"
          autocomplete="one-time-code"
          class="ecl-otp-input"
          [value]="verificationCode"
          (input)="onInput($event)"
          (keydown)="onKeyDown($event)"
        />

        <!-- Visual slots -->
        <div class="ion-text-center">
          <div
            class="ion-justify-content-center ion-align-items-center"
            style="display: inline-flex"
          >
            <!-- First group -->
            <div class="ion-align-items-center" style="display: flex; gap: 4px">
              <div
                *ngFor="let slot of slots.slice(0, 3); let i = index"
                class="ecl-otp-slot ion-align-items-center ion-justify-content-center"
                [class.active]="i === activeSlotIndex"
                (click)="onSlotClick(i)"
              >
                <div>{{ slot }}</div>
                <div *ngIf="i === activeSlotIndex" class="ecl-otp-caret"></div>
              </div>
            </div>
            <!-- Second group -->
            <div class="ion-align-items-center" style="display: flex; gap: 4px">
              <div
                *ngFor="let slot of slots.slice(3); let i = index"
                class="ecl-otp-slot ion-align-items-center ion-justify-content-center"
                [class.active]="i + 3 === activeSlotIndex"
                (click)="onSlotClick(i + 3)"
              >
                <div>{{ slot }}</div>
                <div
                  *ngIf="i + 3 === activeSlotIndex"
                  class="ecl-otp-caret"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p class="ion-margin-top">
        {{ 'verify_phone.resend_code' | translate }}
        <a
          [class.disabled]="!allowVerificationCodeResend"
          (click)="sendVerificationCode()"
        >
          {{ 'verify_phone.resend_code_link' | translate }}
          <span *ngIf="!allowVerificationCodeResend">
            ({{ verificationResendTimer }}s)
          </span>
        </a>
      </p>

      <p>
        {{ 'verify_phone.phone_error' | translate }}
        <br />
        <a (click)="deleteAccount()">
          {{ 'verify_phone.signup_again' | translate }}
        </a>
      </p>
    </ion-col>
  </ion-row>
</ion-content>
`, styles: ["/* src/app/pages/auth/verify-phone/verify-phone.page.scss */\na {\n  cursor: pointer;\n  text-decoration: underline;\n}\na.disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n/*# sourceMappingURL=verify-phone.page.css.map */\n"] }]
  }], () => [{ type: LoadingController }, { type: TranslateService }, { type: LoadingController }, { type: TranslateService }, { type: CyclistsService }, { type: AbonnementWrapperService }, { type: Router }, { type: AccountService }, { type: AlertController }, { type: AuthService }, { type: SubscriptionProcessService }, { type: WalletService }, { type: ErrorHandlerService }], { otpInput: [{
    type: ViewChild,
    args: ["otpInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VerifyPhonePage, { className: "VerifyPhonePage", filePath: "src/app/pages/auth/verify-phone/verify-phone.page.ts", lineNumber: 45 });
})();
export {
  VerifyPhonePage
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wYWdlcy9hdXRoL3ZlcmlmeS1waG9uZS92ZXJpZnktcGhvbmUucGFnZS50cyIsICJzcmMvYXBwL3BhZ2VzL2F1dGgvdmVyaWZ5LXBob25lL3ZlcmlmeS1waG9uZS5wYWdlLmh0bWwiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgQWZ0ZXJWaWV3SW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IFJvdXRlciwgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xuaW1wb3J0IHsgTG9hZGluZ0NvbnRyb2xsZXIsIElvbmljTW9kdWxlIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInXG5pbXBvcnQge1xuICBjb25maXJtVXNlckF0dHJpYnV0ZSxcbiAgc2VuZFVzZXJBdHRyaWJ1dGVWZXJpZmljYXRpb25Db2RlLFxufSBmcm9tICdhd3MtYW1wbGlmeS9hdXRoJ1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlLCBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSdcbmltcG9ydCB7IEFsZXJ0Q29udHJvbGxlciB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyL3N0YW5kYWxvbmUnXG5pbXBvcnQgeyBDeWNsaXN0c1NlcnZpY2UgfSBmcm9tICdzcmMvYXBpLWN5Y2xpc3QnXG5pbXBvcnQge1xuICBBYm9ubmVtZW50V3JhcHBlclNlcnZpY2UsXG4gIENyZWF0ZUFib25uZW1lbnRQYXJhbXMsXG59IGZyb20gJ3NyYy9hcHAvc2VydmljZXMvYXBpLXdyYXBwZXJzL2Fib25uZW1lbnQuc2VydmljZSdcbmltcG9ydCB7IEFjY291bnRTZXJ2aWNlIH0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy9hcGktd3JhcHBlcnMvYWNjb3VudC5zZXJ2aWNlJ1xuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnc3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50J1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3JtcydcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbidcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy9leHRlcm5hbC9hdXRoLnNlcnZpY2UnXG5pbXBvcnQgeyBTdWJzY3JpcHRpb25Qcm9jZXNzU2VydmljZSB9IGZyb20gJ3NyYy9hcHAvc2VydmljZXMvdXRpbHMvc3Vic2NyaXB0aW9uLXByb2Nlc3Muc2VydmljZSdcbmltcG9ydCB7IFdhbGxldFNlcnZpY2UgfSBmcm9tICdzcmMvYXBwL3NlcnZpY2VzL2FwaS13cmFwcGVycy93YWxsZXQuc2VydmljZSdcbmltcG9ydCB7IGZpcnN0VmFsdWVGcm9tIH0gZnJvbSAncnhqcydcbmltcG9ydCB7IEVycm9ySGFuZGxlclNlcnZpY2UgfSBmcm9tICdzcmMvYXBwL3NlcnZpY2VzL3V0aWxzL2Vycm9yLWhhbmRsZXIuc2VydmljZSdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXZlcmlmeS1waG9uZScsXG4gIHRlbXBsYXRlVXJsOiAnLi92ZXJpZnktcGhvbmUucGFnZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdmVyaWZ5LXBob25lLnBhZ2Uuc2NzcyddLFxuICBpbXBvcnRzOiBbXG4gICAgSW9uaWNNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFRyYW5zbGF0ZU1vZHVsZSxcbiAgICBIZWFkZXJDb21wb25lbnQsXG4gICAgUm91dGVyTW9kdWxlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBWZXJpZnlQaG9uZVBhZ2UgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ290cElucHV0Jykgb3RwSW5wdXQhOiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+XG4gIGFsbG93VmVyaWZpY2F0aW9uQ29kZVJlc2VuZDogYm9vbGVhbiA9IGZhbHNlXG4gIHZlcmlmaWNhdGlvblJlc2VuZFRpbWVyOiBudW1iZXIgPSAyMFxuICBwcml2YXRlIGNvdW50ZG93bkludGVydmFsOiBhbnlcbiAgdmVyaWZpY2F0aW9uQ29kZTogc3RyaW5nID0gJydcbiAgc2VsZWN0ZWRGb3JmYWl0OiBhbnlcbiAgc2xvdHM6IHN0cmluZ1tdID0gbmV3IEFycmF5KDYpLmZpbGwoJycpXG4gIGFjdGl2ZVNsb3RJbmRleDogbnVtYmVyID0gMFxuICB1c2VyUGhvbmVOdW1iZXI6IHN0cmluZyA9ICcnXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBsb2FkaW5nQ29udHJvbGxlcjogTG9hZGluZ0NvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgbG9hZGluZ0N0cmw6IExvYWRpbmdDb250cm9sbGVyLFxuICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgY3ljbGlzdFNlcnZpY2U6IEN5Y2xpc3RzU2VydmljZSxcbiAgICBwcml2YXRlIEFib25uZW1lbnRXcmFwcGVyU2VydmljZTogQWJvbm5lbWVudFdyYXBwZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBhY2NvdW50U2VydmljZTogQWNjb3VudFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhbGVydENvbnRyb2xsZXI6IEFsZXJ0Q29udHJvbGxlcixcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvblByb2Nlc3M6IFN1YnNjcmlwdGlvblByb2Nlc3NTZXJ2aWNlLFxuICAgIHByaXZhdGUgd2FsbGV0U2VydmljZTogV2FsbGV0U2VydmljZSxcbiAgICBwcml2YXRlIGVycm9ySGFuZGxlcjogRXJyb3JIYW5kbGVyU2VydmljZVxuICApIHt9XG5cbiAgYXN5bmMgbmdPbkluaXQoKSB7XG4gICAgYXdhaXQgdGhpcy5zdWJzY3JpcHRpb25Qcm9jZXNzLnVwZGF0ZVN0ZXAoJ3Bob25lJylcbiAgICBhd2FpdCB0aGlzLnNlbmRWZXJpZmljYXRpb25Db2RlKClcbiAgICB0aGlzLnVzZXJQaG9uZU51bWJlciA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UuZ2V0VXNlclBob25lTnVtYmVyKClcbiAgfVxuXG4gIHN0YXJ0UmVzZW5kVGltZXIoKSB7XG4gICAgdGhpcy5hbGxvd1ZlcmlmaWNhdGlvbkNvZGVSZXNlbmQgPSBmYWxzZVxuICAgIHRoaXMudmVyaWZpY2F0aW9uUmVzZW5kVGltZXIgPSAyMFxuXG4gICAgaWYgKHRoaXMuY291bnRkb3duSW50ZXJ2YWwpIGNsZWFySW50ZXJ2YWwodGhpcy5jb3VudGRvd25JbnRlcnZhbClcblxuICAgIHRoaXMuY291bnRkb3duSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy52ZXJpZmljYXRpb25SZXNlbmRUaW1lciA+IDApIHtcbiAgICAgICAgdGhpcy52ZXJpZmljYXRpb25SZXNlbmRUaW1lci0tXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFsbG93VmVyaWZpY2F0aW9uQ29kZVJlc2VuZCA9IHRydWVcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmNvdW50ZG93bkludGVydmFsKVxuICAgICAgfVxuICAgIH0sIDEwMDApXG4gIH1cblxuICBhc3luYyBzZW5kVmVyaWZpY2F0aW9uQ29kZSgpIHtcbiAgICB0aGlzLnN0YXJ0UmVzZW5kVGltZXIoKVxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBzZW5kVXNlckF0dHJpYnV0ZVZlcmlmaWNhdGlvbkNvZGUoe1xuICAgICAgICB1c2VyQXR0cmlidXRlS2V5OiAncGhvbmVfbnVtYmVyJyxcbiAgICAgIH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZGVsZXRlQWNjb3VudCgpIHtcbiAgICBjb25zdCBhbGVydCA9IGF3YWl0IHRoaXMuYWxlcnRDb250cm9sbGVyLmNyZWF0ZSh7XG4gICAgICBoZWFkZXI6IHRoaXMudHJhbnNsYXRlU2VydmljZS5pbnN0YW50KCd2ZXJpZnlfcGhvbmUuZGVsZXRlX2FjY291bnQnKSxcbiAgICAgIG1lc3NhZ2U6IHRoaXMudHJhbnNsYXRlU2VydmljZS5pbnN0YW50KFxuICAgICAgICAndmVyaWZ5X3Bob25lLmRlbGV0ZV9hY2NvdW50X21lc3NhZ2UnXG4gICAgICApLFxuICAgICAgYnV0dG9uczogW1xuICAgICAgICB7IHRleHQ6ICdBbm51bGVyJywgcm9sZTogJ2NhbmNlbCcgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdTdXBwcmltZXInLFxuICAgICAgICAgIGNzc0NsYXNzOiAndGV4dC1kYW5nZXInLFxuICAgICAgICAgIGhhbmRsZXI6IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGF3YWl0IHRoaXMuYWNjb3VudFNlcnZpY2UuZGVsZXRlQWNjb3VudCgpXG4gICAgICAgICAgICAgIGF3YWl0IHRoaXMuYXV0aFNlcnZpY2Uuc2lnbk91dCgpXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IoZXJyKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pXG4gICAgYXdhaXQgYWxlcnQucHJlc2VudCgpXG4gIH1cblxuICBvbklucHV0KGV2ZW50OiBFdmVudCkge1xuICAgIGNvbnN0IGlucHV0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnRcbiAgICBjb25zdCB2YWx1ZSA9IGlucHV0LnZhbHVlLnJlcGxhY2UoL1teMC05XS9nLCAnJylcblxuICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDYpIHtcbiAgICAgIHRoaXMuc2xvdHMgPSB2YWx1ZS5zcGxpdCgnJylcbiAgICAgIHRoaXMudmVyaWZpY2F0aW9uQ29kZSA9IHZhbHVlXG4gICAgICB0aGlzLmFjdGl2ZVNsb3RJbmRleCA9IDVcbiAgICAgIHRoaXMudmVyaWZ5Q29kZSgpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBsYXN0Q2hhciA9IHZhbHVlW3ZhbHVlLmxlbmd0aCAtIDFdXG4gICAgaWYgKGxhc3RDaGFyKSB7XG4gICAgICB0aGlzLnNsb3RzW3RoaXMuYWN0aXZlU2xvdEluZGV4XSA9IGxhc3RDaGFyXG4gICAgICBpZiAodGhpcy5hY3RpdmVTbG90SW5kZXggPCA1KSB7XG4gICAgICAgIHRoaXMuYWN0aXZlU2xvdEluZGV4KytcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnZlcmlmaWNhdGlvbkNvZGUgPSB0aGlzLnNsb3RzLmpvaW4oJycpXG4gICAgaW5wdXQudmFsdWUgPSB0aGlzLnZlcmlmaWNhdGlvbkNvZGVcbiAgfVxuXG4gIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHRoaXMuYWN0aXZlU2xvdEluZGV4ID0gTWF0aC5tYXgoMCwgdGhpcy5hY3RpdmVTbG90SW5kZXggLSAxKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgdGhpcy5hY3RpdmVTbG90SW5kZXggPSBNYXRoLm1pbig1LCB0aGlzLmFjdGl2ZVNsb3RJbmRleCArIDEpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdCYWNrc3BhY2UnOlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGlmICh0aGlzLnNsb3RzW3RoaXMuYWN0aXZlU2xvdEluZGV4XSkge1xuICAgICAgICAgIHRoaXMuc2xvdHNbdGhpcy5hY3RpdmVTbG90SW5kZXhdID0gJydcbiAgICAgICAgICB0aGlzLnZlcmlmaWNhdGlvbkNvZGUgPSB0aGlzLnNsb3RzLmpvaW4oJycpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5hY3RpdmVTbG90SW5kZXggPiAwKSB7XG4gICAgICAgICAgdGhpcy5hY3RpdmVTbG90SW5kZXgtLVxuICAgICAgICAgIHRoaXMuc2xvdHNbdGhpcy5hY3RpdmVTbG90SW5kZXhdID0gJydcbiAgICAgICAgICB0aGlzLnZlcmlmaWNhdGlvbkNvZGUgPSB0aGlzLnNsb3RzLmpvaW4oJycpXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmICgvXlxcZCQvLnRlc3QoZXZlbnQua2V5KSkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICB0aGlzLnNsb3RzW3RoaXMuYWN0aXZlU2xvdEluZGV4XSA9IGV2ZW50LmtleVxuICAgICAgICAgIHRoaXMudmVyaWZpY2F0aW9uQ29kZSA9IHRoaXMuc2xvdHMuam9pbignJylcbiAgICAgICAgICBpZiAodGhpcy5hY3RpdmVTbG90SW5kZXggPCA1KSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVNsb3RJbmRleCsrXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLnZlcmlmaWNhdGlvbkNvZGUubGVuZ3RoID09PSA2KSB7XG4gICAgICAgICAgICB0aGlzLnZlcmlmeUNvZGUoKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm90cElucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB0aGlzLnZlcmlmaWNhdGlvbkNvZGVcbiAgICB0aGlzLnNldElucHV0Q3Vyc29yKHRoaXMuYWN0aXZlU2xvdEluZGV4KVxuICB9XG5cbiAgb25TbG90Q2xpY2soaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuYWN0aXZlU2xvdEluZGV4ID0gaW5kZXhcbiAgICB0aGlzLm90cElucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKVxuICAgIHRoaXMuc2V0SW5wdXRDdXJzb3IoaW5kZXgpXG4gIH1cblxuICBzZXRJbnB1dEN1cnNvcihwb3NpdGlvbjogbnVtYmVyKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMub3RwSW5wdXQubmF0aXZlRWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZShwb3NpdGlvbiwgcG9zaXRpb24pXG4gICAgfSlcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMub3RwSW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpXG4gICAgfSwgMClcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeUNvZGUoKSB7XG4gICAgaWYgKHRoaXMudmVyaWZpY2F0aW9uQ29kZS5sZW5ndGggIT09IDYpIHJldHVyblxuXG4gICAgY29uc3QgbG9hZGluZyA9IGF3YWl0IHRoaXMubG9hZGluZ0NvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgIG1lc3NhZ2U6IHRoaXMudHJhbnNsYXRlU2VydmljZS5pbnN0YW50KCd2ZXJpZnlfcGhvbmUudmVyaWZ5aW5nJyksXG4gICAgfSlcblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBsb2FkaW5nLnByZXNlbnQoKVxuICAgICAgYXdhaXQgY29uZmlybVVzZXJBdHRyaWJ1dGUoe1xuICAgICAgICB1c2VyQXR0cmlidXRlS2V5OiAncGhvbmVfbnVtYmVyJyxcbiAgICAgICAgY29uZmlybWF0aW9uQ29kZTogdGhpcy52ZXJpZmljYXRpb25Db2RlLFxuICAgICAgfSlcblxuICAgICAgYXdhaXQgbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB0aGlzLmN5Y2xpc3RTZXJ2aWNlLmNvbmZpcm1DeWNsaXN0KCkuc3Vic2NyaWJlKHtcbiAgICAgICAgICBuZXh0OiAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjeWNsaXN0U3RhdGUgPSB0aGlzLmFjY291bnRTZXJ2aWNlLmN5Y2xpc3RTdGF0ZSgpXG4gICAgICAgICAgICBpZiAoJ2N5Y2xpc3QnIGluIGN5Y2xpc3RTdGF0ZSkge1xuICAgICAgICAgICAgICBjb25zdCB1cGRhdGVkQ3ljbGlzdCA9IHtcbiAgICAgICAgICAgICAgICAuLi5jeWNsaXN0U3RhdGUuY3ljbGlzdCxcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICdhY3RpdmUnLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIFVzZSBjaGVja0N5Y2xpc3RBY2NvdW50IHRvIHByb3Blcmx5IGRldGVybWluZSBzdGF0ZSBiYXNlZCBvbiByb2xlXG4gICAgICAgICAgICAgIHRoaXMuYWNjb3VudFNlcnZpY2UuY2hlY2tDeWNsaXN0QWNjb3VudCh1cGRhdGVkQ3ljbGlzdClcblxuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NvdW50U2VydmljZS5oYXNCbG9ja2VkUmVhc29uKCdBY2NvdW50IG5vdCBjb25maXJtZWQnKVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjY291bnRTZXJ2aWNlLnJlbW92ZUJsb2NrZWRSZWFzb24oJ0FjY291bnQgbm90IGNvbmZpcm1lZCcpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyb3I6IHJlamVjdCxcbiAgICAgICAgfSlcbiAgICAgIH0pXG5cbiAgICAgIGxvYWRpbmcubWVzc2FnZSA9IHRoaXMudHJhbnNsYXRlU2VydmljZS5pbnN0YW50KFxuICAgICAgICAndmVyaWZ5X3Bob25lLmNvbmZpcm1pbmdfY3ljbGlzdCdcbiAgICAgIClcblxuICAgICAgLy8gSGFuZGxlIGV4dGVybmFsIHVzZXJzIGRpZmZlcmVudGx5XG4gICAgICBjb25zdCBjeWNsaXN0U3RhdGUgPSB0aGlzLmFjY291bnRTZXJ2aWNlLmN5Y2xpc3RTdGF0ZSgpXG5cbiAgICAgIGlmIChcbiAgICAgICAgJ2N5Y2xpc3QnIGluIGN5Y2xpc3RTdGF0ZSAmJlxuICAgICAgICAoY3ljbGlzdFN0YXRlLmN5Y2xpc3Qucm9sZSA9PSAnZ3Vlc3QnIHx8XG4gICAgICAgICAgY3ljbGlzdFN0YXRlLmN5Y2xpc3QucmVnaXN0cmF0aW9ucz8uZGF0YT8uWzBdPy5yb2xlID09ICdndWVzdCcpXG4gICAgICApIHtcbiAgICAgICAgLy8gVmFsaWRhdGUgdGVybXMgZm9yIGV4dGVybmFsIHVzZXJzXG4gICAgICAgIGF3YWl0IGxvYWRpbmcuZGlzbWlzcygpXG4gICAgICAgIGF3YWl0IHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FjY291bnQvc2V0dGluZ3MvY2d1J10sIHtcbiAgICAgICAgICBxdWVyeVBhcmFtczogeyBuZXh0VXJsOiAnL3JlbnRpbmcnIH0sXG4gICAgICAgICAgcmVwbGFjZVVybDogdHJ1ZSxcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IGxvYWRpbmcuZGlzbWlzcygpXG4gICAgICAvLyBSZWd1bGFyIGN5Y2xpc3QgZmxvd1xuICAgICAgaWYgKGF3YWl0IHRoaXMuc3Vic2NyaXB0aW9uUHJvY2Vzcy5oYXNGb3JmYWl0U2VsZWN0ZWQoKSkge1xuICAgICAgICBjb25zdCBwYXlsb2FkID1cbiAgICAgICAgICBhd2FpdCB0aGlzLnN1YnNjcmlwdGlvblByb2Nlc3MuZ2V0Q3JlYXRlQWJvbm5lbWVudFBheWxvYWQoKVxuICAgICAgICBpZiAocGF5bG9hZCkge1xuICAgICAgICAgIGF3YWl0IHRoaXMuY3JlYXRlQWJvbm5lbWVudChwYXlsb2FkKVxuICAgICAgICAgIGF3YWl0IHRoaXMuc3Vic2NyaXB0aW9uUHJvY2Vzcy5jbGVhclByb2Nlc3MoKVxuICAgICAgICB9XG4gICAgICAgIGF3YWl0IHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2Fiby1jb25ncmF0cyddKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVsOpcmlmaWVyIHMnaWwgeSBhIHVuIGNvZGUgZGUgcsOpZHVjdGlvbiDDoCBhcHBsaXF1ZXIgYXUgcG9ydGVmZXVpbGxlXG4gICAgICAgIGNvbnN0IHByb2Nlc3MgPSBhd2FpdCBmaXJzdFZhbHVlRnJvbShcbiAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvblByb2Nlc3MuZ2V0Q3VycmVudFByb2Nlc3MoKVxuICAgICAgICApXG4gICAgICAgIGlmIChwcm9jZXNzPy5yZWR1Y3Rpb24pIHtcbiAgICAgICAgICBhd2FpdCB0aGlzLndhbGxldFNlcnZpY2UuYXBwbHlDb2RlUHJvbW8ocHJvY2Vzcy5yZWR1Y3Rpb24pXG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgdGhpcy5zdWJzY3JpcHRpb25Qcm9jZXNzLmNsZWFyUHJvY2VzcygpXG4gICAgICAgIGF3YWl0IHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2Fiby1jb25ncmF0cyddKVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBhd2FpdCBsb2FkaW5nLmRpc21pc3MoKVxuICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgY3JlYXRlQWJvbm5lbWVudChwYXlsb2FkOiBDcmVhdGVBYm9ubmVtZW50UGFyYW1zKSB7XG4gICAgY29uc3QgbG9hZGluZyA9IGF3YWl0IHRoaXMubG9hZGluZ0N0cmwuY3JlYXRlKHtcbiAgICAgIG1lc3NhZ2U6IHRoaXMudHJhbnNsYXRlLmluc3RhbnQoJ3N1YnNjcmlwdGlvbi5jcmVhdGlvbi5sb2FkaW5nJyksXG4gICAgfSlcbiAgICBhd2FpdCBsb2FkaW5nLnByZXNlbnQoKVxuXG4gICAgYXdhaXQgdGhpcy5BYm9ubmVtZW50V3JhcHBlclNlcnZpY2UuY3JlYXRlQWJvbm5lbWVudChwYXlsb2FkKS5maW5hbGx5KFxuICAgICAgYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCBsb2FkaW5nLmRpc21pc3MoKVxuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmNvdW50ZG93bkludGVydmFsKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuY291bnRkb3duSW50ZXJ2YWwpXG4gICAgfVxuICB9XG59XG4iLCAiPGFwcC1oZWFkZXI+PC9hcHAtaGVhZGVyPlxuPGlvbi1jb250ZW50IGNsYXNzPVwiaW9uLXBhZGRpbmdcIj5cbiAgPGlvbi1yb3cgY2xhc3M9XCJpb24tanVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgIDxpb24tY29sIHNpemU9XCIxMlwiIHNpemUtbWQ9XCI4XCIgc2l6ZS1sZz1cIjZcIj5cbiAgICAgIDxoMj57eyAndmVyaWZ5X3Bob25lLnN1YnRpdGxlJyB8IHRyYW5zbGF0ZSB9fTwvaDI+XG4gICAgICA8cD5cbiAgICAgICAge3sgJ3ZlcmlmeV9waG9uZS5pbnN0cnVjdGlvbnMnIHwgdHJhbnNsYXRlOiB7IHBob25lOiB1c2VyUGhvbmVOdW1iZXIgfVxuICAgICAgICB9fVxuICAgICAgPC9wPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiZWNsLW90cC1jb250YWluZXJcIj5cbiAgICAgICAgPCEtLSBIaWRkZW4gYWN0dWFsIGlucHV0IC0tPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICAjb3RwSW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgaW5wdXRtb2RlPVwibnVtZXJpY1wiXG4gICAgICAgICAgYXV0b2NvbXBsZXRlPVwib25lLXRpbWUtY29kZVwiXG4gICAgICAgICAgY2xhc3M9XCJlY2wtb3RwLWlucHV0XCJcbiAgICAgICAgICBbdmFsdWVdPVwidmVyaWZpY2F0aW9uQ29kZVwiXG4gICAgICAgICAgKGlucHV0KT1cIm9uSW5wdXQoJGV2ZW50KVwiXG4gICAgICAgICAgKGtleWRvd24pPVwib25LZXlEb3duKCRldmVudClcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDwhLS0gVmlzdWFsIHNsb3RzIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW9uLXRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJpb24tanVzdGlmeS1jb250ZW50LWNlbnRlciBpb24tYWxpZ24taXRlbXMtY2VudGVyXCJcbiAgICAgICAgICAgIHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWZsZXhcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDwhLS0gRmlyc3QgZ3JvdXAgLS0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW9uLWFsaWduLWl0ZW1zLWNlbnRlclwiIHN0eWxlPVwiZGlzcGxheTogZmxleDsgZ2FwOiA0cHhcIj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBzbG90IG9mIHNsb3RzLnNsaWNlKDAsIDMpOyBsZXQgaSA9IGluZGV4XCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImVjbC1vdHAtc2xvdCBpb24tYWxpZ24taXRlbXMtY2VudGVyIGlvbi1qdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCJcbiAgICAgICAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cImkgPT09IGFjdGl2ZVNsb3RJbmRleFwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uU2xvdENsaWNrKGkpXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXY+e3sgc2xvdCB9fTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJpID09PSBhY3RpdmVTbG90SW5kZXhcIiBjbGFzcz1cImVjbC1vdHAtY2FyZXRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwhLS0gU2Vjb25kIGdyb3VwIC0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlvbi1hbGlnbi1pdGVtcy1jZW50ZXJcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGdhcDogNHB4XCI+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgc2xvdCBvZiBzbG90cy5zbGljZSgzKTsgbGV0IGkgPSBpbmRleFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJlY2wtb3RwLXNsb3QgaW9uLWFsaWduLWl0ZW1zLWNlbnRlciBpb24tanVzdGlmeS1jb250ZW50LWNlbnRlclwiXG4gICAgICAgICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJpICsgMyA9PT0gYWN0aXZlU2xvdEluZGV4XCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwib25TbG90Q2xpY2soaSArIDMpXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXY+e3sgc2xvdCB9fTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICpuZ0lmPVwiaSArIDMgPT09IGFjdGl2ZVNsb3RJbmRleFwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImVjbC1vdHAtY2FyZXRcIlxuICAgICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHAgY2xhc3M9XCJpb24tbWFyZ2luLXRvcFwiPlxuICAgICAgICB7eyAndmVyaWZ5X3Bob25lLnJlc2VuZF9jb2RlJyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICA8YVxuICAgICAgICAgIFtjbGFzcy5kaXNhYmxlZF09XCIhYWxsb3dWZXJpZmljYXRpb25Db2RlUmVzZW5kXCJcbiAgICAgICAgICAoY2xpY2spPVwic2VuZFZlcmlmaWNhdGlvbkNvZGUoKVwiXG4gICAgICAgID5cbiAgICAgICAgICB7eyAndmVyaWZ5X3Bob25lLnJlc2VuZF9jb2RlX2xpbmsnIHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgPHNwYW4gKm5nSWY9XCIhYWxsb3dWZXJpZmljYXRpb25Db2RlUmVzZW5kXCI+XG4gICAgICAgICAgICAoe3sgdmVyaWZpY2F0aW9uUmVzZW5kVGltZXIgfX1zKVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9wPlxuXG4gICAgICA8cD5cbiAgICAgICAge3sgJ3ZlcmlmeV9waG9uZS5waG9uZV9lcnJvcicgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxhIChjbGljayk9XCJkZWxldGVBY2NvdW50KClcIj5cbiAgICAgICAgICB7eyAndmVyaWZ5X3Bob25lLnNpZ251cF9hZ2FpbicgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgPC9hPlxuICAgICAgPC9wPlxuICAgIDwvaW9uLWNvbD5cbiAgPC9pb24tcm93PlxuPC9pb24tY29udGVudD5cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3NDZ0IsSUFBQSxvQkFBQSxHQUFBLE9BQUEsRUFBQTs7Ozs7O0FBUEYsSUFBQSx5QkFBQSxHQUFBLE9BQUEsRUFBQTtBQUlFLElBQUEscUJBQUEsU0FBQSxTQUFBLHVEQUFBO0FBQUEsWUFBQSxPQUFBLHdCQUFBLEdBQUEsRUFBQTtBQUFBLFlBQUEsU0FBQSx3QkFBQTtBQUFBLGFBQUEsc0JBQVMsT0FBQSxZQUFBLElBQUEsQ0FBYztJQUFBLENBQUE7QUFFdkIsSUFBQSx5QkFBQSxHQUFBLEtBQUE7QUFBSyxJQUFBLGlCQUFBLENBQUE7QUFBVSxJQUFB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QUFBO0FBR0EsSUFBQSxvQkFBQTtBQUFBLElBQUEsNkJBQUEsS0FBQSxzQkFBQSxJQUFBLElBQUEsK0JBQUEsR0FBQSxHQUFBO0FBQ08sSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSxxQkFBQSxRQUFBLENBQUEsSUFBQSwyQkFBQTtBQU9ULElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEsNkJBQUEsS0FBQSxzQkFBQSxJQUFBLElBQUEsMEJBQUEsR0FBQSxHQUFBO0FBR0UsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSw2QkFBQSxLQUFBLHNCQUFBLElBQUEsSUFBQSwyQkFBQSxHQUFBLEdBQUE7OztFRHpDTjtFQUFXO0VBQUE7RUFBQTtFQUNYO0VBQVk7RUFBQTtFQUNaO0VBQ0E7RUFBZTtFQUNmO0VBQ0E7QUFBWSxHQUFBLFFBQUEsQ0FBQSwyT0FBQSxFQUFBLENBQUE7QUFHVixJQUFPLGtCQUFQOztzRUFBTyxpQkFBZSxDQUFBO1VBYjNCO3VCQUNXLG9CQUFrQixTQUduQjtNQUNQO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtPQUNELFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBQUEsUUFBQSxDQUFBLGlRQUFBLEVBQUEsQ0FBQTs2WEFHc0IsVUFBUSxDQUFBO1VBQTlCO1dBQVUsVUFBVTs7Ozs2RUFEVixpQkFBZSxFQUFBLFdBQUEsbUJBQUEsVUFBQSx3REFBQSxZQUFBLEdBQUEsQ0FBQTtBQUFBLEdBQUE7IiwKICAibmFtZXMiOiBbIkFib25uZW1lbnRXcmFwcGVyU2VydmljZSIsICJjeWNsaXN0U3RhdGUiXQp9Cg==
