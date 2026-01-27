import {
  config,
  configFromSession,
  configFromURL,
  getMode,
  printIonWarning,
  saveConfig,
  setMode
} from "./chunk-BFPTXCSH.js";

// node_modules/@ionic/core/dist/esm/ionic-global-CTSyufhF.js
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
var detectPlatforms = (win) => {
  const customPlatformMethods = config.get("platform");
  return Object.keys(PLATFORMS_MAP).filter((p) => {
    const customMethod = customPlatformMethods === null || customPlatformMethods === void 0 ? void 0 : customPlatformMethods[p];
    return typeof customMethod === "function" ? customMethod(win) : PLATFORMS_MAP[p](win);
  });
};
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
  return !!((capacitor === null || capacitor === void 0 ? void 0 : capacitor.isNative) || (capacitor === null || capacitor === void 0 ? void 0 : capacitor.isNativePlatform) && !!capacitor.isNativePlatform());
};
var isElectron = (win) => testUserAgent(win, /electron/i);
var isPWA = (win) => {
  var _a;
  return !!(((_a = win.matchMedia) === null || _a === void 0 ? void 0 : _a.call(win, "(display-mode: standalone)").matches) || win.navigator.standalone);
};
var testUserAgent = (win, expr) => expr.test(win.navigator.userAgent);
var matchMedia = (win, query) => {
  var _a;
  return (_a = win.matchMedia) === null || _a === void 0 ? void 0 : _a.call(win, query).matches;
};
var PLATFORMS_MAP = {
  ipad: isIpad,
  iphone: isIphone,
  ios: isIOS,
  android: isAndroid,
  phablet: isPhablet,
  tablet: isTablet,
  cordova: isCordova,
  capacitor: isCapacitorNative,
  electron: isElectron,
  pwa: isPWA,
  mobile: isMobile,
  mobileweb: isMobileWeb,
  desktop: isDesktop,
  hybrid: isHybrid
};
var defaultMode;
var getIonMode = (ref) => {
  return ref && getMode(ref) || defaultMode;
};
var initialize = (userConfig = {}) => {
  if (typeof window === "undefined") {
    return;
  }
  const doc = window.document;
  const win = window;
  const Ionic = win.Ionic = win.Ionic || {};
  const configObj = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, configFromSession(win)), {
    persistConfig: false
  }), Ionic.config), configFromURL(win)), userConfig);
  config.reset(configObj);
  if (config.getBoolean("persistConfig")) {
    saveConfig(win, configObj);
  }
  setupPlatforms(win);
  Ionic.config = config;
  Ionic.mode = defaultMode = config.get("mode", doc.documentElement.getAttribute("mode") || (isPlatform(win, "ios") ? "ios" : "md"));
  config.set("mode", defaultMode);
  doc.documentElement.setAttribute("mode", defaultMode);
  doc.documentElement.classList.add(defaultMode);
  if (config.getBoolean("_testing")) {
    config.set("animated", false);
  }
  const isIonicElement = (elm) => {
    var _a;
    return (_a = elm.tagName) === null || _a === void 0 ? void 0 : _a.startsWith("ION-");
  };
  const isAllowedIonicModeValue = (elmMode) => ["ios", "md"].includes(elmMode);
  setMode((elm) => {
    while (elm) {
      const elmMode = elm.mode || elm.getAttribute("mode");
      if (elmMode) {
        if (isAllowedIonicModeValue(elmMode)) {
          return elmMode;
        } else if (isIonicElement(elm)) {
          printIonWarning('Invalid ionic mode: "' + elmMode + '", expected: "ios" or "md"');
        }
      }
      elm = elm.parentElement;
    }
    return defaultMode;
  });
};

