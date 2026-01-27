import {
  StripeService
} from "./chunk-RJFLORM4.js";
import {
  PaymentMethodsService
} from "./chunk-LYFO6AYO.js";
import {
  HeaderComponent
} from "./chunk-AVAJ3QHV.js";
import {
  StripeElementsDirective,
  StripePaymentElementComponent
} from "./chunk-LZDBSS56.js";
import "./chunk-K2AWDLYV.js";
import "./chunk-EYZBHAOK.js";
import "./chunk-Y4K6NO5T.js";
import "./chunk-WJQU3GMM.js";
import "./chunk-CHFOG66O.js";
import "./chunk-RAVV2QIY.js";
import "./chunk-T6WE2PS5.js";
import {
  AccountService
} from "./chunk-XK4I5MHM.js";
import "./chunk-GVYZRG6X.js";
import {
  environment
} from "./chunk-FOJAXRYS.js";
import {
  fetchUserAttributes
} from "./chunk-Y7HI6USV.js";
import {
  ErrorHandlerService
} from "./chunk-SARQRLZR.js";
import {
  addIcons,
  ellipsisHorizontal,
  logoApple,
  logoGoogle
} from "./chunk-3E6DEK7U.js";
import {
  StorageService
} from "./chunk-U6SJAXLK.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  FormsModule,
  IonBadge,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonModal2 as IonModal,
  IonPopover2 as IonPopover,
  IonProgressBar,
  IonRefresher,
  IonRefresherContent,
  IonRow,
  IonSkeletonText,
  IonText,
  IonTitle,
  IonToolbar,
  LoadingController,
  NgForOf,
  NgIf,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  UpperCasePipe,
  ViewChild,
  effect,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
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
  Capacitor
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

