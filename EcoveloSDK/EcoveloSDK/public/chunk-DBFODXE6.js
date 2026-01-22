import {
  AuthService
} from "./chunk-WJQU3GMM.js";
import {
  AccountService,
  FacturesService
} from "./chunk-XK4I5MHM.js";
import {
  environment
} from "./chunk-FOJAXRYS.js";
import {
  ErrorHandlerService
} from "./chunk-SARQRLZR.js";
import {
  BehaviorSubject,
  Injectable,
  catchError,
  effect,
  forkJoin,
  of,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-DGENMXJW.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// src/app/services/api-wrappers/facture.service.ts
var _FactureService = class _FactureService {
  constructor(facturesService, authService, accountService, errorHandler) {
    this.facturesService = facturesService;
    this.authService = authService;
    this.accountService = accountService;
    this.errorHandler = errorHandler;
    this.factureState = new BehaviorSubject({
      state: "loading"
    });
    effect(() => {
      if (this.authService.authState().state === "SignedIn" && this.factureState.value.state == "loading") {
        this.getFactures();
      } else if (this.authService.authState().state === "SignedOut") {
        this.resetState();
      }
    });
  }
  getFactures() {
    return __async(this, null, function* () {
      forkJoin({
        upcoming: this.facturesService.upcomingFactures({
          program: environment.program
        }).pipe(catchError((error) => {
          if (error.status === 404) {
            return of(void 0);
          }
          this.errorHandler.handleError(error);
          throw error;
        })),
        factures: this.facturesService.listFacture({
          program: environment.program,
          limit: 30
        })
      }).subscribe(({ upcoming, factures }) => {
        if (factures.data.length > 0) {
          const unpaidInvoices = factures.data.filter((invoice) => invoice.status === "uncollectible" || invoice.status === "open");
          if (unpaidInvoices.length > 0) {
            this.accountService.addBlockedReason("Unpaid invoices");
          } else if (this.accountService.hasBlockedReason("Unpaid invoices")) {
            this.accountService.removeBlockedReason("Unpaid invoices");
          }
          this.factureState.next({
            state: "factures",
            invoices: factures.data.filter((invoice) => invoice.status === "paid" || invoice.status === "void" || invoice.status === "draft"),
            dues: unpaidInvoices,
            upcoming,
            hasMore: factures.has_more
          });
        } else if (upcoming && factures.data.length === 0) {
          this.factureState.next({ state: "upcoming", upcoming });
        } else {
          this.factureState.next({ state: "noInvoices" });
        }
      });
    });
  }
  resetState() {
    this.factureState.next({ state: "loading" });
  }
};
_FactureService.\u0275fac = function FactureService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FactureService)(\u0275\u0275inject(FacturesService), \u0275\u0275inject(AuthService), \u0275\u0275inject(AccountService), \u0275\u0275inject(ErrorHandlerService));
};
_FactureService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FactureService, factory: _FactureService.\u0275fac, providedIn: "root" });
var FactureService = _FactureService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FactureService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: FacturesService }, { type: AuthService }, { type: AccountService }, { type: ErrorHandlerService }], null);
})();

