import {
  LanguageService
} from "./chunk-K2AWDLYV.js";
import {
  addIcons,
  arrowBackOutline,
  caretBack
} from "./chunk-3E6DEK7U.js";
import {
  StorageService
} from "./chunk-U6SJAXLK.js";
import {
  CommonModule,
  Component,
  Inject,
  Input,
  IonBackButton2 as IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar,
  NgIf,
  PopoverController,
  Router,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-DGENMXJW.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// src/app/components/header/language-popover/language-popover.component.ts
var _LanguagePopoverComponent = class _LanguagePopoverComponent {
  constructor(popoverController, language) {
    this.popoverController = popoverController;
    this.language = language;
  }
  selectLanguage(lang) {
    this.popoverController.dismiss({
      language: lang
    });
  }
};
_LanguagePopoverComponent.\u0275fac = function LanguagePopoverComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LanguagePopoverComponent)(\u0275\u0275directiveInject(PopoverController), \u0275\u0275directiveInject(LanguageService));
};
_LanguagePopoverComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LanguagePopoverComponent, selectors: [["app-language-popover"]], decls: 22, vars: 5, consts: [["button", "", 3, "click", "disabled"], ["slot", "start", "src", "assets/svg/flags/fr.svg"], ["slot", "start", "src", "assets/svg/flags/en.svg"], ["slot", "start", "src", "assets/svg/flags/de.svg"], ["slot", "start", "src", "assets/svg/flags/it.svg"], ["slot", "start", "src", "assets/svg/flags/es.svg"]], template: function LanguagePopoverComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content")(1, "ion-list")(2, "ion-item", 0);
    \u0275\u0275listener("click", function LanguagePopoverComponent_Template_ion_item_click_2_listener() {
      return ctx.selectLanguage("fr");
    });
    \u0275\u0275element(3, "ion-icon", 1);
    \u0275\u0275elementStart(4, "ion-label");
    \u0275\u0275text(5, "Fran\xE7ais");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "ion-item", 0);
    \u0275\u0275listener("click", function LanguagePopoverComponent_Template_ion_item_click_6_listener() {
      return ctx.selectLanguage("en");
    });
    \u0275\u0275element(7, "ion-icon", 2);
    \u0275\u0275elementStart(8, "ion-label");
    \u0275\u0275text(9, "English");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "ion-item", 0);
    \u0275\u0275listener("click", function LanguagePopoverComponent_Template_ion_item_click_10_listener() {
      return ctx.selectLanguage("de");
    });
    \u0275\u0275element(11, "ion-icon", 3);
    \u0275\u0275elementStart(12, "ion-label");
    \u0275\u0275text(13, "Deutsch");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "ion-item", 0);
    \u0275\u0275listener("click", function LanguagePopoverComponent_Template_ion_item_click_14_listener() {
      return ctx.selectLanguage("it");
    });
    \u0275\u0275element(15, "ion-icon", 4);
    \u0275\u0275elementStart(16, "ion-label");
    \u0275\u0275text(17, "Italiano");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "ion-item", 0);
    \u0275\u0275listener("click", function LanguagePopoverComponent_Template_ion_item_click_18_listener() {
      return ctx.selectLanguage("es");
    });
    \u0275\u0275element(19, "ion-icon", 5);
    \u0275\u0275elementStart(20, "ion-label");
    \u0275\u0275text(21, "Espa\xF1ol");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx.language.getLanguage() === "fr");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx.language.getLanguage() === "en");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx.language.getLanguage() === "de");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx.language.getLanguage() === "it");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx.language.getLanguage() === "es");
  }
}, dependencies: [CommonModule, IonList, IonItem, IonLabel, IonIcon, IonContent], encapsulation: 2 });
var LanguagePopoverComponent = _LanguagePopoverComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LanguagePopoverComponent, [{
    type: Component,
    args: [{
      selector: "app-language-popover",
      template: `
    <ion-content>
      <ion-list>
        <ion-item
          button
          (click)="selectLanguage('fr')"
          [disabled]="language.getLanguage() === 'fr'"
        >
          <ion-icon slot="start" src="assets/svg/flags/fr.svg"></ion-icon>
          <ion-label>Fran\xE7ais</ion-label>
        </ion-item>
        <ion-item
          button
          (click)="selectLanguage('en')"
          [disabled]="language.getLanguage() === 'en'"
        >
          <ion-icon slot="start" src="assets/svg/flags/en.svg"></ion-icon>
          <ion-label>English</ion-label>
        </ion-item>
        <ion-item
          button
          (click)="selectLanguage('de')"
          [disabled]="language.getLanguage() === 'de'"
        >
          <ion-icon slot="start" src="assets/svg/flags/de.svg"></ion-icon>
          <ion-label>Deutsch</ion-label>
        </ion-item>
        <ion-item
          button
          (click)="selectLanguage('it')"
          [disabled]="language.getLanguage() === 'it'"
        >
          <ion-icon slot="start" src="assets/svg/flags/it.svg"></ion-icon>
          <ion-label>Italiano</ion-label>
        </ion-item>
        <ion-item
          button
          (click)="selectLanguage('es')"
          [disabled]="language.getLanguage() === 'es'"
        >
          <ion-icon slot="start" src="assets/svg/flags/es.svg"></ion-icon>
          <ion-label>Espa\xF1ol</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  `,
      imports: [CommonModule, IonList, IonItem, IonLabel, IonIcon, IonContent]
    }]
  }], () => [{ type: PopoverController }, { type: LanguageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LanguagePopoverComponent, { className: "LanguagePopoverComponent", filePath: "src/app/components/header/language-popover/language-popover.component.ts", lineNumber: 63 });
})();

