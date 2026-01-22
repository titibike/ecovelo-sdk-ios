import {
  RentingService
} from "./chunk-5RMBP5UX.js";
import {
  HeaderComponent
} from "./chunk-AVAJ3QHV.js";
import "./chunk-5KXLLE34.js";
import "./chunk-S5TR5TQN.js";
import "./chunk-OEYRANOA.js";
import "./chunk-K2AWDLYV.js";
import "./chunk-RFEPADPA.js";
import {
  IonIcon as IonIcon2,
  IonItem as IonItem2,
  IonLabel as IonLabel2,
  IonRow as IonRow2,
  IonicModule
} from "./chunk-Y4K6NO5T.js";
import "./chunk-WJQU3GMM.js";
import "./chunk-CHFOG66O.js";
import "./chunk-RAVV2QIY.js";
import "./chunk-T6WE2PS5.js";
import "./chunk-XK4I5MHM.js";
import "./chunk-GVYZRG6X.js";
import "./chunk-FOJAXRYS.js";
import "./chunk-Y7HI6USV.js";
import "./chunk-SARQRLZR.js";
import {
  addIcons,
  bicycleOutline,
  flameOutline,
  leafOutline,
  lockOpen
} from "./chunk-3E6DEK7U.js";
import "./chunk-U6SJAXLK.js";
import {
  CommonModule,
  Component,
  DatePipe,
  FormsModule,
  Input,
  IonBadge,
  IonButton,
  IonCol,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonProgressBar,
  IonRefresher,
  IonRow,
  IonSkeletonText,
  IonText,
  NgForOf,
  NgIf,
  Pipe,
  RouterLink,
  TranslateModule,
  TranslatePipe,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
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
import "./chunk-UESUV5PM.js";

// src/app/pipes/co2saved.pipe.ts
var _co2savedPipe = class _co2savedPipe {
  transform(co2, distance, ...args) {
    if (co2 > 0) {
      return Math.trunc(distance / 1e3 * 220 - co2);
    } else {
      return co2;
    }
  }
};
_co2savedPipe.\u0275fac = function co2savedPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _co2savedPipe)();
};
_co2savedPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "co2saved", type: _co2savedPipe, pure: true });
var co2savedPipe = _co2savedPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(co2savedPipe, [{
    type: Pipe,
    args: [{
      name: "co2saved",
      standalone: true
    }]
  }], null, null);
})();

// src/app/shared/components/trip-item/trip-item.component.ts
function TripItemComponent_strong_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "strong");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.trip.amount / 100, "\u20AC");
  }
}
function TripItemComponent_strong_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "strong");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275element(3, "ion-icon", 8);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "trip.status." + ctx_r0.trip.status), " - ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.trip.pin, "");
  }
}
function TripItemComponent_p_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, ctx_r0.trip.end_timestamp * 1e3, "dd/MM/yy HH:mm"), " ");
  }
}
function TripItemComponent_p_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, ctx_r0.trip.termination_requested_timestamp * 1e3, "dd/MM/yy HH:mm"), " ");
  }
}
var _TripItemComponent = class _TripItemComponent {
  constructor(rentingService) {
    this.rentingService = rentingService;
    addIcons({
      lockOpen
    });
  }
  hasActiveTripOverThreeHours() {
    return this.rentingService.hasActiveTripOverThreeHours(this.trip);
  }
  hasActiveTripOver24Hours() {
    return this.rentingService.hasActiveTripOver24Hours(this.trip);
  }
};
_TripItemComponent.\u0275fac = function TripItemComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TripItemComponent)(\u0275\u0275directiveInject(RentingService));
};
_TripItemComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TripItemComponent, selectors: [["app-trip-item"]], inputs: { trip: "trip" }, decls: 35, vars: 23, consts: [[3, "color"], [1, "ion-text-wrap"], [1, "ion-justify-content-between"], [2, "display", "flex", "align-items", "center", "gap", "3px"], ["src", "../../../../assets/svg/fontawesome/tricycle-regular.svg"], [4, "ngIf"], ["name", "leaf-outline", "color", "success"], ["name", "flame-outline", "color", "danger"], ["name", "lock-open"]], template: function TripItemComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item", 0)(1, "ion-label", 1)(2, "ion-row", 2)(3, "div", 3);
    \u0275\u0275element(4, "ion-icon", 4);
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, TripItemComponent_strong_7_Template, 2, 1, "strong", 5)(8, TripItemComponent_strong_8_Template, 5, 4, "strong", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "ion-row", 2)(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "ion-row", 2)(15, "p");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, TripItemComponent_p_18_Template, 3, 4, "p", 5)(19, TripItemComponent_p_19_Template, 3, 4, "p", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "ion-row", 2)(21, "p");
    \u0275\u0275element(22, "ion-icon", 6);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "co2saved");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "ion-row", 2)(29, "p");
    \u0275\u0275element(30, "ion-icon", 7);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "p");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("color", ctx.hasActiveTripOverThreeHours() ? "primary" : ctx.hasActiveTripOver24Hours() ? "warning" : "grey");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx.trip.vehicule_number);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.trip.status === "completed");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.trip.status !== "completed");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.trip.start_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.trip.end_name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 13, ctx.trip.start_timestamp * 1e3, "dd/MM/yy HH:mm"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.trip.end_timestamp > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.trip.status === "termination_requested");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 16, "trip.metrics.co2_saved"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(27, 18, ctx.trip.g_CO2_km, ctx.trip.distance || 0));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 21, "trip.metrics.kcal_burned"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.trip.kcal_burned || 0);
  }
}, dependencies: [IonicModule, IonIcon2, IonItem2, IonLabel2, IonRow2, CommonModule, NgIf, DatePipe, co2savedPipe, TranslateModule, TranslatePipe], encapsulation: 2 });
var TripItemComponent = _TripItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TripItemComponent, [{
    type: Component,
    args: [{ selector: "app-trip-item", imports: [IonicModule, CommonModule, co2savedPipe, TranslateModule], template: `<ion-item
  [color]="
    hasActiveTripOverThreeHours()
      ? 'primary'
      : hasActiveTripOver24Hours()
      ? 'warning'
      : 'grey'
  "
>
  <ion-label class="ion-text-wrap">
    <ion-row class="ion-justify-content-between">
      <div style="display: flex; align-items: center; gap: 3px">
        <ion-icon
          src="../../../../assets/svg/fontawesome/tricycle-regular.svg"
        ></ion-icon>
        <strong>{{ trip.vehicule_number }}</strong>
      </div>
      <strong *ngIf="trip.status === 'completed'"
        >{{ trip.amount / 100 }}\u20AC</strong
      >

      <strong *ngIf="trip.status !== 'completed'">
        {{ 'trip.status.' + trip.status | translate }} -
        <ion-icon name="lock-open"></ion-icon> {{ trip.pin }}</strong
      >
    </ion-row>
    <ion-row class="ion-justify-content-between">
      <p>{{ trip.start_name }}</p>
      <p>{{ trip.end_name }}</p>
    </ion-row>
    <ion-row class="ion-justify-content-between">
      <p>{{ trip.start_timestamp * 1000 | date : 'dd/MM/yy HH:mm' }}</p>
      <p *ngIf="trip.end_timestamp > 0">
        {{ trip.end_timestamp * 1000 | date : 'dd/MM/yy HH:mm' }}
      </p>
      <p *ngIf="trip.status === 'termination_requested'">
        {{
          trip.termination_requested_timestamp * 1000 | date : 'dd/MM/yy HH:mm'
        }}
      </p>
    </ion-row>
    <ion-row class="ion-justify-content-between">
      <p>
        <ion-icon name="leaf-outline" color="success"></ion-icon>
        {{ 'trip.metrics.co2_saved' | translate }}
      </p>
      <p>{{ trip.g_CO2_km | co2saved : trip.distance || 0 }}</p>
    </ion-row>
    <ion-row class="ion-justify-content-between">
      <p>
        <ion-icon name="flame-outline" color="danger"></ion-icon>
        {{ 'trip.metrics.kcal_burned' | translate }}
      </p>
      <p>{{ trip.kcal_burned || 0 }}</p>
    </ion-row>
  </ion-label>
</ion-item>
` }]
  }], () => [{ type: RentingService }], { trip: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TripItemComponent, { className: "TripItemComponent", filePath: "src/app/shared/components/trip-item/trip-item.component.ts", lineNumber: 15 });
})();

