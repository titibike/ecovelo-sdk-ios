import {
  createColorClasses,
  openURL
} from "./chunk-5VP4V3BN.js";
import {
  getIonMode
} from "./chunk-TXLH22R2.js";
import {
  inheritAttributes
} from "./chunk-RZR7LWTQ.js";
import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-BFPTXCSH.js";
import "./chunk-UESUV5PM.js";

// node_modules/@ionic/core/dist/esm/ion-card_5.entry.js
var cardIosCss = ":host{--ion-safe-area-left:0px;--ion-safe-area-right:0px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;overflow:hidden}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.card-disabled){cursor:default;opacity:0.3;pointer-events:none}.card-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:inherit}.card-native::-moz-focus-inner{border:0}button,a{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}ion-ripple-effect{color:var(--ripple-color)}:host{--background:var(--ion-card-background, var(--ion-item-background, var(--ion-background-color, #fff)));--color:var(--ion-card-color, var(--ion-item-color, var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))));-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:24px;margin-bottom:24px;border-radius:8px;-webkit-transition:-webkit-transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);transition:-webkit-transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);transition:transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);transition:transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1), -webkit-transform 500ms cubic-bezier(0.12, 0.72, 0.29, 1);font-size:0.875rem;-webkit-box-shadow:0 4px 16px rgba(0, 0, 0, 0.12);box-shadow:0 4px 16px rgba(0, 0, 0, 0.12)}:host(.ion-activated){-webkit-transform:scale3d(0.97, 0.97, 1);transform:scale3d(0.97, 0.97, 1)}";
var cardMdCss = ":host{--ion-safe-area-left:0px;--ion-safe-area-right:0px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;overflow:hidden}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.card-disabled){cursor:default;opacity:0.3;pointer-events:none}.card-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:inherit}.card-native::-moz-focus-inner{border:0}button,a{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}ion-ripple-effect{color:var(--ripple-color)}:host{--background:var(--ion-card-background, var(--ion-item-background, var(--ion-background-color, #fff)));--color:var(--ion-card-color, var(--ion-item-color, var(--ion-color-step-550, var(--ion-text-color-step-450, #737373))));-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px;margin-top:10px;margin-bottom:10px;border-radius:4px;font-size:0.875rem;-webkit-box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)}";
var Card = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.inheritedAriaAttributes = {};
    this.button = false;
    this.type = "button";
    this.disabled = false;
    this.routerDirection = "forward";
  }
  componentWillLoad() {
    this.inheritedAriaAttributes = inheritAttributes(this.el, ["aria-label"]);
  }
  isClickable() {
    return this.href !== void 0 || this.button;
  }
  renderCard(mode) {
    const clickable = this.isClickable();
    if (!clickable) {
      return [h("slot", null)];
    }
    const {
      href,
      routerAnimation,
      routerDirection,
      inheritedAriaAttributes
    } = this;
    const TagType = clickable ? href === void 0 ? "button" : "a" : "div";
    const attrs = TagType === "button" ? {
      type: this.type
    } : {
      download: this.download,
      href: this.href,
      rel: this.rel,
      target: this.target
    };
    return h(TagType, Object.assign({}, attrs, inheritedAriaAttributes, {
      class: "card-native",
      part: "native",
      disabled: this.disabled,
      onClick: (ev) => openURL(href, ev, routerDirection, routerAnimation)
    }), h("slot", null), clickable && mode === "md" && h("ion-ripple-effect", null));
  }
  render() {
    const mode = getIonMode(this);
    return h(Host, {
      key: "85e9b30bd81e79a0c7ac75cb3664bdcf9e4afc4d",
      class: createColorClasses(this.color, {
        [mode]: true,
        "card-disabled": this.disabled,
        "ion-activatable": this.isClickable()
      })
    }, this.renderCard(mode));
  }
  get el() {
    return getElement(this);
  }
};
Card.style = {
  ios: cardIosCss,
  md: cardMdCss
};
var cardContentIosCss = "ion-card-content{display:block;position:relative}.card-content-ios{-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px;padding-top:20px;padding-bottom:20px;font-size:1rem;line-height:1.4}.card-content-ios h1{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:1.5rem;font-weight:normal}.card-content-ios h2{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:1rem;font-weight:normal}.card-content-ios h3,.card-content-ios h4,.card-content-ios h5,.card-content-ios h6{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:0.875rem;font-weight:normal}.card-content-ios p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:0.875rem}ion-card-header+.card-content-ios{padding-top:0}";
var cardContentMdCss = "ion-card-content{display:block;position:relative}.card-content-md{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:13px;padding-bottom:13px;font-size:0.875rem;line-height:1.5}.card-content-md h1{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:1.5rem;font-weight:normal}.card-content-md h2{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:1rem;font-weight:normal}.card-content-md h3,.card-content-md h4,.card-content-md h5,.card-content-md h6{margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:0.875rem;font-weight:normal}.card-content-md p{margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:0.875rem;font-weight:normal;line-height:1.5}ion-card-header+.card-content-md{padding-top:0}";
var CardContent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const mode = getIonMode(this);
    return h(Host, {
      key: "d98e4d1fc6ad3237549f9bc17e4c67ec5059b1b3",
      class: {
        [mode]: true,
        // Used internally for styling
        [`card-content-${mode}`]: true
      }
    });
  }
};
CardContent.style = {
  ios: cardContentIosCss,
  md: cardContentMdCss
};
var cardHeaderIosCss = ":host{--background:transparent;--color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:column;flex-direction:column;background:var(--background);color:var(--color)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host{-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px;padding-top:20px;padding-bottom:16px;-ms-flex-direction:column-reverse;flex-direction:column-reverse}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.card-header-translucent){background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.9);-webkit-backdrop-filter:saturate(180%) blur(30px);backdrop-filter:saturate(180%) blur(30px)}}";
var cardHeaderMdCss = ":host{--background:transparent;--color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:column;flex-direction:column;background:var(--background);color:var(--color)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:16px;padding-bottom:16px}::slotted(ion-card-title:not(:first-child)),::slotted(ion-card-subtitle:not(:first-child)){margin-top:8px}";
var CardHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.translucent = false;
  }
  render() {
    const mode = getIonMode(this);
    return h(Host, {
      key: "64246b81931203a64d553c788cd736f41e23f37b",
      class: createColorClasses(this.color, {
        "card-header-translucent": this.translucent,
        "ion-inherit-color": true,
        [mode]: true
      })
    }, h("slot", {
      key: "af2da2dfe266889afeb57fac25c6a730558dbba4"
    }));
  }
};
CardHeader.style = {
  ios: cardHeaderIosCss,
  md: cardHeaderMdCss
};
var cardSubtitleIosCss = ":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666));margin-left:0;margin-right:0;margin-top:0;margin-bottom:4px;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:0.75rem;font-weight:700;letter-spacing:0.4px;text-transform:uppercase}";
var cardSubtitleMdCss = ":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-550, var(--ion-text-color-step-450, #737373));margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:0.875rem;font-weight:500}";
var CardSubtitle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const mode = getIonMode(this);
    return h(Host, {
      key: "84d820a19d9074f9c8bc61ccba1ca40062a60b73",
      role: "heading",
      "aria-level": "3",
      class: createColorClasses(this.color, {
        "ion-inherit-color": true,
        [mode]: true
      })
    }, h("slot", {
      key: "e4d07d395a1f4469a90847636083101b32b776a1"
    }));
  }
};
CardSubtitle.style = {
  ios: cardSubtitleIosCss,
  md: cardSubtitleMdCss
};
var cardTitleIosCss = ":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-text-color, #000);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:1.75rem;font-weight:700;line-height:1.2}";
var cardTitleMdCss = ":host{display:block;position:relative;color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-850, var(--ion-text-color-step-150, #262626));margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:1.25rem;font-weight:500;line-height:1.2}";
var CardTitle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const mode = getIonMode(this);
    return h(Host, {
      key: "fca001a86396e83718d5211cd71912fdf40dea2f",
      role: "heading",
      "aria-level": "2",
      class: createColorClasses(this.color, {
        "ion-inherit-color": true,
        [mode]: true
      })
    }, h("slot", {
      key: "2ba416aed488b2ff462fa75fb3b70373a6dd7da6"
    }));
  }
};
CardTitle.style = {
  ios: cardTitleIosCss,
  md: cardTitleMdCss
};
export {
  Card as ion_card,
  CardContent as ion_card_content,
  CardHeader as ion_card_header,
  CardSubtitle as ion_card_subtitle,
  CardTitle as ion_card_title
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-card_5.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tY2FyZF81LmVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGgsIGQgYXMgSG9zdCwgZyBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9pbmRleC00RHhZNl9nRy5qcyc7XG5pbXBvcnQgeyBiIGFzIGluaGVyaXRBdHRyaWJ1dGVzIH0gZnJvbSAnLi9oZWxwZXJzLThLU1FRR1F5LmpzJztcbmltcG9ydCB7IG8gYXMgb3BlblVSTCwgYyBhcyBjcmVhdGVDb2xvckNsYXNzZXMgfSBmcm9tICcuL3RoZW1lLURpVkp5cWxYLmpzJztcbmltcG9ydCB7IGIgYXMgZ2V0SW9uTW9kZSB9IGZyb20gJy4vaW9uaWMtZ2xvYmFsLUNUU3l1ZmhGLmpzJztcbmNvbnN0IGNhcmRJb3NDc3MgPSBcIjpob3N0ey0taW9uLXNhZmUtYXJlYS1sZWZ0OjBweDstLWlvbi1zYWZlLWFyZWEtcmlnaHQ6MHB4Oy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTtjb2xvcjp2YXIoLS1jb2xvcik7Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LCBpbmhlcml0KTtjb250YWluOmNvbnRlbnQ7b3ZlcmZsb3c6aGlkZGVufTpob3N0KC5pb24tY29sb3Ipe2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWJhc2UpO2NvbG9yOnZhcigtLWlvbi1jb2xvci1jb250cmFzdCl9Omhvc3QoLmNhcmQtZGlzYWJsZWQpe2N1cnNvcjpkZWZhdWx0O29wYWNpdHk6MC4zO3BvaW50ZXItZXZlbnRzOm5vbmV9LmNhcmQtbmF0aXZle2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOmluaGVyaXQ7Zm9udC1zdHlsZTppbmhlcml0O2ZvbnQtd2VpZ2h0OmluaGVyaXQ7bGV0dGVyLXNwYWNpbmc6aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt0ZXh0LWluZGVudDppbmhlcml0O3RleHQtb3ZlcmZsb3c6aW5oZXJpdDt0ZXh0LXRyYW5zZm9ybTppbmhlcml0O3RleHQtYWxpZ246aW5oZXJpdDt3aGl0ZS1zcGFjZTppbmhlcml0O2NvbG9yOmluaGVyaXQ7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO21pbi1oZWlnaHQ6dmFyKC0tbWluLWhlaWdodCk7LXdlYmtpdC10cmFuc2l0aW9uOnZhcigtLXRyYW5zaXRpb24pO3RyYW5zaXRpb246dmFyKC0tdHJhbnNpdGlvbik7Ym9yZGVyLXdpZHRoOnZhcigtLWJvcmRlci13aWR0aCk7Ym9yZGVyLXN0eWxlOnZhcigtLWJvcmRlci1zdHlsZSk7Ym9yZGVyLWNvbG9yOnZhcigtLWJvcmRlci1jb2xvcik7b3V0bGluZTpub25lO2JhY2tncm91bmQ6aW5oZXJpdH0uY2FyZC1uYXRpdmU6Oi1tb3otZm9jdXMtaW5uZXJ7Ym9yZGVyOjB9YnV0dG9uLGF7Y3Vyc29yOnBvaW50ZXI7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lOy13ZWJraXQtdXNlci1kcmFnOm5vbmV9aW9uLXJpcHBsZS1lZmZlY3R7Y29sb3I6dmFyKC0tcmlwcGxlLWNvbG9yKX06aG9zdHstLWJhY2tncm91bmQ6dmFyKC0taW9uLWNhcmQtYmFja2dyb3VuZCwgdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKSk7LS1jb2xvcjp2YXIoLS1pb24tY2FyZC1jb2xvciwgdmFyKC0taW9uLWl0ZW0tY29sb3IsIHZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCwgdmFyKC0taW9uLXRleHQtY29sb3Itc3RlcC00MDAsICM2NjY2NjYpKSkpOy13ZWJraXQtbWFyZ2luLXN0YXJ0OjE2cHg7bWFyZ2luLWlubGluZS1zdGFydDoxNnB4Oy13ZWJraXQtbWFyZ2luLWVuZDoxNnB4O21hcmdpbi1pbmxpbmUtZW5kOjE2cHg7bWFyZ2luLXRvcDoyNHB4O21hcmdpbi1ib3R0b206MjRweDtib3JkZXItcmFkaXVzOjhweDstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gNTAwbXMgY3ViaWMtYmV6aWVyKDAuMTIsIDAuNzIsIDAuMjksIDEpO3RyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gNTAwbXMgY3ViaWMtYmV6aWVyKDAuMTIsIDAuNzIsIDAuMjksIDEpO3RyYW5zaXRpb246dHJhbnNmb3JtIDUwMG1zIGN1YmljLWJlemllcigwLjEyLCAwLjcyLCAwLjI5LCAxKTt0cmFuc2l0aW9uOnRyYW5zZm9ybSA1MDBtcyBjdWJpYy1iZXppZXIoMC4xMiwgMC43MiwgMC4yOSwgMSksIC13ZWJraXQtdHJhbnNmb3JtIDUwMG1zIGN1YmljLWJlemllcigwLjEyLCAwLjcyLCAwLjI5LCAxKTtmb250LXNpemU6MC44NzVyZW07LXdlYmtpdC1ib3gtc2hhZG93OjAgNHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtib3gtc2hhZG93OjAgNHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjEyKX06aG9zdCguaW9uLWFjdGl2YXRlZCl7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgwLjk3LCAwLjk3LCAxKTt0cmFuc2Zvcm06c2NhbGUzZCgwLjk3LCAwLjk3LCAxKX1cIjtcbmNvbnN0IGNhcmRNZENzcyA9IFwiOmhvc3R7LS1pb24tc2FmZS1hcmVhLWxlZnQ6MHB4Oy0taW9uLXNhZmUtYXJlYS1yaWdodDowcHg7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2NvbG9yOnZhcigtLWNvbG9yKTtmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHksIGluaGVyaXQpO2NvbnRhaW46Y29udGVudDtvdmVyZmxvdzpoaWRkZW59Omhvc3QoLmlvbi1jb2xvcil7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItYmFzZSk7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KX06aG9zdCguY2FyZC1kaXNhYmxlZCl7Y3Vyc29yOmRlZmF1bHQ7b3BhY2l0eTowLjM7cG9pbnRlci1ldmVudHM6bm9uZX0uY2FyZC1uYXRpdmV7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6aW5oZXJpdDtmb250LXN0eWxlOmluaGVyaXQ7Zm9udC13ZWlnaHQ6aW5oZXJpdDtsZXR0ZXItc3BhY2luZzppbmhlcml0O3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3RleHQtaW5kZW50OmluaGVyaXQ7dGV4dC1vdmVyZmxvdzppbmhlcml0O3RleHQtdHJhbnNmb3JtOmluaGVyaXQ7dGV4dC1hbGlnbjppbmhlcml0O3doaXRlLXNwYWNlOmluaGVyaXQ7Y29sb3I6aW5oZXJpdDtwYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjA7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowO21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7bWluLWhlaWdodDp2YXIoLS1taW4taGVpZ2h0KTstd2Via2l0LXRyYW5zaXRpb246dmFyKC0tdHJhbnNpdGlvbik7dHJhbnNpdGlvbjp2YXIoLS10cmFuc2l0aW9uKTtib3JkZXItd2lkdGg6dmFyKC0tYm9yZGVyLXdpZHRoKTtib3JkZXItc3R5bGU6dmFyKC0tYm9yZGVyLXN0eWxlKTtib3JkZXItY29sb3I6dmFyKC0tYm9yZGVyLWNvbG9yKTtvdXRsaW5lOm5vbmU7YmFja2dyb3VuZDppbmhlcml0fS5jYXJkLW5hdGl2ZTo6LW1vei1mb2N1cy1pbm5lcntib3JkZXI6MH1idXR0b24sYXtjdXJzb3I6cG9pbnRlcjstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7LXdlYmtpdC11c2VyLWRyYWc6bm9uZX1pb24tcmlwcGxlLWVmZmVjdHtjb2xvcjp2YXIoLS1yaXBwbGUtY29sb3IpfTpob3N0ey0tYmFja2dyb3VuZDp2YXIoLS1pb24tY2FyZC1iYWNrZ3JvdW5kLCB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpKTstLWNvbG9yOnZhcigtLWlvbi1jYXJkLWNvbG9yLCB2YXIoLS1pb24taXRlbS1jb2xvciwgdmFyKC0taW9uLWNvbG9yLXN0ZXAtNTUwLCB2YXIoLS1pb24tdGV4dC1jb2xvci1zdGVwLTQ1MCwgIzczNzM3MykpKSk7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MTBweDttYXJnaW4taW5saW5lLXN0YXJ0OjEwcHg7LXdlYmtpdC1tYXJnaW4tZW5kOjEwcHg7bWFyZ2luLWlubGluZS1lbmQ6MTBweDttYXJnaW4tdG9wOjEwcHg7bWFyZ2luLWJvdHRvbToxMHB4O2JvcmRlci1yYWRpdXM6NHB4O2ZvbnQtc2l6ZTowLjg3NXJlbTstd2Via2l0LWJveC1zaGFkb3c6MCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO2JveC1zaGFkb3c6MCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpfVwiO1xuY29uc3QgQ2FyZCA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5pbmhlcml0ZWRBcmlhQXR0cmlidXRlcyA9IHt9O1xuICAgIC8qKlxuICAgICAqIElmIGB0cnVlYCwgYSBidXR0b24gdGFnIHdpbGwgYmUgcmVuZGVyZWQgYW5kIHRoZSBjYXJkIHdpbGwgYmUgdGFwcGFibGUuXG4gICAgICovXG4gICAgdGhpcy5idXR0b24gPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBUaGUgdHlwZSBvZiB0aGUgYnV0dG9uLiBPbmx5IHVzZWQgd2hlbiBhbiBgb25jbGlja2Agb3IgYGJ1dHRvbmAgcHJvcGVydHkgaXMgcHJlc2VudC5cbiAgICAgKi9cbiAgICB0aGlzLnR5cGUgPSAnYnV0dG9uJztcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIHRoZSB1c2VyIGNhbm5vdCBpbnRlcmFjdCB3aXRoIHRoZSBjYXJkLlxuICAgICAqL1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBXaGVuIHVzaW5nIGEgcm91dGVyLCBpdCBzcGVjaWZpZXMgdGhlIHRyYW5zaXRpb24gZGlyZWN0aW9uIHdoZW4gbmF2aWdhdGluZyB0b1xuICAgICAqIGFub3RoZXIgcGFnZSB1c2luZyBgaHJlZmAuXG4gICAgICovXG4gICAgdGhpcy5yb3V0ZXJEaXJlY3Rpb24gPSAnZm9yd2FyZCc7XG4gIH1cbiAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgdGhpcy5pbmhlcml0ZWRBcmlhQXR0cmlidXRlcyA9IGluaGVyaXRBdHRyaWJ1dGVzKHRoaXMuZWwsIFsnYXJpYS1sYWJlbCddKTtcbiAgfVxuICBpc0NsaWNrYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ocmVmICE9PSB1bmRlZmluZWQgfHwgdGhpcy5idXR0b247XG4gIH1cbiAgcmVuZGVyQ2FyZChtb2RlKSB7XG4gICAgY29uc3QgY2xpY2thYmxlID0gdGhpcy5pc0NsaWNrYWJsZSgpO1xuICAgIGlmICghY2xpY2thYmxlKSB7XG4gICAgICByZXR1cm4gW2goXCJzbG90XCIsIG51bGwpXTtcbiAgICB9XG4gICAgY29uc3Qge1xuICAgICAgaHJlZixcbiAgICAgIHJvdXRlckFuaW1hdGlvbixcbiAgICAgIHJvdXRlckRpcmVjdGlvbixcbiAgICAgIGluaGVyaXRlZEFyaWFBdHRyaWJ1dGVzXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgVGFnVHlwZSA9IGNsaWNrYWJsZSA/IGhyZWYgPT09IHVuZGVmaW5lZCA/ICdidXR0b24nIDogJ2EnIDogJ2Rpdic7XG4gICAgY29uc3QgYXR0cnMgPSBUYWdUeXBlID09PSAnYnV0dG9uJyA/IHtcbiAgICAgIHR5cGU6IHRoaXMudHlwZVxuICAgIH0gOiB7XG4gICAgICBkb3dubG9hZDogdGhpcy5kb3dubG9hZCxcbiAgICAgIGhyZWY6IHRoaXMuaHJlZixcbiAgICAgIHJlbDogdGhpcy5yZWwsXG4gICAgICB0YXJnZXQ6IHRoaXMudGFyZ2V0XG4gICAgfTtcbiAgICByZXR1cm4gaChUYWdUeXBlLCBPYmplY3QuYXNzaWduKHt9LCBhdHRycywgaW5oZXJpdGVkQXJpYUF0dHJpYnV0ZXMsIHtcbiAgICAgIGNsYXNzOiBcImNhcmQtbmF0aXZlXCIsXG4gICAgICBwYXJ0OiBcIm5hdGl2ZVwiLFxuICAgICAgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQsXG4gICAgICBvbkNsaWNrOiBldiA9PiBvcGVuVVJMKGhyZWYsIGV2LCByb3V0ZXJEaXJlY3Rpb24sIHJvdXRlckFuaW1hdGlvbilcbiAgICB9KSwgaChcInNsb3RcIiwgbnVsbCksIGNsaWNrYWJsZSAmJiBtb2RlID09PSAnbWQnICYmIGgoXCJpb24tcmlwcGxlLWVmZmVjdFwiLCBudWxsKSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgIHJldHVybiBoKEhvc3QsIHtcbiAgICAgIGtleTogJzg1ZTliMzBiZDgxZTc5YTBjN2FjNzVjYjM2NjRiZGNmOWU0YWZjNGQnLFxuICAgICAgY2xhc3M6IGNyZWF0ZUNvbG9yQ2xhc3Nlcyh0aGlzLmNvbG9yLCB7XG4gICAgICAgIFttb2RlXTogdHJ1ZSxcbiAgICAgICAgJ2NhcmQtZGlzYWJsZWQnOiB0aGlzLmRpc2FibGVkLFxuICAgICAgICAnaW9uLWFjdGl2YXRhYmxlJzogdGhpcy5pc0NsaWNrYWJsZSgpXG4gICAgICB9KVxuICAgIH0sIHRoaXMucmVuZGVyQ2FyZChtb2RlKSk7XG4gIH1cbiAgZ2V0IGVsKCkge1xuICAgIHJldHVybiBnZXRFbGVtZW50KHRoaXMpO1xuICB9XG59O1xuQ2FyZC5zdHlsZSA9IHtcbiAgaW9zOiBjYXJkSW9zQ3NzLFxuICBtZDogY2FyZE1kQ3NzXG59O1xuY29uc3QgY2FyZENvbnRlbnRJb3NDc3MgPSBcImlvbi1jYXJkLWNvbnRlbnR7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZX0uY2FyZC1jb250ZW50LWlvc3std2Via2l0LXBhZGRpbmctc3RhcnQ6MjBweDtwYWRkaW5nLWlubGluZS1zdGFydDoyMHB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MjBweDtwYWRkaW5nLWlubGluZS1lbmQ6MjBweDtwYWRkaW5nLXRvcDoyMHB4O3BhZGRpbmctYm90dG9tOjIwcHg7Zm9udC1zaXplOjFyZW07bGluZS1oZWlnaHQ6MS40fS5jYXJkLWNvbnRlbnQtaW9zIGgxe21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MnB4O2ZvbnQtc2l6ZToxLjVyZW07Zm9udC13ZWlnaHQ6bm9ybWFsfS5jYXJkLWNvbnRlbnQtaW9zIGgye21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDoycHg7bWFyZ2luLWJvdHRvbToycHg7Zm9udC1zaXplOjFyZW07Zm9udC13ZWlnaHQ6bm9ybWFsfS5jYXJkLWNvbnRlbnQtaW9zIGgzLC5jYXJkLWNvbnRlbnQtaW9zIGg0LC5jYXJkLWNvbnRlbnQtaW9zIGg1LC5jYXJkLWNvbnRlbnQtaW9zIGg2e21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDoycHg7bWFyZ2luLWJvdHRvbToycHg7Zm9udC1zaXplOjAuODc1cmVtO2ZvbnQtd2VpZ2h0Om5vcm1hbH0uY2FyZC1jb250ZW50LWlvcyBwe21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MnB4O2ZvbnQtc2l6ZTowLjg3NXJlbX1pb24tY2FyZC1oZWFkZXIrLmNhcmQtY29udGVudC1pb3N7cGFkZGluZy10b3A6MH1cIjtcbmNvbnN0IGNhcmRDb250ZW50TWRDc3MgPSBcImlvbi1jYXJkLWNvbnRlbnR7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZX0uY2FyZC1jb250ZW50LW1key13ZWJraXQtcGFkZGluZy1zdGFydDoxNnB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjE2cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDoxNnB4O3BhZGRpbmctaW5saW5lLWVuZDoxNnB4O3BhZGRpbmctdG9wOjEzcHg7cGFkZGluZy1ib3R0b206MTNweDtmb250LXNpemU6MC44NzVyZW07bGluZS1oZWlnaHQ6MS41fS5jYXJkLWNvbnRlbnQtbWQgaDF7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbToycHg7Zm9udC1zaXplOjEuNXJlbTtmb250LXdlaWdodDpub3JtYWx9LmNhcmQtY29udGVudC1tZCBoMnttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MnB4O21hcmdpbi1ib3R0b206MnB4O2ZvbnQtc2l6ZToxcmVtO2ZvbnQtd2VpZ2h0Om5vcm1hbH0uY2FyZC1jb250ZW50LW1kIGgzLC5jYXJkLWNvbnRlbnQtbWQgaDQsLmNhcmQtY29udGVudC1tZCBoNSwuY2FyZC1jb250ZW50LW1kIGg2e21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDoycHg7bWFyZ2luLWJvdHRvbToycHg7Zm9udC1zaXplOjAuODc1cmVtO2ZvbnQtd2VpZ2h0Om5vcm1hbH0uY2FyZC1jb250ZW50LW1kIHB7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbToycHg7Zm9udC1zaXplOjAuODc1cmVtO2ZvbnQtd2VpZ2h0Om5vcm1hbDtsaW5lLWhlaWdodDoxLjV9aW9uLWNhcmQtaGVhZGVyKy5jYXJkLWNvbnRlbnQtbWR7cGFkZGluZy10b3A6MH1cIjtcbmNvbnN0IENhcmRDb250ZW50ID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgcmV0dXJuIGgoSG9zdCwge1xuICAgICAga2V5OiAnZDk4ZTRkMWZjNmFkMzIzNzU0OWY5YmMxN2U0YzY3ZWM1MDU5YjFiMycsXG4gICAgICBjbGFzczoge1xuICAgICAgICBbbW9kZV06IHRydWUsXG4gICAgICAgIC8vIFVzZWQgaW50ZXJuYWxseSBmb3Igc3R5bGluZ1xuICAgICAgICBbYGNhcmQtY29udGVudC0ke21vZGV9YF06IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcbkNhcmRDb250ZW50LnN0eWxlID0ge1xuICBpb3M6IGNhcmRDb250ZW50SW9zQ3NzLFxuICBtZDogY2FyZENvbnRlbnRNZENzc1xufTtcbmNvbnN0IGNhcmRIZWFkZXJJb3NDc3MgPSBcIjpob3N0ey0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDstLWNvbG9yOmluaGVyaXQ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTtjb2xvcjp2YXIoLS1jb2xvcil9Omhvc3QoLmlvbi1jb2xvcil7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItYmFzZSk7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KX06aG9zdHstd2Via2l0LXBhZGRpbmctc3RhcnQ6MjBweDtwYWRkaW5nLWlubGluZS1zdGFydDoyMHB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MjBweDtwYWRkaW5nLWlubGluZS1lbmQ6MjBweDtwYWRkaW5nLXRvcDoyMHB4O3BhZGRpbmctYm90dG9tOjE2cHg7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbi1yZXZlcnNlO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbi1yZXZlcnNlfUBzdXBwb3J0cyAoKC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDApKSBvciAoYmFja2Ryb3AtZmlsdGVyOiBibHVyKDApKSl7Omhvc3QoLmNhcmQtaGVhZGVyLXRyYW5zbHVjZW50KXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEodmFyKC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiLCAyNTUsIDI1NSwgMjU1KSwgMC45KTstd2Via2l0LWJhY2tkcm9wLWZpbHRlcjpzYXR1cmF0ZSgxODAlKSBibHVyKDMwcHgpO2JhY2tkcm9wLWZpbHRlcjpzYXR1cmF0ZSgxODAlKSBibHVyKDMwcHgpfX1cIjtcbmNvbnN0IGNhcmRIZWFkZXJNZENzcyA9IFwiOmhvc3R7LS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50Oy0tY29sb3I6aW5oZXJpdDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjpyZWxhdGl2ZTstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2NvbG9yOnZhcigtLWNvbG9yKX06aG9zdCguaW9uLWNvbG9yKXtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1iYXNlKTtjb2xvcjp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpfTpob3N0ey13ZWJraXQtcGFkZGluZy1zdGFydDoxNnB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjE2cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDoxNnB4O3BhZGRpbmctaW5saW5lLWVuZDoxNnB4O3BhZGRpbmctdG9wOjE2cHg7cGFkZGluZy1ib3R0b206MTZweH06OnNsb3R0ZWQoaW9uLWNhcmQtdGl0bGU6bm90KDpmaXJzdC1jaGlsZCkpLDo6c2xvdHRlZChpb24tY2FyZC1zdWJ0aXRsZTpub3QoOmZpcnN0LWNoaWxkKSl7bWFyZ2luLXRvcDo4cHh9XCI7XG5jb25zdCBDYXJkSGVhZGVyID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBjYXJkIGhlYWRlciB3aWxsIGJlIHRyYW5zbHVjZW50LlxuICAgICAqIE9ubHkgYXBwbGllcyB3aGVuIHRoZSBtb2RlIGlzIGBcImlvc1wiYCBhbmQgdGhlIGRldmljZSBzdXBwb3J0c1xuICAgICAqIFtgYmFja2Ryb3AtZmlsdGVyYF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2JhY2tkcm9wLWZpbHRlciNCcm93c2VyX2NvbXBhdGliaWxpdHkpLlxuICAgICAqL1xuICAgIHRoaXMudHJhbnNsdWNlbnQgPSBmYWxzZTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgcmV0dXJuIGgoSG9zdCwge1xuICAgICAga2V5OiAnNjQyNDZiODE5MzEyMDNhNjRkNTUzYzc4OGNkNzM2ZjQxZTIzZjM3YicsXG4gICAgICBjbGFzczogY3JlYXRlQ29sb3JDbGFzc2VzKHRoaXMuY29sb3IsIHtcbiAgICAgICAgJ2NhcmQtaGVhZGVyLXRyYW5zbHVjZW50JzogdGhpcy50cmFuc2x1Y2VudCxcbiAgICAgICAgJ2lvbi1pbmhlcml0LWNvbG9yJzogdHJ1ZSxcbiAgICAgICAgW21vZGVdOiB0cnVlXG4gICAgICB9KVxuICAgIH0sIGgoXCJzbG90XCIsIHtcbiAgICAgIGtleTogJ2FmMmRhMmRmZTI2Njg4OWFmZWI1N2ZhYzI1YzZhNzMwNTU4ZGJiYTQnXG4gICAgfSkpO1xuICB9XG59O1xuQ2FyZEhlYWRlci5zdHlsZSA9IHtcbiAgaW9zOiBjYXJkSGVhZGVySW9zQ3NzLFxuICBtZDogY2FyZEhlYWRlck1kQ3NzXG59O1xuY29uc3QgY2FyZFN1YnRpdGxlSW9zQ3NzID0gXCI6aG9zdHtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO2NvbG9yOnZhcigtLWNvbG9yKX06aG9zdCguaW9uLWNvbG9yKXtjb2xvcjp2YXIoLS1pb24tY29sb3ItYmFzZSl9Omhvc3R7LS1jb2xvcjp2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsIHZhcigtLWlvbi10ZXh0LWNvbG9yLXN0ZXAtNDAwLCAjNjY2NjY2KSk7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTo0cHg7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDtmb250LXNpemU6MC43NXJlbTtmb250LXdlaWdodDo3MDA7bGV0dGVyLXNwYWNpbmc6MC40cHg7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlfVwiO1xuY29uc3QgY2FyZFN1YnRpdGxlTWRDc3MgPSBcIjpob3N0e2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7Y29sb3I6dmFyKC0tY29sb3IpfTpob3N0KC5pb24tY29sb3Ipe2NvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKX06aG9zdHstLWNvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTU1MCwgdmFyKC0taW9uLXRleHQtY29sb3Itc3RlcC00NTAsICM3MzczNzMpKTttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDtmb250LXNpemU6MC44NzVyZW07Zm9udC13ZWlnaHQ6NTAwfVwiO1xuY29uc3QgQ2FyZFN1YnRpdGxlID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgcmV0dXJuIGgoSG9zdCwge1xuICAgICAga2V5OiAnODRkODIwYTE5ZDkwNzRmOWM4YmM2MWNjYmExY2E0MDA2MmE2MGI3MycsXG4gICAgICByb2xlOiBcImhlYWRpbmdcIixcbiAgICAgIFwiYXJpYS1sZXZlbFwiOiBcIjNcIixcbiAgICAgIGNsYXNzOiBjcmVhdGVDb2xvckNsYXNzZXModGhpcy5jb2xvciwge1xuICAgICAgICAnaW9uLWluaGVyaXQtY29sb3InOiB0cnVlLFxuICAgICAgICBbbW9kZV06IHRydWVcbiAgICAgIH0pXG4gICAgfSwgaChcInNsb3RcIiwge1xuICAgICAga2V5OiAnZTRkMDdkMzk1YTFmNDQ2OWE5MDg0NzYzNjA4MzEwMWIzMmI3NzZhMSdcbiAgICB9KSk7XG4gIH1cbn07XG5DYXJkU3VidGl0bGUuc3R5bGUgPSB7XG4gIGlvczogY2FyZFN1YnRpdGxlSW9zQ3NzLFxuICBtZDogY2FyZFN1YnRpdGxlTWRDc3Ncbn07XG5jb25zdCBjYXJkVGl0bGVJb3NDc3MgPSBcIjpob3N0e2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7Y29sb3I6dmFyKC0tY29sb3IpfTpob3N0KC5pb24tY29sb3Ipe2NvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKX06aG9zdHstLWNvbG9yOnZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwKTttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDtmb250LXNpemU6MS43NXJlbTtmb250LXdlaWdodDo3MDA7bGluZS1oZWlnaHQ6MS4yfVwiO1xuY29uc3QgY2FyZFRpdGxlTWRDc3MgPSBcIjpob3N0e2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7Y29sb3I6dmFyKC0tY29sb3IpfTpob3N0KC5pb24tY29sb3Ipe2NvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKX06aG9zdHstLWNvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTg1MCwgdmFyKC0taW9uLXRleHQtY29sb3Itc3RlcC0xNTAsICMyNjI2MjYpKTttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDtmb250LXNpemU6MS4yNXJlbTtmb250LXdlaWdodDo1MDA7bGluZS1oZWlnaHQ6MS4yfVwiO1xuY29uc3QgQ2FyZFRpdGxlID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgcmV0dXJuIGgoSG9zdCwge1xuICAgICAga2V5OiAnZmNhMDAxYTg2Mzk2ZTgzNzE4ZDUyMTFjZDcxOTEyZmRmNDBkZWEyZicsXG4gICAgICByb2xlOiBcImhlYWRpbmdcIixcbiAgICAgIFwiYXJpYS1sZXZlbFwiOiBcIjJcIixcbiAgICAgIGNsYXNzOiBjcmVhdGVDb2xvckNsYXNzZXModGhpcy5jb2xvciwge1xuICAgICAgICAnaW9uLWluaGVyaXQtY29sb3InOiB0cnVlLFxuICAgICAgICBbbW9kZV06IHRydWVcbiAgICAgIH0pXG4gICAgfSwgaChcInNsb3RcIiwge1xuICAgICAga2V5OiAnMmJhNDE2YWVkNDg4YjJmZjQ2MmZhNzVmYjNiNzAzNzNhNmRkN2RhNidcbiAgICB9KSk7XG4gIH1cbn07XG5DYXJkVGl0bGUuc3R5bGUgPSB7XG4gIGlvczogY2FyZFRpdGxlSW9zQ3NzLFxuICBtZDogY2FyZFRpdGxlTWRDc3Ncbn07XG5leHBvcnQgeyBDYXJkIGFzIGlvbl9jYXJkLCBDYXJkQ29udGVudCBhcyBpb25fY2FyZF9jb250ZW50LCBDYXJkSGVhZGVyIGFzIGlvbl9jYXJkX2hlYWRlciwgQ2FyZFN1YnRpdGxlIGFzIGlvbl9jYXJkX3N1YnRpdGxlLCBDYXJkVGl0bGUgYXMgaW9uX2NhcmRfdGl0bGUgfTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQSxJQUFNLGFBQWE7QUFDbkIsSUFBTSxZQUFZO0FBQ2xCLElBQU0sT0FBTyxNQUFNO0FBQUEsRUFDakIsWUFBWSxTQUFTO0FBQ25CLHFCQUFpQixNQUFNLE9BQU87QUFDOUIsU0FBSywwQkFBMEIsQ0FBQztBQUloQyxTQUFLLFNBQVM7QUFJZCxTQUFLLE9BQU87QUFJWixTQUFLLFdBQVc7QUFLaEIsU0FBSyxrQkFBa0I7QUFBQSxFQUN6QjtBQUFBLEVBQ0Esb0JBQW9CO0FBQ2xCLFNBQUssMEJBQTBCLGtCQUFrQixLQUFLLElBQUksQ0FBQyxZQUFZLENBQUM7QUFBQSxFQUMxRTtBQUFBLEVBQ0EsY0FBYztBQUNaLFdBQU8sS0FBSyxTQUFTLFVBQWEsS0FBSztBQUFBLEVBQ3pDO0FBQUEsRUFDQSxXQUFXLE1BQU07QUFDZixVQUFNLFlBQVksS0FBSyxZQUFZO0FBQ25DLFFBQUksQ0FBQyxXQUFXO0FBQ2QsYUFBTyxDQUFDLEVBQUUsUUFBUSxJ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
