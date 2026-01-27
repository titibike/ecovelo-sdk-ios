import {
  DocumentUploaderComponent
} from "./chunk-PX3M42XB.js";
import {
  AbonnementWrapperService
} from "./chunk-HCOOL2GW.js";
import "./chunk-3B54ZNXU.js";
import "./chunk-NEYQRVBS.js";
import {
  HeaderComponent
} from "./chunk-AVAJ3QHV.js";
import "./chunk-OEYRANOA.js";
import "./chunk-K2AWDLYV.js";
import "./chunk-Y4K6NO5T.js";
import "./chunk-WJQU3GMM.js";
import "./chunk-CHFOG66O.js";
import "./chunk-RAVV2QIY.js";
import "./chunk-T6WE2PS5.js";
import {
  SubscriptionProcessService
} from "./chunk-XK4I5MHM.js";
import "./chunk-GVYZRG6X.js";
import "./chunk-FOJAXRYS.js";
import "./chunk-Y7HI6USV.js";
import {
  ToastService,
  ToastType
} from "./chunk-SARQRLZR.js";
import "./chunk-3E6DEK7U.js";
import "./chunk-U6SJAXLK.js";
import {
  CommonModule,
  Component,
  FormsModule,
  IonButton,
  IonCol,
  IonContent,
  IonRow,
  LoadingController,
  NgForOf,
  Router,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  firstValueFrom,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵpureFunction0,
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
import {
  __async
} from "./chunk-UESUV5PM.js";

// src/app/pages/supporting-documents/supporting-documents.page.ts
var _c0 = () => ({});
function SupportingDocumentsPage_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "app-document-uploader", 6);
    \u0275\u0275listener("documentUpdate", function SupportingDocumentsPage_div_13_Template_app_document_uploader_documentUpdate_1_listener($event) {
      const doc_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDocumentImagesChange(doc_r2, $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const doc_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("documentName", doc_r2)("documentImages", ctx_r2.documentImages[doc_r2] || \u0275\u0275pureFunction0(2, _c0));
  }
}
var _SupportingDocumentsPage = class _SupportingDocumentsPage {
  constructor(AbonnementWrapperService2, router, toastService, translate, loadingCtrl, subscriptionProcess) {
    this.AbonnementWrapperService = AbonnementWrapperService2;
    this.router = router;
    this.toastService = toastService;
    this.translate = translate;
    this.loadingCtrl = loadingCtrl;
    this.subscriptionProcess = subscriptionProcess;
    this.requiredDocuments = [];
    this.documentImages = {};
    this.next = null;
  }
  ionViewWillEnter() {
    return __async(this, null, function* () {
      var _a, _b;
      const hasForfaitSelected = yield this.subscriptionProcess.hasForfaitSelected();
      if (hasForfaitSelected) {
        yield this.subscriptionProcess.updateStep("documents");
        const process = yield firstValueFrom(this.subscriptionProcess.getCurrentProcess());
        if (((_a = process == null ? void 0 : process.forfait) == null ? void 0 : _a.supporting_documents) && ((_b = process.forfait) == null ? void 0 : _b.supporting_documents.length) > 0) {
          this.requiredDocuments = process.forfait.supporting_documents;
        }
      }
      const queryParams = new URLSearchParams(window.location.search);
      this.next = queryParams.get("next");
    });
  }
  onDocumentImagesChange(documentName, images) {
    this.documentImages[documentName] = images;
  }
  submitDocuments() {
    return __async(this, null, function* () {
      const loading = yield this.loadingCtrl.create({
        message: this.translate.instant("subscription.creation.loading")
      });
      yield loading.present();
      if (this.requiredDocuments.length > 0) {
        const supportingDocuments = Object.entries(this.documentImages).map(([name, images]) => ({
          name,
          front_image: images.front_image,
          back_image: images.back_image
        }));
        yield this.subscriptionProcess.updateSupportingDocuments(supportingDocuments);
      }
      if (this.next) {
        yield this.router.navigate([this.next]);
        yield loading.dismiss();
      } else {
        const payload = yield this.subscriptionProcess.getCreateAbonnementPayload();
        if (!payload) {
          this.toastService.createWithJustMessage(this.translate.instant("error.generic"), ToastType.Error);
          yield loading.dismiss();
          return;
        }
        this.AbonnementWrapperService.createAbonnement(payload).then(() => __async(this, null, function* () {
          yield loading.dismiss();
        }));
      }
    });
  }
  isComplete() {
    return this.requiredDocuments.length === 0 || this.requiredDocuments.every((doc) => {
      var _a;
      return (_a = this.documentImages[doc]) == null ? void 0 : _a.front_image;
    });
  }
};
_SupportingDocumentsPage.\u0275fac = function SupportingDocumentsPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SupportingDocumentsPage)(\u0275\u0275directiveInject(AbonnementWrapperService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(LoadingController), \u0275\u0275directiveInject(SubscriptionProcessService));
};
_SupportingDocumentsPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SupportingDocumentsPage, selectors: [["app-supporting-documents"]], decls: 19, vars: 15, consts: [[3, "title"], [3, "fullscreen"], [1, "ion-padding-horizontal"], [4, "ngFor", "ngForOf"], [1, "ion-padding"], ["expand", "block", 3, "click", "disabled"], [3, "documentUpdate", "documentName", "documentImages"]], template: function SupportingDocumentsPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-header", 0);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "ion-content", 1)(3, "ion-row", 2)(4, "ion-col")(5, "h2");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "ion-row", 2)(12, "ion-col");
    \u0275\u0275template(13, SupportingDocumentsPage_div_13_Template, 2, 3, "div", 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "ion-row", 4)(15, "ion-col")(16, "ion-button", 5);
    \u0275\u0275listener("click", function SupportingDocumentsPage_Template_ion_button_click_16_listener() {
      return ctx.submitDocuments();
    });
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 7, "documents.title"));
    \u0275\u0275advance(2);
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 9, "documents.subtitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 11, "documents.description"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx.requiredDocuments);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx.isComplete());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 13, "documents.submit"), " ");
  }
}, dependencies: [
  CommonModule,
  NgForOf,
  FormsModule,
  IonContent,
  IonRow,
  IonCol,
  IonButton,
  TranslateModule,
  TranslatePipe,
  HeaderComponent,
  DocumentUploaderComponent
], styles: ["\n\nion-thumbnail[_ngcontent-%COMP%] {\n  --border-radius: 4px;\n}\np[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium);\n  font-size: 0.9em;\n  margin-top: -0.5em;\n  margin-bottom: 1em;\n}\n/*# sourceMappingURL=supporting-documents.page.css.map */"] });
var SupportingDocumentsPage = _SupportingDocumentsPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SupportingDocumentsPage, [{
    type: Component,
    args: [{ selector: "app-supporting-documents", imports: [
      CommonModule,
      FormsModule,
      IonContent,
      IonRow,
      IonCol,
      IonButton,
      TranslateModule,
      HeaderComponent,
      DocumentUploaderComponent
    ], template: `<app-header [title]="'documents.title' | translate"></app-header>

<ion-content [fullscreen]="true">
  <ion-row class="ion-padding-horizontal">
    <ion-col>
      <h2>{{ 'documents.subtitle' | translate }}</h2>
      <p>{{ 'documents.description' | translate }}</p>
    </ion-col>
  </ion-row>

  <ion-row class="ion-padding-horizontal">
    <ion-col>
      <div *ngFor="let doc of requiredDocuments">
        <app-document-uploader
          [documentName]="doc"
          [documentImages]="documentImages[doc] || {}"
          (documentUpdate)="onDocumentImagesChange(doc, $event)"
        ></app-document-uploader>
      </div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-padding">
    <ion-col>
      <ion-button
        expand="block"
        (click)="submitDocuments()"
        [disabled]="!isComplete()"
      >
        {{ 'documents.submit' | translate }}
      </ion-button>
    </ion-col>
  </ion-row>
</ion-content>
`, styles: ["/* src/app/pages/supporting-documents/supporting-documents.page.scss */\nion-thumbnail {\n  --border-radius: 4px;\n}\np {\n  color: var(--ion-color-medium);\n  font-size: 0.9em;\n  margin-top: -0.5em;\n  margin-bottom: 1em;\n}\n/*# sourceMappingURL=supporting-documents.page.css.map */\n"] }]
  }], () => [{ type: AbonnementWrapperService }, { type: Router }, { type: ToastService }, { type: TranslateService }, { type: LoadingController }, { type: SubscriptionProcessService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SupportingDocumentsPage, { className: "SupportingDocumentsPage", filePath: "src/app/pages/supporting-documents/supporting-documents.page.ts", lineNumber: 43 });
})();
export {
  SupportingDocumentsPage
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wYWdlcy9zdXBwb3J0aW5nLWRvY3VtZW50cy9zdXBwb3J0aW5nLWRvY3VtZW50cy5wYWdlLnRzIiwgInNyYy9hcHAvcGFnZXMvc3VwcG9ydGluZy1kb2N1bWVudHMvc3VwcG9ydGluZy1kb2N1bWVudHMucGFnZS5odG1sIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xuaW1wb3J0IHtcbiAgQWJvbm5lbWVudFdyYXBwZXJTZXJ2aWNlLFxuICBDcmVhdGVBYm9ubmVtZW50UGFyYW1zLFxufSBmcm9tICdzcmMvYXBwL3NlcnZpY2VzL2FwaS13cmFwcGVycy9hYm9ubmVtZW50LnNlcnZpY2UnXG5pbXBvcnQgeyBUb2FzdFNlcnZpY2UsIFRvYXN0VHlwZSB9IGZyb20gJ3NyYy9hcHAvc2VydmljZXMvdXRpbHMvdG9hc3Quc2VydmljZSdcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSwgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnXG5pbXBvcnQgeyBIZWFkZXJDb21wb25lbnQgfSBmcm9tICdzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQnXG5pbXBvcnQge1xuICBJb25Db250ZW50LFxuICBJb25Sb3csXG4gIElvbkNvbCxcbiAgSW9uQnV0dG9uLFxuICBMb2FkaW5nQ29udHJvbGxlcixcbn0gZnJvbSAnQGlvbmljL2FuZ3VsYXIvc3RhbmRhbG9uZSdcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbidcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnXG5pbXBvcnQgeyBDcmVhdGVBYm9ubmVtZW50UmVxdWVzdFN1cHBvcnRpbmdEb2N1bWVudHNJbm5lciB9IGZyb20gJ3NyYy9hcGktY3ljbGlzdCdcbmltcG9ydCB7IFN1YnNjcmlwdGlvblByb2Nlc3NTZXJ2aWNlIH0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy91dGlscy9zdWJzY3JpcHRpb24tcHJvY2Vzcy5zZXJ2aWNlJ1xuaW1wb3J0IHsgZmlyc3RWYWx1ZUZyb20gfSBmcm9tICdyeGpzJ1xuaW1wb3J0IHtcbiAgRG9jdW1lbnRVcGxvYWRlckNvbXBvbmVudCxcbiAgRG9jdW1lbnRJbWFnZSxcbn0gZnJvbSAnc3JjL2FwcC9jb21wb25lbnRzL2RvY3VtZW50LXVwbG9hZGVyL2RvY3VtZW50LXVwbG9hZGVyLmNvbXBvbmVudCdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXN1cHBvcnRpbmctZG9jdW1lbnRzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1cHBvcnRpbmctZG9jdW1lbnRzLnBhZ2UuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1cHBvcnRpbmctZG9jdW1lbnRzLnBhZ2Uuc2NzcyddLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIElvbkNvbnRlbnQsXG4gICAgSW9uUm93LFxuICAgIElvbkNvbCxcbiAgICBJb25CdXR0b24sXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICAgIEhlYWRlckNvbXBvbmVudCxcbiAgICBEb2N1bWVudFVwbG9hZGVyQ29tcG9uZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBTdXBwb3J0aW5nRG9jdW1lbnRzUGFnZSB7XG4gIHJlcXVpcmVkRG9jdW1lbnRzOiBzdHJpbmdbXSA9IFtdXG4gIGRvY3VtZW50SW1hZ2VzOiB7IFtrZXk6IHN0cmluZ106IERvY3VtZW50SW1hZ2UgfSA9IHt9XG4gIG5leHQ6IHN0cmluZyB8IG51bGwgPSBudWxsXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBBYm9ubmVtZW50V3JhcHBlclNlcnZpY2U6IEFib25uZW1lbnRXcmFwcGVyU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgdG9hc3RTZXJ2aWNlOiBUb2FzdFNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBsb2FkaW5nQ3RybDogTG9hZGluZ0NvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSBzdWJzY3JpcHRpb25Qcm9jZXNzOiBTdWJzY3JpcHRpb25Qcm9jZXNzU2VydmljZVxuICApIHt9XG5cbiAgYXN5bmMgaW9uVmlld1dpbGxFbnRlcigpIHtcbiAgICBjb25zdCBoYXNGb3JmYWl0U2VsZWN0ZWQgPVxuICAgICAgYXdhaXQgdGhpcy5zdWJzY3JpcHRpb25Qcm9jZXNzLmhhc0ZvcmZhaXRTZWxlY3RlZCgpXG4gICAgaWYgKGhhc0ZvcmZhaXRTZWxlY3RlZCkge1xuICAgICAgYXdhaXQgdGhpcy5zdWJzY3JpcHRpb25Qcm9jZXNzLnVwZGF0ZVN0ZXAoJ2RvY3VtZW50cycpXG4gICAgICBjb25zdCBwcm9jZXNzID0gYXdhaXQgZmlyc3RWYWx1ZUZyb20oXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uUHJvY2Vzcy5nZXRDdXJyZW50UHJvY2VzcygpXG4gICAgICApXG5cbiAgICAgIGlmIChcbiAgICAgICAgcHJvY2Vzcz8uZm9yZmFpdD8uc3VwcG9ydGluZ19kb2N1bWVudHMgJiZcbiAgICAgICAgcHJvY2Vzcy5mb3JmYWl0Py5zdXBwb3J0aW5nX2RvY3VtZW50cy5sZW5ndGggPiAwXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5yZXF1aXJlZERvY3VtZW50cyA9IHByb2Nlc3MuZm9yZmFpdC5zdXBwb3J0aW5nX2RvY3VtZW50c1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKVxuICAgIHRoaXMubmV4dCA9IHF1ZXJ5UGFyYW1zLmdldCgnbmV4dCcpXG4gIH1cblxuICBvbkRvY3VtZW50SW1hZ2VzQ2hhbmdlKGRvY3VtZW50TmFtZTogc3RyaW5nLCBpbWFnZXM6IERvY3VtZW50SW1hZ2UpIHtcbiAgICB0aGlzLmRvY3VtZW50SW1hZ2VzW2RvY3VtZW50TmFtZV0gPSBpbWFnZXNcbiAgfVxuXG4gIGFzeW5jIHN1Ym1pdERvY3VtZW50cygpIHtcbiAgICBjb25zdCBsb2FkaW5nID0gYXdhaXQgdGhpcy5sb2FkaW5nQ3RybC5jcmVhdGUoe1xuICAgICAgbWVzc2FnZTogdGhpcy50cmFuc2xhdGUuaW5zdGFudCgnc3Vic2NyaXB0aW9uLmNyZWF0aW9uLmxvYWRpbmcnKSxcbiAgICB9KVxuICAgIGF3YWl0IGxvYWRpbmcucHJlc2VudCgpXG5cbiAgICAvLyBBZGQgc3VwcG9ydGluZyBkb2N1bWVudHMgdG8gcGF5bG9hZCBpZiBhbnlcbiAgICBpZiAodGhpcy5yZXF1aXJlZERvY3VtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBzdXBwb3J0aW5nRG9jdW1lbnRzID0gT2JqZWN0LmVudHJpZXModGhpcy5kb2N1bWVudEltYWdlcykubWFwKFxuICAgICAgICAoW25hbWUsIGltYWdlc10pID0+XG4gICAgICAgICAgKHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBmcm9udF9pbWFnZTogaW1hZ2VzLmZyb250X2ltYWdlLFxuICAgICAgICAgICAgYmFja19pbWFnZTogaW1hZ2VzLmJhY2tfaW1hZ2UsXG4gICAgICAgICAgfSBhcyBDcmVhdGVBYm9ubmVtZW50UmVxdWVzdFN1cHBvcnRpbmdEb2N1bWVudHNJbm5lcilcbiAgICAgIClcbiAgICAgIGF3YWl0IHRoaXMuc3Vic2NyaXB0aW9uUHJvY2Vzcy51cGRhdGVTdXBwb3J0aW5nRG9jdW1lbnRzKFxuICAgICAgICBzdXBwb3J0aW5nRG9jdW1lbnRzXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHRoaXMubmV4dCkge1xuICAgICAgYXdhaXQgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMubmV4dF0pXG4gICAgICBhd2FpdCBsb2FkaW5nLmRpc21pc3MoKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwYXlsb2FkID1cbiAgICAgICAgYXdhaXQgdGhpcy5zdWJzY3JpcHRpb25Qcm9jZXNzLmdldENyZWF0ZUFib25uZW1lbnRQYXlsb2FkKClcbiAgICAgIGlmICghcGF5bG9hZCkge1xuICAgICAgICB0aGlzLnRvYXN0U2VydmljZS5jcmVhdGVXaXRoSnVzdE1lc3NhZ2UoXG4gICAgICAgICAgdGhpcy50cmFuc2xhdGUuaW5zdGFudCgnZXJyb3IuZ2VuZXJpYycpLFxuICAgICAgICAgIFRvYXN0VHlwZS5FcnJvclxuICAgICAgICApXG4gICAgICAgIGF3YWl0IGxvYWRpbmcuZGlzbWlzcygpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLkFib25uZW1lbnRXcmFwcGVyU2VydmljZS5jcmVhdGVBYm9ubmVtZW50KHBheWxvYWQpLnRoZW4oYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCBsb2FkaW5nLmRpc21pc3MoKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgaXNDb21wbGV0ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5yZXF1aXJlZERvY3VtZW50cy5sZW5ndGggPT09IDAgfHxcbiAgICAgIHRoaXMucmVxdWlyZWREb2N1bWVudHMuZXZlcnkoXG4gICAgICAgIChkb2MpID0+IHRoaXMuZG9jdW1lbnRJbWFnZXNbZG9jXT8uZnJvbnRfaW1hZ2VcbiAgICAgIClcbiAgICApXG4gIH1cbn1cbiIsICI8YXBwLWhlYWRlciBbdGl0bGVdPVwiJ2RvY3VtZW50cy50aXRsZScgfCB0cmFuc2xhdGVcIj48L2FwcC1oZWFkZXI+XG5cbjxpb24tY29udGVudCBbZnVsbHNjcmVlbl09XCJ0cnVlXCI+XG4gIDxpb24tcm93IGNsYXNzPVwiaW9uLXBhZGRpbmctaG9yaXpvbnRhbFwiPlxuICAgIDxpb24tY29sPlxuICAgICAgPGgyPnt7ICdkb2N1bWVudHMuc3VidGl0bGUnIHwgdHJhbnNsYXRlIH19PC9oMj5cbiAgICAgIDxwPnt7ICdkb2N1bWVudHMuZGVzY3JpcHRpb24nIHwgdHJhbnNsYXRlIH19PC9wPlxuICAgIDwvaW9uLWNvbD5cbiAgPC9pb24tcm93PlxuXG4gIDxpb24tcm93IGNsYXNzPVwiaW9uLXBhZGRpbmctaG9yaXpvbnRhbFwiPlxuICAgIDxpb24tY29sPlxuICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgZG9jIG9mIHJlcXVpcmVkRG9jdW1lbnRzXCI+XG4gICAgICAgIDxhcHAtZG9jdW1lbnQtdXBsb2FkZXJcbiAgICAgICAgICBbZG9jdW1lbnROYW1lXT1cImRvY1wiXG4gICAgICAgICAgW2RvY3VtZW50SW1hZ2VzXT1cImRvY3VtZW50SW1hZ2VzW2RvY10gfHwge31cIlxuICAgICAgICAgIChkb2N1bWVudFVwZGF0ZSk9XCJvbkRvY3VtZW50SW1hZ2VzQ2hhbmdlKGRvYywgJGV2ZW50KVwiXG4gICAgICAgID48L2FwcC1kb2N1bWVudC11cGxvYWRlcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvaW9uLWNvbD5cbiAgPC9pb24tcm93PlxuXG4gIDxpb24tcm93IGNsYXNzPVwiaW9uLXBhZGRpbmdcIj5cbiAgICA8aW9uLWNvbD5cbiAgICAgIDxpb24tYnV0dG9uXG4gICAgICAgIGV4cGFuZD1cImJsb2NrXCJcbiAgICAgICAgKGNsaWNrKT1cInN1Ym1pdERvY3VtZW50cygpXCJcbiAgICAgICAgW2Rpc2FibGVkXT1cIiFpc0NvbXBsZXRlKClcIlxuICAgICAgPlxuICAgICAgICB7eyAnZG9jdW1lbnRzLnN1Ym1pdCcgfCB0cmFuc2xhdGUgfX1cbiAgICAgIDwvaW9uLWJ1dHRvbj5cbiAgICA8L2lvbi1jb2w+XG4gIDwvaW9uLXJvdz5cbjwvaW9uLWNvbnRlbnQ+XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
