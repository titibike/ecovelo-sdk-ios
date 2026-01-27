// node_modules/@ionic/core/components/dir.js
var isRTL = (hostEl) => {
  if (hostEl) {
    if (hostEl.dir !== "") {
      return hostEl.dir.toLowerCase() === "rtl";
    }
  }
  return (document === null || document === void 0 ? void 0 : document.dir.toLowerCase()) === "rtl";
};

export {
  isRTL
};
/*! Bundled license information:

@ionic/core/components/dir.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9jb21wb25lbnRzL2Rpci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZG9jdW1lbnQgb3IgaG9zdCBlbGVtZW50XG4gKiBoYXMgYSBgZGlyYCBzZXQgdG8gYHJ0bGAuIFRoZSBob3N0IHZhbHVlIHdpbGwgYWx3YXlzXG4gKiB0YWtlIHByaW9yaXR5IG92ZXIgdGhlIHJvb3QgZG9jdW1lbnQgdmFsdWUuXG4gKi9cbmNvbnN0IGlzUlRMID0gaG9zdEVsID0+IHtcbiAgaWYgKGhvc3RFbCkge1xuICAgIGlmIChob3N0RWwuZGlyICE9PSAnJykge1xuICAgICAgcmV0dXJuIGhvc3RFbC5kaXIudG9Mb3dlckNhc2UoKSA9PT0gJ3J0bCc7XG4gICAgfVxuICB9XG4gIHJldHVybiAoZG9jdW1lbnQgPT09IG51bGwgfHwgZG9jdW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRvY3VtZW50LmRpci50b0xvd2VyQ2FzZSgpKSA9PT0gJ3J0bCc7XG59O1xuZXhwb3J0IHsgaXNSVEwgYXMgaSB9OyJdLCJtYXBwaW5ncyI6IjtBQVFBLElBQU0sUUFBUSxZQUFVO0FBQ3RCLE1BQUksUUFBUTtBQUNWLFFBQUksT0FBTyxRQUFRLElBQUk7QUFDckIsYUFBTyxPQUFPLElBQUksWUFBWSxNQUFNO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQ0EsVUFBUSxhQUFhLFFBQVEsYUFBYSxTQUFTLFNBQVMsU0FBUyxJQUFJLFlBQVksT0FBTztBQUM5RjsiLCJuYW1lcyI6W10sInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswXX0=
