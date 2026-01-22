// node_modules/@ionic/core/components/focus-visible.js
var ION_FOCUSED = "ion-focused";
var ION_FOCUSABLE = "ion-focusable";
var FOCUS_KEYS = ["Tab", "ArrowDown", "Space", "Escape", " ", "Shift", "Enter", "ArrowLeft", "ArrowRight", "ArrowUp", "Home", "End"];
var startFocusVisible = (rootEl) => {
  let currentFocus = [];
  let keyboardMode = true;
  const ref = rootEl ? rootEl.shadowRoot : document;
  const root = rootEl ? rootEl : document.body;
  const setFocus = (elements) => {
    currentFocus.forEach((el) => el.classList.remove(ION_FOCUSED));
    elements.forEach((el) => el.classList.add(ION_FOCUSED));
    currentFocus = elements;
  };
  const pointerDown = () => {
    keyboardMode = false;
    setFocus([]);
  };
  const onKeydown = (ev) => {
    keyboardMode = FOCUS_KEYS.includes(ev.key);
    if (!keyboardMode) {
      setFocus([]);
    }
  };
  const onFocusin = (ev) => {
    if (keyboardMode && ev.composedPath !== void 0) {
      const toFocus = ev.composedPath().filter((el) => {
        if (el.classList) {
          return el.classList.contains(ION_FOCUSABLE);
        }
        return false;
      });
      setFocus(toFocus);
    }
  };
  const onFocusout = () => {
    if (ref.activeElement === root) {
      setFocus([]);
    }
  };
  ref.addEventListener("keydown", onKeydown);
  ref.addEventListener("focusin", onFocusin);
  ref.addEventListener("focusout", onFocusout);
  ref.addEventListener("touchstart", pointerDown, {
    passive: true
  });
  ref.addEventListener("mousedown", pointerDown);
  const destroy = () => {
    ref.removeEventListener("keydown", onKeydown);
    ref.removeEventListener("focusin", onFocusin);
    ref.removeEventListener("focusout", onFocusout);
    ref.removeEventListener("touchstart", pointerDown);
    ref.removeEventListener("mousedown", pointerDown);
  };
  return {
    destroy,
    setFocus
  };
};

