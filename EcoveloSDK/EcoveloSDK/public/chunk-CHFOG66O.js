import {
  AccountService,
  CyclistsService,
  KYCService
} from "./chunk-XK4I5MHM.js";
import {
  ErrorHandlerService,
  ToastService
} from "./chunk-SARQRLZR.js";
import {
  StorageService
} from "./chunk-U6SJAXLK.js";
import {
  Injectable,
  TranslateService,
  computed,
  effect,
  firstValueFrom,
  setClassMetadata,
  signal,
  untracked,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-DGENMXJW.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// src/app/services/api-wrappers/kyc.service.ts
var DocumentValidationState;
(function(DocumentValidationState2) {
  DocumentValidationState2["PENDING"] = "pending";
  DocumentValidationState2["APPROVED"] = "approved";
  DocumentValidationState2["REJECTED"] = "rejected";
  DocumentValidationState2["MISSING"] = "missing";
  DocumentValidationState2["NOT_ENABLED"] = "not_enabled";
})(DocumentValidationState || (DocumentValidationState = {}));
var DocumentRequirement;
(function(DocumentRequirement2) {
  DocumentRequirement2["MANDATORY"] = "mandatory";
  DocumentRequirement2["OPTIONAL"] = "optional";
  DocumentRequirement2["DISABLED"] = "disabled";
})(DocumentRequirement || (DocumentRequirement = {}));
var _KYCWrapperService = class _KYCWrapperService {
  constructor(kycService, cyclistsService, toastService, translate, accountService, storage, errorHandler) {
    this.kycService = kycService;
    this.cyclistsService = cyclistsService;
    this.toastService = toastService;
    this.translate = translate;
    this.accountService = accountService;
    this.storage = storage;
    this.errorHandler = errorHandler;
    this.kyc_document_types = signal([]);
    this.enabledDocumentTypes = computed(() => {
      return this.kyc_document_types().filter((doc) => doc.validation !== "disabled");
    });
    this.kycCompletionState = computed(() => {
      const requiredTypes = this.enabledDocumentTypes();
      const cyclistState = this.accountService.cyclistState();
      const cyclistDocs = "cyclist" in cyclistState && cyclistState.cyclist.kyc_documents ? Object.values(cyclistState.cyclist.kyc_documents) : [];
      if (requiredTypes.length === 0) {
        return DocumentValidationState.NOT_ENABLED;
      }
      const statuses = requiredTypes.map((doc) => {
        const cyclistDoc = cyclistDocs.find((cyclistDoc2) => cyclistDoc2.name === doc.name);
        if (!cyclistDoc) {
          return DocumentValidationState.MISSING;
        }
        const status = cyclistDoc.status;
        if (status === "approved") {
          return DocumentValidationState.APPROVED;
        }
        return status;
      });
      if (statuses.every((status) => status === DocumentValidationState.APPROVED)) {
        return DocumentValidationState.APPROVED;
      }
      if (statuses.some((status) => status === DocumentValidationState.REJECTED)) {
        return DocumentValidationState.REJECTED;
      }
      if (statuses.some((status) => status === DocumentValidationState.MISSING)) {
        return DocumentValidationState.MISSING;
      }
      if (statuses.some((status) => status === DocumentValidationState.PENDING)) {
        return DocumentValidationState.PENDING;
      }
      return DocumentValidationState.MISSING;
    });
    this.kycBlockingCheck = computed(() => {
      const cyclistState = this.accountService.cyclistState();
      if (!("cyclist" in cyclistState))
        return;
      const enabledDocs = this.enabledDocumentTypes();
      const hasIncompleteKyc = enabledDocs.some((docType) => {
        const cyclistDoc = Object.values(cyclistState.cyclist.kyc_documents || {}).find((doc) => doc.name === docType.name);
        return !cyclistDoc || cyclistDoc.status === DocumentValidationState.MISSING || cyclistDoc.status === DocumentValidationState.REJECTED;
      });
      const blockedReason = "KYC documents incomplete";
      untracked(() => {
        if (hasIncompleteKyc) {
          this.accountService.addBlockedReason(blockedReason);
        } else {
          this.accountService.removeBlockedReason(blockedReason);
        }
      });
    });
    effect(() => {
      this.kycBlockingCheck();
    });
  }
  // Helper method to find existing document by name
  findExistingDocument(documentType) {
    const cyclistState = this.accountService.cyclistState();
    if (!("cyclist" in cyclistState))
      return null;
    return Object.values(cyclistState.cyclist.kyc_documents || {}).find((doc) => doc.name === documentType) || null;
  }
  uploadDocument(document) {
    return __async(this, null, function* () {
      if (!document.document_type)
        return;
      try {
        const existingDoc = this.findExistingDocument(document.document_type);
        let documentId;
        if (existingDoc) {
          documentId = existingDoc.id;
        } else {
          const createResponse = yield firstValueFrom(this.kycService.createKycDocument({
            createKycDocumentRequest: {
              name: document.document_type
            }
          }));
          documentId = createResponse.id;
        }
        if (documentId && document.files) {
          const filesToUpload = {};
          if (document.files.frontside) {
            filesToUpload.frontside = document.files.frontside;
          }
          if (document.files.backside) {
            filesToUpload.backside = document.files.backside;
          }
          if (Object.keys(filesToUpload).length > 0) {
            yield firstValueFrom(this.kycService.uploadFile({
              id: documentId,
              uploadFileRequest: {
                files: filesToUpload
              }
            }));
          }
        }
      } catch (error) {
        this.errorHandler.handleError(error);
        throw error;
      }
    });
  }
  setKycDocumentTypes() {
    return __async(this, null, function* () {
      var _a;
      const program = yield this.storage.get("program");
      if ((_a = program == null ? void 0 : program.config) == null ? void 0 : _a.kyc_document_types) {
        this.kyc_document_types.set(program.config.kyc_document_types);
      }
    });
  }
};
_KYCWrapperService.\u0275fac = function KYCWrapperService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _KYCWrapperService)(\u0275\u0275inject(KYCService), \u0275\u0275inject(CyclistsService), \u0275\u0275inject(ToastService), \u0275\u0275inject(TranslateService), \u0275\u0275inject(AccountService), \u0275\u0275inject(StorageService), \u0275\u0275inject(ErrorHandlerService));
};
_KYCWrapperService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _KYCWrapperService, factory: _KYCWrapperService.\u0275fac, providedIn: "root" });
var KYCWrapperService = _KYCWrapperService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KYCWrapperService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: KYCService }, { type: CyclistsService }, { type: ToastService }, { type: TranslateService }, { type: AccountService }, { type: StorageService }, { type: ErrorHandlerService }], null);
})();

