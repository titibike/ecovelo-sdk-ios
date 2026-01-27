import {
  StationWrapperService
} from "./chunk-5KXLLE34.js";
import {
  AuthService
} from "./chunk-WJQU3GMM.js";
import {
  SearchService
} from "./chunk-XK4I5MHM.js";
import {
  environment
} from "./chunk-FOJAXRYS.js";
import {
  ToastService,
  ToastType
} from "./chunk-SARQRLZR.js";
import {
  addIcons,
  arrowBack,
  close,
  heart,
  person,
  searchOutline
} from "./chunk-3E6DEK7U.js";
import {
  BehaviorSubject,
  CommonModule,
  Component,
  ElementRef,
  EventEmitter,
  FormsModule,
  Injectable,
  Input,
  IonButton,
  IonIcon,
  IonInput,
  NavController,
  NgClass,
  NgIf,
  Output,
  Platform,
  Router,
  RouterLink,
  TranslateModule,
  TranslatePipe,
  ViewChild,
  catchError,
  effect,
  map,
  of,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-DGENMXJW.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// src/app/services/api-wrappers/search.service.ts
var _SearchWrapperService = class _SearchWrapperService {
  constructor(searchService) {
    this.searchService = searchService;
    this.searchState = new BehaviorSubject({
      state: "idle"
    });
  }
  search(query) {
    if (!query.trim()) {
      this.searchState.next({ state: "idle" });
      return;
    }
    this.searchState.next({ state: "loading" });
    this.searchService.search({
      program: environment.program,
      query
    }).subscribe({
      next: (response) => {
        var _a, _b;
        const filteredStations = (_a = response.stations) == null ? void 0 : _a.filter((station) => station.status === "open");
        const filteredVehicules = (_b = response.vehicules) == null ? void 0 : _b.filter((vehicule) => vehicule.status === "service");
        if (filteredStations && filteredStations.length > 0 && filteredVehicules && filteredVehicules.length > 0) {
          this.searchState.next({
            state: "success",
            results: {
              stations: filteredStations,
              vehicules: filteredVehicules
            }
          });
        } else if (filteredStations && filteredStations.length > 0) {
          this.searchState.next({
            state: "success",
            results: {
              stations: filteredStations,
              vehicules: []
            }
          });
        } else if (filteredVehicules && filteredVehicules.length > 0) {
          this.searchState.next({
            state: "success",
            results: {
              stations: [],
              vehicules: filteredVehicules
            }
          });
        } else {
          this.searchState.next({
            state: "no_results"
          });
        }
      },
      error: (error) => {
        this.searchState.next({ state: "error", error });
      }
    });
  }
  searchAsync(query) {
    if (!query.trim()) {
      return of({
        stations: [],
        vehicules: []
      });
    }
    return this.searchService.search({
      program: environment.program,
      query
    }).pipe(map((response) => ({
      stations: response.stations || [],
      vehicules: response.vehicules || []
    })), catchError((error) => {
      console.error("Search error:", error);
      return of({
        stations: [],
        vehicules: []
      });
    }));
  }
};
_SearchWrapperService.\u0275fac = function SearchWrapperService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SearchWrapperService)(\u0275\u0275inject(SearchService));
};
_SearchWrapperService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SearchWrapperService, factory: _SearchWrapperService.\u0275fac, providedIn: "root" });
var SearchWrapperService = _SearchWrapperService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchWrapperService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: SearchService }], null);
})();

