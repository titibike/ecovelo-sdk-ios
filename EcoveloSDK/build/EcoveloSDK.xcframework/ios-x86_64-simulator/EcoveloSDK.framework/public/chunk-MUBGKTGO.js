import {
  win
} from "./chunk-YSZWGYJT.js";
import {
  config,
  printIonError
} from "./chunk-BFPTXCSH.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// node_modules/@ionic/core/dist/esm/hardware-back-button-Dhbd-23H.js
var shouldUseCloseWatcher = () => config.get("experimentalCloseWatcher", false) && win !== void 0 && "CloseWatcher" in win;
var blockHardwareBackButton = () => {
  document.addEventListener("backbutton", () => {
  });
};
var startHardwareBackButton = () => {
  const doc = document;
  let busy = false;
  const backButtonCallback = () => {
    if (busy) {
      return;
    }
    let index = 0;
    let handlers = [];
    const ev = new CustomEvent("ionBackButton", {
      bubbles: false,
      detail: {
        register(priority, handler) {
          handlers.push({
            priority,
            handler,
            id: index++
          });
        }
      }
    });
    doc.dispatchEvent(ev);
    const executeAction = (handlerRegister) => __async(null, null, function* () {
      try {
        if (handlerRegister === null || handlerRegister === void 0 ? void 0 : handlerRegister.handler) {
          const result = handlerRegister.handler(processHandlers);
          if (result != null) {
            yield result;
          }
        }
      } catch (e) {
        printIonError("[ion-app] - Exception in startHardwareBackButton:", e);
      }
    });
    const processHandlers = () => {
      if (handlers.length > 0) {
        let selectedHandler = {
          priority: Number.MIN_SAFE_INTEGER,
          handler: () => void 0,
          id: -1
        };
        handlers.forEach((handler) => {
          if (handler.priority >= selectedHandler.priority) {
            selectedHandler = handler;
          }
        });
        busy = true;
        handlers = handlers.filter((handler) => handler.id !== selectedHandler.id);
        executeAction(selectedHandler).then(() => busy = false);
      }
    };
    processHandlers();
  };
  if (shouldUseCloseWatcher()) {
    let watcher;
    const configureWatcher = () => {
      watcher === null || watcher === void 0 ? void 0 : watcher.destroy();
      watcher = new win.CloseWatcher();
      watcher.onclose = () => {
        backButtonCallback();
        configureWatcher();
      };
    };
    configureWatcher();
  } else {
    doc.addEventListener("backbutton", backButtonCallback);
  }
};
var OVERLAY_BACK_BUTTON_PRIORITY = 100;
var MENU_BACK_BUTTON_PRIORITY = 99;