export {
  KYCWrapperService
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9zZXJ2aWNlcy9hcGktd3JhcHBlcnMva3ljLnNlcnZpY2UudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGNvbXB1dGVkLCBJbmplY3RhYmxlLCBzaWduYWwsIGVmZmVjdCwgdW50cmFja2VkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7XG4gIEtZQ1NlcnZpY2UsXG4gIEN5Y2xpc3RzU2VydmljZSxcbiAgUmV0cmlldmVQcm9ncmFtMjAwUmVzcG9uc2VDb25maWdLeWNEb2N1bWVudFR5cGVzSW5uZXIsXG59IGZyb20gJ3NyYy9hcGktY3ljbGlzdCdcbmltcG9ydCB7IFRvYXN0U2VydmljZSwgVG9hc3RUeXBlIH0gZnJvbSAnLi4vdXRpbHMvdG9hc3Quc2VydmljZSdcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJ1xuaW1wb3J0IHsgZmlyc3RWYWx1ZUZyb20gfSBmcm9tICdyeGpzJ1xuaW1wb3J0IHsgQWNjb3VudFNlcnZpY2UgfSBmcm9tICcuL2FjY291bnQuc2VydmljZSdcbmltcG9ydCB7IFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vdXRpbHMvc3RvcmFnZS5zZXJ2aWNlJ1xuaW1wb3J0IHsgRXJyb3JIYW5kbGVyU2VydmljZSB9IGZyb20gJy4uL3V0aWxzL2Vycm9yLWhhbmRsZXIuc2VydmljZSdcblxuLy8gRW51bXMgdG8gYXZvaWQgYm9vbGVhbnMgYXMgcmVxdWVzdGVkXG5leHBvcnQgZW51bSBEb2N1bWVudFZhbGlkYXRpb25TdGF0ZSB7XG4gIFBFTkRJTkcgPSAncGVuZGluZycsXG4gIEFQUFJPVkVEID0gJ2FwcHJvdmVkJyxcbiAgUkVKRUNURUQgPSAncmVqZWN0ZWQnLFxuICBNSVNTSU5HID0gJ21pc3NpbmcnLFxuICBOT1RfRU5BQkxFRCA9ICdub3RfZW5hYmxlZCcsXG59XG5cbmV4cG9ydCBlbnVtIERvY3VtZW50UmVxdWlyZW1lbnQge1xuICBNQU5EQVRPUlkgPSAnbWFuZGF0b3J5JyxcbiAgT1BUSU9OQUwgPSAnb3B0aW9uYWwnLFxuICBESVNBQkxFRCA9ICdkaXNhYmxlZCcsXG59XG5cbi8vIEludGVyZmFjZSBmb3IgZG9jdW1lbnQgdXBsb2FkIHRoYXQgY29tYmluZXMgZG9jdW1lbnQgdHlwZSBhbmQgZmlsZXNcbmV4cG9ydCBpbnRlcmZhY2UgRG9jdW1lbnRVcGxvYWRSZXF1ZXN0IHtcbiAgZG9jdW1lbnRfdHlwZTogc3RyaW5nXG4gIGZpbGVzOiB7XG4gICAgZnJvbnRzaWRlPzogc3RyaW5nXG4gICAgYmFja3NpZGU/OiBzdHJpbmdcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgS1lDV3JhcHBlclNlcnZpY2Uge1xuICBreWNfZG9jdW1lbnRfdHlwZXMgPSBzaWduYWw8XG4gICAgUmV0cmlldmVQcm9ncmFtMjAwUmVzcG9uc2VDb25maWdLeWNEb2N1bWVudFR5cGVzSW5uZXJbXVxuICA+KFtdKVxuXG4gIC8vUmV0b3VybmUgbGVzIHR5cGVzIGRlIGRvY3VtZW50cyBhY3RpdsOpcyBwYXIgbGUgcHJvZ3JhbW1lIChyYWpvdXRlciBsZSAuZmlsdGVyIHBvdXIgZXhjbHVyZSBsZXMgdHlwZXMgZGUgZG9jdW1lbnRzIGTDqXNhY3RpdsOpcyBlbiBwcm9kKVxuICBlbmFibGVkRG9jdW1lbnRUeXBlcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5reWNfZG9jdW1lbnRfdHlwZXMoKS5maWx0ZXIoXG4gICAgICAoZG9jKSA9PiBkb2MudmFsaWRhdGlvbiAhPT0gJ2Rpc2FibGVkJ1xuICAgIClcbiAgfSlcblxuICAvL1JldG91cm5lIGxlIHN0YXR1cyBkZSBsYSBreWMgZW4gY29tcGFyYXJhbnQgbGUgc3RhdHVzIGRlcyBkb2NzIGR1IGN5Y2xpc3RlIGF2ZWMgY2V1eCByZXF1aXMgcGFyIGxlIHByb2dyYW1tZVxuICBreWNDb21wbGV0aW9uU3RhdGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgcmVxdWlyZWRUeXBlcyA9IHRoaXMuZW5hYmxlZERvY3VtZW50VHlwZXMoKVxuICAgIGNvbnN0IGN5Y2xpc3RTdGF0ZSA9IHRoaXMuYWNjb3VudFNlcnZpY2UuY3ljbGlzdFN0YXRlKClcbiAgICBjb25zdCBjeWNsaXN0RG9jcyA9XG4gICAgICAnY3ljbGlzdCcgaW4gY3ljbGlzdFN0YXRlICYmIGN5Y2xpc3RTdGF0ZS5jeWNsaXN0Lmt5Y19kb2N1bWVudHNcbiAgICAgICAgPyBPYmplY3QudmFsdWVzKGN5Y2xpc3RTdGF0ZS5jeWNsaXN0Lmt5Y19kb2N1bWVudHMpXG4gICAgICAgIDogW11cblxuICAgIGlmIChyZXF1aXJlZFR5cGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIERvY3VtZW50VmFsaWRhdGlvblN0YXRlLk5PVF9FTkFCTEVEXG4gICAgfVxuXG4gICAgLy8gR2F0aGVyIHN0YXR1c2VzIGZvciByZXF1aXJlZCBkb2NzXG4gICAgY29uc3Qgc3RhdHVzZXMgPSByZXF1aXJlZFR5cGVzLm1hcCgoZG9jKSA9PiB7XG4gICAgICBjb25zdCBjeWNsaXN0RG9jID0gY3ljbGlzdERvY3MuZmluZChcbiAgICAgICAgKGN5Y2xpc3REb2M6IGFueSkgPT4gY3ljbGlzdERvYy5uYW1lID09PSBkb2MubmFtZVxuICAgICAgKVxuICAgICAgaWYgKCFjeWNsaXN0RG9jKSB7XG4gICAgICAgIHJldHVybiBEb2N1bWVudFZhbGlkYXRpb25TdGF0ZS5NSVNTSU5HXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHN0YXR1cyA9IGN5Y2xpc3REb2Muc3RhdHVzXG4gICAgICBpZiAoc3RhdHVzID09PSAnYXBwcm92ZWQnKSB7XG4gICAgICAgIHJldHVybiBEb2N1bWVudFZhbGlkYXRpb25TdGF0ZS5BUFBST1ZFRFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RhdHVzXG4gICAgfSlcblxuICAgIGlmIChcbiAgICAgIHN0YXR1c2VzLmV2ZXJ5KChzdGF0dXMpID0+IHN0YXR1cyA9PT0gRG9jdW1lbnRWYWxpZGF0aW9uU3RhdGUuQVBQUk9WRUQpXG4gICAgKSB7XG4gICAgICByZXR1cm4gRG9jdW1lbnRWYWxpZGF0aW9uU3RhdGUuQVBQUk9WRURcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gUkVKRUNURUQgaWYgYW55IGRvY3VtZW50IGlzIHJlamVjdGVkIChwcmlvcml0eSBvdmVyIHBlbmRpbmcpXG4gICAgaWYgKFxuICAgICAgc3RhdHVzZXMuc29tZSgoc3RhdHVzKSA9PiBzdGF0dXMgPT09IERvY3VtZW50VmFsaWRhdGlvblN0YXRlLlJFSkVDVEVEKVxuICAgICkge1xuICAgICAgcmV0dXJuIERvY3VtZW50VmFsaWRhdGlvblN0YXRlLlJFSkVDVEVEXG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIE1JU1NJTkcgaWYgYW55IGRvY3VtZW50IGlzIG1pc3NpbmcgKHByaW9yaXR5IG92ZXIgcGVuZGluZylcbiAgICBpZiAoc3RhdHVzZXMuc29tZSgoc3RhdHVzKSA9PiBzdGF0dXMgPT09IERvY3VtZW50VmFsaWRhdGlvblN0YXRlLk1JU1NJTkcpKSB7XG4gICAgICByZXR1cm4gRG9jdW1lbnRWYWxpZGF0aW9uU3RhdGUuTUlTU0lOR1xuICAgIH1cblxuICAgIC8vIFJldHVybiBQRU5ESU5HIG9ubHkgaWYgbm8gZG9jdW1lbnRzIGFyZSBtaXNzaW5nL3JlamVjdGVkXG4gICAgaWYgKHN0YXR1c2VzLnNvbWUoKHN0YXR1cykgPT4gc3RhdHVzID09PSBEb2N1bWVudFZhbGlkYXRpb25TdGF0ZS5QRU5ESU5HKSkge1xuICAgICAgcmV0dXJuIERvY3VtZW50VmFsaWRhdGlvblN0YXRlLlBFTkRJTkdcbiAgICB9XG5cbiAgICByZXR1cm4gRG9jdW1lbnRWYWxpZGF0aW9uU3RhdGUuTUlTU0lOR1xuICB9KVxuXG4gIC8vQWpvdXRlIHVuZSBibG9ja2luZyByZWFzb24gc2kgbGEga3ljIGVzdCBpbmNvbXBsw6h0ZVxuICBreWNCbG9ja2luZ0NoZWNrID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IGN5Y2xpc3RTdGF0ZSA9IHRoaXMuYWNjb3VudFNlcnZpY2UuY3ljbGlzdFN0YXRlKClcbiAgICBpZiAoISgnY3ljbGlzdCcgaW4gY3ljbGlzdFN0YXRlKSkgcmV0dXJuXG5cbiAgICBjb25zdCBlbmFibGVkRG9jcyA9IHRoaXMuZW5hYmxlZERvY3VtZW50VHlwZXMoKVxuXG4gICAgLy8gQ2hlY2sgaWYgYW55IGVuYWJsZWQgZG9jdW1lbnQgaXMgbWlzc2luZywgcmVqZWN0ZWQsIG9yIG5vdCBjcmVhdGVkXG4gICAgY29uc3QgaGFzSW5jb21wbGV0ZUt5YyA9IGVuYWJsZWREb2NzLnNvbWUoKGRvY1R5cGUpID0+IHtcbiAgICAgIGNvbnN0IGN5Y2xpc3REb2MgPSBPYmplY3QudmFsdWVzKFxuICAgICAgICBjeWNsaXN0U3RhdGUuY3ljbGlzdC5reWNfZG9jdW1lbnRzIHx8IHt9XG4gICAgICApLmZpbmQoKGRvYzogYW55KSA9PiBkb2MubmFtZSA9PT0gZG9jVHlwZS5uYW1lKVxuXG4gICAgICAvLyBEb2N1bWVudCBpcyBtaXNzaW5nIGlmIGl0IGRvZXNuJ3QgZXhpc3Qgb3IgaGFzIG1pc3NpbmcvcmVqZWN0ZWQgc3RhdHVzXG4gICAgICByZXR1cm4gKFxuICAgICAgICAhY3ljbGlzdERvYyB8fFxuICAgICAgICBjeWNsaXN0RG9jLnN0YXR1cyA9PT0gRG9jdW1lbnRWYWxpZGF0aW9uU3RhdGUuTUlTU0lORyB8fFxuICAgICAgICBjeWNsaXN0RG9jLnN0YXR1cyA9PT0gRG9jdW1lbnRWYWxpZGF0aW9uU3RhdGUuUkVKRUNURURcbiAgICAgIClcbiAgICB9KVxuXG4gICAgY29uc3QgYmxvY2tlZFJlYXNvbiA9ICdLWUMgZG9jdW1lbnRzIGluY29tcGxldGUnXG4gICAgdW50cmFja2VkKCgpID0+IHtcbiAgICAgIGlmIChoYXNJbmNvbXBsZXRlS3ljKSB7XG4gICAgICAgIHRoaXMuYWNjb3VudFNlcnZpY2UuYWRkQmxvY2tlZFJlYXNvbihibG9ja2VkUmVhc29uKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hY2NvdW50U2VydmljZS5yZW1vdmVCbG9ja2VkUmVhc29uKGJsb2NrZWRSZWFzb24pXG4gICAgICB9XG4gICAgfSlcbiAgfSlcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGt5Y1NlcnZpY2U6IEtZQ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjeWNsaXN0c1NlcnZpY2U6IEN5Y2xpc3RzU2VydmljZSxcbiAgICBwcml2YXRlIHRvYXN0U2VydmljZTogVG9hc3RTZXJ2aWNlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgYWNjb3VudFNlcnZpY2U6IEFjY291bnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgc3RvcmFnZTogU3RvcmFnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBlcnJvckhhbmRsZXI6IEVycm9ySGFuZGxlclNlcnZpY2VcbiAgKSB7XG4gICAgZWZmZWN0KCgpID0+IHtcbiAgICAgIHRoaXMua3ljQmxvY2tpbmdDaGVjaygpXG4gICAgfSlcbiAgfVxuXG4gIC8vIEhlbHBlciBtZXRob2QgdG8gZmluZCBleGlzdGluZyBkb2N1bWVudCBieSBuYW1lXG4gIHByaXZhdGUgZmluZEV4aXN0aW5nRG9jdW1lbnQoZG9jdW1lbnRUeXBlOiBzdHJpbmcpOiBhbnkgfCBudWxsIHtcbiAgICBjb25zdCBjeWNsaXN0U3RhdGUgPSB0aGlzLmFjY291bnRTZXJ2aWNlLmN5Y2xpc3RTdGF0ZSgpXG4gICAgaWYgKCEoJ2N5Y2xpc3QnIGluIGN5Y2xpc3RTdGF0ZSkpIHJldHVybiBudWxsXG5cbiAgICByZXR1cm4gKFxuICAgICAgT2JqZWN0LnZhbHVlcyhjeWNsaXN0U3RhdGUuY3ljbGlzdC5reWNfZG9jdW1lbnRzIHx8IHt9KS5maW5kKFxuICAgICAgICAoZG9jOiBhbnkpID0+IGRvYy5uYW1lID09PSBkb2N1bWVudFR5cGVcbiAgICAgICkgfHwgbnVsbFxuICAgIClcbiAgfVxuXG4gIGFzeW5jIHVwbG9hZERvY3VtZW50KGRvY3VtZW50OiBEb2N1bWVudFVwbG9hZFJlcXVlc3QpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoIWRvY3VtZW50LmRvY3VtZW50X3R5cGUpIHJldHVyblxuXG4gICAgdHJ5IHtcbiAgICAgIC8vIENoZWNrIGlmIGRvY3VtZW50IGFscmVhZHkgZXhpc3RzIGZvciB0aGlzIGN5Y2xpc3RcbiAgICAgIGNvbnN0IGV4aXN0aW5nRG9jID0gdGhpcy5maW5kRXhpc3RpbmdEb2N1bWVudChkb2N1bWVudC5kb2N1bWVudF90eXBlKVxuICAgICAgbGV0IGRvY3VtZW50SWQ6IHN0cmluZ1xuXG4gICAgICBpZiAoZXhpc3RpbmdEb2MpIHtcbiAgICAgICAgLy8gRG9jdW1lbnQgYWxyZWFkeSBleGlzdHMsIHVzZSBpdHMgSURcbiAgICAgICAgZG9jdW1lbnRJZCA9IGV4aXN0aW5nRG9jLmlkXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBEb2N1bWVudCBkb2Vzbid0IGV4aXN0LCBjcmVhdGUgaXQgZmlyc3RcbiAgICAgICAgY29uc3QgY3JlYXRlUmVzcG9uc2UgPSBhd2FpdCBmaXJzdFZhbHVlRnJvbShcbiAgICAgICAgICB0aGlzLmt5Y1NlcnZpY2UuY3JlYXRlS3ljRG9jdW1lbnQoe1xuICAgICAgICAgICAgY3JlYXRlS3ljRG9jdW1lbnRSZXF1ZXN0OiB7XG4gICAgICAgICAgICAgIG5hbWU6IGRvY3VtZW50LmRvY3VtZW50X3R5cGUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICAgZG9jdW1lbnRJZCA9IGNyZWF0ZVJlc3BvbnNlLmlkIVxuICAgICAgfVxuXG4gICAgICAvLyBVcGxvYWQgZmlsZXMgaWYgd2UgaGF2ZSBhIGRvY3VtZW50IElEIGFuZCBmaWxlc1xuICAgICAgaWYgKGRvY3VtZW50SWQgJiYgZG9jdW1lbnQuZmlsZXMpIHtcbiAgICAgICAgLy8gUHJlcGFyZSBmaWxlcyBvYmplY3QgZm9yIHVwbG9hZFxuICAgICAgICBjb25zdCBmaWxlc1RvVXBsb2FkOiBhbnkgPSB7fVxuXG4gICAgICAgIGlmIChkb2N1bWVudC5maWxlcy5mcm9udHNpZGUpIHtcbiAgICAgICAgICBmaWxlc1RvVXBsb2FkLmZyb250c2lkZSA9IGRvY3VtZW50LmZpbGVzLmZyb250c2lkZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRvY3VtZW50LmZpbGVzLmJhY2tzaWRlKSB7XG4gICAgICAgICAgZmlsZXNUb1VwbG9hZC5iYWNrc2lkZSA9IGRvY3VtZW50LmZpbGVzLmJhY2tzaWRlXG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGxvYWQgYWxsIGZpbGVzIGluIGEgc2luZ2xlIHJlcXVlc3RcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGZpbGVzVG9VcGxvYWQpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBhd2FpdCBmaXJzdFZhbHVlRnJvbShcbiAgICAgICAgICAgIHRoaXMua3ljU2VydmljZS51cGxvYWRGaWxlKHtcbiAgICAgICAgICAgICAgaWQ6IGRvY3VtZW50SWQsXG4gICAgICAgICAgICAgIHVwbG9hZEZpbGVSZXF1ZXN0OiB7XG4gICAgICAgICAgICAgICAgZmlsZXM6IGZpbGVzVG9VcGxvYWQsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBOb3RlOiBDeWNsaXN0IGRhdGEgd2lsbCBiZSByZWZyZXNoZWQgb25jZSBhdCB0aGUgZW5kIGFmdGVyIGFsbCB1cGxvYWRzXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKGVycm9yKVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG4gIH1cblxuICBhc3luYyBzZXRLeWNEb2N1bWVudFR5cGVzKCkge1xuICAgIGNvbnN0IHByb2dyYW0gPSBhd2FpdCB0aGlzLnN0b3JhZ2UuZ2V0KCdwcm9ncmFtJylcbiAgICBpZiAocHJvZ3JhbT8uY29uZmlnPy5reWNfZG9jdW1lbnRfdHlwZXMpIHtcbiAgICAgIHRoaXMua3ljX2RvY3VtZW50X3R5cGVzLnNldChwcm9ncmFtLmNvbmZpZy5reWNfZG9jdW1lbnRfdHlwZXMpXG4gICAgfVxuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWNBLElBQVk7Q0FBWixTQUFZQSwwQkFBdUI7QUFDakMsRUFBQUEseUJBQUEsU0FBQSxJQUFBO0FBQ0EsRUFBQUEseUJBQUEsVUFBQSxJQUFBO0FBQ0EsRUFBQUEseUJBQUEsVUFBQSxJQUFBO0FBQ0EsRUFBQUEseUJBQUEsU0FBQSxJQUFBO0FBQ0EsRUFBQUEseUJBQUEsYUFBQSxJQUFBO0FBQ0YsR0FOWSw0QkFBQSwwQkFBdUIsQ0FBQSxFQUFBO0FBUW5DLElBQVk7Q0FBWixTQUFZQyxzQkFBbUI7QUFDN0IsRUFBQUEscUJBQUEsV0FBQSxJQUFBO0FBQ0EsRUFBQUEscUJBQUEsVUFBQSxJQUFBO0FBQ0EsRUFBQUEscUJBQUEsVUFBQSxJQUFBO0FBQ0YsR0FKWSx3QkFBQSxzQkFBbUIsQ0FBQSxFQUFBO0FBa0J6QixJQUFPLHFCQUFQLE1BQU8sbUJBQWlCO0VBbUc1QixZQUNVLFlBQ0EsaUJBQ0EsY0FDQSxXQUNBLGdCQUNBLFNBQ0EsY0FBaUM7QUFOakMsU0FBQSxhQUFBO0FBQ0EsU0FBQSxrQkFBQTtBQUNBLFNBQUEsZUFBQTtBQUNBLFNBQUEsWUFBQTtBQUNBLFNBQUEsaUJBQUE7QUFDQSxTQUFBLFVBQUE7QUFDQSxTQUFBLGVBQUE7QUF6R1YsU0FBQSxxQkFBcUIsT0FFbkIsQ0FBQSxDQUFFO0FBR0osU0FBQSx1QkFBdUIsU0FBUyxNQUFLO0FBQ25DLGFBQU8sS0FBSyxtQkFBa0IsRUFBRyxPQUMvQixDQUFDLFFBQVEsSUFBSSxlQUFlLFVBQVU7SUFFMUMsQ0FBQztBQUdELFNBQUEscUJBQXFCLFNBQVMsTUFBSztBQUNqQyxZQUFNLGdCQUFnQixLQUFLLHFCQUFvQjtBQUMvQyxZQUFNLGVBQWUsS0FBSyxlQUFlLGFBQVk7QUFDckQsWUFBTSxjQUNKLGFBQWEsZ0JBQWdCLGFBQWEsUUFBUSxnQkFDOUMsT0FBTyxPQUFPLGFBQWEsUUFBUSxhQUFhLElBQ2hELENBQUE7QUFFTixVQUFJLGNBQWMsV0FBVyxHQUFHO0FBQzlCLGVBQU8sd0JBQXdCO01BQ2pDO0FBR0EsWUFBTSxXQUFXLGNBQWMsSUFBSSxDQUFDLFFBQU87QUFDekMsY0FBTSxhQUFhLFlBQVksS0FDN0IsQ0FBQ0MsZ0JBQW9CQSxZQUFXLFNBQVMsSUFBSSxJQUFJO0FBRW5ELFlBQUksQ0FBQyxZQUFZO0FBQ2YsaUJBQU8sd0JBQXdCO1FBQ2pDO0FBRUEsY0FBTSxTQUFTLFdBQVc7QUFDMUIsWUFBSSxXQUFXLFlBQVk7QUFDekIsaUJBQU8sd0JBQXdCO1FBQ2pDO0FBRUEsZUFBTztNQUNULENBQUM7QUFFRCxVQUNFLFNBQVMsTUFBTSxDQUFDLFdBQVcsV0FBVyx3QkFBd0IsUUFBUSxHQUN0RTtBQUNBLGVBQU8sd0JBQXdCO01BQ2pDO0FBR0EsVUFDRSxTQUFTLEtBQUssQ0FBQyxXQUFXLFdBQVcsd0JBQXdCLFFBQVEsR0FDckU7QUFDQSxlQUFPLHdCQUF3QjtNQUNqQztBQUdBLFVBQUksU0FBUyxLQUFLLENBQUMsV0FBVyxXQUFXLHdCQUF3QixPQUFPLEdBQUc7QUFDekUsZUFBTyx3QkFBd0I7TUFDakM7QUFHQSxVQUFJLFNBQVMsS0FBSyxDQUFDLFdBQVcsV0FBVyx3QkFBd0IsT0FBTyxHQUFHO0FBQ3pFLGVBQU8sd0JBQXdCO01BQ2pDO0FBRUEsYUFBTyx3QkFBd0I7SUFDakMsQ0FBQztBQUdELFNBQUEsbUJBQW1CLFNBQVMsTUFBSztBQUMvQixZQUFNLGVBQWUsS0FBSyxlQUFlLGFBQVk7QUFDckQsVUFBSSxFQUFFLGFBQWE7QUFBZTtBQUVsQyxZQUFNLGNBQWMsS0FBSyxxQkFBb0I7QUFHN0MsWUFBTSxtQkFBbUIsWUFBWSxLQUFLLENBQUMsWUFBVztBQUNwRCxjQUFNLGFBQWEsT0FBTyxPQUN4QixhQUFhLFFBQVEsaUJBQWlCLENBQUEsQ0FBRSxFQUN4QyxLQUFLLENBQUMsUUFBYSxJQUFJLFNBQVMsUUFBUSxJQUFJO0FBRzlDLGVBQ0UsQ0FBQyxjQUNELFdBQVcsV0FBVyx3QkFBd0IsV0FDOUMsV0FBVyxXQUFXLHdCQUF3QjtNQUVsRCxDQUFDO0FBRUQsWUFBTSxnQkFBZ0I7QUFDdEIsZ0JBQVUsTUFBSztBQUNiLFlBQUksa0JBQWtCO0FBQ3BCLGVBQUssZUFBZSxpQkFBaUIsYUFBYTtRQUNwRCxPQUFPO0FBQ0wsZUFBSyxlQUFlLG9CQUFvQixhQUFhO1FBQ3ZEO01BQ0YsQ0FBQztJQUNILENBQUM7QUFXQyxXQUFPLE1BQUs7QUFDVixXQUFLLGlCQUFnQjtJQUN2QixDQUFDO0VBQ0g7O0VBR1EscUJBQXFCLGNBQW9CO0FBQy9DLFVBQU0sZUFBZSxLQUFLLGVBQWUsYUFBWTtBQUNyRCxRQUFJLEVBQUUsYUFBYTtBQUFlLGFBQU87QUFFekMsV0FDRSxPQUFPLE9BQU8sYUFBYSxRQUFRLGlCQUFpQixDQUFBLENBQUUsRUFBRSxLQUN0RCxDQUFDLFFBQWEsSUFBSSxTQUFTLFlBQVksS0FDcEM7RUFFVDtFQUVNLGVBQWUsVUFBK0I7O0FBQ2xELFVBQUksQ0FBQyxTQUFTO0FBQWU7QUFFN0IsVUFBSTtBQUVGLGNBQU0sY0FBYyxLQUFLLHFCQUFxQixTQUFTLGFBQWE7QUFDcEUsWUFBSTtBQUVKLFlBQUksYUFBYTtBQUVmLHVCQUFhLFlBQVk7UUFDM0IsT0FBTztBQUVMLGdCQUFNLGlCQUFpQixNQUFNLGVBQzNCLEtBQUssV0FBVyxrQkFBa0I7WUFDaEMsMEJBQTBCO2NBQ3hCLE1BQU0sU0FBUzs7V0FFbEIsQ0FBQztBQUVKLHVCQUFhLGVBQWU7UUFDOUI7QUFHQSxZQUFJLGNBQWMsU0FBUyxPQUFPO0FBRWhDLGdCQUFNLGdCQUFxQixDQUFBO0FBRTNCLGNBQUksU0FBUyxNQUFNLFdBQVc7QUFDNUIsMEJBQWMsWUFBWSxTQUFTLE1BQU07VUFDM0M7QUFFQSxjQUFJLFNBQVMsTUFBTSxVQUFVO0FBQzNCLDBCQUFjLFdBQVcsU0FBUyxNQUFNO1VBQzFDO0FBR0EsY0FBSSxPQUFPLEtBQUssYUFBYSxFQUFFLFNBQVMsR0FBRztBQUN6QyxrQkFBTSxlQUNKLEtBQUssV0FBVyxXQUFXO2NBQ3pCLElBQUk7Y0FDSixtQkFBbUI7Z0JBQ2pCLE9BQU87O2FBRVYsQ0FBQztVQUVOO1FBQ0Y7TUFHRixTQUFTLE9BQU87QUFDZCxhQUFLLGFBQWEsWUFBWSxLQUFLO0FBQ25DLGNBQU07TUFDUjtJQUNGOztFQUVNLHNCQUFtQjs7QUE3TjNCO0FBOE5JLFlBQU0sVUFBVSxNQUFNLEtBQUssUUFBUSxJQUFJLFNBQVM7QUFDaEQsV0FBSSx3Q0FBUyxXQUFULG1CQUFpQixvQkFBb0I7QUFDdkMsYUFBSyxtQkFBbUIsSUFBSSxRQUFRLE9BQU8sa0JBQWtCO01BQy9EO0lBQ0Y7Ozs7bUNBMUxXLG9CQUFpQixtQkFBQSxVQUFBLEdBQUEsbUJBQUEsZUFBQSxHQUFBLG1CQUFBLFlBQUEsR0FBQSxtQkFBQSxnQkFBQSxHQUFBLG1CQUFBLGNBQUEsR0FBQSxtQkFBQSxjQUFBLEdBQUEsbUJBQUEsbUJBQUEsQ0FBQTtBQUFBO3NGQUFqQixvQkFBaUIsU0FBakIsbUJBQWlCLFdBQUEsWUFGaEIsT0FBTSxDQUFBO0FBRWQsSUFBTyxvQkFBUDs7c0VBQU8sbUJBQWlCLENBQUE7VUFIN0I7V0FBVztNQUNWLFlBQVk7S0FDYjs7OyIsCiAgIm5hbWVzIjogWyJEb2N1bWVudFZhbGlkYXRpb25TdGF0ZSIsICJEb2N1bWVudFJlcXVpcmVtZW50IiwgImN5Y2xpc3REb2MiXQp9Cg==