// src/app/components/searchbar/searchbar.component.ts
var _c0 = ["searchInput"];
var _c1 = (a0) => ({ focused: a0 });
function SearchbarComponent_ion_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 8);
  }
}
function SearchbarComponent_ion_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-icon", 9);
    \u0275\u0275listener("click", function SearchbarComponent_ion_icon_2_Template_ion_icon_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onBackClick());
    });
    \u0275\u0275elementEnd();
  }
}
function SearchbarComponent_ion_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 10);
    \u0275\u0275listener("click", function SearchbarComponent_ion_button_6_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onFavoriteClick());
    });
    \u0275\u0275element(1, "ion-icon", 11);
    \u0275\u0275elementEnd();
  }
}
function SearchbarComponent_ion_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 12);
    \u0275\u0275listener("click", function SearchbarComponent_ion_button_7_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearInput());
    });
    \u0275\u0275element(1, "ion-icon", 13);
    \u0275\u0275elementEnd();
  }
}
function SearchbarComponent_ion_button_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-button", 14);
    \u0275\u0275element(1, "ion-icon", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", "/account");
  }
}
var _SearchbarComponent = class _SearchbarComponent {
  constructor(stationWrapperService, navCtrl, authService, toastService, router, platform, elementRef) {
    this.stationWrapperService = stationWrapperService;
    this.navCtrl = navCtrl;
    this.authService = authService;
    this.toastService = toastService;
    this.router = router;
    this.platform = platform;
    this.elementRef = elementRef;
    this.isAndroid = false;
    this.searchBarState = {
      state: "idle"
    };
    this.state = {
      state: "idle"
    };
    this.stateChange = new EventEmitter();
    this.searchQuery = new EventEmitter();
    addIcons({ searchOutline, heart, person, arrowBack, close });
    effect(() => {
      this.authState = this.authService.authState();
    });
  }
  ngOnInit() {
    this.isAndroid = this.platform.is("android");
    if (this.isAndroid) {
      this.handleAndroidSafeArea();
    }
  }
  ngAfterViewInit() {
    if (this.router.url === "/search-page") {
      setTimeout(() => {
        if (this.searchInput) {
          this.searchInput.setFocus();
        }
      }, 300);
    }
  }
  handleAndroidSafeArea() {
    const searchbarElement = this.elementRef.nativeElement.querySelector(".custom-searchbar");
    if (searchbarElement) {
      const safeAreaTop = getComputedStyle(document.documentElement).getPropertyValue("--ion-safe-area-top");
      if (!safeAreaTop || safeAreaTop === "0px" || safeAreaTop === "unset") {
        searchbarElement.classList.add("android-safe-area");
      }
    }
  }
  onFocus(event) {
    return __async(this, null, function* () {
      if (this.router.url === "/map") {
        this.navCtrl.navigateForward("/search-page", { animated: false });
      } else if (this.router.url === "/search-page") {
      } else {
        event.target.blur();
      }
    });
  }
  onInput(event) {
    const query = event.target.value;
    if (!query || query.trim() === "") {
      this.searchBarState = { state: "idle" };
    } else {
      this.searchBarState = { state: "searching" };
    }
    this.searchQuery.emit(query);
  }
  onFavoriteClick() {
    if (this.authState.state === "SignedIn") {
      this.stationWrapperService.setStationState("favorites-stations");
    } else {
      this.toastService.createWithJustMessage("Vous devez \xEAtre connect\xE9 pour acc\xE9der \xE0 vos favoris", ToastType.Info);
      this.navCtrl.navigateForward("/account", { animated: false });
    }
  }
  onBackClick() {
    this.searchBarState = { state: "idle" };
    this.navCtrl.navigateBack("/map", { animated: false });
    this.stateChange.emit();
  }
  clearInput() {
    if (this.searchInput) {
      this.searchInput.value = "";
      this.searchBarState = { state: "idle" };
      this.searchQuery.emit("");
      setTimeout(() => {
        if (this.searchInput) {
          this.searchInput.setFocus();
        }
      }, 100);
    }
  }
};
_SearchbarComponent.\u0275fac = function SearchbarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SearchbarComponent)(\u0275\u0275directiveInject(StationWrapperService), \u0275\u0275directiveInject(NavController), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(Platform), \u0275\u0275directiveInject(ElementRef));
};
_SearchbarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchbarComponent, selectors: [["app-searchbar"]], viewQuery: function SearchbarComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.searchInput = _t.first);
  }
}, inputs: { state: "state" }, outputs: { stateChange: "stateChange", searchQuery: "searchQuery" }, decls: 9, vars: 12, consts: [["searchInput", ""], [1, "custom-searchbar", 3, "ngClass"], ["name", "search-outline", "size", "large", 4, "ngIf"], ["style", "cursor: pointer", "name", "arrow-back", "size", "large", 3, "click", 4, "ngIf"], [3, "ionFocus", "ionInput", "placeholder", "debounce"], ["fill", "clear", "slot", "end", "color", "danger", 3, "click", 4, "ngIf"], ["fill", "clear", "slot", "end", 3, "click", 4, "ngIf"], ["slot", "end", "shape", "round", "color", "dark", "class", "ecl-btn--badge", 3, "routerLink", 4, "ngIf"], ["name", "search-outline", "size", "large"], ["name", "arrow-back", "size", "large", 2, "cursor", "pointer", 3, "click"], ["fill", "clear", "slot", "end", "color", "danger", 3, "click"], ["slot", "icon-only", "name", "heart"], ["fill", "clear", "slot", "end", 3, "click"], ["slot", "icon-only", "name", "close"], ["slot", "end", "shape", "round", "color", "dark", 1, "ecl-btn--badge", 3, "routerLink"], ["slot", "icon-only", "name", "person"]], template: function SearchbarComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275template(1, SearchbarComponent_ion_icon_1_Template, 1, 0, "ion-icon", 2)(2, SearchbarComponent_ion_icon_2_Template, 1, 0, "ion-icon", 3);
    \u0275\u0275elementStart(3, "ion-input", 4, 0);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275listener("ionFocus", function SearchbarComponent_Template_ion_input_ionFocus_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onFocus($event));
    })("ionInput", function SearchbarComponent_Template_ion_input_ionInput_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, SearchbarComponent_ion_button_6_Template, 2, 0, "ion-button", 5)(7, SearchbarComponent_ion_button_7_Template, 2, 0, "ion-button", 6)(8, SearchbarComponent_ion_button_8_Template, 2, 1, "ion-button", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(10, _c1, ctx.state.state !== "idle"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.state.state === "idle");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.state.state !== "idle");
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(5, 8, "searchbar.placeholder"))("debounce", 500);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.state.state === "idle");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.searchBarState.state === "searching");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.searchBarState.state === "idle" && ctx.router.url !== "/search-page");
  }
}, dependencies: [
  CommonModule,
  NgClass,
  NgIf,
  FormsModule,
  IonInput,
  IonButton,
  IonIcon,
  TranslateModule,
  TranslatePipe,
  RouterLink
], styles: ["\n\n.custom-searchbar[_ngcontent-%COMP%] {\n  z-index: 1001;\n  position: absolute;\n  top: max(var(--ion-safe-area-top), 24px);\n  left: 2.5%;\n  width: 95%;\n  margin-top: 16px;\n  max-width: 400px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);\n  background-color: white;\n  border-radius: 54px;\n  height: 60px;\n  padding: 15px;\n  display: flex;\n  align-items: center;\n  color: var(--ion-color-dark);\n}\n.custom-searchbar.focused[_ngcontent-%COMP%] {\n  background-color: #f2f2f2;\n  box-shadow: none;\n  border: none;\n}\n@supports not (top: max(var(--ion-safe-area-top), 24px)) {\n  .custom-searchbar[_ngcontent-%COMP%] {\n    top: var(--ion-safe-area-top);\n    padding-top: 24px;\n  }\n}\n.custom-searchbar.android-safe-area[_ngcontent-%COMP%] {\n  top: calc(var(--ion-safe-area-top) + 24px);\n  min-height: 60px;\n}\n@supports (top: max(40px, calc(var(--ion-safe-area-top) + 24px))) {\n  .custom-searchbar.android-safe-area[_ngcontent-%COMP%] {\n    top: max(40px, var(--ion-safe-area-top) + 24px);\n  }\n}\n@media screen and (-webkit-device-pixel-ratio: 2) {\n  .custom-searchbar[_ngcontent-%COMP%] {\n    top: max(var(--ion-safe-area-top), 28px);\n  }\n}\n@media screen and (-webkit-device-pixel-ratio: 3) {\n  .custom-searchbar[_ngcontent-%COMP%] {\n    top: max(var(--ion-safe-area-top), 32px);\n  }\n}\n@supports not (top: max(var(--ion-safe-area-top), 24px)) {\n  .custom-searchbar[_ngcontent-%COMP%] {\n    top: env(safe-area-inset-top, 40px);\n    margin-top: 24px;\n  }\n}\n.searchbar-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: white;\n  z-index: 1000;\n}\nion-input[_ngcontent-%COMP%] {\n  --padding-start: 10px;\n}\nion-list[_ngcontent-%COMP%] {\n  width: 100%;\n  --ion-background-color: white;\n}\n.searchbar-overlay[_ngcontent-%COMP%] {\n  padding-top: calc(max(var(--ion-safe-area-top), 24px) + 76px);\n}\n@supports not (padding-top: calc(max(var(--ion-safe-area-top), 24px) + 76px)) {\n  .searchbar-overlay[_ngcontent-%COMP%] {\n    padding-top: calc(var(--ion-safe-area-top) + 100px);\n    min-height: 100vh;\n  }\n}\n/*# sourceMappingURL=searchbar.component.css.map */"] });
var SearchbarComponent = _SearchbarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchbarComponent, [{
    type: Component,
    args: [{ selector: "app-searchbar", imports: [
      CommonModule,
      FormsModule,
      IonInput,
      IonButton,
      IonIcon,
      TranslateModule,
      RouterLink
    ], template: `<div class="custom-searchbar" [ngClass]="{ focused: state.state !== 'idle' }">
  <!-- Show arrow-back when not idle, search icon when idle -->
  <ion-icon
    *ngIf="state.state === 'idle'"
    name="search-outline"
    size="large"
  ></ion-icon>

  <ion-icon
    *ngIf="state.state !== 'idle'"
    style="cursor: pointer"
    (click)="onBackClick()"
    name="arrow-back"
    size="large"
  ></ion-icon>
  <ion-input
    #searchInput
    [placeholder]="'searchbar.placeholder' | translate"
    [debounce]="500"
    (ionFocus)="onFocus($event)"
    (ionInput)="onInput($event)"
  />
  <ion-button
    fill="clear"
    slot="end"
    color="danger"
    (click)="onFavoriteClick()"
    *ngIf="state.state === 'idle'"
  >
    <ion-icon slot="icon-only" name="heart"></ion-icon>
  </ion-button>

  <!-- Clear button when typing on search page -->
  <ion-button
    *ngIf="searchBarState.state === 'searching'"
    fill="clear"
    slot="end"
    (click)="clearInput()"
  >
    <ion-icon slot="icon-only" name="close"></ion-icon>
  </ion-button>

  <!-- Account button only on map page -->
  <ion-button
    *ngIf="searchBarState.state === 'idle' && router.url !== '/search-page'"
    slot="end"
    shape="round"
    color="dark"
    [routerLink]="'/account'"
    class="ecl-btn--badge"
  >
    <ion-icon slot="icon-only" name="person"></ion-icon>
  </ion-button>
</div>
`, styles: ["/* src/app/components/searchbar/searchbar.component.scss */\n.custom-searchbar {\n  z-index: 1001;\n  position: absolute;\n  top: max(var(--ion-safe-area-top), 24px);\n  left: 2.5%;\n  width: 95%;\n  margin-top: 16px;\n  max-width: 400px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);\n  background-color: white;\n  border-radius: 54px;\n  height: 60px;\n  padding: 15px;\n  display: flex;\n  align-items: center;\n  color: var(--ion-color-dark);\n}\n.custom-searchbar.focused {\n  background-color: #f2f2f2;\n  box-shadow: none;\n  border: none;\n}\n@supports not (top: max(var(--ion-safe-area-top), 24px)) {\n  .custom-searchbar {\n    top: var(--ion-safe-area-top);\n    padding-top: 24px;\n  }\n}\n.custom-searchbar.android-safe-area {\n  top: calc(var(--ion-safe-area-top) + 24px);\n  min-height: 60px;\n}\n@supports (top: max(40px, calc(var(--ion-safe-area-top) + 24px))) {\n  .custom-searchbar.android-safe-area {\n    top: max(40px, var(--ion-safe-area-top) + 24px);\n  }\n}\n@media screen and (-webkit-device-pixel-ratio: 2) {\n  .custom-searchbar {\n    top: max(var(--ion-safe-area-top), 28px);\n  }\n}\n@media screen and (-webkit-device-pixel-ratio: 3) {\n  .custom-searchbar {\n    top: max(var(--ion-safe-area-top), 32px);\n  }\n}\n@supports not (top: max(var(--ion-safe-area-top), 24px)) {\n  .custom-searchbar {\n    top: env(safe-area-inset-top, 40px);\n    margin-top: 24px;\n  }\n}\n.searchbar-overlay {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: white;\n  z-index: 1000;\n}\nion-input {\n  --padding-start: 10px;\n}\nion-list {\n  width: 100%;\n  --ion-background-color: white;\n}\n.searchbar-overlay {\n  padding-top: calc(max(var(--ion-safe-area-top), 24px) + 76px);\n}\n@supports not (padding-top: calc(max(var(--ion-safe-area-top), 24px) + 76px)) {\n  .searchbar-overlay {\n    padding-top: calc(var(--ion-safe-area-top) + 100px);\n    min-height: 100vh;\n  }\n}\n/*# sourceMappingURL=searchbar.component.css.map */\n"] }]
  }], () => [{ type: StationWrapperService }, { type: NavController }, { type: AuthService }, { type: ToastService }, { type: Router }, { type: Platform }, { type: ElementRef }], { state: [{
    type: Input
  }], stateChange: [{
    type: Output
  }], searchQuery: [{
    type: Output
  }], searchInput: [{
    type: ViewChild,
    args: ["searchInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchbarComponent, { className: "SearchbarComponent", filePath: "src/app/components/searchbar/searchbar.component.ts", lineNumber: 53 });
})();

export {
  SearchWrapperService,
  SearchbarComponent
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9zZXJ2aWNlcy9hcGktd3JhcHBlcnMvc2VhcmNoLnNlcnZpY2UudHMiLCAic3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaGJhci9zZWFyY2hiYXIuY29tcG9uZW50LnRzIiwgInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2hiYXIvc2VhcmNoYmFyLmNvbXBvbmVudC5odG1sIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJ1xuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnXG5pbXBvcnQge1xuICBTZWFyY2hTZXJ2aWNlLFxuICBTZWFyY2gyMDBSZXNwb25zZSxcbiAgTGlzdFN0YXRpb24yMDBSZXNwb25zZUFsbE9mRGF0YUlubmVyLFxuICBMaXN0VmVoaWN1bGUyMDBSZXNwb25zZUFsbE9mRGF0YUlubmVyLFxufSBmcm9tICdzcmMvYXBpLWN5Y2xpc3QnXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJ3NyYy9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnXG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VhcmNoUmVzdWx0cyB7XG4gIHN0YXRpb25zOiBMaXN0U3RhdGlvbjIwMFJlc3BvbnNlQWxsT2ZEYXRhSW5uZXJbXVxuICB2ZWhpY3VsZXM6IExpc3RWZWhpY3VsZTIwMFJlc3BvbnNlQWxsT2ZEYXRhSW5uZXJbXVxufVxuXG5leHBvcnQgdHlwZSBTZWFyY2hTdGF0ZSA9XG4gIHwgeyBzdGF0ZTogJ2lkbGUnIH1cbiAgfCB7IHN0YXRlOiAnbG9hZGluZycgfVxuICB8IHtcbiAgICAgIHN0YXRlOiAnc3VjY2VzcydcbiAgICAgIHJlc3VsdHM6IFNlYXJjaFJlc3VsdHNcbiAgICB9XG4gIHwge1xuICAgICAgc3RhdGU6ICdub19yZXN1bHRzJ1xuICAgIH1cbiAgfCB7XG4gICAgICBzdGF0ZTogJ2Vycm9yJ1xuICAgICAgZXJyb3I6IEVycm9yXG4gICAgfVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoV3JhcHBlclNlcnZpY2Uge1xuICBzZWFyY2hTdGF0ZTogQmVoYXZpb3JTdWJqZWN0PFNlYXJjaFN0YXRlPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8U2VhcmNoU3RhdGU+KHtcbiAgICBzdGF0ZTogJ2lkbGUnLFxuICB9KVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VhcmNoU2VydmljZTogU2VhcmNoU2VydmljZSkge31cblxuICBzZWFyY2gocXVlcnk6IHN0cmluZykge1xuICAgIGlmICghcXVlcnkudHJpbSgpKSB7XG4gICAgICB0aGlzLnNlYXJjaFN0YXRlLm5leHQoeyBzdGF0ZTogJ2lkbGUnIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnNlYXJjaFN0YXRlLm5leHQoeyBzdGF0ZTogJ2xvYWRpbmcnIH0pXG4gICAgdGhpcy5zZWFyY2hTZXJ2aWNlXG4gICAgICAuc2VhcmNoKHtcbiAgICAgICAgcHJvZ3JhbTogZW52aXJvbm1lbnQucHJvZ3JhbSxcbiAgICAgICAgcXVlcnk6IHF1ZXJ5LFxuICAgICAgfSlcbiAgICAgIC5zdWJzY3JpYmUoe1xuICAgICAgICBuZXh0OiAocmVzcG9uc2U6IFNlYXJjaDIwMFJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgY29uc3QgZmlsdGVyZWRTdGF0aW9ucyA9IHJlc3BvbnNlLnN0YXRpb25zPy5maWx0ZXIoXG4gICAgICAgICAgICAoc3RhdGlvbikgPT4gc3RhdGlvbi5zdGF0dXMgPT09ICdvcGVuJ1xuICAgICAgICAgIClcbiAgICAgICAgICBjb25zdCBmaWx0ZXJlZFZlaGljdWxlcyA9IHJlc3BvbnNlLnZlaGljdWxlcz8uZmlsdGVyKFxuICAgICAgICAgICAgKHZlaGljdWxlKSA9PiB2ZWhpY3VsZS5zdGF0dXMgPT09ICdzZXJ2aWNlJ1xuICAgICAgICAgIClcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBmaWx0ZXJlZFN0YXRpb25zICYmXG4gICAgICAgICAgICBmaWx0ZXJlZFN0YXRpb25zLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgIGZpbHRlcmVkVmVoaWN1bGVzICYmXG4gICAgICAgICAgICBmaWx0ZXJlZFZlaGljdWxlcy5sZW5ndGggPiAwXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaFN0YXRlLm5leHQoe1xuICAgICAgICAgICAgICBzdGF0ZTogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICByZXN1bHRzOiB7XG4gICAgICAgICAgICAgICAgc3RhdGlvbnM6IGZpbHRlcmVkU3RhdGlvbnMsXG4gICAgICAgICAgICAgICAgdmVoaWN1bGVzOiBmaWx0ZXJlZFZlaGljdWxlcyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXJlZFN0YXRpb25zICYmIGZpbHRlcmVkU3RhdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hTdGF0ZS5uZXh0KHtcbiAgICAgICAgICAgICAgc3RhdGU6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgcmVzdWx0czoge1xuICAgICAgICAgICAgICAgIHN0YXRpb25zOiBmaWx0ZXJlZFN0YXRpb25zLFxuICAgICAgICAgICAgICAgIHZlaGljdWxlczogW10sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSBpZiAoZmlsdGVyZWRWZWhpY3VsZXMgJiYgZmlsdGVyZWRWZWhpY3VsZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hTdGF0ZS5uZXh0KHtcbiAgICAgICAgICAgICAgc3RhdGU6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgcmVzdWx0czoge1xuICAgICAgICAgICAgICAgIHN0YXRpb25zOiBbXSxcbiAgICAgICAgICAgICAgICB2ZWhpY3VsZXM6IGZpbHRlcmVkVmVoaWN1bGVzLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hTdGF0ZS5uZXh0KHtcbiAgICAgICAgICAgICAgc3RhdGU6ICdub19yZXN1bHRzJyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZWFyY2hTdGF0ZS5uZXh0KHsgc3RhdGU6ICdlcnJvcicsIGVycm9yIH0pXG4gICAgICAgIH0sXG4gICAgICB9KVxuICB9XG5cbiAgc2VhcmNoQXN5bmMocXVlcnk6IHN0cmluZyk6IE9ic2VydmFibGU8U2VhcmNoUmVzdWx0cz4ge1xuICAgIGlmICghcXVlcnkudHJpbSgpKSB7XG4gICAgICByZXR1cm4gb2Yoe1xuICAgICAgICBzdGF0aW9uczogW10sXG4gICAgICAgIHZlaGljdWxlczogW10sXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnNlYXJjaFNlcnZpY2VcbiAgICAgIC5zZWFyY2goe1xuICAgICAgICBwcm9ncmFtOiBlbnZpcm9ubWVudC5wcm9ncmFtLFxuICAgICAgICBxdWVyeTogcXVlcnksXG4gICAgICB9KVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgocmVzcG9uc2U6IFNlYXJjaDIwMFJlc3BvbnNlKSA9PiAoe1xuICAgICAgICAgIHN0YXRpb25zOiByZXNwb25zZS5zdGF0aW9ucyB8fCBbXSxcbiAgICAgICAgICB2ZWhpY3VsZXM6IHJlc3BvbnNlLnZlaGljdWxlcyB8fCBbXSxcbiAgICAgICAgfSkpLFxuICAgICAgICBjYXRjaEVycm9yKChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1NlYXJjaCBlcnJvcjonLCBlcnJvcilcbiAgICAgICAgICByZXR1cm4gb2Yoe1xuICAgICAgICAgICAgc3RhdGlvbnM6IFtdLFxuICAgICAgICAgICAgdmVoaWN1bGVzOiBbXSxcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgKVxuICB9XG59XG4iLCAiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBlZmZlY3QsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgRWxlbWVudFJlZixcbiAgVmlld0NoaWxkLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQge1xuICBJb25CdXR0b24sXG4gIElvbkljb24sXG4gIElvbklucHV0LFxuICBQbGF0Zm9ybSxcbn0gZnJvbSAnQGlvbmljL2FuZ3VsYXIvc3RhbmRhbG9uZSdcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbidcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnXG5pbXBvcnQgeyBhZGRJY29ucyB9IGZyb20gJ2lvbmljb25zJ1xuaW1wb3J0IHtcbiAgaGVhcnQsXG4gIHBlcnNvbixcbiAgYXJyb3dCYWNrLFxuICBjbG9zZSxcbiAgc2VhcmNoT3V0bGluZSxcbiAgYXJyb3dCYWNrT3V0bGluZSxcbn0gZnJvbSAnaW9uaWNvbnMvaWNvbnMnXG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJ1xuaW1wb3J0IHsgU3RhdGlvbldyYXBwZXJTZXJ2aWNlIH0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy9hcGktd3JhcHBlcnMvc3RhdGlvbnMuc2VydmljZSdcbmltcG9ydCB7IE5hdkNvbnRyb2xsZXIgfSBmcm9tICdAaW9uaWMvYW5ndWxhcidcbmltcG9ydCB7IFJvdXRlciwgUm91dGVyTGluayB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcbmltcG9ydCB7IFRvYXN0U2VydmljZSwgVG9hc3RUeXBlIH0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy91dGlscy90b2FzdC5zZXJ2aWNlJ1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UsIEF1dGhTdGF0ZSB9IGZyb20gJ3NyYy9hcHAvc2VydmljZXMvZXh0ZXJuYWwvYXV0aC5zZXJ2aWNlJ1xuaW1wb3J0IHsgU2VhcmNoU3RhdGUgfSBmcm9tICdzcmMvYXBwL3NlcnZpY2VzL2FwaS13cmFwcGVycy9zZWFyY2guc2VydmljZSdcblxuZXhwb3J0IHR5cGUgU2VhcmNoQmFyU3RhdGUgPSB7IHN0YXRlOiAnaWRsZScgfSB8IHsgc3RhdGU6ICdzZWFyY2hpbmcnIH1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNlYXJjaGJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWFyY2hiYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zZWFyY2hiYXIuY29tcG9uZW50LnNjc3MnXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBJb25JbnB1dCxcbiAgICBJb25CdXR0b24sXG4gICAgSW9uSWNvbixcbiAgICBUcmFuc2xhdGVNb2R1bGUsXG4gICAgUm91dGVyTGluayxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgYXV0aFN0YXRlOiBBdXRoU3RhdGVcbiAgaXNBbmRyb2lkOiBib29sZWFuID0gZmFsc2VcbiAgc2VhcmNoQmFyU3RhdGU6IFNlYXJjaEJhclN0YXRlID0ge1xuICAgIHN0YXRlOiAnaWRsZScsXG4gIH1cbiAgQElucHV0KCkgc3RhdGU6IFNlYXJjaFN0YXRlID0ge1xuICAgIHN0YXRlOiAnaWRsZScsXG4gIH1cbiAgQE91dHB1dCgpIHN0YXRlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpXG4gIEBPdXRwdXQoKSBzZWFyY2hRdWVyeSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpXG4gIEBWaWV3Q2hpbGQoJ3NlYXJjaElucHV0Jykgc2VhcmNoSW5wdXQ/OiBJb25JbnB1dFxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0YXRpb25XcmFwcGVyU2VydmljZTogU3RhdGlvbldyYXBwZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgbmF2Q3RybDogTmF2Q29udHJvbGxlcixcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIHRvYXN0U2VydmljZTogVG9hc3RTZXJ2aWNlLFxuICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWZcbiAgKSB7XG4gICAgYWRkSWNvbnMoeyBzZWFyY2hPdXRsaW5lLCBoZWFydCwgcGVyc29uLCBhcnJvd0JhY2ssIGNsb3NlIH0pXG4gICAgZWZmZWN0KCgpID0+IHtcbiAgICAgIHRoaXMuYXV0aFN0YXRlID0gdGhpcy5hdXRoU2VydmljZS5hdXRoU3RhdGUoKVxuICAgIH0pXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmlzQW5kcm9pZCA9IHRoaXMucGxhdGZvcm0uaXMoJ2FuZHJvaWQnKVxuICAgIGlmICh0aGlzLmlzQW5kcm9pZCkge1xuICAgICAgdGhpcy5oYW5kbGVBbmRyb2lkU2FmZUFyZWEoKVxuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAvLyBBdXRvLWZvY3VzIHdoZW4gb24gc2VhcmNoIHBhZ2VcbiAgICBpZiAodGhpcy5yb3V0ZXIudXJsID09PSAnL3NlYXJjaC1wYWdlJykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnNlYXJjaElucHV0KSB7XG4gICAgICAgICAgdGhpcy5zZWFyY2hJbnB1dC5zZXRGb2N1cygpXG4gICAgICAgIH1cbiAgICAgIH0sIDMwMClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUFuZHJvaWRTYWZlQXJlYSgpIHtcbiAgICAvLyBBam91dGUgbGEgY2xhc3NlIHNww6ljaWZpcXVlIEFuZHJvaWQgc2kgbsOpY2Vzc2FpcmVcbiAgICBjb25zdCBzZWFyY2hiYXJFbGVtZW50ID1cbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b20tc2VhcmNoYmFyJylcbiAgICBpZiAoc2VhcmNoYmFyRWxlbWVudCkge1xuICAgICAgLy8gVsOpcmlmaWUgc2kgbGEgc2FmZSBhcmVhIGZvbmN0aW9ubmUgY29ycmVjdGVtZW50XG4gICAgICBjb25zdCBzYWZlQXJlYVRvcCA9IGdldENvbXB1dGVkU3R5bGUoXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFxuICAgICAgKS5nZXRQcm9wZXJ0eVZhbHVlKCctLWlvbi1zYWZlLWFyZWEtdG9wJylcblxuICAgICAgaWYgKCFzYWZlQXJlYVRvcCB8fCBzYWZlQXJlYVRvcCA9PT0gJzBweCcgfHwgc2FmZUFyZWFUb3AgPT09ICd1bnNldCcpIHtcbiAgICAgICAgLy8gU2FmZSBhcmVhIG5lIGZvbmN0aW9ubmUgcGFzLCBhcHBsaXF1ZSBsYSBjbGFzc2UgZGUgZmFsbGJhY2tcbiAgICAgICAgc2VhcmNoYmFyRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhbmRyb2lkLXNhZmUtYXJlYScpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgb25Gb2N1cyhldmVudDogYW55KSB7XG4gICAgaWYgKHRoaXMucm91dGVyLnVybCA9PT0gJy9tYXAnKSB7XG4gICAgICB0aGlzLm5hdkN0cmwubmF2aWdhdGVGb3J3YXJkKCcvc2VhcmNoLXBhZ2UnLCB7IGFuaW1hdGVkOiBmYWxzZSB9KVxuICAgIH0gZWxzZSBpZiAodGhpcy5yb3V0ZXIudXJsID09PSAnL3NlYXJjaC1wYWdlJykge1xuICAgICAgLy8gQWxyZWFkeSBvbiBzZWFyY2ggcGFnZSwgZG8gbm90aGluZ1xuICAgIH0gZWxzZSB7XG4gICAgICBldmVudC50YXJnZXQuYmx1cigpXG4gICAgfVxuICB9XG5cbiAgb25JbnB1dChldmVudDogYW55KSB7XG4gICAgY29uc3QgcXVlcnkgPSBldmVudC50YXJnZXQudmFsdWVcblxuICAgIGlmICghcXVlcnkgfHwgcXVlcnkudHJpbSgpID09PSAnJykge1xuICAgICAgdGhpcy5zZWFyY2hCYXJTdGF0ZSA9IHsgc3RhdGU6ICdpZGxlJyB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VhcmNoQmFyU3RhdGUgPSB7IHN0YXRlOiAnc2VhcmNoaW5nJyB9XG4gICAgfVxuXG4gICAgLy8gw4ltZXR0cmUgbGEgcXVlcnkgcG91ciBxdWUgbGEgcGFnZSBwdWlzc2UgZmFpcmUgc2EgcHJvcHJlIHJlY2hlcmNoZVxuICAgIHRoaXMuc2VhcmNoUXVlcnkuZW1pdChxdWVyeSlcbiAgfVxuXG4gIG9uRmF2b3JpdGVDbGljaygpIHtcbiAgICBpZiAodGhpcy5hdXRoU3RhdGUuc3RhdGUgPT09ICdTaWduZWRJbicpIHtcbiAgICAgIHRoaXMuc3RhdGlvbldyYXBwZXJTZXJ2aWNlLnNldFN0YXRpb25TdGF0ZSgnZmF2b3JpdGVzLXN0YXRpb25zJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50b2FzdFNlcnZpY2UuY3JlYXRlV2l0aEp1c3RNZXNzYWdlKFxuICAgICAgICAnVm91cyBkZXZleiDDqnRyZSBjb25uZWN0w6kgcG91ciBhY2PDqWRlciDDoCB2b3MgZmF2b3JpcycsXG4gICAgICAgIFRvYXN0VHlwZS5JbmZvXG4gICAgICApXG4gICAgICB0aGlzLm5hdkN0cmwubmF2aWdhdGVGb3J3YXJkKCcvYWNjb3VudCcsIHsgYW5pbWF0ZWQ6IGZhbHNlIH0pXG4gICAgfVxuICB9XG5cbiAgb25CYWNrQ2xpY2soKSB7XG4gICAgdGhpcy5zZWFyY2hCYXJTdGF0ZSA9IHsgc3RhdGU6ICdpZGxlJyB9XG4gICAgdGhpcy5uYXZDdHJsLm5hdmlnYXRlQmFjaygnL21hcCcsIHsgYW5pbWF0ZWQ6IGZhbHNlIH0pXG4gICAgdGhpcy5zdGF0ZUNoYW5nZS5lbWl0KClcbiAgfVxuXG4gIGNsZWFySW5wdXQoKSB7XG4gICAgaWYgKHRoaXMuc2VhcmNoSW5wdXQpIHtcbiAgICAgIHRoaXMuc2VhcmNoSW5wdXQudmFsdWUgPSAnJ1xuICAgICAgdGhpcy5zZWFyY2hCYXJTdGF0ZSA9IHsgc3RhdGU6ICdpZGxlJyB9XG4gICAgICB0aGlzLnNlYXJjaFF1ZXJ5LmVtaXQoJycpXG4gICAgICAvLyBSZS1mb2N1cyB0aGUgaW5wdXQgYWZ0ZXIgY2xlYXJpbmdcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zZWFyY2hJbnB1dCkge1xuICAgICAgICAgIHRoaXMuc2VhcmNoSW5wdXQuc2V0Rm9jdXMoKVxuICAgICAgICB9XG4gICAgICB9LCAxMDApXG4gICAgfVxuICB9XG59XG4iLCAiPGRpdiBjbGFzcz1cImN1c3RvbS1zZWFyY2hiYXJcIiBbbmdDbGFzc109XCJ7IGZvY3VzZWQ6IHN0YXRlLnN0YXRlICE9PSAnaWRsZScgfVwiPlxuICA8IS0tIFNob3cgYXJyb3ctYmFjayB3aGVuIG5vdCBpZGxlLCBzZWFyY2ggaWNvbiB3aGVuIGlkbGUgLS0+XG4gIDxpb24taWNvblxuICAgICpuZ0lmPVwic3RhdGUuc3RhdGUgPT09ICdpZGxlJ1wiXG4gICAgbmFtZT1cInNlYXJjaC1vdXRsaW5lXCJcbiAgICBzaXplPVwibGFyZ2VcIlxuICA+PC9pb24taWNvbj5cblxuICA8aW9uLWljb25cbiAgICAqbmdJZj1cInN0YXRlLnN0YXRlICE9PSAnaWRsZSdcIlxuICAgIHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyXCJcbiAgICAoY2xpY2spPVwib25CYWNrQ2xpY2soKVwiXG4gICAgbmFtZT1cImFycm93LWJhY2tcIlxuICAgIHNpemU9XCJsYXJnZVwiXG4gID48L2lvbi1pY29uPlxuICA8aW9uLWlucHV0XG4gICAgI3NlYXJjaElucHV0XG4gICAgW3BsYWNlaG9sZGVyXT1cIidzZWFyY2hiYXIucGxhY2Vob2xkZXInIHwgdHJhbnNsYXRlXCJcbiAgICBbZGVib3VuY2VdPVwiNTAwXCJcbiAgICAoaW9uRm9jdXMpPVwib25Gb2N1cygkZXZlbnQpXCJcbiAgICAoaW9uSW5wdXQpPVwib25JbnB1dCgkZXZlbnQpXCJcbiAgLz5cbiAgPGlvbi1idXR0b25cbiAgICBmaWxsPVwiY2xlYXJcIlxuICAgIHNsb3Q9XCJlbmRcIlxuICAgIGNvbG9yPVwiZGFuZ2VyXCJcbiAgICAoY2xpY2spPVwib25GYXZvcml0ZUNsaWNrKClcIlxuICAgICpuZ0lmPVwic3RhdGUuc3RhdGUgPT09ICdpZGxlJ1wiXG4gID5cbiAgICA8aW9uLWljb24gc2xvdD1cImljb24tb25seVwiIG5hbWU9XCJoZWFydFwiPjwvaW9uLWljb24+XG4gIDwvaW9uLWJ1dHRvbj5cblxuICA8IS0tIENsZWFyIGJ1dHRvbiB3aGVuIHR5cGluZyBvbiBzZWFyY2ggcGFnZSAtLT5cbiAgPGlvbi1idXR0b25cbiAgICAqbmdJZj1cInNlYXJjaEJhclN0YXRlLnN0YXRlID09PSAnc2VhcmNoaW5nJ1wiXG4gICAgZmlsbD1cImNsZWFyXCJcbiAgICBzbG90PVwiZW5kXCJcbiAgICAoY2xpY2spPVwiY2xlYXJJbnB1dCgpXCJcbiAgPlxuICAgIDxpb24taWNvbiBzbG90PVwiaWNvbi1vbmx5XCIgbmFtZT1cImNsb3NlXCI+PC9pb24taWNvbj5cbiAgPC9pb24tYnV0dG9uPlxuXG4gIDwhLS0gQWNjb3VudCBidXR0b24gb25seSBvbiBtYXAgcGFnZSAtLT5cbiAgPGlvbi1idXR0b25cbiAgICAqbmdJZj1cInNlYXJjaEJhclN0YXRlLnN0YXRlID09PSAnaWRsZScgJiYgcm91dGVyLnVybCAhPT0gJy9zZWFyY2gtcGFnZSdcIlxuICAgIHNsb3Q9XCJlbmRcIlxuICAgIHNoYXBlPVwicm91bmRcIlxuICAgIGNvbG9yPVwiZGFya1wiXG4gICAgW3JvdXRlckxpbmtdPVwiJy9hY2NvdW50J1wiXG4gICAgY2xhc3M9XCJlY2wtYnRuLS1iYWRnZVwiXG4gID5cbiAgICA8aW9uLWljb24gc2xvdD1cImljb24tb25seVwiIG5hbWU9XCJwZXJzb25cIj48L2lvbi1pY29uPlxuICA8L2lvbi1idXR0b24+XG48L2Rpdj5cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQ00sSUFBTyx3QkFBUCxNQUFPLHNCQUFvQjtFQUsvQixZQUFvQixlQUE0QjtBQUE1QixTQUFBLGdCQUFBO0FBSnBCLFNBQUEsY0FBNEMsSUFBSSxnQkFBNkI7TUFDM0UsT0FBTztLQUNSO0VBRWtEO0VBRW5ELE9BQU8sT0FBYTtBQUNsQixRQUFJLENBQUMsTUFBTSxLQUFJLEdBQUk7QUFDakIsV0FBSyxZQUFZLEtBQUssRUFBRSxPQUFPLE9BQU0sQ0FBRTtBQUN2QztJQUNGO0FBRUEsU0FBSyxZQUFZLEtBQUssRUFBRSxPQUFPLFVBQVMsQ0FBRTtBQUMxQyxTQUFLLGNBQ0YsT0FBTztNQUNOLFNBQVMsWUFBWTtNQUNyQjtLQUNELEVBQ0EsVUFBVTtNQUNULE1BQU0sQ0FBQyxhQUErQjtBQXREOUM7QUF1RFUsY0FBTSxvQkFBbUIsY0FBUyxhQUFULG1CQUFtQixPQUMxQyxDQUFDLFlBQVksUUFBUSxXQUFXO0FBRWxDLGNBQU0scUJBQW9CLGNBQVMsY0FBVCxtQkFBb0IsT0FDNUMsQ0FBQyxhQUFhLFNBQVMsV0FBVztBQUVwQyxZQUNFLG9CQUNBLGlCQUFpQixTQUFTLEtBQzFCLHFCQUNBLGtCQUFrQixTQUFTLEdBQzNCO0FBQ0EsZUFBSyxZQUFZLEtBQUs7WUFDcEIsT0FBTztZQUNQLFNBQVM7Y0FDUCxVQUFVO2NBQ1YsV0FBVzs7V0FFZDtRQUNILFdBQVcsb0JBQW9CLGlCQUFpQixTQUFTLEdBQUc7QUFDMUQsZUFBSyxZQUFZLEtBQUs7WUFDcEIsT0FBTztZQUNQLFNBQVM7Y0FDUCxVQUFVO2NBQ1YsV0FBVyxDQUFBOztXQUVkO1FBQ0gs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
