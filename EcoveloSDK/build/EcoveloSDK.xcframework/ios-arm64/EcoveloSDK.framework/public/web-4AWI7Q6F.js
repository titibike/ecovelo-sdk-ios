import {
  WebPlugin
} from "./chunk-KGBWUDTS.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// node_modules/@capacitor/screen-orientation/dist/esm/web.js
var ScreenOrientationWeb = class extends WebPlugin {
  constructor() {
    super();
    if (typeof screen !== "undefined" && typeof screen.orientation !== "undefined") {
      screen.orientation.addEventListener("change", () => {
        const type = screen.orientation.type;
        this.notifyListeners("screenOrientationChange", {
          type
        });
      });
    }
  }
  orientation() {
    return __async(this, null, function* () {
      if (typeof screen === "undefined" || !screen.orientation) {
        throw this.unavailable("ScreenOrientation API not available in this browser");
      }
      return {
        type: screen.orientation.type
      };
    });
  }
  lock(options) {
    return __async(this, null, function* () {
      if (typeof screen === "undefined" || !screen.orientation || !screen.orientation.lock) {
        throw this.unavailable("ScreenOrientation API not available in this browser");
      }
      try {
        yield screen.orientation.lock(options.orientation);
      } catch (_a) {
        throw this.unavailable("ScreenOrientation API not available in this browser");
      }
    });
  }
  unlock() {
    return __async(this, null, function* () {
      if (typeof screen === "undefined" || !screen.orientation || !screen.orientation.unlock) {
        throw this.unavailable("ScreenOrientation API not available in this browser");
      }
      try {
        screen.orientation.unlock();
      } catch (_a) {
        throw this.unavailable("ScreenOrientation API not available in this browser");
      }
    });
  }
};
export {
  ScreenOrientationWeb
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY2FwYWNpdG9yL3NjcmVlbi1vcmllbnRhdGlvbi9kaXN0L2VzbS93ZWIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV2ViUGx1Z2luIH0gZnJvbSAnQGNhcGFjaXRvci9jb3JlJztcbmV4cG9ydCBjbGFzcyBTY3JlZW5PcmllbnRhdGlvbldlYiBleHRlbmRzIFdlYlBsdWdpbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgaWYgKHR5cGVvZiBzY3JlZW4gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBzY3JlZW4ub3JpZW50YXRpb24gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBzY3JlZW4ub3JpZW50YXRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0eXBlID0gc2NyZWVuLm9yaWVudGF0aW9uLnR5cGU7XG4gICAgICAgIHRoaXMubm90aWZ5TGlzdGVuZXJzKCdzY3JlZW5PcmllbnRhdGlvbkNoYW5nZScsIHtcbiAgICAgICAgICB0eXBlXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGFzeW5jIG9yaWVudGF0aW9uKCkge1xuICAgIGlmICh0eXBlb2Ygc2NyZWVuID09PSAndW5kZWZpbmVkJyB8fCAhc2NyZWVuLm9yaWVudGF0aW9uKSB7XG4gICAgICB0aHJvdyB0aGlzLnVuYXZhaWxhYmxlKCdTY3JlZW5PcmllbnRhdGlvbiBBUEkgbm90IGF2YWlsYWJsZSBpbiB0aGlzIGJyb3dzZXInKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IHNjcmVlbi5vcmllbnRhdGlvbi50eXBlXG4gICAgfTtcbiAgfVxuICBhc3luYyBsb2NrKG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIHNjcmVlbiA9PT0gJ3VuZGVmaW5lZCcgfHwgIXNjcmVlbi5vcmllbnRhdGlvbiB8fCAhc2NyZWVuLm9yaWVudGF0aW9uLmxvY2spIHtcbiAgICAgIHRocm93IHRoaXMudW5hdmFpbGFibGUoJ1NjcmVlbk9yaWVudGF0aW9uIEFQSSBub3QgYXZhaWxhYmxlIGluIHRoaXMgYnJvd3NlcicpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgYXdhaXQgc2NyZWVuLm9yaWVudGF0aW9uLmxvY2sob3B0aW9ucy5vcmllbnRhdGlvbik7XG4gICAgfSBjYXRjaCAoX2EpIHtcbiAgICAgIHRocm93IHRoaXMudW5hdmFpbGFibGUoJ1NjcmVlbk9yaWVudGF0aW9uIEFQSSBub3QgYXZhaWxhYmxlIGluIHRoaXMgYnJvd3NlcicpO1xuICAgIH1cbiAgfVxuICBhc3luYyB1bmxvY2soKSB7XG4gICAgaWYgKHR5cGVvZiBzY3JlZW4gPT09ICd1bmRlZmluZWQnIHx8ICFzY3JlZW4ub3JpZW50YXRpb24gfHwgIXNjcmVlbi5vcmllbnRhdGlvbi51bmxvY2spIHtcbiAgICAgIHRocm93IHRoaXMudW5hdmFpbGFibGUoJ1NjcmVlbk9yaWVudGF0aW9uIEFQSSBub3QgYXZhaWxhYmxlIGluIHRoaXMgYnJvd3NlcicpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgc2NyZWVuLm9yaWVudGF0aW9uLnVubG9jaygpO1xuICAgIH0gY2F0Y2ggKF9hKSB7XG4gICAgICB0aHJvdyB0aGlzLnVuYXZhaWxhYmxlKCdTY3JlZW5PcmllbnRhdGlvbiBBUEkgbm90IGF2YWlsYWJsZSBpbiB0aGlzIGJyb3dzZXInKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDTyxJQUFNLHVCQUFOLGNBQW1DLFVBQVU7QUFBQSxFQUNsRCxjQUFjO0FBQ1osVUFBTTtBQUNOLFFBQUksT0FBTyxXQUFXLGVBQWUsT0FBTyxPQUFPLGdCQUFnQixhQUFhO0FBQzlFLGFBQU8sWUFBWSxpQkFBaUIsVUFBVSxNQUFNO0FBQ2xELGNBQU0sT0FBTyxPQUFPLFlBQVk7QUFDaEMsYUFBSyxnQkFBZ0IsMkJBQTJCO0FBQUEsVUFDOUM7QUFBQSxRQUNGLENBQUM7QUFBQSxNQUNILENBQUM7QUFBQSxJQUNIO0FBQUEsRUFDRjtBQUFBLEVBQ00sY0FBYztBQUFBO0FBQ2xCLFVBQUksT0FBTyxXQUFXLGVBQWUsQ0FBQyxPQUFPLGFBQWE7QUFDeEQsY0FBTSxLQUFLLFlBQVkscURBQXFEO0FBQUEsTUFDOUU7QUFDQSxhQUFPO0FBQUEsUUFDTCxNQUFNLE9BQU8sWUFBWTtBQUFBLE1BQzNCO0FBQUEsSUFDRjtBQUFBO0FBQUEsRUFDTSxLQUFLLFNBQVM7QUFBQTtBQUNsQixVQUFJLE9BQU8sV0FBVyxlQUFlLENBQUMsT0FBTyxlQUFlLENBQUMsT0FBTyxZQUFZLE1BQU07QUFDcEYsY0FBTSxLQUFLLFlBQVkscURBQXFEO0FBQUEsTUFDOUU7QUFDQSxVQUFJO0FBQ0YsY0FBTSxPQUFPLFlBQVksS0FBSyxRQUFRLFdBQVc7QUFBQSxNQUNuRCxTQUFTLElBQUk7QUFDWCxjQUFNLEtBQUssWUFBWSxxREFBcUQ7QUFBQSxNQUM5RTtBQUFBLElBQ0Y7QUFBQTtBQUFBLEVBQ00sU0FBUztBQUFBO0FBQ2IsVUFBSSxPQUFPLFdBQVcsZUFBZSxDQUFDLE9BQU8sZUFBZSxDQUFDLE9BQU8sWUFBWSxRQUFRO0FBQ3RGLGNBQU0sS0FBSyxZQUFZLHFEQUFxRDtBQUFBLE1BQzlFO0FBQ0EsVUFBSTtBQUNGLGVBQU8sWUFBWSxPQUFPO0FBQUEsTUFDNUIsU0FBUyxJQUFJO0FBQ1gsY0FBTSxLQUFLLFlBQVkscURBQXFEO0FBQUEsTUFDOUU7QUFBQSxJQUNGO0FBQUE7QUFDRjsiLCJuYW1lcyI6W10sInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswXX0=
