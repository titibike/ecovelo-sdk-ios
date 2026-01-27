import {
  LanguageService
} from "./chunk-K2AWDLYV.js";
import {
  require_showdown
} from "./chunk-7JCEDXGT.js";
import {
  LoadingController
} from "./chunk-Y4K6NO5T.js";
import {
  AccountService,
  RegistrationsService,
  TermsService
} from "./chunk-XK4I5MHM.js";
import {
  environment
} from "./chunk-FOJAXRYS.js";
import {
  ToastService,
  ToastType
} from "./chunk-SARQRLZR.js";
import {
  BehaviorSubject,
  DomSanitizer,
  Injectable,
  TranslateService,
  effect,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-DGENMXJW.js";
import {
  __async,
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-UESUV5PM.js";

// src/app/services/api-wrappers/cgu.service.ts
var showdown = __toESM(require_showdown());
var _CguService = class _CguService {
  constructor(termsService, sanitizer, registrationsService, toastService, translateService, loadingCtrl, languageService, accountService) {
    this.termsService = termsService;
    this.sanitizer = sanitizer;
    this.registrationsService = registrationsService;
    this.toastService = toastService;
    this.translateService = translateService;
    this.loadingCtrl = loadingCtrl;
    this.languageService = languageService;
    this.accountService = accountService;
    this.cguLoadingState = new BehaviorSubject({
      state: "loading"
    });
    this.language = "fr";
    this.converter = new showdown.Converter();
    effect(() => {
      this.language = this.languageService.currentLanguage();
      this.getCgu();
    });
  }
  getCgu() {
    return __async(this, null, function* () {
      this.cguLoadingState.next({ state: "loading" });
      this.termsService.retrieveTerms({ program: environment.program, language: this.language }).subscribe({
        next: (response) => __async(this, null, function* () {
          if (response.text) {
            this.cguLoadingState.next({
              state: "success",
              cgu: response,
              terms: this.sanitizer.bypassSecurityTrustHtml(this.converter.makeHtml(response.text))
            });
          }
        }),
        error: (error) => {
          this.cguLoadingState.next({ state: "error", error });
        }
      });
    });
  }
  validateTerms() {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => __async(this, null, function* () {
        this.registrationsService.updateRegistration({
          program: environment.program,
          body: {
            terms_validated: true
          }
        }).subscribe({
          next: () => __async(this, null, function* () {
            var _a, _b;
            const currentCyclist = this.accountService.getCurrentCyclist();
            this.accountService.updateCyclistData(__spreadProps(__spreadValues({}, currentCyclist), {
              registrations: __spreadProps(__spreadValues({}, currentCyclist.registrations), {
                data: [
                  __spreadProps(__spreadValues({}, (_b = (_a = currentCyclist.registrations) == null ? void 0 : _a.data) == null ? void 0 : _b[0]), {
                    terms_validated: true,
                    terms_validated_at: Date.now()
                  })
                ]
              })
            }));
            resolve();
          }),
          error: (error) => {
            this.toastService.createWithJustMessage(error.error.message, ToastType.Error);
            reject(error);
          }
        });
      }));
    });
  }
};
_CguService.\u0275fac = function CguService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CguService)(\u0275\u0275inject(TermsService), \u0275\u0275inject(DomSanitizer), \u0275\u0275inject(RegistrationsService), \u0275\u0275inject(ToastService), \u0275\u0275inject(TranslateService), \u0275\u0275inject(LoadingController), \u0275\u0275inject(LanguageService), \u0275\u0275inject(AccountService));
};
_CguService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CguService, factory: _CguService.\u0275fac, providedIn: "root" });
var CguService = _CguService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CguService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: TermsService }, { type: DomSanitizer }, { type: RegistrationsService }, { type: ToastService }, { type: TranslateService }, { type: LoadingController }, { type: LanguageService }, { type: AccountService }], null);
})();