// src/app/components/header/header.component.ts
function HeaderComponent_ion_buttons_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-buttons", 7);
    \u0275\u0275element(1, "ion-back-button", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("defaultHref", ctx_r0.defaultHref ? ctx_r0.defaultHref : "/launch");
  }
}
var _HeaderComponent = class _HeaderComponent {
  constructor(storageService, router, language, popoverController) {
    this.storageService = storageService;
    this.router = router;
    this.language = language;
    this.popoverController = popoverController;
    this.showBackButton = true;
    addIcons({
      "flag-fr": "assets/svg/flags/fr.svg",
      "flag-uk": "assets/svg/flags/uk.svg",
      "flag-de": "assets/svg/flags/de.svg",
      "flag-it": "assets/svg/flags/it.svg",
      "flag-es": "assets/svg/flags/es.svg",
      caretBack,
      arrowBackOutline
    });
    this.router.url.includes("landing") ? this.showBackButton = false : this.showBackButton = true;
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.storageService.get("program").then((program) => {
        this.program = program;
      });
    });
  }
  changeLanguage(lang) {
    this.language.setLanguage(lang);
  }
  openLanguagePopover(event) {
    return __async(this, null, function* () {
      const popover = yield this.popoverController.create({
        component: LanguagePopoverComponent,
        event
      });
      popover.onDidDismiss().then((data) => {
        if (data.data) {
          this.changeLanguage(data.data.language);
        }
      });
      yield popover.present();
    });
  }
};
_HeaderComponent.\u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HeaderComponent)(\u0275\u0275directiveInject(StorageService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(LanguageService), \u0275\u0275directiveInject(PopoverController));
};
_HeaderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], inputs: { defaultHref: "defaultHref" }, decls: 8, vars: 3, consts: [["id", "header"], [2, "--background", "#f2f2f2", "padding-left", "8px", "padding-right", "8px", "--border-width", "0"], ["slot", "start", 4, "ngIf"], [3, "src"], ["slot", "end"], ["shape", "round", 1, "ecl-no-shadow", 3, "click"], ["slot", "icon-only", 3, "src"], ["slot", "start"], ["text", "", "icon", "arrow-back-outline", "color", "dark", 3, "defaultHref"]], template: function HeaderComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar", 1);
    \u0275\u0275template(2, HeaderComponent_ion_buttons_2_Template, 2, 1, "ion-buttons", 2);
    \u0275\u0275elementStart(3, "ion-title");
    \u0275\u0275element(4, "ion-img", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-buttons", 4)(6, "ion-button", 5);
    \u0275\u0275listener("click", function HeaderComponent_Template_ion_button_click_6_listener($event) {
      return ctx.openLanguagePopover($event);
    });
    \u0275\u0275element(7, "ion-icon", 6);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.showBackButton);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx.program == null ? null : ctx.program.config == null ? null : ctx.program.config.logo);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", "assets/svg/flags/" + ctx.language.getLanguage() + ".svg");
  }
}, dependencies: [
  IonHeader,
  CommonModule,
  NgIf,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonButtons,
  IonIcon,
  IonButton,
  IonImg
], styles: ["\n\nion-toolbar[_ngcontent-%COMP%] {\n  --min-height: 100px !important;\n}\nion-img[_ngcontent-%COMP%]::part(image) {\n  max-height: 60px !important;\n}\n/*# sourceMappingURL=header.component.css.map */"] });
var HeaderComponent = _HeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderComponent, [{
    type: Component,
    args: [{ selector: "app-header", imports: [
      IonHeader,
      CommonModule,
      IonTitle,
      IonToolbar,
      IonBackButton,
      IonButtons,
      IonIcon,
      IonButton,
      IonImg
    ], template: `<ion-header id="header">
  <ion-toolbar
    style="
      --background: #f2f2f2;
      padding-left: 8px;
      padding-right: 8px;
      --border-width: 0;
    "
  >
    <ion-buttons slot="start" *ngIf="showBackButton">
      <ion-back-button
        text=""
        [defaultHref]="defaultHref ? defaultHref : '/launch'"
        icon="arrow-back-outline"
        color="dark"
      ></ion-back-button>
    </ion-buttons>
    <ion-title>
      <ion-img [src]="program?.config?.logo"></ion-img>
    </ion-title>
    <ion-buttons slot="end">
      <ion-button
        shape="round"
        class="ecl-no-shadow"
        (click)="openLanguagePopover($event)"
      >
        <ion-icon
          slot="icon-only"
          [src]="'assets/svg/flags/' + language.getLanguage() + '.svg'"
        ></ion-icon>
      </ion-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
`, styles: ["/* src/app/components/header/header.component.scss */\nion-toolbar {\n  --min-height: 100px !important;\n}\nion-img::part(image) {\n  max-height: 60px !important;\n}\n/*# sourceMappingURL=header.component.css.map */\n"] }]
  }], () => [{ type: StorageService, decorators: [{
    type: Inject,
    args: [StorageService]
  }] }, { type: Router }, { type: LanguageService }, { type: PopoverController }], { defaultHref: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "src/app/components/header/header.component.ts", lineNumber: 51 });
})();

