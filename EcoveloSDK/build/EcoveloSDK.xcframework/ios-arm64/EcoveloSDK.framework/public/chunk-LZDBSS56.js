import {
  BehaviorSubject,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChild,
  Directive,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  NgTemplateOutlet,
  NgZone,
  Optional,
  Output,
  PLATFORM_ID,
  TemplateRef,
  ViewChild,
  filter,
  first,
  from,
  inject,
  isPlatformBrowser,
  isPlatformServer,
  makeEnvironmentProviders,
  map,
  setClassMetadata,
  switchMap,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-DGENMXJW.js";
import {
  registerPlugin
} from "./chunk-KGBWUDTS.js";
import {
  __async,
  __publicField,
  __spreadProps,
  __spreadValues
} from "./chunk-UESUV5PM.js";

// node_modules/ngx-stripe/fesm2022/ngx-stripe.mjs
var _c0 = ["stripeElementRef"];
function StripeAddressComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.loadingTemplate);
  }
}
function StripeAffirmMessageComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.loadingTemplate);
  }
}
function StripeAfterpayClearpayMessageComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.loadingTemplate);
  }
}
function StripeCardComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.loadingTemplate);
  }
}
function StripeCardNumberComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.loadingTemplate);
  }
}
function StripeCardExpiryComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.loadingTemplate);
  }
}
function StripeCardCvcComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.loadingTemplate);
  }
}
function StripeEpsBankComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.loadingTemplate);
  }
}
function StripeExpressCheckoutComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.loadingTemplate);
  }
}
function StripeFpxBankComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.loadingTemplate);
  }
}
function StripeIbanComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.loadingTemplate);
  }
}
function StripeIdealBankComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.loadingTemplate);
  }
}
function StripeIssuingCardCvcDisplayComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.loadingTemplate);
  }
}
function StripeIssuingCardExpiryDisplayComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.loadingTemplate);
  }
}
function StripeIssuingCardNumberDisplayComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.loadingTemplate);
  }
}
function StripeIssuingCardPinDisplayComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.loadingTemplate);
  }
}
function StripeLinkAuthenticationComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.loadingTemplate);
  }
}
function StripeP24BankComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.loadingTemplate);
  }
}
function StripeAuBankAccountComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.loadingTemplate);
  }
}
function StripePaymentMethodMessagingComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.loadingTemplate);
  }
}
var _NgxStripeElementLoadingTemplateDirective = class _NgxStripeElementLoadingTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
__publicField(_NgxStripeElementLoadingTemplateDirective, "\u0275fac", function NgxStripeElementLoadingTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxStripeElementLoadingTemplateDirective)(\u0275\u0275directiveInject(TemplateRef));
});
__publicField(_NgxStripeElementLoadingTemplateDirective, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NgxStripeElementLoadingTemplateDirective,
  selectors: [["", "ngxStripeLoadingTemplate", ""]]
}));
var NgxStripeElementLoadingTemplateDirective = _NgxStripeElementLoadingTemplateDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxStripeElementLoadingTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[ngxStripeLoadingTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var STRIPE_PUBLISHABLE_KEY = new InjectionToken("Stripe Publishable Key");
var STRIPE_OPTIONS = new InjectionToken("Stripe Options");
var NGX_STRIPE_VERSION = new InjectionToken("NGX_STRIPE_VERSION");
var StripeInstance = class {
  version;
  loader;
  window;
  key;
  options;
  stripe$ = new BehaviorSubject(void 0);
  stripe = this.stripe$.asObservable().pipe(filter((stripe) => Boolean(stripe)));
  constructor(version, loader, window2, key, options) {
    this.version = version;
    this.loader = loader;
    this.window = window2;
    this.key = key;
    this.options = options;
    this.loader.asStream().pipe(filter((status) => status.loaded === true), first(), map(() => this.window.getNativeWindow().Stripe)).subscribe((stripeInstance) => {
      const stripe = this.options ? stripeInstance(this.key, this.options) : stripeInstance(this.key);
      stripe.registerAppInfo(this.getNgxStripeAppInfo(this.version));
      this.stripe$.next(stripe);
    });
  }
  getInstance() {
    return this.stripe$.getValue();
  }
  elements(options) {
    return this.stripe.pipe(map((stripe) => stripe.elements(options)), first());
  }
  redirectToCheckout(options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.redirectToCheckout(options))), first());
  }
  confirmPayment(options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmPayment(options))), first());
  }
  confirmAcssDebitPayment(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmAcssDebitPayment(clientSecret, data, options))), first());
  }
  confirmUsBankAccountPayment(clientSecret, data) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmUsBankAccountPayment(clientSecret, data))), first());
  }
  confirmAlipayPayment(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmAlipayPayment(clientSecret, data, options))), first());
  }
  confirmAuBecsDebitPayment(clientSecret, data) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmAuBecsDebitPayment(clientSecret, data))), first());
  }
  confirmBancontactPayment(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmBancontactPayment(clientSecret, data, options))), first());
  }
  confirmBlikPayment(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmBlikPayment(clientSecret, data, options))), first());
  }
  confirmBoletoPayment(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmBoletoPayment(clientSecret, data, options))), first());
  }
  confirmCardPayment(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmCardPayment(clientSecret, data, options))), first());
  }
  confirmCashappPayment(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmCashappPayment(clientSecret, data, options))), first());
  }
  confirmCustomerBalancePayment(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmCustomerBalancePayment(clientSecret, data, options))), first());
  }
  confirmEpsPayment(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmEpsPayment(clientSecret, data, options))), first());
  }
  confirmFpxPayment(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmFpxPayment(clientSecret, data, options))), first());
  }
  confirmGiropayPayment(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmGiropayPayment(clientSecret, data, options))), first());
  }
  confirmGrabPayPayment(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmGrabPayPayment(clientSecret, data, options))), first());
  }
  confirmIdealPayment(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmIdealPayment(clientSecret, data, options))), first());
  }
  confirmKlarnaPayment(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmKlarnaPayment(clientSecret, data, options))), first());
  }
  confirmKonbiniPayment(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmKonbiniPayment(clientSecret, data, options))), first());
  }
  confirmMobilepayPayment(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmMobilepayPayment(clientSecret, data, options))), first());
  }
  confirmMultibancoPayment(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmMultibancoPayment(clientSecret, data, options))), first());
  }
  confirmOxxoPayment(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmOxxoPayment(clientSecret, data, options))), first());
  }
  confirmP24Payment(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmP24Payment(clientSecret, data, options))), first());
  }
  confirmPayNowPayment(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmPayNowPayment(clientSecret, data, options))), first());
  }
  confirmPayPalPayment(clientSecret, data) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmPayPalPayment(clientSecret, data))), first());
  }
  confirmPixPayment(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmPixPayment(clientSecret, data, options))), first());
  }
  confirmPromptPayPayment(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmPromptPayPayment(clientSecret, data, options))), first());
  }
  confirmSepaDebitPayment(clientSecret, data) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmSepaDebitPayment(clientSecret, data))), first());
  }
  confirmSofortPayment(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmSofortPayment(clientSecret, data, options))), first());
  }
  confirmTwintPayment(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmTwintPayment(clientSecret, data, options))), first());
  }
  confirmWechatPayPayment(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmWechatPayPayment(clientSecret, data, options))), first());
  }
  handleCardAction(clientSecret) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.handleCardAction(clientSecret))), first());
  }
  handleNextAction(options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.handleNextAction(options))), first());
  }
  verifyMicrodepositsForPayment(clientSecret, data) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.verifyMicrodepositsForPayment(clientSecret, data))), first());
  }
  createRadarSession() {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.createRadarSession())), first());
  }
  collectBankAccountForPayment(options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.collectBankAccountForPayment(options))), first());
  }
  createPaymentMethod(options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.createPaymentMethod(options))), first());
  }
  createConfirmationToken(options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.createConfirmationToken(options))), first());
  }
  retrievePaymentIntent(clientSecret) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.retrievePaymentIntent(clientSecret))), first());
  }
  confirmSetup(options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmSetup(options))), first());
  }
  confirmAcssDebitSetup(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmAcssDebitSetup(clientSecret, data, options))), first());
  }
  confirmUsBankAccountSetup(clientSecret, data) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmUsBankAccountSetup(clientSecret, data))), first());
  }
  confirmAuBecsDebitSetup(clientSecret, data) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmAuBecsDebitSetup(clientSecret, data))), first());
  }
  confirmBacsDebitSetup(clientSecret, data) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmBacsDebitSetup(clientSecret, data))), first());
  }
  confirmBancontactSetup(clientSecret, data) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmBancontactSetup(clientSecret, data))), first());
  }
  confirmCardSetup(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmCardSetup(clientSecret, data, options))), first());
  }
  confirmCashappSetup(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmCashappSetup(clientSecret, data, options))), first());
  }
  confirmIdealSetup(clientSecret, data) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmIdealSetup(clientSecret, data))), first());
  }
  confirmPayPalSetup(clientSecret, data) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmPayPalSetup(clientSecret, data))), first());
  }
  confirmSepaDebitSetup(clientSecret, data) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmSepaDebitSetup(clientSecret, data))), first());
  }
  confirmSofortSetup(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmSofortSetup(clientSecret, data, options))), first());
  }
  confirmAffirmPayment(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmAffirmPayment(clientSecret, data, options))), first());
  }
  confirmAfterpayClearpayPayment(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmAfterpayClearpayPayment(clientSecret, data, options))), first());
  }
  verifyMicrodepositsForSetup(clientSecret, data) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.verifyMicrodepositsForSetup(clientSecret, data))), first());
  }
  collectBankAccountForSetup(options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.collectBankAccountForSetup(options))), first());
  }
  retrieveSetupIntent(clientSecret) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.retrieveSetupIntent(clientSecret))), first());
  }
  processOrder(options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.processOrder(options))), first());
  }
  retrieveOrder(clientSecret) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.retrieveOrder(clientSecret))), first());
  }
  paymentRequest(options) {
    const stripe = this.getInstance();
    return stripe.paymentRequest(options);
  }
  createToken(tokenType, data) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.createToken(tokenType, data))), first());
  }
  createSource(a, b) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.createSource(a, b))), first());
  }
  retrieveSource(source) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.retrieveSource(source))), first());
  }
  verifyIdentity(clientSecret) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.verifyIdentity(clientSecret))), first());
  }
  collectFinancialConnectionsAccounts(options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.collectFinancialConnectionsAccounts(options))), first());
  }
  collectBankAccountToken(options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.collectBankAccountToken(options))), first());
  }
  createEphemeralKeyNonce(options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.createEphemeralKeyNonce(options))), first());
  }
  initCheckout(options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.initCheckout(options))), first());
  }
  initEmbeddedCheckout(options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.initEmbeddedCheckout(options))), first());
  }
  /**
   * @deprecated
   */
  handleCardPayment(clientSecret, element, data) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.handleCardPayment(clientSecret, element, data))), first());
  }
  /**
   * @deprecated
   */
  confirmPaymentIntent(clientSecret, element, data) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmPaymentIntent(clientSecret, element, data))), first());
  }
  /**
   * @deprecated
   */
  handleCardSetup(clientSecret, element, data) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.handleCardSetup(clientSecret, element, data))), first());
  }
  /**
   * @deprecated
   */
  confirmSetupIntent(clientSecret, element, data) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmSetupIntent(clientSecret, element, data))), first());
  }
  /**
   * @deprecated
   */
  handleFpxPayment(clientSecret, element, data) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.handleFpxPayment(clientSecret, element, data))), first());
  }
  getNgxStripeAppInfo(version) {
    return {
      name: "ngx-stripe",
      url: "https://ngx-stripe.dev",
      partner_id: "pp_partner_JR4l1rmvUoPP4V",
      version
    };
  }
};
var _WindowRef = class _WindowRef {
  platformId;
  constructor(platformId) {
    this.platformId = platformId;
  }
  getNativeWindow() {
    if (isPlatformBrowser(this.platformId)) {
      return window;
    }
    return {};
  }
};
__publicField(_WindowRef, "\u0275fac", function WindowRef_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _WindowRef)(\u0275\u0275inject(PLATFORM_ID));
});
__publicField(_WindowRef, "\u0275prov", /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _WindowRef,
  factory: _WindowRef.\u0275fac
}));
var WindowRef = _WindowRef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WindowRef, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }], null);
})();
var _DocumentRef = class _DocumentRef {
  platformId;
  constructor(platformId) {
    this.platformId = platformId;
  }
  getNativeDocument() {
    if (isPlatformBrowser(this.platformId)) {
      return document;
    }
    return {};
  }
};
__publicField(_DocumentRef, "\u0275fac", function DocumentRef_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DocumentRef)(\u0275\u0275inject(PLATFORM_ID));
});
__publicField(_DocumentRef, "\u0275prov", /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _DocumentRef,
  factory: _DocumentRef.\u0275fac
}));
var DocumentRef = _DocumentRef;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocumentRef, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }], null);
})();
var _LazyStripeAPILoader = class _LazyStripeAPILoader {
  platformId;
  window;
  document;
  zone;
  status = new BehaviorSubject({
    error: false,
    loaded: false,
    loading: false
  });
  constructor(platformId, window2, document2, zone) {
    this.platformId = platformId;
    this.window = window2;
    this.document = document2;
    this.zone = zone;
  }
  asStream() {
    this.load();
    return this.status.asObservable();
  }
  isReady() {
    return this.status.getValue().loaded;
  }
  load() {
    if (isPlatformServer(this.platformId)) {
      return;
    }
    const win = this.window.getNativeWindow();
    const {
      loaded,
      loading,
      error
    } = this.status.getValue();
    if (win.hasOwnProperty("Stripe")) {
      this.status.next({
        loaded: true,
        loading: false,
        error: false
      });
      return;
    }
    if (!loaded && !loading) {
      this.status.next({
        loaded: false,
        loading: true,
        error
      });
      this.zone.runOutsideAngular(() => this.injectScript());
    }
  }
  injectScript() {
    const script = this.document.getNativeDocument().createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.defer = true;
    script.src = "https://js.stripe.com/basil/stripe.js";
    script.onload = () => {
      this.zone.run(() => {
        this.status.next({
          loaded: true,
          loading: false,
          error: false
        });
      });
    };
    script.onerror = () => {
      this.zone.run(() => {
        this.status.next({
          loaded: false,
          loading: false,
          error: true
        });
      });
    };
    this.document.getNativeDocument().body.appendChild(script);
  }
};
__publicField(_LazyStripeAPILoader, "\u0275fac", function LazyStripeAPILoader_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LazyStripeAPILoader)(\u0275\u0275inject(PLATFORM_ID), \u0275\u0275inject(WindowRef), \u0275\u0275inject(DocumentRef), \u0275\u0275inject(NgZone));
});
__publicField(_LazyStripeAPILoader, "\u0275prov", /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _LazyStripeAPILoader,
  factory: _LazyStripeAPILoader.\u0275fac
}));
var LazyStripeAPILoader = _LazyStripeAPILoader;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LazyStripeAPILoader, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: WindowRef
  }, {
    type: DocumentRef
  }, {
    type: NgZone
  }], null);
})();
var _StripeService = class _StripeService {
  version;
  key;
  options;
  loader;
  window;
  stripe;
  constructor(version, key, options, loader, window2) {
    this.version = version;
    this.key = key;
    this.options = options;
    this.loader = loader;
    this.window = window2;
    if (key) {
      this.stripe = new StripeInstance(this.version, this.loader, this.window, key, options);
    }
  }
  getStripeReference() {
    return this.loader.asStream().pipe(filter((status) => status.loaded === true), map(() => this.window.getNativeWindow().Stripe));
  }
  getInstance() {
    return this.stripe.getInstance();
  }
  setKey(key, options) {
    return this.changeKey(key, options);
  }
  changeKey(key, options) {
    this.stripe = new StripeInstance(this.version, this.loader, this.window, key, options);
    return this.stripe;
  }
  elements(options) {
    return this.stripe.elements(options);
  }
  redirectToCheckout(options) {
    return this.stripe.redirectToCheckout(options);
  }
  confirmPayment(options) {
    return this.stripe.confirmPayment(options);
  }
  confirmAcssDebitPayment(clientSecret, data, options) {
    return this.stripe.confirmAcssDebitPayment(clientSecret, data, options);
  }
  confirmUsBankAccountPayment(clientSecret, data) {
    return this.stripe.confirmUsBankAccountPayment(clientSecret, data);
  }
  confirmAlipayPayment(clientSecret, data, options) {
    return this.stripe.confirmAlipayPayment(clientSecret, data, options);
  }
  confirmAuBecsDebitPayment(clientSecret, data) {
    return this.stripe.confirmAuBecsDebitPayment(clientSecret, data);
  }
  confirmBancontactPayment(clientSecret, data, options) {
    return this.stripe.confirmBancontactPayment(clientSecret, data, options);
  }
  confirmBlikPayment(clientSecret, data, options) {
    return this.stripe.confirmBlikPayment(clientSecret, data, options);
  }
  confirmBoletoPayment(clientSecret, data, options) {
    return this.stripe.confirmBoletoPayment(clientSecret, data, options);
  }
  confirmCardPayment(clientSecret, data, options) {
    return this.stripe.confirmCardPayment(clientSecret, data, options);
  }
  confirmCashappPayment(clientSecret, data, options) {
    return this.stripe.confirmCashappPayment(clientSecret, data, options);
  }
  confirmCustomerBalancePayment(clientSecret, data, options) {
    return this.stripe.confirmCustomerBalancePayment(clientSecret, data, options);
  }
  confirmEpsPayment(clientSecret, data, options) {
    return this.stripe.confirmEpsPayment(clientSecret, data, options);
  }
  confirmFpxPayment(clientSecret, data, options) {
    return this.stripe.confirmFpxPayment(clientSecret, data, options);
  }
  confirmGiropayPayment(clientSecret, data, options) {
    return this.stripe.confirmGiropayPayment(clientSecret, data, options);
  }
  confirmGrabPayPayment(clientSecret, data, options) {
    return this.stripe.confirmGrabPayPayment(clientSecret, data, options);
  }
  confirmIdealPayment(clientSecret, data, options) {
    return this.stripe.confirmIdealPayment(clientSecret, data, options);
  }
  confirmKlarnaPayment(clientSecret, data, options) {
    return this.stripe.confirmKlarnaPayment(clientSecret, data, options);
  }
  confirmKonbiniPayment(clientSecret, data, options) {
    return this.stripe.confirmKonbiniPayment(clientSecret, data, options);
  }
  confirmMobilepayPayment(clientSecret, data, options) {
    return this.stripe.confirmMobilepayPayment(clientSecret, data, options);
  }
  confirmMultibancoPayment(clientSecret, data, options) {
    return this.stripe.confirmMultibancoPayment(clientSecret, data, options);
  }
  confirmOxxoPayment(clientSecret, data, options) {
    return this.stripe.confirmOxxoPayment(clientSecret, data, options);
  }
  confirmP24Payment(clientSecret, data, options) {
    return this.stripe.confirmP24Payment(clientSecret, data, options);
  }
  confirmPayNowPayment(clientSecret, data, options) {
    return this.stripe.confirmPayNowPayment(clientSecret, data, options);
  }
  confirmPayPalPayment(clientSecret, data) {
    return this.stripe.confirmPayPalPayment(clientSecret, data);
  }
  confirmPixPayment(clientSecret, data, options) {
    return this.stripe.confirmPixPayment(clientSecret, data, options);
  }
  confirmPromptPayPayment(clientSecret, data, options) {
    return this.stripe.confirmPromptPayPayment(clientSecret, data, options);
  }
  confirmSepaDebitPayment(clientSecret, data) {
    return this.stripe.confirmSepaDebitPayment(clientSecret, data);
  }
  confirmSofortPayment(clientSecret, data, options) {
    return this.stripe.confirmSofortPayment(clientSecret, data, options);
  }
  confirmTwintPayment(clientSecret, data, options) {
    return this.stripe.confirmTwintPayment(clientSecret, data, options);
  }
  confirmWechatPayPayment(clientSecret, data, options) {
    return this.stripe.confirmWechatPayPayment(clientSecret, data, options);
  }
  handleCardAction(clientSecret) {
    return this.stripe.handleCardAction(clientSecret);
  }
  handleNextAction(options) {
    return this.stripe.handleNextAction(options);
  }
  verifyMicrodepositsForPayment(clientSecret, data) {
    return this.stripe.verifyMicrodepositsForPayment(clientSecret, data);
  }
  createRadarSession() {
    return this.stripe.createRadarSession();
  }
  collectBankAccountForPayment(options) {
    return this.stripe.collectBankAccountForPayment(options);
  }
  createPaymentMethod(options) {
    return this.stripe.createPaymentMethod(options);
  }
  createConfirmationToken(options) {
    return this.stripe.createConfirmationToken(options);
  }
  retrievePaymentIntent(clientSecret) {
    return this.stripe.retrievePaymentIntent(clientSecret);
  }
  confirmSetup(options) {
    return this.stripe.confirmSetup(options);
  }
  confirmAcssDebitSetup(clientSecret, data, options) {
    return this.stripe.confirmAcssDebitSetup(clientSecret, data, options);
  }
  confirmUsBankAccountSetup(clientSecret, data) {
    return this.stripe.confirmUsBankAccountSetup(clientSecret, data);
  }
  confirmAuBecsDebitSetup(clientSecret, data) {
    return this.stripe.confirmAuBecsDebitSetup(clientSecret, data);
  }
  confirmBacsDebitSetup(clientSecret, data) {
    return this.stripe.confirmBacsDebitSetup(clientSecret, data);
  }
  confirmBancontactSetup(clientSecret, data) {
    return this.stripe.confirmBancontactSetup(clientSecret, data);
  }
  confirmCardSetup(clientSecret, data, options) {
    return this.stripe.confirmCardSetup(clientSecret, data, options);
  }
  confirmCashappSetup(clientSecret, data, options) {
    return this.stripe.confirmCashappSetup(clientSecret, data, options);
  }
  confirmIdealSetup(clientSecret, data) {
    return this.stripe.confirmIdealSetup(clientSecret, data);
  }
  confirmPayPalSetup(clientSecret, data) {
    return this.stripe.confirmPayPalSetup(clientSecret, data);
  }
  confirmSepaDebitSetup(clientSecret, data) {
    return this.stripe.confirmSepaDebitSetup(clientSecret, data);
  }
  confirmSofortSetup(clientSecret, data, options) {
    return this.stripe.confirmSofortSetup(clientSecret, data, options);
  }
  confirmAffirmPayment(clientSecret, data, options) {
    return this.stripe.confirmAffirmPayment(clientSecret, data, options);
  }
  confirmAfterpayClearpayPayment(clientSecret, data, options) {
    return this.stripe.confirmAfterpayClearpayPayment(clientSecret, data, options);
  }
  verifyMicrodepositsForSetup(clientSecret, data) {
    return this.stripe.verifyMicrodepositsForSetup(clientSecret, data);
  }
  collectBankAccountForSetup(options) {
    return this.stripe.collectBankAccountForSetup(options);
  }
  retrieveSetupIntent(clientSecret) {
    return this.stripe.retrieveSetupIntent(clientSecret);
  }
  processOrder(options) {
    return this.stripe.processOrder(options);
  }
  retrieveOrder(clientSecret) {
    return this.stripe.retrieveOrder(clientSecret);
  }
  paymentRequest(options) {
    return this.stripe.paymentRequest(options);
  }
  createToken(tokenType, data) {
    return this.stripe.createToken(tokenType, data);
  }
  createSource(a, b) {
    return this.stripe.createSource(a, b);
  }
  retrieveSource(source) {
    return this.stripe.retrieveSource(source);
  }
  verifyIdentity(clientSecret) {
    return this.stripe.verifyIdentity(clientSecret);
  }
  collectFinancialConnectionsAccounts(options) {
    return this.stripe.collectFinancialConnectionsAccounts(options);
  }
  collectBankAccountToken(options) {
    return this.stripe.collectBankAccountToken(options);
  }
  createEphemeralKeyNonce(options) {
    return this.stripe.createEphemeralKeyNonce(options);
  }
  initCheckout(options) {
    return this.stripe.initCheckout(options);
  }
  initEmbeddedCheckout(options) {
    return this.stripe.initEmbeddedCheckout(options);
  }
  /**
   * @deprecated
   */
  handleCardPayment(clientSecret, element, data) {
    return this.stripe.handleCardPayment(clientSecret, element, data);
  }
  /**
   * @deprecated
   */
  confirmPaymentIntent(clientSecret, element, data) {
    return this.stripe.confirmPaymentIntent(clientSecret, element, data);
  }
  /**
   * @deprecated
   */
  handleCardSetup(clientSecret, element, data) {
    return this.stripe.handleCardSetup(clientSecret, element, data);
  }
  /**
   * @deprecated
   */
  confirmSetupIntent(clientSecret, element, data) {
    return this.stripe.confirmSetupIntent(clientSecret, element, data);
  }
  /**
   * @deprecated
   */
  handleFpxPayment(clientSecret, element, data) {
    return this.stripe.handleFpxPayment(clientSecret, element, data);
  }
};
__publicField(_StripeService, "\u0275fac", function StripeService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StripeService)(\u0275\u0275inject(NGX_STRIPE_VERSION), \u0275\u0275inject(STRIPE_PUBLISHABLE_KEY), \u0275\u0275inject(STRIPE_OPTIONS), \u0275\u0275inject(LazyStripeAPILoader), \u0275\u0275inject(WindowRef));
});
__publicField(_StripeService, "\u0275prov", /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _StripeService,
  factory: _StripeService.\u0275fac
}));
var StripeService = _StripeService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripeService, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [NGX_STRIPE_VERSION]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [STRIPE_PUBLISHABLE_KEY]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [STRIPE_OPTIONS]
    }]
  }, {
    type: LazyStripeAPILoader
  }, {
    type: WindowRef
  }], null);
})();
var _StripeElementsService = class _StripeElementsService {
  stripeService;
  constructor(stripeService) {
    this.stripeService = stripeService;
  }
  elements(stripe, options = {}) {
    if (stripe) {
      if (Object.keys(options).length > 0) {
        return stripe.elements(options);
      }
      return stripe.elements();
    } else {
      if (Object.keys(options).length > 0) {
        return this.stripeService.elements(options);
      }
      return this.stripeService.elements();
    }
  }
  paymentRequest(stripe, options) {
    return stripe ? stripe.paymentRequest(options) : this.stripeService.paymentRequest(options);
  }
  mergeOptions(options, containerClass) {
    if (!containerClass || options && options.classes) {
      return options || {};
    }
    if (!options || !options.classes) {
      return __spreadProps(__spreadValues({}, options || {}), {
        classes: {
          base: containerClass,
          complete: `${containerClass}--complete`,
          empty: `${containerClass}--empty`,
          focus: `${containerClass}--focus`,
          invalid: `${containerClass}--invalid`,
          webkitAutoFill: `${containerClass}--webkit-autoFill`
        }
      });
    }
    return options || {};
  }
};
__publicField(_StripeElementsService, "\u0275fac", function StripeElementsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StripeElementsService)(\u0275\u0275inject(StripeService));
});
__publicField(_StripeElementsService, "\u0275prov", /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _StripeElementsService,
  factory: _StripeElementsService.\u0275fac
}));
var StripeElementsService = _StripeElementsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripeElementsService, [{
    type: Injectable
  }], () => [{
    type: StripeService
  }], null);
})();
var _StripeElementsDirective = class _StripeElementsDirective {
  stripeElementsService;
  elementsOptions;
  stripe;
  elements = new EventEmitter();
  _elements;
  state = "notready";
  constructor(stripeElementsService) {
    this.stripeElementsService = stripeElementsService;
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      this.state = "starting";
      const elementsOptions = this.elementsOptions;
      const stripe = this.stripe;
      if (!stripe) {
        this.state = "notready";
        return;
      }
      if (changes.elementsOptions) {
        if (this._elements) {
          const payload = Object.keys(elementsOptions).reduce((acc, key) => {
            if (elementsOptions[key] !== changes.elementsOptions.previousValue[key] && !["fonts", "loader", "clientSecret"].includes(key)) {
              acc[key] = elementsOptions[key];
            }
            return acc;
          }, {});
          this._elements.update(payload);
        } else {
          this._elements = yield this.stripeElementsService.elements(stripe, elementsOptions).toPromise();
          this.elements.emit(this._elements);
          this.state = "ready";
        }
      }
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      if (this.state === "notready") {
        this.state = "starting";
        this._elements = yield this.stripeElementsService.elements(this.stripe).toPromise();
        this.elements.emit(this._elements);
        this.state = "ready";
      }
    });
  }
  fetchUpdates() {
    if (!this._elements) return null;
    return from(this._elements.fetchUpdates());
  }
  update(options) {
    if (!this._elements) return null;
    return this._elements.update(options);
  }
  submit() {
    if (!this._elements) return null;
    return from(this._elements.submit());
  }
  getElement(elementType) {
    if (!this._elements) return null;
    switch (elementType) {
      case "address":
        return this._elements.getElement("address");
      case "paymentMethodMessaging":
        return this._elements.getElement("paymentMethodMessaging");
      case "affirmMessage":
        return this._elements.getElement("affirmMessage");
      case "afterpayClearpayMessage":
        return this._elements.getElement("afterpayClearpayMessage");
      case "auBankAccount":
        return this._elements.getElement("auBankAccount");
      case "card":
        return this._elements.getElement("card");
      case "cardNumber":
        return this._elements.getElement("cardNumber");
      case "cardExpiry":
        return this._elements.getElement("cardExpiry");
      case "cardCvc":
        return this._elements.getElement("cardCvc");
      case "fpxBank":
        return this._elements.getElement("fpxBank");
      case "epsBank":
        return this._elements.getElement("epsBank");
      case "p24Bank":
        return this._elements.getElement("p24Bank");
      case "iban":
        return this._elements.getElement("iban");
      case "idealBank":
        return this._elements.getElement("idealBank");
      case "linkAuthentication":
        return this._elements.getElement("linkAuthentication");
      case "expressCheckout":
        return this._elements.getElement("expressCheckout");
      case "payment":
        return this._elements.getElement("payment");
      case "paymentRequestButton":
        return this._elements.getElement("paymentRequestButton");
      case "shippingAddress":
        return this._elements.getElement("shippingAddress");
      default:
        return this._elements.getElement(elementType);
    }
  }
};
__publicField(_StripeElementsDirective, "\u0275fac", function StripeElementsDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StripeElementsDirective)(\u0275\u0275directiveInject(StripeElementsService));
});
__publicField(_StripeElementsDirective, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _StripeElementsDirective,
  selectors: [["ngx-stripe-elements"], ["", "ngxStripeElements", ""]],
  inputs: {
    elementsOptions: "elementsOptions",
    stripe: "stripe"
  },
  outputs: {
    elements: "elements"
  },
  features: [\u0275\u0275NgOnChangesFeature]
}));
var StripeElementsDirective = _StripeElementsDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripeElementsDirective, [{
    type: Directive,
    args: [{
      selector: "ngx-stripe-elements,[ngxStripeElements]",
      standalone: true
    }]
  }], () => [{
    type: StripeElementsService
  }], {
    elementsOptions: [{
      type: Input
    }],
    stripe: [{
      type: Input
    }],
    elements: [{
      type: Output
    }]
  });
})();
var _StripeAddressComponent = class _StripeAddressComponent {
  stripeElementsService;
  elementsProvider;
  loadingTemplate;
  stripeElementRef;
  element;
  containerClass;
  options;
  elementsOptions;
  stripe;
  load = new EventEmitter();
  blur = new EventEmitter();
  change = new EventEmitter();
  focus = new EventEmitter();
  ready = new EventEmitter();
  escape = new EventEmitter();
  loaderror = new EventEmitter();
  loaderstart = new EventEmitter();
  elements;
  state = "notready";
  elementsSubscription;
  constructor(stripeElementsService, elementsProvider) {
    this.stripeElementsService = stripeElementsService;
    this.elementsProvider = elementsProvider;
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      this.state = "starting";
      let updateElements = false;
      if (!this.elementsProvider && (changes.elementsOptions || changes.stripe || !this.elements)) {
        this.elements = yield this.stripeElementsService.elements(this.stripe, this.elementsOptions).toPromise();
        updateElements = true;
      }
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (changes.options || changes.containerClass || !this.element || updateElements) {
        if (this.element && !updateElements) {
          this.update(options);
        } else if (this.elements && updateElements) {
          this.createElement(options);
        }
      }
      this.state = "ready";
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (this.elementsProvider) {
        this.elementsSubscription = this.elementsProvider.elements.subscribe((elements) => {
          this.elements = elements;
          this.createElement(options);
          this.state = "ready";
        });
      } else if (this.state === "notready") {
        this.state = "starting";
        this.elements = yield this.stripeElementsService.elements(this.stripe).toPromise();
        this.createElement(options);
        this.state = "ready";
      }
    });
  }
  ngOnDestroy() {
    if (this.element) {
      this.element.destroy();
    }
    if (this.elementsSubscription) {
      this.elementsSubscription.unsubscribe();
    }
  }
  update(options) {
    return this.element.update(options);
  }
  getValue() {
    const address = this.elements.getElement("address");
    return address.getValue();
  }
  /**
   * @deprecated
   */
  getAddressElement() {
    return this.element;
  }
  createElement(options) {
    if (this.element) {
      this.element.unmount();
    }
    this.element = this.elements.create("address", options);
    this.element.on("change", (ev) => this.change.emit(ev));
    this.element.on("blur", () => this.blur.emit());
    this.element.on("focus", () => this.focus.emit());
    this.element.on("ready", () => this.ready.emit());
    this.element.on("escape", () => this.escape.emit());
    this.element.on("loaderror", () => this.loaderror.emit());
    this.element.on("loaderstart", () => this.loaderstart.emit());
    this.element.mount(this.stripeElementRef.nativeElement);
    this.load.emit(this.element);
  }
};
__publicField(_StripeAddressComponent, "\u0275fac", function StripeAddressComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StripeAddressComponent)(\u0275\u0275directiveInject(StripeElementsService), \u0275\u0275directiveInject(StripeElementsDirective, 8));
});
__publicField(_StripeAddressComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _StripeAddressComponent,
  selectors: [["ngx-stripe-address"]],
  contentQueries: function StripeAddressComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, NgxStripeElementLoadingTemplateDirective, 5, TemplateRef);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loadingTemplate = _t.first);
    }
  },
  viewQuery: function StripeAddressComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.stripeElementRef = _t.first);
    }
  },
  inputs: {
    containerClass: "containerClass",
    options: "options",
    elementsOptions: "elementsOptions",
    stripe: "stripe"
  },
  outputs: {
    load: "load",
    blur: "blur",
    change: "change",
    focus: "focus",
    ready: "ready",
    escape: "escape",
    loaderror: "loaderror",
    loaderstart: "loaderstart"
  },
  features: [\u0275\u0275NgOnChangesFeature],
  decls: 3,
  vars: 1,
  consts: [["stripeElementRef", ""], [1, "field"], [3, "ngTemplateOutlet"]],
  template: function StripeAddressComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1, 0);
      \u0275\u0275template(2, StripeAddressComponent_Conditional_2_Template, 1, 1, "ng-container", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.state !== "ready" && ctx.loadingTemplate ? 2 : -1);
    }
  },
  dependencies: [CommonModule, NgTemplateOutlet],
  encapsulation: 2
}));
var StripeAddressComponent = _StripeAddressComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripeAddressComponent, [{
    type: Component,
    args: [{
      selector: "ngx-stripe-address",
      standalone: true,
      template: `
    <div class="field" #stripeElementRef>
      @if (state !== 'ready' && loadingTemplate) {
        <ng-container [ngTemplateOutlet]="loadingTemplate" />
      }
    </div>
  `,
      imports: [CommonModule]
    }]
  }], () => [{
    type: StripeElementsService
  }, {
    type: StripeElementsDirective,
    decorators: [{
      type: Optional
    }]
  }], {
    loadingTemplate: [{
      type: ContentChild,
      args: [NgxStripeElementLoadingTemplateDirective, {
        read: TemplateRef
      }]
    }],
    stripeElementRef: [{
      type: ViewChild,
      args: ["stripeElementRef"]
    }],
    containerClass: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    elementsOptions: [{
      type: Input
    }],
    stripe: [{
      type: Input
    }],
    load: [{
      type: Output
    }],
    blur: [{
      type: Output
    }],
    change: [{
      type: Output
    }],
    focus: [{
      type: Output
    }],
    ready: [{
      type: Output
    }],
    escape: [{
      type: Output
    }],
    loaderror: [{
      type: Output
    }],
    loaderstart: [{
      type: Output
    }]
  });
})();
var _StripeAffirmMessageComponent = class _StripeAffirmMessageComponent {
  stripeElementsService;
  elementsProvider;
  loadingTemplate;
  stripeElementRef;
  element;
  containerClass;
  options;
  elementsOptions;
  stripe;
  load = new EventEmitter();
  ready = new EventEmitter();
  elements;
  state = "notready";
  elementsSubscription;
  constructor(stripeElementsService, elementsProvider) {
    this.stripeElementsService = stripeElementsService;
    this.elementsProvider = elementsProvider;
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      this.state = "starting";
      let updateElements = false;
      if (!this.elementsProvider && (changes.elementsOptions || changes.stripe || !this.elements)) {
        this.elements = yield this.stripeElementsService.elements(this.stripe, this.elementsOptions).toPromise();
        updateElements = true;
      }
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (changes.options || changes.containerClass || !this.element || updateElements) {
        if (this.element && !updateElements) {
          this.update(options);
        } else if (this.elements && updateElements) {
          this.createElement(options);
        }
      }
      this.state = "ready";
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (this.elementsProvider) {
        this.elementsSubscription = this.elementsProvider.elements.subscribe((elements) => {
          this.elements = elements;
          this.createElement(options);
          this.state = "ready";
        });
      } else if (this.state === "notready") {
        this.state = "starting";
        this.elements = yield this.stripeElementsService.elements(this.stripe).toPromise();
        this.createElement(options);
        this.state = "ready";
      }
    });
  }
  ngOnDestroy() {
    if (this.element) {
      this.element.destroy();
    }
    if (this.elementsSubscription) {
      this.elementsSubscription.unsubscribe();
    }
  }
  update(options) {
    this.element.update(options);
  }
  /**
   * @deprecated
   */
  getAffirmMessage() {
    return this.element;
  }
  createElement(options) {
    if (this.element) {
      this.element.unmount();
    }
    this.element = this.elements.create("affirmMessage", options);
    this.element.on("ready", () => this.ready.emit());
    this.element.mount(this.stripeElementRef.nativeElement);
    this.load.emit(this.element);
  }
};
__publicField(_StripeAffirmMessageComponent, "\u0275fac", function StripeAffirmMessageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StripeAffirmMessageComponent)(\u0275\u0275directiveInject(StripeElementsService), \u0275\u0275directiveInject(StripeElementsDirective, 8));
});
__publicField(_StripeAffirmMessageComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _StripeAffirmMessageComponent,
  selectors: [["ngx-stripe-affirm-message"]],
  contentQueries: function StripeAffirmMessageComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, NgxStripeElementLoadingTemplateDirective, 5, TemplateRef);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loadingTemplate = _t.first);
    }
  },
  viewQuery: function StripeAffirmMessageComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.stripeElementRef = _t.first);
    }
  },
  inputs: {
    containerClass: "containerClass",
    options: "options",
    elementsOptions: "elementsOptions",
    stripe: "stripe"
  },
  outputs: {
    load: "load",
    ready: "ready"
  },
  features: [\u0275\u0275NgOnChangesFeature],
  decls: 3,
  vars: 1,
  consts: [["stripeElementRef", ""], [1, "field"], [3, "ngTemplateOutlet"]],
  template: function StripeAffirmMessageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1, 0);
      \u0275\u0275template(2, StripeAffirmMessageComponent_Conditional_2_Template, 1, 1, "ng-container", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.state !== "ready" && ctx.loadingTemplate ? 2 : -1);
    }
  },
  dependencies: [CommonModule, NgTemplateOutlet],
  encapsulation: 2
}));
var StripeAffirmMessageComponent = _StripeAffirmMessageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripeAffirmMessageComponent, [{
    type: Component,
    args: [{
      selector: "ngx-stripe-affirm-message",
      standalone: true,
      template: `
    <div class="field" #stripeElementRef>
      @if (state !== 'ready' && loadingTemplate) {
        <ng-container [ngTemplateOutlet]="loadingTemplate" />
      }
    </div>
  `,
      imports: [CommonModule]
    }]
  }], () => [{
    type: StripeElementsService
  }, {
    type: StripeElementsDirective,
    decorators: [{
      type: Optional
    }]
  }], {
    loadingTemplate: [{
      type: ContentChild,
      args: [NgxStripeElementLoadingTemplateDirective, {
        read: TemplateRef
      }]
    }],
    stripeElementRef: [{
      type: ViewChild,
      args: ["stripeElementRef"]
    }],
    containerClass: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    elementsOptions: [{
      type: Input
    }],
    stripe: [{
      type: Input
    }],
    load: [{
      type: Output
    }],
    ready: [{
      type: Output
    }]
  });
})();
var _StripeAfterpayClearpayMessageComponent = class _StripeAfterpayClearpayMessageComponent {
  stripeElementsService;
  elementsProvider;
  loadingTemplate;
  stripeElementRef;
  element;
  containerClass;
  options;
  elementsOptions;
  stripe;
  load = new EventEmitter();
  ready = new EventEmitter();
  elements;
  state = "notready";
  elementsSubscription;
  constructor(stripeElementsService, elementsProvider) {
    this.stripeElementsService = stripeElementsService;
    this.elementsProvider = elementsProvider;
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      this.state = "starting";
      let updateElements = false;
      if (!this.elementsProvider && (changes.elementsOptions || changes.stripe || !this.elements)) {
        this.elements = yield this.stripeElementsService.elements(this.stripe, this.elementsOptions).toPromise();
        updateElements = true;
      }
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (changes.options || changes.containerClass || !this.element || updateElements) {
        if (this.element && !updateElements) {
          this.update(options);
        } else if (this.elements && updateElements) {
          this.createElement(options);
        }
      }
      this.state = "ready";
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (this.elementsProvider) {
        this.elementsSubscription = this.elementsProvider.elements.subscribe((elements) => {
          this.elements = elements;
          this.createElement(options);
          this.state = "ready";
        });
      } else if (this.state === "notready") {
        this.state = "starting";
        this.elements = yield this.stripeElementsService.elements(this.stripe).toPromise();
        this.createElement(options);
        this.state = "ready";
      }
    });
  }
  ngOnDestroy() {
    if (this.element) {
      this.element.destroy();
    }
    if (this.elementsSubscription) {
      this.elementsSubscription.unsubscribe();
    }
  }
  update(options) {
    this.element.update(options);
  }
  /**
   * @deprecated
   */
  getAfterpayClearpayMessage() {
    return this.element;
  }
  createElement(options) {
    if (this.element) {
      this.element.unmount();
    }
    this.element = this.elements.create("afterpayClearpayMessage", options);
    this.element.on("ready", () => this.ready.emit());
    this.element.mount(this.stripeElementRef.nativeElement);
    this.load.emit(this.element);
  }
};
__publicField(_StripeAfterpayClearpayMessageComponent, "\u0275fac", function StripeAfterpayClearpayMessageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StripeAfterpayClearpayMessageComponent)(\u0275\u0275directiveInject(StripeElementsService), \u0275\u0275directiveInject(StripeElementsDirective, 8));
});
__publicField(_StripeAfterpayClearpayMessageComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _StripeAfterpayClearpayMessageComponent,
  selectors: [["ngx-stripe-afterpay-clearpay-message"]],
  contentQueries: function StripeAfterpayClearpayMessageComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, NgxStripeElementLoadingTemplateDirective, 5, TemplateRef);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loadingTemplate = _t.first);
    }
  },
  viewQuery: function StripeAfterpayClearpayMessageComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.stripeElementRef = _t.first);
    }
  },
  inputs: {
    containerClass: "containerClass",
    options: "options",
    elementsOptions: "elementsOptions",
    stripe: "stripe"
  },
  outputs: {
    load: "load",
    ready: "ready"
  },
  features: [\u0275\u0275NgOnChangesFeature],
  decls: 3,
  vars: 1,
  consts: [["stripeElementRef", ""], [1, "field"], [3, "ngTemplateOutlet"]],
  template: function StripeAfterpayClearpayMessageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1, 0);
      \u0275\u0275template(2, StripeAfterpayClearpayMessageComponent_Conditional_2_Template, 1, 1, "ng-container", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.state !== "ready" && ctx.loadingTemplate ? 2 : -1);
    }
  },
  dependencies: [CommonModule, NgTemplateOutlet],
  encapsulation: 2
}));
var StripeAfterpayClearpayMessageComponent = _StripeAfterpayClearpayMessageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripeAfterpayClearpayMessageComponent, [{
    type: Component,
    args: [{
      selector: "ngx-stripe-afterpay-clearpay-message",
      standalone: true,
      template: `
    <div class="field" #stripeElementRef>
      @if (state !== 'ready' && loadingTemplate) {
        <ng-container [ngTemplateOutlet]="loadingTemplate" />
      }
    </div>
  `,
      imports: [CommonModule]
    }]
  }], () => [{
    type: StripeElementsService
  }, {
    type: StripeElementsDirective,
    decorators: [{
      type: Optional
    }]
  }], {
    loadingTemplate: [{
      type: ContentChild,
      args: [NgxStripeElementLoadingTemplateDirective, {
        read: TemplateRef
      }]
    }],
    stripeElementRef: [{
      type: ViewChild,
      args: ["stripeElementRef"]
    }],
    containerClass: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    elementsOptions: [{
      type: Input
    }],
    stripe: [{
      type: Input
    }],
    load: [{
      type: Output
    }],
    ready: [{
      type: Output
    }]
  });
})();
var _StripeCardComponent = class _StripeCardComponent {
  cdr;
  stripeElementsService;
  elementsProvider;
  loadingTemplate;
  stripeElementRef;
  element;
  containerClass;
  options;
  elementsOptions;
  stripe;
  load = new EventEmitter();
  blur = new EventEmitter();
  change = new EventEmitter();
  focus = new EventEmitter();
  ready = new EventEmitter();
  escape = new EventEmitter();
  elements;
  state = "notready";
  elementsSubscription;
  constructor(cdr, stripeElementsService, elementsProvider) {
    this.cdr = cdr;
    this.stripeElementsService = stripeElementsService;
    this.elementsProvider = elementsProvider;
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      this.state = "starting";
      let updateElements = false;
      if (!this.elementsProvider && (changes.elementsOptions || changes.stripe || !this.elements)) {
        this.elements = yield this.stripeElementsService.elements(this.stripe, this.elementsOptions).toPromise();
        updateElements = true;
      }
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (changes.options || changes.containerClass || !this.element || updateElements) {
        if (this.element && !updateElements) {
          this.update(options);
        } else if (this.elements && updateElements) {
          this.createElement(options);
        }
      }
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (this.elementsProvider) {
        this.elementsSubscription = this.elementsProvider.elements.subscribe((elements) => {
          this.elements = elements;
          this.createElement(options);
        });
      } else if (this.state === "notready") {
        this.state = "starting";
        this.elements = yield this.stripeElementsService.elements(this.stripe).toPromise();
        this.createElement(options);
      }
    });
  }
  ngOnDestroy() {
    if (this.element) {
      this.element.destroy();
    }
    if (this.elementsSubscription) {
      this.elementsSubscription.unsubscribe();
    }
  }
  update(options) {
    this.element.update(options);
  }
  /**
   * @deprecated
   */
  getCard() {
    return this.element;
  }
  createElement(options = {}) {
    this.state = "ready";
    this.cdr.detectChanges();
    if (this.element) {
      this.element.unmount();
    }
    this.element = this.elements.create("card", options);
    this.element.on("change", (ev) => this.change.emit(ev));
    this.element.on("blur", () => this.blur.emit());
    this.element.on("focus", () => this.focus.emit());
    this.element.on("ready", () => this.ready.emit());
    this.element.on("escape", () => this.escape.emit());
    this.element.mount(this.stripeElementRef.nativeElement);
    this.load.emit(this.element);
  }
};
__publicField(_StripeCardComponent, "\u0275fac", function StripeCardComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StripeCardComponent)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(StripeElementsService), \u0275\u0275directiveInject(StripeElementsDirective, 8));
});
__publicField(_StripeCardComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _StripeCardComponent,
  selectors: [["ngx-stripe-card"]],
  contentQueries: function StripeCardComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, NgxStripeElementLoadingTemplateDirective, 5, TemplateRef);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loadingTemplate = _t.first);
    }
  },
  viewQuery: function StripeCardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.stripeElementRef = _t.first);
    }
  },
  inputs: {
    containerClass: "containerClass",
    options: "options",
    elementsOptions: "elementsOptions",
    stripe: "stripe"
  },
  outputs: {
    load: "load",
    blur: "blur",
    change: "change",
    focus: "focus",
    ready: "ready",
    escape: "escape"
  },
  features: [\u0275\u0275NgOnChangesFeature],
  decls: 3,
  vars: 1,
  consts: [["stripeElementRef", ""], [1, "field"], [3, "ngTemplateOutlet"]],
  template: function StripeCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1, 0);
      \u0275\u0275template(2, StripeCardComponent_Conditional_2_Template, 1, 1, "ng-container", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.state !== "ready" && ctx.loadingTemplate ? 2 : -1);
    }
  },
  dependencies: [CommonModule, NgTemplateOutlet],
  encapsulation: 2
}));
var StripeCardComponent = _StripeCardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripeCardComponent, [{
    type: Component,
    args: [{
      selector: "ngx-stripe-card",
      standalone: true,
      template: `
    <div class="field" #stripeElementRef>
      @if (state !== 'ready' && loadingTemplate) {
        <ng-container [ngTemplateOutlet]="loadingTemplate" />
      }
    </div>
  `,
      imports: [CommonModule]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: StripeElementsService
  }, {
    type: StripeElementsDirective,
    decorators: [{
      type: Optional
    }]
  }], {
    loadingTemplate: [{
      type: ContentChild,
      args: [NgxStripeElementLoadingTemplateDirective, {
        read: TemplateRef
      }]
    }],
    stripeElementRef: [{
      type: ViewChild,
      args: ["stripeElementRef"]
    }],
    containerClass: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    elementsOptions: [{
      type: Input
    }],
    stripe: [{
      type: Input
    }],
    load: [{
      type: Output
    }],
    blur: [{
      type: Output
    }],
    change: [{
      type: Output
    }],
    focus: [{
      type: Output
    }],
    ready: [{
      type: Output
    }],
    escape: [{
      type: Output
    }]
  });
})();
var _StripeCardGroupDirective = class _StripeCardGroupDirective {
  stripeElementsService;
  elementsOptions;
  stripe;
  elements = new EventEmitter();
  load = new EventEmitter();
  blur = new EventEmitter();
  change = new EventEmitter();
  focus = new EventEmitter();
  ready = new EventEmitter();
  escape = new EventEmitter();
  _elements;
  state = "notready";
  constructor(stripeElementsService) {
    this.stripeElementsService = stripeElementsService;
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      this.state = "starting";
      const elementsOptions = this.elementsOptions;
      const stripe = this.stripe;
      if (changes.elementsOptions || changes.stripe || !this._elements) {
        this._elements = yield this.stripeElementsService.elements(stripe, elementsOptions).toPromise();
        this.elements.emit(this._elements);
      }
      this.state = "ready";
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      if (this.state === "notready") {
        this.state = "starting";
        this._elements = yield this.stripeElementsService.elements(this.stripe).toPromise();
        this.elements.emit(this._elements);
        this.state = "ready";
      }
    });
  }
};
__publicField(_StripeCardGroupDirective, "\u0275fac", function StripeCardGroupDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StripeCardGroupDirective)(\u0275\u0275directiveInject(StripeElementsService));
});
__publicField(_StripeCardGroupDirective, "\u0275dir", /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _StripeCardGroupDirective,
  selectors: [["ngx-stripe-card-group"], ["", "ngxStripeCardGroup", ""]],
  inputs: {
    elementsOptions: "elementsOptions",
    stripe: "stripe"
  },
  outputs: {
    elements: "elements",
    load: "load",
    blur: "blur",
    change: "change",
    focus: "focus",
    ready: "ready",
    escape: "escape"
  },
  features: [\u0275\u0275NgOnChangesFeature]
}));
var StripeCardGroupDirective = _StripeCardGroupDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripeCardGroupDirective, [{
    type: Directive,
    args: [{
      selector: "ngx-stripe-card-group,[ngxStripeCardGroup]",
      standalone: true
    }]
  }], () => [{
    type: StripeElementsService
  }], {
    elementsOptions: [{
      type: Input
    }],
    stripe: [{
      type: Input
    }],
    elements: [{
      type: Output
    }],
    load: [{
      type: Output
    }],
    blur: [{
      type: Output
    }],
    change: [{
      type: Output
    }],
    focus: [{
      type: Output
    }],
    ready: [{
      type: Output
    }],
    escape: [{
      type: Output
    }]
  });
})();
var _StripeCardNumberComponent = class _StripeCardNumberComponent {
  stripeElementsService;
  cardGroup;
  elementsProvider;
  loadingTemplate;
  stripeElementRef;
  element;
  containerClass;
  options;
  load = new EventEmitter();
  blur = new EventEmitter();
  change = new EventEmitter();
  focus = new EventEmitter();
  ready = new EventEmitter();
  escape = new EventEmitter();
  elements;
  elementsSubscription;
  constructor(stripeElementsService, cardGroup, elementsProvider) {
    this.stripeElementsService = stripeElementsService;
    this.cardGroup = cardGroup;
    this.elementsProvider = elementsProvider;
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      if (changes.options || changes.containerClass) {
        this.setupElement("options");
      }
    });
  }
  ngOnInit() {
    if (this.cardGroup) {
      this.elementsSubscription = this.cardGroup.elements.subscribe((elements) => {
        this.elements = elements;
        this.setupElement("elements");
      });
    } else if (this.elementsProvider) {
      this.elementsSubscription = this.elementsProvider.elements.subscribe((elements) => {
        this.elements = elements;
        this.setupElement("elements");
      });
    } else {
      throw new Error("StripeCardNumberComponent must have StripeCardGroupDirective or StripeElementsDirective parent");
    }
  }
  ngOnDestroy() {
    if (this.element) {
      this.element.destroy();
    }
    if (this.elementsSubscription) {
      this.elementsSubscription.unsubscribe();
    }
  }
  update(options) {
    this.element.update(options);
  }
  /**
   * @deprecated
   */
  getCardNumber() {
    return this.element;
  }
  setupElement(source) {
    var _a;
    const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
    if (this.element && source === "options") {
      this.update(options);
    } else if (this.elements && source === "elements") {
      this.element = this.elements.create("cardNumber", options);
      this.element.on("change", (ev) => {
        var _a2;
        this.change.emit(ev);
        (_a2 = this.cardGroup) == null ? void 0 : _a2.change.emit(ev);
      });
      this.element.on("blur", () => {
        var _a2;
        this.blur.emit();
        (_a2 = this.cardGroup) == null ? void 0 : _a2.blur.emit();
      });
      this.element.on("focus", () => {
        var _a2;
        this.focus.emit();
        (_a2 = this.cardGroup) == null ? void 0 : _a2.focus.emit();
      });
      this.element.on("ready", () => {
        var _a2;
        this.ready.emit();
        (_a2 = this.cardGroup) == null ? void 0 : _a2.ready.emit();
      });
      this.element.on("escape", () => {
        var _a2;
        this.escape.emit();
        (_a2 = this.cardGroup) == null ? void 0 : _a2.escape.emit();
      });
      this.element.mount(this.stripeElementRef.nativeElement);
      this.load.emit(this.element);
      (_a = this.cardGroup) == null ? void 0 : _a.load.emit(this.element);
    }
  }
};
__publicField(_StripeCardNumberComponent, "\u0275fac", function StripeCardNumberComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StripeCardNumberComponent)(\u0275\u0275directiveInject(StripeElementsService), \u0275\u0275directiveInject(StripeCardGroupDirective, 8), \u0275\u0275directiveInject(StripeElementsDirective, 8));
});
__publicField(_StripeCardNumberComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _StripeCardNumberComponent,
  selectors: [["ngx-stripe-card-number"]],
  contentQueries: function StripeCardNumberComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, NgxStripeElementLoadingTemplateDirective, 5, TemplateRef);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loadingTemplate = _t.first);
    }
  },
  viewQuery: function StripeCardNumberComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.stripeElementRef = _t.first);
    }
  },
  inputs: {
    containerClass: "containerClass",
    options: "options"
  },
  outputs: {
    load: "load",
    blur: "blur",
    change: "change",
    focus: "focus",
    ready: "ready",
    escape: "escape"
  },
  features: [\u0275\u0275NgOnChangesFeature],
  decls: 3,
  vars: 1,
  consts: [["stripeElementRef", ""], [1, "field"], [3, "ngTemplateOutlet"]],
  template: function StripeCardNumberComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1, 0);
      \u0275\u0275template(2, StripeCardNumberComponent_Conditional_2_Template, 1, 1, "ng-container", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.cardGroup && ctx.cardGroup.state !== "ready" && ctx.loadingTemplate ? 2 : -1);
    }
  },
  dependencies: [CommonModule, NgTemplateOutlet],
  encapsulation: 2
}));
var StripeCardNumberComponent = _StripeCardNumberComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripeCardNumberComponent, [{
    type: Component,
    args: [{
      selector: "ngx-stripe-card-number",
      standalone: true,
      template: `
    <div class="field" #stripeElementRef>
      @if (cardGroup && cardGroup.state !== 'ready' && loadingTemplate) {
        <ng-container [ngTemplateOutlet]="loadingTemplate" />
      }
    </div>
  `,
      imports: [CommonModule]
    }]
  }], () => [{
    type: StripeElementsService
  }, {
    type: StripeCardGroupDirective,
    decorators: [{
      type: Optional
    }]
  }, {
    type: StripeElementsDirective,
    decorators: [{
      type: Optional
    }]
  }], {
    loadingTemplate: [{
      type: ContentChild,
      args: [NgxStripeElementLoadingTemplateDirective, {
        read: TemplateRef
      }]
    }],
    stripeElementRef: [{
      type: ViewChild,
      args: ["stripeElementRef"]
    }],
    containerClass: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    load: [{
      type: Output
    }],
    blur: [{
      type: Output
    }],
    change: [{
      type: Output
    }],
    focus: [{
      type: Output
    }],
    ready: [{
      type: Output
    }],
    escape: [{
      type: Output
    }]
  });
})();
var _StripeCardExpiryComponent = class _StripeCardExpiryComponent {
  stripeElementsService;
  cardGroup;
  elementsProvider;
  loadingTemplate;
  stripeElementRef;
  element;
  containerClass;
  options;
  load = new EventEmitter();
  blur = new EventEmitter();
  change = new EventEmitter();
  focus = new EventEmitter();
  ready = new EventEmitter();
  escape = new EventEmitter();
  elements;
  elementsSubscription;
  constructor(stripeElementsService, cardGroup, elementsProvider) {
    this.stripeElementsService = stripeElementsService;
    this.cardGroup = cardGroup;
    this.elementsProvider = elementsProvider;
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      if (changes.options || changes.containerClass) {
        this.setupElement("options");
      }
    });
  }
  ngOnInit() {
    if (this.cardGroup) {
      this.elementsSubscription = this.cardGroup.elements.subscribe((elements) => {
        this.elements = elements;
        this.setupElement("elements");
      });
    } else if (this.elementsProvider) {
      this.elementsSubscription = this.elementsProvider.elements.subscribe((elements) => {
        this.elements = elements;
        this.setupElement("elements");
      });
    } else {
      throw new Error("StripeCardExpiryComponent must have StripeCardGroupDirective or StripeElementsDirective parent");
    }
  }
  ngOnDestroy() {
    if (this.element) {
      this.element.destroy();
    }
    if (this.elementsSubscription) {
      this.elementsSubscription.unsubscribe();
    }
  }
  update(options) {
    this.element.update(options);
  }
  /**
   * @deprecated
   */
  getCardExpiry() {
    return this.element;
  }
  setupElement(source) {
    var _a;
    const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
    if (this.element && source === "options") {
      this.update(options);
    } else if (this.elements && source === "elements") {
      this.element = this.elements.create("cardExpiry", options);
      this.element.on("change", (ev) => {
        var _a2;
        this.change.emit(ev);
        (_a2 = this.cardGroup) == null ? void 0 : _a2.change.emit(ev);
      });
      this.element.on("blur", () => {
        var _a2;
        this.blur.emit();
        (_a2 = this.cardGroup) == null ? void 0 : _a2.blur.emit();
      });
      this.element.on("focus", () => {
        var _a2;
        this.focus.emit();
        (_a2 = this.cardGroup) == null ? void 0 : _a2.focus.emit();
      });
      this.element.on("ready", () => {
        var _a2;
        this.ready.emit();
        (_a2 = this.cardGroup) == null ? void 0 : _a2.ready.emit();
      });
      this.element.on("escape", () => {
        var _a2;
        this.escape.emit();
        (_a2 = this.cardGroup) == null ? void 0 : _a2.escape.emit();
      });
      this.element.mount(this.stripeElementRef.nativeElement);
      this.load.emit(this.element);
      (_a = this.cardGroup) == null ? void 0 : _a.load.emit(this.element);
    }
  }
};
__publicField(_StripeCardExpiryComponent, "\u0275fac", function StripeCardExpiryComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StripeCardExpiryComponent)(\u0275\u0275directiveInject(StripeElementsService), \u0275\u0275directiveInject(StripeCardGroupDirective, 8), \u0275\u0275directiveInject(StripeElementsDirective, 8));
});
__publicField(_StripeCardExpiryComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _StripeCardExpiryComponent,
  selectors: [["ngx-stripe-card-expiry"]],
  contentQueries: function StripeCardExpiryComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, NgxStripeElementLoadingTemplateDirective, 5, TemplateRef);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loadingTemplate = _t.first);
    }
  },
  viewQuery: function StripeCardExpiryComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.stripeElementRef = _t.first);
    }
  },
  inputs: {
    containerClass: "containerClass",
    options: "options"
  },
  outputs: {
    load: "load",
    blur: "blur",
    change: "change",
    focus: "focus",
    ready: "ready",
    escape: "escape"
  },
  features: [\u0275\u0275NgOnChangesFeature],
  decls: 3,
  vars: 1,
  consts: [["stripeElementRef", ""], [1, "field"], [3, "ngTemplateOutlet"]],
  template: function StripeCardExpiryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1, 0);
      \u0275\u0275template(2, StripeCardExpiryComponent_Conditional_2_Template, 1, 1, "ng-container", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.cardGroup && ctx.cardGroup.state !== "ready" && ctx.loadingTemplate ? 2 : -1);
    }
  },
  dependencies: [CommonModule, NgTemplateOutlet],
  encapsulation: 2
}));
var StripeCardExpiryComponent = _StripeCardExpiryComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripeCardExpiryComponent, [{
    type: Component,
    args: [{
      selector: "ngx-stripe-card-expiry",
      standalone: true,
      template: `
    <div class="field" #stripeElementRef>
      @if (cardGroup && cardGroup.state !== 'ready' && loadingTemplate) {
        <ng-container [ngTemplateOutlet]="loadingTemplate" />
      }
    </div>
  `,
      imports: [CommonModule]
    }]
  }], () => [{
    type: StripeElementsService
  }, {
    type: StripeCardGroupDirective,
    decorators: [{
      type: Optional
    }]
  }, {
    type: StripeElementsDirective,
    decorators: [{
      type: Optional
    }]
  }], {
    loadingTemplate: [{
      type: ContentChild,
      args: [NgxStripeElementLoadingTemplateDirective, {
        read: TemplateRef
      }]
    }],
    stripeElementRef: [{
      type: ViewChild,
      args: ["stripeElementRef"]
    }],
    containerClass: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    load: [{
      type: Output
    }],
    blur: [{
      type: Output
    }],
    change: [{
      type: Output
    }],
    focus: [{
      type: Output
    }],
    ready: [{
      type: Output
    }],
    escape: [{
      type: Output
    }]
  });
})();
var _StripeCardCvcComponent = class _StripeCardCvcComponent {
  stripeElementsService;
  cardGroup;
  elementsProvider;
  loadingTemplate;
  stripeElementRef;
  element;
  containerClass;
  options;
  load = new EventEmitter();
  blur = new EventEmitter();
  change = new EventEmitter();
  focus = new EventEmitter();
  ready = new EventEmitter();
  escape = new EventEmitter();
  elements;
  elementsSubscription;
  constructor(stripeElementsService, cardGroup, elementsProvider) {
    this.stripeElementsService = stripeElementsService;
    this.cardGroup = cardGroup;
    this.elementsProvider = elementsProvider;
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      if (changes.options || changes.containerClass) {
        this.setupElement("options");
      }
    });
  }
  ngOnInit() {
    if (this.cardGroup) {
      this.elementsSubscription = this.cardGroup.elements.subscribe((elements) => {
        this.elements = elements;
        this.setupElement("elements");
      });
    } else if (this.elementsProvider) {
      this.elementsSubscription = this.elementsProvider.elements.subscribe((elements) => {
        this.elements = elements;
        this.setupElement("elements");
      });
    } else {
      throw new Error("StripeCardCvcComponent must have StripeCardGroupDirective or StripeElementsDirective parent");
    }
  }
  ngOnDestroy() {
    if (this.element) {
      this.element.destroy();
    }
    if (this.elementsSubscription) {
      this.elementsSubscription.unsubscribe();
    }
  }
  update(options) {
    this.element.update(options);
  }
  /**
   * @deprecated
   */
  getCardCvc() {
    return this.element;
  }
  setupElement(source) {
    var _a;
    const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
    if (this.element && source === "options") {
      this.update(options);
    } else if (this.elements && source === "elements") {
      this.element = this.elements.create("cardCvc", options);
      this.element.on("change", (ev) => {
        var _a2;
        this.change.emit(ev);
        (_a2 = this.cardGroup) == null ? void 0 : _a2.change.emit(ev);
      });
      this.element.on("blur", () => {
        var _a2;
        this.blur.emit();
        (_a2 = this.cardGroup) == null ? void 0 : _a2.blur.emit();
      });
      this.element.on("focus", () => {
        var _a2;
        this.focus.emit();
        (_a2 = this.cardGroup) == null ? void 0 : _a2.focus.emit();
      });
      this.element.on("ready", () => {
        var _a2;
        this.ready.emit();
        (_a2 = this.cardGroup) == null ? void 0 : _a2.ready.emit();
      });
      this.element.on("escape", () => {
        var _a2;
        this.escape.emit();
        (_a2 = this.cardGroup) == null ? void 0 : _a2.escape.emit();
      });
      this.element.mount(this.stripeElementRef.nativeElement);
      this.load.emit(this.element);
      (_a = this.cardGroup) == null ? void 0 : _a.load.emit(this.element);
    }
  }
};
__publicField(_StripeCardCvcComponent, "\u0275fac", function StripeCardCvcComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StripeCardCvcComponent)(\u0275\u0275directiveInject(StripeElementsService), \u0275\u0275directiveInject(StripeCardGroupDirective, 8), \u0275\u0275directiveInject(StripeElementsDirective, 8));
});
__publicField(_StripeCardCvcComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _StripeCardCvcComponent,
  selectors: [["ngx-stripe-card-cvc"]],
  contentQueries: function StripeCardCvcComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, NgxStripeElementLoadingTemplateDirective, 5, TemplateRef);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loadingTemplate = _t.first);
    }
  },
  viewQuery: function StripeCardCvcComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.stripeElementRef = _t.first);
    }
  },
  inputs: {
    containerClass: "containerClass",
    options: "options"
  },
  outputs: {
    load: "load",
    blur: "blur",
    change: "change",
    focus: "focus",
    ready: "ready",
    escape: "escape"
  },
  features: [\u0275\u0275NgOnChangesFeature],
  decls: 3,
  vars: 1,
  consts: [["stripeElementRef", ""], [1, "field"], [3, "ngTemplateOutlet"]],
  template: function StripeCardCvcComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1, 0);
      \u0275\u0275template(2, StripeCardCvcComponent_Conditional_2_Template, 1, 1, "ng-container", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.cardGroup && ctx.cardGroup.state !== "ready" && ctx.loadingTemplate ? 2 : -1);
    }
  },
  dependencies: [CommonModule, NgTemplateOutlet],
  encapsulation: 2
}));
var StripeCardCvcComponent = _StripeCardCvcComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripeCardCvcComponent, [{
    type: Component,
    args: [{
      selector: "ngx-stripe-card-cvc",
      standalone: true,
      template: `
    <div class="field" #stripeElementRef>
      @if (cardGroup && cardGroup.state !== 'ready' && loadingTemplate) {
        <ng-container [ngTemplateOutlet]="loadingTemplate" />
      }
    </div>
  `,
      imports: [CommonModule]
    }]
  }], () => [{
    type: StripeElementsService
  }, {
    type: StripeCardGroupDirective,
    decorators: [{
      type: Optional
    }]
  }, {
    type: StripeElementsDirective,
    decorators: [{
      type: Optional
    }]
  }], {
    loadingTemplate: [{
      type: ContentChild,
      args: [NgxStripeElementLoadingTemplateDirective, {
        read: TemplateRef
      }]
    }],
    stripeElementRef: [{
      type: ViewChild,
      args: ["stripeElementRef"]
    }],
    containerClass: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    load: [{
      type: Output
    }],
    blur: [{
      type: Output
    }],
    change: [{
      type: Output
    }],
    focus: [{
      type: Output
    }],
    ready: [{
      type: Output
    }],
    escape: [{
      type: Output
    }]
  });
})();
var _StripeEpsBankComponent = class _StripeEpsBankComponent {
  stripeElementsService;
  elementsProvider;
  loadingTemplate;
  stripeElementRef;
  element;
  containerClass;
  options;
  elementsOptions;
  stripe;
  load = new EventEmitter();
  blur = new EventEmitter();
  change = new EventEmitter();
  focus = new EventEmitter();
  ready = new EventEmitter();
  escape = new EventEmitter();
  elements;
  state = "notready";
  elementsSubscription;
  constructor(stripeElementsService, elementsProvider) {
    this.stripeElementsService = stripeElementsService;
    this.elementsProvider = elementsProvider;
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      this.state = "starting";
      let updateElements = false;
      if (!this.elementsProvider && (changes.elementsOptions || changes.stripe || !this.elements)) {
        this.elements = yield this.stripeElementsService.elements(this.stripe, this.elementsOptions).toPromise();
        updateElements = true;
      }
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (changes.options || changes.containerClass || !this.element || updateElements) {
        if (this.element && !updateElements) {
          this.update(options);
        } else if (this.elements && updateElements) {
          this.createElement(options);
        }
      }
      this.state = "ready";
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (this.elementsProvider) {
        this.elementsSubscription = this.elementsProvider.elements.subscribe((elements) => {
          this.elements = elements;
          this.createElement(options);
          this.state = "ready";
        });
      } else if (this.state === "notready") {
        this.state = "starting";
        this.elements = yield this.stripeElementsService.elements(this.stripe).toPromise();
        this.createElement(options);
        this.state = "ready";
      }
    });
  }
  ngOnDestroy() {
    if (this.element) {
      this.element.destroy();
    }
    if (this.elementsSubscription) {
      this.elementsSubscription.unsubscribe();
    }
  }
  update(options) {
    this.element.update(options);
  }
  /**
   * @deprecated
   */
  getEpsBankelement() {
    return this.element;
  }
  createElement(options) {
    if (this.element) {
      this.element.unmount();
    }
    this.element = this.elements.create("epsBank", options);
    this.element.on("change", (ev) => this.change.emit(ev));
    this.element.on("blur", () => this.blur.emit());
    this.element.on("focus", () => this.focus.emit());
    this.element.on("ready", () => this.ready.emit());
    this.element.on("escape", () => this.escape.emit());
    this.element.mount(this.stripeElementRef.nativeElement);
    this.load.emit(this.element);
  }
};
__publicField(_StripeEpsBankComponent, "\u0275fac", function StripeEpsBankComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StripeEpsBankComponent)(\u0275\u0275directiveInject(StripeElementsService), \u0275\u0275directiveInject(StripeElementsDirective, 8));
});
__publicField(_StripeEpsBankComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _StripeEpsBankComponent,
  selectors: [["ngx-stripe-eps-bank"]],
  contentQueries: function StripeEpsBankComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, NgxStripeElementLoadingTemplateDirective, 5, TemplateRef);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loadingTemplate = _t.first);
    }
  },
  viewQuery: function StripeEpsBankComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.stripeElementRef = _t.first);
    }
  },
  inputs: {
    containerClass: "containerClass",
    options: "options",
    elementsOptions: "elementsOptions",
    stripe: "stripe"
  },
  outputs: {
    load: "load",
    blur: "blur",
    change: "change",
    focus: "focus",
    ready: "ready",
    escape: "escape"
  },
  features: [\u0275\u0275NgOnChangesFeature],
  decls: 3,
  vars: 1,
  consts: [["stripeElementRef", ""], [1, "field"], [3, "ngTemplateOutlet"]],
  template: function StripeEpsBankComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1, 0);
      \u0275\u0275template(2, StripeEpsBankComponent_Conditional_2_Template, 1, 1, "ng-container", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.state !== "ready" && ctx.loadingTemplate ? 2 : -1);
    }
  },
  dependencies: [CommonModule, NgTemplateOutlet],
  encapsulation: 2
}));
var StripeEpsBankComponent = _StripeEpsBankComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripeEpsBankComponent, [{
    type: Component,
    args: [{
      selector: "ngx-stripe-eps-bank",
      standalone: true,
      template: `
    <div class="field" #stripeElementRef>
      @if (state !== 'ready' && loadingTemplate) {
        <ng-container [ngTemplateOutlet]="loadingTemplate" />
      }
    </div>
  `,
      imports: [CommonModule]
    }]
  }], () => [{
    type: StripeElementsService
  }, {
    type: StripeElementsDirective,
    decorators: [{
      type: Optional
    }]
  }], {
    loadingTemplate: [{
      type: ContentChild,
      args: [NgxStripeElementLoadingTemplateDirective, {
        read: TemplateRef
      }]
    }],
    stripeElementRef: [{
      type: ViewChild,
      args: ["stripeElementRef"]
    }],
    containerClass: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    elementsOptions: [{
      type: Input
    }],
    stripe: [{
      type: Input
    }],
    load: [{
      type: Output
    }],
    blur: [{
      type: Output
    }],
    change: [{
      type: Output
    }],
    focus: [{
      type: Output
    }],
    ready: [{
      type: Output
    }],
    escape: [{
      type: Output
    }]
  });
})();
var _StripeExpressCheckoutComponent = class _StripeExpressCheckoutComponent {
  stripeElementsService;
  elementsProvider;
  loadingTemplate;
  stripeElementRef;
  element;
  containerClass;
  options;
  elementsOptions;
  stripe;
  load = new EventEmitter();
  blur = new EventEmitter();
  cancel = new EventEmitter();
  clicked = new EventEmitter();
  confirm = new EventEmitter();
  focus = new EventEmitter();
  ready = new EventEmitter();
  escape = new EventEmitter();
  loaderror = new EventEmitter();
  shippingaddresschange = new EventEmitter();
  shippingratechange = new EventEmitter();
  elements;
  state = "notready";
  elementsSubscription;
  constructor(stripeElementsService, elementsProvider) {
    this.stripeElementsService = stripeElementsService;
    this.elementsProvider = elementsProvider;
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      this.state = "starting";
      let updateElements = false;
      if (!this.elementsProvider && (changes.elementsOptions || changes.stripe || !this.elements)) {
        this.elements = yield this.stripeElementsService.elements(this.stripe, this.elementsOptions).toPromise();
        updateElements = true;
      }
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (changes.options || changes.containerClass || !this.element || updateElements) {
        if (this.elements && updateElements) {
          this.createElement(options);
        }
      }
      this.state = "ready";
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (this.elementsProvider) {
        this.elementsSubscription = this.elementsProvider.elements.subscribe((elements) => {
          this.elements = elements;
          this.createElement(options);
          this.state = "ready";
        });
      } else if (this.state === "notready") {
        this.state = "starting";
        this.elements = yield this.stripeElementsService.elements(this.stripe).toPromise();
        this.createElement(options);
        this.state = "ready";
      }
    });
  }
  ngOnDestroy() {
    if (this.element) {
      this.element.destroy();
    }
    if (this.elementsSubscription) {
      this.elementsSubscription.unsubscribe();
    }
  }
  update(options) {
    return this.element.update(options);
  }
  /**
   * @deprecated
   */
  getLinkAuthenticationElement() {
    return this.element;
  }
  createElement(options) {
    if (this.element) {
      this.element.unmount();
    }
    this.element = this.elements.create("expressCheckout", options);
    this.element.on("blur", () => this.blur.emit());
    this.element.on("cancel", () => this.cancel.emit());
    this.element.on("click", (ev) => this.clicked.emit(ev));
    this.element.on("confirm", (ev) => this.confirm.emit(ev));
    this.element.on("focus", () => this.focus.emit());
    this.element.on("ready", (ev) => this.ready.emit(ev));
    this.element.on("escape", () => this.escape.emit());
    this.element.on("loaderror", (err) => this.loaderror.emit(err));
    this.element.on("shippingaddresschange", (ev) => this.shippingaddresschange.emit(ev));
    this.element.on("shippingratechange", (ev) => this.shippingratechange.emit(ev));
    this.element.mount(this.stripeElementRef.nativeElement);
    this.load.emit(this.element);
  }
};
__publicField(_StripeExpressCheckoutComponent, "\u0275fac", function StripeExpressCheckoutComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StripeExpressCheckoutComponent)(\u0275\u0275directiveInject(StripeElementsService), \u0275\u0275directiveInject(StripeElementsDirective, 8));
});
__publicField(_StripeExpressCheckoutComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _StripeExpressCheckoutComponent,
  selectors: [["ngx-stripe-express-checkout"]],
  contentQueries: function StripeExpressCheckoutComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, NgxStripeElementLoadingTemplateDirective, 5, TemplateRef);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loadingTemplate = _t.first);
    }
  },
  viewQuery: function StripeExpressCheckoutComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.stripeElementRef = _t.first);
    }
  },
  inputs: {
    containerClass: "containerClass",
    options: "options",
    elementsOptions: "elementsOptions",
    stripe: "stripe"
  },
  outputs: {
    load: "load",
    blur: "blur",
    cancel: "cancel",
    clicked: "clicked",
    confirm: "confirm",
    focus: "focus",
    ready: "ready",
    escape: "escape",
    loaderror: "loaderror",
    shippingaddresschange: "shippingaddresschange",
    shippingratechange: "shippingratechange"
  },
  features: [\u0275\u0275NgOnChangesFeature],
  decls: 3,
  vars: 1,
  consts: [["stripeElementRef", ""], [1, "field"], [3, "ngTemplateOutlet"]],
  template: function StripeExpressCheckoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1, 0);
      \u0275\u0275template(2, StripeExpressCheckoutComponent_Conditional_2_Template, 1, 1, "ng-container", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.state !== "ready" && ctx.loadingTemplate ? 2 : -1);
    }
  },
  dependencies: [CommonModule, NgTemplateOutlet],
  encapsulation: 2
}));
var StripeExpressCheckoutComponent = _StripeExpressCheckoutComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripeExpressCheckoutComponent, [{
    type: Component,
    args: [{
      selector: "ngx-stripe-express-checkout",
      standalone: true,
      template: `
    <div class="field" #stripeElementRef>
      @if (state !== 'ready' && loadingTemplate) {
        <ng-container [ngTemplateOutlet]="loadingTemplate" />
      }
    </div>
  `,
      imports: [CommonModule]
    }]
  }], () => [{
    type: StripeElementsService
  }, {
    type: StripeElementsDirective,
    decorators: [{
      type: Optional
    }]
  }], {
    loadingTemplate: [{
      type: ContentChild,
      args: [NgxStripeElementLoadingTemplateDirective, {
        read: TemplateRef
      }]
    }],
    stripeElementRef: [{
      type: ViewChild,
      args: ["stripeElementRef"]
    }],
    containerClass: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    elementsOptions: [{
      type: Input
    }],
    stripe: [{
      type: Input
    }],
    load: [{
      type: Output
    }],
    blur: [{
      type: Output
    }],
    cancel: [{
      type: Output
    }],
    clicked: [{
      type: Output
    }],
    confirm: [{
      type: Output
    }],
    focus: [{
      type: Output
    }],
    ready: [{
      type: Output
    }],
    escape: [{
      type: Output
    }],
    loaderror: [{
      type: Output
    }],
    shippingaddresschange: [{
      type: Output
    }],
    shippingratechange: [{
      type: Output
    }]
  });
})();
var _StripeFpxBankComponent = class _StripeFpxBankComponent {
  stripeElementsService;
  elementsProvider;
  loadingTemplate;
  stripeElementRef;
  element;
  containerClass;
  options;
  elementsOptions;
  stripe;
  load = new EventEmitter();
  blur = new EventEmitter();
  change = new EventEmitter();
  focus = new EventEmitter();
  ready = new EventEmitter();
  escape = new EventEmitter();
  elements;
  state = "notready";
  elementsSubscription;
  constructor(stripeElementsService, elementsProvider) {
    this.stripeElementsService = stripeElementsService;
    this.elementsProvider = elementsProvider;
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      this.state = "starting";
      let updateElements = false;
      if (!this.elementsProvider && (changes.elementsOptions || changes.stripe || !this.elements)) {
        this.elements = yield this.stripeElementsService.elements(this.stripe, this.elementsOptions).toPromise();
        updateElements = true;
      }
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (changes.options || changes.containerClass || !this.element || updateElements) {
        if (this.element && !updateElements) {
          this.update(options);
        } else if (this.elements && updateElements) {
          this.createElement(options);
        }
      }
      this.state = "ready";
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (this.elementsProvider) {
        this.elementsSubscription = this.elementsProvider.elements.subscribe((elements) => {
          this.elements = elements;
          this.createElement(options);
          this.state = "ready";
        });
      } else if (this.state === "notready") {
        this.state = "starting";
        this.elements = yield this.stripeElementsService.elements(this.stripe).toPromise();
        this.createElement(options);
        this.state = "ready";
      }
    });
  }
  ngOnDestroy() {
    if (this.element) {
      this.element.destroy();
    }
    if (this.elementsSubscription) {
      this.elementsSubscription.unsubscribe();
    }
  }
  update(options) {
    this.element.update(options);
  }
  /**
   * @deprecated
   */
  getFpxBank() {
    return this.element;
  }
  createElement(options = {
    accountHolderType: "individual"
  }) {
    if (this.element) {
      this.element.unmount();
    }
    this.element = this.elements.create("fpxBank", options);
    this.element.on("change", (ev) => this.change.emit(ev));
    this.element.on("blur", () => this.blur.emit());
    this.element.on("focus", () => this.focus.emit());
    this.element.on("ready", () => this.ready.emit());
    this.element.on("escape", () => this.escape.emit());
    this.element.mount(this.stripeElementRef.nativeElement);
    this.load.emit(this.element);
  }
};
__publicField(_StripeFpxBankComponent, "\u0275fac", function StripeFpxBankComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StripeFpxBankComponent)(\u0275\u0275directiveInject(StripeElementsService), \u0275\u0275directiveInject(StripeElementsDirective, 8));
});
__publicField(_StripeFpxBankComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _StripeFpxBankComponent,
  selectors: [["ngx-stripe-fpx-bank"]],
  contentQueries: function StripeFpxBankComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, NgxStripeElementLoadingTemplateDirective, 5, TemplateRef);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loadingTemplate = _t.first);
    }
  },
  viewQuery: function StripeFpxBankComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.stripeElementRef = _t.first);
    }
  },
  inputs: {
    containerClass: "containerClass",
    options: "options",
    elementsOptions: "elementsOptions",
    stripe: "stripe"
  },
  outputs: {
    load: "load",
    blur: "blur",
    change: "change",
    focus: "focus",
    ready: "ready",
    escape: "escape"
  },
  features: [\u0275\u0275NgOnChangesFeature],
  decls: 3,
  vars: 1,
  consts: [["stripeElementRef", ""], [1, "field"], [3, "ngTemplateOutlet"]],
  template: function StripeFpxBankComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1, 0);
      \u0275\u0275template(2, StripeFpxBankComponent_Conditional_2_Template, 1, 1, "ng-container", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.state !== "ready" && ctx.loadingTemplate ? 2 : -1);
    }
  },
  dependencies: [CommonModule, NgTemplateOutlet],
  encapsulation: 2
}));
var StripeFpxBankComponent = _StripeFpxBankComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripeFpxBankComponent, [{
    type: Component,
    args: [{
      selector: "ngx-stripe-fpx-bank",
      standalone: true,
      template: `
    <div class="field" #stripeElementRef>
      @if (state !== 'ready' && loadingTemplate) {
        <ng-container [ngTemplateOutlet]="loadingTemplate" />
      }
    </div>
  `,
      imports: [CommonModule]
    }]
  }], () => [{
    type: StripeElementsService
  }, {
    type: StripeElementsDirective,
    decorators: [{
      type: Optional
    }]
  }], {
    loadingTemplate: [{
      type: ContentChild,
      args: [NgxStripeElementLoadingTemplateDirective, {
        read: TemplateRef
      }]
    }],
    stripeElementRef: [{
      type: ViewChild,
      args: ["stripeElementRef"]
    }],
    containerClass: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    elementsOptions: [{
      type: Input
    }],
    stripe: [{
      type: Input
    }],
    load: [{
      type: Output
    }],
    blur: [{
      type: Output
    }],
    change: [{
      type: Output
    }],
    focus: [{
      type: Output
    }],
    ready: [{
      type: Output
    }],
    escape: [{
      type: Output
    }]
  });
})();
var _StripeIbanComponent = class _StripeIbanComponent {
  stripeElementsService;
  elementsProvider;
  loadingTemplate;
  stripeElementRef;
  element;
  containerClass;
  options;
  elementsOptions;
  stripe;
  load = new EventEmitter();
  blur = new EventEmitter();
  change = new EventEmitter();
  focus = new EventEmitter();
  ready = new EventEmitter();
  escape = new EventEmitter();
  elements;
  state = "notready";
  elementsSubscription;
  constructor(stripeElementsService, elementsProvider) {
    this.stripeElementsService = stripeElementsService;
    this.elementsProvider = elementsProvider;
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      this.state = "starting";
      let updateElements = false;
      if (!this.elementsProvider && (changes.elementsOptions || changes.stripe || !this.elements)) {
        this.elements = yield this.stripeElementsService.elements(this.stripe, this.elementsOptions).toPromise();
        updateElements = true;
      }
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (changes.options || changes.containerClass || !this.element || updateElements) {
        if (this.element && !updateElements) {
          this.update(options);
        } else if (this.elements && updateElements) {
          this.createElement(options);
        }
      }
      this.state = "ready";
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (this.elementsProvider) {
        this.elementsSubscription = this.elementsProvider.elements.subscribe((elements) => {
          this.elements = elements;
          this.createElement(options);
          this.state = "ready";
        });
      } else if (this.state === "notready") {
        this.state = "starting";
        this.elements = yield this.stripeElementsService.elements(this.stripe).toPromise();
        this.createElement(options);
        this.state = "ready";
      }
    });
  }
  ngOnDestroy() {
    if (this.element) {
      this.element.destroy();
    }
    if (this.elementsSubscription) {
      this.elementsSubscription.unsubscribe();
    }
  }
  update(options) {
    this.element.update(options);
  }
  /**
   * @deprecated
   */
  getIban() {
    return this.element;
  }
  createElement(options = {}) {
    if (this.element) {
      this.element.unmount();
    }
    this.element = this.elements.create("iban", options);
    this.element.on("change", (ev) => this.change.emit(ev));
    this.element.on("blur", () => this.blur.emit());
    this.element.on("focus", () => this.focus.emit());
    this.element.on("ready", () => this.ready.emit());
    this.element.on("escape", () => this.escape.emit());
    this.element.mount(this.stripeElementRef.nativeElement);
    this.load.emit(this.element);
  }
};
__publicField(_StripeIbanComponent, "\u0275fac", function StripeIbanComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StripeIbanComponent)(\u0275\u0275directiveInject(StripeElementsService), \u0275\u0275directiveInject(StripeElementsDirective, 8));
});
__publicField(_StripeIbanComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _StripeIbanComponent,
  selectors: [["ngx-stripe-iban"]],
  contentQueries: function StripeIbanComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, NgxStripeElementLoadingTemplateDirective, 5, TemplateRef);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loadingTemplate = _t.first);
    }
  },
  viewQuery: function StripeIbanComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.stripeElementRef = _t.first);
    }
  },
  inputs: {
    containerClass: "containerClass",
    options: "options",
    elementsOptions: "elementsOptions",
    stripe: "stripe"
  },
  outputs: {
    load: "load",
    blur: "blur",
    change: "change",
    focus: "focus",
    ready: "ready",
    escape: "escape"
  },
  features: [\u0275\u0275NgOnChangesFeature],
  decls: 3,
  vars: 1,
  consts: [["stripeElementRef", ""], [1, "field"], [3, "ngTemplateOutlet"]],
  template: function StripeIbanComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1, 0);
      \u0275\u0275template(2, StripeIbanComponent_Conditional_2_Template, 1, 1, "ng-container", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.state !== "ready" && ctx.loadingTemplate ? 2 : -1);
    }
  },
  dependencies: [CommonModule, NgTemplateOutlet],
  encapsulation: 2
}));
var StripeIbanComponent = _StripeIbanComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripeIbanComponent, [{
    type: Component,
    args: [{
      selector: "ngx-stripe-iban",
      standalone: true,
      template: `
    <div class="field" #stripeElementRef>
      @if (state !== 'ready' && loadingTemplate) {
        <ng-container [ngTemplateOutlet]="loadingTemplate" />
      }
    </div>
  `,
      imports: [CommonModule]
    }]
  }], () => [{
    type: StripeElementsService
  }, {
    type: StripeElementsDirective,
    decorators: [{
      type: Optional
    }]
  }], {
    loadingTemplate: [{
      type: ContentChild,
      args: [NgxStripeElementLoadingTemplateDirective, {
        read: TemplateRef
      }]
    }],
    stripeElementRef: [{
      type: ViewChild,
      args: ["stripeElementRef"]
    }],
    containerClass: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    elementsOptions: [{
      type: Input
    }],
    stripe: [{
      type: Input
    }],
    load: [{
      type: Output
    }],
    blur: [{
      type: Output
    }],
    change: [{
      type: Output
    }],
    focus: [{
      type: Output
    }],
    ready: [{
      type: Output
    }],
    escape: [{
      type: Output
    }]
  });
})();
var _StripeIdealBankComponent = class _StripeIdealBankComponent {
  stripeElementsService;
  elementsProvider;
  loadingTemplate;
  stripeElementRef;
  element;
  containerClass;
  options;
  elementsOptions;
  stripe;
  load = new EventEmitter();
  blur = new EventEmitter();
  change = new EventEmitter();
  focus = new EventEmitter();
  ready = new EventEmitter();
  escape = new EventEmitter();
  elements;
  state = "notready";
  elementsSubscription;
  constructor(stripeElementsService, elementsProvider) {
    this.stripeElementsService = stripeElementsService;
    this.elementsProvider = elementsProvider;
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      this.state = "starting";
      let updateElements = false;
      if (!this.elementsProvider && (changes.elementsOptions || changes.stripe || !this.elements)) {
        this.elements = yield this.stripeElementsService.elements(this.stripe, this.elementsOptions).toPromise();
        updateElements = true;
      }
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (changes.options || changes.containerClass || !this.element || updateElements) {
        if (this.element && !updateElements) {
          this.update(options);
        } else if (this.elements && updateElements) {
          this.createElement(options);
        }
      }
      this.state = "ready";
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (this.elementsProvider) {
        this.elementsSubscription = this.elementsProvider.elements.subscribe((elements) => {
          this.elements = elements;
          this.createElement(options);
          this.state = "ready";
        });
      } else if (this.state === "notready") {
        this.state = "starting";
        this.elements = yield this.stripeElementsService.elements(this.stripe).toPromise();
        this.createElement(options);
        this.state = "ready";
      }
    });
  }
  ngOnDestroy() {
    if (this.element) {
      this.element.destroy();
    }
    if (this.elementsSubscription) {
      this.elementsSubscription.unsubscribe();
    }
  }
  update(options) {
    this.element.update(options);
  }
  /**
   * @deprecated
   */
  getIdealBank() {
    return this.element;
  }
  createElement(options = {}) {
    if (this.element) {
      this.element.unmount();
    }
    this.element = this.elements.create("idealBank", options);
    this.element.on("change", (ev) => this.change.emit(ev));
    this.element.on("blur", () => this.blur.emit());
    this.element.on("focus", () => this.focus.emit());
    this.element.on("ready", () => this.ready.emit());
    this.element.on("escape", () => this.escape.emit());
    this.element.mount(this.stripeElementRef.nativeElement);
    this.load.emit(this.element);
  }
};
__publicField(_StripeIdealBankComponent, "\u0275fac", function StripeIdealBankComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StripeIdealBankComponent)(\u0275\u0275directiveInject(StripeElementsService), \u0275\u0275directiveInject(StripeElementsDirective, 8));
});
__publicField(_StripeIdealBankComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _StripeIdealBankComponent,
  selectors: [["ngx-stripe-ideal-bank"]],
  contentQueries: function StripeIdealBankComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, NgxStripeElementLoadingTemplateDirective, 5, TemplateRef);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loadingTemplate = _t.first);
    }
  },
  viewQuery: function StripeIdealBankComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.stripeElementRef = _t.first);
    }
  },
  inputs: {
    containerClass: "containerClass",
    options: "options",
    elementsOptions: "elementsOptions",
    stripe: "stripe"
  },
  outputs: {
    load: "load",
    blur: "blur",
    change: "change",
    focus: "focus",
    ready: "ready",
    escape: "escape"
  },
  features: [\u0275\u0275NgOnChangesFeature],
  decls: 3,
  vars: 1,
  consts: [["stripeElementRef", ""], [1, "field"], [3, "ngTemplateOutlet"]],
  template: function StripeIdealBankComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1, 0);
      \u0275\u0275template(2, StripeIdealBankComponent_Conditional_2_Template, 1, 1, "ng-container", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.state !== "ready" && ctx.loadingTemplate ? 2 : -1);
    }
  },
  dependencies: [CommonModule, NgTemplateOutlet],
  encapsulation: 2
}));
var StripeIdealBankComponent = _StripeIdealBankComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripeIdealBankComponent, [{
    type: Component,
    args: [{
      selector: "ngx-stripe-ideal-bank",
      standalone: true,
      template: `
    <div class="field" #stripeElementRef>
      @if (state !== 'ready' && loadingTemplate) {
        <ng-container [ngTemplateOutlet]="loadingTemplate" />
      }
    </div>
  `,
      imports: [CommonModule]
    }]
  }], () => [{
    type: StripeElementsService
  }, {
    type: StripeElementsDirective,
    decorators: [{
      type: Optional
    }]
  }], {
    loadingTemplate: [{
      type: ContentChild,
      args: [NgxStripeElementLoadingTemplateDirective, {
        read: TemplateRef
      }]
    }],
    stripeElementRef: [{
      type: ViewChild,
      args: ["stripeElementRef"]
    }],
    containerClass: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    elementsOptions: [{
      type: Input
    }],
    stripe: [{
      type: Input
    }],
    load: [{
      type: Output
    }],
    blur: [{
      type: Output
    }],
    change: [{
      type: Output
    }],
    focus: [{
      type: Output
    }],
    ready: [{
      type: Output
    }],
    escape: [{
      type: Output
    }]
  });
})();
var _StripeIssuingCardCvcDisplayComponent = class _StripeIssuingCardCvcDisplayComponent {
  cdr;
  stripeElementsService;
  elementsProvider;
  loadingTemplate;
  stripeElementRef;
  element;
  containerClass;
  options;
  elementsOptions;
  stripe;
  load = new EventEmitter();
  elements;
  state = "notready";
  elementsSubscription;
  constructor(cdr, stripeElementsService, elementsProvider) {
    this.cdr = cdr;
    this.stripeElementsService = stripeElementsService;
    this.elementsProvider = elementsProvider;
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      this.state = "starting";
      let updateElements = false;
      if (!this.elementsProvider && (changes.elementsOptions || changes.stripe || !this.elements)) {
        this.elements = yield this.stripeElementsService.elements(this.stripe, this.elementsOptions).toPromise();
        updateElements = true;
      }
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (changes.options || changes.containerClass || !this.element || updateElements) {
        if (this.element && !updateElements) {
          this.update(options);
        } else if (this.elements && updateElements) {
          this.createElement(options);
        }
      }
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (this.elementsProvider) {
        this.elementsSubscription = this.elementsProvider.elements.subscribe((elements) => {
          this.elements = elements;
          this.createElement(options);
        });
      } else if (this.state === "notready") {
        this.state = "starting";
        this.elements = yield this.stripeElementsService.elements(this.stripe).toPromise();
        this.createElement(options);
      }
    });
  }
  ngOnDestroy() {
    if (this.element) {
      this.element.destroy();
    }
    if (this.elementsSubscription) {
      this.elementsSubscription.unsubscribe();
    }
  }
  update(options) {
    this.element.update(options);
  }
  createElement(options) {
    this.state = "ready";
    this.cdr.detectChanges();
    if (this.element) {
      this.element.unmount();
    }
    this.element = this.elements.create("issuingCardCvcDisplay", options);
    this.element.mount(this.stripeElementRef.nativeElement);
    this.load.emit(this.element);
  }
};
__publicField(_StripeIssuingCardCvcDisplayComponent, "\u0275fac", function StripeIssuingCardCvcDisplayComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StripeIssuingCardCvcDisplayComponent)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(StripeElementsService), \u0275\u0275directiveInject(StripeElementsDirective, 8));
});
__publicField(_StripeIssuingCardCvcDisplayComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _StripeIssuingCardCvcDisplayComponent,
  selectors: [["ngx-stripe-issuing-card-cvc-display"]],
  contentQueries: function StripeIssuingCardCvcDisplayComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, NgxStripeElementLoadingTemplateDirective, 5, TemplateRef);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loadingTemplate = _t.first);
    }
  },
  viewQuery: function StripeIssuingCardCvcDisplayComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.stripeElementRef = _t.first);
    }
  },
  inputs: {
    containerClass: "containerClass",
    options: "options",
    elementsOptions: "elementsOptions",
    stripe: "stripe"
  },
  outputs: {
    load: "load"
  },
  features: [\u0275\u0275NgOnChangesFeature],
  decls: 3,
  vars: 1,
  consts: [["stripeElementRef", ""], [1, "field"], [3, "ngTemplateOutlet"]],
  template: function StripeIssuingCardCvcDisplayComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1, 0);
      \u0275\u0275template(2, StripeIssuingCardCvcDisplayComponent_Conditional_2_Template, 1, 1, "ng-container", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.state !== "ready" && ctx.loadingTemplate ? 2 : -1);
    }
  },
  dependencies: [CommonModule, NgTemplateOutlet],
  encapsulation: 2
}));
var StripeIssuingCardCvcDisplayComponent = _StripeIssuingCardCvcDisplayComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripeIssuingCardCvcDisplayComponent, [{
    type: Component,
    args: [{
      selector: "ngx-stripe-issuing-card-cvc-display",
      standalone: true,
      template: `
    <div class="field" #stripeElementRef>
      @if (state !== 'ready' && loadingTemplate) {
        <ng-container [ngTemplateOutlet]="loadingTemplate" />
      }
    </div>
  `,
      imports: [CommonModule]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: StripeElementsService
  }, {
    type: StripeElementsDirective,
    decorators: [{
      type: Optional
    }]
  }], {
    loadingTemplate: [{
      type: ContentChild,
      args: [NgxStripeElementLoadingTemplateDirective, {
        read: TemplateRef
      }]
    }],
    stripeElementRef: [{
      type: ViewChild,
      args: ["stripeElementRef"]
    }],
    containerClass: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    elementsOptions: [{
      type: Input
    }],
    stripe: [{
      type: Input
    }],
    load: [{
      type: Output
    }]
  });
})();
var _StripeIssuingCardExpiryDisplayComponent = class _StripeIssuingCardExpiryDisplayComponent {
  cdr;
  stripeElementsService;
  elementsProvider;
  loadingTemplate;
  stripeElementRef;
  element;
  containerClass;
  options;
  elementsOptions;
  stripe;
  load = new EventEmitter();
  elements;
  state = "notready";
  elementsSubscription;
  constructor(cdr, stripeElementsService, elementsProvider) {
    this.cdr = cdr;
    this.stripeElementsService = stripeElementsService;
    this.elementsProvider = elementsProvider;
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      this.state = "starting";
      let updateElements = false;
      if (!this.elementsProvider && (changes.elementsOptions || changes.stripe || !this.elements)) {
        this.elements = yield this.stripeElementsService.elements(this.stripe, this.elementsOptions).toPromise();
        updateElements = true;
      }
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (changes.options || changes.containerClass || !this.element || updateElements) {
        if (this.element && !updateElements) {
          this.update(options);
        } else if (this.elements && updateElements) {
          this.createElement(options);
        }
      }
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (this.elementsProvider) {
        this.elementsSubscription = this.elementsProvider.elements.subscribe((elements) => {
          this.elements = elements;
          this.createElement(options);
        });
      } else if (this.state === "notready") {
        this.state = "starting";
        this.elements = yield this.stripeElementsService.elements(this.stripe).toPromise();
        this.createElement(options);
      }
    });
  }
  ngOnDestroy() {
    if (this.element) {
      this.element.destroy();
    }
    if (this.elementsSubscription) {
      this.elementsSubscription.unsubscribe();
    }
  }
  update(options) {
    this.element.update(options);
  }
  createElement(options) {
    this.state = "ready";
    this.cdr.detectChanges();
    if (this.element) {
      this.element.unmount();
    }
    this.element = this.elements.create("issuingCardExpiryDisplay", options);
    this.element.mount(this.stripeElementRef.nativeElement);
    this.load.emit(this.element);
  }
};
__publicField(_StripeIssuingCardExpiryDisplayComponent, "\u0275fac", function StripeIssuingCardExpiryDisplayComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StripeIssuingCardExpiryDisplayComponent)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(StripeElementsService), \u0275\u0275directiveInject(StripeElementsDirective, 8));
});
__publicField(_StripeIssuingCardExpiryDisplayComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _StripeIssuingCardExpiryDisplayComponent,
  selectors: [["ngx-stripe-issuing-card-expiry-display"]],
  contentQueries: function StripeIssuingCardExpiryDisplayComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, NgxStripeElementLoadingTemplateDirective, 5, TemplateRef);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loadingTemplate = _t.first);
    }
  },
  viewQuery: function StripeIssuingCardExpiryDisplayComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.stripeElementRef = _t.first);
    }
  },
  inputs: {
    containerClass: "containerClass",
    options: "options",
    elementsOptions: "elementsOptions",
    stripe: "stripe"
  },
  outputs: {
    load: "load"
  },
  features: [\u0275\u0275NgOnChangesFeature],
  decls: 3,
  vars: 1,
  consts: [["stripeElementRef", ""], [1, "field"], [3, "ngTemplateOutlet"]],
  template: function StripeIssuingCardExpiryDisplayComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1, 0);
      \u0275\u0275template(2, StripeIssuingCardExpiryDisplayComponent_Conditional_2_Template, 1, 1, "ng-container", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.state !== "ready" && ctx.loadingTemplate ? 2 : -1);
    }
  },
  dependencies: [CommonModule, NgTemplateOutlet],
  encapsulation: 2
}));
var StripeIssuingCardExpiryDisplayComponent = _StripeIssuingCardExpiryDisplayComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripeIssuingCardExpiryDisplayComponent, [{
    type: Component,
    args: [{
      selector: "ngx-stripe-issuing-card-expiry-display",
      standalone: true,
      template: `
    <div class="field" #stripeElementRef>
      @if (state !== 'ready' && loadingTemplate) {
        <ng-container [ngTemplateOutlet]="loadingTemplate" />
      }
    </div>
  `,
      imports: [CommonModule]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: StripeElementsService
  }, {
    type: StripeElementsDirective,
    decorators: [{
      type: Optional
    }]
  }], {
    loadingTemplate: [{
      type: ContentChild,
      args: [NgxStripeElementLoadingTemplateDirective, {
        read: TemplateRef
      }]
    }],
    stripeElementRef: [{
      type: ViewChild,
      args: ["stripeElementRef"]
    }],
    containerClass: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    elementsOptions: [{
      type: Input
    }],
    stripe: [{
      type: Input
    }],
    load: [{
      type: Output
    }]
  });
})();
var _StripeIssuingCardNumberDisplayComponent = class _StripeIssuingCardNumberDisplayComponent {
  cdr;
  stripeElementsService;
  elementsProvider;
  loadingTemplate;
  stripeElementRef;
  element;
  containerClass;
  options;
  elementsOptions;
  stripe;
  load = new EventEmitter();
  elements;
  state = "notready";
  elementsSubscription;
  constructor(cdr, stripeElementsService, elementsProvider) {
    this.cdr = cdr;
    this.stripeElementsService = stripeElementsService;
    this.elementsProvider = elementsProvider;
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      this.state = "starting";
      let updateElements = false;
      if (!this.elementsProvider && (changes.elementsOptions || changes.stripe || !this.elements)) {
        this.elements = yield this.stripeElementsService.elements(this.stripe, this.elementsOptions).toPromise();
        updateElements = true;
      }
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (changes.options || changes.containerClass || !this.element || updateElements) {
        if (this.element && !updateElements) {
          this.update(options);
        } else if (this.elements && updateElements) {
          this.createElement(options);
        }
      }
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (this.elementsProvider) {
        this.elementsSubscription = this.elementsProvider.elements.subscribe((elements) => {
          this.elements = elements;
          this.createElement(options);
        });
      } else if (this.state === "notready") {
        this.state = "starting";
        this.elements = yield this.stripeElementsService.elements(this.stripe).toPromise();
        this.createElement(options);
      }
    });
  }
  ngOnDestroy() {
    if (this.element) {
      this.element.destroy();
    }
    if (this.elementsSubscription) {
      this.elementsSubscription.unsubscribe();
    }
  }
  update(options) {
    this.element.update(options);
  }
  createElement(options) {
    this.state = "ready";
    this.cdr.detectChanges();
    if (this.element) {
      this.element.unmount();
    }
    this.element = this.elements.create("issuingCardNumberDisplay", options);
    this.element.mount(this.stripeElementRef.nativeElement);
    this.load.emit(this.element);
  }
};
__publicField(_StripeIssuingCardNumberDisplayComponent, "\u0275fac", function StripeIssuingCardNumberDisplayComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StripeIssuingCardNumberDisplayComponent)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(StripeElementsService), \u0275\u0275directiveInject(StripeElementsDirective, 8));
});
__publicField(_StripeIssuingCardNumberDisplayComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _StripeIssuingCardNumberDisplayComponent,
  selectors: [["ngx-stripe-issuing-card-number-display"]],
  contentQueries: function StripeIssuingCardNumberDisplayComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, NgxStripeElementLoadingTemplateDirective, 5, TemplateRef);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loadingTemplate = _t.first);
    }
  },
  viewQuery: function StripeIssuingCardNumberDisplayComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.stripeElementRef = _t.first);
    }
  },
  inputs: {
    containerClass: "containerClass",
    options: "options",
    elementsOptions: "elementsOptions",
    stripe: "stripe"
  },
  outputs: {
    load: "load"
  },
  features: [\u0275\u0275NgOnChangesFeature],
  decls: 3,
  vars: 1,
  consts: [["stripeElementRef", ""], [1, "field"], [3, "ngTemplateOutlet"]],
  template: function StripeIssuingCardNumberDisplayComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1, 0);
      \u0275\u0275template(2, StripeIssuingCardNumberDisplayComponent_Conditional_2_Template, 1, 1, "ng-container", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.state !== "ready" && ctx.loadingTemplate ? 2 : -1);
    }
  },
  dependencies: [CommonModule, NgTemplateOutlet],
  encapsulation: 2
}));
var StripeIssuingCardNumberDisplayComponent = _StripeIssuingCardNumberDisplayComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripeIssuingCardNumberDisplayComponent, [{
    type: Component,
    args: [{
      selector: "ngx-stripe-issuing-card-number-display",
      standalone: true,
      template: `
    <div class="field" #stripeElementRef>
      @if (state !== 'ready' && loadingTemplate) {
        <ng-container [ngTemplateOutlet]="loadingTemplate" />
      }
    </div>
  `,
      imports: [CommonModule]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: StripeElementsService
  }, {
    type: StripeElementsDirective,
    decorators: [{
      type: Optional
    }]
  }], {
    loadingTemplate: [{
      type: ContentChild,
      args: [NgxStripeElementLoadingTemplateDirective, {
        read: TemplateRef
      }]
    }],
    stripeElementRef: [{
      type: ViewChild,
      args: ["stripeElementRef"]
    }],
    containerClass: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    elementsOptions: [{
      type: Input
    }],
    stripe: [{
      type: Input
    }],
    load: [{
      type: Output
    }]
  });
})();
var _StripeIssuingCardPinDisplayComponent = class _StripeIssuingCardPinDisplayComponent {
  cdr;
  stripeElementsService;
  elementsProvider;
  loadingTemplate;
  stripeElementRef;
  element;
  containerClass;
  options;
  elementsOptions;
  stripe;
  load = new EventEmitter();
  elements;
  state = "notready";
  elementsSubscription;
  constructor(cdr, stripeElementsService, elementsProvider) {
    this.cdr = cdr;
    this.stripeElementsService = stripeElementsService;
    this.elementsProvider = elementsProvider;
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      this.state = "starting";
      let updateElements = false;
      if (!this.elementsProvider && (changes.elementsOptions || changes.stripe || !this.elements)) {
        this.elements = yield this.stripeElementsService.elements(this.stripe, this.elementsOptions).toPromise();
        updateElements = true;
      }
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (changes.options || changes.containerClass || !this.element || updateElements) {
        if (this.element && !updateElements) {
          this.update(options);
        } else if (this.elements && updateElements) {
          this.createElement(options);
        }
      }
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (this.elementsProvider) {
        this.elementsSubscription = this.elementsProvider.elements.subscribe((elements) => {
          this.elements = elements;
          this.createElement(options);
        });
      } else if (this.state === "notready") {
        this.state = "starting";
        this.elements = yield this.stripeElementsService.elements(this.stripe).toPromise();
        this.createElement(options);
      }
    });
  }
  ngOnDestroy() {
    if (this.element) {
      this.element.destroy();
    }
    if (this.elementsSubscription) {
      this.elementsSubscription.unsubscribe();
    }
  }
  update(options) {
    this.element.update(options);
  }
  createElement(options) {
    this.state = "ready";
    this.cdr.detectChanges();
    if (this.element) {
      this.element.unmount();
    }
    this.element = this.elements.create("issuingCardPinDisplay", options);
    this.element.mount(this.stripeElementRef.nativeElement);
    this.load.emit(this.element);
  }
};
__publicField(_StripeIssuingCardPinDisplayComponent, "\u0275fac", function StripeIssuingCardPinDisplayComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StripeIssuingCardPinDisplayComponent)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(StripeElementsService), \u0275\u0275directiveInject(StripeElementsDirective, 8));
});
__publicField(_StripeIssuingCardPinDisplayComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _StripeIssuingCardPinDisplayComponent,
  selectors: [["ngx-stripe-issuing-card-pin-display"]],
  contentQueries: function StripeIssuingCardPinDisplayComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, NgxStripeElementLoadingTemplateDirective, 5, TemplateRef);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loadingTemplate = _t.first);
    }
  },
  viewQuery: function StripeIssuingCardPinDisplayComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.stripeElementRef = _t.first);
    }
  },
  inputs: {
    containerClass: "containerClass",
    options: "options",
    elementsOptions: "elementsOptions",
    stripe: "stripe"
  },
  outputs: {
    load: "load"
  },
  features: [\u0275\u0275NgOnChangesFeature],
  decls: 3,
  vars: 1,
  consts: [["stripeElementRef", ""], [1, "field"], [3, "ngTemplateOutlet"]],
  template: function StripeIssuingCardPinDisplayComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1, 0);
      \u0275\u0275template(2, StripeIssuingCardPinDisplayComponent_Conditional_2_Template, 1, 1, "ng-container", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.state !== "ready" && ctx.loadingTemplate ? 2 : -1);
    }
  },
  dependencies: [CommonModule, NgTemplateOutlet],
  encapsulation: 2
}));
var StripeIssuingCardPinDisplayComponent = _StripeIssuingCardPinDisplayComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripeIssuingCardPinDisplayComponent, [{
    type: Component,
    args: [{
      selector: "ngx-stripe-issuing-card-pin-display",
      standalone: true,
      template: `
    <div class="field" #stripeElementRef>
      @if (state !== 'ready' && loadingTemplate) {
        <ng-container [ngTemplateOutlet]="loadingTemplate" />
      }
    </div>
  `,
      imports: [CommonModule]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: StripeElementsService
  }, {
    type: StripeElementsDirective,
    decorators: [{
      type: Optional
    }]
  }], {
    loadingTemplate: [{
      type: ContentChild,
      args: [NgxStripeElementLoadingTemplateDirective, {
        read: TemplateRef
      }]
    }],
    stripeElementRef: [{
      type: ViewChild,
      args: ["stripeElementRef"]
    }],
    containerClass: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    elementsOptions: [{
      type: Input
    }],
    stripe: [{
      type: Input
    }],
    load: [{
      type: Output
    }]
  });
})();
var _StripeLinkAuthenticationComponent = class _StripeLinkAuthenticationComponent {
  stripeElementsService;
  elementsProvider;
  loadingTemplate;
  stripeElementRef;
  element;
  containerClass;
  options;
  elementsOptions;
  stripe;
  load = new EventEmitter();
  blur = new EventEmitter();
  change = new EventEmitter();
  focus = new EventEmitter();
  ready = new EventEmitter();
  escape = new EventEmitter();
  loaderror = new EventEmitter();
  loaderstart = new EventEmitter();
  elements;
  state = "notready";
  elementsSubscription;
  constructor(stripeElementsService, elementsProvider) {
    this.stripeElementsService = stripeElementsService;
    this.elementsProvider = elementsProvider;
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      this.state = "starting";
      let updateElements = false;
      if (!this.elementsProvider && (changes.elementsOptions || changes.stripe || !this.elements)) {
        this.elements = yield this.stripeElementsService.elements(this.stripe, this.elementsOptions).toPromise();
        updateElements = true;
      }
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (changes.options || changes.containerClass || !this.element || updateElements) {
        if (this.elements && updateElements) {
          this.createElement(options);
        }
      }
      this.state = "ready";
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (this.elementsProvider) {
        this.elementsSubscription = this.elementsProvider.elements.subscribe((elements) => {
          this.elements = elements;
          this.createElement(options);
          this.state = "ready";
        });
      } else if (this.state === "notready") {
        this.state = "starting";
        this.elements = yield this.stripeElementsService.elements(this.stripe).toPromise();
        this.createElement(options);
        this.state = "ready";
      }
    });
  }
  ngOnDestroy() {
    if (this.element) {
      this.element.destroy();
    }
    if (this.elementsSubscription) {
      this.elementsSubscription.unsubscribe();
    }
  }
  /**
   * @deprecated
   */
  getLinkAuthenticationElement() {
    return this.element;
  }
  createElement(options) {
    if (this.element) {
      this.element.unmount();
    }
    this.element = this.elements.create("linkAuthentication", options);
    this.element.on("change", (ev) => this.change.emit(ev));
    this.element.on("blur", () => this.blur.emit());
    this.element.on("focus", () => this.focus.emit());
    this.element.on("ready", () => this.ready.emit());
    this.element.on("escape", () => this.escape.emit());
    this.element.on("loaderror", () => this.loaderror.emit());
    this.element.on("loaderstart", () => this.loaderstart.emit());
    this.element.mount(this.stripeElementRef.nativeElement);
    this.load.emit(this.element);
  }
};
__publicField(_StripeLinkAuthenticationComponent, "\u0275fac", function StripeLinkAuthenticationComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StripeLinkAuthenticationComponent)(\u0275\u0275directiveInject(StripeElementsService), \u0275\u0275directiveInject(StripeElementsDirective, 8));
});
__publicField(_StripeLinkAuthenticationComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _StripeLinkAuthenticationComponent,
  selectors: [["ngx-stripe-link-authentication"]],
  contentQueries: function StripeLinkAuthenticationComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, NgxStripeElementLoadingTemplateDirective, 5, TemplateRef);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loadingTemplate = _t.first);
    }
  },
  viewQuery: function StripeLinkAuthenticationComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.stripeElementRef = _t.first);
    }
  },
  inputs: {
    containerClass: "containerClass",
    options: "options",
    elementsOptions: "elementsOptions",
    stripe: "stripe"
  },
  outputs: {
    load: "load",
    blur: "blur",
    change: "change",
    focus: "focus",
    ready: "ready",
    escape: "escape",
    loaderror: "loaderror",
    loaderstart: "loaderstart"
  },
  features: [\u0275\u0275NgOnChangesFeature],
  decls: 3,
  vars: 1,
  consts: [["stripeElementRef", ""], [1, "field"], [3, "ngTemplateOutlet"]],
  template: function StripeLinkAuthenticationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1, 0);
      \u0275\u0275template(2, StripeLinkAuthenticationComponent_Conditional_2_Template, 1, 1, "ng-container", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.state !== "ready" && ctx.loadingTemplate ? 2 : -1);
    }
  },
  dependencies: [CommonModule, NgTemplateOutlet],
  encapsulation: 2
}));
var StripeLinkAuthenticationComponent = _StripeLinkAuthenticationComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripeLinkAuthenticationComponent, [{
    type: Component,
    args: [{
      selector: "ngx-stripe-link-authentication",
      standalone: true,
      template: `
    <div class="field" #stripeElementRef>
      @if (state !== 'ready' && loadingTemplate) {
        <ng-container [ngTemplateOutlet]="loadingTemplate" />
      }
    </div>
  `,
      imports: [CommonModule]
    }]
  }], () => [{
    type: StripeElementsService
  }, {
    type: StripeElementsDirective,
    decorators: [{
      type: Optional
    }]
  }], {
    loadingTemplate: [{
      type: ContentChild,
      args: [NgxStripeElementLoadingTemplateDirective, {
        read: TemplateRef
      }]
    }],
    stripeElementRef: [{
      type: ViewChild,
      args: ["stripeElementRef"]
    }],
    containerClass: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    elementsOptions: [{
      type: Input
    }],
    stripe: [{
      type: Input
    }],
    load: [{
      type: Output
    }],
    blur: [{
      type: Output
    }],
    change: [{
      type: Output
    }],
    focus: [{
      type: Output
    }],
    ready: [{
      type: Output
    }],
    escape: [{
      type: Output
    }],
    loaderror: [{
      type: Output
    }],
    loaderstart: [{
      type: Output
    }]
  });
})();
var _StripeP24BankComponent = class _StripeP24BankComponent {
  stripeElementsService;
  elementsProvider;
  loadingTemplate;
  stripeElementRef;
  element;
  containerClass;
  options;
  elementsOptions;
  stripe;
  load = new EventEmitter();
  blur = new EventEmitter();
  change = new EventEmitter();
  focus = new EventEmitter();
  ready = new EventEmitter();
  escape = new EventEmitter();
  elements;
  state = "notready";
  elementsSubscription;
  constructor(stripeElementsService, elementsProvider) {
    this.stripeElementsService = stripeElementsService;
    this.elementsProvider = elementsProvider;
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      this.state = "starting";
      let updateElements = false;
      if (!this.elementsProvider && (changes.elementsOptions || changes.stripe || !this.elements)) {
        this.elements = yield this.stripeElementsService.elements(this.stripe, this.elementsOptions).toPromise();
        updateElements = true;
      }
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (changes.options || changes.containerClass || !this.element || updateElements) {
        if (this.element && !updateElements) {
          this.update(options);
        } else if (this.elements && updateElements) {
          this.createElement(options);
        }
      }
      this.state = "ready";
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (this.elementsProvider) {
        this.elementsSubscription = this.elementsProvider.elements.subscribe((elements) => {
          this.elements = elements;
          this.createElement(options);
          this.state = "ready";
        });
      } else if (this.state === "notready") {
        this.state = "starting";
        this.elements = yield this.stripeElementsService.elements(this.stripe).toPromise();
        this.createElement(options);
        this.state = "ready";
      }
    });
  }
  ngOnDestroy() {
    if (this.element) {
      this.element.destroy();
    }
    if (this.elementsSubscription) {
      this.elementsSubscription.unsubscribe();
    }
  }
  update(options) {
    this.element.update(options);
  }
  /**
   * @deprecated
   */
  getP24Bankelement() {
    return this.element;
  }
  createElement(options) {
    if (this.element) {
      this.element.unmount();
    }
    this.element = this.elements.create("p24Bank", options);
    this.element.on("change", (ev) => this.change.emit(ev));
    this.element.on("blur", () => this.blur.emit());
    this.element.on("focus", () => this.focus.emit());
    this.element.on("ready", () => this.ready.emit());
    this.element.on("escape", () => this.escape.emit());
    this.element.mount(this.stripeElementRef.nativeElement);
    this.load.emit(this.element);
  }
};
__publicField(_StripeP24BankComponent, "\u0275fac", function StripeP24BankComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StripeP24BankComponent)(\u0275\u0275directiveInject(StripeElementsService), \u0275\u0275directiveInject(StripeElementsDirective, 8));
});
__publicField(_StripeP24BankComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _StripeP24BankComponent,
  selectors: [["ngx-stripe-p24-bank"]],
  contentQueries: function StripeP24BankComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, NgxStripeElementLoadingTemplateDirective, 5, TemplateRef);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loadingTemplate = _t.first);
    }
  },
  viewQuery: function StripeP24BankComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.stripeElementRef = _t.first);
    }
  },
  inputs: {
    containerClass: "containerClass",
    options: "options",
    elementsOptions: "elementsOptions",
    stripe: "stripe"
  },
  outputs: {
    load: "load",
    blur: "blur",
    change: "change",
    focus: "focus",
    ready: "ready",
    escape: "escape"
  },
  features: [\u0275\u0275NgOnChangesFeature],
  decls: 3,
  vars: 1,
  consts: [["stripeElementRef", ""], [1, "field"], [3, "ngTemplateOutlet"]],
  template: function StripeP24BankComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1, 0);
      \u0275\u0275template(2, StripeP24BankComponent_Conditional_2_Template, 1, 1, "ng-container", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.state !== "ready" && ctx.loadingTemplate ? 2 : -1);
    }
  },
  dependencies: [CommonModule, NgTemplateOutlet],
  encapsulation: 2
}));
var StripeP24BankComponent = _StripeP24BankComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripeP24BankComponent, [{
    type: Component,
    args: [{
      selector: "ngx-stripe-p24-bank",
      standalone: true,
      template: `
    <div class="field" #stripeElementRef>
      @if (state !== 'ready' && loadingTemplate) {
        <ng-container [ngTemplateOutlet]="loadingTemplate" />
      }
    </div>
  `,
      imports: [CommonModule]
    }]
  }], () => [{
    type: StripeElementsService
  }, {
    type: StripeElementsDirective,
    decorators: [{
      type: Optional
    }]
  }], {
    loadingTemplate: [{
      type: ContentChild,
      args: [NgxStripeElementLoadingTemplateDirective, {
        read: TemplateRef
      }]
    }],
    stripeElementRef: [{
      type: ViewChild,
      args: ["stripeElementRef"]
    }],
    containerClass: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    elementsOptions: [{
      type: Input
    }],
    stripe: [{
      type: Input
    }],
    load: [{
      type: Output
    }],
    blur: [{
      type: Output
    }],
    change: [{
      type: Output
    }],
    focus: [{
      type: Output
    }],
    ready: [{
      type: Output
    }],
    escape: [{
      type: Output
    }]
  });
})();
var _StripeAuBankAccountComponent = class _StripeAuBankAccountComponent {
  stripeElementsService;
  elementsProvider;
  loadingTemplate;
  stripeElementRef;
  element;
  containerClass;
  options;
  elementsOptions;
  stripe;
  load = new EventEmitter();
  blur = new EventEmitter();
  change = new EventEmitter();
  focus = new EventEmitter();
  ready = new EventEmitter();
  escape = new EventEmitter();
  elements;
  state = "notready";
  elementsSubscription;
  constructor(stripeElementsService, elementsProvider) {
    this.stripeElementsService = stripeElementsService;
    this.elementsProvider = elementsProvider;
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      this.state = "starting";
      let updateElements = false;
      if (!this.elementsProvider && (changes.elementsOptions || changes.stripe || !this.elements)) {
        this.elements = yield this.stripeElementsService.elements(this.stripe, this.elementsOptions).toPromise();
        updateElements = true;
      }
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (changes.options || changes.containerClass || !this.element || updateElements) {
        if (this.element && !updateElements) {
          this.update(options);
        } else if (this.elements && updateElements) {
          this.createElement(options);
        }
      }
      this.state = "ready";
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (this.elementsProvider) {
        this.elementsSubscription = this.elementsProvider.elements.subscribe((elements) => {
          this.elements = elements;
          this.createElement(options);
          this.state = "ready";
        });
      } else if (this.state === "notready") {
        this.state = "starting";
        this.elements = yield this.stripeElementsService.elements(this.stripe).toPromise();
        this.createElement(options);
        this.state = "ready";
      }
    });
  }
  ngOnDestroy() {
    if (this.element) {
      this.element.destroy();
    }
    if (this.elementsSubscription) {
      this.elementsSubscription.unsubscribe();
    }
  }
  update(options) {
    this.element.update(options);
  }
  /**
   * @deprecated
   */
  getAuBankAccount() {
    return this.element;
  }
  createElement(options = {}) {
    if (this.element) {
      this.element.unmount();
    }
    this.element = this.elements.create("auBankAccount", options);
    this.element.on("change", (ev) => this.change.emit(ev));
    this.element.on("blur", () => this.blur.emit());
    this.element.on("focus", () => this.focus.emit());
    this.element.on("ready", () => this.ready.emit());
    this.element.on("escape", () => this.escape.emit());
    this.element.mount(this.stripeElementRef.nativeElement);
    this.load.emit(this.element);
  }
};
__publicField(_StripeAuBankAccountComponent, "\u0275fac", function StripeAuBankAccountComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StripeAuBankAccountComponent)(\u0275\u0275directiveInject(StripeElementsService), \u0275\u0275directiveInject(StripeElementsDirective, 8));
});
__publicField(_StripeAuBankAccountComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _StripeAuBankAccountComponent,
  selectors: [["ngx-stripe-au-bank-account"]],
  contentQueries: function StripeAuBankAccountComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, NgxStripeElementLoadingTemplateDirective, 5, TemplateRef);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loadingTemplate = _t.first);
    }
  },
  viewQuery: function StripeAuBankAccountComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.stripeElementRef = _t.first);
    }
  },
  inputs: {
    containerClass: "containerClass",
    options: "options",
    elementsOptions: "elementsOptions",
    stripe: "stripe"
  },
  outputs: {
    load: "load",
    blur: "blur",
    change: "change",
    focus: "focus",
    ready: "ready",
    escape: "escape"
  },
  features: [\u0275\u0275NgOnChangesFeature],
  decls: 3,
  vars: 1,
  consts: [["stripeElementRef", ""], [1, "field"], [3, "ngTemplateOutlet"]],
  template: function StripeAuBankAccountComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1, 0);
      \u0275\u0275template(2, StripeAuBankAccountComponent_Conditional_2_Template, 1, 1, "ng-container", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.state !== "ready" && ctx.loadingTemplate ? 2 : -1);
    }
  },
  dependencies: [CommonModule, NgTemplateOutlet],
  encapsulation: 2
}));
var StripeAuBankAccountComponent = _StripeAuBankAccountComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripeAuBankAccountComponent, [{
    type: Component,
    args: [{
      selector: "ngx-stripe-au-bank-account",
      standalone: true,
      template: `
    <div class="field" #stripeElementRef>
      @if (state !== 'ready' && loadingTemplate) {
        <ng-container [ngTemplateOutlet]="loadingTemplate" />
      }
    </div>
  `,
      imports: [CommonModule]
    }]
  }], () => [{
    type: StripeElementsService
  }, {
    type: StripeElementsDirective,
    decorators: [{
      type: Optional
    }]
  }], {
    loadingTemplate: [{
      type: ContentChild,
      args: [NgxStripeElementLoadingTemplateDirective, {
        read: TemplateRef
      }]
    }],
    stripeElementRef: [{
      type: ViewChild,
      args: ["stripeElementRef"]
    }],
    containerClass: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    elementsOptions: [{
      type: Input
    }],
    stripe: [{
      type: Input
    }],
    load: [{
      type: Output
    }],
    blur: [{
      type: Output
    }],
    change: [{
      type: Output
    }],
    focus: [{
      type: Output
    }],
    ready: [{
      type: Output
    }],
    escape: [{
      type: Output
    }]
  });
})();
var _StripePaymentElementComponent = class _StripePaymentElementComponent {
  stripeElementsService;
  elementsProvider;
  stripeElementRef;
  element;
  elements;
  containerClass;
  options;
  elementsOptions;
  stripe;
  appearance;
  clientSecret;
  doNotCreateUntilClientSecretIsSet = false;
  load = new EventEmitter();
  blur = new EventEmitter();
  change = new EventEmitter();
  focus = new EventEmitter();
  ready = new EventEmitter();
  escape = new EventEmitter();
  loaderror = new EventEmitter();
  state = "notready";
  elementsSubscription;
  constructor(stripeElementsService, elementsProvider) {
    this.stripeElementsService = stripeElementsService;
    this.elementsProvider = elementsProvider;
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      this.state = "starting";
      let updateElements = false;
      if (!this.elementsProvider && (changes.elementsOptions || changes.stripe || changes.clientSecret || changes.appearance || !this.elements)) {
        this.elements = yield this.stripeElementsService.elements(this.stripe, __spreadValues(__spreadValues(__spreadValues({}, this.elementsOptions || {}), this.appearance ? {
          appearance: this.appearance
        } : {}), this.clientSecret ? {
          clientSecret: this.clientSecret
        } : {})).toPromise();
        updateElements = true;
      }
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (changes.options || changes.containerClass || !this.element || updateElements) {
        if (this.element && !updateElements) {
          this.update(options);
        } else if (this.elements && updateElements) {
          this.createElement(options);
        }
      }
      this.state = "ready";
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (this.elementsProvider) {
        this.elementsSubscription = this.elementsProvider.elements.subscribe((elements) => {
          this.elements = elements;
          this.createElement(options);
          this.state = "ready";
        });
      } else if (this.state === "notready") {
        this.state = "starting";
        this.elements = yield this.stripeElementsService.elements(this.stripe, __spreadValues(__spreadValues(__spreadValues({}, this.elementsOptions || {}), this.appearance ? {
          appearance: this.appearance
        } : {}), this.clientSecret ? {
          clientSecret: this.clientSecret
        } : {})).toPromise();
        this.createElement(options);
        this.state = "ready";
      }
    });
  }
  ngOnDestroy() {
    if (this.element) {
      this.element.destroy();
    }
    if (this.elementsSubscription) {
      this.elementsSubscription.unsubscribe();
    }
  }
  update(options) {
    return this.element.update(options);
  }
  collapse() {
    return this.element.collapse();
  }
  fetchUpdates() {
    return from(this.elements.fetchUpdates());
  }
  createElement(options = {}) {
    if (this.element) {
      this.element.unmount();
    }
    try {
      this.element = this.elements.create("payment", options);
    } catch (err) {
      this.elements = null;
      throw err;
    }
    this.element.on("change", (ev) => this.change.emit(ev));
    this.element.on("blur", (ev) => this.blur.emit(ev));
    this.element.on("focus", (ev) => this.focus.emit(ev));
    this.element.on("ready", (ev) => this.ready.emit(ev));
    this.element.on("escape", (ev) => this.escape.emit(ev));
    this.element.on("loaderror", (ev) => this.loaderror.emit(ev));
    this.element.mount(this.stripeElementRef.nativeElement);
    this.load.emit(this.element);
  }
};
__publicField(_StripePaymentElementComponent, "\u0275fac", function StripePaymentElementComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StripePaymentElementComponent)(\u0275\u0275directiveInject(StripeElementsService), \u0275\u0275directiveInject(StripeElementsDirective, 8));
});
__publicField(_StripePaymentElementComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _StripePaymentElementComponent,
  selectors: [["ngx-stripe-payment"]],
  viewQuery: function StripePaymentElementComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.stripeElementRef = _t.first);
    }
  },
  inputs: {
    containerClass: "containerClass",
    options: "options",
    elementsOptions: "elementsOptions",
    stripe: "stripe",
    appearance: "appearance",
    clientSecret: "clientSecret",
    doNotCreateUntilClientSecretIsSet: "doNotCreateUntilClientSecretIsSet"
  },
  outputs: {
    load: "load",
    blur: "blur",
    change: "change",
    focus: "focus",
    ready: "ready",
    escape: "escape",
    loaderror: "loaderror"
  },
  features: [\u0275\u0275NgOnChangesFeature],
  decls: 2,
  vars: 0,
  consts: [["stripeElementRef", ""], [1, "field"]],
  template: function StripePaymentElementComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "div", 1, 0);
    }
  },
  dependencies: [CommonModule],
  encapsulation: 2
}));
var StripePaymentElementComponent = _StripePaymentElementComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripePaymentElementComponent, [{
    type: Component,
    args: [{
      selector: "ngx-stripe-payment",
      standalone: true,
      template: `<div class="field" #stripeElementRef></div>`,
      imports: [CommonModule]
    }]
  }], () => [{
    type: StripeElementsService
  }, {
    type: StripeElementsDirective,
    decorators: [{
      type: Optional
    }]
  }], {
    stripeElementRef: [{
      type: ViewChild,
      args: ["stripeElementRef"]
    }],
    containerClass: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    elementsOptions: [{
      type: Input
    }],
    stripe: [{
      type: Input
    }],
    appearance: [{
      type: Input
    }],
    clientSecret: [{
      type: Input
    }],
    doNotCreateUntilClientSecretIsSet: [{
      type: Input
    }],
    load: [{
      type: Output
    }],
    blur: [{
      type: Output
    }],
    change: [{
      type: Output
    }],
    focus: [{
      type: Output
    }],
    ready: [{
      type: Output
    }],
    escape: [{
      type: Output
    }],
    loaderror: [{
      type: Output
    }]
  });
})();
var _StripePaymentMethodMessagingComponent = class _StripePaymentMethodMessagingComponent {
  stripeElementsService;
  elementsProvider;
  loadingTemplate;
  stripeElementRef;
  element;
  containerClass;
  options;
  elementsOptions;
  stripe;
  load = new EventEmitter();
  ready = new EventEmitter();
  elements;
  state = "notready";
  elementsSubscription;
  constructor(stripeElementsService, elementsProvider) {
    this.stripeElementsService = stripeElementsService;
    this.elementsProvider = elementsProvider;
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      this.state = "starting";
      let updateElements = false;
      if (!this.elementsProvider && (changes.elementsOptions || changes.stripe || !this.elements)) {
        this.elements = yield this.stripeElementsService.elements(this.stripe, this.elementsOptions).toPromise();
        updateElements = true;
      }
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (changes.options || changes.containerClass || !this.element || updateElements) {
        if (this.element && !updateElements) {
          this.update(options);
        } else if (this.elements && updateElements) {
          this.createElement(options);
        }
      }
      this.state = "ready";
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (this.elementsProvider) {
        this.elementsSubscription = this.elementsProvider.elements.subscribe((elements) => {
          this.elements = elements;
          this.createElement(options);
          this.state = "ready";
        });
      } else if (this.state === "notready") {
        this.state = "starting";
        this.elements = yield this.stripeElementsService.elements(this.stripe).toPromise();
        this.createElement(options);
        this.state = "ready";
      }
    });
  }
  ngOnDestroy() {
    if (this.element) {
      this.element.destroy();
    }
    if (this.elementsSubscription) {
      this.elementsSubscription.unsubscribe();
    }
  }
  update(options) {
    this.element.update(options);
  }
  /**
   * @deprecated
   */
  getPaymentMethodMessaging() {
    return this.element;
  }
  createElement(options) {
    if (this.element) {
      this.element.unmount();
    }
    this.element = this.elements.create("paymentMethodMessaging", options);
    this.element.on("ready", () => this.ready.emit());
    this.element.mount(this.stripeElementRef.nativeElement);
    this.load.emit(this.element);
  }
};
__publicField(_StripePaymentMethodMessagingComponent, "\u0275fac", function StripePaymentMethodMessagingComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StripePaymentMethodMessagingComponent)(\u0275\u0275directiveInject(StripeElementsService), \u0275\u0275directiveInject(StripeElementsDirective, 8));
});
__publicField(_StripePaymentMethodMessagingComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _StripePaymentMethodMessagingComponent,
  selectors: [["ngx-stripe-payment-method-messaging"]],
  contentQueries: function StripePaymentMethodMessagingComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, NgxStripeElementLoadingTemplateDirective, 5, TemplateRef);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.loadingTemplate = _t.first);
    }
  },
  viewQuery: function StripePaymentMethodMessagingComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.stripeElementRef = _t.first);
    }
  },
  inputs: {
    containerClass: "containerClass",
    options: "options",
    elementsOptions: "elementsOptions",
    stripe: "stripe"
  },
  outputs: {
    load: "load",
    ready: "ready"
  },
  features: [\u0275\u0275NgOnChangesFeature],
  decls: 3,
  vars: 1,
  consts: [["stripeElementRef", ""], [1, "field"], [3, "ngTemplateOutlet"]],
  template: function StripePaymentMethodMessagingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1, 0);
      \u0275\u0275template(2, StripePaymentMethodMessagingComponent_Conditional_2_Template, 1, 1, "ng-container", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.state !== "ready" && ctx.loadingTemplate ? 2 : -1);
    }
  },
  dependencies: [CommonModule, NgTemplateOutlet],
  encapsulation: 2
}));
var StripePaymentMethodMessagingComponent = _StripePaymentMethodMessagingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripePaymentMethodMessagingComponent, [{
    type: Component,
    args: [{
      selector: "ngx-stripe-payment-method-messaging",
      standalone: true,
      template: `
    <div class="field" #stripeElementRef>
      @if (state !== 'ready' && loadingTemplate) {
        <ng-container [ngTemplateOutlet]="loadingTemplate" />
      }
    </div>
  `,
      imports: [CommonModule]
    }]
  }], () => [{
    type: StripeElementsService
  }, {
    type: StripeElementsDirective,
    decorators: [{
      type: Optional
    }]
  }], {
    loadingTemplate: [{
      type: ContentChild,
      args: [NgxStripeElementLoadingTemplateDirective, {
        read: TemplateRef
      }]
    }],
    stripeElementRef: [{
      type: ViewChild,
      args: ["stripeElementRef"]
    }],
    containerClass: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    elementsOptions: [{
      type: Input
    }],
    stripe: [{
      type: Input
    }],
    load: [{
      type: Output
    }],
    ready: [{
      type: Output
    }]
  });
})();
var _StripePaymentRequestButtonComponent = class _StripePaymentRequestButtonComponent {
  stripeElementsService;
  elementsProvider;
  stripeElementRef;
  element;
  paymentRequest;
  containerClass;
  paymentOptions;
  options;
  elementsOptions;
  stripe;
  load = new EventEmitter();
  change = new EventEmitter();
  blur = new EventEmitter();
  focus = new EventEmitter();
  ready = new EventEmitter();
  token = new EventEmitter();
  paymentMethod = new EventEmitter();
  source = new EventEmitter();
  cancel = new EventEmitter();
  shippingaddresschange = new EventEmitter();
  shippingoptionchange = new EventEmitter();
  notavailable = new EventEmitter();
  elements;
  state = "notready";
  elementsSubscription;
  constructor(stripeElementsService, elementsProvider) {
    this.stripeElementsService = stripeElementsService;
    this.elementsProvider = elementsProvider;
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      this.state = "starting";
      let updateElements = false;
      if (!this.elementsProvider && (changes.elementsOptions || changes.stripe || !this.elements)) {
        const elements = yield this.stripeElementsService.elements(this.stripe, this.elementsOptions).toPromise();
        this.elements = elements;
        updateElements = true;
      }
      if (changes.paymentOptions && this.paymentRequest) {
        this.updateRequest(this.paymentOptions);
      }
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (changes.options || changes.containerClass || !this.element || updateElements) {
        if (this.element && !updateElements) {
          this.update(options);
        } else if (this.elements && updateElements) {
          this.createElement(options);
        }
      }
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (this.elementsProvider) {
        this.elementsSubscription = this.elementsProvider.elements.subscribe((elements) => {
          this.elements = elements;
          this.createElement(options);
          this.state = "ready";
        });
      } else if (this.state === "notready") {
        this.state = "starting";
        this.elements = yield this.stripeElementsService.elements(this.stripe).toPromise();
        this.createElement(options);
        this.state = "ready";
      }
    });
  }
  ngOnDestroy() {
    if (this.element) {
      this.element.destroy();
    }
    if (this.elementsSubscription) {
      this.elementsSubscription.unsubscribe();
    }
  }
  canMakePayment() {
    return from(this.paymentRequest.canMakePayment());
  }
  update(options) {
    this.element.update(options);
  }
  updateRequest(options) {
    const {
      currency,
      total,
      displayItems,
      shippingOptions
    } = options;
    this.paymentRequest.update({
      currency,
      total,
      displayItems,
      shippingOptions
    });
  }
  show() {
    this.paymentRequest.show();
  }
  abort() {
    this.paymentRequest.abort();
  }
  isShowing() {
    return this.paymentRequest.isShowing();
  }
  /**
   * @deprecated
   */
  getButton() {
    return this.element;
  }
  createElement() {
    return __async(this, arguments, function* (options = {}) {
      this.paymentRequest = this.stripeElementsService.paymentRequest(this.stripe, this.paymentOptions);
      this.paymentRequest.on("token", (ev) => this.token.emit(ev));
      if (this.paymentMethod.observed) this.paymentRequest.on("paymentmethod", (ev) => this.paymentMethod.emit(ev));
      if (this.source.observed && !this.paymentMethod.observed) this.paymentRequest.on("source", (ev) => this.source.emit(ev));
      this.paymentRequest.on("cancel", () => this.cancel.emit());
      this.paymentRequest.on("shippingaddresschange", (ev) => this.shippingaddresschange.emit(ev));
      this.paymentRequest.on("shippingoptionchange", (ev) => this.shippingoptionchange.emit(ev));
      if (this.element) {
        this.element.unmount();
      }
      this.element = this.elements.create("paymentRequestButton", __spreadValues({
        paymentRequest: this.paymentRequest
      }, options));
      const result = yield this.paymentRequest.canMakePayment();
      if (result) {
        this.element.on("click", (ev) => this.change.emit(ev));
        this.element.on("blur", () => this.blur.emit());
        this.element.on("focus", () => this.focus.emit());
        this.element.on("ready", () => this.ready.emit());
        this.element.mount(this.stripeElementRef.nativeElement);
        this.load.emit({
          paymentRequestButton: this.element,
          paymentRequest: this.paymentRequest
        });
      } else {
        this.notavailable.emit();
      }
    });
  }
};
__publicField(_StripePaymentRequestButtonComponent, "\u0275fac", function StripePaymentRequestButtonComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StripePaymentRequestButtonComponent)(\u0275\u0275directiveInject(StripeElementsService), \u0275\u0275directiveInject(StripeElementsDirective, 8));
});
__publicField(_StripePaymentRequestButtonComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _StripePaymentRequestButtonComponent,
  selectors: [["ngx-stripe-payment-request-button"]],
  viewQuery: function StripePaymentRequestButtonComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.stripeElementRef = _t.first);
    }
  },
  inputs: {
    containerClass: "containerClass",
    paymentOptions: "paymentOptions",
    options: "options",
    elementsOptions: "elementsOptions",
    stripe: "stripe"
  },
  outputs: {
    load: "load",
    change: "change",
    blur: "blur",
    focus: "focus",
    ready: "ready",
    token: "token",
    paymentMethod: "paymentMethod",
    source: "source",
    cancel: "cancel",
    shippingaddresschange: "shippingaddresschange",
    shippingoptionchange: "shippingoptionchange",
    notavailable: "notavailable"
  },
  features: [\u0275\u0275NgOnChangesFeature],
  decls: 2,
  vars: 0,
  consts: [["stripeElementRef", ""], [1, "field"]],
  template: function StripePaymentRequestButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "div", 1, 0);
    }
  },
  dependencies: [CommonModule],
  encapsulation: 2
}));
var StripePaymentRequestButtonComponent = _StripePaymentRequestButtonComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripePaymentRequestButtonComponent, [{
    type: Component,
    args: [{
      selector: "ngx-stripe-payment-request-button",
      standalone: true,
      template: `<div class="field" #stripeElementRef></div>`,
      imports: [CommonModule]
    }]
  }], () => [{
    type: StripeElementsService
  }, {
    type: StripeElementsDirective,
    decorators: [{
      type: Optional
    }]
  }], {
    stripeElementRef: [{
      type: ViewChild,
      args: ["stripeElementRef"]
    }],
    containerClass: [{
      type: Input
    }],
    paymentOptions: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    elementsOptions: [{
      type: Input
    }],
    stripe: [{
      type: Input
    }],
    load: [{
      type: Output
    }],
    change: [{
      type: Output
    }],
    blur: [{
      type: Output
    }],
    focus: [{
      type: Output
    }],
    ready: [{
      type: Output
    }],
    token: [{
      type: Output
    }],
    paymentMethod: [{
      type: Output
    }],
    source: [{
      type: Output
    }],
    cancel: [{
      type: Output
    }],
    shippingaddresschange: [{
      type: Output
    }],
    shippingoptionchange: [{
      type: Output
    }],
    notavailable: [{
      type: Output
    }]
  });
})();
var _StripeFactoryService = class _StripeFactoryService {
  version;
  baseKey;
  baseOptions;
  loader;
  window;
  constructor(version, baseKey, baseOptions, loader, window2) {
    this.version = version;
    this.baseKey = baseKey;
    this.baseOptions = baseOptions;
    this.loader = loader;
    this.window = window2;
  }
  create(key, options) {
    if (!key && !this.baseKey) {
      throw new Error("No key defined! Either you need to pass it as a parameter or define it when you call NgxStripeModule.forRoot()");
    }
    return new StripeInstance(this.version, this.loader, this.window, key || this.baseKey, options || this.baseOptions);
  }
};
__publicField(_StripeFactoryService, "\u0275fac", function StripeFactoryService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StripeFactoryService)(\u0275\u0275inject(NGX_STRIPE_VERSION), \u0275\u0275inject(STRIPE_PUBLISHABLE_KEY), \u0275\u0275inject(STRIPE_OPTIONS), \u0275\u0275inject(LazyStripeAPILoader), \u0275\u0275inject(WindowRef));
});
__publicField(_StripeFactoryService, "\u0275prov", /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _StripeFactoryService,
  factory: _StripeFactoryService.\u0275fac
}));
var StripeFactoryService = _StripeFactoryService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripeFactoryService, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [NGX_STRIPE_VERSION]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [STRIPE_PUBLISHABLE_KEY]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [STRIPE_OPTIONS]
    }]
  }, {
    type: LazyStripeAPILoader
  }, {
    type: WindowRef
  }], null);
})();
var components = [StripeAddressComponent, StripeAffirmMessageComponent, StripeAfterpayClearpayMessageComponent, StripeCardComponent, StripeCardNumberComponent, StripeCardExpiryComponent, StripeCardCvcComponent, StripeEpsBankComponent, StripeExpressCheckoutComponent, StripeFpxBankComponent, StripeIbanComponent, StripeIdealBankComponent, StripeIssuingCardCvcDisplayComponent, StripeIssuingCardExpiryDisplayComponent, StripeIssuingCardNumberDisplayComponent, StripeIssuingCardPinDisplayComponent, StripeLinkAuthenticationComponent, StripeP24BankComponent, StripeAuBankAccountComponent, StripePaymentElementComponent, StripePaymentMethodMessagingComponent, StripePaymentRequestButtonComponent];
var directives = [StripeCardGroupDirective, StripeElementsDirective, NgxStripeElementLoadingTemplateDirective];
var currentVersion = "19.7.0";
function _provideNgxStripe(publishableKey, options) {
  return [LazyStripeAPILoader, StripeService, StripeFactoryService, StripeElementsService, WindowRef, DocumentRef, {
    provide: STRIPE_PUBLISHABLE_KEY,
    useValue: publishableKey
  }, {
    provide: STRIPE_OPTIONS,
    useValue: options
  }, {
    provide: NGX_STRIPE_VERSION,
    useValue: currentVersion
  }];
}
function provideNgxStripe(publishableKey, options) {
  return makeEnvironmentProviders([..._provideNgxStripe(publishableKey, options)]);
}
var _NgxStripeModule = class _NgxStripeModule {
  static forRoot(publishableKey, options) {
    return {
      ngModule: _NgxStripeModule,
      providers: [..._provideNgxStripe(publishableKey, options)]
    };
  }
  /**
   * @deprecated
   */
  static forChild(publishableKey, options) {
    return {
      ngModule: _NgxStripeModule,
      providers: [..._provideNgxStripe(publishableKey, options)]
    };
  }
};
__publicField(_NgxStripeModule, "\u0275fac", function NgxStripeModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxStripeModule)();
});
__publicField(_NgxStripeModule, "\u0275mod", /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _NgxStripeModule,
  imports: [CommonModule, StripeAddressComponent, StripeAffirmMessageComponent, StripeAfterpayClearpayMessageComponent, StripeCardComponent, StripeCardNumberComponent, StripeCardExpiryComponent, StripeCardCvcComponent, StripeEpsBankComponent, StripeExpressCheckoutComponent, StripeFpxBankComponent, StripeIbanComponent, StripeIdealBankComponent, StripeIssuingCardCvcDisplayComponent, StripeIssuingCardExpiryDisplayComponent, StripeIssuingCardNumberDisplayComponent, StripeIssuingCardPinDisplayComponent, StripeLinkAuthenticationComponent, StripeP24BankComponent, StripeAuBankAccountComponent, StripePaymentElementComponent, StripePaymentMethodMessagingComponent, StripePaymentRequestButtonComponent, StripeCardGroupDirective, StripeElementsDirective, NgxStripeElementLoadingTemplateDirective],
  exports: [StripeAddressComponent, StripeAffirmMessageComponent, StripeAfterpayClearpayMessageComponent, StripeCardComponent, StripeCardNumberComponent, StripeCardExpiryComponent, StripeCardCvcComponent, StripeEpsBankComponent, StripeExpressCheckoutComponent, StripeFpxBankComponent, StripeIbanComponent, StripeIdealBankComponent, StripeIssuingCardCvcDisplayComponent, StripeIssuingCardExpiryDisplayComponent, StripeIssuingCardNumberDisplayComponent, StripeIssuingCardPinDisplayComponent, StripeLinkAuthenticationComponent, StripeP24BankComponent, StripeAuBankAccountComponent, StripePaymentElementComponent, StripePaymentMethodMessagingComponent, StripePaymentRequestButtonComponent, StripeCardGroupDirective, StripeElementsDirective, NgxStripeElementLoadingTemplateDirective]
}));
__publicField(_NgxStripeModule, "\u0275inj", /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [CommonModule, components]
}));
var NgxStripeModule = _NgxStripeModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxStripeModule, [{
    type: NgModule,
    args: [{
      exports: [...components, ...directives],
      imports: [CommonModule, ...components, ...directives]
    }]
  }], null, null);
})();
function injectStripe(publishableKey, options) {
  if (publishableKey) {
    const factory = inject(StripeFactoryService);
    return factory.create(publishableKey, options);
  } else if (inject(STRIPE_PUBLISHABLE_KEY)) {
    return inject(StripeService);
  }
  throw new Error("Publishable Key is required either global or pass as parameter");
}

// node_modules/@capacitor-community/stripe/dist/esm/index.js
var Stripe = registerPlugin("Stripe", {
  web: () => import("./web-2MAEMC3R.js").then((m) => new m.StripeWeb())
});

export {
  StripeElementsDirective,
  StripePaymentElementComponent,
  provideNgxStripe,
  injectStripe,
  Stripe
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9uZ3gtc3RyaXBlL2Zlc20yMDIyL25neC1zdHJpcGUubWpzIiwibm9kZV9tb2R1bGVzL0BjYXBhY2l0b3ItY29tbXVuaXR5L3N0cmlwZS9kaXN0L2VzbS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBpMyBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIsIGlzUGxhdGZvcm1TZXJ2ZXIsIENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgKiBhcyBpMCBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpcmVjdGl2ZSwgSW5qZWN0aW9uVG9rZW4sIFBMQVRGT1JNX0lELCBJbmplY3RhYmxlLCBJbmplY3QsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVGVtcGxhdGVSZWYsIENvbXBvbmVudCwgT3B0aW9uYWwsIENvbnRlbnRDaGlsZCwgVmlld0NoaWxkLCBtYWtlRW52aXJvbm1lbnRQcm92aWRlcnMsIE5nTW9kdWxlLCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZpbHRlciwgZmlyc3QsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBmcm9tIH0gZnJvbSAncnhqcyc7XG5jb25zdCBfYzAgPSBbXCJzdHJpcGVFbGVtZW50UmVmXCJdO1xuZnVuY3Rpb24gU3RyaXBlQWRkcmVzc0NvbXBvbmVudF9Db25kaXRpb25hbF8yX1RlbXBsYXRlKHJmLCBjdHgpIHtcbiAgaWYgKHJmICYgMSkge1xuICAgIGkwLsm1ybVlbGVtZW50Q29udGFpbmVyKDAsIDIpO1xuICB9XG4gIGlmIChyZiAmIDIpIHtcbiAgICBjb25zdCBjdHhfcjAgPSBpMC7Jtcm1bmV4dENvbnRleHQoKTtcbiAgICBpMC7Jtcm1cHJvcGVydHkoXCJuZ1RlbXBsYXRlT3V0bGV0XCIsIGN0eF9yMC5sb2FkaW5nVGVtcGxhdGUpO1xuICB9XG59XG5mdW5jdGlvbiBTdHJpcGVBZmZpcm1NZXNzYWdlQ29tcG9uZW50X0NvbmRpdGlvbmFsXzJfVGVtcGxhdGUocmYsIGN0eCkge1xuICBpZiAocmYgJiAxKSB7XG4gICAgaTAuybXJtWVsZW1lbnRDb250YWluZXIoMCwgMik7XG4gIH1cbiAgaWYgKHJmICYgMikge1xuICAgIGNvbnN0IGN0eF9yMCA9IGkwLsm1ybVuZXh0Q29udGV4dCgpO1xuICAgIGkwLsm1ybVwcm9wZXJ0eShcIm5nVGVtcGxhdGVPdXRsZXRcIiwgY3R4X3IwLmxvYWRpbmdUZW1wbGF0ZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIFN0cmlwZUFmdGVycGF5Q2xlYXJwYXlNZXNzYWdlQ29tcG9uZW50X0NvbmRpdGlvbmFsXzJfVGVtcGxhdGUocmYsIGN0eCkge1xuICBpZiAocmYgJiAxKSB7XG4gICAgaTAuybXJtWVsZW1lbnRDb250YWluZXIoMCwgMik7XG4gIH1cbiAgaWYgKHJmICYgMikge1xuICAgIGNvbnN0IGN0eF9yMCA9IGkwLsm1ybVuZXh0Q29udGV4dCgpO1xuICAgIGkwLsm1ybVwcm9wZXJ0eShcIm5nVGVtcGxhdGVPdXRsZXRcIiwgY3R4X3IwLmxvYWRpbmdUZW1wbGF0ZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIFN0cmlwZUNhcmRDb21wb25lbnRfQ29uZGl0aW9uYWxfMl9UZW1wbGF0ZShyZiwgY3R4KSB7XG4gIGlmIChyZiAmIDEpIHtcbiAgICBpMC7Jtcm1ZWxlbWVudENvbnRhaW5lcigwLCAyKTtcbiAgfVxuICBpZiAocmYgJiAyKSB7XG4gICAgY29uc3QgY3R4X3IwID0gaTAuybXJtW5leHRDb250ZXh0KCk7XG4gICAgaTAuybXJtXByb3BlcnR5KFwibmdUZW1wbGF0ZU91dGxldFwiLCBjdHhfcjAubG9hZGluZ1RlbXBsYXRlKTtcbiAgfVxufVxuZnVuY3Rpb24gU3RyaXBlQ2FyZE51bWJlckNvbXBvbmVudF9Db25kaXRpb25hbF8yX1RlbXBsYXRlKHJmLCBjdHgpIHtcbiAgaWYgKHJmICYgMSkge1xuICAgIGkwLsm1ybVlbGVtZW50Q29udGFpbmVyKDAsIDIpO1xuICB9XG4gIGlmIChyZiAmIDIpIHtcbiAgICBjb25zdCBjdHhfcjAgPSBpMC7Jtcm1bmV4dENvbnRleHQoKTtcbiAgICBpMC7Jtcm1cHJvcGVydHkoXCJuZ1RlbXBsYXRlT3V0bGV0XCIsIGN0eF9yMC5sb2FkaW5nVGVtcGxhdGUpO1xuICB9XG59XG5mdW5jdGlvbiBTdHJpcGVDYXJkRXhwaXJ5Q29tcG9uZW50X0NvbmRpdGlvbmFsXzJfVGVtcGxhdGUocmYsIGN0eCkge1xuICBpZiAocmYgJiAxKSB7XG4gICAgaTAuybXJtWVsZW1lbnRDb250YWluZXIoMCwgMik7XG4gIH1cbiAgaWYgKHJmICYgMikge1xuICAgIGNvbnN0IGN0eF9yMCA9IGkwLsm1ybVuZXh0Q29udGV4dCgpO1xuICAgIGkwLsm1ybVwcm9wZXJ0eShcIm5nVGVtcGxhdGVPdXRsZXRcIiwgY3R4X3IwLmxvYWRpbmdUZW1wbGF0ZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIFN0cmlwZUNhcmRDdmNDb21wb25lbnRfQ29uZGl0aW9uYWxfMl9UZW1wbGF0ZShyZiwgY3R4KSB7XG4gIGlmIChyZiAmIDEpIHtcbiAgICBpMC7Jtcm1ZWxlbWVudENvbnRhaW5lcigwLCAyKTtcbiAgfVxuICBpZiAocmYgJiAyKSB7XG4gICAgY29uc3QgY3R4X3IwID0gaTAuybXJtW5leHRDb250ZXh0KCk7XG4gICAgaTAuybXJtXByb3BlcnR5KFwibmdUZW1wbGF0ZU91dGxldFwiLCBjdHhfcjAubG9hZGluZ1RlbXBsYXRlKTtcbiAgfVxufVxuZnVuY3Rpb24gU3RyaXBlRXBzQmFua0NvbXBvbmVudF9Db25kaXRpb25hbF8yX1RlbXBsYXRlKHJmLCBjdHgpIHtcbiAgaWYgKHJmICYgMSkge1xuICAgIGkwLsm1ybVlbGVtZW50Q29udGFpbmVyKDAsIDIpO1xuICB9XG4gIGlmIChyZiAmIDIpIHtcbiAgICBjb25zdCBjdHhfcjAgPSBpMC7Jtcm1bmV4dENvbnRleHQoKTtcbiAgICBpMC7Jtcm1cHJvcGVydHkoXCJuZ1RlbXBsYXRlT3V0bGV0XCIsIGN0eF9yMC5sb2FkaW5nVGVtcGxhdGUpO1xuICB9XG59XG5mdW5jdGlvbiBTdHJpcGVFeHByZXNzQ2hlY2tvdXRDb21wb25lbnRfQ29uZGl0aW9uYWxfMl9UZW1wbGF0ZShyZiwgY3R4KSB7XG4gIGlmIChyZiAmIDEpIHtcbiAgICBpMC7Jtcm1ZWxlbWVudENvbnRhaW5lcigwLCAyKTtcbiAgfVxuICBpZiAocmYgJiAyKSB7XG4gICAgY29uc3QgY3R4X3IwID0gaTAuybXJtW5leHRDb250ZXh0KCk7XG4gICAgaTAuybXJtXByb3BlcnR5KFwibmdUZW1wbGF0ZU91dGxldFwiLCBjdHhfcjAubG9hZGluZ1RlbXBsYXRlKTtcbiAgfVxufVxuZnVuY3Rpb24gU3RyaXBlRnB4QmFua0NvbXBvbmVudF9Db25kaXRpb25hbF8yX1RlbXBsYXRlKHJmLCBjdHgpIHtcbiAgaWYgKHJmICYgMSkge1xuICAgIGkwLsm1ybVlbGVtZW50Q29udGFpbmVyKDAsIDIpO1xuICB9XG4gIGlmIChyZiAmIDIpIHtcbiAgICBjb25zdCBjdHhfcjAgPSBpMC7Jtcm1bmV4dENvbnRleHQoKTtcbiAgICBpMC7Jtcm1cHJvcGVydHkoXCJuZ1RlbXBsYXRlT3V0bGV0XCIsIGN0eF9yMC5sb2FkaW5nVGVtcGxhdGUpO1xuICB9XG59XG5mdW5jdGlvbiBTdHJpcGVJYmFuQ29tcG9uZW50X0NvbmRpdGlvbmFsXzJfVGVtcGxhdGUocmYsIGN0eCkge1xuICBpZiAocmYgJiAxKSB7XG4gICAgaTAuybXJtWVsZW1lbnRDb250YWluZXIoMCwgMik7XG4gIH1cbiAgaWYgKHJmICYgMikge1xuICAgIGNvbnN0IGN0eF9yMCA9IGkwLsm1ybVuZXh0Q29udGV4dCgpO1xuICAgIGkwLsm1ybVwcm9wZXJ0eShcIm5nVGVtcGxhdGVPdXRsZXRcIiwgY3R4X3IwLmxvYWRpbmdUZW1wbGF0ZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIFN0cmlwZUlkZWFsQmFua0NvbXBvbmVudF9Db25kaXRpb25hbF8yX1RlbXBsYXRlKHJmLCBjdHgpIHtcbiAgaWYgKHJmICYgMSkge1xuICAgIGkwLsm1ybVlbGVtZW50Q29udGFpbmVyKDAsIDIpO1xuICB9XG4gIGlmIChyZiAmIDIpIHtcbiAgICBjb25zdCBjdHhfcjAgPSBpMC7Jtcm1bmV4dENvbnRleHQoKTtcbiAgICBpMC7Jtcm1cHJvcGVydHkoXCJuZ1RlbXBsYXRlT3V0bGV0XCIsIGN0eF9yMC5sb2FkaW5nVGVtcGxhdGUpO1xuICB9XG59XG5mdW5jdGlvbiBTdHJpcGVJc3N1aW5nQ2FyZEN2Y0Rpc3BsYXlDb21wb25lbnRfQ29uZGl0aW9uYWxfMl9UZW1wbGF0ZShyZiwgY3R4KSB7XG4gIGlmIChyZiAmIDEpIHtcbiAgICBpMC7Jtcm1ZWxlbWVudENvbnRhaW5lcigwLCAyKTtcbiAgfVxuICBpZiAocmYgJiAyKSB7XG4gICAgY29uc3QgY3R4X3IwID0gaTAuybXJtW5leHRDb250ZXh0KCk7XG4gICAgaTAuybXJtXByb3BlcnR5KFwibmdUZW1wbGF0ZU91dGxldFwiLCBjdHhfcjAubG9hZGluZ1RlbXBsYXRlKTtcbiAgfVxufVxuZnVuY3Rpb24gU3RyaXBlSXNzdWluZ0NhcmRFeHBpcnlEaXNwbGF5Q29tcG9uZW50X0NvbmRpdGlvbmFsXzJfVGVtcGxhdGUocmYsIGN0eCkge1xuICBpZiAocmYgJiAxKSB7XG4gICAgaTAuybXJtWVsZW1lbnRDb250YWluZXIoMCwgMik7XG4gIH1cbiAgaWYgKHJmICYgMikge1xuICAgIGNvbnN0IGN0eF9yMCA9IGkwLsm1ybVuZXh0Q29udGV4dCgpO1xuICAgIGkwLsm1ybVwcm9wZXJ0eShcIm5nVGVtcGxhdGVPdXRsZXRcIiwgY3R4X3IwLmxvYWRpbmdUZW1wbGF0ZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIFN0cmlwZUlzc3VpbmdDYXJkTnVtYmVyRGlzcGxheUNvbXBvbmVudF9Db25kaXRpb25hbF8yX1RlbXBsYXRlKHJmLCBjdHgpIHtcbiAgaWYgKHJmICYgMSkge1xuICAgIGkwLsm1ybVlbGVtZW50Q29udGFpbmVyKDAsIDIpO1xuICB9XG4gIGlmIChyZiAmIDIpIHtcbiAgICBjb25zdCBjdHhfcjAgPSBpMC7Jtcm1bmV4dENvbnRleHQoKTtcbiAgICBpMC7Jtcm1cHJvcGVydHkoXCJuZ1RlbXBsYXRlT3V0bGV0XCIsIGN0eF9yMC5sb2FkaW5nVGVtcGxhdGUpO1xuICB9XG59XG5mdW5jdGlvbiBTdHJpcGVJc3N1aW5nQ2FyZFBpbkRpc3BsYXlDb21wb25lbnRfQ29uZGl0aW9uYWxfMl9UZW1wbGF0ZShyZiwgY3R4KSB7XG4gIGlmIChyZiAmIDEpIHtcbiAgICBpMC7Jtcm1ZWxlbWVudENvbnRhaW5lcigwLCAyKTtcbiAgfVxuICBpZiAocmYgJiAyKSB7XG4gICAgY29uc3QgY3R4X3IwID0gaTAuybXJtW5leHRDb250ZXh0KCk7XG4gICAgaTAuybXJtXByb3BlcnR5KFwibmdUZW1wbGF0ZU91dGxldFwiLCBjdHhfcjAubG9hZGluZ1RlbXBsYXRlKTtcbiAgfVxufVxuZnVuY3Rpb24gU3RyaXBlTGlua0F1dGhlbnRpY2F0aW9uQ29tcG9uZW50X0NvbmRpdGlvbmFsXzJfVGVtcGxhdGUocmYsIGN0eCkge1xuICBpZiAocmYgJiAxKSB7XG4gICAgaTAuybXJtWVsZW1lbnRDb250YWluZXIoMCwgMik7XG4gIH1cbiAgaWYgKHJmICYgMikge1xuICAgIGNvbnN0IGN0eF9yMCA9IGkwLsm1ybVuZXh0Q29udGV4dCgpO1xuICAgIGkwLsm1ybVwcm9wZXJ0eShcIm5nVGVtcGxhdGVPdXRsZXRcIiwgY3R4X3IwLmxvYWRpbmdUZW1wbGF0ZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIFN0cmlwZVAyNEJhbmtDb21wb25lbnRfQ29uZGl0aW9uYWxfMl9UZW1wbGF0ZShyZiwgY3R4KSB7XG4gIGlmIChyZiAmIDEpIHtcbiAgICBpMC7Jtcm1ZWxlbWVudENvbnRhaW5lcigwLCAyKTtcbiAgfVxuICBpZiAocmYgJiAyKSB7XG4gICAgY29uc3QgY3R4X3IwID0gaTAuybXJtW5leHRDb250ZXh0KCk7XG4gICAgaTAuybXJtXByb3BlcnR5KFwibmdUZW1wbGF0ZU91dGxldFwiLCBjdHhfcjAubG9hZGluZ1RlbXBsYXRlKTtcbiAgfVxufVxuZnVuY3Rpb24gU3RyaXBlQXVCYW5rQWNjb3VudENvbXBvbmVudF9Db25kaXRpb25hbF8yX1RlbXBsYXRlKHJmLCBjdHgpIHtcbiAgaWYgKHJmICYgMSkge1xuICAgIGkwLsm1ybVlbGVtZW50Q29udGFpbmVyKDAsIDIpO1xuICB9XG4gIGlmIChyZiAmIDIpIHtcbiAgICBjb25zdCBjdHhfcjAgPSBpMC7Jtcm1bmV4dENvbnRleHQoKTtcbiAgICBpMC7Jtcm1cHJvcGVydHkoXCJuZ1RlbXBsYXRlT3V0bGV0XCIsIGN0eF9yMC5sb2FkaW5nVGVtcGxhdGUpO1xuICB9XG59XG5mdW5jdGlvbiBTdHJpcGVQYXltZW50TWV0aG9kTWVzc2FnaW5nQ29tcG9uZW50X0NvbmRpdGlvbmFsXzJfVGVtcGxhdGUocmYsIGN0eCkge1xuICBpZiAocmYgJiAxKSB7XG4gICAgaTAuybXJtWVsZW1lbnRDb250YWluZXIoMCwgMik7XG4gIH1cbiAgaWYgKHJmICYgMikge1xuICAgIGNvbnN0IGN0eF9yMCA9IGkwLsm1ybVuZXh0Q29udGV4dCgpO1xuICAgIGkwLsm1ybVwcm9wZXJ0eShcIm5nVGVtcGxhdGVPdXRsZXRcIiwgY3R4X3IwLmxvYWRpbmdUZW1wbGF0ZSk7XG4gIH1cbn1cbmNsYXNzIE5neFN0cmlwZUVsZW1lbnRMb2FkaW5nVGVtcGxhdGVEaXJlY3RpdmUge1xuICB0ZW1wbGF0ZVJlZjtcbiAgY29uc3RydWN0b3IodGVtcGxhdGVSZWYpIHtcbiAgICB0aGlzLnRlbXBsYXRlUmVmID0gdGVtcGxhdGVSZWY7XG4gIH1cbiAgc3RhdGljIMm1ZmFjID0gZnVuY3Rpb24gTmd4U3RyaXBlRWxlbWVudExvYWRpbmdUZW1wbGF0ZURpcmVjdGl2ZV9GYWN0b3J5KF9fbmdGYWN0b3J5VHlwZV9fKSB7XG4gICAgcmV0dXJuIG5ldyAoX19uZ0ZhY3RvcnlUeXBlX18gfHwgTmd4U3RyaXBlRWxlbWVudExvYWRpbmdUZW1wbGF0ZURpcmVjdGl2ZSkoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5UZW1wbGF0ZVJlZikpO1xuICB9O1xuICBzdGF0aWMgybVkaXIgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lRGlyZWN0aXZlKHtcbiAgICB0eXBlOiBOZ3hTdHJpcGVFbGVtZW50TG9hZGluZ1RlbXBsYXRlRGlyZWN0aXZlLFxuICAgIHNlbGVjdG9yczogW1tcIlwiLCBcIm5neFN0cmlwZUxvYWRpbmdUZW1wbGF0ZVwiLCBcIlwiXV1cbiAgfSk7XG59XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShOZ3hTdHJpcGVFbGVtZW50TG9hZGluZ1RlbXBsYXRlRGlyZWN0aXZlLCBbe1xuICAgIHR5cGU6IERpcmVjdGl2ZSxcbiAgICBhcmdzOiBbe1xuICAgICAgc2VsZWN0b3I6ICdbbmd4U3RyaXBlTG9hZGluZ1RlbXBsYXRlXScsXG4gICAgICBzdGFuZGFsb25lOiB0cnVlXG4gICAgfV1cbiAgfV0sICgpID0+IFt7XG4gICAgdHlwZTogaTAuVGVtcGxhdGVSZWZcbiAgfV0sIG51bGwpO1xufSkoKTtcbmNvbnN0IFNUUklQRV9QVUJMSVNIQUJMRV9LRVkgPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ1N0cmlwZSBQdWJsaXNoYWJsZSBLZXknKTtcbmNvbnN0IFNUUklQRV9PUFRJT05TID0gbmV3IEluamVjdGlvblRva2VuKCdTdHJpcGUgT3B0aW9ucycpO1xuY29uc3QgTkdYX1NUUklQRV9WRVJTSU9OID0gbmV3IEluamVjdGlvblRva2VuKCdOR1hfU1RSSVBFX1ZFUlNJT04nKTtcbmNsYXNzIFN0cmlwZUluc3RhbmNlIHtcbiAgdmVyc2lvbjtcbiAgbG9hZGVyO1xuICB3aW5kb3c7XG4gIGtleTtcbiAgb3B0aW9ucztcbiAgc3RyaXBlJCA9IG5ldyBCZWhhdmlvclN1YmplY3QodW5kZWZpbmVkKTtcbiAgc3RyaXBlID0gdGhpcy5zdHJpcGUkLmFzT2JzZXJ2YWJsZSgpLnBpcGUoZmlsdGVyKHN0cmlwZSA9PiBCb29sZWFuKHN0cmlwZSkpKTtcbiAgY29uc3RydWN0b3IodmVyc2lvbiwgbG9hZGVyLCB3aW5kb3csIGtleSwgb3B0aW9ucykge1xuICAgIHRoaXMudmVyc2lvbiA9IHZlcnNpb247XG4gICAgdGhpcy5sb2FkZXIgPSBsb2FkZXI7XG4gICAgdGhpcy53aW5kb3cgPSB3aW5kb3c7XG4gICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLmxvYWRlci5hc1N0cmVhbSgpLnBpcGUoZmlsdGVyKHN0YXR1cyA9PiBzdGF0dXMubG9hZGVkID09PSB0cnVlKSwgZmlyc3QoKSwgbWFwKCgpID0+IHRoaXMud2luZG93LmdldE5hdGl2ZVdpbmRvdygpLlN0cmlwZSkpLnN1YnNjcmliZShzdHJpcGVJbnN0YW5jZSA9PiB7XG4gICAgICBjb25zdCBzdHJpcGUgPSB0aGlzLm9wdGlvbnMgPyBzdHJpcGVJbnN0YW5jZSh0aGlzLmtleSwgdGhpcy5vcHRpb25zKSA6IHN0cmlwZUluc3RhbmNlKHRoaXMua2V5KTtcbiAgICAgIHN0cmlwZS5yZWdpc3RlckFwcEluZm8odGhpcy5nZXROZ3hTdHJpcGVBcHBJbmZvKHRoaXMudmVyc2lvbikpO1xuICAgICAgdGhpcy5zdHJpcGUkLm5leHQoc3RyaXBlKTtcbiAgICB9KTtcbiAgfVxuICBnZXRJbnN0YW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUkLmdldFZhbHVlKCk7XG4gIH1cbiAgZWxlbWVudHMob3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLnN0cmlwZS5waXBlKG1hcChzdHJpcGUgPT4gc3RyaXBlLmVsZW1lbnRzKG9wdGlvbnMpKSwgZmlyc3QoKSk7XG4gIH1cbiAgcmVkaXJlY3RUb0NoZWNrb3V0KG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUucGlwZShzd2l0Y2hNYXAoc3RyaXBlID0+IGZyb20oc3RyaXBlLnJlZGlyZWN0VG9DaGVja291dChvcHRpb25zKSkpLCBmaXJzdCgpKTtcbiAgfVxuICBjb25maXJtUGF5bWVudChvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLnBpcGUoc3dpdGNoTWFwKHN0cmlwZSA9PiBmcm9tKHN0cmlwZS5jb25maXJtUGF5bWVudChvcHRpb25zKSkpLCBmaXJzdCgpKTtcbiAgfVxuICBjb25maXJtQWNzc0RlYml0UGF5bWVudChjbGllbnRTZWNyZXQsIGRhdGEsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUucGlwZShzd2l0Y2hNYXAoc3RyaXBlID0+IGZyb20oc3RyaXBlLmNvbmZpcm1BY3NzRGViaXRQYXltZW50KGNsaWVudFNlY3JldCwgZGF0YSwgb3B0aW9ucykpKSwgZmlyc3QoKSk7XG4gIH1cbiAgY29uZmlybVVzQmFua0FjY291bnRQYXltZW50KGNsaWVudFNlY3JldCwgZGF0YSkge1xuICAgIHJldHVybiB0aGlzLnN0cmlwZS5waXBlKHN3aXRjaE1hcChzdHJpcGUgPT4gZnJvbShzdHJpcGUuY29uZmlybVVzQmFua0FjY291bnRQYXltZW50KGNsaWVudFNlY3JldCwgZGF0YSkpKSwgZmlyc3QoKSk7XG4gIH1cbiAgY29uZmlybUFsaXBheVBheW1lbnQoY2xpZW50U2VjcmV0LCBkYXRhLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLnBpcGUoc3dpdGNoTWFwKHN0cmlwZSA9PiBmcm9tKHN0cmlwZS5jb25maXJtQWxpcGF5UGF5bWVudChjbGllbnRTZWNyZXQsIGRhdGEsIG9wdGlvbnMpKSksIGZpcnN0KCkpO1xuICB9XG4gIGNvbmZpcm1BdUJlY3NEZWJpdFBheW1lbnQoY2xpZW50U2VjcmV0LCBkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLnBpcGUoc3dpdGNoTWFwKHN0cmlwZSA9PiBmcm9tKHN0cmlwZS5jb25maXJtQXVCZWNzRGViaXRQYXltZW50KGNsaWVudFNlY3JldCwgZGF0YSkpKSwgZmlyc3QoKSk7XG4gIH1cbiAgY29uZmlybUJhbmNvbnRhY3RQYXltZW50KGNsaWVudFNlY3JldCwgZGF0YSwgb3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLnN0cmlwZS5waXBlKHN3aXRjaE1hcChzdHJpcGUgPT4gZnJvbShzdHJpcGUuY29uZmlybUJhbmNvbnRhY3RQYXltZW50KGNsaWVudFNlY3JldCwgZGF0YSwgb3B0aW9ucykpKSwgZmlyc3QoKSk7XG4gIH1cbiAgY29uZmlybUJsaWtQYXltZW50KGNsaWVudFNlY3JldCwgZGF0YSwgb3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLnN0cmlwZS5waXBlKHN3aXRjaE1hcChzdHJpcGUgPT4gZnJvbShzdHJpcGUuY29uZmlybUJsaWtQYXltZW50KGNsaWVudFNlY3JldCwgZGF0YSwgb3B0aW9ucykpKSwgZmlyc3QoKSk7XG4gIH1cbiAgY29uZmlybUJvbGV0b1BheW1lbnQoY2xpZW50U2VjcmV0LCBkYXRhLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLnBpcGUoc3dpdGNoTWFwKHN0cmlwZSA9PiBmcm9tKHN0cmlwZS5jb25maXJtQm9sZXRvUGF5bWVudChjbGllbnRTZWNyZXQsIGRhdGEsIG9wdGlvbnMpKSksIGZpcnN0KCkpO1xuICB9XG4gIGNvbmZpcm1DYXJkUGF5bWVudChjbGllbnRTZWNyZXQsIGRhdGEsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUucGlwZShzd2l0Y2hNYXAoc3RyaXBlID0+IGZyb20oc3RyaXBlLmNvbmZpcm1DYXJkUGF5bWVudChjbGllbnRTZWNyZXQsIGRhdGEsIG9wdGlvbnMpKSksIGZpcnN0KCkpO1xuICB9XG4gIGNvbmZpcm1DYXNoYXBwUGF5bWVudChjbGllbnRTZWNyZXQsIGRhdGEsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUucGlwZShzd2l0Y2hNYXAoc3RyaXBlID0+IGZyb20oc3RyaXBlLmNvbmZpcm1DYXNoYXBwUGF5bWVudChjbGllbnRTZWNyZXQsIGRhdGEsIG9wdGlvbnMpKSksIGZpcnN0KCkpO1xuICB9XG4gIGNvbmZpcm1DdXN0b21lckJhbGFuY2VQYXltZW50KGNsaWVudFNlY3JldCwgZGF0YSwgb3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLnN0cmlwZS5waXBlKHN3aXRjaE1hcChzdHJpcGUgPT4gZnJvbShzdHJpcGUuY29uZmlybUN1c3RvbWVyQmFsYW5jZVBheW1lbnQoY2xpZW50U2VjcmV0LCBkYXRhLCBvcHRpb25zKSkpLCBmaXJzdCgpKTtcbiAgfVxuICBjb25maXJtRXBzUGF5bWVudChjbGllbnRTZWNyZXQsIGRhdGEsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUucGlwZShzd2l0Y2hNYXAoc3RyaXBlID0+IGZyb20oc3RyaXBlLmNvbmZpcm1FcHNQYXltZW50KGNsaWVudFNlY3JldCwgZGF0YSwgb3B0aW9ucykpKSwgZmlyc3QoKSk7XG4gIH1cbiAgY29uZmlybUZweFBheW1lbnQoY2xpZW50U2VjcmV0LCBkYXRhLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLnBpcGUoc3dpdGNoTWFwKHN0cmlwZSA9PiBmcm9tKHN0cmlwZS5jb25maXJtRnB4UGF5bWVudChjbGllbnRTZWNyZXQsIGRhdGEsIG9wdGlvbnMpKSksIGZpcnN0KCkpO1xuICB9XG4gIGNvbmZpcm1HaXJvcGF5UGF5bWVudChjbGllbnRTZWNyZXQsIGRhdGEsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUucGlwZShzd2l0Y2hNYXAoc3RyaXBlID0+IGZyb20oc3RyaXBlLmNvbmZpcm1HaXJvcGF5UGF5bWVudChjbGllbnRTZWNyZXQsIGRhdGEsIG9wdGlvbnMpKSksIGZpcnN0KCkpO1xuICB9XG4gIGNvbmZpcm1HcmFiUGF5UGF5bWVudChjbGllbnRTZWNyZXQsIGRhdGEsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUucGlwZShzd2l0Y2hNYXAoc3RyaXBlID0+IGZyb20oc3RyaXBlLmNvbmZpcm1HcmFiUGF5UGF5bWVudChjbGllbnRTZWNyZXQsIGRhdGEsIG9wdGlvbnMpKSksIGZpcnN0KCkpO1xuICB9XG4gIGNvbmZpcm1JZGVhbFBheW1lbnQoY2xpZW50U2VjcmV0LCBkYXRhLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLnBpcGUoc3dpdGNoTWFwKHN0cmlwZSA9PiBmcm9tKHN0cmlwZS5jb25maXJtSWRlYWxQYXltZW50KGNsaWVudFNlY3JldCwgZGF0YSwgb3B0aW9ucykpKSwgZmlyc3QoKSk7XG4gIH1cbiAgY29uZmlybUtsYXJuYVBheW1lbnQoY2xpZW50U2VjcmV0LCBkYXRhLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLnBpcGUoc3dpdGNoTWFwKHN0cmlwZSA9PiBmcm9tKHN0cmlwZS5jb25maXJtS2xhcm5hUGF5bWVudChjbGllbnRTZWNyZXQsIGRhdGEsIG9wdGlvbnMpKSksIGZpcnN0KCkpO1xuICB9XG4gIGNvbmZpcm1Lb25iaW5pUGF5bWVudChjbGllbnRTZWNyZXQsIGRhdGEsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUucGlwZShzd2l0Y2hNYXAoc3RyaXBlID0+IGZyb20oc3RyaXBlLmNvbmZpcm1Lb25iaW5pUGF5bWVudChjbGllbnRTZWNyZXQsIGRhdGEsIG9wdGlvbnMpKSksIGZpcnN0KCkpO1xuICB9XG4gIGNvbmZpcm1Nb2JpbGVwYXlQYXltZW50KGNsaWVudFNlY3JldCwgZGF0YSwgb3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLnN0cmlwZS5waXBlKHN3aXRjaE1hcChzdHJpcGUgPT4gZnJvbShzdHJpcGUuY29uZmlybU1vYmlsZXBheVBheW1lbnQoY2xpZW50U2VjcmV0LCBkYXRhLCBvcHRpb25zKSkpLCBmaXJzdCgpKTtcbiAgfVxuICBjb25maXJtTXVsdGliYW5jb1BheW1lbnQoY2xpZW50U2VjcmV0LCBkYXRhLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLnBpcGUoc3dpdGNoTWFwKHN0cmlwZSA9PiBmcm9tKHN0cmlwZS5jb25maXJtTXVsdGliYW5jb1BheW1lbnQoY2xpZW50U2VjcmV0LCBkYXRhLCBvcHRpb25zKSkpLCBmaXJzdCgpKTtcbiAgfVxuICBjb25maXJtT3h4b1BheW1lbnQoY2xpZW50U2VjcmV0LCBkYXRhLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLnBpcGUoc3dpdGNoTWFwKHN0cmlwZSA9PiBmcm9tKHN0cmlwZS5jb25maXJtT3h4b1BheW1lbnQoY2xpZW50U2VjcmV0LCBkYXRhLCBvcHRpb25zKSkpLCBmaXJzdCgpKTtcbiAgfVxuICBjb25maXJtUDI0UGF5bWVudChjbGllbnRTZWNyZXQsIGRhdGEsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUucGlwZShzd2l0Y2hNYXAoc3RyaXBlID0+IGZyb20oc3RyaXBlLmNvbmZpcm1QMjRQYXltZW50KGNsaWVudFNlY3JldCwgZGF0YSwgb3B0aW9ucykpKSwgZmlyc3QoKSk7XG4gIH1cbiAgY29uZmlybVBheU5vd1BheW1lbnQoY2xpZW50U2VjcmV0LCBkYXRhLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLnBpcGUoc3dpdGNoTWFwKHN0cmlwZSA9PiBmcm9tKHN0cmlwZS5jb25maXJtUGF5Tm93UGF5bWVudChjbGllbnRTZWNyZXQsIGRhdGEsIG9wdGlvbnMpKSksIGZpcnN0KCkpO1xuICB9XG4gIGNvbmZpcm1QYXlQYWxQYXltZW50KGNsaWVudFNlY3JldCwgZGF0YSkge1xuICAgIHJldHVybiB0aGlzLnN0cmlwZS5waXBlKHN3aXRjaE1hcChzdHJpcGUgPT4gZnJvbShzdHJpcGUuY29uZmlybVBheVBhbFBheW1lbnQoY2xpZW50U2VjcmV0LCBkYXRhKSkpLCBmaXJzdCgpKTtcbiAgfVxuICBjb25maXJtUGl4UGF5bWVudChjbGllbnRTZWNyZXQsIGRhdGEsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUucGlwZShzd2l0Y2hNYXAoc3RyaXBlID0+IGZyb20oc3RyaXBlLmNvbmZpcm1QaXhQYXltZW50KGNsaWVudFNlY3JldCwgZGF0YSwgb3B0aW9ucykpKSwgZmlyc3QoKSk7XG4gIH1cbiAgY29uZmlybVByb21wdFBheVBheW1lbnQoY2xpZW50U2VjcmV0LCBkYXRhLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLnBpcGUoc3dpdGNoTWFwKHN0cmlwZSA9PiBmcm9tKHN0cmlwZS5jb25maXJtUHJvbXB0UGF5UGF5bWVudChjbGllbnRTZWNyZXQsIGRhdGEsIG9wdGlvbnMpKSksIGZpcnN0KCkpO1xuICB9XG4gIGNvbmZpcm1TZXBhRGViaXRQYXltZW50KGNsaWVudFNlY3JldCwgZGF0YSkge1xuICAgIHJldHVybiB0aGlzLnN0cmlwZS5waXBlKHN3aXRjaE1hcChzdHJpcGUgPT4gZnJvbShzdHJpcGUuY29uZmlybVNlcGFEZWJpdFBheW1lbnQoY2xpZW50U2VjcmV0LCBkYXRhKSkpLCBmaXJzdCgpKTtcbiAgfVxuICBjb25maXJtU29mb3J0UGF5bWVudChjbGllbnRTZWNyZXQsIGRhdGEsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUucGlwZShzd2l0Y2hNYXAoc3RyaXBlID0+IGZyb20oc3RyaXBlLmNvbmZpcm1Tb2ZvcnRQYXltZW50KGNsaWVudFNlY3JldCwgZGF0YSwgb3B0aW9ucykpKSwgZmlyc3QoKSk7XG4gIH1cbiAgY29uZmlybVR3aW50UGF5bWVudChjbGllbnRTZWNyZXQsIGRhdGEsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUucGlwZShzd2l0Y2hNYXAoc3RyaXBlID0+IGZyb20oc3RyaXBlLmNvbmZpcm1Ud2ludFBheW1lbnQoY2xpZW50U2VjcmV0LCBkYXRhLCBvcHRpb25zKSkpLCBmaXJzdCgpKTtcbiAgfVxuICBjb25maXJtV2VjaGF0UGF5UGF5bWVudChjbGllbnRTZWNyZXQsIGRhdGEsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUucGlwZShzd2l0Y2hNYXAoc3RyaXBlID0+IGZyb20oc3RyaXBlLmNvbmZpcm1XZWNoYXRQYXlQYXltZW50KGNsaWVudFNlY3JldCwgZGF0YSwgb3B0aW9ucykpKSwgZmlyc3QoKSk7XG4gIH1cbiAgaGFuZGxlQ2FyZEFjdGlvbihjbGllbnRTZWNyZXQpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUucGlwZShzd2l0Y2hNYXAoc3RyaXBlID0+IGZyb20oc3RyaXBlLmhhbmRsZUNhcmRBY3Rpb24oY2xpZW50U2VjcmV0KSkpLCBmaXJzdCgpKTtcbiAgfVxuICBoYW5kbGVOZXh0QWN0aW9uKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUucGlwZShzd2l0Y2hNYXAoc3RyaXBlID0+IGZyb20oc3RyaXBlLmhhbmRsZU5leHRBY3Rpb24ob3B0aW9ucykpKSwgZmlyc3QoKSk7XG4gIH1cbiAgdmVyaWZ5TWljcm9kZXBvc2l0c0ZvclBheW1lbnQoY2xpZW50U2VjcmV0LCBkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLnBpcGUoc3dpdGNoTWFwKHN0cmlwZSA9PiBmcm9tKHN0cmlwZS52ZXJpZnlNaWNyb2RlcG9zaXRzRm9yUGF5bWVudChjbGllbnRTZWNyZXQsIGRhdGEpKSksIGZpcnN0KCkpO1xuICB9XG4gIGNyZWF0ZVJhZGFyU2Vzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUucGlwZShzd2l0Y2hNYXAoc3RyaXBlID0+IGZyb20oc3RyaXBlLmNyZWF0ZVJhZGFyU2Vzc2lvbigpKSksIGZpcnN0KCkpO1xuICB9XG4gIGNvbGxlY3RCYW5rQWNjb3VudEZvclBheW1lbnQob3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLnN0cmlwZS5waXBlKHN3aXRjaE1hcChzdHJpcGUgPT4gZnJvbShzdHJpcGUuY29sbGVjdEJhbmtBY2NvdW50Rm9yUGF5bWVudChvcHRpb25zKSkpLCBmaXJzdCgpKTtcbiAgfVxuICBjcmVhdGVQYXltZW50TWV0aG9kKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUucGlwZShzd2l0Y2hNYXAoc3RyaXBlID0+IGZyb20oc3RyaXBlLmNyZWF0ZVBheW1lbnRNZXRob2Qob3B0aW9ucykpKSwgZmlyc3QoKSk7XG4gIH1cbiAgY3JlYXRlQ29uZmlybWF0aW9uVG9rZW4ob3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLnN0cmlwZS5waXBlKHN3aXRjaE1hcChzdHJpcGUgPT4gZnJvbShzdHJpcGUuY3JlYXRlQ29uZmlybWF0aW9uVG9rZW4ob3B0aW9ucykpKSwgZmlyc3QoKSk7XG4gIH1cbiAgcmV0cmlldmVQYXltZW50SW50ZW50KGNsaWVudFNlY3JldCkge1xuICAgIHJldHVybiB0aGlzLnN0cmlwZS5waXBlKHN3aXRjaE1hcChzdHJpcGUgPT4gZnJvbShzdHJpcGUucmV0cmlldmVQYXltZW50SW50ZW50KGNsaWVudFNlY3JldCkpKSwgZmlyc3QoKSk7XG4gIH1cbiAgY29uZmlybVNldHVwKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUucGlwZShzd2l0Y2hNYXAoc3RyaXBlID0+IGZyb20oc3RyaXBlLmNvbmZpcm1TZXR1cChvcHRpb25zKSkpLCBmaXJzdCgpKTtcbiAgfVxuICBjb25maXJtQWNzc0RlYml0U2V0dXAoY2xpZW50U2VjcmV0LCBkYXRhLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLnBpcGUoc3dpdGNoTWFwKHN0cmlwZSA9PiBmcm9tKHN0cmlwZS5jb25maXJtQWNzc0RlYml0U2V0dXAoY2xpZW50U2VjcmV0LCBkYXRhLCBvcHRpb25zKSkpLCBmaXJzdCgpKTtcbiAgfVxuICBjb25maXJtVXNCYW5rQWNjb3VudFNldHVwKGNsaWVudFNlY3JldCwgZGF0YSkge1xuICAgIHJldHVybiB0aGlzLnN0cmlwZS5waXBlKHN3aXRjaE1hcChzdHJpcGUgPT4gZnJvbShzdHJpcGUuY29uZmlybVVzQmFua0FjY291bnRTZXR1cChjbGllbnRTZWNyZXQsIGRhdGEpKSksIGZpcnN0KCkpO1xuICB9XG4gIGNvbmZpcm1BdUJlY3NEZWJpdFNldHVwKGNsaWVudFNlY3JldCwgZGF0YSkge1xuICAgIHJldHVybiB0aGlzLnN0cmlwZS5waXBlKHN3aXRjaE1hcChzdHJpcGUgPT4gZnJvbShzdHJpcGUuY29uZmlybUF1QmVjc0RlYml0U2V0dXAoY2xpZW50U2VjcmV0LCBkYXRhKSkpLCBmaXJzdCgpKTtcbiAgfVxuICBjb25maXJtQmFjc0RlYml0U2V0dXAoY2xpZW50U2VjcmV0LCBkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLnBpcGUoc3dpdGNoTWFwKHN0cmlwZSA9PiBmcm9tKHN0cmlwZS5jb25maXJtQmFjc0RlYml0U2V0dXAoY2xpZW50U2VjcmV0LCBkYXRhKSkpLCBmaXJzdCgpKTtcbiAgfVxuICBjb25maXJtQmFuY29udGFjdFNldHVwKGNsaWVudFNlY3JldCwgZGF0YSkge1xuICAgIHJldHVybiB0aGlzLnN0cmlwZS5waXBlKHN3aXRjaE1hcChzdHJpcGUgPT4gZnJvbShzdHJpcGUuY29uZmlybUJhbmNvbnRhY3RTZXR1cChjbGllbnRTZWNyZXQsIGRhdGEpKSksIGZpcnN0KCkpO1xuICB9XG4gIGNvbmZpcm1DYXJkU2V0dXAoY2xpZW50U2VjcmV0LCBkYXRhLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLnBpcGUoc3dpdGNoTWFwKHN0cmlwZSA9PiBmcm9tKHN0cmlwZS5jb25maXJtQ2FyZFNldHVwKGNsaWVudFNlY3JldCwgZGF0YSwgb3B0aW9ucykpKSwgZmlyc3QoKSk7XG4gIH1cbiAgY29uZmlybUNhc2hhcHBTZXR1cChjbGllbnRTZWNyZXQsIGRhdGEsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUucGlwZShzd2l0Y2hNYXAoc3RyaXBlID0+IGZyb20oc3RyaXBlLmNvbmZpcm1DYXNoYXBwU2V0dXAoY2xpZW50U2VjcmV0LCBkYXRhLCBvcHRpb25zKSkpLCBmaXJzdCgpKTtcbiAgfVxuICBjb25maXJtSWRlYWxTZXR1cChjbGllbnRTZWNyZXQsIGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUucGlwZShzd2l0Y2hNYXAoc3RyaXBlID0+IGZyb20oc3RyaXBlLmNvbmZpcm1JZGVhbFNldHVwKGNsaWVudFNlY3JldCwgZGF0YSkpKSwgZmlyc3QoKSk7XG4gIH1cbiAgY29uZmlybVBheVBhbFNldHVwKGNsaWVudFNlY3JldCwgZGF0YSkge1xuICAgIHJldHVybiB0aGlzLnN0cmlwZS5waXBlKHN3aXRjaE1hcChzdHJpcGUgPT4gZnJvbShzdHJpcGUuY29uZmlybVBheVBhbFNldHVwKGNsaWVudFNlY3JldCwgZGF0YSkpKSwgZmlyc3QoKSk7XG4gIH1cbiAgY29uZmlybVNlcGFEZWJpdFNldHVwKGNsaWVudFNlY3JldCwgZGF0YSkge1xuICAgIHJldHVybiB0aGlzLnN0cmlwZS5waXBlKHN3aXRjaE1hcChzdHJpcGUgPT4gZnJvbShzdHJpcGUuY29uZmlybVNlcGFEZWJpdFNldHVwKGNsaWVudFNlY3JldCwgZGF0YSkpKSwgZmlyc3QoKSk7XG4gIH1cbiAgY29uZmlybVNvZm9ydFNldHVwKGNsaWVudFNlY3JldCwgZGF0YSwgb3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLnN0cmlwZS5waXBlKHN3aXRjaE1hcChzdHJpcGUgPT4gZnJvbShzdHJpcGUuY29uZmlybVNvZm9ydFNldHVwKGNsaWVudFNlY3JldCwgZGF0YSwgb3B0aW9ucykpKSwgZmlyc3QoKSk7XG4gIH1cbiAgY29uZmlybUFmZmlybVBheW1lbnQoY2xpZW50U2VjcmV0LCBkYXRhLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLnBpcGUoc3dpdGNoTWFwKHN0cmlwZSA9PiBmcm9tKHN0cmlwZS5jb25maXJtQWZmaXJtUGF5bWVudChjbGllbnRTZWNyZXQsIGRhdGEsIG9wdGlvbnMpKSksIGZpcnN0KCkpO1xuICB9XG4gIGNvbmZpcm1BZnRlcnBheUNsZWFycGF5UGF5bWVudChjbGllbnRTZWNyZXQsIGRhdGEsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUucGlwZShzd2l0Y2hNYXAoc3RyaXBlID0+IGZyb20oc3RyaXBlLmNvbmZpcm1BZnRlcnBheUNsZWFycGF5UGF5bWVudChjbGllbnRTZWNyZXQsIGRhdGEsIG9wdGlvbnMpKSksIGZpcnN0KCkpO1xuICB9XG4gIHZlcmlmeU1pY3JvZGVwb3NpdHNGb3JTZXR1cChjbGllbnRTZWNyZXQsIGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUucGlwZShzd2l0Y2hNYXAoc3RyaXBlID0+IGZyb20oc3RyaXBlLnZlcmlmeU1pY3JvZGVwb3NpdHNGb3JTZXR1cChjbGllbnRTZWNyZXQsIGRhdGEpKSksIGZpcnN0KCkpO1xuICB9XG4gIGNvbGxlY3RCYW5rQWNjb3VudEZvclNldHVwKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUucGlwZShzd2l0Y2hNYXAoc3RyaXBlID0+IGZyb20oc3RyaXBlLmNvbGxlY3RCYW5rQWNjb3VudEZvclNldHVwKG9wdGlvbnMpKSksIGZpcnN0KCkpO1xuICB9XG4gIHJldHJpZXZlU2V0dXBJbnRlbnQoY2xpZW50U2VjcmV0KSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLnBpcGUoc3dpdGNoTWFwKHN0cmlwZSA9PiBmcm9tKHN0cmlwZS5yZXRyaWV2ZVNldHVwSW50ZW50KGNsaWVudFNlY3JldCkpKSwgZmlyc3QoKSk7XG4gIH1cbiAgcHJvY2Vzc09yZGVyKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUucGlwZShzd2l0Y2hNYXAoc3RyaXBlID0+IGZyb20oc3RyaXBlLnByb2Nlc3NPcmRlcihvcHRpb25zKSkpLCBmaXJzdCgpKTtcbiAgfVxuICByZXRyaWV2ZU9yZGVyKGNsaWVudFNlY3JldCkge1xuICAgIHJldHVybiB0aGlzLnN0cmlwZS5waXBlKHN3aXRjaE1hcChzdHJpcGUgPT4gZnJvbShzdHJpcGUucmV0cmlldmVPcmRlcihjbGllbnRTZWNyZXQpKSksIGZpcnN0KCkpO1xuICB9XG4gIHBheW1lbnRSZXF1ZXN0KG9wdGlvbnMpIHtcbiAgICBjb25zdCBzdHJpcGUgPSB0aGlzLmdldEluc3RhbmNlKCk7XG4gICAgcmV0dXJuIHN0cmlwZS5wYXltZW50UmVxdWVzdChvcHRpb25zKTtcbiAgfVxuICBjcmVhdGVUb2tlbih0b2tlblR5cGUsIGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUucGlwZShzd2l0Y2hNYXAoc3RyaXBlID0+IGZyb20oc3RyaXBlLmNyZWF0ZVRva2VuKHRva2VuVHlwZSwgZGF0YSkpKSwgZmlyc3QoKSk7XG4gIH1cbiAgY3JlYXRlU291cmNlKGEsIGIpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUucGlwZShzd2l0Y2hNYXAoc3RyaXBlID0+IGZyb20oc3RyaXBlLmNyZWF0ZVNvdXJjZShhLCBiKSkpLCBmaXJzdCgpKTtcbiAgfVxuICByZXRyaWV2ZVNvdXJjZShzb3VyY2UpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUucGlwZShzd2l0Y2hNYXAoc3RyaXBlID0+IGZyb20oc3RyaXBlLnJldHJpZXZlU291cmNlKHNvdXJjZSkpKSwgZmlyc3QoKSk7XG4gIH1cbiAgdmVyaWZ5SWRlbnRpdHkoY2xpZW50U2VjcmV0KSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLnBpcGUoc3dpdGNoTWFwKHN0cmlwZSA9PiBmcm9tKHN0cmlwZS52ZXJpZnlJZGVudGl0eShjbGllbnRTZWNyZXQpKSksIGZpcnN0KCkpO1xuICB9XG4gIGNvbGxlY3RGaW5hbmNpYWxDb25uZWN0aW9uc0FjY291bnRzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUucGlwZShzd2l0Y2hNYXAoc3RyaXBlID0+IGZyb20oc3RyaXBlLmNvbGxlY3RGaW5hbmNpYWxDb25uZWN0aW9uc0FjY291bnRzKG9wdGlvbnMpKSksIGZpcnN0KCkpO1xuICB9XG4gIGNvbGxlY3RCYW5rQWNjb3VudFRva2VuKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUucGlwZShzd2l0Y2hNYXAoc3RyaXBlID0+IGZyb20oc3RyaXBlLmNvbGxlY3RCYW5rQWNjb3VudFRva2VuKG9wdGlvbnMpKSksIGZpcnN0KCkpO1xuICB9XG4gIGNyZWF0ZUVwaGVtZXJhbEtleU5vbmNlKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUucGlwZShzd2l0Y2hNYXAoc3RyaXBlID0+IGZyb20oc3RyaXBlLmNyZWF0ZUVwaGVtZXJhbEtleU5vbmNlKG9wdGlvbnMpKSksIGZpcnN0KCkpO1xuICB9XG4gIGluaXRDaGVja291dChvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLnBpcGUoc3dpdGNoTWFwKHN0cmlwZSA9PiBmcm9tKHN0cmlwZS5pbml0Q2hlY2tvdXQob3B0aW9ucykpKSwgZmlyc3QoKSk7XG4gIH1cbiAgaW5pdEVtYmVkZGVkQ2hlY2tvdXQob3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLnN0cmlwZS5waXBlKHN3aXRjaE1hcChzdHJpcGUgPT4gZnJvbShzdHJpcGUuaW5pdEVtYmVkZGVkQ2hlY2tvdXQob3B0aW9ucykpKSwgZmlyc3QoKSk7XG4gIH1cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkXG4gICAqL1xuICBoYW5kbGVDYXJkUGF5bWVudChjbGllbnRTZWNyZXQsIGVsZW1lbnQsIGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUucGlwZShzd2l0Y2hNYXAoc3RyaXBlID0+IGZyb20oc3RyaXBlLmhhbmRsZUNhcmRQYXltZW50KGNsaWVudFNlY3JldCwgZWxlbWVudCwgZGF0YSkpKSwgZmlyc3QoKSk7XG4gIH1cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkXG4gICAqL1xuICBjb25maXJtUGF5bWVudEludGVudChjbGllbnRTZWNyZXQsIGVsZW1lbnQsIGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUucGlwZShzd2l0Y2hNYXAoc3RyaXBlID0+IGZyb20oc3RyaXBlLmNvbmZpcm1QYXltZW50SW50ZW50KGNsaWVudFNlY3JldCwgZWxlbWVudCwgZGF0YSkpKSwgZmlyc3QoKSk7XG4gIH1cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkXG4gICAqL1xuICBoYW5kbGVDYXJkU2V0dXAoY2xpZW50U2VjcmV0LCBlbGVtZW50LCBkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLnBpcGUoc3dpdGNoTWFwKHN0cmlwZSA9PiBmcm9tKHN0cmlwZS5oYW5kbGVDYXJkU2V0dXAoY2xpZW50U2VjcmV0LCBlbGVtZW50LCBkYXRhKSkpLCBmaXJzdCgpKTtcbiAgfVxuICAvKipcbiAgICogQGRlcHJlY2F0ZWRcbiAgICovXG4gIGNvbmZpcm1TZXR1cEludGVudChjbGllbnRTZWNyZXQsIGVsZW1lbnQsIGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUucGlwZShzd2l0Y2hNYXAoc3RyaXBlID0+IGZyb20oc3RyaXBlLmNvbmZpcm1TZXR1cEludGVudChjbGllbnRTZWNyZXQsIGVsZW1lbnQsIGRhdGEpKSksIGZpcnN0KCkpO1xuICB9XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZFxuICAgKi9cbiAgaGFuZGxlRnB4UGF5bWVudChjbGllbnRTZWNyZXQsIGVsZW1lbnQsIGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUucGlwZShzd2l0Y2hNYXAoc3RyaXBlID0+IGZyb20oc3RyaXBlLmhhbmRsZUZweFBheW1lbnQoY2xpZW50U2VjcmV0LCBlbGVtZW50LCBkYXRhKSkpLCBmaXJzdCgpKTtcbiAgfVxuICBnZXROZ3hTdHJpcGVBcHBJbmZvKHZlcnNpb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogJ25neC1zdHJpcGUnLFxuICAgICAgdXJsOiAnaHR0cHM6Ly9uZ3gtc3RyaXBlLmRldicsXG4gICAgICBwYXJ0bmVyX2lkOiAncHBfcGFydG5lcl9KUjRsMXJtdlVvUFA0VicsXG4gICAgICB2ZXJzaW9uXG4gICAgfTtcbiAgfVxufVxuY2xhc3MgV2luZG93UmVmIHtcbiAgcGxhdGZvcm1JZDtcbiAgY29uc3RydWN0b3IocGxhdGZvcm1JZCkge1xuICAgIHRoaXMucGxhdGZvcm1JZCA9IHBsYXRmb3JtSWQ7XG4gIH1cbiAgZ2V0TmF0aXZlV2luZG93KCkge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICByZXR1cm4gd2luZG93O1xuICAgIH1cbiAgICByZXR1cm4ge307XG4gIH1cbiAgc3RhdGljIMm1ZmFjID0gZnVuY3Rpb24gV2luZG93UmVmX0ZhY3RvcnkoX19uZ0ZhY3RvcnlUeXBlX18pIHtcbiAgICByZXR1cm4gbmV3IChfX25nRmFjdG9yeVR5cGVfXyB8fCBXaW5kb3dSZWYpKGkwLsm1ybVpbmplY3QoUExBVEZPUk1fSUQpKTtcbiAgfTtcbiAgc3RhdGljIMm1cHJvdiA9IC8qIEBfX1BVUkVfXyAqL2kwLsm1ybVkZWZpbmVJbmplY3RhYmxlKHtcbiAgICB0b2tlbjogV2luZG93UmVmLFxuICAgIGZhY3Rvcnk6IFdpbmRvd1JlZi7JtWZhY1xuICB9KTtcbn1cbigoKSA9PiB7XG4gICh0eXBlb2YgbmdEZXZNb2RlID09PSBcInVuZGVmaW5lZFwiIHx8IG5nRGV2TW9kZSkgJiYgaTAuybVzZXRDbGFzc01ldGFkYXRhKFdpbmRvd1JlZiwgW3tcbiAgICB0eXBlOiBJbmplY3RhYmxlXG4gIH1dLCAoKSA9PiBbe1xuICAgIHR5cGU6IHVuZGVmaW5lZCxcbiAgICBkZWNvcmF0b3JzOiBbe1xuICAgICAgdHlwZTogSW5qZWN0LFxuICAgICAgYXJnczogW1BMQVRGT1JNX0lEXVxuICAgIH1dXG4gIH1dLCBudWxsKTtcbn0pKCk7XG5jbGFzcyBEb2N1bWVudFJlZiB7XG4gIHBsYXRmb3JtSWQ7XG4gIGNvbnN0cnVjdG9yKHBsYXRmb3JtSWQpIHtcbiAgICB0aGlzLnBsYXRmb3JtSWQgPSBwbGF0Zm9ybUlkO1xuICB9XG4gIGdldE5hdGl2ZURvY3VtZW50KCkge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiB7fTtcbiAgfVxuICBzdGF0aWMgybVmYWMgPSBmdW5jdGlvbiBEb2N1bWVudFJlZl9GYWN0b3J5KF9fbmdGYWN0b3J5VHlwZV9fKSB7XG4gICAgcmV0dXJuIG5ldyAoX19uZ0ZhY3RvcnlUeXBlX18gfHwgRG9jdW1lbnRSZWYpKGkwLsm1ybVpbmplY3QoUExBVEZPUk1fSUQpKTtcbiAgfTtcbiAgc3RhdGljIMm1cHJvdiA9IC8qIEBfX1BVUkVfXyAqL2kwLsm1ybVkZWZpbmVJbmplY3RhYmxlKHtcbiAgICB0b2tlbjogRG9jdW1lbnRSZWYsXG4gICAgZmFjdG9yeTogRG9jdW1lbnRSZWYuybVmYWNcbiAgfSk7XG59XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShEb2N1bWVudFJlZiwgW3tcbiAgICB0eXBlOiBJbmplY3RhYmxlXG4gIH1dLCAoKSA9PiBbe1xuICAgIHR5cGU6IHVuZGVmaW5lZCxcbiAgICBkZWNvcmF0b3JzOiBbe1xuICAgICAgdHlwZTogSW5qZWN0LFxuICAgICAgYXJnczogW1BMQVRGT1JNX0lEXVxuICAgIH1dXG4gIH1dLCBudWxsKTtcbn0pKCk7XG5jbGFzcyBMYXp5U3RyaXBlQVBJTG9hZGVyIHtcbiAgcGxhdGZvcm1JZDtcbiAgd2luZG93O1xuICBkb2N1bWVudDtcbiAgem9uZTtcbiAgc3RhdHVzID0gbmV3IEJlaGF2aW9yU3ViamVjdCh7XG4gICAgZXJyb3I6IGZhbHNlLFxuICAgIGxvYWRlZDogZmFsc2UsXG4gICAgbG9hZGluZzogZmFsc2VcbiAgfSk7XG4gIGNvbnN0cnVjdG9yKHBsYXRmb3JtSWQsIHdpbmRvdywgZG9jdW1lbnQsIHpvbmUpIHtcbiAgICB0aGlzLnBsYXRmb3JtSWQgPSBwbGF0Zm9ybUlkO1xuICAgIHRoaXMud2luZG93ID0gd2luZG93O1xuICAgIHRoaXMuZG9jdW1lbnQgPSBkb2N1bWVudDtcbiAgICB0aGlzLnpvbmUgPSB6b25lO1xuICB9XG4gIGFzU3RyZWFtKCkge1xuICAgIHRoaXMubG9hZCgpO1xuICAgIHJldHVybiB0aGlzLnN0YXR1cy5hc09ic2VydmFibGUoKTtcbiAgfVxuICBpc1JlYWR5KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXR1cy5nZXRWYWx1ZSgpLmxvYWRlZDtcbiAgfVxuICBsb2FkKCkge1xuICAgIGlmIChpc1BsYXRmb3JtU2VydmVyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgd2luID0gdGhpcy53aW5kb3cuZ2V0TmF0aXZlV2luZG93KCk7XG4gICAgY29uc3Qge1xuICAgICAgbG9hZGVkLFxuICAgICAgbG9hZGluZyxcbiAgICAgIGVycm9yXG4gICAgfSA9IHRoaXMuc3RhdHVzLmdldFZhbHVlKCk7XG4gICAgaWYgKHdpbi5oYXNPd25Qcm9wZXJ0eSgnU3RyaXBlJykpIHtcbiAgICAgIHRoaXMuc3RhdHVzLm5leHQoe1xuICAgICAgICBsb2FkZWQ6IHRydWUsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICBlcnJvcjogZmFsc2VcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWxvYWRlZCAmJiAhbG9hZGluZykge1xuICAgICAgdGhpcy5zdGF0dXMubmV4dCh7XG4gICAgICAgIGxvYWRlZDogZmFsc2UsXG4gICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgIGVycm9yXG4gICAgICB9KTtcbiAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmluamVjdFNjcmlwdCgpKTtcbiAgICB9XG4gIH1cbiAgaW5qZWN0U2NyaXB0KCkge1xuICAgIGNvbnN0IHNjcmlwdCA9IHRoaXMuZG9jdW1lbnQuZ2V0TmF0aXZlRG9jdW1lbnQoKS5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XG4gICAgc2NyaXB0LmRlZmVyID0gdHJ1ZTtcbiAgICBzY3JpcHQuc3JjID0gJ2h0dHBzOi8vanMuc3RyaXBlLmNvbS9iYXNpbC9zdHJpcGUuanMnO1xuICAgIHNjcmlwdC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5zdGF0dXMubmV4dCh7XG4gICAgICAgICAgbG9hZGVkOiB0cnVlLFxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIGVycm9yOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5zdGF0dXMubmV4dCh7XG4gICAgICAgICAgbG9hZGVkOiBmYWxzZSxcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICBlcnJvcjogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgdGhpcy5kb2N1bWVudC5nZXROYXRpdmVEb2N1bWVudCgpLmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgfVxuICBzdGF0aWMgybVmYWMgPSBmdW5jdGlvbiBMYXp5U3RyaXBlQVBJTG9hZGVyX0ZhY3RvcnkoX19uZ0ZhY3RvcnlUeXBlX18pIHtcbiAgICByZXR1cm4gbmV3IChfX25nRmFjdG9yeVR5cGVfXyB8fCBMYXp5U3RyaXBlQVBJTG9hZGVyKShpMC7Jtcm1aW5qZWN0KFBMQVRGT1JNX0lEKSwgaTAuybXJtWluamVjdChXaW5kb3dSZWYpLCBpMC7Jtcm1aW5qZWN0KERvY3VtZW50UmVmKSwgaTAuybXJtWluamVjdChpMC5OZ1pvbmUpKTtcbiAgfTtcbiAgc3RhdGljIMm1cHJvdiA9IC8qIEBfX1BVUkVfXyAqL2kwLsm1ybVkZWZpbmVJbmplY3RhYmxlKHtcbiAgICB0b2tlbjogTGF6eVN0cmlwZUFQSUxvYWRlcixcbiAgICBmYWN0b3J5OiBMYXp5U3RyaXBlQVBJTG9hZGVyLsm1ZmFjXG4gIH0pO1xufVxuKCgpID0+IHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoTGF6eVN0cmlwZUFQSUxvYWRlciwgW3tcbiAgICB0eXBlOiBJbmplY3RhYmxlXG4gIH1dLCAoKSA9PiBbe1xuICAgIHR5cGU6IHVuZGVmaW5lZCxcbiAgICBkZWNvcmF0b3JzOiBbe1xuICAgICAgdHlwZTogSW5qZWN0LFxuICAgICAgYXJnczogW1BMQVRGT1JNX0lEXVxuICAgIH1dXG4gIH0sIHtcbiAgICB0eXBlOiBXaW5kb3dSZWZcbiAgfSwge1xuICAgIHR5cGU6IERvY3VtZW50UmVmXG4gIH0sIHtcbiAgICB0eXBlOiBpMC5OZ1pvbmVcbiAgfV0sIG51bGwpO1xufSkoKTtcbmNsYXNzIFN0cmlwZVNlcnZpY2Uge1xuICB2ZXJzaW9uO1xuICBrZXk7XG4gIG9wdGlvbnM7XG4gIGxvYWRlcjtcbiAgd2luZG93O1xuICBzdHJpcGU7XG4gIGNvbnN0cnVjdG9yKHZlcnNpb24sIGtleSwgb3B0aW9ucywgbG9hZGVyLCB3aW5kb3cpIHtcbiAgICB0aGlzLnZlcnNpb24gPSB2ZXJzaW9uO1xuICAgIHRoaXMua2V5ID0ga2V5O1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5sb2FkZXIgPSBsb2FkZXI7XG4gICAgdGhpcy53aW5kb3cgPSB3aW5kb3c7XG4gICAgaWYgKGtleSkge1xuICAgICAgdGhpcy5zdHJpcGUgPSBuZXcgU3RyaXBlSW5zdGFuY2UodGhpcy52ZXJzaW9uLCB0aGlzLmxvYWRlciwgdGhpcy53aW5kb3csIGtleSwgb3B0aW9ucyk7XG4gICAgfVxuICB9XG4gIGdldFN0cmlwZVJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2FkZXIuYXNTdHJlYW0oKS5waXBlKGZpbHRlcihzdGF0dXMgPT4gc3RhdHVzLmxvYWRlZCA9PT0gdHJ1ZSksIG1hcCgoKSA9PiB0aGlzLndpbmRvdy5nZXROYXRpdmVXaW5kb3coKS5TdHJpcGUpKTtcbiAgfVxuICBnZXRJbnN0YW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUuZ2V0SW5zdGFuY2UoKTtcbiAgfVxuICBzZXRLZXkoa2V5LCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlS2V5KGtleSwgb3B0aW9ucyk7XG4gIH1cbiAgY2hhbmdlS2V5KGtleSwgb3B0aW9ucykge1xuICAgIHRoaXMuc3RyaXBlID0gbmV3IFN0cmlwZUluc3RhbmNlKHRoaXMudmVyc2lvbiwgdGhpcy5sb2FkZXIsIHRoaXMud2luZG93LCBrZXksIG9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzLnN0cmlwZTtcbiAgfVxuICBlbGVtZW50cyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLmVsZW1lbnRzKG9wdGlvbnMpO1xuICB9XG4gIHJlZGlyZWN0VG9DaGVja291dChvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLnJlZGlyZWN0VG9DaGVja291dChvcHRpb25zKTtcbiAgfVxuICBjb25maXJtUGF5bWVudChvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLmNvbmZpcm1QYXltZW50KG9wdGlvbnMpO1xuICB9XG4gIGNvbmZpcm1BY3NzRGViaXRQYXltZW50KGNsaWVudFNlY3JldCwgZGF0YSwgb3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLnN0cmlwZS5jb25maXJtQWNzc0RlYml0UGF5bWVudChjbGllbnRTZWNyZXQsIGRhdGEsIG9wdGlvbnMpO1xuICB9XG4gIGNvbmZpcm1Vc0JhbmtBY2NvdW50UGF5bWVudChjbGllbnRTZWNyZXQsIGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUuY29uZmlybVVzQmFua0FjY291bnRQYXltZW50KGNsaWVudFNlY3JldCwgZGF0YSk7XG4gIH1cbiAgY29uZmlybUFsaXBheVBheW1lbnQoY2xpZW50U2VjcmV0LCBkYXRhLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLmNvbmZpcm1BbGlwYXlQYXltZW50KGNsaWVudFNlY3JldCwgZGF0YSwgb3B0aW9ucyk7XG4gIH1cbiAgY29uZmlybUF1QmVjc0RlYml0UGF5bWVudChjbGllbnRTZWNyZXQsIGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUuY29uZmlybUF1QmVjc0RlYml0UGF5bWVudChjbGllbnRTZWNyZXQsIGRhdGEpO1xuICB9XG4gIGNvbmZpcm1CYW5jb250YWN0UGF5bWVudChjbGllbnRTZWNyZXQsIGRhdGEsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUuY29uZmlybUJhbmNvbnRhY3RQYXltZW50KGNsaWVudFNlY3JldCwgZGF0YSwgb3B0aW9ucyk7XG4gIH1cbiAgY29uZmlybUJsaWtQYXltZW50KGNsaWVudFNlY3JldCwgZGF0YSwgb3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLnN0cmlwZS5jb25maXJtQmxpa1BheW1lbnQoY2xpZW50U2VjcmV0LCBkYXRhLCBvcHRpb25zKTtcbiAgfVxuICBjb25maXJtQm9sZXRvUGF5bWVudChjbGllbnRTZWNyZXQsIGRhdGEsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUuY29uZmlybUJvbGV0b1BheW1lbnQoY2xpZW50U2VjcmV0LCBkYXRhLCBvcHRpb25zKTtcbiAgfVxuICBjb25maXJtQ2FyZFBheW1lbnQoY2xpZW50U2VjcmV0LCBkYXRhLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLmNvbmZpcm1DYXJkUGF5bWVudChjbGllbnRTZWNyZXQsIGRhdGEsIG9wdGlvbnMpO1xuICB9XG4gIGNvbmZpcm1DYXNoYXBwUGF5bWVudChjbGllbnRTZWNyZXQsIGRhdGEsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUuY29uZmlybUNhc2hhcHBQYXltZW50KGNsaWVudFNlY3JldCwgZGF0YSwgb3B0aW9ucyk7XG4gIH1cbiAgY29uZmlybUN1c3RvbWVyQmFsYW5jZVBheW1lbnQoY2xpZW50U2VjcmV0LCBkYXRhLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLmNvbmZpcm1DdXN0b21lckJhbGFuY2VQYXltZW50KGNsaWVudFNlY3JldCwgZGF0YSwgb3B0aW9ucyk7XG4gIH1cbiAgY29uZmlybUVwc1BheW1lbnQoY2xpZW50U2VjcmV0LCBkYXRhLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLmNvbmZpcm1FcHNQYXltZW50KGNsaWVudFNlY3JldCwgZGF0YSwgb3B0aW9ucyk7XG4gIH1cbiAgY29uZmlybUZweFBheW1lbnQoY2xpZW50U2VjcmV0LCBkYXRhLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLmNvbmZpcm1GcHhQYXltZW50KGNsaWVudFNlY3JldCwgZGF0YSwgb3B0aW9ucyk7XG4gIH1cbiAgY29uZmlybUdpcm9wYXlQYXltZW50KGNsaWVudFNlY3JldCwgZGF0YSwgb3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLnN0cmlwZS5jb25maXJtR2lyb3BheVBheW1lbnQoY2xpZW50U2VjcmV0LCBkYXRhLCBvcHRpb25zKTtcbiAgfVxuICBjb25maXJtR3JhYlBheVBheW1lbnQoY2xpZW50U2VjcmV0LCBkYXRhLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLmNvbmZpcm1HcmFiUGF5UGF5bWVudChjbGllbnRTZWNyZXQsIGRhdGEsIG9wdGlvbnMpO1xuICB9XG4gIGNvbmZpcm1JZGVhbFBheW1lbnQoY2xpZW50U2VjcmV0LCBkYXRhLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLmNvbmZpcm1JZGVhbFBheW1lbnQoY2xpZW50U2VjcmV0LCBkYXRhLCBvcHRpb25zKTtcbiAgfVxuICBjb25maXJtS2xhcm5hUGF5bWVudChjbGllbnRTZWNyZXQsIGRhdGEsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUuY29uZmlybUtsYXJuYVBheW1lbnQoY2xpZW50U2VjcmV0LCBkYXRhLCBvcHRpb25zKTtcbiAgfVxuICBjb25maXJtS29uYmluaVBheW1lbnQoY2xpZW50U2VjcmV0LCBkYXRhLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLmNvbmZpcm1Lb25iaW5pUGF5bWVudChjbGllbnRTZWNyZXQsIGRhdGEsIG9wdGlvbnMpO1xuICB9XG4gIGNvbmZpcm1Nb2JpbGVwYXlQYXltZW50KGNsaWVudFNlY3JldCwgZGF0YSwgb3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLnN0cmlwZS5jb25maXJtTW9iaWxlcGF5UGF5bWVudChjbGllbnRTZWNyZXQsIGRhdGEsIG9wdGlvbnMpO1xuICB9XG4gIGNvbmZpcm1NdWx0aWJhbmNvUGF5bWVudChjbGllbnRTZWNyZXQsIGRhdGEsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUuY29uZmlybU11bHRpYmFuY29QYXltZW50KGNsaWVudFNlY3JldCwgZGF0YSwgb3B0aW9ucyk7XG4gIH1cbiAgY29uZmlybU94eG9QYXltZW50KGNsaWVudFNlY3JldCwgZGF0YSwgb3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLnN0cmlwZS5jb25maXJtT3h4b1BheW1lbnQoY2xpZW50U2VjcmV0LCBkYXRhLCBvcHRpb25zKTtcbiAgfVxuICBjb25maXJtUDI0UGF5bWVudChjbGllbnRTZWNyZXQsIGRhdGEsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUuY29uZmlybVAyNFBheW1lbnQoY2xpZW50U2VjcmV0LCBkYXRhLCBvcHRpb25zKTtcbiAgfVxuICBjb25maXJtUGF5Tm93UGF5bWVudChjbGllbnRTZWNyZXQsIGRhdGEsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUuY29uZmlybVBheU5vd1BheW1lbnQoY2xpZW50U2VjcmV0LCBkYXRhLCBvcHRpb25zKTtcbiAgfVxuICBjb25maXJtUGF5UGFsUGF5bWVudChjbGllbnRTZWNyZXQsIGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUuY29uZmlybVBheVBhbFBheW1lbnQoY2xpZW50U2VjcmV0LCBkYXRhKTtcbiAgfVxuICBjb25maXJtUGl4UGF5bWVudChjbGllbnRTZWNyZXQsIGRhdGEsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUuY29uZmlybVBpeFBheW1lbnQoY2xpZW50U2VjcmV0LCBkYXRhLCBvcHRpb25zKTtcbiAgfVxuICBjb25maXJtUHJvbXB0UGF5UGF5bWVudChjbGllbnRTZWNyZXQsIGRhdGEsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUuY29uZmlybVByb21wdFBheVBheW1lbnQoY2xpZW50U2VjcmV0LCBkYXRhLCBvcHRpb25zKTtcbiAgfVxuICBjb25maXJtU2VwYURlYml0UGF5bWVudChjbGllbnRTZWNyZXQsIGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUuY29uZmlybVNlcGFEZWJpdFBheW1lbnQoY2xpZW50U2VjcmV0LCBkYXRhKTtcbiAgfVxuICBjb25maXJtU29mb3J0UGF5bWVudChjbGllbnRTZWNyZXQsIGRhdGEsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUuY29uZmlybVNvZm9ydFBheW1lbnQoY2xpZW50U2VjcmV0LCBkYXRhLCBvcHRpb25zKTtcbiAgfVxuICBjb25maXJtVHdpbnRQYXltZW50KGNsaWVudFNlY3JldCwgZGF0YSwgb3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLnN0cmlwZS5jb25maXJtVHdpbnRQYXltZW50KGNsaWVudFNlY3JldCwgZGF0YSwgb3B0aW9ucyk7XG4gIH1cbiAgY29uZmlybVdlY2hhdFBheVBheW1lbnQoY2xpZW50U2VjcmV0LCBkYXRhLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLmNvbmZpcm1XZWNoYXRQYXlQYXltZW50KGNsaWVudFNlY3JldCwgZGF0YSwgb3B0aW9ucyk7XG4gIH1cbiAgaGFuZGxlQ2FyZEFjdGlvbihjbGllbnRTZWNyZXQpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUuaGFuZGxlQ2FyZEFjdGlvbihjbGllbnRTZWNyZXQpO1xuICB9XG4gIGhhbmRsZU5leHRBY3Rpb24ob3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLnN0cmlwZS5oYW5kbGVOZXh0QWN0aW9uKG9wdGlvbnMpO1xuICB9XG4gIHZlcmlmeU1pY3JvZGVwb3NpdHNGb3JQYXltZW50KGNsaWVudFNlY3JldCwgZGF0YSkge1xuICAgIHJldHVybiB0aGlzLnN0cmlwZS52ZXJpZnlNaWNyb2RlcG9zaXRzRm9yUGF5bWVudChjbGllbnRTZWNyZXQsIGRhdGEpO1xuICB9XG4gIGNyZWF0ZVJhZGFyU2Vzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUuY3JlYXRlUmFkYXJTZXNzaW9uKCk7XG4gIH1cbiAgY29sbGVjdEJhbmtBY2NvdW50Rm9yUGF5bWVudChvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLmNvbGxlY3RCYW5rQWNjb3VudEZvclBheW1lbnQob3B0aW9ucyk7XG4gIH1cbiAgY3JlYXRlUGF5bWVudE1ldGhvZChvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLmNyZWF0ZVBheW1lbnRNZXRob2Qob3B0aW9ucyk7XG4gIH1cbiAgY3JlYXRlQ29uZmlybWF0aW9uVG9rZW4ob3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLnN0cmlwZS5jcmVhdGVDb25maXJtYXRpb25Ub2tlbihvcHRpb25zKTtcbiAgfVxuICByZXRyaWV2ZVBheW1lbnRJbnRlbnQoY2xpZW50U2VjcmV0KSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLnJldHJpZXZlUGF5bWVudEludGVudChjbGllbnRTZWNyZXQpO1xuICB9XG4gIGNvbmZpcm1TZXR1cChvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLmNvbmZpcm1TZXR1cChvcHRpb25zKTtcbiAgfVxuICBjb25maXJtQWNzc0RlYml0U2V0dXAoY2xpZW50U2VjcmV0LCBkYXRhLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLmNvbmZpcm1BY3NzRGViaXRTZXR1cChjbGllbnRTZWNyZXQsIGRhdGEsIG9wdGlvbnMpO1xuICB9XG4gIGNvbmZpcm1Vc0JhbmtBY2NvdW50U2V0dXAoY2xpZW50U2VjcmV0LCBkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLmNvbmZpcm1Vc0JhbmtBY2NvdW50U2V0dXAoY2xpZW50U2VjcmV0LCBkYXRhKTtcbiAgfVxuICBjb25maXJtQXVCZWNzRGViaXRTZXR1cChjbGllbnRTZWNyZXQsIGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUuY29uZmlybUF1QmVjc0RlYml0U2V0dXAoY2xpZW50U2VjcmV0LCBkYXRhKTtcbiAgfVxuICBjb25maXJtQmFjc0RlYml0U2V0dXAoY2xpZW50U2VjcmV0LCBkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLmNvbmZpcm1CYWNzRGViaXRTZXR1cChjbGllbnRTZWNyZXQsIGRhdGEpO1xuICB9XG4gIGNvbmZpcm1CYW5jb250YWN0U2V0dXAoY2xpZW50U2VjcmV0LCBkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLmNvbmZpcm1CYW5jb250YWN0U2V0dXAoY2xpZW50U2VjcmV0LCBkYXRhKTtcbiAgfVxuICBjb25maXJtQ2FyZFNldHVwKGNsaWVudFNlY3JldCwgZGF0YSwgb3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLnN0cmlwZS5jb25maXJtQ2FyZFNldHVwKGNsaWVudFNlY3JldCwgZGF0YSwgb3B0aW9ucyk7XG4gIH1cbiAgY29uZmlybUNhc2hhcHBTZXR1cChjbGllbnRTZWNyZXQsIGRhdGEsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUuY29uZmlybUNhc2hhcHBTZXR1cChjbGllbnRTZWNyZXQsIGRhdGEsIG9wdGlvbnMpO1xuICB9XG4gIGNvbmZpcm1JZGVhbFNldHVwKGNsaWVudFNlY3JldCwgZGF0YSkge1xuICAgIHJldHVybiB0aGlzLnN0cmlwZS5jb25maXJtSWRlYWxTZXR1cChjbGllbnRTZWNyZXQsIGRhdGEpO1xuICB9XG4gIGNvbmZpcm1QYXlQYWxTZXR1cChjbGllbnRTZWNyZXQsIGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUuY29uZmlybVBheVBhbFNldHVwKGNsaWVudFNlY3JldCwgZGF0YSk7XG4gIH1cbiAgY29uZmlybVNlcGFEZWJpdFNldHVwKGNsaWVudFNlY3JldCwgZGF0YSkge1xuICAgIHJldHVybiB0aGlzLnN0cmlwZS5jb25maXJtU2VwYURlYml0U2V0dXAoY2xpZW50U2VjcmV0LCBkYXRhKTtcbiAgfVxuICBjb25maXJtU29mb3J0U2V0dXAoY2xpZW50U2VjcmV0LCBkYXRhLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLmNvbmZpcm1Tb2ZvcnRTZXR1cChjbGllbnRTZWNyZXQsIGRhdGEsIG9wdGlvbnMpO1xuICB9XG4gIGNvbmZpcm1BZmZpcm1QYXltZW50KGNsaWVudFNlY3JldCwgZGF0YSwgb3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLnN0cmlwZS5jb25maXJtQWZmaXJtUGF5bWVudChjbGllbnRTZWNyZXQsIGRhdGEsIG9wdGlvbnMpO1xuICB9XG4gIGNvbmZpcm1BZnRlcnBheUNsZWFycGF5UGF5bWVudChjbGllbnRTZWNyZXQsIGRhdGEsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUuY29uZmlybUFmdGVycGF5Q2xlYXJwYXlQYXltZW50KGNsaWVudFNlY3JldCwgZGF0YSwgb3B0aW9ucyk7XG4gIH1cbiAgdmVyaWZ5TWljcm9kZXBvc2l0c0ZvclNldHVwKGNsaWVudFNlY3JldCwgZGF0YSkge1xuICAgIHJldHVybiB0aGlzLnN0cmlwZS52ZXJpZnlNaWNyb2RlcG9zaXRzRm9yU2V0dXAoY2xpZW50U2VjcmV0LCBkYXRhKTtcbiAgfVxuICBjb2xsZWN0QmFua0FjY291bnRGb3JTZXR1cChvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLmNvbGxlY3RCYW5rQWNjb3VudEZvclNldHVwKG9wdGlvbnMpO1xuICB9XG4gIHJldHJpZXZlU2V0dXBJbnRlbnQoY2xpZW50U2VjcmV0KSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLnJldHJpZXZlU2V0dXBJbnRlbnQoY2xpZW50U2VjcmV0KTtcbiAgfVxuICBwcm9jZXNzT3JkZXIob3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLnN0cmlwZS5wcm9jZXNzT3JkZXIob3B0aW9ucyk7XG4gIH1cbiAgcmV0cmlldmVPcmRlcihjbGllbnRTZWNyZXQpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUucmV0cmlldmVPcmRlcihjbGllbnRTZWNyZXQpO1xuICB9XG4gIHBheW1lbnRSZXF1ZXN0KG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUucGF5bWVudFJlcXVlc3Qob3B0aW9ucyk7XG4gIH1cbiAgY3JlYXRlVG9rZW4odG9rZW5UeXBlLCBkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLmNyZWF0ZVRva2VuKHRva2VuVHlwZSwgZGF0YSk7XG4gIH1cbiAgY3JlYXRlU291cmNlKGEsIGIpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUuY3JlYXRlU291cmNlKGEsIGIpO1xuICB9XG4gIHJldHJpZXZlU291cmNlKHNvdXJjZSkge1xuICAgIHJldHVybiB0aGlzLnN0cmlwZS5yZXRyaWV2ZVNvdXJjZShzb3VyY2UpO1xuICB9XG4gIHZlcmlmeUlkZW50aXR5KGNsaWVudFNlY3JldCkge1xuICAgIHJldHVybiB0aGlzLnN0cmlwZS52ZXJpZnlJZGVudGl0eShjbGllbnRTZWNyZXQpO1xuICB9XG4gIGNvbGxlY3RGaW5hbmNpYWxDb25uZWN0aW9uc0FjY291bnRzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUuY29sbGVjdEZpbmFuY2lhbENvbm5lY3Rpb25zQWNjb3VudHMob3B0aW9ucyk7XG4gIH1cbiAgY29sbGVjdEJhbmtBY2NvdW50VG9rZW4ob3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLnN0cmlwZS5jb2xsZWN0QmFua0FjY291bnRUb2tlbihvcHRpb25zKTtcbiAgfVxuICBjcmVhdGVFcGhlbWVyYWxLZXlOb25jZShvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLmNyZWF0ZUVwaGVtZXJhbEtleU5vbmNlKG9wdGlvbnMpO1xuICB9XG4gIGluaXRDaGVja291dChvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLmluaXRDaGVja291dChvcHRpb25zKTtcbiAgfVxuICBpbml0RW1iZWRkZWRDaGVja291dChvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLmluaXRFbWJlZGRlZENoZWNrb3V0KG9wdGlvbnMpO1xuICB9XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZFxuICAgKi9cbiAgaGFuZGxlQ2FyZFBheW1lbnQoY2xpZW50U2VjcmV0LCBlbGVtZW50LCBkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLmhhbmRsZUNhcmRQYXltZW50KGNsaWVudFNlY3JldCwgZWxlbWVudCwgZGF0YSk7XG4gIH1cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkXG4gICAqL1xuICBjb25maXJtUGF5bWVudEludGVudChjbGllbnRTZWNyZXQsIGVsZW1lbnQsIGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUuY29uZmlybVBheW1lbnRJbnRlbnQoY2xpZW50U2VjcmV0LCBlbGVtZW50LCBkYXRhKTtcbiAgfVxuICAvKipcbiAgICogQGRlcHJlY2F0ZWRcbiAgICovXG4gIGhhbmRsZUNhcmRTZXR1cChjbGllbnRTZWNyZXQsIGVsZW1lbnQsIGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUuaGFuZGxlQ2FyZFNldHVwKGNsaWVudFNlY3JldCwgZWxlbWVudCwgZGF0YSk7XG4gIH1cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkXG4gICAqL1xuICBjb25maXJtU2V0dXBJbnRlbnQoY2xpZW50U2VjcmV0LCBlbGVtZW50LCBkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLmNvbmZpcm1TZXR1cEludGVudChjbGllbnRTZWNyZXQsIGVsZW1lbnQsIGRhdGEpO1xuICB9XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZFxuICAgKi9cbiAgaGFuZGxlRnB4UGF5bWVudChjbGllbnRTZWNyZXQsIGVsZW1lbnQsIGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpcGUuaGFuZGxlRnB4UGF5bWVudChjbGllbnRTZWNyZXQsIGVsZW1lbnQsIGRhdGEpO1xuICB9XG4gIHN0YXRpYyDJtWZhYyA9IGZ1bmN0aW9uIFN0cmlwZVNlcnZpY2VfRmFjdG9yeShfX25nRmFjdG9yeVR5cGVfXykge1xuICAgIHJldHVybiBuZXcgKF9fbmdGYWN0b3J5VHlwZV9fIHx8IFN0cmlwZVNlcnZpY2UpKGkwLsm1ybVpbmplY3QoTkdYX1NUUklQRV9WRVJTSU9OKSwgaTAuybXJtWluamVjdChTVFJJUEVfUFVCTElTSEFCTEVfS0VZKSwgaTAuybXJtWluamVjdChTVFJJUEVfT1BUSU9OUyksIGkwLsm1ybVpbmplY3QoTGF6eVN0cmlwZUFQSUxvYWRlciksIGkwLsm1ybVpbmplY3QoV2luZG93UmVmKSk7XG4gIH07XG4gIHN0YXRpYyDJtXByb3YgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lSW5qZWN0YWJsZSh7XG4gICAgdG9rZW46IFN0cmlwZVNlcnZpY2UsXG4gICAgZmFjdG9yeTogU3RyaXBlU2VydmljZS7JtWZhY1xuICB9KTtcbn1cbigoKSA9PiB7XG4gICh0eXBlb2YgbmdEZXZNb2RlID09PSBcInVuZGVmaW5lZFwiIHx8IG5nRGV2TW9kZSkgJiYgaTAuybVzZXRDbGFzc01ldGFkYXRhKFN0cmlwZVNlcnZpY2UsIFt7XG4gICAgdHlwZTogSW5qZWN0YWJsZVxuICB9XSwgKCkgPT4gW3tcbiAgICB0eXBlOiB1bmRlZmluZWQsXG4gICAgZGVjb3JhdG9yczogW3tcbiAgICAgIHR5cGU6IEluamVjdCxcbiAgICAgIGFyZ3M6IFtOR1hfU1RSSVBFX1ZFUlNJT05dXG4gICAgfV1cbiAgfSwge1xuICAgIHR5cGU6IHVuZGVmaW5lZCxcbiAgICBkZWNvcmF0b3JzOiBbe1xuICAgICAgdHlwZTogSW5qZWN0LFxuICAgICAgYXJnczogW1NUUklQRV9QVUJMSVNIQUJMRV9LRVldXG4gICAgfV1cbiAgfSwge1xuICAgIHR5cGU6IHVuZGVmaW5lZCxcbiAgICBkZWNvcmF0b3JzOiBbe1xuICAgICAgdHlwZTogSW5qZWN0LFxuICAgICAgYXJnczogW1NUUklQRV9PUFRJT05TXVxuICAgIH1dXG4gIH0sIHtcbiAgICB0eXBlOiBMYXp5U3RyaXBlQVBJTG9hZGVyXG4gIH0sIHtcbiAgICB0eXBlOiBXaW5kb3dSZWZcbiAgfV0sIG51bGwpO1xufSkoKTtcbmNsYXNzIFN0cmlwZUVsZW1lbnRzU2VydmljZSB7XG4gIHN0cmlwZVNlcnZpY2U7XG4gIGNvbnN0cnVjdG9yKHN0cmlwZVNlcnZpY2UpIHtcbiAgICB0aGlzLnN0cmlwZVNlcnZpY2UgPSBzdHJpcGVTZXJ2aWNlO1xuICB9XG4gIGVsZW1lbnRzKHN0cmlwZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKHN0cmlwZSkge1xuICAgICAgaWYgKE9iamVjdC5rZXlzKG9wdGlvbnMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHN0cmlwZS5lbGVtZW50cyhvcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdHJpcGUuZWxlbWVudHMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKE9iamVjdC5rZXlzKG9wdGlvbnMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RyaXBlU2VydmljZS5lbGVtZW50cyhvcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnN0cmlwZVNlcnZpY2UuZWxlbWVudHMoKTtcbiAgICB9XG4gIH1cbiAgcGF5bWVudFJlcXVlc3Qoc3RyaXBlLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHN0cmlwZSA/IHN0cmlwZS5wYXltZW50UmVxdWVzdChvcHRpb25zKSA6IHRoaXMuc3RyaXBlU2VydmljZS5wYXltZW50UmVxdWVzdChvcHRpb25zKTtcbiAgfVxuICBtZXJnZU9wdGlvbnMob3B0aW9ucywgY29udGFpbmVyQ2xhc3MpIHtcbiAgICBpZiAoIWNvbnRhaW5lckNsYXNzIHx8IG9wdGlvbnMgJiYgb3B0aW9ucy5jbGFzc2VzKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucyB8fCB7fTtcbiAgICB9XG4gICAgaWYgKCFvcHRpb25zIHx8ICFvcHRpb25zLmNsYXNzZXMpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLihvcHRpb25zIHx8IHt9KSxcbiAgICAgICAgY2xhc3Nlczoge1xuICAgICAgICAgIGJhc2U6IGNvbnRhaW5lckNsYXNzLFxuICAgICAgICAgIGNvbXBsZXRlOiBgJHtjb250YWluZXJDbGFzc30tLWNvbXBsZXRlYCxcbiAgICAgICAgICBlbXB0eTogYCR7Y29udGFpbmVyQ2xhc3N9LS1lbXB0eWAsXG4gICAgICAgICAgZm9jdXM6IGAke2NvbnRhaW5lckNsYXNzfS0tZm9jdXNgLFxuICAgICAgICAgIGludmFsaWQ6IGAke2NvbnRhaW5lckNsYXNzfS0taW52YWxpZGAsXG4gICAgICAgICAgd2Via2l0QXV0b0ZpbGw6IGAke2NvbnRhaW5lckNsYXNzfS0td2Via2l0LWF1dG9GaWxsYFxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gb3B0aW9ucyB8fCB7fTtcbiAgfVxuICBzdGF0aWMgybVmYWMgPSBmdW5jdGlvbiBTdHJpcGVFbGVtZW50c1NlcnZpY2VfRmFjdG9yeShfX25nRmFjdG9yeVR5cGVfXykge1xuICAgIHJldHVybiBuZXcgKF9fbmdGYWN0b3J5VHlwZV9fIHx8IFN0cmlwZUVsZW1lbnRzU2VydmljZSkoaTAuybXJtWluamVjdChTdHJpcGVTZXJ2aWNlKSk7XG4gIH07XG4gIHN0YXRpYyDJtXByb3YgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lSW5qZWN0YWJsZSh7XG4gICAgdG9rZW46IFN0cmlwZUVsZW1lbnRzU2VydmljZSxcbiAgICBmYWN0b3J5OiBTdHJpcGVFbGVtZW50c1NlcnZpY2UuybVmYWNcbiAgfSk7XG59XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShTdHJpcGVFbGVtZW50c1NlcnZpY2UsIFt7XG4gICAgdHlwZTogSW5qZWN0YWJsZVxuICB9XSwgKCkgPT4gW3tcbiAgICB0eXBlOiBTdHJpcGVTZXJ2aWNlXG4gIH1dLCBudWxsKTtcbn0pKCk7XG5jbGFzcyBTdHJpcGVFbGVtZW50c0RpcmVjdGl2ZSB7XG4gIHN0cmlwZUVsZW1lbnRzU2VydmljZTtcbiAgZWxlbWVudHNPcHRpb25zO1xuICBzdHJpcGU7XG4gIGVsZW1lbnRzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBfZWxlbWVudHM7XG4gIHN0YXRlID0gJ25vdHJlYWR5JztcbiAgY29uc3RydWN0b3Ioc3RyaXBlRWxlbWVudHNTZXJ2aWNlKSB7XG4gICAgdGhpcy5zdHJpcGVFbGVtZW50c1NlcnZpY2UgPSBzdHJpcGVFbGVtZW50c1NlcnZpY2U7XG4gIH1cbiAgYXN5bmMgbmdPbkNoYW5nZXMoY2hhbmdlcykge1xuICAgIHRoaXMuc3RhdGUgPSAnc3RhcnRpbmcnO1xuICAgIGNvbnN0IGVsZW1lbnRzT3B0aW9ucyA9IHRoaXMuZWxlbWVudHNPcHRpb25zO1xuICAgIGNvbnN0IHN0cmlwZSA9IHRoaXMuc3RyaXBlO1xuICAgIGlmICghc3RyaXBlKSB7XG4gICAgICB0aGlzLnN0YXRlID0gJ25vdHJlYWR5JztcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuZWxlbWVudHNPcHRpb25zKSB7XG4gICAgICBpZiAodGhpcy5fZWxlbWVudHMpIHtcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IE9iamVjdC5rZXlzKGVsZW1lbnRzT3B0aW9ucykucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgICAgICAgIGlmIChlbGVtZW50c09wdGlvbnNba2V5XSAhPT0gY2hhbmdlcy5lbGVtZW50c09wdGlvbnMucHJldmlvdXNWYWx1ZVtrZXldICYmICFbJ2ZvbnRzJywgJ2xvYWRlcicsICdjbGllbnRTZWNyZXQnXS5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICBhY2Nba2V5XSA9IGVsZW1lbnRzT3B0aW9uc1trZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9LCB7fSk7XG4gICAgICAgIHRoaXMuX2VsZW1lbnRzLnVwZGF0ZShwYXlsb2FkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnRzID0gYXdhaXQgdGhpcy5zdHJpcGVFbGVtZW50c1NlcnZpY2UuZWxlbWVudHMoc3RyaXBlLCBlbGVtZW50c09wdGlvbnMpLnRvUHJvbWlzZSgpO1xuICAgICAgICB0aGlzLmVsZW1lbnRzLmVtaXQodGhpcy5fZWxlbWVudHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0gJ3JlYWR5JztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgYXN5bmMgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUgPT09ICdub3RyZWFkeScpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSAnc3RhcnRpbmcnO1xuICAgICAgdGhpcy5fZWxlbWVudHMgPSBhd2FpdCB0aGlzLnN0cmlwZUVsZW1lbnRzU2VydmljZS5lbGVtZW50cyh0aGlzLnN0cmlwZSkudG9Qcm9taXNlKCk7XG4gICAgICB0aGlzLmVsZW1lbnRzLmVtaXQodGhpcy5fZWxlbWVudHMpO1xuICAgICAgdGhpcy5zdGF0ZSA9ICdyZWFkeSc7XG4gICAgfVxuICB9XG4gIGZldGNoVXBkYXRlcygpIHtcbiAgICBpZiAoIXRoaXMuX2VsZW1lbnRzKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gZnJvbSh0aGlzLl9lbGVtZW50cy5mZXRjaFVwZGF0ZXMoKSk7XG4gIH1cbiAgdXBkYXRlKG9wdGlvbnMpIHtcbiAgICBpZiAoIXRoaXMuX2VsZW1lbnRzKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudHMudXBkYXRlKG9wdGlvbnMpO1xuICB9XG4gIHN1Ym1pdCgpIHtcbiAgICBpZiAoIXRoaXMuX2VsZW1lbnRzKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gZnJvbSh0aGlzLl9lbGVtZW50cy5zdWJtaXQoKSk7XG4gIH1cbiAgZ2V0RWxlbWVudChlbGVtZW50VHlwZSkge1xuICAgIGlmICghdGhpcy5fZWxlbWVudHMpIHJldHVybiBudWxsO1xuICAgIHN3aXRjaCAoZWxlbWVudFR5cGUpIHtcbiAgICAgIGNhc2UgJ2FkZHJlc3MnOlxuICAgICAgICByZXR1cm4gdGhpcy5fZWxlbWVudHMuZ2V0RWxlbWVudCgnYWRkcmVzcycpO1xuICAgICAgY2FzZSAncGF5bWVudE1ldGhvZE1lc3NhZ2luZyc6XG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50cy5nZXRFbGVtZW50KCdwYXltZW50TWV0aG9kTWVzc2FnaW5nJyk7XG4gICAgICBjYXNlICdhZmZpcm1NZXNzYWdlJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRzLmdldEVsZW1lbnQoJ2FmZmlybU1lc3NhZ2UnKTtcbiAgICAgIGNhc2UgJ2FmdGVycGF5Q2xlYXJwYXlNZXNzYWdlJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRzLmdldEVsZW1lbnQoJ2FmdGVycGF5Q2xlYXJwYXlNZXNzYWdlJyk7XG4gICAgICBjYXNlICdhdUJhbmtBY2NvdW50JzpcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRzLmdldEVsZW1lbnQoJ2F1QmFua0FjY291bnQnKTtcbiAgICAgIGNhc2UgJ2NhcmQnOlxuICAgICAgICByZXR1cm4gdGhpcy5fZWxlbWVudHMuZ2V0RWxlbWVudCgnY2FyZCcpO1xuICAgICAgY2FzZSAnY2FyZE51bWJlcic6XG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50cy5nZXRFbGVtZW50KCdjYXJkTnVtYmVyJyk7XG4gICAgICBjYXNlICdjYXJkRXhwaXJ5JzpcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRzLmdldEVsZW1lbnQoJ2NhcmRFeHBpcnknKTtcbiAgICAgIGNhc2UgJ2NhcmRDdmMnOlxuICAgICAgICByZXR1cm4gdGhpcy5fZWxlbWVudHMuZ2V0RWxlbWVudCgnY2FyZEN2YycpO1xuICAgICAgY2FzZSAnZnB4QmFuayc6XG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50cy5nZXRFbGVtZW50KCdmcHhCYW5rJyk7XG4gICAgICBjYXNlICdlcHNCYW5rJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRzLmdldEVsZW1lbnQoJ2Vwc0JhbmsnKTtcbiAgICAgIGNhc2UgJ3AyNEJhbmsnOlxuICAgICAgICByZXR1cm4gdGhpcy5fZWxlbWVudHMuZ2V0RWxlbWVudCgncDI0QmFuaycpO1xuICAgICAgY2FzZSAnaWJhbic6XG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50cy5nZXRFbGVtZW50KCdpYmFuJyk7XG4gICAgICBjYXNlICdpZGVhbEJhbmsnOlxuICAgICAgICByZXR1cm4gdGhpcy5fZWxlbWVudHMuZ2V0RWxlbWVudCgnaWRlYWxCYW5rJyk7XG4gICAgICBjYXNlICdsaW5rQXV0aGVudGljYXRpb24nOlxuICAgICAgICByZXR1cm4gdGhpcy5fZWxlbWVudHMuZ2V0RWxlbWVudCgnbGlua0F1dGhlbnRpY2F0aW9uJyk7XG4gICAgICBjYXNlICdleHByZXNzQ2hlY2tvdXQnOlxuICAgICAgICByZXR1cm4gdGhpcy5fZWxlbWVudHMuZ2V0RWxlbWVudCgnZXhwcmVzc0NoZWNrb3V0Jyk7XG4gICAgICBjYXNlICdwYXltZW50JzpcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRzLmdldEVsZW1lbnQoJ3BheW1lbnQnKTtcbiAgICAgIGNhc2UgJ3BheW1lbnRSZXF1ZXN0QnV0dG9uJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRzLmdldEVsZW1lbnQoJ3BheW1lbnRSZXF1ZXN0QnV0dG9uJyk7XG4gICAgICBjYXNlICdzaGlwcGluZ0FkZHJlc3MnOlxuICAgICAgICByZXR1cm4gdGhpcy5fZWxlbWVudHMuZ2V0RWxlbWVudCgnc2hpcHBpbmdBZGRyZXNzJyk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdGhpcy5fZWxlbWVudHMuZ2V0RWxlbWVudChlbGVtZW50VHlwZSk7XG4gICAgfVxuICB9XG4gIHN0YXRpYyDJtWZhYyA9IGZ1bmN0aW9uIFN0cmlwZUVsZW1lbnRzRGlyZWN0aXZlX0ZhY3RvcnkoX19uZ0ZhY3RvcnlUeXBlX18pIHtcbiAgICByZXR1cm4gbmV3IChfX25nRmFjdG9yeVR5cGVfXyB8fCBTdHJpcGVFbGVtZW50c0RpcmVjdGl2ZSkoaTAuybXJtWRpcmVjdGl2ZUluamVjdChTdHJpcGVFbGVtZW50c1NlcnZpY2UpKTtcbiAgfTtcbiAgc3RhdGljIMm1ZGlyID0gLyogQF9fUFVSRV9fICovaTAuybXJtWRlZmluZURpcmVjdGl2ZSh7XG4gICAgdHlwZTogU3RyaXBlRWxlbWVudHNEaXJlY3RpdmUsXG4gICAgc2VsZWN0b3JzOiBbW1wibmd4LXN0cmlwZS1lbGVtZW50c1wiXSwgW1wiXCIsIFwibmd4U3RyaXBlRWxlbWVudHNcIiwgXCJcIl1dLFxuICAgIGlucHV0czoge1xuICAgICAgZWxlbWVudHNPcHRpb25zOiBcImVsZW1lbnRzT3B0aW9uc1wiLFxuICAgICAgc3RyaXBlOiBcInN0cmlwZVwiXG4gICAgfSxcbiAgICBvdXRwdXRzOiB7XG4gICAgICBlbGVtZW50czogXCJlbGVtZW50c1wiXG4gICAgfSxcbiAgICBmZWF0dXJlczogW2kwLsm1ybVOZ09uQ2hhbmdlc0ZlYXR1cmVdXG4gIH0pO1xufVxuKCgpID0+IHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoU3RyaXBlRWxlbWVudHNEaXJlY3RpdmUsIFt7XG4gICAgdHlwZTogRGlyZWN0aXZlLFxuICAgIGFyZ3M6IFt7XG4gICAgICBzZWxlY3RvcjogJ25neC1zdHJpcGUtZWxlbWVudHMsW25neFN0cmlwZUVsZW1lbnRzXScsXG4gICAgICBzdGFuZGFsb25lOiB0cnVlXG4gICAgfV1cbiAgfV0sICgpID0+IFt7XG4gICAgdHlwZTogU3RyaXBlRWxlbWVudHNTZXJ2aWNlXG4gIH1dLCB7XG4gICAgZWxlbWVudHNPcHRpb25zOiBbe1xuICAgICAgdHlwZTogSW5wdXRcbiAgICB9XSxcbiAgICBzdHJpcGU6IFt7XG4gICAgICB0eXBlOiBJbnB1dFxuICAgIH1dLFxuICAgIGVsZW1lbnRzOiBbe1xuICAgICAgdHlwZTogT3V0cHV0XG4gICAgfV1cbiAgfSk7XG59KSgpO1xuY2xhc3MgU3RyaXBlQWRkcmVzc0NvbXBvbmVudCB7XG4gIHN0cmlwZUVsZW1lbnRzU2VydmljZTtcbiAgZWxlbWVudHNQcm92aWRlcjtcbiAgbG9hZGluZ1RlbXBsYXRlO1xuICBzdHJpcGVFbGVtZW50UmVmO1xuICBlbGVtZW50O1xuICBjb250YWluZXJDbGFzcztcbiAgb3B0aW9ucztcbiAgZWxlbWVudHNPcHRpb25zO1xuICBzdHJpcGU7XG4gIGxvYWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGJsdXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgZm9jdXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHJlYWR5ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBlc2NhcGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGxvYWRlcnJvciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgbG9hZGVyc3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGVsZW1lbnRzO1xuICBzdGF0ZSA9ICdub3RyZWFkeSc7XG4gIGVsZW1lbnRzU3Vic2NyaXB0aW9uO1xuICBjb25zdHJ1Y3RvcihzdHJpcGVFbGVtZW50c1NlcnZpY2UsIGVsZW1lbnRzUHJvdmlkZXIpIHtcbiAgICB0aGlzLnN0cmlwZUVsZW1lbnRzU2VydmljZSA9IHN0cmlwZUVsZW1lbnRzU2VydmljZTtcbiAgICB0aGlzLmVsZW1lbnRzUHJvdmlkZXIgPSBlbGVtZW50c1Byb3ZpZGVyO1xuICB9XG4gIGFzeW5jIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcbiAgICB0aGlzLnN0YXRlID0gJ3N0YXJ0aW5nJztcbiAgICBsZXQgdXBkYXRlRWxlbWVudHMgPSBmYWxzZTtcbiAgICBpZiAoIXRoaXMuZWxlbWVudHNQcm92aWRlciAmJiAoY2hhbmdlcy5lbGVtZW50c09wdGlvbnMgfHwgY2hhbmdlcy5zdHJpcGUgfHwgIXRoaXMuZWxlbWVudHMpKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzID0gYXdhaXQgdGhpcy5zdHJpcGVFbGVtZW50c1NlcnZpY2UuZWxlbWVudHModGhpcy5zdHJpcGUsIHRoaXMuZWxlbWVudHNPcHRpb25zKS50b1Byb21pc2UoKTtcbiAgICAgIHVwZGF0ZUVsZW1lbnRzID0gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuc3RyaXBlRWxlbWVudHNTZXJ2aWNlLm1lcmdlT3B0aW9ucyh0aGlzLm9wdGlvbnMsIHRoaXMuY29udGFpbmVyQ2xhc3MpO1xuICAgIGlmIChjaGFuZ2VzLm9wdGlvbnMgfHwgY2hhbmdlcy5jb250YWluZXJDbGFzcyB8fCAhdGhpcy5lbGVtZW50IHx8IHVwZGF0ZUVsZW1lbnRzKSB7XG4gICAgICBpZiAodGhpcy5lbGVtZW50ICYmICF1cGRhdGVFbGVtZW50cykge1xuICAgICAgICB0aGlzLnVwZGF0ZShvcHRpb25zKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50cyAmJiB1cGRhdGVFbGVtZW50cykge1xuICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc3RhdGUgPSAncmVhZHknO1xuICB9XG4gIGFzeW5jIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLnN0cmlwZUVsZW1lbnRzU2VydmljZS5tZXJnZU9wdGlvbnModGhpcy5vcHRpb25zLCB0aGlzLmNvbnRhaW5lckNsYXNzKTtcbiAgICBpZiAodGhpcy5lbGVtZW50c1Byb3ZpZGVyKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzU3Vic2NyaXB0aW9uID0gdGhpcy5lbGVtZW50c1Byb3ZpZGVyLmVsZW1lbnRzLnN1YnNjcmliZShlbGVtZW50cyA9PiB7XG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSBlbGVtZW50cztcbiAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KG9wdGlvbnMpO1xuICAgICAgICB0aGlzLnN0YXRlID0gJ3JlYWR5JztcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PT0gJ25vdHJlYWR5Jykge1xuICAgICAgdGhpcy5zdGF0ZSA9ICdzdGFydGluZyc7XG4gICAgICB0aGlzLmVsZW1lbnRzID0gYXdhaXQgdGhpcy5zdHJpcGVFbGVtZW50c1NlcnZpY2UuZWxlbWVudHModGhpcy5zdHJpcGUpLnRvUHJvbWlzZSgpO1xuICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KG9wdGlvbnMpO1xuICAgICAgdGhpcy5zdGF0ZSA9ICdyZWFkeSc7XG4gICAgfVxuICB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5kZXN0cm95KCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmVsZW1lbnRzU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG4gIHVwZGF0ZShvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC51cGRhdGUob3B0aW9ucyk7XG4gIH1cbiAgZ2V0VmFsdWUoKSB7XG4gICAgY29uc3QgYWRkcmVzcyA9IHRoaXMuZWxlbWVudHMuZ2V0RWxlbWVudCgnYWRkcmVzcycpO1xuICAgIHJldHVybiBhZGRyZXNzLmdldFZhbHVlKCk7XG4gIH1cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkXG4gICAqL1xuICBnZXRBZGRyZXNzRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICB9XG4gIGNyZWF0ZUVsZW1lbnQob3B0aW9ucykge1xuICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZWxlbWVudC51bm1vdW50KCk7XG4gICAgfVxuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuZWxlbWVudHMuY3JlYXRlKCdhZGRyZXNzJywgb3B0aW9ucyk7XG4gICAgdGhpcy5lbGVtZW50Lm9uKCdjaGFuZ2UnLCBldiA9PiB0aGlzLmNoYW5nZS5lbWl0KGV2KSk7XG4gICAgdGhpcy5lbGVtZW50Lm9uKCdibHVyJywgKCkgPT4gdGhpcy5ibHVyLmVtaXQoKSk7XG4gICAgdGhpcy5lbGVtZW50Lm9uKCdmb2N1cycsICgpID0+IHRoaXMuZm9jdXMuZW1pdCgpKTtcbiAgICB0aGlzLmVsZW1lbnQub24oJ3JlYWR5JywgKCkgPT4gdGhpcy5yZWFkeS5lbWl0KCkpO1xuICAgIHRoaXMuZWxlbWVudC5vbignZXNjYXBlJywgKCkgPT4gdGhpcy5lc2NhcGUuZW1pdCgpKTtcbiAgICB0aGlzLmVsZW1lbnQub24oJ2xvYWRlcnJvcicsICgpID0+IHRoaXMubG9hZGVycm9yLmVtaXQoKSk7XG4gICAgdGhpcy5lbGVtZW50Lm9uKCdsb2FkZXJzdGFydCcsICgpID0+IHRoaXMubG9hZGVyc3RhcnQuZW1pdCgpKTtcbiAgICB0aGlzLmVsZW1lbnQubW91bnQodGhpcy5zdHJpcGVFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIHRoaXMubG9hZC5lbWl0KHRoaXMuZWxlbWVudCk7XG4gIH1cbiAgc3RhdGljIMm1ZmFjID0gZnVuY3Rpb24gU3RyaXBlQWRkcmVzc0NvbXBvbmVudF9GYWN0b3J5KF9fbmdGYWN0b3J5VHlwZV9fKSB7XG4gICAgcmV0dXJuIG5ldyAoX19uZ0ZhY3RvcnlUeXBlX18gfHwgU3RyaXBlQWRkcmVzc0NvbXBvbmVudCkoaTAuybXJtWRpcmVjdGl2ZUluamVjdChTdHJpcGVFbGVtZW50c1NlcnZpY2UpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KFN0cmlwZUVsZW1lbnRzRGlyZWN0aXZlLCA4KSk7XG4gIH07XG4gIHN0YXRpYyDJtWNtcCA9IC8qIEBfX1BVUkVfXyAqL2kwLsm1ybVkZWZpbmVDb21wb25lbnQoe1xuICAgIHR5cGU6IFN0cmlwZUFkZHJlc3NDb21wb25lbnQsXG4gICAgc2VsZWN0b3JzOiBbW1wibmd4LXN0cmlwZS1hZGRyZXNzXCJdXSxcbiAgICBjb250ZW50UXVlcmllczogZnVuY3Rpb24gU3RyaXBlQWRkcmVzc0NvbXBvbmVudF9Db250ZW50UXVlcmllcyhyZiwgY3R4LCBkaXJJbmRleCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1Y29udGVudFF1ZXJ5KGRpckluZGV4LCBOZ3hTdHJpcGVFbGVtZW50TG9hZGluZ1RlbXBsYXRlRGlyZWN0aXZlLCA1LCBUZW1wbGF0ZVJlZik7XG4gICAgICB9XG4gICAgICBpZiAocmYgJiAyKSB7XG4gICAgICAgIGxldCBfdDtcbiAgICAgICAgaTAuybXJtXF1ZXJ5UmVmcmVzaChfdCA9IGkwLsm1ybVsb2FkUXVlcnkoKSkgJiYgKGN0eC5sb2FkaW5nVGVtcGxhdGUgPSBfdC5maXJzdCk7XG4gICAgICB9XG4gICAgfSxcbiAgICB2aWV3UXVlcnk6IGZ1bmN0aW9uIFN0cmlwZUFkZHJlc3NDb21wb25lbnRfUXVlcnkocmYsIGN0eCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1dmlld1F1ZXJ5KF9jMCwgNSk7XG4gICAgICB9XG4gICAgICBpZiAocmYgJiAyKSB7XG4gICAgICAgIGxldCBfdDtcbiAgICAgICAgaTAuybXJtXF1ZXJ5UmVmcmVzaChfdCA9IGkwLsm1ybVsb2FkUXVlcnkoKSkgJiYgKGN0eC5zdHJpcGVFbGVtZW50UmVmID0gX3QuZmlyc3QpO1xuICAgICAgfVxuICAgIH0sXG4gICAgaW5wdXRzOiB7XG4gICAgICBjb250YWluZXJDbGFzczogXCJjb250YWluZXJDbGFzc1wiLFxuICAgICAgb3B0aW9uczogXCJvcHRpb25zXCIsXG4gICAgICBlbGVtZW50c09wdGlvbnM6IFwiZWxlbWVudHNPcHRpb25zXCIsXG4gICAgICBzdHJpcGU6IFwic3RyaXBlXCJcbiAgICB9LFxuICAgIG91dHB1dHM6IHtcbiAgICAgIGxvYWQ6IFwibG9hZFwiLFxuICAgICAgYmx1cjogXCJibHVyXCIsXG4gICAgICBjaGFuZ2U6IFwiY2hhbmdlXCIsXG4gICAgICBmb2N1czogXCJmb2N1c1wiLFxuICAgICAgcmVhZHk6IFwicmVhZHlcIixcbiAgICAgIGVzY2FwZTogXCJlc2NhcGVcIixcbiAgICAgIGxvYWRlcnJvcjogXCJsb2FkZXJyb3JcIixcbiAgICAgIGxvYWRlcnN0YXJ0OiBcImxvYWRlcnN0YXJ0XCJcbiAgICB9LFxuICAgIGZlYXR1cmVzOiBbaTAuybXJtU5nT25DaGFuZ2VzRmVhdHVyZV0sXG4gICAgZGVjbHM6IDMsXG4gICAgdmFyczogMSxcbiAgICBjb25zdHM6IFtbXCJzdHJpcGVFbGVtZW50UmVmXCIsIFwiXCJdLCBbMSwgXCJmaWVsZFwiXSwgWzMsIFwibmdUZW1wbGF0ZU91dGxldFwiXV0sXG4gICAgdGVtcGxhdGU6IGZ1bmN0aW9uIFN0cmlwZUFkZHJlc3NDb21wb25lbnRfVGVtcGxhdGUocmYsIGN0eCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDAsIFwiZGl2XCIsIDEsIDApO1xuICAgICAgICBpMC7Jtcm1dGVtcGxhdGUoMiwgU3RyaXBlQWRkcmVzc0NvbXBvbmVudF9Db25kaXRpb25hbF8yX1RlbXBsYXRlLCAxLCAxLCBcIm5nLWNvbnRhaW5lclwiLCAyKTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZiAmIDIpIHtcbiAgICAgICAgaTAuybXJtWFkdmFuY2UoMik7XG4gICAgICAgIGkwLsm1ybVjb25kaXRpb25hbChjdHguc3RhdGUgIT09IFwicmVhZHlcIiAmJiBjdHgubG9hZGluZ1RlbXBsYXRlID8gMiA6IC0xKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRlcGVuZGVuY2llczogW0NvbW1vbk1vZHVsZSwgaTMuTmdUZW1wbGF0ZU91dGxldF0sXG4gICAgZW5jYXBzdWxhdGlvbjogMlxuICB9KTtcbn1cbigoKSA9PiB7XG4gICh0eXBlb2YgbmdEZXZNb2RlID09PSBcInVuZGVmaW5lZFwiIHx8IG5nRGV2TW9kZSkgJiYgaTAuybVzZXRDbGFzc01ldGFkYXRhKFN0cmlwZUFkZHJlc3NDb21wb25lbnQsIFt7XG4gICAgdHlwZTogQ29tcG9uZW50LFxuICAgIGFyZ3M6IFt7XG4gICAgICBzZWxlY3RvcjogJ25neC1zdHJpcGUtYWRkcmVzcycsXG4gICAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgICAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIiAjc3RyaXBlRWxlbWVudFJlZj5cbiAgICAgIEBpZiAoc3RhdGUgIT09ICdyZWFkeScgJiYgbG9hZGluZ1RlbXBsYXRlKSB7XG4gICAgICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwibG9hZGluZ1RlbXBsYXRlXCIgLz5cbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgYCxcbiAgICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdXG4gICAgfV1cbiAgfV0sICgpID0+IFt7XG4gICAgdHlwZTogU3RyaXBlRWxlbWVudHNTZXJ2aWNlXG4gIH0sIHtcbiAgICB0eXBlOiBTdHJpcGVFbGVtZW50c0RpcmVjdGl2ZSxcbiAgICBkZWNvcmF0b3JzOiBbe1xuICAgICAgdHlwZTogT3B0aW9uYWxcbiAgICB9XVxuICB9XSwge1xuICAgIGxvYWRpbmdUZW1wbGF0ZTogW3tcbiAgICAgIHR5cGU6IENvbnRlbnRDaGlsZCxcbiAgICAgIGFyZ3M6IFtOZ3hTdHJpcGVFbGVtZW50TG9hZGluZ1RlbXBsYXRlRGlyZWN0aXZlLCB7XG4gICAgICAgIHJlYWQ6IFRlbXBsYXRlUmVmXG4gICAgICB9XVxuICAgIH1dLFxuICAgIHN0cmlwZUVsZW1lbnRSZWY6IFt7XG4gICAgICB0eXBlOiBWaWV3Q2hpbGQsXG4gICAgICBhcmdzOiBbJ3N0cmlwZUVsZW1lbnRSZWYnXVxuICAgIH1dLFxuICAgIGNvbnRhaW5lckNsYXNzOiBbe1xuICAgICAgdHlwZTogSW5wdXRcbiAgICB9XSxcbiAgICBvcHRpb25zOiBbe1xuICAgICAgdHlwZTogSW5wdXRcbiAgICB9XSxcbiAgICBlbGVtZW50c09wdGlvbnM6IFt7XG4gICAgICB0eXBlOiBJbnB1dFxuICAgIH1dLFxuICAgIHN0cmlwZTogW3tcbiAgICAgIHR5cGU6IElucHV0XG4gICAgfV0sXG4gICAgbG9hZDogW3tcbiAgICAgIHR5cGU6IE91dHB1dFxuICAgIH1dLFxuICAgIGJsdXI6IFt7XG4gICAgICB0eXBlOiBPdXRwdXRcbiAgICB9XSxcbiAgICBjaGFuZ2U6IFt7XG4gICAgICB0eXBlOiBPdXRwdXRcbiAgICB9XSxcbiAgICBmb2N1czogW3tcbiAgICAgIHR5cGU6IE91dHB1dFxuICAgIH1dLFxuICAgIHJlYWR5OiBbe1xuICAgICAgdHlwZTogT3V0cHV0XG4gICAgfV0sXG4gICAgZXNjYXBlOiBbe1xuICAgICAgdHlwZTogT3V0cHV0XG4gICAgfV0sXG4gICAgbG9hZGVycm9yOiBbe1xuICAgICAgdHlwZTogT3V0cHV0XG4gICAgfV0sXG4gICAgbG9hZGVyc3RhcnQ6IFt7XG4gICAgICB0eXBlOiBPdXRwdXRcbiAgICB9XVxuICB9KTtcbn0pKCk7XG5jbGFzcyBTdHJpcGVBZmZpcm1NZXNzYWdlQ29tcG9uZW50IHtcbiAgc3RyaXBlRWxlbWVudHNTZXJ2aWNlO1xuICBlbGVtZW50c1Byb3ZpZGVyO1xuICBsb2FkaW5nVGVtcGxhdGU7XG4gIHN0cmlwZUVsZW1lbnRSZWY7XG4gIGVsZW1lbnQ7XG4gIGNvbnRhaW5lckNsYXNzO1xuICBvcHRpb25zO1xuICBlbGVtZW50c09wdGlvbnM7XG4gIHN0cmlwZTtcbiAgbG9hZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcmVhZHkgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGVsZW1lbnRzO1xuICBzdGF0ZSA9ICdub3RyZWFkeSc7XG4gIGVsZW1lbnRzU3Vic2NyaXB0aW9uO1xuICBjb25zdHJ1Y3RvcihzdHJpcGVFbGVtZW50c1NlcnZpY2UsIGVsZW1lbnRzUHJvdmlkZXIpIHtcbiAgICB0aGlzLnN0cmlwZUVsZW1lbnRzU2VydmljZSA9IHN0cmlwZUVsZW1lbnRzU2VydmljZTtcbiAgICB0aGlzLmVsZW1lbnRzUHJvdmlkZXIgPSBlbGVtZW50c1Byb3ZpZGVyO1xuICB9XG4gIGFzeW5jIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcbiAgICB0aGlzLnN0YXRlID0gJ3N0YXJ0aW5nJztcbiAgICBsZXQgdXBkYXRlRWxlbWVudHMgPSBmYWxzZTtcbiAgICBpZiAoIXRoaXMuZWxlbWVudHNQcm92aWRlciAmJiAoY2hhbmdlcy5lbGVtZW50c09wdGlvbnMgfHwgY2hhbmdlcy5zdHJpcGUgfHwgIXRoaXMuZWxlbWVudHMpKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzID0gYXdhaXQgdGhpcy5zdHJpcGVFbGVtZW50c1NlcnZpY2UuZWxlbWVudHModGhpcy5zdHJpcGUsIHRoaXMuZWxlbWVudHNPcHRpb25zKS50b1Byb21pc2UoKTtcbiAgICAgIHVwZGF0ZUVsZW1lbnRzID0gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuc3RyaXBlRWxlbWVudHNTZXJ2aWNlLm1lcmdlT3B0aW9ucyh0aGlzLm9wdGlvbnMsIHRoaXMuY29udGFpbmVyQ2xhc3MpO1xuICAgIGlmIChjaGFuZ2VzLm9wdGlvbnMgfHwgY2hhbmdlcy5jb250YWluZXJDbGFzcyB8fCAhdGhpcy5lbGVtZW50IHx8IHVwZGF0ZUVsZW1lbnRzKSB7XG4gICAgICBpZiAodGhpcy5lbGVtZW50ICYmICF1cGRhdGVFbGVtZW50cykge1xuICAgICAgICB0aGlzLnVwZGF0ZShvcHRpb25zKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50cyAmJiB1cGRhdGVFbGVtZW50cykge1xuICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc3RhdGUgPSAncmVhZHknO1xuICB9XG4gIGFzeW5jIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLnN0cmlwZUVsZW1lbnRzU2VydmljZS5tZXJnZU9wdGlvbnModGhpcy5vcHRpb25zLCB0aGlzLmNvbnRhaW5lckNsYXNzKTtcbiAgICBpZiAodGhpcy5lbGVtZW50c1Byb3ZpZGVyKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzU3Vic2NyaXB0aW9uID0gdGhpcy5lbGVtZW50c1Byb3ZpZGVyLmVsZW1lbnRzLnN1YnNjcmliZShlbGVtZW50cyA9PiB7XG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSBlbGVtZW50cztcbiAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KG9wdGlvbnMpO1xuICAgICAgICB0aGlzLnN0YXRlID0gJ3JlYWR5JztcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PT0gJ25vdHJlYWR5Jykge1xuICAgICAgdGhpcy5zdGF0ZSA9ICdzdGFydGluZyc7XG4gICAgICB0aGlzLmVsZW1lbnRzID0gYXdhaXQgdGhpcy5zdHJpcGVFbGVtZW50c1NlcnZpY2UuZWxlbWVudHModGhpcy5zdHJpcGUpLnRvUHJvbWlzZSgpO1xuICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KG9wdGlvbnMpO1xuICAgICAgdGhpcy5zdGF0ZSA9ICdyZWFkeSc7XG4gICAgfVxuICB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5kZXN0cm95KCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmVsZW1lbnRzU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG4gIHVwZGF0ZShvcHRpb25zKSB7XG4gICAgdGhpcy5lbGVtZW50LnVwZGF0ZShvcHRpb25zKTtcbiAgfVxuICAvKipcbiAgICogQGRlcHJlY2F0ZWRcbiAgICovXG4gIGdldEFmZmlybU1lc3NhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgfVxuICBjcmVhdGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnQudW5tb3VudCgpO1xuICAgIH1cbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmVsZW1lbnRzLmNyZWF0ZSgnYWZmaXJtTWVzc2FnZScsIG9wdGlvbnMpO1xuICAgIHRoaXMuZWxlbWVudC5vbigncmVhZHknLCAoKSA9PiB0aGlzLnJlYWR5LmVtaXQoKSk7XG4gICAgdGhpcy5lbGVtZW50Lm1vdW50KHRoaXMuc3RyaXBlRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLmxvYWQuZW1pdCh0aGlzLmVsZW1lbnQpO1xuICB9XG4gIHN0YXRpYyDJtWZhYyA9IGZ1bmN0aW9uIFN0cmlwZUFmZmlybU1lc3NhZ2VDb21wb25lbnRfRmFjdG9yeShfX25nRmFjdG9yeVR5cGVfXykge1xuICAgIHJldHVybiBuZXcgKF9fbmdGYWN0b3J5VHlwZV9fIHx8IFN0cmlwZUFmZmlybU1lc3NhZ2VDb21wb25lbnQpKGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoU3RyaXBlRWxlbWVudHNTZXJ2aWNlKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChTdHJpcGVFbGVtZW50c0RpcmVjdGl2ZSwgOCkpO1xuICB9O1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBTdHJpcGVBZmZpcm1NZXNzYWdlQ29tcG9uZW50LFxuICAgIHNlbGVjdG9yczogW1tcIm5neC1zdHJpcGUtYWZmaXJtLW1lc3NhZ2VcIl1dLFxuICAgIGNvbnRlbnRRdWVyaWVzOiBmdW5jdGlvbiBTdHJpcGVBZmZpcm1NZXNzYWdlQ29tcG9uZW50X0NvbnRlbnRRdWVyaWVzKHJmLCBjdHgsIGRpckluZGV4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybVjb250ZW50UXVlcnkoZGlySW5kZXgsIE5neFN0cmlwZUVsZW1lbnRMb2FkaW5nVGVtcGxhdGVEaXJlY3RpdmUsIDUsIFRlbXBsYXRlUmVmKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZiAmIDIpIHtcbiAgICAgICAgbGV0IF90O1xuICAgICAgICBpMC7Jtcm1cXVlcnlSZWZyZXNoKF90ID0gaTAuybXJtWxvYWRRdWVyeSgpKSAmJiAoY3R4LmxvYWRpbmdUZW1wbGF0ZSA9IF90LmZpcnN0KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHZpZXdRdWVyeTogZnVuY3Rpb24gU3RyaXBlQWZmaXJtTWVzc2FnZUNvbXBvbmVudF9RdWVyeShyZiwgY3R4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybV2aWV3UXVlcnkoX2MwLCA1KTtcbiAgICAgIH1cbiAgICAgIGlmIChyZiAmIDIpIHtcbiAgICAgICAgbGV0IF90O1xuICAgICAgICBpMC7Jtcm1cXVlcnlSZWZyZXNoKF90ID0gaTAuybXJtWxvYWRRdWVyeSgpKSAmJiAoY3R4LnN0cmlwZUVsZW1lbnRSZWYgPSBfdC5maXJzdCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBpbnB1dHM6IHtcbiAgICAgIGNvbnRhaW5lckNsYXNzOiBcImNvbnRhaW5lckNsYXNzXCIsXG4gICAgICBvcHRpb25zOiBcIm9wdGlvbnNcIixcbiAgICAgIGVsZW1lbnRzT3B0aW9uczogXCJlbGVtZW50c09wdGlvbnNcIixcbiAgICAgIHN0cmlwZTogXCJzdHJpcGVcIlxuICAgIH0sXG4gICAgb3V0cHV0czoge1xuICAgICAgbG9hZDogXCJsb2FkXCIsXG4gICAgICByZWFkeTogXCJyZWFkeVwiXG4gICAgfSxcbiAgICBmZWF0dXJlczogW2kwLsm1ybVOZ09uQ2hhbmdlc0ZlYXR1cmVdLFxuICAgIGRlY2xzOiAzLFxuICAgIHZhcnM6IDEsXG4gICAgY29uc3RzOiBbW1wic3RyaXBlRWxlbWVudFJlZlwiLCBcIlwiXSwgWzEsIFwiZmllbGRcIl0sIFszLCBcIm5nVGVtcGxhdGVPdXRsZXRcIl1dLFxuICAgIHRlbXBsYXRlOiBmdW5jdGlvbiBTdHJpcGVBZmZpcm1NZXNzYWdlQ29tcG9uZW50X1RlbXBsYXRlKHJmLCBjdHgpIHtcbiAgICAgIGlmIChyZiAmIDEpIHtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCgwLCBcImRpdlwiLCAxLCAwKTtcbiAgICAgICAgaTAuybXJtXRlbXBsYXRlKDIsIFN0cmlwZUFmZmlybU1lc3NhZ2VDb21wb25lbnRfQ29uZGl0aW9uYWxfMl9UZW1wbGF0ZSwgMSwgMSwgXCJuZy1jb250YWluZXJcIiwgMik7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCk7XG4gICAgICB9XG4gICAgICBpZiAocmYgJiAyKSB7XG4gICAgICAgIGkwLsm1ybVhZHZhbmNlKDIpO1xuICAgICAgICBpMC7Jtcm1Y29uZGl0aW9uYWwoY3R4LnN0YXRlICE9PSBcInJlYWR5XCIgJiYgY3R4LmxvYWRpbmdUZW1wbGF0ZSA/IDIgOiAtMSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBkZXBlbmRlbmNpZXM6IFtDb21tb25Nb2R1bGUsIGkzLk5nVGVtcGxhdGVPdXRsZXRdLFxuICAgIGVuY2Fwc3VsYXRpb246IDJcbiAgfSk7XG59XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShTdHJpcGVBZmZpcm1NZXNzYWdlQ29tcG9uZW50LCBbe1xuICAgIHR5cGU6IENvbXBvbmVudCxcbiAgICBhcmdzOiBbe1xuICAgICAgc2VsZWN0b3I6ICduZ3gtc3RyaXBlLWFmZmlybS1tZXNzYWdlJyxcbiAgICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiICNzdHJpcGVFbGVtZW50UmVmPlxuICAgICAgQGlmIChzdGF0ZSAhPT0gJ3JlYWR5JyAmJiBsb2FkaW5nVGVtcGxhdGUpIHtcbiAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJsb2FkaW5nVGVtcGxhdGVcIiAvPlxuICAgICAgfVxuICAgIDwvZGl2PlxuICBgLFxuICAgICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV1cbiAgICB9XVxuICB9XSwgKCkgPT4gW3tcbiAgICB0eXBlOiBTdHJpcGVFbGVtZW50c1NlcnZpY2VcbiAgfSwge1xuICAgIHR5cGU6IFN0cmlwZUVsZW1lbnRzRGlyZWN0aXZlLFxuICAgIGRlY29yYXRvcnM6IFt7XG4gICAgICB0eXBlOiBPcHRpb25hbFxuICAgIH1dXG4gIH1dLCB7XG4gICAgbG9hZGluZ1RlbXBsYXRlOiBbe1xuICAgICAgdHlwZTogQ29udGVudENoaWxkLFxuICAgICAgYXJnczogW05neFN0cmlwZUVsZW1lbnRMb2FkaW5nVGVtcGxhdGVEaXJlY3RpdmUsIHtcbiAgICAgICAgcmVhZDogVGVtcGxhdGVSZWZcbiAgICAgIH1dXG4gICAgfV0sXG4gICAgc3RyaXBlRWxlbWVudFJlZjogW3tcbiAgICAgIHR5cGU6IFZpZXdDaGlsZCxcbiAgICAgIGFyZ3M6IFsnc3RyaXBlRWxlbWVudFJlZiddXG4gICAgfV0sXG4gICAgY29udGFpbmVyQ2xhc3M6IFt7XG4gICAgICB0eXBlOiBJbnB1dFxuICAgIH1dLFxuICAgIG9wdGlvbnM6IFt7XG4gICAgICB0eXBlOiBJbnB1dFxuICAgIH1dLFxuICAgIGVsZW1lbnRzT3B0aW9uczogW3tcbiAgICAgIHR5cGU6IElucHV0XG4gICAgfV0sXG4gICAgc3RyaXBlOiBbe1xuICAgICAgdHlwZTogSW5wdXRcbiAgICB9XSxcbiAgICBsb2FkOiBbe1xuICAgICAgdHlwZTogT3V0cHV0XG4gICAgfV0sXG4gICAgcmVhZHk6IFt7XG4gICAgICB0eXBlOiBPdXRwdXRcbiAgICB9XVxuICB9KTtcbn0pKCk7XG5jbGFzcyBTdHJpcGVBZnRlcnBheUNsZWFycGF5TWVzc2FnZUNvbXBvbmVudCB7XG4gIHN0cmlwZUVsZW1lbnRzU2VydmljZTtcbiAgZWxlbWVudHNQcm92aWRlcjtcbiAgbG9hZGluZ1RlbXBsYXRlO1xuICBzdHJpcGVFbGVtZW50UmVmO1xuICBlbGVtZW50O1xuICBjb250YWluZXJDbGFzcztcbiAgb3B0aW9ucztcbiAgZWxlbWVudHNPcHRpb25zO1xuICBzdHJpcGU7XG4gIGxvYWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHJlYWR5ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBlbGVtZW50cztcbiAgc3RhdGUgPSAnbm90cmVhZHknO1xuICBlbGVtZW50c1N1YnNjcmlwdGlvbjtcbiAgY29uc3RydWN0b3Ioc3RyaXBlRWxlbWVudHNTZXJ2aWNlLCBlbGVtZW50c1Byb3ZpZGVyKSB7XG4gICAgdGhpcy5zdHJpcGVFbGVtZW50c1NlcnZpY2UgPSBzdHJpcGVFbGVtZW50c1NlcnZpY2U7XG4gICAgdGhpcy5lbGVtZW50c1Byb3ZpZGVyID0gZWxlbWVudHNQcm92aWRlcjtcbiAgfVxuICBhc3luYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XG4gICAgdGhpcy5zdGF0ZSA9ICdzdGFydGluZyc7XG4gICAgbGV0IHVwZGF0ZUVsZW1lbnRzID0gZmFsc2U7XG4gICAgaWYgKCF0aGlzLmVsZW1lbnRzUHJvdmlkZXIgJiYgKGNoYW5nZXMuZWxlbWVudHNPcHRpb25zIHx8IGNoYW5nZXMuc3RyaXBlIHx8ICF0aGlzLmVsZW1lbnRzKSkge1xuICAgICAgdGhpcy5lbGVtZW50cyA9IGF3YWl0IHRoaXMuc3RyaXBlRWxlbWVudHNTZXJ2aWNlLmVsZW1lbnRzKHRoaXMuc3RyaXBlLCB0aGlzLmVsZW1lbnRzT3B0aW9ucykudG9Qcm9taXNlKCk7XG4gICAgICB1cGRhdGVFbGVtZW50cyA9IHRydWU7XG4gICAgfVxuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLnN0cmlwZUVsZW1lbnRzU2VydmljZS5tZXJnZU9wdGlvbnModGhpcy5vcHRpb25zLCB0aGlzLmNvbnRhaW5lckNsYXNzKTtcbiAgICBpZiAoY2hhbmdlcy5vcHRpb25zIHx8IGNoYW5nZXMuY29udGFpbmVyQ2xhc3MgfHwgIXRoaXMuZWxlbWVudCB8fCB1cGRhdGVFbGVtZW50cykge1xuICAgICAgaWYgKHRoaXMuZWxlbWVudCAmJiAhdXBkYXRlRWxlbWVudHMpIHtcbiAgICAgICAgdGhpcy51cGRhdGUob3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudHMgJiYgdXBkYXRlRWxlbWVudHMpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnN0YXRlID0gJ3JlYWR5JztcbiAgfVxuICBhc3luYyBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5zdHJpcGVFbGVtZW50c1NlcnZpY2UubWVyZ2VPcHRpb25zKHRoaXMub3B0aW9ucywgdGhpcy5jb250YWluZXJDbGFzcyk7XG4gICAgaWYgKHRoaXMuZWxlbWVudHNQcm92aWRlcikge1xuICAgICAgdGhpcy5lbGVtZW50c1N1YnNjcmlwdGlvbiA9IHRoaXMuZWxlbWVudHNQcm92aWRlci5lbGVtZW50cy5zdWJzY3JpYmUoZWxlbWVudHMgPT4ge1xuICAgICAgICB0aGlzLmVsZW1lbnRzID0gZWxlbWVudHM7XG4gICAgICAgIHRoaXMuY3JlYXRlRWxlbWVudChvcHRpb25zKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICdyZWFkeSc7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09ICdub3RyZWFkeScpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSAnc3RhcnRpbmcnO1xuICAgICAgdGhpcy5lbGVtZW50cyA9IGF3YWl0IHRoaXMuc3RyaXBlRWxlbWVudHNTZXJ2aWNlLmVsZW1lbnRzKHRoaXMuc3RyaXBlKS50b1Byb21pc2UoKTtcbiAgICAgIHRoaXMuY3JlYXRlRWxlbWVudChvcHRpb25zKTtcbiAgICAgIHRoaXMuc3RhdGUgPSAncmVhZHknO1xuICAgIH1cbiAgfVxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnQuZGVzdHJveSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5lbGVtZW50c1N1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5lbGVtZW50c1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuICB1cGRhdGUob3B0aW9ucykge1xuICAgIHRoaXMuZWxlbWVudC51cGRhdGUob3B0aW9ucyk7XG4gIH1cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkXG4gICAqL1xuICBnZXRBZnRlcnBheUNsZWFycGF5TWVzc2FnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICB9XG4gIGNyZWF0ZUVsZW1lbnQob3B0aW9ucykge1xuICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZWxlbWVudC51bm1vdW50KCk7XG4gICAgfVxuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuZWxlbWVudHMuY3JlYXRlKCdhZnRlcnBheUNsZWFycGF5TWVzc2FnZScsIG9wdGlvbnMpO1xuICAgIHRoaXMuZWxlbWVudC5vbigncmVhZHknLCAoKSA9PiB0aGlzLnJlYWR5LmVtaXQoKSk7XG4gICAgdGhpcy5lbGVtZW50Lm1vdW50KHRoaXMuc3RyaXBlRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLmxvYWQuZW1pdCh0aGlzLmVsZW1lbnQpO1xuICB9XG4gIHN0YXRpYyDJtWZhYyA9IGZ1bmN0aW9uIFN0cmlwZUFmdGVycGF5Q2xlYXJwYXlNZXNzYWdlQ29tcG9uZW50X0ZhY3RvcnkoX19uZ0ZhY3RvcnlUeXBlX18pIHtcbiAgICByZXR1cm4gbmV3IChfX25nRmFjdG9yeVR5cGVfXyB8fCBTdHJpcGVBZnRlcnBheUNsZWFycGF5TWVzc2FnZUNvbXBvbmVudCkoaTAuybXJtWRpcmVjdGl2ZUluamVjdChTdHJpcGVFbGVtZW50c1NlcnZpY2UpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KFN0cmlwZUVsZW1lbnRzRGlyZWN0aXZlLCA4KSk7XG4gIH07XG4gIHN0YXRpYyDJtWNtcCA9IC8qIEBfX1BVUkVfXyAqL2kwLsm1ybVkZWZpbmVDb21wb25lbnQoe1xuICAgIHR5cGU6IFN0cmlwZUFmdGVycGF5Q2xlYXJwYXlNZXNzYWdlQ29tcG9uZW50LFxuICAgIHNlbGVjdG9yczogW1tcIm5neC1zdHJpcGUtYWZ0ZXJwYXktY2xlYXJwYXktbWVzc2FnZVwiXV0sXG4gICAgY29udGVudFF1ZXJpZXM6IGZ1bmN0aW9uIFN0cmlwZUFmdGVycGF5Q2xlYXJwYXlNZXNzYWdlQ29tcG9uZW50X0NvbnRlbnRRdWVyaWVzKHJmLCBjdHgsIGRpckluZGV4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybVjb250ZW50UXVlcnkoZGlySW5kZXgsIE5neFN0cmlwZUVsZW1lbnRMb2FkaW5nVGVtcGxhdGVEaXJlY3RpdmUsIDUsIFRlbXBsYXRlUmVmKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZiAmIDIpIHtcbiAgICAgICAgbGV0IF90O1xuICAgICAgICBpMC7Jtcm1cXVlcnlSZWZyZXNoKF90ID0gaTAuybXJtWxvYWRRdWVyeSgpKSAmJiAoY3R4LmxvYWRpbmdUZW1wbGF0ZSA9IF90LmZpcnN0KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHZpZXdRdWVyeTogZnVuY3Rpb24gU3RyaXBlQWZ0ZXJwYXlDbGVhcnBheU1lc3NhZ2VDb21wb25lbnRfUXVlcnkocmYsIGN0eCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1dmlld1F1ZXJ5KF9jMCwgNSk7XG4gICAgICB9XG4gICAgICBpZiAocmYgJiAyKSB7XG4gICAgICAgIGxldCBfdDtcbiAgICAgICAgaTAuybXJtXF1ZXJ5UmVmcmVzaChfdCA9IGkwLsm1ybVsb2FkUXVlcnkoKSkgJiYgKGN0eC5zdHJpcGVFbGVtZW50UmVmID0gX3QuZmlyc3QpO1xuICAgICAgfVxuICAgIH0sXG4gICAgaW5wdXRzOiB7XG4gICAgICBjb250YWluZXJDbGFzczogXCJjb250YWluZXJDbGFzc1wiLFxuICAgICAgb3B0aW9uczogXCJvcHRpb25zXCIsXG4gICAgICBlbGVtZW50c09wdGlvbnM6IFwiZWxlbWVudHNPcHRpb25zXCIsXG4gICAgICBzdHJpcGU6IFwic3RyaXBlXCJcbiAgICB9LFxuICAgIG91dHB1dHM6IHtcbiAgICAgIGxvYWQ6IFwibG9hZFwiLFxuICAgICAgcmVhZHk6IFwicmVhZHlcIlxuICAgIH0sXG4gICAgZmVhdHVyZXM6IFtpMC7Jtcm1TmdPbkNoYW5nZXNGZWF0dXJlXSxcbiAgICBkZWNsczogMyxcbiAgICB2YXJzOiAxLFxuICAgIGNvbnN0czogW1tcInN0cmlwZUVsZW1lbnRSZWZcIiwgXCJcIl0sIFsxLCBcImZpZWxkXCJdLCBbMywgXCJuZ1RlbXBsYXRlT3V0bGV0XCJdXSxcbiAgICB0ZW1wbGF0ZTogZnVuY3Rpb24gU3RyaXBlQWZ0ZXJwYXlDbGVhcnBheU1lc3NhZ2VDb21wb25lbnRfVGVtcGxhdGUocmYsIGN0eCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDAsIFwiZGl2XCIsIDEsIDApO1xuICAgICAgICBpMC7Jtcm1dGVtcGxhdGUoMiwgU3RyaXBlQWZ0ZXJwYXlDbGVhcnBheU1lc3NhZ2VDb21wb25lbnRfQ29uZGl0aW9uYWxfMl9UZW1wbGF0ZSwgMSwgMSwgXCJuZy1jb250YWluZXJcIiwgMik7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCk7XG4gICAgICB9XG4gICAgICBpZiAocmYgJiAyKSB7XG4gICAgICAgIGkwLsm1ybVhZHZhbmNlKDIpO1xuICAgICAgICBpMC7Jtcm1Y29uZGl0aW9uYWwoY3R4LnN0YXRlICE9PSBcInJlYWR5XCIgJiYgY3R4LmxvYWRpbmdUZW1wbGF0ZSA/IDIgOiAtMSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBkZXBlbmRlbmNpZXM6IFtDb21tb25Nb2R1bGUsIGkzLk5nVGVtcGxhdGVPdXRsZXRdLFxuICAgIGVuY2Fwc3VsYXRpb246IDJcbiAgfSk7XG59XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShTdHJpcGVBZnRlcnBheUNsZWFycGF5TWVzc2FnZUNvbXBvbmVudCwgW3tcbiAgICB0eXBlOiBDb21wb25lbnQsXG4gICAgYXJnczogW3tcbiAgICAgIHNlbGVjdG9yOiAnbmd4LXN0cmlwZS1hZnRlcnBheS1jbGVhcnBheS1tZXNzYWdlJyxcbiAgICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiICNzdHJpcGVFbGVtZW50UmVmPlxuICAgICAgQGlmIChzdGF0ZSAhPT0gJ3JlYWR5JyAmJiBsb2FkaW5nVGVtcGxhdGUpIHtcbiAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJsb2FkaW5nVGVtcGxhdGVcIiAvPlxuICAgICAgfVxuICAgIDwvZGl2PlxuICBgLFxuICAgICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV1cbiAgICB9XVxuICB9XSwgKCkgPT4gW3tcbiAgICB0eXBlOiBTdHJpcGVFbGVtZW50c1NlcnZpY2VcbiAgfSwge1xuICAgIHR5cGU6IFN0cmlwZUVsZW1lbnRzRGlyZWN0aXZlLFxuICAgIGRlY29yYXRvcnM6IFt7XG4gICAgICB0eXBlOiBPcHRpb25hbFxuICAgIH1dXG4gIH1dLCB7XG4gICAgbG9hZGluZ1RlbXBsYXRlOiBbe1xuICAgICAgdHlwZTogQ29udGVudENoaWxkLFxuICAgICAgYXJnczogW05neFN0cmlwZUVsZW1lbnRMb2FkaW5nVGVtcGxhdGVEaXJlY3RpdmUsIHtcbiAgICAgICAgcmVhZDogVGVtcGxhdGVSZWZcbiAgICAgIH1dXG4gICAgfV0sXG4gICAgc3RyaXBlRWxlbWVudFJlZjogW3tcbiAgICAgIHR5cGU6IFZpZXdDaGlsZCxcbiAgICAgIGFyZ3M6IFsnc3RyaXBlRWxlbWVudFJlZiddXG4gICAgfV0sXG4gICAgY29udGFpbmVyQ2xhc3M6IFt7XG4gICAgICB0eXBlOiBJbnB1dFxuICAgIH1dLFxuICAgIG9wdGlvbnM6IFt7XG4gICAgICB0eXBlOiBJbnB1dFxuICAgIH1dLFxuICAgIGVsZW1lbnRzT3B0aW9uczogW3tcbiAgICAgIHR5cGU6IElucHV0XG4gICAgfV0sXG4gICAgc3RyaXBlOiBbe1xuICAgICAgdHlwZTogSW5wdXRcbiAgICB9XSxcbiAgICBsb2FkOiBbe1xuICAgICAgdHlwZTogT3V0cHV0XG4gICAgfV0sXG4gICAgcmVhZHk6IFt7XG4gICAgICB0eXBlOiBPdXRwdXRcbiAgICB9XVxuICB9KTtcbn0pKCk7XG5jbGFzcyBTdHJpcGVDYXJkQ29tcG9uZW50IHtcbiAgY2RyO1xuICBzdHJpcGVFbGVtZW50c1NlcnZpY2U7XG4gIGVsZW1lbnRzUHJvdmlkZXI7XG4gIGxvYWRpbmdUZW1wbGF0ZTtcbiAgc3RyaXBlRWxlbWVudFJlZjtcbiAgZWxlbWVudDtcbiAgY29udGFpbmVyQ2xhc3M7XG4gIG9wdGlvbnM7XG4gIGVsZW1lbnRzT3B0aW9ucztcbiAgc3RyaXBlO1xuICBsb2FkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBibHVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGZvY3VzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICByZWFkeSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgZXNjYXBlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBlbGVtZW50cztcbiAgc3RhdGUgPSAnbm90cmVhZHknO1xuICBlbGVtZW50c1N1YnNjcmlwdGlvbjtcbiAgY29uc3RydWN0b3IoY2RyLCBzdHJpcGVFbGVtZW50c1NlcnZpY2UsIGVsZW1lbnRzUHJvdmlkZXIpIHtcbiAgICB0aGlzLmNkciA9IGNkcjtcbiAgICB0aGlzLnN0cmlwZUVsZW1lbnRzU2VydmljZSA9IHN0cmlwZUVsZW1lbnRzU2VydmljZTtcbiAgICB0aGlzLmVsZW1lbnRzUHJvdmlkZXIgPSBlbGVtZW50c1Byb3ZpZGVyO1xuICB9XG4gIGFzeW5jIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcbiAgICB0aGlzLnN0YXRlID0gJ3N0YXJ0aW5nJztcbiAgICBsZXQgdXBkYXRlRWxlbWVudHMgPSBmYWxzZTtcbiAgICBpZiAoIXRoaXMuZWxlbWVudHNQcm92aWRlciAmJiAoY2hhbmdlcy5lbGVtZW50c09wdGlvbnMgfHwgY2hhbmdlcy5zdHJpcGUgfHwgIXRoaXMuZWxlbWVudHMpKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzID0gYXdhaXQgdGhpcy5zdHJpcGVFbGVtZW50c1NlcnZpY2UuZWxlbWVudHModGhpcy5zdHJpcGUsIHRoaXMuZWxlbWVudHNPcHRpb25zKS50b1Byb21pc2UoKTtcbiAgICAgIHVwZGF0ZUVsZW1lbnRzID0gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuc3RyaXBlRWxlbWVudHNTZXJ2aWNlLm1lcmdlT3B0aW9ucyh0aGlzLm9wdGlvbnMsIHRoaXMuY29udGFpbmVyQ2xhc3MpO1xuICAgIGlmIChjaGFuZ2VzLm9wdGlvbnMgfHwgY2hhbmdlcy5jb250YWluZXJDbGFzcyB8fCAhdGhpcy5lbGVtZW50IHx8IHVwZGF0ZUVsZW1lbnRzKSB7XG4gICAgICBpZiAodGhpcy5lbGVtZW50ICYmICF1cGRhdGVFbGVtZW50cykge1xuICAgICAgICB0aGlzLnVwZGF0ZShvcHRpb25zKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50cyAmJiB1cGRhdGVFbGVtZW50cykge1xuICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGFzeW5jIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLnN0cmlwZUVsZW1lbnRzU2VydmljZS5tZXJnZU9wdGlvbnModGhpcy5vcHRpb25zLCB0aGlzLmNvbnRhaW5lckNsYXNzKTtcbiAgICBpZiAodGhpcy5lbGVtZW50c1Byb3ZpZGVyKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzU3Vic2NyaXB0aW9uID0gdGhpcy5lbGVtZW50c1Byb3ZpZGVyLmVsZW1lbnRzLnN1YnNjcmliZShlbGVtZW50cyA9PiB7XG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSBlbGVtZW50cztcbiAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KG9wdGlvbnMpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09PSAnbm90cmVhZHknKSB7XG4gICAgICB0aGlzLnN0YXRlID0gJ3N0YXJ0aW5nJztcbiAgICAgIHRoaXMuZWxlbWVudHMgPSBhd2FpdCB0aGlzLnN0cmlwZUVsZW1lbnRzU2VydmljZS5lbGVtZW50cyh0aGlzLnN0cmlwZSkudG9Qcm9taXNlKCk7XG4gICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgfVxuICB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5kZXN0cm95KCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmVsZW1lbnRzU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG4gIHVwZGF0ZShvcHRpb25zKSB7XG4gICAgdGhpcy5lbGVtZW50LnVwZGF0ZShvcHRpb25zKTtcbiAgfVxuICAvKipcbiAgICogQGRlcHJlY2F0ZWRcbiAgICovXG4gIGdldENhcmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgfVxuICBjcmVhdGVFbGVtZW50KG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuc3RhdGUgPSAncmVhZHknO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnQudW5tb3VudCgpO1xuICAgIH1cbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmVsZW1lbnRzLmNyZWF0ZSgnY2FyZCcsIG9wdGlvbnMpO1xuICAgIHRoaXMuZWxlbWVudC5vbignY2hhbmdlJywgZXYgPT4gdGhpcy5jaGFuZ2UuZW1pdChldikpO1xuICAgIHRoaXMuZWxlbWVudC5vbignYmx1cicsICgpID0+IHRoaXMuYmx1ci5lbWl0KCkpO1xuICAgIHRoaXMuZWxlbWVudC5vbignZm9jdXMnLCAoKSA9PiB0aGlzLmZvY3VzLmVtaXQoKSk7XG4gICAgdGhpcy5lbGVtZW50Lm9uKCdyZWFkeScsICgpID0+IHRoaXMucmVhZHkuZW1pdCgpKTtcbiAgICB0aGlzLmVsZW1lbnQub24oJ2VzY2FwZScsICgpID0+IHRoaXMuZXNjYXBlLmVtaXQoKSk7XG4gICAgdGhpcy5lbGVtZW50Lm1vdW50KHRoaXMuc3RyaXBlRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLmxvYWQuZW1pdCh0aGlzLmVsZW1lbnQpO1xuICB9XG4gIHN0YXRpYyDJtWZhYyA9IGZ1bmN0aW9uIFN0cmlwZUNhcmRDb21wb25lbnRfRmFjdG9yeShfX25nRmFjdG9yeVR5cGVfXykge1xuICAgIHJldHVybiBuZXcgKF9fbmdGYWN0b3J5VHlwZV9fIHx8IFN0cmlwZUNhcmRDb21wb25lbnQpKGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuQ2hhbmdlRGV0ZWN0b3JSZWYpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KFN0cmlwZUVsZW1lbnRzU2VydmljZSksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoU3RyaXBlRWxlbWVudHNEaXJlY3RpdmUsIDgpKTtcbiAgfTtcbiAgc3RhdGljIMm1Y21wID0gLyogQF9fUFVSRV9fICovaTAuybXJtWRlZmluZUNvbXBvbmVudCh7XG4gICAgdHlwZTogU3RyaXBlQ2FyZENvbXBvbmVudCxcbiAgICBzZWxlY3RvcnM6IFtbXCJuZ3gtc3RyaXBlLWNhcmRcIl1dLFxuICAgIGNvbnRlbnRRdWVyaWVzOiBmdW5jdGlvbiBTdHJpcGVDYXJkQ29tcG9uZW50X0NvbnRlbnRRdWVyaWVzKHJmLCBjdHgsIGRpckluZGV4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybVjb250ZW50UXVlcnkoZGlySW5kZXgsIE5neFN0cmlwZUVsZW1lbnRMb2FkaW5nVGVtcGxhdGVEaXJlY3RpdmUsIDUsIFRlbXBsYXRlUmVmKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZiAmIDIpIHtcbiAgICAgICAgbGV0IF90O1xuICAgICAgICBpMC7Jtcm1cXVlcnlSZWZyZXNoKF90ID0gaTAuybXJtWxvYWRRdWVyeSgpKSAmJiAoY3R4LmxvYWRpbmdUZW1wbGF0ZSA9IF90LmZpcnN0KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHZpZXdRdWVyeTogZnVuY3Rpb24gU3RyaXBlQ2FyZENvbXBvbmVudF9RdWVyeShyZiwgY3R4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybV2aWV3UXVlcnkoX2MwLCA1KTtcbiAgICAgIH1cbiAgICAgIGlmIChyZiAmIDIpIHtcbiAgICAgICAgbGV0IF90O1xuICAgICAgICBpMC7Jtcm1cXVlcnlSZWZyZXNoKF90ID0gaTAuybXJtWxvYWRRdWVyeSgpKSAmJiAoY3R4LnN0cmlwZUVsZW1lbnRSZWYgPSBfdC5maXJzdCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBpbnB1dHM6IHtcbiAgICAgIGNvbnRhaW5lckNsYXNzOiBcImNvbnRhaW5lckNsYXNzXCIsXG4gICAgICBvcHRpb25zOiBcIm9wdGlvbnNcIixcbiAgICAgIGVsZW1lbnRzT3B0aW9uczogXCJlbGVtZW50c09wdGlvbnNcIixcbiAgICAgIHN0cmlwZTogXCJzdHJpcGVcIlxuICAgIH0sXG4gICAgb3V0cHV0czoge1xuICAgICAgbG9hZDogXCJsb2FkXCIsXG4gICAgICBibHVyOiBcImJsdXJcIixcbiAgICAgIGNoYW5nZTogXCJjaGFuZ2VcIixcbiAgICAgIGZvY3VzOiBcImZvY3VzXCIsXG4gICAgICByZWFkeTogXCJyZWFkeVwiLFxuICAgICAgZXNjYXBlOiBcImVzY2FwZVwiXG4gICAgfSxcbiAgICBmZWF0dXJlczogW2kwLsm1ybVOZ09uQ2hhbmdlc0ZlYXR1cmVdLFxuICAgIGRlY2xzOiAzLFxuICAgIHZhcnM6IDEsXG4gICAgY29uc3RzOiBbW1wic3RyaXBlRWxlbWVudFJlZlwiLCBcIlwiXSwgWzEsIFwiZmllbGRcIl0sIFszLCBcIm5nVGVtcGxhdGVPdXRsZXRcIl1dLFxuICAgIHRlbXBsYXRlOiBmdW5jdGlvbiBTdHJpcGVDYXJkQ29tcG9uZW50X1RlbXBsYXRlKHJmLCBjdHgpIHtcbiAgICAgIGlmIChyZiAmIDEpIHtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCgwLCBcImRpdlwiLCAxLCAwKTtcbiAgICAgICAgaTAuybXJtXRlbXBsYXRlKDIsIFN0cmlwZUNhcmRDb21wb25lbnRfQ29uZGl0aW9uYWxfMl9UZW1wbGF0ZSwgMSwgMSwgXCJuZy1jb250YWluZXJcIiwgMik7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCk7XG4gICAgICB9XG4gICAgICBpZiAocmYgJiAyKSB7XG4gICAgICAgIGkwLsm1ybVhZHZhbmNlKDIpO1xuICAgICAgICBpMC7Jtcm1Y29uZGl0aW9uYWwoY3R4LnN0YXRlICE9PSBcInJlYWR5XCIgJiYgY3R4LmxvYWRpbmdUZW1wbGF0ZSA/IDIgOiAtMSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBkZXBlbmRlbmNpZXM6IFtDb21tb25Nb2R1bGUsIGkzLk5nVGVtcGxhdGVPdXRsZXRdLFxuICAgIGVuY2Fwc3VsYXRpb246IDJcbiAgfSk7XG59XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShTdHJpcGVDYXJkQ29tcG9uZW50LCBbe1xuICAgIHR5cGU6IENvbXBvbmVudCxcbiAgICBhcmdzOiBbe1xuICAgICAgc2VsZWN0b3I6ICduZ3gtc3RyaXBlLWNhcmQnLFxuICAgICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICAgIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImZpZWxkXCIgI3N0cmlwZUVsZW1lbnRSZWY+XG4gICAgICBAaWYgKHN0YXRlICE9PSAncmVhZHknICYmIGxvYWRpbmdUZW1wbGF0ZSkge1xuICAgICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImxvYWRpbmdUZW1wbGF0ZVwiIC8+XG4gICAgICB9XG4gICAgPC9kaXY+XG4gIGAsXG4gICAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXVxuICAgIH1dXG4gIH1dLCAoKSA9PiBbe1xuICAgIHR5cGU6IGkwLkNoYW5nZURldGVjdG9yUmVmXG4gIH0sIHtcbiAgICB0eXBlOiBTdHJpcGVFbGVtZW50c1NlcnZpY2VcbiAgfSwge1xuICAgIHR5cGU6IFN0cmlwZUVsZW1lbnRzRGlyZWN0aXZlLFxuICAgIGRlY29yYXRvcnM6IFt7XG4gICAgICB0eXBlOiBPcHRpb25hbFxuICAgIH1dXG4gIH1dLCB7XG4gICAgbG9hZGluZ1RlbXBsYXRlOiBbe1xuICAgICAgdHlwZTogQ29udGVudENoaWxkLFxuICAgICAgYXJnczogW05neFN0cmlwZUVsZW1lbnRMb2FkaW5nVGVtcGxhdGVEaXJlY3RpdmUsIHtcbiAgICAgICAgcmVhZDogVGVtcGxhdGVSZWZcbiAgICAgIH1dXG4gICAgfV0sXG4gICAgc3RyaXBlRWxlbWVudFJlZjogW3tcbiAgICAgIHR5cGU6IFZpZXdDaGlsZCxcbiAgICAgIGFyZ3M6IFsnc3RyaXBlRWxlbWVudFJlZiddXG4gICAgfV0sXG4gICAgY29udGFpbmVyQ2xhc3M6IFt7XG4gICAgICB0eXBlOiBJbnB1dFxuICAgIH1dLFxuICAgIG9wdGlvbnM6IFt7XG4gICAgICB0eXBlOiBJbnB1dFxuICAgIH1dLFxuICAgIGVsZW1lbnRzT3B0aW9uczogW3tcbiAgICAgIHR5cGU6IElucHV0XG4gICAgfV0sXG4gICAgc3RyaXBlOiBbe1xuICAgICAgdHlwZTogSW5wdXRcbiAgICB9XSxcbiAgICBsb2FkOiBbe1xuICAgICAgdHlwZTogT3V0cHV0XG4gICAgfV0sXG4gICAgYmx1cjogW3tcbiAgICAgIHR5cGU6IE91dHB1dFxuICAgIH1dLFxuICAgIGNoYW5nZTogW3tcbiAgICAgIHR5cGU6IE91dHB1dFxuICAgIH1dLFxuICAgIGZvY3VzOiBbe1xuICAgICAgdHlwZTogT3V0cHV0XG4gICAgfV0sXG4gICAgcmVhZHk6IFt7XG4gICAgICB0eXBlOiBPdXRwdXRcbiAgICB9XSxcbiAgICBlc2NhcGU6IFt7XG4gICAgICB0eXBlOiBPdXRwdXRcbiAgICB9XVxuICB9KTtcbn0pKCk7XG5jbGFzcyBTdHJpcGVDYXJkR3JvdXBEaXJlY3RpdmUge1xuICBzdHJpcGVFbGVtZW50c1NlcnZpY2U7XG4gIGVsZW1lbnRzT3B0aW9ucztcbiAgc3RyaXBlO1xuICBlbGVtZW50cyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgbG9hZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgYmx1ciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBmb2N1cyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcmVhZHkgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGVzY2FwZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgX2VsZW1lbnRzO1xuICBzdGF0ZSA9ICdub3RyZWFkeSc7XG4gIGNvbnN0cnVjdG9yKHN0cmlwZUVsZW1lbnRzU2VydmljZSkge1xuICAgIHRoaXMuc3RyaXBlRWxlbWVudHNTZXJ2aWNlID0gc3RyaXBlRWxlbWVudHNTZXJ2aWNlO1xuICB9XG4gIGFzeW5jIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcbiAgICB0aGlzLnN0YXRlID0gJ3N0YXJ0aW5nJztcbiAgICBjb25zdCBlbGVtZW50c09wdGlvbnMgPSB0aGlzLmVsZW1lbnRzT3B0aW9ucztcbiAgICBjb25zdCBzdHJpcGUgPSB0aGlzLnN0cmlwZTtcbiAgICBpZiAoY2hhbmdlcy5lbGVtZW50c09wdGlvbnMgfHwgY2hhbmdlcy5zdHJpcGUgfHwgIXRoaXMuX2VsZW1lbnRzKSB7XG4gICAgICB0aGlzLl9lbGVtZW50cyA9IGF3YWl0IHRoaXMuc3RyaXBlRWxlbWVudHNTZXJ2aWNlLmVsZW1lbnRzKHN0cmlwZSwgZWxlbWVudHNPcHRpb25zKS50b1Byb21pc2UoKTtcbiAgICAgIHRoaXMuZWxlbWVudHMuZW1pdCh0aGlzLl9lbGVtZW50cyk7XG4gICAgfVxuICAgIHRoaXMuc3RhdGUgPSAncmVhZHknO1xuICB9XG4gIGFzeW5jIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLnN0YXRlID09PSAnbm90cmVhZHknKSB7XG4gICAgICB0aGlzLnN0YXRlID0gJ3N0YXJ0aW5nJztcbiAgICAgIHRoaXMuX2VsZW1lbnRzID0gYXdhaXQgdGhpcy5zdHJpcGVFbGVtZW50c1NlcnZpY2UuZWxlbWVudHModGhpcy5zdHJpcGUpLnRvUHJvbWlzZSgpO1xuICAgICAgdGhpcy5lbGVtZW50cy5lbWl0KHRoaXMuX2VsZW1lbnRzKTtcbiAgICAgIHRoaXMuc3RhdGUgPSAncmVhZHknO1xuICAgIH1cbiAgfVxuICBzdGF0aWMgybVmYWMgPSBmdW5jdGlvbiBTdHJpcGVDYXJkR3JvdXBEaXJlY3RpdmVfRmFjdG9yeShfX25nRmFjdG9yeVR5cGVfXykge1xuICAgIHJldHVybiBuZXcgKF9fbmdGYWN0b3J5VHlwZV9fIHx8IFN0cmlwZUNhcmRHcm91cERpcmVjdGl2ZSkoaTAuybXJtWRpcmVjdGl2ZUluamVjdChTdHJpcGVFbGVtZW50c1NlcnZpY2UpKTtcbiAgfTtcbiAgc3RhdGljIMm1ZGlyID0gLyogQF9fUFVSRV9fICovaTAuybXJtWRlZmluZURpcmVjdGl2ZSh7XG4gICAgdHlwZTogU3RyaXBlQ2FyZEdyb3VwRGlyZWN0aXZlLFxuICAgIHNlbGVjdG9yczogW1tcIm5neC1zdHJpcGUtY2FyZC1ncm91cFwiXSwgW1wiXCIsIFwibmd4U3RyaXBlQ2FyZEdyb3VwXCIsIFwiXCJdXSxcbiAgICBpbnB1dHM6IHtcbiAgICAgIGVsZW1lbnRzT3B0aW9uczogXCJlbGVtZW50c09wdGlvbnNcIixcbiAgICAgIHN0cmlwZTogXCJzdHJpcGVcIlxuICAgIH0sXG4gICAgb3V0cHV0czoge1xuICAgICAgZWxlbWVudHM6IFwiZWxlbWVudHNcIixcbiAgICAgIGxvYWQ6IFwibG9hZFwiLFxuICAgICAgYmx1cjogXCJibHVyXCIsXG4gICAgICBjaGFuZ2U6IFwiY2hhbmdlXCIsXG4gICAgICBmb2N1czogXCJmb2N1c1wiLFxuICAgICAgcmVhZHk6IFwicmVhZHlcIixcbiAgICAgIGVzY2FwZTogXCJlc2NhcGVcIlxuICAgIH0sXG4gICAgZmVhdHVyZXM6IFtpMC7Jtcm1TmdPbkNoYW5nZXNGZWF0dXJlXVxuICB9KTtcbn1cbigoKSA9PiB7XG4gICh0eXBlb2YgbmdEZXZNb2RlID09PSBcInVuZGVmaW5lZFwiIHx8IG5nRGV2TW9kZSkgJiYgaTAuybVzZXRDbGFzc01ldGFkYXRhKFN0cmlwZUNhcmRHcm91cERpcmVjdGl2ZSwgW3tcbiAgICB0eXBlOiBEaXJlY3RpdmUsXG4gICAgYXJnczogW3tcbiAgICAgIHNlbGVjdG9yOiAnbmd4LXN0cmlwZS1jYXJkLWdyb3VwLFtuZ3hTdHJpcGVDYXJkR3JvdXBdJyxcbiAgICAgIHN0YW5kYWxvbmU6IHRydWVcbiAgICB9XVxuICB9XSwgKCkgPT4gW3tcbiAgICB0eXBlOiBTdHJpcGVFbGVtZW50c1NlcnZpY2VcbiAgfV0sIHtcbiAgICBlbGVtZW50c09wdGlvbnM6IFt7XG4gICAgICB0eXBlOiBJbnB1dFxuICAgIH1dLFxuICAgIHN0cmlwZTogW3tcbiAgICAgIHR5cGU6IElucHV0XG4gICAgfV0sXG4gICAgZWxlbWVudHM6IFt7XG4gICAgICB0eXBlOiBPdXRwdXRcbiAgICB9XSxcbiAgICBsb2FkOiBbe1xuICAgICAgdHlwZTogT3V0cHV0XG4gICAgfV0sXG4gICAgYmx1cjogW3tcbiAgICAgIHR5cGU6IE91dHB1dFxuICAgIH1dLFxuICAgIGNoYW5nZTogW3tcbiAgICAgIHR5cGU6IE91dHB1dFxuICAgIH1dLFxuICAgIGZvY3VzOiBbe1xuICAgICAgdHlwZTogT3V0cHV0XG4gICAgfV0sXG4gICAgcmVhZHk6IFt7XG4gICAgICB0eXBlOiBPdXRwdXRcbiAgICB9XSxcbiAgICBlc2NhcGU6IFt7XG4gICAgICB0eXBlOiBPdXRwdXRcbiAgICB9XVxuICB9KTtcbn0pKCk7XG5jbGFzcyBTdHJpcGVDYXJkTnVtYmVyQ29tcG9uZW50IHtcbiAgc3RyaXBlRWxlbWVudHNTZXJ2aWNlO1xuICBjYXJkR3JvdXA7XG4gIGVsZW1lbnRzUHJvdmlkZXI7XG4gIGxvYWRpbmdUZW1wbGF0ZTtcbiAgc3RyaXBlRWxlbWVudFJlZjtcbiAgZWxlbWVudDtcbiAgY29udGFpbmVyQ2xhc3M7XG4gIG9wdGlvbnM7XG4gIGxvYWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGJsdXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgZm9jdXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHJlYWR5ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBlc2NhcGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGVsZW1lbnRzO1xuICBlbGVtZW50c1N1YnNjcmlwdGlvbjtcbiAgY29uc3RydWN0b3Ioc3RyaXBlRWxlbWVudHNTZXJ2aWNlLCBjYXJkR3JvdXAsIGVsZW1lbnRzUHJvdmlkZXIpIHtcbiAgICB0aGlzLnN0cmlwZUVsZW1lbnRzU2VydmljZSA9IHN0cmlwZUVsZW1lbnRzU2VydmljZTtcbiAgICB0aGlzLmNhcmRHcm91cCA9IGNhcmRHcm91cDtcbiAgICB0aGlzLmVsZW1lbnRzUHJvdmlkZXIgPSBlbGVtZW50c1Byb3ZpZGVyO1xuICB9XG4gIGFzeW5jIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcy5vcHRpb25zIHx8IGNoYW5nZXMuY29udGFpbmVyQ2xhc3MpIHtcbiAgICAgIHRoaXMuc2V0dXBFbGVtZW50KCdvcHRpb25zJyk7XG4gICAgfVxuICB9XG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmNhcmRHcm91cCkge1xuICAgICAgdGhpcy5lbGVtZW50c1N1YnNjcmlwdGlvbiA9IHRoaXMuY2FyZEdyb3VwLmVsZW1lbnRzLnN1YnNjcmliZShlbGVtZW50cyA9PiB7XG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSBlbGVtZW50cztcbiAgICAgICAgdGhpcy5zZXR1cEVsZW1lbnQoJ2VsZW1lbnRzJyk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudHNQcm92aWRlcikge1xuICAgICAgdGhpcy5lbGVtZW50c1N1YnNjcmlwdGlvbiA9IHRoaXMuZWxlbWVudHNQcm92aWRlci5lbGVtZW50cy5zdWJzY3JpYmUoZWxlbWVudHMgPT4ge1xuICAgICAgICB0aGlzLmVsZW1lbnRzID0gZWxlbWVudHM7XG4gICAgICAgIHRoaXMuc2V0dXBFbGVtZW50KCdlbGVtZW50cycpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignU3RyaXBlQ2FyZE51bWJlckNvbXBvbmVudCBtdXN0IGhhdmUgU3RyaXBlQ2FyZEdyb3VwRGlyZWN0aXZlIG9yIFN0cmlwZUVsZW1lbnRzRGlyZWN0aXZlIHBhcmVudCcpO1xuICAgIH1cbiAgfVxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnQuZGVzdHJveSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5lbGVtZW50c1N1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5lbGVtZW50c1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuICB1cGRhdGUob3B0aW9ucykge1xuICAgIHRoaXMuZWxlbWVudC51cGRhdGUob3B0aW9ucyk7XG4gIH1cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkXG4gICAqL1xuICBnZXRDYXJkTnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gIH1cbiAgc2V0dXBFbGVtZW50KHNvdXJjZSkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLnN0cmlwZUVsZW1lbnRzU2VydmljZS5tZXJnZU9wdGlvbnModGhpcy5vcHRpb25zLCB0aGlzLmNvbnRhaW5lckNsYXNzKTtcbiAgICBpZiAodGhpcy5lbGVtZW50ICYmIHNvdXJjZSA9PT0gJ29wdGlvbnMnKSB7XG4gICAgICB0aGlzLnVwZGF0ZShvcHRpb25zKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudHMgJiYgc291cmNlID09PSAnZWxlbWVudHMnKSB7XG4gICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmVsZW1lbnRzLmNyZWF0ZSgnY2FyZE51bWJlcicsIG9wdGlvbnMpO1xuICAgICAgdGhpcy5lbGVtZW50Lm9uKCdjaGFuZ2UnLCBldiA9PiB7XG4gICAgICAgIHRoaXMuY2hhbmdlLmVtaXQoZXYpO1xuICAgICAgICB0aGlzLmNhcmRHcm91cD8uY2hhbmdlLmVtaXQoZXYpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmVsZW1lbnQub24oJ2JsdXInLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuYmx1ci5lbWl0KCk7XG4gICAgICAgIHRoaXMuY2FyZEdyb3VwPy5ibHVyLmVtaXQoKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5lbGVtZW50Lm9uKCdmb2N1cycsICgpID0+IHtcbiAgICAgICAgdGhpcy5mb2N1cy5lbWl0KCk7XG4gICAgICAgIHRoaXMuY2FyZEdyb3VwPy5mb2N1cy5lbWl0KCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZWxlbWVudC5vbigncmVhZHknLCAoKSA9PiB7XG4gICAgICAgIHRoaXMucmVhZHkuZW1pdCgpO1xuICAgICAgICB0aGlzLmNhcmRHcm91cD8ucmVhZHkuZW1pdCgpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmVsZW1lbnQub24oJ2VzY2FwZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5lc2NhcGUuZW1pdCgpO1xuICAgICAgICB0aGlzLmNhcmRHcm91cD8uZXNjYXBlLmVtaXQoKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5lbGVtZW50Lm1vdW50KHRoaXMuc3RyaXBlRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICAgIHRoaXMubG9hZC5lbWl0KHRoaXMuZWxlbWVudCk7XG4gICAgICB0aGlzLmNhcmRHcm91cD8ubG9hZC5lbWl0KHRoaXMuZWxlbWVudCk7XG4gICAgfVxuICB9XG4gIHN0YXRpYyDJtWZhYyA9IGZ1bmN0aW9uIFN0cmlwZUNhcmROdW1iZXJDb21wb25lbnRfRmFjdG9yeShfX25nRmFjdG9yeVR5cGVfXykge1xuICAgIHJldHVybiBuZXcgKF9fbmdGYWN0b3J5VHlwZV9fIHx8IFN0cmlwZUNhcmROdW1iZXJDb21wb25lbnQpKGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoU3RyaXBlRWxlbWVudHNTZXJ2aWNlKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChTdHJpcGVDYXJkR3JvdXBEaXJlY3RpdmUsIDgpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KFN0cmlwZUVsZW1lbnRzRGlyZWN0aXZlLCA4KSk7XG4gIH07XG4gIHN0YXRpYyDJtWNtcCA9IC8qIEBfX1BVUkVfXyAqL2kwLsm1ybVkZWZpbmVDb21wb25lbnQoe1xuICAgIHR5cGU6IFN0cmlwZUNhcmROdW1iZXJDb21wb25lbnQsXG4gICAgc2VsZWN0b3JzOiBbW1wibmd4LXN0cmlwZS1jYXJkLW51bWJlclwiXV0sXG4gICAgY29udGVudFF1ZXJpZXM6IGZ1bmN0aW9uIFN0cmlwZUNhcmROdW1iZXJDb21wb25lbnRfQ29udGVudFF1ZXJpZXMocmYsIGN0eCwgZGlySW5kZXgpIHtcbiAgICAgIGlmIChyZiAmIDEpIHtcbiAgICAgICAgaTAuybXJtWNvbnRlbnRRdWVyeShkaXJJbmRleCwgTmd4U3RyaXBlRWxlbWVudExvYWRpbmdUZW1wbGF0ZURpcmVjdGl2ZSwgNSwgVGVtcGxhdGVSZWYpO1xuICAgICAgfVxuICAgICAgaWYgKHJmICYgMikge1xuICAgICAgICBsZXQgX3Q7XG4gICAgICAgIGkwLsm1ybVxdWVyeVJlZnJlc2goX3QgPSBpMC7Jtcm1bG9hZFF1ZXJ5KCkpICYmIChjdHgubG9hZGluZ1RlbXBsYXRlID0gX3QuZmlyc3QpO1xuICAgICAgfVxuICAgIH0sXG4gICAgdmlld1F1ZXJ5OiBmdW5jdGlvbiBTdHJpcGVDYXJkTnVtYmVyQ29tcG9uZW50X1F1ZXJ5KHJmLCBjdHgpIHtcbiAgICAgIGlmIChyZiAmIDEpIHtcbiAgICAgICAgaTAuybXJtXZpZXdRdWVyeShfYzAsIDUpO1xuICAgICAgfVxuICAgICAgaWYgKHJmICYgMikge1xuICAgICAgICBsZXQgX3Q7XG4gICAgICAgIGkwLsm1ybVxdWVyeVJlZnJlc2goX3QgPSBpMC7Jtcm1bG9hZFF1ZXJ5KCkpICYmIChjdHguc3RyaXBlRWxlbWVudFJlZiA9IF90LmZpcnN0KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGlucHV0czoge1xuICAgICAgY29udGFpbmVyQ2xhc3M6IFwiY29udGFpbmVyQ2xhc3NcIixcbiAgICAgIG9wdGlvbnM6IFwib3B0aW9uc1wiXG4gICAgfSxcbiAgICBvdXRwdXRzOiB7XG4gICAgICBsb2FkOiBcImxvYWRcIixcbiAgICAgIGJsdXI6IFwiYmx1clwiLFxuICAgICAgY2hhbmdlOiBcImNoYW5nZVwiLFxuICAgICAgZm9jdXM6IFwiZm9jdXNcIixcbiAgICAgIHJlYWR5OiBcInJlYWR5XCIsXG4gICAgICBlc2NhcGU6IFwiZXNjYXBlXCJcbiAgICB9LFxuICAgIGZlYXR1cmVzOiBbaTAuybXJtU5nT25DaGFuZ2VzRmVhdHVyZV0sXG4gICAgZGVjbHM6IDMsXG4gICAgdmFyczogMSxcbiAgICBjb25zdHM6IFtbXCJzdHJpcGVFbGVtZW50UmVmXCIsIFwiXCJdLCBbMSwgXCJmaWVsZFwiXSwgWzMsIFwibmdUZW1wbGF0ZU91dGxldFwiXV0sXG4gICAgdGVtcGxhdGU6IGZ1bmN0aW9uIFN0cmlwZUNhcmROdW1iZXJDb21wb25lbnRfVGVtcGxhdGUocmYsIGN0eCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDAsIFwiZGl2XCIsIDEsIDApO1xuICAgICAgICBpMC7Jtcm1dGVtcGxhdGUoMiwgU3RyaXBlQ2FyZE51bWJlckNvbXBvbmVudF9Db25kaXRpb25hbF8yX1RlbXBsYXRlLCAxLCAxLCBcIm5nLWNvbnRhaW5lclwiLCAyKTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZiAmIDIpIHtcbiAgICAgICAgaTAuybXJtWFkdmFuY2UoMik7XG4gICAgICAgIGkwLsm1ybVjb25kaXRpb25hbChjdHguY2FyZEdyb3VwICYmIGN0eC5jYXJkR3JvdXAuc3RhdGUgIT09IFwicmVhZHlcIiAmJiBjdHgubG9hZGluZ1RlbXBsYXRlID8gMiA6IC0xKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRlcGVuZGVuY2llczogW0NvbW1vbk1vZHVsZSwgaTMuTmdUZW1wbGF0ZU91dGxldF0sXG4gICAgZW5jYXBzdWxhdGlvbjogMlxuICB9KTtcbn1cbigoKSA9PiB7XG4gICh0eXBlb2YgbmdEZXZNb2RlID09PSBcInVuZGVmaW5lZFwiIHx8IG5nRGV2TW9kZSkgJiYgaTAuybVzZXRDbGFzc01ldGFkYXRhKFN0cmlwZUNhcmROdW1iZXJDb21wb25lbnQsIFt7XG4gICAgdHlwZTogQ29tcG9uZW50LFxuICAgIGFyZ3M6IFt7XG4gICAgICBzZWxlY3RvcjogJ25neC1zdHJpcGUtY2FyZC1udW1iZXInLFxuICAgICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICAgIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImZpZWxkXCIgI3N0cmlwZUVsZW1lbnRSZWY+XG4gICAgICBAaWYgKGNhcmRHcm91cCAmJiBjYXJkR3JvdXAuc3RhdGUgIT09ICdyZWFkeScgJiYgbG9hZGluZ1RlbXBsYXRlKSB7XG4gICAgICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwibG9hZGluZ1RlbXBsYXRlXCIgLz5cbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgYCxcbiAgICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdXG4gICAgfV1cbiAgfV0sICgpID0+IFt7XG4gICAgdHlwZTogU3RyaXBlRWxlbWVudHNTZXJ2aWNlXG4gIH0sIHtcbiAgICB0eXBlOiBTdHJpcGVDYXJkR3JvdXBEaXJlY3RpdmUsXG4gICAgZGVjb3JhdG9yczogW3tcbiAgICAgIHR5cGU6IE9wdGlvbmFsXG4gICAgfV1cbiAgfSwge1xuICAgIHR5cGU6IFN0cmlwZUVsZW1lbnRzRGlyZWN0aXZlLFxuICAgIGRlY29yYXRvcnM6IFt7XG4gICAgICB0eXBlOiBPcHRpb25hbFxuICAgIH1dXG4gIH1dLCB7XG4gICAgbG9hZGluZ1RlbXBsYXRlOiBbe1xuICAgICAgdHlwZTogQ29udGVudENoaWxkLFxuICAgICAgYXJnczogW05neFN0cmlwZUVsZW1lbnRMb2FkaW5nVGVtcGxhdGVEaXJlY3RpdmUsIHtcbiAgICAgICAgcmVhZDogVGVtcGxhdGVSZWZcbiAgICAgIH1dXG4gICAgfV0sXG4gICAgc3RyaXBlRWxlbWVudFJlZjogW3tcbiAgICAgIHR5cGU6IFZpZXdDaGlsZCxcbiAgICAgIGFyZ3M6IFsnc3RyaXBlRWxlbWVudFJlZiddXG4gICAgfV0sXG4gICAgY29udGFpbmVyQ2xhc3M6IFt7XG4gICAgICB0eXBlOiBJbnB1dFxuICAgIH1dLFxuICAgIG9wdGlvbnM6IFt7XG4gICAgICB0eXBlOiBJbnB1dFxuICAgIH1dLFxuICAgIGxvYWQ6IFt7XG4gICAgICB0eXBlOiBPdXRwdXRcbiAgICB9XSxcbiAgICBibHVyOiBbe1xuICAgICAgdHlwZTogT3V0cHV0XG4gICAgfV0sXG4gICAgY2hhbmdlOiBbe1xuICAgICAgdHlwZTogT3V0cHV0XG4gICAgfV0sXG4gICAgZm9jdXM6IFt7XG4gICAgICB0eXBlOiBPdXRwdXRcbiAgICB9XSxcbiAgICByZWFkeTogW3tcbiAgICAgIHR5cGU6IE91dHB1dFxuICAgIH1dLFxuICAgIGVzY2FwZTogW3tcbiAgICAgIHR5cGU6IE91dHB1dFxuICAgIH1dXG4gIH0pO1xufSkoKTtcbmNsYXNzIFN0cmlwZUNhcmRFeHBpcnlDb21wb25lbnQge1xuICBzdHJpcGVFbGVtZW50c1NlcnZpY2U7XG4gIGNhcmRHcm91cDtcbiAgZWxlbWVudHNQcm92aWRlcjtcbiAgbG9hZGluZ1RlbXBsYXRlO1xuICBzdHJpcGVFbGVtZW50UmVmO1xuICBlbGVtZW50O1xuICBjb250YWluZXJDbGFzcztcbiAgb3B0aW9ucztcbiAgbG9hZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgYmx1ciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBmb2N1cyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcmVhZHkgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGVzY2FwZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgZWxlbWVudHM7XG4gIGVsZW1lbnRzU3Vic2NyaXB0aW9uO1xuICBjb25zdHJ1Y3RvcihzdHJpcGVFbGVtZW50c1NlcnZpY2UsIGNhcmRHcm91cCwgZWxlbWVudHNQcm92aWRlcikge1xuICAgIHRoaXMuc3RyaXBlRWxlbWVudHNTZXJ2aWNlID0gc3RyaXBlRWxlbWVudHNTZXJ2aWNlO1xuICAgIHRoaXMuY2FyZEdyb3VwID0gY2FyZEdyb3VwO1xuICAgIHRoaXMuZWxlbWVudHNQcm92aWRlciA9IGVsZW1lbnRzUHJvdmlkZXI7XG4gIH1cbiAgYXN5bmMgbmdPbkNoYW5nZXMoY2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzLm9wdGlvbnMgfHwgY2hhbmdlcy5jb250YWluZXJDbGFzcykge1xuICAgICAgdGhpcy5zZXR1cEVsZW1lbnQoJ29wdGlvbnMnKTtcbiAgICB9XG4gIH1cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuY2FyZEdyb3VwKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzU3Vic2NyaXB0aW9uID0gdGhpcy5jYXJkR3JvdXAuZWxlbWVudHMuc3Vic2NyaWJlKGVsZW1lbnRzID0+IHtcbiAgICAgICAgdGhpcy5lbGVtZW50cyA9IGVsZW1lbnRzO1xuICAgICAgICB0aGlzLnNldHVwRWxlbWVudCgnZWxlbWVudHMnKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50c1Byb3ZpZGVyKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzU3Vic2NyaXB0aW9uID0gdGhpcy5lbGVtZW50c1Byb3ZpZGVyLmVsZW1lbnRzLnN1YnNjcmliZShlbGVtZW50cyA9PiB7XG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSBlbGVtZW50cztcbiAgICAgICAgdGhpcy5zZXR1cEVsZW1lbnQoJ2VsZW1lbnRzJyk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdTdHJpcGVDYXJkRXhwaXJ5Q29tcG9uZW50IG11c3QgaGF2ZSBTdHJpcGVDYXJkR3JvdXBEaXJlY3RpdmUgb3IgU3RyaXBlRWxlbWVudHNEaXJlY3RpdmUgcGFyZW50Jyk7XG4gICAgfVxuICB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5kZXN0cm95KCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmVsZW1lbnRzU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG4gIHVwZGF0ZShvcHRpb25zKSB7XG4gICAgdGhpcy5lbGVtZW50LnVwZGF0ZShvcHRpb25zKTtcbiAgfVxuICAvKipcbiAgICogQGRlcHJlY2F0ZWRcbiAgICovXG4gIGdldENhcmRFeHBpcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgfVxuICBzZXR1cEVsZW1lbnQoc291cmNlKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuc3RyaXBlRWxlbWVudHNTZXJ2aWNlLm1lcmdlT3B0aW9ucyh0aGlzLm9wdGlvbnMsIHRoaXMuY29udGFpbmVyQ2xhc3MpO1xuICAgIGlmICh0aGlzLmVsZW1lbnQgJiYgc291cmNlID09PSAnb3B0aW9ucycpIHtcbiAgICAgIHRoaXMudXBkYXRlKG9wdGlvbnMpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50cyAmJiBzb3VyY2UgPT09ICdlbGVtZW50cycpIHtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuZWxlbWVudHMuY3JlYXRlKCdjYXJkRXhwaXJ5Jywgb3B0aW9ucyk7XG4gICAgICB0aGlzLmVsZW1lbnQub24oJ2NoYW5nZScsIGV2ID0+IHtcbiAgICAgICAgdGhpcy5jaGFuZ2UuZW1pdChldik7XG4gICAgICAgIHRoaXMuY2FyZEdyb3VwPy5jaGFuZ2UuZW1pdChldik7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZWxlbWVudC5vbignYmx1cicsICgpID0+IHtcbiAgICAgICAgdGhpcy5ibHVyLmVtaXQoKTtcbiAgICAgICAgdGhpcy5jYXJkR3JvdXA/LmJsdXIuZW1pdCgpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmVsZW1lbnQub24oJ2ZvY3VzJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmZvY3VzLmVtaXQoKTtcbiAgICAgICAgdGhpcy5jYXJkR3JvdXA/LmZvY3VzLmVtaXQoKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5lbGVtZW50Lm9uKCdyZWFkeScsICgpID0+IHtcbiAgICAgICAgdGhpcy5yZWFkeS5lbWl0KCk7XG4gICAgICAgIHRoaXMuY2FyZEdyb3VwPy5yZWFkeS5lbWl0KCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZWxlbWVudC5vbignZXNjYXBlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmVzY2FwZS5lbWl0KCk7XG4gICAgICAgIHRoaXMuY2FyZEdyb3VwPy5lc2NhcGUuZW1pdCgpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmVsZW1lbnQubW91bnQodGhpcy5zdHJpcGVFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgdGhpcy5sb2FkLmVtaXQodGhpcy5lbGVtZW50KTtcbiAgICAgIHRoaXMuY2FyZEdyb3VwPy5sb2FkLmVtaXQodGhpcy5lbGVtZW50KTtcbiAgICB9XG4gIH1cbiAgc3RhdGljIMm1ZmFjID0gZnVuY3Rpb24gU3RyaXBlQ2FyZEV4cGlyeUNvbXBvbmVudF9GYWN0b3J5KF9fbmdGYWN0b3J5VHlwZV9fKSB7XG4gICAgcmV0dXJuIG5ldyAoX19uZ0ZhY3RvcnlUeXBlX18gfHwgU3RyaXBlQ2FyZEV4cGlyeUNvbXBvbmVudCkoaTAuybXJtWRpcmVjdGl2ZUluamVjdChTdHJpcGVFbGVtZW50c1NlcnZpY2UpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KFN0cmlwZUNhcmRHcm91cERpcmVjdGl2ZSwgOCksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoU3RyaXBlRWxlbWVudHNEaXJlY3RpdmUsIDgpKTtcbiAgfTtcbiAgc3RhdGljIMm1Y21wID0gLyogQF9fUFVSRV9fICovaTAuybXJtWRlZmluZUNvbXBvbmVudCh7XG4gICAgdHlwZTogU3RyaXBlQ2FyZEV4cGlyeUNvbXBvbmVudCxcbiAgICBzZWxlY3RvcnM6IFtbXCJuZ3gtc3RyaXBlLWNhcmQtZXhwaXJ5XCJdXSxcbiAgICBjb250ZW50UXVlcmllczogZnVuY3Rpb24gU3RyaXBlQ2FyZEV4cGlyeUNvbXBvbmVudF9Db250ZW50UXVlcmllcyhyZiwgY3R4LCBkaXJJbmRleCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1Y29udGVudFF1ZXJ5KGRpckluZGV4LCBOZ3hTdHJpcGVFbGVtZW50TG9hZGluZ1RlbXBsYXRlRGlyZWN0aXZlLCA1LCBUZW1wbGF0ZVJlZik7XG4gICAgICB9XG4gICAgICBpZiAocmYgJiAyKSB7XG4gICAgICAgIGxldCBfdDtcbiAgICAgICAgaTAuybXJtXF1ZXJ5UmVmcmVzaChfdCA9IGkwLsm1ybVsb2FkUXVlcnkoKSkgJiYgKGN0eC5sb2FkaW5nVGVtcGxhdGUgPSBfdC5maXJzdCk7XG4gICAgICB9XG4gICAgfSxcbiAgICB2aWV3UXVlcnk6IGZ1bmN0aW9uIFN0cmlwZUNhcmRFeHBpcnlDb21wb25lbnRfUXVlcnkocmYsIGN0eCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1dmlld1F1ZXJ5KF9jMCwgNSk7XG4gICAgICB9XG4gICAgICBpZiAocmYgJiAyKSB7XG4gICAgICAgIGxldCBfdDtcbiAgICAgICAgaTAuybXJtXF1ZXJ5UmVmcmVzaChfdCA9IGkwLsm1ybVsb2FkUXVlcnkoKSkgJiYgKGN0eC5zdHJpcGVFbGVtZW50UmVmID0gX3QuZmlyc3QpO1xuICAgICAgfVxuICAgIH0sXG4gICAgaW5wdXRzOiB7XG4gICAgICBjb250YWluZXJDbGFzczogXCJjb250YWluZXJDbGFzc1wiLFxuICAgICAgb3B0aW9uczogXCJvcHRpb25zXCJcbiAgICB9LFxuICAgIG91dHB1dHM6IHtcbiAgICAgIGxvYWQ6IFwibG9hZFwiLFxuICAgICAgYmx1cjogXCJibHVyXCIsXG4gICAgICBjaGFuZ2U6IFwiY2hhbmdlXCIsXG4gICAgICBmb2N1czogXCJmb2N1c1wiLFxuICAgICAgcmVhZHk6IFwicmVhZHlcIixcbiAgICAgIGVzY2FwZTogXCJlc2NhcGVcIlxuICAgIH0sXG4gICAgZmVhdHVyZXM6IFtpMC7Jtcm1TmdPbkNoYW5nZXNGZWF0dXJlXSxcbiAgICBkZWNsczogMyxcbiAgICB2YXJzOiAxLFxuICAgIGNvbnN0czogW1tcInN0cmlwZUVsZW1lbnRSZWZcIiwgXCJcIl0sIFsxLCBcImZpZWxkXCJdLCBbMywgXCJuZ1RlbXBsYXRlT3V0bGV0XCJdXSxcbiAgICB0ZW1wbGF0ZTogZnVuY3Rpb24gU3RyaXBlQ2FyZEV4cGlyeUNvbXBvbmVudF9UZW1wbGF0ZShyZiwgY3R4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoMCwgXCJkaXZcIiwgMSwgMCk7XG4gICAgICAgIGkwLsm1ybV0ZW1wbGF0ZSgyLCBTdHJpcGVDYXJkRXhwaXJ5Q29tcG9uZW50X0NvbmRpdGlvbmFsXzJfVGVtcGxhdGUsIDEsIDEsIFwibmctY29udGFpbmVyXCIsIDIpO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xuICAgICAgfVxuICAgICAgaWYgKHJmICYgMikge1xuICAgICAgICBpMC7Jtcm1YWR2YW5jZSgyKTtcbiAgICAgICAgaTAuybXJtWNvbmRpdGlvbmFsKGN0eC5jYXJkR3JvdXAgJiYgY3R4LmNhcmRHcm91cC5zdGF0ZSAhPT0gXCJyZWFkeVwiICYmIGN0eC5sb2FkaW5nVGVtcGxhdGUgPyAyIDogLTEpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZGVwZW5kZW5jaWVzOiBbQ29tbW9uTW9kdWxlLCBpMy5OZ1RlbXBsYXRlT3V0bGV0XSxcbiAgICBlbmNhcHN1bGF0aW9uOiAyXG4gIH0pO1xufVxuKCgpID0+IHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoU3RyaXBlQ2FyZEV4cGlyeUNvbXBvbmVudCwgW3tcbiAgICB0eXBlOiBDb21wb25lbnQsXG4gICAgYXJnczogW3tcbiAgICAgIHNlbGVjdG9yOiAnbmd4LXN0cmlwZS1jYXJkLWV4cGlyeScsXG4gICAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgICAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIiAjc3RyaXBlRWxlbWVudFJlZj5cbiAgICAgIEBpZiAoY2FyZEdyb3VwICYmIGNhcmRHcm91cC5zdGF0ZSAhPT0gJ3JlYWR5JyAmJiBsb2FkaW5nVGVtcGxhdGUpIHtcbiAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJsb2FkaW5nVGVtcGxhdGVcIiAvPlxuICAgICAgfVxuICAgIDwvZGl2PlxuICBgLFxuICAgICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV1cbiAgICB9XVxuICB9XSwgKCkgPT4gW3tcbiAgICB0eXBlOiBTdHJpcGVFbGVtZW50c1NlcnZpY2VcbiAgfSwge1xuICAgIHR5cGU6IFN0cmlwZUNhcmRHcm91cERpcmVjdGl2ZSxcbiAgICBkZWNvcmF0b3JzOiBbe1xuICAgICAgdHlwZTogT3B0aW9uYWxcbiAgICB9XVxuICB9LCB7XG4gICAgdHlwZTogU3RyaXBlRWxlbWVudHNEaXJlY3RpdmUsXG4gICAgZGVjb3JhdG9yczogW3tcbiAgICAgIHR5cGU6IE9wdGlvbmFsXG4gICAgfV1cbiAgfV0sIHtcbiAgICBsb2FkaW5nVGVtcGxhdGU6IFt7XG4gICAgICB0eXBlOiBDb250ZW50Q2hpbGQsXG4gICAgICBhcmdzOiBbTmd4U3RyaXBlRWxlbWVudExvYWRpbmdUZW1wbGF0ZURpcmVjdGl2ZSwge1xuICAgICAgICByZWFkOiBUZW1wbGF0ZVJlZlxuICAgICAgfV1cbiAgICB9XSxcbiAgICBzdHJpcGVFbGVtZW50UmVmOiBbe1xuICAgICAgdHlwZTogVmlld0NoaWxkLFxuICAgICAgYXJnczogWydzdHJpcGVFbGVtZW50UmVmJ11cbiAgICB9XSxcbiAgICBjb250YWluZXJDbGFzczogW3tcbiAgICAgIHR5cGU6IElucHV0XG4gICAgfV0sXG4gICAgb3B0aW9uczogW3tcbiAgICAgIHR5cGU6IElucHV0XG4gICAgfV0sXG4gICAgbG9hZDogW3tcbiAgICAgIHR5cGU6IE91dHB1dFxuICAgIH1dLFxuICAgIGJsdXI6IFt7XG4gICAgICB0eXBlOiBPdXRwdXRcbiAgICB9XSxcbiAgICBjaGFuZ2U6IFt7XG4gICAgICB0eXBlOiBPdXRwdXRcbiAgICB9XSxcbiAgICBmb2N1czogW3tcbiAgICAgIHR5cGU6IE91dHB1dFxuICAgIH1dLFxuICAgIHJlYWR5OiBbe1xuICAgICAgdHlwZTogT3V0cHV0XG4gICAgfV0sXG4gICAgZXNjYXBlOiBbe1xuICAgICAgdHlwZTogT3V0cHV0XG4gICAgfV1cbiAgfSk7XG59KSgpO1xuY2xhc3MgU3RyaXBlQ2FyZEN2Y0NvbXBvbmVudCB7XG4gIHN0cmlwZUVsZW1lbnRzU2VydmljZTtcbiAgY2FyZEdyb3VwO1xuICBlbGVtZW50c1Byb3ZpZGVyO1xuICBsb2FkaW5nVGVtcGxhdGU7XG4gIHN0cmlwZUVsZW1lbnRSZWY7XG4gIGVsZW1lbnQ7XG4gIGNvbnRhaW5lckNsYXNzO1xuICBvcHRpb25zO1xuICBsb2FkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBibHVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGZvY3VzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICByZWFkeSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgZXNjYXBlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBlbGVtZW50cztcbiAgZWxlbWVudHNTdWJzY3JpcHRpb247XG4gIGNvbnN0cnVjdG9yKHN0cmlwZUVsZW1lbnRzU2VydmljZSwgY2FyZEdyb3VwLCBlbGVtZW50c1Byb3ZpZGVyKSB7XG4gICAgdGhpcy5zdHJpcGVFbGVtZW50c1NlcnZpY2UgPSBzdHJpcGVFbGVtZW50c1NlcnZpY2U7XG4gICAgdGhpcy5jYXJkR3JvdXAgPSBjYXJkR3JvdXA7XG4gICAgdGhpcy5lbGVtZW50c1Byb3ZpZGVyID0gZWxlbWVudHNQcm92aWRlcjtcbiAgfVxuICBhc3luYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMub3B0aW9ucyB8fCBjaGFuZ2VzLmNvbnRhaW5lckNsYXNzKSB7XG4gICAgICB0aGlzLnNldHVwRWxlbWVudCgnb3B0aW9ucycpO1xuICAgIH1cbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5jYXJkR3JvdXApIHtcbiAgICAgIHRoaXMuZWxlbWVudHNTdWJzY3JpcHRpb24gPSB0aGlzLmNhcmRHcm91cC5lbGVtZW50cy5zdWJzY3JpYmUoZWxlbWVudHMgPT4ge1xuICAgICAgICB0aGlzLmVsZW1lbnRzID0gZWxlbWVudHM7XG4gICAgICAgIHRoaXMuc2V0dXBFbGVtZW50KCdlbGVtZW50cycpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRzUHJvdmlkZXIpIHtcbiAgICAgIHRoaXMuZWxlbWVudHNTdWJzY3JpcHRpb24gPSB0aGlzLmVsZW1lbnRzUHJvdmlkZXIuZWxlbWVudHMuc3Vic2NyaWJlKGVsZW1lbnRzID0+IHtcbiAgICAgICAgdGhpcy5lbGVtZW50cyA9IGVsZW1lbnRzO1xuICAgICAgICB0aGlzLnNldHVwRWxlbWVudCgnZWxlbWVudHMnKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1N0cmlwZUNhcmRDdmNDb21wb25lbnQgbXVzdCBoYXZlIFN0cmlwZUNhcmRHcm91cERpcmVjdGl2ZSBvciBTdHJpcGVFbGVtZW50c0RpcmVjdGl2ZSBwYXJlbnQnKTtcbiAgICB9XG4gIH1cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgdGhpcy5lbGVtZW50LmRlc3Ryb3koKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZWxlbWVudHNTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuZWxlbWVudHNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbiAgdXBkYXRlKG9wdGlvbnMpIHtcbiAgICB0aGlzLmVsZW1lbnQudXBkYXRlKG9wdGlvbnMpO1xuICB9XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZFxuICAgKi9cbiAgZ2V0Q2FyZEN2YygpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICB9XG4gIHNldHVwRWxlbWVudChzb3VyY2UpIHtcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5zdHJpcGVFbGVtZW50c1NlcnZpY2UubWVyZ2VPcHRpb25zKHRoaXMub3B0aW9ucywgdGhpcy5jb250YWluZXJDbGFzcyk7XG4gICAgaWYgKHRoaXMuZWxlbWVudCAmJiBzb3VyY2UgPT09ICdvcHRpb25zJykge1xuICAgICAgdGhpcy51cGRhdGUob3B0aW9ucyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRzICYmIHNvdXJjZSA9PT0gJ2VsZW1lbnRzJykge1xuICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5lbGVtZW50cy5jcmVhdGUoJ2NhcmRDdmMnLCBvcHRpb25zKTtcbiAgICAgIHRoaXMuZWxlbWVudC5vbignY2hhbmdlJywgZXYgPT4ge1xuICAgICAgICB0aGlzLmNoYW5nZS5lbWl0KGV2KTtcbiAgICAgICAgdGhpcy5jYXJkR3JvdXA/LmNoYW5nZS5lbWl0KGV2KTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5lbGVtZW50Lm9uKCdibHVyJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmJsdXIuZW1pdCgpO1xuICAgICAgICB0aGlzLmNhcmRHcm91cD8uYmx1ci5lbWl0KCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZWxlbWVudC5vbignZm9jdXMnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuZm9jdXMuZW1pdCgpO1xuICAgICAgICB0aGlzLmNhcmRHcm91cD8uZm9jdXMuZW1pdCgpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmVsZW1lbnQub24oJ3JlYWR5JywgKCkgPT4ge1xuICAgICAgICB0aGlzLnJlYWR5LmVtaXQoKTtcbiAgICAgICAgdGhpcy5jYXJkR3JvdXA/LnJlYWR5LmVtaXQoKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5lbGVtZW50Lm9uKCdlc2NhcGUnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuZXNjYXBlLmVtaXQoKTtcbiAgICAgICAgdGhpcy5jYXJkR3JvdXA/LmVzY2FwZS5lbWl0KCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZWxlbWVudC5tb3VudCh0aGlzLnN0cmlwZUVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgICB0aGlzLmxvYWQuZW1pdCh0aGlzLmVsZW1lbnQpO1xuICAgICAgdGhpcy5jYXJkR3JvdXA/LmxvYWQuZW1pdCh0aGlzLmVsZW1lbnQpO1xuICAgIH1cbiAgfVxuICBzdGF0aWMgybVmYWMgPSBmdW5jdGlvbiBTdHJpcGVDYXJkQ3ZjQ29tcG9uZW50X0ZhY3RvcnkoX19uZ0ZhY3RvcnlUeXBlX18pIHtcbiAgICByZXR1cm4gbmV3IChfX25nRmFjdG9yeVR5cGVfXyB8fCBTdHJpcGVDYXJkQ3ZjQ29tcG9uZW50KShpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KFN0cmlwZUVsZW1lbnRzU2VydmljZSksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoU3RyaXBlQ2FyZEdyb3VwRGlyZWN0aXZlLCA4KSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChTdHJpcGVFbGVtZW50c0RpcmVjdGl2ZSwgOCkpO1xuICB9O1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBTdHJpcGVDYXJkQ3ZjQ29tcG9uZW50LFxuICAgIHNlbGVjdG9yczogW1tcIm5neC1zdHJpcGUtY2FyZC1jdmNcIl1dLFxuICAgIGNvbnRlbnRRdWVyaWVzOiBmdW5jdGlvbiBTdHJpcGVDYXJkQ3ZjQ29tcG9uZW50X0NvbnRlbnRRdWVyaWVzKHJmLCBjdHgsIGRpckluZGV4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybVjb250ZW50UXVlcnkoZGlySW5kZXgsIE5neFN0cmlwZUVsZW1lbnRMb2FkaW5nVGVtcGxhdGVEaXJlY3RpdmUsIDUsIFRlbXBsYXRlUmVmKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZiAmIDIpIHtcbiAgICAgICAgbGV0IF90O1xuICAgICAgICBpMC7Jtcm1cXVlcnlSZWZyZXNoKF90ID0gaTAuybXJtWxvYWRRdWVyeSgpKSAmJiAoY3R4LmxvYWRpbmdUZW1wbGF0ZSA9IF90LmZpcnN0KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHZpZXdRdWVyeTogZnVuY3Rpb24gU3RyaXBlQ2FyZEN2Y0NvbXBvbmVudF9RdWVyeShyZiwgY3R4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybV2aWV3UXVlcnkoX2MwLCA1KTtcbiAgICAgIH1cbiAgICAgIGlmIChyZiAmIDIpIHtcbiAgICAgICAgbGV0IF90O1xuICAgICAgICBpMC7Jtcm1cXVlcnlSZWZyZXNoKF90ID0gaTAuybXJtWxvYWRRdWVyeSgpKSAmJiAoY3R4LnN0cmlwZUVsZW1lbnRSZWYgPSBfdC5maXJzdCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBpbnB1dHM6IHtcbiAgICAgIGNvbnRhaW5lckNsYXNzOiBcImNvbnRhaW5lckNsYXNzXCIsXG4gICAgICBvcHRpb25zOiBcIm9wdGlvbnNcIlxuICAgIH0sXG4gICAgb3V0cHV0czoge1xuICAgICAgbG9hZDogXCJsb2FkXCIsXG4gICAgICBibHVyOiBcImJsdXJcIixcbiAgICAgIGNoYW5nZTogXCJjaGFuZ2VcIixcbiAgICAgIGZvY3VzOiBcImZvY3VzXCIsXG4gICAgICByZWFkeTogXCJyZWFkeVwiLFxuICAgICAgZXNjYXBlOiBcImVzY2FwZVwiXG4gICAgfSxcbiAgICBmZWF0dXJlczogW2kwLsm1ybVOZ09uQ2hhbmdlc0ZlYXR1cmVdLFxuICAgIGRlY2xzOiAzLFxuICAgIHZhcnM6IDEsXG4gICAgY29uc3RzOiBbW1wic3RyaXBlRWxlbWVudFJlZlwiLCBcIlwiXSwgWzEsIFwiZmllbGRcIl0sIFszLCBcIm5nVGVtcGxhdGVPdXRsZXRcIl1dLFxuICAgIHRlbXBsYXRlOiBmdW5jdGlvbiBTdHJpcGVDYXJkQ3ZjQ29tcG9uZW50X1RlbXBsYXRlKHJmLCBjdHgpIHtcbiAgICAgIGlmIChyZiAmIDEpIHtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCgwLCBcImRpdlwiLCAxLCAwKTtcbiAgICAgICAgaTAuybXJtXRlbXBsYXRlKDIsIFN0cmlwZUNhcmRDdmNDb21wb25lbnRfQ29uZGl0aW9uYWxfMl9UZW1wbGF0ZSwgMSwgMSwgXCJuZy1jb250YWluZXJcIiwgMik7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCk7XG4gICAgICB9XG4gICAgICBpZiAocmYgJiAyKSB7XG4gICAgICAgIGkwLsm1ybVhZHZhbmNlKDIpO1xuICAgICAgICBpMC7Jtcm1Y29uZGl0aW9uYWwoY3R4LmNhcmRHcm91cCAmJiBjdHguY2FyZEdyb3VwLnN0YXRlICE9PSBcInJlYWR5XCIgJiYgY3R4LmxvYWRpbmdUZW1wbGF0ZSA/IDIgOiAtMSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBkZXBlbmRlbmNpZXM6IFtDb21tb25Nb2R1bGUsIGkzLk5nVGVtcGxhdGVPdXRsZXRdLFxuICAgIGVuY2Fwc3VsYXRpb246IDJcbiAgfSk7XG59XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShTdHJpcGVDYXJkQ3ZjQ29tcG9uZW50LCBbe1xuICAgIHR5cGU6IENvbXBvbmVudCxcbiAgICBhcmdzOiBbe1xuICAgICAgc2VsZWN0b3I6ICduZ3gtc3RyaXBlLWNhcmQtY3ZjJyxcbiAgICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiICNzdHJpcGVFbGVtZW50UmVmPlxuICAgICAgQGlmIChjYXJkR3JvdXAgJiYgY2FyZEdyb3VwLnN0YXRlICE9PSAncmVhZHknICYmIGxvYWRpbmdUZW1wbGF0ZSkge1xuICAgICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImxvYWRpbmdUZW1wbGF0ZVwiIC8+XG4gICAgICB9XG4gICAgPC9kaXY+XG4gIGAsXG4gICAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXVxuICAgIH1dXG4gIH1dLCAoKSA9PiBbe1xuICAgIHR5cGU6IFN0cmlwZUVsZW1lbnRzU2VydmljZVxuICB9LCB7XG4gICAgdHlwZTogU3RyaXBlQ2FyZEdyb3VwRGlyZWN0aXZlLFxuICAgIGRlY29yYXRvcnM6IFt7XG4gICAgICB0eXBlOiBPcHRpb25hbFxuICAgIH1dXG4gIH0sIHtcbiAgICB0eXBlOiBTdHJpcGVFbGVtZW50c0RpcmVjdGl2ZSxcbiAgICBkZWNvcmF0b3JzOiBbe1xuICAgICAgdHlwZTogT3B0aW9uYWxcbiAgICB9XVxuICB9XSwge1xuICAgIGxvYWRpbmdUZW1wbGF0ZTogW3tcbiAgICAgIHR5cGU6IENvbnRlbnRDaGlsZCxcbiAgICAgIGFyZ3M6IFtOZ3hTdHJpcGVFbGVtZW50TG9hZGluZ1RlbXBsYXRlRGlyZWN0aXZlLCB7XG4gICAgICAgIHJlYWQ6IFRlbXBsYXRlUmVmXG4gICAgICB9XVxuICAgIH1dLFxuICAgIHN0cmlwZUVsZW1lbnRSZWY6IFt7XG4gICAgICB0eXBlOiBWaWV3Q2hpbGQsXG4gICAgICBhcmdzOiBbJ3N0cmlwZUVsZW1lbnRSZWYnXVxuICAgIH1dLFxuICAgIGNvbnRhaW5lckNsYXNzOiBbe1xuICAgICAgdHlwZTogSW5wdXRcbiAgICB9XSxcbiAgICBvcHRpb25zOiBbe1xuICAgICAgdHlwZTogSW5wdXRcbiAgICB9XSxcbiAgICBsb2FkOiBbe1xuICAgICAgdHlwZTogT3V0cHV0XG4gICAgfV0sXG4gICAgYmx1cjogW3tcbiAgICAgIHR5cGU6IE91dHB1dFxuICAgIH1dLFxuICAgIGNoYW5nZTogW3tcbiAgICAgIHR5cGU6IE91dHB1dFxuICAgIH1dLFxuICAgIGZvY3VzOiBbe1xuICAgICAgdHlwZTogT3V0cHV0XG4gICAgfV0sXG4gICAgcmVhZHk6IFt7XG4gICAgICB0eXBlOiBPdXRwdXRcbiAgICB9XSxcbiAgICBlc2NhcGU6IFt7XG4gICAgICB0eXBlOiBPdXRwdXRcbiAgICB9XVxuICB9KTtcbn0pKCk7XG5jbGFzcyBTdHJpcGVFcHNCYW5rQ29tcG9uZW50IHtcbiAgc3RyaXBlRWxlbWVudHNTZXJ2aWNlO1xuICBlbGVtZW50c1Byb3ZpZGVyO1xuICBsb2FkaW5nVGVtcGxhdGU7XG4gIHN0cmlwZUVsZW1lbnRSZWY7XG4gIGVsZW1lbnQ7XG4gIGNvbnRhaW5lckNsYXNzO1xuICBvcHRpb25zO1xuICBlbGVtZW50c09wdGlvbnM7XG4gIHN0cmlwZTtcbiAgbG9hZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgYmx1ciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBmb2N1cyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcmVhZHkgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGVzY2FwZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgZWxlbWVudHM7XG4gIHN0YXRlID0gJ25vdHJlYWR5JztcbiAgZWxlbWVudHNTdWJzY3JpcHRpb247XG4gIGNvbnN0cnVjdG9yKHN0cmlwZUVsZW1lbnRzU2VydmljZSwgZWxlbWVudHNQcm92aWRlcikge1xuICAgIHRoaXMuc3RyaXBlRWxlbWVudHNTZXJ2aWNlID0gc3RyaXBlRWxlbWVudHNTZXJ2aWNlO1xuICAgIHRoaXMuZWxlbWVudHNQcm92aWRlciA9IGVsZW1lbnRzUHJvdmlkZXI7XG4gIH1cbiAgYXN5bmMgbmdPbkNoYW5nZXMoY2hhbmdlcykge1xuICAgIHRoaXMuc3RhdGUgPSAnc3RhcnRpbmcnO1xuICAgIGxldCB1cGRhdGVFbGVtZW50cyA9IGZhbHNlO1xuICAgIGlmICghdGhpcy5lbGVtZW50c1Byb3ZpZGVyICYmIChjaGFuZ2VzLmVsZW1lbnRzT3B0aW9ucyB8fCBjaGFuZ2VzLnN0cmlwZSB8fCAhdGhpcy5lbGVtZW50cykpIHtcbiAgICAgIHRoaXMuZWxlbWVudHMgPSBhd2FpdCB0aGlzLnN0cmlwZUVsZW1lbnRzU2VydmljZS5lbGVtZW50cyh0aGlzLnN0cmlwZSwgdGhpcy5lbGVtZW50c09wdGlvbnMpLnRvUHJvbWlzZSgpO1xuICAgICAgdXBkYXRlRWxlbWVudHMgPSB0cnVlO1xuICAgIH1cbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5zdHJpcGVFbGVtZW50c1NlcnZpY2UubWVyZ2VPcHRpb25zKHRoaXMub3B0aW9ucywgdGhpcy5jb250YWluZXJDbGFzcyk7XG4gICAgaWYgKGNoYW5nZXMub3B0aW9ucyB8fCBjaGFuZ2VzLmNvbnRhaW5lckNsYXNzIHx8ICF0aGlzLmVsZW1lbnQgfHwgdXBkYXRlRWxlbWVudHMpIHtcbiAgICAgIGlmICh0aGlzLmVsZW1lbnQgJiYgIXVwZGF0ZUVsZW1lbnRzKSB7XG4gICAgICAgIHRoaXMudXBkYXRlKG9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRzICYmIHVwZGF0ZUVsZW1lbnRzKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlRWxlbWVudChvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zdGF0ZSA9ICdyZWFkeSc7XG4gIH1cbiAgYXN5bmMgbmdPbkluaXQoKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuc3RyaXBlRWxlbWVudHNTZXJ2aWNlLm1lcmdlT3B0aW9ucyh0aGlzLm9wdGlvbnMsIHRoaXMuY29udGFpbmVyQ2xhc3MpO1xuICAgIGlmICh0aGlzLmVsZW1lbnRzUHJvdmlkZXIpIHtcbiAgICAgIHRoaXMuZWxlbWVudHNTdWJzY3JpcHRpb24gPSB0aGlzLmVsZW1lbnRzUHJvdmlkZXIuZWxlbWVudHMuc3Vic2NyaWJlKGVsZW1lbnRzID0+IHtcbiAgICAgICAgdGhpcy5lbGVtZW50cyA9IGVsZW1lbnRzO1xuICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAncmVhZHknO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09PSAnbm90cmVhZHknKSB7XG4gICAgICB0aGlzLnN0YXRlID0gJ3N0YXJ0aW5nJztcbiAgICAgIHRoaXMuZWxlbWVudHMgPSBhd2FpdCB0aGlzLnN0cmlwZUVsZW1lbnRzU2VydmljZS5lbGVtZW50cyh0aGlzLnN0cmlwZSkudG9Qcm9taXNlKCk7XG4gICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgICB0aGlzLnN0YXRlID0gJ3JlYWR5JztcbiAgICB9XG4gIH1cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgdGhpcy5lbGVtZW50LmRlc3Ryb3koKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZWxlbWVudHNTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuZWxlbWVudHNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbiAgdXBkYXRlKG9wdGlvbnMpIHtcbiAgICB0aGlzLmVsZW1lbnQudXBkYXRlKG9wdGlvbnMpO1xuICB9XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZFxuICAgKi9cbiAgZ2V0RXBzQmFua2VsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgfVxuICBjcmVhdGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnQudW5tb3VudCgpO1xuICAgIH1cbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmVsZW1lbnRzLmNyZWF0ZSgnZXBzQmFuaycsIG9wdGlvbnMpO1xuICAgIHRoaXMuZWxlbWVudC5vbignY2hhbmdlJywgZXYgPT4gdGhpcy5jaGFuZ2UuZW1pdChldikpO1xuICAgIHRoaXMuZWxlbWVudC5vbignYmx1cicsICgpID0+IHRoaXMuYmx1ci5lbWl0KCkpO1xuICAgIHRoaXMuZWxlbWVudC5vbignZm9jdXMnLCAoKSA9PiB0aGlzLmZvY3VzLmVtaXQoKSk7XG4gICAgdGhpcy5lbGVtZW50Lm9uKCdyZWFkeScsICgpID0+IHRoaXMucmVhZHkuZW1pdCgpKTtcbiAgICB0aGlzLmVsZW1lbnQub24oJ2VzY2FwZScsICgpID0+IHRoaXMuZXNjYXBlLmVtaXQoKSk7XG4gICAgdGhpcy5lbGVtZW50Lm1vdW50KHRoaXMuc3RyaXBlRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLmxvYWQuZW1pdCh0aGlzLmVsZW1lbnQpO1xuICB9XG4gIHN0YXRpYyDJtWZhYyA9IGZ1bmN0aW9uIFN0cmlwZUVwc0JhbmtDb21wb25lbnRfRmFjdG9yeShfX25nRmFjdG9yeVR5cGVfXykge1xuICAgIHJldHVybiBuZXcgKF9fbmdGYWN0b3J5VHlwZV9fIHx8IFN0cmlwZUVwc0JhbmtDb21wb25lbnQpKGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoU3RyaXBlRWxlbWVudHNTZXJ2aWNlKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChTdHJpcGVFbGVtZW50c0RpcmVjdGl2ZSwgOCkpO1xuICB9O1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBTdHJpcGVFcHNCYW5rQ29tcG9uZW50LFxuICAgIHNlbGVjdG9yczogW1tcIm5neC1zdHJpcGUtZXBzLWJhbmtcIl1dLFxuICAgIGNvbnRlbnRRdWVyaWVzOiBmdW5jdGlvbiBTdHJpcGVFcHNCYW5rQ29tcG9uZW50X0NvbnRlbnRRdWVyaWVzKHJmLCBjdHgsIGRpckluZGV4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybVjb250ZW50UXVlcnkoZGlySW5kZXgsIE5neFN0cmlwZUVsZW1lbnRMb2FkaW5nVGVtcGxhdGVEaXJlY3RpdmUsIDUsIFRlbXBsYXRlUmVmKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZiAmIDIpIHtcbiAgICAgICAgbGV0IF90O1xuICAgICAgICBpMC7Jtcm1cXVlcnlSZWZyZXNoKF90ID0gaTAuybXJtWxvYWRRdWVyeSgpKSAmJiAoY3R4LmxvYWRpbmdUZW1wbGF0ZSA9IF90LmZpcnN0KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHZpZXdRdWVyeTogZnVuY3Rpb24gU3RyaXBlRXBzQmFua0NvbXBvbmVudF9RdWVyeShyZiwgY3R4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybV2aWV3UXVlcnkoX2MwLCA1KTtcbiAgICAgIH1cbiAgICAgIGlmIChyZiAmIDIpIHtcbiAgICAgICAgbGV0IF90O1xuICAgICAgICBpMC7Jtcm1cXVlcnlSZWZyZXNoKF90ID0gaTAuybXJtWxvYWRRdWVyeSgpKSAmJiAoY3R4LnN0cmlwZUVsZW1lbnRSZWYgPSBfdC5maXJzdCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBpbnB1dHM6IHtcbiAgICAgIGNvbnRhaW5lckNsYXNzOiBcImNvbnRhaW5lckNsYXNzXCIsXG4gICAgICBvcHRpb25zOiBcIm9wdGlvbnNcIixcbiAgICAgIGVsZW1lbnRzT3B0aW9uczogXCJlbGVtZW50c09wdGlvbnNcIixcbiAgICAgIHN0cmlwZTogXCJzdHJpcGVcIlxuICAgIH0sXG4gICAgb3V0cHV0czoge1xuICAgICAgbG9hZDogXCJsb2FkXCIsXG4gICAgICBibHVyOiBcImJsdXJcIixcbiAgICAgIGNoYW5nZTogXCJjaGFuZ2VcIixcbiAgICAgIGZvY3VzOiBcImZvY3VzXCIsXG4gICAgICByZWFkeTogXCJyZWFkeVwiLFxuICAgICAgZXNjYXBlOiBcImVzY2FwZVwiXG4gICAgfSxcbiAgICBmZWF0dXJlczogW2kwLsm1ybVOZ09uQ2hhbmdlc0ZlYXR1cmVdLFxuICAgIGRlY2xzOiAzLFxuICAgIHZhcnM6IDEsXG4gICAgY29uc3RzOiBbW1wic3RyaXBlRWxlbWVudFJlZlwiLCBcIlwiXSwgWzEsIFwiZmllbGRcIl0sIFszLCBcIm5nVGVtcGxhdGVPdXRsZXRcIl1dLFxuICAgIHRlbXBsYXRlOiBmdW5jdGlvbiBTdHJpcGVFcHNCYW5rQ29tcG9uZW50X1RlbXBsYXRlKHJmLCBjdHgpIHtcbiAgICAgIGlmIChyZiAmIDEpIHtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCgwLCBcImRpdlwiLCAxLCAwKTtcbiAgICAgICAgaTAuybXJtXRlbXBsYXRlKDIsIFN0cmlwZUVwc0JhbmtDb21wb25lbnRfQ29uZGl0aW9uYWxfMl9UZW1wbGF0ZSwgMSwgMSwgXCJuZy1jb250YWluZXJcIiwgMik7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCk7XG4gICAgICB9XG4gICAgICBpZiAocmYgJiAyKSB7XG4gICAgICAgIGkwLsm1ybVhZHZhbmNlKDIpO1xuICAgICAgICBpMC7Jtcm1Y29uZGl0aW9uYWwoY3R4LnN0YXRlICE9PSBcInJlYWR5XCIgJiYgY3R4LmxvYWRpbmdUZW1wbGF0ZSA/IDIgOiAtMSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBkZXBlbmRlbmNpZXM6IFtDb21tb25Nb2R1bGUsIGkzLk5nVGVtcGxhdGVPdXRsZXRdLFxuICAgIGVuY2Fwc3VsYXRpb246IDJcbiAgfSk7XG59XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShTdHJpcGVFcHNCYW5rQ29tcG9uZW50LCBbe1xuICAgIHR5cGU6IENvbXBvbmVudCxcbiAgICBhcmdzOiBbe1xuICAgICAgc2VsZWN0b3I6ICduZ3gtc3RyaXBlLWVwcy1iYW5rJyxcbiAgICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiICNzdHJpcGVFbGVtZW50UmVmPlxuICAgICAgQGlmIChzdGF0ZSAhPT0gJ3JlYWR5JyAmJiBsb2FkaW5nVGVtcGxhdGUpIHtcbiAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJsb2FkaW5nVGVtcGxhdGVcIiAvPlxuICAgICAgfVxuICAgIDwvZGl2PlxuICBgLFxuICAgICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV1cbiAgICB9XVxuICB9XSwgKCkgPT4gW3tcbiAgICB0eXBlOiBTdHJpcGVFbGVtZW50c1NlcnZpY2VcbiAgfSwge1xuICAgIHR5cGU6IFN0cmlwZUVsZW1lbnRzRGlyZWN0aXZlLFxuICAgIGRlY29yYXRvcnM6IFt7XG4gICAgICB0eXBlOiBPcHRpb25hbFxuICAgIH1dXG4gIH1dLCB7XG4gICAgbG9hZGluZ1RlbXBsYXRlOiBbe1xuICAgICAgdHlwZTogQ29udGVudENoaWxkLFxuICAgICAgYXJnczogW05neFN0cmlwZUVsZW1lbnRMb2FkaW5nVGVtcGxhdGVEaXJlY3RpdmUsIHtcbiAgICAgICAgcmVhZDogVGVtcGxhdGVSZWZcbiAgICAgIH1dXG4gICAgfV0sXG4gICAgc3RyaXBlRWxlbWVudFJlZjogW3tcbiAgICAgIHR5cGU6IFZpZXdDaGlsZCxcbiAgICAgIGFyZ3M6IFsnc3RyaXBlRWxlbWVudFJlZiddXG4gICAgfV0sXG4gICAgY29udGFpbmVyQ2xhc3M6IFt7XG4gICAgICB0eXBlOiBJbnB1dFxuICAgIH1dLFxuICAgIG9wdGlvbnM6IFt7XG4gICAgICB0eXBlOiBJbnB1dFxuICAgIH1dLFxuICAgIGVsZW1lbnRzT3B0aW9uczogW3tcbiAgICAgIHR5cGU6IElucHV0XG4gICAgfV0sXG4gICAgc3RyaXBlOiBbe1xuICAgICAgdHlwZTogSW5wdXRcbiAgICB9XSxcbiAgICBsb2FkOiBbe1xuICAgICAgdHlwZTogT3V0cHV0XG4gICAgfV0sXG4gICAgYmx1cjogW3tcbiAgICAgIHR5cGU6IE91dHB1dFxuICAgIH1dLFxuICAgIGNoYW5nZTogW3tcbiAgICAgIHR5cGU6IE91dHB1dFxuICAgIH1dLFxuICAgIGZvY3VzOiBbe1xuICAgICAgdHlwZTogT3V0cHV0XG4gICAgfV0sXG4gICAgcmVhZHk6IFt7XG4gICAgICB0eXBlOiBPdXRwdXRcbiAgICB9XSxcbiAgICBlc2NhcGU6IFt7XG4gICAgICB0eXBlOiBPdXRwdXRcbiAgICB9XVxuICB9KTtcbn0pKCk7XG5jbGFzcyBTdHJpcGVFeHByZXNzQ2hlY2tvdXRDb21wb25lbnQge1xuICBzdHJpcGVFbGVtZW50c1NlcnZpY2U7XG4gIGVsZW1lbnRzUHJvdmlkZXI7XG4gIGxvYWRpbmdUZW1wbGF0ZTtcbiAgc3RyaXBlRWxlbWVudFJlZjtcbiAgZWxlbWVudDtcbiAgY29udGFpbmVyQ2xhc3M7XG4gIG9wdGlvbnM7XG4gIGVsZW1lbnRzT3B0aW9ucztcbiAgc3RyaXBlO1xuICBsb2FkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBibHVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBjYW5jZWwgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGNsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGNvbmZpcm0gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGZvY3VzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICByZWFkeSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgZXNjYXBlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBsb2FkZXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHNoaXBwaW5nYWRkcmVzc2NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgc2hpcHBpbmdyYXRlY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBlbGVtZW50cztcbiAgc3RhdGUgPSAnbm90cmVhZHknO1xuICBlbGVtZW50c1N1YnNjcmlwdGlvbjtcbiAgY29uc3RydWN0b3Ioc3RyaXBlRWxlbWVudHNTZXJ2aWNlLCBlbGVtZW50c1Byb3ZpZGVyKSB7XG4gICAgdGhpcy5zdHJpcGVFbGVtZW50c1NlcnZpY2UgPSBzdHJpcGVFbGVtZW50c1NlcnZpY2U7XG4gICAgdGhpcy5lbGVtZW50c1Byb3ZpZGVyID0gZWxlbWVudHNQcm92aWRlcjtcbiAgfVxuICBhc3luYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XG4gICAgdGhpcy5zdGF0ZSA9ICdzdGFydGluZyc7XG4gICAgbGV0IHVwZGF0ZUVsZW1lbnRzID0gZmFsc2U7XG4gICAgaWYgKCF0aGlzLmVsZW1lbnRzUHJvdmlkZXIgJiYgKGNoYW5nZXMuZWxlbWVudHNPcHRpb25zIHx8IGNoYW5nZXMuc3RyaXBlIHx8ICF0aGlzLmVsZW1lbnRzKSkge1xuICAgICAgdGhpcy5lbGVtZW50cyA9IGF3YWl0IHRoaXMuc3RyaXBlRWxlbWVudHNTZXJ2aWNlLmVsZW1lbnRzKHRoaXMuc3RyaXBlLCB0aGlzLmVsZW1lbnRzT3B0aW9ucykudG9Qcm9taXNlKCk7XG4gICAgICB1cGRhdGVFbGVtZW50cyA9IHRydWU7XG4gICAgfVxuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLnN0cmlwZUVsZW1lbnRzU2VydmljZS5tZXJnZU9wdGlvbnModGhpcy5vcHRpb25zLCB0aGlzLmNvbnRhaW5lckNsYXNzKTtcbiAgICBpZiAoY2hhbmdlcy5vcHRpb25zIHx8IGNoYW5nZXMuY29udGFpbmVyQ2xhc3MgfHwgIXRoaXMuZWxlbWVudCB8fCB1cGRhdGVFbGVtZW50cykge1xuICAgICAgaWYgKHRoaXMuZWxlbWVudHMgJiYgdXBkYXRlRWxlbWVudHMpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnN0YXRlID0gJ3JlYWR5JztcbiAgfVxuICBhc3luYyBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5zdHJpcGVFbGVtZW50c1NlcnZpY2UubWVyZ2VPcHRpb25zKHRoaXMub3B0aW9ucywgdGhpcy5jb250YWluZXJDbGFzcyk7XG4gICAgaWYgKHRoaXMuZWxlbWVudHNQcm92aWRlcikge1xuICAgICAgdGhpcy5lbGVtZW50c1N1YnNjcmlwdGlvbiA9IHRoaXMuZWxlbWVudHNQcm92aWRlci5lbGVtZW50cy5zdWJzY3JpYmUoZWxlbWVudHMgPT4ge1xuICAgICAgICB0aGlzLmVsZW1lbnRzID0gZWxlbWVudHM7XG4gICAgICAgIHRoaXMuY3JlYXRlRWxlbWVudChvcHRpb25zKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICdyZWFkeSc7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09ICdub3RyZWFkeScpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSAnc3RhcnRpbmcnO1xuICAgICAgdGhpcy5lbGVtZW50cyA9IGF3YWl0IHRoaXMuc3RyaXBlRWxlbWVudHNTZXJ2aWNlLmVsZW1lbnRzKHRoaXMuc3RyaXBlKS50b1Byb21pc2UoKTtcbiAgICAgIHRoaXMuY3JlYXRlRWxlbWVudChvcHRpb25zKTtcbiAgICAgIHRoaXMuc3RhdGUgPSAncmVhZHknO1xuICAgIH1cbiAgfVxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnQuZGVzdHJveSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5lbGVtZW50c1N1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5lbGVtZW50c1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuICB1cGRhdGUob3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQudXBkYXRlKG9wdGlvbnMpO1xuICB9XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZFxuICAgKi9cbiAgZ2V0TGlua0F1dGhlbnRpY2F0aW9uRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICB9XG4gIGNyZWF0ZUVsZW1lbnQob3B0aW9ucykge1xuICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZWxlbWVudC51bm1vdW50KCk7XG4gICAgfVxuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuZWxlbWVudHMuY3JlYXRlKCdleHByZXNzQ2hlY2tvdXQnLCBvcHRpb25zKTtcbiAgICB0aGlzLmVsZW1lbnQub24oJ2JsdXInLCAoKSA9PiB0aGlzLmJsdXIuZW1pdCgpKTtcbiAgICB0aGlzLmVsZW1lbnQub24oJ2NhbmNlbCcsICgpID0+IHRoaXMuY2FuY2VsLmVtaXQoKSk7XG4gICAgdGhpcy5lbGVtZW50Lm9uKCdjbGljaycsIGV2ID0+IHRoaXMuY2xpY2tlZC5lbWl0KGV2KSk7XG4gICAgdGhpcy5lbGVtZW50Lm9uKCdjb25maXJtJywgZXYgPT4gdGhpcy5jb25maXJtLmVtaXQoZXYpKTtcbiAgICB0aGlzLmVsZW1lbnQub24oJ2ZvY3VzJywgKCkgPT4gdGhpcy5mb2N1cy5lbWl0KCkpO1xuICAgIHRoaXMuZWxlbWVudC5vbigncmVhZHknLCBldiA9PiB0aGlzLnJlYWR5LmVtaXQoZXYpKTtcbiAgICB0aGlzLmVsZW1lbnQub24oJ2VzY2FwZScsICgpID0+IHRoaXMuZXNjYXBlLmVtaXQoKSk7XG4gICAgdGhpcy5lbGVtZW50Lm9uKCdsb2FkZXJyb3InLCBlcnIgPT4gdGhpcy5sb2FkZXJyb3IuZW1pdChlcnIpKTtcbiAgICB0aGlzLmVsZW1lbnQub24oJ3NoaXBwaW5nYWRkcmVzc2NoYW5nZScsIGV2ID0+IHRoaXMuc2hpcHBpbmdhZGRyZXNzY2hhbmdlLmVtaXQoZXYpKTtcbiAgICB0aGlzLmVsZW1lbnQub24oJ3NoaXBwaW5ncmF0ZWNoYW5nZScsIGV2ID0+IHRoaXMuc2hpcHBpbmdyYXRlY2hhbmdlLmVtaXQoZXYpKTtcbiAgICB0aGlzLmVsZW1lbnQubW91bnQodGhpcy5zdHJpcGVFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIHRoaXMubG9hZC5lbWl0KHRoaXMuZWxlbWVudCk7XG4gIH1cbiAgc3RhdGljIMm1ZmFjID0gZnVuY3Rpb24gU3RyaXBlRXhwcmVzc0NoZWNrb3V0Q29tcG9uZW50X0ZhY3RvcnkoX19uZ0ZhY3RvcnlUeXBlX18pIHtcbiAgICByZXR1cm4gbmV3IChfX25nRmFjdG9yeVR5cGVfXyB8fCBTdHJpcGVFeHByZXNzQ2hlY2tvdXRDb21wb25lbnQpKGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoU3RyaXBlRWxlbWVudHNTZXJ2aWNlKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChTdHJpcGVFbGVtZW50c0RpcmVjdGl2ZSwgOCkpO1xuICB9O1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBTdHJpcGVFeHByZXNzQ2hlY2tvdXRDb21wb25lbnQsXG4gICAgc2VsZWN0b3JzOiBbW1wibmd4LXN0cmlwZS1leHByZXNzLWNoZWNrb3V0XCJdXSxcbiAgICBjb250ZW50UXVlcmllczogZnVuY3Rpb24gU3RyaXBlRXhwcmVzc0NoZWNrb3V0Q29tcG9uZW50X0NvbnRlbnRRdWVyaWVzKHJmLCBjdHgsIGRpckluZGV4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybVjb250ZW50UXVlcnkoZGlySW5kZXgsIE5neFN0cmlwZUVsZW1lbnRMb2FkaW5nVGVtcGxhdGVEaXJlY3RpdmUsIDUsIFRlbXBsYXRlUmVmKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZiAmIDIpIHtcbiAgICAgICAgbGV0IF90O1xuICAgICAgICBpMC7Jtcm1cXVlcnlSZWZyZXNoKF90ID0gaTAuybXJtWxvYWRRdWVyeSgpKSAmJiAoY3R4LmxvYWRpbmdUZW1wbGF0ZSA9IF90LmZpcnN0KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHZpZXdRdWVyeTogZnVuY3Rpb24gU3RyaXBlRXhwcmVzc0NoZWNrb3V0Q29tcG9uZW50X1F1ZXJ5KHJmLCBjdHgpIHtcbiAgICAgIGlmIChyZiAmIDEpIHtcbiAgICAgICAgaTAuybXJtXZpZXdRdWVyeShfYzAsIDUpO1xuICAgICAgfVxuICAgICAgaWYgKHJmICYgMikge1xuICAgICAgICBsZXQgX3Q7XG4gICAgICAgIGkwLsm1ybVxdWVyeVJlZnJlc2goX3QgPSBpMC7Jtcm1bG9hZFF1ZXJ5KCkpICYmIChjdHguc3RyaXBlRWxlbWVudFJlZiA9IF90LmZpcnN0KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGlucHV0czoge1xuICAgICAgY29udGFpbmVyQ2xhc3M6IFwiY29udGFpbmVyQ2xhc3NcIixcbiAgICAgIG9wdGlvbnM6IFwib3B0aW9uc1wiLFxuICAgICAgZWxlbWVudHNPcHRpb25zOiBcImVsZW1lbnRzT3B0aW9uc1wiLFxuICAgICAgc3RyaXBlOiBcInN0cmlwZVwiXG4gICAgfSxcbiAgICBvdXRwdXRzOiB7XG4gICAgICBsb2FkOiBcImxvYWRcIixcbiAgICAgIGJsdXI6IFwiYmx1clwiLFxuICAgICAgY2FuY2VsOiBcImNhbmNlbFwiLFxuICAgICAgY2xpY2tlZDogXCJjbGlja2VkXCIsXG4gICAgICBjb25maXJtOiBcImNvbmZpcm1cIixcbiAgICAgIGZvY3VzOiBcImZvY3VzXCIsXG4gICAgICByZWFkeTogXCJyZWFkeVwiLFxuICAgICAgZXNjYXBlOiBcImVzY2FwZVwiLFxuICAgICAgbG9hZGVycm9yOiBcImxvYWRlcnJvclwiLFxuICAgICAgc2hpcHBpbmdhZGRyZXNzY2hhbmdlOiBcInNoaXBwaW5nYWRkcmVzc2NoYW5nZVwiLFxuICAgICAgc2hpcHBpbmdyYXRlY2hhbmdlOiBcInNoaXBwaW5ncmF0ZWNoYW5nZVwiXG4gICAgfSxcbiAgICBmZWF0dXJlczogW2kwLsm1ybVOZ09uQ2hhbmdlc0ZlYXR1cmVdLFxuICAgIGRlY2xzOiAzLFxuICAgIHZhcnM6IDEsXG4gICAgY29uc3RzOiBbW1wic3RyaXBlRWxlbWVudFJlZlwiLCBcIlwiXSwgWzEsIFwiZmllbGRcIl0sIFszLCBcIm5nVGVtcGxhdGVPdXRsZXRcIl1dLFxuICAgIHRlbXBsYXRlOiBmdW5jdGlvbiBTdHJpcGVFeHByZXNzQ2hlY2tvdXRDb21wb25lbnRfVGVtcGxhdGUocmYsIGN0eCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDAsIFwiZGl2XCIsIDEsIDApO1xuICAgICAgICBpMC7Jtcm1dGVtcGxhdGUoMiwgU3RyaXBlRXhwcmVzc0NoZWNrb3V0Q29tcG9uZW50X0NvbmRpdGlvbmFsXzJfVGVtcGxhdGUsIDEsIDEsIFwibmctY29udGFpbmVyXCIsIDIpO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xuICAgICAgfVxuICAgICAgaWYgKHJmICYgMikge1xuICAgICAgICBpMC7Jtcm1YWR2YW5jZSgyKTtcbiAgICAgICAgaTAuybXJtWNvbmRpdGlvbmFsKGN0eC5zdGF0ZSAhPT0gXCJyZWFkeVwiICYmIGN0eC5sb2FkaW5nVGVtcGxhdGUgPyAyIDogLTEpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZGVwZW5kZW5jaWVzOiBbQ29tbW9uTW9kdWxlLCBpMy5OZ1RlbXBsYXRlT3V0bGV0XSxcbiAgICBlbmNhcHN1bGF0aW9uOiAyXG4gIH0pO1xufVxuKCgpID0+IHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoU3RyaXBlRXhwcmVzc0NoZWNrb3V0Q29tcG9uZW50LCBbe1xuICAgIHR5cGU6IENvbXBvbmVudCxcbiAgICBhcmdzOiBbe1xuICAgICAgc2VsZWN0b3I6ICduZ3gtc3RyaXBlLWV4cHJlc3MtY2hlY2tvdXQnLFxuICAgICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICAgIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImZpZWxkXCIgI3N0cmlwZUVsZW1lbnRSZWY+XG4gICAgICBAaWYgKHN0YXRlICE9PSAncmVhZHknICYmIGxvYWRpbmdUZW1wbGF0ZSkge1xuICAgICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImxvYWRpbmdUZW1wbGF0ZVwiIC8+XG4gICAgICB9XG4gICAgPC9kaXY+XG4gIGAsXG4gICAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXVxuICAgIH1dXG4gIH1dLCAoKSA9PiBbe1xuICAgIHR5cGU6IFN0cmlwZUVsZW1lbnRzU2VydmljZVxuICB9LCB7XG4gICAgdHlwZTogU3RyaXBlRWxlbWVudHNEaXJlY3RpdmUsXG4gICAgZGVjb3JhdG9yczogW3tcbiAgICAgIHR5cGU6IE9wdGlvbmFsXG4gICAgfV1cbiAgfV0sIHtcbiAgICBsb2FkaW5nVGVtcGxhdGU6IFt7XG4gICAgICB0eXBlOiBDb250ZW50Q2hpbGQsXG4gICAgICBhcmdzOiBbTmd4U3RyaXBlRWxlbWVudExvYWRpbmdUZW1wbGF0ZURpcmVjdGl2ZSwge1xuICAgICAgICByZWFkOiBUZW1wbGF0ZVJlZlxuICAgICAgfV1cbiAgICB9XSxcbiAgICBzdHJpcGVFbGVtZW50UmVmOiBbe1xuICAgICAgdHlwZTogVmlld0NoaWxkLFxuICAgICAgYXJnczogWydzdHJpcGVFbGVtZW50UmVmJ11cbiAgICB9XSxcbiAgICBjb250YWluZXJDbGFzczogW3tcbiAgICAgIHR5cGU6IElucHV0XG4gICAgfV0sXG4gICAgb3B0aW9uczogW3tcbiAgICAgIHR5cGU6IElucHV0XG4gICAgfV0sXG4gICAgZWxlbWVudHNPcHRpb25zOiBbe1xuICAgICAgdHlwZTogSW5wdXRcbiAgICB9XSxcbiAgICBzdHJpcGU6IFt7XG4gICAgICB0eXBlOiBJbnB1dFxuICAgIH1dLFxuICAgIGxvYWQ6IFt7XG4gICAgICB0eXBlOiBPdXRwdXRcbiAgICB9XSxcbiAgICBibHVyOiBbe1xuICAgICAgdHlwZTogT3V0cHV0XG4gICAgfV0sXG4gICAgY2FuY2VsOiBbe1xuICAgICAgdHlwZTogT3V0cHV0XG4gICAgfV0sXG4gICAgY2xpY2tlZDogW3tcbiAgICAgIHR5cGU6IE91dHB1dFxuICAgIH1dLFxuICAgIGNvbmZpcm06IFt7XG4gICAgICB0eXBlOiBPdXRwdXRcbiAgICB9XSxcbiAgICBmb2N1czogW3tcbiAgICAgIHR5cGU6IE91dHB1dFxuICAgIH1dLFxuICAgIHJlYWR5OiBbe1xuICAgICAgdHlwZTogT3V0cHV0XG4gICAgfV0sXG4gICAgZXNjYXBlOiBbe1xuICAgICAgdHlwZTogT3V0cHV0XG4gICAgfV0sXG4gICAgbG9hZGVycm9yOiBbe1xuICAgICAgdHlwZTogT3V0cHV0XG4gICAgfV0sXG4gICAgc2hpcHBpbmdhZGRyZXNzY2hhbmdlOiBbe1xuICAgICAgdHlwZTogT3V0cHV0XG4gICAgfV0sXG4gICAgc2hpcHBpbmdyYXRlY2hhbmdlOiBbe1xuICAgICAgdHlwZTogT3V0cHV0XG4gICAgfV1cbiAgfSk7XG59KSgpO1xuY2xhc3MgU3RyaXBlRnB4QmFua0NvbXBvbmVudCB7XG4gIHN0cmlwZUVsZW1lbnRzU2VydmljZTtcbiAgZWxlbWVudHNQcm92aWRlcjtcbiAgbG9hZGluZ1RlbXBsYXRlO1xuICBzdHJpcGVFbGVtZW50UmVmO1xuICBlbGVtZW50O1xuICBjb250YWluZXJDbGFzcztcbiAgb3B0aW9ucztcbiAgZWxlbWVudHNPcHRpb25zO1xuICBzdHJpcGU7XG4gIGxvYWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGJsdXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgZm9jdXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHJlYWR5ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBlc2NhcGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGVsZW1lbnRzO1xuICBzdGF0ZSA9ICdub3RyZWFkeSc7XG4gIGVsZW1lbnRzU3Vic2NyaXB0aW9uO1xuICBjb25zdHJ1Y3RvcihzdHJpcGVFbGVtZW50c1NlcnZpY2UsIGVsZW1lbnRzUHJvdmlkZXIpIHtcbiAgICB0aGlzLnN0cmlwZUVsZW1lbnRzU2VydmljZSA9IHN0cmlwZUVsZW1lbnRzU2VydmljZTtcbiAgICB0aGlzLmVsZW1lbnRzUHJvdmlkZXIgPSBlbGVtZW50c1Byb3ZpZGVyO1xuICB9XG4gIGFzeW5jIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcbiAgICB0aGlzLnN0YXRlID0gJ3N0YXJ0aW5nJztcbiAgICBsZXQgdXBkYXRlRWxlbWVudHMgPSBmYWxzZTtcbiAgICBpZiAoIXRoaXMuZWxlbWVudHNQcm92aWRlciAmJiAoY2hhbmdlcy5lbGVtZW50c09wdGlvbnMgfHwgY2hhbmdlcy5zdHJpcGUgfHwgIXRoaXMuZWxlbWVudHMpKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzID0gYXdhaXQgdGhpcy5zdHJpcGVFbGVtZW50c1NlcnZpY2UuZWxlbWVudHModGhpcy5zdHJpcGUsIHRoaXMuZWxlbWVudHNPcHRpb25zKS50b1Byb21pc2UoKTtcbiAgICAgIHVwZGF0ZUVsZW1lbnRzID0gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuc3RyaXBlRWxlbWVudHNTZXJ2aWNlLm1lcmdlT3B0aW9ucyh0aGlzLm9wdGlvbnMsIHRoaXMuY29udGFpbmVyQ2xhc3MpO1xuICAgIGlmIChjaGFuZ2VzLm9wdGlvbnMgfHwgY2hhbmdlcy5jb250YWluZXJDbGFzcyB8fCAhdGhpcy5lbGVtZW50IHx8IHVwZGF0ZUVsZW1lbnRzKSB7XG4gICAgICBpZiAodGhpcy5lbGVtZW50ICYmICF1cGRhdGVFbGVtZW50cykge1xuICAgICAgICB0aGlzLnVwZGF0ZShvcHRpb25zKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50cyAmJiB1cGRhdGVFbGVtZW50cykge1xuICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc3RhdGUgPSAncmVhZHknO1xuICB9XG4gIGFzeW5jIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLnN0cmlwZUVsZW1lbnRzU2VydmljZS5tZXJnZU9wdGlvbnModGhpcy5vcHRpb25zLCB0aGlzLmNvbnRhaW5lckNsYXNzKTtcbiAgICBpZiAodGhpcy5lbGVtZW50c1Byb3ZpZGVyKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzU3Vic2NyaXB0aW9uID0gdGhpcy5lbGVtZW50c1Byb3ZpZGVyLmVsZW1lbnRzLnN1YnNjcmliZShlbGVtZW50cyA9PiB7XG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSBlbGVtZW50cztcbiAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KG9wdGlvbnMpO1xuICAgICAgICB0aGlzLnN0YXRlID0gJ3JlYWR5JztcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PT0gJ25vdHJlYWR5Jykge1xuICAgICAgdGhpcy5zdGF0ZSA9ICdzdGFydGluZyc7XG4gICAgICB0aGlzLmVsZW1lbnRzID0gYXdhaXQgdGhpcy5zdHJpcGVFbGVtZW50c1NlcnZpY2UuZWxlbWVudHModGhpcy5zdHJpcGUpLnRvUHJvbWlzZSgpO1xuICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KG9wdGlvbnMpO1xuICAgICAgdGhpcy5zdGF0ZSA9ICdyZWFkeSc7XG4gICAgfVxuICB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5kZXN0cm95KCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmVsZW1lbnRzU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG4gIHVwZGF0ZShvcHRpb25zKSB7XG4gICAgdGhpcy5lbGVtZW50LnVwZGF0ZShvcHRpb25zKTtcbiAgfVxuICAvKipcbiAgICogQGRlcHJlY2F0ZWRcbiAgICovXG4gIGdldEZweEJhbmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgfVxuICBjcmVhdGVFbGVtZW50KG9wdGlvbnMgPSB7XG4gICAgYWNjb3VudEhvbGRlclR5cGU6ICdpbmRpdmlkdWFsJ1xuICB9KSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgdGhpcy5lbGVtZW50LnVubW91bnQoKTtcbiAgICB9XG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5lbGVtZW50cy5jcmVhdGUoJ2ZweEJhbmsnLCBvcHRpb25zKTtcbiAgICB0aGlzLmVsZW1lbnQub24oJ2NoYW5nZScsIGV2ID0+IHRoaXMuY2hhbmdlLmVtaXQoZXYpKTtcbiAgICB0aGlzLmVsZW1lbnQub24oJ2JsdXInLCAoKSA9PiB0aGlzLmJsdXIuZW1pdCgpKTtcbiAgICB0aGlzLmVsZW1lbnQub24oJ2ZvY3VzJywgKCkgPT4gdGhpcy5mb2N1cy5lbWl0KCkpO1xuICAgIHRoaXMuZWxlbWVudC5vbigncmVhZHknLCAoKSA9PiB0aGlzLnJlYWR5LmVtaXQoKSk7XG4gICAgdGhpcy5lbGVtZW50Lm9uKCdlc2NhcGUnLCAoKSA9PiB0aGlzLmVzY2FwZS5lbWl0KCkpO1xuICAgIHRoaXMuZWxlbWVudC5tb3VudCh0aGlzLnN0cmlwZUVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5sb2FkLmVtaXQodGhpcy5lbGVtZW50KTtcbiAgfVxuICBzdGF0aWMgybVmYWMgPSBmdW5jdGlvbiBTdHJpcGVGcHhCYW5rQ29tcG9uZW50X0ZhY3RvcnkoX19uZ0ZhY3RvcnlUeXBlX18pIHtcbiAgICByZXR1cm4gbmV3IChfX25nRmFjdG9yeVR5cGVfXyB8fCBTdHJpcGVGcHhCYW5rQ29tcG9uZW50KShpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KFN0cmlwZUVsZW1lbnRzU2VydmljZSksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoU3RyaXBlRWxlbWVudHNEaXJlY3RpdmUsIDgpKTtcbiAgfTtcbiAgc3RhdGljIMm1Y21wID0gLyogQF9fUFVSRV9fICovaTAuybXJtWRlZmluZUNvbXBvbmVudCh7XG4gICAgdHlwZTogU3RyaXBlRnB4QmFua0NvbXBvbmVudCxcbiAgICBzZWxlY3RvcnM6IFtbXCJuZ3gtc3RyaXBlLWZweC1iYW5rXCJdXSxcbiAgICBjb250ZW50UXVlcmllczogZnVuY3Rpb24gU3RyaXBlRnB4QmFua0NvbXBvbmVudF9Db250ZW50UXVlcmllcyhyZiwgY3R4LCBkaXJJbmRleCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1Y29udGVudFF1ZXJ5KGRpckluZGV4LCBOZ3hTdHJpcGVFbGVtZW50TG9hZGluZ1RlbXBsYXRlRGlyZWN0aXZlLCA1LCBUZW1wbGF0ZVJlZik7XG4gICAgICB9XG4gICAgICBpZiAocmYgJiAyKSB7XG4gICAgICAgIGxldCBfdDtcbiAgICAgICAgaTAuybXJtXF1ZXJ5UmVmcmVzaChfdCA9IGkwLsm1ybVsb2FkUXVlcnkoKSkgJiYgKGN0eC5sb2FkaW5nVGVtcGxhdGUgPSBfdC5maXJzdCk7XG4gICAgICB9XG4gICAgfSxcbiAgICB2aWV3UXVlcnk6IGZ1bmN0aW9uIFN0cmlwZUZweEJhbmtDb21wb25lbnRfUXVlcnkocmYsIGN0eCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1dmlld1F1ZXJ5KF9jMCwgNSk7XG4gICAgICB9XG4gICAgICBpZiAocmYgJiAyKSB7XG4gICAgICAgIGxldCBfdDtcbiAgICAgICAgaTAuybXJtXF1ZXJ5UmVmcmVzaChfdCA9IGkwLsm1ybVsb2FkUXVlcnkoKSkgJiYgKGN0eC5zdHJpcGVFbGVtZW50UmVmID0gX3QuZmlyc3QpO1xuICAgICAgfVxuICAgIH0sXG4gICAgaW5wdXRzOiB7XG4gICAgICBjb250YWluZXJDbGFzczogXCJjb250YWluZXJDbGFzc1wiLFxuICAgICAgb3B0aW9uczogXCJvcHRpb25zXCIsXG4gICAgICBlbGVtZW50c09wdGlvbnM6IFwiZWxlbWVudHNPcHRpb25zXCIsXG4gICAgICBzdHJpcGU6IFwic3RyaXBlXCJcbiAgICB9LFxuICAgIG91dHB1dHM6IHtcbiAgICAgIGxvYWQ6IFwibG9hZFwiLFxuICAgICAgYmx1cjogXCJibHVyXCIsXG4gICAgICBjaGFuZ2U6IFwiY2hhbmdlXCIsXG4gICAgICBmb2N1czogXCJmb2N1c1wiLFxuICAgICAgcmVhZHk6IFwicmVhZHlcIixcbiAgICAgIGVzY2FwZTogXCJlc2NhcGVcIlxuICAgIH0sXG4gICAgZmVhdHVyZXM6IFtpMC7Jtcm1TmdPbkNoYW5nZXNGZWF0dXJlXSxcbiAgICBkZWNsczogMyxcbiAgICB2YXJzOiAxLFxuICAgIGNvbnN0czogW1tcInN0cmlwZUVsZW1lbnRSZWZcIiwgXCJcIl0sIFsxLCBcImZpZWxkXCJdLCBbMywgXCJuZ1RlbXBsYXRlT3V0bGV0XCJdXSxcbiAgICB0ZW1wbGF0ZTogZnVuY3Rpb24gU3RyaXBlRnB4QmFua0NvbXBvbmVudF9UZW1wbGF0ZShyZiwgY3R4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoMCwgXCJkaXZcIiwgMSwgMCk7XG4gICAgICAgIGkwLsm1ybV0ZW1wbGF0ZSgyLCBTdHJpcGVGcHhCYW5rQ29tcG9uZW50X0NvbmRpdGlvbmFsXzJfVGVtcGxhdGUsIDEsIDEsIFwibmctY29udGFpbmVyXCIsIDIpO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xuICAgICAgfVxuICAgICAgaWYgKHJmICYgMikge1xuICAgICAgICBpMC7Jtcm1YWR2YW5jZSgyKTtcbiAgICAgICAgaTAuybXJtWNvbmRpdGlvbmFsKGN0eC5zdGF0ZSAhPT0gXCJyZWFkeVwiICYmIGN0eC5sb2FkaW5nVGVtcGxhdGUgPyAyIDogLTEpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZGVwZW5kZW5jaWVzOiBbQ29tbW9uTW9kdWxlLCBpMy5OZ1RlbXBsYXRlT3V0bGV0XSxcbiAgICBlbmNhcHN1bGF0aW9uOiAyXG4gIH0pO1xufVxuKCgpID0+IHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoU3RyaXBlRnB4QmFua0NvbXBvbmVudCwgW3tcbiAgICB0eXBlOiBDb21wb25lbnQsXG4gICAgYXJnczogW3tcbiAgICAgIHNlbGVjdG9yOiAnbmd4LXN0cmlwZS1mcHgtYmFuaycsXG4gICAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgICAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIiAjc3RyaXBlRWxlbWVudFJlZj5cbiAgICAgIEBpZiAoc3RhdGUgIT09ICdyZWFkeScgJiYgbG9hZGluZ1RlbXBsYXRlKSB7XG4gICAgICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwibG9hZGluZ1RlbXBsYXRlXCIgLz5cbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgYCxcbiAgICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdXG4gICAgfV1cbiAgfV0sICgpID0+IFt7XG4gICAgdHlwZTogU3RyaXBlRWxlbWVudHNTZXJ2aWNlXG4gIH0sIHtcbiAgICB0eXBlOiBTdHJpcGVFbGVtZW50c0RpcmVjdGl2ZSxcbiAgICBkZWNvcmF0b3JzOiBbe1xuICAgICAgdHlwZTogT3B0aW9uYWxcbiAgICB9XVxuICB9XSwge1xuICAgIGxvYWRpbmdUZW1wbGF0ZTogW3tcbiAgICAgIHR5cGU6IENvbnRlbnRDaGlsZCxcbiAgICAgIGFyZ3M6IFtOZ3hTdHJpcGVFbGVtZW50TG9hZGluZ1RlbXBsYXRlRGlyZWN0aXZlLCB7XG4gICAgICAgIHJlYWQ6IFRlbXBsYXRlUmVmXG4gICAgICB9XVxuICAgIH1dLFxuICAgIHN0cmlwZUVsZW1lbnRSZWY6IFt7XG4gICAgICB0eXBlOiBWaWV3Q2hpbGQsXG4gICAgICBhcmdzOiBbJ3N0cmlwZUVsZW1lbnRSZWYnXVxuICAgIH1dLFxuICAgIGNvbnRhaW5lckNsYXNzOiBbe1xuICAgICAgdHlwZTogSW5wdXRcbiAgICB9XSxcbiAgICBvcHRpb25zOiBbe1xuICAgICAgdHlwZTogSW5wdXRcbiAgICB9XSxcbiAgICBlbGVtZW50c09wdGlvbnM6IFt7XG4gICAgICB0eXBlOiBJbnB1dFxuICAgIH1dLFxuICAgIHN0cmlwZTogW3tcbiAgICAgIHR5cGU6IElucHV0XG4gICAgfV0sXG4gICAgbG9hZDogW3tcbiAgICAgIHR5cGU6IE91dHB1dFxuICAgIH1dLFxuICAgIGJsdXI6IFt7XG4gICAgICB0eXBlOiBPdXRwdXRcbiAgICB9XSxcbiAgICBjaGFuZ2U6IFt7XG4gICAgICB0eXBlOiBPdXRwdXRcbiAgICB9XSxcbiAgICBmb2N1czogW3tcbiAgICAgIHR5cGU6IE91dHB1dFxuICAgIH1dLFxuICAgIHJlYWR5OiBbe1xuICAgICAgdHlwZTogT3V0cHV0XG4gICAgfV0sXG4gICAgZXNjYXBlOiBbe1xuICAgICAgdHlwZTogT3V0cHV0XG4gICAgfV1cbiAgfSk7XG59KSgpO1xuY2xhc3MgU3RyaXBlSWJhbkNvbXBvbmVudCB7XG4gIHN0cmlwZUVsZW1lbnRzU2VydmljZTtcbiAgZWxlbWVudHNQcm92aWRlcjtcbiAgbG9hZGluZ1RlbXBsYXRlO1xuICBzdHJpcGVFbGVtZW50UmVmO1xuICBlbGVtZW50O1xuICBjb250YWluZXJDbGFzcztcbiAgb3B0aW9ucztcbiAgZWxlbWVudHNPcHRpb25zO1xuICBzdHJpcGU7XG4gIGxvYWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGJsdXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgZm9jdXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHJlYWR5ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBlc2NhcGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGVsZW1lbnRzO1xuICBzdGF0ZSA9ICdub3RyZWFkeSc7XG4gIGVsZW1lbnRzU3Vic2NyaXB0aW9uO1xuICBjb25zdHJ1Y3RvcihzdHJpcGVFbGVtZW50c1NlcnZpY2UsIGVsZW1lbnRzUHJvdmlkZXIpIHtcbiAgICB0aGlzLnN0cmlwZUVsZW1lbnRzU2VydmljZSA9IHN0cmlwZUVsZW1lbnRzU2VydmljZTtcbiAgICB0aGlzLmVsZW1lbnRzUHJvdmlkZXIgPSBlbGVtZW50c1Byb3ZpZGVyO1xuICB9XG4gIGFzeW5jIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcbiAgICB0aGlzLnN0YXRlID0gJ3N0YXJ0aW5nJztcbiAgICBsZXQgdXBkYXRlRWxlbWVudHMgPSBmYWxzZTtcbiAgICBpZiAoIXRoaXMuZWxlbWVudHNQcm92aWRlciAmJiAoY2hhbmdlcy5lbGVtZW50c09wdGlvbnMgfHwgY2hhbmdlcy5zdHJpcGUgfHwgIXRoaXMuZWxlbWVudHMpKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzID0gYXdhaXQgdGhpcy5zdHJpcGVFbGVtZW50c1NlcnZpY2UuZWxlbWVudHModGhpcy5zdHJpcGUsIHRoaXMuZWxlbWVudHNPcHRpb25zKS50b1Byb21pc2UoKTtcbiAgICAgIHVwZGF0ZUVsZW1lbnRzID0gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuc3RyaXBlRWxlbWVudHNTZXJ2aWNlLm1lcmdlT3B0aW9ucyh0aGlzLm9wdGlvbnMsIHRoaXMuY29udGFpbmVyQ2xhc3MpO1xuICAgIGlmIChjaGFuZ2VzLm9wdGlvbnMgfHwgY2hhbmdlcy5jb250YWluZXJDbGFzcyB8fCAhdGhpcy5lbGVtZW50IHx8IHVwZGF0ZUVsZW1lbnRzKSB7XG4gICAgICBpZiAodGhpcy5lbGVtZW50ICYmICF1cGRhdGVFbGVtZW50cykge1xuICAgICAgICB0aGlzLnVwZGF0ZShvcHRpb25zKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50cyAmJiB1cGRhdGVFbGVtZW50cykge1xuICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc3RhdGUgPSAncmVhZHknO1xuICB9XG4gIGFzeW5jIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLnN0cmlwZUVsZW1lbnRzU2VydmljZS5tZXJnZU9wdGlvbnModGhpcy5vcHRpb25zLCB0aGlzLmNvbnRhaW5lckNsYXNzKTtcbiAgICBpZiAodGhpcy5lbGVtZW50c1Byb3ZpZGVyKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzU3Vic2NyaXB0aW9uID0gdGhpcy5lbGVtZW50c1Byb3ZpZGVyLmVsZW1lbnRzLnN1YnNjcmliZShlbGVtZW50cyA9PiB7XG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSBlbGVtZW50cztcbiAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KG9wdGlvbnMpO1xuICAgICAgICB0aGlzLnN0YXRlID0gJ3JlYWR5JztcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PT0gJ25vdHJlYWR5Jykge1xuICAgICAgdGhpcy5zdGF0ZSA9ICdzdGFydGluZyc7XG4gICAgICB0aGlzLmVsZW1lbnRzID0gYXdhaXQgdGhpcy5zdHJpcGVFbGVtZW50c1NlcnZpY2UuZWxlbWVudHModGhpcy5zdHJpcGUpLnRvUHJvbWlzZSgpO1xuICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KG9wdGlvbnMpO1xuICAgICAgdGhpcy5zdGF0ZSA9ICdyZWFkeSc7XG4gICAgfVxuICB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5kZXN0cm95KCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmVsZW1lbnRzU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG4gIHVwZGF0ZShvcHRpb25zKSB7XG4gICAgdGhpcy5lbGVtZW50LnVwZGF0ZShvcHRpb25zKTtcbiAgfVxuICAvKipcbiAgICogQGRlcHJlY2F0ZWRcbiAgICovXG4gIGdldEliYW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgfVxuICBjcmVhdGVFbGVtZW50KG9wdGlvbnMgPSB7fSkge1xuICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZWxlbWVudC51bm1vdW50KCk7XG4gICAgfVxuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuZWxlbWVudHMuY3JlYXRlKCdpYmFuJywgb3B0aW9ucyk7XG4gICAgdGhpcy5lbGVtZW50Lm9uKCdjaGFuZ2UnLCBldiA9PiB0aGlzLmNoYW5nZS5lbWl0KGV2KSk7XG4gICAgdGhpcy5lbGVtZW50Lm9uKCdibHVyJywgKCkgPT4gdGhpcy5ibHVyLmVtaXQoKSk7XG4gICAgdGhpcy5lbGVtZW50Lm9uKCdmb2N1cycsICgpID0+IHRoaXMuZm9jdXMuZW1pdCgpKTtcbiAgICB0aGlzLmVsZW1lbnQub24oJ3JlYWR5JywgKCkgPT4gdGhpcy5yZWFkeS5lbWl0KCkpO1xuICAgIHRoaXMuZWxlbWVudC5vbignZXNjYXBlJywgKCkgPT4gdGhpcy5lc2NhcGUuZW1pdCgpKTtcbiAgICB0aGlzLmVsZW1lbnQubW91bnQodGhpcy5zdHJpcGVFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIHRoaXMubG9hZC5lbWl0KHRoaXMuZWxlbWVudCk7XG4gIH1cbiAgc3RhdGljIMm1ZmFjID0gZnVuY3Rpb24gU3RyaXBlSWJhbkNvbXBvbmVudF9GYWN0b3J5KF9fbmdGYWN0b3J5VHlwZV9fKSB7XG4gICAgcmV0dXJuIG5ldyAoX19uZ0ZhY3RvcnlUeXBlX18gfHwgU3RyaXBlSWJhbkNvbXBvbmVudCkoaTAuybXJtWRpcmVjdGl2ZUluamVjdChTdHJpcGVFbGVtZW50c1NlcnZpY2UpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KFN0cmlwZUVsZW1lbnRzRGlyZWN0aXZlLCA4KSk7XG4gIH07XG4gIHN0YXRpYyDJtWNtcCA9IC8qIEBfX1BVUkVfXyAqL2kwLsm1ybVkZWZpbmVDb21wb25lbnQoe1xuICAgIHR5cGU6IFN0cmlwZUliYW5Db21wb25lbnQsXG4gICAgc2VsZWN0b3JzOiBbW1wibmd4LXN0cmlwZS1pYmFuXCJdXSxcbiAgICBjb250ZW50UXVlcmllczogZnVuY3Rpb24gU3RyaXBlSWJhbkNvbXBvbmVudF9Db250ZW50UXVlcmllcyhyZiwgY3R4LCBkaXJJbmRleCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1Y29udGVudFF1ZXJ5KGRpckluZGV4LCBOZ3hTdHJpcGVFbGVtZW50TG9hZGluZ1RlbXBsYXRlRGlyZWN0aXZlLCA1LCBUZW1wbGF0ZVJlZik7XG4gICAgICB9XG4gICAgICBpZiAocmYgJiAyKSB7XG4gICAgICAgIGxldCBfdDtcbiAgICAgICAgaTAuybXJtXF1ZXJ5UmVmcmVzaChfdCA9IGkwLsm1ybVsb2FkUXVlcnkoKSkgJiYgKGN0eC5sb2FkaW5nVGVtcGxhdGUgPSBfdC5maXJzdCk7XG4gICAgICB9XG4gICAgfSxcbiAgICB2aWV3UXVlcnk6IGZ1bmN0aW9uIFN0cmlwZUliYW5Db21wb25lbnRfUXVlcnkocmYsIGN0eCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1dmlld1F1ZXJ5KF9jMCwgNSk7XG4gICAgICB9XG4gICAgICBpZiAocmYgJiAyKSB7XG4gICAgICAgIGxldCBfdDtcbiAgICAgICAgaTAuybXJtXF1ZXJ5UmVmcmVzaChfdCA9IGkwLsm1ybVsb2FkUXVlcnkoKSkgJiYgKGN0eC5zdHJpcGVFbGVtZW50UmVmID0gX3QuZmlyc3QpO1xuICAgICAgfVxuICAgIH0sXG4gICAgaW5wdXRzOiB7XG4gICAgICBjb250YWluZXJDbGFzczogXCJjb250YWluZXJDbGFzc1wiLFxuICAgICAgb3B0aW9uczogXCJvcHRpb25zXCIsXG4gICAgICBlbGVtZW50c09wdGlvbnM6IFwiZWxlbWVudHNPcHRpb25zXCIsXG4gICAgICBzdHJpcGU6IFwic3RyaXBlXCJcbiAgICB9LFxuICAgIG91dHB1dHM6IHtcbiAgICAgIGxvYWQ6IFwibG9hZFwiLFxuICAgICAgYmx1cjogXCJibHVyXCIsXG4gICAgICBjaGFuZ2U6IFwiY2hhbmdlXCIsXG4gICAgICBmb2N1czogXCJmb2N1c1wiLFxuICAgICAgcmVhZHk6IFwicmVhZHlcIixcbiAgICAgIGVzY2FwZTogXCJlc2NhcGVcIlxuICAgIH0sXG4gICAgZmVhdHVyZXM6IFtpMC7Jtcm1TmdPbkNoYW5nZXNGZWF0dXJlXSxcbiAgICBkZWNsczogMyxcbiAgICB2YXJzOiAxLFxuICAgIGNvbnN0czogW1tcInN0cmlwZUVsZW1lbnRSZWZcIiwgXCJcIl0sIFsxLCBcImZpZWxkXCJdLCBbMywgXCJuZ1RlbXBsYXRlT3V0bGV0XCJdXSxcbiAgICB0ZW1wbGF0ZTogZnVuY3Rpb24gU3RyaXBlSWJhbkNvbXBvbmVudF9UZW1wbGF0ZShyZiwgY3R4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoMCwgXCJkaXZcIiwgMSwgMCk7XG4gICAgICAgIGkwLsm1ybV0ZW1wbGF0ZSgyLCBTdHJpcGVJYmFuQ29tcG9uZW50X0NvbmRpdGlvbmFsXzJfVGVtcGxhdGUsIDEsIDEsIFwibmctY29udGFpbmVyXCIsIDIpO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xuICAgICAgfVxuICAgICAgaWYgKHJmICYgMikge1xuICAgICAgICBpMC7Jtcm1YWR2YW5jZSgyKTtcbiAgICAgICAgaTAuybXJtWNvbmRpdGlvbmFsKGN0eC5zdGF0ZSAhPT0gXCJyZWFkeVwiICYmIGN0eC5sb2FkaW5nVGVtcGxhdGUgPyAyIDogLTEpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZGVwZW5kZW5jaWVzOiBbQ29tbW9uTW9kdWxlLCBpMy5OZ1RlbXBsYXRlT3V0bGV0XSxcbiAgICBlbmNhcHN1bGF0aW9uOiAyXG4gIH0pO1xufVxuKCgpID0+IHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoU3RyaXBlSWJhbkNvbXBvbmVudCwgW3tcbiAgICB0eXBlOiBDb21wb25lbnQsXG4gICAgYXJnczogW3tcbiAgICAgIHNlbGVjdG9yOiAnbmd4LXN0cmlwZS1pYmFuJyxcbiAgICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiICNzdHJpcGVFbGVtZW50UmVmPlxuICAgICAgQGlmIChzdGF0ZSAhPT0gJ3JlYWR5JyAmJiBsb2FkaW5nVGVtcGxhdGUpIHtcbiAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJsb2FkaW5nVGVtcGxhdGVcIiAvPlxuICAgICAgfVxuICAgIDwvZGl2PlxuICBgLFxuICAgICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV1cbiAgICB9XVxuICB9XSwgKCkgPT4gW3tcbiAgICB0eXBlOiBTdHJpcGVFbGVtZW50c1NlcnZpY2VcbiAgfSwge1xuICAgIHR5cGU6IFN0cmlwZUVsZW1lbnRzRGlyZWN0aXZlLFxuICAgIGRlY29yYXRvcnM6IFt7XG4gICAgICB0eXBlOiBPcHRpb25hbFxuICAgIH1dXG4gIH1dLCB7XG4gICAgbG9hZGluZ1RlbXBsYXRlOiBbe1xuICAgICAgdHlwZTogQ29udGVudENoaWxkLFxuICAgICAgYXJnczogW05neFN0cmlwZUVsZW1lbnRMb2FkaW5nVGVtcGxhdGVEaXJlY3RpdmUsIHtcbiAgICAgICAgcmVhZDogVGVtcGxhdGVSZWZcbiAgICAgIH1dXG4gICAgfV0sXG4gICAgc3RyaXBlRWxlbWVudFJlZjogW3tcbiAgICAgIHR5cGU6IFZpZXdDaGlsZCxcbiAgICAgIGFyZ3M6IFsnc3RyaXBlRWxlbWVudFJlZiddXG4gICAgfV0sXG4gICAgY29udGFpbmVyQ2xhc3M6IFt7XG4gICAgICB0eXBlOiBJbnB1dFxuICAgIH1dLFxuICAgIG9wdGlvbnM6IFt7XG4gICAgICB0eXBlOiBJbnB1dFxuICAgIH1dLFxuICAgIGVsZW1lbnRzT3B0aW9uczogW3tcbiAgICAgIHR5cGU6IElucHV0XG4gICAgfV0sXG4gICAgc3RyaXBlOiBbe1xuICAgICAgdHlwZTogSW5wdXRcbiAgICB9XSxcbiAgICBsb2FkOiBbe1xuICAgICAgdHlwZTogT3V0cHV0XG4gICAgfV0sXG4gICAgYmx1cjogW3tcbiAgICAgIHR5cGU6IE91dHB1dFxuICAgIH1dLFxuICAgIGNoYW5nZTogW3tcbiAgICAgIHR5cGU6IE91dHB1dFxuICAgIH1dLFxuICAgIGZvY3VzOiBbe1xuICAgICAgdHlwZTogT3V0cHV0XG4gICAgfV0sXG4gICAgcmVhZHk6IFt7XG4gICAgICB0eXBlOiBPdXRwdXRcbiAgICB9XSxcbiAgICBlc2NhcGU6IFt7XG4gICAgICB0eXBlOiBPdXRwdXRcbiAgICB9XVxuICB9KTtcbn0pKCk7XG5jbGFzcyBTdHJpcGVJZGVhbEJhbmtDb21wb25lbnQge1xuICBzdHJpcGVFbGVtZW50c1NlcnZpY2U7XG4gIGVsZW1lbnRzUHJvdmlkZXI7XG4gIGxvYWRpbmdUZW1wbGF0ZTtcbiAgc3RyaXBlRWxlbWVudFJlZjtcbiAgZWxlbWVudDtcbiAgY29udGFpbmVyQ2xhc3M7XG4gIG9wdGlvbnM7XG4gIGVsZW1lbnRzT3B0aW9ucztcbiAgc3RyaXBlO1xuICBsb2FkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBibHVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGZvY3VzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICByZWFkeSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgZXNjYXBlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBlbGVtZW50cztcbiAgc3RhdGUgPSAnbm90cmVhZHknO1xuICBlbGVtZW50c1N1YnNjcmlwdGlvbjtcbiAgY29uc3RydWN0b3Ioc3RyaXBlRWxlbWVudHNTZXJ2aWNlLCBlbGVtZW50c1Byb3ZpZGVyKSB7XG4gICAgdGhpcy5zdHJpcGVFbGVtZW50c1NlcnZpY2UgPSBzdHJpcGVFbGVtZW50c1NlcnZpY2U7XG4gICAgdGhpcy5lbGVtZW50c1Byb3ZpZGVyID0gZWxlbWVudHNQcm92aWRlcjtcbiAgfVxuICBhc3luYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XG4gICAgdGhpcy5zdGF0ZSA9ICdzdGFydGluZyc7XG4gICAgbGV0IHVwZGF0ZUVsZW1lbnRzID0gZmFsc2U7XG4gICAgaWYgKCF0aGlzLmVsZW1lbnRzUHJvdmlkZXIgJiYgKGNoYW5nZXMuZWxlbWVudHNPcHRpb25zIHx8IGNoYW5nZXMuc3RyaXBlIHx8ICF0aGlzLmVsZW1lbnRzKSkge1xuICAgICAgdGhpcy5lbGVtZW50cyA9IGF3YWl0IHRoaXMuc3RyaXBlRWxlbWVudHNTZXJ2aWNlLmVsZW1lbnRzKHRoaXMuc3RyaXBlLCB0aGlzLmVsZW1lbnRzT3B0aW9ucykudG9Qcm9taXNlKCk7XG4gICAgICB1cGRhdGVFbGVtZW50cyA9IHRydWU7XG4gICAgfVxuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLnN0cmlwZUVsZW1lbnRzU2VydmljZS5tZXJnZU9wdGlvbnModGhpcy5vcHRpb25zLCB0aGlzLmNvbnRhaW5lckNsYXNzKTtcbiAgICBpZiAoY2hhbmdlcy5vcHRpb25zIHx8IGNoYW5nZXMuY29udGFpbmVyQ2xhc3MgfHwgIXRoaXMuZWxlbWVudCB8fCB1cGRhdGVFbGVtZW50cykge1xuICAgICAgaWYgKHRoaXMuZWxlbWVudCAmJiAhdXBkYXRlRWxlbWVudHMpIHtcbiAgICAgICAgdGhpcy51cGRhdGUob3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudHMgJiYgdXBkYXRlRWxlbWVudHMpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnN0YXRlID0gJ3JlYWR5JztcbiAgfVxuICBhc3luYyBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5zdHJpcGVFbGVtZW50c1NlcnZpY2UubWVyZ2VPcHRpb25zKHRoaXMub3B0aW9ucywgdGhpcy5jb250YWluZXJDbGFzcyk7XG4gICAgaWYgKHRoaXMuZWxlbWVudHNQcm92aWRlcikge1xuICAgICAgdGhpcy5lbGVtZW50c1N1YnNjcmlwdGlvbiA9IHRoaXMuZWxlbWVudHNQcm92aWRlci5lbGVtZW50cy5zdWJzY3JpYmUoZWxlbWVudHMgPT4ge1xuICAgICAgICB0aGlzLmVsZW1lbnRzID0gZWxlbWVudHM7XG4gICAgICAgIHRoaXMuY3JlYXRlRWxlbWVudChvcHRpb25zKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICdyZWFkeSc7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09ICdub3RyZWFkeScpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSAnc3RhcnRpbmcnO1xuICAgICAgdGhpcy5lbGVtZW50cyA9IGF3YWl0IHRoaXMuc3RyaXBlRWxlbWVudHNTZXJ2aWNlLmVsZW1lbnRzKHRoaXMuc3RyaXBlKS50b1Byb21pc2UoKTtcbiAgICAgIHRoaXMuY3JlYXRlRWxlbWVudChvcHRpb25zKTtcbiAgICAgIHRoaXMuc3RhdGUgPSAncmVhZHknO1xuICAgIH1cbiAgfVxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnQuZGVzdHJveSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5lbGVtZW50c1N1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5lbGVtZW50c1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuICB1cGRhdGUob3B0aW9ucykge1xuICAgIHRoaXMuZWxlbWVudC51cGRhdGUob3B0aW9ucyk7XG4gIH1cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkXG4gICAqL1xuICBnZXRJZGVhbEJhbmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgfVxuICBjcmVhdGVFbGVtZW50KG9wdGlvbnMgPSB7fSkge1xuICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZWxlbWVudC51bm1vdW50KCk7XG4gICAgfVxuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuZWxlbWVudHMuY3JlYXRlKCdpZGVhbEJhbmsnLCBvcHRpb25zKTtcbiAgICB0aGlzLmVsZW1lbnQub24oJ2NoYW5nZScsIGV2ID0+IHRoaXMuY2hhbmdlLmVtaXQoZXYpKTtcbiAgICB0aGlzLmVsZW1lbnQub24oJ2JsdXInLCAoKSA9PiB0aGlzLmJsdXIuZW1pdCgpKTtcbiAgICB0aGlzLmVsZW1lbnQub24oJ2ZvY3VzJywgKCkgPT4gdGhpcy5mb2N1cy5lbWl0KCkpO1xuICAgIHRoaXMuZWxlbWVudC5vbigncmVhZHknLCAoKSA9PiB0aGlzLnJlYWR5LmVtaXQoKSk7XG4gICAgdGhpcy5lbGVtZW50Lm9uKCdlc2NhcGUnLCAoKSA9PiB0aGlzLmVzY2FwZS5lbWl0KCkpO1xuICAgIHRoaXMuZWxlbWVudC5tb3VudCh0aGlzLnN0cmlwZUVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5sb2FkLmVtaXQodGhpcy5lbGVtZW50KTtcbiAgfVxuICBzdGF0aWMgybVmYWMgPSBmdW5jdGlvbiBTdHJpcGVJZGVhbEJhbmtDb21wb25lbnRfRmFjdG9yeShfX25nRmFjdG9yeVR5cGVfXykge1xuICAgIHJldHVybiBuZXcgKF9fbmdGYWN0b3J5VHlwZV9fIHx8IFN0cmlwZUlkZWFsQmFua0NvbXBvbmVudCkoaTAuybXJtWRpcmVjdGl2ZUluamVjdChTdHJpcGVFbGVtZW50c1NlcnZpY2UpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KFN0cmlwZUVsZW1lbnRzRGlyZWN0aXZlLCA4KSk7XG4gIH07XG4gIHN0YXRpYyDJtWNtcCA9IC8qIEBfX1BVUkVfXyAqL2kwLsm1ybVkZWZpbmVDb21wb25lbnQoe1xuICAgIHR5cGU6IFN0cmlwZUlkZWFsQmFua0NvbXBvbmVudCxcbiAgICBzZWxlY3RvcnM6IFtbXCJuZ3gtc3RyaXBlLWlkZWFsLWJhbmtcIl1dLFxuICAgIGNvbnRlbnRRdWVyaWVzOiBmdW5jdGlvbiBTdHJpcGVJZGVhbEJhbmtDb21wb25lbnRfQ29udGVudFF1ZXJpZXMocmYsIGN0eCwgZGlySW5kZXgpIHtcbiAgICAgIGlmIChyZiAmIDEpIHtcbiAgICAgICAgaTAuybXJtWNvbnRlbnRRdWVyeShkaXJJbmRleCwgTmd4U3RyaXBlRWxlbWVudExvYWRpbmdUZW1wbGF0ZURpcmVjdGl2ZSwgNSwgVGVtcGxhdGVSZWYpO1xuICAgICAgfVxuICAgICAgaWYgKHJmICYgMikge1xuICAgICAgICBsZXQgX3Q7XG4gICAgICAgIGkwLsm1ybVxdWVyeVJlZnJlc2goX3QgPSBpMC7Jtcm1bG9hZFF1ZXJ5KCkpICYmIChjdHgubG9hZGluZ1RlbXBsYXRlID0gX3QuZmlyc3QpO1xuICAgICAgfVxuICAgIH0sXG4gICAgdmlld1F1ZXJ5OiBmdW5jdGlvbiBTdHJpcGVJZGVhbEJhbmtDb21wb25lbnRfUXVlcnkocmYsIGN0eCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1dmlld1F1ZXJ5KF9jMCwgNSk7XG4gICAgICB9XG4gICAgICBpZiAocmYgJiAyKSB7XG4gICAgICAgIGxldCBfdDtcbiAgICAgICAgaTAuybXJtXF1ZXJ5UmVmcmVzaChfdCA9IGkwLsm1ybVsb2FkUXVlcnkoKSkgJiYgKGN0eC5zdHJpcGVFbGVtZW50UmVmID0gX3QuZmlyc3QpO1xuICAgICAgfVxuICAgIH0sXG4gICAgaW5wdXRzOiB7XG4gICAgICBjb250YWluZXJDbGFzczogXCJjb250YWluZXJDbGFzc1wiLFxuICAgICAgb3B0aW9uczogXCJvcHRpb25zXCIsXG4gICAgICBlbGVtZW50c09wdGlvbnM6IFwiZWxlbWVudHNPcHRpb25zXCIsXG4gICAgICBzdHJpcGU6IFwic3RyaXBlXCJcbiAgICB9LFxuICAgIG91dHB1dHM6IHtcbiAgICAgIGxvYWQ6IFwibG9hZFwiLFxuICAgICAgYmx1cjogXCJibHVyXCIsXG4gICAgICBjaGFuZ2U6IFwiY2hhbmdlXCIsXG4gICAgICBmb2N1czogXCJmb2N1c1wiLFxuICAgICAgcmVhZHk6IFwicmVhZHlcIixcbiAgICAgIGVzY2FwZTogXCJlc2NhcGVcIlxuICAgIH0sXG4gICAgZmVhdHVyZXM6IFtpMC7Jtcm1TmdPbkNoYW5nZXNGZWF0dXJlXSxcbiAgICBkZWNsczogMyxcbiAgICB2YXJzOiAxLFxuICAgIGNvbnN0czogW1tcInN0cmlwZUVsZW1lbnRSZWZcIiwgXCJcIl0sIFsxLCBcImZpZWxkXCJdLCBbMywgXCJuZ1RlbXBsYXRlT3V0bGV0XCJdXSxcbiAgICB0ZW1wbGF0ZTogZnVuY3Rpb24gU3RyaXBlSWRlYWxCYW5rQ29tcG9uZW50X1RlbXBsYXRlKHJmLCBjdHgpIHtcbiAgICAgIGlmIChyZiAmIDEpIHtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCgwLCBcImRpdlwiLCAxLCAwKTtcbiAgICAgICAgaTAuybXJtXRlbXBsYXRlKDIsIFN0cmlwZUlkZWFsQmFua0NvbXBvbmVudF9Db25kaXRpb25hbF8yX1RlbXBsYXRlLCAxLCAxLCBcIm5nLWNvbnRhaW5lclwiLCAyKTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZiAmIDIpIHtcbiAgICAgICAgaTAuybXJtWFkdmFuY2UoMik7XG4gICAgICAgIGkwLsm1ybVjb25kaXRpb25hbChjdHguc3RhdGUgIT09IFwicmVhZHlcIiAmJiBjdHgubG9hZGluZ1RlbXBsYXRlID8gMiA6IC0xKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRlcGVuZGVuY2llczogW0NvbW1vbk1vZHVsZSwgaTMuTmdUZW1wbGF0ZU91dGxldF0sXG4gICAgZW5jYXBzdWxhdGlvbjogMlxuICB9KTtcbn1cbigoKSA9PiB7XG4gICh0eXBlb2YgbmdEZXZNb2RlID09PSBcInVuZGVmaW5lZFwiIHx8IG5nRGV2TW9kZSkgJiYgaTAuybVzZXRDbGFzc01ldGFkYXRhKFN0cmlwZUlkZWFsQmFua0NvbXBvbmVudCwgW3tcbiAgICB0eXBlOiBDb21wb25lbnQsXG4gICAgYXJnczogW3tcbiAgICAgIHNlbGVjdG9yOiAnbmd4LXN0cmlwZS1pZGVhbC1iYW5rJyxcbiAgICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiICNzdHJpcGVFbGVtZW50UmVmPlxuICAgICAgQGlmIChzdGF0ZSAhPT0gJ3JlYWR5JyAmJiBsb2FkaW5nVGVtcGxhdGUpIHtcbiAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJsb2FkaW5nVGVtcGxhdGVcIiAvPlxuICAgICAgfVxuICAgIDwvZGl2PlxuICBgLFxuICAgICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV1cbiAgICB9XVxuICB9XSwgKCkgPT4gW3tcbiAgICB0eXBlOiBTdHJpcGVFbGVtZW50c1NlcnZpY2VcbiAgfSwge1xuICAgIHR5cGU6IFN0cmlwZUVsZW1lbnRzRGlyZWN0aXZlLFxuICAgIGRlY29yYXRvcnM6IFt7XG4gICAgICB0eXBlOiBPcHRpb25hbFxuICAgIH1dXG4gIH1dLCB7XG4gICAgbG9hZGluZ1RlbXBsYXRlOiBbe1xuICAgICAgdHlwZTogQ29udGVudENoaWxkLFxuICAgICAgYXJnczogW05neFN0cmlwZUVsZW1lbnRMb2FkaW5nVGVtcGxhdGVEaXJlY3RpdmUsIHtcbiAgICAgICAgcmVhZDogVGVtcGxhdGVSZWZcbiAgICAgIH1dXG4gICAgfV0sXG4gICAgc3RyaXBlRWxlbWVudFJlZjogW3tcbiAgICAgIHR5cGU6IFZpZXdDaGlsZCxcbiAgICAgIGFyZ3M6IFsnc3RyaXBlRWxlbWVudFJlZiddXG4gICAgfV0sXG4gICAgY29udGFpbmVyQ2xhc3M6IFt7XG4gICAgICB0eXBlOiBJbnB1dFxuICAgIH1dLFxuICAgIG9wdGlvbnM6IFt7XG4gICAgICB0eXBlOiBJbnB1dFxuICAgIH1dLFxuICAgIGVsZW1lbnRzT3B0aW9uczogW3tcbiAgICAgIHR5cGU6IElucHV0XG4gICAgfV0sXG4gICAgc3RyaXBlOiBbe1xuICAgICAgdHlwZTogSW5wdXRcbiAgICB9XSxcbiAgICBsb2FkOiBbe1xuICAgICAgdHlwZTogT3V0cHV0XG4gICAgfV0sXG4gICAgYmx1cjogW3tcbiAgICAgIHR5cGU6IE91dHB1dFxuICAgIH1dLFxuICAgIGNoYW5nZTogW3tcbiAgICAgIHR5cGU6IE91dHB1dFxuICAgIH1dLFxuICAgIGZvY3VzOiBbe1xuICAgICAgdHlwZTogT3V0cHV0XG4gICAgfV0sXG4gICAgcmVhZHk6IFt7XG4gICAgICB0eXBlOiBPdXRwdXRcbiAgICB9XSxcbiAgICBlc2NhcGU6IFt7XG4gICAgICB0eXBlOiBPdXRwdXRcbiAgICB9XVxuICB9KTtcbn0pKCk7XG5jbGFzcyBTdHJpcGVJc3N1aW5nQ2FyZEN2Y0Rpc3BsYXlDb21wb25lbnQge1xuICBjZHI7XG4gIHN0cmlwZUVsZW1lbnRzU2VydmljZTtcbiAgZWxlbWVudHNQcm92aWRlcjtcbiAgbG9hZGluZ1RlbXBsYXRlO1xuICBzdHJpcGVFbGVtZW50UmVmO1xuICBlbGVtZW50O1xuICBjb250YWluZXJDbGFzcztcbiAgb3B0aW9ucztcbiAgZWxlbWVudHNPcHRpb25zO1xuICBzdHJpcGU7XG4gIGxvYWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGVsZW1lbnRzO1xuICBzdGF0ZSA9ICdub3RyZWFkeSc7XG4gIGVsZW1lbnRzU3Vic2NyaXB0aW9uO1xuICBjb25zdHJ1Y3RvcihjZHIsIHN0cmlwZUVsZW1lbnRzU2VydmljZSwgZWxlbWVudHNQcm92aWRlcikge1xuICAgIHRoaXMuY2RyID0gY2RyO1xuICAgIHRoaXMuc3RyaXBlRWxlbWVudHNTZXJ2aWNlID0gc3RyaXBlRWxlbWVudHNTZXJ2aWNlO1xuICAgIHRoaXMuZWxlbWVudHNQcm92aWRlciA9IGVsZW1lbnRzUHJvdmlkZXI7XG4gIH1cbiAgYXN5bmMgbmdPbkNoYW5nZXMoY2hhbmdlcykge1xuICAgIHRoaXMuc3RhdGUgPSAnc3RhcnRpbmcnO1xuICAgIGxldCB1cGRhdGVFbGVtZW50cyA9IGZhbHNlO1xuICAgIGlmICghdGhpcy5lbGVtZW50c1Byb3ZpZGVyICYmIChjaGFuZ2VzLmVsZW1lbnRzT3B0aW9ucyB8fCBjaGFuZ2VzLnN0cmlwZSB8fCAhdGhpcy5lbGVtZW50cykpIHtcbiAgICAgIHRoaXMuZWxlbWVudHMgPSBhd2FpdCB0aGlzLnN0cmlwZUVsZW1lbnRzU2VydmljZS5lbGVtZW50cyh0aGlzLnN0cmlwZSwgdGhpcy5lbGVtZW50c09wdGlvbnMpLnRvUHJvbWlzZSgpO1xuICAgICAgdXBkYXRlRWxlbWVudHMgPSB0cnVlO1xuICAgIH1cbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5zdHJpcGVFbGVtZW50c1NlcnZpY2UubWVyZ2VPcHRpb25zKHRoaXMub3B0aW9ucywgdGhpcy5jb250YWluZXJDbGFzcyk7XG4gICAgaWYgKGNoYW5nZXMub3B0aW9ucyB8fCBjaGFuZ2VzLmNvbnRhaW5lckNsYXNzIHx8ICF0aGlzLmVsZW1lbnQgfHwgdXBkYXRlRWxlbWVudHMpIHtcbiAgICAgIGlmICh0aGlzLmVsZW1lbnQgJiYgIXVwZGF0ZUVsZW1lbnRzKSB7XG4gICAgICAgIHRoaXMudXBkYXRlKG9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRzICYmIHVwZGF0ZUVsZW1lbnRzKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlRWxlbWVudChvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgYXN5bmMgbmdPbkluaXQoKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuc3RyaXBlRWxlbWVudHNTZXJ2aWNlLm1lcmdlT3B0aW9ucyh0aGlzLm9wdGlvbnMsIHRoaXMuY29udGFpbmVyQ2xhc3MpO1xuICAgIGlmICh0aGlzLmVsZW1lbnRzUHJvdmlkZXIpIHtcbiAgICAgIHRoaXMuZWxlbWVudHNTdWJzY3JpcHRpb24gPSB0aGlzLmVsZW1lbnRzUHJvdmlkZXIuZWxlbWVudHMuc3Vic2NyaWJlKGVsZW1lbnRzID0+IHtcbiAgICAgICAgdGhpcy5lbGVtZW50cyA9IGVsZW1lbnRzO1xuICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09ICdub3RyZWFkeScpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSAnc3RhcnRpbmcnO1xuICAgICAgdGhpcy5lbGVtZW50cyA9IGF3YWl0IHRoaXMuc3RyaXBlRWxlbWVudHNTZXJ2aWNlLmVsZW1lbnRzKHRoaXMuc3RyaXBlKS50b1Byb21pc2UoKTtcbiAgICAgIHRoaXMuY3JlYXRlRWxlbWVudChvcHRpb25zKTtcbiAgICB9XG4gIH1cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgdGhpcy5lbGVtZW50LmRlc3Ryb3koKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZWxlbWVudHNTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuZWxlbWVudHNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbiAgdXBkYXRlKG9wdGlvbnMpIHtcbiAgICB0aGlzLmVsZW1lbnQudXBkYXRlKG9wdGlvbnMpO1xuICB9XG4gIGNyZWF0ZUVsZW1lbnQob3B0aW9ucykge1xuICAgIHRoaXMuc3RhdGUgPSAncmVhZHknO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnQudW5tb3VudCgpO1xuICAgIH1cbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmVsZW1lbnRzLmNyZWF0ZSgnaXNzdWluZ0NhcmRDdmNEaXNwbGF5Jywgb3B0aW9ucyk7XG4gICAgdGhpcy5lbGVtZW50Lm1vdW50KHRoaXMuc3RyaXBlRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLmxvYWQuZW1pdCh0aGlzLmVsZW1lbnQpO1xuICB9XG4gIHN0YXRpYyDJtWZhYyA9IGZ1bmN0aW9uIFN0cmlwZUlzc3VpbmdDYXJkQ3ZjRGlzcGxheUNvbXBvbmVudF9GYWN0b3J5KF9fbmdGYWN0b3J5VHlwZV9fKSB7XG4gICAgcmV0dXJuIG5ldyAoX19uZ0ZhY3RvcnlUeXBlX18gfHwgU3RyaXBlSXNzdWluZ0NhcmRDdmNEaXNwbGF5Q29tcG9uZW50KShpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLkNoYW5nZURldGVjdG9yUmVmKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChTdHJpcGVFbGVtZW50c1NlcnZpY2UpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KFN0cmlwZUVsZW1lbnRzRGlyZWN0aXZlLCA4KSk7XG4gIH07XG4gIHN0YXRpYyDJtWNtcCA9IC8qIEBfX1BVUkVfXyAqL2kwLsm1ybVkZWZpbmVDb21wb25lbnQoe1xuICAgIHR5cGU6IFN0cmlwZUlzc3VpbmdDYXJkQ3ZjRGlzcGxheUNvbXBvbmVudCxcbiAgICBzZWxlY3RvcnM6IFtbXCJuZ3gtc3RyaXBlLWlzc3VpbmctY2FyZC1jdmMtZGlzcGxheVwiXV0sXG4gICAgY29udGVudFF1ZXJpZXM6IGZ1bmN0aW9uIFN0cmlwZUlzc3VpbmdDYXJkQ3ZjRGlzcGxheUNvbXBvbmVudF9Db250ZW50UXVlcmllcyhyZiwgY3R4LCBkaXJJbmRleCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1Y29udGVudFF1ZXJ5KGRpckluZGV4LCBOZ3hTdHJpcGVFbGVtZW50TG9hZGluZ1RlbXBsYXRlRGlyZWN0aXZlLCA1LCBUZW1wbGF0ZVJlZik7XG4gICAgICB9XG4gICAgICBpZiAocmYgJiAyKSB7XG4gICAgICAgIGxldCBfdDtcbiAgICAgICAgaTAuybXJtXF1ZXJ5UmVmcmVzaChfdCA9IGkwLsm1ybVsb2FkUXVlcnkoKSkgJiYgKGN0eC5sb2FkaW5nVGVtcGxhdGUgPSBfdC5maXJzdCk7XG4gICAgICB9XG4gICAgfSxcbiAgICB2aWV3UXVlcnk6IGZ1bmN0aW9uIFN0cmlwZUlzc3VpbmdDYXJkQ3ZjRGlzcGxheUNvbXBvbmVudF9RdWVyeShyZiwgY3R4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybV2aWV3UXVlcnkoX2MwLCA1KTtcbiAgICAgIH1cbiAgICAgIGlmIChyZiAmIDIpIHtcbiAgICAgICAgbGV0IF90O1xuICAgICAgICBpMC7Jtcm1cXVlcnlSZWZyZXNoKF90ID0gaTAuybXJtWxvYWRRdWVyeSgpKSAmJiAoY3R4LnN0cmlwZUVsZW1lbnRSZWYgPSBfdC5maXJzdCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBpbnB1dHM6IHtcbiAgICAgIGNvbnRhaW5lckNsYXNzOiBcImNvbnRhaW5lckNsYXNzXCIsXG4gICAgICBvcHRpb25zOiBcIm9wdGlvbnNcIixcbiAgICAgIGVsZW1lbnRzT3B0aW9uczogXCJlbGVtZW50c09wdGlvbnNcIixcbiAgICAgIHN0cmlwZTogXCJzdHJpcGVcIlxuICAgIH0sXG4gICAgb3V0cHV0czoge1xuICAgICAgbG9hZDogXCJsb2FkXCJcbiAgICB9LFxuICAgIGZlYXR1cmVzOiBbaTAuybXJtU5nT25DaGFuZ2VzRmVhdHVyZV0sXG4gICAgZGVjbHM6IDMsXG4gICAgdmFyczogMSxcbiAgICBjb25zdHM6IFtbXCJzdHJpcGVFbGVtZW50UmVmXCIsIFwiXCJdLCBbMSwgXCJmaWVsZFwiXSwgWzMsIFwibmdUZW1wbGF0ZU91dGxldFwiXV0sXG4gICAgdGVtcGxhdGU6IGZ1bmN0aW9uIFN0cmlwZUlzc3VpbmdDYXJkQ3ZjRGlzcGxheUNvbXBvbmVudF9UZW1wbGF0ZShyZiwgY3R4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoMCwgXCJkaXZcIiwgMSwgMCk7XG4gICAgICAgIGkwLsm1ybV0ZW1wbGF0ZSgyLCBTdHJpcGVJc3N1aW5nQ2FyZEN2Y0Rpc3BsYXlDb21wb25lbnRfQ29uZGl0aW9uYWxfMl9UZW1wbGF0ZSwgMSwgMSwgXCJuZy1jb250YWluZXJcIiwgMik7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCk7XG4gICAgICB9XG4gICAgICBpZiAocmYgJiAyKSB7XG4gICAgICAgIGkwLsm1ybVhZHZhbmNlKDIpO1xuICAgICAgICBpMC7Jtcm1Y29uZGl0aW9uYWwoY3R4LnN0YXRlICE9PSBcInJlYWR5XCIgJiYgY3R4LmxvYWRpbmdUZW1wbGF0ZSA/IDIgOiAtMSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBkZXBlbmRlbmNpZXM6IFtDb21tb25Nb2R1bGUsIGkzLk5nVGVtcGxhdGVPdXRsZXRdLFxuICAgIGVuY2Fwc3VsYXRpb246IDJcbiAgfSk7XG59XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShTdHJpcGVJc3N1aW5nQ2FyZEN2Y0Rpc3BsYXlDb21wb25lbnQsIFt7XG4gICAgdHlwZTogQ29tcG9uZW50LFxuICAgIGFyZ3M6IFt7XG4gICAgICBzZWxlY3RvcjogJ25neC1zdHJpcGUtaXNzdWluZy1jYXJkLWN2Yy1kaXNwbGF5JyxcbiAgICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiICNzdHJpcGVFbGVtZW50UmVmPlxuICAgICAgQGlmIChzdGF0ZSAhPT0gJ3JlYWR5JyAmJiBsb2FkaW5nVGVtcGxhdGUpIHtcbiAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJsb2FkaW5nVGVtcGxhdGVcIiAvPlxuICAgICAgfVxuICAgIDwvZGl2PlxuICBgLFxuICAgICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV1cbiAgICB9XVxuICB9XSwgKCkgPT4gW3tcbiAgICB0eXBlOiBpMC5DaGFuZ2VEZXRlY3RvclJlZlxuICB9LCB7XG4gICAgdHlwZTogU3RyaXBlRWxlbWVudHNTZXJ2aWNlXG4gIH0sIHtcbiAgICB0eXBlOiBTdHJpcGVFbGVtZW50c0RpcmVjdGl2ZSxcbiAgICBkZWNvcmF0b3JzOiBbe1xuICAgICAgdHlwZTogT3B0aW9uYWxcbiAgICB9XVxuICB9XSwge1xuICAgIGxvYWRpbmdUZW1wbGF0ZTogW3tcbiAgICAgIHR5cGU6IENvbnRlbnRDaGlsZCxcbiAgICAgIGFyZ3M6IFtOZ3hTdHJpcGVFbGVtZW50TG9hZGluZ1RlbXBsYXRlRGlyZWN0aXZlLCB7XG4gICAgICAgIHJlYWQ6IFRlbXBsYXRlUmVmXG4gICAgICB9XVxuICAgIH1dLFxuICAgIHN0cmlwZUVsZW1lbnRSZWY6IFt7XG4gICAgICB0eXBlOiBWaWV3Q2hpbGQsXG4gICAgICBhcmdzOiBbJ3N0cmlwZUVsZW1lbnRSZWYnXVxuICAgIH1dLFxuICAgIGNvbnRhaW5lckNsYXNzOiBbe1xuICAgICAgdHlwZTogSW5wdXRcbiAgICB9XSxcbiAgICBvcHRpb25zOiBbe1xuICAgICAgdHlwZTogSW5wdXRcbiAgICB9XSxcbiAgICBlbGVtZW50c09wdGlvbnM6IFt7XG4gICAgICB0eXBlOiBJbnB1dFxuICAgIH1dLFxuICAgIHN0cmlwZTogW3tcbiAgICAgIHR5cGU6IElucHV0XG4gICAgfV0sXG4gICAgbG9hZDogW3tcbiAgICAgIHR5cGU6IE91dHB1dFxuICAgIH1dXG4gIH0pO1xufSkoKTtcbmNsYXNzIFN0cmlwZUlzc3VpbmdDYXJkRXhwaXJ5RGlzcGxheUNvbXBvbmVudCB7XG4gIGNkcjtcbiAgc3RyaXBlRWxlbWVudHNTZXJ2aWNlO1xuICBlbGVtZW50c1Byb3ZpZGVyO1xuICBsb2FkaW5nVGVtcGxhdGU7XG4gIHN0cmlwZUVsZW1lbnRSZWY7XG4gIGVsZW1lbnQ7XG4gIGNvbnRhaW5lckNsYXNzO1xuICBvcHRpb25zO1xuICBlbGVtZW50c09wdGlvbnM7XG4gIHN0cmlwZTtcbiAgbG9hZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgZWxlbWVudHM7XG4gIHN0YXRlID0gJ25vdHJlYWR5JztcbiAgZWxlbWVudHNTdWJzY3JpcHRpb247XG4gIGNvbnN0cnVjdG9yKGNkciwgc3RyaXBlRWxlbWVudHNTZXJ2aWNlLCBlbGVtZW50c1Byb3ZpZGVyKSB7XG4gICAgdGhpcy5jZHIgPSBjZHI7XG4gICAgdGhpcy5zdHJpcGVFbGVtZW50c1NlcnZpY2UgPSBzdHJpcGVFbGVtZW50c1NlcnZpY2U7XG4gICAgdGhpcy5lbGVtZW50c1Byb3ZpZGVyID0gZWxlbWVudHNQcm92aWRlcjtcbiAgfVxuICBhc3luYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XG4gICAgdGhpcy5zdGF0ZSA9ICdzdGFydGluZyc7XG4gICAgbGV0IHVwZGF0ZUVsZW1lbnRzID0gZmFsc2U7XG4gICAgaWYgKCF0aGlzLmVsZW1lbnRzUHJvdmlkZXIgJiYgKGNoYW5nZXMuZWxlbWVudHNPcHRpb25zIHx8IGNoYW5nZXMuc3RyaXBlIHx8ICF0aGlzLmVsZW1lbnRzKSkge1xuICAgICAgdGhpcy5lbGVtZW50cyA9IGF3YWl0IHRoaXMuc3RyaXBlRWxlbWVudHNTZXJ2aWNlLmVsZW1lbnRzKHRoaXMuc3RyaXBlLCB0aGlzLmVsZW1lbnRzT3B0aW9ucykudG9Qcm9taXNlKCk7XG4gICAgICB1cGRhdGVFbGVtZW50cyA9IHRydWU7XG4gICAgfVxuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLnN0cmlwZUVsZW1lbnRzU2VydmljZS5tZXJnZU9wdGlvbnModGhpcy5vcHRpb25zLCB0aGlzLmNvbnRhaW5lckNsYXNzKTtcbiAgICBpZiAoY2hhbmdlcy5vcHRpb25zIHx8IGNoYW5nZXMuY29udGFpbmVyQ2xhc3MgfHwgIXRoaXMuZWxlbWVudCB8fCB1cGRhdGVFbGVtZW50cykge1xuICAgICAgaWYgKHRoaXMuZWxlbWVudCAmJiAhdXBkYXRlRWxlbWVudHMpIHtcbiAgICAgICAgdGhpcy51cGRhdGUob3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudHMgJiYgdXBkYXRlRWxlbWVudHMpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBhc3luYyBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5zdHJpcGVFbGVtZW50c1NlcnZpY2UubWVyZ2VPcHRpb25zKHRoaXMub3B0aW9ucywgdGhpcy5jb250YWluZXJDbGFzcyk7XG4gICAgaWYgKHRoaXMuZWxlbWVudHNQcm92aWRlcikge1xuICAgICAgdGhpcy5lbGVtZW50c1N1YnNjcmlwdGlvbiA9IHRoaXMuZWxlbWVudHNQcm92aWRlci5lbGVtZW50cy5zdWJzY3JpYmUoZWxlbWVudHMgPT4ge1xuICAgICAgICB0aGlzLmVsZW1lbnRzID0gZWxlbWVudHM7XG4gICAgICAgIHRoaXMuY3JlYXRlRWxlbWVudChvcHRpb25zKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PT0gJ25vdHJlYWR5Jykge1xuICAgICAgdGhpcy5zdGF0ZSA9ICdzdGFydGluZyc7XG4gICAgICB0aGlzLmVsZW1lbnRzID0gYXdhaXQgdGhpcy5zdHJpcGVFbGVtZW50c1NlcnZpY2UuZWxlbWVudHModGhpcy5zdHJpcGUpLnRvUHJvbWlzZSgpO1xuICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnQuZGVzdHJveSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5lbGVtZW50c1N1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5lbGVtZW50c1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuICB1cGRhdGUob3B0aW9ucykge1xuICAgIHRoaXMuZWxlbWVudC51cGRhdGUob3B0aW9ucyk7XG4gIH1cbiAgY3JlYXRlRWxlbWVudChvcHRpb25zKSB7XG4gICAgdGhpcy5zdGF0ZSA9ICdyZWFkeSc7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZWxlbWVudC51bm1vdW50KCk7XG4gICAgfVxuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuZWxlbWVudHMuY3JlYXRlKCdpc3N1aW5nQ2FyZEV4cGlyeURpc3BsYXknLCBvcHRpb25zKTtcbiAgICB0aGlzLmVsZW1lbnQubW91bnQodGhpcy5zdHJpcGVFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIHRoaXMubG9hZC5lbWl0KHRoaXMuZWxlbWVudCk7XG4gIH1cbiAgc3RhdGljIMm1ZmFjID0gZnVuY3Rpb24gU3RyaXBlSXNzdWluZ0NhcmRFeHBpcnlEaXNwbGF5Q29tcG9uZW50X0ZhY3RvcnkoX19uZ0ZhY3RvcnlUeXBlX18pIHtcbiAgICByZXR1cm4gbmV3IChfX25nRmFjdG9yeVR5cGVfXyB8fCBTdHJpcGVJc3N1aW5nQ2FyZEV4cGlyeURpc3BsYXlDb21wb25lbnQpKGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuQ2hhbmdlRGV0ZWN0b3JSZWYpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KFN0cmlwZUVsZW1lbnRzU2VydmljZSksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoU3RyaXBlRWxlbWVudHNEaXJlY3RpdmUsIDgpKTtcbiAgfTtcbiAgc3RhdGljIMm1Y21wID0gLyogQF9fUFVSRV9fICovaTAuybXJtWRlZmluZUNvbXBvbmVudCh7XG4gICAgdHlwZTogU3RyaXBlSXNzdWluZ0NhcmRFeHBpcnlEaXNwbGF5Q29tcG9uZW50LFxuICAgIHNlbGVjdG9yczogW1tcIm5neC1zdHJpcGUtaXNzdWluZy1jYXJkLWV4cGlyeS1kaXNwbGF5XCJdXSxcbiAgICBjb250ZW50UXVlcmllczogZnVuY3Rpb24gU3RyaXBlSXNzdWluZ0NhcmRFeHBpcnlEaXNwbGF5Q29tcG9uZW50X0NvbnRlbnRRdWVyaWVzKHJmLCBjdHgsIGRpckluZGV4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybVjb250ZW50UXVlcnkoZGlySW5kZXgsIE5neFN0cmlwZUVsZW1lbnRMb2FkaW5nVGVtcGxhdGVEaXJlY3RpdmUsIDUsIFRlbXBsYXRlUmVmKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZiAmIDIpIHtcbiAgICAgICAgbGV0IF90O1xuICAgICAgICBpMC7Jtcm1cXVlcnlSZWZyZXNoKF90ID0gaTAuybXJtWxvYWRRdWVyeSgpKSAmJiAoY3R4LmxvYWRpbmdUZW1wbGF0ZSA9IF90LmZpcnN0KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHZpZXdRdWVyeTogZnVuY3Rpb24gU3RyaXBlSXNzdWluZ0NhcmRFeHBpcnlEaXNwbGF5Q29tcG9uZW50X1F1ZXJ5KHJmLCBjdHgpIHtcbiAgICAgIGlmIChyZiAmIDEpIHtcbiAgICAgICAgaTAuybXJtXZpZXdRdWVyeShfYzAsIDUpO1xuICAgICAgfVxuICAgICAgaWYgKHJmICYgMikge1xuICAgICAgICBsZXQgX3Q7XG4gICAgICAgIGkwLsm1ybVxdWVyeVJlZnJlc2goX3QgPSBpMC7Jtcm1bG9hZFF1ZXJ5KCkpICYmIChjdHguc3RyaXBlRWxlbWVudFJlZiA9IF90LmZpcnN0KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGlucHV0czoge1xuICAgICAgY29udGFpbmVyQ2xhc3M6IFwiY29udGFpbmVyQ2xhc3NcIixcbiAgICAgIG9wdGlvbnM6IFwib3B0aW9uc1wiLFxuICAgICAgZWxlbWVudHNPcHRpb25zOiBcImVsZW1lbnRzT3B0aW9uc1wiLFxuICAgICAgc3RyaXBlOiBcInN0cmlwZVwiXG4gICAgfSxcbiAgICBvdXRwdXRzOiB7XG4gICAgICBsb2FkOiBcImxvYWRcIlxuICAgIH0sXG4gICAgZmVhdHVyZXM6IFtpMC7Jtcm1TmdPbkNoYW5nZXNGZWF0dXJlXSxcbiAgICBkZWNsczogMyxcbiAgICB2YXJzOiAxLFxuICAgIGNvbnN0czogW1tcInN0cmlwZUVsZW1lbnRSZWZcIiwgXCJcIl0sIFsxLCBcImZpZWxkXCJdLCBbMywgXCJuZ1RlbXBsYXRlT3V0bGV0XCJdXSxcbiAgICB0ZW1wbGF0ZTogZnVuY3Rpb24gU3RyaXBlSXNzdWluZ0NhcmRFeHBpcnlEaXNwbGF5Q29tcG9uZW50X1RlbXBsYXRlKHJmLCBjdHgpIHtcbiAgICAgIGlmIChyZiAmIDEpIHtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCgwLCBcImRpdlwiLCAxLCAwKTtcbiAgICAgICAgaTAuybXJtXRlbXBsYXRlKDIsIFN0cmlwZUlzc3VpbmdDYXJkRXhwaXJ5RGlzcGxheUNvbXBvbmVudF9Db25kaXRpb25hbF8yX1RlbXBsYXRlLCAxLCAxLCBcIm5nLWNvbnRhaW5lclwiLCAyKTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZiAmIDIpIHtcbiAgICAgICAgaTAuybXJtWFkdmFuY2UoMik7XG4gICAgICAgIGkwLsm1ybVjb25kaXRpb25hbChjdHguc3RhdGUgIT09IFwicmVhZHlcIiAmJiBjdHgubG9hZGluZ1RlbXBsYXRlID8gMiA6IC0xKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRlcGVuZGVuY2llczogW0NvbW1vbk1vZHVsZSwgaTMuTmdUZW1wbGF0ZU91dGxldF0sXG4gICAgZW5jYXBzdWxhdGlvbjogMlxuICB9KTtcbn1cbigoKSA9PiB7XG4gICh0eXBlb2YgbmdEZXZNb2RlID09PSBcInVuZGVmaW5lZFwiIHx8IG5nRGV2TW9kZSkgJiYgaTAuybVzZXRDbGFzc01ldGFkYXRhKFN0cmlwZUlzc3VpbmdDYXJkRXhwaXJ5RGlzcGxheUNvbXBvbmVudCwgW3tcbiAgICB0eXBlOiBDb21wb25lbnQsXG4gICAgYXJnczogW3tcbiAgICAgIHNlbGVjdG9yOiAnbmd4LXN0cmlwZS1pc3N1aW5nLWNhcmQtZXhwaXJ5LWRpc3BsYXknLFxuICAgICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICAgIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImZpZWxkXCIgI3N0cmlwZUVsZW1lbnRSZWY+XG4gICAgICBAaWYgKHN0YXRlICE9PSAncmVhZHknICYmIGxvYWRpbmdUZW1wbGF0ZSkge1xuICAgICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImxvYWRpbmdUZW1wbGF0ZVwiIC8+XG4gICAgICB9XG4gICAgPC9kaXY+XG4gIGAsXG4gICAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXVxuICAgIH1dXG4gIH1dLCAoKSA9PiBbe1xuICAgIHR5cGU6IGkwLkNoYW5nZURldGVjdG9yUmVmXG4gIH0sIHtcbiAgICB0eXBlOiBTdHJpcGVFbGVtZW50c1NlcnZpY2VcbiAgfSwge1xuICAgIHR5cGU6IFN0cmlwZUVsZW1lbnRzRGlyZWN0aXZlLFxuICAgIGRlY29yYXRvcnM6IFt7XG4gICAgICB0eXBlOiBPcHRpb25hbFxuICAgIH1dXG4gIH1dLCB7XG4gICAgbG9hZGluZ1RlbXBsYXRlOiBbe1xuICAgICAgdHlwZTogQ29udGVudENoaWxkLFxuICAgICAgYXJnczogW05neFN0cmlwZUVsZW1lbnRMb2FkaW5nVGVtcGxhdGVEaXJlY3RpdmUsIHtcbiAgICAgICAgcmVhZDogVGVtcGxhdGVSZWZcbiAgICAgIH1dXG4gICAgfV0sXG4gICAgc3RyaXBlRWxlbWVudFJlZjogW3tcbiAgICAgIHR5cGU6IFZpZXdDaGlsZCxcbiAgICAgIGFyZ3M6IFsnc3RyaXBlRWxlbWVudFJlZiddXG4gICAgfV0sXG4gICAgY29udGFpbmVyQ2xhc3M6IFt7XG4gICAgICB0eXBlOiBJbnB1dFxuICAgIH1dLFxuICAgIG9wdGlvbnM6IFt7XG4gICAgICB0eXBlOiBJbnB1dFxuICAgIH1dLFxuICAgIGVsZW1lbnRzT3B0aW9uczogW3tcbiAgICAgIHR5cGU6IElucHV0XG4gICAgfV0sXG4gICAgc3RyaXBlOiBbe1xuICAgICAgdHlwZTogSW5wdXRcbiAgICB9XSxcbiAgICBsb2FkOiBbe1xuICAgICAgdHlwZTogT3V0cHV0XG4gICAgfV1cbiAgfSk7XG59KSgpO1xuY2xhc3MgU3RyaXBlSXNzdWluZ0NhcmROdW1iZXJEaXNwbGF5Q29tcG9uZW50IHtcbiAgY2RyO1xuICBzdHJpcGVFbGVtZW50c1NlcnZpY2U7XG4gIGVsZW1lbnRzUHJvdmlkZXI7XG4gIGxvYWRpbmdUZW1wbGF0ZTtcbiAgc3RyaXBlRWxlbWVudFJlZjtcbiAgZWxlbWVudDtcbiAgY29udGFpbmVyQ2xhc3M7XG4gIG9wdGlvbnM7XG4gIGVsZW1lbnRzT3B0aW9ucztcbiAgc3RyaXBlO1xuICBsb2FkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBlbGVtZW50cztcbiAgc3RhdGUgPSAnbm90cmVhZHknO1xuICBlbGVtZW50c1N1YnNjcmlwdGlvbjtcbiAgY29uc3RydWN0b3IoY2RyLCBzdHJpcGVFbGVtZW50c1NlcnZpY2UsIGVsZW1lbnRzUHJvdmlkZXIpIHtcbiAgICB0aGlzLmNkciA9IGNkcjtcbiAgICB0aGlzLnN0cmlwZUVsZW1lbnRzU2VydmljZSA9IHN0cmlwZUVsZW1lbnRzU2VydmljZTtcbiAgICB0aGlzLmVsZW1lbnRzUHJvdmlkZXIgPSBlbGVtZW50c1Byb3ZpZGVyO1xuICB9XG4gIGFzeW5jIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcbiAgICB0aGlzLnN0YXRlID0gJ3N0YXJ0aW5nJztcbiAgICBsZXQgdXBkYXRlRWxlbWVudHMgPSBmYWxzZTtcbiAgICBpZiAoIXRoaXMuZWxlbWVudHNQcm92aWRlciAmJiAoY2hhbmdlcy5lbGVtZW50c09wdGlvbnMgfHwgY2hhbmdlcy5zdHJpcGUgfHwgIXRoaXMuZWxlbWVudHMpKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzID0gYXdhaXQgdGhpcy5zdHJpcGVFbGVtZW50c1NlcnZpY2UuZWxlbWVudHModGhpcy5zdHJpcGUsIHRoaXMuZWxlbWVudHNPcHRpb25zKS50b1Byb21pc2UoKTtcbiAgICAgIHVwZGF0ZUVsZW1lbnRzID0gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuc3RyaXBlRWxlbWVudHNTZXJ2aWNlLm1lcmdlT3B0aW9ucyh0aGlzLm9wdGlvbnMsIHRoaXMuY29udGFpbmVyQ2xhc3MpO1xuICAgIGlmIChjaGFuZ2VzLm9wdGlvbnMgfHwgY2hhbmdlcy5jb250YWluZXJDbGFzcyB8fCAhdGhpcy5lbGVtZW50IHx8IHVwZGF0ZUVsZW1lbnRzKSB7XG4gICAgICBpZiAodGhpcy5lbGVtZW50ICYmICF1cGRhdGVFbGVtZW50cykge1xuICAgICAgICB0aGlzLnVwZGF0ZShvcHRpb25zKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50cyAmJiB1cGRhdGVFbGVtZW50cykge1xuICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGFzeW5jIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLnN0cmlwZUVsZW1lbnRzU2VydmljZS5tZXJnZU9wdGlvbnModGhpcy5vcHRpb25zLCB0aGlzLmNvbnRhaW5lckNsYXNzKTtcbiAgICBpZiAodGhpcy5lbGVtZW50c1Byb3ZpZGVyKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzU3Vic2NyaXB0aW9uID0gdGhpcy5lbGVtZW50c1Byb3ZpZGVyLmVsZW1lbnRzLnN1YnNjcmliZShlbGVtZW50cyA9PiB7XG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSBlbGVtZW50cztcbiAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KG9wdGlvbnMpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09PSAnbm90cmVhZHknKSB7XG4gICAgICB0aGlzLnN0YXRlID0gJ3N0YXJ0aW5nJztcbiAgICAgIHRoaXMuZWxlbWVudHMgPSBhd2FpdCB0aGlzLnN0cmlwZUVsZW1lbnRzU2VydmljZS5lbGVtZW50cyh0aGlzLnN0cmlwZSkudG9Qcm9taXNlKCk7XG4gICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgfVxuICB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5kZXN0cm95KCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmVsZW1lbnRzU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG4gIHVwZGF0ZShvcHRpb25zKSB7XG4gICAgdGhpcy5lbGVtZW50LnVwZGF0ZShvcHRpb25zKTtcbiAgfVxuICBjcmVhdGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgICB0aGlzLnN0YXRlID0gJ3JlYWR5JztcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgdGhpcy5lbGVtZW50LnVubW91bnQoKTtcbiAgICB9XG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5lbGVtZW50cy5jcmVhdGUoJ2lzc3VpbmdDYXJkTnVtYmVyRGlzcGxheScsIG9wdGlvbnMpO1xuICAgIHRoaXMuZWxlbWVudC5tb3VudCh0aGlzLnN0cmlwZUVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5sb2FkLmVtaXQodGhpcy5lbGVtZW50KTtcbiAgfVxuICBzdGF0aWMgybVmYWMgPSBmdW5jdGlvbiBTdHJpcGVJc3N1aW5nQ2FyZE51bWJlckRpc3BsYXlDb21wb25lbnRfRmFjdG9yeShfX25nRmFjdG9yeVR5cGVfXykge1xuICAgIHJldHVybiBuZXcgKF9fbmdGYWN0b3J5VHlwZV9fIHx8IFN0cmlwZUlzc3VpbmdDYXJkTnVtYmVyRGlzcGxheUNvbXBvbmVudCkoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5DaGFuZ2VEZXRlY3RvclJlZiksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoU3RyaXBlRWxlbWVudHNTZXJ2aWNlKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChTdHJpcGVFbGVtZW50c0RpcmVjdGl2ZSwgOCkpO1xuICB9O1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBTdHJpcGVJc3N1aW5nQ2FyZE51bWJlckRpc3BsYXlDb21wb25lbnQsXG4gICAgc2VsZWN0b3JzOiBbW1wibmd4LXN0cmlwZS1pc3N1aW5nLWNhcmQtbnVtYmVyLWRpc3BsYXlcIl1dLFxuICAgIGNvbnRlbnRRdWVyaWVzOiBmdW5jdGlvbiBTdHJpcGVJc3N1aW5nQ2FyZE51bWJlckRpc3BsYXlDb21wb25lbnRfQ29udGVudFF1ZXJpZXMocmYsIGN0eCwgZGlySW5kZXgpIHtcbiAgICAgIGlmIChyZiAmIDEpIHtcbiAgICAgICAgaTAuybXJtWNvbnRlbnRRdWVyeShkaXJJbmRleCwgTmd4U3RyaXBlRWxlbWVudExvYWRpbmdUZW1wbGF0ZURpcmVjdGl2ZSwgNSwgVGVtcGxhdGVSZWYpO1xuICAgICAgfVxuICAgICAgaWYgKHJmICYgMikge1xuICAgICAgICBsZXQgX3Q7XG4gICAgICAgIGkwLsm1ybVxdWVyeVJlZnJlc2goX3QgPSBpMC7Jtcm1bG9hZFF1ZXJ5KCkpICYmIChjdHgubG9hZGluZ1RlbXBsYXRlID0gX3QuZmlyc3QpO1xuICAgICAgfVxuICAgIH0sXG4gICAgdmlld1F1ZXJ5OiBmdW5jdGlvbiBTdHJpcGVJc3N1aW5nQ2FyZE51bWJlckRpc3BsYXlDb21wb25lbnRfUXVlcnkocmYsIGN0eCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1dmlld1F1ZXJ5KF9jMCwgNSk7XG4gICAgICB9XG4gICAgICBpZiAocmYgJiAyKSB7XG4gICAgICAgIGxldCBfdDtcbiAgICAgICAgaTAuybXJtXF1ZXJ5UmVmcmVzaChfdCA9IGkwLsm1ybVsb2FkUXVlcnkoKSkgJiYgKGN0eC5zdHJpcGVFbGVtZW50UmVmID0gX3QuZmlyc3QpO1xuICAgICAgfVxuICAgIH0sXG4gICAgaW5wdXRzOiB7XG4gICAgICBjb250YWluZXJDbGFzczogXCJjb250YWluZXJDbGFzc1wiLFxuICAgICAgb3B0aW9uczogXCJvcHRpb25zXCIsXG4gICAgICBlbGVtZW50c09wdGlvbnM6IFwiZWxlbWVudHNPcHRpb25zXCIsXG4gICAgICBzdHJpcGU6IFwic3RyaXBlXCJcbiAgICB9LFxuICAgIG91dHB1dHM6IHtcbiAgICAgIGxvYWQ6IFwibG9hZFwiXG4gICAgfSxcbiAgICBmZWF0dXJlczogW2kwLsm1ybVOZ09uQ2hhbmdlc0ZlYXR1cmVdLFxuICAgIGRlY2xzOiAzLFxuICAgIHZhcnM6IDEsXG4gICAgY29uc3RzOiBbW1wic3RyaXBlRWxlbWVudFJlZlwiLCBcIlwiXSwgWzEsIFwiZmllbGRcIl0sIFszLCBcIm5nVGVtcGxhdGVPdXRsZXRcIl1dLFxuICAgIHRlbXBsYXRlOiBmdW5jdGlvbiBTdHJpcGVJc3N1aW5nQ2FyZE51bWJlckRpc3BsYXlDb21wb25lbnRfVGVtcGxhdGUocmYsIGN0eCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDAsIFwiZGl2XCIsIDEsIDApO1xuICAgICAgICBpMC7Jtcm1dGVtcGxhdGUoMiwgU3RyaXBlSXNzdWluZ0NhcmROdW1iZXJEaXNwbGF5Q29tcG9uZW50X0NvbmRpdGlvbmFsXzJfVGVtcGxhdGUsIDEsIDEsIFwibmctY29udGFpbmVyXCIsIDIpO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xuICAgICAgfVxuICAgICAgaWYgKHJmICYgMikge1xuICAgICAgICBpMC7Jtcm1YWR2YW5jZSgyKTtcbiAgICAgICAgaTAuybXJtWNvbmRpdGlvbmFsKGN0eC5zdGF0ZSAhPT0gXCJyZWFkeVwiICYmIGN0eC5sb2FkaW5nVGVtcGxhdGUgPyAyIDogLTEpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZGVwZW5kZW5jaWVzOiBbQ29tbW9uTW9kdWxlLCBpMy5OZ1RlbXBsYXRlT3V0bGV0XSxcbiAgICBlbmNhcHN1bGF0aW9uOiAyXG4gIH0pO1xufVxuKCgpID0+IHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoU3RyaXBlSXNzdWluZ0NhcmROdW1iZXJEaXNwbGF5Q29tcG9uZW50LCBbe1xuICAgIHR5cGU6IENvbXBvbmVudCxcbiAgICBhcmdzOiBbe1xuICAgICAgc2VsZWN0b3I6ICduZ3gtc3RyaXBlLWlzc3VpbmctY2FyZC1udW1iZXItZGlzcGxheScsXG4gICAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgICAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIiAjc3RyaXBlRWxlbWVudFJlZj5cbiAgICAgIEBpZiAoc3RhdGUgIT09ICdyZWFkeScgJiYgbG9hZGluZ1RlbXBsYXRlKSB7XG4gICAgICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwibG9hZGluZ1RlbXBsYXRlXCIgLz5cbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgYCxcbiAgICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdXG4gICAgfV1cbiAgfV0sICgpID0+IFt7XG4gICAgdHlwZTogaTAuQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgfSwge1xuICAgIHR5cGU6IFN0cmlwZUVsZW1lbnRzU2VydmljZVxuICB9LCB7XG4gICAgdHlwZTogU3RyaXBlRWxlbWVudHNEaXJlY3RpdmUsXG4gICAgZGVjb3JhdG9yczogW3tcbiAgICAgIHR5cGU6IE9wdGlvbmFsXG4gICAgfV1cbiAgfV0sIHtcbiAgICBsb2FkaW5nVGVtcGxhdGU6IFt7XG4gICAgICB0eXBlOiBDb250ZW50Q2hpbGQsXG4gICAgICBhcmdzOiBbTmd4U3RyaXBlRWxlbWVudExvYWRpbmdUZW1wbGF0ZURpcmVjdGl2ZSwge1xuICAgICAgICByZWFkOiBUZW1wbGF0ZVJlZlxuICAgICAgfV1cbiAgICB9XSxcbiAgICBzdHJpcGVFbGVtZW50UmVmOiBbe1xuICAgICAgdHlwZTogVmlld0NoaWxkLFxuICAgICAgYXJnczogWydzdHJpcGVFbGVtZW50UmVmJ11cbiAgICB9XSxcbiAgICBjb250YWluZXJDbGFzczogW3tcbiAgICAgIHR5cGU6IElucHV0XG4gICAgfV0sXG4gICAgb3B0aW9uczogW3tcbiAgICAgIHR5cGU6IElucHV0XG4gICAgfV0sXG4gICAgZWxlbWVudHNPcHRpb25zOiBbe1xuICAgICAgdHlwZTogSW5wdXRcbiAgICB9XSxcbiAgICBzdHJpcGU6IFt7XG4gICAgICB0eXBlOiBJbnB1dFxuICAgIH1dLFxuICAgIGxvYWQ6IFt7XG4gICAgICB0eXBlOiBPdXRwdXRcbiAgICB9XVxuICB9KTtcbn0pKCk7XG5jbGFzcyBTdHJpcGVJc3N1aW5nQ2FyZFBpbkRpc3BsYXlDb21wb25lbnQge1xuICBjZHI7XG4gIHN0cmlwZUVsZW1lbnRzU2VydmljZTtcbiAgZWxlbWVudHNQcm92aWRlcjtcbiAgbG9hZGluZ1RlbXBsYXRlO1xuICBzdHJpcGVFbGVtZW50UmVmO1xuICBlbGVtZW50O1xuICBjb250YWluZXJDbGFzcztcbiAgb3B0aW9ucztcbiAgZWxlbWVudHNPcHRpb25zO1xuICBzdHJpcGU7XG4gIGxvYWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGVsZW1lbnRzO1xuICBzdGF0ZSA9ICdub3RyZWFkeSc7XG4gIGVsZW1lbnRzU3Vic2NyaXB0aW9uO1xuICBjb25zdHJ1Y3RvcihjZHIsIHN0cmlwZUVsZW1lbnRzU2VydmljZSwgZWxlbWVudHNQcm92aWRlcikge1xuICAgIHRoaXMuY2RyID0gY2RyO1xuICAgIHRoaXMuc3RyaXBlRWxlbWVudHNTZXJ2aWNlID0gc3RyaXBlRWxlbWVudHNTZXJ2aWNlO1xuICAgIHRoaXMuZWxlbWVudHNQcm92aWRlciA9IGVsZW1lbnRzUHJvdmlkZXI7XG4gIH1cbiAgYXN5bmMgbmdPbkNoYW5nZXMoY2hhbmdlcykge1xuICAgIHRoaXMuc3RhdGUgPSAnc3RhcnRpbmcnO1xuICAgIGxldCB1cGRhdGVFbGVtZW50cyA9IGZhbHNlO1xuICAgIGlmICghdGhpcy5lbGVtZW50c1Byb3ZpZGVyICYmIChjaGFuZ2VzLmVsZW1lbnRzT3B0aW9ucyB8fCBjaGFuZ2VzLnN0cmlwZSB8fCAhdGhpcy5lbGVtZW50cykpIHtcbiAgICAgIHRoaXMuZWxlbWVudHMgPSBhd2FpdCB0aGlzLnN0cmlwZUVsZW1lbnRzU2VydmljZS5lbGVtZW50cyh0aGlzLnN0cmlwZSwgdGhpcy5lbGVtZW50c09wdGlvbnMpLnRvUHJvbWlzZSgpO1xuICAgICAgdXBkYXRlRWxlbWVudHMgPSB0cnVlO1xuICAgIH1cbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5zdHJpcGVFbGVtZW50c1NlcnZpY2UubWVyZ2VPcHRpb25zKHRoaXMub3B0aW9ucywgdGhpcy5jb250YWluZXJDbGFzcyk7XG4gICAgaWYgKGNoYW5nZXMub3B0aW9ucyB8fCBjaGFuZ2VzLmNvbnRhaW5lckNsYXNzIHx8ICF0aGlzLmVsZW1lbnQgfHwgdXBkYXRlRWxlbWVudHMpIHtcbiAgICAgIGlmICh0aGlzLmVsZW1lbnQgJiYgIXVwZGF0ZUVsZW1lbnRzKSB7XG4gICAgICAgIHRoaXMudXBkYXRlKG9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRzICYmIHVwZGF0ZUVsZW1lbnRzKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlRWxlbWVudChvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgYXN5bmMgbmdPbkluaXQoKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuc3RyaXBlRWxlbWVudHNTZXJ2aWNlLm1lcmdlT3B0aW9ucyh0aGlzLm9wdGlvbnMsIHRoaXMuY29udGFpbmVyQ2xhc3MpO1xuICAgIGlmICh0aGlzLmVsZW1lbnRzUHJvdmlkZXIpIHtcbiAgICAgIHRoaXMuZWxlbWVudHNTdWJzY3JpcHRpb24gPSB0aGlzLmVsZW1lbnRzUHJvdmlkZXIuZWxlbWVudHMuc3Vic2NyaWJlKGVsZW1lbnRzID0+IHtcbiAgICAgICAgdGhpcy5lbGVtZW50cyA9IGVsZW1lbnRzO1xuICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09ICdub3RyZWFkeScpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSAnc3RhcnRpbmcnO1xuICAgICAgdGhpcy5lbGVtZW50cyA9IGF3YWl0IHRoaXMuc3RyaXBlRWxlbWVudHNTZXJ2aWNlLmVsZW1lbnRzKHRoaXMuc3RyaXBlKS50b1Byb21pc2UoKTtcbiAgICAgIHRoaXMuY3JlYXRlRWxlbWVudChvcHRpb25zKTtcbiAgICB9XG4gIH1cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgdGhpcy5lbGVtZW50LmRlc3Ryb3koKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZWxlbWVudHNTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuZWxlbWVudHNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbiAgdXBkYXRlKG9wdGlvbnMpIHtcbiAgICB0aGlzLmVsZW1lbnQudXBkYXRlKG9wdGlvbnMpO1xuICB9XG4gIGNyZWF0ZUVsZW1lbnQob3B0aW9ucykge1xuICAgIHRoaXMuc3RhdGUgPSAncmVhZHknO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnQudW5tb3VudCgpO1xuICAgIH1cbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmVsZW1lbnRzLmNyZWF0ZSgnaXNzdWluZ0NhcmRQaW5EaXNwbGF5Jywgb3B0aW9ucyk7XG4gICAgdGhpcy5lbGVtZW50Lm1vdW50KHRoaXMuc3RyaXBlRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLmxvYWQuZW1pdCh0aGlzLmVsZW1lbnQpO1xuICB9XG4gIHN0YXRpYyDJtWZhYyA9IGZ1bmN0aW9uIFN0cmlwZUlzc3VpbmdDYXJkUGluRGlzcGxheUNvbXBvbmVudF9GYWN0b3J5KF9fbmdGYWN0b3J5VHlwZV9fKSB7XG4gICAgcmV0dXJuIG5ldyAoX19uZ0ZhY3RvcnlUeXBlX18gfHwgU3RyaXBlSXNzdWluZ0NhcmRQaW5EaXNwbGF5Q29tcG9uZW50KShpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLkNoYW5nZURldGVjdG9yUmVmKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChTdHJpcGVFbGVtZW50c1NlcnZpY2UpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KFN0cmlwZUVsZW1lbnRzRGlyZWN0aXZlLCA4KSk7XG4gIH07XG4gIHN0YXRpYyDJtWNtcCA9IC8qIEBfX1BVUkVfXyAqL2kwLsm1ybVkZWZpbmVDb21wb25lbnQoe1xuICAgIHR5cGU6IFN0cmlwZUlzc3VpbmdDYXJkUGluRGlzcGxheUNvbXBvbmVudCxcbiAgICBzZWxlY3RvcnM6IFtbXCJuZ3gtc3RyaXBlLWlzc3VpbmctY2FyZC1waW4tZGlzcGxheVwiXV0sXG4gICAgY29udGVudFF1ZXJpZXM6IGZ1bmN0aW9uIFN0cmlwZUlzc3VpbmdDYXJkUGluRGlzcGxheUNvbXBvbmVudF9Db250ZW50UXVlcmllcyhyZiwgY3R4LCBkaXJJbmRleCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1Y29udGVudFF1ZXJ5KGRpckluZGV4LCBOZ3hTdHJpcGVFbGVtZW50TG9hZGluZ1RlbXBsYXRlRGlyZWN0aXZlLCA1LCBUZW1wbGF0ZVJlZik7XG4gICAgICB9XG4gICAgICBpZiAocmYgJiAyKSB7XG4gICAgICAgIGxldCBfdDtcbiAgICAgICAgaTAuybXJtXF1ZXJ5UmVmcmVzaChfdCA9IGkwLsm1ybVsb2FkUXVlcnkoKSkgJiYgKGN0eC5sb2FkaW5nVGVtcGxhdGUgPSBfdC5maXJzdCk7XG4gICAgICB9XG4gICAgfSxcbiAgICB2aWV3UXVlcnk6IGZ1bmN0aW9uIFN0cmlwZUlzc3VpbmdDYXJkUGluRGlzcGxheUNvbXBvbmVudF9RdWVyeShyZiwgY3R4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybV2aWV3UXVlcnkoX2MwLCA1KTtcbiAgICAgIH1cbiAgICAgIGlmIChyZiAmIDIpIHtcbiAgICAgICAgbGV0IF90O1xuICAgICAgICBpMC7Jtcm1cXVlcnlSZWZyZXNoKF90ID0gaTAuybXJtWxvYWRRdWVyeSgpKSAmJiAoY3R4LnN0cmlwZUVsZW1lbnRSZWYgPSBfdC5maXJzdCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBpbnB1dHM6IHtcbiAgICAgIGNvbnRhaW5lckNsYXNzOiBcImNvbnRhaW5lckNsYXNzXCIsXG4gICAgICBvcHRpb25zOiBcIm9wdGlvbnNcIixcbiAgICAgIGVsZW1lbnRzT3B0aW9uczogXCJlbGVtZW50c09wdGlvbnNcIixcbiAgICAgIHN0cmlwZTogXCJzdHJpcGVcIlxuICAgIH0sXG4gICAgb3V0cHV0czoge1xuICAgICAgbG9hZDogXCJsb2FkXCJcbiAgICB9LFxuICAgIGZlYXR1cmVzOiBbaTAuybXJtU5nT25DaGFuZ2VzRmVhdHVyZV0sXG4gICAgZGVjbHM6IDMsXG4gICAgdmFyczogMSxcbiAgICBjb25zdHM6IFtbXCJzdHJpcGVFbGVtZW50UmVmXCIsIFwiXCJdLCBbMSwgXCJmaWVsZFwiXSwgWzMsIFwibmdUZW1wbGF0ZU91dGxldFwiXV0sXG4gICAgdGVtcGxhdGU6IGZ1bmN0aW9uIFN0cmlwZUlzc3VpbmdDYXJkUGluRGlzcGxheUNvbXBvbmVudF9UZW1wbGF0ZShyZiwgY3R4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoMCwgXCJkaXZcIiwgMSwgMCk7XG4gICAgICAgIGkwLsm1ybV0ZW1wbGF0ZSgyLCBTdHJpcGVJc3N1aW5nQ2FyZFBpbkRpc3BsYXlDb21wb25lbnRfQ29uZGl0aW9uYWxfMl9UZW1wbGF0ZSwgMSwgMSwgXCJuZy1jb250YWluZXJcIiwgMik7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCk7XG4gICAgICB9XG4gICAgICBpZiAocmYgJiAyKSB7XG4gICAgICAgIGkwLsm1ybVhZHZhbmNlKDIpO1xuICAgICAgICBpMC7Jtcm1Y29uZGl0aW9uYWwoY3R4LnN0YXRlICE9PSBcInJlYWR5XCIgJiYgY3R4LmxvYWRpbmdUZW1wbGF0ZSA/IDIgOiAtMSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBkZXBlbmRlbmNpZXM6IFtDb21tb25Nb2R1bGUsIGkzLk5nVGVtcGxhdGVPdXRsZXRdLFxuICAgIGVuY2Fwc3VsYXRpb246IDJcbiAgfSk7XG59XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShTdHJpcGVJc3N1aW5nQ2FyZFBpbkRpc3BsYXlDb21wb25lbnQsIFt7XG4gICAgdHlwZTogQ29tcG9uZW50LFxuICAgIGFyZ3M6IFt7XG4gICAgICBzZWxlY3RvcjogJ25neC1zdHJpcGUtaXNzdWluZy1jYXJkLXBpbi1kaXNwbGF5JyxcbiAgICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiICNzdHJpcGVFbGVtZW50UmVmPlxuICAgICAgQGlmIChzdGF0ZSAhPT0gJ3JlYWR5JyAmJiBsb2FkaW5nVGVtcGxhdGUpIHtcbiAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJsb2FkaW5nVGVtcGxhdGVcIiAvPlxuICAgICAgfVxuICAgIDwvZGl2PlxuICBgLFxuICAgICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV1cbiAgICB9XVxuICB9XSwgKCkgPT4gW3tcbiAgICB0eXBlOiBpMC5DaGFuZ2VEZXRlY3RvclJlZlxuICB9LCB7XG4gICAgdHlwZTogU3RyaXBlRWxlbWVudHNTZXJ2aWNlXG4gIH0sIHtcbiAgICB0eXBlOiBTdHJpcGVFbGVtZW50c0RpcmVjdGl2ZSxcbiAgICBkZWNvcmF0b3JzOiBbe1xuICAgICAgdHlwZTogT3B0aW9uYWxcbiAgICB9XVxuICB9XSwge1xuICAgIGxvYWRpbmdUZW1wbGF0ZTogW3tcbiAgICAgIHR5cGU6IENvbnRlbnRDaGlsZCxcbiAgICAgIGFyZ3M6IFtOZ3hTdHJpcGVFbGVtZW50TG9hZGluZ1RlbXBsYXRlRGlyZWN0aXZlLCB7XG4gICAgICAgIHJlYWQ6IFRlbXBsYXRlUmVmXG4gICAgICB9XVxuICAgIH1dLFxuICAgIHN0cmlwZUVsZW1lbnRSZWY6IFt7XG4gICAgICB0eXBlOiBWaWV3Q2hpbGQsXG4gICAgICBhcmdzOiBbJ3N0cmlwZUVsZW1lbnRSZWYnXVxuICAgIH1dLFxuICAgIGNvbnRhaW5lckNsYXNzOiBbe1xuICAgICAgdHlwZTogSW5wdXRcbiAgICB9XSxcbiAgICBvcHRpb25zOiBbe1xuICAgICAgdHlwZTogSW5wdXRcbiAgICB9XSxcbiAgICBlbGVtZW50c09wdGlvbnM6IFt7XG4gICAgICB0eXBlOiBJbnB1dFxuICAgIH1dLFxuICAgIHN0cmlwZTogW3tcbiAgICAgIHR5cGU6IElucHV0XG4gICAgfV0sXG4gICAgbG9hZDogW3tcbiAgICAgIHR5cGU6IE91dHB1dFxuICAgIH1dXG4gIH0pO1xufSkoKTtcbmNsYXNzIFN0cmlwZUxpbmtBdXRoZW50aWNhdGlvbkNvbXBvbmVudCB7XG4gIHN0cmlwZUVsZW1lbnRzU2VydmljZTtcbiAgZWxlbWVudHNQcm92aWRlcjtcbiAgbG9hZGluZ1RlbXBsYXRlO1xuICBzdHJpcGVFbGVtZW50UmVmO1xuICBlbGVtZW50O1xuICBjb250YWluZXJDbGFzcztcbiAgb3B0aW9ucztcbiAgZWxlbWVudHNPcHRpb25zO1xuICBzdHJpcGU7XG4gIGxvYWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGJsdXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgZm9jdXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHJlYWR5ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBlc2NhcGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGxvYWRlcnJvciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgbG9hZGVyc3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGVsZW1lbnRzO1xuICBzdGF0ZSA9ICdub3RyZWFkeSc7XG4gIGVsZW1lbnRzU3Vic2NyaXB0aW9uO1xuICBjb25zdHJ1Y3RvcihzdHJpcGVFbGVtZW50c1NlcnZpY2UsIGVsZW1lbnRzUHJvdmlkZXIpIHtcbiAgICB0aGlzLnN0cmlwZUVsZW1lbnRzU2VydmljZSA9IHN0cmlwZUVsZW1lbnRzU2VydmljZTtcbiAgICB0aGlzLmVsZW1lbnRzUHJvdmlkZXIgPSBlbGVtZW50c1Byb3ZpZGVyO1xuICB9XG4gIGFzeW5jIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcbiAgICB0aGlzLnN0YXRlID0gJ3N0YXJ0aW5nJztcbiAgICBsZXQgdXBkYXRlRWxlbWVudHMgPSBmYWxzZTtcbiAgICBpZiAoIXRoaXMuZWxlbWVudHNQcm92aWRlciAmJiAoY2hhbmdlcy5lbGVtZW50c09wdGlvbnMgfHwgY2hhbmdlcy5zdHJpcGUgfHwgIXRoaXMuZWxlbWVudHMpKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzID0gYXdhaXQgdGhpcy5zdHJpcGVFbGVtZW50c1NlcnZpY2UuZWxlbWVudHModGhpcy5zdHJpcGUsIHRoaXMuZWxlbWVudHNPcHRpb25zKS50b1Byb21pc2UoKTtcbiAgICAgIHVwZGF0ZUVsZW1lbnRzID0gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuc3RyaXBlRWxlbWVudHNTZXJ2aWNlLm1lcmdlT3B0aW9ucyh0aGlzLm9wdGlvbnMsIHRoaXMuY29udGFpbmVyQ2xhc3MpO1xuICAgIGlmIChjaGFuZ2VzLm9wdGlvbnMgfHwgY2hhbmdlcy5jb250YWluZXJDbGFzcyB8fCAhdGhpcy5lbGVtZW50IHx8IHVwZGF0ZUVsZW1lbnRzKSB7XG4gICAgICBpZiAodGhpcy5lbGVtZW50cyAmJiB1cGRhdGVFbGVtZW50cykge1xuICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc3RhdGUgPSAncmVhZHknO1xuICB9XG4gIGFzeW5jIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLnN0cmlwZUVsZW1lbnRzU2VydmljZS5tZXJnZU9wdGlvbnModGhpcy5vcHRpb25zLCB0aGlzLmNvbnRhaW5lckNsYXNzKTtcbiAgICBpZiAodGhpcy5lbGVtZW50c1Byb3ZpZGVyKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzU3Vic2NyaXB0aW9uID0gdGhpcy5lbGVtZW50c1Byb3ZpZGVyLmVsZW1lbnRzLnN1YnNjcmliZShlbGVtZW50cyA9PiB7XG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSBlbGVtZW50cztcbiAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KG9wdGlvbnMpO1xuICAgICAgICB0aGlzLnN0YXRlID0gJ3JlYWR5JztcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PT0gJ25vdHJlYWR5Jykge1xuICAgICAgdGhpcy5zdGF0ZSA9ICdzdGFydGluZyc7XG4gICAgICB0aGlzLmVsZW1lbnRzID0gYXdhaXQgdGhpcy5zdHJpcGVFbGVtZW50c1NlcnZpY2UuZWxlbWVudHModGhpcy5zdHJpcGUpLnRvUHJvbWlzZSgpO1xuICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KG9wdGlvbnMpO1xuICAgICAgdGhpcy5zdGF0ZSA9ICdyZWFkeSc7XG4gICAgfVxuICB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5kZXN0cm95KCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmVsZW1lbnRzU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZFxuICAgKi9cbiAgZ2V0TGlua0F1dGhlbnRpY2F0aW9uRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICB9XG4gIGNyZWF0ZUVsZW1lbnQob3B0aW9ucykge1xuICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZWxlbWVudC51bm1vdW50KCk7XG4gICAgfVxuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuZWxlbWVudHMuY3JlYXRlKCdsaW5rQXV0aGVudGljYXRpb24nLCBvcHRpb25zKTtcbiAgICB0aGlzLmVsZW1lbnQub24oJ2NoYW5nZScsIGV2ID0+IHRoaXMuY2hhbmdlLmVtaXQoZXYpKTtcbiAgICB0aGlzLmVsZW1lbnQub24oJ2JsdXInLCAoKSA9PiB0aGlzLmJsdXIuZW1pdCgpKTtcbiAgICB0aGlzLmVsZW1lbnQub24oJ2ZvY3VzJywgKCkgPT4gdGhpcy5mb2N1cy5lbWl0KCkpO1xuICAgIHRoaXMuZWxlbWVudC5vbigncmVhZHknLCAoKSA9PiB0aGlzLnJlYWR5LmVtaXQoKSk7XG4gICAgdGhpcy5lbGVtZW50Lm9uKCdlc2NhcGUnLCAoKSA9PiB0aGlzLmVzY2FwZS5lbWl0KCkpO1xuICAgIHRoaXMuZWxlbWVudC5vbignbG9hZGVycm9yJywgKCkgPT4gdGhpcy5sb2FkZXJyb3IuZW1pdCgpKTtcbiAgICB0aGlzLmVsZW1lbnQub24oJ2xvYWRlcnN0YXJ0JywgKCkgPT4gdGhpcy5sb2FkZXJzdGFydC5lbWl0KCkpO1xuICAgIHRoaXMuZWxlbWVudC5tb3VudCh0aGlzLnN0cmlwZUVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5sb2FkLmVtaXQodGhpcy5lbGVtZW50KTtcbiAgfVxuICBzdGF0aWMgybVmYWMgPSBmdW5jdGlvbiBTdHJpcGVMaW5rQXV0aGVudGljYXRpb25Db21wb25lbnRfRmFjdG9yeShfX25nRmFjdG9yeVR5cGVfXykge1xuICAgIHJldHVybiBuZXcgKF9fbmdGYWN0b3J5VHlwZV9fIHx8IFN0cmlwZUxpbmtBdXRoZW50aWNhdGlvbkNvbXBvbmVudCkoaTAuybXJtWRpcmVjdGl2ZUluamVjdChTdHJpcGVFbGVtZW50c1NlcnZpY2UpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KFN0cmlwZUVsZW1lbnRzRGlyZWN0aXZlLCA4KSk7XG4gIH07XG4gIHN0YXRpYyDJtWNtcCA9IC8qIEBfX1BVUkVfXyAqL2kwLsm1ybVkZWZpbmVDb21wb25lbnQoe1xuICAgIHR5cGU6IFN0cmlwZUxpbmtBdXRoZW50aWNhdGlvbkNvbXBvbmVudCxcbiAgICBzZWxlY3RvcnM6IFtbXCJuZ3gtc3RyaXBlLWxpbmstYXV0aGVudGljYXRpb25cIl1dLFxuICAgIGNvbnRlbnRRdWVyaWVzOiBmdW5jdGlvbiBTdHJpcGVMaW5rQXV0aGVudGljYXRpb25Db21wb25lbnRfQ29udGVudFF1ZXJpZXMocmYsIGN0eCwgZGlySW5kZXgpIHtcbiAgICAgIGlmIChyZiAmIDEpIHtcbiAgICAgICAgaTAuybXJtWNvbnRlbnRRdWVyeShkaXJJbmRleCwgTmd4U3RyaXBlRWxlbWVudExvYWRpbmdUZW1wbGF0ZURpcmVjdGl2ZSwgNSwgVGVtcGxhdGVSZWYpO1xuICAgICAgfVxuICAgICAgaWYgKHJmICYgMikge1xuICAgICAgICBsZXQgX3Q7XG4gICAgICAgIGkwLsm1ybVxdWVyeVJlZnJlc2goX3QgPSBpMC7Jtcm1bG9hZFF1ZXJ5KCkpICYmIChjdHgubG9hZGluZ1RlbXBsYXRlID0gX3QuZmlyc3QpO1xuICAgICAgfVxuICAgIH0sXG4gICAgdmlld1F1ZXJ5OiBmdW5jdGlvbiBTdHJpcGVMaW5rQXV0aGVudGljYXRpb25Db21wb25lbnRfUXVlcnkocmYsIGN0eCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1dmlld1F1ZXJ5KF9jMCwgNSk7XG4gICAgICB9XG4gICAgICBpZiAocmYgJiAyKSB7XG4gICAgICAgIGxldCBfdDtcbiAgICAgICAgaTAuybXJtXF1ZXJ5UmVmcmVzaChfdCA9IGkwLsm1ybVsb2FkUXVlcnkoKSkgJiYgKGN0eC5zdHJpcGVFbGVtZW50UmVmID0gX3QuZmlyc3QpO1xuICAgICAgfVxuICAgIH0sXG4gICAgaW5wdXRzOiB7XG4gICAgICBjb250YWluZXJDbGFzczogXCJjb250YWluZXJDbGFzc1wiLFxuICAgICAgb3B0aW9uczogXCJvcHRpb25zXCIsXG4gICAgICBlbGVtZW50c09wdGlvbnM6IFwiZWxlbWVudHNPcHRpb25zXCIsXG4gICAgICBzdHJpcGU6IFwic3RyaXBlXCJcbiAgICB9LFxuICAgIG91dHB1dHM6IHtcbiAgICAgIGxvYWQ6IFwibG9hZFwiLFxuICAgICAgYmx1cjogXCJibHVyXCIsXG4gICAgICBjaGFuZ2U6IFwiY2hhbmdlXCIsXG4gICAgICBmb2N1czogXCJmb2N1c1wiLFxuICAgICAgcmVhZHk6IFwicmVhZHlcIixcbiAgICAgIGVzY2FwZTogXCJlc2NhcGVcIixcbiAgICAgIGxvYWRlcnJvcjogXCJsb2FkZXJyb3JcIixcbiAgICAgIGxvYWRlcnN0YXJ0OiBcImxvYWRlcnN0YXJ0XCJcbiAgICB9LFxuICAgIGZlYXR1cmVzOiBbaTAuybXJtU5nT25DaGFuZ2VzRmVhdHVyZV0sXG4gICAgZGVjbHM6IDMsXG4gICAgdmFyczogMSxcbiAgICBjb25zdHM6IFtbXCJzdHJpcGVFbGVtZW50UmVmXCIsIFwiXCJdLCBbMSwgXCJmaWVsZFwiXSwgWzMsIFwibmdUZW1wbGF0ZU91dGxldFwiXV0sXG4gICAgdGVtcGxhdGU6IGZ1bmN0aW9uIFN0cmlwZUxpbmtBdXRoZW50aWNhdGlvbkNvbXBvbmVudF9UZW1wbGF0ZShyZiwgY3R4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoMCwgXCJkaXZcIiwgMSwgMCk7XG4gICAgICAgIGkwLsm1ybV0ZW1wbGF0ZSgyLCBTdHJpcGVMaW5rQXV0aGVudGljYXRpb25Db21wb25lbnRfQ29uZGl0aW9uYWxfMl9UZW1wbGF0ZSwgMSwgMSwgXCJuZy1jb250YWluZXJcIiwgMik7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCk7XG4gICAgICB9XG4gICAgICBpZiAocmYgJiAyKSB7XG4gICAgICAgIGkwLsm1ybVhZHZhbmNlKDIpO1xuICAgICAgICBpMC7Jtcm1Y29uZGl0aW9uYWwoY3R4LnN0YXRlICE9PSBcInJlYWR5XCIgJiYgY3R4LmxvYWRpbmdUZW1wbGF0ZSA/IDIgOiAtMSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBkZXBlbmRlbmNpZXM6IFtDb21tb25Nb2R1bGUsIGkzLk5nVGVtcGxhdGVPdXRsZXRdLFxuICAgIGVuY2Fwc3VsYXRpb246IDJcbiAgfSk7XG59XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShTdHJpcGVMaW5rQXV0aGVudGljYXRpb25Db21wb25lbnQsIFt7XG4gICAgdHlwZTogQ29tcG9uZW50LFxuICAgIGFyZ3M6IFt7XG4gICAgICBzZWxlY3RvcjogJ25neC1zdHJpcGUtbGluay1hdXRoZW50aWNhdGlvbicsXG4gICAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgICAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIiAjc3RyaXBlRWxlbWVudFJlZj5cbiAgICAgIEBpZiAoc3RhdGUgIT09ICdyZWFkeScgJiYgbG9hZGluZ1RlbXBsYXRlKSB7XG4gICAgICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwibG9hZGluZ1RlbXBsYXRlXCIgLz5cbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgYCxcbiAgICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdXG4gICAgfV1cbiAgfV0sICgpID0+IFt7XG4gICAgdHlwZTogU3RyaXBlRWxlbWVudHNTZXJ2aWNlXG4gIH0sIHtcbiAgICB0eXBlOiBTdHJpcGVFbGVtZW50c0RpcmVjdGl2ZSxcbiAgICBkZWNvcmF0b3JzOiBbe1xuICAgICAgdHlwZTogT3B0aW9uYWxcbiAgICB9XVxuICB9XSwge1xuICAgIGxvYWRpbmdUZW1wbGF0ZTogW3tcbiAgICAgIHR5cGU6IENvbnRlbnRDaGlsZCxcbiAgICAgIGFyZ3M6IFtOZ3hTdHJpcGVFbGVtZW50TG9hZGluZ1RlbXBsYXRlRGlyZWN0aXZlLCB7XG4gICAgICAgIHJlYWQ6IFRlbXBsYXRlUmVmXG4gICAgICB9XVxuICAgIH1dLFxuICAgIHN0cmlwZUVsZW1lbnRSZWY6IFt7XG4gICAgICB0eXBlOiBWaWV3Q2hpbGQsXG4gICAgICBhcmdzOiBbJ3N0cmlwZUVsZW1lbnRSZWYnXVxuICAgIH1dLFxuICAgIGNvbnRhaW5lckNsYXNzOiBbe1xuICAgICAgdHlwZTogSW5wdXRcbiAgICB9XSxcbiAgICBvcHRpb25zOiBbe1xuICAgICAgdHlwZTogSW5wdXRcbiAgICB9XSxcbiAgICBlbGVtZW50c09wdGlvbnM6IFt7XG4gICAgICB0eXBlOiBJbnB1dFxuICAgIH1dLFxuICAgIHN0cmlwZTogW3tcbiAgICAgIHR5cGU6IElucHV0XG4gICAgfV0sXG4gICAgbG9hZDogW3tcbiAgICAgIHR5cGU6IE91dHB1dFxuICAgIH1dLFxuICAgIGJsdXI6IFt7XG4gICAgICB0eXBlOiBPdXRwdXRcbiAgICB9XSxcbiAgICBjaGFuZ2U6IFt7XG4gICAgICB0eXBlOiBPdXRwdXRcbiAgICB9XSxcbiAgICBmb2N1czogW3tcbiAgICAgIHR5cGU6IE91dHB1dFxuICAgIH1dLFxuICAgIHJlYWR5OiBbe1xuICAgICAgdHlwZTogT3V0cHV0XG4gICAgfV0sXG4gICAgZXNjYXBlOiBbe1xuICAgICAgdHlwZTogT3V0cHV0XG4gICAgfV0sXG4gICAgbG9hZGVycm9yOiBbe1xuICAgICAgdHlwZTogT3V0cHV0XG4gICAgfV0sXG4gICAgbG9hZGVyc3RhcnQ6IFt7XG4gICAgICB0eXBlOiBPdXRwdXRcbiAgICB9XVxuICB9KTtcbn0pKCk7XG5jbGFzcyBTdHJpcGVQMjRCYW5rQ29tcG9uZW50IHtcbiAgc3RyaXBlRWxlbWVudHNTZXJ2aWNlO1xuICBlbGVtZW50c1Byb3ZpZGVyO1xuICBsb2FkaW5nVGVtcGxhdGU7XG4gIHN0cmlwZUVsZW1lbnRSZWY7XG4gIGVsZW1lbnQ7XG4gIGNvbnRhaW5lckNsYXNzO1xuICBvcHRpb25zO1xuICBlbGVtZW50c09wdGlvbnM7XG4gIHN0cmlwZTtcbiAgbG9hZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgYmx1ciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBmb2N1cyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcmVhZHkgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGVzY2FwZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgZWxlbWVudHM7XG4gIHN0YXRlID0gJ25vdHJlYWR5JztcbiAgZWxlbWVudHNTdWJzY3JpcHRpb247XG4gIGNvbnN0cnVjdG9yKHN0cmlwZUVsZW1lbnRzU2VydmljZSwgZWxlbWVudHNQcm92aWRlcikge1xuICAgIHRoaXMuc3RyaXBlRWxlbWVudHNTZXJ2aWNlID0gc3RyaXBlRWxlbWVudHNTZXJ2aWNlO1xuICAgIHRoaXMuZWxlbWVudHNQcm92aWRlciA9IGVsZW1lbnRzUHJvdmlkZXI7XG4gIH1cbiAgYXN5bmMgbmdPbkNoYW5nZXMoY2hhbmdlcykge1xuICAgIHRoaXMuc3RhdGUgPSAnc3RhcnRpbmcnO1xuICAgIGxldCB1cGRhdGVFbGVtZW50cyA9IGZhbHNlO1xuICAgIGlmICghdGhpcy5lbGVtZW50c1Byb3ZpZGVyICYmIChjaGFuZ2VzLmVsZW1lbnRzT3B0aW9ucyB8fCBjaGFuZ2VzLnN0cmlwZSB8fCAhdGhpcy5lbGVtZW50cykpIHtcbiAgICAgIHRoaXMuZWxlbWVudHMgPSBhd2FpdCB0aGlzLnN0cmlwZUVsZW1lbnRzU2VydmljZS5lbGVtZW50cyh0aGlzLnN0cmlwZSwgdGhpcy5lbGVtZW50c09wdGlvbnMpLnRvUHJvbWlzZSgpO1xuICAgICAgdXBkYXRlRWxlbWVudHMgPSB0cnVlO1xuICAgIH1cbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5zdHJpcGVFbGVtZW50c1NlcnZpY2UubWVyZ2VPcHRpb25zKHRoaXMub3B0aW9ucywgdGhpcy5jb250YWluZXJDbGFzcyk7XG4gICAgaWYgKGNoYW5nZXMub3B0aW9ucyB8fCBjaGFuZ2VzLmNvbnRhaW5lckNsYXNzIHx8ICF0aGlzLmVsZW1lbnQgfHwgdXBkYXRlRWxlbWVudHMpIHtcbiAgICAgIGlmICh0aGlzLmVsZW1lbnQgJiYgIXVwZGF0ZUVsZW1lbnRzKSB7XG4gICAgICAgIHRoaXMudXBkYXRlKG9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRzICYmIHVwZGF0ZUVsZW1lbnRzKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlRWxlbWVudChvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zdGF0ZSA9ICdyZWFkeSc7XG4gIH1cbiAgYXN5bmMgbmdPbkluaXQoKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuc3RyaXBlRWxlbWVudHNTZXJ2aWNlLm1lcmdlT3B0aW9ucyh0aGlzLm9wdGlvbnMsIHRoaXMuY29udGFpbmVyQ2xhc3MpO1xuICAgIGlmICh0aGlzLmVsZW1lbnRzUHJvdmlkZXIpIHtcbiAgICAgIHRoaXMuZWxlbWVudHNTdWJzY3JpcHRpb24gPSB0aGlzLmVsZW1lbnRzUHJvdmlkZXIuZWxlbWVudHMuc3Vic2NyaWJlKGVsZW1lbnRzID0+IHtcbiAgICAgICAgdGhpcy5lbGVtZW50cyA9IGVsZW1lbnRzO1xuICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAncmVhZHknO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09PSAnbm90cmVhZHknKSB7XG4gICAgICB0aGlzLnN0YXRlID0gJ3N0YXJ0aW5nJztcbiAgICAgIHRoaXMuZWxlbWVudHMgPSBhd2FpdCB0aGlzLnN0cmlwZUVsZW1lbnRzU2VydmljZS5lbGVtZW50cyh0aGlzLnN0cmlwZSkudG9Qcm9taXNlKCk7XG4gICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgICB0aGlzLnN0YXRlID0gJ3JlYWR5JztcbiAgICB9XG4gIH1cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgdGhpcy5lbGVtZW50LmRlc3Ryb3koKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZWxlbWVudHNTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuZWxlbWVudHNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbiAgdXBkYXRlKG9wdGlvbnMpIHtcbiAgICB0aGlzLmVsZW1lbnQudXBkYXRlKG9wdGlvbnMpO1xuICB9XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZFxuICAgKi9cbiAgZ2V0UDI0QmFua2VsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgfVxuICBjcmVhdGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnQudW5tb3VudCgpO1xuICAgIH1cbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmVsZW1lbnRzLmNyZWF0ZSgncDI0QmFuaycsIG9wdGlvbnMpO1xuICAgIHRoaXMuZWxlbWVudC5vbignY2hhbmdlJywgZXYgPT4gdGhpcy5jaGFuZ2UuZW1pdChldikpO1xuICAgIHRoaXMuZWxlbWVudC5vbignYmx1cicsICgpID0+IHRoaXMuYmx1ci5lbWl0KCkpO1xuICAgIHRoaXMuZWxlbWVudC5vbignZm9jdXMnLCAoKSA9PiB0aGlzLmZvY3VzLmVtaXQoKSk7XG4gICAgdGhpcy5lbGVtZW50Lm9uKCdyZWFkeScsICgpID0+IHRoaXMucmVhZHkuZW1pdCgpKTtcbiAgICB0aGlzLmVsZW1lbnQub24oJ2VzY2FwZScsICgpID0+IHRoaXMuZXNjYXBlLmVtaXQoKSk7XG4gICAgdGhpcy5lbGVtZW50Lm1vdW50KHRoaXMuc3RyaXBlRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLmxvYWQuZW1pdCh0aGlzLmVsZW1lbnQpO1xuICB9XG4gIHN0YXRpYyDJtWZhYyA9IGZ1bmN0aW9uIFN0cmlwZVAyNEJhbmtDb21wb25lbnRfRmFjdG9yeShfX25nRmFjdG9yeVR5cGVfXykge1xuICAgIHJldHVybiBuZXcgKF9fbmdGYWN0b3J5VHlwZV9fIHx8IFN0cmlwZVAyNEJhbmtDb21wb25lbnQpKGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoU3RyaXBlRWxlbWVudHNTZXJ2aWNlKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChTdHJpcGVFbGVtZW50c0RpcmVjdGl2ZSwgOCkpO1xuICB9O1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBTdHJpcGVQMjRCYW5rQ29tcG9uZW50LFxuICAgIHNlbGVjdG9yczogW1tcIm5neC1zdHJpcGUtcDI0LWJhbmtcIl1dLFxuICAgIGNvbnRlbnRRdWVyaWVzOiBmdW5jdGlvbiBTdHJpcGVQMjRCYW5rQ29tcG9uZW50X0NvbnRlbnRRdWVyaWVzKHJmLCBjdHgsIGRpckluZGV4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybVjb250ZW50UXVlcnkoZGlySW5kZXgsIE5neFN0cmlwZUVsZW1lbnRMb2FkaW5nVGVtcGxhdGVEaXJlY3RpdmUsIDUsIFRlbXBsYXRlUmVmKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZiAmIDIpIHtcbiAgICAgICAgbGV0IF90O1xuICAgICAgICBpMC7Jtcm1cXVlcnlSZWZyZXNoKF90ID0gaTAuybXJtWxvYWRRdWVyeSgpKSAmJiAoY3R4LmxvYWRpbmdUZW1wbGF0ZSA9IF90LmZpcnN0KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHZpZXdRdWVyeTogZnVuY3Rpb24gU3RyaXBlUDI0QmFua0NvbXBvbmVudF9RdWVyeShyZiwgY3R4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybV2aWV3UXVlcnkoX2MwLCA1KTtcbiAgICAgIH1cbiAgICAgIGlmIChyZiAmIDIpIHtcbiAgICAgICAgbGV0IF90O1xuICAgICAgICBpMC7Jtcm1cXVlcnlSZWZyZXNoKF90ID0gaTAuybXJtWxvYWRRdWVyeSgpKSAmJiAoY3R4LnN0cmlwZUVsZW1lbnRSZWYgPSBfdC5maXJzdCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBpbnB1dHM6IHtcbiAgICAgIGNvbnRhaW5lckNsYXNzOiBcImNvbnRhaW5lckNsYXNzXCIsXG4gICAgICBvcHRpb25zOiBcIm9wdGlvbnNcIixcbiAgICAgIGVsZW1lbnRzT3B0aW9uczogXCJlbGVtZW50c09wdGlvbnNcIixcbiAgICAgIHN0cmlwZTogXCJzdHJpcGVcIlxuICAgIH0sXG4gICAgb3V0cHV0czoge1xuICAgICAgbG9hZDogXCJsb2FkXCIsXG4gICAgICBibHVyOiBcImJsdXJcIixcbiAgICAgIGNoYW5nZTogXCJjaGFuZ2VcIixcbiAgICAgIGZvY3VzOiBcImZvY3VzXCIsXG4gICAgICByZWFkeTogXCJyZWFkeVwiLFxuICAgICAgZXNjYXBlOiBcImVzY2FwZVwiXG4gICAgfSxcbiAgICBmZWF0dXJlczogW2kwLsm1ybVOZ09uQ2hhbmdlc0ZlYXR1cmVdLFxuICAgIGRlY2xzOiAzLFxuICAgIHZhcnM6IDEsXG4gICAgY29uc3RzOiBbW1wic3RyaXBlRWxlbWVudFJlZlwiLCBcIlwiXSwgWzEsIFwiZmllbGRcIl0sIFszLCBcIm5nVGVtcGxhdGVPdXRsZXRcIl1dLFxuICAgIHRlbXBsYXRlOiBmdW5jdGlvbiBTdHJpcGVQMjRCYW5rQ29tcG9uZW50X1RlbXBsYXRlKHJmLCBjdHgpIHtcbiAgICAgIGlmIChyZiAmIDEpIHtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRTdGFydCgwLCBcImRpdlwiLCAxLCAwKTtcbiAgICAgICAgaTAuybXJtXRlbXBsYXRlKDIsIFN0cmlwZVAyNEJhbmtDb21wb25lbnRfQ29uZGl0aW9uYWxfMl9UZW1wbGF0ZSwgMSwgMSwgXCJuZy1jb250YWluZXJcIiwgMik7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50RW5kKCk7XG4gICAgICB9XG4gICAgICBpZiAocmYgJiAyKSB7XG4gICAgICAgIGkwLsm1ybVhZHZhbmNlKDIpO1xuICAgICAgICBpMC7Jtcm1Y29uZGl0aW9uYWwoY3R4LnN0YXRlICE9PSBcInJlYWR5XCIgJiYgY3R4LmxvYWRpbmdUZW1wbGF0ZSA/IDIgOiAtMSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBkZXBlbmRlbmNpZXM6IFtDb21tb25Nb2R1bGUsIGkzLk5nVGVtcGxhdGVPdXRsZXRdLFxuICAgIGVuY2Fwc3VsYXRpb246IDJcbiAgfSk7XG59XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShTdHJpcGVQMjRCYW5rQ29tcG9uZW50LCBbe1xuICAgIHR5cGU6IENvbXBvbmVudCxcbiAgICBhcmdzOiBbe1xuICAgICAgc2VsZWN0b3I6ICduZ3gtc3RyaXBlLXAyNC1iYW5rJyxcbiAgICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiICNzdHJpcGVFbGVtZW50UmVmPlxuICAgICAgQGlmIChzdGF0ZSAhPT0gJ3JlYWR5JyAmJiBsb2FkaW5nVGVtcGxhdGUpIHtcbiAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJsb2FkaW5nVGVtcGxhdGVcIiAvPlxuICAgICAgfVxuICAgIDwvZGl2PlxuICBgLFxuICAgICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV1cbiAgICB9XVxuICB9XSwgKCkgPT4gW3tcbiAgICB0eXBlOiBTdHJpcGVFbGVtZW50c1NlcnZpY2VcbiAgfSwge1xuICAgIHR5cGU6IFN0cmlwZUVsZW1lbnRzRGlyZWN0aXZlLFxuICAgIGRlY29yYXRvcnM6IFt7XG4gICAgICB0eXBlOiBPcHRpb25hbFxuICAgIH1dXG4gIH1dLCB7XG4gICAgbG9hZGluZ1RlbXBsYXRlOiBbe1xuICAgICAgdHlwZTogQ29udGVudENoaWxkLFxuICAgICAgYXJnczogW05neFN0cmlwZUVsZW1lbnRMb2FkaW5nVGVtcGxhdGVEaXJlY3RpdmUsIHtcbiAgICAgICAgcmVhZDogVGVtcGxhdGVSZWZcbiAgICAgIH1dXG4gICAgfV0sXG4gICAgc3RyaXBlRWxlbWVudFJlZjogW3tcbiAgICAgIHR5cGU6IFZpZXdDaGlsZCxcbiAgICAgIGFyZ3M6IFsnc3RyaXBlRWxlbWVudFJlZiddXG4gICAgfV0sXG4gICAgY29udGFpbmVyQ2xhc3M6IFt7XG4gICAgICB0eXBlOiBJbnB1dFxuICAgIH1dLFxuICAgIG9wdGlvbnM6IFt7XG4gICAgICB0eXBlOiBJbnB1dFxuICAgIH1dLFxuICAgIGVsZW1lbnRzT3B0aW9uczogW3tcbiAgICAgIHR5cGU6IElucHV0XG4gICAgfV0sXG4gICAgc3RyaXBlOiBbe1xuICAgICAgdHlwZTogSW5wdXRcbiAgICB9XSxcbiAgICBsb2FkOiBbe1xuICAgICAgdHlwZTogT3V0cHV0XG4gICAgfV0sXG4gICAgYmx1cjogW3tcbiAgICAgIHR5cGU6IE91dHB1dFxuICAgIH1dLFxuICAgIGNoYW5nZTogW3tcbiAgICAgIHR5cGU6IE91dHB1dFxuICAgIH1dLFxuICAgIGZvY3VzOiBbe1xuICAgICAgdHlwZTogT3V0cHV0XG4gICAgfV0sXG4gICAgcmVhZHk6IFt7XG4gICAgICB0eXBlOiBPdXRwdXRcbiAgICB9XSxcbiAgICBlc2NhcGU6IFt7XG4gICAgICB0eXBlOiBPdXRwdXRcbiAgICB9XVxuICB9KTtcbn0pKCk7XG5jbGFzcyBTdHJpcGVBdUJhbmtBY2NvdW50Q29tcG9uZW50IHtcbiAgc3RyaXBlRWxlbWVudHNTZXJ2aWNlO1xuICBlbGVtZW50c1Byb3ZpZGVyO1xuICBsb2FkaW5nVGVtcGxhdGU7XG4gIHN0cmlwZUVsZW1lbnRSZWY7XG4gIGVsZW1lbnQ7XG4gIGNvbnRhaW5lckNsYXNzO1xuICBvcHRpb25zO1xuICBlbGVtZW50c09wdGlvbnM7XG4gIHN0cmlwZTtcbiAgbG9hZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgYmx1ciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBmb2N1cyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcmVhZHkgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGVzY2FwZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgZWxlbWVudHM7XG4gIHN0YXRlID0gJ25vdHJlYWR5JztcbiAgZWxlbWVudHNTdWJzY3JpcHRpb247XG4gIGNvbnN0cnVjdG9yKHN0cmlwZUVsZW1lbnRzU2VydmljZSwgZWxlbWVudHNQcm92aWRlcikge1xuICAgIHRoaXMuc3RyaXBlRWxlbWVudHNTZXJ2aWNlID0gc3RyaXBlRWxlbWVudHNTZXJ2aWNlO1xuICAgIHRoaXMuZWxlbWVudHNQcm92aWRlciA9IGVsZW1lbnRzUHJvdmlkZXI7XG4gIH1cbiAgYXN5bmMgbmdPbkNoYW5nZXMoY2hhbmdlcykge1xuICAgIHRoaXMuc3RhdGUgPSAnc3RhcnRpbmcnO1xuICAgIGxldCB1cGRhdGVFbGVtZW50cyA9IGZhbHNlO1xuICAgIGlmICghdGhpcy5lbGVtZW50c1Byb3ZpZGVyICYmIChjaGFuZ2VzLmVsZW1lbnRzT3B0aW9ucyB8fCBjaGFuZ2VzLnN0cmlwZSB8fCAhdGhpcy5lbGVtZW50cykpIHtcbiAgICAgIHRoaXMuZWxlbWVudHMgPSBhd2FpdCB0aGlzLnN0cmlwZUVsZW1lbnRzU2VydmljZS5lbGVtZW50cyh0aGlzLnN0cmlwZSwgdGhpcy5lbGVtZW50c09wdGlvbnMpLnRvUHJvbWlzZSgpO1xuICAgICAgdXBkYXRlRWxlbWVudHMgPSB0cnVlO1xuICAgIH1cbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5zdHJpcGVFbGVtZW50c1NlcnZpY2UubWVyZ2VPcHRpb25zKHRoaXMub3B0aW9ucywgdGhpcy5jb250YWluZXJDbGFzcyk7XG4gICAgaWYgKGNoYW5nZXMub3B0aW9ucyB8fCBjaGFuZ2VzLmNvbnRhaW5lckNsYXNzIHx8ICF0aGlzLmVsZW1lbnQgfHwgdXBkYXRlRWxlbWVudHMpIHtcbiAgICAgIGlmICh0aGlzLmVsZW1lbnQgJiYgIXVwZGF0ZUVsZW1lbnRzKSB7XG4gICAgICAgIHRoaXMudXBkYXRlKG9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRzICYmIHVwZGF0ZUVsZW1lbnRzKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlRWxlbWVudChvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zdGF0ZSA9ICdyZWFkeSc7XG4gIH1cbiAgYXN5bmMgbmdPbkluaXQoKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuc3RyaXBlRWxlbWVudHNTZXJ2aWNlLm1lcmdlT3B0aW9ucyh0aGlzLm9wdGlvbnMsIHRoaXMuY29udGFpbmVyQ2xhc3MpO1xuICAgIGlmICh0aGlzLmVsZW1lbnRzUHJvdmlkZXIpIHtcbiAgICAgIHRoaXMuZWxlbWVudHNTdWJzY3JpcHRpb24gPSB0aGlzLmVsZW1lbnRzUHJvdmlkZXIuZWxlbWVudHMuc3Vic2NyaWJlKGVsZW1lbnRzID0+IHtcbiAgICAgICAgdGhpcy5lbGVtZW50cyA9IGVsZW1lbnRzO1xuICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAncmVhZHknO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09PSAnbm90cmVhZHknKSB7XG4gICAgICB0aGlzLnN0YXRlID0gJ3N0YXJ0aW5nJztcbiAgICAgIHRoaXMuZWxlbWVudHMgPSBhd2FpdCB0aGlzLnN0cmlwZUVsZW1lbnRzU2VydmljZS5lbGVtZW50cyh0aGlzLnN0cmlwZSkudG9Qcm9taXNlKCk7XG4gICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgICB0aGlzLnN0YXRlID0gJ3JlYWR5JztcbiAgICB9XG4gIH1cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgdGhpcy5lbGVtZW50LmRlc3Ryb3koKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZWxlbWVudHNTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuZWxlbWVudHNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbiAgdXBkYXRlKG9wdGlvbnMpIHtcbiAgICB0aGlzLmVsZW1lbnQudXBkYXRlKG9wdGlvbnMpO1xuICB9XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZFxuICAgKi9cbiAgZ2V0QXVCYW5rQWNjb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICB9XG4gIGNyZWF0ZUVsZW1lbnQob3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgdGhpcy5lbGVtZW50LnVubW91bnQoKTtcbiAgICB9XG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5lbGVtZW50cy5jcmVhdGUoJ2F1QmFua0FjY291bnQnLCBvcHRpb25zKTtcbiAgICB0aGlzLmVsZW1lbnQub24oJ2NoYW5nZScsIGV2ID0+IHRoaXMuY2hhbmdlLmVtaXQoZXYpKTtcbiAgICB0aGlzLmVsZW1lbnQub24oJ2JsdXInLCAoKSA9PiB0aGlzLmJsdXIuZW1pdCgpKTtcbiAgICB0aGlzLmVsZW1lbnQub24oJ2ZvY3VzJywgKCkgPT4gdGhpcy5mb2N1cy5lbWl0KCkpO1xuICAgIHRoaXMuZWxlbWVudC5vbigncmVhZHknLCAoKSA9PiB0aGlzLnJlYWR5LmVtaXQoKSk7XG4gICAgdGhpcy5lbGVtZW50Lm9uKCdlc2NhcGUnLCAoKSA9PiB0aGlzLmVzY2FwZS5lbWl0KCkpO1xuICAgIHRoaXMuZWxlbWVudC5tb3VudCh0aGlzLnN0cmlwZUVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5sb2FkLmVtaXQodGhpcy5lbGVtZW50KTtcbiAgfVxuICBzdGF0aWMgybVmYWMgPSBmdW5jdGlvbiBTdHJpcGVBdUJhbmtBY2NvdW50Q29tcG9uZW50X0ZhY3RvcnkoX19uZ0ZhY3RvcnlUeXBlX18pIHtcbiAgICByZXR1cm4gbmV3IChfX25nRmFjdG9yeVR5cGVfXyB8fCBTdHJpcGVBdUJhbmtBY2NvdW50Q29tcG9uZW50KShpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KFN0cmlwZUVsZW1lbnRzU2VydmljZSksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoU3RyaXBlRWxlbWVudHNEaXJlY3RpdmUsIDgpKTtcbiAgfTtcbiAgc3RhdGljIMm1Y21wID0gLyogQF9fUFVSRV9fICovaTAuybXJtWRlZmluZUNvbXBvbmVudCh7XG4gICAgdHlwZTogU3RyaXBlQXVCYW5rQWNjb3VudENvbXBvbmVudCxcbiAgICBzZWxlY3RvcnM6IFtbXCJuZ3gtc3RyaXBlLWF1LWJhbmstYWNjb3VudFwiXV0sXG4gICAgY29udGVudFF1ZXJpZXM6IGZ1bmN0aW9uIFN0cmlwZUF1QmFua0FjY291bnRDb21wb25lbnRfQ29udGVudFF1ZXJpZXMocmYsIGN0eCwgZGlySW5kZXgpIHtcbiAgICAgIGlmIChyZiAmIDEpIHtcbiAgICAgICAgaTAuybXJtWNvbnRlbnRRdWVyeShkaXJJbmRleCwgTmd4U3RyaXBlRWxlbWVudExvYWRpbmdUZW1wbGF0ZURpcmVjdGl2ZSwgNSwgVGVtcGxhdGVSZWYpO1xuICAgICAgfVxuICAgICAgaWYgKHJmICYgMikge1xuICAgICAgICBsZXQgX3Q7XG4gICAgICAgIGkwLsm1ybVxdWVyeVJlZnJlc2goX3QgPSBpMC7Jtcm1bG9hZFF1ZXJ5KCkpICYmIChjdHgubG9hZGluZ1RlbXBsYXRlID0gX3QuZmlyc3QpO1xuICAgICAgfVxuICAgIH0sXG4gICAgdmlld1F1ZXJ5OiBmdW5jdGlvbiBTdHJpcGVBdUJhbmtBY2NvdW50Q29tcG9uZW50X1F1ZXJ5KHJmLCBjdHgpIHtcbiAgICAgIGlmIChyZiAmIDEpIHtcbiAgICAgICAgaTAuybXJtXZpZXdRdWVyeShfYzAsIDUpO1xuICAgICAgfVxuICAgICAgaWYgKHJmICYgMikge1xuICAgICAgICBsZXQgX3Q7XG4gICAgICAgIGkwLsm1ybVxdWVyeVJlZnJlc2goX3QgPSBpMC7Jtcm1bG9hZFF1ZXJ5KCkpICYmIChjdHguc3RyaXBlRWxlbWVudFJlZiA9IF90LmZpcnN0KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGlucHV0czoge1xuICAgICAgY29udGFpbmVyQ2xhc3M6IFwiY29udGFpbmVyQ2xhc3NcIixcbiAgICAgIG9wdGlvbnM6IFwib3B0aW9uc1wiLFxuICAgICAgZWxlbWVudHNPcHRpb25zOiBcImVsZW1lbnRzT3B0aW9uc1wiLFxuICAgICAgc3RyaXBlOiBcInN0cmlwZVwiXG4gICAgfSxcbiAgICBvdXRwdXRzOiB7XG4gICAgICBsb2FkOiBcImxvYWRcIixcbiAgICAgIGJsdXI6IFwiYmx1clwiLFxuICAgICAgY2hhbmdlOiBcImNoYW5nZVwiLFxuICAgICAgZm9jdXM6IFwiZm9jdXNcIixcbiAgICAgIHJlYWR5OiBcInJlYWR5XCIsXG4gICAgICBlc2NhcGU6IFwiZXNjYXBlXCJcbiAgICB9LFxuICAgIGZlYXR1cmVzOiBbaTAuybXJtU5nT25DaGFuZ2VzRmVhdHVyZV0sXG4gICAgZGVjbHM6IDMsXG4gICAgdmFyczogMSxcbiAgICBjb25zdHM6IFtbXCJzdHJpcGVFbGVtZW50UmVmXCIsIFwiXCJdLCBbMSwgXCJmaWVsZFwiXSwgWzMsIFwibmdUZW1wbGF0ZU91dGxldFwiXV0sXG4gICAgdGVtcGxhdGU6IGZ1bmN0aW9uIFN0cmlwZUF1QmFua0FjY291bnRDb21wb25lbnRfVGVtcGxhdGUocmYsIGN0eCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudFN0YXJ0KDAsIFwiZGl2XCIsIDEsIDApO1xuICAgICAgICBpMC7Jtcm1dGVtcGxhdGUoMiwgU3RyaXBlQXVCYW5rQWNjb3VudENvbXBvbmVudF9Db25kaXRpb25hbF8yX1RlbXBsYXRlLCAxLCAxLCBcIm5nLWNvbnRhaW5lclwiLCAyKTtcbiAgICAgICAgaTAuybXJtWVsZW1lbnRFbmQoKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZiAmIDIpIHtcbiAgICAgICAgaTAuybXJtWFkdmFuY2UoMik7XG4gICAgICAgIGkwLsm1ybVjb25kaXRpb25hbChjdHguc3RhdGUgIT09IFwicmVhZHlcIiAmJiBjdHgubG9hZGluZ1RlbXBsYXRlID8gMiA6IC0xKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRlcGVuZGVuY2llczogW0NvbW1vbk1vZHVsZSwgaTMuTmdUZW1wbGF0ZU91dGxldF0sXG4gICAgZW5jYXBzdWxhdGlvbjogMlxuICB9KTtcbn1cbigoKSA9PiB7XG4gICh0eXBlb2YgbmdEZXZNb2RlID09PSBcInVuZGVmaW5lZFwiIHx8IG5nRGV2TW9kZSkgJiYgaTAuybVzZXRDbGFzc01ldGFkYXRhKFN0cmlwZUF1QmFua0FjY291bnRDb21wb25lbnQsIFt7XG4gICAgdHlwZTogQ29tcG9uZW50LFxuICAgIGFyZ3M6IFt7XG4gICAgICBzZWxlY3RvcjogJ25neC1zdHJpcGUtYXUtYmFuay1hY2NvdW50JyxcbiAgICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiICNzdHJpcGVFbGVtZW50UmVmPlxuICAgICAgQGlmIChzdGF0ZSAhPT0gJ3JlYWR5JyAmJiBsb2FkaW5nVGVtcGxhdGUpIHtcbiAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJsb2FkaW5nVGVtcGxhdGVcIiAvPlxuICAgICAgfVxuICAgIDwvZGl2PlxuICBgLFxuICAgICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV1cbiAgICB9XVxuICB9XSwgKCkgPT4gW3tcbiAgICB0eXBlOiBTdHJpcGVFbGVtZW50c1NlcnZpY2VcbiAgfSwge1xuICAgIHR5cGU6IFN0cmlwZUVsZW1lbnRzRGlyZWN0aXZlLFxuICAgIGRlY29yYXRvcnM6IFt7XG4gICAgICB0eXBlOiBPcHRpb25hbFxuICAgIH1dXG4gIH1dLCB7XG4gICAgbG9hZGluZ1RlbXBsYXRlOiBbe1xuICAgICAgdHlwZTogQ29udGVudENoaWxkLFxuICAgICAgYXJnczogW05neFN0cmlwZUVsZW1lbnRMb2FkaW5nVGVtcGxhdGVEaXJlY3RpdmUsIHtcbiAgICAgICAgcmVhZDogVGVtcGxhdGVSZWZcbiAgICAgIH1dXG4gICAgfV0sXG4gICAgc3RyaXBlRWxlbWVudFJlZjogW3tcbiAgICAgIHR5cGU6IFZpZXdDaGlsZCxcbiAgICAgIGFyZ3M6IFsnc3RyaXBlRWxlbWVudFJlZiddXG4gICAgfV0sXG4gICAgY29udGFpbmVyQ2xhc3M6IFt7XG4gICAgICB0eXBlOiBJbnB1dFxuICAgIH1dLFxuICAgIG9wdGlvbnM6IFt7XG4gICAgICB0eXBlOiBJbnB1dFxuICAgIH1dLFxuICAgIGVsZW1lbnRzT3B0aW9uczogW3tcbiAgICAgIHR5cGU6IElucHV0XG4gICAgfV0sXG4gICAgc3RyaXBlOiBbe1xuICAgICAgdHlwZTogSW5wdXRcbiAgICB9XSxcbiAgICBsb2FkOiBbe1xuICAgICAgdHlwZTogT3V0cHV0XG4gICAgfV0sXG4gICAgYmx1cjogW3tcbiAgICAgIHR5cGU6IE91dHB1dFxuICAgIH1dLFxuICAgIGNoYW5nZTogW3tcbiAgICAgIHR5cGU6IE91dHB1dFxuICAgIH1dLFxuICAgIGZvY3VzOiBbe1xuICAgICAgdHlwZTogT3V0cHV0XG4gICAgfV0sXG4gICAgcmVhZHk6IFt7XG4gICAgICB0eXBlOiBPdXRwdXRcbiAgICB9XSxcbiAgICBlc2NhcGU6IFt7XG4gICAgICB0eXBlOiBPdXRwdXRcbiAgICB9XVxuICB9KTtcbn0pKCk7XG5jbGFzcyBTdHJpcGVQYXltZW50RWxlbWVudENvbXBvbmVudCB7XG4gIHN0cmlwZUVsZW1lbnRzU2VydmljZTtcbiAgZWxlbWVudHNQcm92aWRlcjtcbiAgc3RyaXBlRWxlbWVudFJlZjtcbiAgZWxlbWVudDtcbiAgZWxlbWVudHM7XG4gIGNvbnRhaW5lckNsYXNzO1xuICBvcHRpb25zO1xuICBlbGVtZW50c09wdGlvbnM7XG4gIHN0cmlwZTtcbiAgYXBwZWFyYW5jZTtcbiAgY2xpZW50U2VjcmV0O1xuICBkb05vdENyZWF0ZVVudGlsQ2xpZW50U2VjcmV0SXNTZXQgPSBmYWxzZTtcbiAgbG9hZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgYmx1ciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBmb2N1cyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcmVhZHkgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGVzY2FwZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgbG9hZGVycm9yID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBzdGF0ZSA9ICdub3RyZWFkeSc7XG4gIGVsZW1lbnRzU3Vic2NyaXB0aW9uO1xuICBjb25zdHJ1Y3RvcihzdHJpcGVFbGVtZW50c1NlcnZpY2UsIGVsZW1lbnRzUHJvdmlkZXIpIHtcbiAgICB0aGlzLnN0cmlwZUVsZW1lbnRzU2VydmljZSA9IHN0cmlwZUVsZW1lbnRzU2VydmljZTtcbiAgICB0aGlzLmVsZW1lbnRzUHJvdmlkZXIgPSBlbGVtZW50c1Byb3ZpZGVyO1xuICB9XG4gIGFzeW5jIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcbiAgICB0aGlzLnN0YXRlID0gJ3N0YXJ0aW5nJztcbiAgICBsZXQgdXBkYXRlRWxlbWVudHMgPSBmYWxzZTtcbiAgICBpZiAoIXRoaXMuZWxlbWVudHNQcm92aWRlciAmJiAoY2hhbmdlcy5lbGVtZW50c09wdGlvbnMgfHwgY2hhbmdlcy5zdHJpcGUgfHwgY2hhbmdlcy5jbGllbnRTZWNyZXQgfHwgY2hhbmdlcy5hcHBlYXJhbmNlIHx8ICF0aGlzLmVsZW1lbnRzKSkge1xuICAgICAgdGhpcy5lbGVtZW50cyA9IGF3YWl0IHRoaXMuc3RyaXBlRWxlbWVudHNTZXJ2aWNlLmVsZW1lbnRzKHRoaXMuc3RyaXBlLCB7XG4gICAgICAgIC4uLih0aGlzLmVsZW1lbnRzT3B0aW9ucyB8fCB7fSksXG4gICAgICAgIC4uLih0aGlzLmFwcGVhcmFuY2UgPyB7XG4gICAgICAgICAgYXBwZWFyYW5jZTogdGhpcy5hcHBlYXJhbmNlXG4gICAgICAgIH0gOiB7fSksXG4gICAgICAgIC4uLih0aGlzLmNsaWVudFNlY3JldCA/IHtcbiAgICAgICAgICBjbGllbnRTZWNyZXQ6IHRoaXMuY2xpZW50U2VjcmV0XG4gICAgICAgIH0gOiB7fSlcbiAgICAgIH0pLnRvUHJvbWlzZSgpO1xuICAgICAgdXBkYXRlRWxlbWVudHMgPSB0cnVlO1xuICAgIH1cbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5zdHJpcGVFbGVtZW50c1NlcnZpY2UubWVyZ2VPcHRpb25zKHRoaXMub3B0aW9ucywgdGhpcy5jb250YWluZXJDbGFzcyk7XG4gICAgaWYgKGNoYW5nZXMub3B0aW9ucyB8fCBjaGFuZ2VzLmNvbnRhaW5lckNsYXNzIHx8ICF0aGlzLmVsZW1lbnQgfHwgdXBkYXRlRWxlbWVudHMpIHtcbiAgICAgIGlmICh0aGlzLmVsZW1lbnQgJiYgIXVwZGF0ZUVsZW1lbnRzKSB7XG4gICAgICAgIHRoaXMudXBkYXRlKG9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRzICYmIHVwZGF0ZUVsZW1lbnRzKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlRWxlbWVudChvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zdGF0ZSA9ICdyZWFkeSc7XG4gIH1cbiAgYXN5bmMgbmdPbkluaXQoKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuc3RyaXBlRWxlbWVudHNTZXJ2aWNlLm1lcmdlT3B0aW9ucyh0aGlzLm9wdGlvbnMsIHRoaXMuY29udGFpbmVyQ2xhc3MpO1xuICAgIGlmICh0aGlzLmVsZW1lbnRzUHJvdmlkZXIpIHtcbiAgICAgIHRoaXMuZWxlbWVudHNTdWJzY3JpcHRpb24gPSB0aGlzLmVsZW1lbnRzUHJvdmlkZXIuZWxlbWVudHMuc3Vic2NyaWJlKGVsZW1lbnRzID0+IHtcbiAgICAgICAgdGhpcy5lbGVtZW50cyA9IGVsZW1lbnRzO1xuICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAncmVhZHknO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09PSAnbm90cmVhZHknKSB7XG4gICAgICB0aGlzLnN0YXRlID0gJ3N0YXJ0aW5nJztcbiAgICAgIHRoaXMuZWxlbWVudHMgPSBhd2FpdCB0aGlzLnN0cmlwZUVsZW1lbnRzU2VydmljZS5lbGVtZW50cyh0aGlzLnN0cmlwZSwge1xuICAgICAgICAuLi4odGhpcy5lbGVtZW50c09wdGlvbnMgfHwge30pLFxuICAgICAgICAuLi4odGhpcy5hcHBlYXJhbmNlID8ge1xuICAgICAgICAgIGFwcGVhcmFuY2U6IHRoaXMuYXBwZWFyYW5jZVxuICAgICAgICB9IDoge30pLFxuICAgICAgICAuLi4odGhpcy5jbGllbnRTZWNyZXQgPyB7XG4gICAgICAgICAgY2xpZW50U2VjcmV0OiB0aGlzLmNsaWVudFNlY3JldFxuICAgICAgICB9IDoge30pXG4gICAgICB9KS50b1Byb21pc2UoKTtcbiAgICAgIHRoaXMuY3JlYXRlRWxlbWVudChvcHRpb25zKTtcbiAgICAgIHRoaXMuc3RhdGUgPSAncmVhZHknO1xuICAgIH1cbiAgfVxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnQuZGVzdHJveSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5lbGVtZW50c1N1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5lbGVtZW50c1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuICB1cGRhdGUob3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQudXBkYXRlKG9wdGlvbnMpO1xuICB9XG4gIGNvbGxhcHNlKCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQuY29sbGFwc2UoKTtcbiAgfVxuICBmZXRjaFVwZGF0ZXMoKSB7XG4gICAgcmV0dXJuIGZyb20odGhpcy5lbGVtZW50cy5mZXRjaFVwZGF0ZXMoKSk7XG4gIH1cbiAgY3JlYXRlRWxlbWVudChvcHRpb25zID0ge30pIHtcbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnQudW5tb3VudCgpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5lbGVtZW50cy5jcmVhdGUoJ3BheW1lbnQnLCBvcHRpb25zKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMuZWxlbWVudHMgPSBudWxsO1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH1cbiAgICB0aGlzLmVsZW1lbnQub24oJ2NoYW5nZScsIGV2ID0+IHRoaXMuY2hhbmdlLmVtaXQoZXYpKTtcbiAgICB0aGlzLmVsZW1lbnQub24oJ2JsdXInLCBldiA9PiB0aGlzLmJsdXIuZW1pdChldikpO1xuICAgIHRoaXMuZWxlbWVudC5vbignZm9jdXMnLCBldiA9PiB0aGlzLmZvY3VzLmVtaXQoZXYpKTtcbiAgICB0aGlzLmVsZW1lbnQub24oJ3JlYWR5JywgZXYgPT4gdGhpcy5yZWFkeS5lbWl0KGV2KSk7XG4gICAgdGhpcy5lbGVtZW50Lm9uKCdlc2NhcGUnLCBldiA9PiB0aGlzLmVzY2FwZS5lbWl0KGV2KSk7XG4gICAgdGhpcy5lbGVtZW50Lm9uKCdsb2FkZXJyb3InLCBldiA9PiB0aGlzLmxvYWRlcnJvci5lbWl0KGV2KSk7XG4gICAgdGhpcy5lbGVtZW50Lm1vdW50KHRoaXMuc3RyaXBlRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLmxvYWQuZW1pdCh0aGlzLmVsZW1lbnQpO1xuICB9XG4gIHN0YXRpYyDJtWZhYyA9IGZ1bmN0aW9uIFN0cmlwZVBheW1lbnRFbGVtZW50Q29tcG9uZW50X0ZhY3RvcnkoX19uZ0ZhY3RvcnlUeXBlX18pIHtcbiAgICByZXR1cm4gbmV3IChfX25nRmFjdG9yeVR5cGVfXyB8fCBTdHJpcGVQYXltZW50RWxlbWVudENvbXBvbmVudCkoaTAuybXJtWRpcmVjdGl2ZUluamVjdChTdHJpcGVFbGVtZW50c1NlcnZpY2UpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KFN0cmlwZUVsZW1lbnRzRGlyZWN0aXZlLCA4KSk7XG4gIH07XG4gIHN0YXRpYyDJtWNtcCA9IC8qIEBfX1BVUkVfXyAqL2kwLsm1ybVkZWZpbmVDb21wb25lbnQoe1xuICAgIHR5cGU6IFN0cmlwZVBheW1lbnRFbGVtZW50Q29tcG9uZW50LFxuICAgIHNlbGVjdG9yczogW1tcIm5neC1zdHJpcGUtcGF5bWVudFwiXV0sXG4gICAgdmlld1F1ZXJ5OiBmdW5jdGlvbiBTdHJpcGVQYXltZW50RWxlbWVudENvbXBvbmVudF9RdWVyeShyZiwgY3R4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybV2aWV3UXVlcnkoX2MwLCA1KTtcbiAgICAgIH1cbiAgICAgIGlmIChyZiAmIDIpIHtcbiAgICAgICAgbGV0IF90O1xuICAgICAgICBpMC7Jtcm1cXVlcnlSZWZyZXNoKF90ID0gaTAuybXJtWxvYWRRdWVyeSgpKSAmJiAoY3R4LnN0cmlwZUVsZW1lbnRSZWYgPSBfdC5maXJzdCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBpbnB1dHM6IHtcbiAgICAgIGNvbnRhaW5lckNsYXNzOiBcImNvbnRhaW5lckNsYXNzXCIsXG4gICAgICBvcHRpb25zOiBcIm9wdGlvbnNcIixcbiAgICAgIGVsZW1lbnRzT3B0aW9uczogXCJlbGVtZW50c09wdGlvbnNcIixcbiAgICAgIHN0cmlwZTogXCJzdHJpcGVcIixcbiAgICAgIGFwcGVhcmFuY2U6IFwiYXBwZWFyYW5jZVwiLFxuICAgICAgY2xpZW50U2VjcmV0OiBcImNsaWVudFNlY3JldFwiLFxuICAgICAgZG9Ob3RDcmVhdGVVbnRpbENsaWVudFNlY3JldElzU2V0OiBcImRvTm90Q3JlYXRlVW50aWxDbGllbnRTZWNyZXRJc1NldFwiXG4gICAgfSxcbiAgICBvdXRwdXRzOiB7XG4gICAgICBsb2FkOiBcImxvYWRcIixcbiAgICAgIGJsdXI6IFwiYmx1clwiLFxuICAgICAgY2hhbmdlOiBcImNoYW5nZVwiLFxuICAgICAgZm9jdXM6IFwiZm9jdXNcIixcbiAgICAgIHJlYWR5OiBcInJlYWR5XCIsXG4gICAgICBlc2NhcGU6IFwiZXNjYXBlXCIsXG4gICAgICBsb2FkZXJyb3I6IFwibG9hZGVycm9yXCJcbiAgICB9LFxuICAgIGZlYXR1cmVzOiBbaTAuybXJtU5nT25DaGFuZ2VzRmVhdHVyZV0sXG4gICAgZGVjbHM6IDIsXG4gICAgdmFyczogMCxcbiAgICBjb25zdHM6IFtbXCJzdHJpcGVFbGVtZW50UmVmXCIsIFwiXCJdLCBbMSwgXCJmaWVsZFwiXV0sXG4gICAgdGVtcGxhdGU6IGZ1bmN0aW9uIFN0cmlwZVBheW1lbnRFbGVtZW50Q29tcG9uZW50X1RlbXBsYXRlKHJmLCBjdHgpIHtcbiAgICAgIGlmIChyZiAmIDEpIHtcbiAgICAgICAgaTAuybXJtWVsZW1lbnQoMCwgXCJkaXZcIiwgMSwgMCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBkZXBlbmRlbmNpZXM6IFtDb21tb25Nb2R1bGVdLFxuICAgIGVuY2Fwc3VsYXRpb246IDJcbiAgfSk7XG59XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShTdHJpcGVQYXltZW50RWxlbWVudENvbXBvbmVudCwgW3tcbiAgICB0eXBlOiBDb21wb25lbnQsXG4gICAgYXJnczogW3tcbiAgICAgIHNlbGVjdG9yOiAnbmd4LXN0cmlwZS1wYXltZW50JyxcbiAgICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJmaWVsZFwiICNzdHJpcGVFbGVtZW50UmVmPjwvZGl2PmAsXG4gICAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXVxuICAgIH1dXG4gIH1dLCAoKSA9PiBbe1xuICAgIHR5cGU6IFN0cmlwZUVsZW1lbnRzU2VydmljZVxuICB9LCB7XG4gICAgdHlwZTogU3RyaXBlRWxlbWVudHNEaXJlY3RpdmUsXG4gICAgZGVjb3JhdG9yczogW3tcbiAgICAgIHR5cGU6IE9wdGlvbmFsXG4gICAgfV1cbiAgfV0sIHtcbiAgICBzdHJpcGVFbGVtZW50UmVmOiBbe1xuICAgICAgdHlwZTogVmlld0NoaWxkLFxuICAgICAgYXJnczogWydzdHJpcGVFbGVtZW50UmVmJ11cbiAgICB9XSxcbiAgICBjb250YWluZXJDbGFzczogW3tcbiAgICAgIHR5cGU6IElucHV0XG4gICAgfV0sXG4gICAgb3B0aW9uczogW3tcbiAgICAgIHR5cGU6IElucHV0XG4gICAgfV0sXG4gICAgZWxlbWVudHNPcHRpb25zOiBbe1xuICAgICAgdHlwZTogSW5wdXRcbiAgICB9XSxcbiAgICBzdHJpcGU6IFt7XG4gICAgICB0eXBlOiBJbnB1dFxuICAgIH1dLFxuICAgIGFwcGVhcmFuY2U6IFt7XG4gICAgICB0eXBlOiBJbnB1dFxuICAgIH1dLFxuICAgIGNsaWVudFNlY3JldDogW3tcbiAgICAgIHR5cGU6IElucHV0XG4gICAgfV0sXG4gICAgZG9Ob3RDcmVhdGVVbnRpbENsaWVudFNlY3JldElzU2V0OiBbe1xuICAgICAgdHlwZTogSW5wdXRcbiAgICB9XSxcbiAgICBsb2FkOiBbe1xuICAgICAgdHlwZTogT3V0cHV0XG4gICAgfV0sXG4gICAgYmx1cjogW3tcbiAgICAgIHR5cGU6IE91dHB1dFxuICAgIH1dLFxuICAgIGNoYW5nZTogW3tcbiAgICAgIHR5cGU6IE91dHB1dFxuICAgIH1dLFxuICAgIGZvY3VzOiBbe1xuICAgICAgdHlwZTogT3V0cHV0XG4gICAgfV0sXG4gICAgcmVhZHk6IFt7XG4gICAgICB0eXBlOiBPdXRwdXRcbiAgICB9XSxcbiAgICBlc2NhcGU6IFt7XG4gICAgICB0eXBlOiBPdXRwdXRcbiAgICB9XSxcbiAgICBsb2FkZXJyb3I6IFt7XG4gICAgICB0eXBlOiBPdXRwdXRcbiAgICB9XVxuICB9KTtcbn0pKCk7XG5jbGFzcyBTdHJpcGVQYXltZW50TWV0aG9kTWVzc2FnaW5nQ29tcG9uZW50IHtcbiAgc3RyaXBlRWxlbWVudHNTZXJ2aWNlO1xuICBlbGVtZW50c1Byb3ZpZGVyO1xuICBsb2FkaW5nVGVtcGxhdGU7XG4gIHN0cmlwZUVsZW1lbnRSZWY7XG4gIGVsZW1lbnQ7XG4gIGNvbnRhaW5lckNsYXNzO1xuICBvcHRpb25zO1xuICBlbGVtZW50c09wdGlvbnM7XG4gIHN0cmlwZTtcbiAgbG9hZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcmVhZHkgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGVsZW1lbnRzO1xuICBzdGF0ZSA9ICdub3RyZWFkeSc7XG4gIGVsZW1lbnRzU3Vic2NyaXB0aW9uO1xuICBjb25zdHJ1Y3RvcihzdHJpcGVFbGVtZW50c1NlcnZpY2UsIGVsZW1lbnRzUHJvdmlkZXIpIHtcbiAgICB0aGlzLnN0cmlwZUVsZW1lbnRzU2VydmljZSA9IHN0cmlwZUVsZW1lbnRzU2VydmljZTtcbiAgICB0aGlzLmVsZW1lbnRzUHJvdmlkZXIgPSBlbGVtZW50c1Byb3ZpZGVyO1xuICB9XG4gIGFzeW5jIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcbiAgICB0aGlzLnN0YXRlID0gJ3N0YXJ0aW5nJztcbiAgICBsZXQgdXBkYXRlRWxlbWVudHMgPSBmYWxzZTtcbiAgICBpZiAoIXRoaXMuZWxlbWVudHNQcm92aWRlciAmJiAoY2hhbmdlcy5lbGVtZW50c09wdGlvbnMgfHwgY2hhbmdlcy5zdHJpcGUgfHwgIXRoaXMuZWxlbWVudHMpKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzID0gYXdhaXQgdGhpcy5zdHJpcGVFbGVtZW50c1NlcnZpY2UuZWxlbWVudHModGhpcy5zdHJpcGUsIHRoaXMuZWxlbWVudHNPcHRpb25zKS50b1Byb21pc2UoKTtcbiAgICAgIHVwZGF0ZUVsZW1lbnRzID0gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuc3RyaXBlRWxlbWVudHNTZXJ2aWNlLm1lcmdlT3B0aW9ucyh0aGlzLm9wdGlvbnMsIHRoaXMuY29udGFpbmVyQ2xhc3MpO1xuICAgIGlmIChjaGFuZ2VzLm9wdGlvbnMgfHwgY2hhbmdlcy5jb250YWluZXJDbGFzcyB8fCAhdGhpcy5lbGVtZW50IHx8IHVwZGF0ZUVsZW1lbnRzKSB7XG4gICAgICBpZiAodGhpcy5lbGVtZW50ICYmICF1cGRhdGVFbGVtZW50cykge1xuICAgICAgICB0aGlzLnVwZGF0ZShvcHRpb25zKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50cyAmJiB1cGRhdGVFbGVtZW50cykge1xuICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc3RhdGUgPSAncmVhZHknO1xuICB9XG4gIGFzeW5jIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLnN0cmlwZUVsZW1lbnRzU2VydmljZS5tZXJnZU9wdGlvbnModGhpcy5vcHRpb25zLCB0aGlzLmNvbnRhaW5lckNsYXNzKTtcbiAgICBpZiAodGhpcy5lbGVtZW50c1Byb3ZpZGVyKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzU3Vic2NyaXB0aW9uID0gdGhpcy5lbGVtZW50c1Byb3ZpZGVyLmVsZW1lbnRzLnN1YnNjcmliZShlbGVtZW50cyA9PiB7XG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSBlbGVtZW50cztcbiAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KG9wdGlvbnMpO1xuICAgICAgICB0aGlzLnN0YXRlID0gJ3JlYWR5JztcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PT0gJ25vdHJlYWR5Jykge1xuICAgICAgdGhpcy5zdGF0ZSA9ICdzdGFydGluZyc7XG4gICAgICB0aGlzLmVsZW1lbnRzID0gYXdhaXQgdGhpcy5zdHJpcGVFbGVtZW50c1NlcnZpY2UuZWxlbWVudHModGhpcy5zdHJpcGUpLnRvUHJvbWlzZSgpO1xuICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KG9wdGlvbnMpO1xuICAgICAgdGhpcy5zdGF0ZSA9ICdyZWFkeSc7XG4gICAgfVxuICB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5kZXN0cm95KCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmVsZW1lbnRzU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG4gIHVwZGF0ZShvcHRpb25zKSB7XG4gICAgdGhpcy5lbGVtZW50LnVwZGF0ZShvcHRpb25zKTtcbiAgfVxuICAvKipcbiAgICogQGRlcHJlY2F0ZWRcbiAgICovXG4gIGdldFBheW1lbnRNZXRob2RNZXNzYWdpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgfVxuICBjcmVhdGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnQudW5tb3VudCgpO1xuICAgIH1cbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmVsZW1lbnRzLmNyZWF0ZSgncGF5bWVudE1ldGhvZE1lc3NhZ2luZycsIG9wdGlvbnMpO1xuICAgIHRoaXMuZWxlbWVudC5vbigncmVhZHknLCAoKSA9PiB0aGlzLnJlYWR5LmVtaXQoKSk7XG4gICAgdGhpcy5lbGVtZW50Lm1vdW50KHRoaXMuc3RyaXBlRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLmxvYWQuZW1pdCh0aGlzLmVsZW1lbnQpO1xuICB9XG4gIHN0YXRpYyDJtWZhYyA9IGZ1bmN0aW9uIFN0cmlwZVBheW1lbnRNZXRob2RNZXNzYWdpbmdDb21wb25lbnRfRmFjdG9yeShfX25nRmFjdG9yeVR5cGVfXykge1xuICAgIHJldHVybiBuZXcgKF9fbmdGYWN0b3J5VHlwZV9fIHx8IFN0cmlwZVBheW1lbnRNZXRob2RNZXNzYWdpbmdDb21wb25lbnQpKGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoU3RyaXBlRWxlbWVudHNTZXJ2aWNlKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChTdHJpcGVFbGVtZW50c0RpcmVjdGl2ZSwgOCkpO1xuICB9O1xuICBzdGF0aWMgybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICB0eXBlOiBTdHJpcGVQYXltZW50TWV0aG9kTWVzc2FnaW5nQ29tcG9uZW50LFxuICAgIHNlbGVjdG9yczogW1tcIm5neC1zdHJpcGUtcGF5bWVudC1tZXRob2QtbWVzc2FnaW5nXCJdXSxcbiAgICBjb250ZW50UXVlcmllczogZnVuY3Rpb24gU3RyaXBlUGF5bWVudE1ldGhvZE1lc3NhZ2luZ0NvbXBvbmVudF9Db250ZW50UXVlcmllcyhyZiwgY3R4LCBkaXJJbmRleCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1Y29udGVudFF1ZXJ5KGRpckluZGV4LCBOZ3hTdHJpcGVFbGVtZW50TG9hZGluZ1RlbXBsYXRlRGlyZWN0aXZlLCA1LCBUZW1wbGF0ZVJlZik7XG4gICAgICB9XG4gICAgICBpZiAocmYgJiAyKSB7XG4gICAgICAgIGxldCBfdDtcbiAgICAgICAgaTAuybXJtXF1ZXJ5UmVmcmVzaChfdCA9IGkwLsm1ybVsb2FkUXVlcnkoKSkgJiYgKGN0eC5sb2FkaW5nVGVtcGxhdGUgPSBfdC5maXJzdCk7XG4gICAgICB9XG4gICAgfSxcbiAgICB2aWV3UXVlcnk6IGZ1bmN0aW9uIFN0cmlwZVBheW1lbnRNZXRob2RNZXNzYWdpbmdDb21wb25lbnRfUXVlcnkocmYsIGN0eCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1dmlld1F1ZXJ5KF9jMCwgNSk7XG4gICAgICB9XG4gICAgICBpZiAocmYgJiAyKSB7XG4gICAgICAgIGxldCBfdDtcbiAgICAgICAgaTAuybXJtXF1ZXJ5UmVmcmVzaChfdCA9IGkwLsm1ybVsb2FkUXVlcnkoKSkgJiYgKGN0eC5zdHJpcGVFbGVtZW50UmVmID0gX3QuZmlyc3QpO1xuICAgICAgfVxuICAgIH0sXG4gICAgaW5wdXRzOiB7XG4gICAgICBjb250YWluZXJDbGFzczogXCJjb250YWluZXJDbGFzc1wiLFxuICAgICAgb3B0aW9uczogXCJvcHRpb25zXCIsXG4gICAgICBlbGVtZW50c09wdGlvbnM6IFwiZWxlbWVudHNPcHRpb25zXCIsXG4gICAgICBzdHJpcGU6IFwic3RyaXBlXCJcbiAgICB9LFxuICAgIG91dHB1dHM6IHtcbiAgICAgIGxvYWQ6IFwibG9hZFwiLFxuICAgICAgcmVhZHk6IFwicmVhZHlcIlxuICAgIH0sXG4gICAgZmVhdHVyZXM6IFtpMC7Jtcm1TmdPbkNoYW5nZXNGZWF0dXJlXSxcbiAgICBkZWNsczogMyxcbiAgICB2YXJzOiAxLFxuICAgIGNvbnN0czogW1tcInN0cmlwZUVsZW1lbnRSZWZcIiwgXCJcIl0sIFsxLCBcImZpZWxkXCJdLCBbMywgXCJuZ1RlbXBsYXRlT3V0bGV0XCJdXSxcbiAgICB0ZW1wbGF0ZTogZnVuY3Rpb24gU3RyaXBlUGF5bWVudE1ldGhvZE1lc3NhZ2luZ0NvbXBvbmVudF9UZW1wbGF0ZShyZiwgY3R4KSB7XG4gICAgICBpZiAocmYgJiAxKSB7XG4gICAgICAgIGkwLsm1ybVlbGVtZW50U3RhcnQoMCwgXCJkaXZcIiwgMSwgMCk7XG4gICAgICAgIGkwLsm1ybV0ZW1wbGF0ZSgyLCBTdHJpcGVQYXltZW50TWV0aG9kTWVzc2FnaW5nQ29tcG9uZW50X0NvbmRpdGlvbmFsXzJfVGVtcGxhdGUsIDEsIDEsIFwibmctY29udGFpbmVyXCIsIDIpO1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudEVuZCgpO1xuICAgICAgfVxuICAgICAgaWYgKHJmICYgMikge1xuICAgICAgICBpMC7Jtcm1YWR2YW5jZSgyKTtcbiAgICAgICAgaTAuybXJtWNvbmRpdGlvbmFsKGN0eC5zdGF0ZSAhPT0gXCJyZWFkeVwiICYmIGN0eC5sb2FkaW5nVGVtcGxhdGUgPyAyIDogLTEpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZGVwZW5kZW5jaWVzOiBbQ29tbW9uTW9kdWxlLCBpMy5OZ1RlbXBsYXRlT3V0bGV0XSxcbiAgICBlbmNhcHN1bGF0aW9uOiAyXG4gIH0pO1xufVxuKCgpID0+IHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoU3RyaXBlUGF5bWVudE1ldGhvZE1lc3NhZ2luZ0NvbXBvbmVudCwgW3tcbiAgICB0eXBlOiBDb21wb25lbnQsXG4gICAgYXJnczogW3tcbiAgICAgIHNlbGVjdG9yOiAnbmd4LXN0cmlwZS1wYXltZW50LW1ldGhvZC1tZXNzYWdpbmcnLFxuICAgICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICAgIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImZpZWxkXCIgI3N0cmlwZUVsZW1lbnRSZWY+XG4gICAgICBAaWYgKHN0YXRlICE9PSAncmVhZHknICYmIGxvYWRpbmdUZW1wbGF0ZSkge1xuICAgICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImxvYWRpbmdUZW1wbGF0ZVwiIC8+XG4gICAgICB9XG4gICAgPC9kaXY+XG4gIGAsXG4gICAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXVxuICAgIH1dXG4gIH1dLCAoKSA9PiBbe1xuICAgIHR5cGU6IFN0cmlwZUVsZW1lbnRzU2VydmljZVxuICB9LCB7XG4gICAgdHlwZTogU3RyaXBlRWxlbWVudHNEaXJlY3RpdmUsXG4gICAgZGVjb3JhdG9yczogW3tcbiAgICAgIHR5cGU6IE9wdGlvbmFsXG4gICAgfV1cbiAgfV0sIHtcbiAgICBsb2FkaW5nVGVtcGxhdGU6IFt7XG4gICAgICB0eXBlOiBDb250ZW50Q2hpbGQsXG4gICAgICBhcmdzOiBbTmd4U3RyaXBlRWxlbWVudExvYWRpbmdUZW1wbGF0ZURpcmVjdGl2ZSwge1xuICAgICAgICByZWFkOiBUZW1wbGF0ZVJlZlxuICAgICAgfV1cbiAgICB9XSxcbiAgICBzdHJpcGVFbGVtZW50UmVmOiBbe1xuICAgICAgdHlwZTogVmlld0NoaWxkLFxuICAgICAgYXJnczogWydzdHJpcGVFbGVtZW50UmVmJ11cbiAgICB9XSxcbiAgICBjb250YWluZXJDbGFzczogW3tcbiAgICAgIHR5cGU6IElucHV0XG4gICAgfV0sXG4gICAgb3B0aW9uczogW3tcbiAgICAgIHR5cGU6IElucHV0XG4gICAgfV0sXG4gICAgZWxlbWVudHNPcHRpb25zOiBbe1xuICAgICAgdHlwZTogSW5wdXRcbiAgICB9XSxcbiAgICBzdHJpcGU6IFt7XG4gICAgICB0eXBlOiBJbnB1dFxuICAgIH1dLFxuICAgIGxvYWQ6IFt7XG4gICAgICB0eXBlOiBPdXRwdXRcbiAgICB9XSxcbiAgICByZWFkeTogW3tcbiAgICAgIHR5cGU6IE91dHB1dFxuICAgIH1dXG4gIH0pO1xufSkoKTtcbmNsYXNzIFN0cmlwZVBheW1lbnRSZXF1ZXN0QnV0dG9uQ29tcG9uZW50IHtcbiAgc3RyaXBlRWxlbWVudHNTZXJ2aWNlO1xuICBlbGVtZW50c1Byb3ZpZGVyO1xuICBzdHJpcGVFbGVtZW50UmVmO1xuICBlbGVtZW50O1xuICBwYXltZW50UmVxdWVzdDtcbiAgY29udGFpbmVyQ2xhc3M7XG4gIHBheW1lbnRPcHRpb25zO1xuICBvcHRpb25zO1xuICBlbGVtZW50c09wdGlvbnM7XG4gIHN0cmlwZTtcbiAgbG9hZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBibHVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBmb2N1cyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcmVhZHkgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHRva2VuID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBwYXltZW50TWV0aG9kID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBzb3VyY2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGNhbmNlbCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgc2hpcHBpbmdhZGRyZXNzY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBzaGlwcGluZ29wdGlvbmNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgbm90YXZhaWxhYmxlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBlbGVtZW50cztcbiAgc3RhdGUgPSAnbm90cmVhZHknO1xuICBlbGVtZW50c1N1YnNjcmlwdGlvbjtcbiAgY29uc3RydWN0b3Ioc3RyaXBlRWxlbWVudHNTZXJ2aWNlLCBlbGVtZW50c1Byb3ZpZGVyKSB7XG4gICAgdGhpcy5zdHJpcGVFbGVtZW50c1NlcnZpY2UgPSBzdHJpcGVFbGVtZW50c1NlcnZpY2U7XG4gICAgdGhpcy5lbGVtZW50c1Byb3ZpZGVyID0gZWxlbWVudHNQcm92aWRlcjtcbiAgfVxuICBhc3luYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XG4gICAgdGhpcy5zdGF0ZSA9ICdzdGFydGluZyc7XG4gICAgbGV0IHVwZGF0ZUVsZW1lbnRzID0gZmFsc2U7XG4gICAgaWYgKCF0aGlzLmVsZW1lbnRzUHJvdmlkZXIgJiYgKGNoYW5nZXMuZWxlbWVudHNPcHRpb25zIHx8IGNoYW5nZXMuc3RyaXBlIHx8ICF0aGlzLmVsZW1lbnRzKSkge1xuICAgICAgY29uc3QgZWxlbWVudHMgPSBhd2FpdCB0aGlzLnN0cmlwZUVsZW1lbnRzU2VydmljZS5lbGVtZW50cyh0aGlzLnN0cmlwZSwgdGhpcy5lbGVtZW50c09wdGlvbnMpLnRvUHJvbWlzZSgpO1xuICAgICAgdGhpcy5lbGVtZW50cyA9IGVsZW1lbnRzO1xuICAgICAgdXBkYXRlRWxlbWVudHMgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5wYXltZW50T3B0aW9ucyAmJiB0aGlzLnBheW1lbnRSZXF1ZXN0KSB7XG4gICAgICB0aGlzLnVwZGF0ZVJlcXVlc3QodGhpcy5wYXltZW50T3B0aW9ucyk7XG4gICAgfVxuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLnN0cmlwZUVsZW1lbnRzU2VydmljZS5tZXJnZU9wdGlvbnModGhpcy5vcHRpb25zLCB0aGlzLmNvbnRhaW5lckNsYXNzKTtcbiAgICBpZiAoY2hhbmdlcy5vcHRpb25zIHx8IGNoYW5nZXMuY29udGFpbmVyQ2xhc3MgfHwgIXRoaXMuZWxlbWVudCB8fCB1cGRhdGVFbGVtZW50cykge1xuICAgICAgaWYgKHRoaXMuZWxlbWVudCAmJiAhdXBkYXRlRWxlbWVudHMpIHtcbiAgICAgICAgdGhpcy51cGRhdGUob3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudHMgJiYgdXBkYXRlRWxlbWVudHMpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBhc3luYyBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5zdHJpcGVFbGVtZW50c1NlcnZpY2UubWVyZ2VPcHRpb25zKHRoaXMub3B0aW9ucywgdGhpcy5jb250YWluZXJDbGFzcyk7XG4gICAgaWYgKHRoaXMuZWxlbWVudHNQcm92aWRlcikge1xuICAgICAgdGhpcy5lbGVtZW50c1N1YnNjcmlwdGlvbiA9IHRoaXMuZWxlbWVudHNQcm92aWRlci5lbGVtZW50cy5zdWJzY3JpYmUoZWxlbWVudHMgPT4ge1xuICAgICAgICB0aGlzLmVsZW1lbnRzID0gZWxlbWVudHM7XG4gICAgICAgIHRoaXMuY3JlYXRlRWxlbWVudChvcHRpb25zKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICdyZWFkeSc7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09ICdub3RyZWFkeScpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSAnc3RhcnRpbmcnO1xuICAgICAgdGhpcy5lbGVtZW50cyA9IGF3YWl0IHRoaXMuc3RyaXBlRWxlbWVudHNTZXJ2aWNlLmVsZW1lbnRzKHRoaXMuc3RyaXBlKS50b1Byb21pc2UoKTtcbiAgICAgIHRoaXMuY3JlYXRlRWxlbWVudChvcHRpb25zKTtcbiAgICAgIHRoaXMuc3RhdGUgPSAncmVhZHknO1xuICAgIH1cbiAgfVxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnQuZGVzdHJveSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5lbGVtZW50c1N1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5lbGVtZW50c1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuICBjYW5NYWtlUGF5bWVudCgpIHtcbiAgICByZXR1cm4gZnJvbSh0aGlzLnBheW1lbnRSZXF1ZXN0LmNhbk1ha2VQYXltZW50KCkpO1xuICB9XG4gIHVwZGF0ZShvcHRpb25zKSB7XG4gICAgdGhpcy5lbGVtZW50LnVwZGF0ZShvcHRpb25zKTtcbiAgfVxuICB1cGRhdGVSZXF1ZXN0KG9wdGlvbnMpIHtcbiAgICBjb25zdCB7XG4gICAgICBjdXJyZW5jeSxcbiAgICAgIHRvdGFsLFxuICAgICAgZGlzcGxheUl0ZW1zLFxuICAgICAgc2hpcHBpbmdPcHRpb25zXG4gICAgfSA9IG9wdGlvbnM7XG4gICAgdGhpcy5wYXltZW50UmVxdWVzdC51cGRhdGUoe1xuICAgICAgY3VycmVuY3ksXG4gICAgICB0b3RhbCxcbiAgICAgIGRpc3BsYXlJdGVtcyxcbiAgICAgIHNoaXBwaW5nT3B0aW9uc1xuICAgIH0pO1xuICB9XG4gIHNob3coKSB7XG4gICAgdGhpcy5wYXltZW50UmVxdWVzdC5zaG93KCk7XG4gIH1cbiAgYWJvcnQoKSB7XG4gICAgdGhpcy5wYXltZW50UmVxdWVzdC5hYm9ydCgpO1xuICB9XG4gIGlzU2hvd2luZygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXltZW50UmVxdWVzdC5pc1Nob3dpbmcoKTtcbiAgfVxuICAvKipcbiAgICogQGRlcHJlY2F0ZWRcbiAgICovXG4gIGdldEJ1dHRvbigpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICB9XG4gIGFzeW5jIGNyZWF0ZUVsZW1lbnQob3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5wYXltZW50UmVxdWVzdCA9IHRoaXMuc3RyaXBlRWxlbWVudHNTZXJ2aWNlLnBheW1lbnRSZXF1ZXN0KHRoaXMuc3RyaXBlLCB0aGlzLnBheW1lbnRPcHRpb25zKTtcbiAgICB0aGlzLnBheW1lbnRSZXF1ZXN0Lm9uKCd0b2tlbicsIGV2ID0+IHRoaXMudG9rZW4uZW1pdChldikpO1xuICAgIGlmICh0aGlzLnBheW1lbnRNZXRob2Qub2JzZXJ2ZWQpIHRoaXMucGF5bWVudFJlcXVlc3Qub24oJ3BheW1lbnRtZXRob2QnLCBldiA9PiB0aGlzLnBheW1lbnRNZXRob2QuZW1pdChldikpO1xuICAgIGlmICh0aGlzLnNvdXJjZS5vYnNlcnZlZCAmJiAhdGhpcy5wYXltZW50TWV0aG9kLm9ic2VydmVkKSB0aGlzLnBheW1lbnRSZXF1ZXN0Lm9uKCdzb3VyY2UnLCBldiA9PiB0aGlzLnNvdXJjZS5lbWl0KGV2KSk7XG4gICAgdGhpcy5wYXltZW50UmVxdWVzdC5vbignY2FuY2VsJywgKCkgPT4gdGhpcy5jYW5jZWwuZW1pdCgpKTtcbiAgICB0aGlzLnBheW1lbnRSZXF1ZXN0Lm9uKCdzaGlwcGluZ2FkZHJlc3NjaGFuZ2UnLCBldiA9PiB0aGlzLnNoaXBwaW5nYWRkcmVzc2NoYW5nZS5lbWl0KGV2KSk7XG4gICAgdGhpcy5wYXltZW50UmVxdWVzdC5vbignc2hpcHBpbmdvcHRpb25jaGFuZ2UnLCBldiA9PiB0aGlzLnNoaXBwaW5nb3B0aW9uY2hhbmdlLmVtaXQoZXYpKTtcbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnQudW5tb3VudCgpO1xuICAgIH1cbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmVsZW1lbnRzLmNyZWF0ZSgncGF5bWVudFJlcXVlc3RCdXR0b24nLCB7XG4gICAgICBwYXltZW50UmVxdWVzdDogdGhpcy5wYXltZW50UmVxdWVzdCxcbiAgICAgIC4uLm9wdGlvbnNcbiAgICB9KTtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnBheW1lbnRSZXF1ZXN0LmNhbk1ha2VQYXltZW50KCk7XG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgdGhpcy5lbGVtZW50Lm9uKCdjbGljaycsIGV2ID0+IHRoaXMuY2hhbmdlLmVtaXQoZXYpKTtcbiAgICAgIHRoaXMuZWxlbWVudC5vbignYmx1cicsICgpID0+IHRoaXMuYmx1ci5lbWl0KCkpO1xuICAgICAgdGhpcy5lbGVtZW50Lm9uKCdmb2N1cycsICgpID0+IHRoaXMuZm9jdXMuZW1pdCgpKTtcbiAgICAgIHRoaXMuZWxlbWVudC5vbigncmVhZHknLCAoKSA9PiB0aGlzLnJlYWR5LmVtaXQoKSk7XG4gICAgICB0aGlzLmVsZW1lbnQubW91bnQodGhpcy5zdHJpcGVFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgdGhpcy5sb2FkLmVtaXQoe1xuICAgICAgICBwYXltZW50UmVxdWVzdEJ1dHRvbjogdGhpcy5lbGVtZW50LFxuICAgICAgICBwYXltZW50UmVxdWVzdDogdGhpcy5wYXltZW50UmVxdWVzdFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubm90YXZhaWxhYmxlLmVtaXQoKTtcbiAgICB9XG4gIH1cbiAgc3RhdGljIMm1ZmFjID0gZnVuY3Rpb24gU3RyaXBlUGF5bWVudFJlcXVlc3RCdXR0b25Db21wb25lbnRfRmFjdG9yeShfX25nRmFjdG9yeVR5cGVfXykge1xuICAgIHJldHVybiBuZXcgKF9fbmdGYWN0b3J5VHlwZV9fIHx8IFN0cmlwZVBheW1lbnRSZXF1ZXN0QnV0dG9uQ29tcG9uZW50KShpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KFN0cmlwZUVsZW1lbnRzU2VydmljZSksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoU3RyaXBlRWxlbWVudHNEaXJlY3RpdmUsIDgpKTtcbiAgfTtcbiAgc3RhdGljIMm1Y21wID0gLyogQF9fUFVSRV9fICovaTAuybXJtWRlZmluZUNvbXBvbmVudCh7XG4gICAgdHlwZTogU3RyaXBlUGF5bWVudFJlcXVlc3RCdXR0b25Db21wb25lbnQsXG4gICAgc2VsZWN0b3JzOiBbW1wibmd4LXN0cmlwZS1wYXltZW50LXJlcXVlc3QtYnV0dG9uXCJdXSxcbiAgICB2aWV3UXVlcnk6IGZ1bmN0aW9uIFN0cmlwZVBheW1lbnRSZXF1ZXN0QnV0dG9uQ29tcG9uZW50X1F1ZXJ5KHJmLCBjdHgpIHtcbiAgICAgIGlmIChyZiAmIDEpIHtcbiAgICAgICAgaTAuybXJtXZpZXdRdWVyeShfYzAsIDUpO1xuICAgICAgfVxuICAgICAgaWYgKHJmICYgMikge1xuICAgICAgICBsZXQgX3Q7XG4gICAgICAgIGkwLsm1ybVxdWVyeVJlZnJlc2goX3QgPSBpMC7Jtcm1bG9hZFF1ZXJ5KCkpICYmIChjdHguc3RyaXBlRWxlbWVudFJlZiA9IF90LmZpcnN0KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGlucHV0czoge1xuICAgICAgY29udGFpbmVyQ2xhc3M6IFwiY29udGFpbmVyQ2xhc3NcIixcbiAgICAgIHBheW1lbnRPcHRpb25zOiBcInBheW1lbnRPcHRpb25zXCIsXG4gICAgICBvcHRpb25zOiBcIm9wdGlvbnNcIixcbiAgICAgIGVsZW1lbnRzT3B0aW9uczogXCJlbGVtZW50c09wdGlvbnNcIixcbiAgICAgIHN0cmlwZTogXCJzdHJpcGVcIlxuICAgIH0sXG4gICAgb3V0cHV0czoge1xuICAgICAgbG9hZDogXCJsb2FkXCIsXG4gICAgICBjaGFuZ2U6IFwiY2hhbmdlXCIsXG4gICAgICBibHVyOiBcImJsdXJcIixcbiAgICAgIGZvY3VzOiBcImZvY3VzXCIsXG4gICAgICByZWFkeTogXCJyZWFkeVwiLFxuICAgICAgdG9rZW46IFwidG9rZW5cIixcbiAgICAgIHBheW1lbnRNZXRob2Q6IFwicGF5bWVudE1ldGhvZFwiLFxuICAgICAgc291cmNlOiBcInNvdXJjZVwiLFxuICAgICAgY2FuY2VsOiBcImNhbmNlbFwiLFxuICAgICAgc2hpcHBpbmdhZGRyZXNzY2hhbmdlOiBcInNoaXBwaW5nYWRkcmVzc2NoYW5nZVwiLFxuICAgICAgc2hpcHBpbmdvcHRpb25jaGFuZ2U6IFwic2hpcHBpbmdvcHRpb25jaGFuZ2VcIixcbiAgICAgIG5vdGF2YWlsYWJsZTogXCJub3RhdmFpbGFibGVcIlxuICAgIH0sXG4gICAgZmVhdHVyZXM6IFtpMC7Jtcm1TmdPbkNoYW5nZXNGZWF0dXJlXSxcbiAgICBkZWNsczogMixcbiAgICB2YXJzOiAwLFxuICAgIGNvbnN0czogW1tcInN0cmlwZUVsZW1lbnRSZWZcIiwgXCJcIl0sIFsxLCBcImZpZWxkXCJdXSxcbiAgICB0ZW1wbGF0ZTogZnVuY3Rpb24gU3RyaXBlUGF5bWVudFJlcXVlc3RCdXR0b25Db21wb25lbnRfVGVtcGxhdGUocmYsIGN0eCkge1xuICAgICAgaWYgKHJmICYgMSkge1xuICAgICAgICBpMC7Jtcm1ZWxlbWVudCgwLCBcImRpdlwiLCAxLCAwKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRlcGVuZGVuY2llczogW0NvbW1vbk1vZHVsZV0sXG4gICAgZW5jYXBzdWxhdGlvbjogMlxuICB9KTtcbn1cbigoKSA9PiB7XG4gICh0eXBlb2YgbmdEZXZNb2RlID09PSBcInVuZGVmaW5lZFwiIHx8IG5nRGV2TW9kZSkgJiYgaTAuybVzZXRDbGFzc01ldGFkYXRhKFN0cmlwZVBheW1lbnRSZXF1ZXN0QnV0dG9uQ29tcG9uZW50LCBbe1xuICAgIHR5cGU6IENvbXBvbmVudCxcbiAgICBhcmdzOiBbe1xuICAgICAgc2VsZWN0b3I6ICduZ3gtc3RyaXBlLXBheW1lbnQtcmVxdWVzdC1idXR0b24nLFxuICAgICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImZpZWxkXCIgI3N0cmlwZUVsZW1lbnRSZWY+PC9kaXY+YCxcbiAgICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdXG4gICAgfV1cbiAgfV0sICgpID0+IFt7XG4gICAgdHlwZTogU3RyaXBlRWxlbWVudHNTZXJ2aWNlXG4gIH0sIHtcbiAgICB0eXBlOiBTdHJpcGVFbGVtZW50c0RpcmVjdGl2ZSxcbiAgICBkZWNvcmF0b3JzOiBbe1xuICAgICAgdHlwZTogT3B0aW9uYWxcbiAgICB9XVxuICB9XSwge1xuICAgIHN0cmlwZUVsZW1lbnRSZWY6IFt7XG4gICAgICB0eXBlOiBWaWV3Q2hpbGQsXG4gICAgICBhcmdzOiBbJ3N0cmlwZUVsZW1lbnRSZWYnXVxuICAgIH1dLFxuICAgIGNvbnRhaW5lckNsYXNzOiBbe1xuICAgICAgdHlwZTogSW5wdXRcbiAgICB9XSxcbiAgICBwYXltZW50T3B0aW9uczogW3tcbiAgICAgIHR5cGU6IElucHV0XG4gICAgfV0sXG4gICAgb3B0aW9uczogW3tcbiAgICAgIHR5cGU6IElucHV0XG4gICAgfV0sXG4gICAgZWxlbWVudHNPcHRpb25zOiBbe1xuICAgICAgdHlwZTogSW5wdXRcbiAgICB9XSxcbiAgICBzdHJpcGU6IFt7XG4gICAgICB0eXBlOiBJbnB1dFxuICAgIH1dLFxuICAgIGxvYWQ6IFt7XG4gICAgICB0eXBlOiBPdXRwdXRcbiAgICB9XSxcbiAgICBjaGFuZ2U6IFt7XG4gICAgICB0eXBlOiBPdXRwdXRcbiAgICB9XSxcbiAgICBibHVyOiBbe1xuICAgICAgdHlwZTogT3V0cHV0XG4gICAgfV0sXG4gICAgZm9jdXM6IFt7XG4gICAgICB0eXBlOiBPdXRwdXRcbiAgICB9XSxcbiAgICByZWFkeTogW3tcbiAgICAgIHR5cGU6IE91dHB1dFxuICAgIH1dLFxuICAgIHRva2VuOiBbe1xuICAgICAgdHlwZTogT3V0cHV0XG4gICAgfV0sXG4gICAgcGF5bWVudE1ldGhvZDogW3tcbiAgICAgIHR5cGU6IE91dHB1dFxuICAgIH1dLFxuICAgIHNvdXJjZTogW3tcbiAgICAgIHR5cGU6IE91dHB1dFxuICAgIH1dLFxuICAgIGNhbmNlbDogW3tcbiAgICAgIHR5cGU6IE91dHB1dFxuICAgIH1dLFxuICAgIHNoaXBwaW5nYWRkcmVzc2NoYW5nZTogW3tcbiAgICAgIHR5cGU6IE91dHB1dFxuICAgIH1dLFxuICAgIHNoaXBwaW5nb3B0aW9uY2hhbmdlOiBbe1xuICAgICAgdHlwZTogT3V0cHV0XG4gICAgfV0sXG4gICAgbm90YXZhaWxhYmxlOiBbe1xuICAgICAgdHlwZTogT3V0cHV0XG4gICAgfV1cbiAgfSk7XG59KSgpO1xuY2xhc3MgU3RyaXBlRmFjdG9yeVNlcnZpY2Uge1xuICB2ZXJzaW9uO1xuICBiYXNlS2V5O1xuICBiYXNlT3B0aW9ucztcbiAgbG9hZGVyO1xuICB3aW5kb3c7XG4gIGNvbnN0cnVjdG9yKHZlcnNpb24sIGJhc2VLZXksIGJhc2VPcHRpb25zLCBsb2FkZXIsIHdpbmRvdykge1xuICAgIHRoaXMudmVyc2lvbiA9IHZlcnNpb247XG4gICAgdGhpcy5iYXNlS2V5ID0gYmFzZUtleTtcbiAgICB0aGlzLmJhc2VPcHRpb25zID0gYmFzZU9wdGlvbnM7XG4gICAgdGhpcy5sb2FkZXIgPSBsb2FkZXI7XG4gICAgdGhpcy53aW5kb3cgPSB3aW5kb3c7XG4gIH1cbiAgY3JlYXRlKGtleSwgb3B0aW9ucykge1xuICAgIGlmICgha2V5ICYmICF0aGlzLmJhc2VLZXkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm8ga2V5IGRlZmluZWQhIEVpdGhlciB5b3UgbmVlZCB0byBwYXNzIGl0IGFzIGEgcGFyYW1ldGVyIG9yIGRlZmluZSBpdCB3aGVuIHlvdSBjYWxsIE5neFN0cmlwZU1vZHVsZS5mb3JSb290KCknKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBTdHJpcGVJbnN0YW5jZSh0aGlzLnZlcnNpb24sIHRoaXMubG9hZGVyLCB0aGlzLndpbmRvdywga2V5IHx8IHRoaXMuYmFzZUtleSwgb3B0aW9ucyB8fCB0aGlzLmJhc2VPcHRpb25zKTtcbiAgfVxuICBzdGF0aWMgybVmYWMgPSBmdW5jdGlvbiBTdHJpcGVGYWN0b3J5U2VydmljZV9GYWN0b3J5KF9fbmdGYWN0b3J5VHlwZV9fKSB7XG4gICAgcmV0dXJuIG5ldyAoX19uZ0ZhY3RvcnlUeXBlX18gfHwgU3RyaXBlRmFjdG9yeVNlcnZpY2UpKGkwLsm1ybVpbmplY3QoTkdYX1NUUklQRV9WRVJTSU9OKSwgaTAuybXJtWluamVjdChTVFJJUEVfUFVCTElTSEFCTEVfS0VZKSwgaTAuybXJtWluamVjdChTVFJJUEVfT1BUSU9OUyksIGkwLsm1ybVpbmplY3QoTGF6eVN0cmlwZUFQSUxvYWRlciksIGkwLsm1ybVpbmplY3QoV2luZG93UmVmKSk7XG4gIH07XG4gIHN0YXRpYyDJtXByb3YgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lSW5qZWN0YWJsZSh7XG4gICAgdG9rZW46IFN0cmlwZUZhY3RvcnlTZXJ2aWNlLFxuICAgIGZhY3Rvcnk6IFN0cmlwZUZhY3RvcnlTZXJ2aWNlLsm1ZmFjXG4gIH0pO1xufVxuKCgpID0+IHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoU3RyaXBlRmFjdG9yeVNlcnZpY2UsIFt7XG4gICAgdHlwZTogSW5qZWN0YWJsZVxuICB9XSwgKCkgPT4gW3tcbiAgICB0eXBlOiB1bmRlZmluZWQsXG4gICAgZGVjb3JhdG9yczogW3tcbiAgICAgIHR5cGU6IEluamVjdCxcbiAgICAgIGFyZ3M6IFtOR1hfU1RSSVBFX1ZFUlNJT05dXG4gICAgfV1cbiAgfSwge1xuICAgIHR5cGU6IHVuZGVmaW5lZCxcbiAgICBkZWNvcmF0b3JzOiBbe1xuICAgICAgdHlwZTogSW5qZWN0LFxuICAgICAgYXJnczogW1NUUklQRV9QVUJMSVNIQUJMRV9LRVldXG4gICAgfV1cbiAgfSwge1xuICAgIHR5cGU6IHVuZGVmaW5lZCxcbiAgICBkZWNvcmF0b3JzOiBbe1xuICAgICAgdHlwZTogSW5qZWN0LFxuICAgICAgYXJnczogW1NUUklQRV9PUFRJT05TXVxuICAgIH1dXG4gIH0sIHtcbiAgICB0eXBlOiBMYXp5U3RyaXBlQVBJTG9hZGVyXG4gIH0sIHtcbiAgICB0eXBlOiBXaW5kb3dSZWZcbiAgfV0sIG51bGwpO1xufSkoKTtcbmNvbnN0IGNvbXBvbmVudHMgPSBbU3RyaXBlQWRkcmVzc0NvbXBvbmVudCwgU3RyaXBlQWZmaXJtTWVzc2FnZUNvbXBvbmVudCwgU3RyaXBlQWZ0ZXJwYXlDbGVhcnBheU1lc3NhZ2VDb21wb25lbnQsIFN0cmlwZUNhcmRDb21wb25lbnQsIFN0cmlwZUNhcmROdW1iZXJDb21wb25lbnQsIFN0cmlwZUNhcmRFeHBpcnlDb21wb25lbnQsIFN0cmlwZUNhcmRDdmNDb21wb25lbnQsIFN0cmlwZUVwc0JhbmtDb21wb25lbnQsIFN0cmlwZUV4cHJlc3NDaGVja291dENvbXBvbmVudCwgU3RyaXBlRnB4QmFua0NvbXBvbmVudCwgU3RyaXBlSWJhbkNvbXBvbmVudCwgU3RyaXBlSWRlYWxCYW5rQ29tcG9uZW50LCBTdHJpcGVJc3N1aW5nQ2FyZEN2Y0Rpc3BsYXlDb21wb25lbnQsIFN0cmlwZUlzc3VpbmdDYXJkRXhwaXJ5RGlzcGxheUNvbXBvbmVudCwgU3RyaXBlSXNzdWluZ0NhcmROdW1iZXJEaXNwbGF5Q29tcG9uZW50LCBTdHJpcGVJc3N1aW5nQ2FyZFBpbkRpc3BsYXlDb21wb25lbnQsIFN0cmlwZUxpbmtBdXRoZW50aWNhdGlvbkNvbXBvbmVudCwgU3RyaXBlUDI0QmFua0NvbXBvbmVudCwgU3RyaXBlQXVCYW5rQWNjb3VudENvbXBvbmVudCwgU3RyaXBlUGF5bWVudEVsZW1lbnRDb21wb25lbnQsIFN0cmlwZVBheW1lbnRNZXRob2RNZXNzYWdpbmdDb21wb25lbnQsIFN0cmlwZVBheW1lbnRSZXF1ZXN0QnV0dG9uQ29tcG9uZW50XTtcbmNvbnN0IGRpcmVjdGl2ZXMgPSBbU3RyaXBlQ2FyZEdyb3VwRGlyZWN0aXZlLCBTdHJpcGVFbGVtZW50c0RpcmVjdGl2ZSwgTmd4U3RyaXBlRWxlbWVudExvYWRpbmdUZW1wbGF0ZURpcmVjdGl2ZV07XG5jb25zdCBjdXJyZW50VmVyc2lvbiA9ICcxOS43LjAnO1xuZnVuY3Rpb24gX3Byb3ZpZGVOZ3hTdHJpcGUocHVibGlzaGFibGVLZXksIG9wdGlvbnMpIHtcbiAgcmV0dXJuIFtMYXp5U3RyaXBlQVBJTG9hZGVyLCBTdHJpcGVTZXJ2aWNlLCBTdHJpcGVGYWN0b3J5U2VydmljZSwgU3RyaXBlRWxlbWVudHNTZXJ2aWNlLCBXaW5kb3dSZWYsIERvY3VtZW50UmVmLCB7XG4gICAgcHJvdmlkZTogU1RSSVBFX1BVQkxJU0hBQkxFX0tFWSxcbiAgICB1c2VWYWx1ZTogcHVibGlzaGFibGVLZXlcbiAgfSwge1xuICAgIHByb3ZpZGU6IFNUUklQRV9PUFRJT05TLFxuICAgIHVzZVZhbHVlOiBvcHRpb25zXG4gIH0sIHtcbiAgICBwcm92aWRlOiBOR1hfU1RSSVBFX1ZFUlNJT04sXG4gICAgdXNlVmFsdWU6IGN1cnJlbnRWZXJzaW9uXG4gIH1dO1xufVxuLyoqXG4gKiBQcm92aWRlcyB0aGUgZ2xvYmFsIE5neFN0cmlwZSBwcm92aWRlcnMgYW5kIGluaXRpYWxpemVzLlxuICpcbiAqIEB1c2FnZU5vdGVzXG4gKlxuICogIyMjIFByb3ZpZGluZyB0aGUgR2xvYmFsIE5neFN0cmlwZVxuICpcbiAqIGBgYHRzXG4gKiBib290c3RyYXBBcHBsaWNhdGlvbihBcHBDb21wb25lbnQsIHtcbiAqICAgcHJvdmlkZXJzOiBbcHJvdmlkZU5neFN0cmlwZShTVFJJUEVfS0VZKV0sXG4gKiB9KTtcbiAqIGBgYFxuICovXG5mdW5jdGlvbiBwcm92aWRlTmd4U3RyaXBlKHB1Ymxpc2hhYmxlS2V5LCBvcHRpb25zKSB7XG4gIHJldHVybiBtYWtlRW52aXJvbm1lbnRQcm92aWRlcnMoWy4uLl9wcm92aWRlTmd4U3RyaXBlKHB1Ymxpc2hhYmxlS2V5LCBvcHRpb25zKV0pO1xufVxuY2xhc3MgTmd4U3RyaXBlTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QocHVibGlzaGFibGVLZXksIG9wdGlvbnMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5neFN0cmlwZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogWy4uLl9wcm92aWRlTmd4U3RyaXBlKHB1Ymxpc2hhYmxlS2V5LCBvcHRpb25zKV1cbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZFxuICAgKi9cbiAgc3RhdGljIGZvckNoaWxkKHB1Ymxpc2hhYmxlS2V5LCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ3hTdHJpcGVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFsuLi5fcHJvdmlkZU5neFN0cmlwZShwdWJsaXNoYWJsZUtleSwgb3B0aW9ucyldXG4gICAgfTtcbiAgfVxuICBzdGF0aWMgybVmYWMgPSBmdW5jdGlvbiBOZ3hTdHJpcGVNb2R1bGVfRmFjdG9yeShfX25nRmFjdG9yeVR5cGVfXykge1xuICAgIHJldHVybiBuZXcgKF9fbmdGYWN0b3J5VHlwZV9fIHx8IE5neFN0cmlwZU1vZHVsZSkoKTtcbiAgfTtcbiAgc3RhdGljIMm1bW9kID0gLyogQF9fUFVSRV9fICovaTAuybXJtWRlZmluZU5nTW9kdWxlKHtcbiAgICB0eXBlOiBOZ3hTdHJpcGVNb2R1bGUsXG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgU3RyaXBlQWRkcmVzc0NvbXBvbmVudCwgU3RyaXBlQWZmaXJtTWVzc2FnZUNvbXBvbmVudCwgU3RyaXBlQWZ0ZXJwYXlDbGVhcnBheU1lc3NhZ2VDb21wb25lbnQsIFN0cmlwZUNhcmRDb21wb25lbnQsIFN0cmlwZUNhcmROdW1iZXJDb21wb25lbnQsIFN0cmlwZUNhcmRFeHBpcnlDb21wb25lbnQsIFN0cmlwZUNhcmRDdmNDb21wb25lbnQsIFN0cmlwZUVwc0JhbmtDb21wb25lbnQsIFN0cmlwZUV4cHJlc3NDaGVja291dENvbXBvbmVudCwgU3RyaXBlRnB4QmFua0NvbXBvbmVudCwgU3RyaXBlSWJhbkNvbXBvbmVudCwgU3RyaXBlSWRlYWxCYW5rQ29tcG9uZW50LCBTdHJpcGVJc3N1aW5nQ2FyZEN2Y0Rpc3BsYXlDb21wb25lbnQsIFN0cmlwZUlzc3VpbmdDYXJkRXhwaXJ5RGlzcGxheUNvbXBvbmVudCwgU3RyaXBlSXNzdWluZ0NhcmROdW1iZXJEaXNwbGF5Q29tcG9uZW50LCBTdHJpcGVJc3N1aW5nQ2FyZFBpbkRpc3BsYXlDb21wb25lbnQsIFN0cmlwZUxpbmtBdXRoZW50aWNhdGlvbkNvbXBvbmVudCwgU3RyaXBlUDI0QmFua0NvbXBvbmVudCwgU3RyaXBlQXVCYW5rQWNjb3VudENvbXBvbmVudCwgU3RyaXBlUGF5bWVudEVsZW1lbnRDb21wb25lbnQsIFN0cmlwZVBheW1lbnRNZXRob2RNZXNzYWdpbmdDb21wb25lbnQsIFN0cmlwZVBheW1lbnRSZXF1ZXN0QnV0dG9uQ29tcG9uZW50LCBTdHJpcGVDYXJkR3JvdXBEaXJlY3RpdmUsIFN0cmlwZUVsZW1lbnRzRGlyZWN0aXZlLCBOZ3hTdHJpcGVFbGVtZW50TG9hZGluZ1RlbXBsYXRlRGlyZWN0aXZlXSxcbiAgICBleHBvcnRzOiBbU3RyaXBlQWRkcmVzc0NvbXBvbmVudCwgU3RyaXBlQWZmaXJtTWVzc2FnZUNvbXBvbmVudCwgU3RyaXBlQWZ0ZXJwYXlDbGVhcnBheU1lc3NhZ2VDb21wb25lbnQsIFN0cmlwZUNhcmRDb21wb25lbnQsIFN0cmlwZUNhcmROdW1iZXJDb21wb25lbnQsIFN0cmlwZUNhcmRFeHBpcnlDb21wb25lbnQsIFN0cmlwZUNhcmRDdmNDb21wb25lbnQsIFN0cmlwZUVwc0JhbmtDb21wb25lbnQsIFN0cmlwZUV4cHJlc3NDaGVja291dENvbXBvbmVudCwgU3RyaXBlRnB4QmFua0NvbXBvbmVudCwgU3RyaXBlSWJhbkNvbXBvbmVudCwgU3RyaXBlSWRlYWxCYW5rQ29tcG9uZW50LCBTdHJpcGVJc3N1aW5nQ2FyZEN2Y0Rpc3BsYXlDb21wb25lbnQsIFN0cmlwZUlzc3VpbmdDYXJkRXhwaXJ5RGlzcGxheUNvbXBvbmVudCwgU3RyaXBlSXNzdWluZ0NhcmROdW1iZXJEaXNwbGF5Q29tcG9uZW50LCBTdHJpcGVJc3N1aW5nQ2FyZFBpbkRpc3BsYXlDb21wb25lbnQsIFN0cmlwZUxpbmtBdXRoZW50aWNhdGlvbkNvbXBvbmVudCwgU3RyaXBlUDI0QmFua0NvbXBvbmVudCwgU3RyaXBlQXVCYW5rQWNjb3VudENvbXBvbmVudCwgU3RyaXBlUGF5bWVudEVsZW1lbnRDb21wb25lbnQsIFN0cmlwZVBheW1lbnRNZXRob2RNZXNzYWdpbmdDb21wb25lbnQsIFN0cmlwZVBheW1lbnRSZXF1ZXN0QnV0dG9uQ29tcG9uZW50LCBTdHJpcGVDYXJkR3JvdXBEaXJlY3RpdmUsIFN0cmlwZUVsZW1lbnRzRGlyZWN0aXZlLCBOZ3hTdHJpcGVFbGVtZW50TG9hZGluZ1RlbXBsYXRlRGlyZWN0aXZlXVxuICB9KTtcbiAgc3RhdGljIMm1aW5qID0gLyogQF9fUFVSRV9fICovaTAuybXJtWRlZmluZUluamVjdG9yKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBjb21wb25lbnRzXVxuICB9KTtcbn1cbigoKSA9PiB7XG4gICh0eXBlb2YgbmdEZXZNb2RlID09PSBcInVuZGVmaW5lZFwiIHx8IG5nRGV2TW9kZSkgJiYgaTAuybVzZXRDbGFzc01ldGFkYXRhKE5neFN0cmlwZU1vZHVsZSwgW3tcbiAgICB0eXBlOiBOZ01vZHVsZSxcbiAgICBhcmdzOiBbe1xuICAgICAgZXhwb3J0czogWy4uLmNvbXBvbmVudHMsIC4uLmRpcmVjdGl2ZXNdLFxuICAgICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgLi4uY29tcG9uZW50cywgLi4uZGlyZWN0aXZlc11cbiAgICB9XVxuICB9XSwgbnVsbCwgbnVsbCk7XG59KSgpO1xuZnVuY3Rpb24gaW5qZWN0U3RyaXBlKHB1Ymxpc2hhYmxlS2V5LCBvcHRpb25zKSB7XG4gIGlmIChwdWJsaXNoYWJsZUtleSkge1xuICAgIGNvbnN0IGZhY3RvcnkgPSBpbmplY3QoU3RyaXBlRmFjdG9yeVNlcnZpY2UpO1xuICAgIHJldHVybiBmYWN0b3J5LmNyZWF0ZShwdWJsaXNoYWJsZUtleSwgb3B0aW9ucyk7XG4gIH0gZWxzZSBpZiAoaW5qZWN0KFNUUklQRV9QVUJMSVNIQUJMRV9LRVkpKSB7XG4gICAgcmV0dXJuIGluamVjdChTdHJpcGVTZXJ2aWNlKTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoJ1B1Ymxpc2hhYmxlIEtleSBpcyByZXF1aXJlZCBlaXRoZXIgZ2xvYmFsIG9yIHBhc3MgYXMgcGFyYW1ldGVyJyk7XG59XG5cbi8qXG4gKiBQdWJsaWMgQVBJIFN1cmZhY2Ugb2Ygbmd4LXN0cmlwZVxuICovXG5cbi8qKlxuICogR2VuZXJhdGVkIGJ1bmRsZSBpbmRleC4gRG8gbm90IGVkaXQuXG4gKi9cblxuZXhwb3J0IHsgRG9jdW1lbnRSZWYsIExhenlTdHJpcGVBUElMb2FkZXIsIE5HWF9TVFJJUEVfVkVSU0lPTiwgTmd4U3RyaXBlRWxlbWVudExvYWRpbmdUZW1wbGF0ZURpcmVjdGl2ZSwgTmd4U3RyaXBlTW9kdWxlLCBTVFJJUEVfT1BUSU9OUywgU1RSSVBFX1BVQkxJU0hBQkxFX0tFWSwgU3RyaXBlQWRkcmVzc0NvbXBvbmVudCwgU3RyaXBlQWZmaXJtTWVzc2FnZUNvbXBvbmVudCwgU3RyaXBlQWZ0ZXJwYXlDbGVhcnBheU1lc3NhZ2VDb21wb25lbnQsIFN0cmlwZUF1QmFua0FjY291bnRDb21wb25lbnQsIFN0cmlwZUNhcmRDb21wb25lbnQsIFN0cmlwZUNhcmRDdmNDb21wb25lbnQsIFN0cmlwZUNhcmRFeHBpcnlDb21wb25lbnQsIFN0cmlwZUNhcmRHcm91cERpcmVjdGl2ZSwgU3RyaXBlQ2FyZE51bWJlckNvbXBvbmVudCwgU3RyaXBlRWxlbWVudHNEaXJlY3RpdmUsIFN0cmlwZUVsZW1lbnRzU2VydmljZSwgU3RyaXBlRXBzQmFua0NvbXBvbmVudCwgU3RyaXBlRXhwcmVzc0NoZWNrb3V0Q29tcG9uZW50LCBTdHJpcGVGYWN0b3J5U2VydmljZSwgU3RyaXBlRnB4QmFua0NvbXBvbmVudCwgU3RyaXBlSWJhbkNvbXBvbmVudCwgU3RyaXBlSWRlYWxCYW5rQ29tcG9uZW50LCBTdHJpcGVJbnN0YW5jZSwgU3RyaXBlSXNzdWluZ0NhcmRDdmNEaXNwbGF5Q29tcG9uZW50LCBTdHJpcGVJc3N1aW5nQ2FyZEV4cGlyeURpc3BsYXlDb21wb25lbnQsIFN0cmlwZUlzc3VpbmdDYXJkTnVtYmVyRGlzcGxheUNvbXBvbmVudCwgU3RyaXBlSXNzdWluZ0NhcmRQaW5EaXNwbGF5Q29tcG9uZW50LCBTdHJpcGVMaW5rQXV0aGVudGljYXRpb25Db21wb25lbnQsIFN0cmlwZVAyNEJhbmtDb21wb25lbnQsIFN0cmlwZVBheW1lbnRFbGVtZW50Q29tcG9uZW50LCBTdHJpcGVQYXltZW50TWV0aG9kTWVzc2FnaW5nQ29tcG9uZW50LCBTdHJpcGVQYXltZW50UmVxdWVzdEJ1dHRvbkNvbXBvbmVudCwgU3RyaXBlU2VydmljZSwgV2luZG93UmVmLCBpbmplY3RTdHJpcGUsIHByb3ZpZGVOZ3hTdHJpcGUgfTtcbiIsImltcG9ydCB7IHJlZ2lzdGVyUGx1Z2luIH0gZnJvbSAnQGNhcGFjaXRvci9jb3JlJztcbmNvbnN0IFN0cmlwZSA9IHJlZ2lzdGVyUGx1Z2luKCdTdHJpcGUnLCB7XG4gIHdlYjogKCkgPT4gaW1wb3J0KCcuL3dlYicpLnRoZW4obSA9PiBuZXcgbS5TdHJpcGVXZWIoKSlcbn0pO1xuZXhwb3J0ICogZnJvbSAnLi9kZWZpbml0aW9ucyc7XG5leHBvcnQgeyBTdHJpcGUgfTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUEsSUFBTSxNQUFNLENBQUMsa0JBQWtCO0FBQy9CLFNBQVMsOENBQThDLElBQUksS0FBSztBQUM5RCxNQUFJLEtBQUssR0FBRztBQUNWLElBQUcsNkJBQW1CLEdBQUcsQ0FBQztBQUFBLEVBQzVCO0FBQ0EsTUFBSSxLQUFLLEdBQUc7QUFDVixVQUFNLFNBQVksd0JBQWM7QUFDaEMsSUFBRyxxQkFBVyxvQkFBb0IsT0FBTyxlQUFlO0FBQUEsRUFDMUQ7QUFDRjtBQUNBLFNBQVMsb0RBQW9ELElBQUksS0FBSztBQUNwRSxNQUFJLEtBQUssR0FBRztBQUNWLElBQUcsNkJBQW1CLEdBQUcsQ0FBQztBQUFBLEVBQzVCO0FBQ0EsTUFBSSxLQUFLLEdBQUc7QUFDVixVQUFNLFNBQVksd0JBQWM7QUFDaEMsSUFBRyxxQkFBVyxvQkFBb0IsT0FBTyxlQUFlO0FBQUEsRUFDMUQ7QUFDRjtBQUNBLFNBQVMsOERBQThELElBQUksS0FBSztBQUM5RSxNQUFJLEtBQUssR0FBRztBQUNWLElBQUcsNkJBQW1CLEdBQUcsQ0FBQztBQUFBLEVBQzVCO0FBQ0EsTUFBSSxLQUFLLEdBQUc7QUFDVixVQUFNLFNBQVksd0JBQWM7QUFDaEMsSUFBRyxxQkFBVyxvQkFBb0IsT0FBTyxlQUFlO0FBQUEsRUFDMUQ7QUFDRjtBQUNBLFNBQVMsMkNBQTJDLElBQUksS0FBSztBQUMzRCxNQUFJLEtBQUssR0FBRztBQUNWLElBQUcsNkJBQW1CLEdBQUcsQ0FBQztBQUFBLEVBQzVCO0FBQ0EsTUFBSSxLQUFLLEdBQUc7QUFDVixVQUFNLFNBQVksd0JBQWM7QUFDaEMsSUFBRyxxQkFBVyxvQkFBb0IsT0FBTyxlQUFlO0FBQUEsRUFDMUQ7QUFDRjtBQUNBLFNBQVMsaURBQWlELElBQUksS0FBSztBQUNqRSxNQUFJLEtBQUssR0FBRztBQUNWLElBQUcsNkJBQW1CLEdBQUcsQ0FBQztBQUFBLEVBQzVCO0FBQ0EsTUFBSSxLQUFLLEdBQUc7QUFDVixVQUFNLFNBQVksd0JBQWM7QUFDaEMsSUFBRyxxQkFBVyxvQkFBb0IsT0FBTyxlQUFlO0FBQUEsRUFDMUQ7QUFDRjtBQUNBLFNBQVMsaURBQWlELElBQUksS0FBSztBQUNqRSxNQUFJLEtBQUssR0FBRztBQUNWLElBQUcsNkJBQW1CLEdBQUcsQ0FBQztBQUFBLEVBQzVCO0FBQ0EsTUFBSSxLQUFLLEdBQUc7QUFDVixVQUFNLFNBQVksd0JBQWM7QUFDaEMsSUFBRyxxQkFBVyxvQkFBb0IsT0FBTyxlQUFlO0FBQUEsRUFDMUQ7QUFDRjtBQUNBLFNBQVMsOENBQThDLElBQUksS0FBSztBQUM5RCxNQUFJLEtBQUssR0FBRztBQUNWLElBQUcsNkJBQW1CLEdBQUcsQ0FBQztBQUFBLEVBQzVCO0FBQ0EsTUFBSSxLQUFLLEdBQUc7QUFDVixVQUFNLFNBQVksd0JBQWM7QUFDaEMsSUFBRyxxQkFBVyxvQkFBb0IsT0FBTyxlQUFlO0FBQUEsRUFDMUQ7QUFDRjtBQUNBLFNBQVMsOENBQThDLElBQUksS0FBSztBQUM5RCxNQUFJLEtBQUssR0FBRztBQUNWLElBQUcsNkJBQW1CLEdBQUcsQ0FBQztBQUFBLEVBQzVCO0FBQ0EsTUFBSSxLQUFLLEdBQUc7QUFDVixVQUFNLFNBQVksd0JBQWM7QUFDaEMsSUFBRyxxQkFBVyxvQkFBb0IsT0FBTyxlQUFlO0FBQUEsRUFD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Qy9DLFNBQVMsQ0FBQyxjQUFjLFVBQVU7QUFDcEMsQ0FBQztBQTFCSCxJQUFNLGtCQUFOO0FBQUEsQ0E0QkMsTUFBTTtBQUNMLEdBQUMsT0FBTyxjQUFjLGVBQWUsY0FBaUIsaUJBQWtCLGlCQUFpQixDQUFDO0FBQUEsSUFDeEYsTUFBTTtBQUFBLElBQ04sTUFBTSxDQUFDO0FBQUEsTUFDTCxTQUFTLENBQUMsR0FBRyxZQUFZLEdBQUcsVUFBVTtBQUFBLE1BQ3RDLFNBQVMsQ0FBQyxjQUFjLEdBQUcsWUFBWSxHQUFHLFVBQVU7QUFBQSxJQUN0RCxDQUFDO0FBQUEsRUFDSCxDQUFDLEdBQUcsTUFBTSxJQUFJO0FBQ2hCLEdBQUc7QUFDSCxTQUFTLGFBQWEsZ0JBQWdCLFNBQVM7QUFDN0MsTUFBSSxnQkFBZ0I7QUFDbEIsVUFBTSxVQUFVLE9BQU8sb0JBQW9CO0FBQzNDLFdBQU8sUUFBUSxPQUFPLGdCQUFnQixPQUFPO0FBQUEsRUFDL0MsV0FBVyxPQUFPLHNCQUFzQixHQUFHO0FBQ3pDLFdBQU8sT0FBTyxhQUFhO0FBQUEsRUFDN0I7QUFDQSxRQUFNLElBQUksTUFBTSxnRUFBZ0U7QUFDbEY7OztBQ2x0TEEsSUFBTSxTQUFTLGVBQWUsVUFBVTtBQUFBLEVBQ3RDLEtBQUssTUFBTSxPQUFPLG1CQUFPLEVBQUUsS0FBSyxPQUFLLElBQUksRUFBRSxVQUFVLENBQUM7QUFDeEQsQ0FBQzsiLCJuYW1lcyI6WyJ3aW5kb3ciLCJkb2N1bWVudCIsIl9hIl0sInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswLDFdfQ==
