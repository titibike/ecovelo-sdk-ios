import {
  findClosestIonContent,
  scrollToTop
} from "./chunk-WRI2MF6U.js";
import {
  componentOnReady
} from "./chunk-RZR7LWTQ.js";
import {
  readTask,
  writeTask
} from "./chunk-BFPTXCSH.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// node_modules/@ionic/core/dist/esm/status-tap-pATNXEtr.js
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

@ionic/core/dist/esm/status-tap-pATNXEtr.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9zdGF0dXMtdGFwLXBBVE5YRXRyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyBhIGFzIHJlYWRUYXNrLCB3IGFzIHdyaXRlVGFzayB9IGZyb20gJy4vaW5kZXgtNER4WTZfZ0cuanMnO1xuaW1wb3J0IHsgZiBhcyBmaW5kQ2xvc2VzdElvbkNvbnRlbnQsIHMgYXMgc2Nyb2xsVG9Ub3AgfSBmcm9tICcuL2luZGV4LTdVYlNsdjdOLmpzJztcbmltcG9ydCB7IGMgYXMgY29tcG9uZW50T25SZWFkeSB9IGZyb20gJy4vaGVscGVycy04S1NRUUdReS5qcyc7XG5jb25zdCBzdGFydFN0YXR1c1RhcCA9ICgpID0+IHtcbiAgY29uc3Qgd2luID0gd2luZG93O1xuICB3aW4uYWRkRXZlbnRMaXN0ZW5lcignc3RhdHVzVGFwJywgKCkgPT4ge1xuICAgIHJlYWRUYXNrKCgpID0+IHtcbiAgICAgIGNvbnN0IHdpZHRoID0gd2luLmlubmVyV2lkdGg7XG4gICAgICBjb25zdCBoZWlnaHQgPSB3aW4uaW5uZXJIZWlnaHQ7XG4gICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQod2lkdGggLyAyLCBoZWlnaHQgLyAyKTtcbiAgICAgIGlmICghZWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgY29udGVudEVsID0gZmluZENsb3Nlc3RJb25Db250ZW50KGVsKTtcbiAgICAgIGlmIChjb250ZW50RWwpIHtcbiAgICAgICAgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBjb21wb25lbnRPblJlYWR5KGNvbnRlbnRFbCwgcmVzb2x2ZSkpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHdyaXRlVGFzayhhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIElmIHNjcm9sbGluZyBhbmQgdXNlciB0YXBzIHN0YXR1cyBiYXIsXG4gICAgICAgICAgICAgKiBvbmx5IGNhbGxpbmcgc2Nyb2xsVG9Ub3AgaXMgbm90IGVub3VnaFxuICAgICAgICAgICAgICogYXMgZW5naW5lcyBsaWtlIFdlYktpdCB3aWxsIGp1bXAgdGhlXG4gICAgICAgICAgICAgKiBzY3JvbGwgcG9zaXRpb24gYmFjayBkb3duIGFuZCBjb21wbGV0ZVxuICAgICAgICAgICAgICogYW55IGluLXByb2dyZXNzIG1vbWVudHVtIHNjcm9sbGluZy5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgY29udGVudEVsLnN0eWxlLnNldFByb3BlcnR5KCctLW92ZXJmbG93JywgJ2hpZGRlbicpO1xuICAgICAgICAgICAgYXdhaXQgc2Nyb2xsVG9Ub3AoY29udGVudEVsLCAzMDApO1xuICAgICAgICAgICAgY29udGVudEVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KCctLW92ZXJmbG93Jyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5leHBvcnQgeyBzdGFydFN0YXR1c1RhcCB9OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQU1BLElBQU0saUJBQWlCLE1BQU07QUFDM0IsUUFBTSxNQUFNO0FBQ1osTUFBSSxpQkFBaUIsYUFBYSxNQUFNO0FBQ3RDLGFBQVMsTUFBTTtBQUNiLFlBQU0sUUFBUSxJQUFJO0FBQ2xCLFlBQU0sU0FBUyxJQUFJO0FBQ25CLFlBQU0sS0FBSyxTQUFTLGlCQUFpQixRQUFRLEdBQUcsU0FBUyxDQUFDO0FBQzFELFVBQUksQ0FBQyxJQUFJO0FBQ1A7QUFBQSxNQUNGO0FBQ0EsWUFBTSxZQUFZLHNCQUFzQixFQUFFO0FBQzFDLFVBQUksV0FBVztBQUNiLFlBQUksUUFBUSxhQUFXLGlCQUFpQixXQUFXLE9BQU8sQ0FBQyxFQUFFLEtBQUssTUFBTTtBQUN0RSxvQkFBVSxNQUFZO0FBUXBCLHNCQUFVLE1BQU0sWUFBWSxjQUFjLFFBQVE7QUFDbEQsa0JBQU0sWUFBWSxXQUFXLEdBQUc7QUFDaEMsc0JBQVUsTUFBTSxlQUFlLFlBQVk7QUFBQSxVQUM3QyxFQUFDO0FBQUEsUUFDSCxDQUFDO0FBQUEsTUFDSDtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0gsQ0FBQztBQUNIOyIsIm5hbWVzIjpbXSwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==
