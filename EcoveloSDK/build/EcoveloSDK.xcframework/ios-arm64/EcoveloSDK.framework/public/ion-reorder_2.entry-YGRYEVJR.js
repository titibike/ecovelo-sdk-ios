import {
  findClosestIonContent,
  getScrollElement
} from "./chunk-WRI2MF6U.js";
import {
  reorderThreeOutline,
  reorderTwoSharp
} from "./chunk-D4BGZ3LF.js";
import {
  hapticSelectionChanged,
  hapticSelectionEnd,
  hapticSelectionStart
} from "./chunk-QINLMX2Z.js";
import "./chunk-VZXYYFOL.js";
import {
  getIonMode
} from "./chunk-TXLH22R2.js";
import {
  raf
} from "./chunk-RZR7LWTQ.js";
import "./chunk-YSZWGYJT.js";
import {
  Host,
  createEvent,
  getElement,
  h,
  registerInstance
} from "./chunk-BFPTXCSH.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js
var reorderIosCss = ":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block}::slotted(ion-icon){font-size:dynamic-font(16px)}.reorder-icon{font-size:2.125rem;opacity:0.4}";
var reorderMdCss = ":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block}::slotted(ion-icon){font-size:dynamic-font(16px)}.reorder-icon{font-size:1.9375rem;opacity:0.3}";
var Reorder = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  onClick(ev) {
    const reorderGroup = this.el.closest("ion-reorder-group");
    ev.preventDefault();
    if (!reorderGroup || !reorderGroup.disabled) {
      ev.stopImmediatePropagation();
    }
  }
  render() {
    const mode = getIonMode(this);
    const reorderIcon = mode === "ios" ? reorderThreeOutline : reorderTwoSharp;
    return h(Host, {
      key: "e6807bb349725682e99e791ac65e729a360d64e8",
      class: mode
    }, h("slot", {
      key: "1c691cdbffa6427ba08dc12184c69559ed5d5506"
    }, h("ion-icon", {
      key: "8b4150302cdca475379582b2251737b5e74079b1",
      icon: reorderIcon,
      lazy: false,
      class: "reorder-icon",
      part: "icon",
      "aria-hidden": "true"
    })));
  }
  get el() {
    return getElement(this);
  }
};
Reorder.style = {
  ios: reorderIosCss,
  md: reorderMdCss
};
var reorderGroupCss = ".reorder-list-active>*{display:block;-webkit-transition:-webkit-transform 300ms;transition:-webkit-transform 300ms;transition:transform 300ms;transition:transform 300ms, -webkit-transform 300ms;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none !important;transition:none !important;-webkit-box-shadow:0 0 10px rgba(0, 0, 0, 0.4);box-shadow:0 0 10px rgba(0, 0, 0, 0.4);opacity:0.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}";
var ReorderGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionItemReorder = createEvent(this, "ionItemReorder", 7);
    this.ionReorderStart = createEvent(this, "ionReorderStart", 7);
    this.ionReorderMove = createEvent(this, "ionReorderMove", 7);
    this.ionReorderEnd = createEvent(this, "ionReorderEnd", 7);
    this.lastToIndex = -1;
    this.cachedHeights = [];
    this.scrollElTop = 0;
    this.scrollElBottom = 0;
    this.scrollElInitial = 0;
    this.containerTop = 0;
    this.containerBottom = 0;
    this.state = 0;
    this.disabled = true;
  }
  disabledChanged() {
    if (this.gesture) {
      this.gesture.enable(!this.disabled);
    }
  }
  connectedCallback() {
    return __async(this, null, function* () {
      const contentEl = findClosestIonContent(this.el);
      if (contentEl) {
        this.scrollEl = yield getScrollElement(contentEl);
      }
      this.gesture = (yield import("./index-CfgBF1SE-H675UNH5.js")).createGesture({
        el: this.el,
        gestureName: "reorder",
        gesturePriority: 110,
        threshold: 0,
        direction: "y",
        passive: false,
        canStart: (detail) => this.canStart(detail),
        onStart: (ev) => this.onStart(ev),
        onMove: (ev) => this.onMove(ev),
        onEnd: () => this.onEnd()
      });
      this.disabledChanged();
    });
  }
  disconnectedCallback() {
    this.onEnd();
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = void 0;
    }
  }
  /**
   * Completes the reorder operation. Must be called by the `ionReorderEnd` event.
   *
   * If a list of items is passed, the list will be reordered and returned in the
   * proper order.
   *
   * If no parameters are passed or if `true` is passed in, the reorder will complete
   * and the item will remain in the position it was dragged to. If `false` is passed,
   * the reorder will complete and the item will bounce back to its original position.
   *
   * @param listOrReorder A list of items to be sorted and returned in the new order or a
   * boolean of whether or not the reorder should reposition the item.
   */
  complete(listOrReorder) {
    return Promise.resolve(this.completeReorder(listOrReorder));
  }
  canStart(ev) {
    if (this.selectedItemEl || this.state !== 0) {
      return false;
    }
    const target = ev.event.target;
    const reorderEl = target.closest("ion-reorder");
    if (!reorderEl) {
      return false;
    }
    const item = findReorderItem(reorderEl, this.el);
    if (!item) {
      return false;
    }
    ev.data = item;
    return true;
  }
  onStart(ev) {
    ev.event.preventDefault();
    const item = this.selectedItemEl = ev.data;
    const heights = this.cachedHeights;
    heights.length = 0;
    const el = this.el;
    const children = el.__children || el.children;
    if (!children || children.length === 0) {
      return;
    }
    let sum = 0;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      sum += child.offsetHeight;
      heights.push(sum);
      child.$ionIndex = i;
    }
    const box = el.getBoundingClientRect();
    this.containerTop = box.top;
    this.containerBottom = box.bottom;
    if (this.scrollEl) {
      const scrollBox = this.scrollEl.getBoundingClientRect();
      this.scrollElInitial = this.scrollEl.scrollTop;
      this.scrollElTop = scrollBox.top + AUTO_SCROLL_MARGIN;
      this.scrollElBottom = scrollBox.bottom - AUTO_SCROLL_MARGIN;
    } else {
      this.scrollElInitial = 0;
      this.scrollElTop = 0;
      this.scrollElBottom = 0;
    }
    this.lastToIndex = indexForItem(item);
    this.selectedItemHeight = item.offsetHeight;
    this.state = 1;
    item.classList.add(ITEM_REORDER_SELECTED);
    hapticSelectionStart();
    this.ionReorderStart.emit();
  }
  onMove(ev) {
    const selectedItem = this.selectedItemEl;
    if (!selectedItem) {
      return;
    }
    const scroll = this.autoscroll(ev.currentY);
    const top = this.containerTop - scroll;
    const bottom = this.containerBottom - scroll;
    const currentY = Math.max(top, Math.min(ev.currentY, bottom));
    const deltaY = scroll + currentY - ev.startY;
    const normalizedY = currentY - top;
    const fromIndex = this.lastToIndex;
    const toIndex = this.itemIndexForTop(normalizedY);
    if (toIndex !== this.lastToIndex) {
      const fromIndex2 = indexForItem(selectedItem);
      this.lastToIndex = toIndex;
      hapticSelectionChanged();
      this.reorderMove(fromIndex2, toIndex);
    }
    selectedItem.style.transform = `translateY(${deltaY}px)`;
    this.ionReorderMove.emit({
      from: fromIndex,
      to: toIndex
    });
  }
  onEnd() {
    const selectedItemEl = this.selectedItemEl;
    this.state = 2;
    if (!selectedItemEl) {
      this.state = 0;
      return;
    }
    const toIndex = this.lastToIndex;
    const fromIndex = indexForItem(selectedItemEl);
    if (toIndex === fromIndex) {
      this.completeReorder();
    } else {
      this.ionItemReorder.emit({
        from: fromIndex,
        to: toIndex,
        complete: this.completeReorder.bind(this)
      });
    }
    hapticSelectionEnd();
    this.ionReorderEnd.emit({
      from: fromIndex,
      to: toIndex,
      complete: this.completeReorder.bind(this)
    });
  }
  completeReorder(listOrReorder) {
    const selectedItemEl = this.selectedItemEl;
    if (selectedItemEl && this.state === 2) {
      const children = this.el.__children || this.el.children;
      const len = children.length;
      const toIndex = this.lastToIndex;
      const fromIndex = indexForItem(selectedItemEl);
      raf(() => {
        if (toIndex !== fromIndex && (listOrReorder === void 0 || listOrReorder === true)) {
          const ref = fromIndex < toIndex ? children[toIndex + 1] : children[toIndex];
          this.el.insertBefore(selectedItemEl, ref);
        }
        for (let i = 0; i < len; i++) {
          children[i].style["transform"] = "";
        }
      });
      if (Array.isArray(listOrReorder)) {
        listOrReorder = reorderArray(listOrReorder, fromIndex, toIndex);
      }
      selectedItemEl.style.transition = "";
      selectedItemEl.classList.remove(ITEM_REORDER_SELECTED);
      this.selectedItemEl = void 0;
      this.state = 0;
    }
    return listOrReorder;
  }
  itemIndexForTop(deltaY) {
    const heights = this.cachedHeights;
    for (let i = 0; i < heights.length; i++) {
      if (heights[i] > deltaY) {
        return i;
      }
    }
    return heights.length - 1;
  }
  /********* DOM WRITE ********* */
  reorderMove(fromIndex, toIndex) {
    const itemHeight = this.selectedItemHeight;
    const children = this.el.__children || this.el.children;
    for (let i = 0; i < children.length; i++) {
      const style = children[i].style;
      let value = "";
      if (i > fromIndex && i <= toIndex) {
        value = `translateY(${-itemHeight}px)`;
      } else if (i < fromIndex && i >= toIndex) {
        value = `translateY(${itemHeight}px)`;
      }
      style["transform"] = value;
    }
  }
  autoscroll(posY) {
    if (!this.scrollEl) {
      return 0;
    }
    let amount = 0;
    if (posY < this.scrollElTop) {
      amount = -10;
    } else if (posY > this.scrollElBottom) {
      amount = SCROLL_JUMP;
    }
    if (amount !== 0) {
      this.scrollEl.scrollBy(0, amount);
    }
    return this.scrollEl.scrollTop - this.scrollElInitial;
  }
  render() {
    const mode = getIonMode(this);
    return h(Host, {
      key: "b9641f3061d67fbfe68317b901ec33267046e073",
      class: {
        [mode]: true,
        "reorder-enabled": !this.disabled,
        "reorder-list-active": this.state !== 0
        /* ReorderGroupState.Idle */
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
var indexForItem = (element) => {
  return element["$ionIndex"];
};
var findReorderItem = (node, container) => {
  let parent;
  while (node) {
    parent = node.parentElement;
    if (parent === container) {
      return node;
    }
    node = parent;
  }
  return void 0;
};
var AUTO_SCROLL_MARGIN = 60;
var SCROLL_JUMP = 10;
var ITEM_REORDER_SELECTED = "reorder-selected";
var reorderArray = (array, from, to) => {
  const element = array[from];
  array.splice(from, 1);
  array.splice(to, 0, element);
  return array.slice();
};
ReorderGroup.style = reorderGroupCss;
export {
  Reorder as ion_reorder,
  ReorderGroup as ion_reorder_group
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-reorder_2.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tcmVvcmRlcl8yLmVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGgsIGQgYXMgSG9zdCwgZyBhcyBnZXRFbGVtZW50LCBjIGFzIGNyZWF0ZUV2ZW50IH0gZnJvbSAnLi9pbmRleC00RHhZNl9nRy5qcyc7XG5pbXBvcnQgeyBqIGFzIHJlb3JkZXJUaHJlZU91dGxpbmUsIGsgYXMgcmVvcmRlclR3b1NoYXJwIH0gZnJvbSAnLi9pbmRleC1EVjNzSkpXOC5qcyc7XG5pbXBvcnQgeyBiIGFzIGdldElvbk1vZGUgfSBmcm9tICcuL2lvbmljLWdsb2JhbC1DVFN5dWZoRi5qcyc7XG5pbXBvcnQgeyBmIGFzIGZpbmRDbG9zZXN0SW9uQ29udGVudCwgZyBhcyBnZXRTY3JvbGxFbGVtZW50IH0gZnJvbSAnLi9pbmRleC03VWJTbHY3Ti5qcyc7XG5pbXBvcnQgeyByIGFzIHJhZiB9IGZyb20gJy4vaGVscGVycy04S1NRUUdReS5qcyc7XG5pbXBvcnQgeyBiIGFzIGhhcHRpY1NlbGVjdGlvblN0YXJ0LCBhIGFzIGhhcHRpY1NlbGVjdGlvbkNoYW5nZWQsIGggYXMgaGFwdGljU2VsZWN0aW9uRW5kIH0gZnJvbSAnLi9oYXB0aWMtRHpBTVdKdWsuanMnO1xuaW1wb3J0ICcuL2NhcGFjaXRvci1DRkVSSWVhVS5qcyc7XG5pbXBvcnQgJy4vaW5kZXgtWmpQNENqZVouanMnO1xuY29uc3QgcmVvcmRlcklvc0NzcyA9IFwiOmhvc3QoW3Nsb3RdKXtkaXNwbGF5Om5vbmU7bGluZS1oZWlnaHQ6MDt6LWluZGV4OjEwMH0ucmVvcmRlci1pY29ue2Rpc3BsYXk6YmxvY2t9OjpzbG90dGVkKGlvbi1pY29uKXtmb250LXNpemU6ZHluYW1pYy1mb250KDE2cHgpfS5yZW9yZGVyLWljb257Zm9udC1zaXplOjIuMTI1cmVtO29wYWNpdHk6MC40fVwiO1xuY29uc3QgcmVvcmRlck1kQ3NzID0gXCI6aG9zdChbc2xvdF0pe2Rpc3BsYXk6bm9uZTtsaW5lLWhlaWdodDowO3otaW5kZXg6MTAwfS5yZW9yZGVyLWljb257ZGlzcGxheTpibG9ja306OnNsb3R0ZWQoaW9uLWljb24pe2ZvbnQtc2l6ZTpkeW5hbWljLWZvbnQoMTZweCl9LnJlb3JkZXItaWNvbntmb250LXNpemU6MS45Mzc1cmVtO29wYWNpdHk6MC4zfVwiO1xuY29uc3QgUmVvcmRlciA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gIH1cbiAgb25DbGljayhldikge1xuICAgIGNvbnN0IHJlb3JkZXJHcm91cCA9IHRoaXMuZWwuY2xvc2VzdCgnaW9uLXJlb3JkZXItZ3JvdXAnKTtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIE9ubHkgc3RvcCBldmVudCBwcm9wYWdhdGlvbiBpZiB0aGUgcmVvcmRlciBpcyBpbnNpZGUgb2YgYW4gZW5hYmxlZFxuICAgIC8vIHJlb3JkZXIgZ3JvdXAuIFRoaXMgYWxsb3dzIGludGVyYWN0aW9uIHdpdGggY2xpY2thYmxlIGNoaWxkcmVuIGNvbXBvbmVudHMuXG4gICAgaWYgKCFyZW9yZGVyR3JvdXAgfHwgIXJlb3JkZXJHcm91cC5kaXNhYmxlZCkge1xuICAgICAgZXYuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICBjb25zdCByZW9yZGVySWNvbiA9IG1vZGUgPT09ICdpb3MnID8gcmVvcmRlclRocmVlT3V0bGluZSA6IHJlb3JkZXJUd29TaGFycDtcbiAgICByZXR1cm4gaChIb3N0LCB7XG4gICAgICBrZXk6ICdlNjgwN2JiMzQ5NzI1NjgyZTk5ZTc5MWFjNjVlNzI5YTM2MGQ2NGU4JyxcbiAgICAgIGNsYXNzOiBtb2RlXG4gICAgfSwgaChcInNsb3RcIiwge1xuICAgICAga2V5OiAnMWM2OTFjZGJmZmE2NDI3YmEwOGRjMTIxODRjNjk1NTllZDVkNTUwNidcbiAgICB9LCBoKFwiaW9uLWljb25cIiwge1xuICAgICAga2V5OiAnOGI0MTUwMzAyY2RjYTQ3NTM3OTU4MmIyMjUxNzM3YjVlNzQwNzliMScsXG4gICAgICBpY29uOiByZW9yZGVySWNvbixcbiAgICAgIGxhenk6IGZhbHNlLFxuICAgICAgY2xhc3M6IFwicmVvcmRlci1pY29uXCIsXG4gICAgICBwYXJ0OiBcImljb25cIixcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCJcbiAgICB9KSkpO1xuICB9XG4gIGdldCBlbCgpIHtcbiAgICByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTtcbiAgfVxufTtcblJlb3JkZXIuc3R5bGUgPSB7XG4gIGlvczogcmVvcmRlcklvc0NzcyxcbiAgbWQ6IHJlb3JkZXJNZENzc1xufTtcbmNvbnN0IHJlb3JkZXJHcm91cENzcyA9IFwiLnJlb3JkZXItbGlzdC1hY3RpdmU+KntkaXNwbGF5OmJsb2NrOy13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAzMDBtczt0cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIDMwMG1zO3RyYW5zaXRpb246dHJhbnNmb3JtIDMwMG1zO3RyYW5zaXRpb246dHJhbnNmb3JtIDMwMG1zLCAtd2Via2l0LXRyYW5zZm9ybSAzMDBtczt3aWxsLWNoYW5nZTp0cmFuc2Zvcm19LnJlb3JkZXItZW5hYmxlZHstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9LnJlb3JkZXItZW5hYmxlZCBpb24tcmVvcmRlcntkaXNwbGF5OmJsb2NrO2N1cnNvcjotd2Via2l0LWdyYWI7Y3Vyc29yOmdyYWI7cG9pbnRlci1ldmVudHM6YWxsOy1tcy10b3VjaC1hY3Rpb246bm9uZTt0b3VjaC1hY3Rpb246bm9uZX0ucmVvcmRlci1zZWxlY3RlZCwucmVvcmRlci1zZWxlY3RlZCBpb24tcmVvcmRlcntjdXJzb3I6LXdlYmtpdC1ncmFiYmluZztjdXJzb3I6Z3JhYmJpbmd9LnJlb3JkZXItc2VsZWN0ZWR7cG9zaXRpb246cmVsYXRpdmU7LXdlYmtpdC10cmFuc2l0aW9uOm5vbmUgIWltcG9ydGFudDt0cmFuc2l0aW9uOm5vbmUgIWltcG9ydGFudDstd2Via2l0LWJveC1zaGFkb3c6MCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjQpO2JveC1zaGFkb3c6MCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjQpO29wYWNpdHk6MC44O3otaW5kZXg6MTAwfS5yZW9yZGVyLXZpc2libGUgaW9uLXJlb3JkZXIgLnJlb3JkZXItaWNvbnstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCAgMCwgIDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCAgMCwgIDApfVwiO1xuY29uc3QgUmVvcmRlckdyb3VwID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmlvbkl0ZW1SZW9yZGVyID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25JdGVtUmVvcmRlclwiLCA3KTtcbiAgICB0aGlzLmlvblJlb3JkZXJTdGFydCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uUmVvcmRlclN0YXJ0XCIsIDcpO1xuICAgIHRoaXMuaW9uUmVvcmRlck1vdmUgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblJlb3JkZXJNb3ZlXCIsIDcpO1xuICAgIHRoaXMuaW9uUmVvcmRlckVuZCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uUmVvcmRlckVuZFwiLCA3KTtcbiAgICB0aGlzLmxhc3RUb0luZGV4ID0gLTE7XG4gICAgdGhpcy5jYWNoZWRIZWlnaHRzID0gW107XG4gICAgdGhpcy5zY3JvbGxFbFRvcCA9IDA7XG4gICAgdGhpcy5zY3JvbGxFbEJvdHRvbSA9IDA7XG4gICAgdGhpcy5zY3JvbGxFbEluaXRpYWwgPSAwO1xuICAgIHRoaXMuY29udGFpbmVyVG9wID0gMDtcbiAgICB0aGlzLmNvbnRhaW5lckJvdHRvbSA9IDA7XG4gICAgdGhpcy5zdGF0ZSA9IDAgLyogUmVvcmRlckdyb3VwU3RhdGUuSWRsZSAqLztcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIHRoZSByZW9yZGVyIHdpbGwgYmUgaGlkZGVuLlxuICAgICAqL1xuICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICB9XG4gIGRpc2FibGVkQ2hhbmdlZCgpIHtcbiAgICBpZiAodGhpcy5nZXN0dXJlKSB7XG4gICAgICB0aGlzLmdlc3R1cmUuZW5hYmxlKCF0aGlzLmRpc2FibGVkKTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY29uc3QgY29udGVudEVsID0gZmluZENsb3Nlc3RJb25Db250ZW50KHRoaXMuZWwpO1xuICAgIGlmIChjb250ZW50RWwpIHtcbiAgICAgIHRoaXMuc2Nyb2xsRWwgPSBhd2FpdCBnZXRTY3JvbGxFbGVtZW50KGNvbnRlbnRFbCk7XG4gICAgfVxuICAgIHRoaXMuZ2VzdHVyZSA9IChhd2FpdCBpbXBvcnQoJy4vaW5kZXgtQ2ZnQkYxU0UuanMnKSkuY3JlYXRlR2VzdHVyZSh7XG4gICAgICBlbDogdGhpcy5lbCxcbiAgICAgIGdlc3R1cmVOYW1lOiAncmVvcmRlcicsXG4gICAgICBnZXN0dXJlUHJpb3JpdHk6IDExMCxcbiAgICAgIHRocmVzaG9sZDogMCxcbiAgICAgIGRpcmVjdGlvbjogJ3knLFxuICAgICAgcGFzc2l2ZTogZmFsc2UsXG4gICAgICBjYW5TdGFydDogZGV0YWlsID0+IHRoaXMuY2FuU3RhcnQoZGV0YWlsKSxcbiAgICAgIG9uU3RhcnQ6IGV2ID0+IHRoaXMub25TdGFydChldiksXG4gICAgICBvbk1vdmU6IGV2ID0+IHRoaXMub25Nb3ZlKGV2KSxcbiAgICAgIG9uRW5kOiAoKSA9PiB0aGlzLm9uRW5kKClcbiAgICB9KTtcbiAgICB0aGlzLmRpc2FibGVkQ2hhbmdlZCgpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMub25FbmQoKTtcbiAgICBpZiAodGhpcy5nZXN0dXJlKSB7XG4gICAgICB0aGlzLmdlc3R1cmUuZGVzdHJveSgpO1xuICAgICAgdGhpcy5nZXN0dXJlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQ29tcGxldGVzIHRoZSByZW9yZGVyIG9wZXJhdGlvbi4gTXVzdCBiZSBjYWxsZWQgYnkgdGhlIGBpb25SZW9yZGVyRW5kYCBldmVudC5cbiAgICpcbiAgICogSWYgYSBsaXN0IG9mIGl0ZW1zIGlzIHBhc3NlZCwgdGhlIGxpc3Qgd2lsbCBiZSByZW9yZGVyZWQgYW5kIHJldHVybmVkIGluIHRoZVxuICAgKiBwcm9wZXIgb3JkZXIuXG4gICAqXG4gICAqIElmIG5vIHBhcmFtZXRlcnMgYXJlIHBhc3NlZCBvciBpZiBgdHJ1ZWAgaXMgcGFzc2VkIGluLCB0aGUgcmVvcmRlciB3aWxsIGNvbXBsZXRlXG4gICAqIGFuZCB0aGUgaXRlbSB3aWxsIHJlbWFpbiBpbiB0aGUgcG9zaXRpb24gaXQgd2FzIGRyYWdnZWQgdG8uIElmIGBmYWxzZWAgaXMgcGFzc2VkLFxuICAgKiB0aGUgcmVvcmRlciB3aWxsIGNvbXBsZXRlIGFuZCB0aGUgaXRlbSB3aWxsIGJvdW5jZSBiYWNrIHRvIGl0cyBvcmlnaW5hbCBwb3NpdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIGxpc3RPclJlb3JkZXIgQSBsaXN0IG9mIGl0ZW1zIHRvIGJlIHNvcnRlZCBhbmQgcmV0dXJuZWQgaW4gdGhlIG5ldyBvcmRlciBvciBhXG4gICAqIGJvb2xlYW4gb2Ygd2hldGhlciBvciBub3QgdGhlIHJlb3JkZXIgc2hvdWxkIHJlcG9zaXRpb24gdGhlIGl0ZW0uXG4gICAqL1xuICBjb21wbGV0ZShsaXN0T3JSZW9yZGVyKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLmNvbXBsZXRlUmVvcmRlcihsaXN0T3JSZW9yZGVyKSk7XG4gIH1cbiAgY2FuU3RhcnQoZXYpIHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZEl0ZW1FbCB8fCB0aGlzLnN0YXRlICE9PSAwIC8qIFJlb3JkZXJHcm91cFN0YXRlLklkbGUgKi8pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgdGFyZ2V0ID0gZXYuZXZlbnQudGFyZ2V0O1xuICAgIGNvbnN0IHJlb3JkZXJFbCA9IHRhcmdldC5jbG9zZXN0KCdpb24tcmVvcmRlcicpO1xuICAgIGlmICghcmVvcmRlckVsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGl0ZW0gPSBmaW5kUmVvcmRlckl0ZW0ocmVvcmRlckVsLCB0aGlzLmVsKTtcbiAgICBpZiAoIWl0ZW0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZXYuZGF0YSA9IGl0ZW07XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgb25TdGFydChldikge1xuICAgIGV2LmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgaXRlbSA9IHRoaXMuc2VsZWN0ZWRJdGVtRWwgPSBldi5kYXRhO1xuICAgIGNvbnN0IGhlaWdodHMgPSB0aGlzLmNhY2hlZEhlaWdodHM7XG4gICAgaGVpZ2h0cy5sZW5ndGggPSAwO1xuICAgIGNvbnN0IGVsID0gdGhpcy5lbDtcbiAgICBjb25zdCBjaGlsZHJlbiA9IGVsLl9fY2hpbGRyZW4gfHwgZWwuY2hpbGRyZW47XG4gICAgaWYgKCFjaGlsZHJlbiB8fCBjaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIHN1bSArPSBjaGlsZC5vZmZzZXRIZWlnaHQ7XG4gICAgICBoZWlnaHRzLnB1c2goc3VtKTtcbiAgICAgIGNoaWxkLiRpb25JbmRleCA9IGk7XG4gICAgfVxuICAgIGNvbnN0IGJveCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHRoaXMuY29udGFpbmVyVG9wID0gYm94LnRvcDtcbiAgICB0aGlzLmNvbnRhaW5lckJvdHRvbSA9IGJveC5ib3R0b207XG4gICAgaWYgKHRoaXMuc2Nyb2xsRWwpIHtcbiAgICAgIGNvbnN0IHNjcm9sbEJveCA9IHRoaXMuc2Nyb2xsRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB0aGlzLnNjcm9sbEVsSW5pdGlhbCA9IHRoaXMuc2Nyb2xsRWwuc2Nyb2xsVG9wO1xuICAgICAgdGhpcy5zY3JvbGxFbFRvcCA9IHNjcm9sbEJveC50b3AgKyBBVVRPX1NDUk9MTF9NQVJHSU47XG4gICAgICB0aGlzLnNjcm9sbEVsQm90dG9tID0gc2Nyb2xsQm94LmJvdHRvbSAtIEFVVE9fU0NST0xMX01BUkdJTjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zY3JvbGxFbEluaXRpYWwgPSAwO1xuICAgICAgdGhpcy5zY3JvbGxFbFRvcCA9IDA7XG4gICAgICB0aGlzLnNjcm9sbEVsQm90dG9tID0gMDtcbiAgICB9XG4gICAgdGhpcy5sYXN0VG9JbmRleCA9IGluZGV4Rm9ySXRlbShpdGVtKTtcbiAgICB0aGlzLnNlbGVjdGVkSXRlbUhlaWdodCA9IGl0ZW0ub2Zmc2V0SGVpZ2h0O1xuICAgIHRoaXMuc3RhdGUgPSAxIC8qIFJlb3JkZXJHcm91cFN0YXRlLkFjdGl2ZSAqLztcbiAgICBpdGVtLmNsYXNzTGlzdC5hZGQoSVRFTV9SRU9SREVSX1NFTEVDVEVEKTtcbiAgICBoYXB0aWNTZWxlY3Rpb25TdGFydCgpO1xuICAgIHRoaXMuaW9uUmVvcmRlclN0YXJ0LmVtaXQoKTtcbiAgfVxuICBvbk1vdmUoZXYpIHtcbiAgICBjb25zdCBzZWxlY3RlZEl0ZW0gPSB0aGlzLnNlbGVjdGVkSXRlbUVsO1xuICAgIGlmICghc2VsZWN0ZWRJdGVtKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFNjcm9sbCBpZiB3ZSByZWFjaCB0aGUgc2Nyb2xsIG1hcmdpbnNcbiAgICBjb25zdCBzY3JvbGwgPSB0aGlzLmF1dG9zY3JvbGwoZXYuY3VycmVudFkpO1xuICAgIC8vIC8vIEdldCBjb29yZGluYXRlXG4gICAgY29uc3QgdG9wID0gdGhpcy5jb250YWluZXJUb3AgLSBzY3JvbGw7XG4gICAgY29uc3QgYm90dG9tID0gdGhpcy5jb250YWluZXJCb3R0b20gLSBzY3JvbGw7XG4gICAgY29uc3QgY3VycmVudFkgPSBNYXRoLm1heCh0b3AsIE1hdGgubWluKGV2LmN1cnJlbnRZLCBib3R0b20pKTtcbiAgICBjb25zdCBkZWx0YVkgPSBzY3JvbGwgKyBjdXJyZW50WSAtIGV2LnN0YXJ0WTtcbiAgICBjb25zdCBub3JtYWxpemVkWSA9IGN1cnJlbnRZIC0gdG9wO1xuICAgIGNvbnN0IGZyb21JbmRleCA9IHRoaXMubGFzdFRvSW5kZXg7XG4gICAgY29uc3QgdG9JbmRleCA9IHRoaXMuaXRlbUluZGV4Rm9yVG9wKG5vcm1hbGl6ZWRZKTtcbiAgICBpZiAodG9JbmRleCAhPT0gdGhpcy5sYXN0VG9JbmRleCkge1xuICAgICAgY29uc3QgZnJvbUluZGV4ID0gaW5kZXhGb3JJdGVtKHNlbGVjdGVkSXRlbSk7XG4gICAgICB0aGlzLmxhc3RUb0luZGV4ID0gdG9JbmRleDtcbiAgICAgIGhhcHRpY1NlbGVjdGlvbkNoYW5nZWQoKTtcbiAgICAgIHRoaXMucmVvcmRlck1vdmUoZnJvbUluZGV4LCB0b0luZGV4KTtcbiAgICB9XG4gICAgLy8gVXBkYXRlIHNlbGVjdGVkIGl0ZW0gcG9zaXRpb25cbiAgICBzZWxlY3RlZEl0ZW0uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHtkZWx0YVl9cHgpYDtcbiAgICB0aGlzLmlvblJlb3JkZXJNb3ZlLmVtaXQoe1xuICAgICAgZnJvbTogZnJvbUluZGV4LFxuICAgICAgdG86IHRvSW5kZXhcbiAgICB9KTtcbiAgfVxuICBvbkVuZCgpIHtcbiAgICBjb25zdCBzZWxlY3RlZEl0ZW1FbCA9IHRoaXMuc2VsZWN0ZWRJdGVtRWw7XG4gICAgdGhpcy5zdGF0ZSA9IDIgLyogUmVvcmRlckdyb3VwU3RhdGUuQ29tcGxldGUgKi87XG4gICAgaWYgKCFzZWxlY3RlZEl0ZW1FbCkge1xuICAgICAgdGhpcy5zdGF0ZSA9IDAgLyogUmVvcmRlckdyb3VwU3RhdGUuSWRsZSAqLztcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdG9JbmRleCA9IHRoaXMubGFzdFRvSW5kZXg7XG4gICAgY29uc3QgZnJvbUluZGV4ID0gaW5kZXhGb3JJdGVtKHNlbGVjdGVkSXRlbUVsKTtcbiAgICBpZiAodG9JbmRleCA9PT0gZnJvbUluZGV4KSB7XG4gICAgICB0aGlzLmNvbXBsZXRlUmVvcmRlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUT0RPKEZXLTY1OTApOiBSZW1vdmUgdGhpcyBvbmNlIHRoZSBkZXByZWNhdGVkIGV2ZW50IGlzIHJlbW92ZWRcbiAgICAgIHRoaXMuaW9uSXRlbVJlb3JkZXIuZW1pdCh7XG4gICAgICAgIGZyb206IGZyb21JbmRleCxcbiAgICAgICAgdG86IHRvSW5kZXgsXG4gICAgICAgIGNvbXBsZXRlOiB0aGlzLmNvbXBsZXRlUmVvcmRlci5iaW5kKHRoaXMpXG4gICAgICB9KTtcbiAgICB9XG4gICAgaGFwdGljU2VsZWN0aW9uRW5kKCk7XG4gICAgdGhpcy5pb25SZW9yZGVyRW5kLmVtaXQoe1xuICAgICAgZnJvbTogZnJvbUluZGV4LFxuICAgICAgdG86IHRvSW5kZXgsXG4gICAgICBjb21wbGV0ZTogdGhpcy5jb21wbGV0ZVJlb3JkZXIuYmluZCh0aGlzKVxuICAgIH0pO1xuICB9XG4gIGNvbXBsZXRlUmVvcmRlcihsaXN0T3JSZW9yZGVyKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRJdGVtRWwgPSB0aGlzLnNlbGVjdGVkSXRlbUVsO1xuICAgIGlmIChzZWxlY3RlZEl0ZW1FbCAmJiB0aGlzLnN0YXRlID09PSAyIC8qIFJlb3JkZXJHcm91cFN0YXRlLkNvbXBsZXRlICovKSB7XG4gICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuZWwuX19jaGlsZHJlbiB8fCB0aGlzLmVsLmNoaWxkcmVuO1xuICAgICAgY29uc3QgbGVuID0gY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgY29uc3QgdG9JbmRleCA9IHRoaXMubGFzdFRvSW5kZXg7XG4gICAgICBjb25zdCBmcm9tSW5kZXggPSBpbmRleEZvckl0ZW0oc2VsZWN0ZWRJdGVtRWwpO1xuICAgICAgLyoqXG4gICAgICAgKiBpbnNlcnRCZWZvcmUgYW5kIHNldHRpbmcgdGhlIHRyYW5zZm9ybVxuICAgICAgICogbmVlZHMgdG8gaGFwcGVuIGluIHRoZSBzYW1lIGZyYW1lIG90aGVyd2lzZVxuICAgICAgICogdGhlcmUgd2lsbCBiZSBhIGR1cGxpY2F0ZSB0cmFuc2l0aW9uLiBUaGlzIHByaW1hcmlseVxuICAgICAgICogaW1wYWN0cyBGaXJlZm94IHdoZXJlIGluc2VydEJlZm9yZSBhbmQgdHJhbnNmb3JtIG9wZXJhdGlvbnNcbiAgICAgICAqIGFyZSBoYXBwZW5pbmcgaW4gdHdvIHNlcGFyYXRlIGZyYW1lcy5cbiAgICAgICAqL1xuICAgICAgcmFmKCgpID0+IHtcbiAgICAgICAgaWYgKHRvSW5kZXggIT09IGZyb21JbmRleCAmJiAobGlzdE9yUmVvcmRlciA9PT0gdW5kZWZpbmVkIHx8IGxpc3RPclJlb3JkZXIgPT09IHRydWUpKSB7XG4gICAgICAgICAgY29uc3QgcmVmID0gZnJvbUluZGV4IDwgdG9JbmRleCA/IGNoaWxkcmVuW3RvSW5kZXggKyAxXSA6IGNoaWxkcmVuW3RvSW5kZXhdO1xuICAgICAgICAgIHRoaXMuZWwuaW5zZXJ0QmVmb3JlKHNlbGVjdGVkSXRlbUVsLCByZWYpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICBjaGlsZHJlbltpXS5zdHlsZVsndHJhbnNmb3JtJ10gPSAnJztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShsaXN0T3JSZW9yZGVyKSkge1xuICAgICAgICBsaXN0T3JSZW9yZGVyID0gcmVvcmRlckFycmF5KGxpc3RPclJlb3JkZXIsIGZyb21JbmRleCwgdG9JbmRleCk7XG4gICAgICB9XG4gICAgICBzZWxlY3RlZEl0ZW1FbC5zdHlsZS50cmFuc2l0aW9uID0gJyc7XG4gICAgICBzZWxlY3RlZEl0ZW1FbC5jbGFzc0xpc3QucmVtb3ZlKElURU1fUkVPUkRFUl9TRUxFQ1RFRCk7XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbUVsID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5zdGF0ZSA9IDAgLyogUmVvcmRlckdyb3VwU3RhdGUuSWRsZSAqLztcbiAgICB9XG4gICAgcmV0dXJuIGxpc3RPclJlb3JkZXI7XG4gIH1cbiAgaXRlbUluZGV4Rm9yVG9wKGRlbHRhWSkge1xuICAgIGNvbnN0IGhlaWdodHMgPSB0aGlzLmNhY2hlZEhlaWdodHM7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoZWlnaHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaGVpZ2h0c1tpXSA+IGRlbHRhWSkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGhlaWdodHMubGVuZ3RoIC0gMTtcbiAgfVxuICAvKioqKioqKioqIERPTSBXUklURSAqKioqKioqKiogKi9cbiAgcmVvcmRlck1vdmUoZnJvbUluZGV4LCB0b0luZGV4KSB7XG4gICAgY29uc3QgaXRlbUhlaWdodCA9IHRoaXMuc2VsZWN0ZWRJdGVtSGVpZ2h0O1xuICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5lbC5fX2NoaWxkcmVuIHx8IHRoaXMuZWwuY2hpbGRyZW47XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgc3R5bGUgPSBjaGlsZHJlbltpXS5zdHlsZTtcbiAgICAgIGxldCB2YWx1ZSA9ICcnO1xuICAgICAgaWYgKGkgPiBmcm9tSW5kZXggJiYgaSA8PSB0b0luZGV4KSB7XG4gICAgICAgIHZhbHVlID0gYHRyYW5zbGF0ZVkoJHstaXRlbUhlaWdodH1weClgO1xuICAgICAgfSBlbHNlIGlmIChpIDwgZnJvbUluZGV4ICYmIGkgPj0gdG9JbmRleCkge1xuICAgICAgICB2YWx1ZSA9IGB0cmFuc2xhdGVZKCR7aXRlbUhlaWdodH1weClgO1xuICAgICAgfVxuICAgICAgc3R5bGVbJ3RyYW5zZm9ybSddID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIGF1dG9zY3JvbGwocG9zWSkge1xuICAgIGlmICghdGhpcy5zY3JvbGxFbCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGxldCBhbW91bnQgPSAwO1xuICAgIGlmIChwb3NZIDwgdGhpcy5zY3JvbGxFbFRvcCkge1xuICAgICAgYW1vdW50ID0gLTEwO1xuICAgIH0gZWxzZSBpZiAocG9zWSA+IHRoaXMuc2Nyb2xsRWxCb3R0b20pIHtcbiAgICAgIGFtb3VudCA9IFNDUk9MTF9KVU1QO1xuICAgIH1cbiAgICBpZiAoYW1vdW50ICE9PSAwKSB7XG4gICAgICB0aGlzLnNjcm9sbEVsLnNjcm9sbEJ5KDAsIGFtb3VudCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnNjcm9sbEVsLnNjcm9sbFRvcCAtIHRoaXMuc2Nyb2xsRWxJbml0aWFsO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICByZXR1cm4gaChIb3N0LCB7XG4gICAgICBrZXk6ICdiOTY0MWYzMDYxZDY3ZmJmZTY4MzE3YjkwMWVjMzMyNjcwNDZlMDczJyxcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgIFttb2RlXTogdHJ1ZSxcbiAgICAgICAgJ3Jlb3JkZXItZW5hYmxlZCc6ICF0aGlzLmRpc2FibGVkLFxuICAgICAgICAncmVvcmRlci1saXN0LWFjdGl2ZSc6IHRoaXMuc3RhdGUgIT09IDAgLyogUmVvcmRlckdyb3VwU3RhdGUuSWRsZSAqL1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGdldCBlbCgpIHtcbiAgICByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBcImRpc2FibGVkXCI6IFtcImRpc2FibGVkQ2hhbmdlZFwiXVxuICAgIH07XG4gIH1cbn07XG5jb25zdCBpbmRleEZvckl0ZW0gPSBlbGVtZW50ID0+IHtcbiAgcmV0dXJuIGVsZW1lbnRbJyRpb25JbmRleCddO1xufTtcbmNvbnN0IGZpbmRSZW9yZGVySXRlbSA9IChub2RlLCBjb250YWluZXIpID0+IHtcbiAgbGV0IHBhcmVudDtcbiAgd2hpbGUgKG5vZGUpIHtcbiAgICBwYXJlbnQgPSBub2RlLnBhcmVudEVsZW1lbnQ7XG4gICAgaWYgKHBhcmVudCA9PT0gY29udGFpbmVyKSB7XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gICAgbm9kZSA9IHBhcmVudDtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufTtcbmNvbnN0IEFVVE9fU0NST0xMX01BUkdJTiA9IDYwO1xuY29uc3QgU0NST0xMX0pVTVAgPSAxMDtcbmNvbnN0IElURU1fUkVPUkRFUl9TRUxFQ1RFRCA9ICdyZW9yZGVyLXNlbGVjdGVkJztcbmNvbnN0IHJlb3JkZXJBcnJheSA9IChhcnJheSwgZnJvbSwgdG8pID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGFycmF5W2Zyb21dO1xuICBhcnJheS5zcGxpY2UoZnJvbSwgMSk7XG4gIGFycmF5LnNwbGljZSh0bywgMCwgZWxlbWVudCk7XG4gIHJldHVybiBhcnJheS5zbGljZSgpO1xufTtcblJlb3JkZXJHcm91cC5zdHlsZSA9IHJlb3JkZXJHcm91cENzcztcbmV4cG9ydCB7IFJlb3JkZXIgYXMgaW9u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
