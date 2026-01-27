import {
  RentingService
} from "./chunk-5RMBP5UX.js";
import {
  GeolocationService,
  StationWrapperService
} from "./chunk-5KXLLE34.js";
import {
  AccountService
} from "./chunk-XK4I5MHM.js";
import {
  addIcons,
  batteryCharging,
  batteryDead,
  batteryFull,
  batteryHalf,
  bicycle,
  locationOutline,
  lockOpen,
  thumbsUp
} from "./chunk-3E6DEK7U.js";
import {
  CommonModule,
  Component,
  Input,
  IonButton,
  IonIcon,
  IonItem,
  IonList,
  IonNote,
  IonPopover2 as IonPopover,
  IonSkeletonText,
  IonText,
  NgForOf,
  NgIf,
  TranslateModule,
  TranslatePipe,
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
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-DGENMXJW.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// src/app/components/recommandation/recommandation.component.ts
var _c0 = ["popover"];
function RecommandationComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(2, 2, "recommandation.recommanded_by"), " ", ctx_r1.recommended.created_by_name, "");
  }
}
var _RecommandationComponent = class _RecommandationComponent {
  presentPopover(e) {
    this.popover.event = e;
    this.isOpen = true;
  }
  constructor() {
    this.isOpen = false;
    addIcons({ thumbsUp });
  }
};
_RecommandationComponent.\u0275fac = function RecommandationComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RecommandationComponent)();
};
_RecommandationComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecommandationComponent, selectors: [["app-recommandation"]], viewQuery: function RecommandationComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.popover = _t.first);
  }
}, inputs: { recommended: "recommended" }, decls: 5, vars: 1, consts: [["popover", ""], ["shape", "round", "fill", "clear", 3, "click"], ["name", "thumbs-up", "color", "warning", "slot", "icon-only"], ["side", "top", "color", "dark", 1, "ecl-ionpopover", 3, "didDismiss", "isOpen"]], template: function RecommandationComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 1);
    \u0275\u0275listener("click", function RecommandationComponent_Template_ion_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.presentPopover($event));
    });
    \u0275\u0275element(1, "ion-icon", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "ion-popover", 3, 0);
    \u0275\u0275listener("didDismiss", function RecommandationComponent_Template_ion_popover_didDismiss_2_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.isOpen = false);
    });
    \u0275\u0275template(4, RecommandationComponent_ng_template_4_Template, 3, 4, "ng-template");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("isOpen", ctx.isOpen);
  }
}, dependencies: [IonIcon, TranslateModule, TranslatePipe, IonPopover, IonButton], encapsulation: 2 });
var RecommandationComponent = _RecommandationComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecommandationComponent, [{
    type: Component,
    args: [{ selector: "app-recommandation", imports: [IonIcon, TranslateModule, IonPopover, IonButton], template: `<ion-button (click)="presentPopover($event)" shape="round" fill="clear"
  ><ion-icon name="thumbs-up" color="warning" slot="icon-only"></ion-icon
></ion-button>
<ion-popover
  #popover
  [isOpen]="isOpen"
  (didDismiss)="isOpen = false"
  side="top"
  color="dark"
  class="ecl-ionpopover"
>
  <ng-template>
    <i
      >{{ 'recommandation.recommanded_by' | translate }}
      {{ recommended.created_by_name }}</i
    >
  </ng-template>
</ion-popover>
` }]
  }], () => [], { popover: [{
    type: ViewChild,
    args: ["popover"]
  }], recommended: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecommandationComponent, { className: "RecommandationComponent", filePath: "src/app/components/recommandation/recommandation.component.ts", lineNumber: 14 });
})();

