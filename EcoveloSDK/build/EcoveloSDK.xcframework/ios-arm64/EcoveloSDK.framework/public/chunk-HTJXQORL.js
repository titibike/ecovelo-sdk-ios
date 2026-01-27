import {
  LanguageService
} from "./chunk-K2AWDLYV.js";
import {
  AccountService,
  FAQService
} from "./chunk-XK4I5MHM.js";
import {
  environment
} from "./chunk-FOJAXRYS.js";
import {
  StorageService
} from "./chunk-U6SJAXLK.js";
import {
  BehaviorSubject,
  Injectable,
  effect,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-DGENMXJW.js";

// src/app/services/api-wrappers/support.service.ts
var _SupportService = class _SupportService {
  constructor(storage, faqService, languageService, accountService) {
    this.storage = storage;
    this.faqService = faqService;
    this.languageService = languageService;
    this.accountService = accountService;
    this.faqState = new BehaviorSubject({
      state: "loading"
    });
    this.language = "fr";
    this.storage.get("program").then((program) => {
      this.program = program;
    });
    effect(() => {
      this.language = this.languageService.currentLanguage();
      if (this.faqState.value.state !== "loading") {
        this.getFaq();
      }
    });
  }
  getFaq() {
    this.faqState.next({ state: "loading" });
    this.faqService.retrieveFaq({
      program: environment.program,
      language: this.language
    }).subscribe({
      next: (res) => {
        if (res.data) {
          this.faqState.next({ state: "success", faq: res.data });
        } else {
          this.faqState.next({ state: "no_data" });
        }
      },
      error: (err) => {
        this.faqState.next({ state: "error", error: err });
      }
    });
  }
  /**
   * Génère un lien mailto pour contacter le support avec les informations du cyclist si connecté
   * @param message Message à inclure dans le corps de l'email (optionnel)
   * @returns Le lien mailto complet
   */
  generateSupportMailtoLink(message = "") {
    var _a, _b, _c, _d;
    if (!((_c = (_b = (_a = this.program) == null ? void 0 : _a.config) == null ? void 0 : _b.hotline) == null ? void 0 : _c.email)) {
      return "#";
    }
    const email = this.program.config.hotline.email;
    const subject = "Demande SAV";
    let body = message;
    try {
      const cyclist = this.accountService.getCurrentCyclist();
      body += `%0D%0A%0D%0A-------------------------------------------%0D%0A MERCI DE NE PAS MODIFIER LES INFORMATIONS CI-DESSOUS %0D%0A${cyclist.id}%0D%0A${cyclist.name || ""}%0D%0A${cyclist.phone_number || ""}%0D%0A${((_d = this.program) == null ? void 0 : _d.id) || ""}`;
    } catch (error) {
      body += `%0D%0A%0D%0A-------------------------------------------%0D%0A MERCI DE NE PAS MODIFIER LES INFORMATIONS CI-DESSOUS %0D%0A Utilisateur non enregistr\xE9`;
    }
    return `mailto:${email}?subject=${subject}&body=${body}`;
  }
};
_SupportService.\u0275fac = function SupportService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SupportService)(\u0275\u0275inject(StorageService), \u0275\u0275inject(FAQService), \u0275\u0275inject(LanguageService), \u0275\u0275inject(AccountService));
};
_SupportService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SupportService, factory: _SupportService.\u0275fac, providedIn: "root" });
var SupportService = _SupportService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SupportService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: StorageService }, { type: FAQService }, { type: LanguageService }, { type: AccountService }], null);
})();

