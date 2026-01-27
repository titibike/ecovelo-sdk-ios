import {
  AppstateService
} from "./chunk-T6WE2PS5.js";
import {
  DevicesService
} from "./chunk-XK4I5MHM.js";
import {
  environment
} from "./chunk-FOJAXRYS.js";
import {
  ErrorHandlerService
} from "./chunk-SARQRLZR.js";
import {
  StorageService
} from "./chunk-U6SJAXLK.js";
import {
  CommonModule,
  Component,
  Injectable,
  IonButton,
  IonContent,
  ModalController,
  TranslateModule,
  TranslatePipe,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-DGENMXJW.js";
import {
  Capacitor,
  registerPlugin
} from "./chunk-KGBWUDTS.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-UESUV5PM.js";

// node_modules/@capacitor/push-notifications/dist/esm/index.js
var PushNotifications = registerPlugin("PushNotifications", {});

// src/app/components/modals/push-notifications/push-notifications.component.ts
var _PushNotificationsComponent = class _PushNotificationsComponent {
  constructor(modalCtrl, fcmService, appState, errorHandler) {
    this.modalCtrl = modalCtrl;
    this.fcmService = fcmService;
    this.appState = appState;
    this.errorHandler = errorHandler;
  }
  accept() {
    return __async(this, null, function* () {
      try {
        yield this.fcmService.askForPermission().then(() => {
          const currentState = this.appState.getAppState();
          if (currentState.state === "fresh_cyclist" || currentState.state === "new_cyclist") {
            this.appState.setAppState(__spreadProps(__spreadValues({}, currentState), {
              push_notifications: "shown"
            }));
          }
          this.modalCtrl.dismiss();
        });
      } catch (error) {
        this.errorHandler.handleError(error);
      }
    });
  }
  dismiss() {
    return __async(this, null, function* () {
      const currentState = this.appState.getAppState();
      if (currentState.state === "fresh_cyclist" || currentState.state === "new_cyclist") {
        yield this.appState.setAppState(__spreadProps(__spreadValues({}, currentState), {
          push_notifications: "shown"
        }));
      }
      yield this.modalCtrl.dismiss();
    });
  }
};
_PushNotificationsComponent.\u0275fac = function PushNotificationsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PushNotificationsComponent)(\u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(FcmService), \u0275\u0275directiveInject(AppstateService), \u0275\u0275directiveInject(ErrorHandlerService));
};
_PushNotificationsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PushNotificationsComponent, selectors: [["app-push-notifications"]], decls: 17, vars: 12, consts: [[1, "ecl-congrats-modal", "ecl-congrats-modal--push-notifications"], [1, "ecl-congrats-modal__icon", "ecl-congrats-modal__icon--bg"], ["src", "assets/icon/animated/notification.gif"], [1, "ecl-congrats-modal--push-notifications__description"], [1, "ecl-congrats-modal__buttons"], ["expand", "block", "color", "light", 3, "click"], ["expand", "block", "fill", "clear", "color", "light", 3, "click"]], template: function PushNotificationsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content")(1, "div", 0)(2, "div", 1);
    \u0275\u0275element(3, "img", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h1");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 3);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 4)(11, "ion-button", 5);
    \u0275\u0275listener("click", function PushNotificationsComponent_Template_ion_button_click_11_listener() {
      return ctx.accept();
    });
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "ion-button", 6);
    \u0275\u0275listener("click", function PushNotificationsComponent_Template_ion_button_click_14_listener() {
      return ctx.dismiss();
    });
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "push_notifications.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 6, "push_notifications.description"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 8, "push_notifications.accept"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 10, "push_notifications.skip"), " ");
  }
}, dependencies: [CommonModule, TranslateModule, TranslatePipe, IonContent, IonButton], encapsulation: 2 });
var PushNotificationsComponent = _PushNotificationsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PushNotificationsComponent, [{
    type: Component,
    args: [{
      selector: "app-push-notifications",
      template: `
    <ion-content>
      <div class="ecl-congrats-modal ecl-congrats-modal--push-notifications">
        <div class="ecl-congrats-modal__icon ecl-congrats-modal__icon--bg">
          <img src="assets/icon/animated/notification.gif" />
        </div>
        <h1>{{ 'push_notifications.title' | translate }}</h1>
        <p class="ecl-congrats-modal--push-notifications__description">
          {{ 'push_notifications.description' | translate }}
        </p>

        <div class="ecl-congrats-modal__buttons">
          <ion-button expand="block" color="light" (click)="accept()">
            {{ 'push_notifications.accept' | translate }}
          </ion-button>
          <ion-button
            expand="block"
            fill="clear"
            color="light"
            (click)="dismiss()"
          >
            {{ 'push_notifications.skip' | translate }}
          </ion-button>
        </div>
      </div>
    </ion-content>
  `,
      imports: [CommonModule, TranslateModule, IonContent, IonButton]
    }]
  }], () => [{ type: ModalController }, { type: FcmService }, { type: AppstateService }, { type: ErrorHandlerService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PushNotificationsComponent, { className: "PushNotificationsComponent", filePath: "src/app/components/modals/push-notifications/push-notifications.component.ts", lineNumber: 44 });
})();

