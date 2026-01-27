import {
  AccountService,
  RemisesService,
  TransactionsDeSoldeService
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
  Injectable,
  LoadingController,
  TranslateService,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-DGENMXJW.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// src/app/services/api-wrappers/wallet.service.ts
var _WalletService = class _WalletService {
  constructor(transactionService, remiseService, loadingController, toastService, accountService, translate) {
    this.transactionService = transactionService;
    this.remiseService = remiseService;
    this.loadingController = loadingController;
    this.toastService = toastService;
    this.accountService = accountService;
    this.translate = translate;
    this.walletState = new BehaviorSubject({
      state: "loading"
    });
  }
  getTransactions() {
    return __async(this, null, function* () {
      this.walletState.next({ state: "loading" });
      this.transactionService.listBalanceTransaction({
        program: environment.program,
        liveMode: environment.production,
        limit: 100
      }).subscribe({
        next: (response) => __async(this, null, function* () {
          if (!(response == null ? void 0 : response.data) || response.data.length === 0) {
            this.walletState.next({
              state: "no_data"
            });
            return;
          }
          this.walletState.next({
            state: "success",
            transactions: response.data
          });
        }),
        error: (error) => __async(this, null, function* () {
          console.error("Error fetching transactions:", error);
          this.walletState.next({
            state: "error",
            error
          });
        })
      });
    });
  }
  applyCodePromo(code) {
    return __async(this, null, function* () {
      if (!code.trim()) {
        this.toastService.createWithJustMessage(this.translate.instant("promo.errors.empty_code"), ToastType.Warning);
        return;
      }
      const loading = yield this.loadingController.create({
        message: this.translate.instant("promo.loading.applying"),
        spinner: "circular"
      });
      yield loading.present();
      const cyclist = this.accountService.cyclistState();
      if (cyclist.state !== "unknown" && cyclist.state !== "error") {
        this.remiseService.createRemise({
          program: environment.program,
          createRemiseRequest: {
            cyclist: cyclist.cyclist.id,
            reduction: code
          }
        }).subscribe({
          next: () => __async(this, null, function* () {
            yield loading.dismiss();
            this.toastService.createWithJustMessage(this.translate.instant("promo.success.applied"), ToastType.Success);
            this.walletState.next({ state: "loading" });
          }),
          error: (error) => __async(this, null, function* () {
            console.error("Error applying promo code:", error);
            yield loading.dismiss();
            this.toastService.createWithJustMessage(this.translate.instant("promo.errors.invalid"), ToastType.Error);
          })
        });
      }
    });
  }
};
_WalletService.\u0275fac = function WalletService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _WalletService)(\u0275\u0275inject(TransactionsDeSoldeService), \u0275\u0275inject(RemisesService), \u0275\u0275inject(LoadingController), \u0275\u0275inject(ToastService), \u0275\u0275inject(AccountService), \u0275\u0275inject(TranslateService));
};
_WalletService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WalletService, factory: _WalletService.\u0275fac, providedIn: "root" });
var WalletService = _WalletService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WalletService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: TransactionsDeSoldeService }, { type: RemisesService }, { type: LoadingController }, { type: ToastService }, { type: AccountService }, { type: TranslateService }], null);
})();

