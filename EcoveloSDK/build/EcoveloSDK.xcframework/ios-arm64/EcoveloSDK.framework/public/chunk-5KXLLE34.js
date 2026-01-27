import {
  AndroidSettings,
  IOSSettings,
  NativeSettings
} from "./chunk-S5TR5TQN.js";
import {
  f
} from "./chunk-OEYRANOA.js";
import {
  App
} from "./chunk-RFEPADPA.js";
import {
  StationsService
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
  AlertController,
  BehaviorSubject,
  CommonModule,
  Component,
  Injectable,
  IonButton,
  IonCol,
  IonRow,
  ModalController,
  NgIf,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-DGENMXJW.js";
import {
  Capacitor,
  registerPlugin
} from "./chunk-KGBWUDTS.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// node_modules/@capacitor/geolocation/dist/esm/index.js
var Geolocation = registerPlugin("Geolocation", {
  web: () => import("./web-73TODZWW.js").then((m) => new m.GeolocationWeb())
});
f();

// src/app/components/modals/browser-geolocation-instructions/browser-geolocation-instructions.component.ts
var _c0 = () => ["edge", "ie", "unknown"];
var _c1 = (a0) => ({ program: a0 });
function BrowserGeolocationInstructionsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ol")(5, "li");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "li");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "li");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "li");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "a", 5);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 6, "map.browser_geolocation.chrome.title"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 8, "map.browser_geolocation.chrome.step1"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 10, "map.browser_geolocation.chrome.step2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 12, "map.browser_geolocation.chrome.step3"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 14, "map.browser_geolocation.chrome.step4"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 16, "map.browser_geolocation.chrome.documentation"), " ");
  }
}
function BrowserGeolocationInstructionsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ol")(5, "li");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "li");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "map.browser_geolocation.firefox.title"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, "map.browser_geolocation.firefox.step1"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 7, "map.browser_geolocation.firefox.step2"));
  }
}
function BrowserGeolocationInstructionsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ol")(5, "li");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "li");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "map.browser_geolocation.safari.title"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 5, "map.browser_geolocation.safari.step1", \u0275\u0275pureFunction1(10, _c1, ctx_r0.program)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 8, "map.browser_geolocation.safari.step2"));
  }
}
function BrowserGeolocationInstructionsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ol")(5, "li");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "li");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "li");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "map.browser_geolocation.generic.title"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 6, "map.browser_geolocation.generic.step1"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 8, "map.browser_geolocation.generic.step2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 10, "map.browser_geolocation.generic.step3"));
  }
}
var _BrowserGeolocationInstructionsComponent = class _BrowserGeolocationInstructionsComponent {
  constructor(modalCtrl, storage) {
    this.modalCtrl = modalCtrl;
    this.storage = storage;
    this.browserName = this.detectBrowser();
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.storage.get("program").then((program) => {
        this.program = program.name;
      });
    });
  }
  closeModal() {
    this.modalCtrl.dismiss();
  }
  detectBrowser() {
    const userAgent = navigator.userAgent;
    if (userAgent.indexOf("Chrome") > -1) {
      return "chrome";
    } else if (userAgent.indexOf("Safari") > -1) {
      return "safari";
    } else if (userAgent.indexOf("Firefox") > -1) {
      return "firefox";
    } else if (userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident") > -1) {
      return "ie";
    } else if (userAgent.indexOf("Edge") > -1) {
      return "edge";
    } else {
      return "unknown";
    }
  }
};
_BrowserGeolocationInstructionsComponent.\u0275fac = function BrowserGeolocationInstructionsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BrowserGeolocationInstructionsComponent)(\u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(StorageService));
};
_BrowserGeolocationInstructionsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BrowserGeolocationInstructionsComponent, selectors: [["app-browser-geolocation-instructions"]], decls: 17, vars: 14, consts: [[1, "ion-padding"], [1, "browser-instructions"], [4, "ngIf"], [1, "ion-text-end"], ["color", "primary", 3, "click"], ["href", "https://support.google.com/chrome/answer/142065?hl=fr&co=GENIE.Platform%3DDesktop", "target", "_blank", "rel", "noopener noreferrer"]], template: function BrowserGeolocationInstructionsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 1);
    \u0275\u0275template(8, BrowserGeolocationInstructionsComponent_div_8_Template, 20, 18, "div", 2)(9, BrowserGeolocationInstructionsComponent_div_9_Template, 11, 9, "div", 2)(10, BrowserGeolocationInstructionsComponent_div_10_Template, 11, 12, "div", 2)(11, BrowserGeolocationInstructionsComponent_div_11_Template, 14, 12, "div", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "ion-row", 3)(13, "ion-col")(14, "ion-button", 4);
    \u0275\u0275listener("click", function BrowserGeolocationInstructionsComponent_Template_ion_button_click_14_listener() {
      return ctx.closeModal();
    });
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 7, "map.browser_geolocation.header"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 9, "map.browser_geolocation.message"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.browserName === "chrome");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.browserName === "firefox");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.browserName === "safari");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pureFunction0(13, _c0).includes(ctx.browserName));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 11, "generic.close"), " ");
  }
}, dependencies: [IonButton, IonRow, IonCol, CommonModule, NgIf, TranslateModule, TranslatePipe], styles: ["\n\n.browser-instructions[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\n.browser-screenshot[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 300px;\n  width: auto;\n  height: auto;\n  object-fit: contain;\n  display: block;\n  margin: 15px auto;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\nol[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\nli[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  line-height: 1.5;\n}\nh3[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=browser-geolocation-instructions.component.css.map */"] });
var BrowserGeolocationInstructionsComponent = _BrowserGeolocationInstructionsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserGeolocationInstructionsComponent, [{
    type: Component,
    args: [{ selector: "app-browser-geolocation-instructions", imports: [IonButton, IonRow, IonCol, CommonModule, TranslateModule], template: `<div class="ion-padding">
  <h2>{{ 'map.browser_geolocation.header' | translate }}</h2>
  <p>{{ 'map.browser_geolocation.message' | translate }}</p>

  <div class="browser-instructions">
    <!-- Chrome instructions -->
    <div *ngIf="browserName === 'chrome'">
      <h3>{{ 'map.browser_geolocation.chrome.title' | translate }}</h3>
      <ol>
        <li>{{ 'map.browser_geolocation.chrome.step1' | translate }}</li>
        <li>{{ 'map.browser_geolocation.chrome.step2' | translate }}</li>
        <li>{{ 'map.browser_geolocation.chrome.step3' | translate }}</li>
        <li>{{ 'map.browser_geolocation.chrome.step4' | translate }}</li>
      </ol>
      <a
        href="https://support.google.com/chrome/answer/142065?hl=fr&co=GENIE.Platform%3DDesktop"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ 'map.browser_geolocation.chrome.documentation' | translate }}
      </a>
    </div>

    <!-- Firefox instructions -->
    <div *ngIf="browserName === 'firefox'">
      <h3>{{ 'map.browser_geolocation.firefox.title' | translate }}</h3>
      <ol>
        <li>{{ 'map.browser_geolocation.firefox.step1' | translate }}</li>
        <li>{{ 'map.browser_geolocation.firefox.step2' | translate }}</li>
      </ol>
    </div>

    <!-- Safari instructions -->
    <div *ngIf="browserName === 'safari'">
      <h3>{{ 'map.browser_geolocation.safari.title' | translate }}</h3>
      <ol>
        <li>
          {{
            'map.browser_geolocation.safari.step1'
              | translate : { program: program }
          }}
        </li>
        <li>{{ 'map.browser_geolocation.safari.step2' | translate }}</li>
      </ol>
    </div>

    <!-- Generic instructions for other browsers -->
    <div *ngIf="['edge', 'ie', 'unknown'].includes(browserName)">
      <h3>{{ 'map.browser_geolocation.generic.title' | translate }}</h3>
      <ol>
        <li>{{ 'map.browser_geolocation.generic.step1' | translate }}</li>
        <li>{{ 'map.browser_geolocation.generic.step2' | translate }}</li>
        <li>{{ 'map.browser_geolocation.generic.step3' | translate }}</li>
      </ol>
    </div>
  </div>

  <ion-row class="ion-text-end">
    <ion-col>
      <ion-button color="primary" (click)="closeModal()">
        {{ 'generic.close' | translate }}
      </ion-button>
    </ion-col>
  </ion-row>
</div>
`, styles: ["/* src/app/components/modals/browser-geolocation-instructions/browser-geolocation-instructions.component.scss */\n.browser-instructions {\n  margin: 20px 0;\n}\n.browser-screenshot {\n  max-width: 100%;\n  max-height: 300px;\n  width: auto;\n  height: auto;\n  object-fit: contain;\n  display: block;\n  margin: 15px auto;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\nol {\n  padding-left: 20px;\n}\nli {\n  margin-bottom: 10px;\n  line-height: 1.5;\n}\nh3 {\n  margin-top: 20px;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=browser-geolocation-instructions.component.css.map */\n"] }]
  }], () => [{ type: ModalController }, { type: StorageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BrowserGeolocationInstructionsComponent, { className: "BrowserGeolocationInstructionsComponent", filePath: "src/app/components/modals/browser-geolocation-instructions/browser-geolocation-instructions.component.ts", lineNumber: 19 });
})();

