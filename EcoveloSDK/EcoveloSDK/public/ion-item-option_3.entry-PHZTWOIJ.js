import {
  watchForOptions
} from "./chunk-KXXXZCB6.js";
import {
  disableContentScrollY,
  findClosestIonContent,
  resetContentScrollY
} from "./chunk-WRI2MF6U.js";
import {
  createColorClasses
} from "./chunk-5VP4V3BN.js";
import {
  getIonMode
} from "./chunk-TXLH22R2.js";
import {
  isEndSide
} from "./chunk-RZR7LWTQ.js";
import {
  Host,
  createEvent,
  getElement,
  h,
  printIonWarning,
  registerInstance
} from "./chunk-BFPTXCSH.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js
var itemOptionIosCss = ":host{--background:var(--ion-color-primary, #0054e9);--color:var(--ion-color-primary-contrast, #fff);background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-webkit-padding-start:0.7em;padding-inline-start:0.7em;-webkit-padding-end:0.7em;padding-inline-end:0.7em;padding-top:0;padding-bottom:0;display:inline-block;position:relative;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}.button-inner{display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.horizontal-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%}::slotted(*){-ms-flex-negative:0;flex-shrink:0}::slotted([slot=start]){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:5px;margin-inline-end:5px;margin-top:0;margin-bottom:0}::slotted([slot=end]){-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}::slotted([slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px;margin-top:0;margin-bottom:0;min-width:0.9em;font-size:1.8em}:host(.item-option-expandable){-ms-flex-negative:0;flex-shrink:0;-webkit-transition-duration:0;transition-duration:0;-webkit-transition-property:none;transition-property:none;-webkit-transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1);transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1)}:host(.item-option-disabled){pointer-events:none}:host(.item-option-disabled) .button-native{cursor:default;opacity:0.5;pointer-events:none}:host{font-size:clamp(16px, 1rem, 35.2px)}:host(.ion-activated){background:var(--ion-color-primary-shade, #004acd)}:host(.ion-color.ion-activated){background:var(--ion-color-shade)}";
var itemOptionMdCss = ":host{--background:var(--ion-color-primary, #0054e9);--color:var(--ion-color-primary-contrast, #fff);background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit)}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-webkit-padding-start:0.7em;padding-inline-start:0.7em;-webkit-padding-end:0.7em;padding-inline-end:0.7em;padding-top:0;padding-bottom:0;display:inline-block;position:relative;width:100%;height:100%;border:0;outline:none;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}.button-inner{display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.horizontal-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%}::slotted(*){-ms-flex-negative:0;flex-shrink:0}::slotted([slot=start]){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:5px;margin-inline-end:5px;margin-top:0;margin-bottom:0}::slotted([slot=end]){-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}::slotted([slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px;margin-top:0;margin-bottom:0;min-width:0.9em;font-size:1.8em}:host(.item-option-expandable){-ms-flex-negative:0;flex-shrink:0;-webkit-transition-duration:0;transition-duration:0;-webkit-transition-property:none;transition-property:none;-webkit-transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1);transition-timing-function:cubic-bezier(0.65, 0.05, 0.36, 1)}:host(.item-option-disabled){pointer-events:none}:host(.item-option-disabled) .button-native{cursor:default;opacity:0.5;pointer-events:none}:host{font-size:0.875rem;font-weight:500;text-transform:uppercase}";
var ItemOption = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.disabled = false;
    this.expandable = false;
    this.type = "button";
    this.onClick = (ev) => {
      const el = ev.target.closest("ion-item-option");
      if (el) {
        ev.preventDefault();
      }
    };
  }
  render() {
    const {
      disabled,
      expandable,
      href
    } = this;
    const TagType = href === void 0 ? "button" : "a";
    const mode = getIonMode(this);
    const attrs = TagType === "button" ? {
      type: this.type
    } : {
      download: this.download,
      href: this.href,
      target: this.target
    };
    return h(Host, {
      key: "189a0040b97163b2336bf216baa71d584c5923a8",
      onClick: this.onClick,
      class: createColorClasses(this.color, {
        [mode]: true,
        "item-option-disabled": disabled,
        "item-option-expandable": expandable,
        "ion-activatable": true
      })
    }, h(TagType, Object.assign({
      key: "5a7140eb99da5ec82fe2ea3ea134513130763399"
    }, attrs, {
      class: "button-native",
      part: "native",
      disabled
    }), h("span", {
      key: "9b8577e612706b43e575c9a20f2f9d35c0d1bcb1",
      class: "button-inner"
    }, h("slot", {
      key: "9acb82f04e4822bfaa363cc2c4d29d5c0fec0ad6",
      name: "top"
    }), h("div", {
      key: "66f5fb4fdd0c39f205574c602c793dcf109c7a17",
      class: "horizontal-wrapper"
    }, h("slot", {
      key: "3761a32bca7c6c41b7eb394045497cfde181a62a",
      name: "start"
    }), h("slot", {
      key: "a96a568955cf6962883dc6771726d3d07462da00",
      name: "icon-only"
    }), h("slot", {
      key: "af5dfe5eb41456b9359bafe3615b576617ed7b57"
    }), h("slot", {
      key: "00426958066ab7b949ff966fabad5cf8a0b54079",
      name: "end"
    })), h("slot", {
      key: "ae66c8bd536a9f27865f49240980d7b4b831b229",
      name: "bottom"
    })), mode === "md" && h("ion-ripple-effect", {
      key: "30df6c935ef8a3f28a6bc1f3bb162ca4f80aaf26"
    })));
  }
  get el() {
    return getElement(this);
  }
};
ItemOption.style = {
  ios: itemOptionIosCss,
  md: itemOptionMdCss
};
var itemOptionsIosCss = "ion-item-options{top:0;right:0;-ms-flex-pack:end;justify-content:flex-end;display:none;position:absolute;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1}:host-context([dir=rtl]) ion-item-options{-ms-flex-pack:start;justify-content:flex-start}:host-context([dir=rtl]) ion-item-options:not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}[dir=rtl] ion-item-options{-ms-flex-pack:start;justify-content:flex-start}[dir=rtl] ion-item-options:not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}@supports selector(:dir(rtl)){ion-item-options:dir(rtl){-ms-flex-pack:start;justify-content:flex-start}ion-item-options:dir(rtl):not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}}.item-options-start{right:auto;left:0;-ms-flex-pack:start;justify-content:flex-start}:host-context([dir=rtl]) .item-options-start{-ms-flex-pack:end;justify-content:flex-end}[dir=rtl] .item-options-start{-ms-flex-pack:end;justify-content:flex-end}@supports selector(:dir(rtl)){.item-options-start:dir(rtl){-ms-flex-pack:end;justify-content:flex-end}}[dir=ltr] .item-options-start ion-item-option:first-child,[dir=rtl] .item-options-start ion-item-option:last-child{padding-left:var(--ion-safe-area-left)}[dir=ltr] .item-options-end ion-item-option:last-child,[dir=rtl] .item-options-end ion-item-option:first-child{padding-right:var(--ion-safe-area-right)}:host-context([dir=rtl]) .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}[dir=rtl] .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}@supports selector(:dir(rtl)){.item-sliding-active-slide:dir(rtl).item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}}.item-sliding-active-slide ion-item-options{display:-ms-flexbox;display:flex;visibility:hidden}.item-sliding-active-slide.item-sliding-active-options-start .item-options-start,.item-sliding-active-slide.item-sliding-active-options-end ion-item-options:not(.item-options-start){width:100%;visibility:visible}.item-options-ios{border-bottom-width:0;border-bottom-style:solid;border-bottom-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, var(--ion-background-color-step-250, #c8c7cc))))}.item-options-ios.item-options-end{border-bottom-width:0.55px}.list-ios-lines-none .item-options-ios{border-bottom-width:0}.list-ios-lines-full .item-options-ios,.list-ios-lines-inset .item-options-ios.item-options-end{border-bottom-width:0.55px}";
var itemOptionsMdCss = "ion-item-options{top:0;right:0;-ms-flex-pack:end;justify-content:flex-end;display:none;position:absolute;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1}:host-context([dir=rtl]) ion-item-options{-ms-flex-pack:start;justify-content:flex-start}:host-context([dir=rtl]) ion-item-options:not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}[dir=rtl] ion-item-options{-ms-flex-pack:start;justify-content:flex-start}[dir=rtl] ion-item-options:not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}@supports selector(:dir(rtl)){ion-item-options:dir(rtl){-ms-flex-pack:start;justify-content:flex-start}ion-item-options:dir(rtl):not(.item-options-end){right:auto;left:0;-ms-flex-pack:end;justify-content:flex-end}}.item-options-start{right:auto;left:0;-ms-flex-pack:start;justify-content:flex-start}:host-context([dir=rtl]) .item-options-start{-ms-flex-pack:end;justify-content:flex-end}[dir=rtl] .item-options-start{-ms-flex-pack:end;justify-content:flex-end}@supports selector(:dir(rtl)){.item-options-start:dir(rtl){-ms-flex-pack:end;justify-content:flex-end}}[dir=ltr] .item-options-start ion-item-option:first-child,[dir=rtl] .item-options-start ion-item-option:last-child{padding-left:var(--ion-safe-area-left)}[dir=ltr] .item-options-end ion-item-option:last-child,[dir=rtl] .item-options-end ion-item-option:first-child{padding-right:var(--ion-safe-area-right)}:host-context([dir=rtl]) .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}[dir=rtl] .item-sliding-active-slide.item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}@supports selector(:dir(rtl)){.item-sliding-active-slide:dir(rtl).item-sliding-active-options-start ion-item-options:not(.item-options-end){width:100%;visibility:visible}}.item-sliding-active-slide ion-item-options{display:-ms-flexbox;display:flex;visibility:hidden}.item-sliding-active-slide.item-sliding-active-options-start .item-options-start,.item-sliding-active-slide.item-sliding-active-options-end ion-item-options:not(.item-options-start){width:100%;visibility:visible}.item-options-md{border-bottom-width:0;border-bottom-style:solid;border-bottom-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.13)))))}.list-md-lines-none .item-options-md{border-bottom-width:0}.list-md-lines-full .item-options-md,.list-md-lines-inset .item-options-md.item-options-end{border-bottom-width:1px}";
var ItemOptions = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionSwipe = createEvent(this, "ionSwipe", 7);
    this.side = "end";
  }
  /** @internal */
  fireSwipeEvent() {
    return __async(this, null, function* () {
      this.ionSwipe.emit({
        side: this.side
      });
    });
  }
  render() {
    const mode = getIonMode(this);
    const isEnd = isEndSide(this.side);
    return h(Host, {
      key: "05a22a505e043c2715e3805e5e26ab4668940af0",
      class: {
        [mode]: true,
        // Used internally for styling
        [`item-options-${mode}`]: true,
        /**
         * Note: The "start" and "end" terms refer to the
         * direction ion-item-option instances within ion-item-options flow.
         * They do not refer to how ion-item-options flows within ion-item-sliding.
         * As a result, "item-options-start" means the ion-item-options container
         * always appears on the left, and "item-options-end" means the ion-item-options
         * container always appears on the right.
         */
        "item-options-start": !isEnd,
        "item-options-end": isEnd
      }
    });
  }
  get el() {
    return getElement(this);
  }
};
ItemOptions.style = {
  ios: itemOptionsIosCss,
  md: itemOptionsMdCss
};
var itemSlidingCss = "ion-item-sliding{display:block;position:relative;width:100%;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-item-sliding .item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.item-sliding-active-slide .item{position:relative;-webkit-transition:-webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);transition:-webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);transition:transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);transition:transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1), -webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);opacity:1;z-index:2;pointer-events:none;will-change:transform}.item-sliding-closing ion-item-options{pointer-events:none}.item-sliding-active-swipe-end .item-options-end .item-option-expandable{padding-left:100%;-ms-flex-order:1;order:1;-webkit-transition-duration:0.6s;transition-duration:0.6s;-webkit-transition-property:padding-left;transition-property:padding-left}:host-context([dir=rtl]) .item-sliding-active-swipe-end .item-options-end .item-option-expandable{-ms-flex-order:-1;order:-1}[dir=rtl] .item-sliding-active-swipe-end .item-options-end .item-option-expandable{-ms-flex-order:-1;order:-1}@supports selector(:dir(rtl)){.item-sliding-active-swipe-end .item-options-end .item-option-expandable:dir(rtl){-ms-flex-order:-1;order:-1}}.item-sliding-active-swipe-start .item-options-start .item-option-expandable{padding-right:100%;-ms-flex-order:-1;order:-1;-webkit-transition-duration:0.6s;transition-duration:0.6s;-webkit-transition-property:padding-right;transition-property:padding-right}:host-context([dir=rtl]) .item-sliding-active-swipe-start .item-options-start .item-option-expandable{-ms-flex-order:1;order:1}[dir=rtl] .item-sliding-active-swipe-start .item-options-start .item-option-expandable{-ms-flex-order:1;order:1}@supports selector(:dir(rtl)){.item-sliding-active-swipe-start .item-options-start .item-option-expandable:dir(rtl){-ms-flex-order:1;order:1}}";
var SWIPE_MARGIN = 30;
var ELASTIC_FACTOR = 0.55;
var openSlidingItem;
var ItemSliding = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionDrag = createEvent(this, "ionDrag", 7);
    this.item = null;
    this.openAmount = 0;
    this.initialOpenAmount = 0;
    this.optsWidthRightSide = 0;
    this.optsWidthLeftSide = 0;
    this.sides = 0;
    this.optsDirty = true;
    this.contentEl = null;
    this.initialContentScrollY = true;
    this.state = 2;
    this.disabled = false;
  }
  disabledChanged() {
    if (this.gesture) {
      this.gesture.enable(!this.disabled);
    }
  }
  connectedCallback() {
    return __async(this, null, function* () {
      const {
        el
      } = this;
      this.item = el.querySelector("ion-item");
      this.contentEl = findClosestIonContent(el);
      this.mutationObserver = watchForOptions(el, "ion-item-option", () => __async(this, null, function* () {
        yield this.updateOptions();
      }));
      yield this.updateOptions();
      this.gesture = (yield import("./index-CfgBF1SE-H675UNH5.js")).createGesture({
        el,
        gestureName: "item-swipe",
        gesturePriority: 100,
        threshold: 5,
        canStart: (ev) => this.canStart(ev),
        onStart: () => this.onStart(),
        onMove: (ev) => this.onMove(ev),
        onEnd: (ev) => this.onEnd(ev)
      });
      this.disabledChanged();
    });
  }
  disconnectedCallback() {
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = void 0;
    }
    this.item = null;
    this.leftOptions = this.rightOptions = void 0;
    if (openSlidingItem === this.el) {
      openSlidingItem = void 0;
    }
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
      this.mutationObserver = void 0;
    }
  }
  /**
   * Get the amount the item is open in pixels.
   */
  getOpenAmount() {
    return Promise.resolve(this.openAmount);
  }
  /**
   * Get the ratio of the open amount of the item compared to the width of the options.
   * If the number returned is positive, then the options on the right side are open.
   * If the number returned is negative, then the options on the left side are open.
   * If the absolute value of the number is greater than 1, the item is open more than
   * the width of the options.
   */
  getSlidingRatio() {
    return Promise.resolve(this.getSlidingRatioSync());
  }
  /**
   * Open the sliding item.
   *
   * @param side The side of the options to open. If a side is not provided, it will open the first set of options it finds within the item.
   */
  open(side) {
    return __async(this, null, function* () {
      var _a;
      const item = this.item = (_a = this.item) !== null && _a !== void 0 ? _a : this.el.querySelector("ion-item");
      if (item === null) {
        return;
      }
      const optionsToOpen = this.getOptions(side);
      if (!optionsToOpen) {
        return;
      }
      if (side === void 0) {
        side = optionsToOpen === this.leftOptions ? "start" : "end";
      }
      side = isEndSide(side) ? "end" : "start";
      const isStartOpen = this.openAmount < 0;
      const isEndOpen = this.openAmount > 0;
      if (isStartOpen && optionsToOpen === this.leftOptions) {
        return;
      }
      if (isEndOpen && optionsToOpen === this.rightOptions) {
        return;
      }
      this.closeOpened();
      this.state = 4;
      requestAnimationFrame(() => {
        this.calculateOptsWidth();
        const width = side === "end" ? this.optsWidthRightSide : -this.optsWidthLeftSide;
        openSlidingItem = this.el;
        this.setOpenAmount(width, false);
        this.state = side === "end" ? 8 : 16;
      });
    });
  }
  /**
   * Close the sliding item. Items can also be closed from the [List](./list).
   */
  close() {
    return __async(this, null, function* () {
      this.setOpenAmount(0, true);
    });
  }
  /**
   * Close all of the sliding items in the list. Items can also be closed from the [List](./list).
   */
  closeOpened() {
    return __async(this, null, function* () {
      if (openSlidingItem !== void 0) {
        openSlidingItem.close();
        openSlidingItem = void 0;
        return true;
      }
      return false;
    });
  }
  /**
   * Given an optional side, return the ion-item-options element.
   *
   * @param side This side of the options to get. If a side is not provided it will
   * return the first one available.
   */
  getOptions(side) {
    if (side === void 0) {
      return this.leftOptions || this.rightOptions;
    } else if (side === "start") {
      return this.leftOptions;
    } else {
      return this.rightOptions;
    }
  }
  updateOptions() {
    return __async(this, null, function* () {
      var _a;
      const options = this.el.querySelectorAll("ion-item-options");
      let sides = 0;
      this.leftOptions = this.rightOptions = void 0;
      for (let i = 0; i < options.length; i++) {
        const item = options.item(i);
        const option = item.componentOnReady !== void 0 ? yield item.componentOnReady() : item;
        const side = isEndSide((_a = option.side) !== null && _a !== void 0 ? _a : option.getAttribute("side")) ? "end" : "start";
        if (side === "start") {
          this.leftOptions = option;
          sides |= 1;
        } else {
          this.rightOptions = option;
          sides |= 2;
        }
      }
      this.optsDirty = true;
      this.sides = sides;
    });
  }
  canStart(gesture) {
    const rtl = document.dir === "rtl";
    const atEdge = rtl ? window.innerWidth - gesture.startX < 15 : gesture.startX < 15;
    if (atEdge) {
      return false;
    }
    const selected = openSlidingItem;
    if (selected && selected !== this.el) {
      this.closeOpened();
    }
    return !!(this.rightOptions || this.leftOptions);
  }
  onStart() {
    this.item = this.el.querySelector("ion-item");
    const {
      contentEl
    } = this;
    if (contentEl) {
      this.initialContentScrollY = disableContentScrollY(contentEl);
    }
    openSlidingItem = this.el;
    if (this.tmr !== void 0) {
      clearTimeout(this.tmr);
      this.tmr = void 0;
    }
    if (this.openAmount === 0) {
      this.optsDirty = true;
      this.state = 4;
    }
    this.initialOpenAmount = this.openAmount;
    if (this.item) {
      this.item.style.transition = "none";
    }
  }
  onMove(gesture) {
    if (this.optsDirty) {
      this.calculateOptsWidth();
    }
    let openAmount = this.initialOpenAmount - gesture.deltaX;
    switch (this.sides) {
      case 2:
        openAmount = Math.max(0, openAmount);
        break;
      case 1:
        openAmount = Math.min(0, openAmount);
        break;
      case 3:
        break;
      case 0:
        return;
      default:
        printIonWarning("[ion-item-sliding] - invalid ItemSideFlags value", this.sides);
        break;
    }
    let optsWidth;
    if (openAmount > this.optsWidthRightSide) {
      optsWidth = this.optsWidthRightSide;
      openAmount = optsWidth + (openAmount - optsWidth) * ELASTIC_FACTOR;
    } else if (openAmount < -this.optsWidthLeftSide) {
      optsWidth = -this.optsWidthLeftSide;
      openAmount = optsWidth + (openAmount - optsWidth) * ELASTIC_FACTOR;
    }
    this.setOpenAmount(openAmount, false);
  }
  onEnd(gesture) {
    const {
      contentEl,
      initialContentScrollY
    } = this;
    if (contentEl) {
      resetContentScrollY(contentEl, initialContentScrollY);
    }
    const velocity = gesture.velocityX;
    let restingPoint = this.openAmount > 0 ? this.optsWidthRightSide : -this.optsWidthLeftSide;
    const isResetDirection = this.openAmount > 0 === !(velocity < 0);
    const isMovingFast = Math.abs(velocity) > 0.3;
    const isOnCloseZone = Math.abs(this.openAmount) < Math.abs(restingPoint / 2);
    if (swipeShouldReset(isResetDirection, isMovingFast, isOnCloseZone)) {
      restingPoint = 0;
    }
    const state = this.state;
    this.setOpenAmount(restingPoint, true);
    if ((state & 32) !== 0 && this.rightOptions) {
      this.rightOptions.fireSwipeEvent();
    } else if ((state & 64) !== 0 && this.leftOptions) {
      this.leftOptions.fireSwipeEvent();
    }
  }
  calculateOptsWidth() {
    this.optsWidthRightSide = 0;
    if (this.rightOptions) {
      this.rightOptions.style.display = "flex";
      this.optsWidthRightSide = this.rightOptions.offsetWidth;
      this.rightOptions.style.display = "";
    }
    this.optsWidthLeftSide = 0;
    if (this.leftOptions) {
      this.leftOptions.style.display = "flex";
      this.optsWidthLeftSide = this.leftOptions.offsetWidth;
      this.leftOptions.style.display = "";
    }
    this.optsDirty = false;
  }
  setOpenAmount(openAmount, isFinal) {
    if (this.tmr !== void 0) {
      clearTimeout(this.tmr);
      this.tmr = void 0;
    }
    if (!this.item) {
      return;
    }
    const {
      el
    } = this;
    const style = this.item.style;
    this.openAmount = openAmount;
    if (isFinal) {
      style.transition = "";
    }
    if (openAmount > 0) {
      this.state = openAmount >= this.optsWidthRightSide + SWIPE_MARGIN ? 8 | 32 : 8;
    } else if (openAmount < 0) {
      this.state = openAmount <= -this.optsWidthLeftSide - SWIPE_MARGIN ? 16 | 64 : 16;
    } else {
      el.classList.add("item-sliding-closing");
      if (this.gesture) {
        this.gesture.enable(false);
      }
      this.tmr = setTimeout(() => {
        this.state = 2;
        this.tmr = void 0;
        if (this.gesture) {
          this.gesture.enable(!this.disabled);
        }
        el.classList.remove("item-sliding-closing");
      }, 600);
      openSlidingItem = void 0;
      style.transform = "";
      return;
    }
    style.transform = `translate3d(${-openAmount}px,0,0)`;
    this.ionDrag.emit({
      amount: openAmount,
      ratio: this.getSlidingRatioSync()
    });
  }
  getSlidingRatioSync() {
    if (this.openAmount > 0) {
      return this.openAmount / this.optsWidthRightSide;
    } else if (this.openAmount < 0) {
      return this.openAmount / this.optsWidthLeftSide;
    } else {
      return 0;
    }
  }
  render() {
    const mode = getIonMode(this);
    return h(Host, {
      key: "d812322c9fb5da4ee16e99dc38bfb24cb4590d03",
      class: {
        [mode]: true,
        "item-sliding-active-slide": this.state !== 2,
        "item-sliding-active-options-end": (this.state & 8) !== 0,
        "item-sliding-active-options-start": (this.state & 16) !== 0,
        "item-sliding-active-swipe-end": (this.state & 32) !== 0,
        "item-sliding-active-swipe-start": (this.state & 64) !== 0
      }
    });
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "disabled": ["disabledChanged"]
    };
  }
};
var swipeShouldReset = (isResetDirection, isMovingFast, isOnResetZone) => {
  return !isMovingFast && isOnResetZone || isResetDirection && isMovingFast;
};
ItemSliding.style = itemSlidingCss;
export {
  ItemOption as ion_item_option,
  ItemOptions as ion_item_options,
  ItemSliding as ion_item_sliding
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-item-option_3.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24taXRlbS1vcHRpb25fMy5lbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBoLCBkIGFzIEhvc3QsIGcgYXMgZ2V0RWxlbWVudCwgYyBhcyBjcmVhdGVFdmVudCwgZiBhcyBwcmludElvbldhcm5pbmcgfSBmcm9tICcuL2luZGV4LTREeFk2X2dHLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlQ29sb3JDbGFzc2VzIH0gZnJvbSAnLi90aGVtZS1EaVZKeXFsWC5qcyc7XG5pbXBvcnQgeyBiIGFzIGdldElvbk1vZGUgfSBmcm9tICcuL2lvbmljLWdsb2JhbC1DVFN5dWZoRi5qcyc7XG5pbXBvcnQgeyBvIGFzIGlzRW5kU2lkZSB9IGZyb20gJy4vaGVscGVycy04S1NRUUdReS5qcyc7XG5pbXBvcnQgeyBmIGFzIGZpbmRDbG9zZXN0SW9uQ29udGVudCwgZCBhcyBkaXNhYmxlQ29udGVudFNjcm9sbFksIHIgYXMgcmVzZXRDb250ZW50U2Nyb2xsWSB9IGZyb20gJy4vaW5kZXgtN1ViU2x2N04uanMnO1xuaW1wb3J0IHsgdyBhcyB3YXRjaEZvck9wdGlvbnMgfSBmcm9tICcuL3dhdGNoLW9wdGlvbnMtRHRkbThsS0MuanMnO1xuY29uc3QgaXRlbU9wdGlvbklvc0NzcyA9IFwiOmhvc3R7LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMDA1NGU5KTstLWNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LCAjZmZmKTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2NvbG9yOnZhcigtLWNvbG9yKTtmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHksIGluaGVyaXQpfTpob3N0KC5pb24tY29sb3Ipe2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWJhc2UpO2NvbG9yOnZhcigtLWlvbi1jb2xvci1jb250cmFzdCl9LmJ1dHRvbi1uYXRpdmV7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6aW5oZXJpdDtmb250LXN0eWxlOmluaGVyaXQ7Zm9udC13ZWlnaHQ6aW5oZXJpdDtsZXR0ZXItc3BhY2luZzppbmhlcml0O3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3RleHQtaW5kZW50OmluaGVyaXQ7dGV4dC1vdmVyZmxvdzppbmhlcml0O3RleHQtdHJhbnNmb3JtOmluaGVyaXQ7dGV4dC1hbGlnbjppbmhlcml0O3doaXRlLXNwYWNlOmluaGVyaXQ7Y29sb3I6aW5oZXJpdDstd2Via2l0LXBhZGRpbmctc3RhcnQ6MC43ZW07cGFkZGluZy1pbmxpbmUtc3RhcnQ6MC43ZW07LXdlYmtpdC1wYWRkaW5nLWVuZDowLjdlbTtwYWRkaW5nLWlubGluZS1lbmQ6MC43ZW07cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Ym9yZGVyOjA7b3V0bGluZTpub25lO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Y3Vyc29yOnBvaW50ZXI7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lOy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveH0uYnV0dG9uLWlubmVye2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWZsb3c6Y29sdW1uIG5vd3JhcDtmbGV4LWZsb3c6Y29sdW1uIG5vd3JhcDstbXMtZmxleC1uZWdhdGl2ZTowO2ZsZXgtc2hyaW5rOjA7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9Lmhvcml6b250YWwtd3JhcHBlcntkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1mbG93OnJvdyBub3dyYXA7ZmxleC1mbG93OnJvdyBub3dyYXA7LW1zLWZsZXgtbmVnYXRpdmU6MDtmbGV4LXNocmluazowOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDoxMDAlfTo6c2xvdHRlZCgqKXstbXMtZmxleC1uZWdhdGl2ZTowO2ZsZXgtc2hyaW5rOjB9OjpzbG90dGVkKFtzbG90PXN0YXJ0XSl7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MDttYXJnaW4taW5saW5lLXN0YXJ0OjA7LXdlYmtpdC1tYXJnaW4tZW5kOjVweDttYXJnaW4taW5saW5lLWVuZDo1cHg7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MH06OnNsb3R0ZWQoW3Nsb3Q9ZW5kXSl7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6NXB4O21hcmdpbi1pbmxpbmUtc3RhcnQ6NXB4Oy13ZWJraXQtbWFyZ2luLWVuZDowO21hcmdpbi1pbmxpbmUtZW5kOjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MH06OnNsb3R0ZWQoW3Nsb3Q9aWNvbi1vbmx5XSl7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDstd2Via2l0LW1hcmdpbi1zdGFydDoxMHB4O21hcmdpbi1pbmxpbmUtc3RhcnQ6MTBweDstd2Via2l0LW1hcmdpbi1lbmQ6MTBweDttYXJnaW4taW5saW5lLWVuZDoxMHB4O21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7bWluLXdpZHRoOjAuOWVtO2ZvbnQtc2l6ZToxLjhlbX06aG9zdCguaXRlbS1vcHRpb24tZXhwYW5kYWJsZSl7LW1zLWZsZXgtbmVnYXRpdmU6MDtmbGV4LXNocmluazowOy13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjowO3RyYW5zaXRpb24tZHVyYXRpb246MDstd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6bm9uZTt0cmFuc2l0aW9uLXByb3BlcnR5Om5vbmU7LXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoMC42NSwgMC4wNSwgMC4zNiwgMSk7dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAuNjUsIDAuMDUsIDAuMzYsIDEpfTpob3N0KC5pdGVtLW9wdGlvbi1kaXNhYmxlZCl7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdCguaXRlbS1vcHRpb24tZGlzYWJsZWQpIC5idXR0b24tbmF0aXZle2N1cnNvcjpkZWZhdWx0O29wYWNpdHk6MC41O3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3R7Zm9udC1zaXplOmNsYW1wKDE2cHgsIDFyZW0sIDM1LjJweCl9Omhvc3QoLmlvbi1hY3RpdmF0ZWQpe2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUsICMwMDRhY2QpfTpob3N0KC5pb24tY29sb3IuaW9uLWFjdGl2YXRlZCl7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3Itc2hhZGUpfVwiO1xuY29uc3QgaXRlbU9wdGlvbk1kQ3NzID0gXCI6aG9zdHstLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMwMDU0ZTkpOy0tY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QsICNmZmYpO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7Y29sb3I6dmFyKC0tY29sb3IpO2ZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseSwgaW5oZXJpdCl9Omhvc3QoLmlvbi1jb2xvcil7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItYmFzZSk7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KX0uYnV0dG9uLW5hdGl2ZXtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZTppbmhlcml0O2ZvbnQtc3R5bGU6aW5oZXJpdDtmb250LXdlaWdodDppbmhlcml0O2xldHRlci1zcGFjaW5nOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC1pbmRlbnQ6aW5oZXJpdDt0ZXh0LW92ZXJmbG93OmluaGVyaXQ7dGV4dC10cmFuc2Zvcm06aW5oZXJpdDt0ZXh0LWFsaWduOmluaGVyaXQ7d2hpdGUtc3BhY2U6aW5oZXJpdDtjb2xvcjppbmhlcml0Oy13ZWJraXQtcGFkZGluZy1zdGFydDowLjdlbTtwYWRkaW5nLWlubGluZS1zdGFydDowLjdlbTstd2Via2l0LXBhZGRpbmctZW5kOjAuN2VtO3BhZGRpbmctaW5saW5lLWVuZDowLjdlbTtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjA7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtib3JkZXI6MDtvdXRsaW5lOm5vbmU7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtjdXJzb3I6cG9pbnRlcjstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmU7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94fS5idXR0b24taW5uZXJ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZmxvdzpjb2x1bW4gbm93cmFwO2ZsZXgtZmxvdzpjb2x1bW4gbm93cmFwOy1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX0uaG9yaXpvbnRhbC13cmFwcGVye2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWZsb3c6cm93IG5vd3JhcDtmbGV4LWZsb3c6cm93IG5vd3JhcDstbXMtZmxleC1uZWdhdGl2ZTowO2ZsZXgtc2hyaW5rOjA7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjEwMCV9OjpzbG90dGVkKCopey1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MH06OnNsb3R0ZWQoW3Nsb3Q9c3RhcnRdKXstd2Via2l0LW1hcmdpbi1zdGFydDowO21hcmdpbi1pbmxpbmUtc3RhcnQ6MDstd2Via2l0LW1hcmdpbi1lbmQ6NXB4O21hcmdpbi1pbmxpbmUtZW5kOjVweDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfTo6c2xvdHRlZChbc2xvdD1lbmRdKXstd2Via2l0LW1hcmdpbi1zdGFydDo1cHg7bWFyZ2luLWlubGluZS1zdGFydDo1cHg7LXdlYmtpdC1tYXJnaW4tZW5kOjA7bWFyZ2luLWlubGluZS1lbmQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfTo6c2xvdHRlZChbc2xvdD1pY29uLW9ubHldKXtwYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjA7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowOy13ZWJraXQtbWFyZ2luLXN0YXJ0OjEwcHg7bWFyZ2luLWlubGluZS1zdGFydDoxMHB4Oy13ZWJraXQtbWFyZ2luLWVuZDoxMHB4O21hcmdpbi1pbmxpbmUtZW5kOjEwcHg7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDttaW4td2lkdGg6MC45ZW07Zm9udC1zaXplOjEuOGVtfTpob3N0KC5pdGVtLW9wdGlvbi1leHBhbmRhYmxlKXstbXMtZmxleC1uZWdhdGl2ZTowO2ZsZXgtc2hyaW5rOjA7LXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOjA7dHJhbnNpdGlvbi1kdXJhdGlvbjowOy13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTpub25lO3RyYW5zaXRpb24tcHJvcGVydHk6bm9uZTstd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllcigwLjY1LCAwLjA1LCAwLjM2LCAxKTt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoMC42NSwgMC4wNSwgMC4zNiwgMSl9Omhvc3QoLml0ZW0tb3B0aW9uLWRpc2FibGVkKXtwb2ludGVyLWV2ZW50czpub25lfTpob3N0KC5pdGVtLW9wdGlvbi1kaXNhYmxlZCkgLmJ1dHRvbi1uYXRpdmV7Y3Vyc29yOmRlZmF1bHQ7b3BhY2l0eTowLjU7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdHtmb250LXNpemU6MC44NzVyZW07Zm9udC13ZWlnaHQ6NTAwO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZX1cIjtcbmNvbnN0IEl0ZW1PcHRpb24gPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIC8qKlxuICAgICAqIElmIGB0cnVlYCwgdGhlIHVzZXIgY2Fubm90IGludGVyYWN0IHdpdGggdGhlIGl0ZW0gb3B0aW9uLlxuICAgICAqL1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBvcHRpb24gd2lsbCBleHBhbmQgdG8gdGFrZSB1cCB0aGUgYXZhaWxhYmxlIHdpZHRoIGFuZCBjb3ZlciBhbnkgb3RoZXIgb3B0aW9ucy5cbiAgICAgKi9cbiAgICB0aGlzLmV4cGFuZGFibGUgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBUaGUgdHlwZSBvZiB0aGUgYnV0dG9uLlxuICAgICAqL1xuICAgIHRoaXMudHlwZSA9ICdidXR0b24nO1xuICAgIHRoaXMub25DbGljayA9IGV2ID0+IHtcbiAgICAgIGNvbnN0IGVsID0gZXYudGFyZ2V0LmNsb3Nlc3QoJ2lvbi1pdGVtLW9wdGlvbicpO1xuICAgICAgaWYgKGVsKSB7XG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZGlzYWJsZWQsXG4gICAgICBleHBhbmRhYmxlLFxuICAgICAgaHJlZlxuICAgIH0gPSB0aGlzO1xuICAgIGNvbnN0IFRhZ1R5cGUgPSBocmVmID09PSB1bmRlZmluZWQgPyAnYnV0dG9uJyA6ICdhJztcbiAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICBjb25zdCBhdHRycyA9IFRhZ1R5cGUgPT09ICdidXR0b24nID8ge1xuICAgICAgdHlwZTogdGhpcy50eXBlXG4gICAgfSA6IHtcbiAgICAgIGRvd25sb2FkOiB0aGlzLmRvd25sb2FkLFxuICAgICAgaHJlZjogdGhpcy5ocmVmLFxuICAgICAgdGFyZ2V0OiB0aGlzLnRhcmdldFxuICAgIH07XG4gICAgcmV0dXJuIGgoSG9zdCwge1xuICAgICAga2V5OiAnMTg5YTAwNDBiOTcxNjNiMjMzNmJmMjE2YmFhNzFkNTg0YzU5MjNhOCcsXG4gICAgICBvbkNsaWNrOiB0aGlzLm9uQ2xpY2ssXG4gICAgICBjbGFzczogY3JlYXRlQ29sb3JDbGFzc2VzKHRoaXMuY29sb3IsIHtcbiAgICAgICAgW21vZGVdOiB0cnVlLFxuICAgICAgICAnaXRlbS1vcHRpb24tZGlzYWJsZWQnOiBkaXNhYmxlZCxcbiAgICAgICAgJ2l0ZW0tb3B0aW9uLWV4cGFuZGFibGUnOiBleHBhbmRhYmxlLFxuICAgICAgICAnaW9uLWFjdGl2YXRhYmxlJzogdHJ1ZVxuICAgICAgfSlcbiAgICB9LCBoKFRhZ1R5cGUsIE9iamVjdC5hc3NpZ24oe1xuICAgICAga2V5OiAnNWE3MTQwZWI5OWRhNWVjODJmZTJlYTNlYTEzNDUxMzEzMDc2MzM5OSdcbiAgICB9LCBhdHRycywge1xuICAgICAgY2xhc3M6IFwiYnV0dG9uLW5hdGl2ZVwiLFxuICAgICAgcGFydDogXCJuYXRpdmVcIixcbiAgICAgIGRpc2FibGVkOiBkaXNhYmxlZFxuICAgIH0pLCBoKFwic3BhblwiLCB7XG4gICAgICBrZXk6ICc5Yjg1NzdlNjEyNzA2YjQzZTU3NWM5YTIwZjJmOWQzNWMwZDFiY2IxJyxcbiAgICAgIGNsYXNzOiBcImJ1dHRvbi1pbm5lclwiXG4gICAgfSwgaChcInNsb3RcIiwge1xuICAgICAga2V5OiAnOWFjYjgyZjA0ZTQ4MjJiZmFhMzYzY2MyYzRkMjlkNWMwZmVjMGFkNicsXG4gICAgICBuYW1lOiBcInRvcFwiXG4gICAgfSksIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnNjZmNWZiNGZkZDBjMzlmMjA1NTc0YzYwMmM3OTNkY2YxMDljN2ExNycsXG4gICAgICBjbGFzczogXCJob3Jpem9udGFsLXdyYXBwZXJcIlxuICAgIH0sIGgoXCJzbG90XCIsIHtcbiAgICAgIGtleTogJzM3NjFhMzJiY2E3YzZjNDFiN2ViMzk0MDQ1NDk3Y2ZkZTE4MWE2MmEnLFxuICAgICAgbmFtZTogXCJzdGFydFwiXG4gICAgfSksIGgoXCJzbG90XCIsIHtcbiAgICAgIGtleTogJ2E5NmE1Njg5NTVjZjY5NjI4ODNkYzY3NzE3MjZkM2QwNzQ2MmRhMDAnLFxuICAgICAgbmFtZTogXCJpY29uLW9ubHlcIlxuICAgIH0pLCBoKFwic2xvdFwiLCB7XG4gICAgICBrZXk6ICdhZjVkZmU1ZWI0MTQ1NmI5MzU5YmFmZTM2MTViNTc2NjE3ZWQ3YjU3J1xuICAgIH0pLCBoKFwic2xvdFwiLCB7XG4gICAgICBrZXk6ICcwMDQyNjk1ODA2NmFiN2I5NDlmZjk2NmZhYmFkNWNmOGEwYjU0MDc5JyxcbiAgICAgIG5hbWU6IFwiZW5kXCJcbiAgICB9KSksIGgoXCJzbG90XCIsIHtcbiAgICAgIGtleTogJ2FlNjZjOGJkNTM2YTlmMjc4NjVmNDkyNDA5ODBkN2I0YjgzMWIyMjknLFxuICAgICAgbmFtZTogXCJib3R0b21cIlxuICAgIH0pKSwgbW9kZSA9PT0gJ21kJyAmJiBoKFwiaW9uLXJpcHBsZS1lZmZlY3RcIiwge1xuICAgICAga2V5OiAnMzBkZjZjOTM1ZWY4YTNmMjhhNmJjMWYzYmIxNjJjYTRmODBhYWYyNidcbiAgICB9KSkpO1xuICB9XG4gIGdldCBlbCgpIHtcbiAgICByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTtcbiAgfVxufTtcbkl0ZW1PcHRpb24uc3R5bGUgPSB7XG4gIGlvczogaXRlbU9wdGlvbklvc0NzcyxcbiAgbWQ6IGl0ZW1PcHRpb25NZENzc1xufTtcbmNvbnN0IGl0ZW1PcHRpb25zSW9zQ3NzID0gXCJpb24taXRlbS1vcHRpb25ze3RvcDowO3JpZ2h0OjA7LW1zLWZsZXgtcGFjazplbmQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kO2Rpc3BsYXk6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6MTAwJTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7ei1pbmRleDoxfTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSBpb24taXRlbS1vcHRpb25zey1tcy1mbGV4LXBhY2s6c3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIGlvbi1pdGVtLW9wdGlvbnM6bm90KC5pdGVtLW9wdGlvbnMtZW5kKXtyaWdodDphdXRvO2xlZnQ6MDstbXMtZmxleC1wYWNrOmVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9W2Rpcj1ydGxdIGlvbi1pdGVtLW9wdGlvbnN7LW1zLWZsZXgtcGFjazpzdGFydDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydH1bZGlyPXJ0bF0gaW9uLWl0ZW0tb3B0aW9uczpub3QoLml0ZW0tb3B0aW9ucy1lbmQpe3JpZ2h0OmF1dG87bGVmdDowOy1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZH1Ac3VwcG9ydHMgc2VsZWN0b3IoOmRpcihydGwpKXtpb24taXRlbS1vcHRpb25zOmRpcihydGwpey1tcy1mbGV4LXBhY2s6c3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9aW9uLWl0ZW0tb3B0aW9uczpkaXIocnRsKTpub3QoLml0ZW0tb3B0aW9ucy1lbmQpe3JpZ2h0OmF1dG87bGVmdDowOy1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZH19Lml0ZW0tb3B0aW9ucy1zdGFydHtyaWdodDphdXRvO2xlZnQ6MDstbXMtZmxleC1wYWNrOnN0YXJ0O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaXRlbS1vcHRpb25zLXN0YXJ0ey1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZH1bZGlyPXJ0bF0gLml0ZW0tb3B0aW9ucy1zdGFydHstbXMtZmxleC1wYWNrOmVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9QHN1cHBvcnRzIHNlbGVjdG9yKDpkaXIocnRsKSl7Lml0ZW0tb3B0aW9ucy1zdGFydDpkaXIocnRsKXstbXMtZmxleC1wYWNrOmVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9fVtkaXI9bHRyXSAuaXRlbS1vcHRpb25zLXN0YXJ0IGlvbi1pdGVtLW9wdGlvbjpmaXJzdC1jaGlsZCxbZGlyPXJ0bF0gLml0ZW0tb3B0aW9ucy1zdGFydCBpb24taXRlbS1vcHRpb246bGFzdC1jaGlsZHtwYWRkaW5nLWxlZnQ6dmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KX1bZGlyPWx0cl0gLml0ZW0tb3B0aW9ucy1lbmQgaW9uLWl0ZW0tb3B0aW9uOmxhc3QtY2hpbGQsW2Rpcj1ydGxdIC5pdGVtLW9wdGlvbnMtZW5kIGlvbi1pdGVtLW9wdGlvbjpmaXJzdC1jaGlsZHtwYWRkaW5nLXJpZ2h0OnZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpfTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaXRlbS1zbGlkaW5nLWFjdGl2ZS1zbGlkZS5pdGVtLXNsaWRpbmctYWN0aXZlLW9wdGlvbnMtc3RhcnQgaW9uLWl0ZW0tb3B0aW9uczpub3QoLml0ZW0tb3B0aW9ucy1lbmQpe3dpZHRoOjEwMCU7dmlzaWJpbGl0eTp2aXNpYmxlfVtkaXI9cnRsXSAuaXRlbS1zbGlkaW5nLWFjdGl2ZS1zbGlkZS5pdGVtLXNsaWRpbmctYWN0aXZlLW9wdGlvbnMtc3RhcnQgaW9uLWl0ZW0tb3B0aW9uczpub3QoLml0ZW0tb3B0aW9ucy1lbmQpe3dpZHRoOjEwMCU7dmlzaWJpbGl0eTp2aXNpYmxlfUBzdXBwb3J0cyBzZWxlY3Rvcig6ZGlyKHJ0bCkpey5pdGVtLXNsaWRpbmctYWN0aXZlLXNsaWRlOmRpcihydGwpLml0ZW0tc2xpZGluZy1hY3RpdmUtb3B0aW9ucy1zdGFydCBpb24taXRlbS1vcHRpb25zOm5vdCguaXRlbS1vcHRpb25zLWVuZCl7d2lkdGg6MTAwJTt2aXNpYmlsaXR5OnZpc2libGV9fS5pdGVtLXNsaWRpbmctYWN0aXZlLXNsaWRlIGlvbi1pdGVtLW9wdGlvbnN7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7dmlzaWJpbGl0eTpoaWRkZW59Lml0ZW0tc2xpZGluZy1hY3RpdmUtc2xpZGUuaXRlbS1zbGlkaW5nLWFjdGl2ZS1vcHRpb25zLXN0YXJ0IC5pdGVtLW9wdGlvbnMtc3RhcnQsLml0ZW0tc2xpZGluZy1hY3RpdmUtc2xpZGUuaXRlbS1zbGlkaW5nLWFjdGl2ZS1vcHRpb25zLWVuZCBpb24taXRlbS1vcHRpb25zOm5vdCguaXRlbS1vcHRpb25zLXN0YXJ0KXt3aWR0aDoxMDAlO3Zpc2liaWxpdHk6dmlzaWJsZX0uaXRlbS1vcHRpb25zLWlvc3tib3JkZXItYm90dG9tLXdpZHRoOjA7Ym9yZGVyLWJvdHRvbS1zdHlsZTpzb2xpZDtib3JkZXItYm90dG9tLWNvbG9yOnZhcigtLWlvbi1pdGVtLWJvcmRlci1jb2xvciwgdmFyKC0taW9uLWJvcmRlci1jb2xvciwgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjUwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTI1MCwgI2M4YzdjYykpKSl9Lml0ZW0tb3B0aW9ucy1pb3MuaXRlbS1vcHRpb25zLWVuZHtib3JkZXItYm90dG9tLXdpZHRoOjAuNTVweH0ubGlzdC1pb3MtbGluZXMtbm9uZSAuaXRlbS1vcHRpb25zLWlvc3tib3JkZXItYm90dG9tLXdpZHRoOjB9Lmxpc3QtaW9zLWxpbmVzLWZ1bGwgLml0ZW0tb3B0aW9ucy1pb3MsLmxpc3QtaW9zLWxpbmVzLWluc2V0IC5pdGVtLW9wdGlvbnMtaW9zLml0ZW0tb3B0aW9ucy1lbmR7Ym9yZGVyLWJvdHRvbS13aWR0aDowLjU1cHh9XCI7XG5jb25zdCBpdGVtT3B0aW9uc01kQ3NzID0gXCJpb24taXRlbS1vcHRpb25ze3RvcDowO3JpZ2h0OjA7LW1zLWZsZXgtcGFjazplbmQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kO2Rpc3BsYXk6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTtoZWlnaHQ6MTAwJTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7ei1pbmRleDoxfTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSBpb24taXRlbS1vcHRpb25zey1tcy1mbGV4LXBhY2s6c3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIGlvbi1pdGVtLW9wdGlvbnM6bm90KC5pdGVtLW9wdGlvbnMtZW5kKXtyaWdodDphdXRvO2xlZnQ6MDstbXMtZmxleC1wYWNrOmVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9W2Rpcj1ydGxdIGlvbi1pdGVtLW9wdGlvbnN7LW1zLWZsZXgtcGFjazpzdGFydDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydH1bZGlyPXJ0bF0gaW9uLWl0ZW0tb3B0aW9uczpub3QoLml0ZW0tb3B0aW9ucy1lbmQpe3JpZ2h0OmF1dG87bGVmdDowOy1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZH1Ac3VwcG9ydHMgc2VsZWN0b3IoOmRpcihydGwpKXtpb24taXRlbS1vcHRpb25zOmRpcihydGwpey1tcy1mbGV4LXBhY2s6c3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9aW9uLWl0ZW0tb3B0aW9uczpkaXIocnRsKTpub3QoLml0ZW0tb3B0aW9ucy1lbmQpe3JpZ2h0OmF1dG87bGVmdDowOy1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZH19Lml0ZW0tb3B0aW9ucy1zdGFydHtyaWdodDphdXRvO2xlZnQ6MDstbXMtZmxleC1wYWNrOnN0YXJ0O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaXRlbS1vcHRpb25zLXN0YXJ0ey1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZH1bZGlyPXJ0bF0gLml0ZW0tb3B0aW9ucy1zdGFydHstbXMtZmxleC1wYWNrOmVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9QHN1cHBvcnRzIHNlbGVjdG9yKDpkaXIocnRsKSl7Lml0ZW0tb3B0aW9ucy1zdGFydDpkaXIocnRsKXstbXMtZmxleC1wYWNrOmVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9fVtkaXI9bHRyXSAuaXRlbS1vcHRpb25zLXN0YXJ0IGlvbi1pdGVtLW9wdGlvbjpmaXJzdC1jaGlsZCxbZGlyPXJ0bF0gLml0ZW0tb3B0aW9ucy1zdGFydCBpb24taXRlbS1vcHRpb246bGFzdC1jaGlsZHtwYWRkaW5nLWxlZnQ6dmFyKC0taW9uLXNhZmUtYXJlYS1sZWZ0KX1bZGlyPWx0cl0gLml0ZW0tb3B0aW9ucy1lbmQgaW9uLWl0ZW0tb3B0aW9uOmxhc3QtY2hpbGQsW2Rpcj1ydGxdIC5pdGVtLW9wdGlvbnMtZW5kIGlvbi1pdGVtLW9wdGlvbjpmaXJzdC1jaGlsZHtwYWRkaW5nLXJpZ2h0OnZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQpfTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaXRlbS1zbGlkaW5nLWFjdGl2ZS1zbGlkZS5pdGVtLXNsaWRpbmctYWN0aXZlLW9wdGlvbnMtc3RhcnQgaW9uLWl0ZW0tb3B0aW9uczpub3QoLml0ZW0tb3B0aW9ucy1lbmQpe3dpZHRoOjEwMCU7dmlzaWJpbGl0eTp2aXNpYmxlfVtkaXI9cnRsXSAuaXRlbS1zbGlkaW5nLWFjdGl2ZS1zbGlkZS5pdGVtLXNsaWRpbmctYWN0aXZlLW9wdGlvbnMtc3RhcnQgaW9uLWl0ZW0tb3B0aW9uczpub3QoLml0ZW0tb3B0aW9ucy1lbmQpe3dpZHRoOjEwMCU7dmlzaWJpbGl0eTp2aXNpYmxlfUBzdXBwb3J0cyBzZWxlY3Rvcig6ZGlyKHJ0bCkpey5pdGVtLXNsaWRpbmctYWN0aXZlLXNsaWRlOmRpcihydGwpLml0ZW0tc2xpZGluZy1hY3RpdmUtb3B0aW9ucy1zdGFydCBpb24taXRlbS1vcHRpb25zOm5vdCguaXRlbS1vcHRpb25zLWVuZCl7d2lkdGg6MTAwJTt2aXNpYmlsaXR5OnZpc2libGV9fS5pdGVtLXNsaWRpbmctYWN0aXZlLXNsaWRlIGlvbi1pdGVtLW9wdGlvbnN7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7dmlzaWJpbGl0eTpoaWRkZW59Lml0ZW0tc2xpZGluZy1hY3RpdmUtc2xpZGUuaXRlbS1zbGlkaW5nLWFjdGl2ZS1vcHRpb25zLXN0YXJ0IC5pdGVtLW9wdGlvbnMtc3RhcnQsLml0ZW0tc2xpZGluZy1hY3RpdmUtc2xpZGUuaXRlbS1zbGlkaW5nLWFjdGl2ZS1vcHRpb25zLWVuZCBpb24taXRlbS1vcHRpb25zOm5vdCguaXRlbS1vcHRpb25zLXN0YXJ0KXt3aWR0aDoxMDAlO3Zpc2liaWxpdHk6dmlzaWJsZX0uaXRlbS1vcHRpb25zLW1ke2JvcmRlci1ib3R0b20td2lkdGg6MDtib3JkZXItYm90dG9tLXN0eWxlOnNvbGlkO2JvcmRlci1ib3R0b20tY29sb3I6dmFyKC0taW9uLWl0ZW0tYm9yZGVyLWNvbG9yLCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yLCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXN0ZXAtMTUwLCByZ2JhKDAsIDAsIDAsIDAuMTMpKSkpKX0ubGlzdC1tZC1saW5lcy1ub25lIC5pdGVtLW9wdGlvbnMtbWR7Ym9yZGVyLWJvdHRvbS13aWR0aDowfS5saXN0LW1kLWxpbmVzLWZ1bGwgLml0ZW0tb3B0aW9ucy1tZCwubGlzdC1tZC1saW5lcy1pbnNldCAuaXRlbS1vcHRpb25zLW1kLml0ZW0tb3B0aW9ucy1lbmR7Ym9yZGVyLWJvdHRvbS13aWR0aDoxcHh9XCI7XG5jb25zdCBJdGVtT3B0aW9ucyA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5pb25Td2lwZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uU3dpcGVcIiwgNyk7XG4gICAgLyoqXG4gICAgICogVGhlIHNpZGUgdGhlIG9wdGlvbiBidXR0b24gc2hvdWxkIGJlIG9uLiBQb3NzaWJsZSB2YWx1ZXM6IGBcInN0YXJ0XCJgIGFuZCBgXCJlbmRcImAuIElmIHlvdSBoYXZlIG11bHRpcGxlIGBpb24taXRlbS1vcHRpb25zYCwgYSBzaWRlIG11c3QgYmUgcHJvdmlkZWQgZm9yIGVhY2guXG4gICAgICpcbiAgICAgKi9cbiAgICB0aGlzLnNpZGUgPSAnZW5kJztcbiAgfVxuICAvKiogQGludGVybmFsICovXG4gIGFzeW5jIGZpcmVTd2lwZUV2ZW50KCkge1xuICAgIHRoaXMuaW9uU3dpcGUuZW1pdCh7XG4gICAgICBzaWRlOiB0aGlzLnNpZGVcbiAgICB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgY29uc3QgaXNFbmQgPSBpc0VuZFNpZGUodGhpcy5zaWRlKTtcbiAgICByZXR1cm4gaChIb3N0LCB7XG4gICAgICBrZXk6ICcwNWEyMmE1MDVlMDQzYzI3MTVlMzgwNWU1ZTI2YWI0NjY4OTQwYWYwJyxcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgIFttb2RlXTogdHJ1ZSxcbiAgICAgICAgLy8gVXNlZCBpbnRlcm5hbGx5IGZvciBzdHlsaW5nXG4gICAgICAgIFtgaXRlbS1vcHRpb25zLSR7bW9kZX1gXTogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE5vdGU6IFRoZSBcInN0YXJ0XCIgYW5kIFwiZW5kXCIgdGVybXMgcmVmZXIgdG8gdGhlXG4gICAgICAgICAqIGRpcmVjdGlvbiBpb24taXRlbS1vcHRpb24gaW5zdGFuY2VzIHdpdGhpbiBpb24taXRlbS1vcHRpb25zIGZsb3cuXG4gICAgICAgICAqIFRoZXkgZG8gbm90IHJlZmVyIHRvIGhvdyBpb24taXRlbS1vcHRpb25zIGZsb3dzIHdpdGhpbiBpb24taXRlbS1zbGlkaW5nLlxuICAgICAgICAgKiBBcyBhIHJlc3VsdCwgXCJpdGVtLW9wdGlvbnMtc3RhcnRcIiBtZWFucyB0aGUgaW9uLWl0ZW0tb3B0aW9ucyBjb250YWluZXJcbiAgICAgICAgICogYWx3YXlzIGFwcGVhcnMgb24gdGhlIGxlZnQsIGFuZCBcIml0ZW0tb3B0aW9ucy1lbmRcIiBtZWFucyB0aGUgaW9uLWl0ZW0tb3B0aW9uc1xuICAgICAgICAgKiBjb250YWluZXIgYWx3YXlzIGFwcGVhcnMgb24gdGhlIHJpZ2h0LlxuICAgICAgICAgKi9cbiAgICAgICAgJ2l0ZW0tb3B0aW9ucy1zdGFydCc6ICFpc0VuZCxcbiAgICAgICAgJ2l0ZW0tb3B0aW9ucy1lbmQnOiBpc0VuZFxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGdldCBlbCgpIHtcbiAgICByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTtcbiAgfVxufTtcbkl0ZW1PcHRpb25zLnN0eWxlID0ge1xuICBpb3M6IGl0ZW1PcHRpb25zSW9zQ3NzLFxuICBtZDogaXRlbU9wdGlvbnNNZENzc1xufTtcbmNvbnN0IGl0ZW1TbGlkaW5nQ3NzID0gXCJpb24taXRlbS1zbGlkaW5ne2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJTtvdmVyZmxvdzpoaWRkZW47LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lfWlvbi1pdGVtLXNsaWRpbmcgLml0ZW17LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lfS5pdGVtLXNsaWRpbmctYWN0aXZlLXNsaWRlIC5pdGVte3Bvc2l0aW9uOnJlbGF0aXZlOy13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSA1MDBtcyBjdWJpYy1iZXppZXIoMC4zNiwgMC42NiwgMC4wNCwgMSk7dHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSA1MDBtcyBjdWJpYy1iZXppZXIoMC4zNiwgMC42NiwgMC4wNCwgMSk7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gNTAwbXMgY3ViaWMtYmV6aWVyKDAuMzYsIDAuNjYsIDAuMDQsIDEpO3RyYW5zaXRpb246dHJhbnNmb3JtIDUwMG1zIGN1YmljLWJlemllcigwLjM2LCAwLjY2LCAwLjA0LCAxKSwgLXdlYmtpdC10cmFuc2Zvcm0gNTAwbXMgY3ViaWMtYmV6aWVyKDAuMzYsIDAuNjYsIDAuMDQsIDEpO29wYWNpdHk6MTt6LWluZGV4OjI7cG9pbnRlci1ldmVudHM6bm9uZTt3aWxsLWNoYW5nZTp0cmFuc2Zvcm19Lml0ZW0tc2xpZGluZy1jbG9zaW5nIGlvbi1pdGVtLW9wdGlvbnN7cG9pbnRlci1ldmVudHM6bm9uZX0uaXRlbS1zbGlkaW5nLWFjdGl2ZS1zd2lwZS1lbmQgLml0ZW0tb3B0aW9ucy1lbmQgLml0ZW0tb3B0aW9uLWV4cGFuZGFibGV7cGFkZGluZy1sZWZ0OjEwMCU7LW1zLWZsZXgtb3JkZXI6MTtvcmRlcjoxOy13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjowLjZzO3RyYW5zaXRpb24tZHVyYXRpb246MC42czstd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6cGFkZGluZy1sZWZ0O3RyYW5zaXRpb24tcHJvcGVydHk6cGFkZGluZy1sZWZ0fTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaXRlbS1zbGlkaW5nLWFjdGl2ZS1zd2lwZS1lbmQgLml0ZW0tb3B0aW9ucy1lbmQgLml0ZW0tb3B0aW9uLWV4cGFuZGFibGV7LW1zLWZsZXgtb3JkZXI6LTE7b3JkZXI6LTF9W2Rpcj1ydGxdIC5pdGVtLXNsaWRpbmctYWN0aXZlLXN3aXBlLWVuZCAuaXRlbS1vcHRpb25zLWVuZCAuaXRlbS1vcHRpb24tZXhwYW5kYWJsZXstbXMtZmxleC1vcmRlcjotMTtvcmRlcjotMX1Ac3VwcG9ydHMgc2VsZWN0b3IoOmRpcihydGwpKXsuaXRlbS1zbGlkaW5nLWFjdGl2ZS1zd2lwZS1lbmQgLml0ZW0tb3B0aW9ucy1lbmQgLml0ZW0tb3B0aW9uLWV4cGFuZGFibGU6ZGlyKHJ0bCl7LW1zLWZsZXgtb3JkZXI6LTE7b3JkZXI6LTF9fS5pdGVtLXNsaWRpbmctYWN0aXZlLXN3aXBlLXN0YXJ0IC5pdGVtLW9wdGlvbnMtc3RhcnQgLml0ZW0tb3B0aW9uLWV4cGFuZGFibGV7cGFkZGluZy1yaWdodDoxMDAlOy1tcy1mbGV4LW9yZGVyOi0xO29yZGVyOi0xOy13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjowLjZzO3RyYW5zaXRpb24tZHVyYXRpb246MC42czstd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6cGFkZGluZy1yaWdodDt0cmFuc2l0aW9uLXByb3BlcnR5OnBhZGRpbmctcmlnaHR9Omhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pdGVtLXNsaWRpbmctYWN0aXZlLXN3aXBlLXN0YXJ0IC5pdGVtLW9wdGlvbnMtc3RhcnQgLml0ZW0tb3B0aW9uLWV4cGFuZGFibGV7LW1zLWZsZXgtb3JkZXI6MTtvcmRlcjoxfVtkaXI9cnRsXSAuaXRlbS1zbGlkaW5nLWFjdGl2ZS1zd2lwZS1zdGFydCAuaXRlbS1vcHRpb25zLXN0YXJ0IC5pdGVtLW9wdGlvbi1leHBhbmRhYmxley1tcy1mbGV4LW9yZGVyOjE7b3JkZXI6MX1Ac3VwcG9ydHMgc2VsZWN0b3IoOmRpcihydGwpKXsuaXRlbS1zbGlkaW5nLWFjdGl2ZS1zd2lwZS1zdGFydCAuaXRlbS1vcHRpb25zLXN0YXJ0IC5pdGVtLW9wdGlvbi1leHBhbmRhYmxlOmRpcihydGwpey1tcy1mbGV4LW9yZGVyOjE7b3JkZXI6MX19XCI7XG5jb25zdCBTV0lQRV9NQVJHSU4gPSAzMDtcbmNvbnN0IEVMQVNUSUNfRkFDVE9SID0gMC41NTtcbmxldCBvcGVuU2xpZGluZ0l0ZW07XG5jb25zdCBJdGVtU2xpZGluZyA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5pb25EcmFnID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25EcmFnXCIsIDcpO1xuICAgIHRoaXMuaXRlbSA9IG51bGw7XG4gICAgdGhpcy5vcGVuQW1vdW50ID0gMDtcbiAgICB0aGlzLmluaXRpYWxPcGVuQW1vdW50ID0gMDtcbiAgICB0aGlzLm9wdHNXaWR0aFJpZ2h0U2lkZSA9IDA7XG4gICAgdGhpcy5vcHRzV2lkdGhMZWZ0U2lkZSA9IDA7XG4gICAgdGhpcy5zaWRlcyA9IDAgLyogSXRlbVNpZGUuTm9uZSAqLztcbiAgICB0aGlzLm9wdHNEaXJ0eSA9IHRydWU7XG4gICAgdGhpcy5jb250ZW50RWwgPSBudWxsO1xuICAgIHRoaXMuaW5pdGlhbENvbnRlbnRTY3JvbGxZID0gdHJ1ZTtcbiAgICB0aGlzLnN0YXRlID0gMiAvKiBTbGlkaW5nU3RhdGUuRGlzYWJsZWQgKi87XG4gICAgLyoqXG4gICAgICogSWYgYHRydWVgLCB0aGUgdXNlciBjYW5ub3QgaW50ZXJhY3Qgd2l0aCB0aGUgc2xpZGluZyBpdGVtLlxuICAgICAqL1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgfVxuICBkaXNhYmxlZENoYW5nZWQoKSB7XG4gICAgaWYgKHRoaXMuZ2VzdHVyZSkge1xuICAgICAgdGhpcy5nZXN0dXJlLmVuYWJsZSghdGhpcy5kaXNhYmxlZCk7XG4gICAgfVxuICB9XG4gIGFzeW5jIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGVsXG4gICAgfSA9IHRoaXM7XG4gICAgdGhpcy5pdGVtID0gZWwucXVlcnlTZWxlY3RvcignaW9uLWl0ZW0nKTtcbiAgICB0aGlzLmNvbnRlbnRFbCA9IGZpbmRDbG9zZXN0SW9uQ29udGVudChlbCk7XG4gICAgLyoqXG4gICAgICogVGhlIE11dGF0aW9uT2JzZXJ2ZXIgbmVlZHMgdG8gYmUgYWRkZWQgYmVmb3JlIHdlXG4gICAgICogY2FsbCB1cGRhdGVPcHRpb25zIGJlbG93IG90aGVyd2lzZSB3ZSBtYXkgbWlzc1xuICAgICAqIGlvbi1pdGVtLW9wdGlvbiBlbGVtZW50cyB0aGF0IGFyZSBhZGRlZCB0byB0aGUgRE9NXG4gICAgICogd2hpbGUgdXBkYXRlT3B0aW9ucyBpcyBydW5uaW5nIGFuZCBiZWZvcmUgdGhlIE11dGF0aW9uT2JzZXJ2ZXJcbiAgICAgKiBoYXMgYmVlbiBpbml0aWFsaXplZC5cbiAgICAgKi9cbiAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSB3YXRjaEZvck9wdGlvbnMoZWwsICdpb24taXRlbS1vcHRpb24nLCBhc3luYyAoKSA9PiB7XG4gICAgICBhd2FpdCB0aGlzLnVwZGF0ZU9wdGlvbnMoKTtcbiAgICB9KTtcbiAgICBhd2FpdCB0aGlzLnVwZGF0ZU9wdGlvbnMoKTtcbiAgICB0aGlzLmdlc3R1cmUgPSAoYXdhaXQgaW1wb3J0KCcuL2luZGV4LUNmZ0JGMVNFLmpzJykpLmNyZWF0ZUdlc3R1cmUoe1xuICAgICAgZWwsXG4gICAgICBnZXN0dXJlTmFtZTogJ2l0ZW0tc3dpcGUnLFxuICAgICAgZ2VzdHVyZVByaW9yaXR5OiAxMDAsXG4gICAgICB0aHJlc2hvbGQ6IDUsXG4gICAgICBjYW5TdGFydDogZXYgPT4gdGhpcy5jYW5TdGFydChldiksXG4gICAgICBvblN0YXJ0OiAoKSA9PiB0aGlzLm9uU3RhcnQoKSxcbiAgICAgIG9uTW92ZTogZXYgPT4gdGhpcy5vbk1vdmUoZXYpLFxuICAgICAgb25FbmQ6IGV2ID0+IHRoaXMub25FbmQoZXYpXG4gICAgfSk7XG4gICAgdGhpcy5kaXNhYmxlZENoYW5nZWQoKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBpZiAodGhpcy5nZXN0dXJlKSB7XG4gICAgICB0aGlzLmdlc3R1cmUuZGVzdHJveSgpO1xuICAgICAgdGhpcy5nZXN0dXJlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICB0aGlzLml0ZW0gPSBudWxsO1xuICAgIHRoaXMubGVmdE9wdGlvbnMgPSB0aGlzLnJpZ2h0T3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgICBpZiAob3BlblNsaWRpbmdJdGVtID09PSB0aGlzLmVsKSB7XG4gICAgICBvcGVuU2xpZGluZ0l0ZW0gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLm11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBHZXQgdGhlIGFtb3VudCB0aGUgaXRlbSBpcyBvcGVuIGluIHBpeGVscy5cbiAgICovXG4gIGdldE9wZW5BbW91bnQoKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLm9wZW5BbW91bnQpO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgdGhlIHJhdGlvIG9mIHRoZSBvcGVuIGFtb3VudCBvZiB0aGUgaXRlbSBjb21wYXJlZCB0byB0aGUgd2lkdGggb2YgdGhlIG9wdGlvbnMuXG4gICAqIElmIHRoZSBudW1iZXIgcmV0dXJuZWQgaXMgcG9zaXRpdmUsIHRoZW4gdGhlIG9wdGlvbnMgb24gdGhlIHJpZ2h0IHNpZGUgYXJlIG9wZW4uXG4gICAqIElmIHRoZSBudW1iZXIgcmV0dXJuZWQgaXMgbmVnYXRpdmUsIHRoZW4gdGhlIG9wdGlvbnMgb24gdGhlIGxlZnQgc2lkZSBhcmUgb3Blbi5cbiAgICogSWYgdGhlIGFic29sdXRlIHZhbHVlIG9mIHRoZSBudW1iZXIgaXMgZ3JlYXRlciB0aGFuIDEsIHRoZSBpdGVtIGlzIG9wZW4gbW9yZSB0aGFuXG4gICAqIHRoZSB3aWR0aCBvZiB0aGUgb3B0aW9ucy5cbiAgICovXG4gIGdldFNsaWRpbmdSYXRpbygpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuZ2V0U2xpZGluZ1JhdGlvU3luYygpKTtcbiAgfVxuICAvKipcbiAgICogT3BlbiB0aGUgc2xpZGluZyBpdGVtLlxuICAgKlxuICAgKiBAcGFyYW0gc2lkZSBUaGUgc2lkZSBvZiB0aGUgb3B0aW9ucyB0byBvcGVuLiBJZiBhIHNpZGUgaXMgbm90IHByb3ZpZGVkLCBpdCB3aWxsIG9wZW4gdGhlIGZpcnN0IHNldCBvZiBvcHRpb25zIGl0IGZpbmRzIHdpdGhpbiB0aGUgaXRlbS5cbiAgICovXG4gIGFzeW5jIG9wZW4oc2lkZSkge1xuICAgIHZhciBfYTtcbiAgICAvKipcbiAgICAgKiBJdCBpcyBwb3NzaWJsZSBmb3IgdGhlIGl0ZW0gdG8gYmUgYWRkZWQgdG8gdGhlIERPTVxuICAgICAqIGFmdGVyIHRoZSBpdGVtLXNsaWRpbmcgY29tcG9uZW50IHdhcyBjcmVhdGVkLiBBcyBhIHJlc3VsdCxcbiAgICAgKiBpZiB0aGlzLml0ZW0gaXMgbnVsbCwgdGhlbiB3ZSBzaG91bGQgYXR0ZW1wdCB0b1xuICAgICAqIHF1ZXJ5IGZvciB0aGUgaW9uLWl0ZW0gYWdhaW4uXG4gICAgICogSG93ZXZlciwgaWYgdGhlIGl0ZW0gaXMgYWxyZWFkeSBkZWZpbmVkIHRoZW5cbiAgICAgKiB3ZSBkbyBub3QgcXVlcnkgZm9yIGl0IGFnYWluLlxuICAgICAqL1xuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLml0ZW0gPSAoX2EgPSB0aGlzLml0ZW0pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHRoaXMuZWwucXVlcnlTZWxlY3RvcignaW9uLWl0ZW0nKTtcbiAgICBpZiAoaXRlbSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBvcHRpb25zVG9PcGVuID0gdGhpcy5nZXRPcHRpb25zKHNpZGUpO1xuICAgIGlmICghb3B0aW9uc1RvT3Blbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJZiBzaWRlIGlzIG5vdCBzZXQsIHdlIG5lZWQgdG8gaW5mZXIgdGhlIHNpZGVcbiAgICAgKiBzbyB3ZSBrbm93IHdoaWNoIGRpcmVjdGlvbiB0byBtb3ZlIHRoZSBvcHRpb25zXG4gICAgICovXG4gICAgaWYgKHNpZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgc2lkZSA9IG9wdGlvbnNUb09wZW4gPT09IHRoaXMubGVmdE9wdGlvbnMgPyAnc3RhcnQnIDogJ2VuZCc7XG4gICAgfVxuICAgIC8vIEluIFJUTCB3ZSB3YW50IHRvIHN3aXRjaCB0aGUgc2lkZXNcbiAgICBzaWRlID0gaXNFbmRTaWRlKHNpZGUpID8gJ2VuZCcgOiAnc3RhcnQnO1xuICAgIGNvbnN0IGlzU3RhcnRPcGVuID0gdGhpcy5vcGVuQW1vdW50IDwgMDtcbiAgICBjb25zdCBpc0VuZE9wZW4gPSB0aGlzLm9wZW5BbW91bnQgPiAwO1xuICAgIC8qKlxuICAgICAqIElmIGEgc2lkZSBpcyBvcGVuIGFuZCBhIHVzZXIgdHJpZXMgdG9cbiAgICAgKiByZS1vcGVuIHRoZSBzYW1lIHNpZGUsIHdlIHNob3VsZCBub3QgZG8gYW55dGhpbmdcbiAgICAgKi9cbiAgICBpZiAoaXNTdGFydE9wZW4gJiYgb3B0aW9uc1RvT3BlbiA9PT0gdGhpcy5sZWZ0T3B0aW9ucykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaXNFbmRPcGVuICYmIG9wdGlvbnNUb09wZW4gPT09IHRoaXMucmlnaHRPcHRpb25zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY2xvc2VPcGVuZWQoKTtcbiAgICB0aGlzLnN0YXRlID0gNCAvKiBTbGlkaW5nU3RhdGUuRW5hYmxlZCAqLztcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5jYWxjdWxhdGVPcHRzV2lkdGgoKTtcbiAgICAgIGNvbnN0IHdpZHRoID0gc2lkZSA9PT0gJ2VuZCcgPyB0aGlzLm9wdHNXaWR0aFJpZ2h0U2lkZSA6IC10aGlzLm9wdHNXaWR0aExlZnRTaWRlO1xuICAgICAgb3BlblNsaWRpbmdJdGVtID0gdGhpcy5lbDtcbiAgICAgIHRoaXMuc2V0T3BlbkFtb3VudCh3aWR0aCwgZmFsc2UpO1xuICAgICAgdGhpcy5zdGF0ZSA9IHNpZGUgPT09ICdlbmQnID8gOCAvKiBTbGlkaW5nU3RhdGUuRW5kICovIDogMTYgLyogU2xpZGluZ1N0YXRlLlN0YXJ0ICovO1xuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBDbG9zZSB0aGUgc2xpZGluZyBpdGVtLiBJdGVtcyBjYW4gYWxzbyBiZSBjbG9zZWQgZnJvbSB0aGUgW0xpc3RdKC4vbGlzdCkuXG4gICAqL1xuICBhc3luYyBjbG9zZSgpIHtcbiAgICB0aGlzLnNldE9wZW5BbW91bnQoMCwgdHJ1ZSk7XG4gIH1cbiAgLyoqXG4gICAqIENsb3NlIGFsbCBvZiB0aGUgc2xpZGluZyBpdGVtcyBpbiB0aGUgbGlzdC4gSXRlbXMgY2FuIGFsc28gYmUgY2xvc2VkIGZyb20gdGhlIFtMaXN0XSguL2xpc3QpLlxuICAgKi9cbiAgYXN5bmMgY2xvc2VPcGVuZWQoKSB7XG4gICAgaWYgKG9wZW5TbGlkaW5nSXRlbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBvcGVuU2xpZGluZ0l0ZW0uY2xvc2UoKTtcbiAgICAgIG9wZW5TbGlkaW5nSXRlbSA9IHVuZGVmaW5lZDtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLyoqXG4gICAqIEdpdmVuIGFuIG9wdGlvbmFsIHNpZGUsIHJldHVybiB0aGUgaW9uLWl0ZW0tb3B0aW9ucyBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0gc2lkZSBUaGlzIHNpZGUgb2YgdGhlIG9wdGlvbnMgdG8gZ2V0LiBJZiBhIHNpZGUgaXMgbm90IHByb3ZpZGVkIGl0IHdpbGxcbiAgICogcmV0dXJuIHRoZSBmaXJzdCBvbmUgYXZhaWxhYmxlLlxuICAgKi9cbiAgZ2V0T3B0aW9ucyhzaWRlKSB7XG4gICAgaWYgKHNpZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRoaXMubGVmdE9wdGlvbnMgfHwgdGhpcy5yaWdodE9wdGlvbnM7XG4gICAgfSBlbHNlIGlmIChzaWRlID09PSAnc3RhcnQnKSB7XG4gICAgICByZXR1cm4gdGhpcy5sZWZ0T3B0aW9ucztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMucmlnaHRPcHRpb25zO1xuICAgIH1cbiAgfVxuICBhc3luYyB1cGRhdGVPcHRpb25zKCkge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKCdpb24taXRlbS1vcHRpb25zJyk7XG4gICAgbGV0IHNpZGVzID0gMDtcbiAgICAvLyBSZXNldCBsZWZ0IGFuZCByaWdodCBvcHRpb25zIGluIGNhc2UgdGhleSB3ZXJlIHJlbW92ZWRcbiAgICB0aGlzLmxlZnRPcHRpb25zID0gdGhpcy5yaWdodE9wdGlvbnMgPSB1bmRlZmluZWQ7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpdGVtID0gb3B0aW9ucy5pdGVtKGkpO1xuICAgICAgLyoqXG4gICAgICAgKiBXZSBjYW5ub3QgdXNlIHRoZSBjb21wb25lbnRPblJlYWR5IGhlbHBlclxuICAgICAgICogdXRpbCBoZXJlIHNpbmNlIHdlIG5lZWQgdG8gd2FpdCBmb3IgYWxsIG9mIHRoZXNlIGl0ZW1zXG4gICAgICAgKiB0byBiZSByZWFkeSBiZWZvcmUgd2Ugc2V0IGB0aGlzLnNpZGVzYCBhbmQgYHRoaXMub3B0c0RpcnR5YC5cbiAgICAgICAqL1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGN1c3RvbS1ydWxlcy9uby1jb21wb25lbnQtb24tcmVhZHktbWV0aG9kXG4gICAgICBjb25zdCBvcHRpb24gPSBpdGVtLmNvbXBvbmVudE9uUmVhZHkgIT09IHVuZGVmaW5lZCA/IGF3YWl0IGl0ZW0uY29tcG9uZW50T25SZWFkeSgpIDogaXRlbTtcbiAgICAgIGNvbnN0IHNpZGUgPSBpc0VuZFNpZGUoKF9hID0gb3B0aW9uLnNpZGUpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IG9wdGlvbi5nZXRBdHRyaWJ1dGUoJ3NpZGUnKSkgPyAnZW5kJyA6ICdzdGFydCc7XG4gICAgICBpZiAoc2lkZSA9PT0gJ3N0YXJ0Jykge1xuICAgICAgICB0aGlzLmxlZnRPcHRpb25zID0gb3B0aW9uO1xuICAgICAgICBzaWRlcyB8PSAxIC8qIEl0ZW1TaWRlLlN0YXJ0ICovO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yaWdodE9wdGlvbnMgPSBvcHRpb247XG4gICAgICAgIHNpZGVzIHw9IDIgLyogSXRlbVNpZGUuRW5kICovO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm9wdHNEaXJ0eSA9IHRydWU7XG4gICAgdGhpcy5zaWRlcyA9IHNpZGVzO1xuICB9XG4gIGNhblN0YXJ0KGdlc3R1cmUpIHtcbiAgICAvKipcbiAgICAgKiBJZiB2ZXJ5IGNsb3NlIHRvIHN0YXJ0IG9mIHRoZSBzY3JlZW5cbiAgICAgKiBkbyBub3Qgb3BlbiBsZWZ0IHNpZGUgc28gc3dpcGUgdG8gZ29cbiAgICAgKiBiYWNrIHdpbGwgc3RpbGwgd29yay5cbiAgICAgKi9cbiAgICBjb25zdCBydGwgPSBkb2N1bWVudC5kaXIgPT09ICdydGwnO1xuICAgIGNvbnN0IGF0RWRnZSA9IHJ0bCA/IHdpbmRvdy5pbm5lcldpZHRoIC0gZ2VzdHVyZS5zdGFydFggPCAxNSA6IGdlc3R1cmUuc3RhcnRYIDwgMTU7XG4gICAgaWYgKGF0RWRnZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBzZWxlY3RlZCA9IG9wZW5TbGlkaW5nSXRlbTtcbiAgICBpZiAoc2VsZWN0ZWQgJiYgc2VsZWN0ZWQgIT09IHRoaXMuZWwpIHtcbiAgICAgIHRoaXMuY2xvc2VPcGVuZWQoKTtcbiAgICB9XG4gICAgcmV0dXJuICEhKHRoaXMucmlnaHRPcHRpb25zIHx8IHRoaXMubGVmdE9wdGlvbnMpO1xuICB9XG4gIG9uU3RhcnQoKSB7XG4gICAgLyoqXG4gICAgICogV2UgbmVlZCB0byBxdWVyeSBmb3IgdGhlIGlvbi1pdGVtXG4gICAgICogZXZlcnkgdGltZSB0aGUgZ2VzdHVyZSBzdGFydHMuIERldmVsb3BlcnNcbiAgICAgKiBtYXkgdG9nZ2xlIGlvbi1pdGVtIGVsZW1lbnRzIHZpYSAqbmdJZi5cbiAgICAgKi9cbiAgICB0aGlzLml0ZW0gPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1pdGVtJyk7XG4gICAgY29uc3Qge1xuICAgICAgY29udGVudEVsXG4gICAgfSA9IHRoaXM7XG4gICAgaWYgKGNvbnRlbnRFbCkge1xuICAgICAgdGhpcy5pbml0aWFsQ29udGVudFNjcm9sbFkgPSBkaXNhYmxlQ29udGVudFNjcm9sbFkoY29udGVudEVsKTtcbiAgICB9XG4gICAgb3BlblNsaWRpbmdJdGVtID0gdGhpcy5lbDtcbiAgICBpZiAodGhpcy50bXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudG1yKTtcbiAgICAgIHRoaXMudG1yID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAodGhpcy5vcGVuQW1vdW50ID09PSAwKSB7XG4gICAgICB0aGlzLm9wdHNEaXJ0eSA9IHRydWU7XG4gICAgICB0aGlzLnN0YXRlID0gNCAvKiBTbGlkaW5nU3RhdGUuRW5hYmxlZCAqLztcbiAgICB9XG4gICAgdGhpcy5pbml0aWFsT3BlbkFtb3VudCA9IHRoaXMub3BlbkFtb3VudDtcbiAgICBpZiAodGhpcy5pdGVtKSB7XG4gICAgICB0aGlzLml0ZW0uc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJztcbiAgICB9XG4gIH1cbiAgb25Nb3ZlKGdlc3R1cmUpIHtcbiAgICBpZiAodGhpcy5vcHRzRGlydHkpIHtcbiAgICAgIHRoaXMuY2FsY3VsYXRlT3B0c1dpZHRoKCk7XG4gICAgfVxuICAgIGxldCBvcGVuQW1vdW50ID0gdGhpcy5pbml0aWFsT3BlbkFtb3VudCAtIGdlc3R1cmUuZGVsdGFYO1xuICAgIHN3aXRjaCAodGhpcy5zaWRlcykge1xuICAgICAgY2FzZSAyIC8qIEl0ZW1TaWRlLkVuZCAqLzpcbiAgICAgICAgb3BlbkFtb3VudCA9IE1hdGgubWF4KDAsIG9wZW5BbW91bnQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMSAvKiBJdGVtU2lkZS5TdGFydCAqLzpcbiAgICAgICAgb3BlbkFtb3VudCA9IE1hdGgubWluKDAsIG9wZW5BbW91bnQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMyAvKiBJdGVtU2lkZS5Cb3RoICovOlxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMCAvKiBJdGVtU2lkZS5Ob25lICovOlxuICAgICAgICByZXR1cm47XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBwcmludElvbldhcm5pbmcoJ1tpb24taXRlbS1zbGlkaW5nXSAtIGludmFsaWQgSXRlbVNpZGVGbGFncyB2YWx1ZScsIHRoaXMuc2lkZXMpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgbGV0IG9wdHNXaWR0aDtcbiAgICBpZiAob3BlbkFtb3VudCA+IHRoaXMub3B0c1dpZHRoUmlnaHRTaWRlKSB7XG4gICAgICBvcHRzV2lkdGggPSB0aGlzLm9wdHNXaWR0aFJpZ2h0U2lkZTtcbiAgICAgIG9wZW5BbW91bnQgPSBvcHRzV2lkdGggKyAob3BlbkFtb3VudCAtIG9wdHNXaWR0aCkgKiBFTEFTVElDX0ZBQ1RPUjtcbiAgICB9IGVsc2UgaWYgKG9wZW5BbW91bnQgPCAtdGhpcy5vcHRzV2lkdGhMZWZ0U2lkZSkge1xuICAgICAgb3B0c1dpZHRoID0gLXRoaXMub3B0c1dpZHRoTGVmdFNpZGU7XG4gICAgICBvcGVuQW1vdW50ID0gb3B0c1dpZHRoICsgKG9wZW5BbW91bnQgLSBvcHRzV2lkdGgpICogRUxBU1RJQ19GQUNUT1I7XG4gICAgfVxuICAgIHRoaXMuc2V0T3BlbkFtb3VudChvcGVuQW1vdW50LCBmYWxzZSk7XG4gIH1cbiAgb25FbmQoZ2VzdHVyZSkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNvbnRlbnRFbCxcbiAgICAgIGluaXRpYWxDb250ZW50U2Nyb2xsWVxuICAgIH0gPSB0aGlzO1xuICAgIGlmIChjb250ZW50RWwpIHtcbiAgICAgIHJlc2V0Q29udGVudFNjcm9sbFkoY29udGVudEVsLCBpbml0aWFsQ29udGVudFNjcm9sbFkpO1xuICAgIH1cbiAgICBjb25zdCB2ZWxvY2l0eSA9IGdlc3R1cmUudmVsb2NpdHlYO1xuICAgIGxldCByZXN0aW5nUG9pbnQgPSB0aGlzLm9wZW5BbW91bnQgPiAwID8gdGhpcy5vcHRzV2lkdGhSaWdodFNpZGUgOiAtdGhpcy5vcHRzV2lkdGhMZWZ0U2lkZTtcbiAgICAvLyBDaGVjayBpZiB0aGUgZHJhZyBkaWRuJ3QgY2xlYXIgdGhlIGJ1dHRvbnMgbWlkLXBvaW50XG4gICAgLy8gYW5kIHdlIGFyZW4ndCBtb3ZpbmcgZmFzdCBlbm91Z2ggdG8gc3dpcGUgb3BlblxuICAgIGNvbnN0IGlzUmVzZXREaXJlY3Rpb24gPSB0aGlzLm9wZW5BbW91bnQgPiAwID09PSAhKHZlbG9jaXR5IDwgMCk7XG4gICAgY29uc3QgaXNNb3ZpbmdGYXN0ID0gTWF0aC5hYnModmVsb2NpdHkpID4gMC4zO1xuICAgIGNvbnN0IGlzT25DbG9zZVpvbmUgPSBNYXRoLmFicyh0aGlzLm9wZW5BbW91bnQpIDwgTWF0aC5hYnMocmVzdGluZ1BvaW50IC8gMik7XG4gICAgaWYgKHN3aXBlU2hvdWxkUmVzZXQoaXNSZXNldERpcmVjdGlvbiwgaXNNb3ZpbmdGYXN0LCBpc09uQ2xvc2Vab25lKSkge1xuICAgICAgcmVzdGluZ1BvaW50ID0gMDtcbiAgICB9XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc2V0T3BlbkFtb3VudChyZXN0aW5nUG9pbnQsIHRydWUpO1xuICAgIGlmICgoc3RhdGUgJiAzMiAvKiBTbGlkaW5nU3RhdGUuU3dpcGVFbmQgKi8pICE9PSAwICYmIHRoaXMucmlnaHRPcHRpb25zKSB7XG4gICAgICB0aGlzLnJpZ2h0T3B0aW9ucy5maXJlU3dpcGVFdmVudCgpO1xuICAgIH0gZWxzZSBpZiAoKHN0YXRlICYgNjQgLyogU2xpZGluZ1N0YXRlLlN3aXBlU3RhcnQgKi8pICE9PSAwICYmIHRoaXMubGVmdE9wdGlvbnMpIHtcbiAgICAgIHRoaXMubGVmdE9wdGlvbnMuZmlyZVN3aXBlRXZlbnQoKTtcbiAgICB9XG4gIH1cbiAgY2FsY3VsYXRlT3B0c1dpZHRoKCkge1xuICAgIHRoaXMub3B0c1dpZHRoUmlnaHRTaWRlID0gMDtcbiAgICBpZiAodGhpcy5yaWdodE9wdGlvbnMpIHtcbiAgICAgIHRoaXMucmlnaHRPcHRpb25zLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICB0aGlzLm9wdHNXaWR0aFJpZ2h0U2lkZSA9IHRoaXMucmlnaHRPcHRpb25zLm9mZnNldFdpZHRoO1xuICAgICAgdGhpcy5yaWdodE9wdGlvbnMuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgIH1cbiAgICB0aGlzLm9wdHNXaWR0aExlZnRTaWRlID0gMDtcbiAgICBpZiAodGhpcy5sZWZ0T3B0aW9ucykge1xuICAgICAgdGhpcy5sZWZ0T3B0aW9ucy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgdGhpcy5vcHRzV2lkdGhMZWZ0U2lkZSA9IHRoaXMubGVmdE9wdGlvbnMub2Zmc2V0V2lkdGg7XG4gICAgICB0aGlzLmxlZnRPcHRpb25zLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICB9XG4gICAgdGhpcy5vcHRzRGlydHkgPSBmYWxzZTtcbiAgfVxuICBzZXRPcGVuQW1vdW50KG9wZW5BbW91bnQsIGlzRmluYWwpIHtcbiAgICBpZiAodGhpcy50bXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudG1yKTtcbiAgICAgIHRoaXMudG1yID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuaXRlbSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7XG4gICAgICBlbFxuICAgIH0gPSB0aGlzO1xuICAgIGNvbnN0IHN0eWxlID0gdGhpcy5pdGVtLnN0eWxlO1xuICAgIHRoaXMub3BlbkFtb3VudCA9IG9wZW5BbW91bnQ7XG4gICAgaWYgKGlzRmluYWwpIHtcbiAgICAgIHN0eWxlLnRyYW5zaXRpb24gPSAnJztcbiAgICB9XG4gICAgaWYgKG9wZW5BbW91bnQgPiAwKSB7XG4gICAgICB0aGlzLnN0YXRlID0gb3BlbkFtb3VudCA+PSB0aGlzLm9wdHNXaWR0aFJpZ2h0U2lkZSArIFNXSVBFX01BUkdJTiA/IDggLyogU2xpZGluZ1N0YXRlLkVuZCAqLyB8IDMyIC8qIFNsaWRpbmdTdGF0ZS5Td2lwZUVuZCAqLyA6IDggLyogU2xpZGluZ1N0YXRlLkVuZCAqLztcbiAgICB9IGVsc2UgaWYgKG9wZW5BbW91bnQgPCAwKSB7XG4gICAgICB0aGlzLnN0YXRlID0gb3BlbkFtb3VudCA8PSAtdGhpcy5vcHRzV2lkdGhMZWZ0U2lkZSAtIFNXSVBFX01BUkdJTiA/IDE2IC8qIFNsaWRpbmdTdGF0ZS5TdGFydCAqLyB8IDY0IC8qIFNsaWRpbmdTdGF0ZS5Td2lwZVN0YXJ0ICovIDogMTYgLyogU2xpZGluZ1N0YXRlLlN0YXJ0ICovO1xuICAgIH0gZWxzZSB7XG4gICAgICAvKipcbiAgICAgICAqIFRoZSBzbGlkaW5nIG9wdGlvbnMgc2hvdWxkIG5vdCBiZVxuICAgICAgICogY2xpY2thYmxlIHdoaWxlIHRoZSBpdGVtIGlzIGNsb3NpbmcuXG4gICAgICAgKi9cbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tc2xpZGluZy1jbG9zaW5nJyk7XG4gICAgICAvKipcbiAgICAgICAqIEl0ZW0gc2xpZGluZyBjYW5ub3QgYmUgaW50ZXJydXB0ZWRcbiAgICAgICAqIHdoaWxlIGNsb3NpbmcgdGhlIGl0ZW0uIElmIGl0IGRpZCxcbiAgICAgICAqIGl0IHdvdWxkIGFsbG93IHRoZSBpdGVtIHRvIGdldCBpbnRvIGFuXG4gICAgICAgKiBpbmNvbnNpc3RlbnQgc3RhdGUgd2hlcmUgbXVsdGlwbGVcbiAgICAgICAqIGl0ZW1zIGFyZSB0aGVuIG9wZW4gYXQgdGhlIHNhbWUgdGltZS5cbiAgICAgICAqL1xuICAgICAgaWYgKHRoaXMuZ2VzdHVyZSkge1xuICAgICAgICB0aGlzLmdlc3R1cmUuZW5hYmxlKGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudG1yID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAyIC8qIFNsaWRpbmdTdGF0ZS5EaXNhYmxlZCAqLztcbiAgICAgICAgdGhpcy50bXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICh0aGlzLmdlc3R1cmUpIHtcbiAgICAgICAgICB0aGlzLmdlc3R1cmUuZW5hYmxlKCF0aGlzLmRpc2FibGVkKTtcbiAgICAgICAgfVxuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdpdGVtLXNsaWRpbmctY2xvc2luZycpO1xuICAgICAgfSwgNjAwKTtcbiAgICAgIG9wZW5TbGlkaW5nSXRlbSA9IHVuZGVmaW5lZDtcbiAgICAgIHN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHstb3BlbkFtb3VudH1weCwwLDApYDtcbiAgICB0aGlzLmlvbkRyYWcuZW1pdCh7XG4gICAgICBhbW91bnQ6IG9wZW5BbW91bnQsXG4gICAgICByYXRpbzogdGhpcy5nZXRTbGlkaW5nUmF0aW9TeW5jKClcbiAgICB9KTtcbiAgfVxuICBnZXRTbGlkaW5nUmF0aW9TeW5jKCkge1xuICAgIGlmICh0aGlzLm9wZW5BbW91bnQgPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcGVuQW1vdW50IC8gdGhpcy5vcHRzV2lkdGhSaWdodFNpZGU7XG4gICAgfSBlbHNlIGlmICh0aGlzLm9wZW5BbW91bnQgPCAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcGVuQW1vdW50IC8gdGhpcy5vcHRzV2lkdGhMZWZ0U2lkZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICByZXR1cm4gaChIb3N0LCB7XG4gICAgICBrZXk6ICdkODEyMzIyYzlmYjVkYTRlZTE2ZTk5ZGMzOGJmYjI0Y2I0NTkwZDAzJyxcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgIFttb2RlXTogdHJ1ZSxcbiAgICAgICAgJ2l0ZW0tc2xpZGluZy1hY3RpdmUtc2xpZGUnOiB0aGlzLnN0YXRlICE9PSAyIC8qIFNsaWRpbmdTdGF0ZS5EaXNhYmxlZCAqLyxcbiAgICAgICAgJ2l0ZW0tc2xpZGluZy1hY3RpdmUtb3B0aW9ucy1lbmQnOiAodGhpcy5zdGF0ZSAmIDggLyogU2xpZGluZ1N0YXRlLkVuZCAqLykgIT09IDAsXG4gICAgICAgICdpdGVtLXNsaWRpbmctYWN0aXZlLW9wdGlvbnMtc3RhcnQnOiAodGhpcy5zdGF0ZSAmIDE2IC8qIFNsaWRpbmdTdGF0ZS5TdGFydCAqLykgIT09IDAsXG4gICAgICAgICdpdGVtLXNsaWRpbmctYWN0aXZlLXN3aXBlLWVuZCc6ICh0aGlzLnN0YXRlICYgMzIgLyogU2xpZGluZ1N0YXRlLlN3aXBlRW5kICovKSAhPT0gMCxcbiAgICAgICAgJ2l0ZW0tc2xpZGluZy1hY3RpdmUtc3dpcGUtc3RhcnQnOiAodGhpcy5zdGF0ZSAmIDY0IC8qIFNsaWRpbmdTdGF0ZS5Td2lwZVN0YXJ0ICovKSAhPT0gMFxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGdldCBlbCgpIHtcbiAgICByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBcImRpc2FibGVkXCI6IFtcImRpc2FibGVkQ2hhbmdlZFwiXVxuICAgIH07XG4gIH1cbn07XG5jb25zdCBzd2lwZVNob3VsZFJlc2V0ID0gKGlzUmVzZXREaXJlY3Rpb24sIGlzTW92aW5nRmFzdCwgaXNPblJlc2V0Wm9uZSkgPT4ge1xuICAvLyBUaGUgbG9naWMgcmVxdWlyZWQgdG8ga25vdyB3aGVuIHRoZSBzbGlkaW5nIGl0ZW0gc2hvdWxkIGNsb3NlIChvcGVuQW1vdW50PTApXG4gIC8vIGRlcGVuZHMgb24gdGhyZWUgYm9vbGVhbnMgKGlzUmVzZXREaXJlY3Rpb24sIGlzTW92aW5nRmFzdCwgaXNPblJlc2V0Wm9uZSlcbiAgLy8gYW5kIGl0IGVuZGVkIHVwIGJlaW5nIHRvbyBjb21wbGljYXRlZCB0byBiZSB3cml0dGVuIG1hbnVhbGx5IHdpdGhvdXQgZXJyb3JzXG4gIC8vIHNvIHRoZSB0cnV0aCB0YWJsZSBpcyBhdHRhY2hlZCBiZWxvdzogKDA9ZmFsc2UsIDE9dHJ1ZSlcbiAgLy8gaXNSZXNldERpcmVjdGlvbiB8IGlzTW92aW5nRmFzdCB8IGlzT25SZXNldFpvbmUgfHwgc2hvdWxkQ2xvc2VcbiAgLy8gICAgICAgICAwICAgICAgICB8ICAgICAgIDAgICAgICB8ICAgICAgIDAgICAgICAgfHwgICAgMFxuICAvLyAgICAgICAgIDAgICAgICAgIHwgICAgICAgMCAgICAgIHwgICAgICAgMSAgICAgICB8fCAgICAxXG4gIC8vICAgICAgICAgMCAgICAgICAgfCAgICAgICAxICAgICAgfCAgICAgICAwICAgICAgIHx8ICAgIDBcbiAgLy8gICAgICAgICAwICAgICAgICB8ICAgICAgIDEgICAgICB8ICAgICAgIDEgICAgICAgfHwgICAgMFxuICAvLyAgICAgICAgIDEgICAgICAgIHwgICAgICAgMCAgICAgIHwgICAgICAgMCAgICAgICB8fCAgICAwXG4gIC8vICAgICAgICAgMSAgICAgICAgfCAgICAgICAwICAgICAgfCAgICAgICAxICAgICAgIHx8ICAgIDFcbiAgLy8gICAgICAgICAxICAgICAgICB8ICAgICAgIDEgICAgICB8ICAgICAgIDAgICAgICAgfHwgICAgMVxuICAvLyAgICAgICAgIDEgICAgICAgIHwgICAgICAgMSAgICAgIHwgICAgICAgMSAgICAgICB8fCAgICAxXG4gIC8vIFRoZSByZXN1bHRpbmcgZXhwcmVzc2lvbiB3YXMgZ2VuZXJhdGVkIGJ5IHJlc29sdmluZyB0aGUgSy1tYXAgKEthcm5hdWdoIG1hcCk6XG4gIHJldHVybiAhaXNNb3ZpbmdGYXN0ICYmIGlzT25SZXNldFpvbmUgfHwgaXNSZXNldERpcmVjdGlvbiAmJiBpc01vdmluZ0Zhc3Q7XG59O1xuSXRlbVNsaWRpbmcuc3R5bGUgPSBpdGVtU2xpZGluZ0NzcztcbmV4cG9ydCB7IEl0ZW1PcHRpb24gYXMgaW9uX2l0ZW1fb3B0aW9uLCBJdGVtT3B0aW9ucyBhcyBpb25faXRlbV9vcHRpb25zLCBJdGVtU2xpZGluZyBhcyBpb25faXRlbV9zbGlkaW5nIH07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTQSxJQUFNLG1CQUFtQjtBQUN6QixJQUFNLGtCQUFrQjtBQUN4QixJQUFNLGFBQWEsTUFBTTtBQUFBLEVBQ3ZCLFlBQVksU0FBUztBQUNuQixxQkFBaUIsTUFBTSxPQUFPO0FBSTlCLFNBQUssV0FBVztBQUloQixTQUFLLGFBQWE7QUFJbEIsU0FBSyxPQUFPO0FBQ1osU0FBSyxVQUFVLFFBQU07QUFDbkIsWUFBTSxLQUFLLEdBQUcsT0FBTyxRQUFRLGlCQUFpQjtBQUM5QyxVQUFJLElBQUk7QUFDTixXQUFHLGVBQWU7QUFBQSxNQUNwQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQ1AsVUFBTTtBQUFBLE1BQ0o7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0YsSUFBSTtBQUNKLFVBQU0s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LGFBQWEsR0FBRztBQUN6QixXQUFLLFFBQVEsY0FBYyxDQUFDLEtBQUssb0JBQW9CLGVBQWUsS0FBOEIsS0FBbUM7QUFBQSxJQUN2SSxPQUFPO0FBS0wsU0FBRyxVQUFVLElBQUksc0JBQXNCO0FBUXZDLFVBQUksS0FBSyxTQUFTO0FBQ2hCLGFBQUssUUFBUSxPQUFPLEtBQUs7QUFBQSxNQUMzQjtBQUNBLFdBQUssTUFBTSxXQUFXLE1BQU07QUFDMUIsYUFBSyxRQUFRO0FBQ2IsYUFBSyxNQUFNO0FBQ1gsWUFBSSxLQUFLLFNBQVM7QUFDaEIsZUFBSyxRQUFRLE9BQU8sQ0FBQyxLQUFLLFFBQVE7QUFBQSxRQUNwQztBQUNBLFdBQUcsVUFBVSxPQUFPLHNCQUFzQjtBQUFBLE1BQzVDLEdBQUcsR0FBRztBQUNOLHdCQUFrQjtBQUNsQixZQUFNLFlBQVk7QUFDbEI7QUFBQSxJQUNGO0FBQ0EsVUFBTSxZQUFZLGVBQWUsQ0FBQyxVQUFVO0FBQzVDLFNBQUssUUFBUSxLQUFLO0FBQUEsTUFDaEIsUUFBUTtBQUFBLE1BQ1IsT0FBTyxLQUFLLG9CQUFvQjtBQUFBLElBQ2xDLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxzQkFBc0I7QUFDcEIsUUFBSSxLQUFLLGFBQWEsR0FBRztBQUN2QixhQUFPLEtBQUssYUFBYSxLQUFLO0FBQUEsSUFDaEMsV0FBVyxLQUFLLGFBQWEsR0FBRztBQUM5QixhQUFPLEtBQUssYUFBYSxLQUFLO0FBQUEsSUFDaEMsT0FBTztBQUNMLGFBQU87QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUNQLFVBQU0sT0FBTyxXQUFXLElBQUk7QUFDNUIsV0FBTyxFQUFFLE1BQU07QUFBQSxNQUNiLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxRQUNMLENBQUMsSUFBSSxHQUFHO0FBQUEsUUFDUiw2QkFBNkIsS0FBSyxVQUFVO0FBQUEsUUFDNUMsb0NBQW9DLEtBQUssUUFBUSxPQUE4QjtBQUFBLFFBQy9FLHNDQUFzQyxLQUFLLFFBQVEsUUFBaUM7QUFBQSxRQUNwRixrQ0FBa0MsS0FBSyxRQUFRLFFBQW9DO0FBQUEsUUFDbkYsb0NBQW9DLEtBQUssUUFBUSxRQUFzQztBQUFBLE1BQ3pGO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsSUFBSSxLQUFLO0FBQ1AsV0FBTyxXQUFXLElBQUk7QUFBQSxFQUN4QjtBQUFBLEVBQ0EsV0FBVyxXQUFXO0FBQ3BCLFdBQU87QUFBQSxNQUNMLFlBQVksQ0FBQyxpQkFBaUI7QUFBQSxJQUNoQztBQUFBLEVBQ0Y7QUFDRjtBQUNBLElBQU0sbUJBQW1CLENBQUMsa0JBQWtCLGNBQWMsa0JBQWtCO0FBZTFFLFNBQU8sQ0FBQyxnQkFBZ0IsaUJBQWlCLG9CQUFvQjtBQUMvRDtBQUNBLFlBQVksUUFBUTsiLCJuYW1lcyI6W10sInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswXX0=