// src/app/components/vehicle/vehicle.component.ts
function VehicleComponent_ion_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 11);
  }
}
function VehicleComponent_ion_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 12);
  }
}
function VehicleComponent_h4_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.vehicle.number, " ");
  }
}
function VehicleComponent_h5_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h5", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.vehicle.number, " ");
  }
}
function VehicleComponent_h6_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h6", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.vehicle.number, " ");
  }
}
function VehicleComponent_app_recommandation_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-recommandation", 14);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("recommended", ctx_r0.vehicle.recommended);
  }
}
var _VehicleComponent = class _VehicleComponent {
  constructor(rentingService, accountService) {
    this.rentingService = rentingService;
    this.accountService = accountService;
    this.cyclistState = {
      state: "unknown",
      blocked_reasons: ["Unknown account state"]
    };
    addIcons({
      bicycle,
      batteryFull,
      batteryHalf,
      batteryDead,
      batteryCharging,
      lockOpen,
      thumbsUp
    });
    effect(() => {
      this.cyclistState = this.accountService.cyclistState();
    });
  }
  getBatteryIcon() {
    var _a;
    const percent = ((_a = this.vehicle.battery_vae) == null ? void 0 : _a.percent) || 0;
    if (percent > 70)
      return "battery-full";
    if (percent > 30)
      return "battery-half";
    return "battery-dead";
  }
  rent() {
    return __async(this, null, function* () {
      yield this.rentingService.startRenting(this.vehicle);
    });
  }
};
_VehicleComponent.\u0275fac = function VehicleComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VehicleComponent)(\u0275\u0275directiveInject(RentingService), \u0275\u0275directiveInject(AccountService));
};
_VehicleComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VehicleComponent, selectors: [["app-vehicle"]], inputs: { vehicle: "vehicle" }, decls: 23, vars: 13, consts: [["lines", "none", 1, "ion-no-padding", "ion-no-margin", "ecl-modal-items"], ["slot", "start", "color", "dark", 1, "ion-text-center"], ["src", "../../../../assets/svg/vehiculeType/scooter.svg", "size", "large", 4, "ngIf"], ["src", "../../../../assets/svg/fontawesome/tricycle-light.svg", "size", "large", 4, "ngIf"], ["class", "ion-no-margin", 4, "ngIf"], [1, "ion-no-padding"], [3, "name"], ["src", "../../../../assets/svg/fontawesome/tild.svg"], [1, "ion-no-padding", "ecl-padding-start"], ["slot", "end", 3, "recommended", 4, "ngIf"], ["slot", "end", "shape", "round", "size", "medium", 3, "click", "disabled"], ["src", "../../../../assets/svg/vehiculeType/scooter.svg", "size", "large"], ["src", "../../../../assets/svg/fontawesome/tricycle-light.svg", "size", "large"], [1, "ion-no-margin"], ["slot", "end", 3, "recommended"]], template: function VehicleComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item", 0)(1, "ion-note", 1);
    \u0275\u0275template(2, VehicleComponent_ion_icon_2_Template, 1, 0, "ion-icon", 2)(3, VehicleComponent_ion_icon_3_Template, 1, 0, "ion-icon", 3)(4, VehicleComponent_h4_4_Template, 2, 1, "h4", 4)(5, VehicleComponent_h5_5_Template, 2, 1, "h5", 4)(6, VehicleComponent_h6_6_Template, 2, 1, "h6", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul", 5)(8, "li");
    \u0275\u0275element(9, "ion-icon", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "li");
    \u0275\u0275element(11, "ion-icon", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "ul", 8)(13, "li")(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "li")(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(19, VehicleComponent_app_recommandation_19_Template, 1, 1, "app-recommandation", 9);
    \u0275\u0275elementStart(20, "ion-button", 10);
    \u0275\u0275listener("click", function VehicleComponent_Template_ion_button_click_20_listener() {
      return ctx.rent();
    });
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.vehicle.type === "scooter");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.vehicle.type !== "scooter");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.vehicle.number < 1e3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.vehicle.number > 999 && ctx.vehicle.number < 1e4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.vehicle.number > 9999);
    \u0275\u0275advance(3);
    \u0275\u0275property("name", ctx.getBatteryIcon());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx.vehicle.battery_vae == null ? null : ctx.vehicle.battery_vae.percent, "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ((ctx.vehicle.battery_vae == null ? null : ctx.vehicle.battery_vae.remaining_distance) / 1e3).toFixed(1), "km");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.vehicle.recommended !== null);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx.vehicle.rentable || ctx.accountService.hasBlockedReasons());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 11, "vehicle.unlock"));
  }
}, dependencies: [
  IonItem,
  IonButton,
  IonIcon,
  IonNote,
  RecommandationComponent,
  TranslateModule,
  TranslatePipe,
  CommonModule,
  NgIf
], styles: ["\n\nion-row[_ngcontent-%COMP%] {\n  width: 100%;\n}\nion-note[_ngcontent-%COMP%] {\n  width: 50px;\n}\n/*# sourceMappingURL=vehicle.component.css.map */"] });
var VehicleComponent = _VehicleComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VehicleComponent, [{
    type: Component,
    args: [{ selector: "app-vehicle", imports: [
      IonItem,
      IonButton,
      IonIcon,
      IonNote,
      RecommandationComponent,
      TranslateModule,
      CommonModule
    ], template: `<ion-item class="ion-no-padding ion-no-margin ecl-modal-items" lines="none">
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
  <ul class="ion-no-padding">
    <li>
      <ion-icon [name]="getBatteryIcon()"></ion-icon>
    </li>
    <li>
      <ion-icon src="../../../../assets/svg/fontawesome/tild.svg"></ion-icon>
    </li>
  </ul>
  <ul class="ion-no-padding ecl-padding-start">
    <li>
      <span>{{ vehicle.battery_vae?.percent }}%</span>
    </li>
    <li>
      <span
        >{{
          (vehicle.battery_vae?.remaining_distance / 1000).toFixed(1)
        }}km</span
      >
    </li>
  </ul>

  <app-recommandation
    *ngIf="vehicle.recommended !== null"
    [recommended]="vehicle.recommended!"
    slot="end"
  ></app-recommandation>
  <ion-button
    slot="end"
    shape="round"
    size="medium"
    [disabled]="!vehicle.rentable || accountService.hasBlockedReasons()"
    (click)="rent()"
    >{{ 'vehicle.unlock' | translate }}</ion-button
  >
</ion-item>
`, styles: ["/* src/app/components/vehicle/vehicle.component.scss */\nion-row {\n  width: 100%;\n}\nion-note {\n  width: 50px;\n}\n/*# sourceMappingURL=vehicle.component.css.map */\n"] }]
  }], () => [{ type: RentingService }, { type: AccountService }], { vehicle: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VehicleComponent, { className: "VehicleComponent", filePath: "src/app/components/vehicle/vehicle.component.ts", lineNumber: 51 });
})();

