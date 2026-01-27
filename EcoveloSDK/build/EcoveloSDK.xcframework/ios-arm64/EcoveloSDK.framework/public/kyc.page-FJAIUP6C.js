import {
  DocumentUploaderComponent
} from "./chunk-PX3M42XB.js";
import "./chunk-3B54ZNXU.js";
import "./chunk-NEYQRVBS.js";
import {
  HeaderComponent
} from "./chunk-AVAJ3QHV.js";
import "./chunk-OEYRANOA.js";
import "./chunk-K2AWDLYV.js";
import "./chunk-Y4K6NO5T.js";
import {
  KYCWrapperService
} from "./chunk-CHFOG66O.js";
import {
  AccountService,
  SubscriptionProcessService
} from "./chunk-XK4I5MHM.js";
import "./chunk-FOJAXRYS.js";
import {
  ToastService,
  ToastType
} from "./chunk-SARQRLZR.js";
import {
  addIcons,
  checkmarkCircleOutline,
  closeCircleOutline,
  closeOutline,
  cloudUploadOutline,
  eyeOutline,
  timeOutline
} from "./chunk-3E6DEK7U.js";
import "./chunk-U6SJAXLK.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  IonBadge,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonModal2 as IonModal,
  IonRow,
  IonTitle,
  IonToolbar,
  LoadingController,
  NgForOf,
  NgIf,
  Router,
  RouterModule,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  ViewChild,
  computed,
  effect,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
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

