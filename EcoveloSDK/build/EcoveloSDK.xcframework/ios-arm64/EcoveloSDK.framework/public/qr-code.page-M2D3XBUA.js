import {
  FillButtonComponent
} from "./chunk-IKA4NCYV.js";
import {
  FormatPinPipe
} from "./chunk-LKSCFV7E.js";
import {
  RentingService
} from "./chunk-5RMBP5UX.js";
import "./chunk-5KXLLE34.js";
import "./chunk-S5TR5TQN.js";
import "./chunk-OEYRANOA.js";
import "./chunk-RFEPADPA.js";
import "./chunk-WJQU3GMM.js";
import "./chunk-CHFOG66O.js";
import "./chunk-RAVV2QIY.js";
import "./chunk-T6WE2PS5.js";
import {
  VehiculesService
} from "./chunk-XK4I5MHM.js";
import "./chunk-GVYZRG6X.js";
import {
  environment
} from "./chunk-FOJAXRYS.js";
import "./chunk-Y7HI6USV.js";
import "./chunk-SARQRLZR.js";
import {
  addIcons,
  ban,
  batteryDead,
  batteryFull,
  batteryHalf
} from "./chunk-3E6DEK7U.js";
import "./chunk-U6SJAXLK.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonRow,
  IonSkeletonText,
  IonSpinner,
  Router,
  RouterLink,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  firstValueFrom,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
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

