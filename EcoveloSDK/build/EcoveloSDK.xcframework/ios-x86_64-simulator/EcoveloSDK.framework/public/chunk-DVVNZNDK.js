import {
  AbonnementWrapperService
} from "./chunk-HCOOL2GW.js";
import {
  IonButton,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonRow,
  IonSkeletonText,
  IonSpinner,
  IonText,
  IonTitle,
  IonToolbar,
  IonicModule,
  TextValueAccessorDirective
} from "./chunk-Y4K6NO5T.js";
import {
  AuthService,
  ForfaitsWrapperService
} from "./chunk-WJQU3GMM.js";
import {
  AccountService,
  SubscriptionProcessService
} from "./chunk-XK4I5MHM.js";
import {
  AlertController,
  CommonModule,
  Component,
  FormsModule,
  Input,
  LoadingController,
  ModalController,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  Router,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  effect,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-DGENMXJW.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// src/app/components/modals/forfaits/forfaits.component.ts
function ForfaitListModalComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "ion-spinner");
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "generic.loading"));
  }
}
function ForfaitListModalComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-text", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.forfaitsState.error);
  }
}
function ForfaitListModalComponent_Conditional_11_ion_col_2_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const forfait_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", forfait_r3.fiche.price, " ");
  }
}
function ForfaitListModalComponent_Conditional_11_ion_col_2_div_7_div_1_small_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tarif_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tarif_r4.description);
  }
}
function ForfaitListModalComponent_Conditional_11_ion_col_2_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 9)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, ForfaitListModalComponent_Conditional_11_ion_col_2_div_7_div_1_small_8_Template, 2, 1, "small", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tarif_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, tarif_r4 == null ? null : tarif_r4.title));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, tarif_r4 == null ? null : tarif_r4.price));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", tarif_r4 == null ? null : tarif_r4.description);
  }
}
function ForfaitListModalComponent_Conditional_11_ion_col_2_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, ForfaitListModalComponent_Conditional_11_ion_col_2_div_7_div_1_Template, 9, 7, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const forfait_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", forfait_r3.fiche.tarifs);
  }
}
function ForfaitListModalComponent_Conditional_11_ion_col_2_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "small", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const forfait_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(forfait_r3.fiche.description);
  }
}
function ForfaitListModalComponent_Conditional_11_ion_col_2_div_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "small", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const forfait_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(forfait_r3.fiche.cpu);
  }
}
function ForfaitListModalComponent_Conditional_11_ion_col_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, ForfaitListModalComponent_Conditional_11_ion_col_2_div_8_div_1_Template, 3, 1, "div", 19)(2, ForfaitListModalComponent_Conditional_11_ion_col_2_div_8_div_2_Template, 3, 1, "div", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const forfait_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", forfait_r3.fiche == null ? null : forfait_r3.fiche.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", forfait_r3.fiche == null ? null : forfait_r3.fiche.cpu);
  }
}
function ForfaitListModalComponent_Conditional_11_ion_col_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-col", 7)(1, "div", 8);
    \u0275\u0275listener("click", function ForfaitListModalComponent_Conditional_11_ion_col_2_Template_div_click_1_listener() {
      const forfait_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectForfait(forfait_r3));
    });
    \u0275\u0275elementStart(2, "div", 9)(3, "h2", 10);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ForfaitListModalComponent_Conditional_11_ion_col_2_div_6_Template, 2, 1, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ForfaitListModalComponent_Conditional_11_ion_col_2_div_7_Template, 2, 1, "div", 12)(8, ForfaitListModalComponent_Conditional_11_ion_col_2_div_8_Template, 3, 2, "div", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const forfait_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("selected", ctx_r0.forfaitsState.state === "success" && ctx_r0.forfaitsState.selectedForfait === forfait_r3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 6, forfait_r3.name), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", forfait_r3.fiche == null ? null : forfait_r3.fiche.price);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", forfait_r3.fiche);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.forfaitsState.state === "success" && ctx_r0.forfaitsState.selectedForfait === forfait_r3 && ((forfait_r3.fiche == null ? null : forfait_r3.fiche.description) || (forfait_r3.fiche == null ? null : forfait_r3.fiche.cpu)));
  }
}
function ForfaitListModalComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-grid")(1, "ion-row", 5);
    \u0275\u0275template(2, ForfaitListModalComponent_Conditional_11_ion_col_2_Template, 9, 8, "ion-col", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.forfaitsState.forfaits);
  }
}
function ForfaitListModalComponent_ion_footer_12_Conditional_2_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "ion-button", 23);
    \u0275\u0275listener("click", function ForfaitListModalComponent_ion_footer_12_Conditional_2_Conditional_0_Conditional_1_Template_ion_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.modalCtrl.dismiss());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-button", 24);
    \u0275\u0275listener("click", function ForfaitListModalComponent_ion_footer_12_Conditional_2_Conditional_0_Conditional_1_Template_ion_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.AbonnementWrapperService.requestDeletion());
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "generic.close"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 4, "forfait.cancel_subscription"), " ");
  }
}
function ForfaitListModalComponent_ion_footer_12_Conditional_2_Conditional_0_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "forfait.status.active_message"), " ");
  }
}
function ForfaitListModalComponent_ion_footer_12_Conditional_2_Conditional_0_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "forfait.status.deletion_requested_message"), " ");
  }
}
function ForfaitListModalComponent_ion_footer_12_Conditional_2_Conditional_0_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "forfait.status.waiting_validation_message"), " ");
  }
}
function ForfaitListModalComponent_ion_footer_12_Conditional_2_Conditional_0_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "forfait.status.incomplete_message"), " ");
  }
}
function ForfaitListModalComponent_ion_footer_12_Conditional_2_Conditional_0_Case_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "forfait.status.past_due_message"), " ");
  }
}
function ForfaitListModalComponent_ion_footer_12_Conditional_2_Conditional_0_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "forfait.status.unpaid_message"), " ");
  }
}
function ForfaitListModalComponent_ion_footer_12_Conditional_2_Conditional_0_Case_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "forfait.status.default_message"), " ");
  }
}
function ForfaitListModalComponent_ion_footer_12_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275template(1, ForfaitListModalComponent_ion_footer_12_Conditional_2_Conditional_0_Conditional_1_Template, 7, 6, "div", 21);
    \u0275\u0275elementStart(2, "p", 22)(3, "small");
    \u0275\u0275template(4, ForfaitListModalComponent_ion_footer_12_Conditional_2_Conditional_0_Case_4_Template, 2, 3)(5, ForfaitListModalComponent_ion_footer_12_Conditional_2_Conditional_0_Case_5_Template, 2, 3)(6, ForfaitListModalComponent_ion_footer_12_Conditional_2_Conditional_0_Case_6_Template, 2, 3)(7, ForfaitListModalComponent_ion_footer_12_Conditional_2_Conditional_0_Case_7_Template, 2, 3)(8, ForfaitListModalComponent_ion_footer_12_Conditional_2_Conditional_0_Case_8_Template, 2, 3)(9, ForfaitListModalComponent_ion_footer_12_Conditional_2_Conditional_0_Case_9_Template, 2, 3)(10, ForfaitListModalComponent_ion_footer_12_Conditional_2_Conditional_0_Case_10_Template, 2, 3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.currentAboState.state === "active" || ctx_r0.currentAboState.state === "waiting_validation" ? 1 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_4_0 = ctx_r0.currentAboState.state) === "active" ? 4 : tmp_4_0 === "deletion_requested" ? 5 : tmp_4_0 === "waiting_validation" ? 6 : tmp_4_0 === "incomplete" ? 7 : tmp_4_0 === "past_due" ? 8 : tmp_4_0 === "unpaid" ? 9 : 10);
  }
}
function ForfaitListModalComponent_ion_footer_12_Conditional_2_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item", 25)(1, "ion-input", 27);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ForfaitListModalComponent_ion_footer_12_Conditional_2_Conditional_1_Conditional_1_Template_ion_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r0.reduction, $event) || (ctx_r0.reduction = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.reduction);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(2, 2, "forfait.reduction_code"));
  }
}
function ForfaitListModalComponent_ion_footer_12_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275template(1, ForfaitListModalComponent_ion_footer_12_Conditional_2_Conditional_1_Conditional_1_Template, 3, 4, "ion-item", 25);
    \u0275\u0275elementStart(2, "ion-button", 26);
    \u0275\u0275listener("click", function ForfaitListModalComponent_ion_footer_12_Conditional_2_Conditional_1_Template_ion_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.handleForfaitSelection());
    });
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.forfaitsState.state === "success" && ctx_r0.forfaitsState.selectedForfait && ctx_r0.next !== "onboarding" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.forfaitsState.state !== "success" || !ctx_r0.forfaitsState.selectedForfait || ctx_r0.accountService.hasBlockedReasons() && ctx_r0.next !== "onboarding");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, "generic.choose_plan"), " ");
  }
}
function ForfaitListModalComponent_ion_footer_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ForfaitListModalComponent_ion_footer_12_Conditional_2_Conditional_0_Template, 11, 2, "div", 1)(1, ForfaitListModalComponent_ion_footer_12_Conditional_2_Conditional_1_Template, 5, 5, "div", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.currentAboState.state !== "unknown" && ctx_r0.currentAboState.state !== "default" ? 0 : 1);
  }
}
function ForfaitListModalComponent_ion_footer_12_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-skeleton-text", 20);
  }
  if (rf & 2) {
    \u0275\u0275property("animated", true);
  }
}
function ForfaitListModalComponent_ion_footer_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-footer")(1, "ion-toolbar");
    \u0275\u0275template(2, ForfaitListModalComponent_ion_footer_12_Conditional_2_Template, 2, 1)(3, ForfaitListModalComponent_ion_footer_12_Conditional_3_Template, 1, 1, "ion-skeleton-text", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.forfaitsState.state === "success" ? 2 : 3);
  }
}
var _ForfaitListModalComponent = class _ForfaitListModalComponent {
  constructor(modalCtrl, forfaitsWrapperService, AbonnementWrapperService2, alertController, router, translate, loadingCtrl, subscriptionProcess, authService, accountService) {
    this.modalCtrl = modalCtrl;
    this.forfaitsWrapperService = forfaitsWrapperService;
    this.AbonnementWrapperService = AbonnementWrapperService2;
    this.alertController = alertController;
    this.router = router;
    this.translate = translate;
    this.loadingCtrl = loadingCtrl;
    this.subscriptionProcess = subscriptionProcess;
    this.authService = authService;
    this.accountService = accountService;
    this.next = "menu";
    this.aboState = { state: "loading" };
    this.currentAboState = { state: "unknown" };
    this.forfaitsState = { state: "loading" };
    this.authState = { state: "SignedOut" };
    this.cyclistState = {
      state: "unknown",
      blocked_reasons: ["Unknown account state"]
    };
    this.promoCode = "";
    this.reduction = "";
    effect(() => {
      this.aboState = this.AbonnementWrapperService.listAbonnementsState();
    });
    effect(() => {
      this.currentAboState = this.AbonnementWrapperService.currentAbonnementState();
    });
    effect(() => {
      this.authState = this.authService.authState();
    });
    effect(() => {
      this.cyclistState = this.accountService.cyclistState();
    });
  }
  ngOnInit() {
    this.forfaitsWrapperService.getForfaits().then((forfaits) => {
      if (forfaits) {
        this.forfaitsState = { state: "success", forfaits };
      } else {
        this.forfaitsState = {
          state: "error",
          error: new Error("Error loading forfaits")
        };
      }
    });
  }
  handleForfaitSelection() {
    return __async(this, null, function* () {
      if (this.forfaitsState.state === "success" && this.forfaitsState.selectedForfait && this.forfaitsState.selectedForfait.id) {
        if (this.next === "onboarding") {
          yield this.subscriptionProcess.startProcess(this.forfaitsState.selectedForfait, this.reduction);
          this.modalCtrl.dismiss({
            forfait: this.forfaitsState.selectedForfait,
            reduction: this.reduction
          });
        } else {
          const alert = yield this.alertController.create({
            header: "Confirmer l'abonnement",
            message: "Voulez-vous vraiment souscrire \xE0 ce forfait ?",
            buttons: [
              {
                text: "Annuler",
                role: "cancel"
              },
              {
                text: "Confirmer",
                handler: () => __async(this, null, function* () {
                  var _a;
                  if (this.forfaitsState.state === "success" && this.forfaitsState.selectedForfait) {
                    yield this.subscriptionProcess.startProcess(this.forfaitsState.selectedForfait, this.reduction);
                    if (this.forfaitsState.selectedForfait.supporting_documents && ((_a = this.forfaitsState.selectedForfait.supporting_documents) == null ? void 0 : _a.length) > 0) {
                      yield this.modalCtrl.dismiss();
                      yield this.router.navigate(["/supporting-documents"]);
                    } else {
                      const payload = yield this.subscriptionProcess.getCreateAbonnementPayload();
                      if (payload) {
                        this.createAbonnement(payload);
                        yield this.subscriptionProcess.clearProcess();
                      } else {
                        throw new Error("No subscription process found");
                      }
                    }
                  }
                })
              }
            ]
          });
          yield alert.present();
        }
      }
    });
  }
  createAbonnement(payload) {
    return __async(this, null, function* () {
      const loading = yield this.loadingCtrl.create({
        message: this.translate.instant("subscription.creation.loading")
      });
      yield loading.present();
      this.AbonnementWrapperService.createAbonnement(payload).finally(() => __async(this, null, function* () {
        yield loading.dismiss();
        yield this.modalCtrl.dismiss();
      }));
    });
  }
  selectForfait(forfait) {
    if (this.forfaitsState.state === "success") {
      this.forfaitsState.selectedForfait = forfait;
    }
  }
};
_ForfaitListModalComponent.\u0275fac = function ForfaitListModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ForfaitListModalComponent)(\u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(ForfaitsWrapperService), \u0275\u0275directiveInject(AbonnementWrapperService), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(LoadingController), \u0275\u0275directiveInject(SubscriptionProcessService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(AccountService));
};
_ForfaitListModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForfaitListModalComponent, selectors: [["app-forfaits"]], inputs: { next: "next" }, decls: 13, vars: 12, consts: [["color", "dark", "fill", "clear", 1, "ecl-no-shadow", "ion-float-right", 3, "click"], [1, "ion-padding"], [1, "ion-text-center"], ["color", "danger"], [4, "ngIf"], [1, "ion-justify-content-center"], ["size", "12", 4, "ngFor", "ngForOf"], ["size", "12"], [1, "forfait-card", 3, "click"], [1, "flex-between"], [1, "title"], ["class", "title title_price", 4, "ngIf"], ["class", "info-block", 4, "ngIf"], [1, "title", "title_price"], [1, "info-block"], ["class", "info-item", 4, "ngFor", "ngForOf"], [1, "info-item"], ["class", "description", 4, "ngIf"], [1, "description"], ["class", "info-item", 4, "ngIf"], [2, "width", "100%", "height", "100px", 3, "animated"], [2, "display", "flex", "gap", "10px", "justify-content", "center"], [1, "ion-text-center", "ion-no-margin"], ["color", "dark", "fill", "clear", 3, "click"], ["color", "danger", 3, "click"], ["lines", "none", 1, "ion-margin-bottom", "ion-margin-horizontal"], ["expand", "block", 3, "click", "disabled"], ["type", "text", "fill", "outline", "size", "small", 1, "ion-text-center", "ion-padding-horizontal", "ion-radius-medium", 3, "ngModelChange", "ngModel", "placeholder"]], template: function ForfaitListModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header")(1, "ion-title");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-button", 0);
    \u0275\u0275listener("click", function ForfaitListModalComponent_Template_ion_button_click_5_listener() {
      return ctx.modalCtrl.dismiss();
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "ion-content", 1);
    \u0275\u0275template(9, ForfaitListModalComponent_Conditional_9_Template, 5, 3, "div", 2)(10, ForfaitListModalComponent_Conditional_10_Template, 2, 1, "ion-text", 3)(11, ForfaitListModalComponent_Conditional_11_Template, 3, 1, "ion-grid");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ForfaitListModalComponent_ion_footer_12_Template, 4, 1, "ion-footer", 4);
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.authState.state === "SignedIn" ? \u0275\u0275pipeBind1(3, 6, "forfaits.title") : \u0275\u0275pipeBind1(4, 8, "forfaits.title_unauthenticated"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 10, "generic.close"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.forfaitsState.state === "loading" ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.forfaitsState.state === "error" ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.forfaitsState.state === "success" ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.authState.state === "SignedIn");
  }
}, dependencies: [CommonModule, NgForOf, NgIf, IonicModule, IonButton, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonInput, IonItem, IonRow, IonSkeletonText, IonSpinner, IonText, IonTitle, IonToolbar, TextValueAccessorDirective, TranslateModule, TranslatePipe, FormsModule, NgControlStatus, NgModel], styles: ["\n\n.forfait-card[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-radius: 10px;\n  border: 1px solid #e0e0e0;\n  margin-bottom: 20px;\n  transition: all 0.3s ease;\n}\n.forfait-card.selected[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-primary);\n  color: var(--ion-color-primary-contrast);\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n.forfait-card.selected[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], \n.forfait-card.selected[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%], \n.forfait-card.selected[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.forfait-card[_ngcontent-%COMP%]   .flex-between[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.forfait-card[_ngcontent-%COMP%]   .flex-between[_ngcontent-%COMP%]   .title_price[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.forfait-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin: 0;\n  font-size: 18px;\n}\n.forfait-card[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.forfait-card[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {\n  margin-top: 3px;\n}\n.forfait-card[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.forfait-card[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  color: #666;\n}\n.forfait-card[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 10px;\n  cursor: pointer;\n  text-decoration: underline;\n  color: var(--ion-color-dark);\n}\nion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --min-height: auto;\n}\nion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  margin: 10px;\n}\nion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  font-size: 14px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=forfaits.component.css.map */"] });
var ForfaitListModalComponent = _ForfaitListModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForfaitListModalComponent, [{
    type: Component,
    args: [{ selector: "app-forfaits", imports: [CommonModule, IonicModule, TranslateModule, FormsModule], template: `<ion-header>
  <ion-title>{{
    authState.state === 'SignedIn'
      ? ('forfaits.title' | translate)
      : ('forfaits.title_unauthenticated' | translate)
  }}</ion-title>
  <ion-button
    color="dark"
    fill="clear"
    (click)="modalCtrl.dismiss()"
    class="ecl-no-shadow ion-float-right"
  >
    {{ 'generic.close' | translate }}
  </ion-button>
</ion-header>

<ion-content class="ion-padding">
  @if (forfaitsState.state === 'loading') {
  <div class="ion-text-center">
    <ion-spinner></ion-spinner>
    <p>{{ 'generic.loading' | translate }}</p>
  </div>
  } @if (forfaitsState.state === 'error') {
  <ion-text color="danger">{{ forfaitsState.error }}</ion-text>
  } @if (forfaitsState.state === 'success') {
  <ion-grid>
    <ion-row class="ion-justify-content-center">
      <ion-col size="12" *ngFor="let forfait of forfaitsState.forfaits">
        <div
          class="forfait-card"
          [class.selected]="
            forfaitsState.state === 'success' &&
            forfaitsState.selectedForfait === forfait
          "
          (click)="selectForfait(forfait)"
        >
          <div class="flex-between">
            <h2 class="title">
              {{ forfait.name! | translate }}
            </h2>
            <div class="title title_price" *ngIf="forfait.fiche?.price">
              {{ forfait.fiche.price }}
            </div>
          </div>
          <div class="info-block" *ngIf="forfait.fiche">
            <div class="info-item" *ngFor="let tarif of forfait.fiche.tarifs">
              <div class="flex-between">
                <span>{{ tarif?.title! | translate }}</span>
                <span>{{ tarif?.price! | translate }}</span>
              </div>
              <small class="description" *ngIf="tarif?.description">{{
                tarif.description
              }}</small>
            </div>
          </div>
          <div
            class="info-block"
            *ngIf="
              forfaitsState.state === 'success' &&
              forfaitsState.selectedForfait === forfait &&
              (forfait.fiche?.description || forfait.fiche?.cpu)
            "
          >
            <div class="info-item" *ngIf="forfait.fiche?.description">
              <small class="description">{{ forfait.fiche.description }}</small>
            </div>
            <div class="info-item" *ngIf="forfait.fiche?.cpu">
              <small class="description">{{ forfait.fiche.cpu }}</small>
            </div>
          </div>
        </div>
      </ion-col>
    </ion-row>
  </ion-grid>
  }
</ion-content>
<ion-footer *ngIf="authState.state === 'SignedIn'">
  <ion-toolbar>
    @if ( forfaitsState.state === 'success' ) { @if ( currentAboState.state !==
    'unknown' && currentAboState.state !== 'default' ) {
    <div class="ion-padding">
      @if (currentAboState.state === 'active' || currentAboState.state ===
      'waiting_validation') {
      <div style="display: flex; gap: 10px; justify-content: center">
        <ion-button (click)="modalCtrl.dismiss()" color="dark" fill="clear">
          {{ 'generic.close' | translate }}
        </ion-button>
        <ion-button
          color="danger"
          (click)="AbonnementWrapperService.requestDeletion()"
        >
          {{ 'forfait.cancel_subscription' | translate }}
        </ion-button>
      </div>
      }
      <p class="ion-text-center ion-no-margin">
        <small>
          @switch (currentAboState.state) { @case ('active') {
          {{ 'forfait.status.active_message' | translate }}
          } @case ('deletion_requested') {
          {{ 'forfait.status.deletion_requested_message' | translate }}
          } @case ('waiting_validation') {
          {{ 'forfait.status.waiting_validation_message' | translate }}
          } @case ('incomplete') {
          {{ 'forfait.status.incomplete_message' | translate }}
          } @case ('past_due') {
          {{ 'forfait.status.past_due_message' | translate }}
          } @case ('unpaid') {
          {{ 'forfait.status.unpaid_message' | translate }}
          } @default {
          {{ 'forfait.status.default_message' | translate }}
          } }
        </small>
      </p>
    </div>
    } @else {
    <div class="ion-padding">
      @if (forfaitsState.state === 'success' && forfaitsState.selectedForfait &&
      next !== 'onboarding') {
      <ion-item lines="none" class="ion-margin-bottom ion-margin-horizontal">
        <ion-input
          [(ngModel)]="reduction"
          [placeholder]="'forfait.reduction_code' | translate"
          type="text"
          fill="outline"
          class="ion-text-center ion-padding-horizontal ion-radius-medium"
          size="small"
        ></ion-input>
      </ion-item>
      }
      <ion-button
        expand="block"
        [disabled]="
          forfaitsState.state !== 'success' ||
          !forfaitsState.selectedForfait ||
          (accountService.hasBlockedReasons() && next !== 'onboarding')
        "
        (click)="handleForfaitSelection()"
      >
        {{ 'generic.choose_plan' | translate }}
      </ion-button>
    </div>
    } } @else {
    <ion-skeleton-text
      [animated]="true"
      style="width: 100%; height: 100px"
    ></ion-skeleton-text>
    }
  </ion-toolbar>
</ion-footer>
`, styles: ["/* src/app/components/modals/forfaits/forfaits.component.scss */\n.forfait-card {\n  padding: 20px;\n  border-radius: 10px;\n  border: 1px solid #e0e0e0;\n  margin-bottom: 20px;\n  transition: all 0.3s ease;\n}\n.forfait-card.selected {\n  background-color: var(--ion-color-primary);\n  color: var(--ion-color-primary-contrast);\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n.forfait-card.selected .title,\n.forfait-card.selected .info-block .description,\n.forfait-card.selected .link {\n  color: inherit;\n}\n.forfait-card .flex-between {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.forfait-card .flex-between .title_price {\n  white-space: nowrap;\n}\n.forfait-card .title {\n  font-weight: bold;\n  margin: 0;\n  font-size: 18px;\n}\n.forfait-card .info-block {\n  margin-top: 10px;\n}\n.forfait-card .info-block .info-item {\n  margin-top: 3px;\n}\n.forfait-card .info-block .info-item:last-child {\n  margin-bottom: 0;\n}\n.forfait-card .info-block .description {\n  font-size: 0.8em;\n  color: #666;\n}\n.forfait-card .link {\n  display: inline-block;\n  margin-top: 10px;\n  cursor: pointer;\n  text-decoration: underline;\n  color: var(--ion-color-dark);\n}\nion-footer ion-toolbar {\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --min-height: auto;\n}\nion-footer ion-toolbar ion-button {\n  margin: 10px;\n}\nion-footer ion-toolbar ion-text {\n  display: block;\n  text-align: center;\n  font-size: 14px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=forfaits.component.css.map */\n"] }]
  }], () => [{ type: ModalController }, { type: ForfaitsWrapperService }, { type: AbonnementWrapperService }, { type: AlertController }, { type: Router }, { type: TranslateService }, { type: LoadingController }, { type: SubscriptionProcessService }, { type: AuthService }, { type: AccountService }], { next: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForfaitListModalComponent, { className: "ForfaitListModalComponent", filePath: "src/app/components/modals/forfaits/forfaits.component.ts", lineNumber: 51 });
})();

