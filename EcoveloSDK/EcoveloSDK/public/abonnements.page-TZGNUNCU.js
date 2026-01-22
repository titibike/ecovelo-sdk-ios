import {
  AbonnementWrapperService
} from "./chunk-HCOOL2GW.js";
import {
  HeaderComponent
} from "./chunk-AVAJ3QHV.js";
import "./chunk-K2AWDLYV.js";
import "./chunk-Y4K6NO5T.js";
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
  cardOutline,
  close
} from "./chunk-3E6DEK7U.js";
import "./chunk-U6SJAXLK.js";
import {
  CommonModule,
  Component,
  DatePipe,
  FormsModule,
  Input,
  IonButton,
  IonCol,
  IonContent,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonModal2 as IonModal,
  IonProgressBar,
  IonRefresher,
  IonRow,
  IonSkeletonText,
  IonText,
  IonThumbnail,
  NgForOf,
  NgIf,
  TranslateModule,
  TranslatePipe,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
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
import "./chunk-UESUV5PM.js";

// src/app/pages/account/abonnements/components/subscription-item.component.ts
var _c0 = (a0, a1) => ({ start: a0, end: a1 });
var _c1 = (a0) => ({ date: a0 });
function SubscriptionItemComponent_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 7, "subscription_item.date_range", \u0275\u0275pureFunction2(10, _c0, \u0275\u0275pipeBind2(2, 1, ctx_r0.subscription.created * 1e3, "dd/MM/yyyy"), \u0275\u0275pipeBind2(3, 4, ctx_r0.subscription.canceled_at * 1e3, "dd/MM/yyyy"))), " ");
  }
}
function SubscriptionItemComponent_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 4, "subscription_item.since_date", \u0275\u0275pureFunction1(7, _c1, \u0275\u0275pipeBind2(2, 1, ctx_r0.subscription.created * 1e3, "dd/MM/yyyy"))), " ");
  }
}
function SubscriptionItemComponent_Conditional_10_li_5_ion_row_1_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 12);
    \u0275\u0275listener("click", function SubscriptionItemComponent_Conditional_10_li_5_ion_row_1_a_3_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const document_r3 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openImage(document_r3.front_image));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "subscription_item.front_side"), " ");
  }
}
function SubscriptionItemComponent_Conditional_10_li_5_ion_row_1_a_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 13);
    \u0275\u0275listener("click", function SubscriptionItemComponent_Conditional_10_li_5_ion_row_1_a_6_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const document_r3 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openImage(document_r3.back_image));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "subscription_item.back_side"), " ");
  }
}
function SubscriptionItemComponent_Conditional_10_li_5_ion_row_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-row")(1, "ion-text", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, SubscriptionItemComponent_Conditional_10_li_5_ion_row_1_a_3_Template, 3, 3, "a", 9);
    \u0275\u0275elementStart(4, "ion-text", 10);
    \u0275\u0275text(5, "|");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, SubscriptionItemComponent_Conditional_10_li_5_ion_row_1_a_6_Template, 3, 3, "a", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const document_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("-", document_r3.name, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", document_r3.front_image);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", document_r3.back_image);
  }
}
function SubscriptionItemComponent_Conditional_10_li_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275template(1, SubscriptionItemComponent_Conditional_10_li_5_ion_row_1_Template, 7, 3, "ion-row", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const document_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", document_r3.name);
  }
}
function SubscriptionItemComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-row")(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "ul", 6);
    \u0275\u0275template(5, SubscriptionItemComponent_Conditional_10_li_5_Template, 2, 1, "li", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "subscription_item.supporting_documents"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.subscription.supporting_documents);
  }
}
function SubscriptionItemComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-row", 4)(1, "ion-button", 14);
    \u0275\u0275listener("click", function SubscriptionItemComponent_Conditional_11_Template_ion_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.AbonnementWrapperService.requestDeletion());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "subscription_item.terminate"), " ");
  }
}
function SubscriptionItemComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-content", 15)(1, "ion-button", 16);
    \u0275\u0275listener("click", function SubscriptionItemComponent_ng_template_13_Template_ion_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.isModalOpen = false);
    });
    \u0275\u0275element(2, "ion-icon", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "ion-img", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r0.currentImageUrl);
  }
}
var _SubscriptionItemComponent = class _SubscriptionItemComponent {
  constructor(AbonnementWrapperService2) {
    this.AbonnementWrapperService = AbonnementWrapperService2;
    this.isModalOpen = false;
    this.currentImageUrl = "";
    addIcons({ cardOutline, close });
  }
  openImage(imageUrl) {
    this.currentImageUrl = imageUrl;
    this.isModalOpen = true;
  }
};
_SubscriptionItemComponent.\u0275fac = function SubscriptionItemComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SubscriptionItemComponent)(\u0275\u0275directiveInject(AbonnementWrapperService));
};
_SubscriptionItemComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SubscriptionItemComponent, selectors: [["app-subscription-item"]], inputs: { subscription: "subscription" }, decls: 14, vars: 7, consts: [["color", "grey"], [1, "ion-text-wrap"], [1, "ion-justify-content-between"], [4, "ngIf"], [1, "ion-justify-content-end"], [1, "image-modal", 3, "didDismiss", "isOpen"], [1, "ion-no-padding"], [4, "ngFor", "ngForOf"], ["color", "medium"], ["fill", "clear", "class", "ion-margin-horizontal", 3, "click", 4, "ngIf"], ["color", "primary"], ["class", "ion-margin-start", 3, "click", 4, "ngIf"], ["fill", "clear", 1, "ion-margin-horizontal", 3, "click"], [1, "ion-margin-start", 3, "click"], ["color", "danger", "fill", "outline", "size", "small", 3, "click"], [1, "ion-padding"], ["fill", "clear", "color", "dark", 3, "click"], ["name", "close"], [3, "src"]], template: function SubscriptionItemComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item", 0)(1, "ion-label", 1)(2, "ion-row", 2)(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "ion-row", 2);
    \u0275\u0275template(8, SubscriptionItemComponent_p_8_Template, 5, 13, "p", 3)(9, SubscriptionItemComponent_p_9_Template, 4, 9, "p", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, SubscriptionItemComponent_Conditional_10_Template, 6, 4)(11, SubscriptionItemComponent_Conditional_11_Template, 4, 3, "ion-row", 4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "ion-modal", 5);
    \u0275\u0275listener("didDismiss", function SubscriptionItemComponent_Template_ion_modal_didDismiss_12_listener() {
      return ctx.isModalOpen = false;
    });
    \u0275\u0275template(13, SubscriptionItemComponent_ng_template_13_Template, 4, 1, "ng-template");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx.subscription.forfait == null ? null : ctx.subscription.forfait.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx.subscription.amount / 100, "\u20AC");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.subscription.canceled_at);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.subscription.canceled_at);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.subscription.supporting_documents.length > 0 ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.subscription.status === "active" || ctx.subscription.status === "waiting_validation" ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("isOpen", ctx.isModalOpen);
  }
}, dependencies: [
  IonItem,
  IonIcon,
  IonLabel,
  IonText,
  CommonModule,
  NgForOf,
  NgIf,
  DatePipe,
  IonButton,
  TranslateModule,
  TranslatePipe,
  IonRow,
  IonModal,
  IonContent,
  IonImg
], styles: ["\n\nion-modal[_ngcontent-%COMP%] {\n  --height: 50%;\n  --border-radius: 16px;\n  --box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n}\nion-modal[_ngcontent-%COMP%]::part(backdrop) {\n  background: rgb(209, 213, 219);\n  opacity: 1;\n}\nion-img[_ngcontent-%COMP%]::part(image) {\n  aspect-ratio: 4/3;\n  width: 100%;\n  object-fit: contain;\n}\n/*# sourceMappingURL=subscription-item.component.css.map */"] });
var SubscriptionItemComponent = _SubscriptionItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SubscriptionItemComponent, [{
    type: Component,
    args: [{ selector: "app-subscription-item", imports: [
      IonItem,
      IonIcon,
      IonLabel,
      IonText,
      CommonModule,
      IonButton,
      DatePipe,
      TranslateModule,
      IonRow,
      IonModal,
      IonContent,
      IonImg
    ], template: `
    <ion-item color="grey">
      <ion-label class="ion-text-wrap">
        <ion-row class="ion-justify-content-between">
          <strong>{{ subscription.forfait?.name }}</strong>
          <p>{{ subscription.amount! / 100 }}\u20AC</p>
        </ion-row>
        <ion-row class="ion-justify-content-between">
          <p *ngIf="subscription.canceled_at">
            {{
              'subscription_item.date_range'
                | translate
                  : {
                      start: subscription.created! * 1000 | date : 'dd/MM/yyyy',
                      end:
                        subscription.canceled_at! * 1000 | date : 'dd/MM/yyyy'
                    }
            }}
          </p>
          <p *ngIf="!subscription.canceled_at">
            {{
              'subscription_item.since_date'
                | translate
                  : {
                      date: subscription.created! * 1000 | date : 'dd/MM/yyyy'
                    }
            }}
          </p>
        </ion-row>
        @if(subscription.supporting_documents!.length > 0) {
        <ion-row>
          <p>{{ 'subscription_item.supporting_documents' | translate }}:</p>
        </ion-row>
        <ul class="ion-no-padding">
          <li *ngFor="let document of subscription.supporting_documents">
            <ion-row *ngIf="document.name">
              <ion-text color="medium">-{{ document.name }}</ion-text>
              <a
                fill="clear"
                (click)="openImage(document.front_image)"
                *ngIf="document.front_image"
                class="ion-margin-horizontal"
              >
                {{ 'subscription_item.front_side' | translate }}
              </a>
              <ion-text color="primary">|</ion-text>
              <a
                (click)="openImage(document.back_image)"
                *ngIf="document.back_image"
                class="ion-margin-start"
              >
                {{ 'subscription_item.back_side' | translate }}
              </a>
            </ion-row>
          </li>
        </ul>

        } @if(subscription.status === 'active' || subscription.status ===
        'waiting_validation') {
        <ion-row class="ion-justify-content-end">
          <ion-button
            color="danger"
            fill="outline"
            size="small"
            (click)="AbonnementWrapperService.requestDeletion()"
          >
            {{ 'subscription_item.terminate' | translate }}
          </ion-button>
        </ion-row>
        }
      </ion-label>
    </ion-item>
    <ion-modal
      [isOpen]="isModalOpen"
      (didDismiss)="isModalOpen = false"
      class="image-modal"
    >
      <ng-template>
        <ion-content class="ion-padding">
          <ion-button (click)="isModalOpen = false" fill="clear" color="dark">
            <ion-icon name="close"></ion-icon>
          </ion-button>
          <ion-img [src]="currentImageUrl" />
        </ion-content>
      </ng-template>
    </ion-modal>
  `, styles: ["/* angular:styles/component:scss;f05f0ce23f523367ab997049237f56014e6a40dfd35222bc1c5fe39e4a55ef84;/Users/enzo/Desktop/DEV/JAVASCRIPT/Nouvelle-app/FINAL/appli-usager-v3/src/app/pages/account/abonnements/components/subscription-item.component.ts */\nion-modal {\n  --height: 50%;\n  --border-radius: 16px;\n  --box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n}\nion-modal::part(backdrop) {\n  background: rgb(209, 213, 219);\n  opacity: 1;\n}\nion-img::part(image) {\n  aspect-ratio: 4/3;\n  width: 100%;\n  object-fit: contain;\n}\n/*# sourceMappingURL=subscription-item.component.css.map */\n"] }]
  }], () => [{ type: AbonnementWrapperService }], { subscription: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SubscriptionItemComponent, { className: "SubscriptionItemComponent", filePath: "src/app/pages/account/abonnements/components/subscription-item.component.ts", lineNumber: 150 });
})();

