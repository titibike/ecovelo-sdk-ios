import {
  Stripe,
  injectStripe
} from "./chunk-LZDBSS56.js";
import {
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
  LoadingController,
  catchError,
  from,
  map,
  setClassMetadata,
  switchMap,
  tap,
  throwError,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-DGENMXJW.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// src/app/services/external/stripe.service.ts
var _StripeService = class _StripeService {
  constructor(cardService, loadingCtrl, errorHandler) {
    this.cardService = cardService;
    this.loadingCtrl = loadingCtrl;
    this.errorHandler = errorHandler;
    this.stripe = injectStripe(environment.stripePublicKey);
  }
  getStripe() {
    return this.stripe;
  }
  initStripeElements(programId) {
    return this.cardService.createSetupIntent({
      program: programId,
      liveMode: environment.production
    }).pipe(map((res) => {
      if (res.client_secret) {
        return {
          locale: "fr",
          clientSecret: res.client_secret,
          appearance: {
            theme: "stripe"
          }
        };
      } else
        throw new Error("Client secret required");
    }), catchError((error) => {
      this.errorHandler.handleError(error);
      return throwError(() => error);
    }));
  }
  confirmSetup(elements, clientSecret, holderName) {
    return from(elements.submit()).pipe(
      // Chain with Stripe confirmation
      switchMap(() => this.stripe.confirmSetup({
        elements,
        clientSecret,
        confirmParams: {
          payment_method_data: {
            billing_details: {
              name: holderName
            }
          },
          return_url: location.href
        }
      })),
      // Handle successful result
      tap((result) => {
        var _a;
        if (result.error) {
          throw result.error;
        }
        if (((_a = result.setupIntent) == null ? void 0 : _a.status) === "succeeded") {
          window.location.href = location.href;
        }
      }),
      // Handle errors
      catchError((error) => {
        this.errorHandler.handleError(error);
        return throwError(() => error);
      })
    );
  }
  retrieveSetupIntent(clientSecret) {
    return this.stripe.retrieveSetupIntent(clientSecret).pipe(map((result) => result != null ? result : null), catchError((error) => {
      this.errorHandler.handleError(error);
      return throwError(() => error);
    }));
  }
  /**
   * Setup and process Apple Pay payment
   */
  setupApplePay(clientSecret, programName, merchantId) {
    return __async(this, null, function* () {
      try {
        if (!clientSecret) {
          this.errorHandler.handleError(new Error("Client secret required"));
          throw new Error("Client secret required");
        }
        yield Stripe.createApplePay({
          paymentIntentClientSecret: clientSecret,
          paymentSummaryItems: [
            {
              label: programName || "Paiement",
              amount: 0
            }
          ],
          merchantIdentifier: merchantId,
          countryCode: "FR",
          currency: "EUR"
        });
        const result = yield Stripe.presentApplePay();
        if (result.paymentResult === "applePayCompleted") {
          return "completed";
        } else if (result.paymentResult === "applePayFailed") {
          this.errorHandler.handleError(new Error("Apple pay payment failed"));
          return "failed";
        } else {
          return "cancelled";
        }
      } catch (error) {
        this.errorHandler.handleError(error);
        throw error;
      }
    });
  }
  /**
   * Setup and process Google Pay payment
   */
  setupGooglePay(clientSecret, programName) {
    return __async(this, null, function* () {
      try {
        if (!clientSecret) {
          this.errorHandler.handleError(new Error("Client secret required"));
          throw new Error("Client secret required");
        }
        yield Stripe.createPaymentSheet({
          setupIntentClientSecret: clientSecret,
          enableGooglePay: true,
          merchantDisplayName: programName || "Ecovelo",
          countryCode: "FR",
          currencyCode: "EUR"
        });
        const result = yield Stripe.presentPaymentSheet();
        if (result.paymentResult === "paymentSheetCompleted") {
          return "completed";
        } else if (result.paymentResult === "paymentSheetFailed") {
          this.errorHandler.handleError(new Error("Google pay payment failed"));
          return "failed";
        } else {
          return "cancelled";
        }
      } catch (error) {
        this.errorHandler.handleError(error);
        throw error;
      }
    });
  }
  /**
   * Check if Apple Pay is available on this device
   */
  isApplePayAvailable() {
    return __async(this, null, function* () {
      try {
        yield Stripe.isApplePayAvailable();
        return true;
      } catch {
        return false;
      }
    });
  }
  /**
   * Check if Google Pay is available on this device
   */
  isGooglePayAvailable() {
    return __async(this, null, function* () {
      try {
        yield Stripe.isGooglePayAvailable();
        return true;
      } catch {
        return false;
      }
    });
  }
};
_StripeService.\u0275fac = function StripeService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StripeService)(\u0275\u0275inject(CardsService), \u0275\u0275inject(LoadingController), \u0275\u0275inject(ErrorHandlerService));
};
_StripeService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StripeService, factory: _StripeService.\u0275fac, providedIn: "root" });
var StripeService = _StripeService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: CardsService }, { type: LoadingController }, { type: ErrorHandlerService }], null);
})();

