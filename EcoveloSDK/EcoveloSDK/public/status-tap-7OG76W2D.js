import {
  findClosestIonContent,
  scrollToTop
} from "./chunk-JBNXL77H.js";
import {
  readTask,
  writeTask
} from "./chunk-3T6NUUZ7.js";
import {
  componentOnReady
} from "./chunk-EV4ZQC67.js";
import "./chunk-7OBOYUXW.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// node_modules/@ionic/core/components/status-tap.js
var startStatusTap = () => {
  const win = window;
  win.addEventListener("statusTap", () => {
    readTask(() => {
      const width = win.innerWidth;
      const height = win.innerHeight;
      const el = document.elementFromPoint(width / 2, height / 2);
      if (!el) {
        return;
      }
      const contentEl = findClosestIonContent(el);
      if (contentEl) {
        new Promise((resolve) => componentOnReady(contentEl, resolve)).then(() => {
          writeTask(() => __async(null, null, function* () {
            contentEl.style.setProperty("--overflow", "hidden");
            yield scrollToTop(contentEl, 300);
            contentEl.style.removeProperty("--overflow");
          }));
        });
      }
    });
  });
};
export {
  startStatusTap
};
/*! Bundled license information:

@ionic/core/components/status-tap.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9jb21wb25lbnRzL3N0YXR1cy10YXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydCB7IHJlYWRUYXNrLCB3cml0ZVRhc2sgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudCc7XG5pbXBvcnQgeyBhIGFzIGZpbmRDbG9zZXN0SW9uQ29udGVudCwgcyBhcyBzY3JvbGxUb1RvcCB9IGZyb20gJy4vaW5kZXg4LmpzJztcbmltcG9ydCB7IGMgYXMgY29tcG9uZW50T25SZWFkeSB9IGZyb20gJy4vaGVscGVycy5qcyc7XG5jb25zdCBzdGFydFN0YXR1c1RhcCA9ICgpID0+IHtcbiAgY29uc3Qgd2luID0gd2luZG93O1xuICB3aW4uYWRkRXZlbnRMaXN0ZW5lcignc3RhdHVzVGFwJywgKCkgPT4ge1xuICAgIHJlYWRUYXNrKCgpID0+IHtcbiAgICAgIGNvbnN0IHdpZHRoID0gd2luLmlubmVyV2lkdGg7XG4gICAgICBjb25zdCBoZWlnaHQgPSB3aW4uaW5uZXJIZWlnaHQ7XG4gICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQod2lkdGggLyAyLCBoZWlnaHQgLyAyKTtcbiAgICAgIGlmICghZWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgY29udGVudEVsID0gZmluZENsb3Nlc3RJb25Db250ZW50KGVsKTtcbiAgICAgIGlmIChjb250ZW50RWwpIHtcbiAgICAgICAgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBjb21wb25lbnRPblJlYWR5KGNvbnRlbnRFbCwgcmVzb2x2ZSkpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHdyaXRlVGFzayhhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIElmIHNjcm9sbGluZyBhbmQgdXNlciB0YXBzIHN0YXR1cyBiYXIsXG4gICAgICAgICAgICAgKiBvbmx5IGNhbGxpbmcgc2Nyb2xsVG9Ub3AgaXMgbm90IGVub3VnaFxuICAgICAgICAgICAgICogYXMgZW5naW5lcyBsaWtlIFdlYktpdCB3aWxsIGp1bXAgdGhlXG4gICAgICAgICAgICAgKiBzY3JvbGwgcG9zaXRpb24gYmFjayBkb3duIGFuZCBjb21wbGV0ZVxuICAgICAgICAgICAgICogYW55IGluLXByb2dyZXNzIG1vbWVudHVtIHNjcm9sbGluZy5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgY29udGVudEVsLnN0eWxlLnNldFByb3BlcnR5KCctLW92ZXJmbG93JywgJ2hpZGRlbicpO1xuICAgICAgICAgICAgYXdhaXQgc2Nyb2xsVG9Ub3AoY29udGVudEVsLCAzMDApO1xuICAgICAgICAgICAgY29udGVudEVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KCctLW92ZXJmbG93Jyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5leHBvcnQgeyBzdGFydFN0YXR1c1RhcCB9OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQSxJQUFNLGlCQUFpQixNQUFNO0FBQzNCLFFBQU0sTUFBTTtBQUNaLE1BQUksaUJBQWlCLGFBQWEsTUFBTTtBQUN0QyxhQUFTLE1BQU07QUFDYixZQUFNLFFBQVEsSUFBSTtBQUNsQixZQUFNLFNBQVMsSUFBSTtBQUNuQixZQUFNLEtBQUssU0FBUyxpQkFBaUIsUUFBUSxHQUFHLFNBQVMsQ0FBQztBQUMxRCxVQUFJLENBQUMsSUFBSTtBQUNQO0FBQUEsTUFDRjtBQUNBLFlBQU0sWUFBWSxzQkFBc0IsRUFBRTtBQUMxQyxVQUFJLFdBQVc7QUFDYixZQUFJLFFBQVEsYUFBVyxpQkFBaUIsV0FBVyxPQUFPLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDdEUsb0JBQVUsTUFBWTtBQVFwQixzQkFBVSxNQUFNLFlBQVksY0FBYyxRQUFRO0FBQ2xELGtCQUFNLFlBQVksV0FBVyxHQUFHO0FBQ2hDLHNCQUFVLE1BQU0sZUFBZSxZQUFZO0FBQUEsVUFDN0MsRUFBQztBQUFBLFFBQ0gsQ0FBQztBQUFBLE1BQ0g7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNILENBQUM7QUFDSDsiLCJuYW1lcyI6W10sInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswXX0=
