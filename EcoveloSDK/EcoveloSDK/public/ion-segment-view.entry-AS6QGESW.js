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

// node_modules/@ionic/core/dist/esm/ion-segment-view.entry.js
var segmentViewIosCss = ":host{display:-ms-flexbox;display:flex;height:100%;overflow-x:scroll;-webkit-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;scrollbar-width:none;-ms-overflow-style:none}:host::-webkit-scrollbar{display:none}:host(.segment-view-disabled){-ms-touch-action:none;touch-action:none;overflow-x:hidden}:host(.segment-view-scroll-disabled){pointer-events:none}:host(.segment-view-disabled){opacity:0.3}";
var segmentViewMdCss = ":host{display:-ms-flexbox;display:flex;height:100%;overflow-x:scroll;-webkit-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;scrollbar-width:none;-ms-overflow-style:none}:host::-webkit-scrollbar{display:none}:host(.segment-view-disabled){-ms-touch-action:none;touch-action:none;overflow-x:hidden}:host(.segment-view-scroll-disabled){pointer-events:none}:host(.segment-view-disabled){opacity:0.3}";
var SegmentView = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionSegmentViewScroll = createEvent(this, "ionSegmentViewScroll", 7);
    this.scrollEndTimeout = null;
    this.isTouching = false;
    this.disabled = false;
  }
  handleScroll(ev) {
    var _a;
    const {
      scrollLeft,
      scrollWidth,
      clientWidth
    } = ev.target;
    const scrollRatio = scrollLeft / (scrollWidth - clientWidth);
    this.ionSegmentViewScroll.emit({
      scrollRatio,
      isManualScroll: (_a = this.isManualScroll) !== null && _a !== void 0 ? _a : true
    });
    this.resetScrollEndTimeout();
  }
  /**
   * Handle touch start event to know when the user is actively dragging the segment view.
   */
  handleScrollStart() {
    if (this.scrollEndTimeout) {
      clearTimeout(this.scrollEndTimeout);
      this.scrollEndTimeout = null;
    }
    this.isTouching = true;
  }
  /**
   * Handle touch end event to know when the user is no longer dragging the segment view.
   */
  handleTouchEnd() {
    this.isTouching = false;
  }
  /**
   * Reset the scroll end detection timer. This is called on every scroll event.
   */
  resetScrollEndTimeout() {
    if (this.scrollEndTimeout) {
      clearTimeout(this.scrollEndTimeout);
      this.scrollEndTimeout = null;
    }
    this.scrollEndTimeout = setTimeout(
      () => {
        this.checkForScrollEnd();
      },
      // Setting this to a lower value may result in inconsistencies in behavior
      // across browsers (particularly Firefox).
      // Ideally, all of this logic is removed once the scroll end event is
      // supported on all browsers (https://caniuse.com/?search=scrollend)
      100
    );
  }
  /**
   * Check if the scroll has ended and the user is not actively touching.
   * If the conditions are met (active content is enabled and no active touch),
   * reset the scroll position and emit the scroll end event.
   */
  checkForScrollEnd() {
    if (!this.isTouching) {
      this.isManualScroll = void 0;
    }
  }
  /**
   * @internal
   *
   * This method is used to programmatically set the displayed segment content
   * in the segment view. Calling this method will update the `value` of the
   * corresponding segment button.
   *
   * @param id: The id of the segment content to display.
   * @param smoothScroll: Whether to animate the scroll transition.
   */
  setContent(id, smoothScroll = true) {
    return __async(this, null, function* () {
      const contents = this.getSegmentContents();
      const index = contents.findIndex((content) => content.id === id);
      if (index === -1) return;
      this.isManualScroll = false;
      this.resetScrollEndTimeout();
      const contentWidth = this.el.offsetWidth;
      this.el.scrollTo({
        top: 0,
        left: index * contentWidth,
        behavior: smoothScroll ? "smooth" : "instant"
      });
    });
  }
  getSegmentContents() {
    return Array.from(this.el.querySelectorAll("ion-segment-content"));
  }
  render() {
    const {
      disabled,
      isManualScroll
    } = this;
    return h(Host, {
      key: "754a374e89fd4dd682eb00497e717242a6f83357",
      class: {
        "segment-view-disabled": disabled,
        "segment-view-scroll-disabled": isManualScroll === false
      }
    }, h("slot", {
      key: "77366044eb61f0d4bba305bd6f0ef8fd1e25194b"
    }));
  }
  get el() {
    return getElement(this);
  }
};
SegmentView.style = {
  ios: segmentViewIosCss,
  md: segmentViewMdCss
};
export {
  SegmentView as ion_segment_view
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-segment-view.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tc2VnbWVudC12aWV3LmVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgY3JlYXRlRXZlbnQsIGgsIGQgYXMgSG9zdCwgZyBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9pbmRleC00RHhZNl9nRy5qcyc7XG5jb25zdCBzZWdtZW50Vmlld0lvc0NzcyA9IFwiOmhvc3R7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7aGVpZ2h0OjEwMCU7b3ZlcmZsb3cteDpzY3JvbGw7LXdlYmtpdC1zY3JvbGwtc25hcC10eXBlOnggbWFuZGF0b3J5Oy1tcy1zY3JvbGwtc25hcC10eXBlOnggbWFuZGF0b3J5O3Njcm9sbC1zbmFwLXR5cGU6eCBtYW5kYXRvcnk7c2Nyb2xsYmFyLXdpZHRoOm5vbmU7LW1zLW92ZXJmbG93LXN0eWxlOm5vbmV9Omhvc3Q6Oi13ZWJraXQtc2Nyb2xsYmFye2Rpc3BsYXk6bm9uZX06aG9zdCguc2VnbWVudC12aWV3LWRpc2FibGVkKXstbXMtdG91Y2gtYWN0aW9uOm5vbmU7dG91Y2gtYWN0aW9uOm5vbmU7b3ZlcmZsb3cteDpoaWRkZW59Omhvc3QoLnNlZ21lbnQtdmlldy1zY3JvbGwtZGlzYWJsZWQpe3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3QoLnNlZ21lbnQtdmlldy1kaXNhYmxlZCl7b3BhY2l0eTowLjN9XCI7XG5jb25zdCBzZWdtZW50Vmlld01kQ3NzID0gXCI6aG9zdHtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtoZWlnaHQ6MTAwJTtvdmVyZmxvdy14OnNjcm9sbDstd2Via2l0LXNjcm9sbC1zbmFwLXR5cGU6eCBtYW5kYXRvcnk7LW1zLXNjcm9sbC1zbmFwLXR5cGU6eCBtYW5kYXRvcnk7c2Nyb2xsLXNuYXAtdHlwZTp4IG1hbmRhdG9yeTtzY3JvbGxiYXItd2lkdGg6bm9uZTstbXMtb3ZlcmZsb3ctc3R5bGU6bm9uZX06aG9zdDo6LXdlYmtpdC1zY3JvbGxiYXJ7ZGlzcGxheTpub25lfTpob3N0KC5zZWdtZW50LXZpZXctZGlzYWJsZWQpey1tcy10b3VjaC1hY3Rpb246bm9uZTt0b3VjaC1hY3Rpb246bm9uZTtvdmVyZmxvdy14OmhpZGRlbn06aG9zdCguc2VnbWVudC12aWV3LXNjcm9sbC1kaXNhYmxlZCl7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdCguc2VnbWVudC12aWV3LWRpc2FibGVkKXtvcGFjaXR5OjAuM31cIjtcbmNvbnN0IFNlZ21lbnRWaWV3ID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmlvblNlZ21lbnRWaWV3U2Nyb2xsID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25TZWdtZW50Vmlld1Njcm9sbFwiLCA3KTtcbiAgICB0aGlzLnNjcm9sbEVuZFRpbWVvdXQgPSBudWxsO1xuICAgIHRoaXMuaXNUb3VjaGluZyA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIElmIGB0cnVlYCwgdGhlIHNlZ21lbnQgdmlldyBjYW5ub3QgYmUgaW50ZXJhY3RlZCB3aXRoLlxuICAgICAqL1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgfVxuICBoYW5kbGVTY3JvbGwoZXYpIHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3Qge1xuICAgICAgc2Nyb2xsTGVmdCxcbiAgICAgIHNjcm9sbFdpZHRoLFxuICAgICAgY2xpZW50V2lkdGhcbiAgICB9ID0gZXYudGFyZ2V0O1xuICAgIGNvbnN0IHNjcm9sbFJhdGlvID0gc2Nyb2xsTGVmdCAvIChzY3JvbGxXaWR0aCAtIGNsaWVudFdpZHRoKTtcbiAgICB0aGlzLmlvblNlZ21lbnRWaWV3U2Nyb2xsLmVtaXQoe1xuICAgICAgc2Nyb2xsUmF0aW8sXG4gICAgICBpc01hbnVhbFNjcm9sbDogKF9hID0gdGhpcy5pc01hbnVhbFNjcm9sbCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogdHJ1ZVxuICAgIH0pO1xuICAgIC8vIFJlc2V0IHRoZSB0aW1lb3V0IHRvIGNoZWNrIGZvciBzY3JvbGwgZW5kXG4gICAgdGhpcy5yZXNldFNjcm9sbEVuZFRpbWVvdXQoKTtcbiAgfVxuICAvKipcbiAgICogSGFuZGxlIHRvdWNoIHN0YXJ0IGV2ZW50IHRvIGtub3cgd2hlbiB0aGUgdXNlciBpcyBhY3RpdmVseSBkcmFnZ2luZyB0aGUgc2VnbWVudCB2aWV3LlxuICAgKi9cbiAgaGFuZGxlU2Nyb2xsU3RhcnQoKSB7XG4gICAgaWYgKHRoaXMuc2Nyb2xsRW5kVGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuc2Nyb2xsRW5kVGltZW91dCk7XG4gICAgICB0aGlzLnNjcm9sbEVuZFRpbWVvdXQgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLmlzVG91Y2hpbmcgPSB0cnVlO1xuICB9XG4gIC8qKlxuICAgKiBIYW5kbGUgdG91Y2ggZW5kIGV2ZW50IHRvIGtub3cgd2hlbiB0aGUgdXNlciBpcyBubyBsb25nZXIgZHJhZ2dpbmcgdGhlIHNlZ21lbnQgdmlldy5cbiAgICovXG4gIGhhbmRsZVRvdWNoRW5kKCkge1xuICAgIHRoaXMuaXNUb3VjaGluZyA9IGZhbHNlO1xuICB9XG4gIC8qKlxuICAgKiBSZXNldCB0aGUgc2Nyb2xsIGVuZCBkZXRlY3Rpb24gdGltZXIuIFRoaXMgaXMgY2FsbGVkIG9uIGV2ZXJ5IHNjcm9sbCBldmVudC5cbiAgICovXG4gIHJlc2V0U2Nyb2xsRW5kVGltZW91dCgpIHtcbiAgICBpZiAodGhpcy5zY3JvbGxFbmRUaW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5zY3JvbGxFbmRUaW1lb3V0KTtcbiAgICAgIHRoaXMuc2Nyb2xsRW5kVGltZW91dCA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMuc2Nyb2xsRW5kVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5jaGVja0ZvclNjcm9sbEVuZCgpO1xuICAgIH0sXG4gICAgLy8gU2V0dGluZyB0aGlzIHRvIGEgbG93ZXIgdmFsdWUgbWF5IHJlc3VsdCBpbiBpbmNvbnNpc3RlbmNpZXMgaW4gYmVoYXZpb3JcbiAgICAvLyBhY3Jvc3MgYnJvd3NlcnMgKHBhcnRpY3VsYXJseSBGaXJlZm94KS5cbiAgICAvLyBJZGVhbGx5LCBhbGwgb2YgdGhpcyBsb2dpYyBpcyByZW1vdmVkIG9uY2UgdGhlIHNjcm9sbCBlbmQgZXZlbnQgaXNcbiAgICAvLyBzdXBwb3J0ZWQgb24gYWxsIGJyb3dzZXJzIChodHRwczovL2Nhbml1c2UuY29tLz9zZWFyY2g9c2Nyb2xsZW5kKVxuICAgIDEwMCk7XG4gIH1cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBzY3JvbGwgaGFzIGVuZGVkIGFuZCB0aGUgdXNlciBpcyBub3QgYWN0aXZlbHkgdG91Y2hpbmcuXG4gICAqIElmIHRoZSBjb25kaXRpb25zIGFyZSBtZXQgKGFjdGl2ZSBjb250ZW50IGlzIGVuYWJsZWQgYW5kIG5vIGFjdGl2ZSB0b3VjaCksXG4gICAqIHJlc2V0IHRoZSBzY3JvbGwgcG9zaXRpb24gYW5kIGVtaXQgdGhlIHNjcm9sbCBlbmQgZXZlbnQuXG4gICAqL1xuICBjaGVja0ZvclNjcm9sbEVuZCgpIHtcbiAgICAvLyBPbmx5IGVtaXQgc2Nyb2xsIGVuZCBldmVudCBpZiB0aGUgYWN0aXZlIGNvbnRlbnQgaXMgbm90IGRpc2FibGVkIGFuZFxuICAgIC8vIHRoZSB1c2VyIGlzIG5vdCB0b3VjaGluZyB0aGUgc2VnbWVudCB2aWV3XG4gICAgaWYgKCF0aGlzLmlzVG91Y2hpbmcpIHtcbiAgICAgIHRoaXMuaXNNYW51YWxTY3JvbGwgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICpcbiAgICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBwcm9ncmFtbWF0aWNhbGx5IHNldCB0aGUgZGlzcGxheWVkIHNlZ21lbnQgY29udGVudFxuICAgKiBpbiB0aGUgc2VnbWVudCB2aWV3LiBDYWxsaW5nIHRoaXMgbWV0aG9kIHdpbGwgdXBkYXRlIHRoZSBgdmFsdWVgIG9mIHRoZVxuICAgKiBjb3JyZXNwb25kaW5nIHNlZ21lbnQgYnV0dG9uLlxuICAgKlxuICAgKiBAcGFyYW0gaWQ6IFRoZSBpZCBvZiB0aGUgc2VnbWVudCBjb250ZW50IHRvIGRpc3BsYXkuXG4gICAqIEBwYXJhbSBzbW9vdGhTY3JvbGw6IFdoZXRoZXIgdG8gYW5pbWF0ZSB0aGUgc2Nyb2xsIHRyYW5zaXRpb24uXG4gICAqL1xuICBhc3luYyBzZXRDb250ZW50KGlkLCBzbW9vdGhTY3JvbGwgPSB0cnVlKSB7XG4gICAgY29uc3QgY29udGVudHMgPSB0aGlzLmdldFNlZ21lbnRDb250ZW50cygpO1xuICAgIGNvbnN0IGluZGV4ID0gY29udGVudHMuZmluZEluZGV4KGNvbnRlbnQgPT4gY29udGVudC5pZCA9PT0gaWQpO1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHJldHVybjtcbiAgICB0aGlzLmlzTWFudWFsU2Nyb2xsID0gZmFsc2U7XG4gICAgdGhpcy5yZXNldFNjcm9sbEVuZFRpbWVvdXQoKTtcbiAgICBjb25zdCBjb250ZW50V2lkdGggPSB0aGlzLmVsLm9mZnNldFdpZHRoO1xuICAgIHRoaXMuZWwuc2Nyb2xsVG8oe1xuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogaW5kZXggKiBjb250ZW50V2lkdGgsXG4gICAgICBiZWhhdmlvcjogc21vb3RoU2Nyb2xsID8gJ3Ntb290aCcgOiAnaW5zdGFudCdcbiAgICB9KTtcbiAgfVxuICBnZXRTZWdtZW50Q29udGVudHMoKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKCdpb24tc2VnbWVudC1jb250ZW50JykpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGlzTWFudWFsU2Nyb2xsXG4gICAgfSA9IHRoaXM7XG4gICAgcmV0dXJuIGgoSG9zdCwge1xuICAgICAga2V5OiAnNzU0YTM3NGU4OWZkNGRkNjgyZWIwMDQ5N2U3MTcyNDJhNmY4MzM1NycsXG4gICAgICBjbGFzczoge1xuICAgICAgICAnc2VnbWVudC12aWV3LWRpc2FibGVkJzogZGlzYWJsZWQsXG4gICAgICAgICdzZWdtZW50LXZpZXctc2Nyb2xsLWRpc2FibGVkJzogaXNNYW51YWxTY3JvbGwgPT09IGZhbHNlXG4gICAgICB9XG4gICAgfSwgaChcInNsb3RcIiwge1xuICAgICAga2V5OiAnNzczNjYwNDRlYjYxZjBkNGJiYTMwNWJkNmYwZWY4ZmQxZTI1MTk0YidcbiAgICB9KSk7XG4gIH1cbiAgZ2V0IGVsKCkge1xuICAgIHJldHVybiBnZXRFbGVtZW50KHRoaXMpO1xuICB9XG59O1xuU2VnbWVudFZpZXcuc3R5bGUgPSB7XG4gIGlvczogc2VnbWVudFZpZXdJb3NDc3MsXG4gIG1kOiBzZWdtZW50Vmlld01kQ3NzXG59O1xuZXhwb3J0IHsgU2VnbWVudFZpZXcgYXMgaW9uX3NlZ21lbnRfdmlldyB9OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBSUEsSUFBTSxvQkFBb0I7QUFDMUIsSUFBTSxtQkFBbUI7QUFDekIsSUFBTSxjQUFjLE1BQU07QUFBQSxFQUN4QixZQUFZLFNBQVM7QUFDbkIscUJBQWlCLE1BQU0sT0FBTztBQUM5QixTQUFLLHVCQUF1QixZQUFZLE1BQU0sd0JBQXdCLENBQUM7QUFDdkUsU0FBSyxtQkFBbUI7QUFDeEIsU0FBSyxhQUFhO0FBSWxCLFNBQUssV0FBVztBQUFBLEVBQ2xCO0FBQUEsRUFDQSxhQUFhLElBQUk7QUFDZixRQUFJO0FBQ0osVUFBTTtBQUFBLE1BQ0o7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0YsSUFBSSxHQUFHO0FBQ1AsVUFBTSxjQUFjLGNBQWMsY0FBYztBQUNoRCxTQUFLLHFCQUFxQixLQUFLO0FBQUEsTUFDN0I7QUFBQSxNQUNBLGlCQUFpQixLQUFLLEtBQUssb0JBQW9CLFFBQVEsT0FBTyxTQUFTLEtBQUs7QUFBQSxJQUM5RSxDQUFDO0FBRUQsU0FBSyxzQkFBc0I7QUFBQSxFQUM3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBSUEsb0JBQW9CO0FBQ2xCLFFBQUksS0FBSyxrQkFBa0I7QUFDekIsbUJBQWEsS0FBSyxnQkFBZ0I7QUFDbEMsV0FBSyxtQkFBbUI7QUFBQSxJQUMxQjtBQUNBLFNBQUssYUFBYTtBQUFBLEVBQ3BCO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFJQSxpQkFBaUI7QUFDZixTQUFLLGFBQWE7QUFBQSxFQUNwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBSUEsd0JBQXdCO0FBQ3RCLFFBQUksS0FBSyxrQkFBa0I7QUFDekIsbUJBQWEsS0FBSyxnQkFBZ0I7QUFDbEMsV0FBSyxtQkFBbUI7QUFBQSxJQUMxQjtBQUNBLFNBQUssbUJBQW1CO0FBQUEsTUFBVyxNQUFNO0FBQ3ZDLGFBQUssa0JBQWtCO0FBQUEsTUFDekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BS0E7QUFBQSxJQUFHO0FBQUEsRUFDTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1BLG9CQUFvQjtBQUdsQixRQUFJLENBQUMsS0FBSyxZQUFZO0FBQ3BCLFdBQUssaUJBQWlCO0FBQUEsSUFDeEI7QUFBQSxFQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVdNLFdBQVcsSUFBSSxlQUFlLE1BQU07QUFBQTtBQUN4QyxZQUFNLFdBQVcsS0FBSyxtQkFBbUI7QUFDekMsWUFBTSxRQUFRLFNBQVMsVUFBVSxhQUFXLFFBQVEsT0FBTyxFQUFFO0FBQzdELFVBQUksVUFBVSxHQUFJO0FBQ2xCLFdBQUssaUJBQWlCO0FBQ3RCLFdBQUssc0JBQXNCO0FBQzNCLFlBQU0sZUFBZSxLQUFLLEdBQUc7QUFDN0IsV0FBSyxHQUFHLFNBQVM7QUFBQSxRQUNmLEtBQUs7QUFBQSxRQUNMLE1BQU0sUUFBUTtBQUFBLFFBQ2QsVUFBVSxlQUFlLFdBQVc7QUFBQSxNQUN0QyxDQUFDO0FBQUEsSUFDSDtBQUFBO0FBQUEsRUFDQSxxQkFBcUI7QUFDbkIsV0FBTyxNQUFNLEtBQUssS0FBSyxHQUFHLGlCQUFpQixxQkFBcUIsQ0FBQztBQUFBLEVBQ25FO0FBQUEsRUFDQSxTQUFTO0FBQ1AsVUFBTTtBQUFBLE1BQ0o7QUFBQSxNQUNBO0FBQUEsSUFDRixJQUFJO0FBQ0osV0FBTyxFQUFFLE1BQU07QUFBQSxNQUNiLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxRQUNMLHlCQUF5QjtBQUFBLFFBQ3pCLGdDQUFnQyxtQkFBbUI7QUFBQSxNQUNyRDtBQUFBLElBQ0YsR0FBRyxFQUFFLFFBQVE7QUFBQSxNQUNYLEtBQUs7QUFBQSxJQUNQLENBQUMsQ0FBQztBQUFBLEVBQ0o7QUFBQSxFQUNBLElBQUksS0FBSztBQUNQLFdBQU8sV0FBVyxJQUFJO0FBQUEsRUFDeEI7QUFDRjtBQUNBLFlBQVksUUFBUTtBQUFBLEVBQ2xCLEtBQUs7QUFBQSxFQUNMLElBQUk7QUFDTjsiLCJuYW1lcyI6W10sInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswXX0=