export {
  StripeService
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9zZXJ2aWNlcy9leHRlcm5hbC9zdHJpcGUuc2VydmljZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBTdHJpcGVTZXJ2aWNlSW50ZXJmYWNlLCBpbmplY3RTdHJpcGUgfSBmcm9tICduZ3gtc3RyaXBlJ1xuaW1wb3J0IHsgU2V0dXBJbnRlbnRSZXN1bHQsIFN0cmlwZUVsZW1lbnRzT3B0aW9ucyB9IGZyb20gJ0BzdHJpcGUvc3RyaXBlLWpzJ1xuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICdzcmMvZW52aXJvbm1lbnRzL2Vudmlyb25tZW50J1xuaW1wb3J0IHsgQ2FyZHNTZXJ2aWNlIH0gZnJvbSAnc3JjL2FwaS1jeWNsaXN0J1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgbWFwLCB0aHJvd0Vycm9yLCBmcm9tIH0gZnJvbSAncnhqcydcbmltcG9ydCB7IGNhdGNoRXJyb3IsIHN3aXRjaE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnXG5pbXBvcnQgeyBMb2FkaW5nQ29udHJvbGxlciB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyL3N0YW5kYWxvbmUnXG5pbXBvcnQgeyBFcnJvckhhbmRsZXJTZXJ2aWNlIH0gZnJvbSAnLi4vdXRpbHMvZXJyb3ItaGFuZGxlci5zZXJ2aWNlJ1xuaW1wb3J0IHsgU3RyaXBlIH0gZnJvbSAnQGNhcGFjaXRvci1jb21tdW5pdHkvc3RyaXBlJ1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgU3RyaXBlU2VydmljZSB7XG4gIHByaXZhdGUgc3RyaXBlOiBTdHJpcGVTZXJ2aWNlSW50ZXJmYWNlID0gaW5qZWN0U3RyaXBlKFxuICAgIGVudmlyb25tZW50LnN0cmlwZVB1YmxpY0tleVxuICApXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjYXJkU2VydmljZTogQ2FyZHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgbG9hZGluZ0N0cmw6IExvYWRpbmdDb250cm9sbGVyLFxuICAgIHByaXZhdGUgZXJyb3JIYW5kbGVyOiBFcnJvckhhbmRsZXJTZXJ2aWNlXG4gICkge31cblxuICBnZXRTdHJpcGUoKTogU3RyaXBlU2VydmljZUludGVyZmFjZSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlXG4gIH1cblxuICBpbml0U3RyaXBlRWxlbWVudHMocHJvZ3JhbUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFN0cmlwZUVsZW1lbnRzT3B0aW9ucz4ge1xuICAgIHJldHVybiB0aGlzLmNhcmRTZXJ2aWNlXG4gICAgICAuY3JlYXRlU2V0dXBJbnRlbnQoe1xuICAgICAgICBwcm9ncmFtOiBwcm9ncmFtSWQsXG4gICAgICAgIGxpdmVNb2RlOiBlbnZpcm9ubWVudC5wcm9kdWN0aW9uLFxuICAgICAgfSlcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHJlcykgPT4ge1xuICAgICAgICAgIGlmIChyZXMuY2xpZW50X3NlY3JldCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbG9jYWxlOiAnZnInLFxuICAgICAgICAgICAgICBjbGllbnRTZWNyZXQ6IHJlcy5jbGllbnRfc2VjcmV0LFxuICAgICAgICAgICAgICBhcHBlYXJhbmNlOiB7XG4gICAgICAgICAgICAgICAgdGhlbWU6ICdzdHJpcGUnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSBhcyBTdHJpcGVFbGVtZW50c09wdGlvbnNcbiAgICAgICAgICB9IGVsc2UgdGhyb3cgbmV3IEVycm9yKCdDbGllbnQgc2VjcmV0IHJlcXVpcmVkJylcbiAgICAgICAgfSksXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoKCkgPT4gZXJyb3IpXG4gICAgICAgIH0pXG4gICAgICApXG4gIH1cblxuICBjb25maXJtU2V0dXAoXG4gICAgZWxlbWVudHM6IGFueSxcbiAgICBjbGllbnRTZWNyZXQ6IHN0cmluZyxcbiAgICBob2xkZXJOYW1lOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxTZXR1cEludGVudFJlc3VsdD4ge1xuICAgIC8vIFN1Ym1pdCBlbGVtZW50cyBmb3IgdmFsaWRhdGlvblxuICAgIHJldHVybiBmcm9tKGVsZW1lbnRzLnN1Ym1pdCgpKS5waXBlKFxuICAgICAgLy8gQ2hhaW4gd2l0aCBTdHJpcGUgY29uZmlybWF0aW9uXG4gICAgICBzd2l0Y2hNYXAoKCkgPT5cbiAgICAgICAgdGhpcy5zdHJpcGUuY29uZmlybVNldHVwKHtcbiAgICAgICAgICBlbGVtZW50cyxcbiAgICAgICAgICBjbGllbnRTZWNyZXQsXG4gICAgICAgICAgY29uZmlybVBhcmFtczoge1xuICAgICAgICAgICAgcGF5bWVudF9tZXRob2RfZGF0YToge1xuICAgICAgICAgICAgICBiaWxsaW5nX2RldGFpbHM6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBob2xkZXJOYW1lLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJldHVybl91cmw6IGxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgICAvLyBIYW5kbGUgc3VjY2Vzc2Z1bCByZXN1bHRcbiAgICAgIHRhcCgocmVzdWx0OiBTZXR1cEludGVudFJlc3VsdCkgPT4ge1xuICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB7XG4gICAgICAgICAgdGhyb3cgcmVzdWx0LmVycm9yXG4gICAgICAgIH1cbiAgICAgICAgLy8gU2kgcGFzIGQnZXJyZXVyLCBvbiBhIGZvcmPDqW1lbnQgdW4gc2V0dXBJbnRlbnRcbiAgICAgICAgaWYgKHJlc3VsdC5zZXR1cEludGVudD8uc3RhdHVzID09PSAnc3VjY2VlZGVkJykge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gbG9jYXRpb24uaHJlZlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIC8vIEhhbmRsZSBlcnJvcnNcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKCgpID0+IGVycm9yKVxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICByZXRyaWV2ZVNldHVwSW50ZW50KFxuICAgIGNsaWVudFNlY3JldDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8U2V0dXBJbnRlbnRSZXN1bHQgfCBudWxsPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaXBlLnJldHJpZXZlU2V0dXBJbnRlbnQoY2xpZW50U2VjcmV0KS5waXBlKFxuICAgICAgbWFwKChyZXN1bHQpID0+IHJlc3VsdCA/PyBudWxsKSxcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKCgpID0+IGVycm9yKVxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICAvKipcbiAgICogU2V0dXAgYW5kIHByb2Nlc3MgQXBwbGUgUGF5IHBheW1lbnRcbiAgICovXG4gIGFzeW5jIHNldHVwQXBwbGVQYXkoXG4gICAgY2xpZW50U2VjcmV0OiBzdHJpbmcsXG4gICAgcHJvZ3JhbU5hbWU6IHN0cmluZyxcbiAgICBtZXJjaGFudElkOiBzdHJpbmdcbiAgKTogUHJvbWlzZTwnY29tcGxldGVkJyB8ICdmYWlsZWQnIHwgJ2NhbmNlbGxlZCc+IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFjbGllbnRTZWNyZXQpIHtcbiAgICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IobmV3IEVycm9yKCdDbGllbnQgc2VjcmV0IHJlcXVpcmVkJykpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ2xpZW50IHNlY3JldCByZXF1aXJlZCcpXG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0ZSBBcHBsZSBQYXlcbiAgICAgIGF3YWl0IFN0cmlwZS5jcmVhdGVBcHBsZVBheSh7XG4gICAgICAgIHBheW1lbnRJbnRlbnRDbGllbnRTZWNyZXQ6IGNsaWVudFNlY3JldCxcbiAgICAgICAgcGF5bWVudFN1bW1hcnlJdGVtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiBwcm9ncmFtTmFtZSB8fCAnUGFpZW1lbnQnLFxuICAgICAgICAgICAgYW1vdW50OiAwLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIG1lcmNoYW50SWRlbnRpZmllcjogbWVyY2hhbnRJZCxcbiAgICAgICAgY291bnRyeUNvZGU6ICdGUicsXG4gICAgICAgIGN1cnJlbmN5OiAnRVVSJyxcbiAgICAgIH0pXG5cbiAgICAgIC8vIFByZXNlbnQgQXBwbGUgUGF5XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBTdHJpcGUucHJlc2VudEFwcGxlUGF5KClcblxuICAgICAgaWYgKHJlc3VsdC5wYXltZW50UmVzdWx0ID09PSAnYXBwbGVQYXlDb21wbGV0ZWQnKSB7XG4gICAgICAgIHJldHVybiAnY29tcGxldGVkJ1xuICAgICAgfSBlbHNlIGlmIChyZXN1bHQucGF5bWVudFJlc3VsdCA9PT0gJ2FwcGxlUGF5RmFpbGVkJykge1xuICAgICAgICB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihuZXcgRXJyb3IoJ0FwcGxlIHBheSBwYXltZW50IGZhaWxlZCcpKVxuICAgICAgICByZXR1cm4gJ2ZhaWxlZCdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIENhbmNlbGxlZCBieSB1c2VyXG4gICAgICAgIHJldHVybiAnY2FuY2VsbGVkJ1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKGVycm9yKVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0dXAgYW5kIHByb2Nlc3MgR29vZ2xlIFBheSBwYXltZW50XG4gICAqL1xuICBhc3luYyBzZXR1cEdvb2dsZVBheShcbiAgICBjbGllbnRTZWNyZXQ6IHN0cmluZyxcbiAgICBwcm9ncmFtTmFtZTogc3RyaW5nXG4gICk6IFByb21pc2U8J2NvbXBsZXRlZCcgfCAnZmFpbGVkJyB8ICdjYW5jZWxsZWQnPiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghY2xpZW50U2VjcmV0KSB7XG4gICAgICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKG5ldyBFcnJvcignQ2xpZW50IHNlY3JldCByZXF1aXJlZCcpKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NsaWVudCBzZWNyZXQgcmVxdWlyZWQnKVxuICAgICAgfVxuXG4gICAgICBhd2FpdCBTdHJpcGUuY3JlYXRlUGF5bWVudFNoZWV0KHtcbiAgICAgICAgc2V0dXBJbnRlbnRDbGllbnRTZWNyZXQ6IGNsaWVudFNlY3JldCxcbiAgICAgICAgZW5hYmxlR29vZ2xlUGF5OiB0cnVlLFxuICAgICAgICBtZXJjaGFudERpc3BsYXlOYW1lOiBwcm9ncmFtTmFtZSB8fCAnRWNvdmVsbycsXG4gICAgICAgIGNvdW50cnlDb2RlOiAnRlInLFxuICAgICAgICBjdXJyZW5jeUNvZGU6ICdFVVInLFxuICAgICAgfSlcblxuICAgICAgLy8gUHJlc2VudCBHb29nbGUgUGF5XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBTdHJpcGUucHJlc2VudFBheW1lbnRTaGVldCgpXG5cbiAgICAgIGlmIChyZXN1bHQucGF5bWVudFJlc3VsdCA9PT0gJ3BheW1lbnRTaGVldENvbXBsZXRlZCcpIHtcbiAgICAgICAgcmV0dXJuICdjb21wbGV0ZWQnXG4gICAgICB9IGVsc2UgaWYgKHJlc3VsdC5wYXltZW50UmVzdWx0ID09PSAncGF5bWVudFNoZWV0RmFpbGVkJykge1xuICAgICAgICB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihuZXcgRXJyb3IoJ0dvb2dsZSBwYXkgcGF5bWVudCBmYWlsZWQnKSlcbiAgICAgICAgcmV0dXJuICdmYWlsZWQnXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBDYW5jZWxsZWQgYnkgdXNlclxuICAgICAgICByZXR1cm4gJ2NhbmNlbGxlZCdcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihlcnJvcilcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIEFwcGxlIFBheSBpcyBhdmFpbGFibGUgb24gdGhpcyBkZXZpY2VcbiAgICovXG4gIGFzeW5jIGlzQXBwbGVQYXlBdmFpbGFibGUoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IFN0cmlwZS5pc0FwcGxlUGF5QXZhaWxhYmxlKClcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgR29vZ2xlIFBheSBpcyBhdmFpbGFibGUgb24gdGhpcyBkZXZpY2VcbiAgICovXG4gIGFzeW5jIGlzR29vZ2xlUGF5QXZhaWxhYmxlKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBTdHJpcGUuaXNHb29nbGVQYXlBdmFpbGFibGUoKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWNNLElBQU8saUJBQVAsTUFBTyxlQUFhO0VBS3hCLFlBQ1UsYUFDQSxhQUNBLGNBQWlD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