// src/app/pages/kyc/kyc.page.ts
var _c0 = ["kycImagesModal"];
var _c1 = () => ({});
function KYCPage_div_12_ion_item_1_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const docName_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "kyc.rejection_reason"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.documentStatuses()[docName_r2].rejection_reason, " ");
  }
}
function KYCPage_div_12_ion_item_1_ion_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 12);
    \u0275\u0275listener("click", function KYCPage_div_12_ion_item_1_ion_button_9_Template_ion_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const docName_r2 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.openKycImagesModal(docName_r2);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(1, "ion-icon", 13);
    \u0275\u0275elementEnd();
  }
}
function KYCPage_div_12_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item", 8);
    \u0275\u0275listener("click", function KYCPage_div_12_ion_item_1_Template_ion_item_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const docName_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView((ctx_r2.existingDocumentImages()[docName_r2].front || ctx_r2.existingDocumentImages()[docName_r2].back) && ctx_r2.openKycImagesModal(docName_r2));
    });
    \u0275\u0275elementStart(1, "ion-label")(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, KYCPage_div_12_ion_item_1_p_5_Template, 5, 4, "p", 9);
    \u0275\u0275elementStart(6, "ion-badge", 10);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, KYCPage_div_12_ion_item_1_ion_button_9_Template, 2, 0, "ion-button", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const docName_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, "documents.kyc." + docName_r2));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.documentStatuses()[docName_r2].status === "rejected" && ctx_r2.documentStatuses()[docName_r2].rejection_reason);
    \u0275\u0275advance();
    \u0275\u0275property("color", ctx_r2.documentStatuses()[docName_r2].color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 7, "kyc.status." + ctx_r2.documentStatuses()[docName_r2].status), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.existingDocumentImages()[docName_r2].front || ctx_r2.existingDocumentImages()[docName_r2].back);
  }
}
function KYCPage_div_12_app_document_uploader_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-document-uploader", 14);
    \u0275\u0275listener("documentUpdate", function KYCPage_div_12_app_document_uploader_2_Template_app_document_uploader_documentUpdate_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const docName_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDocumentImagesChange(docName_r2, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const docName_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("documentName", docName_r2)("documentImages", ctx_r2.documentImages[docName_r2] || \u0275\u0275pureFunction0(3, _c1))("documentStatus", ctx_r2.documentStatuses()[docName_r2].status);
  }
}
function KYCPage_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, KYCPage_div_12_ion_item_1_Template, 10, 9, "ion-item", 6)(2, KYCPage_div_12_app_document_uploader_2_Template, 1, 4, "app-document-uploader", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const docName_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.documentStatuses()[docName_r2].status === "pending" || ctx_r2.documentStatuses()[docName_r2].status === "approved" || ctx_r2.documentStatuses()[docName_r2].status === "rejected");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.documentStatuses()[docName_r2].status !== "pending" && ctx_r2.documentStatuses()[docName_r2].status !== "approved");
  }
}
function KYCPage_ion_row_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-row", 15)(1, "ion-col")(2, "ion-button", 16);
    \u0275\u0275listener("click", function KYCPage_ion_row_13_Template_ion_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.submitDocuments());
    });
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r2.isComplete());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, ctx_r2.getSubmitButtonText()), " ");
  }
}
function KYCPage_ng_template_16_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "ion-img", 21);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "documents.front_side"));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r2.selectedDocumentImages.front)("alt", \u0275\u0275pipeBind1(5, 5, "documents.front_side"));
  }
}
function KYCPage_ng_template_16_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "ion-img", 21);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "documents.back_side"));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r2.selectedDocumentImages.back)("alt", \u0275\u0275pipeBind1(5, 5, "documents.back_side"));
  }
}
function KYCPage_ng_template_16_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "kyc.no_images_available"));
  }
}
function KYCPage_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-header")(1, "ion-toolbar")(2, "ion-title");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-buttons", 17)(6, "ion-button", 18);
    \u0275\u0275listener("click", function KYCPage_ng_template_16_Template_ion_button_click_6_listener() {
      \u0275\u0275restoreView(_r7);
      \u0275\u0275nextContext();
      const kycImagesModal_r8 = \u0275\u0275reference(15);
      return \u0275\u0275resetView(kycImagesModal_r8.dismiss());
    });
    \u0275\u0275element(7, "ion-icon", 19);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(8, "ion-content", 15);
    \u0275\u0275template(9, KYCPage_ng_template_16_div_9_Template, 6, 7, "div", 9)(10, KYCPage_ng_template_16_div_10_Template, 6, 7, "div", 9)(11, KYCPage_ng_template_16_div_11_Template, 4, 3, "div", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, "documents.kyc." + ctx_r2.selectedDocumentName));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r2.selectedDocumentImages.front);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedDocumentImages.back);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.selectedDocumentImages.front && !ctx_r2.selectedDocumentImages.back);
  }
}
var RegistrationState;
(function(RegistrationState2) {
  RegistrationState2["REGISTRATING"] = "registrating";
  RegistrationState2["REGISTRATED"] = "registrated";
})(RegistrationState || (RegistrationState = {}));
var _KYCPage = class _KYCPage {
  constructor(kycService, accountService, router, toastService, translate, loadingCtrl, subscriptionProcess, cdr) {
    this.kycService = kycService;
    this.accountService = accountService;
    this.router = router;
    this.toastService = toastService;
    this.translate = translate;
    this.loadingCtrl = loadingCtrl;
    this.subscriptionProcess = subscriptionProcess;
    this.cdr = cdr;
    this.documentImages = {};
    this.initialDocumentImages = {};
    this.next = null;
    this.registrationState = RegistrationState.REGISTRATED;
    this.cyclistState = {
      state: "unknown",
      blocked_reasons: ["Unknown account state"]
    };
    this.selectedDocumentName = "";
    this.selectedDocumentImages = {};
    this.requiredDocuments = computed(() => {
      return this.kycService.enabledDocumentTypes().map((doc) => doc.name).filter((name) => name !== void 0);
    });
    this.documentStatuses = computed(() => {
      const cyclistState = this.accountService.cyclistState();
      if (!("cyclist" in cyclistState))
        return {};
      const enabledDocs = this.requiredDocuments();
      const statuses = {};
      enabledDocs.forEach((docName) => {
        const cyclistDoc = Object.values(cyclistState.cyclist.kyc_documents || {}).find((doc) => doc.name === docName);
        const status = (cyclistDoc == null ? void 0 : cyclistDoc.status) || "not_submitted";
        let color = "medium";
        switch (status) {
          case "approved":
            color = "success";
            break;
          case "rejected":
            color = "danger";
            break;
          case "pending":
            color = "primary";
            break;
          default:
            color = "medium";
        }
        statuses[docName] = {
          status,
          color,
          rejection_reason: cyclistDoc == null ? void 0 : cyclistDoc.rejection_reason
        };
      });
      return statuses;
    });
    this.existingDocumentImages = computed(() => {
      const cyclistState = this.accountService.cyclistState();
      if (!("cyclist" in cyclistState))
        return {};
      const enabledDocs = this.requiredDocuments();
      const images = {};
      enabledDocs.forEach((docName) => {
        var _a, _b;
        const cyclistDoc = Object.values(cyclistState.cyclist.kyc_documents || {}).find((doc) => doc.name === docName);
        if (cyclistDoc == null ? void 0 : cyclistDoc.files) {
          images[docName] = {
            front: ((_a = cyclistDoc.files.frontside) == null ? void 0 : _a.file_url) || void 0,
            back: ((_b = cyclistDoc.files.backside) == null ? void 0 : _b.file_url) || void 0
          };
        }
      });
      return images;
    });
    addIcons({
      checkmarkCircle: checkmarkCircleOutline,
      closeCircle: closeCircleOutline,
      timeOutline,
      cloudUploadOutline,
      closeOutline,
      eyeOutline
    });
    effect(() => {
      this.cyclistState = this.accountService.cyclistState();
      if (this.cyclistState.state === "unknown") {
        setTimeout(() => {
          const currentState = this.accountService.cyclistState();
          if (currentState.state === "unknown") {
            this.router.navigate(["/map"]);
          }
        }, 2e3);
      }
    });
  }
  ionViewWillEnter() {
    return __async(this, null, function* () {
      const queryParams = new URLSearchParams(window.location.search);
      this.next = queryParams.get("next");
      this.registrationState = queryParams.get("onboarding") === "true" ? RegistrationState.REGISTRATING : RegistrationState.REGISTRATED;
      this.documentImages = {};
      this.initialDocumentImages = {};
      if (this.requiredDocuments().length === 0) {
        this.toastService.createWithJustMessage(this.translate.instant("kyc.no_documents_available"), ToastType.Warning);
      }
    });
  }
  onDocumentImagesChange(documentName, images) {
    this.documentImages[documentName] = images;
  }
  openKycImagesModal(documentName) {
    this.selectedDocumentName = documentName;
    this.selectedDocumentImages = this.existingDocumentImages()[documentName] || {};
    this.kycImagesModal.present();
  }
  submitDocuments() {
    return __async(this, null, function* () {
      const documentsToSubmit = this.requiredDocuments();
      if (documentsToSubmit.length > 0) {
        let loading = null;
        loading = yield this.loadingCtrl.create({
          message: this.translate.instant("kyc.uploading_documents")
        });
        yield loading.present();
        const documentsToUpload = [];
        for (const [documentType, currentImages] of Object.entries(this.documentImages)) {
          const initialImages = this.initialDocumentImages[documentType] || {};
          const frontChanged = currentImages.front_image !== initialImages.front_image;
          const backChanged = currentImages.back_image !== initialImages.back_image;
          if (frontChanged || backChanged) {
            documentsToUpload.push({
              document_type: documentType,
              files: {
                frontside: frontChanged ? currentImages.front_image || void 0 : void 0,
                backside: backChanged ? currentImages.back_image || void 0 : void 0
              }
            });
          }
        }
        for (const document of documentsToUpload) {
          yield this.kycService.uploadDocument(document);
        }
        yield this.accountService.loadCyclist();
        yield this.handlePostUploadNavigation();
        yield loading.dismiss();
      } else if (this.next) {
        yield this.router.navigate([this.next]);
      }
    });
  }
  handlePostUploadNavigation() {
    return __async(this, null, function* () {
      var _a, _b, _c;
      if (this.registrationState === RegistrationState.REGISTRATING) {
        const process = yield firstValueFrom(this.subscriptionProcess.getCurrentProcess());
        const hasSupportingDocuments = ((_a = process == null ? void 0 : process.forfait) == null ? void 0 : _a.supporting_documents) && ((_c = (_b = process == null ? void 0 : process.forfait) == null ? void 0 : _b.supporting_documents) == null ? void 0 : _c.length) > 0;
        if (hasSupportingDocuments) {
          yield this.subscriptionProcess.updateStep("documents");
          yield this.router.navigate(["/supporting-documents"], {
            queryParams: { next: "/verify-phone" },
            replaceUrl: true
          });
        } else {
          yield this.subscriptionProcess.updateStep("phone");
          yield this.router.navigate(["/verify-phone"]);
        }
      } else {
        yield this.router.navigate(["/map"]);
      }
    });
  }
  isComplete() {
    const documentsToSubmit = this.requiredDocuments();
    const statuses = this.documentStatuses();
    if (documentsToSubmit.length === 0) {
      return true;
    }
    const documentsNeedingSubmission = documentsToSubmit.filter((doc) => {
      var _a;
      const status = (_a = statuses[doc]) == null ? void 0 : _a.status;
      return status === "missing" || status === "rejected" || status === "not_submitted";
    });
    if (documentsNeedingSubmission.length === 0) {
      return false;
    }
    const allDocumentsHaveFiles = documentsNeedingSubmission.every((doc) => {
      const docImages = this.documentImages[doc];
      return docImages && (docImages.front_image || docImages.back_image);
    });
    const hasNewFiles = this.hasNewFilesToUpload();
    return allDocumentsHaveFiles && hasNewFiles;
  }
  hasNewFilesToUpload() {
    const result = Object.entries(this.documentImages).some(([docName, currentImages]) => {
      const initialImages = this.initialDocumentImages[docName] || {};
      const frontChanged = currentImages.front_image !== initialImages.front_image;
      const backChanged = currentImages.back_image !== initialImages.back_image;
      return frontChanged || backChanged;
    });
    return result;
  }
  shouldShowSubmitButton() {
    const documentsToSubmit = this.requiredDocuments();
    const statuses = this.documentStatuses();
    if (documentsToSubmit.length === 0) {
      return false;
    }
    return documentsToSubmit.some((doc) => {
      var _a;
      const status = (_a = statuses[doc]) == null ? void 0 : _a.status;
      return status === "missing" || status === "rejected" || status === "not_submitted";
    });
  }
  getSubmitButtonText() {
    const documentsToSubmit = this.requiredDocuments();
    const statuses = this.documentStatuses();
    const hasRejectedDocs = documentsToSubmit.some((doc) => {
      var _a;
      const status = (_a = statuses[doc]) == null ? void 0 : _a.status;
      return status === "rejected";
    });
    if (hasRejectedDocs) {
      return "kyc.resubmit_documents";
    }
    return "kyc.submit_documents";
  }
};
_KYCPage.\u0275fac = function KYCPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _KYCPage)(\u0275\u0275directiveInject(KYCWrapperService), \u0275\u0275directiveInject(AccountService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ToastService), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(LoadingController), \u0275\u0275directiveInject(SubscriptionProcessService), \u0275\u0275directiveInject(ChangeDetectorRef));
};
_KYCPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _KYCPage, selectors: [["app-kyc"]], viewQuery: function KYCPage_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.kycImagesModal = _t.first);
  }
}, decls: 17, vars: 10, consts: [["kycImagesModal", ""], [3, "defaultHref"], [3, "fullscreen"], [1, "ion-padding-horizontal"], [4, "ngFor", "ngForOf"], ["class", "ion-padding", 4, "ngIf"], [3, "click", 4, "ngIf"], [3, "documentName", "documentImages", "documentStatus", "documentUpdate", 4, "ngIf"], [3, "click"], [4, "ngIf"], [1, "ion-no-margin", 3, "color"], ["fill", "clear", "slot", "end", 3, "click", 4, "ngIf"], ["fill", "clear", "slot", "end", 3, "click"], ["name", "eye-outline"], [3, "documentUpdate", "documentName", "documentImages", "documentStatus"], [1, "ion-padding"], ["expand", "block", 3, "click", "disabled"], ["slot", "end"], ["fill", "clear", "color", "dark", 3, "click"], ["name", "close-outline"], ["class", "ion-text-center", 4, "ngIf"], [1, "ion-margin-bottom", 3, "src", "alt"], [1, "ion-text-center"]], template: function KYCPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-header", 1);
    \u0275\u0275elementStart(1, "ion-content", 2)(2, "ion-row", 3)(3, "ion-col")(4, "h2");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "ion-row", 3)(11, "ion-col");
    \u0275\u0275template(12, KYCPage_div_12_Template, 3, 2, "div", 4);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, KYCPage_ion_row_13_Template, 5, 4, "ion-row", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "ion-modal", null, 0);
    \u0275\u0275template(16, KYCPage_ng_template_16_Template, 12, 6, "ng-template");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("defaultHref", "/account");
    \u0275\u0275advance();
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, "kyc.subtitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 8, "kyc.description"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx.requiredDocuments());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.shouldShowSubmitButton());
  }
}, dependencies: [
  CommonModule,
  NgForOf,
  NgIf,
  IonContent,
  IonButton,
  IonRow,
  IonCol,
  IonItem,
  TranslateModule,
  TranslatePipe,
  HeaderComponent,
  DocumentUploaderComponent,
  IonBadge,
  IonLabel,
  IonIcon,
  RouterModule,
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonImg
], encapsulation: 2 });
var KYCPage = _KYCPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KYCPage, [{
    type: Component,
    args: [{ selector: "app-kyc", imports: [
      CommonModule,
      IonContent,
      IonButton,
      IonRow,
      IonCol,
      IonItem,
      TranslateModule,
      HeaderComponent,
      DocumentUploaderComponent,
      IonBadge,
      IonLabel,
      IonIcon,
      RouterModule,
      IonModal,
      IonHeader,
      IonToolbar,
      IonTitle,
      IonButtons,
      IonImg
    ], template: `<app-header [defaultHref]="'/account'"></app-header>

<ion-content [fullscreen]="true">
  <ion-row class="ion-padding-horizontal">
    <ion-col>
      <h2>{{ 'kyc.subtitle' | translate }}</h2>
      <p>{{ 'kyc.description' | translate }}</p>
    </ion-col>
  </ion-row>

  <ion-row class="ion-padding-horizontal">
    <ion-col>
      <div *ngFor="let docName of requiredDocuments()">
        <ion-item
          *ngIf="documentStatuses()[docName].status === 'pending' || 
                   documentStatuses()[docName].status === 'approved' || 
                   documentStatuses()[docName].status === 'rejected'"
          (click)="(existingDocumentImages()[docName].front || existingDocumentImages()[docName].back) && openKycImagesModal(docName)"
        >
          <ion-label>
            <h2>{{ 'documents.kyc.' + docName | translate }}</h2>
            <p
              *ngIf="documentStatuses()[docName].status === 'rejected' && documentStatuses()[docName].rejection_reason"
            >
              <strong>{{ 'kyc.rejection_reason' | translate }}:</strong>
              {{ documentStatuses()[docName].rejection_reason }}
            </p>
            <ion-badge
              [color]="documentStatuses()[docName].color"
              class="ion-no-margin"
            >
              {{ 'kyc.status.' + documentStatuses()[docName].status | translate
              }}
            </ion-badge>
          </ion-label>
          <ion-button
            *ngIf="existingDocumentImages()[docName].front || existingDocumentImages()[docName].back"
            fill="clear"
            slot="end"
            (click)="openKycImagesModal(docName); $event.stopPropagation()"
          >
            <ion-icon name="eye-outline"></ion-icon>
          </ion-button>
        </ion-item>
        <app-document-uploader
          *ngIf="documentStatuses()[docName].status !== 'pending' && 
                 documentStatuses()[docName].status !== 'approved'"
          [documentName]="docName"
          [documentImages]="documentImages[docName] || {}"
          [documentStatus]="documentStatuses()[docName].status"
          (documentUpdate)="onDocumentImagesChange(docName, $event)"
        ></app-document-uploader>
      </div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-padding" *ngIf="shouldShowSubmitButton()">
    <ion-col>
      <ion-button
        expand="block"
        (click)="submitDocuments()"
        [disabled]="!isComplete()"
      >
        {{ getSubmitButtonText() | translate }}
      </ion-button>
    </ion-col>
  </ion-row>
</ion-content>

<!-- KYC Images Modal -->
<ion-modal #kycImagesModal>
  <ng-template>
    <ion-header>
      <ion-toolbar>
        <ion-title
          >{{ 'documents.kyc.' + selectedDocumentName | translate }}</ion-title
        >
        <ion-buttons slot="end">
          <ion-button
            (click)="kycImagesModal.dismiss()"
            fill="clear"
            color="dark"
          >
            <ion-icon name="close-outline"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <!-- Front side -->
      <div *ngIf="selectedDocumentImages.front">
        <h3>{{ 'documents.front_side' | translate }}</h3>
        <ion-img
          [src]="selectedDocumentImages.front"
          [alt]="'documents.front_side' | translate"
          class="ion-margin-bottom"
        ></ion-img>
      </div>

      <!-- Back side -->
      <div *ngIf="selectedDocumentImages.back">
        <h3>{{ 'documents.back_side' | translate }}</h3>
        <ion-img
          [src]="selectedDocumentImages.back"
          [alt]="'documents.back_side' | translate"
          class="ion-margin-bottom"
        ></ion-img>
      </div>

      <!-- No images message -->
      <div
        *ngIf="!selectedDocumentImages.front && !selectedDocumentImages.back"
        class="ion-text-center"
      >
        <p>{{ 'kyc.no_images_available' | translate }}</p>
      </div>
    </ion-content>
  </ng-template>
</ion-modal>
` }]
  }], () => [{ type: KYCWrapperService }, { type: AccountService }, { type: Router }, { type: ToastService }, { type: TranslateService }, { type: LoadingController }, { type: SubscriptionProcessService }, { type: ChangeDetectorRef }], { kycImagesModal: [{
    type: ViewChild,
    args: ["kycImagesModal"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(KYCPage, { className: "KYCPage", filePath: "src/app/pages/kyc/kyc.page.ts", lineNumber: 90 });
})();
export {
  KYCPage
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9wYWdlcy9reWMva3ljLnBhZ2UudHMiLCAic3JjL2FwcC9wYWdlcy9reWMva3ljLnBhZ2UuaHRtbCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBjb21wdXRlZCxcbiAgc2lnbmFsLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgZWZmZWN0LFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInXG5pbXBvcnQge1xuICBJb25Db250ZW50LFxuICBJb25CdXR0b24sXG4gIElvblRleHQsXG4gIElvblJvdyxcbiAgSW9uQ29sLFxuICBJb25CYWRnZSxcbiAgSW9uTGFiZWwsXG4gIExvYWRpbmdDb250cm9sbGVyLFxuICBJb25JY29uLFxuICBJb25JdGVtLFxuICBJb25Nb2RhbCxcbiAgSW9uSGVhZGVyLFxuICBJb25Ub29sYmFyLFxuICBJb25UaXRsZSxcbiAgSW9uQnV0dG9ucyxcbiAgSW9uSW1nLFxufSBmcm9tICdAaW9uaWMvYW5ndWxhci9zdGFuZGFsb25lJ1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlLCBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSdcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcbmltcG9ydCB7IGFkZEljb25zIH0gZnJvbSAnaW9uaWNvbnMnXG5pbXBvcnQge1xuICBjaGVja21hcmtDaXJjbGVPdXRsaW5lLFxuICBjbG9zZUNpcmNsZU91dGxpbmUsXG4gIHRpbWVPdXRsaW5lLFxuICBjbG91ZFVwbG9hZE91dGxpbmUsXG4gIGNsb3NlT3V0bGluZSxcbiAgZXllT3V0bGluZSxcbn0gZnJvbSAnaW9uaWNvbnMvaWNvbnMnXG5pbXBvcnQgeyBIZWFkZXJDb21wb25lbnQgfSBmcm9tICdzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQnXG5pbXBvcnQge1xuICBEb2N1bWVudFVwbG9hZGVyQ29tcG9uZW50LFxuICBEb2N1bWVudEltYWdlLFxuICBEb2N1bWVudFNpZGUsXG59IGZyb20gJ3NyYy9hcHAvY29tcG9uZW50cy9kb2N1bWVudC11cGxvYWRlci9kb2N1bWVudC11cGxvYWRlci5jb21wb25lbnQnXG5pbXBvcnQge1xuICBLWUNXcmFwcGVyU2VydmljZSxcbiAgRG9jdW1lbnRVcGxvYWRSZXF1ZXN0LFxufSBmcm9tICdzcmMvYXBwL3NlcnZpY2VzL2FwaS13cmFwcGVycy9reWMuc2VydmljZSdcbmltcG9ydCB7XG4gIEFjY291bnRTZXJ2aWNlLFxuICBjeWNsaXN0U3RhdGUsXG59IGZyb20gJ3NyYy9hcHAvc2VydmljZXMvYXBpLXdyYXBwZXJzL2FjY291bnQuc2VydmljZSdcbmltcG9ydCB7IFN1YnNjcmlwdGlvblByb2Nlc3NTZXJ2aWNlIH0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy91dGlscy9zdWJzY3JpcHRpb24tcHJvY2Vzcy5zZXJ2aWNlJ1xuaW1wb3J0IHsgVG9hc3RTZXJ2aWNlLCBUb2FzdFR5cGUgfSBmcm9tICdzcmMvYXBwL3NlcnZpY2VzL3V0aWxzL3RvYXN0LnNlcnZpY2UnXG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gJ3NyYy9hcHAvc2VydmljZXMvdXRpbHMvc3RvcmFnZS5zZXJ2aWNlJ1xuaW1wb3J0IHsgZmlyc3RWYWx1ZUZyb20gfSBmcm9tICdyeGpzJ1xuXG5lbnVtIFJlZ2lzdHJhdGlvblN0YXRlIHtcbiAgUkVHSVNUUkFUSU5HID0gJ3JlZ2lzdHJhdGluZycsXG4gIFJFR0lTVFJBVEVEID0gJ3JlZ2lzdHJhdGVkJyxcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWt5YycsXG4gIHRlbXBsYXRlVXJsOiAnLi9reWMucGFnZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4va3ljLnBhZ2Uuc2NzcyddLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIElvbkNvbnRlbnQsXG4gICAgSW9uQnV0dG9uLFxuICAgIElvblJvdyxcbiAgICBJb25Db2wsXG4gICAgSW9uSXRlbSxcbiAgICBUcmFuc2xhdGVNb2R1bGUsXG4gICAgSGVhZGVyQ29tcG9uZW50LFxuICAgIERvY3VtZW50VXBsb2FkZXJDb21wb25lbnQsXG4gICAgSW9uQmFkZ2UsXG4gICAgSW9uTGFiZWwsXG4gICAgSW9uSWNvbixcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgSW9uTW9kYWwsXG4gICAgSW9uSGVhZGVyLFxuICAgIElvblRvb2xiYXIsXG4gICAgSW9uVGl0bGUsXG4gICAgSW9uQnV0dG9ucyxcbiAgICBJb25JbWcsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEtZQ1BhZ2Uge1xuICBAVmlld0NoaWxkKCdreWNJbWFnZXNNb2RhbCcpIGt5Y0ltYWdlc01vZGFsITogSW9uTW9kYWxcblxuICBkb2N1bWVudEltYWdlczogeyBba2V5OiBzdHJpbmddOiBEb2N1bWVudEltYWdlIH0gPSB7fVxuICBpbml0aWFsRG9jdW1lbnRJbWFnZXM6IHsgW2tleTogc3RyaW5nXTogRG9jdW1lbnRJbWFnZSB9ID0ge30gLy8gVHJhY2sgaW5pdGlhbCBzdGF0ZVxuICBuZXh0OiBzdHJpbmcgfCBudWxsID0gbnVsbFxuICByZWdpc3RyYXRpb25TdGF0ZTogUmVnaXN0cmF0aW9uU3RhdGUgPSBSZWdpc3RyYXRpb25TdGF0ZS5SRUdJU1RSQVRFRFxuICBjeWNsaXN0U3RhdGU6IGN5Y2xpc3RTdGF0ZSA9IHtcbiAgICBzdGF0ZTogJ3Vua25vd24nLFxuICAgIGJsb2NrZWRfcmVhc29uczogWydVbmtub3duIGFjY291bnQgc3RhdGUnXSxcbiAgfVxuICBzZWxlY3RlZERvY3VtZW50TmFtZTogc3RyaW5nID0gJydcbiAgc2VsZWN0ZWREb2N1bWVudEltYWdlczogeyBmcm9udD86IHN0cmluZzsgYmFjaz86IHN0cmluZyB9ID0ge31cblxuICAvLyBHZXQgZG9jdW1lbnQgbmFtZXMgZm9yIGl0ZXJhdGlvblxuICByZXF1aXJlZERvY3VtZW50cyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5reWNTZXJ2aWNlXG4gICAgICAuZW5hYmxlZERvY3VtZW50VHlwZXMoKVxuICAgICAgLm1hcCgoZG9jKSA9PiBkb2MubmFtZSlcbiAgICAgIC5maWx0ZXIoKG5hbWUpOiBuYW1lIGlzIHN0cmluZyA9PiBuYW1lICE9PSB1bmRlZmluZWQpXG4gIH0pXG5cbiAgLy8gR2V0IGRvY3VtZW50IHN0YXR1c2VzIGZvciBkaXNwbGF5XG4gIGRvY3VtZW50U3RhdHVzZXMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgY3ljbGlzdFN0YXRlID0gdGhpcy5hY2NvdW50U2VydmljZS5jeWNsaXN0U3RhdGUoKVxuICAgIGlmICghKCdjeWNsaXN0JyBpbiBjeWNsaXN0U3RhdGUpKSByZXR1cm4ge31cblxuICAgIGNvbnN0IGVuYWJsZWREb2NzID0gdGhpcy5yZXF1aXJlZERvY3VtZW50cygpXG4gICAgY29uc3Qgc3RhdHVzZXM6IHtcbiAgICAgIFtrZXk6IHN0cmluZ106IHtcbiAgICAgICAgc3RhdHVzOiBzdHJpbmdcbiAgICAgICAgY29sb3I6IHN0cmluZ1xuICAgICAgICByZWplY3Rpb25fcmVhc29uPzogc3RyaW5nXG4gICAgICB9XG4gICAgfSA9IHt9XG5cbiAgICBlbmFibGVkRG9jcy5mb3JFYWNoKChkb2NOYW1lKSA9PiB7XG4gICAgICBjb25zdCBjeWNsaXN0RG9jID0gT2JqZWN0LnZhbHVlcyhcbiAgICAgICAgY3ljbGlzdFN0YXRlLmN5Y2xpc3Qua3ljX2RvY3VtZW50cyB8fCB7fVxuICAgICAgKS5maW5kKChkb2M6IGFueSkgPT4gZG9jLm5hbWUgPT09IGRvY05hbWUpXG5cbiAgICAgIGNvbnN0IHN0YXR1cyA9IGN5Y2xpc3REb2M/LnN0YXR1cyB8fCAnbm90X3N1Ym1pdHRlZCdcbiAgICAgIGxldCBjb2xvciA9ICdtZWRpdW0nXG5cbiAgICAgIHN3aXRjaCAoc3RhdHVzKSB7XG4gICAgICAgIGNhc2UgJ2FwcHJvdmVkJzpcbiAgICAgICAgICBjb2xvciA9ICdzdWNjZXNzJ1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ3JlamVjdGVkJzpcbiAgICAgICAgICBjb2xvciA9ICdkYW5nZXInXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAncGVuZGluZyc6XG4gICAgICAgICAgY29sb3IgPSAncHJpbWFyeSdcbiAgICAgICAgICBicmVha1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbG9yID0gJ21lZGl1bSdcbiAgICAgIH1cblxuICAgICAgc3RhdHVzZXNbZG9jTmFtZV0gPSB7XG4gICAgICAgIHN0YXR1cyxcbiAgICAgICAgY29sb3IsXG4gICAgICAgIHJlamVjdGlvbl9yZWFzb246IGN5Y2xpc3REb2M/LnJlamVjdGlvbl9yZWFzb24sXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBzdGF0dXNlc1xuICB9KVxuXG4gIC8vIEdldCBleGlzdGluZyBkb2N1bWVudCBpbWFnZXNcbiAgZXhpc3RpbmdEb2N1bWVudEltYWdlcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBjeWNsaXN0U3RhdGUgPSB0aGlzLmFjY291bnRTZXJ2aWNlLmN5Y2xpc3RTdGF0ZSgpXG4gICAgaWYgKCEoJ2N5Y2xpc3QnIGluIGN5Y2xpc3RTdGF0ZSkpIHJldHVybiB7fVxuXG4gICAgY29uc3QgZW5hYmxlZERvY3MgPSB0aGlzLnJlcXVpcmVkRG9jdW1lbnRzKClcbiAgICBjb25zdCBpbWFnZXM6IHsgW2tleTogc3RyaW5nXTogeyBmcm9udD86IHN0cmluZzsgYmFjaz86IHN0cmluZyB9IH0gPSB7fVxuXG4gICAgZW5hYmxlZERvY3MuZm9yRWFjaCgoZG9jTmFtZSkgPT4ge1xuICAgICAgY29uc3QgY3ljbGlzdERvYyA9IE9iamVjdC52YWx1ZXMoXG4gICAgICAgIGN5Y2xpc3RTdGF0ZS5jeWNsaXN0Lmt5Y19kb2N1bWVudHMgfHwge31cbiAgICAgICkuZmluZCgoZG9jOiBhbnkpID0+IGRvYy5uYW1lID09PSBkb2NOYW1lKVxuXG4gICAgICBpZiAoY3ljbGlzdERvYz8uZmlsZXMpIHtcbiAgICAgICAgaW1hZ2VzW2RvY05hbWVdID0ge1xuICAgICAgICAgIGZyb250OiBjeWNsaXN0RG9jLmZpbGVzLmZyb250c2lkZT8uZmlsZV91cmwgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgIGJhY2s6IGN5Y2xpc3REb2MuZmlsZXMuYmFja3NpZGU/LmZpbGVfdXJsIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gaW1hZ2VzXG4gIH0pXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBreWNTZXJ2aWNlOiBLWUNXcmFwcGVyU2VydmljZSxcbiAgICBwcml2YXRlIGFjY291bnRTZXJ2aWNlOiBBY2NvdW50U2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgdG9hc3RTZXJ2aWNlOiBUb2FzdFNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBsb2FkaW5nQ3RybDogTG9hZGluZ0NvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSBzdWJzY3JpcHRpb25Qcm9jZXNzOiBTdWJzY3JpcHRpb25Qcm9jZXNzU2VydmljZSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgYWRkSWNvbnMoe1xuICAgICAgY2hlY2ttYXJrQ2lyY2xlOiBjaGVja21hcmtDaXJjbGVPdXRsaW5lLFxuICAgICAgY2xvc2VDaXJjbGU6IGNsb3NlQ2lyY2xlT3V0bGluZSxcbiAgICAgIHRpbWVPdXRsaW5lOiB0aW1lT3V0bGluZSxcbiAgICAgIGNsb3VkVXBsb2FkT3V0bGluZTogY2xvdWRVcGxvYWRPdXRsaW5lLFxuICAgICAgY2xvc2VPdXRsaW5lOiBjbG9zZU91dGxpbmUsXG4gICAgICBleWVPdXRsaW5lOiBleWVPdXRsaW5lLFxuICAgIH0pXG4gICAgZWZmZWN0KCgpID0+IHtcbiAgICAgIHRoaXMuY3ljbGlzdFN0YXRlID0gdGhpcy5hY2NvdW50U2VydmljZS5jeWNsaXN0U3RhdGUoKVxuICAgICAgaWYgKHRoaXMuY3ljbGlzdFN0YXRlLnN0YXRlID09PSAndW5rbm93bicpIHtcbiAgICAgICAgLy8gV2FpdCBhIGJpdCB0byBhbGxvdyBkYXRhIHRvIGxvYWQgYmVmb3JlIHJlZGlyZWN0aW5nXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnRTdGF0ZSA9IHRoaXMuYWNjb3VudFNlcnZpY2UuY3ljbGlzdFN0YXRlKClcblxuICAgICAgICAgIGlmIChjdXJyZW50U3RhdGUuc3RhdGUgPT09ICd1bmtub3duJykge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbWFwJ10pXG4gICAgICAgICAgfVxuICAgICAgICB9LCAyMDAwKSAvLyBXYWl0IDIgc2Vjb25kc1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBhc3luYyBpb25WaWV3V2lsbEVudGVyKCkge1xuICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKVxuICAgIHRoaXMubmV4dCA9IHF1ZXJ5UGFyYW1zLmdldCgnbmV4dCcpXG4gICAgdGhpcy5yZWdpc3RyYXRpb25TdGF0ZSA9XG4gICAgICBxdWVyeVBhcmFtcy5nZXQoJ29uYm9hcmRpbmcnKSA9PT0gJ3RydWUnXG4gICAgICAgID8gUmVnaXN0cmF0aW9uU3RhdGUuUkVHSVNUUkFUSU5HXG4gICAgICAgIDogUmVnaXN0cmF0aW9uU3RhdGUuUkVHSVNUUkFURURcbiAgICB0aGlzLmRvY3VtZW50SW1hZ2VzID0ge31cbiAgICB0aGlzLmluaXRpYWxEb2N1bWVudEltYWdlcyA9IHt9XG5cbiAgICBpZiAodGhpcy5yZXF1aXJlZERvY3VtZW50cygpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy50b2FzdFNlcnZpY2UuY3JlYXRlV2l0aEp1c3RNZXNzYWdlKFxuICAgICAgICB0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KCdreWMubm9fZG9jdW1lbnRzX2F2YWlsYWJsZScpLFxuICAgICAgICBUb2FzdFR5cGUuV2FybmluZ1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIG9uRG9jdW1lbnRJbWFnZXNDaGFuZ2UoZG9jdW1lbnROYW1lOiBzdHJpbmcsIGltYWdlczogRG9jdW1lbnRJbWFnZSkge1xuICAgIHRoaXMuZG9jdW1lbnRJbWFnZXNbZG9jdW1lbnROYW1lXSA9IGltYWdlc1xuICB9XG5cbiAgb3Blbkt5Y0ltYWdlc01vZGFsKGRvY3VtZW50TmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zZWxlY3RlZERvY3VtZW50TmFtZSA9IGRvY3VtZW50TmFtZVxuICAgIHRoaXMuc2VsZWN0ZWREb2N1bWVudEltYWdlcyA9XG4gICAgICB0aGlzLmV4aXN0aW5nRG9jdW1lbnRJbWFnZXMoKVtkb2N1bWVudE5hbWVdIHx8IHt9XG4gICAgdGhpcy5reWNJbWFnZXNNb2RhbC5wcmVzZW50KClcbiAgfVxuXG4gIGFzeW5jIHN1Ym1pdERvY3VtZW50cygpIHtcbiAgICBjb25zdCBkb2N1bWVudHNUb1N1Ym1pdCA9IHRoaXMucmVxdWlyZWREb2N1bWVudHMoKVxuXG4gICAgaWYgKGRvY3VtZW50c1RvU3VibWl0Lmxlbmd0aCA+IDApIHtcbiAgICAgIGxldCBsb2FkaW5nOiBIVE1MSW9uTG9hZGluZ0VsZW1lbnQgfCBudWxsID0gbnVsbFxuXG4gICAgICBsb2FkaW5nID0gYXdhaXQgdGhpcy5sb2FkaW5nQ3RybC5jcmVhdGUoe1xuICAgICAgICBtZXNzYWdlOiB0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KCdreWMudXBsb2FkaW5nX2RvY3VtZW50cycpLFxuICAgICAgfSlcbiAgICAgIGF3YWl0IGxvYWRpbmcucHJlc2VudCgpXG5cbiAgICAgIC8vIENvbGxlY3QgYWxsIGRvY3VtZW50cyB0aGF0IG5lZWQgdG8gYmUgdXBsb2FkZWRcbiAgICAgIGNvbnN0IGRvY3VtZW50c1RvVXBsb2FkOiBEb2N1bWVudFVwbG9hZFJlcXVlc3RbXSA9IFtdXG5cbiAgICAgIGZvciAoY29uc3QgW2RvY3VtZW50VHlwZSwgY3VycmVudEltYWdlc10gb2YgT2JqZWN0LmVudHJpZXMoXG4gICAgICAgIHRoaXMuZG9jdW1lbnRJbWFnZXNcbiAgICAgICkpIHtcbiAgICAgICAgY29uc3QgaW5pdGlhbEltYWdlcyA9IHRoaXMuaW5pdGlhbERvY3VtZW50SW1hZ2VzW2RvY3VtZW50VHlwZV0gfHwge31cblxuICAgICAgICAvLyBPbmx5IHVwbG9hZCBpZiBpbWFnZXMgaGF2ZSBjaGFuZ2VkIGZyb20gaW5pdGlhbCBzdGF0ZVxuICAgICAgICBjb25zdCBmcm9udENoYW5nZWQgPVxuICAgICAgICAgIGN1cnJlbnRJbWFnZXMuZnJvbnRfaW1hZ2UgIT09IGluaXRpYWxJbWFnZXMuZnJvbnRfaW1hZ2VcbiAgICAgICAgY29uc3QgYmFja0NoYW5nZWQgPVxuICAgICAgICAgIGN1cnJlbnRJbWFnZXMuYmFja19pbWFnZSAhPT0gaW5pdGlhbEltYWdlcy5iYWNrX2ltYWdlXG5cbiAgICAgICAgaWYgKGZyb250Q2hhbmdlZCB8fCBiYWNrQ2hhbmdlZCkge1xuICAgICAgICAgIGRvY3VtZW50c1RvVXBsb2FkLnB1c2goe1xuICAgICAgICAgICAgZG9jdW1lbnRfdHlwZTogZG9jdW1lbnRUeXBlLFxuICAgICAgICAgICAgZmlsZXM6IHtcbiAgICAgICAgICAgICAgZnJvbnRzaWRlOiBmcm9udENoYW5nZWRcbiAgICAgICAgICAgICAgICA/IGN1cnJlbnRJbWFnZXMuZnJvbnRfaW1hZ2UgfHwgdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIGJhY2tzaWRlOiBiYWNrQ2hhbmdlZFxuICAgICAgICAgICAgICAgID8gY3VycmVudEltYWdlcy5iYWNrX2ltYWdlIHx8IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFVwbG9hZCBhbGwgZG9jdW1lbnRzIGluIHNlcXVlbmNlXG4gICAgICBmb3IgKGNvbnN0IGRvY3VtZW50IG9mIGRvY3VtZW50c1RvVXBsb2FkKSB7XG4gICAgICAgIGF3YWl0IHRoaXMua3ljU2VydmljZS51cGxvYWREb2N1bWVudChkb2N1bWVudClcbiAgICAgIH1cblxuICAgICAgLy8gT25seSByZWxvYWQgY3ljbGlzdCBkYXRhIG9uY2UgYWZ0ZXIgYWxsIHVwbG9hZHMgYXJlIGNvbXBsZXRlXG4gICAgICBhd2FpdCB0aGlzLmFjY291bnRTZXJ2aWNlLmxvYWRDeWNsaXN0KClcbiAgICAgIGF3YWl0IHRoaXMuaGFuZGxlUG9zdFVwbG9hZE5hdmlnYXRpb24oKVxuICAgICAgYXdhaXQgbG9hZGluZy5kaXNtaXNzKClcbiAgICB9IGVsc2UgaWYgKHRoaXMubmV4dCkge1xuICAgICAgYXdhaXQgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMubmV4dF0pXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUG9zdFVwbG9hZE5hdmlnYXRpb24oKSB7XG4gICAgaWYgKHRoaXMucmVnaXN0cmF0aW9uU3RhdGUgPT09IFJlZ2lzdHJhdGlvblN0YXRlLlJFR0lTVFJBVElORykge1xuICAgICAgY29uc3QgcHJvY2VzcyA9IGF3YWl0IGZpcnN0VmFsdWVGcm9tKFxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvblByb2Nlc3MuZ2V0Q3VycmVudFByb2Nlc3MoKVxuICAgICAgKVxuXG4gICAgICBjb25zdCBoYXNTdXBwb3J0aW5nRG9jdW1lbnRzID1cbiAgICAgICAgcHJvY2Vzcz8uZm9yZmFpdD8uc3VwcG9ydGluZ19kb2N1bWVudHMgJiZcbiAgICAgICAgcHJvY2Vzcz8uZm9yZmFpdD8uc3VwcG9ydGluZ19kb2N1bWVudHM/Lmxlbmd0aCA+IDBcblxuICAgICAgaWYgKGhhc1N1cHBvcnRpbmdEb2N1bWVudHMpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5zdWJzY3JpcHRpb25Qcm9jZXNzLnVwZGF0ZVN0ZXAoJ2RvY3VtZW50cycpXG4gICAgICAgIGF3YWl0IHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3N1cHBvcnRpbmctZG9jdW1lbnRzJ10sIHtcbiAgICAgICAgICBxdWVyeVBhcmFtczogeyBuZXh0OiAnL3ZlcmlmeS1waG9uZScgfSxcbiAgICAgICAgICByZXBsYWNlVXJsOiB0cnVlLFxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXdhaXQgdGhpcy5zdWJzY3JpcHRpb25Qcm9jZXNzLnVwZGF0ZVN0ZXAoJ3Bob25lJylcbiAgICAgICAgYXdhaXQgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvdmVyaWZ5LXBob25lJ10pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGF3YWl0IHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL21hcCddKVxuICAgIH1cbiAgfVxuXG4gIGlzQ29tcGxldGUoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZG9jdW1lbnRzVG9TdWJtaXQgPSB0aGlzLnJlcXVpcmVkRG9jdW1lbnRzKClcbiAgICBjb25zdCBzdGF0dXNlcyA9IHRoaXMuZG9jdW1lbnRTdGF0dXNlcygpXG5cbiAgICAvLyBJZiBubyBkb2N1bWVudHMgYXJlIHJlcXVpcmVkIGF0IGFsbCwgZW5hYmxlIGJ1dHRvblxuICAgIGlmIChkb2N1bWVudHNUb1N1Ym1pdC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gR2V0IGFsbCBkb2N1bWVudHMgdGhhdCBuZWVkIHRvIGJlIHN1Ym1pdHRlZCAobWlzc2luZywgcmVqZWN0ZWQsIG9yIG5vdF9zdWJtaXR0ZWQpXG4gICAgY29uc3QgZG9jdW1lbnRzTmVlZGluZ1N1Ym1pc3Npb24gPSBkb2N1bWVudHNUb1N1Ym1pdC5maWx0ZXIoKGRvYykgPT4ge1xuICAgICAgY29uc3Qgc3RhdHVzID0gc3RhdHVzZXNbZG9jXT8uc3RhdHVzXG4gICAgICByZXR1cm4gKFxuICAgICAgICBzdGF0dXMgPT09ICdtaXNzaW5nJyB8fFxuICAgICAgICBzdGF0dXMgPT09ICdyZWplY3RlZCcgfHxcbiAgICAgICAgc3RhdHVzID09PSAnbm90X3N1Ym1pdHRlZCdcbiAgICAgIClcbiAgICB9KVxuXG4gICAgLy8gSWYgbm8gZG9jdW1lbnRzIG5lZWQgc3VibWlzc2lvbiwgZGlzYWJsZSBidXR0b25cbiAgICBpZiAoZG9jdW1lbnRzTmVlZGluZ1N1Ym1pc3Npb24ubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBDaGVjayB0aGF0IEFMTCBkb2N1bWVudHMgbmVlZGluZyBzdWJtaXNzaW9uIGhhdmUgYXQgbGVhc3Qgb25lIHNpZGUgZmlsbGVkXG4gICAgY29uc3QgYWxsRG9jdW1lbnRzSGF2ZUZpbGVzID0gZG9jdW1lbnRzTmVlZGluZ1N1Ym1pc3Npb24uZXZlcnkoKGRvYykgPT4ge1xuICAgICAgY29uc3QgZG9jSW1hZ2VzID0gdGhpcy5kb2N1bWVudEltYWdlc1tkb2NdXG4gICAgICByZXR1cm4gZG9jSW1hZ2VzICYmIChkb2NJbWFnZXMuZnJvbnRfaW1hZ2UgfHwgZG9jSW1hZ2VzLmJhY2tfaW1hZ2UpXG4gICAgfSlcblxuICAgIC8vIENoZWNrIGlmIHdlIGhhdmUgbmV3IGZpbGVzIHRvIHVwbG9hZFxuICAgIGNvbnN0IGhhc05ld0ZpbGVzID0gdGhpcy5oYXNOZXdGaWxlc1RvVXBsb2FkKClcblxuICAgIC8vIEVuYWJsZSBidXR0b24gb25seSBpZiBBTEwgcmVxdWlyZWQgZG9jdW1lbnRzIGhhdmUgZmlsZXMgQU5EIHRoZXJlIGFyZSBuZXcgZmlsZXMgdG8gdXBsb2FkXG4gICAgcmV0dXJuIGFsbERvY3VtZW50c0hhdmVGaWxlcyAmJiBoYXNOZXdGaWxlc1xuICB9XG5cbiAgcHJpdmF0ZSBoYXNOZXdGaWxlc1RvVXBsb2FkKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IE9iamVjdC5lbnRyaWVzKHRoaXMuZG9jdW1lbnRJbWFnZXMpLnNvbWUoXG4gICAgICAoW2RvY05hbWUsIGN1cnJlbnRJbWFnZXNdKSA9PiB7XG4gICAgICAgIGNvbnN0IGluaXRpYWxJbWFnZXMgPSB0aGlzLmluaXRpYWxEb2N1bWVudEltYWdlc1tkb2NOYW1lXSB8fCB7fVxuXG4gICAgICAgIGNvbnN0IGZyb250Q2hhbmdlZCA9XG4gICAgICAgICAgY3VycmVudEltYWdlcy5mcm9udF9pbWFnZSAhPT0gaW5pdGlhbEltYWdlcy5mcm9udF9pbWFnZVxuICAgICAgICBjb25zdCBiYWNrQ2hhbmdlZCA9XG4gICAgICAgICAgY3VycmVudEltYWdlcy5iYWNrX2ltYWdlICE9PSBpbml0aWFsSW1hZ2VzLmJhY2tfaW1hZ2VcblxuICAgICAgICByZXR1cm4gZnJvbnRDaGFuZ2VkIHx8IGJhY2tDaGFuZ2VkXG4gICAgICB9XG4gICAgKVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIHNob3VsZFNob3dTdWJtaXRCdXR0b24oKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZG9jdW1lbnRzVG9TdWJtaXQgPSB0aGlzLnJlcXVpcmVkRG9jdW1lbnRzKClcbiAgICBjb25zdCBzdGF0dXNlcyA9IHRoaXMuZG9jdW1lbnRTdGF0dXNlcygpXG5cbiAgICAvLyBJZiBubyBkb2N1bWVudHMgYXJlIHJlcXVpcmVkLCBkb24ndCBzaG93IHRoZSBidXR0b25cbiAgICBpZiAoZG9jdW1lbnRzVG9TdWJtaXQubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBTaG93IGJ1dHRvbiBpZiB0aGVyZSBhcmUgZG9jdW1lbnRzIHRoYXQgY2FuIGJlIHN1Ym1pdHRlZCAobWlzc2luZywgcmVqZWN0ZWQsIG9yIG5vdF9zdWJtaXR0ZWQpXG4gICAgcmV0dXJuIGRvY3VtZW50c1RvU3VibWl0LnNvbWUoKGRvYykgPT4ge1xuICAgICAgY29uc3Qgc3RhdHVzID0gc3RhdHVzZXNbZG9jXT8uc3RhdHVzXG4gICAgICByZXR1cm4gKFxuICAgICAgICBzdGF0dXMgPT09ICdtaXNzaW5nJyB8fFxuICAgICAgICBzdGF0dXMgPT09ICdyZWplY3RlZCcgfHxcbiAgICAgICAgc3RhdHVzID09PSAnbm90X3N1Ym1pdHRlZCdcbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgZ2V0U3VibWl0QnV0dG9uVGV4dCgpOiBzdHJpbmcge1xuICAgIGNvbnN0IGRvY3VtZW50c1RvU3VibWl0ID0gdGhpcy5yZXF1aXJlZERvY3VtZW50cygpXG4gICAgY29uc3Qgc3RhdHVzZXMgPSB0aGlzLmRvY3VtZW50U3RhdHVzZXMoKVxuXG4gICAgLy8gQ2hlY2sgaWYgd2UgaGF2ZSBhbnkgcmVqZWN0ZWQgZG9jdW1lbnRzXG4gICAgY29uc3QgaGFzUmVqZWN0ZWREb2NzID0gZG9jdW1lbnRzVG9TdWJtaXQuc29tZSgoZG9jKSA9PiB7XG4gICAgICBjb25zdCBzdGF0dXMgPSBzdGF0dXNlc1tkb2NdPy5zdGF0dXNcbiAgICAgIHJldHVybiBzdGF0dXMgPT09ICdyZWplY3RlZCdcbiAgICB9KVxuXG4gICAgaWYgKGhhc1JlamVjdGVkRG9jcykge1xuICAgICAgcmV0dXJuICdreWMucmVzdWJtaXRfZG9jdW1lbnRzJ1xuICAgIH1cblxuICAgIHJldHVybiAna3ljLnN1Ym1pdF9kb2N1bWVudHMnXG4gIH1cbn1cbiIsICI8YXBwLWhlYWRlciBbZGVmYXVsdEhyZWZdPVwiJy9hY2NvdW50J1wiPjwvYXBwLWhlYWRlcj5cblxuPGlvbi1jb250ZW50IFtmdWxsc2NyZWVuXT1cInRydWVcIj5cbiAgPGlvbi1yb3cgY2xhc3M9XCJpb24tcGFkZGluZy1ob3Jpem9udGFsXCI+XG4gICAgPGlvbi1jb2w+XG4gICAgICA8aDI+e3sgJ2t5Yy5zdWJ0aXRsZScgfCB0cmFuc2xhdGUgfX08L2gyPlxuICAgICAgPHA+e3sgJ2t5Yy5kZXNjcmlwdGlvbicgfCB0cmFuc2xhdGUgfX08L3A+XG4gICAgPC9pb24tY29sPlxuICA8L2lvbi1yb3c+XG5cbiAgPGlvbi1yb3cgY2xhc3M9XCJpb24tcGFkZGluZy1ob3Jpem9udGFsXCI+XG4gICAgPGlvbi1jb2w+XG4gICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBkb2NOYW1lIG9mIHJlcXVpcmVkRG9jdW1lbnRzKClcIj5cbiAgICAgICAgPGlvbi1pdGVtXG4gICAgICAgICAgKm5nSWY9XCJkb2N1bWVudFN0YXR1c2VzKClbZG9jTmFtZV0uc3RhdHVzID09PSAncGVuZGluZycgfHwgXG4gICAgICAgICAgICAgICAgICAgZG9jdW1lbnRTdGF0dXNlcygpW2RvY05hbWVdLnN0YXR1cyA9PT0gJ2FwcHJvdmVkJyB8fCBcbiAgICAgICAgICAgICAgICAgICBkb2N1bWVudFN0YXR1c2VzKClbZG9jTmFtZV0uc3RhdHVzID09PSAncmVqZWN0ZWQnXCJcbiAgICAgICAgICAoY2xpY2spPVwiKGV4aXN0aW5nRG9jdW1lbnRJbWFnZXMoKVtkb2NOYW1lXS5mcm9udCB8fCBleGlzdGluZ0RvY3VtZW50SW1hZ2VzKClbZG9jTmFtZV0uYmFjaykgJiYgb3Blbkt5Y0ltYWdlc01vZGFsKGRvY05hbWUpXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxpb24tbGFiZWw+XG4gICAgICAgICAgICA8aDI+e3sgJ2RvY3VtZW50cy5reWMuJyArIGRvY05hbWUgfCB0cmFuc2xhdGUgfX08L2gyPlxuICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgKm5nSWY9XCJkb2N1bWVudFN0YXR1c2VzKClbZG9jTmFtZV0uc3RhdHVzID09PSAncmVqZWN0ZWQnICYmIGRvY3VtZW50U3RhdHVzZXMoKVtkb2NOYW1lXS5yZWplY3Rpb25fcmVhc29uXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHN0cm9uZz57eyAna3ljLnJlamVjdGlvbl9yZWFzb24nIHwgdHJhbnNsYXRlIH19Ojwvc3Ryb25nPlxuICAgICAgICAgICAgICB7eyBkb2N1bWVudFN0YXR1c2VzKClbZG9jTmFtZV0ucmVqZWN0aW9uX3JlYXNvbiB9fVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGlvbi1iYWRnZVxuICAgICAgICAgICAgICBbY29sb3JdPVwiZG9jdW1lbnRTdGF0dXNlcygpW2RvY05hbWVdLmNvbG9yXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJpb24tbm8tbWFyZ2luXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3sgJ2t5Yy5zdGF0dXMuJyArIGRvY3VtZW50U3RhdHVzZXMoKVtkb2NOYW1lXS5zdGF0dXMgfCB0cmFuc2xhdGVcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIDwvaW9uLWJhZGdlPlxuICAgICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgICAgIDxpb24tYnV0dG9uXG4gICAgICAgICAgICAqbmdJZj1cImV4aXN0aW5nRG9jdW1lbnRJbWFnZXMoKVtkb2NOYW1lXS5mcm9udCB8fCBleGlzdGluZ0RvY3VtZW50SW1hZ2VzKClbZG9jTmFtZV0uYmFja1wiXG4gICAgICAgICAgICBmaWxsPVwiY2xlYXJcIlxuICAgICAgICAgICAgc2xvdD1cImVuZFwiXG4gICAgICAgICAgICAoY2xpY2spPVwib3Blbkt5Y0ltYWdlc01vZGFsKGRvY05hbWUpOyAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwiZXllLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICAgIDwvaW9uLWJ1dHRvbj5cbiAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgPGFwcC1kb2N1bWVudC11cGxvYWRlclxuICAgICAgICAgICpuZ0lmPVwiZG9jdW1lbnRTdGF0dXNlcygpW2RvY05hbWVdLnN0YXR1cyAhPT0gJ3BlbmRpbmcnICYmIFxuICAgICAgICAgICAgICAgICBkb2N1bWVudFN0YXR1c2VzKClbZG9jTmFtZV0uc3RhdHVzICE9PSAnYXBwcm92ZWQnXCJcbiAgICAgICAgICBbZG9jdW1lbnROYW1lXT1cImRvY05hbWVcIlxuICAgICAgICAgIFtkb2N1bWVudEltYWdlc109XCJkb2N1bWVudEltYWdlc1tkb2NOYW1lXSB8fCB7fVwiXG4gICAgICAgICAgW2RvY3VtZW50U3RhdHVzXT1cImRvY3VtZW50U3RhdHVzZXMoKVtkb2NOYW1lXS5zdGF0dXNcIlxuICAgICAgICAgIChkb2N1bWVudFVwZGF0ZSk9XCJvbkRvY3VtZW50SW1hZ2VzQ2hhbmdlKGRvY05hbWUsICRldmVudClcIlxuICAgICAgICA+PC9hcHAtZG9jdW1lbnQtdXBsb2FkZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2lvbi1jb2w+XG4gIDwvaW9uLXJvdz5cblxuICA8aW9uLXJvdyBjbGFzcz1cImlvbi1wYWRkaW5nXCIgKm5nSWY9XCJzaG91bGRTaG93U3VibWl0QnV0dG9uKClcIj5cbiAgICA8aW9uLWNvbD5cbiAgICAgIDxpb24tYnV0dG9uXG4gICAgICAgIGV4cGFuZD1cImJsb2NrXCJcbiAgICAgICAgKGNsaWNrKT1cInN1Ym1pdERvY3VtZW50cygpXCJcbiAgICAgICAgW2Rpc2FibGVkXT1cIiFpc0NvbXBsZXRlKClcIlxuICAgICAgPlxuICAgICAgICB7eyBnZXRTdWJtaXRCdXR0b25UZXh0KCkgfCB0cmFuc2xhdGUgfX1cbiAgICAgIDwvaW9uLWJ1dHRvbj5cbiAgICA8L2lvbi1jb2w+XG4gIDwvaW9uLXJvdz5cbjwvaW9uLWNvbnRlbnQ+XG5cbjwhLS0gS1lDIEltYWdlcyBNb2RhbCAtLT5cbjxpb24tbW9kYWwgI2t5Y0ltYWdlc01vZGFsPlxuICA8bmctdGVtcGxhdGU+XG4gICAgPGlvbi1oZWFkZXI+XG4gICAgICA8aW9uLXRvb2xiYXI+XG4gICAgICAgIDxpb24tdGl0bGVcbiAgICAgICAgICA+e3sgJ2RvY3VtZW50cy5reWMuJyArIHNlbGVjdGVkRG9jdW1lbnROYW1lIHwgdHJhbnNsYXRlIH19PC9pb24tdGl0bGVcbiAgICAgICAgPlxuICAgICAgICA8aW9uLWJ1dHRvbnMgc2xvdD1cImVuZFwiPlxuICAgICAgICAgIDxpb24tYnV0dG9uXG4gICAgICAgICAgICAoY2xpY2spPVwia3ljSW1hZ2VzTW9kYWwuZGlzbWlzcygpXCJcbiAgICAgICAgICAgIGZpbGw9XCJjbGVhclwiXG4gICAgICAgICAgICBjb2xvcj1cImRhcmtcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwiY2xvc2Utb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgPC9pb24tYnV0dG9uPlxuICAgICAgICA8L2lvbi1idXR0b25zPlxuICAgICAgPC9pb24tdG9vbGJhcj5cbiAgICA8L2lvbi1oZWFkZXI+XG4gICAgPGlvbi1jb250ZW50IGNsYXNzPVwiaW9uLXBhZGRpbmdcIj5cbiAgICAgIDwhLS0gRnJvbnQgc2lkZSAtLT5cbiAgICAgIDxkaXYgKm5nSWY9XCJzZWxlY3RlZERvY3VtZW50SW1hZ2VzLmZyb250XCI+XG4gICAgICAgIDxoMz57eyAnZG9jdW1lbnRzLmZyb250X3NpZGUnIHwgdHJhbnNsYXRlIH19PC9oMz5cbiAgICAgICAgPGlvbi1pbWdcbiAgICAgICAgICBbc3JjXT1cInNlbGVjdGVkRG9jdW1lbnRJbWFnZXMuZnJvbnRcIlxuICAgICAgICAgIFthbHRdPVwiJ2RvY3VtZW50cy5mcm9udF9zaWRlJyB8IHRyYW5zbGF0ZVwiXG4gICAgICAgICAgY2xhc3M9XCJpb24tbWFyZ2luLWJvdHRvbVwiXG4gICAgICAgID48L2lvbi1pbWc+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPCEtLSBCYWNrIHNpZGUgLS0+XG4gICAgICA8ZGl2ICpuZ0lmPVwic2VsZWN0ZWREb2N1bWVudEltYWdlcy5iYWNrXCI+XG4gICAgICAgIDxoMz57eyAnZG9jdW1lbnRzLmJhY2tfc2lkZScgfCB0cmFuc2xhdGUgfX08L2gzPlxuICAgICAgICA8aW9uLWltZ1xuICAgICAgICAgIFtzcmNdPVwic2VsZWN0ZWREb2N1bWVudEltYWdlcy5iYWNrXCJcbiAgICAgICAgICBbYWx0XT1cIidkb2N1bWVudHMuYmFja19zaWRlJyB8IHRyYW5zbGF0ZVwiXG4gICAgICAgICAgY2xhc3M9XCJpb24tbWFyZ2luLWJvdHRvbVwiXG4gICAgICAgID48L2lvbi1pbWc+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPCEtLSBObyBpbWFnZXMgbWVzc2FnZSAtLT5cbiAgICAgIDxkaXZcbiAgICAgICAgKm5nSWY9XCIhc2VsZWN0ZWREb2N1bWVudEltYWdlcy5mcm9udCAmJiAhc2VsZWN0ZWREb2N1bWVudEltYWdlcy5iYWNrXCJcbiAgICAgICAgY2xhc3M9XCJpb24tdGV4dC1jZW50ZXJcIlxuICAgICAgPlxuICAgICAgICA8cD57eyAna3ljLm5vX2ltYWdlc19hdmFpbGFibGUnIHwgdHJhbnNsYXRlIH19PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9pb24tY29udGVudD5cbiAgPC9uZy10ZW1wbGF0ZT5cbjwvaW9uLW1vZGFsPlxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3FCWSxJQUFBLHlCQUFBLEdBQUEsR0FBQSxFQUVDLEdBQUEsUUFBQTtBQUNTLElBQUEsaUJBQUEsQ0FBQTs7QUFBeUMsSUFBQSx1QkFBQTtBQUNqRCxJQUFBLGlCQUFBLENBQUE7QUFDRixJQUFBLHVCQUFBOzs7OztBQUZVLElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEsNkJBQUEsSUFBQSxzQkFBQSxHQUFBLEdBQUEsc0JBQUEsR0FBQSxHQUFBO0FBQ1IsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSw2QkFBQSxLQUFBLE9BQUEsaUJBQUEsRUFBQSxVQUFBLEVBQUEsa0JBQUEsR0FBQTs7Ozs7O0FBVUosSUFBQSx5QkFBQSxHQUFB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LENBQUE7O0FBQW1DLElBQUEsdUJBQUEsRUFBSSxFQUNsQztBQUdaLElBQUEseUJBQUEsSUFBQSxXQUFBLENBQUEsRUFBd0MsSUFBQSxTQUFBO0FBRXBDLElBQUEscUJBQUEsSUFBQSx5QkFBQSxHQUFBLEdBQUEsT0FBQSxDQUFBO0FBeUNGLElBQUEsdUJBQUEsRUFBVTtBQUdaLElBQUEscUJBQUEsSUFBQSw2QkFBQSxHQUFBLEdBQUEsV0FBQSxDQUFBO0FBV0YsSUFBQSx1QkFBQTtBQUdBLElBQUEseUJBQUEsSUFBQSxhQUFBLE1BQUEsQ0FBQTtBQUNFLElBQUEscUJBQUEsSUFBQSxpQ0FBQSxJQUFBLEdBQUEsYUFBQTtBQStDRixJQUFBLHVCQUFBOzs7QUF0SFksSUFBQSxxQkFBQSxlQUFBLFVBQUE7QUFFQyxJQUFBLG9CQUFBO0FBQUEsSUFBQSxxQkFBQSxjQUFBLElBQUE7QUFHSCxJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLDRCQUFBLHNCQUFBLEdBQUEsR0FBQSxjQUFBLENBQUE7QUFDRCxJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLDRCQUFBLHNCQUFBLEdBQUEsR0FBQSxpQkFBQSxDQUFBO0FBTXNCLElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEscUJBQUEsV0FBQSxJQUFBLGtCQUFBLENBQUE7QUE0Q0MsSUFBQSxvQkFBQTtBQUFBLElBQUEscUJBQUEsUUFBQSxJQUFBLHVCQUFBLENBQUE7OztFRFk1QjtFQUFZO0VBQUE7RUFDWjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFBZTtFQUNmO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUFNLEdBQUEsZUFBQSxFQUFBLENBQUE7QUFHSixJQUFPLFVBQVA7O3NFQUFPLFNBQU8sQ0FBQTtVQTFCbkI7dUJBQ1csV0FBUyxTQUdWO01BQ1A7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7T0FDRCxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUFBLENBQUE7Nk9BRzRCLGdCQUFjLENBQUE7VUFBMUM7V0FBVSxnQkFBZ0I7Ozs7NkVBRGhCLFNBQU8sRUFBQSxXQUFBLFdBQUEsVUFBQSxpQ0FBQSxZQUFBLEdBQUEsQ0FBQTtBQUFBLEdBQUE7IiwKICAibmFtZXMiOiBbIlJlZ2lzdHJhdGlvblN0YXRlIl0KfQo=
