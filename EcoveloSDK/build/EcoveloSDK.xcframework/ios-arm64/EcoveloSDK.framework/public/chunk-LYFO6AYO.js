import {
  LoadingController
} from "./chunk-Y4K6NO5T.js";
import {
  AuthService
} from "./chunk-WJQU3GMM.js";
import {
  AccountService,
  CardsService
} from "./chunk-XK4I5MHM.js";
import {
  environment
} from "./chunk-FOJAXRYS.js";
import {
  ErrorHandlerService
} from "./chunk-SARQRLZR.js";
import {
  Injectable,
  TranslateService,
  computed,
  effect,
  firstValueFrom,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-DGENMXJW.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-UESUV5PM.js";

// src/app/services/api-wrappers/payment-method.service.ts
var _PaymentMethodsService = class _PaymentMethodsService {
  constructor(cardsService, loadingCtrl, translateService, accountService, authService, errorHandler) {
    this.cardsService = cardsService;
    this.loadingCtrl = loadingCtrl;
    this.translateService = translateService;
    this.accountService = accountService;
    this.authService = authService;
    this.errorHandler = errorHandler;
    this.paymentMethodsState = signal({
      state: "loading"
    });
    this.defaultPaymentMethod = computed(() => {
      const state = this.paymentMethodsState();
      if (state.state !== "success") {
        return void 0;
      }
      const cyclistState = this.accountService.cyclistState();
      if (cyclistState.state === "unknown" || cyclistState.state === "error") {
        return void 0;
      }
      return state.paymentMethods.find((pm) => {
        var _a, _b, _c, _d, _e;
        return pm.id === ((_e = (_d = (_c = (_b = (_a = cyclistState.cyclist.registrations) == null ? void 0 : _a.data) == null ? void 0 : _b[0]) == null ? void 0 : _c.customer) == null ? void 0 : _d.invoice_settings) == null ? void 0 : _e.default_payment_method);
      });
    });
    this.cardState = computed(() => {
      var _a, _b, _c, _d, _e, _f;
      const card = this.defaultPaymentMethod();
      if (!card) {
        return {
          state: "no_default",
          formattedNumber: "",
          expiryDate: ""
        };
      }
      const today = /* @__PURE__ */ new Date();
      const cardExpDate = new Date(((_a = card.card) == null ? void 0 : _a.exp_year) || 0, ((_b = card.card) == null ? void 0 : _b.exp_month) || 1, 0, 23, 59, 59);
      const formattedMonth = (((_c = card.card) == null ? void 0 : _c.exp_month) || 0).toString().padStart(2, "0");
      const formattedExpiry = `${formattedMonth}/${(_e = (_d = card.card) == null ? void 0 : _d.exp_year) == null ? void 0 : _e.toString().slice(-2)}`;
      const formattedNumber = `CB **** ${(_f = card.card) == null ? void 0 : _f.last4}`;
      if (cardExpDate < today) {
        return {
          state: "expired",
          formattedNumber,
          expiryDate: formattedExpiry
        };
      }
      const oneMonthFromNow = /* @__PURE__ */ new Date();
      oneMonthFromNow.setMonth(today.getMonth() + 1);
      if (cardExpDate <= oneMonthFromNow) {
        return {
          state: "expire_soon",
          formattedNumber,
          expiryDate: formattedExpiry
        };
      }
      return {
        state: "valid",
        formattedNumber,
        expiryDate: formattedExpiry
      };
    });
    effect(() => {
      this.cyclistState = this.accountService.cyclistState();
      if (this.cyclistState.state !== "unknown" && this.paymentMethodsState().state === "loading") {
        this.getPaymentMethods();
      } else if (this.cyclistState.state === "unknown") {
        this.resetState();
      }
    });
    effect(() => {
      if (this.authService.authState().state === "SignedOut") {
        this.resetState();
      }
    });
  }
  getPaymentMethods() {
    return __async(this, null, function* () {
      if (this.cyclistState.state !== "unknown" && this.cyclistState.state !== "error") {
        const res = yield firstValueFrom(this.cardsService.listCards({
          cyclist: this.cyclistState.cyclist.id,
          program: environment.program
        }));
        if (res.data && res.data.length > 0) {
          this.paymentMethodsState.set({
            state: "success",
            paymentMethods: res.data
          });
          const hasValidPaymentMethod = res.data.some((card) => {
            const cardState = this.getCardState(card);
            return cardState.state === "valid";
          });
          if (!hasValidPaymentMethod) {
            this.accountService.addBlockedReason("No valid payment method available");
          } else {
            this.accountService.removeBlockedReason("No valid payment method available");
          }
        } else {
          this.paymentMethodsState.set({ state: "no_data" });
          this.accountService.addBlockedReason("No valid payment method available");
        }
      }
    });
  }
  setDefaultCard(cardId) {
    return __async(this, null, function* () {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      try {
        yield firstValueFrom(this.cardsService.updateCard({
          program: environment.program,
          cyclist: this.accountService.getCurrentCyclist().id,
          id: cardId,
          body: { default: true }
        }));
        const currentCyclist = this.accountService.getCurrentCyclist();
        this.accountService.updateCyclistData(__spreadProps(__spreadValues({}, currentCyclist), {
          registrations: __spreadProps(__spreadValues({}, currentCyclist.registrations), {
            data: [
              __spreadProps(__spreadValues({}, (_b = (_a = currentCyclist.registrations) == null ? void 0 : _a.data) == null ? void 0 : _b[0]), {
                customer: __spreadProps(__spreadValues({}, (_e = (_d = (_c = currentCyclist.registrations) == null ? void 0 : _c.data) == null ? void 0 : _d[0]) == null ? void 0 : _e.customer), {
                  invoice_settings: __spreadProps(__spreadValues({}, (_i = (_h = (_g = (_f = currentCyclist.registrations) == null ? void 0 : _f.data) == null ? void 0 : _g[0]) == null ? void 0 : _h.customer) == null ? void 0 : _i.invoice_settings), {
                    default_payment_method: cardId
                  })
                })
              })
            ]
          })
        }));
        yield this.getPaymentMethods();
      } catch (error) {
        this.errorHandler.handleError(error);
        throw error;
      }
    });
  }
  deleteCard(cardId) {
    return __async(this, null, function* () {
      if (this.cyclistState.state !== "unknown" && this.cyclistState.state !== "error") {
        const loading = yield this.loadingCtrl.create({
          message: this.translateService.instant("loading.deleting_card")
        });
        yield loading.present();
        try {
          yield firstValueFrom(this.cardsService.deleteCard({
            program: environment.program,
            cyclist: this.cyclistState.cyclist.id,
            id: cardId
          }));
          yield this.getPaymentMethods();
        } catch (error) {
          this.errorHandler.handleError(error);
          throw error;
        } finally {
          yield loading.dismiss();
        }
      }
    });
  }
  // Make getCardState private since we now use the computed signal
  getCardState(card) {
    var _a, _b, _c, _d, _e, _f;
    if (!card) {
      return {
        state: "unknown",
        formattedNumber: "",
        expiryDate: ""
      };
    }
    const today = /* @__PURE__ */ new Date();
    const cardExpDate = new Date(((_a = card.card) == null ? void 0 : _a.exp_year) || 0, ((_b = card.card) == null ? void 0 : _b.exp_month) || 1, 0, 23, 59, 59);
    const formattedMonth = (((_c = card.card) == null ? void 0 : _c.exp_month) || 0).toString().padStart(2, "0");
    const formattedExpiry = `${formattedMonth}/${(_e = (_d = card.card) == null ? void 0 : _d.exp_year) == null ? void 0 : _e.toString().slice(-2)}`;
    const formattedNumber = `CB **** ${(_f = card.card) == null ? void 0 : _f.last4}`;
    if (cardExpDate < today) {
      return {
        state: "expired",
        formattedNumber,
        expiryDate: formattedExpiry
      };
    }
    const oneMonthFromNow = /* @__PURE__ */ new Date();
    oneMonthFromNow.setMonth(today.getMonth() + 1);
    if (cardExpDate <= oneMonthFromNow) {
      return {
        state: "expire_soon",
        formattedNumber,
        expiryDate: formattedExpiry
      };
    }
    return {
      state: "valid",
      formattedNumber,
      expiryDate: formattedExpiry
    };
  }
  resetState() {
    this.paymentMethodsState.set({ state: "loading" });
  }
};
_PaymentMethodsService.\u0275fac = function PaymentMethodsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PaymentMethodsService)(\u0275\u0275inject(CardsService), \u0275\u0275inject(LoadingController), \u0275\u0275inject(TranslateService), \u0275\u0275inject(AccountService), \u0275\u0275inject(AuthService), \u0275\u0275inject(ErrorHandlerService));
};
_PaymentMethodsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PaymentMethodsService, factory: _PaymentMethodsService.\u0275fac, providedIn: "root" });
var PaymentMethodsService = _PaymentMethodsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentMethodsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: CardsService }, { type: LoadingController }, { type: TranslateService }, { type: AccountService }, { type: AuthService }, { type: ErrorHandlerService }], null);
})();

