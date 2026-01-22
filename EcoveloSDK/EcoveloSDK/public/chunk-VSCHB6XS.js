import {
  config,
  printIonError
} from "./chunk-7OBOYUXW.js";
import {
  win
} from "./chunk-34HBWEZ3.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// node_modules/@ionic/core/components/hardware-back-button.js
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

@ionic/core/components/hardware-back-button.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9jb21wb25lbnRzL2hhcmR3YXJlLWJhY2stYnV0dG9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyB3IGFzIHdpbiB9IGZyb20gJy4vaW5kZXg5LmpzJztcbmltcG9ydCB7IGMgYXMgY29uZmlnLCBhIGFzIHByaW50SW9uRXJyb3IgfSBmcm9tICcuL2luZGV4NC5qcyc7XG5cbi8qKlxuICogQ2xvc2VXYXRjaGVyIGlzIGEgbmV3ZXIgQVBJIHRoYXQgbGV0c1xuICogdXNlIGRldGVjdCB0aGUgaGFyZHdhcmUgYmFjayBidXR0b24gZXZlbnRcbiAqIGluIGEgd2ViIGJyb3dzZXI6IGh0dHBzOi8vY2FuaXVzZS5jb20vP3NlYXJjaD1jbG9zZXdhdGNoZXJcbiAqIEhvd2V2ZXIsIG5vdCBldmVyeSBicm93c2VyIHN1cHBvcnRzIGl0IHlldC5cbiAqXG4gKiBUaGlzIG5lZWRzIHRvIGJlIGEgZnVuY3Rpb24gc28gdGhhdCB3ZSBjYW5cbiAqIGNoZWNrIHRoZSBjb25maWcgb25jZSBpdCBoYXMgYmVlbiBzZXQuXG4gKiBPdGhlcndpc2UsIHRoaXMgY29kZSB3b3VsZCBiZSBldmFsdWF0ZWQgdGhlXG4gKiBtb21lbnQgdGhpcyBmaWxlIGlzIGV2YWx1YXRlZCB3aGljaCBjb3VsZCBiZVxuICogYmVmb3JlIHRoZSBjb25maWcgaXMgc2V0LlxuICovXG5jb25zdCBzaG91bGRVc2VDbG9zZVdhdGNoZXIgPSAoKSA9PiBjb25maWcuZ2V0KCdleHBlcmltZW50YWxDbG9zZVdhdGNoZXInLCBmYWxzZSkgJiYgd2luICE9PSB1bmRlZmluZWQgJiYgJ0Nsb3NlV2F0Y2hlcicgaW4gd2luO1xuLyoqXG4gKiBXaGVuIGhhcmR3YXJlQmFja0J1dHRvbjogZmFsc2UgaW4gY29uZmlnLFxuICogd2UgbmVlZCB0byBtYWtlIHN1cmUgd2UgYWxzbyBibG9jayB0aGUgZGVmYXVsdFxuICogd2VidmlldyBiZWhhdmlvci4gSWYgd2UgZG9uJ3QgdGhlbiBpdCB3aWxsIGJlXG4gKiBwb3NzaWJsZSBmb3IgdXNlcnMgdG8gbmF2aWdhdGUgYmFja3dhcmQgd2hpbGVcbiAqIGFuIG92ZXJsYXkgaXMgc3RpbGwgb3Blbi4gQWRkaXRpb25hbGx5LCBpdCB3aWxsXG4gKiBnaXZlIHRoZSBhcHBlYXJhbmNlIHRoYXQgdGhlIGhhcmR3YXJlQmFja0J1dHRvblxuICogY29uZmlnIGlzIG5vdCB3b3JraW5nIGFzIHRoZSBwYWdlIHRyYW5zaXRpb25cbiAqIHdpbGwgc3RpbGwgaGFwcGVuLlxuICovXG5jb25zdCBibG9ja0hhcmR3YXJlQmFja0J1dHRvbiA9ICgpID0+IHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYmFja2J1dHRvbicsICgpID0+IHt9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxufTtcbmNvbnN0IHN0YXJ0SGFyZHdhcmVCYWNrQnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCBkb2MgPSBkb2N1bWVudDtcbiAgbGV0IGJ1c3kgPSBmYWxzZTtcbiAgY29uc3QgYmFja0J1dHRvbkNhbGxiYWNrID0gKCkgPT4ge1xuICAgIGlmIChidXN5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBpbmRleCA9IDA7XG4gICAgbGV0IGhhbmRsZXJzID0gW107XG4gICAgY29uc3QgZXYgPSBuZXcgQ3VzdG9tRXZlbnQoJ2lvbkJhY2tCdXR0b24nLCB7XG4gICAgICBidWJibGVzOiBmYWxzZSxcbiAgICAgIGRldGFpbDoge1xuICAgICAgICByZWdpc3Rlcihwcmlvcml0eSwgaGFuZGxlcikge1xuICAgICAgICAgIGhhbmRsZXJzLnB1c2goe1xuICAgICAgICAgICAgcHJpb3JpdHksXG4gICAgICAgICAgICBoYW5kbGVyLFxuICAgICAgICAgICAgaWQ6IGluZGV4KytcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIGRvYy5kaXNwYXRjaEV2ZW50KGV2KTtcbiAgICBjb25zdCBleGVjdXRlQWN0aW9uID0gYXN5bmMgaGFuZGxlclJlZ2lzdGVyID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChoYW5kbGVyUmVnaXN0ZXIgPT09IG51bGwgfHwgaGFuZGxlclJlZ2lzdGVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBoYW5kbGVyUmVnaXN0ZXIuaGFuZGxlcikge1xuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGhhbmRsZXJSZWdpc3Rlci5oYW5kbGVyKHByb2Nlc3NIYW5kbGVycyk7XG4gICAgICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgICAgICBhd2FpdCByZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHByaW50SW9uRXJyb3IoJ1tpb24tYXBwXSAtIEV4Y2VwdGlvbiBpbiBzdGFydEhhcmR3YXJlQmFja0J1dHRvbjonLCBlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IHByb2Nlc3NIYW5kbGVycyA9ICgpID0+IHtcbiAgICAgIGlmIChoYW5kbGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCBzZWxlY3RlZEhhbmRsZXIgPSB7XG4gICAgICAgICAgcHJpb3JpdHk6IE51bWJlci5NSU5fU0FGRV9JTlRFR0VSLFxuICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHVuZGVmaW5lZCxcbiAgICAgICAgICBpZDogLTFcbiAgICAgICAgfTtcbiAgICAgICAgaGFuZGxlcnMuZm9yRWFjaChoYW5kbGVyID0+IHtcbiAgICAgICAgICBpZiAoaGFuZGxlci5wcmlvcml0eSA+PSBzZWxlY3RlZEhhbmRsZXIucHJpb3JpdHkpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkSGFuZGxlciA9IGhhbmRsZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgYnVzeSA9IHRydWU7XG4gICAgICAgIGhhbmRsZXJzID0gaGFuZGxlcnMuZmlsdGVyKGhhbmRsZXIgPT4gaGFuZGxlci5pZCAhPT0gc2VsZWN0ZWRIYW5kbGVyLmlkKTtcbiAgICAgICAgZXhlY3V0ZUFjdGlvbihzZWxlY3RlZEhhbmRsZXIpLnRoZW4oKCkgPT4gYnVzeSA9IGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHByb2Nlc3NIYW5kbGVycygpO1xuICB9O1xuICAvKipcbiAgICogSWYgdGhlIENsb3NlV2F0Y2hlciBpcyBkZWZpbmVkIHRoZW5cbiAgICogd2UgZG9uJ3Qgd2FudCB0byBhbHNvIGxpc3RlbiBmb3IgdGhlIG5hdGl2ZVxuICAgKiBiYWNrYnV0dG9uIGV2ZW50IG90aGVyd2lzZSB3ZSBtYXkgZ2V0IGR1cGxpY2F0ZVxuICAgKiBldmVudHMgZmlyaW5nLlxuICAgKi9cbiAgaWYgKHNob3VsZFVzZUNsb3NlV2F0Y2hlcigpKSB7XG4gICAgbGV0IHdhdGNoZXI7XG4gICAgY29uc3QgY29uZmlndXJlV2F0Y2hlciA9ICgpID0+IHtcbiAgICAgIHdhdGNoZXIgPT09IG51bGwgfHwgd2F0Y2hlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogd2F0Y2hlci5kZXN0cm95KCk7XG4gICAgICB3YXRjaGVyID0gbmV3IHdpbi5DbG9zZVdhdGNoZXIoKTtcbiAgICAgIC8qKlxuICAgICAgICogT25jZSBhIGNsb3NlIHJlcXVlc3QgaGFwcGVuc1xuICAgICAgICogdGhlIHdhdGNoZXIgZ2V0cyBkZXN0cm95ZWQuXG4gICAgICAgKiBBcyBhIHJlc3VsdCwgd2UgbmVlZCB0byByZS1jb25maWd1cmVcbiAgICAgICAqIHRoZSB3YXRjaGVyIHNvIHdlIGNhbiByZXNwb25kIHRvIG90aGVyXG4gICAgICAgKiBjbG9zZSByZXF1ZXN0cy5cbiAgICAgICAqL1xuICAgICAgd2F0Y2hlci5vbmNsb3NlID0gKCkgPT4ge1xuICAgICAgICBiYWNrQnV0dG9uQ2FsbGJhY2soKTtcbiAgICAgICAgY29uZmlndXJlV2F0Y2hlcigpO1xuICAgICAgfTtcbiAgICB9O1xuICAgIGNvbmZpZ3VyZVdhdGNoZXIoKTtcbiAgfSBlbHNlIHtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignYmFja2J1dHRvbicsIGJhY2tCdXR0b25DYWxsYmFjayk7XG4gIH1cbn07XG5jb25zdCBPVkVSTEFZX0JBQ0tfQlVUVE9OX1BSSU9SSVRZID0gMTAwO1xuY29uc3QgTUVOVV9CQUNLX0JVVFRPTl9QUklPUklUWSA9IDk5OyAvLyAxIGxlc3MgdGhhbiBvdmVybGF5IHByaW9yaXR5IHNpbmNlIG1lbnUgaXMgZGlzcGxheWVkIGJlaGluZCBvdmVybGF5c1xuXG5leHBvcnQgeyBNRU5VX0JBQ0tfQlVUVE9OX1BSSU9SSVRZLCBPVkVSTEFZX0JBQ0tfQlVUVE9OX1BSSU9SSVRZLCBibG9ja0hhcmR3YXJlQmFja0J1dHRvbiwgc2hvdWxkVXNlQ2xvc2VXYXRjaGVyLCBzdGFydEhhcmR3YXJlQmFja0J1dHRvbiB9OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBa0JBLElBQU0sd0JBQXdCLE1BQU0sT0FBTyxJQUFJLDRCQUE0QixLQUFLLEtBQUssUUFBUSxVQUFhLGtCQUFrQjtBQVc1SCxJQUFNLDBCQUEwQixNQUFNO0FBQ3BDLFdBQVMsaUJBQWlCLGNBQWMsTUFBTTtBQUFBLEVBQUMsQ0FBQztBQUNsRDtBQUNBLElBQU0sMEJBQTBCLE1BQU07QUFDcEMsUUFBTSxNQUFNO0FBQ1osTUFBSSxPQUFPO0FBQ1gsUUFBTSxxQkFBcUIsTUFBTTtBQUMvQixRQUFJLE1BQU07QUFDUjtBQUFBLElBQ0Y7QUFDQSxRQUFJLFFBQVE7QUFDWixRQUFJLFdBQVcsQ0FBQztBQUNoQixVQUFNLEtBQUssSUFBSSxZQUFZLGlCQUFpQjtBQUFBLE1BQzFDLFNBQVM7QUFBQSxNQUNULFFBQVE7QUFBQSxRQUNOLFNBQVMsVUFBVSxTQUFTO0FBQzFCLG1CQUFTLEtBQUs7QUFBQSxZQUNaO0FBQUEsWUFDQTtBQUFBLFlBQ0EsSUFBSTtBQUFBLFVBQ04sQ0FBQztBQUFBLFFBQ0g7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQ0QsUUFBSSxjQUFjLEVBQUU7QUFDcEIsVUFBTSxnQkFBZ0IsQ0FBTSxvQkFBbUI7QUFDN0MsVUFBSTtBQUNGLFlBQUksb0JBQW9CLFFBQVEsb0JBQW9CLFNBQVMsU0FBUyxnQkFBZ0IsU0FBUztBQUM3RixnQkFBTSxTQUFTLGdCQUFnQixRQUFRLGVBQWU7QUFDdEQsY0FBSSxVQUFVLE1BQU07QUFDbEIsa0JBQU07QUFBQSxVQUNSO0FBQUEsUUFDRjtBQUFBLE1BQ0YsU0FBUyxHQUFHO0FBQ1Ysc0JBQWMscURBQXFELENBQUM7QUFBQSxNQUN0RTtBQUFBLElBQ0Y7QUFDQSxVQUFNLGtCQUFrQixNQUFNO0FBQzVCLFVBQUksU0FBUyxTQUFTLEdBQUc7QUFDdkIsWUFBSSxrQkFBa0I7QUFBQSxVQUNwQixVQUFVLE9BQU87QUFBQSxVQUNqQixTQUFTLE1BQU07QUFBQSxVQUNmLElBQUk7QUFBQSxRQUNOO0FBQ0EsaUJBQVMsUUFBUSxhQUFXO0FBQzFCLGNBQUksUUFBUSxZQUFZLGdCQUFnQixVQUFVO0FBQ2hELDhCQUFrQjtBQUFBLFVBQ3BCO0FBQUEsUUFDRixDQUFDO0FBQ0QsZUFBTztBQUNQLG1CQUFXLFNBQVMsT0FBTyxhQUFXLFFBQVEsT0FBTyxnQkFBZ0IsRUFBRTtBQUN2RSxzQkFBYyxlQUFlLEVBQUUsS0FBSyxNQUFNLE9BQU8sS0FBSztBQUFBLE1BQ3hEO0FBQUEsSUFDRjtBQUNBLG9CQUFnQjtBQUFBLEVBQ2xCO0FBT0EsTUFBSSxzQkFBc0IsR0FBRztBQUMzQixRQUFJO0FBQ0osVUFBTSxtQkFBbUIsTUFBTTtBQUM3QixrQkFBWSxRQUFRLFlBQVksU0FBUyxTQUFTLFFBQVEsUUFBUTtBQUNsRSxnQkFBVSxJQUFJLElBQUksYUFBYTtBQVEvQixjQUFRLFVBQVUsTUFBTTtBQUN0QiwyQkFBbUI7QUFDbkIseUJBQWlCO0FBQUEsTUFDbkI7QUFBQSxJQUNGO0FBQ0EscUJBQWlCO0FBQUEsRUFDbkIsT0FBTztBQUNMLFFBQUksaUJBQWlCLGNBQWMsa0JBQWtCO0FBQUEsRUFDdkQ7QUFDRjtBQUNBLElBQU0sK0JBQStCO0FBQ3JDLElBQU0sNEJBQTRCOyIsIm5hbWVzIjpbXSwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==
