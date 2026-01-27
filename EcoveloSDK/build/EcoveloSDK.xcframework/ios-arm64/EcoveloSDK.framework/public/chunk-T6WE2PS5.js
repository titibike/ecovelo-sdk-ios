import {
  StorageService
} from "./chunk-U6SJAXLK.js";
import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-DGENMXJW.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// src/app/services/internal/appstate.service.ts
var _AppstateService = class _AppstateService {
  constructor(storage) {
    this.storage = storage;
    this.appState = new BehaviorSubject({
      state: "launch"
    });
    this.getSavedAppState().then((state) => {
      if (state) {
        this.appState.next(state);
      }
    });
  }
  setAppState(state) {
    return __async(this, null, function* () {
      this.appState.next(state);
      yield this.saveAppState();
    });
  }
  getAppState() {
    return this.appState.value;
  }
  saveAppState() {
    return __async(this, null, function* () {
      yield this.storage.set("appState", this.appState.value);
    });
  }
  getSavedAppState() {
    return this.storage.get("appState");
  }
};
_AppstateService.\u0275fac = function AppstateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppstateService)(\u0275\u0275inject(StorageService));
};
_AppstateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AppstateService, factory: _AppstateService.\u0275fac, providedIn: "root" });
var AppstateService = _AppstateService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppstateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: StorageService }], null);
})();

export {
  AppstateService
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9zZXJ2aWNlcy9pbnRlcm5hbC9hcHBzdGF0ZS5zZXJ2aWNlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnXG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gJy4uL3V0aWxzL3N0b3JhZ2Uuc2VydmljZSdcblxuZXhwb3J0IHR5cGUgQXBwU3RhdGUgPVxuICB8IHtcbiAgICAgIHN0YXRlOiAnbGF1bmNoJ1xuICAgIH1cbiAgfCB7XG4gICAgICBzdGF0ZTogJ29uYm9hcmRpbmcnXG4gICAgfVxuICB8IHtcbiAgICAgIHN0YXRlOiAnbm9fY3ljbGlzdCdcbiAgICAgIHRyaXBfc3RhcnRlZD86IG51bWJlclxuICAgIH1cbiAgfCB7XG4gICAgICBzdGF0ZTogJ25ld19jeWNsaXN0J1xuICAgICAgZHJpbmdfc3RhdGU6IHtcbiAgICAgICAgZ2VvbG9jYXRpb25fZHJpbmc6ICdub3Rfc2hvd24nIHwgJ3Nob3duJ1xuICAgICAgfVxuICAgICAgcHVzaF9ub3RpZmljYXRpb25zOiAnbm90X3Nob3duJyB8ICdzaG93bidcbiAgICB9XG4gIHwge1xuICAgICAgc3RhdGU6ICdmcmVzaF9jeWNsaXN0J1xuICAgICAgdHJpcF9zdGFydGVkPzogbnVtYmVyXG4gICAgICBkcmluZ19zdGF0ZToge1xuICAgICAgICBnZW9sb2NhdGlvbl9kcmluZzogJ25vdF9zaG93bicgfCAnc2hvd24nXG4gICAgICB9XG4gICAgICBwdXNoX25vdGlmaWNhdGlvbnM6ICdub3Rfc2hvd24nIHwgJ3Nob3duJ1xuICAgIH1cbiAgfCB7XG4gICAgICBzdGF0ZTogJ3JlZ3VsYXJfY3ljbGlzdCdcbiAgICAgIHRyaXBfc3RhcnRlZD86IG51bWJlclxuICAgIH1cbiAgfCB7XG4gICAgICBzdGF0ZTogJ3Bhc3Npb25hdGVfY3ljbGlzdCdcbiAgICAgIHRyaXBfc3RhcnRlZD86IG51bWJlclxuICAgIH1cbiAgfCB7XG4gICAgICBzdGF0ZTogJ2RlbGV0aW5nX2N5Y2xpc3QnXG4gICAgICB0cmlwX3N0YXJ0ZWQ/OiBudW1iZXJcbiAgICB9XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBzdGF0ZVNlcnZpY2Uge1xuICBhcHBTdGF0ZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8QXBwU3RhdGU+KHtcbiAgICBzdGF0ZTogJ2xhdW5jaCcsXG4gIH0pXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yYWdlOiBTdG9yYWdlU2VydmljZSkge1xuICAgIHRoaXMuZ2V0U2F2ZWRBcHBTdGF0ZSgpLnRoZW4oKHN0YXRlKSA9PiB7XG4gICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5hcHBTdGF0ZS5uZXh0KHN0YXRlKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBhc3luYyBzZXRBcHBTdGF0ZShzdGF0ZTogQXBwU3RhdGUpIHtcbiAgICB0aGlzLmFwcFN0YXRlLm5leHQoc3RhdGUpXG4gICAgYXdhaXQgdGhpcy5zYXZlQXBwU3RhdGUoKVxuICB9XG5cbiAgZ2V0QXBwU3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXBwU3RhdGUudmFsdWVcbiAgfVxuXG4gIGFzeW5jIHNhdmVBcHBTdGF0ZSgpIHtcbiAgICBhd2FpdCB0aGlzLnN0b3JhZ2Uuc2V0KCdhcHBTdGF0ZScsIHRoaXMuYXBwU3RhdGUudmFsdWUpXG4gIH1cblxuICBnZXRTYXZlZEFwcFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2UuZ2V0KCdhcHBTdGF0ZScpXG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7OztBQThDTSxJQUFPLG1CQUFQLE1BQU8saUJBQWU7RUFLMUIsWUFBb0IsU0FBdUI7QUFBdkIsU0FBQSxVQUFBO0FBSnBCLFNBQUEsV0FBVyxJQUFJLGdCQUEwQjtNQUN2QyxPQUFPO0tBQ1I7QUFHQyxTQUFLLGlCQUFnQixFQUFHLEtBQUssQ0FBQyxVQUFTO0FBQ3JDLFVBQUksT0FBTztBQUNULGFBQUssU0FBUyxLQUFLLEtBQUs7TUFDMUI7SUFDRixDQUFDO0VBQ0g7RUFFTSxZQUFZLE9BQWU7O0FBQy9CLFdBQUssU0FBUyxLQUFLLEtBQUs7QUFDeEIsWUFBTSxLQUFLLGFBQVk7SUFDekI7O0VBRUEsY0FBVztBQUNULFdBQU8sS0FBSyxTQUFTO0VBQ3ZCO0VBRU0sZUFBWTs7QUFDaEIsWUFBTSxLQUFLLFFBQVEsSUFBSSxZQUFZLEtBQUssU0FBUyxLQUFLO0lBQ3hEOztFQUVBLG1CQUFnQjtBQUNkLFdBQU8sS0FBSyxRQUFRLElBQUksVUFBVTtFQUNwQzs7O21DQTVCVyxrQkFBZSxtQkFBQSxjQUFBLENBQUE7QUFBQTtvRkFBZixrQkFBZSxTQUFmLGlCQUFlLFdBQUEsWUFGZCxPQUFNLENBQUE7QUFFZCxJQUFPLGtCQUFQOztzRUFBTyxpQkFBZSxDQUFBO1VBSDNCO1dBQVc7TUFDVixZQUFZO0tBQ2I7OzsiLAogICJuYW1lcyI6IFtdCn0K