export {
  PaymentMethodsService
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9zZXJ2aWNlcy9hcGktd3JhcHBlcnMvcGF5bWVudC1tZXRob2Quc2VydmljZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgY29tcHV0ZWQsIGVmZmVjdCwgSW5qZWN0YWJsZSwgc2lnbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7XG4gIENhcmRzU2VydmljZSxcbiAgTGlzdENhcmRzMjAwUmVzcG9uc2VBbGxPZkRhdGFJbm5lcixcbn0gZnJvbSAnc3JjL2FwaS1jeWNsaXN0J1xuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICdzcmMvZW52aXJvbm1lbnRzL2Vudmlyb25tZW50J1xuaW1wb3J0IHsgTG9hZGluZ0NvbnRyb2xsZXIgfSBmcm9tICdAaW9uaWMvYW5ndWxhcidcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJ1xuaW1wb3J0IHsgZmlyc3RWYWx1ZUZyb20gfSBmcm9tICdyeGpzJ1xuaW1wb3J0IHsgQWNjb3VudFNlcnZpY2UsIGN5Y2xpc3RTdGF0ZSB9IGZyb20gJy4vYWNjb3VudC5zZXJ2aWNlJ1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9leHRlcm5hbC9hdXRoLnNlcnZpY2UnXG5pbXBvcnQgeyBFcnJvckhhbmRsZXJTZXJ2aWNlIH0gZnJvbSAnLi4vdXRpbHMvZXJyb3ItaGFuZGxlci5zZXJ2aWNlJ1xuXG5leHBvcnQgdHlwZSBwYXltZW50TWV0aG9kc1N0YXRlID1cbiAgfCB7IHN0YXRlOiAnbG9hZGluZycgfVxuICB8IHtcbiAgICAgIHN0YXRlOiAnc3VjY2VzcydcbiAgICAgIHBheW1lbnRNZXRob2RzOiBMaXN0Q2FyZHMyMDBSZXNwb25zZUFsbE9mRGF0YUlubmVyW11cbiAgICB9XG4gIHwgeyBzdGF0ZTogJ2Vycm9yJzsgZXJyb3I6IGFueSB9XG4gIHwgeyBzdGF0ZTogJ25vX2RhdGEnIH1cblxudHlwZSBDYXJkU3RhdGUgPSAndmFsaWQnIHwgJ2V4cGlyZV9zb29uJyB8ICdleHBpcmVkJyB8ICd1bmtub3duJyB8ICdub19kZWZhdWx0J1xuXG5pbnRlcmZhY2UgQ2FyZERldGFpbHMge1xuICBzdGF0ZTogQ2FyZFN0YXRlXG4gIGZvcm1hdHRlZE51bWJlcjogc3RyaW5nXG4gIGV4cGlyeURhdGU6IHN0cmluZ1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUGF5bWVudE1ldGhvZHNTZXJ2aWNlIHtcbiAgcGF5bWVudE1ldGhvZHNTdGF0ZSA9IHNpZ25hbDxwYXltZW50TWV0aG9kc1N0YXRlPih7XG4gICAgc3RhdGU6ICdsb2FkaW5nJyxcbiAgfSlcbiAgY3ljbGlzdFN0YXRlOiBjeWNsaXN0U3RhdGVcbiAgZGVmYXVsdFBheW1lbnRNZXRob2QgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLnBheW1lbnRNZXRob2RzU3RhdGUoKVxuICAgIGlmIChzdGF0ZS5zdGF0ZSAhPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfVxuICAgIGNvbnN0IGN5Y2xpc3RTdGF0ZSA9IHRoaXMuYWNjb3VudFNlcnZpY2UuY3ljbGlzdFN0YXRlKClcbiAgICBpZiAoY3ljbGlzdFN0YXRlLnN0YXRlID09PSAndW5rbm93bicgfHwgY3ljbGlzdFN0YXRlLnN0YXRlID09PSAnZXJyb3InKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfVxuICAgIHJldHVybiBzdGF0ZS5wYXltZW50TWV0aG9kcy5maW5kKFxuICAgICAgKHBtKSA9PlxuICAgICAgICBwbS5pZCA9PT1cbiAgICAgICAgY3ljbGlzdFN0YXRlLmN5Y2xpc3QucmVnaXN0cmF0aW9ucz8uZGF0YT8uWzBdPy5jdXN0b21lclxuICAgICAgICAgID8uaW52b2ljZV9zZXR0aW5ncz8uZGVmYXVsdF9wYXltZW50X21ldGhvZFxuICAgIClcbiAgfSlcblxuICAvLyBBZGQgY29tcHV0ZWQgc2lnbmFsIGZvciBjYXJkIHN0YXRlXG4gIGNhcmRTdGF0ZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBjYXJkID0gdGhpcy5kZWZhdWx0UGF5bWVudE1ldGhvZCgpXG4gICAgaWYgKCFjYXJkKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGF0ZTogJ25vX2RlZmF1bHQnIGFzIENhcmRTdGF0ZSxcbiAgICAgICAgZm9ybWF0dGVkTnVtYmVyOiAnJyxcbiAgICAgICAgZXhwaXJ5RGF0ZTogJycsXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKVxuICAgIGNvbnN0IGNhcmRFeHBEYXRlID0gbmV3IERhdGUoXG4gICAgICBjYXJkLmNhcmQ/LmV4cF95ZWFyIHx8IDAsXG4gICAgICBjYXJkLmNhcmQ/LmV4cF9tb250aCB8fCAxLFxuICAgICAgMCxcbiAgICAgIDIzLFxuICAgICAgNTksXG4gICAgICA1OVxuICAgIClcblxuICAgIGNvbnN0IGZvcm1hdHRlZE1vbnRoID0gKGNhcmQuY2FyZD8uZXhwX21vbnRoIHx8IDApXG4gICAgICAudG9TdHJpbmcoKVxuICAgICAgLnBhZFN0YXJ0KDIsICcwJylcbiAgICBjb25zdCBmb3JtYXR0ZWRFeHBpcnkgPSBgJHtmb3JtYXR0ZWRNb250aH0vJHtjYXJkLmNhcmQ/LmV4cF95ZWFyXG4gICAgICA/LnRvU3RyaW5nKClcbiAgICAgIC5zbGljZSgtMil9YFxuICAgIGNvbnN0IGZvcm1hdHRlZE51bWJlciA9IGBDQiAqKioqICR7Y2FyZC5jYXJkPy5sYXN0NH1gXG5cbiAgICBpZiAoY2FyZEV4cERhdGUgPCB0b2RheSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RhdGU6ICdleHBpcmVkJyBhcyBDYXJkU3RhdGUsXG4gICAgICAgIGZvcm1hdHRlZE51bWJlcixcbiAgICAgICAgZXhwaXJ5RGF0ZTogZm9ybWF0dGVkRXhwaXJ5LFxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG9uZU1vbnRoRnJvbU5vdyA9IG5ldyBEYXRlKClcbiAgICBvbmVNb250aEZyb21Ob3cuc2V0TW9udGgodG9kYXkuZ2V0TW9udGgoKSArIDEpXG4gICAgaWYgKGNhcmRFeHBEYXRlIDw9IG9uZU1vbnRoRnJvbU5vdykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RhdGU6ICdleHBpcmVfc29vbicgYXMgQ2FyZFN0YXRlLFxuICAgICAgICBmb3JtYXR0ZWROdW1iZXIsXG4gICAgICAgIGV4cGlyeURhdGU6IGZvcm1hdHRlZEV4cGlyeSxcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3RhdGU6ICd2YWxpZCcgYXMgQ2FyZFN0YXRlLFxuICAgICAgZm9ybWF0dGVkTnVtYmVyLFxuICAgICAgZXhwaXJ5RGF0ZTogZm9ybWF0dGVkRXhwaXJ5LFxuICAgIH1cbiAgfSlcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNhcmRzU2VydmljZTogQ2FyZHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgbG9hZGluZ0N0cmw6IExvYWRpbmdDb250cm9sbGVyLFxuICAgIHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSxcbiAgICBwcml2YXRlIGFjY291bnRTZXJ2aWNlOiBBY2NvdW50U2VydmljZSxcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIGVycm9ySGFuZGxlcjogRXJyb3JIYW5kbGVyU2VydmljZVxuICApIHtcbiAgICBlZmZlY3QoKCkgPT4ge1xuICAgICAgdGhpcy5jeWNsaXN0U3RhdGUgPSB0aGlzLmFjY291bnRTZXJ2aWNlLmN5Y2xpc3RTdGF0ZSgpXG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuY3ljbGlzdFN0YXRlLnN0YXRlICE9PSAndW5rbm93bicgJiZcbiAgICAgICAgdGhpcy5wYXltZW50TWV0aG9kc1N0YXRlKCkuc3RhdGUgPT09ICdsb2FkaW5nJ1xuICAgICAgKSB7XG4gICAgICAgIHRoaXMuZ2V0UGF5bWVudE1ldGhvZHMoKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmN5Y2xpc3RTdGF0ZS5zdGF0ZSA9PT0gJ3Vua25vd24nKSB7XG4gICAgICAgIHRoaXMucmVzZXRTdGF0ZSgpXG4gICAgICB9XG4gICAgfSlcbiAgICBlZmZlY3QoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuYXV0aFNlcnZpY2UuYXV0aFN0YXRlKCkuc3RhdGUgPT09ICdTaWduZWRPdXQnKSB7XG4gICAgICAgIHRoaXMucmVzZXRTdGF0ZSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIGdldFBheW1lbnRNZXRob2RzKCkge1xuICAgIGlmIChcbiAgICAgIHRoaXMuY3ljbGlzdFN0YXRlLnN0YXRlICE9PSAndW5rbm93bicgJiZcbiAgICAgIHRoaXMuY3ljbGlzdFN0YXRlLnN0YXRlICE9PSAnZXJyb3InXG4gICAgKSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmaXJzdFZhbHVlRnJvbShcbiAgICAgICAgdGhpcy5jYXJkc1NlcnZpY2UubGlzdENhcmRzKHtcbiAgICAgICAgICBjeWNsaXN0OiB0aGlzLmN5Y2xpc3RTdGF0ZS5jeWNsaXN0LmlkISxcbiAgICAgICAgICBwcm9ncmFtOiBlbnZpcm9ubWVudC5wcm9ncmFtLFxuICAgICAgICB9KVxuICAgICAgKVxuICAgICAgaWYgKHJlcy5kYXRhICYmIHJlcy5kYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5wYXltZW50TWV0aG9kc1N0YXRlLnNldCh7XG4gICAgICAgICAgc3RhdGU6ICdzdWNjZXNzJyxcbiAgICAgICAgICBwYXltZW50TWV0aG9kczogcmVzLmRhdGEsXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUncyBhdCBsZWFzdCBvbmUgdmFsaWQgcGF5bWVudCBtZXRob2RcbiAgICAgICAgY29uc3QgaGFzVmFsaWRQYXltZW50TWV0aG9kID0gcmVzLmRhdGEuc29tZSgoY2FyZCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNhcmRTdGF0ZSA9IHRoaXMuZ2V0Q2FyZFN0YXRlKGNhcmQpXG4gICAgICAgICAgcmV0dXJuIGNhcmRTdGF0ZS5zdGF0ZSA9PT0gJ3ZhbGlkJ1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vIFVwZGF0ZSBjYW5fcmVudCBzdGF0dXMgYmFzZWQgb24gcGF5bWVudCBtZXRob2QgdmFsaWRpdHlcbiAgICAgICAgaWYgKCFoYXNWYWxpZFBheW1lbnRNZXRob2QpIHtcbiAgICAgICAgICB0aGlzLmFjY291bnRTZXJ2aWNlLmFkZEJsb2NrZWRSZWFzb24oXG4gICAgICAgICAgICAnTm8gdmFsaWQgcGF5bWVudCBtZXRob2QgYXZhaWxhYmxlJ1xuICAgICAgICAgIClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmFjY291bnRTZXJ2aWNlLnJlbW92ZUJsb2NrZWRSZWFzb24oXG4gICAgICAgICAgICAnTm8gdmFsaWQgcGF5bWVudCBtZXRob2QgYXZhaWxhYmxlJ1xuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wYXltZW50TWV0aG9kc1N0YXRlLnNldCh7IHN0YXRlOiAnbm9fZGF0YScgfSlcbiAgICAgICAgdGhpcy5hY2NvdW50U2VydmljZS5hZGRCbG9ja2VkUmVhc29uKFxuICAgICAgICAgICdObyB2YWxpZCBwYXltZW50IG1ldGhvZCBhdmFpbGFibGUnXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgYXN5bmMgc2V0RGVmYXVsdENhcmQoY2FyZElkOiBzdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgZmlyc3RWYWx1ZUZyb20oXG4gICAgICAgIHRoaXMuY2FyZHNTZXJ2aWNlLnVwZGF0ZUNhcmQoe1xuICAgICAgICAgIHByb2dyYW06IGVudmlyb25tZW50LnByb2dyYW0sXG4gICAgICAgICAgY3ljbGlzdDogdGhpcy5hY2NvdW50U2VydmljZS5nZXRDdXJyZW50Q3ljbGlzdCgpLmlkISxcbiAgICAgICAgICBpZDogY2FyZElkLFxuICAgICAgICAgIGJvZHk6IHsgZGVmYXVsdDogdHJ1ZSB9LFxuICAgICAgICB9KVxuICAgICAgKVxuICAgICAgY29uc3QgY3VycmVudEN5Y2xpc3QgPSB0aGlzLmFjY291bnRTZXJ2aWNlLmdldEN1cnJlbnRDeWNsaXN0KClcbiAgICAgIHRoaXMuYWNjb3VudFNlcnZpY2UudXBkYXRlQ3ljbGlzdERhdGEoe1xuICAgICAgICAuLi5jdXJyZW50Q3ljbGlzdCxcbiAgICAgICAgcmVnaXN0cmF0aW9uczoge1xuICAgICAgICAgIC4uLmN1cnJlbnRDeWNsaXN0LnJlZ2lzdHJhdGlvbnMsXG4gICAgICAgICAgZGF0YTogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAuLi5jdXJyZW50Q3ljbGlzdC5yZWdpc3RyYXRpb25zPy5kYXRhPy5bMF0sXG4gICAgICAgICAgICAgIGN1c3RvbWVyOiB7XG4gICAgICAgICAgICAgICAgLi4uY3VycmVudEN5Y2xpc3QucmVnaXN0cmF0aW9ucz8uZGF0YT8uWzBdPy5jdXN0b21lcixcbiAgICAgICAgICAgICAgICBpbnZvaWNlX3NldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAuLi5jdXJyZW50Q3ljbGlzdC5yZWdpc3RyYXRpb25zPy5kYXRhPy5bMF0/LmN1c3RvbWVyXG4gICAgICAgICAgICAgICAgICAgID8uaW52b2ljZV9zZXR0aW5ncyxcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRfcGF5bWVudF9tZXRob2Q6IGNhcmRJZCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIGF3YWl0IHRoaXMuZ2V0UGF5bWVudE1ldGhvZHMoKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihlcnJvcilcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuICB9XG4gIGFzeW5jIGRlbGV0ZUNhcmQoY2FyZElkOiBzdHJpbmcpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmN5Y2xpc3RTdGF0ZS5zdGF0ZSAhPT0gJ3Vua25vd24nICYmXG4gICAgICB0aGlzLmN5Y2xpc3RTdGF0ZS5zdGF0ZSAhPT0gJ2Vycm9yJ1xuICAgICkge1xuICAgICAgY29uc3QgbG9hZGluZyA9IGF3YWl0IHRoaXMubG9hZGluZ0N0cmwuY3JlYXRlKHtcbiAgICAgICAgbWVzc2FnZTogdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQoJ2xvYWRpbmcuZGVsZXRpbmdfY2FyZCcpLFxuICAgICAgfSlcbiAgICAgIGF3YWl0IGxvYWRpbmcucHJlc2VudCgpXG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBmaXJzdFZhbHVlRnJvbShcbiAgICAgICAgICB0aGlzLmNhcmRzU2VydmljZS5kZWxldGVDYXJkKHtcbiAgICAgICAgICAgIHByb2dyYW06IGVudmlyb25tZW50LnByb2dyYW0sXG4gICAgICAgICAgICBjeWNsaXN0OiB0aGlzLmN5Y2xpc3RTdGF0ZS5jeWNsaXN0LmlkISxcbiAgICAgICAgICAgIGlkOiBjYXJkSWQsXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICBhd2FpdCB0aGlzLmdldFBheW1lbnRNZXRob2RzKClcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKGVycm9yKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgYXdhaXQgbG9hZGluZy5kaXNtaXNzKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBNYWtlIGdldENhcmRTdGF0ZSBwcml2YXRlIHNpbmNlIHdlIG5vdyB1c2UgdGhlIGNvbXB1dGVkIHNpZ25hbFxuICBwcml2YXRlIGdldENhcmRTdGF0ZShjYXJkOiBMaXN0Q2FyZHMyMDBSZXNwb25zZUFsbE9mRGF0YUlubmVyKTogQ2FyZERldGFpbHMge1xuICAgIGlmICghY2FyZCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RhdGU6ICd1bmtub3duJyxcbiAgICAgICAgZm9ybWF0dGVkTnVtYmVyOiAnJyxcbiAgICAgICAgZXhwaXJ5RGF0ZTogJycsXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKVxuICAgIGNvbnN0IGNhcmRFeHBEYXRlID0gbmV3IERhdGUoXG4gICAgICBjYXJkLmNhcmQ/LmV4cF95ZWFyIHx8IDAsXG4gICAgICBjYXJkLmNhcmQ/LmV4cF9tb250aCB8fCAxLFxuICAgICAgMCxcbiAgICAgIDIzLFxuICAgICAgNTksXG4gICAgICA1OVxuICAgIClcblxuICAgIGNvbnN0IGZvcm1hdHRlZE1vbnRoID0gKGNhcmQuY2FyZD8uZXhwX21vbnRoIHx8IDApXG4gICAgICAudG9TdHJpbmcoKVxuICAgICAgLnBhZFN0YXJ0KDIsICcwJylcbiAgICBjb25zdCBmb3JtYXR0ZWRFeHBpcnkgPSBgJHtmb3JtYXR0ZWRNb250aH0vJHtjYXJkLmNhcmQ/LmV4cF95ZWFyXG4gICAgICA/LnRvU3RyaW5nKClcbiAgICAgIC5zbGljZSgtMil9YFxuICAgIGNvbnN0IGZvcm1hdHRlZE51bWJlciA9IGBDQiAqKioqICR7Y2FyZC5jYXJkPy5sYXN0NH1gXG5cbiAgICBpZiAoY2FyZEV4cERhdGUgPCB0b2RheSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RhdGU6ICdleHBpcmVkJyxcbiAgICAgICAgZm9ybWF0dGVkTnVtYmVyLFxuICAgICAgICBleHBpcnlEYXRlOiBmb3JtYXR0ZWRFeHBpcnksXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgb25lTW9udGhGcm9tTm93ID0gbmV3IERhdGUoKVxuICAgIG9uZU1vbnRoRnJvbU5vdy5zZXRNb250aCh0b2RheS5nZXRNb250aCgpICsgMSlcbiAgICBpZiAoY2FyZEV4cERhdGUgPD0gb25lTW9udGhGcm9tTm93KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGF0ZTogJ2V4cGlyZV9zb29uJyxcbiAgICAgICAgZm9ybWF0dGVkTnVtYmVyLFxuICAgICAgICBleHBpcnlEYXRlOiBmb3JtYXR0ZWRFeHBpcnksXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXRlOiAndmFsaWQnLFxuICAgICAgZm9ybWF0dGVkTnVtYmVyLFxuICAgICAgZXhwaXJ5RGF0ZTogZm9ybWF0dGVkRXhwaXJ5LFxuICAgIH1cbiAgfVxuXG4gIHJlc2V0U3RhdGUoKSB7XG4gICAgdGhpcy5wYXltZW50TWV0aG9kc1N0YXRlLnNldCh7IHN0YXRlOiAnbG9hZGluZycgfSlcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlDTSxJQUFPLHlCQUFQLE1BQU8sdUJBQXFCO0VBMkVoQyxZQUNVLGNBQ0EsYUFDQSxrQkFDQSxnQkFDQSxhQUNBLGNBQWlDO0FBTGpDLFNBQUEsZUFBQTtBQUNBLFNBQUEsY0FBQTtBQUNBLFNBQUEsbUJBQUE7QUFDQSxTQUFBLGlCQUFBO0FBQ0EsU0FBQSxjQUFBO0FBQ0EsU0FBQSxlQUFBO0FBaEZWLFNBQUEsc0JBQXNCLE9BQTRCO01BQ2hELE9BQU87S0FDUjtBQUVELFNBQUEsdUJBQXVCLFNBQVMsTUFBSztBQUNuQyxZQUFNLFFBQVEsS0FBSyxvQkFBbUI7QUFDdEMsVUFBSSxNQUFNLFVBQVUsV0FBVztBQUM3QixlQUFPO01BQ1Q7QUFDQSxZQUFNLGVBQWUsS0FBSyxlQUFlLGFBQVk7QUFDckQsVUFBSSxhQUFhLFVBQVUsYUFBYSxhQUFhLFVBQVUsU0FBUztBQUN0RSxlQUFPO01BQ1Q7QUFDQSxhQUFPLE1BQU0sZUFBZSxLQUMxQixDQUFDLE9BQUk7QUFoRFg7QUFpRFEsa0JBQUcsU0FDSCwwQ0FBYSxRQUFRLGtCQUFyQixtQkFBb0MsU0FBcEMsbUJBQTJDLE9BQTNDLG1CQUErQyxhQUEvQyxtQkFDSSxxQkFE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
