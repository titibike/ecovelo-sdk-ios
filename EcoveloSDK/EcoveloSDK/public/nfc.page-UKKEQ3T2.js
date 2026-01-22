import {
  NfcService
} from "./chunk-EZDNC2D6.js";
import {
  HeaderComponent
} from "./chunk-AVAJ3QHV.js";
import "./chunk-K2AWDLYV.js";
import "./chunk-WJQU3GMM.js";
import "./chunk-CHFOG66O.js";
import "./chunk-RAVV2QIY.js";
import "./chunk-T6WE2PS5.js";
import "./chunk-XK4I5MHM.js";
import "./chunk-GVYZRG6X.js";
import "./chunk-FOJAXRYS.js";
import "./chunk-Y7HI6USV.js";
import {
  ErrorHandlerService
} from "./chunk-SARQRLZR.js";
import {
  addIcons,
  idCardOutline,
  trashOutline
} from "./chunk-3E6DEK7U.js";
import {
  StorageService
} from "./chunk-U6SJAXLK.js";
import {
  CommonModule,
  Component,
  DatePipe,
  FormsModule,
  IonBadge,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCol,
  IonContent,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonProgressBar,
  IonRefresher,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonSkeletonText,
  IonText,
  IonThumbnail,
  JsonPipe,
  LoadingController,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  PatternValidator,
  RequiredValidator,
  TranslateModule,
  TranslatePipe,
  TranslateService,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
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

// src/app/pages/account/nfc/nfc.page.ts
function NfcPage_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-progress-bar", 1);
  }
}
function NfcPage_Conditional_6_ion_thumbnail_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-thumbnail", 19);
    \u0275\u0275element(1, "img", 20);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.newPassState.model.picture, \u0275\u0275sanitizeUrl)("alt", \u0275\u0275pipeBind1(2, 2, "nfc.card_image"));
  }
}
function NfcPage_Conditional_6_ion_icon_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 21);
  }
}
function NfcPage_Conditional_6_ion_select_option_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-select-option", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const model_r3 = ctx.$implicit;
    \u0275\u0275property("value", model_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(model_r3.model);
  }
}
function NfcPage_Conditional_6_ion_text_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-text", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("color", ctx_r1.newPassState.newPass.valid === void 0 ? "dark" : ctx_r1.newPassState.newPass.valid ? "success" : "danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.newPassState.model.prefix);
  }
}
function NfcPage_Conditional_6_ion_text_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-text", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("color", ctx_r1.newPassState.newPass.valid === void 0 ? "dark" : ctx_r1.newPassState.newPass.valid ? "success" : "danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.newPassState.model.suffix);
  }
}
function NfcPage_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-card")(1, "ion-card-header")(2, "ion-card-subtitle");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "ion-card-content")(6, "ion-list")(7, "ion-item", 9);
    \u0275\u0275template(8, NfcPage_Conditional_6_ion_thumbnail_8_Template, 3, 4, "ion-thumbnail", 10)(9, NfcPage_Conditional_6_ion_icon_9_Template, 1, 0, "ion-icon", 11);
    \u0275\u0275elementStart(10, "ion-select", 12);
    \u0275\u0275twoWayListener("ngModelChange", function NfcPage_Conditional_6_Template_ion_select_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newPassState.model, $event) || (ctx_r1.newPassState.model = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(11, NfcPage_Conditional_6_ion_select_option_11_Template, 2, 2, "ion-select-option", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "ion-item", 9)(13, "ion-input", 14);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function NfcPage_Conditional_6_Template_ion_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newPassState.newPass.pass, $event) || (ctx_r1.newPassState.newPass.pass = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ionInput", function NfcPage_Conditional_6_Template_ion_input_ionInput_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPassChange($event));
    });
    \u0275\u0275template(16, NfcPage_Conditional_6_ion_text_16_Template, 2, 2, "ion-text", 15)(17, NfcPage_Conditional_6_ion_text_17_Template, 2, 2, "ion-text", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "json");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "ion-note", 17);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "ion-button", 18);
    \u0275\u0275listener("click", function NfcPage_Conditional_6_Template_ion_button_click_23_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.associatePass());
    });
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 15, "nfc.associate_new_card"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.newPassState.model.picture);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.newPassState.model.picture);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newPassState.model);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.newPassState.models);
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(14, 17, "nfc.card_number"))("pattern", ctx_r1.newPassState.model.regex)("errorText", \u0275\u0275pipeBind1(15, 19, "nfc.invalid_format"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newPassState.newPass.pass);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.newPassState.model.prefix);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.newPassState.model.suffix);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 21, ctx_r1.passModels), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 23, "nfc.single_card_warning"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.newPassState.newPass.valid === void 0 || !ctx_r1.newPassState.newPass.valid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 25, "nfc.associate_button"), "");
  }
}
function NfcPage_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "nfc.no_cards_found"), " ");
  }
}
function NfcPage_Conditional_11_ion_item_1_ion_badge_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-badge");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "nfc.active"));
  }
}
function NfcPage_Conditional_11_ion_item_1_ion_label_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-label", 29);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pass_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(2, 2, "nfc.associated_on"), " ", \u0275\u0275pipeBind2(3, 4, pass_r4.take_timestamp * 1e3, "dd/MM HH:mm"), "");
  }
}
function NfcPage_Conditional_11_ion_item_1_ion_label_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-label", 29);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pass_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(2, 2, "nfc.dissociated_on"), " ", \u0275\u0275pipeBind2(3, 4, pass_r4.return_timestamp * 1e3, "dd/MM HH:mm"), "");
  }
}
function NfcPage_Conditional_11_ion_item_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-icon", 30);
    \u0275\u0275listener("click", function NfcPage_Conditional_11_ion_item_1_Conditional_6_Template_ion_icon_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const pass_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.dissociatePass(pass_r4.uid));
    });
    \u0275\u0275elementEnd();
  }
}
function NfcPage_Conditional_11_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item", 9)(1, "ion-label");
    \u0275\u0275text(2);
    \u0275\u0275template(3, NfcPage_Conditional_11_ion_item_1_ion_badge_3_Template, 3, 3, "ion-badge", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, NfcPage_Conditional_11_ion_item_1_ion_label_4_Template, 4, 7, "ion-label", 27)(5, NfcPage_Conditional_11_ion_item_1_ion_label_5_Template, 4, 7, "ion-label", 27)(6, NfcPage_Conditional_11_ion_item_1_Conditional_6_Template, 1, 0, "ion-icon", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pass_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", pass_r4.uid, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !pass_r4.return_timestamp);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !pass_r4.return_timestamp);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", pass_r4.return_timestamp);
    \u0275\u0275advance();
    \u0275\u0275conditional(!pass_r4.return_timestamp ? 6 : -1);
  }
}
function NfcPage_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list", 8);
    \u0275\u0275template(1, NfcPage_Conditional_11_ion_item_1_Template, 7, 5, "ion-item", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("inset", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.nfcState.passes.data);
  }
}
function NfcPage_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list", 8)(1, "ion-item", 9);
    \u0275\u0275element(2, "ion-skeleton-text", 31);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("animated", true);
  }
}
var _NfcPage = class _NfcPage {
  constructor(nfcService, storage, loadingCtrl, translateService, errorHandler) {
    this.nfcService = nfcService;
    this.storage = storage;
    this.loadingCtrl = loadingCtrl;
    this.translateService = translateService;
    this.errorHandler = errorHandler;
    this.newPassState = { state: "loading" };
    addIcons({ idCardOutline, trashOutline });
    this.storage.get("program").then((program) => {
      var _a;
      if (program && ((_a = program.config.authorised_passes) == null ? void 0 : _a.length) > 0) {
        this.newPassState = {
          state: "models",
          model: program.config.authorised_passes[0],
          models: program.config.authorised_passes,
          newPass: { pass: "" }
        };
      } else {
        const passes = [
          { model: this.translateService.instant("nfc.card_model") }
        ];
        this.newPassState = {
          state: "models",
          model: passes[0],
          models: passes,
          newPass: { pass: "" }
        };
      }
    });
    this.nfcService.nfcState.subscribe((state) => {
      this.nfcState = state;
    });
  }
  handleRefresh(event) {
    this.refresh().then(() => {
      event.target.complete();
    });
  }
  refresh() {
    return new Promise((resolve, reject) => {
      this.nfcService.getPasses().then(() => {
        resolve();
      });
    });
  }
  onPassChange(event) {
    if (this.newPassState.state === "models") {
      this.newPassState.newPass.valid = event.detail.event.target.validity.valid;
    }
  }
  associatePass() {
    return __async(this, null, function* () {
      if (this.newPassState.state === "models") {
        const loading = yield this.loadingCtrl.create({
          message: this.translateService.instant("pass.associating"),
          duration: 3e3
        });
        loading.present();
        this.nfcService.associatePass(this.newPassState.newPass.pass, this.newPassState.model.model).then(() => __async(this, null, function* () {
          yield loading.dismiss();
          this.refresh();
        })).catch((err) => __async(this, null, function* () {
          yield loading.dismiss();
          this.errorHandler.handleError(err);
        }));
      }
    });
  }
  dissociatePass(pass) {
    return __async(this, null, function* () {
      const loading = yield this.loadingCtrl.create({
        message: this.translateService.instant("pass.dissociating")
      });
      loading.present();
      this.nfcService.disassociatePass(pass).then(() => __async(this, null, function* () {
        yield loading.dismiss();
        this.refresh();
      })).catch((err) => __async(this, null, function* () {
        yield loading.dismiss();
        this.errorHandler.handleError(err);
      }));
    });
  }
};
_NfcPage.\u0275fac = function NfcPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NfcPage)(\u0275\u0275directiveInject(NfcService), \u0275\u0275directiveInject(StorageService), \u0275\u0275directiveInject(LoadingController), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(ErrorHandlerService));
};
_NfcPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NfcPage, selectors: [["app-nfc"]], decls: 13, vars: 7, consts: [[3, "defaultHref"], ["type", "indeterminate"], [1, "ion-padding"], [1, "ion-justify-content-center"], ["size", "12", "size-md", "8", "size-lg", "6"], ["slot", "fixed", 3, "ionRefresh"], [1, "ion-margin-bottom", "ion-margin-horizontal"], [1, "ion-margin-horizontal"], [3, "inset"], ["color", "grey"], ["slot", "start", 4, "ngIf"], ["name", "id-card-outline", "size", "large", "slot", "start", 4, "ngIf"], ["interface", "popover", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "labelPlacement", "floating", "required", "", 3, "ngModelChange", "ionInput", "label", "pattern", "errorText", "ngModel"], ["slot", "start", 3, "color", 4, "ngIf"], ["slot", "end", 3, "color", 4, "ngIf"], ["color", "medium"], ["color", "primary", "shape", "round", 1, "ion-margin-vertical", "ion-float-right", 3, "click", "disabled"], ["slot", "start"], [3, "src", "alt"], ["name", "id-card-outline", "size", "large", "slot", "start"], [3, "value"], ["slot", "start", 3, "color"], ["slot", "end", 3, "color"], ["color", "grey", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["slot", "end", 4, "ngIf"], ["name", "trash-outline", "slot", "end", "color", "danger", "size", "small"], ["slot", "end"], ["name", "trash-outline", "slot", "end", "color", "danger", "size", "small", 3, "click"], [3, "animated"]], template: function NfcPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-header", 0);
    \u0275\u0275template(1, NfcPage_Conditional_1_Template, 1, 0, "ion-progress-bar", 1);
    \u0275\u0275elementStart(2, "ion-content", 2)(3, "ion-row", 3)(4, "ion-col", 4)(5, "ion-refresher", 5);
    \u0275\u0275listener("ionRefresh", function NfcPage_Template_ion_refresher_ionRefresh_5_listener($event) {
      return ctx.handleRefresh($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, NfcPage_Conditional_6_Template, 26, 27, "ion-card");
    \u0275\u0275elementStart(7, "h4", 6);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, NfcPage_Conditional_10_Template, 3, 3, "p", 7)(11, NfcPage_Conditional_11_Template, 2, 2, "ion-list", 8)(12, NfcPage_Conditional_12_Template, 3, 2, "ion-list", 8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("defaultHref", "/account");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.nfcState.state === "loading" ? 1 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.newPassState.state === "models" ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 5, "nfc.my_cards"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.nfcState.state === "noData" ? 10 : ctx.nfcState.state === "loaded" ? 11 : ctx.nfcState.state === "loading" ? 12 : -1);
  }
}, dependencies: [
  IonContent,
  CommonModule,
  NgForOf,
  NgIf,
  JsonPipe,
  DatePipe,
  FormsModule,
  NgControlStatus,
  RequiredValidator,
  PatternValidator,
  NgModel,
  IonRefresher,
  IonProgressBar,
  HeaderComponent,
  IonSkeletonText,
  IonList,
  IonItem,
  IonInput,
  IonButton,
  TranslateModule,
  TranslatePipe,
  IonSelect,
  IonSelectOption,
  IonText,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonThumbnail,
  IonIcon,
  IonNote,
  IonLabel,
  IonBadge,
  IonRow,
  IonCol
], encapsulation: 2 });
var NfcPage = _NfcPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NfcPage, [{
    type: Component,
    args: [{ selector: "app-nfc", imports: [
      IonContent,
      CommonModule,
      FormsModule,
      IonRefresher,
      IonProgressBar,
      HeaderComponent,
      IonSkeletonText,
      IonList,
      IonItem,
      IonInput,
      IonButton,
      TranslateModule,
      IonSelect,
      IonSelectOption,
      IonText,
      IonCard,
      IonCardHeader,
      IonCardSubtitle,
      IonCardContent,
      IonThumbnail,
      IonIcon,
      IonNote,
      IonLabel,
      IonBadge,
      IonRow,
      IonCol
    ], template: `<app-header [defaultHref]="'/account'"></app-header>
@if(nfcState.state === 'loading'){
<ion-progress-bar type="indeterminate"></ion-progress-bar>
}

<ion-content class="ion-padding">
  <ion-row class="ion-justify-content-center">
    <ion-col size="12" size-md="8" size-lg="6">
      <ion-refresher slot="fixed" (ionRefresh)="handleRefresh($event)">
      </ion-refresher>

      @if(newPassState.state === 'models'){
      <ion-card>
        <ion-card-header>
          <ion-card-subtitle
            >{{ 'nfc.associate_new_card' | translate }}</ion-card-subtitle
          >
        </ion-card-header>
        <ion-card-content>
          <ion-list>
            <ion-item color="grey">
              <ion-thumbnail slot="start" *ngIf="newPassState.model.picture">
                <img
                  [src]="newPassState.model.picture"
                  [alt]="'nfc.card_image' | translate"
                />
              </ion-thumbnail>
              <ion-icon
                name="id-card-outline"
                size="large"
                slot="start"
                *ngIf="!newPassState.model.picture"
              ></ion-icon>
              <ion-select interface="popover" [(ngModel)]="newPassState.model">
                <ion-select-option
                  [value]="model"
                  *ngFor="let model of newPassState.models"
                  >{{ model.model }}</ion-select-option
                >
              </ion-select>
            </ion-item>
            <ion-item color="grey">
              <ion-input
                type="text"
                [label]="'nfc.card_number' | translate"
                labelPlacement="floating"
                [pattern]="newPassState.model.regex!"
                [errorText]="'nfc.invalid_format' | translate"
                required
                [(ngModel)]="newPassState.newPass.pass"
                (ionInput)="onPassChange($event)"
              >
                <ion-text
                  slot="start"
                  [color]="newPassState.newPass.valid === undefined ? 'dark' : newPassState.newPass.valid ? 'success' : 'danger'"
                  *ngIf="newPassState.model!.prefix"
                  >{{newPassState.model!.prefix}}</ion-text
                ><ion-text
                  slot="end"
                  [color]="newPassState.newPass.valid === undefined ? 'dark' : newPassState.newPass.valid ? 'success' : 'danger'"
                  *ngIf="newPassState.model!.suffix"
                  >{{newPassState.model!.suffix}}</ion-text
                ></ion-input
              >
            </ion-item>

            {{ passModels | json}}
          </ion-list>
          <ion-note color="medium">
            {{ 'nfc.single_card_warning' | translate }}
          </ion-note>
          <ion-button
            class="ion-margin-vertical ion-float-right"
            color="primary"
            shape="round"
            [disabled]="newPassState.newPass.valid === undefined || !newPassState.newPass.valid"
            (click)="associatePass()"
          >
            {{ 'nfc.associate_button' | translate }}</ion-button
          >
        </ion-card-content>
      </ion-card>
      }

      <h4 class="ion-margin-bottom ion-margin-horizontal">
        {{ 'nfc.my_cards' | translate }}
      </h4>
      @if(nfcState.state === 'noData'){
      <p class="ion-margin-horizontal">
        {{ 'nfc.no_cards_found' | translate }}
      </p>
      } @else if(nfcState.state === 'loaded'){
      <ion-list [inset]="true">
        <ion-item color="grey" *ngFor="let pass of nfcState.passes.data!">
          <ion-label
            >{{ pass.uid }}
            <ion-badge *ngIf="!pass.return_timestamp"
              >{{ 'nfc.active' | translate }}</ion-badge
            ></ion-label
          >
          <ion-label slot="end" *ngIf="!pass.return_timestamp"
            >{{ 'nfc.associated_on' | translate }} {{ pass.take_timestamp! *
            1000 | date:'dd/MM HH:mm' }}</ion-label
          >
          <ion-label slot="end" *ngIf="pass.return_timestamp"
            >{{ 'nfc.dissociated_on' | translate }} {{ pass.return_timestamp *
            1000 | date:'dd/MM HH:mm' }}</ion-label
          >
          @if(!pass.return_timestamp){
          <ion-icon
            name="trash-outline"
            slot="end"
            color="danger"
            size="small"
            (click)="dissociatePass(pass.uid!)"
          ></ion-icon>
          }
        </ion-item>
      </ion-list>
      }@else if(nfcState.state === 'loading'){
      <ion-list [inset]="true">
        <ion-item color="grey">
          <ion-skeleton-text [animated]="true"></ion-skeleton-text>
        </ion-item>
      </ion-list>
      }
    </ion-col>
  </ion-row>
</ion-content>
` }]
  }], () => [{ type: NfcService }, { type: StorageService }, { type: LoadingController }, { type: TranslateService }, { type: ErrorHandlerService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NfcPage, { className: "NfcPage", filePath: "src/app/pages/account/nfc/nfc.page.ts", lineNumber: 89 });
})();
export {
  NfcPage
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wYWdlcy9hY2NvdW50L25mYy9uZmMucGFnZS50cyIsICJzcmMvYXBwL3BhZ2VzL2FjY291bnQvbmZjL25mYy5wYWdlLmh0bWwiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJ1xuaW1wb3J0IHtcbiAgSW9uQ29udGVudCxcbiAgSW9uUmVmcmVzaGVyLFxuICBJb25Qcm9ncmVzc0JhcixcbiAgSW9uU2tlbGV0b25UZXh0LFxuICBJb25MaXN0LFxuICBJb25JdGVtLFxuICBJb25JbnB1dCxcbiAgSW9uQnV0dG9uLFxuICBJb25TZWxlY3QsXG4gIElvblNlbGVjdE9wdGlvbixcbiAgSW9uVGV4dCxcbiAgSW9uQ2FyZCxcbiAgSW9uQ2FyZEhlYWRlcixcbiAgSW9uQ2FyZFN1YnRpdGxlLFxuICBJb25DYXJkQ29udGVudCxcbiAgSW9uVGh1bWJuYWlsLFxuICBJb25JY29uLFxuICBJb25Ob3RlLFxuICBJb25MYWJlbCxcbiAgSW9uQmFkZ2UsXG4gIElvblJvdyxcbiAgSW9uQ29sLFxuICBMb2FkaW5nQ29udHJvbGxlcixcbn0gZnJvbSAnQGlvbmljL2FuZ3VsYXIvc3RhbmRhbG9uZSdcbmltcG9ydCB7IE5mY1NlcnZpY2UsIE5mY1N0YXRlIH0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy9hcGktd3JhcHBlcnMvbmZjLnNlcnZpY2UnXG5pbXBvcnQgeyBIZWFkZXJDb21wb25lbnQgfSBmcm9tICdzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQnXG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gJ3NyYy9hcHAvc2VydmljZXMvdXRpbHMvc3RvcmFnZS5zZXJ2aWNlJ1xuaW1wb3J0IHsgYWRkSWNvbnMgfSBmcm9tICdpb25pY29ucydcbmltcG9ydCB7IGlkQ2FyZE91dGxpbmUsIHRyYXNoT3V0bGluZSB9IGZyb20gJ2lvbmljb25zL2ljb25zJ1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlLCBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSdcbmltcG9ydCB7IEVycm9ySGFuZGxlclNlcnZpY2UgfSBmcm9tICdzcmMvYXBwL3NlcnZpY2VzL3V0aWxzL2Vycm9yLWhhbmRsZXIuc2VydmljZSdcblxuZXhwb3J0IHR5cGUgUGFzc01vZGVsID0ge1xuICBtb2RlbDogc3RyaW5nXG4gIHBpY3R1cmU/OiBzdHJpbmdcbiAgcHJlZml4Pzogc3RyaW5nXG4gIHN1ZmZpeD86IHN0cmluZ1xuICByZWdleD86IFJlZ0V4cFxufVxuXG5leHBvcnQgdHlwZSBOZXdQYXNzU3RhdGUgPVxuICB8IHtcbiAgICAgIHN0YXRlOiAnbG9hZGluZydcbiAgICB9XG4gIHwge1xuICAgICAgc3RhdGU6ICdtb2RlbHMnXG4gICAgICBtb2RlbDogUGFzc01vZGVsXG4gICAgICBtb2RlbHM6IFBhc3NNb2RlbFtdXG4gICAgICBuZXdQYXNzOiB7IHBhc3M6IHN0cmluZzsgdmFsaWQ/OiBib29sZWFuIH1cbiAgICB9XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1uZmMnLFxuICB0ZW1wbGF0ZVVybDogJy4vbmZjLnBhZ2UuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25mYy5wYWdlLnNjc3MnXSxcbiAgaW1wb3J0czogW1xuICAgIElvbkNvbnRlbnQsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIElvblJlZnJlc2hlcixcbiAgICBJb25Qcm9ncmVzc0JhcixcbiAgICBIZWFkZXJDb21wb25lbnQsXG4gICAgSW9uU2tlbGV0b25UZXh0LFxuICAgIElvbkxpc3QsXG4gICAgSW9uSXRlbSxcbiAgICBJb25JbnB1dCxcbiAgICBJb25CdXR0b24sXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICAgIElvblNlbGVjdCxcbiAgICBJb25TZWxlY3RPcHRpb24sXG4gICAgSW9uVGV4dCxcbiAgICBJb25DYXJkLFxuICAgIElvbkNhcmRIZWFkZXIsXG4gICAgSW9uQ2FyZFN1YnRpdGxlLFxuICAgIElvbkNhcmRDb250ZW50LFxuICAgIElvblRodW1ibmFpbCxcbiAgICBJb25JY29uLFxuICAgIElvbk5vdGUsXG4gICAgSW9uTGFiZWwsXG4gICAgSW9uQmFkZ2UsXG4gICAgSW9uUm93LFxuICAgIElvbkNvbCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTmZjUGFnZSB7XG4gIG5mY1N0YXRlOiBOZmNTdGF0ZVxuICBwYXNzTW9kZWxzOiBhbnlbXVxuICBuZXdQYXNzU3RhdGU6IE5ld1Bhc3NTdGF0ZSA9IHsgc3RhdGU6ICdsb2FkaW5nJyB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBuZmNTZXJ2aWNlOiBOZmNTZXJ2aWNlLFxuICAgIHByaXZhdGUgc3RvcmFnZTogU3RvcmFnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBsb2FkaW5nQ3RybDogTG9hZGluZ0NvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgZXJyb3JIYW5kbGVyOiBFcnJvckhhbmRsZXJTZXJ2aWNlXG4gICkge1xuICAgIGFkZEljb25zKHsgaWRDYXJkT3V0bGluZSwgdHJhc2hPdXRsaW5lIH0pXG5cbiAgICB0aGlzLnN0b3JhZ2UuZ2V0KCdwcm9ncmFtJykudGhlbigocHJvZ3JhbSkgPT4ge1xuICAgICAgaWYgKHByb2dyYW0gJiYgcHJvZ3JhbS5jb25maWcuYXV0aG9yaXNlZF9wYXNzZXM/Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5uZXdQYXNzU3RhdGUgPSB7XG4gICAgICAgICAgc3RhdGU6ICdtb2RlbHMnLFxuICAgICAgICAgIG1vZGVsOiBwcm9ncmFtLmNvbmZpZy5hdXRob3Jpc2VkX3Bhc3NlcyFbMF0sXG4gICAgICAgICAgbW9kZWxzOiBwcm9ncmFtLmNvbmZpZy5hdXRob3Jpc2VkX3Bhc3NlcyEsXG4gICAgICAgICAgbmV3UGFzczogeyBwYXNzOiAnJyB9LFxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBwYXNzZXM6IFBhc3NNb2RlbFtdID0gW1xuICAgICAgICAgIHsgbW9kZWw6IHRoaXMudHJhbnNsYXRlU2VydmljZS5pbnN0YW50KCduZmMuY2FyZF9tb2RlbCcpIH0sXG4gICAgICAgIF1cbiAgICAgICAgdGhpcy5uZXdQYXNzU3RhdGUgPSB7XG4gICAgICAgICAgc3RhdGU6ICdtb2RlbHMnLFxuICAgICAgICAgIG1vZGVsOiBwYXNzZXNbMF0sXG4gICAgICAgICAgbW9kZWxzOiBwYXNzZXMsXG4gICAgICAgICAgbmV3UGFzczogeyBwYXNzOiAnJyB9LFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLm5mY1NlcnZpY2UubmZjU3RhdGUuc3Vic2NyaWJlKChzdGF0ZSkgPT4ge1xuICAgICAgdGhpcy5uZmNTdGF0ZSA9IHN0YXRlXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZVJlZnJlc2goZXZlbnQ6IGFueSkge1xuICAgIHRoaXMucmVmcmVzaCgpLnRoZW4oKCkgPT4ge1xuICAgICAgZXZlbnQudGFyZ2V0LmNvbXBsZXRlKClcbiAgICB9KVxuICB9XG5cbiAgcmVmcmVzaCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5uZmNTZXJ2aWNlLmdldFBhc3NlcygpLnRoZW4oKCkgPT4ge1xuICAgICAgICByZXNvbHZlKClcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIG9uUGFzc0NoYW5nZShldmVudDogYW55KSB7XG4gICAgaWYgKHRoaXMubmV3UGFzc1N0YXRlLnN0YXRlID09PSAnbW9kZWxzJykge1xuICAgICAgdGhpcy5uZXdQYXNzU3RhdGUubmV3UGFzcy52YWxpZCA9IGV2ZW50LmRldGFpbC5ldmVudC50YXJnZXQudmFsaWRpdHkudmFsaWRcbiAgICB9XG4gIH1cblxuICBhc3luYyBhc3NvY2lhdGVQYXNzKCkge1xuICAgIGlmICh0aGlzLm5ld1Bhc3NTdGF0ZS5zdGF0ZSA9PT0gJ21vZGVscycpIHtcbiAgICAgIGNvbnN0IGxvYWRpbmcgPSBhd2FpdCB0aGlzLmxvYWRpbmdDdHJsLmNyZWF0ZSh7XG4gICAgICAgIG1lc3NhZ2U6IHRoaXMudHJhbnNsYXRlU2VydmljZS5pbnN0YW50KCdwYXNzLmFzc29jaWF0aW5nJyksXG4gICAgICAgIGR1cmF0aW9uOiAzMDAwLFxuICAgICAgfSlcblxuICAgICAgbG9hZGluZy5wcmVzZW50KClcbiAgICAgIHRoaXMubmZjU2VydmljZVxuICAgICAgICAuYXNzb2NpYXRlUGFzcyhcbiAgICAgICAgICB0aGlzLm5ld1Bhc3NTdGF0ZS5uZXdQYXNzLnBhc3MsXG4gICAgICAgICAgdGhpcy5uZXdQYXNzU3RhdGUubW9kZWwubW9kZWxcbiAgICAgICAgKVxuICAgICAgICAudGhlbihhc3luYyAoKSA9PiB7XG4gICAgICAgICAgYXdhaXQgbG9hZGluZy5kaXNtaXNzKClcbiAgICAgICAgICB0aGlzLnJlZnJlc2goKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goYXN5bmMgKGVycikgPT4ge1xuICAgICAgICAgIGF3YWl0IGxvYWRpbmcuZGlzbWlzcygpXG4gICAgICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IoZXJyKVxuICAgICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGRpc3NvY2lhdGVQYXNzKHBhc3M6IHN0cmluZykge1xuICAgIGNvbnN0IGxvYWRpbmcgPSBhd2FpdCB0aGlzLmxvYWRpbmdDdHJsLmNyZWF0ZSh7XG4gICAgICBtZXNzYWdlOiB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuaW5zdGFudCgncGFzcy5kaXNzb2NpYXRpbmcnKSxcbiAgICB9KVxuXG4gICAgbG9hZGluZy5wcmVzZW50KClcbiAgICB0aGlzLm5mY1NlcnZpY2VcbiAgICAgIC5kaXNhc3NvY2lhdGVQYXNzKHBhc3MpXG4gICAgICAudGhlbihhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IGxvYWRpbmcuZGlzbWlzcygpXG4gICAgICAgIHRoaXMucmVmcmVzaCgpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGFzeW5jIChlcnIpID0+IHtcbiAgICAgICAgYXdhaXQgbG9hZGluZy5kaXNtaXNzKClcbiAgICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IoZXJyKVxuICAgICAgfSlcbiAgfVxufVxuIiwgIjxhcHAtaGVhZGVyIFtkZWZhdWx0SHJlZl09XCInL2FjY291bnQnXCI+PC9hcHAtaGVhZGVyPlxuQGlmKG5mY1N0YXRlLnN0YXRlID09PSAnbG9hZGluZycpe1xuPGlvbi1wcm9ncmVzcy1iYXIgdHlwZT1cImluZGV0ZXJtaW5hdGVcIj48L2lvbi1wcm9ncmVzcy1iYXI+XG59XG5cbjxpb24tY29udGVudCBjbGFzcz1cImlvbi1wYWRkaW5nXCI+XG4gIDxpb24tcm93IGNsYXNzPVwiaW9uLWp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICA8aW9uLWNvbCBzaXplPVwiMTJcIiBzaXplLW1kPVwiOFwiIHNpemUtbGc9XCI2XCI+XG4gICAgICA8aW9uLXJlZnJlc2hlciBzbG90PVwiZml4ZWRcIiAoaW9uUmVmcmVzaCk9XCJoYW5kbGVSZWZyZXNoKCRldmVudClcIj5cbiAgICAgIDwvaW9uLXJlZnJlc2hlcj5cblxuICAgICAgQGlmKG5ld1Bhc3NTdGF0ZS5zdGF0ZSA9PT0gJ21vZGVscycpe1xuICAgICAgPGlvbi1jYXJkPlxuICAgICAgICA8aW9uLWNhcmQtaGVhZGVyPlxuICAgICAgICAgIDxpb24tY2FyZC1zdWJ0aXRsZVxuICAgICAgICAgICAgPnt7ICduZmMuYXNzb2NpYXRlX25ld19jYXJkJyB8IHRyYW5zbGF0ZSB9fTwvaW9uLWNhcmQtc3VidGl0bGVcbiAgICAgICAgICA+XG4gICAgICAgIDwvaW9uLWNhcmQtaGVhZGVyPlxuICAgICAgICA8aW9uLWNhcmQtY29udGVudD5cbiAgICAgICAgICA8aW9uLWxpc3Q+XG4gICAgICAgICAgICA8aW9uLWl0ZW0gY29sb3I9XCJncmV5XCI+XG4gICAgICAgICAgICAgIDxpb24tdGh1bWJuYWlsIHNsb3Q9XCJzdGFydFwiICpuZ0lmPVwibmV3UGFzc1N0YXRlLm1vZGVsLnBpY3R1cmVcIj5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBbc3JjXT1cIm5ld1Bhc3NTdGF0ZS5tb2RlbC5waWN0dXJlXCJcbiAgICAgICAgICAgICAgICAgIFthbHRdPVwiJ25mYy5jYXJkX2ltYWdlJyB8IHRyYW5zbGF0ZVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9pb24tdGh1bWJuYWlsPlxuICAgICAgICAgICAgICA8aW9uLWljb25cbiAgICAgICAgICAgICAgICBuYW1lPVwiaWQtY2FyZC1vdXRsaW5lXCJcbiAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICAgIHNsb3Q9XCJzdGFydFwiXG4gICAgICAgICAgICAgICAgKm5nSWY9XCIhbmV3UGFzc1N0YXRlLm1vZGVsLnBpY3R1cmVcIlxuICAgICAgICAgICAgICA+PC9pb24taWNvbj5cbiAgICAgICAgICAgICAgPGlvbi1zZWxlY3QgaW50ZXJmYWNlPVwicG9wb3ZlclwiIFsobmdNb2RlbCldPVwibmV3UGFzc1N0YXRlLm1vZGVsXCI+XG4gICAgICAgICAgICAgICAgPGlvbi1zZWxlY3Qtb3B0aW9uXG4gICAgICAgICAgICAgICAgICBbdmFsdWVdPVwibW9kZWxcIlxuICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IG1vZGVsIG9mIG5ld1Bhc3NTdGF0ZS5tb2RlbHNcIlxuICAgICAgICAgICAgICAgICAgPnt7IG1vZGVsLm1vZGVsIH19PC9pb24tc2VsZWN0LW9wdGlvblxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPC9pb24tc2VsZWN0PlxuICAgICAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgICAgIDxpb24taXRlbSBjb2xvcj1cImdyZXlcIj5cbiAgICAgICAgICAgICAgPGlvbi1pbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBbbGFiZWxdPVwiJ25mYy5jYXJkX251bWJlcicgfCB0cmFuc2xhdGVcIlxuICAgICAgICAgICAgICAgIGxhYmVsUGxhY2VtZW50PVwiZmxvYXRpbmdcIlxuICAgICAgICAgICAgICAgIFtwYXR0ZXJuXT1cIm5ld1Bhc3NTdGF0ZS5tb2RlbC5yZWdleCFcIlxuICAgICAgICAgICAgICAgIFtlcnJvclRleHRdPVwiJ25mYy5pbnZhbGlkX2Zvcm1hdCcgfCB0cmFuc2xhdGVcIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJuZXdQYXNzU3RhdGUubmV3UGFzcy5wYXNzXCJcbiAgICAgICAgICAgICAgICAoaW9uSW5wdXQpPVwib25QYXNzQ2hhbmdlKCRldmVudClcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGlvbi10ZXh0XG4gICAgICAgICAgICAgICAgICBzbG90PVwic3RhcnRcIlxuICAgICAgICAgICAgICAgICAgW2NvbG9yXT1cIm5ld1Bhc3NTdGF0ZS5uZXdQYXNzLnZhbGlkID09PSB1bmRlZmluZWQgPyAnZGFyaycgOiBuZXdQYXNzU3RhdGUubmV3UGFzcy52YWxpZCA/ICdzdWNjZXNzJyA6ICdkYW5nZXInXCJcbiAgICAgICAgICAgICAgICAgICpuZ0lmPVwibmV3UGFzc1N0YXRlLm1vZGVsIS5wcmVmaXhcIlxuICAgICAgICAgICAgICAgICAgPnt7bmV3UGFzc1N0YXRlLm1vZGVsIS5wcmVmaXh9fTwvaW9uLXRleHRcbiAgICAgICAgICAgICAgICA+PGlvbi10ZXh0XG4gICAgICAgICAgICAgICAgICBzbG90PVwiZW5kXCJcbiAgICAgICAgICAgICAgICAgIFtjb2xvcl09XCJuZXdQYXNzU3RhdGUubmV3UGFzcy52YWxpZCA9PT0gdW5kZWZpbmVkID8gJ2RhcmsnIDogbmV3UGFzc1N0YXRlLm5ld1Bhc3MudmFsaWQgPyAnc3VjY2VzcycgOiAnZGFuZ2VyJ1wiXG4gICAgICAgICAgICAgICAgICAqbmdJZj1cIm5ld1Bhc3NTdGF0ZS5tb2RlbCEuc3VmZml4XCJcbiAgICAgICAgICAgICAgICAgID57e25ld1Bhc3NTdGF0ZS5tb2RlbCEuc3VmZml4fX08L2lvbi10ZXh0XG4gICAgICAgICAgICAgICAgPjwvaW9uLWlucHV0XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvaW9uLWl0ZW0+XG5cbiAgICAgICAgICAgIHt7IHBhc3NNb2RlbHMgfCBqc29ufX1cbiAgICAgICAgICA8L2lvbi1saXN0PlxuICAgICAgICAgIDxpb24tbm90ZSBjb2xvcj1cIm1lZGl1bVwiPlxuICAgICAgICAgICAge3sgJ25mYy5zaW5nbGVfY2FyZF93YXJuaW5nJyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICAgIDwvaW9uLW5vdGU+XG4gICAgICAgICAgPGlvbi1idXR0b25cbiAgICAgICAgICAgIGNsYXNzPVwiaW9uLW1hcmdpbi12ZXJ0aWNhbCBpb24tZmxvYXQtcmlnaHRcIlxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cIm5ld1Bhc3NTdGF0ZS5uZXdQYXNzLnZhbGlkID09PSB1bmRlZmluZWQgfHwgIW5ld1Bhc3NTdGF0ZS5uZXdQYXNzLnZhbGlkXCJcbiAgICAgICAgICAgIChjbGljayk9XCJhc3NvY2lhdGVQYXNzKClcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt7ICduZmMuYXNzb2NpYXRlX2J1dHRvbicgfCB0cmFuc2xhdGUgfX08L2lvbi1idXR0b25cbiAgICAgICAgICA+XG4gICAgICAgIDwvaW9uLWNhcmQtY29udGVudD5cbiAgICAgIDwvaW9uLWNhcmQ+XG4gICAgICB9XG5cbiAgICAgIDxoNCBjbGFzcz1cImlvbi1tYXJnaW4tYm90dG9tIGlvbi1tYXJnaW4taG9yaXpvbnRhbFwiPlxuICAgICAgICB7eyAnbmZjLm15X2NhcmRzJyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgPC9oND5cbiAgICAgIEBpZihuZmNTdGF0ZS5zdGF0ZSA9PT0gJ25vRGF0YScpe1xuICAgICAgPHAgY2xhc3M9XCJpb24tbWFyZ2luLWhvcml6b250YWxcIj5cbiAgICAgICAge3sgJ25mYy5ub19jYXJkc19mb3VuZCcgfCB0cmFuc2xhdGUgfX1cbiAgICAgIDwvcD5cbiAgICAgIH0gQGVsc2UgaWYobmZjU3RhdGUuc3RhdGUgPT09ICdsb2FkZWQnKXtcbiAgICAgIDxpb24tbGlzdCBbaW5zZXRdPVwidHJ1ZVwiPlxuICAgICAgICA8aW9uLWl0ZW0gY29sb3I9XCJncmV5XCIgKm5nRm9yPVwibGV0IHBhc3Mgb2YgbmZjU3RhdGUucGFzc2VzLmRhdGEhXCI+XG4gICAgICAgICAgPGlvbi1sYWJlbFxuICAgICAgICAgICAgPnt7IHBhc3MudWlkIH19XG4gICAgICAgICAgICA8aW9uLWJhZGdlICpuZ0lmPVwiIXBhc3MucmV0dXJuX3RpbWVzdGFtcFwiXG4gICAgICAgICAgICAgID57eyAnbmZjLmFjdGl2ZScgfCB0cmFuc2xhdGUgfX08L2lvbi1iYWRnZVxuICAgICAgICAgICAgPjwvaW9uLWxhYmVsXG4gICAgICAgICAgPlxuICAgICAgICAgIDxpb24tbGFiZWwgc2xvdD1cImVuZFwiICpuZ0lmPVwiIXBhc3MucmV0dXJuX3RpbWVzdGFtcFwiXG4gICAgICAgICAgICA+e3sgJ25mYy5hc3NvY2lhdGVkX29uJyB8IHRyYW5zbGF0ZSB9fSB7eyBwYXNzLnRha2VfdGltZXN0YW1wISAqXG4gICAgICAgICAgICAxMDAwIHwgZGF0ZTonZGQvTU0gSEg6bW0nIH19PC9pb24tbGFiZWxcbiAgICAgICAgICA+XG4gICAgICAgICAgPGlvbi1sYWJlbCBzbG90PVwiZW5kXCIgKm5nSWY9XCJwYXNzLnJldHVybl90aW1lc3RhbXBcIlxuICAgICAgICAgICAgPnt7ICduZmMuZGlzc29jaWF0ZWRfb24nIHwgdHJhbnNsYXRlIH19IHt7IHBhc3MucmV0dXJuX3RpbWVzdGFtcCAqXG4gICAgICAgICAgICAxMDAwIHwgZGF0ZTonZGQvTU0gSEg6bW0nIH19PC9pb24tbGFiZWxcbiAgICAgICAgICA+XG4gICAgICAgICAgQGlmKCFwYXNzLnJldHVybl90aW1lc3RhbXApe1xuICAgICAgICAgIDxpb24taWNvblxuICAgICAgICAgICAgbmFtZT1cInRyYXNoLW91dGxpbmVcIlxuICAgICAgICAgICAgc2xvdD1cImVuZFwiXG4gICAgICAgICAgICBjb2xvcj1cImRhbmdlclwiXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgKGNsaWNrKT1cImRpc3NvY2lhdGVQYXNzKHBhc3MudWlkISlcIlxuICAgICAgICAgID48L2lvbi1pY29uPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9pb24taXRlbT5cbiAgICAgIDwvaW9uLWxpc3Q+XG4gICAgICB9QGVsc2UgaWYobmZjU3RhdGUuc3RhdGUgPT09ICdsb2FkaW5nJyl7XG4gICAgICA8aW9uLWxpc3QgW2luc2V0XT1cInRydWVcIj5cbiAgICAgICAgPGlvbi1pdGVtIGNvbG9yPVwiZ3JleVwiPlxuICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dCBbYW5pbWF0ZWRdPVwidHJ1ZVwiPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICA8L2lvbi1saXN0PlxuICAgICAgfVxuICAgIDwvaW9uLWNvbD5cbiAgPC9pb24tcm93PlxuPC9pb24tY29udGVudD5cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QSxJQUFBLHFCQUFBLElBQUEsaUNBQUEsR0FBQSxHQUFBLEtBQUEsQ0FBQSxFQUFpQyxJQUFBLGlDQUFBLEdBQUEsR0FBQSxZQUFBLENBQUEsRUFJTyxJQUFBLGlDQUFBLEdBQUEsR0FBQSxZQUFBLENBQUE7QUFtQzFDLElBQUEsdUJBQUEsRUFBVSxFQUNGOzs7QUEvSEEsSUFBQSxxQkFBQSxlQUFBLFVBQUE7QUFDWixJQUFBLG9CQUFBO0FBQUEsSUFBQSx3QkFBQSxJQUFBLFNBQUEsVUFBQSxZQUFBLElBQUEsRUFBQTtBQVVNLElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEsd0JBQUEsSUFBQSxhQUFBLFVBQUEsV0FBQSxJQUFBLEVBQUE7QUEwRUUsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSw2QkFBQSxLQUFBLHNCQUFBLEdBQUEsR0FBQSxjQUFBLEdBQUEsR0FBQTtBQUVGLElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEsd0JBQUEsSUFBQSxTQUFBLFVBQUEsV0FBQSxLQUFBLElBQUEsU0FBQSxVQUFBLFdBQUEsS0FBQSxJQUFBLFNBQUEsVUFBQSxZQUFBLEtBQUEsRUFBQTs7O0VEM0JGO0VBQ0E7RUFBWTtFQUFBO0VBQUE7RUFBQTtFQUNaO0VBQVc7RUFBQTtFQUFBO0VBQUE7RUFDWDtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFBZTtFQUNmO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7QUFBTSxHQUFBLGVBQUEsRUFBQSxDQUFBO0FBR0osSUFBTyxVQUFQOztzRUFBTyxTQUFPLENBQUE7VUFqQ25CO3VCQUNXLFdBQVMsU0FHVjtNQUNQO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7T0FDRCxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBQSxDQUFBOzs7OzZFQUVVLFNBQU8sRUFBQSxXQUFBLFdBQUEsVUFBQSx5Q0FBQSxZQUFBLEdBQUEsQ0FBQTtBQUFBLEdBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