// src/app/components/drawers/nearest-vehicles/nearest-vehicles.component.ts
var _c02 = () => [];
var _forTrack0 = ($index, $item) => $item.id;
function NearestVehiclesComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-skeleton-text", 2)(1, "ion-skeleton-text", 3);
  }
  if (rf & 2) {
    \u0275\u0275property("animated", true);
    \u0275\u0275advance();
    \u0275\u0275property("animated", true);
  }
}
function NearestVehiclesComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-text", 1);
    \u0275\u0275text(1, "Aucun v\xE9hicule \xE0 proximit\xE9");
    \u0275\u0275elementEnd();
  }
}
function NearestVehiclesComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-text");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(2, 2, "nearest_vehicles.error"), " ", ctx_r0.loadingState.error, "");
  }
}
function NearestVehiclesComponent_Conditional_7_For_2_Conditional_0_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const station_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" - ", ctx_r0.calculateDistance(station_r2), "m");
  }
}
function NearestVehiclesComponent_Conditional_7_For_2_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 10);
    \u0275\u0275listener("click", function NearestVehiclesComponent_Conditional_7_For_2_Conditional_0_Conditional_6_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const station_r2 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.geolocationService.openMaps(station_r2.position.latitude, station_r2.position.longitude, "walking"));
    });
    \u0275\u0275element(1, "ion-icon", 11);
    \u0275\u0275elementStart(2, "i");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "generic.get_directions"));
  }
}
function NearestVehiclesComponent_Conditional_7_For_2_Conditional_0_app_vehicle_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-vehicle", 12);
  }
  if (rf & 2) {
    const vehicle_r4 = ctx.$implicit;
    \u0275\u0275property("vehicle", vehicle_r4);
  }
}
function NearestVehiclesComponent_Conditional_7_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item", 4)(1, "ion-note", 5);
    \u0275\u0275element(2, "ion-icon", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "i");
    \u0275\u0275text(4);
    \u0275\u0275template(5, NearestVehiclesComponent_Conditional_7_For_2_Conditional_0_span_5_Template, 2, 1, "span", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, NearestVehiclesComponent_Conditional_7_For_2_Conditional_0_Conditional_6_Template, 5, 3, "ion-button", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, NearestVehiclesComponent_Conditional_7_For_2_Conditional_0_app_vehicle_7_Template, 1, 1, "app-vehicle", 9);
  }
  if (rf & 2) {
    const station_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", station_r2.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.calculateDistance(station_r2));
    \u0275\u0275advance();
    \u0275\u0275conditional(station_r2.position ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", station_r2.vehicules.data.slice(0, 3) || \u0275\u0275pureFunction0(4, _c02));
  }
}
function NearestVehiclesComponent_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NearestVehiclesComponent_Conditional_7_For_2_Conditional_0_Template, 8, 5);
  }
  if (rf & 2) {
    const station_r2 = ctx.$implicit;
    \u0275\u0275conditional(station_r2.vehicules && station_r2.vehicules.data && station_r2.vehicules.data.length > 0 ? 0 : -1);
  }
}
function NearestVehiclesComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list");
    \u0275\u0275repeaterCreate(1, NearestVehiclesComponent_Conditional_7_For_2_Template, 1, 1, null, null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.loadingState.stations);
  }
}
var _NearestVehiclesComponent = class _NearestVehiclesComponent {
  constructor(geolocationService, stationWrapperService) {
    this.geolocationService = geolocationService;
    this.stationWrapperService = stationWrapperService;
    this.loadingState = {
      state: "LOADING"
    };
    this.geolocationService.geolocationState.subscribe((state) => {
      this.geolocState = state;
    });
    addIcons({ locationOutline });
  }
  ngOnInit() {
    this.loadStations();
  }
  loadStations() {
    return __async(this, null, function* () {
      this.loadingState = { state: "LOADING" };
      if (this.geolocState.state === "live_position" || this.geolocState.state === "unique_position") {
        this.stationWrapperService.getNearbyStations(this.geolocState.position.coords, 1e3, true).then((stations) => {
          if (stations.length > 0) {
            this.loadingState = { state: "SUCCESS", stations };
          } else {
            this.loadingState = { state: "NO_NEARBY_STATIONS_OR_VEHICLES" };
          }
        }).catch((error) => {
          this.loadingState = { state: "ERROR", error };
        });
      } else {
        this.loadingState = { state: "NO_NEARBY_STATIONS_OR_VEHICLES" };
      }
    });
  }
  calculateDistance(station) {
    var _a, _b;
    if (this.geolocState.state === "live_position" || this.geolocState.state === "unique_position") {
      const distance = this.geolocationService.calculateDistance(this.geolocState.position.coords, {
        latitude: Number((_a = station.position) == null ? void 0 : _a.latitude),
        longitude: Number((_b = station.position) == null ? void 0 : _b.longitude)
      });
      return distance;
    }
    return 0;
  }
};
_NearestVehiclesComponent.\u0275fac = function NearestVehiclesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NearestVehiclesComponent)(\u0275\u0275directiveInject(GeolocationService), \u0275\u0275directiveInject(StationWrapperService));
};
_NearestVehiclesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NearestVehiclesComponent, selectors: [["app-nearest-vehicles"]], decls: 8, vars: 5, consts: [["lines", "none", 1, "ecl-ionitem_title"], [1, "ion-margin-start"], [2, "width", "80%", 3, "animated"], [2, "width", "100%", "height", "200px", "margin-top", "10px", 3, "animated"], ["lines", "none", 1, "ion-no-padding", "ion-no-margin", "ecl-modal-items"], ["slot", "start", "color", "dark", 1, "ion-text-center", "ion-no-margin"], ["name", "location-outline", "size", "large"], [4, "ngIf"], ["slot", "end", "fill", "outline", "color", "dark", "shape", "round", 1, "ecl-no-shadow"], [3, "vehicle", 4, "ngFor", "ngForOf"], ["slot", "end", "fill", "outline", "color", "dark", "shape", "round", 1, "ecl-no-shadow", 3, "click"], ["src", "../../../../assets/svg/fontawesome/diamond-turn-right-regular.svg", "slot", "start"], [3, "vehicle"]], template: function NearestVehiclesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item", 0)(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, NearestVehiclesComponent_Conditional_4_Template, 2, 2)(5, NearestVehiclesComponent_Conditional_5_Template, 2, 0, "ion-text", 1)(6, NearestVehiclesComponent_Conditional_6_Template, 3, 4, "ion-text")(7, NearestVehiclesComponent_Conditional_7_Template, 3, 0, "ion-list");
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "nearest_vehicles.title"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.loadingState.state === "LOADING" || ctx.loadingState.state === "LOADING_IN_PROGRESS" ? 4 : ctx.loadingState.state === "NO_NEARBY_STATIONS_OR_VEHICLES" ? 5 : ctx.loadingState.state === "ERROR" ? 6 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.loadingState.state === "SUCCESS" ? 7 : -1);
  }
}, dependencies: [
  IonList,
  IonItem,
  IonSkeletonText,
  IonNote,
  IonButton,
  IonText,
  IonIcon,
  CommonModule,
  NgForOf,
  NgIf,
  TranslateModule,
  TranslatePipe,
  VehicleComponent
], styles: ["\n\nion-button[_ngcontent-%COMP%]::part(native) {\n  padding: 0 15px;\n  width: auto;\n}\nion-note[_ngcontent-%COMP%] {\n  width: 50px;\n}\n/*# sourceMappingURL=nearest-vehicles.component.css.map */"] });
var NearestVehiclesComponent = _NearestVehiclesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NearestVehiclesComponent, [{
    type: Component,
    args: [{ selector: "app-nearest-vehicles", imports: [
      IonList,
      IonItem,
      IonSkeletonText,
      IonNote,
      IonButton,
      IonText,
      IonIcon,
      CommonModule,
      TranslateModule,
      VehicleComponent
    ], template: `<ion-item lines="none" class="ecl-ionitem_title">
  <h2>
    {{ 'nearest_vehicles.title' | translate }}
  </h2>
</ion-item>
@if(loadingState.state === 'LOADING' || loadingState.state ===
'LOADING_IN_PROGRESS') {
<ion-skeleton-text [animated]="true" style="width: 80%"></ion-skeleton-text>
<ion-skeleton-text
  [animated]="true"
  style="width: 100%; height: 200px; margin-top: 10px"
></ion-skeleton-text>
} @else if(loadingState.state === 'NO_NEARBY_STATIONS_OR_VEHICLES') {
<ion-text class="ion-margin-start">Aucun v\xE9hicule \xE0 proximit\xE9</ion-text>
} @else if (loadingState.state === 'ERROR') {
<ion-text
  >{{ 'nearest_vehicles.error' | translate }} {{ loadingState.error }}</ion-text
>
} @if(loadingState.state === 'SUCCESS') {
<ion-list>
  @for (station of loadingState.stations; track station.id) {
  @if(station.vehicules && station.vehicules.data &&
  station.vehicules.data.length > 0) {
  <ion-item lines="none" class="ion-no-padding ion-no-margin ecl-modal-items">
    <ion-note slot="start" color="dark" class="ion-text-center ion-no-margin">
      <ion-icon name="location-outline" size="large"></ion-icon>
    </ion-note>
    <i
      >{{ station.name }}
      <span *ngIf="calculateDistance(station)">
        -
        {{ calculateDistance(station) }}m</span
      ></i
    >
    @if(station.position) {
    <ion-button
      slot="end"
      fill="outline"
      color="dark"
      shape="round"
      class="ecl-no-shadow"
      (click)="
        geolocationService.openMaps(
          station.position.latitude,
          station.position.longitude,
          'walking'
        )
      "
    >
      <ion-icon
        src="../../../../assets/svg/fontawesome/diamond-turn-right-regular.svg"
        slot="start"
      ></ion-icon>
      <i>{{ 'generic.get_directions' | translate }}</i>
    </ion-button>
    }
  </ion-item>
  <app-vehicle
    *ngFor="let vehicle of station.vehicules.data.slice(0, 3) || []"
    [vehicle]="vehicle"
  ></app-vehicle>
  } }
</ion-list>
}
`, styles: ["/* src/app/components/drawers/nearest-vehicles/nearest-vehicles.component.scss */\nion-button::part(native) {\n  padding: 0 15px;\n  width: auto;\n}\nion-note {\n  width: 50px;\n}\n/*# sourceMappingURL=nearest-vehicles.component.css.map */\n"] }]
  }], () => [{ type: GeolocationService }, { type: StationWrapperService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NearestVehiclesComponent, { className: "NearestVehiclesComponent", filePath: "src/app/components/drawers/nearest-vehicles/nearest-vehicles.component.ts", lineNumber: 59 });
})();

