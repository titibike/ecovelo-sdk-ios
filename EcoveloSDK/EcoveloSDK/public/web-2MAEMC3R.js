import {
  ApplePayEventsEnum,
  GooglePayEventsEnum,
  PaymentFlowEventsEnum,
  PaymentSheetEventsEnum
} from "./chunk-EYZBHAOK.js";
import {
  WebPlugin
} from "./chunk-KGBWUDTS.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// node_modules/@capacitor-community/stripe/dist/esm/shared/platform.js
var getPlatforms = (win) => setupPlatforms(win);
var isPlatform = (winOrPlatform, platform) => {
  if (typeof winOrPlatform === "string") {
    platform = winOrPlatform;
    winOrPlatform = void 0;
  }
  return getPlatforms(winOrPlatform).includes(platform);
};
var setupPlatforms = (win = window) => {
  if (typeof win === "undefined") {
    return [];
  }
  win.Ionic = win.Ionic || {};
  let platforms = win.Ionic.platforms;
  if (platforms == null) {
    platforms = win.Ionic.platforms = detectPlatforms(win);
    platforms.forEach((p) => win.document.documentElement.classList.add(`plt-${p}`));
  }
  return platforms;
};
var detectPlatforms = (win) => Object.keys(PLATFORMS_MAP).filter((p) => PLATFORMS_MAP[p](win));
var isMobileWeb = (win) => isMobile(win) && !isHybrid(win);
var isIpad = (win) => {
  if (testUserAgent(win, /iPad/i)) {
    return true;
  }
  if (testUserAgent(win, /Macintosh/i) && isMobile(win)) {
    return true;
  }
  return false;
};
var isIphone = (win) => testUserAgent(win, /iPhone/i);
var isIOS = (win) => testUserAgent(win, /iPhone|iPod/i) || isIpad(win);
var isAndroid = (win) => testUserAgent(win, /android|sink/i);
var isAndroidTablet = (win) => {
  return isAndroid(win) && !testUserAgent(win, /mobile/i);
};
var isPhablet = (win) => {
  const width = win.innerWidth;
  const height = win.innerHeight;
  const smallest = Math.min(width, height);
  const largest = Math.max(width, height);
  return smallest > 390 && smallest < 520 && largest > 620 && largest < 800;
};
var isTablet = (win) => {
  const width = win.innerWidth;
  const height = win.innerHeight;
  const smallest = Math.min(width, height);
  const largest = Math.max(width, height);
  return isIpad(win) || isAndroidTablet(win) || smallest > 460 && smallest < 820 && largest > 780 && largest < 1400;
};
var isMobile = (win) => matchMedia(win, "(any-pointer:coarse)");
var isDesktop = (win) => !isMobile(win);
var isHybrid = (win) => isCordova(win) || isCapacitorNative(win);
var isCordova = (win) => !!(win["cordova"] || win["phonegap"] || win["PhoneGap"]);
var isCapacitorNative = (win) => {
  const capacitor = win["Capacitor"];
  return !!(capacitor === null || capacitor === void 0 ? void 0 : capacitor.isNative);
};
var isElectron = (win) => testUserAgent(win, /electron/i);
var isPWA = (win) => !!(win.matchMedia("(display-mode: standalone)").matches || win.navigator.standalone);
var testUserAgent = (win, expr) => expr.test(win.navigator.userAgent);
var matchMedia = (win, query) => win.matchMedia(query).matches;
var PLATFORMS_MAP = {
  "ipad": isIpad,
  "iphone": isIphone,
  "ios": isIOS,
  "android": isAndroid,
  "phablet": isPhablet,
  "tablet": isTablet,
  "cordova": isCordova,
  "capacitor": isCapacitorNative,
  "electron": isElectron,
  "pwa": isPWA,
  "mobile": isMobile,
  "mobileweb": isMobileWeb,
  "desktop": isDesktop,
  "hybrid": isHybrid
};