export {
  shouldUseCloseWatcher,
  blockHardwareBackButton,
  startHardwareBackButton,
  OVERLAY_BACK_BUTTON_PRIORITY,
  MENU_BACK_BUTTON_PRIORITY
};
/*! Bundled license information:

@ionic/core/dist/esm/hardware-back-button-Dhbd-23H.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9oYXJkd2FyZS1iYWNrLWJ1dHRvbi1EaGJkLTIzSC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgdyBhcyB3aW4gfSBmcm9tICcuL2luZGV4LVpqUDRDamVaLmpzJztcbmltcG9ydCB7IGUgYXMgY29uZmlnLCBqIGFzIHByaW50SW9uRXJyb3IgfSBmcm9tICcuL2luZGV4LTREeFk2X2dHLmpzJztcblxuLyoqXG4gKiBDbG9zZVdhdGNoZXIgaXMgYSBuZXdlciBBUEkgdGhhdCBsZXRzXG4gKiB1c2UgZGV0ZWN0IHRoZSBoYXJkd2FyZSBiYWNrIGJ1dHRvbiBldmVudFxuICogaW4gYSB3ZWIgYnJvd3NlcjogaHR0cHM6Ly9jYW5pdXNlLmNvbS8/c2VhcmNoPWNsb3Nld2F0Y2hlclxuICogSG93ZXZlciwgbm90IGV2ZXJ5IGJyb3dzZXIgc3VwcG9ydHMgaXQgeWV0LlxuICpcbiAqIFRoaXMgbmVlZHMgdG8gYmUgYSBmdW5jdGlvbiBzbyB0aGF0IHdlIGNhblxuICogY2hlY2sgdGhlIGNvbmZpZyBvbmNlIGl0IGhhcyBiZWVuIHNldC5cbiAqIE90aGVyd2lzZSwgdGhpcyBjb2RlIHdvdWxkIGJlIGV2YWx1YXRlZCB0aGVcbiAqIG1vbWVudCB0aGlzIGZpbGUgaXMgZXZhbHVhdGVkIHdoaWNoIGNvdWxkIGJlXG4gKiBiZWZvcmUgdGhlIGNvbmZpZyBpcyBzZXQuXG4gKi9cbmNvbnN0IHNob3VsZFVzZUNsb3NlV2F0Y2hlciA9ICgpID0+IGNvbmZpZy5nZXQoJ2V4cGVyaW1lbnRhbENsb3NlV2F0Y2hlcicsIGZhbHNlKSAmJiB3aW4gIT09IHVuZGVmaW5lZCAmJiAnQ2xvc2VXYXRjaGVyJyBpbiB3aW47XG4vKipcbiAqIFdoZW4gaGFyZHdhcmVCYWNrQnV0dG9uOiBmYWxzZSBpbiBjb25maWcsXG4gKiB3ZSBuZWVkIHRvIG1ha2Ugc3VyZSB3ZSBhbHNvIGJsb2NrIHRoZSBkZWZhdWx0XG4gKiB3ZWJ2aWV3IGJlaGF2aW9yLiBJZiB3ZSBkb24ndCB0aGVuIGl0IHdpbGwgYmVcbiAqIHBvc3NpYmxlIGZvciB1c2VycyB0byBuYXZpZ2F0ZSBiYWNrd2FyZCB3aGlsZVxuICogYW4gb3ZlcmxheSBpcyBzdGlsbCBvcGVuLiBBZGRpdGlvbmFsbHksIGl0IHdpbGxcbiAqIGdpdmUgdGhlIGFwcGVhcmFuY2UgdGhhdCB0aGUgaGFyZHdhcmVCYWNrQnV0dG9uXG4gKiBjb25maWcgaXMgbm90IHdvcmtpbmcgYXMgdGhlIHBhZ2UgdHJhbnNpdGlvblxuICogd2lsbCBzdGlsbCBoYXBwZW4uXG4gKi9cbmNvbnN0IGJsb2NrSGFyZHdhcmVCYWNrQnV0dG9uID0gKCkgPT4ge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdiYWNrYnV0dG9uJywgKCkgPT4ge30pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG59O1xuY29uc3Qgc3RhcnRIYXJkd2FyZUJhY2tCdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IGRvYyA9IGRvY3VtZW50O1xuICBsZXQgYnVzeSA9IGZhbHNlO1xuICBjb25zdCBiYWNrQnV0dG9uQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgaWYgKGJ1c3kpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBsZXQgaGFuZGxlcnMgPSBbXTtcbiAgICBjb25zdCBldiA9IG5ldyBDdXN0b21FdmVudCgnaW9uQmFja0J1dHRvbicsIHtcbiAgICAgIGJ1YmJsZXM6IGZhbHNlLFxuICAgICAgZGV0YWlsOiB7XG4gICAgICAgIHJlZ2lzdGVyKHByaW9yaXR5LCBoYW5kbGVyKSB7XG4gICAgICAgICAgaGFuZGxlcnMucHVzaCh7XG4gICAgICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgICAgIGhhbmRsZXIsXG4gICAgICAgICAgICBpZDogaW5kZXgrK1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgZG9jLmRpc3BhdGNoRXZlbnQoZXYpO1xuICAgIGNvbnN0IGV4ZWN1dGVBY3Rpb24gPSBhc3luYyBoYW5kbGVyUmVnaXN0ZXIgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGhhbmRsZXJSZWdpc3RlciA9PT0gbnVsbCB8fCBoYW5kbGVyUmVnaXN0ZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGhhbmRsZXJSZWdpc3Rlci5oYW5kbGVyKSB7XG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gaGFuZGxlclJlZ2lzdGVyLmhhbmRsZXIocHJvY2Vzc0hhbmRsZXJzKTtcbiAgICAgICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGF3YWl0IHJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcHJpbnRJb25FcnJvcignW2lvbi1hcHBdIC0gRXhjZXB0aW9uIGluIHN0YXJ0SGFyZHdhcmVCYWNrQnV0dG9uOicsIGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgcHJvY2Vzc0hhbmRsZXJzID0gKCkgPT4ge1xuICAgICAgaWYgKGhhbmRsZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IHNlbGVjdGVkSGFuZGxlciA9IHtcbiAgICAgICAgICBwcmlvcml0eTogTnVtYmVyLk1JTl9TQUZFX0lOVEVHRVIsXG4gICAgICAgICAgaGFuZGxlcjogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgICAgIGlkOiAtMVxuICAgICAgICB9O1xuICAgICAgICBoYW5kbGVycy5mb3JFYWNoKGhhbmRsZXIgPT4ge1xuICAgICAgICAgIGlmIChoYW5kbGVyLnByaW9yaXR5ID49IHNlbGVjdGVkSGFuZGxlci5wcmlvcml0eSkge1xuICAgICAgICAgICAgc2VsZWN0ZWRIYW5kbGVyID0gaGFuZGxlcjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBidXN5ID0gdHJ1ZTtcbiAgICAgICAgaGFuZGxlcnMgPSBoYW5kbGVycy5maWx0ZXIoaGFuZGxlciA9PiBoYW5kbGVyLmlkICE9PSBzZWxlY3RlZEhhbmRsZXIuaWQpO1xuICAgICAgICBleGVjdXRlQWN0aW9uKHNlbGVjdGVkSGFuZGxlcikudGhlbigoKSA9PiBidXN5ID0gZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG4gICAgcHJvY2Vzc0hhbmRsZXJzKCk7XG4gIH07XG4gIC8qKlxuICAgKiBJZiB0aGUgQ2xvc2VXYXRjaGVyIGlzIGRlZmluZWQgdGhlblxuICAgKiB3ZSBkb24ndCB3YW50IHRvIGFsc28gbGlzdGVuIGZvciB0aGUgbmF0aXZlXG4gICAqIGJhY2tidXR0b24gZXZlbnQgb3RoZXJ3aXNlIHdlIG1heSBnZXQgZHVwbGljYXRlXG4gICAqIGV2ZW50cyBmaXJpbmcuXG4gICAqL1xuICBpZiAoc2hvdWxkVXNlQ2xvc2VXYXRjaGVyKCkpIHtcbiAgICBsZXQgd2F0Y2hlcjtcbiAgICBjb25zdCBjb25maWd1cmVXYXRjaGVyID0gKCkgPT4ge1xuICAgICAgd2F0Y2hlciA9PT0gbnVsbCB8fCB3YXRjaGVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiB3YXRjaGVyLmRlc3Ryb3koKTtcbiAgICAgIHdhdGNoZXIgPSBuZXcgd2luLkNsb3NlV2F0Y2hlcigpO1xuICAgICAgLyoqXG4gICAgICAgKiBPbmNlIGEgY2xvc2UgcmVxdWVzdCBoYXBwZW5zXG4gICAgICAgKiB0aGUgd2F0Y2hlciBnZXRzIGRlc3Ryb3llZC5cbiAgICAgICAqIEFzIGEgcmVzdWx0LCB3ZSBuZWVkIHRvIHJlLWNvbmZpZ3VyZVxuICAgICAgICogdGhlIHdhdGNoZXIgc28gd2UgY2FuIHJlc3BvbmQgdG8gb3RoZXJcbiAgICAgICAqIGNsb3NlIHJlcXVlc3RzLlxuICAgICAgICovXG4gICAgICB3YXRjaGVyLm9uY2xvc2UgPSAoKSA9PiB7XG4gICAgICAgIGJhY2tCdXR0b25DYWxsYmFjaygpO1xuICAgICAgICBjb25maWd1cmVXYXRjaGVyKCk7XG4gICAgICB9O1xuICAgIH07XG4gICAgY29uZmlndXJlV2F0Y2hlcigpO1xuICB9IGVsc2Uge1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdiYWNrYnV0dG9uJywgYmFja0J1dHRvbkNhbGxiYWNrKTtcbiAgfVxufTtcbmNvbnN0IE9WRVJMQVlfQkFDS19CVVRUT05fUFJJT1JJVFkgPSAxMDA7XG5jb25zdCBNRU5VX0JBQ0tfQlVUVE9OX1BSSU9SSVRZID0gOTk7IC8vIDEgbGVzcyB0aGFuIG92ZXJsYXkgcHJpb3JpdHkgc2luY2UgbWVudSBpcyBkaXNwbGF5ZWQgYmVoaW5kIG92ZXJsYXlzXG5cbmV4cG9ydCB7IE1FTlVfQkFDS19CVVRUT05fUFJJT1JJVFksIE9WRVJMQVlfQkFDS19CVVRUT05fUFJJT1JJVFksIGJsb2NrSGFyZHdhcmVCYWNrQnV0dG9uLCBzaG91bGRVc2VDbG9zZVdhdGNoZXIsIHN0YXJ0SGFyZHdhcmVCYWNrQnV0dG9uIH07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFrQkEsSUFBTSx3QkFBd0IsTUFBTSxPQUFPLElBQUksNEJBQTRCLEtBQUssS0FBSyxRQUFRLFVBQWEsa0JBQWtCO0FBVzVILElBQU0sMEJBQTBCLE1BQU07QUFDcEMsV0FBUyxpQkFBaUIsY0FBYyxNQUFNO0FBQUEsRUFBQyxDQUFDO0FBQ2xEO0FBQ0EsSUFBTSwwQkFBMEIsTUFBTTtBQUNwQyxRQUFNLE1BQU07QUFDWixNQUFJLE9BQU87QUFDWCxRQUFNLHFCQUFxQixNQUFNO0FBQy9CLFFBQUksTUFBTTtBQUNSO0FBQUEsSUFDRjtBQUNBLFFBQUksUUFBUTtBQUNaLFFBQUksV0FBVyxDQUFDO0FBQ2hCLFVBQU0sS0FBSyxJQUFJLFlBQVksaUJBQWlCO0FBQUEsTUFDMUMsU0FBUztBQUFBLE1BQ1QsUUFBUTtBQUFBLFFBQ04sU0FBUyxVQUFVLFNBQVM7QUFDMUIsbUJBQVMsS0FBSztBQUFBLFlBQ1o7QUFBQSxZQUNBO0FBQUEsWUFDQSxJQUFJO0FBQUEsVUFDTixDQUFDO0FBQUEsUUFDSDtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFDRCxRQUFJLGNBQWMsRUFBRTtBQUNwQixVQUFNLGdCQUFnQixDQUFNLG9CQUFtQjtBQUM3QyxVQUFJO0FBQ0YsWUFBSSxvQkFBb0IsUUFBUSxvQkFBb0IsU0FBUyxTQUFTLGdCQUFnQixTQUFTO0FBQzdGLGdCQUFNLFNBQVMsZ0JBQWdCLFFBQVEsZUFBZTtBQUN0RCxjQUFJLFVBQVUsTUFBTTtBQUNsQixrQkFBTTtBQUFBLFVBQ1I7QUFBQSxRQUNGO0FBQUEsTUFDRixTQUFTLEdBQUc7QUFDVixzQkFBYyxxREFBcUQsQ0FBQztBQUFBLE1BQ3RFO0FBQUEsSUFDRjtBQUNBLFVBQU0sa0JBQWtCLE1BQU07QUFDNUIsVUFBSSxTQUFTLFNBQVMsR0FBRztBQUN2QixZQUFJLGtCQUFrQjtBQUFBLFVBQ3BCLFVBQVUsT0FBTztBQUFBLFVBQ2pCLFNBQVMsTUFBTTtBQUFBLFVBQ2YsSUFBSTtBQUFBLFFBQ047QUFDQSxpQkFBUyxRQUFRLGFBQVc7QUFDMUIsY0FBSSxRQUFRLFlBQVksZ0JBQWdCLFVBQVU7QUFDaEQsOEJBQWtCO0FBQUEsVUFDcEI7QUFBQSxRQUNGLENBQUM7QUFDRCxlQUFPO0FBQ1AsbUJBQVcsU0FBUyxPQUFPLGFBQVcsUUFBUSxPQUFPLGdCQUFnQixFQUFFO0FBQ3ZFLHNCQUFjLGVBQWUsRUFBRSxLQUFLLE1BQU0sT0FBTyxLQUFLO0FBQUEsTUFDeEQ7QUFBQSxJQUNGO0FBQ0Esb0JBQWdCO0FBQUEsRUFDbEI7QUFPQSxNQUFJLHNCQUFzQixHQUFHO0FBQzNCLFFBQUk7QUFDSixVQUFNLG1CQUFtQixNQUFNO0FBQzdCLGtCQUFZLFFBQVEsWUFBWSxTQUFTLFNBQVMsUUFBUSxRQUFRO0FBQ2xFLGdCQUFVLElBQUksSUFBSSxhQUFhO0FBUS9CLGNBQVEsVUFBVSxNQUFNO0FBQ3RCLDJCQUFtQjtBQUNuQix5QkFBaUI7QUFBQSxNQUNuQjtBQUFBLElBQ0Y7QUFDQSxxQkFBaUI7QUFBQSxFQUNuQixPQUFPO0FBQ0wsUUFBSSxpQkFBaUIsY0FBYyxrQkFBa0I7QUFBQSxFQUN2RDtBQUNGO0FBQ0EsSUFBTSwrQkFBK0I7QUFDckMsSUFBTSw0QkFBNEI7IiwibmFtZXMiOltdLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19
