import {
  environment
} from "./chunk-FOJAXRYS.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-DGENMXJW.js";

// src/app/services/external/recaptcha.service.ts
var _RecaptchaService = class _RecaptchaService {
  constructor() {
    this.RECAPTCHA_V3_SITE_KEY = environment.recaptchaV3SiteKey;
    this.scriptElement = null;
  }
  loadRecaptcha() {
    return new Promise((resolve) => {
      if (typeof window.grecaptcha === "undefined") {
        this.scriptElement = document.createElement("script");
        this.scriptElement.src = `https://www.google.com/recaptcha/api.js?render=${this.RECAPTCHA_V3_SITE_KEY}`;
        this.scriptElement.async = true;
        this.scriptElement.defer = true;
        document.head.appendChild(this.scriptElement);
        this.scriptElement.onload = () => {
          resolve();
        };
      } else {
        resolve();
      }
    });
  }
  executeRecaptcha(action) {
    return new Promise((resolve, reject) => {
      if (typeof window.grecaptcha === "undefined") {
        reject("reCAPTCHA is not loaded");
        return;
      }
      window.grecaptcha.ready(() => {
        window.grecaptcha.execute(this.RECAPTCHA_V3_SITE_KEY, { action }).then(resolve, reject);
      });
    });
  }
  unloadRecaptcha() {
    var _a;
    if (this.scriptElement) {
      document.head.removeChild(this.scriptElement);
      this.scriptElement = null;
    }
    const recaptchaElements = document.getElementsByClassName("grecaptcha-badge");
    while (recaptchaElements.length > 0) {
      const element = recaptchaElements[0];
      (_a = element.parentNode) == null ? void 0 : _a.removeChild(element);
    }
    delete window.grecaptcha;
  }
};
_RecaptchaService.\u0275fac = function RecaptchaService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RecaptchaService)();
};
_RecaptchaService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RecaptchaService, factory: _RecaptchaService.\u0275fac, providedIn: "root" });
var RecaptchaService = _RecaptchaService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecaptchaService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  RecaptchaService
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9zZXJ2aWNlcy9leHRlcm5hbC9yZWNhcHRjaGEuc2VydmljZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJ3NyYy9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnXG5cbi8vIETDqWNsYXJhdGlvbiBnbG9iYWxlIHBvdXIgZ3JlY2FwdGNoYVxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBncmVjYXB0Y2hhOiBhbnlcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUmVjYXB0Y2hhU2VydmljZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgUkVDQVBUQ0hBX1YzX1NJVEVfS0VZID0gZW52aXJvbm1lbnQucmVjYXB0Y2hhVjNTaXRlS2V5XG4gIHByaXZhdGUgc2NyaXB0RWxlbWVudDogSFRNTFNjcmlwdEVsZW1lbnQgfCBudWxsID0gbnVsbFxuXG4gIGxvYWRSZWNhcHRjaGEoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5ncmVjYXB0Y2hhID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLnNjcmlwdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuICAgICAgICB0aGlzLnNjcmlwdEVsZW1lbnQuc3JjID0gYGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vcmVjYXB0Y2hhL2FwaS5qcz9yZW5kZXI9JHt0aGlzLlJFQ0FQVENIQV9WM19TSVRFX0tFWX1gXG4gICAgICAgIHRoaXMuc2NyaXB0RWxlbWVudC5hc3luYyA9IHRydWVcbiAgICAgICAgdGhpcy5zY3JpcHRFbGVtZW50LmRlZmVyID0gdHJ1ZVxuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHRoaXMuc2NyaXB0RWxlbWVudClcbiAgICAgICAgdGhpcy5zY3JpcHRFbGVtZW50Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICByZXNvbHZlKClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGV4ZWN1dGVSZWNhcHRjaGEoYWN0aW9uOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5ncmVjYXB0Y2hhID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZWplY3QoJ3JlQ0FQVENIQSBpcyBub3QgbG9hZGVkJylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB3aW5kb3cuZ3JlY2FwdGNoYS5yZWFkeSgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5ncmVjYXB0Y2hhXG4gICAgICAgICAgLmV4ZWN1dGUodGhpcy5SRUNBUFRDSEFfVjNfU0lURV9LRVksIHsgYWN0aW9uIH0pXG4gICAgICAgICAgLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgdW5sb2FkUmVjYXB0Y2hhKCk6IHZvaWQge1xuICAgIC8vIFJlbW92ZSB0aGUgc2NyaXB0IGVsZW1lbnQgaWYgaXQgZXhpc3RzXG4gICAgaWYgKHRoaXMuc2NyaXB0RWxlbWVudCkge1xuICAgICAgZG9jdW1lbnQuaGVhZC5yZW1vdmVDaGlsZCh0aGlzLnNjcmlwdEVsZW1lbnQpXG4gICAgICB0aGlzLnNjcmlwdEVsZW1lbnQgPSBudWxsXG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGFsbCBwb3RlbnRpYWwgcmVDQVBUQ0hBIGVsZW1lbnRzIGZyb20gdGhlIERPTVxuICAgIGNvbnN0IHJlY2FwdGNoYUVsZW1lbnRzID1cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2dyZWNhcHRjaGEtYmFkZ2UnKVxuICAgIHdoaWxlIChyZWNhcHRjaGFFbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gcmVjYXB0Y2hhRWxlbWVudHNbMF1cbiAgICAgIGVsZW1lbnQucGFyZW50Tm9kZT8ucmVtb3ZlQ2hpbGQoZWxlbWVudClcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgdGhlIGdyZWNhcHRjaGEgb2JqZWN0IGZyb20gdGhlIHdpbmRvd1xuICAgIGRlbGV0ZSB3aW5kb3cuZ3JlY2FwdGNoYVxuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7O0FBYU0sSUFBTyxvQkFBUCxNQUFPLGtCQUFnQjtFQUg3QixjQUFBO0FBSW1CLFNBQUEsd0JBQXdCLFlBQVk7QUFDN0MsU0FBQSxnQkFBMEM7O0VBRWxELGdCQUFhO0FBQ1gsV0FBTyxJQUFJLFFBQVEsQ0FBQyxZQUFXO0FBQzdCLFVBQUksT0FBTyxPQUFPLGVBQWUsYUFBYTtBQUM1QyxhQUFLLGdCQUFnQixTQUFTLGNBQWMsUUFBUTtBQUNwRCxhQUFLLGNBQWMsTUFBTSxrREFBa0QsS0FBSyxxQkFBcUI7QUFDckcsYUFBSyxjQUFjLFFBQVE7QUFDM0IsYUFBSyxjQUFjLFFBQVE7QUFDM0IsaUJBQVMsS0FBSyxZQUFZLEtBQUssYUFBYTtBQUM1QyxhQUFLLGNBQWMsU0FBUyxNQUFLO0FBQy9CLGtCQUFPO1FBQ1Q7TUFDRixPQUFPO0FBQ0wsZ0JBQU87TUFDVDtJQUNGLENBQUM7RUFDSDtFQUVBLGlCQUFpQixRQUFjO0FBQzdCLFdBQU8sSUFBSSxRQUFRLENBQUMsU0FBUyxXQUFVO0FBQ3JDLFVBQUksT0FBTyxPQUFPLGVBQWUsYUFBYTtBQUM1QyxlQUFPLHlCQUF5QjtBQUNoQztNQUNGO0FBQ0EsYUFBTyxXQUFXLE1BQU0sTUFBSztBQUMzQixlQUFPLFdBQ0osUUFBUSxLQUFLLHVCQUF1QixFQUFFLE9BQU0sQ0FBRSxFQUM5QyxLQUFLLFNBQVMsTUFBTTtNQUN6QixDQUFDO0lBQ0gsQ0FBQztFQUNIO0VBRUEsa0JBQWU7QUFoRGpCO0FBa0RJLFFBQUksS0FBSyxlQUFlO0FBQ3RCLGVBQVMsS0FBSyxZQUFZLEtBQUssYUFBYTtBQUM1QyxXQUFLLGdCQUFnQjtJQUN2QjtBQUdBLFVBQU0sb0JBQ0osU0FBUyx1QkFBdUIsa0JBQWtCO0FBQ3BELFdBQU8sa0JBQWtCLFNBQVMsR0FBRztBQUNuQyxZQUFNLFVBQVUsa0JBQWtCLENBQUM7QUFDbkMsb0JBQVEsZUFBUixtQkFBb0IsWUFBWTtJQUNsQztBQUdBLFdBQU8sT0FBTztFQUNoQjs7O21DQXBEVyxtQkFBZ0I7QUFBQTtxRkFBaEIsbUJBQWdCLFNBQWhCLGtCQUFnQixXQUFBLFlBRmYsT0FBTSxDQUFBO0FBRWQsSUFBTyxtQkFBUDs7c0VBQU8sa0JBQWdCLENBQUE7VUFINUI7V0FBVztNQUNWLFlBQVk7S0FDYjs7OyIsCiAgIm5hbWVzIjogW10KfQo=