// node_modules/@capacitor-community/stripe/dist/esm/web.js
var StripeWeb = class extends WebPlugin {
  initialize(options) {
    return __async(this, null, function* () {
      if (typeof options.publishableKey !== "string" || options.publishableKey.trim().length === 0) {
        throw new Error("you must provide a valid key");
      }
      this.publishableKey = options.publishableKey;
      if (options.stripeAccount) {
        this.stripeAccount = options.stripeAccount;
      }
    });
  }
  createPaymentSheet(options) {
    return __async(this, null, function* () {
      var _a;
      if (!this.publishableKey) {
        this.notifyListeners(PaymentSheetEventsEnum.FailedToLoad, null);
        return;
      }
      this.paymentSheet = document.createElement("stripe-payment-sheet");
      (_a = document.querySelector("body")) === null || _a === void 0 ? void 0 : _a.appendChild(this.paymentSheet);
      yield customElements.whenDefined("stripe-payment-sheet");
      this.paymentSheet.publishableKey = this.publishableKey;
      if (this.stripeAccount) {
        this.paymentSheet.stripeAccount = this.stripeAccount;
      }
      this.paymentSheet.applicationName = "@capacitor-community/stripe";
      this.paymentSheet.intentClientSecret = options.paymentIntentClientSecret;
      this.paymentSheet.intentType = "payment";
      if (options.withZipCode !== void 0) {
        this.paymentSheet.zip = options.withZipCode;
      }
      this.notifyListeners(PaymentSheetEventsEnum.Loaded, null);
    });
  }
  presentPaymentSheet() {
    return __async(this, null, function* () {
      if (!this.paymentSheet) {
        throw new Error();
      }
      const props = yield this.paymentSheet.present();
      if (props === void 0) {
        this.notifyListeners(PaymentSheetEventsEnum.Canceled, null);
        return {
          paymentResult: PaymentSheetEventsEnum.Canceled
        };
      }
      const {
        detail: {
          stripe,
          cardNumberElement
        }
      } = props;
      const result = yield stripe.createPaymentMethod({
        type: "card",
        card: cardNumberElement
      });
      this.paymentSheet.updateProgress("success");
      this.paymentSheet.remove();
      if (result.error !== void 0) {
        this.notifyListeners(PaymentSheetEventsEnum.Failed, null);
        return {
          paymentResult: PaymentSheetEventsEnum.Failed
        };
      }
      this.notifyListeners(PaymentSheetEventsEnum.Completed, null);
      return {
        paymentResult: PaymentSheetEventsEnum.Completed
      };
    });
  }
  createPaymentFlow(options) {
    return __async(this, null, function* () {
      var _a;
      if (!this.publishableKey) {
        this.notifyListeners(PaymentFlowEventsEnum.FailedToLoad, null);
        return;
      }
      this.paymentSheet = document.createElement("stripe-payment-sheet");
      (_a = document.querySelector("body")) === null || _a === void 0 ? void 0 : _a.appendChild(this.paymentSheet);
      yield customElements.whenDefined("stripe-payment-sheet");
      this.paymentSheet.publishableKey = this.publishableKey;
      if (this.stripeAccount) {
        this.paymentSheet.stripeAccount = this.stripeAccount;
      }
      this.paymentSheet.applicationName = "@capacitor-community/stripe";
      if (options.hasOwnProperty("paymentIntentClientSecret")) {
        this.paymentSheet.intentType = "payment";
        this.paymentSheet.intentClientSecret = options.paymentIntentClientSecret;
      } else {
        this.paymentSheet.intentType = "setup";
        this.paymentSheet.intentClientSecret = options.setupIntentClientSecret;
      }
      if (options.withZipCode !== void 0) {
        this.paymentSheet.zip = options.withZipCode;
      }
      if (isPlatform(window, "ios")) {
        this.paymentSheet.buttonLabel = "Add card";
        this.paymentSheet.sheetTitle = "Add a card";
      } else {
        this.paymentSheet.buttonLabel = "Add";
      }
      this.notifyListeners(PaymentFlowEventsEnum.Loaded, null);
    });
  }
  presentPaymentFlow() {
    return __async(this, null, function* () {
      if (!this.paymentSheet) {
        throw new Error();
      }
      this.notifyListeners(PaymentFlowEventsEnum.Opened, null);
      const props = yield this.paymentSheet.present().catch(() => void 0);
      if (props === void 0) {
        this.notifyListeners(PaymentFlowEventsEnum.Canceled, null);
        throw new Error();
      }
      const {
        detail: {
          stripe,
          cardNumberElement
        }
      } = props;
      const {
        token
      } = yield stripe.createToken(cardNumberElement);
      if (token === void 0 || token.card === void 0) {
        throw new Error();
      }
      this.flowStripe = stripe;
      this.flowCardNumberElement = cardNumberElement;
      this.notifyListeners(PaymentFlowEventsEnum.Created, {
        cardNumber: token.card.last4
      });
      return {
        cardNumber: token.card.last4
      };
    });
  }
  confirmPaymentFlow() {
    return __async(this, null, function* () {
      if (!this.paymentSheet || !this.flowStripe || !this.flowCardNumberElement) {
        throw new Error();
      }
      const result = yield this.flowStripe.createPaymentMethod({
        type: "card",
        card: this.flowCardNumberElement
      });
      if (result.error !== void 0) {
        this.notifyListeners(PaymentFlowEventsEnum.Failed, null);
      }
      this.paymentSheet.updateProgress("success");
      this.paymentSheet.remove();
      this.notifyListeners(PaymentFlowEventsEnum.Completed, null);
      return {
        paymentResult: PaymentFlowEventsEnum.Completed
      };
    });
  }
  isApplePayAvailable() {
    return this.isAvailable("applePay");
  }
  createApplePay(createApplePayOption) {
    return __async(this, null, function* () {
      if (!this.publishableKey) {
        this.notifyListeners(ApplePayEventsEnum.FailedToLoad, null);
        return;
      }
      this.requestApplePay = yield this.createPaymentRequestButton();
      this.requestApplePayOptions = createApplePayOption;
      this.notifyListeners(ApplePayEventsEnum.Loaded, null);
    });
  }
  presentApplePay() {
    return this.presentPaymentRequestButton("applePay", this.requestApplePay, this.requestApplePayOptions, ApplePayEventsEnum);
  }
  isGooglePayAvailable() {
    return this.isAvailable("googlePay");
  }
  createGooglePay(createGooglePayOption) {
    return __async(this, null, function* () {
      if (!this.publishableKey) {
        this.notifyListeners(GooglePayEventsEnum.FailedToLoad, null);
        return;
      }
      this.requestGooglePay = yield this.createPaymentRequestButton();
      this.requestGooglePayOptions = createGooglePayOption;
      this.notifyListeners(GooglePayEventsEnum.Loaded, null);
    });
  }
  presentGooglePay() {
    return this.presentPaymentRequestButton("googlePay", this.requestGooglePay, this.requestGooglePayOptions, GooglePayEventsEnum);
  }
  isAvailable(type) {
    return __async(this, null, function* () {
      var _a;
      const requestButton = document.createElement("stripe-payment-request-button");
      requestButton.id = `isAvailable-${type}`;
      (_a = document.querySelector("body")) === null || _a === void 0 ? void 0 : _a.appendChild(requestButton);
      yield customElements.whenDefined("stripe-payment-request-button");
      if (this.publishableKey) {
        requestButton.publishableKey = this.publishableKey;
      }
      if (this.stripeAccount) {
        requestButton.stripeAccount = this.stripeAccount;
      }
      requestButton.applicationName = "@capacitor-community/stripe";
      return yield requestButton.isAvailable(type).finally(() => requestButton.remove());
    });
  }
  createPaymentRequestButton() {
    return __async(this, null, function* () {
      var _a;
      const requestButton = document.createElement("stripe-payment-request-button");
      (_a = document.querySelector("body")) === null || _a === void 0 ? void 0 : _a.appendChild(requestButton);
      yield customElements.whenDefined("stripe-payment-request-button");
      if (this.publishableKey) {
        requestButton.publishableKey = this.publishableKey;
      }
      if (this.stripeAccount) {
        requestButton.stripeAccount = this.stripeAccount;
      }
      requestButton.applicationName = "@capacitor-community/stripe";
      return requestButton;
    });
  }
  presentPaymentRequestButton(type, requestButton, requestButtonOptions, EventsEnum) {
    return __async(this, null, function* () {
      return new Promise((resolve) => __async(this, null, function* () {
        if (requestButton === void 0 || requestButtonOptions === void 0 || this.publishableKey === void 0) {
          this.notifyListeners(EventsEnum.Failed, null);
          return resolve({
            paymentResult: EventsEnum.Failed
          });
        }
        yield requestButton.setPaymentRequestOption({
          country: requestButtonOptions.countryCode.toUpperCase(),
          currency: requestButtonOptions.currency.toLowerCase(),
          total: requestButtonOptions.paymentSummaryItems[requestButtonOptions.paymentSummaryItems.length - 1],
          disableWallets: type === "applePay" ? ["googlePay", "browserCard"] : ["applePay", "browserCard"],
          requestPayerName: true,
          requestPayerEmail: true
        });
        const intentClientSecret = requestButtonOptions.paymentIntentClientSecret;
        yield requestButton.setPaymentMethodEventHandler((event, stripe) => __async(this, null, function* () {
          const {
            paymentIntent,
            error: confirmError
          } = yield stripe.confirmCardPayment(intentClientSecret, {
            payment_method: event.paymentMethod.id
          }, {
            handleActions: false
          });
          if (confirmError) {
            event.complete("fail");
            this.notifyListeners(EventsEnum.Failed, confirmError);
            return resolve({
              paymentResult: EventsEnum.Failed
            });
          }
          if ((paymentIntent === null || paymentIntent === void 0 ? void 0 : paymentIntent.status) === "requires_action") {
            const {
              error: confirmError2
            } = yield stripe.confirmCardPayment(intentClientSecret);
            if (confirmError2) {
              event.complete("fail");
              this.notifyListeners(EventsEnum.Failed, confirmError2);
              return resolve({
                paymentResult: EventsEnum.Failed
              });
            }
          }
          event.complete("success");
          this.notifyListeners(EventsEnum.Completed, null);
          return resolve({
            paymentResult: EventsEnum.Completed
          });
        }));
        yield requestButton.initStripe(this.publishableKey, {
          stripeAccount: this.stripeAccount,
          showButton: false
        });
      }));
    });
  }
};
export {
  StripeWeb
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY2FwYWNpdG9yLWNvbW11bml0eS9zdHJpcGUvZGlzdC9lc20vc2hhcmVkL3BsYXRmb3JtLmpzIiwibm9kZV9tb2R1bGVzL0BjYXBhY2l0b3ItY29tbXVuaXR5L3N0cmlwZS9kaXN0L2VzbS93ZWIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdXJsIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL21haW4vY29yZS9zcmMvdXRpbHMvcGxhdGZvcm0udHNcbiAqIFNvIGBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55YCBgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvbmAgaXMgZGlzYWJsZWQgaGVyZVxuICovXG5leHBvcnQgY29uc3QgZ2V0UGxhdGZvcm1zID0gd2luID0+IHNldHVwUGxhdGZvcm1zKHdpbik7XG5leHBvcnQgY29uc3QgaXNQbGF0Zm9ybSA9ICh3aW5PclBsYXRmb3JtLCBwbGF0Zm9ybSkgPT4ge1xuICBpZiAodHlwZW9mIHdpbk9yUGxhdGZvcm0gPT09ICdzdHJpbmcnKSB7XG4gICAgcGxhdGZvcm0gPSB3aW5PclBsYXRmb3JtO1xuICAgIHdpbk9yUGxhdGZvcm0gPSB1bmRlZmluZWQ7XG4gIH1cbiAgcmV0dXJuIGdldFBsYXRmb3Jtcyh3aW5PclBsYXRmb3JtKS5pbmNsdWRlcyhwbGF0Zm9ybSk7XG59O1xuZXhwb3J0IGNvbnN0IHNldHVwUGxhdGZvcm1zID0gKHdpbiA9IHdpbmRvdykgPT4ge1xuICBpZiAodHlwZW9mIHdpbiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgd2luLklvbmljID0gd2luLklvbmljIHx8IHt9O1xuICBsZXQgcGxhdGZvcm1zID0gd2luLklvbmljLnBsYXRmb3JtcztcbiAgaWYgKHBsYXRmb3JtcyA9PSBudWxsKSB7XG4gICAgcGxhdGZvcm1zID0gd2luLklvbmljLnBsYXRmb3JtcyA9IGRldGVjdFBsYXRmb3Jtcyh3aW4pO1xuICAgIHBsYXRmb3Jtcy5mb3JFYWNoKHAgPT4gd2luLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKGBwbHQtJHtwfWApKTtcbiAgfVxuICByZXR1cm4gcGxhdGZvcm1zO1xufTtcbmNvbnN0IGRldGVjdFBsYXRmb3JtcyA9IHdpbiA9PiBPYmplY3Qua2V5cyhQTEFURk9STVNfTUFQKS5maWx0ZXIocCA9PiBQTEFURk9STVNfTUFQW3BdKHdpbikpO1xuY29uc3QgaXNNb2JpbGVXZWIgPSB3aW4gPT4gaXNNb2JpbGUod2luKSAmJiAhaXNIeWJyaWQod2luKTtcbmNvbnN0IGlzSXBhZCA9IHdpbiA9PiB7XG4gIC8vIGlPUyAxMiBhbmQgYmVsb3dcbiAgaWYgKHRlc3RVc2VyQWdlbnQod2luLCAvaVBhZC9pKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8vIGlPUyAxMytcbiAgaWYgKHRlc3RVc2VyQWdlbnQod2luLCAvTWFjaW50b3NoL2kpICYmIGlzTW9iaWxlKHdpbikpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuY29uc3QgaXNJcGhvbmUgPSB3aW4gPT4gdGVzdFVzZXJBZ2VudCh3aW4sIC9pUGhvbmUvaSk7XG5jb25zdCBpc0lPUyA9IHdpbiA9PiB0ZXN0VXNlckFnZW50KHdpbiwgL2lQaG9uZXxpUG9kL2kpIHx8IGlzSXBhZCh3aW4pO1xuY29uc3QgaXNBbmRyb2lkID0gd2luID0+IHRlc3RVc2VyQWdlbnQod2luLCAvYW5kcm9pZHxzaW5rL2kpO1xuY29uc3QgaXNBbmRyb2lkVGFibGV0ID0gd2luID0+IHtcbiAgcmV0dXJuIGlzQW5kcm9pZCh3aW4pICYmICF0ZXN0VXNlckFnZW50KHdpbiwgL21vYmlsZS9pKTtcbn07XG5jb25zdCBpc1BoYWJsZXQgPSB3aW4gPT4ge1xuICBjb25zdCB3aWR0aCA9IHdpbi5pbm5lcldpZHRoO1xuICBjb25zdCBoZWlnaHQgPSB3aW4uaW5uZXJIZWlnaHQ7XG4gIGNvbnN0IHNtYWxsZXN0ID0gTWF0aC5taW4od2lkdGgsIGhlaWdodCk7XG4gIGNvbnN0IGxhcmdlc3QgPSBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KTtcbiAgcmV0dXJuIHNtYWxsZXN0ID4gMzkwICYmIHNtYWxsZXN0IDwgNTIwICYmIGxhcmdlc3QgPiA2MjAgJiYgbGFyZ2VzdCA8IDgwMDtcbn07XG5jb25zdCBpc1RhYmxldCA9IHdpbiA9PiB7XG4gIGNvbnN0IHdpZHRoID0gd2luLmlubmVyV2lkdGg7XG4gIGNvbnN0IGhlaWdodCA9IHdpbi5pbm5lckhlaWdodDtcbiAgY29uc3Qgc21hbGxlc3QgPSBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KTtcbiAgY29uc3QgbGFyZ2VzdCA9IE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpO1xuICByZXR1cm4gaXNJcGFkKHdpbikgfHwgaXNBbmRyb2lkVGFibGV0KHdpbikgfHwgc21hbGxlc3QgPiA0NjAgJiYgc21hbGxlc3QgPCA4MjAgJiYgbGFyZ2VzdCA+IDc4MCAmJiBsYXJnZXN0IDwgMTQwMDtcbn07XG5jb25zdCBpc01vYmlsZSA9IHdpbiA9PiBtYXRjaE1lZGlhKHdpbiwgJyhhbnktcG9pbnRlcjpjb2Fyc2UpJyk7XG5jb25zdCBpc0Rlc2t0b3AgPSB3aW4gPT4gIWlzTW9iaWxlKHdpbik7XG5jb25zdCBpc0h5YnJpZCA9IHdpbiA9PiBpc0NvcmRvdmEod2luKSB8fCBpc0NhcGFjaXRvck5hdGl2ZSh3aW4pO1xuY29uc3QgaXNDb3Jkb3ZhID0gd2luID0+ICEhKHdpblsnY29yZG92YSddIHx8IHdpblsncGhvbmVnYXAnXSB8fCB3aW5bJ1Bob25lR2FwJ10pO1xuY29uc3QgaXNDYXBhY2l0b3JOYXRpdmUgPSB3aW4gPT4ge1xuICBjb25zdCBjYXBhY2l0b3IgPSB3aW5bJ0NhcGFjaXRvciddO1xuICByZXR1cm4gISEoY2FwYWNpdG9yID09PSBudWxsIHx8IGNhcGFjaXRvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2FwYWNpdG9yLmlzTmF0aXZlKTtcbn07XG5jb25zdCBpc0VsZWN0cm9uID0gd2luID0+IHRlc3RVc2VyQWdlbnQod2luLCAvZWxlY3Ryb24vaSk7XG5jb25zdCBpc1BXQSA9IHdpbiA9PiAhISh3aW4ubWF0Y2hNZWRpYSgnKGRpc3BsYXktbW9kZTogc3RhbmRhbG9uZSknKS5tYXRjaGVzIHx8IHdpbi5uYXZpZ2F0b3Iuc3RhbmRhbG9uZSk7XG5leHBvcnQgY29uc3QgdGVzdFVzZXJBZ2VudCA9ICh3aW4sIGV4cHIpID0+IGV4cHIudGVzdCh3aW4ubmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5jb25zdCBtYXRjaE1lZGlhID0gKHdpbiwgcXVlcnkpID0+IHdpbi5tYXRjaE1lZGlhKHF1ZXJ5KS5tYXRjaGVzO1xuY29uc3QgUExBVEZPUk1TX01BUCA9IHtcbiAgJ2lwYWQnOiBpc0lwYWQsXG4gICdpcGhvbmUnOiBpc0lwaG9uZSxcbiAgJ2lvcyc6IGlzSU9TLFxuICAnYW5kcm9pZCc6IGlzQW5kcm9pZCxcbiAgJ3BoYWJsZXQnOiBpc1BoYWJsZXQsXG4gICd0YWJsZXQnOiBpc1RhYmxldCxcbiAgJ2NvcmRvdmEnOiBpc0NvcmRvdmEsXG4gICdjYXBhY2l0b3InOiBpc0NhcGFjaXRvck5hdGl2ZSxcbiAgJ2VsZWN0cm9uJzogaXNFbGVjdHJvbixcbiAgJ3B3YSc6IGlzUFdBLFxuICAnbW9iaWxlJzogaXNNb2JpbGUsXG4gICdtb2JpbGV3ZWInOiBpc01vYmlsZVdlYixcbiAgJ2Rlc2t0b3AnOiBpc0Rlc2t0b3AsXG4gICdoeWJyaWQnOiBpc0h5YnJpZFxufTtcbiIsImltcG9ydCB7IFdlYlBsdWdpbiB9IGZyb20gJ0BjYXBhY2l0b3IvY29yZSc7XG5pbXBvcnQgeyBBcHBsZVBheUV2ZW50c0VudW0sIEdvb2dsZVBheUV2ZW50c0VudW0sIFBheW1lbnRGbG93RXZlbnRzRW51bSwgUGF5bWVudFNoZWV0RXZlbnRzRW51bSB9IGZyb20gJy4vZGVmaW5pdGlvbnMnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybSB9IGZyb20gJy4vc2hhcmVkL3BsYXRmb3JtJztcbmV4cG9ydCBjbGFzcyBTdHJpcGVXZWIgZXh0ZW5kcyBXZWJQbHVnaW4ge1xuICBhc3luYyBpbml0aWFsaXplKG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMucHVibGlzaGFibGVLZXkgIT09ICdzdHJpbmcnIHx8IG9wdGlvbnMucHVibGlzaGFibGVLZXkudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCd5b3UgbXVzdCBwcm92aWRlIGEgdmFsaWQga2V5Jyk7XG4gICAgfVxuICAgIHRoaXMucHVibGlzaGFibGVLZXkgPSBvcHRpb25zLnB1Ymxpc2hhYmxlS2V5O1xuICAgIGlmIChvcHRpb25zLnN0cmlwZUFjY291bnQpIHtcbiAgICAgIHRoaXMuc3RyaXBlQWNjb3VudCA9IG9wdGlvbnMuc3RyaXBlQWNjb3VudDtcbiAgICB9XG4gIH1cbiAgYXN5bmMgY3JlYXRlUGF5bWVudFNoZWV0KG9wdGlvbnMpIHtcbiAgICB2YXIgX2E7XG4gICAgaWYgKCF0aGlzLnB1Ymxpc2hhYmxlS2V5KSB7XG4gICAgICB0aGlzLm5vdGlmeUxpc3RlbmVycyhQYXltZW50U2hlZXRFdmVudHNFbnVtLkZhaWxlZFRvTG9hZCwgbnVsbCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucGF5bWVudFNoZWV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3RyaXBlLXBheW1lbnQtc2hlZXQnKTtcbiAgICAoX2EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hcHBlbmRDaGlsZCh0aGlzLnBheW1lbnRTaGVldCk7XG4gICAgYXdhaXQgY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQoJ3N0cmlwZS1wYXltZW50LXNoZWV0Jyk7XG4gICAgdGhpcy5wYXltZW50U2hlZXQucHVibGlzaGFibGVLZXkgPSB0aGlzLnB1Ymxpc2hhYmxlS2V5O1xuICAgIGlmICh0aGlzLnN0cmlwZUFjY291bnQpIHtcbiAgICAgIHRoaXMucGF5bWVudFNoZWV0LnN0cmlwZUFjY291bnQgPSB0aGlzLnN0cmlwZUFjY291bnQ7XG4gICAgfVxuICAgIHRoaXMucGF5bWVudFNoZWV0LmFwcGxpY2F0aW9uTmFtZSA9ICdAY2FwYWNpdG9yLWNvbW11bml0eS9zdHJpcGUnO1xuICAgIHRoaXMucGF5bWVudFNoZWV0LmludGVudENsaWVudFNlY3JldCA9IG9wdGlvbnMucGF5bWVudEludGVudENsaWVudFNlY3JldDtcbiAgICB0aGlzLnBheW1lbnRTaGVldC5pbnRlbnRUeXBlID0gJ3BheW1lbnQnO1xuICAgIGlmIChvcHRpb25zLndpdGhaaXBDb2RlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMucGF5bWVudFNoZWV0LnppcCA9IG9wdGlvbnMud2l0aFppcENvZGU7XG4gICAgfVxuICAgIHRoaXMubm90aWZ5TGlzdGVuZXJzKFBheW1lbnRTaGVldEV2ZW50c0VudW0uTG9hZGVkLCBudWxsKTtcbiAgfVxuICBhc3luYyBwcmVzZW50UGF5bWVudFNoZWV0KCkge1xuICAgIGlmICghdGhpcy5wYXltZW50U2hlZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgIH1cbiAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMucGF5bWVudFNoZWV0LnByZXNlbnQoKTtcbiAgICBpZiAocHJvcHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5ub3RpZnlMaXN0ZW5lcnMoUGF5bWVudFNoZWV0RXZlbnRzRW51bS5DYW5jZWxlZCwgbnVsbCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYXltZW50UmVzdWx0OiBQYXltZW50U2hlZXRFdmVudHNFbnVtLkNhbmNlbGVkXG4gICAgICB9O1xuICAgIH1cbiAgICBjb25zdCB7XG4gICAgICBkZXRhaWw6IHtcbiAgICAgICAgc3RyaXBlLFxuICAgICAgICBjYXJkTnVtYmVyRWxlbWVudFxuICAgICAgfVxuICAgIH0gPSBwcm9wcztcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzdHJpcGUuY3JlYXRlUGF5bWVudE1ldGhvZCh7XG4gICAgICB0eXBlOiAnY2FyZCcsXG4gICAgICBjYXJkOiBjYXJkTnVtYmVyRWxlbWVudFxuICAgIH0pO1xuICAgIHRoaXMucGF5bWVudFNoZWV0LnVwZGF0ZVByb2dyZXNzKCdzdWNjZXNzJyk7XG4gICAgdGhpcy5wYXltZW50U2hlZXQucmVtb3ZlKCk7XG4gICAgaWYgKHJlc3VsdC5lcnJvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm5vdGlmeUxpc3RlbmVycyhQYXltZW50U2hlZXRFdmVudHNFbnVtLkZhaWxlZCwgbnVsbCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYXltZW50UmVzdWx0OiBQYXltZW50U2hlZXRFdmVudHNFbnVtLkZhaWxlZFxuICAgICAgfTtcbiAgICB9XG4gICAgdGhpcy5ub3RpZnlMaXN0ZW5lcnMoUGF5bWVudFNoZWV0RXZlbnRzRW51bS5Db21wbGV0ZWQsIG51bGwpO1xuICAgIHJldHVybiB7XG4gICAgICBwYXltZW50UmVzdWx0OiBQYXltZW50U2hlZXRFdmVudHNFbnVtLkNvbXBsZXRlZFxuICAgIH07XG4gIH1cbiAgYXN5bmMgY3JlYXRlUGF5bWVudEZsb3cob3B0aW9ucykge1xuICAgIHZhciBfYTtcbiAgICBpZiAoIXRoaXMucHVibGlzaGFibGVLZXkpIHtcbiAgICAgIHRoaXMubm90aWZ5TGlzdGVuZXJzKFBheW1lbnRGbG93RXZlbnRzRW51bS5GYWlsZWRUb0xvYWQsIG51bGwpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnBheW1lbnRTaGVldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0cmlwZS1wYXltZW50LXNoZWV0Jyk7XG4gICAgKF9hID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYXBwZW5kQ2hpbGQodGhpcy5wYXltZW50U2hlZXQpO1xuICAgIGF3YWl0IGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKCdzdHJpcGUtcGF5bWVudC1zaGVldCcpO1xuICAgIHRoaXMucGF5bWVudFNoZWV0LnB1Ymxpc2hhYmxlS2V5ID0gdGhpcy5wdWJsaXNoYWJsZUtleTtcbiAgICBpZiAodGhpcy5zdHJpcGVBY2NvdW50KSB7XG4gICAgICB0aGlzLnBheW1lbnRTaGVldC5zdHJpcGVBY2NvdW50ID0gdGhpcy5zdHJpcGVBY2NvdW50O1xuICAgIH1cbiAgICB0aGlzLnBheW1lbnRTaGVldC5hcHBsaWNhdGlvbk5hbWUgPSAnQGNhcGFjaXRvci1jb21tdW5pdHkvc3RyaXBlJztcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gICAgaWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ3BheW1lbnRJbnRlbnRDbGllbnRTZWNyZXQnKSkge1xuICAgICAgdGhpcy5wYXltZW50U2hlZXQuaW50ZW50VHlwZSA9ICdwYXltZW50JztcbiAgICAgIHRoaXMucGF5bWVudFNoZWV0LmludGVudENsaWVudFNlY3JldCA9IG9wdGlvbnMucGF5bWVudEludGVudENsaWVudFNlY3JldDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wYXltZW50U2hlZXQuaW50ZW50VHlwZSA9ICdzZXR1cCc7XG4gICAgICB0aGlzLnBheW1lbnRTaGVldC5pbnRlbnRDbGllbnRTZWNyZXQgPSBvcHRpb25zLnNldHVwSW50ZW50Q2xpZW50U2VjcmV0O1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy53aXRoWmlwQ29kZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnBheW1lbnRTaGVldC56aXAgPSBvcHRpb25zLndpdGhaaXBDb2RlO1xuICAgIH1cbiAgICBpZiAoaXNQbGF0Zm9ybSh3aW5kb3csICdpb3MnKSkge1xuICAgICAgdGhpcy5wYXltZW50U2hlZXQuYnV0dG9uTGFiZWwgPSAnQWRkIGNhcmQnO1xuICAgICAgdGhpcy5wYXltZW50U2hlZXQuc2hlZXRUaXRsZSA9ICdBZGQgYSBjYXJkJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wYXltZW50U2hlZXQuYnV0dG9uTGFiZWwgPSAnQWRkJztcbiAgICB9XG4gICAgdGhpcy5ub3RpZnlMaXN0ZW5lcnMoUGF5bWVudEZsb3dFdmVudHNFbnVtLkxvYWRlZCwgbnVsbCk7XG4gIH1cbiAgYXN5bmMgcHJlc2VudFBheW1lbnRGbG93KCkge1xuICAgIGlmICghdGhpcy5wYXltZW50U2hlZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgIH1cbiAgICB0aGlzLm5vdGlmeUxpc3RlbmVycyhQYXltZW50Rmxvd0V2ZW50c0VudW0uT3BlbmVkLCBudWxsKTtcbiAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMucGF5bWVudFNoZWV0LnByZXNlbnQoKS5jYXRjaCgoKSA9PiB1bmRlZmluZWQpO1xuICAgIGlmIChwcm9wcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm5vdGlmeUxpc3RlbmVycyhQYXltZW50Rmxvd0V2ZW50c0VudW0uQ2FuY2VsZWQsIG51bGwpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgfVxuICAgIGNvbnN0IHtcbiAgICAgIGRldGFpbDoge1xuICAgICAgICBzdHJpcGUsXG4gICAgICAgIGNhcmROdW1iZXJFbGVtZW50XG4gICAgICB9XG4gICAgfSA9IHByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIHRva2VuXG4gICAgfSA9IGF3YWl0IHN0cmlwZS5jcmVhdGVUb2tlbihjYXJkTnVtYmVyRWxlbWVudCk7XG4gICAgaWYgKHRva2VuID09PSB1bmRlZmluZWQgfHwgdG9rZW4uY2FyZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICB9XG4gICAgdGhpcy5mbG93U3RyaXBlID0gc3RyaXBlO1xuICAgIHRoaXMuZmxvd0NhcmROdW1iZXJFbGVtZW50ID0gY2FyZE51bWJlckVsZW1lbnQ7XG4gICAgdGhpcy5ub3RpZnlMaXN0ZW5lcnMoUGF5bWVudEZsb3dFdmVudHNFbnVtLkNyZWF0ZWQsIHtcbiAgICAgIGNhcmROdW1iZXI6IHRva2VuLmNhcmQubGFzdDRcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgY2FyZE51bWJlcjogdG9rZW4uY2FyZC5sYXN0NFxuICAgIH07XG4gIH1cbiAgYXN5bmMgY29uZmlybVBheW1lbnRGbG93KCkge1xuICAgIGlmICghdGhpcy5wYXltZW50U2hlZXQgfHwgIXRoaXMuZmxvd1N0cmlwZSB8fCAhdGhpcy5mbG93Q2FyZE51bWJlckVsZW1lbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmZsb3dTdHJpcGUuY3JlYXRlUGF5bWVudE1ldGhvZCh7XG4gICAgICB0eXBlOiAnY2FyZCcsXG4gICAgICBjYXJkOiB0aGlzLmZsb3dDYXJkTnVtYmVyRWxlbWVudFxuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZXJyb3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5ub3RpZnlMaXN0ZW5lcnMoUGF5bWVudEZsb3dFdmVudHNFbnVtLkZhaWxlZCwgbnVsbCk7XG4gICAgfVxuICAgIHRoaXMucGF5bWVudFNoZWV0LnVwZGF0ZVByb2dyZXNzKCdzdWNjZXNzJyk7XG4gICAgdGhpcy5wYXltZW50U2hlZXQucmVtb3ZlKCk7XG4gICAgdGhpcy5ub3RpZnlMaXN0ZW5lcnMoUGF5bWVudEZsb3dFdmVudHNFbnVtLkNvbXBsZXRlZCwgbnVsbCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBheW1lbnRSZXN1bHQ6IFBheW1lbnRGbG93RXZlbnRzRW51bS5Db21wbGV0ZWRcbiAgICB9O1xuICB9XG4gIGlzQXBwbGVQYXlBdmFpbGFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNBdmFpbGFibGUoJ2FwcGxlUGF5Jyk7XG4gIH1cbiAgYXN5bmMgY3JlYXRlQXBwbGVQYXkoY3JlYXRlQXBwbGVQYXlPcHRpb24pIHtcbiAgICBpZiAoIXRoaXMucHVibGlzaGFibGVLZXkpIHtcbiAgICAgIHRoaXMubm90aWZ5TGlzdGVuZXJzKEFwcGxlUGF5RXZlbnRzRW51bS5GYWlsZWRUb0xvYWQsIG51bGwpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnJlcXVlc3RBcHBsZVBheSA9IGF3YWl0IHRoaXMuY3JlYXRlUGF5bWVudFJlcXVlc3RCdXR0b24oKTtcbiAgICB0aGlzLnJlcXVlc3RBcHBsZVBheU9wdGlvbnMgPSBjcmVhdGVBcHBsZVBheU9wdGlvbjtcbiAgICB0aGlzLm5vdGlmeUxpc3RlbmVycyhBcHBsZVBheUV2ZW50c0VudW0uTG9hZGVkLCBudWxsKTtcbiAgfVxuICBwcmVzZW50QXBwbGVQYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlc2VudFBheW1lbnRSZXF1ZXN0QnV0dG9uKCdhcHBsZVBheScsIHRoaXMucmVxdWVzdEFwcGxlUGF5LCB0aGlzLnJlcXVlc3RBcHBsZVBheU9wdGlvbnMsIEFwcGxlUGF5RXZlbnRzRW51bSk7XG4gIH1cbiAgaXNHb29nbGVQYXlBdmFpbGFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNBdmFpbGFibGUoJ2dvb2dsZVBheScpO1xuICB9XG4gIGFzeW5jIGNyZWF0ZUdvb2dsZVBheShjcmVhdGVHb29nbGVQYXlPcHRpb24pIHtcbiAgICBpZiAoIXRoaXMucHVibGlzaGFibGVLZXkpIHtcbiAgICAgIHRoaXMubm90aWZ5TGlzdGVuZXJzKEdvb2dsZVBheUV2ZW50c0VudW0uRmFpbGVkVG9Mb2FkLCBudWxsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5yZXF1ZXN0R29vZ2xlUGF5ID0gYXdhaXQgdGhpcy5jcmVhdGVQYXltZW50UmVxdWVzdEJ1dHRvbigpO1xuICAgIHRoaXMucmVxdWVzdEdvb2dsZVBheU9wdGlvbnMgPSBjcmVhdGVHb29nbGVQYXlPcHRpb247XG4gICAgdGhpcy5ub3RpZnlMaXN0ZW5lcnMoR29vZ2xlUGF5RXZlbnRzRW51bS5Mb2FkZWQsIG51bGwpO1xuICB9XG4gIHByZXNlbnRHb29nbGVQYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlc2VudFBheW1lbnRSZXF1ZXN0QnV0dG9uKCdnb29nbGVQYXknLCB0aGlzLnJlcXVlc3RHb29nbGVQYXksIHRoaXMucmVxdWVzdEdvb2dsZVBheU9wdGlvbnMsIEdvb2dsZVBheUV2ZW50c0VudW0pO1xuICB9XG4gIGFzeW5jIGlzQXZhaWxhYmxlKHR5cGUpIHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgcmVxdWVzdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0cmlwZS1wYXltZW50LXJlcXVlc3QtYnV0dG9uJyk7XG4gICAgcmVxdWVzdEJ1dHRvbi5pZCA9IGBpc0F2YWlsYWJsZS0ke3R5cGV9YDtcbiAgICAoX2EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hcHBlbmRDaGlsZChyZXF1ZXN0QnV0dG9uKTtcbiAgICBhd2FpdCBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCgnc3RyaXBlLXBheW1lbnQtcmVxdWVzdC1idXR0b24nKTtcbiAgICBpZiAodGhpcy5wdWJsaXNoYWJsZUtleSkge1xuICAgICAgcmVxdWVzdEJ1dHRvbi5wdWJsaXNoYWJsZUtleSA9IHRoaXMucHVibGlzaGFibGVLZXk7XG4gICAgfVxuICAgIGlmICh0aGlzLnN0cmlwZUFjY291bnQpIHtcbiAgICAgIHJlcXVlc3RCdXR0b24uc3RyaXBlQWNjb3VudCA9IHRoaXMuc3RyaXBlQWNjb3VudDtcbiAgICB9XG4gICAgcmVxdWVzdEJ1dHRvbi5hcHBsaWNhdGlvbk5hbWUgPSAnQGNhcGFjaXRvci1jb21tdW5pdHkvc3RyaXBlJztcbiAgICByZXR1cm4gYXdhaXQgcmVxdWVzdEJ1dHRvbi5pc0F2YWlsYWJsZSh0eXBlKS5maW5hbGx5KCgpID0+IHJlcXVlc3RCdXR0b24ucmVtb3ZlKCkpO1xuICB9XG4gIGFzeW5jIGNyZWF0ZVBheW1lbnRSZXF1ZXN0QnV0dG9uKCkge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCByZXF1ZXN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3RyaXBlLXBheW1lbnQtcmVxdWVzdC1idXR0b24nKTtcbiAgICAoX2EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hcHBlbmRDaGlsZChyZXF1ZXN0QnV0dG9uKTtcbiAgICBhd2FpdCBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCgnc3RyaXBlLXBheW1lbnQtcmVxdWVzdC1idXR0b24nKTtcbiAgICBpZiAodGhpcy5wdWJsaXNoYWJsZUtleSkge1xuICAgICAgcmVxdWVzdEJ1dHRvbi5wdWJsaXNoYWJsZUtleSA9IHRoaXMucHVibGlzaGFibGVLZXk7XG4gICAgfVxuICAgIGlmICh0aGlzLnN0cmlwZUFjY291bnQpIHtcbiAgICAgIHJlcXVlc3RCdXR0b24uc3RyaXBlQWNjb3VudCA9IHRoaXMuc3RyaXBlQWNjb3VudDtcbiAgICB9XG4gICAgcmVxdWVzdEJ1dHRvbi5hcHBsaWNhdGlvbk5hbWUgPSAnQGNhcGFjaXRvci1jb21tdW5pdHkvc3RyaXBlJztcbiAgICByZXR1cm4gcmVxdWVzdEJ1dHRvbjtcbiAgfVxuICBhc3luYyBwcmVzZW50UGF5bWVudFJlcXVlc3RCdXR0b24odHlwZSwgcmVxdWVzdEJ1dHRvbiwgcmVxdWVzdEJ1dHRvbk9wdGlvbnMsIEV2ZW50c0VudW0pIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYXN5bmMtcHJvbWlzZS1leGVjdXRvclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyByZXNvbHZlID0+IHtcbiAgICAgIGlmIChyZXF1ZXN0QnV0dG9uID09PSB1bmRlZmluZWQgfHwgcmVxdWVzdEJ1dHRvbk9wdGlvbnMgPT09IHVuZGVmaW5lZCB8fCB0aGlzLnB1Ymxpc2hhYmxlS2V5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5ub3RpZnlMaXN0ZW5lcnMoRXZlbnRzRW51bS5GYWlsZWQsIG51bGwpO1xuICAgICAgICByZXR1cm4gcmVzb2x2ZSh7XG4gICAgICAgICAgcGF5bWVudFJlc3VsdDogRXZlbnRzRW51bS5GYWlsZWRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBhd2FpdCByZXF1ZXN0QnV0dG9uLnNldFBheW1lbnRSZXF1ZXN0T3B0aW9uKHtcbiAgICAgICAgY291bnRyeTogcmVxdWVzdEJ1dHRvbk9wdGlvbnMuY291bnRyeUNvZGUudG9VcHBlckNhc2UoKSxcbiAgICAgICAgY3VycmVuY3k6IHJlcXVlc3RCdXR0b25PcHRpb25zLmN1cnJlbmN5LnRvTG93ZXJDYXNlKCksXG4gICAgICAgIHRvdGFsOiByZXF1ZXN0QnV0dG9uT3B0aW9ucy5wYXltZW50U3VtbWFyeUl0ZW1zW3JlcXVlc3RCdXR0b25PcHRpb25zLnBheW1lbnRTdW1tYXJ5SXRlbXMubGVuZ3RoIC0gMV0sXG4gICAgICAgIGRpc2FibGVXYWxsZXRzOiB0eXBlID09PSAnYXBwbGVQYXknID8gWydnb29nbGVQYXknLCAnYnJvd3NlckNhcmQnXSA6IFsnYXBwbGVQYXknLCAnYnJvd3NlckNhcmQnXSxcbiAgICAgICAgcmVxdWVzdFBheWVyTmFtZTogdHJ1ZSxcbiAgICAgICAgcmVxdWVzdFBheWVyRW1haWw6IHRydWVcbiAgICAgIH0pO1xuICAgICAgLy8gYXdhaXQgdGhpcy5yZXF1ZXN0QnV0dG9uLnNldFBheW1lbnRSZXF1ZXN0U2hpcHBpbmdBZGRyZXNzRXZlbnRIYW5kbGVyKGFzeW5jIChldmVudCwgc3RyaXBlKSA9PiB7fSk7XG4gICAgICBjb25zdCBpbnRlbnRDbGllbnRTZWNyZXQgPSByZXF1ZXN0QnV0dG9uT3B0aW9ucy5wYXltZW50SW50ZW50Q2xpZW50U2VjcmV0O1xuICAgICAgYXdhaXQgcmVxdWVzdEJ1dHRvbi5zZXRQYXltZW50TWV0aG9kRXZlbnRIYW5kbGVyKGFzeW5jIChldmVudCwgc3RyaXBlKSA9PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBwYXltZW50SW50ZW50LFxuICAgICAgICAgIGVycm9yOiBjb25maXJtRXJyb3JcbiAgICAgICAgfSA9IGF3YWl0IHN0cmlwZS5jb25maXJtQ2FyZFBheW1lbnQoaW50ZW50Q2xpZW50U2VjcmV0LCB7XG4gICAgICAgICAgcGF5bWVudF9tZXRob2Q6IGV2ZW50LnBheW1lbnRNZXRob2QuaWRcbiAgICAgICAgfSwge1xuICAgICAgICAgIGhhbmRsZUFjdGlvbnM6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoY29uZmlybUVycm9yKSB7XG4gICAgICAgICAgZXZlbnQuY29tcGxldGUoJ2ZhaWwnKTtcbiAgICAgICAgICB0aGlzLm5vdGlmeUxpc3RlbmVycyhFdmVudHNFbnVtLkZhaWxlZCwgY29uZmlybUVycm9yKTtcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7XG4gICAgICAgICAgICBwYXltZW50UmVzdWx0OiBFdmVudHNFbnVtLkZhaWxlZFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICgocGF5bWVudEludGVudCA9PT0gbnVsbCB8fCBwYXltZW50SW50ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXltZW50SW50ZW50LnN0YXR1cykgPT09ICdyZXF1aXJlc19hY3Rpb24nKSB7XG4gICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgZXJyb3I6IGNvbmZpcm1FcnJvclxuICAgICAgICAgIH0gPSBhd2FpdCBzdHJpcGUuY29uZmlybUNhcmRQYXltZW50KGludGVudENsaWVudFNlY3JldCk7XG4gICAgICAgICAgaWYgKGNvbmZpcm1FcnJvcikge1xuICAgICAgICAgICAgZXZlbnQuY29tcGxldGUoJ2ZhaWwnKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5TGlzdGVuZXJzKEV2ZW50c0VudW0uRmFpbGVkLCBjb25maXJtRXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoe1xuICAgICAgICAgICAgICBwYXltZW50UmVzdWx0OiBFdmVudHNFbnVtLkZhaWxlZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGV2ZW50LmNvbXBsZXRlKCdzdWNjZXNzJyk7XG4gICAgICAgIHRoaXMubm90aWZ5TGlzdGVuZXJzKEV2ZW50c0VudW0uQ29tcGxldGVkLCBudWxsKTtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUoe1xuICAgICAgICAgIHBheW1lbnRSZXN1bHQ6IEV2ZW50c0VudW0uQ29tcGxldGVkXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBhd2FpdCByZXF1ZXN0QnV0dG9uLmluaXRTdHJpcGUodGhpcy5wdWJsaXNoYWJsZUtleSwge1xuICAgICAgICBzdHJpcGVBY2NvdW50OiB0aGlzLnN0cmlwZUFjY291bnQsXG4gICAgICAgIHNob3dCdXR0b246IGZhbHNlXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUlPLElBQU0sZUFBZSxTQUFPLGVBQWUsR0FBRztBQUM5QyxJQUFNLGFBQWEsQ0FBQyxlQUFlLGFBQWE7QUFDckQsTUFBSSxPQUFPLGtCQUFrQixVQUFVO0FBQ3JDLGVBQVc7QUFDWCxvQkFBZ0I7QUFBQSxFQUNsQjtBQUNBLFNBQU8sYUFBYSxhQUFhLEVBQUUsU0FBUyxRQUFRO0FBQ3REO0FBQ08sSUFBTSxpQkFBaUIsQ0FBQyxNQUFNLFdBQVc7QUFDOUMsTUFBSSxPQUFPLFFBQVEsYUFBYTtBQUM5QixXQUFPLENBQUM7QUFBQSxFQUNWO0FBQ0EsTUFBSSxRQUFRLElBQUksU0FBUyxDQUFDO0FBQzFCLE1BQUksWUFBWSxJQUFJLE1BQU07QUFDMUIsTUFBSSxhQUFhLE1BQU07QUFDckIsZ0JBQVksSUFBSSxNQUFNLFlBQVksZ0JBQWdCLEdBQUc7QUFDckQsY0FBVSxRQUFRLE9BQUssSUFBSSxTQUFTLGdCQUFn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Y0FDSixPQUFPQTtBQUFBLFlBQ1QsSUFBSSxNQUFNLE9BQU8sbUJBQW1CLGtCQUFrQjtBQUN0RCxnQkFBSUEsZUFBYztBQUNoQixvQkFBTSxTQUFTLE1BQU07QUFDckIsbUJBQUssZ0JBQWdCLFdBQVcsUUFBUUEsYUFBWTtBQUNwRCxxQkFBTyxRQUFRO0FBQUEsZ0JBQ2IsZUFBZSxXQUFXO0FBQUEsY0FDNUIsQ0FBQztBQUFBLFlBQ0g7QUFBQSxVQUNGO0FBQ0EsZ0JBQU0sU0FBUyxTQUFTO0FBQ3hCLGVBQUssZ0JBQWdCLFdBQVcsV0FBVyxJQUFJO0FBQy9DLGlCQUFPLFFBQVE7QUFBQSxZQUNiLGVBQWUsV0FBVztBQUFBLFVBQzVCLENBQUM7QUFBQSxRQUNILEVBQUM7QUFDRCxjQUFNLGNBQWMsV0FBVyxLQUFLLGdCQUFnQjtBQUFBLFVBQ2xELGVBQWUsS0FBSztBQUFBLFVBQ3BCLFlBQVk7QUFBQSxRQUNkLENBQUM7QUFBQSxNQUNILEVBQUM7QUFBQSxJQUNIO0FBQUE7QUFDRjsiLCJuYW1lcyI6WyJjb25maXJtRXJyb3IiXSwieF9nb29nbGVfaWdub3JlTGlzdCI6WzAsMV19
