import {
  bootstrapLazy,
  promiseResolve
} from "./chunk-OSUYHBZK.js";
import {
  provideLottieOptions
} from "./chunk-CWHK67UA.js";
import {
  Stripe,
  provideNgxStripe
} from "./chunk-LZDBSS56.js";
import "./chunk-XJX5O2E5.js";
import {
  CookiesService
} from "./chunk-I5QBK6PI.js";
import {
  InlineSVGModule
} from "./chunk-EPUPXOBT.js";
import {
  LanguageService
} from "./chunk-K2AWDLYV.js";
import "./chunk-EYZBHAOK.js";
import {
  PersonnalisationService
} from "./chunk-CCA64IRZ.js";
import {
  NewsStateService
} from "./chunk-PXVTGX2T.js";
import "./chunk-7JCEDXGT.js";
import {
  App
} from "./chunk-RFEPADPA.js";
import "./chunk-Y4K6NO5T.js";
import {
  AuthService,
  TraceService,
  browserTracingIntegration,
  createErrorHandler,
  feedbackSyncIntegration,
  init,
  replayIntegration
} from "./chunk-WJQU3GMM.js";
import {
  KYCWrapperService
} from "./chunk-CHFOG66O.js";
import "./chunk-RAVV2QIY.js";
import {
  AppstateService
} from "./chunk-T6WE2PS5.js";
import "./chunk-XK4I5MHM.js";
import "./chunk-GVYZRG6X.js";
import {
  environment
} from "./chunk-FOJAXRYS.js";
import {
  Amplify,
  CognitoAWSCredentialsAndIdentityIdProvider,
  CookieStorage,
  DefaultIdentityIdStore,
  cognitoUserPoolsTokenProvider,
  defaultStorage,
  fetchAuthSession,
  fetchUserAttributes,
  parseAmplifyConfig
} from "./chunk-Y7HI6USV.js";
import {
  ErrorHandlerService
} from "./chunk-SARQRLZR.js";
import "./chunk-3E6DEK7U.js";
import {
  IonicStorageModule
} from "./chunk-U6SJAXLK.js";
import {
  APP_INITIALIZER,
  AlertController,
  CommonModule,
  Component,
  ErrorHandler,
  HostListener,
  HttpClient,
  Injectable,
  IonApp,
  IonButton,
  IonCheckbox,
  IonCol,
  IonFooter,
  IonGrid,
  IonItem,
  IonRouterOutlet2 as IonRouterOutlet,
  IonRow,
  IonicRouteStrategy,
  ModalController,
  NavigationEnd,
  NgIf,
  NgZone,
  PreloadAllModules,
  RouteReuseStrategy,
  Router,
  TranslateLoader,
  TranslateModule,
  TranslatePipe,
  bootstrapApplication,
  catchError,
  effect,
  filter,
  from,
  importProvidersFrom,
  map,
  of,
  provideHttpClient,
  provideIonicAngular,
  provideRouter,
  setClassMetadata,
  signal,
  switchMap,
  withInterceptors,
  withPreloading,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵresolveWindow,
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
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-UESUV5PM.js";

// node_modules/@ngx-translate/http-loader/dist/fesm2022/ngx-translate-http-loader.mjs
var TranslateHttpLoader = class {
  http;
  prefix;
  suffix;
  constructor(http, prefix = "/assets/i18n/", suffix = ".json") {
    this.http = http;
    this.prefix = prefix;
    this.suffix = suffix;
  }
  /**
   * Gets the translations from the server
   */
  getTranslation(lang) {
    return this.http.get(`${this.prefix}${lang}${this.suffix}`);
  }
};

// node_modules/@aws-amplify/auth/dist/esm/providers/cognito/credentialsProvider/index.mjs
var cognitoCredentialsProvider = new CognitoAWSCredentialsAndIdentityIdProvider(new DefaultIdentityIdStore(defaultStorage));

// node_modules/aws-amplify/dist/esm/initSingleton.mjs
var DefaultAmplify = {
  /**
   * Configures Amplify with the {@link resourceConfig} and {@link libraryOptions}.
   *
   * @param resourceConfig The {@link ResourcesConfig} object that is typically imported from the
   * `amplifyconfiguration.json` file. It can also be an object literal created inline when calling `Amplify.configure`.
   * @param libraryOptions The {@link LibraryOptions} additional options for the library.
   *
   * @example
   * import config from './amplifyconfiguration.json';
   *
   * Amplify.configure(config);
   */
  configure(resourceConfig, libraryOptions) {
    const resolvedResourceConfig = parseAmplifyConfig(resourceConfig);
    const cookieBasedKeyValueStorage = new CookieStorage({
      sameSite: "lax"
    });
    const resolvedKeyValueStorage = (libraryOptions == null ? void 0 : libraryOptions.ssr) ? cookieBasedKeyValueStorage : defaultStorage;
    const resolvedCredentialsProvider = (libraryOptions == null ? void 0 : libraryOptions.ssr) ? new CognitoAWSCredentialsAndIdentityIdProvider(new DefaultIdentityIdStore(cookieBasedKeyValueStorage)) : cognitoCredentialsProvider;
    if (!resolvedResourceConfig.Auth) {
      Amplify.configure(resolvedResourceConfig, libraryOptions);
      return;
    }
    if (libraryOptions == null ? void 0 : libraryOptions.Auth) {
      Amplify.configure(resolvedResourceConfig, libraryOptions);
      return;
    }
    if (!Amplify.libraryOptions.Auth) {
      cognitoUserPoolsTokenProvider.setAuthConfig(resolvedResourceConfig.Auth);
      cognitoUserPoolsTokenProvider.setKeyValueStorage(
        // TODO: allow configure with a public interface
        resolvedKeyValueStorage
      );
      Amplify.configure(resolvedResourceConfig, __spreadProps(__spreadValues({}, libraryOptions), {
        Auth: {
          tokenProvider: cognitoUserPoolsTokenProvider,
          credentialsProvider: resolvedCredentialsProvider
        }
      }));
      return;
    }
    if (libraryOptions) {
      const authLibraryOptions = Amplify.libraryOptions.Auth;
      if (libraryOptions.ssr !== void 0) {
        cognitoUserPoolsTokenProvider.setKeyValueStorage(
          // TODO: allow configure with a public interface
          resolvedKeyValueStorage
        );
        authLibraryOptions.credentialsProvider = resolvedCredentialsProvider;
      }
      Amplify.configure(resolvedResourceConfig, __spreadValues({
        Auth: authLibraryOptions
      }, libraryOptions));
      return;
    }
    Amplify.configure(resolvedResourceConfig);
  },
  /**
   * Returns the {@link ResourcesConfig} object passed in as the `resourceConfig` parameter when calling
   * `Amplify.configure`.
   *
   * @returns An {@link ResourcesConfig} object.
   */
  getConfig() {
    return Amplify.getConfig();
  }
};

// src/utils/amplify.config.ts
function configureAmplify() {
  DefaultAmplify.configure({
    Auth: {
      Cognito: {
        userPoolId: environment.cognito.userPoolId,
        userPoolClientId: environment.cognito.userPoolClientId,
        loginWith: {
          phone: true,
          oauth: {
            domain: environment.cognito.domain,
            scopes: [
              "email",
              "openid",
              "aws.cognito.signin.user.admin",
              "profile"
            ],
            redirectSignIn: ["http://auth.ecovelo.mobi/auth-finish"],
            redirectSignOut: [
              `http://${environment.program}.ecovelo.mobi/landing`
            ],
            responseType: "code",
            providers: ["Google", "Apple"]
          }
        },
        signUpVerificationMethod: "code",
        passwordFormat: {
          minLength: 8,
          requireLowercase: true,
          requireUppercase: true,
          requireNumbers: true,
          requireSpecialCharacters: true
        }
      }
    }
  });
}

// src/app/guards/verify-phone.guard.ts
var _VerifyPhoneGuard = class _VerifyPhoneGuard {
  constructor(router, errorHandler) {
    this.router = router;
    this.errorHandler = errorHandler;
  }
  canActivate() {
    return from(fetchUserAttributes()).pipe(map((attributes) => {
      if (attributes.phone_number && attributes.phone_number_verified === "true") {
        this.router.navigate(["/map"]);
        return false;
      }
      return true;
    }), catchError((error) => {
      this.errorHandler.handleError(error);
      return of(true);
    }));
  }
};
_VerifyPhoneGuard.\u0275fac = function VerifyPhoneGuard_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VerifyPhoneGuard)(\u0275\u0275inject(Router), \u0275\u0275inject(ErrorHandlerService));
};
_VerifyPhoneGuard.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _VerifyPhoneGuard, factory: _VerifyPhoneGuard.\u0275fac, providedIn: "root" });
var VerifyPhoneGuard = _VerifyPhoneGuard;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VerifyPhoneGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Router }, { type: ErrorHandlerService }], null);
})();

// src/app/guards/launch.guard.ts
var _LaunchGuard = class _LaunchGuard {
  constructor(router) {
    this.router = router;
    this.previousUrl = "";
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
      this.previousUrl = event.url;
    });
  }
  canActivate() {
    return __async(this, null, function* () {
      const url = new URL(window.location.href);
      const hasStripeSetupParams = url.searchParams.has("setup_intent") && url.searchParams.has("setup_intent_client_secret") && url.searchParams.has("redirect_status");
      if (window.location.pathname.includes("/launch") || window.location.pathname.includes("/signup-minified") || window.location.pathname.includes("/account/privacy") || window.location.pathname.includes("/account/settings/cgu") || window.location.pathname.includes("/renting") || hasStripeSetupParams) {
        return true;
      }
      if (!this.previousUrl.includes("/launch")) {
        const currentUrl = window.location.pathname;
        return this.router.createUrlTree(["/launch"], {
          queryParams: { next: currentUrl }
        });
      }
      return true;
    });
  }
};
_LaunchGuard.\u0275fac = function LaunchGuard_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LaunchGuard)(\u0275\u0275inject(Router));
};
_LaunchGuard.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LaunchGuard, factory: _LaunchGuard.\u0275fac, providedIn: "root" });
var LaunchGuard = _LaunchGuard;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LaunchGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Router }], null);
})();

// src/app/guards/auth.guard.ts
var _AuthGuard = class _AuthGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate() {
    if (this.authService.authState().state === "SignedIn") {
      return this.router.createUrlTree(["/map"]);
    }
    return true;
  }
};
_AuthGuard.\u0275fac = function AuthGuard_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AuthGuard)(\u0275\u0275inject(AuthService), \u0275\u0275inject(Router));
};
_AuthGuard.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthGuard, factory: _AuthGuard.\u0275fac, providedIn: "root" });
var AuthGuard = _AuthGuard;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: AuthService }, { type: Router }], null);
})();

// src/app/guards/qr-code.guard.ts
var _QrCodeGuard = class _QrCodeGuard {
  constructor(router) {
    this.router = router;
  }
  canActivate() {
    if (environment.qrcode === "enabled") {
      return true;
    } else {
      return this.router.createUrlTree(["/map"]);
    }
  }
};
_QrCodeGuard.\u0275fac = function QrCodeGuard_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _QrCodeGuard)(\u0275\u0275inject(Router));
};
_QrCodeGuard.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _QrCodeGuard, factory: _QrCodeGuard.\u0275fac, providedIn: "root" });
var QrCodeGuard = _QrCodeGuard;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QrCodeGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Router }], null);
})();

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "launch?next=/map"
  },
  {
    path: "launch",
    loadComponent: () => import("./launch.page-UFZLEM3A.js").then((m) => m.LaunchPage)
  },
  {
    path: "",
    canActivate: [LaunchGuard],
    children: [
      {
        path: "map",
        loadComponent: () => import("./map.page-NSLQOXQI.js").then((m) => m.MapPage)
      },
      {
        path: "confirm-code",
        loadComponent: () => import("./confirm-code.page-Q3GUVASN.js").then((m) => m.ConfirmCodePage)
      },
      {
        path: "enter-phone",
        loadComponent: () => import("./enter-phone.page-F7ZSOMUN.js").then((m) => m.EnterPhonePage)
      },
      {
        path: "landing",
        loadComponent: () => import("./landing.page-SF4QK5KR.js").then((m) => m.LandingPage),
        canActivate: [AuthGuard]
      },
      {
        path: "payment-method",
        loadComponent: () => import("./payment-method.page-MJRTVDE2.js").then((m) => m.PaymentMethodPage)
      },
      {
        path: "supporting-documents",
        loadComponent: () => import("./supporting-documents.page-RSCP44UH.js").then((m) => m.SupportingDocumentsPage)
      },
      {
        path: "signin",
        loadComponent: () => import("./signin.page-I47NALBL.js").then((m) => m.SigninPage),
        canActivate: [AuthGuard]
      },
      {
        path: "signup",
        loadComponent: () => import("./signup.page-D5A2Q5PZ.js").then((m) => m.SignupPage),
        canActivate: [AuthGuard]
      },
      {
        path: "signup-minified",
        loadComponent: () => import("./signup-minified.page-WROWQXHO.js").then((m) => m.SignupMinifiedPage)
      },
      {
        path: "external-auth-failed",
        loadComponent: () => import("./external-auth-failed.page-36Q5DPIC.js").then((m) => m.ExternalAuthFailedPage)
      },
      {
        path: "verify-phone",
        loadComponent: () => import("./verify-phone.page-G4HARWW4.js").then((m) => m.VerifyPhonePage),
        canActivate: [VerifyPhoneGuard]
      },
      {
        path: "search-page",
        loadComponent: () => import("./search.page-4QRRIQ2Q.js").then((m) => m.SearchPage)
      },
      {
        path: "account",
        loadComponent: () => import("./menu.page-SZJFGPGO.js").then((m) => m.MenuPage)
      },
      {
        path: "account/abonnements",
        loadComponent: () => import("./abonnements.page-TZGNUNCU.js").then((m) => m.AbonnementsPage)
      },
      {
        path: "account/trips",
        loadComponent: () => import("./trips.page-VLA4QMAL.js").then((m) => m.TripsPage)
      },
      {
        path: "account/settings",
        loadComponent: () => import("./settings.page-LRBT2JQF.js").then((m) => m.SettingsPage)
      },
      {
        path: "account/invoices",
        loadComponent: () => import("./invoices.page-CEYWSBJS.js").then((m) => m.InvoicesPage)
      },
      {
        path: "account/wallet",
        loadComponent: () => import("./wallet.page-3AQYI5OH.js").then((m) => m.WalletPage)
      },
      {
        path: "account/nfc",
        loadComponent: () => import("./nfc.page-UKKEQ3T2.js").then((m) => m.NfcPage)
      },
      {
        path: "account/privacy",
        loadComponent: () => import("./privacy.page-BAGRJIR7.js").then((m) => m.PrivacyPage)
      },
      {
        path: "account/cookies",
        loadComponent: () => import("./cookies.page-Y3I7CWTG.js").then((m) => m.CookiesPage)
      },
      {
        path: "account/payment-methods",
        loadComponent: () => import("./payment-methods.page-BFFSLIC4.js").then((m) => m.PaymentMethodsPage)
      },
      {
        path: "account/settings/cgu",
        loadComponent: () => import("./cgu.page-MV2SWS7H.js").then((m) => m.CguPage)
      },
      {
        path: "account/settings/infos",
        loadComponent: () => import("./infos.page-CSGA2UPB.js").then((m) => m.InfosPage)
      },
      {
        path: "abo-congrats",
        loadComponent: () => import("./abo-congrats.page-FDR3VARP.js").then((m) => m.AboCongratsPage)
      },
      {
        path: "trips/congrats",
        loadComponent: () => import("./trips-congrats.page-5NGOJLED.js").then((m) => m.TripsCongratsPage)
      },
      {
        path: "cgu-congrats",
        loadComponent: () => import("./cgu-congrats.page-C3BU2OM4.js").then((m) => m.CguCongratsPage)
      },
      {
        path: "report-congrats",
        loadComponent: () => import("./report-congrats.page-TIVELQSL.js").then((m) => m.ReportCongratsPage)
      },
      {
        path: "recommandation-congrats",
        loadComponent: () => import("./recommandation.page-JXPTNYPF.js").then((m) => m.RecommandationPage)
      },
      {
        path: "account/support",
        loadComponent: () => import("./support.page-MT6SBMXO.js").then((m) => m.SupportPage)
      },
      {
        path: "account/change-password",
        loadComponent: () => import("./change-password.page-HVSVL2JY.js").then((m) => m.ChangePasswordPage)
      },
      {
        path: "kyc",
        loadComponent: () => import("./kyc.page-FJAIUP6C.js").then((m) => m.KYCPage)
      },
      {
        path: "renting/qr-code",
        loadComponent: () => import("./qr-code.page-M2D3XBUA.js").then((m) => m.QrCodePage),
        canActivate: [QrCodeGuard]
      }
    ]
  },
  {
    path: "renting",
    loadComponent: () => import("./bike-number.page-DF5SNHA2.js").then((m) => m.BikeNumberPage)
  },
  {
    path: "**",
    redirectTo: "/launch"
  }
];

// node_modules/@ionic/pwa-elements/dist/esm/loader.js
var patchEsm = () => {
  return promiseResolve();
};
var defineCustomElements = (win, options) => {
  if (typeof window === "undefined") return Promise.resolve();
  return patchEsm().then(() => {
    return bootstrapLazy([["pwa-camera-modal", [[1, "pwa-camera-modal", {
      "facingMode": [1, "facing-mode"],
      "hidePicker": [4, "hide-picker"],
      "present": [64],
      "dismiss": [64]
    }]]], ["pwa-action-sheet", [[1, "pwa-action-sheet", {
      "header": [1],
      "cancelable": [4],
      "options": [16],
      "open": [32]
    }]]], ["pwa-toast", [[1, "pwa-toast", {
      "message": [1],
      "duration": [2],
      "closing": [32]
    }]]], ["pwa-camera", [[1, "pwa-camera", {
      "facingMode": [1, "facing-mode"],
      "handlePhoto": [16],
      "hidePicker": [4, "hide-picker"],
      "handleNoDeviceError": [16],
      "noDevicesText": [1, "no-devices-text"],
      "noDevicesButtonText": [1, "no-devices-button-text"],
      "photo": [32],
      "photoSrc": [32],
      "showShutterOverlay": [32],
      "flashIndex": [32],
      "hasCamera": [32],
      "rotation": [32],
      "deviceError": [32]
    }]]], ["pwa-camera-modal-instance", [[1, "pwa-camera-modal-instance", {
      "facingMode": [1, "facing-mode"],
      "hidePicker": [4, "hide-picker"],
      "noDevicesText": [1, "no-devices-text"],
      "noDevicesButtonText": [1, "no-devices-button-text"]
    }, [[16, "keyup", "handleBackdropKeyUp"]]]]]], options);
  });
};

// src/app/components/modals/cookies/cookies.component.ts
function CookiesComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "cookies.first_body"));
  }
}
function CookiesComponent_ion_grid_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-grid", 5)(1, "ion-row", 6)(2, "div")(3, "ion-item", 7)(4, "ion-checkbox", 8);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 9);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "ion-row")(11, "div")(12, "ion-item", 7)(13, "ion-checkbox", 10);
    \u0275\u0275listener("ionChange", function CookiesComponent_ion_grid_2_Template_ion_checkbox_ionChange_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.checkBoxChanged($event));
    });
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p", 9);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "cookies.needed_title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 6, "cookies.needed_body"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 8, "cookies.analytics_title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 10, "cookies.analytics_body"), " ");
  }
}
function CookiesComponent_ion_footer_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-footer")(1, "ion-grid")(2, "ion-row")(3, "ion-col", 11)(4, "ion-button", 12);
    \u0275\u0275listener("click", function CookiesComponent_ion_footer_3_Template_ion_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateFixedValue());
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "ion-col", 11)(8, "ion-button", 13);
    \u0275\u0275listener("click", function CookiesComponent_ion_footer_3_Template_ion_button_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.acceptAll());
    });
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 2, "cookies.modal_title"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 4, "cookies.accept_all_btn"), " ");
  }
}
function CookiesComponent_ion_footer_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-footer")(1, "ion-grid")(2, "ion-item", 7);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-row")(6, "ion-col")(7, "ion-button", 13);
    \u0275\u0275listener("click", function CookiesComponent_ion_footer_4_Template_ion_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.checkAnalyticsAndClose());
    });
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "cookies.accept_body"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 4, "cookies.accept_btn"), " ");
  }
}
var CookieManagementState;
(function(CookieManagementState2) {
  CookieManagementState2["Initial"] = "initial";
  CookieManagementState2["Managing"] = "managing";
})(CookieManagementState || (CookieManagementState = {}));
var _CookiesComponent = class _CookiesComponent {
  constructor(cookiesService) {
    this.cookiesService = cookiesService;
    this.CookieManagementState = CookieManagementState;
    this.analyticsAccepted = "false";
    this.currentState = CookieManagementState.Initial;
    this.initializeState();
  }
  initializeState() {
    const state = this.cookiesService.cookiesState();
    if (state.state === "already_set") {
      this.analyticsAccepted = state.preferences.analytics ? "true" : "false";
      this.currentState = CookieManagementState.Managing;
    }
  }
  updateFixedValue() {
    var _a;
    this.currentState = CookieManagementState.Managing;
    this.modal = document.querySelector("#ecl-cookies-modal");
    (_a = this.modal) == null ? void 0 : _a.classList.add("fullHeight");
  }
  checkBoxChanged(event) {
    this.analyticsAccepted = event.detail.checked ? "true" : "false";
  }
  checkAnalyticsAndClose() {
    var _a;
    const preferences = {
      necessary: true,
      analytics: this.analyticsAccepted === "true"
    };
    this.cookiesService.storePreferences(preferences);
    (_a = this.modal) == null ? void 0 : _a.dismiss();
  }
  acceptAll() {
    var _a;
    const preferences = {
      necessary: true,
      analytics: true
    };
    this.cookiesService.storePreferences(preferences);
    (_a = this.modal) == null ? void 0 : _a.dismiss();
  }
};
_CookiesComponent.\u0275fac = function CookiesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CookiesComponent)(\u0275\u0275directiveInject(CookiesService));
};
_CookiesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CookiesComponent, selectors: [["app-cookies"]], decls: 5, vars: 4, consts: [[1, "content"], ["class", "flex-center ion-padding-horizontal", 4, "ngIf"], ["class", "ion-padding", 4, "ngIf"], [4, "ngIf"], [1, "flex-center", "ion-padding-horizontal"], [1, "ion-padding"], [1, "ion-margin-bottom"], ["lines", "none"], ["checked", "true", "disabled", "true"], [1, "ion-no-margin", "ion-padding-start"], ["checked", "false", 3, "ionChange"], ["size", "6"], ["color", "primary", "color", "dark", "fill", "outline", "expand", "block", "shape", "round", 3, "click"], ["color", "primary", "color", "primary", "expand", "block", "shape", "round", 3, "click"]], template: function CookiesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275template(1, CookiesComponent_div_1_Template, 4, 3, "div", 1)(2, CookiesComponent_ion_grid_2_Template, 19, 12, "ion-grid", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CookiesComponent_ion_footer_3_Template, 11, 6, "ion-footer", 3)(4, CookiesComponent_ion_footer_4_Template, 10, 6, "ion-footer", 3);
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.currentState === ctx.CookieManagementState.Initial);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.currentState === ctx.CookieManagementState.Managing);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.currentState === ctx.CookieManagementState.Initial);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.currentState === ctx.CookieManagementState.Managing);
  }
}, dependencies: [
  TranslateModule,
  TranslatePipe,
  CommonModule,
  NgIf,
  IonGrid,
  IonRow,
  IonItem,
  IonCheckbox,
  IonButton,
  IonCol,
  IonFooter
], styles: ["\n\n.content[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  max-height: 80vh;\n}\n/*# sourceMappingURL=cookies.component.css.map */"] });
var CookiesComponent = _CookiesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CookiesComponent, [{
    type: Component,
    args: [{ selector: "app-cookies", imports: [
      TranslateModule,
      CommonModule,
      IonGrid,
      IonRow,
      IonItem,
      IonCheckbox,
      IonButton,
      IonCol,
      IonFooter
    ], template: `<div class="content">
  <div
    *ngIf="currentState === CookieManagementState.Initial"
    class="flex-center ion-padding-horizontal"
  >
    <p>{{ 'cookies.first_body' | translate }}</p>
  </div>
  <ion-grid
    class="ion-padding"
    *ngIf="currentState === CookieManagementState.Managing"
  >
    <ion-row class="ion-margin-bottom">
      <div>
        <ion-item lines="none">
          <ion-checkbox checked="true" disabled="true">{{
            'cookies.needed_title' | translate
          }}</ion-checkbox>
        </ion-item>
        <p class="ion-no-margin ion-padding-start">
          {{ 'cookies.needed_body' | translate }}
        </p>
      </div>
    </ion-row>
    <ion-row>
      <div>
        <ion-item lines="none">
          <ion-checkbox (ionChange)="checkBoxChanged($event)" checked="false">{{
            'cookies.analytics_title' | translate
          }}</ion-checkbox>
        </ion-item>
        <p class="ion-no-margin ion-padding-start">
          {{ 'cookies.analytics_body' | translate }}
        </p>
      </div>
    </ion-row>
  </ion-grid>
</div>

<ion-footer *ngIf="currentState === CookieManagementState.Initial">
  <ion-grid>
    <ion-row>
      <ion-col size="6">
        <ion-button
          color="primary"
          (click)="updateFixedValue()"
          color="dark"
          fill="outline"
          expand="block"
          shape="round"
        >
          {{ 'cookies.modal_title' | translate }}
        </ion-button>
      </ion-col>
      <ion-col size="6">
        <ion-button
          color="primary"
          (click)="acceptAll()"
          color="primary"
          expand="block"
          shape="round"
        >
          {{ 'cookies.accept_all_btn' | translate }}
        </ion-button>
      </ion-col>
    </ion-row>
  </ion-grid>
</ion-footer>
<ion-footer *ngIf="currentState === CookieManagementState.Managing">
  <ion-grid>
    <ion-item lines="none">
      {{ 'cookies.accept_body' | translate }}
    </ion-item>
    <ion-row>
      <ion-col>
        <ion-button
          color="primary"
          (click)="checkAnalyticsAndClose()"
          color="primary"
          expand="block"
          shape="round"
        >
          {{ 'cookies.accept_btn' | translate }}
        </ion-button>
      </ion-col>
    </ion-row>
  </ion-grid>
</ion-footer>
`, styles: ["/* src/app/components/modals/cookies/cookies.component.scss */\n.content {\n  overflow-y: auto;\n  max-height: 80vh;\n}\n/*# sourceMappingURL=cookies.component.css.map */\n"] }]
  }], () => [{ type: CookiesService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CookiesComponent, { className: "CookiesComponent", filePath: "src/app/components/modals/cookies/cookies.component.ts", lineNumber: 44 });
})();

// node_modules/@capacitor/screen-orientation/dist/esm/index.js
var ScreenOrientation = registerPlugin("ScreenOrientation", {
  web: () => import("./web-4AWI7Q6F.js").then((m) => new m.ScreenOrientationWeb())
});

// src/app/services/external/sentry.service.ts
var _SentryService = class _SentryService {
  constructor() {
  }
  initSentry() {
    return __async(this, null, function* () {
      init({
        dsn: "https://284569e480faeea28942c9da17035ca8@o233559.ingest.us.sentry.io/4508250853801984",
        // Set your release version, such as "getsentry@1.0.0"
        release: "Adel@1.0.0",
        environment: environment.production ? "production" : "preprod",
        // Set your dist version, such as "1"
        dist: "1",
        integrations: [
          // Registers and configures the Tracing integration,
          // which automatically instruments your application to monitor its
          // performance, including custom Angular routing instrumentation
          browserTracingIntegration(),
          // Registers the Replay integration,
          // which automatically captures Session Replays
          replayIntegration({
            maskAllText: false,
            blockAllMedia: false
          })
          //   //REMOVE THIS IN PROD MODE
          //   SentryAngular.feedbackAsyncIntegration({
          //     autoInject: false,
          //   }),
        ],
        // Set tracesSampleRate to 1.0 to capture 100%
        // of transactions for tracing.
        // We recommend adjusting this value in production
        // Learn more at
        // https://docs.sentry.io/platforms/javascript/configuration/options/#traces-sample-rate
        tracesSampleRate: 5e-3,
        sampleRate: 5e-3,
        // Capture Replay for 10% of all sessions,
        // plus for 100% of sessions with an error
        // Learn more at
        // https://docs.sentry.io/platforms/javascript/session-replay/configuration/#general-integration-configuration
        replaysSessionSampleRate: environment.production ? 5e-3 : 0,
        replaysOnErrorSampleRate: environment.production ? 5e-3 : 0
      });
    });
  }
  openFeedbackModal() {
    return __async(this, null, function* () {
      const feedback = feedbackSyncIntegration();
      const form = yield feedback.createForm({
        formTitle: "Signaler un probl\xE8me",
        nameLabel: "Nom",
        emailPlaceholder: "Votre email",
        namePlaceholder: "Votre nom",
        isRequiredLabel: "(requis)",
        messagePlaceholder: "Que s'est-il pass\xE9 ?",
        submitButtonLabel: "Envoyer le rapport",
        cancelButtonLabel: "Annuler"
      });
      form.appendToDom();
      form.open();
    });
  }
};
_SentryService.\u0275fac = function SentryService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SentryService)();
};
_SentryService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SentryService, factory: _SentryService.\u0275fac, providedIn: "root" });
var SentryService = _SentryService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SentryService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/services/utils/url.service.ts
var _URLService = class _URLService {
  constructor() {
    this.previousUrl = signal(null);
    this.currentUrl = signal(null);
  }
};
_URLService.\u0275fac = function URLService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _URLService)();
};
_URLService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _URLService, factory: _URLService.\u0275fac, providedIn: "root" });
var URLService = _URLService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(URLService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/app.component.ts
var _AppComponent = class _AppComponent {
  unloadHandler(event) {
    this.appstateService.saveAppState();
    this.newsStateService.saveMandatoryState();
  }
  beforeUnloadHandler(event) {
    this.appstateService.saveAppState();
    this.newsStateService.saveMandatoryState();
  }
  constructor(language, router, zone, cookiesService, modalController, alertController, appstateService, sentryService, urlService, newsStateService, personalisationService, kycService) {
    this.language = language;
    this.router = router;
    this.zone = zone;
    this.cookiesService = cookiesService;
    this.modalController = modalController;
    this.alertController = alertController;
    this.appstateService = appstateService;
    this.sentryService = sentryService;
    this.urlService = urlService;
    this.newsStateService = newsStateService;
    this.personalisationService = personalisationService;
    this.kycService = kycService;
    Stripe.initialize({
      publishableKey: environment.stripePublicKey
    });
    defineCustomElements(window);
    this.initializeApp();
    effect(() => {
      this.onCookiesStateChange(this.cookiesService.cookiesState());
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.cookiesService.getPreferences();
      if (Capacitor.isNativePlatform()) {
        yield ScreenOrientation.lock({ orientation: "portrait" });
        if (this.cookiesService.cookiesState().state === "not_already_set") {
          const preferences = {
            necessary: true,
            analytics: true
          };
          yield this.cookiesService.storePreferences(preferences);
        }
      }
      this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
        this.urlService.previousUrl.set(this.urlService.currentUrl());
        this.urlService.currentUrl.set(event.url);
      });
    });
  }
  initializeApp() {
    this.language.initializeLanguage();
    this.personalisationService.setTitle();
    this.personalisationService.setColors();
    this.kycService.setKycDocumentTypes();
    App.addListener("appUrlOpen", (event) => {
      this.zone.run(() => __async(this, null, function* () {
        let path = "";
        if (event.url.startsWith("com.ecovelo.")) {
          const parts = event.url.split("://");
          if (parts.length > 1) {
            path = parts[1];
          }
        } else if (event.url.startsWith("https://")) {
          try {
            const url = new URL(event.url);
            path = url.pathname + url.search + url.hash;
            if (path.startsWith("/")) {
              path = path.substring(1);
            }
          } catch (error) {
            console.error("Failed to parse URL:", event.url, error);
          }
        }
        if (path) {
          this.router.navigateByUrl(path);
        }
      }));
    });
  }
  onCookiesStateChange(state) {
    return __async(this, null, function* () {
      switch (state.state) {
        case "already_set":
          if (state.preferences.analytics) {
            this.sentryService.initSentry();
          }
          break;
        case "not_already_set":
          if (!Capacitor.isNativePlatform()) {
            const modal = yield this.modalController.create({
              component: CookiesComponent,
              cssClass: "ecl-cookies-modal",
              id: "ecl-cookies-modal",
              backdropDismiss: false
            });
            yield modal.present();
          }
          break;
        default:
          break;
      }
    });
  }
};
_AppComponent.\u0275fac = function AppComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppComponent)(\u0275\u0275directiveInject(LanguageService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(CookiesService), \u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(AppstateService), \u0275\u0275directiveInject(SentryService), \u0275\u0275directiveInject(URLService), \u0275\u0275directiveInject(NewsStateService), \u0275\u0275directiveInject(PersonnalisationService), \u0275\u0275directiveInject(KYCWrapperService));
};
_AppComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("unload", function AppComponent_unload_HostBindingHandler($event) {
      return ctx.unloadHandler($event);
    }, false, \u0275\u0275resolveWindow)("beforeunload", function AppComponent_beforeunload_HostBindingHandler($event) {
      return ctx.beforeUnloadHandler($event);
    }, false, \u0275\u0275resolveWindow);
  }
}, decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-app");
    \u0275\u0275element(1, "ion-router-outlet");
    \u0275\u0275elementEnd();
  }
}, dependencies: [IonApp, IonRouterOutlet], encapsulation: 2 });
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", imports: [IonApp, IonRouterOutlet], template: "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n" }]
  }], () => [{ type: LanguageService }, { type: Router }, { type: NgZone }, { type: CookiesService }, { type: ModalController }, { type: AlertController }, { type: AppstateService }, { type: SentryService }, { type: URLService }, { type: NewsStateService }, { type: PersonnalisationService }, { type: KYCWrapperService }], { unloadHandler: [{
    type: HostListener,
    args: ["window:unload", ["$event"]]
  }], beforeUnloadHandler: [{
    type: HostListener,
    args: ["window:beforeunload", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 29 });
})();

// src/api.interceptor.ts
var authInterceptor = (req, next) => {
  return from(fetchAuthSession({ forceRefresh: false })).pipe(switchMap((session) => {
    var _a, _b;
    const token = (_b = (_a = session == null ? void 0 : session.tokens) == null ? void 0 : _a.idToken) == null ? void 0 : _b.toString();
    const newReq = req.clone({
      setHeaders: {
        Authorization: token ? `${token}` : "",
        "Live-Mode": environment.production.toString(),
        program: environment.program
      }
    });
    return next(newReq);
  }), catchError((err) => {
    throw err;
  }));
};

// src/utils/sentry.config.ts
var sentryProviders = [
  {
    provide: ErrorHandler,
    useValue: createErrorHandler({
      showDialog: false
    })
  },
  {
    provide: TraceService,
    deps: [Router]
  },
  {
    provide: APP_INITIALIZER,
    useFactory: () => () => {
    },
    deps: [TraceService],
    multi: true
  }
];

// node_modules/barcode-detector/dist/es/ponyfill.js
var Ue = (o) => {
  throw TypeError(o);
};
var Ve = (o, l, d) => l.has(o) || Ue("Cannot " + d);
var We = (o, l, d) => (Ve(o, l, "read from private field"), d ? d.call(o) : l.get(o));
var He = (o, l, d) => l.has(o) ? Ue("Cannot add the same private member more than once") : l instanceof WeakSet ? l.add(o) : l.set(o, d);
var ke = (o, l, d, b) => (Ve(o, l, "write to private field"), b ? b.call(o, d) : l.set(o, d), d);
var Dt = [["Aztec", "M"], ["Codabar", "L"], ["Code39", "L"], ["Code93", "L"], ["Code128", "L"], ["DataBar", "L"], ["DataBarExpanded", "L"], ["DataMatrix", "M"], ["EAN-8", "L"], ["EAN-13", "L"], ["ITF", "L"], ["MaxiCode", "M"], ["PDF417", "M"], ["QRCode", "M"], ["UPC-A", "L"], ["UPC-E", "L"], ["MicroQRCode", "M"], ["rMQRCode", "M"], ["DXFilmEdge", "L"], ["DataBarLimited", "L"]];
var Mt = Dt.map(([o]) => o);
var Ma = Mt.filter((o, l) => Dt[l][1] === "L");
var Aa = Mt.filter((o, l) => Dt[l][1] === "M");
function qt(o) {
  switch (o) {
    case "Linear-Codes":
      return Ma.reduce((l, d) => l | qt(d), 0);
    case "Matrix-Codes":
      return Aa.reduce((l, d) => l | qt(d), 0);
    case "Any":
      return (1 << Dt.length) - 1;
    case "None":
      return 0;
    default:
      return 1 << Mt.indexOf(o);
  }
}
function Fa(o) {
  if (o === 0) return "None";
  const l = 31 - Math.clz32(o);
  return Mt[l];
}
function Ra(o) {
  return o.reduce((l, d) => l | qt(d), 0);
}
var La = ["LocalAverage", "GlobalHistogram", "FixedThreshold", "BoolCast"];
function ja(o) {
  return La.indexOf(o);
}
var Ne = [
  "Unknown",
  "ASCII",
  "ISO8859_1",
  "ISO8859_2",
  "ISO8859_3",
  "ISO8859_4",
  "ISO8859_5",
  "ISO8859_6",
  "ISO8859_7",
  "ISO8859_8",
  "ISO8859_9",
  "ISO8859_10",
  "ISO8859_11",
  "ISO8859_13",
  "ISO8859_14",
  "ISO8859_15",
  "ISO8859_16",
  "Cp437",
  "Cp1250",
  "Cp1251",
  "Cp1252",
  "Cp1256",
  "Shift_JIS",
  "Big5",
  "GB2312",
  "GB18030",
  "EUC_JP",
  "EUC_KR",
  "UTF16BE",
  /**
   * UnicodeBig [[deprecated]]
   */
  "UTF16BE",
  "UTF8",
  "UTF16LE",
  "UTF32BE",
  "UTF32LE",
  "BINARY"
];
function Ba(o) {
  return o === "UnicodeBig" ? Ne.indexOf("UTF16BE") : Ne.indexOf(o);
}
var Ua = ["Text", "Binary", "Mixed", "GS1", "ISO15434", "UnknownECI"];
function Va(o) {
  return Ua[o];
}
var Wa = ["Ignore", "Read", "Require"];
function Ha(o) {
  return Wa.indexOf(o);
}
var ka = ["Plain", "ECI", "HRI", "Hex", "Escaped"];
function Na(o) {
  return ka.indexOf(o);
}
var It = {
  formats: [],
  tryHarder: true,
  tryRotate: true,
  tryInvert: true,
  tryDownscale: true,
  tryDenoise: false,
  binarizer: "LocalAverage",
  isPure: false,
  downscaleFactor: 3,
  downscaleThreshold: 500,
  minLineCount: 2,
  maxNumberOfSymbols: 255,
  tryCode39ExtendedMode: true,
  returnErrors: false,
  eanAddOnSymbol: "Ignore",
  textMode: "HRI",
  characterSet: "Unknown"
};
function ze(o) {
  return __spreadProps(__spreadValues({}, o), {
    formats: Ra(o.formats),
    binarizer: ja(o.binarizer),
    eanAddOnSymbol: Ha(o.eanAddOnSymbol),
    textMode: Na(o.textMode),
    characterSet: Ba(o.characterSet)
  });
}
function za(o) {
  return __spreadProps(__spreadValues({}, o), {
    format: Fa(o.format),
    contentType: Va(o.contentType),
    eccLevel: o.ecLevel
  });
}
var Ga = {
  locateFile: (o, l) => {
    const d = o.match(/_(.+?)\.wasm$/);
    return d ? `https://fastly.jsdelivr.net/npm/zxing-wasm@2.2.4/dist/${d[1]}/${o}` : l + o;
  }
};
var St = /* @__PURE__ */ new WeakMap();
function Xa(o, l) {
  return Object.is(o, l) || Object.keys(o).length === Object.keys(l).length && Object.keys(o).every((d) => Object.hasOwn(l, d) && o[d] === l[d]);
}
function Xe(o, {
  overrides: l,
  equalityFn: d = Xa,
  fireImmediately: b = false
} = {}) {
  var f;
  const [I, D] = (f = St.get(o)) != null ? f : [Ga], M = l != null ? l : I;
  let _;
  if (b) {
    if (D && (_ = d(I, M))) return D;
    const A = o(__spreadValues({}, M));
    return St.set(o, [M, A]), A;
  }
  (_ != null ? _ : d(I, M)) || St.set(o, [M]);
}
function Ya(_0, _1) {
  return __async(this, arguments, function* (o, l, d = It) {
    const b = __spreadValues(__spreadValues({}, It), d), f = yield Xe(o, {
      fireImmediately: true
    });
    let I, D;
    if ("width" in l && "height" in l && "data" in l) {
      const {
        data: _,
        data: {
          byteLength: A
        },
        width: U,
        height: G
      } = l;
      D = f._malloc(A), f.HEAPU8.set(_, D), I = f.readBarcodesFromPixmap(D, U, G, ze(b));
    } else {
      let _, A;
      if ("buffer" in l) [_, A] = [l.byteLength, l];
      else if ("byteLength" in l) [_, A] = [l.byteLength, new Uint8Array(l)];
      else if ("size" in l) [_, A] = [l.size, new Uint8Array(yield l.arrayBuffer())];
      else throw new TypeError("Invalid input type");
      D = f._malloc(_), f.HEAPU8.set(A, D), I = f.readBarcodesFromImage(D, _, ze(b));
    }
    f._free(D);
    const M = [];
    for (let _ = 0; _ < I.size(); ++_) M.push(za(I.get(_)));
    return M;
  });
}
__spreadProps(__spreadValues({}, It), {
  formats: [...It.formats]
});
function Zt() {
  return __async(this, arguments, function* (o = {}) {
    var l, d, b, f = o, I = !!globalThis.window, D = typeof Bun < "u", M = !!globalThis.WorkerGlobalScope;
    !((d = globalThis.process) === null || d === void 0 || (d = d.versions) === null || d === void 0) && d.node && ((b = globalThis.process) === null || b === void 0 ? void 0 : b.type) != "renderer";
    var _ = "./this.program", A, U = "";
    function G(t) {
      return f.locateFile ? f.locateFile(t, U) : U + t;
    }
    var tt, X;
    if (I || M || D) {
      try {
        U = new URL(".", A).href;
      } catch {
      }
      M && (X = (t) => {
        var e2 = new XMLHttpRequest();
        return e2.open("GET", t, false), e2.responseType = "arraybuffer", e2.send(null), new Uint8Array(e2.response);
      }), tt = (t) => __async(null, null, function* () {
        var e2 = yield fetch(t, {
          credentials: "same-origin"
        });
        if (e2.ok) return e2.arrayBuffer();
        throw new Error(e2.status + " : " + e2.url);
      });
    }
    var nt = console.log.bind(console), V = console.error.bind(console), q, ht = false, Qt, Jt, Y, W, dt, at, ot, T, Kt, te, ee = false;
    function re() {
      var t = Pt.buffer;
      Y = new Int8Array(t), dt = new Int16Array(t), f.HEAPU8 = W = new Uint8Array(t), at = new Uint16Array(t), ot = new Int32Array(t), T = new Uint32Array(t), Kt = new Float32Array(t), te = new Float64Array(t);
    }
    function ar() {
      if (f.preRun) for (typeof f.preRun == "function" && (f.preRun = [f.preRun]); f.preRun.length; ) yr(f.preRun.shift());
      ne(oe);
    }
    function or() {
      ee = true, lt.xa();
    }
    function ir() {
      if (f.postRun) for (typeof f.postRun == "function" && (f.postRun = [f.postRun]); f.postRun.length; ) pr(f.postRun.shift());
      ne(ae);
    }
    function At(t) {
      var e2, r;
      (e2 = f.onAbort) === null || e2 === void 0 || e2.call(f, t), t = "Aborted(" + t + ")", V(t), ht = true, t += ". Build with -sASSERTIONS for more info.";
      var n = new WebAssembly.RuntimeError(t);
      throw (r = Jt) === null || r === void 0 || r(n), n;
    }
    var pt;
    function sr() {
      return G("zxing_reader.wasm");
    }
    function ur(t) {
      if (t == pt && q) return new Uint8Array(q);
      if (X) return X(t);
      throw "both async and sync fetching of the wasm failed";
    }
    function cr(t) {
      return __async(this, null, function* () {
        if (!q) try {
          var e2 = yield tt(t);
          return new Uint8Array(e2);
        } catch {
        }
        return ur(t);
      });
    }
    function lr(t, e2) {
      return __async(this, null, function* () {
        try {
          var r = yield cr(t), n = yield WebAssembly.instantiate(r, e2);
          return n;
        } catch (a) {
          V(`failed to asynchronously prepare wasm: ${a}`), At(a);
        }
      });
    }
    function fr(t, e2, r) {
      return __async(this, null, function* () {
        if (!t && WebAssembly.instantiateStreaming) try {
          var n = fetch(e2, {
            credentials: "same-origin"
          }), a = yield WebAssembly.instantiateStreaming(n, r);
          return a;
        } catch (i) {
          V(`wasm streaming compile failed: ${i}`), V("falling back to ArrayBuffer instantiation");
        }
        return lr(e2, r);
      });
    }
    function hr() {
      var t = {
        a: qn
      };
      return t;
    }
    function dr() {
      return __async(this, null, function* () {
        function t(i, s) {
          return lt = i.exports, Xn(lt), re(), lt;
        }
        function e2(i) {
          return t(i.instance);
        }
        var r = hr();
        if (f.instantiateWasm) return new Promise((i, s) => {
          f.instantiateWasm(r, (u, c) => {
            i(t(u));
          });
        });
        pt != null || (pt = sr());
        var n = yield fr(q, pt, r), a = e2(n);
        return a;
      });
    }
    var ne = (t) => {
      for (; t.length > 0; ) t.shift()(f);
    }, ae = [], pr = (t) => ae.push(t), oe = [], yr = (t) => oe.push(t), m = (t) => _e(t), g = () => xe(), yt = [], vt = 0, vr = (t) => {
      var e2 = new Ft(t);
      return e2.get_caught() || (e2.set_caught(true), vt--), e2.set_rethrown(false), yt.push(e2), Ie(t), Pe(t);
    }, H = 0, mr = () => {
      v(0, 0);
      var t = yt.pop();
      Se(t.excPtr), H = 0;
    };
    class Ft {
      constructor(e2) {
        this.excPtr = e2, this.ptr = e2 - 24;
      }
      set_type(e2) {
        T[this.ptr + 4 >> 2] = e2;
      }
      get_type() {
        return T[this.ptr + 4 >> 2];
      }
      set_destructor(e2) {
        T[this.ptr + 8 >> 2] = e2;
      }
      get_destructor() {
        return T[this.ptr + 8 >> 2];
      }
      set_caught(e2) {
        e2 = e2 ? 1 : 0, Y[this.ptr + 12] = e2;
      }
      get_caught() {
        return Y[this.ptr + 12] != 0;
      }
      set_rethrown(e2) {
        e2 = e2 ? 1 : 0, Y[this.ptr + 13] = e2;
      }
      get_rethrown() {
        return Y[this.ptr + 13] != 0;
      }
      init(e2, r) {
        this.set_adjusted_ptr(0), this.set_type(e2), this.set_destructor(r);
      }
      set_adjusted_ptr(e2) {
        T[this.ptr + 16 >> 2] = e2;
      }
      get_adjusted_ptr() {
        return T[this.ptr + 16 >> 2];
      }
    }
    var mt = (t) => Oe(t), Rt = (t) => {
      var e2 = H;
      if (!e2) return mt(0), 0;
      var r = new Ft(e2);
      r.set_adjusted_ptr(e2);
      var n = r.get_type();
      if (!n) return mt(0), e2;
      for (var a of t) {
        if (a === 0 || a === n) break;
        var i = r.ptr + 16;
        if (De(a, n, i)) return mt(a), e2;
      }
      return mt(n), e2;
    }, gr = () => Rt([]), wr = (t) => Rt([t]), br = (t, e2) => Rt([t, e2]), $r = () => {
      var t = yt.pop();
      t || At("no exception to throw");
      var e2 = t.excPtr;
      throw t.get_rethrown() || (yt.push(t), t.set_rethrown(true), t.set_caught(false), vt++), H = e2, H;
    }, Cr = (t, e2, r) => {
      var n = new Ft(t);
      throw n.init(e2, r), H = t, vt++, H;
    }, Tr = () => vt, Er = (t) => {
      throw H || (H = t), H;
    }, Pr = () => At(""), gt = {}, Lt = (t) => {
      for (; t.length; ) {
        var e2 = t.pop(), r = t.pop();
        r(e2);
      }
    };
    function it(t) {
      return this.fromWireType(T[t >> 2]);
    }
    var et = {}, Z = {}, wt = {}, Or = class extends Error {
      constructor(t) {
        super(t), this.name = "InternalError";
      }
    }, bt = (t) => {
      throw new Or(t);
    }, Q = (t, e2, r) => {
      t.forEach((u) => wt[u] = e2);
      function n(u) {
        var c = r(u);
        c.length !== t.length && bt("Mismatched type converter count");
        for (var h = 0; h < t.length; ++h) j(t[h], c[h]);
      }
      var a = new Array(e2.length), i = [], s = 0;
      {
        const u = e2;
        for (let c = 0; c < u.length; ++c) {
          const h = u[c];
          Z.hasOwnProperty(h) ? a[c] = Z[h] : (i.push(h), et.hasOwnProperty(h) || (et[h] = []), et[h].push(() => {
            a[c] = Z[h], ++s, s === i.length && n(a);
          }));
        }
      }
      i.length === 0 && n(a);
    }, _r = (t) => {
      var e2 = gt[t];
      delete gt[t];
      var r = e2.rawConstructor, n = e2.rawDestructor, a = e2.fields, i = a.map((s) => s.getterReturnType).concat(a.map((s) => s.setterArgumentType));
      Q([t], i, (s) => {
        var u = {};
        {
          const c = a;
          for (let h = 0; h < c.length; ++h) {
            const p = c[h], y = s[h], C = p.getter, P = p.getterContext, S = s[h + a.length], x = p.setter, O = p.setterContext;
            u[p.fieldName] = {
              read: (E) => y.fromWireType(C(P, E)),
              write: (E, K) => {
                var R = [];
                x(O, E, S.toWireType(R, K)), Lt(R);
              },
              optional: y.optional
            };
          }
        }
        return [{
          name: e2.name,
          fromWireType: (c) => {
            var h = {};
            for (var p in u) h[p] = u[p].read(c);
            return n(c), h;
          },
          toWireType: (c, h) => {
            for (var p in u) if (!(p in h) && !u[p].optional) throw new TypeError(`Missing field: "${p}"`);
            var y = r();
            for (p in u) u[p].write(y, h[p]);
            return c !== null && c.push(n, y), y;
          },
          readValueFromPointer: it,
          destructorFunction: n
        }];
      });
    }, xr = (t, e2, r, n, a) => {
    }, F = (t) => {
      for (var e2 = ""; ; ) {
        var r = W[t++];
        if (!r) return e2;
        e2 += String.fromCharCode(r);
      }
    }, st = class extends Error {
      constructor(t) {
        super(t), this.name = "BindingError";
      }
    }, $ = (t) => {
      throw new st(t);
    };
    function Sr(t, e2) {
      let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var n = e2.name;
      if (t || $(`type "${n}" must have a positive integer typeid pointer`), Z.hasOwnProperty(t)) {
        if (r.ignoreDuplicateRegistrations) return;
        $(`Cannot register type '${n}' twice`);
      }
      if (Z[t] = e2, delete wt[t], et.hasOwnProperty(t)) {
        var a = et[t];
        delete et[t], a.forEach((i) => i());
      }
    }
    function j(t, e2) {
      let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return Sr(t, e2, r);
    }
    var Ir = (t, e2, r, n) => {
      e2 = F(e2), j(t, {
        name: e2,
        fromWireType: function(a) {
          return !!a;
        },
        toWireType: function(a, i) {
          return i ? r : n;
        },
        readValueFromPointer: function(a) {
          return this.fromWireType(W[a]);
        },
        destructorFunction: null
      });
    }, Dr = (t) => ({
      count: t.count,
      deleteScheduled: t.deleteScheduled,
      preservePointerOnDelete: t.preservePointerOnDelete,
      ptr: t.ptr,
      ptrType: t.ptrType,
      smartPtr: t.smartPtr,
      smartPtrType: t.smartPtrType
    }), jt = (t) => {
      function e2(r) {
        return r.$$.ptrType.registeredClass.name;
      }
      $(e2(t) + " instance already deleted");
    }, Bt = false, ie = (t) => {
    }, Mr = (t) => {
      t.smartPtr ? t.smartPtrType.rawDestructor(t.smartPtr) : t.ptrType.registeredClass.rawDestructor(t.ptr);
    }, se = (t) => {
      t.count.value -= 1;
      var e2 = t.count.value === 0;
      e2 && Mr(t);
    }, ut = (t) => globalThis.FinalizationRegistry ? (Bt = new FinalizationRegistry((e2) => {
      se(e2.$$);
    }), ut = (e2) => {
      var r = e2.$$, n = !!r.smartPtr;
      if (n) {
        var a = {
          $$: r
        };
        Bt.register(e2, a, e2);
      }
      return e2;
    }, ie = (e2) => Bt.unregister(e2), ut(t)) : (ut = (e2) => e2, t), Ar = () => {
      let t = $t.prototype;
      Object.assign(t, {
        isAliasOf(r) {
          if (!(this instanceof $t) || !(r instanceof $t)) return false;
          var n = this.$$.ptrType.registeredClass, a = this.$$.ptr;
          r.$$ = r.$$;
          for (var i = r.$$.ptrType.registeredClass, s = r.$$.ptr; n.baseClass; ) a = n.upcast(a), n = n.baseClass;
          for (; i.baseClass; ) s = i.upcast(s), i = i.baseClass;
          return n === i && a === s;
        },
        clone() {
          if (this.$$.ptr || jt(this), this.$$.preservePointerOnDelete) return this.$$.count.value += 1, this;
          var r = ut(Object.create(Object.getPrototypeOf(this), {
            $$: {
              value: Dr(this.$$)
            }
          }));
          return r.$$.count.value += 1, r.$$.deleteScheduled = false, r;
        },
        delete() {
          this.$$.ptr || jt(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && $("Object already scheduled for deletion"), ie(this), se(this.$$), this.$$.preservePointerOnDelete || (this.$$.smartPtr = void 0, this.$$.ptr = void 0);
        },
        isDeleted() {
          return !this.$$.ptr;
        },
        deleteLater() {
          return this.$$.ptr || jt(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && $("Object already scheduled for deletion"), this.$$.deleteScheduled = true, this;
        }
      });
      const e2 = Symbol.dispose;
      e2 && (t[e2] = t.delete);
    };
    function $t() {
    }
    var Ut = (t, e2) => Object.defineProperty(e2, "name", {
      value: t
    }), ue = {}, ce = (t, e2, r) => {
      if (t[e2].overloadTable === void 0) {
        var n = t[e2];
        t[e2] = function() {
          for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++) i[s] = arguments[s];
          return t[e2].overloadTable.hasOwnProperty(i.length) || $(`Function '${r}' called with an invalid number of arguments (${i.length}) - expects one of (${t[e2].overloadTable})!`), t[e2].overloadTable[i.length].apply(this, i);
        }, t[e2].overloadTable = [], t[e2].overloadTable[n.argCount] = n;
      }
    }, le = (t, e2, r) => {
      f.hasOwnProperty(t) ? ((r === void 0 || f[t].overloadTable !== void 0 && f[t].overloadTable[r] !== void 0) && $(`Cannot register public name '${t}' twice`), ce(f, t, t), f[t].overloadTable.hasOwnProperty(r) && $(`Cannot register multiple overloads of a function with the same number of arguments (${r})!`), f[t].overloadTable[r] = e2) : (f[t] = e2, f[t].argCount = r);
    }, Fr = 48, Rr = 57, Lr = (t) => {
      t = t.replace(/[^a-zA-Z0-9_]/g, "$");
      var e2 = t.charCodeAt(0);
      return e2 >= Fr && e2 <= Rr ? `_${t}` : t;
    };
    function jr(t, e2, r, n, a, i, s, u) {
      this.name = t, this.constructor = e2, this.instancePrototype = r, this.rawDestructor = n, this.baseClass = a, this.getActualType = i, this.upcast = s, this.downcast = u, this.pureVirtualFunctions = [];
    }
    var Vt = (t, e2, r) => {
      for (; e2 !== r; ) e2.upcast || $(`Expected null or instance of ${r.name}, got an instance of ${e2.name}`), t = e2.upcast(t), e2 = e2.baseClass;
      return t;
    }, Wt = (t) => {
      if (t === null) return "null";
      var e2 = typeof t;
      return e2 === "object" || e2 === "array" || e2 === "function" ? t.toString() : "" + t;
    };
    function Br(t, e2) {
      if (e2 === null) return this.isReference && $(`null is not a valid ${this.name}`), 0;
      e2.$$ || $(`Cannot pass "${Wt(e2)}" as a ${this.name}`), e2.$$.ptr || $(`Cannot pass deleted object as a pointer of type ${this.name}`);
      var r = e2.$$.ptrType.registeredClass, n = Vt(e2.$$.ptr, r, this.registeredClass);
      return n;
    }
    function Ur(t, e2) {
      var r;
      if (e2 === null) return this.isReference && $(`null is not a valid ${this.name}`), this.isSmartPointer ? (r = this.rawConstructor(), t !== null && t.push(this.rawDestructor, r), r) : 0;
      (!e2 || !e2.$$) && $(`Cannot pass "${Wt(e2)}" as a ${this.name}`), e2.$$.ptr || $(`Cannot pass deleted object as a pointer of type ${this.name}`), !this.isConst && e2.$$.ptrType.isConst && $(`Cannot convert argument of type ${e2.$$.smartPtrType ? e2.$$.smartPtrType.name : e2.$$.ptrType.name} to parameter type ${this.name}`);
      var n = e2.$$.ptrType.registeredClass;
      if (r = Vt(e2.$$.ptr, n, this.registeredClass), this.isSmartPointer) switch (e2.$$.smartPtr === void 0 && $("Passing raw pointer to smart pointer is illegal"), this.sharingPolicy) {
        case 0:
          e2.$$.smartPtrType === this ? r = e2.$$.smartPtr : $(`Cannot convert argument of type ${e2.$$.smartPtrType ? e2.$$.smartPtrType.name : e2.$$.ptrType.name} to parameter type ${this.name}`);
          break;
        case 1:
          r = e2.$$.smartPtr;
          break;
        case 2:
          if (e2.$$.smartPtrType === this) r = e2.$$.smartPtr;
          else {
            var a = e2.clone();
            r = this.rawShare(r, B.toHandle(() => a.delete())), t !== null && t.push(this.rawDestructor, r);
          }
          break;
        default:
          $("Unsupporting sharing policy");
      }
      return r;
    }
    function Vr(t, e2) {
      if (e2 === null) return this.isReference && $(`null is not a valid ${this.name}`), 0;
      e2.$$ || $(`Cannot pass "${Wt(e2)}" as a ${this.name}`), e2.$$.ptr || $(`Cannot pass deleted object as a pointer of type ${this.name}`), e2.$$.ptrType.isConst && $(`Cannot convert argument of type ${e2.$$.ptrType.name} to parameter type ${this.name}`);
      var r = e2.$$.ptrType.registeredClass, n = Vt(e2.$$.ptr, r, this.registeredClass);
      return n;
    }
    var fe = (t, e2, r) => {
      if (e2 === r) return t;
      if (r.baseClass === void 0) return null;
      var n = fe(t, e2, r.baseClass);
      return n === null ? null : r.downcast(n);
    }, Wr = {}, Hr = (t, e2) => {
      for (e2 === void 0 && $("ptr should not be undefined"); t.baseClass; ) e2 = t.upcast(e2), t = t.baseClass;
      return e2;
    }, kr = (t, e2) => (e2 = Hr(t, e2), Wr[e2]), Ct = (t, e2) => {
      (!e2.ptrType || !e2.ptr) && bt("makeClassHandle requires ptr and ptrType");
      var r = !!e2.smartPtrType, n = !!e2.smartPtr;
      return r !== n && bt("Both smartPtrType and smartPtr must be specified"), e2.count = {
        value: 1
      }, ut(Object.create(t, {
        $$: {
          value: e2,
          writable: true
        }
      }));
    };
    function Nr(t) {
      var e2 = this.getPointee(t);
      if (!e2) return this.destructor(t), null;
      var r = kr(this.registeredClass, e2);
      if (r !== void 0) {
        if (r.$$.count.value === 0) return r.$$.ptr = e2, r.$$.smartPtr = t, r.clone();
        var n = r.clone();
        return this.destructor(t), n;
      }
      function a() {
        return this.isSmartPointer ? Ct(this.registeredClass.instancePrototype, {
          ptrType: this.pointeeType,
          ptr: e2,
          smartPtrType: this,
          smartPtr: t
        }) : Ct(this.registeredClass.instancePrototype, {
          ptrType: this,
          ptr: t
        });
      }
      var i = this.registeredClass.getActualType(e2), s = ue[i];
      if (!s) return a.call(this);
      var u;
      this.isConst ? u = s.constPointerType : u = s.pointerType;
      var c = fe(e2, this.registeredClass, u.registeredClass);
      return c === null ? a.call(this) : this.isSmartPointer ? Ct(u.registeredClass.instancePrototype, {
        ptrType: u,
        ptr: c,
        smartPtrType: this,
        smartPtr: t
      }) : Ct(u.registeredClass.instancePrototype, {
        ptrType: u,
        ptr: c
      });
    }
    var zr = () => {
      Object.assign(Tt.prototype, {
        getPointee(t) {
          return this.rawGetPointee && (t = this.rawGetPointee(t)), t;
        },
        destructor(t) {
          var e2;
          (e2 = this.rawDestructor) === null || e2 === void 0 || e2.call(this, t);
        },
        readValueFromPointer: it,
        fromWireType: Nr
      });
    };
    function Tt(t, e2, r, n, a, i, s, u, c, h, p) {
      this.name = t, this.registeredClass = e2, this.isReference = r, this.isConst = n, this.isSmartPointer = a, this.pointeeType = i, this.sharingPolicy = s, this.rawGetPointee = u, this.rawConstructor = c, this.rawShare = h, this.rawDestructor = p, !a && e2.baseClass === void 0 ? n ? (this.toWireType = Br, this.destructorFunction = null) : (this.toWireType = Vr, this.destructorFunction = null) : this.toWireType = Ur;
    }
    var he = (t, e2, r) => {
      f.hasOwnProperty(t) || bt("Replacing nonexistent public symbol"), f[t].overloadTable !== void 0 && r !== void 0 ? f[t].overloadTable[r] = e2 : (f[t] = e2, f[t].argCount = r);
    }, N = {}, Gr = (t, e2, r) => {
      t = t.replace(/p/g, "i");
      var n = N[t];
      return n(e2, ...r);
    }, de = [], w = (t) => {
      var e2 = de[t];
      return e2 || (de[t] = e2 = Fe.get(t)), e2;
    }, Xr = function(t, e2) {
      let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
      if (t.includes("j")) return Gr(t, e2, r);
      var n = w(e2), a = n(...r);
      return a;
    }, qr = function(t, e2) {
      let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
      return function() {
        for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
        return Xr(t, e2, a, r);
      };
    }, L = function(t, e2) {
      t = F(t);
      function r() {
        if (t.includes("j")) return qr(t, e2);
        var a = w(e2);
        return a;
      }
      var n = r();
      return typeof n != "function" && $(`unknown function pointer with signature ${t}: ${e2}`), n;
    };
    class Yr extends Error {
    }
    var pe = (t) => {
      var e2 = Ee(t), r = F(e2);
      return z(e2), r;
    }, Et = (t, e2) => {
      var r = [], n = {};
      function a(i) {
        if (!n[i] && !Z[i]) {
          if (wt[i]) {
            wt[i].forEach(a);
            return;
          }
          r.push(i), n[i] = true;
        }
      }
      throw e2.forEach(a), new Yr(`${t}: ` + r.map(pe).join([", "]));
    }, Zr = (t, e2, r, n, a, i, s, u, c, h, p, y, C) => {
      p = F(p), i = L(a, i), u && (u = L(s, u)), h && (h = L(c, h)), C = L(y, C);
      var P = Lr(p);
      le(P, function() {
        Et(`Cannot construct ${p} due to unbound types`, [n]);
      }), Q([t, e2, r], n ? [n] : [], (S) => {
        S = S[0];
        var x, O;
        n ? (x = S.registeredClass, O = x.instancePrototype) : O = $t.prototype;
        var E = Ut(p, function() {
          if (Object.getPrototypeOf(this) !== K) throw new st(`Use 'new' to construct ${p}`);
          if (R.constructor_body === void 0) throw new st(`${p} has no accessible constructor`);
          for (var je = arguments.length, _t = new Array(je), xt = 0; xt < je; xt++) _t[xt] = arguments[xt];
          var Be = R.constructor_body[_t.length];
          if (Be === void 0) throw new st(`Tried to invoke ctor of ${p} with invalid number of parameters (${_t.length}) - expected (${Object.keys(R.constructor_body).toString()}) parameters instead!`);
          return Be.apply(this, _t);
        }), K = Object.create(O, {
          constructor: {
            value: E
          }
        });
        E.prototype = K;
        var R = new jr(p, E, K, C, x, i, u, h);
        if (R.baseClass) {
          var k, Ot;
          (Ot = (k = R.baseClass).__derivedClasses) !== null && Ot !== void 0 || (k.__derivedClasses = []), R.baseClass.__derivedClasses.push(R);
        }
        var Da = new Tt(p, R, true, false, false), Re = new Tt(p + "*", R, false, false, false), Le = new Tt(p + " const*", R, false, true, false);
        return ue[t] = {
          pointerType: Re,
          constPointerType: Le
        }, he(P, E), [Da, Re, Le];
      });
    }, Ht = (t, e2) => {
      for (var r = [], n = 0; n < t; n++) r.push(T[e2 + n * 4 >> 2]);
      return r;
    };
    function Qr(t) {
      for (var e2 = 1; e2 < t.length; ++e2) if (t[e2] !== null && t[e2].destructorFunction === void 0) return true;
      return false;
    }
    function kt(t, e2, r, n, a, i) {
      var s = e2.length;
      s < 2 && $("argTypes array size mismatch! Must at least get return value and 'this' types!");
      var u = e2[1] !== null && r !== null, c = Qr(e2), h = !e2[0].isVoid, p = s - 2, y = new Array(p), C = [], P = [], S = function() {
        P.length = 0;
        var x;
        C.length = u ? 2 : 1, C[0] = a, u && (x = e2[1].toWireType(P, this), C[1] = x);
        for (var O = 0; O < p; ++O) y[O] = e2[O + 2].toWireType(P, O < 0 || arguments.length <= O ? void 0 : arguments[O]), C.push(y[O]);
        var E = n(...C);
        function K(R) {
          if (c) Lt(P);
          else for (var k = u ? 1 : 2; k < e2.length; k++) {
            var Ot = k === 1 ? x : y[k - 2];
            e2[k].destructorFunction !== null && e2[k].destructorFunction(Ot);
          }
          if (h) return e2[0].fromWireType(R);
        }
        return K(E);
      };
      return Ut(t, S);
    }
    var Jr = (t, e2, r, n, a, i) => {
      var s = Ht(e2, r);
      a = L(n, a), Q([], [t], (u) => {
        u = u[0];
        var c = `constructor ${u.name}`;
        if (u.registeredClass.constructor_body === void 0 && (u.registeredClass.constructor_body = []), u.registeredClass.constructor_body[e2 - 1] !== void 0) throw new st(`Cannot register multiple constructors with identical number of parameters (${e2 - 1}) for class '${u.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);
        return u.registeredClass.constructor_body[e2 - 1] = () => {
          Et(`Cannot construct ${u.name} due to unbound types`, s);
        }, Q([], s, (h) => (h.splice(1, 0, null), u.registeredClass.constructor_body[e2 - 1] = kt(c, h, null, a, i), [])), [];
      });
    }, ye = (t) => {
      t = t.trim();
      const e2 = t.indexOf("(");
      return e2 === -1 ? t : t.slice(0, e2);
    }, Kr = (t, e2, r, n, a, i, s, u, c, h) => {
      var p = Ht(r, n);
      e2 = F(e2), e2 = ye(e2), i = L(a, i), Q([], [t], (y) => {
        y = y[0];
        var C = `${y.name}.${e2}`;
        e2.startsWith("@@") && (e2 = Symbol[e2.substring(2)]), u && y.registeredClass.pureVirtualFunctions.push(e2);
        function P() {
          Et(`Cannot call ${C} due to unbound types`, p);
        }
        var S = y.registeredClass.instancePrototype, x = S[e2];
        return x === void 0 || x.overloadTable === void 0 && x.className !== y.name && x.argCount === r - 2 ? (P.argCount = r - 2, P.className = y.name, S[e2] = P) : (ce(S, e2, C), S[e2].overloadTable[r - 2] = P), Q([], p, (O) => {
          var E = kt(C, O, y, i, s);
          return S[e2].overloadTable === void 0 ? (E.argCount = r - 2, S[e2] = E) : S[e2].overloadTable[r - 2] = E, [];
        }), [];
      });
    }, ve = [], J = [0, 1, , 1, null, 1, true, 1, false, 1], Nt = (t) => {
      t > 9 && --J[t + 1] === 0 && (J[t] = void 0, ve.push(t));
    }, B = {
      toValue: (t) => (t || $(`Cannot use deleted val. handle = ${t}`), J[t]),
      toHandle: (t) => {
        switch (t) {
          case void 0:
            return 2;
          case null:
            return 4;
          case true:
            return 6;
          case false:
            return 8;
          default: {
            const e2 = ve.pop() || J.length;
            return J[e2] = t, J[e2 + 1] = 1, e2;
          }
        }
      }
    }, me = {
      name: "emscripten::val",
      fromWireType: (t) => {
        var e2 = B.toValue(t);
        return Nt(t), e2;
      },
      toWireType: (t, e2) => B.toHandle(e2),
      readValueFromPointer: it,
      destructorFunction: null
    }, tn = (t) => j(t, me), en = (t, e2) => {
      switch (e2) {
        case 4:
          return function(r) {
            return this.fromWireType(Kt[r >> 2]);
          };
        case 8:
          return function(r) {
            return this.fromWireType(te[r >> 3]);
          };
        default:
          throw new TypeError(`invalid float width (${e2}): ${t}`);
      }
    }, rn = (t, e2, r) => {
      e2 = F(e2), j(t, {
        name: e2,
        fromWireType: (n) => n,
        toWireType: (n, a) => a,
        readValueFromPointer: en(e2, r),
        destructorFunction: null
      });
    }, nn = (t, e2, r, n, a, i, s, u) => {
      var c = Ht(e2, r);
      t = F(t), t = ye(t), a = L(n, a), le(t, function() {
        Et(`Cannot call ${t} due to unbound types`, c);
      }, e2 - 1), Q([], c, (h) => {
        var p = [h[0], null].concat(h.slice(1));
        return he(t, kt(t, p, null, a, i), e2 - 1), [];
      });
    }, an = (t, e2, r) => {
      switch (e2) {
        case 1:
          return r ? (n) => Y[n] : (n) => W[n];
        case 2:
          return r ? (n) => dt[n >> 1] : (n) => at[n >> 1];
        case 4:
          return r ? (n) => ot[n >> 2] : (n) => T[n >> 2];
        default:
          throw new TypeError(`invalid integer width (${e2}): ${t}`);
      }
    }, on = (t, e2, r, n, a) => {
      e2 = F(e2);
      const i = n === 0;
      let s = (c) => c;
      if (i) {
        var u = 32 - 8 * r;
        s = (c) => c << u >>> u, a = s(a);
      }
      j(t, {
        name: e2,
        fromWireType: s,
        toWireType: (c, h) => h,
        readValueFromPointer: an(e2, r, n !== 0),
        destructorFunction: null
      });
    }, sn = (t, e2, r) => {
      var n = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array], a = n[e2];
      function i(s) {
        var u = T[s >> 2], c = T[s + 4 >> 2];
        return new a(Y.buffer, c, u);
      }
      r = F(r), j(t, {
        name: r,
        fromWireType: i,
        readValueFromPointer: i
      }, {
        ignoreDuplicateRegistrations: true
      });
    }, un = Object.assign({
      optional: true
    }, me), cn = (t, e2) => {
      j(t, un);
    }, ln = (t, e2, r, n) => {
      if (!(n > 0)) return 0;
      for (var a = r, i = r + n - 1, s = 0; s < t.length; ++s) {
        var u = t.codePointAt(s);
        if (u <= 127) {
          if (r >= i) break;
          e2[r++] = u;
        } else if (u <= 2047) {
          if (r + 1 >= i) break;
          e2[r++] = 192 | u >> 6, e2[r++] = 128 | u & 63;
        } else if (u <= 65535) {
          if (r + 2 >= i) break;
          e2[r++] = 224 | u >> 12, e2[r++] = 128 | u >> 6 & 63, e2[r++] = 128 | u & 63;
        } else {
          if (r + 3 >= i) break;
          e2[r++] = 240 | u >> 18, e2[r++] = 128 | u >> 12 & 63, e2[r++] = 128 | u >> 6 & 63, e2[r++] = 128 | u & 63, s++;
        }
      }
      return e2[r] = 0, r - a;
    }, rt = (t, e2, r) => ln(t, W, e2, r), ge = (t) => {
      for (var e2 = 0, r = 0; r < t.length; ++r) {
        var n = t.charCodeAt(r);
        n <= 127 ? e2++ : n <= 2047 ? e2 += 2 : n >= 55296 && n <= 57343 ? (e2 += 4, ++r) : e2 += 3;
      }
      return e2;
    }, we = globalThis.TextDecoder && new TextDecoder(), be = (t, e2, r, n) => {
      var a = e2 + r;
      if (n) return a;
      for (; t[e2] && !(e2 >= a); ) ++e2;
      return e2;
    }, $e = function(t) {
      let e2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = arguments.length > 2 ? arguments[2] : void 0, n = arguments.length > 3 ? arguments[3] : void 0;
      var a = be(t, e2, r, n);
      if (a - e2 > 16 && t.buffer && we) return we.decode(t.subarray(e2, a));
      for (var i = ""; e2 < a; ) {
        var s = t[e2++];
        if (!(s & 128)) {
          i += String.fromCharCode(s);
          continue;
        }
        var u = t[e2++] & 63;
        if ((s & 224) == 192) {
          i += String.fromCharCode((s & 31) << 6 | u);
          continue;
        }
        var c = t[e2++] & 63;
        if ((s & 240) == 224 ? s = (s & 15) << 12 | u << 6 | c : s = (s & 7) << 18 | u << 12 | c << 6 | t[e2++] & 63, s < 65536) i += String.fromCharCode(s);
        else {
          var h = s - 65536;
          i += String.fromCharCode(55296 | h >> 10, 56320 | h & 1023);
        }
      }
      return i;
    }, fn = (t, e2, r) => t ? $e(W, t, e2, r) : "", hn = (t, e2) => {
      e2 = F(e2), j(t, {
        name: e2,
        fromWireType(r) {
          var n = T[r >> 2], a = r + 4, i;
          return i = fn(a, n, true), z(r), i;
        },
        toWireType(r, n) {
          n instanceof ArrayBuffer && (n = new Uint8Array(n));
          var a, i = typeof n == "string";
          i || ArrayBuffer.isView(n) && n.BYTES_PER_ELEMENT == 1 || $("Cannot pass non-string to std::string"), i ? a = ge(n) : a = n.length;
          var s = Xt(4 + a + 1), u = s + 4;
          return T[s >> 2] = a, i ? rt(n, u, a + 1) : W.set(n, u), r !== null && r.push(z, s), s;
        },
        readValueFromPointer: it,
        destructorFunction(r) {
          z(r);
        }
      });
    }, Ce = globalThis.TextDecoder ? new TextDecoder("utf-16le") : void 0, dn = (t, e2, r) => {
      var n = t >> 1, a = be(at, n, e2 / 2, r);
      if (a - n > 16 && Ce) return Ce.decode(at.subarray(n, a));
      for (var i = "", s = n; s < a; ++s) {
        var u = at[s];
        i += String.fromCharCode(u);
      }
      return i;
    }, pn = (t, e2, r) => {
      if (r != null || (r = 2147483647), r < 2) return 0;
      r -= 2;
      for (var n = e2, a = r < t.length * 2 ? r / 2 : t.length, i = 0; i < a; ++i) {
        var s = t.charCodeAt(i);
        dt[e2 >> 1] = s, e2 += 2;
      }
      return dt[e2 >> 1] = 0, e2 - n;
    }, yn = (t) => t.length * 2, vn = (t, e2, r) => {
      for (var n = "", a = t >> 2, i = 0; !(i >= e2 / 4); i++) {
        var s = T[a + i];
        if (!s && !r) break;
        n += String.fromCodePoint(s);
      }
      return n;
    }, mn = (t, e2, r) => {
      if (r != null || (r = 2147483647), r < 4) return 0;
      for (var n = e2, a = n + r - 4, i = 0; i < t.length; ++i) {
        var s = t.codePointAt(i);
        if (s > 65535 && i++, ot[e2 >> 2] = s, e2 += 4, e2 + 4 > a) break;
      }
      return ot[e2 >> 2] = 0, e2 - n;
    }, gn = (t) => {
      for (var e2 = 0, r = 0; r < t.length; ++r) {
        var n = t.codePointAt(r);
        n > 65535 && r++, e2 += 4;
      }
      return e2;
    }, wn = (t, e2, r) => {
      r = F(r);
      var n, a, i;
      e2 === 2 ? (n = dn, a = pn, i = yn) : (n = vn, a = mn, i = gn), j(t, {
        name: r,
        fromWireType: (s) => {
          var u = T[s >> 2], c = n(s + 4, u * e2, true);
          return z(s), c;
        },
        toWireType: (s, u) => {
          typeof u != "string" && $(`Cannot pass non-string to C++ string type ${r}`);
          var c = i(u), h = Xt(4 + c + e2);
          return T[h >> 2] = c / e2, a(u, h + 4, c + e2), s !== null && s.push(z, h), h;
        },
        readValueFromPointer: it,
        destructorFunction(s) {
          z(s);
        }
      });
    }, bn = (t, e2, r, n, a, i) => {
      gt[t] = {
        name: F(e2),
        rawConstructor: L(r, n),
        rawDestructor: L(a, i),
        fields: []
      };
    }, $n = (t, e2, r, n, a, i, s, u, c, h) => {
      gt[t].fields.push({
        fieldName: F(e2),
        getterReturnType: r,
        getter: L(n, a),
        getterContext: i,
        setterArgumentType: s,
        setter: L(u, c),
        setterContext: h
      });
    }, Cn = (t, e2) => {
      e2 = F(e2), j(t, {
        isVoid: true,
        name: e2,
        fromWireType: () => {
        },
        toWireType: (r, n) => {
        }
      });
    }, zt = [], Tn = (t) => {
      var e2 = zt.length;
      return zt.push(t), e2;
    }, En = (t, e2) => {
      var r = Z[t];
      return r === void 0 && $(`${e2} has unknown type ${pe(t)}`), r;
    }, Pn = (t, e2) => {
      for (var r = new Array(t), n = 0; n < t; ++n) r[n] = En(T[e2 + n * 4 >> 2], `parameter ${n}`);
      return r;
    }, On = (t, e2, r) => {
      var n = [], a = t(n, r);
      return n.length && (T[e2 >> 2] = B.toHandle(n)), a;
    }, _n = {}, Te = (t) => {
      var e2 = _n[t];
      return e2 === void 0 ? F(t) : e2;
    }, xn = (t, e2, r) => {
      var n = 8, [a, ...i] = Pn(t, e2), s = a.toWireType.bind(a), u = i.map((y) => y.readValueFromPointer.bind(y));
      t--;
      var c = new Array(t), h = (y, C, P, S) => {
        for (var x = 0, O = 0; O < t; ++O) c[O] = u[O](S + x), x += n;
        var E;
        switch (r) {
          case 0:
            E = B.toValue(y).apply(null, c);
            break;
          case 2:
            E = Reflect.construct(B.toValue(y), c);
            break;
          case 3:
            E = c[0];
            break;
          case 1:
            E = B.toValue(y)[Te(C)](...c);
            break;
        }
        return On(s, P, E);
      }, p = `methodCaller<(${i.map((y) => y.name)}) => ${a.name}>`;
      return Tn(Ut(p, h));
    }, Sn = (t) => t ? (t = Te(t), B.toHandle(globalThis[t])) : B.toHandle(globalThis), In = (t) => {
      t > 9 && (J[t + 1] += 1);
    }, Dn = (t, e2, r, n, a) => zt[t](e2, r, n, a), Mn = (t) => {
      var e2 = B.toValue(t);
      Lt(e2), Nt(t);
    }, An = (t, e2, r, n) => {
      var a = (/* @__PURE__ */ new Date()).getFullYear(), i = new Date(a, 0, 1), s = new Date(a, 6, 1), u = i.getTimezoneOffset(), c = s.getTimezoneOffset(), h = Math.max(u, c);
      T[t >> 2] = h * 60, ot[e2 >> 2] = +(u != c);
      var p = (P) => {
        var S = P >= 0 ? "-" : "+", x = Math.abs(P), O = String(Math.floor(x / 60)).padStart(2, "0"), E = String(x % 60).padStart(2, "0");
        return `UTC${S}${O}${E}`;
      }, y = p(u), C = p(c);
      c < u ? (rt(y, r, 17), rt(C, n, 17)) : (rt(y, n, 17), rt(C, r, 17));
    }, Fn = () => 2147483648, Rn = (t, e2) => Math.ceil(t / e2) * e2, Ln = (t) => {
      var e2 = Pt.buffer.byteLength, r = (t - e2 + 65535) / 65536 | 0;
      try {
        return Pt.grow(r), re(), 1;
      } catch {
      }
    }, jn = (t) => {
      var e2 = W.length;
      t >>>= 0;
      var r = Fn();
      if (t > r) return false;
      for (var n = 1; n <= 4; n *= 2) {
        var a = e2 * (1 + 0.2 / n);
        a = Math.min(a, t + 100663296);
        var i = Math.min(r, Rn(Math.max(t, a), 65536)), s = Ln(i);
        if (s) return true;
      }
      return false;
    }, Gt = {}, Bn = () => _ || "./this.program", ct = () => {
      if (!ct.strings) {
        var t = (typeof navigator == "object" && navigator.language || "C").replace("-", "_") + ".UTF-8", e2 = {
          USER: "web_user",
          LOGNAME: "web_user",
          PATH: "/",
          PWD: "/",
          HOME: "/home/web_user",
          LANG: t,
          _: Bn()
        };
        for (var r in Gt) Gt[r] === void 0 ? delete e2[r] : e2[r] = Gt[r];
        var n = [];
        for (var r in e2) n.push(`${r}=${e2[r]}`);
        ct.strings = n;
      }
      return ct.strings;
    }, Un = (t, e2) => {
      var r = 0, n = 0;
      for (var a of ct()) {
        var i = e2 + r;
        T[t + n >> 2] = i, r += rt(a, i, 1 / 0) + 1, n += 4;
      }
      return 0;
    }, Vn = (t, e2) => {
      var r = ct();
      T[t >> 2] = r.length;
      var n = 0;
      for (var a of r) n += ge(a) + 1;
      return T[e2 >> 2] = n, 0;
    }, Wn = (t) => 52;
    function Hn(t, e2, r, n, a) {
      return 70;
    }
    var kn = [null, [], []], Nn = (t, e2) => {
      var r = kn[t];
      e2 === 0 || e2 === 10 ? ((t === 1 ? nt : V)($e(r)), r.length = 0) : r.push(e2);
    }, zn = (t, e2, r, n) => {
      for (var a = 0, i = 0; i < r; i++) {
        var s = T[e2 >> 2], u = T[e2 + 4 >> 2];
        e2 += 8;
        for (var c = 0; c < u; c++) Nn(t, W[s + c]);
        a += u;
      }
      return T[n >> 2] = a, 0;
    }, Gn = (t) => t;
    if (Ar(), zr(), f.noExitRuntime && f.noExitRuntime, f.print && (nt = f.print), f.printErr && (V = f.printErr), f.wasmBinary && (q = f.wasmBinary), f.arguments && f.arguments, f.thisProgram && (_ = f.thisProgram), f.preInit) for (typeof f.preInit == "function" && (f.preInit = [f.preInit]); f.preInit.length > 0; ) f.preInit.shift()();
    var Ee, z, Xt, Pe, v, Oe, _e, xe, Se, Ie, De, Me, Ae, Pt, Fe;
    function Xn(t) {
      Ee = t.ya, z = f._free = t.za, Xt = f._malloc = t.Ba, Pe = t.Ca, v = t.Da, Oe = t.Ea, _e = t.Fa, xe = t.Ga, Se = t.Ha, Ie = t.Ia, De = t.Ja, N.viijii = t.Ka, Me = N.iiijj = t.La, N.jiji = t.Ma, Ae = N.jiiii = t.Na, N.iiiiij = t.Oa, N.iiiiijj = t.Pa, N.iiiiiijj = t.Qa, Pt = t.wa, Fe = t.Aa;
    }
    var qn = {
      s: vr,
      w: mr,
      a: gr,
      j: wr,
      m: br,
      Q: $r,
      p: Cr,
      U: Tr,
      d: Er,
      ca: Pr,
      ta: _r,
      ba: xr,
      oa: Ir,
      ra: Zr,
      qa: Jr,
      H: Kr,
      ma: tn,
      X: rn,
      Y: nn,
      x: on,
      t: sn,
      sa: cn,
      na: hn,
      R: wn,
      I: bn,
      ua: $n,
      pa: Cn,
      N: xn,
      va: Nt,
      D: Sn,
      S: In,
      M: Dn,
      ia: Mn,
      da: An,
      ga: jn,
      ea: Un,
      fa: Vn,
      ha: Wn,
      $: Hn,
      V: zn,
      K: ma,
      C: ba,
      Z: ea,
      T: Oa,
      r: da,
      b: Kn,
      E: va,
      ka: Ca,
      c: ra,
      ja: Ta,
      h: ta,
      i: oa,
      q: ca,
      P: ya,
      v: fa,
      F: ha,
      L: pa,
      z: $a,
      J: _a,
      aa: xa,
      _: Sa,
      f: na,
      l: Yn,
      e: Jn,
      g: Qn,
      O: Pa,
      k: Zn,
      la: ga,
      o: la,
      B: ia,
      u: wa,
      W: ua,
      A: Ea,
      n: aa,
      G: sa,
      y: Gn
    };
    function Yn(t, e2) {
      var r = g();
      try {
        w(t)(e2);
      } catch (n) {
        if (m(r), n !== n + 0) throw n;
        v(1, 0);
      }
    }
    function Zn(t, e2, r, n, a) {
      var i = g();
      try {
        w(t)(e2, r, n, a);
      } catch (s) {
        if (m(i), s !== s + 0) throw s;
        v(1, 0);
      }
    }
    function Qn(t, e2, r, n) {
      var a = g();
      try {
        w(t)(e2, r, n);
      } catch (i) {
        if (m(a), i !== i + 0) throw i;
        v(1, 0);
      }
    }
    function Jn(t, e2, r) {
      var n = g();
      try {
        w(t)(e2, r);
      } catch (a) {
        if (m(n), a !== a + 0) throw a;
        v(1, 0);
      }
    }
    function Kn(t, e2) {
      var r = g();
      try {
        return w(t)(e2);
      } catch (n) {
        if (m(r), n !== n + 0) throw n;
        v(1, 0);
      }
    }
    function ta(t, e2, r, n) {
      var a = g();
      try {
        return w(t)(e2, r, n);
      } catch (i) {
        if (m(a), i !== i + 0) throw i;
        v(1, 0);
      }
    }
    function ea(t, e2, r, n, a, i) {
      var s = g();
      try {
        return w(t)(e2, r, n, a, i);
      } catch (u) {
        if (m(s), u !== u + 0) throw u;
        v(1, 0);
      }
    }
    function ra(t, e2, r) {
      var n = g();
      try {
        return w(t)(e2, r);
      } catch (a) {
        if (m(n), a !== a + 0) throw a;
        v(1, 0);
      }
    }
    function na(t) {
      var e2 = g();
      try {
        w(t)();
      } catch (r) {
        if (m(e2), r !== r + 0) throw r;
        v(1, 0);
      }
    }
    function aa(t, e2, r, n, a, i, s, u, c, h, p) {
      var y = g();
      try {
        w(t)(e2, r, n, a, i, s, u, c, h, p);
      } catch (C) {
        if (m(y), C !== C + 0) throw C;
        v(1, 0);
      }
    }
    function oa(t, e2, r, n, a) {
      var i = g();
      try {
        return w(t)(e2, r, n, a);
      } catch (s) {
        if (m(i), s !== s + 0) throw s;
        v(1, 0);
      }
    }
    function ia(t, e2, r, n, a, i, s) {
      var u = g();
      try {
        w(t)(e2, r, n, a, i, s);
      } catch (c) {
        if (m(u), c !== c + 0) throw c;
        v(1, 0);
      }
    }
    function sa(t, e2, r, n, a, i, s, u, c, h, p, y, C, P, S, x) {
      var O = g();
      try {
        w(t)(e2, r, n, a, i, s, u, c, h, p, y, C, P, S, x);
      } catch (E) {
        if (m(O), E !== E + 0) throw E;
        v(1, 0);
      }
    }
    function ua(t, e2, r, n, a, i, s, u, c) {
      var h = g();
      try {
        w(t)(e2, r, n, a, i, s, u, c);
      } catch (p) {
        if (m(h), p !== p + 0) throw p;
        v(1, 0);
      }
    }
    function ca(t, e2, r, n, a, i) {
      var s = g();
      try {
        return w(t)(e2, r, n, a, i);
      } catch (u) {
        if (m(s), u !== u + 0) throw u;
        v(1, 0);
      }
    }
    function la(t, e2, r, n, a, i) {
      var s = g();
      try {
        w(t)(e2, r, n, a, i);
      } catch (u) {
        if (m(s), u !== u + 0) throw u;
        v(1, 0);
      }
    }
    function fa(t, e2, r, n, a, i, s) {
      var u = g();
      try {
        return w(t)(e2, r, n, a, i, s);
      } catch (c) {
        if (m(u), c !== c + 0) throw c;
        v(1, 0);
      }
    }
    function ha(t, e2, r, n, a, i, s, u) {
      var c = g();
      try {
        return w(t)(e2, r, n, a, i, s, u);
      } catch (h) {
        if (m(c), h !== h + 0) throw h;
        v(1, 0);
      }
    }
    function da(t) {
      var e2 = g();
      try {
        return w(t)();
      } catch (r) {
        if (m(e2), r !== r + 0) throw r;
        v(1, 0);
      }
    }
    function pa(t, e2, r, n, a, i, s, u, c) {
      var h = g();
      try {
        return w(t)(e2, r, n, a, i, s, u, c);
      } catch (p) {
        if (m(h), p !== p + 0) throw p;
        v(1, 0);
      }
    }
    function ya(t, e2, r, n, a, i, s) {
      var u = g();
      try {
        return w(t)(e2, r, n, a, i, s);
      } catch (c) {
        if (m(u), c !== c + 0) throw c;
        v(1, 0);
      }
    }
    function va(t, e2, r, n) {
      var a = g();
      try {
        return w(t)(e2, r, n);
      } catch (i) {
        if (m(a), i !== i + 0) throw i;
        v(1, 0);
      }
    }
    function ma(t, e2, r, n) {
      var a = g();
      try {
        return w(t)(e2, r, n);
      } catch (i) {
        if (m(a), i !== i + 0) throw i;
        v(1, 0);
      }
    }
    function ga(t, e2, r, n, a, i, s, u) {
      var c = g();
      try {
        w(t)(e2, r, n, a, i, s, u);
      } catch (h) {
        if (m(c), h !== h + 0) throw h;
        v(1, 0);
      }
    }
    function wa(t, e2, r, n, a, i, s, u) {
      var c = g();
      try {
        w(t)(e2, r, n, a, i, s, u);
      } catch (h) {
        if (m(c), h !== h + 0) throw h;
        v(1, 0);
      }
    }
    function ba(t, e2, r, n, a, i) {
      var s = g();
      try {
        return w(t)(e2, r, n, a, i);
      } catch (u) {
        if (m(s), u !== u + 0) throw u;
        v(1, 0);
      }
    }
    function $a(t, e2, r, n, a, i, s, u, c, h) {
      var p = g();
      try {
        return w(t)(e2, r, n, a, i, s, u, c, h);
      } catch (y) {
        if (m(p), y !== y + 0) throw y;
        v(1, 0);
      }
    }
    function Ca(t, e2, r) {
      var n = g();
      try {
        return w(t)(e2, r);
      } catch (a) {
        if (m(n), a !== a + 0) throw a;
        v(1, 0);
      }
    }
    function Ta(t, e2, r, n, a) {
      var i = g();
      try {
        return w(t)(e2, r, n, a);
      } catch (s) {
        if (m(i), s !== s + 0) throw s;
        v(1, 0);
      }
    }
    function Ea(t, e2, r, n, a, i, s, u, c, h) {
      var p = g();
      try {
        w(t)(e2, r, n, a, i, s, u, c, h);
      } catch (y) {
        if (m(p), y !== y + 0) throw y;
        v(1, 0);
      }
    }
    function Pa(t, e2, r, n, a, i, s) {
      var u = g();
      try {
        w(t)(e2, r, n, a, i, s);
      } catch (c) {
        if (m(u), c !== c + 0) throw c;
        v(1, 0);
      }
    }
    function Oa(t, e2, r, n) {
      var a = g();
      try {
        return w(t)(e2, r, n);
      } catch (i) {
        if (m(a), i !== i + 0) throw i;
        v(1, 0);
      }
    }
    function _a(t, e2, r, n, a, i, s, u, c, h, p, y) {
      var C = g();
      try {
        return w(t)(e2, r, n, a, i, s, u, c, h, p, y);
      } catch (P) {
        if (m(C), P !== P + 0) throw P;
        v(1, 0);
      }
    }
    function xa(t, e2, r, n, a, i, s) {
      var u = g();
      try {
        return Me(t, e2, r, n, a, i, s);
      } catch (c) {
        if (m(u), c !== c + 0) throw c;
        v(1, 0);
      }
    }
    function Sa(t, e2, r, n, a) {
      var i = g();
      try {
        return Ae(t, e2, r, n, a);
      } catch (s) {
        if (m(i), s !== s + 0) throw s;
        v(1, 0);
      }
    }
    function Ia() {
      ar();
      function t() {
        var e2, r;
        f.calledRun = true, !ht && (or(), (e2 = Qt) === null || e2 === void 0 || e2(f), (r = f.onRuntimeInitialized) === null || r === void 0 || r.call(f), ir());
      }
      f.setStatus ? (f.setStatus("Running..."), setTimeout(() => {
        setTimeout(() => f.setStatus(""), 1), t();
      }, 1)) : t();
    }
    var lt;
    return lt = yield dr(), Ia(), ee ? l = f : l = new Promise((t, e2) => {
      Qt = t, Jt = e2;
    }), l;
  });
}
function qe(o) {
  return Xe(Zt, o);
}
function Za(o, l) {
  return __async(this, null, function* () {
    return Ya(Zt, o, l);
  });
}
var Ye = [["aztec", "Aztec"], ["code_128", "Code128"], ["code_39", "Code39"], ["code_93", "Code93"], ["codabar", "Codabar"], ["databar", "DataBar"], ["databar_expanded", "DataBarExpanded"], ["databar_limited", "DataBarLimited"], ["data_matrix", "DataMatrix"], ["dx_film_edge", "DXFilmEdge"], ["ean_13", "EAN-13"], ["ean_8", "EAN-8"], ["itf", "ITF"], ["maxi_code", "MaxiCode"], ["micro_qr_code", "MicroQRCode"], ["pdf417", "PDF417"], ["qr_code", "QRCode"], ["rm_qr_code", "rMQRCode"], ["upc_a", "UPC-A"], ["upc_e", "UPC-E"], ["linear_codes", "Linear-Codes"], ["matrix_codes", "Matrix-Codes"], ["any", "Any"]];
var Qa = [...Ye, ["unknown"]].map((o) => o[0]);
var Yt = new Map(Ye);
function Ja(o) {
  for (const [l, d] of Yt) if (o === d) return l;
  return "unknown";
}
function Ka(o) {
  if (Ze(o)) return {
    width: o.naturalWidth,
    height: o.naturalHeight
  };
  if (Qe(o)) return {
    width: o.width.baseVal.value,
    height: o.height.baseVal.value
  };
  if (Je(o)) return {
    width: o.videoWidth,
    height: o.videoHeight
  };
  if (tr(o)) return {
    width: o.width,
    height: o.height
  };
  if (rr(o)) return {
    width: o.displayWidth,
    height: o.displayHeight
  };
  if (Ke(o)) return {
    width: o.width,
    height: o.height
  };
  if (er(o)) return {
    width: o.width,
    height: o.height
  };
  throw new TypeError("The provided value is not of type '(Blob or HTMLCanvasElement or HTMLImageElement or HTMLVideoElement or ImageBitmap or ImageData or OffscreenCanvas or SVGImageElement or VideoFrame)'.");
}
function Ze(o) {
  var l, d;
  try {
    return o instanceof ((d = (l = o == null ? void 0 : o.ownerDocument) == null ? void 0 : l.defaultView) == null ? void 0 : d.HTMLImageElement);
  } catch {
    return false;
  }
}
function Qe(o) {
  var l, d;
  try {
    return o instanceof ((d = (l = o == null ? void 0 : o.ownerDocument) == null ? void 0 : l.defaultView) == null ? void 0 : d.SVGImageElement);
  } catch {
    return false;
  }
}
function Je(o) {
  var l, d;
  try {
    return o instanceof ((d = (l = o == null ? void 0 : o.ownerDocument) == null ? void 0 : l.defaultView) == null ? void 0 : d.HTMLVideoElement);
  } catch {
    return false;
  }
}
function Ke(o) {
  var l, d;
  try {
    return o instanceof ((d = (l = o == null ? void 0 : o.ownerDocument) == null ? void 0 : l.defaultView) == null ? void 0 : d.HTMLCanvasElement);
  } catch {
    return false;
  }
}
function tr(o) {
  try {
    return o instanceof ImageBitmap || Object.prototype.toString.call(o) === "[object ImageBitmap]";
  } catch {
    return false;
  }
}
function er(o) {
  try {
    return o instanceof OffscreenCanvas || Object.prototype.toString.call(o) === "[object OffscreenCanvas]";
  } catch {
    return false;
  }
}
function rr(o) {
  try {
    return o instanceof VideoFrame || Object.prototype.toString.call(o) === "[object VideoFrame]";
  } catch {
    return false;
  }
}
function to(o) {
  try {
    return o instanceof Blob || Object.prototype.toString.call(o) === "[object Blob]";
  } catch {
    return false;
  }
}
function eo(o) {
  try {
    return o instanceof ImageData || Object.prototype.toString.call(o) === "[object ImageData]";
  } catch {
    return false;
  }
}
function ro(o, l) {
  try {
    const d = new OffscreenCanvas(o, l);
    if (d.getContext("2d") instanceof OffscreenCanvasRenderingContext2D) return d;
    throw void 0;
  } catch {
    const d = document.createElement("canvas");
    return d.width = o, d.height = l, d;
  }
}
function nr(o) {
  return __async(this, null, function* () {
    if (Ze(o) && !(yield io(o))) throw new DOMException("Failed to load or decode HTMLImageElement.", "InvalidStateError");
    if (Qe(o) && !(yield so(o))) throw new DOMException("Failed to load or decode SVGImageElement.", "InvalidStateError");
    if (rr(o) && uo(o)) throw new DOMException("VideoFrame is closed.", "InvalidStateError");
    if (Je(o) && (o.readyState === 0 || o.readyState === 1)) throw new DOMException("Invalid element or state.", "InvalidStateError");
    if (tr(o) && lo(o)) throw new DOMException("The image source is detached.", "InvalidStateError");
    const {
      width: l,
      height: d
    } = Ka(o);
    if (l === 0 || d === 0) return null;
    const f = ro(l, d).getContext("2d");
    f.drawImage(o, 0, 0);
    try {
      return f.getImageData(0, 0, l, d);
    } catch {
      throw new DOMException("Source would taint origin.", "SecurityError");
    }
  });
}
function no(o) {
  return __async(this, null, function* () {
    let l;
    try {
      l = yield createImageBitmap(o);
    } catch {
      try {
        if (globalThis.Image) {
          l = new Image();
          let f = "";
          try {
            f = URL.createObjectURL(o), l.src = f, yield l.decode();
          } finally {
            URL.revokeObjectURL(f);
          }
        } else return o;
      } catch {
        throw new DOMException("Failed to load or decode Blob.", "InvalidStateError");
      }
    }
    return yield nr(l);
  });
}
function ao(o) {
  const {
    width: l,
    height: d
  } = o;
  if (l === 0 || d === 0) return null;
  const b = o.getContext("2d");
  try {
    return b.getImageData(0, 0, l, d);
  } catch {
    throw new DOMException("Source would taint origin.", "SecurityError");
  }
}
function oo(o) {
  return __async(this, null, function* () {
    if (to(o)) return yield no(o);
    if (eo(o)) {
      if (co(o)) throw new DOMException("The image data has been detached.", "InvalidStateError");
      return o;
    }
    return Ke(o) || er(o) ? ao(o) : yield nr(o);
  });
}
function io(o) {
  return __async(this, null, function* () {
    try {
      return yield o.decode(), true;
    } catch {
      return false;
    }
  });
}
function so(o) {
  return __async(this, null, function* () {
    var l;
    try {
      return yield (l = o.decode) == null ? void 0 : l.call(o), true;
    } catch {
      return false;
    }
  });
}
function uo(o) {
  return o.format === null;
}
function co(o) {
  return o.data.buffer.byteLength === 0;
}
function lo(o) {
  return o.width === 0 && o.height === 0;
}
function Ge(o, l) {
  return fo(o) ? new DOMException(`${l}: ${o.message}`, o.name) : ho(o) ? new o.constructor(`${l}: ${o.message}`) : new Error(`${l}: ${o}`);
}
function fo(o) {
  return o instanceof DOMException || Object.prototype.toString.call(o) === "[object DOMException]";
}
function ho(o) {
  return o instanceof Error || Object.prototype.toString.call(o) === "[object Error]";
}
var ft;
var bo = class {
  constructor(l = {}) {
    He(this, ft);
    var d;
    try {
      const b = (d = l == null ? void 0 : l.formats) == null ? void 0 : d.filter((f) => f !== "unknown");
      if ((b == null ? void 0 : b.length) === 0) throw new TypeError("Hint option provided, but is empty.");
      for (const f of b != null ? b : []) if (!Yt.has(f)) throw new TypeError(`Failed to read the 'formats' property from 'BarcodeDetectorOptions': The provided value '${f}' is not a valid enum value of type BarcodeFormat.`);
      ke(this, ft, b != null ? b : []), qe({
        fireImmediately: true
      }).catch(() => {
      });
    } catch (b) {
      throw Ge(b, "Failed to construct 'BarcodeDetector'");
    }
  }
  static getSupportedFormats() {
    return __async(this, null, function* () {
      return Qa.filter((l) => l !== "unknown");
    });
  }
  detect(l) {
    return __async(this, null, function* () {
      try {
        const d = yield oo(l);
        if (d === null) return [];
        let b;
        const f = {
          tryCode39ExtendedMode: false,
          textMode: "Plain",
          formats: We(this, ft).map((I) => Yt.get(I))
        };
        try {
          b = yield Za(d, f);
        } catch (I) {
          throw console.error(I), new DOMException("Barcode detection service unavailable.", "NotSupportedError");
        }
        return b.map((I) => {
          const {
            topLeft: {
              x: D,
              y: M
            },
            topRight: {
              x: _,
              y: A
            },
            bottomLeft: {
              x: U,
              y: G
            },
            bottomRight: {
              x: tt,
              y: X
            }
          } = I.position, nt = Math.min(D, _, U, tt), V = Math.min(M, A, G, X), q = Math.max(D, _, U, tt), ht = Math.max(M, A, G, X);
          return {
            boundingBox: new DOMRectReadOnly(nt, V, q - nt, ht - V),
            rawValue: I.text,
            format: Ja(I.format),
            cornerPoints: [{
              x: D,
              y: M
            }, {
              x: _,
              y: A
            }, {
              x: tt,
              y: X
            }, {
              x: U,
              y: G
            }]
          };
        });
      } catch (d) {
        throw Ge(d, "Failed to execute 'detect' on 'BarcodeDetector'");
      }
    });
  }
};
ft = /* @__PURE__ */ new WeakMap();

// node_modules/barcode-detector/dist/es/polyfill.js
var e;
(e = globalThis.BarcodeDetector) != null || (globalThis.BarcodeDetector = bo);

// src/main.ts
function HttpLoaderFactory(httpClient) {
  return new TranslateHttpLoader(httpClient);
}
bootstrapApplication(AppComponent, {
  providers: [
    provideLottieOptions({
      player: () => import(
        /* webpackChunkName: 'lottie-web' */
        "./lottie-6DKF7LC3.js"
      )
    }),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideNgxStripe(environment.stripePublicKey),
    provideIonicAngular({ innerHTMLTemplatesEnabled: true, mode: "ios" }),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    ...sentryProviders,
    importProvidersFrom(IonicStorageModule.forRoot({}), InlineSVGModule.forRoot(), TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })),
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
});
configureAmplify();
export {
  HttpLoaderFactory
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9Abmd4LXRyYW5zbGF0ZS9odHRwLWxvYWRlci9kaXN0L2Zlc20yMDIyL25neC10cmFuc2xhdGUtaHR0cC1sb2FkZXIubWpzIiwibm9kZV9tb2R1bGVzL0Bhd3MtYW1wbGlmeS9hdXRoL2Rpc3QvZXNtL3Byb3ZpZGVycy9jb2duaXRvL2NyZWRlbnRpYWxzUHJvdmlkZXIvaW5kZXgubWpzIiwibm9kZV9tb2R1bGVzL2F3cy1hbXBsaWZ5L2Rpc3QvZXNtL2luaXRTaW5nbGV0b24ubWpzIiwic3JjL3V0aWxzL2FtcGxpZnkuY29uZmlnLnRzIiwic3JjL2FwcC9ndWFyZHMvdmVyaWZ5LXBob25lLmd1YXJkLnRzIiwic3JjL2FwcC9ndWFyZHMvbGF1bmNoLmd1YXJkLnRzIiwic3JjL2FwcC9ndWFyZHMvYXV0aC5ndWFyZC50cyIsInNyYy9hcHAvZ3VhcmRzL3FyLWNvZGUuZ3VhcmQudHMiLCJzcmMvYXBwL2FwcC5yb3V0ZXMudHMiLCJub2RlX21vZHVsZXMvQGlvbmljL3B3YS1lbGVtZW50cy9kaXN0L2VzbS9sb2FkZXIuanMiLCJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWxzL2Nvb2tpZXMvY29va2llcy5jb21wb25lbnQudHMiLCJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWxzL2Nvb2tpZXMvY29va2llcy5jb21wb25lbnQuaHRtbCIsIm5vZGVfbW9kdWxlcy9AY2FwYWNpdG9yL3NjcmVlbi1vcmllbnRhdGlvbi9kaXN0L2VzbS9pbmRleC5qcyIsInNyYy9hcHAvc2VydmljZXMvZXh0ZXJuYWwvc2VudHJ5LnNlcnZpY2UudHMiLCJzcmMvYXBwL3NlcnZpY2VzL3V0aWxzL3VybC5zZXJ2aWNlLnRzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnRzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJzcmMvYXBpLmludGVyY2VwdG9yLnRzIiwic3JjL3V0aWxzL3NlbnRyeS5jb25maWcudHMiLCJub2RlX21vZHVsZXMvYmFyY29kZS1kZXRlY3Rvci9kaXN0L2VzL3BvbnlmaWxsLmpzIiwibm9kZV9tb2R1bGVzL2JhcmNvZGUtZGV0ZWN0b3IvZGlzdC9lcy9wb2x5ZmlsbC5qcyIsInNyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFRyYW5zbGF0ZUh0dHBMb2FkZXIge1xuICBodHRwO1xuICBwcmVmaXg7XG4gIHN1ZmZpeDtcbiAgY29uc3RydWN0b3IoaHR0cCwgcHJlZml4ID0gXCIvYXNzZXRzL2kxOG4vXCIsIHN1ZmZpeCA9IFwiLmpzb25cIikge1xuICAgIHRoaXMuaHR0cCA9IGh0dHA7XG4gICAgdGhpcy5wcmVmaXggPSBwcmVmaXg7XG4gICAgdGhpcy5zdWZmaXggPSBzdWZmaXg7XG4gIH1cbiAgLyoqXG4gICAqIEdldHMgdGhlIHRyYW5zbGF0aW9ucyBmcm9tIHRoZSBzZXJ2ZXJcbiAgICovXG4gIGdldFRyYW5zbGF0aW9uKGxhbmcpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnByZWZpeH0ke2xhbmd9JHt0aGlzLnN1ZmZpeH1gKTtcbiAgfVxufVxuXG4vKipcbiAqIEdlbmVyYXRlZCBidW5kbGUgaW5kZXguIERvIG5vdCBlZGl0LlxuICovXG5cbmV4cG9ydCB7IFRyYW5zbGF0ZUh0dHBMb2FkZXIgfTtcbiIsImltcG9ydCB7IGRlZmF1bHRTdG9yYWdlIH0gZnJvbSAnQGF3cy1hbXBsaWZ5L2NvcmUnO1xuaW1wb3J0IHsgRGVmYXVsdElkZW50aXR5SWRTdG9yZSB9IGZyb20gJy4vSWRlbnRpdHlJZFN0b3JlLm1qcyc7XG5pbXBvcnQgeyBDb2duaXRvQVdTQ3JlZGVudGlhbHNBbmRJZGVudGl0eUlkUHJvdmlkZXIgfSBmcm9tICcuL2NyZWRlbnRpYWxzUHJvdmlkZXIubWpzJztcblxuLy8gQ29weXJpZ2h0IEFtYXpvbi5jb20sIEluYy4gb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuLyoqXG4gKiBDb2duaXRvIHNwZWNpZmljIGltcGxtZW50YXRpb24gb2YgdGhlIENyZWRlbnRpYWxzUHJvdmlkZXIgaW50ZXJmYWNlXG4gKiB0aGF0IG1hbmFnZXMgc2V0dGluZyBhbmQgZ2V0dGluZyBvZiBBV1MgQ3JlZGVudGlhbHMuXG4gKlxuICogQHRocm93cyBjb25maWd1cmF0aW9uIGV4cGVjdGlvbnM6IGBJbnZhbGlkSWRlbnRpdHlQb29sSWRFeGNlcHRpb25gXG4gKiAgLSBBdXRoIGVycm9ycyB0aGF0IG1heSBhcmlzZSBmcm9tIG1pc2NvbmZpZ3VyYXRpb24uXG4gKiBAdGhyb3dzIHNlcnZpY2UgZXhwZWN0aW9uczoge0BsaW5rIEdldENyZWRlbnRpYWxzRm9ySWRlbnRpdHlFeGNlcHRpb259LCB7QGxpbmsgR2V0SWRFeGNlcHRpb259XG4gKlxuICovXG5jb25zdCBjb2duaXRvQ3JlZGVudGlhbHNQcm92aWRlciA9IG5ldyBDb2duaXRvQVdTQ3JlZGVudGlhbHNBbmRJZGVudGl0eUlkUHJvdmlkZXIobmV3IERlZmF1bHRJZGVudGl0eUlkU3RvcmUoZGVmYXVsdFN0b3JhZ2UpKTtcbmV4cG9ydCB7IENvZ25pdG9BV1NDcmVkZW50aWFsc0FuZElkZW50aXR5SWRQcm92aWRlciwgRGVmYXVsdElkZW50aXR5SWRTdG9yZSwgY29nbml0b0NyZWRlbnRpYWxzUHJvdmlkZXIgfTtcbiIsImltcG9ydCB7IEFtcGxpZnksIENvb2tpZVN0b3JhZ2UsIGRlZmF1bHRTdG9yYWdlIH0gZnJvbSAnQGF3cy1hbXBsaWZ5L2NvcmUnO1xuaW1wb3J0IHsgcGFyc2VBbXBsaWZ5Q29uZmlnIH0gZnJvbSAnQGF3cy1hbXBsaWZ5L2NvcmUvaW50ZXJuYWxzL3V0aWxzJztcbmltcG9ydCB7IENvZ25pdG9BV1NDcmVkZW50aWFsc0FuZElkZW50aXR5SWRQcm92aWRlciwgRGVmYXVsdElkZW50aXR5SWRTdG9yZSwgY29nbml0b0NyZWRlbnRpYWxzUHJvdmlkZXIsIGNvZ25pdG9Vc2VyUG9vbHNUb2tlblByb3ZpZGVyIH0gZnJvbSAnQGF3cy1hbXBsaWZ5L2F1dGgvY29nbml0byc7XG5cbi8vIENvcHlyaWdodCBBbWF6b24uY29tLCBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbmNvbnN0IERlZmF1bHRBbXBsaWZ5ID0ge1xuICAvKipcbiAgICogQ29uZmlndXJlcyBBbXBsaWZ5IHdpdGggdGhlIHtAbGluayByZXNvdXJjZUNvbmZpZ30gYW5kIHtAbGluayBsaWJyYXJ5T3B0aW9uc30uXG4gICAqXG4gICAqIEBwYXJhbSByZXNvdXJjZUNvbmZpZyBUaGUge0BsaW5rIFJlc291cmNlc0NvbmZpZ30gb2JqZWN0IHRoYXQgaXMgdHlwaWNhbGx5IGltcG9ydGVkIGZyb20gdGhlXG4gICAqIGBhbXBsaWZ5Y29uZmlndXJhdGlvbi5qc29uYCBmaWxlLiBJdCBjYW4gYWxzbyBiZSBhbiBvYmplY3QgbGl0ZXJhbCBjcmVhdGVkIGlubGluZSB3aGVuIGNhbGxpbmcgYEFtcGxpZnkuY29uZmlndXJlYC5cbiAgICogQHBhcmFtIGxpYnJhcnlPcHRpb25zIFRoZSB7QGxpbmsgTGlicmFyeU9wdGlvbnN9IGFkZGl0aW9uYWwgb3B0aW9ucyBmb3IgdGhlIGxpYnJhcnkuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGltcG9ydCBjb25maWcgZnJvbSAnLi9hbXBsaWZ5Y29uZmlndXJhdGlvbi5qc29uJztcbiAgICpcbiAgICogQW1wbGlmeS5jb25maWd1cmUoY29uZmlnKTtcbiAgICovXG4gIGNvbmZpZ3VyZShyZXNvdXJjZUNvbmZpZywgbGlicmFyeU9wdGlvbnMpIHtcbiAgICBjb25zdCByZXNvbHZlZFJlc291cmNlQ29uZmlnID0gcGFyc2VBbXBsaWZ5Q29uZmlnKHJlc291cmNlQ29uZmlnKTtcbiAgICBjb25zdCBjb29raWVCYXNlZEtleVZhbHVlU3RvcmFnZSA9IG5ldyBDb29raWVTdG9yYWdlKHtcbiAgICAgIHNhbWVTaXRlOiAnbGF4J1xuICAgIH0pO1xuICAgIGNvbnN0IHJlc29sdmVkS2V5VmFsdWVTdG9yYWdlID0gbGlicmFyeU9wdGlvbnM/LnNzciA/IGNvb2tpZUJhc2VkS2V5VmFsdWVTdG9yYWdlIDogZGVmYXVsdFN0b3JhZ2U7XG4gICAgY29uc3QgcmVzb2x2ZWRDcmVkZW50aWFsc1Byb3ZpZGVyID0gbGlicmFyeU9wdGlvbnM/LnNzciA/IG5ldyBDb2duaXRvQVdTQ3JlZGVudGlhbHNBbmRJZGVudGl0eUlkUHJvdmlkZXIobmV3IERlZmF1bHRJZGVudGl0eUlkU3RvcmUoY29va2llQmFzZWRLZXlWYWx1ZVN0b3JhZ2UpKSA6IGNvZ25pdG9DcmVkZW50aWFsc1Byb3ZpZGVyO1xuICAgIC8vIElmIG5vIEF1dGggY29uZmlnIGlzIHByb3ZpZGVkLCBubyBzcGVjaWFsIGhhbmRsaW5nIHdpbGwgYmUgcmVxdWlyZWQsIGNvbmZpZ3VyZSBhcyBpcy5cbiAgICAvLyBPdGhlcndpc2UsIHdlIGNhbiBhc3N1bWUgYW4gQXV0aCBjb25maWcgaXMgcHJvdmlkZWQgZnJvbSBoZXJlIG9uLlxuICAgIGlmICghcmVzb2x2ZWRSZXNvdXJjZUNvbmZpZy5BdXRoKSB7XG4gICAgICBBbXBsaWZ5LmNvbmZpZ3VyZShyZXNvbHZlZFJlc291cmNlQ29uZmlnLCBsaWJyYXJ5T3B0aW9ucyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIElmIEF1dGggb3B0aW9ucyBhcmUgcHJvdmlkZWQsIGFsd2F5cyBqdXN0IGNvbmZpZ3VyZSBhcyBpcy5cbiAgICAvLyBPdGhlcndpc2UsIHdlIGNhbiBhc3N1bWUgbm8gQXV0aCBsaWJyYXJ5T3B0aW9ucyB3ZXJlIHByb3ZpZGVkIGZyb20gaGVyZSBvbi5cbiAgICBpZiAobGlicmFyeU9wdGlvbnM/LkF1dGgpIHtcbiAgICAgIEFtcGxpZnkuY29uZmlndXJlKHJlc29sdmVkUmVzb3VyY2VDb25maWcsIGxpYnJhcnlPcHRpb25zKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gSWYgbm8gQXV0aCBsaWJyYXJ5T3B0aW9ucyB3ZXJlIHByZXZpb3VzbHkgY29uZmlndXJlZCwgdGhlbiBhbHdheXMgYWRkIGRlZmF1bHQgcHJvdmlkZXJzLlxuICAgIGlmICghQW1wbGlmeS5saWJyYXJ5T3B0aW9ucy5BdXRoKSB7XG4gICAgICBjb2duaXRvVXNlclBvb2xzVG9rZW5Qcm92aWRlci5zZXRBdXRoQ29uZmlnKHJlc29sdmVkUmVzb3VyY2VDb25maWcuQXV0aCk7XG4gICAgICBjb2duaXRvVXNlclBvb2xzVG9rZW5Qcm92aWRlci5zZXRLZXlWYWx1ZVN0b3JhZ2UoXG4gICAgICAvLyBUT0RPOiBhbGxvdyBjb25maWd1cmUgd2l0aCBhIHB1YmxpYyBpbnRlcmZhY2VcbiAgICAgIHJlc29sdmVkS2V5VmFsdWVTdG9yYWdlKTtcbiAgICAgIEFtcGxpZnkuY29uZmlndXJlKHJlc29sdmVkUmVzb3VyY2VDb25maWcsIHtcbiAgICAgICAgLi4ubGlicmFyeU9wdGlvbnMsXG4gICAgICAgIEF1dGg6IHtcbiAgICAgICAgICB0b2tlblByb3ZpZGVyOiBjb2duaXRvVXNlclBvb2xzVG9rZW5Qcm92aWRlcixcbiAgICAgICAgICBjcmVkZW50aWFsc1Byb3ZpZGVyOiByZXNvbHZlZENyZWRlbnRpYWxzUHJvdmlkZXJcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIEF0IHRoaXMgcG9pbnQsIEF1dGggbGlicmFyeU9wdGlvbnMgd291bGQgaGF2ZSBiZWVuIHByZXZpb3VzbHkgY29uZmlndXJlZCBhbmQgbm8gb3ZlcnJpZGluZ1xuICAgIC8vIEF1dGggb3B0aW9ucyB3ZXJlIGdpdmVuLCBzbyB3ZSBzaG91bGQgcHJlc2VydmUgdGhlIGN1cnJlbnRseSBjb25maWd1cmVkIEF1dGggbGlicmFyeU9wdGlvbnMuXG4gICAgaWYgKGxpYnJhcnlPcHRpb25zKSB7XG4gICAgICBjb25zdCBhdXRoTGlicmFyeU9wdGlvbnMgPSBBbXBsaWZ5LmxpYnJhcnlPcHRpb25zLkF1dGg7XG4gICAgICAvLyBJZiBzc3IgaXMgcHJvdmlkZWQgdGhyb3VnaCBsaWJyYXJ5T3B0aW9ucywgd2Ugc2hvdWxkIHJlc3BlY3QgdGhlIGludGVudGlvbmFsIHJlY29uZmlndXJhdGlvbi5cbiAgICAgIGlmIChsaWJyYXJ5T3B0aW9ucy5zc3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb2duaXRvVXNlclBvb2xzVG9rZW5Qcm92aWRlci5zZXRLZXlWYWx1ZVN0b3JhZ2UoXG4gICAgICAgIC8vIFRPRE86IGFsbG93IGNvbmZpZ3VyZSB3aXRoIGEgcHVibGljIGludGVyZmFjZVxuICAgICAgICByZXNvbHZlZEtleVZhbHVlU3RvcmFnZSk7XG4gICAgICAgIGF1dGhMaWJyYXJ5T3B0aW9ucy5jcmVkZW50aWFsc1Byb3ZpZGVyID0gcmVzb2x2ZWRDcmVkZW50aWFsc1Byb3ZpZGVyO1xuICAgICAgfVxuICAgICAgQW1wbGlmeS5jb25maWd1cmUocmVzb2x2ZWRSZXNvdXJjZUNvbmZpZywge1xuICAgICAgICBBdXRoOiBhdXRoTGlicmFyeU9wdGlvbnMsXG4gICAgICAgIC4uLmxpYnJhcnlPcHRpb25zXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gRmluYWxseSwgaWYgdGhlcmUgd2VyZSBubyBsaWJyYXJ5T3B0aW9ucyBnaXZlbiBhdCBhbGwsIHdlIHNob3VsZCBzaW1wbHkgbm90IHRvdWNoIHRoZSBjdXJyZW50bHlcbiAgICAvLyBjb25maWd1cmVkIGxpYnJhcnlPcHRpb25zLlxuICAgIEFtcGxpZnkuY29uZmlndXJlKHJlc29sdmVkUmVzb3VyY2VDb25maWcpO1xuICB9LFxuICAvKipcbiAgICogUmV0dXJucyB0aGUge0BsaW5rIFJlc291cmNlc0NvbmZpZ30gb2JqZWN0IHBhc3NlZCBpbiBhcyB0aGUgYHJlc291cmNlQ29uZmlnYCBwYXJhbWV0ZXIgd2hlbiBjYWxsaW5nXG4gICAqIGBBbXBsaWZ5LmNvbmZpZ3VyZWAuXG4gICAqXG4gICAqIEByZXR1cm5zIEFuIHtAbGluayBSZXNvdXJjZXNDb25maWd9IG9iamVjdC5cbiAgICovXG4gIGdldENvbmZpZygpIHtcbiAgICByZXR1cm4gQW1wbGlmeS5nZXRDb25maWcoKTtcbiAgfVxufTtcbmV4cG9ydCB7IERlZmF1bHRBbXBsaWZ5IH07XG4iLCJpbXBvcnQgeyBBbXBsaWZ5IH0gZnJvbSAnYXdzLWFtcGxpZnknXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJ3NyYy9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnXG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmVBbXBsaWZ5KCk6IHZvaWQge1xuICBBbXBsaWZ5LmNvbmZpZ3VyZSh7XG4gICAgQXV0aDoge1xuICAgICAgQ29nbml0bzoge1xuICAgICAgICB1c2VyUG9vbElkOiBlbnZpcm9ubWVudC5jb2duaXRvLnVzZXJQb29sSWQsXG4gICAgICAgIHVzZXJQb29sQ2xpZW50SWQ6IGVudmlyb25tZW50LmNvZ25pdG8udXNlclBvb2xDbGllbnRJZCxcbiAgICAgICAgbG9naW5XaXRoOiB7XG4gICAgICAgICAgcGhvbmU6IHRydWUsXG4gICAgICAgICAgb2F1dGg6IHtcbiAgICAgICAgICAgIGRvbWFpbjogZW52aXJvbm1lbnQuY29nbml0by5kb21haW4sXG4gICAgICAgICAgICBzY29wZXM6IFtcbiAgICAgICAgICAgICAgJ2VtYWlsJyxcbiAgICAgICAgICAgICAgJ29wZW5pZCcsXG4gICAgICAgICAgICAgICdhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbicsXG4gICAgICAgICAgICAgICdwcm9maWxlJyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICByZWRpcmVjdFNpZ25JbjogWydodHRwOi8vYXV0aC5lY292ZWxvLm1vYmkvYXV0aC1maW5pc2gnXSxcbiAgICAgICAgICAgIHJlZGlyZWN0U2lnbk91dDogW1xuICAgICAgICAgICAgICBgaHR0cDovLyR7ZW52aXJvbm1lbnQucHJvZ3JhbX0uZWNvdmVsby5tb2JpL2xhbmRpbmdgLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogJ2NvZGUnLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbJ0dvb2dsZScsICdBcHBsZSddLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHNpZ25VcFZlcmlmaWNhdGlvbk1ldGhvZDogJ2NvZGUnLFxuICAgICAgICBwYXNzd29yZEZvcm1hdDoge1xuICAgICAgICAgIG1pbkxlbmd0aDogOCxcbiAgICAgICAgICByZXF1aXJlTG93ZXJjYXNlOiB0cnVlLFxuICAgICAgICAgIHJlcXVpcmVVcHBlcmNhc2U6IHRydWUsXG4gICAgICAgICAgcmVxdWlyZU51bWJlcnM6IHRydWUsXG4gICAgICAgICAgcmVxdWlyZVNwZWNpYWxDaGFyYWN0ZXJzOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnXG5pbXBvcnQgeyBvZiwgZnJvbSB9IGZyb20gJ3J4anMnXG5pbXBvcnQgeyBmZXRjaFVzZXJBdHRyaWJ1dGVzIH0gZnJvbSAnYXdzLWFtcGxpZnkvYXV0aCdcbmltcG9ydCB7IEVycm9ySGFuZGxlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy91dGlscy9lcnJvci1oYW5kbGVyLnNlcnZpY2UnXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBWZXJpZnlQaG9uZUd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgZXJyb3JIYW5kbGVyOiBFcnJvckhhbmRsZXJTZXJ2aWNlXG4gICkge31cblxuICBjYW5BY3RpdmF0ZSgpIHtcbiAgICByZXR1cm4gZnJvbShmZXRjaFVzZXJBdHRyaWJ1dGVzKCkpLnBpcGUoXG4gICAgICBtYXAoKGF0dHJpYnV0ZXMpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGF0dHJpYnV0ZXMucGhvbmVfbnVtYmVyICYmXG4gICAgICAgICAgYXR0cmlidXRlcy5waG9uZV9udW1iZXJfdmVyaWZpZWQgPT09ICd0cnVlJ1xuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9tYXAnXSlcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSksXG4gICAgICBjYXRjaEVycm9yKChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihlcnJvcilcbiAgICAgICAgcmV0dXJuIG9mKHRydWUpXG4gICAgICB9KVxuICAgIClcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgUm91dGVyLCBVcmxUcmVlLCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBMYXVuY2hHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgcHJpdmF0ZSBwcmV2aW91c1VybDogc3RyaW5nID0gJydcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgdGhpcy5yb3V0ZXIuZXZlbnRzXG4gICAgICAucGlwZShmaWx0ZXIoKGV2ZW50KSA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpKVxuICAgICAgLnN1YnNjcmliZSgoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLnByZXZpb3VzVXJsID0gZXZlbnQudXJsXG4gICAgICB9KVxuICB9XG5cbiAgYXN5bmMgY2FuQWN0aXZhdGUoKTogUHJvbWlzZTxib29sZWFuIHwgVXJsVHJlZT4ge1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgY29uc3QgaGFzU3RyaXBlU2V0dXBQYXJhbXMgPVxuICAgICAgdXJsLnNlYXJjaFBhcmFtcy5oYXMoJ3NldHVwX2ludGVudCcpICYmXG4gICAgICB1cmwuc2VhcmNoUGFyYW1zLmhhcygnc2V0dXBfaW50ZW50X2NsaWVudF9zZWNyZXQnKSAmJlxuICAgICAgdXJsLnNlYXJjaFBhcmFtcy5oYXMoJ3JlZGlyZWN0X3N0YXR1cycpXG5cbiAgICBpZiAoXG4gICAgICB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoJy9sYXVuY2gnKSB8fFxuICAgICAgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKCcvc2lnbnVwLW1pbmlmaWVkJykgfHxcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcygnL2FjY291bnQvcHJpdmFjeScpIHx8XG4gICAgICB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoJy9hY2NvdW50L3NldHRpbmdzL2NndScpIHx8XG4gICAgICB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoJy9yZW50aW5nJykgfHxcbiAgICAgIGhhc1N0cmlwZVNldHVwUGFyYW1zXG4gICAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGlmICghdGhpcy5wcmV2aW91c1VybC5pbmNsdWRlcygnL2xhdW5jaCcpKSB7XG4gICAgICBjb25zdCBjdXJyZW50VXJsID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXG4gICAgICByZXR1cm4gdGhpcy5yb3V0ZXIuY3JlYXRlVXJsVHJlZShbJy9sYXVuY2gnXSwge1xuICAgICAgICBxdWVyeVBhcmFtczogeyBuZXh0OiBjdXJyZW50VXJsIH0sXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlXG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIFJvdXRlciwgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJ1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9leHRlcm5hbC9hdXRoLnNlcnZpY2UnXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBBdXRoR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxuXG4gIGNhbkFjdGl2YXRlKCk6XG4gICAgfCBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPlxuICAgIHwgUHJvbWlzZTxib29sZWFuIHwgVXJsVHJlZT5cbiAgICB8IGJvb2xlYW5cbiAgICB8IFVybFRyZWUge1xuICAgIC8vIFbDqXJpZmllIHNpIGwndXRpbGlzYXRldXIgZXN0IGTDqWrDoCBjb25uZWN0w6lcbiAgICBpZiAodGhpcy5hdXRoU2VydmljZS5hdXRoU3RhdGUoKS5zdGF0ZSA9PT0gJ1NpZ25lZEluJykge1xuICAgICAgLy8gU2kgY29ubmVjdMOpLCByZWRpcmlnZSB2ZXJzIC9tYXBcbiAgICAgIHJldHVybiB0aGlzLnJvdXRlci5jcmVhdGVVcmxUcmVlKFsnL21hcCddKVxuICAgIH1cblxuICAgIC8vIFNpIG5vbiBjb25uZWN0w6ksIHBlcm1ldCBsJ2FjY8OocyDDoCBsYSByb3V0ZVxuICAgIHJldHVybiB0cnVlXG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnc3JjL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCdcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFFyQ29kZUd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxuXG4gIGNhbkFjdGl2YXRlKCkge1xuICAgIGlmIChlbnZpcm9ubWVudC5xcmNvZGUgPT09ICdlbmFibGVkJykge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMucm91dGVyLmNyZWF0ZVVybFRyZWUoWycvbWFwJ10pXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInXG5pbXBvcnQgeyBWZXJpZnlQaG9uZUd1YXJkIH0gZnJvbSAnLi9ndWFyZHMvdmVyaWZ5LXBob25lLmd1YXJkJ1xuaW1wb3J0IHsgTGF1bmNoR3VhcmQgfSBmcm9tICcuL2d1YXJkcy9sYXVuY2guZ3VhcmQnXG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tICcuL2d1YXJkcy9hdXRoLmd1YXJkJ1xuaW1wb3J0IHsgUXJDb2RlR3VhcmQgfSBmcm9tICcuL2d1YXJkcy9xci1jb2RlLmd1YXJkJ1xuXG5leHBvcnQgY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnJyxcbiAgICBwYXRoTWF0Y2g6ICdmdWxsJyxcbiAgICByZWRpcmVjdFRvOiAnbGF1bmNoP25leHQ9L21hcCcsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnbGF1bmNoJyxcbiAgICBsb2FkQ29tcG9uZW50OiAoKSA9PlxuICAgICAgaW1wb3J0KCcuL3BhZ2VzL2xhdW5jaC9sYXVuY2gucGFnZScpLnRoZW4oKG0pID0+IG0uTGF1bmNoUGFnZSksXG4gIH0sXG5cbiAge1xuICAgIHBhdGg6ICcnLFxuICAgIGNhbkFjdGl2YXRlOiBbTGF1bmNoR3VhcmRdLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICdtYXAnLFxuICAgICAgICBsb2FkQ29tcG9uZW50OiAoKSA9PlxuICAgICAgICAgIGltcG9ydCgnLi9wYWdlcy9tYXAvbWFwLnBhZ2UnKS50aGVuKChtKSA9PiBtLk1hcFBhZ2UpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ2NvbmZpcm0tY29kZScsXG4gICAgICAgIGxvYWRDb21wb25lbnQ6ICgpID0+XG4gICAgICAgICAgaW1wb3J0KFxuICAgICAgICAgICAgJy4vcGFnZXMvYXV0aC9yZXNldC1wYXNzd29yZC9jb25maXJtLWNvZGUvY29uZmlybS1jb2RlLnBhZ2UnXG4gICAgICAgICAgKS50aGVuKChtKSA9PiBtLkNvbmZpcm1Db2RlUGFnZSksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnZW50ZXItcGhvbmUnLFxuICAgICAgICBsb2FkQ29tcG9uZW50OiAoKSA9PlxuICAgICAgICAgIGltcG9ydChcbiAgICAgICAgICAgICcuL3BhZ2VzL2F1dGgvcmVzZXQtcGFzc3dvcmQvZW50ZXItcGhvbmUvZW50ZXItcGhvbmUucGFnZSdcbiAgICAgICAgICApLnRoZW4oKG0pID0+IG0uRW50ZXJQaG9uZVBhZ2UpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ2xhbmRpbmcnLFxuICAgICAgICBsb2FkQ29tcG9uZW50OiAoKSA9PlxuICAgICAgICAgIGltcG9ydCgnLi9wYWdlcy9sYW5kaW5nL2xhbmRpbmcucGFnZScpLnRoZW4oKG0pID0+IG0uTGFuZGluZ1BhZ2UpLFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAncGF5bWVudC1tZXRob2QnLFxuICAgICAgICBsb2FkQ29tcG9uZW50OiAoKSA9PlxuICAgICAgICAgIGltcG9ydCgnLi9wYWdlcy9hdXRoL3BheW1lbnQtbWV0aG9kL3BheW1lbnQtbWV0aG9kLnBhZ2UnKS50aGVuKFxuICAgICAgICAgICAgKG0pID0+IG0uUGF5bWVudE1ldGhvZFBhZ2VcbiAgICAgICAgICApLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ3N1cHBvcnRpbmctZG9jdW1lbnRzJyxcbiAgICAgICAgbG9hZENvbXBvbmVudDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoJy4vcGFnZXMvc3VwcG9ydGluZy1kb2N1bWVudHMvc3VwcG9ydGluZy1kb2N1bWVudHMucGFnZScpLnRoZW4oXG4gICAgICAgICAgICAobSkgPT4gbS5TdXBwb3J0aW5nRG9jdW1lbnRzUGFnZVxuICAgICAgICAgICksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnc2lnbmluJyxcbiAgICAgICAgbG9hZENvbXBvbmVudDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoJy4vcGFnZXMvYXV0aC9zaWduaW4vc2lnbmluLnBhZ2UnKS50aGVuKChtKSA9PiBtLlNpZ25pblBhZ2UpLFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnc2lnbnVwJyxcbiAgICAgICAgbG9hZENvbXBvbmVudDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoJy4vcGFnZXMvYXV0aC9zaWdudXAvc2lnbnVwLnBhZ2UnKS50aGVuKChtKSA9PiBtLlNpZ251cFBhZ2UpLFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnc2lnbnVwLW1pbmlmaWVkJyxcbiAgICAgICAgbG9hZENvbXBvbmVudDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoJy4vcGFnZXMvYXV0aC9zaWdudXAtbWluaWZpZWQvc2lnbnVwLW1pbmlmaWVkLnBhZ2UnKS50aGVuKFxuICAgICAgICAgICAgKG0pID0+IG0uU2lnbnVwTWluaWZpZWRQYWdlXG4gICAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICdleHRlcm5hbC1hdXRoLWZhaWxlZCcsXG4gICAgICAgIGxvYWRDb21wb25lbnQ6ICgpID0+XG4gICAgICAgICAgaW1wb3J0KFxuICAgICAgICAgICAgJy4vcGFnZXMvYXV0aC9leHRlcm5hbC1hdXRoLWZhaWxlZC9leHRlcm5hbC1hdXRoLWZhaWxlZC5wYWdlJ1xuICAgICAgICAgICkudGhlbigobSkgPT4gbS5FeHRlcm5hbEF1dGhGYWlsZWRQYWdlKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICd2ZXJpZnktcGhvbmUnLFxuICAgICAgICBsb2FkQ29tcG9uZW50OiAoKSA9PlxuICAgICAgICAgIGltcG9ydCgnLi9wYWdlcy9hdXRoL3ZlcmlmeS1waG9uZS92ZXJpZnktcGhvbmUucGFnZScpLnRoZW4oXG4gICAgICAgICAgICAobSkgPT4gbS5WZXJpZnlQaG9uZVBhZ2VcbiAgICAgICAgICApLFxuICAgICAgICBjYW5BY3RpdmF0ZTogW1ZlcmlmeVBob25lR3VhcmRdLFxuICAgICAgfSxcblxuICAgICAge1xuICAgICAgICBwYXRoOiAnc2VhcmNoLXBhZ2UnLFxuICAgICAgICBsb2FkQ29tcG9uZW50OiAoKSA9PlxuICAgICAgICAgIGltcG9ydCgnLi9wYWdlcy9zZWFyY2gvc2VhcmNoLnBhZ2UnKS50aGVuKChtKSA9PiBtLlNlYXJjaFBhZ2UpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ2FjY291bnQnLFxuICAgICAgICBsb2FkQ29tcG9uZW50OiAoKSA9PlxuICAgICAgICAgIGltcG9ydCgnLi9wYWdlcy9hY2NvdW50L21lbnUvbWVudS5wYWdlJykudGhlbigobSkgPT4gbS5NZW51UGFnZSksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnYWNjb3VudC9hYm9ubmVtZW50cycsXG4gICAgICAgIGxvYWRDb21wb25lbnQ6ICgpID0+XG4gICAgICAgICAgaW1wb3J0KCcuL3BhZ2VzL2FjY291bnQvYWJvbm5lbWVudHMvYWJvbm5lbWVudHMucGFnZScpLnRoZW4oXG4gICAgICAgICAgICAobSkgPT4gbS5BYm9ubmVtZW50c1BhZ2VcbiAgICAgICAgICApLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ2FjY291bnQvdHJpcHMnLFxuICAgICAgICBsb2FkQ29tcG9uZW50OiAoKSA9PlxuICAgICAgICAgIGltcG9ydCgnLi9wYWdlcy9hY2NvdW50L3RyaXBzL3RyaXBzLnBhZ2UnKS50aGVuKChtKSA9PiBtLlRyaXBzUGFnZSksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnYWNjb3VudC9zZXR0aW5ncycsXG4gICAgICAgIGxvYWRDb21wb25lbnQ6ICgpID0+XG4gICAgICAgICAgaW1wb3J0KCcuL3BhZ2VzL2FjY291bnQvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZScpLnRoZW4oXG4gICAgICAgICAgICAobSkgPT4gbS5TZXR0aW5nc1BhZ2VcbiAgICAgICAgICApLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ2FjY291bnQvaW52b2ljZXMnLFxuICAgICAgICBsb2FkQ29tcG9uZW50OiAoKSA9PlxuICAgICAgICAgIGltcG9ydCgnLi9wYWdlcy9hY2NvdW50L2ludm9pY2VzL2ludm9pY2VzLnBhZ2UnKS50aGVuKFxuICAgICAgICAgICAgKG0pID0+IG0uSW52b2ljZXNQYWdlXG4gICAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICdhY2NvdW50L3dhbGxldCcsXG4gICAgICAgIGxvYWRDb21wb25lbnQ6ICgpID0+XG4gICAgICAgICAgaW1wb3J0KCcuL3BhZ2VzL2FjY291bnQvd2FsbGV0L3dhbGxldC5wYWdlJykudGhlbihcbiAgICAgICAgICAgIChtKSA9PiBtLldhbGxldFBhZ2VcbiAgICAgICAgICApLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ2FjY291bnQvbmZjJyxcbiAgICAgICAgbG9hZENvbXBvbmVudDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoJy4vcGFnZXMvYWNjb3VudC9uZmMvbmZjLnBhZ2UnKS50aGVuKChtKSA9PiBtLk5mY1BhZ2UpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ2FjY291bnQvcHJpdmFjeScsXG4gICAgICAgIGxvYWRDb21wb25lbnQ6ICgpID0+XG4gICAgICAgICAgaW1wb3J0KCcuL3BhZ2VzL2FjY291bnQvcHJpdmFjeS9wcml2YWN5LnBhZ2UnKS50aGVuKFxuICAgICAgICAgICAgKG0pID0+IG0uUHJpdmFjeVBhZ2VcbiAgICAgICAgICApLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ2FjY291bnQvY29va2llcycsXG4gICAgICAgIGxvYWRDb21wb25lbnQ6ICgpID0+XG4gICAgICAgICAgaW1wb3J0KCcuL3BhZ2VzL2FjY291bnQvY29va2llcy9jb29raWVzLnBhZ2UnKS50aGVuKFxuICAgICAgICAgICAgKG0pID0+IG0uQ29va2llc1BhZ2VcbiAgICAgICAgICApLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ2FjY291bnQvcGF5bWVudC1tZXRob2RzJyxcbiAgICAgICAgbG9hZENvbXBvbmVudDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoJy4vcGFnZXMvYWNjb3VudC9wYXltZW50LW1ldGhvZHMvcGF5bWVudC1tZXRob2RzLnBhZ2UnKS50aGVuKFxuICAgICAgICAgICAgKG0pID0+IG0uUGF5bWVudE1ldGhvZHNQYWdlXG4gICAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICdhY2NvdW50L3NldHRpbmdzL2NndScsXG4gICAgICAgIGxvYWRDb21wb25lbnQ6ICgpID0+XG4gICAgICAgICAgaW1wb3J0KCcuL3BhZ2VzL2FjY291bnQvY2d1L2NndS5wYWdlJykudGhlbigobSkgPT4gbS5DZ3VQYWdlKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICdhY2NvdW50L3NldHRpbmdzL2luZm9zJyxcbiAgICAgICAgbG9hZENvbXBvbmVudDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoJy4vcGFnZXMvYWNjb3VudC9pbmZvcy9pbmZvcy5wYWdlJykudGhlbigobSkgPT4gbS5JbmZvc1BhZ2UpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ2Fiby1jb25ncmF0cycsXG4gICAgICAgIGxvYWRDb21wb25lbnQ6ICgpID0+XG4gICAgICAgICAgaW1wb3J0KCcuL3BhZ2VzL2NvbmdyYXRzL2Fib25uZW1lbnRzL2Fiby1jb25ncmF0cy5wYWdlJykudGhlbihcbiAgICAgICAgICAgIChtKSA9PiBtLkFib0NvbmdyYXRzUGFnZVxuICAgICAgICAgICksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAndHJpcHMvY29uZ3JhdHMnLFxuICAgICAgICBsb2FkQ29tcG9uZW50OiAoKSA9PlxuICAgICAgICAgIGltcG9ydCgnLi9wYWdlcy9jb25ncmF0cy90cmlwcy90cmlwcy1jb25ncmF0cy5wYWdlJykudGhlbihcbiAgICAgICAgICAgIChtKSA9PiBtLlRyaXBzQ29uZ3JhdHNQYWdlXG4gICAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICdjZ3UtY29uZ3JhdHMnLFxuICAgICAgICBsb2FkQ29tcG9uZW50OiAoKSA9PlxuICAgICAgICAgIGltcG9ydCgnLi9wYWdlcy9jb25ncmF0cy9jZ3UtY29uZ3JhdHMvY2d1LWNvbmdyYXRzLnBhZ2UnKS50aGVuKFxuICAgICAgICAgICAgKG0pID0+IG0uQ2d1Q29uZ3JhdHNQYWdlXG4gICAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICdyZXBvcnQtY29uZ3JhdHMnLFxuICAgICAgICBsb2FkQ29tcG9uZW50OiAoKSA9PlxuICAgICAgICAgIGltcG9ydCgnLi9wYWdlcy9jb25ncmF0cy9yZXBvcnQvcmVwb3J0LWNvbmdyYXRzLnBhZ2UnKS50aGVuKFxuICAgICAgICAgICAgKG0pID0+IG0uUmVwb3J0Q29uZ3JhdHNQYWdlXG4gICAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICdyZWNvbW1hbmRhdGlvbi1jb25ncmF0cycsXG4gICAgICAgIGxvYWRDb21wb25lbnQ6ICgpID0+XG4gICAgICAgICAgaW1wb3J0KCcuL3BhZ2VzL2NvbmdyYXRzL3JlY29tbWFuZGF0aW9uL3JlY29tbWFuZGF0aW9uLnBhZ2UnKS50aGVuKFxuICAgICAgICAgICAgKG0pID0+IG0uUmVjb21tYW5kYXRpb25QYWdlXG4gICAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICdhY2NvdW50L3N1cHBvcnQnLFxuICAgICAgICBsb2FkQ29tcG9uZW50OiAoKSA9PlxuICAgICAgICAgIGltcG9ydCgnLi9wYWdlcy9hY2NvdW50L3N1cHBvcnQvc3VwcG9ydC5wYWdlJykudGhlbihcbiAgICAgICAgICAgIChtKSA9PiBtLlN1cHBvcnRQYWdlXG4gICAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICdhY2NvdW50L2NoYW5nZS1wYXNzd29yZCcsXG4gICAgICAgIGxvYWRDb21wb25lbnQ6ICgpID0+XG4gICAgICAgICAgaW1wb3J0KCcuL3BhZ2VzL2FjY291bnQvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5wYWdlJykudGhlbihcbiAgICAgICAgICAgIChtKSA9PiBtLkNoYW5nZVBhc3N3b3JkUGFnZVxuICAgICAgICAgICksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAna3ljJyxcbiAgICAgICAgbG9hZENvbXBvbmVudDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoJy4vcGFnZXMva3ljL2t5Yy5wYWdlJykudGhlbigobSkgPT4gbS5LWUNQYWdlKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICdyZW50aW5nL3FyLWNvZGUnLFxuICAgICAgICBsb2FkQ29tcG9uZW50OiAoKSA9PlxuICAgICAgICAgIGltcG9ydCgnLi9wYWdlcy9yZW50aW5nL3FyLWNvZGUvcXItY29kZS5wYWdlJykudGhlbihcbiAgICAgICAgICAgIChtKSA9PiBtLlFyQ29kZVBhZ2VcbiAgICAgICAgICApLFxuICAgICAgICBjYW5BY3RpdmF0ZTogW1FyQ29kZUd1YXJkXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICdyZW50aW5nJyxcbiAgICBsb2FkQ29tcG9uZW50OiAoKSA9PlxuICAgICAgaW1wb3J0KCcuL3BhZ2VzL3JlbnRpbmcvYmlrZS1udW1iZXIvYmlrZS1udW1iZXIucGFnZScpLnRoZW4oXG4gICAgICAgIChtKSA9PiBtLkJpa2VOdW1iZXJQYWdlXG4gICAgICApLFxuICB9LFxuICB7XG4gICAgcGF0aDogJyoqJyxcbiAgICByZWRpcmVjdFRvOiAnL2xhdW5jaCcsXG4gIH0sXG5dXG4iLCJpbXBvcnQgeyBwIGFzIHByb21pc2VSZXNvbHZlLCBiIGFzIGJvb3RzdHJhcExhenkgfSBmcm9tICcuL2luZGV4LTFjNWM0N2I0LmpzJztcbmV4cG9ydCB7IHMgYXMgc2V0Tm9uY2UgfSBmcm9tICcuL2luZGV4LTFjNWM0N2I0LmpzJztcblxuLypcbiBTdGVuY2lsIENsaWVudCBQYXRjaCBFc20gdjMuNC4wIHwgTUlUIExpY2Vuc2VkIHwgaHR0cHM6Ly9zdGVuY2lsanMuY29tXG4gKi9cbmNvbnN0IHBhdGNoRXNtID0gKCkgPT4ge1xuICByZXR1cm4gcHJvbWlzZVJlc29sdmUoKTtcbn07XG5jb25zdCBkZWZpbmVDdXN0b21FbGVtZW50cyA9ICh3aW4sIG9wdGlvbnMpID0+IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIHJldHVybiBwYXRjaEVzbSgpLnRoZW4oKCkgPT4ge1xuICAgIHJldHVybiBib290c3RyYXBMYXp5KFtbXCJwd2EtY2FtZXJhLW1vZGFsXCIsIFtbMSwgXCJwd2EtY2FtZXJhLW1vZGFsXCIsIHtcbiAgICAgIFwiZmFjaW5nTW9kZVwiOiBbMSwgXCJmYWNpbmctbW9kZVwiXSxcbiAgICAgIFwiaGlkZVBpY2tlclwiOiBbNCwgXCJoaWRlLXBpY2tlclwiXSxcbiAgICAgIFwicHJlc2VudFwiOiBbNjRdLFxuICAgICAgXCJkaXNtaXNzXCI6IFs2NF1cbiAgICB9XV1dLCBbXCJwd2EtYWN0aW9uLXNoZWV0XCIsIFtbMSwgXCJwd2EtYWN0aW9uLXNoZWV0XCIsIHtcbiAgICAgIFwiaGVhZGVyXCI6IFsxXSxcbiAgICAgIFwiY2FuY2VsYWJsZVwiOiBbNF0sXG4gICAgICBcIm9wdGlvbnNcIjogWzE2XSxcbiAgICAgIFwib3BlblwiOiBbMzJdXG4gICAgfV1dXSwgW1wicHdhLXRvYXN0XCIsIFtbMSwgXCJwd2EtdG9hc3RcIiwge1xuICAgICAgXCJtZXNzYWdlXCI6IFsxXSxcbiAgICAgIFwiZHVyYXRpb25cIjogWzJdLFxuICAgICAgXCJjbG9zaW5nXCI6IFszMl1cbiAgICB9XV1dLCBbXCJwd2EtY2FtZXJhXCIsIFtbMSwgXCJwd2EtY2FtZXJhXCIsIHtcbiAgICAgIFwiZmFjaW5nTW9kZVwiOiBbMSwgXCJmYWNpbmctbW9kZVwiXSxcbiAgICAgIFwiaGFuZGxlUGhvdG9cIjogWzE2XSxcbiAgICAgIFwiaGlkZVBpY2tlclwiOiBbNCwgXCJoaWRlLXBpY2tlclwiXSxcbiAgICAgIFwiaGFuZGxlTm9EZXZpY2VFcnJvclwiOiBbMTZdLFxuICAgICAgXCJub0RldmljZXNUZXh0XCI6IFsxLCBcIm5vLWRldmljZXMtdGV4dFwiXSxcbiAgICAgIFwibm9EZXZpY2VzQnV0dG9uVGV4dFwiOiBbMSwgXCJuby1kZXZpY2VzLWJ1dHRvbi10ZXh0XCJdLFxuICAgICAgXCJwaG90b1wiOiBbMzJdLFxuICAgICAgXCJwaG90b1NyY1wiOiBbMzJdLFxuICAgICAgXCJzaG93U2h1dHRlck92ZXJsYXlcIjogWzMyXSxcbiAgICAgIFwiZmxhc2hJbmRleFwiOiBbMzJdLFxuICAgICAgXCJoYXNDYW1lcmFcIjogWzMyXSxcbiAgICAgIFwicm90YXRpb25cIjogWzMyXSxcbiAgICAgIFwiZGV2aWNlRXJyb3JcIjogWzMyXVxuICAgIH1dXV0sIFtcInB3YS1jYW1lcmEtbW9kYWwtaW5zdGFuY2VcIiwgW1sxLCBcInB3YS1jYW1lcmEtbW9kYWwtaW5zdGFuY2VcIiwge1xuICAgICAgXCJmYWNpbmdNb2RlXCI6IFsxLCBcImZhY2luZy1tb2RlXCJdLFxuICAgICAgXCJoaWRlUGlja2VyXCI6IFs0LCBcImhpZGUtcGlja2VyXCJdLFxuICAgICAgXCJub0RldmljZXNUZXh0XCI6IFsxLCBcIm5vLWRldmljZXMtdGV4dFwiXSxcbiAgICAgIFwibm9EZXZpY2VzQnV0dG9uVGV4dFwiOiBbMSwgXCJuby1kZXZpY2VzLWJ1dHRvbi10ZXh0XCJdXG4gICAgfSwgW1sxNiwgXCJrZXl1cFwiLCBcImhhbmRsZUJhY2tkcm9wS2V5VXBcIl1dXV1dXSwgb3B0aW9ucyk7XG4gIH0pO1xufTtcbmV4cG9ydCB7IGRlZmluZUN1c3RvbUVsZW1lbnRzIH07IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7XG4gIElvbkhlYWRlcixcbiAgSW9uVG9vbGJhcixcbiAgSW9uVGl0bGUsXG4gIElvbkNvbnRlbnQsXG4gIElvbkdyaWQsXG4gIElvblJvdyxcbiAgSW9uSXRlbSxcbiAgSW9uQ2hlY2tib3gsXG4gIElvbkxhYmVsLFxuICBJb25CdXR0b24sXG4gIElvbkNvbCxcbiAgSW9uRm9vdGVyLFxufSBmcm9tICdAaW9uaWMvYW5ndWxhci9zdGFuZGFsb25lJ1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSdcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbidcbmltcG9ydCB7XG4gIENvb2tpZXNTZXJ2aWNlLFxuICBDb29va2llc1N0YXRlLFxufSBmcm9tICdzcmMvYXBwL3NlcnZpY2VzL2ludGVybmFsL2Nvb2tpZXMuc2VydmljZSdcblxuZXhwb3J0IGVudW0gQ29va2llTWFuYWdlbWVudFN0YXRlIHtcbiAgSW5pdGlhbCA9ICdpbml0aWFsJyxcbiAgTWFuYWdpbmcgPSAnbWFuYWdpbmcnLFxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtY29va2llcycsXG4gIGltcG9ydHM6IFtcbiAgICBUcmFuc2xhdGVNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIElvbkdyaWQsXG4gICAgSW9uUm93LFxuICAgIElvbkl0ZW0sXG4gICAgSW9uQ2hlY2tib3gsXG4gICAgSW9uQnV0dG9uLFxuICAgIElvbkNvbCxcbiAgICBJb25Gb290ZXIsXG4gIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9jb29raWVzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29va2llcy5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDb29raWVzQ29tcG9uZW50IHtcbiAgQ29va2llTWFuYWdlbWVudFN0YXRlID0gQ29va2llTWFuYWdlbWVudFN0YXRlXG4gIG1vZGFsOiBIVE1MSW9uTW9kYWxFbGVtZW50IHwgbnVsbFxuICBhbmFseXRpY3NBY2NlcHRlZDogJ3RydWUnIHwgJ2ZhbHNlJyA9ICdmYWxzZSdcbiAgcHJvdGVjdGVkIGN1cnJlbnRTdGF0ZSA9IENvb2tpZU1hbmFnZW1lbnRTdGF0ZS5Jbml0aWFsXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb29raWVzU2VydmljZTogQ29va2llc1NlcnZpY2UpIHtcbiAgICB0aGlzLmluaXRpYWxpemVTdGF0ZSgpXG4gIH1cblxuICBwcml2YXRlIGluaXRpYWxpemVTdGF0ZSgpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuY29va2llc1NlcnZpY2UuY29va2llc1N0YXRlKClcbiAgICBpZiAoc3RhdGUuc3RhdGUgPT09ICdhbHJlYWR5X3NldCcpIHtcbiAgICAgIHRoaXMuYW5hbHl0aWNzQWNjZXB0ZWQgPSBzdGF0ZS5wcmVmZXJlbmNlcy5hbmFseXRpY3MgPyAndHJ1ZScgOiAnZmFsc2UnXG4gICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IENvb2tpZU1hbmFnZW1lbnRTdGF0ZS5NYW5hZ2luZ1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUZpeGVkVmFsdWUoKSB7XG4gICAgdGhpcy5jdXJyZW50U3RhdGUgPSBDb29raWVNYW5hZ2VtZW50U3RhdGUuTWFuYWdpbmdcbiAgICB0aGlzLm1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VjbC1jb29raWVzLW1vZGFsJylcbiAgICB0aGlzLm1vZGFsPy5jbGFzc0xpc3QuYWRkKCdmdWxsSGVpZ2h0JylcbiAgfVxuXG4gIGNoZWNrQm94Q2hhbmdlZChldmVudDogYW55KSB7XG4gICAgdGhpcy5hbmFseXRpY3NBY2NlcHRlZCA9IGV2ZW50LmRldGFpbC5jaGVja2VkID8gJ3RydWUnIDogJ2ZhbHNlJ1xuICB9XG5cbiAgY2hlY2tBbmFseXRpY3NBbmRDbG9zZSgpIHtcbiAgICBjb25zdCBwcmVmZXJlbmNlcyA9IHtcbiAgICAgIG5lY2Vzc2FyeTogdHJ1ZSxcbiAgICAgIGFuYWx5dGljczogdGhpcy5hbmFseXRpY3NBY2NlcHRlZCA9PT0gJ3RydWUnLFxuICAgIH1cbiAgICB0aGlzLmNvb2tpZXNTZXJ2aWNlLnN0b3JlUHJlZmVyZW5jZXMocHJlZmVyZW5jZXMpXG4gICAgdGhpcy5tb2RhbD8uZGlzbWlzcygpXG4gIH1cblxuICBhY2NlcHRBbGwoKSB7XG4gICAgY29uc3QgcHJlZmVyZW5jZXMgPSB7XG4gICAgICBuZWNlc3Nhcnk6IHRydWUsXG4gICAgICBhbmFseXRpY3M6IHRydWUsXG4gICAgfVxuICAgIHRoaXMuY29va2llc1NlcnZpY2Uuc3RvcmVQcmVmZXJlbmNlcyhwcmVmZXJlbmNlcylcbiAgICB0aGlzLm1vZGFsPy5kaXNtaXNzKClcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgPGRpdlxuICAgICpuZ0lmPVwiY3VycmVudFN0YXRlID09PSBDb29raWVNYW5hZ2VtZW50U3RhdGUuSW5pdGlhbFwiXG4gICAgY2xhc3M9XCJmbGV4LWNlbnRlciBpb24tcGFkZGluZy1ob3Jpem9udGFsXCJcbiAgPlxuICAgIDxwPnt7ICdjb29raWVzLmZpcnN0X2JvZHknIHwgdHJhbnNsYXRlIH19PC9wPlxuICA8L2Rpdj5cbiAgPGlvbi1ncmlkXG4gICAgY2xhc3M9XCJpb24tcGFkZGluZ1wiXG4gICAgKm5nSWY9XCJjdXJyZW50U3RhdGUgPT09IENvb2tpZU1hbmFnZW1lbnRTdGF0ZS5NYW5hZ2luZ1wiXG4gID5cbiAgICA8aW9uLXJvdyBjbGFzcz1cImlvbi1tYXJnaW4tYm90dG9tXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aW9uLWl0ZW0gbGluZXM9XCJub25lXCI+XG4gICAgICAgICAgPGlvbi1jaGVja2JveCBjaGVja2VkPVwidHJ1ZVwiIGRpc2FibGVkPVwidHJ1ZVwiPnt7XG4gICAgICAgICAgICAnY29va2llcy5uZWVkZWRfdGl0bGUnIHwgdHJhbnNsYXRlXG4gICAgICAgICAgfX08L2lvbi1jaGVja2JveD5cbiAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgPHAgY2xhc3M9XCJpb24tbm8tbWFyZ2luIGlvbi1wYWRkaW5nLXN0YXJ0XCI+XG4gICAgICAgICAge3sgJ2Nvb2tpZXMubmVlZGVkX2JvZHknIHwgdHJhbnNsYXRlIH19XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvaW9uLXJvdz5cbiAgICA8aW9uLXJvdz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpb24taXRlbSBsaW5lcz1cIm5vbmVcIj5cbiAgICAgICAgICA8aW9uLWNoZWNrYm94IChpb25DaGFuZ2UpPVwiY2hlY2tCb3hDaGFuZ2VkKCRldmVudClcIiBjaGVja2VkPVwiZmFsc2VcIj57e1xuICAgICAgICAgICAgJ2Nvb2tpZXMuYW5hbHl0aWNzX3RpdGxlJyB8IHRyYW5zbGF0ZVxuICAgICAgICAgIH19PC9pb24tY2hlY2tib3g+XG4gICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICAgIDxwIGNsYXNzPVwiaW9uLW5vLW1hcmdpbiBpb24tcGFkZGluZy1zdGFydFwiPlxuICAgICAgICAgIHt7ICdjb29raWVzLmFuYWx5dGljc19ib2R5JyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2lvbi1yb3c+XG4gIDwvaW9uLWdyaWQ+XG48L2Rpdj5cblxuPGlvbi1mb290ZXIgKm5nSWY9XCJjdXJyZW50U3RhdGUgPT09IENvb2tpZU1hbmFnZW1lbnRTdGF0ZS5Jbml0aWFsXCI+XG4gIDxpb24tZ3JpZD5cbiAgICA8aW9uLXJvdz5cbiAgICAgIDxpb24tY29sIHNpemU9XCI2XCI+XG4gICAgICAgIDxpb24tYnV0dG9uXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAoY2xpY2spPVwidXBkYXRlRml4ZWRWYWx1ZSgpXCJcbiAgICAgICAgICBjb2xvcj1cImRhcmtcIlxuICAgICAgICAgIGZpbGw9XCJvdXRsaW5lXCJcbiAgICAgICAgICBleHBhbmQ9XCJibG9ja1wiXG4gICAgICAgICAgc2hhcGU9XCJyb3VuZFwiXG4gICAgICAgID5cbiAgICAgICAgICB7eyAnY29va2llcy5tb2RhbF90aXRsZScgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgPC9pb24tYnV0dG9uPlxuICAgICAgPC9pb24tY29sPlxuICAgICAgPGlvbi1jb2wgc2l6ZT1cIjZcIj5cbiAgICAgICAgPGlvbi1idXR0b25cbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIChjbGljayk9XCJhY2NlcHRBbGwoKVwiXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICBleHBhbmQ9XCJibG9ja1wiXG4gICAgICAgICAgc2hhcGU9XCJyb3VuZFwiXG4gICAgICAgID5cbiAgICAgICAgICB7eyAnY29va2llcy5hY2NlcHRfYWxsX2J0bicgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgPC9pb24tYnV0dG9uPlxuICAgICAgPC9pb24tY29sPlxuICAgIDwvaW9uLXJvdz5cbiAgPC9pb24tZ3JpZD5cbjwvaW9uLWZvb3Rlcj5cbjxpb24tZm9vdGVyICpuZ0lmPVwiY3VycmVudFN0YXRlID09PSBDb29raWVNYW5hZ2VtZW50U3RhdGUuTWFuYWdpbmdcIj5cbiAgPGlvbi1ncmlkPlxuICAgIDxpb24taXRlbSBsaW5lcz1cIm5vbmVcIj5cbiAgICAgIHt7ICdjb29raWVzLmFjY2VwdF9ib2R5JyB8IHRyYW5zbGF0ZSB9fVxuICAgIDwvaW9uLWl0ZW0+XG4gICAgPGlvbi1yb3c+XG4gICAgICA8aW9uLWNvbD5cbiAgICAgICAgPGlvbi1idXR0b25cbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIChjbGljayk9XCJjaGVja0FuYWx5dGljc0FuZENsb3NlKClcIlxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgZXhwYW5kPVwiYmxvY2tcIlxuICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxuICAgICAgICA+XG4gICAgICAgICAge3sgJ2Nvb2tpZXMuYWNjZXB0X2J0bicgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgPC9pb24tYnV0dG9uPlxuICAgICAgPC9pb24tY29sPlxuICAgIDwvaW9uLXJvdz5cbiAgPC9pb24tZ3JpZD5cbjwvaW9uLWZvb3Rlcj5cbiIsImltcG9ydCB7IHJlZ2lzdGVyUGx1Z2luIH0gZnJvbSAnQGNhcGFjaXRvci9jb3JlJztcbmNvbnN0IFNjcmVlbk9yaWVudGF0aW9uID0gcmVnaXN0ZXJQbHVnaW4oJ1NjcmVlbk9yaWVudGF0aW9uJywge1xuICB3ZWI6ICgpID0+IGltcG9ydCgnLi93ZWInKS50aGVuKG0gPT4gbmV3IG0uU2NyZWVuT3JpZW50YXRpb25XZWIoKSlcbn0pO1xuZXhwb3J0ICogZnJvbSAnLi9kZWZpbml0aW9ucyc7XG5leHBvcnQgeyBTY3JlZW5PcmllbnRhdGlvbiB9O1xuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgKiBhcyBTZW50cnkgZnJvbSAnQHNlbnRyeS9hbmd1bGFyJ1xuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICdzcmMvZW52aXJvbm1lbnRzL2Vudmlyb25tZW50J1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFNlbnRyeVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgYXN5bmMgaW5pdFNlbnRyeSgpIHtcbiAgICBTZW50cnkuaW5pdCh7XG4gICAgICBkc246ICdodHRwczovLzI4NDU2OWU0ODBmYWVlYTI4OTQyYzlkYTE3MDM1Y2E4QG8yMzM1NTkuaW5nZXN0LnVzLnNlbnRyeS5pby80NTA4MjUwODUzODAxOTg0JyxcblxuICAgICAgLy8gU2V0IHlvdXIgcmVsZWFzZSB2ZXJzaW9uLCBzdWNoIGFzIFwiZ2V0c2VudHJ5QDEuMC4wXCJcbiAgICAgIHJlbGVhc2U6ICdBZGVsQDEuMC4wJyxcbiAgICAgIGVudmlyb25tZW50OiBlbnZpcm9ubWVudC5wcm9kdWN0aW9uID8gJ3Byb2R1Y3Rpb24nIDogJ3ByZXByb2QnLFxuICAgICAgLy8gU2V0IHlvdXIgZGlzdCB2ZXJzaW9uLCBzdWNoIGFzIFwiMVwiXG4gICAgICBkaXN0OiAnMScsXG4gICAgICBpbnRlZ3JhdGlvbnM6IFtcbiAgICAgICAgLy8gUmVnaXN0ZXJzIGFuZCBjb25maWd1cmVzIHRoZSBUcmFjaW5nIGludGVncmF0aW9uLFxuICAgICAgICAvLyB3aGljaCBhdXRvbWF0aWNhbGx5IGluc3RydW1lbnRzIHlvdXIgYXBwbGljYXRpb24gdG8gbW9uaXRvciBpdHNcbiAgICAgICAgLy8gcGVyZm9ybWFuY2UsIGluY2x1ZGluZyBjdXN0b20gQW5ndWxhciByb3V0aW5nIGluc3RydW1lbnRhdGlvblxuICAgICAgICBTZW50cnkuYnJvd3NlclRyYWNpbmdJbnRlZ3JhdGlvbigpLFxuICAgICAgICAvLyBSZWdpc3RlcnMgdGhlIFJlcGxheSBpbnRlZ3JhdGlvbixcbiAgICAgICAgLy8gd2hpY2ggYXV0b21hdGljYWxseSBjYXB0dXJlcyBTZXNzaW9uIFJlcGxheXNcbiAgICAgICAgU2VudHJ5LnJlcGxheUludGVncmF0aW9uKHtcbiAgICAgICAgICBtYXNrQWxsVGV4dDogZmFsc2UsXG4gICAgICAgICAgYmxvY2tBbGxNZWRpYTogZmFsc2UsXG4gICAgICAgIH0pLFxuICAgICAgICAvLyAgIC8vUkVNT1ZFIFRISVMgSU4gUFJPRCBNT0RFXG4gICAgICAgIC8vICAgU2VudHJ5QW5ndWxhci5mZWVkYmFja0FzeW5jSW50ZWdyYXRpb24oe1xuICAgICAgICAvLyAgICAgYXV0b0luamVjdDogZmFsc2UsXG5cbiAgICAgICAgLy8gICB9KSxcbiAgICAgIF0sXG5cbiAgICAgIC8vIFNldCB0cmFjZXNTYW1wbGVSYXRlIHRvIDEuMCB0byBjYXB0dXJlIDEwMCVcbiAgICAgIC8vIG9mIHRyYW5zYWN0aW9ucyBmb3IgdHJhY2luZy5cbiAgICAgIC8vIFdlIHJlY29tbWVuZCBhZGp1c3RpbmcgdGhpcyB2YWx1ZSBpbiBwcm9kdWN0aW9uXG4gICAgICAvLyBMZWFybiBtb3JlIGF0XG4gICAgICAvLyBodHRwczovL2RvY3Muc2VudHJ5LmlvL3BsYXRmb3Jtcy9qYXZhc2NyaXB0L2NvbmZpZ3VyYXRpb24vb3B0aW9ucy8jdHJhY2VzLXNhbXBsZS1yYXRlXG4gICAgICB0cmFjZXNTYW1wbGVSYXRlOiAwLjAwNSxcbiAgICAgIHNhbXBsZVJhdGU6IDAuMDA1LFxuICAgICAgLy8gQ2FwdHVyZSBSZXBsYXkgZm9yIDEwJSBvZiBhbGwgc2Vzc2lvbnMsXG4gICAgICAvLyBwbHVzIGZvciAxMDAlIG9mIHNlc3Npb25zIHdpdGggYW4gZXJyb3JcbiAgICAgIC8vIExlYXJuIG1vcmUgYXRcbiAgICAgIC8vIGh0dHBzOi8vZG9jcy5zZW50cnkuaW8vcGxhdGZvcm1zL2phdmFzY3JpcHQvc2Vzc2lvbi1yZXBsYXkvY29uZmlndXJhdGlvbi8jZ2VuZXJhbC1pbnRlZ3JhdGlvbi1jb25maWd1cmF0aW9uXG4gICAgICByZXBsYXlzU2Vzc2lvblNhbXBsZVJhdGU6IGVudmlyb25tZW50LnByb2R1Y3Rpb24gPyAwLjAwNSA6IDAsXG4gICAgICByZXBsYXlzT25FcnJvclNhbXBsZVJhdGU6IGVudmlyb25tZW50LnByb2R1Y3Rpb24gPyAwLjAwNSA6IDAsXG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIG9wZW5GZWVkYmFja01vZGFsKCkge1xuICAgIGNvbnN0IGZlZWRiYWNrID0gU2VudHJ5LmZlZWRiYWNrSW50ZWdyYXRpb24oKVxuICAgIGNvbnN0IGZvcm0gPSBhd2FpdCBmZWVkYmFjay5jcmVhdGVGb3JtKHtcbiAgICAgIGZvcm1UaXRsZTogJ1NpZ25hbGVyIHVuIHByb2Jsw6htZScsXG4gICAgICBuYW1lTGFiZWw6ICdOb20nLFxuICAgICAgZW1haWxQbGFjZWhvbGRlcjogJ1ZvdHJlIGVtYWlsJyxcbiAgICAgIG5hbWVQbGFjZWhvbGRlcjogJ1ZvdHJlIG5vbScsXG4gICAgICBpc1JlcXVpcmVkTGFiZWw6ICcocmVxdWlzKScsXG4gICAgICBtZXNzYWdlUGxhY2Vob2xkZXI6IFwiUXVlIHMnZXN0LWlsIHBhc3PDqSA/XCIsXG4gICAgICBzdWJtaXRCdXR0b25MYWJlbDogJ0Vudm95ZXIgbGUgcmFwcG9ydCcsXG4gICAgICBjYW5jZWxCdXR0b25MYWJlbDogJ0FubnVsZXInLFxuICAgIH0pXG4gICAgZm9ybS5hcHBlbmRUb0RvbSgpXG4gICAgZm9ybS5vcGVuKClcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgV3JpdGFibGVTaWduYWwsIHNpZ25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBVUkxTZXJ2aWNlIHtcbiAgcHVibGljIHByZXZpb3VzVXJsOiBXcml0YWJsZVNpZ25hbDxzdHJpbmcgfCBudWxsPiA9IHNpZ25hbChudWxsKVxuICBwdWJsaWMgY3VycmVudFVybDogV3JpdGFibGVTaWduYWw8c3RyaW5nIHwgbnVsbD4gPSBzaWduYWwobnVsbClcbiAgY29uc3RydWN0b3IoKSB7fVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE5nWm9uZSwgZWZmZWN0LCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgSW9uQXBwLCBJb25Sb3V0ZXJPdXRsZXQgfSBmcm9tICdAaW9uaWMvYW5ndWxhci9zdGFuZGFsb25lJ1xuaW1wb3J0IHsgTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy91dGlscy9sYW5ndWFnZS5zZXJ2aWNlJ1xuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xuaW1wb3J0IHsgQXBwLCBVUkxPcGVuTGlzdGVuZXJFdmVudCB9IGZyb20gJ0BjYXBhY2l0b3IvYXBwJ1xuaW1wb3J0IHsgZGVmaW5lQ3VzdG9tRWxlbWVudHMgfSBmcm9tICdAaW9uaWMvcHdhLWVsZW1lbnRzL2xvYWRlcidcbmltcG9ydCB7XG4gIENvb2tpZXNTZXJ2aWNlLFxuICBDb29va2llc1N0YXRlLFxufSBmcm9tICcuL3NlcnZpY2VzL2ludGVybmFsL2Nvb2tpZXMuc2VydmljZSdcbmltcG9ydCB7IE1vZGFsQ29udHJvbGxlciwgQWxlcnRDb250cm9sbGVyIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXIvc3RhbmRhbG9uZSdcbmltcG9ydCB7IENvb2tpZXNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbW9kYWxzL2Nvb2tpZXMvY29va2llcy5jb21wb25lbnQnXG5pbXBvcnQgeyBDYXBhY2l0b3IgfSBmcm9tICdAY2FwYWNpdG9yL2NvcmUnXG5pbXBvcnQgeyBBcHBzdGF0ZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2ludGVybmFsL2FwcHN0YXRlLnNlcnZpY2UnXG5pbXBvcnQgeyBTZW50cnlTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9leHRlcm5hbC9zZW50cnkuc2VydmljZSdcbmltcG9ydCB7IFVSTFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3V0aWxzL3VybC5zZXJ2aWNlJ1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcydcbmltcG9ydCB7IFNjcmVlbk9yaWVudGF0aW9uIH0gZnJvbSAnQGNhcGFjaXRvci9zY3JlZW4tb3JpZW50YXRpb24nXG5pbXBvcnQgeyBTdHJpcGUgfSBmcm9tICdAY2FwYWNpdG9yLWNvbW11bml0eS9zdHJpcGUnXG5pbXBvcnQgeyBOZXdzU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9hcGktd3JhcHBlcnMvbmV3cy5zZXJ2aWNlJ1xuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICdzcmMvZW52aXJvbm1lbnRzL2Vudmlyb25tZW50J1xuaW1wb3J0IHsgUGVyc29ubmFsaXNhdGlvblNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3V0aWxzL3BlcnNvbm5hbGlzYXRpb24uc2VydmljZSdcbmltcG9ydCB7IEtZQ1dyYXBwZXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9hcGktd3JhcHBlcnMva3ljLnNlcnZpY2UnXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcm9vdCcsXG4gIHRlbXBsYXRlVXJsOiAnYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgaW1wb3J0czogW0lvbkFwcCwgSW9uUm91dGVyT3V0bGV0XSxcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnVubG9hZCcsIFsnJGV2ZW50J10pXG4gIHVubG9hZEhhbmRsZXIoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuYXBwc3RhdGVTZXJ2aWNlLnNhdmVBcHBTdGF0ZSgpXG4gICAgdGhpcy5uZXdzU3RhdGVTZXJ2aWNlLnNhdmVNYW5kYXRvcnlTdGF0ZSgpXG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OmJlZm9yZXVubG9hZCcsIFsnJGV2ZW50J10pXG4gIGJlZm9yZVVubG9hZEhhbmRsZXIoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuYXBwc3RhdGVTZXJ2aWNlLnNhdmVBcHBTdGF0ZSgpXG4gICAgdGhpcy5uZXdzU3RhdGVTZXJ2aWNlLnNhdmVNYW5kYXRvcnlTdGF0ZSgpXG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGxhbmd1YWdlOiBMYW5ndWFnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIGNvb2tpZXNTZXJ2aWNlOiBDb29raWVzU2VydmljZSxcbiAgICBwcml2YXRlIG1vZGFsQ29udHJvbGxlcjogTW9kYWxDb250cm9sbGVyLFxuICAgIHByaXZhdGUgYWxlcnRDb250cm9sbGVyOiBBbGVydENvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSBhcHBzdGF0ZVNlcnZpY2U6IEFwcHN0YXRlU2VydmljZSxcbiAgICBwcml2YXRlIHNlbnRyeVNlcnZpY2U6IFNlbnRyeVNlcnZpY2UsXG4gICAgcHJpdmF0ZSB1cmxTZXJ2aWNlOiBVUkxTZXJ2aWNlLFxuICAgIHByaXZhdGUgbmV3c1N0YXRlU2VydmljZTogTmV3c1N0YXRlU2VydmljZSxcbiAgICBwcml2YXRlIHBlcnNvbmFsaXNhdGlvblNlcnZpY2U6IFBlcnNvbm5hbGlzYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUga3ljU2VydmljZTogS1lDV3JhcHBlclNlcnZpY2VcbiAgKSB7XG4gICAgU3RyaXBlLmluaXRpYWxpemUoe1xuICAgICAgcHVibGlzaGFibGVLZXk6IGVudmlyb25tZW50LnN0cmlwZVB1YmxpY0tleSxcbiAgICB9KVxuICAgIGRlZmluZUN1c3RvbUVsZW1lbnRzKHdpbmRvdylcbiAgICB0aGlzLmluaXRpYWxpemVBcHAoKVxuICAgIGVmZmVjdCgoKSA9PiB7XG4gICAgICB0aGlzLm9uQ29va2llc1N0YXRlQ2hhbmdlKHRoaXMuY29va2llc1NlcnZpY2UuY29va2llc1N0YXRlKCkpXG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIG5nT25Jbml0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IHRoaXMuY29va2llc1NlcnZpY2UuZ2V0UHJlZmVyZW5jZXMoKVxuICAgIGlmIChDYXBhY2l0b3IuaXNOYXRpdmVQbGF0Zm9ybSgpKSB7XG4gICAgICBhd2FpdCBTY3JlZW5PcmllbnRhdGlvbi5sb2NrKHsgb3JpZW50YXRpb246ICdwb3J0cmFpdCcgfSlcbiAgICAgIGlmICh0aGlzLmNvb2tpZXNTZXJ2aWNlLmNvb2tpZXNTdGF0ZSgpLnN0YXRlID09PSAnbm90X2FscmVhZHlfc2V0Jykge1xuICAgICAgICBjb25zdCBwcmVmZXJlbmNlcyA9IHtcbiAgICAgICAgICBuZWNlc3Nhcnk6IHRydWUsXG4gICAgICAgICAgYW5hbHl0aWNzOiB0cnVlLFxuICAgICAgICB9XG4gICAgICAgIGF3YWl0IHRoaXMuY29va2llc1NlcnZpY2Uuc3RvcmVQcmVmZXJlbmNlcyhwcmVmZXJlbmNlcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDYXBhY2l0b3JTaGFrZS5hZGRMaXN0ZW5lcignc2hha2UnLCAoKSA9PiB7XG4gICAgLy8gICB0aGlzLnNlbnRyeVNlcnZpY2Uub3BlbkZlZWRiYWNrTW9kYWwoKVxuICAgIC8vIH0pXG5cbiAgICB0aGlzLnJvdXRlci5ldmVudHNcbiAgICAgIC5waXBlKGZpbHRlcigoZXZlbnQpID0+IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkpXG4gICAgICAuc3Vic2NyaWJlKChldmVudDogTmF2aWdhdGlvbkVuZCkgPT4ge1xuICAgICAgICB0aGlzLnVybFNlcnZpY2UucHJldmlvdXNVcmwuc2V0KHRoaXMudXJsU2VydmljZS5jdXJyZW50VXJsKCkpXG4gICAgICAgIHRoaXMudXJsU2VydmljZS5jdXJyZW50VXJsLnNldChldmVudC51cmwpXG4gICAgICB9KVxuICB9XG5cbiAgaW5pdGlhbGl6ZUFwcCgpIHtcbiAgICB0aGlzLmxhbmd1YWdlLmluaXRpYWxpemVMYW5ndWFnZSgpXG4gICAgdGhpcy5wZXJzb25hbGlzYXRpb25TZXJ2aWNlLnNldFRpdGxlKClcbiAgICB0aGlzLnBlcnNvbmFsaXNhdGlvblNlcnZpY2Uuc2V0Q29sb3JzKClcbiAgICB0aGlzLmt5Y1NlcnZpY2Uuc2V0S3ljRG9jdW1lbnRUeXBlcygpXG4gICAgQXBwLmFkZExpc3RlbmVyKCdhcHBVcmxPcGVuJywgKGV2ZW50OiBVUkxPcGVuTGlzdGVuZXJFdmVudCkgPT4ge1xuICAgICAgdGhpcy56b25lLnJ1bihhc3luYyAoKSA9PiB7XG4gICAgICAgIGxldCBwYXRoID0gJydcblxuICAgICAgICAvLyBDYXNlIDE6IEN1c3RvbSBVUkwgc2NoZW1lIChjb20uZWNvdmVsby54eHh4Oi8vcGF0aClcbiAgICAgICAgaWYgKGV2ZW50LnVybC5zdGFydHNXaXRoKCdjb20uZWNvdmVsby4nKSkge1xuICAgICAgICAgIGNvbnN0IHBhcnRzID0gZXZlbnQudXJsLnNwbGl0KCc6Ly8nKVxuICAgICAgICAgIGlmIChwYXJ0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBwYXRoID0gcGFydHNbMV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2FzZSAyOiBVbml2ZXJzYWwgTGlua3MgKGh0dHBzOi8vZG9tYWluL3BhdGgpXG4gICAgICAgIGVsc2UgaWYgKGV2ZW50LnVybC5zdGFydHNXaXRoKCdodHRwczovLycpKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoZXZlbnQudXJsKVxuICAgICAgICAgICAgLy8gQ29tYmluZSBwYXRobmFtZSwgc2VhcmNoIHBhcmFtcywgYW5kIGhhc2hcbiAgICAgICAgICAgIHBhdGggPSB1cmwucGF0aG5hbWUgKyB1cmwuc2VhcmNoICsgdXJsLmhhc2hcbiAgICAgICAgICAgIC8vIFJlbW92ZSBsZWFkaW5nIHNsYXNoIGlmIHByZXNlbnQgZm9yIEFuZ3VsYXIgcm91dGVyXG4gICAgICAgICAgICBpZiAocGF0aC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDEpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBwYXJzZSBVUkw6JywgZXZlbnQudXJsLCBlcnJvcilcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwocGF0aClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBvbkNvb2tpZXNTdGF0ZUNoYW5nZShzdGF0ZTogQ29vb2tpZXNTdGF0ZSkge1xuICAgIHN3aXRjaCAoc3RhdGUuc3RhdGUpIHtcbiAgICAgIGNhc2UgJ2FscmVhZHlfc2V0JzpcbiAgICAgICAgaWYgKHN0YXRlLnByZWZlcmVuY2VzLmFuYWx5dGljcykge1xuICAgICAgICAgIHRoaXMuc2VudHJ5U2VydmljZS5pbml0U2VudHJ5KClcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnbm90X2FscmVhZHlfc2V0JzpcbiAgICAgICAgaWYgKCFDYXBhY2l0b3IuaXNOYXRpdmVQbGF0Zm9ybSgpKSB7XG4gICAgICAgICAgY29uc3QgbW9kYWwgPSBhd2FpdCB0aGlzLm1vZGFsQ29udHJvbGxlci5jcmVhdGUoe1xuICAgICAgICAgICAgY29tcG9uZW50OiBDb29raWVzQ29tcG9uZW50LFxuICAgICAgICAgICAgY3NzQ2xhc3M6ICdlY2wtY29va2llcy1tb2RhbCcsXG4gICAgICAgICAgICBpZDogJ2VjbC1jb29raWVzLW1vZGFsJyxcbiAgICAgICAgICAgIGJhY2tkcm9wRGlzbWlzczogZmFsc2UsXG4gICAgICAgICAgfSlcbiAgICAgICAgICBhd2FpdCBtb2RhbC5wcmVzZW50KClcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWtcbiAgICB9XG4gIH1cbn1cbiIsIjxpb24tYXBwPlxuICA8aW9uLXJvdXRlci1vdXRsZXQ+PC9pb24tcm91dGVyLW91dGxldD5cbjwvaW9uLWFwcD5cbiIsImltcG9ydCB7IEh0dHBJbnRlcmNlcHRvckZuIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnXG5pbXBvcnQgeyBmcm9tIH0gZnJvbSAncnhqcydcbmltcG9ydCB7IHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJ1xuaW1wb3J0IHsgQXV0aFNlc3Npb24sIGZldGNoQXV0aFNlc3Npb24gfSBmcm9tICdhd3MtYW1wbGlmeS9hdXRoJ1xuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCdcblxuZXhwb3J0IGNvbnN0IGF1dGhJbnRlcmNlcHRvcjogSHR0cEludGVyY2VwdG9yRm4gPSAocmVxLCBuZXh0KSA9PiB7XG4gIHJldHVybiBmcm9tKGZldGNoQXV0aFNlc3Npb24oeyBmb3JjZVJlZnJlc2g6IGZhbHNlIH0pKS5waXBlKFxuICAgIHN3aXRjaE1hcCgoc2Vzc2lvbjogQXV0aFNlc3Npb24pID0+IHtcbiAgICAgIC8vIFbDqXJpZmllIHNpIGxhIHNlc3Npb24gZXN0IHZhbGlkZVxuXG4gICAgICBjb25zdCB0b2tlbiA9IHNlc3Npb24/LnRva2Vucz8uaWRUb2tlbj8udG9TdHJpbmcoKVxuXG4gICAgICAvLyBDbG9uZSBsYSByZXF1w6p0ZSBhdmVjIGxlcyBub3V2ZWF1eCBoZWFkZXJzXG4gICAgICBjb25zdCBuZXdSZXEgPSByZXEuY2xvbmUoe1xuICAgICAgICBzZXRIZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW4gPyBgJHt0b2tlbn1gIDogJycsXG4gICAgICAgICAgJ0xpdmUtTW9kZSc6IGVudmlyb25tZW50LnByb2R1Y3Rpb24udG9TdHJpbmcoKSxcbiAgICAgICAgICBwcm9ncmFtOiBlbnZpcm9ubWVudC5wcm9ncmFtLFxuICAgICAgICB9LFxuICAgICAgfSlcblxuICAgICAgLy8gUGFzc2UgbGEgcmVxdcOqdGUgbW9kaWZpw6llIGF1IGhhbmRsZXIgc3VpdmFudFxuICAgICAgcmV0dXJuIG5leHQobmV3UmVxKVxuICAgIH0pLFxuICAgIGNhdGNoRXJyb3IoKGVycikgPT4ge1xuICAgICAgLy9TaSBzb3VjaXMgbG9ycyBkdSBnZXQgZGVzIHRva2Vucywgb24gdXRpbGlzZSBqdXN0ZSBsYSByZXF1w6p0ZSBpbnRpYWxlXG4gICAgICB0aHJvdyBlcnJcbiAgICB9KVxuICApXG59XG4iLCJpbXBvcnQgKiBhcyBTZW50cnlBbmd1bGFyIGZyb20gJ0BzZW50cnkvYW5ndWxhcidcbmltcG9ydCB7IEFQUF9JTklUSUFMSVpFUiwgRXJyb3JIYW5kbGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcblxuZXhwb3J0IGNvbnN0IHNlbnRyeVByb3ZpZGVycyA9IFtcbiAge1xuICAgIHByb3ZpZGU6IEVycm9ySGFuZGxlcixcbiAgICB1c2VWYWx1ZTogU2VudHJ5QW5ndWxhci5jcmVhdGVFcnJvckhhbmRsZXIoe1xuICAgICAgc2hvd0RpYWxvZzogZmFsc2UsXG4gICAgfSksXG4gIH0sXG4gIHtcbiAgICBwcm92aWRlOiBTZW50cnlBbmd1bGFyLlRyYWNlU2VydmljZSxcbiAgICBkZXBzOiBbUm91dGVyXSxcbiAgfSxcbiAge1xuICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICB1c2VGYWN0b3J5OiAoKSA9PiAoKSA9PiB7fSxcbiAgICBkZXBzOiBbU2VudHJ5QW5ndWxhci5UcmFjZVNlcnZpY2VdLFxuICAgIG11bHRpOiB0cnVlLFxuICB9LFxuXVxuIiwidmFyIFVlID0gbyA9PiB7XG4gIHRocm93IFR5cGVFcnJvcihvKTtcbn07XG52YXIgVmUgPSAobywgbCwgZCkgPT4gbC5oYXMobykgfHwgVWUoXCJDYW5ub3QgXCIgKyBkKTtcbnZhciBXZSA9IChvLCBsLCBkKSA9PiAoVmUobywgbCwgXCJyZWFkIGZyb20gcHJpdmF0ZSBmaWVsZFwiKSwgZCA/IGQuY2FsbChvKSA6IGwuZ2V0KG8pKSxcbiAgSGUgPSAobywgbCwgZCkgPT4gbC5oYXMobykgPyBVZShcIkNhbm5vdCBhZGQgdGhlIHNhbWUgcHJpdmF0ZSBtZW1iZXIgbW9yZSB0aGFuIG9uY2VcIikgOiBsIGluc3RhbmNlb2YgV2Vha1NldCA/IGwuYWRkKG8pIDogbC5zZXQobywgZCksXG4gIGtlID0gKG8sIGwsIGQsIGIpID0+IChWZShvLCBsLCBcIndyaXRlIHRvIHByaXZhdGUgZmllbGRcIiksIGIgPyBiLmNhbGwobywgZCkgOiBsLnNldChvLCBkKSwgZCk7XG5jb25zdCBEdCA9IFtbXCJBenRlY1wiLCBcIk1cIl0sIFtcIkNvZGFiYXJcIiwgXCJMXCJdLCBbXCJDb2RlMzlcIiwgXCJMXCJdLCBbXCJDb2RlOTNcIiwgXCJMXCJdLCBbXCJDb2RlMTI4XCIsIFwiTFwiXSwgW1wiRGF0YUJhclwiLCBcIkxcIl0sIFtcIkRhdGFCYXJFeHBhbmRlZFwiLCBcIkxcIl0sIFtcIkRhdGFNYXRyaXhcIiwgXCJNXCJdLCBbXCJFQU4tOFwiLCBcIkxcIl0sIFtcIkVBTi0xM1wiLCBcIkxcIl0sIFtcIklURlwiLCBcIkxcIl0sIFtcIk1heGlDb2RlXCIsIFwiTVwiXSwgW1wiUERGNDE3XCIsIFwiTVwiXSwgW1wiUVJDb2RlXCIsIFwiTVwiXSwgW1wiVVBDLUFcIiwgXCJMXCJdLCBbXCJVUEMtRVwiLCBcIkxcIl0sIFtcIk1pY3JvUVJDb2RlXCIsIFwiTVwiXSwgW1wick1RUkNvZGVcIiwgXCJNXCJdLCBbXCJEWEZpbG1FZGdlXCIsIFwiTFwiXSwgW1wiRGF0YUJhckxpbWl0ZWRcIiwgXCJMXCJdXSxcbiAgTXQgPSBEdC5tYXAoKFtvXSkgPT4gbyksXG4gIE1hID0gTXQuZmlsdGVyKChvLCBsKSA9PiBEdFtsXVsxXSA9PT0gXCJMXCIpLFxuICBBYSA9IE10LmZpbHRlcigobywgbCkgPT4gRHRbbF1bMV0gPT09IFwiTVwiKTtcbmZ1bmN0aW9uIHF0KG8pIHtcbiAgc3dpdGNoIChvKSB7XG4gICAgY2FzZSBcIkxpbmVhci1Db2Rlc1wiOlxuICAgICAgcmV0dXJuIE1hLnJlZHVjZSgobCwgZCkgPT4gbCB8IHF0KGQpLCAwKTtcbiAgICBjYXNlIFwiTWF0cml4LUNvZGVzXCI6XG4gICAgICByZXR1cm4gQWEucmVkdWNlKChsLCBkKSA9PiBsIHwgcXQoZCksIDApO1xuICAgIGNhc2UgXCJBbnlcIjpcbiAgICAgIHJldHVybiAoMSA8PCBEdC5sZW5ndGgpIC0gMTtcbiAgICBjYXNlIFwiTm9uZVwiOlxuICAgICAgcmV0dXJuIDA7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAxIDw8IE10LmluZGV4T2Yobyk7XG4gIH1cbn1cbmZ1bmN0aW9uIEZhKG8pIHtcbiAgaWYgKG8gPT09IDApIHJldHVybiBcIk5vbmVcIjtcbiAgY29uc3QgbCA9IDMxIC0gTWF0aC5jbHozMihvKTtcbiAgcmV0dXJuIE10W2xdO1xufVxuZnVuY3Rpb24gUmEobykge1xuICByZXR1cm4gby5yZWR1Y2UoKGwsIGQpID0+IGwgfCBxdChkKSwgMCk7XG59XG5jb25zdCBMYSA9IFtcIkxvY2FsQXZlcmFnZVwiLCBcIkdsb2JhbEhpc3RvZ3JhbVwiLCBcIkZpeGVkVGhyZXNob2xkXCIsIFwiQm9vbENhc3RcIl07XG5mdW5jdGlvbiBqYShvKSB7XG4gIHJldHVybiBMYS5pbmRleE9mKG8pO1xufVxuY29uc3QgTmUgPSBbXCJVbmtub3duXCIsIFwiQVNDSUlcIiwgXCJJU084ODU5XzFcIiwgXCJJU084ODU5XzJcIiwgXCJJU084ODU5XzNcIiwgXCJJU084ODU5XzRcIiwgXCJJU084ODU5XzVcIiwgXCJJU084ODU5XzZcIiwgXCJJU084ODU5XzdcIiwgXCJJU084ODU5XzhcIiwgXCJJU084ODU5XzlcIiwgXCJJU084ODU5XzEwXCIsIFwiSVNPODg1OV8xMVwiLCBcIklTTzg4NTlfMTNcIiwgXCJJU084ODU5XzE0XCIsIFwiSVNPODg1OV8xNVwiLCBcIklTTzg4NTlfMTZcIiwgXCJDcDQzN1wiLCBcIkNwMTI1MFwiLCBcIkNwMTI1MVwiLCBcIkNwMTI1MlwiLCBcIkNwMTI1NlwiLCBcIlNoaWZ0X0pJU1wiLCBcIkJpZzVcIiwgXCJHQjIzMTJcIiwgXCJHQjE4MDMwXCIsIFwiRVVDX0pQXCIsIFwiRVVDX0tSXCIsIFwiVVRGMTZCRVwiLFxuLyoqXG4gKiBVbmljb2RlQmlnIFtbZGVwcmVjYXRlZF1dXG4gKi9cblwiVVRGMTZCRVwiLCBcIlVURjhcIiwgXCJVVEYxNkxFXCIsIFwiVVRGMzJCRVwiLCBcIlVURjMyTEVcIiwgXCJCSU5BUllcIl07XG5mdW5jdGlvbiBCYShvKSB7XG4gIHJldHVybiBvID09PSBcIlVuaWNvZGVCaWdcIiA/IE5lLmluZGV4T2YoXCJVVEYxNkJFXCIpIDogTmUuaW5kZXhPZihvKTtcbn1cbmNvbnN0IFVhID0gW1wiVGV4dFwiLCBcIkJpbmFyeVwiLCBcIk1peGVkXCIsIFwiR1MxXCIsIFwiSVNPMTU0MzRcIiwgXCJVbmtub3duRUNJXCJdO1xuZnVuY3Rpb24gVmEobykge1xuICByZXR1cm4gVWFbb107XG59XG5jb25zdCBXYSA9IFtcIklnbm9yZVwiLCBcIlJlYWRcIiwgXCJSZXF1aXJlXCJdO1xuZnVuY3Rpb24gSGEobykge1xuICByZXR1cm4gV2EuaW5kZXhPZihvKTtcbn1cbmNvbnN0IGthID0gW1wiUGxhaW5cIiwgXCJFQ0lcIiwgXCJIUklcIiwgXCJIZXhcIiwgXCJFc2NhcGVkXCJdO1xuZnVuY3Rpb24gTmEobykge1xuICByZXR1cm4ga2EuaW5kZXhPZihvKTtcbn1cbmNvbnN0IEl0ID0ge1xuICBmb3JtYXRzOiBbXSxcbiAgdHJ5SGFyZGVyOiAhMCxcbiAgdHJ5Um90YXRlOiAhMCxcbiAgdHJ5SW52ZXJ0OiAhMCxcbiAgdHJ5RG93bnNjYWxlOiAhMCxcbiAgdHJ5RGVub2lzZTogITEsXG4gIGJpbmFyaXplcjogXCJMb2NhbEF2ZXJhZ2VcIixcbiAgaXNQdXJlOiAhMSxcbiAgZG93bnNjYWxlRmFjdG9yOiAzLFxuICBkb3duc2NhbGVUaHJlc2hvbGQ6IDUwMCxcbiAgbWluTGluZUNvdW50OiAyLFxuICBtYXhOdW1iZXJPZlN5bWJvbHM6IDI1NSxcbiAgdHJ5Q29kZTM5RXh0ZW5kZWRNb2RlOiAhMCxcbiAgcmV0dXJuRXJyb3JzOiAhMSxcbiAgZWFuQWRkT25TeW1ib2w6IFwiSWdub3JlXCIsXG4gIHRleHRNb2RlOiBcIkhSSVwiLFxuICBjaGFyYWN0ZXJTZXQ6IFwiVW5rbm93blwiXG59O1xuZnVuY3Rpb24gemUobykge1xuICByZXR1cm4ge1xuICAgIC4uLm8sXG4gICAgZm9ybWF0czogUmEoby5mb3JtYXRzKSxcbiAgICBiaW5hcml6ZXI6IGphKG8uYmluYXJpemVyKSxcbiAgICBlYW5BZGRPblN5bWJvbDogSGEoby5lYW5BZGRPblN5bWJvbCksXG4gICAgdGV4dE1vZGU6IE5hKG8udGV4dE1vZGUpLFxuICAgIGNoYXJhY3RlclNldDogQmEoby5jaGFyYWN0ZXJTZXQpXG4gIH07XG59XG5mdW5jdGlvbiB6YShvKSB7XG4gIHJldHVybiB7XG4gICAgLi4ubyxcbiAgICBmb3JtYXQ6IEZhKG8uZm9ybWF0KSxcbiAgICBjb250ZW50VHlwZTogVmEoby5jb250ZW50VHlwZSksXG4gICAgZWNjTGV2ZWw6IG8uZWNMZXZlbFxuICB9O1xufVxuY29uc3QgeW8gPSBcIjIuMi40XCIsXG4gIHZvID0gXCJmYmE0ZTk1MDNmZWU0NTE4Y2EyZTg5NTEwYmFlZWE5YmNjMzZkYzhkXCIsXG4gIEdhID0ge1xuICAgIGxvY2F0ZUZpbGU6IChvLCBsKSA9PiB7XG4gICAgICBjb25zdCBkID0gby5tYXRjaCgvXyguKz8pXFwud2FzbSQvKTtcbiAgICAgIHJldHVybiBkID8gYGh0dHBzOi8vZmFzdGx5LmpzZGVsaXZyLm5ldC9ucG0venhpbmctd2FzbUAyLjIuNC9kaXN0LyR7ZFsxXX0vJHtvfWAgOiBsICsgbztcbiAgICB9XG4gIH0sXG4gIFN0ID0gLyogQF9fUFVSRV9fICovbmV3IFdlYWtNYXAoKTtcbmZ1bmN0aW9uIFhhKG8sIGwpIHtcbiAgcmV0dXJuIE9iamVjdC5pcyhvLCBsKSB8fCBPYmplY3Qua2V5cyhvKS5sZW5ndGggPT09IE9iamVjdC5rZXlzKGwpLmxlbmd0aCAmJiBPYmplY3Qua2V5cyhvKS5ldmVyeShkID0+IE9iamVjdC5oYXNPd24obCwgZCkgJiYgb1tkXSA9PT0gbFtkXSk7XG59XG5mdW5jdGlvbiBYZShvLCB7XG4gIG92ZXJyaWRlczogbCxcbiAgZXF1YWxpdHlGbjogZCA9IFhhLFxuICBmaXJlSW1tZWRpYXRlbHk6IGIgPSAhMVxufSA9IHt9KSB7XG4gIHZhciBmO1xuICBjb25zdCBbSSwgRF0gPSAoZiA9IFN0LmdldChvKSkgIT0gbnVsbCA/IGYgOiBbR2FdLFxuICAgIE0gPSBsICE9IG51bGwgPyBsIDogSTtcbiAgbGV0IF87XG4gIGlmIChiKSB7XG4gICAgaWYgKEQgJiYgKF8gPSBkKEksIE0pKSkgcmV0dXJuIEQ7XG4gICAgY29uc3QgQSA9IG8oe1xuICAgICAgLi4uTVxuICAgIH0pO1xuICAgIHJldHVybiBTdC5zZXQobywgW00sIEFdKSwgQTtcbiAgfVxuICAoXyAhPSBudWxsID8gXyA6IGQoSSwgTSkpIHx8IFN0LnNldChvLCBbTV0pO1xufVxuZnVuY3Rpb24gcWEobykge1xuICBTdC5kZWxldGUobyk7XG59XG5hc3luYyBmdW5jdGlvbiBZYShvLCBsLCBkID0gSXQpIHtcbiAgY29uc3QgYiA9IHtcbiAgICAgIC4uLkl0LFxuICAgICAgLi4uZFxuICAgIH0sXG4gICAgZiA9IGF3YWl0IFhlKG8sIHtcbiAgICAgIGZpcmVJbW1lZGlhdGVseTogITBcbiAgICB9KTtcbiAgbGV0IEksIEQ7XG4gIGlmIChcIndpZHRoXCIgaW4gbCAmJiBcImhlaWdodFwiIGluIGwgJiYgXCJkYXRhXCIgaW4gbCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGRhdGE6IF8sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGJ5dGVMZW5ndGg6IEFcbiAgICAgIH0sXG4gICAgICB3aWR0aDogVSxcbiAgICAgIGhlaWdodDogR1xuICAgIH0gPSBsO1xuICAgIEQgPSBmLl9tYWxsb2MoQSksIGYuSEVBUFU4LnNldChfLCBEKSwgSSA9IGYucmVhZEJhcmNvZGVzRnJvbVBpeG1hcChELCBVLCBHLCB6ZShiKSk7XG4gIH0gZWxzZSB7XG4gICAgbGV0IF8sIEE7XG4gICAgaWYgKFwiYnVmZmVyXCIgaW4gbCkgW18sIEFdID0gW2wuYnl0ZUxlbmd0aCwgbF07ZWxzZSBpZiAoXCJieXRlTGVuZ3RoXCIgaW4gbCkgW18sIEFdID0gW2wuYnl0ZUxlbmd0aCwgbmV3IFVpbnQ4QXJyYXkobCldO2Vsc2UgaWYgKFwic2l6ZVwiIGluIGwpIFtfLCBBXSA9IFtsLnNpemUsIG5ldyBVaW50OEFycmF5KGF3YWl0IGwuYXJyYXlCdWZmZXIoKSldO2Vsc2UgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgaW5wdXQgdHlwZVwiKTtcbiAgICBEID0gZi5fbWFsbG9jKF8pLCBmLkhFQVBVOC5zZXQoQSwgRCksIEkgPSBmLnJlYWRCYXJjb2Rlc0Zyb21JbWFnZShELCBfLCB6ZShiKSk7XG4gIH1cbiAgZi5fZnJlZShEKTtcbiAgY29uc3QgTSA9IFtdO1xuICBmb3IgKGxldCBfID0gMDsgXyA8IEkuc2l6ZSgpOyArK18pIE0ucHVzaCh6YShJLmdldChfKSkpO1xuICByZXR1cm4gTTtcbn1cbih7XG4gIC4uLkl0LFxuICBmb3JtYXRzOiBbLi4uSXQuZm9ybWF0c11cbn0pO1xuYXN5bmMgZnVuY3Rpb24gWnQobyA9IHt9KSB7XG4gIHZhciBsLFxuICAgIGQsXG4gICAgYixcbiAgICBmID0gbyxcbiAgICBJID0gISFnbG9iYWxUaGlzLndpbmRvdyxcbiAgICBEID0gdHlwZW9mIEJ1biA8IFwidVwiLFxuICAgIE0gPSAhIWdsb2JhbFRoaXMuV29ya2VyR2xvYmFsU2NvcGU7XG4gICEoKGQgPSBnbG9iYWxUaGlzLnByb2Nlc3MpID09PSBudWxsIHx8IGQgPT09IHZvaWQgMCB8fCAoZCA9IGQudmVyc2lvbnMpID09PSBudWxsIHx8IGQgPT09IHZvaWQgMCkgJiYgZC5ub2RlICYmICgoYiA9IGdsb2JhbFRoaXMucHJvY2VzcykgPT09IG51bGwgfHwgYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogYi50eXBlKSAhPSBcInJlbmRlcmVyXCI7XG4gIHZhciBfID0gXCIuL3RoaXMucHJvZ3JhbVwiLFxuICAgIEEsXG4gICAgVSA9IFwiXCI7XG4gIGZ1bmN0aW9uIEcodCkge1xuICAgIHJldHVybiBmLmxvY2F0ZUZpbGUgPyBmLmxvY2F0ZUZpbGUodCwgVSkgOiBVICsgdDtcbiAgfVxuICB2YXIgdHQsIFg7XG4gIGlmIChJIHx8IE0gfHwgRCkge1xuICAgIHRyeSB7XG4gICAgICBVID0gbmV3IFVSTChcIi5cIiwgQSkuaHJlZjtcbiAgICB9IGNhdGNoIHt9XG4gICAgTSAmJiAoWCA9IHQgPT4ge1xuICAgICAgdmFyIGUgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgIHJldHVybiBlLm9wZW4oXCJHRVRcIiwgdCwgITEpLCBlLnJlc3BvbnNlVHlwZSA9IFwiYXJyYXlidWZmZXJcIiwgZS5zZW5kKG51bGwpLCBuZXcgVWludDhBcnJheShlLnJlc3BvbnNlKTtcbiAgICB9KSwgdHQgPSBhc3luYyB0ID0+IHtcbiAgICAgIHZhciBlID0gYXdhaXQgZmV0Y2godCwge1xuICAgICAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiXG4gICAgICB9KTtcbiAgICAgIGlmIChlLm9rKSByZXR1cm4gZS5hcnJheUJ1ZmZlcigpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGUuc3RhdHVzICsgXCIgOiBcIiArIGUudXJsKTtcbiAgICB9O1xuICB9XG4gIHZhciBudCA9IGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSksXG4gICAgViA9IGNvbnNvbGUuZXJyb3IuYmluZChjb25zb2xlKSxcbiAgICBxLFxuICAgIGh0ID0gITEsXG4gICAgUXQsXG4gICAgSnQsXG4gICAgWSxcbiAgICBXLFxuICAgIGR0LFxuICAgIGF0LFxuICAgIG90LFxuICAgIFQsXG4gICAgS3QsXG4gICAgdGUsXG4gICAgZWUgPSAhMTtcbiAgZnVuY3Rpb24gcmUoKSB7XG4gICAgdmFyIHQgPSBQdC5idWZmZXI7XG4gICAgWSA9IG5ldyBJbnQ4QXJyYXkodCksIGR0ID0gbmV3IEludDE2QXJyYXkodCksIGYuSEVBUFU4ID0gVyA9IG5ldyBVaW50OEFycmF5KHQpLCBhdCA9IG5ldyBVaW50MTZBcnJheSh0KSwgb3QgPSBuZXcgSW50MzJBcnJheSh0KSwgVCA9IG5ldyBVaW50MzJBcnJheSh0KSwgS3QgPSBuZXcgRmxvYXQzMkFycmF5KHQpLCB0ZSA9IG5ldyBGbG9hdDY0QXJyYXkodCk7XG4gIH1cbiAgZnVuY3Rpb24gYXIoKSB7XG4gICAgaWYgKGYucHJlUnVuKSBmb3IgKHR5cGVvZiBmLnByZVJ1biA9PSBcImZ1bmN0aW9uXCIgJiYgKGYucHJlUnVuID0gW2YucHJlUnVuXSk7IGYucHJlUnVuLmxlbmd0aDspIHlyKGYucHJlUnVuLnNoaWZ0KCkpO1xuICAgIG5lKG9lKTtcbiAgfVxuICBmdW5jdGlvbiBvcigpIHtcbiAgICBlZSA9ICEwLCBsdC54YSgpO1xuICB9XG4gIGZ1bmN0aW9uIGlyKCkge1xuICAgIGlmIChmLnBvc3RSdW4pIGZvciAodHlwZW9mIGYucG9zdFJ1biA9PSBcImZ1bmN0aW9uXCIgJiYgKGYucG9zdFJ1biA9IFtmLnBvc3RSdW5dKTsgZi5wb3N0UnVuLmxlbmd0aDspIHByKGYucG9zdFJ1bi5zaGlmdCgpKTtcbiAgICBuZShhZSk7XG4gIH1cbiAgZnVuY3Rpb24gQXQodCkge1xuICAgIHZhciBlLCByO1xuICAgIChlID0gZi5vbkFib3J0KSA9PT0gbnVsbCB8fCBlID09PSB2b2lkIDAgfHwgZS5jYWxsKGYsIHQpLCB0ID0gXCJBYm9ydGVkKFwiICsgdCArIFwiKVwiLCBWKHQpLCBodCA9ICEwLCB0ICs9IFwiLiBCdWlsZCB3aXRoIC1zQVNTRVJUSU9OUyBmb3IgbW9yZSBpbmZvLlwiO1xuICAgIHZhciBuID0gbmV3IFdlYkFzc2VtYmx5LlJ1bnRpbWVFcnJvcih0KTtcbiAgICB0aHJvdyAociA9IEp0KSA9PT0gbnVsbCB8fCByID09PSB2b2lkIDAgfHwgcihuKSwgbjtcbiAgfVxuICB2YXIgcHQ7XG4gIGZ1bmN0aW9uIHNyKCkge1xuICAgIHJldHVybiBHKFwienhpbmdfcmVhZGVyLndhc21cIik7XG4gIH1cbiAgZnVuY3Rpb24gdXIodCkge1xuICAgIGlmICh0ID09IHB0ICYmIHEpIHJldHVybiBuZXcgVWludDhBcnJheShxKTtcbiAgICBpZiAoWCkgcmV0dXJuIFgodCk7XG4gICAgdGhyb3cgXCJib3RoIGFzeW5jIGFuZCBzeW5jIGZldGNoaW5nIG9mIHRoZSB3YXNtIGZhaWxlZFwiO1xuICB9XG4gIGFzeW5jIGZ1bmN0aW9uIGNyKHQpIHtcbiAgICBpZiAoIXEpIHRyeSB7XG4gICAgICB2YXIgZSA9IGF3YWl0IHR0KHQpO1xuICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGUpO1xuICAgIH0gY2F0Y2gge31cbiAgICByZXR1cm4gdXIodCk7XG4gIH1cbiAgYXN5bmMgZnVuY3Rpb24gbHIodCwgZSkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgciA9IGF3YWl0IGNyKHQpLFxuICAgICAgICBuID0gYXdhaXQgV2ViQXNzZW1ibHkuaW5zdGFudGlhdGUociwgZSk7XG4gICAgICByZXR1cm4gbjtcbiAgICB9IGNhdGNoIChhKSB7XG4gICAgICBWKGBmYWlsZWQgdG8gYXN5bmNocm9ub3VzbHkgcHJlcGFyZSB3YXNtOiAke2F9YCksIEF0KGEpO1xuICAgIH1cbiAgfVxuICBhc3luYyBmdW5jdGlvbiBmcih0LCBlLCByKSB7XG4gICAgaWYgKCF0ICYmIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nKSB0cnkge1xuICAgICAgdmFyIG4gPSBmZXRjaChlLCB7XG4gICAgICAgICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIlxuICAgICAgICB9KSxcbiAgICAgICAgYSA9IGF3YWl0IFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nKG4sIHIpO1xuICAgICAgcmV0dXJuIGE7XG4gICAgfSBjYXRjaCAoaSkge1xuICAgICAgVihgd2FzbSBzdHJlYW1pbmcgY29tcGlsZSBmYWlsZWQ6ICR7aX1gKSwgVihcImZhbGxpbmcgYmFjayB0byBBcnJheUJ1ZmZlciBpbnN0YW50aWF0aW9uXCIpO1xuICAgIH1cbiAgICByZXR1cm4gbHIoZSwgcik7XG4gIH1cbiAgZnVuY3Rpb24gaHIoKSB7XG4gICAgdmFyIHQgPSB7XG4gICAgICBhOiBxblxuICAgIH07XG4gICAgcmV0dXJuIHQ7XG4gIH1cbiAgYXN5bmMgZnVuY3Rpb24gZHIoKSB7XG4gICAgZnVuY3Rpb24gdChpLCBzKSB7XG4gICAgICByZXR1cm4gbHQgPSBpLmV4cG9ydHMsIFhuKGx0KSwgcmUoKSwgbHQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGUoaSkge1xuICAgICAgcmV0dXJuIHQoaS5pbnN0YW5jZSk7XG4gICAgfVxuICAgIHZhciByID0gaHIoKTtcbiAgICBpZiAoZi5pbnN0YW50aWF0ZVdhc20pIHJldHVybiBuZXcgUHJvbWlzZSgoaSwgcykgPT4ge1xuICAgICAgZi5pbnN0YW50aWF0ZVdhc20ociwgKHUsIGMpID0+IHtcbiAgICAgICAgaSh0KHUpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHB0ICE9IG51bGwgfHwgKHB0ID0gc3IoKSk7XG4gICAgdmFyIG4gPSBhd2FpdCBmcihxLCBwdCwgciksXG4gICAgICBhID0gZShuKTtcbiAgICByZXR1cm4gYTtcbiAgfVxuICB2YXIgbmUgPSB0ID0+IHtcbiAgICAgIGZvciAoOyB0Lmxlbmd0aCA+IDA7KSB0LnNoaWZ0KCkoZik7XG4gICAgfSxcbiAgICBhZSA9IFtdLFxuICAgIHByID0gdCA9PiBhZS5wdXNoKHQpLFxuICAgIG9lID0gW10sXG4gICAgeXIgPSB0ID0+IG9lLnB1c2godCksXG4gICAgbSA9IHQgPT4gX2UodCksXG4gICAgZyA9ICgpID0+IHhlKCksXG4gICAgeXQgPSBbXSxcbiAgICB2dCA9IDAsXG4gICAgdnIgPSB0ID0+IHtcbiAgICAgIHZhciBlID0gbmV3IEZ0KHQpO1xuICAgICAgcmV0dXJuIGUuZ2V0X2NhdWdodCgpIHx8IChlLnNldF9jYXVnaHQoITApLCB2dC0tKSwgZS5zZXRfcmV0aHJvd24oITEpLCB5dC5wdXNoKGUpLCBJZSh0KSwgUGUodCk7XG4gICAgfSxcbiAgICBIID0gMCxcbiAgICBtciA9ICgpID0+IHtcbiAgICAgIHYoMCwgMCk7XG4gICAgICB2YXIgdCA9IHl0LnBvcCgpO1xuICAgICAgU2UodC5leGNQdHIpLCBIID0gMDtcbiAgICB9O1xuICBjbGFzcyBGdCB7XG4gICAgY29uc3RydWN0b3IoZSkge1xuICAgICAgdGhpcy5leGNQdHIgPSBlLCB0aGlzLnB0ciA9IGUgLSAyNDtcbiAgICB9XG4gICAgc2V0X3R5cGUoZSkge1xuICAgICAgVFt0aGlzLnB0ciArIDQgPj4gMl0gPSBlO1xuICAgIH1cbiAgICBnZXRfdHlwZSgpIHtcbiAgICAgIHJldHVybiBUW3RoaXMucHRyICsgNCA+PiAyXTtcbiAgICB9XG4gICAgc2V0X2Rlc3RydWN0b3IoZSkge1xuICAgICAgVFt0aGlzLnB0ciArIDggPj4gMl0gPSBlO1xuICAgIH1cbiAgICBnZXRfZGVzdHJ1Y3RvcigpIHtcbiAgICAgIHJldHVybiBUW3RoaXMucHRyICsgOCA+PiAyXTtcbiAgICB9XG4gICAgc2V0X2NhdWdodChlKSB7XG4gICAgICBlID0gZSA/IDEgOiAwLCBZW3RoaXMucHRyICsgMTJdID0gZTtcbiAgICB9XG4gICAgZ2V0X2NhdWdodCgpIHtcbiAgICAgIHJldHVybiBZW3RoaXMucHRyICsgMTJdICE9IDA7XG4gICAgfVxuICAgIHNldF9yZXRocm93bihlKSB7XG4gICAgICBlID0gZSA/IDEgOiAwLCBZW3RoaXMucHRyICsgMTNdID0gZTtcbiAgICB9XG4gICAgZ2V0X3JldGhyb3duKCkge1xuICAgICAgcmV0dXJuIFlbdGhpcy5wdHIgKyAxM10gIT0gMDtcbiAgICB9XG4gICAgaW5pdChlLCByKSB7XG4gICAgICB0aGlzLnNldF9hZGp1c3RlZF9wdHIoMCksIHRoaXMuc2V0X3R5cGUoZSksIHRoaXMuc2V0X2Rlc3RydWN0b3Iocik7XG4gICAgfVxuICAgIHNldF9hZGp1c3RlZF9wdHIoZSkge1xuICAgICAgVFt0aGlzLnB0ciArIDE2ID4+IDJdID0gZTtcbiAgICB9XG4gICAgZ2V0X2FkanVzdGVkX3B0cigpIHtcbiAgICAgIHJldHVybiBUW3RoaXMucHRyICsgMTYgPj4gMl07XG4gICAgfVxuICB9XG4gIHZhciBtdCA9IHQgPT4gT2UodCksXG4gICAgUnQgPSB0ID0+IHtcbiAgICAgIHZhciBlID0gSDtcbiAgICAgIGlmICghZSkgcmV0dXJuIG10KDApLCAwO1xuICAgICAgdmFyIHIgPSBuZXcgRnQoZSk7XG4gICAgICByLnNldF9hZGp1c3RlZF9wdHIoZSk7XG4gICAgICB2YXIgbiA9IHIuZ2V0X3R5cGUoKTtcbiAgICAgIGlmICghbikgcmV0dXJuIG10KDApLCBlO1xuICAgICAgZm9yICh2YXIgYSBvZiB0KSB7XG4gICAgICAgIGlmIChhID09PSAwIHx8IGEgPT09IG4pIGJyZWFrO1xuICAgICAgICB2YXIgaSA9IHIucHRyICsgMTY7XG4gICAgICAgIGlmIChEZShhLCBuLCBpKSkgcmV0dXJuIG10KGEpLCBlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG10KG4pLCBlO1xuICAgIH0sXG4gICAgZ3IgPSAoKSA9PiBSdChbXSksXG4gICAgd3IgPSB0ID0+IFJ0KFt0XSksXG4gICAgYnIgPSAodCwgZSkgPT4gUnQoW3QsIGVdKSxcbiAgICAkciA9ICgpID0+IHtcbiAgICAgIHZhciB0ID0geXQucG9wKCk7XG4gICAgICB0IHx8IEF0KFwibm8gZXhjZXB0aW9uIHRvIHRocm93XCIpO1xuICAgICAgdmFyIGUgPSB0LmV4Y1B0cjtcbiAgICAgIHRocm93IHQuZ2V0X3JldGhyb3duKCkgfHwgKHl0LnB1c2godCksIHQuc2V0X3JldGhyb3duKCEwKSwgdC5zZXRfY2F1Z2h0KCExKSwgdnQrKyksIEggPSBlLCBIO1xuICAgIH0sXG4gICAgQ3IgPSAodCwgZSwgcikgPT4ge1xuICAgICAgdmFyIG4gPSBuZXcgRnQodCk7XG4gICAgICB0aHJvdyBuLmluaXQoZSwgciksIEggPSB0LCB2dCsrLCBIO1xuICAgIH0sXG4gICAgVHIgPSAoKSA9PiB2dCxcbiAgICBFciA9IHQgPT4ge1xuICAgICAgdGhyb3cgSCB8fCAoSCA9IHQpLCBIO1xuICAgIH0sXG4gICAgUHIgPSAoKSA9PiBBdChcIlwiKSxcbiAgICBndCA9IHt9LFxuICAgIEx0ID0gdCA9PiB7XG4gICAgICBmb3IgKDsgdC5sZW5ndGg7KSB7XG4gICAgICAgIHZhciBlID0gdC5wb3AoKSxcbiAgICAgICAgICByID0gdC5wb3AoKTtcbiAgICAgICAgcihlKTtcbiAgICAgIH1cbiAgICB9O1xuICBmdW5jdGlvbiBpdCh0KSB7XG4gICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKFRbdCA+PiAyXSk7XG4gIH1cbiAgdmFyIGV0ID0ge30sXG4gICAgWiA9IHt9LFxuICAgIHd0ID0ge30sXG4gICAgT3IgPSBjbGFzcyBleHRlbmRzIEVycm9yIHtcbiAgICAgIGNvbnN0cnVjdG9yKHQpIHtcbiAgICAgICAgc3VwZXIodCksIHRoaXMubmFtZSA9IFwiSW50ZXJuYWxFcnJvclwiO1xuICAgICAgfVxuICAgIH0sXG4gICAgYnQgPSB0ID0+IHtcbiAgICAgIHRocm93IG5ldyBPcih0KTtcbiAgICB9LFxuICAgIFEgPSAodCwgZSwgcikgPT4ge1xuICAgICAgdC5mb3JFYWNoKHUgPT4gd3RbdV0gPSBlKTtcbiAgICAgIGZ1bmN0aW9uIG4odSkge1xuICAgICAgICB2YXIgYyA9IHIodSk7XG4gICAgICAgIGMubGVuZ3RoICE9PSB0Lmxlbmd0aCAmJiBidChcIk1pc21hdGNoZWQgdHlwZSBjb252ZXJ0ZXIgY291bnRcIik7XG4gICAgICAgIGZvciAodmFyIGggPSAwOyBoIDwgdC5sZW5ndGg7ICsraCkgaih0W2hdLCBjW2hdKTtcbiAgICAgIH1cbiAgICAgIHZhciBhID0gbmV3IEFycmF5KGUubGVuZ3RoKSxcbiAgICAgICAgaSA9IFtdLFxuICAgICAgICBzID0gMDtcbiAgICAgIHtcbiAgICAgICAgY29uc3QgdSA9IGU7XG4gICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgdS5sZW5ndGg7ICsrYykge1xuICAgICAgICAgIGNvbnN0IGggPSB1W2NdO1xuICAgICAgICAgIFouaGFzT3duUHJvcGVydHkoaCkgPyBhW2NdID0gWltoXSA6IChpLnB1c2goaCksIGV0Lmhhc093blByb3BlcnR5KGgpIHx8IChldFtoXSA9IFtdKSwgZXRbaF0ucHVzaCgoKSA9PiB7XG4gICAgICAgICAgICBhW2NdID0gWltoXSwgKytzLCBzID09PSBpLmxlbmd0aCAmJiBuKGEpO1xuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaS5sZW5ndGggPT09IDAgJiYgbihhKTtcbiAgICB9LFxuICAgIF9yID0gdCA9PiB7XG4gICAgICB2YXIgZSA9IGd0W3RdO1xuICAgICAgZGVsZXRlIGd0W3RdO1xuICAgICAgdmFyIHIgPSBlLnJhd0NvbnN0cnVjdG9yLFxuICAgICAgICBuID0gZS5yYXdEZXN0cnVjdG9yLFxuICAgICAgICBhID0gZS5maWVsZHMsXG4gICAgICAgIGkgPSBhLm1hcChzID0+IHMuZ2V0dGVyUmV0dXJuVHlwZSkuY29uY2F0KGEubWFwKHMgPT4gcy5zZXR0ZXJBcmd1bWVudFR5cGUpKTtcbiAgICAgIFEoW3RdLCBpLCBzID0+IHtcbiAgICAgICAgdmFyIHUgPSB7fTtcbiAgICAgICAge1xuICAgICAgICAgIGNvbnN0IGMgPSBhO1xuICAgICAgICAgIGZvciAobGV0IGggPSAwOyBoIDwgYy5sZW5ndGg7ICsraCkge1xuICAgICAgICAgICAgY29uc3QgcCA9IGNbaF0sXG4gICAgICAgICAgICAgIHkgPSBzW2hdLFxuICAgICAgICAgICAgICBDID0gcC5nZXR0ZXIsXG4gICAgICAgICAgICAgIFAgPSBwLmdldHRlckNvbnRleHQsXG4gICAgICAgICAgICAgIFMgPSBzW2ggKyBhLmxlbmd0aF0sXG4gICAgICAgICAgICAgIHggPSBwLnNldHRlcixcbiAgICAgICAgICAgICAgTyA9IHAuc2V0dGVyQ29udGV4dDtcbiAgICAgICAgICAgIHVbcC5maWVsZE5hbWVdID0ge1xuICAgICAgICAgICAgICByZWFkOiBFID0+IHkuZnJvbVdpcmVUeXBlKEMoUCwgRSkpLFxuICAgICAgICAgICAgICB3cml0ZTogKEUsIEspID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgUiA9IFtdO1xuICAgICAgICAgICAgICAgIHgoTywgRSwgUy50b1dpcmVUeXBlKFIsIEspKSwgTHQoUik7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9wdGlvbmFsOiB5Lm9wdGlvbmFsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW3tcbiAgICAgICAgICBuYW1lOiBlLm5hbWUsXG4gICAgICAgICAgZnJvbVdpcmVUeXBlOiBjID0+IHtcbiAgICAgICAgICAgIHZhciBoID0ge307XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHUpIGhbcF0gPSB1W3BdLnJlYWQoYyk7XG4gICAgICAgICAgICByZXR1cm4gbihjKSwgaDtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRvV2lyZVR5cGU6IChjLCBoKSA9PiB7XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHUpIGlmICghKHAgaW4gaCkgJiYgIXVbcF0ub3B0aW9uYWwpIHRocm93IG5ldyBUeXBlRXJyb3IoYE1pc3NpbmcgZmllbGQ6IFwiJHtwfVwiYCk7XG4gICAgICAgICAgICB2YXIgeSA9IHIoKTtcbiAgICAgICAgICAgIGZvciAocCBpbiB1KSB1W3BdLndyaXRlKHksIGhbcF0pO1xuICAgICAgICAgICAgcmV0dXJuIGMgIT09IG51bGwgJiYgYy5wdXNoKG4sIHkpLCB5O1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVhZFZhbHVlRnJvbVBvaW50ZXI6IGl0LFxuICAgICAgICAgIGRlc3RydWN0b3JGdW5jdGlvbjogblxuICAgICAgICB9XTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgeHIgPSAodCwgZSwgciwgbiwgYSkgPT4ge30sXG4gICAgRiA9IHQgPT4ge1xuICAgICAgZm9yICh2YXIgZSA9IFwiXCI7Oykge1xuICAgICAgICB2YXIgciA9IFdbdCsrXTtcbiAgICAgICAgaWYgKCFyKSByZXR1cm4gZTtcbiAgICAgICAgZSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHIpO1xuICAgICAgfVxuICAgIH0sXG4gICAgc3QgPSBjbGFzcyBleHRlbmRzIEVycm9yIHtcbiAgICAgIGNvbnN0cnVjdG9yKHQpIHtcbiAgICAgICAgc3VwZXIodCksIHRoaXMubmFtZSA9IFwiQmluZGluZ0Vycm9yXCI7XG4gICAgICB9XG4gICAgfSxcbiAgICAkID0gdCA9PiB7XG4gICAgICB0aHJvdyBuZXcgc3QodCk7XG4gICAgfTtcbiAgZnVuY3Rpb24gU3IodCwgZSkge1xuICAgIGxldCByID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB2b2lkIDAgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICB2YXIgbiA9IGUubmFtZTtcbiAgICBpZiAodCB8fCAkKGB0eXBlIFwiJHtufVwiIG11c3QgaGF2ZSBhIHBvc2l0aXZlIGludGVnZXIgdHlwZWlkIHBvaW50ZXJgKSwgWi5oYXNPd25Qcm9wZXJ0eSh0KSkge1xuICAgICAgaWYgKHIuaWdub3JlRHVwbGljYXRlUmVnaXN0cmF0aW9ucykgcmV0dXJuO1xuICAgICAgJChgQ2Fubm90IHJlZ2lzdGVyIHR5cGUgJyR7bn0nIHR3aWNlYCk7XG4gICAgfVxuICAgIGlmIChaW3RdID0gZSwgZGVsZXRlIHd0W3RdLCBldC5oYXNPd25Qcm9wZXJ0eSh0KSkge1xuICAgICAgdmFyIGEgPSBldFt0XTtcbiAgICAgIGRlbGV0ZSBldFt0XSwgYS5mb3JFYWNoKGkgPT4gaSgpKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gaih0LCBlKSB7XG4gICAgbGV0IHIgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHZvaWQgMCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgIHJldHVybiBTcih0LCBlLCByKTtcbiAgfVxuICB2YXIgSXIgPSAodCwgZSwgciwgbikgPT4ge1xuICAgICAgZSA9IEYoZSksIGoodCwge1xuICAgICAgICBuYW1lOiBlLFxuICAgICAgICBmcm9tV2lyZVR5cGU6IGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgcmV0dXJuICEhYTtcbiAgICAgICAgfSxcbiAgICAgICAgdG9XaXJlVHlwZTogZnVuY3Rpb24gKGEsIGkpIHtcbiAgICAgICAgICByZXR1cm4gaSA/IHIgOiBuO1xuICAgICAgICB9LFxuICAgICAgICByZWFkVmFsdWVGcm9tUG9pbnRlcjogZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5mcm9tV2lyZVR5cGUoV1thXSk7XG4gICAgICAgIH0sXG4gICAgICAgIGRlc3RydWN0b3JGdW5jdGlvbjogbnVsbFxuICAgICAgfSk7XG4gICAgfSxcbiAgICBEciA9IHQgPT4gKHtcbiAgICAgIGNvdW50OiB0LmNvdW50LFxuICAgICAgZGVsZXRlU2NoZWR1bGVkOiB0LmRlbGV0ZVNjaGVkdWxlZCxcbiAgICAgIHByZXNlcnZlUG9pbnRlck9uRGVsZXRlOiB0LnByZXNlcnZlUG9pbnRlck9uRGVsZXRlLFxuICAgICAgcHRyOiB0LnB0cixcbiAgICAgIHB0clR5cGU6IHQucHRyVHlwZSxcbiAgICAgIHNtYXJ0UHRyOiB0LnNtYXJ0UHRyLFxuICAgICAgc21hcnRQdHJUeXBlOiB0LnNtYXJ0UHRyVHlwZVxuICAgIH0pLFxuICAgIGp0ID0gdCA9PiB7XG4gICAgICBmdW5jdGlvbiBlKHIpIHtcbiAgICAgICAgcmV0dXJuIHIuJCQucHRyVHlwZS5yZWdpc3RlcmVkQ2xhc3MubmFtZTtcbiAgICAgIH1cbiAgICAgICQoZSh0KSArIFwiIGluc3RhbmNlIGFscmVhZHkgZGVsZXRlZFwiKTtcbiAgICB9LFxuICAgIEJ0ID0gITEsXG4gICAgaWUgPSB0ID0+IHt9LFxuICAgIE1yID0gdCA9PiB7XG4gICAgICB0LnNtYXJ0UHRyID8gdC5zbWFydFB0clR5cGUucmF3RGVzdHJ1Y3Rvcih0LnNtYXJ0UHRyKSA6IHQucHRyVHlwZS5yZWdpc3RlcmVkQ2xhc3MucmF3RGVzdHJ1Y3Rvcih0LnB0cik7XG4gICAgfSxcbiAgICBzZSA9IHQgPT4ge1xuICAgICAgdC5jb3VudC52YWx1ZSAtPSAxO1xuICAgICAgdmFyIGUgPSB0LmNvdW50LnZhbHVlID09PSAwO1xuICAgICAgZSAmJiBNcih0KTtcbiAgICB9LFxuICAgIHV0ID0gdCA9PiBnbG9iYWxUaGlzLkZpbmFsaXphdGlvblJlZ2lzdHJ5ID8gKEJ0ID0gbmV3IEZpbmFsaXphdGlvblJlZ2lzdHJ5KGUgPT4ge1xuICAgICAgc2UoZS4kJCk7XG4gICAgfSksIHV0ID0gZSA9PiB7XG4gICAgICB2YXIgciA9IGUuJCQsXG4gICAgICAgIG4gPSAhIXIuc21hcnRQdHI7XG4gICAgICBpZiAobikge1xuICAgICAgICB2YXIgYSA9IHtcbiAgICAgICAgICAkJDogclxuICAgICAgICB9O1xuICAgICAgICBCdC5yZWdpc3RlcihlLCBhLCBlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBlO1xuICAgIH0sIGllID0gZSA9PiBCdC51bnJlZ2lzdGVyKGUpLCB1dCh0KSkgOiAodXQgPSBlID0+IGUsIHQpLFxuICAgIEFyID0gKCkgPT4ge1xuICAgICAgbGV0IHQgPSAkdC5wcm90b3R5cGU7XG4gICAgICBPYmplY3QuYXNzaWduKHQsIHtcbiAgICAgICAgaXNBbGlhc09mKHIpIHtcbiAgICAgICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgJHQpIHx8ICEociBpbnN0YW5jZW9mICR0KSkgcmV0dXJuICExO1xuICAgICAgICAgIHZhciBuID0gdGhpcy4kJC5wdHJUeXBlLnJlZ2lzdGVyZWRDbGFzcyxcbiAgICAgICAgICAgIGEgPSB0aGlzLiQkLnB0cjtcbiAgICAgICAgICByLiQkID0gci4kJDtcbiAgICAgICAgICBmb3IgKHZhciBpID0gci4kJC5wdHJUeXBlLnJlZ2lzdGVyZWRDbGFzcywgcyA9IHIuJCQucHRyOyBuLmJhc2VDbGFzczspIGEgPSBuLnVwY2FzdChhKSwgbiA9IG4uYmFzZUNsYXNzO1xuICAgICAgICAgIGZvciAoOyBpLmJhc2VDbGFzczspIHMgPSBpLnVwY2FzdChzKSwgaSA9IGkuYmFzZUNsYXNzO1xuICAgICAgICAgIHJldHVybiBuID09PSBpICYmIGEgPT09IHM7XG4gICAgICAgIH0sXG4gICAgICAgIGNsb25lKCkge1xuICAgICAgICAgIGlmICh0aGlzLiQkLnB0ciB8fCBqdCh0aGlzKSwgdGhpcy4kJC5wcmVzZXJ2ZVBvaW50ZXJPbkRlbGV0ZSkgcmV0dXJuIHRoaXMuJCQuY291bnQudmFsdWUgKz0gMSwgdGhpcztcbiAgICAgICAgICB2YXIgciA9IHV0KE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLCB7XG4gICAgICAgICAgICAkJDoge1xuICAgICAgICAgICAgICB2YWx1ZTogRHIodGhpcy4kJClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSk7XG4gICAgICAgICAgcmV0dXJuIHIuJCQuY291bnQudmFsdWUgKz0gMSwgci4kJC5kZWxldGVTY2hlZHVsZWQgPSAhMSwgcjtcbiAgICAgICAgfSxcbiAgICAgICAgZGVsZXRlKCkge1xuICAgICAgICAgIHRoaXMuJCQucHRyIHx8IGp0KHRoaXMpLCB0aGlzLiQkLmRlbGV0ZVNjaGVkdWxlZCAmJiAhdGhpcy4kJC5wcmVzZXJ2ZVBvaW50ZXJPbkRlbGV0ZSAmJiAkKFwiT2JqZWN0IGFscmVhZHkgc2NoZWR1bGVkIGZvciBkZWxldGlvblwiKSwgaWUodGhpcyksIHNlKHRoaXMuJCQpLCB0aGlzLiQkLnByZXNlcnZlUG9pbnRlck9uRGVsZXRlIHx8ICh0aGlzLiQkLnNtYXJ0UHRyID0gdm9pZCAwLCB0aGlzLiQkLnB0ciA9IHZvaWQgMCk7XG4gICAgICAgIH0sXG4gICAgICAgIGlzRGVsZXRlZCgpIHtcbiAgICAgICAgICByZXR1cm4gIXRoaXMuJCQucHRyO1xuICAgICAgICB9LFxuICAgICAgICBkZWxldGVMYXRlcigpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy4kJC5wdHIgfHwganQodGhpcyksIHRoaXMuJCQuZGVsZXRlU2NoZWR1bGVkICYmICF0aGlzLiQkLnByZXNlcnZlUG9pbnRlck9uRGVsZXRlICYmICQoXCJPYmplY3QgYWxyZWFkeSBzY2hlZHVsZWQgZm9yIGRlbGV0aW9uXCIpLCB0aGlzLiQkLmRlbGV0ZVNjaGVkdWxlZCA9ICEwLCB0aGlzO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGUgPSBTeW1ib2wuZGlzcG9zZTtcbiAgICAgIGUgJiYgKHRbZV0gPSB0LmRlbGV0ZSk7XG4gICAgfTtcbiAgZnVuY3Rpb24gJHQoKSB7fVxuICB2YXIgVXQgPSAodCwgZSkgPT4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIFwibmFtZVwiLCB7XG4gICAgICB2YWx1ZTogdFxuICAgIH0pLFxuICAgIHVlID0ge30sXG4gICAgY2UgPSAodCwgZSwgcikgPT4ge1xuICAgICAgaWYgKHRbZV0ub3ZlcmxvYWRUYWJsZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHZhciBuID0gdFtlXTtcbiAgICAgICAgdFtlXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzLmxlbmd0aCwgaSA9IG5ldyBBcnJheShhKSwgcyA9IDA7IHMgPCBhOyBzKyspIGlbc10gPSBhcmd1bWVudHNbc107XG4gICAgICAgICAgcmV0dXJuIHRbZV0ub3ZlcmxvYWRUYWJsZS5oYXNPd25Qcm9wZXJ0eShpLmxlbmd0aCkgfHwgJChgRnVuY3Rpb24gJyR7cn0nIGNhbGxlZCB3aXRoIGFuIGludmFsaWQgbnVtYmVyIG9mIGFyZ3VtZW50cyAoJHtpLmxlbmd0aH0pIC0gZXhwZWN0cyBvbmUgb2YgKCR7dFtlXS5vdmVybG9hZFRhYmxlfSkhYCksIHRbZV0ub3ZlcmxvYWRUYWJsZVtpLmxlbmd0aF0uYXBwbHkodGhpcywgaSk7XG4gICAgICAgIH0sIHRbZV0ub3ZlcmxvYWRUYWJsZSA9IFtdLCB0W2VdLm92ZXJsb2FkVGFibGVbbi5hcmdDb3VudF0gPSBuO1xuICAgICAgfVxuICAgIH0sXG4gICAgbGUgPSAodCwgZSwgcikgPT4ge1xuICAgICAgZi5oYXNPd25Qcm9wZXJ0eSh0KSA/ICgociA9PT0gdm9pZCAwIHx8IGZbdF0ub3ZlcmxvYWRUYWJsZSAhPT0gdm9pZCAwICYmIGZbdF0ub3ZlcmxvYWRUYWJsZVtyXSAhPT0gdm9pZCAwKSAmJiAkKGBDYW5ub3QgcmVnaXN0ZXIgcHVibGljIG5hbWUgJyR7dH0nIHR3aWNlYCksIGNlKGYsIHQsIHQpLCBmW3RdLm92ZXJsb2FkVGFibGUuaGFzT3duUHJvcGVydHkocikgJiYgJChgQ2Fubm90IHJlZ2lzdGVyIG11bHRpcGxlIG92ZXJsb2FkcyBvZiBhIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgbnVtYmVyIG9mIGFyZ3VtZW50cyAoJHtyfSkhYCksIGZbdF0ub3ZlcmxvYWRUYWJsZVtyXSA9IGUpIDogKGZbdF0gPSBlLCBmW3RdLmFyZ0NvdW50ID0gcik7XG4gICAgfSxcbiAgICBGciA9IDQ4LFxuICAgIFJyID0gNTcsXG4gICAgTHIgPSB0ID0+IHtcbiAgICAgIHQgPSB0LnJlcGxhY2UoL1teYS16QS1aMC05X10vZywgXCIkXCIpO1xuICAgICAgdmFyIGUgPSB0LmNoYXJDb2RlQXQoMCk7XG4gICAgICByZXR1cm4gZSA+PSBGciAmJiBlIDw9IFJyID8gYF8ke3R9YCA6IHQ7XG4gICAgfTtcbiAgZnVuY3Rpb24ganIodCwgZSwgciwgbiwgYSwgaSwgcywgdSkge1xuICAgIHRoaXMubmFtZSA9IHQsIHRoaXMuY29uc3RydWN0b3IgPSBlLCB0aGlzLmluc3RhbmNlUHJvdG90eXBlID0gciwgdGhpcy5yYXdEZXN0cnVjdG9yID0gbiwgdGhpcy5iYXNlQ2xhc3MgPSBhLCB0aGlzLmdldEFjdHVhbFR5cGUgPSBpLCB0aGlzLnVwY2FzdCA9IHMsIHRoaXMuZG93bmNhc3QgPSB1LCB0aGlzLnB1cmVWaXJ0dWFsRnVuY3Rpb25zID0gW107XG4gIH1cbiAgdmFyIFZ0ID0gKHQsIGUsIHIpID0+IHtcbiAgICAgIGZvciAoOyBlICE9PSByOykgZS51cGNhc3QgfHwgJChgRXhwZWN0ZWQgbnVsbCBvciBpbnN0YW5jZSBvZiAke3IubmFtZX0sIGdvdCBhbiBpbnN0YW5jZSBvZiAke2UubmFtZX1gKSwgdCA9IGUudXBjYXN0KHQpLCBlID0gZS5iYXNlQ2xhc3M7XG4gICAgICByZXR1cm4gdDtcbiAgICB9LFxuICAgIFd0ID0gdCA9PiB7XG4gICAgICBpZiAodCA9PT0gbnVsbCkgcmV0dXJuIFwibnVsbFwiO1xuICAgICAgdmFyIGUgPSB0eXBlb2YgdDtcbiAgICAgIHJldHVybiBlID09PSBcIm9iamVjdFwiIHx8IGUgPT09IFwiYXJyYXlcIiB8fCBlID09PSBcImZ1bmN0aW9uXCIgPyB0LnRvU3RyaW5nKCkgOiBcIlwiICsgdDtcbiAgICB9O1xuICBmdW5jdGlvbiBCcih0LCBlKSB7XG4gICAgaWYgKGUgPT09IG51bGwpIHJldHVybiB0aGlzLmlzUmVmZXJlbmNlICYmICQoYG51bGwgaXMgbm90IGEgdmFsaWQgJHt0aGlzLm5hbWV9YCksIDA7XG4gICAgZS4kJCB8fCAkKGBDYW5ub3QgcGFzcyBcIiR7V3QoZSl9XCIgYXMgYSAke3RoaXMubmFtZX1gKSwgZS4kJC5wdHIgfHwgJChgQ2Fubm90IHBhc3MgZGVsZXRlZCBvYmplY3QgYXMgYSBwb2ludGVyIG9mIHR5cGUgJHt0aGlzLm5hbWV9YCk7XG4gICAgdmFyIHIgPSBlLiQkLnB0clR5cGUucmVnaXN0ZXJlZENsYXNzLFxuICAgICAgbiA9IFZ0KGUuJCQucHRyLCByLCB0aGlzLnJlZ2lzdGVyZWRDbGFzcyk7XG4gICAgcmV0dXJuIG47XG4gIH1cbiAgZnVuY3Rpb24gVXIodCwgZSkge1xuICAgIHZhciByO1xuICAgIGlmIChlID09PSBudWxsKSByZXR1cm4gdGhpcy5pc1JlZmVyZW5jZSAmJiAkKGBudWxsIGlzIG5vdCBhIHZhbGlkICR7dGhpcy5uYW1lfWApLCB0aGlzLmlzU21hcnRQb2ludGVyID8gKHIgPSB0aGlzLnJhd0NvbnN0cnVjdG9yKCksIHQgIT09IG51bGwgJiYgdC5wdXNoKHRoaXMucmF3RGVzdHJ1Y3RvciwgciksIHIpIDogMDtcbiAgICAoIWUgfHwgIWUuJCQpICYmICQoYENhbm5vdCBwYXNzIFwiJHtXdChlKX1cIiBhcyBhICR7dGhpcy5uYW1lfWApLCBlLiQkLnB0ciB8fCAkKGBDYW5ub3QgcGFzcyBkZWxldGVkIG9iamVjdCBhcyBhIHBvaW50ZXIgb2YgdHlwZSAke3RoaXMubmFtZX1gKSwgIXRoaXMuaXNDb25zdCAmJiBlLiQkLnB0clR5cGUuaXNDb25zdCAmJiAkKGBDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICR7ZS4kJC5zbWFydFB0clR5cGUgPyBlLiQkLnNtYXJ0UHRyVHlwZS5uYW1lIDogZS4kJC5wdHJUeXBlLm5hbWV9IHRvIHBhcmFtZXRlciB0eXBlICR7dGhpcy5uYW1lfWApO1xuICAgIHZhciBuID0gZS4kJC5wdHJUeXBlLnJlZ2lzdGVyZWRDbGFzcztcbiAgICBpZiAociA9IFZ0KGUuJCQucHRyLCBuLCB0aGlzLnJlZ2lzdGVyZWRDbGFzcyksIHRoaXMuaXNTbWFydFBvaW50ZXIpIHN3aXRjaCAoZS4kJC5zbWFydFB0ciA9PT0gdm9pZCAwICYmICQoXCJQYXNzaW5nIHJhdyBwb2ludGVyIHRvIHNtYXJ0IHBvaW50ZXIgaXMgaWxsZWdhbFwiKSwgdGhpcy5zaGFyaW5nUG9saWN5KSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIGUuJCQuc21hcnRQdHJUeXBlID09PSB0aGlzID8gciA9IGUuJCQuc21hcnRQdHIgOiAkKGBDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICR7ZS4kJC5zbWFydFB0clR5cGUgPyBlLiQkLnNtYXJ0UHRyVHlwZS5uYW1lIDogZS4kJC5wdHJUeXBlLm5hbWV9IHRvIHBhcmFtZXRlciB0eXBlICR7dGhpcy5uYW1lfWApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgciA9IGUuJCQuc21hcnRQdHI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBpZiAoZS4kJC5zbWFydFB0clR5cGUgPT09IHRoaXMpIHIgPSBlLiQkLnNtYXJ0UHRyO2Vsc2Uge1xuICAgICAgICAgIHZhciBhID0gZS5jbG9uZSgpO1xuICAgICAgICAgIHIgPSB0aGlzLnJhd1NoYXJlKHIsIEIudG9IYW5kbGUoKCkgPT4gYS5kZWxldGUoKSkpLCB0ICE9PSBudWxsICYmIHQucHVzaCh0aGlzLnJhd0Rlc3RydWN0b3IsIHIpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgJChcIlVuc3VwcG9ydGluZyBzaGFyaW5nIHBvbGljeVwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHI7XG4gIH1cbiAgZnVuY3Rpb24gVnIodCwgZSkge1xuICAgIGlmIChlID09PSBudWxsKSByZXR1cm4gdGhpcy5pc1JlZmVyZW5jZSAmJiAkKGBudWxsIGlzIG5vdCBhIHZhbGlkICR7dGhpcy5uYW1lfWApLCAwO1xuICAgIGUuJCQgfHwgJChgQ2Fubm90IHBhc3MgXCIke1d0KGUpfVwiIGFzIGEgJHt0aGlzLm5hbWV9YCksIGUuJCQucHRyIHx8ICQoYENhbm5vdCBwYXNzIGRlbGV0ZWQgb2JqZWN0IGFzIGEgcG9pbnRlciBvZiB0eXBlICR7dGhpcy5uYW1lfWApLCBlLiQkLnB0clR5cGUuaXNDb25zdCAmJiAkKGBDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICR7ZS4kJC5wdHJUeXBlLm5hbWV9IHRvIHBhcmFtZXRlciB0eXBlICR7dGhpcy5uYW1lfWApO1xuICAgIHZhciByID0gZS4kJC5wdHJUeXBlLnJlZ2lzdGVyZWRDbGFzcyxcbiAgICAgIG4gPSBWdChlLiQkLnB0ciwgciwgdGhpcy5yZWdpc3RlcmVkQ2xhc3MpO1xuICAgIHJldHVybiBuO1xuICB9XG4gIHZhciBmZSA9ICh0LCBlLCByKSA9PiB7XG4gICAgICBpZiAoZSA9PT0gcikgcmV0dXJuIHQ7XG4gICAgICBpZiAoci5iYXNlQ2xhc3MgPT09IHZvaWQgMCkgcmV0dXJuIG51bGw7XG4gICAgICB2YXIgbiA9IGZlKHQsIGUsIHIuYmFzZUNsYXNzKTtcbiAgICAgIHJldHVybiBuID09PSBudWxsID8gbnVsbCA6IHIuZG93bmNhc3Qobik7XG4gICAgfSxcbiAgICBXciA9IHt9LFxuICAgIEhyID0gKHQsIGUpID0+IHtcbiAgICAgIGZvciAoZSA9PT0gdm9pZCAwICYmICQoXCJwdHIgc2hvdWxkIG5vdCBiZSB1bmRlZmluZWRcIik7IHQuYmFzZUNsYXNzOykgZSA9IHQudXBjYXN0KGUpLCB0ID0gdC5iYXNlQ2xhc3M7XG4gICAgICByZXR1cm4gZTtcbiAgICB9LFxuICAgIGtyID0gKHQsIGUpID0+IChlID0gSHIodCwgZSksIFdyW2VdKSxcbiAgICBDdCA9ICh0LCBlKSA9PiB7XG4gICAgICAoIWUucHRyVHlwZSB8fCAhZS5wdHIpICYmIGJ0KFwibWFrZUNsYXNzSGFuZGxlIHJlcXVpcmVzIHB0ciBhbmQgcHRyVHlwZVwiKTtcbiAgICAgIHZhciByID0gISFlLnNtYXJ0UHRyVHlwZSxcbiAgICAgICAgbiA9ICEhZS5zbWFydFB0cjtcbiAgICAgIHJldHVybiByICE9PSBuICYmIGJ0KFwiQm90aCBzbWFydFB0clR5cGUgYW5kIHNtYXJ0UHRyIG11c3QgYmUgc3BlY2lmaWVkXCIpLCBlLmNvdW50ID0ge1xuICAgICAgICB2YWx1ZTogMVxuICAgICAgfSwgdXQoT2JqZWN0LmNyZWF0ZSh0LCB7XG4gICAgICAgICQkOiB7XG4gICAgICAgICAgdmFsdWU6IGUsXG4gICAgICAgICAgd3JpdGFibGU6ICEwXG4gICAgICAgIH1cbiAgICAgIH0pKTtcbiAgICB9O1xuICBmdW5jdGlvbiBOcih0KSB7XG4gICAgdmFyIGUgPSB0aGlzLmdldFBvaW50ZWUodCk7XG4gICAgaWYgKCFlKSByZXR1cm4gdGhpcy5kZXN0cnVjdG9yKHQpLCBudWxsO1xuICAgIHZhciByID0ga3IodGhpcy5yZWdpc3RlcmVkQ2xhc3MsIGUpO1xuICAgIGlmIChyICE9PSB2b2lkIDApIHtcbiAgICAgIGlmIChyLiQkLmNvdW50LnZhbHVlID09PSAwKSByZXR1cm4gci4kJC5wdHIgPSBlLCByLiQkLnNtYXJ0UHRyID0gdCwgci5jbG9uZSgpO1xuICAgICAgdmFyIG4gPSByLmNsb25lKCk7XG4gICAgICByZXR1cm4gdGhpcy5kZXN0cnVjdG9yKHQpLCBuO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNTbWFydFBvaW50ZXIgPyBDdCh0aGlzLnJlZ2lzdGVyZWRDbGFzcy5pbnN0YW5jZVByb3RvdHlwZSwge1xuICAgICAgICBwdHJUeXBlOiB0aGlzLnBvaW50ZWVUeXBlLFxuICAgICAgICBwdHI6IGUsXG4gICAgICAgIHNtYXJ0UHRyVHlwZTogdGhpcyxcbiAgICAgICAgc21hcnRQdHI6IHRcbiAgICAgIH0pIDogQ3QodGhpcy5yZWdpc3RlcmVkQ2xhc3MuaW5zdGFuY2VQcm90b3R5cGUsIHtcbiAgICAgICAgcHRyVHlwZTogdGhpcyxcbiAgICAgICAgcHRyOiB0XG4gICAgICB9KTtcbiAgICB9XG4gICAgdmFyIGkgPSB0aGlzLnJlZ2lzdGVyZWRDbGFzcy5nZXRBY3R1YWxUeXBlKGUpLFxuICAgICAgcyA9IHVlW2ldO1xuICAgIGlmICghcykgcmV0dXJuIGEuY2FsbCh0aGlzKTtcbiAgICB2YXIgdTtcbiAgICB0aGlzLmlzQ29uc3QgPyB1ID0gcy5jb25zdFBvaW50ZXJUeXBlIDogdSA9IHMucG9pbnRlclR5cGU7XG4gICAgdmFyIGMgPSBmZShlLCB0aGlzLnJlZ2lzdGVyZWRDbGFzcywgdS5yZWdpc3RlcmVkQ2xhc3MpO1xuICAgIHJldHVybiBjID09PSBudWxsID8gYS5jYWxsKHRoaXMpIDogdGhpcy5pc1NtYXJ0UG9pbnRlciA/IEN0KHUucmVnaXN0ZXJlZENsYXNzLmluc3RhbmNlUHJvdG90eXBlLCB7XG4gICAgICBwdHJUeXBlOiB1LFxuICAgICAgcHRyOiBjLFxuICAgICAgc21hcnRQdHJUeXBlOiB0aGlzLFxuICAgICAgc21hcnRQdHI6IHRcbiAgICB9KSA6IEN0KHUucmVnaXN0ZXJlZENsYXNzLmluc3RhbmNlUHJvdG90eXBlLCB7XG4gICAgICBwdHJUeXBlOiB1LFxuICAgICAgcHRyOiBjXG4gICAgfSk7XG4gIH1cbiAgdmFyIHpyID0gKCkgPT4ge1xuICAgIE9iamVjdC5hc3NpZ24oVHQucHJvdG90eXBlLCB7XG4gICAgICBnZXRQb2ludGVlKHQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmF3R2V0UG9pbnRlZSAmJiAodCA9IHRoaXMucmF3R2V0UG9pbnRlZSh0KSksIHQ7XG4gICAgICB9LFxuICAgICAgZGVzdHJ1Y3Rvcih0KSB7XG4gICAgICAgIHZhciBlO1xuICAgICAgICAoZSA9IHRoaXMucmF3RGVzdHJ1Y3RvcikgPT09IG51bGwgfHwgZSA9PT0gdm9pZCAwIHx8IGUuY2FsbCh0aGlzLCB0KTtcbiAgICAgIH0sXG4gICAgICByZWFkVmFsdWVGcm9tUG9pbnRlcjogaXQsXG4gICAgICBmcm9tV2lyZVR5cGU6IE5yXG4gICAgfSk7XG4gIH07XG4gIGZ1bmN0aW9uIFR0KHQsIGUsIHIsIG4sIGEsIGksIHMsIHUsIGMsIGgsIHApIHtcbiAgICB0aGlzLm5hbWUgPSB0LCB0aGlzLnJlZ2lzdGVyZWRDbGFzcyA9IGUsIHRoaXMuaXNSZWZlcmVuY2UgPSByLCB0aGlzLmlzQ29uc3QgPSBuLCB0aGlzLmlzU21hcnRQb2ludGVyID0gYSwgdGhpcy5wb2ludGVlVHlwZSA9IGksIHRoaXMuc2hhcmluZ1BvbGljeSA9IHMsIHRoaXMucmF3R2V0UG9pbnRlZSA9IHUsIHRoaXMucmF3Q29uc3RydWN0b3IgPSBjLCB0aGlzLnJhd1NoYXJlID0gaCwgdGhpcy5yYXdEZXN0cnVjdG9yID0gcCwgIWEgJiYgZS5iYXNlQ2xhc3MgPT09IHZvaWQgMCA/IG4gPyAodGhpcy50b1dpcmVUeXBlID0gQnIsIHRoaXMuZGVzdHJ1Y3RvckZ1bmN0aW9uID0gbnVsbCkgOiAodGhpcy50b1dpcmVUeXBlID0gVnIsIHRoaXMuZGVzdHJ1Y3RvckZ1bmN0aW9uID0gbnVsbCkgOiB0aGlzLnRvV2lyZVR5cGUgPSBVcjtcbiAgfVxuICB2YXIgaGUgPSAodCwgZSwgcikgPT4ge1xuICAgICAgZi5oYXNPd25Qcm9wZXJ0eSh0KSB8fCBidChcIlJlcGxhY2luZyBub25leGlzdGVudCBwdWJsaWMgc3ltYm9sXCIpLCBmW3RdLm92ZXJsb2FkVGFibGUgIT09IHZvaWQgMCAmJiByICE9PSB2b2lkIDAgPyBmW3RdLm92ZXJsb2FkVGFibGVbcl0gPSBlIDogKGZbdF0gPSBlLCBmW3RdLmFyZ0NvdW50ID0gcik7XG4gICAgfSxcbiAgICBOID0ge30sXG4gICAgR3IgPSAodCwgZSwgcikgPT4ge1xuICAgICAgdCA9IHQucmVwbGFjZSgvcC9nLCBcImlcIik7XG4gICAgICB2YXIgbiA9IE5bdF07XG4gICAgICByZXR1cm4gbihlLCAuLi5yKTtcbiAgICB9LFxuICAgIGRlID0gW10sXG4gICAgdyA9IHQgPT4ge1xuICAgICAgdmFyIGUgPSBkZVt0XTtcbiAgICAgIHJldHVybiBlIHx8IChkZVt0XSA9IGUgPSBGZS5nZXQodCkpLCBlO1xuICAgIH0sXG4gICAgWHIgPSBmdW5jdGlvbiAodCwgZSkge1xuICAgICAgbGV0IHIgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHZvaWQgMCA/IGFyZ3VtZW50c1syXSA6IFtdO1xuICAgICAgaWYgKHQuaW5jbHVkZXMoXCJqXCIpKSByZXR1cm4gR3IodCwgZSwgcik7XG4gICAgICB2YXIgbiA9IHcoZSksXG4gICAgICAgIGEgPSBuKC4uLnIpO1xuICAgICAgcmV0dXJuIGE7XG4gICAgfSxcbiAgICBxciA9IGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICBsZXQgciA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdm9pZCAwID8gYXJndW1lbnRzWzJdIDogITE7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKHZhciBuID0gYXJndW1lbnRzLmxlbmd0aCwgYSA9IG5ldyBBcnJheShuKSwgaSA9IDA7IGkgPCBuOyBpKyspIGFbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIHJldHVybiBYcih0LCBlLCBhLCByKTtcbiAgICAgIH07XG4gICAgfSxcbiAgICBMID0gZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgIHQgPSBGKHQpO1xuICAgICAgZnVuY3Rpb24gcigpIHtcbiAgICAgICAgaWYgKHQuaW5jbHVkZXMoXCJqXCIpKSByZXR1cm4gcXIodCwgZSk7XG4gICAgICAgIHZhciBhID0gdyhlKTtcbiAgICAgICAgcmV0dXJuIGE7XG4gICAgICB9XG4gICAgICB2YXIgbiA9IHIoKTtcbiAgICAgIHJldHVybiB0eXBlb2YgbiAhPSBcImZ1bmN0aW9uXCIgJiYgJChgdW5rbm93biBmdW5jdGlvbiBwb2ludGVyIHdpdGggc2lnbmF0dXJlICR7dH06ICR7ZX1gKSwgbjtcbiAgICB9O1xuICBjbGFzcyBZciBleHRlbmRzIEVycm9yIHt9XG4gIHZhciBwZSA9IHQgPT4ge1xuICAgICAgdmFyIGUgPSBFZSh0KSxcbiAgICAgICAgciA9IEYoZSk7XG4gICAgICByZXR1cm4geihlKSwgcjtcbiAgICB9LFxuICAgIEV0ID0gKHQsIGUpID0+IHtcbiAgICAgIHZhciByID0gW10sXG4gICAgICAgIG4gPSB7fTtcbiAgICAgIGZ1bmN0aW9uIGEoaSkge1xuICAgICAgICBpZiAoIW5baV0gJiYgIVpbaV0pIHtcbiAgICAgICAgICBpZiAod3RbaV0pIHtcbiAgICAgICAgICAgIHd0W2ldLmZvckVhY2goYSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHIucHVzaChpKSwgbltpXSA9ICEwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aHJvdyBlLmZvckVhY2goYSksIG5ldyBZcihgJHt0fTogYCArIHIubWFwKHBlKS5qb2luKFtcIiwgXCJdKSk7XG4gICAgfSxcbiAgICBaciA9ICh0LCBlLCByLCBuLCBhLCBpLCBzLCB1LCBjLCBoLCBwLCB5LCBDKSA9PiB7XG4gICAgICBwID0gRihwKSwgaSA9IEwoYSwgaSksIHUgJiYgKHUgPSBMKHMsIHUpKSwgaCAmJiAoaCA9IEwoYywgaCkpLCBDID0gTCh5LCBDKTtcbiAgICAgIHZhciBQID0gTHIocCk7XG4gICAgICBsZShQLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIEV0KGBDYW5ub3QgY29uc3RydWN0ICR7cH0gZHVlIHRvIHVuYm91bmQgdHlwZXNgLCBbbl0pO1xuICAgICAgfSksIFEoW3QsIGUsIHJdLCBuID8gW25dIDogW10sIFMgPT4ge1xuICAgICAgICBTID0gU1swXTtcbiAgICAgICAgdmFyIHgsIE87XG4gICAgICAgIG4gPyAoeCA9IFMucmVnaXN0ZXJlZENsYXNzLCBPID0geC5pbnN0YW5jZVByb3RvdHlwZSkgOiBPID0gJHQucHJvdG90eXBlO1xuICAgICAgICB2YXIgRSA9IFV0KHAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykgIT09IEspIHRocm93IG5ldyBzdChgVXNlICduZXcnIHRvIGNvbnN0cnVjdCAke3B9YCk7XG4gICAgICAgICAgICBpZiAoUi5jb25zdHJ1Y3Rvcl9ib2R5ID09PSB2b2lkIDApIHRocm93IG5ldyBzdChgJHtwfSBoYXMgbm8gYWNjZXNzaWJsZSBjb25zdHJ1Y3RvcmApO1xuICAgICAgICAgICAgZm9yICh2YXIgamUgPSBhcmd1bWVudHMubGVuZ3RoLCBfdCA9IG5ldyBBcnJheShqZSksIHh0ID0gMDsgeHQgPCBqZTsgeHQrKykgX3RbeHRdID0gYXJndW1lbnRzW3h0XTtcbiAgICAgICAgICAgIHZhciBCZSA9IFIuY29uc3RydWN0b3JfYm9keVtfdC5sZW5ndGhdO1xuICAgICAgICAgICAgaWYgKEJlID09PSB2b2lkIDApIHRocm93IG5ldyBzdChgVHJpZWQgdG8gaW52b2tlIGN0b3Igb2YgJHtwfSB3aXRoIGludmFsaWQgbnVtYmVyIG9mIHBhcmFtZXRlcnMgKCR7X3QubGVuZ3RofSkgLSBleHBlY3RlZCAoJHtPYmplY3Qua2V5cyhSLmNvbnN0cnVjdG9yX2JvZHkpLnRvU3RyaW5nKCl9KSBwYXJhbWV0ZXJzIGluc3RlYWQhYCk7XG4gICAgICAgICAgICByZXR1cm4gQmUuYXBwbHkodGhpcywgX3QpO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIEsgPSBPYmplY3QuY3JlYXRlKE8sIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBFXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIEUucHJvdG90eXBlID0gSztcbiAgICAgICAgdmFyIFIgPSBuZXcganIocCwgRSwgSywgQywgeCwgaSwgdSwgaCk7XG4gICAgICAgIGlmIChSLmJhc2VDbGFzcykge1xuICAgICAgICAgIHZhciBrLCBPdDtcbiAgICAgICAgICAoT3QgPSAoayA9IFIuYmFzZUNsYXNzKS5fX2Rlcml2ZWRDbGFzc2VzKSAhPT0gbnVsbCAmJiBPdCAhPT0gdm9pZCAwIHx8IChrLl9fZGVyaXZlZENsYXNzZXMgPSBbXSksIFIuYmFzZUNsYXNzLl9fZGVyaXZlZENsYXNzZXMucHVzaChSKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgRGEgPSBuZXcgVHQocCwgUiwgITAsICExLCAhMSksXG4gICAgICAgICAgUmUgPSBuZXcgVHQocCArIFwiKlwiLCBSLCAhMSwgITEsICExKSxcbiAgICAgICAgICBMZSA9IG5ldyBUdChwICsgXCIgY29uc3QqXCIsIFIsICExLCAhMCwgITEpO1xuICAgICAgICByZXR1cm4gdWVbdF0gPSB7XG4gICAgICAgICAgcG9pbnRlclR5cGU6IFJlLFxuICAgICAgICAgIGNvbnN0UG9pbnRlclR5cGU6IExlXG4gICAgICAgIH0sIGhlKFAsIEUpLCBbRGEsIFJlLCBMZV07XG4gICAgICB9KTtcbiAgICB9LFxuICAgIEh0ID0gKHQsIGUpID0+IHtcbiAgICAgIGZvciAodmFyIHIgPSBbXSwgbiA9IDA7IG4gPCB0OyBuKyspIHIucHVzaChUW2UgKyBuICogNCA+PiAyXSk7XG4gICAgICByZXR1cm4gcjtcbiAgICB9O1xuICBmdW5jdGlvbiBRcih0KSB7XG4gICAgZm9yICh2YXIgZSA9IDE7IGUgPCB0Lmxlbmd0aDsgKytlKSBpZiAodFtlXSAhPT0gbnVsbCAmJiB0W2VdLmRlc3RydWN0b3JGdW5jdGlvbiA9PT0gdm9pZCAwKSByZXR1cm4gITA7XG4gICAgcmV0dXJuICExO1xuICB9XG4gIGZ1bmN0aW9uIGt0KHQsIGUsIHIsIG4sIGEsIGkpIHtcbiAgICB2YXIgcyA9IGUubGVuZ3RoO1xuICAgIHMgPCAyICYmICQoXCJhcmdUeXBlcyBhcnJheSBzaXplIG1pc21hdGNoISBNdXN0IGF0IGxlYXN0IGdldCByZXR1cm4gdmFsdWUgYW5kICd0aGlzJyB0eXBlcyFcIik7XG4gICAgdmFyIHUgPSBlWzFdICE9PSBudWxsICYmIHIgIT09IG51bGwsXG4gICAgICBjID0gUXIoZSksXG4gICAgICBoID0gIWVbMF0uaXNWb2lkLFxuICAgICAgcCA9IHMgLSAyLFxuICAgICAgeSA9IG5ldyBBcnJheShwKSxcbiAgICAgIEMgPSBbXSxcbiAgICAgIFAgPSBbXSxcbiAgICAgIFMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFAubGVuZ3RoID0gMDtcbiAgICAgICAgdmFyIHg7XG4gICAgICAgIEMubGVuZ3RoID0gdSA/IDIgOiAxLCBDWzBdID0gYSwgdSAmJiAoeCA9IGVbMV0udG9XaXJlVHlwZShQLCB0aGlzKSwgQ1sxXSA9IHgpO1xuICAgICAgICBmb3IgKHZhciBPID0gMDsgTyA8IHA7ICsrTykgeVtPXSA9IGVbTyArIDJdLnRvV2lyZVR5cGUoUCwgTyA8IDAgfHwgYXJndW1lbnRzLmxlbmd0aCA8PSBPID8gdm9pZCAwIDogYXJndW1lbnRzW09dKSwgQy5wdXNoKHlbT10pO1xuICAgICAgICB2YXIgRSA9IG4oLi4uQyk7XG4gICAgICAgIGZ1bmN0aW9uIEsoUikge1xuICAgICAgICAgIGlmIChjKSBMdChQKTtlbHNlIGZvciAodmFyIGsgPSB1ID8gMSA6IDI7IGsgPCBlLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICB2YXIgT3QgPSBrID09PSAxID8geCA6IHlbayAtIDJdO1xuICAgICAgICAgICAgZVtrXS5kZXN0cnVjdG9yRnVuY3Rpb24gIT09IG51bGwgJiYgZVtrXS5kZXN0cnVjdG9yRnVuY3Rpb24oT3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaCkgcmV0dXJuIGVbMF0uZnJvbVdpcmVUeXBlKFIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBLKEUpO1xuICAgICAgfTtcbiAgICByZXR1cm4gVXQodCwgUyk7XG4gIH1cbiAgdmFyIEpyID0gKHQsIGUsIHIsIG4sIGEsIGkpID0+IHtcbiAgICAgIHZhciBzID0gSHQoZSwgcik7XG4gICAgICBhID0gTChuLCBhKSwgUShbXSwgW3RdLCB1ID0+IHtcbiAgICAgICAgdSA9IHVbMF07XG4gICAgICAgIHZhciBjID0gYGNvbnN0cnVjdG9yICR7dS5uYW1lfWA7XG4gICAgICAgIGlmICh1LnJlZ2lzdGVyZWRDbGFzcy5jb25zdHJ1Y3Rvcl9ib2R5ID09PSB2b2lkIDAgJiYgKHUucmVnaXN0ZXJlZENsYXNzLmNvbnN0cnVjdG9yX2JvZHkgPSBbXSksIHUucmVnaXN0ZXJlZENsYXNzLmNvbnN0cnVjdG9yX2JvZHlbZSAtIDFdICE9PSB2b2lkIDApIHRocm93IG5ldyBzdChgQ2Fubm90IHJlZ2lzdGVyIG11bHRpcGxlIGNvbnN0cnVjdG9ycyB3aXRoIGlkZW50aWNhbCBudW1iZXIgb2YgcGFyYW1ldGVycyAoJHtlIC0gMX0pIGZvciBjbGFzcyAnJHt1Lm5hbWV9JyEgT3ZlcmxvYWQgcmVzb2x1dGlvbiBpcyBjdXJyZW50bHkgb25seSBwZXJmb3JtZWQgdXNpbmcgdGhlIHBhcmFtZXRlciBjb3VudCwgbm90IGFjdHVhbCB0eXBlIGluZm8hYCk7XG4gICAgICAgIHJldHVybiB1LnJlZ2lzdGVyZWRDbGFzcy5jb25zdHJ1Y3Rvcl9ib2R5W2UgLSAxXSA9ICgpID0+IHtcbiAgICAgICAgICBFdChgQ2Fubm90IGNvbnN0cnVjdCAke3UubmFtZX0gZHVlIHRvIHVuYm91bmQgdHlwZXNgLCBzKTtcbiAgICAgICAgfSwgUShbXSwgcywgaCA9PiAoaC5zcGxpY2UoMSwgMCwgbnVsbCksIHUucmVnaXN0ZXJlZENsYXNzLmNvbnN0cnVjdG9yX2JvZHlbZSAtIDFdID0ga3QoYywgaCwgbnVsbCwgYSwgaSksIFtdKSksIFtdO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICB5ZSA9IHQgPT4ge1xuICAgICAgdCA9IHQudHJpbSgpO1xuICAgICAgY29uc3QgZSA9IHQuaW5kZXhPZihcIihcIik7XG4gICAgICByZXR1cm4gZSA9PT0gLTEgPyB0IDogdC5zbGljZSgwLCBlKTtcbiAgICB9LFxuICAgIEtyID0gKHQsIGUsIHIsIG4sIGEsIGksIHMsIHUsIGMsIGgpID0+IHtcbiAgICAgIHZhciBwID0gSHQociwgbik7XG4gICAgICBlID0gRihlKSwgZSA9IHllKGUpLCBpID0gTChhLCBpKSwgUShbXSwgW3RdLCB5ID0+IHtcbiAgICAgICAgeSA9IHlbMF07XG4gICAgICAgIHZhciBDID0gYCR7eS5uYW1lfS4ke2V9YDtcbiAgICAgICAgZS5zdGFydHNXaXRoKFwiQEBcIikgJiYgKGUgPSBTeW1ib2xbZS5zdWJzdHJpbmcoMildKSwgdSAmJiB5LnJlZ2lzdGVyZWRDbGFzcy5wdXJlVmlydHVhbEZ1bmN0aW9ucy5wdXNoKGUpO1xuICAgICAgICBmdW5jdGlvbiBQKCkge1xuICAgICAgICAgIEV0KGBDYW5ub3QgY2FsbCAke0N9IGR1ZSB0byB1bmJvdW5kIHR5cGVzYCwgcCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIFMgPSB5LnJlZ2lzdGVyZWRDbGFzcy5pbnN0YW5jZVByb3RvdHlwZSxcbiAgICAgICAgICB4ID0gU1tlXTtcbiAgICAgICAgcmV0dXJuIHggPT09IHZvaWQgMCB8fCB4Lm92ZXJsb2FkVGFibGUgPT09IHZvaWQgMCAmJiB4LmNsYXNzTmFtZSAhPT0geS5uYW1lICYmIHguYXJnQ291bnQgPT09IHIgLSAyID8gKFAuYXJnQ291bnQgPSByIC0gMiwgUC5jbGFzc05hbWUgPSB5Lm5hbWUsIFNbZV0gPSBQKSA6IChjZShTLCBlLCBDKSwgU1tlXS5vdmVybG9hZFRhYmxlW3IgLSAyXSA9IFApLCBRKFtdLCBwLCBPID0+IHtcbiAgICAgICAgICB2YXIgRSA9IGt0KEMsIE8sIHksIGksIHMpO1xuICAgICAgICAgIHJldHVybiBTW2VdLm92ZXJsb2FkVGFibGUgPT09IHZvaWQgMCA/IChFLmFyZ0NvdW50ID0gciAtIDIsIFNbZV0gPSBFKSA6IFNbZV0ub3ZlcmxvYWRUYWJsZVtyIC0gMl0gPSBFLCBbXTtcbiAgICAgICAgfSksIFtdO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICB2ZSA9IFtdLFxuICAgIEogPSBbMCwgMSwsIDEsIG51bGwsIDEsICEwLCAxLCAhMSwgMV0sXG4gICAgTnQgPSB0ID0+IHtcbiAgICAgIHQgPiA5ICYmIC0tSlt0ICsgMV0gPT09IDAgJiYgKEpbdF0gPSB2b2lkIDAsIHZlLnB1c2godCkpO1xuICAgIH0sXG4gICAgQiA9IHtcbiAgICAgIHRvVmFsdWU6IHQgPT4gKHQgfHwgJChgQ2Fubm90IHVzZSBkZWxldGVkIHZhbC4gaGFuZGxlID0gJHt0fWApLCBKW3RdKSxcbiAgICAgIHRvSGFuZGxlOiB0ID0+IHtcbiAgICAgICAgc3dpdGNoICh0KSB7XG4gICAgICAgICAgY2FzZSB2b2lkIDA6XG4gICAgICAgICAgICByZXR1cm4gMjtcbiAgICAgICAgICBjYXNlIG51bGw6XG4gICAgICAgICAgICByZXR1cm4gNDtcbiAgICAgICAgICBjYXNlICEwOlxuICAgICAgICAgICAgcmV0dXJuIDY7XG4gICAgICAgICAgY2FzZSAhMTpcbiAgICAgICAgICAgIHJldHVybiA4O1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNvbnN0IGUgPSB2ZS5wb3AoKSB8fCBKLmxlbmd0aDtcbiAgICAgICAgICAgICAgcmV0dXJuIEpbZV0gPSB0LCBKW2UgKyAxXSA9IDEsIGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG1lID0ge1xuICAgICAgbmFtZTogXCJlbXNjcmlwdGVuOjp2YWxcIixcbiAgICAgIGZyb21XaXJlVHlwZTogdCA9PiB7XG4gICAgICAgIHZhciBlID0gQi50b1ZhbHVlKHQpO1xuICAgICAgICByZXR1cm4gTnQodCksIGU7XG4gICAgICB9LFxuICAgICAgdG9XaXJlVHlwZTogKHQsIGUpID0+IEIudG9IYW5kbGUoZSksXG4gICAgICByZWFkVmFsdWVGcm9tUG9pbnRlcjogaXQsXG4gICAgICBkZXN0cnVjdG9yRnVuY3Rpb246IG51bGxcbiAgICB9LFxuICAgIHRuID0gdCA9PiBqKHQsIG1lKSxcbiAgICBlbiA9ICh0LCBlKSA9PiB7XG4gICAgICBzd2l0Y2ggKGUpIHtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAocikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKEt0W3IgPj4gMl0pO1xuICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZyb21XaXJlVHlwZSh0ZVtyID4+IDNdKTtcbiAgICAgICAgICB9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYGludmFsaWQgZmxvYXQgd2lkdGggKCR7ZX0pOiAke3R9YCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBybiA9ICh0LCBlLCByKSA9PiB7XG4gICAgICBlID0gRihlKSwgaih0LCB7XG4gICAgICAgIG5hbWU6IGUsXG4gICAgICAgIGZyb21XaXJlVHlwZTogbiA9PiBuLFxuICAgICAgICB0b1dpcmVUeXBlOiAobiwgYSkgPT4gYSxcbiAgICAgICAgcmVhZFZhbHVlRnJvbVBvaW50ZXI6IGVuKGUsIHIpLFxuICAgICAgICBkZXN0cnVjdG9yRnVuY3Rpb246IG51bGxcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgbm4gPSAodCwgZSwgciwgbiwgYSwgaSwgcywgdSkgPT4ge1xuICAgICAgdmFyIGMgPSBIdChlLCByKTtcbiAgICAgIHQgPSBGKHQpLCB0ID0geWUodCksIGEgPSBMKG4sIGEpLCBsZSh0LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIEV0KGBDYW5ub3QgY2FsbCAke3R9IGR1ZSB0byB1bmJvdW5kIHR5cGVzYCwgYyk7XG4gICAgICB9LCBlIC0gMSksIFEoW10sIGMsIGggPT4ge1xuICAgICAgICB2YXIgcCA9IFtoWzBdLCBudWxsXS5jb25jYXQoaC5zbGljZSgxKSk7XG4gICAgICAgIHJldHVybiBoZSh0LCBrdCh0LCBwLCBudWxsLCBhLCBpKSwgZSAtIDEpLCBbXTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgYW4gPSAodCwgZSwgcikgPT4ge1xuICAgICAgc3dpdGNoIChlKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICByZXR1cm4gciA/IG4gPT4gWVtuXSA6IG4gPT4gV1tuXTtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHJldHVybiByID8gbiA9PiBkdFtuID4+IDFdIDogbiA9PiBhdFtuID4+IDFdO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgcmV0dXJuIHIgPyBuID0+IG90W24gPj4gMl0gOiBuID0+IFRbbiA+PiAyXTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBpbnZhbGlkIGludGVnZXIgd2lkdGggKCR7ZX0pOiAke3R9YCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBvbiA9ICh0LCBlLCByLCBuLCBhKSA9PiB7XG4gICAgICBlID0gRihlKTtcbiAgICAgIGNvbnN0IGkgPSBuID09PSAwO1xuICAgICAgbGV0IHMgPSBjID0+IGM7XG4gICAgICBpZiAoaSkge1xuICAgICAgICB2YXIgdSA9IDMyIC0gOCAqIHI7XG4gICAgICAgIHMgPSBjID0+IGMgPDwgdSA+Pj4gdSwgYSA9IHMoYSk7XG4gICAgICB9XG4gICAgICBqKHQsIHtcbiAgICAgICAgbmFtZTogZSxcbiAgICAgICAgZnJvbVdpcmVUeXBlOiBzLFxuICAgICAgICB0b1dpcmVUeXBlOiAoYywgaCkgPT4gaCxcbiAgICAgICAgcmVhZFZhbHVlRnJvbVBvaW50ZXI6IGFuKGUsIHIsIG4gIT09IDApLFxuICAgICAgICBkZXN0cnVjdG9yRnVuY3Rpb246IG51bGxcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgc24gPSAodCwgZSwgcikgPT4ge1xuICAgICAgdmFyIG4gPSBbSW50OEFycmF5LCBVaW50OEFycmF5LCBJbnQxNkFycmF5LCBVaW50MTZBcnJheSwgSW50MzJBcnJheSwgVWludDMyQXJyYXksIEZsb2F0MzJBcnJheSwgRmxvYXQ2NEFycmF5XSxcbiAgICAgICAgYSA9IG5bZV07XG4gICAgICBmdW5jdGlvbiBpKHMpIHtcbiAgICAgICAgdmFyIHUgPSBUW3MgPj4gMl0sXG4gICAgICAgICAgYyA9IFRbcyArIDQgPj4gMl07XG4gICAgICAgIHJldHVybiBuZXcgYShZLmJ1ZmZlciwgYywgdSk7XG4gICAgICB9XG4gICAgICByID0gRihyKSwgaih0LCB7XG4gICAgICAgIG5hbWU6IHIsXG4gICAgICAgIGZyb21XaXJlVHlwZTogaSxcbiAgICAgICAgcmVhZFZhbHVlRnJvbVBvaW50ZXI6IGlcbiAgICAgIH0sIHtcbiAgICAgICAgaWdub3JlRHVwbGljYXRlUmVnaXN0cmF0aW9uczogITBcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgdW4gPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIG9wdGlvbmFsOiAhMFxuICAgIH0sIG1lKSxcbiAgICBjbiA9ICh0LCBlKSA9PiB7XG4gICAgICBqKHQsIHVuKTtcbiAgICB9LFxuICAgIGxuID0gKHQsIGUsIHIsIG4pID0+IHtcbiAgICAgIGlmICghKG4gPiAwKSkgcmV0dXJuIDA7XG4gICAgICBmb3IgKHZhciBhID0gciwgaSA9IHIgKyBuIC0gMSwgcyA9IDA7IHMgPCB0Lmxlbmd0aDsgKytzKSB7XG4gICAgICAgIHZhciB1ID0gdC5jb2RlUG9pbnRBdChzKTtcbiAgICAgICAgaWYgKHUgPD0gMTI3KSB7XG4gICAgICAgICAgaWYgKHIgPj0gaSkgYnJlYWs7XG4gICAgICAgICAgZVtyKytdID0gdTtcbiAgICAgICAgfSBlbHNlIGlmICh1IDw9IDIwNDcpIHtcbiAgICAgICAgICBpZiAociArIDEgPj0gaSkgYnJlYWs7XG4gICAgICAgICAgZVtyKytdID0gMTkyIHwgdSA+PiA2LCBlW3IrK10gPSAxMjggfCB1ICYgNjM7XG4gICAgICAgIH0gZWxzZSBpZiAodSA8PSA2NTUzNSkge1xuICAgICAgICAgIGlmIChyICsgMiA+PSBpKSBicmVhaztcbiAgICAgICAgICBlW3IrK10gPSAyMjQgfCB1ID4+IDEyLCBlW3IrK10gPSAxMjggfCB1ID4+IDYgJiA2MywgZVtyKytdID0gMTI4IHwgdSAmIDYzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChyICsgMyA+PSBpKSBicmVhaztcbiAgICAgICAgICBlW3IrK10gPSAyNDAgfCB1ID4+IDE4LCBlW3IrK10gPSAxMjggfCB1ID4+IDEyICYgNjMsIGVbcisrXSA9IDEyOCB8IHUgPj4gNiAmIDYzLCBlW3IrK10gPSAxMjggfCB1ICYgNjMsIHMrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGVbcl0gPSAwLCByIC0gYTtcbiAgICB9LFxuICAgIHJ0ID0gKHQsIGUsIHIpID0+IGxuKHQsIFcsIGUsIHIpLFxuICAgIGdlID0gdCA9PiB7XG4gICAgICBmb3IgKHZhciBlID0gMCwgciA9IDA7IHIgPCB0Lmxlbmd0aDsgKytyKSB7XG4gICAgICAgIHZhciBuID0gdC5jaGFyQ29kZUF0KHIpO1xuICAgICAgICBuIDw9IDEyNyA/IGUrKyA6IG4gPD0gMjA0NyA/IGUgKz0gMiA6IG4gPj0gNTUyOTYgJiYgbiA8PSA1NzM0MyA/IChlICs9IDQsICsrcikgOiBlICs9IDM7XG4gICAgICB9XG4gICAgICByZXR1cm4gZTtcbiAgICB9LFxuICAgIHdlID0gZ2xvYmFsVGhpcy5UZXh0RGVjb2RlciAmJiBuZXcgVGV4dERlY29kZXIoKSxcbiAgICBiZSA9ICh0LCBlLCByLCBuKSA9PiB7XG4gICAgICB2YXIgYSA9IGUgKyByO1xuICAgICAgaWYgKG4pIHJldHVybiBhO1xuICAgICAgZm9yICg7IHRbZV0gJiYgIShlID49IGEpOykgKytlO1xuICAgICAgcmV0dXJuIGU7XG4gICAgfSxcbiAgICAkZSA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICBsZXQgZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdm9pZCAwID8gYXJndW1lbnRzWzFdIDogMCxcbiAgICAgICAgciA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdm9pZCAwLFxuICAgICAgICBuID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgPyBhcmd1bWVudHNbM10gOiB2b2lkIDA7XG4gICAgICB2YXIgYSA9IGJlKHQsIGUsIHIsIG4pO1xuICAgICAgaWYgKGEgLSBlID4gMTYgJiYgdC5idWZmZXIgJiYgd2UpIHJldHVybiB3ZS5kZWNvZGUodC5zdWJhcnJheShlLCBhKSk7XG4gICAgICBmb3IgKHZhciBpID0gXCJcIjsgZSA8IGE7KSB7XG4gICAgICAgIHZhciBzID0gdFtlKytdO1xuICAgICAgICBpZiAoIShzICYgMTI4KSkge1xuICAgICAgICAgIGkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShzKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdSA9IHRbZSsrXSAmIDYzO1xuICAgICAgICBpZiAoKHMgJiAyMjQpID09IDE5Mikge1xuICAgICAgICAgIGkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgocyAmIDMxKSA8PCA2IHwgdSk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGMgPSB0W2UrK10gJiA2MztcbiAgICAgICAgaWYgKChzICYgMjQwKSA9PSAyMjQgPyBzID0gKHMgJiAxNSkgPDwgMTIgfCB1IDw8IDYgfCBjIDogcyA9IChzICYgNykgPDwgMTggfCB1IDw8IDEyIHwgYyA8PCA2IHwgdFtlKytdICYgNjMsIHMgPCA2NTUzNikgaSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHMpO2Vsc2Uge1xuICAgICAgICAgIHZhciBoID0gcyAtIDY1NTM2O1xuICAgICAgICAgIGkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSg1NTI5NiB8IGggPj4gMTAsIDU2MzIwIHwgaCAmIDEwMjMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gaTtcbiAgICB9LFxuICAgIGZuID0gKHQsIGUsIHIpID0+IHQgPyAkZShXLCB0LCBlLCByKSA6IFwiXCIsXG4gICAgaG4gPSAodCwgZSkgPT4ge1xuICAgICAgZSA9IEYoZSksIGoodCwge1xuICAgICAgICBuYW1lOiBlLFxuICAgICAgICBmcm9tV2lyZVR5cGUocikge1xuICAgICAgICAgIHZhciBuID0gVFtyID4+IDJdLFxuICAgICAgICAgICAgYSA9IHIgKyA0LFxuICAgICAgICAgICAgaTtcbiAgICAgICAgICByZXR1cm4gaSA9IGZuKGEsIG4sICEwKSwgeihyKSwgaTtcbiAgICAgICAgfSxcbiAgICAgICAgdG9XaXJlVHlwZShyLCBuKSB7XG4gICAgICAgICAgbiBpbnN0YW5jZW9mIEFycmF5QnVmZmVyICYmIChuID0gbmV3IFVpbnQ4QXJyYXkobikpO1xuICAgICAgICAgIHZhciBhLFxuICAgICAgICAgICAgaSA9IHR5cGVvZiBuID09IFwic3RyaW5nXCI7XG4gICAgICAgICAgaSB8fCBBcnJheUJ1ZmZlci5pc1ZpZXcobikgJiYgbi5CWVRFU19QRVJfRUxFTUVOVCA9PSAxIHx8ICQoXCJDYW5ub3QgcGFzcyBub24tc3RyaW5nIHRvIHN0ZDo6c3RyaW5nXCIpLCBpID8gYSA9IGdlKG4pIDogYSA9IG4ubGVuZ3RoO1xuICAgICAgICAgIHZhciBzID0gWHQoNCArIGEgKyAxKSxcbiAgICAgICAgICAgIHUgPSBzICsgNDtcbiAgICAgICAgICByZXR1cm4gVFtzID4+IDJdID0gYSwgaSA/IHJ0KG4sIHUsIGEgKyAxKSA6IFcuc2V0KG4sIHUpLCByICE9PSBudWxsICYmIHIucHVzaCh6LCBzKSwgcztcbiAgICAgICAgfSxcbiAgICAgICAgcmVhZFZhbHVlRnJvbVBvaW50ZXI6IGl0LFxuICAgICAgICBkZXN0cnVjdG9yRnVuY3Rpb24ocikge1xuICAgICAgICAgIHoocik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgQ2UgPSBnbG9iYWxUaGlzLlRleHREZWNvZGVyID8gbmV3IFRleHREZWNvZGVyKFwidXRmLTE2bGVcIikgOiB2b2lkIDAsXG4gICAgZG4gPSAodCwgZSwgcikgPT4ge1xuICAgICAgdmFyIG4gPSB0ID4+IDEsXG4gICAgICAgIGEgPSBiZShhdCwgbiwgZSAvIDIsIHIpO1xuICAgICAgaWYgKGEgLSBuID4gMTYgJiYgQ2UpIHJldHVybiBDZS5kZWNvZGUoYXQuc3ViYXJyYXkobiwgYSkpO1xuICAgICAgZm9yICh2YXIgaSA9IFwiXCIsIHMgPSBuOyBzIDwgYTsgKytzKSB7XG4gICAgICAgIHZhciB1ID0gYXRbc107XG4gICAgICAgIGkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSh1KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpO1xuICAgIH0sXG4gICAgcG4gPSAodCwgZSwgcikgPT4ge1xuICAgICAgaWYgKHIgIT0gbnVsbCB8fCAociA9IDIxNDc0ODM2NDcpLCByIDwgMikgcmV0dXJuIDA7XG4gICAgICByIC09IDI7XG4gICAgICBmb3IgKHZhciBuID0gZSwgYSA9IHIgPCB0Lmxlbmd0aCAqIDIgPyByIC8gMiA6IHQubGVuZ3RoLCBpID0gMDsgaSA8IGE7ICsraSkge1xuICAgICAgICB2YXIgcyA9IHQuY2hhckNvZGVBdChpKTtcbiAgICAgICAgZHRbZSA+PiAxXSA9IHMsIGUgKz0gMjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkdFtlID4+IDFdID0gMCwgZSAtIG47XG4gICAgfSxcbiAgICB5biA9IHQgPT4gdC5sZW5ndGggKiAyLFxuICAgIHZuID0gKHQsIGUsIHIpID0+IHtcbiAgICAgIGZvciAodmFyIG4gPSBcIlwiLCBhID0gdCA+PiAyLCBpID0gMDsgIShpID49IGUgLyA0KTsgaSsrKSB7XG4gICAgICAgIHZhciBzID0gVFthICsgaV07XG4gICAgICAgIGlmICghcyAmJiAhcikgYnJlYWs7XG4gICAgICAgIG4gKz0gU3RyaW5nLmZyb21Db2RlUG9pbnQocyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbjtcbiAgICB9LFxuICAgIG1uID0gKHQsIGUsIHIpID0+IHtcbiAgICAgIGlmIChyICE9IG51bGwgfHwgKHIgPSAyMTQ3NDgzNjQ3KSwgciA8IDQpIHJldHVybiAwO1xuICAgICAgZm9yICh2YXIgbiA9IGUsIGEgPSBuICsgciAtIDQsIGkgPSAwOyBpIDwgdC5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIgcyA9IHQuY29kZVBvaW50QXQoaSk7XG4gICAgICAgIGlmIChzID4gNjU1MzUgJiYgaSsrLCBvdFtlID4+IDJdID0gcywgZSArPSA0LCBlICsgNCA+IGEpIGJyZWFrO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG90W2UgPj4gMl0gPSAwLCBlIC0gbjtcbiAgICB9LFxuICAgIGduID0gdCA9PiB7XG4gICAgICBmb3IgKHZhciBlID0gMCwgciA9IDA7IHIgPCB0Lmxlbmd0aDsgKytyKSB7XG4gICAgICAgIHZhciBuID0gdC5jb2RlUG9pbnRBdChyKTtcbiAgICAgICAgbiA+IDY1NTM1ICYmIHIrKywgZSArPSA0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGU7XG4gICAgfSxcbiAgICB3biA9ICh0LCBlLCByKSA9PiB7XG4gICAgICByID0gRihyKTtcbiAgICAgIHZhciBuLCBhLCBpO1xuICAgICAgZSA9PT0gMiA/IChuID0gZG4sIGEgPSBwbiwgaSA9IHluKSA6IChuID0gdm4sIGEgPSBtbiwgaSA9IGduKSwgaih0LCB7XG4gICAgICAgIG5hbWU6IHIsXG4gICAgICAgIGZyb21XaXJlVHlwZTogcyA9PiB7XG4gICAgICAgICAgdmFyIHUgPSBUW3MgPj4gMl0sXG4gICAgICAgICAgICBjID0gbihzICsgNCwgdSAqIGUsICEwKTtcbiAgICAgICAgICByZXR1cm4geihzKSwgYztcbiAgICAgICAgfSxcbiAgICAgICAgdG9XaXJlVHlwZTogKHMsIHUpID0+IHtcbiAgICAgICAgICB0eXBlb2YgdSAhPSBcInN0cmluZ1wiICYmICQoYENhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gQysrIHN0cmluZyB0eXBlICR7cn1gKTtcbiAgICAgICAgICB2YXIgYyA9IGkodSksXG4gICAgICAgICAgICBoID0gWHQoNCArIGMgKyBlKTtcbiAgICAgICAgICByZXR1cm4gVFtoID4+IDJdID0gYyAvIGUsIGEodSwgaCArIDQsIGMgKyBlKSwgcyAhPT0gbnVsbCAmJiBzLnB1c2goeiwgaCksIGg7XG4gICAgICAgIH0sXG4gICAgICAgIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBpdCxcbiAgICAgICAgZGVzdHJ1Y3RvckZ1bmN0aW9uKHMpIHtcbiAgICAgICAgICB6KHMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGJuID0gKHQsIGUsIHIsIG4sIGEsIGkpID0+IHtcbiAgICAgIGd0W3RdID0ge1xuICAgICAgICBuYW1lOiBGKGUpLFxuICAgICAgICByYXdDb25zdHJ1Y3RvcjogTChyLCBuKSxcbiAgICAgICAgcmF3RGVzdHJ1Y3RvcjogTChhLCBpKSxcbiAgICAgICAgZmllbGRzOiBbXVxuICAgICAgfTtcbiAgICB9LFxuICAgICRuID0gKHQsIGUsIHIsIG4sIGEsIGksIHMsIHUsIGMsIGgpID0+IHtcbiAgICAgIGd0W3RdLmZpZWxkcy5wdXNoKHtcbiAgICAgICAgZmllbGROYW1lOiBGKGUpLFxuICAgICAgICBnZXR0ZXJSZXR1cm5UeXBlOiByLFxuICAgICAgICBnZXR0ZXI6IEwobiwgYSksXG4gICAgICAgIGdldHRlckNvbnRleHQ6IGksXG4gICAgICAgIHNldHRlckFyZ3VtZW50VHlwZTogcyxcbiAgICAgICAgc2V0dGVyOiBMKHUsIGMpLFxuICAgICAgICBzZXR0ZXJDb250ZXh0OiBoXG4gICAgICB9KTtcbiAgICB9LFxuICAgIENuID0gKHQsIGUpID0+IHtcbiAgICAgIGUgPSBGKGUpLCBqKHQsIHtcbiAgICAgICAgaXNWb2lkOiAhMCxcbiAgICAgICAgbmFtZTogZSxcbiAgICAgICAgZnJvbVdpcmVUeXBlOiAoKSA9PiB7fSxcbiAgICAgICAgdG9XaXJlVHlwZTogKHIsIG4pID0+IHt9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHp0ID0gW10sXG4gICAgVG4gPSB0ID0+IHtcbiAgICAgIHZhciBlID0genQubGVuZ3RoO1xuICAgICAgcmV0dXJuIHp0LnB1c2godCksIGU7XG4gICAgfSxcbiAgICBFbiA9ICh0LCBlKSA9PiB7XG4gICAgICB2YXIgciA9IFpbdF07XG4gICAgICByZXR1cm4gciA9PT0gdm9pZCAwICYmICQoYCR7ZX0gaGFzIHVua25vd24gdHlwZSAke3BlKHQpfWApLCByO1xuICAgIH0sXG4gICAgUG4gPSAodCwgZSkgPT4ge1xuICAgICAgZm9yICh2YXIgciA9IG5ldyBBcnJheSh0KSwgbiA9IDA7IG4gPCB0OyArK24pIHJbbl0gPSBFbihUW2UgKyBuICogNCA+PiAyXSwgYHBhcmFtZXRlciAke259YCk7XG4gICAgICByZXR1cm4gcjtcbiAgICB9LFxuICAgIE9uID0gKHQsIGUsIHIpID0+IHtcbiAgICAgIHZhciBuID0gW10sXG4gICAgICAgIGEgPSB0KG4sIHIpO1xuICAgICAgcmV0dXJuIG4ubGVuZ3RoICYmIChUW2UgPj4gMl0gPSBCLnRvSGFuZGxlKG4pKSwgYTtcbiAgICB9LFxuICAgIF9uID0ge30sXG4gICAgVGUgPSB0ID0+IHtcbiAgICAgIHZhciBlID0gX25bdF07XG4gICAgICByZXR1cm4gZSA9PT0gdm9pZCAwID8gRih0KSA6IGU7XG4gICAgfSxcbiAgICB4biA9ICh0LCBlLCByKSA9PiB7XG4gICAgICB2YXIgbiA9IDgsXG4gICAgICAgIFthLCAuLi5pXSA9IFBuKHQsIGUpLFxuICAgICAgICBzID0gYS50b1dpcmVUeXBlLmJpbmQoYSksXG4gICAgICAgIHUgPSBpLm1hcCh5ID0+IHkucmVhZFZhbHVlRnJvbVBvaW50ZXIuYmluZCh5KSk7XG4gICAgICB0LS07XG4gICAgICB2YXIgYyA9IG5ldyBBcnJheSh0KSxcbiAgICAgICAgaCA9ICh5LCBDLCBQLCBTKSA9PiB7XG4gICAgICAgICAgZm9yICh2YXIgeCA9IDAsIE8gPSAwOyBPIDwgdDsgKytPKSBjW09dID0gdVtPXShTICsgeCksIHggKz0gbjtcbiAgICAgICAgICB2YXIgRTtcbiAgICAgICAgICBzd2l0Y2ggKHIpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgRSA9IEIudG9WYWx1ZSh5KS5hcHBseShudWxsLCBjKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgIEUgPSBSZWZsZWN0LmNvbnN0cnVjdChCLnRvVmFsdWUoeSksIGMpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgRSA9IGNbMF07XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICBFID0gQi50b1ZhbHVlKHkpW1RlKEMpXSguLi5jKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBPbihzLCBQLCBFKTtcbiAgICAgICAgfSxcbiAgICAgICAgcCA9IGBtZXRob2RDYWxsZXI8KCR7aS5tYXAoeSA9PiB5Lm5hbWUpfSkgPT4gJHthLm5hbWV9PmA7XG4gICAgICByZXR1cm4gVG4oVXQocCwgaCkpO1xuICAgIH0sXG4gICAgU24gPSB0ID0+IHQgPyAodCA9IFRlKHQpLCBCLnRvSGFuZGxlKGdsb2JhbFRoaXNbdF0pKSA6IEIudG9IYW5kbGUoZ2xvYmFsVGhpcyksXG4gICAgSW4gPSB0ID0+IHtcbiAgICAgIHQgPiA5ICYmIChKW3QgKyAxXSArPSAxKTtcbiAgICB9LFxuICAgIERuID0gKHQsIGUsIHIsIG4sIGEpID0+IHp0W3RdKGUsIHIsIG4sIGEpLFxuICAgIE1uID0gdCA9PiB7XG4gICAgICB2YXIgZSA9IEIudG9WYWx1ZSh0KTtcbiAgICAgIEx0KGUpLCBOdCh0KTtcbiAgICB9LFxuICAgIEFuID0gKHQsIGUsIHIsIG4pID0+IHtcbiAgICAgIHZhciBhID0gKC8qIEBfX1BVUkVfXyAqL25ldyBEYXRlKCkpLmdldEZ1bGxZZWFyKCksXG4gICAgICAgIGkgPSBuZXcgRGF0ZShhLCAwLCAxKSxcbiAgICAgICAgcyA9IG5ldyBEYXRlKGEsIDYsIDEpLFxuICAgICAgICB1ID0gaS5nZXRUaW1lem9uZU9mZnNldCgpLFxuICAgICAgICBjID0gcy5nZXRUaW1lem9uZU9mZnNldCgpLFxuICAgICAgICBoID0gTWF0aC5tYXgodSwgYyk7XG4gICAgICBUW3QgPj4gMl0gPSBoICogNjAsIG90W2UgPj4gMl0gPSArKHUgIT0gYyk7XG4gICAgICB2YXIgcCA9IFAgPT4ge1xuICAgICAgICAgIHZhciBTID0gUCA+PSAwID8gXCItXCIgOiBcIitcIixcbiAgICAgICAgICAgIHggPSBNYXRoLmFicyhQKSxcbiAgICAgICAgICAgIE8gPSBTdHJpbmcoTWF0aC5mbG9vcih4IC8gNjApKS5wYWRTdGFydCgyLCBcIjBcIiksXG4gICAgICAgICAgICBFID0gU3RyaW5nKHggJSA2MCkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICAgICAgICAgIHJldHVybiBgVVRDJHtTfSR7T30ke0V9YDtcbiAgICAgICAgfSxcbiAgICAgICAgeSA9IHAodSksXG4gICAgICAgIEMgPSBwKGMpO1xuICAgICAgYyA8IHUgPyAocnQoeSwgciwgMTcpLCBydChDLCBuLCAxNykpIDogKHJ0KHksIG4sIDE3KSwgcnQoQywgciwgMTcpKTtcbiAgICB9LFxuICAgIEZuID0gKCkgPT4gMjE0NzQ4MzY0OCxcbiAgICBSbiA9ICh0LCBlKSA9PiBNYXRoLmNlaWwodCAvIGUpICogZSxcbiAgICBMbiA9IHQgPT4ge1xuICAgICAgdmFyIGUgPSBQdC5idWZmZXIuYnl0ZUxlbmd0aCxcbiAgICAgICAgciA9ICh0IC0gZSArIDY1NTM1KSAvIDY1NTM2IHwgMDtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBQdC5ncm93KHIpLCByZSgpLCAxO1xuICAgICAgfSBjYXRjaCB7fVxuICAgIH0sXG4gICAgam4gPSB0ID0+IHtcbiAgICAgIHZhciBlID0gVy5sZW5ndGg7XG4gICAgICB0ID4+Pj0gMDtcbiAgICAgIHZhciByID0gRm4oKTtcbiAgICAgIGlmICh0ID4gcikgcmV0dXJuICExO1xuICAgICAgZm9yICh2YXIgbiA9IDE7IG4gPD0gNDsgbiAqPSAyKSB7XG4gICAgICAgIHZhciBhID0gZSAqICgxICsgMC4yIC8gbik7XG4gICAgICAgIGEgPSBNYXRoLm1pbihhLCB0ICsgMTAwNjYzMjk2KTtcbiAgICAgICAgdmFyIGkgPSBNYXRoLm1pbihyLCBSbihNYXRoLm1heCh0LCBhKSwgNjU1MzYpKSxcbiAgICAgICAgICBzID0gTG4oaSk7XG4gICAgICAgIGlmIChzKSByZXR1cm4gITA7XG4gICAgICB9XG4gICAgICByZXR1cm4gITE7XG4gICAgfSxcbiAgICBHdCA9IHt9LFxuICAgIEJuID0gKCkgPT4gXyB8fCBcIi4vdGhpcy5wcm9ncmFtXCIsXG4gICAgY3QgPSAoKSA9PiB7XG4gICAgICBpZiAoIWN0LnN0cmluZ3MpIHtcbiAgICAgICAgdmFyIHQgPSAodHlwZW9mIG5hdmlnYXRvciA9PSBcIm9iamVjdFwiICYmIG5hdmlnYXRvci5sYW5ndWFnZSB8fCBcIkNcIikucmVwbGFjZShcIi1cIiwgXCJfXCIpICsgXCIuVVRGLThcIixcbiAgICAgICAgICBlID0ge1xuICAgICAgICAgICAgVVNFUjogXCJ3ZWJfdXNlclwiLFxuICAgICAgICAgICAgTE9HTkFNRTogXCJ3ZWJfdXNlclwiLFxuICAgICAgICAgICAgUEFUSDogXCIvXCIsXG4gICAgICAgICAgICBQV0Q6IFwiL1wiLFxuICAgICAgICAgICAgSE9NRTogXCIvaG9tZS93ZWJfdXNlclwiLFxuICAgICAgICAgICAgTEFORzogdCxcbiAgICAgICAgICAgIF86IEJuKClcbiAgICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciByIGluIEd0KSBHdFtyXSA9PT0gdm9pZCAwID8gZGVsZXRlIGVbcl0gOiBlW3JdID0gR3Rbcl07XG4gICAgICAgIHZhciBuID0gW107XG4gICAgICAgIGZvciAodmFyIHIgaW4gZSkgbi5wdXNoKGAke3J9PSR7ZVtyXX1gKTtcbiAgICAgICAgY3Quc3RyaW5ncyA9IG47XG4gICAgICB9XG4gICAgICByZXR1cm4gY3Quc3RyaW5ncztcbiAgICB9LFxuICAgIFVuID0gKHQsIGUpID0+IHtcbiAgICAgIHZhciByID0gMCxcbiAgICAgICAgbiA9IDA7XG4gICAgICBmb3IgKHZhciBhIG9mIGN0KCkpIHtcbiAgICAgICAgdmFyIGkgPSBlICsgcjtcbiAgICAgICAgVFt0ICsgbiA+PiAyXSA9IGksIHIgKz0gcnQoYSwgaSwgMSAvIDApICsgMSwgbiArPSA0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfSxcbiAgICBWbiA9ICh0LCBlKSA9PiB7XG4gICAgICB2YXIgciA9IGN0KCk7XG4gICAgICBUW3QgPj4gMl0gPSByLmxlbmd0aDtcbiAgICAgIHZhciBuID0gMDtcbiAgICAgIGZvciAodmFyIGEgb2YgcikgbiArPSBnZShhKSArIDE7XG4gICAgICByZXR1cm4gVFtlID4+IDJdID0gbiwgMDtcbiAgICB9LFxuICAgIFduID0gdCA9PiA1MjtcbiAgZnVuY3Rpb24gSG4odCwgZSwgciwgbiwgYSkge1xuICAgIHJldHVybiA3MDtcbiAgfVxuICB2YXIga24gPSBbbnVsbCwgW10sIFtdXSxcbiAgICBObiA9ICh0LCBlKSA9PiB7XG4gICAgICB2YXIgciA9IGtuW3RdO1xuICAgICAgZSA9PT0gMCB8fCBlID09PSAxMCA/ICgodCA9PT0gMSA/IG50IDogVikoJGUocikpLCByLmxlbmd0aCA9IDApIDogci5wdXNoKGUpO1xuICAgIH0sXG4gICAgem4gPSAodCwgZSwgciwgbikgPT4ge1xuICAgICAgZm9yICh2YXIgYSA9IDAsIGkgPSAwOyBpIDwgcjsgaSsrKSB7XG4gICAgICAgIHZhciBzID0gVFtlID4+IDJdLFxuICAgICAgICAgIHUgPSBUW2UgKyA0ID4+IDJdO1xuICAgICAgICBlICs9IDg7XG4gICAgICAgIGZvciAodmFyIGMgPSAwOyBjIDwgdTsgYysrKSBObih0LCBXW3MgKyBjXSk7XG4gICAgICAgIGEgKz0gdTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBUW24gPj4gMl0gPSBhLCAwO1xuICAgIH0sXG4gICAgR24gPSB0ID0+IHQ7XG4gIGlmIChBcigpLCB6cigpLCBmLm5vRXhpdFJ1bnRpbWUgJiYgZi5ub0V4aXRSdW50aW1lLCBmLnByaW50ICYmIChudCA9IGYucHJpbnQpLCBmLnByaW50RXJyICYmIChWID0gZi5wcmludEVyciksIGYud2FzbUJpbmFyeSAmJiAocSA9IGYud2FzbUJpbmFyeSksIGYuYXJndW1lbnRzICYmIGYuYXJndW1lbnRzLCBmLnRoaXNQcm9ncmFtICYmIChfID0gZi50aGlzUHJvZ3JhbSksIGYucHJlSW5pdCkgZm9yICh0eXBlb2YgZi5wcmVJbml0ID09IFwiZnVuY3Rpb25cIiAmJiAoZi5wcmVJbml0ID0gW2YucHJlSW5pdF0pOyBmLnByZUluaXQubGVuZ3RoID4gMDspIGYucHJlSW5pdC5zaGlmdCgpKCk7XG4gIHZhciBFZSwgeiwgWHQsIFBlLCB2LCBPZSwgX2UsIHhlLCBTZSwgSWUsIERlLCBNZSwgQWUsIFB0LCBGZTtcbiAgZnVuY3Rpb24gWG4odCkge1xuICAgIEVlID0gdC55YSwgeiA9IGYuX2ZyZWUgPSB0LnphLCBYdCA9IGYuX21hbGxvYyA9IHQuQmEsIFBlID0gdC5DYSwgdiA9IHQuRGEsIE9lID0gdC5FYSwgX2UgPSB0LkZhLCB4ZSA9IHQuR2EsIFNlID0gdC5IYSwgSWUgPSB0LklhLCBEZSA9IHQuSmEsIE4udmlpamlpID0gdC5LYSwgTWUgPSBOLmlpaWpqID0gdC5MYSwgTi5qaWppID0gdC5NYSwgQWUgPSBOLmppaWlpID0gdC5OYSwgTi5paWlpaWogPSB0Lk9hLCBOLmlpaWlpamogPSB0LlBhLCBOLmlpaWlpaWpqID0gdC5RYSwgUHQgPSB0LndhLCBGZSA9IHQuQWE7XG4gIH1cbiAgdmFyIHFuID0ge1xuICAgIHM6IHZyLFxuICAgIHc6IG1yLFxuICAgIGE6IGdyLFxuICAgIGo6IHdyLFxuICAgIG06IGJyLFxuICAgIFE6ICRyLFxuICAgIHA6IENyLFxuICAgIFU6IFRyLFxuICAgIGQ6IEVyLFxuICAgIGNhOiBQcixcbiAgICB0YTogX3IsXG4gICAgYmE6IHhyLFxuICAgIG9hOiBJcixcbiAgICByYTogWnIsXG4gICAgcWE6IEpyLFxuICAgIEg6IEtyLFxuICAgIG1hOiB0bixcbiAgICBYOiBybixcbiAgICBZOiBubixcbiAgICB4OiBvbixcbiAgICB0OiBzbixcbiAgICBzYTogY24sXG4gICAgbmE6IGhuLFxuICAgIFI6IHduLFxuICAgIEk6IGJuLFxuICAgIHVhOiAkbixcbiAgICBwYTogQ24sXG4gICAgTjogeG4sXG4gICAgdmE6IE50LFxuICAgIEQ6IFNuLFxuICAgIFM6IEluLFxuICAgIE06IERuLFxuICAgIGlhOiBNbixcbiAgICBkYTogQW4sXG4gICAgZ2E6IGpuLFxuICAgIGVhOiBVbixcbiAgICBmYTogVm4sXG4gICAgaGE6IFduLFxuICAgICQ6IEhuLFxuICAgIFY6IHpuLFxuICAgIEs6IG1hLFxuICAgIEM6IGJhLFxuICAgIFo6IGVhLFxuICAgIFQ6IE9hLFxuICAgIHI6IGRhLFxuICAgIGI6IEtuLFxuICAgIEU6IHZhLFxuICAgIGthOiBDYSxcbiAgICBjOiByYSxcbiAgICBqYTogVGEsXG4gICAgaDogdGEsXG4gICAgaTogb2EsXG4gICAgcTogY2EsXG4gICAgUDogeWEsXG4gICAgdjogZmEsXG4gICAgRjogaGEsXG4gICAgTDogcGEsXG4gICAgejogJGEsXG4gICAgSjogX2EsXG4gICAgYWE6IHhhLFxuICAgIF86IFNhLFxuICAgIGY6IG5hLFxuICAgIGw6IFluLFxuICAgIGU6IEpuLFxuICAgIGc6IFFuLFxuICAgIE86IFBhLFxuICAgIGs6IFpuLFxuICAgIGxhOiBnYSxcbiAgICBvOiBsYSxcbiAgICBCOiBpYSxcbiAgICB1OiB3YSxcbiAgICBXOiB1YSxcbiAgICBBOiBFYSxcbiAgICBuOiBhYSxcbiAgICBHOiBzYSxcbiAgICB5OiBHblxuICB9O1xuICBmdW5jdGlvbiBZbih0LCBlKSB7XG4gICAgdmFyIHIgPSBnKCk7XG4gICAgdHJ5IHtcbiAgICAgIHcodCkoZSk7XG4gICAgfSBjYXRjaCAobikge1xuICAgICAgaWYgKG0ociksIG4gIT09IG4gKyAwKSB0aHJvdyBuO1xuICAgICAgdigxLCAwKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gWm4odCwgZSwgciwgbiwgYSkge1xuICAgIHZhciBpID0gZygpO1xuICAgIHRyeSB7XG4gICAgICB3KHQpKGUsIHIsIG4sIGEpO1xuICAgIH0gY2F0Y2ggKHMpIHtcbiAgICAgIGlmIChtKGkpLCBzICE9PSBzICsgMCkgdGhyb3cgcztcbiAgICAgIHYoMSwgMCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIFFuKHQsIGUsIHIsIG4pIHtcbiAgICB2YXIgYSA9IGcoKTtcbiAgICB0cnkge1xuICAgICAgdyh0KShlLCByLCBuKTtcbiAgICB9IGNhdGNoIChpKSB7XG4gICAgICBpZiAobShhKSwgaSAhPT0gaSArIDApIHRocm93IGk7XG4gICAgICB2KDEsIDApO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBKbih0LCBlLCByKSB7XG4gICAgdmFyIG4gPSBnKCk7XG4gICAgdHJ5IHtcbiAgICAgIHcodCkoZSwgcik7XG4gICAgfSBjYXRjaCAoYSkge1xuICAgICAgaWYgKG0obiksIGEgIT09IGEgKyAwKSB0aHJvdyBhO1xuICAgICAgdigxLCAwKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gS24odCwgZSkge1xuICAgIHZhciByID0gZygpO1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gdyh0KShlKTtcbiAgICB9IGNhdGNoIChuKSB7XG4gICAgICBpZiAobShyKSwgbiAhPT0gbiArIDApIHRocm93IG47XG4gICAgICB2KDEsIDApO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiB0YSh0LCBlLCByLCBuKSB7XG4gICAgdmFyIGEgPSBnKCk7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB3KHQpKGUsIHIsIG4pO1xuICAgIH0gY2F0Y2ggKGkpIHtcbiAgICAgIGlmIChtKGEpLCBpICE9PSBpICsgMCkgdGhyb3cgaTtcbiAgICAgIHYoMSwgMCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGVhKHQsIGUsIHIsIG4sIGEsIGkpIHtcbiAgICB2YXIgcyA9IGcoKTtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHcodCkoZSwgciwgbiwgYSwgaSk7XG4gICAgfSBjYXRjaCAodSkge1xuICAgICAgaWYgKG0ocyksIHUgIT09IHUgKyAwKSB0aHJvdyB1O1xuICAgICAgdigxLCAwKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gcmEodCwgZSwgcikge1xuICAgIHZhciBuID0gZygpO1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gdyh0KShlLCByKTtcbiAgICB9IGNhdGNoIChhKSB7XG4gICAgICBpZiAobShuKSwgYSAhPT0gYSArIDApIHRocm93IGE7XG4gICAgICB2KDEsIDApO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBuYSh0KSB7XG4gICAgdmFyIGUgPSBnKCk7XG4gICAgdHJ5IHtcbiAgICAgIHcodCkoKTtcbiAgICB9IGNhdGNoIChyKSB7XG4gICAgICBpZiAobShlKSwgciAhPT0gciArIDApIHRocm93IHI7XG4gICAgICB2KDEsIDApO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBhYSh0LCBlLCByLCBuLCBhLCBpLCBzLCB1LCBjLCBoLCBwKSB7XG4gICAgdmFyIHkgPSBnKCk7XG4gICAgdHJ5IHtcbiAgICAgIHcodCkoZSwgciwgbiwgYSwgaSwgcywgdSwgYywgaCwgcCk7XG4gICAgfSBjYXRjaCAoQykge1xuICAgICAgaWYgKG0oeSksIEMgIT09IEMgKyAwKSB0aHJvdyBDO1xuICAgICAgdigxLCAwKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gb2EodCwgZSwgciwgbiwgYSkge1xuICAgIHZhciBpID0gZygpO1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gdyh0KShlLCByLCBuLCBhKTtcbiAgICB9IGNhdGNoIChzKSB7XG4gICAgICBpZiAobShpKSwgcyAhPT0gcyArIDApIHRocm93IHM7XG4gICAgICB2KDEsIDApO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBpYSh0LCBlLCByLCBuLCBhLCBpLCBzKSB7XG4gICAgdmFyIHUgPSBnKCk7XG4gICAgdHJ5IHtcbiAgICAgIHcodCkoZSwgciwgbiwgYSwgaSwgcyk7XG4gICAgfSBjYXRjaCAoYykge1xuICAgICAgaWYgKG0odSksIGMgIT09IGMgKyAwKSB0aHJvdyBjO1xuICAgICAgdigxLCAwKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gc2EodCwgZSwgciwgbiwgYSwgaSwgcywgdSwgYywgaCwgcCwgeSwgQywgUCwgUywgeCkge1xuICAgIHZhciBPID0gZygpO1xuICAgIHRyeSB7XG4gICAgICB3KHQpKGUsIHIsIG4sIGEsIGksIHMsIHUsIGMsIGgsIHAsIHksIEMsIFAsIFMsIHgpO1xuICAgIH0gY2F0Y2ggKEUpIHtcbiAgICAgIGlmIChtKE8pLCBFICE9PSBFICsgMCkgdGhyb3cgRTtcbiAgICAgIHYoMSwgMCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHVhKHQsIGUsIHIsIG4sIGEsIGksIHMsIHUsIGMpIHtcbiAgICB2YXIgaCA9IGcoKTtcbiAgICB0cnkge1xuICAgICAgdyh0KShlLCByLCBuLCBhLCBpLCBzLCB1LCBjKTtcbiAgICB9IGNhdGNoIChwKSB7XG4gICAgICBpZiAobShoKSwgcCAhPT0gcCArIDApIHRocm93IHA7XG4gICAgICB2KDEsIDApO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBjYSh0LCBlLCByLCBuLCBhLCBpKSB7XG4gICAgdmFyIHMgPSBnKCk7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB3KHQpKGUsIHIsIG4sIGEsIGkpO1xuICAgIH0gY2F0Y2ggKHUpIHtcbiAgICAgIGlmIChtKHMpLCB1ICE9PSB1ICsgMCkgdGhyb3cgdTtcbiAgICAgIHYoMSwgMCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGxhKHQsIGUsIHIsIG4sIGEsIGkpIHtcbiAgICB2YXIgcyA9IGcoKTtcbiAgICB0cnkge1xuICAgICAgdyh0KShlLCByLCBuLCBhLCBpKTtcbiAgICB9IGNhdGNoICh1KSB7XG4gICAgICBpZiAobShzKSwgdSAhPT0gdSArIDApIHRocm93IHU7XG4gICAgICB2KDEsIDApO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBmYSh0LCBlLCByLCBuLCBhLCBpLCBzKSB7XG4gICAgdmFyIHUgPSBnKCk7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB3KHQpKGUsIHIsIG4sIGEsIGksIHMpO1xuICAgIH0gY2F0Y2ggKGMpIHtcbiAgICAgIGlmIChtKHUpLCBjICE9PSBjICsgMCkgdGhyb3cgYztcbiAgICAgIHYoMSwgMCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGhhKHQsIGUsIHIsIG4sIGEsIGksIHMsIHUpIHtcbiAgICB2YXIgYyA9IGcoKTtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHcodCkoZSwgciwgbiwgYSwgaSwgcywgdSk7XG4gICAgfSBjYXRjaCAoaCkge1xuICAgICAgaWYgKG0oYyksIGggIT09IGggKyAwKSB0aHJvdyBoO1xuICAgICAgdigxLCAwKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZGEodCkge1xuICAgIHZhciBlID0gZygpO1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gdyh0KSgpO1xuICAgIH0gY2F0Y2ggKHIpIHtcbiAgICAgIGlmIChtKGUpLCByICE9PSByICsgMCkgdGhyb3cgcjtcbiAgICAgIHYoMSwgMCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHBhKHQsIGUsIHIsIG4sIGEsIGksIHMsIHUsIGMpIHtcbiAgICB2YXIgaCA9IGcoKTtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHcodCkoZSwgciwgbiwgYSwgaSwgcywgdSwgYyk7XG4gICAgfSBjYXRjaCAocCkge1xuICAgICAgaWYgKG0oaCksIHAgIT09IHAgKyAwKSB0aHJvdyBwO1xuICAgICAgdigxLCAwKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24geWEodCwgZSwgciwgbiwgYSwgaSwgcykge1xuICAgIHZhciB1ID0gZygpO1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gdyh0KShlLCByLCBuLCBhLCBpLCBzKTtcbiAgICB9IGNhdGNoIChjKSB7XG4gICAgICBpZiAobSh1KSwgYyAhPT0gYyArIDApIHRocm93IGM7XG4gICAgICB2KDEsIDApO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiB2YSh0LCBlLCByLCBuKSB7XG4gICAgdmFyIGEgPSBnKCk7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB3KHQpKGUsIHIsIG4pO1xuICAgIH0gY2F0Y2ggKGkpIHtcbiAgICAgIGlmIChtKGEpLCBpICE9PSBpICsgMCkgdGhyb3cgaTtcbiAgICAgIHYoMSwgMCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIG1hKHQsIGUsIHIsIG4pIHtcbiAgICB2YXIgYSA9IGcoKTtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHcodCkoZSwgciwgbik7XG4gICAgfSBjYXRjaCAoaSkge1xuICAgICAgaWYgKG0oYSksIGkgIT09IGkgKyAwKSB0aHJvdyBpO1xuICAgICAgdigxLCAwKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZ2EodCwgZSwgciwgbiwgYSwgaSwgcywgdSkge1xuICAgIHZhciBjID0gZygpO1xuICAgIHRyeSB7XG4gICAgICB3KHQpKGUsIHIsIG4sIGEsIGksIHMsIHUpO1xuICAgIH0gY2F0Y2ggKGgpIHtcbiAgICAgIGlmIChtKGMpLCBoICE9PSBoICsgMCkgdGhyb3cgaDtcbiAgICAgIHYoMSwgMCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHdhKHQsIGUsIHIsIG4sIGEsIGksIHMsIHUpIHtcbiAgICB2YXIgYyA9IGcoKTtcbiAgICB0cnkge1xuICAgICAgdyh0KShlLCByLCBuLCBhLCBpLCBzLCB1KTtcbiAgICB9IGNhdGNoIChoKSB7XG4gICAgICBpZiAobShjKSwgaCAhPT0gaCArIDApIHRocm93IGg7XG4gICAgICB2KDEsIDApO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBiYSh0LCBlLCByLCBuLCBhLCBpKSB7XG4gICAgdmFyIHMgPSBnKCk7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB3KHQpKGUsIHIsIG4sIGEsIGkpO1xuICAgIH0gY2F0Y2ggKHUpIHtcbiAgICAgIGlmIChtKHMpLCB1ICE9PSB1ICsgMCkgdGhyb3cgdTtcbiAgICAgIHYoMSwgMCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uICRhKHQsIGUsIHIsIG4sIGEsIGksIHMsIHUsIGMsIGgpIHtcbiAgICB2YXIgcCA9IGcoKTtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHcodCkoZSwgciwgbiwgYSwgaSwgcywgdSwgYywgaCk7XG4gICAgfSBjYXRjaCAoeSkge1xuICAgICAgaWYgKG0ocCksIHkgIT09IHkgKyAwKSB0aHJvdyB5O1xuICAgICAgdigxLCAwKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gQ2EodCwgZSwgcikge1xuICAgIHZhciBuID0gZygpO1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gdyh0KShlLCByKTtcbiAgICB9IGNhdGNoIChhKSB7XG4gICAgICBpZiAobShuKSwgYSAhPT0gYSArIDApIHRocm93IGE7XG4gICAgICB2KDEsIDApO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBUYSh0LCBlLCByLCBuLCBhKSB7XG4gICAgdmFyIGkgPSBnKCk7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB3KHQpKGUsIHIsIG4sIGEpO1xuICAgIH0gY2F0Y2ggKHMpIHtcbiAgICAgIGlmIChtKGkpLCBzICE9PSBzICsgMCkgdGhyb3cgcztcbiAgICAgIHYoMSwgMCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIEVhKHQsIGUsIHIsIG4sIGEsIGksIHMsIHUsIGMsIGgpIHtcbiAgICB2YXIgcCA9IGcoKTtcbiAgICB0cnkge1xuICAgICAgdyh0KShlLCByLCBuLCBhLCBpLCBzLCB1LCBjLCBoKTtcbiAgICB9IGNhdGNoICh5KSB7XG4gICAgICBpZiAobShwKSwgeSAhPT0geSArIDApIHRocm93IHk7XG4gICAgICB2KDEsIDApO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBQYSh0LCBlLCByLCBuLCBhLCBpLCBzKSB7XG4gICAgdmFyIHUgPSBnKCk7XG4gICAgdHJ5IHtcbiAgICAgIHcodCkoZSwgciwgbiwgYSwgaSwgcyk7XG4gICAgfSBjYXRjaCAoYykge1xuICAgICAgaWYgKG0odSksIGMgIT09IGMgKyAwKSB0aHJvdyBjO1xuICAgICAgdigxLCAwKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gT2EodCwgZSwgciwgbikge1xuICAgIHZhciBhID0gZygpO1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gdyh0KShlLCByLCBuKTtcbiAgICB9IGNhdGNoIChpKSB7XG4gICAgICBpZiAobShhKSwgaSAhPT0gaSArIDApIHRocm93IGk7XG4gICAgICB2KDEsIDApO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBfYSh0LCBlLCByLCBuLCBhLCBpLCBzLCB1LCBjLCBoLCBwLCB5KSB7XG4gICAgdmFyIEMgPSBnKCk7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB3KHQpKGUsIHIsIG4sIGEsIGksIHMsIHUsIGMsIGgsIHAsIHkpO1xuICAgIH0gY2F0Y2ggKFApIHtcbiAgICAgIGlmIChtKEMpLCBQICE9PSBQICsgMCkgdGhyb3cgUDtcbiAgICAgIHYoMSwgMCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHhhKHQsIGUsIHIsIG4sIGEsIGksIHMpIHtcbiAgICB2YXIgdSA9IGcoKTtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIE1lKHQsIGUsIHIsIG4sIGEsIGksIHMpO1xuICAgIH0gY2F0Y2ggKGMpIHtcbiAgICAgIGlmIChtKHUpLCBjICE9PSBjICsgMCkgdGhyb3cgYztcbiAgICAgIHYoMSwgMCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIFNhKHQsIGUsIHIsIG4sIGEpIHtcbiAgICB2YXIgaSA9IGcoKTtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIEFlKHQsIGUsIHIsIG4sIGEpO1xuICAgIH0gY2F0Y2ggKHMpIHtcbiAgICAgIGlmIChtKGkpLCBzICE9PSBzICsgMCkgdGhyb3cgcztcbiAgICAgIHYoMSwgMCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIElhKCkge1xuICAgIGFyKCk7XG4gICAgZnVuY3Rpb24gdCgpIHtcbiAgICAgIHZhciBlLCByO1xuICAgICAgZi5jYWxsZWRSdW4gPSAhMCwgIWh0ICYmIChvcigpLCAoZSA9IFF0KSA9PT0gbnVsbCB8fCBlID09PSB2b2lkIDAgfHwgZShmKSwgKHIgPSBmLm9uUnVudGltZUluaXRpYWxpemVkKSA9PT0gbnVsbCB8fCByID09PSB2b2lkIDAgfHwgci5jYWxsKGYpLCBpcigpKTtcbiAgICB9XG4gICAgZi5zZXRTdGF0dXMgPyAoZi5zZXRTdGF0dXMoXCJSdW5uaW5nLi4uXCIpLCBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gZi5zZXRTdGF0dXMoXCJcIiksIDEpLCB0KCk7XG4gICAgfSwgMSkpIDogdCgpO1xuICB9XG4gIHZhciBsdDtcbiAgcmV0dXJuIGx0ID0gYXdhaXQgZHIoKSwgSWEoKSwgZWUgPyBsID0gZiA6IGwgPSBuZXcgUHJvbWlzZSgodCwgZSkgPT4ge1xuICAgIFF0ID0gdCwgSnQgPSBlO1xuICB9KSwgbDtcbn1cbmZ1bmN0aW9uIHFlKG8pIHtcbiAgcmV0dXJuIFhlKFp0LCBvKTtcbn1cbmZ1bmN0aW9uIG1vKCkge1xuICByZXR1cm4gcWEoWnQpO1xufVxuZnVuY3Rpb24gZ28obykge1xuICBxZSh7XG4gICAgb3ZlcnJpZGVzOiBvLFxuICAgIGVxdWFsaXR5Rm46IE9iamVjdC5pcyxcbiAgICBmaXJlSW1tZWRpYXRlbHk6ICExXG4gIH0pO1xufVxuYXN5bmMgZnVuY3Rpb24gWmEobywgbCkge1xuICByZXR1cm4gWWEoWnQsIG8sIGwpO1xufVxuY29uc3Qgd28gPSBcIjg1ZDQ2ZjU1ZDdjODZhNGQwOWJiMDQyNzMzNjc0MDhiMTljMzI0ZjU4MmQwNDBkMDE4YWVjYjI1YTlhODI5NDJcIixcbiAgWWUgPSBbW1wiYXp0ZWNcIiwgXCJBenRlY1wiXSwgW1wiY29kZV8xMjhcIiwgXCJDb2RlMTI4XCJdLCBbXCJjb2RlXzM5XCIsIFwiQ29kZTM5XCJdLCBbXCJjb2RlXzkzXCIsIFwiQ29kZTkzXCJdLCBbXCJjb2RhYmFyXCIsIFwiQ29kYWJhclwiXSwgW1wiZGF0YWJhclwiLCBcIkRhdGFCYXJcIl0sIFtcImRhdGFiYXJfZXhwYW5kZWRcIiwgXCJEYXRhQmFyRXhwYW5kZWRcIl0sIFtcImRhdGFiYXJfbGltaXRlZFwiLCBcIkRhdGFCYXJMaW1pdGVkXCJdLCBbXCJkYXRhX21hdHJpeFwiLCBcIkRhdGFNYXRyaXhcIl0sIFtcImR4X2ZpbG1fZWRnZVwiLCBcIkRYRmlsbUVkZ2VcIl0sIFtcImVhbl8xM1wiLCBcIkVBTi0xM1wiXSwgW1wiZWFuXzhcIiwgXCJFQU4tOFwiXSwgW1wiaXRmXCIsIFwiSVRGXCJdLCBbXCJtYXhpX2NvZGVcIiwgXCJNYXhpQ29kZVwiXSwgW1wibWljcm9fcXJfY29kZVwiLCBcIk1pY3JvUVJDb2RlXCJdLCBbXCJwZGY0MTdcIiwgXCJQREY0MTdcIl0sIFtcInFyX2NvZGVcIiwgXCJRUkNvZGVcIl0sIFtcInJtX3FyX2NvZGVcIiwgXCJyTVFSQ29kZVwiXSwgW1widXBjX2FcIiwgXCJVUEMtQVwiXSwgW1widXBjX2VcIiwgXCJVUEMtRVwiXSwgW1wibGluZWFyX2NvZGVzXCIsIFwiTGluZWFyLUNvZGVzXCJdLCBbXCJtYXRyaXhfY29kZXNcIiwgXCJNYXRyaXgtQ29kZXNcIl0sIFtcImFueVwiLCBcIkFueVwiXV0sXG4gIFFhID0gWy4uLlllLCBbXCJ1bmtub3duXCJdXS5tYXAobyA9PiBvWzBdKSxcbiAgWXQgPSBuZXcgTWFwKFllKTtcbmZ1bmN0aW9uIEphKG8pIHtcbiAgZm9yIChjb25zdCBbbCwgZF0gb2YgWXQpIGlmIChvID09PSBkKSByZXR1cm4gbDtcbiAgcmV0dXJuIFwidW5rbm93blwiO1xufVxuZnVuY3Rpb24gS2Eobykge1xuICBpZiAoWmUobykpIHJldHVybiB7XG4gICAgd2lkdGg6IG8ubmF0dXJhbFdpZHRoLFxuICAgIGhlaWdodDogby5uYXR1cmFsSGVpZ2h0XG4gIH07XG4gIGlmIChRZShvKSkgcmV0dXJuIHtcbiAgICB3aWR0aDogby53aWR0aC5iYXNlVmFsLnZhbHVlLFxuICAgIGhlaWdodDogby5oZWlnaHQuYmFzZVZhbC52YWx1ZVxuICB9O1xuICBpZiAoSmUobykpIHJldHVybiB7XG4gICAgd2lkdGg6IG8udmlkZW9XaWR0aCxcbiAgICBoZWlnaHQ6IG8udmlkZW9IZWlnaHRcbiAgfTtcbiAgaWYgKHRyKG8pKSByZXR1cm4ge1xuICAgIHdpZHRoOiBvLndpZHRoLFxuICAgIGhlaWdodDogby5oZWlnaHRcbiAgfTtcbiAgaWYgKHJyKG8pKSByZXR1cm4ge1xuICAgIHdpZHRoOiBvLmRpc3BsYXlXaWR0aCxcbiAgICBoZWlnaHQ6IG8uZGlzcGxheUhlaWdodFxuICB9O1xuICBpZiAoS2UobykpIHJldHVybiB7XG4gICAgd2lkdGg6IG8ud2lkdGgsXG4gICAgaGVpZ2h0OiBvLmhlaWdodFxuICB9O1xuICBpZiAoZXIobykpIHJldHVybiB7XG4gICAgd2lkdGg6IG8ud2lkdGgsXG4gICAgaGVpZ2h0OiBvLmhlaWdodFxuICB9O1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlIHByb3ZpZGVkIHZhbHVlIGlzIG5vdCBvZiB0eXBlICcoQmxvYiBvciBIVE1MQ2FudmFzRWxlbWVudCBvciBIVE1MSW1hZ2VFbGVtZW50IG9yIEhUTUxWaWRlb0VsZW1lbnQgb3IgSW1hZ2VCaXRtYXAgb3IgSW1hZ2VEYXRhIG9yIE9mZnNjcmVlbkNhbnZhcyBvciBTVkdJbWFnZUVsZW1lbnQgb3IgVmlkZW9GcmFtZSknLlwiKTtcbn1cbmZ1bmN0aW9uIFplKG8pIHtcbiAgdmFyIGwsIGQ7XG4gIHRyeSB7XG4gICAgcmV0dXJuIG8gaW5zdGFuY2VvZiAoKGQgPSAobCA9IG8gPT0gbnVsbCA/IHZvaWQgMCA6IG8ub3duZXJEb2N1bWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IGwuZGVmYXVsdFZpZXcpID09IG51bGwgPyB2b2lkIDAgOiBkLkhUTUxJbWFnZUVsZW1lbnQpO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gITE7XG4gIH1cbn1cbmZ1bmN0aW9uIFFlKG8pIHtcbiAgdmFyIGwsIGQ7XG4gIHRyeSB7XG4gICAgcmV0dXJuIG8gaW5zdGFuY2VvZiAoKGQgPSAobCA9IG8gPT0gbnVsbCA/IHZvaWQgMCA6IG8ub3duZXJEb2N1bWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IGwuZGVmYXVsdFZpZXcpID09IG51bGwgPyB2b2lkIDAgOiBkLlNWR0ltYWdlRWxlbWVudCk7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiAhMTtcbiAgfVxufVxuZnVuY3Rpb24gSmUobykge1xuICB2YXIgbCwgZDtcbiAgdHJ5IHtcbiAgICByZXR1cm4gbyBpbnN0YW5jZW9mICgoZCA9IChsID0gbyA9PSBudWxsID8gdm9pZCAwIDogby5vd25lckRvY3VtZW50KSA9PSBudWxsID8gdm9pZCAwIDogbC5kZWZhdWx0VmlldykgPT0gbnVsbCA/IHZvaWQgMCA6IGQuSFRNTFZpZGVvRWxlbWVudCk7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiAhMTtcbiAgfVxufVxuZnVuY3Rpb24gS2Uobykge1xuICB2YXIgbCwgZDtcbiAgdHJ5IHtcbiAgICByZXR1cm4gbyBpbnN0YW5jZW9mICgoZCA9IChsID0gbyA9PSBudWxsID8gdm9pZCAwIDogby5vd25lckRvY3VtZW50KSA9PSBudWxsID8gdm9pZCAwIDogbC5kZWZhdWx0VmlldykgPT0gbnVsbCA/IHZvaWQgMCA6IGQuSFRNTENhbnZhc0VsZW1lbnQpO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gITE7XG4gIH1cbn1cbmZ1bmN0aW9uIHRyKG8pIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gbyBpbnN0YW5jZW9mIEltYWdlQml0bWFwIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKSA9PT0gXCJbb2JqZWN0IEltYWdlQml0bWFwXVwiO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gITE7XG4gIH1cbn1cbmZ1bmN0aW9uIGVyKG8pIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gbyBpbnN0YW5jZW9mIE9mZnNjcmVlbkNhbnZhcyB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykgPT09IFwiW29iamVjdCBPZmZzY3JlZW5DYW52YXNdXCI7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiAhMTtcbiAgfVxufVxuZnVuY3Rpb24gcnIobykge1xuICB0cnkge1xuICAgIHJldHVybiBvIGluc3RhbmNlb2YgVmlkZW9GcmFtZSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykgPT09IFwiW29iamVjdCBWaWRlb0ZyYW1lXVwiO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gITE7XG4gIH1cbn1cbmZ1bmN0aW9uIHRvKG8pIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gbyBpbnN0YW5jZW9mIEJsb2IgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pID09PSBcIltvYmplY3QgQmxvYl1cIjtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuICExO1xuICB9XG59XG5mdW5jdGlvbiBlbyhvKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIG8gaW5zdGFuY2VvZiBJbWFnZURhdGEgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pID09PSBcIltvYmplY3QgSW1hZ2VEYXRhXVwiO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gITE7XG4gIH1cbn1cbmZ1bmN0aW9uIHJvKG8sIGwpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBkID0gbmV3IE9mZnNjcmVlbkNhbnZhcyhvLCBsKTtcbiAgICBpZiAoZC5nZXRDb250ZXh0KFwiMmRcIikgaW5zdGFuY2VvZiBPZmZzY3JlZW5DYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHJldHVybiBkO1xuICAgIHRocm93IHZvaWQgMDtcbiAgfSBjYXRjaCB7XG4gICAgY29uc3QgZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgcmV0dXJuIGQud2lkdGggPSBvLCBkLmhlaWdodCA9IGwsIGQ7XG4gIH1cbn1cbmFzeW5jIGZ1bmN0aW9uIG5yKG8pIHtcbiAgaWYgKFplKG8pICYmICEoYXdhaXQgaW8obykpKSB0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKFwiRmFpbGVkIHRvIGxvYWQgb3IgZGVjb2RlIEhUTUxJbWFnZUVsZW1lbnQuXCIsIFwiSW52YWxpZFN0YXRlRXJyb3JcIik7XG4gIGlmIChRZShvKSAmJiAhKGF3YWl0IHNvKG8pKSkgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbihcIkZhaWxlZCB0byBsb2FkIG9yIGRlY29kZSBTVkdJbWFnZUVsZW1lbnQuXCIsIFwiSW52YWxpZFN0YXRlRXJyb3JcIik7XG4gIGlmIChycihvKSAmJiB1byhvKSkgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbihcIlZpZGVvRnJhbWUgaXMgY2xvc2VkLlwiLCBcIkludmFsaWRTdGF0ZUVycm9yXCIpO1xuICBpZiAoSmUobykgJiYgKG8ucmVhZHlTdGF0ZSA9PT0gMCB8fCBvLnJlYWR5U3RhdGUgPT09IDEpKSB0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKFwiSW52YWxpZCBlbGVtZW50IG9yIHN0YXRlLlwiLCBcIkludmFsaWRTdGF0ZUVycm9yXCIpO1xuICBpZiAodHIobykgJiYgbG8obykpIHRocm93IG5ldyBET01FeGNlcHRpb24oXCJUaGUgaW1hZ2Ugc291cmNlIGlzIGRldGFjaGVkLlwiLCBcIkludmFsaWRTdGF0ZUVycm9yXCIpO1xuICBjb25zdCB7XG4gICAgd2lkdGg6IGwsXG4gICAgaGVpZ2h0OiBkXG4gIH0gPSBLYShvKTtcbiAgaWYgKGwgPT09IDAgfHwgZCA9PT0gMCkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGYgPSBybyhsLCBkKS5nZXRDb250ZXh0KFwiMmRcIik7XG4gIGYuZHJhd0ltYWdlKG8sIDAsIDApO1xuICB0cnkge1xuICAgIHJldHVybiBmLmdldEltYWdlRGF0YSgwLCAwLCBsLCBkKTtcbiAgfSBjYXRjaCB7XG4gICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbihcIlNvdXJjZSB3b3VsZCB0YWludCBvcmlnaW4uXCIsIFwiU2VjdXJpdHlFcnJvclwiKTtcbiAgfVxufVxuYXN5bmMgZnVuY3Rpb24gbm8obykge1xuICBsZXQgbDtcbiAgdHJ5IHtcbiAgICBsID0gYXdhaXQgY3JlYXRlSW1hZ2VCaXRtYXAobyk7XG4gIH0gY2F0Y2gge1xuICAgIHRyeSB7XG4gICAgICBpZiAoZ2xvYmFsVGhpcy5JbWFnZSkge1xuICAgICAgICBsID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGxldCBmID0gXCJcIjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChvKSwgbC5zcmMgPSBmLCBhd2FpdCBsLmRlY29kZSgpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwoZik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSByZXR1cm4gbztcbiAgICB9IGNhdGNoIHtcbiAgICAgIHRocm93IG5ldyBET01FeGNlcHRpb24oXCJGYWlsZWQgdG8gbG9hZCBvciBkZWNvZGUgQmxvYi5cIiwgXCJJbnZhbGlkU3RhdGVFcnJvclwiKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGF3YWl0IG5yKGwpO1xufVxuZnVuY3Rpb24gYW8obykge1xuICBjb25zdCB7XG4gICAgd2lkdGg6IGwsXG4gICAgaGVpZ2h0OiBkXG4gIH0gPSBvO1xuICBpZiAobCA9PT0gMCB8fCBkID09PSAwKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgYiA9IG8uZ2V0Q29udGV4dChcIjJkXCIpO1xuICB0cnkge1xuICAgIHJldHVybiBiLmdldEltYWdlRGF0YSgwLCAwLCBsLCBkKTtcbiAgfSBjYXRjaCB7XG4gICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbihcIlNvdXJjZSB3b3VsZCB0YWludCBvcmlnaW4uXCIsIFwiU2VjdXJpdHlFcnJvclwiKTtcbiAgfVxufVxuYXN5bmMgZnVuY3Rpb24gb28obykge1xuICBpZiAodG8obykpIHJldHVybiBhd2FpdCBubyhvKTtcbiAgaWYgKGVvKG8pKSB7XG4gICAgaWYgKGNvKG8pKSB0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKFwiVGhlIGltYWdlIGRhdGEgaGFzIGJlZW4gZGV0YWNoZWQuXCIsIFwiSW52YWxpZFN0YXRlRXJyb3JcIik7XG4gICAgcmV0dXJuIG87XG4gIH1cbiAgcmV0dXJuIEtlKG8pIHx8IGVyKG8pID8gYW8obykgOiBhd2FpdCBucihvKTtcbn1cbmFzeW5jIGZ1bmN0aW9uIGlvKG8pIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gYXdhaXQgby5kZWNvZGUoKSwgITA7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiAhMTtcbiAgfVxufVxuYXN5bmMgZnVuY3Rpb24gc28obykge1xuICB2YXIgbDtcbiAgdHJ5IHtcbiAgICByZXR1cm4gYXdhaXQgKChsID0gby5kZWNvZGUpID09IG51bGwgPyB2b2lkIDAgOiBsLmNhbGwobykpLCAhMDtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuICExO1xuICB9XG59XG5mdW5jdGlvbiB1byhvKSB7XG4gIHJldHVybiBvLmZvcm1hdCA9PT0gbnVsbDtcbn1cbmZ1bmN0aW9uIGNvKG8pIHtcbiAgcmV0dXJuIG8uZGF0YS5idWZmZXIuYnl0ZUxlbmd0aCA9PT0gMDtcbn1cbmZ1bmN0aW9uIGxvKG8pIHtcbiAgcmV0dXJuIG8ud2lkdGggPT09IDAgJiYgby5oZWlnaHQgPT09IDA7XG59XG5mdW5jdGlvbiBHZShvLCBsKSB7XG4gIHJldHVybiBmbyhvKSA/IG5ldyBET01FeGNlcHRpb24oYCR7bH06ICR7by5tZXNzYWdlfWAsIG8ubmFtZSkgOiBobyhvKSA/IG5ldyBvLmNvbnN0cnVjdG9yKGAke2x9OiAke28ubWVzc2FnZX1gKSA6IG5ldyBFcnJvcihgJHtsfTogJHtvfWApO1xufVxuZnVuY3Rpb24gZm8obykge1xuICByZXR1cm4gbyBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykgPT09IFwiW29iamVjdCBET01FeGNlcHRpb25dXCI7XG59XG5mdW5jdGlvbiBobyhvKSB7XG4gIHJldHVybiBvIGluc3RhbmNlb2YgRXJyb3IgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pID09PSBcIltvYmplY3QgRXJyb3JdXCI7XG59XG52YXIgZnQ7XG5jbGFzcyBibyB7XG4gIGNvbnN0cnVjdG9yKGwgPSB7fSkge1xuICAgIEhlKHRoaXMsIGZ0KTtcbiAgICB2YXIgZDtcbiAgICB0cnkge1xuICAgICAgY29uc3QgYiA9IChkID0gbCA9PSBudWxsID8gdm9pZCAwIDogbC5mb3JtYXRzKSA9PSBudWxsID8gdm9pZCAwIDogZC5maWx0ZXIoZiA9PiBmICE9PSBcInVua25vd25cIik7XG4gICAgICBpZiAoKGIgPT0gbnVsbCA/IHZvaWQgMCA6IGIubGVuZ3RoKSA9PT0gMCkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkhpbnQgb3B0aW9uIHByb3ZpZGVkLCBidXQgaXMgZW1wdHkuXCIpO1xuICAgICAgZm9yIChjb25zdCBmIG9mIGIgIT0gbnVsbCA/IGIgOiBbXSkgaWYgKCFZdC5oYXMoZikpIHRocm93IG5ldyBUeXBlRXJyb3IoYEZhaWxlZCB0byByZWFkIHRoZSAnZm9ybWF0cycgcHJvcGVydHkgZnJvbSAnQmFyY29kZURldGVjdG9yT3B0aW9ucyc6IFRoZSBwcm92aWRlZCB2YWx1ZSAnJHtmfScgaXMgbm90IGEgdmFsaWQgZW51bSB2YWx1ZSBvZiB0eXBlIEJhcmNvZGVGb3JtYXQuYCk7XG4gICAgICBrZSh0aGlzLCBmdCwgYiAhPSBudWxsID8gYiA6IFtdKSwgcWUoe1xuICAgICAgICBmaXJlSW1tZWRpYXRlbHk6ICEwXG4gICAgICB9KS5jYXRjaCgoKSA9PiB7fSk7XG4gICAgfSBjYXRjaCAoYikge1xuICAgICAgdGhyb3cgR2UoYiwgXCJGYWlsZWQgdG8gY29uc3RydWN0ICdCYXJjb2RlRGV0ZWN0b3InXCIpO1xuICAgIH1cbiAgfVxuICBzdGF0aWMgYXN5bmMgZ2V0U3VwcG9ydGVkRm9ybWF0cygpIHtcbiAgICByZXR1cm4gUWEuZmlsdGVyKGwgPT4gbCAhPT0gXCJ1bmtub3duXCIpO1xuICB9XG4gIGFzeW5jIGRldGVjdChsKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGQgPSBhd2FpdCBvbyhsKTtcbiAgICAgIGlmIChkID09PSBudWxsKSByZXR1cm4gW107XG4gICAgICBsZXQgYjtcbiAgICAgIGNvbnN0IGYgPSB7XG4gICAgICAgIHRyeUNvZGUzOUV4dGVuZGVkTW9kZTogITEsXG4gICAgICAgIHRleHRNb2RlOiBcIlBsYWluXCIsXG4gICAgICAgIGZvcm1hdHM6IFdlKHRoaXMsIGZ0KS5tYXAoSSA9PiBZdC5nZXQoSSkpXG4gICAgICB9O1xuICAgICAgdHJ5IHtcbiAgICAgICAgYiA9IGF3YWl0IFphKGQsIGYpO1xuICAgICAgfSBjYXRjaCAoSSkge1xuICAgICAgICB0aHJvdyBjb25zb2xlLmVycm9yKEkpLCBuZXcgRE9NRXhjZXB0aW9uKFwiQmFyY29kZSBkZXRlY3Rpb24gc2VydmljZSB1bmF2YWlsYWJsZS5cIiwgXCJOb3RTdXBwb3J0ZWRFcnJvclwiKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBiLm1hcChJID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgdG9wTGVmdDoge1xuICAgICAgICAgICAgICB4OiBELFxuICAgICAgICAgICAgICB5OiBNXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9wUmlnaHQ6IHtcbiAgICAgICAgICAgICAgeDogXyxcbiAgICAgICAgICAgICAgeTogQVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvdHRvbUxlZnQ6IHtcbiAgICAgICAgICAgICAgeDogVSxcbiAgICAgICAgICAgICAgeTogR1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvdHRvbVJpZ2h0OiB7XG4gICAgICAgICAgICAgIHg6IHR0LFxuICAgICAgICAgICAgICB5OiBYXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSA9IEkucG9zaXRpb24sXG4gICAgICAgICAgbnQgPSBNYXRoLm1pbihELCBfLCBVLCB0dCksXG4gICAgICAgICAgViA9IE1hdGgubWluKE0sIEEsIEcsIFgpLFxuICAgICAgICAgIHEgPSBNYXRoLm1heChELCBfLCBVLCB0dCksXG4gICAgICAgICAgaHQgPSBNYXRoLm1heChNLCBBLCBHLCBYKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBib3VuZGluZ0JveDogbmV3IERPTVJlY3RSZWFkT25seShudCwgViwgcSAtIG50LCBodCAtIFYpLFxuICAgICAgICAgIHJhd1ZhbHVlOiBJLnRleHQsXG4gICAgICAgICAgZm9ybWF0OiBKYShJLmZvcm1hdCksXG4gICAgICAgICAgY29ybmVyUG9pbnRzOiBbe1xuICAgICAgICAgICAgeDogRCxcbiAgICAgICAgICAgIHk6IE1cbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICB4OiBfLFxuICAgICAgICAgICAgeTogQVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIHg6IHR0LFxuICAgICAgICAgICAgeTogWFxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIHg6IFUsXG4gICAgICAgICAgICB5OiBHXG4gICAgICAgICAgfV1cbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGQpIHtcbiAgICAgIHRocm93IEdlKGQsIFwiRmFpbGVkIHRvIGV4ZWN1dGUgJ2RldGVjdCcgb24gJ0JhcmNvZGVEZXRlY3RvcidcIik7XG4gICAgfVxuICB9XG59XG5mdCA9IG5ldyBXZWFrTWFwKCk7XG5leHBvcnQgeyBibyBhcyBCYXJjb2RlRGV0ZWN0b3IsIHZvIGFzIFpYSU5HX0NQUF9DT01NSVQsIHdvIGFzIFpYSU5HX1dBU01fU0hBMjU2LCB5byBhcyBaWElOR19XQVNNX1ZFUlNJT04sIHFlIGFzIHByZXBhcmVaWGluZ01vZHVsZSwgbW8gYXMgcHVyZ2VaWGluZ01vZHVsZSwgZ28gYXMgc2V0WlhpbmdNb2R1bGVPdmVycmlkZXMgfTsiLCJpbXBvcnQgeyBCYXJjb2RlRGV0ZWN0b3IgYXMgciB9IGZyb20gXCIuL3BvbnlmaWxsLmpzXCI7XG5pbXBvcnQgeyBaWElOR19DUFBfQ09NTUlUIGFzIGQsIFpYSU5HX1dBU01fU0hBMjU2IGFzIGksIFpYSU5HX1dBU01fVkVSU0lPTiBhcyBYLCBwcmVwYXJlWlhpbmdNb2R1bGUgYXMgWiwgcHVyZ2VaWGluZ01vZHVsZSBhcyBfLCBzZXRaWGluZ01vZHVsZU92ZXJyaWRlcyBhcyBnIH0gZnJvbSBcIi4vcG9ueWZpbGwuanNcIjtcbnZhciBlO1xuKGUgPSBnbG9iYWxUaGlzLkJhcmNvZGVEZXRlY3RvcikgIT0gbnVsbCB8fCAoZ2xvYmFsVGhpcy5CYXJjb2RlRGV0ZWN0b3IgPSByKTtcbmV4cG9ydCB7IGQgYXMgWlhJTkdfQ1BQX0NPTU1JVCwgaSBhcyBaWElOR19XQVNNX1NIQTI1NiwgWCBhcyBaWElOR19XQVNNX1ZFUlNJT04sIFogYXMgcHJlcGFyZVpYaW5nTW9kdWxlLCBfIGFzIHB1cmdlWlhpbmdNb2R1bGUsIGcgYXMgc2V0WlhpbmdNb2R1bGVPdmVycmlkZXMgfTsiLCJpbXBvcnQgeyBUcmFuc2xhdGVMb2FkZXIsIFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnXG5pbXBvcnQgeyBpbXBvcnRQcm92aWRlcnNGcm9tIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IFRyYW5zbGF0ZUh0dHBMb2FkZXIgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9odHRwLWxvYWRlcidcbmltcG9ydCB7IElvbmljU3RvcmFnZU1vZHVsZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlLWFuZ3VsYXInXG5pbXBvcnQgeyBJbmxpbmVTVkdNb2R1bGUgfSBmcm9tICduZy1pbmxpbmUtc3ZnLTInXG5pbXBvcnQgeyBjb25maWd1cmVBbXBsaWZ5IH0gZnJvbSAnLi91dGlscy9hbXBsaWZ5LmNvbmZpZydcbmltcG9ydCB7IGJvb3RzdHJhcEFwcGxpY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlcidcbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gJy4vYXBwL2FwcC5yb3V0ZXMnXG5pbXBvcnQgeyBwcm92aWRlTmd4U3RyaXBlIH0gZnJvbSAnbmd4LXN0cmlwZSdcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwL2FwcC5jb21wb25lbnQnXG5pbXBvcnQge1xuICBSb3V0ZVJldXNlU3RyYXRlZ3ksXG4gIHByb3ZpZGVSb3V0ZXIsXG4gIHdpdGhQcmVsb2FkaW5nLFxuICBQcmVsb2FkQWxsTW9kdWxlcyxcbn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xuaW1wb3J0IHtcbiAgSW9uaWNSb3V0ZVN0cmF0ZWd5LFxuICBwcm92aWRlSW9uaWNBbmd1bGFyLFxufSBmcm9tICdAaW9uaWMvYW5ndWxhci9zdGFuZGFsb25lJ1xuaW1wb3J0IHtcbiAgSHR0cENsaWVudCxcbiAgcHJvdmlkZUh0dHBDbGllbnQsXG4gIHdpdGhJbnRlcmNlcHRvcnMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJ1xuaW1wb3J0IHsgYXV0aEludGVyY2VwdG9yIH0gZnJvbSAnLi9hcGkuaW50ZXJjZXB0b3InXG5pbXBvcnQgeyBzZW50cnlQcm92aWRlcnMgfSBmcm9tICcuL3V0aWxzL3NlbnRyeS5jb25maWcnXG5pbXBvcnQgeyBwcm92aWRlTG90dGllT3B0aW9ucyB9IGZyb20gJ25neC1sb3R0aWUnXG5pbXBvcnQgJ21hcGJveC1nbC9kaXN0L21hcGJveC1nbC5jc3MnXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50J1xuaW1wb3J0ICdiYXJjb2RlLWRldGVjdG9yL3BvbHlmaWxsJ1xuZXhwb3J0IGZ1bmN0aW9uIEh0dHBMb2FkZXJGYWN0b3J5KGh0dHBDbGllbnQ6IEh0dHBDbGllbnQpIHtcbiAgcmV0dXJuIG5ldyBUcmFuc2xhdGVIdHRwTG9hZGVyKGh0dHBDbGllbnQpXG59XG5cbmJvb3RzdHJhcEFwcGxpY2F0aW9uKEFwcENvbXBvbmVudCwge1xuICBwcm92aWRlcnM6IFtcbiAgICBwcm92aWRlTG90dGllT3B0aW9ucyh7XG4gICAgICBwbGF5ZXI6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnbG90dGllLXdlYicgKi8gJ2xvdHRpZS13ZWInKSxcbiAgICB9KSxcbiAgICB7IHByb3ZpZGU6IFJvdXRlUmV1c2VTdHJhdGVneSwgdXNlQ2xhc3M6IElvbmljUm91dGVTdHJhdGVneSB9LFxuICAgIHByb3ZpZGVOZ3hTdHJpcGUoZW52aXJvbm1lbnQuc3RyaXBlUHVibGljS2V5KSxcbiAgICBwcm92aWRlSW9uaWNBbmd1bGFyKHsgaW5uZXJIVE1MVGVtcGxhdGVzRW5hYmxlZDogdHJ1ZSwgbW9kZTogJ2lvcycgfSksXG4gICAgcHJvdmlkZVJvdXRlcihyb3V0ZXMsIHdpdGhQcmVsb2FkaW5nKFByZWxvYWRBbGxNb2R1bGVzKSksXG4gICAgLi4uc2VudHJ5UHJvdmlkZXJzLFxuICAgIGltcG9ydFByb3ZpZGVyc0Zyb20oXG4gICAgICBJb25pY1N0b3JhZ2VNb2R1bGUuZm9yUm9vdCh7fSksXG4gICAgICBJbmxpbmVTVkdNb2R1bGUuZm9yUm9vdCgpLFxuICAgICAgVHJhbnNsYXRlTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgICBsb2FkZXI6IHtcbiAgICAgICAgICBwcm92aWRlOiBUcmFuc2xhdGVMb2FkZXIsXG4gICAgICAgICAgdXNlRmFjdG9yeTogSHR0cExvYWRlckZhY3RvcnksXG4gICAgICAgICAgZGVwczogW0h0dHBDbGllbnRdLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICApLFxuICAgIHByb3ZpZGVIdHRwQ2xpZW50KHdpdGhJbnRlcmNlcHRvcnMoW2F1dGhJbnRlcmNlcHRvcl0pKSxcbiAgXSxcbn0pXG5jb25maWd1cmVBbXBsaWZ5KClcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNLHNCQUFOLE1BQTBCO0FBQUEsRUFDeEI7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0EsWUFBWSxNQUFNLFNBQVMsaUJBQWlCLFNBQVMsU0FBUztBQUM1RCxTQUFLLE9BQU87QUFDWixTQUFLLFNBQVM7QUFDZCxTQUFLLFNBQVM7QUFBQSxFQUNoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBSUEsZUFBZSxNQUFNO0FBQ25CLFdBQU8sS0FBSyxLQUFLLElBQUksR0FBRyxLQUFLLE1BQU0sR0FBRyxJQUFJLEdBQUcsS0FBSyxNQUFNLEVBQUU7QUFBQSxFQUM1RDtBQUNGOzs7QUNBQSxJQUFNLDZCQUE2QixJQUFJLDJDQUEyQyxJQUFJLHVCQUF1QixjQUFjLENBQUM7OztBQ1Q1SCxJQUFNLGlCQUFpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBYXJCLFVBQVUsZ0JBQWdCLGdCQUFnQjtBQUN4QyxVQUFNLHlCQUF5QixtQkFBbUIsY0FBYztBQUNoRSxVQUFNLDZCQUE2QixJQUFJLGNBQWM7QUFBQSxNQUNuRCxVQUFVO0FBQUEsSUFDWixDQUFDO0FBQ0QsVUFBTSwyQkFBMEIsaURBQWdCLE9BQU0sNkJBQTZCO0FBQ25GLFVBQU0sK0JBQThCLGlEQUFnQixPQUFNLElBQUksMkNBQTJDLElBQUksdUJBQXVCLDBCQUEwQixDQUFDLElBQUk7QUFHbkssUUFBSSxDQUFDLHVCQUF1QixNQUFNO0FBQ2hDLGNBQVEsVUFBVSx3QkFBd0IsY0FBYztBQUN4RDtBQUFBLElBQ0Y7QUFHQSxRQUFJLGlEQUFnQixNQUFNO0FBQ3hCLGNBQVEsVUFBVSx3QkFBd0IsY0FBYztBQUN4RDtBQUFBLElBQ0Y7QUFFQSxRQUFJLENBQUMsUUFBUSxlQUFlLE1BQU07QUFDaEMsb0NBQThCLGNBQWMsdUJBQXVCLElBQUk7QUFDdkUsb0NBQThCO0FBQUE7QUFBQSxRQUU5QjtBQUFBLE1BQXVCO0FBQ3ZCLGNBQVEsVUFBVSx3QkFBd0IsaUNBQ3JDLGlCQURxQztBQUFBLFFBRXhDLE1BQU07QUFBQSxVQUNKLGVBQWU7QUFBQSxVQUNmLHFCQUFxQjtBQUFBLFFBQ3ZCO0FBQUEsTUFDRixFQUFDO0FBQ0Q7QUFBQSxJQUNGO0FBR0EsUUFBSSxnQkFBZ0I7QUFDbEIsWUFBTSxxQkFBcUIsUUFBUSxlQUFlO0FBRWxELFVBQUksZUFBZSxRQUFRLFFBQVc7QUFDcEMsc0NBQThCO0FBQUE7QUFBQSxVQUU5QjtBQUFBLFFBQXVCO0FBQ3ZCLDJCQUFtQixzQkFBc0I7QUFBQSxNQUMzQztBQUNBLGNBQVEsVUFBVSx3QkFBd0I7QUFBQSxRQUN4QyxNQUFNO0FBQUEsU0FDSCxlQUNKO0FBQ0Q7QUFBQSxJQUNGO0FBR0EsWUFBUSxVQUFVLHNCQUFzQjtBQUFBLEVBQzFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFPQSxZQUFZO0FBQ1YsV0FBTyxRQUFRLFVBQVU7QUFBQSxFQUMzQjtBQUNGOzs7QUNoRk0sU0FBVSxtQkFBZ0I7QUFDOUIsaUJBQVEsVUFBVTtJQUNoQixNQUFNO01BQ0osU0FBUztRQUNQLFlBQVksWUFBWSxRQUFRO1FBQ2hDLGtCQUFrQixZQUFZLFFBQVE7UUFDdEMsV0FBVztVQUNULE9BQU87VUFDUCxPQUFPO1lBQ0wsUUFBUSxZQUFZLFFBQVE7WUFDNUIsUUFBUTtjQUNOO2NBQ0E7Y0FDQTtjQUNBOztZQUVGLGdCQUFnQixDQUFDLHNDQUFzQztZQUN2RCxpQkFBaUI7Y0FDZixVQUFVLFlBQVksT0FBTzs7WUFFL0IsY0FBYztZQUNkLFdBQVcsQ0FBQyxVQUFVLE9BQU87OztRQUdqQywwQkFBMEI7UUFDMUIsZ0JBQWdCO1VBQ2QsV0FBVztVQUNYLGtCQUFrQjtVQUNsQixrQkFBa0I7VUFDbEIsZ0JBQWdCO1VBQ2hCLDBCQUEwQjs7OztHQUlqQztBQUNIOzs7QUM1Qk0sSUFBTyxvQkFBUCxNQUFPLGtCQUFnQjtFQUMzQixZQUNVLFFBQ0EsY0FBaUM7QUFEakMsU0FBQSxTQUFBO0FBQ0EsU0FBQSxlQUFBO0VBQ1A7RUFFSCxjQUFXO0FBQ1QsV0FBTyxLQUFLLG9CQUFtQixDQUFFLEVBQUUsS0FDakMsSUFBSSxDQUFDLGVBQWM7QUFDakIsVUFDRSxXQUFXLGdCQUNYLFdBQVcsMEJBQTBCLFFBQ3JDO0FBQ0EsYUFBSyxPQUFPLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFDN0IsZUFBTztNQUNUO0FBQ0EsYUFBTztJQUNULENBQUMsR0FDRCxXQUFXLENBQUMsVUFBUztBQUNuQixXQUFLLGFBQWEsWUFBWSxLQUFLO0FBQ25DLGFBQU8sR0FBRyxJQUFJO0lBQ2hCLENBQUMsQ0FBQztFQUVOOzs7bUNBdkJXLG1CQUFnQixtQkFBQSxNQUFBLEdBQUEsbUJBQUEsbUJBQUEsQ0FBQTtBQUFBO3FGQUFoQixtQkFBZ0IsU0FBaEIsa0JBQWdCLFdBQUEsWUFGZixPQUFNLENBQUE7QUFFZCxJQUFPLG1CQUFQOztzRUFBTyxrQkFBZ0IsQ0FBQTtVQUg1QjtXQUFXO01BQ1YsWUFBWTtLQUNiOzs7OztBQ0ZLLElBQU8sZUFBUCxNQUFPLGFBQVc7RUFHdEIsWUFBb0IsUUFBYztBQUFkLFNBQUEsU0FBQTtBQUZaLFNBQUEsY0FBc0I7QUFHNUIsU0FBSyxPQUFPLE9BQ1QsS0FBSyxPQUFPLENBQUMsVUFBVSxpQkFBaUIsYUFBYSxDQUFDLEVBQ3RELFVBQVUsQ0FBQyxVQUFjO0FBQ3hCLFdBQUssY0FBYyxNQUFNO0lBQzNCLENBQUM7RUFDTDtFQUVNLGNBQVc7O0FBQ2YsWUFBTSxNQUFNLElBQUksSUFBSSxPQUFPLFNBQVMsSUFBSTtBQUN4QyxZQUFNLHVCQUNKLElBQUksYUFBYSxJQUFJLGNBQWMsS0FDbkMsSUFBSSxhQUFhLElBQUksNEJBQTRCLEtBQ2pELElBQUksYUFBYSxJQUFJLGlCQUFpQjtBQUV4QyxVQUNFLE9BQU8sU0FBUyxTQUFTLFNBQVMsU0FBUyxLQUMzQyxPQUFPLFNBQVMsU0FBUyxTQUFTLGtCQUFrQixLQUNwRCxPQUFPLFNBQVMsU0FBUyxTQUFTLGtCQUFrQixLQUNwRCxPQUFPLFNBQVMsU0FBUyxTQUFTLHVCQUF1QixLQUN6RCxPQUFPLFNBQVMsU0FBUyxTQUFTLFVBQVUsS0FDNUMsc0JBQ0E7QUFDQSxlQUFPO01BQ1Q7QUFFQSxVQUFJLENBQUMsS0FBSyxZQUFZLFNBQVMsU0FBUyxHQUFHO0FBQ3pDLGNBQU0sYUFBYSxPQUFPLFNBQVM7QUFDbkMsZUFBTyxLQUFLLE9BQU8sY0FBYyxDQUFDLFNBQVMsR0FBRztVQUM1QyxhQUFhLEVBQUUsTUFBTSxXQUFVO1NBQ2hDO01BQ0g7QUFFQSxhQUFPO0lBQ1Q7Ozs7bUNBckNXLGNBQVcsbUJBQUEsTUFBQSxDQUFBO0FBQUE7Z0ZBQVgsY0FBVyxTQUFYLGFBQVcsV0FBQSxZQUZWLE9BQU0sQ0FBQTtBQUVkLElBQU8sY0FBUDs7c0VBQU8sYUFBVyxDQUFBO1VBSHZCO1dBQVc7TUFDVixZQUFZO0tBQ2I7Ozs7O0FDRUssSUFBTyxhQUFQLE1BQU8sV0FBUztFQUNwQixZQUFvQixhQUFrQyxRQUFjO0FBQWhELFNBQUEsY0FBQTtBQUFrQyxTQUFBLFNBQUE7RUFBaUI7RUFFdkUsY0FBVztBQU1ULFFBQUksS0FBSyxZQUFZLFVBQVMsRUFBRyxVQUFVLFlBQVk7QUFFckQsYUFBTyxLQUFLLE9BQU8sY0FBYyxDQUFDLE1BQU0sQ0FBQztJQUMzQztBQUdBLFdBQU87RUFDVDs7O21DQWhCVyxZQUFTLG1CQUFBLFdBQUEsR0FBQSxtQkFBQSxNQUFBLENBQUE7QUFBQTs4RUFBVCxZQUFTLFNBQVQsV0FBUyxXQUFBLFlBRlIsT0FBTSxDQUFBO0FBRWQsSUFBTyxZQUFQOztzRUFBTyxXQUFTLENBQUE7VUFIckI7V0FBVztNQUNWLFlBQVk7S0FDYjs7Ozs7QUNBSyxJQUFPLGVBQVAsTUFBTyxhQUFXO0VBQ3RCLFlBQW9CLFFBQWM7QUFBZCxTQUFBLFNBQUE7RUFBaUI7RUFFckMsY0FBVztBQUNULFFBQUksWUFBWSxXQUFXLFdBQVc7QUFDcEMsYUFBTztJQUNULE9BQU87QUFDTCxhQUFPLEtBQUssT0FBTyxjQUFjLENBQUMsTUFBTSxDQUFDO0lBQzNDO0VBQ0Y7OzttQ0FUVyxjQUFXLG1CQUFBLE1BQUEsQ0FBQTtBQUFBO2dGQUFYLGNBQVcsU0FBWCxhQUFXLFdBQUEsWUFGVixPQUFNLENBQUE7QUFFZCxJQUFPLGNBQVA7O3NFQUFPLGFBQVcsQ0FBQTtVQUh2QjtXQUFXO01BQ1YsWUFBWTtLQUNiOzs7OztBQ0FNLElBQU0sU0FBaUI7RUFDNUI7SUFDRSxNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7O0VBRWQ7SUFDRSxNQUFNO0lBQ04sZUFBZSxNQUNiLE9BQU8sMkJBQTRCLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxVQUFVOztFQUdqRTtJQUNFLE1BQU07SUFDTixhQUFhLENBQUMsV0FBVztJQUN6QixVQUFVO01BQ1I7UUFDRSxNQUFNO1FBQ04sZUFBZSxNQUNiLE9BQU8sd0JBQXNCLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPOztNQUV4RDtRQUNFLE1BQU07UUFDTixlQUFlLE1BQ2IsT0FDRSxpQ0FBNEQsRUFDNUQsS0FBSyxDQUFDLE1BQU0sRUFBRSxlQUFlOztNQUVuQztRQUNFLE1BQU07UUFDTixlQUFlLE1BQ2IsT0FDRSxnQ0FBMEQsRUFDMUQsS0FBSyxDQUFDLE1BQU0sRUFBRSxjQUFjOztNQUVsQztRQUNFLE1BQU07UUFDTixlQUFlLE1BQ2IsT0FBTyw0QkFBOEIsRUFBRSxLQUFLLENBQUMsTUFBTSxFQUFFLFdBQVc7UUFDbEUsYUFBYSxDQUFDLFNBQVM7O01BRXpCO1FBQ0UsTUFBTTtRQUNOLGVBQWUsTUFDYixPQUFPLG1DQUFpRCxFQUFFLEtBQ3hELENBQUMsTUFBTSxFQUFFLGlCQUFpQjs7TUFHaEM7UUFDRSxNQUFNO1FBQ04sZUFBZSxNQUNiLE9BQU8seUNBQXdELEVBQUUsS0FDL0QsQ0FBQyxNQUFNLEVBQUUsdUJBQXVCOztNQUd0QztRQUNFLE1BQU07UUFDTixlQUFlLE1BQ2IsT0FBTywyQkFBaUMsRUFBRSxLQUFLLENBQUMsTUFBTSxFQUFFLFVBQVU7UUFDcEUsYUFBYSxDQUFDLFNBQVM7O01BRXpCO1FBQ0UsTUFBTTtRQUNOLGVBQWUsTUFDYixPQUFPLDJCQUFpQyxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsVUFBVTtRQUNwRSxhQUFhLENBQUMsU0FBUzs7TUFFekI7UUFDRSxNQUFNO1FBQ04sZUFBZSxNQUNiLE9BQU8sb0NBQW1ELEVBQUUsS0FDMUQsQ0FBQyxNQUFNLEVBQUUsa0JBQWtCOztNQUdqQztRQUNFLE1BQU07UUFDTixlQUFlLE1BQ2IsT0FDRSx5Q0FBNkQsRUFDN0QsS0FBSyxDQUFDLE1BQU0sRUFBRSxzQkFBc0I7O01BRTFDO1FBQ0UsTUFBTTtRQUNOLGVBQWUsTUFDYixPQUFPLGlDQUE2QyxFQUFFLEtBQ3BELENBQUMsTUFBTSxFQUFFLGVBQWU7UUFFNUIsYUFBYSxDQUFDLGdCQUFnQjs7TUFHaEM7UUFDRSxNQUFNO1FBQ04sZUFBZSxNQUNiLE9BQU8sMkJBQTRCLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxVQUFVOztNQUVqRTtRQUNFLE1BQU07UUFDTixlQUFlLE1BQ2IsT0FBTyx5QkFBZ0MsRUFBRSxLQUFLLENBQUMsTUFBTSxFQUFFLFFBQVE7O01BRW5FO1FBQ0UsTUFBTTtRQUNOLGVBQWUsTUFDYixPQUFPLGdDQUE4QyxFQUFFLEtBQ3JELENBQUMsTUFBTSxFQUFFLGVBQWU7O01BRzlCO1FBQ0UsTUFBTTtRQUNOLGVBQWUsTUFDYixPQUFPLDBCQUFrQyxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsU0FBUzs7TUFFdEU7UUFDRSxNQUFNO1FBQ04sZUFBZSxNQUNiLE9BQU8sNkJBQXdDLEVBQUUsS0FDL0MsQ0FBQyxNQUFNLEVBQUUsWUFBWTs7TUFHM0I7UUFDRSxNQUFNO1FBQ04sZUFBZSxNQUNiLE9BQU8sNkJBQXdDLEVBQUUsS0FDL0MsQ0FBQyxNQUFNLEVBQUUsWUFBWTs7TUFHM0I7UUFDRSxNQUFNO1FBQ04sZUFBZSxNQUNiLE9BQU8sMkJBQW9DLEVBQUUsS0FDM0MsQ0FBQyxNQUFNLEVBQUUsVUFBVTs7TUFHekI7UUFDRSxNQUFNO1FBQ04sZUFBZSxNQUNiLE9BQU8sd0JBQThCLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPOztNQUVoRTtRQUNFLE1BQU07UUFDTixlQUFlLE1BQ2IsT0FBTyw0QkFBc0MsRUFBRSxLQUM3QyxDQUFDLE1BQU0sRUFBRSxXQUFXOztNQUcxQjtRQUNFLE1BQU07UUFDTixlQUFlLE1BQ2IsT0FBTyw0QkFBc0MsRUFBRSxLQUM3QyxDQUFDLE1BQU0sRUFBRSxXQUFXOztNQUcxQjtRQUNFLE1BQU07UUFDTixlQUFlLE1BQ2IsT0FBTyxvQ0FBc0QsRUFBRSxLQUM3RCxDQUFDLE1BQU0sRUFBRSxrQkFBa0I7O01BR2pDO1FBQ0UsTUFBTTtRQUNOLGVBQWUsTUFDYixPQUFPLHdCQUE4QixFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTzs7TUFFaEU7UUFDRSxNQUFNO1FBQ04sZUFBZSxNQUNiLE9BQU8sMEJBQWtDLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxTQUFTOztNQUV0RTtRQUNFLE1BQU07UUFDTixlQUFlLE1BQ2IsT0FBTyxpQ0FBZ0QsRUFBRSxLQUN2RCxDQUFDLE1BQU0sRUFBRSxlQUFlOztNQUc5QjtRQUNFLE1BQU07UUFDTixlQUFlLE1BQ2IsT0FBTyxtQ0FBNEMsRUFBRSxLQUNuRCxDQUFDLE1BQU0sRUFBRSxpQkFBaUI7O01BR2hDO1FBQ0UsTUFBTTtRQUNOLGVBQWUsTUFDYixPQUFPLGlDQUFpRCxFQUFFLEtBQ3hELENBQUMsTUFBTSxFQUFFLGVBQWU7O01BRzlCO1FBQ0UsTUFBTTtRQUNOLGVBQWUsTUFDYixPQUFPLG9DQUE4QyxFQUFFLEtBQ3JELENBQUMsTUFBTSxFQUFFLGtCQUFrQjs7TUFHakM7UUFDRSxNQUFNO1FBQ04sZUFBZSxNQUNiLE9BQU8sbUNBQXFELEVBQUUsS0FDNUQsQ0FBQyxNQUFNLEVBQUUsa0JBQWtCOztNQUdqQztRQUNFLE1BQU07UUFDTixlQUFlLE1BQ2IsT0FBTyw0QkFBc0MsRUFBRSxLQUM3QyxDQUFDLE1BQU0sRUFBRSxXQUFXOztNQUcxQjtRQUNFLE1BQU07UUFDTixlQUFlLE1BQ2IsT0FBTyxvQ0FBc0QsRUFBRSxLQUM3RCxDQUFDLE1BQU0sRUFBRSxrQkFBa0I7O01BR2pDO1FBQ0UsTUFBTTtRQUNOLGVBQWUsTUFDYixPQUFPLHdCQUFzQixFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTzs7TUFFeEQ7UUFDRSxNQUFNO1FBQ04sZUFBZSxNQUNiLE9BQU8sNEJBQXNDLEVBQUUsS0FDN0MsQ0FBQyxNQUFNLEVBQUUsVUFBVTtRQUV2QixhQUFhLENBQUMsV0FBVzs7OztFQUkvQjtJQUNFLE1BQU07SUFDTixlQUFlLE1BQ2IsT0FBTyxnQ0FBOEMsRUFBRSxLQUNyRCxDQUFDLE1BQU0sRUFBRSxjQUFjOztFQUc3QjtJQUNFLE1BQU07SUFDTixZQUFZOzs7OztBQ2xQaEIsSUFBTSxXQUFXLE1BQU07QUFDckIsU0FBTyxlQUFlO0FBQ3hCO0FBQ0EsSUFBTSx1QkFBdUIsQ0FBQyxLQUFLLFlBQVk7QUFDN0MsTUFBSSxPQUFPLFdBQVcsWUFBYSxRQUFPLFFBQVEsUUFBUTtBQUMxRCxTQUFPLFNBQVMsRUFBRSxLQUFLLE1BQU07QUFDM0IsV0FBTyxjQUFjLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEdBQUcsb0JBQW9CO0FBQUEsTUFDbEUsY0FBYyxDQUFDLEdBQUcsYUFBYTtBQUFBLE1BQy9CLGNBQWMsQ0FBQyxHQUFHLGFBQWE7QUFBQSxNQUMvQixXQUFXLENBQUMsRUFBRTtBQUFBLE1BQ2QsV0FBVyxDQUFDLEVBQUU7QUFBQSxJQUNoQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxHQUFHLG9CQUFvQjtBQUFBLE1BQ2xELFVBQVUsQ0FBQyxDQUFDO0FBQUEsTUFDWixjQUFjLENBQUMsQ0FBQztBQUFBLE1BQ2hCLFdBQVcsQ0FBQyxFQUFFO0FBQUEsTUFDZCxRQUFRLENBQUMsRUFBRTtBQUFBLElBQ2IsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsYUFBYTtBQUFBLE1BQ3BDLFdBQVcsQ0FBQyxDQUFDO0FBQUEsTUFDYixZQUFZLENBQUMsQ0FBQztBQUFBLE1BQ2QsV0FBVyxDQUFDLEVBQUU7QUFBQSxJQUNoQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsR0FBRyxjQUFjO0FBQUEsTUFDdEMsY0FBYyxDQUFDLEdBQUcsYUFBYTtBQUFBLE1BQy9CLGVBQWUsQ0FBQyxFQUFFO0FBQUEsTUFDbEIsY0FBYyxDQUFDLEdBQUcsYUFBYTtBQUFBLE1BQy9CLHVCQUF1QixDQUFDLEVBQUU7QUFBQSxNQUMxQixpQkFBaUIsQ0FBQyxHQUFHLGlCQUFpQjtBQUFBLE1BQ3RDLHVCQUF1QixDQUFDLEdBQUcsd0JBQXdCO0FBQUEsTUFDbkQsU0FBUyxDQUFDLEVBQUU7QUFBQSxNQUNaLFlBQVksQ0FBQyxFQUFFO0FBQUEsTUFDZixzQkFBc0IsQ0FBQyxFQUFFO0FBQUEsTUFDekIsY0FBYyxDQUFDLEVBQUU7QUFBQSxNQUNqQixhQUFhLENBQUMsRUFBRTtBQUFBLE1BQ2hCLFlBQVksQ0FBQyxFQUFFO0FBQUEsTUFDZixlQUFlLENBQUMsRUFBRTtBQUFBLElBQ3BCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLEdBQUcsNkJBQTZCO0FBQUEsTUFDcEUsY0FBYyxDQUFDLEdBQUcsYUFBYTtBQUFBLE1BQy9CLGNBQWMsQ0FBQyxHQUFHLGFBQWE7QUFBQSxNQUMvQixpQkFBaUIsQ0FBQyxHQUFHLGlCQUFpQjtBQUFBLE1BQ3RDLHVCQUF1QixDQUFDLEdBQUcsd0JBQXdCO0FBQUEsSUFDckQsR0FBRyxDQUFDLENBQUMsSUFBSSxTQUFTLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPO0FBQUEsRUFDeEQsQ0FBQztBQUNIOzs7OztBRTlDRSxJQUFBLHlCQUFBLEdBQUEsT0FBQSxDQUFBLEVBR0MsR0FBQSxHQUFBO0FBQ0ksSUFBQSxpQkFBQSxDQUFBOztBQUFzQyxJQUFBLHVCQUFBLEVBQUk7OztBQUExQyxJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLDRCQUFBLHNCQUFBLEdBQUEsR0FBQSxvQkFBQSxDQUFBOzs7Ozs7QUFFTCxJQUFBLHlCQUFBLEdBQUEsWUFBQSxDQUFBLEVBR0MsR0FBQSxXQUFBLENBQUEsRUFDb0MsR0FBQSxLQUFBLEVBQzVCLEdBQUEsWUFBQSxDQUFBLEVBQ29CLEdBQUEsZ0JBQUEsQ0FBQTtBQUN3QixJQUFBLGlCQUFBLENBQUE7O0FBRTNDLElBQUEsdUJBQUEsRUFBZTtBQUVuQixJQUFBLHlCQUFBLEdBQUEsS0FBQSxDQUFBO0FBQ0UsSUFBQSxpQkFBQSxDQUFBOztBQUNGLElBQUEsdUJBQUEsRUFBSSxFQUNBO0FBRVIsSUFBQSx5QkFBQSxJQUFBLFNBQUEsRUFBUyxJQUFBLEtBQUEsRUFDRixJQUFBLFlBQUEsQ0FBQSxFQUNvQixJQUFBLGdCQUFBLEVBQUE7QUFDUCxJQUFBLHFCQUFBLGFBQUEsU0FBQSx3RUFBQSxRQUFBO0FBQUEsTUFBQSx3QkFBQSxHQUFBO0FBQUEsWUFBQSxTQUFBLHdCQUFBO0FBQUEsYUFBQSxzQkFBYSxPQUFBLGdCQUFBLE1BQUEsQ0FBdUI7SUFBQSxDQUFBO0FBQWtCLElBQUEsaUJBQUEsRUFBQTs7QUFFbEUsSUFBQSx1QkFBQSxFQUFlO0FBRW5CLElBQUEseUJBQUEsSUFBQSxLQUFBLENBQUE7QUFDRSxJQUFBLGlCQUFBLEVBQUE7O0FBQ0YsSUFBQSx1QkFBQSxFQUFJLEVBQ0EsRUFDRTs7O0FBcEJ5QyxJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLDRCQUFBLHNCQUFBLEdBQUEsR0FBQSxzQkFBQSxDQUFBO0FBSzdDLElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEsNkJBQUEsS0FBQSxzQkFBQSxHQUFBLEdBQUEscUJBQUEsR0FBQSxHQUFBO0FBT29FLElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEsNEJBQUEsc0JBQUEsSUFBQSxHQUFBLHlCQUFBLENBQUE7QUFLcEUsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSw2QkFBQSxLQUFBLHNCQUFBLElBQUEsSUFBQSx3QkFBQSxHQUFBLEdBQUE7Ozs7OztBQU9WLElBQUEseUJBQUEsR0FBQSxZQUFBLEVBQW1FLEdBQUEsVUFBQSxFQUN2RCxHQUFBLFNBQUEsRUFDQyxHQUFBLFdBQUEsRUFBQSxFQUNXLEdBQUEsY0FBQSxFQUFBO0FBR2QsSUFBQSxxQkFBQSxTQUFBLFNBQUEscUVBQUE7QUFBQSxNQUFBLHdCQUFBLEdBQUE7QUFBQSxZQUFBLFNBQUEsd0JBQUE7QUFBQSxhQUFBLHNCQUFTLE9BQUEsaUJBQUEsQ0FBa0I7SUFBQSxDQUFBO0FBTTNCLElBQUEsaUJBQUEsQ0FBQTs7QUFDRixJQUFBLHVCQUFBLEVBQWE7QUFFZixJQUFBLHlCQUFBLEdBQUEsV0FBQSxFQUFBLEVBQWtCLEdBQUEsY0FBQSxFQUFBO0FBR2QsSUFBQSxxQkFBQSxTQUFBLFNBQUEscUVBQUE7QUFBQSxNQUFBLHdCQUFBLEdBQUE7QUFBQSxZQUFBLFNBQUEsd0JBQUE7QUFBQSxhQUFBLHNCQUFTLE9BQUEsVUFBQSxDQUFXO0lBQUEsQ0FBQTtBQUtwQixJQUFBLGlCQUFBLENBQUE7O0FBQ0YsSUFBQSx1QkFBQSxFQUFhLEVBQ0wsRUFDRixFQUNEOzs7QUFmSCxJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLDZCQUFBLEtBQUEsc0JBQUEsR0FBQSxHQUFBLHFCQUFBLEdBQUEsR0FBQTtBQVdBLElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEsNkJBQUEsS0FBQSxzQkFBQSxJQUFBLEdBQUEsd0JBQUEsR0FBQSxHQUFBOzs7Ozs7QUFNVixJQUFBLHlCQUFBLEdBQUEsWUFBQSxFQUFvRSxHQUFBLFVBQUEsRUFDeEQsR0FBQSxZQUFBLENBQUE7QUFFTixJQUFBLGlCQUFBLENBQUE7O0FBQ0YsSUFBQSx1QkFBQTtBQUNBLElBQUEseUJBQUEsR0FBQSxTQUFBLEVBQVMsR0FBQSxTQUFBLEVBQ0UsR0FBQSxjQUFBLEVBQUE7QUFHTCxJQUFBLHFCQUFBLFNBQUEsU0FBQSxxRUFBQTtBQUFBLE1BQUEsd0JBQUEsR0FBQTtBQUFBLFlBQUEsU0FBQSx3QkFBQTtBQUFBLGFBQUEsc0JBQVMsT0FBQSx1QkFBQSxDQUF3QjtJQUFBLENBQUE7QUFLakMsSUFBQSxpQkFBQSxDQUFBOztBQUNGLElBQUEsdUJBQUEsRUFBYSxFQUNMLEVBQ0YsRUFDRDs7O0FBZlAsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSw2QkFBQSxLQUFBLHNCQUFBLEdBQUEsR0FBQSxxQkFBQSxHQUFBLEdBQUE7QUFXSSxJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLDZCQUFBLEtBQUEsc0JBQUEsR0FBQSxHQUFBLG9CQUFBLEdBQUEsR0FBQTs7O0FEM0RWLElBQVk7Q0FBWixTQUFZQSx3QkFBcUI7QUFDL0IsRUFBQUEsdUJBQUEsU0FBQSxJQUFBO0FBQ0EsRUFBQUEsdUJBQUEsVUFBQSxJQUFBO0FBQ0YsR0FIWSwwQkFBQSx3QkFBcUIsQ0FBQSxFQUFBO0FBcUIzQixJQUFPLG9CQUFQLE1BQU8sa0JBQWdCO0VBTTNCLFlBQW9CLGdCQUE4QjtBQUE5QixTQUFBLGlCQUFBO0FBTHBCLFNBQUEsd0JBQXdCO0FBRXhCLFNBQUEsb0JBQXNDO0FBQzVCLFNBQUEsZUFBZSxzQkFBc0I7QUFHN0MsU0FBSyxnQkFBZTtFQUN0QjtFQUVRLGtCQUFlO0FBQ3JCLFVBQU0sUUFBUSxLQUFLLGVBQWUsYUFBWTtBQUM5QyxRQUFJLE1BQU0sVUFBVSxlQUFlO0FBQ2pDLFdBQUssb0JBQW9CLE1BQU0sWUFBWSxZQUFZLFNBQVM7QUFDaEUsV0FBSyxlQUFlLHNCQUFzQjtJQUM1QztFQUNGO0VBRUEsbUJBQWdCO0FBN0RsQjtBQThESSxTQUFLLGVBQWUsc0JBQXNCO0FBQzFDLFNBQUssUUFBUSxTQUFTLGNBQWMsb0JBQW9CO0FBQ3hELGVBQUssVUFBTCxtQkFBWSxVQUFVLElBQUk7RUFDNUI7RUFFQSxnQkFBZ0IsT0FBVTtBQUN4QixTQUFLLG9CQUFvQixNQUFNLE9BQU8sVUFBVSxTQUFTO0VBQzNEO0VBRUEseUJBQXNCO0FBdkV4QjtBQXdFSSxVQUFNLGNBQWM7TUFDbEIsV0FBVztNQUNYLFdBQVcsS0FBSyxzQkFBc0I7O0FBRXhDLFNBQUssZUFBZSxpQkFBaUIsV0FBVztBQUNoRCxlQUFLLFVBQUwsbUJBQVk7RUFDZDtFQUVBLFlBQVM7QUFoRlg7QUFpRkksVUFBTSxjQUFjO01BQ2xCLFdBQVc7TUFDWCxXQUFXOztBQUViLFNBQUssZUFBZSxpQkFBaUIsV0FBVztBQUNoRCxlQUFLLFVBQUwsbUJBQVk7RUFDZDs7O21DQTVDVyxtQkFBZ0IsNEJBQUEsY0FBQSxDQUFBO0FBQUE7a0ZBQWhCLG1CQUFnQixXQUFBLENBQUEsQ0FBQSxhQUFBLENBQUEsR0FBQSxPQUFBLEdBQUEsTUFBQSxHQUFBLFFBQUEsQ0FBQSxDQUFBLEdBQUEsU0FBQSxHQUFBLENBQUEsU0FBQSxzQ0FBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFNBQUEsZUFBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsR0FBQSxlQUFBLHdCQUFBLEdBQUEsQ0FBQSxHQUFBLGFBQUEsR0FBQSxDQUFBLEdBQUEsbUJBQUEsR0FBQSxDQUFBLFNBQUEsTUFBQSxHQUFBLENBQUEsV0FBQSxRQUFBLFlBQUEsTUFBQSxHQUFBLENBQUEsR0FBQSxpQkFBQSxtQkFBQSxHQUFBLENBQUEsV0FBQSxTQUFBLEdBQUEsV0FBQSxHQUFBLENBQUEsUUFBQSxHQUFBLEdBQUEsQ0FBQSxTQUFBLFdBQUEsU0FBQSxRQUFBLFFBQUEsV0FBQSxVQUFBLFNBQUEsU0FBQSxTQUFBLEdBQUEsT0FBQSxHQUFBLENBQUEsU0FBQSxXQUFBLFNBQUEsV0FBQSxVQUFBLFNBQUEsU0FBQSxTQUFBLEdBQUEsT0FBQSxDQUFBLEdBQUEsVUFBQSxTQUFBLDBCQUFBLElBQUEsS0FBQTtBQUFBLE1BQUEsS0FBQSxHQUFBO0FDM0M3QixJQUFBLHlCQUFBLEdBQUEsT0FBQSxDQUFBO0FBQ0UsSUFBQSxxQkFBQSxHQUFBLGlDQUFBLEdBQUEsR0FBQSxPQUFBLENBQUEsRUFHQyxHQUFBLHNDQUFBLElBQUEsSUFBQSxZQUFBLENBQUE7QUFnQ0gsSUFBQSx1QkFBQTtBQUVBLElBQUEscUJBQUEsR0FBQSx3Q0FBQSxJQUFBLEdBQUEsY0FBQSxDQUFBLEVBQW1FLEdBQUEsd0NBQUEsSUFBQSxHQUFBLGNBQUEsQ0FBQTs7O0FBcEM5RCxJQUFBLG9CQUFBO0FBQUEsSUFBQSxxQkFBQSxRQUFBLElBQUEsaUJBQUEsSUFBQSxzQkFBQSxPQUFBO0FBT0EsSUFBQSxvQkFBQTtBQUFBLElBQUEscUJBQUEsUUFBQSxJQUFBLGlCQUFBLElBQUEsc0JBQUEsUUFBQTtBQTZCUSxJQUFBLG9CQUFBO0FBQUEsSUFBQSxxQkFBQSxRQUFBLElBQUEsaUJBQUEsSUFBQSxzQkFBQSxPQUFBO0FBNkJBLElBQUEsb0JBQUE7QUFBQSxJQUFBLHFCQUFBLFFBQUEsSUFBQSxpQkFBQSxJQUFBLHNCQUFBLFFBQUE7OztFRHJDVDtFQUFlO0VBQ2Y7RUFBWTtFQUNaO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0FBQVMsR0FBQSxRQUFBLENBQUEsbUlBQUEsRUFBQSxDQUFBO0FBS1AsSUFBTyxtQkFBUDs7c0VBQU8sa0JBQWdCLENBQUE7VUFoQjVCO3VCQUNXLGVBQWEsU0FDZDtNQUNQO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtPQUNELFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQUFBLFFBQUEsQ0FBQSw4S0FBQSxFQUFBLENBQUE7Ozs7NkVBSVUsa0JBQWdCLEVBQUEsV0FBQSxvQkFBQSxVQUFBLDBEQUFBLFlBQUEsR0FBQSxDQUFBO0FBQUEsR0FBQTs7O0FFMUM3QixJQUFNLG9CQUFvQixlQUFlLHFCQUFxQjtBQUFBLEVBQzVELEtBQUssTUFBTSxPQUFPLG1CQUFPLEVBQUUsS0FBSyxPQUFLLElBQUksRUFBRSxxQkFBcUIsQ0FBQztBQUNuRSxDQUFDOzs7QUNHSyxJQUFPLGlCQUFQLE1BQU8sZUFBYTtFQUN4QixjQUFBO0VBQWU7RUFFVCxhQUFVOztBQUNkLE1BQU8sS0FBSztRQUNWLEtBQUs7O1FBR0wsU0FBUztRQUNULGFBQWEsWUFBWSxhQUFhLGVBQWU7O1FBRXJELE1BQU07UUFDTixjQUFjOzs7O1VBSUwsMEJBQXlCOzs7VUFHekIsa0JBQWtCO1lBQ3ZCLGFBQWE7WUFDYixlQUFlO1dBQ2hCOzs7Ozs7Ozs7OztRQWFILGtCQUFrQjtRQUNsQixZQUFZOzs7OztRQUtaLDBCQUEwQixZQUFZLGFBQWEsT0FBUTtRQUMzRCwwQkFBMEIsWUFBWSxhQUFhLE9BQVE7T0FDNUQ7SUFDSDs7RUFFTSxvQkFBaUI7O0FBQ3JCLFlBQU0sV0FBa0Isd0JBQW1CO0FBQzNDLFlBQU0sT0FBTyxNQUFNLFNBQVMsV0FBVztRQUNyQyxXQUFXO1FBQ1gsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLG9CQUFvQjtRQUNwQixtQkFBbUI7UUFDbkIsbUJBQW1CO09BQ3BCO0FBQ0QsV0FBSyxZQUFXO0FBQ2hCLFdBQUssS0FBSTtJQUNYOzs7O21DQTVEVyxnQkFBYTtBQUFBO2tGQUFiLGdCQUFhLFNBQWIsZUFBYSxXQUFBLFlBRlosT0FBTSxDQUFBO0FBRWQsSUFBTyxnQkFBUDs7c0VBQU8sZUFBYSxDQUFBO1VBSHpCO1dBQVc7TUFDVixZQUFZO0tBQ2I7Ozs7O0FDQUssSUFBTyxjQUFQLE1BQU8sWUFBVTtFQUdyQixjQUFBO0FBRk8sU0FBQSxjQUE2QyxPQUFPLElBQUk7QUFDeEQsU0FBQSxhQUE0QyxPQUFPLElBQUk7RUFDL0M7OzttQ0FISixhQUFVO0FBQUE7K0VBQVYsYUFBVSxTQUFWLFlBQVUsV0FBQSxZQUZULE9BQU0sQ0FBQTtBQUVkLElBQU8sYUFBUDs7c0VBQU8sWUFBVSxDQUFBO1VBSHRCO1dBQVc7TUFDVixZQUFZO0tBQ2I7Ozs7O0FDd0JLLElBQU8sZ0JBQVAsTUFBTyxjQUFZO0VBRXZCLGNBQWMsT0FBVTtBQUN0QixTQUFLLGdCQUFnQixhQUFZO0FBQ2pDLFNBQUssaUJBQWlCLG1CQUFrQjtFQUMxQztFQUVBLG9CQUFvQixPQUFVO0FBQzVCLFNBQUssZ0JBQWdCLGFBQVk7QUFDakMsU0FBSyxpQkFBaUIsbUJBQWtCO0VBQzFDO0VBRUEsWUFDVSxVQUNBLFFBQ0EsTUFDQSxnQkFDQSxpQkFDQSxpQkFDQSxpQkFDQSxlQUNBLFlBQ0Esa0JBQ0Esd0JBQ0EsWUFBNkI7QUFYN0IsU0FBQSxXQUFBO0FBQ0EsU0FBQSxTQUFBO0FBQ0EsU0FBQSxPQUFBO0FBQ0EsU0FBQSxpQkFBQTtBQUNBLFNBQUEsa0JBQUE7QUFDQSxTQUFBLGtCQUFBO0FBQ0EsU0FBQSxrQkFBQTtBQUNBLFNBQUEsZ0JBQUE7QUFDQSxTQUFBLGFBQUE7QUFDQSxTQUFBLG1CQUFBO0FBQ0EsU0FBQSx5QkFBQTtBQUNBLFNBQUEsYUFBQTtBQUVSLFdBQU8sV0FBVztNQUNoQixnQkFBZ0IsWUFBWTtLQUM3QjtBQUNELHlCQUFxQixNQUFNO0FBQzNCLFNBQUssY0FBYTtBQUNsQixXQUFPLE1BQUs7QUFDVixXQUFLLHFCQUFxQixLQUFLLGVBQWUsYUFBWSxDQUFFO0lBQzlELENBQUM7RUFDSDtFQUVNLFdBQVE7O0FBQ1osWUFBTSxLQUFLLGVBQWUsZUFBYztBQUN4QyxVQUFJLFVBQVUsaUJBQWdCLEdBQUk7QUFDaEMsY0FBTSxrQkFBa0IsS0FBSyxFQUFFLGFBQWEsV0FBVSxDQUFFO0FBQ3hELFlBQUksS0FBSyxlQUFlLGFBQVksRUFBRyxVQUFVLG1CQUFtQjtBQUNsRSxnQkFBTSxjQUFjO1lBQ2xCLFdBQVc7WUFDWCxXQUFXOztBQUViLGdCQUFNLEtBQUssZUFBZSxpQkFBaUIsV0FBVztRQUN4RDtNQUNGO0FBTUEsV0FBSyxPQUFPLE9BQ1QsS0FBSyxPQUFPLENBQUMsVUFBVSxpQkFBaUIsYUFBYSxDQUFDLEVBQ3RELFVBQVUsQ0FBQyxVQUF3QjtBQUNsQyxhQUFLLFdBQVcsWUFBWSxJQUFJLEtBQUssV0FBVyxXQUFVLENBQUU7QUFDNUQsYUFBSyxXQUFXLFdBQVcsSUFBSSxNQUFNLEdBQUc7TUFDMUMsQ0FBQztJQUNMOztFQUVBLGdCQUFhO0FBQ1gsU0FBSyxTQUFTLG1CQUFrQjtBQUNoQyxTQUFLLHVCQUF1QixTQUFRO0FBQ3BDLFNBQUssdUJBQXVCLFVBQVM7QUFDckMsU0FBSyxXQUFXLG9CQUFtQjtBQUNuQyxRQUFJLFlBQVksY0FBYyxDQUFDLFVBQStCO0FBQzVELFdBQUssS0FBSyxJQUFJLE1BQVc7QUFDdkIsWUFBSSxPQUFPO0FBR1gsWUFBSSxNQUFNLElBQUksV0FBVyxjQUFjLEdBQUc7QUFDeEMsZ0JBQU0sUUFBUSxNQUFNLElBQUksTUFBTSxLQUFLO0FBQ25DLGNBQUksTUFBTSxTQUFTLEdBQUc7QUFDcEIsbUJBQU8sTUFBTSxDQUFDO1VBQ2hCO1FBQ0YsV0FFUyxNQUFNLElBQUksV0FBVyxVQUFVLEdBQUc7QUFDekMsY0FBSTtBQUNGLGtCQUFNLE1BQU0sSUFBSSxJQUFJLE1BQU0sR0FBRztBQUU3QixtQkFBTyxJQUFJLFdBQVcsSUFBSSxTQUFTLElBQUk7QUFFdkMsZ0JBQUksS0FBSyxXQUFXLEdBQUcsR0FBRztBQUN4QixxQkFBTyxLQUFLLFVBQVUsQ0FBQztZQUN6QjtVQUNGLFNBQVMsT0FBTztBQUNkLG9CQUFRLE1BQU0sd0JBQXdCLE1BQU0sS0FBSyxLQUFLO1VBQ3hEO1FBQ0Y7QUFFQSxZQUFJLE1BQU07QUFDUixlQUFLLE9BQU8sY0FBYyxJQUFJO1FBQ2hDO01BQ0YsRUFBQztJQUNILENBQUM7RUFDSDtFQUVjLHFCQUFxQixPQUFvQjs7QUFDckQsY0FBUSxNQUFNLE9BQU87UUFDbkIsS0FBSztBQUNILGNBQUksTUFBTSxZQUFZLFdBQVc7QUFDL0IsaUJBQUssY0FBYyxXQUFVO1VBQy9CO0FBQ0E7UUFDRixLQUFLO0FBQ0gsY0FBSSxDQUFDLFVBQVUsaUJBQWdCLEdBQUk7QUFDakMsa0JBQU0sUUFBUSxNQUFNLEtBQUssZ0JBQWdCLE9BQU87Y0FDOUMsV0FBVztjQUNYLFVBQVU7Y0FDVixJQUFJO2NBQ0osaUJBQWlCO2FBQ2xCO0FBQ0Qsa0JBQU0sTUFBTSxRQUFPO1VBQ3JCO0FBQ0E7UUFDRjtBQUNFO01BQ0o7SUFDRjs7OzttQ0F4SFcsZUFBWSw0QkFBQSxlQUFBLEdBQUEsNEJBQUEsTUFBQSxHQUFBLDRCQUFBLE1BQUEsR0FBQSw0QkFBQSxjQUFBLEdBQUEsNEJBQUEsZUFBQSxHQUFBLDRCQUFBLGVBQUEsR0FBQSw0QkFBQSxlQUFBLEdBQUEsNEJBQUEsYUFBQSxHQUFBLDRCQUFBLFVBQUEsR0FBQSw0QkFBQSxnQkFBQSxHQUFBLDRCQUFBLHVCQUFBLEdBQUEsNEJBQUEsaUJBQUEsQ0FBQTtBQUFBOzhFQUFaLGVBQVksV0FBQSxDQUFBLENBQUEsVUFBQSxDQUFBLEdBQUEsY0FBQSxTQUFBLDBCQUFBLElBQUEsS0FBQTtBQUFBLE1BQUEsS0FBQSxHQUFBO0FBQVosSUFBQSxxQkFBQSxVQUFBLFNBQUEsdUNBQUEsUUFBQTtBQUFBLGFBQUEsSUFBQSxjQUFBLE1BQUE7SUFBcUIsR0FBQSxPQUFBLHlCQUFBLEVBQVQsZ0JBQUEsU0FBQSw2Q0FBQSxRQUFBO0FBQUEsYUFBWixJQUFBLG9CQUFBLE1BQUE7SUFBMkIsR0FBQSxPQUFBLHlCQUFBOzs7O0FDNUJ4QyxJQUFBLHlCQUFBLEdBQUEsU0FBQTtBQUNFLElBQUEsb0JBQUEsR0FBQSxtQkFBQTtBQUNGLElBQUEsdUJBQUE7O2tCRHdCWSxRQUFRLGVBQWUsR0FBQSxlQUFBLEVBQUEsQ0FBQTtBQUU3QixJQUFPLGVBQVA7O3NFQUFPLGNBQVksQ0FBQTtVQUx4Qjt1QkFDVyxZQUFVLFNBRVgsQ0FBQyxRQUFRLGVBQWUsR0FBQyxVQUFBLHFFQUFBLENBQUE7cVVBSWxDLGVBQWEsQ0FBQTtVQURaO1dBQWEsaUJBQWlCLENBQUMsUUFBUSxDQUFDO01BTXpDLHFCQUFtQixDQUFBO1VBRGxCO1dBQWEsdUJBQXVCLENBQUMsUUFBUSxDQUFDOzs7OzZFQU5wQyxjQUFZLEVBQUEsV0FBQSxnQkFBQSxVQUFBLDRCQUFBLFlBQUEsR0FBQSxDQUFBO0FBQUEsR0FBQTs7O0FFdEJsQixJQUFNLGtCQUFxQyxDQUFDLEtBQUssU0FBUTtBQUM5RCxTQUFPLEtBQUssaUJBQWlCLEVBQUUsY0FBYyxNQUFLLENBQUUsQ0FBQyxFQUFFLEtBQ3JELFVBQVUsQ0FBQyxZQUF3QjtBQVB2QztBQVVNLFVBQU0sU0FBUSw4Q0FBUyxXQUFULG1CQUFpQixZQUFqQixtQkFBMEI7QUFHeEMsVUFBTSxTQUFTLElBQUksTUFBTTtNQUN2QixZQUFZO1FBQ1YsZUFBZSxRQUFRLEdBQUcsS0FBSyxLQUFLO1FBQ3BDLGFBQWEsWUFBWSxXQUFXLFNBQVE7UUFDNUMsU0FBUyxZQUFZOztLQUV4QjtBQUdELFdBQU8sS0FBSyxNQUFNO0VBQ3BCLENBQUMsR0FDRCxXQUFXLENBQUMsUUFBTztBQUVqQixVQUFNO0VBQ1IsQ0FBQyxDQUFDO0FBRU47OztBQzFCTyxJQUFNLGtCQUFrQjtFQUM3QjtJQUNFLFNBQVM7SUFDVCxVQUF3QixtQkFBbUI7TUFDekMsWUFBWTtLQUNiOztFQUVIO0lBQ0UsU0FBdUI7SUFDdkIsTUFBTSxDQUFDLE1BQU07O0VBRWY7SUFDRSxTQUFTO0lBQ1QsWUFBWSxNQUFNLE1BQUs7SUFBRTtJQUN6QixNQUFNLENBQWUsWUFBWTtJQUNqQyxPQUFPOzs7OztBQ25CWCxJQUFJLEtBQUssT0FBSztBQUNaLFFBQU0sVUFBVSxDQUFDO0FBQ25CO0FBQ0EsSUFBSSxLQUFLLENBQUMsR0FBRyxHQUFHLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQztBQUNsRCxJQUFJLEtBQUssQ0FBQyxHQUFHLEdBQUcsT0FBTyxHQUFHLEdBQUcsR0FBRyx5QkFBeUIsR0FBRyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7QUFBbkYsSUFDRSxLQUFLLENBQUMsR0FBRyxHQUFHLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLG1EQUFtRCxJQUFJLGFBQWEsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxHQUFHLENBQUM7QUFEckksSUFFRSxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsT0FBTyxHQUFHLEdBQUcsR0FBRyx3QkFBd0IsR0FBRyxJQUFJLEVBQUUsS0FBSyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksR0FBRyxDQUFDLEdBQUc7QUFDNUYsSUFBTSxLQUFLLENBQUMsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxHQUFHLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsZUFBZSxHQUFHLEdBQUcsQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLGNBQWMsR0FBRyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsQ0FBQztBQUE1WCxJQUNFLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUR4QixJQUVFLEtBQUssR0FBRyxPQUFPLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHO0FBRjNDLElBR0UsS0FBSyxHQUFHLE9BQU8sQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUc7QUFDM0MsU0FBUyxHQUFHLEdBQUc7QUFDYixVQUFRLEdBQUc7QUFBQSxJQUNULEtBQUs7QUFDSCxhQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsTUFBTSxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUM7QUFBQSxJQUN6QyxLQUFLO0FBQ0gsYUFBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLE1BQU0sSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDO0FBQUEsSUFDekMsS0FBSztBQUNILGNBQVEsS0FBSyxHQUFHLFVBQVU7QUFBQSxJQUM1QixLQUFLO0FBQ0gsYUFBTztBQUFBLElBQ1Q7QUFDRSxhQUFPLEtBQUssR0FBRyxRQUFRLENBQUM7QUFBQSxFQUM1QjtBQUNGO0FBQ0EsU0FBUyxHQUFHLEdBQUc7QUFDYixNQUFJLE1BQU0sRUFBRyxRQUFPO0FBQ3BCLFFBQU0sSUFBSSxLQUFLLEtBQUssTUFBTSxDQUFDO0FBQzNCLFNBQU8sR0FBRyxDQUFDO0FBQ2I7QUFDQSxTQUFTLEdBQUcsR0FBRztBQUNiLFNBQU8sRUFBRSxPQUFPLENBQUMsR0FBRyxNQUFNLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQztBQUN4QztBQUNBLElBQU0sS0FBSyxDQUFDLGdCQUFnQixtQkFBbUIsa0JBQWtCLFVBQVU7QUFDM0UsU0FBUyxHQUFHLEdBQUc7QUFDYixTQUFPLEdBQUcsUUFBUSxDQUFDO0FBQ3JCO0FBQ0EsSUFBTSxLQUFLO0FBQUEsRUFBQztBQUFBLEVBQVc7QUFBQSxFQUFTO0FBQUEsRUFBYTtBQUFBLEVBQWE7QUFBQSxFQUFhO0FBQUEsRUFBYTtBQUFBLEVBQWE7QUFBQSxFQUFhO0FBQUEsRUFBYTtBQUFBLEVBQWE7QUFBQSxFQUFhO0FBQUEsRUFBYztBQUFBLEVBQWM7QUFBQSxFQUFjO0FBQUEsRUFBYztBQUFBLEVBQWM7QUFBQSxFQUFjO0FBQUEsRUFBUztBQUFBLEVBQVU7QUFBQSxFQUFVO0FBQUEsRUFBVTtBQUFBLEVBQVU7QUFBQSxFQUFhO0FBQUEsRUFBUTtBQUFBLEVBQVU7QUFBQSxFQUFXO0FBQUEsRUFBVTtBQUFBLEVBQVU7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUl4VjtBQUFBLEVBQVc7QUFBQSxFQUFRO0FBQUEsRUFBVztBQUFBLEVBQVc7QUFBQSxFQUFXO0FBQVE7QUFDNUQsU0FBUyxHQUFHLEdBQUc7QUFDYixTQUFPLE1BQU0sZUFBZSxHQUFHLFFBQVEsU0FBUyxJQUFJLEdBQUcsUUFBUSxDQUFDO0FBQ2xFO0FBQ0EsSUFBTSxLQUFLLENBQUMsUUFBUSxVQUFVLFNBQVMsT0FBTyxZQUFZLFlBQVk7QUFDdEUsU0FBUyxHQUFHLEdBQUc7QUFDYixTQUFPLEdBQUcsQ0FBQztBQUNiO0FBQ0EsSUFBTSxLQUFLLENBQUMsVUFBVSxRQUFRLFNBQVM7QUFDdkMsU0FBUyxHQUFHLEdBQUc7QUFDYixTQUFPLEdBQUcsUUFBUSxDQUFDO0FBQ3JCO0FBQ0EsSUFBTSxLQUFLLENBQUMsU0FBUyxPQUFPLE9BQU8sT0FBTyxTQUFTO0FBQ25ELFNBQVMsR0FBRyxHQUFHO0FBQ2IsU0FBTyxHQUFHLFFBQVEsQ0FBQztBQUNyQjtBQUNBLElBQU0sS0FBSztBQUFBLEVBQ1QsU0FBUyxDQUFDO0FBQUEsRUFDVixXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxXQUFXO0FBQUEsRUFDWCxjQUFjO0FBQUEsRUFDZCxZQUFZO0FBQUEsRUFDWixXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUEsRUFDUixpQkFBaUI7QUFBQSxFQUNqQixvQkFBb0I7QUFBQSxFQUNwQixjQUFjO0FBQUEsRUFDZCxvQkFBb0I7QUFBQSxFQUNwQix1QkFBdUI7QUFBQSxFQUN2QixjQUFjO0FBQUEsRUFDZCxnQkFBZ0I7QUFBQSxFQUNoQixVQUFVO0FBQUEsRUFDVixjQUFjO0FBQ2hCO0FBQ0EsU0FBUyxHQUFHLEdBQUc7QUFDYixTQUFPLGlDQUNGLElBREU7QUFBQSxJQUVMLFNBQVMsR0FBRyxFQUFFLE9BQU87QUFBQSxJQUNyQixXQUFXLEdBQUcsRUFBRSxTQUFTO0FBQUEsSUFDekIsZ0JBQWdCLEdBQUcsRUFBRSxjQUFjO0FBQUEsSUFDbkMsVUFBVSxHQUFHLEVBQUUsUUFBUTtBQUFBLElBQ3ZCLGNBQWMsR0FBRyxFQUFFLFlBQVk7QUFBQSxFQUNqQztBQUNGO0FBQ0EsU0FBUyxHQUFHLEdBQUc7QUFDYixTQUFPLGlDQUNGLElBREU7QUFBQSxJQUVMLFFBQVEsR0FBRyxFQUFFLE1BQU07QUFBQSxJQUNuQixhQUFhLEdBQUcsRUFBRSxXQUFXO0FBQUEsSUFDN0IsVUFBVSxFQUFFO0FBQUEsRUFDZDtBQUNGO0FBQ0EsSUFFRSxLQUFLO0FBQUEsRUFDSCxZQUFZLENBQUMsR0FBRyxNQUFNO0FBQ3BCLFVBQU0sSUFBSSxFQUFFLE1BQU0sZUFBZTtBQUNqQyxXQUFPLElBQUkseURBQXlELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUk7QUFBQSxFQUN4RjtBQUNGO0FBUEYsSUFRRSxLQUFvQixvQkFBSSxRQUFRO0FBQ2xDLFNBQVMsR0FBRyxHQUFHLEdBQUc7QUFDaEIsU0FBTyxPQUFPLEdBQUcsR0FBRyxDQUFDLEtBQUssT0FBTyxLQUFLLENBQUMsRUFBRSxXQUFXLE9BQU8sS0FBSyxDQUFDLEVBQUUsVUFBVSxPQUFPLEtBQUssQ0FBQyxFQUFFLE1BQU0sT0FBSyxPQUFPLE9BQU8sR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDN0k7QUFDQSxTQUFTLEdBQUcsR0FBRztBQUFBLEVBQ2IsV0FBVztBQUFBLEVBQ1gsWUFBWSxJQUFJO0FBQUEsRUFDaEIsaUJBQWlCLElBQUk7QUFDdkIsSUFBSSxDQUFDLEdBQUc7QUFDTixNQUFJO0FBQ0osUUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxPQUFPLElBQUksQ0FBQyxFQUFFLEdBQzlDLElBQUksS0FBSyxPQUFPLElBQUk7QUFDdEIsTUFBSTtBQUNKLE1BQUksR0FBRztBQUNMLFFBQUksTUFBTSxJQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUksUUFBTztBQUMvQixVQUFNLElBQUksRUFBRSxtQkFDUCxFQUNKO0FBQ0QsV0FBTyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUc7QUFBQSxFQUM1QjtBQUNBLEdBQUMsS0FBSyxPQUFPLElBQUksRUFBRSxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM1QztBQUlBLFNBQWUsR0FBRyxJQUFHLElBQVc7QUFBQSw2Q0FBZCxHQUFHLEdBQUcsSUFBSSxJQUFJO0FBQzlCLFVBQU0sSUFBSSxrQ0FDSCxLQUNBLElBRUwsSUFBSSxNQUFNLEdBQUcsR0FBRztBQUFBLE1BQ2QsaUJBQWlCO0FBQUEsSUFDbkIsQ0FBQztBQUNILFFBQUksR0FBRztBQUNQLFFBQUksV0FBVyxLQUFLLFlBQVksS0FBSyxVQUFVLEdBQUc7QUFDaEQsWUFBTTtBQUFBLFFBQ0osTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFVBQ0osWUFBWTtBQUFBLFFBQ2Q7QUFBQSxRQUNBLE9BQU87QUFBQSxRQUNQLFFBQVE7QUFBQSxNQUNWLElBQUk7QUFDSixVQUFJLEVBQUUsUUFBUSxDQUFDLEdBQUcsRUFBRSxPQUFPLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxFQUFFLHVCQUF1QixHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUFBLElBQ25GLE9BQU87QUFDTCxVQUFJLEdBQUc7QUFDUCxVQUFJLFlBQVksRUFBRyxFQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxZQUFZLENBQUM7QUFBQSxlQUFXLGdCQUFnQixFQUFHLEVBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLFlBQVksSUFBSSxXQUFXLENBQUMsQ0FBQztBQUFBLGVBQVcsVUFBVSxFQUFHLEVBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sSUFBSSxXQUFXLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQztBQUFBLFVBQU8sT0FBTSxJQUFJLFVBQVUsb0JBQW9CO0FBQ2pQLFVBQUksRUFBRSxRQUFRLENBQUMsR0FBRyxFQUFFLE9BQU8sSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLEVBQUUsc0JBQXNCLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUFBLElBQy9FO0FBQ0EsTUFBRSxNQUFNLENBQUM7QUFDVCxVQUFNLElBQUksQ0FBQztBQUNYLGFBQVMsSUFBSSxHQUFHLElBQUksRUFBRSxLQUFLLEdBQUcsRUFBRSxFQUFHLEdBQUUsS0FBSyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUN0RCxXQUFPO0FBQUEsRUFDVDtBQUFBO0FBQ0MsaUNBQ0ksS0FESjtBQUFBLEVBRUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxPQUFPO0FBQ3pCO0FBQ0EsU0FBZSxLQUFXO0FBQUEsNkNBQVIsSUFBSSxDQUFDLEdBQUc7QUFDeEIsUUFBSSxHQUNGLEdBQ0EsR0FDQSxJQUFJLEdBQ0osSUFBSSxDQUFDLENBQUMsV0FBVyxRQUNqQixJQUFJLE9BQU8sTUFBTSxLQUNqQixJQUFJLENBQUMsQ0FBQyxXQUFXO0FBQ25CLE9BQUcsSUFBSSxXQUFXLGFBQWEsUUFBUSxNQUFNLFdBQVcsSUFBSSxFQUFFLGNBQWMsUUFBUSxNQUFNLFdBQVcsRUFBRSxVQUFVLElBQUksV0FBVyxhQUFhLFFBQVEsTUFBTSxTQUFTLFNBQVMsRUFBRSxTQUFTO0FBQ3hMLFFBQUksSUFBSSxrQkFDTixHQUNBLElBQUk7QUFDTixhQUFTLEVBQUUsR0FBRztBQUNaLGFBQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxHQUFHLENBQUMsSUFBSSxJQUFJO0FBQUEsSUFDakQ7QUFDQSxRQUFJLElBQUk7QUFDUixRQUFJLEtBQUssS0FBSyxHQUFHO0FBQ2YsVUFBSTtBQUNGLFlBQUksSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFFO0FBQUEsTUFDdEIsUUFBUTtBQUFBLE1BQUM7QUFDVCxZQUFNLElBQUksT0FBSztBQUNiLFlBQUlDLEtBQUksSUFBSSxlQUFlO0FBQzNCLGVBQU9BLEdBQUUsS0FBSyxPQUFPLEdBQUcsS0FBRSxHQUFHQSxHQUFFLGVBQWUsZUFBZUEsR0FBRSxLQUFLLElBQUksR0FBRyxJQUFJLFdBQVdBLEdBQUUsUUFBUTtBQUFBLE1BQ3RHLElBQUksS0FBSyxDQUFNLE1BQUs7QUFDbEIsWUFBSUEsS0FBSSxNQUFNLE1BQU0sR0FBRztBQUFBLFVBQ3JCLGFBQWE7QUFBQSxRQUNmLENBQUM7QUFDRCxZQUFJQSxHQUFFLEdBQUksUUFBT0EsR0FBRSxZQUFZO0FBQy9CLGNBQU0sSUFBSSxNQUFNQSxHQUFFLFNBQVMsUUFBUUEsR0FBRSxHQUFHO0FBQUEsTUFDMUM7QUFBQSxJQUNGO0FBQ0EsUUFBSSxLQUFLLFFBQVEsSUFBSSxLQUFLLE9BQU8sR0FDL0IsSUFBSSxRQUFRLE1BQU0sS0FBSyxPQUFPLEdBQzlCLEdBQ0EsS0FBSyxPQUNMLElBQ0EsSUFDQSxHQUNBLEdBQ0EsSUFDQSxJQUNBLElBQ0EsR0FDQSxJQUNBLElBQ0EsS0FBSztBQUNQLGFBQVMsS0FBSztBQUNaLFVBQUksSUFBSSxHQUFHO0FBQ1gsVUFBSSxJQUFJLFVBQVUsQ0FBQyxHQUFHLEtBQUssSUFBSSxXQUFXLENBQUMsR0FBRyxFQUFFLFNBQVMsSUFBSSxJQUFJLFdBQVcsQ0FBQyxHQUFHLEtBQUssSUFBSSxZQUFZLENBQUMsR0FBRyxLQUFLLElBQUksV0FBVyxDQUFDLEdBQUcsSUFBSSxJQUFJLFlBQVksQ0FBQyxHQUFHLEtBQUssSUFBSSxhQUFhLENBQUMsR0FBRyxLQUFLLElBQUksYUFBYSxDQUFDO0FBQUEsSUFDNU07QUFDQSxhQUFTLEtBQUs7QUFDWixVQUFJLEVBQUUsT0FBUSxNQUFLLE9BQU8sRUFBRSxVQUFVLGVBQWUsRUFBRSxTQUFTLENBQUMsRUFBRSxNQUFNLElBQUksRUFBRSxPQUFPLFNBQVMsSUFBRyxFQUFFLE9BQU8sTUFBTSxDQUFDO0FBQ2xILFNBQUcsRUFBRTtBQUFBLElBQ1A7QUFDQSxhQUFTLEtBQUs7QUFDWixXQUFLLE1BQUksR0FBRyxHQUFHO0FBQUEsSUFDakI7QUFDQSxhQUFTLEtBQUs7QUFDWixVQUFJLEVBQUUsUUFBUyxNQUFLLE9BQU8sRUFBRSxXQUFXLGVBQWUsRUFBRSxVQUFVLENBQUMsRUFBRSxPQUFPLElBQUksRUFBRSxRQUFRLFNBQVMsSUFBRyxFQUFFLFFBQVEsTUFBTSxDQUFDO0FBQ3hILFNBQUcsRUFBRTtBQUFBLElBQ1A7QUFDQSxhQUFTLEdBQUcsR0FBRztBQUNiLFVBQUlBLElBQUc7QUFDUCxPQUFDQSxLQUFJLEVBQUUsYUFBYSxRQUFRQSxPQUFNLFVBQVVBLEdBQUUsS0FBSyxHQUFHLENBQUMsR0FBRyxJQUFJLGFBQWEsSUFBSSxLQUFLLEVBQUUsQ0FBQyxHQUFHLEtBQUssTUFBSSxLQUFLO0FBQ3hHLFVBQUksSUFBSSxJQUFJLFlBQVksYUFBYSxDQUFDO0FBQ3RDLGFBQU8sSUFBSSxRQUFRLFFBQVEsTUFBTSxVQUFVLEVBQUUsQ0FBQyxHQUFHO0FBQUEsSUFDbkQ7QUFDQSxRQUFJO0FBQ0osYUFBUyxLQUFLO0FBQ1osYUFBTyxFQUFFLG1CQUFtQjtBQUFBLElBQzlCO0FBQ0EsYUFBUyxHQUFHLEdBQUc7QUFDYixVQUFJLEtBQUssTUFBTSxFQUFHLFFBQU8sSUFBSSxXQUFXLENBQUM7QUFDekMsVUFBSSxFQUFHLFFBQU8sRUFBRSxDQUFDO0FBQ2pCLFlBQU07QUFBQSxJQUNSO0FBQ0EsYUFBZSxHQUFHLEdBQUc7QUFBQTtBQUNuQixZQUFJLENBQUMsRUFBRyxLQUFJO0FBQ1YsY0FBSUEsS0FBSSxNQUFNLEdBQUcsQ0FBQztBQUNsQixpQkFBTyxJQUFJLFdBQVdBLEVBQUM7QUFBQSxRQUN6QixRQUFRO0FBQUEsUUFBQztBQUNULGVBQU8sR0FBRyxDQUFDO0FBQUEsTUFDYjtBQUFBO0FBQ0EsYUFBZSxHQUFHLEdBQUdBLElBQUc7QUFBQTtBQUN0QixZQUFJO0FBQ0YsY0FBSSxJQUFJLE1BQU0sR0FBRyxDQUFDLEdBQ2hCLElBQUksTUFBTSxZQUFZLFlBQVksR0FBR0EsRUFBQztBQUN4QyxpQkFBTztBQUFBLFFBQ1QsU0FBUyxHQUFHO0FBQ1YsWUFBRSwwQ0FBMEMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDO0FBQUEsUUFDeEQ7QUFBQSxNQUNGO0FBQUE7QUFDQSxhQUFlLEdBQUcsR0FBR0EsSUFBRyxHQUFHO0FBQUE7QUFDekIsWUFBSSxDQUFDLEtBQUssWUFBWSxxQkFBc0IsS0FBSTtBQUM5QyxjQUFJLElBQUksTUFBTUEsSUFBRztBQUFBLFlBQ2IsYUFBYTtBQUFBLFVBQ2YsQ0FBQyxHQUNELElBQUksTUFBTSxZQUFZLHFCQUFxQixHQUFHLENBQUM7QUFDakQsaUJBQU87QUFBQSxRQUNULFNBQVMsR0FBRztBQUNWLFlBQUUsa0NBQWtDLENBQUMsRUFBRSxHQUFHLEVBQUUsMkNBQTJDO0FBQUEsUUFDekY7QUFDQSxlQUFPLEdBQUdBLElBQUcsQ0FBQztBQUFBLE1BQ2hCO0FBQUE7QUFDQSxhQUFTLEtBQUs7QUFDWixVQUFJLElBQUk7QUFBQSxRQUNOLEdBQUc7QUFBQSxNQUNMO0FBQ0EsYUFBTztBQUFBLElBQ1Q7QUFDQSxhQUFlLEtBQUs7QUFBQTtBQUNsQixpQkFBUyxFQUFFLEdBQUcsR0FBRztBQUNmLGlCQUFPLEtBQUssRUFBRSxTQUFTLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRztBQUFBLFFBQ3ZDO0FBQ0EsaUJBQVNBLEdBQUUsR0FBRztBQUNaLGlCQUFPLEVBQUUsRUFBRSxRQUFRO0FBQUEsUUFDckI7QUFDQSxZQUFJLElBQUksR0FBRztBQUNYLFlBQUksRUFBRSxnQkFBaUIsUUFBTyxJQUFJLFFBQVEsQ0FBQyxHQUFHLE1BQU07QUFDbEQsWUFBRSxnQkFBZ0IsR0FBRyxDQUFDLEdBQUcsTUFBTTtBQUM3QixjQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQUEsVUFDUixDQUFDO0FBQUEsUUFDSCxDQUFDO0FBQ0QsY0FBTSxTQUFTLEtBQUssR0FBRztBQUN2QixZQUFJLElBQUksTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQ3ZCLElBQUlBLEdBQUUsQ0FBQztBQUNULGVBQU87QUFBQSxNQUNUO0FBQUE7QUFDQSxRQUFJLEtBQUssT0FBSztBQUNWLGFBQU8sRUFBRSxTQUFTLElBQUksR0FBRSxNQUFNLEVBQUUsQ0FBQztBQUFBLElBQ25DLEdBQ0EsS0FBSyxDQUFDLEdBQ04sS0FBSyxPQUFLLEdBQUcsS0FBSyxDQUFDLEdBQ25CLEtBQUssQ0FBQyxHQUNOLEtBQUssT0FBSyxHQUFHLEtBQUssQ0FBQyxHQUNuQixJQUFJLE9BQUssR0FBRyxDQUFDLEdBQ2IsSUFBSSxNQUFNLEdBQUcsR0FDYixLQUFLLENBQUMsR0FDTixLQUFLLEdBQ0wsS0FBSyxPQUFLO0FBQ1IsVUFBSUEsS0FBSSxJQUFJLEdBQUcsQ0FBQztBQUNoQixhQUFPQSxHQUFFLFdBQVcsTUFBTUEsR0FBRSxXQUFXLElBQUUsR0FBRyxPQUFPQSxHQUFFLGFBQWEsS0FBRSxHQUFHLEdBQUcsS0FBS0EsRUFBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUFBLElBQ2hHLEdBQ0EsSUFBSSxHQUNKLEtBQUssTUFBTTtBQUNULFFBQUUsR0FBRyxDQUFDO0FBQ04sVUFBSSxJQUFJLEdBQUcsSUFBSTtBQUNmLFNBQUcsRUFBRSxNQUFNLEdBQUcsSUFBSTtBQUFBLElBQ3BCO0FBQUEsSUFDRixNQUFNLEdBQUc7QUFBQSxNQUNQLFlBQVlBLElBQUc7QUFDYixhQUFLLFNBQVNBLElBQUcsS0FBSyxNQUFNQSxLQUFJO0FBQUEsTUFDbEM7QUFBQSxNQUNBLFNBQVNBLElBQUc7QUFDVixVQUFFLEtBQUssTUFBTSxLQUFLLENBQUMsSUFBSUE7QUFBQSxNQUN6QjtBQUFBLE1BQ0EsV0FBVztBQUNULGVBQU8sRUFBRSxLQUFLLE1BQU0sS0FBSyxDQUFDO0FBQUEsTUFDNUI7QUFBQSxNQUNBLGVBQWVBLElBQUc7QUFDaEIsVUFBRSxLQUFLLE1BQU0sS0FBSyxDQUFDLElBQUlBO0FBQUEsTUFDekI7QUFBQSxNQUNBLGlCQUFpQjtBQUNmLGVBQU8sRUFBRSxLQUFLLE1BQU0sS0FBSyxDQUFDO0FBQUEsTUFDNUI7QUFBQSxNQUNBLFdBQVdBLElBQUc7QUFDWixRQUFBQSxLQUFJQSxLQUFJLElBQUksR0FBRyxFQUFFLEtBQUssTUFBTSxFQUFFLElBQUlBO0FBQUEsTUFDcEM7QUFBQSxNQUNBLGFBQWE7QUFDWCxlQUFPLEVBQUUsS0FBSyxNQUFNLEVBQUUsS0FBSztBQUFBLE1BQzdCO0FBQUEsTUFDQSxhQUFhQSxJQUFHO0FBQ2QsUUFBQUEsS0FBSUEsS0FBSSxJQUFJLEdBQUcsRUFBRSxLQUFLLE1BQU0sRUFBRSxJQUFJQTtBQUFBLE1BQ3BDO0FBQUEsTUFDQSxlQUFlO0FBQ2IsZUFBTyxFQUFFLEtBQUssTUFBTSxFQUFFLEtBQUs7QUFBQSxNQUM3QjtBQUFBLE1BQ0EsS0FBS0EsSUFBRyxHQUFHO0FBQ1QsYUFBSyxpQkFBaUIsQ0FBQyxHQUFHLEtBQUssU0FBU0EsRUFBQyxHQUFHLEtBQUssZUFBZSxDQUFDO0FBQUEsTUFDbkU7QUFBQSxNQUNBLGlCQUFpQkEsSUFBRztBQUNsQixVQUFFLEtBQUssTUFBTSxNQUFNLENBQUMsSUFBSUE7QUFBQSxNQUMxQjtBQUFBLE1BQ0EsbUJBQW1CO0FBQ2pCLGVBQU8sRUFBRSxLQUFLLE1BQU0sTUFBTSxDQUFDO0FBQUEsTUFDN0I7QUFBQSxJQUNGO0FBQ0EsUUFBSSxLQUFLLE9BQUssR0FBRyxDQUFDLEdBQ2hCLEtBQUssT0FBSztBQUNSLFVBQUlBLEtBQUk7QUFDUixVQUFJLENBQUNBLEdBQUcsUUFBTyxHQUFHLENBQUMsR0FBRztBQUN0QixVQUFJLElBQUksSUFBSSxHQUFHQSxFQUFDO0FBQ2hCLFFBQUUsaUJBQWlCQSxFQUFDO0FBQ3BCLFVBQUksSUFBSSxFQUFFLFNBQVM7QUFDbkIsVUFBSSxDQUFDLEVBQUcsUUFBTyxHQUFHLENBQUMsR0FBR0E7QUFDdEIsZUFBUyxLQUFLLEdBQUc7QUFDZixZQUFJLE1BQU0sS0FBSyxNQUFNLEVBQUc7QUFDeEIsWUFBSSxJQUFJLEVBQUUsTUFBTTtBQUNoQixZQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRyxRQUFPLEdBQUcsQ0FBQyxHQUFHQTtBQUFBLE1BQ2pDO0FBQ0EsYUFBTyxHQUFHLENBQUMsR0FBR0E7QUFBQSxJQUNoQixHQUNBLEtBQUssTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUNoQixLQUFLLE9BQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUNoQixLQUFLLENBQUMsR0FBR0EsT0FBTSxHQUFHLENBQUMsR0FBR0EsRUFBQyxDQUFDLEdBQ3hCLEtBQUssTUFBTTtBQUNULFVBQUksSUFBSSxHQUFHLElBQUk7QUFDZixXQUFLLEdBQUcsdUJBQXVCO0FBQy9CLFVBQUlBLEtBQUksRUFBRTtBQUNWLFlBQU0sRUFBRSxhQUFhLE1BQU0sR0FBRyxLQUFLLENBQUMsR0FBRyxFQUFFLGFBQWEsSUFBRSxHQUFHLEVBQUUsV0FBVyxLQUFFLEdBQUcsT0FBTyxJQUFJQSxJQUFHO0FBQUEsSUFDN0YsR0FDQSxLQUFLLENBQUMsR0FBR0EsSUFBRyxNQUFNO0FBQ2hCLFVBQUksSUFBSSxJQUFJLEdBQUcsQ0FBQztBQUNoQixZQUFNLEVBQUUsS0FBS0EsSUFBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLE1BQU07QUFBQSxJQUNuQyxHQUNBLEtBQUssTUFBTSxJQUNYLEtBQUssT0FBSztBQUNSLFlBQU0sTUFBTSxJQUFJLElBQUk7QUFBQSxJQUN0QixHQUNBLEtBQUssTUFBTSxHQUFHLEVBQUUsR0FDaEIsS0FBSyxDQUFDLEdBQ04sS0FBSyxPQUFLO0FBQ1IsYUFBTyxFQUFFLFVBQVM7QUFDaEIsWUFBSUEsS0FBSSxFQUFFLElBQUksR0FDWixJQUFJLEVBQUUsSUFBSTtBQUNaLFVBQUVBLEVBQUM7QUFBQSxNQUNMO0FBQUEsSUFDRjtBQUNGLGFBQVMsR0FBRyxHQUFHO0FBQ2IsYUFBTyxLQUFLLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUFBLElBQ3BDO0FBQ0EsUUFBSSxLQUFLLENBQUMsR0FDUixJQUFJLENBQUMsR0FDTCxLQUFLLENBQUMsR0FDTixLQUFLLGNBQWMsTUFBTTtBQUFBLE1BQ3ZCLFlBQVksR0FBRztBQUNiLGNBQU0sQ0FBQyxHQUFHLEtBQUssT0FBTztBQUFBLE1BQ3hCO0FBQUEsSUFDRixHQUNBLEtBQUssT0FBSztBQUNSLFlBQU0sSUFBSSxHQUFHLENBQUM7QUFBQSxJQUNoQixHQUNBLElBQUksQ0FBQyxHQUFHQSxJQUFHLE1BQU07QUFDZixRQUFFLFFBQVEsT0FBSyxHQUFHLENBQUMsSUFBSUEsRUFBQztBQUN4QixlQUFTLEVBQUUsR0FBRztBQUNaLFlBQUksSUFBSSxFQUFFLENBQUM7QUFDWCxVQUFFLFdBQVcsRUFBRSxVQUFVLEdBQUcsaUNBQWlDO0FBQzdELGlCQUFTLElBQUksR0FBRyxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQUcsR0FBRSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUFBLE1BQ2pEO0FBQ0EsVUFBSSxJQUFJLElBQUksTUFBTUEsR0FBRSxNQUFNLEdBQ3hCLElBQUksQ0FBQyxHQUNMLElBQUk7QUFDTjtBQUNFLGNBQU0sSUFBSUE7QUFDVixpQkFBUyxJQUFJLEdBQUcsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHO0FBQ2pDLGdCQUFNLElBQUksRUFBRSxDQUFDO0FBQ2IsWUFBRSxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxHQUFHLEdBQUcsZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLEtBQUssTUFBTTtBQUNyRyxjQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsTUFBTSxFQUFFLFVBQVUsRUFBRSxDQUFDO0FBQUEsVUFDekMsQ0FBQztBQUFBLFFBQ0g7QUFBQSxNQUNGO0FBQ0EsUUFBRSxXQUFXLEtBQUssRUFBRSxDQUFDO0FBQUEsSUFDdkIsR0FDQSxLQUFLLE9BQUs7QUFDUixVQUFJQSxLQUFJLEdBQUcsQ0FBQztBQUNaLGFBQU8sR0FBRyxDQUFDO0FBQ1gsVUFBSSxJQUFJQSxHQUFFLGdCQUNSLElBQUlBLEdBQUUsZUFDTixJQUFJQSxHQUFFLFFBQ04sSUFBSSxFQUFFLElBQUksT0FBSyxFQUFFLGdCQUFnQixFQUFFLE9BQU8sRUFBRSxJQUFJLE9BQUssRUFBRSxrQkFBa0IsQ0FBQztBQUM1RSxRQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsT0FBSztBQUNiLFlBQUksSUFBSSxDQUFDO0FBQ1Q7QUFDRSxnQkFBTSxJQUFJO0FBQ1YsbUJBQVMsSUFBSSxHQUFHLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRztBQUNqQyxrQkFBTSxJQUFJLEVBQUUsQ0FBQyxHQUNYLElBQUksRUFBRSxDQUFDLEdBQ1AsSUFBSSxFQUFFLFFBQ04sSUFBSSxFQUFFLGVBQ04sSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEdBQ2xCLElBQUksRUFBRSxRQUNOLElBQUksRUFBRTtBQUNSLGNBQUUsRUFBRSxTQUFTLElBQUk7QUFBQSxjQUNmLE1BQU0sT0FBSyxFQUFFLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUFBLGNBQ2pDLE9BQU8sQ0FBQyxHQUFHLE1BQU07QUFDZixvQkFBSSxJQUFJLENBQUM7QUFDVCxrQkFBRSxHQUFHLEdBQUcsRUFBRSxXQUFXLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQUEsY0FDbkM7QUFBQSxjQUNBLFVBQVUsRUFBRTtBQUFBLFlBQ2Q7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUNBLGVBQU8sQ0FBQztBQUFBLFVBQ04sTUFBTUEsR0FBRTtBQUFBLFVBQ1IsY0FBYyxPQUFLO0FBQ2pCLGdCQUFJLElBQUksQ0FBQztBQUNULHFCQUFTLEtBQUssRUFBRyxHQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUM7QUFDbkMsbUJBQU8sRUFBRSxDQUFDLEdBQUc7QUFBQSxVQUNmO0FBQUEsVUFDQSxZQUFZLENBQUMsR0FBRyxNQUFNO0FBQ3BCLHFCQUFTLEtBQUssRUFBRyxLQUFJLEVBQUUsS0FBSyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsU0FBVSxPQUFNLElBQUksVUFBVSxtQkFBbUIsQ0FBQyxHQUFHO0FBQzdGLGdCQUFJLElBQUksRUFBRTtBQUNWLGlCQUFLLEtBQUssRUFBRyxHQUFFLENBQUMsRUFBRSxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFDL0IsbUJBQU8sTUFBTSxRQUFRLEVBQUUsS0FBSyxHQUFHLENBQUMsR0FBRztBQUFBLFVBQ3JDO0FBQUEsVUFDQSxzQkFBc0I7QUFBQSxVQUN0QixvQkFBb0I7QUFBQSxRQUN0QixDQUFDO0FBQUEsTUFDSCxDQUFDO0FBQUEsSUFDSCxHQUNBLEtBQUssQ0FBQyxHQUFHQSxJQUFHLEdBQUcsR0FBRyxNQUFNO0FBQUEsSUFBQyxHQUN6QixJQUFJLE9BQUs7QUFDUCxlQUFTQSxLQUFJLFFBQU07QUFDakIsWUFBSSxJQUFJLEVBQUUsR0FBRztBQUNiLFlBQUksQ0FBQyxFQUFHLFFBQU9BO0FBQ2YsUUFBQUEsTUFBSyxPQUFPLGFBQWEsQ0FBQztBQUFBLE1BQzVCO0FBQUEsSUFDRixHQUNBLEtBQUssY0FBYyxNQUFNO0FBQUEsTUFDdkIsWUFBWSxHQUFHO0FBQ2IsY0FBTSxDQUFDLEdBQUcsS0FBSyxPQUFPO0FBQUEsTUFDeEI7QUFBQSxJQUNGLEdBQ0EsSUFBSSxPQUFLO0FBQ1AsWUFBTSxJQUFJLEdBQUcsQ0FBQztBQUFBLElBQ2hCO0FBQ0YsYUFBUyxHQUFHLEdBQUdBLElBQUc7QUFDaEIsVUFBSSxJQUFJLFVBQVUsU0FBUyxLQUFLLFVBQVUsQ0FBQyxNQUFNLFNBQVMsVUFBVSxDQUFDLElBQUksQ0FBQztBQUMxRSxVQUFJLElBQUlBLEdBQUU7QUFDVixVQUFJLEtBQUssRUFBRSxTQUFTLENBQUMsK0NBQStDLEdBQUcsRUFBRSxlQUFlLENBQUMsR0FBRztBQUMxRixZQUFJLEVBQUUsNkJBQThCO0FBQ3BDLFVBQUUseUJBQXlCLENBQUMsU0FBUztBQUFBLE1BQ3ZDO0FBQ0EsVUFBSSxFQUFFLENBQUMsSUFBSUEsSUFBRyxPQUFPLEdBQUcsQ0FBQyxHQUFHLEdBQUcsZUFBZSxDQUFDLEdBQUc7QUFDaEQsWUFBSSxJQUFJLEdBQUcsQ0FBQztBQUNaLGVBQU8sR0FBRyxDQUFDLEdBQUcsRUFBRSxRQUFRLE9BQUssRUFBRSxDQUFDO0FBQUEsTUFDbEM7QUFBQSxJQUNGO0FBQ0EsYUFBUyxFQUFFLEdBQUdBLElBQUc7QUFDZixVQUFJLElBQUksVUFBVSxTQUFTLEtBQUssVUFBVSxDQUFDLE1BQU0sU0FBUyxVQUFVLENBQUMsSUFBSSxDQUFDO0FBQzFFLGFBQU8sR0FBRyxHQUFHQSxJQUFHLENBQUM7QUFBQSxJQUNuQjtBQUNBLFFBQUksS0FBSyxDQUFDLEdBQUdBLElBQUcsR0FBRyxNQUFNO0FBQ3JCLE1BQUFBLEtBQUksRUFBRUEsRUFBQyxHQUFHLEVBQUUsR0FBRztBQUFBLFFBQ2IsTUFBTUE7QUFBQSxRQUNOLGNBQWMsU0FBVSxHQUFHO0FBQ3pCLGlCQUFPLENBQUMsQ0FBQztBQUFBLFFBQ1g7QUFBQSxRQUNBLFlBQVksU0FBVSxHQUFHLEdBQUc7QUFDMUIsaUJBQU8sSUFBSSxJQUFJO0FBQUEsUUFDakI7QUFBQSxRQUNBLHNCQUFzQixTQUFVLEdBQUc7QUFDakMsaUJBQU8sS0FBSyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0FBQUEsUUFDL0I7QUFBQSxRQUNBLG9CQUFvQjtBQUFBLE1BQ3RCLENBQUM7QUFBQSxJQUNILEdBQ0EsS0FBSyxRQUFNO0FBQUEsTUFDVCxPQUFPLEVBQUU7QUFBQSxNQUNULGlCQUFpQixFQUFFO0FBQUEsTUFDbkIseUJBQXlCLEVBQUU7QUFBQSxNQUMzQixLQUFLLEVBQUU7QUFBQSxNQUNQLFNBQVMsRUFBRTtBQUFBLE1BQ1gsVUFBVSxFQUFFO0FBQUEsTUFDWixjQUFjLEVBQUU7QUFBQSxJQUNsQixJQUNBLEtBQUssT0FBSztBQUNSLGVBQVNBLEdBQUUsR0FBRztBQUNaLGVBQU8sRUFBRSxHQUFHLFFBQVEsZ0JBQWdCO0FBQUEsTUFDdEM7QUFDQSxRQUFFQSxHQUFFLENBQUMsSUFBSSwyQkFBMkI7QUFBQSxJQUN0QyxHQUNBLEtBQUssT0FDTCxLQUFLLE9BQUs7QUFBQSxJQUFDLEdBQ1gsS0FBSyxPQUFLO0FBQ1IsUUFBRSxXQUFXLEVBQUUsYUFBYSxjQUFjLEVBQUUsUUFBUSxJQUFJLEVBQUUsUUFBUSxnQkFBZ0IsY0FBYyxFQUFFLEdBQUc7QUFBQSxJQUN2RyxHQUNBLEtBQUssT0FBSztBQUNSLFFBQUUsTUFBTSxTQUFTO0FBQ2pCLFVBQUlBLEtBQUksRUFBRSxNQUFNLFVBQVU7QUFDMUIsTUFBQUEsTUFBSyxHQUFHLENBQUM7QUFBQSxJQUNYLEdBQ0EsS0FBSyxPQUFLLFdBQVcsd0JBQXdCLEtBQUssSUFBSSxxQkFBcUIsQ0FBQUEsT0FBSztBQUM5RSxTQUFHQSxHQUFFLEVBQUU7QUFBQSxJQUNULENBQUMsR0FBRyxLQUFLLENBQUFBLE9BQUs7QUFDWixVQUFJLElBQUlBLEdBQUUsSUFDUixJQUFJLENBQUMsQ0FBQyxFQUFFO0FBQ1YsVUFBSSxHQUFHO0FBQ0wsWUFBSSxJQUFJO0FBQUEsVUFDTixJQUFJO0FBQUEsUUFDTjtBQUNBLFdBQUcsU0FBU0EsSUFBRyxHQUFHQSxFQUFDO0FBQUEsTUFDckI7QUFDQSxhQUFPQTtBQUFBLElBQ1QsR0FBRyxLQUFLLENBQUFBLE9BQUssR0FBRyxXQUFXQSxFQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sS0FBSyxDQUFBQSxPQUFLQSxJQUFHLElBQ3RELEtBQUssTUFBTTtBQUNULFVBQUksSUFBSSxHQUFHO0FBQ1gsYUFBTyxPQUFPLEdBQUc7QUFBQSxRQUNmLFVBQVUsR0FBRztBQUNYLGNBQUksRUFBRSxnQkFBZ0IsT0FBTyxFQUFFLGFBQWEsSUFBSyxRQUFPO0FBQ3hELGNBQUksSUFBSSxLQUFLLEdBQUcsUUFBUSxpQkFDdEIsSUFBSSxLQUFLLEdBQUc7QUFDZCxZQUFFLEtBQUssRUFBRTtBQUNULG1CQUFTLElBQUksRUFBRSxHQUFHLFFBQVEsaUJBQWlCLElBQUksRUFBRSxHQUFHLEtBQUssRUFBRSxZQUFZLEtBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxJQUFJLEVBQUU7QUFDOUYsaUJBQU8sRUFBRSxZQUFZLEtBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxJQUFJLEVBQUU7QUFDNUMsaUJBQU8sTUFBTSxLQUFLLE1BQU07QUFBQSxRQUMxQjtBQUFBLFFBQ0EsUUFBUTtBQUNOLGNBQUksS0FBSyxHQUFHLE9BQU8sR0FBRyxJQUFJLEdBQUcsS0FBSyxHQUFHLHdCQUF5QixRQUFPLEtBQUssR0FBRyxNQUFNLFNBQVMsR0FBRztBQUMvRixjQUFJLElBQUksR0FBRyxPQUFPLE9BQU8sT0FBTyxlQUFlLElBQUksR0FBRztBQUFBLFlBQ3BELElBQUk7QUFBQSxjQUNGLE9BQU8sR0FBRyxLQUFLLEVBQUU7QUFBQSxZQUNuQjtBQUFBLFVBQ0YsQ0FBQyxDQUFDO0FBQ0YsaUJBQU8sRUFBRSxHQUFHLE1BQU0sU0FBUyxHQUFHLEVBQUUsR0FBRyxrQkFBa0IsT0FBSTtBQUFBLFFBQzNEO0FBQUEsUUFDQSxTQUFTO0FBQ1AsZUFBSyxHQUFHLE9BQU8sR0FBRyxJQUFJLEdBQUcsS0FBSyxHQUFHLG1CQUFtQixDQUFDLEtBQUssR0FBRywyQkFBMkIsRUFBRSx1Q0FBdUMsR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLEtBQUssRUFBRSxHQUFHLEtBQUssR0FBRyw0QkFBNEIsS0FBSyxHQUFHLFdBQVcsUUFBUSxLQUFLLEdBQUcsTUFBTTtBQUFBLFFBQzFPO0FBQUEsUUFDQSxZQUFZO0FBQ1YsaUJBQU8sQ0FBQyxLQUFLLEdBQUc7QUFBQSxRQUNsQjtBQUFBLFFBQ0EsY0FBYztBQUNaLGlCQUFPLEtBQUssR0FBRyxPQUFPLEdBQUcsSUFBSSxHQUFHLEtBQUssR0FBRyxtQkFBbUIsQ0FBQyxLQUFLLEdBQUcsMkJBQTJCLEVBQUUsdUNBQXVDLEdBQUcsS0FBSyxHQUFHLGtCQUFrQixNQUFJO0FBQUEsUUFDM0s7QUFBQSxNQUNGLENBQUM7QUFDRCxZQUFNQSxLQUFJLE9BQU87QUFDakIsTUFBQUEsT0FBTSxFQUFFQSxFQUFDLElBQUksRUFBRTtBQUFBLElBQ2pCO0FBQ0YsYUFBUyxLQUFLO0FBQUEsSUFBQztBQUNmLFFBQUksS0FBSyxDQUFDLEdBQUdBLE9BQU0sT0FBTyxlQUFlQSxJQUFHLFFBQVE7QUFBQSxNQUNoRCxPQUFPO0FBQUEsSUFDVCxDQUFDLEdBQ0QsS0FBSyxDQUFDLEdBQ04sS0FBSyxDQUFDLEdBQUdBLElBQUcsTUFBTTtBQUNoQixVQUFJLEVBQUVBLEVBQUMsRUFBRSxrQkFBa0IsUUFBUTtBQUNqQyxZQUFJLElBQUksRUFBRUEsRUFBQztBQUNYLFVBQUVBLEVBQUMsSUFBSSxXQUFZO0FBQ2pCLG1CQUFTLElBQUksVUFBVSxRQUFRLElBQUksSUFBSSxNQUFNLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUssR0FBRSxDQUFDLElBQUksVUFBVSxDQUFDO0FBQ3RGLGlCQUFPLEVBQUVBLEVBQUMsRUFBRSxjQUFjLGVBQWUsRUFBRSxNQUFNLEtBQUssRUFBRSxhQUFhLENBQUMsaURBQWlELEVBQUUsTUFBTSx1QkFBdUIsRUFBRUEsRUFBQyxFQUFFLGFBQWEsSUFBSSxHQUFHLEVBQUVBLEVBQUMsRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQUEsUUFDM04sR0FBRyxFQUFFQSxFQUFDLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxFQUFFQSxFQUFDLEVBQUUsY0FBYyxFQUFFLFFBQVEsSUFBSTtBQUFBLE1BQy9EO0FBQUEsSUFDRixHQUNBLEtBQUssQ0FBQyxHQUFHQSxJQUFHLE1BQU07QUFDaEIsUUFBRSxlQUFlLENBQUMsTUFBTSxNQUFNLFVBQVUsRUFBRSxDQUFDLEVBQUUsa0JBQWtCLFVBQVUsRUFBRSxDQUFDLEVBQUUsY0FBYyxDQUFDLE1BQU0sV0FBVyxFQUFFLGdDQUFnQyxDQUFDLFNBQVMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsY0FBYyxlQUFlLENBQUMsS0FBSyxFQUFFLHVGQUF1RixDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsRUFBRSxjQUFjLENBQUMsSUFBSUEsT0FBTSxFQUFFLENBQUMsSUFBSUEsSUFBRyxFQUFFLENBQUMsRUFBRSxXQUFXO0FBQUEsSUFDN1csR0FDQSxLQUFLLElBQ0wsS0FBSyxJQUNMLEtBQUssT0FBSztBQUNSLFVBQUksRUFBRSxRQUFRLGtCQUFrQixHQUFHO0FBQ25DLFVBQUlBLEtBQUksRUFBRSxXQUFXLENBQUM7QUFDdEIsYUFBT0EsTUFBSyxNQUFNQSxNQUFLLEtBQUssSUFBSSxDQUFDLEtBQUs7QUFBQSxJQUN4QztBQUNGLGFBQVMsR0FBRyxHQUFHQSxJQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO0FBQ2xDLFdBQUssT0FBTyxHQUFHLEtBQUssY0FBY0EsSUFBRyxLQUFLLG9CQUFvQixHQUFHLEtBQUssZ0JBQWdCLEdBQUcsS0FBSyxZQUFZLEdBQUcsS0FBSyxnQkFBZ0IsR0FBRyxLQUFLLFNBQVMsR0FBRyxLQUFLLFdBQVcsR0FBRyxLQUFLLHVCQUF1QixDQUFDO0FBQUEsSUFDeE07QUFDQSxRQUFJLEtBQUssQ0FBQyxHQUFHQSxJQUFHLE1BQU07QUFDbEIsYUFBT0EsT0FBTSxJQUFJLENBQUFBLEdBQUUsVUFBVSxFQUFFLGdDQUFnQyxFQUFFLElBQUksd0JBQXdCQSxHQUFFLElBQUksRUFBRSxHQUFHLElBQUlBLEdBQUUsT0FBTyxDQUFDLEdBQUdBLEtBQUlBLEdBQUU7QUFDL0gsYUFBTztBQUFBLElBQ1QsR0FDQSxLQUFLLE9BQUs7QUFDUixVQUFJLE1BQU0sS0FBTSxRQUFPO0FBQ3ZCLFVBQUlBLEtBQUksT0FBTztBQUNmLGFBQU9BLE9BQU0sWUFBWUEsT0FBTSxXQUFXQSxPQUFNLGFBQWEsRUFBRSxTQUFTLElBQUksS0FBSztBQUFBLElBQ25GO0FBQ0YsYUFBUyxHQUFHLEdBQUdBLElBQUc7QUFDaEIsVUFBSUEsT0FBTSxLQUFNLFFBQU8sS0FBSyxlQUFlLEVBQUUsdUJBQXVCLEtBQUssSUFBSSxFQUFFLEdBQUc7QUFDbEYsTUFBQUEsR0FBRSxNQUFNLEVBQUUsZ0JBQWdCLEdBQUdBLEVBQUMsQ0FBQyxVQUFVLEtBQUssSUFBSSxFQUFFLEdBQUdBLEdBQUUsR0FBRyxPQUFPLEVBQUUsbURBQW1ELEtBQUssSUFBSSxFQUFFO0FBQ25JLFVBQUksSUFBSUEsR0FBRSxHQUFHLFFBQVEsaUJBQ25CLElBQUksR0FBR0EsR0FBRSxHQUFHLEtBQUssR0FBRyxLQUFLLGVBQWU7QUFDMUMsYUFBTztBQUFBLElBQ1Q7QUFDQSxhQUFTLEdBQUcsR0FBR0EsSUFBRztBQUNoQixVQUFJO0FBQ0osVUFBSUEsT0FBTSxLQUFNLFFBQU8sS0FBSyxlQUFlLEVBQUUsdUJBQXVCLEtBQUssSUFBSSxFQUFFLEdBQUcsS0FBSyxrQkFBa0IsSUFBSSxLQUFLLGVBQWUsR0FBRyxNQUFNLFFBQVEsRUFBRSxLQUFLLEtBQUssZUFBZSxDQUFDLEdBQUcsS0FBSztBQUN0TCxPQUFDLENBQUNBLE1BQUssQ0FBQ0EsR0FBRSxPQUFPLEVBQUUsZ0JBQWdCLEdBQUdBLEVBQUMsQ0FBQyxVQUFVLEtBQUssSUFBSSxFQUFFLEdBQUdBLEdBQUUsR0FBRyxPQUFPLEVBQUUsbURBQW1ELEtBQUssSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLFdBQVdBLEdBQUUsR0FBRyxRQUFRLFdBQVcsRUFBRSxtQ0FBbUNBLEdBQUUsR0FBRyxlQUFlQSxHQUFFLEdBQUcsYUFBYSxPQUFPQSxHQUFFLEdBQUcsUUFBUSxJQUFJLHNCQUFzQixLQUFLLElBQUksRUFBRTtBQUM1VCxVQUFJLElBQUlBLEdBQUUsR0FBRyxRQUFRO0FBQ3JCLFVBQUksSUFBSSxHQUFHQSxHQUFFLEdBQUcsS0FBSyxHQUFHLEtBQUssZUFBZSxHQUFHLEtBQUssZUFBZ0IsU0FBUUEsR0FBRSxHQUFHLGFBQWEsVUFBVSxFQUFFLGlEQUFpRCxHQUFHLEtBQUssZUFBZTtBQUFBLFFBQ2hMLEtBQUs7QUFDSCxVQUFBQSxHQUFFLEdBQUcsaUJBQWlCLE9BQU8sSUFBSUEsR0FBRSxHQUFHLFdBQVcsRUFBRSxtQ0FBbUNBLEdBQUUsR0FBRyxlQUFlQSxHQUFFLEdBQUcsYUFBYSxPQUFPQSxHQUFFLEdBQUcsUUFBUSxJQUFJLHNCQUFzQixLQUFLLElBQUksRUFBRTtBQUNyTDtBQUFBLFFBQ0YsS0FBSztBQUNILGNBQUlBLEdBQUUsR0FBRztBQUNUO0FBQUEsUUFDRixLQUFLO0FBQ0gsY0FBSUEsR0FBRSxHQUFHLGlCQUFpQixLQUFNLEtBQUlBLEdBQUUsR0FBRztBQUFBLGVBQWM7QUFDckQsZ0JBQUksSUFBSUEsR0FBRSxNQUFNO0FBQ2hCLGdCQUFJLEtBQUssU0FBUyxHQUFHLEVBQUUsU0FBUyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUMsR0FBRyxNQUFNLFFBQVEsRUFBRSxLQUFLLEtBQUssZUFBZSxDQUFDO0FBQUEsVUFDaEc7QUFDQTtBQUFBLFFBQ0Y7QUFDRSxZQUFFLDZCQUE2QjtBQUFBLE1BQ25DO0FBQ0EsYUFBTztBQUFBLElBQ1Q7QUFDQSxhQUFTLEdBQUcsR0FBR0EsSUFBRztBQUNoQixVQUFJQSxPQUFNLEtBQU0sUUFBTyxLQUFLLGVBQWUsRUFBRSx1QkFBdUIsS0FBSyxJQUFJLEVBQUUsR0FBRztBQUNsRixNQUFBQSxHQUFFLE1BQU0sRUFBRSxnQkFBZ0IsR0FBR0EsRUFBQyxDQUFDLFVBQVUsS0FBSyxJQUFJLEVBQUUsR0FBR0EsR0FBRSxHQUFHLE9BQU8sRUFBRSxtREFBbUQsS0FBSyxJQUFJLEVBQUUsR0FBR0EsR0FBRSxHQUFHLFFBQVEsV0FBVyxFQUFFLG1DQUFtQ0EsR0FBRSxHQUFHLFFBQVEsSUFBSSxzQkFBc0IsS0FBSyxJQUFJLEVBQUU7QUFDclAsVUFBSSxJQUFJQSxHQUFFLEdBQUcsUUFBUSxpQkFDbkIsSUFBSSxHQUFHQSxHQUFFLEdBQUcsS0FBSyxHQUFHLEtBQUssZUFBZTtBQUMxQyxhQUFPO0FBQUEsSUFDVDtBQUNBLFFBQUksS0FBSyxDQUFDLEdBQUdBLElBQUcsTUFBTTtBQUNsQixVQUFJQSxPQUFNLEVBQUcsUUFBTztBQUNwQixVQUFJLEVBQUUsY0FBYyxPQUFRLFFBQU87QUFDbkMsVUFBSSxJQUFJLEdBQUcsR0FBR0EsSUFBRyxFQUFFLFNBQVM7QUFDNUIsYUFBTyxNQUFNLE9BQU8sT0FBTyxFQUFFLFNBQVMsQ0FBQztBQUFBLElBQ3pDLEdBQ0EsS0FBSyxDQUFDLEdBQ04sS0FBSyxDQUFDLEdBQUdBLE9BQU07QUFDYixXQUFLQSxPQUFNLFVBQVUsRUFBRSw2QkFBNkIsR0FBRyxFQUFFLFlBQVksQ0FBQUEsS0FBSSxFQUFFLE9BQU9BLEVBQUMsR0FBRyxJQUFJLEVBQUU7QUFDNUYsYUFBT0E7QUFBQSxJQUNULEdBQ0EsS0FBSyxDQUFDLEdBQUdBLFFBQU9BLEtBQUksR0FBRyxHQUFHQSxFQUFDLEdBQUcsR0FBR0EsRUFBQyxJQUNsQyxLQUFLLENBQUMsR0FBR0EsT0FBTTtBQUNiLE9BQUMsQ0FBQ0EsR0FBRSxXQUFXLENBQUNBLEdBQUUsUUFBUSxHQUFHLDBDQUEwQztBQUN2RSxVQUFJLElBQUksQ0FBQyxDQUFDQSxHQUFFLGNBQ1YsSUFBSSxDQUFDLENBQUNBLEdBQUU7QUFDVixhQUFPLE1BQU0sS0FBSyxHQUFHLGtEQUFrRCxHQUFHQSxHQUFFLFFBQVE7QUFBQSxRQUNsRixPQUFPO0FBQUEsTUFDVCxHQUFHLEdBQUcsT0FBTyxPQUFPLEdBQUc7QUFBQSxRQUNyQixJQUFJO0FBQUEsVUFDRixPQUFPQTtBQUFBLFVBQ1AsVUFBVTtBQUFBLFFBQ1o7QUFBQSxNQUNGLENBQUMsQ0FBQztBQUFBLElBQ0o7QUFDRixhQUFTLEdBQUcsR0FBRztBQUNiLFVBQUlBLEtBQUksS0FBSyxXQUFXLENBQUM7QUFDekIsVUFBSSxDQUFDQSxHQUFHLFFBQU8sS0FBSyxXQUFXLENBQUMsR0FBRztBQUNuQyxVQUFJLElBQUksR0FBRyxLQUFLLGlCQUFpQkEsRUFBQztBQUNsQyxVQUFJLE1BQU0sUUFBUTtBQUNoQixZQUFJLEVBQUUsR0FBRyxNQUFNLFVBQVUsRUFBRyxRQUFPLEVBQUUsR0FBRyxNQUFNQSxJQUFHLEVBQUUsR0FBRyxXQUFXLEdBQUcsRUFBRSxNQUFNO0FBQzVFLFlBQUksSUFBSSxFQUFFLE1BQU07QUFDaEIsZUFBTyxLQUFLLFdBQVcsQ0FBQyxHQUFHO0FBQUEsTUFDN0I7QUFDQSxlQUFTLElBQUk7QUFDWCxlQUFPLEtBQUssaUJBQWlCLEdBQUcsS0FBSyxnQkFBZ0IsbUJBQW1CO0FBQUEsVUFDdEUsU0FBUyxLQUFLO0FBQUEsVUFDZCxLQUFLQTtBQUFBLFVBQ0wsY0FBYztBQUFBLFVBQ2QsVUFBVTtBQUFBLFFBQ1osQ0FBQyxJQUFJLEdBQUcsS0FBSyxnQkFBZ0IsbUJBQW1CO0FBQUEsVUFDOUMsU0FBUztBQUFBLFVBQ1QsS0FBSztBQUFBLFFBQ1AsQ0FBQztBQUFBLE1BQ0g7QUFDQSxVQUFJLElBQUksS0FBSyxnQkFBZ0IsY0FBY0EsRUFBQyxHQUMxQyxJQUFJLEdBQUcsQ0FBQztBQUNWLFVBQUksQ0FBQyxFQUFHLFFBQU8sRUFBRSxLQUFLLElBQUk7QUFDMUIsVUFBSTtBQUNKLFdBQUssVUFBVSxJQUFJLEVBQUUsbUJBQW1CLElBQUksRUFBRTtBQUM5QyxVQUFJLElBQUksR0FBR0EsSUFBRyxLQUFLLGlCQUFpQixFQUFFLGVBQWU7QUFDckQsYUFBTyxNQUFNLE9BQU8sRUFBRSxLQUFLLElBQUksSUFBSSxLQUFLLGlCQUFpQixHQUFHLEVBQUUsZ0JBQWdCLG1CQUFtQjtBQUFBLFFBQy9GLFNBQVM7QUFBQSxRQUNULEtBQUs7QUFBQSxRQUNMLGNBQWM7QUFBQSxRQUNkLFVBQVU7QUFBQSxNQUNaLENBQUMsSUFBSSxHQUFHLEVBQUUsZ0JBQWdCLG1CQUFtQjtBQUFBLFFBQzNDLFNBQVM7QUFBQSxRQUNULEtBQUs7QUFBQSxNQUNQLENBQUM7QUFBQSxJQUNIO0FBQ0EsUUFBSSxLQUFLLE1BQU07QUFDYixhQUFPLE9BQU8sR0FBRyxXQUFXO0FBQUEsUUFDMUIsV0FBVyxHQUFHO0FBQ1osaUJBQU8sS0FBSyxrQkFBa0IsSUFBSSxLQUFLLGNBQWMsQ0FBQyxJQUFJO0FBQUEsUUFDNUQ7QUFBQSxRQUNBLFdBQVcsR0FBRztBQUNaLGNBQUlBO0FBQ0osV0FBQ0EsS0FBSSxLQUFLLG1CQUFtQixRQUFRQSxPQUFNLFVBQVVBLEdBQUUsS0FBSyxNQUFNLENBQUM7QUFBQSxRQUNyRTtBQUFBLFFBQ0Esc0JBQXNCO0FBQUEsUUFDdEIsY0FBYztBQUFBLE1BQ2hCLENBQUM7QUFBQSxJQUNIO0FBQ0EsYUFBUyxHQUFHLEdBQUdBLElBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7QUFDM0MsV0FBSyxPQUFPLEdBQUcsS0FBSyxrQkFBa0JBLElBQUcsS0FBSyxjQUFjLEdBQUcsS0FBSyxVQUFVLEdBQUcsS0FBSyxpQkFBaUIsR0FBRyxLQUFLLGNBQWMsR0FBRyxLQUFLLGdCQUFnQixHQUFHLEtBQUssZ0JBQWdCLEdBQUcsS0FBSyxpQkFBaUIsR0FBRyxLQUFLLFdBQVcsR0FBRyxLQUFLLGdCQUFnQixHQUFHLENBQUMsS0FBS0EsR0FBRSxjQUFjLFNBQVMsS0FBSyxLQUFLLGFBQWEsSUFBSSxLQUFLLHFCQUFxQixTQUFTLEtBQUssYUFBYSxJQUFJLEtBQUsscUJBQXFCLFFBQVEsS0FBSyxhQUFhO0FBQUEsSUFDN1o7QUFDQSxRQUFJLEtBQUssQ0FBQyxHQUFHQSxJQUFHLE1BQU07QUFDbEIsUUFBRSxlQUFlLENBQUMsS0FBSyxHQUFHLHFDQUFxQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLGtCQUFrQixVQUFVLE1BQU0sU0FBUyxFQUFFLENBQUMsRUFBRSxjQUFjLENBQUMsSUFBSUEsTUFBSyxFQUFFLENBQUMsSUFBSUEsSUFBRyxFQUFFLENBQUMsRUFBRSxXQUFXO0FBQUEsSUFDM0ssR0FDQSxJQUFJLENBQUMsR0FDTCxLQUFLLENBQUMsR0FBR0EsSUFBRyxNQUFNO0FBQ2hCLFVBQUksRUFBRSxRQUFRLE1BQU0sR0FBRztBQUN2QixVQUFJLElBQUksRUFBRSxDQUFDO0FBQ1gsYUFBTyxFQUFFQSxJQUFHLEdBQUcsQ0FBQztBQUFBLElBQ2xCLEdBQ0EsS0FBSyxDQUFDLEdBQ04sSUFBSSxPQUFLO0FBQ1AsVUFBSUEsS0FBSSxHQUFHLENBQUM7QUFDWixhQUFPQSxPQUFNLEdBQUcsQ0FBQyxJQUFJQSxLQUFJLEdBQUcsSUFBSSxDQUFDLElBQUlBO0FBQUEsSUFDdkMsR0FDQSxLQUFLLFNBQVUsR0FBR0EsSUFBRztBQUNuQixVQUFJLElBQUksVUFBVSxTQUFTLEtBQUssVUFBVSxDQUFDLE1BQU0sU0FBUyxVQUFVLENBQUMsSUFBSSxDQUFDO0FBQzFFLFVBQUksRUFBRSxTQUFTLEdBQUcsRUFBRyxRQUFPLEdBQUcsR0FBR0EsSUFBRyxDQUFDO0FBQ3RDLFVBQUksSUFBSSxFQUFFQSxFQUFDLEdBQ1QsSUFBSSxFQUFFLEdBQUcsQ0FBQztBQUNaLGFBQU87QUFBQSxJQUNULEdBQ0EsS0FBSyxTQUFVLEdBQUdBLElBQUc7QUFDbkIsVUFBSSxJQUFJLFVBQVUsU0FBUyxLQUFLLFVBQVUsQ0FBQyxNQUFNLFNBQVMsVUFBVSxDQUFDLElBQUk7QUFDekUsYUFBTyxXQUFZO0FBQ2pCLGlCQUFTLElBQUksVUFBVSxRQUFRLElBQUksSUFBSSxNQUFNLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUssR0FBRSxDQUFDLElBQUksVUFBVSxDQUFDO0FBQ3RGLGVBQU8sR0FBRyxHQUFHQSxJQUFHLEdBQUcsQ0FBQztBQUFBLE1BQ3RCO0FBQUEsSUFDRixHQUNBLElBQUksU0FBVSxHQUFHQSxJQUFHO0FBQ2xCLFVBQUksRUFBRSxDQUFDO0FBQ1AsZUFBUyxJQUFJO0FBQ1gsWUFBSSxFQUFFLFNBQVMsR0FBRyxFQUFHLFFBQU8sR0FBRyxHQUFHQSxFQUFDO0FBQ25DLFlBQUksSUFBSSxFQUFFQSxFQUFDO0FBQ1gsZUFBTztBQUFBLE1BQ1Q7QUFDQSxVQUFJLElBQUksRUFBRTtBQUNWLGFBQU8sT0FBTyxLQUFLLGNBQWMsRUFBRSwyQ0FBMkMsQ0FBQyxLQUFLQSxFQUFDLEVBQUUsR0FBRztBQUFBLElBQzVGO0FBQUEsSUFDRixNQUFNLFdBQVcsTUFBTTtBQUFBLElBQUM7QUFDeEIsUUFBSSxLQUFLLE9BQUs7QUFDVixVQUFJQSxLQUFJLEdBQUcsQ0FBQyxHQUNWLElBQUksRUFBRUEsRUFBQztBQUNULGFBQU8sRUFBRUEsRUFBQyxHQUFHO0FBQUEsSUFDZixHQUNBLEtBQUssQ0FBQyxHQUFHQSxPQUFNO0FBQ2IsVUFBSSxJQUFJLENBQUMsR0FDUCxJQUFJLENBQUM7QUFDUCxlQUFTLEVBQUUsR0FBRztBQUNaLFlBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHO0FBQ2xCLGNBQUksR0FBRyxDQUFDLEdBQUc7QUFDVCxlQUFHLENBQUMsRUFBRSxRQUFRLENBQUM7QUFDZjtBQUFBLFVBQ0Y7QUFDQSxZQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJO0FBQUEsUUFDcEI7QUFBQSxNQUNGO0FBQ0EsWUFBTUEsR0FBRSxRQUFRLENBQUMsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFBQSxJQUM5RCxHQUNBLEtBQUssQ0FBQyxHQUFHQSxJQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsTUFBTTtBQUM5QyxVQUFJLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxNQUFNLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxNQUFNLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsR0FBRyxDQUFDO0FBQ3pFLFVBQUksSUFBSSxHQUFHLENBQUM7QUFDWixTQUFHLEdBQUcsV0FBWTtBQUNoQixXQUFHLG9CQUFvQixDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQztBQUFBLE1BQ3RELENBQUMsR0FBRyxFQUFFLENBQUMsR0FBR0EsSUFBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBSztBQUNsQyxZQUFJLEVBQUUsQ0FBQztBQUNQLFlBQUksR0FBRztBQUNQLGFBQUssSUFBSSxFQUFFLGlCQUFpQixJQUFJLEVBQUUscUJBQXFCLElBQUksR0FBRztBQUM5RCxZQUFJLElBQUksR0FBRyxHQUFHLFdBQVk7QUFDdEIsY0FBSSxPQUFPLGVBQWUsSUFBSSxNQUFNLEVBQUcsT0FBTSxJQUFJLEdBQUcsMEJBQTBCLENBQUMsRUFBRTtBQUNqRixjQUFJLEVBQUUscUJBQXFCLE9BQVEsT0FBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLGdDQUFnQztBQUNwRixtQkFBUyxLQUFLLFVBQVUsUUFBUSxLQUFLLElBQUksTUFBTSxFQUFFLEdBQUcsS0FBSyxHQUFHLEtBQUssSUFBSSxLQUFNLElBQUcsRUFBRSxJQUFJLFVBQVUsRUFBRTtBQUNoRyxjQUFJLEtBQUssRUFBRSxpQkFBaUIsR0FBRyxNQUFNO0FBQ3JDLGNBQUksT0FBTyxPQUFRLE9BQU0sSUFBSSxHQUFHLDJCQUEyQixDQUFDLHVDQUF1QyxHQUFHLE1BQU0saUJBQWlCLE9BQU8sS0FBSyxFQUFFLGdCQUFnQixFQUFFLFNBQVMsQ0FBQyx1QkFBdUI7QUFDOUwsaUJBQU8sR0FBRyxNQUFNLE1BQU0sRUFBRTtBQUFBLFFBQzFCLENBQUMsR0FDRCxJQUFJLE9BQU8sT0FBTyxHQUFHO0FBQUEsVUFDbkIsYUFBYTtBQUFBLFlBQ1gsT0FBTztBQUFBLFVBQ1Q7QUFBQSxRQUNGLENBQUM7QUFDSCxVQUFFLFlBQVk7QUFDZCxZQUFJLElBQUksSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNyQyxZQUFJLEVBQUUsV0FBVztBQUNmLGNBQUksR0FBRztBQUNQLFdBQUMsTUFBTSxJQUFJLEVBQUUsV0FBVyxzQkFBc0IsUUFBUSxPQUFPLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsVUFBVSxpQkFBaUIsS0FBSyxDQUFDO0FBQUEsUUFDdkk7QUFDQSxZQUFJLEtBQUssSUFBSSxHQUFHLEdBQUcsR0FBRyxNQUFJLE9BQUksS0FBRSxHQUM5QixLQUFLLElBQUksR0FBRyxJQUFJLEtBQUssR0FBRyxPQUFJLE9BQUksS0FBRSxHQUNsQyxLQUFLLElBQUksR0FBRyxJQUFJLFdBQVcsR0FBRyxPQUFJLE1BQUksS0FBRTtBQUMxQyxlQUFPLEdBQUcsQ0FBQyxJQUFJO0FBQUEsVUFDYixhQUFhO0FBQUEsVUFDYixrQkFBa0I7QUFBQSxRQUNwQixHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRTtBQUFBLE1BQzFCLENBQUM7QUFBQSxJQUNILEdBQ0EsS0FBSyxDQUFDLEdBQUdBLE9BQU07QUFDYixlQUFTLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSyxHQUFFLEtBQUssRUFBRUEsS0FBSSxJQUFJLEtBQUssQ0FBQyxDQUFDO0FBQzVELGFBQU87QUFBQSxJQUNUO0FBQ0YsYUFBUyxHQUFHLEdBQUc7QUFDYixlQUFTQSxLQUFJLEdBQUdBLEtBQUksRUFBRSxRQUFRLEVBQUVBLEdBQUcsS0FBSSxFQUFFQSxFQUFDLE1BQU0sUUFBUSxFQUFFQSxFQUFDLEVBQUUsdUJBQXVCLE9BQVEsUUFBTztBQUNuRyxhQUFPO0FBQUEsSUFDVDtBQUNBLGFBQVMsR0FBRyxHQUFHQSxJQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7QUFDNUIsVUFBSSxJQUFJQSxHQUFFO0FBQ1YsVUFBSSxLQUFLLEVBQUUsZ0ZBQWdGO0FBQzNGLFVBQUksSUFBSUEsR0FBRSxDQUFDLE1BQU0sUUFBUSxNQUFNLE1BQzdCLElBQUksR0FBR0EsRUFBQyxHQUNSLElBQUksQ0FBQ0EsR0FBRSxDQUFDLEVBQUUsUUFDVixJQUFJLElBQUksR0FDUixJQUFJLElBQUksTUFBTSxDQUFDLEdBQ2YsSUFBSSxDQUFDLEdBQ0wsSUFBSSxDQUFDLEdBQ0wsSUFBSSxXQUFZO0FBQ2QsVUFBRSxTQUFTO0FBQ1gsWUFBSTtBQUNKLFVBQUUsU0FBUyxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxHQUFHLE1BQU0sSUFBSUEsR0FBRSxDQUFDLEVBQUUsV0FBVyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSTtBQUMzRSxpQkFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsRUFBRyxHQUFFLENBQUMsSUFBSUEsR0FBRSxJQUFJLENBQUMsRUFBRSxXQUFXLEdBQUcsSUFBSSxLQUFLLFVBQVUsVUFBVSxJQUFJLFNBQVMsVUFBVSxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDOUgsWUFBSSxJQUFJLEVBQUUsR0FBRyxDQUFDO0FBQ2QsaUJBQVMsRUFBRSxHQUFHO0FBQ1osY0FBSSxFQUFHLElBQUcsQ0FBQztBQUFBLGNBQU8sVUFBUyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUlBLEdBQUUsUUFBUSxLQUFLO0FBQzNELGdCQUFJLEtBQUssTUFBTSxJQUFJLElBQUksRUFBRSxJQUFJLENBQUM7QUFDOUIsWUFBQUEsR0FBRSxDQUFDLEVBQUUsdUJBQXVCLFFBQVFBLEdBQUUsQ0FBQyxFQUFFLG1CQUFtQixFQUFFO0FBQUEsVUFDaEU7QUFDQSxjQUFJLEVBQUcsUUFBT0EsR0FBRSxDQUFDLEVBQUUsYUFBYSxDQUFDO0FBQUEsUUFDbkM7QUFDQSxlQUFPLEVBQUUsQ0FBQztBQUFBLE1BQ1o7QUFDRixhQUFPLEdBQUcsR0FBRyxDQUFDO0FBQUEsSUFDaEI7QUFDQSxRQUFJLEtBQUssQ0FBQyxHQUFHQSxJQUFHLEdBQUcsR0FBRyxHQUFHLE1BQU07QUFDM0IsVUFBSSxJQUFJLEdBQUdBLElBQUcsQ0FBQztBQUNmLFVBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxPQUFLO0FBQzNCLFlBQUksRUFBRSxDQUFDO0FBQ1AsWUFBSSxJQUFJLGVBQWUsRUFBRSxJQUFJO0FBQzdCLFlBQUksRUFBRSxnQkFBZ0IscUJBQXFCLFdBQVcsRUFBRSxnQkFBZ0IsbUJBQW1CLENBQUMsSUFBSSxFQUFFLGdCQUFnQixpQkFBaUJBLEtBQUksQ0FBQyxNQUFNLE9BQVEsT0FBTSxJQUFJLEdBQUcsOEVBQThFQSxLQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxxR0FBcUc7QUFDalgsZUFBTyxFQUFFLGdCQUFnQixpQkFBaUJBLEtBQUksQ0FBQyxJQUFJLE1BQU07QUFDdkQsYUFBRyxvQkFBb0IsRUFBRSxJQUFJLHlCQUF5QixDQUFDO0FBQUEsUUFDekQsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLFFBQU0sRUFBRSxPQUFPLEdBQUcsR0FBRyxJQUFJLEdBQUcsRUFBRSxnQkFBZ0IsaUJBQWlCQSxLQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUM7QUFBQSxNQUNuSCxDQUFDO0FBQUEsSUFDSCxHQUNBLEtBQUssT0FBSztBQUNSLFVBQUksRUFBRSxLQUFLO0FBQ1gsWUFBTUEsS0FBSSxFQUFFLFFBQVEsR0FBRztBQUN2QixhQUFPQSxPQUFNLEtBQUssSUFBSSxFQUFFLE1BQU0sR0FBR0EsRUFBQztBQUFBLElBQ3BDLEdBQ0EsS0FBSyxDQUFDLEdBQUdBLElBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxNQUFNO0FBQ3JDLFVBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUNmLE1BQUFBLEtBQUksRUFBRUEsRUFBQyxHQUFHQSxLQUFJLEdBQUdBLEVBQUMsR0FBRyxJQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsT0FBSztBQUNoRCxZQUFJLEVBQUUsQ0FBQztBQUNQLFlBQUksSUFBSSxHQUFHLEVBQUUsSUFBSSxJQUFJQSxFQUFDO0FBQ3RCLFFBQUFBLEdBQUUsV0FBVyxJQUFJLE1BQU1BLEtBQUksT0FBT0EsR0FBRSxVQUFVLENBQUMsQ0FBQyxJQUFJLEtBQUssRUFBRSxnQkFBZ0IscUJBQXFCLEtBQUtBLEVBQUM7QUFDdEcsaUJBQVMsSUFBSTtBQUNYLGFBQUcsZUFBZSxDQUFDLHlCQUF5QixDQUFDO0FBQUEsUUFDL0M7QUFDQSxZQUFJLElBQUksRUFBRSxnQkFBZ0IsbUJBQ3hCLElBQUksRUFBRUEsRUFBQztBQUNULGVBQU8sTUFBTSxVQUFVLEVBQUUsa0JBQWtCLFVBQVUsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLGFBQWEsSUFBSSxLQUFLLEVBQUUsV0FBVyxJQUFJLEdBQUcsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFQSxFQUFDLElBQUksTUFBTSxHQUFHLEdBQUdBLElBQUcsQ0FBQyxHQUFHLEVBQUVBLEVBQUMsRUFBRSxjQUFjLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLEdBQUcsR0FBRyxPQUFLO0FBQ3ZOLGNBQUksSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUN4QixpQkFBTyxFQUFFQSxFQUFDLEVBQUUsa0JBQWtCLFVBQVUsRUFBRSxXQUFXLElBQUksR0FBRyxFQUFFQSxFQUFDLElBQUksS0FBSyxFQUFFQSxFQUFDLEVBQUUsY0FBYyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUM7QUFBQSxRQUMxRyxDQUFDLEdBQUcsQ0FBQztBQUFBLE1BQ1AsQ0FBQztBQUFBLElBQ0gsR0FDQSxLQUFLLENBQUMsR0FDTixJQUFJLENBQUMsR0FBRyxHQUFFLEVBQUUsR0FBRyxNQUFNLEdBQUcsTUFBSSxHQUFHLE9BQUksQ0FBQyxHQUNwQyxLQUFLLE9BQUs7QUFDUixVQUFJLEtBQUssRUFBRSxFQUFFLElBQUksQ0FBQyxNQUFNLE1BQU0sRUFBRSxDQUFDLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQztBQUFBLElBQ3hELEdBQ0EsSUFBSTtBQUFBLE1BQ0YsU0FBUyxRQUFNLEtBQUssRUFBRSxvQ0FBb0MsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQUEsTUFDbkUsVUFBVSxPQUFLO0FBQ2IsZ0JBQVEsR0FBRztBQUFBLFVBQ1QsS0FBSztBQUNILG1CQUFPO0FBQUEsVUFDVCxLQUFLO0FBQ0gsbUJBQU87QUFBQSxVQUNULEtBQUs7QUFDSCxtQkFBTztBQUFBLFVBQ1QsS0FBSztBQUNILG1CQUFPO0FBQUEsVUFDVCxTQUNFO0FBQ0Usa0JBQU1BLEtBQUksR0FBRyxJQUFJLEtBQUssRUFBRTtBQUN4QixtQkFBTyxFQUFFQSxFQUFDLElBQUksR0FBRyxFQUFFQSxLQUFJLENBQUMsSUFBSSxHQUFHQTtBQUFBLFVBQ2pDO0FBQUEsUUFDSjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLEdBQ0EsS0FBSztBQUFBLE1BQ0gsTUFBTTtBQUFBLE1BQ04sY0FBYyxPQUFLO0FBQ2pCLFlBQUlBLEtBQUksRUFBRSxRQUFRLENBQUM7QUFDbkIsZUFBTyxHQUFHLENBQUMsR0FBR0E7QUFBQSxNQUNoQjtBQUFBLE1BQ0EsWUFBWSxDQUFDLEdBQUdBLE9BQU0sRUFBRSxTQUFTQSxFQUFDO0FBQUEsTUFDbEMsc0JBQXNCO0FBQUEsTUFDdEIsb0JBQW9CO0FBQUEsSUFDdEIsR0FDQSxLQUFLLE9BQUssRUFBRSxHQUFHLEVBQUUsR0FDakIsS0FBSyxDQUFDLEdBQUdBLE9BQU07QUFDYixjQUFRQSxJQUFHO0FBQUEsUUFDVCxLQUFLO0FBQ0gsaUJBQU8sU0FBVSxHQUFHO0FBQ2xCLG1CQUFPLEtBQUssYUFBYSxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQUEsVUFDckM7QUFBQSxRQUNGLEtBQUs7QUFDSCxpQkFBTyxTQUFVLEdBQUc7QUFDbEIsbUJBQU8sS0FBSyxhQUFhLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFBQSxVQUNyQztBQUFBLFFBQ0Y7QUFDRSxnQkFBTSxJQUFJLFVBQVUsd0JBQXdCQSxFQUFDLE1BQU0sQ0FBQyxFQUFFO0FBQUEsTUFDMUQ7QUFBQSxJQUNGLEdBQ0EsS0FBSyxDQUFDLEdBQUdBLElBQUcsTUFBTTtBQUNoQixNQUFBQSxLQUFJLEVBQUVBLEVBQUMsR0FBRyxFQUFFLEdBQUc7QUFBQSxRQUNiLE1BQU1BO0FBQUEsUUFDTixjQUFjLE9BQUs7QUFBQSxRQUNuQixZQUFZLENBQUMsR0FBRyxNQUFNO0FBQUEsUUFDdEIsc0JBQXNCLEdBQUdBLElBQUcsQ0FBQztBQUFBLFFBQzdCLG9CQUFvQjtBQUFBLE1BQ3RCLENBQUM7QUFBQSxJQUNILEdBQ0EsS0FBSyxDQUFDLEdBQUdBLElBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLE1BQU07QUFDL0IsVUFBSSxJQUFJLEdBQUdBLElBQUcsQ0FBQztBQUNmLFVBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLFdBQVk7QUFDbEQsV0FBRyxlQUFlLENBQUMseUJBQXlCLENBQUM7QUFBQSxNQUMvQyxHQUFHQSxLQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLE9BQUs7QUFDdkIsWUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUN0QyxlQUFPLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxNQUFNLEdBQUcsQ0FBQyxHQUFHQSxLQUFJLENBQUMsR0FBRyxDQUFDO0FBQUEsTUFDOUMsQ0FBQztBQUFBLElBQ0gsR0FDQSxLQUFLLENBQUMsR0FBR0EsSUFBRyxNQUFNO0FBQ2hCLGNBQVFBLElBQUc7QUFBQSxRQUNULEtBQUs7QUFDSCxpQkFBTyxJQUFJLE9BQUssRUFBRSxDQUFDLElBQUksT0FBSyxFQUFFLENBQUM7QUFBQSxRQUNqQyxLQUFLO0FBQ0gsaUJBQU8sSUFBSSxPQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksT0FBSyxHQUFHLEtBQUssQ0FBQztBQUFBLFFBQzdDLEtBQUs7QUFDSCxpQkFBTyxJQUFJLE9BQUssR0FBRyxLQUFLLENBQUMsSUFBSSxPQUFLLEVBQUUsS0FBSyxDQUFDO0FBQUEsUUFDNUM7QUFDRSxnQkFBTSxJQUFJLFVBQVUsMEJBQTBCQSxFQUFDLE1BQU0sQ0FBQyxFQUFFO0FBQUEsTUFDNUQ7QUFBQSxJQUNGLEdBQ0EsS0FBSyxDQUFDLEdBQUdBLElBQUcsR0FBRyxHQUFHLE1BQU07QUFDdEIsTUFBQUEsS0FBSSxFQUFFQSxFQUFDO0FBQ1AsWUFBTSxJQUFJLE1BQU07QUFDaEIsVUFBSSxJQUFJLE9BQUs7QUFDYixVQUFJLEdBQUc7QUFDTCxZQUFJLElBQUksS0FBSyxJQUFJO0FBQ2pCLFlBQUksT0FBSyxLQUFLLE1BQU0sR0FBRyxJQUFJLEVBQUUsQ0FBQztBQUFBLE1BQ2hDO0FBQ0EsUUFBRSxHQUFHO0FBQUEsUUFDSCxNQUFNQTtBQUFBLFFBQ04sY0FBYztBQUFBLFFBQ2QsWUFBWSxDQUFDLEdBQUcsTUFBTTtBQUFBLFFBQ3RCLHNCQUFzQixHQUFHQSxJQUFHLEdBQUcsTUFBTSxDQUFDO0FBQUEsUUFDdEMsb0JBQW9CO0FBQUEsTUFDdEIsQ0FBQztBQUFBLElBQ0gsR0FDQSxLQUFLLENBQUMsR0FBR0EsSUFBRyxNQUFNO0FBQ2hCLFVBQUksSUFBSSxDQUFDLFdBQVcsWUFBWSxZQUFZLGFBQWEsWUFBWSxhQUFhLGNBQWMsWUFBWSxHQUMxRyxJQUFJLEVBQUVBLEVBQUM7QUFDVCxlQUFTLEVBQUUsR0FBRztBQUNaLFlBQUksSUFBSSxFQUFFLEtBQUssQ0FBQyxHQUNkLElBQUksRUFBRSxJQUFJLEtBQUssQ0FBQztBQUNsQixlQUFPLElBQUksRUFBRSxFQUFFLFFBQVEsR0FBRyxDQUFDO0FBQUEsTUFDN0I7QUFDQSxVQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRztBQUFBLFFBQ2IsTUFBTTtBQUFBLFFBQ04sY0FBYztBQUFBLFFBQ2Qsc0JBQXNCO0FBQUEsTUFDeEIsR0FBRztBQUFBLFFBQ0QsOEJBQThCO0FBQUEsTUFDaEMsQ0FBQztBQUFBLElBQ0gsR0FDQSxLQUFLLE9BQU8sT0FBTztBQUFBLE1BQ2pCLFVBQVU7QUFBQSxJQUNaLEdBQUcsRUFBRSxHQUNMLEtBQUssQ0FBQyxHQUFHQSxPQUFNO0FBQ2IsUUFBRSxHQUFHLEVBQUU7QUFBQSxJQUNULEdBQ0EsS0FBSyxDQUFDLEdBQUdBLElBQUcsR0FBRyxNQUFNO0FBQ25CLFVBQUksRUFBRSxJQUFJLEdBQUksUUFBTztBQUNyQixlQUFTLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEVBQUUsUUFBUSxFQUFFLEdBQUc7QUFDdkQsWUFBSSxJQUFJLEVBQUUsWUFBWSxDQUFDO0FBQ3ZCLFlBQUksS0FBSyxLQUFLO0FBQ1osY0FBSSxLQUFLLEVBQUc7QUFDWixVQUFBQSxHQUFFLEdBQUcsSUFBSTtBQUFBLFFBQ1gsV0FBVyxLQUFLLE1BQU07QUFDcEIsY0FBSSxJQUFJLEtBQUssRUFBRztBQUNoQixVQUFBQSxHQUFFLEdBQUcsSUFBSSxNQUFNLEtBQUssR0FBR0EsR0FBRSxHQUFHLElBQUksTUFBTSxJQUFJO0FBQUEsUUFDNUMsV0FBVyxLQUFLLE9BQU87QUFDckIsY0FBSSxJQUFJLEtBQUssRUFBRztBQUNoQixVQUFBQSxHQUFFLEdBQUcsSUFBSSxNQUFNLEtBQUssSUFBSUEsR0FBRSxHQUFHLElBQUksTUFBTSxLQUFLLElBQUksSUFBSUEsR0FBRSxHQUFHLElBQUksTUFBTSxJQUFJO0FBQUEsUUFDekUsT0FBTztBQUNMLGNBQUksSUFBSSxLQUFLLEVBQUc7QUFDaEIsVUFBQUEsR0FBRSxHQUFHLElBQUksTUFBTSxLQUFLLElBQUlBLEdBQUUsR0FBRyxJQUFJLE1BQU0sS0FBSyxLQUFLLElBQUlBLEdBQUUsR0FBRyxJQUFJLE1BQU0sS0FBSyxJQUFJLElBQUlBLEdBQUUsR0FBRyxJQUFJLE1BQU0sSUFBSSxJQUFJO0FBQUEsUUFDMUc7QUFBQSxNQUNGO0FBQ0EsYUFBT0EsR0FBRSxDQUFDLElBQUksR0FBRyxJQUFJO0FBQUEsSUFDdkIsR0FDQSxLQUFLLENBQUMsR0FBR0EsSUFBRyxNQUFNLEdBQUcsR0FBRyxHQUFHQSxJQUFHLENBQUMsR0FDL0IsS0FBSyxPQUFLO0FBQ1IsZUFBU0EsS0FBSSxHQUFHLElBQUksR0FBRyxJQUFJLEVBQUUsUUFBUSxFQUFFLEdBQUc7QUFDeEMsWUFBSSxJQUFJLEVBQUUsV0FBVyxDQUFDO0FBQ3RCLGFBQUssTUFBTUEsT0FBTSxLQUFLLE9BQU9BLE1BQUssSUFBSSxLQUFLLFNBQVMsS0FBSyxTQUFTQSxNQUFLLEdBQUcsRUFBRSxLQUFLQSxNQUFLO0FBQUEsTUFDeEY7QUFDQSxhQUFPQTtBQUFBLElBQ1QsR0FDQSxLQUFLLFdBQVcsZUFBZSxJQUFJLFlBQVksR0FDL0MsS0FBSyxDQUFDLEdBQUdBLElBQUcsR0FBRyxNQUFNO0FBQ25CLFVBQUksSUFBSUEsS0FBSTtBQUNaLFVBQUksRUFBRyxRQUFPO0FBQ2QsYUFBTyxFQUFFQSxFQUFDLEtBQUssRUFBRUEsTUFBSyxLQUFLLEdBQUVBO0FBQzdCLGFBQU9BO0FBQUEsSUFDVCxHQUNBLEtBQUssU0FBVSxHQUFHO0FBQ2hCLFVBQUlBLEtBQUksVUFBVSxTQUFTLEtBQUssVUFBVSxDQUFDLE1BQU0sU0FBUyxVQUFVLENBQUMsSUFBSSxHQUN2RSxJQUFJLFVBQVUsU0FBUyxJQUFJLFVBQVUsQ0FBQyxJQUFJLFFBQzFDLElBQUksVUFBVSxTQUFTLElBQUksVUFBVSxDQUFDLElBQUk7QUFDNUMsVUFBSSxJQUFJLEdBQUcsR0FBR0EsSUFBRyxHQUFHLENBQUM7QUFDckIsVUFBSSxJQUFJQSxLQUFJLE1BQU0sRUFBRSxVQUFVLEdBQUksUUFBTyxHQUFHLE9BQU8sRUFBRSxTQUFTQSxJQUFHLENBQUMsQ0FBQztBQUNuRSxlQUFTLElBQUksSUFBSUEsS0FBSSxLQUFJO0FBQ3ZCLFlBQUksSUFBSSxFQUFFQSxJQUFHO0FBQ2IsWUFBSSxFQUFFLElBQUksTUFBTTtBQUNkLGVBQUssT0FBTyxhQUFhLENBQUM7QUFDMUI7QUFBQSxRQUNGO0FBQ0EsWUFBSSxJQUFJLEVBQUVBLElBQUcsSUFBSTtBQUNqQixhQUFLLElBQUksUUFBUSxLQUFLO0FBQ3BCLGVBQUssT0FBTyxjQUFjLElBQUksT0FBTyxJQUFJLENBQUM7QUFDMUM7QUFBQSxRQUNGO0FBQ0EsWUFBSSxJQUFJLEVBQUVBLElBQUcsSUFBSTtBQUNqQixhQUFLLElBQUksUUFBUSxNQUFNLEtBQUssSUFBSSxPQUFPLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxJQUFJLE1BQU0sS0FBSyxLQUFLLEtBQUssS0FBSyxJQUFJLEVBQUVBLElBQUcsSUFBSSxJQUFJLElBQUksTUFBTyxNQUFLLE9BQU8sYUFBYSxDQUFDO0FBQUEsYUFBTztBQUN2SixjQUFJLElBQUksSUFBSTtBQUNaLGVBQUssT0FBTyxhQUFhLFFBQVEsS0FBSyxJQUFJLFFBQVEsSUFBSSxJQUFJO0FBQUEsUUFDNUQ7QUFBQSxNQUNGO0FBQ0EsYUFBTztBQUFBLElBQ1QsR0FDQSxLQUFLLENBQUMsR0FBR0EsSUFBRyxNQUFNLElBQUksR0FBRyxHQUFHLEdBQUdBLElBQUcsQ0FBQyxJQUFJLElBQ3ZDLEtBQUssQ0FBQyxHQUFHQSxPQUFNO0FBQ2IsTUFBQUEsS0FBSSxFQUFFQSxFQUFDLEdBQUcsRUFBRSxHQUFHO0FBQUEsUUFDYixNQUFNQTtBQUFBLFFBQ04sYUFBYSxHQUFHO0FBQ2QsY0FBSSxJQUFJLEVBQUUsS0FBSyxDQUFDLEdBQ2QsSUFBSSxJQUFJLEdBQ1I7QUFDRixpQkFBTyxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUUsR0FBRyxFQUFFLENBQUMsR0FBRztBQUFBLFFBQ2pDO0FBQUEsUUFDQSxXQUFXLEdBQUcsR0FBRztBQUNmLHVCQUFhLGdCQUFnQixJQUFJLElBQUksV0FBVyxDQUFDO0FBQ2pELGNBQUksR0FDRixJQUFJLE9BQU8sS0FBSztBQUNsQixlQUFLLFlBQVksT0FBTyxDQUFDLEtBQUssRUFBRSxxQkFBcUIsS0FBSyxFQUFFLHVDQUF1QyxHQUFHLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUU7QUFDNUgsY0FBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FDbEIsSUFBSSxJQUFJO0FBQ1YsaUJBQU8sRUFBRSxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEdBQUcsQ0FBQyxHQUFHLE1BQU0sUUFBUSxFQUFFLEtBQUssR0FBRyxDQUFDLEdBQUc7QUFBQSxRQUN2RjtBQUFBLFFBQ0Esc0JBQXNCO0FBQUEsUUFDdEIsbUJBQW1CLEdBQUc7QUFDcEIsWUFBRSxDQUFDO0FBQUEsUUFDTDtBQUFBLE1BQ0YsQ0FBQztBQUFBLElBQ0gsR0FDQSxLQUFLLFdBQVcsY0FBYyxJQUFJLFlBQVksVUFBVSxJQUFJLFFBQzVELEtBQUssQ0FBQyxHQUFHQSxJQUFHLE1BQU07QUFDaEIsVUFBSSxJQUFJLEtBQUssR0FDWCxJQUFJLEdBQUcsSUFBSSxHQUFHQSxLQUFJLEdBQUcsQ0FBQztBQUN4QixVQUFJLElBQUksSUFBSSxNQUFNLEdBQUksUUFBTyxHQUFHLE9BQU8sR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0FBQ3hELGVBQVMsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBRSxHQUFHO0FBQ2xDLFlBQUksSUFBSSxHQUFHLENBQUM7QUFDWixhQUFLLE9BQU8sYUFBYSxDQUFDO0FBQUEsTUFDNUI7QUFDQSxhQUFPO0FBQUEsSUFDVCxHQUNBLEtBQUssQ0FBQyxHQUFHQSxJQUFHLE1BQU07QUFDaEIsVUFBSSxLQUFLLFNBQVMsSUFBSSxhQUFhLElBQUksRUFBRyxRQUFPO0FBQ2pELFdBQUs7QUFDTCxlQUFTLElBQUlBLElBQUcsSUFBSSxJQUFJLEVBQUUsU0FBUyxJQUFJLElBQUksSUFBSSxFQUFFLFFBQVEsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLEdBQUc7QUFDMUUsWUFBSSxJQUFJLEVBQUUsV0FBVyxDQUFDO0FBQ3RCLFdBQUdBLE1BQUssQ0FBQyxJQUFJLEdBQUdBLE1BQUs7QUFBQSxNQUN2QjtBQUNBLGFBQU8sR0FBR0EsTUFBSyxDQUFDLElBQUksR0FBR0EsS0FBSTtBQUFBLElBQzdCLEdBQ0EsS0FBSyxPQUFLLEVBQUUsU0FBUyxHQUNyQixLQUFLLENBQUMsR0FBR0EsSUFBRyxNQUFNO0FBQ2hCLGVBQVMsSUFBSSxJQUFJLElBQUksS0FBSyxHQUFHLElBQUksR0FBRyxFQUFFLEtBQUtBLEtBQUksSUFBSSxLQUFLO0FBQ3RELFlBQUksSUFBSSxFQUFFLElBQUksQ0FBQztBQUNmLFlBQUksQ0FBQyxLQUFLLENBQUMsRUFBRztBQUNkLGFBQUssT0FBTyxjQUFjLENBQUM7QUFBQSxNQUM3QjtBQUNBLGFBQU87QUFBQSxJQUNULEdBQ0EsS0FBSyxDQUFDLEdBQUdBLElBQUcsTUFBTTtBQUNoQixVQUFJLEtBQUssU0FBUyxJQUFJLGFBQWEsSUFBSSxFQUFHLFFBQU87QUFDakQsZUFBUyxJQUFJQSxJQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRztBQUN2RCxZQUFJLElBQUksRUFBRSxZQUFZLENBQUM7QUFDdkIsWUFBSSxJQUFJLFNBQVMsS0FBSyxHQUFHQSxNQUFLLENBQUMsSUFBSSxHQUFHQSxNQUFLLEdBQUdBLEtBQUksSUFBSSxFQUFHO0FBQUEsTUFDM0Q7QUFDQSxhQUFPLEdBQUdBLE1BQUssQ0FBQyxJQUFJLEdBQUdBLEtBQUk7QUFBQSxJQUM3QixHQUNBLEtBQUssT0FBSztBQUNSLGVBQVNBLEtBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHO0FBQ3hDLFlBQUksSUFBSSxFQUFFLFlBQVksQ0FBQztBQUN2QixZQUFJLFNBQVMsS0FBS0EsTUFBSztBQUFBLE1BQ3pCO0FBQ0EsYUFBT0E7QUFBQSxJQUNULEdBQ0EsS0FBSyxDQUFDLEdBQUdBLElBQUcsTUFBTTtBQUNoQixVQUFJLEVBQUUsQ0FBQztBQUNQLFVBQUksR0FBRyxHQUFHO0FBQ1YsTUFBQUEsT0FBTSxLQUFLLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxPQUFPLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxLQUFLLEVBQUUsR0FBRztBQUFBLFFBQ2xFLE1BQU07QUFBQSxRQUNOLGNBQWMsT0FBSztBQUNqQixjQUFJLElBQUksRUFBRSxLQUFLLENBQUMsR0FDZCxJQUFJLEVBQUUsSUFBSSxHQUFHLElBQUlBLElBQUcsSUFBRTtBQUN4QixpQkFBTyxFQUFFLENBQUMsR0FBRztBQUFBLFFBQ2Y7QUFBQSxRQUNBLFlBQVksQ0FBQyxHQUFHLE1BQU07QUFDcEIsaUJBQU8sS0FBSyxZQUFZLEVBQUUsNkNBQTZDLENBQUMsRUFBRTtBQUMxRSxjQUFJLElBQUksRUFBRSxDQUFDLEdBQ1QsSUFBSSxHQUFHLElBQUksSUFBSUEsRUFBQztBQUNsQixpQkFBTyxFQUFFLEtBQUssQ0FBQyxJQUFJLElBQUlBLElBQUcsRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJQSxFQUFDLEdBQUcsTUFBTSxRQUFRLEVBQUUsS0FBSyxHQUFHLENBQUMsR0FBRztBQUFBLFFBQzVFO0FBQUEsUUFDQSxzQkFBc0I7QUFBQSxRQUN0QixtQkFBbUIsR0FBRztBQUNwQixZQUFFLENBQUM7QUFBQSxRQUNMO0FBQUEsTUFDRixDQUFDO0FBQUEsSUFDSCxHQUNBLEtBQUssQ0FBQyxHQUFHQSxJQUFHLEdBQUcsR0FBRyxHQUFHLE1BQU07QUFDekIsU0FBRyxDQUFDLElBQUk7QUFBQSxRQUNOLE1BQU0sRUFBRUEsRUFBQztBQUFBLFFBQ1QsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDO0FBQUEsUUFDdEIsZUFBZSxFQUFFLEdBQUcsQ0FBQztBQUFBLFFBQ3JCLFFBQVEsQ0FBQztBQUFBLE1BQ1g7QUFBQSxJQUNGLEdBQ0EsS0FBSyxDQUFDLEdBQUdBLElBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxNQUFNO0FBQ3JDLFNBQUcsQ0FBQyxFQUFFLE9BQU8sS0FBSztBQUFBLFFBQ2hCLFdBQVcsRUFBRUEsRUFBQztBQUFBLFFBQ2Qsa0JBQWtCO0FBQUEsUUFDbEIsUUFBUSxFQUFFLEdBQUcsQ0FBQztBQUFBLFFBQ2QsZUFBZTtBQUFBLFFBQ2Ysb0JBQW9CO0FBQUEsUUFDcEIsUUFBUSxFQUFFLEdBQUcsQ0FBQztBQUFBLFFBQ2QsZUFBZTtBQUFBLE1BQ2pCLENBQUM7QUFBQSxJQUNILEdBQ0EsS0FBSyxDQUFDLEdBQUdBLE9BQU07QUFDYixNQUFBQSxLQUFJLEVBQUVBLEVBQUMsR0FBRyxFQUFFLEdBQUc7QUFBQSxRQUNiLFFBQVE7QUFBQSxRQUNSLE1BQU1BO0FBQUEsUUFDTixjQUFjLE1BQU07QUFBQSxRQUFDO0FBQUEsUUFDckIsWUFBWSxDQUFDLEdBQUcsTUFBTTtBQUFBLFFBQUM7QUFBQSxNQUN6QixDQUFDO0FBQUEsSUFDSCxHQUNBLEtBQUssQ0FBQyxHQUNOLEtBQUssT0FBSztBQUNSLFVBQUlBLEtBQUksR0FBRztBQUNYLGFBQU8sR0FBRyxLQUFLLENBQUMsR0FBR0E7QUFBQSxJQUNyQixHQUNBLEtBQUssQ0FBQyxHQUFHQSxPQUFNO0FBQ2IsVUFBSSxJQUFJLEVBQUUsQ0FBQztBQUNYLGFBQU8sTUFBTSxVQUFVLEVBQUUsR0FBR0EsRUFBQyxxQkFBcUIsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHO0FBQUEsSUFDOUQsR0FDQSxLQUFLLENBQUMsR0FBR0EsT0FBTTtBQUNiLGVBQVMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBRSxFQUFHLEdBQUUsQ0FBQyxJQUFJLEdBQUcsRUFBRUEsS0FBSSxJQUFJLEtBQUssQ0FBQyxHQUFHLGFBQWEsQ0FBQyxFQUFFO0FBQzNGLGFBQU87QUFBQSxJQUNULEdBQ0EsS0FBSyxDQUFDLEdBQUdBLElBQUcsTUFBTTtBQUNoQixVQUFJLElBQUksQ0FBQyxHQUNQLElBQUksRUFBRSxHQUFHLENBQUM7QUFDWixhQUFPLEVBQUUsV0FBVyxFQUFFQSxNQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO0FBQUEsSUFDbEQsR0FDQSxLQUFLLENBQUMsR0FDTixLQUFLLE9BQUs7QUFDUixVQUFJQSxLQUFJLEdBQUcsQ0FBQztBQUNaLGFBQU9BLE9BQU0sU0FBUyxFQUFFLENBQUMsSUFBSUE7QUFBQSxJQUMvQixHQUNBLEtBQUssQ0FBQyxHQUFHQSxJQUFHLE1BQU07QUFDaEIsVUFBSSxJQUFJLEdBQ04sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBR0EsRUFBQyxHQUNuQixJQUFJLEVBQUUsV0FBVyxLQUFLLENBQUMsR0FDdkIsSUFBSSxFQUFFLElBQUksT0FBSyxFQUFFLHFCQUFxQixLQUFLLENBQUMsQ0FBQztBQUMvQztBQUNBLFVBQUksSUFBSSxJQUFJLE1BQU0sQ0FBQyxHQUNqQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsTUFBTTtBQUNsQixpQkFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLEVBQUcsR0FBRSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsS0FBSztBQUM1RCxZQUFJO0FBQ0osZ0JBQVEsR0FBRztBQUFBLFVBQ1QsS0FBSztBQUNILGdCQUFJLEVBQUUsUUFBUSxDQUFDLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUI7QUFBQSxVQUNGLEtBQUs7QUFDSCxnQkFBSSxRQUFRLFVBQVUsRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDO0FBQ3JDO0FBQUEsVUFDRixLQUFLO0FBQ0gsZ0JBQUksRUFBRSxDQUFDO0FBQ1A7QUFBQSxVQUNGLEtBQUs7QUFDSCxnQkFBSSxFQUFFLFFBQVEsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO0FBQzVCO0FBQUEsUUFDSjtBQUNBLGVBQU8sR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUFBLE1BQ25CLEdBQ0EsSUFBSSxpQkFBaUIsRUFBRSxJQUFJLE9BQUssRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUk7QUFDdkQsYUFBTyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFBQSxJQUNwQixHQUNBLEtBQUssT0FBSyxLQUFLLElBQUksR0FBRyxDQUFDLEdBQUcsRUFBRSxTQUFTLFdBQVcsQ0FBQyxDQUFDLEtBQUssRUFBRSxTQUFTLFVBQVUsR0FDNUUsS0FBSyxPQUFLO0FBQ1IsVUFBSSxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUs7QUFBQSxJQUN4QixHQUNBLEtBQUssQ0FBQyxHQUFHQSxJQUFHLEdBQUcsR0FBRyxNQUFNLEdBQUcsQ0FBQyxFQUFFQSxJQUFHLEdBQUcsR0FBRyxDQUFDLEdBQ3hDLEtBQUssT0FBSztBQUNSLFVBQUlBLEtBQUksRUFBRSxRQUFRLENBQUM7QUFDbkIsU0FBR0EsRUFBQyxHQUFHLEdBQUcsQ0FBQztBQUFBLElBQ2IsR0FDQSxLQUFLLENBQUMsR0FBR0EsSUFBRyxHQUFHLE1BQU07QUFDbkIsVUFBSSxLQUFvQixvQkFBSSxLQUFLLEdBQUcsWUFBWSxHQUM5QyxJQUFJLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUNwQixJQUFJLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUNwQixJQUFJLEVBQUUsa0JBQWtCLEdBQ3hCLElBQUksRUFBRSxrQkFBa0IsR0FDeEIsSUFBSSxLQUFLLElBQUksR0FBRyxDQUFDO0FBQ25CLFFBQUUsS0FBSyxDQUFDLElBQUksSUFBSSxJQUFJLEdBQUdBLE1BQUssQ0FBQyxJQUFJLEVBQUUsS0FBSztBQUN4QyxVQUFJLElBQUksT0FBSztBQUNULFlBQUksSUFBSSxLQUFLLElBQUksTUFBTSxLQUNyQixJQUFJLEtBQUssSUFBSSxDQUFDLEdBQ2QsSUFBSSxPQUFPLEtBQUssTUFBTSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsR0FBRyxHQUFHLEdBQzlDLElBQUksT0FBTyxJQUFJLEVBQUUsRUFBRSxTQUFTLEdBQUcsR0FBRztBQUNwQyxlQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO0FBQUEsTUFDeEIsR0FDQSxJQUFJLEVBQUUsQ0FBQyxHQUNQLElBQUksRUFBRSxDQUFDO0FBQ1QsVUFBSSxLQUFLLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLE1BQU0sR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUU7QUFBQSxJQUNuRSxHQUNBLEtBQUssTUFBTSxZQUNYLEtBQUssQ0FBQyxHQUFHQSxPQUFNLEtBQUssS0FBSyxJQUFJQSxFQUFDLElBQUlBLElBQ2xDLEtBQUssT0FBSztBQUNSLFVBQUlBLEtBQUksR0FBRyxPQUFPLFlBQ2hCLEtBQUssSUFBSUEsS0FBSSxTQUFTLFFBQVE7QUFDaEMsVUFBSTtBQUNGLGVBQU8sR0FBRyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUc7QUFBQSxNQUMzQixRQUFRO0FBQUEsTUFBQztBQUFBLElBQ1gsR0FDQSxLQUFLLE9BQUs7QUFDUixVQUFJQSxLQUFJLEVBQUU7QUFDVixhQUFPO0FBQ1AsVUFBSSxJQUFJLEdBQUc7QUFDWCxVQUFJLElBQUksRUFBRyxRQUFPO0FBQ2xCLGVBQVMsSUFBSSxHQUFHLEtBQUssR0FBRyxLQUFLLEdBQUc7QUFDOUIsWUFBSSxJQUFJQSxNQUFLLElBQUksTUFBTTtBQUN2QixZQUFJLEtBQUssSUFBSSxHQUFHLElBQUksU0FBUztBQUM3QixZQUFJLElBQUksS0FBSyxJQUFJLEdBQUcsR0FBRyxLQUFLLElBQUksR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQzNDLElBQUksR0FBRyxDQUFDO0FBQ1YsWUFBSSxFQUFHLFFBQU87QUFBQSxNQUNoQjtBQUNBLGFBQU87QUFBQSxJQUNULEdBQ0EsS0FBSyxDQUFDLEdBQ04sS0FBSyxNQUFNLEtBQUssa0JBQ2hCLEtBQUssTUFBTTtBQUNULFVBQUksQ0FBQyxHQUFHLFNBQVM7QUFDZixZQUFJLEtBQUssT0FBTyxhQUFhLFlBQVksVUFBVSxZQUFZLEtBQUssUUFBUSxLQUFLLEdBQUcsSUFBSSxVQUN0RkEsS0FBSTtBQUFBLFVBQ0YsTUFBTTtBQUFBLFVBQ04sU0FBUztBQUFBLFVBQ1QsTUFBTTtBQUFBLFVBQ04sS0FBSztBQUFBLFVBQ0wsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFVBQ04sR0FBRyxHQUFHO0FBQUEsUUFDUjtBQUNGLGlCQUFTLEtBQUssR0FBSSxJQUFHLENBQUMsTUFBTSxTQUFTLE9BQU9BLEdBQUUsQ0FBQyxJQUFJQSxHQUFFLENBQUMsSUFBSSxHQUFHLENBQUM7QUFDOUQsWUFBSSxJQUFJLENBQUM7QUFDVCxpQkFBUyxLQUFLQSxHQUFHLEdBQUUsS0FBSyxHQUFHLENBQUMsSUFBSUEsR0FBRSxDQUFDLENBQUMsRUFBRTtBQUN0QyxXQUFHLFVBQVU7QUFBQSxNQUNmO0FBQ0EsYUFBTyxHQUFHO0FBQUEsSUFDWixHQUNBLEtBQUssQ0FBQyxHQUFHQSxPQUFNO0FBQ2IsVUFBSSxJQUFJLEdBQ04sSUFBSTtBQUNOLGVBQVMsS0FBSyxHQUFHLEdBQUc7QUFDbEIsWUFBSSxJQUFJQSxLQUFJO0FBQ1osVUFBRSxJQUFJLEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUs7QUFBQSxNQUNwRDtBQUNBLGFBQU87QUFBQSxJQUNULEdBQ0EsS0FBSyxDQUFDLEdBQUdBLE9BQU07QUFDYixVQUFJLElBQUksR0FBRztBQUNYLFFBQUUsS0FBSyxDQUFDLElBQUksRUFBRTtBQUNkLFVBQUksSUFBSTtBQUNSLGVBQVMsS0FBSyxFQUFHLE1BQUssR0FBRyxDQUFDLElBQUk7QUFDOUIsYUFBTyxFQUFFQSxNQUFLLENBQUMsSUFBSSxHQUFHO0FBQUEsSUFDeEIsR0FDQSxLQUFLLE9BQUs7QUFDWixhQUFTLEdBQUcsR0FBR0EsSUFBRyxHQUFHLEdBQUcsR0FBRztBQUN6QixhQUFPO0FBQUEsSUFDVDtBQUNBLFFBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUNwQixLQUFLLENBQUMsR0FBR0EsT0FBTTtBQUNiLFVBQUksSUFBSSxHQUFHLENBQUM7QUFDWixNQUFBQSxPQUFNLEtBQUtBLE9BQU0sT0FBTyxNQUFNLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxTQUFTLEtBQUssRUFBRSxLQUFLQSxFQUFDO0FBQUEsSUFDNUUsR0FDQSxLQUFLLENBQUMsR0FBR0EsSUFBRyxHQUFHLE1BQU07QUFDbkIsZUFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLO0FBQ2pDLFlBQUksSUFBSSxFQUFFQSxNQUFLLENBQUMsR0FDZCxJQUFJLEVBQUVBLEtBQUksS0FBSyxDQUFDO0FBQ2xCLFFBQUFBLE1BQUs7QUFDTCxpQkFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUssSUFBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDMUMsYUFBSztBQUFBLE1BQ1A7QUFDQSxhQUFPLEVBQUUsS0FBSyxDQUFDLElBQUksR0FBRztBQUFBLElBQ3hCLEdBQ0EsS0FBSyxPQUFLO0FBQ1osUUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxFQUFFLFVBQVUsS0FBSyxFQUFFLFFBQVEsRUFBRSxhQUFhLElBQUksRUFBRSxXQUFXLEVBQUUsZUFBZSxJQUFJLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLElBQUksRUFBRSxjQUFjLEVBQUUsUUFBUyxNQUFLLE9BQU8sRUFBRSxXQUFXLGVBQWUsRUFBRSxVQUFVLENBQUMsRUFBRSxPQUFPLElBQUksRUFBRSxRQUFRLFNBQVMsSUFBSSxHQUFFLFFBQVEsTUFBTSxFQUFFO0FBQzNVLFFBQUksSUFBSSxHQUFHLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJO0FBQzFELGFBQVMsR0FBRyxHQUFHO0FBQ2IsV0FBSyxFQUFFLElBQUksSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEtBQUssRUFBRSxVQUFVLEVBQUUsSUFBSSxLQUFLLEVBQUUsSUFBSSxJQUFJLEVBQUUsSUFBSSxLQUFLLEVBQUUsSUFBSSxLQUFLLEVBQUUsSUFBSSxLQUFLLEVBQUUsSUFBSSxLQUFLLEVBQUUsSUFBSSxLQUFLLEVBQUUsSUFBSSxLQUFLLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxLQUFLLEVBQUUsSUFBSSxLQUFLLEVBQUU7QUFBQSxJQUNqUztBQUNBLFFBQUksS0FBSztBQUFBLE1BQ1AsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osR0FBRztBQUFBLE1BQ0gsSUFBSTtBQUFBLE1BQ0osR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osR0FBRztBQUFBLE1BQ0gsSUFBSTtBQUFBLE1BQ0osR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osSUFBSTtBQUFBLE1BQ0osR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsSUFBSTtBQUFBLE1BQ0osR0FBRztBQUFBLE1BQ0gsSUFBSTtBQUFBLE1BQ0osR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsSUFBSTtBQUFBLE1BQ0osR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1BQ0gsSUFBSTtBQUFBLE1BQ0osR0FBRztBQUFBLE1BQ0gsR0FBRztBQUFBLE1B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O0FBRUEscUJBQXFCLGNBQWM7RUFDakMsV0FBVztJQUNULHFCQUFxQjtNQUNuQixRQUFRLE1BQU07O1FBQTRDO01BQVk7S0FDdkU7SUFDRCxFQUFFLFNBQVMsb0JBQW9CLFVBQVUsbUJBQWtCO0lBQzNELGlCQUFpQixZQUFZLGVBQWU7SUFDNUMsb0JBQW9CLEVBQUUsMkJBQTJCLE1BQU0sTUFBTSxNQUFLLENBQUU7SUFDcEUsY0FBYyxRQUFRLGVBQWUsaUJBQWlCLENBQUM7SUFDdkQsR0FBRztJQUNILG9CQUNFLG1CQUFtQixRQUFRLENBQUEsQ0FBRSxHQUM3QixnQkFBZ0IsUUFBTyxHQUN2QixnQkFBZ0IsUUFBUTtNQUN0QixRQUFRO1FBQ04sU0FBUztRQUNULFlBQVk7UUFDWixNQUFNLENBQUMsVUFBVTs7S0FFcEIsQ0FBQztJQUVKLGtCQUFrQixpQkFBaUIsQ0FBQyxlQUFlLENBQUMsQ0FBQzs7Q0FFeEQ7QUFDRCxpQkFBZ0I7IiwibmFtZXMiOlsiQ29va2llTWFuYWdlbWVudFN0YXRlIiwiZSJdLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMCwxLDIsOSwxMiwxOSwyMF19
