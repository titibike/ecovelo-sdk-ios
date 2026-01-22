import {
  HeaderComponent
} from "./chunk-AVAJ3QHV.js";
import "./chunk-K2AWDLYV.js";
import {
  confirmResetPassword
} from "./chunk-Y7HI6USV.js";
import {
  ErrorHandlerService,
  ToastService,
  ToastType
} from "./chunk-SARQRLZR.js";
import {
  addIcons,
  eyeOutline
} from "./chunk-3E6DEK7U.js";
import "./chunk-U6SJAXLK.js";
import {
  CommonModule,
  Component,
  FormsModule,
  IonButton,
  IonCol,
  IonContent,
  IonIcon,
  IonInput,
  IonItem,
  IonRow,
  IonText,
  LoadingController,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  ReactiveFormsModule,
  Router,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  ViewChild,
  ViewChildren,
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
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
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

// src/app/pages/auth/reset-password/confirm-code/confirm-code.page.ts
var _c0 = ["otpInput"];
var _c1 = ["codeInput"];
function ConfirmCodePage_div_18_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 18);
  }
}
function ConfirmCodePage_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275listener("click", function ConfirmCodePage_div_18_Template_div_click_0_listener() {
      const i_r3 = \u0275\u0275restoreView(_r2).index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onSlotClick(i_r3));
    });
    \u0275\u0275elementStart(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ConfirmCodePage_div_18_div_3_Template, 1, 0, "div", 17);
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
function ConfirmCodePage_div_20_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 18);
  }
}
function ConfirmCodePage_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275listener("click", function ConfirmCodePage_div_20_Template_div_click_0_listener() {
      const i_r7 = \u0275\u0275restoreView(_r6).index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onSlotClick(i_r7 + 3));
    });
    \u0275\u0275elementStart(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ConfirmCodePage_div_20_div_3_Template, 1, 0, "div", 17);
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
function ConfirmCodePage_ion_row_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-row", 2)(1, "ion-col", 3)(2, "p")(3, "ion-text", 19);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "confirm_code.err_missing_code"));
  }
}
function ConfirmCodePage_ion_row_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-row", 2)(1, "ion-col", 3)(2, "p")(3, "ion-text", 19);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "confirm_code.err_password_length"));
  }
}
function ConfirmCodePage_ion_row_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-row", 2)(1, "ion-col", 3)(2, "p")(3, "ion-text", 19);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "confirm_code.err_different_password"));
  }
}
var _ConfirmCodePage = class _ConfirmCodePage {
  constructor(translateService, router, loadingCtrl, toastService, errorHandler) {
    var _a, _b;
    this.translateService = translateService;
    this.router = router;
    this.loadingCtrl = loadingCtrl;
    this.toastService = toastService;
    this.errorHandler = errorHandler;
    this.phone = "";
    this.verificationDigits = [];
    this.verificationCode = "";
    this.password = "";
    this.confirmPassword = "";
    this.showPassword = false;
    this.showConfirmPassword = false;
    this.slots = new Array(6).fill("");
    this.activeSlotIndex = 0;
    addIcons({ eyeOutline });
    const navigation = this.router.getCurrentNavigation();
    this.phone = ((_b = (_a = navigation == null ? void 0 : navigation.extras) == null ? void 0 : _a.state) == null ? void 0 : _b["phone"]) || this.phone;
  }
  ngOnInit() {
    if (!this.phone) {
      this.router.navigate(["/enter-phone"]);
    }
  }
  onPaste(event) {
    var _a;
    event.preventDefault();
    const pastedText = (_a = event.clipboardData) == null ? void 0 : _a.getData("text");
    if (pastedText) {
      const digits = pastedText.slice(0, 6).split("");
      digits.forEach((digit, index) => {
        if (index < 6) {
          this.verificationDigits[index] = digit;
        }
      });
      this.verificationCode = this.verificationDigits.join("");
    }
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
  confirmCode() {
    return __async(this, null, function* () {
      const loading = yield this.loadingCtrl.create({
        message: this.translateService.instant("generic.please_wait")
      });
      yield loading.present();
      yield confirmResetPassword({
        username: this.phone,
        confirmationCode: this.verificationCode,
        newPassword: this.password
      }).then(() => {
        loading.dismiss();
        this.toastService.createWithJustMessage(this.translateService.instant("confirm_code.success"), ToastType.Success);
        this.router.navigate(["/signin"], {
          state: { phone: this.phone }
        });
      }).catch((error) => {
        this.errorHandler.handleError(error);
        loading.dismiss();
      });
    });
  }
  onInput(event) {
    const input = event.target;
    const value = input.value.replace(/[^0-9]/g, "");
    if (value.length === 6) {
      this.slots = value.split("");
      this.verificationCode = value;
      this.activeSlotIndex = 5;
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
};
_ConfirmCodePage.\u0275fac = function ConfirmCodePage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ConfirmCodePage)(\u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(LoadingController), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(ErrorHandlerService));
};
_ConfirmCodePage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmCodePage, selectors: [["app-confirm-code"]], viewQuery: function ConfirmCodePage_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
    \u0275\u0275viewQuery(_c1, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.otpInput = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.codeInputs = _t);
  }
}, decls: 39, vars: 26, consts: [["otpInput", ""], [1, "ion-padding"], [1, "ion-justify-content-center", "ion-margin-horizontal"], ["size", "12", "size-md", "6", "size-lg", "4"], [1, "ion-justify-content-center"], [1, "ecl-otp-container"], ["type", "text", "inputmode", "numeric", "autocomplete", "one-time-code", 1, "ecl-otp-input", 3, "input", "keydown", "value"], [1, "ion-text-center"], [1, "ion-justify-content-center", "ion-align-items-center", 2, "display", "inline-flex"], [1, "ion-align-items-center", 2, "display", "flex", "gap", "4px"], ["class", "ecl-otp-slot ion-align-items-center ion-justify-content-center", 3, "active", "click", 4, "ngFor", "ngForOf"], ["labelPlacement", "floating", "placeholder", "********", 3, "ngModelChange", "type", "ngModel", "label"], ["fill", "clear", "slot", "end", "aria-label", "Show/hide", 3, "click"], ["slot", "icon-only", "name", "eye-outline", "aria-hidden", "true"], ["class", "ion-justify-content-center ion-margin-horizontal", 4, "ngIf"], ["type", "submit", "expand", "block", "shape", "round", 1, "ion-margin-top", "ecl-btn--shadow", 3, "click", "disabled"], [1, "ecl-otp-slot", "ion-align-items-center", "ion-justify-content-center", 3, "click"], ["class", "ecl-otp-caret", 4, "ngIf"], [1, "ecl-otp-caret"], ["color", "danger"]], template: function ConfirmCodePage_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "app-header");
    \u0275\u0275elementStart(1, "ion-content", 1)(2, "ion-row", 2)(3, "ion-col", 3)(4, "h1");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "ion-row", 4)(11, "ion-col", 3)(12, "div", 5)(13, "input", 6, 0);
    \u0275\u0275listener("input", function ConfirmCodePage_Template_input_input_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onInput($event));
    })("keydown", function ConfirmCodePage_Template_input_keydown_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onKeyDown($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 7)(16, "div", 8)(17, "div", 9);
    \u0275\u0275template(18, ConfirmCodePage_div_18_Template, 4, 4, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 9);
    \u0275\u0275template(20, ConfirmCodePage_div_20_Template, 4, 4, "div", 10);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(21, "ion-item")(22, "ion-input", 11);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ConfirmCodePage_Template_ion_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(24, "ion-button", 12);
    \u0275\u0275listener("click", function ConfirmCodePage_Template_ion_button_click_24_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.togglePasswordVisibility());
    });
    \u0275\u0275element(25, "ion-icon", 13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "ion-item")(27, "ion-input", 11);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ConfirmCodePage_Template_ion_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.confirmPassword, $event) || (ctx.confirmPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(29, "ion-button", 12);
    \u0275\u0275listener("click", function ConfirmCodePage_Template_ion_button_click_29_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.toggleConfirmPasswordVisibility());
    });
    \u0275\u0275element(30, "ion-icon", 13);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(31, ConfirmCodePage_ion_row_31_Template, 6, 3, "ion-row", 14)(32, ConfirmCodePage_ion_row_32_Template, 6, 3, "ion-row", 14)(33, ConfirmCodePage_ion_row_33_Template, 6, 3, "ion-row", 14);
    \u0275\u0275elementStart(34, "ion-row", 2)(35, "ion-col", 3)(36, "ion-button", 15);
    \u0275\u0275listener("click", function ConfirmCodePage_Template_ion_button_click_36_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.confirmCode());
    });
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 16, "confirm_code.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 18, "confirm_code.enter_code"));
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx.verificationCode);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx.slots.slice(0, 3));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx.slots.slice(3));
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("label", \u0275\u0275pipeBind1(23, 20, "confirm_code.new_password"));
    \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
    \u0275\u0275twoWayProperty("ngModel", ctx.password);
    \u0275\u0275advance(5);
    \u0275\u0275propertyInterpolate("label", \u0275\u0275pipeBind1(28, 22, "confirm_code.confirm_password"));
    \u0275\u0275property("type", ctx.showConfirmPassword ? "text" : "password");
    \u0275\u0275twoWayProperty("ngModel", ctx.confirmPassword);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.password && ctx.confirmPassword && !ctx.verificationCode);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.password && ctx.confirmPassword && (ctx.password.length < 6 || ctx.confirmPassword.length < 6));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.password && ctx.confirmPassword && ctx.password !== ctx.confirmPassword);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx.password || !ctx.confirmPassword || ctx.password !== ctx.confirmPassword || !ctx.verificationCode);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(38, 24, "confirm_code.change_password"), " ");
  }
}, dependencies: [
  IonContent,
  IonInput,
  IonCol,
  IonText,
  IonRow,
  IonItem,
  IonButton,
  IonIcon,
  CommonModule,
  NgForOf,
  NgIf,
  FormsModule,
  NgControlStatus,
  NgModel,
  ReactiveFormsModule,
  TranslateModule,
  TranslatePipe,
  HeaderComponent
], encapsulation: 2 });
var ConfirmCodePage = _ConfirmCodePage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmCodePage, [{
    type: Component,
    args: [{ selector: "app-confirm-code", imports: [
      IonContent,
      IonInput,
      IonCol,
      IonText,
      IonRow,
      IonItem,
      IonButton,
      IonIcon,
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      TranslateModule,
      HeaderComponent
    ], template: `<app-header></app-header>
<ion-content class="ion-padding">
  <ion-row class="ion-justify-content-center ion-margin-horizontal">
    <ion-col size="12" size-md="6" size-lg="4">
      <h1>{{ 'confirm_code.title' | translate }}</h1>
      <p>{{ 'confirm_code.enter_code' | translate }}</p>
    </ion-col>
  </ion-row>

  <ion-row class="ion-justify-content-center">
    <ion-col size="12" size-md="6" size-lg="4">
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

      <!-- Rest of your form -->
      <ion-item>
        <ion-input
          [type]="showPassword ? 'text' : 'password'"
          labelPlacement="floating"
          [(ngModel)]="password"
          label="{{ 'confirm_code.new_password' | translate }}"
          placeholder="********"
        >
          <ion-button
            fill="clear"
            slot="end"
            aria-label="Show/hide"
            (click)="togglePasswordVisibility()"
          >
            <ion-icon
              slot="icon-only"
              name="eye-outline"
              aria-hidden="true"
            ></ion-icon> </ion-button></ion-input
      ></ion-item>
      <ion-item>
        <ion-input
          [type]="showConfirmPassword ? 'text' : 'password'"
          labelPlacement="floating"
          [(ngModel)]="confirmPassword"
          label="{{ 'confirm_code.confirm_password' | translate }}"
          placeholder="********"
        >
          <ion-button
            fill="clear"
            slot="end"
            aria-label="Show/hide"
            (click)="toggleConfirmPasswordVisibility()"
          >
            <ion-icon
              slot="icon-only"
              name="eye-outline"
              aria-hidden="true"
            ></ion-icon> </ion-button></ion-input
      ></ion-item>
    </ion-col>
  </ion-row>
  <ion-row
    class="ion-justify-content-center ion-margin-horizontal"
    *ngIf="password && confirmPassword && !verificationCode"
  >
    <ion-col size="12" size-md="6" size-lg="4">
      <p>
        <ion-text color="danger"
          >{{ 'confirm_code.err_missing_code' | translate }}</ion-text
        >
      </p>
    </ion-col>
  </ion-row>
  <ion-row
    class="ion-justify-content-center ion-margin-horizontal"
    *ngIf="password && confirmPassword && (password.length < 6 || confirmPassword.length < 6)"
  >
    <ion-col size="12" size-md="6" size-lg="4">
      <p>
        <ion-text color="danger"
          >{{ 'confirm_code.err_password_length' | translate }}</ion-text
        >
      </p>
    </ion-col>
  </ion-row>
  <ion-row
    class="ion-justify-content-center ion-margin-horizontal"
    *ngIf="password && confirmPassword && password !== confirmPassword"
  >
    <ion-col size="12" size-md="6" size-lg="4">
      <p>
        <ion-text color="danger"
          >{{ 'confirm_code.err_different_password' | translate }}</ion-text
        >
      </p>
    </ion-col>
  </ion-row>
  <ion-row class="ion-justify-content-center ion-margin-horizontal">
    <ion-col size="12" size-md="6" size-lg="4">
      <ion-button
        type="submit"
        expand="block"
        shape="round"
        class="ion-margin-top ecl-btn--shadow"
        [disabled]="(!password || !confirmPassword) || password !== confirmPassword || !verificationCode"
        (click)="confirmCode()"
      >
        {{ 'confirm_code.change_password' | translate }}
      </ion-button>
    </ion-col>
  </ion-row>
</ion-content>
` }]
  }], () => [{ type: TranslateService }, { type: Router }, { type: LoadingController }, { type: ToastService }, { type: ErrorHandlerService }], { codeInputs: [{
    type: ViewChildren,
    args: ["codeInput"]
  }], otpInput: [{
    type: ViewChild,
    args: ["otpInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmCodePage, { className: "ConfirmCodePage", filePath: "src/app/pages/auth/reset-password/confirm-code/confirm-code.page.ts", lineNumber: 54 });
})();
export {
  ConfirmCodePage
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wYWdlcy9hdXRoL3Jlc2V0LXBhc3N3b3JkL2NvbmZpcm0tY29kZS9jb25maXJtLWNvZGUucGFnZS50cyIsICJzcmMvYXBwL3BhZ2VzL2F1dGgvcmVzZXQtcGFzc3dvcmQvY29uZmlybS1jb2RlL2NvbmZpcm0tY29kZS5wYWdlLmh0bWwiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBRdWVyeUxpc3QsXG4gIFZpZXdDaGlsZHJlbixcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmLFxuICBBZnRlclZpZXdJbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJ1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3JtcydcbmltcG9ydCB7XG4gIElvbkNvbnRlbnQsXG4gIElvbklucHV0LFxuICBJb25CdXR0b24sXG4gIElvbkNvbCxcbiAgSW9uVGV4dCxcbiAgSW9uUm93LFxuICBJb25JdGVtLFxuICBJb25MYWJlbCxcbiAgSW9uSWNvbixcbiAgTG9hZGluZ0NvbnRyb2xsZXIsXG59IGZyb20gJ0Bpb25pYy9hbmd1bGFyL3N0YW5kYWxvbmUnXG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUsIFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJ1xuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnc3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50J1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xuaW1wb3J0IHsgVG9hc3RTZXJ2aWNlLCBUb2FzdFR5cGUgfSBmcm9tICdzcmMvYXBwL3NlcnZpY2VzL3V0aWxzL3RvYXN0LnNlcnZpY2UnXG5pbXBvcnQgeyBhZGRJY29ucyB9IGZyb20gJ2lvbmljb25zJ1xuaW1wb3J0IHsgZXllT3V0bGluZSB9IGZyb20gJ2lvbmljb25zL2ljb25zJ1xuXG5pbXBvcnQgeyBjb25maXJtUmVzZXRQYXNzd29yZCB9IGZyb20gJ2F3cy1hbXBsaWZ5L2F1dGgnXG5pbXBvcnQgeyBFcnJvckhhbmRsZXJTZXJ2aWNlIH0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy91dGlscy9lcnJvci1oYW5kbGVyLnNlcnZpY2UnXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1jb25maXJtLWNvZGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vY29uZmlybS1jb2RlLnBhZ2UuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbmZpcm0tY29kZS5wYWdlLnNjc3MnXSxcbiAgaW1wb3J0czogW1xuICAgIElvbkNvbnRlbnQsXG4gICAgSW9uSW5wdXQsXG4gICAgSW9uQ29sLFxuICAgIElvblRleHQsXG4gICAgSW9uUm93LFxuICAgIElvbkl0ZW0sXG4gICAgSW9uQnV0dG9uLFxuICAgIElvbkljb24sXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICAgIEhlYWRlckNvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ29uZmlybUNvZGVQYWdlIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgQFZpZXdDaGlsZHJlbignY29kZUlucHV0JykgY29kZUlucHV0cyE6IFF1ZXJ5TGlzdDxJb25JbnB1dD5cbiAgQFZpZXdDaGlsZCgnb3RwSW5wdXQnKSBvdHBJbnB1dCE6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD5cbiAgcHJpdmF0ZSBwaG9uZTogc3RyaW5nID0gJydcbiAgdmVyaWZpY2F0aW9uRGlnaXRzOiBzdHJpbmdbXSA9IFtdXG4gIHZlcmlmaWNhdGlvbkNvZGU6IHN0cmluZyA9ICcnXG4gIHBhc3N3b3JkOiBzdHJpbmcgPSAnJ1xuICBjb25maXJtUGFzc3dvcmQ6IHN0cmluZyA9ICcnXG4gIHNob3dQYXNzd29yZDogYm9vbGVhbiA9IGZhbHNlXG4gIHNob3dDb25maXJtUGFzc3dvcmQ6IGJvb2xlYW4gPSBmYWxzZVxuICBzbG90czogc3RyaW5nW10gPSBuZXcgQXJyYXkoNikuZmlsbCgnJylcbiAgYWN0aXZlU2xvdEluZGV4OiBudW1iZXIgPSAwXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBsb2FkaW5nQ3RybDogTG9hZGluZ0NvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSB0b2FzdFNlcnZpY2U6IFRvYXN0U2VydmljZSxcbiAgICBwcml2YXRlIGVycm9ySGFuZGxlcjogRXJyb3JIYW5kbGVyU2VydmljZVxuICApIHtcbiAgICBhZGRJY29ucyh7IGV5ZU91dGxpbmUgfSlcbiAgICBjb25zdCBuYXZpZ2F0aW9uID0gdGhpcy5yb3V0ZXIuZ2V0Q3VycmVudE5hdmlnYXRpb24oKVxuICAgIHRoaXMucGhvbmUgPSBuYXZpZ2F0aW9uPy5leHRyYXM/LnN0YXRlPy5bJ3Bob25lJ10gfHwgdGhpcy5waG9uZVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLnBob25lKSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9lbnRlci1waG9uZSddKVxuICAgIH1cbiAgfVxuXG4gIG9uUGFzdGUoZXZlbnQ6IENsaXBib2FyZEV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHBhc3RlZFRleHQgPSBldmVudC5jbGlwYm9hcmREYXRhPy5nZXREYXRhKCd0ZXh0JylcbiAgICBpZiAocGFzdGVkVGV4dCkge1xuICAgICAgY29uc3QgZGlnaXRzID0gcGFzdGVkVGV4dC5zbGljZSgwLCA2KS5zcGxpdCgnJylcbiAgICAgIGRpZ2l0cy5mb3JFYWNoKChkaWdpdCwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGluZGV4IDwgNikge1xuICAgICAgICAgIHRoaXMudmVyaWZpY2F0aW9uRGlnaXRzW2luZGV4XSA9IGRpZ2l0XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICB0aGlzLnZlcmlmaWNhdGlvbkNvZGUgPSB0aGlzLnZlcmlmaWNhdGlvbkRpZ2l0cy5qb2luKCcnKVxuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZVBhc3N3b3JkVmlzaWJpbGl0eSgpIHtcbiAgICB0aGlzLnNob3dQYXNzd29yZCA9ICF0aGlzLnNob3dQYXNzd29yZFxuICB9XG4gIHRvZ2dsZUNvbmZpcm1QYXNzd29yZFZpc2liaWxpdHkoKSB7XG4gICAgdGhpcy5zaG93Q29uZmlybVBhc3N3b3JkID0gIXRoaXMuc2hvd0NvbmZpcm1QYXNzd29yZFxuICB9XG5cbiAgYXN5bmMgY29uZmlybUNvZGUoKSB7XG4gICAgY29uc3QgbG9hZGluZyA9IGF3YWl0IHRoaXMubG9hZGluZ0N0cmwuY3JlYXRlKHtcbiAgICAgIG1lc3NhZ2U6IHRoaXMudHJhbnNsYXRlU2VydmljZS5pbnN0YW50KCdnZW5lcmljLnBsZWFzZV93YWl0JyksXG4gICAgfSlcbiAgICBhd2FpdCBsb2FkaW5nLnByZXNlbnQoKVxuICAgIGF3YWl0IGNvbmZpcm1SZXNldFBhc3N3b3JkKHtcbiAgICAgIHVzZXJuYW1lOiB0aGlzLnBob25lLFxuICAgICAgY29uZmlybWF0aW9uQ29kZTogdGhpcy52ZXJpZmljYXRpb25Db2RlLFxuICAgICAgbmV3UGFzc3dvcmQ6IHRoaXMucGFzc3dvcmQsXG4gICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgbG9hZGluZy5kaXNtaXNzKClcbiAgICAgICAgdGhpcy50b2FzdFNlcnZpY2UuY3JlYXRlV2l0aEp1c3RNZXNzYWdlKFxuICAgICAgICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5pbnN0YW50KCdjb25maXJtX2NvZGUuc3VjY2VzcycpLFxuICAgICAgICAgIFRvYXN0VHlwZS5TdWNjZXNzXG4gICAgICAgIClcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc2lnbmluJ10sIHtcbiAgICAgICAgICBzdGF0ZTogeyBwaG9uZTogdGhpcy5waG9uZSB9LFxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgICAgIGxvYWRpbmcuZGlzbWlzcygpXG4gICAgICB9KVxuICB9XG5cbiAgb25JbnB1dChldmVudDogRXZlbnQpIHtcbiAgICBjb25zdCBpbnB1dCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50XG4gICAgY29uc3QgdmFsdWUgPSBpbnB1dC52YWx1ZS5yZXBsYWNlKC9bXjAtOV0vZywgJycpXG5cbiAgICBpZiAodmFsdWUubGVuZ3RoID09PSA2KSB7XG4gICAgICB0aGlzLnNsb3RzID0gdmFsdWUuc3BsaXQoJycpXG4gICAgICB0aGlzLnZlcmlmaWNhdGlvbkNvZGUgPSB2YWx1ZVxuICAgICAgdGhpcy5hY3RpdmVTbG90SW5kZXggPSA1XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBsYXN0Q2hhciA9IHZhbHVlW3ZhbHVlLmxlbmd0aCAtIDFdXG4gICAgaWYgKGxhc3RDaGFyKSB7XG4gICAgICB0aGlzLnNsb3RzW3RoaXMuYWN0aXZlU2xvdEluZGV4XSA9IGxhc3RDaGFyXG4gICAgICBpZiAodGhpcy5hY3RpdmVTbG90SW5kZXggPCA1KSB7XG4gICAgICAgIHRoaXMuYWN0aXZlU2xvdEluZGV4KytcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnZlcmlmaWNhdGlvbkNvZGUgPSB0aGlzLnNsb3RzLmpvaW4oJycpXG4gICAgaW5wdXQudmFsdWUgPSB0aGlzLnZlcmlmaWNhdGlvbkNvZGVcbiAgfVxuXG4gIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHRoaXMuYWN0aXZlU2xvdEluZGV4ID0gTWF0aC5tYXgoMCwgdGhpcy5hY3RpdmVTbG90SW5kZXggLSAxKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgdGhpcy5hY3RpdmVTbG90SW5kZXggPSBNYXRoLm1pbig1LCB0aGlzLmFjdGl2ZVNsb3RJbmRleCArIDEpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdCYWNrc3BhY2UnOlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGlmICh0aGlzLnNsb3RzW3RoaXMuYWN0aXZlU2xvdEluZGV4XSkge1xuICAgICAgICAgIHRoaXMuc2xvdHNbdGhpcy5hY3RpdmVTbG90SW5kZXhdID0gJydcbiAgICAgICAgICB0aGlzLnZlcmlmaWNhdGlvbkNvZGUgPSB0aGlzLnNsb3RzLmpvaW4oJycpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5hY3RpdmVTbG90SW5kZXggPiAwKSB7XG4gICAgICAgICAgdGhpcy5hY3RpdmVTbG90SW5kZXgtLVxuICAgICAgICAgIHRoaXMuc2xvdHNbdGhpcy5hY3RpdmVTbG90SW5kZXhdID0gJydcbiAgICAgICAgICB0aGlzLnZlcmlmaWNhdGlvbkNvZGUgPSB0aGlzLnNsb3RzLmpvaW4oJycpXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmICgvXlxcZCQvLnRlc3QoZXZlbnQua2V5KSkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICB0aGlzLnNsb3RzW3RoaXMuYWN0aXZlU2xvdEluZGV4XSA9IGV2ZW50LmtleVxuICAgICAgICAgIHRoaXMudmVyaWZpY2F0aW9uQ29kZSA9IHRoaXMuc2xvdHMuam9pbignJylcbiAgICAgICAgICBpZiAodGhpcy5hY3RpdmVTbG90SW5kZXggPCA1KSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVNsb3RJbmRleCsrXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHRoaXMub3RwSW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9IHRoaXMudmVyaWZpY2F0aW9uQ29kZVxuICAgIHRoaXMuc2V0SW5wdXRDdXJzb3IodGhpcy5hY3RpdmVTbG90SW5kZXgpXG4gIH1cblxuICBvblNsb3RDbGljayhpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5hY3RpdmVTbG90SW5kZXggPSBpbmRleFxuICAgIHRoaXMub3RwSW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpXG4gICAgdGhpcy5zZXRJbnB1dEN1cnNvcihpbmRleClcbiAgfVxuXG4gIHNldElucHV0Q3Vyc29yKHBvc2l0aW9uOiBudW1iZXIpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5vdHBJbnB1dC5uYXRpdmVFbGVtZW50LnNldFNlbGVjdGlvblJhbmdlKHBvc2l0aW9uLCBwb3NpdGlvbilcbiAgICB9KVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5vdHBJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKClcbiAgICB9LCAwKVxuICB9XG59XG4iLCAiPGFwcC1oZWFkZXI+PC9hcHAtaGVhZGVyPlxuPGlvbi1jb250ZW50IGNsYXNzPVwiaW9uLXBhZGRpbmdcIj5cbiAgPGlvbi1yb3cgY2xhc3M9XCJpb24tanVzdGlmeS1jb250ZW50LWNlbnRlciBpb24tbWFyZ2luLWhvcml6b250YWxcIj5cbiAgICA8aW9uLWNvbCBzaXplPVwiMTJcIiBzaXplLW1kPVwiNlwiIHNpemUtbGc9XCI0XCI+XG4gICAgICA8aDE+e3sgJ2NvbmZpcm1fY29kZS50aXRsZScgfCB0cmFuc2xhdGUgfX08L2gxPlxuICAgICAgPHA+e3sgJ2NvbmZpcm1fY29kZS5lbnRlcl9jb2RlJyB8IHRyYW5zbGF0ZSB9fTwvcD5cbiAgICA8L2lvbi1jb2w+XG4gIDwvaW9uLXJvdz5cblxuICA8aW9uLXJvdyBjbGFzcz1cImlvbi1qdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgPGlvbi1jb2wgc2l6ZT1cIjEyXCIgc2l6ZS1tZD1cIjZcIiBzaXplLWxnPVwiNFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImVjbC1vdHAtY29udGFpbmVyXCI+XG4gICAgICAgIDwhLS0gSGlkZGVuIGFjdHVhbCBpbnB1dCAtLT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgI290cElucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGlucHV0bW9kZT1cIm51bWVyaWNcIlxuICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9uZS10aW1lLWNvZGVcIlxuICAgICAgICAgIGNsYXNzPVwiZWNsLW90cC1pbnB1dFwiXG4gICAgICAgICAgW3ZhbHVlXT1cInZlcmlmaWNhdGlvbkNvZGVcIlxuICAgICAgICAgIChpbnB1dCk9XCJvbklucHV0KCRldmVudClcIlxuICAgICAgICAgIChrZXlkb3duKT1cIm9uS2V5RG93bigkZXZlbnQpXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8IS0tIFZpc3VhbCBzbG90cyAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImlvbi10ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwiaW9uLWp1c3RpZnktY29udGVudC1jZW50ZXIgaW9uLWFsaWduLWl0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgICBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1mbGV4XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8IS0tIEZpcnN0IGdyb3VwIC0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlvbi1hbGlnbi1pdGVtcy1jZW50ZXJcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGdhcDogNHB4XCI+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgc2xvdCBvZiBzbG90cy5zbGljZSgwLCAzKTsgbGV0IGkgPSBpbmRleFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJlY2wtb3RwLXNsb3QgaW9uLWFsaWduLWl0ZW1zLWNlbnRlciBpb24tanVzdGlmeS1jb250ZW50LWNlbnRlclwiXG4gICAgICAgICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJpID09PSBhY3RpdmVTbG90SW5kZXhcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJvblNsb3RDbGljayhpKVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2Pnt7IHNsb3QgfX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaSA9PT0gYWN0aXZlU2xvdEluZGV4XCIgY2xhc3M9XCJlY2wtb3RwLWNhcmV0XCI+PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwhLS0gU2Vjb25kIGdyb3VwIC0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlvbi1hbGlnbi1pdGVtcy1jZW50ZXJcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGdhcDogNHB4XCI+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgc2xvdCBvZiBzbG90cy5zbGljZSgzKTsgbGV0IGkgPSBpbmRleFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJlY2wtb3RwLXNsb3QgaW9uLWFsaWduLWl0ZW1zLWNlbnRlciBpb24tanVzdGlmeS1jb250ZW50LWNlbnRlclwiXG4gICAgICAgICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJpICsgMyA9PT0gYWN0aXZlU2xvdEluZGV4XCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwib25TbG90Q2xpY2soaSArIDMpXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXY+e3sgc2xvdCB9fTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICpuZ0lmPVwiaSArIDMgPT09IGFjdGl2ZVNsb3RJbmRleFwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImVjbC1vdHAtY2FyZXRcIlxuICAgICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPCEtLSBSZXN0IG9mIHlvdXIgZm9ybSAtLT5cbiAgICAgIDxpb24taXRlbT5cbiAgICAgICAgPGlvbi1pbnB1dFxuICAgICAgICAgIFt0eXBlXT1cInNob3dQYXNzd29yZCA/ICd0ZXh0JyA6ICdwYXNzd29yZCdcIlxuICAgICAgICAgIGxhYmVsUGxhY2VtZW50PVwiZmxvYXRpbmdcIlxuICAgICAgICAgIFsobmdNb2RlbCldPVwicGFzc3dvcmRcIlxuICAgICAgICAgIGxhYmVsPVwie3sgJ2NvbmZpcm1fY29kZS5uZXdfcGFzc3dvcmQnIHwgdHJhbnNsYXRlIH19XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIioqKioqKioqXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxpb24tYnV0dG9uXG4gICAgICAgICAgICBmaWxsPVwiY2xlYXJcIlxuICAgICAgICAgICAgc2xvdD1cImVuZFwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiU2hvdy9oaWRlXCJcbiAgICAgICAgICAgIChjbGljayk9XCJ0b2dnbGVQYXNzd29yZFZpc2liaWxpdHkoKVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGlvbi1pY29uXG4gICAgICAgICAgICAgIHNsb3Q9XCJpY29uLW9ubHlcIlxuICAgICAgICAgICAgICBuYW1lPVwiZXllLW91dGxpbmVcIlxuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgPjwvaW9uLWljb24+IDwvaW9uLWJ1dHRvbj48L2lvbi1pbnB1dFxuICAgICAgPjwvaW9uLWl0ZW0+XG4gICAgICA8aW9uLWl0ZW0+XG4gICAgICAgIDxpb24taW5wdXRcbiAgICAgICAgICBbdHlwZV09XCJzaG93Q29uZmlybVBhc3N3b3JkID8gJ3RleHQnIDogJ3Bhc3N3b3JkJ1wiXG4gICAgICAgICAgbGFiZWxQbGFjZW1lbnQ9XCJmbG9hdGluZ1wiXG4gICAgICAgICAgWyhuZ01vZGVsKV09XCJjb25maXJtUGFzc3dvcmRcIlxuICAgICAgICAgIGxhYmVsPVwie3sgJ2NvbmZpcm1fY29kZS5jb25maXJtX3Bhc3N3b3JkJyB8IHRyYW5zbGF0ZSB9fVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCIqKioqKioqKlwiXG4gICAgICAgID5cbiAgICAgICAgICA8aW9uLWJ1dHRvblxuICAgICAgICAgICAgZmlsbD1cImNsZWFyXCJcbiAgICAgICAgICAgIHNsb3Q9XCJlbmRcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNob3cvaGlkZVwiXG4gICAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlQ29uZmlybVBhc3N3b3JkVmlzaWJpbGl0eSgpXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW9uLWljb25cbiAgICAgICAgICAgICAgc2xvdD1cImljb24tb25seVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJleWUtb3V0bGluZVwiXG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICA+PC9pb24taWNvbj4gPC9pb24tYnV0dG9uPjwvaW9uLWlucHV0XG4gICAgICA+PC9pb24taXRlbT5cbiAgICA8L2lvbi1jb2w+XG4gIDwvaW9uLXJvdz5cbiAgPGlvbi1yb3dcbiAgICBjbGFzcz1cImlvbi1qdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGlvbi1tYXJnaW4taG9yaXpvbnRhbFwiXG4gICAgKm5nSWY9XCJwYXNzd29yZCAmJiBjb25maXJtUGFzc3dvcmQgJiYgIXZlcmlmaWNhdGlvbkNvZGVcIlxuICA+XG4gICAgPGlvbi1jb2wgc2l6ZT1cIjEyXCIgc2l6ZS1tZD1cIjZcIiBzaXplLWxnPVwiNFwiPlxuICAgICAgPHA+XG4gICAgICAgIDxpb24tdGV4dCBjb2xvcj1cImRhbmdlclwiXG4gICAgICAgICAgPnt7ICdjb25maXJtX2NvZGUuZXJyX21pc3NpbmdfY29kZScgfCB0cmFuc2xhdGUgfX08L2lvbi10ZXh0XG4gICAgICAgID5cbiAgICAgIDwvcD5cbiAgICA8L2lvbi1jb2w+XG4gIDwvaW9uLXJvdz5cbiAgPGlvbi1yb3dcbiAgICBjbGFzcz1cImlvbi1qdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGlvbi1tYXJnaW4taG9yaXpvbnRhbFwiXG4gICAgKm5nSWY9XCJwYXNzd29yZCAmJiBjb25maXJtUGFzc3dvcmQgJiYgKHBhc3N3b3JkLmxlbmd0aCA8IDYgfHwgY29uZmlybVBhc3N3b3JkLmxlbmd0aCA8IDYpXCJcbiAgPlxuICAgIDxpb24tY29sIHNpemU9XCIxMlwiIHNpemUtbWQ9XCI2XCIgc2l6ZS1sZz1cIjRcIj5cbiAgICAgIDxwPlxuICAgICAgICA8aW9uLXRleHQgY29sb3I9XCJkYW5nZXJcIlxuICAgICAgICAgID57eyAnY29uZmlybV9jb2RlLmVycl9wYXNzd29yZF9sZW5ndGgnIHwgdHJhbnNsYXRlIH19PC9pb24tdGV4dFxuICAgICAgICA+XG4gICAgICA8L3A+XG4gICAgPC9pb24tY29sPlxuICA8L2lvbi1yb3c+XG4gIDxpb24tcm93XG4gICAgY2xhc3M9XCJpb24tanVzdGlmeS1jb250ZW50LWNlbnRlciBpb24tbWFyZ2luLWhvcml6b250YWxcIlxuICAgICpuZ0lmPVwicGFzc3dvcmQgJiYgY29uZmlybVBhc3N3b3JkICYmIHBhc3N3b3JkICE9PSBjb25maXJtUGFzc3dvcmRcIlxuICA+XG4gICAgPGlvbi1jb2wgc2l6ZT1cIjEyXCIgc2l6ZS1tZD1cIjZcIiBzaXplLWxnPVwiNFwiPlxuICAgICAgPHA+XG4gICAgICAgIDxpb24tdGV4dCBjb2xvcj1cImRhbmdlclwiXG4gICAgICAgICAgPnt7ICdjb25maXJtX2NvZGUuZXJyX2RpZmZlcmVudF9wYXNzd29yZCcgfCB0cmFuc2xhdGUgfX08L2lvbi10ZXh0XG4gICAgICAgID5cbiAgICAgIDwvcD5cbiAgICA8L2lvbi1jb2w+XG4gIDwvaW9uLXJvdz5cbiAgPGlvbi1yb3cgY2xhc3M9XCJpb24tanVzdGlmeS1jb250ZW50LWNlbnRlciBpb24tbWFyZ2luLWhvcml6b250YWxcIj5cbiAgICA8aW9uLWNvbCBzaXplPVwiMTJcIiBzaXplLW1kPVwiNlwiIHNpemUtbGc9XCI0XCI+XG4gICAgICA8aW9uLWJ1dHRvblxuICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgZXhwYW5kPVwiYmxvY2tcIlxuICAgICAgICBzaGFwZT1cInJvdW5kXCJcbiAgICAgICAgY2xhc3M9XCJpb24tbWFyZ2luLXRvcCBlY2wtYnRuLS1zaGFkb3dcIlxuICAgICAgICBbZGlzYWJsZWRdPVwiKCFwYXNzd29yZCB8fCAhY29uZmlybVBhc3N3b3JkKSB8fCBwYXNzd29yZCAhPT0gY29uZmlybVBhc3N3b3JkIHx8ICF2ZXJpZmljYXRpb25Db2RlXCJcbiAgICAgICAgKGNsaWNrKT1cImNvbmZpcm1Db2RlKClcIlxuICAgICAgPlxuICAgICAgICB7eyAnY29uZmlybV9jb2RlLmNoYW5nZV9wYXNzd29yZCcgfCB0cmFuc2xhdGUgfX1cbiAgICAgIDwvaW9uLWJ1dHRvbj5cbiAgICA8L2lvbi1jb2w+XG4gIDwvaW9uLXJvdz5cbjwvaW9uLWNvbnRlbnQ+XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN1Q2dCLElB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