export {
  startFocusVisible
};
/*! Bundled license information:

@ionic/core/components/focus-visible.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9jb21wb25lbnRzL2ZvY3VzLXZpc2libGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmNvbnN0IElPTl9GT0NVU0VEID0gJ2lvbi1mb2N1c2VkJztcbmNvbnN0IElPTl9GT0NVU0FCTEUgPSAnaW9uLWZvY3VzYWJsZSc7XG5jb25zdCBGT0NVU19LRVlTID0gWydUYWInLCAnQXJyb3dEb3duJywgJ1NwYWNlJywgJ0VzY2FwZScsICcgJywgJ1NoaWZ0JywgJ0VudGVyJywgJ0Fycm93TGVmdCcsICdBcnJvd1JpZ2h0JywgJ0Fycm93VXAnLCAnSG9tZScsICdFbmQnXTtcbmNvbnN0IHN0YXJ0Rm9jdXNWaXNpYmxlID0gcm9vdEVsID0+IHtcbiAgbGV0IGN1cnJlbnRGb2N1cyA9IFtdO1xuICBsZXQga2V5Ym9hcmRNb2RlID0gdHJ1ZTtcbiAgY29uc3QgcmVmID0gcm9vdEVsID8gcm9vdEVsLnNoYWRvd1Jvb3QgOiBkb2N1bWVudDtcbiAgY29uc3Qgcm9vdCA9IHJvb3RFbCA/IHJvb3RFbCA6IGRvY3VtZW50LmJvZHk7XG4gIGNvbnN0IHNldEZvY3VzID0gZWxlbWVudHMgPT4ge1xuICAgIGN1cnJlbnRGb2N1cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoSU9OX0ZPQ1VTRUQpKTtcbiAgICBlbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5hZGQoSU9OX0ZPQ1VTRUQpKTtcbiAgICBjdXJyZW50Rm9jdXMgPSBlbGVtZW50cztcbiAgfTtcbiAgY29uc3QgcG9pbnRlckRvd24gPSAoKSA9PiB7XG4gICAga2V5Ym9hcmRNb2RlID0gZmFsc2U7XG4gICAgc2V0Rm9jdXMoW10pO1xuICB9O1xuICBjb25zdCBvbktleWRvd24gPSBldiA9PiB7XG4gICAga2V5Ym9hcmRNb2RlID0gRk9DVVNfS0VZUy5pbmNsdWRlcyhldi5rZXkpO1xuICAgIGlmICgha2V5Ym9hcmRNb2RlKSB7XG4gICAgICBzZXRGb2N1cyhbXSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBvbkZvY3VzaW4gPSBldiA9PiB7XG4gICAgaWYgKGtleWJvYXJkTW9kZSAmJiBldi5jb21wb3NlZFBhdGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgdG9Gb2N1cyA9IGV2LmNvbXBvc2VkUGF0aCgpLmZpbHRlcihlbCA9PiB7XG4gICAgICAgIC8vIFRPRE8oRlctMjgzMik6IHR5cGVcbiAgICAgICAgaWYgKGVsLmNsYXNzTGlzdCkge1xuICAgICAgICAgIHJldHVybiBlbC5jbGFzc0xpc3QuY29udGFpbnMoSU9OX0ZPQ1VTQUJMRSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSk7XG4gICAgICBzZXRGb2N1cyh0b0ZvY3VzKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IG9uRm9jdXNvdXQgPSAoKSA9PiB7XG4gICAgaWYgKHJlZi5hY3RpdmVFbGVtZW50ID09PSByb290KSB7XG4gICAgICBzZXRGb2N1cyhbXSk7XG4gICAgfVxuICB9O1xuICByZWYuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5ZG93bik7XG4gIHJlZi5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgb25Gb2N1c2luKTtcbiAgcmVmLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0Jywgb25Gb2N1c291dCk7XG4gIHJlZi5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgcG9pbnRlckRvd24sIHtcbiAgICBwYXNzaXZlOiB0cnVlXG4gIH0pO1xuICByZWYuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgcG9pbnRlckRvd24pO1xuICBjb25zdCBkZXN0cm95ID0gKCkgPT4ge1xuICAgIHJlZi5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXlkb3duKTtcbiAgICByZWYucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIG9uRm9jdXNpbik7XG4gICAgcmVmLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0Jywgb25Gb2N1c291dCk7XG4gICAgcmVmLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBwb2ludGVyRG93bik7XG4gICAgcmVmLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHBvaW50ZXJEb3duKTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBkZXN0cm95LFxuICAgIHNldEZvY3VzXG4gIH07XG59O1xuZXhwb3J0IHsgc3RhcnRGb2N1c1Zpc2libGUgfTsiXSwibWFwcGluZ3MiOiI7QUFHQSxJQUFNLGNBQWM7QUFDcEIsSUFBTSxnQkFBZ0I7QUFDdEIsSUFBTSxhQUFhLENBQUMsT0FBTyxhQUFhLFNBQVMsVUFBVSxLQUFLLFNBQVMsU0FBUyxhQUFhLGNBQWMsV0FBVyxRQUFRLEtBQUs7QUFDckksSUFBTSxvQkFBb0IsWUFBVTtBQUNsQyxNQUFJLGVBQWUsQ0FBQztBQUNwQixNQUFJLGVBQWU7QUFDbkIsUUFBTSxNQUFNLFNBQVMsT0FBTyxhQUFhO0FBQ3pDLFFBQU0sT0FBTyxTQUFTLFNBQVMsU0FBUztBQUN4QyxRQUFNLFdBQVcsY0FBWTtBQUMzQixpQkFBYSxRQUFRLFFBQU0sR0FBRyxVQUFVLE9BQU8sV0FBVyxDQUFDO0FBQzNELGFBQVMsUUFBUSxRQUFNLEdBQUcsVUFBVSxJQUFJLFdBQVcsQ0FBQztBQUNwRCxtQkFBZTtBQUFBLEVBQ2pCO0FBQ0EsUUFBTSxjQUFjLE1BQU07QUFDeEIsbUJBQWU7QUFDZixhQUFTLENBQUMsQ0FBQztBQUFBLEVBQ2I7QUFDQSxRQUFNLFlBQVksUUFBTTtBQUN0QixtQkFBZSxXQUFXLFNBQVMsR0FBRyxHQUFHO0FBQ3pDLFFBQUksQ0FBQyxjQUFjO0FBQ2pCLGVBQVMsQ0FBQyxDQUFDO0FBQUEsSUFDYjtBQUFBLEVBQ0Y7QUFDQSxRQUFNLFlBQVksUUFBTTtBQUN0QixRQUFJLGdCQUFnQixHQUFHLGlCQUFpQixRQUFXO0FBQ2pELFlBQU0sVUFBVSxHQUFHLGFBQWEsRUFBRSxPQUFPLFFBQU07QUFFN0MsWUFBSSxHQUFHLFdBQVc7QUFDaEIsaUJBQU8sR0FBRyxVQUFVLFNBQVMsYUFBYTtBQUFBLFFBQzVDO0FBQ0EsZUFBTztBQUFBLE1BQ1QsQ0FBQztBQUNELGVBQVMsT0FBTztBQUFBLElBQ2xCO0FBQUEsRUFDRjtBQUNBLFFBQU0sYUFBYSxNQUFNO0FBQ3ZCLFFBQUksSUFBSSxrQkFBa0IsTUFBTTtBQUM5QixlQUFTLENBQUMsQ0FBQztBQUFBLElBQ2I7QUFBQSxFQUNGO0FBQ0EsTUFBSSxpQkFBaUIsV0FBVyxTQUFTO0FBQ3pDLE1BQUksaUJBQWlCLFdBQVcsU0FBUztBQUN6QyxNQUFJLGlCQUFpQixZQUFZLFVBQVU7QUFDM0MsTUFBSSxpQkFBaUIsY0FBYyxhQUFhO0FBQUEsSUFDOUMsU0FBUztBQUFBLEVBQ1gsQ0FBQztBQUNELE1BQUksaUJBQWlCLGFBQWEsV0FBVztBQUM3QyxRQUFNLFVBQVUsTUFBTTtBQUNwQixRQUFJLG9CQUFvQixXQUFXLFNBQVM7QUFDNUMsUUFBSSxvQkFBb0IsV0FBVyxTQUFTO0FBQzVDLFFBQUksb0JBQW9CLFlBQVksVUFBVTtBQUM5QyxRQUFJLG9CQUFvQixjQUFjLFdBQVc7QUFDakQsUUFBSSxvQkFBb0IsYUFBYSxXQUFXO0FBQUEsRUFDbEQ7QUFDQSxTQUFPO0FBQUEsSUFDTDtBQUFBLElBQ0E7QUFBQSxFQUNGO0FBQ0Y7IiwibmFtZXMiOltdLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19