export {
  isPlatform,
  getIonMode,
  initialize
};
/*! Bundled license information:

@ionic/core/dist/esm/ionic-global-CTSyufhF.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb25pYy1nbG9iYWwtQ1RTeXVmaEYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydCB7IGUgYXMgY29uZmlnLCBsIGFzIGNvbmZpZ0Zyb21TZXNzaW9uLCBtIGFzIGNvbmZpZ0Zyb21VUkwsIG4gYXMgc2F2ZUNvbmZpZywgbyBhcyBnZXRNb2RlLCBxIGFzIHNldE1vZGUsIGYgYXMgcHJpbnRJb25XYXJuaW5nIH0gZnJvbSAnLi9pbmRleC00RHhZNl9nRy5qcyc7XG5jb25zdCBnZXRQbGF0Zm9ybXMgPSB3aW4gPT4gc2V0dXBQbGF0Zm9ybXMod2luKTtcbmNvbnN0IGlzUGxhdGZvcm0gPSAod2luT3JQbGF0Zm9ybSwgcGxhdGZvcm0pID0+IHtcbiAgaWYgKHR5cGVvZiB3aW5PclBsYXRmb3JtID09PSAnc3RyaW5nJykge1xuICAgIHBsYXRmb3JtID0gd2luT3JQbGF0Zm9ybTtcbiAgICB3aW5PclBsYXRmb3JtID0gdW5kZWZpbmVkO1xuICB9XG4gIHJldHVybiBnZXRQbGF0Zm9ybXMod2luT3JQbGF0Zm9ybSkuaW5jbHVkZXMocGxhdGZvcm0pO1xufTtcbmNvbnN0IHNldHVwUGxhdGZvcm1zID0gKHdpbiA9IHdpbmRvdykgPT4ge1xuICBpZiAodHlwZW9mIHdpbiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgd2luLklvbmljID0gd2luLklvbmljIHx8IHt9O1xuICBsZXQgcGxhdGZvcm1zID0gd2luLklvbmljLnBsYXRmb3JtcztcbiAgaWYgKHBsYXRmb3JtcyA9PSBudWxsKSB7XG4gICAgcGxhdGZvcm1zID0gd2luLklvbmljLnBsYXRmb3JtcyA9IGRldGVjdFBsYXRmb3Jtcyh3aW4pO1xuICAgIHBsYXRmb3Jtcy5mb3JFYWNoKHAgPT4gd2luLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKGBwbHQtJHtwfWApKTtcbiAgfVxuICByZXR1cm4gcGxhdGZvcm1zO1xufTtcbmNvbnN0IGRldGVjdFBsYXRmb3JtcyA9IHdpbiA9PiB7XG4gIGNvbnN0IGN1c3RvbVBsYXRmb3JtTWV0aG9kcyA9IGNvbmZpZy5nZXQoJ3BsYXRmb3JtJyk7XG4gIHJldHVybiBPYmplY3Qua2V5cyhQTEFURk9STVNfTUFQKS5maWx0ZXIocCA9PiB7XG4gICAgY29uc3QgY3VzdG9tTWV0aG9kID0gY3VzdG9tUGxhdGZvcm1NZXRob2RzID09PSBudWxsIHx8IGN1c3RvbVBsYXRmb3JtTWV0aG9kcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3VzdG9tUGxhdGZvcm1NZXRob2RzW3BdO1xuICAgIHJldHVybiB0eXBlb2YgY3VzdG9tTWV0aG9kID09PSAnZnVuY3Rpb24nID8gY3VzdG9tTWV0aG9kKHdpbikgOiBQTEFURk9STVNfTUFQW3BdKHdpbik7XG4gIH0pO1xufTtcbmNvbnN0IGlzTW9iaWxlV2ViID0gd2luID0+IGlzTW9iaWxlKHdpbikgJiYgIWlzSHlicmlkKHdpbik7XG5jb25zdCBpc0lwYWQgPSB3aW4gPT4ge1xuICAvLyBpT1MgMTIgYW5kIGJlbG93XG4gIGlmICh0ZXN0VXNlckFnZW50KHdpbiwgL2lQYWQvaSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvLyBpT1MgMTMrXG4gIGlmICh0ZXN0VXNlckFnZW50KHdpbiwgL01hY2ludG9zaC9pKSAmJiBpc01vYmlsZSh3aW4pKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcbmNvbnN0IGlzSXBob25lID0gd2luID0+IHRlc3RVc2VyQWdlbnQod2luLCAvaVBob25lL2kpO1xuY29uc3QgaXNJT1MgPSB3aW4gPT4gdGVzdFVzZXJBZ2VudCh3aW4sIC9pUGhvbmV8aVBvZC9pKSB8fCBpc0lwYWQod2luKTtcbmNvbnN0IGlzQW5kcm9pZCA9IHdpbiA9PiB0ZXN0VXNlckFnZW50KHdpbiwgL2FuZHJvaWR8c2luay9pKTtcbmNvbnN0IGlzQW5kcm9pZFRhYmxldCA9IHdpbiA9PiB7XG4gIHJldHVybiBpc0FuZHJvaWQod2luKSAmJiAhdGVzdFVzZXJBZ2VudCh3aW4sIC9tb2JpbGUvaSk7XG59O1xuY29uc3QgaXNQaGFibGV0ID0gd2luID0+IHtcbiAgY29uc3Qgd2lkdGggPSB3aW4uaW5uZXJXaWR0aDtcbiAgY29uc3QgaGVpZ2h0ID0gd2luLmlubmVySGVpZ2h0O1xuICBjb25zdCBzbWFsbGVzdCA9IE1hdGgubWluKHdpZHRoLCBoZWlnaHQpO1xuICBjb25zdCBsYXJnZXN0ID0gTWF0aC5tYXgod2lkdGgsIGhlaWdodCk7XG4gIHJldHVybiBzbWFsbGVzdCA+IDM5MCAmJiBzbWFsbGVzdCA8IDUyMCAmJiBsYXJnZXN0ID4gNjIwICYmIGxhcmdlc3QgPCA4MDA7XG59O1xuY29uc3QgaXNUYWJsZXQgPSB3aW4gPT4ge1xuICBjb25zdCB3aWR0aCA9IHdpbi5pbm5lcldpZHRoO1xuICBjb25zdCBoZWlnaHQgPSB3aW4uaW5uZXJIZWlnaHQ7XG4gIGNvbnN0IHNtYWxsZXN0ID0gTWF0aC5taW4od2lkdGgsIGhlaWdodCk7XG4gIGNvbnN0IGxhcmdlc3QgPSBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KTtcbiAgcmV0dXJuIGlzSXBhZCh3aW4pIHx8IGlzQW5kcm9pZFRhYmxldCh3aW4pIHx8IHNtYWxsZXN0ID4gNDYwICYmIHNtYWxsZXN0IDwgODIwICYmIGxhcmdlc3QgPiA3ODAgJiYgbGFyZ2VzdCA8IDE0MDA7XG59O1xuY29uc3QgaXNNb2JpbGUgPSB3aW4gPT4gbWF0Y2hNZWRpYSh3aW4sICcoYW55LXBvaW50ZXI6Y29hcnNlKScpO1xuY29uc3QgaXNEZXNrdG9wID0gd2luID0+ICFpc01vYmlsZSh3aW4pO1xuY29uc3QgaXNIeWJyaWQgPSB3aW4gPT4gaXNDb3Jkb3ZhKHdpbikgfHwgaXNDYXBhY2l0b3JOYXRpdmUod2luKTtcbmNvbnN0IGlzQ29yZG92YSA9IHdpbiA9PiAhISh3aW5bJ2NvcmRvdmEnXSB8fCB3aW5bJ3Bob25lZ2FwJ10gfHwgd2luWydQaG9uZUdhcCddKTtcbmNvbnN0IGlzQ2FwYWNpdG9yTmF0aXZlID0gd2luID0+IHtcbiAgY29uc3QgY2FwYWNpdG9yID0gd2luWydDYXBhY2l0b3InXTtcbiAgLy8gVE9ETyhST1UtMTE2OTMpOiBSZW1vdmUgd2hlbiB3ZSBubyBsb25nZXIgc3VwcG9ydCBDYXBhY2l0b3IgMiwgd2hpY2ggZG9lcyBub3QgaGF2ZSBpc05hdGl2ZVBsYXRmb3JtXG4gIHJldHVybiAhISgoY2FwYWNpdG9yID09PSBudWxsIHx8IGNhcGFjaXRvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2FwYWNpdG9yLmlzTmF0aXZlKSB8fCAoY2FwYWNpdG9yID09PSBudWxsIHx8IGNhcGFjaXRvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2FwYWNpdG9yLmlzTmF0aXZlUGxhdGZvcm0pICYmICEhY2FwYWNpdG9yLmlzTmF0aXZlUGxhdGZvcm0oKSk7XG59O1xuY29uc3QgaXNFbGVjdHJvbiA9IHdpbiA9PiB0ZXN0VXNlckFnZW50KHdpbiwgL2VsZWN0cm9uL2kpO1xuY29uc3QgaXNQV0EgPSB3aW4gPT4ge1xuICB2YXIgX2E7XG4gIHJldHVybiAhISgoKF9hID0gd2luLm1hdGNoTWVkaWEpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKHdpbiwgJyhkaXNwbGF5LW1vZGU6IHN0YW5kYWxvbmUpJykubWF0Y2hlcykgfHwgd2luLm5hdmlnYXRvci5zdGFuZGFsb25lKTtcbn07XG5jb25zdCB0ZXN0VXNlckFnZW50ID0gKHdpbiwgZXhwcikgPT4gZXhwci50ZXN0KHdpbi5uYXZpZ2F0b3IudXNlckFnZW50KTtcbmNvbnN0IG1hdGNoTWVkaWEgPSAod2luLCBxdWVyeSkgPT4ge1xuICB2YXIgX2E7XG4gIHJldHVybiAoX2EgPSB3aW4ubWF0Y2hNZWRpYSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwod2luLCBxdWVyeSkubWF0Y2hlcztcbn07XG5jb25zdCBQTEFURk9STVNfTUFQID0ge1xuICBpcGFkOiBpc0lwYWQsXG4gIGlwaG9uZTogaXNJcGhvbmUsXG4gIGlvczogaXNJT1MsXG4gIGFuZHJvaWQ6IGlzQW5kcm9pZCxcbiAgcGhhYmxldDogaXNQaGFibGV0LFxuICB0YWJsZXQ6IGlzVGFibGV0LFxuICBjb3Jkb3ZhOiBpc0NvcmRvdmEsXG4gIGNhcGFjaXRvcjogaXNDYXBhY2l0b3JOYXRpdmUsXG4gIGVsZWN0cm9uOiBpc0VsZWN0cm9uLFxuICBwd2E6IGlzUFdBLFxuICBtb2JpbGU6IGlzTW9iaWxlLFxuICBtb2JpbGV3ZWI6IGlzTW9iaWxlV2ViLFxuICBkZXNrdG9wOiBpc0Rlc2t0b3AsXG4gIGh5YnJpZDogaXNIeWJyaWRcbn07XG5cbi8vIFRPRE8oRlctMjgzMik6IHR5cGVzXG5sZXQgZGVmYXVsdE1vZGU7XG5jb25zdCBnZXRJb25Nb2RlID0gcmVmID0+IHtcbiAgcmV0dXJuIHJlZiAmJiBnZXRNb2RlKHJlZikgfHwgZGVmYXVsdE1vZGU7XG59O1xuY29uc3QgaW5pdGlhbGl6ZSA9ICh1c2VyQ29uZmlnID0ge30pID0+IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGRvYyA9IHdpbmRvdy5kb2N1bWVudDtcbiAgY29uc3Qgd2luID0gd2luZG93O1xuICBjb25zdCBJb25pYyA9IHdpbi5Jb25pYyA9IHdpbi5Jb25pYyB8fCB7fTtcbiAgLy8gY3JlYXRlIHRoZSBJb25pYy5jb25maWcgZnJvbSByYXcgY29uZmlnIG9iamVjdCAoaWYgaXQgZXhpc3RzKVxuICAvLyBhbmQgY29udmVydCBJb25pYy5jb25maWcgaW50byBhIENvbmZpZ0FwaSB0aGF0IGhhcyBhIGdldCgpIGZuXG4gIGNvbnN0IGNvbmZpZ09iaiA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY29uZmlnRnJvbVNlc3Npb24od2luKSksIHtcbiAgICBwZXJzaXN0Q29uZmlnOiBmYWxzZVxuICB9KSwgSW9uaWMuY29uZmlnKSwgY29uZmlnRnJvbVVSTCh3aW4pKSwgdXNlckNvbmZpZyk7XG4gIGNvbmZpZy5yZXNldChjb25maWdPYmopO1xuICBpZiAoY29uZmlnLmdldEJvb2xlYW4oJ3BlcnNpc3RDb25maWcnKSkge1xuICAgIHNhdmVDb25maWcod2luLCBjb25maWdPYmopO1xuICB9XG4gIC8vIFNldHVwIHBsYXRmb3Jtc1xuICBzZXR1cFBsYXRmb3Jtcyh3aW4pO1xuICAvLyBmaXJzdCBzZWUgaWYgdGhlIG1vZGUgd2FzIHNldCBhcyBhbiBhdHRyaWJ1dGUgb24gPGh0bWw+XG4gIC8vIHdoaWNoIGNvdWxkIGhhdmUgYmVlbiBzZXQgYnkgdGhlIHVzZXIsIG9yIGJ5IHByZS1yZW5kZXJpbmdcbiAgLy8gb3RoZXJ3aXNlIGdldCB0aGUgbW9kZSB2aWEgY29uZmlnIHNldHRpbmdzLCBhbmQgZmFsbGJhY2sgdG8gbWRcbiAgSW9uaWMuY29uZmlnID0gY29uZmlnO1xuICBJb25pYy5tb2RlID0gZGVmYXVsdE1vZGUgPSBjb25maWcuZ2V0KCdtb2RlJywgZG9jLmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ21vZGUnKSB8fCAoaXNQbGF0Zm9ybSh3aW4sICdpb3MnKSA/ICdpb3MnIDogJ21kJykpO1xuICBjb25maWcuc2V0KCdtb2RlJywgZGVmYXVsdE1vZGUpO1xuICBkb2MuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnbW9kZScsIGRlZmF1bHRNb2RlKTtcbiAgZG9jLmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKGRlZmF1bHRNb2RlKTtcbiAgaWYgKGNvbmZpZy5nZXRCb29sZWFuKCdfdGVzdGluZycpKSB7XG4gICAgY29uZmlnLnNldCgnYW5pbWF0ZWQnLCBmYWxzZSk7XG4gIH1cbiAgY29uc3QgaXNJb25pY0VsZW1lbnQgPSBlbG0gPT4ge1xuICAgIHZhciBfYTtcbiAgICByZXR1cm4gKF9hID0gZWxtLnRhZ05hbWUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zdGFydHNXaXRoKCdJT04tJyk7XG4gIH07XG4gIGNvbnN0IGlzQWxsb3dlZElvbmljTW9kZVZhbHVlID0gZWxtTW9kZSA9PiBbJ2lvcycsICdtZCddLmluY2x1ZGVzKGVsbU1vZGUpO1xuICBzZXRNb2RlKGVsbSA9PiB7XG4gICAgd2hpbGUgKGVsbSkge1xuICAgICAgY29uc3QgZWxtTW9kZSA9IGVsbS5tb2RlIHx8IGVsbS5nZXRBdHRyaWJ1dGUoJ21vZGUnKTtcbiAgICAgIGlmIChlbG1Nb2RlKSB7XG4gICAgICAgIGlmIChpc0FsbG93ZWRJb25pY01vZGVWYWx1ZShlbG1Nb2RlKSkge1xuICAgICAgICAgIHJldHVybiBlbG1Nb2RlO1xuICAgICAgICB9IGVsc2UgaWYgKGlzSW9uaWNFbGVtZW50KGVsbSkpIHtcbiAgICAgICAgICBwcmludElvbldhcm5pbmcoJ0ludmFsaWQgaW9uaWMgbW9kZTogXCInICsgZWxtTW9kZSArICdcIiwgZXhwZWN0ZWQ6IFwiaW9zXCIgb3IgXCJtZFwiJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsbSA9IGVsbS5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdE1vZGU7XG4gIH0pO1xufTtcbmV4cG9ydCB7IGlzUGxhdGZvcm0gYXMgYSwgZ2V0SW9uTW9kZSBhcyBiLCBnZXRQbGF0Zm9ybXMgYXMgZywgaW5pdGlhbGl6ZSBhcyBpIH07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUlBLElBQU0sZUFBZSxTQUFPLGVBQWUsR0FBRztBQUM5QyxJQUFNLGFBQWEsQ0FBQyxlQUFlLGFBQWE7QUFDOUMsTUFBSSxPQUFPLGtCQUFrQixVQUFVO0FBQ3JDLGVBQVc7QUFDWCxvQkFBZ0I7QUFBQSxFQUNsQjtBQUNBLFNBQU8sYUFBYSxhQUFhLEVBQUUs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
