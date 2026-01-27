import {
  LaunchService
} from "./chunk-FMQY6VXD.js";
import "./chunk-5KXLLE34.js";
import "./chunk-S5TR5TQN.js";
import "./chunk-OEYRANOA.js";
import "./chunk-CCA64IRZ.js";
import "./chunk-PXVTGX2T.js";
import "./chunk-7JCEDXGT.js";
import "./chunk-RFEPADPA.js";
import "./chunk-Y4K6NO5T.js";
import {
  AuthService
} from "./chunk-WJQU3GMM.js";
import {
  KYCWrapperService
} from "./chunk-CHFOG66O.js";
import "./chunk-RAVV2QIY.js";
import {
  AppstateService
} from "./chunk-T6WE2PS5.js";
import {
  AccountService
} from "./chunk-XK4I5MHM.js";
import "./chunk-GVYZRG6X.js";
import {
  environment
} from "./chunk-FOJAXRYS.js";
import "./chunk-Y7HI6USV.js";
import "./chunk-SARQRLZR.js";
import {
  addIcons,
  cloudDownloadOutline
} from "./chunk-3E6DEK7U.js";
import {
  StorageService
} from "./chunk-U6SJAXLK.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  Injectable,
  IonCol,
  IonContent,
  IonImg,
  IonProgressBar,
  IonRow,
  NgIf,
  Router,
  Subject,
  TranslateModule,
  TranslatePipe,
  effect,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
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
import {
  Capacitor,
  registerPlugin
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

// node_modules/capacitor-plugin-app-tracking-transparency/dist/esm/index.js
var AppTrackingTransparency = registerPlugin("AppTrackingTransparency", {
  web: () => import("./web-7GDQ42YT.js").then((m) => new m.AppTrackingTransparencyWeb())
});

// node_modules/@capawesome/capacitor-live-update/dist/esm/index.js
var LiveUpdate = registerPlugin("LiveUpdate", {
  web: () => import("./web-DV2B77CC.js").then((m) => new m.LiveUpdateWeb())
});

// src/app/services/liveupdate.service.ts
var _LiveUpdateService = class _LiveUpdateService {
  constructor() {
    this.updateSubject = new Subject();
    this.updates$ = this.updateSubject.asObservable();
  }
  // Méthode principale pour vérifier et appliquer les mises à jour
  checkForUpdate() {
    return __async(this, null, function* () {
      var _a, _b;
      try {
        this.updateSubject.next("check_started");
        const bundle = yield LiveUpdate.fetchLatestBundle();
        if (bundle && bundle.bundleId && ((_a = bundle.customProperties) == null ? void 0 : _a["timestamp"]) && environment.timestamp < ((_b = bundle.customProperties) == null ? void 0 : _b["timestamp"])) {
          const currentBundles = yield LiveUpdate.getBundles();
          const currentBundle = yield LiveUpdate.getCurrentBundle();
          if (currentBundles.bundleIds.includes(bundle.bundleId) && currentBundle.bundleId === bundle.bundleId) {
            this.updateSubject.next("bundle_not_found");
            return;
          } else {
            this.updateSubject.next("bundle_found");
          }
          this.updateSubject.next("download_started");
          const syncResult = yield LiveUpdate.sync();
          if (syncResult.nextBundleId) {
            this.updateSubject.next("download_completed");
            yield new Promise((resolve) => setTimeout(resolve, 500));
            this.updateSubject.next("reload_started");
            yield LiveUpdate.reload();
          } else {
            this.updateSubject.next("bundle_not_found");
          }
        } else {
          this.updateSubject.next("bundle_not_found");
        }
      } catch (error) {
        console.error("Erreur lors de la mise \xE0 jour LiveUpdate :", error);
        this.updateSubject.next("error");
      }
    });
  }
  // Méthode pour indiquer que l'application s'est chargée
  ready() {
    return __async(this, null, function* () {
      yield LiveUpdate.ready();
    });
  }
};
_LiveUpdateService.\u0275fac = function LiveUpdateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LiveUpdateService)();
};
_LiveUpdateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LiveUpdateService, factory: _LiveUpdateService.\u0275fac, providedIn: "root" });
var LiveUpdateService = _LiveUpdateService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LiveUpdateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/pages/launch/launch.page.ts
function LaunchPage_ion_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-img", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.program == null ? null : ctx_r0.program.config == null ? null : ctx_r0.program.config.logo);
  }
}
function LaunchPage_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-row", 5)(2, "ion-col", 6)(3, "p", 7);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "ion-row", 8)(7, "ion-col", 6);
    \u0275\u0275element(8, "ion-progress-bar", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "launch.searching_for_updates"), " ");
  }
}
var _LaunchPage = class _LaunchPage {
  constructor(storageService, accountService, router, authService, liveUpdateService, appstateService, route, launchService, kycService) {
    this.storageService = storageService;
    this.accountService = accountService;
    this.router = router;
    this.authService = authService;
    this.liveUpdateService = liveUpdateService;
    this.appstateService = appstateService;
    this.route = route;
    this.launchService = launchService;
    this.kycService = kycService;
    this.auth = { state: "SignedOut" };
    this.cyclist = {
      state: "unknown",
      blocked_reasons: ["Unknown account state"]
    };
    this.isFirstVisit = false;
    this.loaderStateText = "launch.update_checking";
    this.nextUrl = null;
    this.liveUpdateState = "idle";
    this.route.queryParams.subscribe((params) => {
      if (params["next"]) {
        this.nextUrl = params["next"];
      }
    });
    effect(() => {
      this.auth = this.authService.authState();
    });
    effect(() => {
      this.cyclist = this.accountService.cyclistState();
    });
    addIcons({
      cloudDownloadOutline
    });
    this.updateSubscription = this.liveUpdateService.updates$.subscribe((event) => {
      switch (event) {
        case "download_started":
          this.liveUpdateState = "download_started";
          break;
        case "download_completed":
          this.liveUpdateState = "download_completed";
          break;
        case "error":
        case "bundle_not_found":
          this.liveUpdateState = "bundle_not_found";
          break;
      }
    });
  }
  ngOnDestroy() {
    if (this.updateSubscription) {
      this.updateSubscription.unsubscribe();
    }
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.app = yield this.appstateService.getSavedAppState();
      if (Capacitor.getPlatform() === "ios") {
        const response = yield AppTrackingTransparency.getStatus();
        if (response.status === "notDetermined") {
          const appTrackingResponse = yield AppTrackingTransparency.requestPermission();
          if (appTrackingResponse.status === "authorized") {
          } else {
          }
        }
      }
      const timeoutPromise = new Promise((resolve) => setTimeout(resolve, 5e3));
      yield Promise.race([this.loadData(), timeoutPromise]);
      if (Capacitor.isNativePlatform()) {
        yield this.checkForLiveUpdate();
        yield this.liveUpdateService.ready();
      }
      if (!this.app) {
        this.appstateService.setAppState({ state: "onboarding" });
        yield this.router.navigate(["/landing"], { replaceUrl: true });
      }
      switch (this.auth.state) {
        case "SignedIn":
          if (this.cyclist.state === "unknown" || this.cyclist.state === "error") {
            yield this.waitForCyclistState();
          }
          if (this.app.state === "onboarding") {
            this.redirectOnboarding();
          } else {
            this.redirect();
          }
          break;
        case "SignedOut":
          yield this.router.navigate(["/landing"], { replaceUrl: true });
          break;
        default:
          yield this.router.navigate(["/map"], { replaceUrl: true });
          break;
      }
    });
  }
  loadData() {
    return __async(this, null, function* () {
      try {
        yield this.launchService.loadEssentialData({
          skipIfDataExists: false,
          // Always load on launch page
          forceRefreshStations: true
        });
        this.program = yield this.storageService.get("program");
      } catch (error) {
        console.error("Error in loadData:", error);
      }
    });
  }
  checkForLiveUpdate() {
    return new Promise((resolve, reject) => __async(this, null, function* () {
      const subscription = this.liveUpdateService.updates$.subscribe((event) => __async(this, null, function* () {
        switch (event) {
          case "check_started":
            this.loaderStateText = "launch.update_checking";
            break;
          case "bundle_found":
            this.loaderStateText = "launch.update_available";
            break;
          case "bundle_not_found":
            this.loaderStateText = "launch.no_update";
            subscription.unsubscribe();
            resolve();
            break;
          case "download_started":
            this.loaderStateText = "launch.update_downloading";
            break;
          case "download_completed":
            this.loaderStateText = "launch.update_downloaded";
            break;
          case "reload_started":
            this.loaderStateText = "launch.update_app_reloading";
            resolve();
            break;
          case "error":
            this.loaderStateText = "launch.error";
            subscription.unsubscribe();
            reject("liveUpdateError");
            break;
        }
      }));
      this.liveUpdateService.checkForUpdate();
    }));
  }
  redirectOnboarding() {
    return __async(this, null, function* () {
      if (this.cyclist.state === "unconfirmed") {
        if (this.accountService.hasMissingPaymentMethodOrCgu()) {
          yield this.router.navigate(["/payment-method"], {
            replaceUrl: true
          });
        } else if (this.kycService.kycCompletionState() === "missing" || this.kycService.kycCompletionState() === "rejected") {
          yield this.router.navigate(["/kyc"], {
            replaceUrl: true,
            queryParams: {
              onboarding: "true"
            }
          });
        } else {
          yield this.router.navigate(["/map"], {
            replaceUrl: true
          });
        }
      } else {
        yield this.router.navigate(["/map"], {
          replaceUrl: true
        });
      }
    });
  }
  redirect() {
    return __async(this, null, function* () {
      if (this.kycService.kycCompletionState() === "missing" || this.kycService.kycCompletionState() === "rejected") {
        yield this.router.navigate(["/kyc"], { replaceUrl: true });
      } else if (this.nextUrl && this.nextUrl !== "/") {
        yield this.router.navigate([this.nextUrl], { replaceUrl: true });
      } else {
        yield this.router.navigate(["/map"], { replaceUrl: true });
      }
    });
  }
  waitForCyclistState() {
    return __async(this, null, function* () {
      const maxRetries = 1e3;
      for (let i = 0; i < maxRetries; i++) {
        if (this.cyclist.state !== "unknown" && this.cyclist.state !== "error") {
          return;
        }
        yield new Promise((resolve) => setTimeout(resolve, 5));
      }
      console.warn("Cyclist state did not change within the allowed time");
    });
  }
};
_LaunchPage.\u0275fac = function LaunchPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LaunchPage)(\u0275\u0275directiveInject(StorageService), \u0275\u0275directiveInject(AccountService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(LiveUpdateService), \u0275\u0275directiveInject(AppstateService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(LaunchService), \u0275\u0275directiveInject(KYCWrapperService));
};
_LaunchPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LaunchPage, selectors: [["app-launch"]], features: [\u0275\u0275ProvidersFeature([Storage, StorageService])], decls: 4, vars: 3, consts: [[3, "fullscreen"], [1, "ecl-launch__container", "logo"], ["class", "fade-in", "alt", "logo", 3, "src", 4, "ngIf"], [4, "ngIf"], ["alt", "logo", 1, "fade-in", 3, "src"], [1, "ion-margin-top", "ion-margin-horizontal", "ion-justify-content-center"], ["size", "12", "size-md", "6", "size-lg", "4"], [1, "ion-text-center"], [1, "ion-margin-horizontal", "ion-margin-bottom", "ion-justify-content-center"], ["type", "indeterminate"]], template: function LaunchPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content", 0)(1, "div", 1);
    \u0275\u0275template(2, LaunchPage_ion_img_2_Template, 1, 1, "ion-img", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, LaunchPage_ng_container_3_Template, 9, 3, "ng-container", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.program);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.liveUpdateState === "download_started");
  }
}, dependencies: [
  IonContent,
  CommonModule,
  NgIf,
  IonRow,
  IonImg,
  TranslateModule,
  TranslatePipe,
  IonProgressBar,
  IonCol
], styles: ["\n\n.ecl-launch__container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 50%;\n  width: 100%;\n}\n.ecl-launch__container.logo[_ngcontent-%COMP%] {\n  align-items: flex-end;\n}\n.ecl-launch__container.logo[_ngcontent-%COMP%]    > .fade-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 1s ease-in-out;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=launch.page.css.map */"] });
var LaunchPage = _LaunchPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LaunchPage, [{
    type: Component,
    args: [{ selector: "app-launch", providers: [Storage, StorageService], imports: [
      IonContent,
      CommonModule,
      IonRow,
      IonImg,
      TranslateModule,
      IonProgressBar,
      IonCol
    ], template: `<ion-content [fullscreen]="true">
  <div class="ecl-launch__container logo">
    <ion-img
      *ngIf="program"
      class="fade-in"
      [src]="program?.config?.logo"
      alt="logo"
    ></ion-img>
  </div>
  <ng-container *ngIf="liveUpdateState === 'download_started'">
    <ion-row
      class="ion-margin-top ion-margin-horizontal ion-justify-content-center"
    >
      <ion-col size="12" size-md="6" size-lg="4">
        <p class="ion-text-center">
          {{ 'launch.searching_for_updates' | translate }}
        </p>
      </ion-col>
    </ion-row>
    <ion-row
      class="ion-margin-horizontal ion-margin-bottom ion-justify-content-center"
    >
      <ion-col size="12" size-md="6" size-lg="4">
        <ion-progress-bar type="indeterminate"></ion-progress-bar>
      </ion-col>
    </ion-row>
  </ng-container>
</ion-content>
`, styles: ["/* src/app/pages/launch/launch.page.scss */\n.ecl-launch__container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 50%;\n  width: 100%;\n}\n.ecl-launch__container.logo {\n  align-items: flex-end;\n}\n.ecl-launch__container.logo > .fade-in {\n  animation: fadeIn 1s ease-in-out;\n}\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=launch.page.css.map */\n"] }]
  }], () => [{ type: StorageService }, { type: AccountService }, { type: Router }, { type: AuthService }, { type: LiveUpdateService }, { type: AppstateService }, { type: ActivatedRoute }, { type: LaunchService }, { type: KYCWrapperService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LaunchPage, { className: "LaunchPage", filePath: "src/app/pages/launch/launch.page.ts", lineNumber: 49 });
})();
export {
  LaunchPage
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9jYXBhY2l0b3ItcGx1Z2luLWFwcC10cmFja2luZy10cmFuc3BhcmVuY3kvZGlzdC9lc20vaW5kZXguanMiLCJub2RlX21vZHVsZXMvQGNhcGF3ZXNvbWUvY2FwYWNpdG9yLWxpdmUtdXBkYXRlL2Rpc3QvZXNtL2luZGV4LmpzIiwic3JjL2FwcC9zZXJ2aWNlcy9saXZldXBkYXRlLnNlcnZpY2UudHMiLCJzcmMvYXBwL3BhZ2VzL2xhdW5jaC9sYXVuY2gucGFnZS50cyIsInNyYy9hcHAvcGFnZXMvbGF1bmNoL2xhdW5jaC5wYWdlLmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVnaXN0ZXJQbHVnaW4gfSBmcm9tICdAY2FwYWNpdG9yL2NvcmUnO1xuY29uc3QgQXBwVHJhY2tpbmdUcmFuc3BhcmVuY3kgPSByZWdpc3RlclBsdWdpbignQXBwVHJhY2tpbmdUcmFuc3BhcmVuY3knLCB7XG4gIHdlYjogKCkgPT4gaW1wb3J0KCcuL3dlYicpLnRoZW4obSA9PiBuZXcgbS5BcHBUcmFja2luZ1RyYW5zcGFyZW5jeVdlYigpKVxufSk7XG5leHBvcnQgKiBmcm9tICcuL2RlZmluaXRpb25zJztcbmV4cG9ydCB7IEFwcFRyYWNraW5nVHJhbnNwYXJlbmN5IH07XG4iLCJpbXBvcnQgeyByZWdpc3RlclBsdWdpbiB9IGZyb20gJ0BjYXBhY2l0b3IvY29yZSc7XG5jb25zdCBMaXZlVXBkYXRlID0gcmVnaXN0ZXJQbHVnaW4oJ0xpdmVVcGRhdGUnLCB7XG4gIHdlYjogKCkgPT4gaW1wb3J0KCcuL3dlYicpLnRoZW4obSA9PiBuZXcgbS5MaXZlVXBkYXRlV2ViKCkpXG59KTtcbmV4cG9ydCAqIGZyb20gJy4vZGVmaW5pdGlvbnMnO1xuZXhwb3J0IHsgTGl2ZVVwZGF0ZSB9O1xuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBMaXZlVXBkYXRlIH0gZnJvbSAnQGNhcGF3ZXNvbWUvY2FwYWNpdG9yLWxpdmUtdXBkYXRlJ1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJ3NyYy9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnXG5cbmV4cG9ydCB0eXBlIExpdmVVcGRhdGVFdmVudCA9XG4gIHwgJ2NoZWNrX3N0YXJ0ZWQnXG4gIHwgJ2J1bmRsZV9mb3VuZCdcbiAgfCAnYnVuZGxlX25vdF9mb3VuZCdcbiAgfCAnZG93bmxvYWRfc3RhcnRlZCdcbiAgfCAnZG93bmxvYWRfY29tcGxldGVkJ1xuICB8ICdyZWxvYWRfc3RhcnRlZCdcbiAgfCAnZXJyb3InXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBMaXZlVXBkYXRlU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICAvLyBTdWpldCBwcml2w6kgcG91ciDDqW1ldHRyZSBsZXMgw6l2w6luZW1lbnRzXG4gIHByaXZhdGUgdXBkYXRlU3ViamVjdCA9IG5ldyBTdWJqZWN0PExpdmVVcGRhdGVFdmVudD4oKVxuXG4gIC8vIE9ic2VydmFibGUgcHVibGljIHBvdXIgcXVlIGxlcyBjb21wb3NhbnRzIHB1aXNzZW50IHMnYWJvbm5lclxuICBwdWJsaWMgdXBkYXRlcyQ6IE9ic2VydmFibGU8TGl2ZVVwZGF0ZUV2ZW50PiA9XG4gICAgdGhpcy51cGRhdGVTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpXG5cbiAgLy8gTcOpdGhvZGUgcHJpbmNpcGFsZSBwb3VyIHbDqXJpZmllciBldCBhcHBsaXF1ZXIgbGVzIG1pc2VzIMOgIGpvdXJcbiAgYXN5bmMgY2hlY2tGb3JVcGRhdGUoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMudXBkYXRlU3ViamVjdC5uZXh0KCdjaGVja19zdGFydGVkJylcblxuICAgICAgLy8gUmVjaGVyY2hlIGR1IGRlcm5pZXIgYnVuZGxlIGRpc3BvbmlibGVcbiAgICAgIGNvbnN0IGJ1bmRsZSA9IGF3YWl0IExpdmVVcGRhdGUuZmV0Y2hMYXRlc3RCdW5kbGUoKVxuICAgICAgaWYgKFxuICAgICAgICBidW5kbGUgJiZcbiAgICAgICAgYnVuZGxlLmJ1bmRsZUlkICYmXG4gICAgICAgIGJ1bmRsZS5jdXN0b21Qcm9wZXJ0aWVzPy5bJ3RpbWVzdGFtcCddICYmXG4gICAgICAgIGVudmlyb25tZW50LnRpbWVzdGFtcCA8IGJ1bmRsZS5jdXN0b21Qcm9wZXJ0aWVzPy5bJ3RpbWVzdGFtcCddXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgY3VycmVudEJ1bmRsZXMgPSBhd2FpdCBMaXZlVXBkYXRlLmdldEJ1bmRsZXMoKVxuICAgICAgICBjb25zdCBjdXJyZW50QnVuZGxlID0gYXdhaXQgTGl2ZVVwZGF0ZS5nZXRDdXJyZW50QnVuZGxlKClcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgY3VycmVudEJ1bmRsZXMuYnVuZGxlSWRzLmluY2x1ZGVzKGJ1bmRsZS5idW5kbGVJZCkgJiZcbiAgICAgICAgICBjdXJyZW50QnVuZGxlLmJ1bmRsZUlkID09PSBidW5kbGUuYnVuZGxlSWRcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVTdWJqZWN0Lm5leHQoJ2J1bmRsZV9ub3RfZm91bmQnKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudXBkYXRlU3ViamVjdC5uZXh0KCdidW5kbGVfZm91bmQnKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRMOpbWFycmFnZSBkdSB0w6lsw6ljaGFyZ2VtZW50IGR1IGJ1bmRsZVxuICAgICAgICB0aGlzLnVwZGF0ZVN1YmplY3QubmV4dCgnZG93bmxvYWRfc3RhcnRlZCcpXG5cbiAgICAgICAgY29uc3Qgc3luY1Jlc3VsdCA9IGF3YWl0IExpdmVVcGRhdGUuc3luYygpXG4gICAgICAgIGlmIChzeW5jUmVzdWx0Lm5leHRCdW5kbGVJZCkge1xuICAgICAgICAgIHRoaXMudXBkYXRlU3ViamVjdC5uZXh0KCdkb3dubG9hZF9jb21wbGV0ZWQnKVxuICAgICAgICAgIC8vIFBhdXNlIGRlIDUwMG1zIGF2YW50IGxlIHJlZMOpbWFycmFnZSBwb3VyIGxhaXNzZXIgbGUgdGVtcHMgw6AgbCdpbnRlcmZhY2UgdXRpbGlzYXRldXIgZGUgcsOpYWdpclxuICAgICAgICAgIC8vIEV0IHF1ZSBjYSBuZSBmYXNzZSBwYXMgdW4gY2xpZ25vdGVtZW50IG5vbiBwbHVzXG4gICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgNTAwKSlcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN1YmplY3QubmV4dCgncmVsb2FkX3N0YXJ0ZWQnKVxuICAgICAgICAgIGF3YWl0IExpdmVVcGRhdGUucmVsb2FkKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN1YmplY3QubmV4dCgnYnVuZGxlX25vdF9mb3VuZCcpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudXBkYXRlU3ViamVjdC5uZXh0KCdidW5kbGVfbm90X2ZvdW5kJylcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZGUgbGEgbWlzZSDDoCBqb3VyIExpdmVVcGRhdGUgOicsIGVycm9yKVxuICAgICAgdGhpcy51cGRhdGVTdWJqZWN0Lm5leHQoJ2Vycm9yJylcbiAgICB9XG4gIH1cblxuICAvLyBNw6l0aG9kZSBwb3VyIGluZGlxdWVyIHF1ZSBsJ2FwcGxpY2F0aW9uIHMnZXN0IGNoYXJnw6llXG4gIGFzeW5jIHJlYWR5KCkge1xuICAgIGF3YWl0IExpdmVVcGRhdGUucmVhZHkoKVxuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIGVmZmVjdCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJ1xuaW1wb3J0IHtcbiAgSW9uQ29udGVudCxcbiAgSW9uSW1nLFxuICBJb25Sb3csXG4gIElvblByb2dyZXNzQmFyLFxuICBJb25Db2wsXG59IGZyb20gJ0Bpb25pYy9hbmd1bGFyL3N0YW5kYWxvbmUnXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJ3NyYy9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnXG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3V0aWxzL3N0b3JhZ2Uuc2VydmljZSdcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInXG5pbXBvcnQgeyBBdXRoU2VydmljZSwgQXV0aFN0YXRlIH0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy9leHRlcm5hbC9hdXRoLnNlcnZpY2UnXG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJ1xuaW1wb3J0IHtcbiAgTGl2ZVVwZGF0ZUV2ZW50LFxuICBMaXZlVXBkYXRlU2VydmljZSxcbn0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy9saXZldXBkYXRlLnNlcnZpY2UnXG5pbXBvcnQge1xuICBBY2NvdW50U2VydmljZSxcbiAgY3ljbGlzdFN0YXRlLFxufSBmcm9tICdzcmMvYXBwL3NlcnZpY2VzL2FwaS13cmFwcGVycy9hY2NvdW50LnNlcnZpY2UnXG5pbXBvcnQge1xuICBBcHBTdGF0ZSxcbiAgQXBwc3RhdGVTZXJ2aWNlLFxufSBmcm9tICdzcmMvYXBwL3NlcnZpY2VzL2ludGVybmFsL2FwcHN0YXRlLnNlcnZpY2UnXG5pbXBvcnQgeyBDYXBhY2l0b3IgfSBmcm9tICdAY2FwYWNpdG9yL2NvcmUnXG5pbXBvcnQgeyBMYXVuY2hTZXJ2aWNlIH0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy9pbnRlcm5hbC9sYXVuY2guc2VydmljZSdcbmltcG9ydCB7IEtZQ1dyYXBwZXJTZXJ2aWNlIH0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy9hcGktd3JhcHBlcnMva3ljLnNlcnZpY2UnXG5pbXBvcnQgeyBBcHBUcmFja2luZ1RyYW5zcGFyZW5jeSB9IGZyb20gJ2NhcGFjaXRvci1wbHVnaW4tYXBwLXRyYWNraW5nLXRyYW5zcGFyZW5jeSdcbmltcG9ydCB7IGFkZEljb25zIH0gZnJvbSAnaW9uaWNvbnMnXG5pbXBvcnQgeyBjbG91ZERvd25sb2FkT3V0bGluZSB9IGZyb20gJ2lvbmljb25zL2ljb25zJ1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbGF1bmNoJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xhdW5jaC5wYWdlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sYXVuY2gucGFnZS5zY3NzJ10sXG4gIHByb3ZpZGVyczogW1N0b3JhZ2UsIFN0b3JhZ2VTZXJ2aWNlXSxcbiAgaW1wb3J0czogW1xuICAgIElvbkNvbnRlbnQsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIElvblJvdyxcbiAgICBJb25JbWcsXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICAgIElvblByb2dyZXNzQmFyLFxuICAgIElvbkNvbCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTGF1bmNoUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHVibGljIHByb2dyYW06IGFueVxuICBwcml2YXRlIGF1dGg6IEF1dGhTdGF0ZSA9IHsgc3RhdGU6ICdTaWduZWRPdXQnIH1cbiAgcHJpdmF0ZSBjeWNsaXN0OiBjeWNsaXN0U3RhdGUgPSB7XG4gICAgc3RhdGU6ICd1bmtub3duJyxcbiAgICBibG9ja2VkX3JlYXNvbnM6IFsnVW5rbm93biBhY2NvdW50IHN0YXRlJ10sXG4gIH1cbiAgcHJpdmF0ZSBhcHA6IEFwcFN0YXRlXG4gIHB1YmxpYyBpc0ZpcnN0VmlzaXQ6IGJvb2xlYW4gPSBmYWxzZVxuICBwdWJsaWMgbG9hZGVyU3RhdGVUZXh0ID0gJ2xhdW5jaC51cGRhdGVfY2hlY2tpbmcnXG4gIHByaXZhdGUgbmV4dFVybDogc3RyaW5nIHwgbnVsbCA9IG51bGxcbiAgcHVibGljIGxpdmVVcGRhdGVTdGF0ZTogc3RyaW5nID0gJ2lkbGUnXG4gIHByaXZhdGUgdXBkYXRlU3Vic2NyaXB0aW9uOiBhbnlcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0b3JhZ2VTZXJ2aWNlOiBTdG9yYWdlU2VydmljZSxcbiAgICBwcml2YXRlIGFjY291bnRTZXJ2aWNlOiBBY2NvdW50U2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgbGl2ZVVwZGF0ZVNlcnZpY2U6IExpdmVVcGRhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgYXBwc3RhdGVTZXJ2aWNlOiBBcHBzdGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBsYXVuY2hTZXJ2aWNlOiBMYXVuY2hTZXJ2aWNlLFxuICAgIHByaXZhdGUga3ljU2VydmljZTogS1lDV3JhcHBlclNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xuICAgICAgaWYgKHBhcmFtc1snbmV4dCddKSB7XG4gICAgICAgIHRoaXMubmV4dFVybCA9IHBhcmFtc1snbmV4dCddXG4gICAgICB9XG4gICAgfSlcbiAgICBlZmZlY3QoKCkgPT4ge1xuICAgICAgdGhpcy5hdXRoID0gdGhpcy5hdXRoU2VydmljZS5hdXRoU3RhdGUoKVxuICAgIH0pXG4gICAgZWZmZWN0KCgpID0+IHtcbiAgICAgIHRoaXMuY3ljbGlzdCA9IHRoaXMuYWNjb3VudFNlcnZpY2UuY3ljbGlzdFN0YXRlKClcbiAgICB9KVxuICAgIGFkZEljb25zKHtcbiAgICAgIGNsb3VkRG93bmxvYWRPdXRsaW5lOiBjbG91ZERvd25sb2FkT3V0bGluZSxcbiAgICB9KVxuICAgIC8vIFN1YnNjcmliZSB0byB1cGRhdGUgZXZlbnRzXG4gICAgdGhpcy51cGRhdGVTdWJzY3JpcHRpb24gPSB0aGlzLmxpdmVVcGRhdGVTZXJ2aWNlLnVwZGF0ZXMkLnN1YnNjcmliZShcbiAgICAgIChldmVudCkgPT4ge1xuICAgICAgICBzd2l0Y2ggKGV2ZW50KSB7XG4gICAgICAgICAgY2FzZSAnZG93bmxvYWRfc3RhcnRlZCc6XG4gICAgICAgICAgICB0aGlzLmxpdmVVcGRhdGVTdGF0ZSA9ICdkb3dubG9hZF9zdGFydGVkJ1xuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICBjYXNlICdkb3dubG9hZF9jb21wbGV0ZWQnOlxuICAgICAgICAgICAgdGhpcy5saXZlVXBkYXRlU3RhdGUgPSAnZG93bmxvYWRfY29tcGxldGVkJ1xuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgICAgY2FzZSAnYnVuZGxlX25vdF9mb3VuZCc6XG4gICAgICAgICAgICB0aGlzLmxpdmVVcGRhdGVTdGF0ZSA9ICdidW5kbGVfbm90X2ZvdW5kJ1xuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnVwZGF0ZVN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy51cGRhdGVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYXBwID0gYXdhaXQgdGhpcy5hcHBzdGF0ZVNlcnZpY2UuZ2V0U2F2ZWRBcHBTdGF0ZSgpXG5cbiAgICBpZiAoQ2FwYWNpdG9yLmdldFBsYXRmb3JtKCkgPT09ICdpb3MnKSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEFwcFRyYWNraW5nVHJhbnNwYXJlbmN5LmdldFN0YXR1cygpXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAnbm90RGV0ZXJtaW5lZCcpIHtcbiAgICAgICAgY29uc3QgYXBwVHJhY2tpbmdSZXNwb25zZSA9XG4gICAgICAgICAgYXdhaXQgQXBwVHJhY2tpbmdUcmFuc3BhcmVuY3kucmVxdWVzdFBlcm1pc3Npb24oKVxuICAgICAgICBpZiAoYXBwVHJhY2tpbmdSZXNwb25zZS5zdGF0dXMgPT09ICdhdXRob3JpemVkJykge1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIGFmdGVyIDUgc2Vjb25kcyBmb3IgdGhlIHJlc3Qgb2YgdGhlIGRhdGFcbiAgICBjb25zdCB0aW1lb3V0UHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDUwMDApKVxuXG4gICAgLy8gUmFjZSBiZXR3ZWVuIGxvYWREYXRhIGFuZCB0aW1lb3V0XG4gICAgYXdhaXQgUHJvbWlzZS5yYWNlKFt0aGlzLmxvYWREYXRhKCksIHRpbWVvdXRQcm9taXNlXSlcblxuICAgIC8vIE9uIGluZGlxdWUgYXUgcGx1Z2luIGxpdmVVcGRhdGUgcXUnb24gZXN0IHJlYWR5IHBvdXIgZXZpdGVyIGxlIHJvbGxiYWNrXG4gICAgLy8gU2kgb24gYXR0ZWluZHMgcGFzIGNldCBlbXBsYWNlbWVudCBsZSBwbHVnaW4gcm9sbGJhY2tlcmEgZGFucyBsYSB2ZXJzaW9uIGRlIGJ1bmRsZSBwcsOpY8OpZGVudGVcbiAgICBpZiAoQ2FwYWNpdG9yLmlzTmF0aXZlUGxhdGZvcm0oKSkge1xuICAgICAgLy8gVsOpcmlmaWNhdGlvbiBkdSBsaXZlVXBkYXRlXG4gICAgICBhd2FpdCB0aGlzLmNoZWNrRm9yTGl2ZVVwZGF0ZSgpXG4gICAgICBhd2FpdCB0aGlzLmxpdmVVcGRhdGVTZXJ2aWNlLnJlYWR5KClcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuYXBwKSB7XG4gICAgICB0aGlzLmFwcHN0YXRlU2VydmljZS5zZXRBcHBTdGF0ZSh7IHN0YXRlOiAnb25ib2FyZGluZycgfSlcbiAgICAgIGF3YWl0IHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2xhbmRpbmcnXSwgeyByZXBsYWNlVXJsOiB0cnVlIH0pXG4gICAgfVxuICAgIHN3aXRjaCAodGhpcy5hdXRoLnN0YXRlKSB7XG4gICAgICBjYXNlICdTaWduZWRJbic6XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGlzLmN5Y2xpc3Quc3RhdGUgPT09ICd1bmtub3duJyB8fFxuICAgICAgICAgIHRoaXMuY3ljbGlzdC5zdGF0ZSA9PT0gJ2Vycm9yJ1xuICAgICAgICApIHtcbiAgICAgICAgICBhd2FpdCB0aGlzLndhaXRGb3JDeWNsaXN0U3RhdGUoKVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmFwcC5zdGF0ZSA9PT0gJ29uYm9hcmRpbmcnKSB7XG4gICAgICAgICAgdGhpcy5yZWRpcmVjdE9uYm9hcmRpbmcoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucmVkaXJlY3QoKVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdTaWduZWRPdXQnOlxuICAgICAgICBhd2FpdCB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sYW5kaW5nJ10sIHsgcmVwbGFjZVVybDogdHJ1ZSB9KVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYXdhaXQgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbWFwJ10sIHsgcmVwbGFjZVVybDogdHJ1ZSB9KVxuICAgICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGxvYWREYXRhKCkge1xuICAgIHRyeSB7XG4gICAgICAvLyBVc2UgTGF1bmNoU2VydmljZSB0byBsb2FkIGFsbCBlc3NlbnRpYWwgZGF0YVxuICAgICAgYXdhaXQgdGhpcy5sYXVuY2hTZXJ2aWNlLmxvYWRFc3NlbnRpYWxEYXRhKHtcbiAgICAgICAgc2tpcElmRGF0YUV4aXN0czogZmFsc2UsIC8vIEFsd2F5cyBsb2FkIG9uIGxhdW5jaCBwYWdlXG4gICAgICAgIGZvcmNlUmVmcmVzaFN0YXRpb25zOiB0cnVlLFxuICAgICAgfSlcblxuICAgICAgLy8gR2V0IHRoZSBwcm9ncmFtIGZvciB0aGUgdGVtcGxhdGVcbiAgICAgIHRoaXMucHJvZ3JhbSA9IGF3YWl0IHRoaXMuc3RvcmFnZVNlcnZpY2UuZ2V0KCdwcm9ncmFtJylcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gbG9hZERhdGE6JywgZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgY2hlY2tGb3JMaXZlVXBkYXRlKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPihhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAvLyBBYm9ubmVtZW50IGF1eCDDqXbDqW5lbWVudHMgZGUgbWlzZSDDoCBqb3VyXG4gICAgICBjb25zdCBzdWJzY3JpcHRpb24gPSB0aGlzLmxpdmVVcGRhdGVTZXJ2aWNlLnVwZGF0ZXMkLnN1YnNjcmliZShcbiAgICAgICAgYXN5bmMgKGV2ZW50OiBMaXZlVXBkYXRlRXZlbnQpID0+IHtcbiAgICAgICAgICBzd2l0Y2ggKGV2ZW50KSB7XG4gICAgICAgICAgICBjYXNlICdjaGVja19zdGFydGVkJzpcbiAgICAgICAgICAgICAgdGhpcy5sb2FkZXJTdGF0ZVRleHQgPSAnbGF1bmNoLnVwZGF0ZV9jaGVja2luZydcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ2J1bmRsZV9mb3VuZCc6XG4gICAgICAgICAgICAgIHRoaXMubG9hZGVyU3RhdGVUZXh0ID0gJ2xhdW5jaC51cGRhdGVfYXZhaWxhYmxlJ1xuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAnYnVuZGxlX25vdF9mb3VuZCc6XG4gICAgICAgICAgICAgIHRoaXMubG9hZGVyU3RhdGVUZXh0ID0gJ2xhdW5jaC5ub191cGRhdGUnXG4gICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpXG4gICAgICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAnZG93bmxvYWRfc3RhcnRlZCc6XG4gICAgICAgICAgICAgIHRoaXMubG9hZGVyU3RhdGVUZXh0ID0gJ2xhdW5jaC51cGRhdGVfZG93bmxvYWRpbmcnXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICdkb3dubG9hZF9jb21wbGV0ZWQnOlxuICAgICAgICAgICAgICB0aGlzLmxvYWRlclN0YXRlVGV4dCA9ICdsYXVuY2gudXBkYXRlX2Rvd25sb2FkZWQnXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICdyZWxvYWRfc3RhcnRlZCc6XG4gICAgICAgICAgICAgIHRoaXMubG9hZGVyU3RhdGVUZXh0ID0gJ2xhdW5jaC51cGRhdGVfYXBwX3JlbG9hZGluZydcbiAgICAgICAgICAgICAgLy8gcmVzb2x2ZSgpIGF1IGNhcyBvdSBtYWlzIGwnYXBwbGljYXRpb24gZGV2cmFpdCByZWRlbWFyZXJcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgICAgICAgIHRoaXMubG9hZGVyU3RhdGVUZXh0ID0gJ2xhdW5jaC5lcnJvcidcbiAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKClcbiAgICAgICAgICAgICAgcmVqZWN0KCdsaXZlVXBkYXRlRXJyb3InKVxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKVxuXG4gICAgICAvLyBEw6ljbGVuY2hlbWVudCBkZSBsYSB2w6lyaWZpY2F0aW9uIGRlcyBtaXNlcyDDoCBqb3VyXG4gICAgICB0aGlzLmxpdmVVcGRhdGVTZXJ2aWNlLmNoZWNrRm9yVXBkYXRlKClcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgcmVkaXJlY3RPbmJvYXJkaW5nKCkge1xuICAgIGlmICh0aGlzLmN5Y2xpc3Quc3RhdGUgPT09ICd1bmNvbmZpcm1lZCcpIHtcbiAgICAgIGlmICh0aGlzLmFjY291bnRTZXJ2aWNlLmhhc01pc3NpbmdQYXltZW50TWV0aG9kT3JDZ3UoKSkge1xuICAgICAgICBhd2FpdCB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9wYXltZW50LW1ldGhvZCddLCB7XG4gICAgICAgICAgcmVwbGFjZVVybDogdHJ1ZSxcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIHRoaXMua3ljU2VydmljZS5reWNDb21wbGV0aW9uU3RhdGUoKSA9PT0gJ21pc3NpbmcnIHx8XG4gICAgICAgIHRoaXMua3ljU2VydmljZS5reWNDb21wbGV0aW9uU3RhdGUoKSA9PT0gJ3JlamVjdGVkJ1xuICAgICAgKSB7XG4gICAgICAgIGF3YWl0IHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2t5YyddLCB7XG4gICAgICAgICAgcmVwbGFjZVVybDogdHJ1ZSxcbiAgICAgICAgICBxdWVyeVBhcmFtczoge1xuICAgICAgICAgICAgb25ib2FyZGluZzogJ3RydWUnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhd2FpdCB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9tYXAnXSwge1xuICAgICAgICAgIHJlcGxhY2VVcmw6IHRydWUsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGF3YWl0IHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL21hcCddLCB7XG4gICAgICAgIHJlcGxhY2VVcmw6IHRydWUsXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHJlZGlyZWN0KCkge1xuICAgIGlmIChcbiAgICAgIHRoaXMua3ljU2VydmljZS5reWNDb21wbGV0aW9uU3RhdGUoKSA9PT0gJ21pc3NpbmcnIHx8XG4gICAgICB0aGlzLmt5Y1NlcnZpY2Uua3ljQ29tcGxldGlvblN0YXRlKCkgPT09ICdyZWplY3RlZCdcbiAgICApIHtcbiAgICAgIGF3YWl0IHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2t5YyddLCB7IHJlcGxhY2VVcmw6IHRydWUgfSlcbiAgICB9IGVsc2UgaWYgKHRoaXMubmV4dFVybCAmJiB0aGlzLm5leHRVcmwgIT09ICcvJykge1xuICAgICAgYXdhaXQgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMubmV4dFVybF0sIHsgcmVwbGFjZVVybDogdHJ1ZSB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBhd2FpdCB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9tYXAnXSwgeyByZXBsYWNlVXJsOiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgd2FpdEZvckN5Y2xpc3RTdGF0ZSgpIHtcbiAgICBjb25zdCBtYXhSZXRyaWVzID0gMTAwMFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF4UmV0cmllczsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5jeWNsaXN0LnN0YXRlICE9PSAndW5rbm93bicgJiYgdGhpcy5jeWNsaXN0LnN0YXRlICE9PSAnZXJyb3InKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgNSkpXG4gICAgfVxuICAgIGNvbnNvbGUud2FybignQ3ljbGlzdCBzdGF0ZSBkaWQgbm90IGNoYW5nZSB3aXRoaW4gdGhlIGFsbG93ZWQgdGltZScpXG4gIH1cbn1cbiIsIjxpb24tY29udGVudCBbZnVsbHNjcmVlbl09XCJ0cnVlXCI+XG4gIDxkaXYgY2xhc3M9XCJlY2wtbGF1bmNoX19jb250YWluZXIgbG9nb1wiPlxuICAgIDxpb24taW1nXG4gICAgICAqbmdJZj1cInByb2dyYW1cIlxuICAgICAgY2xhc3M9XCJmYWRlLWluXCJcbiAgICAgIFtzcmNdPVwicHJvZ3JhbT8uY29uZmlnPy5sb2dvXCJcbiAgICAgIGFsdD1cImxvZ29cIlxuICAgID48L2lvbi1pbWc+XG4gIDwvZGl2PlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwibGl2ZVVwZGF0ZVN0YXRlID09PSAnZG93bmxvYWRfc3RhcnRlZCdcIj5cbiAgICA8aW9uLXJvd1xuICAgICAgY2xhc3M9XCJpb24tbWFyZ2luLXRvcCBpb24tbWFyZ2luLWhvcml6b250YWwgaW9uLWp1c3RpZnktY29udGVudC1jZW50ZXJcIlxuICAgID5cbiAgICAgIDxpb24tY29sIHNpemU9XCIxMlwiIHNpemUtbWQ9XCI2XCIgc2l6ZS1sZz1cIjRcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJpb24tdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICB7eyAnbGF1bmNoLnNlYXJjaGluZ19mb3JfdXBkYXRlcycgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgPC9wPlxuICAgICAgPC9pb24tY29sPlxuICAgIDwvaW9uLXJvdz5cbiAgICA8aW9uLXJvd1xuICAgICAgY2xhc3M9XCJpb24tbWFyZ2luLWhvcml6b250YWwgaW9uLW1hcmdpbi1ib3R0b20gaW9uLWp1c3RpZnktY29udGVudC1jZW50ZXJcIlxuICAgID5cbiAgICAgIDxpb24tY29sIHNpemU9XCIxMlwiIHNpemUtbWQ9XCI2XCIgc2l6ZS1sZz1cIjRcIj5cbiAgICAgICAgPGlvbi1wcm9ncmVzcy1iYXIgdHlwZT1cImluZGV0ZXJtaW5hdGVcIj48L2lvbi1wcm9ncmVzcy1iYXI+XG4gICAgICA8L2lvbi1jb2w+XG4gICAgPC9pb24tcm93PlxuICA8L25nLWNvbnRhaW5lcj5cbjwvaW9uLWNvbnRlbnQ+XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBTSwwQkFBMEIsZUFBZSwyQkFBMkI7QUFBQSxFQUN4RSxLQUFLLE1BQU0sT0FBTyxtQkFBTyxFQUFFLEtBQUssT0FBSyxJQUFJLEVBQUUsMkJBQTJCLENBQUM7QUFDekUsQ0FBQzs7O0FDRkQsSUFBTSxhQUFhLGVBQWUsY0FBYztBQUFBLEVBQzlDLEtBQUssTUFBTSxPQUFPLG1CQUFPLEVBQUUsS0FBSyxPQUFLLElBQUksRUFBRSxjQUFjLENBQUM7QUFDNUQsQ0FBQzs7O0FDY0ssSUFBTyxxQkFBUCxNQUFPLG1CQUFpQjtFQUM1QixjQUFBO0FBR1EsU0FBQSxnQkFBZ0IsSUFBSSxRQUFPO0FBRzVCLFNBQUEsV0FDTCxLQUFLLGNBQWMsYUFBWTtFQVBsQjs7RUFVVCxpQkFBYzs7QUE1QnRCO0FBNkJJLFVBQUk7QUFDRixhQUFLLGNBQWMsS0FBSyxlQUFlO0FBR3ZDLGNBQU0sU0FBUyxNQUFNLFdBQVcsa0JBQWlCO0FBQ2pELFlBQ0UsVUFDQSxPQUFPLGNBQ1AsWUFBTyxxQkFBUCxtQkFBMEIsaUJBQzFCLFlBQVksY0FBWSxZQUFPLHFCQUFQLG1CQUEwQixlQUNsRDtBQUNBLGdCQUFNLGlCQUFpQixNQUFNLFdBQVcsV0FBVTtBQUNsRCxnQkFBTSxnQkFBZ0IsTUFBTSxXQUFXLGlCQUFnQjtBQUV2RCxjQUNFLGVBQWUsVUFBVSxTQUFTLE9BQU8sUUFBUSxLQUNqRCxjQUFjLGFBQWEsT0FBTyxVQUNsQztBQUNBLGlCQUFLLGNBQWMsS0FBSyxrQkFBa0I7QUFDMUM7VUFDRixPQUFPO0FBQ0wsaUJBQUssY0FBYyxLQUFLLGNBQWM7VUFDeEM7QUFHQSxlQUFLLGNBQWMsS0FBSyxrQkFBa0I7QUFFMUMsZ0JBQU0sYUFBYSxNQUFNLFdBQVcsS0FBSTtBQUN4QyxjQUFJLFdBQVcsY0FBYztBQUMzQixpQkFBSyxjQUFjLEtBQUssb0JBQW9CO0FBRzVDLGtCQUFNLElBQUksUUFBUSxDQUFDLFlBQVksV0FBVyxTQUFTLEdBQUcsQ0FBQztBQUN2RCxpQkFBSyxjQUFjLEtBQUssZ0JBQWdCO0FBQ3hDLGtCQUFNLFdBQVcsT0FBTTtVQUN6QixPQUFPO0FBQ0wsaUJBQUssY0FBYyxLQUFLLGtCQUFrQjtVQUM1QztRQUNGLE9BQU87QUFDTCxlQUFLLGNBQWMsS0FBSyxrQkFBa0I7UUFDNUM7TUFDRixTQUFTLE9BQU87QUFDZCxnQkFBUSxNQUFNLGlEQUE4QyxLQUFLO0FBQ2pFLGFBQUssY0FBYyxLQUFLLE9BQU87TUFDakM7SUFDRjs7O0VBR00sUUFBSzs7QUFDVCxZQUFNLFdBQVcsTUFBSztJQUN4Qjs7OzttQ0E5RFcsb0JBQWlCO0FBQUE7c0ZBQWpCLG9CQUFpQixTQUFqQixtQkFBaUIsV0FBQSxZQUZoQixPQUFNLENBQUE7QUFFZCxJQUFPLG9CQUFQOztzRUFBTyxtQkFBaUIsQ0FBQTtVQUg3QjtXQUFXO01BQ1YsWUFBWTtLQUNiOzs7Ozs7O0FFZEcsSUFBQSxvQkFBQSxHQUFBLFdBQUEsQ0FBQTs7OztBQUdFLElBQUEscUJBQUEsT0FBQSxPQUFBLFdBQUEsT0FBQSxPQUFBLE9BQUEsUUFBQSxVQUFBLE9BQUEsT0FBQSxPQUFBLFFBQUEsT0FBQSxJQUFBOzs7OztBQUlKLElBQUEsa0NBQUEsQ0FBQTtBQUNFLElBQUEseUJBQUEsR0FBQSxXQUFBLENBQUEsRUFFQyxHQUFBLFdBQUEsQ0FBQSxFQUM0QyxHQUFBLEtBQUEsQ0FBQTtBQUV2QyxJQUFBLGlCQUFBLENBQUE7O0FBQ0YsSUFBQSx1QkFBQSxFQUFJLEVBQ0k7QUFFWixJQUFBLHlCQUFBLEdBQUEsV0FBQSxDQUFBLEVBRUMsR0FBQSxXQUFBLENBQUE7QUFFRyxJQUFBLG9CQUFBLEdBQUEsb0JBQUEsQ0FBQTtBQUNGLElBQUEsdUJBQUEsRUFBVTs7OztBQVROLElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEsNkJBQUEsS0FBQSxzQkFBQSxHQUFBLEdBQUEsOEJBQUEsR0FBQSxHQUFBOzs7QURpQ0osSUFBTyxjQUFQLE1BQU8sWUFBVTtFQWNyQixZQUNVLGdCQUNBLGdCQUNBLFFBQ0EsYUFDQSxtQkFDQSxpQkFDQSxPQUNBLGVBQ0EsWUFBNkI7QUFSN0IsU0FBQSxpQkFBQTtBQUNBLFNBQUEsaUJBQUE7QUFDQSxTQUFBLFNBQUE7QUFDQSxTQUFBLGNBQUE7QUFDQSxTQUFBLG9CQUFBO0FBQ0EsU0FBQSxrQkFBQTtBQUNBLFNBQUEsUUFBQTtBQUNBLFNBQUEsZ0JBQUE7QUFDQSxTQUFBLGFBQUE7QUFyQkYsU0FBQSxPQUFrQixFQUFFLE9BQU8sWUFBVztBQUN0QyxTQUFBLFVBQXdCO01BQzlCLE9BQU87TUFDUCxpQkFBaUIsQ0FBQyx1QkFBdUI7O0FBR3BDLFNBQUEsZUFBd0I7QUFDeEIsU0FBQSxrQkFBa0I7QUFDakIsU0FBQSxVQUF5QjtBQUMxQixTQUFBLGtCQUEwQjtBQWMvQixTQUFLLE1BQU0sWUFBWSxVQUFVLENBQUMsV0FBVTtBQUMxQyxVQUFJLE9BQU8sTUFBTSxHQUFHO0FBQ2xCLGFBQUssVUFBVSxPQUFPLE1BQU07TUFDOUI7SUFDRixDQUFDO0FBQ0QsV0FBTyxNQUFLO0FBQ1YsV0FBSyxPQUFPLEtBQUssWUFBWSxVQUFTO0lBQ3hDLENBQUM7QUFDRCxXQUFPLE1BQUs7QUFDVixXQUFLLFVBQVUsS0FBSyxlQUFlLGFBQVk7SUFDakQsQ0FBQztBQUNELGFBQVM7TUFDUDtLQUNEO0FBRUQsU0FBSyxxQkFBcUIsS0FBSyxrQkFBa0IsU0FBUyxVQUN4RCxDQUFDLFVBQVM7QUFDUixjQUFRLE9BQU87UUFDYixLQUFLO0FBQ0gsZUFBSyxrQkFBa0I7QUFDdkI7UUFDRixLQUFLO0FBQ0gsZUFBSyxrQkFBa0I7QUFDdkI7UUFDRixLQUFLO1FBQ0wsS0FBSztBQUNILGVBQUssa0JBQWtCO0FBQ3ZCO01BQ0o7SUFDRixDQUFDO0VBRUw7RUFFQSxjQUFXO0FBQ1QsUUFBSSxLQUFLLG9CQUFvQjtBQUMzQixXQUFLLG1CQUFtQixZQUFXO0lBQ3JDO0VBQ0Y7RUFFTSxXQUFROztBQUNaLFdBQUssTUFBTSxNQUFNLEtBQUssZ0JBQWdCLGlCQUFnQjtBQUV0RCxVQUFJLFVBQVUsWUFBVyxNQUFPLE9BQU87QUFDckMsY0FBTSxXQUFXLE1BQU0sd0JBQXdCLFVBQVM7QUFDeEQsWUFBSSxTQUFTLFdBQVcsaUJBQWlCO0FBQ3ZDLGdCQUFNLHNCQUNKLE1BQU0sd0JBQXdCLGtCQUFpQjtBQUNqRCxjQUFJLG9CQUFvQixXQUFXLGNBQWM7VUFDakQsT0FBTztVQUNQO1FBQ0Y7TUFDRjtBQUdBLFlBQU0saUJBQWlCLElBQUksUUFBUSxDQUFDLFlBQVksV0FBVyxTQUFTLEdBQUksQ0FBQztBQUd6RSxZQUFNLFFBQVEsS0FBSyxDQUFDLEtBQUssU0FBUSxHQUFJLGNBQWMsQ0FBQztBQUlwRCxVQUFJLFVBQVUsaUJBQWdCLEdBQUk7QUFFaEMsY0FBTSxLQUFLLG1CQUFrQjtBQUM3QixjQUFNLEtBQUssa0JBQWtCLE1BQUs7TUFDcEM7QUFFQSxVQUFJLENBQUMsS0FBSyxLQUFLO0FBQ2IsYUFBSyxnQkFBZ0IsWUFBWSxFQUFFLE9BQU8sYUFBWSxDQUFFO0FBQ3hELGNBQU0sS0FBSyxPQUFPLFNBQVMsQ0FBQyxVQUFVLEdBQUcsRUFBRSxZQUFZLEtBQUksQ0FBRTtNQUMvRDtBQUNBLGNBQVEsS0FBSyxLQUFLLE9BQU87UUFDdkIsS0FBSztBQUNILGNBQ0UsS0FBSyxRQUFRLFVBQVUsYUFDdkIsS0FBSyxRQUFRLFVBQVUsU0FDdkI7QUFDQSxrQkFBTSxLQUFLLG9CQUFtQjtVQUNoQztBQUNBLGNBQUksS0FBSyxJQUFJLFVBQVUsY0FBYztBQUNuQyxpQkFBSyxtQkFBa0I7VUFDekIsT0FBTztBQUNMLGlCQUFLLFNBQVE7VUFDZjtBQUNBO1FBQ0YsS0FBSztBQUNILGdCQUFNLEtBQUssT0FBTyxTQUFTLENBQUMsVUFBVSxHQUFHLEVBQUUsWUFBWSxLQUFJLENBQUU7QUFDN0Q7UUFDRjtBQUNFLGdCQUFNLEtBQUssT0FBTyxTQUFTLENBQUMsTUFBTSxHQUFHLEVBQUUsWUFBWSxLQUFJLENBQUU7QUFDekQ7TUFDSjtJQUNGOztFQUVNLFdBQVE7O0FBQ1osVUFBSTtBQUVGLGNBQU0sS0FBSyxjQUFjLGtCQUFrQjtVQUN6QyxrQkFBa0I7O1VBQ2xCLHNCQUFzQjtTQUN2QjtBQUdELGFBQUssVUFBVSxNQUFNLEtBQUssZUFBZSxJQUFJLFNBQVM7TUFDeEQsU0FBUyxPQUFPO0FBQ2QsZ0JBQVEsTUFBTSxzQkFBc0IsS0FBSztNQUMzQztJQUNGOztFQUVBLHFCQUFrQjtBQUNoQixXQUFPLElBQUksUUFBYyxDQUFPLFNBQVMsV0FBVTtBQUVqRCxZQUFNLGVBQWUsS0FBSyxrQkFBa0IsU0FBUyxVQUNuRCxDQUFPLFVBQTBCO0FBQy9CLGdCQUFRLE9BQU87VUFDYixLQUFLO0FBQ0gsaUJBQUssa0JBQWtCO0FBQ3ZCO1VBQ0YsS0FBSztBQUNILGlCQUFLLGtCQUFrQjtBQUN2QjtVQUNGLEtBQUs7QUFDSCxpQkFBSyxrQkFBa0I7QUFDdkIseUJBQWEsWUFBVztBQUN4QixvQkFBTztBQUNQO1VBQ0YsS0FBSztBQUNILGlCQUFLLGtCQUFrQjtBQUN2QjtVQUNGLEtBQUs7QUFDSCxpQkFBSyxrQkFBa0I7QUFDdkI7VUFDRixLQUFLO0FBQ0gsaUJBQUssa0JBQWtCO0FBRXZCLG9CQUFPO0FBQ1A7VUFDRixLQUFLO0FBQ0gsaUJBQUssa0JBQWtCO0FBQ3ZCLHlCQUFhLFlBQVc7QUFDeEIsbUJBQU8saUJBQWlCO0FBQ3hCO1FBQ0o7TUFDRixFQUFDO0FBSUgsV0FBSyxrQkFBa0IsZUFBYztJQUN2QyxFQUFDO0VBQ0g7RUFFTSxxQkFBa0I7O0FBQ3RCLFVBQUksS0FBSyxRQUFRLFVBQVUsZUFBZTtBQUN4QyxZQUFJLEtBQUssZUFBZSw2QkFBNEIsR0FBSTtBQUN0RCxnQkFBTSxLQUFLLE9BQU8sU0FBUyxDQUFDLGlCQUFpQixHQUFHO1lBQzlDLFlBQVk7V0FDYjtRQUNILFdBQ0UsS0FBSyxXQUFXLG1CQUFrQixNQUFPLGFBQ3pDLEtBQUssV0FBVyxtQkFBa0IsTUFBTyxZQUN6QztBQUNBLGdCQUFNLEtBQUssT0FBTyxTQUFTLENBQUMsTUFBTSxHQUFHO1lBQ25DLFlBQVk7WUFDWixhQUFhO2NBQ1gsWUFBWTs7V0FFZjtRQUNILE9BQU87QUFDTCxnQkFBTSxLQUFLLE9BQU8sU0FBUyxDQUFDLE1BQU0sR0FBRztZQUNuQyxZQUFZO1dBQ2I7UUFDSDtNQUNGLE9BQU87QUFDTCxjQUFNLEtBQUssT0FBTyxTQUFTLENBQUMsTUFBTSxHQUFHO1VBQ25DLFlBQVk7U0FDYjtNQUNIO0lBQ0Y7O0VBRU0sV0FBUTs7QUFDWixVQUNFLEtBQUssV0FBVyxtQkFBa0IsTUFBTyxhQUN6QyxLQUFLLFdBQVcsbUJBQWtCLE1BQU8sWUFDekM7QUFDQSxjQUFNLEtBQUssT0FBTyxTQUFTLENBQUMsTUFBTSxHQUFHLEVBQUUsWUFBWSxLQUFJLENBQUU7TUFDM0QsV0FBVyxLQUFLLFdBQVcsS0FBSyxZQUFZLEtBQUs7QUFDL0MsY0FBTSxLQUFLLE9BQU8sU0FBUyxDQUFDLEtBQUssT0FBTyxHQUFHLEVBQUUsWUFBWSxLQUFJLENBQUU7TUFDakUsT0FBTztBQUNMLGNBQU0sS0FBSyxPQUFPLFNBQVMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxZQUFZLEtBQUksQ0FBRTtNQUMzRDtJQUNGOztFQUVNLHNCQUFtQjs7QUFDdkIsWUFBTSxhQUFhO0FBQ25CLGVBQVMsSUFBSSxHQUFHLElBQUksWUFBWSxLQUFLO0FBQ25DLFlBQUksS0FBSyxRQUFRLFVBQVUsYUFBYSxLQUFLLFFBQVEsVUFBVSxTQUFTO0FBQ3RFO1FBQ0Y7QUFDQSxjQUFNLElBQUksUUFBUSxDQUFDLFlBQVksV0FBVyxTQUFTLENBQUMsQ0FBQztNQUN2RDtBQUNBLGNBQVEsS0FBSyxzREFBc0Q7SUFDckU7Ozs7bUNBbE9XLGFBQVUsNEJBQUEsY0FBQSxHQUFBLDRCQUFBLGNBQUEsR0FBQSw0QkFBQSxNQUFBLEdBQUEsNEJBQUEsV0FBQSxHQUFBLDRCQUFBLGlCQUFBLEdBQUEsNEJBQUEsZUFBQSxHQUFBLDRCQUFBLGNBQUEsR0FBQSw0QkFBQSxhQUFBLEdBQUEsNEJBQUEsaUJBQUEsQ0FBQTtBQUFBOzRFQUFWLGFBQVUsV0FBQSxDQUFBLENBQUEsWUFBQSxDQUFBLEdBQUEsVUFBQSxDQUFBLDZCQVhWLENBQUMsU0FBUyxjQUFjLENBQUMsQ0FBQSxHQUFBLE9BQUEsR0FBQSxNQUFBLEdBQUEsUUFBQSxDQUFBLENBQUEsR0FBQSxZQUFBLEdBQUEsQ0FBQSxHQUFBLHlCQUFBLE1BQUEsR0FBQSxDQUFBLFNBQUEsV0FBQSxPQUFBLFFBQUEsR0FBQSxPQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxPQUFBLFFBQUEsR0FBQSxXQUFBLEdBQUEsS0FBQSxHQUFBLENBQUEsR0FBQSxrQkFBQSx5QkFBQSw0QkFBQSxHQUFBLENBQUEsUUFBQSxNQUFBLFdBQUEsS0FBQSxXQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsaUJBQUEsR0FBQSxDQUFBLEdBQUEseUJBQUEscUJBQUEsNEJBQUEsR0FBQSxDQUFBLFFBQUEsZUFBQSxDQUFBLEdBQUEsVUFBQSxTQUFBLG9CQUFBLElBQUEsS0FBQTtBQUFBLE1BQUEsS0FBQSxHQUFBO0FDckN0QyxJQUFBLHlCQUFBLEdBQUEsZUFBQSxDQUFBLEVBQWlDLEdBQUEsT0FBQSxDQUFBO0FBRTdCLElBQUEscUJBQUEsR0FBQSwrQkFBQSxHQUFBLEdBQUEsV0FBQSxDQUFBO0FBTUYsSUFBQSx1QkFBQTtBQUNBLElBQUEscUJBQUEsR0FBQSxvQ0FBQSxHQUFBLEdBQUEsZ0JBQUEsQ0FBQTtBQWtCRixJQUFBLHVCQUFBOzs7QUEzQmEsSUFBQSxxQkFBQSxjQUFBLElBQUE7QUFHTixJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLHFCQUFBLFFBQUEsSUFBQSxPQUFBO0FBTVUsSUFBQSxvQkFBQTtBQUFBLElBQUEscUJBQUEsUUFBQSxJQUFBLG9CQUFBLGtCQUFBOzs7RUQ4QmI7RUFDQTtFQUFZO0VBQ1o7RUFDQTtFQUNBO0VBQWU7RUFDZjtFQUNBO0FBQU0sR0FBQSxRQUFBLENBQUEsMmdCQUFBLEVBQUEsQ0FBQTtBQUdKLElBQU8sYUFBUDs7c0VBQU8sWUFBVSxDQUFBO1VBZnRCO3VCQUNXLGNBQVksV0FHWCxDQUFDLFNBQVMsY0FBYyxHQUFDLFNBQzNCO01BQ1A7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7T0FDRCxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBQUEsUUFBQSxDQUFBLG1jQUFBLEVBQUEsQ0FBQTs7Ozs2RUFFVSxZQUFVLEVBQUEsV0FBQSxjQUFBLFVBQUEsdUNBQUEsWUFBQSxHQUFBLENBQUE7QUFBQSxHQUFBOyIsIm5hbWVzIjpbXSwieF9nb29nbGVfaWdub3JlTGlzdCI6WzAsMV19
