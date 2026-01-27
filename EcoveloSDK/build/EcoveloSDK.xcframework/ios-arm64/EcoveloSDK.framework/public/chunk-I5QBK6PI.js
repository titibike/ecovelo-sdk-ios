import {
  StorageService
} from "./chunk-U6SJAXLK.js";
import {
  AlertController,
  Injectable,
  Platform,
  TranslateService,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-DGENMXJW.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// src/app/services/internal/cookies.service.ts
var _CookiesService = class _CookiesService {
  constructor(platform, storage, alertController, translate) {
    this.platform = platform;
    this.storage = storage;
    this.alertController = alertController;
    this.translate = translate;
    this.cookiesState = signal({
      state: "idle"
    });
  }
  storePreferences(preferences) {
    return __async(this, null, function* () {
      const state = {
        state: "already_set",
        preferences
      };
      this.cookiesState.set(state);
      yield this.storage.set("cookiesSettings", state);
    });
  }
  getPreferences() {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => __async(this, null, function* () {
        this.storage.get("cookiesSettings").then((state) => __async(this, null, function* () {
          if (state && state.state === "already_set") {
            this.cookiesState.set(state);
          } else {
            this.cookiesState.set({ state: "not_already_set" });
          }
          resolve(state);
        })).catch((e) => {
          reject(e);
        });
      }));
    });
  }
  presentCookiesAlert() {
    return __async(this, null, function* () {
      const alert = yield this.alertController.create({
        header: this.translate.instant("cookies.alert.header"),
        message: this.translate.instant("cookies.alert.message"),
        buttons: [
          {
            text: this.translate.instant("cookies.alert.close"),
            role: "cancel"
          },
          {
            text: this.translate.instant("cookies.alert.accept"),
            handler: () => {
              const preferences = {
                necessary: true,
                analytics: true
              };
              this.storePreferences(preferences);
            }
          }
        ]
      });
      yield alert.present();
    });
  }
};
_CookiesService.\u0275fac = function CookiesService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CookiesService)(\u0275\u0275inject(Platform), \u0275\u0275inject(StorageService), \u0275\u0275inject(AlertController), \u0275\u0275inject(TranslateService));
};
_CookiesService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CookiesService, factory: _CookiesService.\u0275fac, providedIn: "root" });
var CookiesService = _CookiesService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CookiesService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Platform }, { type: StorageService }, { type: AlertController }, { type: TranslateService }], null);
})();