export {
  FactureService
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9zZXJ2aWNlcy9hcGktd3JhcHBlcnMvZmFjdHVyZS5zZXJ2aWNlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBlZmZlY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBmb3JrSm9pbiwgY2F0Y2hFcnJvciwgb2YgfSBmcm9tICdyeGpzJ1xuaW1wb3J0IHtcbiAgRmFjdHVyZXNTZXJ2aWNlLFxuICBMaXN0RmFjdHVyZTIwMFJlc3BvbnNlQWxsT2ZEYXRhSW5uZXIsXG4gIFVwY29taW5nRmFjdHVyZXMyMDBSZXNwb25zZSxcbn0gZnJvbSAnc3JjL2FwaS1jeWNsaXN0J1xuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICdzcmMvZW52aXJvbm1lbnRzL2Vudmlyb25tZW50J1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9leHRlcm5hbC9hdXRoLnNlcnZpY2UnXG5pbXBvcnQgeyBBY2NvdW50U2VydmljZSB9IGZyb20gJy4vYWNjb3VudC5zZXJ2aWNlJ1xuaW1wb3J0IHsgRXJyb3JIYW5kbGVyU2VydmljZSB9IGZyb20gJy4uL3V0aWxzL2Vycm9yLWhhbmRsZXIuc2VydmljZSdcblxuZXhwb3J0IHR5cGUgRmFjdHVyZXNTdGF0ZSA9XG4gIHwge1xuICAgICAgc3RhdGU6ICdsb2FkaW5nJ1xuICAgIH1cbiAgfCB7XG4gICAgICBzdGF0ZTogJ3VwY29taW5nJ1xuICAgICAgdXBjb21pbmc6IFVwY29taW5nRmFjdHVyZXMyMDBSZXNwb25zZVxuICAgIH1cbiAgfCB7XG4gICAgICBzdGF0ZTogJ2ZhY3R1cmVzJ1xuICAgICAgaW52b2ljZXM6IExpc3RGYWN0dXJlMjAwUmVzcG9uc2VBbGxPZkRhdGFJbm5lcltdXG4gICAgICBkdWVzPzogTGlzdEZhY3R1cmUyMDBSZXNwb25zZUFsbE9mRGF0YUlubmVyW11cbiAgICAgIHVwY29taW5nPzogVXBjb21pbmdGYWN0dXJlczIwMFJlc3BvbnNlXG4gICAgICBoYXNNb3JlOiBib29sZWFuXG4gICAgfVxuICB8IHtcbiAgICAgIHN0YXRlOiAnbm9JbnZvaWNlcydcbiAgICB9XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBGYWN0dXJlU2VydmljZSB7XG4gIGZhY3R1cmVTdGF0ZTogQmVoYXZpb3JTdWJqZWN0PEZhY3R1cmVzU3RhdGU+ID1cbiAgICBuZXcgQmVoYXZpb3JTdWJqZWN0PEZhY3R1cmVzU3RhdGU+KHtcbiAgICAgIHN0YXRlOiAnbG9hZGluZycsXG4gICAgfSlcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZhY3R1cmVzU2VydmljZTogRmFjdHVyZXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgYWNjb3VudFNlcnZpY2U6IEFjY291bnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgZXJyb3JIYW5kbGVyOiBFcnJvckhhbmRsZXJTZXJ2aWNlXG4gICkge1xuICAgIGVmZmVjdCgoKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuYXV0aFN0YXRlKCkuc3RhdGUgPT09ICdTaWduZWRJbicgJiZcbiAgICAgICAgdGhpcy5mYWN0dXJlU3RhdGUudmFsdWUuc3RhdGUgPT0gJ2xvYWRpbmcnXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5nZXRGYWN0dXJlcygpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYXV0aFNlcnZpY2UuYXV0aFN0YXRlKCkuc3RhdGUgPT09ICdTaWduZWRPdXQnKSB7XG4gICAgICAgIHRoaXMucmVzZXRTdGF0ZSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIGdldEZhY3R1cmVzKCkge1xuICAgIGZvcmtKb2luKHtcbiAgICAgIHVwY29taW5nOiB0aGlzLmZhY3R1cmVzU2VydmljZVxuICAgICAgICAudXBjb21pbmdGYWN0dXJlcyh7XG4gICAgICAgICAgcHJvZ3JhbTogZW52aXJvbm1lbnQucHJvZ3JhbSxcbiAgICAgICAgfSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAgICAgICByZXR1cm4gb2YodW5kZWZpbmVkKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgICAgIH0pXG4gICAgICAgICksXG4gICAgICBmYWN0dXJlczogdGhpcy5mYWN0dXJlc1NlcnZpY2UubGlzdEZhY3R1cmUoe1xuICAgICAgICBwcm9ncmFtOiBlbnZpcm9ubWVudC5wcm9ncmFtLFxuICAgICAgICBsaW1pdDogMzAsXG4gICAgICB9KSxcbiAgICB9KS5zdWJzY3JpYmUoKHsgdXBjb21pbmcsIGZhY3R1cmVzIH0pID0+IHtcbiAgICAgIGlmIChmYWN0dXJlcy5kYXRhIS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHVucGFpZEludm9pY2VzID0gZmFjdHVyZXMuZGF0YSEuZmlsdGVyKFxuICAgICAgICAgIChpbnZvaWNlKSA9PlxuICAgICAgICAgICAgaW52b2ljZS5zdGF0dXMgPT09ICd1bmNvbGxlY3RpYmxlJyB8fCBpbnZvaWNlLnN0YXR1cyA9PT0gJ29wZW4nXG4gICAgICAgIClcblxuICAgICAgICBpZiAodW5wYWlkSW52b2ljZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRoaXMuYWNjb3VudFNlcnZpY2UuYWRkQmxvY2tlZFJlYXNvbignVW5wYWlkIGludm9pY2VzJylcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmFjY291bnRTZXJ2aWNlLmhhc0Jsb2NrZWRSZWFzb24oJ1VucGFpZCBpbnZvaWNlcycpKSB7XG4gICAgICAgICAgdGhpcy5hY2NvdW50U2VydmljZS5yZW1vdmVCbG9ja2VkUmVhc29uKCdVbnBhaWQgaW52b2ljZXMnKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5mYWN0dXJlU3RhdGUubmV4dCh7XG4gICAgICAgICAgc3RhdGU6ICdmYWN0dXJlcycsXG4gICAgICAgICAgaW52b2ljZXM6IGZhY3R1cmVzLmRhdGEhLmZpbHRlcihcbiAgICAgICAgICAgIChpbnZvaWNlKSA9PlxuICAgICAgICAgICAgICBpbnZvaWNlLnN0YXR1cyA9PT0gJ3BhaWQnIHx8XG4gICAgICAgICAgICAgIGludm9pY2Uuc3RhdHVzID09PSAndm9pZCcgfHxcbiAgICAgICAgICAgICAgaW52b2ljZS5zdGF0dXMgPT09ICdkcmFmdCdcbiAgICAgICAgICApLFxuICAgICAgICAgIGR1ZXM6IHVucGFpZEludm9pY2VzLFxuICAgICAgICAgIHVwY29taW5nLFxuICAgICAgICAgIGhhc01vcmU6IGZhY3R1cmVzLmhhc19tb3JlISxcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiAodXBjb21pbmcgJiYgZmFjdHVyZXMuZGF0YSEubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMuZmFjdHVyZVN0YXRlLm5leHQoeyBzdGF0ZTogJ3VwY29taW5nJywgdXBjb21pbmcgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZmFjdHVyZVN0YXRlLm5leHQoeyBzdGF0ZTogJ25vSW52b2ljZXMnIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJlc2V0U3RhdGUoKSB7XG4gICAgdGhpcy5mYWN0dXJlU3RhdGUubmV4dCh7IHN0YXRlOiAnbG9hZGluZycgfSlcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQ00sSUFBTyxrQkFBUCxNQUFPLGdCQUFjO0VBTXpCLFlBQ1UsaUJBQ0EsYUFDQSxnQkFDQSxjQUFpQztBQUhqQyxTQUFBLGtCQUFBO0FBQ0EsU0FBQSxjQUFBO0FBQ0EsU0FBQSxpQkFBQTtBQUNBLFNBQUEsZUFBQTtBQVRWLFNBQUEsZUFDRSxJQUFJLGdCQUErQjtNQUNqQyxPQUFPO0tBQ1I7QUFRRCxXQUFPLE1BQUs7QUFDVixVQUNFLEtBQUssWUFBWSxVQUFTLEVBQUcsVUFBVSxjQUN2QyxLQUFLLGFBQWEsTUFBTSxTQUFTLFdBQ2pDO0FBQ0EsYUFBSyxZQUFXO01BQ2xCLFdBQVcsS0FBSyxZQUFZLFVBQVMsRUFBRyxVQUFVLGFBQWE7QUFDN0QsYUFBSyxXQUFVO01BQ2pCO0lBQ0YsQ0FBQztFQUNIO0VBRU0sY0FBVzs7QUFDZixlQUFTO1FBQ1AsVUFBVSxLQUFLLGdCQUNaLGlCQUFpQjtVQUNoQixTQUFTLFlBQVk7U0FDdEIsRUFDQSxLQUNDLFdBQVcsQ0FBQyxVQUFTO0FBQ25CLGNBQUksTUFBTSxXQUFXLEtBQUs7QUFDeEIsbUJBQU8sR0FBRyxNQUFTO1VBQ3JCO0FBQ0EsZUFBSyxhQUFhLFlBQVksS0FBSztBQUNuQyxnQkFBTTtRQUNSLENBQUMsQ0FBQztRQUVOLFVBQVUsS0FBSyxnQkFBZ0IsWUFBWTtVQUN6QyxTQUFTLFlBQVk7VUFDckIsT0FBTztTQUNSO09BQ0YsRUFBRSxVQUFVLENBQUMsRUFBRSxVQUFVLFNBQVEsTUFBTTtBQUN0QyxZQUFJLFNBQVMsS0FBTSxTQUFTLEdBQUc7QUFDN0IsZ0JBQU0saUJBQWlCLFNBQVMsS0FBTSxPQUNwQyxDQUFDLFlBQ0MsUUFBUSxXQUFXLG1CQUFtQixRQUFRLFdBQVcsTUFBTTtBQUduRSxjQUFJLGVBQWUsU0FBUyxHQUFHO0FBQzdCLGlCQUFLLGVBQWUsaUJBQWlCLGlCQUFpQjtVQUN4RCxXQUFXLEtBQUssZUFBZSxpQkFBaUIsaUJBQWlCLEdBQUc7QUFDbEUsaUJBQUssZUFBZSxvQkFBb0IsaUJBQWlCO1VBQzNEO0FBRUEsZUFBSyxhQUFhLEtBQUs7WUFDckIsT0FBTztZQUNQLFVBQVUsU0FBUyxLQUFNLE9BQ3ZCLENBQUMsWUFDQyxRQUFRLFdBQVcsVUFDbkIsUUFBUSxXQUFXLFVBQ25CLFFBQVEsV0FBVyxPQUFPO1lBRTlCLE1BQU07WUFDTjtZQUNBLFNBQVMsU0FBUztXQUNuQjtRQUNILFdBQVcsWUFBWSxTQUFTLEtBQU0sV0FBVyxHQUFHO0FBQ2xELGVBQUssYUFBYSxLQUFLLEVBQUUsT0FBTyxZQUFZLFNBQVEsQ0FBRTtRQUN4RCxPQUFPO0FBQ0wsZUFBSyxhQUFhLEtBQUssRUFBRSxPQUFPLGFBQVksQ0FBRTtRQUNoRDtNQUNGLENBQUM7SUFDSDs7RUFFQSxhQUFVO0FBQ1IsU0FBSyxhQUFhLEtBQUssRUFBRSxPQUFPLFVBQVMsQ0FBRTtFQUM3Qzs7O21DQTlFVyxpQkFBYyxtQkFBQSxlQUFBLEdBQUEsbUJBQUEsV0FBQSxHQUFBLG1CQUFBLGNBQUEsR0FBQSxtQkFBQSxtQkFBQSxDQUFBO0FBQUE7bUZBQWQsaUJBQWMsU0FBZCxnQkFBYyxXQUFBLFlBRmIsT0FBTSxDQUFBO0FBRWQsSUFBTyxpQkFBUDs7c0VBQU8sZ0JBQWMsQ0FBQTtVQUgxQjtXQUFXO01BQ1YsWUFBWTtLQUNiOzs7IiwKICAibmFtZXMiOiBbXQp9Cg==