export {
  WalletService
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9zZXJ2aWNlcy9hcGktd3JhcHBlcnMvd2FsbGV0LnNlcnZpY2UudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcydcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnc3JjL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCdcbmltcG9ydCB7IFJlbWlzZXNTZXJ2aWNlLCBUcmFuc2FjdGlvbnNEZVNvbGRlU2VydmljZSB9IGZyb20gJ3NyYy9hcGktY3ljbGlzdCdcbmltcG9ydCB7IExpc3RCYWxhbmNlVHJhbnNhY3Rpb24yMDBSZXNwb25zZUFsbE9mRGF0YUlubmVyIH0gZnJvbSAnc3JjL2FwaS1jeWNsaXN0J1xuaW1wb3J0IHsgTG9hZGluZ0NvbnRyb2xsZXIgfSBmcm9tICdAaW9uaWMvYW5ndWxhci9zdGFuZGFsb25lJ1xuaW1wb3J0IHsgVG9hc3RTZXJ2aWNlLCBUb2FzdFR5cGUgfSBmcm9tICcuLi91dGlscy90b2FzdC5zZXJ2aWNlJ1xuaW1wb3J0IHsgQWNjb3VudFNlcnZpY2UsIGN5Y2xpc3RTdGF0ZSB9IGZyb20gJy4vYWNjb3VudC5zZXJ2aWNlJ1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnXG5cbmV4cG9ydCB0eXBlIHdhbGxldFRyYW5zYWN0aW9uc1N0YXRlID1cbiAgfCB7IHN0YXRlOiAnbG9hZGluZycgfVxuICB8IHsgc3RhdGU6ICdub19kYXRhJyB9XG4gIHwge1xuICAgICAgc3RhdGU6ICdzdWNjZXNzJ1xuICAgICAgdHJhbnNhY3Rpb25zOiBMaXN0QmFsYW5jZVRyYW5zYWN0aW9uMjAwUmVzcG9uc2VBbGxPZkRhdGFJbm5lcltdXG4gICAgfVxuICB8IHsgc3RhdGU6ICdlcnJvcic7IGVycm9yOiBFcnJvciB9XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBXYWxsZXRTZXJ2aWNlIHtcbiAgd2FsbGV0U3RhdGUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHdhbGxldFRyYW5zYWN0aW9uc1N0YXRlPih7XG4gICAgc3RhdGU6ICdsb2FkaW5nJyxcbiAgfSlcbiAgY3ljbGlzdFN0YXRlOiBjeWNsaXN0U3RhdGVcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRyYW5zYWN0aW9uU2VydmljZTogVHJhbnNhY3Rpb25zRGVTb2xkZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZW1pc2VTZXJ2aWNlOiBSZW1pc2VzU2VydmljZSxcbiAgICBwcml2YXRlIGxvYWRpbmdDb250cm9sbGVyOiBMb2FkaW5nQ29udHJvbGxlcixcbiAgICBwcml2YXRlIHRvYXN0U2VydmljZTogVG9hc3RTZXJ2aWNlLFxuICAgIHByaXZhdGUgYWNjb3VudFNlcnZpY2U6IEFjY291bnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlXG4gICkge31cblxuICBhc3luYyBnZXRUcmFuc2FjdGlvbnMoKSB7XG4gICAgdGhpcy53YWxsZXRTdGF0ZS5uZXh0KHsgc3RhdGU6ICdsb2FkaW5nJyB9KVxuICAgIHRoaXMudHJhbnNhY3Rpb25TZXJ2aWNlXG4gICAgICAubGlzdEJhbGFuY2VUcmFuc2FjdGlvbih7XG4gICAgICAgIHByb2dyYW06IGVudmlyb25tZW50LnByb2dyYW0sXG4gICAgICAgIGxpdmVNb2RlOiBlbnZpcm9ubWVudC5wcm9kdWN0aW9uLFxuICAgICAgICBsaW1pdDogMTAwLFxuICAgICAgfSlcbiAgICAgIC5zdWJzY3JpYmUoe1xuICAgICAgICBuZXh0OiBhc3luYyAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBpZiAoIXJlc3BvbnNlPy5kYXRhIHx8IHJlc3BvbnNlLmRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLndhbGxldFN0YXRlLm5leHQoe1xuICAgICAgICAgICAgICBzdGF0ZTogJ25vX2RhdGEnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMud2FsbGV0U3RhdGUubmV4dCh7XG4gICAgICAgICAgICBzdGF0ZTogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgdHJhbnNhY3Rpb25zOiByZXNwb25zZS5kYXRhLFxuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBhc3luYyAoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB0cmFuc2FjdGlvbnM6JywgZXJyb3IpXG4gICAgICAgICAgdGhpcy53YWxsZXRTdGF0ZS5uZXh0KHtcbiAgICAgICAgICAgIHN0YXRlOiAnZXJyb3InLFxuICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gIH1cblxuICBhc3luYyBhcHBseUNvZGVQcm9tbyhjb2RlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoIWNvZGUudHJpbSgpKSB7XG4gICAgICB0aGlzLnRvYXN0U2VydmljZS5jcmVhdGVXaXRoSnVzdE1lc3NhZ2UoXG4gICAgICAgIHRoaXMudHJhbnNsYXRlLmluc3RhbnQoJ3Byb21vLmVycm9ycy5lbXB0eV9jb2RlJyksXG4gICAgICAgIFRvYXN0VHlwZS5XYXJuaW5nXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBsb2FkaW5nID0gYXdhaXQgdGhpcy5sb2FkaW5nQ29udHJvbGxlci5jcmVhdGUoe1xuICAgICAgbWVzc2FnZTogdGhpcy50cmFuc2xhdGUuaW5zdGFudCgncHJvbW8ubG9hZGluZy5hcHBseWluZycpLFxuICAgICAgc3Bpbm5lcjogJ2NpcmN1bGFyJyxcbiAgICB9KVxuICAgIGF3YWl0IGxvYWRpbmcucHJlc2VudCgpXG4gICAgY29uc3QgY3ljbGlzdCA9IHRoaXMuYWNjb3VudFNlcnZpY2UuY3ljbGlzdFN0YXRlKClcbiAgICBpZiAoY3ljbGlzdC5zdGF0ZSAhPT0gJ3Vua25vd24nICYmIGN5Y2xpc3Quc3RhdGUgIT09ICdlcnJvcicpIHtcbiAgICAgIHRoaXMucmVtaXNlU2VydmljZVxuICAgICAgICAuY3JlYXRlUmVtaXNlKHtcbiAgICAgICAgICBwcm9ncmFtOiBlbnZpcm9ubWVudC5wcm9ncmFtLFxuICAgICAgICAgIGNyZWF0ZVJlbWlzZVJlcXVlc3Q6IHtcbiAgICAgICAgICAgIGN5Y2xpc3Q6IGN5Y2xpc3QuY3ljbGlzdC5pZCEsXG4gICAgICAgICAgICByZWR1Y3Rpb246IGNvZGUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICAgLnN1YnNjcmliZSh7XG4gICAgICAgICAgbmV4dDogYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgYXdhaXQgbG9hZGluZy5kaXNtaXNzKClcbiAgICAgICAgICAgIHRoaXMudG9hc3RTZXJ2aWNlLmNyZWF0ZVdpdGhKdXN0TWVzc2FnZShcbiAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGUuaW5zdGFudCgncHJvbW8uc3VjY2Vzcy5hcHBsaWVkJyksXG4gICAgICAgICAgICAgIFRvYXN0VHlwZS5TdWNjZXNzXG4gICAgICAgICAgICApXG4gICAgICAgICAgICB0aGlzLndhbGxldFN0YXRlLm5leHQoeyBzdGF0ZTogJ2xvYWRpbmcnIH0pXG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnJvcjogYXN5bmMgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBhcHBseWluZyBwcm9tbyBjb2RlOicsIGVycm9yKVxuICAgICAgICAgICAgYXdhaXQgbG9hZGluZy5kaXNtaXNzKClcbiAgICAgICAgICAgIHRoaXMudG9hc3RTZXJ2aWNlLmNyZWF0ZVdpdGhKdXN0TWVzc2FnZShcbiAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGUuaW5zdGFudCgncHJvbW8uZXJyb3JzLmludmFsaWQnKSxcbiAgICAgICAgICAgICAgVG9hc3RUeXBlLkVycm9yXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICB9XG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JNLElBQU8saUJBQVAsTUFBTyxlQUFhO0VBTXhCLFlBQ1Usb0JBQ0EsZUFDQSxtQkFDQSxjQUNBLGdCQUNBLFdBQTJCO0FBTDNCLFNBQUEscUJBQUE7QUFDQSxTQUFBLGdCQUFBO0FBQ0EsU0FBQSxvQkFBQTtBQUNBLFNBQUEsZUFBQTtBQUNBLFNBQUEsaUJBQUE7QUFDQSxTQUFBLFlBQUE7QUFYVixTQUFBLGNBQWMsSUFBSSxnQkFBeUM7TUFDekQsT0FBTztLQUNSO0VBVUU7RUFFRyxrQkFBZTs7QUFDbkIsV0FBSyxZQUFZLEtBQUssRUFBRSxPQUFPLFVBQVMsQ0FBRTtBQUMxQyxXQUFLLG1CQUNGLHVCQUF1QjtRQUN0QixTQUFTLFlBQVk7UUFDckIsVUFBVSxZQUFZO1FBQ3RCLE9BQU87T0FDUixFQUNBLFVBQVU7UUFDVCxNQUFNLENBQU8sYUFBWTtBQUN2QixjQUFJLEVBQUMscUNBQVUsU0FBUSxTQUFTLEtBQUssV0FBVyxHQUFHO0FBQ2pELGlCQUFLLFlBQVksS0FBSztjQUNwQixPQUFPO2FBQ1I7QUFDRDtVQUNGO0FBRUEsZUFBSyxZQUFZLEtBQUs7WUFDcEIsT0FBTztZQUNQLGNBQWMsU0FBUztXQUN4QjtRQUNIO1FBQ0EsT0FBTyxDQUFPLFVBQVM7QUFDckIsa0JBQVEsTUFBTSxnQ0FBZ0MsS0FBSztBQUNuRCxlQUFLLFlBQVksS0FBSztZQUNwQixPQUFPO1lBQ1A7V0FDRDtRQUNIO09BQ0Q7SUFDTDs7RUFFTSxlQUFlLE1BQVk7O0FBQy9CLFVBQUksQ0FBQyxLQUFLLEtBQUksR0FBSTtBQUNoQixhQUFLLGFBQWEsc0JBQ2hCLEtBQUssVUFBVSxRQUFRLHlCQUF5QixHQUNoRCxVQUFVLE9BQU87QUFFbkI7TUFDRjtBQUVBLFlBQU0sVUFBVSxNQUFNLEtBQUssa0JBQWtCLE9BQU87UUFDbEQsU0FBUyxLQUFLLFVBQVUsUUFBUSx3QkFBd0I7UUFDeEQsU0FBUztPQUNWO0FBQ0QsWUFBTSxRQUFRLFFBQU87QUFDckIsWUFBTSxVQUFVLEtBQUssZUFBZSxhQUFZO0FBQ2hELFVBQUksUUFBUSxVQUFVLGFBQWEsUUFBUSxVQUFVLFNBQVM7QUFDNUQsYUFBSyxjQUNGLGFBQWE7VUFDWixTQUFTLFlBQVk7VUFDckIscUJBQXFCO1lBQ25CLFNBQVMsUUFBUSxRQUFRO1lBQ3pCLFdBQVc7O1NBRWQsRUFDQSxVQUFVO1VBQ1QsTUFBTSxNQUFXO0FBQ2Ysa0JBQU0sUUFBUSxRQUFPO0FBQ3JCLGlCQUFLLGFBQWEsc0JBQ2hCLEtBQUssVUFBVSxRQUFRLHVCQUF1QixHQUM5QyxVQUFVLE9BQU87QUFFbkIsaUJBQUssWUFBWSxLQUFLLEVBQUUsT0FBTyxVQUFTLENBQUU7VUFDNUM7VUFDQSxPQUFPLENBQU8sVUFBUztBQUNyQixvQkFBUSxNQUFNLDhCQUE4QixLQUFLO0FBQ2pELGtCQUFNLFFBQVEsUUFBTztBQUNyQixpQkFBSyxhQUFhLHNCQUNoQixLQUFLLFVBQVUsUUFBUSxzQkFBc0IsR0FDN0MsVUFBVSxLQUFLO1VBRW5CO1NBQ0Q7TUFDTDtJQUNGOzs7O21DQTFGVyxnQkFBYSxtQkFBQSwwQkFBQSxHQUFBLG1CQUFBLGNBQUEsR0FBQSxtQkFBQSxpQkFBQSxHQUFBLG1CQUFBLFlBQUEsR0FBQSxtQkFBQSxjQUFBLEdBQUEsbUJBQUEsZ0JBQUEsQ0FBQTtBQUFBO2tGQUFiLGdCQUFhLFNBQWIsZUFBYSxXQUFBLFlBRlosT0FBTSxDQUFBO0FBRWQsSUFBTyxnQkFBUDs7c0VBQU8sZUFBYSxDQUFBO1VBSHpCO1dBQVc7TUFDVixZQUFZO0tBQ2I7OzsiLAogICJuYW1lcyI6IFtdCn0K
