import {
  WebPlugin
} from "./chunk-KGBWUDTS.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// node_modules/@capacitor/app/dist/esm/web.js
var AppWeb = class extends WebPlugin {
  constructor() {
    super();
    this.handleVisibilityChange = () => {
      const data = {
        isActive: document.hidden !== true
      };
      this.notifyListeners("appStateChange", data);
      if (document.hidden) {
        this.notifyListeners("pause", null);
      } else {
        this.notifyListeners("resume", null);
      }
    };
    document.addEventListener("visibilitychange", this.handleVisibilityChange, false);
  }
  exitApp() {
    throw this.unimplemented("Not implemented on web.");
  }
  getInfo() {
    return __async(this, null, function* () {
      throw this.unimplemented("Not implemented on web.");
    });
  }
  getLaunchUrl() {
    return __async(this, null, function* () {
      return {
        url: ""
      };
    });
  }
  getState() {
    return __async(this, null, function* () {
      return {
        isActive: document.hidden !== true
      };
    });
  }
  minimizeApp() {
    return __async(this, null, function* () {
      throw this.unimplemented("Not implemented on web.");
    });
  }
  toggleBackButtonHandler() {
    return __async(this, null, function* () {
      throw this.unimplemented("Not implemented on web.");
    });
  }
};
export {
  AppWeb
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY2FwYWNpdG9yL2FwcC9kaXN0L2VzbS93ZWIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV2ViUGx1Z2luIH0gZnJvbSAnQGNhcGFjaXRvci9jb3JlJztcbmV4cG9ydCBjbGFzcyBBcHBXZWIgZXh0ZW5kcyBXZWJQbHVnaW4ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIGlzQWN0aXZlOiBkb2N1bWVudC5oaWRkZW4gIT09IHRydWVcbiAgICAgIH07XG4gICAgICB0aGlzLm5vdGlmeUxpc3RlbmVycygnYXBwU3RhdGVDaGFuZ2UnLCBkYXRhKTtcbiAgICAgIGlmIChkb2N1bWVudC5oaWRkZW4pIHtcbiAgICAgICAgdGhpcy5ub3RpZnlMaXN0ZW5lcnMoJ3BhdXNlJywgbnVsbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm5vdGlmeUxpc3RlbmVycygncmVzdW1lJywgbnVsbCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgdGhpcy5oYW5kbGVWaXNpYmlsaXR5Q2hhbmdlLCBmYWxzZSk7XG4gIH1cbiAgZXhpdEFwcCgpIHtcbiAgICB0aHJvdyB0aGlzLnVuaW1wbGVtZW50ZWQoJ05vdCBpbXBsZW1lbnRlZCBvbiB3ZWIuJyk7XG4gIH1cbiAgYXN5bmMgZ2V0SW5mbygpIHtcbiAgICB0aHJvdyB0aGlzLnVuaW1wbGVtZW50ZWQoJ05vdCBpbXBsZW1lbnRlZCBvbiB3ZWIuJyk7XG4gIH1cbiAgYXN5bmMgZ2V0TGF1bmNoVXJsKCkge1xuICAgIHJldHVybiB7XG4gICAgICB1cmw6ICcnXG4gICAgfTtcbiAgfVxuICBhc3luYyBnZXRTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNBY3RpdmU6IGRvY3VtZW50LmhpZGRlbiAhPT0gdHJ1ZVxuICAgIH07XG4gIH1cbiAgYXN5bmMgbWluaW1pemVBcHAoKSB7XG4gICAgdGhyb3cgdGhpcy51bmltcGxlbWVudGVkKCdOb3QgaW1wbGVtZW50ZWQgb24gd2ViLicpO1xuICB9XG4gIGFzeW5jIHRvZ2dsZUJhY2tCdXR0b25IYW5kbGVyKCkge1xuICAgIHRocm93IHRoaXMudW5pbXBsZW1lbnRlZCgnTm90IGltcGxlbWVudGVkIG9uIHdlYi4nKTtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNPLElBQU0sU0FBTixjQUFxQixVQUFVO0FBQUEsRUFDcEMsY0FBYztBQUNaLFVBQU07QUFDTixTQUFLLHlCQUF5QixNQUFNO0FBQ2xDLFlBQU0sT0FBTztBQUFBLFFBQ1gsVUFBVSxTQUFTLFdBQVc7QUFBQSxNQUNoQztBQUNBLFdBQUssZ0JBQWdCLGtCQUFrQixJQUFJO0FBQzNDLFVBQUksU0FBUyxRQUFRO0FBQ25CLGFBQUssZ0JBQWdCLFNBQVMsSUFBSTtBQUFBLE1BQ3BDLE9BQU87QUFDTCxhQUFLLGdCQUFnQixVQUFVLElBQUk7QUFBQSxNQUNyQztBQUFBLElBQ0Y7QUFDQSxhQUFTLGlCQUFpQixvQkFBb0IsS0FBSyx3QkFBd0IsS0FBSztBQUFBLEVBQ2xGO0FBQUEsRUFDQSxVQUFVO0FBQ1IsVUFBTSxLQUFLLGNBQWMseUJBQXlCO0FBQUEsRUFDcEQ7QUFBQSxFQUNNLFVBQVU7QUFBQTtBQUNkLFlBQU0sS0FBSyxjQUFjLHlCQUF5QjtBQUFBLElBQ3BEO0FBQUE7QUFBQSxFQUNNLGVBQWU7QUFBQTtBQUNuQixhQUFPO0FBQUEsUUFDTCxLQUFLO0FBQUEsTUFDUDtBQUFBLElBQ0Y7QUFBQTtBQUFBLEVBQ00sV0FBVztBQUFBO0FBQ2YsYUFBTztBQUFBLFFBQ0wsVUFBVSxTQUFTLFdBQVc7QUFBQSxNQUNoQztBQUFBLElBQ0Y7QUFBQTtBQUFBLEVBQ00sY0FBYztBQUFBO0FBQ2xCLFlBQU0sS0FBSyxjQUFjLHlCQUF5QjtBQUFBLElBQ3BEO0FBQUE7QUFBQSxFQUNNLDBCQUEwQjtBQUFBO0FBQzlCLFlBQU0sS0FBSyxjQUFjLHlCQUF5QjtBQUFBLElBQ3BEO0FBQUE7QUFDRjsiLCJuYW1lcyI6W10sInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswXX0=
