import {
  AlertController,
  LoadingController
} from "./chunk-Y4K6NO5T.js";
import {
  AuthService,
  ForfaitsWrapperService
} from "./chunk-WJQU3GMM.js";
import {
  AbonnementsService,
  AccountService,
  SubscriptionProcessService
} from "./chunk-XK4I5MHM.js";
import {
  environment
} from "./chunk-FOJAXRYS.js";
import {
  ErrorHandlerService,
  ToastService,
  ToastType
} from "./chunk-SARQRLZR.js";
import {
  Injectable,
  Router,
  TranslateService,
  effect,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-DGENMXJW.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// src/app/services/api-wrappers/abonnement.service.ts
var _AbonnementWrapperService = class _AbonnementWrapperService {
  constructor(abonnementsService, alertController, loadingCtrl, translate, forfaitsService, toastService, SubscriptionProcessService2, router, authService, accountService, errorHandler) {
    this.abonnementsService = abonnementsService;
    this.alertController = alertController;
    this.loadingCtrl = loadingCtrl;
    this.translate = translate;
    this.forfaitsService = forfaitsService;
    this.toastService = toastService;
    this.SubscriptionProcessService = SubscriptionProcessService2;
    this.router = router;
    this.authService = authService;
    this.accountService = accountService;
    this.errorHandler = errorHandler;
    this.listAbonnementsState = signal({
      state: "loading"
    });
    this.currentAbonnementState = signal({
      state: "unknown"
    });
    this.authState = { state: "SignedOut" };
    this.forfaitsService.getDefaultForfait().then((forfait) => {
      this.defaultForfait = forfait;
    });
    effect(() => {
      this.authState = this.authService.authState();
      if (this.authState.state === "SignedIn" && this.listAbonnementsState().state === "loading") {
        this.getAbonnements();
      } else if (this.authState.state === "SignedOut") {
        this.resetState();
      }
    });
  }
  getAbonnements() {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        this.abonnementsService.listAbonnement({
          program: environment.program,
          limit: 100,
          expand: ["forfait.plan"]
        }).subscribe({
          next: (res) => {
            this.checkAbonnements(res.data);
            resolve(res);
          },
          error: (error) => {
            this.errorHandler.handleError(error);
            this.listAbonnementsState.set({ state: "error", error });
            reject(error);
          }
        });
      });
    });
  }
  createAbonnement(params) {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        this.abonnementsService.createAbonnement({
          program: environment.program,
          createAbonnementRequest: {
            forfait: params.forfaitID,
            supporting_documents: params.supporting_documents,
            reduction: params.reduction
          }
        }).subscribe({
          next: (abonnement) => __async(this, null, function* () {
            yield this.getAbonnements();
            yield this.SubscriptionProcessService.clearProcess();
            yield this.router.navigate(["/abo-congrats"]);
            resolve(abonnement);
          }),
          error: (error) => {
            this.errorHandler.handleError(error);
            reject(error);
          }
        });
      });
    });
  }
  checkAbonnements(abonnements) {
    return __async(this, null, function* () {
      const defaultForfait = yield this.forfaitsService.getDefaultForfait();
      if (!abonnements || abonnements.length === 0) {
        this.listAbonnementsState.set({ state: "no_data" });
        defaultForfait ? this.currentAbonnementState.set({
          state: "default",
          forfait: defaultForfait
        }) : this.currentAbonnementState.set({ state: "unknown" });
        return;
      }
      this.listAbonnementsState.set({ state: "success", abonnements });
      const currentAbonnement = abonnements.find((ab) => ab.status === "active" || ab.status === "waiting_validation" || ab.status === "past_due" || ab.status === "incomplete" || ab.status === "unpaid" || ab.status === "deletion_requested");
      if (!currentAbonnement) {
        this.currentAbonnementState.set({
          state: "default",
          forfait: defaultForfait
        });
        return;
      }
      if (currentAbonnement.can_rent === false) {
        this.accountService.addBlockedReason("Subscription does not allow renting");
      } else {
        if (this.accountService.hasBlockedReason("Subscription does not allow renting")) {
          this.accountService.removeBlockedReason("Subscription does not allow renting");
        }
      }
      switch (currentAbonnement == null ? void 0 : currentAbonnement.status) {
        case "active":
          this.currentAbonnementState.set({
            state: "active",
            abonnement: currentAbonnement
          });
          break;
        case "waiting_validation":
          this.currentAbonnementState.set({
            state: "waiting_validation",
            abonnement: currentAbonnement
          });
          break;
        case "incomplete":
          this.currentAbonnementState.set({
            state: "incomplete",
            abonnement: currentAbonnement
          });
          break;
        case "unpaid":
          this.currentAbonnementState.set({
            state: "unpaid",
            abonnement: currentAbonnement
          });
          break;
        case "past_due":
          this.currentAbonnementState.set({
            state: "past_due",
            abonnement: currentAbonnement
          });
          break;
        case "deletion_requested":
          this.currentAbonnementState.set({
            state: "deletion_requested",
            abonnement: currentAbonnement
          });
          break;
      }
    });
  }
  requestDeletion() {
    return __async(this, null, function* () {
      const alert = yield this.alertController.create({
        header: this.translate.instant("subscription.deletion.confirm.title"),
        message: this.translate.instant("subscription.deletion.confirm.message"),
        buttons: [
          {
            text: this.translate.instant("subscription.deletion.confirm.cancel"),
            role: "cancel"
          },
          {
            text: this.translate.instant("subscription.deletion.confirm.confirm"),
            handler: () => __async(this, null, function* () {
              yield this.deleteAbonnement();
            })
          }
        ]
      });
      yield alert.present();
    });
  }
  deleteAbonnement() {
    return __async(this, null, function* () {
      const loading = yield this.loadingCtrl.create({
        message: this.translate.instant("subscription.deletion.loading")
      });
      yield loading.present();
      const currentAbonnement = this.currentAbonnementState();
      if (currentAbonnement.state === "unknown" || currentAbonnement.state === "default") {
        yield this.toastService.createWithJustMessage(this.translate.instant("subscription.deletion.no_active"), ToastType.Error);
        return;
      } else if (currentAbonnement.state === "deletion_requested") {
        yield this.toastService.createWithJustMessage(this.translate.instant("subscription.deletion.already_requested"), ToastType.Error);
        return;
      } else {
        this.abonnementsService.deleteAbonnement({
          program: environment.program,
          id: currentAbonnement.abonnement.id
        }).subscribe({
          next: () => __async(this, null, function* () {
            this.toastService.createWithJustMessage(this.translate.instant("subscription.deletion.success"), ToastType.Success);
            this.accountService.removeBlockedReason("Subscription does not allow renting");
            this.getAbonnements();
            yield loading.dismiss();
          }),
          error: (error) => __async(this, null, function* () {
            this.errorHandler.handleError(error);
            yield loading.dismiss();
          })
        });
      }
    });
  }
  getDaysUntilExpiration(abonnement) {
    if (!abonnement.cancel_at)
      return null;
    const now = Date.now();
    const expirationDate = abonnement.cancel_at * 1e3;
    return Math.floor((expirationDate - now) / (1e3 * 60 * 60 * 24));
  }
  shouldShowExpirationWarning(abonnement) {
    var _a, _b;
    if (!((_b = (_a = abonnement.forfait) == null ? void 0 : _a.plan) == null ? void 0 : _b.interval))
      return false;
    const daysUntilExpiration = this.getDaysUntilExpiration(abonnement);
    if (daysUntilExpiration === null)
      return false;
    switch (abonnement.forfait.plan.interval) {
      case "week":
        return daysUntilExpiration <= 2;
      case "month":
        return daysUntilExpiration <= 5;
      case "year":
        return daysUntilExpiration <= 14;
      default:
        return false;
    }
  }
  resetState() {
    this.listAbonnementsState.set({ state: "loading" });
    this.currentAbonnementState.set({ state: "unknown" });
  }
};
_AbonnementWrapperService.\u0275fac = function AbonnementWrapperService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AbonnementWrapperService)(\u0275\u0275inject(AbonnementsService), \u0275\u0275inject(AlertController), \u0275\u0275inject(LoadingController), \u0275\u0275inject(TranslateService), \u0275\u0275inject(ForfaitsWrapperService), \u0275\u0275inject(ToastService), \u0275\u0275inject(SubscriptionProcessService), \u0275\u0275inject(Router), \u0275\u0275inject(AuthService), \u0275\u0275inject(AccountService), \u0275\u0275inject(ErrorHandlerService));
};
_AbonnementWrapperService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AbonnementWrapperService, factory: _AbonnementWrapperService.\u0275fac, providedIn: "root" });
var AbonnementWrapperService = _AbonnementWrapperService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbonnementWrapperService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: AbonnementsService }, { type: AlertController }, { type: LoadingController }, { type: TranslateService }, { type: ForfaitsWrapperService }, { type: ToastService }, { type: SubscriptionProcessService }, { type: Router }, { type: AuthService }, { type: AccountService }, { type: ErrorHandlerService }], null);
})();