export {
  HeaderComponent
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9sYW5ndWFnZS1wb3BvdmVyL2xhbmd1YWdlLXBvcG92ZXIuY29tcG9uZW50LnRzIiwgInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyIsICJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuaHRtbCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IFBvcG92ZXJDb250cm9sbGVyIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXIvc3RhbmRhbG9uZSdcbmltcG9ydCB7XG4gIElvbkxpc3QsXG4gIElvbkl0ZW0sXG4gIElvbkxhYmVsLFxuICBJb25JY29uLFxuICBJb25Db250ZW50LFxufSBmcm9tICdAaW9uaWMvYW5ndWxhci9zdGFuZGFsb25lJ1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJ1xuaW1wb3J0IHsgTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy91dGlscy9sYW5ndWFnZS5zZXJ2aWNlJ1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1sYW5ndWFnZS1wb3BvdmVyJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxpb24tY29udGVudD5cbiAgICAgIDxpb24tbGlzdD5cbiAgICAgICAgPGlvbi1pdGVtXG4gICAgICAgICAgYnV0dG9uXG4gICAgICAgICAgKGNsaWNrKT1cInNlbGVjdExhbmd1YWdlKCdmcicpXCJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwibGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2UoKSA9PT0gJ2ZyJ1wiXG4gICAgICAgID5cbiAgICAgICAgICA8aW9uLWljb24gc2xvdD1cInN0YXJ0XCIgc3JjPVwiYXNzZXRzL3N2Zy9mbGFncy9mci5zdmdcIj48L2lvbi1pY29uPlxuICAgICAgICAgIDxpb24tbGFiZWw+RnJhbsOnYWlzPC9pb24tbGFiZWw+XG4gICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICAgIDxpb24taXRlbVxuICAgICAgICAgIGJ1dHRvblxuICAgICAgICAgIChjbGljayk9XCJzZWxlY3RMYW5ndWFnZSgnZW4nKVwiXG4gICAgICAgICAgW2Rpc2FibGVkXT1cImxhbmd1YWdlLmdldExhbmd1YWdlKCkgPT09ICdlbidcIlxuICAgICAgICA+XG4gICAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJzdGFydFwiIHNyYz1cImFzc2V0cy9zdmcvZmxhZ3MvZW4uc3ZnXCI+PC9pb24taWNvbj5cbiAgICAgICAgICA8aW9uLWxhYmVsPkVuZ2xpc2g8L2lvbi1sYWJlbD5cbiAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgPGlvbi1pdGVtXG4gICAgICAgICAgYnV0dG9uXG4gICAgICAgICAgKGNsaWNrKT1cInNlbGVjdExhbmd1YWdlKCdkZScpXCJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwibGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2UoKSA9PT0gJ2RlJ1wiXG4gICAgICAgID5cbiAgICAgICAgICA8aW9uLWljb24gc2xvdD1cInN0YXJ0XCIgc3JjPVwiYXNzZXRzL3N2Zy9mbGFncy9kZS5zdmdcIj48L2lvbi1pY29uPlxuICAgICAgICAgIDxpb24tbGFiZWw+RGV1dHNjaDwvaW9uLWxhYmVsPlxuICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgICA8aW9uLWl0ZW1cbiAgICAgICAgICBidXR0b25cbiAgICAgICAgICAoY2xpY2spPVwic2VsZWN0TGFuZ3VhZ2UoJ2l0JylcIlxuICAgICAgICAgIFtkaXNhYmxlZF09XCJsYW5ndWFnZS5nZXRMYW5ndWFnZSgpID09PSAnaXQnXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxpb24taWNvbiBzbG90PVwic3RhcnRcIiBzcmM9XCJhc3NldHMvc3ZnL2ZsYWdzL2l0LnN2Z1wiPjwvaW9uLWljb24+XG4gICAgICAgICAgPGlvbi1sYWJlbD5JdGFsaWFubzwvaW9uLWxhYmVsPlxuICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgICA8aW9uLWl0ZW1cbiAgICAgICAgICBidXR0b25cbiAgICAgICAgICAoY2xpY2spPVwic2VsZWN0TGFuZ3VhZ2UoJ2VzJylcIlxuICAgICAgICAgIFtkaXNhYmxlZF09XCJsYW5ndWFnZS5nZXRMYW5ndWFnZSgpID09PSAnZXMnXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxpb24taWNvbiBzbG90PVwic3RhcnRcIiBzcmM9XCJhc3NldHMvc3ZnL2ZsYWdzL2VzLnN2Z1wiPjwvaW9uLWljb24+XG4gICAgICAgICAgPGlvbi1sYWJlbD5Fc3Bhw7FvbDwvaW9uLWxhYmVsPlxuICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgPC9pb24tbGlzdD5cbiAgICA8L2lvbi1jb250ZW50PlxuICBgLFxuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIElvbkxpc3QsIElvbkl0ZW0sIElvbkxhYmVsLCBJb25JY29uLCBJb25Db250ZW50XVxufSlcbmV4cG9ydCBjbGFzcyBMYW5ndWFnZVBvcG92ZXJDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHBvcG92ZXJDb250cm9sbGVyOiBQb3BvdmVyQ29udHJvbGxlcixcbiAgICBwdWJsaWMgbGFuZ3VhZ2U6IExhbmd1YWdlU2VydmljZVxuICApIHt9XG5cbiAgc2VsZWN0TGFuZ3VhZ2UobGFuZzogc3RyaW5nKSB7XG4gICAgdGhpcy5wb3BvdmVyQ29udHJvbGxlci5kaXNtaXNzKHtcbiAgICAgIGxhbmd1YWdlOiBsYW5nLFxuICAgIH0pXG4gIH1cbn1cbiIsICJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nXG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIGlucHV0LFxuICBPbkluaXQsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcbmltcG9ydCB7XG4gIElvbkhlYWRlcixcbiAgSW9uVGl0bGUsXG4gIElvblRvb2xiYXIsXG4gIElvbkJhY2tCdXR0b24sXG4gIElvbkJ1dHRvbnMsXG4gIElvbkJ1dHRvbixcbiAgSW9uSWNvbixcbiAgSW9uSW1nLFxuICBJb25Qb3BvdmVyLFxuICBJb25Db250ZW50LFxuICBJb25MaXN0LFxuICBJb25JdGVtLFxuICBJb25MYWJlbCxcbiAgUG9wb3ZlckNvbnRyb2xsZXIsXG59IGZyb20gJ0Bpb25pYy9hbmd1bGFyL3N0YW5kYWxvbmUnXG5pbXBvcnQgeyBhZGRJY29ucyB9IGZyb20gJ2lvbmljb25zJ1xuaW1wb3J0IHsgYXJyb3dCYWNrT3V0bGluZSwgY2FyZXRCYWNrIH0gZnJvbSAnaW9uaWNvbnMvaWNvbnMnXG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gJ3NyYy9hcHAvc2VydmljZXMvdXRpbHMvc3RvcmFnZS5zZXJ2aWNlJ1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnXG5pbXBvcnQgeyBMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICdzcmMvYXBwL3NlcnZpY2VzL3V0aWxzL2xhbmd1YWdlLnNlcnZpY2UnXG5pbXBvcnQgeyBMYW5ndWFnZVBvcG92ZXJDb21wb25lbnQgfSBmcm9tICcuL2xhbmd1YWdlLXBvcG92ZXIvbGFuZ3VhZ2UtcG9wb3Zlci5jb21wb25lbnQnXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaGVhZGVyLmNvbXBvbmVudC5zY3NzJ10sXG4gIGltcG9ydHM6IFtcbiAgICBJb25IZWFkZXIsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIElvblRpdGxlLFxuICAgIElvblRvb2xiYXIsXG4gICAgSW9uQmFja0J1dHRvbixcbiAgICBJb25CdXR0b25zLFxuICAgIElvbkljb24sXG4gICAgSW9uQnV0dG9uLFxuICAgIElvbkltZyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIHByb2dyYW06IGFueVxuICBwdWJsaWMgc2hvd0JhY2tCdXR0b246IGJvb2xlYW4gPSB0cnVlXG4gIEBJbnB1dCgpIGRlZmF1bHRIcmVmOiBzdHJpbmdcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChTdG9yYWdlU2VydmljZSkgcHJpdmF0ZSBzdG9yYWdlU2VydmljZTogU3RvcmFnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwdWJsaWMgbGFuZ3VhZ2U6IExhbmd1YWdlU2VydmljZSxcbiAgICBwcml2YXRlIHBvcG92ZXJDb250cm9sbGVyOiBQb3BvdmVyQ29udHJvbGxlclxuICApIHtcbiAgICBhZGRJY29ucyh7XG4gICAgICAnZmxhZy1mcic6ICdhc3NldHMvc3ZnL2ZsYWdzL2ZyLnN2ZycsXG4gICAgICAnZmxhZy11ayc6ICdhc3NldHMvc3ZnL2ZsYWdzL3VrLnN2ZycsXG4gICAgICAnZmxhZy1kZSc6ICdhc3NldHMvc3ZnL2ZsYWdzL2RlLnN2ZycsXG4gICAgICAnZmxhZy1pdCc6ICdhc3NldHMvc3ZnL2ZsYWdzL2l0LnN2ZycsXG4gICAgICAnZmxhZy1lcyc6ICdhc3NldHMvc3ZnL2ZsYWdzL2VzLnN2ZycsXG4gICAgICBjYXJldEJhY2ssXG4gICAgICBhcnJvd0JhY2tPdXRsaW5lLFxuICAgIH0pXG4gICAgdGhpcy5yb3V0ZXIudXJsLmluY2x1ZGVzKCdsYW5kaW5nJylcbiAgICAgID8gKHRoaXMuc2hvd0JhY2tCdXR0b24gPSBmYWxzZSlcbiAgICAgIDogKHRoaXMuc2hvd0JhY2tCdXR0b24gPSB0cnVlKVxuICB9XG5cbiAgYXN5bmMgbmdPbkluaXQoKSB7XG4gICAgYXdhaXQgdGhpcy5zdG9yYWdlU2VydmljZS5nZXQoJ3Byb2dyYW0nKS50aGVuKChwcm9ncmFtKSA9PiB7XG4gICAgICB0aGlzLnByb2dyYW0gPSBwcm9ncmFtXG4gICAgfSlcbiAgfVxuXG4gIGNoYW5nZUxhbmd1YWdlKGxhbmc6IHN0cmluZykge1xuICAgIHRoaXMubGFuZ3VhZ2Uuc2V0TGFuZ3VhZ2UobGFuZylcbiAgfVxuXG4gIGFzeW5jIG9wZW5MYW5ndWFnZVBvcG92ZXIoZXZlbnQ6IGFueSkge1xuICAgIGNvbnN0IHBvcG92ZXIgPSBhd2FpdCB0aGlzLnBvcG92ZXJDb250cm9sbGVyLmNyZWF0ZSh7XG4gICAgICBjb21wb25lbnQ6IExhbmd1YWdlUG9wb3ZlckNvbXBvbmVudCxcbiAgICAgIGV2ZW50LFxuICAgIH0pXG4gICAgcG9wb3Zlci5vbkRpZERpc21pc3MoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoZGF0YS5kYXRhKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlTGFuZ3VhZ2UoZGF0YS5kYXRhLmxhbmd1YWdlKVxuICAgICAgfVxuICAgIH0pXG4gICAgYXdhaXQgcG9wb3Zlci5wcmVzZW50KClcbiAgfVxufVxuIiwgIjxpb24taGVhZGVyIGlkPVwiaGVhZGVyXCI+XG4gIDxpb24tdG9vbGJhclxuICAgIHN0eWxlPVwiXG4gICAgICAtLWJhY2tncm91bmQ6ICNmMmYyZjI7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICAgIC0tYm9yZGVyLXdpZHRoOiAwO1xuICAgIFwiXG4gID5cbiAgICA8aW9uLWJ1dHRvbnMgc2xvdD1cInN0YXJ0XCIgKm5nSWY9XCJzaG93QmFja0J1dHRvblwiPlxuICAgICAgPGlvbi1iYWNrLWJ1dHRvblxuICAgICAgICB0ZXh0PVwiXCJcbiAgICAgICAgW2RlZmF1bHRIcmVmXT1cImRlZmF1bHRIcmVmID8gZGVmYXVsdEhyZWYgOiAnL2xhdW5jaCdcIlxuICAgICAgICBpY29uPVwiYXJyb3ctYmFjay1vdXRsaW5lXCJcbiAgICAgICAgY29sb3I9XCJkYXJrXCJcbiAgICAgID48L2lvbi1iYWNrLWJ1dHRvbj5cbiAgICA8L2lvbi1idXR0b25zPlxuICAgIDxpb24tdGl0bGU+XG4gICAgICA8aW9uLWltZyBbc3JjXT1cInByb2dyYW0/LmNvbmZpZz8ubG9nb1wiPjwvaW9uLWltZz5cbiAgICA8L2lvbi10aXRsZT5cbiAgICA8aW9uLWJ1dHRvbnMgc2xvdD1cImVuZFwiPlxuICAgICAgPGlvbi1idXR0b25cbiAgICAgICAgc2hhcGU9XCJyb3VuZFwiXG4gICAgICAgIGNsYXNzPVwiZWNsLW5vLXNoYWRvd1wiXG4gICAgICAgIChjbGljayk9XCJvcGVuTGFuZ3VhZ2VQb3BvdmVyKCRldmVudClcIlxuICAgICAgPlxuICAgICAgICA8aW9uLWljb25cbiAgICAgICAgICBzbG90PVwiaWNvbi1vbmx5XCJcbiAgICAgICAgICBbc3JjXT1cIidhc3NldHMvc3ZnL2ZsYWdzLycgKyBsYW5ndWFnZS5nZXRMYW5ndWFnZSgpICsgJy5zdmcnXCJcbiAgICAgICAgPjwvaW9uLWljb24+XG4gICAgICA8L2lvbi1idXR0b24+XG4gICAgPC9pb24tYnV0dG9ucz5cbiAgPC9pb24tdG9vbGJhcj5cbjwvaW9uLWhlYWRlcj5cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOERNLElBQU8sNEJBQVAsTUFBTywwQkFBd0I7RUFDbkMsWUFDVSxtQkFDRCxVQUF5QjtBQUR4QixTQUFBLG9CQUFBO0FBQ0QsU0FBQSxXQUFBO0VBQ047RUFFSCxlQUFlLE1BQVk7QUFDekIsU0FBSyxrQkFBa0IsUUFBUTtNQUM3QixVQUFVO0tBQ1g7RUFDSDs7O21DQVZXLDJCQUF3Qiw0QkFBQSxpQkFBQSxHQUFBLDRCQUFBLGVBQUEsQ0FBQTtBQUFBOzBGQUF4QiwyQkFBd0IsV0FBQSxDQUFBLENBQUEsc0JBQUEsQ0FBQSxHQUFBLE9BQUEsSUFBQSxNQUFBLEdBQUEsUUFBQSxD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