export {
  ForfaitListModalComponent
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9jb21wb25lbnRzL21vZGFscy9mb3JmYWl0cy9mb3JmYWl0cy5jb21wb25lbnQudHMiLCAic3JjL2FwcC9jb21wb25lbnRzL21vZGFscy9mb3JmYWl0cy9mb3JmYWl0cy5jb21wb25lbnQuaHRtbCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBlZmZlY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHtcbiAgTW9kYWxDb250cm9sbGVyLFxuICBBbGVydENvbnRyb2xsZXIsXG4gIExvYWRpbmdDb250cm9sbGVyLFxufSBmcm9tICdAaW9uaWMvYW5ndWxhci9zdGFuZGFsb25lJ1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJ1xuaW1wb3J0IHsgSW9uaWNNb2R1bGUgfSBmcm9tICdAaW9uaWMvYW5ndWxhcidcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSwgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnXG5pbXBvcnQgeyBGb3JmYWl0c1dyYXBwZXJTZXJ2aWNlIH0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy9hcGktd3JhcHBlcnMvZm9yZmFpdHMuc2VydmljZSdcbmltcG9ydCB7XG4gIEFib25uZW1lbnRzU3RhdGUsXG4gIEFib25uZW1lbnRXcmFwcGVyU2VydmljZSxcbiAgQ3JlYXRlQWJvbm5lbWVudFBhcmFtcyxcbiAgQ3VycmVudEFib25uZW1lbnRTdGF0ZSxcbn0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy9hcGktd3JhcHBlcnMvYWJvbm5lbWVudC5zZXJ2aWNlJ1xuaW1wb3J0IHsgTGlzdEZvcmZhaXQyMDBSZXNwb25zZUFsbE9mRGF0YUlubmVyIH0gZnJvbSAnc3JjL2FwaS1jeWNsaXN0J1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3JtcydcbmltcG9ydCB7IFN1YnNjcmlwdGlvblByb2Nlc3NTZXJ2aWNlIH0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy91dGlscy9zdWJzY3JpcHRpb24tcHJvY2Vzcy5zZXJ2aWNlJ1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UsIEF1dGhTdGF0ZSB9IGZyb20gJ3NyYy9hcHAvc2VydmljZXMvZXh0ZXJuYWwvYXV0aC5zZXJ2aWNlJ1xuaW1wb3J0IHtcbiAgQWNjb3VudFNlcnZpY2UsXG4gIGN5Y2xpc3RTdGF0ZSxcbn0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy9hcGktd3JhcHBlcnMvYWNjb3VudC5zZXJ2aWNlJ1xuaW1wb3J0IHtcbiAgQXBwU3RhdGUsXG4gIEFwcHN0YXRlU2VydmljZSxcbn0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy9pbnRlcm5hbC9hcHBzdGF0ZS5zZXJ2aWNlJ1xuXG50eXBlIEZvcmZhaXRzU3RhdGUgPVxuICB8IHtcbiAgICAgIHN0YXRlOiAnbG9hZGluZydcbiAgICB9XG4gIHwge1xuICAgICAgc3RhdGU6ICdzdWNjZXNzJ1xuICAgICAgZm9yZmFpdHM6IExpc3RGb3JmYWl0MjAwUmVzcG9uc2VBbGxPZkRhdGFJbm5lcltdXG4gICAgICBzZWxlY3RlZEZvcmZhaXQ/OiBMaXN0Rm9yZmFpdDIwMFJlc3BvbnNlQWxsT2ZEYXRhSW5uZXJcbiAgICB9XG4gIHwge1xuICAgICAgc3RhdGU6ICdlcnJvcidcbiAgICAgIGVycm9yOiBFcnJvclxuICAgIH1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWZvcmZhaXRzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZvcmZhaXRzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZm9yZmFpdHMuY29tcG9uZW50LnNjc3MnXSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSW9uaWNNb2R1bGUsIFRyYW5zbGF0ZU1vZHVsZSwgRm9ybXNNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JmYWl0TGlzdE1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbmV4dDogJ29uYm9hcmRpbmcnIHwgJ21lbnUnID0gJ21lbnUnXG4gIGFib1N0YXRlOiBBYm9ubmVtZW50c1N0YXRlID0geyBzdGF0ZTogJ2xvYWRpbmcnIH1cbiAgY3VycmVudEFib1N0YXRlOiBDdXJyZW50QWJvbm5lbWVudFN0YXRlID0geyBzdGF0ZTogJ3Vua25vd24nIH1cbiAgZm9yZmFpdHNTdGF0ZTogRm9yZmFpdHNTdGF0ZSA9IHsgc3RhdGU6ICdsb2FkaW5nJyB9XG4gIGF1dGhTdGF0ZTogQXV0aFN0YXRlID0geyBzdGF0ZTogJ1NpZ25lZE91dCcgfVxuICBjeWNsaXN0U3RhdGU6IGN5Y2xpc3RTdGF0ZSA9IHtcbiAgICBzdGF0ZTogJ3Vua25vd24nLFxuICAgIGJsb2NrZWRfcmVhc29uczogWydVbmtub3duIGFjY291bnQgc3RhdGUnXSxcbiAgfVxuICBwcm9tb0NvZGU6IHN0cmluZyA9ICcnXG4gIHJlZHVjdGlvbjogc3RyaW5nID0gJydcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIG1vZGFsQ3RybDogTW9kYWxDb250cm9sbGVyLFxuICAgIHB1YmxpYyBmb3JmYWl0c1dyYXBwZXJTZXJ2aWNlOiBGb3JmYWl0c1dyYXBwZXJTZXJ2aWNlLFxuICAgIHB1YmxpYyBBYm9ubmVtZW50V3JhcHBlclNlcnZpY2U6IEFib25uZW1lbnRXcmFwcGVyU2VydmljZSxcbiAgICBwcml2YXRlIGFsZXJ0Q29udHJvbGxlcjogQWxlcnRDb250cm9sbGVyLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBsb2FkaW5nQ3RybDogTG9hZGluZ0NvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSBzdWJzY3JpcHRpb25Qcm9jZXNzOiBTdWJzY3JpcHRpb25Qcm9jZXNzU2VydmljZSxcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwdWJsaWMgYWNjb3VudFNlcnZpY2U6IEFjY291bnRTZXJ2aWNlXG4gICkge1xuICAgIGVmZmVjdCgoKSA9PiB7XG4gICAgICB0aGlzLmFib1N0YXRlID0gdGhpcy5BYm9ubmVtZW50V3JhcHBlclNlcnZpY2UubGlzdEFib25uZW1lbnRzU3RhdGUoKVxuICAgIH0pXG4gICAgZWZmZWN0KCgpID0+IHtcbiAgICAgIHRoaXMuY3VycmVudEFib1N0YXRlID1cbiAgICAgICAgdGhpcy5BYm9ubmVtZW50V3JhcHBlclNlcnZpY2UuY3VycmVudEFib25uZW1lbnRTdGF0ZSgpXG4gICAgfSlcbiAgICBlZmZlY3QoKCkgPT4ge1xuICAgICAgdGhpcy5hdXRoU3RhdGUgPSB0aGlzLmF1dGhTZXJ2aWNlLmF1dGhTdGF0ZSgpXG4gICAgfSlcbiAgICBlZmZlY3QoKCkgPT4ge1xuICAgICAgdGhpcy5jeWNsaXN0U3RhdGUgPSB0aGlzLmFjY291bnRTZXJ2aWNlLmN5Y2xpc3RTdGF0ZSgpXG4gICAgfSlcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZm9yZmFpdHNXcmFwcGVyU2VydmljZS5nZXRGb3JmYWl0cygpLnRoZW4oKGZvcmZhaXRzKSA9PiB7XG4gICAgICBpZiAoZm9yZmFpdHMpIHtcbiAgICAgICAgdGhpcy5mb3JmYWl0c1N0YXRlID0geyBzdGF0ZTogJ3N1Y2Nlc3MnLCBmb3JmYWl0cyB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZvcmZhaXRzU3RhdGUgPSB7XG4gICAgICAgICAgc3RhdGU6ICdlcnJvcicsXG4gICAgICAgICAgZXJyb3I6IG5ldyBFcnJvcignRXJyb3IgbG9hZGluZyBmb3JmYWl0cycpLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBhc3luYyBoYW5kbGVGb3JmYWl0U2VsZWN0aW9uKCkge1xuICAgIGlmIChcbiAgICAgIHRoaXMuZm9yZmFpdHNTdGF0ZS5zdGF0ZSA9PT0gJ3N1Y2Nlc3MnICYmXG4gICAgICB0aGlzLmZvcmZhaXRzU3RhdGUuc2VsZWN0ZWRGb3JmYWl0ICYmXG4gICAgICB0aGlzLmZvcmZhaXRzU3RhdGUuc2VsZWN0ZWRGb3JmYWl0LmlkXG4gICAgKSB7XG4gICAgICBpZiAodGhpcy5uZXh0ID09PSAnb25ib2FyZGluZycpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5zdWJzY3JpcHRpb25Qcm9jZXNzLnN0YXJ0UHJvY2VzcyhcbiAgICAgICAgICB0aGlzLmZvcmZhaXRzU3RhdGUuc2VsZWN0ZWRGb3JmYWl0LFxuICAgICAgICAgIHRoaXMucmVkdWN0aW9uXG4gICAgICAgIClcbiAgICAgICAgdGhpcy5tb2RhbEN0cmwuZGlzbWlzcyh7XG4gICAgICAgICAgZm9yZmFpdDogdGhpcy5mb3JmYWl0c1N0YXRlLnNlbGVjdGVkRm9yZmFpdCxcbiAgICAgICAgICByZWR1Y3Rpb246IHRoaXMucmVkdWN0aW9uLFxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYWxlcnQgPSBhd2FpdCB0aGlzLmFsZXJ0Q29udHJvbGxlci5jcmVhdGUoe1xuICAgICAgICAgIGhlYWRlcjogXCJDb25maXJtZXIgbCdhYm9ubmVtZW50XCIsXG4gICAgICAgICAgbWVzc2FnZTogJ1ZvdWxlei12b3VzIHZyYWltZW50IHNvdXNjcmlyZSDDoCBjZSBmb3JmYWl0ID8nLFxuICAgICAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGV4dDogJ0FubnVsZXInLFxuICAgICAgICAgICAgICByb2xlOiAnY2FuY2VsJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRleHQ6ICdDb25maXJtZXInLFxuICAgICAgICAgICAgICBoYW5kbGVyOiBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgdGhpcy5mb3JmYWl0c1N0YXRlLnN0YXRlID09PSAnc3VjY2VzcycgJiZcbiAgICAgICAgICAgICAgICAgIHRoaXMuZm9yZmFpdHNTdGF0ZS5zZWxlY3RlZEZvcmZhaXRcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc3Vic2NyaXB0aW9uUHJvY2Vzcy5zdGFydFByb2Nlc3MoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9yZmFpdHNTdGF0ZS5zZWxlY3RlZEZvcmZhaXQsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVkdWN0aW9uXG4gICAgICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JmYWl0c1N0YXRlLnNlbGVjdGVkRm9yZmFpdC5zdXBwb3J0aW5nX2RvY3VtZW50cyAmJlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcmZhaXRzU3RhdGUuc2VsZWN0ZWRGb3JmYWl0LnN1cHBvcnRpbmdfZG9jdW1lbnRzXG4gICAgICAgICAgICAgICAgICAgICAgPy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5tb2RhbEN0cmwuZGlzbWlzcygpXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3N1cHBvcnRpbmctZG9jdW1lbnRzJ10pXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXlsb2FkID1cbiAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnN1YnNjcmlwdGlvblByb2Nlc3MuZ2V0Q3JlYXRlQWJvbm5lbWVudFBheWxvYWQoKVxuICAgICAgICAgICAgICAgICAgICBpZiAocGF5bG9hZCkge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlQWJvbm5lbWVudChwYXlsb2FkKVxuICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc3Vic2NyaXB0aW9uUHJvY2Vzcy5jbGVhclByb2Nlc3MoKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gc3Vic2NyaXB0aW9uIHByb2Nlc3MgZm91bmQnKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9KVxuICAgICAgICBhd2FpdCBhbGVydC5wcmVzZW50KClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhc3luYyBjcmVhdGVBYm9ubmVtZW50KHBheWxvYWQ6IENyZWF0ZUFib25uZW1lbnRQYXJhbXMpIHtcbiAgICBjb25zdCBsb2FkaW5nID0gYXdhaXQgdGhpcy5sb2FkaW5nQ3RybC5jcmVhdGUoe1xuICAgICAgbWVzc2FnZTogdGhpcy50cmFuc2xhdGUuaW5zdGFudCgnc3Vic2NyaXB0aW9uLmNyZWF0aW9uLmxvYWRpbmcnKSxcbiAgICB9KVxuICAgIGF3YWl0IGxvYWRpbmcucHJlc2VudCgpXG5cbiAgICB0aGlzLkFib25uZW1lbnRXcmFwcGVyU2VydmljZS5jcmVhdGVBYm9ubmVtZW50KHBheWxvYWQpLmZpbmFsbHkoXG4gICAgICBhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IGxvYWRpbmcuZGlzbWlzcygpXG4gICAgICAgIGF3YWl0IHRoaXMubW9kYWxDdHJsLmRpc21pc3MoKVxuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIHNlbGVjdEZvcmZhaXQoZm9yZmFpdDogTGlzdEZvcmZhaXQyMDBSZXNwb25zZUFsbE9mRGF0YUlubmVyKSB7XG4gICAgaWYgKHRoaXMuZm9yZmFpdHNTdGF0ZS5zdGF0ZSA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICB0aGlzLmZvcmZhaXRzU3RhdGUuc2VsZWN0ZWRGb3JmYWl0ID0gZm9yZmFpdFxuICAgIH1cbiAgfVxufVxuIiwgIjxpb24taGVhZGVyPlxuICA8aW9uLXRpdGxlPnt7XG4gICAgYXV0aFN0YXRlLnN0YXRlID09PSAnU2lnbmVkSW4nXG4gICAgICA/ICgnZm9yZmFpdHMudGl0bGUnIHwgdHJhbnNsYXRlKVxuICAgICAgOiAoJ2ZvcmZhaXRzLnRpdGxlX3VuYXV0aGVudGljYXRlZCcgfCB0cmFuc2xhdGUpXG4gIH19PC9pb24tdGl0bGU+XG4gIDxpb24tYnV0dG9uXG4gICAgY29sb3I9XCJkYXJrXCJcbiAgICBmaWxsPVwiY2xlYXJcIlxuICAgIChjbGljayk9XCJtb2RhbEN0cmwuZGlzbWlzcygpXCJcbiAgICBjbGFzcz1cImVjbC1uby1zaGFkb3cgaW9uLWZsb2F0LXJpZ2h0XCJcbiAgPlxuICAgIHt7ICdnZW5lcmljLmNsb3NlJyB8IHRyYW5zbGF0ZSB9fVxuICA8L2lvbi1idXR0b24+XG48L2lvbi1oZWFkZXI+XG5cbjxpb24tY29udGVudCBjbGFzcz1cImlvbi1wYWRkaW5nXCI+XG4gIEBpZiAoZm9yZmFpdHNTdGF0ZS5zdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG4gIDxkaXYgY2xhc3M9XCJpb24tdGV4dC1jZW50ZXJcIj5cbiAgICA8aW9uLXNwaW5uZXI+PC9pb24tc3Bpbm5lcj5cbiAgICA8cD57eyAnZ2VuZXJpYy5sb2FkaW5nJyB8IHRyYW5zbGF0ZSB9fTwvcD5cbiAgPC9kaXY+XG4gIH0gQGlmIChmb3JmYWl0c1N0YXRlLnN0YXRlID09PSAnZXJyb3InKSB7XG4gIDxpb24tdGV4dCBjb2xvcj1cImRhbmdlclwiPnt7IGZvcmZhaXRzU3RhdGUuZXJyb3IgfX08L2lvbi10ZXh0PlxuICB9IEBpZiAoZm9yZmFpdHNTdGF0ZS5zdGF0ZSA9PT0gJ3N1Y2Nlc3MnKSB7XG4gIDxpb24tZ3JpZD5cbiAgICA8aW9uLXJvdyBjbGFzcz1cImlvbi1qdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICA8aW9uLWNvbCBzaXplPVwiMTJcIiAqbmdGb3I9XCJsZXQgZm9yZmFpdCBvZiBmb3JmYWl0c1N0YXRlLmZvcmZhaXRzXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cImZvcmZhaXQtY2FyZFwiXG4gICAgICAgICAgW2NsYXNzLnNlbGVjdGVkXT1cIlxuICAgICAgICAgICAgZm9yZmFpdHNTdGF0ZS5zdGF0ZSA9PT0gJ3N1Y2Nlc3MnICYmXG4gICAgICAgICAgICBmb3JmYWl0c1N0YXRlLnNlbGVjdGVkRm9yZmFpdCA9PT0gZm9yZmFpdFxuICAgICAgICAgIFwiXG4gICAgICAgICAgKGNsaWNrKT1cInNlbGVjdEZvcmZhaXQoZm9yZmFpdClcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtYmV0d2VlblwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAge3sgZm9yZmFpdC5uYW1lISB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZSB0aXRsZV9wcmljZVwiICpuZ0lmPVwiZm9yZmFpdC5maWNoZT8ucHJpY2VcIj5cbiAgICAgICAgICAgICAge3sgZm9yZmFpdC5maWNoZS5wcmljZSB9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImluZm8tYmxvY2tcIiAqbmdJZj1cImZvcmZhaXQuZmljaGVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLWl0ZW1cIiAqbmdGb3I9XCJsZXQgdGFyaWYgb2YgZm9yZmFpdC5maWNoZS50YXJpZnNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPnt7IHRhcmlmPy50aXRsZSEgfCB0cmFuc2xhdGUgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+e3sgdGFyaWY/LnByaWNlISB8IHRyYW5zbGF0ZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImRlc2NyaXB0aW9uXCIgKm5nSWY9XCJ0YXJpZj8uZGVzY3JpcHRpb25cIj57e1xuICAgICAgICAgICAgICAgIHRhcmlmLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgIH19PC9zbWFsbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwiaW5mby1ibG9ja1wiXG4gICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICBmb3JmYWl0c1N0YXRlLnN0YXRlID09PSAnc3VjY2VzcycgJiZcbiAgICAgICAgICAgICAgZm9yZmFpdHNTdGF0ZS5zZWxlY3RlZEZvcmZhaXQgPT09IGZvcmZhaXQgJiZcbiAgICAgICAgICAgICAgKGZvcmZhaXQuZmljaGU/LmRlc2NyaXB0aW9uIHx8IGZvcmZhaXQuZmljaGU/LmNwdSlcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm8taXRlbVwiICpuZ0lmPVwiZm9yZmFpdC5maWNoZT8uZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiZGVzY3JpcHRpb25cIj57eyBmb3JmYWl0LmZpY2hlLmRlc2NyaXB0aW9uIH19PC9zbWFsbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm8taXRlbVwiICpuZ0lmPVwiZm9yZmFpdC5maWNoZT8uY3B1XCI+XG4gICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImRlc2NyaXB0aW9uXCI+e3sgZm9yZmFpdC5maWNoZS5jcHUgfX08L3NtYWxsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9pb24tY29sPlxuICAgIDwvaW9uLXJvdz5cbiAgPC9pb24tZ3JpZD5cbiAgfVxuPC9pb24tY29udGVudD5cbjxpb24tZm9vdGVyICpuZ0lmPVwiYXV0aFN0YXRlLnN0YXRlID09PSAnU2lnbmVkSW4nXCI+XG4gIDxpb24tdG9vbGJhcj5cbiAgICBAaWYgKCBmb3JmYWl0c1N0YXRlLnN0YXRlID09PSAnc3VjY2VzcycgKSB7IEBpZiAoIGN1cnJlbnRBYm9TdGF0ZS5zdGF0ZSAhPT1cbiAgICAndW5rbm93bicgJiYgY3VycmVudEFib1N0YXRlLnN0YXRlICE9PSAnZGVmYXVsdCcgKSB7XG4gICAgPGRpdiBjbGFzcz1cImlvbi1wYWRkaW5nXCI+XG4gICAgICBAaWYgKGN1cnJlbnRBYm9TdGF0ZS5zdGF0ZSA9PT0gJ2FjdGl2ZScgfHwgY3VycmVudEFib1N0YXRlLnN0YXRlID09PVxuICAgICAgJ3dhaXRpbmdfdmFsaWRhdGlvbicpIHtcbiAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBnYXA6IDEwcHg7IGp1c3RpZnktY29udGVudDogY2VudGVyXCI+XG4gICAgICAgIDxpb24tYnV0dG9uIChjbGljayk9XCJtb2RhbEN0cmwuZGlzbWlzcygpXCIgY29sb3I9XCJkYXJrXCIgZmlsbD1cImNsZWFyXCI+XG4gICAgICAgICAge3sgJ2dlbmVyaWMuY2xvc2UnIHwgdHJhbnNsYXRlIH19XG4gICAgICAgIDwvaW9uLWJ1dHRvbj5cbiAgICAgICAgPGlvbi1idXR0b25cbiAgICAgICAgICBjb2xvcj1cImRhbmdlclwiXG4gICAgICAgICAgKGNsaWNrKT1cIkFib25uZW1lbnRXcmFwcGVyU2VydmljZS5yZXF1ZXN0RGVsZXRpb24oKVwiXG4gICAgICAgID5cbiAgICAgICAgICB7eyAnZm9yZmFpdC5jYW5jZWxfc3Vic2NyaXB0aW9uJyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICA8L2lvbi1idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIH1cbiAgICAgIDxwIGNsYXNzPVwiaW9uLXRleHQtY2VudGVyIGlvbi1uby1tYXJnaW5cIj5cbiAgICAgICAgPHNtYWxsPlxuICAgICAgICAgIEBzd2l0Y2ggKGN1cnJlbnRBYm9TdGF0ZS5zdGF0ZSkgeyBAY2FzZSAoJ2FjdGl2ZScpIHtcbiAgICAgICAgICB7eyAnZm9yZmFpdC5zdGF0dXMuYWN0aXZlX21lc3NhZ2UnIHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgfSBAY2FzZSAoJ2RlbGV0aW9uX3JlcXVlc3RlZCcpIHtcbiAgICAgICAgICB7eyAnZm9yZmFpdC5zdGF0dXMuZGVsZXRpb25fcmVxdWVzdGVkX21lc3NhZ2UnIHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgfSBAY2FzZSAoJ3dhaXRpbmdfdmFsaWRhdGlvbicpIHtcbiAgICAgICAgICB7eyAnZm9yZmFpdC5zdGF0dXMud2FpdGluZ192YWxpZGF0aW9uX21lc3NhZ2UnIHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgfSBAY2FzZSAoJ2luY29tcGxldGUnKSB7XG4gICAgICAgICAge3sgJ2ZvcmZhaXQuc3RhdHVzLmluY29tcGxldGVfbWVzc2FnZScgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgICB9IEBjYXNlICgncGFzdF9kdWUnKSB7XG4gICAgICAgICAge3sgJ2ZvcmZhaXQuc3RhdHVzLnBhc3RfZHVlX21lc3NhZ2UnIHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgfSBAY2FzZSAoJ3VucGFpZCcpIHtcbiAgICAgICAgICB7eyAnZm9yZmFpdC5zdGF0dXMudW5wYWlkX21lc3NhZ2UnIHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgfSBAZGVmYXVsdCB7XG4gICAgICAgICAge3sgJ2ZvcmZhaXQuc3RhdHVzLmRlZmF1bHRfbWVzc2FnZScgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgICB9IH1cbiAgICAgICAgPC9zbWFsbD5cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgICB9IEBlbHNlIHtcbiAgICA8ZGl2IGNsYXNzPVwiaW9uLXBhZGRpbmdcIj5cbiAgICAgIEBpZiAoZm9yZmFpdHNTdGF0ZS5zdGF0ZSA9PT0gJ3N1Y2Nlc3MnICYmIGZvcmZhaXRzU3RhdGUuc2VsZWN0ZWRGb3JmYWl0ICYmXG4gICAgICBuZXh0ICE9PSAnb25ib2FyZGluZycpIHtcbiAgICAgIDxpb24taXRlbSBsaW5lcz1cIm5vbmVcIiBjbGFzcz1cImlvbi1tYXJnaW4tYm90dG9tIGlvbi1tYXJnaW4taG9yaXpvbnRhbFwiPlxuICAgICAgICA8aW9uLWlucHV0XG4gICAgICAgICAgWyhuZ01vZGVsKV09XCJyZWR1Y3Rpb25cIlxuICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCInZm9yZmFpdC5yZWR1Y3Rpb25fY29kZScgfCB0cmFuc2xhdGVcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBmaWxsPVwib3V0bGluZVwiXG4gICAgICAgICAgY2xhc3M9XCJpb24tdGV4dC1jZW50ZXIgaW9uLXBhZGRpbmctaG9yaXpvbnRhbCBpb24tcmFkaXVzLW1lZGl1bVwiXG4gICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgPjwvaW9uLWlucHV0PlxuICAgICAgPC9pb24taXRlbT5cbiAgICAgIH1cbiAgICAgIDxpb24tYnV0dG9uXG4gICAgICAgIGV4cGFuZD1cImJsb2NrXCJcbiAgICAgICAgW2Rpc2FibGVkXT1cIlxuICAgICAgICAgIGZvcmZhaXRzU3RhdGUuc3RhdGUgIT09ICdzdWNjZXNzJyB8fFxuICAgICAgICAgICFmb3JmYWl0c1N0YXRlLnNlbGVjdGVkRm9yZmFpdCB8fFxuICAgICAgICAgIChhY2NvdW50U2VydmljZS5oYXNCbG9ja2VkUmVhc29ucygpICYmIG5leHQgIT09ICdvbmJvYXJkaW5nJylcbiAgICAgICAgXCJcbiAgICAgICAgKGNsaWNrKT1cImhhbmRsZUZvcmZhaXRTZWxlY3Rpb24oKVwiXG4gICAgICA+XG4gICAgICAgIHt7ICdnZW5lcmljLmNob29zZV9wbGFuJyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgPC9pb24tYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIH0gfSBAZWxzZSB7XG4gICAgPGlvbi1za2VsZXRvbi10ZXh0XG4gICAgICBbYW5pbWF0ZWRdPVwidHJ1ZVwiXG4gICAgICBzdHlsZT1cIndpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMHB4XCJcbiAgICA+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICB9XG4gIDwvaW9uLXRvb2xiYXI+XG48L2lvbi1mb290ZXI+XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDa0JFLElBQUEseUJBQUEsR0FBQSxPQUFBLENBQUE7QUFDRSxJQUFBLG9CQUFBLEdBQUEsYUFBQTtBQUNBLElBQUEseUJBQUEsR0FBQSxHQUFBO0FBQUcsSUFBQSxpQkFBQSxDQUFBOztBQUFtQyxJQUFBLHVCQUFBLEVBQUk7OztBQUF2QyxJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLDRCQUFBLHNCQUFBLEdBQUEsR0FBQSxpQkFBQSxDQUFBOzs7OztBQUdMLElBQUEseUJBQUEsR0FBQSxZQUFBLENBQUE7QUFBeUIsSUFBQSxpQkFBQSxDQUFBO0FBQXlCLElBQUEsdUJBQUE7Ozs7QUFBekIsSUFBQSxvQkFBQTtBQUFBLElBQUEsNEJBQUEsT0FBQSxjQUFBLEtBQUE7Ozs7O0FBaUJmLElBQUEseUJBQUEsR0FBQSxPQUFBLEVBQUE7QUFDRSxJQUFBLGlCQUFBLENBQUE7QUFDRixJQUFBLHVCQUFBOzs7O0FBREUsSUFBQSxvQkFBQTtBQUFBLElBQUEsNkJBQUEsS0FBQSxXQUFBLE1BQUEsT0FBQSxHQUFBOzs7OztBQVNBLElBQUEseUJBQUEsR0FBQSxTQUFBLEVBQUE7QUFBc0QsSUFBQSxpQkFBQSxDQUFBO0FBRXBELElBQUEsdUJBQUE7Ozs7QUFGb0QsSUFBQSxvQkFBQTtBQUFBLElBQUEsNEJBQUEsU0FBQSxXQUFBOzs7OztBQUx4RCxJQUFBLHlCQUFBLEdBQUEsT0FBQSxFQUFBLEVBQWtFLEdBQUEsT0FBQSxDQUFBLEVBQ3RDLEdBQUEsTUFBQTtBQUNsQixJQUFBLGlCQUFBLENBQUE7O0FBQStC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
