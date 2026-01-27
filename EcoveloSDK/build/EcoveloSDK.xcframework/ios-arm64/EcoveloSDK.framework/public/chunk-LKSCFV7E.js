import {
  Pipe,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-DGENMXJW.js";

// src/app/pipes/formatPin.pipe.ts
var _FormatPinPipe = class _FormatPinPipe {
  transform(value) {
    if (!value)
      return "";
    const cleanValue = value.replace(/\s/g, "");
    const withSpaces = cleanValue.replace(/(.{2})/g, "$1\xA0");
    return withSpaces.replace(/\u00A0$/, "");
  }
};
_FormatPinPipe.\u0275fac = function FormatPinPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FormatPinPipe)();
};
_FormatPinPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "formatPin", type: _FormatPinPipe, pure: true });
var FormatPinPipe = _FormatPinPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormatPinPipe, [{
    type: Pipe,
    args: [{
      name: "formatPin",
      standalone: true
    }]
  }], null, null);
})();

export {
  FormatPinPipe
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9waXBlcy9mb3JtYXRQaW4ucGlwZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbkBQaXBlKHtcbiAgbmFtZTogJ2Zvcm1hdFBpbicsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1hdFBpblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKTogc3RyaW5nIHtcbiAgICBpZiAoIXZhbHVlKSByZXR1cm4gJydcblxuICAgIC8vIFN1cHByaW1lciB0b3VzIGxlcyBlc3BhY2VzIGV4aXN0YW50cyBldCBham91dGVyIHVuIGVzcGFjZSBpbnPDqWNhYmxlIHRvdXMgbGVzIDIgY2FyYWN0w6hyZXNcbiAgICBjb25zdCBjbGVhblZhbHVlID0gdmFsdWUucmVwbGFjZSgvXFxzL2csICcnKVxuICAgIGNvbnN0IHdpdGhTcGFjZXMgPSBjbGVhblZhbHVlLnJlcGxhY2UoLyguezJ9KS9nLCAnJDFcXHUwMEEwJylcbiAgICAvLyBTdXBwcmltZXIgbCdlc3BhY2Ugw6AgbGEgZmluIHMnaWwgeSBlbiBhIHVuXG4gICAgcmV0dXJuIHdpdGhTcGFjZXMucmVwbGFjZSgvXFx1MDBBMCQvLCAnJylcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7OztBQU1NLElBQU8saUJBQVAsTUFBTyxlQUFhO0VBQ3hCLFVBQVUsT0FBZ0M7QUFDeEMsUUFBSSxDQUFDO0FBQU8sYUFBTztBQUduQixVQUFNLGFBQWEsTUFBTSxRQUFRLE9BQU8sRUFBRTtBQUMxQyxVQUFNLGFBQWEsV0FBVyxRQUFRLFdBQVcsUUFBVTtBQUUzRCxXQUFPLFdBQVcsUUFBUSxXQUFXLEVBQUU7RUFDekM7OzttQ0FUVyxnQkFBYTtBQUFBOzhGQUFiLGdCQUFhLE1BQUEsS0FBQSxDQUFBO0FBQXBCLElBQU8sZ0JBQVA7O3NFQUFPLGVBQWEsQ0FBQTtVQUp6QjtXQUFLO01BQ0osTUFBTTtNQUNOLFlBQVk7S0FDYjs7OyIsCiAgIm5hbWVzIjogW10KfQo=