// src/app/pages/renting/qr-code/qr-code.page.ts
var _c0 = (a0, a1) => ({ percent: a0, km: a1 });
var _c1 = () => ["/map"];
function QrCodePage_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-spinner", 4);
  }
}
function QrCodePage_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-row")(1, "ion-col", 6)(2, "div", 7);
    \u0275\u0275element(3, "ion-skeleton-text", 8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "ion-row", 9)(5, "ion-col", 6);
    \u0275\u0275element(6, "ion-skeleton-text", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "ion-row")(8, "ion-col", 6);
    \u0275\u0275element(9, "ion-skeleton-text", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "ion-row")(11, "ion-col", 12);
    \u0275\u0275element(12, "ion-skeleton-text", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "ion-row")(14, "ion-col", 6);
    \u0275\u0275element(15, "ion-skeleton-text", 14);
    \u0275\u0275elementEnd()();
  }
}
function QrCodePage_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-row")(1, "ion-col", 6);
    \u0275\u0275element(2, "ion-icon", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "ion-row", 9)(4, "ion-col", 6)(5, "h4", 16);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "ion-row")(9, "ion-col", 12)(10, "app-fill-button", 17);
    \u0275\u0275listener("buttonClick", function QrCodePage_Case_6_Template_app_fill_button_buttonClick_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmUnlock());
    });
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "ion-row")(14, "ion-col", 6)(15, "ion-button", 18);
    \u0275\u0275listener("click", function QrCodePage_Case_6_Template_ion_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resetState());
    });
    \u0275\u0275elementStart(16, "u");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("name", ctx_r1.pageState.vehicle.battery_vae.percent > 30 ? "battery-half" : "battery-dead");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 6, "vehicle.battery_remaining", \u0275\u0275pureFunction2(13, _c0, ctx_r1.pageState.vehicle.battery_vae.percent || 0, ctx_r1.pageState.vehicle.battery_vae.remaining_distance / 1e3 || 0)), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("animationDuration", 5e3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 9, "vehicle.continue"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(16, _c1));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 11, "generic.cancel"));
  }
}
function QrCodePage_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "ion-icon", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "h2", 5);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 21);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ion-row")(9, "ion-col", 12)(10, "ion-button", 22);
    \u0275\u0275listener("click", function QrCodePage_Case_7_Template_ion_button_click_10_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resetState());
    });
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "qr_code.not_rentable.title"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 6, "qr_code.not_rentable.general"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(10, _c1));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 8, "qr_code.not_rentable.back_to_map"), " ");
  }
}
function QrCodePage_Case_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 5);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 23);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "formatPin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "app-fill-button", 24);
    \u0275\u0275listener("buttonClick", function QrCodePage_Case_8_Template_app_fill_button_buttonClick_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.resetState();
      return \u0275\u0275resetView(ctx_r1.router.navigate(["/map"]));
    });
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 5, "qr_code.resume.pitstop_code_title"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 7, "qr_code.resume.pitstop_code_message"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 9, (ctx_r1.pageState.trip == null ? null : ctx_r1.pageState.trip.pin) || "******"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("animationDuration", 6e3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 11, "vehicle.continue"), " ");
  }
}
function QrCodePage_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "auto_unlock.unlocking_title"), " ");
  }
}
function QrCodePage_Case_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 5);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 5);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, "auto_unlock.success"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 5, "auto_unlock.success_message"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 7, "auto_unlock.start_ride"), " ");
  }
}
function QrCodePage_Case_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "ion-icon", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "h2", 5);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 21);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "auto_unlock.error_title"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.pageState.error);
  }
}
var _QrCodePage = class _QrCodePage {
  constructor(route, router, vehiclesService, rentingService, translate) {
    this.route = route;
    this.router = router;
    this.vehiclesService = vehiclesService;
    this.rentingService = rentingService;
    this.translate = translate;
    this.vehicleID = null;
    this.pageState = { state: "loading_program" };
    addIcons({
      ban,
      batteryFull,
      batteryHalf,
      batteryDead
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.route.queryParams.subscribe((params) => __async(this, null, function* () {
        this.vehicleID = params["qrcode"];
        if (!this.vehicleID) {
          this.onError(this.translate.instant("qr_code.error.missing_vehicle_id"));
          return;
        }
        yield this.loadVehicleDetails();
      }));
    });
  }
  ngOnDestroy() {
    this.resetState();
  }
  loadVehicleDetails() {
    return __async(this, null, function* () {
      var _a;
      this.pageState = { state: "loading_vehicle" };
      if (!this.vehicleID) {
        throw new Error("No vehicleID available");
      }
      try {
        const vehicle = yield firstValueFrom(this.vehiclesService.retrieveVehicule({
          program: environment.program,
          id: this.vehicleID,
          liveMode: environment.production
        }));
        if (!vehicle || !vehicle.id) {
          throw new Error("Vehicle data incomplete");
        }
        const pitstopTrip = yield this.rentingService.findTripForVehicle(vehicle);
        if (pitstopTrip == null ? void 0 : pitstopTrip.id) {
          this.clearAutoUnlockTimer();
          this.pageState = { state: "resume", trip: pitstopTrip };
          setTimeout(() => {
            this.resetState();
            this.router.navigate(["/map"], { replaceUrl: true });
          }, 6e3);
          return;
        }
        if (!vehicle.rentable) {
          this.pageState = {
            state: "vehicle_not_rentable",
            vehicle
          };
          return;
        }
        const batteryPercent = (_a = vehicle.battery_vae) == null ? void 0 : _a.percent;
        if (batteryPercent && batteryPercent > 40) {
          yield this.startRenting(vehicle);
        } else {
          this.pageState = { state: "vehicle_loaded", vehicle };
          this.startAutoUnlockTimer();
        }
      } catch (error) {
        this.onError(this.translate.instant("qr_code.error." + error.error.error) || `Impossible de trouver le v\xE9hicule n\xB0 ${this.vehicleID}`);
      }
    });
  }
  confirmUnlock() {
    return __async(this, null, function* () {
      if (this.pageState.state !== "vehicle_loaded" || !this.pageState.vehicle)
        return;
      this.clearAutoUnlockTimer();
      yield this.startRenting(this.pageState.vehicle);
    });
  }
  resetState() {
    this.clearAutoUnlockTimer();
    this.pageState = { state: "loading_program" };
  }
  startRenting(vehicle) {
    return __async(this, null, function* () {
      var _a, _b, _c, _d;
      try {
        this.pageState = { state: "unlocking", vehicle };
        const trip = yield this.rentingService.startRenting(
          vehicle,
          false,
          // checkLocation
          vehicle.boitier_model === "bill" ? true : false,
          // autoUnlock
          false,
          // showLoader
          vehicle.boitier_model === "bill" ? true : false
          // skipRedirect
        );
        vehicle.boitier_model === "bill" && this.onSuccess(trip);
      } catch (error) {
        console.error("\u274C Error during unlock:", error);
        const errorMessage = ((_c = (_b = (_a = error.error) == null ? void 0 : _a.message) == null ? void 0 : _b.split("|")[1]) == null ? void 0 : _c.trim()) || ((_d = error.error) == null ? void 0 : _d.message) || `Impossible de d\xE9verrouiller le v\xE9lo ${(vehicle == null ? void 0 : vehicle.number) || ""}`;
        this.onError(errorMessage);
      }
    });
  }
  startAutoUnlockTimer() {
    this.clearAutoUnlockTimer();
    this.autoUnlockTimer = window.setTimeout(() => __async(this, null, function* () {
      if (this.pageState.state === "vehicle_loaded" && this.pageState.vehicle) {
        yield this.startRenting(this.pageState.vehicle);
      }
    }), 5e3);
  }
  clearAutoUnlockTimer() {
    if (this.autoUnlockTimer) {
      clearTimeout(this.autoUnlockTimer);
      this.autoUnlockTimer = void 0;
    }
  }
  onError(error) {
    this.pageState = { state: "error", error };
    setTimeout(() => {
      this.resetState();
      this.router.navigate(["/map"], { replaceUrl: true });
    }, 5e3);
  }
  onSuccess(trip) {
    this.pageState = { state: "success", trip };
    setTimeout(() => {
      this.resetState();
      this.router.navigate(["/map"], { replaceUrl: true });
    }, 6e3);
  }
};
_QrCodePage.\u0275fac = function QrCodePage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _QrCodePage)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(VehiculesService), \u0275\u0275directiveInject(RentingService), \u0275\u0275directiveInject(TranslateService));
};
_QrCodePage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QrCodePage, selectors: [["app-qr-code"]], decls: 12, vars: 3, consts: [[1, "ion-text-center", "ion-align-items-center", "ion-justify-content-center", 2, "--padding-top", "0", "--padding-bottom", "0", 3, "fullscreen", "color"], [1, "ion-no-padding", 2, "height", "100vh"], [1, "ion-align-items-center", "ion-justify-content-center", 2, "height", "100%"], ["size", "8", "size-md", "8", "size-lg", "6", 1, "ion-text-center"], ["color", "primary"], [1, "ion-color-light"], ["size", "12", 1, "ion-text-center"], [2, "display", "flex", "justify-content", "center", "margin-bottom", "1rem"], ["animated", "", 2, "width", "96px", "height", "96px", "border-radius", "50%"], [2, "margin-top", "-1rem"], ["animated", "", 2, "width", "80%", "height", "24px", "margin", "0 auto 1rem auto"], ["animated", "", 2, "width", "60%", "height", "20px", "margin", "0 auto 1rem auto"], ["size", "12", 1, "ion-text-center", "ion-margin-top"], ["animated", "", 2, "width", "100%", "height", "44px", "border-radius", "22px", "margin-bottom", "1rem"], ["animated", "", 2, "width", "30%", "height", "16px", "margin", "0 auto"], ["color", "light", 2, "font-size", "6rem", 3, "name"], [1, "ion-color-light", "battery-message"], ["color", "light", "fill", "outline", 3, "buttonClick", "animationDuration"], ["fill", "clear", "color", "light", 3, "click", "routerLink"], [1, "ion-margin-bottom"], ["name", "ban", "color", "light", 2, "font-size", "8rem"], [1, "ion-color-light", "ion-margin-top"], ["fill", "solid", "color", "light", 3, "click", "routerLink"], [1, "code"], [3, "buttonClick", "animationDuration"]], template: function QrCodePage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content", 0)(1, "ion-grid", 1)(2, "ion-row", 2)(3, "ion-col", 3);
    \u0275\u0275template(4, QrCodePage_Case_4_Template, 1, 0, "ion-spinner", 4)(5, QrCodePage_Case_5_Template, 16, 0)(6, QrCodePage_Case_6_Template, 19, 17)(7, QrCodePage_Case_7_Template, 13, 11)(8, QrCodePage_Case_8_Template, 12, 13)(9, QrCodePage_Case_9_Template, 3, 3, "h2", 5)(10, QrCodePage_Case_10_Template, 9, 9)(11, QrCodePage_Case_11_Template, 7, 4);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    \u0275\u0275property("fullscreen", true)("color", ctx.pageState.state === "error" ? "danger" : ctx.pageState.state === "loading_program" ? "light" : "primary");
    \u0275\u0275advance(4);
    \u0275\u0275conditional((tmp_2_0 = ctx.pageState.state) === "loading_program" ? 4 : tmp_2_0 === "loading_vehicle" ? 5 : tmp_2_0 === "vehicle_loaded" ? 6 : tmp_2_0 === "vehicle_not_rentable" ? 7 : tmp_2_0 === "resume" ? 8 : tmp_2_0 === "unlocking" ? 9 : tmp_2_0 === "success" ? 10 : tmp_2_0 === "error" ? 11 : -1);
  }
}, dependencies: [
  IonContent,
  IonSpinner,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonSkeletonText,
  CommonModule,
  TranslateModule,
  TranslatePipe,
  FillButtonComponent,
  RouterLink,
  FormatPinPipe
], styles: ["\n\nion-checkbox[_ngcontent-%COMP%]::part(container) {\n  border-radius: 6px;\n}\n.code[_ngcontent-%COMP%] {\n  border: 1px solid #fff;\n  padding: 1rem;\n  font-size: 2rem;\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=qr-code.page.css.map */"] });
var QrCodePage = _QrCodePage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QrCodePage, [{
    type: Component,
    args: [{ selector: "app-qr-code", standalone: true, imports: [
      IonContent,
      IonSpinner,
      IonButton,
      IonIcon,
      IonGrid,
      IonRow,
      IonCol,
      IonSkeletonText,
      CommonModule,
      TranslateModule,
      FillButtonComponent,
      RouterLink,
      FormatPinPipe
    ], template: `<ion-content
  [fullscreen]="true"
  [color]="pageState.state === 'error' ? 'danger' : pageState.state === 'loading_program' ? 'light' : 'primary'"
  class="ion-text-center ion-align-items-center ion-justify-content-center"
  style="--padding-top: 0; --padding-bottom: 0"
>
  <ion-grid class="ion-no-padding" style="height: 100vh">
    <ion-row
      class="ion-align-items-center ion-justify-content-center"
      style="height: 100%"
    >
      <ion-col class="ion-text-center" size="8" size-md="8" size-lg="6">
        @switch (pageState.state) { @case ('loading_program') {
        <!-- Universal Link: Chargement program + colors (fond blanc) -->
        <ion-spinner color="primary"></ion-spinner>
        } @case ('loading_vehicle') {
        <ion-row>
          <ion-col size="12" class="ion-text-center">
            <div
              style="
                display: flex;
                justify-content: center;
                margin-bottom: 1rem;
              "
            >
              <ion-skeleton-text
                animated
                style="width: 96px; height: 96px; border-radius: 50%"
              ></ion-skeleton-text>
            </div>
          </ion-col>
        </ion-row>

        <!-- Row 2: Skeleton message batterie -->
        <ion-row style="margin-top: -1rem">
          <ion-col size="12" class="ion-text-center">
            <ion-skeleton-text
              animated
              style="width: 80%; height: 24px; margin: 0 auto 1rem auto"
            ></ion-skeleton-text>
          </ion-col>
        </ion-row>

        <!-- Row 3: Skeleton question suffisant -->
        <ion-row>
          <ion-col size="12" class="ion-text-center">
            <ion-skeleton-text
              animated
              style="width: 60%; height: 20px; margin: 0 auto 1rem auto"
            ></ion-skeleton-text>
          </ion-col>
        </ion-row>

        <!-- Row 4: Skeleton bouton -->
        <ion-row>
          <ion-col size="12" class="ion-text-center ion-margin-top">
            <ion-skeleton-text
              animated
              style="
                width: 100%;
                height: 44px;
                border-radius: 22px;
                margin-bottom: 1rem;
              "
            ></ion-skeleton-text>
          </ion-col>
        </ion-row>

        <!-- Row 5: Skeleton lien annuler -->
        <ion-row>
          <ion-col size="12" class="ion-text-center">
            <ion-skeleton-text
              animated
              style="width: 30%; height: 16px; margin: 0 auto"
            ></ion-skeleton-text>
          </ion-col>
        </ion-row>

        } @case ('vehicle_loaded') {
        <!-- Nouvelle interface avec 6 rows -->
        <!-- Row 1: Ic\xF4ne batterie -->
        <ion-row>
          <ion-col size="12" class="ion-text-center">
            <ion-icon
              [name]="pageState.vehicle.battery_vae.percent > 30 ? 'battery-half' : 'battery-dead'"
              color="light"
              style="font-size: 6rem"
            ></ion-icon>
          </ion-col>
        </ion-row>
        <!-- Row 2: Message batterie -->
        <ion-row style="margin-top: -1rem">
          <ion-col size="12" class="ion-text-center">
            <h4 class="ion-color-light battery-message">
              {{ 'vehicle.battery_remaining' | translate:{ percent:
              pageState.vehicle.battery_vae.percent || 0, km:
              pageState.vehicle.battery_vae.remaining_distance / 1000 || 0 } }}
            </h4>
          </ion-col>
        </ion-row>
        <!-- Row 3: Bouton avec timer -->
        <ion-row>
          <ion-col size="12" class="ion-text-center ion-margin-top">
            <app-fill-button
              color="light"
              fill="outline"
              [animationDuration]="5000"
              (buttonClick)="confirmUnlock()"
            >
              {{ 'vehicle.continue' | translate }}
            </app-fill-button>
          </ion-col>
        </ion-row>

        <!-- Row 4: Lien annuler -->
        <ion-row>
          <ion-col size="12" class="ion-text-center">
            <ion-button
              fill="clear"
              color="light"
              (click)="resetState()"
              [routerLink]="['/map']"
            >
              <u>{{ 'generic.cancel' | translate }}</u>
            </ion-button>
          </ion-col>
        </ion-row>
        } @case ('vehicle_not_rentable') {
        <!-- \xC9tat v\xE9hicule non louable -->
        <div class="ion-margin-bottom">
          <ion-icon name="ban" color="light" style="font-size: 8rem"></ion-icon>
        </div>
        <h2 class="ion-color-light">
          {{ 'qr_code.not_rentable.title' | translate }}
        </h2>
        <p class="ion-color-light ion-margin-top">
          {{ 'qr_code.not_rentable.general' | translate }}
        </p>

        <!-- Bouton retour \xE0 la carte -->
        <ion-row>
          <ion-col size="12" class="ion-text-center ion-margin-top">
            <ion-button
              fill="solid"
              color="light"
              (click)="resetState()"
              [routerLink]="['/map']"
            >
              {{ 'qr_code.not_rentable.back_to_map' | translate }}
            </ion-button>
          </ion-col>
        </ion-row>
        } @case ('resume') {
        <h2 class="ion-color-light">
          {{ 'qr_code.resume.pitstop_code_title' | translate }}
        </h2>
        <p class="ion-color-light">
          {{ 'qr_code.resume.pitstop_code_message' | translate }}
        </p>
        <div class="code">
          {{ pageState.trip?.pin || '******' | formatPin }}
        </div>
        <app-fill-button
          [animationDuration]="6000"
          (buttonClick)="resetState(); router.navigate(['/map'])"
        >
          {{ 'vehicle.continue' | translate }}
        </app-fill-button>
        } @case ('unlocking') {
        <!-- \xC9tat de d\xE9verrouillage en cours -->
        <h2 class="ion-color-light">
          {{ 'auto_unlock.unlocking_title' | translate }}
        </h2>
        } @case ('success') {
        <!-- \xC9tat de succ\xE8s -->
        <h2 class="ion-color-light">{{ 'auto_unlock.success' | translate }}</h2>
        <p class="ion-color-light">
          {{ 'auto_unlock.success_message' | translate }}
        </p>
        <p class="ion-color-light">
          {{ 'auto_unlock.start_ride' | translate }}
        </p>
        } @case ('error') {
        <!-- \xC9tat d'erreur -->
        <div class="ion-margin-bottom">
          <ion-icon name="ban" color="light" style="font-size: 8rem"></ion-icon>
        </div>
        <h2 class="ion-color-light">
          {{ 'auto_unlock.error_title' | translate }}
        </h2>
        <p class="ion-color-light ion-margin-top">{{ pageState.error }}</p>
        } }
      </ion-col>
    </ion-row>
  </ion-grid>
</ion-content>
`, styles: ["/* src/app/pages/renting/qr-code/qr-code.page.scss */\nion-checkbox::part(container) {\n  border-radius: 6px;\n}\n.code {\n  border: 1px solid #fff;\n  padding: 1rem;\n  font-size: 2rem;\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=qr-code.page.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: VehiculesService }, { type: RentingService }, { type: TranslateService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QrCodePage, { className: "QrCodePage", filePath: "src/app/pages/renting/qr-code/qr-code.page.ts", lineNumber: 62 });
})();
export {
  QrCodePage
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wYWdlcy9yZW50aW5nL3FyLWNvZGUvcXItY29kZS5wYWdlLnRzIiwgInNyYy9hcHAvcGFnZXMvcmVudGluZy9xci1jb2RlL3FyLWNvZGUucGFnZS5odG1sIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbidcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIsIFJvdXRlckxpbmsgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInXG5pbXBvcnQge1xuICBJb25Db250ZW50LFxuICBJb25TcGlubmVyLFxuICBJb25CdXR0b24sXG4gIElvbkljb24sXG4gIElvbkdyaWQsXG4gIElvblJvdyxcbiAgSW9uQ29sLFxuICBJb25Ta2VsZXRvblRleHQsXG59IGZyb20gJ0Bpb25pYy9hbmd1bGFyL3N0YW5kYWxvbmUnXG5pbXBvcnQgeyBGaWxsQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnc3JjL2FwcC9jb21wb25lbnRzL2ZpbGwtYnV0dG9uL2ZpbGwtYnV0dG9uLmNvbXBvbmVudCdcbmltcG9ydCB7IFZlaGljdWxlc1NlcnZpY2UgfSBmcm9tICdzcmMvYXBpLWN5Y2xpc3QnXG5pbXBvcnQge1xuICBMaXN0VmVoaWN1bGUyMDBSZXNwb25zZUFsbE9mRGF0YUlubmVyLFxuICBMaXN0VHJpcDIwMFJlc3BvbnNlQWxsT2ZEYXRhSW5uZXIsXG59IGZyb20gJ3NyYy9hcGktY3ljbGlzdCdcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnc3JjL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCdcbmltcG9ydCB7IGZpcnN0VmFsdWVGcm9tIH0gZnJvbSAncnhqcydcbmltcG9ydCB7IFJlbnRpbmdTZXJ2aWNlIH0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy9hcGktd3JhcHBlcnMvcmVudGluZy5zZXJ2aWNlJ1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlLCBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSdcbmltcG9ydCB7IGJhbiwgYmF0dGVyeUZ1bGwsIGJhdHRlcnlIYWxmLCBiYXR0ZXJ5RGVhZCB9IGZyb20gJ2lvbmljb25zL2ljb25zJ1xuaW1wb3J0IHsgYWRkSWNvbnMgfSBmcm9tICdpb25pY29ucydcbmltcG9ydCB7IEZvcm1hdFBpblBpcGUgfSBmcm9tICdzcmMvYXBwL3BpcGVzL2Zvcm1hdFBpbi5waXBlJ1xuXG5leHBvcnQgdHlwZSBRckNvZGVQYWdlU3RhdGUgPVxuICB8IHsgc3RhdGU6ICdsb2FkaW5nX3Byb2dyYW0nIH0gLy8gVW5pdmVyc2FsIGxpbms6IGxvYWRpbmcgcHJvZ3JhbSArIGNvbG9yc1xuICB8IHsgc3RhdGU6ICdsb2FkaW5nX3ZlaGljbGUnIH0gLy8gQXBwIG9wZW5lZDogbG9hZGluZyB2ZWhpY2xlIGRldGFpbHNcbiAgfCB7IHN0YXRlOiAndmVoaWNsZV9sb2FkZWQnOyB2ZWhpY2xlOiBMaXN0VmVoaWN1bGUyMDBSZXNwb25zZUFsbE9mRGF0YUlubmVyIH1cbiAgfCB7XG4gICAgICBzdGF0ZTogJ3ZlaGljbGVfbm90X3JlbnRhYmxlJ1xuICAgICAgdmVoaWNsZTogTGlzdFZlaGljdWxlMjAwUmVzcG9uc2VBbGxPZkRhdGFJbm5lclxuICAgIH1cbiAgfCB7IHN0YXRlOiAndW5sb2NraW5nJzsgdmVoaWNsZTogTGlzdFZlaGljdWxlMjAwUmVzcG9uc2VBbGxPZkRhdGFJbm5lciB9XG4gIHwgeyBzdGF0ZTogJ3Jlc3VtZSc7IHRyaXA6IExpc3RUcmlwMjAwUmVzcG9uc2VBbGxPZkRhdGFJbm5lciB9XG4gIHwgeyBzdGF0ZTogJ3N1Y2Nlc3MnOyB0cmlwOiBMaXN0VHJpcDIwMFJlc3BvbnNlQWxsT2ZEYXRhSW5uZXIgfVxuICB8IHsgc3RhdGU6ICdlcnJvcic7IGVycm9yOiBzdHJpbmcgfVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcXItY29kZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9xci1jb2RlLnBhZ2UuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3FyLWNvZGUucGFnZS5zY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBJb25Db250ZW50LFxuICAgIElvblNwaW5uZXIsXG4gICAgSW9uQnV0dG9uLFxuICAgIElvbkljb24sXG4gICAgSW9uR3JpZCxcbiAgICBJb25Sb3csXG4gICAgSW9uQ29sLFxuICAgIElvblNrZWxldG9uVGV4dCxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICAgIEZpbGxCdXR0b25Db21wb25lbnQsXG4gICAgUm91dGVyTGluayxcbiAgICBGb3JtYXRQaW5QaXBlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBRckNvZGVQYWdlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHZlaGljbGVJRDogc3RyaW5nIHwgbnVsbCA9IG51bGxcbiAgcGFnZVN0YXRlOiBRckNvZGVQYWdlU3RhdGUgPSB7IHN0YXRlOiAnbG9hZGluZ19wcm9ncmFtJyB9XG4gIHByaXZhdGUgYXV0b1VubG9ja1RpbWVyPzogbnVtYmVyXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHVibGljIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgdmVoaWNsZXNTZXJ2aWNlOiBWZWhpY3VsZXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVudGluZ1NlcnZpY2U6IFJlbnRpbmdTZXJ2aWNlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlXG4gICkge1xuICAgIGFkZEljb25zKHtcbiAgICAgIGJhbixcbiAgICAgIGJhdHRlcnlGdWxsLFxuICAgICAgYmF0dGVyeUhhbGYsXG4gICAgICBiYXR0ZXJ5RGVhZCxcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgbmdPbkluaXQoKSB7XG4gICAgLy8gR2V0IHFyY29kZSBmcm9tIHF1ZXJ5IHBhcmFtcyBmaXJzdFxuICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKGFzeW5jIChwYXJhbXMpID0+IHtcbiAgICAgIHRoaXMudmVoaWNsZUlEID0gcGFyYW1zWydxcmNvZGUnXVxuICAgICAgaWYgKCF0aGlzLnZlaGljbGVJRCkge1xuICAgICAgICB0aGlzLm9uRXJyb3IodGhpcy50cmFuc2xhdGUuaW5zdGFudCgncXJfY29kZS5lcnJvci5taXNzaW5nX3ZlaGljbGVfaWQnKSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBhd2FpdCB0aGlzLmxvYWRWZWhpY2xlRGV0YWlscygpXG4gICAgfSlcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMucmVzZXRTdGF0ZSgpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGxvYWRWZWhpY2xlRGV0YWlscygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLnBhZ2VTdGF0ZSA9IHsgc3RhdGU6ICdsb2FkaW5nX3ZlaGljbGUnIH1cbiAgICBpZiAoIXRoaXMudmVoaWNsZUlEKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHZlaGljbGVJRCBhdmFpbGFibGUnKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB2ZWhpY2xlID0gYXdhaXQgZmlyc3RWYWx1ZUZyb20oXG4gICAgICAgIHRoaXMudmVoaWNsZXNTZXJ2aWNlLnJldHJpZXZlVmVoaWN1bGUoe1xuICAgICAgICAgIHByb2dyYW06IGVudmlyb25tZW50LnByb2dyYW0sXG4gICAgICAgICAgaWQ6IHRoaXMudmVoaWNsZUlELFxuICAgICAgICAgIGxpdmVNb2RlOiBlbnZpcm9ubWVudC5wcm9kdWN0aW9uLFxuICAgICAgICB9KVxuICAgICAgKVxuXG4gICAgICAvLyBFbnN1cmUgdmVoaWNsZSBoYXMgbWluaW11bSByZXF1aXJlZCBkYXRhXG4gICAgICBpZiAoIXZlaGljbGUgfHwgIXZlaGljbGUuaWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdWZWhpY2xlIGRhdGEgaW5jb21wbGV0ZScpXG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoZSB1c2VyIGFscmVhZHkgaGFzIGEgcGl0c3RvcCB0cmlwIGZvciB0aGlzIHZlaGljbGUsIHJlc3VtZSBpdC5cbiAgICAgIC8vIFRoaXMgc2hvdWxkIHRha2UgcHJpb3JpdHkgb3ZlciBcInJlbnRhYmxlXCIgY2hlY2tzIGFuZCBiYXR0ZXJ5IGxvZ2ljLlxuICAgICAgY29uc3QgcGl0c3RvcFRyaXAgPSBhd2FpdCB0aGlzLnJlbnRpbmdTZXJ2aWNlLmZpbmRUcmlwRm9yVmVoaWNsZSh2ZWhpY2xlKVxuICAgICAgaWYgKHBpdHN0b3BUcmlwPy5pZCkge1xuICAgICAgICB0aGlzLmNsZWFyQXV0b1VubG9ja1RpbWVyKClcbiAgICAgICAgdGhpcy5wYWdlU3RhdGUgPSB7IHN0YXRlOiAncmVzdW1lJywgdHJpcDogcGl0c3RvcFRyaXAgfVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnJlc2V0U3RhdGUoKVxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL21hcCddLCB7IHJlcGxhY2VVcmw6IHRydWUgfSlcbiAgICAgICAgfSwgNjAwMClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIENoZWNrIGlmIHZlaGljbGUgaXMgcmVudGFibGVcbiAgICAgIGlmICghdmVoaWNsZS5yZW50YWJsZSkge1xuICAgICAgICB0aGlzLnBhZ2VTdGF0ZSA9IHtcbiAgICAgICAgICBzdGF0ZTogJ3ZlaGljbGVfbm90X3JlbnRhYmxlJyxcbiAgICAgICAgICB2ZWhpY2xlLFxuICAgICAgICB9XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBTaSBiYXR0ZXJpZSA+IDQwJSwgb24gZMOpdmVycm91aWxsZSBkaXJlY3RlbWVudFxuICAgICAgY29uc3QgYmF0dGVyeVBlcmNlbnQgPSB2ZWhpY2xlLmJhdHRlcnlfdmFlPy5wZXJjZW50XG5cbiAgICAgIGlmIChiYXR0ZXJ5UGVyY2VudCAmJiBiYXR0ZXJ5UGVyY2VudCA+IDQwKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuc3RhcnRSZW50aW5nKHZlaGljbGUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBhZ2VTdGF0ZSA9IHsgc3RhdGU6ICd2ZWhpY2xlX2xvYWRlZCcsIHZlaGljbGUgfVxuICAgICAgICB0aGlzLnN0YXJ0QXV0b1VubG9ja1RpbWVyKClcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICB0aGlzLm9uRXJyb3IoXG4gICAgICAgIHRoaXMudHJhbnNsYXRlLmluc3RhbnQoJ3FyX2NvZGUuZXJyb3IuJyArIGVycm9yLmVycm9yLmVycm9yKSB8fFxuICAgICAgICAgIGBJbXBvc3NpYmxlIGRlIHRyb3V2ZXIgbGUgdsOpaGljdWxlIG7CsCAke3RoaXMudmVoaWNsZUlEfWBcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBjb25maXJtVW5sb2NrKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICh0aGlzLnBhZ2VTdGF0ZS5zdGF0ZSAhPT0gJ3ZlaGljbGVfbG9hZGVkJyB8fCAhdGhpcy5wYWdlU3RhdGUudmVoaWNsZSlcbiAgICAgIHJldHVyblxuXG4gICAgLy8gQ2xlYXIgdGhlIGF1dG8tdW5sb2NrIHRpbWVyIGlmIHVzZXIgY2xpY2tzIG1hbnVhbGx5XG4gICAgdGhpcy5jbGVhckF1dG9VbmxvY2tUaW1lcigpXG5cbiAgICBhd2FpdCB0aGlzLnN0YXJ0UmVudGluZyh0aGlzLnBhZ2VTdGF0ZS52ZWhpY2xlKVxuICB9XG5cbiAgcmVzZXRTdGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyQXV0b1VubG9ja1RpbWVyKClcbiAgICB0aGlzLnBhZ2VTdGF0ZSA9IHsgc3RhdGU6ICdsb2FkaW5nX3Byb2dyYW0nIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgc3RhcnRSZW50aW5nKFxuICAgIHZlaGljbGU6IExpc3RWZWhpY3VsZTIwMFJlc3BvbnNlQWxsT2ZEYXRhSW5uZXJcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMucGFnZVN0YXRlID0geyBzdGF0ZTogJ3VubG9ja2luZycsIHZlaGljbGUgfVxuXG4gICAgICAvLyBTdGFydCByZW50aW5nIHdpdGggYXV0by11bmxvY2tcbiAgICAgIGNvbnN0IHRyaXAgPSBhd2FpdCB0aGlzLnJlbnRpbmdTZXJ2aWNlLnN0YXJ0UmVudGluZyhcbiAgICAgICAgdmVoaWNsZSxcbiAgICAgICAgZmFsc2UsIC8vIGNoZWNrTG9jYXRpb25cbiAgICAgICAgdmVoaWNsZS5ib2l0aWVyX21vZGVsID09PSAnYmlsbCcgPyB0cnVlIDogZmFsc2UsIC8vIGF1dG9VbmxvY2tcbiAgICAgICAgZmFsc2UsIC8vIHNob3dMb2FkZXJcbiAgICAgICAgdmVoaWNsZS5ib2l0aWVyX21vZGVsID09PSAnYmlsbCcgPyB0cnVlIDogZmFsc2UgLy8gc2tpcFJlZGlyZWN0XG4gICAgICApXG5cbiAgICAgIHZlaGljbGUuYm9pdGllcl9tb2RlbCA9PT0gJ2JpbGwnICYmXG4gICAgICAgIHRoaXMub25TdWNjZXNzKHRyaXAgYXMgTGlzdFRyaXAyMDBSZXNwb25zZUFsbE9mRGF0YUlubmVyKVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+KdjCBFcnJvciBkdXJpbmcgdW5sb2NrOicsIGVycm9yKVxuICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID1cbiAgICAgICAgZXJyb3IuZXJyb3I/Lm1lc3NhZ2U/LnNwbGl0KCd8JylbMV0/LnRyaW0oKSB8fFxuICAgICAgICBlcnJvci5lcnJvcj8ubWVzc2FnZSB8fFxuICAgICAgICBgSW1wb3NzaWJsZSBkZSBkw6l2ZXJyb3VpbGxlciBsZSB2w6lsbyAke3ZlaGljbGU/Lm51bWJlciB8fCAnJ31gXG4gICAgICB0aGlzLm9uRXJyb3IoZXJyb3JNZXNzYWdlKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3RhcnRBdXRvVW5sb2NrVGltZXIoKTogdm9pZCB7XG4gICAgLy8gQ2xlYXIgYW55IGV4aXN0aW5nIHRpbWVyXG4gICAgdGhpcy5jbGVhckF1dG9VbmxvY2tUaW1lcigpXG5cbiAgICAvLyBTdGFydCA1LXNlY29uZCB0aW1lciB0byBhdXRvLXVubG9ja1xuICAgIHRoaXMuYXV0b1VubG9ja1RpbWVyID0gd2luZG93LnNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMucGFnZVN0YXRlLnN0YXRlID09PSAndmVoaWNsZV9sb2FkZWQnICYmIHRoaXMucGFnZVN0YXRlLnZlaGljbGUpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5zdGFydFJlbnRpbmcodGhpcy5wYWdlU3RhdGUudmVoaWNsZSlcbiAgICAgIH1cbiAgICB9LCA1MDAwKVxuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckF1dG9VbmxvY2tUaW1lcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hdXRvVW5sb2NrVGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmF1dG9VbmxvY2tUaW1lcilcbiAgICAgIHRoaXMuYXV0b1VubG9ja1RpbWVyID0gdW5kZWZpbmVkXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvbkVycm9yKGVycm9yOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnBhZ2VTdGF0ZSA9IHsgc3RhdGU6ICdlcnJvcicsIGVycm9yOiBlcnJvciB9XG4gICAgLy8gQXV0byByZWRpcmVjdCB0byBtYXAgYWZ0ZXIgNSBzZWNvbmRzIG9uIGVycm9yXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnJlc2V0U3RhdGUoKVxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbWFwJ10sIHsgcmVwbGFjZVVybDogdHJ1ZSB9KVxuICAgIH0sIDUwMDApXG4gIH1cbiAgcHJpdmF0ZSBvblN1Y2Nlc3ModHJpcDogTGlzdFRyaXAyMDBSZXNwb25zZUFsbE9mRGF0YUlubmVyKTogdm9pZCB7XG4gICAgdGhpcy5wYWdlU3RhdGUgPSB7IHN0YXRlOiAnc3VjY2VzcycsIHRyaXAgfVxuICAgIC8vIEF1dG8gcmVkaXJlY3QgdG8gbWFwIGFmdGVyIDYgc2Vjb25kcyBvbiBzdWNjZXNzXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnJlc2V0U3RhdGUoKVxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbWFwJ10sIHsgcmVwbGFjZVVybDogdHJ1ZSB9KVxuICAgIH0sIDYwMDApXG4gIH1cbn1cbiIsICI8aW9uLWNvbnRlbnRcbiAgW2Z1bGxzY3JlZW5dPVwidHJ1ZVwiXG4gIFtjb2xvcl09XCJwYWdlU3RhdGUuc3RhdGUgPT09ICdlcnJvcicgPyAnZGFuZ2VyJyA6IHBhZ2VTdGF0ZS5zdGF0ZSA9PT0gJ2xvYWRpbmdfcHJvZ3JhbScgPyAnbGlnaHQnIDogJ3ByaW1hcnknXCJcbiAgY2xhc3M9XCJpb24tdGV4dC1jZW50ZXIgaW9uLWFsaWduLWl0ZW1zLWNlbnRlciBpb24tanVzdGlmeS1jb250ZW50LWNlbnRlclwiXG4gIHN0eWxlPVwiLS1wYWRkaW5nLXRvcDogMDsgLS1wYWRkaW5nLWJvdHRvbTogMFwiXG4+XG4gIDxpb24tZ3JpZCBjbGFzcz1cImlvbi1uby1wYWRkaW5nXCIgc3R5bGU9XCJoZWlnaHQ6IDEwMHZoXCI+XG4gICAgPGlvbi1yb3dcbiAgICAgIGNsYXNzPVwiaW9uLWFsaWduLWl0ZW1zLWNlbnRlciBpb24tanVzdGlmeS1jb250ZW50LWNlbnRlclwiXG4gICAgICBzdHlsZT1cImhlaWdodDogMTAwJVwiXG4gICAgPlxuICAgICAgPGlvbi1jb2wgY2xhc3M9XCJpb24tdGV4dC1jZW50ZXJcIiBzaXplPVwiOFwiIHNpemUtbWQ9XCI4XCIgc2l6ZS1sZz1cIjZcIj5cbiAgICAgICAgQHN3aXRjaCAocGFnZVN0YXRlLnN0YXRlKSB7IEBjYXNlICgnbG9hZGluZ19wcm9ncmFtJykge1xuICAgICAgICA8IS0tIFVuaXZlcnNhbCBMaW5rOiBDaGFyZ2VtZW50IHByb2dyYW0gKyBjb2xvcnMgKGZvbmQgYmxhbmMpIC0tPlxuICAgICAgICA8aW9uLXNwaW5uZXIgY29sb3I9XCJwcmltYXJ5XCI+PC9pb24tc3Bpbm5lcj5cbiAgICAgICAgfSBAY2FzZSAoJ2xvYWRpbmdfdmVoaWNsZScpIHtcbiAgICAgICAgPGlvbi1yb3c+XG4gICAgICAgICAgPGlvbi1jb2wgc2l6ZT1cIjEyXCIgY2xhc3M9XCJpb24tdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dFxuICAgICAgICAgICAgICAgIGFuaW1hdGVkXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogOTZweDsgaGVpZ2h0OiA5NnB4OyBib3JkZXItcmFkaXVzOiA1MCVcIlxuICAgICAgICAgICAgICA+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvaW9uLWNvbD5cbiAgICAgICAgPC9pb24tcm93PlxuXG4gICAgICAgIDwhLS0gUm93IDI6IFNrZWxldG9uIG1lc3NhZ2UgYmF0dGVyaWUgLS0+XG4gICAgICAgIDxpb24tcm93IHN0eWxlPVwibWFyZ2luLXRvcDogLTFyZW1cIj5cbiAgICAgICAgICA8aW9uLWNvbCBzaXplPVwiMTJcIiBjbGFzcz1cImlvbi10ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0XG4gICAgICAgICAgICAgIGFuaW1hdGVkXG4gICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDgwJTsgaGVpZ2h0OiAyNHB4OyBtYXJnaW46IDAgYXV0byAxcmVtIGF1dG9cIlxuICAgICAgICAgICAgPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgICAgPC9pb24tY29sPlxuICAgICAgICA8L2lvbi1yb3c+XG5cbiAgICAgICAgPCEtLSBSb3cgMzogU2tlbGV0b24gcXVlc3Rpb24gc3VmZmlzYW50IC0tPlxuICAgICAgICA8aW9uLXJvdz5cbiAgICAgICAgICA8aW9uLWNvbCBzaXplPVwiMTJcIiBjbGFzcz1cImlvbi10ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0XG4gICAgICAgICAgICAgIGFuaW1hdGVkXG4gICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDYwJTsgaGVpZ2h0OiAyMHB4OyBtYXJnaW46IDAgYXV0byAxcmVtIGF1dG9cIlxuICAgICAgICAgICAgPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgICAgPC9pb24tY29sPlxuICAgICAgICA8L2lvbi1yb3c+XG5cbiAgICAgICAgPCEtLSBSb3cgNDogU2tlbGV0b24gYm91dG9uIC0tPlxuICAgICAgICA8aW9uLXJvdz5cbiAgICAgICAgICA8aW9uLWNvbCBzaXplPVwiMTJcIiBjbGFzcz1cImlvbi10ZXh0LWNlbnRlciBpb24tbWFyZ2luLXRvcFwiPlxuICAgICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0XG4gICAgICAgICAgICAgIGFuaW1hdGVkXG4gICAgICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0NHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgID48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICAgIDwvaW9uLWNvbD5cbiAgICAgICAgPC9pb24tcm93PlxuXG4gICAgICAgIDwhLS0gUm93IDU6IFNrZWxldG9uIGxpZW4gYW5udWxlciAtLT5cbiAgICAgICAgPGlvbi1yb3c+XG4gICAgICAgICAgPGlvbi1jb2wgc2l6ZT1cIjEyXCIgY2xhc3M9XCJpb24tdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dFxuICAgICAgICAgICAgICBhbmltYXRlZFxuICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiAzMCU7IGhlaWdodDogMTZweDsgbWFyZ2luOiAwIGF1dG9cIlxuICAgICAgICAgICAgPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgICAgPC9pb24tY29sPlxuICAgICAgICA8L2lvbi1yb3c+XG5cbiAgICAgICAgfSBAY2FzZSAoJ3ZlaGljbGVfbG9hZGVkJykge1xuICAgICAgICA8IS0tIE5vdXZlbGxlIGludGVyZmFjZSBhdmVjIDYgcm93cyAtLT5cbiAgICAgICAgPCEtLSBSb3cgMTogSWPDtG5lIGJhdHRlcmllIC0tPlxuICAgICAgICA8aW9uLXJvdz5cbiAgICAgICAgICA8aW9uLWNvbCBzaXplPVwiMTJcIiBjbGFzcz1cImlvbi10ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPGlvbi1pY29uXG4gICAgICAgICAgICAgIFtuYW1lXT1cInBhZ2VTdGF0ZS52ZWhpY2xlLmJhdHRlcnlfdmFlLnBlcmNlbnQgPiAzMCA/ICdiYXR0ZXJ5LWhhbGYnIDogJ2JhdHRlcnktZGVhZCdcIlxuICAgICAgICAgICAgICBjb2xvcj1cImxpZ2h0XCJcbiAgICAgICAgICAgICAgc3R5bGU9XCJmb250LXNpemU6IDZyZW1cIlxuICAgICAgICAgICAgPjwvaW9uLWljb24+XG4gICAgICAgICAgPC9pb24tY29sPlxuICAgICAgICA8L2lvbi1yb3c+XG4gICAgICAgIDwhLS0gUm93IDI6IE1lc3NhZ2UgYmF0dGVyaWUgLS0+XG4gICAgICAgIDxpb24tcm93IHN0eWxlPVwibWFyZ2luLXRvcDogLTFyZW1cIj5cbiAgICAgICAgICA8aW9uLWNvbCBzaXplPVwiMTJcIiBjbGFzcz1cImlvbi10ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPGg0IGNsYXNzPVwiaW9uLWNvbG9yLWxpZ2h0IGJhdHRlcnktbWVzc2FnZVwiPlxuICAgICAgICAgICAgICB7eyAndmVoaWNsZS5iYXR0ZXJ5X3JlbWFpbmluZycgfCB0cmFuc2xhdGU6eyBwZXJjZW50OlxuICAgICAgICAgICAgICBwYWdlU3RhdGUudmVoaWNsZS5iYXR0ZXJ5X3ZhZS5wZXJjZW50IHx8IDAsIGttOlxuICAgICAgICAgICAgICBwYWdlU3RhdGUudmVoaWNsZS5iYXR0ZXJ5X3ZhZS5yZW1haW5pbmdfZGlzdGFuY2UgLyAxMDAwIHx8IDAgfSB9fVxuICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICA8L2lvbi1jb2w+XG4gICAgICAgIDwvaW9uLXJvdz5cbiAgICAgICAgPCEtLSBSb3cgMzogQm91dG9uIGF2ZWMgdGltZXIgLS0+XG4gICAgICAgIDxpb24tcm93PlxuICAgICAgICAgIDxpb24tY29sIHNpemU9XCIxMlwiIGNsYXNzPVwiaW9uLXRleHQtY2VudGVyIGlvbi1tYXJnaW4tdG9wXCI+XG4gICAgICAgICAgICA8YXBwLWZpbGwtYnV0dG9uXG4gICAgICAgICAgICAgIGNvbG9yPVwibGlnaHRcIlxuICAgICAgICAgICAgICBmaWxsPVwib3V0bGluZVwiXG4gICAgICAgICAgICAgIFthbmltYXRpb25EdXJhdGlvbl09XCI1MDAwXCJcbiAgICAgICAgICAgICAgKGJ1dHRvbkNsaWNrKT1cImNvbmZpcm1VbmxvY2soKVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt7ICd2ZWhpY2xlLmNvbnRpbnVlJyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICAgICAgPC9hcHAtZmlsbC1idXR0b24+XG4gICAgICAgICAgPC9pb24tY29sPlxuICAgICAgICA8L2lvbi1yb3c+XG5cbiAgICAgICAgPCEtLSBSb3cgNDogTGllbiBhbm51bGVyIC0tPlxuICAgICAgICA8aW9uLXJvdz5cbiAgICAgICAgICA8aW9uLWNvbCBzaXplPVwiMTJcIiBjbGFzcz1cImlvbi10ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPGlvbi1idXR0b25cbiAgICAgICAgICAgICAgZmlsbD1cImNsZWFyXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJsaWdodFwiXG4gICAgICAgICAgICAgIChjbGljayk9XCJyZXNldFN0YXRlKClcIlxuICAgICAgICAgICAgICBbcm91dGVyTGlua109XCJbJy9tYXAnXVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDx1Pnt7ICdnZW5lcmljLmNhbmNlbCcgfCB0cmFuc2xhdGUgfX08L3U+XG4gICAgICAgICAgICA8L2lvbi1idXR0b24+XG4gICAgICAgICAgPC9pb24tY29sPlxuICAgICAgICA8L2lvbi1yb3c+XG4gICAgICAgIH0gQGNhc2UgKCd2ZWhpY2xlX25vdF9yZW50YWJsZScpIHtcbiAgICAgICAgPCEtLSDDiXRhdCB2w6loaWN1bGUgbm9uIGxvdWFibGUgLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpb24tbWFyZ2luLWJvdHRvbVwiPlxuICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwiYmFuXCIgY29sb3I9XCJsaWdodFwiIHN0eWxlPVwiZm9udC1zaXplOiA4cmVtXCI+PC9pb24taWNvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoMiBjbGFzcz1cImlvbi1jb2xvci1saWdodFwiPlxuICAgICAgICAgIHt7ICdxcl9jb2RlLm5vdF9yZW50YWJsZS50aXRsZScgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgPC9oMj5cbiAgICAgICAgPHAgY2xhc3M9XCJpb24tY29sb3ItbGlnaHQgaW9uLW1hcmdpbi10b3BcIj5cbiAgICAgICAgICB7eyAncXJfY29kZS5ub3RfcmVudGFibGUuZ2VuZXJhbCcgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDwhLS0gQm91dG9uIHJldG91ciDDoCBsYSBjYXJ0ZSAtLT5cbiAgICAgICAgPGlvbi1yb3c+XG4gICAgICAgICAgPGlvbi1jb2wgc2l6ZT1cIjEyXCIgY2xhc3M9XCJpb24tdGV4dC1jZW50ZXIgaW9uLW1hcmdpbi10b3BcIj5cbiAgICAgICAgICAgIDxpb24tYnV0dG9uXG4gICAgICAgICAgICAgIGZpbGw9XCJzb2xpZFwiXG4gICAgICAgICAgICAgIGNvbG9yPVwibGlnaHRcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwicmVzZXRTdGF0ZSgpXCJcbiAgICAgICAgICAgICAgW3JvdXRlckxpbmtdPVwiWycvbWFwJ11cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7eyAncXJfY29kZS5ub3RfcmVudGFibGUuYmFja190b19tYXAnIHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgICA8L2lvbi1idXR0b24+XG4gICAgICAgICAgPC9pb24tY29sPlxuICAgICAgICA8L2lvbi1yb3c+XG4gICAgICAgIH0gQGNhc2UgKCdyZXN1bWUnKSB7XG4gICAgICAgIDxoMiBjbGFzcz1cImlvbi1jb2xvci1saWdodFwiPlxuICAgICAgICAgIHt7ICdxcl9jb2RlLnJlc3VtZS5waXRzdG9wX2NvZGVfdGl0bGUnIHwgdHJhbnNsYXRlIH19XG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxwIGNsYXNzPVwiaW9uLWNvbG9yLWxpZ2h0XCI+XG4gICAgICAgICAge3sgJ3FyX2NvZGUucmVzdW1lLnBpdHN0b3BfY29kZV9tZXNzYWdlJyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2RlXCI+XG4gICAgICAgICAge3sgcGFnZVN0YXRlLnRyaXA/LnBpbiB8fCAnKioqKioqJyB8IGZvcm1hdFBpbiB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGFwcC1maWxsLWJ1dHRvblxuICAgICAgICAgIFthbmltYXRpb25EdXJhdGlvbl09XCI2MDAwXCJcbiAgICAgICAgICAoYnV0dG9uQ2xpY2spPVwicmVzZXRTdGF0ZSgpOyByb3V0ZXIubmF2aWdhdGUoWycvbWFwJ10pXCJcbiAgICAgICAgPlxuICAgICAgICAgIHt7ICd2ZWhpY2xlLmNvbnRpbnVlJyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICA8L2FwcC1maWxsLWJ1dHRvbj5cbiAgICAgICAgfSBAY2FzZSAoJ3VubG9ja2luZycpIHtcbiAgICAgICAgPCEtLSDDiXRhdCBkZSBkw6l2ZXJyb3VpbGxhZ2UgZW4gY291cnMgLS0+XG4gICAgICAgIDxoMiBjbGFzcz1cImlvbi1jb2xvci1saWdodFwiPlxuICAgICAgICAgIHt7ICdhdXRvX3VubG9jay51bmxvY2tpbmdfdGl0bGUnIHwgdHJhbnNsYXRlIH19XG4gICAgICAgIDwvaDI+XG4gICAgICAgIH0gQGNhc2UgKCdzdWNjZXNzJykge1xuICAgICAgICA8IS0tIMOJdGF0IGRlIHN1Y2PDqHMgLS0+XG4gICAgICAgIDxoMiBjbGFzcz1cImlvbi1jb2xvci1saWdodFwiPnt7ICdhdXRvX3VubG9jay5zdWNjZXNzJyB8IHRyYW5zbGF0ZSB9fTwvaDI+XG4gICAgICAgIDxwIGNsYXNzPVwiaW9uLWNvbG9yLWxpZ2h0XCI+XG4gICAgICAgICAge3sgJ2F1dG9fdW5sb2NrLnN1Y2Nlc3NfbWVzc2FnZScgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgPC9wPlxuICAgICAgICA8cCBjbGFzcz1cImlvbi1jb2xvci1saWdodFwiPlxuICAgICAgICAgIHt7ICdhdXRvX3VubG9jay5zdGFydF9yaWRlJyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICA8L3A+XG4gICAgICAgIH0gQGNhc2UgKCdlcnJvcicpIHtcbiAgICAgICAgPCEtLSDDiXRhdCBkJ2VycmV1ciAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImlvbi1tYXJnaW4tYm90dG9tXCI+XG4gICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJiYW5cIiBjb2xvcj1cImxpZ2h0XCIgc3R5bGU9XCJmb250LXNpemU6IDhyZW1cIj48L2lvbi1pY29uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGgyIGNsYXNzPVwiaW9uLWNvbG9yLWxpZ2h0XCI+XG4gICAgICAgICAge3sgJ2F1dG9fdW5sb2NrLmVycm9yX3RpdGxlJyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICA8L2gyPlxuICAgICAgICA8cCBjbGFzcz1cImlvbi1jb2xvci1saWdodCBpb24tbWFyZ2luLXRvcFwiPnt7IHBhZ2VTdGF0ZS5lcnJvciB9fTwvcD5cbiAgICAgICAgfSB9XG4gICAgICA8L2lvbi1jb2w+XG4gICAgPC9pb24tcm93PlxuICA8L2lvbi1ncmlkPlxuPC9pb24tY29udGVudD5cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDY1EsSUFBQSxvQkFBQSxHQUFBLGVBQUEsQ0FBQTs7Ozs7QUFFQSxJQUFBLHlCQUFBLEdBQUEsU0FBQSxFQUFTLEdBQUEsV0FBQSxDQUFBLEVBQ29DLEdBQUEsT0FBQSxDQUFBO0FBUXZDLElBQUEsb0JBQUEsR0FBQSxxQkFBQSxDQUFBO0FBSUYsSUFBQSx1QkFBQSxFQUFNLEVBQ0U7QUFJWixJQUFBLHlCQUFBLEdBQUEsV0FBQSxDQUFBLEVBQW1DLEdBQUEsV0FBQSxDQUFBO0FBRS9CLElBQUEsb0JBQUEsR0FBQSxxQkFBQSxFQUFBO0FBSUYsSUFBQSx1QkFBQSxFQUFVO0FBSVosSUFBQSx5QkFBQSxHQUFBLFNBQUEsRUFBUyxHQUFBLFdBQUEsQ0FBQTtBQUVMLElBQUEsb0JBQUEsR0FBQSxxQkFBQSxFQUFBO0FBSUYsSUFBQSx1QkFBQSxFQUFVO0FBSVosSUFBQSx5QkFBQSxJQUFBLFNBQUEsRUFBUyxJQUFBLFdBQUEsRUFBQTtBQUVMLElBQUEsb0JBQUEsSUFBQSxxQkFBQSxFQUFBO0FBU0YsSUFBQSx1QkFBQSxFQUFVO0FBSVosSUFBQSx5QkFBQSxJQUFBLFNBQUEsRUFBUyxJ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QkFBQSxNQUFBLEdBQUEsNEJBQUEsZ0JBQUEsR0FBQSw0QkFBQSxjQUFBLEdBQUEsNEJBQUEsZ0JBQUEsQ0FBQTtBQUFBOzRFQUFWLGFBQVUsV0FBQSxDQUFBLENBQUEsYUFBQSxDQUFBLEdBQUEsT0FBQSxJQUFBLE1BQUEsR0FBQSxRQUFBLENBQUEsQ0FBQSxHQUFBLG1CQUFBLDBCQUFBLDhCQUFBLEdBQUEsaUJBQUEsS0FBQSxvQkFBQSxLQUFBLEdBQUEsY0FBQSxPQUFBLEdBQUEsQ0FBQSxHQUFBLGtCQUFBLEdBQUEsVUFBQSxPQUFBLEdBQUEsQ0FBQSxHQUFBLDBCQUFBLDhCQUFBLEdBQUEsVUFBQSxNQUFBLEdBQUEsQ0FBQSxRQUFBLEtBQUEsV0FBQSxLQUFBLFdBQUEsS0FBQSxHQUFBLGlCQUFBLEdBQUEsQ0FBQSxTQUFBLFNBQUEsR0FBQSxDQUFBLEdBQUEsaUJBQUEsR0FBQSxDQUFBLFFBQUEsTUFBQSxHQUFBLGlCQUFBLEdBQUEsQ0FBQSxHQUFBLFdBQUEsUUFBQSxtQkFBQSxVQUFBLGlCQUFBLE1BQUEsR0FBQSxDQUFBLFlBQUEsSUFBQSxHQUFBLFNBQUEsUUFBQSxVQUFBLFFBQUEsaUJBQUEsS0FBQSxHQUFBLENBQUEsR0FBQSxjQUFBLE9BQUEsR0FBQSxDQUFBLFlBQUEsSUFBQSxHQUFBLFNBQUEsT0FBQSxVQUFBLFFBQUEsVUFBQSxrQkFBQSxHQUFBLENBQUEsWUFBQSxJQUFBLEdBQUEsU0FBQSxPQUFBLFVBQUEsUUFBQSxVQUFBLGtCQUFBLEdBQUEsQ0FBQSxRQUFBLE1BQUEsR0FBQSxtQkFBQSxnQkFBQSxHQUFBLENBQUEsWUFBQSxJQUFBLEdBQUEsU0FBQSxRQUFBLFVBQUEsUUFBQSxpQkFBQSxRQUFBLGlCQUFBLE1BQUEsR0FBQSxDQUFBLFlBQUEsSUFBQSxHQUFBLFNBQUEsT0FBQSxVQUFBLFFBQUEsVUFBQSxRQUFBLEdBQUEsQ0FBQSxTQUFBLFNBQUEsR0FBQSxhQUFBLFFBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxHQUFBLG1CQUFBLGlCQUFBLEdBQUEsQ0FBQSxTQUFBLFNB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
