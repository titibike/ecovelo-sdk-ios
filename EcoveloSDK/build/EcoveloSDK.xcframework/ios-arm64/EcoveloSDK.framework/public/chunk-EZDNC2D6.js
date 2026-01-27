import {
  AuthService
} from "./chunk-WJQU3GMM.js";
import {
  PassesService
} from "./chunk-XK4I5MHM.js";
import {
  environment
} from "./chunk-FOJAXRYS.js";
import {
  BehaviorSubject,
  Injectable,
  effect,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-DGENMXJW.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// src/app/services/api-wrappers/nfc.service.ts
var _NfcService = class _NfcService {
  constructor(passesService, authService) {
    this.passesService = passesService;
    this.authService = authService;
    this.nfcState = new BehaviorSubject({
      state: "loading"
    });
    effect(() => {
      if (this.authService.authState().state === "SignedIn" && this.nfcState.value.state === "loading") {
        this.getPasses();
      } else if (this.authService.authState().state === "SignedOut") {
        this.resetState();
      }
    });
  }
  getPasses() {
    return __async(this, null, function* () {
      this.nfcState.next({ state: "loading" });
      this.passesService.listPass({
        program: environment.program
      }).subscribe((passes) => {
        if (passes.data) {
          if (passes.data.length === 0) {
            this.nfcState.next({ state: "noData" });
          } else {
            this.nfcState.next({ state: "loaded", passes });
          }
        }
      });
    });
  }
  associatePass(pass, model) {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        this.passesService.associatePass({
          program: environment.program,
          associatePassRequest: {
            model,
            uid: pass
          }
        }).subscribe((pass2) => {
          resolve(pass2);
        }, (error) => {
          reject(error);
        });
      });
    });
  }
  disassociatePass(pass) {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        this.passesService.disassociatePass({
          program: environment.program,
          id: pass
        }).subscribe((pass2) => {
          resolve(pass2);
        }, (error) => {
          reject(error);
        });
      });
    });
  }
  resetState() {
    this.nfcState.next({ state: "loading" });
  }
};
_NfcService.\u0275fac = function NfcService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NfcService)(\u0275\u0275inject(PassesService), \u0275\u0275inject(AuthService));
};
_NfcService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NfcService, factory: _NfcService.\u0275fac, providedIn: "root" });
var NfcService = _NfcService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NfcService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: PassesService }, { type: AuthService }], null);
})();