// src/app/services/external/fcm.service.ts
var _FcmService = class _FcmService {
  constructor(modalCtrl, devicesService, storage, errorHandler, appStateService) {
    this.modalCtrl = modalCtrl;
    this.devicesService = devicesService;
    this.storage = storage;
    this.errorHandler = errorHandler;
    this.appStateService = appStateService;
    this.appStateService.appState.subscribe((state) => {
      this.appState = state;
    });
  }
  checkPermission() {
    return __async(this, null, function* () {
      let permission;
      if (Capacitor.isNativePlatform()) {
        permission = yield PushNotifications.checkPermissions();
      } else {
        permission = null;
      }
      if (Capacitor.isNativePlatform() && (this.appState.state === "new_cyclist" || this.appState.state === "fresh_cyclist") && (permission == null ? void 0 : permission.receive) === "prompt" && this.appState.push_notifications === "not_shown") {
        yield this.initPush();
      }
    });
  }
  initPush() {
    return __async(this, null, function* () {
      if (Capacitor.isNativePlatform()) {
        const modal = yield this.modalCtrl.create({
          component: PushNotificationsComponent,
          cssClass: "fullscreen-modal"
        });
        yield modal.present();
        yield modal.onDidDismiss();
      }
    });
  }
  askForPermission() {
    return __async(this, null, function* () {
      yield PushNotifications.requestPermissions().then((permission) => __async(this, null, function* () {
        if (permission.receive === "granted") {
          yield this.registerPush();
        } else {
          console.error("No permission for push granted");
        }
      })).catch((error) => {
        this.errorHandler.handleError(error);
      });
    });
  }
  registerPush() {
    return __async(this, null, function* () {
      PushNotifications.addListener("registration", (token) => __async(this, null, function* () {
        yield this.storage.set("fcmToken", token.value);
        this.devicesService.subscribeDevice({
          program: environment.program,
          subscribeDeviceRequest: {
            token: token.value
          }
        }).subscribe({
          error: (error) => __async(this, null, function* () {
            console.error("Error subscribing to device", error);
          }),
          next: () => __async(this, null, function* () {
          })
        });
      }));
      PushNotifications.addListener("pushNotificationActionPerformed", (notification) => {
      });
      try {
        yield PushNotifications.register();
      } catch (error) {
        this.errorHandler.handleError(error);
      }
    });
  }
  unRegisterPush() {
    return __async(this, null, function* () {
      try {
        yield PushNotifications.unregister();
        yield PushNotifications.removeAllListeners();
        const token = yield this.storage.get("fcmToken");
        if (token) {
          this.devicesService.unsubscribeDevice({
            program: environment.program,
            token
          }).subscribe();
          yield this.storage.remove("fcmToken");
        }
      } catch (error) {
        this.errorHandler.handleError(error);
      }
    });
  }
};
_FcmService.\u0275fac = function FcmService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FcmService)(\u0275\u0275inject(ModalController), \u0275\u0275inject(DevicesService), \u0275\u0275inject(StorageService), \u0275\u0275inject(ErrorHandlerService), \u0275\u0275inject(AppstateService));
};
_FcmService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FcmService, factory: _FcmService.\u0275fac, providedIn: "root" });
var FcmService = _FcmService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FcmService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: ModalController }, { type: DevicesService }, { type: StorageService }, { type: ErrorHandlerService }, { type: AppstateService }], null);
})();

