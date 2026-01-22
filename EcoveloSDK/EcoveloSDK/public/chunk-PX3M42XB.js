import {
  MediaService
} from "./chunk-3B54ZNXU.js";
import {
  addIcons,
  cameraOutline,
  cloudUploadOutline,
  documentOutline,
  trashOutline
} from "./chunk-3E6DEK7U.js";
import {
  CommonModule,
  Component,
  EventEmitter,
  FormsModule,
  Input,
  IonActionSheet,
  IonButton,
  IonCol,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
  IonThumbnail,
  Output,
  ToastController,
  TranslateModule,
  TranslatePipe,
  TranslateService,
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
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-DGENMXJW.js";
import {
  __async,
  __spreadValues
} from "./chunk-UESUV5PM.js";

// src/app/components/document-uploader/document-uploader.component.ts
var DocumentSide;
(function(DocumentSide2) {
  DocumentSide2["FRONT"] = "front";
  DocumentSide2["BACK"] = "back";
})(DocumentSide || (DocumentSide = {}));
var UIState;
(function(UIState2) {
  UIState2["OPEN"] = "open";
  UIState2["CLOSED"] = "closed";
})(UIState || (UIState = {}));
var LoadingState;
(function(LoadingState2) {
  LoadingState2["LOADING"] = "loading";
  LoadingState2["IDLE"] = "idle";
})(LoadingState || (LoadingState = {}));
var _DocumentUploaderComponent = class _DocumentUploaderComponent {
  constructor(mediaService, translate, toastCtrl) {
    this.mediaService = mediaService;
    this.translate = translate;
    this.toastCtrl = toastCtrl;
    this.documentName = "";
    this.documentImages = {};
    this.documentUpdate = new EventEmitter();
    this.documentDelete = new EventEmitter();
    this.DocumentSide = DocumentSide;
    this.UIState = UIState;
    this.LoadingState = LoadingState;
    this.actionSheetState = UIState.CLOSED;
    this.currentSide = null;
    this.uploadState = LoadingState.IDLE;
    this.actionSheetButtons = [
      {
        text: "Camera",
        icon: "camera",
        handler: () => this.handleCamera()
      },
      {
        text: "Gallery",
        icon: "document",
        handler: () => this.handleGallery()
      },
      {
        text: "Cancel",
        role: "cancel",
        data: {
          action: "cancel"
        }
      }
    ];
    addIcons({
      camera: cameraOutline,
      document: documentOutline,
      trash: trashOutline,
      "cloud-upload": cloudUploadOutline
    });
  }
  openActionSheet(side) {
    this.currentSide = side;
    this.actionSheetState = UIState.OPEN;
  }
  isDeleteDisabled() {
    return this.uploadState === LoadingState.LOADING;
  }
  handleCamera() {
    return __async(this, null, function* () {
      if (!this.currentSide)
        return;
      this.uploadState = LoadingState.LOADING;
      const { blob } = yield this.mediaService.captureAndProcessPhoto();
      if (!blob) {
        throw new Error("No image captured");
      }
      const uploadedUrl = yield this.mediaService.uploadMedia(blob);
      if (!uploadedUrl) {
        throw new Error("Failed to upload image");
      }
      yield this.updateDocumentImage(uploadedUrl).then(() => {
        this.uploadState = LoadingState.IDLE;
      });
    });
  }
  handleGallery() {
    return __async(this, null, function* () {
      if (!this.currentSide)
        return;
      this.uploadState = LoadingState.LOADING;
      const { blob } = yield this.mediaService.selectAndProcessFile();
      if (!blob) {
        throw new Error("No file selected");
      }
      const uploadedUrl = yield this.mediaService.uploadMedia(blob);
      if (!uploadedUrl) {
        throw new Error("Failed to upload file");
      }
      yield this.updateDocumentImage(uploadedUrl).then(() => {
        this.uploadState = LoadingState.IDLE;
      });
    });
  }
  updateDocumentImage(url) {
    return __async(this, null, function* () {
      if (!this.currentSide)
        return;
      const updatedImages = __spreadValues({}, this.documentImages);
      if (this.currentSide === DocumentSide.FRONT) {
        updatedImages.front_image = url;
      } else {
        updatedImages.back_image = url;
      }
      this.documentUpdate.emit(updatedImages);
    });
  }
  removeDocument(side) {
    return __async(this, null, function* () {
      const updatedImages = __spreadValues({}, this.documentImages);
      if (side === DocumentSide.FRONT) {
        updatedImages.front_image = void 0;
      } else {
        updatedImages.back_image = void 0;
      }
      this.documentUpdate.emit(updatedImages);
      this.documentDelete.emit(side);
    });
  }
  getDocumentDisplayName() {
    const kycDocumentKey = `documents.kyc.${this.documentName}`;
    const kycDocumentName = this.translate.instant(kycDocumentKey);
    if (kycDocumentName !== kycDocumentKey) {
      return kycDocumentName;
    }
    return this.documentName.split("_").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }
};
_DocumentUploaderComponent.\u0275fac = function DocumentUploaderComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DocumentUploaderComponent)(\u0275\u0275directiveInject(MediaService), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(ToastController));
};
_DocumentUploaderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DocumentUploaderComponent, selectors: [["app-document-uploader"]], inputs: { documentName: "documentName", documentImages: "documentImages", documentStatus: "documentStatus" }, outputs: { documentUpdate: "documentUpdate", documentDelete: "documentDelete" }, decls: 36, vars: 24, consts: [["mode", "ios", 3, "inset"], ["color", "grey"], ["slot", "start"], [3, "src", "alt"], [1, "ion-align-items-center"], ["size", "auto", 1, "button-container"], ["color", "danger", "fill", "clear", "shape", "round", "size", "large", 3, "click", "disabled"], ["name", "trash", "slot", "icon-only"], ["shape", "round", "size", "large", 3, "click"], ["name", "cloud-upload", "slot", "icon-only"], [3, "didDismiss", "isOpen", "buttons"]], template: function DocumentUploaderComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list", 0)(1, "ion-item", 1)(2, "ion-label")(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "ion-item", 1)(6, "ion-thumbnail", 2);
    \u0275\u0275element(7, "ion-img", 3);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "ion-label")(10, "ion-row", 4)(11, "ion-col")(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "ion-col", 5)(16, "ion-button", 6);
    \u0275\u0275listener("click", function DocumentUploaderComponent_Template_ion_button_click_16_listener() {
      return ctx.removeDocument(ctx.DocumentSide.FRONT);
    });
    \u0275\u0275element(17, "ion-icon", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "ion-button", 8);
    \u0275\u0275listener("click", function DocumentUploaderComponent_Template_ion_button_click_18_listener() {
      return ctx.openActionSheet(ctx.DocumentSide.FRONT);
    });
    \u0275\u0275element(19, "ion-icon", 9);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(20, "ion-item", 1)(21, "ion-thumbnail", 2);
    \u0275\u0275element(22, "ion-img", 3);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "ion-label")(25, "ion-row", 4)(26, "ion-col")(27, "span");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "ion-col", 5)(31, "ion-button", 6);
    \u0275\u0275listener("click", function DocumentUploaderComponent_Template_ion_button_click_31_listener() {
      return ctx.removeDocument(ctx.DocumentSide.BACK);
    });
    \u0275\u0275element(32, "ion-icon", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "ion-button", 8);
    \u0275\u0275listener("click", function DocumentUploaderComponent_Template_ion_button_click_33_listener() {
      return ctx.openActionSheet(ctx.DocumentSide.BACK);
    });
    \u0275\u0275element(34, "ion-icon", 9);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(35, "ion-action-sheet", 10);
    \u0275\u0275listener("didDismiss", function DocumentUploaderComponent_Template_ion_action_sheet_didDismiss_35_listener() {
      return ctx.actionSheetState = ctx.UIState.CLOSED;
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("inset", true);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx.getDocumentDisplayName());
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx.documentImages.front_image || "https://ionicframework.com/docs/img/demos/thumbnail.svg")("alt", \u0275\u0275pipeBind1(8, 16, "documents.front_side"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 18, "documents.front_side"));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("visibility", ctx.documentImages.front_image ? "visible" : "hidden");
    \u0275\u0275property("disabled", ctx.isDeleteDisabled());
    \u0275\u0275advance(6);
    \u0275\u0275property("src", ctx.documentImages.back_image || "https://ionicframework.com/docs/img/demos/thumbnail.svg")("alt", \u0275\u0275pipeBind1(23, 20, "documents.back_side"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 22, "documents.back_side"));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("visibility", ctx.documentImages.back_image ? "visible" : "hidden");
    \u0275\u0275property("disabled", ctx.isDeleteDisabled());
    \u0275\u0275advance(4);
    \u0275\u0275property("isOpen", ctx.actionSheetState === ctx.UIState.OPEN)("buttons", ctx.actionSheetButtons);
  }
}, dependencies: [
  CommonModule,
  FormsModule,
  IonList,
  IonItem,
  IonLabel,
  IonImg,
  IonButton,
  IonIcon,
  IonThumbnail,
  IonRow,
  IonCol,
  IonActionSheet,
  TranslateModule,
  TranslatePipe
], encapsulation: 2 });
var DocumentUploaderComponent = _DocumentUploaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocumentUploaderComponent, [{
    type: Component,
    args: [{ selector: "app-document-uploader", imports: [
      CommonModule,
      FormsModule,
      IonList,
      IonItem,
      IonLabel,
      IonImg,
      IonButton,
      IonIcon,
      IonThumbnail,
      IonRow,
      IonCol,
      IonActionSheet,
      TranslateModule
    ], template: `<ion-list [inset]="true" mode="ios">
  <ion-item color="grey">
    <ion-label>
      <strong>{{ getDocumentDisplayName() }}</strong>
    </ion-label>
  </ion-item>
  <!-- Front side -->
  <ion-item color="grey">
    <ion-thumbnail slot="start">
      <ion-img
        [src]="
          documentImages.front_image ||
          'https://ionicframework.com/docs/img/demos/thumbnail.svg'
        "
        [alt]="'documents.front_side' | translate"
      ></ion-img>
    </ion-thumbnail>
    <ion-label>
      <ion-row class="ion-align-items-center">
        <ion-col>
          <span>{{ 'documents.front_side' | translate }}</span>
        </ion-col>
        <ion-col size="auto" class="button-container">
          <ion-button
            [style.visibility]="
              documentImages.front_image ? 'visible' : 'hidden'
            "
            (click)="removeDocument(DocumentSide.FRONT)"
            color="danger"
            fill="clear"
            shape="round"
            size="large"
            [disabled]="isDeleteDisabled()"
          >
            <ion-icon name="trash" slot="icon-only"></ion-icon>
          </ion-button>
          <ion-button
            (click)="openActionSheet(DocumentSide.FRONT)"
            shape="round"
            size="large"
          >
            <ion-icon name="cloud-upload" slot="icon-only"></ion-icon>
          </ion-button>
        </ion-col>
      </ion-row>
    </ion-label>
  </ion-item>

  <!-- Back side -->
  <ion-item color="grey">
    <ion-thumbnail slot="start">
      <ion-img
        [src]="
          documentImages.back_image ||
          'https://ionicframework.com/docs/img/demos/thumbnail.svg'
        "
        [alt]="'documents.back_side' | translate"
      ></ion-img>
    </ion-thumbnail>
    <ion-label>
      <ion-row class="ion-align-items-center">
        <ion-col>
          <span>{{ 'documents.back_side' | translate }}</span>
        </ion-col>
        <ion-col size="auto" class="button-container">
          <ion-button
            [style.visibility]="
              documentImages.back_image ? 'visible' : 'hidden'
            "
            (click)="removeDocument(DocumentSide.BACK)"
            color="danger"
            fill="clear"
            shape="round"
            size="large"
            [disabled]="isDeleteDisabled()"
          >
            <ion-icon name="trash" slot="icon-only"></ion-icon>
          </ion-button>
          <ion-button
            (click)="openActionSheet(DocumentSide.BACK)"
            shape="round"
            size="large"
          >
            <ion-icon name="cloud-upload" slot="icon-only"></ion-icon>
          </ion-button>
        </ion-col>
      </ion-row>
    </ion-label>
  </ion-item>
</ion-list>

<ion-action-sheet
  [isOpen]="actionSheetState === UIState.OPEN"
  [buttons]="actionSheetButtons"
  (didDismiss)="actionSheetState = UIState.CLOSED"
></ion-action-sheet>
` }]
  }], () => [{ type: MediaService }, { type: TranslateService }, { type: ToastController }], { documentName: [{
    type: Input
  }], documentImages: [{
    type: Input
  }], documentStatus: [{
    type: Input
  }], documentUpdate: [{
    type: Output
  }], documentDelete: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DocumentUploaderComponent, { className: "DocumentUploaderComponent", filePath: "src/app/components/document-uploader/document-uploader.component.ts", lineNumber: 66 });
})();