export {
  SupportService
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9zZXJ2aWNlcy9hcGktd3JhcHBlcnMvc3VwcG9ydC5zZXJ2aWNlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBlZmZlY3QsIEluamVjdGFibGUsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gJy4uL3V0aWxzL3N0b3JhZ2Uuc2VydmljZSdcbmltcG9ydCB7XG4gIEZBUVNlcnZpY2UsXG4gIFJldHJpZXZlRmFxMjAwUmVzcG9uc2VBbGxPZkRhdGFJbm5lcixcbiAgUmV0cmlldmVQcm9ncmFtMjAwUmVzcG9uc2UsXG59IGZyb20gJ3NyYy9hcGktY3ljbGlzdCdcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnc3JjL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCdcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnXG5pbXBvcnQgeyBMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICcuLi91dGlscy9sYW5ndWFnZS5zZXJ2aWNlJ1xuaW1wb3J0IHsgQWNjb3VudFNlcnZpY2UgfSBmcm9tICcuL2FjY291bnQuc2VydmljZSdcbmV4cG9ydCB0eXBlIGZhcUxvYWRpbmdTdGF0ZSA9XG4gIHwge1xuICAgICAgc3RhdGU6ICdsb2FkaW5nJ1xuICAgIH1cbiAgfCB7XG4gICAgICBzdGF0ZTogJ3N1Y2Nlc3MnXG4gICAgICBmYXE6IFJldHJpZXZlRmFxMjAwUmVzcG9uc2VBbGxPZkRhdGFJbm5lcltdXG4gICAgfVxuICB8IHtcbiAgICAgIHN0YXRlOiAnbm9fZGF0YSdcbiAgICB9XG4gIHwge1xuICAgICAgc3RhdGU6ICdlcnJvcidcbiAgICAgIGVycm9yOiBFcnJvclxuICAgIH1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFN1cHBvcnRTZXJ2aWNlIHtcbiAgZmFxU3RhdGUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGZhcUxvYWRpbmdTdGF0ZT4oe1xuICAgIHN0YXRlOiAnbG9hZGluZycsXG4gIH0pXG4gIHByb2dyYW06IFJldHJpZXZlUHJvZ3JhbTIwMFJlc3BvbnNlXG4gIGxhbmd1YWdlOiBzdHJpbmcgPSAnZnInXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3RvcmFnZTogU3RvcmFnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBmYXFTZXJ2aWNlOiBGQVFTZXJ2aWNlLFxuICAgIHByaXZhdGUgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhY2NvdW50U2VydmljZTogQWNjb3VudFNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5zdG9yYWdlLmdldCgncHJvZ3JhbScpLnRoZW4oKHByb2dyYW0pID0+IHtcbiAgICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW1cbiAgICB9KVxuICAgIGVmZmVjdCgoKSA9PiB7XG4gICAgICB0aGlzLmxhbmd1YWdlID0gdGhpcy5sYW5ndWFnZVNlcnZpY2UuY3VycmVudExhbmd1YWdlKClcbiAgICAgIC8vU2kgYydlc3QgcGFzIGxhIHByZW1pw6hyZSBmb2lzIHF1J29uIGFycml2ZSBzdXIgbGEgcGFnZSwgb24gcmVsb2FkIGxhIGZhcSBhdmVjIGxhIGJvbm5lIGxhbmd1ZS5cbiAgICAgIGlmICh0aGlzLmZhcVN0YXRlLnZhbHVlLnN0YXRlICE9PSAnbG9hZGluZycpIHtcbiAgICAgICAgdGhpcy5nZXRGYXEoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBnZXRGYXEoKSB7XG4gICAgdGhpcy5mYXFTdGF0ZS5uZXh0KHsgc3RhdGU6ICdsb2FkaW5nJyB9KVxuICAgIHRoaXMuZmFxU2VydmljZVxuICAgICAgLnJldHJpZXZlRmFxKHtcbiAgICAgICAgcHJvZ3JhbTogZW52aXJvbm1lbnQucHJvZ3JhbSxcbiAgICAgICAgbGFuZ3VhZ2U6IHRoaXMubGFuZ3VhZ2UsXG4gICAgICB9KVxuICAgICAgLnN1YnNjcmliZSh7XG4gICAgICAgIG5leHQ6IChyZXMpID0+IHtcbiAgICAgICAgICBpZiAocmVzLmRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuZmFxU3RhdGUubmV4dCh7IHN0YXRlOiAnc3VjY2VzcycsIGZhcTogcmVzLmRhdGEgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mYXFTdGF0ZS5uZXh0KHsgc3RhdGU6ICdub19kYXRhJyB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IChlcnIpID0+IHtcbiAgICAgICAgICB0aGlzLmZhcVN0YXRlLm5leHQoeyBzdGF0ZTogJ2Vycm9yJywgZXJyb3I6IGVyciB9KVxuICAgICAgICB9LFxuICAgICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBHw6luw6hyZSB1biBsaWVuIG1haWx0byBwb3VyIGNvbnRhY3RlciBsZSBzdXBwb3J0IGF2ZWMgbGVzIGluZm9ybWF0aW9ucyBkdSBjeWNsaXN0IHNpIGNvbm5lY3TDqVxuICAgKiBAcGFyYW0gbWVzc2FnZSBNZXNzYWdlIMOgIGluY2x1cmUgZGFucyBsZSBjb3JwcyBkZSBsJ2VtYWlsIChvcHRpb25uZWwpXG4gICAqIEByZXR1cm5zIExlIGxpZW4gbWFpbHRvIGNvbXBsZXRcbiAgICovXG4gIGdlbmVyYXRlU3VwcG9ydE1haWx0b0xpbmsobWVzc2FnZTogc3RyaW5nID0gJycpOiBzdHJpbmcge1xuICAgIGlmICghdGhpcy5wcm9ncmFtPy5jb25maWc/LmhvdGxpbmU/LmVtYWlsKSB7XG4gICAgICByZXR1cm4gJyMnXG4gICAgfVxuXG4gICAgY29uc3QgZW1haWwgPSB0aGlzLnByb2dyYW0uY29uZmlnLmhvdGxpbmUuZW1haWxcbiAgICBjb25zdCBzdWJqZWN0ID0gJ0RlbWFuZGUgU0FWJ1xuICAgIGxldCBib2R5ID0gbWVzc2FnZVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGN5Y2xpc3QgPSB0aGlzLmFjY291bnRTZXJ2aWNlLmdldEN1cnJlbnRDeWNsaXN0KClcbiAgICAgIC8vIFV0aWxpc2F0ZXVyIGNvbm5lY3TDqVxuICAgICAgYm9keSArPSBgJTBEJTBBJTBEJTBBLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSUwRCUwQSBNRVJDSSBERSBORSBQQVMgTU9ESUZJRVIgTEVTIElORk9STUFUSU9OUyBDSS1ERVNTT1VTICUwRCUwQSR7XG4gICAgICAgIGN5Y2xpc3QuaWRcbiAgICAgIH0lMEQlMEEke2N5Y2xpc3QubmFtZSB8fCAnJ30lMEQlMEEke2N5Y2xpc3QucGhvbmVfbnVtYmVyIHx8ICcnfSUwRCUwQSR7XG4gICAgICAgIHRoaXMucHJvZ3JhbT8uaWQgfHwgJydcbiAgICAgIH1gXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIFV0aWxpc2F0ZXVyIG5vbiBjb25uZWN0w6lcbiAgICAgIGJvZHkgKz0gYCUwRCUwQSUwRCUwQS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0lMEQlMEEgTUVSQ0kgREUgTkUgUEFTIE1PRElGSUVSIExFUyBJTkZPUk1BVElPTlMgQ0ktREVTU09VUyAlMEQlMEEgVXRpbGlzYXRldXIgbm9uIGVucmVnaXN0csOpYFxuICAgIH1cblxuICAgIHJldHVybiBgbWFpbHRvOiR7ZW1haWx9P3N1YmplY3Q9JHtzdWJqZWN0fSZib2R5PSR7Ym9keX1gXG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEJNLElBQU8sa0JBQVAsTUFBTyxnQkFBYztFQU16QixZQUNVLFNBQ0EsWUFDQSxpQkFDQSxnQkFBOEI7QUFIOUIsU0FBQSxVQUFBO0FBQ0EsU0FBQSxhQUFBO0FBQ0EsU0FBQSxrQkFBQTtBQUNBLFNBQUEsaUJBQUE7QUFUVixTQUFBLFdBQVcsSUFBSSxnQkFBaUM7TUFDOUMsT0FBTztLQUNSO0FBRUQsU0FBQSxXQUFtQjtBQU9qQixTQUFLLFFBQVEsSUFBSSxTQUFTLEVBQUUsS0FBSyxDQUFDLFlBQVc7QUFDM0MsV0FBSyxVQUFVO0lBQ2pCLENBQUM7QUFDRCxXQUFPLE1BQUs7QUFDVixXQUFLLFdBQVcsS0FBSyxnQkFBZ0IsZ0JBQWU7QUFFcEQsVUFBSSxLQUFLLFNBQVMsTUFBTSxVQUFVLFdBQVc7QUFDM0MsYUFBSyxPQUFNO01BQ2I7SUFDRixDQUFDO0VBQ0g7RUFFQSxTQUFNO0FBQ0osU0FBSyxTQUFTLEtBQUssRUFBRSxPQUFPLFVBQVMsQ0FBRTtBQUN2QyxTQUFLLFdBQ0YsWUFBWTtNQUNYLFNBQVMsWUFBWTtNQUNyQixVQUFVLEtBQUs7S0FDaEIsRUFDQSxVQUFVO01BQ1QsTUFBTSxDQUFDLFFBQU87QUFDWixZQUFJLElBQUksTUFBTTtBQUNaLGVBQUssU0FBUyxLQUFLLEVBQUUsT0FBTyxXQUFXLEtBQUssSUFBSSxLQUFJLENBQUU7UUFDeEQsT0FBTztBQUNMLGVBQUssU0FBUyxLQUFLLEVBQUUsT0FBTyxVQUFTLENBQUU7UUFDekM7TUFDRjtNQUNBLE9BQU8sQ0FBQyxRQUFPO0FBQ2IsYUFBSyxTQUFTLEtBQUssRUFBRSxPQUFPLFNBQVMsT0FBTyxJQUFHLENBQUU7TUFDbkQ7S0FDRDtFQUNMOzs7Ozs7RUFPQSwwQkFBMEIsVUFBa0IsSUFBRTtBQWhGaEQ7QUFpRkksUUFBSSxHQUFDLHNCQUFLLFlBQUwsbUJBQWMsV0FBZCxtQkFBc0IsWUFBdEIsbUJBQStCLFFBQU87QUFDekMsYUFBTztJQUNUO0FBRUEsVUFBTSxRQUFRLEtBQUssUUFBUSxPQUFPLFFBQVE7QUFDMUMsVUFBTSxVQUFVO0FBQ2hCLFFBQUksT0FBTztBQUVYLFFBQUk7QUFDRixZQUFNLFVBQVUsS0FBSyxlQUFlLGtCQUFpQjtBQUVyRCxjQUFRLDRIQUNOLFFBQVEsRUFDVixTQUFTLFFBQVEsUUFBUSxFQUFFLFNBQVMsUUFBUSxnQkFBZ0IsRUFBRSxXQUM1RCxVQUFLLFlBQUwsbUJBQWMsT0FBTSxFQUN0QjtJQUNGLFNBQVMsT0FBTztBQUVkLGNBQVE7SUFDVjtBQUVBLFdBQU8sVUFBVSxLQUFLLFlBQVksT0FBTyxTQUFTLElBQUk7RUFDeEQ7OzttQ0F6RVcsaUJBQWMsbUJBQUEsY0FBQSxHQUFBLG1CQUFBLFVBQUEsR0FBQSxtQkFBQSxlQUFBLEdBQUEsbUJBQUEsY0FBQSxDQUFBO0FBQUE7bUZBQWQsaUJBQWMsU0FBZCxnQkFBYyxXQUFBLFlBRmIsT0FBTSxDQUFBO0FBRWQsSUFBTyxpQkFBUDs7c0VBQU8sZ0JBQWMsQ0FBQTtVQUgxQjtXQUFXO01BQ1YsWUFBWTtLQUNiOzs7IiwKICAibmFtZXMiOiBbXQp9Cg==