export {
  PushNotifications,
  FcmService
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY2FwYWNpdG9yL3B1c2gtbm90aWZpY2F0aW9ucy9kaXN0L2VzbS9pbmRleC5qcyIsInNyYy9hcHAvY29tcG9uZW50cy9tb2RhbHMvcHVzaC1ub3RpZmljYXRpb25zL3B1c2gtbm90aWZpY2F0aW9ucy5jb21wb25lbnQudHMiLCJzcmMvYXBwL3NlcnZpY2VzL2V4dGVybmFsL2ZjbS5zZXJ2aWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlZ2lzdGVyUGx1Z2luIH0gZnJvbSAnQGNhcGFjaXRvci9jb3JlJztcbmNvbnN0IFB1c2hOb3RpZmljYXRpb25zID0gcmVnaXN0ZXJQbHVnaW4oJ1B1c2hOb3RpZmljYXRpb25zJywge30pO1xuZXhwb3J0ICogZnJvbSAnLi9kZWZpbml0aW9ucyc7XG5leHBvcnQgeyBQdXNoTm90aWZpY2F0aW9ucyB9O1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7XG4gIElvbkNvbnRlbnQsXG4gIElvbkJ1dHRvbixcbiAgTW9kYWxDb250cm9sbGVyLFxufSBmcm9tICdAaW9uaWMvYW5ndWxhci9zdGFuZGFsb25lJ1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSdcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbidcbmltcG9ydCB7IEZjbVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9leHRlcm5hbC9mY20uc2VydmljZSdcbmltcG9ydCB7IEFwcHN0YXRlU2VydmljZSB9IGZyb20gJ3NyYy9hcHAvc2VydmljZXMvaW50ZXJuYWwvYXBwc3RhdGUuc2VydmljZSdcbmltcG9ydCB7IEVycm9ySGFuZGxlclNlcnZpY2UgfSBmcm9tICdzcmMvYXBwL3NlcnZpY2VzL3V0aWxzL2Vycm9yLWhhbmRsZXIuc2VydmljZSdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXB1c2gtbm90aWZpY2F0aW9ucycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGlvbi1jb250ZW50PlxuICAgICAgPGRpdiBjbGFzcz1cImVjbC1jb25ncmF0cy1tb2RhbCBlY2wtY29uZ3JhdHMtbW9kYWwtLXB1c2gtbm90aWZpY2F0aW9uc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZWNsLWNvbmdyYXRzLW1vZGFsX19pY29uIGVjbC1jb25ncmF0cy1tb2RhbF9faWNvbi0tYmdcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pY29uL2FuaW1hdGVkL25vdGlmaWNhdGlvbi5naWZcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGgxPnt7ICdwdXNoX25vdGlmaWNhdGlvbnMudGl0bGUnIHwgdHJhbnNsYXRlIH19PC9oMT5cbiAgICAgICAgPHAgY2xhc3M9XCJlY2wtY29uZ3JhdHMtbW9kYWwtLXB1c2gtbm90aWZpY2F0aW9uc19fZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICB7eyAncHVzaF9ub3RpZmljYXRpb25zLmRlc2NyaXB0aW9uJyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImVjbC1jb25ncmF0cy1tb2RhbF9fYnV0dG9uc1wiPlxuICAgICAgICAgIDxpb24tYnV0dG9uIGV4cGFuZD1cImJsb2NrXCIgY29sb3I9XCJsaWdodFwiIChjbGljayk9XCJhY2NlcHQoKVwiPlxuICAgICAgICAgICAge3sgJ3B1c2hfbm90aWZpY2F0aW9ucy5hY2NlcHQnIHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgPC9pb24tYnV0dG9uPlxuICAgICAgICAgIDxpb24tYnV0dG9uXG4gICAgICAgICAgICBleHBhbmQ9XCJibG9ja1wiXG4gICAgICAgICAgICBmaWxsPVwiY2xlYXJcIlxuICAgICAgICAgICAgY29sb3I9XCJsaWdodFwiXG4gICAgICAgICAgICAoY2xpY2spPVwiZGlzbWlzcygpXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7eyAncHVzaF9ub3RpZmljYXRpb25zLnNraXAnIHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgPC9pb24tYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvaW9uLWNvbnRlbnQ+XG4gIGAsXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFRyYW5zbGF0ZU1vZHVsZSwgSW9uQ29udGVudCwgSW9uQnV0dG9uXSxcbn0pXG5leHBvcnQgY2xhc3MgUHVzaE5vdGlmaWNhdGlvbnNDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG1vZGFsQ3RybDogTW9kYWxDb250cm9sbGVyLFxuICAgIHByaXZhdGUgZmNtU2VydmljZTogRmNtU2VydmljZSxcbiAgICBwcml2YXRlIGFwcFN0YXRlOiBBcHBzdGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBlcnJvckhhbmRsZXI6IEVycm9ySGFuZGxlclNlcnZpY2VcbiAgKSB7fVxuXG4gIGFzeW5jIGFjY2VwdCgpIHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5mY21TZXJ2aWNlLmFza0ZvclBlcm1pc3Npb24oKS50aGVuKCgpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudFN0YXRlID0gdGhpcy5hcHBTdGF0ZS5nZXRBcHBTdGF0ZSgpXG4gICAgICAgIGlmIChcbiAgICAgICAgICBjdXJyZW50U3RhdGUuc3RhdGUgPT09ICdmcmVzaF9jeWNsaXN0JyB8fFxuICAgICAgICAgIGN1cnJlbnRTdGF0ZS5zdGF0ZSA9PT0gJ25ld19jeWNsaXN0J1xuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLmFwcFN0YXRlLnNldEFwcFN0YXRlKHtcbiAgICAgICAgICAgIC4uLmN1cnJlbnRTdGF0ZSxcbiAgICAgICAgICAgIHB1c2hfbm90aWZpY2F0aW9uczogJ3Nob3duJyxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubW9kYWxDdHJsLmRpc21pc3MoKVxuICAgICAgfSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZGlzbWlzcygpIHtcbiAgICBjb25zdCBjdXJyZW50U3RhdGUgPSB0aGlzLmFwcFN0YXRlLmdldEFwcFN0YXRlKClcbiAgICBpZiAoXG4gICAgICBjdXJyZW50U3RhdGUuc3RhdGUgPT09ICdmcmVzaF9jeWNsaXN0JyB8fFxuICAgICAgY3VycmVudFN0YXRlLnN0YXRlID09PSAnbmV3X2N5Y2xpc3QnXG4gICAgKSB7XG4gICAgICBhd2FpdCB0aGlzLmFwcFN0YXRlLnNldEFwcFN0YXRlKHtcbiAgICAgICAgLi4uY3VycmVudFN0YXRlLFxuICAgICAgICBwdXNoX25vdGlmaWNhdGlvbnM6ICdzaG93bicsXG4gICAgICB9KVxuICAgIH1cbiAgICBhd2FpdCB0aGlzLm1vZGFsQ3RybC5kaXNtaXNzKClcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBDYXBhY2l0b3IgfSBmcm9tICdAY2FwYWNpdG9yL2NvcmUnXG5pbXBvcnQgeyBQdXNoTm90aWZpY2F0aW9ucyB9IGZyb20gJ0BjYXBhY2l0b3IvcHVzaC1ub3RpZmljYXRpb25zJ1xuaW1wb3J0IHsgTW9kYWxDb250cm9sbGVyIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXIvc3RhbmRhbG9uZSdcbmltcG9ydCB7IFB1c2hOb3RpZmljYXRpb25zQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tb2RhbHMvcHVzaC1ub3RpZmljYXRpb25zL3B1c2gtbm90aWZpY2F0aW9ucy5jb21wb25lbnQnXG5pbXBvcnQgeyBEZXZpY2VzU2VydmljZSB9IGZyb20gJ3NyYy9hcGktY3ljbGlzdCdcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnc3JjL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCdcbmltcG9ydCB7IFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vdXRpbHMvc3RvcmFnZS5zZXJ2aWNlJ1xuaW1wb3J0IHsgRXJyb3JIYW5kbGVyU2VydmljZSB9IGZyb20gJy4uL3V0aWxzL2Vycm9yLWhhbmRsZXIuc2VydmljZSdcbmltcG9ydCB7IEFwcFN0YXRlLCBBcHBzdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi9pbnRlcm5hbC9hcHBzdGF0ZS5zZXJ2aWNlJ1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgRmNtU2VydmljZSB7XG4gIGFwcFN0YXRlOiBBcHBTdGF0ZVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG1vZGFsQ3RybDogTW9kYWxDb250cm9sbGVyLFxuICAgIHByaXZhdGUgZGV2aWNlc1NlcnZpY2U6IERldmljZXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgc3RvcmFnZTogU3RvcmFnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBlcnJvckhhbmRsZXI6IEVycm9ySGFuZGxlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhcHBTdGF0ZVNlcnZpY2U6IEFwcHN0YXRlU2VydmljZVxuICApIHtcbiAgICB0aGlzLmFwcFN0YXRlU2VydmljZS5hcHBTdGF0ZS5zdWJzY3JpYmUoKHN0YXRlKSA9PiB7XG4gICAgICB0aGlzLmFwcFN0YXRlID0gc3RhdGVcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgY2hlY2tQZXJtaXNzaW9uKCkge1xuICAgIGxldCBwZXJtaXNzaW9uOiBhbnlcbiAgICBpZiAoQ2FwYWNpdG9yLmlzTmF0aXZlUGxhdGZvcm0oKSkge1xuICAgICAgcGVybWlzc2lvbiA9IGF3YWl0IFB1c2hOb3RpZmljYXRpb25zLmNoZWNrUGVybWlzc2lvbnMoKVxuICAgIH0gZWxzZSB7XG4gICAgICBwZXJtaXNzaW9uID0gbnVsbFxuICAgIH1cbiAgICBpZiAoXG4gICAgICBDYXBhY2l0b3IuaXNOYXRpdmVQbGF0Zm9ybSgpICYmXG4gICAgICAodGhpcy5hcHBTdGF0ZS5zdGF0ZSA9PT0gJ25ld19jeWNsaXN0JyB8fFxuICAgICAgICB0aGlzLmFwcFN0YXRlLnN0YXRlID09PSAnZnJlc2hfY3ljbGlzdCcpICYmXG4gICAgICBwZXJtaXNzaW9uPy5yZWNlaXZlID09PSAncHJvbXB0JyAmJlxuICAgICAgdGhpcy5hcHBTdGF0ZS5wdXNoX25vdGlmaWNhdGlvbnMgPT09ICdub3Rfc2hvd24nXG4gICAgKSB7XG4gICAgICBhd2FpdCB0aGlzLmluaXRQdXNoKClcbiAgICB9XG4gIH1cblxuICBhc3luYyBpbml0UHVzaCgpIHtcbiAgICBpZiAoQ2FwYWNpdG9yLmlzTmF0aXZlUGxhdGZvcm0oKSkge1xuICAgICAgY29uc3QgbW9kYWwgPSBhd2FpdCB0aGlzLm1vZGFsQ3RybC5jcmVhdGUoe1xuICAgICAgICBjb21wb25lbnQ6IFB1c2hOb3RpZmljYXRpb25zQ29tcG9uZW50LFxuICAgICAgICBjc3NDbGFzczogJ2Z1bGxzY3JlZW4tbW9kYWwnLFxuICAgICAgfSlcbiAgICAgIGF3YWl0IG1vZGFsLnByZXNlbnQoKVxuICAgICAgYXdhaXQgbW9kYWwub25EaWREaXNtaXNzKClcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgYXNrRm9yUGVybWlzc2lvbigpIHtcbiAgICBhd2FpdCBQdXNoTm90aWZpY2F0aW9ucy5yZXF1ZXN0UGVybWlzc2lvbnMoKVxuICAgICAgLnRoZW4oYXN5bmMgKHBlcm1pc3Npb24pID0+IHtcbiAgICAgICAgaWYgKHBlcm1pc3Npb24ucmVjZWl2ZSA9PT0gJ2dyYW50ZWQnKSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5yZWdpc3RlclB1c2goKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ05vIHBlcm1pc3Npb24gZm9yIHB1c2ggZ3JhbnRlZCcpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKGVycm9yKVxuICAgICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyByZWdpc3RlclB1c2goKSB7XG4gICAgUHVzaE5vdGlmaWNhdGlvbnMuYWRkTGlzdGVuZXIoJ3JlZ2lzdHJhdGlvbicsIGFzeW5jICh0b2tlbjogYW55KSA9PiB7XG4gICAgICBhd2FpdCB0aGlzLnN0b3JhZ2Uuc2V0KCdmY21Ub2tlbicsIHRva2VuLnZhbHVlKVxuICAgICAgdGhpcy5kZXZpY2VzU2VydmljZVxuICAgICAgICAuc3Vic2NyaWJlRGV2aWNlKHtcbiAgICAgICAgICBwcm9ncmFtOiBlbnZpcm9ubWVudC5wcm9ncmFtLFxuICAgICAgICAgIHN1YnNjcmliZURldmljZVJlcXVlc3Q6IHtcbiAgICAgICAgICAgIHRva2VuOiB0b2tlbi52YWx1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICAuc3Vic2NyaWJlKHtcbiAgICAgICAgICBlcnJvcjogYXN5bmMgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzdWJzY3JpYmluZyB0byBkZXZpY2UnLCBlcnJvcilcbiAgICAgICAgICB9LFxuICAgICAgICAgIG5leHQ6IGFzeW5jICgpID0+IHt9LFxuICAgICAgICB9KVxuICAgIH0pXG4gICAgUHVzaE5vdGlmaWNhdGlvbnMuYWRkTGlzdGVuZXIoXG4gICAgICAncHVzaE5vdGlmaWNhdGlvbkFjdGlvblBlcmZvcm1lZCcsXG4gICAgICAobm90aWZpY2F0aW9uKSA9PiB7XG4gICAgICAgIC8vRG8gc29tZXRoaW5nIHdpdGggdGhlIG5vdGlmLlxuICAgICAgfVxuICAgIClcbiAgICB0cnkge1xuICAgICAgYXdhaXQgUHVzaE5vdGlmaWNhdGlvbnMucmVnaXN0ZXIoKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihlcnJvcilcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgdW5SZWdpc3RlclB1c2goKSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IFB1c2hOb3RpZmljYXRpb25zLnVucmVnaXN0ZXIoKVxuICAgICAgYXdhaXQgUHVzaE5vdGlmaWNhdGlvbnMucmVtb3ZlQWxsTGlzdGVuZXJzKClcbiAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgdGhpcy5zdG9yYWdlLmdldCgnZmNtVG9rZW4nKVxuICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgIHRoaXMuZGV2aWNlc1NlcnZpY2VcbiAgICAgICAgICAudW5zdWJzY3JpYmVEZXZpY2Uoe1xuICAgICAgICAgICAgcHJvZ3JhbTogZW52aXJvbm1lbnQucHJvZ3JhbSxcbiAgICAgICAgICAgIHRva2VuOiB0b2tlbixcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5zdWJzY3JpYmUoKVxuICAgICAgICBhd2FpdCB0aGlzLnN0b3JhZ2UucmVtb3ZlKCdmY21Ub2tlbicpXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKGVycm9yKVxuICAgIH1cbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBTSxvQkFBb0IsZUFBZSxxQkFBcUIsQ0FBQyxDQUFDOzs7QUMwQzFELElBQU8sOEJBQVAsTUFBTyw0QkFBMEI7RUFDckMsWUFDVSxXQUNBLFlBQ0EsVUFDQSxjQUFpQztBQUhqQyxTQUFBLFlBQUE7QUFDQSxTQUFBLGFBQUE7QUFDQSxTQUFBLFdBQUE7QUFDQSxTQUFBLGVBQUE7RUFDUDtFQUVHLFNBQU07O0FBQ1YsVUFBSTtBQUNGLGNBQU0sS0FBSyxXQUFXLGlCQUFnQixFQUFHLEtBQUssTUFBSztBQUNqRCxnQkFBTSxlQUFlLEtBQUssU0FBUyxZQUFXO0FBQzlDLGNBQ0UsYUFBYSxVQUFVLG1CQUN2QixhQUFhLFVBQVUsZUFDdkI7QUFDQSxpQkFBSyxTQUFTLFlBQVksaUNBQ3JCLGVBRHFCO2NBRXhC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