export {
  NfcService
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9zZXJ2aWNlcy9hcGktd3JhcHBlcnMvbmZjLnNlcnZpY2UudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGVmZmVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIGZvcmtKb2luIH0gZnJvbSAncnhqcydcbmltcG9ydCB7XG4gIExpc3RQYXNzMjAwUmVzcG9uc2UsXG4gIExpc3RQYXNzMjAwUmVzcG9uc2VBbGxPZkRhdGFJbm5lcixcbiAgUGFzc2VzU2VydmljZSxcbn0gZnJvbSAnc3JjL2FwaS1jeWNsaXN0J1xuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICdzcmMvZW52aXJvbm1lbnRzL2Vudmlyb25tZW50J1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9leHRlcm5hbC9hdXRoLnNlcnZpY2UnXG5cbmV4cG9ydCB0eXBlIE5mY1N0YXRlID1cbiAgfCB7XG4gICAgICBzdGF0ZTogJ2xvYWRpbmcnXG4gICAgfVxuICB8IHtcbiAgICAgIHN0YXRlOiAnbG9hZGVkJ1xuICAgICAgcGFzc2VzOiBMaXN0UGFzczIwMFJlc3BvbnNlXG4gICAgfVxuICB8IHtcbiAgICAgIHN0YXRlOiAnbm9EYXRhJ1xuICAgIH1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE5mY1NlcnZpY2Uge1xuICBuZmNTdGF0ZTogQmVoYXZpb3JTdWJqZWN0PE5mY1N0YXRlPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TmZjU3RhdGU+KHtcbiAgICBzdGF0ZTogJ2xvYWRpbmcnLFxuICB9KVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcGFzc2VzU2VydmljZTogUGFzc2VzU2VydmljZSxcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZVxuICApIHtcbiAgICBlZmZlY3QoKCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmF1dGhTdGF0ZSgpLnN0YXRlID09PSAnU2lnbmVkSW4nICYmXG4gICAgICAgIHRoaXMubmZjU3RhdGUudmFsdWUuc3RhdGUgPT09ICdsb2FkaW5nJ1xuICAgICAgKSB7XG4gICAgICAgIHRoaXMuZ2V0UGFzc2VzKClcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hdXRoU2VydmljZS5hdXRoU3RhdGUoKS5zdGF0ZSA9PT0gJ1NpZ25lZE91dCcpIHtcbiAgICAgICAgdGhpcy5yZXNldFN0YXRlKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgZ2V0UGFzc2VzKCkge1xuICAgIHRoaXMubmZjU3RhdGUubmV4dCh7IHN0YXRlOiAnbG9hZGluZycgfSlcbiAgICB0aGlzLnBhc3Nlc1NlcnZpY2VcbiAgICAgIC5saXN0UGFzcyh7XG4gICAgICAgIHByb2dyYW06IGVudmlyb25tZW50LnByb2dyYW0sXG4gICAgICB9KVxuICAgICAgLnN1YnNjcmliZSgocGFzc2VzKSA9PiB7XG4gICAgICAgIGlmIChwYXNzZXMuZGF0YSkge1xuICAgICAgICAgIGlmIChwYXNzZXMuZGF0YSEubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLm5mY1N0YXRlLm5leHQoeyBzdGF0ZTogJ25vRGF0YScgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5uZmNTdGF0ZS5uZXh0KHsgc3RhdGU6ICdsb2FkZWQnLCBwYXNzZXMgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH1cblxuICBhc3luYyBhc3NvY2lhdGVQYXNzKHBhc3M6IHN0cmluZywgbW9kZWw6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxMaXN0UGFzczIwMFJlc3BvbnNlQWxsT2ZEYXRhSW5uZXI+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMucGFzc2VzU2VydmljZVxuICAgICAgICAuYXNzb2NpYXRlUGFzcyh7XG4gICAgICAgICAgcHJvZ3JhbTogZW52aXJvbm1lbnQucHJvZ3JhbSxcbiAgICAgICAgICBhc3NvY2lhdGVQYXNzUmVxdWVzdDoge1xuICAgICAgICAgICAgbW9kZWwsXG4gICAgICAgICAgICB1aWQ6IHBhc3MsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAocGFzcykgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZShwYXNzKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICByZWplY3QoZXJyb3IpXG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIGRpc2Fzc29jaWF0ZVBhc3MocGFzczogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPExpc3RQYXNzMjAwUmVzcG9uc2VBbGxPZkRhdGFJbm5lcj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5wYXNzZXNTZXJ2aWNlXG4gICAgICAgIC5kaXNhc3NvY2lhdGVQYXNzKHtcbiAgICAgICAgICBwcm9ncmFtOiBlbnZpcm9ubWVudC5wcm9ncmFtLFxuICAgICAgICAgIGlkOiBwYXNzLFxuICAgICAgICB9KVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgIChwYXNzKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHBhc3MpXG4gICAgICAgICAgfSxcbiAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChlcnJvcilcbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgcmVzZXRTdGF0ZSgpIHtcbiAgICB0aGlzLm5mY1N0YXRlLm5leHQoeyBzdGF0ZTogJ2xvYWRpbmcnIH0pXG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5Qk0sSUFBTyxjQUFQLE1BQU8sWUFBVTtFQUtyQixZQUNVLGVBQ0EsYUFBd0I7QUFEeEIsU0FBQSxnQkFBQTtBQUNBLFNBQUEsY0FBQTtBQU5WLFNBQUEsV0FBc0MsSUFBSSxnQkFBMEI7TUFDbEUsT0FBTztLQUNSO0FBTUMsV0FBTyxNQUFLO0FBQ1YsVUFDRSxLQUFLLFlBQVksVUFBUyxFQUFHLFVBQVUsY0FDdkMsS0FBSyxTQUFTLE1BQU0sVUFBVSxXQUM5QjtBQUNBLGFBQUssVUFBUztNQUNoQixXQUFXLEtBQUssWUFBWSxVQUFTLEVBQUcsVUFBVSxhQUFhO0FBQzdELGFBQUssV0FBVTtNQUNqQjtJQUNGLENBQUM7RUFDSDtFQUVNLFlBQVM7O0FBQ2IsV0FBSyxTQUFTLEtBQUssRUFBRSxPQUFPLFVBQVMsQ0FBRTtBQUN2QyxXQUFLLGNBQ0YsU0FBUztRQUNSLFNBQVMsWUFBWTtPQUN0QixFQUNBLFVBQVUsQ0FBQyxXQUFVO0FBQ3BCLFlBQUksT0FBTyxNQUFNO0FBQ2YsY0FBSSxPQUFPLEtBQU0sV0FBVyxHQUFHO0FBQzdCLGlCQUFLLFNBQVMsS0FBSyxFQUFFLE9BQU8sU0FBUSxDQUFFO1VBQ3hDLE9BQU87QUFDTCxpQkFBSyxTQUFTLEtBQUssRUFBRSxPQUFPLFVBQVUsT0FBTSxDQUFFO1VBQ2hEO1FBQ0Y7TUFDRixDQUFDO0lBQ0w7O0VBRU0sY0FBYyxNQUFjLE9BQWE7O0FBQzdDLGFBQU8sSUFBSSxRQUEyQyxDQUFDLFNBQVMsV0FBVTtBQUN4RSxhQUFLLGNBQ0YsY0FBYztVQUNiLFNBQVMsWUFBWTtVQUNyQixzQkFBc0I7WUFDcEI7WUFDQSxLQUFLOztTQUVSLEVBQ0EsVUFDQyxDQUFDQSxVQUFRO0FBQ1Asa0JBQVFBLEtBQUk7UUFDZCxHQUNBLENBQUMsVUFBUztBQUNSLGlCQUFPLEtBQUs7UUFDZCxDQUFDO01BRVAsQ0FBQztJQUNIOztFQUVNLGlCQUFpQixNQUFZOztBQUNqQyxhQUFPLElBQUksUUFBMkMsQ0FBQyxTQUFTLFdBQVU7QUFDeEUsYUFBSyxjQUNGLGlCQUFpQjtVQUNoQixTQUFTLFlBQVk7VUFDckIsSUFBSTtTQUNMLEVBQ0EsVUFDQyxDQUFDQSxVQUFRO0FBQ1Asa0JBQVFBLEtBQUk7UUFDZCxHQUNBLENBQUMsVUFBUztBQUNSLGlCQUFPLEtBQUs7UUFDZCxDQUFDO01BRVAsQ0FBQztJQUNIOztFQUVBLGFBQVU7QUFDUixTQUFLLFNBQVMsS0FBSyxFQUFFLE9BQU8sVUFBUyxDQUFFO0VBQ3pDOzs7bUNBL0VXLGFBQVUsbUJBQUEsYUFBQSxHQUFBLG1CQUFBLFdBQUEsQ0FBQTtBQUFBOytFQUFWLGFBQVUsU0FBVixZQUFVLFdBQUEsWUFGVCxPQUFNLENBQUE7QUFFZCxJQUFPLGFBQVA7O3NFQUFPLFlBQVUsQ0FBQTtVQUh0QjtXQUFXO01BQ1YsWUFBWTtLQUNiOzs7IiwKICAibmFtZXMiOiBbInBhc3MiXQp9Cg==
