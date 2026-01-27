import {
  FactureService
} from "./chunk-DBFODXE6.js";
import {
  NativeAudioService
} from "./chunk-G2MABGRU.js";
import {
  HeaderComponent
} from "./chunk-AVAJ3QHV.js";
import "./chunk-K2AWDLYV.js";
import {
  Browser
} from "./chunk-WJQU3GMM.js";
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
  downloadOutline
} from "./chunk-3E6DEK7U.js";
import "./chunk-U6SJAXLK.js";
import {
  CommonModule,
  Component,
  DOCUMENT,
  DatePipe,
  FormsModule,
  Inject,
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonProgressBar,
  IonRefresher,
  IonRow,
  IonSkeletonText,
  IonText,
  IonThumbnail,
  NgForOf,
  NgZone,
  RouterLink,
  RouterModule,
  TranslateModule,
  TranslatePipe,
  ViewChild,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-DGENMXJW.js";
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
import {
  __async
} from "./chunk-UESUV5PM.js";

// src/app/pages/account/invoices/invoices.page.ts
var _c0 = () => ["/renting"];
var _c1 = (a0) => ({ amount: a0 });
var _c2 = () => [];
function InvoicesPage_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-progress-bar", 1);
  }
}
function InvoicesPage_Conditional_6_Conditional_0_ion_item_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item", 13);
    \u0275\u0275element(1, "ion-icon", 14);
    \u0275\u0275elementStart(2, "ion-label")(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-text", 15);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "br");
    \u0275\u0275elementStart(9, "ion-note", 16);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 17)(13, "ion-note", 18);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "ion-button", 19);
    \u0275\u0275listener("click", function InvoicesPage_Conditional_6_Conditional_0_ion_item_12_Template_ion_button_click_15_listener() {
      const invoice_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openInAppBrowser(invoice_r2.status === "paid" ? invoice_r2.pdf_url : invoice_r2.hosted_invoice_url));
    });
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const invoice_r2 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("#", invoice_r2.number, "");
    \u0275\u0275advance();
    \u0275\u0275property("color", "danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 6, "invoices.status." + invoice_r2.status));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 8, invoice_r2.created * 1e3, "dd/MM/yyyy HH:mm"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", invoice_r2.amount_final / 100, "\u20AC");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 11, "invoices.pay_button"), "");
  }
}
function InvoicesPage_Conditional_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-card", 8)(4, "ion-card-content")(5, "div", 9);
    \u0275\u0275element(6, "img", 10);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "ion-list", 11);
    \u0275\u0275template(12, InvoicesPage_Conditional_6_Conditional_0_ion_item_12_Template, 18, 13, "ion-item", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 4, "invoices.unpaid_title"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275propertyInterpolate("alt", \u0275\u0275pipeBind1(7, 6, "invoices.bell_icon_alt"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 8, "invoices.unpaid_message"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.invoicesState.dues);
  }
}
function InvoicesPage_Conditional_6_Conditional_4_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item", 21);
    \u0275\u0275element(1, "ion-icon", 14);
    \u0275\u0275elementStart(2, "ion-label")(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-text", 22);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "br");
    \u0275\u0275elementStart(9, "ion-note", 16);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 17)(13, "ion-note", 18);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const invoice_r4 = ctx.$implicit;
    \u0275\u0275property("href", invoice_r4.pdf_url);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("#", invoice_r4.number || "N/A", "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, "invoices.status." + invoice_r4.status));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 7, invoice_r4.created * 1e3, "dd/MM/yyyy HH:mm"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", invoice_r4.amount_final / 100, "\u20AC");
  }
}
function InvoicesPage_Conditional_6_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list");
    \u0275\u0275template(1, InvoicesPage_Conditional_6_Conditional_4_ion_item_1_Template, 15, 10, "ion-item", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.invoicesState.invoices);
  }
}
function InvoicesPage_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, InvoicesPage_Conditional_6_Conditional_0_Template, 13, 10);
    \u0275\u0275elementStart(1, "h1", 6);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, InvoicesPage_Conditional_6_Conditional_4_Template, 2, 1, "ion-list");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.invoicesState.dues && ctx_r2.invoicesState.dues.length > 0 ? 0 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "invoices.title"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.invoicesState.invoices.length > 0 ? 4 : -1);
  }
}
function InvoicesPage_Conditional_7_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "invoices.no_paid_trips"), " ");
  }
}
function InvoicesPage_Conditional_7_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, "invoices.upcoming", \u0275\u0275pureFunction1(4, _c1, ctx_r2.invoicesState.upcoming.amount / 100)), " ");
  }
}
function InvoicesPage_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-row")(1, "ion-col")(2, "h1");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275template(6, InvoicesPage_Conditional_7_Conditional_6_Template, 2, 3)(7, InvoicesPage_Conditional_7_Conditional_7_Template, 2, 6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "ion-button", 23);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, "invoices.title"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.invoicesState.upcoming.amount === 0 ? 6 : 7);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(8, _c0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 6, "invoices.start_rental"));
  }
}
function InvoicesPage_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-row")(1, "ion-col")(2, "h1");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "ion-button", 23);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, "invoices.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 6, "invoices.no_paid_trips"));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(10, _c0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 8, "invoices.start_rental"));
  }
}
function InvoicesPage_Conditional_9_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item")(1, "ion-thumbnail", 25);
    \u0275\u0275element(2, "ion-skeleton-text", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-label")(4, "h3");
    \u0275\u0275element(5, "ion-skeleton-text", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275element(7, "ion-skeleton-text", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275element(9, "ion-skeleton-text", 29);
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
function InvoicesPage_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list");
    \u0275\u0275template(1, InvoicesPage_Conditional_9_ion_item_1_Template, 10, 4, "ion-item", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c2).constructor(ctx_r2.skeletonCount));
  }
}
var _InvoicesPage = class _InvoicesPage {
  constructor(document, factureService, ngZone, nativeAudioService) {
    this.document = document;
    this.factureService = factureService;
    this.ngZone = ngZone;
    this.nativeAudioService = nativeAudioService;
    this.skeletonCount = 10;
    addIcons({ downloadOutline });
    this.factureService.factureState.subscribe((state) => {
      this.invoicesState = state;
    });
  }
  ngOnInit() {
    this.nativeAudioService.preloadAsset("bikebell", "assets/audio/bikebell.mp3", 1, 0.8);
    this.refresh();
  }
  ngAfterViewInit() {
    this.content.scrollEvents = true;
    this.content.ionScroll.subscribe((event) => {
      const scrollTop = event.detail.scrollTop;
      if (this.leaderLine) {
        this.leaderLine.position();
      }
    });
    this.factureService.factureState.subscribe((state) => __async(this, null, function* () {
      if (state.state === "factures") {
        if (state.dues && state.dues.length > 0) {
          yield setTimeout(() => __async(this, null, function* () {
            this.nativeAudioService.play("bikebell");
            if (this.leaderLine)
              this.leaderLine.remove();
            this.leaderLine = yield new LeaderLine(this.document.getElementById("DringFrom"), this.document.getElementById("DringTo"), {
              path: "magnet",
              color: "#0A0A0A",
              size: 2,
              startSocket: "left",
              endSocket: "top",
              positionByWindowResize: true,
              hide: true
            });
            this.leaderLine.show();
          }), 500);
        }
      }
    }));
  }
  ionViewWillLeave() {
    return __async(this, null, function* () {
      if (this.leaderLine)
        this.leaderLine.remove();
      yield Browser.removeAllListeners();
    });
  }
  handleRefresh(event) {
    this.refresh().then(() => {
      event.target.complete();
    });
  }
  refresh() {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        if (this.leaderLine)
          this.leaderLine.hide();
        this.invoicesState = { state: "loading" };
        this.factureService.getFactures().then(() => {
          resolve();
        });
      });
    });
  }
  openInAppBrowser(url) {
    return __async(this, null, function* () {
      yield Browser.open({ url, presentationStyle: "popover" });
      yield Browser.addListener("browserFinished", () => {
        this.ngZone.run(() => {
          this.refresh();
        });
      });
    });
  }
};
_InvoicesPage.\u0275fac = function InvoicesPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InvoicesPage)(\u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(FactureService), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(NativeAudioService));
};
_InvoicesPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InvoicesPage, selectors: [["app-invoices"]], viewQuery: function InvoicesPage_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(IonContent, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.content = _t.first);
  }
}, decls: 10, vars: 3, consts: [[3, "defaultHref"], ["type", "indeterminate"], [1, "ion-padding"], [1, "ion-justify-content-center"], ["size", "12", "size-md", "8", "size-lg", "6"], ["slot", "fixed", 3, "ionRefresh"], [1, "ion-margin"], [1, "ion-margin-horizontal"], ["id", "DringFrom", 1, "ion-margin"], [1, "ion-float-left"], ["src", "assets/svg/bikebell.svg", 1, "ion-margin-end", 3, "alt"], ["id", "DringTo", 1, "ion-margin-top"], ["detail", "false", 4, "ngFor", "ngForOf"], ["detail", "false"], ["slot", "start", "name", "download-outline"], [3, "color"], ["color", "medium", 1, "ion-text-wrap"], ["slot", "end", 1, "metadata-end-wrapper"], ["color", "medium"], ["size", "small", "color", "primary", 3, "click"], ["target", "_blank", "detail", "false", 3, "href", 4, "ngFor", "ngForOf"], ["target", "_blank", "detail", "false", 3, "href"], ["color", "success"], [3, "routerLink"], [4, "ngFor", "ngForOf"], ["slot", "start"], [3, "animated"], [2, "width", "80%", 3, "animated"], [2, "width", "60%", 3, "animated"], [2, "width", "30%", 3, "animated"]], template: function InvoicesPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-header", 0);
    \u0275\u0275template(1, InvoicesPage_Conditional_1_Template, 1, 0, "ion-progress-bar", 1);
    \u0275\u0275elementStart(2, "ion-content", 2)(3, "ion-row", 3)(4, "ion-col", 4)(5, "ion-refresher", 5);
    \u0275\u0275listener("ionRefresh", function InvoicesPage_Template_ion_refresher_ionRefresh_5_listener($event) {
      return ctx.handleRefresh($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, InvoicesPage_Conditional_6_Template, 5, 5)(7, InvoicesPage_Conditional_7_Template, 11, 9)(8, InvoicesPage_Conditional_8_Template, 11, 11)(9, InvoicesPage_Conditional_9_Template, 2, 2, "ion-list");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("defaultHref", "/account");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.invoicesState.state === "loading" ? 1 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.invoicesState.state === "factures" ? 6 : ctx.invoicesState.state === "upcoming" ? 7 : ctx.invoicesState.state === "noInvoices" ? 8 : ctx.invoicesState.state === "loading" ? 9 : -1);
  }
}, dependencies: [
  IonContent,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonNote,
  IonText,
  IonButton,
  IonCard,
  IonCardContent,
  IonSkeletonText,
  IonProgressBar,
  IonThumbnail,
  IonRefresher,
  CommonModule,
  NgForOf,
  DatePipe,
  FormsModule,
  HeaderComponent,
  TranslateModule,
  TranslatePipe,
  RouterModule,
  RouterLink,
  IonRow,
  IonCol
], styles: ["\n\n.metadata-end-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  inset-inline-end: 10px;\n  font-size: 0.8rem;\n  text-align: right;\n  display: flex;\n  flex-direction: column;\n  align-items: right;\n}\nion-label[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  max-width: calc(100% - 60px);\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\nion-label[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=invoices.page.css.map */"] });
var InvoicesPage = _InvoicesPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InvoicesPage, [{
    type: Component,
    args: [{ selector: "app-invoices", imports: [
      IonContent,
      IonList,
      IonItem,
      IonIcon,
      IonLabel,
      IonNote,
      IonText,
      IonButton,
      IonCard,
      IonCardContent,
      IonSkeletonText,
      IonProgressBar,
      IonThumbnail,
      IonRefresher,
      CommonModule,
      FormsModule,
      HeaderComponent,
      TranslateModule,
      RouterModule,
      IonRow,
      IonCol
    ], template: `<app-header [defaultHref]="'/account'"></app-header>
@if(invoicesState.state === 'loading'){
<ion-progress-bar type="indeterminate"></ion-progress-bar>
}

<ion-content class="ion-padding">
  <ion-row class="ion-justify-content-center">
    <ion-col size="12" size-md="8" size-lg="6">
      <ion-refresher slot="fixed" (ionRefresh)="handleRefresh($event)">
      </ion-refresher>

      @if(invoicesState.state === 'factures'){ @if(invoicesState.dues &&
      invoicesState.dues.length > 0){

      <h1 class="ion-margin-horizontal">
        {{ 'invoices.unpaid_title' | translate }}
      </h1>
      <ion-card class="ion-margin" id="DringFrom">
        <ion-card-content>
          <div class="ion-float-left">
            <img
              src="assets/svg/bikebell.svg"
              class="ion-margin-end"
              alt="{{ 'invoices.bell_icon_alt' | translate }}"
            />
          </div>
          <p>{{ 'invoices.unpaid_message' | translate }}</p>
        </ion-card-content>
      </ion-card>
      <ion-list class="ion-margin-top" id="DringTo">
        <ion-item *ngFor="let invoice of invoicesState.dues" detail="false">
          <ion-icon slot="start" name="download-outline"></ion-icon>
          <ion-label>
            <strong>#{{invoice.number}}</strong>
            <ion-text [color]="'danger'"
              >{{ 'invoices.status.' + invoice.status | translate }}</ion-text
            ><br />
            <ion-note color="medium" class="ion-text-wrap">
              {{ invoice.created! * 1000 | date : 'dd/MM/yyyy HH:mm' }}
            </ion-note>
          </ion-label>
          <div class="metadata-end-wrapper" slot="end">
            <ion-note color="medium"
              >{{invoice.amount_final! / 100 }}\u20AC</ion-note
            >
            <ion-button
              size="small"
              color="primary"
              (click)="openInAppBrowser(invoice.status === 'paid' ? invoice.pdf_url! : invoice.hosted_invoice_url!)"
            >
              {{ 'invoices.pay_button' | translate }}</ion-button
            >
          </div>
        </ion-item>
      </ion-list>
      }

      <h1 class="ion-margin">{{ 'invoices.title' | translate }}</h1>
      @if(invoicesState.invoices.length > 0){
      <ion-list>
        <ion-item
          [href]="invoice.pdf_url"
          target="_blank"
          *ngFor="let invoice of invoicesState.invoices"
          detail="false"
        >
          <ion-icon slot="start" name="download-outline"></ion-icon>
          <ion-label>
            <strong>#{{invoice.number || 'N/A'}}</strong>
            <ion-text color="success"
              >{{ 'invoices.status.' + invoice.status | translate }}</ion-text
            ><br />
            <ion-note color="medium" class="ion-text-wrap">
              {{ invoice.created! * 1000 | date : 'dd/MM/yyyy HH:mm' }}
            </ion-note>
          </ion-label>
          <div class="metadata-end-wrapper" slot="end">
            <ion-note color="medium"
              >{{invoice.amount_final! / 100 }}\u20AC</ion-note
            >
          </div>
        </ion-item>
      </ion-list>
      } } @else if(invoicesState.state === 'upcoming'){
      <ion-row>
        <ion-col>
          <h1>{{ 'invoices.title' | translate }}</h1>
          <p>
            @if(invoicesState.upcoming.amount! === 0) { {{
            'invoices.no_paid_trips' | translate }} } @else { {{
            'invoices.upcoming' | translate:{ amount:
            invoicesState.upcoming.amount! / 100 } }} }
          </p>
        </ion-col>
      </ion-row>
      <ion-button [routerLink]="['/renting']"
        >{{ 'invoices.start_rental' | translate }}</ion-button
      >
      } @else if(invoicesState.state === 'noInvoices'){
      <ion-row>
        <ion-col>
          <h1>{{ 'invoices.title' | translate }}</h1>
          <p>{{ 'invoices.no_paid_trips' | translate }}</p>
        </ion-col>
      </ion-row>
      <ion-button [routerLink]="['/renting']"
        >{{ 'invoices.start_rental' | translate }}</ion-button
      >
      } @else if(invoicesState.state === 'loading'){
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
      }
    </ion-col>
  </ion-row>
</ion-content>
`, styles: ["/* src/app/pages/account/invoices/invoices.page.scss */\n.metadata-end-wrapper {\n  position: absolute;\n  top: 10px;\n  inset-inline-end: 10px;\n  font-size: 0.8rem;\n  text-align: right;\n  display: flex;\n  flex-direction: column;\n  align-items: right;\n}\nion-label strong {\n  display: block;\n  max-width: calc(100% - 60px);\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\nion-label ion-note {\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=invoices.page.css.map */\n"] }]
  }], () => [{ type: Document, decorators: [{
    type: Inject,
    args: [DOCUMENT]
  }] }, { type: FactureService }, { type: NgZone }, { type: NativeAudioService }], { content: [{
    type: ViewChild,
    args: [IonContent]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InvoicesPage, { className: "InvoicesPage", filePath: "src/app/pages/account/invoices/invoices.page.ts", lineNumber: 75 });
})();
export {
  InvoicesPage
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wYWdlcy9hY2NvdW50L2ludm9pY2VzL2ludm9pY2VzLnBhZ2UudHMiLCAic3JjL2FwcC9wYWdlcy9hY2NvdW50L2ludm9pY2VzL2ludm9pY2VzLnBhZ2UuaHRtbCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbmplY3QsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgVmlld0NoaWxkLFxuICBOZ1pvbmUsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUsIERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJ1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3JtcydcbmltcG9ydCB7XG4gIElvbkNvbnRlbnQsXG4gIElvbkhlYWRlcixcbiAgSW9uVGl0bGUsXG4gIElvbkxpc3QsXG4gIElvbkl0ZW0sXG4gIElvbkljb24sXG4gIElvbkxhYmVsLFxuICBJb25Ub29sYmFyLFxuICBJb25Ob3RlLFxuICBJb25UZXh0LFxuICBJb25CdXR0b24sXG4gIElvblNrZWxldG9uVGV4dCxcbiAgSW9uUHJvZ3Jlc3NCYXIsXG4gIElvblRodW1ibmFpbCxcbiAgSW9uUmVmcmVzaGVyLFxuICBJb25DYXJkLFxuICBJb25DYXJkQ29udGVudCxcbiAgSW9uUm93LFxuICBJb25Db2wsXG59IGZyb20gJ0Bpb25pYy9hbmd1bGFyL3N0YW5kYWxvbmUnXG5pbXBvcnQgeyBIZWFkZXJDb21wb25lbnQgfSBmcm9tICdzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQnXG5pbXBvcnQgeyBhZGRJY29ucyB9IGZyb20gJ2lvbmljb25zJ1xuaW1wb3J0IHsgZG93bmxvYWRPdXRsaW5lIH0gZnJvbSAnaW9uaWNvbnMvaWNvbnMnXG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJ1xuaW1wb3J0IHtcbiAgRmFjdHVyZVNlcnZpY2UsXG4gIEZhY3R1cmVzU3RhdGUsXG59IGZyb20gJ3NyYy9hcHAvc2VydmljZXMvYXBpLXdyYXBwZXJzL2ZhY3R1cmUuc2VydmljZSdcbmltcG9ydCB7IE5hdGl2ZUF1ZGlvU2VydmljZSB9IGZyb20gJ3NyYy9hcHAvc2VydmljZXMvdXRpbHMvbmF0aXZlLWF1ZGlvLnNlcnZpY2UnXG5pbXBvcnQgeyBMaXN0RmFjdHVyZTIwMFJlc3BvbnNlQWxsT2ZEYXRhSW5uZXIgfSBmcm9tICdzcmMvYXBpLWN5Y2xpc3QnXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInXG5pbXBvcnQgeyBCcm93c2VyIH0gZnJvbSAnQGNhcGFjaXRvci9icm93c2VyJ1xuXG5kZWNsYXJlIHZhciBMZWFkZXJMaW5lOiBhbnlcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWludm9pY2VzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ludm9pY2VzLnBhZ2UuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ludm9pY2VzLnBhZ2Uuc2NzcyddLFxuICBpbXBvcnRzOiBbXG4gICAgSW9uQ29udGVudCxcbiAgICBJb25MaXN0LFxuICAgIElvbkl0ZW0sXG4gICAgSW9uSWNvbixcbiAgICBJb25MYWJlbCxcbiAgICBJb25Ob3RlLFxuICAgIElvblRleHQsXG4gICAgSW9uQnV0dG9uLFxuICAgIElvbkNhcmQsXG4gICAgSW9uQ2FyZENvbnRlbnQsXG4gICAgSW9uU2tlbGV0b25UZXh0LFxuICAgIElvblByb2dyZXNzQmFyLFxuICAgIElvblRodW1ibmFpbCxcbiAgICBJb25SZWZyZXNoZXIsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIEhlYWRlckNvbXBvbmVudCxcbiAgICBUcmFuc2xhdGVNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIElvblJvdyxcbiAgICBJb25Db2wsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEludm9pY2VzUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBWaWV3Q2hpbGQoSW9uQ29udGVudClcbiAgY29udGVudDogSW9uQ29udGVudFxuICBpbnZvaWNlc1N0YXRlOiBGYWN0dXJlc1N0YXRlXG4gIHJlYWRvbmx5IHNrZWxldG9uQ291bnQgPSAxMFxuICBwcml2YXRlIGxlYWRlckxpbmU/OiBhbnlcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBEb2N1bWVudCxcbiAgICBwcml2YXRlIGZhY3R1cmVTZXJ2aWNlOiBGYWN0dXJlU2VydmljZSxcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgbmF0aXZlQXVkaW9TZXJ2aWNlOiBOYXRpdmVBdWRpb1NlcnZpY2VcbiAgKSB7XG4gICAgYWRkSWNvbnMoeyBkb3dubG9hZE91dGxpbmUgfSlcblxuICAgIHRoaXMuZmFjdHVyZVNlcnZpY2UuZmFjdHVyZVN0YXRlLnN1YnNjcmliZSgoc3RhdGUpID0+IHtcbiAgICAgIHRoaXMuaW52b2ljZXNTdGF0ZSA9IHN0YXRlXG4gICAgfSlcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIFByw6ljaGFyZ2VtZW50IGR1IHNvbiBcIkRyaW5nXCJcbiAgICB0aGlzLm5hdGl2ZUF1ZGlvU2VydmljZS5wcmVsb2FkQXNzZXQoXG4gICAgICAnYmlrZWJlbGwnLFxuICAgICAgJ2Fzc2V0cy9hdWRpby9iaWtlYmVsbC5tcDMnLFxuICAgICAgMSxcbiAgICAgIDAuOFxuICAgIClcblxuICAgIHRoaXMucmVmcmVzaCgpXG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5jb250ZW50LnNjcm9sbEV2ZW50cyA9IHRydWVcblxuICAgIHRoaXMuY29udGVudC5pb25TY3JvbGwuc3Vic2NyaWJlKChldmVudCkgPT4ge1xuICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gZXZlbnQuZGV0YWlsLnNjcm9sbFRvcFxuICAgICAgaWYgKHRoaXMubGVhZGVyTGluZSkge1xuICAgICAgICB0aGlzLmxlYWRlckxpbmUucG9zaXRpb24oKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmZhY3R1cmVTZXJ2aWNlLmZhY3R1cmVTdGF0ZS5zdWJzY3JpYmUoYXN5bmMgKHN0YXRlKSA9PiB7XG4gICAgICBpZiAoc3RhdGUuc3RhdGUgPT09ICdmYWN0dXJlcycpIHtcbiAgICAgICAgaWYgKHN0YXRlLmR1ZXMgJiYgc3RhdGUuZHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgYXdhaXQgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUF1ZGlvU2VydmljZS5wbGF5KCdiaWtlYmVsbCcpXG4gICAgICAgICAgICBpZiAodGhpcy5sZWFkZXJMaW5lKSB0aGlzLmxlYWRlckxpbmUucmVtb3ZlKClcbiAgICAgICAgICAgIHRoaXMubGVhZGVyTGluZSA9IGF3YWl0IG5ldyBMZWFkZXJMaW5lKFxuICAgICAgICAgICAgICB0aGlzLmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdEcmluZ0Zyb20nKSxcbiAgICAgICAgICAgICAgdGhpcy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnRHJpbmdUbycpLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aDogJ21hZ25ldCcsXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjMEEwQTBBJyxcbiAgICAgICAgICAgICAgICBzaXplOiAyLFxuICAgICAgICAgICAgICAgIHN0YXJ0U29ja2V0OiAnbGVmdCcsXG4gICAgICAgICAgICAgICAgZW5kU29ja2V0OiAndG9wJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbkJ5V2luZG93UmVzaXplOiB0cnVlLFxuICAgICAgICAgICAgICAgIGhpZGU6IHRydWUsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC8vIHRoaXMuZG9jdW1lbnRcbiAgICAgICAgICAgIC8vICAgLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdhcHAtaW52b2ljZXMnKVswXVxuICAgICAgICAgICAgLy8gICAuYXBwZW5kKHRoaXMuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbGVhZGVyLWxpbmUnKVswXSlcbiAgICAgICAgICAgIHRoaXMubGVhZGVyTGluZS5zaG93KClcbiAgICAgICAgICB9LCA1MDApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgaW9uVmlld1dpbGxMZWF2ZSgpIHtcbiAgICBpZiAodGhpcy5sZWFkZXJMaW5lKSB0aGlzLmxlYWRlckxpbmUucmVtb3ZlKClcbiAgICBhd2FpdCBCcm93c2VyLnJlbW92ZUFsbExpc3RlbmVycygpXG4gIH1cblxuICBoYW5kbGVSZWZyZXNoKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLnJlZnJlc2goKS50aGVuKCgpID0+IHtcbiAgICAgIGV2ZW50LnRhcmdldC5jb21wbGV0ZSgpXG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIHJlZnJlc2goKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICh0aGlzLmxlYWRlckxpbmUpIHRoaXMubGVhZGVyTGluZS5oaWRlKClcbiAgICAgIHRoaXMuaW52b2ljZXNTdGF0ZSA9IHsgc3RhdGU6ICdsb2FkaW5nJyB9XG4gICAgICB0aGlzLmZhY3R1cmVTZXJ2aWNlLmdldEZhY3R1cmVzKCkudGhlbigoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgb3BlbkluQXBwQnJvd3Nlcih1cmw6IHN0cmluZykge1xuICAgIGF3YWl0IEJyb3dzZXIub3Blbih7IHVybCwgcHJlc2VudGF0aW9uU3R5bGU6ICdwb3BvdmVyJyB9KVxuICAgIGF3YWl0IEJyb3dzZXIuYWRkTGlzdGVuZXIoJ2Jyb3dzZXJGaW5pc2hlZCcsICgpID0+IHtcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMucmVmcmVzaCgpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbiIsICI8YXBwLWhlYWRlciBbZGVmYXVsdEhyZWZdPVwiJy9hY2NvdW50J1wiPjwvYXBwLWhlYWRlcj5cbkBpZihpbnZvaWNlc1N0YXRlLnN0YXRlID09PSAnbG9hZGluZycpe1xuPGlvbi1wcm9ncmVzcy1iYXIgdHlwZT1cImluZGV0ZXJtaW5hdGVcIj48L2lvbi1wcm9ncmVzcy1iYXI+XG59XG5cbjxpb24tY29udGVudCBjbGFzcz1cImlvbi1wYWRkaW5nXCI+XG4gIDxpb24tcm93IGNsYXNzPVwiaW9uLWp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICA8aW9uLWNvbCBzaXplPVwiMTJcIiBzaXplLW1kPVwiOFwiIHNpemUtbGc9XCI2XCI+XG4gICAgICA8aW9uLXJlZnJlc2hlciBzbG90PVwiZml4ZWRcIiAoaW9uUmVmcmVzaCk9XCJoYW5kbGVSZWZyZXNoKCRldmVudClcIj5cbiAgICAgIDwvaW9uLXJlZnJlc2hlcj5cblxuICAgICAgQGlmKGludm9pY2VzU3RhdGUuc3RhdGUgPT09ICdmYWN0dXJlcycpeyBAaWYoaW52b2ljZXNTdGF0ZS5kdWVzICYmXG4gICAgICBpbnZvaWNlc1N0YXRlLmR1ZXMubGVuZ3RoID4gMCl7XG5cbiAgICAgIDxoMSBjbGFzcz1cImlvbi1tYXJnaW4taG9yaXpvbnRhbFwiPlxuICAgICAgICB7eyAnaW52b2ljZXMudW5wYWlkX3RpdGxlJyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgPC9oMT5cbiAgICAgIDxpb24tY2FyZCBjbGFzcz1cImlvbi1tYXJnaW5cIiBpZD1cIkRyaW5nRnJvbVwiPlxuICAgICAgICA8aW9uLWNhcmQtY29udGVudD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW9uLWZsb2F0LWxlZnRcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPVwiYXNzZXRzL3N2Zy9iaWtlYmVsbC5zdmdcIlxuICAgICAgICAgICAgICBjbGFzcz1cImlvbi1tYXJnaW4tZW5kXCJcbiAgICAgICAgICAgICAgYWx0PVwie3sgJ2ludm9pY2VzLmJlbGxfaWNvbl9hbHQnIHwgdHJhbnNsYXRlIH19XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHA+e3sgJ2ludm9pY2VzLnVucGFpZF9tZXNzYWdlJyB8IHRyYW5zbGF0ZSB9fTwvcD5cbiAgICAgICAgPC9pb24tY2FyZC1jb250ZW50PlxuICAgICAgPC9pb24tY2FyZD5cbiAgICAgIDxpb24tbGlzdCBjbGFzcz1cImlvbi1tYXJnaW4tdG9wXCIgaWQ9XCJEcmluZ1RvXCI+XG4gICAgICAgIDxpb24taXRlbSAqbmdGb3I9XCJsZXQgaW52b2ljZSBvZiBpbnZvaWNlc1N0YXRlLmR1ZXNcIiBkZXRhaWw9XCJmYWxzZVwiPlxuICAgICAgICAgIDxpb24taWNvbiBzbG90PVwic3RhcnRcIiBuYW1lPVwiZG93bmxvYWQtb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgPGlvbi1sYWJlbD5cbiAgICAgICAgICAgIDxzdHJvbmc+I3t7aW52b2ljZS5udW1iZXJ9fTwvc3Ryb25nPlxuICAgICAgICAgICAgPGlvbi10ZXh0IFtjb2xvcl09XCInZGFuZ2VyJ1wiXG4gICAgICAgICAgICAgID57eyAnaW52b2ljZXMuc3RhdHVzLicgKyBpbnZvaWNlLnN0YXR1cyB8IHRyYW5zbGF0ZSB9fTwvaW9uLXRleHRcbiAgICAgICAgICAgID48YnIgLz5cbiAgICAgICAgICAgIDxpb24tbm90ZSBjb2xvcj1cIm1lZGl1bVwiIGNsYXNzPVwiaW9uLXRleHQtd3JhcFwiPlxuICAgICAgICAgICAgICB7eyBpbnZvaWNlLmNyZWF0ZWQhICogMTAwMCB8IGRhdGUgOiAnZGQvTU0veXl5eSBISDptbScgfX1cbiAgICAgICAgICAgIDwvaW9uLW5vdGU+XG4gICAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1ldGFkYXRhLWVuZC13cmFwcGVyXCIgc2xvdD1cImVuZFwiPlxuICAgICAgICAgICAgPGlvbi1ub3RlIGNvbG9yPVwibWVkaXVtXCJcbiAgICAgICAgICAgICAgPnt7aW52b2ljZS5hbW91bnRfZmluYWwhIC8gMTAwIH194oKsPC9pb24tbm90ZVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPGlvbi1idXR0b25cbiAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cIm9wZW5JbkFwcEJyb3dzZXIoaW52b2ljZS5zdGF0dXMgPT09ICdwYWlkJyA/IGludm9pY2UucGRmX3VybCEgOiBpbnZvaWNlLmhvc3RlZF9pbnZvaWNlX3VybCEpXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3sgJ2ludm9pY2VzLnBheV9idXR0b24nIHwgdHJhbnNsYXRlIH19PC9pb24tYnV0dG9uXG4gICAgICAgICAgICA+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICA8L2lvbi1saXN0PlxuICAgICAgfVxuXG4gICAgICA8aDEgY2xhc3M9XCJpb24tbWFyZ2luXCI+e3sgJ2ludm9pY2VzLnRpdGxlJyB8IHRyYW5zbGF0ZSB9fTwvaDE+XG4gICAgICBAaWYoaW52b2ljZXNTdGF0ZS5pbnZvaWNlcy5sZW5ndGggPiAwKXtcbiAgICAgIDxpb24tbGlzdD5cbiAgICAgICAgPGlvbi1pdGVtXG4gICAgICAgICAgW2hyZWZdPVwiaW52b2ljZS5wZGZfdXJsXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICpuZ0Zvcj1cImxldCBpbnZvaWNlIG9mIGludm9pY2VzU3RhdGUuaW52b2ljZXNcIlxuICAgICAgICAgIGRldGFpbD1cImZhbHNlXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxpb24taWNvbiBzbG90PVwic3RhcnRcIiBuYW1lPVwiZG93bmxvYWQtb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgPGlvbi1sYWJlbD5cbiAgICAgICAgICAgIDxzdHJvbmc+I3t7aW52b2ljZS5udW1iZXIgfHwgJ04vQSd9fTwvc3Ryb25nPlxuICAgICAgICAgICAgPGlvbi10ZXh0IGNvbG9yPVwic3VjY2Vzc1wiXG4gICAgICAgICAgICAgID57eyAnaW52b2ljZXMuc3RhdHVzLicgKyBpbnZvaWNlLnN0YXR1cyB8IHRyYW5zbGF0ZSB9fTwvaW9uLXRleHRcbiAgICAgICAgICAgID48YnIgLz5cbiAgICAgICAgICAgIDxpb24tbm90ZSBjb2xvcj1cIm1lZGl1bVwiIGNsYXNzPVwiaW9uLXRleHQtd3JhcFwiPlxuICAgICAgICAgICAgICB7eyBpbnZvaWNlLmNyZWF0ZWQhICogMTAwMCB8IGRhdGUgOiAnZGQvTU0veXl5eSBISDptbScgfX1cbiAgICAgICAgICAgIDwvaW9uLW5vdGU+XG4gICAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1ldGFkYXRhLWVuZC13cmFwcGVyXCIgc2xvdD1cImVuZFwiPlxuICAgICAgICAgICAgPGlvbi1ub3RlIGNvbG9yPVwibWVkaXVtXCJcbiAgICAgICAgICAgICAgPnt7aW52b2ljZS5hbW91bnRfZmluYWwhIC8gMTAwIH194oKsPC9pb24tbm90ZVxuICAgICAgICAgICAgPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgPC9pb24tbGlzdD5cbiAgICAgIH0gfSBAZWxzZSBpZihpbnZvaWNlc1N0YXRlLnN0YXRlID09PSAndXBjb21pbmcnKXtcbiAgICAgIDxpb24tcm93PlxuICAgICAgICA8aW9uLWNvbD5cbiAgICAgICAgICA8aDE+e3sgJ2ludm9pY2VzLnRpdGxlJyB8IHRyYW5zbGF0ZSB9fTwvaDE+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBAaWYoaW52b2ljZXNTdGF0ZS51cGNvbWluZy5hbW91bnQhID09PSAwKSB7IHt7XG4gICAgICAgICAgICAnaW52b2ljZXMubm9fcGFpZF90cmlwcycgfCB0cmFuc2xhdGUgfX0gfSBAZWxzZSB7IHt7XG4gICAgICAgICAgICAnaW52b2ljZXMudXBjb21pbmcnIHwgdHJhbnNsYXRlOnsgYW1vdW50OlxuICAgICAgICAgICAgaW52b2ljZXNTdGF0ZS51cGNvbWluZy5hbW91bnQhIC8gMTAwIH0gfX0gfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9pb24tY29sPlxuICAgICAgPC9pb24tcm93PlxuICAgICAgPGlvbi1idXR0b24gW3JvdXRlckxpbmtdPVwiWycvcmVudGluZyddXCJcbiAgICAgICAgPnt7ICdpbnZvaWNlcy5zdGFydF9yZW50YWwnIHwgdHJhbnNsYXRlIH19PC9pb24tYnV0dG9uXG4gICAgICA+XG4gICAgICB9IEBlbHNlIGlmKGludm9pY2VzU3RhdGUuc3RhdGUgPT09ICdub0ludm9pY2VzJyl7XG4gICAgICA8aW9uLXJvdz5cbiAgICAgICAgPGlvbi1jb2w+XG4gICAgICAgICAgPGgxPnt7ICdpbnZvaWNlcy50aXRsZScgfCB0cmFuc2xhdGUgfX08L2gxPlxuICAgICAgICAgIDxwPnt7ICdpbnZvaWNlcy5ub19wYWlkX3RyaXBzJyB8IHRyYW5zbGF0ZSB9fTwvcD5cbiAgICAgICAgPC9pb24tY29sPlxuICAgICAgPC9pb24tcm93PlxuICAgICAgPGlvbi1idXR0b24gW3JvdXRlckxpbmtdPVwiWycvcmVudGluZyddXCJcbiAgICAgICAgPnt7ICdpbnZvaWNlcy5zdGFydF9yZW50YWwnIHwgdHJhbnNsYXRlIH19PC9pb24tYnV0dG9uXG4gICAgICA+XG4gICAgICB9IEBlbHNlIGlmKGludm9pY2VzU3RhdGUuc3RhdGUgPT09ICdsb2FkaW5nJyl7XG4gICAgICA8aW9uLWxpc3Q+XG4gICAgICAgIDxpb24taXRlbSAqbmdGb3I9XCJsZXQgaSBvZiBbXS5jb25zdHJ1Y3Rvcihza2VsZXRvbkNvdW50KVwiPlxuICAgICAgICAgIDxpb24tdGh1bWJuYWlsIHNsb3Q9XCJzdGFydFwiPlxuICAgICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0IFthbmltYXRlZF09XCJ0cnVlXCI+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgICA8L2lvbi10aHVtYm5haWw+XG4gICAgICAgICAgPGlvbi1sYWJlbD5cbiAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0XG4gICAgICAgICAgICAgICAgW2FuaW1hdGVkXT1cInRydWVcIlxuICAgICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDgwJVwiXG4gICAgICAgICAgICAgID48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHRcbiAgICAgICAgICAgICAgICBbYW5pbWF0ZWRdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogNjAlXCJcbiAgICAgICAgICAgICAgPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPGlvbi1za2VsZXRvbi10ZXh0XG4gICAgICAgICAgICAgICAgW2FuaW1hdGVkXT1cInRydWVcIlxuICAgICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDMwJVwiXG4gICAgICAgICAgICAgID48L2lvbi1za2VsZXRvbi10ZXh0PlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgPC9pb24tbGlzdD5cbiAgICAgIH1cbiAgICA8L2lvbi1jb2w+XG4gIDwvaW9uLXJvdz5cbjwvaW9uLWNvbnRlbnQ+XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
