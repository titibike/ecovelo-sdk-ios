import {
  HeaderComponent
} from "./chunk-AVAJ3QHV.js";
import {
  InlineSVGDirective,
  InlineSVGModule
} from "./chunk-EPUPXOBT.js";
import "./chunk-K2AWDLYV.js";
import {
  AuthService
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
  logoApple,
  logoGoogle
} from "./chunk-3E6DEK7U.js";
import {
  StorageService
} from "./chunk-U6SJAXLK.js";
import {
  CommonModule,
  Component,
  IonButton,
  IonCol,
  IonContent,
  IonIcon,
  IonRow,
  IonText,
  RouterLink,
  TranslateModule,
  TranslatePipe,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
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

// src/app/pages/landing/landing.page.ts
var _c0 = () => ["/signup"];
var _c1 = () => ["/signin"];
var _c2 = () => ["/map"];
var _LandingPage = class _LandingPage {
  constructor(storageService, authService) {
    this.storageService = storageService;
    this.authService = authService;
    addIcons({ logoApple, logoGoogle });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.storageService.get("program").then((p) => {
        this.program = p;
      });
    });
  }
  signInWithSocialProvider(provider) {
    return __async(this, null, function* () {
      this.authService.signInWithSocialProvider(provider);
    });
  }
};
_LandingPage.\u0275fac = function LandingPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LandingPage)(\u0275\u0275directiveInject(StorageService), \u0275\u0275directiveInject(AuthService));
};
_LandingPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingPage, selectors: [["app-landing"]], decls: 36, vars: 25, consts: [[1, "ion-padding"], ["aria-label", "Bike icon", 1, "program-bike", 3, "inlineSVG"], [1, "ion-justify-content-center", "ion-padding-top"], ["size", "12", "size-md", "6", "size-lg", "4"], ["expand", "block", "shape", "round", "color", "light", 3, "click"], ["name", "logo-apple", "slot", "start"], [1, "ion-justify-content-center"], ["name", "logo-google", "slot", "start"], ["size", "12", "size-md", "6", "size-lg", "4", 1, "ion-text-center"], ["color", "medium"], ["expand", "block", "shape", "round", 3, "routerLink"], [1, "ion-margin-bottom", "ion-text-center"], ["color", "primary"], [3, "routerLink"], [1, "ion-justify-content-center", "ecl-margin-bottom"], ["replaceUrl", "true", 3, "routerLink"]], template: function LandingPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-header");
    \u0275\u0275elementStart(1, "ion-content", 0);
    \u0275\u0275element(2, "div", 1);
    \u0275\u0275elementStart(3, "ion-row", 2)(4, "ion-col", 3)(5, "ion-button", 4);
    \u0275\u0275listener("click", function LandingPage_Template_ion_button_click_5_listener() {
      return ctx.signInWithSocialProvider("Apple");
    });
    \u0275\u0275element(6, "ion-icon", 5);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "ion-row", 6)(10, "ion-col", 3)(11, "ion-button", 4);
    \u0275\u0275listener("click", function LandingPage_Template_ion_button_click_11_listener() {
      return ctx.signInWithSocialProvider("Google");
    });
    \u0275\u0275element(12, "ion-icon", 7);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "ion-row", 6)(16, "ion-col", 8)(17, "ion-text", 9);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "ion-row", 6)(21, "ion-col", 3)(22, "ion-button", 10);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "ion-row", 11)(26, "ion-col")(27, "ion-text", 12)(28, "u", 13);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(31, "ion-row", 14)(32, "ion-text", 9)(33, "u", 15);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("inlineSVG", "/assets/svg/home_illustration.svg");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 10, "signup.apple_signup"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 12, "signup.google_signup"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 14, "signup.or"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(22, _c0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 16, "signup.title"));
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(23, _c1));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 18, "signup.signin"), "");
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(24, _c2));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 20, "signup.skip_step"));
  }
}, dependencies: [
  IonContent,
  CommonModule,
  HeaderComponent,
  TranslateModule,
  TranslatePipe,
  IonRow,
  IonCol,
  IonButton,
  IonText,
  IonIcon,
  InlineSVGModule,
  InlineSVGDirective,
  RouterLink
], styles: ["\n\n.program-bike[_ngcontent-%COMP%], \n.program-logo[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  text-align: center;\n}\n.program-logo[_ngcontent-%COMP%] {\n  width: 70%;\n  max-height: 350px;\n}\n.program-bike[_ngcontent-%COMP%] {\n  width: 80%;\n  max-width: 80%;\n  height: 40vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.program-bike[_ngcontent-%COMP%]    > svg[_ngcontent-%COMP%] {\n  width: auto;\n  height: auto;\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n}\n/*# sourceMappingURL=landing.page.css.map */"] });
var LandingPage = _LandingPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LandingPage, [{
    type: Component,
    args: [{ selector: "app-landing", imports: [
      IonContent,
      CommonModule,
      HeaderComponent,
      TranslateModule,
      IonRow,
      IonCol,
      IonButton,
      IonText,
      IonIcon,
      InlineSVGModule,
      RouterLink
    ], template: `<app-header></app-header>
<ion-content class="ion-padding">
  <!-- CONTAINER POUR CENTRER -->
  <!-- SVG -->
  <div
    class="program-bike"
    aria-label="Bike icon"
    [inlineSVG]="'/assets/svg/home_illustration.svg'"
  ></div>
  <!-- BOUTON_APPLE -->
  <ion-row class="ion-justify-content-center ion-padding-top">
    <ion-col size="12" size-md="6" size-lg="4">
      <ion-button
        expand="block"
        shape="round"
        color="light"
        (click)="signInWithSocialProvider('Apple')"
      >
        <ion-icon name="logo-apple" slot="start"></ion-icon>
        {{"signup.apple_signup" | translate}}
      </ion-button>
    </ion-col>
  </ion-row>
  <!-- BOUTON_GOOGLE -->
  <ion-row class="ion-justify-content-center">
    <ion-col size="12" size-md="6" size-lg="4">
      <ion-button
        expand="block"
        shape="round"
        color="light"
        (click)="signInWithSocialProvider('Google')"
      >
        <ion-icon name="logo-google" slot="start"></ion-icon>
        {{"signup.google_signup" | translate}}
      </ion-button>
    </ion-col>
  </ion-row>
  <!-- "OU" -->
  <ion-row class="ion-justify-content-center">
    <ion-col class="ion-text-center" size="12" size-md="6" size-lg="4">
      <ion-text color="medium"> {{"signup.or" | translate}} </ion-text>
    </ion-col>
  </ion-row>
  <!-- BOUTON CLASSIQUE -->
  <ion-row class="ion-justify-content-center">
    <ion-col size="12" size-md="6" size-lg="4">
      <ion-button expand="block" shape="round" [routerLink]="['/signup']"
        >{{"signup.title" | translate}}</ion-button
      >
    </ion-col>
  </ion-row>
  <!-- REDIRECT_LOGIN -->
  <ion-row class="ion-margin-bottom ion-text-center">
    <ion-col>
      <ion-text color="primary">
        <u [routerLink]="['/signin']"> {{"signup.signin" | translate}}</u>
      </ion-text>
    </ion-col>
  </ion-row>
  <!-- SKIP -->
  <ion-row class="ion-justify-content-center ecl-margin-bottom">
    <ion-text color="medium">
      <u [routerLink]="['/map']" replaceUrl="true"
        >{{"signup.skip_step" | translate}}</u
      >
    </ion-text>
  </ion-row>
</ion-content>
`, styles: ["/* src/app/pages/landing/landing.page.scss */\n.program-bike,\n.program-logo {\n  margin: 0 auto;\n  text-align: center;\n}\n.program-logo {\n  width: 70%;\n  max-height: 350px;\n}\n.program-bike {\n  width: 80%;\n  max-width: 80%;\n  height: 40vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.program-bike > svg {\n  width: auto;\n  height: auto;\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n}\n/*# sourceMappingURL=landing.page.css.map */\n"] }]
  }], () => [{ type: StorageService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingPage, { className: "LandingPage", filePath: "src/app/pages/landing/landing.page.ts", lineNumber: 40 });
})();
export {
  LandingPage
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wYWdlcy9sYW5kaW5nL2xhbmRpbmcucGFnZS50cyIsICJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvbGFuZGluZy5wYWdlLmh0bWwiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbidcbmltcG9ydCB7XG4gIElvbkNvbnRlbnQsXG4gIElvbkdyaWQsXG4gIElvblJvdyxcbiAgSW9uQ29sLFxuICBJb25JbWcsXG4gIElvbkJ1dHRvbixcbiAgSW9uVGV4dCxcbiAgSW9uSWNvbixcbn0gZnJvbSAnQGlvbmljL2FuZ3VsYXIvc3RhbmRhbG9uZSdcbmltcG9ydCB7IGFkZEljb25zIH0gZnJvbSAnaW9uaWNvbnMnXG5pbXBvcnQgeyBsb2dvQXBwbGUsIGxvZ29Hb29nbGUgfSBmcm9tICdpb25pY29ucy9pY29ucydcbmltcG9ydCB7IFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy91dGlscy9zdG9yYWdlLnNlcnZpY2UnXG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJ1xuaW1wb3J0IHsgSW5saW5lU1ZHTW9kdWxlIH0gZnJvbSAnbmctaW5saW5lLXN2Zy0yJ1xuaW1wb3J0IHsgUm91dGVyTGluayB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCB9IGZyb20gJ3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudCdcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy9leHRlcm5hbC9hdXRoLnNlcnZpY2UnXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1sYW5kaW5nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xhbmRpbmcucGFnZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGFuZGluZy5wYWdlLnNjc3MnXSxcbiAgaW1wb3J0czogW1xuICAgIElvbkNvbnRlbnQsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEhlYWRlckNvbXBvbmVudCxcbiAgICBUcmFuc2xhdGVNb2R1bGUsXG4gICAgSW9uUm93LFxuICAgIElvbkNvbCxcbiAgICBJb25CdXR0b24sXG4gICAgSW9uVGV4dCxcbiAgICBJb25JY29uLFxuICAgIElubGluZVNWR01vZHVsZSxcbiAgICBSb3V0ZXJMaW5rLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBMYW5kaW5nUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBwcm9ncmFtOiBhbnlcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0b3JhZ2VTZXJ2aWNlOiBTdG9yYWdlU2VydmljZSxcbiAgICBwdWJsaWMgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlXG4gICkge1xuICAgIGFkZEljb25zKHsgbG9nb0FwcGxlLCBsb2dvR29vZ2xlIH0pXG4gIH1cblxuICBhc3luYyBuZ09uSW5pdCgpIHtcbiAgICBhd2FpdCB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldCgncHJvZ3JhbScpLnRoZW4oKHApID0+IHtcbiAgICAgIHRoaXMucHJvZ3JhbSA9IHBcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgc2lnbkluV2l0aFNvY2lhbFByb3ZpZGVyKHByb3ZpZGVyOiAnQXBwbGUnIHwgJ0dvb2dsZScpIHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLnNpZ25JbldpdGhTb2NpYWxQcm92aWRlcihwcm92aWRlcilcbiAgfVxufVxuIiwgIjxhcHAtaGVhZGVyPjwvYXBwLWhlYWRlcj5cbjxpb24tY29udGVudCBjbGFzcz1cImlvbi1wYWRkaW5nXCI+XG4gIDwhLS0gQ09OVEFJTkVSIFBPVVIgQ0VOVFJFUiAtLT5cbiAgPCEtLSBTVkcgLS0+XG4gIDxkaXZcbiAgICBjbGFzcz1cInByb2dyYW0tYmlrZVwiXG4gICAgYXJpYS1sYWJlbD1cIkJpa2UgaWNvblwiXG4gICAgW2lubGluZVNWR109XCInL2Fzc2V0cy9zdmcvaG9tZV9pbGx1c3RyYXRpb24uc3ZnJ1wiXG4gID48L2Rpdj5cbiAgPCEtLSBCT1VUT05fQVBQTEUgLS0+XG4gIDxpb24tcm93IGNsYXNzPVwiaW9uLWp1c3RpZnktY29udGVudC1jZW50ZXIgaW9uLXBhZGRpbmctdG9wXCI+XG4gICAgPGlvbi1jb2wgc2l6ZT1cIjEyXCIgc2l6ZS1tZD1cIjZcIiBzaXplLWxnPVwiNFwiPlxuICAgICAgPGlvbi1idXR0b25cbiAgICAgICAgZXhwYW5kPVwiYmxvY2tcIlxuICAgICAgICBzaGFwZT1cInJvdW5kXCJcbiAgICAgICAgY29sb3I9XCJsaWdodFwiXG4gICAgICAgIChjbGljayk9XCJzaWduSW5XaXRoU29jaWFsUHJvdmlkZXIoJ0FwcGxlJylcIlxuICAgICAgPlxuICAgICAgICA8aW9uLWljb24gbmFtZT1cImxvZ28tYXBwbGVcIiBzbG90PVwic3RhcnRcIj48L2lvbi1pY29uPlxuICAgICAgICB7e1wic2lnbnVwLmFwcGxlX3NpZ251cFwiIHwgdHJhbnNsYXRlfX1cbiAgICAgIDwvaW9uLWJ1dHRvbj5cbiAgICA8L2lvbi1jb2w+XG4gIDwvaW9uLXJvdz5cbiAgPCEtLSBCT1VUT05fR09PR0xFIC0tPlxuICA8aW9uLXJvdyBjbGFzcz1cImlvbi1qdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgPGlvbi1jb2wgc2l6ZT1cIjEyXCIgc2l6ZS1tZD1cIjZcIiBzaXplLWxnPVwiNFwiPlxuICAgICAgPGlvbi1idXR0b25cbiAgICAgICAgZXhwYW5kPVwiYmxvY2tcIlxuICAgICAgICBzaGFwZT1cInJvdW5kXCJcbiAgICAgICAgY29sb3I9XCJsaWdodFwiXG4gICAgICAgIChjbGljayk9XCJzaWduSW5XaXRoU29jaWFsUHJvdmlkZXIoJ0dvb2dsZScpXCJcbiAgICAgID5cbiAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJsb2dvLWdvb2dsZVwiIHNsb3Q9XCJzdGFydFwiPjwvaW9uLWljb24+XG4gICAgICAgIHt7XCJzaWdudXAuZ29vZ2xlX3NpZ251cFwiIHwgdHJhbnNsYXRlfX1cbiAgICAgIDwvaW9uLWJ1dHRvbj5cbiAgICA8L2lvbi1jb2w+XG4gIDwvaW9uLXJvdz5cbiAgPCEtLSBcIk9VXCIgLS0+XG4gIDxpb24tcm93IGNsYXNzPVwiaW9uLWp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICA8aW9uLWNvbCBjbGFzcz1cImlvbi10ZXh0LWNlbnRlclwiIHNpemU9XCIxMlwiIHNpemUtbWQ9XCI2XCIgc2l6ZS1sZz1cIjRcIj5cbiAgICAgIDxpb24tdGV4dCBjb2xvcj1cIm1lZGl1bVwiPiB7e1wic2lnbnVwLm9yXCIgfCB0cmFuc2xhdGV9fSA8L2lvbi10ZXh0PlxuICAgIDwvaW9uLWNvbD5cbiAgPC9pb24tcm93PlxuICA8IS0tIEJPVVRPTiBDTEFTU0lRVUUgLS0+XG4gIDxpb24tcm93IGNsYXNzPVwiaW9uLWp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICA8aW9uLWNvbCBzaXplPVwiMTJcIiBzaXplLW1kPVwiNlwiIHNpemUtbGc9XCI0XCI+XG4gICAgICA8aW9uLWJ1dHRvbiBleHBhbmQ9XCJibG9ja1wiIHNoYXBlPVwicm91bmRcIiBbcm91dGVyTGlua109XCJbJy9zaWdudXAnXVwiXG4gICAgICAgID57e1wic2lnbnVwLnRpdGxlXCIgfCB0cmFuc2xhdGV9fTwvaW9uLWJ1dHRvblxuICAgICAgPlxuICAgIDwvaW9uLWNvbD5cbiAgPC9pb24tcm93PlxuICA8IS0tIFJFRElSRUNUX0xPR0lOIC0tPlxuICA8aW9uLXJvdyBjbGFzcz1cImlvbi1tYXJnaW4tYm90dG9tIGlvbi10ZXh0LWNlbnRlclwiPlxuICAgIDxpb24tY29sPlxuICAgICAgPGlvbi10ZXh0IGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgICA8dSBbcm91dGVyTGlua109XCJbJy9zaWduaW4nXVwiPiB7e1wic2lnbnVwLnNpZ25pblwiIHwgdHJhbnNsYXRlfX08L3U+XG4gICAgICA8L2lvbi10ZXh0PlxuICAgIDwvaW9uLWNvbD5cbiAgPC9pb24tcm93PlxuICA8IS0tIFNLSVAgLS0+XG4gIDxpb24tcm93IGNsYXNzPVwiaW9uLWp1c3RpZnktY29udGVudC1jZW50ZXIgZWNsLW1hcmdpbi1ib3R0b21cIj5cbiAgICA8aW9uLXRleHQgY29sb3I9XCJtZWRpdW1cIj5cbiAgICAgIDx1IFtyb3V0ZXJMaW5rXT1cIlsnL21hcCddXCIgcmVwbGFjZVVybD1cInRydWVcIlxuICAgICAgICA+e3tcInNpZ251cC5za2lwX3N0ZXBcIiB8IHRyYW5zbGF0ZX19PC91XG4gICAgICA+XG4gICAgPC9pb24tdGV4dD5cbiAgPC9pb24tcm93PlxuPC9pb24tY29udGVudD5cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1Q00sSUFBTyxlQUFQLE1BQU8sYUFBVztFQUd0QixZQUNVLGdCQUNELGFBQXdCO0FBRHZCLFNBQUEsaUJBQUE7QUFDRCxTQUFBLGNBQUE7QUFFUCxhQUFTLEVBQUUsV0FBVyxXQUFVLENBQUU7RUFDcEM7RUFFTSxXQUFROztBQUNaLFlBQU0sS0FBSyxlQUFlLElBQUksU0FBUyxFQUFFLEtBQUssQ0FBQyxNQUFLO0FBQ2xELGFBQUssVUFBVTtNQUNqQixDQUFDO0lBQ0g7O0VBRU0seUJBQXlCLFVBQTRCOztBQUN6RCxXQUFLLFlBQVkseUJBQXlCLFFBQVE7SUFDcEQ7Ozs7bUNBbEJXLGNBQVcsNEJBQUEsY0FBQSxHQUFBLDRCQUFBLFdBQUEsQ0FBQTtBQUFBOzZFQUFYLGNBQVcsV0FBQSxDQUFBLENBQUEsYUFBQSxDQUFBLEdBQUEsT0FBQSxJQUFBLE1BQUEsSUFBQSxRQUFBLENBQUEsQ0FBQSxHQUFBLGFBQUEsR0FBQSxDQUFBLGNBQUEsYUFBQSxHQUFBLGdCQUFBLEdBQUEsV0FBQSxHQUFBLENB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
