import {
  getIonMode
} from "./chunk-TXLH22R2.js";
import {
  Host,
  getElement,
  h,
  readTask,
  registerInstance,
  writeTask
} from "./chunk-BFPTXCSH.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js
var rippleEffectCss = ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1));-webkit-animation:150ms fadeOutAnimation forwards;animation:150ms fadeOutAnimation forwards}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}";
var RippleEffect = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.type = "bounded";
  }
  /**
   * Adds the ripple effect to the parent element.
   *
   * @param x The horizontal coordinate of where the ripple should start.
   * @param y The vertical coordinate of where the ripple should start.
   */
  addRipple(x, y) {
    return __async(this, null, function* () {
      return new Promise((resolve) => {
        readTask(() => {
          const rect = this.el.getBoundingClientRect();
          const width = rect.width;
          const height = rect.height;
          const hypotenuse = Math.sqrt(width * width + height * height);
          const maxDim = Math.max(height, width);
          const maxRadius = this.unbounded ? maxDim : hypotenuse + PADDING;
          const initialSize = Math.floor(maxDim * INITIAL_ORIGIN_SCALE);
          const finalScale = maxRadius / initialSize;
          let posX = x - rect.left;
          let posY = y - rect.top;
          if (this.unbounded) {
            posX = width * 0.5;
            posY = height * 0.5;
          }
          const styleX = posX - initialSize * 0.5;
          const styleY = posY - initialSize * 0.5;
          const moveX = width * 0.5 - posX;
          const moveY = height * 0.5 - posY;
          writeTask(() => {
            const div = document.createElement("div");
            div.classList.add("ripple-effect");
            const style = div.style;
            style.top = styleY + "px";
            style.left = styleX + "px";
            style.width = style.height = initialSize + "px";
            style.setProperty("--final-scale", `${finalScale}`);
            style.setProperty("--translate-end", `${moveX}px, ${moveY}px`);
            const container = this.el.shadowRoot || this.el;
            container.appendChild(div);
            setTimeout(() => {
              resolve(() => {
                removeRipple(div);
              });
            }, 225 + 100);
          });
        });
      });
    });
  }
  get unbounded() {
    return this.type === "unbounded";
  }
  render() {
    const mode = getIonMode(this);
    return h(Host, {
      key: "ae9d3b1ed6773a9b9bb2267129f7e9af23b6c9fc",
      role: "presentation",
      class: {
        [mode]: true,
        unbounded: this.unbounded
      }
    });
  }
  get el() {
    return getElement(this);
  }
};
var removeRipple = (ripple) => {
  ripple.classList.add("fade-out");
  setTimeout(() => {
    ripple.remove();
  }, 200);
};
var PADDING = 10;
var INITIAL_ORIGIN_SCALE = 0.5;
RippleEffect.style = rippleEffectCss;
export {
  RippleEffect as ion_ripple_effect
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-ripple-effect.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tcmlwcGxlLWVmZmVjdC5lbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBhIGFzIHJlYWRUYXNrLCB3IGFzIHdyaXRlVGFzaywgaCwgZCBhcyBIb3N0LCBnIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2luZGV4LTREeFk2X2dHLmpzJztcbmltcG9ydCB7IGIgYXMgZ2V0SW9uTW9kZSB9IGZyb20gJy4vaW9uaWMtZ2xvYmFsLUNUU3l1ZmhGLmpzJztcbmNvbnN0IHJpcHBsZUVmZmVjdENzcyA9IFwiOmhvc3R7bGVmdDowO3JpZ2h0OjA7dG9wOjA7Ym90dG9tOjA7cG9zaXRpb246YWJzb2x1dGU7Y29udGFpbjpzdHJpY3Q7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdCgudW5ib3VuZGVkKXtjb250YWluOmxheW91dCBzaXplIHN0eWxlfS5yaXBwbGUtZWZmZWN0e2JvcmRlci1yYWRpdXM6NTAlO3Bvc2l0aW9uOmFic29sdXRlO2JhY2tncm91bmQtY29sb3I6Y3VycmVudENvbG9yO2NvbG9yOmluaGVyaXQ7Y29udGFpbjpzdHJpY3Q7b3BhY2l0eTowOy13ZWJraXQtYW5pbWF0aW9uOjIyNW1zIHJpcHBsZUFuaW1hdGlvbiBmb3J3YXJkcywgNzVtcyBmYWRlSW5BbmltYXRpb24gZm9yd2FyZHM7YW5pbWF0aW9uOjIyNW1zIHJpcHBsZUFuaW1hdGlvbiBmb3J3YXJkcywgNzVtcyBmYWRlSW5BbmltYXRpb24gZm9yd2FyZHM7d2lsbC1jaGFuZ2U6dHJhbnNmb3JtLCBvcGFjaXR5O3BvaW50ZXItZXZlbnRzOm5vbmV9LmZhZGUtb3V0ey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSh2YXIoLS10cmFuc2xhdGUtZW5kKSkgc2NhbGUodmFyKC0tZmluYWwtc2NhbGUsIDEpKTt0cmFuc2Zvcm06dHJhbnNsYXRlKHZhcigtLXRyYW5zbGF0ZS1lbmQpKSBzY2FsZSh2YXIoLS1maW5hbC1zY2FsZSwgMSkpOy13ZWJraXQtYW5pbWF0aW9uOjE1MG1zIGZhZGVPdXRBbmltYXRpb24gZm9yd2FyZHM7YW5pbWF0aW9uOjE1MG1zIGZhZGVPdXRBbmltYXRpb24gZm9yd2FyZHN9QC13ZWJraXQta2V5ZnJhbWVzIHJpcHBsZUFuaW1hdGlvbntmcm9tey13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKHZhcigtLXRyYW5zbGF0ZS1lbmQpKSBzY2FsZSh2YXIoLS1maW5hbC1zY2FsZSwgMSkpO3RyYW5zZm9ybTp0cmFuc2xhdGUodmFyKC0tdHJhbnNsYXRlLWVuZCkpIHNjYWxlKHZhcigtLWZpbmFsLXNjYWxlLCAxKSl9fUBrZXlmcmFtZXMgcmlwcGxlQW5pbWF0aW9ue2Zyb217LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX10b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUodmFyKC0tdHJhbnNsYXRlLWVuZCkpIHNjYWxlKHZhcigtLWZpbmFsLXNjYWxlLCAxKSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSh2YXIoLS10cmFuc2xhdGUtZW5kKSkgc2NhbGUodmFyKC0tZmluYWwtc2NhbGUsIDEpKX19QC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbkFuaW1hdGlvbntmcm9tey13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXI7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXI7b3BhY2l0eTowfXRve29wYWNpdHk6MC4xNn19QGtleWZyYW1lcyBmYWRlSW5BbmltYXRpb257ZnJvbXstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyO29wYWNpdHk6MH10b3tvcGFjaXR5OjAuMTZ9fUAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0QW5pbWF0aW9ue2Zyb217LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjtvcGFjaXR5OjAuMTZ9dG97b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIGZhZGVPdXRBbmltYXRpb257ZnJvbXstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyO29wYWNpdHk6MC4xNn10b3tvcGFjaXR5OjB9fVwiO1xuY29uc3QgUmlwcGxlRWZmZWN0ID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB0eXBlIG9mIHJpcHBsZS1lZmZlY3Q6XG4gICAgICpcbiAgICAgKiAtIGBib3VuZGVkYDogdGhlIHJpcHBsZSBlZmZlY3QgZXhwYW5kcyBmcm9tIHRoZSB1c2VyJ3MgY2xpY2sgcG9zaXRpb25cbiAgICAgKiAtIGB1bmJvdW5kZWRgOiB0aGUgcmlwcGxlIGVmZmVjdCBleHBhbmRzIGZyb20gdGhlIGNlbnRlciBvZiB0aGUgYnV0dG9uIGFuZCBvdmVyZmxvd3MgdGhlIGNvbnRhaW5lci5cbiAgICAgKlxuICAgICAqIE5PVEU6IFN1cmZhY2VzIGZvciBib3VuZGVkIHJpcHBsZXMgc2hvdWxkIGhhdmUgdGhlIG92ZXJmbG93IHByb3BlcnR5IHNldCB0byBoaWRkZW4sXG4gICAgICogd2hpbGUgc3VyZmFjZXMgZm9yIHVuYm91bmRlZCByaXBwbGVzIHNob3VsZCBoYXZlIGl0IHNldCB0byB2aXNpYmxlLlxuICAgICAqL1xuICAgIHRoaXMudHlwZSA9ICdib3VuZGVkJztcbiAgfVxuICAvKipcbiAgICogQWRkcyB0aGUgcmlwcGxlIGVmZmVjdCB0byB0aGUgcGFyZW50IGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB4IFRoZSBob3Jpem9udGFsIGNvb3JkaW5hdGUgb2Ygd2hlcmUgdGhlIHJpcHBsZSBzaG91bGQgc3RhcnQuXG4gICAqIEBwYXJhbSB5IFRoZSB2ZXJ0aWNhbCBjb29yZGluYXRlIG9mIHdoZXJlIHRoZSByaXBwbGUgc2hvdWxkIHN0YXJ0LlxuICAgKi9cbiAgYXN5bmMgYWRkUmlwcGxlKHgsIHkpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICByZWFkVGFzaygoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCB3aWR0aCA9IHJlY3Qud2lkdGg7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHJlY3QuaGVpZ2h0O1xuICAgICAgICBjb25zdCBoeXBvdGVudXNlID0gTWF0aC5zcXJ0KHdpZHRoICogd2lkdGggKyBoZWlnaHQgKiBoZWlnaHQpO1xuICAgICAgICBjb25zdCBtYXhEaW0gPSBNYXRoLm1heChoZWlnaHQsIHdpZHRoKTtcbiAgICAgICAgY29uc3QgbWF4UmFkaXVzID0gdGhpcy51bmJvdW5kZWQgPyBtYXhEaW0gOiBoeXBvdGVudXNlICsgUEFERElORztcbiAgICAgICAgY29uc3QgaW5pdGlhbFNpemUgPSBNYXRoLmZsb29yKG1heERpbSAqIElOSVRJQUxfT1JJR0lOX1NDQUxFKTtcbiAgICAgICAgY29uc3QgZmluYWxTY2FsZSA9IG1heFJhZGl1cyAvIGluaXRpYWxTaXplO1xuICAgICAgICBsZXQgcG9zWCA9IHggLSByZWN0LmxlZnQ7XG4gICAgICAgIGxldCBwb3NZID0geSAtIHJlY3QudG9wO1xuICAgICAgICBpZiAodGhpcy51bmJvdW5kZWQpIHtcbiAgICAgICAgICBwb3NYID0gd2lkdGggKiAwLjU7XG4gICAgICAgICAgcG9zWSA9IGhlaWdodCAqIDAuNTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdHlsZVggPSBwb3NYIC0gaW5pdGlhbFNpemUgKiAwLjU7XG4gICAgICAgIGNvbnN0IHN0eWxlWSA9IHBvc1kgLSBpbml0aWFsU2l6ZSAqIDAuNTtcbiAgICAgICAgY29uc3QgbW92ZVggPSB3aWR0aCAqIDAuNSAtIHBvc1g7XG4gICAgICAgIGNvbnN0IG1vdmVZID0gaGVpZ2h0ICogMC41IC0gcG9zWTtcbiAgICAgICAgd3JpdGVUYXNrKCgpID0+IHtcbiAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgncmlwcGxlLWVmZmVjdCcpO1xuICAgICAgICAgIGNvbnN0IHN0eWxlID0gZGl2LnN0eWxlO1xuICAgICAgICAgIHN0eWxlLnRvcCA9IHN0eWxlWSArICdweCc7XG4gICAgICAgICAgc3R5bGUubGVmdCA9IHN0eWxlWCArICdweCc7XG4gICAgICAgICAgc3R5bGUud2lkdGggPSBzdHlsZS5oZWlnaHQgPSBpbml0aWFsU2l6ZSArICdweCc7XG4gICAgICAgICAgc3R5bGUuc2V0UHJvcGVydHkoJy0tZmluYWwtc2NhbGUnLCBgJHtmaW5hbFNjYWxlfWApO1xuICAgICAgICAgIHN0eWxlLnNldFByb3BlcnR5KCctLXRyYW5zbGF0ZS1lbmQnLCBgJHttb3ZlWH1weCwgJHttb3ZlWX1weGApO1xuICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuZWwuc2hhZG93Um9vdCB8fCB0aGlzLmVsO1xuICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZSgoKSA9PiB7XG4gICAgICAgICAgICAgIHJlbW92ZVJpcHBsZShkaXYpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSwgMjI1ICsgMTAwKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBnZXQgdW5ib3VuZGVkKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09ICd1bmJvdW5kZWQnO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICByZXR1cm4gaChIb3N0LCB7XG4gICAgICBrZXk6ICdhZTlkM2IxZWQ2NzczYTliOWJiMjI2NzEyOWY3ZTlhZjIzYjZjOWZjJyxcbiAgICAgIHJvbGU6IFwicHJlc2VudGF0aW9uXCIsXG4gICAgICBjbGFzczoge1xuICAgICAgICBbbW9kZV06IHRydWUsXG4gICAgICAgIHVuYm91bmRlZDogdGhpcy51bmJvdW5kZWRcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBnZXQgZWwoKSB7XG4gICAgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7XG4gIH1cbn07XG5jb25zdCByZW1vdmVSaXBwbGUgPSByaXBwbGUgPT4ge1xuICByaXBwbGUuY2xhc3NMaXN0LmFkZCgnZmFkZS1vdXQnKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgcmlwcGxlLnJlbW92ZSgpO1xuICB9LCAyMDApO1xufTtcbmNvbnN0IFBBRERJTkcgPSAxMDtcbmNvbnN0IElOSVRJQUxfT1JJR0lOX1NDQUxFID0gMC41O1xuUmlwcGxlRWZmZWN0LnN0eWxlID0gcmlwcGxlRWZmZWN0Q3NzO1xuZXhwb3J0IHsgUmlwcGxlRWZmZWN0IGFzIGlvbl9yaXBwbGVfZWZmZWN0IH07Il0sIm1hcHBpbmdzIjoi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
