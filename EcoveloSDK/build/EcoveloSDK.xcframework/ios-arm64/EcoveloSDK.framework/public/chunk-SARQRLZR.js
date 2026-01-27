import {
  Injectable,
  ToastController,
  TranslateService,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-DGENMXJW.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// src/app/services/utils/toast.service.ts
var ToastType;
(function(ToastType2) {
  ToastType2[ToastType2["Info"] = 0] = "Info";
  ToastType2[ToastType2["Success"] = 1] = "Success";
  ToastType2[ToastType2["Warning"] = 2] = "Warning";
  ToastType2[ToastType2["Error"] = 3] = "Error";
})(ToastType || (ToastType = {}));
var _ToastService = class _ToastService {
  constructor(toastController) {
    this.toastController = toastController;
  }
  createWithJustMessage(_0) {
    return __async(this, arguments, function* (message, type = ToastType.Info) {
      const toast = yield this.toastController.create({
        message,
        duration: 3e3,
        position: "top",
        color: this.getColorFromType(type)
      });
      yield toast.present();
    });
  }
  getColorFromType(type) {
    switch (type) {
      case ToastType.Success:
        return "success";
      case ToastType.Warning:
        return "warning";
      case ToastType.Error:
        return "danger";
      case ToastType.Info:
      default:
        return "primary";
    }
  }
};
_ToastService.\u0275fac = function ToastService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ToastService)(\u0275\u0275inject(ToastController));
};
_ToastService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ToastService, factory: _ToastService.\u0275fac, providedIn: "root" });
var ToastService = _ToastService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: ToastController }], null);
})();

// src/app/services/utils/error-handler.service.ts
var _ErrorHandlerService = class _ErrorHandlerService {
  constructor(translate, toastService) {
    this.translate = translate;
    this.toastService = toastService;
  }
  /**
   * Main entry point for handling any type of error
   * Uses error.title directly as translation key
   */
  handleError(error) {
    let errorKey = null;
    if (error.error && error.error.title) {
      errorKey = error.error.title;
    } else if (error.decline_code) {
      errorKey = error.decline_code;
    } else if (error.code && error.message) {
      errorKey = this.extractCognitoErrorKey(error.message) || error.code;
    } else if (error.name && error.message) {
      errorKey = this.extractCognitoErrorKey(error.message) || error.name;
    } else if (error.message) {
      errorKey = this.convertToSnakeCase(error.message);
    }
    if (!errorKey || errorKey === "" || errorKey === "Bad Request") {
      this.toastService.createWithJustMessage(this.translate.instant("error.generic"), ToastType.Error);
      return;
    }
    this.toastService.createWithJustMessage(this.translate.instant("error.key." + errorKey), ToastType.Error);
  }
  /**
   * Extract Cognito error key from message before the pipe |
   * Example: "PreSignUp failed with error phone_number_already_used | Un utilisateur existe déjà..."
   * Returns: "phone_number_already_used"
   */
  extractCognitoErrorKey(message) {
    const match = message.match(/(\w+)\s*\|/);
    if (match && match[1]) {
      return match[1];
    }
    return null;
  }
  convertToSnakeCase(message) {
    return message.toLowerCase().trim().replace(/[^\w\s]/g, "").replace(/\s+/g, "_");
  }
};
_ErrorHandlerService.\u0275fac = function ErrorHandlerService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ErrorHandlerService)(\u0275\u0275inject(TranslateService), \u0275\u0275inject(ToastService));
};
_ErrorHandlerService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ErrorHandlerService, factory: _ErrorHandlerService.\u0275fac, providedIn: "root" });
var ErrorHandlerService = _ErrorHandlerService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ErrorHandlerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: TranslateService }, { type: ToastService }], null);
})();