export {
  DocumentUploaderComponent
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9jb21wb25lbnRzL2RvY3VtZW50LXVwbG9hZGVyL2RvY3VtZW50LXVwbG9hZGVyLmNvbXBvbmVudC50cyIsICJzcmMvYXBwL2NvbXBvbmVudHMvZG9jdW1lbnQtdXBsb2FkZXIvZG9jdW1lbnQtdXBsb2FkZXIuY29tcG9uZW50Lmh0bWwiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSwgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnXG5pbXBvcnQge1xuICBJb25MaXN0LFxuICBJb25JdGVtLFxuICBJb25MYWJlbCxcbiAgSW9uSW1nLFxuICBJb25CdXR0b24sXG4gIElvbkljb24sXG4gIElvblJvdyxcbiAgSW9uQ29sLFxuICBJb25UaHVtYm5haWwsXG4gIElvbkFjdGlvblNoZWV0LFxuICBUb2FzdENvbnRyb2xsZXIsXG59IGZyb20gJ0Bpb25pYy9hbmd1bGFyL3N0YW5kYWxvbmUnXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJ1xuaW1wb3J0IHtcbiAgY2FtZXJhT3V0bGluZSxcbiAgZG9jdW1lbnRPdXRsaW5lLFxuICB0cmFzaE91dGxpbmUsXG4gIGNsb3VkVXBsb2FkT3V0bGluZSxcbn0gZnJvbSAnaW9uaWNvbnMvaWNvbnMnXG5pbXBvcnQgeyBhZGRJY29ucyB9IGZyb20gJ2lvbmljb25zJ1xuaW1wb3J0IHsgTWVkaWFTZXJ2aWNlIH0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy91dGlscy9tZWRpYS5zZXJ2aWNlJ1xuXG5leHBvcnQgaW50ZXJmYWNlIERvY3VtZW50SW1hZ2Uge1xuICBmcm9udF9pbWFnZT86IHN0cmluZ1xuICBiYWNrX2ltYWdlPzogc3RyaW5nXG59XG5cbmV4cG9ydCBlbnVtIERvY3VtZW50U2lkZSB7XG4gIEZST05UID0gJ2Zyb250JyxcbiAgQkFDSyA9ICdiYWNrJyxcbn1cblxuZXhwb3J0IGVudW0gVUlTdGF0ZSB7XG4gIE9QRU4gPSAnb3BlbicsXG4gIENMT1NFRCA9ICdjbG9zZWQnLFxufVxuXG5leHBvcnQgZW51bSBMb2FkaW5nU3RhdGUge1xuICBMT0FESU5HID0gJ2xvYWRpbmcnLFxuICBJRExFID0gJ2lkbGUnLFxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZG9jdW1lbnQtdXBsb2FkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZG9jdW1lbnQtdXBsb2FkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIElvbkxpc3QsXG4gICAgSW9uSXRlbSxcbiAgICBJb25MYWJlbCxcbiAgICBJb25JbWcsXG4gICAgSW9uQnV0dG9uLFxuICAgIElvbkljb24sXG4gICAgSW9uVGh1bWJuYWlsLFxuICAgIElvblJvdyxcbiAgICBJb25Db2wsXG4gICAgSW9uQWN0aW9uU2hlZXQsXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBEb2N1bWVudFVwbG9hZGVyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZG9jdW1lbnROYW1lOiBzdHJpbmcgPSAnJ1xuICBASW5wdXQoKSBkb2N1bWVudEltYWdlczogRG9jdW1lbnRJbWFnZSA9IHt9XG4gIEBJbnB1dCgpIGRvY3VtZW50U3RhdHVzPzogc3RyaW5nXG4gIEBPdXRwdXQoKSBkb2N1bWVudFVwZGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8RG9jdW1lbnRJbWFnZT4oKVxuICBAT3V0cHV0KCkgZG9jdW1lbnREZWxldGUgPSBuZXcgRXZlbnRFbWl0dGVyPERvY3VtZW50U2lkZT4oKVxuXG4gIC8vIEV4cG9zZSBlbnVtcyB0byB0ZW1wbGF0ZVxuICBEb2N1bWVudFNpZGUgPSBEb2N1bWVudFNpZGVcbiAgVUlTdGF0ZSA9IFVJU3RhdGVcbiAgTG9hZGluZ1N0YXRlID0gTG9hZGluZ1N0YXRlXG4gIGFjdGlvblNoZWV0U3RhdGU6IFVJU3RhdGUgPSBVSVN0YXRlLkNMT1NFRFxuICBjdXJyZW50U2lkZTogRG9jdW1lbnRTaWRlIHwgbnVsbCA9IG51bGxcbiAgdXBsb2FkU3RhdGU6IExvYWRpbmdTdGF0ZSA9IExvYWRpbmdTdGF0ZS5JRExFXG5cbiAgcHVibGljIGFjdGlvblNoZWV0QnV0dG9ucyA9IFtcbiAgICB7XG4gICAgICB0ZXh0OiAnQ2FtZXJhJyxcbiAgICAgIGljb246ICdjYW1lcmEnLFxuICAgICAgaGFuZGxlcjogKCkgPT4gdGhpcy5oYW5kbGVDYW1lcmEoKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdHYWxsZXJ5JyxcbiAgICAgIGljb246ICdkb2N1bWVudCcsXG4gICAgICBoYW5kbGVyOiAoKSA9PiB0aGlzLmhhbmRsZUdhbGxlcnkoKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdDYW5jZWwnLFxuICAgICAgcm9sZTogJ2NhbmNlbCcsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGFjdGlvbjogJ2NhbmNlbCcsXG4gICAgICB9LFxuICAgIH0sXG4gIF1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG1lZGlhU2VydmljZTogTWVkaWFTZXJ2aWNlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgdG9hc3RDdHJsOiBUb2FzdENvbnRyb2xsZXJcbiAgKSB7XG4gICAgYWRkSWNvbnMoe1xuICAgICAgY2FtZXJhOiBjYW1lcmFPdXRsaW5lLFxuICAgICAgZG9jdW1lbnQ6IGRvY3VtZW50T3V0bGluZSxcbiAgICAgIHRyYXNoOiB0cmFzaE91dGxpbmUsXG4gICAgICAnY2xvdWQtdXBsb2FkJzogY2xvdWRVcGxvYWRPdXRsaW5lLFxuICAgIH0pXG4gIH1cblxuICBvcGVuQWN0aW9uU2hlZXQoc2lkZTogRG9jdW1lbnRTaWRlKSB7XG4gICAgdGhpcy5jdXJyZW50U2lkZSA9IHNpZGVcbiAgICB0aGlzLmFjdGlvblNoZWV0U3RhdGUgPSBVSVN0YXRlLk9QRU5cbiAgfVxuXG4gIGlzRGVsZXRlRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudXBsb2FkU3RhdGUgPT09IExvYWRpbmdTdGF0ZS5MT0FESU5HXG4gIH1cblxuICBhc3luYyBoYW5kbGVDYW1lcmEoKSB7XG4gICAgaWYgKCF0aGlzLmN1cnJlbnRTaWRlKSByZXR1cm5cbiAgICB0aGlzLnVwbG9hZFN0YXRlID0gTG9hZGluZ1N0YXRlLkxPQURJTkdcbiAgICBjb25zdCB7IGJsb2IgfSA9IGF3YWl0IHRoaXMubWVkaWFTZXJ2aWNlLmNhcHR1cmVBbmRQcm9jZXNzUGhvdG8oKVxuICAgIGlmICghYmxvYikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBpbWFnZSBjYXB0dXJlZCcpXG4gICAgfVxuICAgIGNvbnN0IHVwbG9hZGVkVXJsID0gYXdhaXQgdGhpcy5tZWRpYVNlcnZpY2UudXBsb2FkTWVkaWEoYmxvYilcbiAgICBpZiAoIXVwbG9hZGVkVXJsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byB1cGxvYWQgaW1hZ2UnKVxuICAgIH1cbiAgICBhd2FpdCB0aGlzLnVwZGF0ZURvY3VtZW50SW1hZ2UodXBsb2FkZWRVcmwpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy51cGxvYWRTdGF0ZSA9IExvYWRpbmdTdGF0ZS5JRExFXG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIGhhbmRsZUdhbGxlcnkoKSB7XG4gICAgaWYgKCF0aGlzLmN1cnJlbnRTaWRlKSByZXR1cm5cbiAgICB0aGlzLnVwbG9hZFN0YXRlID0gTG9hZGluZ1N0YXRlLkxPQURJTkdcbiAgICBjb25zdCB7IGJsb2IgfSA9IGF3YWl0IHRoaXMubWVkaWFTZXJ2aWNlLnNlbGVjdEFuZFByb2Nlc3NGaWxlKClcbiAgICBpZiAoIWJsb2IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm8gZmlsZSBzZWxlY3RlZCcpXG4gICAgfVxuICAgIGNvbnN0IHVwbG9hZGVkVXJsID0gYXdhaXQgdGhpcy5tZWRpYVNlcnZpY2UudXBsb2FkTWVkaWEoYmxvYilcbiAgICBpZiAoIXVwbG9hZGVkVXJsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byB1cGxvYWQgZmlsZScpXG4gICAgfVxuICAgIGF3YWl0IHRoaXMudXBkYXRlRG9jdW1lbnRJbWFnZSh1cGxvYWRlZFVybCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnVwbG9hZFN0YXRlID0gTG9hZGluZ1N0YXRlLklETEVcbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyB1cGRhdGVEb2N1bWVudEltYWdlKHVybDogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLmN1cnJlbnRTaWRlKSByZXR1cm5cblxuICAgIGNvbnN0IHVwZGF0ZWRJbWFnZXMgPSB7IC4uLnRoaXMuZG9jdW1lbnRJbWFnZXMgfVxuICAgIGlmICh0aGlzLmN1cnJlbnRTaWRlID09PSBEb2N1bWVudFNpZGUuRlJPTlQpIHtcbiAgICAgIHVwZGF0ZWRJbWFnZXMuZnJvbnRfaW1hZ2UgPSB1cmxcbiAgICB9IGVsc2Uge1xuICAgICAgdXBkYXRlZEltYWdlcy5iYWNrX2ltYWdlID0gdXJsXG4gICAgfVxuXG4gICAgdGhpcy5kb2N1bWVudFVwZGF0ZS5lbWl0KHVwZGF0ZWRJbWFnZXMpXG4gIH1cblxuICBhc3luYyByZW1vdmVEb2N1bWVudChzaWRlOiBEb2N1bWVudFNpZGUpIHtcbiAgICBjb25zdCB1cGRhdGVkSW1hZ2VzID0geyAuLi50aGlzLmRvY3VtZW50SW1hZ2VzIH1cbiAgICBpZiAoc2lkZSA9PT0gRG9jdW1lbnRTaWRlLkZST05UKSB7XG4gICAgICB1cGRhdGVkSW1hZ2VzLmZyb250X2ltYWdlID0gdW5kZWZpbmVkXG4gICAgfSBlbHNlIHtcbiAgICAgIHVwZGF0ZWRJbWFnZXMuYmFja19pbWFnZSA9IHVuZGVmaW5lZFxuICAgIH1cblxuICAgIHRoaXMuZG9jdW1lbnRVcGRhdGUuZW1pdCh1cGRhdGVkSW1hZ2VzKVxuXG4gICAgLy8gRW1pdCBkZWxldGUgZXZlbnQgdG8gcGFyZW50IGNvbXBvbmVudCBmb3IgYmFja2VuZCBkZWxldGlvblxuICAgIHRoaXMuZG9jdW1lbnREZWxldGUuZW1pdChzaWRlKVxuICB9XG5cbiAgZ2V0RG9jdW1lbnREaXNwbGF5TmFtZSgpOiBzdHJpbmcge1xuICAgIC8vIENoZWNrIGlmIGl0J3MgYSBrbm93biBLWUMgZG9jdW1lbnQgdHlwZVxuICAgIGNvbnN0IGt5Y0RvY3VtZW50S2V5ID0gYGRvY3VtZW50cy5reWMuJHt0aGlzLmRvY3VtZW50TmFtZX1gXG4gICAgY29uc3Qga3ljRG9jdW1lbnROYW1lID0gdGhpcy50cmFuc2xhdGUuaW5zdGFudChreWNEb2N1bWVudEtleSlcblxuICAgIC8vIElmIHRyYW5zbGF0aW9uIGV4aXN0cyBhbmQgaXMgZGlmZmVyZW50IGZyb20gdGhlIGtleSwgdXNlIGl0XG4gICAgaWYgKGt5Y0RvY3VtZW50TmFtZSAhPT0ga3ljRG9jdW1lbnRLZXkpIHtcbiAgICAgIHJldHVybiBreWNEb2N1bWVudE5hbWVcbiAgICB9XG5cbiAgICAvLyBPdGhlcndpc2UsIHVzZSBhIGdlbmVyaWMgZGlzcGxheSBmb3JtYXRcbiAgICByZXR1cm4gdGhpcy5kb2N1bWVudE5hbWVcbiAgICAgIC5zcGxpdCgnXycpXG4gICAgICAubWFwKCh3b3JkKSA9PiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKSlcbiAgICAgIC5qb2luKCcgJylcbiAgfVxufVxuIiwgIjxpb24tbGlzdCBbaW5zZXRdPVwidHJ1ZVwiIG1vZGU9XCJpb3NcIj5cbiAgPGlvbi1pdGVtIGNvbG9yPVwiZ3JleVwiPlxuICAgIDxpb24tbGFiZWw+XG4gICAgICA8c3Ryb25nPnt7IGdldERvY3VtZW50RGlzcGxheU5hbWUoKSB9fTwvc3Ryb25nPlxuICAgIDwvaW9uLWxhYmVsPlxuICA8L2lvbi1pdGVtPlxuICA8IS0tIEZyb250IHNpZGUgLS0+XG4gIDxpb24taXRlbSBjb2xvcj1cImdyZXlcIj5cbiAgICA8aW9uLXRodW1ibmFpbCBzbG90PVwic3RhcnRcIj5cbiAgICAgIDxpb24taW1nXG4gICAgICAgIFtzcmNdPVwiXG4gICAgICAgICAgZG9jdW1lbnRJbWFnZXMuZnJvbnRfaW1hZ2UgfHxcbiAgICAgICAgICAnaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9pbWcvZGVtb3MvdGh1bWJuYWlsLnN2ZydcbiAgICAgICAgXCJcbiAgICAgICAgW2FsdF09XCInZG9jdW1lbnRzLmZyb250X3NpZGUnIHwgdHJhbnNsYXRlXCJcbiAgICAgID48L2lvbi1pbWc+XG4gICAgPC9pb24tdGh1bWJuYWlsPlxuICAgIDxpb24tbGFiZWw+XG4gICAgICA8aW9uLXJvdyBjbGFzcz1cImlvbi1hbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGlvbi1jb2w+XG4gICAgICAgICAgPHNwYW4+e3sgJ2RvY3VtZW50cy5mcm9udF9zaWRlJyB8IHRyYW5zbGF0ZSB9fTwvc3Bhbj5cbiAgICAgICAgPC9pb24tY29sPlxuICAgICAgICA8aW9uLWNvbCBzaXplPVwiYXV0b1wiIGNsYXNzPVwiYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxpb24tYnV0dG9uXG4gICAgICAgICAgICBbc3R5bGUudmlzaWJpbGl0eV09XCJcbiAgICAgICAgICAgICAgZG9jdW1lbnRJbWFnZXMuZnJvbnRfaW1hZ2UgPyAndmlzaWJsZScgOiAnaGlkZGVuJ1xuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgIChjbGljayk9XCJyZW1vdmVEb2N1bWVudChEb2N1bWVudFNpZGUuRlJPTlQpXCJcbiAgICAgICAgICAgIGNvbG9yPVwiZGFuZ2VyXCJcbiAgICAgICAgICAgIGZpbGw9XCJjbGVhclwiXG4gICAgICAgICAgICBzaGFwZT1cInJvdW5kXCJcbiAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwiaXNEZWxldGVEaXNhYmxlZCgpXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cInRyYXNoXCIgc2xvdD1cImljb24tb25seVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgPC9pb24tYnV0dG9uPlxuICAgICAgICAgIDxpb24tYnV0dG9uXG4gICAgICAgICAgICAoY2xpY2spPVwib3BlbkFjdGlvblNoZWV0KERvY3VtZW50U2lkZS5GUk9OVClcIlxuICAgICAgICAgICAgc2hhcGU9XCJyb3VuZFwiXG4gICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwiY2xvdWQtdXBsb2FkXCIgc2xvdD1cImljb24tb25seVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgPC9pb24tYnV0dG9uPlxuICAgICAgICA8L2lvbi1jb2w+XG4gICAgICA8L2lvbi1yb3c+XG4gICAgPC9pb24tbGFiZWw+XG4gIDwvaW9uLWl0ZW0+XG5cbiAgPCEtLSBCYWNrIHNpZGUgLS0+XG4gIDxpb24taXRlbSBjb2xvcj1cImdyZXlcIj5cbiAgICA8aW9uLXRodW1ibmFpbCBzbG90PVwic3RhcnRcIj5cbiAgICAgIDxpb24taW1nXG4gICAgICAgIFtzcmNdPVwiXG4gICAgICAgICAgZG9jdW1lbnRJbWFnZXMuYmFja19pbWFnZSB8fFxuICAgICAgICAgICdodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2ltZy9kZW1vcy90aHVtYm5haWwuc3ZnJ1xuICAgICAgICBcIlxuICAgICAgICBbYWx0XT1cIidkb2N1bWVudHMuYmFja19zaWRlJyB8IHRyYW5zbGF0ZVwiXG4gICAgICA+PC9pb24taW1nPlxuICAgIDwvaW9uLXRodW1ibmFpbD5cbiAgICA8aW9uLWxhYmVsPlxuICAgICAgPGlvbi1yb3cgY2xhc3M9XCJpb24tYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxpb24tY29sPlxuICAgICAgICAgIDxzcGFuPnt7ICdkb2N1bWVudHMuYmFja19zaWRlJyB8IHRyYW5zbGF0ZSB9fTwvc3Bhbj5cbiAgICAgICAgPC9pb24tY29sPlxuICAgICAgICA8aW9uLWNvbCBzaXplPVwiYXV0b1wiIGNsYXNzPVwiYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxpb24tYnV0dG9uXG4gICAgICAgICAgICBbc3R5bGUudmlzaWJpbGl0eV09XCJcbiAgICAgICAgICAgICAgZG9jdW1lbnRJbWFnZXMuYmFja19pbWFnZSA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgKGNsaWNrKT1cInJlbW92ZURvY3VtZW50KERvY3VtZW50U2lkZS5CQUNLKVwiXG4gICAgICAgICAgICBjb2xvcj1cImRhbmdlclwiXG4gICAgICAgICAgICBmaWxsPVwiY2xlYXJcIlxuICAgICAgICAgICAgc2hhcGU9XCJyb3VuZFwiXG4gICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cImlzRGVsZXRlRGlzYWJsZWQoKVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJ0cmFzaFwiIHNsb3Q9XCJpY29uLW9ubHlcIj48L2lvbi1pY29uPlxuICAgICAgICAgIDwvaW9uLWJ1dHRvbj5cbiAgICAgICAgICA8aW9uLWJ1dHRvblxuICAgICAgICAgICAgKGNsaWNrKT1cIm9wZW5BY3Rpb25TaGVldChEb2N1bWVudFNpZGUuQkFDSylcIlxuICAgICAgICAgICAgc2hhcGU9XCJyb3VuZFwiXG4gICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwiY2xvdWQtdXBsb2FkXCIgc2xvdD1cImljb24tb25seVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgPC9pb24tYnV0dG9uPlxuICAgICAgICA8L2lvbi1jb2w+XG4gICAgICA8L2lvbi1yb3c+XG4gICAgPC9pb24tbGFiZWw+XG4gIDwvaW9uLWl0ZW0+XG48L2lvbi1saXN0PlxuXG48aW9uLWFjdGlvbi1zaGVldFxuICBbaXNPcGVuXT1cImFjdGlvblNoZWV0U3RhdGUgPT09IFVJU3RhdGUuT1BFTlwiXG4gIFtidXR0b25zXT1cImFjdGlvblNoZWV0QnV0dG9uc1wiXG4gIChkaWREaXNtaXNzKT1cImFjdGlvblNoZWV0U3RhdGUgPSBVSVN0YXRlLkNMT1NFRFwiXG4+PC9pb24tYWN0aW9uLXNoZWV0PlxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErQkEsSUFBWTtDQUFaLFNBQVlBLGVBQVk7QUFDdEIsRUFBQUEsY0FBQSxPQUFBLElBQUE7QUFDQSxFQUFBQSxjQUFBLE1BQUEsSUFBQTtBQUNGLEdBSFksaUJBQUEsZUFBWSxDQUFBLEVBQUE7QUFLeEIsSUFBWTtDQUFaLFNBQVlDLFVBQU87QUFDakIsRUFBQUEsU0FBQSxNQUFBLElBQUE7QUFDQSxFQUFBQSxTQUFBLFFBQUEsSUFBQTtBQUNGLEdBSFksWUFBQSxVQUFPLENBQUEsRUFBQTtBQUtuQixJQUFZO0NBQVosU0FBWUMsZUFBWTtBQUN0QixFQUFBQSxjQUFBLFNBQUEsSUFBQTtBQUNBLEVBQUFBLGNBQUEsTUFBQSxJQUFBO0FBQ0YsR0FIWSxpQkFBQSxlQUFZLENBQUEsRUFBQTtBQXdCbEIsSUFBTyw2QkFBUCxNQUFPLDJCQUF5QjtFQW1DcEMsWUFDVSxjQUNBLFdBQ0EsV0FBMEI7QUFGMUIsU0FBQSxlQUFBO0FBQ0EsU0FBQSxZQUFBO0FBQ0EsU0FBQSxZQUFBO0FBckNELFNBQUEsZUFBdUI7QUFDdkIsU0FBQSxpQkFBZ0MsQ0FBQTtBQUUvQixTQUFBLGlCQUFpQixJQUFJLGFBQVk7QUFDakMsU0FBQSxpQkFBaUIsSUFBSSxhQUFZO0FBRzNDLFNBQUEsZUFB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O0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFBZTtBQUFBLEdBQUEsZUFBQSxFQUFBLENBQUE7QUFHYixJQUFPLDRCQUFQOztzRUFBTywyQkFBeUIsQ0FBQTtVQW5CckM7dUJBQ1cseUJBQXVCLFNBRXhCO01BQ1A7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7T0FDRCxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBQSxDQUFBOytGQUdRLGNBQVksQ0FBQTtVQUFwQjtNQUNRLGdCQUFjLENBQUE7VUFBdEI7TUFDUSxnQkFBYyxDQUFBO1VBQXRCO01BQ1MsZ0JBQWMsQ0FBQTtVQUF2QjtNQUNTLGdCQUFjLENBQUE7VUFBdkI7Ozs7NkVBTFUsMkJBQXlCLEVBQUEsV0FBQSw2QkFBQSxVQUFBLHVFQUFBLFlBQUEsR0FBQSxDQUFBO0FBQUEsR0FBQTsiLAogICJuYW1lcyI6IFsiRG9jdW1lbnRTaWRlIiwgIlVJU3RhdGUiLCAiTG9hZGluZ1N0YXRlIl0KfQo=
