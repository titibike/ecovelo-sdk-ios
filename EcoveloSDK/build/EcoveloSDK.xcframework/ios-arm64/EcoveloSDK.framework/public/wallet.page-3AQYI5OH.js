import {
  WalletService
} from "./chunk-5GXIE7IT.js";
import {
  HeaderComponent
} from "./chunk-AVAJ3QHV.js";
import "./chunk-K2AWDLYV.js";
import {
  AccountService
} from "./chunk-XK4I5MHM.js";
import "./chunk-FOJAXRYS.js";
import "./chunk-SARQRLZR.js";
import {
  addIcons,
  wallet
} from "./chunk-3E6DEK7U.js";
import "./chunk-U6SJAXLK.js";
import {
  CommonModule,
  Component,
  FormsModule,
  IonButton,
  IonCol,
  IonContent,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonRow,
  IonSkeletonText,
  NgIf,
  TranslateModule,
  TranslatePipe,
  effect,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-DGENMXJW.js";
import "./chunk-JBNXL77H.js";
import "./chunk-KQEJHESJ.js";
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

// src/app/pages/account/wallet/wallet.page.ts
var _c0 = () => [1, 2, 3, 4, 5];
var _c1 = (a0) => ({ message: a0 });
var _forTrack0 = ($index, $item) => $item.id;
function WalletPage_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 10);
    \u0275\u0275element(4, "ion-icon", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 12);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (-ctx_r1.cyclistState.cyclist.registrations.data[0].wallet.money / 100).toFixed(2), "\u20AC ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (-ctx_r1.cyclistState.cyclist.registrations.data[0].wallet.time / 60).toFixed(0), "min ");
  }
}
function WalletPage_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-skeleton-text", 6);
  }
  if (rf & 2) {
    \u0275\u0275property("animated", true);
  }
}
function WalletPage_Conditional_18_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item")(1, "ion-label")(2, "h2");
    \u0275\u0275element(3, "ion-skeleton-text", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275element(5, "ion-skeleton-text", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "ion-label", 15)(7, "h3");
    \u0275\u0275element(8, "ion-skeleton-text", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275element(10, "ion-skeleton-text", 17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("animated", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("animated", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("animated", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("animated", true);
  }
}
function WalletPage_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, WalletPage_Conditional_18_For_1_Template, 11, 4, "ion-item", null, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function WalletPage_Conditional_19_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-label", 18)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const transaction_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("color", transaction_r4.money < 0 ? "success" : "danger");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", (-transaction_r4.money / 100).toFixed(2), "\u20AC");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 3, "wallet.transaction.reason." + transaction_r4.reason), " ");
  }
}
function WalletPage_Conditional_19_For_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-label", 18)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const transaction_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("color", transaction_r4.time < 0 ? "success" : "danger");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", (-transaction_r4.time / 60).toFixed(0), "min");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 3, "wallet.transaction.reason." + transaction_r4.reason), " ");
  }
}
function WalletPage_Conditional_19_For_1_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const transaction_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("#", transaction_r4.facture, "");
  }
}
function WalletPage_Conditional_19_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item");
    \u0275\u0275template(1, WalletPage_Conditional_19_For_1_Conditional_1_Template, 6, 5, "ion-label", 18)(2, WalletPage_Conditional_19_For_1_Conditional_2_Template, 6, 5, "ion-label", 18);
    \u0275\u0275elementStart(3, "ion-label", 15)(4, "div", 19);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, WalletPage_Conditional_19_For_1_p_6_Template, 2, 1, "p", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const transaction_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(transaction_r4.money ? 1 : 2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(transaction_r4.created), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", transaction_r4.facture);
  }
}
function WalletPage_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, WalletPage_Conditional_19_For_1_Template, 7, 3, "ion-item", null, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.walletState.transactions);
  }
}
function WalletPage_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item")(1, "ion-label", 21);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "wallet.transactions_error", \u0275\u0275pureFunction1(4, _c1, ctx_r1.walletState.error.message)));
  }
}
function WalletPage_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item")(1, "ion-label", 21);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "wallet.no_transactions"));
  }
}
var _WalletPage = class _WalletPage {
  constructor(walletService, accountService) {
    this.walletService = walletService;
    this.accountService = accountService;
    this.cyclistState = {
      state: "unknown",
      blocked_reasons: ["Unknown account state"]
    };
    addIcons({ wallet });
    this.walletService.walletState.subscribe((state) => {
      this.walletState = state;
    });
    effect(() => {
      this.cyclistState = this.accountService.cyclistState();
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.walletService.getTransactions();
    });
  }
  formatDate(timestamp) {
    return new Date(timestamp * 1e3).toLocaleDateString();
  }
};
_WalletPage.\u0275fac = function WalletPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _WalletPage)(\u0275\u0275directiveInject(WalletService), \u0275\u0275directiveInject(AccountService));
};
_WalletPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WalletPage, selectors: [["app-wallet"]], decls: 22, vars: 16, consts: [["promoInput", ""], [3, "defaultHref"], [1, "ion-padding"], [1, "ion-justify-content-center"], ["size", "12", "size-md", "8", "size-lg", "6"], [1, "ecl-wallet"], [2, "width", "100%", "height", "60px", 3, "animated"], ["type", "text", "label-placement", "floating", "color", "primary", "fill", "outline", "mode", "md", 1, "ion-margin-top", 3, "label", "disabled"], ["color", "dark", "slot", "end", "size", "small", "color", "dark", "shape", "round", 3, "click"], [1, "ecl-wallet__item", "ecl-wallet__item--money"], [1, "ecl-wallet__item", "ecl-wallet__item--icon"], ["name", "wallet"], [1, "ecl-wallet__item", "ecl-wallet__item--time"], [2, "width", "20%", 3, "animated"], [2, "width", "60%", 3, "animated"], ["slot", "end", 1, "ion-text-end"], [2, "width", "80px", 3, "animated"], [2, "width", "40px", 3, "animated"], [3, "color"], [1, "transaction-date"], [4, "ngIf"], [1, "ion-text-center"]], template: function WalletPage_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "app-header", 1);
    \u0275\u0275elementStart(1, "ion-content", 2)(2, "ion-row", 3)(3, "ion-col", 4);
    \u0275\u0275template(4, WalletPage_Conditional_4_Template, 7, 2, "div", 5)(5, WalletPage_Conditional_5_Template, 1, 1, "ion-skeleton-text", 6);
    \u0275\u0275elementStart(6, "ion-input", 7, 0);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementStart(9, "ion-button", 8);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("click", function WalletPage_Template_ion_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const promoInput_r3 = \u0275\u0275reference(7);
      ctx.walletService.applyCodePromo((promoInput_r3.value == null ? null : promoInput_r3.value.toString()) || "");
      return \u0275\u0275resetView(promoInput_r3.value = "");
    });
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "ion-list")(14, "ion-list-header")(15, "ion-label");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, WalletPage_Conditional_18_Template, 2, 1)(19, WalletPage_Conditional_19_Template, 2, 0)(20, WalletPage_Conditional_20_Template, 4, 6, "ion-item")(21, WalletPage_Conditional_21_Template, 4, 3, "ion-item");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("defaultHref", "/account");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx.cyclistState.state === "active" ? 4 : ctx.cyclistState.state === "unknown" ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(8, 8, "wallet.promo_code"))("disabled", ctx.cyclistState.state === "unknown");
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(10, 10, "wallet.apply_promo"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 12, "wallet.apply"), "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 14, "wallet.transactions"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.walletState.state === "loading" ? 18 : ctx.walletState.state === "success" ? 19 : ctx.walletState.state === "error" ? 20 : 21);
  }
}, dependencies: [
  IonContent,
  IonIcon,
  IonItem,
  IonInput,
  IonButton,
  TranslateModule,
  TranslatePipe,
  IonList,
  IonListHeader,
  IonLabel,
  CommonModule,
  NgIf,
  FormsModule,
  HeaderComponent,
  IonSkeletonText,
  IonRow,
  IonCol
], styles: ["\n\n.ecl-wallet[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 auto 32px auto;\n  height: 60px;\n  display: grid;\n  grid-template-columns: 1fr 65px 1fr;\n  align-items: center;\n}\n.ecl-wallet__item[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 24px;\n  font-weight: 600;\n}\n.ecl-wallet__item--money[_ngcontent-%COMP%] {\n  margin-right: -30px;\n  border-radius: 30px;\n  color: var(--ion-color-light);\n  background: var(--ion-color-primary);\n  padding-right: 10px;\n}\n.ecl-wallet__item--icon[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 65px;\n  z-index: 2;\n  border-radius: 50%;\n  font-size: 44px;\n  background: #f2f2f2;\n}\n.ecl-wallet__item--time[_ngcontent-%COMP%] {\n  margin-left: -30px;\n  padding-left: 10px;\n  border-radius: 30px;\n  color: var(--ion-color-light);\n  background: var(--ion-color-primary-shade);\n}\n/*# sourceMappingURL=wallet.page.css.map */"] });
var WalletPage = _WalletPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WalletPage, [{
    type: Component,
    args: [{ selector: "app-wallet", imports: [
      IonContent,
      IonIcon,
      IonItem,
      IonInput,
      IonButton,
      TranslateModule,
      IonList,
      IonListHeader,
      IonLabel,
      CommonModule,
      FormsModule,
      HeaderComponent,
      IonSkeletonText,
      IonRow,
      IonCol
    ], template: `<app-header [defaultHref]="'/account'"></app-header>

<ion-content class="ion-padding">
  <ion-row class="ion-justify-content-center">
    <ion-col size="12" size-md="8" size-lg="6">
      @if (cyclistState.state === 'active') {
      <div class="ecl-wallet">
        <div class="ecl-wallet__item ecl-wallet__item--money">
          {{ (-cyclistState.cyclist.registrations!.data![0].wallet!.money! /
          100).toFixed(2) }}\u20AC
        </div>
        <div class="ecl-wallet__item ecl-wallet__item--icon">
          <ion-icon name="wallet"></ion-icon>
        </div>
        <div class="ecl-wallet__item ecl-wallet__item--time">
          {{ (-cyclistState.cyclist.registrations!.data![0].wallet!.time! /
          60).toFixed( 0 ) }}min
        </div>
      </div>
      } @else if (cyclistState.state === 'unknown') {
      <ion-skeleton-text
        [animated]="true"
        style="width: 100%; height: 60px"
      ></ion-skeleton-text>
      }
      <ion-input
        type="text"
        [label]="'wallet.promo_code' | translate"
        label-placement="floating"
        [disabled]="cyclistState.state === 'unknown'"
        color="primary"
        class="ion-margin-top"
        fill="outline"
        mode="md"
        #promoInput
      >
        <ion-button
          color="dark"
          slot="end"
          size="small"
          [attr.aria-label]="'wallet.apply_promo' | translate"
          color="dark"
          shape="round"
          (click)="walletService.applyCodePromo(promoInput.value?.toString() || ''); promoInput.value = '';"
        >
          {{ 'wallet.apply' | translate }}</ion-button
        ></ion-input
      >
      <ion-list>
        <ion-list-header>
          <ion-label>{{ 'wallet.transactions' | translate }}</ion-label>
        </ion-list-header>

        @if (walletState.state === 'loading') { @for (item of [1,2,3,4,5]; track
        item) {
        <ion-item>
          <ion-label>
            <h2>
              <ion-skeleton-text
                [animated]="true"
                style="width: 20%"
              ></ion-skeleton-text>
            </h2>
            <p>
              <ion-skeleton-text
                [animated]="true"
                style="width: 60%"
              ></ion-skeleton-text>
            </p>
          </ion-label>
          <ion-label slot="end" class="ion-text-end">
            <h3>
              <ion-skeleton-text
                [animated]="true"
                style="width: 80px"
              ></ion-skeleton-text>
            </h3>
            <p>
              <ion-skeleton-text
                [animated]="true"
                style="width: 40px"
              ></ion-skeleton-text>
            </p>
          </ion-label>
        </ion-item>
        } } @else if (walletState.state === 'success') { @for (transaction of
        walletState.transactions; track transaction.id) {
        <ion-item>
          @if (transaction.money) {
          <ion-label [color]="transaction.money < 0 ? 'success' : 'danger'">
            <strong>{{ (-transaction.money / 100).toFixed(2) }}\u20AC</strong>
            <p>
              {{ 'wallet.transaction.reason.' + transaction.reason | translate
              }}
            </p>
          </ion-label>
          } @else {
          <ion-label [color]="transaction.time! < 0 ? 'success' : 'danger'">
            <strong>{{ (-transaction.time! / 60).toFixed(0) }}min</strong>
            <p>
              {{ 'wallet.transaction.reason.' + transaction.reason | translate
              }}
            </p>
          </ion-label>
          }
          <ion-label slot="end" class="ion-text-end">
            <div class="transaction-date">
              {{ formatDate(transaction.created!) }}
            </div>
            <p *ngIf="transaction.facture">#{{ transaction.facture }}</p>
          </ion-label>
        </ion-item>
        } } @else if (walletState.state === 'error') {
        <ion-item>
          <ion-label class="ion-text-center"
            >{{ 'wallet.transactions_error' | translate:{ message:
            walletState.error.message } }}</ion-label
          >
        </ion-item>
        } @else {
        <ion-item>
          <ion-label class="ion-text-center"
            >{{ 'wallet.no_transactions' | translate }}</ion-label
          >
        </ion-item>
        }
      </ion-list>
    </ion-col>
  </ion-row>
</ion-content>
`, styles: ["/* src/app/pages/account/wallet/wallet.page.scss */\n.ecl-wallet {\n  width: 100%;\n  margin: 0 auto 32px auto;\n  height: 60px;\n  display: grid;\n  grid-template-columns: 1fr 65px 1fr;\n  align-items: center;\n}\n.ecl-wallet__item {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 24px;\n  font-weight: 600;\n}\n.ecl-wallet__item--money {\n  margin-right: -30px;\n  border-radius: 30px;\n  color: var(--ion-color-light);\n  background: var(--ion-color-primary);\n  padding-right: 10px;\n}\n.ecl-wallet__item--icon {\n  height: 100%;\n  width: 65px;\n  z-index: 2;\n  border-radius: 50%;\n  font-size: 44px;\n  background: #f2f2f2;\n}\n.ecl-wallet__item--time {\n  margin-left: -30px;\n  padding-left: 10px;\n  border-radius: 30px;\n  color: var(--ion-color-light);\n  background: var(--ion-color-primary-shade);\n}\n/*# sourceMappingURL=wallet.page.css.map */\n"] }]
  }], () => [{ type: WalletService }, { type: AccountService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WalletPage, { className: "WalletPage", filePath: "src/app/pages/account/wallet/wallet.page.ts", lineNumber: 56 });
})();
export {
  WalletPage
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wYWdlcy9hY2NvdW50L3dhbGxldC93YWxsZXQucGFnZS50cyIsICJzcmMvYXBwL3BhZ2VzL2FjY291bnQvd2FsbGV0L3dhbGxldC5wYWdlLmh0bWwiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IENvbXBvbmVudCwgZWZmZWN0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJ1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3JtcydcbmltcG9ydCB7XG4gIElvbkNvbnRlbnQsXG4gIElvbkhlYWRlcixcbiAgSW9uVGl0bGUsXG4gIElvbkljb24sXG4gIElvblRvb2xiYXIsXG4gIElvbkl0ZW0sXG4gIElvbklucHV0LFxuICBJb25CdXR0b24sXG4gIElvbkxpc3QsXG4gIElvbkxpc3RIZWFkZXIsXG4gIElvbkxhYmVsLFxuICBJb25Ta2VsZXRvblRleHQsXG4gIElvblNwaW5uZXIsXG4gIElvblJvdyxcbiAgSW9uQ29sLFxufSBmcm9tICdAaW9uaWMvYW5ndWxhci9zdGFuZGFsb25lJ1xuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnc3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50J1xuaW1wb3J0IHsgYWRkSWNvbnMgfSBmcm9tICdpb25pY29ucydcbmltcG9ydCB7IHdhbGxldCB9IGZyb20gJ2lvbmljb25zL2ljb25zJ1xuaW1wb3J0IHtcbiAgV2FsbGV0U2VydmljZSxcbiAgd2FsbGV0VHJhbnNhY3Rpb25zU3RhdGUsXG59IGZyb20gJ3NyYy9hcHAvc2VydmljZXMvYXBpLXdyYXBwZXJzL3dhbGxldC5zZXJ2aWNlJ1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcydcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnXG5pbXBvcnQge1xuICBBY2NvdW50U2VydmljZSxcbiAgY3ljbGlzdFN0YXRlLFxufSBmcm9tICdzcmMvYXBwL3NlcnZpY2VzL2FwaS13cmFwcGVycy9hY2NvdW50LnNlcnZpY2UnXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtd2FsbGV0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3dhbGxldC5wYWdlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi93YWxsZXQucGFnZS5zY3NzJ10sXG4gIGltcG9ydHM6IFtcbiAgICBJb25Db250ZW50LFxuICAgIElvbkljb24sXG4gICAgSW9uSXRlbSxcbiAgICBJb25JbnB1dCxcbiAgICBJb25CdXR0b24sXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICAgIElvbkxpc3QsXG4gICAgSW9uTGlzdEhlYWRlcixcbiAgICBJb25MYWJlbCxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgSGVhZGVyQ29tcG9uZW50LFxuICAgIElvblNrZWxldG9uVGV4dCxcbiAgICBJb25Sb3csXG4gICAgSW9uQ29sLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBXYWxsZXRQYWdlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgd2FsbGV0U3RhdGU6IHdhbGxldFRyYW5zYWN0aW9uc1N0YXRlXG4gIGN5Y2xpc3RTdGF0ZTogY3ljbGlzdFN0YXRlID0ge1xuICAgIHN0YXRlOiAndW5rbm93bicsXG4gICAgYmxvY2tlZF9yZWFzb25zOiBbJ1Vua25vd24gYWNjb3VudCBzdGF0ZSddLFxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHdhbGxldFNlcnZpY2U6IFdhbGxldFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhY2NvdW50U2VydmljZTogQWNjb3VudFNlcnZpY2VcbiAgKSB7XG4gICAgYWRkSWNvbnMoeyB3YWxsZXQgfSlcbiAgICB0aGlzLndhbGxldFNlcnZpY2Uud2FsbGV0U3RhdGUuc3Vic2NyaWJlKChzdGF0ZSkgPT4ge1xuICAgICAgdGhpcy53YWxsZXRTdGF0ZSA9IHN0YXRlXG4gICAgfSlcbiAgICBlZmZlY3QoKCkgPT4ge1xuICAgICAgdGhpcy5jeWNsaXN0U3RhdGUgPSB0aGlzLmFjY291bnRTZXJ2aWNlLmN5Y2xpc3RTdGF0ZSgpXG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIG5nT25Jbml0KCkge1xuICAgIGF3YWl0IHRoaXMud2FsbGV0U2VydmljZS5nZXRUcmFuc2FjdGlvbnMoKVxuICB9XG4gIGZvcm1hdERhdGUodGltZXN0YW1wOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKiAxMDAwKS50b0xvY2FsZURhdGVTdHJpbmcoKVxuICB9XG59XG4iLCAiPGFwcC1oZWFkZXIgW2RlZmF1bHRIcmVmXT1cIicvYWNjb3VudCdcIj48L2FwcC1oZWFkZXI+XG5cbjxpb24tY29udGVudCBjbGFzcz1cImlvbi1wYWRkaW5nXCI+XG4gIDxpb24tcm93IGNsYXNzPVwiaW9uLWp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICA8aW9uLWNvbCBzaXplPVwiMTJcIiBzaXplLW1kPVwiOFwiIHNpemUtbGc9XCI2XCI+XG4gICAgICBAaWYgKGN5Y2xpc3RTdGF0ZS5zdGF0ZSA9PT0gJ2FjdGl2ZScpIHtcbiAgICAgIDxkaXYgY2xhc3M9XCJlY2wtd2FsbGV0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJlY2wtd2FsbGV0X19pdGVtIGVjbC13YWxsZXRfX2l0ZW0tLW1vbmV5XCI+XG4gICAgICAgICAge3sgKC1jeWNsaXN0U3RhdGUuY3ljbGlzdC5yZWdpc3RyYXRpb25zIS5kYXRhIVswXS53YWxsZXQhLm1vbmV5ISAvXG4gICAgICAgICAgMTAwKS50b0ZpeGVkKDIpIH194oKsXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZWNsLXdhbGxldF9faXRlbSBlY2wtd2FsbGV0X19pdGVtLS1pY29uXCI+XG4gICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJ3YWxsZXRcIj48L2lvbi1pY29uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImVjbC13YWxsZXRfX2l0ZW0gZWNsLXdhbGxldF9faXRlbS0tdGltZVwiPlxuICAgICAgICAgIHt7ICgtY3ljbGlzdFN0YXRlLmN5Y2xpc3QucmVnaXN0cmF0aW9ucyEuZGF0YSFbMF0ud2FsbGV0IS50aW1lISAvXG4gICAgICAgICAgNjApLnRvRml4ZWQoIDAgKSB9fW1pblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgfSBAZWxzZSBpZiAoY3ljbGlzdFN0YXRlLnN0YXRlID09PSAndW5rbm93bicpIHtcbiAgICAgIDxpb24tc2tlbGV0b24tdGV4dFxuICAgICAgICBbYW5pbWF0ZWRdPVwidHJ1ZVwiXG4gICAgICAgIHN0eWxlPVwid2lkdGg6IDEwMCU7IGhlaWdodDogNjBweFwiXG4gICAgICA+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgIH1cbiAgICAgIDxpb24taW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBbbGFiZWxdPVwiJ3dhbGxldC5wcm9tb19jb2RlJyB8IHRyYW5zbGF0ZVwiXG4gICAgICAgIGxhYmVsLXBsYWNlbWVudD1cImZsb2F0aW5nXCJcbiAgICAgICAgW2Rpc2FibGVkXT1cImN5Y2xpc3RTdGF0ZS5zdGF0ZSA9PT0gJ3Vua25vd24nXCJcbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgY2xhc3M9XCJpb24tbWFyZ2luLXRvcFwiXG4gICAgICAgIGZpbGw9XCJvdXRsaW5lXCJcbiAgICAgICAgbW9kZT1cIm1kXCJcbiAgICAgICAgI3Byb21vSW5wdXRcbiAgICAgID5cbiAgICAgICAgPGlvbi1idXR0b25cbiAgICAgICAgICBjb2xvcj1cImRhcmtcIlxuICAgICAgICAgIHNsb3Q9XCJlbmRcIlxuICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCInd2FsbGV0LmFwcGx5X3Byb21vJyB8IHRyYW5zbGF0ZVwiXG4gICAgICAgICAgY29sb3I9XCJkYXJrXCJcbiAgICAgICAgICBzaGFwZT1cInJvdW5kXCJcbiAgICAgICAgICAoY2xpY2spPVwid2FsbGV0U2VydmljZS5hcHBseUNvZGVQcm9tbyhwcm9tb0lucHV0LnZhbHVlPy50b1N0cmluZygpIHx8ICcnKTsgcHJvbW9JbnB1dC52YWx1ZSA9ICcnO1wiXG4gICAgICAgID5cbiAgICAgICAgICB7eyAnd2FsbGV0LmFwcGx5JyB8IHRyYW5zbGF0ZSB9fTwvaW9uLWJ1dHRvblxuICAgICAgICA+PC9pb24taW5wdXRcbiAgICAgID5cbiAgICAgIDxpb24tbGlzdD5cbiAgICAgICAgPGlvbi1saXN0LWhlYWRlcj5cbiAgICAgICAgICA8aW9uLWxhYmVsPnt7ICd3YWxsZXQudHJhbnNhY3Rpb25zJyB8IHRyYW5zbGF0ZSB9fTwvaW9uLWxhYmVsPlxuICAgICAgICA8L2lvbi1saXN0LWhlYWRlcj5cblxuICAgICAgICBAaWYgKHdhbGxldFN0YXRlLnN0YXRlID09PSAnbG9hZGluZycpIHsgQGZvciAoaXRlbSBvZiBbMSwyLDMsNCw1XTsgdHJhY2tcbiAgICAgICAgaXRlbSkge1xuICAgICAgICA8aW9uLWl0ZW0+XG4gICAgICAgICAgPGlvbi1sYWJlbD5cbiAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0XG4gICAgICAgICAgICAgICAgW2FuaW1hdGVkXT1cInRydWVcIlxuICAgICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDIwJVwiXG4gICAgICAgICAgICAgID48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHRcbiAgICAgICAgICAgICAgICBbYW5pbWF0ZWRdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogNjAlXCJcbiAgICAgICAgICAgICAgPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICAgICAgPGlvbi1sYWJlbCBzbG90PVwiZW5kXCIgY2xhc3M9XCJpb24tdGV4dC1lbmRcIj5cbiAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0XG4gICAgICAgICAgICAgICAgW2FuaW1hdGVkXT1cInRydWVcIlxuICAgICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDgwcHhcIlxuICAgICAgICAgICAgICA+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0XG4gICAgICAgICAgICAgICAgW2FuaW1hdGVkXT1cInRydWVcIlxuICAgICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDQwcHhcIlxuICAgICAgICAgICAgICA+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgfSB9IEBlbHNlIGlmICh3YWxsZXRTdGF0ZS5zdGF0ZSA9PT0gJ3N1Y2Nlc3MnKSB7IEBmb3IgKHRyYW5zYWN0aW9uIG9mXG4gICAgICAgIHdhbGxldFN0YXRlLnRyYW5zYWN0aW9uczsgdHJhY2sgdHJhbnNhY3Rpb24uaWQpIHtcbiAgICAgICAgPGlvbi1pdGVtPlxuICAgICAgICAgIEBpZiAodHJhbnNhY3Rpb24ubW9uZXkpIHtcbiAgICAgICAgICA8aW9uLWxhYmVsIFtjb2xvcl09XCJ0cmFuc2FjdGlvbi5tb25leSA8IDAgPyAnc3VjY2VzcycgOiAnZGFuZ2VyJ1wiPlxuICAgICAgICAgICAgPHN0cm9uZz57eyAoLXRyYW5zYWN0aW9uLm1vbmV5IC8gMTAwKS50b0ZpeGVkKDIpIH194oKsPC9zdHJvbmc+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAge3sgJ3dhbGxldC50cmFuc2FjdGlvbi5yZWFzb24uJyArIHRyYW5zYWN0aW9uLnJlYXNvbiB8IHRyYW5zbGF0ZVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgICAgIH0gQGVsc2Uge1xuICAgICAgICAgIDxpb24tbGFiZWwgW2NvbG9yXT1cInRyYW5zYWN0aW9uLnRpbWUhIDwgMCA/ICdzdWNjZXNzJyA6ICdkYW5nZXInXCI+XG4gICAgICAgICAgICA8c3Ryb25nPnt7ICgtdHJhbnNhY3Rpb24udGltZSEgLyA2MCkudG9GaXhlZCgwKSB9fW1pbjwvc3Ryb25nPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIHt7ICd3YWxsZXQudHJhbnNhY3Rpb24ucmVhc29uLicgKyB0cmFuc2FjdGlvbi5yZWFzb24gfCB0cmFuc2xhdGVcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgICAgICB9XG4gICAgICAgICAgPGlvbi1sYWJlbCBzbG90PVwiZW5kXCIgY2xhc3M9XCJpb24tdGV4dC1lbmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0cmFuc2FjdGlvbi1kYXRlXCI+XG4gICAgICAgICAgICAgIHt7IGZvcm1hdERhdGUodHJhbnNhY3Rpb24uY3JlYXRlZCEpIH19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwICpuZ0lmPVwidHJhbnNhY3Rpb24uZmFjdHVyZVwiPiN7eyB0cmFuc2FjdGlvbi5mYWN0dXJlIH19PC9wPlxuICAgICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgICB9IH0gQGVsc2UgaWYgKHdhbGxldFN0YXRlLnN0YXRlID09PSAnZXJyb3InKSB7XG4gICAgICAgIDxpb24taXRlbT5cbiAgICAgICAgICA8aW9uLWxhYmVsIGNsYXNzPVwiaW9uLXRleHQtY2VudGVyXCJcbiAgICAgICAgICAgID57eyAnd2FsbGV0LnRyYW5zYWN0aW9uc19lcnJvcicgfCB0cmFuc2xhdGU6eyBtZXNzYWdlOlxuICAgICAgICAgICAgd2FsbGV0U3RhdGUuZXJyb3IubWVzc2FnZSB9IH19PC9pb24tbGFiZWxcbiAgICAgICAgICA+XG4gICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICAgIH0gQGVsc2Uge1xuICAgICAgICA8aW9uLWl0ZW0+XG4gICAgICAgICAgPGlvbi1sYWJlbCBjbGFzcz1cImlvbi10ZXh0LWNlbnRlclwiXG4gICAgICAgICAgICA+e3sgJ3dhbGxldC5ub190cmFuc2FjdGlvbnMnIHwgdHJhbnNsYXRlIH19PC9pb24tbGFiZWxcbiAgICAgICAgICA+XG4gICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICAgIH1cbiAgICAgIDwvaW9uLWxpc3Q+XG4gICAgPC9pb24tY29sPlxuICA8L2lvbi1yb3c+XG48L2lvbi1jb250ZW50PlxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQkNxRGlELEdBQUUsR0FBRSxHQUFFLEdBQUUsQ0FBQzs7Ozs7QUEvQ3BELElBQUEseUJBQUEsR0FBQSxPQUFBLENBQUEsRUFBd0IsR0FBQSxPQUFBLENBQUE7QUFFcEIsSUFBQSxpQkFBQSxDQUFBO0FBRUYsSUFBQSx1QkFBQTtBQUNBLElBQUEseUJBQUEsR0FBQSxPQUFBLEVBQUE7QUFDRSxJQUFBLG9CQUFBLEdBQUEsWUFBQSxFQUFBO0FBQ0YsSUFBQSx1QkFBQTtBQUNBLElBQUEseUJBQUEsR0FBQSxPQUFBLEVBQUE7QUFDRSxJQUFBLGlCQUFBLENBQUE7QUFFRixJQUFBLHVCQUFBLEVBQU07Ozs7QUFUSixJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLDZCQUFBLE1BQUEsQ0FBQSxPQUFBLGFBQUEsUUFBQSxjQUFBLEtBQUEs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aUJBQUEsRUFBQTs7QUFBdUMsSUFBQSx1QkFBQSxFQUFZO0FBR2hFLElBQUEscUJBQUEsSUFBQSxvQ0FBQSxHQUFBLENBQUEsRUFBdUMsSUFBQSxvQ0FBQSxHQUFBLENBQUEsRUFnQ1MsSUFBQSxvQ0FBQSxHQUFBLEdBQUEsVUFBQSxFQTJCRixJQUFBLG9DQUFBLEdBQUEsR0FBQSxVQUFBO0FBY2hELElBQUEsdUJBQUEsRUFBVyxFQUNILEVBQ0Y7OztBQWhJQSxJQUFBLHFCQUFBLGVBQUEsVUFBQTtBQUtOLElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEsd0JBQUEsSUFBQSxhQUFBLFVBQUEsV0FBQSxJQUFBLElBQUEsYUFBQSxVQUFBLFlBQUEsSUFBQSxFQUFBO0FBc0JFLElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEscUJBQUEsU0FBQSxzQkFBQSxHQUFBLEdBQUEsbUJBQUEsQ0FBQSxFQUF5QyxZQUFBLElBQUEsYUFBQSxVQUFBLFNBQUE7QUFhdkMsSUFBQSxvQkFBQSxDQUFBOztBQUtBLElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEsNkJBQUEsS0FBQSxzQkFBQSxJQUFBLElBQUEsY0FBQSxHQUFBLEVBQUE7QUFLVyxJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLDRCQUFBLHNCQUFBLElBQUEsSUFBQSxxQkFBQSxDQUFBO0FBR2IsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSx3QkFBQSxJQUFBLFlBQUEsVUFBQSxZQUFBLEtBQUEsSUFBQSxZQUFBLFVBQUEsWUFBQSxLQUFBLElBQUEsWUFBQSxVQUFBLFVBQUEsS0FBQSxFQUFBOzs7RURmSjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFBZTtFQUNmO0VBQ0E7RUFDQTtFQUNBO0VBQVk7RUFDWjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0FBQU0sR0FBQSxRQUFBLENBQUEsazhCQUFBLEVBQUEsQ0FBQTtBQUdKLElBQU8sYUFBUDs7c0VBQU8sWUFBVSxDQUFBO1VBdEJ0Qjt1QkFDVyxjQUFZLFNBR2I7TUFDUDtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7T0FDRCxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBQUEsUUFBQSxDQUFBLHM1QkFBQSxFQUFBLENBQUE7Ozs7NkVBRVUsWUFBVSxFQUFBLFdBQUEsY0FBQSxVQUFBLCtDQUFBLFlBQUEsR0FBQSxDQUFBO0FBQUEsR0FBQTsiLAogICJuYW1lcyI6IFtdCn0K
