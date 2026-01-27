import {
  NearestVehiclesComponent
} from "./chunk-AFGEM7JO.js";
import {
  NativeAudioService
} from "./chunk-G2MABGRU.js";
import {
  RentingService
} from "./chunk-5RMBP5UX.js";
import {
  HeaderComponent
} from "./chunk-AVAJ3QHV.js";
import {
  LaunchService
} from "./chunk-FMQY6VXD.js";
import {
  GeolocationService
} from "./chunk-5KXLLE34.js";
import "./chunk-S5TR5TQN.js";
import "./chunk-OEYRANOA.js";
import "./chunk-K2AWDLYV.js";
import "./chunk-CCA64IRZ.js";
import "./chunk-PXVTGX2T.js";
import "./chunk-7JCEDXGT.js";
import "./chunk-RFEPADPA.js";
import "./chunk-Y4K6NO5T.js";
import {
  AuthService
} from "./chunk-WJQU3GMM.js";
import "./chunk-CHFOG66O.js";
import "./chunk-RAVV2QIY.js";
import {
  AppstateService
} from "./chunk-T6WE2PS5.js";
import {
  AccountService,
  VehiculesService
} from "./chunk-XK4I5MHM.js";
import "./chunk-GVYZRG6X.js";
import {
  environment
} from "./chunk-FOJAXRYS.js";
import "./chunk-Y7HI6USV.js";
import {
  ErrorHandlerService,
  ToastService,
  ToastType
} from "./chunk-SARQRLZR.js";
import {
  addIcons,
  alertCircleOutline,
  batteryFullOutline,
  checkmarkOutline,
  closeOutline,
  locateOutline,
  locationOutline,
  searchOutline
} from "./chunk-3E6DEK7U.js";
import "./chunk-U6SJAXLK.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  DOCUMENT,
  FormsModule,
  Inject,
  IonButton,
  IonCol,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
  IonSearchbar,
  IonSpinner,
  NgClass,
  NgIf,
  Router,
  RouterLink,
  RouterModule,
  TranslateModule,
  TranslatePipe,
  TranslateService,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
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
  __async
} from "./chunk-UESUV5PM.js";

