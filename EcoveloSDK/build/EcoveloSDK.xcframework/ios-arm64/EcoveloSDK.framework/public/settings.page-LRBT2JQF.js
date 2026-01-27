import {
  HeaderComponent
} from "./chunk-AVAJ3QHV.js";
import {
  AndroidSettings,
  IOSSettings,
  NativeSettings
} from "./chunk-S5TR5TQN.js";
import "./chunk-K2AWDLYV.js";
import {
  App
} from "./chunk-RFEPADPA.js";
import {
  FcmService,
  PushNotifications
} from "./chunk-RAVV2QIY.js";
import "./chunk-T6WE2PS5.js";
import {
  AccountService
} from "./chunk-XK4I5MHM.js";
import "./chunk-FOJAXRYS.js";
import {
  fetchUserAttributes
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
  IonCol,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonRow,
  IonSkeletonText,
  IonToggle,
  LoadingController,
  NgIf,
  Router,
  RouterLink,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  ViewChild,
  effect,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
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
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
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

// src/app/pages/account/settings/settings.page.ts
var _c0 = ["notificationToggle"];
function SettingsPage_Conditional_7_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item", 13)(1, "ion-label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", "/account/change-password")("disabled", ctx_r1.cyclistState.state === "deletion_requested");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "settings.change_password"));
  }
}
function SettingsPage_Conditional_7_ion_item_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item", 14)(1, "ion-toggle", 15, 0);
    \u0275\u0275listener("ionChange", function SettingsPage_Conditional_7_ion_item_10_Template_ion_toggle_ionChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPushNotificationToggle($event));
    });
    \u0275\u0275elementStart(3, "ion-label");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ion-note", 16);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "settings.notifications.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 4, "settings.notifications.can_disable"));
  }
}
function SettingsPage_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-list", 6);
    \u0275\u0275template(1, SettingsPage_Conditional_7_ion_item_1_Template, 4, 5, "ion-item", 8);
    \u0275\u0275elementStart(2, "ion-item", 9)(3, "ion-label");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "ion-item", 9)(7, "ion-label");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, SettingsPage_Conditional_7_ion_item_10_Template, 9, 6, "ion-item", 10);
    \u0275\u0275elementStart(11, "ion-item", 11);
    \u0275\u0275listener("click", function SettingsPage_Conditional_7_Template_ion_item_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteAccount());
    });
    \u0275\u0275elementStart(12, "ion-label", 12);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("inset", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.userAuthMethod === "classic");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", "infos");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 9, "settings.infos.title"));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", "cgu");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 11, "settings.terms_of_service"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isNative());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.cyclistState.state === "deletion_requested");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 13, "settings.delete_account"));
  }
}
function SettingsPage_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list", 7)(1, "ion-item");
    \u0275\u0275element(2, "ion-skeleton-text", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-item");
    \u0275\u0275element(4, "ion-skeleton-text", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-item");
    \u0275\u0275element(6, "ion-skeleton-text", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ion-item");
    \u0275\u0275element(8, "ion-skeleton-text", 17);
    \u0275\u0275elementEnd()();
  }
}
var _SettingsPage = class _SettingsPage {
  constructor(accountService, router, alertController, loadingController, fcmService, translate, errorHandler) {
    this.accountService = accountService;
    this.router = router;
    this.alertController = alertController;
    this.loadingController = loadingController;
    this.fcmService = fcmService;
    this.translate = translate;
    this.errorHandler = errorHandler;
    this.userAuthMethod = "classic";
    effect(() => {
      this.cyclistState = this.accountService.cyclistState();
      if (this.cyclistState.state === "unknown") {
        this.accountService.loadCyclist();
      }
    });
    if (Capacitor.isNativePlatform()) {
      App.addListener("resume", () => {
        this.checkPermission();
      });
      PushNotifications.checkPermissions().then((permission) => __async(this, null, function* () {
        if (permission.receive === "granted") {
          this.updateToggleState(true);
        } else {
          this.updateToggleState(false);
        }
      }));
    }
    fetchUserAttributes().then((attributes) => {
      var _a, _b;
      if (((_a = attributes.sub) == null ? void 0 : _a.includes("google")) || ((_b = attributes.sub) == null ? void 0 : _b.includes("apple"))) {
        this.userAuthMethod = "external";
      } else {
        this.userAuthMethod = "classic";
      }
    }).catch((err) => {
      this.errorHandler.handleError(err);
    });
  }
  updateToggleState(state) {
    if (this.notificationToggle) {
      this.notificationToggle.checked = state;
    }
  }
  onPushNotificationToggle(event) {
    return __async(this, null, function* () {
      if (event.detail.checked) {
        yield PushNotifications.requestPermissions().then((permission) => __async(this, null, function* () {
          if (permission.receive === "granted") {
            yield this.fcmService.registerPush();
            this.updateToggleState(true);
          } else {
            const alert = yield this.alertController.create({
              header: this.translate.instant("push_notifications.accept_header"),
              message: this.translate.instant("push_notifications.accept_message"),
              buttons: [
                {
                  text: this.translate.instant("generic.cancel"),
                  role: "cancel",
                  handler: () => {
                    this.updateToggleState(false);
                  }
                },
                {
                  text: this.translate.instant("push_notifications.accept_cta"),
                  role: "confirm",
                  handler: () => __async(this, null, function* () {
                    yield NativeSettings.open({
                      optionAndroid: AndroidSettings.ApplicationDetails,
                      optionIOS: IOSSettings.App
                    });
                  })
                }
              ]
            });
            yield alert.present();
          }
        }));
      } else {
        const alert = yield this.alertController.create({
          header: this.translate.instant("push_notifications.deny_header"),
          message: this.translate.instant("push_notifications.deny_message"),
          buttons: [
            {
              text: this.translate.instant("generic.cancel"),
              role: "cancel",
              handler: () => {
                this.updateToggleState(true);
              }
            },
            {
              text: this.translate.instant("push_notifications.deny_cta"),
              role: "confirm",
              handler: () => __async(this, null, function* () {
                yield NativeSettings.open({
                  optionAndroid: AndroidSettings.ApplicationDetails,
                  optionIOS: IOSSettings.App
                });
              })
            }
          ]
        });
        yield alert.present();
      }
    });
  }
  deleteAccount() {
    return __async(this, null, function* () {
      const alert = yield this.alertController.create({
        header: this.translate.instant("account.deletion.header"),
        message: this.translate.instant("account.deletion.message"),
        buttons: [
          {
            text: this.translate.instant("generic.cancel"),
            role: "cancel"
          },
          {
            text: this.translate.instant("account.deletion.confirm"),
            cssClass: "text-danger",
            role: "confirm",
            handler: () => __async(this, null, function* () {
              const loading = yield this.loadingController.create({
                message: this.translate.instant("account.deletion.loading")
              });
              yield loading.present();
              if (Capacitor.isNativePlatform()) {
                yield this.fcmService.unRegisterPush();
              }
              try {
                yield this.accountService.deleteAccount();
                yield loading.dismiss();
                this.router.navigate(["/account"], { replaceUrl: true });
              } catch (err) {
                this.errorHandler.handleError(err);
                loading.dismiss();
              }
            })
          }
        ]
      });
      yield alert.present();
    });
  }
  isNative() {
    return Capacitor.isNativePlatform();
  }
  checkPermission() {
    return __async(this, null, function* () {
      const permission = yield PushNotifications.checkPermissions();
      if (permission.receive === "granted") {
        yield this.fcmService.registerPush();
        this.updateToggleState(true);
      } else {
        this.fcmService.unRegisterPush();
        this.updateToggleState(false);
      }
    });
  }
};
_SettingsPage.\u0275fac = function SettingsPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SettingsPage)(\u0275\u0275directiveInject(AccountService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(LoadingController), \u0275\u0275directiveInject(FcmService), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(ErrorHandlerService));
};
_SettingsPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsPage, selectors: [["app-settings"]], viewQuery: function SettingsPage_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.notificationToggle = _t.first);
  }
}, decls: 9, vars: 5, consts: [["notificationToggle", ""], [3, "defaultHref"], [1, "ion-padding"], [1, "ion-justify-content-center"], ["size", "12", "size-md", "8", "size-lg", "6"], [1, "ion-margin"], ["mode", "ios", "lines", "full", 3, "inset"], ["lines", "none"], ["color", "grey", "button", "", "detail", "true", 3, "routerLink", "disabled", 4, "ngIf"], ["color", "grey", "button", "", "detail", "true", 3, "routerLink"], ["color", "grey", 4, "ngIf"], ["color", "grey", "button", "", "detail", "true", 3, "click", "disabled"], ["color", "danger"], ["color", "grey", "button", "", "detail", "true", 3, "routerLink", "disabled"], ["color", "grey"], [3, "ionChange"], ["color", "medium"], ["animated", "", 2, "width", "100%", "height", "50px", "margin-top", "10px"]], template: function SettingsPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-header", 1);
    \u0275\u0275elementStart(1, "ion-content", 2)(2, "ion-row", 3)(3, "ion-col", 4)(4, "h1", 5);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, SettingsPage_Conditional_7_Template, 15, 15, "ion-list", 6)(8, SettingsPage_Conditional_8_Template, 9, 0, "ion-list", 7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("defaultHref", "/account");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 3, "settings.title"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.cyclistState && ctx.cyclistState.state !== "unknown" && ctx.cyclistState.state !== "error" ? 7 : 8);
  }
}, dependencies: [
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonToggle,
  IonNote,
  CommonModule,
  NgIf,
  FormsModule,
  HeaderComponent,
  RouterLink,
  IonSkeletonText,
  IonRow,
  IonCol,
  TranslateModule,
  TranslatePipe
], encapsulation: 2 });
var SettingsPage = _SettingsPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsPage, [{
    type: Component,
    args: [{ selector: "app-settings", imports: [
      IonContent,
      IonList,
      IonItem,
      IonLabel,
      IonToggle,
      IonNote,
      CommonModule,
      FormsModule,
      HeaderComponent,
      RouterLink,
      IonSkeletonText,
      IonRow,
      IonCol,
      TranslateModule
    ], template: `<app-header [defaultHref]="'/account'"></app-header>
<ion-content class="ion-padding">
  <ion-row class="ion-justify-content-center">
    <ion-col size="12" size-md="8" size-lg="6">
      <h1 class="ion-margin">{{ 'settings.title' | translate }}</h1>
      @if(cyclistState && cyclistState.state !== 'unknown' && cyclistState.state
      !== 'error') {
      <ion-list [inset]="true" mode="ios" lines="full">
        <ion-item
          color="grey"
          button
          detail="true"
          [routerLink]="'/account/change-password'"
          *ngIf="userAuthMethod === 'classic'"
          [disabled]="cyclistState.state === 'deletion_requested'"
        >
          <ion-label>{{ 'settings.change_password' | translate }}</ion-label>
        </ion-item>
        <ion-item color="grey" button detail="true" [routerLink]="'infos'">
          <ion-label>{{ 'settings.infos.title' | translate }}</ion-label>
        </ion-item>
        <ion-item color="grey" button detail="true" [routerLink]="'cgu'">
          <ion-label>{{ 'settings.terms_of_service' | translate }}</ion-label>
        </ion-item>
        <ion-item color="grey" *ngIf="isNative()">
          <ion-toggle
            #notificationToggle
            (ionChange)="onPushNotificationToggle($event)"
          >
            <ion-label
              >{{ 'settings.notifications.title' | translate }}</ion-label
            >
            <ion-note color="medium"
              >{{ 'settings.notifications.can_disable' | translate }}</ion-note
            >
          </ion-toggle>
        </ion-item>
        <ion-item
          color="grey"
          button
          detail="true"
          [disabled]="cyclistState.state === 'deletion_requested'"
          (click)="deleteAccount()"
        >
          <ion-label color="danger"
            >{{ 'settings.delete_account' | translate }}</ion-label
          >
        </ion-item>
      </ion-list>
      } @else {
      <ion-list lines="none">
        <ion-item>
          <ion-skeleton-text
            animated
            style="width: 100%; height: 50px; margin-top: 10px"
          ></ion-skeleton-text>
        </ion-item>
        <ion-item>
          <ion-skeleton-text
            animated
            style="width: 100%; height: 50px; margin-top: 10px"
          ></ion-skeleton-text>
        </ion-item>
        <ion-item>
          <ion-skeleton-text
            animated
            style="width: 100%; height: 50px; margin-top: 10px"
          ></ion-skeleton-text>
        </ion-item>
        <ion-item>
          <ion-skeleton-text
            animated
            style="width: 100%; height: 50px; margin-top: 10px"
          ></ion-skeleton-text>
        </ion-item>
      </ion-list>
      }
    </ion-col>
  </ion-row>
</ion-content>
` }]
  }], () => [{ type: AccountService }, { type: Router }, { type: AlertController }, { type: LoadingController }, { type: FcmService }, { type: TranslateService }, { type: ErrorHandlerService }], { notificationToggle: [{
    type: ViewChild,
    args: ["notificationToggle"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsPage, { className: "SettingsPage", filePath: "src/app/pages/account/settings/settings.page.ts", lineNumber: 57 });
})();
export {
  SettingsPage
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wYWdlcy9hY2NvdW50L3NldHRpbmdzL3NldHRpbmdzLnBhZ2UudHMiLCAic3JjL2FwcC9wYWdlcy9hY2NvdW50L3NldHRpbmdzL3NldHRpbmdzLnBhZ2UuaHRtbCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgQ29tcG9uZW50LCBlZmZlY3QsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJ1xuaW1wb3J0IHtcbiAgSW9uQ29udGVudCxcbiAgSW9uTGlzdCxcbiAgSW9uSXRlbSxcbiAgSW9uTGFiZWwsXG4gIElvblRvZ2dsZSxcbiAgSW9uTm90ZSxcbiAgQWxlcnRDb250cm9sbGVyLFxuICBJb25Ta2VsZXRvblRleHQsXG4gIExvYWRpbmdDb250cm9sbGVyLFxuICBJb25Sb3csXG4gIElvbkNvbCxcbn0gZnJvbSAnQGlvbmljL2FuZ3VsYXIvc3RhbmRhbG9uZSdcbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCB9IGZyb20gJ3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudCdcbmltcG9ydCB7XG4gIEFjY291bnRTZXJ2aWNlLFxuICBjeWNsaXN0U3RhdGUsXG59IGZyb20gJ3NyYy9hcHAvc2VydmljZXMvYXBpLXdyYXBwZXJzL2FjY291bnQuc2VydmljZSdcbmltcG9ydCB7IFJvdXRlciwgUm91dGVyTGluayB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcbmltcG9ydCB7IEZjbVNlcnZpY2UgfSBmcm9tICdzcmMvYXBwL3NlcnZpY2VzL2V4dGVybmFsL2ZjbS5zZXJ2aWNlJ1xuaW1wb3J0IHsgQ2FwYWNpdG9yIH0gZnJvbSAnQGNhcGFjaXRvci9jb3JlJ1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlLCBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSdcbmltcG9ydCB7IGZldGNoVXNlckF0dHJpYnV0ZXMgfSBmcm9tICdhd3MtYW1wbGlmeS9hdXRoJ1xuaW1wb3J0IHsgUHVzaE5vdGlmaWNhdGlvbnMgfSBmcm9tICdAY2FwYWNpdG9yL3B1c2gtbm90aWZpY2F0aW9ucydcbmltcG9ydCB7XG4gIEFuZHJvaWRTZXR0aW5ncyxcbiAgSU9TU2V0dGluZ3MsXG4gIE5hdGl2ZVNldHRpbmdzLFxufSBmcm9tICdjYXBhY2l0b3ItbmF0aXZlLXNldHRpbmdzJ1xuaW1wb3J0IHsgQXBwIH0gZnJvbSAnQGNhcGFjaXRvci9hcHAnXG5pbXBvcnQgeyBFcnJvckhhbmRsZXJTZXJ2aWNlIH0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy91dGlscy9lcnJvci1oYW5kbGVyLnNlcnZpY2UnXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1zZXR0aW5ncycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZXR0aW5ncy5wYWdlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zZXR0aW5ncy5wYWdlLnNjc3MnXSxcbiAgaW1wb3J0czogW1xuICAgIElvbkNvbnRlbnQsXG4gICAgSW9uTGlzdCxcbiAgICBJb25JdGVtLFxuICAgIElvbkxhYmVsLFxuICAgIElvblRvZ2dsZSxcbiAgICBJb25Ob3RlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBIZWFkZXJDb21wb25lbnQsXG4gICAgUm91dGVyTGluayxcbiAgICBJb25Ta2VsZXRvblRleHQsXG4gICAgSW9uUm93LFxuICAgIElvbkNvbCxcbiAgICBUcmFuc2xhdGVNb2R1bGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFNldHRpbmdzUGFnZSB7XG4gIEBWaWV3Q2hpbGQoJ25vdGlmaWNhdGlvblRvZ2dsZScpIG5vdGlmaWNhdGlvblRvZ2dsZSE6IElvblRvZ2dsZVxuICBjeWNsaXN0U3RhdGU6IGN5Y2xpc3RTdGF0ZVxuICB1c2VyQXV0aE1ldGhvZDogJ2NsYXNzaWMnIHwgJ2V4dGVybmFsJyA9ICdjbGFzc2ljJ1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjY291bnRTZXJ2aWNlOiBBY2NvdW50U2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgYWxlcnRDb250cm9sbGVyOiBBbGVydENvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSBsb2FkaW5nQ29udHJvbGxlcjogTG9hZGluZ0NvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSBmY21TZXJ2aWNlOiBGY21TZXJ2aWNlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgZXJyb3JIYW5kbGVyOiBFcnJvckhhbmRsZXJTZXJ2aWNlXG4gICkge1xuICAgIGVmZmVjdCgoKSA9PiB7XG4gICAgICB0aGlzLmN5Y2xpc3RTdGF0ZSA9IHRoaXMuYWNjb3VudFNlcnZpY2UuY3ljbGlzdFN0YXRlKClcbiAgICAgIGlmICh0aGlzLmN5Y2xpc3RTdGF0ZS5zdGF0ZSA9PT0gJ3Vua25vd24nKSB7XG4gICAgICAgIHRoaXMuYWNjb3VudFNlcnZpY2UubG9hZEN5Y2xpc3QoKVxuICAgICAgfVxuICAgIH0pXG4gICAgaWYgKENhcGFjaXRvci5pc05hdGl2ZVBsYXRmb3JtKCkpIHtcbiAgICAgIEFwcC5hZGRMaXN0ZW5lcigncmVzdW1lJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmNoZWNrUGVybWlzc2lvbigpXG4gICAgICB9KVxuICAgICAgUHVzaE5vdGlmaWNhdGlvbnMuY2hlY2tQZXJtaXNzaW9ucygpLnRoZW4oYXN5bmMgKHBlcm1pc3Npb24pID0+IHtcbiAgICAgICAgaWYgKHBlcm1pc3Npb24ucmVjZWl2ZSA9PT0gJ2dyYW50ZWQnKSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVUb2dnbGVTdGF0ZSh0cnVlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudXBkYXRlVG9nZ2xlU3RhdGUoZmFsc2UpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZmV0Y2hVc2VyQXR0cmlidXRlcygpXG4gICAgICAudGhlbigoYXR0cmlidXRlcykgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgYXR0cmlidXRlcy5zdWI/LmluY2x1ZGVzKCdnb29nbGUnKSB8fFxuICAgICAgICAgIGF0dHJpYnV0ZXMuc3ViPy5pbmNsdWRlcygnYXBwbGUnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLnVzZXJBdXRoTWV0aG9kID0gJ2V4dGVybmFsJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudXNlckF1dGhNZXRob2QgPSAnY2xhc3NpYydcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKGVycilcbiAgICAgIH0pXG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVRvZ2dsZVN0YXRlKHN0YXRlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMubm90aWZpY2F0aW9uVG9nZ2xlKSB7XG4gICAgICB0aGlzLm5vdGlmaWNhdGlvblRvZ2dsZS5jaGVja2VkID0gc3RhdGVcbiAgICB9XG4gIH1cblxuICBhc3luYyBvblB1c2hOb3RpZmljYXRpb25Ub2dnbGUoZXZlbnQ6IGFueSkge1xuICAgIGlmIChldmVudC5kZXRhaWwuY2hlY2tlZCkge1xuICAgICAgYXdhaXQgUHVzaE5vdGlmaWNhdGlvbnMucmVxdWVzdFBlcm1pc3Npb25zKCkudGhlbihhc3luYyAocGVybWlzc2lvbikgPT4ge1xuICAgICAgICBpZiAocGVybWlzc2lvbi5yZWNlaXZlID09PSAnZ3JhbnRlZCcpIHtcbiAgICAgICAgICBhd2FpdCB0aGlzLmZjbVNlcnZpY2UucmVnaXN0ZXJQdXNoKClcbiAgICAgICAgICB0aGlzLnVwZGF0ZVRvZ2dsZVN0YXRlKHRydWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgYWxlcnQgPSBhd2FpdCB0aGlzLmFsZXJ0Q29udHJvbGxlci5jcmVhdGUoe1xuICAgICAgICAgICAgaGVhZGVyOiB0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KCdwdXNoX25vdGlmaWNhdGlvbnMuYWNjZXB0X2hlYWRlcicpLFxuICAgICAgICAgICAgbWVzc2FnZTogdGhpcy50cmFuc2xhdGUuaW5zdGFudChcbiAgICAgICAgICAgICAgJ3B1c2hfbm90aWZpY2F0aW9ucy5hY2NlcHRfbWVzc2FnZSdcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBidXR0b25zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KCdnZW5lcmljLmNhbmNlbCcpLFxuICAgICAgICAgICAgICAgIHJvbGU6ICdjYW5jZWwnLFxuICAgICAgICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVG9nZ2xlU3RhdGUoZmFsc2UpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMudHJhbnNsYXRlLmluc3RhbnQoJ3B1c2hfbm90aWZpY2F0aW9ucy5hY2NlcHRfY3RhJyksXG4gICAgICAgICAgICAgICAgcm9sZTogJ2NvbmZpcm0nLFxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGF3YWl0IE5hdGl2ZVNldHRpbmdzLm9wZW4oe1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25BbmRyb2lkOiBBbmRyb2lkU2V0dGluZ3MuQXBwbGljYXRpb25EZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25JT1M6IElPU1NldHRpbmdzLkFwcCxcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSlcbiAgICAgICAgICBhd2FpdCBhbGVydC5wcmVzZW50KClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYWxlcnQgPSBhd2FpdCB0aGlzLmFsZXJ0Q29udHJvbGxlci5jcmVhdGUoe1xuICAgICAgICBoZWFkZXI6IHRoaXMudHJhbnNsYXRlLmluc3RhbnQoJ3B1c2hfbm90aWZpY2F0aW9ucy5kZW55X2hlYWRlcicpLFxuICAgICAgICBtZXNzYWdlOiB0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KCdwdXNoX25vdGlmaWNhdGlvbnMuZGVueV9tZXNzYWdlJyksXG4gICAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiB0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KCdnZW5lcmljLmNhbmNlbCcpLFxuICAgICAgICAgICAgcm9sZTogJ2NhbmNlbCcsXG4gICAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMudXBkYXRlVG9nZ2xlU3RhdGUodHJ1ZSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiB0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KCdwdXNoX25vdGlmaWNhdGlvbnMuZGVueV9jdGEnKSxcbiAgICAgICAgICAgIHJvbGU6ICdjb25maXJtJyxcbiAgICAgICAgICAgIGhhbmRsZXI6IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgYXdhaXQgTmF0aXZlU2V0dGluZ3Mub3Blbih7XG4gICAgICAgICAgICAgICAgb3B0aW9uQW5kcm9pZDogQW5kcm9pZFNldHRpbmdzLkFwcGxpY2F0aW9uRGV0YWlscyxcbiAgICAgICAgICAgICAgICBvcHRpb25JT1M6IElPU1NldHRpbmdzLkFwcCxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pXG4gICAgICBhd2FpdCBhbGVydC5wcmVzZW50KClcbiAgICB9XG4gIH1cblxuICBhc3luYyBkZWxldGVBY2NvdW50KCkge1xuICAgIGNvbnN0IGFsZXJ0ID0gYXdhaXQgdGhpcy5hbGVydENvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgIGhlYWRlcjogdGhpcy50cmFuc2xhdGUuaW5zdGFudCgnYWNjb3VudC5kZWxldGlvbi5oZWFkZXInKSxcbiAgICAgIG1lc3NhZ2U6IHRoaXMudHJhbnNsYXRlLmluc3RhbnQoJ2FjY291bnQuZGVsZXRpb24ubWVzc2FnZScpLFxuICAgICAgYnV0dG9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogdGhpcy50cmFuc2xhdGUuaW5zdGFudCgnZ2VuZXJpYy5jYW5jZWwnKSxcbiAgICAgICAgICByb2xlOiAnY2FuY2VsJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IHRoaXMudHJhbnNsYXRlLmluc3RhbnQoJ2FjY291bnQuZGVsZXRpb24uY29uZmlybScpLFxuICAgICAgICAgIGNzc0NsYXNzOiAndGV4dC1kYW5nZXInLFxuICAgICAgICAgIHJvbGU6ICdjb25maXJtJyxcbiAgICAgICAgICBoYW5kbGVyOiBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsb2FkaW5nID0gYXdhaXQgdGhpcy5sb2FkaW5nQ29udHJvbGxlci5jcmVhdGUoe1xuICAgICAgICAgICAgICBtZXNzYWdlOiB0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KCdhY2NvdW50LmRlbGV0aW9uLmxvYWRpbmcnKSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBhd2FpdCBsb2FkaW5nLnByZXNlbnQoKVxuICAgICAgICAgICAgaWYgKENhcGFjaXRvci5pc05hdGl2ZVBsYXRmb3JtKCkpIHtcbiAgICAgICAgICAgICAgYXdhaXQgdGhpcy5mY21TZXJ2aWNlLnVuUmVnaXN0ZXJQdXNoKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGF3YWl0IHRoaXMuYWNjb3VudFNlcnZpY2UuZGVsZXRlQWNjb3VudCgpXG4gICAgICAgICAgICAgIGF3YWl0IGxvYWRpbmcuZGlzbWlzcygpXG4gICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2FjY291bnQnXSwgeyByZXBsYWNlVXJsOiB0cnVlIH0pXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IoZXJyKVxuICAgICAgICAgICAgICBsb2FkaW5nLmRpc21pc3MoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pXG4gICAgYXdhaXQgYWxlcnQucHJlc2VudCgpXG4gIH1cblxuICBpc05hdGl2ZSgpIHtcbiAgICByZXR1cm4gQ2FwYWNpdG9yLmlzTmF0aXZlUGxhdGZvcm0oKVxuICB9XG5cbiAgYXN5bmMgY2hlY2tQZXJtaXNzaW9uKCkge1xuICAgIGNvbnN0IHBlcm1pc3Npb24gPSBhd2FpdCBQdXNoTm90aWZpY2F0aW9ucy5jaGVja1Blcm1pc3Npb25zKClcbiAgICBpZiAocGVybWlzc2lvbi5yZWNlaXZlID09PSAnZ3JhbnRlZCcpIHtcbiAgICAgIGF3YWl0IHRoaXMuZmNtU2VydmljZS5yZWdpc3RlclB1c2goKVxuICAgICAgdGhpcy51cGRhdGVUb2dnbGVTdGF0ZSh0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZjbVNlcnZpY2UudW5SZWdpc3RlclB1c2goKVxuICAgICAgdGhpcy51cGRhdGVUb2dnbGVTdGF0ZShmYWxzZSlcbiAgICB9XG4gIH1cbn1cbiIsICI8YXBwLWhlYWRlciBbZGVmYXVsdEhyZWZdPVwiJy9hY2NvdW50J1wiPjwvYXBwLWhlYWRlcj5cbjxpb24tY29udGVudCBjbGFzcz1cImlvbi1wYWRkaW5nXCI+XG4gIDxpb24tcm93IGNsYXNzPVwiaW9uLWp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICA8aW9uLWNvbCBzaXplPVwiMTJcIiBzaXplLW1kPVwiOFwiIHNpemUtbGc9XCI2XCI+XG4gICAgICA8aDEgY2xhc3M9XCJpb24tbWFyZ2luXCI+e3sgJ3NldHRpbmdzLnRpdGxlJyB8IHRyYW5zbGF0ZSB9fTwvaDE+XG4gICAgICBAaWYoY3ljbGlzdFN0YXRlICYmIGN5Y2xpc3RTdGF0ZS5zdGF0ZSAhPT0gJ3Vua25vd24nICYmIGN5Y2xpc3RTdGF0ZS5zdGF0ZVxuICAgICAgIT09ICdlcnJvcicpIHtcbiAgICAgIDxpb24tbGlzdCBbaW5zZXRdPVwidHJ1ZVwiIG1vZGU9XCJpb3NcIiBsaW5lcz1cImZ1bGxcIj5cbiAgICAgICAgPGlvbi1pdGVtXG4gICAgICAgICAgY29sb3I9XCJncmV5XCJcbiAgICAgICAgICBidXR0b25cbiAgICAgICAgICBkZXRhaWw9XCJ0cnVlXCJcbiAgICAgICAgICBbcm91dGVyTGlua109XCInL2FjY291bnQvY2hhbmdlLXBhc3N3b3JkJ1wiXG4gICAgICAgICAgKm5nSWY9XCJ1c2VyQXV0aE1ldGhvZCA9PT0gJ2NsYXNzaWMnXCJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwiY3ljbGlzdFN0YXRlLnN0YXRlID09PSAnZGVsZXRpb25fcmVxdWVzdGVkJ1wiXG4gICAgICAgID5cbiAgICAgICAgICA8aW9uLWxhYmVsPnt7ICdzZXR0aW5ncy5jaGFuZ2VfcGFzc3dvcmQnIHwgdHJhbnNsYXRlIH19PC9pb24tbGFiZWw+XG4gICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICAgIDxpb24taXRlbSBjb2xvcj1cImdyZXlcIiBidXR0b24gZGV0YWlsPVwidHJ1ZVwiIFtyb3V0ZXJMaW5rXT1cIidpbmZvcydcIj5cbiAgICAgICAgICA8aW9uLWxhYmVsPnt7ICdzZXR0aW5ncy5pbmZvcy50aXRsZScgfCB0cmFuc2xhdGUgfX08L2lvbi1sYWJlbD5cbiAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgPGlvbi1pdGVtIGNvbG9yPVwiZ3JleVwiIGJ1dHRvbiBkZXRhaWw9XCJ0cnVlXCIgW3JvdXRlckxpbmtdPVwiJ2NndSdcIj5cbiAgICAgICAgICA8aW9uLWxhYmVsPnt7ICdzZXR0aW5ncy50ZXJtc19vZl9zZXJ2aWNlJyB8IHRyYW5zbGF0ZSB9fTwvaW9uLWxhYmVsPlxuICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgICA8aW9uLWl0ZW0gY29sb3I9XCJncmV5XCIgKm5nSWY9XCJpc05hdGl2ZSgpXCI+XG4gICAgICAgICAgPGlvbi10b2dnbGVcbiAgICAgICAgICAgICNub3RpZmljYXRpb25Ub2dnbGVcbiAgICAgICAgICAgIChpb25DaGFuZ2UpPVwib25QdXNoTm90aWZpY2F0aW9uVG9nZ2xlKCRldmVudClcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpb24tbGFiZWxcbiAgICAgICAgICAgICAgPnt7ICdzZXR0aW5ncy5ub3RpZmljYXRpb25zLnRpdGxlJyB8IHRyYW5zbGF0ZSB9fTwvaW9uLWxhYmVsXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8aW9uLW5vdGUgY29sb3I9XCJtZWRpdW1cIlxuICAgICAgICAgICAgICA+e3sgJ3NldHRpbmdzLm5vdGlmaWNhdGlvbnMuY2FuX2Rpc2FibGUnIHwgdHJhbnNsYXRlIH19PC9pb24tbm90ZVxuICAgICAgICAgICAgPlxuICAgICAgICAgIDwvaW9uLXRvZ2dsZT5cbiAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgPGlvbi1pdGVtXG4gICAgICAgICAgY29sb3I9XCJncmV5XCJcbiAgICAgICAgICBidXR0b25cbiAgICAgICAgICBkZXRhaWw9XCJ0cnVlXCJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwiY3ljbGlzdFN0YXRlLnN0YXRlID09PSAnZGVsZXRpb25fcmVxdWVzdGVkJ1wiXG4gICAgICAgICAgKGNsaWNrKT1cImRlbGV0ZUFjY291bnQoKVwiXG4gICAgICAgID5cbiAgICAgICAgICA8aW9uLWxhYmVsIGNvbG9yPVwiZGFuZ2VyXCJcbiAgICAgICAgICAgID57eyAnc2V0dGluZ3MuZGVsZXRlX2FjY291bnQnIHwgdHJhbnNsYXRlIH19PC9pb24tbGFiZWxcbiAgICAgICAgICA+XG4gICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICA8L2lvbi1saXN0PlxuICAgICAgfSBAZWxzZSB7XG4gICAgICA8aW9uLWxpc3QgbGluZXM9XCJub25lXCI+XG4gICAgICAgIDxpb24taXRlbT5cbiAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHRcbiAgICAgICAgICAgIGFuaW1hdGVkXG4gICAgICAgICAgICBzdHlsZT1cIndpZHRoOiAxMDAlOyBoZWlnaHQ6IDUwcHg7IG1hcmdpbi10b3A6IDEwcHhcIlxuICAgICAgICAgID48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgICA8aW9uLWl0ZW0+XG4gICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0XG4gICAgICAgICAgICBhbmltYXRlZFxuICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogMTAwJTsgaGVpZ2h0OiA1MHB4OyBtYXJnaW4tdG9wOiAxMHB4XCJcbiAgICAgICAgICA+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgPGlvbi1pdGVtPlxuICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dFxuICAgICAgICAgICAgYW5pbWF0ZWRcbiAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDEwMCU7IGhlaWdodDogNTBweDsgbWFyZ2luLXRvcDogMTBweFwiXG4gICAgICAgICAgPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICAgIDxpb24taXRlbT5cbiAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHRcbiAgICAgICAgICAgIGFuaW1hdGVkXG4gICAgICAgICAgICBzdHlsZT1cIndpZHRoOiAxMDAlOyBoZWlnaHQ6IDUwcHg7IG1hcmdpbi10b3A6IDEwcHhcIlxuICAgICAgICAgID48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgPC9pb24tbGlzdD5cbiAgICAgIH1cbiAgICA8L2lvbi1jb2w+XG4gIDwvaW9uLXJvdz5cbjwvaW9uLWNvbnRlbnQ+XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1FRLElBQUEseUJBQUEsR0FBQSxZQUFBLEVBQUEsRUFPQyxHQUFBLFdBQUE7QUFDWSxJQUFBLGlCQUFBLENBQUE7O0FBQTRDLElBQUEsdUJBQUEsRUFBWTs7OztBQUpuRSxJQUFBLHFCQUFBLGNBQUEsMEJBQUEsRUFBeUMsWUFBQSxPQUFBLGFBQUEsVUFBQSxvQkFBQTtBQUk5QixJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLDRCQUFBLHNCQUFBLEdBQUEsR0FBQSwwQkFBQSxDQUFBOzs7Ozs7QUFRYixJQUFBLHlCQUFBLEdBQUEsWUFBQSxFQUFBLEVBQTBDLEdBQUEsY0FBQSxJQUFBLENBQUE7QUFHdEMsSUFBQSxxQkFBQSxhQUFBLFNBQUEsZ0ZBQUEsUUFBQTtBQUFBLE1BQUEsd0JBQUEsR0FBQTtBQUFBLFlBQUEsU0FBQSx3QkFBQSxDQUFBO0FBQUEsYUFBQSxzQkFBYSxPQUFBLHlCQUFBLE1BQUEsQ0FBZ0M7SUFBQSxDQUFBO0FBRTdDLElBQUEseUJBQUEsR0FBQSxXQUFBO0FBQ0csSUFBQSxpQkFBQSxDQUFBOztBQUFnRCxJQUFBLHVCQUFBO0FBRW5ELElBQUEseUJBQUEsR0FBQSxZQUFBLEVBQUE7QUFDRyxJQUFBLGlCQUFBLENBQUE7O0FBQXNELElBQUEsdUJBQUEsRUFDeEQsRUFDVTs7O0FBTFIsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSw0QkFBQSxzQkFBQSxHQUFBLEdBQUEsOEJBQUEsQ0FBQTtBQUdBLElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEsNEJBQUEsc0JB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