// src/app/components/dring/trips-dring/trips-dring.component.ts
var _c0 = () => ["/renting"];
var _TripsDringComponent = class _TripsDringComponent {
  constructor() {
  }
};
_TripsDringComponent.\u0275fac = function TripsDringComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TripsDringComponent)();
};
_TripsDringComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TripsDringComponent, selectors: [["app-trips-dring"]], decls: 12, vars: 11, consts: [[1, "ion-no-margin", 2, "display", "flex", "align-items", "center"], ["src", "assets/svg/dring_dring.svg"], [1, "ion-margin-start", "pacifico-regular"], [1, "ion-margin-bottom"], ["expand", "block", "color", "primary", 1, "ion-margin-top", 3, "routerLink"], ["name", "bicycle-outline", "slot", "start"]], template: function TripsDringComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1", 0);
    \u0275\u0275element(1, "img", 1);
    \u0275\u0275elementStart(2, "span", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p", 3);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ion-button", 4);
    \u0275\u0275element(9, "ion-icon", 5);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, "generic.dring"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 6, "trips_dring.description"), "\n");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(10, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 8, "trips_dring.start_trip"), "\n");
  }
}, dependencies: [CommonModule, TranslateModule, TranslatePipe, IonButton, IonIcon, RouterLink], encapsulation: 2 });
var TripsDringComponent = _TripsDringComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TripsDringComponent, [{
    type: Component,
    args: [{ selector: "app-trips-dring", imports: [CommonModule, TranslateModule, IonButton, IonIcon, RouterLink], template: `<h1 style="display: flex; align-items: center" class="ion-no-margin">
  <img src="assets/svg/dring_dring.svg" />
  <span class="ion-margin-start pacifico-regular">{{
    'generic.dring' | translate
  }}</span>
</h1>

<p class="ion-margin-bottom">
  {{ 'trips_dring.description' | translate }}
</p>

<ion-button
  expand="block"
  color="primary"
  class="ion-margin-top"
  [routerLink]="['/renting']"
>
  <ion-icon name="bicycle-outline" slot="start"></ion-icon>
  {{ 'trips_dring.start_trip' | translate }}
</ion-button>
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TripsDringComponent, { className: "TripsDringComponent", filePath: "src/app/components/dring/trips-dring/trips-dring.component.ts", lineNumber: 20 });
})();

// src/app/pages/account/trips/trips.page.ts
var _c02 = () => [];
function TripsPage_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-progress-bar", 1);
  }
}
function TripsPage_Conditional_6_app_trip_item_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-trip-item", 11);
  }
  if (rf & 2) {
    const trip_r1 = ctx.$implicit;
    \u0275\u0275property("trip", trip_r1);
  }
}
function TripsPage_Conditional_6_app_trip_item_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-trip-item", 11);
  }
  if (rf & 2) {
    const trip_r2 = ctx.$implicit;
    \u0275\u0275property("trip", trip_r2);
  }
}
function TripsPage_Conditional_6_ion_text_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-text");
    \u0275\u0275text(1, "+");
    \u0275\u0275elementEnd();
  }
}
function TripsPage_Conditional_6_app_trip_item_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-trip-item", 11);
  }
  if (rf & 2) {
    const trip_r3 = ctx.$implicit;
    \u0275\u0275property("trip", trip_r3);
  }
}
function TripsPage_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "ion-badge", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "ion-list", 8);
    \u0275\u0275template(6, TripsPage_Conditional_6_app_trip_item_6_Template, 1, 1, "app-trip-item", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h4", 6);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementStart(10, "ion-badge", 7);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "ion-list", 8);
    \u0275\u0275template(13, TripsPage_Conditional_6_app_trip_item_13_Template, 1, 1, "app-trip-item", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "h4", 6);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementStart(17, "ion-badge", 7);
    \u0275\u0275text(18);
    \u0275\u0275template(19, TripsPage_Conditional_6_ion_text_19_Template, 2, 0, "ion-text", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "ion-list", 8);
    \u0275\u0275template(21, TripsPage_Conditional_6_app_trip_item_21_Template, 1, 1, "app-trip-item", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 13, "trips.today"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.tripsState.todayTrips.length);
    \u0275\u0275advance();
    \u0275\u0275property("inset", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.tripsState.todayTrips);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 15, "trips.yesterday"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.tripsState.yesterdayTrips.length);
    \u0275\u0275advance();
    \u0275\u0275property("inset", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.tripsState.yesterdayTrips);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 17, "trips.previous"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r3.tripsState.olderTrips.length, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.tripsState.hasMoreTrips);
    \u0275\u0275advance();
    \u0275\u0275property("inset", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.tripsState.olderTrips);
  }
}
function TripsPage_Conditional_7_ion_item_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item")(1, "ion-label")(2, "h3");
    \u0275\u0275element(3, "ion-skeleton-text", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275element(5, "ion-skeleton-text", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275element(7, "ion-skeleton-text", 15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("animated", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("animated", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("animated", true);
  }
}
function TripsPage_Conditional_7_ion_item_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item")(1, "ion-label")(2, "h3");
    \u0275\u0275element(3, "ion-skeleton-text", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275element(5, "ion-skeleton-text", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275element(7, "ion-skeleton-text", 15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("animated", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("animated", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("animated", true);
  }
}
function TripsPage_Conditional_7_ion_item_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item")(1, "ion-label")(2, "h3");
    \u0275\u0275element(3, "ion-skeleton-text", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275element(5, "ion-skeleton-text", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275element(7, "ion-skeleton-text", 15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("animated", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("animated", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("animated", true);
  }
}
function TripsPage_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-list");
    \u0275\u0275template(4, TripsPage_Conditional_7_ion_item_4_Template, 8, 3, "ion-item", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4", 6);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ion-list");
    \u0275\u0275template(9, TripsPage_Conditional_7_ion_item_9_Template, 8, 3, "ion-item", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h4", 6);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "ion-list");
    \u0275\u0275template(14, TripsPage_Conditional_7_ion_item_14_Template, 8, 3, "ion-item", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 6, "trips.today"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(12, _c02).constructor(ctx_r3.skeletonCount));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 8, "trips.yesterday"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(13, _c02).constructor(ctx_r3.skeletonCount));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 10, "trips.previous"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(14, _c02).constructor(ctx_r3.skeletonCount));
  }
}
function TripsPage_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-trips-dring");
  }
}
var _TripsPage = class _TripsPage {
  constructor(rentingService) {
    this.rentingService = rentingService;
    this.tripsState = { state: "loading" };
    this.skeletonCount = 2;
    addIcons({ leafOutline, flameOutline, bicycleOutline });
  }
  ngOnInit() {
    this.refresh();
  }
  handleRefresh(event) {
    this.refresh().then(() => {
      event.target.complete();
    });
  }
  refresh() {
    return new Promise((resolve, reject) => {
      this.tripsState = { state: "loading" };
      this.rentingService.getUserTrips().subscribe((trips) => {
        if (trips.data.length === 0) {
          this.tripsState = { state: "noData" };
          resolve();
          return;
        }
        const now = Math.floor(Date.now() / 1e3);
        const todayStart = now - now % 86400;
        const yesterdayStart = todayStart - 86400;
        const newState = {
          state: "loaded",
          hasMoreTrips: trips.has_more,
          todayTrips: [],
          yesterdayTrips: [],
          olderTrips: []
        };
        trips.data.forEach((trip) => {
          if (trip.created >= todayStart) {
            newState.todayTrips.push(trip);
          } else if (trip.created >= yesterdayStart) {
            newState.yesterdayTrips.push(trip);
          } else {
            newState.olderTrips.push(trip);
          }
        });
        this.tripsState = newState;
        resolve();
      });
    });
  }
};
_TripsPage.\u0275fac = function TripsPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TripsPage)(\u0275\u0275directiveInject(RentingService));
};
_TripsPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TripsPage, selectors: [["app-trips"]], decls: 9, vars: 5, consts: [[3, "defaultHref"], ["type", "indeterminate"], [1, "ion-padding"], [1, "ion-justify-content-center"], ["size", "12", "size-md", "8", "size-lg", "6"], ["slot", "fixed", 3, "ionRefresh"], [1, "ion-margin"], ["color", "primary"], ["mode", "ios", 3, "inset"], [3, "trip", 4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "trip"], [4, "ngFor", "ngForOf"], [2, "width", "80%", 3, "animated"], [2, "width", "60%", 3, "animated"], [2, "width", "30%", 3, "animated"]], template: function TripsPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-header", 0);
    \u0275\u0275template(1, TripsPage_Conditional_1_Template, 1, 0, "ion-progress-bar", 1);
    \u0275\u0275elementStart(2, "ion-content", 2)(3, "ion-row", 3)(4, "ion-col", 4)(5, "ion-refresher", 5);
    \u0275\u0275listener("ionRefresh", function TripsPage_Template_ion_refresher_ionRefresh_5_listener($event) {
      return ctx.handleRefresh($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, TripsPage_Conditional_6_Template, 22, 19)(7, TripsPage_Conditional_7_Template, 15, 15)(8, TripsPage_Conditional_8_Template, 1, 0, "app-trips-dring");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("defaultHref", "/account");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.tripsState.state === "loading" ? 1 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.tripsState.state === "loaded" ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.tripsState.state === "loading" ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.tripsState.state === "noData" ? 8 : -1);
  }
}, dependencies: [
  IonContent,
  IonList,
  IonItem,
  IonRow,
  TripsDringComponent,
  IonCol,
  IonLabel,
  IonBadge,
  IonText,
  IonProgressBar,
  IonRefresher,
  CommonModule,
  NgForOf,
  NgIf,
  FormsModule,
  HeaderComponent,
  TranslateModule,
  TranslatePipe,
  TripItemComponent,
  IonSkeletonText
], encapsulation: 2 });
var TripsPage = _TripsPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TripsPage, [{
    type: Component,
    args: [{ selector: "app-trips", imports: [
      IonContent,
      IonList,
      IonItem,
      IonRow,
      TripsDringComponent,
      IonCol,
      IonLabel,
      IonBadge,
      IonText,
      IonProgressBar,
      IonRefresher,
      CommonModule,
      FormsModule,
      HeaderComponent,
      TranslateModule,
      TripItemComponent,
      IonSkeletonText
    ], template: `<app-header [defaultHref]="'/account'"></app-header>
@if(tripsState.state === 'loading'){
<ion-progress-bar type="indeterminate"></ion-progress-bar>
}

<ion-content class="ion-padding">
  <ion-row class="ion-justify-content-center">
    <ion-col size="12" size-md="8" size-lg="6">
      <ion-refresher slot="fixed" (ionRefresh)="handleRefresh($event)">
      </ion-refresher>
      @if(tripsState.state === 'loaded'){
      <h4 class="ion-margin">
        {{ 'trips.today' | translate }}
        <ion-badge color="primary"
          >{{ tripsState.todayTrips.length }}</ion-badge
        >
      </h4>
      <ion-list [inset]="true" mode="ios">
        <app-trip-item
          *ngFor="let trip of tripsState.todayTrips"
          [trip]="trip"
        ></app-trip-item>
      </ion-list>

      <h4 class="ion-margin">
        {{ 'trips.yesterday' | translate }}
        <ion-badge color="primary"
          >{{ tripsState.yesterdayTrips.length }}</ion-badge
        >
      </h4>
      <ion-list [inset]="true" mode="ios">
        <app-trip-item
          *ngFor="let trip of tripsState.yesterdayTrips"
          [trip]="trip"
        ></app-trip-item>
      </ion-list>

      <h4 class="ion-margin">
        {{ 'trips.previous' | translate }}
        <ion-badge color="primary">
          {{ tripsState.olderTrips.length }}
          <ion-text *ngIf="tripsState.hasMoreTrips">+</ion-text>
        </ion-badge>
      </h4>
      <ion-list [inset]="true" mode="ios">
        <app-trip-item
          *ngFor="let trip of tripsState.olderTrips"
          [trip]="trip"
        ></app-trip-item>
      </ion-list>
      } @if (tripsState.state === 'loading') {
      <h4 class="ion-margin">{{ 'trips.today' | translate }}</h4>
      <ion-list>
        <ion-item *ngFor="let i of [].constructor(skeletonCount)">
          <ion-label>
            <h3>
              <ion-skeleton-text
                [animated]="true"
                style="width: 80%"
              ></ion-skeleton-text>
            </h3>
            <p>
              <ion-skeleton-text
                [animated]="true"
                style="width: 60%"
              ></ion-skeleton-text>
            </p>
            <p>
              <ion-skeleton-text
                [animated]="true"
                style="width: 30%"
              ></ion-skeleton-text>
            </p>
          </ion-label>
        </ion-item>
      </ion-list>
      <h4 class="ion-margin">{{ 'trips.yesterday' | translate }}</h4>
      <ion-list>
        <ion-item *ngFor="let i of [].constructor(skeletonCount)">
          <ion-label>
            <h3>
              <ion-skeleton-text
                [animated]="true"
                style="width: 80%"
              ></ion-skeleton-text>
            </h3>
            <p>
              <ion-skeleton-text
                [animated]="true"
                style="width: 60%"
              ></ion-skeleton-text>
            </p>
            <p>
              <ion-skeleton-text
                [animated]="true"
                style="width: 30%"
              ></ion-skeleton-text>
            </p>
          </ion-label>
        </ion-item>
      </ion-list>
      <h4 class="ion-margin">{{ 'trips.previous' | translate }}</h4>
      <ion-list>
        <ion-item *ngFor="let i of [].constructor(skeletonCount)">
          <ion-label>
            <h3>
              <ion-skeleton-text
                [animated]="true"
                style="width: 80%"
              ></ion-skeleton-text>
            </h3>
            <p>
              <ion-skeleton-text
                [animated]="true"
                style="width: 60%"
              ></ion-skeleton-text>
            </p>
            <p>
              <ion-skeleton-text
                [animated]="true"
                style="width: 30%"
              ></ion-skeleton-text>
            </p>
          </ion-label>
        </ion-item>
      </ion-list>
      } @if (tripsState.state === 'noData') {
      <app-trips-dring></app-trips-dring>
      }
    </ion-col>
  </ion-row>
</ion-content>
` }]
  }], () => [{ type: RentingService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TripsPage, { className: "TripsPage", filePath: "src/app/pages/account/trips/trips.page.ts", lineNumber: 69 });
})();
export {
  TripsPage
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9waXBlcy9jbzJzYXZlZC5waXBlLnRzIiwgInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdHJpcC1pdGVtL3RyaXAtaXRlbS5jb21wb25lbnQudHMiLCAic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy90cmlwLWl0ZW0vdHJpcC1pdGVtLmNvbXBvbmVudC5odG1sIiwgInNyYy9hcHAvY29tcG9uZW50cy9kcmluZy90cmlwcy1kcmluZy90cmlwcy1kcmluZy5jb21wb25lbnQudHMiLCAic3JjL2FwcC9jb21wb25lbnRzL2RyaW5nL3RyaXBzLWRyaW5nL3RyaXBzLWRyaW5nLmNvbXBvbmVudC5odG1sIiwgInNyYy9hcHAvcGFnZXMvYWNjb3VudC90cmlwcy90cmlwcy5wYWdlLnRzIiwgInNyYy9hcHAvcGFnZXMvYWNjb3VudC90cmlwcy90cmlwcy5wYWdlLmh0bWwiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdjbzJzYXZlZCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIGNvMnNhdmVkUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oY28yOiBudW1iZXIsIGRpc3RhbmNlOiBudW1iZXIsIC4uLmFyZ3M6IHVua25vd25bXSk6IHVua25vd24ge1xuICAgIGlmIChjbzIgPiAwKSB7XG4gICAgICByZXR1cm4gTWF0aC50cnVuYygoZGlzdGFuY2UgLyAxMDAwLjApICogMjIwIC0gY28yKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY28yXG4gICAgfVxuICB9XG59XG4iLCAiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJ1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJ1xuaW1wb3J0IHsgY28yc2F2ZWRQaXBlIH0gZnJvbSAnc3JjL2FwcC9waXBlcy9jbzJzYXZlZC5waXBlJ1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSdcbmltcG9ydCB7IFJlbnRpbmdTZXJ2aWNlIH0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy9hcGktd3JhcHBlcnMvcmVudGluZy5zZXJ2aWNlJ1xuaW1wb3J0IHsgYWRkSWNvbnMgfSBmcm9tICdpb25pY29ucydcbmltcG9ydCB7IGxvY2tPcGVuIH0gZnJvbSAnaW9uaWNvbnMvaWNvbnMnXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLXRyaXAtaXRlbScsXG4gICAgaW1wb3J0czogW0lvbmljTW9kdWxlLCBDb21tb25Nb2R1bGUsIGNvMnNhdmVkUGlwZSwgVHJhbnNsYXRlTW9kdWxlXSxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdHJpcC1pdGVtLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBUcmlwSXRlbUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHRyaXA6IGFueVxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVudGluZ1NlcnZpY2U6IFJlbnRpbmdTZXJ2aWNlKSB7XG4gICAgYWRkSWNvbnMoe1xuICAgICAgbG9ja09wZW4sXG4gICAgfSlcbiAgfVxuXG4gIGhhc0FjdGl2ZVRyaXBPdmVyVGhyZWVIb3VycygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5yZW50aW5nU2VydmljZS5oYXNBY3RpdmVUcmlwT3ZlclRocmVlSG91cnModGhpcy50cmlwKVxuICB9XG5cbiAgaGFzQWN0aXZlVHJpcE92ZXIyNEhvdXJzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnJlbnRpbmdTZXJ2aWNlLmhhc0FjdGl2ZVRyaXBPdmVyMjRIb3Vycyh0aGlzLnRyaXApXG4gIH1cbn1cbiIsICI8aW9uLWl0ZW1cbiAgW2NvbG9yXT1cIlxuICAgIGhhc0FjdGl2ZVRyaXBPdmVyVGhyZWVIb3VycygpXG4gICAgICA/ICdwcmltYXJ5J1xuICAgICAgOiBoYXNBY3RpdmVUcmlwT3ZlcjI0SG91cnMoKVxuICAgICAgPyAnd2FybmluZydcbiAgICAgIDogJ2dyZXknXG4gIFwiXG4+XG4gIDxpb24tbGFiZWwgY2xhc3M9XCJpb24tdGV4dC13cmFwXCI+XG4gICAgPGlvbi1yb3cgY2xhc3M9XCJpb24tanVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDNweFwiPlxuICAgICAgICA8aW9uLWljb25cbiAgICAgICAgICBzcmM9XCIuLi8uLi8uLi8uLi9hc3NldHMvc3ZnL2ZvbnRhd2Vzb21lL3RyaWN5Y2xlLXJlZ3VsYXIuc3ZnXCJcbiAgICAgICAgPjwvaW9uLWljb24+XG4gICAgICAgIDxzdHJvbmc+e3sgdHJpcC52ZWhpY3VsZV9udW1iZXIgfX08L3N0cm9uZz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0cm9uZyAqbmdJZj1cInRyaXAuc3RhdHVzID09PSAnY29tcGxldGVkJ1wiXG4gICAgICAgID57eyB0cmlwLmFtb3VudCAvIDEwMCB9feKCrDwvc3Ryb25nXG4gICAgICA+XG5cbiAgICAgIDxzdHJvbmcgKm5nSWY9XCJ0cmlwLnN0YXR1cyAhPT0gJ2NvbXBsZXRlZCdcIj5cbiAgICAgICAge3sgJ3RyaXAuc3RhdHVzLicgKyB0cmlwLnN0YXR1cyB8IHRyYW5zbGF0ZSB9fSAtXG4gICAgICAgIDxpb24taWNvbiBuYW1lPVwibG9jay1vcGVuXCI+PC9pb24taWNvbj4ge3sgdHJpcC5waW4gfX08L3N0cm9uZ1xuICAgICAgPlxuICAgIDwvaW9uLXJvdz5cbiAgICA8aW9uLXJvdyBjbGFzcz1cImlvbi1qdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgPHA+e3sgdHJpcC5zdGFydF9uYW1lIH19PC9wPlxuICAgICAgPHA+e3sgdHJpcC5lbmRfbmFtZSB9fTwvcD5cbiAgICA8L2lvbi1yb3c+XG4gICAgPGlvbi1yb3cgY2xhc3M9XCJpb24tanVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgIDxwPnt7IHRyaXAuc3RhcnRfdGltZXN0YW1wICogMTAwMCB8IGRhdGUgOiAnZGQvTU0veXkgSEg6bW0nIH19PC9wPlxuICAgICAgPHAgKm5nSWY9XCJ0cmlwLmVuZF90aW1lc3RhbXAgPiAwXCI+XG4gICAgICAgIHt7IHRyaXAuZW5kX3RpbWVzdGFtcCAqIDEwMDAgfCBkYXRlIDogJ2RkL01NL3l5IEhIOm1tJyB9fVxuICAgICAgPC9wPlxuICAgICAgPHAgKm5nSWY9XCJ0cmlwLnN0YXR1cyA9PT0gJ3Rlcm1pbmF0aW9uX3JlcXVlc3RlZCdcIj5cbiAgICAgICAge3tcbiAgICAgICAgICB0cmlwLnRlcm1pbmF0aW9uX3JlcXVlc3RlZF90aW1lc3RhbXAgKiAxMDAwIHwgZGF0ZSA6ICdkZC9NTS95eSBISDptbSdcbiAgICAgICAgfX1cbiAgICAgIDwvcD5cbiAgICA8L2lvbi1yb3c+XG4gICAgPGlvbi1yb3cgY2xhc3M9XCJpb24tanVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgIDxwPlxuICAgICAgICA8aW9uLWljb24gbmFtZT1cImxlYWYtb3V0bGluZVwiIGNvbG9yPVwic3VjY2Vzc1wiPjwvaW9uLWljb24+XG4gICAgICAgIHt7ICd0cmlwLm1ldHJpY3MuY28yX3NhdmVkJyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgPC9wPlxuICAgICAgPHA+e3sgdHJpcC5nX0NPMl9rbSB8IGNvMnNhdmVkIDogdHJpcC5kaXN0YW5jZSB8fCAwIH19PC9wPlxuICAgIDwvaW9uLXJvdz5cbiAgICA8aW9uLXJvdyBjbGFzcz1cImlvbi1qdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgPHA+XG4gICAgICAgIDxpb24taWNvbiBuYW1lPVwiZmxhbWUtb3V0bGluZVwiIGNvbG9yPVwiZGFuZ2VyXCI+PC9pb24taWNvbj5cbiAgICAgICAge3sgJ3RyaXAubWV0cmljcy5rY2FsX2J1cm5lZCcgfCB0cmFuc2xhdGUgfX1cbiAgICAgIDwvcD5cbiAgICAgIDxwPnt7IHRyaXAua2NhbF9idXJuZWQgfHwgMCB9fTwvcD5cbiAgICA8L2lvbi1yb3c+XG4gIDwvaW9uLWxhYmVsPlxuPC9pb24taXRlbT5cbiIsICJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJ1xuaW1wb3J0IHtcbiAgSW9uQnV0dG9uLFxuICBJb25JY29uLFxuICBJb25MYWJlbCxcbiAgSW9uQ2FyZCxcbiAgSW9uQ2FyZENvbnRlbnQsXG4gIElvbkNhcmRIZWFkZXIsXG4gIElvbkNhcmRUaXRsZSxcbn0gZnJvbSAnQGlvbmljL2FuZ3VsYXIvc3RhbmRhbG9uZSdcbmltcG9ydCB7IFJvdXRlckxpbmsgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdHJpcHMtZHJpbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vdHJpcHMtZHJpbmcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90cmlwcy1kcmluZy5jb21wb25lbnQuc2NzcyddLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBUcmFuc2xhdGVNb2R1bGUsIElvbkJ1dHRvbiwgSW9uSWNvbiwgUm91dGVyTGlua10sXG59KVxuZXhwb3J0IGNsYXNzIFRyaXBzRHJpbmdDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHt9XG59XG4iLCAiPGgxIHN0eWxlPVwiZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlclwiIGNsYXNzPVwiaW9uLW5vLW1hcmdpblwiPlxuICA8aW1nIHNyYz1cImFzc2V0cy9zdmcvZHJpbmdfZHJpbmcuc3ZnXCIgLz5cbiAgPHNwYW4gY2xhc3M9XCJpb24tbWFyZ2luLXN0YXJ0IHBhY2lmaWNvLXJlZ3VsYXJcIj57e1xuICAgICdnZW5lcmljLmRyaW5nJyB8IHRyYW5zbGF0ZVxuICB9fTwvc3Bhbj5cbjwvaDE+XG5cbjxwIGNsYXNzPVwiaW9uLW1hcmdpbi1ib3R0b21cIj5cbiAge3sgJ3RyaXBzX2RyaW5nLmRlc2NyaXB0aW9uJyB8IHRyYW5zbGF0ZSB9fVxuPC9wPlxuXG48aW9uLWJ1dHRvblxuICBleHBhbmQ9XCJibG9ja1wiXG4gIGNvbG9yPVwicHJpbWFyeVwiXG4gIGNsYXNzPVwiaW9uLW1hcmdpbi10b3BcIlxuICBbcm91dGVyTGlua109XCJbJy9yZW50aW5nJ11cIlxuPlxuICA8aW9uLWljb24gbmFtZT1cImJpY3ljbGUtb3V0bGluZVwiIHNsb3Q9XCJzdGFydFwiPjwvaW9uLWljb24+XG4gIHt7ICd0cmlwc19kcmluZy5zdGFydF90cmlwJyB8IHRyYW5zbGF0ZSB9fVxuPC9pb24tYnV0dG9uPlxuIiwgImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbidcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnXG5pbXBvcnQge1xuICBJb25Db250ZW50LFxuICBJb25IZWFkZXIsXG4gIElvblRpdGxlLFxuICBJb25Ub29sYmFyLFxuICBJb25MaXN0LFxuICBJb25JdGVtLFxuICBJb25MYWJlbCxcbiAgSW9uVGV4dCxcbiAgSW9uSWNvbixcbiAgSW9uQmFkZ2UsXG4gIElvblJvdyxcbiAgSW9uQ29sLFxuICBJb25Qcm9ncmVzc0JhcixcbiAgSW9uUmVmcmVzaGVyLFxuICBJb25Ta2VsZXRvblRleHQsXG59IGZyb20gJ0Bpb25pYy9hbmd1bGFyL3N0YW5kYWxvbmUnXG5pbXBvcnQgeyBIZWFkZXJDb21wb25lbnQgfSBmcm9tICdzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQnXG5pbXBvcnQgeyBSZW50aW5nU2VydmljZSB9IGZyb20gJ3NyYy9hcHAvc2VydmljZXMvYXBpLXdyYXBwZXJzL3JlbnRpbmcuc2VydmljZSdcbmltcG9ydCB7IGJpY3ljbGVPdXRsaW5lLCBsZWFmT3V0bGluZSwgZmxhbWVPdXRsaW5lIH0gZnJvbSAnaW9uaWNvbnMvaWNvbnMnXG5pbXBvcnQgeyBhZGRJY29ucyB9IGZyb20gJ2lvbmljb25zJ1xuaW1wb3J0IHsgY28yc2F2ZWRQaXBlIH0gZnJvbSAnc3JjL2FwcC9waXBlcy9jbzJzYXZlZC5waXBlJ1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSdcbmltcG9ydCB7IFRyaXBJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvdHJpcC1pdGVtL3RyaXAtaXRlbS5jb21wb25lbnQnXG5pbXBvcnQgeyBUcmlwc0RyaW5nQ29tcG9uZW50IH0gZnJvbSAnc3JjL2FwcC9jb21wb25lbnRzL2RyaW5nL3RyaXBzLWRyaW5nL3RyaXBzLWRyaW5nLmNvbXBvbmVudCdcblxuZXhwb3J0IHR5cGUgVHJpcHNTdGF0ZSA9XG4gIHwge1xuICAgICAgc3RhdGU6ICdsb2FkaW5nJ1xuICAgIH1cbiAgfCB7XG4gICAgICBzdGF0ZTogJ2xvYWRlZCdcbiAgICAgIHRvZGF5VHJpcHM6IGFueVtdXG4gICAgICB5ZXN0ZXJkYXlUcmlwczogYW55W11cbiAgICAgIG9sZGVyVHJpcHM6IGFueVtdXG4gICAgICBoYXNNb3JlVHJpcHM6IGJvb2xlYW5cbiAgICB9XG4gIHwge1xuICAgICAgc3RhdGU6ICdub0RhdGEnXG4gICAgfVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdHJpcHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vdHJpcHMucGFnZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdHJpcHMucGFnZS5zY3NzJ10sXG4gIGltcG9ydHM6IFtcbiAgICBJb25Db250ZW50LFxuICAgIElvbkxpc3QsXG4gICAgSW9uSXRlbSxcbiAgICBJb25Sb3csXG4gICAgVHJpcHNEcmluZ0NvbXBvbmVudCxcbiAgICBJb25Db2wsXG4gICAgSW9uTGFiZWwsXG4gICAgSW9uQmFkZ2UsXG4gICAgSW9uVGV4dCxcbiAgICBJb25Qcm9ncmVzc0JhcixcbiAgICBJb25SZWZyZXNoZXIsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIEhlYWRlckNvbXBvbmVudCxcbiAgICBUcmFuc2xhdGVNb2R1bGUsXG4gICAgVHJpcEl0ZW1Db21wb25lbnQsXG4gICAgSW9uU2tlbGV0b25UZXh0LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUcmlwc1BhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xuICB0cmlwc1N0YXRlOiBUcmlwc1N0YXRlID0geyBzdGF0ZTogJ2xvYWRpbmcnIH1cbiAgc2tlbGV0b25Db3VudDogbnVtYmVyID0gMlxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVudGluZ1NlcnZpY2U6IFJlbnRpbmdTZXJ2aWNlKSB7XG4gICAgYWRkSWNvbnMoeyBsZWFmT3V0bGluZSwgZmxhbWVPdXRsaW5lLCBiaWN5Y2xlT3V0bGluZSB9KVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZWZyZXNoKClcbiAgfVxuXG4gIGhhbmRsZVJlZnJlc2goZXZlbnQ6IGFueSkge1xuICAgIHRoaXMucmVmcmVzaCgpLnRoZW4oKCkgPT4ge1xuICAgICAgZXZlbnQudGFyZ2V0LmNvbXBsZXRlKClcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy50cmlwc1N0YXRlID0geyBzdGF0ZTogJ2xvYWRpbmcnIH1cbiAgICAgIHRoaXMucmVudGluZ1NlcnZpY2UuZ2V0VXNlclRyaXBzKCkuc3Vic2NyaWJlKCh0cmlwcykgPT4ge1xuICAgICAgICBpZiAodHJpcHMuZGF0YSEubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy50cmlwc1N0YXRlID0geyBzdGF0ZTogJ25vRGF0YScgfVxuICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgbm93ID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMClcbiAgICAgICAgY29uc3QgdG9kYXlTdGFydCA9IG5vdyAtIChub3cgJSA4NjQwMClcbiAgICAgICAgY29uc3QgeWVzdGVyZGF5U3RhcnQgPSB0b2RheVN0YXJ0IC0gODY0MDBcblxuICAgICAgICBjb25zdCBuZXdTdGF0ZTogVHJpcHNTdGF0ZSA9IHtcbiAgICAgICAgICBzdGF0ZTogJ2xvYWRlZCcsXG4gICAgICAgICAgaGFzTW9yZVRyaXBzOiB0cmlwcy5oYXNfbW9yZSEsXG4gICAgICAgICAgdG9kYXlUcmlwczogW10sXG4gICAgICAgICAgeWVzdGVyZGF5VHJpcHM6IFtdLFxuICAgICAgICAgIG9sZGVyVHJpcHM6IFtdLFxuICAgICAgICB9XG5cbiAgICAgICAgdHJpcHMuZGF0YSEuZm9yRWFjaCgodHJpcCkgPT4ge1xuICAgICAgICAgIGlmICh0cmlwLmNyZWF0ZWQhID49IHRvZGF5U3RhcnQpIHtcbiAgICAgICAgICAgIG5ld1N0YXRlLnRvZGF5VHJpcHMucHVzaCh0cmlwKVxuICAgICAgICAgIH0gZWxzZSBpZiAodHJpcC5jcmVhdGVkISA+PSB5ZXN0ZXJkYXlTdGFydCkge1xuICAgICAgICAgICAgbmV3U3RhdGUueWVzdGVyZGF5VHJpcHMucHVzaCh0cmlwKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdTdGF0ZS5vbGRlclRyaXBzLnB1c2godHJpcClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy50cmlwc1N0YXRlID0gbmV3U3RhdGVcbiAgICAgICAgcmVzb2x2ZSgpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbiIsICI8YXBwLWhlYWRlciBbZGVmYXVsdEhyZWZdPVwiJy9hY2NvdW50J1wiPjwvYXBwLWhlYWRlcj5cbkBpZih0cmlwc1N0YXRlLnN0YXRlID09PSAnbG9hZGluZycpe1xuPGlvbi1wcm9ncmVzcy1iYXIgdHlwZT1cImluZGV0ZXJtaW5hdGVcIj48L2lvbi1wcm9ncmVzcy1iYXI+XG59XG5cbjxpb24tY29udGVudCBjbGFzcz1cImlvbi1wYWRkaW5nXCI+XG4gIDxpb24tcm93IGNsYXNzPVwiaW9uLWp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICA8aW9uLWNvbCBzaXplPVwiMTJcIiBzaXplLW1kPVwiOFwiIHNpemUtbGc9XCI2XCI+XG4gICAgICA8aW9uLXJlZnJlc2hlciBzbG90PVwiZml4ZWRcIiAoaW9uUmVmcmVzaCk9XCJoYW5kbGVSZWZyZXNoKCRldmVudClcIj5cbiAgICAgIDwvaW9uLXJlZnJlc2hlcj5cbiAgICAgIEBpZih0cmlwc1N0YXRlLnN0YXRlID09PSAnbG9hZGVkJyl7XG4gICAgICA8aDQgY2xhc3M9XCJpb24tbWFyZ2luXCI+XG4gICAgICAgIHt7ICd0cmlwcy50b2RheScgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgPGlvbi1iYWRnZSBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgID57eyB0cmlwc1N0YXRlLnRvZGF5VHJpcHMubGVuZ3RoIH19PC9pb24tYmFkZ2VcbiAgICAgICAgPlxuICAgICAgPC9oND5cbiAgICAgIDxpb24tbGlzdCBbaW5zZXRdPVwidHJ1ZVwiIG1vZGU9XCJpb3NcIj5cbiAgICAgICAgPGFwcC10cmlwLWl0ZW1cbiAgICAgICAgICAqbmdGb3I9XCJsZXQgdHJpcCBvZiB0cmlwc1N0YXRlLnRvZGF5VHJpcHNcIlxuICAgICAgICAgIFt0cmlwXT1cInRyaXBcIlxuICAgICAgICA+PC9hcHAtdHJpcC1pdGVtPlxuICAgICAgPC9pb24tbGlzdD5cblxuICAgICAgPGg0IGNsYXNzPVwiaW9uLW1hcmdpblwiPlxuICAgICAgICB7eyAndHJpcHMueWVzdGVyZGF5JyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICA8aW9uLWJhZGdlIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgPnt7IHRyaXBzU3RhdGUueWVzdGVyZGF5VHJpcHMubGVuZ3RoIH19PC9pb24tYmFkZ2VcbiAgICAgICAgPlxuICAgICAgPC9oND5cbiAgICAgIDxpb24tbGlzdCBbaW5zZXRdPVwidHJ1ZVwiIG1vZGU9XCJpb3NcIj5cbiAgICAgICAgPGFwcC10cmlwLWl0ZW1cbiAgICAgICAgICAqbmdGb3I9XCJsZXQgdHJpcCBvZiB0cmlwc1N0YXRlLnllc3RlcmRheVRyaXBzXCJcbiAgICAgICAgICBbdHJpcF09XCJ0cmlwXCJcbiAgICAgICAgPjwvYXBwLXRyaXAtaXRlbT5cbiAgICAgIDwvaW9uLWxpc3Q+XG5cbiAgICAgIDxoNCBjbGFzcz1cImlvbi1tYXJnaW5cIj5cbiAgICAgICAge3sgJ3RyaXBzLnByZXZpb3VzJyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICA8aW9uLWJhZGdlIGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgICAgIHt7IHRyaXBzU3RhdGUub2xkZXJUcmlwcy5sZW5ndGggfX1cbiAgICAgICAgICA8aW9uLXRleHQgKm5nSWY9XCJ0cmlwc1N0YXRlLmhhc01vcmVUcmlwc1wiPis8L2lvbi10ZXh0PlxuICAgICAgICA8L2lvbi1iYWRnZT5cbiAgICAgIDwvaDQ+XG4gICAgICA8aW9uLWxpc3QgW2luc2V0XT1cInRydWVcIiBtb2RlPVwiaW9zXCI+XG4gICAgICAgIDxhcHAtdHJpcC1pdGVtXG4gICAgICAgICAgKm5nRm9yPVwibGV0IHRyaXAgb2YgdHJpcHNTdGF0ZS5vbGRlclRyaXBzXCJcbiAgICAgICAgICBbdHJpcF09XCJ0cmlwXCJcbiAgICAgICAgPjwvYXBwLXRyaXAtaXRlbT5cbiAgICAgIDwvaW9uLWxpc3Q+XG4gICAgICB9IEBpZiAodHJpcHNTdGF0ZS5zdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgICA8aDQgY2xhc3M9XCJpb24tbWFyZ2luXCI+e3sgJ3RyaXBzLnRvZGF5JyB8IHRyYW5zbGF0ZSB9fTwvaDQ+XG4gICAgICA8aW9uLWxpc3Q+XG4gICAgICAgIDxpb24taXRlbSAqbmdGb3I9XCJsZXQgaSBvZiBbXS5jb25zdHJ1Y3Rvcihza2VsZXRvbkNvdW50KVwiPlxuICAgICAgICAgIDxpb24tbGFiZWw+XG4gICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dFxuICAgICAgICAgICAgICAgIFthbmltYXRlZF09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiA4MCVcIlxuICAgICAgICAgICAgICA+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0XG4gICAgICAgICAgICAgICAgW2FuaW1hdGVkXT1cInRydWVcIlxuICAgICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDYwJVwiXG4gICAgICAgICAgICAgID48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dFxuICAgICAgICAgICAgICAgIFthbmltYXRlZF09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiAzMCVcIlxuICAgICAgICAgICAgICA+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgICAgPC9pb24taXRlbT5cbiAgICAgIDwvaW9uLWxpc3Q+XG4gICAgICA8aDQgY2xhc3M9XCJpb24tbWFyZ2luXCI+e3sgJ3RyaXBzLnllc3RlcmRheScgfCB0cmFuc2xhdGUgfX08L2g0PlxuICAgICAgPGlvbi1saXN0PlxuICAgICAgICA8aW9uLWl0ZW0gKm5nRm9yPVwibGV0IGkgb2YgW10uY29uc3RydWN0b3Ioc2tlbGV0b25Db3VudClcIj5cbiAgICAgICAgICA8aW9uLWxhYmVsPlxuICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHRcbiAgICAgICAgICAgICAgICBbYW5pbWF0ZWRdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogODAlXCJcbiAgICAgICAgICAgICAgPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dFxuICAgICAgICAgICAgICAgIFthbmltYXRlZF09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiA2MCVcIlxuICAgICAgICAgICAgICA+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHRcbiAgICAgICAgICAgICAgICBbYW5pbWF0ZWRdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogMzAlXCJcbiAgICAgICAgICAgICAgPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICA8L2lvbi1saXN0PlxuICAgICAgPGg0IGNsYXNzPVwiaW9uLW1hcmdpblwiPnt7ICd0cmlwcy5wcmV2aW91cycgfCB0cmFuc2xhdGUgfX08L2g0PlxuICAgICAgPGlvbi1saXN0PlxuICAgICAgICA8aW9uLWl0ZW0gKm5nRm9yPVwibGV0IGkgb2YgW10uY29uc3RydWN0b3Ioc2tlbGV0b25Db3VudClcIj5cbiAgICAgICAgICA8aW9uLWxhYmVsPlxuICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHRcbiAgICAgICAgICAgICAgICBbYW5pbWF0ZWRdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogODAlXCJcbiAgICAgICAgICAgICAgPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dFxuICAgICAgICAgICAgICAgIFthbmltYXRlZF09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiA2MCVcIlxuICAgICAgICAgICAgICA+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHRcbiAgICAgICAgICAgICAgICBbYW5pbWF0ZWRdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogMzAlXCJcbiAgICAgICAgICAgICAgPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICA8L2lvbi1saXN0PlxuICAgICAgfSBAaWYgKHRyaXBzU3RhdGUuc3RhdGUgPT09ICdub0RhdGEnKSB7XG4gICAgICA8YXBwLXRyaXBzLWRyaW5nPjwvYXBwLXRyaXBzLWRyaW5nPlxuICAgICAgfVxuICAgIDwvaW9uLWNvbD5cbiAgPC9pb24tcm93PlxuPC9pb24tY29udGVudD5cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1NLElBQU8s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
