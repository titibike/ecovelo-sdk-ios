import {
  SearchWrapperService,
  SearchbarComponent
} from "./chunk-EIEXZXG7.js";
import {
  RentingService
} from "./chunk-5RMBP5UX.js";
import {
  StationWrapperService
} from "./chunk-5KXLLE34.js";
import "./chunk-S5TR5TQN.js";
import "./chunk-OEYRANOA.js";
import "./chunk-RFEPADPA.js";
import "./chunk-Y4K6NO5T.js";
import "./chunk-WJQU3GMM.js";
import "./chunk-CHFOG66O.js";
import "./chunk-RAVV2QIY.js";
import "./chunk-T6WE2PS5.js";
import {
  AccountService,
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
  arrowBackOutline,
  batteryDead,
  batteryFull,
  batteryFullOutline,
  batteryHalf,
  closeOutline,
  informationCircleOutline
} from "./chunk-3E6DEK7U.js";
import {
  StorageService
} from "./chunk-U6SJAXLK.js";
import {
  CommonModule,
  Component,
  FormsModule,
  IonButton,
  IonCol,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonRow,
  IonSpinner,
  IonText,
  NavController,
  NgForOf,
  NgIf,
  TranslateModule,
  TranslatePipe,
  setClassMetadata,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
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

// src/app/pages/search/search.page.ts
function SearchPage_ion_row_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-row", 2)(1, "ion-col", 3);
    \u0275\u0275element(2, "ion-spinner", 4);
    \u0275\u0275elementEnd()();
  }
}
function SearchPage_ion_row_3_ion_item_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item", 9);
    \u0275\u0275listener("click", function SearchPage_ion_row_3_ion_item_7_Template_ion_item_click_0_listener() {
      const station_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openStation(station_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const station_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", station_r2.name, " ");
  }
}
function SearchPage_ion_row_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-row", 2)(1, "ion-col", 5)(2, "ion-text", 6)(3, "h6");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "ion-list", 7);
    \u0275\u0275template(7, SearchPage_ion_row_3_ion_item_7_Template, 2, 1, "ion-item", 8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "search.stations"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.searchState.results.stations);
  }
}
function SearchPage_ion_row_4_ion_item_7_ion_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 17);
  }
}
function SearchPage_ion_row_4_ion_item_7_ion_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 18);
  }
}
function SearchPage_ion_row_4_ion_item_7_h4_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vehicle_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", vehicle_r5.number, " ");
  }
}
function SearchPage_ion_row_4_ion_item_7_h5_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h5", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vehicle_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", vehicle_r5.number, " ");
  }
}
function SearchPage_ion_row_4_ion_item_7_h6_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h6", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vehicle_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", vehicle_r5.number, " ");
  }
}
function SearchPage_ion_row_4_ion_item_7_ion_label_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-label")(1, "p", 20);
    \u0275\u0275element(2, "ion-spinner", 4);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "bike-number.searching"), " ");
  }
}
function SearchPage_ion_row_4_ion_item_7_ion_label_8_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const vehicle_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((vehicle_r5 == null ? null : vehicle_r5.id) ? ctx_r2.detailedVehicles.get(vehicle_r5.id) || vehicle_r5 : vehicle_r5).battery_vae.percent, "% ");
  }
}
function SearchPage_ion_row_4_ion_item_7_ion_label_8_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, " -- ");
    \u0275\u0275elementContainerEnd();
  }
}
function SearchPage_ion_row_4_ion_item_7_ion_label_8_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const vehicle_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", (((vehicle_r5 == null ? null : vehicle_r5.id) ? ctx_r2.detailedVehicles.get(vehicle_r5.id) || vehicle_r5 : vehicle_r5).battery_vae.remaining_distance / 1e3).toFixed(1), "km) ");
  }
}
function SearchPage_ion_row_4_ion_item_7_ion_label_8_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275element(1, "ion-icon", 24);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "search.not_rentable"), " ");
  }
}
function SearchPage_ion_row_4_ion_item_7_ion_label_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-label")(1, "p");
    \u0275\u0275element(2, "ion-icon", 21);
    \u0275\u0275template(3, SearchPage_ion_row_4_ion_item_7_ion_label_8_ng_container_3_Template, 2, 1, "ng-container", 15)(4, SearchPage_ion_row_4_ion_item_7_ion_label_8_ng_container_4_Template, 2, 0, "ng-container", 15)(5, SearchPage_ion_row_4_ion_item_7_ion_label_8_ng_container_5_Template, 2, 1, "ng-container", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, SearchPage_ion_row_4_ion_item_7_ion_label_8_p_6_Template, 4, 3, "p", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    const vehicle_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("name", ctx_r2.getBatteryIcon((vehicle_r5 == null ? null : vehicle_r5.id) ? ctx_r2.detailedVehicles.get(vehicle_r5.id) || vehicle_r5 : vehicle_r5))("color", ctx_r2.getBatteryColor((vehicle_r5 == null ? null : vehicle_r5.id) ? ctx_r2.detailedVehicles.get(vehicle_r5.id) || vehicle_r5 : vehicle_r5));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_6_0 = ((vehicle_r5 == null ? null : vehicle_r5.id) ? ctx_r2.detailedVehicles.get(vehicle_r5.id) || vehicle_r5 : vehicle_r5).battery_vae) == null ? null : tmp_6_0.percent) !== void 0 && ((tmp_6_0 = ((vehicle_r5 == null ? null : vehicle_r5.id) ? ctx_r2.detailedVehicles.get(vehicle_r5.id) || vehicle_r5 : vehicle_r5).battery_vae) == null ? null : tmp_6_0.percent) !== null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_7_0 = ((vehicle_r5 == null ? null : vehicle_r5.id) ? ctx_r2.detailedVehicles.get(vehicle_r5.id) || vehicle_r5 : vehicle_r5).battery_vae) == null ? null : tmp_7_0.percent) === void 0 || ((tmp_7_0 = ((vehicle_r5 == null ? null : vehicle_r5.id) ? ctx_r2.detailedVehicles.get(vehicle_r5.id) || vehicle_r5 : vehicle_r5).battery_vae) == null ? null : tmp_7_0.percent) === null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_8_0 = ((vehicle_r5 == null ? null : vehicle_r5.id) ? ctx_r2.detailedVehicles.get(vehicle_r5.id) || vehicle_r5 : vehicle_r5).battery_vae) == null ? null : tmp_8_0.remaining_distance);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !((vehicle_r5 == null ? null : vehicle_r5.id) ? ctx_r2.detailedVehicles.get(vehicle_r5.id) || vehicle_r5 : vehicle_r5).rentable);
  }
}
function SearchPage_ion_row_4_ion_item_7_ion_label_9_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275element(1, "ion-icon", 24);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "search.not_rentable"), " ");
  }
}
function SearchPage_ion_row_4_ion_item_7_ion_label_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-label")(1, "p", 20);
    \u0275\u0275element(2, "ion-icon", 25);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SearchPage_ion_row_4_ion_item_7_ion_label_9_p_5_Template, 4, 3, "p", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vehicle_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "search.no_info"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((vehicle_r5 == null ? null : vehicle_r5.id) ? ctx_r2.detailedVehicles.get(vehicle_r5.id) || vehicle_r5 : vehicle_r5).rentable === false);
  }
}
function SearchPage_ion_row_4_ion_item_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item")(1, "ion-note", 11);
    \u0275\u0275template(2, SearchPage_ion_row_4_ion_item_7_ion_icon_2_Template, 1, 0, "ion-icon", 12)(3, SearchPage_ion_row_4_ion_item_7_ion_icon_3_Template, 1, 0, "ion-icon", 13)(4, SearchPage_ion_row_4_ion_item_7_h4_4_Template, 2, 1, "h4", 14)(5, SearchPage_ion_row_4_ion_item_7_h5_5_Template, 2, 1, "h5", 14)(6, SearchPage_ion_row_4_ion_item_7_h6_6_Template, 2, 1, "h6", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, SearchPage_ion_row_4_ion_item_7_ion_label_7_Template, 5, 3, "ion-label", 15)(8, SearchPage_ion_row_4_ion_item_7_ion_label_8_Template, 7, 6, "ion-label", 15)(9, SearchPage_ion_row_4_ion_item_7_ion_label_9_Template, 6, 4, "ion-label", 15);
    \u0275\u0275elementStart(10, "ion-button", 16);
    \u0275\u0275listener("click", function SearchPage_ion_row_4_ion_item_7_Template_ion_button_click_10_listener() {
      const vehicle_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.rentVehicle(vehicle_r5));
    });
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const vehicle_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", vehicle_r5.type === "scooter");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", vehicle_r5.type !== "scooter");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", vehicle_r5.number < 1e3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", vehicle_r5.number > 999 && vehicle_r5.number < 1e4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", vehicle_r5.number > 9999);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isVehicleLoading(vehicle_r5));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isVehicleLoading(vehicle_r5) && ((vehicle_r5 == null ? null : vehicle_r5.id) ? ctx_r2.detailedVehicles.get(vehicle_r5.id) || vehicle_r5 : vehicle_r5).battery_vae);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isVehicleLoading(vehicle_r5) && !((vehicle_r5 == null ? null : vehicle_r5.id) ? ctx_r2.detailedVehicles.get(vehicle_r5.id) || vehicle_r5 : vehicle_r5).battery_vae);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.isVehicleLoading(vehicle_r5) || ((vehicle_r5 == null ? null : vehicle_r5.id) ? ctx_r2.detailedVehicles.get(vehicle_r5.id) || vehicle_r5 : vehicle_r5).rentable !== true || ctx_r2.accountService.hasBlockedReasons());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 10, "vehicle.unlock"), " ");
  }
}
function SearchPage_ion_row_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-row", 2)(1, "ion-col", 5)(2, "ion-text", 6)(3, "h6");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "ion-list", 7);
    \u0275\u0275template(7, SearchPage_ion_row_4_ion_item_7_Template, 13, 12, "ion-item", 10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "search.vehicles"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.searchState.results.vehicules);
  }
}
function SearchPage_ion_row_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-row", 2)(1, "ion-col", 26)(2, "ion-text");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "searchbar.no_results"), " ");
  }
}
var _SearchPage = class _SearchPage {
  constructor(navCtrl, storage, stationWrapperService, searchWrapperService, rentingService, accountService, vehiculesService) {
    this.navCtrl = navCtrl;
    this.storage = storage;
    this.stationWrapperService = stationWrapperService;
    this.searchWrapperService = searchWrapperService;
    this.rentingService = rentingService;
    this.accountService = accountService;
    this.vehiculesService = vehiculesService;
    this.stations = [];
    this.searchState = {
      state: "loading"
    };
    this.detailedVehicles = /* @__PURE__ */ new Map();
    this.loadingVehicles = /* @__PURE__ */ new Set();
    this.searchWrapperService.searchState.subscribe((state) => {
      this.searchState = state;
      if (state.state === "success") {
        const filteredVehicles = state.results.vehicules.filter((vehicule) => vehicule.status === "service");
        this.searchState = {
          state: "success",
          results: {
            stations: state.results.stations.filter((station) => station.status === "open"),
            vehicules: filteredVehicles
          }
        };
        filteredVehicles.forEach((vehicle) => {
          if (vehicle.id) {
            this.loadVehicleDetails(vehicle.id);
          }
        });
      }
    });
    addIcons({
      arrowBackOutline,
      batteryFull,
      batteryHalf,
      batteryDead,
      batteryFullOutline,
      closeOutline,
      informationCircleOutline
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const stationsData = yield this.storage.get("stations");
      this.stations = (stationsData == null ? void 0 : stationsData.data) || [];
      this.searchState = {
        state: "success",
        results: {
          stations: this.stations,
          vehicules: []
        }
      };
    });
  }
  handleSearch(query) {
    const searchTerm = query.toLowerCase().trim();
    if (!searchTerm || searchTerm === "" || searchTerm.length == 0) {
      this.searchState = {
        state: "success",
        results: {
          stations: this.stations,
          vehicules: []
        }
      };
      return;
    }
    this.searchWrapperService.search(searchTerm);
  }
  openStation(station) {
    this.navCtrl.navigateForward("/map", {
      animated: false
    }).then(() => {
      this.stationWrapperService.setStationState("station-selected", station);
    });
  }
  onSearchbarStateChange() {
    this.searchState = { state: "idle" };
  }
  getBatteryIcon(vehicle) {
    var _a;
    const percent = (_a = vehicle == null ? void 0 : vehicle.battery_vae) == null ? void 0 : _a.percent;
    if (percent === void 0 || percent === null) {
      return "battery-full-outline";
    }
    if (percent > 70)
      return "battery-full";
    if (percent > 30)
      return "battery-half";
    return "battery-dead";
  }
  getBatteryColor(vehicle) {
    var _a;
    const percent = (_a = vehicle == null ? void 0 : vehicle.battery_vae) == null ? void 0 : _a.percent;
    if (percent === void 0 || percent === null) {
      return "medium";
    }
    if (percent > 70)
      return "success";
    if (percent > 30)
      return "warning";
    return "danger";
  }
  rentVehicle(vehicle) {
    return __async(this, null, function* () {
      if (!vehicle) {
        return;
      }
      this.rentingService.startRenting(vehicle.id ? this.detailedVehicles.get(vehicle.id) || vehicle : vehicle);
    });
  }
  loadVehicleDetails(vehicleId) {
    if (!vehicleId || this.detailedVehicles.has(vehicleId) || this.loadingVehicles.has(vehicleId)) {
      return;
    }
    this.loadingVehicles.add(vehicleId);
    this.vehiculesService.retrieveVehicule({
      program: environment.program,
      id: vehicleId
    }).subscribe({
      next: (vehicle) => {
        if (vehicle && vehicleId) {
          this.detailedVehicles.set(vehicleId, vehicle);
        }
        this.loadingVehicles.delete(vehicleId);
      },
      error: (error) => {
        console.error("Error loading vehicle details:", error);
        this.loadingVehicles.delete(vehicleId);
      }
    });
  }
  isVehicleLoading(vehicle) {
    if (!(vehicle == null ? void 0 : vehicle.id)) {
      return false;
    }
    return this.loadingVehicles.has(vehicle.id);
  }
};
_SearchPage.\u0275fac = function SearchPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SearchPage)(\u0275\u0275directiveInject(NavController), \u0275\u0275directiveInject(StorageService), \u0275\u0275directiveInject(StationWrapperService), \u0275\u0275directiveInject(SearchWrapperService), \u0275\u0275directiveInject(RentingService), \u0275\u0275directiveInject(AccountService), \u0275\u0275directiveInject(VehiculesService));
};
_SearchPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchPage, selectors: [["app-search"]], decls: 6, vars: 5, consts: [[3, "stateChange", "searchQuery", "state"], ["class", "ion-margin-top", 4, "ngIf"], [1, "ion-margin-top"], ["size", "12", "size-md", "8", "size-lg", "6", 1, "ion-padding", "ion-text-center"], ["name", "crescent"], ["size", "12", "size-md", "8", "size-lg", "6"], ["color", "medium"], ["lines", "none"], ["button", "", 3, "click", 4, "ngFor", "ngForOf"], ["button", "", 3, "click"], [4, "ngFor", "ngForOf"], ["slot", "start", "color", "dark", 1, "ion-text-center"], ["src", "../../../../assets/svg/vehiculeType/scooter.svg", "size", "large", 4, "ngIf"], ["src", "../../../../assets/svg/fontawesome/tricycle-light.svg", "size", "large", 4, "ngIf"], ["class", "ion-no-margin", 4, "ngIf"], [4, "ngIf"], ["slot", "end", "shape", "round", "size", "medium", 3, "click", "disabled"], ["src", "../../../../assets/svg/vehiculeType/scooter.svg", "size", "large"], ["src", "../../../../assets/svg/fontawesome/tricycle-light.svg", "size", "large"], [1, "ion-no-margin"], [1, "ion-color-medium"], [3, "name", "color"], ["class", "ion-color-danger", 4, "ngIf"], [1, "ion-color-danger"], ["name", "close-outline"], ["name", "information-circle-outline"], ["size", "12", "size-md", "8", "size-lg", "6", 1, "ion-padding-start"]], template: function SearchPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-searchbar", 0);
    \u0275\u0275listener("stateChange", function SearchPage_Template_app_searchbar_stateChange_0_listener() {
      return ctx.onSearchbarStateChange();
    })("searchQuery", function SearchPage_Template_app_searchbar_searchQuery_0_listener($event) {
      return ctx.handleSearch($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "ion-content");
    \u0275\u0275template(2, SearchPage_ion_row_2_Template, 3, 0, "ion-row", 1)(3, SearchPage_ion_row_3_Template, 8, 4, "ion-row", 1)(4, SearchPage_ion_row_4_Template, 8, 4, "ion-row", 1)(5, SearchPage_ion_row_5_Template, 5, 3, "ion-row", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("state", ctx.searchState);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.searchState.state === "loading");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.searchState.state === "success" && ctx.searchState.results.stations.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.searchState.state === "success" && ctx.searchState.results.vehicules.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.searchState.state === "no_results");
  }
}, dependencies: [
  IonContent,
  CommonModule,
  NgForOf,
  NgIf,
  FormsModule,
  IonList,
  IonText,
  IonItem,
  IonNote,
  IonIcon,
  IonButton,
  IonSpinner,
  IonLabel,
  SearchbarComponent,
  IonRow,
  IonCol,
  TranslateModule,
  TranslatePipe
], styles: ["\n\nion-content[_ngcontent-%COMP%] {\n  --padding-top: calc(max(var(--ion-safe-area-top), 24px) + 76px) !important;\n  --padding-start: 16px;\n  --background: white;\n}\nion-item[_ngcontent-%COMP%] {\n  --background: white;\n}\nion-row[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1000px;\n}\nion-list[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  width: 50px;\n}\nion-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\nion-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\nion-list[_ngcontent-%COMP%]   .ecl-padding-start[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n}\nh6[_ngcontent-%COMP%] {\n  margin: 0.5rem 0;\n  padding: 0 1rem;\n}\nion-spinner[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=search.page.css.map */"] });
var SearchPage = _SearchPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchPage, [{
    type: Component,
    args: [{ selector: "app-search", imports: [
      IonContent,
      CommonModule,
      FormsModule,
      IonList,
      IonText,
      IonItem,
      IonNote,
      IonIcon,
      IonButton,
      IonSpinner,
      IonLabel,
      SearchbarComponent,
      IonRow,
      IonCol,
      TranslateModule
    ], template: `<app-searchbar
  [state]="searchState"
  (stateChange)="onSearchbarStateChange()"
  (searchQuery)="handleSearch($event)"
></app-searchbar>

<ion-content>
  <!-- Loading State -->
  <ion-row *ngIf="searchState.state === 'loading'" class="ion-margin-top">
    <ion-col
      size="12"
      size-md="8"
      size-lg="6"
      class="ion-padding ion-text-center"
    >
      <ion-spinner name="crescent"></ion-spinner>
    </ion-col>
  </ion-row>

  <!-- Stations Results -->
  <ion-row
    class="ion-margin-top"
    *ngIf="
      searchState.state === 'success' &&
      searchState.results.stations.length > 0
    "
  >
    <ion-col size="12" size-md="8" size-lg="6">
      <ion-text color="medium">
        <h6>{{ 'search.stations' | translate }}</h6>
      </ion-text>
      <ion-list lines="none">
        <ion-item
          button
          *ngFor="let station of searchState.results.stations"
          (click)="openStation(station)"
        >
          {{ station.name }}
        </ion-item>
      </ion-list>
    </ion-col>
  </ion-row>

  <!-- Vehicles Results -->
  <ion-row
    class="ion-margin-top"
    *ngIf="
      searchState.state === 'success' &&
      searchState.results.vehicules.length > 0
    "
  >
    <ion-col size="12" size-md="8" size-lg="6">
      <ion-text color="medium">
        <h6>{{ 'search.vehicles' | translate }}</h6>
      </ion-text>
      <ion-list lines="none">
        <ion-item *ngFor="let vehicle of searchState.results.vehicules">
          <ion-note slot="start" color="dark" class="ion-text-center">
            <ion-icon
              *ngIf="vehicle.type === 'scooter'"
              src="../../../../assets/svg/vehiculeType/scooter.svg"
              size="large"
            ></ion-icon>
            <ion-icon
              *ngIf="vehicle.type !== 'scooter'"
              src="../../../../assets/svg/fontawesome/tricycle-light.svg"
              size="large"
            ></ion-icon>

            <h4 *ngIf="vehicle.number! < 1000" class="ion-no-margin">
              {{ vehicle.number }}
            </h4>
            <h5
              *ngIf="vehicle.number! > 999 && vehicle.number! < 10000"
              class="ion-no-margin"
            >
              {{ vehicle.number }}
            </h5>
            <h6 *ngIf="vehicle.number! > 9999" class="ion-no-margin">
              {{ vehicle.number }}
            </h6>
          </ion-note>

          <!-- Loading state for vehicle details -->
          <ion-label *ngIf="isVehicleLoading(vehicle)">
            <p class="ion-color-medium">
              <ion-spinner name="crescent"></ion-spinner>
              {{ 'bike-number.searching' | translate }}
            </p>
          </ion-label>

          <!-- Vehicle details with battery info -->
          <ion-label
            *ngIf="!isVehicleLoading(vehicle) && (vehicle?.id ? (detailedVehicles.get(vehicle.id!) || vehicle) : vehicle).battery_vae"
          >
            <p>
              <ion-icon
                [name]="getBatteryIcon(vehicle?.id ? (detailedVehicles.get(vehicle.id!) || vehicle) : vehicle)"
                [color]="getBatteryColor(vehicle?.id ? (detailedVehicles.get(vehicle.id!) || vehicle) : vehicle)"
              ></ion-icon>
              <ng-container
                *ngIf="(vehicle?.id ? (detailedVehicles.get(vehicle.id!) || vehicle) : vehicle).battery_vae?.percent !== undefined && (vehicle?.id ? (detailedVehicles.get(vehicle.id!) || vehicle) : vehicle).battery_vae?.percent !== null"
              >
                {{ (vehicle?.id ? (detailedVehicles.get(vehicle.id!) || vehicle)
                : vehicle).battery_vae.percent }}%
              </ng-container>
              <ng-container
                *ngIf="(vehicle?.id ? (detailedVehicles.get(vehicle.id!) || vehicle) : vehicle).battery_vae?.percent === undefined || (vehicle?.id ? (detailedVehicles.get(vehicle.id!) || vehicle) : vehicle).battery_vae?.percent === null"
              >
                --
              </ng-container>
              <ng-container
                *ngIf="(vehicle?.id ? (detailedVehicles.get(vehicle.id!) || vehicle) : vehicle).battery_vae?.remaining_distance"
              >
                ({{ ((vehicle?.id ? (detailedVehicles.get(vehicle.id!) ||
                vehicle) : vehicle).battery_vae.remaining_distance /
                1000).toFixed(1) }}km)
              </ng-container>
            </p>
            <p
              *ngIf="!(vehicle?.id ? (detailedVehicles.get(vehicle.id!) || vehicle) : vehicle).rentable"
              class="ion-color-danger"
            >
              <ion-icon name="close-outline"></ion-icon>
              {{ 'search.not_rentable' | translate }}
            </p>
          </ion-label>

          <!-- No battery info available -->
          <ion-label
            *ngIf="!isVehicleLoading(vehicle) && !(vehicle?.id ? (detailedVehicles.get(vehicle.id!) || vehicle) : vehicle).battery_vae"
          >
            <p class="ion-color-medium">
              <ion-icon name="information-circle-outline"></ion-icon>
              {{ 'search.no_info' | translate }}
            </p>
            <p
              *ngIf="(vehicle?.id ? (detailedVehicles.get(vehicle.id!) || vehicle) : vehicle).rentable === false"
              class="ion-color-danger"
            >
              <ion-icon name="close-outline"></ion-icon>
              {{ 'search.not_rentable' | translate }}
            </p>
          </ion-label>

          <ion-button
            slot="end"
            shape="round"
            size="medium"
            [disabled]="isVehicleLoading(vehicle) || (vehicle?.id ? (detailedVehicles.get(vehicle.id!) || vehicle) : vehicle).rentable !== true || accountService.hasBlockedReasons()"
            (click)="rentVehicle(vehicle)"
          >
            {{ 'vehicle.unlock' | translate }}
          </ion-button>
        </ion-item>
      </ion-list>
    </ion-col>
  </ion-row>

  <!-- No Results -->
  <ion-row *ngIf="searchState.state === 'no_results'" class="ion-margin-top">
    <ion-col size="12" size-md="8" size-lg="6" class="ion-padding-start">
      <ion-text> {{ 'searchbar.no_results' | translate }} </ion-text>
    </ion-col>
  </ion-row>
</ion-content>
`, styles: ["/* src/app/pages/search/search.page.scss */\nion-content {\n  --padding-top: calc(max(var(--ion-safe-area-top), 24px) + 76px) !important;\n  --padding-start: 16px;\n  --background: white;\n}\nion-item {\n  --background: white;\n}\nion-row {\n  width: 100%;\n  max-width: 1000px;\n}\nion-list ion-note {\n  width: 50px;\n}\nion-list ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\nion-list ul li {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\nion-list .ecl-padding-start {\n  padding-left: 1rem;\n}\nh6 {\n  margin: 0.5rem 0;\n  padding: 0 1rem;\n}\nion-spinner {\n  margin-top: 2rem;\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=search.page.css.map */\n"] }]
  }], () => [{ type: NavController }, { type: StorageService }, { type: StationWrapperService }, { type: SearchWrapperService }, { type: RentingService }, { type: AccountService }, { type: VehiculesService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchPage, { className: "SearchPage", filePath: "src/app/pages/search/search.page.ts", lineNumber: 67 });
})();
export {
  SearchPage
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wYWdlcy9zZWFyY2gvc2VhcmNoLnBhZ2UudHMiLCAic3JjL2FwcC9wYWdlcy9zZWFyY2gvc2VhcmNoLnBhZ2UuaHRtbCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJ1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3JtcydcbmltcG9ydCB7XG4gIElvbkNvbnRlbnQsXG4gIElvbkxpc3QsXG4gIElvbkl0ZW0sXG4gIElvblJvdyxcbiAgSW9uQ29sLFxuICBJb25UZXh0LFxuICBJb25Ob3RlLFxuICBJb25JY29uLFxuICBJb25CdXR0b24sXG4gIElvblNwaW5uZXIsXG4gIElvbkxhYmVsLFxufSBmcm9tICdAaW9uaWMvYW5ndWxhci9zdGFuZGFsb25lJ1xuaW1wb3J0IHsgTmF2Q29udHJvbGxlciB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJ1xuaW1wb3J0IHtcbiAgYXJyb3dCYWNrT3V0bGluZSxcbiAgYmF0dGVyeUZ1bGwsXG4gIGJhdHRlcnlIYWxmLFxuICBiYXR0ZXJ5RGVhZCxcbiAgYmF0dGVyeUZ1bGxPdXRsaW5lLFxuICBjbG9zZU91dGxpbmUsXG4gIGluZm9ybWF0aW9uQ2lyY2xlT3V0bGluZSxcbn0gZnJvbSAnaW9uaWNvbnMvaWNvbnMnXG5pbXBvcnQgeyBhZGRJY29ucyB9IGZyb20gJ2lvbmljb25zJ1xuaW1wb3J0IHtcbiAgTGlzdFN0YXRpb24yMDBSZXNwb25zZUFsbE9mRGF0YUlubmVyLFxuICBMaXN0VmVoaWN1bGUyMDBSZXNwb25zZUFsbE9mRGF0YUlubmVyLFxuICBWZWhpY3VsZXNTZXJ2aWNlLFxufSBmcm9tICdzcmMvYXBpLWN5Y2xpc3QnXG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gJ3NyYy9hcHAvc2VydmljZXMvdXRpbHMvc3RvcmFnZS5zZXJ2aWNlJ1xuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICdzcmMvZW52aXJvbm1lbnRzL2Vudmlyb25tZW50J1xuaW1wb3J0IHsgU3RhdGlvbldyYXBwZXJTZXJ2aWNlIH0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy9hcGktd3JhcHBlcnMvc3RhdGlvbnMuc2VydmljZSdcbmltcG9ydCB7IFNlYXJjaGJhckNvbXBvbmVudCB9IGZyb20gJ3NyYy9hcHAvY29tcG9uZW50cy9zZWFyY2hiYXIvc2VhcmNoYmFyLmNvbXBvbmVudCdcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnXG5pbXBvcnQge1xuICBTZWFyY2hTdGF0ZSxcbiAgU2VhcmNoV3JhcHBlclNlcnZpY2UsXG59IGZyb20gJ3NyYy9hcHAvc2VydmljZXMvYXBpLXdyYXBwZXJzL3NlYXJjaC5zZXJ2aWNlJ1xuaW1wb3J0IHsgUmVudGluZ1NlcnZpY2UgfSBmcm9tICdzcmMvYXBwL3NlcnZpY2VzL2FwaS13cmFwcGVycy9yZW50aW5nLnNlcnZpY2UnXG5pbXBvcnQgeyBBY2NvdW50U2VydmljZSB9IGZyb20gJ3NyYy9hcHAvc2VydmljZXMvYXBpLXdyYXBwZXJzL2FjY291bnQuc2VydmljZSdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNlYXJjaCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWFyY2gucGFnZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2VhcmNoLnBhZ2Uuc2NzcyddLFxuICBpbXBvcnRzOiBbXG4gICAgSW9uQ29udGVudCxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgSW9uTGlzdCxcbiAgICBJb25UZXh0LFxuICAgIElvbkl0ZW0sXG4gICAgSW9uTm90ZSxcbiAgICBJb25JY29uLFxuICAgIElvbkJ1dHRvbixcbiAgICBJb25TcGlubmVyLFxuICAgIElvbkxhYmVsLFxuICAgIFNlYXJjaGJhckNvbXBvbmVudCxcbiAgICBJb25Sb3csXG4gICAgSW9uQ29sLFxuICAgIFRyYW5zbGF0ZU1vZHVsZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHN0YXRpb25zOiBMaXN0U3RhdGlvbjIwMFJlc3BvbnNlQWxsT2ZEYXRhSW5uZXJbXSA9IFtdXG4gIHNlYXJjaFN0YXRlOiBTZWFyY2hTdGF0ZSA9IHtcbiAgICBzdGF0ZTogJ2xvYWRpbmcnLFxuICB9XG4gIGRldGFpbGVkVmVoaWNsZXM6IE1hcDxzdHJpbmcsIExpc3RWZWhpY3VsZTIwMFJlc3BvbnNlQWxsT2ZEYXRhSW5uZXI+ID1cbiAgICBuZXcgTWFwKClcbiAgbG9hZGluZ1ZlaGljbGVzOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbmF2Q3RybDogTmF2Q29udHJvbGxlcixcbiAgICBwcml2YXRlIHN0b3JhZ2U6IFN0b3JhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgc3RhdGlvbldyYXBwZXJTZXJ2aWNlOiBTdGF0aW9uV3JhcHBlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzZWFyY2hXcmFwcGVyU2VydmljZTogU2VhcmNoV3JhcHBlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZW50aW5nU2VydmljZTogUmVudGluZ1NlcnZpY2UsXG4gICAgcHVibGljIGFjY291bnRTZXJ2aWNlOiBBY2NvdW50U2VydmljZSxcbiAgICBwcml2YXRlIHZlaGljdWxlc1NlcnZpY2U6IFZlaGljdWxlc1NlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5zZWFyY2hXcmFwcGVyU2VydmljZS5zZWFyY2hTdGF0ZS5zdWJzY3JpYmUoKHN0YXRlKSA9PiB7XG4gICAgICB0aGlzLnNlYXJjaFN0YXRlID0gc3RhdGVcbiAgICAgIGlmIChzdGF0ZS5zdGF0ZSA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkVmVoaWNsZXMgPSBzdGF0ZS5yZXN1bHRzLnZlaGljdWxlcy5maWx0ZXIoXG4gICAgICAgICAgKHZlaGljdWxlKSA9PiB2ZWhpY3VsZS5zdGF0dXMgPT09ICdzZXJ2aWNlJ1xuICAgICAgICApXG4gICAgICAgIHRoaXMuc2VhcmNoU3RhdGUgPSB7XG4gICAgICAgICAgc3RhdGU6ICdzdWNjZXNzJyxcbiAgICAgICAgICByZXN1bHRzOiB7XG4gICAgICAgICAgICBzdGF0aW9uczogc3RhdGUucmVzdWx0cy5zdGF0aW9ucy5maWx0ZXIoXG4gICAgICAgICAgICAgIChzdGF0aW9uKSA9PiBzdGF0aW9uLnN0YXR1cyA9PT0gJ29wZW4nXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgdmVoaWN1bGVzOiBmaWx0ZXJlZFZlaGljbGVzLFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgICAgLy8gTG9hZCBkZXRhaWxlZCBpbmZvcm1hdGlvbiBmb3IgZWFjaCB2ZWhpY2xlXG4gICAgICAgIGZpbHRlcmVkVmVoaWNsZXMuZm9yRWFjaCgodmVoaWNsZSkgPT4ge1xuICAgICAgICAgIGlmICh2ZWhpY2xlLmlkKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRWZWhpY2xlRGV0YWlscyh2ZWhpY2xlLmlkKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICAgIGFkZEljb25zKHtcbiAgICAgIGFycm93QmFja091dGxpbmUsXG4gICAgICBiYXR0ZXJ5RnVsbCxcbiAgICAgIGJhdHRlcnlIYWxmLFxuICAgICAgYmF0dGVyeURlYWQsXG4gICAgICBiYXR0ZXJ5RnVsbE91dGxpbmUsXG4gICAgICBjbG9zZU91dGxpbmUsXG4gICAgICBpbmZvcm1hdGlvbkNpcmNsZU91dGxpbmUsXG4gICAgfSlcbiAgfVxuICBhc3luYyBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBzdGF0aW9uc0RhdGEgPSBhd2FpdCB0aGlzLnN0b3JhZ2UuZ2V0KCdzdGF0aW9ucycpXG4gICAgdGhpcy5zdGF0aW9ucyA9IHN0YXRpb25zRGF0YT8uZGF0YSB8fCBbXVxuICAgIHRoaXMuc2VhcmNoU3RhdGUgPSB7XG4gICAgICBzdGF0ZTogJ3N1Y2Nlc3MnLFxuICAgICAgcmVzdWx0czoge1xuICAgICAgICBzdGF0aW9uczogdGhpcy5zdGF0aW9ucyxcbiAgICAgICAgdmVoaWN1bGVzOiBbXSxcbiAgICAgIH0sXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlU2VhcmNoKHF1ZXJ5OiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZWFyY2hUZXJtID0gcXVlcnkudG9Mb3dlckNhc2UoKS50cmltKClcbiAgICBpZiAoIXNlYXJjaFRlcm0gfHwgc2VhcmNoVGVybSA9PT0gJycgfHwgc2VhcmNoVGVybS5sZW5ndGggPT0gMCkge1xuICAgICAgdGhpcy5zZWFyY2hTdGF0ZSA9IHtcbiAgICAgICAgc3RhdGU6ICdzdWNjZXNzJyxcbiAgICAgICAgcmVzdWx0czoge1xuICAgICAgICAgIHN0YXRpb25zOiB0aGlzLnN0YXRpb25zLFxuICAgICAgICAgIHZlaGljdWxlczogW10sXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdGhpcy5zZWFyY2hXcmFwcGVyU2VydmljZS5zZWFyY2goc2VhcmNoVGVybSlcbiAgfVxuICBvcGVuU3RhdGlvbihzdGF0aW9uOiBMaXN0U3RhdGlvbjIwMFJlc3BvbnNlQWxsT2ZEYXRhSW5uZXIpIHtcbiAgICB0aGlzLm5hdkN0cmxcbiAgICAgIC5uYXZpZ2F0ZUZvcndhcmQoJy9tYXAnLCB7XG4gICAgICAgIGFuaW1hdGVkOiBmYWxzZSxcbiAgICAgIH0pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuc3RhdGlvbldyYXBwZXJTZXJ2aWNlLnNldFN0YXRpb25TdGF0ZSgnc3RhdGlvbi1zZWxlY3RlZCcsIHN0YXRpb24pXG4gICAgICB9KVxuICB9XG5cbiAgb25TZWFyY2hiYXJTdGF0ZUNoYW5nZSgpIHtcbiAgICB0aGlzLnNlYXJjaFN0YXRlID0geyBzdGF0ZTogJ2lkbGUnIH1cbiAgfVxuXG4gIGdldEJhdHRlcnlJY29uKHZlaGljbGU6IExpc3RWZWhpY3VsZTIwMFJlc3BvbnNlQWxsT2ZEYXRhSW5uZXIpOiBzdHJpbmcge1xuICAgIGNvbnN0IHBlcmNlbnQgPSB2ZWhpY2xlPy5iYXR0ZXJ5X3ZhZT8ucGVyY2VudFxuICAgIGlmIChwZXJjZW50ID09PSB1bmRlZmluZWQgfHwgcGVyY2VudCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICdiYXR0ZXJ5LWZ1bGwtb3V0bGluZSdcbiAgICB9XG4gICAgaWYgKHBlcmNlbnQgPiA3MCkgcmV0dXJuICdiYXR0ZXJ5LWZ1bGwnXG4gICAgaWYgKHBlcmNlbnQgPiAzMCkgcmV0dXJuICdiYXR0ZXJ5LWhhbGYnXG4gICAgcmV0dXJuICdiYXR0ZXJ5LWRlYWQnXG4gIH1cblxuICBnZXRCYXR0ZXJ5Q29sb3IodmVoaWNsZTogTGlzdFZlaGljdWxlMjAwUmVzcG9uc2VBbGxPZkRhdGFJbm5lcik6IHN0cmluZyB7XG4gICAgY29uc3QgcGVyY2VudCA9IHZlaGljbGU/LmJhdHRlcnlfdmFlPy5wZXJjZW50XG4gICAgaWYgKHBlcmNlbnQgPT09IHVuZGVmaW5lZCB8fCBwZXJjZW50ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gJ21lZGl1bSdcbiAgICB9XG4gICAgaWYgKHBlcmNlbnQgPiA3MCkgcmV0dXJuICdzdWNjZXNzJ1xuICAgIGlmIChwZXJjZW50ID4gMzApIHJldHVybiAnd2FybmluZydcbiAgICByZXR1cm4gJ2RhbmdlcidcbiAgfVxuXG4gIGFzeW5jIHJlbnRWZWhpY2xlKHZlaGljbGU6IExpc3RWZWhpY3VsZTIwMFJlc3BvbnNlQWxsT2ZEYXRhSW5uZXIpIHtcbiAgICBpZiAoIXZlaGljbGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0aGlzLnJlbnRpbmdTZXJ2aWNlLnN0YXJ0UmVudGluZyhcbiAgICAgIHZlaGljbGUuaWQgPyB0aGlzLmRldGFpbGVkVmVoaWNsZXMuZ2V0KHZlaGljbGUuaWQpIHx8IHZlaGljbGUgOiB2ZWhpY2xlXG4gICAgKVxuICB9XG5cbiAgbG9hZFZlaGljbGVEZXRhaWxzKHZlaGljbGVJZDogc3RyaW5nKSB7XG4gICAgaWYgKFxuICAgICAgIXZlaGljbGVJZCB8fFxuICAgICAgdGhpcy5kZXRhaWxlZFZlaGljbGVzLmhhcyh2ZWhpY2xlSWQpIHx8XG4gICAgICB0aGlzLmxvYWRpbmdWZWhpY2xlcy5oYXModmVoaWNsZUlkKVxuICAgICkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5sb2FkaW5nVmVoaWNsZXMuYWRkKHZlaGljbGVJZClcbiAgICB0aGlzLnZlaGljdWxlc1NlcnZpY2VcbiAgICAgIC5yZXRyaWV2ZVZlaGljdWxlKHtcbiAgICAgICAgcHJvZ3JhbTogZW52aXJvbm1lbnQucHJvZ3JhbSxcbiAgICAgICAgaWQ6IHZlaGljbGVJZCxcbiAgICAgIH0pXG4gICAgICAuc3Vic2NyaWJlKHtcbiAgICAgICAgbmV4dDogKHZlaGljbGUpID0+IHtcbiAgICAgICAgICBpZiAodmVoaWNsZSAmJiB2ZWhpY2xlSWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGV0YWlsZWRWZWhpY2xlcy5zZXQodmVoaWNsZUlkLCB2ZWhpY2xlKVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmxvYWRpbmdWZWhpY2xlcy5kZWxldGUodmVoaWNsZUlkKVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyB2ZWhpY2xlIGRldGFpbHM6JywgZXJyb3IpXG4gICAgICAgICAgdGhpcy5sb2FkaW5nVmVoaWNsZXMuZGVsZXRlKHZlaGljbGVJZClcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gIH1cblxuICBpc1ZlaGljbGVMb2FkaW5nKHZlaGljbGU6IExpc3RWZWhpY3VsZTIwMFJlc3BvbnNlQWxsT2ZEYXRhSW5uZXIpOiBib29sZWFuIHtcbiAgICBpZiAoIXZlaGljbGU/LmlkKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubG9hZGluZ1ZlaGljbGVzLmhhcyh2ZWhpY2xlLmlkKVxuICB9XG59XG4iLCAiPGFwcC1zZWFyY2hiYXJcbiAgW3N0YXRlXT1cInNlYXJjaFN0YXRlXCJcbiAgKHN0YXRlQ2hhbmdlKT1cIm9uU2VhcmNoYmFyU3RhdGVDaGFuZ2UoKVwiXG4gIChzZWFyY2hRdWVyeSk9XCJoYW5kbGVTZWFyY2goJGV2ZW50KVwiXG4+PC9hcHAtc2VhcmNoYmFyPlxuXG48aW9uLWNvbnRlbnQ+XG4gIDwhLS0gTG9hZGluZyBTdGF0ZSAtLT5cbiAgPGlvbi1yb3cgKm5nSWY9XCJzZWFyY2hTdGF0ZS5zdGF0ZSA9PT0gJ2xvYWRpbmcnXCIgY2xhc3M9XCJpb24tbWFyZ2luLXRvcFwiPlxuICAgIDxpb24tY29sXG4gICAgICBzaXplPVwiMTJcIlxuICAgICAgc2l6ZS1tZD1cIjhcIlxuICAgICAgc2l6ZS1sZz1cIjZcIlxuICAgICAgY2xhc3M9XCJpb24tcGFkZGluZyBpb24tdGV4dC1jZW50ZXJcIlxuICAgID5cbiAgICAgIDxpb24tc3Bpbm5lciBuYW1lPVwiY3Jlc2NlbnRcIj48L2lvbi1zcGlubmVyPlxuICAgIDwvaW9uLWNvbD5cbiAgPC9pb24tcm93PlxuXG4gIDwhLS0gU3RhdGlvbnMgUmVzdWx0cyAtLT5cbiAgPGlvbi1yb3dcbiAgICBjbGFzcz1cImlvbi1tYXJnaW4tdG9wXCJcbiAgICAqbmdJZj1cIlxuICAgICAgc2VhcmNoU3RhdGUuc3RhdGUgPT09ICdzdWNjZXNzJyAmJlxuICAgICAgc2VhcmNoU3RhdGUucmVzdWx0cy5zdGF0aW9ucy5sZW5ndGggPiAwXG4gICAgXCJcbiAgPlxuICAgIDxpb24tY29sIHNpemU9XCIxMlwiIHNpemUtbWQ9XCI4XCIgc2l6ZS1sZz1cIjZcIj5cbiAgICAgIDxpb24tdGV4dCBjb2xvcj1cIm1lZGl1bVwiPlxuICAgICAgICA8aDY+e3sgJ3NlYXJjaC5zdGF0aW9ucycgfCB0cmFuc2xhdGUgfX08L2g2PlxuICAgICAgPC9pb24tdGV4dD5cbiAgICAgIDxpb24tbGlzdCBsaW5lcz1cIm5vbmVcIj5cbiAgICAgICAgPGlvbi1pdGVtXG4gICAgICAgICAgYnV0dG9uXG4gICAgICAgICAgKm5nRm9yPVwibGV0IHN0YXRpb24gb2Ygc2VhcmNoU3RhdGUucmVzdWx0cy5zdGF0aW9uc1wiXG4gICAgICAgICAgKGNsaWNrKT1cIm9wZW5TdGF0aW9uKHN0YXRpb24pXCJcbiAgICAgICAgPlxuICAgICAgICAgIHt7IHN0YXRpb24ubmFtZSB9fVxuICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgPC9pb24tbGlzdD5cbiAgICA8L2lvbi1jb2w+XG4gIDwvaW9uLXJvdz5cblxuICA8IS0tIFZlaGljbGVzIFJlc3VsdHMgLS0+XG4gIDxpb24tcm93XG4gICAgY2xhc3M9XCJpb24tbWFyZ2luLXRvcFwiXG4gICAgKm5nSWY9XCJcbiAgICAgIHNlYXJjaFN0YXRlLnN0YXRlID09PSAnc3VjY2VzcycgJiZcbiAgICAgIHNlYXJjaFN0YXRlLnJlc3VsdHMudmVoaWN1bGVzLmxlbmd0aCA+IDBcbiAgICBcIlxuICA+XG4gICAgPGlvbi1jb2wgc2l6ZT1cIjEyXCIgc2l6ZS1tZD1cIjhcIiBzaXplLWxnPVwiNlwiPlxuICAgICAgPGlvbi10ZXh0IGNvbG9yPVwibWVkaXVtXCI+XG4gICAgICAgIDxoNj57eyAnc2VhcmNoLnZlaGljbGVzJyB8IHRyYW5zbGF0ZSB9fTwvaDY+XG4gICAgICA8L2lvbi10ZXh0PlxuICAgICAgPGlvbi1saXN0IGxpbmVzPVwibm9uZVwiPlxuICAgICAgICA8aW9uLWl0ZW0gKm5nRm9yPVwibGV0IHZlaGljbGUgb2Ygc2VhcmNoU3RhdGUucmVzdWx0cy52ZWhpY3VsZXNcIj5cbiAgICAgICAgICA8aW9uLW5vdGUgc2xvdD1cInN0YXJ0XCIgY29sb3I9XCJkYXJrXCIgY2xhc3M9XCJpb24tdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxpb24taWNvblxuICAgICAgICAgICAgICAqbmdJZj1cInZlaGljbGUudHlwZSA9PT0gJ3Njb290ZXInXCJcbiAgICAgICAgICAgICAgc3JjPVwiLi4vLi4vLi4vLi4vYXNzZXRzL3N2Zy92ZWhpY3VsZVR5cGUvc2Nvb3Rlci5zdmdcIlxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgPjwvaW9uLWljb24+XG4gICAgICAgICAgICA8aW9uLWljb25cbiAgICAgICAgICAgICAgKm5nSWY9XCJ2ZWhpY2xlLnR5cGUgIT09ICdzY29vdGVyJ1wiXG4gICAgICAgICAgICAgIHNyYz1cIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdmcvZm9udGF3ZXNvbWUvdHJpY3ljbGUtbGlnaHQuc3ZnXCJcbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgID48L2lvbi1pY29uPlxuXG4gICAgICAgICAgICA8aDQgKm5nSWY9XCJ2ZWhpY2xlLm51bWJlciEgPCAxMDAwXCIgY2xhc3M9XCJpb24tbm8tbWFyZ2luXCI+XG4gICAgICAgICAgICAgIHt7IHZlaGljbGUubnVtYmVyIH19XG4gICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgPGg1XG4gICAgICAgICAgICAgICpuZ0lmPVwidmVoaWNsZS5udW1iZXIhID4gOTk5ICYmIHZlaGljbGUubnVtYmVyISA8IDEwMDAwXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJpb24tbm8tbWFyZ2luXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3sgdmVoaWNsZS5udW1iZXIgfX1cbiAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICA8aDYgKm5nSWY9XCJ2ZWhpY2xlLm51bWJlciEgPiA5OTk5XCIgY2xhc3M9XCJpb24tbm8tbWFyZ2luXCI+XG4gICAgICAgICAgICAgIHt7IHZlaGljbGUubnVtYmVyIH19XG4gICAgICAgICAgICA8L2g2PlxuICAgICAgICAgIDwvaW9uLW5vdGU+XG5cbiAgICAgICAgICA8IS0tIExvYWRpbmcgc3RhdGUgZm9yIHZlaGljbGUgZGV0YWlscyAtLT5cbiAgICAgICAgICA8aW9uLWxhYmVsICpuZ0lmPVwiaXNWZWhpY2xlTG9hZGluZyh2ZWhpY2xlKVwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJpb24tY29sb3ItbWVkaXVtXCI+XG4gICAgICAgICAgICAgIDxpb24tc3Bpbm5lciBuYW1lPVwiY3Jlc2NlbnRcIj48L2lvbi1zcGlubmVyPlxuICAgICAgICAgICAgICB7eyAnYmlrZS1udW1iZXIuc2VhcmNoaW5nJyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvaW9uLWxhYmVsPlxuXG4gICAgICAgICAgPCEtLSBWZWhpY2xlIGRldGFpbHMgd2l0aCBiYXR0ZXJ5IGluZm8gLS0+XG4gICAgICAgICAgPGlvbi1sYWJlbFxuICAgICAgICAgICAgKm5nSWY9XCIhaXNWZWhpY2xlTG9hZGluZyh2ZWhpY2xlKSAmJiAodmVoaWNsZT8uaWQgPyAoZGV0YWlsZWRWZWhpY2xlcy5nZXQodmVoaWNsZS5pZCEpIHx8IHZlaGljbGUpIDogdmVoaWNsZSkuYmF0dGVyeV92YWVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8aW9uLWljb25cbiAgICAgICAgICAgICAgICBbbmFtZV09XCJnZXRCYXR0ZXJ5SWNvbih2ZWhpY2xlPy5pZCA/IChkZXRhaWxlZFZlaGljbGVzLmdldCh2ZWhpY2xlLmlkISkgfHwgdmVoaWNsZSkgOiB2ZWhpY2xlKVwiXG4gICAgICAgICAgICAgICAgW2NvbG9yXT1cImdldEJhdHRlcnlDb2xvcih2ZWhpY2xlPy5pZCA/IChkZXRhaWxlZFZlaGljbGVzLmdldCh2ZWhpY2xlLmlkISkgfHwgdmVoaWNsZSkgOiB2ZWhpY2xlKVwiXG4gICAgICAgICAgICAgID48L2lvbi1pY29uPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgKm5nSWY9XCIodmVoaWNsZT8uaWQgPyAoZGV0YWlsZWRWZWhpY2xlcy5nZXQodmVoaWNsZS5pZCEpIHx8IHZlaGljbGUpIDogdmVoaWNsZSkuYmF0dGVyeV92YWU/LnBlcmNlbnQgIT09IHVuZGVmaW5lZCAmJiAodmVoaWNsZT8uaWQgPyAoZGV0YWlsZWRWZWhpY2xlcy5nZXQodmVoaWNsZS5pZCEpIHx8IHZlaGljbGUpIDogdmVoaWNsZSkuYmF0dGVyeV92YWU/LnBlcmNlbnQgIT09IG51bGxcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3sgKHZlaGljbGU/LmlkID8gKGRldGFpbGVkVmVoaWNsZXMuZ2V0KHZlaGljbGUuaWQhKSB8fCB2ZWhpY2xlKVxuICAgICAgICAgICAgICAgIDogdmVoaWNsZSkuYmF0dGVyeV92YWUucGVyY2VudCB9fSVcbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAqbmdJZj1cIih2ZWhpY2xlPy5pZCA/IChkZXRhaWxlZFZlaGljbGVzLmdldCh2ZWhpY2xlLmlkISkgfHwgdmVoaWNsZSkgOiB2ZWhpY2xlKS5iYXR0ZXJ5X3ZhZT8ucGVyY2VudCA9PT0gdW5kZWZpbmVkIHx8ICh2ZWhpY2xlPy5pZCA/IChkZXRhaWxlZFZlaGljbGVzLmdldCh2ZWhpY2xlLmlkISkgfHwgdmVoaWNsZSkgOiB2ZWhpY2xlKS5iYXR0ZXJ5X3ZhZT8ucGVyY2VudCA9PT0gbnVsbFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAtLVxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICpuZ0lmPVwiKHZlaGljbGU/LmlkID8gKGRldGFpbGVkVmVoaWNsZXMuZ2V0KHZlaGljbGUuaWQhKSB8fCB2ZWhpY2xlKSA6IHZlaGljbGUpLmJhdHRlcnlfdmFlPy5yZW1haW5pbmdfZGlzdGFuY2VcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgKHt7ICgodmVoaWNsZT8uaWQgPyAoZGV0YWlsZWRWZWhpY2xlcy5nZXQodmVoaWNsZS5pZCEpIHx8XG4gICAgICAgICAgICAgICAgdmVoaWNsZSkgOiB2ZWhpY2xlKS5iYXR0ZXJ5X3ZhZS5yZW1haW5pbmdfZGlzdGFuY2UgL1xuICAgICAgICAgICAgICAgIDEwMDApLnRvRml4ZWQoMSkgfX1rbSlcbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAqbmdJZj1cIiEodmVoaWNsZT8uaWQgPyAoZGV0YWlsZWRWZWhpY2xlcy5nZXQodmVoaWNsZS5pZCEpIHx8IHZlaGljbGUpIDogdmVoaWNsZSkucmVudGFibGVcIlxuICAgICAgICAgICAgICBjbGFzcz1cImlvbi1jb2xvci1kYW5nZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImNsb3NlLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICB7eyAnc2VhcmNoLm5vdF9yZW50YWJsZScgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2lvbi1sYWJlbD5cblxuICAgICAgICAgIDwhLS0gTm8gYmF0dGVyeSBpbmZvIGF2YWlsYWJsZSAtLT5cbiAgICAgICAgICA8aW9uLWxhYmVsXG4gICAgICAgICAgICAqbmdJZj1cIiFpc1ZlaGljbGVMb2FkaW5nKHZlaGljbGUpICYmICEodmVoaWNsZT8uaWQgPyAoZGV0YWlsZWRWZWhpY2xlcy5nZXQodmVoaWNsZS5pZCEpIHx8IHZlaGljbGUpIDogdmVoaWNsZSkuYmF0dGVyeV92YWVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiaW9uLWNvbG9yLW1lZGl1bVwiPlxuICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImluZm9ybWF0aW9uLWNpcmNsZS1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgICAge3sgJ3NlYXJjaC5ub19pbmZvJyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgKm5nSWY9XCIodmVoaWNsZT8uaWQgPyAoZGV0YWlsZWRWZWhpY2xlcy5nZXQodmVoaWNsZS5pZCEpIHx8IHZlaGljbGUpIDogdmVoaWNsZSkucmVudGFibGUgPT09IGZhbHNlXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJpb24tY29sb3ItZGFuZ2VyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJjbG9zZS1vdXRsaW5lXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgICAge3sgJ3NlYXJjaC5ub3RfcmVudGFibGUnIHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9pb24tbGFiZWw+XG5cbiAgICAgICAgICA8aW9uLWJ1dHRvblxuICAgICAgICAgICAgc2xvdD1cImVuZFwiXG4gICAgICAgICAgICBzaGFwZT1cInJvdW5kXCJcbiAgICAgICAgICAgIHNpemU9XCJtZWRpdW1cIlxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cImlzVmVoaWNsZUxvYWRpbmcodmVoaWNsZSkgfHwgKHZlaGljbGU/LmlkID8gKGRldGFpbGVkVmVoaWNsZXMuZ2V0KHZlaGljbGUuaWQhKSB8fCB2ZWhpY2xlKSA6IHZlaGljbGUpLnJlbnRhYmxlICE9PSB0cnVlIHx8IGFjY291bnRTZXJ2aWNlLmhhc0Jsb2NrZWRSZWFzb25zKClcIlxuICAgICAgICAgICAgKGNsaWNrKT1cInJlbnRWZWhpY2xlKHZlaGljbGUpXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7eyAndmVoaWNsZS51bmxvY2snIHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgPC9pb24tYnV0dG9uPlxuICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgPC9pb24tbGlzdD5cbiAgICA8L2lvbi1jb2w+XG4gIDwvaW9uLXJvdz5cblxuICA8IS0tIE5vIFJlc3VsdHMgLS0+XG4gIDxpb24tcm93ICpuZ0lmPVwic2VhcmNoU3RhdGUuc3RhdGUgPT09ICdub19yZXN1bHRzJ1wiIGNsYXNzPVwiaW9uLW1hcmdpbi10b3BcIj5cbiAgICA8aW9uLWNvbCBzaXplPVwiMTJcIiBzaXplLW1kPVwiOFwiIHNpemUtbGc9XCI2XCIgY2xhc3M9XCJpb24tcGFkZGluZy1zdGFydFwiPlxuICAgICAgPGlvbi10ZXh0PiB7eyAnc2VhcmNoYmFyLm5vX3Jlc3VsdHMnIHwgdHJhbnNsYXRlIH19IDwvaW9uLXRleHQ+XG4gICAgPC9pb24tY29sPlxuICA8L2lvbi1yb3c+XG48L2lvbi1jb250ZW50PlxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUUUsSUFBQSx5QkFBQSxHQUFBLFdBQUEsQ0FBQSxFQUF3RSxHQUFBLFdBQUEsQ0FBQTtBQU9wRSxJQUFBLG9CQUFBLEdBQUEsZUFBQSxDQUFBO0FBQ0YsSUFBQSx1QkFBQSxFQUFVOzs7Ozs7QUFnQk4sSUFBQSx5QkFBQSxHQUFBLFlBQUEsQ0FBQTtBQUdFLElBQUEscUJBQUEsU0FBQSxTQUFBLHFFQUFBO0FBQUEsWUFBQSxhQUFBLHdCQUFBLEdBQUEsRUFBQTtBQUFBLFlBQUEsU0FBQSx3QkFBQSxDQUFBO0FBQUEsYUFBQSxzQkFBUyxPQUFBLFlBQUEsVUFBQSxDQUFvQjtJQUFBLENBQUE7QUFFN0IsSUFBQSxpQkFBQSxDQUFBO0FBQ0YsSUFBQSx1QkFBQTs7OztBQURFLElBQUEsb0JBQUE7QUFBQSxJQUFBLDZCQUFBLEtBQUEsV0FBQSxNQUFBLEdBQUE7Ozs7O0FBakJSLElBQUEseUJBQUEsR0FBQSxXQUFBLENBQUEsRUFNQyxHQUFBLFdBQUEsQ0FBQSxFQUM0QyxHQUFBLFlBQUEsQ0FBQSxFQUNoQixHQUFBLElBQUE7QUFDbkIsSUFB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