// src/app/services/utils/geolocation.service.ts
var _GeolocationService = class _GeolocationService {
  constructor(alertController, translate, modalController, errorHandler) {
    this.alertController = alertController;
    this.translate = translate;
    this.modalController = modalController;
    this.errorHandler = errorHandler;
    this.geolocationState = new BehaviorSubject({
      state: "idle"
    });
    this.activeWatchId = null;
    this.positionTimer = null;
    this.lastPositionUpdate = 0;
    this.POSITION_UPDATE_INTERVAL = 3e4;
    this.resumeListener = App.addListener("resume", () => {
      this.checkPermission();
    });
  }
  startPositionTimer() {
    this.stopPositionTimer();
    this.positionTimer = setInterval(() => {
      const now = Date.now();
      if (now - this.lastPositionUpdate >= this.POSITION_UPDATE_INTERVAL) {
        this.getPosition();
      }
    }, this.POSITION_UPDATE_INTERVAL);
  }
  stopPositionTimer() {
    if (this.positionTimer) {
      clearInterval(this.positionTimer);
      this.positionTimer = null;
    }
  }
  /*********** CAPACITOR/GEOLOCATION ***********/
  checkPermission() {
    return __async(this, null, function* () {
      yield Geolocation.checkPermissions().then((permission) => {
        if (permission.location === "granted" || permission.coarseLocation === "granted") {
          this.geolocationState.next({ state: "granted" });
        } else if (permission.location === "denied" && permission.coarseLocation === "denied") {
          this.geolocationState.next({ state: "denied" });
        } else {
          this.geolocationState.next({ state: "prompt" });
        }
      });
    });
  }
  presentDeniedPositionAlert() {
    return __async(this, null, function* () {
      if (Capacitor.isNativePlatform()) {
        let buttons = [
          {
            text: this.translate.instant("map.denied_position_alert.button"),
            role: "cancel"
          },
          {
            text: this.translate.instant("map.denied_position_alert.settings"),
            handler: () => {
              NativeSettings.open({
                optionAndroid: AndroidSettings.ApplicationDetails,
                optionIOS: IOSSettings.App
              });
            }
          }
        ];
        const alert = yield this.alertController.create({
          header: this.translate.instant("map.denied_position_alert.header"),
          subHeader: this.translate.instant("map.denied_position_alert.subheader"),
          message: this.translate.instant("map.denied_position_alert.message"),
          buttons
        });
        yield alert.present();
      } else {
        const browserInstructionsModal = yield this.modalController.create({
          component: BrowserGeolocationInstructionsComponent,
          cssClass: "dialog-modal"
        });
        yield browserInstructionsModal.present();
      }
    });
  }
  askForPermission() {
    return __async(this, null, function* () {
      if (Capacitor.isNativePlatform()) {
        yield Geolocation.requestPermissions().then((permission) => {
          if (permission.location === "granted" || permission.coarseLocation === "granted") {
            this.geolocationState.next({ state: "granted" });
          } else if (permission.location === "denied" && permission.coarseLocation === "denied") {
            this.geolocationState.next({ state: "denied" });
          } else {
            this.geolocationState.next({ state: "prompt" });
          }
        });
      } else {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((success) => {
            this.geolocationState.next({
              state: "unique_position",
              position: success
            });
          }, (error) => {
            if (error.message === "User denied Geolocation") {
              this.geolocationState.next({
                state: "denied"
              });
            } else {
              this.geolocationState.next({
                state: "error",
                error: error.message
              });
            }
          });
        }
      }
    });
  }
  getPosition(forceUpdate = false) {
    return __async(this, null, function* () {
      const now = Date.now();
      if (!forceUpdate && now - this.lastPositionUpdate < this.POSITION_UPDATE_INTERVAL) {
        return;
      }
      if (Capacitor.isNativePlatform()) {
        if (this.geolocationState.value.state === "granted") {
          yield Geolocation.getCurrentPosition().then((position) => {
            this.lastPositionUpdate = now;
            this.geolocationState.next({
              state: "unique_position",
              position
            });
            this.startPositionTimer();
          }).catch((error) => {
            this.errorHandler.handleError(error);
            this.stopPositionTimer();
          });
        }
      } else {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((success) => {
            this.lastPositionUpdate = now;
            this.geolocationState.next({
              state: "unique_position",
              position: success
            });
            this.startPositionTimer();
          }, (error) => {
            if (error.message === "User denied Geolocation") {
              this.geolocationState.next({
                state: "denied"
              });
            } else {
              this.geolocationState.next({
                state: "error",
                error: error.message
              });
            }
            this.stopPositionTimer();
          });
        }
      }
    });
  }
  watchPosition() {
    return __async(this, null, function* () {
      if (this.isPositionGranted()) {
        if (this.activeWatchId) {
          return;
        }
        const watchId = Math.random().toString();
        this.activeWatchId = watchId;
        yield Geolocation.watchPosition({
          enableHighAccuracy: true,
          timeout: 3e4,
          maximumAge: 1e4
        }, (position) => {
          if (position && position.coords && this.activeWatchId) {
            this.geolocationState.next({
              state: "live_position",
              position,
              watchId: this.activeWatchId
            });
          }
        }).catch((error) => {
          this.errorHandler.handleError(error);
          this.activeWatchId = null;
          this.geolocationState.next({
            state: "error",
            error: error.message
          });
        });
      }
    });
  }
  isPositionGranted() {
    return this.geolocationState.value.state === "granted" || this.geolocationState.value.state === "unique_position" || this.geolocationState.value.state === "live_position";
  }
  unwatchPosition() {
    return __async(this, null, function* () {
      if (this.geolocationState.value.state === "live_position") {
        yield Geolocation.clearWatch({
          id: this.geolocationState.value.watchId
        });
        this.activeWatchId = null;
      }
    });
  }
  goBackToIdle() {
    this.geolocationState.next({ state: "idle" });
  }
  /*********** UTILS ***********/
  deg2rad(deg) {
    return deg * (Math.PI / 180);
  }
  openMaps(latitude, longitude, travelMode = "walking") {
    const lat = typeof latitude === "string" ? parseFloat(latitude) : latitude;
    const lng = typeof longitude === "string" ? parseFloat(longitude) : longitude;
    if (typeof lat === "number" && typeof lng === "number" && !isNaN(lat) && !isNaN(lng)) {
      const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=${travelMode}`;
      window.open(url, "_blank");
    }
  }
  calculateDistance(firstPosition, secondPosition) {
    const R = 6371e3;
    const dLat = this.deg2rad(secondPosition.latitude - firstPosition.latitude);
    const dLon = this.deg2rad(secondPosition.longitude - firstPosition.longitude);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(this.deg2rad(firstPosition.latitude)) * Math.cos(this.deg2rad(secondPosition.latitude)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Math.round(R * c);
  }
  // N'oubliez pas de nettoyer le listener quand le service est détruit
  ngOnDestroy() {
    if (this.resumeListener) {
      this.resumeListener.remove();
    }
  }
};
_GeolocationService.\u0275fac = function GeolocationService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GeolocationService)(\u0275\u0275inject(AlertController), \u0275\u0275inject(TranslateService), \u0275\u0275inject(ModalController), \u0275\u0275inject(ErrorHandlerService));
};
_GeolocationService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GeolocationService, factory: _GeolocationService.\u0275fac, providedIn: "root" });
var GeolocationService = _GeolocationService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GeolocationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: AlertController }, { type: TranslateService }, { type: ModalController }, { type: ErrorHandlerService }], null);
})();

// src/app/services/api-wrappers/stations.service.ts
var _StationWrapperService = class _StationWrapperService {
  constructor(geolocationService, storage, stationsService) {
    this.geolocationService = geolocationService;
    this.storage = storage;
    this.stationsService = stationsService;
    this.stationState = new BehaviorSubject({
      state: "no-station"
    });
    this.stationState$ = this.stationState.asObservable();
  }
  setStationState(state, station) {
    switch (state) {
      case "favorites-stations":
        this.stationState.next({ state: "favorites-stations" });
        break;
      case "no-station":
        this.stationState.next({ state: "no-station" });
        break;
      case "station-selected":
        if (station) {
          this.stationState.next({
            state: "station-selected",
            station
          });
        } else {
          this.stationState.next({ state: "no-station" });
        }
        break;
    }
  }
  getState() {
    return this.stationState.getValue();
  }
  getNearbyStations(position, radius, expandVehicles) {
    return __async(this, null, function* () {
      let stations;
      if (expandVehicles) {
        stations = yield new Promise((resolve) => {
          this.stationsService.listStation({
            program: environment.program,
            expand: ["vehicules"]
          }).subscribe((response) => resolve(response.data));
        });
      } else {
        stations = (yield this.storage.get("stations")).data;
      }
      return stations.filter((station) => {
        if (!station.position)
          return false;
        const distance = this.geolocationService.calculateDistance(position, {
          latitude: Number(station.position.latitude),
          longitude: Number(station.position.longitude)
        });
        return distance <= radius;
      });
    });
  }
  refreshStations(forceRefresh = false) {
    return __async(this, null, function* () {
      return new Promise((resolve) => __async(this, null, function* () {
        const stations = yield this.storage.get("stations");
        if (stations && stations.lastUpdate && Date.now() - stations.lastUpdate < 1e3 * 30 && !forceRefresh) {
          resolve();
          return;
        }
        const loadAllStations = (lastId = null, allStations = []) => {
          const params = {
            liveMode: environment.production,
            program: environment.program,
            limit: 100
          };
          if (lastId) {
            params.startingAfter = lastId;
          }
          this.stationsService.listStation(params).subscribe({
            next: (response) => __async(this, null, function* () {
              const combinedStations = [...allStations, ...response.data];
              if (response.has_more && response.data.length > 0) {
                const lastStation = response.data[response.data.length - 1];
                loadAllStations(lastStation.id, combinedStations);
              } else {
                yield this.storage.set("stations", {
                  data: combinedStations,
                  lastUpdate: Date.now()
                });
                resolve();
              }
            }),
            error: (error) => __async(this, null, function* () {
              console.error("Error loading stations:", error);
              if (allStations.length > 0) {
                yield this.storage.set("stations", {
                  data: allStations,
                  lastUpdate: Date.now()
                });
              }
              resolve();
            })
          });
        };
        loadAllStations();
      }));
    });
  }
  getBestVehicles(vehicles, amount) {
    if (!(vehicles == null ? void 0 : vehicles.length) || amount <= 0) {
      return [];
    }
    return vehicles.filter((vehicle) => {
      var _a;
      return ((_a = vehicle == null ? void 0 : vehicle.battery_vae) == null ? void 0 : _a.percent) != null;
    }).sort((vehicleA, vehicleB) => {
      var _a, _b, _c, _d;
      const batteryA = (_b = (_a = vehicleA.battery_vae) == null ? void 0 : _a.percent) != null ? _b : 0;
      const batteryB = (_d = (_c = vehicleB.battery_vae) == null ? void 0 : _c.percent) != null ? _d : 0;
      return batteryB - batteryA;
    }).slice(0, amount);
  }
};
_StationWrapperService.\u0275fac = function StationWrapperService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StationWrapperService)(\u0275\u0275inject(GeolocationService), \u0275\u0275inject(StorageService), \u0275\u0275inject(StationsService));
};
_StationWrapperService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StationWrapperService, factory: _StationWrapperService.\u0275fac, providedIn: "root" });
var StationWrapperService = _StationWrapperService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StationWrapperService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: GeolocationService }, { type: StorageService }, { type: StationsService }], null);
})();

export {
  GeolocationService,
  StationWrapperService
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY2FwYWNpdG9yL2dlb2xvY2F0aW9uL2Rpc3QvZXNtL2luZGV4LmpzIiwic3JjL2FwcC9jb21wb25lbnRzL21vZGFscy9icm93c2VyLWdlb2xvY2F0aW9uLWluc3RydWN0aW9ucy9icm93c2VyLWdlb2xvY2F0aW9uLWluc3RydWN0aW9ucy5jb21wb25lbnQudHMiLCJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWxzL2Jyb3dzZXItZ2VvbG9jYXRpb24taW5zdHJ1Y3Rpb25zL2Jyb3dzZXItZ2VvbG9jYXRpb24taW5zdHJ1Y3Rpb25zLmNvbXBvbmVudC5odG1sIiwic3JjL2FwcC9zZXJ2aWNlcy91dGlscy9nZW9sb2NhdGlvbi5zZXJ2aWNlLnRzIiwic3JjL2FwcC9zZXJ2aWNlcy9hcGktd3JhcHBlcnMvc3RhdGlvbnMuc2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWdpc3RlclBsdWdpbiB9IGZyb20gJ0BjYXBhY2l0b3IvY29yZSc7XG5pbXBvcnQgeyBleHBvc2VTeW5hcHNlIH0gZnJvbSAnQGNhcGFjaXRvci9zeW5hcHNlJztcbmNvbnN0IEdlb2xvY2F0aW9uID0gcmVnaXN0ZXJQbHVnaW4oJ0dlb2xvY2F0aW9uJywge1xuICB3ZWI6ICgpID0+IGltcG9ydCgnLi93ZWInKS50aGVuKG0gPT4gbmV3IG0uR2VvbG9jYXRpb25XZWIoKSlcbn0pO1xuZXhwb3NlU3luYXBzZSgpO1xuZXhwb3J0ICogZnJvbSAnLi9kZWZpbml0aW9ucyc7XG5leHBvcnQgeyBHZW9sb2NhdGlvbiB9O1xuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJ1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHtcbiAgSW9uQnV0dG9uLFxuICBJb25Sb3csXG4gIElvbkNvbCxcbiAgSW9uVGV4dCxcbiAgTW9kYWxDb250cm9sbGVyLFxufSBmcm9tICdAaW9uaWMvYW5ndWxhci9zdGFuZGFsb25lJ1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSdcbmltcG9ydCB7IFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy91dGlscy9zdG9yYWdlLnNlcnZpY2UnXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1icm93c2VyLWdlb2xvY2F0aW9uLWluc3RydWN0aW9ucycsXG4gIHRlbXBsYXRlVXJsOiAnLi9icm93c2VyLWdlb2xvY2F0aW9uLWluc3RydWN0aW9ucy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Jyb3dzZXItZ2VvbG9jYXRpb24taW5zdHJ1Y3Rpb25zLmNvbXBvbmVudC5zY3NzJ10sXG4gIGltcG9ydHM6IFtJb25CdXR0b24sIElvblJvdywgSW9uQ29sLCBDb21tb25Nb2R1bGUsIFRyYW5zbGF0ZU1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIEJyb3dzZXJHZW9sb2NhdGlvbkluc3RydWN0aW9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGJyb3dzZXJOYW1lOiBzdHJpbmdcbiAgcHJvZ3JhbTogc3RyaW5nXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBtb2RhbEN0cmw6IE1vZGFsQ29udHJvbGxlcixcbiAgICBwcml2YXRlIHN0b3JhZ2U6IFN0b3JhZ2VTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuYnJvd3Nlck5hbWUgPSB0aGlzLmRldGVjdEJyb3dzZXIoKVxuICB9XG4gIGFzeW5jIG5nT25Jbml0KCkge1xuICAgIGF3YWl0IHRoaXMuc3RvcmFnZS5nZXQoJ3Byb2dyYW0nKS50aGVuKChwcm9ncmFtKSA9PiB7XG4gICAgICB0aGlzLnByb2dyYW0gPSBwcm9ncmFtLm5hbWVcbiAgICB9KVxuICB9XG4gIGNsb3NlTW9kYWwoKSB7XG4gICAgdGhpcy5tb2RhbEN0cmwuZGlzbWlzcygpXG4gIH1cblxuICBwcml2YXRlIGRldGVjdEJyb3dzZXIoKTogc3RyaW5nIHtcbiAgICBjb25zdCB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50XG5cbiAgICBpZiAodXNlckFnZW50LmluZGV4T2YoJ0Nocm9tZScpID4gLTEpIHtcbiAgICAgIHJldHVybiAnY2hyb21lJ1xuICAgIH0gZWxzZSBpZiAodXNlckFnZW50LmluZGV4T2YoJ1NhZmFyaScpID4gLTEpIHtcbiAgICAgIHJldHVybiAnc2FmYXJpJ1xuICAgIH0gZWxzZSBpZiAodXNlckFnZW50LmluZGV4T2YoJ0ZpcmVmb3gnKSA+IC0xKSB7XG4gICAgICByZXR1cm4gJ2ZpcmVmb3gnXG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHVzZXJBZ2VudC5pbmRleE9mKCdNU0lFJykgPiAtMSB8fFxuICAgICAgdXNlckFnZW50LmluZGV4T2YoJ1RyaWRlbnQnKSA+IC0xXG4gICAgKSB7XG4gICAgICByZXR1cm4gJ2llJ1xuICAgIH0gZWxzZSBpZiAodXNlckFnZW50LmluZGV4T2YoJ0VkZ2UnKSA+IC0xKSB7XG4gICAgICByZXR1cm4gJ2VkZ2UnXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAndW5rbm93bidcbiAgICB9XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJpb24tcGFkZGluZ1wiPlxuICA8aDI+e3sgJ21hcC5icm93c2VyX2dlb2xvY2F0aW9uLmhlYWRlcicgfCB0cmFuc2xhdGUgfX08L2gyPlxuICA8cD57eyAnbWFwLmJyb3dzZXJfZ2VvbG9jYXRpb24ubWVzc2FnZScgfCB0cmFuc2xhdGUgfX08L3A+XG5cbiAgPGRpdiBjbGFzcz1cImJyb3dzZXItaW5zdHJ1Y3Rpb25zXCI+XG4gICAgPCEtLSBDaHJvbWUgaW5zdHJ1Y3Rpb25zIC0tPlxuICAgIDxkaXYgKm5nSWY9XCJicm93c2VyTmFtZSA9PT0gJ2Nocm9tZSdcIj5cbiAgICAgIDxoMz57eyAnbWFwLmJyb3dzZXJfZ2VvbG9jYXRpb24uY2hyb21lLnRpdGxlJyB8IHRyYW5zbGF0ZSB9fTwvaDM+XG4gICAgICA8b2w+XG4gICAgICAgIDxsaT57eyAnbWFwLmJyb3dzZXJfZ2VvbG9jYXRpb24uY2hyb21lLnN0ZXAxJyB8IHRyYW5zbGF0ZSB9fTwvbGk+XG4gICAgICAgIDxsaT57eyAnbWFwLmJyb3dzZXJfZ2VvbG9jYXRpb24uY2hyb21lLnN0ZXAyJyB8IHRyYW5zbGF0ZSB9fTwvbGk+XG4gICAgICAgIDxsaT57eyAnbWFwLmJyb3dzZXJfZ2VvbG9jYXRpb24uY2hyb21lLnN0ZXAzJyB8IHRyYW5zbGF0ZSB9fTwvbGk+XG4gICAgICAgIDxsaT57eyAnbWFwLmJyb3dzZXJfZ2VvbG9jYXRpb24uY2hyb21lLnN0ZXA0JyB8IHRyYW5zbGF0ZSB9fTwvbGk+XG4gICAgICA8L29sPlxuICAgICAgPGFcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vc3VwcG9ydC5nb29nbGUuY29tL2Nocm9tZS9hbnN3ZXIvMTQyMDY1P2hsPWZyJmNvPUdFTklFLlBsYXRmb3JtJTNERGVza3RvcFwiXG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgPlxuICAgICAgICB7eyAnbWFwLmJyb3dzZXJfZ2VvbG9jYXRpb24uY2hyb21lLmRvY3VtZW50YXRpb24nIHwgdHJhbnNsYXRlIH19XG4gICAgICA8L2E+XG4gICAgPC9kaXY+XG5cbiAgICA8IS0tIEZpcmVmb3ggaW5zdHJ1Y3Rpb25zIC0tPlxuICAgIDxkaXYgKm5nSWY9XCJicm93c2VyTmFtZSA9PT0gJ2ZpcmVmb3gnXCI+XG4gICAgICA8aDM+e3sgJ21hcC5icm93c2VyX2dlb2xvY2F0aW9uLmZpcmVmb3gudGl0bGUnIHwgdHJhbnNsYXRlIH19PC9oMz5cbiAgICAgIDxvbD5cbiAgICAgICAgPGxpPnt7ICdtYXAuYnJvd3Nlcl9nZW9sb2NhdGlvbi5maXJlZm94LnN0ZXAxJyB8IHRyYW5zbGF0ZSB9fTwvbGk+XG4gICAgICAgIDxsaT57eyAnbWFwLmJyb3dzZXJfZ2VvbG9jYXRpb24uZmlyZWZveC5zdGVwMicgfCB0cmFuc2xhdGUgfX08L2xpPlxuICAgICAgPC9vbD5cbiAgICA8L2Rpdj5cblxuICAgIDwhLS0gU2FmYXJpIGluc3RydWN0aW9ucyAtLT5cbiAgICA8ZGl2ICpuZ0lmPVwiYnJvd3Nlck5hbWUgPT09ICdzYWZhcmknXCI+XG4gICAgICA8aDM+e3sgJ21hcC5icm93c2VyX2dlb2xvY2F0aW9uLnNhZmFyaS50aXRsZScgfCB0cmFuc2xhdGUgfX08L2gzPlxuICAgICAgPG9sPlxuICAgICAgICA8bGk+XG4gICAgICAgICAge3tcbiAgICAgICAgICAgICdtYXAuYnJvd3Nlcl9nZW9sb2NhdGlvbi5zYWZhcmkuc3RlcDEnXG4gICAgICAgICAgICAgIHwgdHJhbnNsYXRlIDogeyBwcm9ncmFtOiBwcm9ncmFtIH1cbiAgICAgICAgICB9fVxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+e3sgJ21hcC5icm93c2VyX2dlb2xvY2F0aW9uLnNhZmFyaS5zdGVwMicgfCB0cmFuc2xhdGUgfX08L2xpPlxuICAgICAgPC9vbD5cbiAgICA8L2Rpdj5cblxuICAgIDwhLS0gR2VuZXJpYyBpbnN0cnVjdGlvbnMgZm9yIG90aGVyIGJyb3dzZXJzIC0tPlxuICAgIDxkaXYgKm5nSWY9XCJbJ2VkZ2UnLCAnaWUnLCAndW5rbm93biddLmluY2x1ZGVzKGJyb3dzZXJOYW1lKVwiPlxuICAgICAgPGgzPnt7ICdtYXAuYnJvd3Nlcl9nZW9sb2NhdGlvbi5nZW5lcmljLnRpdGxlJyB8IHRyYW5zbGF0ZSB9fTwvaDM+XG4gICAgICA8b2w+XG4gICAgICAgIDxsaT57eyAnbWFwLmJyb3dzZXJfZ2VvbG9jYXRpb24uZ2VuZXJpYy5zdGVwMScgfCB0cmFuc2xhdGUgfX08L2xpPlxuICAgICAgICA8bGk+e3sgJ21hcC5icm93c2VyX2dlb2xvY2F0aW9uLmdlbmVyaWMuc3RlcDInIHwgdHJhbnNsYXRlIH19PC9saT5cbiAgICAgICAgPGxpPnt7ICdtYXAuYnJvd3Nlcl9nZW9sb2NhdGlvbi5nZW5lcmljLnN0ZXAzJyB8IHRyYW5zbGF0ZSB9fTwvbGk+XG4gICAgICA8L29sPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8aW9uLXJvdyBjbGFzcz1cImlvbi10ZXh0LWVuZFwiPlxuICAgIDxpb24tY29sPlxuICAgICAgPGlvbi1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImNsb3NlTW9kYWwoKVwiPlxuICAgICAgICB7eyAnZ2VuZXJpYy5jbG9zZScgfCB0cmFuc2xhdGUgfX1cbiAgICAgIDwvaW9uLWJ1dHRvbj5cbiAgICA8L2lvbi1jb2w+XG4gIDwvaW9uLXJvdz5cbjwvZGl2PlxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBDYXBhY2l0b3IgfSBmcm9tICdAY2FwYWNpdG9yL2NvcmUnXG5pbXBvcnQgeyBBcHAgfSBmcm9tICdAY2FwYWNpdG9yL2FwcCdcbmltcG9ydCB7IEdlb2xvY2F0aW9uLCBQb3NpdGlvbiB9IGZyb20gJ0BjYXBhY2l0b3IvZ2VvbG9jYXRpb24nXG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSdcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnXG5pbXBvcnQgeyBBbGVydENvbnRyb2xsZXIgfSBmcm9tICdAaW9uaWMvYW5ndWxhci9zdGFuZGFsb25lJ1xuaW1wb3J0IHtcbiAgTmF0aXZlU2V0dGluZ3MsXG4gIEFuZHJvaWRTZXR0aW5ncyxcbiAgSU9TU2V0dGluZ3MsXG59IGZyb20gJ2NhcGFjaXRvci1uYXRpdmUtc2V0dGluZ3MnXG5pbXBvcnQgeyBNb2RhbENvbnRyb2xsZXIgfSBmcm9tICdAaW9uaWMvYW5ndWxhci9zdGFuZGFsb25lJ1xuaW1wb3J0IHsgQnJvd3Nlckdlb2xvY2F0aW9uSW5zdHJ1Y3Rpb25zQ29tcG9uZW50IH0gZnJvbSAnc3JjL2FwcC9jb21wb25lbnRzL21vZGFscy9icm93c2VyLWdlb2xvY2F0aW9uLWluc3RydWN0aW9ucy9icm93c2VyLWdlb2xvY2F0aW9uLWluc3RydWN0aW9ucy5jb21wb25lbnQnXG5pbXBvcnQgeyBFcnJvckhhbmRsZXJTZXJ2aWNlIH0gZnJvbSAnLi9lcnJvci1oYW5kbGVyLnNlcnZpY2UnXG5cbmV4cG9ydCB0eXBlIEdlb2xvY2F0aW9uU3RhdGUgPVxuICB8IHtcbiAgICAgIHN0YXRlOiAnaWRsZSdcbiAgICB9XG4gIHwge1xuICAgICAgc3RhdGU6ICdncmFudGVkJ1xuICAgIH1cbiAgfCB7XG4gICAgICBzdGF0ZTogJ2RlbmllZCdcbiAgICB9XG4gIHwge1xuICAgICAgc3RhdGU6ICd1bmlxdWVfcG9zaXRpb24nXG4gICAgICBwb3NpdGlvbjogUG9zaXRpb25cbiAgICB9XG4gIHwge1xuICAgICAgc3RhdGU6ICdsaXZlX3Bvc2l0aW9uJ1xuICAgICAgcG9zaXRpb246IFBvc2l0aW9uXG4gICAgICB3YXRjaElkOiBzdHJpbmdcbiAgICB9XG4gIHwge1xuICAgICAgc3RhdGU6ICdwcm9tcHQnXG4gICAgfVxuICB8IHtcbiAgICAgIHN0YXRlOiAnZXJyb3InXG4gICAgICBlcnJvcjogc3RyaW5nXG4gICAgfVxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEdlb2xvY2F0aW9uU2VydmljZSB7XG4gIGdlb2xvY2F0aW9uU3RhdGU6IEJlaGF2aW9yU3ViamVjdDxHZW9sb2NhdGlvblN0YXRlPiA9XG4gICAgbmV3IEJlaGF2aW9yU3ViamVjdDxHZW9sb2NhdGlvblN0YXRlPih7XG4gICAgICBzdGF0ZTogJ2lkbGUnLFxuICAgIH0pXG4gIHByaXZhdGUgcmVzdW1lTGlzdGVuZXI6IGFueVxuICBwcml2YXRlIGFjdGl2ZVdhdGNoSWQ6IHN0cmluZyB8IG51bGwgPSBudWxsXG4gIHByaXZhdGUgcG9zaXRpb25UaW1lcjogYW55ID0gbnVsbFxuICBwcml2YXRlIGxhc3RQb3NpdGlvblVwZGF0ZTogbnVtYmVyID0gMFxuICBwcml2YXRlIHJlYWRvbmx5IFBPU0lUSU9OX1VQREFURV9JTlRFUlZBTCA9IDMwMDAwIC8vIDMwIHNlY29uZHMgaW4gbWlsbGlzZWNvbmRzXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhbGVydENvbnRyb2xsZXI6IEFsZXJ0Q29udHJvbGxlcixcbiAgICBwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSxcbiAgICBwcml2YXRlIG1vZGFsQ29udHJvbGxlcjogTW9kYWxDb250cm9sbGVyLFxuICAgIHByaXZhdGUgZXJyb3JIYW5kbGVyOiBFcnJvckhhbmRsZXJTZXJ2aWNlXG4gICkge1xuICAgIC8vIFNldHVwIHJlc3VtZSBsaXN0ZW5lclxuICAgIHRoaXMucmVzdW1lTGlzdGVuZXIgPSBBcHAuYWRkTGlzdGVuZXIoJ3Jlc3VtZScsICgpID0+IHtcbiAgICAgIHRoaXMuY2hlY2tQZXJtaXNzaW9uKClcbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSBzdGFydFBvc2l0aW9uVGltZXIoKSB7XG4gICAgLy8gQ2xlYXIgYW55IGV4aXN0aW5nIHRpbWVyXG4gICAgdGhpcy5zdG9wUG9zaXRpb25UaW1lcigpXG5cbiAgICAvLyBTdGFydCBuZXcgdGltZXJcbiAgICB0aGlzLnBvc2l0aW9uVGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpXG4gICAgICBpZiAobm93IC0gdGhpcy5sYXN0UG9zaXRpb25VcGRhdGUgPj0gdGhpcy5QT1NJVElPTl9VUERBVEVfSU5URVJWQUwpIHtcbiAgICAgICAgdGhpcy5nZXRQb3NpdGlvbigpXG4gICAgICB9XG4gICAgfSwgdGhpcy5QT1NJVElPTl9VUERBVEVfSU5URVJWQUwpXG4gIH1cblxuICBwcml2YXRlIHN0b3BQb3NpdGlvblRpbWVyKCkge1xuICAgIGlmICh0aGlzLnBvc2l0aW9uVGltZXIpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5wb3NpdGlvblRpbWVyKVxuICAgICAgdGhpcy5wb3NpdGlvblRpbWVyID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIC8qKioqKioqKioqKiBDQVBBQ0lUT1IvR0VPTE9DQVRJT04gKioqKioqKioqKiovXG4gIGFzeW5jIGNoZWNrUGVybWlzc2lvbigpIHtcbiAgICBhd2FpdCBHZW9sb2NhdGlvbi5jaGVja1Blcm1pc3Npb25zKCkudGhlbigocGVybWlzc2lvbikgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBwZXJtaXNzaW9uLmxvY2F0aW9uID09PSAnZ3JhbnRlZCcgfHxcbiAgICAgICAgcGVybWlzc2lvbi5jb2Fyc2VMb2NhdGlvbiA9PT0gJ2dyYW50ZWQnXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5nZW9sb2NhdGlvblN0YXRlLm5leHQoeyBzdGF0ZTogJ2dyYW50ZWQnIH0pXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBwZXJtaXNzaW9uLmxvY2F0aW9uID09PSAnZGVuaWVkJyAmJlxuICAgICAgICBwZXJtaXNzaW9uLmNvYXJzZUxvY2F0aW9uID09PSAnZGVuaWVkJ1xuICAgICAgKSB7XG4gICAgICAgIHRoaXMuZ2VvbG9jYXRpb25TdGF0ZS5uZXh0KHsgc3RhdGU6ICdkZW5pZWQnIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmdlb2xvY2F0aW9uU3RhdGUubmV4dCh7IHN0YXRlOiAncHJvbXB0JyB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgYXN5bmMgcHJlc2VudERlbmllZFBvc2l0aW9uQWxlcnQoKSB7XG4gICAgLy8gRm9yIG5hdGl2ZSBwbGF0Zm9ybXMsIHVzZSB0aGUgZXhpc3RpbmcgYWxlcnRcbiAgICBpZiAoQ2FwYWNpdG9yLmlzTmF0aXZlUGxhdGZvcm0oKSkge1xuICAgICAgbGV0IGJ1dHRvbnM6IHsgdGV4dDogc3RyaW5nOyByb2xlPzogc3RyaW5nOyBoYW5kbGVyPzogKCkgPT4gdm9pZCB9W10gPSBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiB0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KCdtYXAuZGVuaWVkX3Bvc2l0aW9uX2FsZXJ0LmJ1dHRvbicpLFxuICAgICAgICAgIHJvbGU6ICdjYW5jZWwnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogdGhpcy50cmFuc2xhdGUuaW5zdGFudCgnbWFwLmRlbmllZF9wb3NpdGlvbl9hbGVydC5zZXR0aW5ncycpLFxuICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHtcbiAgICAgICAgICAgIE5hdGl2ZVNldHRpbmdzLm9wZW4oe1xuICAgICAgICAgICAgICBvcHRpb25BbmRyb2lkOiBBbmRyb2lkU2V0dGluZ3MuQXBwbGljYXRpb25EZXRhaWxzLFxuICAgICAgICAgICAgICBvcHRpb25JT1M6IElPU1NldHRpbmdzLkFwcCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIF1cblxuICAgICAgY29uc3QgYWxlcnQgPSBhd2FpdCB0aGlzLmFsZXJ0Q29udHJvbGxlci5jcmVhdGUoe1xuICAgICAgICBoZWFkZXI6IHRoaXMudHJhbnNsYXRlLmluc3RhbnQoJ21hcC5kZW5pZWRfcG9zaXRpb25fYWxlcnQuaGVhZGVyJyksXG4gICAgICAgIHN1YkhlYWRlcjogdGhpcy50cmFuc2xhdGUuaW5zdGFudChcbiAgICAgICAgICAnbWFwLmRlbmllZF9wb3NpdGlvbl9hbGVydC5zdWJoZWFkZXInXG4gICAgICAgICksXG4gICAgICAgIG1lc3NhZ2U6IHRoaXMudHJhbnNsYXRlLmluc3RhbnQoJ21hcC5kZW5pZWRfcG9zaXRpb25fYWxlcnQubWVzc2FnZScpLFxuICAgICAgICBidXR0b25zOiBidXR0b25zLFxuICAgICAgfSlcbiAgICAgIGF3YWl0IGFsZXJ0LnByZXNlbnQoKVxuICAgIH1cbiAgICAvLyBGb3Igd2ViIHBsYXRmb3Jtcywgc2hvdyBhIG1vZGFsIHdpdGggYnJvd3Nlci1zcGVjaWZpYyBpbnN0cnVjdGlvbnNcbiAgICBlbHNlIHtcbiAgICAgIGNvbnN0IGJyb3dzZXJJbnN0cnVjdGlvbnNNb2RhbCA9IGF3YWl0IHRoaXMubW9kYWxDb250cm9sbGVyLmNyZWF0ZSh7XG4gICAgICAgIGNvbXBvbmVudDogQnJvd3Nlckdlb2xvY2F0aW9uSW5zdHJ1Y3Rpb25zQ29tcG9uZW50LFxuICAgICAgICBjc3NDbGFzczogJ2RpYWxvZy1tb2RhbCcsXG4gICAgICB9KVxuICAgICAgYXdhaXQgYnJvd3Nlckluc3RydWN0aW9uc01vZGFsLnByZXNlbnQoKVxuICAgIH1cbiAgfVxuICBhc3luYyBhc2tGb3JQZXJtaXNzaW9uKCkge1xuICAgIC8vSUYgT04gTU9CSUxFLCBSRVFVRVNUIFBFUk1JU1NJT05TXG4gICAgaWYgKENhcGFjaXRvci5pc05hdGl2ZVBsYXRmb3JtKCkpIHtcbiAgICAgIGF3YWl0IEdlb2xvY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9ucygpLnRoZW4oKHBlcm1pc3Npb24pID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHBlcm1pc3Npb24ubG9jYXRpb24gPT09ICdncmFudGVkJyB8fFxuICAgICAgICAgIHBlcm1pc3Npb24uY29hcnNlTG9jYXRpb24gPT09ICdncmFudGVkJ1xuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLmdlb2xvY2F0aW9uU3RhdGUubmV4dCh7IHN0YXRlOiAnZ3JhbnRlZCcgfSlcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBwZXJtaXNzaW9uLmxvY2F0aW9uID09PSAnZGVuaWVkJyAmJlxuICAgICAgICAgIHBlcm1pc3Npb24uY29hcnNlTG9jYXRpb24gPT09ICdkZW5pZWQnXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMuZ2VvbG9jYXRpb25TdGF0ZS5uZXh0KHsgc3RhdGU6ICdkZW5pZWQnIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5nZW9sb2NhdGlvblN0YXRlLm5leHQoeyBzdGF0ZTogJ3Byb21wdCcgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgLy9JRiBPTiBXRUJcbiAgICAgIGlmIChuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcbiAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihcbiAgICAgICAgICAoc3VjY2VzcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5nZW9sb2NhdGlvblN0YXRlLm5leHQoe1xuICAgICAgICAgICAgICBzdGF0ZTogJ3VuaXF1ZV9wb3NpdGlvbicsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBzdWNjZXNzLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yLm1lc3NhZ2UgPT09ICdVc2VyIGRlbmllZCBHZW9sb2NhdGlvbicpIHtcbiAgICAgICAgICAgICAgdGhpcy5nZW9sb2NhdGlvblN0YXRlLm5leHQoe1xuICAgICAgICAgICAgICAgIHN0YXRlOiAnZGVuaWVkJyxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuZ2VvbG9jYXRpb25TdGF0ZS5uZXh0KHtcbiAgICAgICAgICAgICAgICBzdGF0ZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgYXN5bmMgZ2V0UG9zaXRpb24oZm9yY2VVcGRhdGU6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KClcbiAgICBpZiAoXG4gICAgICAhZm9yY2VVcGRhdGUgJiZcbiAgICAgIG5vdyAtIHRoaXMubGFzdFBvc2l0aW9uVXBkYXRlIDwgdGhpcy5QT1NJVElPTl9VUERBVEVfSU5URVJWQUxcbiAgICApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChDYXBhY2l0b3IuaXNOYXRpdmVQbGF0Zm9ybSgpKSB7XG4gICAgICBpZiAodGhpcy5nZW9sb2NhdGlvblN0YXRlLnZhbHVlLnN0YXRlID09PSAnZ3JhbnRlZCcpIHtcbiAgICAgICAgYXdhaXQgR2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKClcbiAgICAgICAgICAudGhlbigocG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgIHRoaXMubGFzdFBvc2l0aW9uVXBkYXRlID0gbm93XG4gICAgICAgICAgICB0aGlzLmdlb2xvY2F0aW9uU3RhdGUubmV4dCh7XG4gICAgICAgICAgICAgIHN0YXRlOiAndW5pcXVlX3Bvc2l0aW9uJyxcbiAgICAgICAgICAgICAgcG9zaXRpb24sXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy8gU3RhcnQgdGltZXIgd2hlbiB3ZSBnZXQgYSBwb3NpdGlvblxuICAgICAgICAgICAgdGhpcy5zdGFydFBvc2l0aW9uVGltZXIoKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgICAgICAgICB0aGlzLnN0b3BQb3NpdGlvblRpbWVyKClcbiAgICAgICAgICB9KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XG4gICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oXG4gICAgICAgICAgKHN1Y2Nlc3MpID0+IHtcbiAgICAgICAgICAgIHRoaXMubGFzdFBvc2l0aW9uVXBkYXRlID0gbm93XG4gICAgICAgICAgICB0aGlzLmdlb2xvY2F0aW9uU3RhdGUubmV4dCh7XG4gICAgICAgICAgICAgIHN0YXRlOiAndW5pcXVlX3Bvc2l0aW9uJyxcbiAgICAgICAgICAgICAgcG9zaXRpb246IHN1Y2Nlc3MsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy8gU3RhcnQgdGltZXIgd2hlbiB3ZSBnZXQgYSBwb3NpdGlvblxuICAgICAgICAgICAgdGhpcy5zdGFydFBvc2l0aW9uVGltZXIoKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IubWVzc2FnZSA9PT0gJ1VzZXIgZGVuaWVkIEdlb2xvY2F0aW9uJykge1xuICAgICAgICAgICAgICB0aGlzLmdlb2xvY2F0aW9uU3RhdGUubmV4dCh7XG4gICAgICAgICAgICAgICAgc3RhdGU6ICdkZW5pZWQnLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5nZW9sb2NhdGlvblN0YXRlLm5leHQoe1xuICAgICAgICAgICAgICAgIHN0YXRlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zdG9wUG9zaXRpb25UaW1lcigpXG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGFzeW5jIHdhdGNoUG9zaXRpb24oKSB7XG4gICAgaWYgKHRoaXMuaXNQb3NpdGlvbkdyYW50ZWQoKSkge1xuICAgICAgLy8gSWYgdGhlcmUncyBhbHJlYWR5IGFuIGFjdGl2ZSB3YXRjaCwgZG9uJ3Qgc3RhcnQgYSBuZXcgb25lXG4gICAgICBpZiAodGhpcy5hY3RpdmVXYXRjaElkKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCB3YXRjaElkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygpXG4gICAgICB0aGlzLmFjdGl2ZVdhdGNoSWQgPSB3YXRjaElkXG5cbiAgICAgIC8vIFN0YXJ0IHRoZSB3YXRjaCBmb3IgcmVhbC10aW1lIHVwZGF0ZXNcbiAgICAgIGF3YWl0IEdlb2xvY2F0aW9uLndhdGNoUG9zaXRpb24oXG4gICAgICAgIHtcbiAgICAgICAgICBlbmFibGVIaWdoQWNjdXJhY3k6IHRydWUsXG4gICAgICAgICAgdGltZW91dDogMzAwMDAsXG4gICAgICAgICAgbWF4aW11bUFnZTogMTAwMDAsXG4gICAgICAgIH0sXG4gICAgICAgIChwb3NpdGlvbikgPT4ge1xuICAgICAgICAgIGlmIChwb3NpdGlvbiAmJiBwb3NpdGlvbi5jb29yZHMgJiYgdGhpcy5hY3RpdmVXYXRjaElkKSB7XG4gICAgICAgICAgICB0aGlzLmdlb2xvY2F0aW9uU3RhdGUubmV4dCh7XG4gICAgICAgICAgICAgIHN0YXRlOiAnbGl2ZV9wb3NpdGlvbicsXG4gICAgICAgICAgICAgIHBvc2l0aW9uLFxuICAgICAgICAgICAgICB3YXRjaElkOiB0aGlzLmFjdGl2ZVdhdGNoSWQsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgICAgIHRoaXMuYWN0aXZlV2F0Y2hJZCA9IG51bGxcbiAgICAgICAgdGhpcy5nZW9sb2NhdGlvblN0YXRlLm5leHQoe1xuICAgICAgICAgIHN0YXRlOiAnZXJyb3InLFxuICAgICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlLFxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBpc1Bvc2l0aW9uR3JhbnRlZCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5nZW9sb2NhdGlvblN0YXRlLnZhbHVlLnN0YXRlID09PSAnZ3JhbnRlZCcgfHxcbiAgICAgIHRoaXMuZ2VvbG9jYXRpb25TdGF0ZS52YWx1ZS5zdGF0ZSA9PT0gJ3VuaXF1ZV9wb3NpdGlvbicgfHxcbiAgICAgIHRoaXMuZ2VvbG9jYXRpb25TdGF0ZS52YWx1ZS5zdGF0ZSA9PT0gJ2xpdmVfcG9zaXRpb24nXG4gICAgKVxuICB9XG4gIGFzeW5jIHVud2F0Y2hQb3NpdGlvbigpIHtcbiAgICBpZiAodGhpcy5nZW9sb2NhdGlvblN0YXRlLnZhbHVlLnN0YXRlID09PSAnbGl2ZV9wb3NpdGlvbicpIHtcbiAgICAgIGF3YWl0IEdlb2xvY2F0aW9uLmNsZWFyV2F0Y2goe1xuICAgICAgICBpZDogdGhpcy5nZW9sb2NhdGlvblN0YXRlLnZhbHVlLndhdGNoSWQsXG4gICAgICB9KVxuICAgICAgdGhpcy5hY3RpdmVXYXRjaElkID0gbnVsbFxuICAgIH1cbiAgfVxuICBnb0JhY2tUb0lkbGUoKSB7XG4gICAgdGhpcy5nZW9sb2NhdGlvblN0YXRlLm5leHQoeyBzdGF0ZTogJ2lkbGUnIH0pXG4gIH1cbiAgLyoqKioqKioqKioqIFVUSUxTICoqKioqKioqKioqL1xuICBwcml2YXRlIGRlZzJyYWQoZGVnOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBkZWcgKiAoTWF0aC5QSSAvIDE4MClcbiAgfVxuICBvcGVuTWFwcyhcbiAgICBsYXRpdHVkZTogc3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkLFxuICAgIGxvbmdpdHVkZTogc3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkLFxuICAgIHRyYXZlbE1vZGU6ICd3YWxraW5nJyB8ICdkcml2aW5nJyB8ICdiaWN5Y2xpbmcnIHwgJ3RyYW5zaXQnID0gJ3dhbGtpbmcnXG4gICk6IHZvaWQge1xuICAgIGNvbnN0IGxhdCA9IHR5cGVvZiBsYXRpdHVkZSA9PT0gJ3N0cmluZycgPyBwYXJzZUZsb2F0KGxhdGl0dWRlKSA6IGxhdGl0dWRlXG4gICAgY29uc3QgbG5nID1cbiAgICAgIHR5cGVvZiBsb25naXR1ZGUgPT09ICdzdHJpbmcnID8gcGFyc2VGbG9hdChsb25naXR1ZGUpIDogbG9uZ2l0dWRlXG5cbiAgICBpZiAoXG4gICAgICB0eXBlb2YgbGF0ID09PSAnbnVtYmVyJyAmJlxuICAgICAgdHlwZW9mIGxuZyA9PT0gJ251bWJlcicgJiZcbiAgICAgICFpc05hTihsYXQpICYmXG4gICAgICAhaXNOYU4obG5nKVxuICAgICkge1xuICAgICAgY29uc3QgdXJsID0gYGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9kaXIvP2FwaT0xJmRlc3RpbmF0aW9uPSR7bGF0fSwke2xuZ30mdHJhdmVsbW9kZT0ke3RyYXZlbE1vZGV9YFxuICAgICAgd2luZG93Lm9wZW4odXJsLCAnX2JsYW5rJylcbiAgICB9XG4gIH1cbiAgY2FsY3VsYXRlRGlzdGFuY2UoXG4gICAgZmlyc3RQb3NpdGlvbjogeyBsYXRpdHVkZTogbnVtYmVyOyBsb25naXR1ZGU6IG51bWJlciB9LFxuICAgIHNlY29uZFBvc2l0aW9uOiB7IGxhdGl0dWRlOiBudW1iZXI7IGxvbmdpdHVkZTogbnVtYmVyIH1cbiAgKTogbnVtYmVyIHtcbiAgICBjb25zdCBSID0gNjM3MTAwMCAvLyBFYXJ0aCdzIHJhZGl1cyBpbiBtZXRlcnNcbiAgICBjb25zdCBkTGF0ID0gdGhpcy5kZWcycmFkKHNlY29uZFBvc2l0aW9uLmxhdGl0dWRlIC0gZmlyc3RQb3NpdGlvbi5sYXRpdHVkZSlcbiAgICBjb25zdCBkTG9uID0gdGhpcy5kZWcycmFkKFxuICAgICAgc2Vjb25kUG9zaXRpb24ubG9uZ2l0dWRlIC0gZmlyc3RQb3NpdGlvbi5sb25naXR1ZGVcbiAgICApXG4gICAgY29uc3QgYSA9XG4gICAgICBNYXRoLnNpbihkTGF0IC8gMikgKiBNYXRoLnNpbihkTGF0IC8gMikgK1xuICAgICAgTWF0aC5jb3ModGhpcy5kZWcycmFkKGZpcnN0UG9zaXRpb24ubGF0aXR1ZGUpKSAqXG4gICAgICAgIE1hdGguY29zKHRoaXMuZGVnMnJhZChzZWNvbmRQb3NpdGlvbi5sYXRpdHVkZSkpICpcbiAgICAgICAgTWF0aC5zaW4oZExvbiAvIDIpICpcbiAgICAgICAgTWF0aC5zaW4oZExvbiAvIDIpXG4gICAgY29uc3QgYyA9IDIgKiBNYXRoLmF0YW4yKE1hdGguc3FydChhKSwgTWF0aC5zcXJ0KDEgLSBhKSlcbiAgICByZXR1cm4gTWF0aC5yb3VuZChSICogYylcbiAgfVxuXG4gIC8vIE4nb3VibGlleiBwYXMgZGUgbmV0dG95ZXIgbGUgbGlzdGVuZXIgcXVhbmQgbGUgc2VydmljZSBlc3QgZMOpdHJ1aXRcbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMucmVzdW1lTGlzdGVuZXIpIHtcbiAgICAgIHRoaXMucmVzdW1lTGlzdGVuZXIucmVtb3ZlKClcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcydcbmltcG9ydCB7XG4gIExpc3RWZWhpY3VsZTIwMFJlc3BvbnNlQWxsT2ZEYXRhSW5uZXIsXG4gIFN0YXRpb25zU2VydmljZSxcbiAgTGlzdFN0YXRpb24yMDBSZXNwb25zZUFsbE9mRGF0YUlubmVyLFxufSBmcm9tICdzcmMvYXBpLWN5Y2xpc3QnXG5pbXBvcnQgeyBHZW9sb2NhdGlvblNlcnZpY2UgfSBmcm9tICcuLi91dGlscy9nZW9sb2NhdGlvbi5zZXJ2aWNlJ1xuaW1wb3J0IHsgU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuLi91dGlscy9zdG9yYWdlLnNlcnZpY2UnXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJ3NyYy9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnXG5cbmV4cG9ydCB0eXBlIFN0YXRpb25TdGF0ZSA9XG4gIHwgeyBzdGF0ZTogJ25vLXN0YXRpb24nIH1cbiAgfCB7XG4gICAgICBzdGF0ZTogJ2Zhdm9yaXRlcy1zdGF0aW9ucydcbiAgICB9XG4gIHwgeyBzdGF0ZTogJ3N0YXRpb24tc2VsZWN0ZWQnOyBzdGF0aW9uOiBMaXN0U3RhdGlvbjIwMFJlc3BvbnNlQWxsT2ZEYXRhSW5uZXIgfVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgU3RhdGlvbldyYXBwZXJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBzdGF0aW9uU3RhdGUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFN0YXRpb25TdGF0ZT4oe1xuICAgIHN0YXRlOiAnbm8tc3RhdGlvbicsXG4gIH0pXG4gIHN0YXRpb25TdGF0ZSQgPSB0aGlzLnN0YXRpb25TdGF0ZS5hc09ic2VydmFibGUoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZ2VvbG9jYXRpb25TZXJ2aWNlOiBHZW9sb2NhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzdG9yYWdlOiBTdG9yYWdlU2VydmljZSxcbiAgICBwcml2YXRlIHN0YXRpb25zU2VydmljZTogU3RhdGlvbnNTZXJ2aWNlXG4gICkge31cblxuICBzZXRTdGF0aW9uU3RhdGUoXG4gICAgc3RhdGU6ICduby1zdGF0aW9uJyB8ICdzdGF0aW9uLXNlbGVjdGVkJyB8ICdmYXZvcml0ZXMtc3RhdGlvbnMnLFxuICAgIHN0YXRpb24/OiBMaXN0U3RhdGlvbjIwMFJlc3BvbnNlQWxsT2ZEYXRhSW5uZXJcbiAgKSB7XG4gICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgY2FzZSAnZmF2b3JpdGVzLXN0YXRpb25zJzpcbiAgICAgICAgdGhpcy5zdGF0aW9uU3RhdGUubmV4dCh7IHN0YXRlOiAnZmF2b3JpdGVzLXN0YXRpb25zJyB9KVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnbm8tc3RhdGlvbic6XG4gICAgICAgIHRoaXMuc3RhdGlvblN0YXRlLm5leHQoeyBzdGF0ZTogJ25vLXN0YXRpb24nIH0pXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdzdGF0aW9uLXNlbGVjdGVkJzpcbiAgICAgICAgaWYgKHN0YXRpb24pIHtcbiAgICAgICAgICB0aGlzLnN0YXRpb25TdGF0ZS5uZXh0KHtcbiAgICAgICAgICAgIHN0YXRlOiAnc3RhdGlvbi1zZWxlY3RlZCcsXG4gICAgICAgICAgICBzdGF0aW9uOiBzdGF0aW9uLFxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zdGF0aW9uU3RhdGUubmV4dCh7IHN0YXRlOiAnbm8tc3RhdGlvbicgfSlcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGdldFN0YXRlKCk6IFN0YXRpb25TdGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGlvblN0YXRlLmdldFZhbHVlKClcbiAgfVxuXG4gIGFzeW5jIGdldE5lYXJieVN0YXRpb25zKFxuICAgIHBvc2l0aW9uOiB7IGxhdGl0dWRlOiBudW1iZXI7IGxvbmdpdHVkZTogbnVtYmVyIH0sXG4gICAgcmFkaXVzOiBudW1iZXIsXG4gICAgZXhwYW5kVmVoaWNsZXM/OiBib29sZWFuXG4gICkge1xuICAgIC8vIEdldCBzdGF0aW9ucyBiYXNlZCBvbiBleHBhbmRWZWhpY2xlcyBmbGFnXG4gICAgbGV0IHN0YXRpb25zOiBMaXN0U3RhdGlvbjIwMFJlc3BvbnNlQWxsT2ZEYXRhSW5uZXJbXVxuICAgIGlmIChleHBhbmRWZWhpY2xlcykge1xuICAgICAgc3RhdGlvbnMgPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICB0aGlzLnN0YXRpb25zU2VydmljZVxuICAgICAgICAgIC5saXN0U3RhdGlvbih7XG4gICAgICAgICAgICBwcm9ncmFtOiBlbnZpcm9ubWVudC5wcm9ncmFtLFxuICAgICAgICAgICAgZXhwYW5kOiBbJ3ZlaGljdWxlcyddLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHJlc29sdmUocmVzcG9uc2UuZGF0YSkpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0aW9ucyA9IChhd2FpdCB0aGlzLnN0b3JhZ2UuZ2V0KCdzdGF0aW9ucycpKS5kYXRhXG4gICAgfVxuXG4gICAgLy8gRmlsdGVyIHN0YXRpb25zIGJhc2VkIG9uIGRpc3RhbmNlXG4gICAgcmV0dXJuIHN0YXRpb25zLmZpbHRlcigoc3RhdGlvbikgPT4ge1xuICAgICAgaWYgKCFzdGF0aW9uLnBvc2l0aW9uKSByZXR1cm4gZmFsc2VcbiAgICAgIGNvbnN0IGRpc3RhbmNlID0gdGhpcy5nZW9sb2NhdGlvblNlcnZpY2UuY2FsY3VsYXRlRGlzdGFuY2UocG9zaXRpb24sIHtcbiAgICAgICAgbGF0aXR1ZGU6IE51bWJlcihzdGF0aW9uLnBvc2l0aW9uLmxhdGl0dWRlKSxcbiAgICAgICAgbG9uZ2l0dWRlOiBOdW1iZXIoc3RhdGlvbi5wb3NpdGlvbi5sb25naXR1ZGUpLFxuICAgICAgfSlcbiAgICAgIHJldHVybiBkaXN0YW5jZSA8PSByYWRpdXNcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgcmVmcmVzaFN0YXRpb25zKGZvcmNlUmVmcmVzaDogYm9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KGFzeW5jIChyZXNvbHZlKSA9PiB7XG4gICAgICBjb25zdCBzdGF0aW9ucyA9IGF3YWl0IHRoaXMuc3RvcmFnZS5nZXQoJ3N0YXRpb25zJylcblxuICAgICAgLy8gU2kgbGVzIHN0YXRpb25zIHNvbnQgZW4gY2FjaGUgZXQgw6Agam91ciwgb24gcsOpc291dCBpbW3DqWRpYXRlbWVudFxuICAgICAgaWYgKFxuICAgICAgICBzdGF0aW9ucyAmJlxuICAgICAgICBzdGF0aW9ucy5sYXN0VXBkYXRlICYmXG4gICAgICAgIERhdGUubm93KCkgLSBzdGF0aW9ucy5sYXN0VXBkYXRlIDwgMTAwMCAqIDMwICYmXG4gICAgICAgICFmb3JjZVJlZnJlc2hcbiAgICAgICkge1xuICAgICAgICByZXNvbHZlKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIEZvbmN0aW9uIHLDqWN1cnNpdmUgcG91ciBjaGFyZ2VyIHRvdXRlcyBsZXMgcGFnZXNcbiAgICAgIGNvbnN0IGxvYWRBbGxTdGF0aW9ucyA9IChcbiAgICAgICAgbGFzdElkOiBzdHJpbmcgfCBudWxsID0gbnVsbCxcbiAgICAgICAgYWxsU3RhdGlvbnM6IGFueVtdID0gW11cbiAgICAgICk6IHZvaWQgPT4ge1xuICAgICAgICBjb25zdCBwYXJhbXM6IGFueSA9IHtcbiAgICAgICAgICBsaXZlTW9kZTogZW52aXJvbm1lbnQucHJvZHVjdGlvbixcbiAgICAgICAgICBwcm9ncmFtOiBlbnZpcm9ubWVudC5wcm9ncmFtLFxuICAgICAgICAgIGxpbWl0OiAxMDAsXG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGFzdElkKSB7XG4gICAgICAgICAgcGFyYW1zLnN0YXJ0aW5nQWZ0ZXIgPSBsYXN0SWRcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3RhdGlvbnNTZXJ2aWNlLmxpc3RTdGF0aW9uKHBhcmFtcykuc3Vic2NyaWJlKHtcbiAgICAgICAgICBuZXh0OiBhc3luYyAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbWJpbmVkU3RhdGlvbnMgPSBbLi4uYWxsU3RhdGlvbnMsIC4uLnJlc3BvbnNlLmRhdGFdXG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5oYXNfbW9yZSAmJiByZXNwb25zZS5kYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgY29uc3QgbGFzdFN0YXRpb24gPSByZXNwb25zZS5kYXRhW3Jlc3BvbnNlLmRhdGEubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgICAgbG9hZEFsbFN0YXRpb25zKGxhc3RTdGF0aW9uLmlkLCBjb21iaW5lZFN0YXRpb25zKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zdG9yYWdlLnNldCgnc3RhdGlvbnMnLCB7XG4gICAgICAgICAgICAgICAgZGF0YTogY29tYmluZWRTdGF0aW9ucyxcbiAgICAgICAgICAgICAgICBsYXN0VXBkYXRlOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICByZXNvbHZlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGVycm9yOiBhc3luYyAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgc3RhdGlvbnM6JywgZXJyb3IpXG4gICAgICAgICAgICBpZiAoYWxsU3RhdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICBhd2FpdCB0aGlzLnN0b3JhZ2Uuc2V0KCdzdGF0aW9ucycsIHtcbiAgICAgICAgICAgICAgICBkYXRhOiBhbGxTdGF0aW9ucyxcbiAgICAgICAgICAgICAgICBsYXN0VXBkYXRlOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzb2x2ZSgpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgLy8gRMOpbWFycmVyIGxlIGNoYXJnZW1lbnQgZGVzIHN0YXRpb25zXG4gICAgICBsb2FkQWxsU3RhdGlvbnMoKVxuICAgIH0pXG4gIH1cblxuICBnZXRCZXN0VmVoaWNsZXMoXG4gICAgdmVoaWNsZXM6IExpc3RWZWhpY3VsZTIwMFJlc3BvbnNlQWxsT2ZEYXRhSW5uZXJbXSxcbiAgICBhbW91bnQ6IG51bWJlclxuICApOiBMaXN0VmVoaWN1bGUyMDBSZXNwb25zZUFsbE9mRGF0YUlubmVyW10ge1xuICAgIGlmICghdmVoaWNsZXM/Lmxlbmd0aCB8fCBhbW91bnQgPD0gMCkge1xuICAgICAgcmV0dXJuIFtdXG4gICAgfVxuXG4gICAgcmV0dXJuIHZlaGljbGVzXG4gICAgICAuZmlsdGVyKCh2ZWhpY2xlKSA9PiB2ZWhpY2xlPy5iYXR0ZXJ5X3ZhZT8ucGVyY2VudCAhPSBudWxsKVxuICAgICAgLnNvcnQoKHZlaGljbGVBLCB2ZWhpY2xlQikgPT4ge1xuICAgICAgICBjb25zdCBiYXR0ZXJ5QSA9IHZlaGljbGVBLmJhdHRlcnlfdmFlPy5wZXJjZW50ID8/IDBcbiAgICAgICAgY29uc3QgYmF0dGVyeUIgPSB2ZWhpY2xlQi5iYXR0ZXJ5X3ZhZT8ucGVyY2VudCA/PyAwXG4gICAgICAgIHJldHVybiBiYXR0ZXJ5QiAtIGJhdHRlcnlBXG4gICAgICB9KVxuICAgICAgLnNsaWNlKDAsIGFtb3VudClcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
