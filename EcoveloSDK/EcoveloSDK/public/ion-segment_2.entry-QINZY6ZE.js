import {
  isRTL
} from "./chunk-4LZLDCVM.js";
import {
  createColorClasses,
  hostContext
} from "./chunk-5VP4V3BN.js";
import {
  getIonMode
} from "./chunk-TXLH22R2.js";
import {
  addEventListener,
  inheritAttributes,
  raf,
  removeEventListener
} from "./chunk-RZR7LWTQ.js";
import {
  Host,
  createEvent,
  forceUpdate,
  getElement,
  h,
  printIonError,
  printIonWarning,
  registerInstance,
  writeTask
} from "./chunk-BFPTXCSH.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js
var segmentIosCss = ":host{--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:grid;grid-auto-columns:1fr;position:relative;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;width:100%;background:var(--background);font-family:var(--ion-font-family, inherit);text-align:center;contain:paint;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.segment-scrollable){-ms-flex-pack:start;justify-content:start;width:auto;overflow-x:auto;grid-auto-columns:minmax(-webkit-min-content, 1fr);grid-auto-columns:minmax(min-content, 1fr)}:host(.segment-scrollable::-webkit-scrollbar){display:none}:host{--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.065);border-radius:8px;overflow:hidden;z-index:0}:host(.ion-color){background:rgba(var(--ion-color-base-rgb), 0.065)}:host(.in-toolbar){-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;width:auto}:host(.in-toolbar:not(.ion-color)){background:var(--ion-toolbar-segment-background, var(--background))}:host(.in-toolbar-color:not(.ion-color)){background:rgba(var(--ion-color-contrast-rgb), 0.11)}";
var segmentMdCss = ":host{--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:grid;grid-auto-columns:1fr;position:relative;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;width:100%;background:var(--background);font-family:var(--ion-font-family, inherit);text-align:center;contain:paint;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.segment-scrollable){-ms-flex-pack:start;justify-content:start;width:auto;overflow-x:auto;grid-auto-columns:minmax(-webkit-min-content, 1fr);grid-auto-columns:minmax(min-content, 1fr)}:host(.segment-scrollable::-webkit-scrollbar){display:none}:host{--background:transparent;grid-auto-columns:minmax(auto, 360px)}:host(.in-toolbar){min-height:var(--min-height)}:host(.segment-scrollable) ::slotted(ion-segment-button){min-width:auto}";
var Segment = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionChange = createEvent(this, "ionChange", 7);
    this.ionSelect = createEvent(this, "ionSelect", 7);
    this.ionStyle = createEvent(this, "ionStyle", 7);
    this.segmentViewEl = null;
    this.activated = false;
    this.disabled = false;
    this.scrollable = false;
    this.swipeGesture = true;
    this.selectOnFocus = false;
    this.onClick = (ev) => {
      const current = ev.target;
      const previous = this.checked;
      if (current.tagName === "ION-SEGMENT") {
        return;
      }
      this.value = current.value;
      if (current !== previous) {
        this.emitValueChange();
      }
      if (this.segmentViewEl) {
        this.updateSegmentView();
        if (this.scrollable && previous) {
          this.checkButton(previous, current);
        }
      } else if (this.scrollable || !this.swipeGesture) {
        if (previous) {
          this.checkButton(previous, current);
        } else {
          this.setCheckedClasses();
        }
      }
    };
    this.onSlottedItemsChange = () => {
      this.valueChanged(this.value);
    };
    this.getSegmentButton = (selector) => {
      var _a, _b;
      const buttons = this.getButtons().filter((button) => !button.disabled);
      const currIndex = buttons.findIndex((button) => button === document.activeElement);
      switch (selector) {
        case "first":
          return buttons[0];
        case "last":
          return buttons[buttons.length - 1];
        case "next":
          return (_a = buttons[currIndex + 1]) !== null && _a !== void 0 ? _a : buttons[0];
        case "previous":
          return (_b = buttons[currIndex - 1]) !== null && _b !== void 0 ? _b : buttons[buttons.length - 1];
        default:
          return null;
      }
    };
  }
  colorChanged(value, oldValue) {
    if (oldValue === void 0 && value !== void 0 || oldValue !== void 0 && value === void 0) {
      this.emitStyle();
    }
  }
  swipeGestureChanged() {
    this.gestureChanged();
  }
  valueChanged(value, oldValue) {
    if (this.segmentViewEl && value === void 0) {
      this.value = this.getButtons()[0].value;
      return;
    }
    if (oldValue !== void 0 && value !== void 0) {
      const buttons = this.getButtons();
      const previous = buttons.find((button) => button.value === oldValue);
      const current = buttons.find((button) => button.value === value);
      if (previous && current) {
        if (!this.segmentViewEl) {
          this.checkButton(previous, current);
        } else if (this.triggerScrollOnValueChange !== false) {
          this.updateSegmentView();
        }
      }
    } else if (value !== void 0 && oldValue === void 0 && this.segmentViewEl) {
      this.updateSegmentView();
    }
    this.ionSelect.emit({
      value
    });
    if (!this.segmentViewEl) {
      this.scrollActiveButtonIntoView();
    }
    this.triggerScrollOnValueChange = void 0;
  }
  disabledChanged() {
    this.gestureChanged();
    if (!this.segmentViewEl) {
      const buttons = this.getButtons();
      for (const button of buttons) {
        button.disabled = this.disabled;
      }
    } else {
      this.segmentViewEl.disabled = this.disabled;
    }
  }
  gestureChanged() {
    if (this.gesture) {
      this.gesture.enable(!this.scrollable && !this.disabled && this.swipeGesture);
    }
  }
  connectedCallback() {
    this.emitStyle();
    this.segmentViewEl = this.getSegmentView();
  }
  disconnectedCallback() {
    this.segmentViewEl = null;
  }
  componentWillLoad() {
    this.emitStyle();
  }
  componentDidLoad() {
    return __async(this, null, function* () {
      this.segmentViewEl = this.getSegmentView();
      this.setCheckedClasses();
      raf(() => {
        this.scrollActiveButtonIntoView(false);
      });
      this.gesture = (yield import("./index-CfgBF1SE-H675UNH5.js")).createGesture({
        el: this.el,
        gestureName: "segment",
        gesturePriority: 100,
        threshold: 0,
        passive: false,
        onStart: (ev) => this.onStart(ev),
        onMove: (ev) => this.onMove(ev),
        onEnd: (ev) => this.onEnd(ev)
      });
      this.gestureChanged();
      if (this.disabled) {
        this.disabledChanged();
      }
      this.updateSegmentView(false);
    });
  }
  onStart(detail) {
    this.valueBeforeGesture = this.value;
    this.activate(detail);
  }
  onMove(detail) {
    this.setNextIndex(detail);
  }
  onEnd(detail) {
    this.setActivated(false);
    this.setNextIndex(detail, true);
    detail.event.stopImmediatePropagation();
    const value = this.value;
    if (value !== void 0) {
      if (this.valueBeforeGesture !== value) {
        this.emitValueChange();
        this.updateSegmentView();
      }
    }
    this.valueBeforeGesture = void 0;
  }
  /**
   * Emits an `ionChange` event.
   *
   * This API should be called for user committed changes.
   * This API should not be used for external value changes.
   */
  emitValueChange() {
    const {
      value
    } = this;
    this.ionChange.emit({
      value
    });
  }
  getButtons() {
    return Array.from(this.el.querySelectorAll("ion-segment-button"));
  }
  get checked() {
    return this.getButtons().find((button) => button.value === this.value);
  }
  /*
   * Activate both the segment and the buttons
   * due to a bug with ::slotted in Safari
   */
  setActivated(activated) {
    const buttons = this.getButtons();
    buttons.forEach((button) => {
      button.classList.toggle("segment-button-activated", activated);
    });
    this.activated = activated;
  }
  activate(detail) {
    const clicked = detail.event.target;
    const buttons = this.getButtons();
    const checked = buttons.find((button) => button.value === this.value);
    if (clicked.tagName !== "ION-SEGMENT-BUTTON") {
      return;
    }
    if (!checked) {
      this.value = clicked.value;
      this.setCheckedClasses();
    }
    if (this.value === clicked.value) {
      this.setActivated(true);
    }
  }
  getIndicator(button) {
    const root = button.shadowRoot || button;
    return root.querySelector(".segment-button-indicator");
  }
  checkButton(previous, current) {
    const previousIndicator = this.getIndicator(previous);
    const currentIndicator = this.getIndicator(current);
    if (previousIndicator === null || currentIndicator === null) {
      return;
    }
    const previousClientRect = previousIndicator.getBoundingClientRect();
    const currentClientRect = currentIndicator.getBoundingClientRect();
    const widthDelta = previousClientRect.width / currentClientRect.width;
    const xPosition = previousClientRect.left - currentClientRect.left;
    const transform = `translate3d(${xPosition}px, 0, 0) scaleX(${widthDelta})`;
    writeTask(() => {
      currentIndicator.classList.remove("segment-button-indicator-animated");
      currentIndicator.style.setProperty("transform", transform);
      currentIndicator.getBoundingClientRect();
      currentIndicator.classList.add("segment-button-indicator-animated");
      currentIndicator.style.setProperty("transform", "");
      this.scrollActiveButtonIntoView(true);
    });
    this.value = current.value;
    this.setCheckedClasses();
  }
  setCheckedClasses() {
    const buttons = this.getButtons();
    const index = buttons.findIndex((button) => button.value === this.value);
    const next = index + 1;
    for (const button of buttons) {
      button.classList.remove("segment-button-after-checked");
    }
    if (next < buttons.length) {
      buttons[next].classList.add("segment-button-after-checked");
    }
  }
  getSegmentView() {
    const buttons = this.getButtons();
    const firstContentId = buttons.find((button) => button.contentId);
    const segmentContent = document.querySelector(`ion-segment-content[id="${firstContentId === null || firstContentId === void 0 ? void 0 : firstContentId.contentId}"]`);
    return segmentContent === null || segmentContent === void 0 ? void 0 : segmentContent.closest("ion-segment-view");
  }
  handleSegmentViewScroll(ev) {
    const {
      scrollRatio,
      isManualScroll
    } = ev.detail;
    if (!isManualScroll) {
      return;
    }
    const dispatchedFrom = ev.target;
    const segmentViewEl = this.segmentViewEl;
    const segmentEl = this.el;
    if (ev.composedPath().includes(segmentViewEl) || (dispatchedFrom === null || dispatchedFrom === void 0 ? void 0 : dispatchedFrom.contains(segmentEl))) {
      const buttons = this.getButtons();
      if (!buttons.length) return;
      const index = buttons.findIndex((button) => button.value === this.value);
      const current = buttons[index];
      const nextIndex = Math.round(scrollRatio * (buttons.length - 1));
      if (this.lastNextIndex === void 0 || this.lastNextIndex !== nextIndex) {
        this.lastNextIndex = nextIndex;
        this.triggerScrollOnValueChange = false;
        this.checkButton(current, buttons[nextIndex]);
        this.emitValueChange();
      }
    }
  }
  /**
   * Finds the related segment view and sets its current content
   * based on the selected segment button. This method
   * should be called on initial load of the segment,
   * after the gesture is completed (if dragging between segments)
   * and when a segment button is clicked directly.
   */
  updateSegmentView(smoothScroll = true) {
    const buttons = this.getButtons();
    const button = buttons.find((btn) => btn.value === this.value);
    if (!(button === null || button === void 0 ? void 0 : button.contentId)) {
      return;
    }
    const segmentView = this.segmentViewEl;
    if (segmentView) {
      segmentView.setContent(button.contentId, smoothScroll);
    }
  }
  scrollActiveButtonIntoView(smoothScroll = true) {
    const {
      scrollable,
      value,
      el
    } = this;
    if (scrollable) {
      const buttons = this.getButtons();
      const activeButton = buttons.find((button) => button.value === value);
      if (activeButton !== void 0) {
        const scrollContainerBox = el.getBoundingClientRect();
        const activeButtonBox = activeButton.getBoundingClientRect();
        const activeButtonLeft = activeButtonBox.x - scrollContainerBox.x;
        const centeredX = activeButtonLeft - scrollContainerBox.width / 2 + activeButtonBox.width / 2;
        const newScrollPosition = el.scrollLeft + centeredX;
        el.scrollTo({
          top: 0,
          left: newScrollPosition,
          behavior: smoothScroll ? "smooth" : "instant"
        });
      }
    }
  }
  setNextIndex(detail, isEnd = false) {
    const rtl = isRTL(this.el);
    const activated = this.activated;
    const buttons = this.getButtons();
    const index = buttons.findIndex((button) => button.value === this.value);
    const previous = buttons[index];
    let current;
    let nextIndex;
    if (index === -1) {
      return;
    }
    const rect = previous.getBoundingClientRect();
    const left = rect.left;
    const width = rect.width;
    const currentX = detail.currentX;
    const previousY = rect.top + rect.height / 2;
    const root = this.el.getRootNode();
    const nextEl = root.elementFromPoint(currentX, previousY);
    const decreaseIndex = rtl ? currentX > left + width : currentX < left;
    const increaseIndex = rtl ? currentX < left : currentX > left + width;
    if (activated && !isEnd) {
      if (decreaseIndex) {
        const newIndex = index - 1;
        if (newIndex >= 0) {
          nextIndex = newIndex;
        }
      } else if (increaseIndex) {
        if (activated && !isEnd) {
          const newIndex = index + 1;
          if (newIndex < buttons.length) {
            nextIndex = newIndex;
          }
        }
      }
      if (nextIndex !== void 0 && !buttons[nextIndex].disabled) {
        current = buttons[nextIndex];
      }
    }
    if (!activated && isEnd) {
      current = nextEl;
    }
    if (current != null) {
      if (current.tagName === "ION-SEGMENT") {
        return false;
      }
      if (previous !== current) {
        this.checkButton(previous, current);
      }
    }
    return true;
  }
  emitStyle() {
    this.ionStyle.emit({
      segment: true
    });
  }
  onKeyDown(ev) {
    const rtl = isRTL(this.el);
    let keyDownSelectsButton = this.selectOnFocus;
    let current;
    switch (ev.key) {
      case "ArrowRight":
        ev.preventDefault();
        current = rtl ? this.getSegmentButton("previous") : this.getSegmentButton("next");
        break;
      case "ArrowLeft":
        ev.preventDefault();
        current = rtl ? this.getSegmentButton("next") : this.getSegmentButton("previous");
        break;
      case "Home":
        ev.preventDefault();
        current = this.getSegmentButton("first");
        break;
      case "End":
        ev.preventDefault();
        current = this.getSegmentButton("last");
        break;
      case " ":
      case "Enter":
        ev.preventDefault();
        current = document.activeElement;
        keyDownSelectsButton = true;
    }
    if (!current) {
      return;
    }
    if (keyDownSelectsButton) {
      const previous = this.checked;
      this.checkButton(previous || current, current);
      if (current !== previous) {
        this.emitValueChange();
      }
    }
    current.setFocus();
  }
  render() {
    const mode = getIonMode(this);
    return h(Host, {
      key: "e67ed512739cf2cfe657b0c44ebc3dfb1e9fbb79",
      role: "tablist",
      onClick: this.onClick,
      class: createColorClasses(this.color, {
        [mode]: true,
        "in-toolbar": hostContext("ion-toolbar", this.el),
        "in-toolbar-color": hostContext("ion-toolbar[color]", this.el),
        "segment-activated": this.activated,
        "segment-disabled": this.disabled,
        "segment-scrollable": this.scrollable
      })
    }, h("slot", {
      key: "804d8acfcb9abfeeee38244b015fbc5c36330b9e",
      onSlotchange: this.onSlottedItemsChange
    }));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "color": ["colorChanged"],
      "swipeGesture": ["swipeGestureChanged"],
      "value": ["valueChanged"],
      "disabled": ["disabledChanged"]
    };
  }
};
Segment.style = {
  ios: segmentIosCss,
  md: segmentMdCss
};
var segmentButtonIosCss = ':host{--color:initial;--color-hover:var(--color);--color-checked:var(--color);--color-disabled:var(--color);--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;border-radius:var(--border-radius);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:column;flex-direction:column;height:auto;background:var(--background);color:var(--color);text-decoration:none;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;grid-row:1;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:0;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;min-width:inherit;max-width:inherit;height:auto;min-height:inherit;max-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:none;outline:none;background:transparent;contain:content;pointer-events:none;overflow:hidden;z-index:2}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}:host(.segment-button-checked){background:var(--background-checked);color:var(--color-checked)}:host(.segment-button-disabled){cursor:default;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}:host(:focus){outline:none}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}:host(.segment-button-checked:hover) .button-native{color:var(--color-checked)}}::slotted(ion-icon){-ms-flex-negative:0;flex-shrink:0;-ms-flex-order:-1;order:-1;pointer-events:none}::slotted(ion-label){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;line-height:22px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host(.segment-button-layout-icon-top) .button-native{-ms-flex-direction:column;flex-direction:column}:host(.segment-button-layout-icon-start) .button-native{-ms-flex-direction:row;flex-direction:row}:host(.segment-button-layout-icon-end) .button-native{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.segment-button-layout-icon-bottom) .button-native{-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.segment-button-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.segment-button-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color, var(--color-checked))}.segment-button-indicator{-webkit-transform-origin:left;transform-origin:left;position:absolute;opacity:0;-webkit-box-sizing:border-box;box-sizing:border-box;will-change:transform, opacity;pointer-events:none}.segment-button-indicator-background{width:100%;height:var(--indicator-height);-webkit-transform:var(--indicator-transform);transform:var(--indicator-transform);-webkit-box-shadow:var(--indicator-box-shadow);box-shadow:var(--indicator-box-shadow);pointer-events:none}.segment-button-indicator-animated{-webkit-transition:var(--indicator-transition);transition:var(--indicator-transition)}:host(.segment-button-checked) .segment-button-indicator{opacity:1}@media (prefers-reduced-motion: reduce){.segment-button-indicator-background{-webkit-transform:none;transform:none}.segment-button-indicator-animated{-webkit-transition:none;transition:none}}:host{--background:none;--background-checked:none;--background-hover:none;--background-hover-opacity:0;--background-focused:none;--background-focused-opacity:0;--border-radius:7px;--border-width:1px;--border-color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.12);--border-style:solid;--indicator-box-shadow:0 0 5px rgba(0, 0, 0, 0.16);--indicator-color:var(--ion-color-step-350, var(--ion-background-color-step-350, var(--ion-background-color, #fff)));--indicator-height:100%;--indicator-transition:transform 260ms cubic-bezier(0.4, 0, 0.2, 1);--indicator-transform:none;--transition:100ms all linear;--padding-top:0;--padding-end:13px;--padding-bottom:0;--padding-start:13px;margin-top:2px;margin-bottom:2px;position:relative;-ms-flex-direction:row;flex-direction:row;min-width:70px;min-height:28px;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);font-size:13px;font-weight:450;line-height:37px}:host::before{margin-left:0;margin-right:0;margin-top:5px;margin-bottom:5px;-webkit-transition:160ms opacity ease-in-out;transition:160ms opacity ease-in-out;-webkit-transition-delay:100ms;transition-delay:100ms;border-left:var(--border-width) var(--border-style) var(--border-color);content:"";opacity:1;will-change:opacity}:host(:first-of-type)::before{border-left-color:transparent}:host(.segment-button-disabled){opacity:0.3}::slotted(ion-icon){font-size:24px}:host(.segment-button-layout-icon-start) ::slotted(ion-label){-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:0;margin-inline-end:0}:host(.segment-button-layout-icon-end) ::slotted(ion-label){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:2px;margin-inline-end:2px}.segment-button-indicator{-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:2px;padding-inline-end:2px;left:0;right:0;top:0;bottom:0}.segment-button-indicator-background{border-radius:var(--border-radius);background:var(--indicator-color)}.segment-button-indicator-background{-webkit-transition:var(--indicator-transition);transition:var(--indicator-transition)}:host(.segment-button-checked)::before,:host(.segment-button-after-checked)::before{opacity:0}:host(.segment-button-checked){z-index:-1}:host(.segment-button-activated){--indicator-transform:scale(0.95)}:host(.ion-focused) .button-native{opacity:0.7}@media (any-hover: hover){:host(:hover) .button-native{opacity:0.5}:host(.segment-button-checked:hover) .button-native{opacity:1}}:host(.in-segment-color){background:none;color:var(--ion-text-color, #000)}:host(.in-segment-color) .segment-button-indicator-background{background:var(--ion-color-step-350, var(--ion-background-color-step-350, var(--ion-background-color, #fff)))}@media (any-hover: hover){:host(.in-segment-color:hover) .button-native,:host(.in-segment-color.segment-button-checked:hover) .button-native{color:var(--ion-text-color, #000)}}:host(.in-toolbar:not(.in-segment-color)){--background-checked:var(--ion-toolbar-segment-background-checked, none);--color:var(--ion-toolbar-segment-color, var(--ion-toolbar-color), initial);--color-checked:var(--ion-toolbar-segment-color-checked, var(--ion-toolbar-color), initial);--indicator-color:var(--ion-toolbar-segment-indicator-color, var(--ion-color-step-350, var(--ion-background-color-step-350, var(--ion-background-color, #fff))))}:host(.in-toolbar-color) .segment-button-indicator-background{background:var(--ion-color-contrast)}:host(.in-toolbar-color:not(.in-segment-color)) .button-native{color:var(--ion-color-contrast)}:host(.in-toolbar-color.segment-button-checked:not(.in-segment-color)) .button-native{color:var(--ion-color-base)}@media (any-hover: hover){:host(.in-toolbar-color:not(.in-segment-color):hover) .button-native{color:var(--ion-color-contrast)}:host(.in-toolbar-color.segment-button-checked:not(.in-segment-color):hover) .button-native{color:var(--ion-color-base)}}';
var segmentButtonMdCss = ':host{--color:initial;--color-hover:var(--color);--color-checked:var(--color);--color-disabled:var(--color);--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;border-radius:var(--border-radius);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:column;flex-direction:column;height:auto;background:var(--background);color:var(--color);text-decoration:none;text-overflow:ellipsis;white-space:nowrap;cursor:pointer;grid-row:1;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:0;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;min-width:inherit;max-width:inherit;height:auto;min-height:inherit;max-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:none;outline:none;background:transparent;contain:content;pointer-events:none;overflow:hidden;z-index:2}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}:host(.segment-button-checked){background:var(--background-checked);color:var(--color-checked)}:host(.segment-button-disabled){cursor:default;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}:host(:focus){outline:none}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}:host(.segment-button-checked:hover) .button-native{color:var(--color-checked)}}::slotted(ion-icon){-ms-flex-negative:0;flex-shrink:0;-ms-flex-order:-1;order:-1;pointer-events:none}::slotted(ion-label){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;line-height:22px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host(.segment-button-layout-icon-top) .button-native{-ms-flex-direction:column;flex-direction:column}:host(.segment-button-layout-icon-start) .button-native{-ms-flex-direction:row;flex-direction:row}:host(.segment-button-layout-icon-end) .button-native{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.segment-button-layout-icon-bottom) .button-native{-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.segment-button-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.segment-button-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color, var(--color-checked))}.segment-button-indicator{-webkit-transform-origin:left;transform-origin:left;position:absolute;opacity:0;-webkit-box-sizing:border-box;box-sizing:border-box;will-change:transform, opacity;pointer-events:none}.segment-button-indicator-background{width:100%;height:var(--indicator-height);-webkit-transform:var(--indicator-transform);transform:var(--indicator-transform);-webkit-box-shadow:var(--indicator-box-shadow);box-shadow:var(--indicator-box-shadow);pointer-events:none}.segment-button-indicator-animated{-webkit-transition:var(--indicator-transition);transition:var(--indicator-transition)}:host(.segment-button-checked) .segment-button-indicator{opacity:1}@media (prefers-reduced-motion: reduce){.segment-button-indicator-background{-webkit-transform:none;transform:none}.segment-button-indicator-animated{-webkit-transition:none;transition:none}}:host{--background:none;--background-checked:none;--background-hover:var(--color-checked);--background-focused:var(--color-checked);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04;--color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.6);--color-checked:var(--ion-color-primary, #0054e9);--indicator-box-shadow:none;--indicator-color:var(--color-checked);--indicator-height:2px;--indicator-transition:transform 250ms cubic-bezier(0.4, 0, 0.2, 1);--indicator-transform:none;--padding-top:0;--padding-end:16px;--padding-bottom:0;--padding-start:16px;--transition:color 0.15s linear 0s, opacity 0.15s linear 0s;min-width:90px;min-height:48px;border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);font-size:14px;font-weight:500;letter-spacing:0.06em;line-height:40px;text-transform:uppercase}:host(.segment-button-disabled){opacity:0.3}:host(.in-segment-color){background:none;color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.6)}:host(.in-segment-color) ion-ripple-effect{color:var(--ion-color-base)}:host(.in-segment-color) .segment-button-indicator-background{background:var(--ion-color-base)}:host(.in-segment-color.segment-button-checked) .button-native{color:var(--ion-color-base)}:host(.in-segment-color.ion-focused) .button-native::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.in-segment-color:hover) .button-native{color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.6)}:host(.in-segment-color:hover) .button-native::after{background:var(--ion-color-base)}:host(.in-segment-color.segment-button-checked:hover) .button-native{color:var(--ion-color-base)}}:host(.in-toolbar:not(.in-segment-color)){--background:var(--ion-toolbar-segment-background, none);--background-checked:var(--ion-toolbar-segment-background-checked, none);--color:var(--ion-toolbar-segment-color, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.6));--color-checked:var(--ion-toolbar-segment-color-checked, var(--ion-color-primary, #0054e9));--indicator-color:var(--ion-toolbar-segment-color-checked, var(--color-checked))}:host(.in-toolbar-color:not(.in-segment-color)) .button-native{color:rgba(var(--ion-color-contrast-rgb), 0.6)}:host(.in-toolbar-color.segment-button-checked:not(.in-segment-color)) .button-native{color:var(--ion-color-contrast)}@media (any-hover: hover){:host(.in-toolbar-color:not(.in-segment-color)) .button-native::after{background:var(--ion-color-contrast)}}::slotted(ion-icon){margin-top:12px;margin-bottom:12px;font-size:24px}::slotted(ion-label){margin-top:12px;margin-bottom:12px}:host(.segment-button-layout-icon-top) ::slotted(ion-label),:host(.segment-button-layout-icon-bottom) ::slotted(ion-icon){margin-top:0}:host(.segment-button-layout-icon-top) ::slotted(ion-icon),:host(.segment-button-layout-icon-bottom) ::slotted(ion-label){margin-bottom:0}:host(.segment-button-layout-icon-start) ::slotted(ion-label){-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:0;margin-inline-end:0}:host(.segment-button-layout-icon-end) ::slotted(ion-label){-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}:host(.segment-button-has-icon-only) ::slotted(ion-icon){margin-top:12px;margin-bottom:12px}:host(.segment-button-has-label-only) ::slotted(ion-label){margin-top:12px;margin-bottom:12px}.segment-button-indicator{left:0;right:0;bottom:0}.segment-button-indicator-background{background:var(--indicator-color)}:host(.in-toolbar:not(.in-segment-color)) .segment-button-indicator-background{background:var(--ion-toolbar-segment-indicator-color, var(--indicator-color))}:host(.in-toolbar-color:not(.in-segment-color)) .segment-button-indicator-background{background:var(--ion-color-contrast)}';
var ids = 0;
var SegmentButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.segmentEl = null;
    this.inheritedAttributes = {};
    this.checked = false;
    this.disabled = false;
    this.layout = "icon-top";
    this.type = "button";
    this.value = "ion-sb-" + ids++;
    this.updateStyle = () => {
      forceUpdate(this);
    };
    this.updateState = () => {
      const {
        segmentEl
      } = this;
      if (segmentEl) {
        this.checked = segmentEl.value === this.value;
        if (segmentEl.disabled) {
          this.disabled = true;
        }
      }
    };
  }
  valueChanged() {
    this.updateState();
  }
  connectedCallback() {
    const segmentEl = this.segmentEl = this.el.closest("ion-segment");
    if (segmentEl) {
      this.updateState();
      addEventListener(segmentEl, "ionSelect", this.updateState);
      addEventListener(segmentEl, "ionStyle", this.updateStyle);
    }
    if (this.contentId && this.disabled) {
      printIonWarning(`[ion-segment-button] - Segment buttons cannot be disabled when associated with an <ion-segment-content>.`);
      this.disabled = false;
    }
  }
  disconnectedCallback() {
    const segmentEl = this.segmentEl;
    if (segmentEl) {
      removeEventListener(segmentEl, "ionSelect", this.updateState);
      removeEventListener(segmentEl, "ionStyle", this.updateStyle);
      this.segmentEl = null;
    }
  }
  componentWillLoad() {
    this.inheritedAttributes = Object.assign({}, inheritAttributes(this.el, ["aria-label"]));
    if (!this.contentId) return;
    const segmentContent = document.getElementById(this.contentId);
    if (!segmentContent) {
      printIonError(`[ion-segment-button] - Unable to find Segment Content with id="${this.contentId}".`);
      return;
    }
    if (segmentContent.tagName !== "ION-SEGMENT-CONTENT") {
      printIonError(`[ion-segment-button] - Element with id="${this.contentId}" is not an <ion-segment-content> element.`);
      return;
    }
  }
  get hasLabel() {
    return !!this.el.querySelector("ion-label");
  }
  get hasIcon() {
    return !!this.el.querySelector("ion-icon");
  }
  /**
   * @internal
   * Focuses the native <button> element
   * inside of ion-segment-button.
   */
  setFocus() {
    return __async(this, null, function* () {
      const {
        nativeEl
      } = this;
      if (nativeEl !== void 0) {
        nativeEl.focus();
      }
    });
  }
  render() {
    const {
      checked,
      type,
      disabled,
      hasIcon,
      hasLabel,
      layout,
      segmentEl
    } = this;
    const mode = getIonMode(this);
    const hasSegmentColor = () => (segmentEl === null || segmentEl === void 0 ? void 0 : segmentEl.color) !== void 0;
    return h(Host, {
      key: "26cb7ee90455bcaa6416125802d7e5729fa05b5b",
      class: {
        [mode]: true,
        "in-toolbar": hostContext("ion-toolbar", this.el),
        "in-toolbar-color": hostContext("ion-toolbar[color]", this.el),
        "in-segment": hostContext("ion-segment", this.el),
        "in-segment-color": hasSegmentColor(),
        "segment-button-has-label": hasLabel,
        "segment-button-has-icon": hasIcon,
        "segment-button-has-label-only": hasLabel && !hasIcon,
        "segment-button-has-icon-only": hasIcon && !hasLabel,
        "segment-button-disabled": disabled,
        "segment-button-checked": checked,
        [`segment-button-layout-${layout}`]: true,
        "ion-activatable": true,
        "ion-activatable-instant": true,
        "ion-focusable": true
      }
    }, h("button", Object.assign({
      key: "75add37f11c107d1e2cfdb154e08004e9579e863",
      "aria-selected": checked ? "true" : "false",
      role: "tab",
      ref: (el) => this.nativeEl = el,
      type,
      class: "button-native",
      part: "native",
      disabled
    }, this.inheritedAttributes), h("span", {
      key: "8e720d2a3e304903685bf09d226a64e944d78a22",
      class: "button-inner"
    }, h("slot", {
      key: "c8e7b3ebf8f03042a1001155643b585283c73c65"
    })), mode === "md" && h("ion-ripple-effect", {
      key: "3586ac317b8d82c92b0ccfbfae42f8778612321b"
    })), h("div", {
      key: "9cf93957da9e8dc333c8b05327bb903385b1c5f4",
      part: "indicator",
      class: "segment-button-indicator segment-button-indicator-animated"
    }, h("div", {
      key: "d3b6f0b3860ec6896b46703f64ed1cc8c75612e3",
      part: "indicator-background",
      class: "segment-button-indicator-background"
    })));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "value": ["valueChanged"]
    };
  }
};
SegmentButton.style = {
  ios: segmentButtonIosCss,
  md: segmentButtonMdCss
};
export {
  Segment as ion_segment,
  SegmentButton as ion_segment_button
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-segment_2.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tc2VnbWVudF8yLmVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgY3JlYXRlRXZlbnQsIHcgYXMgd3JpdGVUYXNrLCBoLCBkIGFzIEhvc3QsIGcgYXMgZ2V0RWxlbWVudCwgaSBhcyBmb3JjZVVwZGF0ZSwgZiBhcyBwcmludElvbldhcm5pbmcsIGogYXMgcHJpbnRJb25FcnJvciB9IGZyb20gJy4vaW5kZXgtNER4WTZfZ0cuanMnO1xuaW1wb3J0IHsgciBhcyByYWYsIGYgYXMgYWRkRXZlbnRMaXN0ZW5lciwgbSBhcyByZW1vdmVFdmVudExpc3RlbmVyLCBiIGFzIGluaGVyaXRBdHRyaWJ1dGVzIH0gZnJvbSAnLi9oZWxwZXJzLThLU1FRR1F5LmpzJztcbmltcG9ydCB7IGkgYXMgaXNSVEwgfSBmcm9tICcuL2Rpci1DNTNmZWFnRC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZUNvbG9yQ2xhc3NlcywgaCBhcyBob3N0Q29udGV4dCB9IGZyb20gJy4vdGhlbWUtRGlWSnlxbFguanMnO1xuaW1wb3J0IHsgYiBhcyBnZXRJb25Nb2RlIH0gZnJvbSAnLi9pb25pYy1nbG9iYWwtQ1RTeXVmaEYuanMnO1xuY29uc3Qgc2VnbWVudElvc0NzcyA9IFwiOmhvc3R7LS1yaXBwbGUtY29sb3I6Y3VycmVudENvbG9yOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO2Rpc3BsYXk6Z3JpZDtncmlkLWF1dG8tY29sdW1uczoxZnI7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtYWxpZ246c3RyZXRjaDthbGlnbi1pdGVtczpzdHJldGNoOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6MTAwJTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2ZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseSwgaW5oZXJpdCk7dGV4dC1hbGlnbjpjZW50ZXI7Y29udGFpbjpwYWludDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9Omhvc3QoLnNlZ21lbnQtc2Nyb2xsYWJsZSl7LW1zLWZsZXgtcGFjazpzdGFydDtqdXN0aWZ5LWNvbnRlbnQ6c3RhcnQ7d2lkdGg6YXV0bztvdmVyZmxvdy14OmF1dG87Z3JpZC1hdXRvLWNvbHVtbnM6bWlubWF4KC13ZWJraXQtbWluLWNvbnRlbnQsIDFmcik7Z3JpZC1hdXRvLWNvbHVtbnM6bWlubWF4KG1pbi1jb250ZW50LCAxZnIpfTpob3N0KC5zZWdtZW50LXNjcm9sbGFibGU6Oi13ZWJraXQtc2Nyb2xsYmFyKXtkaXNwbGF5Om5vbmV9Omhvc3R7LS1iYWNrZ3JvdW5kOnJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLCAwLCAwLCAwKSwgMC4wNjUpO2JvcmRlci1yYWRpdXM6OHB4O292ZXJmbG93OmhpZGRlbjt6LWluZGV4OjB9Omhvc3QoLmlvbi1jb2xvcil7YmFja2dyb3VuZDpyZ2JhKHZhcigtLWlvbi1jb2xvci1iYXNlLXJnYiksIDAuMDY1KX06aG9zdCguaW4tdG9vbGJhcil7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6YXV0bzttYXJnaW4taW5saW5lLXN0YXJ0OmF1dG87LXdlYmtpdC1tYXJnaW4tZW5kOmF1dG87bWFyZ2luLWlubGluZS1lbmQ6YXV0bzttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowO3dpZHRoOmF1dG99Omhvc3QoLmluLXRvb2xiYXI6bm90KC5pb24tY29sb3IpKXtiYWNrZ3JvdW5kOnZhcigtLWlvbi10b29sYmFyLXNlZ21lbnQtYmFja2dyb3VuZCwgdmFyKC0tYmFja2dyb3VuZCkpfTpob3N0KC5pbi10b29sYmFyLWNvbG9yOm5vdCguaW9uLWNvbG9yKSl7YmFja2dyb3VuZDpyZ2JhKHZhcigtLWlvbi1jb2xvci1jb250cmFzdC1yZ2IpLCAwLjExKX1cIjtcbmNvbnN0IHNlZ21lbnRNZENzcyA9IFwiOmhvc3R7LS1yaXBwbGUtY29sb3I6Y3VycmVudENvbG9yOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO2Rpc3BsYXk6Z3JpZDtncmlkLWF1dG8tY29sdW1uczoxZnI7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtYWxpZ246c3RyZXRjaDthbGlnbi1pdGVtczpzdHJldGNoOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6MTAwJTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2ZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseSwgaW5oZXJpdCk7dGV4dC1hbGlnbjpjZW50ZXI7Y29udGFpbjpwYWludDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9Omhvc3QoLnNlZ21lbnQtc2Nyb2xsYWJsZSl7LW1zLWZsZXgtcGFjazpzdGFydDtqdXN0aWZ5LWNvbnRlbnQ6c3RhcnQ7d2lkdGg6YXV0bztvdmVyZmxvdy14OmF1dG87Z3JpZC1hdXRvLWNvbHVtbnM6bWlubWF4KC13ZWJraXQtbWluLWNvbnRlbnQsIDFmcik7Z3JpZC1hdXRvLWNvbHVtbnM6bWlubWF4KG1pbi1jb250ZW50LCAxZnIpfTpob3N0KC5zZWdtZW50LXNjcm9sbGFibGU6Oi13ZWJraXQtc2Nyb2xsYmFyKXtkaXNwbGF5Om5vbmV9Omhvc3R7LS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2dyaWQtYXV0by1jb2x1bW5zOm1pbm1heChhdXRvLCAzNjBweCl9Omhvc3QoLmluLXRvb2xiYXIpe21pbi1oZWlnaHQ6dmFyKC0tbWluLWhlaWdodCl9Omhvc3QoLnNlZ21lbnQtc2Nyb2xsYWJsZSkgOjpzbG90dGVkKGlvbi1zZWdtZW50LWJ1dHRvbil7bWluLXdpZHRoOmF1dG99XCI7XG5jb25zdCBTZWdtZW50ID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmlvbkNoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uQ2hhbmdlXCIsIDcpO1xuICAgIHRoaXMuaW9uU2VsZWN0ID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25TZWxlY3RcIiwgNyk7XG4gICAgdGhpcy5pb25TdHlsZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uU3R5bGVcIiwgNyk7XG4gICAgdGhpcy5zZWdtZW50Vmlld0VsID0gbnVsbDtcbiAgICB0aGlzLmFjdGl2YXRlZCA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIElmIGB0cnVlYCwgdGhlIHVzZXIgY2Fubm90IGludGVyYWN0IHdpdGggdGhlIHNlZ21lbnQuXG4gICAgICovXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIElmIGB0cnVlYCwgdGhlIHNlZ21lbnQgYnV0dG9ucyB3aWxsIG92ZXJmbG93IGFuZCB0aGUgdXNlciBjYW4gc3dpcGUgdG8gc2VlIHRoZW0uXG4gICAgICogSW4gYWRkaXRpb24sIHRoaXMgd2lsbCBkaXNhYmxlIHRoZSBnZXN0dXJlIHRvIGRyYWcgdGhlIGluZGljYXRvciBiZXR3ZWVuIHRoZSBidXR0b25zXG4gICAgICogaW4gb3JkZXIgdG8gc3dpcGUgdG8gc2VlIGhpZGRlbiBidXR0b25zLlxuICAgICAqL1xuICAgIHRoaXMuc2Nyb2xsYWJsZSA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIElmIGB0cnVlYCwgdXNlcnMgd2lsbCBiZSBhYmxlIHRvIHN3aXBlIGJldHdlZW4gc2VnbWVudCBidXR0b25zIHRvIGFjdGl2YXRlIHRoZW0uXG4gICAgICovXG4gICAgdGhpcy5zd2lwZUdlc3R1cmUgPSB0cnVlO1xuICAgIC8qKlxuICAgICAqIElmIGB0cnVlYCwgbmF2aWdhdGluZyB0byBhbiBgaW9uLXNlZ21lbnQtYnV0dG9uYCB3aXRoIHRoZSBrZXlib2FyZCB3aWxsIGZvY3VzIGFuZCBzZWxlY3QgdGhlIGVsZW1lbnQuXG4gICAgICogSWYgYGZhbHNlYCwga2V5Ym9hcmQgbmF2aWdhdGlvbiB3aWxsIG9ubHkgZm9jdXMgdGhlIGBpb24tc2VnbWVudC1idXR0b25gIGVsZW1lbnQuXG4gICAgICovXG4gICAgdGhpcy5zZWxlY3RPbkZvY3VzID0gZmFsc2U7XG4gICAgdGhpcy5vbkNsaWNrID0gZXYgPT4ge1xuICAgICAgY29uc3QgY3VycmVudCA9IGV2LnRhcmdldDtcbiAgICAgIGNvbnN0IHByZXZpb3VzID0gdGhpcy5jaGVja2VkO1xuICAgICAgLy8gSWYgdGhlIGN1cnJlbnQgZWxlbWVudCBpcyBhIHNlZ21lbnQgdGhlbiB0aGF0IG1lYW5zXG4gICAgICAvLyB0aGUgdXNlciB0cmllZCB0byBzd2lwZSB0byBhIHNlZ21lbnQgYnV0dG9uIGFuZFxuICAgICAgLy8gY2xpY2sgYSBzZWdtZW50IGJ1dHRvbiBhdCB0aGUgc2FtZSB0aW1lIHNvIHdlIHNob3VsZFxuICAgICAgLy8gbm90IHVwZGF0ZSB0aGUgY2hlY2tlZCBzZWdtZW50IGJ1dHRvblxuICAgICAgaWYgKGN1cnJlbnQudGFnTmFtZSA9PT0gJ0lPTi1TRUdNRU5UJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnZhbHVlID0gY3VycmVudC52YWx1ZTtcbiAgICAgIGlmIChjdXJyZW50ICE9PSBwcmV2aW91cykge1xuICAgICAgICB0aGlzLmVtaXRWYWx1ZUNoYW5nZSgpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2VnbWVudFZpZXdFbCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVNlZ21lbnRWaWV3KCk7XG4gICAgICAgIGlmICh0aGlzLnNjcm9sbGFibGUgJiYgcHJldmlvdXMpIHtcbiAgICAgICAgICB0aGlzLmNoZWNrQnV0dG9uKHByZXZpb3VzLCBjdXJyZW50KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnNjcm9sbGFibGUgfHwgIXRoaXMuc3dpcGVHZXN0dXJlKSB7XG4gICAgICAgIGlmIChwcmV2aW91cykge1xuICAgICAgICAgIHRoaXMuY2hlY2tCdXR0b24ocHJldmlvdXMsIGN1cnJlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0Q2hlY2tlZENsYXNzZXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5vblNsb3R0ZWRJdGVtc0NoYW5nZSA9ICgpID0+IHtcbiAgICAgIC8qKlxuICAgICAgICogV2hlbiB0aGUgc2xvdHRlZCBzZWdtZW50IGJ1dHRvbnMgY2hhbmdlIHdlIG5lZWQgdG9cbiAgICAgICAqIGVuc3VyZSB0aGF0IHRoZSBuZXcgc2VnbWVudCBidXR0b25zIGFyZSBjaGVja2VkIGlmXG4gICAgICAgKiB0aGUgdmFsdWUgbWF0Y2hlcyB0aGUgc2VnbWVudCBidXR0b24gdmFsdWUuXG4gICAgICAgKi9cbiAgICAgIHRoaXMudmFsdWVDaGFuZ2VkKHRoaXMudmFsdWUpO1xuICAgIH07XG4gICAgdGhpcy5nZXRTZWdtZW50QnV0dG9uID0gc2VsZWN0b3IgPT4ge1xuICAgICAgdmFyIF9hLCBfYjtcbiAgICAgIGNvbnN0IGJ1dHRvbnMgPSB0aGlzLmdldEJ1dHRvbnMoKS5maWx0ZXIoYnV0dG9uID0+ICFidXR0b24uZGlzYWJsZWQpO1xuICAgICAgY29uc3QgY3VyckluZGV4ID0gYnV0dG9ucy5maW5kSW5kZXgoYnV0dG9uID0+IGJ1dHRvbiA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG4gICAgICBzd2l0Y2ggKHNlbGVjdG9yKSB7XG4gICAgICAgIGNhc2UgJ2ZpcnN0JzpcbiAgICAgICAgICByZXR1cm4gYnV0dG9uc1swXTtcbiAgICAgICAgY2FzZSAnbGFzdCc6XG4gICAgICAgICAgcmV0dXJuIGJ1dHRvbnNbYnV0dG9ucy5sZW5ndGggLSAxXTtcbiAgICAgICAgY2FzZSAnbmV4dCc6XG4gICAgICAgICAgcmV0dXJuIChfYSA9IGJ1dHRvbnNbY3VyckluZGV4ICsgMV0pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGJ1dHRvbnNbMF07XG4gICAgICAgIGNhc2UgJ3ByZXZpb3VzJzpcbiAgICAgICAgICByZXR1cm4gKF9iID0gYnV0dG9uc1tjdXJySW5kZXggLSAxXSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogYnV0dG9uc1tidXR0b25zLmxlbmd0aCAtIDFdO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH07XG4gIH1cbiAgY29sb3JDaGFuZ2VkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgIC8qKlxuICAgICAqIElmIGNvbG9yIGlzIHNldCBhZnRlciBub3QgaGF2aW5nXG4gICAgICogcHJldmlvdXNseSBiZWVuIHNldCAob3IgdmljZSB2ZXJzYSksXG4gICAgICogd2UgbmVlZCB0byBlbWl0IHN0eWxlIHNvIHRoZSBzZWdtZW50LWJ1dHRvbnNcbiAgICAgKiBjYW4gYXBwbHkgdGhlaXIgY29sb3IgY2xhc3NlcyBwcm9wZXJseS5cbiAgICAgKi9cbiAgICBpZiAob2xkVmFsdWUgPT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkIHx8IG9sZFZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5lbWl0U3R5bGUoKTtcbiAgICB9XG4gIH1cbiAgc3dpcGVHZXN0dXJlQ2hhbmdlZCgpIHtcbiAgICB0aGlzLmdlc3R1cmVDaGFuZ2VkKCk7XG4gIH1cbiAgdmFsdWVDaGFuZ2VkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgIC8vIEZvcmNlIGEgdmFsdWUgdG8gZXhpc3QgaWYgd2UncmUgdXNpbmcgYSBzZWdtZW50IHZpZXdcbiAgICBpZiAodGhpcy5zZWdtZW50Vmlld0VsICYmIHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmdldEJ1dHRvbnMoKVswXS52YWx1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG9sZFZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgYnV0dG9ucyA9IHRoaXMuZ2V0QnV0dG9ucygpO1xuICAgICAgY29uc3QgcHJldmlvdXMgPSBidXR0b25zLmZpbmQoYnV0dG9uID0+IGJ1dHRvbi52YWx1ZSA9PT0gb2xkVmFsdWUpO1xuICAgICAgY29uc3QgY3VycmVudCA9IGJ1dHRvbnMuZmluZChidXR0b24gPT4gYnV0dG9uLnZhbHVlID09PSB2YWx1ZSk7XG4gICAgICBpZiAocHJldmlvdXMgJiYgY3VycmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuc2VnbWVudFZpZXdFbCkge1xuICAgICAgICAgIHRoaXMuY2hlY2tCdXR0b24ocHJldmlvdXMsIGN1cnJlbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudHJpZ2dlclNjcm9sbE9uVmFsdWVDaGFuZ2UgIT09IGZhbHNlKSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVTZWdtZW50VmlldygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIG9sZFZhbHVlID09PSB1bmRlZmluZWQgJiYgdGhpcy5zZWdtZW50Vmlld0VsKSB7XG4gICAgICB0aGlzLnVwZGF0ZVNlZ21lbnRWaWV3KCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIGBpb25TZWxlY3RgIGlzIGVtaXR0ZWQgZXZlcnkgdGltZSB0aGUgdmFsdWUgY2hhbmdlcyAoaW50ZXJuYWwgb3IgZXh0ZXJuYWwgY2hhbmdlcykuXG4gICAgICogVXNlZCBieSBgaW9uLXNlZ21lbnQtYnV0dG9uYCB0byBkZXRlcm1pbmUgaWYgdGhlIGJ1dHRvbiBzaG91bGQgYmUgY2hlY2tlZC5cbiAgICAgKi9cbiAgICB0aGlzLmlvblNlbGVjdC5lbWl0KHtcbiAgICAgIHZhbHVlXG4gICAgfSk7XG4gICAgLy8gVGhlIHNjcm9sbCBsaXN0ZW5lciBzaG91bGQgaGFuZGxlIHNjcm9sbGluZyB0aGUgYWN0aXZlIGJ1dHRvbiBpbnRvIHZpZXcgYXMgbmVlZGVkXG4gICAgaWYgKCF0aGlzLnNlZ21lbnRWaWV3RWwpIHtcbiAgICAgIHRoaXMuc2Nyb2xsQWN0aXZlQnV0dG9uSW50b1ZpZXcoKTtcbiAgICB9XG4gICAgdGhpcy50cmlnZ2VyU2Nyb2xsT25WYWx1ZUNoYW5nZSA9IHVuZGVmaW5lZDtcbiAgfVxuICBkaXNhYmxlZENoYW5nZWQoKSB7XG4gICAgdGhpcy5nZXN0dXJlQ2hhbmdlZCgpO1xuICAgIGlmICghdGhpcy5zZWdtZW50Vmlld0VsKSB7XG4gICAgICBjb25zdCBidXR0b25zID0gdGhpcy5nZXRCdXR0b25zKCk7XG4gICAgICBmb3IgKGNvbnN0IGJ1dHRvbiBvZiBidXR0b25zKSB7XG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VnbWVudFZpZXdFbC5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQ7XG4gICAgfVxuICB9XG4gIGdlc3R1cmVDaGFuZ2VkKCkge1xuICAgIGlmICh0aGlzLmdlc3R1cmUpIHtcbiAgICAgIHRoaXMuZ2VzdHVyZS5lbmFibGUoIXRoaXMuc2Nyb2xsYWJsZSAmJiAhdGhpcy5kaXNhYmxlZCAmJiB0aGlzLnN3aXBlR2VzdHVyZSk7XG4gICAgfVxuICB9XG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuZW1pdFN0eWxlKCk7XG4gICAgdGhpcy5zZWdtZW50Vmlld0VsID0gdGhpcy5nZXRTZWdtZW50VmlldygpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuc2VnbWVudFZpZXdFbCA9IG51bGw7XG4gIH1cbiAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgdGhpcy5lbWl0U3R5bGUoKTtcbiAgfVxuICBhc3luYyBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHRoaXMuc2VnbWVudFZpZXdFbCA9IHRoaXMuZ2V0U2VnbWVudFZpZXcoKTtcbiAgICB0aGlzLnNldENoZWNrZWRDbGFzc2VzKCk7XG4gICAgLyoqXG4gICAgICogV2UgbmVlZCB0byB3YWl0IGZvciB0aGUgYnV0dG9ucyB0byBhbGwgYmUgcmVuZGVyZWRcbiAgICAgKiBiZWZvcmUgd2UgY2FuIHNjcm9sbC5cbiAgICAgKi9cbiAgICByYWYoKCkgPT4ge1xuICAgICAgLyoqXG4gICAgICAgKiBXaGVuIHRoZSBzZWdtZW50IGxvYWRzIGZvciB0aGUgZmlyc3RcbiAgICAgICAqIHRpbWUgd2UganVzdCB3YW50IHRvIHNuYXAgdGhlIGFjdGl2ZSBidXR0b24gaW50b1xuICAgICAgICogcGxhY2UgaW5zdGVhZCBvZiBzY3JvbGwuIFNtb290aCBzY3JvbGxpbmcgc2hvdWxkIG9ubHlcbiAgICAgICAqIGhhcHBlbiB3aGVuIHRoZSB1c2VyIGludGVyYWN0cyB3aXRoIHRoZSBzZWdtZW50LlxuICAgICAgICovXG4gICAgICB0aGlzLnNjcm9sbEFjdGl2ZUJ1dHRvbkludG9WaWV3KGZhbHNlKTtcbiAgICB9KTtcbiAgICB0aGlzLmdlc3R1cmUgPSAoYXdhaXQgaW1wb3J0KCcuL2luZGV4LUNmZ0JGMVNFLmpzJykpLmNyZWF0ZUdlc3R1cmUoe1xuICAgICAgZWw6IHRoaXMuZWwsXG4gICAgICBnZXN0dXJlTmFtZTogJ3NlZ21lbnQnLFxuICAgICAgZ2VzdHVyZVByaW9yaXR5OiAxMDAsXG4gICAgICB0aHJlc2hvbGQ6IDAsXG4gICAgICBwYXNzaXZlOiBmYWxzZSxcbiAgICAgIG9uU3RhcnQ6IGV2ID0+IHRoaXMub25TdGFydChldiksXG4gICAgICBvbk1vdmU6IGV2ID0+IHRoaXMub25Nb3ZlKGV2KSxcbiAgICAgIG9uRW5kOiBldiA9PiB0aGlzLm9uRW5kKGV2KVxuICAgIH0pO1xuICAgIHRoaXMuZ2VzdHVyZUNoYW5nZWQoKTtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5kaXNhYmxlZENoYW5nZWQoKTtcbiAgICB9XG4gICAgLy8gVXBkYXRlIHNlZ21lbnQgdmlldyBiYXNlZCBvbiB0aGUgaW5pdGlhbCB2YWx1ZSxcbiAgICAvLyBidXQgZG8gbm90IGFuaW1hdGUgdGhlIHNjcm9sbFxuICAgIHRoaXMudXBkYXRlU2VnbWVudFZpZXcoZmFsc2UpO1xuICB9XG4gIG9uU3RhcnQoZGV0YWlsKSB7XG4gICAgdGhpcy52YWx1ZUJlZm9yZUdlc3R1cmUgPSB0aGlzLnZhbHVlO1xuICAgIHRoaXMuYWN0aXZhdGUoZGV0YWlsKTtcbiAgfVxuICBvbk1vdmUoZGV0YWlsKSB7XG4gICAgdGhpcy5zZXROZXh0SW5kZXgoZGV0YWlsKTtcbiAgfVxuICBvbkVuZChkZXRhaWwpIHtcbiAgICB0aGlzLnNldEFjdGl2YXRlZChmYWxzZSk7XG4gICAgdGhpcy5zZXROZXh0SW5kZXgoZGV0YWlsLCB0cnVlKTtcbiAgICBkZXRhaWwuZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodGhpcy52YWx1ZUJlZm9yZUdlc3R1cmUgIT09IHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZW1pdFZhbHVlQ2hhbmdlKCk7XG4gICAgICAgIHRoaXMudXBkYXRlU2VnbWVudFZpZXcoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy52YWx1ZUJlZm9yZUdlc3R1cmUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLyoqXG4gICAqIEVtaXRzIGFuIGBpb25DaGFuZ2VgIGV2ZW50LlxuICAgKlxuICAgKiBUaGlzIEFQSSBzaG91bGQgYmUgY2FsbGVkIGZvciB1c2VyIGNvbW1pdHRlZCBjaGFuZ2VzLlxuICAgKiBUaGlzIEFQSSBzaG91bGQgbm90IGJlIHVzZWQgZm9yIGV4dGVybmFsIHZhbHVlIGNoYW5nZXMuXG4gICAqL1xuICBlbWl0VmFsdWVDaGFuZ2UoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdmFsdWVcbiAgICB9ID0gdGhpcztcbiAgICB0aGlzLmlvbkNoYW5nZS5lbWl0KHtcbiAgICAgIHZhbHVlXG4gICAgfSk7XG4gIH1cbiAgZ2V0QnV0dG9ucygpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lvbi1zZWdtZW50LWJ1dHRvbicpKTtcbiAgfVxuICBnZXQgY2hlY2tlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCdXR0b25zKCkuZmluZChidXR0b24gPT4gYnV0dG9uLnZhbHVlID09PSB0aGlzLnZhbHVlKTtcbiAgfVxuICAvKlxuICAgKiBBY3RpdmF0ZSBib3RoIHRoZSBzZWdtZW50IGFuZCB0aGUgYnV0dG9uc1xuICAgKiBkdWUgdG8gYSBidWcgd2l0aCA6OnNsb3R0ZWQgaW4gU2FmYXJpXG4gICAqL1xuICBzZXRBY3RpdmF0ZWQoYWN0aXZhdGVkKSB7XG4gICAgY29uc3QgYnV0dG9ucyA9IHRoaXMuZ2V0QnV0dG9ucygpO1xuICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ3NlZ21lbnQtYnV0dG9uLWFjdGl2YXRlZCcsIGFjdGl2YXRlZCk7XG4gICAgfSk7XG4gICAgdGhpcy5hY3RpdmF0ZWQgPSBhY3RpdmF0ZWQ7XG4gIH1cbiAgYWN0aXZhdGUoZGV0YWlsKSB7XG4gICAgY29uc3QgY2xpY2tlZCA9IGRldGFpbC5ldmVudC50YXJnZXQ7XG4gICAgY29uc3QgYnV0dG9ucyA9IHRoaXMuZ2V0QnV0dG9ucygpO1xuICAgIGNvbnN0IGNoZWNrZWQgPSBidXR0b25zLmZpbmQoYnV0dG9uID0+IGJ1dHRvbi52YWx1ZSA9PT0gdGhpcy52YWx1ZSk7XG4gICAgLy8gTWFrZSBzdXJlIHdlIGFyZSBvbmx5IGNoZWNraW5nIGZvciBhY3RpdmF0aW9uIG9uIGEgc2VnbWVudCBidXR0b25cbiAgICAvLyBzaW5jZSBkaXNhYmxlZCBidXR0b25zIHdpbGwgZ2V0IHRoZSBjbGljayBvbiB0aGUgc2VnbWVudFxuICAgIGlmIChjbGlja2VkLnRhZ05hbWUgIT09ICdJT04tU0VHTUVOVC1CVVRUT04nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIElmIHRoZXJlIGFyZSBubyBjaGVja2VkIGJ1dHRvbnMsIHNldCB0aGUgY3VycmVudCBidXR0b24gdG8gY2hlY2tlZFxuICAgIGlmICghY2hlY2tlZCkge1xuICAgICAgdGhpcy52YWx1ZSA9IGNsaWNrZWQudmFsdWU7XG4gICAgICB0aGlzLnNldENoZWNrZWRDbGFzc2VzKCk7XG4gICAgfVxuICAgIC8vIElmIHRoZSBnZXN0dXJlIGJlZ2FuIG9uIHRoZSBjbGlja2VkIGJ1dHRvbiB3aXRoIHRoZSBpbmRpY2F0b3JcbiAgICAvLyB0aGVuIHdlIHNob3VsZCBhY3RpdmF0ZSB0aGUgaW5kaWNhdG9yXG4gICAgaWYgKHRoaXMudmFsdWUgPT09IGNsaWNrZWQudmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0QWN0aXZhdGVkKHRydWUpO1xuICAgIH1cbiAgfVxuICBnZXRJbmRpY2F0b3IoYnV0dG9uKSB7XG4gICAgY29uc3Qgcm9vdCA9IGJ1dHRvbi5zaGFkb3dSb290IHx8IGJ1dHRvbjtcbiAgICByZXR1cm4gcm9vdC5xdWVyeVNlbGVjdG9yKCcuc2VnbWVudC1idXR0b24taW5kaWNhdG9yJyk7XG4gIH1cbiAgY2hlY2tCdXR0b24ocHJldmlvdXMsIGN1cnJlbnQpIHtcbiAgICBjb25zdCBwcmV2aW91c0luZGljYXRvciA9IHRoaXMuZ2V0SW5kaWNhdG9yKHByZXZpb3VzKTtcbiAgICBjb25zdCBjdXJyZW50SW5kaWNhdG9yID0gdGhpcy5nZXRJbmRpY2F0b3IoY3VycmVudCk7XG4gICAgaWYgKHByZXZpb3VzSW5kaWNhdG9yID09PSBudWxsIHx8IGN1cnJlbnRJbmRpY2F0b3IgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcHJldmlvdXNDbGllbnRSZWN0ID0gcHJldmlvdXNJbmRpY2F0b3IuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgY3VycmVudENsaWVudFJlY3QgPSBjdXJyZW50SW5kaWNhdG9yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHdpZHRoRGVsdGEgPSBwcmV2aW91c0NsaWVudFJlY3Qud2lkdGggLyBjdXJyZW50Q2xpZW50UmVjdC53aWR0aDtcbiAgICBjb25zdCB4UG9zaXRpb24gPSBwcmV2aW91c0NsaWVudFJlY3QubGVmdCAtIGN1cnJlbnRDbGllbnRSZWN0LmxlZnQ7XG4gICAgLy8gU2NhbGUgdGhlIGluZGljYXRvciB3aWR0aCB0byBtYXRjaCB0aGUgcHJldmlvdXMgaW5kaWNhdG9yIHdpZHRoXG4gICAgLy8gYW5kIHRyYW5zbGF0ZSBpdCBvbiB0b3Agb2YgdGhlIHByZXZpb3VzIGluZGljYXRvclxuICAgIGNvbnN0IHRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgke3hQb3NpdGlvbn1weCwgMCwgMCkgc2NhbGVYKCR7d2lkdGhEZWx0YX0pYDtcbiAgICB3cml0ZVRhc2soKCkgPT4ge1xuICAgICAgLy8gUmVtb3ZlIHRoZSB0cmFuc2l0aW9uIGJlZm9yZSBwb3NpdGlvbmluZyBvbiB0b3Agb2YgdGhlIHByZXZpb3VzIGluZGljYXRvclxuICAgICAgY3VycmVudEluZGljYXRvci5jbGFzc0xpc3QucmVtb3ZlKCdzZWdtZW50LWJ1dHRvbi1pbmRpY2F0b3ItYW5pbWF0ZWQnKTtcbiAgICAgIGN1cnJlbnRJbmRpY2F0b3Iuc3R5bGUuc2V0UHJvcGVydHkoJ3RyYW5zZm9ybScsIHRyYW5zZm9ybSk7XG4gICAgICAvLyBGb3JjZSBhIHJlcGFpbnQgdG8gZW5zdXJlIHRoZSB0cmFuc2Zvcm0gaGFwcGVuc1xuICAgICAgY3VycmVudEluZGljYXRvci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIC8vIEFkZCB0aGUgdHJhbnNpdGlvbiB0byBtb3ZlIHRoZSBpbmRpY2F0b3IgaW50byBwbGFjZVxuICAgICAgY3VycmVudEluZGljYXRvci5jbGFzc0xpc3QuYWRkKCdzZWdtZW50LWJ1dHRvbi1pbmRpY2F0b3ItYW5pbWF0ZWQnKTtcbiAgICAgIC8vIFJlbW92ZSB0aGUgdHJhbnNmb3JtIHRvIHNsaWRlIHRoZSBpbmRpY2F0b3IgYmFjayB0byB0aGUgYnV0dG9uIGNsaWNrZWRcbiAgICAgIGN1cnJlbnRJbmRpY2F0b3Iuc3R5bGUuc2V0UHJvcGVydHkoJ3RyYW5zZm9ybScsICcnKTtcbiAgICAgIHRoaXMuc2Nyb2xsQWN0aXZlQnV0dG9uSW50b1ZpZXcodHJ1ZSk7XG4gICAgfSk7XG4gICAgdGhpcy52YWx1ZSA9IGN1cnJlbnQudmFsdWU7XG4gICAgdGhpcy5zZXRDaGVja2VkQ2xhc3NlcygpO1xuICB9XG4gIHNldENoZWNrZWRDbGFzc2VzKCkge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSB0aGlzLmdldEJ1dHRvbnMoKTtcbiAgICBjb25zdCBpbmRleCA9IGJ1dHRvbnMuZmluZEluZGV4KGJ1dHRvbiA9PiBidXR0b24udmFsdWUgPT09IHRoaXMudmFsdWUpO1xuICAgIGNvbnN0IG5leHQgPSBpbmRleCArIDE7XG4gICAgZm9yIChjb25zdCBidXR0b24gb2YgYnV0dG9ucykge1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3NlZ21lbnQtYnV0dG9uLWFmdGVyLWNoZWNrZWQnKTtcbiAgICB9XG4gICAgaWYgKG5leHQgPCBidXR0b25zLmxlbmd0aCkge1xuICAgICAgYnV0dG9uc1tuZXh0XS5jbGFzc0xpc3QuYWRkKCdzZWdtZW50LWJ1dHRvbi1hZnRlci1jaGVja2VkJyk7XG4gICAgfVxuICB9XG4gIGdldFNlZ21lbnRWaWV3KCkge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSB0aGlzLmdldEJ1dHRvbnMoKTtcbiAgICAvLyBHZXQgdGhlIGZpcnN0IGJ1dHRvbiB3aXRoIGEgY29udGVudElkXG4gICAgY29uc3QgZmlyc3RDb250ZW50SWQgPSBidXR0b25zLmZpbmQoYnV0dG9uID0+IGJ1dHRvbi5jb250ZW50SWQpO1xuICAgIC8vIEdldCB0aGUgc2VnbWVudCBjb250ZW50IHdpdGggYW4gaWQgbWF0Y2hpbmcgdGhlIGJ1dHRvbidzIGNvbnRlbnRJZFxuICAgIGNvbnN0IHNlZ21lbnRDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW9uLXNlZ21lbnQtY29udGVudFtpZD1cIiR7Zmlyc3RDb250ZW50SWQgPT09IG51bGwgfHwgZmlyc3RDb250ZW50SWQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGZpcnN0Q29udGVudElkLmNvbnRlbnRJZH1cIl1gKTtcbiAgICAvLyBSZXR1cm4gdGhlIHNlZ21lbnQgdmlldyBmb3IgdGhhdCBtYXRjaGluZyBzZWdtZW50IGNvbnRlbnRcbiAgICByZXR1cm4gc2VnbWVudENvbnRlbnQgPT09IG51bGwgfHwgc2VnbWVudENvbnRlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNlZ21lbnRDb250ZW50LmNsb3Nlc3QoJ2lvbi1zZWdtZW50LXZpZXcnKTtcbiAgfVxuICBoYW5kbGVTZWdtZW50Vmlld1Njcm9sbChldikge1xuICAgIGNvbnN0IHtcbiAgICAgIHNjcm9sbFJhdGlvLFxuICAgICAgaXNNYW51YWxTY3JvbGxcbiAgICB9ID0gZXYuZGV0YWlsO1xuICAgIGlmICghaXNNYW51YWxTY3JvbGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZGlzcGF0Y2hlZEZyb20gPSBldi50YXJnZXQ7XG4gICAgY29uc3Qgc2VnbWVudFZpZXdFbCA9IHRoaXMuc2VnbWVudFZpZXdFbDtcbiAgICBjb25zdCBzZWdtZW50RWwgPSB0aGlzLmVsO1xuICAgIC8vIE9ubHkgdXBkYXRlIHRoZSBpbmRpY2F0b3IgaWYgdGhlIGV2ZW50IHdhcyBkaXNwYXRjaGVkIGZyb20gdGhlIGNvcnJlY3Qgc2VnbWVudCB2aWV3XG4gICAgaWYgKGV2LmNvbXBvc2VkUGF0aCgpLmluY2x1ZGVzKHNlZ21lbnRWaWV3RWwpIHx8IChkaXNwYXRjaGVkRnJvbSA9PT0gbnVsbCB8fCBkaXNwYXRjaGVkRnJvbSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGlzcGF0Y2hlZEZyb20uY29udGFpbnMoc2VnbWVudEVsKSkpIHtcbiAgICAgIGNvbnN0IGJ1dHRvbnMgPSB0aGlzLmdldEJ1dHRvbnMoKTtcbiAgICAgIC8vIElmIG5vIGJ1dHRvbnMgYXJlIGZvdW5kIG9yIHRoZXJlIGlzIG5vIHZhbHVlIHNldCB0aGVuIGRvIG5vdGhpbmdcbiAgICAgIGlmICghYnV0dG9ucy5sZW5ndGgpIHJldHVybjtcbiAgICAgIGNvbnN0IGluZGV4ID0gYnV0dG9ucy5maW5kSW5kZXgoYnV0dG9uID0+IGJ1dHRvbi52YWx1ZSA9PT0gdGhpcy52YWx1ZSk7XG4gICAgICBjb25zdCBjdXJyZW50ID0gYnV0dG9uc1tpbmRleF07XG4gICAgICBjb25zdCBuZXh0SW5kZXggPSBNYXRoLnJvdW5kKHNjcm9sbFJhdGlvICogKGJ1dHRvbnMubGVuZ3RoIC0gMSkpO1xuICAgICAgaWYgKHRoaXMubGFzdE5leHRJbmRleCA9PT0gdW5kZWZpbmVkIHx8IHRoaXMubGFzdE5leHRJbmRleCAhPT0gbmV4dEluZGV4KSB7XG4gICAgICAgIHRoaXMubGFzdE5leHRJbmRleCA9IG5leHRJbmRleDtcbiAgICAgICAgdGhpcy50cmlnZ2VyU2Nyb2xsT25WYWx1ZUNoYW5nZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNoZWNrQnV0dG9uKGN1cnJlbnQsIGJ1dHRvbnNbbmV4dEluZGV4XSk7XG4gICAgICAgIHRoaXMuZW1pdFZhbHVlQ2hhbmdlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBGaW5kcyB0aGUgcmVsYXRlZCBzZWdtZW50IHZpZXcgYW5kIHNldHMgaXRzIGN1cnJlbnQgY29udGVudFxuICAgKiBiYXNlZCBvbiB0aGUgc2VsZWN0ZWQgc2VnbWVudCBidXR0b24uIFRoaXMgbWV0aG9kXG4gICAqIHNob3VsZCBiZSBjYWxsZWQgb24gaW5pdGlhbCBsb2FkIG9mIHRoZSBzZWdtZW50LFxuICAgKiBhZnRlciB0aGUgZ2VzdHVyZSBpcyBjb21wbGV0ZWQgKGlmIGRyYWdnaW5nIGJldHdlZW4gc2VnbWVudHMpXG4gICAqIGFuZCB3aGVuIGEgc2VnbWVudCBidXR0b24gaXMgY2xpY2tlZCBkaXJlY3RseS5cbiAgICovXG4gIHVwZGF0ZVNlZ21lbnRWaWV3KHNtb290aFNjcm9sbCA9IHRydWUpIHtcbiAgICBjb25zdCBidXR0b25zID0gdGhpcy5nZXRCdXR0b25zKCk7XG4gICAgY29uc3QgYnV0dG9uID0gYnV0dG9ucy5maW5kKGJ0biA9PiBidG4udmFsdWUgPT09IHRoaXMudmFsdWUpO1xuICAgIC8vIElmIHRoZSBidXR0b24gZG9lcyBub3QgaGF2ZSBhIGNvbnRlbnRJZCB0aGVuIHRoZXJlIGlzXG4gICAgLy8gbm8gYXNzb2NpYXRlZCBzZWdtZW50IHZpZXcgdG8gdXBkYXRlXG4gICAgaWYgKCEoYnV0dG9uID09PSBudWxsIHx8IGJ1dHRvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogYnV0dG9uLmNvbnRlbnRJZCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc2VnbWVudFZpZXcgPSB0aGlzLnNlZ21lbnRWaWV3RWw7XG4gICAgaWYgKHNlZ21lbnRWaWV3KSB7XG4gICAgICBzZWdtZW50Vmlldy5zZXRDb250ZW50KGJ1dHRvbi5jb250ZW50SWQsIHNtb290aFNjcm9sbCk7XG4gICAgfVxuICB9XG4gIHNjcm9sbEFjdGl2ZUJ1dHRvbkludG9WaWV3KHNtb290aFNjcm9sbCA9IHRydWUpIHtcbiAgICBjb25zdCB7XG4gICAgICBzY3JvbGxhYmxlLFxuICAgICAgdmFsdWUsXG4gICAgICBlbFxuICAgIH0gPSB0aGlzO1xuICAgIGlmIChzY3JvbGxhYmxlKSB7XG4gICAgICBjb25zdCBidXR0b25zID0gdGhpcy5nZXRCdXR0b25zKCk7XG4gICAgICBjb25zdCBhY3RpdmVCdXR0b24gPSBidXR0b25zLmZpbmQoYnV0dG9uID0+IGJ1dHRvbi52YWx1ZSA9PT0gdmFsdWUpO1xuICAgICAgaWYgKGFjdGl2ZUJ1dHRvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IHNjcm9sbENvbnRhaW5lckJveCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCBhY3RpdmVCdXR0b25Cb3ggPSBhY3RpdmVCdXR0b24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTdWJ0cmFjdCB0aGUgYWN0aXZlIGJ1dHRvbiB4IHBvc2l0aW9uIGZyb20gdGhlIHNjcm9sbFxuICAgICAgICAgKiBjb250YWluZXIgeCBwb3NpdGlvbi4gVGhpcyB3aWxsIGdpdmUgdXMgdGhlIHggcG9zaXRpb25cbiAgICAgICAgICogb2YgdGhlIGFjdGl2ZSBidXR0b24gd2l0aGluIHRoZSBzY3JvbGwgY29udGFpbmVyLlxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgYWN0aXZlQnV0dG9uTGVmdCA9IGFjdGl2ZUJ1dHRvbkJveC54IC0gc2Nyb2xsQ29udGFpbmVyQm94Lng7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiB3ZSBqdXN0IHVzZWQgYWN0aXZlQnV0dG9uTGVmdCwgdGhlbiB0aGUgYWN0aXZlIGJ1dHRvblxuICAgICAgICAgKiB3b3VsZCBiZSBhbGlnbmVkIHdpdGggdGhlIGxlZnQgZWRnZSBvZiB0aGUgc2Nyb2xsIGNvbnRhaW5lci5cbiAgICAgICAgICogSW5zdGVhZCwgd2Ugd2FudCB0aGUgc2VnbWVudCBidXR0b24gdG8gYmUgY2VudGVyZWQuIEFzIGEgcmVzdWx0LFxuICAgICAgICAgKiB3ZSBzdWJ0cmFjdCBoYWxmIG9mIHRoZSBzY3JvbGwgY29udGFpbmVyIHdpZHRoLiBUaGlzIHdpbGwgcG9zaXRpb25cbiAgICAgICAgICogdGhlIGxlZnQgZWRnZSBvZiB0aGUgYWN0aXZlIGJ1dHRvbiBhdCB0aGUgbWlkcG9pbnQgb2YgdGhlIHNjcm9sbCBjb250YWluZXIuXG4gICAgICAgICAqIFdlIHRoZW4gYWRkIGhhbGYgb2YgdGhlIGFjdGl2ZSBidXR0b24gd2lkdGguIFRoaXMgd2lsbCBwb3NpdGlvbiB0aGUgYWN0aXZlXG4gICAgICAgICAqIGJ1dHRvbiBzdWNoIHRoYXQgdGhlIG1pZHBvaW50IG9mIHRoZSBhY3RpdmUgYnV0dG9uIGlzIGF0IHRoZSBtaWRwb2ludCBvZiB0aGVcbiAgICAgICAgICogc2Nyb2xsIGNvbnRhaW5lci5cbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IGNlbnRlcmVkWCA9IGFjdGl2ZUJ1dHRvbkxlZnQgLSBzY3JvbGxDb250YWluZXJCb3gud2lkdGggLyAyICsgYWN0aXZlQnV0dG9uQm94LndpZHRoIC8gMjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIG5ld1Njcm9sbFBvc2l0aW9uIGlzIHRoZSBhYnNvbHV0ZSBzY3JvbGwgcG9zaXRpb24gdGhhdCB0aGVcbiAgICAgICAgICogY29udGFpbmVyIG5lZWRzIHRvIG1vdmUgdG8gaW4gb3JkZXIgdG8gY2VudGVyIHRoZSBhY3RpdmUgYnV0dG9uLlxuICAgICAgICAgKiBJdCBpcyBjYWxjdWxhdGVkIGJ5IGFkZGluZyB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb25cbiAgICAgICAgICogKHNjcm9sbExlZnQpIHRvIHRoZSBvZmZzZXQgbmVlZGVkIHRvIGNlbnRlciB0aGUgYnV0dG9uXG4gICAgICAgICAqIChjZW50ZXJlZFgpLlxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgbmV3U2Nyb2xsUG9zaXRpb24gPSBlbC5zY3JvbGxMZWZ0ICsgY2VudGVyZWRYO1xuICAgICAgICAvKipcbiAgICAgICAgICogV2UgaW50ZW50aW9uYWxseSB1c2Ugc2Nyb2xsVG8gaGVyZSBpbnN0ZWFkIG9mIHNjcm9sbEludG9WaWV3XG4gICAgICAgICAqIHRvIGF2b2lkIGEgV2ViS2l0IGJ1ZyB3aGVyZSBhY2NlbGVyYXRlZCBhbmltYXRpb25zIGJyZWFrXG4gICAgICAgICAqIHdoZW4gdXNpbmcgc2Nyb2xsSW50b1ZpZXcuIFVzaW5nIHNjcm9sbEludG9WaWV3IHdpbGwgY2F1c2UgdGhlXG4gICAgICAgICAqIHNlZ21lbnQgY29udGFpbmVyIHRvIGp1bXAgZHVyaW5nIHRoZSB0cmFuc2l0aW9uIGFuZCB0aGVuIHNuYXAgaW50byBwbGFjZS5cbiAgICAgICAgICogVGhpcyBpcyBiZWNhdXNlIHNjcm9sbEludG9WaWV3IGNhbiBwb3RlbnRpYWxseSBjYXVzZSBwYXJlbnQgZWxlbWVudFxuICAgICAgICAgKiBjb250YWluZXJzIHRvIGFsc28gc2Nyb2xsLiBzY3JvbGxUbyBkb2VzIG5vdCBoYXZlIHRoaXMgc2FtZSBiZWhhdmlvciwgc29cbiAgICAgICAgICogd2UgdXNlIHRoaXMgQVBJIGluc3RlYWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIHNjcm9sbFRvIGlzIHVzZWQgaW5zdGVhZCBvZiBzY3JvbGxCeSBiZWNhdXNlIHRoZXJlIGlzIGFcbiAgICAgICAgICogV2Via2l0IGJ1ZyB0aGF0IGNhdXNlcyBzY3JvbGxCeSB0byBub3Qgd29yayBzbW9vdGhseSB3aGVuXG4gICAgICAgICAqIHRoZSBhY3RpdmUgYnV0dG9uIGlzIG5lYXIgdGhlIGVkZ2Ugb2YgdGhlIHNjcm9sbCBjb250YWluZXIuXG4gICAgICAgICAqIFRoaXMgbGVhZHMgdG8gdGhlIGJ1dHRvbnMgdG8ganVtcCBhcm91bmQgZHVyaW5nIHRoZSB0cmFuc2l0aW9uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBOb3RlIHRoYXQgaWYgdGhlcmUgaXMgbm90IGVub3VnaCBzY3JvbGxpbmcgc3BhY2UgdG8gY2VudGVyIHRoZSBlbGVtZW50XG4gICAgICAgICAqIHdpdGhpbiB0aGUgc2Nyb2xsIGNvbnRhaW5lciwgdGhlIGJyb3dzZXIgd2lsbCBhdHRlbXB0XG4gICAgICAgICAqIHRvIGNlbnRlciBieSBhcyBtdWNoIGFzIGl0IGNhbi5cbiAgICAgICAgICovXG4gICAgICAgIGVsLnNjcm9sbFRvKHtcbiAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgbGVmdDogbmV3U2Nyb2xsUG9zaXRpb24sXG4gICAgICAgICAgYmVoYXZpb3I6IHNtb290aFNjcm9sbCA/ICdzbW9vdGgnIDogJ2luc3RhbnQnXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBzZXROZXh0SW5kZXgoZGV0YWlsLCBpc0VuZCA9IGZhbHNlKSB7XG4gICAgY29uc3QgcnRsID0gaXNSVEwodGhpcy5lbCk7XG4gICAgY29uc3QgYWN0aXZhdGVkID0gdGhpcy5hY3RpdmF0ZWQ7XG4gICAgY29uc3QgYnV0dG9ucyA9IHRoaXMuZ2V0QnV0dG9ucygpO1xuICAgIGNvbnN0IGluZGV4ID0gYnV0dG9ucy5maW5kSW5kZXgoYnV0dG9uID0+IGJ1dHRvbi52YWx1ZSA9PT0gdGhpcy52YWx1ZSk7XG4gICAgY29uc3QgcHJldmlvdXMgPSBidXR0b25zW2luZGV4XTtcbiAgICBsZXQgY3VycmVudDtcbiAgICBsZXQgbmV4dEluZGV4O1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gR2V0IHRoZSBlbGVtZW50IHRoYXQgdGhlIHRvdWNoIGV2ZW50IHN0YXJ0ZWQgb24gaW4gY2FzZVxuICAgIC8vIGl0IHdhcyB0aGUgY2hlY2tlZCBidXR0b24sIHRoZW4gd2Ugd2lsbCBtb3ZlIHRoZSBpbmRpY2F0b3JcbiAgICBjb25zdCByZWN0ID0gcHJldmlvdXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgbGVmdCA9IHJlY3QubGVmdDtcbiAgICBjb25zdCB3aWR0aCA9IHJlY3Qud2lkdGg7XG4gICAgLy8gR2V0IHRoZSBlbGVtZW50IHRoYXQgdGhlIGdlc3R1cmUgaXMgb24gdG9wIG9mIGJhc2VkIG9uIHRoZSBjdXJyZW50WCBvZiB0aGVcbiAgICAvLyBnZXN0dXJlIGV2ZW50IGFuZCB0aGUgWSBjb29yZGluYXRlIG9mIHRoZSBzdGFydGluZyBlbGVtZW50LCBzaW5jZSB0aGUgZ2VzdHVyZVxuICAgIC8vIGNhbiBtb3ZlIHVwIGFuZCBkb3duIG9mZiBvZiB0aGUgc2VnbWVudFxuICAgIGNvbnN0IGN1cnJlbnRYID0gZGV0YWlsLmN1cnJlbnRYO1xuICAgIGNvbnN0IHByZXZpb3VzWSA9IHJlY3QudG9wICsgcmVjdC5oZWlnaHQgLyAyO1xuICAgIC8qKlxuICAgICAqIFNlZ21lbnQgY2FuIGJlIHVzZWQgaW5zaWRlIHRoZSBzaGFkb3cgZG9tXG4gICAgICogc28gZG9pbmcgZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCB3b3VsZCBuZXZlclxuICAgICAqIHJldHVybiBhIHNlZ21lbnQgYnV0dG9uIGluIHRoYXQgaW5zdGFuY2UuXG4gICAgICogV2UgdXNlIGdldFJvb3ROb2RlIHRvIHdoaWNoIHdpbGwgcmV0dXJuIHRoZSBwYXJlbnRcbiAgICAgKiBzaGFkb3cgcm9vdCBpZiB1c2VkIGluc2lkZSBhIHNoYWRvdyBjb21wb25lbnQgYW5kXG4gICAgICogcmV0dXJucyBkb2N1bWVudCBvdGhlcndpc2UuXG4gICAgICovXG4gICAgY29uc3Qgcm9vdCA9IHRoaXMuZWwuZ2V0Um9vdE5vZGUoKTtcbiAgICBjb25zdCBuZXh0RWwgPSByb290LmVsZW1lbnRGcm9tUG9pbnQoY3VycmVudFgsIHByZXZpb3VzWSk7XG4gICAgY29uc3QgZGVjcmVhc2VJbmRleCA9IHJ0bCA/IGN1cnJlbnRYID4gbGVmdCArIHdpZHRoIDogY3VycmVudFggPCBsZWZ0O1xuICAgIGNvbnN0IGluY3JlYXNlSW5kZXggPSBydGwgPyBjdXJyZW50WCA8IGxlZnQgOiBjdXJyZW50WCA+IGxlZnQgKyB3aWR0aDtcbiAgICAvLyBJZiB0aGUgaW5kaWNhdG9yIGlzIGN1cnJlbnRseSBhY3RpdmF0ZWQgdGhlbiB3ZSBoYXZlIHN0YXJ0ZWQgdGhlIGdlc3R1cmVcbiAgICAvLyBvbiB0b3Agb2YgdGhlIGNoZWNrZWQgYnV0dG9uIHNvIHdlIG5lZWQgdG8gc2xpZGUgdGhlIGluZGljYXRvclxuICAgIC8vIGJ5IGNoZWNraW5nIHRoZSBidXR0b24gbmV4dCB0byBpdCBhcyB3ZSBtb3ZlXG4gICAgaWYgKGFjdGl2YXRlZCAmJiAhaXNFbmQpIHtcbiAgICAgIC8vIERlY3JlYXNlIGluZGV4LCBtb3ZlIGxlZnQgaW4gTFRSICYgcmlnaHQgaW4gUlRMXG4gICAgICBpZiAoZGVjcmVhc2VJbmRleCkge1xuICAgICAgICBjb25zdCBuZXdJbmRleCA9IGluZGV4IC0gMTtcbiAgICAgICAgaWYgKG5ld0luZGV4ID49IDApIHtcbiAgICAgICAgICBuZXh0SW5kZXggPSBuZXdJbmRleDtcbiAgICAgICAgfVxuICAgICAgICAvLyBJbmNyZWFzZSBpbmRleCwgbW92ZXMgcmlnaHQgaW4gTFRSICYgbGVmdCBpbiBSVExcbiAgICAgIH0gZWxzZSBpZiAoaW5jcmVhc2VJbmRleCkge1xuICAgICAgICBpZiAoYWN0aXZhdGVkICYmICFpc0VuZCkge1xuICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gaW5kZXggKyAxO1xuICAgICAgICAgIGlmIChuZXdJbmRleCA8IGJ1dHRvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBuZXh0SW5kZXggPSBuZXdJbmRleDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChuZXh0SW5kZXggIT09IHVuZGVmaW5lZCAmJiAhYnV0dG9uc1tuZXh0SW5kZXhdLmRpc2FibGVkKSB7XG4gICAgICAgIGN1cnJlbnQgPSBidXR0b25zW25leHRJbmRleF07XG4gICAgICB9XG4gICAgfVxuICAgIC8vIElmIHRoZSBpbmRpY2F0b3IgaXMgbm90IGFjdGl2YXRlZCB0aGVuIHdlIHdpbGwganVzdCBzZXQgdGhlIGluZGljYXRvclxuICAgIC8vIHRvIHRoZSBlbGVtZW50IHdoZXJlIHRoZSBnZXN0dXJlIGVuZGVkXG4gICAgaWYgKCFhY3RpdmF0ZWQgJiYgaXNFbmQpIHtcbiAgICAgIGN1cnJlbnQgPSBuZXh0RWw7XG4gICAgfVxuICAgIGlmIChjdXJyZW50ICE9IG51bGwpIHtcbiAgICAgIC8qKlxuICAgICAgICogSWYgY3VycmVudCBlbGVtZW50IGlzIGlvbi1zZWdtZW50IHRoZW4gdGhhdCBtZWFuc1xuICAgICAgICogdXNlciB0cmllZCB0byBzZWxlY3QgYSBkaXNhYmxlZCBpb24tc2VnbWVudC1idXR0b24sXG4gICAgICAgKiBhbmQgd2Ugc2hvdWxkIG5vdCB1cGRhdGUgdGhlIHJpcHBsZS5cbiAgICAgICAqL1xuICAgICAgaWYgKGN1cnJlbnQudGFnTmFtZSA9PT0gJ0lPTi1TRUdNRU5UJykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAocHJldmlvdXMgIT09IGN1cnJlbnQpIHtcbiAgICAgICAgdGhpcy5jaGVja0J1dHRvbihwcmV2aW91cywgY3VycmVudCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGVtaXRTdHlsZSgpIHtcbiAgICB0aGlzLmlvblN0eWxlLmVtaXQoe1xuICAgICAgc2VnbWVudDogdHJ1ZVxuICAgIH0pO1xuICB9XG4gIG9uS2V5RG93bihldikge1xuICAgIGNvbnN0IHJ0bCA9IGlzUlRMKHRoaXMuZWwpO1xuICAgIGxldCBrZXlEb3duU2VsZWN0c0J1dHRvbiA9IHRoaXMuc2VsZWN0T25Gb2N1cztcbiAgICBsZXQgY3VycmVudDtcbiAgICBzd2l0Y2ggKGV2LmtleSkge1xuICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGN1cnJlbnQgPSBydGwgPyB0aGlzLmdldFNlZ21lbnRCdXR0b24oJ3ByZXZpb3VzJykgOiB0aGlzLmdldFNlZ21lbnRCdXR0b24oJ25leHQnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjdXJyZW50ID0gcnRsID8gdGhpcy5nZXRTZWdtZW50QnV0dG9uKCduZXh0JykgOiB0aGlzLmdldFNlZ21lbnRCdXR0b24oJ3ByZXZpb3VzJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnSG9tZSc6XG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGN1cnJlbnQgPSB0aGlzLmdldFNlZ21lbnRCdXR0b24oJ2ZpcnN0Jyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnRW5kJzpcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY3VycmVudCA9IHRoaXMuZ2V0U2VnbWVudEJ1dHRvbignbGFzdCcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJyAnOlxuICAgICAgY2FzZSAnRW50ZXInOlxuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjdXJyZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICAgICAga2V5RG93blNlbGVjdHNCdXR0b24gPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoIWN1cnJlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGtleURvd25TZWxlY3RzQnV0dG9uKSB7XG4gICAgICBjb25zdCBwcmV2aW91cyA9IHRoaXMuY2hlY2tlZDtcbiAgICAgIHRoaXMuY2hlY2tCdXR0b24ocHJldmlvdXMgfHwgY3VycmVudCwgY3VycmVudCk7XG4gICAgICBpZiAoY3VycmVudCAhPT0gcHJldmlvdXMpIHtcbiAgICAgICAgdGhpcy5lbWl0VmFsdWVDaGFuZ2UoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY3VycmVudC5zZXRGb2N1cygpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICByZXR1cm4gaChIb3N0LCB7XG4gICAgICBrZXk6ICdlNjdlZDUxMjczOWNmMmNmZTY1N2IwYzQ0ZWJjM2RmYjFlOWZiYjc5JyxcbiAgICAgIHJvbGU6IFwidGFibGlzdFwiLFxuICAgICAgb25DbGljazogdGhpcy5vbkNsaWNrLFxuICAgICAgY2xhc3M6IGNyZWF0ZUNvbG9yQ2xhc3Nlcyh0aGlzLmNvbG9yLCB7XG4gICAgICAgIFttb2RlXTogdHJ1ZSxcbiAgICAgICAgJ2luLXRvb2xiYXInOiBob3N0Q29udGV4dCgnaW9uLXRvb2xiYXInLCB0aGlzLmVsKSxcbiAgICAgICAgJ2luLXRvb2xiYXItY29sb3InOiBob3N0Q29udGV4dCgnaW9uLXRvb2xiYXJbY29sb3JdJywgdGhpcy5lbCksXG4gICAgICAgICdzZWdtZW50LWFjdGl2YXRlZCc6IHRoaXMuYWN0aXZhdGVkLFxuICAgICAgICAnc2VnbWVudC1kaXNhYmxlZCc6IHRoaXMuZGlzYWJsZWQsXG4gICAgICAgICdzZWdtZW50LXNjcm9sbGFibGUnOiB0aGlzLnNjcm9sbGFibGVcbiAgICAgIH0pXG4gICAgfSwgaChcInNsb3RcIiwge1xuICAgICAga2V5OiAnODA0ZDhhY2ZjYjlhYmZlZWVlMzgyNDRiMDE1ZmJjNWMzNjMzMGI5ZScsXG4gICAgICBvblNsb3RjaGFuZ2U6IHRoaXMub25TbG90dGVkSXRlbXNDaGFuZ2VcbiAgICB9KSk7XG4gIH1cbiAgZ2V0IGVsKCkge1xuICAgIHJldHVybiBnZXRFbGVtZW50KHRoaXMpO1xuICB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiY29sb3JcIjogW1wiY29sb3JDaGFuZ2VkXCJdLFxuICAgICAgXCJzd2lwZUdlc3R1cmVcIjogW1wic3dpcGVHZXN0dXJlQ2hhbmdlZFwiXSxcbiAgICAgIFwidmFsdWVcIjogW1widmFsdWVDaGFuZ2VkXCJdLFxuICAgICAgXCJkaXNhYmxlZFwiOiBbXCJkaXNhYmxlZENoYW5nZWRcIl1cbiAgICB9O1xuICB9XG59O1xuU2VnbWVudC5zdHlsZSA9IHtcbiAgaW9zOiBzZWdtZW50SW9zQ3NzLFxuICBtZDogc2VnbWVudE1kQ3NzXG59O1xuY29uc3Qgc2VnbWVudEJ1dHRvbklvc0NzcyA9IFwiOmhvc3R7LS1jb2xvcjppbml0aWFsOy0tY29sb3ItaG92ZXI6dmFyKC0tY29sb3IpOy0tY29sb3ItY2hlY2tlZDp2YXIoLS1jb2xvcik7LS1jb2xvci1kaXNhYmxlZDp2YXIoLS1jb2xvcik7LS1wYWRkaW5nLXN0YXJ0OjA7LS1wYWRkaW5nLWVuZDowOy0tcGFkZGluZy10b3A6MDstLXBhZGRpbmctYm90dG9tOjA7Ym9yZGVyLXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjpyZWxhdGl2ZTstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtoZWlnaHQ6YXV0bztiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2NvbG9yOnZhcigtLWNvbG9yKTt0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcDtjdXJzb3I6cG9pbnRlcjtncmlkLXJvdzoxOy13ZWJraXQtZm9udC1rZXJuaW5nOm5vbmU7Zm9udC1rZXJuaW5nOm5vbmV9LmJ1dHRvbi1uYXRpdmV7Ym9yZGVyLXJhZGl1czowO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOmluaGVyaXQ7Zm9udC1zdHlsZTppbmhlcml0O2ZvbnQtd2VpZ2h0OmluaGVyaXQ7bGV0dGVyLXNwYWNpbmc6aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt0ZXh0LWluZGVudDppbmhlcml0O3RleHQtb3ZlcmZsb3c6aW5oZXJpdDt0ZXh0LXRyYW5zZm9ybTppbmhlcml0O3RleHQtYWxpZ246aW5oZXJpdDt3aGl0ZS1zcGFjZTppbmhlcml0O2NvbG9yOmluaGVyaXQ7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6dmFyKC0tbWFyZ2luLXN0YXJ0KTttYXJnaW4taW5saW5lLXN0YXJ0OnZhcigtLW1hcmdpbi1zdGFydCk7LXdlYmtpdC1tYXJnaW4tZW5kOnZhcigtLW1hcmdpbi1lbmQpO21hcmdpbi1pbmxpbmUtZW5kOnZhcigtLW1hcmdpbi1lbmQpO21hcmdpbi10b3A6dmFyKC0tbWFyZ2luLXRvcCk7bWFyZ2luLWJvdHRvbTp2YXIoLS1tYXJnaW4tYm90dG9tKTstd2Via2l0LXBhZGRpbmctc3RhcnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7cGFkZGluZy1pbmxpbmUtc3RhcnQ6dmFyKC0tcGFkZGluZy1zdGFydCk7LXdlYmtpdC1wYWRkaW5nLWVuZDp2YXIoLS1wYWRkaW5nLWVuZCk7cGFkZGluZy1pbmxpbmUtZW5kOnZhcigtLXBhZGRpbmctZW5kKTtwYWRkaW5nLXRvcDp2YXIoLS1wYWRkaW5nLXRvcCk7cGFkZGluZy1ib3R0b206dmFyKC0tcGFkZGluZy1ib3R0b20pOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsICAwLCAgMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsICAwLCAgMCk7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtZGlyZWN0aW9uOmluaGVyaXQ7ZmxleC1kaXJlY3Rpb246aW5oZXJpdDstbXMtZmxleC1wb3NpdGl2ZToxO2ZsZXgtZ3JvdzoxOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDoxMDAlO21pbi13aWR0aDppbmhlcml0O21heC13aWR0aDppbmhlcml0O2hlaWdodDphdXRvO21pbi1oZWlnaHQ6aW5oZXJpdDttYXgtaGVpZ2h0OmluaGVyaXQ7LXdlYmtpdC10cmFuc2l0aW9uOnZhcigtLXRyYW5zaXRpb24pO3RyYW5zaXRpb246dmFyKC0tdHJhbnNpdGlvbik7Ym9yZGVyOm5vbmU7b3V0bGluZTpub25lO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Y29udGFpbjpjb250ZW50O3BvaW50ZXItZXZlbnRzOm5vbmU7b3ZlcmZsb3c6aGlkZGVuO3otaW5kZXg6Mn0uYnV0dG9uLW5hdGl2ZTo6YWZ0ZXJ7bGVmdDowO3JpZ2h0OjA7dG9wOjA7Ym90dG9tOjA7cG9zaXRpb246YWJzb2x1dGU7Y29udGVudDpcXFwiXFxcIjtvcGFjaXR5OjB9LmJ1dHRvbi1pbm5lcntkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjpyZWxhdGl2ZTstbXMtZmxleC1mbG93OmluaGVyaXQ7ZmxleC1mbG93OmluaGVyaXQ7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7ei1pbmRleDoxfTpob3N0KC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkKXtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQtY2hlY2tlZCk7Y29sb3I6dmFyKC0tY29sb3ItY2hlY2tlZCl9Omhvc3QoLnNlZ21lbnQtYnV0dG9uLWRpc2FibGVkKXtjdXJzb3I6ZGVmYXVsdDtwb2ludGVyLWV2ZW50czpub25lfTpob3N0KC5pb24tZm9jdXNlZCkgLmJ1dHRvbi1uYXRpdmV7Y29sb3I6dmFyKC0tY29sb3ItZm9jdXNlZCl9Omhvc3QoLmlvbi1mb2N1c2VkKSAuYnV0dG9uLW5hdGl2ZTo6YWZ0ZXJ7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kLWZvY3VzZWQpO29wYWNpdHk6dmFyKC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHkpfTpob3N0KDpmb2N1cyl7b3V0bGluZTpub25lfUBtZWRpYSAoYW55LWhvdmVyOiBob3Zlcil7Omhvc3QoOmhvdmVyKSAuYnV0dG9uLW5hdGl2ZXtjb2xvcjp2YXIoLS1jb2xvci1ob3Zlcil9Omhvc3QoOmhvdmVyKSAuYnV0dG9uLW5hdGl2ZTo6YWZ0ZXJ7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kLWhvdmVyKTtvcGFjaXR5OnZhcigtLWJhY2tncm91bmQtaG92ZXItb3BhY2l0eSl9Omhvc3QoLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQ6aG92ZXIpIC5idXR0b24tbmF0aXZle2NvbG9yOnZhcigtLWNvbG9yLWNoZWNrZWQpfX06OnNsb3R0ZWQoaW9uLWljb24pey1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MDstbXMtZmxleC1vcmRlcjotMTtvcmRlcjotMTtwb2ludGVyLWV2ZW50czpub25lfTo6c2xvdHRlZChpb24tbGFiZWwpe2Rpc3BsYXk6YmxvY2s7LW1zLWZsZXgtaXRlbS1hbGlnbjpjZW50ZXI7YWxpZ24tc2VsZjpjZW50ZXI7bWF4LXdpZHRoOjEwMCU7bGluZS1oZWlnaHQ6MjJweDt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94O3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3QoLnNlZ21lbnQtYnV0dG9uLWxheW91dC1pY29uLXRvcCkgLmJ1dHRvbi1uYXRpdmV7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW59Omhvc3QoLnNlZ21lbnQtYnV0dG9uLWxheW91dC1pY29uLXN0YXJ0KSAuYnV0dG9uLW5hdGl2ZXstbXMtZmxleC1kaXJlY3Rpb246cm93O2ZsZXgtZGlyZWN0aW9uOnJvd306aG9zdCguc2VnbWVudC1idXR0b24tbGF5b3V0LWljb24tZW5kKSAuYnV0dG9uLW5hdGl2ZXstbXMtZmxleC1kaXJlY3Rpb246cm93LXJldmVyc2U7ZmxleC1kaXJlY3Rpb246cm93LXJldmVyc2V9Omhvc3QoLnNlZ21lbnQtYnV0dG9uLWxheW91dC1pY29uLWJvdHRvbSkgLmJ1dHRvbi1uYXRpdmV7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbi1yZXZlcnNlO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbi1yZXZlcnNlfTpob3N0KC5zZWdtZW50LWJ1dHRvbi1sYXlvdXQtaWNvbi1oaWRlKSA6OnNsb3R0ZWQoaW9uLWljb24pe2Rpc3BsYXk6bm9uZX06aG9zdCguc2VnbWVudC1idXR0b24tbGF5b3V0LWxhYmVsLWhpZGUpIDo6c2xvdHRlZChpb24tbGFiZWwpe2Rpc3BsYXk6bm9uZX1pb24tcmlwcGxlLWVmZmVjdHtjb2xvcjp2YXIoLS1yaXBwbGUtY29sb3IsIHZhcigtLWNvbG9yLWNoZWNrZWQpKX0uc2VnbWVudC1idXR0b24taW5kaWNhdG9yey13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpsZWZ0O3RyYW5zZm9ybS1vcmlnaW46bGVmdDtwb3NpdGlvbjphYnNvbHV0ZTtvcGFjaXR5OjA7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94O3dpbGwtY2hhbmdlOnRyYW5zZm9ybSwgb3BhY2l0eTtwb2ludGVyLWV2ZW50czpub25lfS5zZWdtZW50LWJ1dHRvbi1pbmRpY2F0b3ItYmFja2dyb3VuZHt3aWR0aDoxMDAlO2hlaWdodDp2YXIoLS1pbmRpY2F0b3ItaGVpZ2h0KTstd2Via2l0LXRyYW5zZm9ybTp2YXIoLS1pbmRpY2F0b3ItdHJhbnNmb3JtKTt0cmFuc2Zvcm06dmFyKC0taW5kaWNhdG9yLXRyYW5zZm9ybSk7LXdlYmtpdC1ib3gtc2hhZG93OnZhcigtLWluZGljYXRvci1ib3gtc2hhZG93KTtib3gtc2hhZG93OnZhcigtLWluZGljYXRvci1ib3gtc2hhZG93KTtwb2ludGVyLWV2ZW50czpub25lfS5zZWdtZW50LWJ1dHRvbi1pbmRpY2F0b3ItYW5pbWF0ZWR7LXdlYmtpdC10cmFuc2l0aW9uOnZhcigtLWluZGljYXRvci10cmFuc2l0aW9uKTt0cmFuc2l0aW9uOnZhcigtLWluZGljYXRvci10cmFuc2l0aW9uKX06aG9zdCguc2VnbWVudC1idXR0b24tY2hlY2tlZCkgLnNlZ21lbnQtYnV0dG9uLWluZGljYXRvcntvcGFjaXR5OjF9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upey5zZWdtZW50LWJ1dHRvbi1pbmRpY2F0b3ItYmFja2dyb3VuZHstd2Via2l0LXRyYW5zZm9ybTpub25lO3RyYW5zZm9ybTpub25lfS5zZWdtZW50LWJ1dHRvbi1pbmRpY2F0b3ItYW5pbWF0ZWR7LXdlYmtpdC10cmFuc2l0aW9uOm5vbmU7dHJhbnNpdGlvbjpub25lfX06aG9zdHstLWJhY2tncm91bmQ6bm9uZTstLWJhY2tncm91bmQtY2hlY2tlZDpub25lOy0tYmFja2dyb3VuZC1ob3Zlcjpub25lOy0tYmFja2dyb3VuZC1ob3Zlci1vcGFjaXR5OjA7LS1iYWNrZ3JvdW5kLWZvY3VzZWQ6bm9uZTstLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5OjA7LS1ib3JkZXItcmFkaXVzOjdweDstLWJvcmRlci13aWR0aDoxcHg7LS1ib3JkZXItY29sb3I6cmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsIDAsIDAsIDApLCAwLjEyKTstLWJvcmRlci1zdHlsZTpzb2xpZDstLWluZGljYXRvci1ib3gtc2hhZG93OjAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjE2KTstLWluZGljYXRvci1jb2xvcjp2YXIoLS1pb24tY29sb3Itc3RlcC0zNTAsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXN0ZXAtMzUwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpKTstLWluZGljYXRvci1oZWlnaHQ6MTAwJTstLWluZGljYXRvci10cmFuc2l0aW9uOnRyYW5zZm9ybSAyNjBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpOy0taW5kaWNhdG9yLXRyYW5zZm9ybTpub25lOy0tdHJhbnNpdGlvbjoxMDBtcyBhbGwgbGluZWFyOy0tcGFkZGluZy10b3A6MDstLXBhZGRpbmctZW5kOjEzcHg7LS1wYWRkaW5nLWJvdHRvbTowOy0tcGFkZGluZy1zdGFydDoxM3B4O21hcmdpbi10b3A6MnB4O21hcmdpbi1ib3R0b206MnB4O3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4LWRpcmVjdGlvbjpyb3c7ZmxleC1kaXJlY3Rpb246cm93O21pbi13aWR0aDo3MHB4O21pbi1oZWlnaHQ6MjhweDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCAwLCAwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwgMCwgMCk7Zm9udC1zaXplOjEzcHg7Zm9udC13ZWlnaHQ6NDUwO2xpbmUtaGVpZ2h0OjM3cHh9Omhvc3Q6OmJlZm9yZXttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6NXB4O21hcmdpbi1ib3R0b206NXB4Oy13ZWJraXQtdHJhbnNpdGlvbjoxNjBtcyBvcGFjaXR5IGVhc2UtaW4tb3V0O3RyYW5zaXRpb246MTYwbXMgb3BhY2l0eSBlYXNlLWluLW91dDstd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6MTAwbXM7dHJhbnNpdGlvbi1kZWxheToxMDBtcztib3JkZXItbGVmdDp2YXIoLS1ib3JkZXItd2lkdGgpIHZhcigtLWJvcmRlci1zdHlsZSkgdmFyKC0tYm9yZGVyLWNvbG9yKTtjb250ZW50OlxcXCJcXFwiO29wYWNpdHk6MTt3aWxsLWNoYW5nZTpvcGFjaXR5fTpob3N0KDpmaXJzdC1vZi10eXBlKTo6YmVmb3Jle2JvcmRlci1sZWZ0LWNvbG9yOnRyYW5zcGFyZW50fTpob3N0KC5zZWdtZW50LWJ1dHRvbi1kaXNhYmxlZCl7b3BhY2l0eTowLjN9OjpzbG90dGVkKGlvbi1pY29uKXtmb250LXNpemU6MjRweH06aG9zdCguc2VnbWVudC1idXR0b24tbGF5b3V0LWljb24tc3RhcnQpIDo6c2xvdHRlZChpb24tbGFiZWwpey13ZWJraXQtbWFyZ2luLXN0YXJ0OjJweDttYXJnaW4taW5saW5lLXN0YXJ0OjJweDstd2Via2l0LW1hcmdpbi1lbmQ6MDttYXJnaW4taW5saW5lLWVuZDowfTpob3N0KC5zZWdtZW50LWJ1dHRvbi1sYXlvdXQtaWNvbi1lbmQpIDo6c2xvdHRlZChpb24tbGFiZWwpey13ZWJraXQtbWFyZ2luLXN0YXJ0OjA7bWFyZ2luLWlubGluZS1zdGFydDowOy13ZWJraXQtbWFyZ2luLWVuZDoycHg7bWFyZ2luLWlubGluZS1lbmQ6MnB4fS5zZWdtZW50LWJ1dHRvbi1pbmRpY2F0b3J7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjJweDtwYWRkaW5nLWlubGluZS1zdGFydDoycHg7LXdlYmtpdC1wYWRkaW5nLWVuZDoycHg7cGFkZGluZy1pbmxpbmUtZW5kOjJweDtsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MH0uc2VnbWVudC1idXR0b24taW5kaWNhdG9yLWJhY2tncm91bmR7Ym9yZGVyLXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtiYWNrZ3JvdW5kOnZhcigtLWluZGljYXRvci1jb2xvcil9LnNlZ21lbnQtYnV0dG9uLWluZGljYXRvci1iYWNrZ3JvdW5key13ZWJraXQtdHJhbnNpdGlvbjp2YXIoLS1pbmRpY2F0b3ItdHJhbnNpdGlvbik7dHJhbnNpdGlvbjp2YXIoLS1pbmRpY2F0b3ItdHJhbnNpdGlvbil9Omhvc3QoLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQpOjpiZWZvcmUsOmhvc3QoLnNlZ21lbnQtYnV0dG9uLWFmdGVyLWNoZWNrZWQpOjpiZWZvcmV7b3BhY2l0eTowfTpob3N0KC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkKXt6LWluZGV4Oi0xfTpob3N0KC5zZWdtZW50LWJ1dHRvbi1hY3RpdmF0ZWQpey0taW5kaWNhdG9yLXRyYW5zZm9ybTpzY2FsZSgwLjk1KX06aG9zdCguaW9uLWZvY3VzZWQpIC5idXR0b24tbmF0aXZle29wYWNpdHk6MC43fUBtZWRpYSAoYW55LWhvdmVyOiBob3Zlcil7Omhvc3QoOmhvdmVyKSAuYnV0dG9uLW5hdGl2ZXtvcGFjaXR5OjAuNX06aG9zdCguc2VnbWVudC1idXR0b24tY2hlY2tlZDpob3ZlcikgLmJ1dHRvbi1uYXRpdmV7b3BhY2l0eToxfX06aG9zdCguaW4tc2VnbWVudC1jb2xvcil7YmFja2dyb3VuZDpub25lO2NvbG9yOnZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwKX06aG9zdCguaW4tc2VnbWVudC1jb2xvcikgLnNlZ21lbnQtYnV0dG9uLWluZGljYXRvci1iYWNrZ3JvdW5ke2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXN0ZXAtMzUwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTM1MCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKSl9QG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKXs6aG9zdCguaW4tc2VnbWVudC1jb2xvcjpob3ZlcikgLmJ1dHRvbi1uYXRpdmUsOmhvc3QoLmluLXNlZ21lbnQtY29sb3Iuc2VnbWVudC1idXR0b24tY2hlY2tlZDpob3ZlcikgLmJ1dHRvbi1uYXRpdmV7Y29sb3I6dmFyKC0taW9uLXRleHQtY29sb3IsICMwMDApfX06aG9zdCguaW4tdG9vbGJhcjpub3QoLmluLXNlZ21lbnQtY29sb3IpKXstLWJhY2tncm91bmQtY2hlY2tlZDp2YXIoLS1pb24tdG9vbGJhci1zZWdtZW50LWJhY2tncm91bmQtY2hlY2tlZCwgbm9uZSk7LS1jb2xvcjp2YXIoLS1pb24tdG9vbGJhci1zZWdtZW50LWNvbG9yLCB2YXIoLS1pb24tdG9vbGJhci1jb2xvciksIGluaXRpYWwpOy0tY29sb3ItY2hlY2tlZDp2YXIoLS1pb24tdG9vbGJhci1zZWdtZW50LWNvbG9yLWNoZWNrZWQsIHZhcigtLWlvbi10b29sYmFyLWNvbG9yKSwgaW5pdGlhbCk7LS1pbmRpY2F0b3ItY29sb3I6dmFyKC0taW9uLXRvb2xiYXItc2VnbWVudC1pbmRpY2F0b3ItY29sb3IsIHZhcigtLWlvbi1jb2xvci1zdGVwLTM1MCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3Itc3RlcC0zNTAsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSkpKX06aG9zdCguaW4tdG9vbGJhci1jb2xvcikgLnNlZ21lbnQtYnV0dG9uLWluZGljYXRvci1iYWNrZ3JvdW5ke2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KX06aG9zdCguaW4tdG9vbGJhci1jb2xvcjpub3QoLmluLXNlZ21lbnQtY29sb3IpKSAuYnV0dG9uLW5hdGl2ZXtjb2xvcjp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpfTpob3N0KC5pbi10b29sYmFyLWNvbG9yLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQ6bm90KC5pbi1zZWdtZW50LWNvbG9yKSkgLmJ1dHRvbi1uYXRpdmV7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWJhc2UpfUBtZWRpYSAoYW55LWhvdmVyOiBob3Zlcil7Omhvc3QoLmluLXRvb2xiYXItY29sb3I6bm90KC5pbi1zZWdtZW50LWNvbG9yKTpob3ZlcikgLmJ1dHRvbi1uYXRpdmV7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KX06aG9zdCguaW4tdG9vbGJhci1jb2xvci5zZWdtZW50LWJ1dHRvbi1jaGVja2VkOm5vdCguaW4tc2VnbWVudC1jb2xvcik6aG92ZXIpIC5idXR0b24tbmF0aXZle2NvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKX19XCI7XG5jb25zdCBzZWdtZW50QnV0dG9uTWRDc3MgPSBcIjpob3N0ey0tY29sb3I6aW5pdGlhbDstLWNvbG9yLWhvdmVyOnZhcigtLWNvbG9yKTstLWNvbG9yLWNoZWNrZWQ6dmFyKC0tY29sb3IpOy0tY29sb3ItZGlzYWJsZWQ6dmFyKC0tY29sb3IpOy0tcGFkZGluZy1zdGFydDowOy0tcGFkZGluZy1lbmQ6MDstLXBhZGRpbmctdG9wOjA7LS1wYWRkaW5nLWJvdHRvbTowO2JvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47aGVpZ2h0OmF1dG87YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTtjb2xvcjp2YXIoLS1jb2xvcik7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXA7Y3Vyc29yOnBvaW50ZXI7Z3JpZC1yb3c6MTstd2Via2l0LWZvbnQta2VybmluZzpub25lO2ZvbnQta2VybmluZzpub25lfS5idXR0b24tbmF0aXZle2JvcmRlci1yYWRpdXM6MDtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZTppbmhlcml0O2ZvbnQtc3R5bGU6aW5oZXJpdDtmb250LXdlaWdodDppbmhlcml0O2xldHRlci1zcGFjaW5nOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC1pbmRlbnQ6aW5oZXJpdDt0ZXh0LW92ZXJmbG93OmluaGVyaXQ7dGV4dC10cmFuc2Zvcm06aW5oZXJpdDt0ZXh0LWFsaWduOmluaGVyaXQ7d2hpdGUtc3BhY2U6aW5oZXJpdDtjb2xvcjppbmhlcml0Oy13ZWJraXQtbWFyZ2luLXN0YXJ0OnZhcigtLW1hcmdpbi1zdGFydCk7bWFyZ2luLWlubGluZS1zdGFydDp2YXIoLS1tYXJnaW4tc3RhcnQpOy13ZWJraXQtbWFyZ2luLWVuZDp2YXIoLS1tYXJnaW4tZW5kKTttYXJnaW4taW5saW5lLWVuZDp2YXIoLS1tYXJnaW4tZW5kKTttYXJnaW4tdG9wOnZhcigtLW1hcmdpbi10b3ApO21hcmdpbi1ib3R0b206dmFyKC0tbWFyZ2luLWJvdHRvbSk7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OnZhcigtLXBhZGRpbmctc3RhcnQpO3BhZGRpbmctaW5saW5lLXN0YXJ0OnZhcigtLXBhZGRpbmctc3RhcnQpOy13ZWJraXQtcGFkZGluZy1lbmQ6dmFyKC0tcGFkZGluZy1lbmQpO3BhZGRpbmctaW5saW5lLWVuZDp2YXIoLS1wYWRkaW5nLWVuZCk7cGFkZGluZy10b3A6dmFyKC0tcGFkZGluZy10b3ApO3BhZGRpbmctYm90dG9tOnZhcigtLXBhZGRpbmctYm90dG9tKTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCAgMCwgIDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCAgMCwgIDApO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4LWRpcmVjdGlvbjppbmhlcml0O2ZsZXgtZGlyZWN0aW9uOmluaGVyaXQ7LW1zLWZsZXgtcG9zaXRpdmU6MTtmbGV4LWdyb3c6MTstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6MTAwJTttaW4td2lkdGg6aW5oZXJpdDttYXgtd2lkdGg6aW5oZXJpdDtoZWlnaHQ6YXV0bzttaW4taGVpZ2h0OmluaGVyaXQ7bWF4LWhlaWdodDppbmhlcml0Oy13ZWJraXQtdHJhbnNpdGlvbjp2YXIoLS10cmFuc2l0aW9uKTt0cmFuc2l0aW9uOnZhcigtLXRyYW5zaXRpb24pO2JvcmRlcjpub25lO291dGxpbmU6bm9uZTtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2NvbnRhaW46Y29udGVudDtwb2ludGVyLWV2ZW50czpub25lO292ZXJmbG93OmhpZGRlbjt6LWluZGV4OjJ9LmJ1dHRvbi1uYXRpdmU6OmFmdGVye2xlZnQ6MDtyaWdodDowO3RvcDowO2JvdHRvbTowO3Bvc2l0aW9uOmFic29sdXRlO2NvbnRlbnQ6XFxcIlxcXCI7b3BhY2l0eTowfS5idXR0b24taW5uZXJ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtZmxvdzppbmhlcml0O2ZsZXgtZmxvdzppbmhlcml0Oy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3otaW5kZXg6MX06aG9zdCguc2VnbWVudC1idXR0b24tY2hlY2tlZCl7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kLWNoZWNrZWQpO2NvbG9yOnZhcigtLWNvbG9yLWNoZWNrZWQpfTpob3N0KC5zZWdtZW50LWJ1dHRvbi1kaXNhYmxlZCl7Y3Vyc29yOmRlZmF1bHQ7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdCguaW9uLWZvY3VzZWQpIC5idXR0b24tbmF0aXZle2NvbG9yOnZhcigtLWNvbG9yLWZvY3VzZWQpfTpob3N0KC5pb24tZm9jdXNlZCkgLmJ1dHRvbi1uYXRpdmU6OmFmdGVye2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZC1mb2N1c2VkKTtvcGFjaXR5OnZhcigtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5KX06aG9zdCg6Zm9jdXMpe291dGxpbmU6bm9uZX1AbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpezpob3N0KDpob3ZlcikgLmJ1dHRvbi1uYXRpdmV7Y29sb3I6dmFyKC0tY29sb3ItaG92ZXIpfTpob3N0KDpob3ZlcikgLmJ1dHRvbi1uYXRpdmU6OmFmdGVye2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZC1ob3Zlcik7b3BhY2l0eTp2YXIoLS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHkpfTpob3N0KC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkOmhvdmVyKSAuYnV0dG9uLW5hdGl2ZXtjb2xvcjp2YXIoLS1jb2xvci1jaGVja2VkKX19OjpzbG90dGVkKGlvbi1pY29uKXstbXMtZmxleC1uZWdhdGl2ZTowO2ZsZXgtc2hyaW5rOjA7LW1zLWZsZXgtb3JkZXI6LTE7b3JkZXI6LTE7cG9pbnRlci1ldmVudHM6bm9uZX06OnNsb3R0ZWQoaW9uLWxhYmVsKXtkaXNwbGF5OmJsb2NrOy1tcy1mbGV4LWl0ZW0tYWxpZ246Y2VudGVyO2FsaWduLXNlbGY6Y2VudGVyO21heC13aWR0aDoxMDAlO2xpbmUtaGVpZ2h0OjIycHg7dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVuOy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDtwb2ludGVyLWV2ZW50czpub25lfTpob3N0KC5zZWdtZW50LWJ1dHRvbi1sYXlvdXQtaWNvbi10b3ApIC5idXR0b24tbmF0aXZley1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1ufTpob3N0KC5zZWdtZW50LWJ1dHRvbi1sYXlvdXQtaWNvbi1zdGFydCkgLmJ1dHRvbi1uYXRpdmV7LW1zLWZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LWRpcmVjdGlvbjpyb3d9Omhvc3QoLnNlZ21lbnQtYnV0dG9uLWxheW91dC1pY29uLWVuZCkgLmJ1dHRvbi1uYXRpdmV7LW1zLWZsZXgtZGlyZWN0aW9uOnJvdy1yZXZlcnNlO2ZsZXgtZGlyZWN0aW9uOnJvdy1yZXZlcnNlfTpob3N0KC5zZWdtZW50LWJ1dHRvbi1sYXlvdXQtaWNvbi1ib3R0b20pIC5idXR0b24tbmF0aXZley1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW4tcmV2ZXJzZTtmbGV4LWRpcmVjdGlvbjpjb2x1bW4tcmV2ZXJzZX06aG9zdCguc2VnbWVudC1idXR0b24tbGF5b3V0LWljb24taGlkZSkgOjpzbG90dGVkKGlvbi1pY29uKXtkaXNwbGF5Om5vbmV9Omhvc3QoLnNlZ21lbnQtYnV0dG9uLWxheW91dC1sYWJlbC1oaWRlKSA6OnNsb3R0ZWQoaW9uLWxhYmVsKXtkaXNwbGF5Om5vbmV9aW9uLXJpcHBsZS1lZmZlY3R7Y29sb3I6dmFyKC0tcmlwcGxlLWNvbG9yLCB2YXIoLS1jb2xvci1jaGVja2VkKSl9LnNlZ21lbnQtYnV0dG9uLWluZGljYXRvcnstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46bGVmdDt0cmFuc2Zvcm0tb3JpZ2luOmxlZnQ7cG9zaXRpb246YWJzb2x1dGU7b3BhY2l0eTowOy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDt3aWxsLWNoYW5nZTp0cmFuc2Zvcm0sIG9wYWNpdHk7cG9pbnRlci1ldmVudHM6bm9uZX0uc2VnbWVudC1idXR0b24taW5kaWNhdG9yLWJhY2tncm91bmR7d2lkdGg6MTAwJTtoZWlnaHQ6dmFyKC0taW5kaWNhdG9yLWhlaWdodCk7LXdlYmtpdC10cmFuc2Zvcm06dmFyKC0taW5kaWNhdG9yLXRyYW5zZm9ybSk7dHJhbnNmb3JtOnZhcigtLWluZGljYXRvci10cmFuc2Zvcm0pOy13ZWJraXQtYm94LXNoYWRvdzp2YXIoLS1pbmRpY2F0b3ItYm94LXNoYWRvdyk7Ym94LXNoYWRvdzp2YXIoLS1pbmRpY2F0b3ItYm94LXNoYWRvdyk7cG9pbnRlci1ldmVudHM6bm9uZX0uc2VnbWVudC1idXR0b24taW5kaWNhdG9yLWFuaW1hdGVkey13ZWJraXQtdHJhbnNpdGlvbjp2YXIoLS1pbmRpY2F0b3ItdHJhbnNpdGlvbik7dHJhbnNpdGlvbjp2YXIoLS1pbmRpY2F0b3ItdHJhbnNpdGlvbil9Omhvc3QoLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQpIC5zZWdtZW50LWJ1dHRvbi1pbmRpY2F0b3J7b3BhY2l0eToxfUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKXsuc2VnbWVudC1idXR0b24taW5kaWNhdG9yLWJhY2tncm91bmR7LXdlYmtpdC10cmFuc2Zvcm06bm9uZTt0cmFuc2Zvcm06bm9uZX0uc2VnbWVudC1idXR0b24taW5kaWNhdG9yLWFuaW1hdGVkey13ZWJraXQtdHJhbnNpdGlvbjpub25lO3RyYW5zaXRpb246bm9uZX19Omhvc3R7LS1iYWNrZ3JvdW5kOm5vbmU7LS1iYWNrZ3JvdW5kLWNoZWNrZWQ6bm9uZTstLWJhY2tncm91bmQtaG92ZXI6dmFyKC0tY29sb3ItY2hlY2tlZCk7LS1iYWNrZ3JvdW5kLWZvY3VzZWQ6dmFyKC0tY29sb3ItY2hlY2tlZCk7LS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OjA7LS1iYWNrZ3JvdW5kLWZvY3VzZWQtb3BhY2l0eTouMTI7LS1iYWNrZ3JvdW5kLWhvdmVyLW9wYWNpdHk6LjA0Oy0tY29sb3I6cmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsIDAsIDAsIDApLCAwLjYpOy0tY29sb3ItY2hlY2tlZDp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzAwNTRlOSk7LS1pbmRpY2F0b3ItYm94LXNoYWRvdzpub25lOy0taW5kaWNhdG9yLWNvbG9yOnZhcigtLWNvbG9yLWNoZWNrZWQpOy0taW5kaWNhdG9yLWhlaWdodDoycHg7LS1pbmRpY2F0b3ItdHJhbnNpdGlvbjp0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTstLWluZGljYXRvci10cmFuc2Zvcm06bm9uZTstLXBhZGRpbmctdG9wOjA7LS1wYWRkaW5nLWVuZDoxNnB4Oy0tcGFkZGluZy1ib3R0b206MDstLXBhZGRpbmctc3RhcnQ6MTZweDstLXRyYW5zaXRpb246Y29sb3IgMC4xNXMgbGluZWFyIDBzLCBvcGFjaXR5IDAuMTVzIGxpbmVhciAwczttaW4td2lkdGg6OTBweDttaW4taGVpZ2h0OjQ4cHg7Ym9yZGVyLXdpZHRoOnZhcigtLWJvcmRlci13aWR0aCk7Ym9yZGVyLXN0eWxlOnZhcigtLWJvcmRlci1zdHlsZSk7Ym9yZGVyLWNvbG9yOnZhcigtLWJvcmRlci1jb2xvcik7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwO2xldHRlci1zcGFjaW5nOjAuMDZlbTtsaW5lLWhlaWdodDo0MHB4O3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZX06aG9zdCguc2VnbWVudC1idXR0b24tZGlzYWJsZWQpe29wYWNpdHk6MC4zfTpob3N0KC5pbi1zZWdtZW50LWNvbG9yKXtiYWNrZ3JvdW5kOm5vbmU7Y29sb3I6cmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsIDAsIDAsIDApLCAwLjYpfTpob3N0KC5pbi1zZWdtZW50LWNvbG9yKSBpb24tcmlwcGxlLWVmZmVjdHtjb2xvcjp2YXIoLS1pb24tY29sb3ItYmFzZSl9Omhvc3QoLmluLXNlZ21lbnQtY29sb3IpIC5zZWdtZW50LWJ1dHRvbi1pbmRpY2F0b3ItYmFja2dyb3VuZHtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1iYXNlKX06aG9zdCguaW4tc2VnbWVudC1jb2xvci5zZWdtZW50LWJ1dHRvbi1jaGVja2VkKSAuYnV0dG9uLW5hdGl2ZXtjb2xvcjp2YXIoLS1pb24tY29sb3ItYmFzZSl9Omhvc3QoLmluLXNlZ21lbnQtY29sb3IuaW9uLWZvY3VzZWQpIC5idXR0b24tbmF0aXZlOjphZnRlcntiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1iYXNlKX1AbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpezpob3N0KC5pbi1zZWdtZW50LWNvbG9yOmhvdmVyKSAuYnV0dG9uLW5hdGl2ZXtjb2xvcjpyZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwgMCwgMCwgMCksIDAuNil9Omhvc3QoLmluLXNlZ21lbnQtY29sb3I6aG92ZXIpIC5idXR0b24tbmF0aXZlOjphZnRlcntiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1iYXNlKX06aG9zdCguaW4tc2VnbWVudC1jb2xvci5zZWdtZW50LWJ1dHRvbi1jaGVja2VkOmhvdmVyKSAuYnV0dG9uLW5hdGl2ZXtjb2xvcjp2YXIoLS1pb24tY29sb3ItYmFzZSl9fTpob3N0KC5pbi10b29sYmFyOm5vdCguaW4tc2VnbWVudC1jb2xvcikpey0tYmFja2dyb3VuZDp2YXIoLS1pb24tdG9vbGJhci1zZWdtZW50LWJhY2tncm91bmQsIG5vbmUpOy0tYmFja2dyb3VuZC1jaGVja2VkOnZhcigtLWlvbi10b29sYmFyLXNlZ21lbnQtYmFja2dyb3VuZC1jaGVja2VkLCBub25lKTstLWNvbG9yOnZhcigtLWlvbi10b29sYmFyLXNlZ21lbnQtY29sb3IsIHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLCAwLCAwLCAwKSwgMC42KSk7LS1jb2xvci1jaGVja2VkOnZhcigtLWlvbi10b29sYmFyLXNlZ21lbnQtY29sb3ItY2hlY2tlZCwgdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMwMDU0ZTkpKTstLWluZGljYXRvci1jb2xvcjp2YXIoLS1pb24tdG9vbGJhci1zZWdtZW50LWNvbG9yLWNoZWNrZWQsIHZhcigtLWNvbG9yLWNoZWNrZWQpKX06aG9zdCguaW4tdG9vbGJhci1jb2xvcjpub3QoLmluLXNlZ21lbnQtY29sb3IpKSAuYnV0dG9uLW5hdGl2ZXtjb2xvcjpyZ2JhKHZhcigtLWlvbi1jb2xvci1jb250cmFzdC1yZ2IpLCAwLjYpfTpob3N0KC5pbi10b29sYmFyLWNvbG9yLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQ6bm90KC5pbi1zZWdtZW50LWNvbG9yKSkgLmJ1dHRvbi1uYXRpdmV7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KX1AbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpezpob3N0KC5pbi10b29sYmFyLWNvbG9yOm5vdCguaW4tc2VnbWVudC1jb2xvcikpIC5idXR0b24tbmF0aXZlOjphZnRlcntiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1jb250cmFzdCl9fTo6c2xvdHRlZChpb24taWNvbil7bWFyZ2luLXRvcDoxMnB4O21hcmdpbi1ib3R0b206MTJweDtmb250LXNpemU6MjRweH06OnNsb3R0ZWQoaW9uLWxhYmVsKXttYXJnaW4tdG9wOjEycHg7bWFyZ2luLWJvdHRvbToxMnB4fTpob3N0KC5zZWdtZW50LWJ1dHRvbi1sYXlvdXQtaWNvbi10b3ApIDo6c2xvdHRlZChpb24tbGFiZWwpLDpob3N0KC5zZWdtZW50LWJ1dHRvbi1sYXlvdXQtaWNvbi1ib3R0b20pIDo6c2xvdHRlZChpb24taWNvbil7bWFyZ2luLXRvcDowfTpob3N0KC5zZWdtZW50LWJ1dHRvbi1sYXlvdXQtaWNvbi10b3ApIDo6c2xvdHRlZChpb24taWNvbiksOmhvc3QoLnNlZ21lbnQtYnV0dG9uLWxheW91dC1pY29uLWJvdHRvbSkgOjpzbG90dGVkKGlvbi1sYWJlbCl7bWFyZ2luLWJvdHRvbTowfTpob3N0KC5zZWdtZW50LWJ1dHRvbi1sYXlvdXQtaWNvbi1zdGFydCkgOjpzbG90dGVkKGlvbi1sYWJlbCl7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6OHB4O21hcmdpbi1pbmxpbmUtc3RhcnQ6OHB4Oy13ZWJraXQtbWFyZ2luLWVuZDowO21hcmdpbi1pbmxpbmUtZW5kOjB9Omhvc3QoLnNlZ21lbnQtYnV0dG9uLWxheW91dC1pY29uLWVuZCkgOjpzbG90dGVkKGlvbi1sYWJlbCl7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MDttYXJnaW4taW5saW5lLXN0YXJ0OjA7LXdlYmtpdC1tYXJnaW4tZW5kOjhweDttYXJnaW4taW5saW5lLWVuZDo4cHh9Omhvc3QoLnNlZ21lbnQtYnV0dG9uLWhhcy1pY29uLW9ubHkpIDo6c2xvdHRlZChpb24taWNvbil7bWFyZ2luLXRvcDoxMnB4O21hcmdpbi1ib3R0b206MTJweH06aG9zdCguc2VnbWVudC1idXR0b24taGFzLWxhYmVsLW9ubHkpIDo6c2xvdHRlZChpb24tbGFiZWwpe21hcmdpbi10b3A6MTJweDttYXJnaW4tYm90dG9tOjEycHh9LnNlZ21lbnQtYnV0dG9uLWluZGljYXRvcntsZWZ0OjA7cmlnaHQ6MDtib3R0b206MH0uc2VnbWVudC1idXR0b24taW5kaWNhdG9yLWJhY2tncm91bmR7YmFja2dyb3VuZDp2YXIoLS1pbmRpY2F0b3ItY29sb3IpfTpob3N0KC5pbi10b29sYmFyOm5vdCguaW4tc2VnbWVudC1jb2xvcikpIC5zZWdtZW50LWJ1dHRvbi1pbmRpY2F0b3ItYmFja2dyb3VuZHtiYWNrZ3JvdW5kOnZhcigtLWlvbi10b29sYmFyLXNlZ21lbnQtaW5kaWNhdG9yLWNvbG9yLCB2YXIoLS1pbmRpY2F0b3ItY29sb3IpKX06aG9zdCguaW4tdG9vbGJhci1jb2xvcjpub3QoLmluLXNlZ21lbnQtY29sb3IpKSAuc2VnbWVudC1idXR0b24taW5kaWNhdG9yLWJhY2tncm91bmR7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpfVwiO1xubGV0IGlkcyA9IDA7XG5jb25zdCBTZWdtZW50QnV0dG9uID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLnNlZ21lbnRFbCA9IG51bGw7XG4gICAgdGhpcy5pbmhlcml0ZWRBdHRyaWJ1dGVzID0ge307XG4gICAgdGhpcy5jaGVja2VkID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogSWYgYHRydWVgLCB0aGUgdXNlciBjYW5ub3QgaW50ZXJhY3Qgd2l0aCB0aGUgc2VnbWVudCBidXR0b24uXG4gICAgICovXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIFNldCB0aGUgbGF5b3V0IG9mIHRoZSB0ZXh0IGFuZCBpY29uIGluIHRoZSBzZWdtZW50LlxuICAgICAqL1xuICAgIHRoaXMubGF5b3V0ID0gJ2ljb24tdG9wJztcbiAgICAvKipcbiAgICAgKiBUaGUgdHlwZSBvZiB0aGUgYnV0dG9uLlxuICAgICAqL1xuICAgIHRoaXMudHlwZSA9ICdidXR0b24nO1xuICAgIC8qKlxuICAgICAqIFRoZSB2YWx1ZSBvZiB0aGUgc2VnbWVudCBidXR0b24uXG4gICAgICovXG4gICAgdGhpcy52YWx1ZSA9ICdpb24tc2ItJyArIGlkcysrO1xuICAgIHRoaXMudXBkYXRlU3R5bGUgPSAoKSA9PiB7XG4gICAgICBmb3JjZVVwZGF0ZSh0aGlzKTtcbiAgICB9O1xuICAgIHRoaXMudXBkYXRlU3RhdGUgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHNlZ21lbnRFbFxuICAgICAgfSA9IHRoaXM7XG4gICAgICBpZiAoc2VnbWVudEVsKSB7XG4gICAgICAgIHRoaXMuY2hlY2tlZCA9IHNlZ21lbnRFbC52YWx1ZSA9PT0gdGhpcy52YWx1ZTtcbiAgICAgICAgaWYgKHNlZ21lbnRFbC5kaXNhYmxlZCkge1xuICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICB2YWx1ZUNoYW5nZWQoKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICB9XG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGNvbnN0IHNlZ21lbnRFbCA9IHRoaXMuc2VnbWVudEVsID0gdGhpcy5lbC5jbG9zZXN0KCdpb24tc2VnbWVudCcpO1xuICAgIGlmIChzZWdtZW50RWwpIHtcbiAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICAgIGFkZEV2ZW50TGlzdGVuZXIoc2VnbWVudEVsLCAnaW9uU2VsZWN0JywgdGhpcy51cGRhdGVTdGF0ZSk7XG4gICAgICBhZGRFdmVudExpc3RlbmVyKHNlZ21lbnRFbCwgJ2lvblN0eWxlJywgdGhpcy51cGRhdGVTdHlsZSk7XG4gICAgfVxuICAgIC8vIFByZXZlbnQgYnV0dG9ucyBmcm9tIGJlaW5nIGRpc2FibGVkIHdoZW4gYXNzb2NpYXRlZCB3aXRoIHNlZ21lbnQgY29udGVudFxuICAgIGlmICh0aGlzLmNvbnRlbnRJZCAmJiB0aGlzLmRpc2FibGVkKSB7XG4gICAgICBwcmludElvbldhcm5pbmcoYFtpb24tc2VnbWVudC1idXR0b25dIC0gU2VnbWVudCBidXR0b25zIGNhbm5vdCBiZSBkaXNhYmxlZCB3aGVuIGFzc29jaWF0ZWQgd2l0aCBhbiA8aW9uLXNlZ21lbnQtY29udGVudD4uYCk7XG4gICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGNvbnN0IHNlZ21lbnRFbCA9IHRoaXMuc2VnbWVudEVsO1xuICAgIGlmIChzZWdtZW50RWwpIHtcbiAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIoc2VnbWVudEVsLCAnaW9uU2VsZWN0JywgdGhpcy51cGRhdGVTdGF0ZSk7XG4gICAgICByZW1vdmVFdmVudExpc3RlbmVyKHNlZ21lbnRFbCwgJ2lvblN0eWxlJywgdGhpcy51cGRhdGVTdHlsZSk7XG4gICAgICB0aGlzLnNlZ21lbnRFbCA9IG51bGw7XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHRoaXMuaW5oZXJpdGVkQXR0cmlidXRlcyA9IE9iamVjdC5hc3NpZ24oe30sIGluaGVyaXRBdHRyaWJ1dGVzKHRoaXMuZWwsIFsnYXJpYS1sYWJlbCddKSk7XG4gICAgLy8gUmV0dXJuIGlmIHRoZXJlIGlzIG5vIGNvbnRlbnRJZCBkZWZpbmVkXG4gICAgaWYgKCF0aGlzLmNvbnRlbnRJZCkgcmV0dXJuO1xuICAgIC8vIEF0dGVtcHQgdG8gZmluZCB0aGUgU2VnbWVudCBDb250ZW50IGJ5IGl0cyBjb250ZW50SWRcbiAgICBjb25zdCBzZWdtZW50Q29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuY29udGVudElkKTtcbiAgICAvLyBJZiBubyBhc3NvY2lhdGVkIFNlZ21lbnQgQ29udGVudCBleGlzdHMsIGxvZyBhbiBlcnJvciBhbmQgcmV0dXJuXG4gICAgaWYgKCFzZWdtZW50Q29udGVudCkge1xuICAgICAgcHJpbnRJb25FcnJvcihgW2lvbi1zZWdtZW50LWJ1dHRvbl0gLSBVbmFibGUgdG8gZmluZCBTZWdtZW50IENvbnRlbnQgd2l0aCBpZD1cIiR7dGhpcy5jb250ZW50SWR9XCIuYCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIEVuc3VyZSB0aGUgZm91bmQgZWxlbWVudCBpcyBhIHZhbGlkIElPTi1TRUdNRU5ULUNPTlRFTlRcbiAgICBpZiAoc2VnbWVudENvbnRlbnQudGFnTmFtZSAhPT0gJ0lPTi1TRUdNRU5ULUNPTlRFTlQnKSB7XG4gICAgICBwcmludElvbkVycm9yKGBbaW9uLXNlZ21lbnQtYnV0dG9uXSAtIEVsZW1lbnQgd2l0aCBpZD1cIiR7dGhpcy5jb250ZW50SWR9XCIgaXMgbm90IGFuIDxpb24tc2VnbWVudC1jb250ZW50PiBlbGVtZW50LmApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICBnZXQgaGFzTGFiZWwoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCdpb24tbGFiZWwnKTtcbiAgfVxuICBnZXQgaGFzSWNvbigpIHtcbiAgICByZXR1cm4gISF0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1pY29uJyk7XG4gIH1cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBGb2N1c2VzIHRoZSBuYXRpdmUgPGJ1dHRvbj4gZWxlbWVudFxuICAgKiBpbnNpZGUgb2YgaW9uLXNlZ21lbnQtYnV0dG9uLlxuICAgKi9cbiAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgY29uc3Qge1xuICAgICAgbmF0aXZlRWxcbiAgICB9ID0gdGhpcztcbiAgICBpZiAobmF0aXZlRWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbmF0aXZlRWwuZm9jdXMoKTtcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoZWNrZWQsXG4gICAgICB0eXBlLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBoYXNJY29uLFxuICAgICAgaGFzTGFiZWwsXG4gICAgICBsYXlvdXQsXG4gICAgICBzZWdtZW50RWxcbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICBjb25zdCBoYXNTZWdtZW50Q29sb3IgPSAoKSA9PiAoc2VnbWVudEVsID09PSBudWxsIHx8IHNlZ21lbnRFbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2VnbWVudEVsLmNvbG9yKSAhPT0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBoKEhvc3QsIHtcbiAgICAgIGtleTogJzI2Y2I3ZWU5MDQ1NWJjYWE2NDE2MTI1ODAyZDdlNTcyOWZhMDViNWInLFxuICAgICAgY2xhc3M6IHtcbiAgICAgICAgW21vZGVdOiB0cnVlLFxuICAgICAgICAnaW4tdG9vbGJhcic6IGhvc3RDb250ZXh0KCdpb24tdG9vbGJhcicsIHRoaXMuZWwpLFxuICAgICAgICAnaW4tdG9vbGJhci1jb2xvcic6IGhvc3RDb250ZXh0KCdpb24tdG9vbGJhcltjb2xvcl0nLCB0aGlzLmVsKSxcbiAgICAgICAgJ2luLXNlZ21lbnQnOiBob3N0Q29udGV4dCgnaW9uLXNlZ21lbnQnLCB0aGlzLmVsKSxcbiAgICAgICAgJ2luLXNlZ21lbnQtY29sb3InOiBoYXNTZWdtZW50Q29sb3IoKSxcbiAgICAgICAgJ3NlZ21lbnQtYnV0dG9uLWhhcy1sYWJlbCc6IGhhc0xhYmVsLFxuICAgICAgICAnc2VnbWVudC1idXR0b24taGFzLWljb24nOiBoYXNJY29uLFxuICAgICAgICAnc2VnbWVudC1idXR0b24taGFzLWxhYmVsLW9ubHknOiBoYXNMYWJlbCAmJiAhaGFzSWNvbixcbiAgICAgICAgJ3NlZ21lbnQtYnV0dG9uLWhhcy1pY29uLW9ubHknOiBoYXNJY29uICYmICFoYXNMYWJlbCxcbiAgICAgICAgJ3NlZ21lbnQtYnV0dG9uLWRpc2FibGVkJzogZGlzYWJsZWQsXG4gICAgICAgICdzZWdtZW50LWJ1dHRvbi1jaGVja2VkJzogY2hlY2tlZCxcbiAgICAgICAgW2BzZWdtZW50LWJ1dHRvbi1sYXlvdXQtJHtsYXlvdXR9YF06IHRydWUsXG4gICAgICAgICdpb24tYWN0aXZhdGFibGUnOiB0cnVlLFxuICAgICAgICAnaW9uLWFjdGl2YXRhYmxlLWluc3RhbnQnOiB0cnVlLFxuICAgICAgICAnaW9uLWZvY3VzYWJsZSc6IHRydWVcbiAgICAgIH1cbiAgICB9LCBoKFwiYnV0dG9uXCIsIE9iamVjdC5hc3NpZ24oe1xuICAgICAga2V5OiAnNzVhZGQzN2YxMWMxMDdkMWUyY2ZkYjE1NGUwODAwNGU5NTc5ZTg2MycsXG4gICAgICBcImFyaWEtc2VsZWN0ZWRcIjogY2hlY2tlZCA/ICd0cnVlJyA6ICdmYWxzZScsXG4gICAgICByb2xlOiBcInRhYlwiLFxuICAgICAgcmVmOiBlbCA9PiB0aGlzLm5hdGl2ZUVsID0gZWwsXG4gICAgICB0eXBlOiB0eXBlLFxuICAgICAgY2xhc3M6IFwiYnV0dG9uLW5hdGl2ZVwiLFxuICAgICAgcGFydDogXCJuYXRpdmVcIixcbiAgICAgIGRpc2FibGVkOiBkaXNhYmxlZFxuICAgIH0sIHRoaXMuaW5oZXJpdGVkQXR0cmlidXRlcyksIGgoXCJzcGFuXCIsIHtcbiAgICAgIGtleTogJzhlNzIwZDJhM2UzMDQ5MDM2ODViZjA5ZDIyNmE2NGU5NDRkNzhhMjInLFxuICAgICAgY2xhc3M6IFwiYnV0dG9uLWlubmVyXCJcbiAgICB9LCBoKFwic2xvdFwiLCB7XG4gICAgICBrZXk6ICdjOGU3YjNlYmY4ZjAzMDQyYTEwMDExNTU2NDNiNTg1MjgzYzczYzY1J1xuICAgIH0pKSwgbW9kZSA9PT0gJ21kJyAmJiBoKFwiaW9uLXJpcHBsZS1lZmZlY3RcIiwge1xuICAgICAga2V5OiAnMzU4NmFjMzE3YjhkODJjOTJiMGNjZmJmYWU0MmY4Nzc4NjEyMzIxYidcbiAgICB9KSksIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnOWNmOTM5NTdkYTllOGRjMzMzYzhiMDUzMjdiYjkwMzM4NWIxYzVmNCcsXG4gICAgICBwYXJ0OiBcImluZGljYXRvclwiLFxuICAgICAgY2xhc3M6IFwic2VnbWVudC1idXR0b24taW5kaWNhdG9yIHNlZ21lbnQtYnV0dG9uLWluZGljYXRvci1hbmltYXRlZFwiXG4gICAgfSwgaChcImRpdlwiLCB7XG4gICAgICBrZXk6ICdkM2I2ZjBiMzg2MGVjNjg5NmI0NjcwM2Y2NGVkMWNjOGM3NTYxMmUzJyxcbiAgICAgIHBhcnQ6IFwiaW5kaWNhdG9yLWJhY2tncm91bmRcIixcbiAgICAgIGNsYXNzOiBcInNlZ21lbnQtYnV0dG9uLWluZGljYXRvci1iYWNrZ3JvdW5kXCJcbiAgICB9KSkpO1xuICB9XG4gIGdldCBlbCgpIHtcbiAgICByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBcInZhbHVlXCI6IFtcInZhbHVlQ2hhbmdlZFwiXVxuICAgIH07XG4gIH1cbn07XG5TZWdtZW50QnV0dG9uLnN0eWxlID0ge1xuICBpb3M6IHNlZ21lbnRCdXR0b25Jb3NDc3MsXG4gIG1kOiBzZWdtZW50QnV0dG9uTWRDc3Ncbn07XG5leHBvcnQgeyBTZWdtZW50IGFzIGlvbl9zZWdtZW50LCBTZWdtZW50QnV0dG9uIGFzIGlvbl9zZWdtZW50X2J1dHRvbiB9OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQSxJQUFNLGdCQUFnQjtBQUN0QixJQUFNLGVBQWU7QUFDckIsSUFBTSxVQUFVLE1BQU07QUFB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QVUsV0FBVztBQUMxRyxXQUFPLEVBQUUsTUFBTTtBQUFBLE1BQ2IsS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLFFBQ0wsQ0FBQyxJQUFJLEdBQUc7QUFBQSxRQUNSLGNBQWMsWUFBWSxlQUFlLEtBQUssRUFBRTtBQUFBLFFBQ2hELG9CQUFvQixZQUFZLHNCQUFzQixLQUFLLEVBQUU7QUFBQSxRQUM3RCxjQUFjLFlBQVksZUFBZSxLQUFLLEVBQUU7QUFBQSxRQUNoRCxvQkFBb0IsZ0JBQWdCO0FBQUEsUUFDcEMsNEJBQTRCO0FBQUEsUUFDNUIsMkJBQTJCO0FBQUEsUUFDM0IsaUNBQWlDLFlBQVksQ0FBQztBQUFBLFFBQzlDLGdDQUFnQyxXQUFXLENBQUM7QUFBQSxRQUM1QywyQkFBMkI7QUFBQSxRQUMzQiwwQkFBMEI7QUFBQSxRQUMxQixDQUFDLHlCQUF5QixNQUFNLEVBQUUsR0FBRztBQUFBLFFBQ3JDLG1CQUFtQjtBQUFBLFFBQ25CLDJCQUEyQjtBQUFBLFFBQzNCLGlCQUFpQjtBQUFBLE1BQ25CO0FBQUEsSUFDRixHQUFHLEVBQUUsVUFBVSxPQUFPLE9BQU87QUFBQSxNQUMzQixLQUFLO0FBQUEsTUFDTCxpQkFBaUIsVUFBVSxTQUFTO0FBQUEsTUFDcEMsTUFBTTtBQUFBLE1BQ04sS0FBSyxRQUFNLEtBQUssV0FBVztBQUFBLE1BQzNCO0FBQUEsTUFDQSxPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTjtBQUFBLElBQ0YsR0FBRyxLQUFLLG1CQUFtQixHQUFHLEVBQUUsUUFBUTtBQUFBLE1BQ3RDLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxJQUNULEdBQUcsRUFBRSxRQUFRO0FBQUEsTUFDWCxLQUFLO0FBQUEsSUFDUCxDQUFDLENBQUMsR0FBRyxTQUFTLFFBQVEsRUFBRSxxQkFBcUI7QUFBQSxNQUMzQyxLQUFLO0FBQUEsSUFDUCxDQUFDLENBQUMsR0FBRyxFQUFFLE9BQU87QUFBQSxNQUNaLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxJQUNULEdBQUcsRUFBRSxPQUFPO0FBQUEsTUFDVixLQUFLO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsSUFDVCxDQUFDLENBQUMsQ0FBQztBQUFBLEVBQ0w7QUFBQSxFQUNBLElBQUksS0FBSztBQUNQLFdBQU8sV0FBVyxJQUFJO0FBQUEsRUFDeEI7QUFBQSxFQUNBLFdBQVcsV0FBVztBQUNwQixXQUFPO0FBQUEsTUFDTCxTQUFTLENBQUMsY0FBYztBQUFBLElBQzFCO0FBQUEsRUFDRjtBQUNGO0FBQ0EsY0FBYyxRQUFRO0FBQUEsRUFDcEIsS0FBSztBQUFBLEVBQ0wsSUFBSTtBQUNOOyIsIm5hbWVzIjpbXSwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==