export {
  CguService
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9zZXJ2aWNlcy9hcGktd3JhcHBlcnMvY2d1LnNlcnZpY2UudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGVmZmVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJ1xuaW1wb3J0IHtcbiAgUmVnaXN0cmF0aW9uc1NlcnZpY2UsXG4gIFJldHJpZXZlVGVybXMyMDBSZXNwb25zZSxcbiAgVGVybXNTZXJ2aWNlLFxufSBmcm9tICdzcmMvYXBpLWN5Y2xpc3QnXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJ3NyYy9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlcidcbmltcG9ydCAqIGFzIHNob3dkb3duIGZyb20gJ3Nob3dkb3duJ1xuaW1wb3J0IHsgQWNjb3VudFNlcnZpY2UgfSBmcm9tICcuL2FjY291bnQuc2VydmljZSdcbmltcG9ydCB7IFRvYXN0U2VydmljZSwgVG9hc3RUeXBlIH0gZnJvbSAnLi4vdXRpbHMvdG9hc3Quc2VydmljZSdcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJ1xuaW1wb3J0IHsgTG9hZGluZ0NvbnRyb2xsZXIgfSBmcm9tICdAaW9uaWMvYW5ndWxhcidcbmltcG9ydCB7IExhbmd1YWdlU2VydmljZSB9IGZyb20gJy4uL3V0aWxzL2xhbmd1YWdlLnNlcnZpY2UnXG5cbmV4cG9ydCB0eXBlIGNndUxvYWRpbmdTdGF0ZSA9XG4gIHwgeyBzdGF0ZTogJ2xvYWRpbmcnIH1cbiAgfCB7IHN0YXRlOiAnbm9fZGF0YScgfVxuICB8IHtcbiAgICAgIHN0YXRlOiAnc3VjY2VzcydcbiAgICAgIGNndTogUmV0cmlldmVUZXJtczIwMFJlc3BvbnNlXG4gICAgICB0ZXJtczogU2FmZUh0bWxcbiAgICB9XG4gIHwgeyBzdGF0ZTogJ2Vycm9yJzsgZXJyb3I6IEVycm9yIH1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENndVNlcnZpY2Uge1xuICBjZ3VMb2FkaW5nU3RhdGUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGNndUxvYWRpbmdTdGF0ZT4oe1xuICAgIHN0YXRlOiAnbG9hZGluZycsXG4gIH0pXG5cbiAgcHJpdmF0ZSBsYW5ndWFnZTogc3RyaW5nID0gJ2ZyJ1xuICBwcml2YXRlIGNvbnZlcnRlcjogc2hvd2Rvd24uQ29udmVydGVyXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGVybXNTZXJ2aWNlOiBUZXJtc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcixcbiAgICBwcml2YXRlIHJlZ2lzdHJhdGlvbnNTZXJ2aWNlOiBSZWdpc3RyYXRpb25zU2VydmljZSxcbiAgICBwcml2YXRlIHRvYXN0U2VydmljZTogVG9hc3RTZXJ2aWNlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSxcbiAgICBwcml2YXRlIGxvYWRpbmdDdHJsOiBMb2FkaW5nQ29udHJvbGxlcixcbiAgICBwcml2YXRlIGxhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgYWNjb3VudFNlcnZpY2U6IEFjY291bnRTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuY29udmVydGVyID0gbmV3IHNob3dkb3duLkNvbnZlcnRlcigpXG4gICAgZWZmZWN0KCgpID0+IHtcbiAgICAgIHRoaXMubGFuZ3VhZ2UgPSB0aGlzLmxhbmd1YWdlU2VydmljZS5jdXJyZW50TGFuZ3VhZ2UoKVxuICAgICAgdGhpcy5nZXRDZ3UoKVxuICAgIH0pXG4gIH1cblxuICBhc3luYyBnZXRDZ3UoKSB7XG4gICAgdGhpcy5jZ3VMb2FkaW5nU3RhdGUubmV4dCh7IHN0YXRlOiAnbG9hZGluZycgfSlcbiAgICB0aGlzLnRlcm1zU2VydmljZVxuICAgICAgLnJldHJpZXZlVGVybXMoeyBwcm9ncmFtOiBlbnZpcm9ubWVudC5wcm9ncmFtLCBsYW5ndWFnZTogdGhpcy5sYW5ndWFnZSB9KVxuICAgICAgLnN1YnNjcmliZSh7XG4gICAgICAgIG5leHQ6IGFzeW5jIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGlmIChyZXNwb25zZS50ZXh0KSB7XG4gICAgICAgICAgICB0aGlzLmNndUxvYWRpbmdTdGF0ZS5uZXh0KHtcbiAgICAgICAgICAgICAgc3RhdGU6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgY2d1OiByZXNwb25zZSxcbiAgICAgICAgICAgICAgdGVybXM6IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKFxuICAgICAgICAgICAgICAgIHRoaXMuY29udmVydGVyLm1ha2VIdG1sKHJlc3BvbnNlLnRleHQpXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMuY2d1TG9hZGluZ1N0YXRlLm5leHQoeyBzdGF0ZTogJ2Vycm9yJywgZXJyb3IgfSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gIH1cblxuICBhc3luYyB2YWxpZGF0ZVRlcm1zKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLnJlZ2lzdHJhdGlvbnNTZXJ2aWNlXG4gICAgICAgIC51cGRhdGVSZWdpc3RyYXRpb24oe1xuICAgICAgICAgIHByb2dyYW06IGVudmlyb25tZW50LnByb2dyYW0sXG4gICAgICAgICAgYm9keToge1xuICAgICAgICAgICAgdGVybXNfdmFsaWRhdGVkOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIC5zdWJzY3JpYmUoe1xuICAgICAgICAgIG5leHQ6IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDeWNsaXN0ID0gdGhpcy5hY2NvdW50U2VydmljZS5nZXRDdXJyZW50Q3ljbGlzdCgpXG5cbiAgICAgICAgICAgIHRoaXMuYWNjb3VudFNlcnZpY2UudXBkYXRlQ3ljbGlzdERhdGEoe1xuICAgICAgICAgICAgICAuLi5jdXJyZW50Q3ljbGlzdCxcbiAgICAgICAgICAgICAgcmVnaXN0cmF0aW9uczoge1xuICAgICAgICAgICAgICAgIC4uLmN1cnJlbnRDeWNsaXN0LnJlZ2lzdHJhdGlvbnMsXG4gICAgICAgICAgICAgICAgZGF0YTogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAuLi5jdXJyZW50Q3ljbGlzdC5yZWdpc3RyYXRpb25zPy5kYXRhPy5bMF0sXG4gICAgICAgICAgICAgICAgICAgIHRlcm1zX3ZhbGlkYXRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdGVybXNfdmFsaWRhdGVkX2F0OiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyb3I6IChlcnJvcikgPT4ge1xuICAgICAgICAgICAgdGhpcy50b2FzdFNlcnZpY2UuY3JlYXRlV2l0aEp1c3RNZXNzYWdlKFxuICAgICAgICAgICAgICBlcnJvci5lcnJvci5tZXNzYWdlLFxuICAgICAgICAgICAgICBUb2FzdFR5cGUuRXJyb3JcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIHJlamVjdChlcnJvcilcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7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