export {
  VehicleComponent,
  NearestVehiclesComponent
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9jb21wb25lbnRzL3JlY29tbWFuZGF0aW9uL3JlY29tbWFuZGF0aW9uLmNvbXBvbmVudC50cyIsICJzcmMvYXBwL2NvbXBvbmVudHMvcmVjb21tYW5kYXRpb24vcmVjb21tYW5kYXRpb24uY29tcG9uZW50Lmh0bWwiLCAic3JjL2FwcC9jb21wb25lbnRzL3ZlaGljbGUvdmVoaWNsZS5jb21wb25lbnQudHMiLCAic3JjL2FwcC9jb21wb25lbnRzL3ZlaGljbGUvdmVoaWNsZS5jb21wb25lbnQuaHRtbCIsICJzcmMvYXBwL2NvbXBvbmVudHMvZHJhd2Vycy9uZWFyZXN0LXZlaGljbGVzL25lYXJlc3QtdmVoaWNsZXMuY29tcG9uZW50LnRzIiwgInNyYy9hcHAvY29tcG9uZW50cy9kcmF3ZXJzL25lYXJlc3QtdmVoaWNsZXMvbmVhcmVzdC12ZWhpY2xlcy5jb21wb25lbnQuaHRtbCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IGFkZEljb25zIH0gZnJvbSAnaW9uaWNvbnMnXG5pbXBvcnQgeyB0aHVtYnNVcCB9IGZyb20gJ2lvbmljb25zL2ljb25zJ1xuaW1wb3J0IHsgSW9uSWNvbiwgSW9uUG9wb3ZlciwgSW9uQnV0dG9uIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXIvc3RhbmRhbG9uZSdcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnXG5pbXBvcnQgeyBMaXN0VmVoaWN1bGUyMDBSZXNwb25zZUFsbE9mRGF0YUlubmVyUmVjb21tZW5kZWQgfSBmcm9tICdzcmMvYXBpLWN5Y2xpc3QvbW9kZWwvbGlzdFZlaGljdWxlMjAwUmVzcG9uc2VBbGxPZkRhdGFJbm5lclJlY29tbWVuZGVkJ1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1yZWNvbW1hbmRhdGlvbicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3JlY29tbWFuZGF0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9yZWNvbW1hbmRhdGlvbi5jb21wb25lbnQuc2NzcyddLFxuICAgIGltcG9ydHM6IFtJb25JY29uLCBUcmFuc2xhdGVNb2R1bGUsIElvblBvcG92ZXIsIElvbkJ1dHRvbl1cbn0pXG5leHBvcnQgY2xhc3MgUmVjb21tYW5kYXRpb25Db21wb25lbnQge1xuICBAVmlld0NoaWxkKCdwb3BvdmVyJykgcG9wb3ZlciE6IElvblBvcG92ZXJcbiAgQElucHV0KCkgcmVjb21tZW5kZWQhOiBMaXN0VmVoaWN1bGUyMDBSZXNwb25zZUFsbE9mRGF0YUlubmVyUmVjb21tZW5kZWRcbiAgaXNPcGVuID0gZmFsc2VcbiAgcHJlc2VudFBvcG92ZXIoZTogRXZlbnQpIHtcbiAgICB0aGlzLnBvcG92ZXIuZXZlbnQgPSBlXG4gICAgdGhpcy5pc09wZW4gPSB0cnVlXG4gIH1cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgYWRkSWNvbnMoeyB0aHVtYnNVcCB9KVxuICB9XG59XG4iLCAiPGlvbi1idXR0b24gKGNsaWNrKT1cInByZXNlbnRQb3BvdmVyKCRldmVudClcIiBzaGFwZT1cInJvdW5kXCIgZmlsbD1cImNsZWFyXCJcbiAgPjxpb24taWNvbiBuYW1lPVwidGh1bWJzLXVwXCIgY29sb3I9XCJ3YXJuaW5nXCIgc2xvdD1cImljb24tb25seVwiPjwvaW9uLWljb25cbj48L2lvbi1idXR0b24+XG48aW9uLXBvcG92ZXJcbiAgI3BvcG92ZXJcbiAgW2lzT3Blbl09XCJpc09wZW5cIlxuICAoZGlkRGlzbWlzcyk9XCJpc09wZW4gPSBmYWxzZVwiXG4gIHNpZGU9XCJ0b3BcIlxuICBjb2xvcj1cImRhcmtcIlxuICBjbGFzcz1cImVjbC1pb25wb3BvdmVyXCJcbj5cbiAgPG5nLXRlbXBsYXRlPlxuICAgIDxpXG4gICAgICA+e3sgJ3JlY29tbWFuZGF0aW9uLnJlY29tbWFuZGVkX2J5JyB8IHRyYW5zbGF0ZSB9fVxuICAgICAge3sgcmVjb21tZW5kZWQuY3JlYXRlZF9ieV9uYW1lIH19PC9pXG4gICAgPlxuICA8L25nLXRlbXBsYXRlPlxuPC9pb24tcG9wb3Zlcj5cbiIsICJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7XG4gIElvbkl0ZW0sXG4gIElvbkxhYmVsLFxuICBJb25CdXR0b24sXG4gIElvbkljb24sXG4gIElvbkNvbCxcbiAgSW9uR3JpZCxcbiAgSW9uTm90ZSxcbiAgSW9uUm93LFxuICBJb25Mb2FkaW5nLFxuICBJb25UZXh0LFxuICBJb25Ub2FzdCxcbiAgSW9uU3Bpbm5lcixcbn0gZnJvbSAnQGlvbmljL2FuZ3VsYXIvc3RhbmRhbG9uZSdcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbidcbmltcG9ydCB7IGFkZEljb25zIH0gZnJvbSAnaW9uaWNvbnMnXG5pbXBvcnQge1xuICBiaWN5Y2xlLFxuICBiYXR0ZXJ5RnVsbCxcbiAgYmF0dGVyeUhhbGYsXG4gIGJhdHRlcnlEZWFkLFxuICBiYXR0ZXJ5Q2hhcmdpbmcsXG4gIGxvY2tPcGVuLFxuICB0aHVtYnNVcCxcbn0gZnJvbSAnaW9uaWNvbnMvaWNvbnMnXG5pbXBvcnQgeyBSZWNvbW1hbmRhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4uL3JlY29tbWFuZGF0aW9uL3JlY29tbWFuZGF0aW9uLmNvbXBvbmVudCdcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnXG5pbXBvcnQgeyBMaXN0VmVoaWN1bGUyMDBSZXNwb25zZUFsbE9mRGF0YUlubmVyIH0gZnJvbSAnc3JjL2FwaS1jeWNsaXN0J1xuaW1wb3J0IHsgUmVudGluZ1NlcnZpY2UgfSBmcm9tICdzcmMvYXBwL3NlcnZpY2VzL2FwaS13cmFwcGVycy9yZW50aW5nLnNlcnZpY2UnXG5pbXBvcnQge1xuICBBY2NvdW50U2VydmljZSxcbiAgY3ljbGlzdFN0YXRlLFxufSBmcm9tICdzcmMvYXBwL3NlcnZpY2VzL2FwaS13cmFwcGVycy9hY2NvdW50LnNlcnZpY2UnXG5pbXBvcnQgeyBlZmZlY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdmVoaWNsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi92ZWhpY2xlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdmVoaWNsZS5jb21wb25lbnQuc2NzcyddLFxuICBpbXBvcnRzOiBbXG4gICAgSW9uSXRlbSxcbiAgICBJb25CdXR0b24sXG4gICAgSW9uSWNvbixcbiAgICBJb25Ob3RlLFxuICAgIFJlY29tbWFuZGF0aW9uQ29tcG9uZW50LFxuICAgIFRyYW5zbGF0ZU1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFZlaGljbGVDb21wb25lbnQge1xuICBASW5wdXQoKSB2ZWhpY2xlITogTGlzdFZlaGljdWxlMjAwUmVzcG9uc2VBbGxPZkRhdGFJbm5lclxuICBjeWNsaXN0U3RhdGU6IGN5Y2xpc3RTdGF0ZSA9IHtcbiAgICBzdGF0ZTogJ3Vua25vd24nLFxuICAgIGJsb2NrZWRfcmVhc29uczogWydVbmtub3duIGFjY291bnQgc3RhdGUnXSxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVudGluZ1NlcnZpY2U6IFJlbnRpbmdTZXJ2aWNlLFxuICAgIHB1YmxpYyBhY2NvdW50U2VydmljZTogQWNjb3VudFNlcnZpY2VcbiAgKSB7XG4gICAgYWRkSWNvbnMoe1xuICAgICAgYmljeWNsZSxcbiAgICAgIGJhdHRlcnlGdWxsLFxuICAgICAgYmF0dGVyeUhhbGYsXG4gICAgICBiYXR0ZXJ5RGVhZCxcbiAgICAgIGJhdHRlcnlDaGFyZ2luZyxcbiAgICAgIGxvY2tPcGVuLFxuICAgICAgdGh1bWJzVXAsXG4gICAgfSlcbiAgICBlZmZlY3QoKCkgPT4ge1xuICAgICAgdGhpcy5jeWNsaXN0U3RhdGUgPSB0aGlzLmFjY291bnRTZXJ2aWNlLmN5Y2xpc3RTdGF0ZSgpXG4gICAgfSlcbiAgfVxuXG4gIGdldEJhdHRlcnlJY29uKCk6IHN0cmluZyB7XG4gICAgY29uc3QgcGVyY2VudCA9IHRoaXMudmVoaWNsZS5iYXR0ZXJ5X3ZhZT8ucGVyY2VudCB8fCAwXG4gICAgaWYgKHBlcmNlbnQgPiA3MCkgcmV0dXJuICdiYXR0ZXJ5LWZ1bGwnXG4gICAgaWYgKHBlcmNlbnQgPiAzMCkgcmV0dXJuICdiYXR0ZXJ5LWhhbGYnXG4gICAgcmV0dXJuICdiYXR0ZXJ5LWRlYWQnXG4gIH1cbiAgYXN5bmMgcmVudCgpIHtcbiAgICBhd2FpdCB0aGlzLnJlbnRpbmdTZXJ2aWNlLnN0YXJ0UmVudGluZyh0aGlzLnZlaGljbGUpXG4gIH1cbn1cbiIsICI8aW9uLWl0ZW0gY2xhc3M9XCJpb24tbm8tcGFkZGluZyBpb24tbm8tbWFyZ2luIGVjbC1tb2RhbC1pdGVtc1wiIGxpbmVzPVwibm9uZVwiPlxuICA8aW9uLW5vdGUgc2xvdD1cInN0YXJ0XCIgY29sb3I9XCJkYXJrXCIgY2xhc3M9XCJpb24tdGV4dC1jZW50ZXJcIj5cbiAgICA8aW9uLWljb25cbiAgICAgICpuZ0lmPVwidmVoaWNsZS50eXBlID09PSAnc2Nvb3RlcidcIlxuICAgICAgc3JjPVwiLi4vLi4vLi4vLi4vYXNzZXRzL3N2Zy92ZWhpY3VsZVR5cGUvc2Nvb3Rlci5zdmdcIlxuICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICA+PC9pb24taWNvbj5cbiAgICA8aW9uLWljb25cbiAgICAgICpuZ0lmPVwidmVoaWNsZS50eXBlICE9PSAnc2Nvb3RlcidcIlxuICAgICAgc3JjPVwiLi4vLi4vLi4vLi4vYXNzZXRzL3N2Zy9mb250YXdlc29tZS90cmljeWNsZS1saWdodC5zdmdcIlxuICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICA+PC9pb24taWNvbj5cblxuICAgIDxoNCAqbmdJZj1cInZlaGljbGUubnVtYmVyISA8IDEwMDBcIiBjbGFzcz1cImlvbi1uby1tYXJnaW5cIj5cbiAgICAgIHt7IHZlaGljbGUubnVtYmVyIH19XG4gICAgPC9oND5cbiAgICA8aDVcbiAgICAgICpuZ0lmPVwidmVoaWNsZS5udW1iZXIhID4gOTk5ICYmIHZlaGljbGUubnVtYmVyISA8IDEwMDAwXCJcbiAgICAgIGNsYXNzPVwiaW9uLW5vLW1hcmdpblwiXG4gICAgPlxuICAgICAge3sgdmVoaWNsZS5udW1iZXIgfX1cbiAgICA8L2g1PlxuICAgIDxoNiAqbmdJZj1cInZlaGljbGUubnVtYmVyISA+IDk5OTlcIiBjbGFzcz1cImlvbi1uby1tYXJnaW5cIj5cbiAgICAgIHt7IHZlaGljbGUubnVtYmVyIH19XG4gICAgPC9oNj5cbiAgPC9pb24tbm90ZT5cbiAgPHVsIGNsYXNzPVwiaW9uLW5vLXBhZGRpbmdcIj5cbiAgICA8bGk+XG4gICAgICA8aW9uLWljb24gW25hbWVdPVwiZ2V0QmF0dGVyeUljb24oKVwiPjwvaW9uLWljb24+XG4gICAgPC9saT5cbiAgICA8bGk+XG4gICAgICA8aW9uLWljb24gc3JjPVwiLi4vLi4vLi4vLi4vYXNzZXRzL3N2Zy9mb250YXdlc29tZS90aWxkLnN2Z1wiPjwvaW9uLWljb24+XG4gICAgPC9saT5cbiAgPC91bD5cbiAgPHVsIGNsYXNzPVwiaW9uLW5vLXBhZGRpbmcgZWNsLXBhZGRpbmctc3RhcnRcIj5cbiAgICA8bGk+XG4gICAgICA8c3Bhbj57eyB2ZWhpY2xlLmJhdHRlcnlfdmFlPy5wZXJjZW50IH19JTwvc3Bhbj5cbiAgICA8L2xpPlxuICAgIDxsaT5cbiAgICAgIDxzcGFuXG4gICAgICAgID57e1xuICAgICAgICAgICh2ZWhpY2xlLmJhdHRlcnlfdmFlPy5yZW1haW5pbmdfZGlzdGFuY2UgLyAxMDAwKS50b0ZpeGVkKDEpXG4gICAgICAgIH19a208L3NwYW5cbiAgICAgID5cbiAgICA8L2xpPlxuICA8L3VsPlxuXG4gIDxhcHAtcmVjb21tYW5kYXRpb25cbiAgICAqbmdJZj1cInZlaGljbGUucmVjb21tZW5kZWQgIT09IG51bGxcIlxuICAgIFtyZWNvbW1lbmRlZF09XCJ2ZWhpY2xlLnJlY29tbWVuZGVkIVwiXG4gICAgc2xvdD1cImVuZFwiXG4gID48L2FwcC1yZWNvbW1hbmRhdGlvbj5cbiAgPGlvbi1idXR0b25cbiAgICBzbG90PVwiZW5kXCJcbiAgICBzaGFwZT1cInJvdW5kXCJcbiAgICBzaXplPVwibWVkaXVtXCJcbiAgICBbZGlzYWJsZWRdPVwiIXZlaGljbGUucmVudGFibGUgfHwgYWNjb3VudFNlcnZpY2UuaGFzQmxvY2tlZFJlYXNvbnMoKVwiXG4gICAgKGNsaWNrKT1cInJlbnQoKVwiXG4gICAgPnt7ICd2ZWhpY2xlLnVubG9jaycgfCB0cmFuc2xhdGUgfX08L2lvbi1idXR0b25cbiAgPlxuPC9pb24taXRlbT5cbiIsICJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcydcbmltcG9ydCB7XG4gIElvbkxpc3QsXG4gIElvbkl0ZW0sXG4gIElvbkxhYmVsLFxuICBJb25JY29uLFxuICBJb25CdXR0b24sXG4gIElvblNwaW5uZXIsXG4gIElvblNrZWxldG9uVGV4dCxcbiAgSW9uVGV4dCxcbiAgSW9uTm90ZSxcbn0gZnJvbSAnQGlvbmljL2FuZ3VsYXIvc3RhbmRhbG9uZSdcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbidcbmltcG9ydCB7IFZlaGljbGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi92ZWhpY2xlL3ZlaGljbGUuY29tcG9uZW50J1xuaW1wb3J0IHtcbiAgTGlzdFN0YXRpb24yMDBSZXNwb25zZSxcbiAgTGlzdFN0YXRpb24yMDBSZXNwb25zZUFsbE9mRGF0YUlubmVyLFxufSBmcm9tICdzcmMvYXBpLWN5Y2xpc3QnXG5pbXBvcnQgeyBsb2NhdGlvbk91dGxpbmUgfSBmcm9tICdpb25pY29ucy9pY29ucydcbmltcG9ydCB7IGFkZEljb25zIH0gZnJvbSAnaW9uaWNvbnMnXG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJ1xuaW1wb3J0IHtcbiAgR2VvbG9jYXRpb25TZXJ2aWNlLFxuICBHZW9sb2NhdGlvblN0YXRlLFxufSBmcm9tICdzcmMvYXBwL3NlcnZpY2VzL3V0aWxzL2dlb2xvY2F0aW9uLnNlcnZpY2UnXG5pbXBvcnQgeyBTdGF0aW9uV3JhcHBlclNlcnZpY2UgfSBmcm9tICdzcmMvYXBwL3NlcnZpY2VzL2FwaS13cmFwcGVycy9zdGF0aW9ucy5zZXJ2aWNlJ1xuXG50eXBlIExvYWRpbmdTdGF0ZSA9XG4gIHwgeyBzdGF0ZTogJ0xPQURJTkcnIH1cbiAgfCB7IHN0YXRlOiAnTk9fTkVBUkJZX1NUQVRJT05TX09SX1ZFSElDTEVTJyB9XG4gIHwgeyBzdGF0ZTogJ0VSUk9SJzsgZXJyb3I6IEVycm9yIH1cbiAgfCB7XG4gICAgICBzdGF0ZTogJ0xPQURJTkdfSU5fUFJPR1JFU1MnXG4gICAgICBzdGF0aW9uczogTGlzdFN0YXRpb24yMDBSZXNwb25zZUFsbE9mRGF0YUlubmVyW11cbiAgICB9XG4gIHwge1xuICAgICAgc3RhdGU6ICdTVUNDRVNTJ1xuICAgICAgc3RhdGlvbnM6IExpc3RTdGF0aW9uMjAwUmVzcG9uc2VBbGxPZkRhdGFJbm5lcltdXG4gICAgfVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbmVhcmVzdC12ZWhpY2xlcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9uZWFyZXN0LXZlaGljbGVzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmVhcmVzdC12ZWhpY2xlcy5jb21wb25lbnQuc2NzcyddLFxuICBpbXBvcnRzOiBbXG4gICAgSW9uTGlzdCxcbiAgICBJb25JdGVtLFxuICAgIElvblNrZWxldG9uVGV4dCxcbiAgICBJb25Ob3RlLFxuICAgIElvbkJ1dHRvbixcbiAgICBJb25UZXh0LFxuICAgIElvbkljb24sXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFRyYW5zbGF0ZU1vZHVsZSxcbiAgICBWZWhpY2xlQ29tcG9uZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOZWFyZXN0VmVoaWNsZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBzdGF0aW9ucyQ6IE9ic2VydmFibGU8TGlzdFN0YXRpb24yMDBSZXNwb25zZT5cbiAgbG9hZGluZ1N0YXRlOiBMb2FkaW5nU3RhdGUgPSB7XG4gICAgc3RhdGU6ICdMT0FESU5HJyxcbiAgfVxuICBnZW9sb2NTdGF0ZTogR2VvbG9jYXRpb25TdGF0ZVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBnZW9sb2NhdGlvblNlcnZpY2U6IEdlb2xvY2F0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIHN0YXRpb25XcmFwcGVyU2VydmljZTogU3RhdGlvbldyYXBwZXJTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuZ2VvbG9jYXRpb25TZXJ2aWNlLmdlb2xvY2F0aW9uU3RhdGUuc3Vic2NyaWJlKChzdGF0ZSkgPT4ge1xuICAgICAgdGhpcy5nZW9sb2NTdGF0ZSA9IHN0YXRlXG4gICAgfSlcbiAgICBhZGRJY29ucyh7IGxvY2F0aW9uT3V0bGluZSB9KVxuICB9XG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubG9hZFN0YXRpb25zKClcbiAgfVxuICBwcml2YXRlIGFzeW5jIGxvYWRTdGF0aW9ucygpIHtcbiAgICB0aGlzLmxvYWRpbmdTdGF0ZSA9IHsgc3RhdGU6ICdMT0FESU5HJyB9XG4gICAgaWYgKFxuICAgICAgdGhpcy5nZW9sb2NTdGF0ZS5zdGF0ZSA9PT0gJ2xpdmVfcG9zaXRpb24nIHx8XG4gICAgICB0aGlzLmdlb2xvY1N0YXRlLnN0YXRlID09PSAndW5pcXVlX3Bvc2l0aW9uJ1xuICAgICkge1xuICAgICAgdGhpcy5zdGF0aW9uV3JhcHBlclNlcnZpY2VcbiAgICAgICAgLmdldE5lYXJieVN0YXRpb25zKHRoaXMuZ2VvbG9jU3RhdGUucG9zaXRpb24uY29vcmRzLCAxMDAwLCB0cnVlKVxuICAgICAgICAudGhlbigoc3RhdGlvbnMpID0+IHtcbiAgICAgICAgICBpZiAoc3RhdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nU3RhdGUgPSB7IHN0YXRlOiAnU1VDQ0VTUycsIHN0YXRpb25zIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nU3RhdGUgPSB7IHN0YXRlOiAnTk9fTkVBUkJZX1NUQVRJT05TX09SX1ZFSElDTEVTJyB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nU3RhdGUgPSB7IHN0YXRlOiAnRVJST1InLCBlcnJvciB9XG4gICAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9hZGluZ1N0YXRlID0geyBzdGF0ZTogJ05PX05FQVJCWV9TVEFUSU9OU19PUl9WRUhJQ0xFUycgfVxuICAgIH1cbiAgfVxuXG4gIGNhbGN1bGF0ZURpc3RhbmNlKHN0YXRpb246IExpc3RTdGF0aW9uMjAwUmVzcG9uc2VBbGxPZkRhdGFJbm5lcikge1xuICAgIGlmIChcbiAgICAgIHRoaXMuZ2VvbG9jU3RhdGUuc3RhdGUgPT09ICdsaXZlX3Bvc2l0aW9uJyB8fFxuICAgICAgdGhpcy5nZW9sb2NTdGF0ZS5zdGF0ZSA9PT0gJ3VuaXF1ZV9wb3NpdGlvbidcbiAgICApIHtcbiAgICAgIGNvbnN0IGRpc3RhbmNlID0gdGhpcy5nZW9sb2NhdGlvblNlcnZpY2UuY2FsY3VsYXRlRGlzdGFuY2UoXG4gICAgICAgIHRoaXMuZ2VvbG9jU3RhdGUucG9zaXRpb24uY29vcmRzLFxuICAgICAgICB7XG4gICAgICAgICAgbGF0aXR1ZGU6IE51bWJlcihzdGF0aW9uLnBvc2l0aW9uPy5sYXRpdHVkZSksXG4gICAgICAgICAgbG9uZ2l0dWRlOiBOdW1iZXIoc3RhdGlvbi5wb3NpdGlvbj8ubG9uZ2l0dWRlKSxcbiAgICAgICAgfVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gZGlzdGFuY2VcbiAgICB9XG4gICAgcmV0dXJuIDBcbiAgfVxufVxuIiwgIjxpb24taXRlbSBsaW5lcz1cIm5vbmVcIiBjbGFzcz1cImVjbC1pb25pdGVtX3RpdGxlXCI+XG4gIDxoMj5cbiAgICB7eyAnbmVhcmVzdF92ZWhpY2xlcy50aXRsZScgfCB0cmFuc2xhdGUgfX1cbiAgPC9oMj5cbjwvaW9uLWl0ZW0+XG5AaWYobG9hZGluZ1N0YXRlLnN0YXRlID09PSAnTE9BRElORycgfHwgbG9hZGluZ1N0YXRlLnN0YXRlID09PVxuJ0xPQURJTkdfSU5fUFJPR1JFU1MnKSB7XG48aW9uLXNrZWxldG9uLXRleHQgW2FuaW1hdGVkXT1cInRydWVcIiBzdHlsZT1cIndpZHRoOiA4MCVcIj48L2lvbi1za2VsZXRvbi10ZXh0PlxuPGlvbi1za2VsZXRvbi10ZXh0XG4gIFthbmltYXRlZF09XCJ0cnVlXCJcbiAgc3R5bGU9XCJ3aWR0aDogMTAwJTsgaGVpZ2h0OiAyMDBweDsgbWFyZ2luLXRvcDogMTBweFwiXG4+PC9pb24tc2tlbGV0b24tdGV4dD5cbn0gQGVsc2UgaWYobG9hZGluZ1N0YXRlLnN0YXRlID09PSAnTk9fTkVBUkJZX1NUQVRJT05TX09SX1ZFSElDTEVTJykge1xuPGlvbi10ZXh0IGNsYXNzPVwiaW9uLW1hcmdpbi1zdGFydFwiPkF1Y3VuIHbDqWhpY3VsZSDDoCBwcm94aW1pdMOpPC9pb24tdGV4dD5cbn0gQGVsc2UgaWYgKGxvYWRpbmdTdGF0ZS5zdGF0ZSA9PT0gJ0VSUk9SJykge1xuPGlvbi10ZXh0XG4gID57eyAnbmVhcmVzdF92ZWhpY2xlcy5lcnJvcicgfCB0cmFuc2xhdGUgfX0ge3sgbG9hZGluZ1N0YXRlLmVycm9yIH19PC9pb24tdGV4dFxuPlxufSBAaWYobG9hZGluZ1N0YXRlLnN0YXRlID09PSAnU1VDQ0VTUycpIHtcbjxpb24tbGlzdD5cbiAgQGZvciAoc3RhdGlvbiBvZiBsb2FkaW5nU3RhdGUuc3RhdGlvbnM7IHRyYWNrIHN0YXRpb24uaWQpIHtcbiAgQGlmKHN0YXRpb24udmVoaWN1bGVzICYmIHN0YXRpb24udmVoaWN1bGVzLmRhdGEgJiZcbiAgc3RhdGlvbi52ZWhpY3VsZXMuZGF0YS5sZW5ndGggPiAwKSB7XG4gIDxpb24taXRlbSBsaW5lcz1cIm5vbmVcIiBjbGFzcz1cImlvbi1uby1wYWRkaW5nIGlvbi1uby1tYXJnaW4gZWNsLW1vZGFsLWl0ZW1zXCI+XG4gICAgPGlvbi1ub3RlIHNsb3Q9XCJzdGFydFwiIGNvbG9yPVwiZGFya1wiIGNsYXNzPVwiaW9uLXRleHQtY2VudGVyIGlvbi1uby1tYXJnaW5cIj5cbiAgICAgIDxpb24taWNvbiBuYW1lPVwibG9jYXRpb24tb3V0bGluZVwiIHNpemU9XCJsYXJnZVwiPjwvaW9uLWljb24+XG4gICAgPC9pb24tbm90ZT5cbiAgICA8aVxuICAgICAgPnt7IHN0YXRpb24ubmFtZSB9fVxuICAgICAgPHNwYW4gKm5nSWY9XCJjYWxjdWxhdGVEaXN0YW5jZShzdGF0aW9uKVwiPlxuICAgICAgICAtXG4gICAgICAgIHt7IGNhbGN1bGF0ZURpc3RhbmNlKHN0YXRpb24pIH19bTwvc3BhblxuICAgICAgPjwvaVxuICAgID5cbiAgICBAaWYoc3RhdGlvbi5wb3NpdGlvbikge1xuICAgIDxpb24tYnV0dG9uXG4gICAgICBzbG90PVwiZW5kXCJcbiAgICAgIGZpbGw9XCJvdXRsaW5lXCJcbiAgICAgIGNvbG9yPVwiZGFya1wiXG4gICAgICBzaGFwZT1cInJvdW5kXCJcbiAgICAgIGNsYXNzPVwiZWNsLW5vLXNoYWRvd1wiXG4gICAgICAoY2xpY2spPVwiXG4gICAgICAgIGdlb2xvY2F0aW9uU2VydmljZS5vcGVuTWFwcyhcbiAgICAgICAgICBzdGF0aW9uLnBvc2l0aW9uLmxhdGl0dWRlLFxuICAgICAgICAgIHN0YXRpb24ucG9zaXRpb24ubG9uZ2l0dWRlLFxuICAgICAgICAgICd3YWxraW5nJ1xuICAgICAgICApXG4gICAgICBcIlxuICAgID5cbiAgICAgIDxpb24taWNvblxuICAgICAgICBzcmM9XCIuLi8uLi8uLi8uLi9hc3NldHMvc3ZnL2ZvbnRhd2Vzb21lL2RpYW1vbmQtdHVybi1yaWdodC1yZWd1bGFyLnN2Z1wiXG4gICAgICAgIHNsb3Q9XCJzdGFydFwiXG4gICAgICA+PC9pb24taWNvbj5cbiAgICAgIDxpPnt7ICdnZW5lcmljLmdldF9kaXJlY3Rpb25zJyB8IHRyYW5zbGF0ZSB9fTwvaT5cbiAgICA8L2lvbi1idXR0b24+XG4gICAgfVxuICA8L2lvbi1pdGVtPlxuICA8YXBwLXZlaGljbGVcbiAgICAqbmdGb3I9XCJsZXQgdmVoaWNsZSBvZiBzdGF0aW9uLnZlaGljdWxlcy5kYXRhLnNsaWNlKDAsIDMpIHx8IFtdXCJcbiAgICBbdmVoaWNsZV09XCJ2ZWhpY2xlXCJcbiAgPjwvYXBwLXZlaGljbGU+XG4gIH0gfVxuPC9pb24tbGlzdD5cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNZSSxJQUFBLHlCQUFBLEdBQUEsR0FBQTtBQUNHLElBQUEsaUJBQUEsQ0FBQTs7QUFDZ0MsSUFBQSx1QkFBQTs7OztBQURoQyxJQUFBLG9CQUFBO0FBQUEsSUFBQSw2QkFBQSxJQUFBLHNCQUFBLEdBQUEsR0FBQSwrQkFBQSxHQUFBLEtBQUEsT0FBQSxZQUFBLGlCQUFBLEVBQUE7OztBREFELElBQU8sMkJBQVAsTUFBTyx5QkFBdUI7RUFJbEMsZUFBZSxHQUFRO0FBQ3JCLFNBQUssUUFBUSxRQUFRO0FBQ3JCLFNBQUssU0FBUztFQUNoQjtFQUNBLGNBQUE7QUFMQSxTQUFBLFNBQVM7QUFNUCxhQUFTLEVBQUUsU0FBUSxDQUFFO0VBQ3ZCOzs7bUNBVlcsMEJBQXVCO0FBQUE7eUZBQXZCLDBCQUF1QixXQUFBLENBQUEsQ0FBQSxvQkFBQSxDQUFBLEdBQUEsV0FBQSxTQUFBLDhCQUFBLElBQUEsS0FBQTtBQUFBLE1BQUEsS0FBQSxHQUFBOzs7Ozs7Ozs7O0FDYnBDLElBQUEseUJB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QUFBLFVBQUEsR0FBQSxPQUFBLElBQUEsTUFBQSxJQUFBLFFBQUEsQ0FBQSxDQUFBLFNBQUEsUUFBQSxHQUFBLGtCQUFBLGlCQUFBLGlCQUFBLEdBQUEsQ0FBQSxRQUFBLFNBQUEsU0FBQSxRQUFBLEdBQUEsaUJBQUEsR0FBQSxDQUFBLE9BQUEsbURBQUEsUUFBQSxTQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsT0FBQSx5REFBQSxRQUFBLFNBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxTQUFBLGlCQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsR0FBQSxnQkFBQSxHQUFBLENBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxPQUFBLDZDQUFBLEdBQUEsQ0FBQSxHQUFBLGtCQUFBLG1CQUFBLEdBQUEsQ0FBQSxRQUFBLE9BQUEsR0FBQSxlQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsUUFBQSxPQUFBLFNBQUEsU0FBQSxRQUFBLFVBQUEsR0FBQSxTQUFBLFVBQUEsR0FBQSxDQUFBLE9BQUEsbURBQUEsUUFBQSxPQUFBLEdBQUEsQ0FBQSxPQUFBLHlEQUFBLFFBQUEsT0FBQSxHQUFBLENBQUEsR0FBQSxlQUFBLEdBQUEsQ0FBQSxRQUFBLE9BQUEsR0FBQSxhQUFBLENBQUEsR0FBQSxVQUFBLFNBQUEsMEJBQUEsSUFBQSxLQUFBO0FBQUEsTUFBQSxLQUFBLEdBQUE7QUNsRDdCLElBQUEseUJBQUEsR0FBQSxZQUFBLENBQUEsRUFBNEUsR0FBQSxZQUFBLENBQUE7QUFFeEUsSUFBQSxxQkFBQSxHQUFBLHNDQUFBLEdBQUEsR0FBQSxZQUFBLENBQUEsRUFJQyxHQUFBLHNDQUFBLEdBQUEsR0FBQSxZQUFBLENBQUEsRUFLQSxHQUFBLGdDQUFBLEdBQUEsR0FBQSxNQUFBLENBQUEsRUFFd0QsR0FBQSxnQ0FBQSxHQUFBLEdBQUEsTUFBQSxDQUFBLEVBTXhELEdBQUEsZ0NBQUEsR0FBQSxHQUFBLE1BQUEsQ0FBQTtBQU1ILElBQUEsdUJBQUE7QUFDQSxJQUFBLHlCQUFBLEdBQUEsTUFBQSxDQUFBLEVBQTJCLEdBQUEsSUFBQTtB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