export {
  ToastType,
  ToastService,
  ErrorHandlerService
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9zZXJ2aWNlcy91dGlscy90b2FzdC5zZXJ2aWNlLnRzIiwgInNyYy9hcHAvc2VydmljZXMvdXRpbHMvZXJyb3ItaGFuZGxlci5zZXJ2aWNlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IFRvYXN0Q29udHJvbGxlciB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyL3N0YW5kYWxvbmUnXG5cbmV4cG9ydCBlbnVtIFRvYXN0VHlwZSB7XG4gIEluZm8sXG4gIFN1Y2Nlc3MsXG4gIFdhcm5pbmcsXG4gIEVycm9yLFxufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVG9hc3RTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0b2FzdENvbnRyb2xsZXI6IFRvYXN0Q29udHJvbGxlcikge31cblxuICBwdWJsaWMgYXN5bmMgY3JlYXRlV2l0aEp1c3RNZXNzYWdlKFxuICAgIG1lc3NhZ2U6IHN0cmluZyxcbiAgICB0eXBlOiBUb2FzdFR5cGUgPSBUb2FzdFR5cGUuSW5mb1xuICApIHtcbiAgICBjb25zdCB0b2FzdCA9IGF3YWl0IHRoaXMudG9hc3RDb250cm9sbGVyLmNyZWF0ZSh7XG4gICAgICBtZXNzYWdlLFxuICAgICAgZHVyYXRpb246IDMwMDAsXG4gICAgICBwb3NpdGlvbjogJ3RvcCcsXG4gICAgICBjb2xvcjogdGhpcy5nZXRDb2xvckZyb21UeXBlKHR5cGUpLFxuICAgIH0pXG4gICAgYXdhaXQgdG9hc3QucHJlc2VudCgpXG4gIH1cblxuICBwcml2YXRlIGdldENvbG9yRnJvbVR5cGUodHlwZTogVG9hc3RUeXBlKTogc3RyaW5nIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgVG9hc3RUeXBlLlN1Y2Nlc3M6XG4gICAgICAgIHJldHVybiAnc3VjY2VzcydcbiAgICAgIGNhc2UgVG9hc3RUeXBlLldhcm5pbmc6XG4gICAgICAgIHJldHVybiAnd2FybmluZydcbiAgICAgIGNhc2UgVG9hc3RUeXBlLkVycm9yOlxuICAgICAgICByZXR1cm4gJ2RhbmdlcidcbiAgICAgIGNhc2UgVG9hc3RUeXBlLkluZm86XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ3ByaW1hcnknXG4gICAgfVxuICB9XG59XG4iLCAiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSdcbmltcG9ydCB7IFRvYXN0U2VydmljZSwgVG9hc3RUeXBlIH0gZnJvbSAnLi90b2FzdC5zZXJ2aWNlJ1xuXG4vKipcbiAqIFNpbXBsaWZpZWQgZXJyb3IgaGFuZGxpbmcgc2VydmljZSAtIFVzZXMgZGlyZWN0IGVycm9yIGNvZGVzIGFzIHRyYW5zbGF0aW9uIGtleXNcbiAqIE11Y2ggc2ltcGxlciBhbmQgbWFpbnRhaW5hYmxlIGFwcHJvYWNoXG4gKi9cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEVycm9ySGFuZGxlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSxcbiAgICBwcml2YXRlIHRvYXN0U2VydmljZTogVG9hc3RTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogTWFpbiBlbnRyeSBwb2ludCBmb3IgaGFuZGxpbmcgYW55IHR5cGUgb2YgZXJyb3JcbiAgICogVXNlcyBlcnJvci50aXRsZSBkaXJlY3RseSBhcyB0cmFuc2xhdGlvbiBrZXlcbiAgICovXG4gIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpIHtcbiAgICBsZXQgZXJyb3JLZXk6IHN0cmluZyB8IG51bGwgPSBudWxsXG4gICAgaWYgKGVycm9yLmVycm9yICYmIGVycm9yLmVycm9yLnRpdGxlKSB7XG4gICAgICBlcnJvcktleSA9IGVycm9yLmVycm9yLnRpdGxlXG4gICAgfSBlbHNlIGlmIChlcnJvci5kZWNsaW5lX2NvZGUpIHtcbiAgICAgIGVycm9yS2V5ID0gZXJyb3IuZGVjbGluZV9jb2RlXG4gICAgfSBlbHNlIGlmIChlcnJvci5jb2RlICYmIGVycm9yLm1lc3NhZ2UpIHtcbiAgICAgIGVycm9yS2V5ID0gdGhpcy5leHRyYWN0Q29nbml0b0Vycm9yS2V5KGVycm9yLm1lc3NhZ2UpIHx8IGVycm9yLmNvZGVcbiAgICB9IGVsc2UgaWYgKGVycm9yLm5hbWUgJiYgZXJyb3IubWVzc2FnZSkge1xuICAgICAgZXJyb3JLZXkgPSB0aGlzLmV4dHJhY3RDb2duaXRvRXJyb3JLZXkoZXJyb3IubWVzc2FnZSkgfHwgZXJyb3IubmFtZVxuICAgIH0gZWxzZSBpZiAoZXJyb3IubWVzc2FnZSkge1xuICAgICAgZXJyb3JLZXkgPSB0aGlzLmNvbnZlcnRUb1NuYWtlQ2FzZShlcnJvci5tZXNzYWdlKVxuICAgIH1cblxuICAgIGlmICghZXJyb3JLZXkgfHwgZXJyb3JLZXkgPT09ICcnIHx8IGVycm9yS2V5ID09PSAnQmFkIFJlcXVlc3QnKSB7XG4gICAgICB0aGlzLnRvYXN0U2VydmljZS5jcmVhdGVXaXRoSnVzdE1lc3NhZ2UoXG4gICAgICAgIHRoaXMudHJhbnNsYXRlLmluc3RhbnQoJ2Vycm9yLmdlbmVyaWMnKSxcbiAgICAgICAgVG9hc3RUeXBlLkVycm9yXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdGhpcy50b2FzdFNlcnZpY2UuY3JlYXRlV2l0aEp1c3RNZXNzYWdlKFxuICAgICAgdGhpcy50cmFuc2xhdGUuaW5zdGFudCgnZXJyb3Iua2V5LicgKyBlcnJvcktleSksXG4gICAgICBUb2FzdFR5cGUuRXJyb3JcbiAgICApXG4gIH1cblxuICAvKipcbiAgICogRXh0cmFjdCBDb2duaXRvIGVycm9yIGtleSBmcm9tIG1lc3NhZ2UgYmVmb3JlIHRoZSBwaXBlIHxcbiAgICogRXhhbXBsZTogXCJQcmVTaWduVXAgZmFpbGVkIHdpdGggZXJyb3IgcGhvbmVfbnVtYmVyX2FscmVhZHlfdXNlZCB8IFVuIHV0aWxpc2F0ZXVyIGV4aXN0ZSBkw6lqw6AuLi5cIlxuICAgKiBSZXR1cm5zOiBcInBob25lX251bWJlcl9hbHJlYWR5X3VzZWRcIlxuICAgKi9cbiAgcHJpdmF0ZSBleHRyYWN0Q29nbml0b0Vycm9yS2V5KG1lc3NhZ2U6IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICAgIC8vIE1hdGNoIHdvcmQgYmVmb3JlIHRoZSBwaXBlIHxcbiAgICBjb25zdCBtYXRjaCA9IG1lc3NhZ2UubWF0Y2goLyhcXHcrKVxccypcXHwvKVxuICAgIGlmIChtYXRjaCAmJiBtYXRjaFsxXSkge1xuICAgICAgcmV0dXJuIG1hdGNoWzFdXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnRUb1NuYWtlQ2FzZShtZXNzYWdlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBtZXNzYWdlXG4gICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgLnRyaW0oKVxuICAgICAgLnJlcGxhY2UoL1teXFx3XFxzXS9nLCAnJylcbiAgICAgIC5yZXBsYWNlKC9cXHMrL2csICdfJylcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7OztBQUdBLElBQVk7Q0FBWixTQUFZQSxZQUFTO0FBQ25CLEVBQUFBLFdBQUFBLFdBQUEsTUFBQSxJQUFBLENBQUEsSUFBQTtBQUNBLEVBQUFBLFdBQUFBLFdBQUEsU0FBQSxJQUFBLENBQUEsSUFBQTtBQUNBLEVBQUFBLFdBQUFBLFdBQUEsU0FBQSxJQUFBLENBQUEsSUFBQTtBQUNBLEVBQUFBLFdBQUFBLFdBQUEsT0FBQSxJQUFBLENBQUEsSUFBQTtBQUNGLEdBTFksY0FBQSxZQUFTLENBQUEsRUFBQTtBQVVmLElBQU8sZ0JBQVAsTUFBTyxjQUFZO0VBQ3ZCLFlBQW9CLGlCQUFnQztBQUFo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