export {
  CookiesService
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9zZXJ2aWNlcy9pbnRlcm5hbC9jb29raWVzLnNlcnZpY2UudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IEluamVjdGFibGUsIHNpZ25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJ1xuaW1wb3J0IHsgU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuLi91dGlscy9zdG9yYWdlLnNlcnZpY2UnXG5pbXBvcnQgeyBBbGVydENvbnRyb2xsZXIgfSBmcm9tICdAaW9uaWMvYW5ndWxhci9zdGFuZGFsb25lJ1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnXG5cbmV4cG9ydCB0eXBlIENvb29raWVzU3RhdGUgPVxuICB8IHtcbiAgICAgIHN0YXRlOiAnaWRsZSdcbiAgICB9XG4gIHwge1xuICAgICAgc3RhdGU6ICdub3RfYWxyZWFkeV9zZXQnXG4gICAgfVxuICB8IHtcbiAgICAgIHN0YXRlOiAnYWxyZWFkeV9zZXQnXG4gICAgICBwcmVmZXJlbmNlczoge1xuICAgICAgICBuZWNlc3Nhcnk6IGJvb2xlYW5cbiAgICAgICAgYW5hbHl0aWNzOiBib29sZWFuXG4gICAgICB9XG4gICAgfVxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENvb2tpZXNTZXJ2aWNlIHtcbiAgcHVibGljIGNvb2tpZXNTdGF0ZSA9IHNpZ25hbDxDb29va2llc1N0YXRlPih7XG4gICAgc3RhdGU6ICdpZGxlJyxcbiAgfSlcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgIHByaXZhdGUgc3RvcmFnZTogU3RvcmFnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhbGVydENvbnRyb2xsZXI6IEFsZXJ0Q29udHJvbGxlcixcbiAgICBwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZVxuICApIHt9XG5cbiAgcHVibGljIGFzeW5jIHN0b3JlUHJlZmVyZW5jZXMocHJlZmVyZW5jZXM6IHtcbiAgICBuZWNlc3Nhcnk6IGJvb2xlYW5cbiAgICBhbmFseXRpY3M6IGJvb2xlYW5cbiAgfSkge1xuICAgIGNvbnN0IHN0YXRlOiBDb29va2llc1N0YXRlID0ge1xuICAgICAgc3RhdGU6ICdhbHJlYWR5X3NldCcsXG4gICAgICBwcmVmZXJlbmNlcyxcbiAgICB9XG4gICAgdGhpcy5jb29raWVzU3RhdGUuc2V0KHN0YXRlKVxuICAgIGF3YWl0IHRoaXMuc3RvcmFnZS5zZXQoJ2Nvb2tpZXNTZXR0aW5ncycsIHN0YXRlKVxuICB9XG5cbiAgYXN5bmMgZ2V0UHJlZmVyZW5jZXMoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuc3RvcmFnZVxuICAgICAgICAuZ2V0KCdjb29raWVzU2V0dGluZ3MnKVxuICAgICAgICAudGhlbihhc3luYyAoc3RhdGU6IENvb29raWVzU3RhdGUpID0+IHtcbiAgICAgICAgICBpZiAoc3RhdGUgJiYgc3RhdGUuc3RhdGUgPT09ICdhbHJlYWR5X3NldCcpIHtcbiAgICAgICAgICAgIHRoaXMuY29va2llc1N0YXRlLnNldChzdGF0ZSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb29raWVzU3RhdGUuc2V0KHsgc3RhdGU6ICdub3RfYWxyZWFkeV9zZXQnIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIHJlc29sdmUoc3RhdGUpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgIHJlamVjdChlKVxuICAgICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBhc3luYyBwcmVzZW50Q29va2llc0FsZXJ0KCkge1xuICAgIGNvbnN0IGFsZXJ0ID0gYXdhaXQgdGhpcy5hbGVydENvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgIGhlYWRlcjogdGhpcy50cmFuc2xhdGUuaW5zdGFudCgnY29va2llcy5hbGVydC5oZWFkZXInKSxcbiAgICAgIG1lc3NhZ2U6IHRoaXMudHJhbnNsYXRlLmluc3RhbnQoJ2Nvb2tpZXMuYWxlcnQubWVzc2FnZScpLFxuICAgICAgYnV0dG9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogdGhpcy50cmFuc2xhdGUuaW5zdGFudCgnY29va2llcy5hbGVydC5jbG9zZScpLFxuICAgICAgICAgIHJvbGU6ICdjYW5jZWwnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogdGhpcy50cmFuc2xhdGUuaW5zdGFudCgnY29va2llcy5hbGVydC5hY2NlcHQnKSxcbiAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcmVmZXJlbmNlcyA9IHtcbiAgICAgICAgICAgICAgbmVjZXNzYXJ5OiB0cnVlLFxuICAgICAgICAgICAgICBhbmFseXRpY3M6IHRydWUsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnN0b3JlUHJlZmVyZW5jZXMocHJlZmVyZW5jZXMpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSlcbiAgICBhd2FpdCBhbGVydC5wcmVzZW50KClcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJNLElBQU8sa0JBQVAsTUFBTyxnQkFBYztFQUt6QixZQUNTLFVBQ0MsU0FDQSxpQkFDQSxXQUEyQjtBQUg1QixTQUFBLFdBQUE7QUFDQyxTQUFBLFVBQUE7QUFDQSxTQUFBLGtCQUFBO0FBQ0EsU0FBQSxZQUFBO0FBUkgsU0FBQSxlQUFlLE9BQXNCO01BQzFDLE9BQU87S0FDUjtFQU9FO0VBRVUsaUJBQWlCLGFBRzdCOztBQUNDLFlBQU0sUUFBdUI7UUFDM0IsT0FBTztRQUNQOztBQUVGLFdBQUssYUFBYSxJQUFJLEtBQUs7QUFDM0IsWUFBTSxLQUFLLFFBQVEsSUFBSSxtQkFBbUIsS0FBSztJQUNqRDs7RUFFTSxpQkFBYzs7QUFDbEIsYUFBTyxJQUFJLFFBQVEsQ0FBTyxTQUFTLFdBQVU7QUFDM0MsYUFBSyxRQUNGLElBQUksaUJBQWlCLEVBQ3JCLEtBQUssQ0FBTyxVQUF3QjtBQUNuQyxjQUFJLFNBQVMsTUFBTSxVQUFVLGVBQWU7QUFDMUMsaUJBQUssYUFBYSxJQUFJLEtBQUs7VUFDN0IsT0FBTztBQUNMLGlCQUFLLGFBQWEsSUFBSSxFQUFFLE9BQU8sa0JBQWlCLENBQUU7VUFDcEQ7QUFDQSxrQkFBUSxLQUFLO1FBQ2YsRUFBQyxFQUNBLE1BQU0sQ0FBQyxNQUFLO0FBQ1gsaUJBQU8sQ0FBQztRQUNWLENBQUM7TUFDTCxFQUFDO0lBQ0g7O0VBRU0sc0JBQW1COztBQUN2QixZQUFNLFFBQVEsTUFBTSxLQUFLLGdCQUFnQixPQUFPO1FBQzlDLFFBQVEsS0FBSyxVQUFVLFFBQVEsc0JBQXNCO1FBQ3JELFNBQVMsS0FBSyxVQUFVLFFBQVEsdUJBQXVCO1FBQ3ZELFNBQVM7VUFDUDtZQUNFLE1BQU0sS0FBSyxVQUFVLFFBQVEscUJBQXFCO1lBQ2xELE1BQU07O1VBRVI7WUFDRSxNQUFNLEtBQUssVUFBVSxRQUFRLHNCQUFzQjtZQUNuRCxTQUFTLE1BQUs7QUFDWixvQkFBTSxjQUFjO2dCQUNsQixXQUFXO2dCQUNYLFdBQVc7O0FBRWIsbUJBQUssaUJBQWlCLFdBQVc7WUFDbkM7OztPQUdMO0FBQ0QsWUFBTSxNQUFNLFFBQU87SUFDckI7Ozs7bUNBaEVXLGlCQUFjLG1CQUFBLFFBQUEsR0FBQSxtQkFBQSxjQUFBLEdBQUEsbUJBQUEsZUFBQSxHQUFBLG1CQUFBLGdCQUFBLENBQUE7QUFBQTttRkFBZCxpQkFBYyxTQUFkLGdCQUFjLFdBQUEsWUFGYixPQUFNLENBQUE7QUFFZCxJQUFPLGlCQUFQOztzRUFBTyxnQkFBYyxDQUFBO1VBSDFCO1dBQVc7TUFDVixZQUFZO0tBQ2I7OzsiLAogICJuYW1lcyI6IFtdCn0K
