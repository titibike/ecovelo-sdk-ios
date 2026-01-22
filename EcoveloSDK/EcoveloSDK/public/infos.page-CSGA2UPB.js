import {
  HeaderComponent
} from "./chunk-AVAJ3QHV.js";
import "./chunk-K2AWDLYV.js";
import {
  IonButton,
  IonCol,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonRow,
  IonSpinner,
  IonicModule,
  TextValueAccessorDirective
} from "./chunk-Y4K6NO5T.js";
import {
  AccountService
} from "./chunk-XK4I5MHM.js";
import "./chunk-FOJAXRYS.js";
import {
  ToastService
} from "./chunk-SARQRLZR.js";
import "./chunk-3E6DEK7U.js";
import "./chunk-U6SJAXLK.js";
import {
  CommonModule,
  Component,
  FormsModule,
  NgControlStatus,
  NgModel,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  effect,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
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

// src/app/pages/account/infos/infos.page.ts
function InfosPage_Conditional_8_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-spinner", 9);
  }
}
function InfosPage_Conditional_8_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "generic.edit"), " ");
  }
}
function InfosPage_Conditional_8_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-note", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "settings.infos.errors.invalid_email"), " ");
  }
}
function InfosPage_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-list", 5)(1, "ion-item", 6)(2, "ion-label");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "ion-item", 6)(5, "ion-label");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "ion-item", 6)(8, "ion-input", 7);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function InfosPage_Conditional_8_Template_ion_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.emailValue, $event) || (ctx_r1.emailValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(10, "ion-button", 8);
    \u0275\u0275listener("click", function InfosPage_Conditional_8_Template_ion_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changeEmail());
    });
    \u0275\u0275template(11, InfosPage_Conditional_8_Conditional_11_Template, 1, 0, "ion-spinner", 9)(12, InfosPage_Conditional_8_Conditional_12_Template, 2, 3);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(13, InfosPage_Conditional_8_Conditional_13_Template, 3, 3, "ion-note", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 11)(15, "ion-note", 12);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.cyclistState.cyclist.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.cyclistState.cyclist.phone_number);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ion-invalid", ctx_r1.emailValue && !ctx_r1.isEmailValid);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(9, 11, "generic.email"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.emailValue);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isButtonDisabled || ctx_r1.isChangingEmail);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isChangingEmail ? 11 : 12);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.emailValue && !ctx_r1.isEmailValid ? 13 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(17, 13, "settings.infos.email_changed_note"), " ");
  }
}
var _InfosPage = class _InfosPage {
  constructor(toastrService, translateService, accountService) {
    this.toastrService = toastrService;
    this.translateService = translateService;
    this.accountService = accountService;
    this.cyclistState = {
      state: "unknown",
      blocked_reasons: ["Unknown account state"]
    };
    this.nextUrl = null;
    this.emailValue = "";
    this.isChangingEmail = false;
    this.emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    effect(() => {
      var _a;
      this.cyclistState = this.accountService.cyclistState();
      if (this.cyclistState.state !== "unknown" && this.cyclistState.state !== "error" && ((_a = this.cyclistState.cyclist) == null ? void 0 : _a.email)) {
        this.emailValue = this.cyclistState.cyclist.email;
      }
    });
  }
  get isEmailValid() {
    return this.emailRegex.test(this.emailValue);
  }
  get isButtonDisabled() {
    var _a;
    const originalEmail = this.cyclistState.state !== "unknown" && this.cyclistState.state !== "error" ? ((_a = this.cyclistState.cyclist) == null ? void 0 : _a.email) || "" : "";
    return this.emailValue === originalEmail || !this.isEmailValid;
  }
  changeEmail() {
    return __async(this, null, function* () {
      if (this.isButtonDisabled || this.isChangingEmail) {
        return;
      }
      this.isChangingEmail = true;
      try {
        yield this.accountService.changeEmail(this.emailValue);
      } catch (error) {
        console.error("Error changing email:", error);
      } finally {
        this.isChangingEmail = false;
      }
    });
  }
};
_InfosPage.\u0275fac = function InfosPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InfosPage)(\u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(AccountService));
};
_InfosPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InfosPage, selectors: [["app-infos-page"]], decls: 9, vars: 5, consts: [[3, "defaultHref"], [1, "ion-padding"], [1, "ion-justify-content-center"], ["size", "12", "size-md", "8", "size-lg", "6"], [1, "ion-margin"], ["mode", "ios", "lines", "full", 3, "inset"], ["color", "grey"], ["type", "email", 3, "ngModelChange", "ngModel", "placeholder"], ["slot", "end", "color", "primary", "fill", "outline", 3, "click", "disabled"], ["name", "dots", 2, "max-height", "20px"], ["color", "danger", 1, "ion-padding-start"], [1, "ion-margin-horizontal"], ["color", "medium"]], template: function InfosPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-header", 0);
    \u0275\u0275elementStart(1, "ion-content")(2, "ion-content", 1)(3, "ion-row", 2)(4, "ion-col", 3)(5, "h1", 4);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, InfosPage_Conditional_8_Template, 18, 15);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("defaultHref", "/account/settings");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 3, "settings.infos.title"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.cyclistState && ctx.cyclistState.state !== "unknown" && ctx.cyclistState.state !== "error" ? 8 : -1);
  }
}, dependencies: [
  CommonModule,
  IonicModule,
  IonButton,
  IonCol,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonRow,
  IonSpinner,
  TextValueAccessorDirective,
  FormsModule,
  NgControlStatus,
  NgModel,
  HeaderComponent,
  TranslateModule,
  TranslatePipe
], encapsulation: 2 });
var InfosPage = _InfosPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InfosPage, [{
    type: Component,
    args: [{ selector: "app-infos-page", imports: [
      CommonModule,
      IonicModule,
      FormsModule,
      HeaderComponent,
      TranslateModule
    ], template: `<app-header [defaultHref]="'/account/settings'"></app-header>
<ion-content>
  <ion-content class="ion-padding">
    <ion-row class="ion-justify-content-center">
      <ion-col size="12" size-md="8" size-lg="6">
        <h1 class="ion-margin">{{ 'settings.infos.title' | translate }}</h1>
        @if(cyclistState && cyclistState.state !== 'unknown' &&
        cyclistState.state !== 'error') {
        <ion-list [inset]="true" mode="ios" lines="full">
          <ion-item color="grey">
            <ion-label>{{ cyclistState.cyclist.name }}</ion-label>
          </ion-item>
          <ion-item color="grey">
            <ion-label>{{ cyclistState.cyclist.phone_number }}</ion-label>
          </ion-item>
          <ion-item color="grey">
            <ion-input
              [(ngModel)]="emailValue"
              type="email"
              [class.ion-invalid]="emailValue && !isEmailValid"
              placeholder="{{ 'generic.email' | translate }}"
            >
              <ion-button
                slot="end"
                color="primary"
                fill="outline"
                [disabled]="isButtonDisabled || isChangingEmail"
                (click)="changeEmail()"
              >
                @if(isChangingEmail) {
                <ion-spinner name="dots" style="max-height: 20px"></ion-spinner>
                } @else { {{ 'generic.edit' | translate }} }
              </ion-button>
            </ion-input>
          </ion-item>
          @if(emailValue && !isEmailValid) {
          <ion-note color="danger" class="ion-padding-start">
            {{ 'settings.infos.errors.invalid_email' | translate }}
          </ion-note>
          }
        </ion-list>
        <div class="ion-margin-horizontal">
          <ion-note color="medium"
            >{{ 'settings.infos.email_changed_note' | translate }}
          </ion-note>
        </div>
        }
      </ion-col>
    </ion-row>
  </ion-content>
</ion-content>
` }]
  }], () => [{ type: ToastService }, { type: TranslateService }, { type: AccountService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InfosPage, { className: "InfosPage", filePath: "src/app/pages/account/infos/infos.page.ts", lineNumber: 23 });
})();
export {
  InfosPage
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wYWdlcy9hY2NvdW50L2luZm9zL2luZm9zLnBhZ2UudHMiLCAic3JjL2FwcC9wYWdlcy9hY2NvdW50L2luZm9zL2luZm9zLnBhZ2UuaHRtbCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgQ29tcG9uZW50LCBlZmZlY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJ1xuaW1wb3J0IHsgSW9uaWNNb2R1bGUgfSBmcm9tICdAaW9uaWMvYW5ndWxhcidcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnXG5pbXBvcnQgeyBIZWFkZXJDb21wb25lbnQgfSBmcm9tICdzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQnXG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUsIFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJ1xuaW1wb3J0IHsgVG9hc3RTZXJ2aWNlIH0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy91dGlscy90b2FzdC5zZXJ2aWNlJ1xuaW1wb3J0IHtcbiAgQWNjb3VudFNlcnZpY2UsXG4gIGN5Y2xpc3RTdGF0ZSxcbn0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy9hcGktd3JhcHBlcnMvYWNjb3VudC5zZXJ2aWNlJ1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWluZm9zLXBhZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW5mb3MucGFnZS5odG1sJyxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBJb25pY01vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBIZWFkZXJDb21wb25lbnQsXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBJbmZvc1BhZ2Uge1xuICBjeWNsaXN0U3RhdGU6IGN5Y2xpc3RTdGF0ZSA9IHtcbiAgICBzdGF0ZTogJ3Vua25vd24nLFxuICAgIGJsb2NrZWRfcmVhc29uczogWydVbmtub3duIGFjY291bnQgc3RhdGUnXSxcbiAgfVxuICBuZXh0VXJsOiBzdHJpbmcgfCBudWxsID0gbnVsbFxuICBlbWFpbFZhbHVlOiBzdHJpbmcgPSAnJ1xuICBpc0NoYW5naW5nRW1haWw6IGJvb2xlYW4gPSBmYWxzZVxuXG4gIHByaXZhdGUgZW1haWxSZWdleCA9IC9eW2EtekEtWjAtOS5fJSstXStAW2EtekEtWjAtOS4tXStcXC5bYS16QS1aXXsyLH0kL1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRvYXN0clNlcnZpY2U6IFRvYXN0U2VydmljZSxcbiAgICBwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhY2NvdW50U2VydmljZTogQWNjb3VudFNlcnZpY2VcbiAgKSB7XG4gICAgZWZmZWN0KCgpID0+IHtcbiAgICAgIHRoaXMuY3ljbGlzdFN0YXRlID0gdGhpcy5hY2NvdW50U2VydmljZS5jeWNsaXN0U3RhdGUoKVxuICAgICAgLy8gSW5pdGlhbGlzZXIgZW1haWxWYWx1ZSBhdmVjIGwnZW1haWwgZHUgY3ljbGlzdGVcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5jeWNsaXN0U3RhdGUuc3RhdGUgIT09ICd1bmtub3duJyAmJlxuICAgICAgICB0aGlzLmN5Y2xpc3RTdGF0ZS5zdGF0ZSAhPT0gJ2Vycm9yJyAmJlxuICAgICAgICB0aGlzLmN5Y2xpc3RTdGF0ZS5jeWNsaXN0Py5lbWFpbFxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuZW1haWxWYWx1ZSA9IHRoaXMuY3ljbGlzdFN0YXRlLmN5Y2xpc3QuZW1haWxcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZ2V0IGlzRW1haWxWYWxpZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5lbWFpbFJlZ2V4LnRlc3QodGhpcy5lbWFpbFZhbHVlKVxuICB9XG5cbiAgZ2V0IGlzQnV0dG9uRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgY29uc3Qgb3JpZ2luYWxFbWFpbCA9XG4gICAgICB0aGlzLmN5Y2xpc3RTdGF0ZS5zdGF0ZSAhPT0gJ3Vua25vd24nICYmXG4gICAgICB0aGlzLmN5Y2xpc3RTdGF0ZS5zdGF0ZSAhPT0gJ2Vycm9yJ1xuICAgICAgICA/IHRoaXMuY3ljbGlzdFN0YXRlLmN5Y2xpc3Q/LmVtYWlsIHx8ICcnXG4gICAgICAgIDogJydcbiAgICByZXR1cm4gdGhpcy5lbWFpbFZhbHVlID09PSBvcmlnaW5hbEVtYWlsIHx8ICF0aGlzLmlzRW1haWxWYWxpZFxuICB9XG5cbiAgYXN5bmMgY2hhbmdlRW1haWwoKSB7XG4gICAgaWYgKHRoaXMuaXNCdXR0b25EaXNhYmxlZCB8fCB0aGlzLmlzQ2hhbmdpbmdFbWFpbCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5pc0NoYW5naW5nRW1haWwgPSB0cnVlXG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5hY2NvdW50U2VydmljZS5jaGFuZ2VFbWFpbCh0aGlzLmVtYWlsVmFsdWUpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIEwnZXJyZXVyIGVzdCBkw6lqw6AgZ8OpcsOpZSBkYW5zIGxlIHNlcnZpY2UgYXZlYyB1biB0b2FzdFxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY2hhbmdpbmcgZW1haWw6JywgZXJyb3IpXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuaXNDaGFuZ2luZ0VtYWlsID0gZmFsc2VcbiAgICB9XG4gIH1cbn1cbiIsICI8YXBwLWhlYWRlciBbZGVmYXVsdEhyZWZdPVwiJy9hY2NvdW50L3NldHRpbmdzJ1wiPjwvYXBwLWhlYWRlcj5cbjxpb24tY29udGVudD5cbiAgPGlvbi1jb250ZW50IGNsYXNzPVwiaW9uLXBhZGRpbmdcIj5cbiAgICA8aW9uLXJvdyBjbGFzcz1cImlvbi1qdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICA8aW9uLWNvbCBzaXplPVwiMTJcIiBzaXplLW1kPVwiOFwiIHNpemUtbGc9XCI2XCI+XG4gICAgICAgIDxoMSBjbGFzcz1cImlvbi1tYXJnaW5cIj57eyAnc2V0dGluZ3MuaW5mb3MudGl0bGUnIHwgdHJhbnNsYXRlIH19PC9oMT5cbiAgICAgICAgQGlmKGN5Y2xpc3RTdGF0ZSAmJiBjeWNsaXN0U3RhdGUuc3RhdGUgIT09ICd1bmtub3duJyAmJlxuICAgICAgICBjeWNsaXN0U3RhdGUuc3RhdGUgIT09ICdlcnJvcicpIHtcbiAgICAgICAgPGlvbi1saXN0IFtpbnNldF09XCJ0cnVlXCIgbW9kZT1cImlvc1wiIGxpbmVzPVwiZnVsbFwiPlxuICAgICAgICAgIDxpb24taXRlbSBjb2xvcj1cImdyZXlcIj5cbiAgICAgICAgICAgIDxpb24tbGFiZWw+e3sgY3ljbGlzdFN0YXRlLmN5Y2xpc3QubmFtZSB9fTwvaW9uLWxhYmVsPlxuICAgICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICAgICAgPGlvbi1pdGVtIGNvbG9yPVwiZ3JleVwiPlxuICAgICAgICAgICAgPGlvbi1sYWJlbD57eyBjeWNsaXN0U3RhdGUuY3ljbGlzdC5waG9uZV9udW1iZXIgfX08L2lvbi1sYWJlbD5cbiAgICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgICAgIDxpb24taXRlbSBjb2xvcj1cImdyZXlcIj5cbiAgICAgICAgICAgIDxpb24taW5wdXRcbiAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJlbWFpbFZhbHVlXCJcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgW2NsYXNzLmlvbi1pbnZhbGlkXT1cImVtYWlsVmFsdWUgJiYgIWlzRW1haWxWYWxpZFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3sgJ2dlbmVyaWMuZW1haWwnIHwgdHJhbnNsYXRlIH19XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGlvbi1idXR0b25cbiAgICAgICAgICAgICAgICBzbG90PVwiZW5kXCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJvdXRsaW5lXCJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiaXNCdXR0b25EaXNhYmxlZCB8fCBpc0NoYW5naW5nRW1haWxcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJjaGFuZ2VFbWFpbCgpXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEBpZihpc0NoYW5naW5nRW1haWwpIHtcbiAgICAgICAgICAgICAgICA8aW9uLXNwaW5uZXIgbmFtZT1cImRvdHNcIiBzdHlsZT1cIm1heC1oZWlnaHQ6IDIwcHhcIj48L2lvbi1zcGlubmVyPlxuICAgICAgICAgICAgICAgIH0gQGVsc2UgeyB7eyAnZ2VuZXJpYy5lZGl0JyB8IHRyYW5zbGF0ZSB9fSB9XG4gICAgICAgICAgICAgIDwvaW9uLWJ1dHRvbj5cbiAgICAgICAgICAgIDwvaW9uLWlucHV0PlxuICAgICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICAgICAgQGlmKGVtYWlsVmFsdWUgJiYgIWlzRW1haWxWYWxpZCkge1xuICAgICAgICAgIDxpb24tbm90ZSBjb2xvcj1cImRhbmdlclwiIGNsYXNzPVwiaW9uLXBhZGRpbmctc3RhcnRcIj5cbiAgICAgICAgICAgIHt7ICdzZXR0aW5ncy5pbmZvcy5lcnJvcnMuaW52YWxpZF9lbWFpbCcgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgICA8L2lvbi1ub3RlPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9pb24tbGlzdD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImlvbi1tYXJnaW4taG9yaXpvbnRhbFwiPlxuICAgICAgICAgIDxpb24tbm90ZSBjb2xvcj1cIm1lZGl1bVwiXG4gICAgICAgICAgICA+e3sgJ3NldHRpbmdzLmluZm9zLmVtYWlsX2NoYW5nZWRfbm90ZScgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgICA8L2lvbi1ub3RlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgPC9pb24tY29sPlxuICAgIDwvaW9uLXJvdz5cbiAgPC9pb24tY29udGVudD5cbjwvaW9uLWNvbnRlbnQ+XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM4QmdCLElBQUEsb0JBQUEsR0FBQSxlQUFBLENBQUE7Ozs7O0FBQ1UsSUFBQSxpQkFBQSxDQUFBOzs7O0FBQUEsSUFBQSw2QkFBQSxLQUFBLHNCQUFBLEdBQUEsR0FBQSxjQUFBLEdBQUEsR0FBQTs7Ozs7QUFLaEIsSUFBQSx5QkFBQSxHQUFBLFlBQUEsRUFBQTtBQUNFLElBQUEsaUJBQUEsQ0FBQTs7QUFDRixJQUFBLHVCQUFBOzs7QUFERSxJQUFBLG9CQUFBO0FBQUEsSUFBQSw2QkFBQSxLQUFBLHNCQUFBLEdBQUEsR0FBQSxxQ0FBQSxHQUFBLEdBQUE7Ozs7OztBQTdCSixJQUFBLHlCQUFBLEdBQUEsWUFBQSxDQUFBLEVBQWlELEdBQUEsWUFBQSxDQUFBLEVBQ3hCLEdBQUEsV0FBQTtBQUNWLElBQUEsaUJBQUEsQ0FBQTtBQUErQixJQUFBLHVCQUFBLEVBQVk7QUFFeEQsSUFBQSx5QkFBQSxHQUFBLFlBQUEsQ0FBQSxFQUF1QixHQUFBLFdBQUE7QUFDVixJQUFBLGlCQUFBLENBQUE7QUFBdUMsSUFBQSx1QkFBQSxFQUFZO0FBRWhFLElBQUEseUJBQUEsR0FBQSxZQUFBLENBQUEsRUFBdUIsR0FBQSxhQUFBLENBQUE7O0FBRW5CLElBQUEsMkJBQUEsaUJBQUEsU0FBQSxvRUFBQSxRQUFBO0FBQUEsTUFBQSx3QkFBQSxHQUFBO0FBQUEsWUFBQSxTQUFBLHdCQUFBO0FBQUEsTUFBQSw2QkFBQSxPQUFBLFlBQUEsTUFBQSxNQUFBLE9BQUEsYUFBQTtBQUFBLGFBQUEsc0JBQUEsTUFBQTtJQUFBLENBQUE7QUFLQSxJQUFBLHlCQUFBLElBQUEsY0FBQSxDQUFBO0FBS0UsSUFBQSxxQkFBQSxTQUFBLFNBQUEsZ0VBQUE7QUFBQSxNQUFBLHdCQUFBLEdBQUE7QUFBQSxZQUFBLFNBQUEsd0JBQUE7QUFBQSxhQUFBLHNCQUFTLE9BQUEsWUFBQSxDQUFhO0lBQUEsQ0FBQTtBQUV0QixJQUFBLHFCQUFBLElBQUEsaURBQUEsR0FBQSxHQUFBLGVBQUEsQ0FBQSxFQUFzQixJQUFBLGlEQUFBLEdBQUEsQ0FBQTtBQUd4QixJQUFBLHVCQUFBLEVBQWEsRUFDSDtBQUVkLElBQUEscUJBQUEsSUFBQSxpREFBQSxHQUFBLEdBQUEsWUFBQSxFQUFBO0FBS0YsSUFBQSx1QkFBQTtBQUNBLElBQUEseUJBQUEsSUFBQSxPQUFBLEVBQUEsRUFBbUMsSUFBQSxZQUFBLEVBQUE7QUFFOUIsSUFBQSxpQkFBQSxFQUFBOztBQUNILElBQUEsdUJBQUEsRUFBVzs7OztBQXBDSCxJQUFBLHFCQUFBLFNBQUEsSUFBQTtBQUVLLElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEsNEJBQUEsT0FBQSxhQUFBLFFBQUEsSUFBQTtBQUdBLElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEsNEJBQUEsT0FBQSxhQUFBLFFBQUEsWUFBQTtBQU1ULElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEsc0JBQUEsZUFBQSxPQUFBLGNBQUEsQ0FBQSxPQUFBLFlBQUE7QUFDQSxJQUFBLGdDQUFBLGVBQUEsc0JBQUEsR0FBQSxJQUFBLGVBQUEsQ0FBQTtBQUhBLElBQUEsMkJBQUEsV0FBQSxPQUFBLFVBQUE7QUFTRSxJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLHFCQUFBLFlBQUEsT0FBQSxvQkFBQSxPQUFBLGVBQUE7QUFHQSxJQUFBLG9CQUFBO0FBQUEsSUFBQSx3QkFBQSxPQUFBLGtCQUFBLEtBQUEsRUFBQTtBQU1OLElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEsd0JBQUEsT0FBQSxjQUFBLENBQUEsT0FBQSxlQUFBLEtBQUEsRUFBQTtBQVFHLElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEsNkJBQUEsSUFBQSxzQkFBQSxJQUFBLElBQUEsbUNBQUEsR0FBQSxHQUFBOzs7QURyQlAsSUFBTyxhQUFQLE1BQU8sV0FBUztFQVVwQixZQUNVLGVBQ0Esa0JBQ0EsZ0JBQThCO0FBRjlCLFNBQUEsZ0JBQUE7QUFDQSxTQUFBLG1CQUFBO0FBQ0EsU0FBQSxpQkFBQTtBQVpWLFNBQUEsZUFBNkI7TUFDM0IsT0FBTztNQUNQLGlCQUFpQixDQUFDLHVCQUF1Qjs7QUFFM0MsU0FBQSxVQUF5QjtBQUN6QixTQUFBLGFBQXFCO0FBQ3JCLFNBQUEsa0JBQTJCO0FBRW5CLFNBQUEsYUFBYTtBQU1uQixXQUFPLE1BQUs7QUFyQ2hCO0FBc0NNLFdBQUssZUFBZSxLQUFLLGVBQWUsYUFBWTtBQUVwRCxVQUNFLEtBQUssYUFBYSxVQUFVLGFBQzVCLEtBQUssYUFBYSxVQUFVLGFBQzVCLFVBQUssYUFBYSxZQUFsQixtQkFBMkIsUUFDM0I7QUFDQSxhQUFLLGFBQWEsS0FBSyxhQUFhLFFBQVE7TUFDOUM7SUFDRixDQUFDO0VBQ0g7RUFFQSxJQUFJLGVBQVk7QUFDZCxXQUFPLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVTtFQUM3QztFQUVBLElBQUksbUJBQWdCO0FBdER0QjtBQXVESSxVQUFNLGdCQUNKLEtBQUssYUFBYSxVQUFVLGFBQzVCLEtBQUssYUFBYSxVQUFVLFlBQ3hCLFVBQUssYUFBYSxZQUFsQixtQkFBMkIsVUFBUyxLQUNwQztBQUNOLFdBQU8sS0FBSyxlQUFlLGlCQUFpQixDQUFDLEtBQUs7RUFDcEQ7RUFFTSxjQUFXOztBQUNmLFVBQUksS0FBSyxvQkFBb0IsS0FBSyxpQkFBaUI7QUFDakQ7TUFDRjtBQUVBLFdBQUssa0JBQWtCO0FBRXZCLFVBQUk7QUFDRixjQUFNLEtBQUssZUFBZSxZQUFZLEtBQUssVUFBVTtNQUN2RCxTQUFTLE9BQU87QUFFZCxnQkFBUSxNQUFNLHlCQUF5QixLQUFLO01BQzlDO0FBQ0UsYUFBSyxrQkFBa0I7TUFDekI7SUFDRjs7OzttQ0F4RFcsWUFBUyw0QkFBQSxZQUFBLEdBQUEsNEJBQUEsZ0JBQUEsR0FBQSw0QkFBQSxjQUFBLENBQUE7QUFBQTsyRUFBVCxZQUFTLFdBQUEsQ0FBQSxDQUFBLGdCQUFBLENBQUEsR0FBQSxPQUFBLEdBQUEsTUFBQSxHQUFBLFFBQUEsQ0FBQSxDQUFBLEdBQUEsYUFBQSxHQUFBLENBQUEsR0FBQSxhQUFBLEdBQUEsQ0FBQSxHQUFBLDRCQUFBLEdBQUEsQ0FBQSxRQUFBLE1BQUEsV0FBQSxLQUFBLFdBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxZQUFBLEdBQUEsQ0FBQSxRQUFBLE9BQUEsU0FBQSxRQUFBLEdBQUEsT0FBQSxHQUFBLENBQUEsU0FBQSxNQUFBLEdBQUEsQ0FBQSxRQUFBLFNBQUEsR0FBQSxpQkFBQSxXQUFBLGFBQUEsR0FBQSxDQUFBLFFBQUEsT0FBQSxTQUFBLFdBQUEsUUFBQSxXQUFBLEdBQUEsU0FBQSxVQUFBLEdBQUEsQ0FBQSxRQUFBLFFBQUEsR0FBQSxjQUFBLE1BQUEsR0FBQSxDQUFBLFNBQUEsVUFBQSxHQUFBLG1CQUFBLEdBQUEsQ0FBQSxHQUFBLHVCQUFBLEdBQUEsQ0FBQSxTQUFBLFFBQUEsQ0FBQSxHQUFBLFVBQUEsU0FBQSxtQkFBQSxJQUFBLEtBQUE7QUFBQSxNQUFBLEtBQUEsR0FBQTtBQ3RCdEIsSUFBQSxvQkFBQSxHQUFBLGNBQUEsQ0FBQTtBQUNBLElBQUEseUJBQUEsR0FBQSxhQUFBLEVBQWEsR0FBQSxlQUFBLENBQUEsRUFDc0IsR0FBQSxXQUFBLENBQUEsRUFDYSxHQUFBLFdBQUEsQ0FBQSxFQUNDLEdBQUEsTUFBQSxDQUFBO0FBQ2xCLElBQUEsaUJBQUEsQ0FBQTs7QUFBd0MsSUFBQSx1QkFBQTtBQUMvRCxJQUFBLHFCQUFBLEdBQUEsa0NBQUEsSUFBQSxFQUFBO0FBeUNGLElBQUEsdUJBQUEsRUFBVSxFQUNGLEVBQ0U7OztBQWpESixJQUFBLHFCQUFBLGVBQUEsbUJBQUE7QUFLbUIsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSw0QkFBQSxzQkFBQSxHQUFBLEdBQUEsc0JBQUEsQ0FBQTtBQUN2QixJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLHdCQUFBLElBQUEsZ0JBQUEsSUFBQSxhQUFBLFVBQUEsYUFBQSxJQUFBLGFBQUEsVUFBQSxVQUFBLElBQUEsRUFBQTs7O0VEU0o7RUFDQTtFQUFXO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFDWDtFQUFXO0VBQUE7RUFDWDtFQUNBO0VBQWU7QUFBQSxHQUFBLGVBQUEsRUFBQSxDQUFBO0FBR2IsSUFBTyxZQUFQOztzRUFBTyxXQUFTLENBQUE7VUFYckI7dUJBQ1csa0JBQWdCLFNBRWpCO01BQ1A7TUFDQTtNQUNBO01BQ0E7TUFDQTtPQUNELFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUFBLENBQUE7Ozs7NkVBRVUsV0FBUyxFQUFBLFdBQUEsYUFBQSxVQUFBLDZDQUFBLFlBQUEsR0FBQSxDQUFBO0FBQUEsR0FBQTsiLAogICJuYW1lcyI6IFtdCn0K