// src/app/pages/account/payment-methods/payment-methods.page.ts
var _c0 = ["popover"];
var _c1 = () => [];
function PaymentMethodsPage_Case_6_ion_item_4_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const card_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" Exp. ", card_r2.card.exp_month < 10 ? "0" + card_r2.card.exp_month : card_r2.card.exp_month, "/", card_r2.card.exp_year.toString().slice(-2), " ");
  }
}
function PaymentMethodsPage_Case_6_ion_item_4_ion_badge_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-badge", 23);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "cards.default"), " ");
  }
}
function PaymentMethodsPage_Case_6_ion_item_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item", 15);
    \u0275\u0275element(1, "ion-icon", 16);
    \u0275\u0275elementStart(2, "ion-label")(3, "div")(4, "span", 17);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div");
    \u0275\u0275template(7, PaymentMethodsPage_Case_6_ion_item_4_span_7_Template, 2, 2, "span", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, PaymentMethodsPage_Case_6_ion_item_4_ion_badge_8_Template, 3, 3, "ion-badge", 19);
    \u0275\u0275elementStart(9, "ion-button", 20, 1);
    \u0275\u0275listener("click", function PaymentMethodsPage_Case_6_ion_item_4_Template_ion_button_click_9_listener($event) {
      const card_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.presentPopover($event, card_r2.id));
    });
    \u0275\u0275element(11, "ion-icon", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_8_0;
    const card_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.getIcon(card_r2.card == null ? null : card_r2.card.brand));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("****", card_r2.card == null ? null : card_r2.card.last4, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", card_r2.card && card_r2.card.exp_month && card_r2.card.exp_year);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.cardsState.state === "success" && ((tmp_8_0 = ctx_r2.paymentMethodService.defaultPaymentMethod()) == null ? null : tmp_8_0.id) === card_r2.id);
  }
}
function PaymentMethodsPage_Case_6_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-list")(1, "ion-item", 24);
    \u0275\u0275listener("click", function PaymentMethodsPage_Case_6_ng_template_8_Template_ion_item_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setDefaultCard(ctx_r2.selectedCardId));
    });
    \u0275\u0275elementStart(2, "ion-text");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "ion-item", 25);
    \u0275\u0275listener("click", function PaymentMethodsPage_Case_6_ng_template_8_Template_ion_item_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteCard(ctx_r2.selectedCardId));
    });
    \u0275\u0275elementStart(6, "ion-text", 7);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_5_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ((tmp_3_0 = ctx_r2.paymentMethodService.defaultPaymentMethod()) == null ? null : tmp_3_0.id) === ctx_r2.selectedCardId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, "cards.set_default"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ((tmp_5_0 = ctx_r2.paymentMethodService.defaultPaymentMethod()) == null ? null : tmp_5_0.id) === ctx_r2.selectedCardId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 6, "cards.delete"));
  }
}
function PaymentMethodsPage_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-list", 11);
    \u0275\u0275template(4, PaymentMethodsPage_Case_6_ion_item_4_Template, 12, 4, "ion-item", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "hr", 13);
    \u0275\u0275elementStart(6, "ion-popover", 14, 0);
    \u0275\u0275template(8, PaymentMethodsPage_Case_6_ng_template_8_Template, 9, 8, "ng-template");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 4, "cards.my_cards"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.cardsState.paymentMethods);
    \u0275\u0275advance(2);
    \u0275\u0275property("dismissOnSelect", true)("keepContentsMounted", true);
  }
}
function PaymentMethodsPage_Case_7_ion_item_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item", 29);
    \u0275\u0275element(1, "ion-skeleton-text", 30);
    \u0275\u0275elementStart(2, "ion-label")(3, "div");
    \u0275\u0275element(4, "ion-skeleton-text", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div");
    \u0275\u0275element(6, "ion-skeleton-text", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "ion-skeleton-text", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("animated", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("animated", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("animated", true);
    \u0275\u0275advance();
    \u0275\u0275property("animated", true);
  }
}
function PaymentMethodsPage_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-progress-bar", 26);
    \u0275\u0275elementStart(1, "ion-list", 27);
    \u0275\u0275template(2, PaymentMethodsPage_Case_7_ion_item_2_Template, 8, 4, "ion-item", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c1).constructor(ctx_r2.skeletonCount));
  }
}
function PaymentMethodsPage_Case_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-text", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.cardsState.error, " ");
  }
}
function PaymentMethodsPage_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-text", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "cards.empty"), " ");
  }
}
function PaymentMethodsPage_ng_template_14_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "ion-skeleton-text", 38)(2, "ion-skeleton-text", 39)(3, "ion-skeleton-text", 38);
    \u0275\u0275elementContainerEnd();
  }
}
function PaymentMethodsPage_ng_template_14_div_11_ion_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 44);
    \u0275\u0275listener("click", function PaymentMethodsPage_ng_template_14_div_11_ion_button_1_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openApplePay(ctx_r2.stripeOptions));
    });
    \u0275\u0275element(1, "ion-icon", 45);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "cards.pay_with_apple_pay"), " ");
  }
}
function PaymentMethodsPage_ng_template_14_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275template(1, PaymentMethodsPage_ng_template_14_div_11_ion_button_1_Template, 4, 3, "ion-button", 40);
    \u0275\u0275elementStart(2, "ngx-stripe-elements", 41)(3, "ngx-stripe-payment", 42);
    \u0275\u0275listener("change", function PaymentMethodsPage_ng_template_14_div_11_Template_ngx_stripe_payment_change_3_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.handlePaymentElementChange($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "ion-button", 43);
    \u0275\u0275listener("click", function PaymentMethodsPage_ng_template_14_div_11_Template_ion_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.createCard(ctx_r2.paymentElement.elements, ctx_r2.stripeOptions.clientSecret));
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "uppercase");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.paymentMode === "applepay");
    \u0275\u0275advance();
    \u0275\u0275property("stripe", ctx_r2.stripeService.getStripe())("elementsOptions", ctx_r2.stripeOptions);
    \u0275\u0275advance();
    \u0275\u0275property("options", ctx_r2.elementsOptions);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 7, \u0275\u0275pipeBind1(6, 5, "cards.save")), " ");
  }
}
function PaymentMethodsPage_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-content")(1, "ion-header")(2, "ion-toolbar")(3, "ion-title");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ion-buttons", 34)(7, "ion-button", 35);
    \u0275\u0275listener("click", function PaymentMethodsPage_ng_template_14_Template_ion_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.isOpenClassicPaymentSheet = "hidden");
    });
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(10, PaymentMethodsPage_ng_template_14_ng_container_10_Template, 4, 0, "ng-container", 36)(11, PaymentMethodsPage_ng_template_14_div_11_Template, 8, 9, "div", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, "cards.add_card"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 6, "generic.close"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r2.stripeOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.stripeOptions);
  }
}
var _PaymentMethodsPage = class _PaymentMethodsPage {
  constructor(paymentMethodService, stripeService, accountService, router, loadingCtrl, translateService, storage, errorHandler) {
    this.paymentMethodService = paymentMethodService;
    this.stripeService = stripeService;
    this.accountService = accountService;
    this.router = router;
    this.loadingCtrl = loadingCtrl;
    this.translateService = translateService;
    this.storage = storage;
    this.errorHandler = errorHandler;
    this.skeletonCount = 3;
    this.cardsState = { state: "loading" };
    this.environment = environment;
    this.isOpenClassicPaymentSheet = "hidden";
    this.paymentMode = "classic";
    this.program = null;
    addIcons({ ellipsisHorizontal, logoApple, logoGoogle });
    effect(() => {
      this.cyclistState = this.accountService.cyclistState();
    });
    effect(() => {
      this.cardsState = this.paymentMethodService.paymentMethodsState();
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.program = yield this.storage.get("program");
      this.user = yield fetchUserAttributes();
      const urlParams = this.router.snapshot.queryParams;
      const setupIntent = urlParams["setup_intent"];
      const clientSecret = urlParams["setup_intent_client_secret"];
      const redirectStatus = urlParams["redirect_status"];
      if (setupIntent && clientSecret && redirectStatus === "succeeded") {
        this.stripeService.retrieveSetupIntent(clientSecret).subscribe({
          next: (result) => __async(this, null, function* () {
            if (result && result.setupIntent && result.setupIntent.payment_method) {
              yield this.accountService.loadCyclist();
              yield this.setDefaultCard(result.setupIntent.payment_method);
            }
          })
        });
      } else if (this.cardsState.state !== "success") {
        this.refresh();
      }
    });
  }
  handleRefresh(event) {
    this.refresh().then(() => {
      event.target.complete();
    });
  }
  refresh() {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => __async(this, null, function* () {
        this.cardsState = { state: "loading" };
        yield this.paymentMethodService.getPaymentMethods();
      }));
    });
  }
  initStripe() {
    this.stripeService.initStripeElements(environment.program).subscribe((options) => __async(this, null, function* () {
      this.elementsOptions = {
        layout: {
          type: "auto"
        },
        wallets: {
          applePay: "auto",
          googlePay: "auto"
        }
      };
      this.stripeOptions = options;
      if (Capacitor.getPlatform() === "ios") {
        const isAvailable = yield this.stripeService.isApplePayAvailable();
        this.paymentMode = isAvailable ? "applepay" : "classic";
        this.isOpenClassicPaymentSheet = "visible";
      }
      if (Capacitor.getPlatform() === "android") {
        const isAvailable = yield this.stripeService.isGooglePayAvailable();
        if (isAvailable) {
          this.openGooglePay();
        } else {
          this.paymentMode = "classic";
        }
      } else {
        this.isOpenClassicPaymentSheet = "visible";
      }
    }));
  }
  handlePaymentSuccess(clientSecret) {
    return __async(this, null, function* () {
      const loading = yield this.loadingCtrl.create({
        message: this.translateService.instant("loading.saving_card")
      });
      yield loading.present();
      this.stripeService.retrieveSetupIntent(clientSecret).subscribe({
        next: (setupIntent) => __async(this, null, function* () {
          var _a;
          if ((_a = setupIntent == null ? void 0 : setupIntent.setupIntent) == null ? void 0 : _a.payment_method) {
            yield this.setDefaultCard(setupIntent.setupIntent.payment_method);
            this.isOpenClassicPaymentSheet = "hidden";
          }
          yield loading.dismiss();
        }),
        error: () => __async(this, null, function* () {
          yield loading.dismiss();
        })
      });
    });
  }
  openApplePay(options) {
    return __async(this, null, function* () {
      var _a, _b, _c;
      try {
        const result = yield this.stripeService.setupApplePay(options.clientSecret, ((_a = this.program) == null ? void 0 : _a.name) || "", ((_c = (_b = this.program) == null ? void 0 : _b.config) == null ? void 0 : _c.applepay_merchant) || "");
        if (result === "completed") {
          yield this.handlePaymentSuccess(options.clientSecret);
        } else if (result === "failed") {
          this.isOpenClassicPaymentSheet = "visible";
        } else {
          this.isOpenClassicPaymentSheet = "visible";
        }
      } catch (error) {
        this.isOpenClassicPaymentSheet = "visible";
      }
    });
  }
  openGooglePay() {
    return __async(this, null, function* () {
      var _a;
      try {
        const result = yield this.stripeService.setupGooglePay(this.stripeOptions.clientSecret, ((_a = this.program) == null ? void 0 : _a.name) || "Ecovelo");
        if (result === "completed") {
          yield this.handlePaymentSuccess(this.stripeOptions.clientSecret);
        } else if (result === "failed") {
          this.isOpenClassicPaymentSheet = "visible";
          this.paymentMode = "classic";
        } else {
          this.isOpenClassicPaymentSheet = "visible";
          this.paymentMode = "classic";
        }
      } catch (error) {
        this.isOpenClassicPaymentSheet = "visible";
        this.paymentMode = "classic";
      }
    });
  }
  getIcon(brand) {
    switch (brand) {
      case "visa":
        return "../../../assets/svg/fontawesome/visa.svg";
      case "mastercard":
        return "../../../assets/svg/fontawesome/mastercard.svg";
      default:
        return "../../../assets/svg/fontawesome/credit-card.svg";
    }
  }
  presentPopover(e, cardId) {
    return __async(this, null, function* () {
      this.selectedCardId = cardId;
      this.popover.event = e;
      return this.popover.present();
    });
  }
  createCard(elements, clientSecret) {
    return __async(this, null, function* () {
      const loading = yield this.loadingCtrl.create({
        message: "Ajout de la carte..."
      });
      yield loading.present();
      if (this.user.name) {
        this.stripeService.confirmSetup(elements, clientSecret, this.user.name).subscribe({
          next: () => __async(this, null, function* () {
            this.isOpenClassicPaymentSheet = "hidden";
            yield loading.dismiss();
          }),
          error: () => __async(this, null, function* () {
            yield loading.dismiss();
          })
        });
      } else {
        yield loading.dismiss();
      }
    });
  }
  setDefaultCard(cardId) {
    return __async(this, null, function* () {
      const loading = yield this.loadingCtrl.create({
        message: this.translateService.instant("loading.saving_card")
      });
      yield loading.present();
      yield this.paymentMethodService.setDefaultCard(cardId);
      yield this.loadingCtrl.getTop().then((loading2) => __async(this, null, function* () {
        if (loading2) {
          yield loading2.dismiss();
        }
      }));
    });
  }
  deleteCard(cardId) {
    return __async(this, null, function* () {
      yield this.paymentMethodService.deleteCard(cardId);
    });
  }
  handlePaymentElementChange(event) {
    var _a, _b, _c;
    if (((_a = event.value) == null ? void 0 : _a.type) === "apple_pay" && this.paymentMode !== "classic_applepay") {
      this.paymentMode = "classic_applepay";
    } else if (((_b = event.value) == null ? void 0 : _b.type) === "google_pay" && this.paymentMode !== "classic_googlepay") {
      this.paymentMode = "classic_googlepay";
    } else if (!((_c = event.value) == null ? void 0 : _c.type) && this.paymentMode !== "classic") {
      this.paymentMode = "classic";
    }
  }
};
_PaymentMethodsPage.\u0275fac = function PaymentMethodsPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PaymentMethodsPage)(\u0275\u0275directiveInject(PaymentMethodsService), \u0275\u0275directiveInject(StripeService), \u0275\u0275directiveInject(AccountService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(LoadingController), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(StorageService), \u0275\u0275directiveInject(ErrorHandlerService));
};
_PaymentMethodsPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentMethodsPage, selectors: [["app-payment-methods"]], viewQuery: function PaymentMethodsPage_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(StripePaymentElementComponent, 5);
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paymentElement = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.popover = _t.first);
  }
}, decls: 15, vars: 6, consts: [["popover", ""], ["popoverButton", ""], [3, "defaultHref"], [1, "ion-padding"], [1, "ion-justify-content-center"], ["size", "12", "size-md", "8", "size-lg", "6"], ["slot", "fixed", 3, "ionRefresh"], ["color", "danger"], ["color", "medium"], ["id", "open-modal", "size", "small", "shape", "round", "color", "dark", "fill", "outline", 1, "ion-margin-top", 3, "click"], [3, "ionModalDidDismiss", "isOpen"], ["lines", "none"], ["class", "ion-margin-top card-item", 4, "ngFor", "ngForOf"], [1, "divider"], [3, "dismissOnSelect", "keepContentsMounted"], [1, "ion-margin-top", "card-item"], ["slot", "start", "size", "large", 3, "src"], [1, "card-number"], ["class", "expiry", 4, "ngIf"], ["color", "primary", "class", "default-badge", 4, "ngIf"], ["fill", "clear", "color", "dark", "size", "small", "slot", "end", 3, "click"], ["name", "ellipsis-horizontal"], [1, "expiry"], ["color", "primary", 1, "default-badge"], ["lines", "full", 3, "click", "disabled"], ["lines", "none", 3, "click", "disabled"], ["type", "indeterminate"], ["lines", "none", 1, "ion-margin-top"], ["class", "ion-margin-top", 4, "ngFor", "ngForOf"], [1, "ion-margin-top"], ["slot", "start", 2, "width", "32px", "height", "32px", 3, "animated"], [2, "width", "120px", 3, "animated"], [2, "width", "80px", 3, "animated"], ["slot", "end", 2, "width", "80px", "height", "24px", 3, "animated"], ["slot", "end"], ["shape", "round", "fill", "clear", "color", "dark", 3, "click"], [4, "ngIf"], ["class", "ion-padding", 4, "ngIf"], ["animated", "", 2, "width", "100%", "height", "60px"], ["animated", "", 2, "width", "100%", "height", "60px", "margin", "10px 0"], ["class", "ion-margin-vertical apple-pay-button", "expand", "block", "shape", "round", "fill", "outline", "color", "dark", 3, "click", 4, "ngIf"], [1, "stripe-element-container", 3, "stripe", "elementsOptions"], [3, "change", "options"], ["expand", "block", "shape", "round", "fill", "outline", "color", "dark", 1, "ion-margin-top", "ion-margin-horizontal", 3, "click"], ["expand", "block", "shape", "round", "fill", "outline", "color", "dark", 1, "ion-margin-vertical", "apple-pay-button", 3, "click"], ["name", "logo-apple", "slot", "start"]], template: function PaymentMethodsPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-header", 2);
    \u0275\u0275elementStart(1, "ion-content", 3)(2, "ion-row", 4)(3, "ion-col", 5)(4, "ion-refresher", 6);
    \u0275\u0275listener("ionRefresh", function PaymentMethodsPage_Template_ion_refresher_ionRefresh_4_listener($event) {
      return ctx.handleRefresh($event);
    });
    \u0275\u0275element(5, "ion-refresher-content");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, PaymentMethodsPage_Case_6_Template, 9, 6)(7, PaymentMethodsPage_Case_7_Template, 3, 2)(8, PaymentMethodsPage_Case_8_Template, 2, 1, "ion-text", 7)(9, PaymentMethodsPage_Case_9_Template, 3, 3, "ion-text", 8);
    \u0275\u0275elementStart(10, "ion-button", 9);
    \u0275\u0275listener("click", function PaymentMethodsPage_Template_ion_button_click_10_listener() {
      return ctx.initStripe();
    });
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "ion-modal", 10);
    \u0275\u0275listener("ionModalDidDismiss", function PaymentMethodsPage_Template_ion_modal_ionModalDidDismiss_13_listener() {
      return ctx.isOpenClassicPaymentSheet = "hidden";
    });
    \u0275\u0275template(14, PaymentMethodsPage_ng_template_14_Template, 12, 8, "ng-template");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    \u0275\u0275property("defaultHref", "/account");
    \u0275\u0275advance(6);
    \u0275\u0275conditional((tmp_1_0 = ctx.cardsState.state) === "success" ? 6 : tmp_1_0 === "loading" ? 7 : tmp_1_0 === "error" ? 8 : tmp_1_0 === "no_data" ? 9 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 4, "cards.add_card"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("isOpen", ctx.isOpenClassicPaymentSheet === "visible");
  }
}, dependencies: [
  IonContent,
  HeaderComponent,
  CommonModule,
  NgForOf,
  NgIf,
  UpperCasePipe,
  FormsModule,
  IonButton,
  IonRow,
  IonCol,
  IonBadge,
  IonLabel,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonTitle,
  IonModal,
  IonList,
  IonText,
  IonIcon,
  TranslateModule,
  TranslatePipe,
  IonItem,
  IonProgressBar,
  IonSkeletonText,
  StripePaymentElementComponent,
  StripeElementsDirective,
  IonPopover,
  IonRefresher,
  IonRefresherContent
], styles: ["\n\nion-item.card-item[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid gray;\n}\n.divider[_ngcontent-%COMP%] {\n  border-top: 1px solid #ccc;\n  margin: 16px 0;\n}\n#payment-element[_ngcontent-%COMP%] {\n  padding: 16px;\n  margin: 16px 0;\n}\n.google-pay-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.apple-pay-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n/*# sourceMappingURL=payment-methods.page.css.map */"] });
var PaymentMethodsPage = _PaymentMethodsPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentMethodsPage, [{
    type: Component,
    args: [{ selector: "app-payment-methods", imports: [
      IonContent,
      HeaderComponent,
      CommonModule,
      FormsModule,
      IonButton,
      IonRow,
      IonCol,
      IonBadge,
      IonLabel,
      IonHeader,
      IonToolbar,
      IonButtons,
      IonButton,
      IonTitle,
      IonModal,
      IonList,
      IonText,
      IonIcon,
      TranslateModule,
      IonItem,
      IonProgressBar,
      IonSkeletonText,
      StripePaymentElementComponent,
      StripeElementsDirective,
      IonPopover,
      IonRefresher,
      IonRefresherContent
    ], template: `<app-header [defaultHref]="'/account'"></app-header>

<ion-content class="ion-padding">
  <ion-row class="ion-justify-content-center">
    <ion-col size="12" size-md="8" size-lg="6">
      <ion-refresher slot="fixed" (ionRefresh)="handleRefresh($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>

      @switch (cardsState.state) { @case("success") {
      <h4>{{"cards.my_cards" | translate}}</h4>
      <ion-list lines="none">
        <ion-item
          *ngFor="let card of cardsState.paymentMethods"
          class="ion-margin-top card-item"
        >
          <ion-icon
            slot="start"
            [src]="getIcon(card.card?.brand)"
            size="large"
          ></ion-icon>
          <ion-label>
            <div>
              <span class="card-number">****{{ card.card?.last4 }}</span>
            </div>
            <div>
              <span
                class="expiry"
                *ngIf="card.card && card.card.exp_month && card.card.exp_year"
              >
                Exp. {{ card.card.exp_month < 10 ? '0' + card.card.exp_month :
                card.card.exp_month }}/{{
                card.card.exp_year.toString().slice(-2) }}
              </span>
            </div>
          </ion-label>
          <ion-badge
            *ngIf="cardsState.state === 'success' && paymentMethodService.defaultPaymentMethod()?.id === card.id"
            color="primary"
            class="default-badge"
          >
            {{ 'cards.default' | translate }}
          </ion-badge>
          <ion-button
            fill="clear"
            color="dark"
            #popoverButton
            (click)="presentPopover($event, card.id!)"
            size="small"
            slot="end"
          >
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </ion-button>
        </ion-item>
      </ion-list>
      <hr class="divider" />

      <ion-popover
        #popover
        [dismissOnSelect]="true"
        [keepContentsMounted]="true"
      >
        <ng-template>
          <ion-list>
            <ion-item
              lines="full"
              [disabled]="paymentMethodService.defaultPaymentMethod()?.id === selectedCardId"
              (click)="setDefaultCard(selectedCardId!)"
            >
              <ion-text>{{ 'cards.set_default' | translate }}</ion-text>
            </ion-item>
            <ion-item
              [disabled]="paymentMethodService.defaultPaymentMethod()?.id === selectedCardId"
              (click)="deleteCard(selectedCardId!)"
              lines="none"
            >
              <ion-text color="danger"
                >{{ 'cards.delete' | translate }}</ion-text
              >
            </ion-item>
          </ion-list>
        </ng-template>
      </ion-popover>
      } @case('loading') {
      <ion-progress-bar type="indeterminate"></ion-progress-bar>
      <ion-list class="ion-margin-top" lines="none">
        <ion-item
          *ngFor="let i of [].constructor(skeletonCount)"
          class="ion-margin-top"
        >
          <ion-skeleton-text
            slot="start"
            [animated]="true"
            style="width: 32px; height: 32px"
          ></ion-skeleton-text>
          <ion-label>
            <div>
              <ion-skeleton-text
                [animated]="true"
                style="width: 120px"
              ></ion-skeleton-text>
            </div>
            <div>
              <ion-skeleton-text
                [animated]="true"
                style="width: 80px"
              ></ion-skeleton-text>
            </div>
          </ion-label>
          <ion-skeleton-text
            slot="end"
            [animated]="true"
            style="width: 80px; height: 24px"
          ></ion-skeleton-text>
        </ion-item>
      </ion-list>
      } @case('error') {
      <ion-text color="danger"> {{ cardsState.error }} </ion-text>
      } @case('no_data') {
      <ion-text color="medium"> {{ 'cards.empty' | translate }} </ion-text>
      } }
      <ion-button
        class="ion-margin-top"
        id="open-modal"
        size="small"
        shape="round"
        color="dark"
        fill="outline"
        (click)="initStripe()"
      >
        {{ 'cards.add_card' | translate }}
      </ion-button>
      <ion-modal
        [isOpen]="isOpenClassicPaymentSheet === 'visible'"
        (ionModalDidDismiss)="isOpenClassicPaymentSheet = 'hidden'"
      >
        <ng-template>
          <ion-content>
            <ion-header>
              <ion-toolbar>
                <ion-title>{{ 'cards.add_card' | translate }}</ion-title>
                <ion-buttons slot="end">
                  <ion-button
                    (click)="isOpenClassicPaymentSheet = 'hidden'"
                    shape="round"
                    fill="clear"
                    color="dark"
                  >
                    {{"generic.close" | translate}}
                  </ion-button>
                </ion-buttons>
              </ion-toolbar>
            </ion-header>
            <ng-container *ngIf="!stripeOptions">
              <ion-skeleton-text
                animated
                style="width: 100%; height: 60px"
              ></ion-skeleton-text>
              <ion-skeleton-text
                animated
                style="width: 100%; height: 60px; margin: 10px 0"
              ></ion-skeleton-text>
              <ion-skeleton-text
                animated
                style="width: 100%; height: 60px"
              ></ion-skeleton-text>
            </ng-container>

            <div *ngIf="stripeOptions" class="ion-padding">
              <ion-button
                class="ion-margin-vertical apple-pay-button"
                *ngIf="paymentMode === 'applepay'"
                expand="block"
                shape="round"
                (click)="openApplePay(stripeOptions)"
                fill="outline"
                color="dark"
              >
                <ion-icon name="logo-apple" slot="start"></ion-icon>
                {{ 'cards.pay_with_apple_pay' | translate }}
              </ion-button>
              <ngx-stripe-elements
                [stripe]="stripeService.getStripe()"
                [elementsOptions]="stripeOptions"
                class="stripe-element-container"
              >
                <ngx-stripe-payment
                  [options]="elementsOptions"
                  (change)="handlePaymentElementChange($event)"
                />
              </ngx-stripe-elements>

              <ion-button
                expand="block"
                class="ion-margin-top ion-margin-horizontal"
                (click)="createCard(paymentElement.elements, stripeOptions.clientSecret!)"
                shape="round"
                fill="outline"
                color="dark"
              >
                {{ 'cards.save' | translate | uppercase }}
              </ion-button>
            </div>
          </ion-content>
        </ng-template>
      </ion-modal>
    </ion-col>
  </ion-row>
</ion-content>
`, styles: ["/* src/app/pages/account/payment-methods/payment-methods.page.scss */\nion-item.card-item {\n  border-radius: 8px;\n  border: 1px solid gray;\n}\n.divider {\n  border-top: 1px solid #ccc;\n  margin: 16px 0;\n}\n#payment-element {\n  padding: 16px;\n  margin: 16px 0;\n}\n.google-pay-button span {\n  font-size: 20px;\n}\n.apple-pay-button span {\n  font-size: 20px;\n}\n/*# sourceMappingURL=payment-methods.page.css.map */\n"] }]
  }], () => [{ type: PaymentMethodsService }, { type: StripeService }, { type: AccountService }, { type: ActivatedRoute }, { type: LoadingController }, { type: TranslateService }, { type: StorageService }, { type: ErrorHandlerService }], { paymentElement: [{
    type: ViewChild,
    args: [StripePaymentElementComponent]
  }], popover: [{
    type: ViewChild,
    args: ["popover"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentMethodsPage, { className: "PaymentMethodsPage", filePath: "src/app/pages/account/payment-methods/payment-methods.page.ts", lineNumber: 90 });
})();
export {
  PaymentMethodsPage
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wYWdlcy9hY2NvdW50L3BheW1lbnQtbWV0aG9kcy9wYXltZW50LW1ldGhvZHMucGFnZS50cyIsICJzcmMvYXBwL3BhZ2VzL2FjY291bnQvcGF5bWVudC1tZXRob2RzL3BheW1lbnQtbWV0aG9kcy5wYWdlLmh0bWwiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IENvbXBvbmVudCwgZWZmZWN0LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJ1xuaW1wb3J0IHtcbiAgSW9uQ29udGVudCxcbiAgSW9uQnV0dG9uLFxuICBJb25CYWRnZSxcbiAgSW9uTGlzdCxcbiAgSW9uSXRlbSxcbiAgSW9uVGV4dCxcbiAgSW9uSWNvbixcbiAgSW9uU2tlbGV0b25UZXh0LFxuICBJb25Sb3csXG4gIElvbkxhYmVsLFxuICBJb25IZWFkZXIsXG4gIElvblRvb2xiYXIsXG4gIElvbkJ1dHRvbnMsXG4gIElvblRpdGxlLFxuICBJb25Db2wsXG4gIElvbk1vZGFsLFxuICBJb25Qcm9ncmVzc0JhcixcbiAgSW9uUG9wb3ZlcixcbiAgSW9uUmVmcmVzaGVyLFxuICBJb25SZWZyZXNoZXJDb250ZW50LFxuICBMb2FkaW5nQ29udHJvbGxlcixcbn0gZnJvbSAnQGlvbmljL2FuZ3VsYXIvc3RhbmRhbG9uZSdcbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCB9IGZyb20gJ3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudCdcbmltcG9ydCB7XG4gIFBheW1lbnRNZXRob2RzU2VydmljZSxcbiAgcGF5bWVudE1ldGhvZHNTdGF0ZSxcbn0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy9hcGktd3JhcHBlcnMvcGF5bWVudC1tZXRob2Quc2VydmljZSdcbmltcG9ydCB7XG4gIFN0cmlwZVBheW1lbnRFbGVtZW50Q29tcG9uZW50LFxuICBTdHJpcGVFbGVtZW50c0RpcmVjdGl2ZSxcbn0gZnJvbSAnbmd4LXN0cmlwZSdcbmltcG9ydCB7IFN0cmlwZVNlcnZpY2UgfSBmcm9tICdzcmMvYXBwL3NlcnZpY2VzL2V4dGVybmFsL3N0cmlwZS5zZXJ2aWNlJ1xuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICdzcmMvZW52aXJvbm1lbnRzL2Vudmlyb25tZW50J1xuaW1wb3J0IHtcbiAgU3RyaXBlRWxlbWVudHNPcHRpb25zLFxuICBTdHJpcGVQYXltZW50RWxlbWVudE9wdGlvbnMsXG59IGZyb20gJ0BzdHJpcGUvc3RyaXBlLWpzJ1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlLCBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSdcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xuaW1wb3J0IHsgYWRkSWNvbnMgfSBmcm9tICdpb25pY29ucydcbmltcG9ydCB7IGVsbGlwc2lzSG9yaXpvbnRhbCwgbG9nb0FwcGxlLCBsb2dvR29vZ2xlIH0gZnJvbSAnaW9uaWNvbnMvaWNvbnMnXG5pbXBvcnQgeyBmZXRjaFVzZXJBdHRyaWJ1dGVzIH0gZnJvbSAnYXdzLWFtcGxpZnkvYXV0aCdcbmltcG9ydCB7XG4gIEFjY291bnRTZXJ2aWNlLFxuICBjeWNsaXN0U3RhdGUsXG59IGZyb20gJ3NyYy9hcHAvc2VydmljZXMvYXBpLXdyYXBwZXJzL2FjY291bnQuc2VydmljZSdcbmltcG9ydCB7IENhcGFjaXRvciB9IGZyb20gJ0BjYXBhY2l0b3IvY29yZSdcbmltcG9ydCB7IFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy91dGlscy9zdG9yYWdlLnNlcnZpY2UnXG5pbXBvcnQgeyBSZXRyaWV2ZVByb2dyYW0yMDBSZXNwb25zZSB9IGZyb20gJ3NyYy9hcGktY3ljbGlzdCdcbmltcG9ydCB7IEVycm9ySGFuZGxlclNlcnZpY2UgfSBmcm9tICdzcmMvYXBwL3NlcnZpY2VzL3V0aWxzL2Vycm9yLWhhbmRsZXIuc2VydmljZSdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXBheW1lbnQtbWV0aG9kcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYXltZW50LW1ldGhvZHMucGFnZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGF5bWVudC1tZXRob2RzLnBhZ2Uuc2NzcyddLFxuICBpbXBvcnRzOiBbXG4gICAgSW9uQ29udGVudCxcbiAgICBIZWFkZXJDb21wb25lbnQsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIElvbkJ1dHRvbixcbiAgICBJb25Sb3csXG4gICAgSW9uQ29sLFxuICAgIElvbkJhZGdlLFxuICAgIElvbkxhYmVsLFxuICAgIElvbkhlYWRlcixcbiAgICBJb25Ub29sYmFyLFxuICAgIElvbkJ1dHRvbnMsXG4gICAgSW9uQnV0dG9uLFxuICAgIElvblRpdGxlLFxuICAgIElvbk1vZGFsLFxuICAgIElvbkxpc3QsXG4gICAgSW9uVGV4dCxcbiAgICBJb25JY29uLFxuICAgIFRyYW5zbGF0ZU1vZHVsZSxcbiAgICBJb25JdGVtLFxuICAgIElvblByb2dyZXNzQmFyLFxuICAgIElvblNrZWxldG9uVGV4dCxcbiAgICBTdHJpcGVQYXltZW50RWxlbWVudENvbXBvbmVudCxcbiAgICBTdHJpcGVFbGVtZW50c0RpcmVjdGl2ZSxcbiAgICBJb25Qb3BvdmVyLFxuICAgIElvblJlZnJlc2hlcixcbiAgICBJb25SZWZyZXNoZXJDb250ZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBQYXltZW50TWV0aG9kc1BhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xuICBza2VsZXRvbkNvdW50ID0gM1xuICBjYXJkc1N0YXRlOiBwYXltZW50TWV0aG9kc1N0YXRlID0geyBzdGF0ZTogJ2xvYWRpbmcnIH1cbiAgY3ljbGlzdFN0YXRlOiBjeWNsaXN0U3RhdGVcbiAgc3RyaXBlT3B0aW9uczogU3RyaXBlRWxlbWVudHNPcHRpb25zXG4gIGVudmlyb25tZW50ID0gZW52aXJvbm1lbnRcbiAgQFZpZXdDaGlsZChTdHJpcGVQYXltZW50RWxlbWVudENvbXBvbmVudClcbiAgcGF5bWVudEVsZW1lbnQhOiBTdHJpcGVQYXltZW50RWxlbWVudENvbXBvbmVudFxuICBlbGVtZW50c09wdGlvbnM6IFN0cmlwZVBheW1lbnRFbGVtZW50T3B0aW9uc1xuICBAVmlld0NoaWxkKCdwb3BvdmVyJykgcG9wb3ZlciE6IElvblBvcG92ZXJcbiAgc2VsZWN0ZWRDYXJkSWQ6IHN0cmluZyB8IHVuZGVmaW5lZFxuICBpc09wZW5DbGFzc2ljUGF5bWVudFNoZWV0OiAnaGlkZGVuJyB8ICd2aXNpYmxlJyA9ICdoaWRkZW4nXG4gIHBheW1lbnRNb2RlOlxuICAgIHwgJ2NsYXNzaWMnXG4gICAgfCAnYXBwbGVwYXknXG4gICAgfCAnY2xhc3NpY19hcHBsZXBheSdcbiAgICB8ICdjbGFzc2ljX2dvb2dsZXBheScgPSAnY2xhc3NpYydcbiAgdXNlcjogYW55XG4gIHByb2dyYW06IFJldHJpZXZlUHJvZ3JhbTIwMFJlc3BvbnNlIHwgbnVsbCA9IG51bGxcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheW1lbnRNZXRob2RTZXJ2aWNlOiBQYXltZW50TWV0aG9kc1NlcnZpY2UsXG4gICAgcHVibGljIHN0cmlwZVNlcnZpY2U6IFN0cmlwZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhY2NvdW50U2VydmljZTogQWNjb3VudFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgbG9hZGluZ0N0cmw6IExvYWRpbmdDb250cm9sbGVyLFxuICAgIHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSxcbiAgICBwcml2YXRlIHN0b3JhZ2U6IFN0b3JhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgZXJyb3JIYW5kbGVyOiBFcnJvckhhbmRsZXJTZXJ2aWNlXG4gICkge1xuICAgIGFkZEljb25zKHsgZWxsaXBzaXNIb3Jpem9udGFsLCBsb2dvQXBwbGUsIGxvZ29Hb29nbGUgfSlcblxuICAgIGVmZmVjdCgoKSA9PiB7XG4gICAgICB0aGlzLmN5Y2xpc3RTdGF0ZSA9IHRoaXMuYWNjb3VudFNlcnZpY2UuY3ljbGlzdFN0YXRlKClcbiAgICB9KVxuICAgIGVmZmVjdCgoKSA9PiB7XG4gICAgICB0aGlzLmNhcmRzU3RhdGUgPSB0aGlzLnBheW1lbnRNZXRob2RTZXJ2aWNlLnBheW1lbnRNZXRob2RzU3RhdGUoKVxuICAgIH0pXG4gIH1cblxuICBhc3luYyBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnByb2dyYW0gPSBhd2FpdCB0aGlzLnN0b3JhZ2UuZ2V0KCdwcm9ncmFtJylcbiAgICB0aGlzLnVzZXIgPSBhd2FpdCBmZXRjaFVzZXJBdHRyaWJ1dGVzKClcbiAgICAvL0FGVEVSIENPTkZJUk0gU0VUVVAsIENIRUNLIFRIRSBST1VURSBQQVJBTVNcbiAgICBjb25zdCB1cmxQYXJhbXMgPSB0aGlzLnJvdXRlci5zbmFwc2hvdC5xdWVyeVBhcmFtc1xuICAgIGNvbnN0IHNldHVwSW50ZW50ID0gdXJsUGFyYW1zWydzZXR1cF9pbnRlbnQnXVxuICAgIGNvbnN0IGNsaWVudFNlY3JldCA9IHVybFBhcmFtc1snc2V0dXBfaW50ZW50X2NsaWVudF9zZWNyZXQnXVxuICAgIGNvbnN0IHJlZGlyZWN0U3RhdHVzID0gdXJsUGFyYW1zWydyZWRpcmVjdF9zdGF0dXMnXVxuICAgIGlmIChzZXR1cEludGVudCAmJiBjbGllbnRTZWNyZXQgJiYgcmVkaXJlY3RTdGF0dXMgPT09ICdzdWNjZWVkZWQnKSB7XG4gICAgICB0aGlzLnN0cmlwZVNlcnZpY2UucmV0cmlldmVTZXR1cEludGVudChjbGllbnRTZWNyZXQpLnN1YnNjcmliZSh7XG4gICAgICAgIG5leHQ6IGFzeW5jIChyZXN1bHQpID0+IHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICByZXN1bHQgJiZcbiAgICAgICAgICAgIHJlc3VsdC5zZXR1cEludGVudCAmJlxuICAgICAgICAgICAgcmVzdWx0LnNldHVwSW50ZW50LnBheW1lbnRfbWV0aG9kXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmFjY291bnRTZXJ2aWNlLmxvYWRDeWNsaXN0KClcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0RGVmYXVsdENhcmQoXG4gICAgICAgICAgICAgIHJlc3VsdC5zZXR1cEludGVudC5wYXltZW50X21ldGhvZCBhcyBzdHJpbmdcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAodGhpcy5jYXJkc1N0YXRlLnN0YXRlICE9PSAnc3VjY2VzcycpIHtcbiAgICAgIHRoaXMucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUmVmcmVzaChldmVudDogYW55KSB7XG4gICAgdGhpcy5yZWZyZXNoKCkudGhlbigoKSA9PiB7XG4gICAgICBldmVudC50YXJnZXQuY29tcGxldGUoKVxuICAgIH0pXG4gIH1cblxuICBhc3luYyByZWZyZXNoKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPihhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmNhcmRzU3RhdGUgPSB7IHN0YXRlOiAnbG9hZGluZycgfVxuICAgICAgYXdhaXQgdGhpcy5wYXltZW50TWV0aG9kU2VydmljZS5nZXRQYXltZW50TWV0aG9kcygpXG4gICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBpbml0U3RyaXBlKCkge1xuICAgIHRoaXMuc3RyaXBlU2VydmljZVxuICAgICAgLmluaXRTdHJpcGVFbGVtZW50cyhlbnZpcm9ubWVudC5wcm9ncmFtKVxuICAgICAgLnN1YnNjcmliZShhc3luYyAob3B0aW9ucykgPT4ge1xuICAgICAgICB0aGlzLmVsZW1lbnRzT3B0aW9ucyA9IHtcbiAgICAgICAgICBsYXlvdXQ6IHtcbiAgICAgICAgICAgIHR5cGU6ICdhdXRvJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHdhbGxldHM6IHtcbiAgICAgICAgICAgIGFwcGxlUGF5OiAnYXV0bycsXG4gICAgICAgICAgICBnb29nbGVQYXk6ICdhdXRvJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RyaXBlT3B0aW9ucyA9IG9wdGlvbnNcblxuICAgICAgICBpZiAoQ2FwYWNpdG9yLmdldFBsYXRmb3JtKCkgPT09ICdpb3MnKSB7XG4gICAgICAgICAgY29uc3QgaXNBdmFpbGFibGUgPSBhd2FpdCB0aGlzLnN0cmlwZVNlcnZpY2UuaXNBcHBsZVBheUF2YWlsYWJsZSgpXG4gICAgICAgICAgdGhpcy5wYXltZW50TW9kZSA9IGlzQXZhaWxhYmxlID8gJ2FwcGxlcGF5JyA6ICdjbGFzc2ljJ1xuICAgICAgICAgIHRoaXMuaXNPcGVuQ2xhc3NpY1BheW1lbnRTaGVldCA9ICd2aXNpYmxlJ1xuICAgICAgICB9XG4gICAgICAgIGlmIChDYXBhY2l0b3IuZ2V0UGxhdGZvcm0oKSA9PT0gJ2FuZHJvaWQnKSB7XG4gICAgICAgICAgY29uc3QgaXNBdmFpbGFibGUgPSBhd2FpdCB0aGlzLnN0cmlwZVNlcnZpY2UuaXNHb29nbGVQYXlBdmFpbGFibGUoKVxuICAgICAgICAgIGlmIChpc0F2YWlsYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5vcGVuR29vZ2xlUGF5KClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wYXltZW50TW9kZSA9ICdjbGFzc2ljJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmlzT3BlbkNsYXNzaWNQYXltZW50U2hlZXQgPSAndmlzaWJsZSdcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgaGFuZGxlUGF5bWVudFN1Y2Nlc3MoY2xpZW50U2VjcmV0OiBzdHJpbmcpIHtcbiAgICBjb25zdCBsb2FkaW5nID0gYXdhaXQgdGhpcy5sb2FkaW5nQ3RybC5jcmVhdGUoe1xuICAgICAgbWVzc2FnZTogdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQoJ2xvYWRpbmcuc2F2aW5nX2NhcmQnKSxcbiAgICB9KVxuICAgIGF3YWl0IGxvYWRpbmcucHJlc2VudCgpXG5cbiAgICB0aGlzLnN0cmlwZVNlcnZpY2UucmV0cmlldmVTZXR1cEludGVudChjbGllbnRTZWNyZXQpLnN1YnNjcmliZSh7XG4gICAgICBuZXh0OiBhc3luYyAoc2V0dXBJbnRlbnQpID0+IHtcbiAgICAgICAgaWYgKHNldHVwSW50ZW50Py5zZXR1cEludGVudD8ucGF5bWVudF9tZXRob2QpIHtcbiAgICAgICAgICBhd2FpdCB0aGlzLnNldERlZmF1bHRDYXJkKFxuICAgICAgICAgICAgc2V0dXBJbnRlbnQuc2V0dXBJbnRlbnQucGF5bWVudF9tZXRob2QgYXMgc3RyaW5nXG4gICAgICAgICAgKVxuICAgICAgICAgIHRoaXMuaXNPcGVuQ2xhc3NpY1BheW1lbnRTaGVldCA9ICdoaWRkZW4nXG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgbG9hZGluZy5kaXNtaXNzKClcbiAgICAgIH0sXG4gICAgICBlcnJvcjogYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCBsb2FkaW5nLmRpc21pc3MoKVxuICAgICAgfSxcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgb3BlbkFwcGxlUGF5KG9wdGlvbnM6IFN0cmlwZUVsZW1lbnRzT3B0aW9ucykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnN0cmlwZVNlcnZpY2Uuc2V0dXBBcHBsZVBheShcbiAgICAgICAgb3B0aW9ucy5jbGllbnRTZWNyZXQhLFxuICAgICAgICB0aGlzLnByb2dyYW0/Lm5hbWUgfHwgJycsXG4gICAgICAgIHRoaXMucHJvZ3JhbT8uY29uZmlnPy5hcHBsZXBheV9tZXJjaGFudCB8fCAnJ1xuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0ID09PSAnY29tcGxldGVkJykge1xuICAgICAgICBhd2FpdCB0aGlzLmhhbmRsZVBheW1lbnRTdWNjZXNzKG9wdGlvbnMuY2xpZW50U2VjcmV0ISlcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSAnZmFpbGVkJykge1xuICAgICAgICB0aGlzLmlzT3BlbkNsYXNzaWNQYXltZW50U2hlZXQgPSAndmlzaWJsZSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaXNPcGVuQ2xhc3NpY1BheW1lbnRTaGVldCA9ICd2aXNpYmxlJ1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLmlzT3BlbkNsYXNzaWNQYXltZW50U2hlZXQgPSAndmlzaWJsZSdcbiAgICB9XG4gIH1cblxuICBhc3luYyBvcGVuR29vZ2xlUGF5KCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnN0cmlwZVNlcnZpY2Uuc2V0dXBHb29nbGVQYXkoXG4gICAgICAgIHRoaXMuc3RyaXBlT3B0aW9ucy5jbGllbnRTZWNyZXQhLFxuICAgICAgICB0aGlzLnByb2dyYW0/Lm5hbWUgfHwgJ0Vjb3ZlbG8nXG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQgPT09ICdjb21wbGV0ZWQnKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuaGFuZGxlUGF5bWVudFN1Y2Nlc3ModGhpcy5zdHJpcGVPcHRpb25zLmNsaWVudFNlY3JldCEpXG4gICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gJ2ZhaWxlZCcpIHtcbiAgICAgICAgdGhpcy5pc09wZW5DbGFzc2ljUGF5bWVudFNoZWV0ID0gJ3Zpc2libGUnXG4gICAgICAgIHRoaXMucGF5bWVudE1vZGUgPSAnY2xhc3NpYydcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaXNPcGVuQ2xhc3NpY1BheW1lbnRTaGVldCA9ICd2aXNpYmxlJ1xuICAgICAgICB0aGlzLnBheW1lbnRNb2RlID0gJ2NsYXNzaWMnXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuaXNPcGVuQ2xhc3NpY1BheW1lbnRTaGVldCA9ICd2aXNpYmxlJ1xuICAgICAgdGhpcy5wYXltZW50TW9kZSA9ICdjbGFzc2ljJ1xuICAgIH1cbiAgfVxuXG4gIGdldEljb24oYnJhbmQ6IHN0cmluZyB8IHVuZGVmaW5lZCk6IHN0cmluZyB7XG4gICAgc3dpdGNoIChicmFuZCkge1xuICAgICAgY2FzZSAndmlzYSc6XG4gICAgICAgIHJldHVybiAnLi4vLi4vLi4vYXNzZXRzL3N2Zy9mb250YXdlc29tZS92aXNhLnN2ZydcbiAgICAgIGNhc2UgJ21hc3RlcmNhcmQnOlxuICAgICAgICByZXR1cm4gJy4uLy4uLy4uL2Fzc2V0cy9zdmcvZm9udGF3ZXNvbWUvbWFzdGVyY2FyZC5zdmcnXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJy4uLy4uLy4uL2Fzc2V0cy9zdmcvZm9udGF3ZXNvbWUvY3JlZGl0LWNhcmQuc3ZnJ1xuICAgIH1cbiAgfVxuICBhc3luYyBwcmVzZW50UG9wb3ZlcihlOiBFdmVudCwgY2FyZElkOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNlbGVjdGVkQ2FyZElkID0gY2FyZElkXG4gICAgdGhpcy5wb3BvdmVyLmV2ZW50ID0gZVxuICAgIHJldHVybiB0aGlzLnBvcG92ZXIucHJlc2VudCgpXG4gIH1cbiAgYXN5bmMgY3JlYXRlQ2FyZChlbGVtZW50czogYW55LCBjbGllbnRTZWNyZXQ6IHN0cmluZykge1xuICAgIGNvbnN0IGxvYWRpbmcgPSBhd2FpdCB0aGlzLmxvYWRpbmdDdHJsLmNyZWF0ZSh7XG4gICAgICBtZXNzYWdlOiAnQWpvdXQgZGUgbGEgY2FydGUuLi4nLFxuICAgIH0pXG5cbiAgICBhd2FpdCBsb2FkaW5nLnByZXNlbnQoKVxuXG4gICAgaWYgKHRoaXMudXNlci5uYW1lKSB7XG4gICAgICB0aGlzLnN0cmlwZVNlcnZpY2VcbiAgICAgICAgLmNvbmZpcm1TZXR1cChlbGVtZW50cywgY2xpZW50U2VjcmV0LCB0aGlzLnVzZXIubmFtZSlcbiAgICAgICAgLnN1YnNjcmliZSh7XG4gICAgICAgICAgbmV4dDogYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc09wZW5DbGFzc2ljUGF5bWVudFNoZWV0ID0gJ2hpZGRlbidcbiAgICAgICAgICAgIGF3YWl0IGxvYWRpbmcuZGlzbWlzcygpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnJvcjogYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgYXdhaXQgbG9hZGluZy5kaXNtaXNzKClcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBhd2FpdCBsb2FkaW5nLmRpc21pc3MoKVxuICAgIH1cbiAgfVxuICBhc3luYyBzZXREZWZhdWx0Q2FyZChjYXJkSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IGxvYWRpbmcgPSBhd2FpdCB0aGlzLmxvYWRpbmdDdHJsLmNyZWF0ZSh7XG4gICAgICBtZXNzYWdlOiB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuaW5zdGFudCgnbG9hZGluZy5zYXZpbmdfY2FyZCcpLFxuICAgIH0pXG4gICAgYXdhaXQgbG9hZGluZy5wcmVzZW50KClcbiAgICBhd2FpdCB0aGlzLnBheW1lbnRNZXRob2RTZXJ2aWNlLnNldERlZmF1bHRDYXJkKGNhcmRJZClcbiAgICBhd2FpdCB0aGlzLmxvYWRpbmdDdHJsLmdldFRvcCgpLnRoZW4oYXN5bmMgKGxvYWRpbmcpID0+IHtcbiAgICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICAgIGF3YWl0IGxvYWRpbmcuZGlzbWlzcygpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBhc3luYyBkZWxldGVDYXJkKGNhcmRJZDogc3RyaW5nKSB7XG4gICAgYXdhaXQgdGhpcy5wYXltZW50TWV0aG9kU2VydmljZS5kZWxldGVDYXJkKGNhcmRJZClcbiAgfVxuICBoYW5kbGVQYXltZW50RWxlbWVudENoYW5nZShldmVudDogYW55KSB7XG4gICAgaWYgKFxuICAgICAgZXZlbnQudmFsdWU/LnR5cGUgPT09ICdhcHBsZV9wYXknICYmXG4gICAgICB0aGlzLnBheW1lbnRNb2RlICE9PSAnY2xhc3NpY19hcHBsZXBheSdcbiAgICApIHtcbiAgICAgIHRoaXMucGF5bWVudE1vZGUgPSAnY2xhc3NpY19hcHBsZXBheSdcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgZXZlbnQudmFsdWU/LnR5cGUgPT09ICdnb29nbGVfcGF5JyAmJlxuICAgICAgdGhpcy5wYXltZW50TW9kZSAhPT0gJ2NsYXNzaWNfZ29vZ2xlcGF5J1xuICAgICkge1xuICAgICAgdGhpcy5wYXltZW50TW9kZSA9ICdjbGFzc2ljX2dvb2dsZXBheSdcbiAgICB9IGVsc2UgaWYgKCFldmVudC52YWx1ZT8udHlwZSAmJiB0aGlzLnBheW1lbnRNb2RlICE9PSAnY2xhc3NpYycpIHtcbiAgICAgIHRoaXMucGF5bWVudE1vZGUgPSAnY2xhc3NpYydcbiAgICB9XG4gIH1cbn1cbiIsICI8YXBwLWhlYWRlciBbZGVmYXVsdEhyZWZdPVwiJy9hY2NvdW50J1wiPjwvYXBwLWhlYWRlcj5cblxuPGlvbi1jb250ZW50IGNsYXNzPVwiaW9uLXBhZGRpbmdcIj5cbiAgPGlvbi1yb3cgY2xhc3M9XCJpb24tanVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgIDxpb24tY29sIHNpemU9XCIxMlwiIHNpemUtbWQ9XCI4XCIgc2l6ZS1sZz1cIjZcIj5cbiAgICAgIDxpb24tcmVmcmVzaGVyIHNsb3Q9XCJmaXhlZFwiIChpb25SZWZyZXNoKT1cImhhbmRsZVJlZnJlc2goJGV2ZW50KVwiPlxuICAgICAgICA8aW9uLXJlZnJlc2hlci1jb250ZW50PjwvaW9uLXJlZnJlc2hlci1jb250ZW50PlxuICAgICAgPC9pb24tcmVmcmVzaGVyPlxuXG4gICAgICBAc3dpdGNoIChjYXJkc1N0YXRlLnN0YXRlKSB7IEBjYXNlKFwic3VjY2Vzc1wiKSB7XG4gICAgICA8aDQ+e3tcImNhcmRzLm15X2NhcmRzXCIgfCB0cmFuc2xhdGV9fTwvaDQ+XG4gICAgICA8aW9uLWxpc3QgbGluZXM9XCJub25lXCI+XG4gICAgICAgIDxpb24taXRlbVxuICAgICAgICAgICpuZ0Zvcj1cImxldCBjYXJkIG9mIGNhcmRzU3RhdGUucGF5bWVudE1ldGhvZHNcIlxuICAgICAgICAgIGNsYXNzPVwiaW9uLW1hcmdpbi10b3AgY2FyZC1pdGVtXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxpb24taWNvblxuICAgICAgICAgICAgc2xvdD1cInN0YXJ0XCJcbiAgICAgICAgICAgIFtzcmNdPVwiZ2V0SWNvbihjYXJkLmNhcmQ/LmJyYW5kKVwiXG4gICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgID48L2lvbi1pY29uPlxuICAgICAgICAgIDxpb24tbGFiZWw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhcmQtbnVtYmVyXCI+KioqKnt7IGNhcmQuY2FyZD8ubGFzdDQgfX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJleHBpcnlcIlxuICAgICAgICAgICAgICAgICpuZ0lmPVwiY2FyZC5jYXJkICYmIGNhcmQuY2FyZC5leHBfbW9udGggJiYgY2FyZC5jYXJkLmV4cF95ZWFyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEV4cC4ge3sgY2FyZC5jYXJkLmV4cF9tb250aCA8IDEwID8gJzAnICsgY2FyZC5jYXJkLmV4cF9tb250aCA6XG4gICAgICAgICAgICAgICAgY2FyZC5jYXJkLmV4cF9tb250aCB9fS97e1xuICAgICAgICAgICAgICAgIGNhcmQuY2FyZC5leHBfeWVhci50b1N0cmluZygpLnNsaWNlKC0yKSB9fVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgICAgICA8aW9uLWJhZGdlXG4gICAgICAgICAgICAqbmdJZj1cImNhcmRzU3RhdGUuc3RhdGUgPT09ICdzdWNjZXNzJyAmJiBwYXltZW50TWV0aG9kU2VydmljZS5kZWZhdWx0UGF5bWVudE1ldGhvZCgpPy5pZCA9PT0gY2FyZC5pZFwiXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgY2xhc3M9XCJkZWZhdWx0LWJhZGdlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7eyAnY2FyZHMuZGVmYXVsdCcgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgICA8L2lvbi1iYWRnZT5cbiAgICAgICAgICA8aW9uLWJ1dHRvblxuICAgICAgICAgICAgZmlsbD1cImNsZWFyXCJcbiAgICAgICAgICAgIGNvbG9yPVwiZGFya1wiXG4gICAgICAgICAgICAjcG9wb3ZlckJ1dHRvblxuICAgICAgICAgICAgKGNsaWNrKT1cInByZXNlbnRQb3BvdmVyKCRldmVudCwgY2FyZC5pZCEpXCJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICBzbG90PVwiZW5kXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImVsbGlwc2lzLWhvcml6b250YWxcIj48L2lvbi1pY29uPlxuICAgICAgICAgIDwvaW9uLWJ1dHRvbj5cbiAgICAgICAgPC9pb24taXRlbT5cbiAgICAgIDwvaW9uLWxpc3Q+XG4gICAgICA8aHIgY2xhc3M9XCJkaXZpZGVyXCIgLz5cblxuICAgICAgPGlvbi1wb3BvdmVyXG4gICAgICAgICNwb3BvdmVyXG4gICAgICAgIFtkaXNtaXNzT25TZWxlY3RdPVwidHJ1ZVwiXG4gICAgICAgIFtrZWVwQ29udGVudHNNb3VudGVkXT1cInRydWVcIlxuICAgICAgPlxuICAgICAgICA8bmctdGVtcGxhdGU+XG4gICAgICAgICAgPGlvbi1saXN0PlxuICAgICAgICAgICAgPGlvbi1pdGVtXG4gICAgICAgICAgICAgIGxpbmVzPVwiZnVsbFwiXG4gICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJwYXltZW50TWV0aG9kU2VydmljZS5kZWZhdWx0UGF5bWVudE1ldGhvZCgpPy5pZCA9PT0gc2VsZWN0ZWRDYXJkSWRcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwic2V0RGVmYXVsdENhcmQoc2VsZWN0ZWRDYXJkSWQhKVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxpb24tdGV4dD57eyAnY2FyZHMuc2V0X2RlZmF1bHQnIHwgdHJhbnNsYXRlIH19PC9pb24tdGV4dD5cbiAgICAgICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICAgICAgICA8aW9uLWl0ZW1cbiAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cInBheW1lbnRNZXRob2RTZXJ2aWNlLmRlZmF1bHRQYXltZW50TWV0aG9kKCk/LmlkID09PSBzZWxlY3RlZENhcmRJZFwiXG4gICAgICAgICAgICAgIChjbGljayk9XCJkZWxldGVDYXJkKHNlbGVjdGVkQ2FyZElkISlcIlxuICAgICAgICAgICAgICBsaW5lcz1cIm5vbmVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aW9uLXRleHQgY29sb3I9XCJkYW5nZXJcIlxuICAgICAgICAgICAgICAgID57eyAnY2FyZHMuZGVsZXRlJyB8IHRyYW5zbGF0ZSB9fTwvaW9uLXRleHRcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgICA8L2lvbi1saXN0PlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPC9pb24tcG9wb3Zlcj5cbiAgICAgIH0gQGNhc2UoJ2xvYWRpbmcnKSB7XG4gICAgICA8aW9uLXByb2dyZXNzLWJhciB0eXBlPVwiaW5kZXRlcm1pbmF0ZVwiPjwvaW9uLXByb2dyZXNzLWJhcj5cbiAgICAgIDxpb24tbGlzdCBjbGFzcz1cImlvbi1tYXJnaW4tdG9wXCIgbGluZXM9XCJub25lXCI+XG4gICAgICAgIDxpb24taXRlbVxuICAgICAgICAgICpuZ0Zvcj1cImxldCBpIG9mIFtdLmNvbnN0cnVjdG9yKHNrZWxldG9uQ291bnQpXCJcbiAgICAgICAgICBjbGFzcz1cImlvbi1tYXJnaW4tdG9wXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dFxuICAgICAgICAgICAgc2xvdD1cInN0YXJ0XCJcbiAgICAgICAgICAgIFthbmltYXRlZF09XCJ0cnVlXCJcbiAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDMycHg7IGhlaWdodDogMzJweFwiXG4gICAgICAgICAgPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgICAgPGlvbi1sYWJlbD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dFxuICAgICAgICAgICAgICAgIFthbmltYXRlZF09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiAxMjBweFwiXG4gICAgICAgICAgICAgID48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHRcbiAgICAgICAgICAgICAgICBbYW5pbWF0ZWRdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogODBweFwiXG4gICAgICAgICAgICAgID48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0XG4gICAgICAgICAgICBzbG90PVwiZW5kXCJcbiAgICAgICAgICAgIFthbmltYXRlZF09XCJ0cnVlXCJcbiAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDgwcHg7IGhlaWdodDogMjRweFwiXG4gICAgICAgICAgPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICA8L2lvbi1saXN0PlxuICAgICAgfSBAY2FzZSgnZXJyb3InKSB7XG4gICAgICA8aW9uLXRleHQgY29sb3I9XCJkYW5nZXJcIj4ge3sgY2FyZHNTdGF0ZS5lcnJvciB9fSA8L2lvbi10ZXh0PlxuICAgICAgfSBAY2FzZSgnbm9fZGF0YScpIHtcbiAgICAgIDxpb24tdGV4dCBjb2xvcj1cIm1lZGl1bVwiPiB7eyAnY2FyZHMuZW1wdHknIHwgdHJhbnNsYXRlIH19IDwvaW9uLXRleHQ+XG4gICAgICB9IH1cbiAgICAgIDxpb24tYnV0dG9uXG4gICAgICAgIGNsYXNzPVwiaW9uLW1hcmdpbi10b3BcIlxuICAgICAgICBpZD1cIm9wZW4tbW9kYWxcIlxuICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICBzaGFwZT1cInJvdW5kXCJcbiAgICAgICAgY29sb3I9XCJkYXJrXCJcbiAgICAgICAgZmlsbD1cIm91dGxpbmVcIlxuICAgICAgICAoY2xpY2spPVwiaW5pdFN0cmlwZSgpXCJcbiAgICAgID5cbiAgICAgICAge3sgJ2NhcmRzLmFkZF9jYXJkJyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgPC9pb24tYnV0dG9uPlxuICAgICAgPGlvbi1tb2RhbFxuICAgICAgICBbaXNPcGVuXT1cImlzT3BlbkNsYXNzaWNQYXltZW50U2hlZXQgPT09ICd2aXNpYmxlJ1wiXG4gICAgICAgIChpb25Nb2RhbERpZERpc21pc3MpPVwiaXNPcGVuQ2xhc3NpY1BheW1lbnRTaGVldCA9ICdoaWRkZW4nXCJcbiAgICAgID5cbiAgICAgICAgPG5nLXRlbXBsYXRlPlxuICAgICAgICAgIDxpb24tY29udGVudD5cbiAgICAgICAgICAgIDxpb24taGVhZGVyPlxuICAgICAgICAgICAgICA8aW9uLXRvb2xiYXI+XG4gICAgICAgICAgICAgICAgPGlvbi10aXRsZT57eyAnY2FyZHMuYWRkX2NhcmQnIHwgdHJhbnNsYXRlIH19PC9pb24tdGl0bGU+XG4gICAgICAgICAgICAgICAgPGlvbi1idXR0b25zIHNsb3Q9XCJlbmRcIj5cbiAgICAgICAgICAgICAgICAgIDxpb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJpc09wZW5DbGFzc2ljUGF5bWVudFNoZWV0ID0gJ2hpZGRlbidcIlxuICAgICAgICAgICAgICAgICAgICBzaGFwZT1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cImNsZWFyXCJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJkYXJrXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3tcImdlbmVyaWMuY2xvc2VcIiB8IHRyYW5zbGF0ZX19XG4gICAgICAgICAgICAgICAgICA8L2lvbi1idXR0b24+XG4gICAgICAgICAgICAgICAgPC9pb24tYnV0dG9ucz5cbiAgICAgICAgICAgICAgPC9pb24tdG9vbGJhcj5cbiAgICAgICAgICAgIDwvaW9uLWhlYWRlcj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhc3RyaXBlT3B0aW9uc1wiPlxuICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHRcbiAgICAgICAgICAgICAgICBhbmltYXRlZFxuICAgICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDEwMCU7IGhlaWdodDogNjBweFwiXG4gICAgICAgICAgICAgID48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHRcbiAgICAgICAgICAgICAgICBhbmltYXRlZFxuICAgICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDEwMCU7IGhlaWdodDogNjBweDsgbWFyZ2luOiAxMHB4IDBcIlxuICAgICAgICAgICAgICA+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0XG4gICAgICAgICAgICAgICAgYW5pbWF0ZWRcbiAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiAxMDAlOyBoZWlnaHQ6IDYwcHhcIlxuICAgICAgICAgICAgICA+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwic3RyaXBlT3B0aW9uc1wiIGNsYXNzPVwiaW9uLXBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgPGlvbi1idXR0b25cbiAgICAgICAgICAgICAgICBjbGFzcz1cImlvbi1tYXJnaW4tdmVydGljYWwgYXBwbGUtcGF5LWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJwYXltZW50TW9kZSA9PT0gJ2FwcGxlcGF5J1wiXG4gICAgICAgICAgICAgICAgZXhwYW5kPVwiYmxvY2tcIlxuICAgICAgICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJvcGVuQXBwbGVQYXkoc3RyaXBlT3B0aW9ucylcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJvdXRsaW5lXCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cImRhcmtcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJsb2dvLWFwcGxlXCIgc2xvdD1cInN0YXJ0XCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgICAgICB7eyAnY2FyZHMucGF5X3dpdGhfYXBwbGVfcGF5JyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICAgICAgICA8L2lvbi1idXR0b24+XG4gICAgICAgICAgICAgIDxuZ3gtc3RyaXBlLWVsZW1lbnRzXG4gICAgICAgICAgICAgICAgW3N0cmlwZV09XCJzdHJpcGVTZXJ2aWNlLmdldFN0cmlwZSgpXCJcbiAgICAgICAgICAgICAgICBbZWxlbWVudHNPcHRpb25zXT1cInN0cmlwZU9wdGlvbnNcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwic3RyaXBlLWVsZW1lbnQtY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxuZ3gtc3RyaXBlLXBheW1lbnRcbiAgICAgICAgICAgICAgICAgIFtvcHRpb25zXT1cImVsZW1lbnRzT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cImhhbmRsZVBheW1lbnRFbGVtZW50Q2hhbmdlKCRldmVudClcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbmd4LXN0cmlwZS1lbGVtZW50cz5cblxuICAgICAgICAgICAgICA8aW9uLWJ1dHRvblxuICAgICAgICAgICAgICAgIGV4cGFuZD1cImJsb2NrXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImlvbi1tYXJnaW4tdG9wIGlvbi1tYXJnaW4taG9yaXpvbnRhbFwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImNyZWF0ZUNhcmQocGF5bWVudEVsZW1lbnQuZWxlbWVudHMsIHN0cmlwZU9wdGlvbnMuY2xpZW50U2VjcmV0ISlcIlxuICAgICAgICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJvdXRsaW5lXCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cImRhcmtcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3sgJ2NhcmRzLnNhdmUnIHwgdHJhbnNsYXRlIHwgdXBwZXJjYXNlIH19XG4gICAgICAgICAgICAgIDwvaW9uLWJ1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvaW9uLWNvbnRlbnQ+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8L2lvbi1tb2RhbD5cbiAgICA8L2lvbi1jb2w+XG4gIDwvaW9uLXJvdz5cbjwvaW9uLWNvbnRlbnQ+XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMEJjLElBQUEseUJBQUEsR0FBQSxRQUFBLEVBQUE7QUFJ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aUJBQUEsRUFBQTs7QUFDRixJQUFBLHVCQUFBO0FBQ0EsSUFBQSx5QkFBQSxJQUFBLGFBQUEsRUFBQTtBQUVFLElBQUEscUJBQUEsc0JBQUEsU0FBQSx1RUFBQTtBQUFBLGFBQUEsSUFBQSw0QkFBa0Q7SUFBUSxDQUFBO0FBRTFELElBQUEscUJBQUEsSUFBQSw0Q0FBQSxJQUFBLEdBQUEsYUFBQTtBQXFFRixJQUFBLHVCQUFBLEVBQVksRUFDSixFQUNGOzs7O0FBL01BLElBQUEscUJBQUEsZUFBQSxVQUFBO0FBU04sSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSx5QkFBQSxVQUFBLElBQUEsV0FBQSxXQUFBLFlBQVMsSUFBQSxZQUFULFlBQVMsSUFBQSxZQUFULFVBQU8sSUFBQSxZQUFQLFlBQVMsSUFBQSxFQUFBO0FBeUhQLElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEsNkJBQUEsS0FBQSxzQkFBQSxJQUFBLEdBQUEsZ0JBQUEsR0FBQSxHQUFBO0FBR0EsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSxxQkFBQSxVQUFBLElBQUEsOEJBQUEsU0FBQTs7O0VEekVKO0VBQ0E7RUFDQTtFQUFZO0VBQUE7RUFBQTtFQUNaO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUFlO0VBQ2Y7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUFtQixHQUFBLFFBQUEsQ0FBQSw4ZUFBQSxFQUFBLENBQUE7QUFHakIsSUFBTyxxQkFBUDs7c0VBQU8sb0JBQWtCLENBQUE7VUFsQzlCO3VCQUNXLHVCQUFxQixTQUd0QjtNQUNQO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtPQUNELFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBQUEsUUFBQSxDQUFBLDBhQUFBLEVBQUEsQ0FBQTtnUEFTRCxnQkFBYyxDQUFBO1VBRGI7V0FBVSw2QkFBNkI7TUFHbEIsU0FBTyxDQUFBO1VBQTVCO1dBQVUsU0FBUzs7Ozs2RUFUVCxvQkFBa0IsRUFBQSxXQUFBLHNCQUFBLFVBQUEsaUVBQUEsWUFBQSxHQUFBLENBQUE7QUFBQSxHQUFBOyIsCiAgIm5hbWVzIjogWyJsb2FkaW5nIl0KfQo=
