import {
  Injectable,
  TranslateService,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-DGENMXJW.js";

// src/app/services/utils/language.service.ts
var _LanguageService = class _LanguageService {
  constructor(translateService) {
    this.translateService = translateService;
    this.currentLanguage = signal("fr");
  }
  setLanguage(lang) {
    this.translateService.use(lang);
    localStorage.setItem("preferredLanguage", lang);
    this.currentLanguage.set(lang);
  }
  getLanguage() {
    return localStorage.getItem("preferredLanguage") || "fr";
  }
  initializeLanguage() {
    const savedLang = this.getLanguage();
    this.setLanguage(savedLang);
  }
};
_LanguageService.\u0275fac = function LanguageService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LanguageService)(\u0275\u0275inject(TranslateService));
};
_LanguageService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LanguageService, factory: _LanguageService.\u0275fac, providedIn: "root" });
var LanguageService = _LanguageService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LanguageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: TranslateService }], null);
})();

export {
  LanguageService
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9zZXJ2aWNlcy91dGlscy9sYW5ndWFnZS5zZXJ2aWNlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBJbmplY3RhYmxlLCBzaWduYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBMYW5ndWFnZVNlcnZpY2Uge1xuICBwdWJsaWMgY3VycmVudExhbmd1YWdlID0gc2lnbmFsKCdmcicpXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSkge31cblxuICBzZXRMYW5ndWFnZShsYW5nOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UudXNlKGxhbmcpXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3ByZWZlcnJlZExhbmd1YWdlJywgbGFuZylcbiAgICB0aGlzLmN1cnJlbnRMYW5ndWFnZS5zZXQobGFuZylcbiAgfVxuXG4gIGdldExhbmd1YWdlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcmVmZXJyZWRMYW5ndWFnZScpIHx8ICdmcidcbiAgfVxuXG4gIGluaXRpYWxpemVMYW5ndWFnZSgpOiB2b2lkIHtcbiAgICBjb25zdCBzYXZlZExhbmcgPSB0aGlzLmdldExhbmd1YWdlKClcbiAgICB0aGlzLnNldExhbmd1YWdlKHNhdmVkTGFuZylcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7OztBQU1NLElBQU8sbUJBQVAsTUFBTyxpQkFBZTtFQUUxQixZQUFvQixrQkFBa0M7QUFBbEMsU0FBQSxtQkFBQTtBQURiLFNBQUEsa0JBQWtCLE9BQU8sSUFBSTtFQUNxQjtFQUV6RCxZQUFZLE1BQVk7QUFDdEIsU0FBSyxpQkFBaUIsSUFBSSxJQUFJO0FBQzlCLGlCQUFhLFFBQVEscUJBQXFCLElBQUk7QUFDOUMsU0FBSyxnQkFBZ0IsSUFBSSxJQUFJO0VBQy9CO0VBRUEsY0FBVztBQUNULFdBQU8sYUFBYSxRQUFRLG1CQUFtQixLQUFLO0VBQ3REO0VBRUEscUJBQWtCO0FBQ2hCLFVBQU0sWUFBWSxLQUFLLFlBQVc7QUFDbEMsU0FBSyxZQUFZLFNBQVM7RUFDNUI7OzttQ0FqQlcsa0JBQWUsbUJBQUEsZ0JBQUEsQ0FBQTtBQUFBO29GQUFmLGtCQUFlLFNBQWYsaUJBQWUsV0FBQSxZQUZkLE9BQU0sQ0FBQTtBQUVkLElBQU8sa0JBQVA7O3NFQUFPLGlCQUFlLENBQUE7VUFIM0I7V0FBVztNQUNWLFlBQVk7S0FDYjs7OyIsCiAgIm5hbWVzIjogW10KfQo=
