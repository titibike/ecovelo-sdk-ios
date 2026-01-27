import {
  getIonMode
} from "./chunk-TXLH22R2.js";
import {
  inheritAttributes
} from "./chunk-RZR7LWTQ.js";
import {
  Host,
  createEvent,
  getElement,
  h,
  registerInstance
} from "./chunk-BFPTXCSH.js";
import "./chunk-UESUV5PM.js";

// node_modules/@ionic/core/dist/esm/ion-img.entry.js
var imgCss = ":host{display:block;-o-object-fit:contain;object-fit:contain}img{display:block;width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}";
var Img = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionImgWillLoad = createEvent(this, "ionImgWillLoad", 7);
    this.ionImgDidLoad = createEvent(this, "ionImgDidLoad", 7);
    this.ionError = createEvent(this, "ionError", 7);
    this.inheritedAttributes = {};
    this.onLoad = () => {
      this.ionImgDidLoad.emit();
    };
    this.onError = () => {
      this.ionError.emit();
    };
  }
  srcChanged() {
    this.addIO();
  }
  componentWillLoad() {
    this.inheritedAttributes = inheritAttributes(this.el, ["draggable"]);
  }
  componentDidLoad() {
    this.addIO();
  }
  addIO() {
    if (this.src === void 0) {
      return;
    }
    if (typeof window !== "undefined" && "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "isIntersecting" in window.IntersectionObserverEntry.prototype) {
      this.removeIO();
      this.io = new IntersectionObserver((data) => {
        if (data[data.length - 1].isIntersecting) {
          this.load();
          this.removeIO();
        }
      });
      this.io.observe(this.el);
    } else {
      setTimeout(() => this.load(), 200);
    }
  }
  load() {
    this.loadError = this.onError;
    this.loadSrc = this.src;
    this.ionImgWillLoad.emit();
  }
  removeIO() {
    if (this.io) {
      this.io.disconnect();
      this.io = void 0;
    }
  }
  render() {
    const {
      loadSrc,
      alt,
      onLoad,
      loadError,
      inheritedAttributes
    } = this;
    const {
      draggable
    } = inheritedAttributes;
    return h(Host, {
      key: "da600442894427dee1974a28e545613afac69fca",
      class: getIonMode(this)
    }, h("img", {
      key: "16df0c7069af86c0fa7ce5af598bc0f63b4eb71a",
      decoding: "async",
      src: loadSrc,
      alt,
      onLoad,
      onError: loadError,
      part: "image",
      draggable: isDraggable(draggable)
    }));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "src": ["srcChanged"]
    };
  }
};
var isDraggable = (draggable) => {
  switch (draggable) {
    case "true":
      return true;
    case "false":
      return false;
    default:
      return void 0;
  }
};
Img.style = imgCss;
export {
  Img as ion_img
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-img.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24taW1nLmVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgY3JlYXRlRXZlbnQsIGgsIGQgYXMgSG9zdCwgZyBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9pbmRleC00RHhZNl9nRy5qcyc7XG5pbXBvcnQgeyBiIGFzIGluaGVyaXRBdHRyaWJ1dGVzIH0gZnJvbSAnLi9oZWxwZXJzLThLU1FRR1F5LmpzJztcbmltcG9ydCB7IGIgYXMgZ2V0SW9uTW9kZSB9IGZyb20gJy4vaW9uaWMtZ2xvYmFsLUNUU3l1ZmhGLmpzJztcbmNvbnN0IGltZ0NzcyA9IFwiOmhvc3R7ZGlzcGxheTpibG9jazstby1vYmplY3QtZml0OmNvbnRhaW47b2JqZWN0LWZpdDpjb250YWlufWltZ3tkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7LW8tb2JqZWN0LWZpdDppbmhlcml0O29iamVjdC1maXQ6aW5oZXJpdDstby1vYmplY3QtcG9zaXRpb246aW5oZXJpdDtvYmplY3QtcG9zaXRpb246aW5oZXJpdH1cIjtcbmNvbnN0IEltZyA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5pb25JbWdXaWxsTG9hZCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uSW1nV2lsbExvYWRcIiwgNyk7XG4gICAgdGhpcy5pb25JbWdEaWRMb2FkID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25JbWdEaWRMb2FkXCIsIDcpO1xuICAgIHRoaXMuaW9uRXJyb3IgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkVycm9yXCIsIDcpO1xuICAgIHRoaXMuaW5oZXJpdGVkQXR0cmlidXRlcyA9IHt9O1xuICAgIHRoaXMub25Mb2FkID0gKCkgPT4ge1xuICAgICAgdGhpcy5pb25JbWdEaWRMb2FkLmVtaXQoKTtcbiAgICB9O1xuICAgIHRoaXMub25FcnJvciA9ICgpID0+IHtcbiAgICAgIHRoaXMuaW9uRXJyb3IuZW1pdCgpO1xuICAgIH07XG4gIH1cbiAgc3JjQ2hhbmdlZCgpIHtcbiAgICB0aGlzLmFkZElPKCk7XG4gIH1cbiAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgdGhpcy5pbmhlcml0ZWRBdHRyaWJ1dGVzID0gaW5oZXJpdEF0dHJpYnV0ZXModGhpcy5lbCwgWydkcmFnZ2FibGUnXSk7XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICB0aGlzLmFkZElPKCk7XG4gIH1cbiAgYWRkSU8oKSB7XG4gICAgaWYgKHRoaXMuc3JjID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICdJbnRlcnNlY3Rpb25PYnNlcnZlcicgaW4gd2luZG93ICYmICdJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5JyBpbiB3aW5kb3cgJiYgJ2lzSW50ZXJzZWN0aW5nJyBpbiB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeS5wcm90b3R5cGUpIHtcbiAgICAgIHRoaXMucmVtb3ZlSU8oKTtcbiAgICAgIHRoaXMuaW8gPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZGF0YSA9PiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPbiBzbG93ZXIgZGV2aWNlcywgaXQgaXMgcG9zc2libGUgZm9yIGFuIGludGVyc2VjdGlvbiBvYnNlcnZlciBlbnRyeSB0byBjb250YWluIG11bHRpcGxlXG4gICAgICAgICAqIG9iamVjdHMgaW4gdGhlIGFycmF5LiBUaGlzIGhhcHBlbnMgd2hlbiBxdWlja2x5IHNjcm9sbGluZyBhbiBpbWFnZSBpbnRvIHZpZXcgYW5kIHRoZW4gb3V0IG9mXG4gICAgICAgICAqIHZpZXcuIEluIHRoaXMgY2FzZSwgdGhlIGxhc3Qgb2JqZWN0IHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgICAgICovXG4gICAgICAgIGlmIChkYXRhW2RhdGEubGVuZ3RoIC0gMV0uaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICB0aGlzLmxvYWQoKTtcbiAgICAgICAgICB0aGlzLnJlbW92ZUlPKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5pby5vYnNlcnZlKHRoaXMuZWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBmYWxsIGJhY2sgdG8gc2V0VGltZW91dCBmb3IgU2FmYXJpIGFuZCBJRVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmxvYWQoKSwgMjAwKTtcbiAgICB9XG4gIH1cbiAgbG9hZCgpIHtcbiAgICB0aGlzLmxvYWRFcnJvciA9IHRoaXMub25FcnJvcjtcbiAgICB0aGlzLmxvYWRTcmMgPSB0aGlzLnNyYztcbiAgICB0aGlzLmlvbkltZ1dpbGxMb2FkLmVtaXQoKTtcbiAgfVxuICByZW1vdmVJTygpIHtcbiAgICBpZiAodGhpcy5pbykge1xuICAgICAgdGhpcy5pby5kaXNjb25uZWN0KCk7XG4gICAgICB0aGlzLmlvID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgbG9hZFNyYyxcbiAgICAgIGFsdCxcbiAgICAgIG9uTG9hZCxcbiAgICAgIGxvYWRFcnJvcixcbiAgICAgIGluaGVyaXRlZEF0dHJpYnV0ZXNcbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCB7XG4gICAgICBkcmFnZ2FibGVcbiAgICB9ID0gaW5oZXJpdGVkQXR0cmlidXRlcztcbiAgICByZXR1cm4gaChIb3N0LCB7XG4gICAgICBrZXk6ICdkYTYwMDQ0Mjg5NDQyN2RlZTE5NzRhMjhlNTQ1NjEzYWZhYzY5ZmNhJyxcbiAgICAgIGNsYXNzOiBnZXRJb25Nb2RlKHRoaXMpXG4gICAgfSwgaChcImltZ1wiLCB7XG4gICAgICBrZXk6ICcxNmRmMGM3MDY5YWY4NmMwZmE3Y2U1YWY1OThiYzBmNjNiNGViNzFhJyxcbiAgICAgIGRlY29kaW5nOiBcImFzeW5jXCIsXG4gICAgICBzcmM6IGxvYWRTcmMsXG4gICAgICBhbHQ6IGFsdCxcbiAgICAgIG9uTG9hZDogb25Mb2FkLFxuICAgICAgb25FcnJvcjogbG9hZEVycm9yLFxuICAgICAgcGFydDogXCJpbWFnZVwiLFxuICAgICAgZHJhZ2dhYmxlOiBpc0RyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgfSkpO1xuICB9XG4gIGdldCBlbCgpIHtcbiAgICByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBcInNyY1wiOiBbXCJzcmNDaGFuZ2VkXCJdXG4gICAgfTtcbiAgfVxufTtcbi8qKlxuICogRW51bWVyYXRlZCBzdHJpbmdzIG11c3QgYmUgc2V0IGFzIGJvb2xlYW5zXG4gKiBhcyBTdGVuY2lsIHdpbGwgbm90IHJlbmRlciAnZmFsc2UnIGluIHRoZSBET00uXG4gKiBUaGUgbmVlZCB0byBleHBsaWNpdGx5IHJlbmRlciBkcmFnZ2FibGU9XCJ0cnVlXCJcbiAqIGFzIG9ubHkgY2VydGFpbiBlbGVtZW50cyBhcmUgZHJhZ2dhYmxlIGJ5IGRlZmF1bHQuXG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVE1ML0dsb2JhbF9hdHRyaWJ1dGVzL2RyYWdnYWJsZS5cbiAqL1xuY29uc3QgaXNEcmFnZ2FibGUgPSBkcmFnZ2FibGUgPT4ge1xuICBzd2l0Y2ggKGRyYWdnYWJsZSkge1xuICAgIGNhc2UgJ3RydWUnOlxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgY2FzZSAnZmFsc2UnOlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4g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