// src/app/pages/renting/bike-number/bike-number.page.ts
var _c0 = (a0) => ["ecl-searchbar", a0];
var _c1 = () => ["initial"];
var _c2 = () => ["notFound"];
var _c3 = () => ["found", "renting"];
var _c4 = (a0, a1) => ({ percent: a0, distance: a1 });
var _c5 = () => ["/map"];
function BikeNumberPage_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content", 0)(1, "div", 1);
    \u0275\u0275element(2, "ion-spinner", 2);
    \u0275\u0275elementEnd()();
  }
}
function BikeNumberPage_Conditional_1_ion_spinner_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-spinner", 13);
  }
}
function BikeNumberPage_Conditional_1_ion_icon_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 14);
  }
}
function BikeNumberPage_Conditional_1_ion_icon_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 15);
  }
}
function BikeNumberPage_Conditional_1_ion_icon_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 16);
  }
}
function BikeNumberPage_Conditional_1_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "bike-number.searching"));
  }
}
function BikeNumberPage_Conditional_1_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "bike-number.not-found"));
  }
}
function BikeNumberPage_Conditional_1_Conditional_19_ion_item_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item", 19);
    \u0275\u0275element(1, "ion-icon", 20);
    \u0275\u0275elementStart(2, "ion-label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "bike-number.not-available"));
  }
}
function BikeNumberPage_Conditional_1_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list", 11)(1, "ion-item");
    \u0275\u0275element(2, "ion-icon", 17);
    \u0275\u0275elementStart(3, "ion-label");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, BikeNumberPage_Conditional_1_Conditional_19_ion_item_6_Template, 5, 3, "ion-item", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 2, "bike-number.battery-info", \u0275\u0275pureFunction2(5, _c4, ctx_r1.bikeNumberSearchState.vehicle.battery_vae.percent, (ctx_r1.bikeNumberSearchState.vehicle.battery_vae.remaining_distance / 1e3).toFixed(1))));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.bikeNumberSearchState.vehicle.rentable);
  }
}
function BikeNumberPage_Conditional_1_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-row", 3)(1, "ion-col", 21)(2, "ion-button", 22);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c5));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "bike-number.discover-stations"), " ");
  }
}
function BikeNumberPage_Conditional_1_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hr")(1, "app-nearest-vehicles");
  }
}
function BikeNumberPage_Conditional_1_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "hr");
    \u0275\u0275elementStart(1, "ion-item", 23)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 24)(6, "div", 25);
    \u0275\u0275element(7, "img", 26);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h1", 27);
    \u0275\u0275text(10, "Dring Dring!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementStart(14, "ion-button", 28);
    \u0275\u0275listener("click", function BikeNumberPage_Conditional_1_Conditional_25_Template_ion_button_click_14_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.requestLocation());
    });
    \u0275\u0275element(15, "ion-icon", 29);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, "nearest_vehicles.title"));
    \u0275\u0275advance(4);
    \u0275\u0275propertyInterpolate("alt", \u0275\u0275pipeBind1(8, 6, "bike-number.bikebell-image"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 8, "bike-number.location-request-message"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 10, "bike-number.request-location"), " ");
  }
}
function BikeNumberPage_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "app-header");
    \u0275\u0275elementStart(1, "ion-content", 0)(2, "ion-row", 3)(3, "ion-col", 4)(4, "h1");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "ion-searchbar", 5);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275listener("ionInput", function BikeNumberPage_Conditional_1_Template_ion_searchbar_ionInput_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleInput($event));
    })("ionFocus", function BikeNumberPage_Conditional_1_Template_ion_searchbar_ionFocus_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleFocus());
    })("paste", function BikeNumberPage_Conditional_1_Template_ion_searchbar_paste_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.preventPaste($event));
    })("keypress", function BikeNumberPage_Conditional_1_Template_ion_searchbar_keypress_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onKeyPress($event));
    });
    \u0275\u0275elementStart(12, "div", 6);
    \u0275\u0275template(13, BikeNumberPage_Conditional_1_ion_spinner_13_Template, 1, 0, "ion-spinner", 7)(14, BikeNumberPage_Conditional_1_ion_icon_14_Template, 1, 0, "ion-icon", 8)(15, BikeNumberPage_Conditional_1_ion_icon_15_Template, 1, 0, "ion-icon", 9)(16, BikeNumberPage_Conditional_1_ion_icon_16_Template, 1, 0, "ion-icon", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, BikeNumberPage_Conditional_1_Conditional_17_Template, 3, 3, "p")(18, BikeNumberPage_Conditional_1_Conditional_18_Template, 3, 3, "p")(19, BikeNumberPage_Conditional_1_Conditional_19_Template, 7, 8, "ion-list", 11);
    \u0275\u0275elementStart(20, "ion-button", 12);
    \u0275\u0275listener("click", function BikeNumberPage_Conditional_1_Template_ion_button_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startRenting());
    });
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, BikeNumberPage_Conditional_1_Conditional_23_Template, 5, 5, "ion-row", 3)(24, BikeNumberPage_Conditional_1_Conditional_24_Template, 2, 0)(25, BikeNumberPage_Conditional_1_Conditional_25_Template, 18, 12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 16, "bike-number.enter-number"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 18, "bike-number.enter-number-description"));
    \u0275\u0275advance(2);
    \u0275\u0275property("debounce", 500)("placeholder", \u0275\u0275pipeBind1(11, 20, "bike-number.number"))("ngClass", \u0275\u0275pureFunction1(24, _c0, "searching" === ctx_r1.bikeNumberSearchState.state ? "ecl-searchbar__searching" : ""));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.bikeNumberSearchState.state === "searching");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pureFunction0(26, _c1).includes(ctx_r1.bikeNumberSearchState.state));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pureFunction0(27, _c2).includes(ctx_r1.bikeNumberSearchState.state));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pureFunction0(28, _c3).includes(ctx_r1.bikeNumberSearchState.state));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.bikeNumberSearchState.state === "searching" ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.bikeNumberSearchState.state === "notFound" ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.bikeNumberSearchState.state === "found" || ctx_r1.bikeNumberSearchState.state === "renting" ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.canStartRenting());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 22, "bike-number.start-renting"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r1.appState == null ? null : ctx_r1.appState.state) === "new_cyclist" ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.geolocState == null ? null : ctx_r1.geolocState.state) === "live_position" || (ctx_r1.geolocState == null ? null : ctx_r1.geolocState.state) === "unique_position" ? 24 : 25);
  }
}
var _BikeNumberPage = class _BikeNumberPage {
  constructor(document, vehicleService, rentingService, toastService, geolocationService, appStateService, nativeAudioService, router, route, authService, accountService, launchService, toastrService, translate, errorHandlerService) {
    this.document = document;
    this.vehicleService = vehicleService;
    this.rentingService = rentingService;
    this.toastService = toastService;
    this.geolocationService = geolocationService;
    this.appStateService = appStateService;
    this.nativeAudioService = nativeAudioService;
    this.router = router;
    this.route = route;
    this.authService = authService;
    this.accountService = accountService;
    this.launchService = launchService;
    this.toastrService = toastrService;
    this.translate = translate;
    this.errorHandlerService = errorHandlerService;
    this.pageState = {
      state: "loading_started"
    };
    this.bikeNumberSearchState = { state: "initial" };
    this.lastRequest = null;
    this.geolocState = null;
    this.appState = null;
    this.auth = { state: "SignedOut" };
    this.cyclist = {
      state: "unknown",
      blocked_reasons: ["Unknown account state"]
    };
    addIcons({
      searchOutline,
      alertCircleOutline,
      checkmarkOutline,
      batteryFullOutline,
      closeOutline,
      locateOutline,
      locationOutline
    });
    this.geolocationService.geolocationState.subscribe((state) => {
      this.geolocState = state;
    });
    this.appStateService.appState.subscribe((state) => {
      this.appState = state;
    });
    effect(() => {
      this.auth = this.authService.authState();
    });
    effect(() => {
      this.cyclist = this.accountService.cyclistState();
    });
  }
  ionViewWillEnter() {
    this.performBackgroundLaunch();
  }
  ngOnInit() {
    this.nativeAudioService.preloadAsset("bikebell", "assets/audio/bikebell.mp3", 1, 0.8);
  }
  ionViewDidEnter() {
    var _a, _b;
    const el = this.document.getElementById("bike-number");
    el == null ? void 0 : el.setFocus();
    if (((_a = this.geolocState) == null ? void 0 : _a.state) !== "live_position" && ((_b = this.geolocState) == null ? void 0 : _b.state) !== "unique_position") {
      this.nativeAudioService.play("bikebell");
    }
  }
  canStartRenting() {
    return this.bikeNumberSearchState.state === "found" && this.bikeNumberSearchState.vehicle.rentable === true;
  }
  handleInput(event) {
    var _a;
    if (this.lastRequest) {
      this.lastRequest.unsubscribe();
      this.lastRequest = null;
    }
    const value = (_a = event.detail.value) == null ? void 0 : _a.trim();
    if (!value) {
      this.bikeNumberSearchState = { state: "initial" };
      return;
    }
    this.bikeNumberSearchState = {
      state: "searching",
      searchInput: value
    };
    this.lastRequest = this.vehicleService.retrieveVehicule({
      program: environment.program,
      id: value
    }).subscribe({
      next: (vehicle) => {
        if (this.bikeNumberSearchState.state === "searching") {
          this.bikeNumberSearchState = {
            state: "found",
            searchInput: value,
            vehicle
          };
        }
      },
      error: (error) => {
        if (error.status === 404) {
          this.bikeNumberSearchState = {
            state: "notFound"
          };
        } else {
          this.toastService.createWithJustMessage(error.message, ToastType.Error);
        }
      }
    });
  }
  handleFocus() {
  }
  startRenting() {
    return __async(this, null, function* () {
      if (this.bikeNumberSearchState.state === "found") {
        try {
          this.bikeNumberSearchState = {
            state: "renting",
            searchInput: this.bikeNumberSearchState.searchInput,
            vehicle: this.bikeNumberSearchState.vehicle
          };
          const vehicle = this.bikeNumberSearchState.vehicle;
          this.rentingService.startRenting(vehicle);
        } catch (error) {
          this.bikeNumberSearchState = {
            state: "rentingError",
            error
          };
        }
      }
    });
  }
  ngOnDestroy() {
    if (this.lastRequest) {
      this.lastRequest.unsubscribe();
    }
  }
  requestLocation() {
    return __async(this, null, function* () {
      var _a, _b;
      if (((_a = this.geolocState) == null ? void 0 : _a.state) === "denied" || ((_b = this.geolocState) == null ? void 0 : _b.state) === "error") {
        this.geolocationService.presentDeniedPositionAlert();
      } else {
        this.geolocationService.askForPermission();
      }
    });
  }
  preventPaste(event) {
    event.preventDefault();
    return false;
  }
  onKeyPress(event) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  /** *************************************************************** */
  /** ********** Ces méthodes servent principalement dans le cas ou l'utilisateur arrive par universal link avec une app fermée, si l'app est déjà lancé les vérifications se feront instantanément ********** */
  /** *************************************************************** */
  performBackgroundLaunch() {
    return __async(this, null, function* () {
      this.pageState = { state: "loading_started" };
      try {
        yield this.launchService.loadEssentialData({
          skipIfDataExists: true,
          forceRefreshStations: false
        });
        yield this.waitForAuthentication();
      } catch (error) {
        this.errorHandlerService.handleError(error);
      }
    });
  }
  waitForAuthentication() {
    return __async(this, null, function* () {
      if (this.auth.state === "SignedOut") {
        yield new Promise((resolve) => setTimeout(resolve, 2e3)).then(() => {
          if (this.auth.state === "SignedOut") {
            this.toastrService.createWithJustMessage(this.translate.instant("qr_code.error.authentication_required"), ToastType.Info);
            this.router.navigate(["/landing"], { replaceUrl: true });
          } else {
            this.waitForCyclistState();
          }
        });
      } else
        this.waitForCyclistState();
    });
  }
  waitForCyclistState() {
    return __async(this, null, function* () {
      if (this.cyclist.blocked_reasons.length > 0) {
        const maxRetries = 25;
        const checkInterval = 200;
        for (let i = 0; i < maxRetries; i++) {
          if (!this.cyclist.blocked_reasons.includes("Unknown account state")) {
            break;
          }
          yield new Promise((resolve) => setTimeout(resolve, checkInterval));
        }
        if (this.cyclist.blocked_reasons.length > 0) {
          this.errorHandlerService.handleError({
            error: { decline_code: "account_blocked" }
          });
        } else {
          this.handleQrCodeRedirection();
        }
      } else {
        this.handleQrCodeRedirection();
      }
    });
  }
  handleQrCodeRedirection() {
    this.route.queryParams.subscribe((params) => __async(this, null, function* () {
      if (params["qrcode"] && params["qrcode"] !== void 0) {
        this.router.navigate(["/renting/qr-code"], {
          queryParams: { qrcode: params["qrcode"] }
        });
      } else {
        this.pageState = { state: "loading_finished" };
      }
    }));
  }
};
_BikeNumberPage.\u0275fac = function BikeNumberPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BikeNumberPage)(\u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(VehiculesService), \u0275\u0275directiveInject(RentingService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(GeolocationService), \u0275\u0275directiveInject(AppstateService), \u0275\u0275directiveInject(NativeAudioService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(AccountService), \u0275\u0275directiveInject(LaunchService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(ErrorHandlerService));
};
_BikeNumberPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BikeNumberPage, selectors: [["app-bike-number"]], decls: 2, vars: 1, consts: [[1, "ion-padding"], [1, "center"], ["color", "primary"], [1, "ion-justify-content-center"], ["size", "12", "size-md", "8", "size-lg", "6"], ["id", "bike-number", "type", "tel", "inputmode", "numeric", "pattern", "[0-9]*", "search-icon", "search-outline", 3, "ionInput", "ionFocus", "paste", "keypress", "debounce", "placeholder", "ngClass"], [1, "ecl-searchbar-icon"], ["name", "lines", 4, "ngIf"], ["size", "large", "color", "medium", "name", "search-outline", 4, "ngIf"], ["size", "large", "color", "medium", "name", "alert-circle-outline", 4, "ngIf"], ["size", "large", "color", "medium", "name", "checkmark-outline", 4, "ngIf"], ["lines", "none"], ["id", "DringTo", "expand", "full", "shape", "round", "color", "primary", 1, "ion-margin-top", 3, "click", "disabled"], ["name", "lines"], ["size", "large", "color", "medium", "name", "search-outline"], ["size", "large", "color", "medium", "name", "alert-circle-outline"], ["size", "large", "color", "medium", "name", "checkmark-outline"], ["name", "battery-full-outline", "slot", "start"], ["color", "danger", 4, "ngIf"], ["color", "danger"], ["name", "close-outline", "slot", "start"], ["size", "12", "size-md", "6", "size-lg", "4"], ["expand", "block", "fill", "clear", "shape", "round", 3, "routerLink"], ["lines", "none", 1, "ecl-ionitem_title"], ["id", "DringFrom", 1, "ion-margin"], [1, "ion-float-left"], ["src", "assets/svg/dring_dring.svg", 1, "ion-margin-end", 3, "alt"], [1, "pacifico-regular"], ["fill", "outline", "color", "dark", 1, "ion-float-right", "ion-margin-vertical", 3, "click"], ["name", "locate-outline"]], template: function BikeNumberPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, BikeNumberPage_Conditional_0_Template, 3, 0, "ion-content", 0)(1, BikeNumberPage_Conditional_1_Template, 26, 29);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.pageState.state === "loading_started" ? 0 : 1);
  }
}, dependencies: [
  IonContent,
  IonSearchbar,
  IonButton,
  IonIcon,
  IonList,
  IonItem,
  IonLabel,
  IonRow,
  IonCol,
  IonSpinner,
  HeaderComponent,
  CommonModule,
  NgClass,
  NgIf,
  FormsModule,
  TranslateModule,
  TranslatePipe,
  NearestVehiclesComponent,
  RouterModule,
  RouterLink
], styles: ["\n\nhr[_ngcontent-%COMP%] {\n  background: var(--ion-color-dark) !important;\n  margin: 25px 0 !important;\n}\n.center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n/*# sourceMappingURL=bike-number.page.css.map */"] });
var BikeNumberPage = _BikeNumberPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BikeNumberPage, [{
    type: Component,
    args: [{ selector: "app-bike-number", imports: [
      IonContent,
      IonSearchbar,
      IonButton,
      IonIcon,
      IonList,
      IonItem,
      IonLabel,
      IonRow,
      IonCol,
      IonSpinner,
      HeaderComponent,
      CommonModule,
      FormsModule,
      TranslateModule,
      NearestVehiclesComponent,
      RouterModule
    ], template: `@if (pageState.state === 'loading_started') {
<ion-content class="ion-padding">
  <div class="center">
    <ion-spinner color="primary"></ion-spinner>
  </div>
</ion-content>
} @else {
<app-header></app-header>
<ion-content class="ion-padding">
  <ion-row class="ion-justify-content-center">
    <ion-col size="12" size-md="8" size-lg="6">
      <h1>{{ 'bike-number.enter-number' | translate }}</h1>
      <p>{{ 'bike-number.enter-number-description' | translate }}</p>
      <ion-searchbar
        id="bike-number"
        [debounce]="500"
        type="tel"
        inputmode="numeric"
        pattern="[0-9]*"
        search-icon="search-outline"
        [placeholder]="'bike-number.number' | translate"
        (ionInput)="handleInput($event)"
        (ionFocus)="handleFocus()"
        (paste)="preventPaste($event)"
        (keypress)="onKeyPress($event)"
        [ngClass]="['ecl-searchbar', 'searching' === bikeNumberSearchState.state ? 'ecl-searchbar__searching' : '']"
      >
        <div class="ecl-searchbar-icon">
          <ion-spinner
            name="lines"
            *ngIf="bikeNumberSearchState.state === 'searching'"
          ></ion-spinner>
          <ion-icon
            size="large"
            color="medium"
            *ngIf="['initial'].includes(bikeNumberSearchState.state) "
            name="search-outline"
          ></ion-icon>
          <ion-icon
            size="large"
            color="medium"
            *ngIf="['notFound'].includes(bikeNumberSearchState.state) "
            name="alert-circle-outline"
          ></ion-icon>
          <ion-icon
            size="large"
            color="medium"
            *ngIf="['found', 'renting'].includes(bikeNumberSearchState.state) "
            name="checkmark-outline"
          ></ion-icon>
        </div>
      </ion-searchbar>

      @if (bikeNumberSearchState.state === 'searching') {
      <p>{{ 'bike-number.searching' | translate }}</p>
      } @if (bikeNumberSearchState.state === 'notFound') {
      <p>{{ 'bike-number.not-found' | translate }}</p>
      } @if (bikeNumberSearchState.state === 'found' ||
      bikeNumberSearchState.state === 'renting') {
      <ion-list lines="none">
        <ion-item>
          <ion-icon name="battery-full-outline" slot="start"></ion-icon>
          <ion-label
            >{{ 'bike-number.battery-info' | translate: { percent:
            bikeNumberSearchState.vehicle.battery_vae.percent, distance:
            (bikeNumberSearchState.vehicle.battery_vae.remaining_distance /
            1000).toFixed(1) } }}</ion-label
          >
        </ion-item>
        <ion-item
          color="danger"
          *ngIf="!bikeNumberSearchState.vehicle.rentable"
        >
          <ion-icon name="close-outline" slot="start"></ion-icon>
          <ion-label>{{ 'bike-number.not-available' | translate }}</ion-label>
        </ion-item>
      </ion-list>
      }
      <ion-button
        id="DringTo"
        expand="full"
        shape="round"
        color="primary"
        [disabled]="!canStartRenting()"
        (click)="startRenting()"
        class="ion-margin-top"
        >{{ 'bike-number.start-renting' | translate }}</ion-button
      >

      @if (appState?.state === 'new_cyclist') {
      <ion-row class="ion-justify-content-center">
        <ion-col size="12" size-md="6" size-lg="4">
          <ion-button
            expand="block"
            fill="clear"
            shape="round"
            [routerLink]="['/map']"
          >
            {{ 'bike-number.discover-stations' | translate }}
          </ion-button>
        </ion-col>
      </ion-row>
      } @if (geolocState?.state === 'live_position' || geolocState?.state ===
      'unique_position') {
      <hr />
      <app-nearest-vehicles></app-nearest-vehicles>
      } @else {
      <hr />
      <ion-item lines="none" class="ecl-ionitem_title">
        <h2>{{ 'nearest_vehicles.title' | translate }}</h2>
      </ion-item>
      <div class="ion-margin" id="DringFrom">
        <div class="ion-float-left">
          <img
            src="assets/svg/dring_dring.svg"
            class="ion-margin-end"
            alt="{{ 'bike-number.bikebell-image' | translate }}"
          />
        </div>
        <h1 class="pacifico-regular">Dring Dring!</h1>
        <p>
          {{ 'bike-number.location-request-message' | translate }}
          <ion-button
            class="ion-float-right ion-margin-vertical"
            fill="outline"
            color="dark"
            (click)="requestLocation()"
          >
            <ion-icon name="locate-outline"></ion-icon>
            {{ 'bike-number.request-location' | translate }}
          </ion-button>
        </p>
      </div>
      }
    </ion-col>
  </ion-row>
</ion-content>
}
`, styles: ["/* src/app/pages/renting/bike-number/bike-number.page.scss */\nhr {\n  background: var(--ion-color-dark) !important;\n  margin: 25px 0 !important;\n}\n.center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n/*# sourceMappingURL=bike-number.page.css.map */\n"] }]
  }], () => [{ type: Document, decorators: [{
    type: Inject,
    args: [DOCUMENT]
  }] }, { type: VehiculesService }, { type: RentingService }, { type: ToastService }, { type: GeolocationService }, { type: AppstateService }, { type: NativeAudioService }, { type: Router }, { type: ActivatedRoute }, { type: AuthService }, { type: AccountService }, { type: LaunchService }, { type: ToastService }, { type: TranslateService }, { type: ErrorHandlerService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BikeNumberPage, { className: "BikeNumberPage", filePath: "src/app/pages/renting/bike-number/bike-number.page.ts", lineNumber: 106 });
})();
export {
  BikeNumberPage
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wYWdlcy9yZW50aW5nL2Jpa2UtbnVtYmVyL2Jpa2UtbnVtYmVyLnBhZ2UudHMiLCAic3JjL2FwcC9wYWdlcy9yZW50aW5nL2Jpa2UtbnVtYmVyL2Jpa2UtbnVtYmVyLnBhZ2UuaHRtbCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgQ29tcG9uZW50LCBlZmZlY3QsIEluamVjdCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbidcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnXG5pbXBvcnQge1xuICBJb25Db250ZW50LFxuICBJb25TZWFyY2hiYXIsXG4gIElvbkljb24sXG4gIElvbkxpc3QsXG4gIElvbkl0ZW0sXG4gIElvbkxhYmVsLFxuICBJb25TcGlubmVyLFxuICBJb25CdXR0b24sXG4gIElvblJvdyxcbiAgSW9uQ29sLFxufSBmcm9tICdAaW9uaWMvYW5ndWxhci9zdGFuZGFsb25lJ1xuaW1wb3J0IHtcbiAgTGlzdFZlaGljdWxlMjAwUmVzcG9uc2VBbGxPZkRhdGFJbm5lcixcbiAgVmVoaWN1bGVzU2VydmljZSxcbn0gZnJvbSAnc3JjL2FwaS1jeWNsaXN0J1xuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnc3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50J1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlLCBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSdcbmltcG9ydCB7IGFkZEljb25zIH0gZnJvbSAnaW9uaWNvbnMnXG5pbXBvcnQge1xuICBzZWFyY2hPdXRsaW5lLFxuICBjaGVja21hcmtPdXRsaW5lLFxuICBiYXR0ZXJ5RnVsbE91dGxpbmUsXG4gIGFsZXJ0Q2lyY2xlT3V0bGluZSxcbiAgY2xvc2VPdXRsaW5lLFxuICBsb2NhdGlvbk91dGxpbmUsXG4gIGxvY2F0ZU91dGxpbmUsXG59IGZyb20gJ2lvbmljb25zL2ljb25zJ1xuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICdzcmMvZW52aXJvbm1lbnRzL2Vudmlyb25tZW50J1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcydcbmltcG9ydCB7IFRvYXN0U2VydmljZSwgVG9hc3RUeXBlIH0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy91dGlscy90b2FzdC5zZXJ2aWNlJ1xuaW1wb3J0IHsgUmVudGluZ1NlcnZpY2UgfSBmcm9tICdzcmMvYXBwL3NlcnZpY2VzL2FwaS13cmFwcGVycy9yZW50aW5nLnNlcnZpY2UnXG5pbXBvcnQgeyBOZWFyZXN0VmVoaWNsZXNDb21wb25lbnQgfSBmcm9tICdzcmMvYXBwL2NvbXBvbmVudHMvZHJhd2Vycy9uZWFyZXN0LXZlaGljbGVzL25lYXJlc3QtdmVoaWNsZXMuY29tcG9uZW50J1xuaW1wb3J0IHtcbiAgR2VvbG9jYXRpb25TZXJ2aWNlLFxuICBHZW9sb2NhdGlvblN0YXRlLFxufSBmcm9tICdzcmMvYXBwL3NlcnZpY2VzL3V0aWxzL2dlb2xvY2F0aW9uLnNlcnZpY2UnXG5pbXBvcnQge1xuICBBcHBTdGF0ZSxcbiAgQXBwc3RhdGVTZXJ2aWNlLFxufSBmcm9tICdzcmMvYXBwL3NlcnZpY2VzL2ludGVybmFsL2FwcHN0YXRlLnNlcnZpY2UnXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInXG5cbmltcG9ydCB7IE5hdGl2ZUF1ZGlvU2VydmljZSB9IGZyb20gJ3NyYy9hcHAvc2VydmljZXMvdXRpbHMvbmF0aXZlLWF1ZGlvLnNlcnZpY2UnXG5pbXBvcnQgeyBBdXRoU2VydmljZSwgQXV0aFN0YXRlIH0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy9leHRlcm5hbC9hdXRoLnNlcnZpY2UnXG5pbXBvcnQge1xuICBBY2NvdW50U2VydmljZSxcbiAgY3ljbGlzdFN0YXRlLFxufSBmcm9tICdzcmMvYXBwL3NlcnZpY2VzL2FwaS13cmFwcGVycy9hY2NvdW50LnNlcnZpY2UnXG5pbXBvcnQgeyBMYXVuY2hTZXJ2aWNlIH0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy9pbnRlcm5hbC9sYXVuY2guc2VydmljZSdcbmltcG9ydCB7IEVycm9ySGFuZGxlclNlcnZpY2UgfSBmcm9tICdzcmMvYXBwL3NlcnZpY2VzL3V0aWxzL2Vycm9yLWhhbmRsZXIuc2VydmljZSdcbmRlY2xhcmUgdmFyIExlYWRlckxpbmU6IGFueVxuXG5leHBvcnQgdHlwZSBCaWtlTnVtYmVyU2VhcmNoU3RhdGUgPVxuICB8IHtcbiAgICAgIHN0YXRlOiAnaW5pdGlhbCdcbiAgICB9XG4gIHwge1xuICAgICAgc3RhdGU6ICdzZWFyY2hpbmcnXG4gICAgICBzZWFyY2hJbnB1dDogc3RyaW5nXG4gICAgfVxuICB8IHtcbiAgICAgIHN0YXRlOiAnZm91bmQnXG4gICAgICBzZWFyY2hJbnB1dDogc3RyaW5nXG4gICAgICB2ZWhpY2xlOiBMaXN0VmVoaWN1bGUyMDBSZXNwb25zZUFsbE9mRGF0YUlubmVyXG4gICAgfVxuICB8IHtcbiAgICAgIHN0YXRlOiAnbm90Rm91bmQnXG4gICAgfVxuICB8IHtcbiAgICAgIHN0YXRlOiAncmVudGluZydcbiAgICAgIHNlYXJjaElucHV0OiBzdHJpbmdcbiAgICAgIHZlaGljbGU6IExpc3RWZWhpY3VsZTIwMFJlc3BvbnNlQWxsT2ZEYXRhSW5uZXJcbiAgICB9XG4gIHwge1xuICAgICAgc3RhdGU6ICdyZW50aW5nRXJyb3InXG4gICAgICBlcnJvcjogYW55XG4gICAgfVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtYmlrZS1udW1iZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vYmlrZS1udW1iZXIucGFnZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYmlrZS1udW1iZXIucGFnZS5zY3NzJ10sXG4gIGltcG9ydHM6IFtcbiAgICBJb25Db250ZW50LFxuICAgIElvblNlYXJjaGJhcixcbiAgICBJb25CdXR0b24sXG4gICAgSW9uSWNvbixcbiAgICBJb25MaXN0LFxuICAgIElvbkl0ZW0sXG4gICAgSW9uTGFiZWwsXG4gICAgSW9uUm93LFxuICAgIElvbkNvbCxcbiAgICBJb25TcGlubmVyLFxuICAgIEhlYWRlckNvbXBvbmVudCxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICAgIE5lYXJlc3RWZWhpY2xlc0NvbXBvbmVudCxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEJpa2VOdW1iZXJQYWdlIGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQge1xuICBwYWdlU3RhdGU6IHsgc3RhdGU6ICdsb2FkaW5nX3N0YXJ0ZWQnIH0gfCB7IHN0YXRlOiAnbG9hZGluZ19maW5pc2hlZCcgfSA9IHtcbiAgICBzdGF0ZTogJ2xvYWRpbmdfc3RhcnRlZCcsXG4gIH1cbiAgYmlrZU51bWJlclNlYXJjaFN0YXRlOiBCaWtlTnVtYmVyU2VhcmNoU3RhdGUgPSB7IHN0YXRlOiAnaW5pdGlhbCcgfVxuICBwcml2YXRlIGxhc3RSZXF1ZXN0OiBTdWJzY3JpcHRpb24gfCBudWxsID0gbnVsbFxuICBnZW9sb2NTdGF0ZTogR2VvbG9jYXRpb25TdGF0ZSB8IG51bGwgPSBudWxsXG4gIGFwcFN0YXRlOiBBcHBTdGF0ZSB8IG51bGwgPSBudWxsXG4gIHByaXZhdGUgYXV0aDogQXV0aFN0YXRlID0geyBzdGF0ZTogJ1NpZ25lZE91dCcgfVxuICBwcml2YXRlIGN5Y2xpc3Q6IGN5Y2xpc3RTdGF0ZSA9IHtcbiAgICBzdGF0ZTogJ3Vua25vd24nLFxuICAgIGJsb2NrZWRfcmVhc29uczogWydVbmtub3duIGFjY291bnQgc3RhdGUnXSxcbiAgfVxuICBwcml2YXRlIGxlYWRlckxpbmU/OiBhbnlcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBEb2N1bWVudCxcbiAgICBwcml2YXRlIHZlaGljbGVTZXJ2aWNlOiBWZWhpY3VsZXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVudGluZ1NlcnZpY2U6IFJlbnRpbmdTZXJ2aWNlLFxuICAgIHByaXZhdGUgdG9hc3RTZXJ2aWNlOiBUb2FzdFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBnZW9sb2NhdGlvblNlcnZpY2U6IEdlb2xvY2F0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIGFwcFN0YXRlU2VydmljZTogQXBwc3RhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgbmF0aXZlQXVkaW9TZXJ2aWNlOiBOYXRpdmVBdWRpb1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIGFjY291bnRTZXJ2aWNlOiBBY2NvdW50U2VydmljZSxcbiAgICBwcml2YXRlIGxhdW5jaFNlcnZpY2U6IExhdW5jaFNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0b2FzdHJTZXJ2aWNlOiBUb2FzdFNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBlcnJvckhhbmRsZXJTZXJ2aWNlOiBFcnJvckhhbmRsZXJTZXJ2aWNlXG4gICkge1xuICAgIGFkZEljb25zKHtcbiAgICAgIHNlYXJjaE91dGxpbmUsXG4gICAgICBhbGVydENpcmNsZU91dGxpbmUsXG4gICAgICBjaGVja21hcmtPdXRsaW5lLFxuICAgICAgYmF0dGVyeUZ1bGxPdXRsaW5lLFxuICAgICAgY2xvc2VPdXRsaW5lLFxuICAgICAgbG9jYXRlT3V0bGluZSxcbiAgICAgIGxvY2F0aW9uT3V0bGluZSxcbiAgICB9KVxuICAgIHRoaXMuZ2VvbG9jYXRpb25TZXJ2aWNlLmdlb2xvY2F0aW9uU3RhdGUuc3Vic2NyaWJlKChzdGF0ZSkgPT4ge1xuICAgICAgdGhpcy5nZW9sb2NTdGF0ZSA9IHN0YXRlXG4gICAgfSlcblxuICAgIHRoaXMuYXBwU3RhdGVTZXJ2aWNlLmFwcFN0YXRlLnN1YnNjcmliZSgoc3RhdGUpID0+IHtcbiAgICAgIHRoaXMuYXBwU3RhdGUgPSBzdGF0ZVxuICAgIH0pXG4gICAgLy8gTGlzdGVuIHRvIGF1dGggc3RhdGUgY2hhbmdlc1xuICAgIGVmZmVjdCgoKSA9PiB7XG4gICAgICB0aGlzLmF1dGggPSB0aGlzLmF1dGhTZXJ2aWNlLmF1dGhTdGF0ZSgpXG4gICAgfSlcblxuICAgIC8vIExpc3RlbiB0byBjeWNsaXN0IHN0YXRlIGNoYW5nZXNcbiAgICBlZmZlY3QoKCkgPT4ge1xuICAgICAgdGhpcy5jeWNsaXN0ID0gdGhpcy5hY2NvdW50U2VydmljZS5jeWNsaXN0U3RhdGUoKVxuICAgIH0pXG4gIH1cblxuICBpb25WaWV3V2lsbEVudGVyKCkge1xuICAgIHRoaXMucGVyZm9ybUJhY2tncm91bmRMYXVuY2goKVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gUHLDqWNoYXJnZW1lbnQgZHUgc29uIFwiRHJpbmdcIlxuICAgIHRoaXMubmF0aXZlQXVkaW9TZXJ2aWNlLnByZWxvYWRBc3NldChcbiAgICAgICdiaWtlYmVsbCcsXG4gICAgICAnYXNzZXRzL2F1ZGlvL2Jpa2ViZWxsLm1wMycsXG4gICAgICAxLFxuICAgICAgMC44XG4gICAgKVxuICB9XG5cbiAgaW9uVmlld0RpZEVudGVyKCkge1xuICAgIGNvbnN0IGVsID0gdGhpcy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICdiaWtlLW51bWJlcidcbiAgICApIGFzIHVua25vd24gYXMgSFRNTElvblNlYXJjaGJhckVsZW1lbnRcbiAgICBlbD8uc2V0Rm9jdXMoKVxuXG4gICAgaWYgKFxuICAgICAgdGhpcy5nZW9sb2NTdGF0ZT8uc3RhdGUgIT09ICdsaXZlX3Bvc2l0aW9uJyAmJlxuICAgICAgdGhpcy5nZW9sb2NTdGF0ZT8uc3RhdGUgIT09ICd1bmlxdWVfcG9zaXRpb24nXG4gICAgKSB7XG4gICAgICB0aGlzLm5hdGl2ZUF1ZGlvU2VydmljZS5wbGF5KCdiaWtlYmVsbCcpXG4gICAgfVxuICB9XG5cbiAgY2FuU3RhcnRSZW50aW5nKCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmJpa2VOdW1iZXJTZWFyY2hTdGF0ZS5zdGF0ZSA9PT0gJ2ZvdW5kJyAmJlxuICAgICAgdGhpcy5iaWtlTnVtYmVyU2VhcmNoU3RhdGUudmVoaWNsZS5yZW50YWJsZSA9PT0gdHJ1ZVxuICAgIClcbiAgfVxuXG4gIGhhbmRsZUlucHV0KGV2ZW50OiBDdXN0b21FdmVudCkge1xuICAgIC8vIEFubnVsZXIgbGEgZGVybmnDqHJlIHJlcXXDqnRlIHNpIGVsbGUgZXhpc3RlXG4gICAgaWYgKHRoaXMubGFzdFJlcXVlc3QpIHtcbiAgICAgIHRoaXMubGFzdFJlcXVlc3QudW5zdWJzY3JpYmUoKVxuICAgICAgdGhpcy5sYXN0UmVxdWVzdCA9IG51bGxcbiAgICB9XG5cbiAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LmRldGFpbC52YWx1ZT8udHJpbSgpXG5cbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICB0aGlzLmJpa2VOdW1iZXJTZWFyY2hTdGF0ZSA9IHsgc3RhdGU6ICdpbml0aWFsJyB9XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmJpa2VOdW1iZXJTZWFyY2hTdGF0ZSA9IHtcbiAgICAgIHN0YXRlOiAnc2VhcmNoaW5nJyxcbiAgICAgIHNlYXJjaElucHV0OiB2YWx1ZSxcbiAgICB9XG5cbiAgICAvLyBTdG9ja2VyIGxhIG5vdXZlbGxlIHJlcXXDqnRlXG4gICAgdGhpcy5sYXN0UmVxdWVzdCA9IHRoaXMudmVoaWNsZVNlcnZpY2VcbiAgICAgIC5yZXRyaWV2ZVZlaGljdWxlKHtcbiAgICAgICAgcHJvZ3JhbTogZW52aXJvbm1lbnQucHJvZ3JhbSxcbiAgICAgICAgaWQ6IHZhbHVlLFxuICAgICAgfSlcbiAgICAgIC5zdWJzY3JpYmUoe1xuICAgICAgICBuZXh0OiAodmVoaWNsZSkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmJpa2VOdW1iZXJTZWFyY2hTdGF0ZS5zdGF0ZSA9PT0gJ3NlYXJjaGluZycpIHtcbiAgICAgICAgICAgIHRoaXMuYmlrZU51bWJlclNlYXJjaFN0YXRlID0ge1xuICAgICAgICAgICAgICBzdGF0ZTogJ2ZvdW5kJyxcbiAgICAgICAgICAgICAgc2VhcmNoSW5wdXQ6IHZhbHVlLFxuICAgICAgICAgICAgICB2ZWhpY2xlLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IChlcnJvcikgPT4ge1xuICAgICAgICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAgICAgdGhpcy5iaWtlTnVtYmVyU2VhcmNoU3RhdGUgPSB7XG4gICAgICAgICAgICAgIHN0YXRlOiAnbm90Rm91bmQnLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRvYXN0U2VydmljZS5jcmVhdGVXaXRoSnVzdE1lc3NhZ2UoXG4gICAgICAgICAgICAgIGVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgICAgIFRvYXN0VHlwZS5FcnJvclxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH0pXG4gIH1cblxuICBoYW5kbGVGb2N1cygpIHtcbiAgICAvLyBBIGxhaXNzZXIgY2FyIHNpbm9uIGlsIG4nZXN0IHBhcyBwb3NzaWJsZSBkZSBmb2N1cyDDoCBsJ2Fycml2w6llIHN1ciBsYSBwYWdlXG4gIH1cblxuICBhc3luYyBzdGFydFJlbnRpbmcoKSB7XG4gICAgaWYgKHRoaXMuYmlrZU51bWJlclNlYXJjaFN0YXRlLnN0YXRlID09PSAnZm91bmQnKSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLmJpa2VOdW1iZXJTZWFyY2hTdGF0ZSA9IHtcbiAgICAgICAgICBzdGF0ZTogJ3JlbnRpbmcnLFxuICAgICAgICAgIHNlYXJjaElucHV0OiB0aGlzLmJpa2VOdW1iZXJTZWFyY2hTdGF0ZS5zZWFyY2hJbnB1dCxcbiAgICAgICAgICB2ZWhpY2xlOiB0aGlzLmJpa2VOdW1iZXJTZWFyY2hTdGF0ZS52ZWhpY2xlLFxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZlaGljbGUgPSB0aGlzLmJpa2VOdW1iZXJTZWFyY2hTdGF0ZS52ZWhpY2xlIVxuICAgICAgICB0aGlzLnJlbnRpbmdTZXJ2aWNlLnN0YXJ0UmVudGluZyh2ZWhpY2xlKVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgdGhpcy5iaWtlTnVtYmVyU2VhcmNoU3RhdGUgPSB7XG4gICAgICAgICAgc3RhdGU6ICdyZW50aW5nRXJyb3InLFxuICAgICAgICAgIGVycm9yLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMubGFzdFJlcXVlc3QpIHtcbiAgICAgIHRoaXMubGFzdFJlcXVlc3QudW5zdWJzY3JpYmUoKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHJlcXVlc3RMb2NhdGlvbigpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmdlb2xvY1N0YXRlPy5zdGF0ZSA9PT0gJ2RlbmllZCcgfHxcbiAgICAgIHRoaXMuZ2VvbG9jU3RhdGU/LnN0YXRlID09PSAnZXJyb3InXG4gICAgKSB7XG4gICAgICB0aGlzLmdlb2xvY2F0aW9uU2VydmljZS5wcmVzZW50RGVuaWVkUG9zaXRpb25BbGVydCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZ2VvbG9jYXRpb25TZXJ2aWNlLmFza0ZvclBlcm1pc3Npb24oKVxuICAgIH1cbiAgfVxuXG4gIHByZXZlbnRQYXN0ZShldmVudDogQ2xpcGJvYXJkRXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBvbktleVByZXNzKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgY29uc3QgcGF0dGVybiA9IC9bMC05XS9cbiAgICBjb25zdCBpbnB1dENoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGV2ZW50LmNoYXJDb2RlKVxuXG4gICAgaWYgKCFwYXR0ZXJuLnRlc3QoaW5wdXRDaGFyKSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cbiAgfVxuXG4gIC8qKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cbiAgLyoqICoqKioqKioqKiogQ2VzIG3DqXRob2RlcyBzZXJ2ZW50IHByaW5jaXBhbGVtZW50IGRhbnMgbGUgY2FzIG91IGwndXRpbGlzYXRldXIgYXJyaXZlIHBhciB1bml2ZXJzYWwgbGluayBhdmVjIHVuZSBhcHAgZmVybcOpZSwgc2kgbCdhcHAgZXN0IGTDqWrDoCBsYW5jw6kgbGVzIHbDqXJpZmljYXRpb25zIHNlIGZlcm9udCBpbnN0YW50YW7DqW1lbnQgKioqKioqKioqKiAqL1xuICAvKiogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cbiAgcHJpdmF0ZSBhc3luYyBwZXJmb3JtQmFja2dyb3VuZExhdW5jaCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLnBhZ2VTdGF0ZSA9IHsgc3RhdGU6ICdsb2FkaW5nX3N0YXJ0ZWQnIH1cbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5sYXVuY2hTZXJ2aWNlLmxvYWRFc3NlbnRpYWxEYXRhKHtcbiAgICAgICAgc2tpcElmRGF0YUV4aXN0czogdHJ1ZSxcbiAgICAgICAgZm9yY2VSZWZyZXNoU3RhdGlvbnM6IGZhbHNlLFxuICAgICAgfSlcbiAgICAgIGF3YWl0IHRoaXMud2FpdEZvckF1dGhlbnRpY2F0aW9uKClcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5lcnJvckhhbmRsZXJTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgd2FpdEZvckF1dGhlbnRpY2F0aW9uKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIC8vU2kgdXRpbGlzYXRldXIgPSBkw6ljbywgb24gYXR0ZW5kcyAyIHNlY29uZGVzIGxlIHRlbXBzIHF1ZSBsJ2F1dGggc2UgZmFzc2VcbiAgICBpZiAodGhpcy5hdXRoLnN0YXRlID09PSAnU2lnbmVkT3V0Jykge1xuICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMjAwMCkpLnRoZW4oKCkgPT4ge1xuICAgICAgICAvL1NpIGlsIGVzdCB0b3Vqb3VycyBkw6ljbywgb24gYWZmaWNoZSBsJ2VycmV1clxuICAgICAgICBpZiAodGhpcy5hdXRoLnN0YXRlID09PSAnU2lnbmVkT3V0Jykge1xuICAgICAgICAgIHRoaXMudG9hc3RyU2VydmljZS5jcmVhdGVXaXRoSnVzdE1lc3NhZ2UoXG4gICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KCdxcl9jb2RlLmVycm9yLmF1dGhlbnRpY2F0aW9uX3JlcXVpcmVkJyksXG4gICAgICAgICAgICBUb2FzdFR5cGUuSW5mb1xuICAgICAgICAgIClcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sYW5kaW5nJ10sIHsgcmVwbGFjZVVybDogdHJ1ZSB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vU2lub24gb24gdsOpcmlmaWUgcXVlIGxlIGN5Y2xpc3Qgc29pdCB2YWxpZGVcbiAgICAgICAgICB0aGlzLndhaXRGb3JDeWNsaXN0U3RhdGUoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0gLy8gc2lub24gb24gY2hlY2sgZGlyZWN0ZW1lbnQgbGUgY3ljbGlzdGVcbiAgICBlbHNlIHRoaXMud2FpdEZvckN5Y2xpc3RTdGF0ZSgpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHdhaXRGb3JDeWNsaXN0U3RhdGUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLy9TaSBsZSBjeWNsaXN0IGEgdW5lIGJsb2NrZWRfcmVhc29uLCBvbiBhdHRlbmRzIGRlIHZvaXIgc2kgYydlc3QgcGFzIGp1c3RlIHVuIHByb2Jsw6htZSBkZSBjaGFyZ2VtZW50IGR1IGN5Y2xpc3RlICh1bmtub3duIGFjY291bnQgc3RhdGUpXG4gICAgaWYgKHRoaXMuY3ljbGlzdC5ibG9ja2VkX3JlYXNvbnMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgbWF4UmV0cmllcyA9IDI1XG4gICAgICBjb25zdCBjaGVja0ludGVydmFsID0gMjAwXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heFJldHJpZXM7IGkrKykge1xuICAgICAgICAvLyBTaSBcIlVua25vd24gYWNjb3VudCBzdGF0ZVwiIG4nZXN0IHBsdXMgcHLDqXNlbnQsIG9uIHBldXQgYXJyw6p0ZXIgbGEgYm91Y2xlXG4gICAgICAgIGlmICghdGhpcy5jeWNsaXN0LmJsb2NrZWRfcmVhc29ucy5pbmNsdWRlcygnVW5rbm93biBhY2NvdW50IHN0YXRlJykpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIGNoZWNrSW50ZXJ2YWwpKVxuICAgICAgfVxuICAgICAgLy8gU2kgYSBsJ2lzc3VlIGlsIGVzdCBlbmNvcmUgYmxvcXXDqSwgb24gYWZmaWNoZSBsJ2VycmV1clxuICAgICAgaWYgKHRoaXMuY3ljbGlzdC5ibG9ja2VkX3JlYXNvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLmVycm9ySGFuZGxlclNlcnZpY2UuaGFuZGxlRXJyb3Ioe1xuICAgICAgICAgIGVycm9yOiB7IGRlY2xpbmVfY29kZTogJ2FjY291bnRfYmxvY2tlZCcgfSxcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaGFuZGxlUXJDb2RlUmVkaXJlY3Rpb24oKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhhbmRsZVFyQ29kZVJlZGlyZWN0aW9uKClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVFyQ29kZVJlZGlyZWN0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKGFzeW5jIChwYXJhbXMpID0+IHtcbiAgICAgIGlmIChwYXJhbXNbJ3FyY29kZSddICYmIHBhcmFtc1sncXJjb2RlJ10gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9yZW50aW5nL3FyLWNvZGUnXSwge1xuICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7IHFyY29kZTogcGFyYW1zWydxcmNvZGUnXSB9LFxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wYWdlU3RhdGUgPSB7IHN0YXRlOiAnbG9hZGluZ19maW5pc2hlZCcgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiIsICJAaWYgKHBhZ2VTdGF0ZS5zdGF0ZSA9PT0gJ2xvYWRpbmdfc3RhcnRlZCcpIHtcbjxpb24tY29udGVudCBjbGFzcz1cImlvbi1wYWRkaW5nXCI+XG4gIDxkaXYgY2xhc3M9XCJjZW50ZXJcIj5cbiAgICA8aW9uLXNwaW5uZXIgY29sb3I9XCJwcmltYXJ5XCI+PC9pb24tc3Bpbm5lcj5cbiAgPC9kaXY+XG48L2lvbi1jb250ZW50PlxufSBAZWxzZSB7XG48YXBwLWhlYWRlcj48L2FwcC1oZWFkZXI+XG48aW9uLWNvbnRlbnQgY2xhc3M9XCJpb24tcGFkZGluZ1wiPlxuICA8aW9uLXJvdyBjbGFzcz1cImlvbi1qdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgPGlvbi1jb2wgc2l6ZT1cIjEyXCIgc2l6ZS1tZD1cIjhcIiBzaXplLWxnPVwiNlwiPlxuICAgICAgPGgxPnt7ICdiaWtlLW51bWJlci5lbnRlci1udW1iZXInIHwgdHJhbnNsYXRlIH19PC9oMT5cbiAgICAgIDxwPnt7ICdiaWtlLW51bWJlci5lbnRlci1udW1iZXItZGVzY3JpcHRpb24nIHwgdHJhbnNsYXRlIH19PC9wPlxuICAgICAgPGlvbi1zZWFyY2hiYXJcbiAgICAgICAgaWQ9XCJiaWtlLW51bWJlclwiXG4gICAgICAgIFtkZWJvdW5jZV09XCI1MDBcIlxuICAgICAgICB0eXBlPVwidGVsXCJcbiAgICAgICAgaW5wdXRtb2RlPVwibnVtZXJpY1wiXG4gICAgICAgIHBhdHRlcm49XCJbMC05XSpcIlxuICAgICAgICBzZWFyY2gtaWNvbj1cInNlYXJjaC1vdXRsaW5lXCJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cIidiaWtlLW51bWJlci5udW1iZXInIHwgdHJhbnNsYXRlXCJcbiAgICAgICAgKGlvbklucHV0KT1cImhhbmRsZUlucHV0KCRldmVudClcIlxuICAgICAgICAoaW9uRm9jdXMpPVwiaGFuZGxlRm9jdXMoKVwiXG4gICAgICAgIChwYXN0ZSk9XCJwcmV2ZW50UGFzdGUoJGV2ZW50KVwiXG4gICAgICAgIChrZXlwcmVzcyk9XCJvbktleVByZXNzKCRldmVudClcIlxuICAgICAgICBbbmdDbGFzc109XCJbJ2VjbC1zZWFyY2hiYXInLCAnc2VhcmNoaW5nJyA9PT0gYmlrZU51bWJlclNlYXJjaFN0YXRlLnN0YXRlID8gJ2VjbC1zZWFyY2hiYXJfX3NlYXJjaGluZycgOiAnJ11cIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZWNsLXNlYXJjaGJhci1pY29uXCI+XG4gICAgICAgICAgPGlvbi1zcGlubmVyXG4gICAgICAgICAgICBuYW1lPVwibGluZXNcIlxuICAgICAgICAgICAgKm5nSWY9XCJiaWtlTnVtYmVyU2VhcmNoU3RhdGUuc3RhdGUgPT09ICdzZWFyY2hpbmcnXCJcbiAgICAgICAgICA+PC9pb24tc3Bpbm5lcj5cbiAgICAgICAgICA8aW9uLWljb25cbiAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICBjb2xvcj1cIm1lZGl1bVwiXG4gICAgICAgICAgICAqbmdJZj1cIlsnaW5pdGlhbCddLmluY2x1ZGVzKGJpa2VOdW1iZXJTZWFyY2hTdGF0ZS5zdGF0ZSkgXCJcbiAgICAgICAgICAgIG5hbWU9XCJzZWFyY2gtb3V0bGluZVwiXG4gICAgICAgICAgPjwvaW9uLWljb24+XG4gICAgICAgICAgPGlvbi1pY29uXG4gICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgY29sb3I9XCJtZWRpdW1cIlxuICAgICAgICAgICAgKm5nSWY9XCJbJ25vdEZvdW5kJ10uaW5jbHVkZXMoYmlrZU51bWJlclNlYXJjaFN0YXRlLnN0YXRlKSBcIlxuICAgICAgICAgICAgbmFtZT1cImFsZXJ0LWNpcmNsZS1vdXRsaW5lXCJcbiAgICAgICAgICA+PC9pb24taWNvbj5cbiAgICAgICAgICA8aW9uLWljb25cbiAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICBjb2xvcj1cIm1lZGl1bVwiXG4gICAgICAgICAgICAqbmdJZj1cIlsnZm91bmQnLCAncmVudGluZyddLmluY2x1ZGVzKGJpa2VOdW1iZXJTZWFyY2hTdGF0ZS5zdGF0ZSkgXCJcbiAgICAgICAgICAgIG5hbWU9XCJjaGVja21hcmstb3V0bGluZVwiXG4gICAgICAgICAgPjwvaW9uLWljb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9pb24tc2VhcmNoYmFyPlxuXG4gICAgICBAaWYgKGJpa2VOdW1iZXJTZWFyY2hTdGF0ZS5zdGF0ZSA9PT0gJ3NlYXJjaGluZycpIHtcbiAgICAgIDxwPnt7ICdiaWtlLW51bWJlci5zZWFyY2hpbmcnIHwgdHJhbnNsYXRlIH19PC9wPlxuICAgICAgfSBAaWYgKGJpa2VOdW1iZXJTZWFyY2hTdGF0ZS5zdGF0ZSA9PT0gJ25vdEZvdW5kJykge1xuICAgICAgPHA+e3sgJ2Jpa2UtbnVtYmVyLm5vdC1mb3VuZCcgfCB0cmFuc2xhdGUgfX08L3A+XG4gICAgICB9IEBpZiAoYmlrZU51bWJlclNlYXJjaFN0YXRlLnN0YXRlID09PSAnZm91bmQnIHx8XG4gICAgICBiaWtlTnVtYmVyU2VhcmNoU3RhdGUuc3RhdGUgPT09ICdyZW50aW5nJykge1xuICAgICAgPGlvbi1saXN0IGxpbmVzPVwibm9uZVwiPlxuICAgICAgICA8aW9uLWl0ZW0+XG4gICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJiYXR0ZXJ5LWZ1bGwtb3V0bGluZVwiIHNsb3Q9XCJzdGFydFwiPjwvaW9uLWljb24+XG4gICAgICAgICAgPGlvbi1sYWJlbFxuICAgICAgICAgICAgPnt7ICdiaWtlLW51bWJlci5iYXR0ZXJ5LWluZm8nIHwgdHJhbnNsYXRlOiB7IHBlcmNlbnQ6XG4gICAgICAgICAgICBiaWtlTnVtYmVyU2VhcmNoU3RhdGUudmVoaWNsZS5iYXR0ZXJ5X3ZhZS5wZXJjZW50LCBkaXN0YW5jZTpcbiAgICAgICAgICAgIChiaWtlTnVtYmVyU2VhcmNoU3RhdGUudmVoaWNsZS5iYXR0ZXJ5X3ZhZS5yZW1haW5pbmdfZGlzdGFuY2UgL1xuICAgICAgICAgICAgMTAwMCkudG9GaXhlZCgxKSB9IH19PC9pb24tbGFiZWxcbiAgICAgICAgICA+XG4gICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICAgIDxpb24taXRlbVxuICAgICAgICAgIGNvbG9yPVwiZGFuZ2VyXCJcbiAgICAgICAgICAqbmdJZj1cIiFiaWtlTnVtYmVyU2VhcmNoU3RhdGUudmVoaWNsZS5yZW50YWJsZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImNsb3NlLW91dGxpbmVcIiBzbG90PVwic3RhcnRcIj48L2lvbi1pY29uPlxuICAgICAgICAgIDxpb24tbGFiZWw+e3sgJ2Jpa2UtbnVtYmVyLm5vdC1hdmFpbGFibGUnIHwgdHJhbnNsYXRlIH19PC9pb24tbGFiZWw+XG4gICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICA8L2lvbi1saXN0PlxuICAgICAgfVxuICAgICAgPGlvbi1idXR0b25cbiAgICAgICAgaWQ9XCJEcmluZ1RvXCJcbiAgICAgICAgZXhwYW5kPVwiZnVsbFwiXG4gICAgICAgIHNoYXBlPVwicm91bmRcIlxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICBbZGlzYWJsZWRdPVwiIWNhblN0YXJ0UmVudGluZygpXCJcbiAgICAgICAgKGNsaWNrKT1cInN0YXJ0UmVudGluZygpXCJcbiAgICAgICAgY2xhc3M9XCJpb24tbWFyZ2luLXRvcFwiXG4gICAgICAgID57eyAnYmlrZS1udW1iZXIuc3RhcnQtcmVudGluZycgfCB0cmFuc2xhdGUgfX08L2lvbi1idXR0b25cbiAgICAgID5cblxuICAgICAgQGlmIChhcHBTdGF0ZT8uc3RhdGUgPT09ICduZXdfY3ljbGlzdCcpIHtcbiAgICAgIDxpb24tcm93IGNsYXNzPVwiaW9uLWp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgPGlvbi1jb2wgc2l6ZT1cIjEyXCIgc2l6ZS1tZD1cIjZcIiBzaXplLWxnPVwiNFwiPlxuICAgICAgICAgIDxpb24tYnV0dG9uXG4gICAgICAgICAgICBleHBhbmQ9XCJibG9ja1wiXG4gICAgICAgICAgICBmaWxsPVwiY2xlYXJcIlxuICAgICAgICAgICAgc2hhcGU9XCJyb3VuZFwiXG4gICAgICAgICAgICBbcm91dGVyTGlua109XCJbJy9tYXAnXVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3sgJ2Jpa2UtbnVtYmVyLmRpc2NvdmVyLXN0YXRpb25zJyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICAgIDwvaW9uLWJ1dHRvbj5cbiAgICAgICAgPC9pb24tY29sPlxuICAgICAgPC9pb24tcm93PlxuICAgICAgfSBAaWYgKGdlb2xvY1N0YXRlPy5zdGF0ZSA9PT0gJ2xpdmVfcG9zaXRpb24nIHx8IGdlb2xvY1N0YXRlPy5zdGF0ZSA9PT1cbiAgICAgICd1bmlxdWVfcG9zaXRpb24nKSB7XG4gICAgICA8aHIgLz5cbiAgICAgIDxhcHAtbmVhcmVzdC12ZWhpY2xlcz48L2FwcC1uZWFyZXN0LXZlaGljbGVzPlxuICAgICAgfSBAZWxzZSB7XG4gICAgICA8aHIgLz5cbiAgICAgIDxpb24taXRlbSBsaW5lcz1cIm5vbmVcIiBjbGFzcz1cImVjbC1pb25pdGVtX3RpdGxlXCI+XG4gICAgICAgIDxoMj57eyAnbmVhcmVzdF92ZWhpY2xlcy50aXRsZScgfCB0cmFuc2xhdGUgfX08L2gyPlxuICAgICAgPC9pb24taXRlbT5cbiAgICAgIDxkaXYgY2xhc3M9XCJpb24tbWFyZ2luXCIgaWQ9XCJEcmluZ0Zyb21cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImlvbi1mbG9hdC1sZWZ0XCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPVwiYXNzZXRzL3N2Zy9kcmluZ19kcmluZy5zdmdcIlxuICAgICAgICAgICAgY2xhc3M9XCJpb24tbWFyZ2luLWVuZFwiXG4gICAgICAgICAgICBhbHQ9XCJ7eyAnYmlrZS1udW1iZXIuYmlrZWJlbGwtaW1hZ2UnIHwgdHJhbnNsYXRlIH19XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGgxIGNsYXNzPVwicGFjaWZpY28tcmVndWxhclwiPkRyaW5nIERyaW5nITwvaDE+XG4gICAgICAgIDxwPlxuICAgICAgICAgIHt7ICdiaWtlLW51bWJlci5sb2NhdGlvbi1yZXF1ZXN0LW1lc3NhZ2UnIHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgPGlvbi1idXR0b25cbiAgICAgICAgICAgIGNsYXNzPVwiaW9uLWZsb2F0LXJpZ2h0IGlvbi1tYXJnaW4tdmVydGljYWxcIlxuICAgICAgICAgICAgZmlsbD1cIm91dGxpbmVcIlxuICAgICAgICAgICAgY29sb3I9XCJkYXJrXCJcbiAgICAgICAgICAgIChjbGljayk9XCJyZXF1ZXN0TG9jYXRpb24oKVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJsb2NhdGUtb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICB7eyAnYmlrZS1udW1iZXIucmVxdWVzdC1sb2NhdGlvbicgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgICA8L2lvbi1idXR0b24+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgIDwvaW9uLWNvbD5cbiAgPC9pb24tcm93PlxuPC9pb24tY29udGVudD5cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDQSxJQUFBLHlCQUFBLEdBQUEsZUFBQSxDQUFBLEVBQWlDLEdBQUEsT0FBQSxDQUFBO0FBRTdCLElBQUEsb0JBQUEsR0FBQSxlQUFBLENBQUE7QUFDRixJQUFBLHVCQUFBLEVBQU07Ozs7O0FBd0JFLElBQUEsb0JBQUEsR0FBQSxlQUFBLEVBQUE7Ozs7O0FBSUEsSUFBQSxvQkFBQSxHQUFBLFlBQUEsRUFBQTs7Ozs7QUFNQSxJQUFBLG9CQUFBLEdBQUEsWUFBQSxFQUFBOzs7OztBQU1BLElBQUEsb0JBQUEsR0FBQSxZQUFBLEVBQUE7Ozs7O0FBVUosSUFBQSx5QkFBQSxHQUFBLEdBQUE7QUFBRyxJQUFBLGlCQUFBLENBQUE7O0FBQXlDLElBQUEsdUJBQUE7OztBQUF6QyxJQUFBLG9CQUFBO0FBQUEsSUFBQSw0QkFBQSxzQkFBQSxHQUFBLEdBQUEsdUJBQUEsQ0FBQTs7Ozs7QUFFSCxJQUFBLHlCQUFBLEdBQUEsR0FBQTtBQUFHLElBQUEsaUJBQUEsQ0FBQTs7QUFBeUMsSUFBQSx1QkFBQTs7O0FBQXpDLElBQUEsb0JBQUE7QUFBQSxJQUFBLDRCQUFBLHNCQUFBLEdBQUEsR0FBQSx1QkFBQSxDQUFBOzs7OztBQWFELElBQUEseUJBQUEsR0FBQSxZQUFBLEVBQUE7QUFJRSxJQUFBLG9CQUFBLEdBQUEsWUFBQSxFQUFBO0FBQ0EsSUFBQSx5QkFBQSxHQUFBLFdBQUE7QUFBVyxJQUFB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QSxpQkFBQSxDQUFBLEdBQUEsT0FBQSxHQUFBLE1BQUEsR0FBQSxRQUFBLENBQUEsQ0FBQSxHQUFBLGFBQUEsR0FBQSxDQUFBLEdBQUEsUUFBQSxHQUFBLENBQUEsU0FBQSxTQUFBLEdBQUEsQ0FBQSxHQUFBLDRCQUFBLEdBQUEsQ0FBQSxRQUFBLE1BQUEsV0FBQSxLQUFBLFdBQUEsR0FBQSxHQUFBLENBQUEsTUFBQSxlQUFBLFFBQUEsT0FBQSxhQUFBLFdBQUEsV0FBQSxVQUFBLGVBQUEsa0JBQUEsR0FBQSxZQUFBLFlBQUEsU0FBQSxZQUFBLFlBQUEsZUFBQSxTQUFBLEdBQUEsQ0FBQSxHQUFBLG9CQUFBLEdBQUEsQ0FBQSxRQUFBLFNBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxRQUFBLFNBQUEsU0FBQSxVQUFBLFFBQUEsa0JBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxRQUFBLFNBQUEsU0FBQSxVQUFBLFFBQUEsd0JBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxRQUFBLFNBQUEsU0FBQSxVQUFBLFFBQUEscUJBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxTQUFBLE1BQUEsR0FBQSxDQUFBLE1BQUEsV0FBQSxVQUFBLFFBQUEsU0FBQSxTQUFBLFNBQUEsV0FBQSxHQUFBLGtCQUFBLEdBQUEsU0FBQSxVQUFBLEdBQUEsQ0FBQSxRQUFBLE9BQUEsR0FBQSxDQUFBLFFBQUEsU0FBQSxTQUFBLFVBQUEsUUFBQSxnQkFBQSxHQUFBLENBQUEsUUFBQSxTQUFBLFNBQUEsVUFBQSxRQUFBLHNCQUFBLEdBQUEsQ0FBQSxRQUFBLFNBQUEsU0FBQSxVQUFBLFFBQUEsbUJBQUEsR0FBQSxDQUFBLFFBQUEsd0JBQUEsUUFBQSxPQUFBLEdBQUEsQ0FBQSxTQUFBLFVBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxTQUFBLFFBQUEsR0FBQSxDQUFBLFFBQUEsaUJBQUEsUUFBQSxPQUFBLEdBQUEsQ0FBQSxRQUFBLE1BQUEsV0FBQSxLQUFBLFdBQUEsR0FBQSxHQUFBLENBQUEsVUFBQSxTQUFBLFFBQUEsU0FBQSxTQUFBLFNBQUEsR0FBQSxZQUFBLEdBQUEsQ0FBQSxTQUFBLFFBQUEsR0FBQSxtQkFBQSxHQUFBLENBQUEsTUFBQSxhQUFBLEdBQUEsWUFBQSxHQUFBLENBQUEsR0FBQSxnQkFBQSxHQUFBLENBQUEsT0FBQSw4QkFBQSxHQUFBLGtCQUFBLEdBQUEsS0FBQSxHQUFBLENBQUEsR0FBQSxrQkFBQSxHQUFBLENBQUEsUUFBQSxXQUFBLFNBQUEsUUFBQSxHQUFBLG1CQUFBLHVCQUFBLEdBQUEsT0FBQSxHQUFBLENBQUEsUUFBQSxnQkFBQSxDQUFBLEdBQUEsVUFBQSxTQUFBLHdCQUFBLElBQUEsS0FBQTtBQUFBLE1BQUEsS0FBQSxHQUFBO0FDekczQixJQUFBLHFCQUFBLEdBQUEsdUNBQUEsR0FBQSxHQUFBLGVBQUEsQ0FBQSxFQUE2QyxHQUFBLHVDQUFBLElBQUEsRUFBQTs7O0FBQTdDLElBQUEsd0JBQUEsSUFBQSxVQUFBLFVBQUEsb0JBQUEsSUFBQSxDQUFBOzs7RUR1Rkk7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQVk7RUFBQTtFQUNaO0VBQ0E7RUFBZTtFQUNmO0VBQ0E7RUFBWTtBQUFBLEdBQUEsUUFBQSxDQUFBLHlSQUFBLEVBQUEsQ0FBQTtBQUdWLElBQU8saUJBQVA7O3NFQUFPLGdCQUFjLENBQUE7VUF2QjFCO3VCQUNXLG1CQUFpQixTQUdsQjtNQUNQO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO09BQ0QsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBQUEsUUFBQSxDQUFBLGdUQUFBLEVBQUEsQ0FBQTs7VUFrQkU7V0FBTyxRQUFROzs7OzZFQWhCUCxnQkFBYyxFQUFBLFdBQUEsa0JBQUEsVUFBQSx5REFBQSxZQUFBLElBQUEsQ0FBQTtBQUFBLEdBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
