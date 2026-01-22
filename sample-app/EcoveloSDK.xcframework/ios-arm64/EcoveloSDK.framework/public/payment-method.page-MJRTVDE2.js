import {
  StripeService
} from "./chunk-RJFLORM4.js";
import {
  CguComponent
} from "./chunk-JXTFHILF.js";
import {
  ForfaitListModalComponent
} from "./chunk-DVVNZNDK.js";
import {
  PaymentMethodsService
} from "./chunk-LYFO6AYO.js";
import {
  CguService
} from "./chunk-ZRNIHMT6.js";
import "./chunk-HCOOL2GW.js";
import {
  HeaderComponent
} from "./chunk-AVAJ3QHV.js";
import {
  StripeElementsDirective,
  StripePaymentElementComponent
} from "./chunk-LZDBSS56.js";
import "./chunk-K2AWDLYV.js";
import "./chunk-EYZBHAOK.js";
import "./chunk-7JCEDXGT.js";
import {
  BooleanValueAccessorDirective,
  IonBadge,
  IonButton,
  IonCard,
  IonCardContent,
  IonCheckbox,
  IonCol,
  IonContent,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
  IonSkeletonText,
  IonText,
  IonicModule,
  RouterLinkDelegateDirective,
  TextValueAccessorDirective
} from "./chunk-Y4K6NO5T.js";
import {
  ForfaitsWrapperService
} from "./chunk-WJQU3GMM.js";
import {
  KYCWrapperService
} from "./chunk-CHFOG66O.js";
import "./chunk-RAVV2QIY.js";
import "./chunk-T6WE2PS5.js";
import {
  AccountService,
  SubscriptionProcessService
} from "./chunk-XK4I5MHM.js";
import "./chunk-GVYZRG6X.js";
import {
  environment
} from "./chunk-FOJAXRYS.js";
import {
  fetchUserAttributes
} from "./chunk-Y7HI6USV.js";
import {
  ErrorHandlerService,
  ToastService
} from "./chunk-SARQRLZR.js";
import {
  addIcons,
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
  IonRouterOutlet2 as IonRouterOutlet,
  LoadingController,
  ModalController,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  Router,
  RouterLink,
  RouterModule,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  ViewChild,
  effect,
  firstValueFrom,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
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

// src/app/pages/auth/payment-method/payment-method.page.ts
var _c0 = () => ["/map"];
function PaymentMethodPage_ion_content_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "ion-skeleton-text", 14);
    \u0275\u0275elementContainerEnd();
  }
}
function PaymentMethodPage_ion_content_1_div_4_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedForfait.fiche.price, " ");
  }
}
function PaymentMethodPage_ion_content_1_div_4_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 16)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "small", 24);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tarif_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(tarif_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tarif_r3.price);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tarif_r3.description);
  }
}
function PaymentMethodPage_ion_content_1_div_4_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275template(1, PaymentMethodPage_ion_content_1_div_4_div_6_div_1_Template, 8, 3, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.selectedForfait.fiche.tarifs);
  }
}
function PaymentMethodPage_ion_content_1_div_4_a_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 25);
    \u0275\u0275listener("click", function PaymentMethodPage_ion_content_1_div_4_a_7_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectedForfait.id === ctx_r1.defaultForfait.id ? ctx_r1.openForfaitModal($event) : ctx_r1.cancelSelection());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedForfait.id === ctx_r1.defaultForfait.id ? \u0275\u0275pipeBind1(2, 1, "forfait.select_another_plan") : \u0275\u0275pipeBind1(3, 3, "forfait.cancel_selection"), " ");
  }
}
function PaymentMethodPage_ion_content_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275elementContainerStart(1);
    \u0275\u0275elementStart(2, "div", 16)(3, "h2", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, PaymentMethodPage_ion_content_1_div_4_div_5_Template, 2, 1, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, PaymentMethodPage_ion_content_1_div_4_div_6_Template, 2, 1, "div", 19)(7, PaymentMethodPage_ion_content_1_div_4_a_7_Template, 4, 5, "a", 20);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("default-forfait", ctx_r1.selectedForfait.id === ctx_r1.defaultForfait.id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.selectedForfait.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedForfait.id !== ctx_r1.defaultForfait.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedForfait.fiche.tarifs);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasForfaitsAvailable === "true");
  }
}
function PaymentMethodPage_ion_content_1_ion_list_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list", 26)(1, "ion-item")(2, "ion-label")(3, "h3");
    \u0275\u0275element(4, "ion-skeleton-text", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275element(6, "ion-skeleton-text", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275element(8, "ion-skeleton-text", 27);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275property("animated", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("animated", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("animated", true);
  }
}
function PaymentMethodPage_ion_content_1_div_6_ion_item_2_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const card_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" Exp. ", card_r5.card.exp_month < 10 ? "0" + card_r5.card.exp_month : card_r5.card.exp_month, "/", card_r5.card.exp_year.toString().slice(-2), " ");
  }
}
function PaymentMethodPage_ion_content_1_div_6_ion_item_2_ion_badge_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-badge", 37);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "cards.default"), " ");
  }
}
function PaymentMethodPage_ion_content_1_div_6_ion_item_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item", 31);
    \u0275\u0275element(1, "ion-icon", 32);
    \u0275\u0275elementStart(2, "ion-label")(3, "div")(4, "span", 33);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div");
    \u0275\u0275template(7, PaymentMethodPage_ion_content_1_div_6_ion_item_2_span_7_Template, 2, 2, "span", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, PaymentMethodPage_ion_content_1_div_6_ion_item_2_ion_badge_8_Template, 3, 3, "ion-badge", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    const card_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.getIcon(card_r5.card == null ? null : card_r5.card.brand));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("****", card_r5.card == null ? null : card_r5.card.last4, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", card_r5.card && card_r5.card.exp_month && card_r5.card.exp_year);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cardsState.state === "success" && ((tmp_7_0 = ctx_r1.paymentMethodService.defaultPaymentMethod()) == null ? null : tmp_7_0.id) === card_r5.id);
  }
}
function PaymentMethodPage_ion_content_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "ion-list", 28);
    \u0275\u0275template(2, PaymentMethodPage_ion_content_1_div_6_ion_item_2_Template, 9, 4, "ion-item", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "hr", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.cardsState.paymentMethods);
  }
}
function PaymentMethodPage_ion_content_1_ng_container_7_ion_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 40);
    \u0275\u0275listener("click", function PaymentMethodPage_ion_content_1_ng_container_7_ion_button_1_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openApplePay());
    });
    \u0275\u0275element(1, "ion-icon", 41);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "cards.pay_with_apple_pay"));
  }
}
function PaymentMethodPage_ion_content_1_ng_container_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "ngx-stripe-elements", 43)(2, "ngx-stripe-payment", 44);
    \u0275\u0275listener("change", function PaymentMethodPage_ion_content_1_ng_container_7_div_2_Template_ngx_stripe_payment_change_2_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleStripeFormFilled($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("stripe", ctx_r1.stripeService.getStripe())("elementsOptions", ctx_r1.options);
  }
}
function PaymentMethodPage_ion_content_1_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, PaymentMethodPage_ion_content_1_ng_container_7_ion_button_1_Template, 5, 3, "ion-button", 38)(2, PaymentMethodPage_ion_content_1_ng_container_7_div_2_Template, 3, 2, "div", 39);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.paymentMode === "applepay");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.options && ctx_r1.paymentMode !== "googlepay");
  }
}
function PaymentMethodPage_ion_content_1_ion_card_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-card", 45)(1, "ion-card-content");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "payment.disclaimer"));
  }
}
function PaymentMethodPage_ion_content_1_ion_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 46);
    \u0275\u0275listener("click", function PaymentMethodPage_ion_content_1_ion_button_17_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.paymentMode === "googlepay" ? ctx_r1.openGooglePay() : ctx_r1.paymentMode === "classic_applepay" ? ctx_r1.stripeService.confirmSetup(ctx_r1.paymentElement.elements, ctx_r1.options.clientSecret, ctx_r1.userAttributes.name) : ctx_r1.confirmSetup());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.cguAccepted === "FALSE" || ctx_r1.stripeFormFilled === "FALSE" && ctx_r1.paymentMode !== "googlepay");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "payment.save_payment_method"), " ");
  }
}
function PaymentMethodPage_ion_content_1_ion_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 46);
    \u0275\u0275listener("click", function PaymentMethodPage_ion_content_1_ion_button_18_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.validateTermsAndRedirect());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.cguAccepted === "FALSE");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "generic.continue"), " ");
  }
}
function PaymentMethodPage_ion_content_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-content", 1)(1, "ion-row", 2)(2, "ion-col", 3);
    \u0275\u0275template(3, PaymentMethodPage_ion_content_1_ng_container_3_Template, 2, 0, "ng-container", 4)(4, PaymentMethodPage_ion_content_1_div_4_Template, 8, 6, "div", 5)(5, PaymentMethodPage_ion_content_1_ion_list_5_Template, 9, 3, "ion-list", 6)(6, PaymentMethodPage_ion_content_1_div_6_Template, 4, 1, "div", 6)(7, PaymentMethodPage_ion_content_1_ng_container_7_Template, 3, 2, "ng-container", 4)(8, PaymentMethodPage_ion_content_1_ion_card_8_Template, 4, 3, "ion-card", 7);
    \u0275\u0275elementStart(9, "ion-checkbox", 8);
    \u0275\u0275listener("ionChange", function PaymentMethodPage_ion_content_1_Template_ion_checkbox_ionChange_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleCgu($event));
    });
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementStart(12, "a", 9);
    \u0275\u0275listener("click", function PaymentMethodPage_ion_content_1_Template_a_click_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCguModal($event));
    });
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "ion-input", 10);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function PaymentMethodPage_ion_content_1_Template_ion_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.promoCode, $event) || (ctx_r1.promoCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ionChange", function PaymentMethodPage_ion_content_1_Template_ion_input_ionChange_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPromoCodeChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, PaymentMethodPage_ion_content_1_ion_button_17_Template, 3, 4, "ion-button", 11)(18, PaymentMethodPage_ion_content_1_ion_button_18_Template, 3, 4, "ion-button", 11);
    \u0275\u0275elementStart(19, "ion-text", 12)(20, "p")(21, "u", 13);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r1.selectedForfait);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedForfait);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.options && ctx_r1.paymentMode === "classic");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cardsState.state === "success" && ctx_r1.cardsState.paymentMethods.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.cardsState.state !== "success" || ctx_r1.cardsState.paymentMethods.length === 0) && ctx_r1.layout === "selecting");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.paymentMode === "googlepay");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 14, "cgu.accept"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 16, "cgu.name"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(16, 18, "forfait.reduction_code"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.promoCode);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.layout === "selecting");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.layout === "payment_method_added");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(22, _c0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 20, "signin.skip_step"));
  }
}
var _PaymentMethodPage = class _PaymentMethodPage {
  constructor(stripeService, modalCtrl, ionRouterOutlet, router, cguService, forfaitsService, route, paymentMethodService, accountService, loadingCtrl, translateService, toastr, subscriptionProcess, storage, kycService, errorHandler) {
    this.stripeService = stripeService;
    this.modalCtrl = modalCtrl;
    this.ionRouterOutlet = ionRouterOutlet;
    this.router = router;
    this.cguService = cguService;
    this.forfaitsService = forfaitsService;
    this.route = route;
    this.paymentMethodService = paymentMethodService;
    this.accountService = accountService;
    this.loadingCtrl = loadingCtrl;
    this.translateService = translateService;
    this.toastr = toastr;
    this.subscriptionProcess = subscriptionProcess;
    this.storage = storage;
    this.kycService = kycService;
    this.errorHandler = errorHandler;
    this.layout = "confirming";
    this.paymentMode = "classic";
    this.cguAccepted = "FALSE";
    this.stripeFormFilled = "FALSE";
    this.skeletonCount = 3;
    this.promoCode = "";
    this.cardsState = { state: "loading" };
    this.program = null;
    this.hasForfaitsAvailable = "false";
    addIcons({ logoApple, logoGoogle });
    effect(() => {
      this.cardsState = this.paymentMethodService.paymentMethodsState();
      if (this.cardsState.state === "success" && this.cardsState.paymentMethods.length > 0 && this.layout !== "confirming") {
        this.layout = "payment_method_added";
      }
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      var _a, _b, _c;
      const cyclistState = this.accountService.cyclistState();
      if ("cyclist" in cyclistState && (cyclistState.cyclist.role == "guest" || ((_c = (_b = (_a = cyclistState.cyclist.registrations) == null ? void 0 : _a.data) == null ? void 0 : _b[0]) == null ? void 0 : _c.role) == "guest")) {
        this.router.navigate(["/verify-phone"], { replaceUrl: true });
        return;
      }
      this.program = yield this.storage.get("program");
      const urlParams = this.route.snapshot.queryParams;
      const setupIntent = urlParams["setup_intent"];
      const clientSecret = urlParams["setup_intent_client_secret"];
      const redirectStatus = urlParams["redirect_status"];
      if (setupIntent && clientSecret && redirectStatus === "succeeded") {
        this.layout = "confirming";
        const loading = yield this.loadingCtrl.create({
          message: this.translateService.instant("generic.confirming")
        });
        try {
          yield loading.present();
          yield this.accountService.loadCyclist();
          yield this.setupPaymentMethod(clientSecret);
          yield this.validateTermsAndRedirect();
        } finally {
          yield loading.dismiss();
        }
      } else {
        this.initPageData();
      }
    });
  }
  initPageData() {
    return __async(this, null, function* () {
      this.layout = "selecting";
      fetchUserAttributes().then((attributes) => {
        this.userAttributes = attributes;
      });
      this.stripeService.initStripeElements(environment.program).subscribe((options) => __async(this, null, function* () {
        this.options = options;
        if (Capacitor.getPlatform() === "ios") {
          const isAvailable = yield this.stripeService.isApplePayAvailable();
          this.paymentMode = isAvailable ? "applepay" : "classic";
        }
        if (Capacitor.getPlatform() === "android") {
          const isAvailable = yield this.stripeService.isGooglePayAvailable();
          this.paymentMode = isAvailable ? "googlepay" : "classic";
        }
      }));
      this.forfaitsService.getDefaultForfait().then((forfait) => {
        if (forfait) {
          this.defaultForfait = forfait;
          this.selectedForfait = forfait;
        }
      });
      this.hasForfaitsAvailable = (yield this.forfaitsService.hasForfaits()) ? "true" : "false";
    });
  }
  openCguModal(event) {
    return __async(this, null, function* () {
      event.stopPropagation();
      const modal = yield this.modalCtrl.create({
        component: CguComponent,
        presentingElement: this.ionRouterOutlet.nativeEl
      });
      yield modal.present();
    });
  }
  openForfaitModal(event) {
    return __async(this, null, function* () {
      event.stopPropagation();
      const modal = yield this.modalCtrl.create({
        component: ForfaitListModalComponent,
        componentProps: {
          next: "onboarding"
        },
        presentingElement: this.ionRouterOutlet.nativeEl
      });
      modal.onDidDismiss().then((result) => __async(this, null, function* () {
        if (result.data) {
          this.promoCode = "";
          this.selectedForfait = result.data.forfait;
          yield this.subscriptionProcess.startProcess(this.selectedForfait);
          yield this.subscriptionProcess.updateStep("payment");
        }
      }));
      yield modal.present();
    });
  }
  setupPaymentMethod(clientSecret) {
    return __async(this, null, function* () {
      return new Promise((resolve) => {
        this.stripeService.retrieveSetupIntent(clientSecret).subscribe({
          next: (result) => __async(this, null, function* () {
            if (result && result.setupIntent && result.setupIntent.payment_method) {
              yield this.paymentMethodService.setDefaultCard(result.setupIntent.payment_method);
              if (this.layout !== "confirming") {
                yield this.accountService.loadCyclist();
                yield this.paymentMethodService.getPaymentMethods();
                this.layout = "payment_method_added";
              }
              resolve(true);
            } else {
              resolve(false);
            }
          }),
          error: () => {
            this.layout = "selecting";
            resolve(false);
          }
        });
      });
    });
  }
  confirmSetup() {
    return __async(this, null, function* () {
      const loading = yield this.loadingCtrl.create({
        message: this.translateService.instant("generic.confirming")
      });
      yield loading.present();
      this.stripeService.confirmSetup(this.paymentElement.elements, this.options.clientSecret, this.userAttributes.name).subscribe({
        next: () => __async(this, null, function* () {
          yield loading.dismiss();
        }),
        error: () => __async(this, null, function* () {
          this.layout = "selecting";
          yield loading.dismiss();
        })
      });
    });
  }
  openApplePay() {
    return __async(this, null, function* () {
      var _a, _b, _c;
      const loading = yield this.loadingCtrl.create({
        message: this.translateService.instant("generic.confirming")
      });
      try {
        const result = yield this.stripeService.setupApplePay(this.options.clientSecret, ((_a = this.program) == null ? void 0 : _a.name) || "", ((_c = (_b = this.program) == null ? void 0 : _b.config) == null ? void 0 : _c.applepay_merchant) || "");
        if (result === "completed") {
          yield loading.present();
          yield this.setupPaymentMethod(this.options.clientSecret);
          yield loading.dismiss();
        } else if (result === "failed") {
          this.layout = "selecting";
        } else {
          this.layout = "selecting";
        }
      } catch (error) {
        this.layout = "selecting";
      }
    });
  }
  openGooglePay() {
    return __async(this, null, function* () {
      var _a;
      const loading = yield this.loadingCtrl.create({
        message: this.translateService.instant("generic.confirming")
      });
      try {
        const result = yield this.stripeService.setupGooglePay(this.options.clientSecret, ((_a = this.program) == null ? void 0 : _a.name) || "Ecovelo");
        if (result === "completed") {
          yield loading.present();
          yield this.setupPaymentMethod(this.options.clientSecret);
          yield loading.dismiss();
        } else if (result === "failed") {
          this.layout = "selecting";
          this.paymentMode = "classic";
        } else {
          this.layout = "selecting";
          this.paymentMode = "classic";
        }
      } catch (error) {
        this.layout = "selecting";
        this.paymentMode = "classic";
      }
    });
  }
  validateTermsAndRedirect() {
    return __async(this, null, function* () {
      var _a, _b, _c;
      yield this.cguService.validateTerms();
      const process = yield firstValueFrom(this.subscriptionProcess.getCurrentProcess());
      const hasKycDocuments = this.kycService.enabledDocumentTypes() && this.kycService.enabledDocumentTypes().length > 0;
      const hasSupportingDocuments = ((_a = process == null ? void 0 : process.forfait) == null ? void 0 : _a.supporting_documents) && ((_c = (_b = process == null ? void 0 : process.forfait) == null ? void 0 : _b.supporting_documents) == null ? void 0 : _c.length) > 0;
      if (hasKycDocuments) {
        this.router.navigate(["/kyc"], {
          queryParams: {
            onboarding: "true"
          },
          replaceUrl: true
        });
      } else if (hasSupportingDocuments) {
        yield this.subscriptionProcess.updateStep("documents");
        this.router.navigate(["/supporting-documents"], {
          queryParams: { next: "/verify-phone" },
          replaceUrl: true
        });
      } else {
        yield this.subscriptionProcess.updateStep("phone");
        this.router.navigate(["/verify-phone"]);
      }
    });
  }
  onPromoCodeChange() {
    return __async(this, null, function* () {
      yield this.subscriptionProcess.updateReduction(this.promoCode);
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
  cancelSelection() {
    return __async(this, null, function* () {
      this.selectedForfait = this.defaultForfait;
      yield this.subscriptionProcess.clearProcess();
      this.promoCode = "";
    });
  }
  toggleStripeFormFilled(event) {
    var _a, _b, _c;
    if (((_a = event.value) == null ? void 0 : _a.type) === "apple_pay" && this.paymentMode !== "classic_applepay") {
      this.paymentMode = "classic_applepay";
    } else if (((_b = event.value) == null ? void 0 : _b.type) === "google_pay" && this.paymentMode !== "classic_googlepay") {
      this.paymentMode = "classic_googlepay";
    } else if (!((_c = event.value) == null ? void 0 : _c.type) && this.paymentMode !== "classic") {
      this.paymentMode = "classic";
    }
    this.stripeFormFilled = event.complete ? "TRUE" : "FALSE";
  }
  toggleCgu(event) {
    switch (event.detail.checked) {
      case true:
        this.cguAccepted = "TRUE";
        break;
      case false:
        this.cguAccepted = "FALSE";
        break;
      default:
        this.cguAccepted = "FALSE";
        break;
    }
  }
};
_PaymentMethodPage.\u0275fac = function PaymentMethodPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PaymentMethodPage)(\u0275\u0275directiveInject(StripeService), \u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(IonRouterOutlet), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(CguService), \u0275\u0275directiveInject(ForfaitsWrapperService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(PaymentMethodsService), \u0275\u0275directiveInject(AccountService), \u0275\u0275directiveInject(LoadingController), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(SubscriptionProcessService), \u0275\u0275directiveInject(StorageService), \u0275\u0275directiveInject(KYCWrapperService), \u0275\u0275directiveInject(ErrorHandlerService));
};
_PaymentMethodPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentMethodPage, selectors: [["app-payment-method"]], viewQuery: function PaymentMethodPage_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(StripePaymentElementComponent, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paymentElement = _t.first);
  }
}, decls: 2, vars: 1, consts: [["class", "ion-padding", 4, "ngIf"], [1, "ion-padding"], [1, "ion-justify-content-center"], ["size", "12", "size-md", "8", "size-lg", "6"], [4, "ngIf"], ["class", "forfait-card", 3, "default-forfait", 4, "ngIf"], ["class", "ion-margin-top", 4, "ngIf"], ["class", "ion-no-margin ion-margin-top", "color", "primary", 4, "ngIf"], ["color", "dark", "labelPlacement", "end", 1, "ion-margin-top", 3, "ionChange"], [1, "ion-text-wrap", 3, "click"], ["fill", "outline", "mode", "md", 1, "ion-margin-top", "ion-margin-bottom", 3, "ngModelChange", "ionChange", "ngModel", "placeholder"], ["expand", "block", "shape", "round", 3, "disabled", "click", 4, "ngIf"], ["color", "medium", 1, "ion-text-center", "ion-margin-top"], [3, "routerLink"], ["animated", "", 2, "width", "100%", "height", "200px"], [1, "forfait-card"], [1, "flex-between"], [1, "title"], ["class", "title", 4, "ngIf"], ["class", "info-block", 4, "ngIf"], ["class", "link", 3, "click", 4, "ngIf"], [1, "info-block"], ["class", "info-item", 4, "ngFor", "ngForOf"], [1, "info-item"], [1, "description"], [1, "link", 3, "click"], [1, "ion-margin-top"], [2, "width", "100%", "height", "50px", 3, "animated"], ["lines", "none"], ["class", "ion-margin-top card-item", 4, "ngFor", "ngForOf"], [1, "divider"], [1, "ion-margin-top", "card-item"], ["slot", "start", "size", "large", 3, "src"], [1, "card-number"], ["class", "expiry", 4, "ngIf"], ["color", "primary", "class", "default-badge", 4, "ngIf"], [1, "expiry"], ["color", "primary", 1, "default-badge"], ["expand", "block", "class", "ion-margin-vertical apple-pay-button", "shape", "round", "fill", "outline", "color", "dark", 3, "click", 4, "ngIf"], ["id", "payment-element", "class", "ion-margin-top ion-margin-bottom-small", 4, "ngIf"], ["expand", "block", "shape", "round", "fill", "outline", "color", "dark", 1, "ion-margin-vertical", "apple-pay-button", 3, "click"], ["name", "logo-apple", "slot", "start"], ["id", "payment-element", 1, "ion-margin-top", "ion-margin-bottom-small"], [3, "stripe", "elementsOptions"], [3, "change"], ["color", "primary", 1, "ion-no-margin", "ion-margin-top"], ["expand", "block", "shape", "round", 3, "click", "disabled"]], template: function PaymentMethodPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-header");
    \u0275\u0275template(1, PaymentMethodPage_ion_content_1_Template, 24, 23, "ion-content", 0);
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.layout === "selecting" || ctx.layout === "payment_method_added");
  }
}, dependencies: [
  CommonModule,
  NgForOf,
  NgIf,
  FormsModule,
  NgControlStatus,
  NgModel,
  IonicModule,
  IonBadge,
  IonButton,
  IonCard,
  IonCardContent,
  IonCheckbox,
  IonCol,
  IonContent,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
  IonSkeletonText,
  IonText,
  BooleanValueAccessorDirective,
  TextValueAccessorDirective,
  RouterLinkDelegateDirective,
  TranslateModule,
  TranslatePipe,
  StripeElementsDirective,
  StripePaymentElementComponent,
  HeaderComponent,
  RouterModule,
  RouterLink
], styles: ["\n\n.forfait-card[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-radius: 10px;\n  background: #e0e0e0;\n}\n.forfait-card[_ngcontent-%COMP%]   .flex-between[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.forfait-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin: 0;\n}\n.forfait-card[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.forfait-card[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {\n  margin-top: 3px;\n}\n.forfait-card[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.forfait-card[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  color: #666;\n}\n.forfait-card[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 10px;\n  cursor: pointer;\n  text-decoration: underline;\n  color: #0000ee;\n}\n.cgu-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #0000ee;\n  cursor: pointer;\n}\n.error-container[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n}\n.error-container[_ngcontent-%COMP%]   .retry-button[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.payment-notice[_ngcontent-%COMP%] {\n  border: 1px solid var(--ion-color-primary);\n  border-radius: 8px;\n  margin-bottom: 12px;\n  background-color: var(--ion-color-primary);\n}\n.payment-notice[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: white;\n  margin: 8px;\n  line-height: 1.4;\n}\nion-item.card-item[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid gray;\n}\n.divider[_ngcontent-%COMP%] {\n  border-top: 1px solid #ccc;\n  margin: 16px 0;\n}\n#payment-element[_ngcontent-%COMP%] {\n  padding: 16px;\n  margin: 16px 0;\n}\n.google-pay-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.apple-pay-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n/*# sourceMappingURL=payment-method.page.css.map */"] });
var PaymentMethodPage = _PaymentMethodPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentMethodPage, [{
    type: Component,
    args: [{ selector: "app-payment-method", imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      TranslateModule,
      StripeElementsDirective,
      StripePaymentElementComponent,
      HeaderComponent,
      RouterModule
    ], template: `<app-header></app-header>
<ion-content
  class="ion-padding"
  *ngIf="layout === 'selecting' || layout === 'payment_method_added'"
>
  <ion-row class="ion-justify-content-center">
    <ion-col size="12" size-md="8" size-lg="6">
      <!-- Forfait card -->
      <ng-container *ngIf="!selectedForfait">
        <ion-skeleton-text
          animated
          style="width: 100%; height: 200px"
        ></ion-skeleton-text>
      </ng-container>

      <div
        class="forfait-card"
        *ngIf="selectedForfait"
        [class.default-forfait]="selectedForfait.id === defaultForfait.id"
      >
        <ng-container>
          <div class="flex-between">
            <h2 class="title">{{ selectedForfait.name }}</h2>
            <div class="title" *ngIf="selectedForfait.id !== defaultForfait.id">
              {{ selectedForfait.fiche.price }}
            </div>
          </div>
          <div class="info-block" *ngIf="selectedForfait.fiche.tarifs">
            <div
              class="info-item"
              *ngFor="let tarif of selectedForfait.fiche.tarifs"
            >
              <div class="flex-between">
                <span>{{ tarif.title }}</span>
                <span>{{ tarif.price }}</span>
              </div>
              <small class="description">{{ tarif.description }}</small>
            </div>
          </div>
          <a
            class="link"
            *ngIf="hasForfaitsAvailable === 'true'"
            (click)="selectedForfait.id === defaultForfait.id ? openForfaitModal($event) : cancelSelection() "
          >
            {{ selectedForfait.id === defaultForfait.id ?
            ('forfait.select_another_plan' | translate) :
            ('forfait.cancel_selection' | translate) }}
          </a>
        </ng-container>
      </div>

      <!-- Payment skeleton -->
      <ion-list
        *ngIf="!options && paymentMode === 'classic'"
        class="ion-margin-top"
      >
        <ion-item>
          <ion-label>
            <h3>
              <ion-skeleton-text
                [animated]="true"
                style="width: 100%; height: 50px"
              ></ion-skeleton-text>
            </h3>
            <p>
              <ion-skeleton-text
                [animated]="true"
                style="width: 100%; height: 50px"
              ></ion-skeleton-text>
            </p>
            <p>
              <ion-skeleton-text
                [animated]="true"
                style="width: 100%; height: 50px"
              ></ion-skeleton-text>
            </p>
          </ion-label>
        </ion-item>
      </ion-list>

      <!-- Payment methods display -->
      <div
        *ngIf="cardsState.state === 'success' && cardsState.paymentMethods.length > 0"
        class="ion-margin-top"
      >
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
          </ion-item>
        </ion-list>
        <hr class="divider" />
      </div>

      <!-- Payment buttons and form -->
      <ng-container
        *ngIf="(cardsState.state !== 'success' || cardsState.paymentMethods.length === 0) && layout === 'selecting'"
      >
        <ion-button
          *ngIf="paymentMode === 'applepay'"
          expand="block"
          class="ion-margin-vertical apple-pay-button"
          (click)="openApplePay()"
          shape="round"
          fill="outline"
          color="dark"
        >
          <ion-icon name="logo-apple" slot="start"></ion-icon>
          <span>{{ 'cards.pay_with_apple_pay' | translate }}</span>
        </ion-button>

        <!-- Stripe payment element -->
        <div
          id="payment-element"
          class="ion-margin-top ion-margin-bottom-small"
          *ngIf="options && paymentMode !== 'googlepay'"
        >
          <ngx-stripe-elements
            [stripe]="stripeService.getStripe()"
            [elementsOptions]="options"
          >
            <ngx-stripe-payment (change)="toggleStripeFormFilled($event)" />
          </ngx-stripe-elements>
        </div>
      </ng-container>

      <ion-card
        class="ion-no-margin ion-margin-top"
        color="primary"
        *ngIf="paymentMode === 'googlepay'"
      >
        <ion-card-content
          >{{ 'payment.disclaimer' | translate }}</ion-card-content
        >
      </ion-card>
      <!-- CGU checkbox -->
      <ion-checkbox
        class="ion-margin-top"
        color="dark"
        labelPlacement="end"
        (ionChange)="toggleCgu($event)"
      >
        {{ 'cgu.accept' | translate }}
        <a (click)="openCguModal($event)" class="ion-text-wrap">
          {{ 'cgu.name' | translate }}
        </a>
      </ion-checkbox>

      <!-- Promo code input -->
      <ion-input
        class="ion-margin-top ion-margin-bottom"
        [(ngModel)]="promoCode"
        (ionChange)="onPromoCodeChange()"
        placeholder="{{ 'forfait.reduction_code' | translate }}"
        fill="outline"
        mode="md"
      ></ion-input>

      <!-- Submit button -->
      <ion-button
        expand="block"
        shape="round"
        *ngIf="layout === 'selecting'"
        (click)="paymentMode === 'googlepay' ? openGooglePay() : paymentMode === 'classic_applepay' ? stripeService.confirmSetup(paymentElement.elements, options.clientSecret!, userAttributes.name!) : confirmSetup()"
        [disabled]="this.cguAccepted === 'FALSE' ||  (this.stripeFormFilled === 'FALSE' && paymentMode !== 'googlepay')"
      >
        {{ 'payment.save_payment_method' | translate }}
      </ion-button>
      <ion-button
        expand="block"
        shape="round"
        *ngIf="layout === 'payment_method_added'"
        (click)="validateTermsAndRedirect()"
        [disabled]="this.cguAccepted === 'FALSE'"
      >
        {{ 'generic.continue' | translate }}
      </ion-button>

      <!-- Skip step link -->
      <ion-text color="medium" class="ion-text-center ion-margin-top">
        <p>
          <u [routerLink]="['/map']">{{ 'signin.skip_step' | translate }}</u>
        </p>
      </ion-text>
    </ion-col>
  </ion-row>
</ion-content>
`, styles: ["/* src/app/pages/auth/payment-method/payment-method.page.scss */\n.forfait-card {\n  padding: 20px;\n  border-radius: 10px;\n  background: #e0e0e0;\n}\n.forfait-card .flex-between {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.forfait-card .title {\n  font-weight: bold;\n  margin: 0;\n}\n.forfait-card .info-block {\n  margin-top: 10px;\n}\n.forfait-card .info-block .info-item {\n  margin-top: 3px;\n}\n.forfait-card .info-block .info-item:last-child {\n  margin-bottom: 0;\n}\n.forfait-card .info-block .description {\n  font-size: 0.8em;\n  color: #666;\n}\n.forfait-card .link {\n  display: inline-block;\n  margin-top: 10px;\n  cursor: pointer;\n  text-decoration: underline;\n  color: #0000ee;\n}\n.cgu-link {\n  text-decoration: none;\n  color: #0000ee;\n  cursor: pointer;\n}\n.error-container {\n  text-align: center;\n  padding: 20px;\n}\n.error-container .retry-button {\n  margin-top: 16px;\n}\n.payment-notice {\n  border: 1px solid var(--ion-color-primary);\n  border-radius: 8px;\n  margin-bottom: 12px;\n  background-color: var(--ion-color-primary);\n}\n.payment-notice p {\n  font-size: 12px;\n  color: white;\n  margin: 8px;\n  line-height: 1.4;\n}\nion-item.card-item {\n  border-radius: 8px;\n  border: 1px solid gray;\n}\n.divider {\n  border-top: 1px solid #ccc;\n  margin: 16px 0;\n}\n#payment-element {\n  padding: 16px;\n  margin: 16px 0;\n}\n.google-pay-button span {\n  font-size: 20px;\n}\n.apple-pay-button span {\n  font-size: 20px;\n}\n/*# sourceMappingURL=payment-method.page.css.map */\n"] }]
  }], () => [{ type: StripeService }, { type: ModalController }, { type: IonRouterOutlet }, { type: Router }, { type: CguService }, { type: ForfaitsWrapperService }, { type: ActivatedRoute }, { type: PaymentMethodsService }, { type: AccountService }, { type: LoadingController }, { type: TranslateService }, { type: ToastService }, { type: SubscriptionProcessService }, { type: StorageService }, { type: KYCWrapperService }, { type: ErrorHandlerService }], { paymentElement: [{
    type: ViewChild,
    args: [StripePaymentElementComponent]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentMethodPage, { className: "PaymentMethodPage", filePath: "src/app/pages/auth/payment-method/payment-method.page.ts", lineNumber: 61 });
})();
export {
  PaymentMethodPage
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wYWdlcy9hdXRoL3BheW1lbnQtbWV0aG9kL3BheW1lbnQtbWV0aG9kLnBhZ2UudHMiLCAic3JjL2FwcC9wYWdlcy9hdXRoL3BheW1lbnQtbWV0aG9kL3BheW1lbnQtbWV0aG9kLnBhZ2UuaHRtbCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJ1xuaW1wb3J0IHsgSW9uaWNNb2R1bGUgfSBmcm9tICdAaW9uaWMvYW5ndWxhcidcbmltcG9ydCB7IE1vZGFsQ29udHJvbGxlciB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyL3N0YW5kYWxvbmUnXG5pbXBvcnQgeyBJb25Sb3V0ZXJPdXRsZXQsIExvYWRpbmdDb250cm9sbGVyIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXIvc3RhbmRhbG9uZSdcbmltcG9ydCB7XG4gIFN0cmlwZUVsZW1lbnRzT3B0aW9ucyxcbiAgU3RyaXBlUGF5bWVudEVsZW1lbnRDaGFuZ2VFdmVudCxcbn0gZnJvbSAnQHN0cmlwZS9zdHJpcGUtanMnXG5pbXBvcnQgeyBIZWFkZXJDb21wb25lbnQgfSBmcm9tICdzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQnXG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUsIFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJ1xuaW1wb3J0IHtcbiAgU3RyaXBlRWxlbWVudHNEaXJlY3RpdmUsXG4gIFN0cmlwZVBheW1lbnRFbGVtZW50Q29tcG9uZW50LFxufSBmcm9tICduZ3gtc3RyaXBlJ1xuaW1wb3J0IHtcbiAgZmV0Y2hVc2VyQXR0cmlidXRlcyxcbiAgRmV0Y2hVc2VyQXR0cmlidXRlc091dHB1dCxcbn0gZnJvbSAnYXdzLWFtcGxpZnkvYXV0aCdcbmltcG9ydCB7IFN0cmlwZVNlcnZpY2UgfSBmcm9tICdzcmMvYXBwL3NlcnZpY2VzL2V4dGVybmFsL3N0cmlwZS5zZXJ2aWNlJ1xuaW1wb3J0IHsgRm9yZmFpdExpc3RNb2RhbENvbXBvbmVudCB9IGZyb20gJ3NyYy9hcHAvY29tcG9uZW50cy9tb2RhbHMvZm9yZmFpdHMvZm9yZmFpdHMuY29tcG9uZW50J1xuaW1wb3J0IHsgQ2d1Q29tcG9uZW50IH0gZnJvbSAnc3JjL2FwcC9jb21wb25lbnRzL21vZGFscy9jZ3UvY2d1LmNvbXBvbmVudCdcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnc3JjL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCdcbmltcG9ydCB7XG4gIExpc3RGb3JmYWl0MjAwUmVzcG9uc2VBbGxPZkRhdGFJbm5lcixcbiAgUmV0cmlldmVQcm9ncmFtMjAwUmVzcG9uc2UsXG59IGZyb20gJ3NyYy9hcGktY3ljbGlzdCdcbmltcG9ydCB7IENndVNlcnZpY2UgfSBmcm9tICdzcmMvYXBwL3NlcnZpY2VzL2FwaS13cmFwcGVycy9jZ3Uuc2VydmljZSdcbmltcG9ydCB7IEZvcmZhaXRzV3JhcHBlclNlcnZpY2UgfSBmcm9tICdzcmMvYXBwL3NlcnZpY2VzL2FwaS13cmFwcGVycy9mb3JmYWl0cy5zZXJ2aWNlJ1xuaW1wb3J0IHsgUGF5bWVudE1ldGhvZHNTZXJ2aWNlIH0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy9hcGktd3JhcHBlcnMvcGF5bWVudC1tZXRob2Quc2VydmljZSdcbmltcG9ydCB7IEFjY291bnRTZXJ2aWNlIH0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy9hcGktd3JhcHBlcnMvYWNjb3VudC5zZXJ2aWNlJ1xuaW1wb3J0IHsgVG9hc3RTZXJ2aWNlIH0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy91dGlscy90b2FzdC5zZXJ2aWNlJ1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uUHJvY2Vzc1NlcnZpY2UgfSBmcm9tICdzcmMvYXBwL3NlcnZpY2VzL3V0aWxzL3N1YnNjcmlwdGlvbi1wcm9jZXNzLnNlcnZpY2UnXG5pbXBvcnQgeyBmaXJzdFZhbHVlRnJvbSB9IGZyb20gJ3J4anMnXG5pbXBvcnQgeyBDYXBhY2l0b3IgfSBmcm9tICdAY2FwYWNpdG9yL2NvcmUnXG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gJ3NyYy9hcHAvc2VydmljZXMvdXRpbHMvc3RvcmFnZS5zZXJ2aWNlJ1xuaW1wb3J0IHsgYWRkSWNvbnMgfSBmcm9tICdpb25pY29ucydcbmltcG9ydCB7IGxvZ29BcHBsZSwgbG9nb0dvb2dsZSB9IGZyb20gJ2lvbmljb25zL2ljb25zJ1xuaW1wb3J0IHsgcGF5bWVudE1ldGhvZHNTdGF0ZSB9IGZyb20gJ3NyYy9hcHAvc2VydmljZXMvYXBpLXdyYXBwZXJzL3BheW1lbnQtbWV0aG9kLnNlcnZpY2UnXG5pbXBvcnQgeyBlZmZlY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgS1lDV3JhcHBlclNlcnZpY2UgfSBmcm9tICdzcmMvYXBwL3NlcnZpY2VzL2FwaS13cmFwcGVycy9reWMuc2VydmljZSdcbmltcG9ydCB7IEVycm9ySGFuZGxlclNlcnZpY2UgfSBmcm9tICdzcmMvYXBwL3NlcnZpY2VzL3V0aWxzL2Vycm9yLWhhbmRsZXIuc2VydmljZSdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXBheW1lbnQtbWV0aG9kJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BheW1lbnQtbWV0aG9kLnBhZ2UuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3BheW1lbnQtbWV0aG9kLnBhZ2Uuc2NzcyddLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIElvbmljTW9kdWxlLFxuICAgIFRyYW5zbGF0ZU1vZHVsZSxcbiAgICBTdHJpcGVFbGVtZW50c0RpcmVjdGl2ZSxcbiAgICBTdHJpcGVQYXltZW50RWxlbWVudENvbXBvbmVudCxcbiAgICBIZWFkZXJDb21wb25lbnQsXG4gICAgUm91dGVyTW9kdWxlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBQYXltZW50TWV0aG9kUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoU3RyaXBlUGF5bWVudEVsZW1lbnRDb21wb25lbnQpXG4gIHBheW1lbnRFbGVtZW50ITogU3RyaXBlUGF5bWVudEVsZW1lbnRDb21wb25lbnRcbiAgbGF5b3V0OiAnc2VsZWN0aW5nJyB8ICdjb25maXJtaW5nJyB8ICdwYXltZW50X21ldGhvZF9hZGRlZCcgPSAnY29uZmlybWluZydcbiAgcGF5bWVudE1vZGU6XG4gICAgfCAnY2xhc3NpYydcbiAgICB8ICdjbGFzc2ljX2FwcGxlcGF5J1xuICAgIHwgJ2NsYXNzaWNfZ29vZ2xlcGF5J1xuICAgIHwgJ2FwcGxlcGF5J1xuICAgIHwgJ2dvb2dsZXBheScgPSAnY2xhc3NpYydcbiAgdXNlckF0dHJpYnV0ZXMhOiBGZXRjaFVzZXJBdHRyaWJ1dGVzT3V0cHV0XG4gIG9wdGlvbnMhOiBTdHJpcGVFbGVtZW50c09wdGlvbnNcbiAgZGVmYXVsdEZvcmZhaXQ6IExpc3RGb3JmYWl0MjAwUmVzcG9uc2VBbGxPZkRhdGFJbm5lclxuICBzZWxlY3RlZEZvcmZhaXQ6IExpc3RGb3JmYWl0MjAwUmVzcG9uc2VBbGxPZkRhdGFJbm5lclxuICBjZ3VBY2NlcHRlZDogJ1RSVUUnIHwgJ0ZBTFNFJyA9ICdGQUxTRSdcbiAgc3RyaXBlRm9ybUZpbGxlZDogJ1RSVUUnIHwgJ0ZBTFNFJyA9ICdGQUxTRSdcbiAgc2tlbGV0b25Db3VudDogbnVtYmVyID0gM1xuICBwcm9tb0NvZGU6IHN0cmluZyA9ICcnXG4gIGNhcmRzU3RhdGU6IHBheW1lbnRNZXRob2RzU3RhdGUgPSB7IHN0YXRlOiAnbG9hZGluZycgfVxuICBwcm9ncmFtOiBSZXRyaWV2ZVByb2dyYW0yMDBSZXNwb25zZSB8IG51bGwgPSBudWxsXG4gIGhhc0ZvcmZhaXRzQXZhaWxhYmxlOiAnZmFsc2UnIHwgJ3RydWUnID0gJ2ZhbHNlJ1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgc3RyaXBlU2VydmljZTogU3RyaXBlU2VydmljZSxcbiAgICBwcml2YXRlIG1vZGFsQ3RybDogTW9kYWxDb250cm9sbGVyLFxuICAgIHByaXZhdGUgaW9uUm91dGVyT3V0bGV0OiBJb25Sb3V0ZXJPdXRsZXQsXG4gICAgcHVibGljIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgY2d1U2VydmljZTogQ2d1U2VydmljZSxcbiAgICBwcml2YXRlIGZvcmZhaXRzU2VydmljZTogRm9yZmFpdHNXcmFwcGVyU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwdWJsaWMgcGF5bWVudE1ldGhvZFNlcnZpY2U6IFBheW1lbnRNZXRob2RzU2VydmljZSxcbiAgICBwcml2YXRlIGFjY291bnRTZXJ2aWNlOiBBY2NvdW50U2VydmljZSxcbiAgICBwcml2YXRlIGxvYWRpbmdDdHJsOiBMb2FkaW5nQ29udHJvbGxlcixcbiAgICBwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0b2FzdHI6IFRvYXN0U2VydmljZSxcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvblByb2Nlc3M6IFN1YnNjcmlwdGlvblByb2Nlc3NTZXJ2aWNlLFxuICAgIHByaXZhdGUgc3RvcmFnZTogU3RvcmFnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBreWNTZXJ2aWNlOiBLWUNXcmFwcGVyU2VydmljZSxcbiAgICBwcml2YXRlIGVycm9ySGFuZGxlcjogRXJyb3JIYW5kbGVyU2VydmljZVxuICApIHtcbiAgICBhZGRJY29ucyh7IGxvZ29BcHBsZSwgbG9nb0dvb2dsZSB9KVxuICAgIGVmZmVjdCgoKSA9PiB7XG4gICAgICB0aGlzLmNhcmRzU3RhdGUgPSB0aGlzLnBheW1lbnRNZXRob2RTZXJ2aWNlLnBheW1lbnRNZXRob2RzU3RhdGUoKVxuICAgICAgaWYgKFxuICAgICAgICB0aGlzLmNhcmRzU3RhdGUuc3RhdGUgPT09ICdzdWNjZXNzJyAmJlxuICAgICAgICB0aGlzLmNhcmRzU3RhdGUucGF5bWVudE1ldGhvZHMubGVuZ3RoID4gMCAmJlxuICAgICAgICB0aGlzLmxheW91dCAhPT0gJ2NvbmZpcm1pbmcnXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5sYXlvdXQgPSAncGF5bWVudF9tZXRob2RfYWRkZWQnXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIG5nT25Jbml0KCkge1xuICAgIC8vIENoZWNrIGlmIGV4dGVybmFsIHVzZXIgLSByZWRpcmVjdCB0aGVtIGF3YXkgZnJvbSBwYXltZW50IG1ldGhvZCBwYWdlXG4gICAgY29uc3QgY3ljbGlzdFN0YXRlID0gdGhpcy5hY2NvdW50U2VydmljZS5jeWNsaXN0U3RhdGUoKVxuICAgIGlmIChcbiAgICAgICdjeWNsaXN0JyBpbiBjeWNsaXN0U3RhdGUgJiZcbiAgICAgIChjeWNsaXN0U3RhdGUuY3ljbGlzdC5yb2xlID09ICdndWVzdCcgfHxcbiAgICAgICAgY3ljbGlzdFN0YXRlLmN5Y2xpc3QucmVnaXN0cmF0aW9ucz8uZGF0YT8uWzBdPy5yb2xlID09ICdndWVzdCcpXG4gICAgKSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy92ZXJpZnktcGhvbmUnXSwgeyByZXBsYWNlVXJsOiB0cnVlIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnByb2dyYW0gPSBhd2FpdCB0aGlzLnN0b3JhZ2UuZ2V0KCdwcm9ncmFtJylcbiAgICAvL0FGVEVSIENPTkZJUk0gU0VUVVAsIENIRUNLIFRIRSBST1VURSBQQVJBTVMgQU5EIElGIE9ORVMsIFdFIFNFVCBUSEUgREVGQVVMVCBDQVJEXG4gICAgY29uc3QgdXJsUGFyYW1zID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1xuICAgIGNvbnN0IHNldHVwSW50ZW50ID0gdXJsUGFyYW1zWydzZXR1cF9pbnRlbnQnXVxuICAgIGNvbnN0IGNsaWVudFNlY3JldCA9IHVybFBhcmFtc1snc2V0dXBfaW50ZW50X2NsaWVudF9zZWNyZXQnXVxuICAgIGNvbnN0IHJlZGlyZWN0U3RhdHVzID0gdXJsUGFyYW1zWydyZWRpcmVjdF9zdGF0dXMnXVxuICAgIGlmIChzZXR1cEludGVudCAmJiBjbGllbnRTZWNyZXQgJiYgcmVkaXJlY3RTdGF0dXMgPT09ICdzdWNjZWVkZWQnKSB7XG4gICAgICB0aGlzLmxheW91dCA9ICdjb25maXJtaW5nJ1xuICAgICAgY29uc3QgbG9hZGluZyA9IGF3YWl0IHRoaXMubG9hZGluZ0N0cmwuY3JlYXRlKHtcbiAgICAgICAgbWVzc2FnZTogdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQoJ2dlbmVyaWMuY29uZmlybWluZycpLFxuICAgICAgfSlcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGxvYWRpbmcucHJlc2VudCgpXG4gICAgICAgIGF3YWl0IHRoaXMuYWNjb3VudFNlcnZpY2UubG9hZEN5Y2xpc3QoKVxuICAgICAgICBhd2FpdCB0aGlzLnNldHVwUGF5bWVudE1ldGhvZChjbGllbnRTZWNyZXQpXG4gICAgICAgIGF3YWl0IHRoaXMudmFsaWRhdGVUZXJtc0FuZFJlZGlyZWN0KClcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGF3YWl0IGxvYWRpbmcuZGlzbWlzcygpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5pdFBhZ2VEYXRhKClcbiAgICB9XG4gIH1cblxuICBhc3luYyBpbml0UGFnZURhdGEoKSB7XG4gICAgdGhpcy5sYXlvdXQgPSAnc2VsZWN0aW5nJ1xuICAgIGZldGNoVXNlckF0dHJpYnV0ZXMoKS50aGVuKChhdHRyaWJ1dGVzKSA9PiB7XG4gICAgICB0aGlzLnVzZXJBdHRyaWJ1dGVzID0gYXR0cmlidXRlc1xuICAgIH0pXG5cbiAgICAvLyBJbml0aWFsaXplIFN0cmlwZSBFbGVtZW50cyBpbiBhbnkgY2FzZSBhcyB3ZSdsbCBuZWVkIHRoZSBjbGllbnRTZWNyZXRcbiAgICB0aGlzLnN0cmlwZVNlcnZpY2VcbiAgICAgIC5pbml0U3RyaXBlRWxlbWVudHMoZW52aXJvbm1lbnQucHJvZ3JhbSlcbiAgICAgIC5zdWJzY3JpYmUoYXN5bmMgKG9wdGlvbnMpID0+IHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuXG4gICAgICAgIGlmIChDYXBhY2l0b3IuZ2V0UGxhdGZvcm0oKSA9PT0gJ2lvcycpIHtcbiAgICAgICAgICBjb25zdCBpc0F2YWlsYWJsZSA9IGF3YWl0IHRoaXMuc3RyaXBlU2VydmljZS5pc0FwcGxlUGF5QXZhaWxhYmxlKClcbiAgICAgICAgICB0aGlzLnBheW1lbnRNb2RlID0gaXNBdmFpbGFibGUgPyAnYXBwbGVwYXknIDogJ2NsYXNzaWMnXG4gICAgICAgIH1cbiAgICAgICAgaWYgKENhcGFjaXRvci5nZXRQbGF0Zm9ybSgpID09PSAnYW5kcm9pZCcpIHtcbiAgICAgICAgICBjb25zdCBpc0F2YWlsYWJsZSA9IGF3YWl0IHRoaXMuc3RyaXBlU2VydmljZS5pc0dvb2dsZVBheUF2YWlsYWJsZSgpXG4gICAgICAgICAgdGhpcy5wYXltZW50TW9kZSA9IGlzQXZhaWxhYmxlID8gJ2dvb2dsZXBheScgOiAnY2xhc3NpYydcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgIHRoaXMuZm9yZmFpdHNTZXJ2aWNlLmdldERlZmF1bHRGb3JmYWl0KCkudGhlbigoZm9yZmFpdCkgPT4ge1xuICAgICAgaWYgKGZvcmZhaXQpIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0Rm9yZmFpdCA9IGZvcmZhaXRcbiAgICAgICAgdGhpcy5zZWxlY3RlZEZvcmZhaXQgPSBmb3JmYWl0XG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuaGFzRm9yZmFpdHNBdmFpbGFibGUgPSAoYXdhaXQgdGhpcy5mb3JmYWl0c1NlcnZpY2UuaGFzRm9yZmFpdHMoKSlcbiAgICAgID8gJ3RydWUnXG4gICAgICA6ICdmYWxzZSdcbiAgfVxuXG4gIGFzeW5jIG9wZW5DZ3VNb2RhbChldmVudDogTW91c2VFdmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgY29uc3QgbW9kYWwgPSBhd2FpdCB0aGlzLm1vZGFsQ3RybC5jcmVhdGUoe1xuICAgICAgY29tcG9uZW50OiBDZ3VDb21wb25lbnQsXG4gICAgICBwcmVzZW50aW5nRWxlbWVudDogdGhpcy5pb25Sb3V0ZXJPdXRsZXQubmF0aXZlRWwsXG4gICAgfSlcbiAgICBhd2FpdCBtb2RhbC5wcmVzZW50KClcbiAgfVxuXG4gIGFzeW5jIG9wZW5Gb3JmYWl0TW9kYWwoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGNvbnN0IG1vZGFsID0gYXdhaXQgdGhpcy5tb2RhbEN0cmwuY3JlYXRlKHtcbiAgICAgIGNvbXBvbmVudDogRm9yZmFpdExpc3RNb2RhbENvbXBvbmVudCxcbiAgICAgIGNvbXBvbmVudFByb3BzOiB7XG4gICAgICAgIG5leHQ6ICdvbmJvYXJkaW5nJyxcbiAgICAgIH0sXG4gICAgICBwcmVzZW50aW5nRWxlbWVudDogdGhpcy5pb25Sb3V0ZXJPdXRsZXQubmF0aXZlRWwsXG4gICAgfSlcbiAgICBtb2RhbC5vbkRpZERpc21pc3MoKS50aGVuKGFzeW5jIChyZXN1bHQpID0+IHtcbiAgICAgIGlmIChyZXN1bHQuZGF0YSkge1xuICAgICAgICB0aGlzLnByb21vQ29kZSA9ICcnXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRGb3JmYWl0ID0gcmVzdWx0LmRhdGEuZm9yZmFpdFxuICAgICAgICBhd2FpdCB0aGlzLnN1YnNjcmlwdGlvblByb2Nlc3Muc3RhcnRQcm9jZXNzKHRoaXMuc2VsZWN0ZWRGb3JmYWl0KVxuICAgICAgICBhd2FpdCB0aGlzLnN1YnNjcmlwdGlvblByb2Nlc3MudXBkYXRlU3RlcCgncGF5bWVudCcpXG4gICAgICB9XG4gICAgfSlcbiAgICBhd2FpdCBtb2RhbC5wcmVzZW50KClcbiAgfVxuXG4gIGFzeW5jIHNldHVwUGF5bWVudE1ldGhvZChjbGllbnRTZWNyZXQ6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSkgPT4ge1xuICAgICAgdGhpcy5zdHJpcGVTZXJ2aWNlLnJldHJpZXZlU2V0dXBJbnRlbnQoY2xpZW50U2VjcmV0KS5zdWJzY3JpYmUoe1xuICAgICAgICBuZXh0OiBhc3luYyAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgcmVzdWx0ICYmXG4gICAgICAgICAgICByZXN1bHQuc2V0dXBJbnRlbnQgJiZcbiAgICAgICAgICAgIHJlc3VsdC5zZXR1cEludGVudC5wYXltZW50X21ldGhvZFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wYXltZW50TWV0aG9kU2VydmljZS5zZXREZWZhdWx0Q2FyZChcbiAgICAgICAgICAgICAgcmVzdWx0LnNldHVwSW50ZW50LnBheW1lbnRfbWV0aG9kIGFzIHN0cmluZ1xuICAgICAgICAgICAgKVxuICAgICAgICAgICAgaWYgKHRoaXMubGF5b3V0ICE9PSAnY29uZmlybWluZycpIHtcbiAgICAgICAgICAgICAgYXdhaXQgdGhpcy5hY2NvdW50U2VydmljZS5sb2FkQ3ljbGlzdCgpXG4gICAgICAgICAgICAgIGF3YWl0IHRoaXMucGF5bWVudE1ldGhvZFNlcnZpY2UuZ2V0UGF5bWVudE1ldGhvZHMoKVxuICAgICAgICAgICAgICB0aGlzLmxheW91dCA9ICdwYXltZW50X21ldGhvZF9hZGRlZCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc29sdmUodHJ1ZSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSlcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5sYXlvdXQgPSAnc2VsZWN0aW5nJ1xuICAgICAgICAgIHJlc29sdmUoZmFsc2UpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBhc3luYyBjb25maXJtU2V0dXAoKSB7XG4gICAgY29uc3QgbG9hZGluZyA9IGF3YWl0IHRoaXMubG9hZGluZ0N0cmwuY3JlYXRlKHtcbiAgICAgIG1lc3NhZ2U6IHRoaXMudHJhbnNsYXRlU2VydmljZS5pbnN0YW50KCdnZW5lcmljLmNvbmZpcm1pbmcnKSxcbiAgICB9KVxuXG4gICAgYXdhaXQgbG9hZGluZy5wcmVzZW50KClcblxuICAgIHRoaXMuc3RyaXBlU2VydmljZVxuICAgICAgLmNvbmZpcm1TZXR1cChcbiAgICAgICAgdGhpcy5wYXltZW50RWxlbWVudC5lbGVtZW50cyxcbiAgICAgICAgdGhpcy5vcHRpb25zLmNsaWVudFNlY3JldCEsXG4gICAgICAgIHRoaXMudXNlckF0dHJpYnV0ZXMubmFtZSFcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoe1xuICAgICAgICBuZXh0OiBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgYXdhaXQgbG9hZGluZy5kaXNtaXNzKClcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGFzeW5jICgpID0+IHtcbiAgICAgICAgICB0aGlzLmxheW91dCA9ICdzZWxlY3RpbmcnXG4gICAgICAgICAgYXdhaXQgbG9hZGluZy5kaXNtaXNzKClcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gIH1cblxuICBhc3luYyBvcGVuQXBwbGVQYXkoKSB7XG4gICAgY29uc3QgbG9hZGluZyA9IGF3YWl0IHRoaXMubG9hZGluZ0N0cmwuY3JlYXRlKHtcbiAgICAgIG1lc3NhZ2U6IHRoaXMudHJhbnNsYXRlU2VydmljZS5pbnN0YW50KCdnZW5lcmljLmNvbmZpcm1pbmcnKSxcbiAgICB9KVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuc3RyaXBlU2VydmljZS5zZXR1cEFwcGxlUGF5KFxuICAgICAgICB0aGlzLm9wdGlvbnMuY2xpZW50U2VjcmV0ISxcbiAgICAgICAgdGhpcy5wcm9ncmFtPy5uYW1lIHx8ICcnLFxuICAgICAgICB0aGlzLnByb2dyYW0/LmNvbmZpZz8uYXBwbGVwYXlfbWVyY2hhbnQgfHwgJydcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCA9PT0gJ2NvbXBsZXRlZCcpIHtcbiAgICAgICAgYXdhaXQgbG9hZGluZy5wcmVzZW50KClcbiAgICAgICAgYXdhaXQgdGhpcy5zZXR1cFBheW1lbnRNZXRob2QodGhpcy5vcHRpb25zLmNsaWVudFNlY3JldCEpXG4gICAgICAgIGF3YWl0IGxvYWRpbmcuZGlzbWlzcygpXG4gICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gJ2ZhaWxlZCcpIHtcbiAgICAgICAgdGhpcy5sYXlvdXQgPSAnc2VsZWN0aW5nJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sYXlvdXQgPSAnc2VsZWN0aW5nJ1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLmxheW91dCA9ICdzZWxlY3RpbmcnXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgb3Blbkdvb2dsZVBheSgpIHtcbiAgICBjb25zdCBsb2FkaW5nID0gYXdhaXQgdGhpcy5sb2FkaW5nQ3RybC5jcmVhdGUoe1xuICAgICAgbWVzc2FnZTogdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQoJ2dlbmVyaWMuY29uZmlybWluZycpLFxuICAgIH0pXG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5zdHJpcGVTZXJ2aWNlLnNldHVwR29vZ2xlUGF5KFxuICAgICAgICB0aGlzLm9wdGlvbnMuY2xpZW50U2VjcmV0ISxcbiAgICAgICAgdGhpcy5wcm9ncmFtPy5uYW1lIHx8ICdFY292ZWxvJ1xuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0ID09PSAnY29tcGxldGVkJykge1xuICAgICAgICBhd2FpdCBsb2FkaW5nLnByZXNlbnQoKVxuICAgICAgICBhd2FpdCB0aGlzLnNldHVwUGF5bWVudE1ldGhvZCh0aGlzLm9wdGlvbnMuY2xpZW50U2VjcmV0ISlcbiAgICAgICAgYXdhaXQgbG9hZGluZy5kaXNtaXNzKClcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSAnZmFpbGVkJykge1xuICAgICAgICB0aGlzLmxheW91dCA9ICdzZWxlY3RpbmcnXG4gICAgICAgIHRoaXMucGF5bWVudE1vZGUgPSAnY2xhc3NpYydcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubGF5b3V0ID0gJ3NlbGVjdGluZydcbiAgICAgICAgdGhpcy5wYXltZW50TW9kZSA9ICdjbGFzc2ljJ1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLmxheW91dCA9ICdzZWxlY3RpbmcnXG4gICAgICB0aGlzLnBheW1lbnRNb2RlID0gJ2NsYXNzaWMnXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgdmFsaWRhdGVUZXJtc0FuZFJlZGlyZWN0KCkge1xuICAgIGF3YWl0IHRoaXMuY2d1U2VydmljZS52YWxpZGF0ZVRlcm1zKClcbiAgICBjb25zdCBwcm9jZXNzID0gYXdhaXQgZmlyc3RWYWx1ZUZyb20oXG4gICAgICB0aGlzLnN1YnNjcmlwdGlvblByb2Nlc3MuZ2V0Q3VycmVudFByb2Nlc3MoKVxuICAgIClcblxuICAgIGNvbnN0IGhhc0t5Y0RvY3VtZW50cyA9XG4gICAgICB0aGlzLmt5Y1NlcnZpY2UuZW5hYmxlZERvY3VtZW50VHlwZXMoKSAmJlxuICAgICAgdGhpcy5reWNTZXJ2aWNlLmVuYWJsZWREb2N1bWVudFR5cGVzKCkubGVuZ3RoID4gMFxuXG4gICAgY29uc3QgaGFzU3VwcG9ydGluZ0RvY3VtZW50cyA9XG4gICAgICBwcm9jZXNzPy5mb3JmYWl0Py5zdXBwb3J0aW5nX2RvY3VtZW50cyAmJlxuICAgICAgcHJvY2Vzcz8uZm9yZmFpdD8uc3VwcG9ydGluZ19kb2N1bWVudHM/Lmxlbmd0aCA+IDBcblxuICAgIGlmIChoYXNLeWNEb2N1bWVudHMpIHtcbiAgICAgIC8vIEtZQyBjb21lcyBmaXJzdCBpZiByZXF1aXJlZFxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycva3ljJ10sIHtcbiAgICAgICAgcXVlcnlQYXJhbXM6IHtcbiAgICAgICAgICBvbmJvYXJkaW5nOiAndHJ1ZScsXG4gICAgICAgIH0sXG4gICAgICAgIHJlcGxhY2VVcmw6IHRydWUsXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAoaGFzU3VwcG9ydGluZ0RvY3VtZW50cykge1xuICAgICAgLy8gU3VwcG9ydGluZyBkb2N1bWVudHMgaWYgbm8gS1lDXG4gICAgICBhd2FpdCB0aGlzLnN1YnNjcmlwdGlvblByb2Nlc3MudXBkYXRlU3RlcCgnZG9jdW1lbnRzJylcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3N1cHBvcnRpbmctZG9jdW1lbnRzJ10sIHtcbiAgICAgICAgcXVlcnlQYXJhbXM6IHsgbmV4dDogJy92ZXJpZnktcGhvbmUnIH0sXG4gICAgICAgIHJlcGxhY2VVcmw6IHRydWUsXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBEaXJlY3QgdG8gcGhvbmUgdmVyaWZpY2F0aW9uIGlmIG5vIGRvY3VtZW50cyBuZWVkZWRcbiAgICAgIGF3YWl0IHRoaXMuc3Vic2NyaXB0aW9uUHJvY2Vzcy51cGRhdGVTdGVwKCdwaG9uZScpXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy92ZXJpZnktcGhvbmUnXSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBvblByb21vQ29kZUNoYW5nZSgpIHtcbiAgICBhd2FpdCB0aGlzLnN1YnNjcmlwdGlvblByb2Nlc3MudXBkYXRlUmVkdWN0aW9uKHRoaXMucHJvbW9Db2RlKVxuICB9XG5cbiAgZ2V0SWNvbihicmFuZDogc3RyaW5nIHwgdW5kZWZpbmVkKTogc3RyaW5nIHtcbiAgICBzd2l0Y2ggKGJyYW5kKSB7XG4gICAgICBjYXNlICd2aXNhJzpcbiAgICAgICAgcmV0dXJuICcuLi8uLi8uLi9hc3NldHMvc3ZnL2ZvbnRhd2Vzb21lL3Zpc2Euc3ZnJ1xuICAgICAgY2FzZSAnbWFzdGVyY2FyZCc6XG4gICAgICAgIHJldHVybiAnLi4vLi4vLi4vYXNzZXRzL3N2Zy9mb250YXdlc29tZS9tYXN0ZXJjYXJkLnN2ZydcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnLi4vLi4vLi4vYXNzZXRzL3N2Zy9mb250YXdlc29tZS9jcmVkaXQtY2FyZC5zdmcnXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgY2FuY2VsU2VsZWN0aW9uKCkge1xuICAgIHRoaXMuc2VsZWN0ZWRGb3JmYWl0ID0gdGhpcy5kZWZhdWx0Rm9yZmFpdFxuICAgIGF3YWl0IHRoaXMuc3Vic2NyaXB0aW9uUHJvY2Vzcy5jbGVhclByb2Nlc3MoKVxuICAgIHRoaXMucHJvbW9Db2RlID0gJydcbiAgfVxuICB0b2dnbGVTdHJpcGVGb3JtRmlsbGVkKGV2ZW50OiBTdHJpcGVQYXltZW50RWxlbWVudENoYW5nZUV2ZW50KSB7XG4gICAgaWYgKFxuICAgICAgZXZlbnQudmFsdWU/LnR5cGUgPT09ICdhcHBsZV9wYXknICYmXG4gICAgICB0aGlzLnBheW1lbnRNb2RlICE9PSAnY2xhc3NpY19hcHBsZXBheSdcbiAgICApIHtcbiAgICAgIHRoaXMucGF5bWVudE1vZGUgPSAnY2xhc3NpY19hcHBsZXBheSdcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgZXZlbnQudmFsdWU/LnR5cGUgPT09ICdnb29nbGVfcGF5JyAmJlxuICAgICAgdGhpcy5wYXltZW50TW9kZSAhPT0gJ2NsYXNzaWNfZ29vZ2xlcGF5J1xuICAgICkge1xuICAgICAgdGhpcy5wYXltZW50TW9kZSA9ICdjbGFzc2ljX2dvb2dsZXBheSdcbiAgICB9IGVsc2UgaWYgKCFldmVudC52YWx1ZT8udHlwZSAmJiB0aGlzLnBheW1lbnRNb2RlICE9PSAnY2xhc3NpYycpIHtcbiAgICAgIHRoaXMucGF5bWVudE1vZGUgPSAnY2xhc3NpYydcbiAgICB9XG4gICAgdGhpcy5zdHJpcGVGb3JtRmlsbGVkID0gZXZlbnQuY29tcGxldGUgPyAnVFJVRScgOiAnRkFMU0UnXG4gIH1cbiAgdG9nZ2xlQ2d1KGV2ZW50OiBDdXN0b21FdmVudCkge1xuICAgIHN3aXRjaCAoZXZlbnQuZGV0YWlsLmNoZWNrZWQpIHtcbiAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgdGhpcy5jZ3VBY2NlcHRlZCA9ICdUUlVFJ1xuICAgICAgICBicmVha1xuICAgICAgY2FzZSBmYWxzZTpcbiAgICAgICAgdGhpcy5jZ3VBY2NlcHRlZCA9ICdGQUxTRSdcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuY2d1QWNjZXB0ZWQgPSAnRkFMU0UnXG4gICAgICAgIGJyZWFrXG4gICAgfVxuICB9XG59XG4iLCAiPGFwcC1oZWFkZXI+PC9hcHAtaGVhZGVyPlxuPGlvbi1jb250ZW50XG4gIGNsYXNzPVwiaW9uLXBhZGRpbmdcIlxuICAqbmdJZj1cImxheW91dCA9PT0gJ3NlbGVjdGluZycgfHwgbGF5b3V0ID09PSAncGF5bWVudF9tZXRob2RfYWRkZWQnXCJcbj5cbiAgPGlvbi1yb3cgY2xhc3M9XCJpb24tanVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgIDxpb24tY29sIHNpemU9XCIxMlwiIHNpemUtbWQ9XCI4XCIgc2l6ZS1sZz1cIjZcIj5cbiAgICAgIDwhLS0gRm9yZmFpdCBjYXJkIC0tPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFzZWxlY3RlZEZvcmZhaXRcIj5cbiAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0XG4gICAgICAgICAgYW5pbWF0ZWRcbiAgICAgICAgICBzdHlsZT1cIndpZHRoOiAxMDAlOyBoZWlnaHQ6IDIwMHB4XCJcbiAgICAgICAgPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImZvcmZhaXQtY2FyZFwiXG4gICAgICAgICpuZ0lmPVwic2VsZWN0ZWRGb3JmYWl0XCJcbiAgICAgICAgW2NsYXNzLmRlZmF1bHQtZm9yZmFpdF09XCJzZWxlY3RlZEZvcmZhaXQuaWQgPT09IGRlZmF1bHRGb3JmYWl0LmlkXCJcbiAgICAgID5cbiAgICAgICAgPG5nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3M9XCJ0aXRsZVwiPnt7IHNlbGVjdGVkRm9yZmFpdC5uYW1lIH19PC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiICpuZ0lmPVwic2VsZWN0ZWRGb3JmYWl0LmlkICE9PSBkZWZhdWx0Rm9yZmFpdC5pZFwiPlxuICAgICAgICAgICAgICB7eyBzZWxlY3RlZEZvcmZhaXQuZmljaGUucHJpY2UgfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLWJsb2NrXCIgKm5nSWY9XCJzZWxlY3RlZEZvcmZhaXQuZmljaGUudGFyaWZzXCI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzPVwiaW5mby1pdGVtXCJcbiAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IHRhcmlmIG9mIHNlbGVjdGVkRm9yZmFpdC5maWNoZS50YXJpZnNcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+e3sgdGFyaWYudGl0bGUgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+e3sgdGFyaWYucHJpY2UgfX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJkZXNjcmlwdGlvblwiPnt7IHRhcmlmLmRlc2NyaXB0aW9uIH19PC9zbWFsbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzcz1cImxpbmtcIlxuICAgICAgICAgICAgKm5nSWY9XCJoYXNGb3JmYWl0c0F2YWlsYWJsZSA9PT0gJ3RydWUnXCJcbiAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3RlZEZvcmZhaXQuaWQgPT09IGRlZmF1bHRGb3JmYWl0LmlkID8gb3BlbkZvcmZhaXRNb2RhbCgkZXZlbnQpIDogY2FuY2VsU2VsZWN0aW9uKCkgXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7eyBzZWxlY3RlZEZvcmZhaXQuaWQgPT09IGRlZmF1bHRGb3JmYWl0LmlkID9cbiAgICAgICAgICAgICgnZm9yZmFpdC5zZWxlY3RfYW5vdGhlcl9wbGFuJyB8IHRyYW5zbGF0ZSkgOlxuICAgICAgICAgICAgKCdmb3JmYWl0LmNhbmNlbF9zZWxlY3Rpb24nIHwgdHJhbnNsYXRlKSB9fVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPCEtLSBQYXltZW50IHNrZWxldG9uIC0tPlxuICAgICAgPGlvbi1saXN0XG4gICAgICAgICpuZ0lmPVwiIW9wdGlvbnMgJiYgcGF5bWVudE1vZGUgPT09ICdjbGFzc2ljJ1wiXG4gICAgICAgIGNsYXNzPVwiaW9uLW1hcmdpbi10b3BcIlxuICAgICAgPlxuICAgICAgICA8aW9uLWl0ZW0+XG4gICAgICAgICAgPGlvbi1sYWJlbD5cbiAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0XG4gICAgICAgICAgICAgICAgW2FuaW1hdGVkXT1cInRydWVcIlxuICAgICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDEwMCU7IGhlaWdodDogNTBweFwiXG4gICAgICAgICAgICAgID48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHRcbiAgICAgICAgICAgICAgICBbYW5pbWF0ZWRdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogMTAwJTsgaGVpZ2h0OiA1MHB4XCJcbiAgICAgICAgICAgICAgPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0XG4gICAgICAgICAgICAgICAgW2FuaW1hdGVkXT1cInRydWVcIlxuICAgICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDEwMCU7IGhlaWdodDogNTBweFwiXG4gICAgICAgICAgICAgID48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgPC9pb24tbGlzdD5cblxuICAgICAgPCEtLSBQYXltZW50IG1ldGhvZHMgZGlzcGxheSAtLT5cbiAgICAgIDxkaXZcbiAgICAgICAgKm5nSWY9XCJjYXJkc1N0YXRlLnN0YXRlID09PSAnc3VjY2VzcycgJiYgY2FyZHNTdGF0ZS5wYXltZW50TWV0aG9kcy5sZW5ndGggPiAwXCJcbiAgICAgICAgY2xhc3M9XCJpb24tbWFyZ2luLXRvcFwiXG4gICAgICA+XG4gICAgICAgIDxpb24tbGlzdCBsaW5lcz1cIm5vbmVcIj5cbiAgICAgICAgICA8aW9uLWl0ZW1cbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCBjYXJkIG9mIGNhcmRzU3RhdGUucGF5bWVudE1ldGhvZHNcIlxuICAgICAgICAgICAgY2xhc3M9XCJpb24tbWFyZ2luLXRvcCBjYXJkLWl0ZW1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpb24taWNvblxuICAgICAgICAgICAgICBzbG90PVwic3RhcnRcIlxuICAgICAgICAgICAgICBbc3JjXT1cImdldEljb24oY2FyZC5jYXJkPy5icmFuZClcIlxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgPjwvaW9uLWljb24+XG4gICAgICAgICAgICA8aW9uLWxhYmVsPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2FyZC1udW1iZXJcIj4qKioqe3sgY2FyZC5jYXJkPy5sYXN0NCB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZXhwaXJ5XCJcbiAgICAgICAgICAgICAgICAgICpuZ0lmPVwiY2FyZC5jYXJkICYmIGNhcmQuY2FyZC5leHBfbW9udGggJiYgY2FyZC5jYXJkLmV4cF95ZWFyXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBFeHAuIHt7IGNhcmQuY2FyZC5leHBfbW9udGggPCAxMCA/ICcwJyArIGNhcmQuY2FyZC5leHBfbW9udGggOlxuICAgICAgICAgICAgICAgICAgY2FyZC5jYXJkLmV4cF9tb250aCB9fS97e1xuICAgICAgICAgICAgICAgICAgY2FyZC5jYXJkLmV4cF95ZWFyLnRvU3RyaW5nKCkuc2xpY2UoLTIpIH19XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgICAgICAgPGlvbi1iYWRnZVxuICAgICAgICAgICAgICAqbmdJZj1cImNhcmRzU3RhdGUuc3RhdGUgPT09ICdzdWNjZXNzJyAmJiBwYXltZW50TWV0aG9kU2VydmljZS5kZWZhdWx0UGF5bWVudE1ldGhvZCgpPy5pZCA9PT0gY2FyZC5pZFwiXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiZGVmYXVsdC1iYWRnZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt7ICdjYXJkcy5kZWZhdWx0JyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICAgICAgPC9pb24tYmFkZ2U+XG4gICAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgPC9pb24tbGlzdD5cbiAgICAgICAgPGhyIGNsYXNzPVwiZGl2aWRlclwiIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPCEtLSBQYXltZW50IGJ1dHRvbnMgYW5kIGZvcm0gLS0+XG4gICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICpuZ0lmPVwiKGNhcmRzU3RhdGUuc3RhdGUgIT09ICdzdWNjZXNzJyB8fCBjYXJkc1N0YXRlLnBheW1lbnRNZXRob2RzLmxlbmd0aCA9PT0gMCkgJiYgbGF5b3V0ID09PSAnc2VsZWN0aW5nJ1wiXG4gICAgICA+XG4gICAgICAgIDxpb24tYnV0dG9uXG4gICAgICAgICAgKm5nSWY9XCJwYXltZW50TW9kZSA9PT0gJ2FwcGxlcGF5J1wiXG4gICAgICAgICAgZXhwYW5kPVwiYmxvY2tcIlxuICAgICAgICAgIGNsYXNzPVwiaW9uLW1hcmdpbi12ZXJ0aWNhbCBhcHBsZS1wYXktYnV0dG9uXCJcbiAgICAgICAgICAoY2xpY2spPVwib3BlbkFwcGxlUGF5KClcIlxuICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxuICAgICAgICAgIGZpbGw9XCJvdXRsaW5lXCJcbiAgICAgICAgICBjb2xvcj1cImRhcmtcIlxuICAgICAgICA+XG4gICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJsb2dvLWFwcGxlXCIgc2xvdD1cInN0YXJ0XCI+PC9pb24taWNvbj5cbiAgICAgICAgICA8c3Bhbj57eyAnY2FyZHMucGF5X3dpdGhfYXBwbGVfcGF5JyB8IHRyYW5zbGF0ZSB9fTwvc3Bhbj5cbiAgICAgICAgPC9pb24tYnV0dG9uPlxuXG4gICAgICAgIDwhLS0gU3RyaXBlIHBheW1lbnQgZWxlbWVudCAtLT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGlkPVwicGF5bWVudC1lbGVtZW50XCJcbiAgICAgICAgICBjbGFzcz1cImlvbi1tYXJnaW4tdG9wIGlvbi1tYXJnaW4tYm90dG9tLXNtYWxsXCJcbiAgICAgICAgICAqbmdJZj1cIm9wdGlvbnMgJiYgcGF5bWVudE1vZGUgIT09ICdnb29nbGVwYXknXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxuZ3gtc3RyaXBlLWVsZW1lbnRzXG4gICAgICAgICAgICBbc3RyaXBlXT1cInN0cmlwZVNlcnZpY2UuZ2V0U3RyaXBlKClcIlxuICAgICAgICAgICAgW2VsZW1lbnRzT3B0aW9uc109XCJvcHRpb25zXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8bmd4LXN0cmlwZS1wYXltZW50IChjaGFuZ2UpPVwidG9nZ2xlU3RyaXBlRm9ybUZpbGxlZCgkZXZlbnQpXCIgLz5cbiAgICAgICAgICA8L25neC1zdHJpcGUtZWxlbWVudHM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgIDxpb24tY2FyZFxuICAgICAgICBjbGFzcz1cImlvbi1uby1tYXJnaW4gaW9uLW1hcmdpbi10b3BcIlxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAqbmdJZj1cInBheW1lbnRNb2RlID09PSAnZ29vZ2xlcGF5J1wiXG4gICAgICA+XG4gICAgICAgIDxpb24tY2FyZC1jb250ZW50XG4gICAgICAgICAgPnt7ICdwYXltZW50LmRpc2NsYWltZXInIHwgdHJhbnNsYXRlIH19PC9pb24tY2FyZC1jb250ZW50XG4gICAgICAgID5cbiAgICAgIDwvaW9uLWNhcmQ+XG4gICAgICA8IS0tIENHVSBjaGVja2JveCAtLT5cbiAgICAgIDxpb24tY2hlY2tib3hcbiAgICAgICAgY2xhc3M9XCJpb24tbWFyZ2luLXRvcFwiXG4gICAgICAgIGNvbG9yPVwiZGFya1wiXG4gICAgICAgIGxhYmVsUGxhY2VtZW50PVwiZW5kXCJcbiAgICAgICAgKGlvbkNoYW5nZSk9XCJ0b2dnbGVDZ3UoJGV2ZW50KVwiXG4gICAgICA+XG4gICAgICAgIHt7ICdjZ3UuYWNjZXB0JyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICA8YSAoY2xpY2spPVwib3BlbkNndU1vZGFsKCRldmVudClcIiBjbGFzcz1cImlvbi10ZXh0LXdyYXBcIj5cbiAgICAgICAgICB7eyAnY2d1Lm5hbWUnIHwgdHJhbnNsYXRlIH19XG4gICAgICAgIDwvYT5cbiAgICAgIDwvaW9uLWNoZWNrYm94PlxuXG4gICAgICA8IS0tIFByb21vIGNvZGUgaW5wdXQgLS0+XG4gICAgICA8aW9uLWlucHV0XG4gICAgICAgIGNsYXNzPVwiaW9uLW1hcmdpbi10b3AgaW9uLW1hcmdpbi1ib3R0b21cIlxuICAgICAgICBbKG5nTW9kZWwpXT1cInByb21vQ29kZVwiXG4gICAgICAgIChpb25DaGFuZ2UpPVwib25Qcm9tb0NvZGVDaGFuZ2UoKVwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwie3sgJ2ZvcmZhaXQucmVkdWN0aW9uX2NvZGUnIHwgdHJhbnNsYXRlIH19XCJcbiAgICAgICAgZmlsbD1cIm91dGxpbmVcIlxuICAgICAgICBtb2RlPVwibWRcIlxuICAgICAgPjwvaW9uLWlucHV0PlxuXG4gICAgICA8IS0tIFN1Ym1pdCBidXR0b24gLS0+XG4gICAgICA8aW9uLWJ1dHRvblxuICAgICAgICBleHBhbmQ9XCJibG9ja1wiXG4gICAgICAgIHNoYXBlPVwicm91bmRcIlxuICAgICAgICAqbmdJZj1cImxheW91dCA9PT0gJ3NlbGVjdGluZydcIlxuICAgICAgICAoY2xpY2spPVwicGF5bWVudE1vZGUgPT09ICdnb29nbGVwYXknID8gb3Blbkdvb2dsZVBheSgpIDogcGF5bWVudE1vZGUgPT09ICdjbGFzc2ljX2FwcGxlcGF5JyA/IHN0cmlwZVNlcnZpY2UuY29uZmlybVNldHVwKHBheW1lbnRFbGVtZW50LmVsZW1lbnRzLCBvcHRpb25zLmNsaWVudFNlY3JldCEsIHVzZXJBdHRyaWJ1dGVzLm5hbWUhKSA6IGNvbmZpcm1TZXR1cCgpXCJcbiAgICAgICAgW2Rpc2FibGVkXT1cInRoaXMuY2d1QWNjZXB0ZWQgPT09ICdGQUxTRScgfHwgICh0aGlzLnN0cmlwZUZvcm1GaWxsZWQgPT09ICdGQUxTRScgJiYgcGF5bWVudE1vZGUgIT09ICdnb29nbGVwYXknKVwiXG4gICAgICA+XG4gICAgICAgIHt7ICdwYXltZW50LnNhdmVfcGF5bWVudF9tZXRob2QnIHwgdHJhbnNsYXRlIH19XG4gICAgICA8L2lvbi1idXR0b24+XG4gICAgICA8aW9uLWJ1dHRvblxuICAgICAgICBleHBhbmQ9XCJibG9ja1wiXG4gICAgICAgIHNoYXBlPVwicm91bmRcIlxuICAgICAgICAqbmdJZj1cImxheW91dCA9PT0gJ3BheW1lbnRfbWV0aG9kX2FkZGVkJ1wiXG4gICAgICAgIChjbGljayk9XCJ2YWxpZGF0ZVRlcm1zQW5kUmVkaXJlY3QoKVwiXG4gICAgICAgIFtkaXNhYmxlZF09XCJ0aGlzLmNndUFjY2VwdGVkID09PSAnRkFMU0UnXCJcbiAgICAgID5cbiAgICAgICAge3sgJ2dlbmVyaWMuY29udGludWUnIHwgdHJhbnNsYXRlIH19XG4gICAgICA8L2lvbi1idXR0b24+XG5cbiAgICAgIDwhLS0gU2tpcCBzdGVwIGxpbmsgLS0+XG4gICAgICA8aW9uLXRleHQgY29sb3I9XCJtZWRpdW1cIiBjbGFzcz1cImlvbi10ZXh0LWNlbnRlciBpb24tbWFyZ2luLXRvcFwiPlxuICAgICAgICA8cD5cbiAgICAgICAgICA8dSBbcm91dGVyTGlua109XCJbJy9tYXAnXVwiPnt7ICdzaWduaW4uc2tpcF9zdGVwJyB8IHRyYW5zbGF0ZSB9fTwvdT5cbiAgICAgICAgPC9wPlxuICAgICAgPC9pb24tdGV4dD5cbiAgICA8L2lvbi1jb2w+XG4gIDwvaW9uLXJvdz5cbjwvaW9uLWNvbnRlbnQ+XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LE9BQU8sU0FBUztNQUM1QixLQUFLO0FBQ0gsYUFBSyxjQUFjO0FBQ25CO01BQ0YsS0FBSztBQUNILGFBQUssY0FBYztBQUNuQjtNQUNGO0FBQ0UsYUFBSyxjQUFjO0FBQ25CO0lBQ0o7RUFDRjs7O21DQXZWVyxvQkFBaUIsNEJBQUEsYUFBQSxHQUFBLDRCQUFBLGVBQUEsR0FBQSw0QkFBQSxlQUFBLEdBQUEsNEJBQUEsTUFBQSxHQUFBLDRCQUFBLFVBQUEsR0FBQSw0QkFBQSxzQkFBQSxHQUFBLDRCQUFBLGNBQUEsR0FBQSw0QkFBQSxxQkFBQSxHQUFBLDRCQUFBLGNBQUEsR0FBQSw0QkFBQSxpQkFBQSxHQUFBLDRCQUFBLGdCQUFBLEdBQUEsNEJBQUEsWUFBQSxHQUFBLDRCQUFBLDBCQUFBLEdBQUEsNEJBQUEsY0FBQSxHQUFBLDRCQUFBLGlCQUFBLEdBQUEsNEJBQUEsbUJBQUEsQ0FBQTtBQUFBO21GQUFqQixvQkFBaUIsV0FBQSxDQUFBLENBQUEsb0JBQUEsQ0FBQSxHQUFBLFdBQUEsU0FBQSx3QkFBQSxJQUFBLEtBQUE7QUFBQSxNQUFBLEtBQUEsR0FBQTswQkFDakIsK0JBQTZCLENBQUE7Ozs7Ozs7O0FDN0QxQyxJQUFBLG9CQUFBLEdBQUEsWUFBQTtBQUNBLElBQUEscUJBQUEsR0FBQSwwQ0FBQSxJQUFBLElBQUEsZUFBQSxDQUFBOzs7QUFFRyxJQUFBLG9CQUFBO0FBQUEsSUFBQSxxQkFBQSxRQUFBLElBQUEsV0FBQSxlQUFBLElBQUEsV0FBQSxzQkFBQTs7O0VEK0NDO0VBQVk7RUFBQTtFQUNaO0VBQVc7RUFBQTtFQUNYO0VBQVc7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQ1g7RUFBZTtFQUNmO0VBQ0E7RUFDQTtFQUNBO0VBQVk7QUFBQSxHQUFBLFFBQUEsQ0FBQSxvbEVBQUEsRUFBQSxDQUFBO0FBR1YsSUFBTyxvQkFBUDs7c0VBQU8sbUJBQWlCLENBQUE7VUFmN0I7dUJBQ1csc0JBQW9CLFNBR3JCO01BQ1A7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtPQUNELFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBQUEsUUFBQSxDQUFBLHdoREFBQSxFQUFBLENBQUE7MmNBSUQsZ0JBQWMsQ0FBQTtVQURiO1dBQVUsNkJBQTZCOzs7OzZFQUQ3QixtQkFBaUIsRUFBQSxXQUFBLHFCQUFBLFVBQUEsNERBQUEsWUFBQSxHQUFBLENBQUE7QUFBQSxHQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