// src/app/pages/account/abonnements/abonnements.page.ts
var _c02 = () => [];
var _forTrack0 = ($index, $item) => $item.id;
function AbonnementsPage_Conditional_5_ion_item_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item")(1, "ion-thumbnail", 7);
    \u0275\u0275element(2, "ion-skeleton-text", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-label")(4, "h3");
    \u0275\u0275element(5, "ion-skeleton-text", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275element(7, "ion-skeleton-text", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275element(9, "ion-skeleton-text", 11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("animated", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("animated", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("animated", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("animated", true);
  }
}
function AbonnementsPage_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-progress-bar", 5);
    \u0275\u0275elementStart(1, "ion-list");
    \u0275\u0275template(2, AbonnementsPage_Conditional_5_ion_item_2_Template, 10, 4, "ion-item", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c02).constructor(ctx_r0.skeletonCount));
  }
}
function AbonnementsPage_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 12);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "abonnements.error.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, "abonnements.error.loading"));
  }
}
function AbonnementsPage_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "abonnements.no_subscription.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, "abonnements.no_subscription.message"));
  }
}
function AbonnementsPage_Conditional_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-list", 14);
    \u0275\u0275element(4, "app-subscription-item", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, ctx_r0.getCurrentSubscription().status === "waiting_validation" ? "abonnements.pending_subscription" : "abonnements.active_subscription"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance();
    \u0275\u0275property("subscription", ctx_r0.getCurrentSubscription());
  }
}
function AbonnementsPage_Conditional_8_Conditional_1_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-subscription-item", 15);
  }
  if (rf & 2) {
    const subscription_r2 = ctx.$implicit;
    \u0275\u0275property("subscription", subscription_r2);
  }
}
function AbonnementsPage_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-list", 14);
    \u0275\u0275repeaterCreate(4, AbonnementsPage_Conditional_8_Conditional_1_For_5_Template, 1, 1, "app-subscription-item", 15, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "abonnements.previous_subscriptions"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("inset", true);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.getPreviousSubscriptions());
  }
}
function AbonnementsPage_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AbonnementsPage_Conditional_8_Conditional_0_Template, 5, 5)(1, AbonnementsPage_Conditional_8_Conditional_1_Template, 6, 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.getCurrentSubscription() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.getPreviousSubscriptions().length ? 1 : -1);
  }
}
var _AbonnementsPage = class _AbonnementsPage {
  constructor(abonnementService) {
    this.abonnementService = abonnementService;
    this.skeletonCount = 5;
    this.abonnementState = { state: "loading" };
    effect(() => {
      this.abonnementState = this.abonnementService.listAbonnementsState();
    });
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
    return new Promise((resolve) => {
      this.abonnementService.getAbonnements();
      resolve();
    });
  }
  getCurrentSubscription() {
    const currentAbonnement = this.abonnementService.currentAbonnementState();
    if (currentAbonnement.state !== "unknown" && currentAbonnement.state !== "default") {
      return currentAbonnement.abonnement;
    }
    return null;
  }
  getPreviousSubscriptions() {
    return this.abonnementState.state === "success" ? this.abonnementState.abonnements.filter((abo) => abo.status === "canceled") : [];
  }
};
_AbonnementsPage.\u0275fac = function AbonnementsPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AbonnementsPage)(\u0275\u0275directiveInject(AbonnementWrapperService));
};
_AbonnementsPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AbonnementsPage, selectors: [["app-abonnements"]], decls: 9, vars: 2, consts: [[3, "defaultHref"], [1, "ion-padding"], [1, "ion-justify-content-center"], ["size", "12", "size-md", "8", "size-lg", "6"], ["slot", "fixed", 3, "ionRefresh"], ["type", "indeterminate"], [4, "ngFor", "ngForOf"], ["slot", "start"], [3, "animated"], [2, "width", "80%", 3, "animated"], [2, "width", "60%", 3, "animated"], [2, "width", "30%", 3, "animated"], [1, "ion-margin"], [1, "ion-margin-horizontal", "ion-margin-top"], ["mode", "ios", 3, "inset"], [3, "subscription"]], template: function AbonnementsPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-header", 0);
    \u0275\u0275elementStart(1, "ion-content", 1)(2, "ion-row", 2)(3, "ion-col", 3)(4, "ion-refresher", 4);
    \u0275\u0275listener("ionRefresh", function AbonnementsPage_Template_ion_refresher_ionRefresh_4_listener($event) {
      return ctx.handleRefresh($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AbonnementsPage_Conditional_5_Template, 3, 2)(6, AbonnementsPage_Conditional_6_Template, 6, 6)(7, AbonnementsPage_Conditional_7_Template, 6, 6)(8, AbonnementsPage_Conditional_8_Template, 2, 2);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("defaultHref", "/account");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.abonnementState.state === "loading" ? 5 : ctx.abonnementState.state === "error" ? 6 : ctx.abonnementState.state === "no_data" ? 7 : ctx.abonnementState.state === "success" ? 8 : -1);
  }
}, dependencies: [
  CommonModule,
  NgForOf,
  FormsModule,
  HeaderComponent,
  TranslateModule,
  TranslatePipe,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonSkeletonText,
  IonThumbnail,
  IonRow,
  IonCol,
  IonProgressBar,
  IonRefresher,
  SubscriptionItemComponent
], encapsulation: 2 });
var AbonnementsPage = _AbonnementsPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbonnementsPage, [{
    type: Component,
    args: [{ selector: "app-abonnements", imports: [
      CommonModule,
      FormsModule,
      HeaderComponent,
      TranslateModule,
      IonContent,
      IonList,
      IonItem,
      IonLabel,
      IonSkeletonText,
      IonThumbnail,
      IonRow,
      IonCol,
      IonProgressBar,
      IonRefresher,
      SubscriptionItemComponent
    ], template: `<app-header [defaultHref]="'/account'"></app-header>

<ion-content class="ion-padding">
  <ion-row class="ion-justify-content-center">
    <ion-col size="12" size-md="8" size-lg="6">
      <ion-refresher slot="fixed" (ionRefresh)="handleRefresh($event)">
      </ion-refresher>

      @if(abonnementState.state === 'loading'){
      <ion-progress-bar type="indeterminate"></ion-progress-bar>
      <ion-list>
        <ion-item *ngFor="let i of [].constructor(skeletonCount)">
          <ion-thumbnail slot="start">
            <ion-skeleton-text [animated]="true"></ion-skeleton-text>
          </ion-thumbnail>
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
      } @else if(abonnementState.state === 'error'){
      <h1>{{ 'abonnements.error.title' | translate }}</h1>
      <p class="ion-margin">{{ 'abonnements.error.loading' | translate }}</p>
      } @else if(abonnementState.state === 'no_data'){
      <h1>{{ 'abonnements.no_subscription.title' | translate }}</h1>
      <p>{{ 'abonnements.no_subscription.message' | translate }}</p>
      } @else if(abonnementState.state === 'success'){
      @if(getCurrentSubscription()){
      <h4 class="ion-margin-horizontal ion-margin-top">
        {{ (getCurrentSubscription()!.status === 'waiting_validation' ?
        'abonnements.pending_subscription' : 'abonnements.active_subscription')
        | translate }}
      </h4>
      <ion-list [inset]="true" mode="ios">
        <app-subscription-item [subscription]="getCurrentSubscription()!">
        </app-subscription-item>
      </ion-list>
      } @if(getPreviousSubscriptions().length) {
      <h4 class="ion-margin-horizontal ion-margin-top">
        {{ 'abonnements.previous_subscriptions' | translate }}
      </h4>
      <ion-list [inset]="true" mode="ios">
        @for(subscription of getPreviousSubscriptions(); track subscription.id){
        <app-subscription-item [subscription]="subscription">
        </app-subscription-item>
        }
      </ion-list>
      } }
    </ion-col>
  </ion-row>
</ion-content>
` }]
  }], () => [{ type: AbonnementWrapperService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AbonnementsPage, { className: "AbonnementsPage", filePath: "src/app/pages/account/abonnements/abonnements.page.ts", lineNumber: 56 });
})();
export {
  AbonnementsPage
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wYWdlcy9hY2NvdW50L2Fib25uZW1lbnRzL2NvbXBvbmVudHMvc3Vic2NyaXB0aW9uLWl0ZW0uY29tcG9uZW50LnRzIiwgInNyYy9hcHAvcGFnZXMvYWNjb3VudC9hYm9ubmVtZW50cy9hYm9ubmVtZW50cy5wYWdlLnRzIiwgInNyYy9hcHAvcGFnZXMvYWNjb3VudC9hYm9ubmVtZW50cy9hYm9ubmVtZW50cy5wYWdlLmh0bWwiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgTGlzdEFib25uZW1lbnQyMDBSZXNwb25zZUFsbE9mRGF0YUlubmVyIH0gZnJvbSAnc3JjL2FwaS1jeWNsaXN0J1xuaW1wb3J0IHtcbiAgSW9uSXRlbSxcbiAgSW9uSWNvbixcbiAgSW9uTGFiZWwsXG4gIElvblRleHQsXG4gIElvbkJhZGdlLFxuICBJb25CdXR0b24sXG4gIElvblJvdyxcbiAgSW9uTW9kYWwsXG4gIElvbkhlYWRlcixcbiAgSW9uVG9vbGJhcixcbiAgSW9uVGl0bGUsXG4gIElvbkNvbnRlbnQsXG4gIElvbkJ1dHRvbnMsXG4gIElvbkltZyxcbn0gZnJvbSAnQGlvbmljL2FuZ3VsYXIvc3RhbmRhbG9uZSdcbmltcG9ydCB7IENvbW1vbk1vZHVsZSwgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nXG5pbXBvcnQgeyBhZGRJY29ucyB9IGZyb20gJ2lvbmljb25zJ1xuaW1wb3J0IHsgY2FyZE91dGxpbmUsIGNsb3NlIH0gZnJvbSAnaW9uaWNvbnMvaWNvbnMnXG5pbXBvcnQgeyBBYm9ubmVtZW50V3JhcHBlclNlcnZpY2UgfSBmcm9tICdzcmMvYXBwL3NlcnZpY2VzL2FwaS13cmFwcGVycy9hYm9ubmVtZW50LnNlcnZpY2UnXG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJ1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc3Vic2NyaXB0aW9uLWl0ZW0nLFxuICBpbXBvcnRzOiBbXG4gICAgSW9uSXRlbSxcbiAgICBJb25JY29uLFxuICAgIElvbkxhYmVsLFxuICAgIElvblRleHQsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIElvbkJ1dHRvbixcbiAgICBEYXRlUGlwZSxcbiAgICBUcmFuc2xhdGVNb2R1bGUsXG4gICAgSW9uUm93LFxuICAgIElvbk1vZGFsLFxuICAgIElvbkNvbnRlbnQsXG4gICAgSW9uSW1nLFxuICBdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxpb24taXRlbSBjb2xvcj1cImdyZXlcIj5cbiAgICAgIDxpb24tbGFiZWwgY2xhc3M9XCJpb24tdGV4dC13cmFwXCI+XG4gICAgICAgIDxpb24tcm93IGNsYXNzPVwiaW9uLWp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgPHN0cm9uZz57eyBzdWJzY3JpcHRpb24uZm9yZmFpdD8ubmFtZSB9fTwvc3Ryb25nPlxuICAgICAgICAgIDxwPnt7IHN1YnNjcmlwdGlvbi5hbW91bnQhIC8gMTAwIH194oKsPC9wPlxuICAgICAgICA8L2lvbi1yb3c+XG4gICAgICAgIDxpb24tcm93IGNsYXNzPVwiaW9uLWp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgPHAgKm5nSWY9XCJzdWJzY3JpcHRpb24uY2FuY2VsZWRfYXRcIj5cbiAgICAgICAgICAgIHt7XG4gICAgICAgICAgICAgICdzdWJzY3JpcHRpb25faXRlbS5kYXRlX3JhbmdlJ1xuICAgICAgICAgICAgICAgIHwgdHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGFydDogc3Vic2NyaXB0aW9uLmNyZWF0ZWQhICogMTAwMCB8IGRhdGUgOiAnZGQvTU0veXl5eScsXG4gICAgICAgICAgICAgICAgICAgICAgZW5kOlxuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLmNhbmNlbGVkX2F0ISAqIDEwMDAgfCBkYXRlIDogJ2RkL01NL3l5eXknXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwICpuZ0lmPVwiIXN1YnNjcmlwdGlvbi5jYW5jZWxlZF9hdFwiPlxuICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgJ3N1YnNjcmlwdGlvbl9pdGVtLnNpbmNlX2RhdGUnXG4gICAgICAgICAgICAgICAgfCB0cmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IHN1YnNjcmlwdGlvbi5jcmVhdGVkISAqIDEwMDAgfCBkYXRlIDogJ2RkL01NL3l5eXknXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2lvbi1yb3c+XG4gICAgICAgIEBpZihzdWJzY3JpcHRpb24uc3VwcG9ydGluZ19kb2N1bWVudHMhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgPGlvbi1yb3c+XG4gICAgICAgICAgPHA+e3sgJ3N1YnNjcmlwdGlvbl9pdGVtLnN1cHBvcnRpbmdfZG9jdW1lbnRzJyB8IHRyYW5zbGF0ZSB9fTo8L3A+XG4gICAgICAgIDwvaW9uLXJvdz5cbiAgICAgICAgPHVsIGNsYXNzPVwiaW9uLW5vLXBhZGRpbmdcIj5cbiAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGRvY3VtZW50IG9mIHN1YnNjcmlwdGlvbi5zdXBwb3J0aW5nX2RvY3VtZW50c1wiPlxuICAgICAgICAgICAgPGlvbi1yb3cgKm5nSWY9XCJkb2N1bWVudC5uYW1lXCI+XG4gICAgICAgICAgICAgIDxpb24tdGV4dCBjb2xvcj1cIm1lZGl1bVwiPi17eyBkb2N1bWVudC5uYW1lIH19PC9pb24tdGV4dD5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBmaWxsPVwiY2xlYXJcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJvcGVuSW1hZ2UoZG9jdW1lbnQuZnJvbnRfaW1hZ2UpXCJcbiAgICAgICAgICAgICAgICAqbmdJZj1cImRvY3VtZW50LmZyb250X2ltYWdlXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImlvbi1tYXJnaW4taG9yaXpvbnRhbFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7eyAnc3Vic2NyaXB0aW9uX2l0ZW0uZnJvbnRfc2lkZScgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8aW9uLXRleHQgY29sb3I9XCJwcmltYXJ5XCI+fDwvaW9uLXRleHQ+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9wZW5JbWFnZShkb2N1bWVudC5iYWNrX2ltYWdlKVwiXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJkb2N1bWVudC5iYWNrX2ltYWdlXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImlvbi1tYXJnaW4tc3RhcnRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3sgJ3N1YnNjcmlwdGlvbl9pdGVtLmJhY2tfc2lkZScgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9pb24tcm93PlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG5cbiAgICAgICAgfSBAaWYoc3Vic2NyaXB0aW9uLnN0YXR1cyA9PT0gJ2FjdGl2ZScgfHwgc3Vic2NyaXB0aW9uLnN0YXR1cyA9PT1cbiAgICAgICAgJ3dhaXRpbmdfdmFsaWRhdGlvbicpIHtcbiAgICAgICAgPGlvbi1yb3cgY2xhc3M9XCJpb24tanVzdGlmeS1jb250ZW50LWVuZFwiPlxuICAgICAgICAgIDxpb24tYnV0dG9uXG4gICAgICAgICAgICBjb2xvcj1cImRhbmdlclwiXG4gICAgICAgICAgICBmaWxsPVwib3V0bGluZVwiXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgKGNsaWNrKT1cIkFib25uZW1lbnRXcmFwcGVyU2VydmljZS5yZXF1ZXN0RGVsZXRpb24oKVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3sgJ3N1YnNjcmlwdGlvbl9pdGVtLnRlcm1pbmF0ZScgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgICA8L2lvbi1idXR0b24+XG4gICAgICAgIDwvaW9uLXJvdz5cbiAgICAgICAgfVxuICAgICAgPC9pb24tbGFiZWw+XG4gICAgPC9pb24taXRlbT5cbiAgICA8aW9uLW1vZGFsXG4gICAgICBbaXNPcGVuXT1cImlzTW9kYWxPcGVuXCJcbiAgICAgIChkaWREaXNtaXNzKT1cImlzTW9kYWxPcGVuID0gZmFsc2VcIlxuICAgICAgY2xhc3M9XCJpbWFnZS1tb2RhbFwiXG4gICAgPlxuICAgICAgPG5nLXRlbXBsYXRlPlxuICAgICAgICA8aW9uLWNvbnRlbnQgY2xhc3M9XCJpb24tcGFkZGluZ1wiPlxuICAgICAgICAgIDxpb24tYnV0dG9uIChjbGljayk9XCJpc01vZGFsT3BlbiA9IGZhbHNlXCIgZmlsbD1cImNsZWFyXCIgY29sb3I9XCJkYXJrXCI+XG4gICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImNsb3NlXCI+PC9pb24taWNvbj5cbiAgICAgICAgICA8L2lvbi1idXR0b24+XG4gICAgICAgICAgPGlvbi1pbWcgW3NyY109XCJjdXJyZW50SW1hZ2VVcmxcIiAvPlxuICAgICAgICA8L2lvbi1jb250ZW50PlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8L2lvbi1tb2RhbD5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgaW9uLW1vZGFsIHtcbiAgICAgICAgLS1oZWlnaHQ6IDUwJTtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgICAtLWJveC1zaGFkb3c6IDAgMTBweCAxNXB4IC0zcHggcmdiKDAgMCAwIC8gMC4xKSxcbiAgICAgICAgICAwIDRweCA2cHggLTRweCByZ2IoMCAwIDAgLyAwLjEpO1xuICAgICAgfVxuXG4gICAgICBpb24tbW9kYWw6OnBhcnQoYmFja2Ryb3ApIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMDksIDIxMywgMjE5KTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cblxuICAgICAgaW9uLWltZzo6cGFydChpbWFnZSkge1xuICAgICAgICBhc3BlY3QtcmF0aW86IDQvMztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICB9XG4gICAgYCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU3Vic2NyaXB0aW9uSXRlbUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHN1YnNjcmlwdGlvbiE6IExpc3RBYm9ubmVtZW50MjAwUmVzcG9uc2VBbGxPZkRhdGFJbm5lclxuICBpc01vZGFsT3BlbiA9IGZhbHNlXG4gIGN1cnJlbnRJbWFnZVVybCA9ICcnXG5cbiAgY29uc3RydWN0b3IocHVibGljIEFib25uZW1lbnRXcmFwcGVyU2VydmljZTogQWJvbm5lbWVudFdyYXBwZXJTZXJ2aWNlKSB7XG4gICAgYWRkSWNvbnMoeyBjYXJkT3V0bGluZSwgY2xvc2UgfSlcbiAgfVxuXG4gIG9wZW5JbWFnZShpbWFnZVVybDogc3RyaW5nKSB7XG4gICAgdGhpcy5jdXJyZW50SW1hZ2VVcmwgPSBpbWFnZVVybFxuICAgIHRoaXMuaXNNb2RhbE9wZW4gPSB0cnVlXG4gIH1cbn1cbiIsICJpbXBvcnQgeyBDb21wb25lbnQsIGVmZmVjdCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbidcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnXG5pbXBvcnQge1xuICBJb25Db250ZW50LFxuICBJb25IZWFkZXIsXG4gIElvblRpdGxlLFxuICBJb25Ub29sYmFyLFxuICBJb25MaXN0LFxuICBJb25JdGVtLFxuICBJb25MYWJlbCxcbiAgSW9uVGV4dCxcbiAgSW9uSWNvbixcbiAgSW9uTm90ZSxcbiAgSW9uQmFkZ2UsXG4gIElvblJvdyxcbiAgSW9uQ29sLFxuICBJb25JdGVtR3JvdXAsXG4gIElvbkl0ZW1EaXZpZGVyLFxuICBJb25Qcm9ncmVzc0JhcixcbiAgSW9uUmVmcmVzaGVyLFxuICBJb25CdXR0b24sXG4gIElvblNrZWxldG9uVGV4dCxcbiAgSW9uVGh1bWJuYWlsLFxufSBmcm9tICdAaW9uaWMvYW5ndWxhci9zdGFuZGFsb25lJ1xuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnc3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50J1xuaW1wb3J0IHtcbiAgQWJvbm5lbWVudHNTdGF0ZSxcbiAgQWJvbm5lbWVudFdyYXBwZXJTZXJ2aWNlLFxufSBmcm9tICdzcmMvYXBwL3NlcnZpY2VzL2FwaS13cmFwcGVycy9hYm9ubmVtZW50LnNlcnZpY2UnXG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJ1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zdWJzY3JpcHRpb24taXRlbS5jb21wb25lbnQnXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1hYm9ubmVtZW50cycsXG4gIHRlbXBsYXRlVXJsOiAnLi9hYm9ubmVtZW50cy5wYWdlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hYm9ubmVtZW50cy5wYWdlLnNjc3MnXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBIZWFkZXJDb21wb25lbnQsXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICAgIElvbkNvbnRlbnQsXG4gICAgSW9uTGlzdCxcbiAgICBJb25JdGVtLFxuICAgIElvbkxhYmVsLFxuICAgIElvblNrZWxldG9uVGV4dCxcbiAgICBJb25UaHVtYm5haWwsXG4gICAgSW9uUm93LFxuICAgIElvbkNvbCxcbiAgICBJb25Qcm9ncmVzc0JhcixcbiAgICBJb25SZWZyZXNoZXIsXG4gICAgU3Vic2NyaXB0aW9uSXRlbUNvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQWJvbm5lbWVudHNQYWdlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgcmVhZG9ubHkgc2tlbGV0b25Db3VudCA9IDVcbiAgYWJvbm5lbWVudFN0YXRlOiBBYm9ubmVtZW50c1N0YXRlID0geyBzdGF0ZTogJ2xvYWRpbmcnIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgYWJvbm5lbWVudFNlcnZpY2U6IEFib25uZW1lbnRXcmFwcGVyU2VydmljZSkge1xuICAgIGVmZmVjdCgoKSA9PiB7XG4gICAgICB0aGlzLmFib25uZW1lbnRTdGF0ZSA9IHRoaXMuYWJvbm5lbWVudFNlcnZpY2UubGlzdEFib25uZW1lbnRzU3RhdGUoKVxuICAgIH0pXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlZnJlc2goKVxuICB9XG5cbiAgaGFuZGxlUmVmcmVzaChldmVudDogYW55KSB7XG4gICAgdGhpcy5yZWZyZXNoKCkudGhlbigoKSA9PiB7XG4gICAgICBldmVudC50YXJnZXQuY29tcGxldGUoKVxuICAgIH0pXG4gIH1cblxuICByZWZyZXNoKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xuICAgICAgdGhpcy5hYm9ubmVtZW50U2VydmljZS5nZXRBYm9ubmVtZW50cygpXG4gICAgICByZXNvbHZlKClcbiAgICB9KVxuICB9XG5cbiAgZ2V0Q3VycmVudFN1YnNjcmlwdGlvbigpIHtcbiAgICBjb25zdCBjdXJyZW50QWJvbm5lbWVudCA9IHRoaXMuYWJvbm5lbWVudFNlcnZpY2UuY3VycmVudEFib25uZW1lbnRTdGF0ZSgpXG4gICAgaWYgKFxuICAgICAgY3VycmVudEFib25uZW1lbnQuc3RhdGUgIT09ICd1bmtub3duJyAmJlxuICAgICAgY3VycmVudEFib25uZW1lbnQuc3RhdGUgIT09ICdkZWZhdWx0J1xuICAgICkge1xuICAgICAgcmV0dXJuIGN1cnJlbnRBYm9ubmVtZW50LmFib25uZW1lbnRcbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGdldFByZXZpb3VzU3Vic2NyaXB0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5hYm9ubmVtZW50U3RhdGUuc3RhdGUgPT09ICdzdWNjZXNzJ1xuICAgICAgPyB0aGlzLmFib25uZW1lbnRTdGF0ZS5hYm9ubmVtZW50cy5maWx0ZXIoXG4gICAgICAgICAgKGFibykgPT4gYWJvLnN0YXR1cyA9PT0gJ2NhbmNlbGVkJ1xuICAgICAgICApXG4gICAgICA6IFtdXG4gIH1cbn1cbiIsICI8YXBwLWhlYWRlciBbZGVmYXVsdEhyZWZdPVwiJy9hY2NvdW50J1wiPjwvYXBwLWhlYWRlcj5cblxuPGlvbi1jb250ZW50IGNsYXNzPVwiaW9uLXBhZGRpbmdcIj5cbiAgPGlvbi1yb3cgY2xhc3M9XCJpb24tanVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgIDxpb24tY29sIHNpemU9XCIxMlwiIHNpemUtbWQ9XCI4XCIgc2l6ZS1sZz1cIjZcIj5cbiAgICAgIDxpb24tcmVmcmVzaGVyIHNsb3Q9XCJmaXhlZFwiIChpb25SZWZyZXNoKT1cImhhbmRsZVJlZnJlc2goJGV2ZW50KVwiPlxuICAgICAgPC9pb24tcmVmcmVzaGVyPlxuXG4gICAgICBAaWYoYWJvbm5lbWVudFN0YXRlLnN0YXRlID09PSAnbG9hZGluZycpe1xuICAgICAgPGlvbi1wcm9ncmVzcy1iYXIgdHlwZT1cImluZGV0ZXJtaW5hdGVcIj48L2lvbi1wcm9ncmVzcy1iYXI+XG4gICAgICA8aW9uLWxpc3Q+XG4gICAgICAgIDxpb24taXRlbSAqbmdGb3I9XCJsZXQgaSBvZiBbXS5jb25zdHJ1Y3Rvcihza2VsZXRvbkNvdW50KVwiPlxuICAgICAgICAgIDxpb24tdGh1bWJuYWlsIHNsb3Q9XCJzdGFydFwiPlxuICAgICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0IFthbmltYXRlZF09XCJ0cnVlXCI+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgICA8L2lvbi10aHVtYm5haWw+XG4gICAgICAgICAgPGlvbi1sYWJlbD5cbiAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0XG4gICAgICAgICAgICAgICAgW2FuaW1hdGVkXT1cInRydWVcIlxuICAgICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDgwJVwiXG4gICAgICAgICAgICAgID48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHRcbiAgICAgICAgICAgICAgICBbYW5pbWF0ZWRdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogNjAlXCJcbiAgICAgICAgICAgICAgPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0XG4gICAgICAgICAgICAgICAgW2FuaW1hdGVkXT1cInRydWVcIlxuICAgICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDMwJVwiXG4gICAgICAgICAgICAgID48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgPC9pb24tbGlzdD5cbiAgICAgIH0gQGVsc2UgaWYoYWJvbm5lbWVudFN0YXRlLnN0YXRlID09PSAnZXJyb3InKXtcbiAgICAgIDxoMT57eyAnYWJvbm5lbWVudHMuZXJyb3IudGl0bGUnIHwgdHJhbnNsYXRlIH19PC9oMT5cbiAgICAgIDxwIGNsYXNzPVwiaW9uLW1hcmdpblwiPnt7ICdhYm9ubmVtZW50cy5lcnJvci5sb2FkaW5nJyB8IHRyYW5zbGF0ZSB9fTwvcD5cbiAgICAgIH0gQGVsc2UgaWYoYWJvbm5lbWVudFN0YXRlLnN0YXRlID09PSAnbm9fZGF0YScpe1xuICAgICAgPGgxPnt7ICdhYm9ubmVtZW50cy5ub19zdWJzY3JpcHRpb24udGl0bGUnIHwgdHJhbnNsYXRlIH19PC9oMT5cbiAgICAgIDxwPnt7ICdhYm9ubmVtZW50cy5ub19zdWJzY3JpcHRpb24ubWVzc2FnZScgfCB0cmFuc2xhdGUgfX08L3A+XG4gICAgICB9IEBlbHNlIGlmKGFib25uZW1lbnRTdGF0ZS5zdGF0ZSA9PT0gJ3N1Y2Nlc3MnKXtcbiAgICAgIEBpZihnZXRDdXJyZW50U3Vic2NyaXB0aW9uKCkpe1xuICAgICAgPGg0IGNsYXNzPVwiaW9uLW1hcmdpbi1ob3Jpem9udGFsIGlvbi1tYXJnaW4tdG9wXCI+XG4gICAgICAgIHt7IChnZXRDdXJyZW50U3Vic2NyaXB0aW9uKCkhLnN0YXR1cyA9PT0gJ3dhaXRpbmdfdmFsaWRhdGlvbicgP1xuICAgICAgICAnYWJvbm5lbWVudHMucGVuZGluZ19zdWJzY3JpcHRpb24nIDogJ2Fib25uZW1lbnRzLmFjdGl2ZV9zdWJzY3JpcHRpb24nKVxuICAgICAgICB8IHRyYW5zbGF0ZSB9fVxuICAgICAgPC9oND5cbiAgICAgIDxpb24tbGlzdCBbaW5zZXRdPVwidHJ1ZVwiIG1vZGU9XCJpb3NcIj5cbiAgICAgICAgPGFwcC1zdWJzY3JpcHRpb24taXRlbSBbc3Vic2NyaXB0aW9uXT1cImdldEN1cnJlbnRTdWJzY3JpcHRpb24oKSFcIj5cbiAgICAgICAgPC9hcHAtc3Vic2NyaXB0aW9uLWl0ZW0+XG4gICAgICA8L2lvbi1saXN0PlxuICAgICAgfSBAaWYoZ2V0UHJldmlvdXNTdWJzY3JpcHRpb25zKCkubGVuZ3RoKSB7XG4gICAgICA8aDQgY2xhc3M9XCJpb24tbWFyZ2luLWhvcml6b250YWwgaW9uLW1hcmdpbi10b3BcIj5cbiAgICAgICAge3sgJ2Fib25uZW1lbnRzLnByZXZpb3VzX3N1YnNjcmlwdGlvbnMnIHwgdHJhbnNsYXRlIH19XG4gICAgICA8L2g0PlxuICAgICAgPGlvbi1saXN0IFtpbnNldF09XCJ0cnVlXCIgbW9kZT1cImlvc1wiPlxuICAgICAgICBAZm9yKHN1YnNjcmlwdGlvbiBvZiBnZXRQcmV2aW91c1N1YnNjcmlwdGlvbnMoKTsgdHJhY2sgc3Vic2NyaXB0aW9uLmlkKXtcbiAgICAgICAgPGFwcC1zdWJzY3JpcHRpb24taXRlbSBbc3Vic2NyaXB0aW9uXT1cInN1YnNjcmlwdGlvblwiPlxuICAgICAgICA8L2FwcC1zdWJzY3JpcHRpb24taXRlbT5cbiAgICAgICAgfVxuICAgICAgPC9pb24tbGlzdD5cbiAgICAgIH0gfVxuICAgIDwvaW9uLWNvbD5cbiAgPC9pb24tcm93PlxuPC9pb24tY29udGVudD5cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0RVLElBQUEseUJBQUEsR0FBQSxHQUFBO0FBQ0UsSUFBQSxpQkFBQSxDQUFBOzs7O0FBU0YsSUFBQSx1QkFBQTs7OztBQVRFLElBQUEsb0JBQUE7QUFBQSxJQUFBLDZCQUFBLEtBQUEsc0JBQUEsR0FBQSxHQUFBLGdDQUFBLDBCQUFBLElBQUEsS0FBQSxzQkFBQSxHQUFBLEdBQUEsT0FBQSxhQUFBLFVBQUEsS0FBQSxZQUFBLEdBQUEsc0JBQUEsR0FBQSxHQUFBLE9BQUEsYUFBQSxjQUFBLEtBQUEsWUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBOzs7OztBQVVGLElBQUEseUJBQUEsR0FBQSxHQUFBO0FBQ0UsSUFBQSxpQkFBQSxDQUFBOzs7QUFPRixJQUFBLHVCQUFBOzs7O0FBUEUsSUFBQSxvQkFBQTtBQUFBLElBQUEsNkJBQUEsS0FBQSxzQkFBQSxHQUFBLEdBQUEsZ0NBQUEsMEJBQUEsR0FBQSxLQUFB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