export {
  AbonnementWrapperService
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9zZXJ2aWNlcy9hcGktd3JhcHBlcnMvYWJvbm5lbWVudC5zZXJ2aWNlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBJbmplY3RhYmxlLCBzaWduYWwsIFdyaXRhYmxlU2lnbmFsLCBlZmZlY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHtcbiAgQWJvbm5lbWVudHNTZXJ2aWNlLFxuICBMaXN0QWJvbm5lbWVudDIwMFJlc3BvbnNlQWxsT2ZEYXRhSW5uZXIsXG4gIExpc3RGb3JmYWl0MjAwUmVzcG9uc2VBbGxPZkRhdGFJbm5lcixcbn0gZnJvbSAnc3JjL2FwaS1jeWNsaXN0J1xuXG4vLyBUeXBlIHBlcnNvbm5hbGlzw6kgcG91ciBmb3JjZXIgZm9yZmFpdCBlbiB0YW50IHF1J2FueVxudHlwZSBBYm9ubmVtZW50V2l0aEFueUZvcmZhaXQgPSBPbWl0PFxuICBMaXN0QWJvbm5lbWVudDIwMFJlc3BvbnNlQWxsT2ZEYXRhSW5uZXIsXG4gICdmb3JmYWl0J1xuPiAmIHtcbiAgZm9yZmFpdD86IGFueVxufVxuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICdzcmMvZW52aXJvbm1lbnRzL2Vudmlyb25tZW50J1xuaW1wb3J0IHsgQWxlcnRDb250cm9sbGVyLCBMb2FkaW5nQ29udHJvbGxlciB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJ1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnXG5pbXBvcnQgeyBGb3JmYWl0c1dyYXBwZXJTZXJ2aWNlIH0gZnJvbSAnLi9mb3JmYWl0cy5zZXJ2aWNlJ1xuaW1wb3J0IHsgVG9hc3RTZXJ2aWNlLCBUb2FzdFR5cGUgfSBmcm9tICcuLi91dGlscy90b2FzdC5zZXJ2aWNlJ1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uUHJvY2Vzc1NlcnZpY2UgfSBmcm9tICcuLi91dGlscy9zdWJzY3JpcHRpb24tcHJvY2Vzcy5zZXJ2aWNlJ1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UsIEF1dGhTdGF0ZSB9IGZyb20gJy4uL2V4dGVybmFsL2F1dGguc2VydmljZSdcbmltcG9ydCB7IEFjY291bnRTZXJ2aWNlIH0gZnJvbSAnLi9hY2NvdW50LnNlcnZpY2UnXG5pbXBvcnQgeyBMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICcuLi91dGlscy9sYW5ndWFnZS5zZXJ2aWNlJ1xuaW1wb3J0IHsgRXJyb3JIYW5kbGVyU2VydmljZSB9IGZyb20gJy4uL3V0aWxzL2Vycm9yLWhhbmRsZXIuc2VydmljZSdcblxuZXhwb3J0IHR5cGUgQWJvbm5lbWVudHNTdGF0ZSA9XG4gIHwgeyBzdGF0ZTogJ2xvYWRpbmcnIH1cbiAgfCB7XG4gICAgICBzdGF0ZTogJ25vX2RhdGEnXG4gICAgfVxuICB8IHtcbiAgICAgIHN0YXRlOiAnc3VjY2VzcydcbiAgICAgIGFib25uZW1lbnRzOiBMaXN0QWJvbm5lbWVudDIwMFJlc3BvbnNlQWxsT2ZEYXRhSW5uZXJbXVxuICAgIH1cbiAgfCB7XG4gICAgICBzdGF0ZTogJ2Vycm9yJ1xuICAgICAgZXJyb3I6IEVycm9yXG4gICAgfVxuXG4vL0plIG5lIHNww6ljaWZpZSBwYXMgdG91dCBsZXMgc3RhdHVzIGQnYWJvbm5lbWVudHMsIHNldWxlbWVudCBjZXV4IHF1aSBtJ2ludMOpcmVzc2VudCBwb3VyIGxlIFwiY3VycmVudFwiXG5leHBvcnQgdHlwZSBDdXJyZW50QWJvbm5lbWVudFN0YXRlID1cbiAgfCB7IHN0YXRlOiAndW5rbm93bicgfVxuICB8IHsgc3RhdGU6ICdkZWZhdWx0JzsgZm9yZmFpdDogTGlzdEZvcmZhaXQyMDBSZXNwb25zZUFsbE9mRGF0YUlubmVyIH1cbiAgfCB7XG4gICAgICBzdGF0ZTogJ2FjdGl2ZSdcbiAgICAgIGFib25uZW1lbnQ6IEFib25uZW1lbnRXaXRoQW55Rm9yZmFpdFxuICAgIH1cbiAgfCB7XG4gICAgICBzdGF0ZTogJ3dhaXRpbmdfdmFsaWRhdGlvbidcbiAgICAgIGFib25uZW1lbnQ6IEFib25uZW1lbnRXaXRoQW55Rm9yZmFpdFxuICAgIH1cbiAgfCB7XG4gICAgICBzdGF0ZTogJ2luY29tcGxldGUnXG4gICAgICBhYm9ubmVtZW50OiBBYm9ubmVtZW50V2l0aEFueUZvcmZhaXRcbiAgICB9XG4gIHwge1xuICAgICAgc3RhdGU6ICdkZWxldGlvbl9yZXF1ZXN0ZWQnXG4gICAgICBhYm9ubmVtZW50OiBBYm9ubmVtZW50V2l0aEFueUZvcmZhaXRcbiAgICB9XG4gIHwge1xuICAgICAgc3RhdGU6ICd1bnBhaWQnXG4gICAgICBhYm9ubmVtZW50OiBBYm9ubmVtZW50V2l0aEFueUZvcmZhaXRcbiAgICB9XG4gIHwge1xuICAgICAgc3RhdGU6ICdwYXN0X2R1ZSdcbiAgICAgIGFib25uZW1lbnQ6IEFib25uZW1lbnRXaXRoQW55Rm9yZmFpdFxuICAgIH1cbiAgfCB7XG4gICAgICBzdGF0ZTogJ2RlbGV0aW9uX3JlcXVlc3RlZCdcbiAgICAgIGFib25uZW1lbnQ6IEFib25uZW1lbnRXaXRoQW55Rm9yZmFpdFxuICAgIH1cblxuZXhwb3J0IHR5cGUgQWJvbm5lbWVudEl0ZW1TdGF0ZSA9IHtcbiAgc3RhdGU6XG4gICAgfCAnbm9fYWJvJ1xuICAgIHwgJ2FjdGl2ZSdcbiAgICB8ICdleHBpcmVfc29vbidcbiAgICB8ICdyZWN1cnJpbmcnXG4gICAgfCAnd2FpdGluZ192YWxpZGF0aW9uJ1xuICAgIHwgJ3Bhc3RfZHVlJ1xuICAgIHwgJ2RlbGV0aW9uX3JlcXVlc3RlZCdcbiAgICB8ICd1bnBhaWQnXG4gIG1lc3NhZ2U6IHN0cmluZ1xuICBjb2xvcj86IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENyZWF0ZUFib25uZW1lbnRQYXJhbXMge1xuICBmb3JmYWl0SUQ6IHN0cmluZ1xuICBzdXBwb3J0aW5nX2RvY3VtZW50cz86IGFueVxuICByZWR1Y3Rpb24/OiBzdHJpbmdcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEFib25uZW1lbnRXcmFwcGVyU2VydmljZSB7XG4gIHB1YmxpYyBsaXN0QWJvbm5lbWVudHNTdGF0ZTogV3JpdGFibGVTaWduYWw8QWJvbm5lbWVudHNTdGF0ZT4gPSBzaWduYWwoe1xuICAgIHN0YXRlOiAnbG9hZGluZycsXG4gIH0pXG4gIHB1YmxpYyBjdXJyZW50QWJvbm5lbWVudFN0YXRlID0gc2lnbmFsPEN1cnJlbnRBYm9ubmVtZW50U3RhdGU+KHtcbiAgICBzdGF0ZTogJ3Vua25vd24nLFxuICB9KVxuICBhdXRoU3RhdGU6IEF1dGhTdGF0ZSA9IHsgc3RhdGU6ICdTaWduZWRPdXQnIH1cbiAgZGVmYXVsdEZvcmZhaXQ6IExpc3RGb3JmYWl0MjAwUmVzcG9uc2VBbGxPZkRhdGFJbm5lciB8IHVuZGVmaW5lZFxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWJvbm5lbWVudHNTZXJ2aWNlOiBBYm9ubmVtZW50c1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBhbGVydENvbnRyb2xsZXI6IEFsZXJ0Q29udHJvbGxlcixcbiAgICBwcml2YXRlIGxvYWRpbmdDdHJsOiBMb2FkaW5nQ29udHJvbGxlcixcbiAgICBwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSxcbiAgICBwcml2YXRlIGZvcmZhaXRzU2VydmljZTogRm9yZmFpdHNXcmFwcGVyU2VydmljZSxcbiAgICBwcml2YXRlIHRvYXN0U2VydmljZTogVG9hc3RTZXJ2aWNlLFxuICAgIHByaXZhdGUgU3Vic2NyaXB0aW9uUHJvY2Vzc1NlcnZpY2U6IFN1YnNjcmlwdGlvblByb2Nlc3NTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhY2NvdW50U2VydmljZTogQWNjb3VudFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBlcnJvckhhbmRsZXI6IEVycm9ySGFuZGxlclNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5mb3JmYWl0c1NlcnZpY2UuZ2V0RGVmYXVsdEZvcmZhaXQoKS50aGVuKChmb3JmYWl0KSA9PiB7XG4gICAgICB0aGlzLmRlZmF1bHRGb3JmYWl0ID0gZm9yZmFpdFxuICAgIH0pXG4gICAgZWZmZWN0KCgpID0+IHtcbiAgICAgIHRoaXMuYXV0aFN0YXRlID0gdGhpcy5hdXRoU2VydmljZS5hdXRoU3RhdGUoKVxuICAgICAgaWYgKFxuICAgICAgICB0aGlzLmF1dGhTdGF0ZS5zdGF0ZSA9PT0gJ1NpZ25lZEluJyAmJlxuICAgICAgICB0aGlzLmxpc3RBYm9ubmVtZW50c1N0YXRlKCkuc3RhdGUgPT09ICdsb2FkaW5nJ1xuICAgICAgKSB7XG4gICAgICAgIHRoaXMuZ2V0QWJvbm5lbWVudHMoKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmF1dGhTdGF0ZS5zdGF0ZSA9PT0gJ1NpZ25lZE91dCcpIHtcbiAgICAgICAgdGhpcy5yZXNldFN0YXRlKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIGFzeW5jIGdldEFib25uZW1lbnRzKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmFib25uZW1lbnRzU2VydmljZVxuICAgICAgICAubGlzdEFib25uZW1lbnQoe1xuICAgICAgICAgIHByb2dyYW06IGVudmlyb25tZW50LnByb2dyYW0sXG4gICAgICAgICAgbGltaXQ6IDEwMCxcbiAgICAgICAgICBleHBhbmQ6IFsnZm9yZmFpdC5wbGFuJ10sXG4gICAgICAgIH0pXG4gICAgICAgIC5zdWJzY3JpYmUoe1xuICAgICAgICAgIG5leHQ6IChyZXMpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tBYm9ubmVtZW50cyhyZXMuZGF0YSlcbiAgICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyb3I6IChlcnJvcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgICAgICAgICB0aGlzLmxpc3RBYm9ubmVtZW50c1N0YXRlLnNldCh7IHN0YXRlOiAnZXJyb3InLCBlcnJvciB9KVxuICAgICAgICAgICAgcmVqZWN0KGVycm9yKVxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgfSlcbiAgfVxuICBhc3luYyBjcmVhdGVBYm9ubmVtZW50KHBhcmFtczogQ3JlYXRlQWJvbm5lbWVudFBhcmFtcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmFib25uZW1lbnRzU2VydmljZVxuICAgICAgICAuY3JlYXRlQWJvbm5lbWVudCh7XG4gICAgICAgICAgcHJvZ3JhbTogZW52aXJvbm1lbnQucHJvZ3JhbSxcbiAgICAgICAgICBjcmVhdGVBYm9ubmVtZW50UmVxdWVzdDoge1xuICAgICAgICAgICAgZm9yZmFpdDogcGFyYW1zLmZvcmZhaXRJRCxcbiAgICAgICAgICAgIHN1cHBvcnRpbmdfZG9jdW1lbnRzOiBwYXJhbXMuc3VwcG9ydGluZ19kb2N1bWVudHMsXG4gICAgICAgICAgICByZWR1Y3Rpb246IHBhcmFtcy5yZWR1Y3Rpb24sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICAgLnN1YnNjcmliZSh7XG4gICAgICAgICAgbmV4dDogYXN5bmMgKGFib25uZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZ2V0QWJvbm5lbWVudHMoKVxuICAgICAgICAgICAgYXdhaXQgdGhpcy5TdWJzY3JpcHRpb25Qcm9jZXNzU2VydmljZS5jbGVhclByb2Nlc3MoKVxuICAgICAgICAgICAgYXdhaXQgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYWJvLWNvbmdyYXRzJ10pXG4gICAgICAgICAgICByZXNvbHZlKGFib25uZW1lbnQpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnJvcjogKGVycm9yKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihlcnJvcilcbiAgICAgICAgICAgIHJlamVjdChlcnJvcilcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBhc3luYyBjaGVja0Fib25uZW1lbnRzKFxuICAgIGFib25uZW1lbnRzOiBMaXN0QWJvbm5lbWVudDIwMFJlc3BvbnNlQWxsT2ZEYXRhSW5uZXJbXSB8IHVuZGVmaW5lZFxuICApIHtcbiAgICAvKioqKioqKioqIFNpIHBhcyBkJ2Fib25uZW1lbnRzICoqKioqKioqL1xuICAgIGNvbnN0IGRlZmF1bHRGb3JmYWl0ID0gYXdhaXQgdGhpcy5mb3JmYWl0c1NlcnZpY2UuZ2V0RGVmYXVsdEZvcmZhaXQoKVxuICAgIGlmICghYWJvbm5lbWVudHMgfHwgYWJvbm5lbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmxpc3RBYm9ubmVtZW50c1N0YXRlLnNldCh7IHN0YXRlOiAnbm9fZGF0YScgfSlcbiAgICAgIGRlZmF1bHRGb3JmYWl0XG4gICAgICAgID8gdGhpcy5jdXJyZW50QWJvbm5lbWVudFN0YXRlLnNldCh7XG4gICAgICAgICAgICBzdGF0ZTogJ2RlZmF1bHQnLFxuICAgICAgICAgICAgZm9yZmFpdDogZGVmYXVsdEZvcmZhaXQsXG4gICAgICAgICAgfSlcbiAgICAgICAgOiB0aGlzLmN1cnJlbnRBYm9ubmVtZW50U3RhdGUuc2V0KHsgc3RhdGU6ICd1bmtub3duJyB9KVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8qKioqKioqKiogR2VzdGlvbiBkZSBsYSBsaXN0ZSBkZXMgYWJvbm5lbWVudHMgKioqKioqKiovXG5cbiAgICB0aGlzLmxpc3RBYm9ubmVtZW50c1N0YXRlLnNldCh7IHN0YXRlOiAnc3VjY2VzcycsIGFib25uZW1lbnRzIH0pXG4gICAgLyoqKioqKioqKiBHZXN0aW9uIGRlIGwnYWJvbm5lbWVudCBlbiBjb3VycyAqKioqKioqKi9cbiAgICBjb25zdCBjdXJyZW50QWJvbm5lbWVudCA9IGFib25uZW1lbnRzLmZpbmQoXG4gICAgICAoYWIpID0+XG4gICAgICAgIGFiLnN0YXR1cyA9PT0gJ2FjdGl2ZScgfHxcbiAgICAgICAgYWIuc3RhdHVzID09PSAnd2FpdGluZ192YWxpZGF0aW9uJyB8fFxuICAgICAgICBhYi5zdGF0dXMgPT09ICdwYXN0X2R1ZScgfHxcbiAgICAgICAgYWIuc3RhdHVzID09PSAnaW5jb21wbGV0ZScgfHxcbiAgICAgICAgYWIuc3RhdHVzID09PSAndW5wYWlkJyB8fFxuICAgICAgICBhYi5zdGF0dXMgPT09ICdkZWxldGlvbl9yZXF1ZXN0ZWQnXG4gICAgKVxuICAgIGlmICghY3VycmVudEFib25uZW1lbnQpIHtcbiAgICAgIHRoaXMuY3VycmVudEFib25uZW1lbnRTdGF0ZS5zZXQoe1xuICAgICAgICBzdGF0ZTogJ2RlZmF1bHQnLFxuICAgICAgICBmb3JmYWl0OiBkZWZhdWx0Rm9yZmFpdCEsXG4gICAgICB9KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRBYm9ubmVtZW50LmNhbl9yZW50ID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5hY2NvdW50U2VydmljZS5hZGRCbG9ja2VkUmVhc29uKFxuICAgICAgICAnU3Vic2NyaXB0aW9uIGRvZXMgbm90IGFsbG93IHJlbnRpbmcnXG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5hY2NvdW50U2VydmljZS5oYXNCbG9ja2VkUmVhc29uKFxuICAgICAgICAgICdTdWJzY3JpcHRpb24gZG9lcyBub3QgYWxsb3cgcmVudGluZydcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuYWNjb3VudFNlcnZpY2UucmVtb3ZlQmxvY2tlZFJlYXNvbihcbiAgICAgICAgICAnU3Vic2NyaXB0aW9uIGRvZXMgbm90IGFsbG93IHJlbnRpbmcnXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgc3dpdGNoIChjdXJyZW50QWJvbm5lbWVudD8uc3RhdHVzKSB7XG4gICAgICBjYXNlICdhY3RpdmUnOlxuICAgICAgICB0aGlzLmN1cnJlbnRBYm9ubmVtZW50U3RhdGUuc2V0KHtcbiAgICAgICAgICBzdGF0ZTogJ2FjdGl2ZScsXG4gICAgICAgICAgYWJvbm5lbWVudDogY3VycmVudEFib25uZW1lbnQsXG4gICAgICAgIH0pXG5cbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3dhaXRpbmdfdmFsaWRhdGlvbic6XG4gICAgICAgIHRoaXMuY3VycmVudEFib25uZW1lbnRTdGF0ZS5zZXQoe1xuICAgICAgICAgIHN0YXRlOiAnd2FpdGluZ192YWxpZGF0aW9uJyxcbiAgICAgICAgICBhYm9ubmVtZW50OiBjdXJyZW50QWJvbm5lbWVudCxcbiAgICAgICAgfSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2luY29tcGxldGUnOlxuICAgICAgICB0aGlzLmN1cnJlbnRBYm9ubmVtZW50U3RhdGUuc2V0KHtcbiAgICAgICAgICBzdGF0ZTogJ2luY29tcGxldGUnLFxuICAgICAgICAgIGFib25uZW1lbnQ6IGN1cnJlbnRBYm9ubmVtZW50LFxuICAgICAgICB9KVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAndW5wYWlkJzpcbiAgICAgICAgdGhpcy5jdXJyZW50QWJvbm5lbWVudFN0YXRlLnNldCh7XG4gICAgICAgICAgc3RhdGU6ICd1bnBhaWQnLFxuICAgICAgICAgIGFib25uZW1lbnQ6IGN1cnJlbnRBYm9ubmVtZW50LFxuICAgICAgICB9KVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAncGFzdF9kdWUnOlxuICAgICAgICB0aGlzLmN1cnJlbnRBYm9ubmVtZW50U3RhdGUuc2V0KHtcbiAgICAgICAgICBzdGF0ZTogJ3Bhc3RfZHVlJyxcbiAgICAgICAgICBhYm9ubmVtZW50OiBjdXJyZW50QWJvbm5lbWVudCxcbiAgICAgICAgfSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2RlbGV0aW9uX3JlcXVlc3RlZCc6XG4gICAgICAgIHRoaXMuY3VycmVudEFib25uZW1lbnRTdGF0ZS5zZXQoe1xuICAgICAgICAgIHN0YXRlOiAnZGVsZXRpb25fcmVxdWVzdGVkJyxcbiAgICAgICAgICBhYm9ubmVtZW50OiBjdXJyZW50QWJvbm5lbWVudCxcbiAgICAgICAgfSlcbiAgICAgICAgYnJlYWtcbiAgICB9XG4gIH1cbiAgYXN5bmMgcmVxdWVzdERlbGV0aW9uKCkge1xuICAgIGNvbnN0IGFsZXJ0ID0gYXdhaXQgdGhpcy5hbGVydENvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgIGhlYWRlcjogdGhpcy50cmFuc2xhdGUuaW5zdGFudCgnc3Vic2NyaXB0aW9uLmRlbGV0aW9uLmNvbmZpcm0udGl0bGUnKSxcbiAgICAgIG1lc3NhZ2U6IHRoaXMudHJhbnNsYXRlLmluc3RhbnQoJ3N1YnNjcmlwdGlvbi5kZWxldGlvbi5jb25maXJtLm1lc3NhZ2UnKSxcbiAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IHRoaXMudHJhbnNsYXRlLmluc3RhbnQoJ3N1YnNjcmlwdGlvbi5kZWxldGlvbi5jb25maXJtLmNhbmNlbCcpLFxuICAgICAgICAgIHJvbGU6ICdjYW5jZWwnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogdGhpcy50cmFuc2xhdGUuaW5zdGFudCgnc3Vic2NyaXB0aW9uLmRlbGV0aW9uLmNvbmZpcm0uY29uZmlybScpLFxuICAgICAgICAgIGhhbmRsZXI6IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZGVsZXRlQWJvbm5lbWVudCgpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSlcbiAgICBhd2FpdCBhbGVydC5wcmVzZW50KClcbiAgfVxuICBhc3luYyBkZWxldGVBYm9ubmVtZW50KCkge1xuICAgIGNvbnN0IGxvYWRpbmcgPSBhd2FpdCB0aGlzLmxvYWRpbmdDdHJsLmNyZWF0ZSh7XG4gICAgICBtZXNzYWdlOiB0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KCdzdWJzY3JpcHRpb24uZGVsZXRpb24ubG9hZGluZycpLFxuICAgIH0pXG4gICAgYXdhaXQgbG9hZGluZy5wcmVzZW50KClcbiAgICBjb25zdCBjdXJyZW50QWJvbm5lbWVudCA9IHRoaXMuY3VycmVudEFib25uZW1lbnRTdGF0ZSgpXG4gICAgaWYgKFxuICAgICAgY3VycmVudEFib25uZW1lbnQuc3RhdGUgPT09ICd1bmtub3duJyB8fFxuICAgICAgY3VycmVudEFib25uZW1lbnQuc3RhdGUgPT09ICdkZWZhdWx0J1xuICAgICkge1xuICAgICAgYXdhaXQgdGhpcy50b2FzdFNlcnZpY2UuY3JlYXRlV2l0aEp1c3RNZXNzYWdlKFxuICAgICAgICB0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KCdzdWJzY3JpcHRpb24uZGVsZXRpb24ubm9fYWN0aXZlJyksXG4gICAgICAgIFRvYXN0VHlwZS5FcnJvclxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfSBlbHNlIGlmIChjdXJyZW50QWJvbm5lbWVudC5zdGF0ZSA9PT0gJ2RlbGV0aW9uX3JlcXVlc3RlZCcpIHtcbiAgICAgIGF3YWl0IHRoaXMudG9hc3RTZXJ2aWNlLmNyZWF0ZVdpdGhKdXN0TWVzc2FnZShcbiAgICAgICAgdGhpcy50cmFuc2xhdGUuaW5zdGFudCgnc3Vic2NyaXB0aW9uLmRlbGV0aW9uLmFscmVhZHlfcmVxdWVzdGVkJyksXG4gICAgICAgIFRvYXN0VHlwZS5FcnJvclxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWJvbm5lbWVudHNTZXJ2aWNlXG4gICAgICAgIC5kZWxldGVBYm9ubmVtZW50KHtcbiAgICAgICAgICBwcm9ncmFtOiBlbnZpcm9ubWVudC5wcm9ncmFtLFxuICAgICAgICAgIGlkOiBjdXJyZW50QWJvbm5lbWVudC5hYm9ubmVtZW50LmlkISxcbiAgICAgICAgfSlcbiAgICAgICAgLnN1YnNjcmliZSh7XG4gICAgICAgICAgbmV4dDogYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50b2FzdFNlcnZpY2UuY3JlYXRlV2l0aEp1c3RNZXNzYWdlKFxuICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KCdzdWJzY3JpcHRpb24uZGVsZXRpb24uc3VjY2VzcycpLFxuICAgICAgICAgICAgICBUb2FzdFR5cGUuU3VjY2Vzc1xuICAgICAgICAgICAgKVxuICAgICAgICAgICAgdGhpcy5hY2NvdW50U2VydmljZS5yZW1vdmVCbG9ja2VkUmVhc29uKFxuICAgICAgICAgICAgICAnU3Vic2NyaXB0aW9uIGRvZXMgbm90IGFsbG93IHJlbnRpbmcnXG4gICAgICAgICAgICApXG4gICAgICAgICAgICB0aGlzLmdldEFib25uZW1lbnRzKClcbiAgICAgICAgICAgIGF3YWl0IGxvYWRpbmcuZGlzbWlzcygpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnJvcjogYXN5bmMgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihlcnJvcilcbiAgICAgICAgICAgIGF3YWl0IGxvYWRpbmcuZGlzbWlzcygpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBnZXREYXlzVW50aWxFeHBpcmF0aW9uKFxuICAgIGFib25uZW1lbnQ6IExpc3RBYm9ubmVtZW50MjAwUmVzcG9uc2VBbGxPZkRhdGFJbm5lclxuICApOiBudW1iZXIgfCBudWxsIHtcbiAgICBpZiAoIWFib25uZW1lbnQuY2FuY2VsX2F0KSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KClcbiAgICBjb25zdCBleHBpcmF0aW9uRGF0ZSA9IGFib25uZW1lbnQuY2FuY2VsX2F0ICogMTAwMFxuICAgIHJldHVybiBNYXRoLmZsb29yKChleHBpcmF0aW9uRGF0ZSAtIG5vdykgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpXG4gIH1cblxuICBzaG91bGRTaG93RXhwaXJhdGlvbldhcm5pbmcoXG4gICAgYWJvbm5lbWVudDogTGlzdEFib25uZW1lbnQyMDBSZXNwb25zZUFsbE9mRGF0YUlubmVyXG4gICk6IGJvb2xlYW4ge1xuICAgIGlmICghYWJvbm5lbWVudC5mb3JmYWl0Py5wbGFuPy5pbnRlcnZhbCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgZGF5c1VudGlsRXhwaXJhdGlvbiA9IHRoaXMuZ2V0RGF5c1VudGlsRXhwaXJhdGlvbihhYm9ubmVtZW50KVxuICAgIGlmIChkYXlzVW50aWxFeHBpcmF0aW9uID09PSBudWxsKSByZXR1cm4gZmFsc2VcblxuICAgIHN3aXRjaCAoYWJvbm5lbWVudC5mb3JmYWl0LnBsYW4uaW50ZXJ2YWwpIHtcbiAgICAgIGNhc2UgJ3dlZWsnOlxuICAgICAgICByZXR1cm4gZGF5c1VudGlsRXhwaXJhdGlvbiA8PSAyXG4gICAgICBjYXNlICdtb250aCc6XG4gICAgICAgIHJldHVybiBkYXlzVW50aWxFeHBpcmF0aW9uIDw9IDVcbiAgICAgIGNhc2UgJ3llYXInOlxuICAgICAgICByZXR1cm4gZGF5c1VudGlsRXhwaXJhdGlvbiA8PSAxNFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG5cbiAgcmVzZXRTdGF0ZSgpIHtcbiAgICB0aGlzLmxpc3RBYm9ubmVtZW50c1N0YXRlLnNldCh7IHN0YXRlOiAnbG9hZGluZycgfSlcbiAgICB0aGlzLmN1cnJlbnRBYm9ubmVtZW50U3RhdGUuc2V0KHsgc3RhdGU6ICd1bmtub3duJyB9KVxuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnR00sSUFBTyw0QkFBUCxNQUFPLDBCQUF3QjtFQVVuQyxZQUNVLG9CQUNBLGlCQUNBLGFBQ0EsV0FDQSxpQkFDQSxjQUNBQSw2QkFDQSxRQUNBLGFBQ0EsZ0JBQ0EsY0FBaUM7QUFWakMsU0FBQSxxQkFBQTtBQUNBLFNBQUEsa0JBQUE7QUFDQSxTQUFBLGNBQUE7QUFD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QUFXLFFBQVEsS0FBSyxVQUFVO01BQ3hDLEtBQUs7QUFDSCxlQUFPLHVCQUF1QjtNQUNoQyxLQUFLO0FBQ0gsZUFBTyx1QkFBdUI7TUFDaEMsS0FBSztBQUNILGVBQU8sdUJBQXVCO01BQ2hDO0FBQ0UsZUFBTztJQUNYO0VBQ0Y7RUFFQSxhQUFVO0FBQ1IsU0FBSyxxQkFBcUIsSUFBSSxFQUFFLE9BQU8sVUFBUyxDQUFFO0FBQ2xELFNBQUssdUJBQXVCLElBQUksRUFBRSxPQUFPLFVBQVMsQ0FBRTtFQUN0RDs7O21DQWpSVywyQkFBd0IsbUJBQUEsa0JBQUEsR0FBQSxtQkFBQSxlQUFBLEdBQUEsbUJBQUEsaUJBQUEsR0FBQSxtQkFBQSxnQkFBQSxHQUFBLG1CQUFBLHNCQUFBLEdBQUEsbUJBQUEsWUFBQSxHQUFBLG1CQUFBLDBCQUFBLEdBQUEsbUJBQUEsTUFBQSxHQUFBLG1CQUFBLFdBQUEsR0FBQSxtQkFBQSxjQUFBLEdBQUEsbUJBQUEsbUJBQUEsQ0FBQTtBQUFBOzZGQUF4QiwyQkFBd0IsU0FBeEIsMEJBQXdCLFdBQUEsWUFGdkIsT0FBTSxDQUFBO0FBRWQsSUFBTywyQkFBUDs7c0VBQU8sMEJBQXdCLENBQUE7VUFIcEM7V0FBVztNQUNWLFlBQVk7S0FDYjs7OyIsCiAgIm5hbWVzIjogWyJTdWJzY3JpcHRpb25Qcm9jZXNzU2VydmljZSJdCn0K
