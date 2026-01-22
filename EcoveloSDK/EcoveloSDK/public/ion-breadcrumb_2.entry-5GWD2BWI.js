import {
  chevronForwardOutline,
  ellipsisHorizontal
} from "./chunk-D4BGZ3LF.js";
import {
  createColorClasses,
  hostContext,
  openURL
} from "./chunk-5VP4V3BN.js";
import {
  getIonMode
} from "./chunk-TXLH22R2.js";
import {
  inheritAriaAttributes
} from "./chunk-RZR7LWTQ.js";
import {
  Host,
  createEvent,
  getElement,
  h,
  registerInstance
} from "./chunk-BFPTXCSH.js";
import "./chunk-UESUV5PM.js";

// node_modules/@ionic/core/dist/esm/ion-breadcrumb_2.entry.js
var breadcrumbIosCss = ":host{display:-ms-flexbox;display:flex;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-align:center;align-items:center;color:var(--color);font-size:1rem;font-weight:400;line-height:1.5}.breadcrumb-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;outline:none;background:inherit}:host(.breadcrumb-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.breadcrumb-active){color:var(--color-active)}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .breadcrumb-native{background:var(--background-focused)}@media (any-hover: hover){:host(.ion-activatable:hover){color:var(--color-hover)}:host(.ion-activatable.in-breadcrumbs-color:hover),:host(.ion-activatable.ion-color:hover){color:var(--ion-color-shade)}}.breadcrumb-separator{display:-ms-inline-flexbox;display:inline-flex}:host(.breadcrumb-collapsed) .breadcrumb-native{display:none}:host(.in-breadcrumbs-color),:host(.in-breadcrumbs-color.breadcrumb-active){color:var(--ion-color-base)}:host(.in-breadcrumbs-color) .breadcrumb-separator{color:var(--ion-color-base)}:host(.ion-color){color:var(--ion-color-base)}:host(.in-toolbar-color),:host(.in-toolbar-color) .breadcrumb-separator{color:rgba(var(--ion-color-contrast-rgb), 0.8)}:host(.in-toolbar-color.breadcrumb-active){color:var(--ion-color-contrast)}.breadcrumbs-collapsed-indicator{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:14px;margin-inline-end:14px;margin-top:0;margin-bottom:0;display:-ms-flexbox;display:flex;-ms-flex:1 1 100%;flex:1 1 100%;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:32px;height:18px;border:0;outline:none;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.breadcrumbs-collapsed-indicator ion-icon{margin-top:1px;font-size:1.375rem}:host{--color:var(--ion-color-step-850, var(--ion-text-color-step-150, #2d4665));--color-active:var(--ion-text-color, #03060b);--color-hover:var(--ion-text-color, #03060b);--color-focused:var(--color-active);--background-focused:var(--ion-color-step-50, var(--ion-background-color-step-50, rgba(233, 237, 243, 0.7)));font-size:clamp(16px, 1rem, 22px)}:host(.breadcrumb-active){font-weight:600}.breadcrumb-native{border-radius:4px;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:5px;padding-bottom:5px;border:1px solid transparent}:host(.ion-focused) .breadcrumb-native{border-radius:8px}:host(.in-breadcrumbs-color.ion-focused) .breadcrumb-native,:host(.ion-color.ion-focused) .breadcrumb-native{background:rgba(var(--ion-color-base-rgb), 0.1);color:var(--ion-color-base)}:host(.ion-focused) ::slotted(ion-icon),:host(.in-breadcrumbs-color.ion-focused) ::slotted(ion-icon),:host(.ion-color.ion-focused) ::slotted(ion-icon){color:var(--ion-color-step-750, var(--ion-text-color-step-250, #445b78))}.breadcrumb-separator{color:var(--ion-color-step-550, var(--ion-text-color-step-450, #73849a))}::slotted(ion-icon){color:var(--ion-color-step-400, var(--ion-text-color-step-600, #92a0b3));font-size:min(1.125rem, 21.6px)}::slotted(ion-icon[slot=start]){-webkit-margin-end:8px;margin-inline-end:8px}::slotted(ion-icon[slot=end]){-webkit-margin-start:8px;margin-inline-start:8px}:host(.breadcrumb-active) ::slotted(ion-icon){color:var(--ion-color-step-850, var(--ion-text-color-step-150, #242d39))}.breadcrumbs-collapsed-indicator{border-radius:4px;background:var(--ion-color-step-100, var(--ion-background-color-step-100, #e9edf3));color:var(--ion-color-step-550, var(--ion-text-color-step-450, #73849a))}.breadcrumbs-collapsed-indicator:hover{opacity:0.45}.breadcrumbs-collapsed-indicator:focus{background:var(--ion-color-step-150, var(--ion-background-color-step-150, #d9e0ea))}.breadcrumbs-collapsed-indicator ion-icon{font-size:min(1.375rem, 22px)}";
var breadcrumbMdCss = ":host{display:-ms-flexbox;display:flex;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-align:center;align-items:center;color:var(--color);font-size:1rem;font-weight:400;line-height:1.5}.breadcrumb-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;outline:none;background:inherit}:host(.breadcrumb-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.breadcrumb-active){color:var(--color-active)}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .breadcrumb-native{background:var(--background-focused)}@media (any-hover: hover){:host(.ion-activatable:hover){color:var(--color-hover)}:host(.ion-activatable.in-breadcrumbs-color:hover),:host(.ion-activatable.ion-color:hover){color:var(--ion-color-shade)}}.breadcrumb-separator{display:-ms-inline-flexbox;display:inline-flex}:host(.breadcrumb-collapsed) .breadcrumb-native{display:none}:host(.in-breadcrumbs-color),:host(.in-breadcrumbs-color.breadcrumb-active){color:var(--ion-color-base)}:host(.in-breadcrumbs-color) .breadcrumb-separator{color:var(--ion-color-base)}:host(.ion-color){color:var(--ion-color-base)}:host(.in-toolbar-color),:host(.in-toolbar-color) .breadcrumb-separator{color:rgba(var(--ion-color-contrast-rgb), 0.8)}:host(.in-toolbar-color.breadcrumb-active){color:var(--ion-color-contrast)}.breadcrumbs-collapsed-indicator{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:14px;margin-inline-end:14px;margin-top:0;margin-bottom:0;display:-ms-flexbox;display:flex;-ms-flex:1 1 100%;flex:1 1 100%;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:32px;height:18px;border:0;outline:none;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.breadcrumbs-collapsed-indicator ion-icon{margin-top:1px;font-size:1.375rem}:host{--color:var(--ion-color-step-600, var(--ion-text-color-step-400, #677483));--color-active:var(--ion-text-color, #03060b);--color-hover:var(--ion-text-color, #03060b);--color-focused:var(--ion-color-step-800, var(--ion-text-color-step-200, #35404e));--background-focused:var(--ion-color-step-50, var(--ion-background-color-step-50, #fff))}:host(.breadcrumb-active){font-weight:500}.breadcrumb-native{-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:6px;padding-bottom:6px}.breadcrumb-separator{-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px;margin-top:-1px}:host(.ion-focused) .breadcrumb-native{border-radius:4px;-webkit-box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2), 0px 2px 8px rgba(0, 0, 0, 0.12);box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2), 0px 2px 8px rgba(0, 0, 0, 0.12)}.breadcrumb-separator{color:var(--ion-color-step-550, var(--ion-text-color-step-450, #73849a))}::slotted(ion-icon){color:var(--ion-color-step-550, var(--ion-text-color-step-450, #7d8894));font-size:1.125rem}::slotted(ion-icon[slot=start]){-webkit-margin-end:8px;margin-inline-end:8px}::slotted(ion-icon[slot=end]){-webkit-margin-start:8px;margin-inline-start:8px}:host(.breadcrumb-active) ::slotted(ion-icon){color:var(--ion-color-step-850, var(--ion-text-color-step-150, #222d3a))}.breadcrumbs-collapsed-indicator{border-radius:2px;background:var(--ion-color-step-100, var(--ion-background-color-step-100, #eef1f3));color:var(--ion-color-step-550, var(--ion-text-color-step-450, #73849a))}.breadcrumbs-collapsed-indicator:hover{opacity:0.7}.breadcrumbs-collapsed-indicator:focus{background:var(--ion-color-step-150, var(--ion-background-color-step-150, #dfe5e8))}";
var Breadcrumb = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionFocus = createEvent(this, "ionFocus", 7);
    this.ionBlur = createEvent(this, "ionBlur", 7);
    this.collapsedClick = createEvent(this, "collapsedClick", 7);
    this.inheritedAttributes = {};
    this.collapsed = false;
    this.active = false;
    this.disabled = false;
    this.routerDirection = "forward";
    this.onFocus = () => {
      this.ionFocus.emit();
    };
    this.onBlur = () => {
      this.ionBlur.emit();
    };
    this.collapsedIndicatorClick = () => {
      this.collapsedClick.emit({
        ionShadowTarget: this.collapsedRef
      });
    };
  }
  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }
  isClickable() {
    return this.href !== void 0;
  }
  render() {
    const {
      color,
      active,
      collapsed,
      disabled,
      download,
      el,
      inheritedAttributes,
      last,
      routerAnimation,
      routerDirection,
      separator,
      showCollapsedIndicator,
      target
    } = this;
    const clickable = this.isClickable();
    const TagType = this.href === void 0 ? "span" : "a";
    const href = disabled ? void 0 : this.href;
    const mode = getIonMode(this);
    const attrs = TagType === "span" ? {} : {
      download,
      href,
      target
    };
    const showSeparator = last ? false : collapsed ? showCollapsedIndicator && !last ? true : false : separator;
    return h(Host, {
      key: "32ca61c83721dff52b5e97171ed449dce3584a55",
      onClick: (ev) => openURL(href, ev, routerDirection, routerAnimation),
      "aria-disabled": disabled ? "true" : null,
      class: createColorClasses(color, {
        [mode]: true,
        "breadcrumb-active": active,
        "breadcrumb-collapsed": collapsed,
        "breadcrumb-disabled": disabled,
        "in-breadcrumbs-color": hostContext("ion-breadcrumbs[color]", el),
        "in-toolbar": hostContext("ion-toolbar", this.el),
        "in-toolbar-color": hostContext("ion-toolbar[color]", this.el),
        "ion-activatable": clickable,
        "ion-focusable": clickable
      })
    }, h(TagType, Object.assign({
      key: "479feb845f4a6d8009d5422b33eb423730b9722b"
    }, attrs, {
      class: "breadcrumb-native",
      part: "native",
      disabled,
      onFocus: this.onFocus,
      onBlur: this.onBlur
    }, inheritedAttributes), h("slot", {
      key: "3c5dcaeb0d258235d1b7707868026ff1d1404099",
      name: "start"
    }), h("slot", {
      key: "f1cfb934443cd97dc220882c5e3596ea879d66cf"
    }), h("slot", {
      key: "539710121b5b1f3ee8d4c24a9651b67c2ae08add",
      name: "end"
    })), showCollapsedIndicator && h("button", {
      key: "ed53a95ccd89022c8b7bee0658a221ec62a5c73b",
      part: "collapsed-indicator",
      "aria-label": "Show more breadcrumbs",
      onClick: () => this.collapsedIndicatorClick(),
      ref: (collapsedEl) => this.collapsedRef = collapsedEl,
      class: {
        "breadcrumbs-collapsed-indicator": true
      }
    }, h("ion-icon", {
      key: "a849e1142a86f06f207cf11662fa2a560ab7fc6a",
      "aria-hidden": "true",
      icon: ellipsisHorizontal,
      lazy: false
    })), showSeparator && /**
     * Separators should not be announced by narrators.
     * We add aria-hidden on the span so that this applies
     * to any custom separators too.
     */
    h("span", {
      key: "fc3c741cb01fafef8b26046c7ee5b190efc69a7c",
      class: "breadcrumb-separator",
      part: "separator",
      "aria-hidden": "true"
    }, h("slot", {
      key: "4871932ae1dae520767e0713e7cee2d11b0bba6d",
      name: "separator"
    }, mode === "ios" ? h("ion-icon", {
      icon: chevronForwardOutline,
      lazy: false,
      "flip-rtl": true
    }) : h("span", null, "/"))));
  }
  get el() {
    return getElement(this);
  }
};
Breadcrumb.style = {
  ios: breadcrumbIosCss,
  md: breadcrumbMdCss
};
var breadcrumbsIosCss = ":host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center}:host(.in-toolbar-color),:host(.in-toolbar-color) .breadcrumbs-collapsed-indicator ion-icon{color:var(--ion-color-contrast)}:host(.in-toolbar-color) .breadcrumbs-collapsed-indicator{background:rgba(var(--ion-color-contrast-rgb), 0.11)}:host(.in-toolbar){-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px;padding-top:0;padding-bottom:0;-ms-flex-pack:center;justify-content:center}";
var breadcrumbsMdCss = ":host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center}:host(.in-toolbar-color),:host(.in-toolbar-color) .breadcrumbs-collapsed-indicator ion-icon{color:var(--ion-color-contrast)}:host(.in-toolbar-color) .breadcrumbs-collapsed-indicator{background:rgba(var(--ion-color-contrast-rgb), 0.11)}:host(.in-toolbar){-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:0;padding-bottom:0}";
var Breadcrumbs = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionCollapsedClick = createEvent(this, "ionCollapsedClick", 7);
    this.itemsBeforeCollapse = 1;
    this.itemsAfterCollapse = 1;
    this.breadcrumbsInit = () => {
      this.setBreadcrumbSeparator();
      this.setMaxItems();
    };
    this.resetActiveBreadcrumb = () => {
      const breadcrumbs = this.getBreadcrumbs();
      const activeBreadcrumb = breadcrumbs.find((breadcrumb) => breadcrumb.active);
      if (activeBreadcrumb && this.activeChanged) {
        activeBreadcrumb.active = false;
      }
    };
    this.setMaxItems = () => {
      const {
        itemsAfterCollapse,
        itemsBeforeCollapse,
        maxItems
      } = this;
      const breadcrumbs = this.getBreadcrumbs();
      for (const breadcrumb of breadcrumbs) {
        breadcrumb.showCollapsedIndicator = false;
        breadcrumb.collapsed = false;
      }
      const shouldCollapse = maxItems !== void 0 && breadcrumbs.length > maxItems && itemsBeforeCollapse + itemsAfterCollapse <= maxItems;
      if (shouldCollapse) {
        breadcrumbs.forEach((breadcrumb, index) => {
          if (index === itemsBeforeCollapse) {
            breadcrumb.showCollapsedIndicator = true;
          }
          if (index >= itemsBeforeCollapse && index < breadcrumbs.length - itemsAfterCollapse) {
            breadcrumb.collapsed = true;
          }
        });
      }
    };
    this.setBreadcrumbSeparator = () => {
      const {
        itemsAfterCollapse,
        itemsBeforeCollapse,
        maxItems
      } = this;
      const breadcrumbs = this.getBreadcrumbs();
      const active = breadcrumbs.find((breadcrumb) => breadcrumb.active);
      for (const breadcrumb of breadcrumbs) {
        const last = maxItems !== void 0 && itemsAfterCollapse === 0 ? breadcrumb === breadcrumbs[itemsBeforeCollapse] : breadcrumb === breadcrumbs[breadcrumbs.length - 1];
        breadcrumb.last = last;
        const separator = breadcrumb.separator !== void 0 ? breadcrumb.separator : last ? void 0 : true;
        breadcrumb.separator = separator;
        if (!active && last) {
          breadcrumb.active = true;
          this.activeChanged = true;
        }
      }
    };
    this.getBreadcrumbs = () => {
      return Array.from(this.el.querySelectorAll("ion-breadcrumb"));
    };
    this.slotChanged = () => {
      this.resetActiveBreadcrumb();
      this.breadcrumbsInit();
    };
  }
  onCollapsedClick(ev) {
    const breadcrumbs = this.getBreadcrumbs();
    const collapsedBreadcrumbs = breadcrumbs.filter((breadcrumb) => breadcrumb.collapsed);
    this.ionCollapsedClick.emit(Object.assign(Object.assign({}, ev.detail), {
      collapsedBreadcrumbs
    }));
  }
  maxItemsChanged() {
    this.resetActiveBreadcrumb();
    this.breadcrumbsInit();
  }
  componentWillLoad() {
    this.breadcrumbsInit();
  }
  render() {
    const {
      color,
      collapsed
    } = this;
    const mode = getIonMode(this);
    return h(Host, {
      key: "fe64e9cdf597ede2db140bf5fa05a0359d82db57",
      class: createColorClasses(color, {
        [mode]: true,
        "in-toolbar": hostContext("ion-toolbar", this.el),
        "in-toolbar-color": hostContext("ion-toolbar[color]", this.el),
        "breadcrumbs-collapsed": collapsed
      })
    }, h("slot", {
      key: "a2c99b579e339055c50a613d5c6b61032f5ddffe",
      onSlotchange: this.slotChanged
    }));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "maxItems": ["maxItemsChanged"],
      "itemsBeforeCollapse": ["maxItemsChanged"],
      "itemsAfterCollapse": ["maxItemsChanged"]
    };
  }
};
Breadcrumbs.style = {
  ios: breadcrumbsIosCss,
  md: breadcrumbsMdCss
};
export {
  Breadcrumb as ion_breadcrumb,
  Breadcrumbs as ion_breadcrumbs
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-breadcrumb_2.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tYnJlYWRjcnVtYl8yLmVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgY3JlYXRlRXZlbnQsIGgsIGQgYXMgSG9zdCwgZyBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9pbmRleC00RHhZNl9nRy5qcyc7XG5pbXBvcnQgeyBpIGFzIGluaGVyaXRBcmlhQXR0cmlidXRlcyB9IGZyb20gJy4vaGVscGVycy04S1NRUUdReS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZUNvbG9yQ2xhc3NlcywgbyBhcyBvcGVuVVJMLCBoIGFzIGhvc3RDb250ZXh0IH0gZnJvbSAnLi90aGVtZS1EaVZKeXFsWC5qcyc7XG5pbXBvcnQgeyBtIGFzIGNoZXZyb25Gb3J3YXJkT3V0bGluZSwgbiBhcyBlbGxpcHNpc0hvcml6b250YWwgfSBmcm9tICcuL2luZGV4LURWM3NKSlc4LmpzJztcbmltcG9ydCB7IGIgYXMgZ2V0SW9uTW9kZSB9IGZyb20gJy4vaW9uaWMtZ2xvYmFsLUNUU3l1ZmhGLmpzJztcbmNvbnN0IGJyZWFkY3J1bWJJb3NDc3MgPSBcIjpob3N0e2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4OjAgMCBhdXRvO2ZsZXg6MCAwIGF1dG87LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtjb2xvcjp2YXIoLS1jb2xvcik7Zm9udC1zaXplOjFyZW07Zm9udC13ZWlnaHQ6NDAwO2xpbmUtaGVpZ2h0OjEuNX0uYnJlYWRjcnVtYi1uYXRpdmV7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6aW5oZXJpdDtmb250LXN0eWxlOmluaGVyaXQ7Zm9udC13ZWlnaHQ6aW5oZXJpdDtsZXR0ZXItc3BhY2luZzppbmhlcml0O3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3RleHQtaW5kZW50OmluaGVyaXQ7dGV4dC1vdmVyZmxvdzppbmhlcml0O3RleHQtdHJhbnNmb3JtOmluaGVyaXQ7dGV4dC1hbGlnbjppbmhlcml0O3doaXRlLXNwYWNlOmluaGVyaXQ7Y29sb3I6aW5oZXJpdDtwYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjA7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowO21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO3dpZHRoOjEwMCU7b3V0bGluZTpub25lO2JhY2tncm91bmQ6aW5oZXJpdH06aG9zdCguYnJlYWRjcnVtYi1kaXNhYmxlZCl7Y3Vyc29yOmRlZmF1bHQ7b3BhY2l0eTowLjU7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdCguYnJlYWRjcnVtYi1hY3RpdmUpe2NvbG9yOnZhcigtLWNvbG9yLWFjdGl2ZSl9Omhvc3QoLmlvbi1mb2N1c2VkKXtjb2xvcjp2YXIoLS1jb2xvci1mb2N1c2VkKX06aG9zdCguaW9uLWZvY3VzZWQpIC5icmVhZGNydW1iLW5hdGl2ZXtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQtZm9jdXNlZCl9QG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKXs6aG9zdCguaW9uLWFjdGl2YXRhYmxlOmhvdmVyKXtjb2xvcjp2YXIoLS1jb2xvci1ob3Zlcil9Omhvc3QoLmlvbi1hY3RpdmF0YWJsZS5pbi1icmVhZGNydW1icy1jb2xvcjpob3ZlciksOmhvc3QoLmlvbi1hY3RpdmF0YWJsZS5pb24tY29sb3I6aG92ZXIpe2NvbG9yOnZhcigtLWlvbi1jb2xvci1zaGFkZSl9fS5icmVhZGNydW1iLXNlcGFyYXRvcntkaXNwbGF5Oi1tcy1pbmxpbmUtZmxleGJveDtkaXNwbGF5OmlubGluZS1mbGV4fTpob3N0KC5icmVhZGNydW1iLWNvbGxhcHNlZCkgLmJyZWFkY3J1bWItbmF0aXZle2Rpc3BsYXk6bm9uZX06aG9zdCguaW4tYnJlYWRjcnVtYnMtY29sb3IpLDpob3N0KC5pbi1icmVhZGNydW1icy1jb2xvci5icmVhZGNydW1iLWFjdGl2ZSl7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWJhc2UpfTpob3N0KC5pbi1icmVhZGNydW1icy1jb2xvcikgLmJyZWFkY3J1bWItc2VwYXJhdG9ye2NvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKX06aG9zdCguaW9uLWNvbG9yKXtjb2xvcjp2YXIoLS1pb24tY29sb3ItYmFzZSl9Omhvc3QoLmluLXRvb2xiYXItY29sb3IpLDpob3N0KC5pbi10b29sYmFyLWNvbG9yKSAuYnJlYWRjcnVtYi1zZXBhcmF0b3J7Y29sb3I6cmdiYSh2YXIoLS1pb24tY29sb3ItY29udHJhc3QtcmdiKSwgMC44KX06aG9zdCguaW4tdG9vbGJhci1jb2xvci5icmVhZGNydW1iLWFjdGl2ZSl7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KX0uYnJlYWRjcnVtYnMtY29sbGFwc2VkLWluZGljYXRvcntwYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjA7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowOy13ZWJraXQtbWFyZ2luLXN0YXJ0OjE0cHg7bWFyZ2luLWlubGluZS1zdGFydDoxNHB4Oy13ZWJraXQtbWFyZ2luLWVuZDoxNHB4O21hcmdpbi1pbmxpbmUtZW5kOjE0cHg7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleDoxIDEgMTAwJTtmbGV4OjEgMSAxMDAlOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDozMnB4O2hlaWdodDoxOHB4O2JvcmRlcjowO291dGxpbmU6bm9uZTtjdXJzb3I6cG9pbnRlcjstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmV9LmJyZWFkY3J1bWJzLWNvbGxhcHNlZC1pbmRpY2F0b3IgaW9uLWljb257bWFyZ2luLXRvcDoxcHg7Zm9udC1zaXplOjEuMzc1cmVtfTpob3N0ey0tY29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtODUwLCB2YXIoLS1pb24tdGV4dC1jb2xvci1zdGVwLTE1MCwgIzJkNDY2NSkpOy0tY29sb3ItYWN0aXZlOnZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDMwNjBiKTstLWNvbG9yLWhvdmVyOnZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDMwNjBiKTstLWNvbG9yLWZvY3VzZWQ6dmFyKC0tY29sb3ItYWN0aXZlKTstLWJhY2tncm91bmQtZm9jdXNlZDp2YXIoLS1pb24tY29sb3Itc3RlcC01MCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3Itc3RlcC01MCwgcmdiYSgyMzMsIDIzNywgMjQzLCAwLjcpKSk7Zm9udC1zaXplOmNsYW1wKDE2cHgsIDFyZW0sIDIycHgpfTpob3N0KC5icmVhZGNydW1iLWFjdGl2ZSl7Zm9udC13ZWlnaHQ6NjAwfS5icmVhZGNydW1iLW5hdGl2ZXtib3JkZXItcmFkaXVzOjRweDstd2Via2l0LXBhZGRpbmctc3RhcnQ6MTJweDtwYWRkaW5nLWlubGluZS1zdGFydDoxMnB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MTJweDtwYWRkaW5nLWlubGluZS1lbmQ6MTJweDtwYWRkaW5nLXRvcDo1cHg7cGFkZGluZy1ib3R0b206NXB4O2JvcmRlcjoxcHggc29saWQgdHJhbnNwYXJlbnR9Omhvc3QoLmlvbi1mb2N1c2VkKSAuYnJlYWRjcnVtYi1uYXRpdmV7Ym9yZGVyLXJhZGl1czo4cHh9Omhvc3QoLmluLWJyZWFkY3J1bWJzLWNvbG9yLmlvbi1mb2N1c2VkKSAuYnJlYWRjcnVtYi1uYXRpdmUsOmhvc3QoLmlvbi1jb2xvci5pb24tZm9jdXNlZCkgLmJyZWFkY3J1bWItbmF0aXZle2JhY2tncm91bmQ6cmdiYSh2YXIoLS1pb24tY29sb3ItYmFzZS1yZ2IpLCAwLjEpO2NvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKX06aG9zdCguaW9uLWZvY3VzZWQpIDo6c2xvdHRlZChpb24taWNvbiksOmhvc3QoLmluLWJyZWFkY3J1bWJzLWNvbG9yLmlvbi1mb2N1c2VkKSA6OnNsb3R0ZWQoaW9uLWljb24pLDpob3N0KC5pb24tY29sb3IuaW9uLWZvY3VzZWQpIDo6c2xvdHRlZChpb24taWNvbil7Y29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtNzUwLCB2YXIoLS1pb24tdGV4dC1jb2xvci1zdGVwLTI1MCwgIzQ0NWI3OCkpfS5icmVhZGNydW1iLXNlcGFyYXRvcntjb2xvcjp2YXIoLS1pb24tY29sb3Itc3RlcC01NTAsIHZhcigtLWlvbi10ZXh0LWNvbG9yLXN0ZXAtNDUwLCAjNzM4NDlhKSl9OjpzbG90dGVkKGlvbi1pY29uKXtjb2xvcjp2YXIoLS1pb24tY29sb3Itc3RlcC00MDAsIHZhcigtLWlvbi10ZXh0LWNvbG9yLXN0ZXAtNjAwLCAjOTJhMGIzKSk7Zm9udC1zaXplOm1pbigxLjEyNXJlbSwgMjEuNnB4KX06OnNsb3R0ZWQoaW9uLWljb25bc2xvdD1zdGFydF0pey13ZWJraXQtbWFyZ2luLWVuZDo4cHg7bWFyZ2luLWlubGluZS1lbmQ6OHB4fTo6c2xvdHRlZChpb24taWNvbltzbG90PWVuZF0pey13ZWJraXQtbWFyZ2luLXN0YXJ0OjhweDttYXJnaW4taW5saW5lLXN0YXJ0OjhweH06aG9zdCguYnJlYWRjcnVtYi1hY3RpdmUpIDo6c2xvdHRlZChpb24taWNvbil7Y29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtODUwLCB2YXIoLS1pb24tdGV4dC1jb2xvci1zdGVwLTE1MCwgIzI0MmQzOSkpfS5icmVhZGNydW1icy1jb2xsYXBzZWQtaW5kaWNhdG9ye2JvcmRlci1yYWRpdXM6NHB4O2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXN0ZXAtMTAwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTEwMCwgI2U5ZWRmMykpO2NvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTU1MCwgdmFyKC0taW9uLXRleHQtY29sb3Itc3RlcC00NTAsICM3Mzg0OWEpKX0uYnJlYWRjcnVtYnMtY29sbGFwc2VkLWluZGljYXRvcjpob3ZlcntvcGFjaXR5OjAuNDV9LmJyZWFkY3J1bWJzLWNvbGxhcHNlZC1pbmRpY2F0b3I6Zm9jdXN7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXN0ZXAtMTUwLCAjZDllMGVhKSl9LmJyZWFkY3J1bWJzLWNvbGxhcHNlZC1pbmRpY2F0b3IgaW9uLWljb257Zm9udC1zaXplOm1pbigxLjM3NXJlbSwgMjJweCl9XCI7XG5jb25zdCBicmVhZGNydW1iTWRDc3MgPSBcIjpob3N0e2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4OjAgMCBhdXRvO2ZsZXg6MCAwIGF1dG87LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtjb2xvcjp2YXIoLS1jb2xvcik7Zm9udC1zaXplOjFyZW07Zm9udC13ZWlnaHQ6NDAwO2xpbmUtaGVpZ2h0OjEuNX0uYnJlYWRjcnVtYi1uYXRpdmV7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6aW5oZXJpdDtmb250LXN0eWxlOmluaGVyaXQ7Zm9udC13ZWlnaHQ6aW5oZXJpdDtsZXR0ZXItc3BhY2luZzppbmhlcml0O3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3RleHQtaW5kZW50OmluaGVyaXQ7dGV4dC1vdmVyZmxvdzppbmhlcml0O3RleHQtdHJhbnNmb3JtOmluaGVyaXQ7dGV4dC1hbGlnbjppbmhlcml0O3doaXRlLXNwYWNlOmluaGVyaXQ7Y29sb3I6aW5oZXJpdDtwYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjA7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowO21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO3dpZHRoOjEwMCU7b3V0bGluZTpub25lO2JhY2tncm91bmQ6aW5oZXJpdH06aG9zdCguYnJlYWRjcnVtYi1kaXNhYmxlZCl7Y3Vyc29yOmRlZmF1bHQ7b3BhY2l0eTowLjU7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdCguYnJlYWRjcnVtYi1hY3RpdmUpe2NvbG9yOnZhcigtLWNvbG9yLWFjdGl2ZSl9Omhvc3QoLmlvbi1mb2N1c2VkKXtjb2xvcjp2YXIoLS1jb2xvci1mb2N1c2VkKX06aG9zdCguaW9uLWZvY3VzZWQpIC5icmVhZGNydW1iLW5hdGl2ZXtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQtZm9jdXNlZCl9QG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKXs6aG9zdCguaW9uLWFjdGl2YXRhYmxlOmhvdmVyKXtjb2xvcjp2YXIoLS1jb2xvci1ob3Zlcil9Omhvc3QoLmlvbi1hY3RpdmF0YWJsZS5pbi1icmVhZGNydW1icy1jb2xvcjpob3ZlciksOmhvc3QoLmlvbi1hY3RpdmF0YWJsZS5pb24tY29sb3I6aG92ZXIpe2NvbG9yOnZhcigtLWlvbi1jb2xvci1zaGFkZSl9fS5icmVhZGNydW1iLXNlcGFyYXRvcntkaXNwbGF5Oi1tcy1pbmxpbmUtZmxleGJveDtkaXNwbGF5OmlubGluZS1mbGV4fTpob3N0KC5icmVhZGNydW1iLWNvbGxhcHNlZCkgLmJyZWFkY3J1bWItbmF0aXZle2Rpc3BsYXk6bm9uZX06aG9zdCguaW4tYnJlYWRjcnVtYnMtY29sb3IpLDpob3N0KC5pbi1icmVhZGNydW1icy1jb2xvci5icmVhZGNydW1iLWFjdGl2ZSl7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWJhc2UpfTpob3N0KC5pbi1icmVhZGNydW1icy1jb2xvcikgLmJyZWFkY3J1bWItc2VwYXJhdG9ye2NvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKX06aG9zdCguaW9uLWNvbG9yKXtjb2xvcjp2YXIoLS1pb24tY29sb3ItYmFzZSl9Omhvc3QoLmluLXRvb2xiYXItY29sb3IpLDpob3N0KC5pbi10b29sYmFyLWNvbG9yKSAuYnJlYWRjcnVtYi1zZXBhcmF0b3J7Y29sb3I6cmdiYSh2YXIoLS1pb24tY29sb3ItY29udHJhc3QtcmdiKSwgMC44KX06aG9zdCguaW4tdG9vbGJhci1jb2xvci5icmVhZGNydW1iLWFjdGl2ZSl7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KX0uYnJlYWRjcnVtYnMtY29sbGFwc2VkLWluZGljYXRvcntwYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjA7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowOy13ZWJraXQtbWFyZ2luLXN0YXJ0OjE0cHg7bWFyZ2luLWlubGluZS1zdGFydDoxNHB4Oy13ZWJraXQtbWFyZ2luLWVuZDoxNHB4O21hcmdpbi1pbmxpbmUtZW5kOjE0cHg7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleDoxIDEgMTAwJTtmbGV4OjEgMSAxMDAlOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDozMnB4O2hlaWdodDoxOHB4O2JvcmRlcjowO291dGxpbmU6bm9uZTtjdXJzb3I6cG9pbnRlcjstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmV9LmJyZWFkY3J1bWJzLWNvbGxhcHNlZC1pbmRpY2F0b3IgaW9uLWljb257bWFyZ2luLXRvcDoxcHg7Zm9udC1zaXplOjEuMzc1cmVtfTpob3N0ey0tY29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtNjAwLCB2YXIoLS1pb24tdGV4dC1jb2xvci1zdGVwLTQwMCwgIzY3NzQ4MykpOy0tY29sb3ItYWN0aXZlOnZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDMwNjBiKTstLWNvbG9yLWhvdmVyOnZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDMwNjBiKTstLWNvbG9yLWZvY3VzZWQ6dmFyKC0taW9uLWNvbG9yLXN0ZXAtODAwLCB2YXIoLS1pb24tdGV4dC1jb2xvci1zdGVwLTIwMCwgIzM1NDA0ZSkpOy0tYmFja2dyb3VuZC1mb2N1c2VkOnZhcigtLWlvbi1jb2xvci1zdGVwLTUwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTUwLCAjZmZmKSl9Omhvc3QoLmJyZWFkY3J1bWItYWN0aXZlKXtmb250LXdlaWdodDo1MDB9LmJyZWFkY3J1bWItbmF0aXZley13ZWJraXQtcGFkZGluZy1zdGFydDoxMnB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjEycHg7LXdlYmtpdC1wYWRkaW5nLWVuZDoxMnB4O3BhZGRpbmctaW5saW5lLWVuZDoxMnB4O3BhZGRpbmctdG9wOjZweDtwYWRkaW5nLWJvdHRvbTo2cHh9LmJyZWFkY3J1bWItc2VwYXJhdG9yey13ZWJraXQtbWFyZ2luLXN0YXJ0OjEwcHg7bWFyZ2luLWlubGluZS1zdGFydDoxMHB4Oy13ZWJraXQtbWFyZ2luLWVuZDoxMHB4O21hcmdpbi1pbmxpbmUtZW5kOjEwcHg7bWFyZ2luLXRvcDotMXB4fTpob3N0KC5pb24tZm9jdXNlZCkgLmJyZWFkY3J1bWItbmF0aXZle2JvcmRlci1yYWRpdXM6NHB4Oy13ZWJraXQtYm94LXNoYWRvdzowcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7Ym94LXNoYWRvdzowcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xMil9LmJyZWFkY3J1bWItc2VwYXJhdG9ye2NvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTU1MCwgdmFyKC0taW9uLXRleHQtY29sb3Itc3RlcC00NTAsICM3Mzg0OWEpKX06OnNsb3R0ZWQoaW9uLWljb24pe2NvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTU1MCwgdmFyKC0taW9uLXRleHQtY29sb3Itc3RlcC00NTAsICM3ZDg4OTQpKTtmb250LXNpemU6MS4xMjVyZW19OjpzbG90dGVkKGlvbi1pY29uW3Nsb3Q9c3RhcnRdKXstd2Via2l0LW1hcmdpbi1lbmQ6OHB4O21hcmdpbi1pbmxpbmUtZW5kOjhweH06OnNsb3R0ZWQoaW9uLWljb25bc2xvdD1lbmRdKXstd2Via2l0LW1hcmdpbi1zdGFydDo4cHg7bWFyZ2luLWlubGluZS1zdGFydDo4cHh9Omhvc3QoLmJyZWFkY3J1bWItYWN0aXZlKSA6OnNsb3R0ZWQoaW9uLWljb24pe2NvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTg1MCwgdmFyKC0taW9uLXRleHQtY29sb3Itc3RlcC0xNTAsICMyMjJkM2EpKX0uYnJlYWRjcnVtYnMtY29sbGFwc2VkLWluZGljYXRvcntib3JkZXItcmFkaXVzOjJweDtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1zdGVwLTEwMCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3Itc3RlcC0xMDAsICNlZWYxZjMpKTtjb2xvcjp2YXIoLS1pb24tY29sb3Itc3RlcC01NTAsIHZhcigtLWlvbi10ZXh0LWNvbG9yLXN0ZXAtNDUwLCAjNzM4NDlhKSl9LmJyZWFkY3J1bWJzLWNvbGxhcHNlZC1pbmRpY2F0b3I6aG92ZXJ7b3BhY2l0eTowLjd9LmJyZWFkY3J1bWJzLWNvbGxhcHNlZC1pbmRpY2F0b3I6Zm9jdXN7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXN0ZXAtMTUwLCAjZGZlNWU4KSl9XCI7XG5jb25zdCBCcmVhZGNydW1iID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmlvbkZvY3VzID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Gb2N1c1wiLCA3KTtcbiAgICB0aGlzLmlvbkJsdXIgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkJsdXJcIiwgNyk7XG4gICAgdGhpcy5jb2xsYXBzZWRDbGljayA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY29sbGFwc2VkQ2xpY2tcIiwgNyk7XG4gICAgdGhpcy5pbmhlcml0ZWRBdHRyaWJ1dGVzID0ge307XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHRoaXMuY29sbGFwc2VkID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogSWYgYHRydWVgLCB0aGUgYnJlYWRjcnVtYiB3aWxsIHRha2Ugb24gYSBkaWZmZXJlbnQgbG9vayB0byBzaG93IHRoYXRcbiAgICAgKiBpdCBpcyB0aGUgY3VycmVudGx5IGFjdGl2ZSBicmVhZGNydW1iLiBEZWZhdWx0cyB0byBgdHJ1ZWAgZm9yIHRoZVxuICAgICAqIGxhc3QgYnJlYWRjcnVtYiBpZiBpdCBpcyBub3Qgc2V0IG9uIGFueS5cbiAgICAgKi9cbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIElmIGB0cnVlYCwgdGhlIHVzZXIgY2Fubm90IGludGVyYWN0IHdpdGggdGhlIGJyZWFkY3J1bWIuXG4gICAgICovXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIFdoZW4gdXNpbmcgYSByb3V0ZXIsIGl0IHNwZWNpZmllcyB0aGUgdHJhbnNpdGlvbiBkaXJlY3Rpb24gd2hlbiBuYXZpZ2F0aW5nIHRvXG4gICAgICogYW5vdGhlciBwYWdlIHVzaW5nIGBocmVmYC5cbiAgICAgKi9cbiAgICB0aGlzLnJvdXRlckRpcmVjdGlvbiA9ICdmb3J3YXJkJztcbiAgICB0aGlzLm9uRm9jdXMgPSAoKSA9PiB7XG4gICAgICB0aGlzLmlvbkZvY3VzLmVtaXQoKTtcbiAgICB9O1xuICAgIHRoaXMub25CbHVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5pb25CbHVyLmVtaXQoKTtcbiAgICB9O1xuICAgIHRoaXMuY29sbGFwc2VkSW5kaWNhdG9yQ2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLmNvbGxhcHNlZENsaWNrLmVtaXQoe1xuICAgICAgICBpb25TaGFkb3dUYXJnZXQ6IHRoaXMuY29sbGFwc2VkUmVmXG4gICAgICB9KTtcbiAgICB9O1xuICB9XG4gIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHRoaXMuaW5oZXJpdGVkQXR0cmlidXRlcyA9IGluaGVyaXRBcmlhQXR0cmlidXRlcyh0aGlzLmVsKTtcbiAgfVxuICBpc0NsaWNrYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ocmVmICE9PSB1bmRlZmluZWQ7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNvbG9yLFxuICAgICAgYWN0aXZlLFxuICAgICAgY29sbGFwc2VkLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBkb3dubG9hZCxcbiAgICAgIGVsLFxuICAgICAgaW5oZXJpdGVkQXR0cmlidXRlcyxcbiAgICAgIGxhc3QsXG4gICAgICByb3V0ZXJBbmltYXRpb24sXG4gICAgICByb3V0ZXJEaXJlY3Rpb24sXG4gICAgICBzZXBhcmF0b3IsXG4gICAgICBzaG93Q29sbGFwc2VkSW5kaWNhdG9yLFxuICAgICAgdGFyZ2V0XG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgY2xpY2thYmxlID0gdGhpcy5pc0NsaWNrYWJsZSgpO1xuICAgIGNvbnN0IFRhZ1R5cGUgPSB0aGlzLmhyZWYgPT09IHVuZGVmaW5lZCA/ICdzcGFuJyA6ICdhJztcbiAgICAvLyBMaW5rcyBjYW4gc3RpbGwgYmUgdGFiYmVkIHRvIHdoZW4gc2V0IHRvIGRpc2FibGVkIGlmIHRoZXkgaGF2ZSBhbiBocmVmXG4gICAgLy8gaW4gb3JkZXIgdG8gdHJ1bHkgZGlzYWJsZSB0aGVtIHdlIGNhbiBrZWVwIGl0IGFzIGFuIGFuY2hvciBidXQgcmVtb3ZlIHRoZSBocmVmXG4gICAgY29uc3QgaHJlZiA9IGRpc2FibGVkID8gdW5kZWZpbmVkIDogdGhpcy5ocmVmO1xuICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgIGNvbnN0IGF0dHJzID0gVGFnVHlwZSA9PT0gJ3NwYW4nID8ge30gOiB7XG4gICAgICBkb3dubG9hZCxcbiAgICAgIGhyZWYsXG4gICAgICB0YXJnZXRcbiAgICB9O1xuICAgIC8vIElmIHRoZSBicmVhZGNydW1iIGlzIGNvbGxhcHNlZCwgY2hlY2sgaWYgaXQgY29udGFpbnMgdGhlIGNvbGxhcHNlZCBpbmRpY2F0b3JcbiAgICAvLyB0byBzaG93IHRoZSBzZXBhcmF0b3IgYXMgbG9uZyBhcyBpdCBpc24ndCBhbHNvIHRoZSBsYXN0IGJyZWFkY3J1bWJcbiAgICAvLyBvdGhlcndpc2UgaWYgbm90IGNvbGxhcHNlZCB1c2UgdGhlIHZhbHVlIGluIHNlcGFyYXRvclxuICAgIGNvbnN0IHNob3dTZXBhcmF0b3IgPSBsYXN0ID8gZmFsc2UgOiBjb2xsYXBzZWQgPyBzaG93Q29sbGFwc2VkSW5kaWNhdG9yICYmICFsYXN0ID8gdHJ1ZSA6IGZhbHNlIDogc2VwYXJhdG9yO1xuICAgIHJldHVybiBoKEhvc3QsIHtcbiAgICAgIGtleTogJzMyY2E2MWM4MzcyMWRmZjUyYjVlOTcxNzFlZDQ0OWRjZTM1ODRhNTUnLFxuICAgICAgb25DbGljazogZXYgPT4gb3BlblVSTChocmVmLCBldiwgcm91dGVyRGlyZWN0aW9uLCByb3V0ZXJBbmltYXRpb24pLFxuICAgICAgXCJhcmlhLWRpc2FibGVkXCI6IGRpc2FibGVkID8gJ3RydWUnIDogbnVsbCxcbiAgICAgIGNsYXNzOiBjcmVhdGVDb2xvckNsYXNzZXMoY29sb3IsIHtcbiAgICAgICAgW21vZGVdOiB0cnVlLFxuICAgICAgICAnYnJlYWRjcnVtYi1hY3RpdmUnOiBhY3RpdmUsXG4gICAgICAgICdicmVhZGNydW1iLWNvbGxhcHNlZCc6IGNvbGxhcHNlZCxcbiAgICAgICAgJ2JyZWFkY3J1bWItZGlzYWJsZWQnOiBkaXNhYmxlZCxcbiAgICAgICAgJ2luLWJyZWFkY3J1bWJzLWNvbG9yJzogaG9zdENvbnRleHQoJ2lvbi1icmVhZGNydW1ic1tjb2xvcl0nLCBlbCksXG4gICAgICAgICdpbi10b29sYmFyJzogaG9zdENvbnRleHQoJ2lvbi10b29sYmFyJywgdGhpcy5lbCksXG4gICAgICAgICdpbi10b29sYmFyLWNvbG9yJzogaG9zdENvbnRleHQoJ2lvbi10b29sYmFyW2NvbG9yXScsIHRoaXMuZWwpLFxuICAgICAgICAnaW9uLWFjdGl2YXRhYmxlJzogY2xpY2thYmxlLFxuICAgICAgICAnaW9uLWZvY3VzYWJsZSc6IGNsaWNrYWJsZVxuICAgICAgfSlcbiAgICB9LCBoKFRhZ1R5cGUsIE9iamVjdC5hc3NpZ24oe1xuICAgICAga2V5OiAnNDc5ZmViODQ1ZjRhNmQ4MDA5ZDU0MjJiMzNlYjQyMzczMGI5NzIyYidcbiAgICB9LCBhdHRycywge1xuICAgICAgY2xhc3M6IFwiYnJlYWRjcnVtYi1uYXRpdmVcIixcbiAgICAgIHBhcnQ6IFwibmF0aXZlXCIsXG4gICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICBvbkZvY3VzOiB0aGlzLm9uRm9jdXMsXG4gICAgICBvbkJsdXI6IHRoaXMub25CbHVyXG4gICAgfSwgaW5oZXJpdGVkQXR0cmlidXRlcyksIGgoXCJzbG90XCIsIHtcbiAgICAgIGtleTogJzNjNWRjYWViMGQyNTgyMzVkMWI3NzA3ODY4MDI2ZmYxZDE0MDQwOTknLFxuICAgICAgbmFtZTogXCJzdGFydFwiXG4gICAgfSksIGgoXCJzbG90XCIsIHtcbiAgICAgIGtleTogJ2YxY2ZiOTM0NDQzY2Q5N2RjMjIwODgyYzVlMzU5NmVhODc5ZDY2Y2YnXG4gICAgfSksIGgoXCJzbG90XCIsIHtcbiAgICAgIGtleTogJzUzOTcxMDEyMWI1YjFmM2VlOGQ0YzI0YTk2NTFiNjdjMmFlMDhhZGQnLFxuICAgICAgbmFtZTogXCJlbmRcIlxuICAgIH0pKSwgc2hvd0NvbGxhcHNlZEluZGljYXRvciAmJiBoKFwiYnV0dG9uXCIsIHtcbiAgICAgIGtleTogJ2VkNTNhOTVjY2Q4OTAyMmM4YjdiZWUwNjU4YTIyMWVjNjJhNWM3M2InLFxuICAgICAgcGFydDogXCJjb2xsYXBzZWQtaW5kaWNhdG9yXCIsXG4gICAgICBcImFyaWEtbGFiZWxcIjogXCJTaG93IG1vcmUgYnJlYWRjcnVtYnNcIixcbiAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMuY29sbGFwc2VkSW5kaWNhdG9yQ2xpY2soKSxcbiAgICAgIHJlZjogY29sbGFwc2VkRWwgPT4gdGhpcy5jb2xsYXBzZWRSZWYgPSBjb2xsYXBzZWRFbCxcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgICdicmVhZGNydW1icy1jb2xsYXBzZWQtaW5kaWNhdG9yJzogdHJ1ZVxuICAgICAgfVxuICAgIH0sIGgoXCJpb24taWNvblwiLCB7XG4gICAgICBrZXk6ICdhODQ5ZTExNDJhODZmMDZmMjA3Y2YxMTY2MmZhMmE1NjBhYjdmYzZhJyxcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsXG4gICAgICBpY29uOiBlbGxpcHNpc0hvcml6b250YWwsXG4gICAgICBsYXp5OiBmYWxzZVxuICAgIH0pKSwgc2hvd1NlcGFyYXRvciAmJiAoXG4gICAgLyoqXG4gICAgICogU2VwYXJhdG9ycyBzaG91bGQgbm90IGJlIGFubm91bmNlZCBieSBuYXJyYXRvcnMuXG4gICAgICogV2UgYWRkIGFyaWEtaGlkZGVuIG9uIHRoZSBzcGFuIHNvIHRoYXQgdGhpcyBhcHBsaWVzXG4gICAgICogdG8gYW55IGN1c3RvbSBzZXBhcmF0b3JzIHRvby5cbiAgICAgKi9cbiAgICBoKFwic3BhblwiLCB7XG4gICAgICBrZXk6ICdmYzNjNzQxY2IwMWZhZmVmOGIyNjA0NmM3ZWU1YjE5MGVmYzY5YTdjJyxcbiAgICAgIGNsYXNzOiBcImJyZWFkY3J1bWItc2VwYXJhdG9yXCIsXG4gICAgICBwYXJ0OiBcInNlcGFyYXRvclwiLFxuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIlxuICAgIH0sIGgoXCJzbG90XCIsIHtcbiAgICAgIGtleTogJzQ4NzE5MzJhZTFkYWU1MjA3NjdlMDcxM2U3Y2VlMmQxMWIwYmJhNmQnLFxuICAgICAgbmFtZTogXCJzZXBhcmF0b3JcIlxuICAgIH0sIG1vZGUgPT09ICdpb3MnID8gaChcImlvbi1pY29uXCIsIHtcbiAgICAgIGljb246IGNoZXZyb25Gb3J3YXJkT3V0bGluZSxcbiAgICAgIGxhenk6IGZhbHNlLFxuICAgICAgXCJmbGlwLXJ0bFwiOiB0cnVlXG4gICAgfSkgOiBoKFwic3BhblwiLCBudWxsLCBcIi9cIikpKSkpO1xuICB9XG4gIGdldCBlbCgpIHtcbiAgICByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTtcbiAgfVxufTtcbkJyZWFkY3J1bWIuc3R5bGUgPSB7XG4gIGlvczogYnJlYWRjcnVtYklvc0NzcyxcbiAgbWQ6IGJyZWFkY3J1bWJNZENzc1xufTtcbmNvbnN0IGJyZWFkY3J1bWJzSW9zQ3NzID0gXCI6aG9zdHstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC13cmFwOndyYXA7ZmxleC13cmFwOndyYXA7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcn06aG9zdCguaW4tdG9vbGJhci1jb2xvciksOmhvc3QoLmluLXRvb2xiYXItY29sb3IpIC5icmVhZGNydW1icy1jb2xsYXBzZWQtaW5kaWNhdG9yIGlvbi1pY29ue2NvbG9yOnZhcigtLWlvbi1jb2xvci1jb250cmFzdCl9Omhvc3QoLmluLXRvb2xiYXItY29sb3IpIC5icmVhZGNydW1icy1jb2xsYXBzZWQtaW5kaWNhdG9ye2JhY2tncm91bmQ6cmdiYSh2YXIoLS1pb24tY29sb3ItY29udHJhc3QtcmdiKSwgMC4xMSl9Omhvc3QoLmluLXRvb2xiYXIpey13ZWJraXQtcGFkZGluZy1zdGFydDoyMHB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjIwcHg7LXdlYmtpdC1wYWRkaW5nLWVuZDoyMHB4O3BhZGRpbmctaW5saW5lLWVuZDoyMHB4O3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfVwiO1xuY29uc3QgYnJlYWRjcnVtYnNNZENzcyA9IFwiOmhvc3R7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtd3JhcDp3cmFwO2ZsZXgtd3JhcDp3cmFwOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXJ9Omhvc3QoLmluLXRvb2xiYXItY29sb3IpLDpob3N0KC5pbi10b29sYmFyLWNvbG9yKSAuYnJlYWRjcnVtYnMtY29sbGFwc2VkLWluZGljYXRvciBpb24taWNvbntjb2xvcjp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpfTpob3N0KC5pbi10b29sYmFyLWNvbG9yKSAuYnJlYWRjcnVtYnMtY29sbGFwc2VkLWluZGljYXRvcntiYWNrZ3JvdW5kOnJnYmEodmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYiksIDAuMTEpfTpob3N0KC5pbi10b29sYmFyKXstd2Via2l0LXBhZGRpbmctc3RhcnQ6OHB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjhweDstd2Via2l0LXBhZGRpbmctZW5kOjhweDtwYWRkaW5nLWlubGluZS1lbmQ6OHB4O3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MH1cIjtcbmNvbnN0IEJyZWFkY3J1bWJzID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmlvbkNvbGxhcHNlZENsaWNrID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Db2xsYXBzZWRDbGlja1wiLCA3KTtcbiAgICAvKipcbiAgICAgKiBUaGUgbnVtYmVyIG9mIGJyZWFkY3J1bWJzIHRvIHNob3cgYmVmb3JlIHRoZSBjb2xsYXBzZWQgaW5kaWNhdG9yLlxuICAgICAqIElmIGBpdGVtc0JlZm9yZUNvbGxhcHNlYCArIGBpdGVtc0FmdGVyQ29sbGFwc2VgIGlzIGdyZWF0ZXIgdGhhbiBgbWF4SXRlbXNgLFxuICAgICAqIHRoZSBicmVhZGNydW1icyB3aWxsIG5vdCBiZSBjb2xsYXBzZWQuXG4gICAgICovXG4gICAgdGhpcy5pdGVtc0JlZm9yZUNvbGxhcHNlID0gMTtcbiAgICAvKipcbiAgICAgKiBUaGUgbnVtYmVyIG9mIGJyZWFkY3J1bWJzIHRvIHNob3cgYWZ0ZXIgdGhlIGNvbGxhcHNlZCBpbmRpY2F0b3IuXG4gICAgICogSWYgYGl0ZW1zQmVmb3JlQ29sbGFwc2VgICsgYGl0ZW1zQWZ0ZXJDb2xsYXBzZWAgaXMgZ3JlYXRlciB0aGFuIGBtYXhJdGVtc2AsXG4gICAgICogdGhlIGJyZWFkY3J1bWJzIHdpbGwgbm90IGJlIGNvbGxhcHNlZC5cbiAgICAgKi9cbiAgICB0aGlzLml0ZW1zQWZ0ZXJDb2xsYXBzZSA9IDE7XG4gICAgdGhpcy5icmVhZGNydW1ic0luaXQgPSAoKSA9PiB7XG4gICAgICB0aGlzLnNldEJyZWFkY3J1bWJTZXBhcmF0b3IoKTtcbiAgICAgIHRoaXMuc2V0TWF4SXRlbXMoKTtcbiAgICB9O1xuICAgIHRoaXMucmVzZXRBY3RpdmVCcmVhZGNydW1iID0gKCkgPT4ge1xuICAgICAgY29uc3QgYnJlYWRjcnVtYnMgPSB0aGlzLmdldEJyZWFkY3J1bWJzKCk7XG4gICAgICAvLyBPbmx5IHJlc2V0IHRoZSBhY3RpdmUgYnJlYWRjcnVtYiBpZiB3ZSB3ZXJlIHRoZSBvbmVzIHRvIGNoYW5nZSBpdFxuICAgICAgLy8gb3RoZXJ3aXNlIHVzZSB0aGUgb25lIHNldCBvbiB0aGUgY29tcG9uZW50XG4gICAgICBjb25zdCBhY3RpdmVCcmVhZGNydW1iID0gYnJlYWRjcnVtYnMuZmluZChicmVhZGNydW1iID0+IGJyZWFkY3J1bWIuYWN0aXZlKTtcbiAgICAgIGlmIChhY3RpdmVCcmVhZGNydW1iICYmIHRoaXMuYWN0aXZlQ2hhbmdlZCkge1xuICAgICAgICBhY3RpdmVCcmVhZGNydW1iLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5zZXRNYXhJdGVtcyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgaXRlbXNBZnRlckNvbGxhcHNlLFxuICAgICAgICBpdGVtc0JlZm9yZUNvbGxhcHNlLFxuICAgICAgICBtYXhJdGVtc1xuICAgICAgfSA9IHRoaXM7XG4gICAgICBjb25zdCBicmVhZGNydW1icyA9IHRoaXMuZ2V0QnJlYWRjcnVtYnMoKTtcbiAgICAgIGZvciAoY29uc3QgYnJlYWRjcnVtYiBvZiBicmVhZGNydW1icykge1xuICAgICAgICBicmVhZGNydW1iLnNob3dDb2xsYXBzZWRJbmRpY2F0b3IgPSBmYWxzZTtcbiAgICAgICAgYnJlYWRjcnVtYi5jb2xsYXBzZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIC8vIElmIHRoZSBudW1iZXIgb2YgYnJlYWRjcnVtYnMgZXhjZWVkcyB0aGUgbWF4aW11bSBudW1iZXIgb2YgaXRlbXNcbiAgICAgIC8vIHRoYXQgc2hvdWxkIHNob3cgYW5kIHRoZSBpdGVtcyBiZWZvcmUgLyBhZnRlciBjb2xsYXBzZSBkbyBub3RcbiAgICAgIC8vIGV4Y2VlZCB0aGUgbWF4aW11bSBpdGVtcyB0aGVuIHdlIG5lZWQgdG8gY29sbGFwc2UgdGhlIGJyZWFkY3J1bWJzXG4gICAgICBjb25zdCBzaG91bGRDb2xsYXBzZSA9IG1heEl0ZW1zICE9PSB1bmRlZmluZWQgJiYgYnJlYWRjcnVtYnMubGVuZ3RoID4gbWF4SXRlbXMgJiYgaXRlbXNCZWZvcmVDb2xsYXBzZSArIGl0ZW1zQWZ0ZXJDb2xsYXBzZSA8PSBtYXhJdGVtcztcbiAgICAgIGlmIChzaG91bGRDb2xsYXBzZSkge1xuICAgICAgICAvLyBTaG93IHRoZSBjb2xsYXBzZWQgaW5kaWNhdG9yIGluIHRoZSBmaXJzdCBicmVhZGNydW1iIHRoYXQgY29sbGFwc2VzXG4gICAgICAgIGJyZWFkY3J1bWJzLmZvckVhY2goKGJyZWFkY3J1bWIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgaWYgKGluZGV4ID09PSBpdGVtc0JlZm9yZUNvbGxhcHNlKSB7XG4gICAgICAgICAgICBicmVhZGNydW1iLnNob3dDb2xsYXBzZWRJbmRpY2F0b3IgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBDb2xsYXBzZSBhbGwgYnJlYWRjcnVtYnMgdGhhdCBoYXZlIGFuIGluZGV4IGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0b1xuICAgICAgICAgIC8vIHRoZSBudW1iZXIgYmVmb3JlIGNvbGxhcHNlIGFuZCBhbiBpbmRleCBsZXNzIHRoYW4gdGhlIHRvdGFsIG51bWJlclxuICAgICAgICAgIC8vIG9mIGJyZWFkY3J1bWJzIG1pbnVzIHRoZSBpdGVtcyB0aGF0IHNob3VsZCBzaG93IGFmdGVyIHRoZSBjb2xsYXBzZVxuICAgICAgICAgIGlmIChpbmRleCA+PSBpdGVtc0JlZm9yZUNvbGxhcHNlICYmIGluZGV4IDwgYnJlYWRjcnVtYnMubGVuZ3RoIC0gaXRlbXNBZnRlckNvbGxhcHNlKSB7XG4gICAgICAgICAgICBicmVhZGNydW1iLmNvbGxhcHNlZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuc2V0QnJlYWRjcnVtYlNlcGFyYXRvciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgaXRlbXNBZnRlckNvbGxhcHNlLFxuICAgICAgICBpdGVtc0JlZm9yZUNvbGxhcHNlLFxuICAgICAgICBtYXhJdGVtc1xuICAgICAgfSA9IHRoaXM7XG4gICAgICBjb25zdCBicmVhZGNydW1icyA9IHRoaXMuZ2V0QnJlYWRjcnVtYnMoKTtcbiAgICAgIC8vIENoZWNrIGlmIGFuIGFjdGl2ZSBicmVhZGNydW1iIGV4aXN0cyBhbHJlYWR5XG4gICAgICBjb25zdCBhY3RpdmUgPSBicmVhZGNydW1icy5maW5kKGJyZWFkY3J1bWIgPT4gYnJlYWRjcnVtYi5hY3RpdmUpO1xuICAgICAgLy8gU2V0IHRoZSBzZXBhcmF0b3Igb24gYWxsIGJ1dCB0aGUgbGFzdCBicmVhZGNydW1iXG4gICAgICBmb3IgKGNvbnN0IGJyZWFkY3J1bWIgb2YgYnJlYWRjcnVtYnMpIHtcbiAgICAgICAgLy8gVGhlIG9ubHkgdGltZSB0aGUgbGFzdCBicmVhZGNydW1iIGNoYW5nZXMgaXMgd2hlblxuICAgICAgICAvLyBpdGVtc0FmdGVyQ29sbGFwc2UgaXMgc2V0IHRvIDAsIGluIHRoaXMgY2FzZSB0aGVcbiAgICAgICAgLy8gbGFzdCBicmVhZGNydW1iIHdpbGwgYmUgdGhlIGNvbGxhcHNlZCBpbmRpY2F0b3JcbiAgICAgICAgY29uc3QgbGFzdCA9IG1heEl0ZW1zICE9PSB1bmRlZmluZWQgJiYgaXRlbXNBZnRlckNvbGxhcHNlID09PSAwID8gYnJlYWRjcnVtYiA9PT0gYnJlYWRjcnVtYnNbaXRlbXNCZWZvcmVDb2xsYXBzZV0gOiBicmVhZGNydW1iID09PSBicmVhZGNydW1ic1ticmVhZGNydW1icy5sZW5ndGggLSAxXTtcbiAgICAgICAgYnJlYWRjcnVtYi5sYXN0ID0gbGFzdDtcbiAgICAgICAgLy8gSWYgdGhlIGJyZWFkY3J1bWIgaGFzIGRlZmluZWQgd2hldGhlciBvciBub3QgdG8gc2hvdyB0aGVcbiAgICAgICAgLy8gc2VwYXJhdG9yIHRoZW4gdXNlIHRoYXQgdmFsdWUsIG90aGVyd2lzZSBjaGVjayBpZiBpdCdzIHRoZVxuICAgICAgICAvLyBsYXN0IGJyZWFkY3J1bWJcbiAgICAgICAgY29uc3Qgc2VwYXJhdG9yID0gYnJlYWRjcnVtYi5zZXBhcmF0b3IgIT09IHVuZGVmaW5lZCA/IGJyZWFkY3J1bWIuc2VwYXJhdG9yIDogbGFzdCA/IHVuZGVmaW5lZCA6IHRydWU7XG4gICAgICAgIGJyZWFkY3J1bWIuc2VwYXJhdG9yID0gc2VwYXJhdG9yO1xuICAgICAgICAvLyBJZiB0aGVyZSBpcyBub3QgYW4gYWN0aXZlIGJyZWFkY3J1bWIgYWxyZWFkeVxuICAgICAgICAvLyBzZXQgdGhlIGxhc3Qgb25lIHRvIGFjdGl2ZVxuICAgICAgICBpZiAoIWFjdGl2ZSAmJiBsYXN0KSB7XG4gICAgICAgICAgYnJlYWRjcnVtYi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuYWN0aXZlQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuZ2V0QnJlYWRjcnVtYnMgPSAoKSA9PiB7XG4gICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lvbi1icmVhZGNydW1iJykpO1xuICAgIH07XG4gICAgdGhpcy5zbG90Q2hhbmdlZCA9ICgpID0+IHtcbiAgICAgIHRoaXMucmVzZXRBY3RpdmVCcmVhZGNydW1iKCk7XG4gICAgICB0aGlzLmJyZWFkY3J1bWJzSW5pdCgpO1xuICAgIH07XG4gIH1cbiAgb25Db2xsYXBzZWRDbGljayhldikge1xuICAgIGNvbnN0IGJyZWFkY3J1bWJzID0gdGhpcy5nZXRCcmVhZGNydW1icygpO1xuICAgIGNvbnN0IGNvbGxhcHNlZEJyZWFkY3J1bWJzID0gYnJlYWRjcnVtYnMuZmlsdGVyKGJyZWFkY3J1bWIgPT4gYnJlYWRjcnVtYi5jb2xsYXBzZWQpO1xuICAgIHRoaXMuaW9uQ29sbGFwc2VkQ2xpY2suZW1pdChPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGV2LmRldGFpbCksIHtcbiAgICAgIGNvbGxhcHNlZEJyZWFkY3J1bWJzXG4gICAgfSkpO1xuICB9XG4gIG1heEl0ZW1zQ2hhbmdlZCgpIHtcbiAgICB0aGlzLnJlc2V0QWN0aXZlQnJlYWRjcnVtYigpO1xuICAgIHRoaXMuYnJlYWRjcnVtYnNJbml0KCk7XG4gIH1cbiAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgdGhpcy5icmVhZGNydW1ic0luaXQoKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY29sb3IsXG4gICAgICBjb2xsYXBzZWRcbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICByZXR1cm4gaChIb3N0LCB7XG4gICAgICBrZXk6ICdmZTY0ZTljZGY1OTdlZGUyZGIxNDBiZjVmYTA1YTAzNTlkODJkYjU3JyxcbiAgICAgIGNsYXNzOiBjcmVhdGVDb2xvckNsYXNzZXMoY29sb3IsIHtcbiAgICAgICAgW21vZGVdOiB0cnVlLFxuICAgICAgICAnaW4tdG9vbGJhcic6IGhvc3RDb250ZXh0KCdpb24tdG9vbGJhcicsIHRoaXMuZWwpLFxuICAgICAgICAnaW4tdG9vbGJhci1jb2xvcic6IGhvc3RDb250ZXh0KCdpb24tdG9vbGJhcltjb2xvcl0nLCB0aGlzLmVsKSxcbiAgICAgICAgJ2JyZWFkY3J1bWJzLWNvbGxhcHNlZCc6IGNvbGxhcHNlZFxuICAgICAgfSlcbiAgICB9LCBoKFwic2xvdFwiLCB7XG4gICAgICBrZXk6ICdhMmM5OWI1NzllMzM5MDU1YzUwYTYxM2Q1YzZiNjEwMzJmNWRkZmZlJyxcbiAgICAgIG9uU2xvdGNoYW5nZTogdGhpcy5zbG90Q2hhbmdlZFxuICAgIH0pKTtcbiAgfVxuICBnZXQgZWwoKSB7XG4gICAgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7XG4gIH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJtYXhJdGVtc1wiOiBbXCJtYXhJdGVtc0NoYW5nZWRcIl0sXG4gICAgICBcIml0ZW1zQmVmb3JlQ29sbGFwc2VcIjogW1wibWF4SXRlbXNDaGFuZ2VkXCJdLFxuICAgICAgXCJpdGVtc0FmdGVyQ29sbGFwc2VcIjogW1wibWF4SXRlbXNDaGFuZ2VkXCJdXG4gICAgfTtcbiAgfVxufTtcbkJyZWFkY3J1bWJzLnN0eWxlID0ge1xuICBpb3M6IGJyZWFkY3J1bWJzSW9zQ3NzLFxuICBtZDogYnJlYWRjcnVtYnNNZENzc1xufTtcbmV4cG9ydCB7IEJyZWFkY3J1bWIgYXMgaW9uX2JyZWFkY3J1bWIsIEJyZWFkY3J1bWJzIGFzIGlvbl9icmVhZGNydW1icyB9OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFBLElBQU0sbUJBQW1CO0FBQ3pCLElBQU0sa0JBQWtCO0FBQ3hCLElBQU0sYUFBYSxNQUFNO0FBQUEsRUFDdkIsWUFBWSxTQUFTO0FBQ25CLHFCQUFpQixNQUFNLE9BQU87QUFDOUIsU0FBSyxXQUFXLFlBQVksTUFBTSxZQUFZLENBQUM7QUFDL0MsU0FBSyxVQUFVLFlBQVksTUFBTSxXQUFXLENBQUM7QUFDN0MsU0FBSyxpQkFBaUIsWUFBWSxNQUFNLGtCQUFrQixDQUFDO0FBQzNELFNBQUssc0JBQXNCLENBQUM7QUFFNUIsU0FBSyxZQUFZO0FBTWpCLFNBQUssU0FBUztBQUlkLFNBQUssV0FBVztBQUtoQixTQUFLLGtCQUFrQjtBQUN2QixTQUFLLFVBQVUsTUFBTTtBQUNuQixXQUFLLFNBQVMsS0FBSztBQUFBLElBQ3JCO0FBQ0EsU0FBSyxTQUFTLE1BQU07QUFDbEIsV0FBSyxRQUFRLEtBQUs7QUFBQSxJQUNwQjtBQUNBLFNBQUssMEJBQTBCLE1BQU07QUFDbkMsV0FBSyxlQUFlLEtBQUs7QUFBQSxRQUN2QixpQkFBaUIsS0FBSztBQUFBLE1BQ3hCLENBQUM7QUFBQSxJQUNIO0FBQUEsRUFDRjtBQUFBLEVBQ0Esb0JBQW9CO0FBQ2xCLFNBQUssc0JBQXNCLHNCQUFzQixLQUFLLEVBQUU7QUFBQSxFQUMxRDtBQUFBLEVBQ0EsY0FBYztBQUNaLFdBQU8sS0FBSyxTQUFTO0FBQUEsRUFDdkI7QUFBQSxFQUNBLFNBQVM7QUFDUCxVQUFNO0FBQUEsTUFDSjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FB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
