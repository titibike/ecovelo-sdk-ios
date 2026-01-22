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
import {
  updatePassword
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
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  IonButton,
  IonCol,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonRow,
  LoadingController,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  RequiredValidator,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  Validators,
  setClassMetadata,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
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

// src/app/pages/account/change-password/change-password.page.ts
var _ChangePasswordPage = class _ChangePasswordPage {
  constructor(fb, loadingCtrl, toast, translate, authService, errorHandler) {
    this.fb = fb;
    this.loadingCtrl = loadingCtrl;
    this.toast = toast;
    this.translate = translate;
    this.authService = authService;
    this.errorHandler = errorHandler;
    this.passwordForm = this.fb.group({
      oldPassword: ["", [Validators.required, Validators.minLength(6)]],
      newPassword: ["", [Validators.required, Validators.minLength(6)]]
    });
  }
  changePassword() {
    return __async(this, null, function* () {
      const loader = yield this.loadingCtrl.create({
        message: this.translate.instant("auth.updating_password")
      });
      try {
        yield loader.present();
        if (this.passwordForm.valid) {
          yield updatePassword({
            oldPassword: this.passwordForm.value.oldPassword,
            newPassword: this.passwordForm.value.newPassword
          });
          this.toast.createWithJustMessage(this.translate.instant("new_password.success"), ToastType.Success);
          this.passwordForm.reset();
          this.authService.signOut();
        }
      } catch (error) {
        this.errorHandler.handleError(error);
      } finally {
        yield loader.dismiss();
      }
    });
  }
};
_ChangePasswordPage.\u0275fac = function ChangePasswordPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ChangePasswordPage)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(LoadingController), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ErrorHandlerService));
};
_ChangePasswordPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChangePasswordPage, selectors: [["app-change-password"]], decls: 21, vars: 15, consts: [[3, "defaultHref"], [1, "ion-padding"], [1, "ion-justify-content-center"], ["size", "12", "size-md", "8", "size-lg", "6"], [1, "ion-margin"], [3, "ngSubmit", "formGroup"], ["position", "floating"], ["type", "password", "formControlName", "oldPassword", "required", ""], ["type", "password", "formControlName", "newPassword", "required", ""], ["expand", "block", "type", "submit", 1, "ion-margin-top", 3, "disabled"]], template: function ChangePasswordPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-header", 0);
    \u0275\u0275elementStart(1, "ion-content", 1)(2, "ion-row", 2)(3, "ion-col", 3)(4, "h1", 4);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "form", 5);
    \u0275\u0275listener("ngSubmit", function ChangePasswordPage_Template_form_ngSubmit_7_listener() {
      return ctx.changePassword();
    });
    \u0275\u0275elementStart(8, "ion-item")(9, "ion-label", 6);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "ion-input", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "ion-item")(14, "ion-label", 6);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "ion-input", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "ion-button", 9);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("defaultHref", "/account/settings");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 7, "change_password.title"));
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.passwordForm);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, "change_password.current_password"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 11, "change_password.new_password"));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx.passwordForm.valid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 13, "change_password.update_button"), " ");
  }
}, dependencies: [
  IonContent,
  CommonModule,
  FormsModule,
  \u0275NgNoValidate,
  NgControlStatus,
  NgControlStatusGroup,
  RequiredValidator,
  HeaderComponent,
  ReactiveFormsModule,
  FormGroupDirective,
  FormControlName,
  IonItem,
  IonInput,
  IonButton,
  IonLabel,
  IonRow,
  IonCol,
  TranslateModule,
  TranslatePipe
], encapsulation: 2 });
var ChangePasswordPage = _ChangePasswordPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChangePasswordPage, [{
    type: Component,
    args: [{ selector: "app-change-password", imports: [
      IonContent,
      CommonModule,
      FormsModule,
      HeaderComponent,
      ReactiveFormsModule,
      IonItem,
      IonInput,
      IonButton,
      IonLabel,
      IonRow,
      IonCol,
      TranslateModule
    ], template: `<app-header [defaultHref]="'/account/settings'"></app-header>
<ion-content class="ion-padding">
  <ion-row class="ion-justify-content-center">
    <ion-col size="12" size-md="8" size-lg="6">
      <h1 class="ion-margin">{{ 'change_password.title' | translate }}</h1>

      <form [formGroup]="passwordForm" (ngSubmit)="changePassword()">
        <ion-item>
          <ion-label position="floating"
            >{{ 'change_password.current_password' | translate }}</ion-label
          >
          <ion-input type="password" formControlName="oldPassword" required>
          </ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating"
            >{{ 'change_password.new_password' | translate }}</ion-label
          >
          <ion-input type="password" formControlName="newPassword" required>
          </ion-input>
        </ion-item>

        <ion-button
          expand="block"
          type="submit"
          class="ion-margin-top"
          [disabled]="!passwordForm.valid"
        >
          {{ 'change_password.update_button' | translate }}
        </ion-button>
      </form>
    </ion-col>
  </ion-row>
</ion-content>
` }]
  }], () => [{ type: FormBuilder }, { type: LoadingController }, { type: ToastService }, { type: TranslateService }, { type: AuthService }, { type: ErrorHandlerService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChangePasswordPage, { className: "ChangePasswordPage", filePath: "src/app/pages/account/change-password/change-password.page.ts", lineNumber: 49 });
})();
export {
  ChangePasswordPage
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wYWdlcy9hY2NvdW50L2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQucGFnZS50cyIsICJzcmMvYXBwL3BhZ2VzL2FjY291bnQvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5wYWdlLmh0bWwiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJ1xuaW1wb3J0IHtcbiAgSW9uQ29udGVudCxcbiAgSW9uSGVhZGVyLFxuICBJb25UaXRsZSxcbiAgSW9uVG9vbGJhcixcbiAgSW9uSXRlbSxcbiAgSW9uSW5wdXQsXG4gIElvbkJ1dHRvbixcbiAgSW9uTGFiZWwsXG4gIExvYWRpbmdDb250cm9sbGVyLFxuICBJb25Sb3csXG4gIElvbkNvbCxcbn0gZnJvbSAnQGlvbmljL2FuZ3VsYXIvc3RhbmRhbG9uZSdcbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCB9IGZyb20gJ3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudCdcbmltcG9ydCB7IHVwZGF0ZVBhc3N3b3JkIH0gZnJvbSAnYXdzLWFtcGxpZnkvYXV0aCdcbmltcG9ydCB7XG4gIEZvcm1CdWlsZGVyLFxuICBGb3JtR3JvdXAsXG4gIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gIFZhbGlkYXRvcnMsXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJ1xuaW1wb3J0IHsgVG9hc3RTZXJ2aWNlLCBUb2FzdFR5cGUgfSBmcm9tICdzcmMvYXBwL3NlcnZpY2VzL3V0aWxzL3RvYXN0LnNlcnZpY2UnXG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUsIFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJ1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICdzcmMvYXBwL3NlcnZpY2VzL2V4dGVybmFsL2F1dGguc2VydmljZSdcbmltcG9ydCB7IEVycm9ySGFuZGxlclNlcnZpY2UgfSBmcm9tICdzcmMvYXBwL3NlcnZpY2VzL3V0aWxzL2Vycm9yLWhhbmRsZXIuc2VydmljZSdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWNoYW5nZS1wYXNzd29yZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGFuZ2UtcGFzc3dvcmQucGFnZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hhbmdlLXBhc3N3b3JkLnBhZ2Uuc2NzcyddLFxuICBpbXBvcnRzOiBbXG4gICAgSW9uQ29udGVudCxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgSGVhZGVyQ29tcG9uZW50LFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgSW9uSXRlbSxcbiAgICBJb25JbnB1dCxcbiAgICBJb25CdXR0b24sXG4gICAgSW9uTGFiZWwsXG4gICAgSW9uUm93LFxuICAgIElvbkNvbCxcbiAgICBUcmFuc2xhdGVNb2R1bGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkUGFnZSB7XG4gIHBhc3N3b3JkRm9ybTogRm9ybUdyb3VwXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXG4gICAgcHJpdmF0ZSBsb2FkaW5nQ3RybDogTG9hZGluZ0NvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSB0b2FzdDogVG9hc3RTZXJ2aWNlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgZXJyb3JIYW5kbGVyOiBFcnJvckhhbmRsZXJTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMucGFzc3dvcmRGb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICBvbGRQYXNzd29yZDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNildXSxcbiAgICAgIG5ld1Bhc3N3b3JkOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg2KV1dLFxuICAgIH0pXG4gIH1cblxuICBhc3luYyBjaGFuZ2VQYXNzd29yZCgpIHtcbiAgICBjb25zdCBsb2FkZXIgPSBhd2FpdCB0aGlzLmxvYWRpbmdDdHJsLmNyZWF0ZSh7XG4gICAgICBtZXNzYWdlOiB0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KCdhdXRoLnVwZGF0aW5nX3Bhc3N3b3JkJyksXG4gICAgfSlcblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBsb2FkZXIucHJlc2VudCgpXG4gICAgICBpZiAodGhpcy5wYXNzd29yZEZvcm0udmFsaWQpIHtcbiAgICAgICAgYXdhaXQgdXBkYXRlUGFzc3dvcmQoe1xuICAgICAgICAgIG9sZFBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkRm9ybS52YWx1ZS5vbGRQYXNzd29yZCxcbiAgICAgICAgICBuZXdQYXNzd29yZDogdGhpcy5wYXNzd29yZEZvcm0udmFsdWUubmV3UGFzc3dvcmQsXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMudG9hc3QuY3JlYXRlV2l0aEp1c3RNZXNzYWdlKFxuICAgICAgICAgIHRoaXMudHJhbnNsYXRlLmluc3RhbnQoJ25ld19wYXNzd29yZC5zdWNjZXNzJyksXG4gICAgICAgICAgVG9hc3RUeXBlLlN1Y2Nlc3NcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnBhc3N3b3JkRm9ybS5yZXNldCgpXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uuc2lnbk91dCgpXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKGVycm9yKVxuICAgIH0gZmluYWxseSB7XG4gICAgICBhd2FpdCBsb2FkZXIuZGlzbWlzcygpXG4gICAgfVxuICB9XG59XG4iLCAiPGFwcC1oZWFkZXIgW2RlZmF1bHRIcmVmXT1cIicvYWNjb3VudC9zZXR0aW5ncydcIj48L2FwcC1oZWFkZXI+XG48aW9uLWNvbnRlbnQgY2xhc3M9XCJpb24tcGFkZGluZ1wiPlxuICA8aW9uLXJvdyBjbGFzcz1cImlvbi1qdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgPGlvbi1jb2wgc2l6ZT1cIjEyXCIgc2l6ZS1tZD1cIjhcIiBzaXplLWxnPVwiNlwiPlxuICAgICAgPGgxIGNsYXNzPVwiaW9uLW1hcmdpblwiPnt7ICdjaGFuZ2VfcGFzc3dvcmQudGl0bGUnIHwgdHJhbnNsYXRlIH19PC9oMT5cblxuICAgICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJwYXNzd29yZEZvcm1cIiAobmdTdWJtaXQpPVwiY2hhbmdlUGFzc3dvcmQoKVwiPlxuICAgICAgICA8aW9uLWl0ZW0+XG4gICAgICAgICAgPGlvbi1sYWJlbCBwb3NpdGlvbj1cImZsb2F0aW5nXCJcbiAgICAgICAgICAgID57eyAnY2hhbmdlX3Bhc3N3b3JkLmN1cnJlbnRfcGFzc3dvcmQnIHwgdHJhbnNsYXRlIH19PC9pb24tbGFiZWxcbiAgICAgICAgICA+XG4gICAgICAgICAgPGlvbi1pbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBmb3JtQ29udHJvbE5hbWU9XCJvbGRQYXNzd29yZFwiIHJlcXVpcmVkPlxuICAgICAgICAgIDwvaW9uLWlucHV0PlxuICAgICAgICA8L2lvbi1pdGVtPlxuXG4gICAgICAgIDxpb24taXRlbT5cbiAgICAgICAgICA8aW9uLWxhYmVsIHBvc2l0aW9uPVwiZmxvYXRpbmdcIlxuICAgICAgICAgICAgPnt7ICdjaGFuZ2VfcGFzc3dvcmQubmV3X3Bhc3N3b3JkJyB8IHRyYW5zbGF0ZSB9fTwvaW9uLWxhYmVsXG4gICAgICAgICAgPlxuICAgICAgICAgIDxpb24taW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgZm9ybUNvbnRyb2xOYW1lPVwibmV3UGFzc3dvcmRcIiByZXF1aXJlZD5cbiAgICAgICAgICA8L2lvbi1pbnB1dD5cbiAgICAgICAgPC9pb24taXRlbT5cblxuICAgICAgICA8aW9uLWJ1dHRvblxuICAgICAgICAgIGV4cGFuZD1cImJsb2NrXCJcbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICBjbGFzcz1cImlvbi1tYXJnaW4tdG9wXCJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwiIXBhc3N3b3JkRm9ybS52YWxpZFwiXG4gICAgICAgID5cbiAgICAgICAgICB7eyAnY2hhbmdlX3Bhc3N3b3JkLnVwZGF0ZV9idXR0b24nIHwgdHJhbnNsYXRlIH19XG4gICAgICAgIDwvaW9uLWJ1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2lvbi1jb2w+XG4gIDwvaW9uLXJvdz5cbjwvaW9uLWNvbnRlbnQ+XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdETSxJQUFPLHNCQUFQLE1BQU8sb0JBQWtCO0VBRzdCLFlBQ1UsSUFDQSxhQUNBLE9BQ0EsV0FDQSxhQUNBLGNBQWlDO0FBTGpDLFNBQUEsS0FBQTtBQUNBLFNBQUEsY0FBQTtBQUNBLFNBQUEsUUFBQTtBQUNBLFNBQUEsWUFBQTtBQUNBLFNBQUEsY0FBQTtBQUNBLFNBQUEsZUFBQTtBQUVSLFNBQUssZUFBZSxLQUFLLEdBQUcsTUFBTTtNQUNoQyxhQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsVUFBVSxXQUFXLFVBQVUsQ0FBQyxDQUFDLENBQUM7TUFDaEUsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLFVBQVUsV0FBVyxVQUFVLENBQUMsQ0FBQyxDQUFDO0tBQ2pFO0VBQ0g7RUFFTSxpQkFBYzs7QUFDbEIsWUFBTSxTQUFTLE1BQU0sS0FBSyxZQUFZLE9BQU87UUFDM0MsU0FBUyxLQUFLLFVBQVUsUUFBUSx3QkFBd0I7T0FDekQ7QUFFRCxVQUFJO0FBQ0YsY0FB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
