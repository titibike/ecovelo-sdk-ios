import {
  getIonMode
} from "./chunk-TXLH22R2.js";
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

// node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js
var splitPaneIosCss = ":host{--side-width:100%;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}:host(.split-pane-visible) ::slotted(.split-pane-main){left:0;right:0;top:0;bottom:0;position:relative;-ms-flex:1;flex:1;-webkit-box-shadow:none;box-shadow:none;overflow:hidden;z-index:0}::slotted(.split-pane-side:not(ion-menu)){display:none}:host{--border:0.55px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, var(--ion-background-color-step-250, #c8c7cc))));--side-min-width:270px;--side-max-width:28%}";
var splitPaneMdCss = ":host{--side-width:100%;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}:host(.split-pane-visible) ::slotted(.split-pane-main){left:0;right:0;top:0;bottom:0;position:relative;-ms-flex:1;flex:1;-webkit-box-shadow:none;box-shadow:none;overflow:hidden;z-index:0}::slotted(.split-pane-side:not(ion-menu)){display:none}:host{--border:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.13)))));--side-min-width:270px;--side-max-width:28%}";
var SPLIT_PANE_MAIN = "split-pane-main";
var SPLIT_PANE_SIDE = "split-pane-side";
var QUERY = {
  xs: "(min-width: 0px)",
  sm: "(min-width: 576px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 992px)",
  xl: "(min-width: 1200px)",
  never: ""
};
var SplitPane = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionSplitPaneVisible = createEvent(this, "ionSplitPaneVisible", 7);
    this.visible = false;
    this.disabled = false;
    this.when = QUERY["lg"];
  }
  visibleChanged(visible) {
    this.ionSplitPaneVisible.emit({
      visible
    });
  }
  /**
   * @internal
   */
  isVisible() {
    return __async(this, null, function* () {
      return Promise.resolve(this.visible);
    });
  }
  connectedCallback() {
    return __async(this, null, function* () {
      if (typeof customElements !== "undefined" && customElements != null) {
        yield customElements.whenDefined("ion-split-pane");
      }
      this.styleMainElement();
      this.updateState();
    });
  }
  disconnectedCallback() {
    if (this.rmL) {
      this.rmL();
      this.rmL = void 0;
    }
  }
  updateState() {
    if (this.rmL) {
      this.rmL();
      this.rmL = void 0;
    }
    if (this.disabled) {
      this.visible = false;
      return;
    }
    const query = this.when;
    if (typeof query === "boolean") {
      this.visible = query;
      return;
    }
    const mediaQuery = QUERY[query] || query;
    if (mediaQuery.length === 0) {
      this.visible = false;
      return;
    }
    const callback = (q) => {
      this.visible = q.matches;
    };
    const mediaList = window.matchMedia(mediaQuery);
    mediaList.addListener(callback);
    this.rmL = () => mediaList.removeListener(callback);
    this.visible = mediaList.matches;
  }
  /**
   * Attempt to find the main content
   * element inside of the split pane.
   * If found, set it as the main node.
   *
   * We assume that the main node
   * is available in the DOM on split
   * pane load.
   */
  styleMainElement() {
    const contentId = this.contentId;
    const children = this.el.children;
    const nu = this.el.childElementCount;
    let foundMain = false;
    for (let i = 0; i < nu; i++) {
      const child = children[i];
      const isMain = contentId !== void 0 && child.id === contentId;
      if (isMain) {
        if (foundMain) {
          printIonWarning("[ion-split-pane] - Cannot have more than one main node.");
          return;
        } else {
          setPaneClass(child, isMain);
          foundMain = true;
        }
      }
    }
    if (!foundMain) {
      printIonWarning("[ion-split-pane] - Does not have a specified main node.");
    }
  }
  render() {
    const mode = getIonMode(this);
    return h(Host, {
      key: "d5e30df12f1f1f855da4c66f98076b9dce762c59",
      class: {
        [mode]: true,
        // Used internally for styling
        [`split-pane-${mode}`]: true,
        "split-pane-visible": this.visible
      }
    }, h("slot", {
      key: "3e30d7cf3bc1cf434e16876a0cb2a36377b8e00f"
    }));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "visible": ["visibleChanged"],
      "disabled": ["updateState"],
      "when": ["updateState"]
    };
  }
};
var setPaneClass = (el, isMain) => {
  let toAdd;
  let toRemove;
  if (isMain) {
    toAdd = SPLIT_PANE_MAIN;
    toRemove = SPLIT_PANE_SIDE;
  } else {
    toAdd = SPLIT_PANE_SIDE;
    toRemove = SPLIT_PANE_MAIN;
  }
  const classList = el.classList;
  classList.add(toAdd);
  classList.remove(toRemove);
};
SplitPane.style = {
  ios: splitPaneIosCss,
  md: splitPaneMdCss
};
export {
  SplitPane as ion_split_pane
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-split-pane.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tc3BsaXQtcGFuZS5lbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGNyZWF0ZUV2ZW50LCBmIGFzIHByaW50SW9uV2FybmluZywgaCwgZCBhcyBIb3N0LCBnIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2luZGV4LTREeFk2X2dHLmpzJztcbmltcG9ydCB7IGIgYXMgZ2V0SW9uTW9kZSB9IGZyb20gJy4vaW9uaWMtZ2xvYmFsLUNUU3l1ZmhGLmpzJztcbmNvbnN0IHNwbGl0UGFuZUlvc0NzcyA9IFwiOmhvc3R7LS1zaWRlLXdpZHRoOjEwMCU7bGVmdDowO3JpZ2h0OjA7dG9wOjA7Ym90dG9tOjA7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246YWJzb2x1dGU7LW1zLWZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LWRpcmVjdGlvbjpyb3c7LW1zLWZsZXgtd3JhcDpub3dyYXA7ZmxleC13cmFwOm5vd3JhcDtjb250YWluOnN0cmljdH06aG9zdCguc3BsaXQtcGFuZS12aXNpYmxlKSA6OnNsb3R0ZWQoLnNwbGl0LXBhbmUtbWFpbil7bGVmdDowO3JpZ2h0OjA7dG9wOjA7Ym90dG9tOjA7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXg6MTtmbGV4OjE7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lO292ZXJmbG93OmhpZGRlbjt6LWluZGV4OjB9OjpzbG90dGVkKC5zcGxpdC1wYW5lLXNpZGU6bm90KGlvbi1tZW51KSl7ZGlzcGxheTpub25lfTpob3N0ey0tYm9yZGVyOjAuNTVweCBzb2xpZCB2YXIoLS1pb24taXRlbS1ib3JkZXItY29sb3IsIHZhcigtLWlvbi1ib3JkZXItY29sb3IsIHZhcigtLWlvbi1jb2xvci1zdGVwLTI1MCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3Itc3RlcC0yNTAsICNjOGM3Y2MpKSkpOy0tc2lkZS1taW4td2lkdGg6MjcwcHg7LS1zaWRlLW1heC13aWR0aDoyOCV9XCI7XG5jb25zdCBzcGxpdFBhbmVNZENzcyA9IFwiOmhvc3R7LS1zaWRlLXdpZHRoOjEwMCU7bGVmdDowO3JpZ2h0OjA7dG9wOjA7Ym90dG9tOjA7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246YWJzb2x1dGU7LW1zLWZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LWRpcmVjdGlvbjpyb3c7LW1zLWZsZXgtd3JhcDpub3dyYXA7ZmxleC13cmFwOm5vd3JhcDtjb250YWluOnN0cmljdH06aG9zdCguc3BsaXQtcGFuZS12aXNpYmxlKSA6OnNsb3R0ZWQoLnNwbGl0LXBhbmUtbWFpbil7bGVmdDowO3JpZ2h0OjA7dG9wOjA7Ym90dG9tOjA7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXg6MTtmbGV4OjE7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lO292ZXJmbG93OmhpZGRlbjt6LWluZGV4OjB9OjpzbG90dGVkKC5zcGxpdC1wYW5lLXNpZGU6bm90KGlvbi1tZW51KSl7ZGlzcGxheTpub25lfTpob3N0ey0tYm9yZGVyOjFweCBzb2xpZCB2YXIoLS1pb24taXRlbS1ib3JkZXItY29sb3IsIHZhcigtLWlvbi1ib3JkZXItY29sb3IsIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3Itc3RlcC0xNTAsIHJnYmEoMCwgMCwgMCwgMC4xMykpKSkpOy0tc2lkZS1taW4td2lkdGg6MjcwcHg7LS1zaWRlLW1heC13aWR0aDoyOCV9XCI7XG5cbi8vIFRPRE8oRlctMjgzMik6IHR5cGVzXG5jb25zdCBTUExJVF9QQU5FX01BSU4gPSAnc3BsaXQtcGFuZS1tYWluJztcbmNvbnN0IFNQTElUX1BBTkVfU0lERSA9ICdzcGxpdC1wYW5lLXNpZGUnO1xuY29uc3QgUVVFUlkgPSB7XG4gIHhzOiAnKG1pbi13aWR0aDogMHB4KScsXG4gIHNtOiAnKG1pbi13aWR0aDogNTc2cHgpJyxcbiAgbWQ6ICcobWluLXdpZHRoOiA3NjhweCknLFxuICBsZzogJyhtaW4td2lkdGg6IDk5MnB4KScsXG4gIHhsOiAnKG1pbi13aWR0aDogMTIwMHB4KScsXG4gIG5ldmVyOiAnJ1xufTtcbmNvbnN0IFNwbGl0UGFuZSA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5pb25TcGxpdFBhbmVWaXNpYmxlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25TcGxpdFBhbmVWaXNpYmxlXCIsIDcpO1xuICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIElmIGB0cnVlYCwgdGhlIHNwbGl0IHBhbmUgd2lsbCBiZSBoaWRkZW4uXG4gICAgICovXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIFdoZW4gdGhlIHNwbGl0LXBhbmUgc2hvdWxkIGJlIHNob3duLlxuICAgICAqIENhbiBiZSBhIENTUyBtZWRpYSBxdWVyeSBleHByZXNzaW9uLCBvciBhIHNob3J0Y3V0IGV4cHJlc3Npb24uXG4gICAgICogQ2FuIGFsc28gYmUgYSBib29sZWFuIGV4cHJlc3Npb24uXG4gICAgICovXG4gICAgdGhpcy53aGVuID0gUVVFUllbJ2xnJ107XG4gIH1cbiAgdmlzaWJsZUNoYW5nZWQodmlzaWJsZSkge1xuICAgIHRoaXMuaW9uU3BsaXRQYW5lVmlzaWJsZS5lbWl0KHtcbiAgICAgIHZpc2libGVcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBhc3luYyBpc1Zpc2libGUoKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnZpc2libGUpO1xuICB9XG4gIGFzeW5jIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIC8vIFRPRE86IGNvbm5lY3RlZENhbGxiYWNrIGlzIGZpcmVkIGluIENFIGJ1aWxkXG4gICAgLy8gYmVmb3JlIFdDIGlzIGRlZmluZWQuIFRoaXMgbmVlZHMgdG8gYmUgZml4ZWQgaW4gU3RlbmNpbC5cbiAgICBpZiAodHlwZW9mIGN1c3RvbUVsZW1lbnRzICE9PSAndW5kZWZpbmVkJyAmJiBjdXN0b21FbGVtZW50cyAhPSBudWxsKSB7XG4gICAgICBhd2FpdCBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCgnaW9uLXNwbGl0LXBhbmUnKTtcbiAgICB9XG4gICAgdGhpcy5zdHlsZU1haW5FbGVtZW50KCk7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGlmICh0aGlzLnJtTCkge1xuICAgICAgdGhpcy5ybUwoKTtcbiAgICAgIHRoaXMucm1MID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuICB1cGRhdGVTdGF0ZSgpIHtcbiAgICBpZiAodGhpcy5ybUwpIHtcbiAgICAgIHRoaXMucm1MKCk7XG4gICAgICB0aGlzLnJtTCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLy8gQ2hlY2sgaWYgdGhlIHNwbGl0LXBhbmUgaXMgZGlzYWJsZWRcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFdoZW4gcXVlcnkgaXMgYSBib29sZWFuXG4gICAgY29uc3QgcXVlcnkgPSB0aGlzLndoZW47XG4gICAgaWYgKHR5cGVvZiBxdWVyeSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICB0aGlzLnZpc2libGUgPSBxdWVyeTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gV2hlbiBxdWVyeSBpcyBhIHN0cmluZywgbGV0J3MgZmluZCBmaXJzdCBpZiBpdCBpcyBhIHNob3J0Y3V0XG4gICAgY29uc3QgbWVkaWFRdWVyeSA9IFFVRVJZW3F1ZXJ5XSB8fCBxdWVyeTtcbiAgICAvLyBNZWRpYSBxdWVyeSBpcyBlbXB0eSBvciBudWxsLCB3ZSBoaWRlIGl0XG4gICAgaWYgKG1lZGlhUXVlcnkubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gTGlzdGVuIG9uIG1lZGlhIHF1ZXJ5XG4gICAgY29uc3QgY2FsbGJhY2sgPSBxID0+IHtcbiAgICAgIHRoaXMudmlzaWJsZSA9IHEubWF0Y2hlcztcbiAgICB9O1xuICAgIGNvbnN0IG1lZGlhTGlzdCA9IHdpbmRvdy5tYXRjaE1lZGlhKG1lZGlhUXVlcnkpO1xuICAgIC8vIFRPRE8gRlctNTg2OVxuICAgIG1lZGlhTGlzdC5hZGRMaXN0ZW5lcihjYWxsYmFjayk7XG4gICAgdGhpcy5ybUwgPSAoKSA9PiBtZWRpYUxpc3QucmVtb3ZlTGlzdGVuZXIoY2FsbGJhY2spO1xuICAgIHRoaXMudmlzaWJsZSA9IG1lZGlhTGlzdC5tYXRjaGVzO1xuICB9XG4gIC8qKlxuICAgKiBBdHRlbXB0IHRvIGZpbmQgdGhlIG1haW4gY29udGVudFxuICAgKiBlbGVtZW50IGluc2lkZSBvZiB0aGUgc3BsaXQgcGFuZS5cbiAgICogSWYgZm91bmQsIHNldCBpdCBhcyB0aGUgbWFpbiBub2RlLlxuICAgKlxuICAgKiBXZSBhc3N1bWUgdGhhdCB0aGUgbWFpbiBub2RlXG4gICAqIGlzIGF2YWlsYWJsZSBpbiB0aGUgRE9NIG9uIHNwbGl0XG4gICAqIHBhbmUgbG9hZC5cbiAgICovXG4gIHN0eWxlTWFpbkVsZW1lbnQoKSB7XG4gICAgY29uc3QgY29udGVudElkID0gdGhpcy5jb250ZW50SWQ7XG4gICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmVsLmNoaWxkcmVuO1xuICAgIGNvbnN0IG51ID0gdGhpcy5lbC5jaGlsZEVsZW1lbnRDb3VudDtcbiAgICBsZXQgZm91bmRNYWluID0gZmFsc2U7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudTsgaSsrKSB7XG4gICAgICBjb25zdCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgY29uc3QgaXNNYWluID0gY29udGVudElkICE9PSB1bmRlZmluZWQgJiYgY2hpbGQuaWQgPT09IGNvbnRlbnRJZDtcbiAgICAgIGlmIChpc01haW4pIHtcbiAgICAgICAgaWYgKGZvdW5kTWFpbikge1xuICAgICAgICAgIHByaW50SW9uV2FybmluZygnW2lvbi1zcGxpdC1wYW5lXSAtIENhbm5vdCBoYXZlIG1vcmUgdGhhbiBvbmUgbWFpbiBub2RlLicpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRQYW5lQ2xhc3MoY2hpbGQsIGlzTWFpbik7XG4gICAgICAgICAgZm91bmRNYWluID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWZvdW5kTWFpbikge1xuICAgICAgcHJpbnRJb25XYXJuaW5nKCdbaW9uLXNwbGl0LXBhbmVdIC0gRG9lcyBub3QgaGF2ZSBhIHNwZWNpZmllZCBtYWluIG5vZGUuJyk7XG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICByZXR1cm4gaChIb3N0LCB7XG4gICAgICBrZXk6ICdkNWUzMGRmMTJmMWYxZjg1NWRhNGM2NmY5ODA3NmI5ZGNlNzYyYzU5JyxcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgIFttb2RlXTogdHJ1ZSxcbiAgICAgICAgLy8gVXNlZCBpbnRlcm5hbGx5IGZvciBzdHlsaW5nXG4gICAgICAgIFtgc3BsaXQtcGFuZS0ke21vZGV9YF06IHRydWUsXG4gICAgICAgICdzcGxpdC1wYW5lLXZpc2libGUnOiB0aGlzLnZpc2libGVcbiAgICAgIH1cbiAgICB9LCBoKFwic2xvdFwiLCB7XG4gICAgICBrZXk6ICczZTMwZDdjZjNiYzFjZjQzNGUxNjg3NmEwY2IyYTM2Mzc3YjhlMDBmJ1xuICAgIH0pKTtcbiAgfVxuICBnZXQgZWwoKSB7XG4gICAgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7XG4gIH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJ2aXNpYmxlXCI6IFtcInZpc2libGVDaGFuZ2VkXCJdLFxuICAgICAgXCJkaXNhYmxlZFwiOiBbXCJ1cGRhdGVTdGF0ZVwiXSxcbiAgICAgIFwid2hlblwiOiBbXCJ1cGRhdGVTdGF0ZVwiXVxuICAgIH07XG4gIH1cbn07XG5jb25zdCBzZXRQYW5lQ2xhc3MgPSAoZWwsIGlzTWFpbikgPT4ge1xuICBsZXQgdG9BZGQ7XG4gIGxldCB0b1JlbW92ZTtcbiAgaWYgKGlzTWFpbikge1xuICAgIHRvQWRkID0gU1BMSVRfUEFORV9NQUlOO1xuICAgIHRvUmVtb3ZlID0gU1BMSVRfUEFORV9TSURFO1xuICB9IGVsc2Uge1xuICAgIHRvQWRkID0gU1BMSVRfUEFORV9TSURFO1xuICAgIHRvUmVtb3ZlID0gU1BMSVRfUEFORV9NQUlOO1xuICB9XG4gIGNvbnN0IGNsYXNzTGlzdCA9IGVsLmNsYXNzTGlzdDtcbiAgY2xhc3NMaXN0LmFkZCh0b0FkZCk7XG4gIGNsYXNzTGlzdC5yZW1vdmUodG9SZW1vdmUpO1xufTtcblNwbGl0UGFuZS5zdHlsZSA9IHtcbiAgaW9zOiBzcGxpdFBhbmVJb3NDc3MsXG4gIG1kOiBzcGxpdFBhbmVNZENzc1xufTtcbmV4cG9ydCB7IFNwbGl0UGFuZSBhcyBpb25fc3BsaXRfcGFuZSB9OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUtBLElBQU0sa0JBQWtCO0FBQ3hCLElBQU0saUJBQWlCO0FBR3ZCLElBQU0sa0JBQWtCO0FBQ3hCLElBQU0sa0JBQWtCO0FBQ3hCLElBQU0sUUFBUTtBQUFBLEVBQ1osSUFBSTtBQUFBLEVBQ0osSUFBSTtBQUFBLEVBQ0osSUFBSTtBQUFBLEVBQ0osSUFBSTtBQUFBLEVBQ0osSUFBSTtBQUFBLEVBQ0osT0FBTztBQUNUO0FBQ0EsSUFBTSxZQUFZLE1BQU07QUFBQSxFQUN0QixZQUFZLFNBQVM7QUFDbkIscUJBQWlCLE1BQU0sT0FBTztBQUM5QixTQUFLLHNCQUFzQixZQUFZLE1BQU0sdUJBQXVCLENBQUM7QUFDckUsU0FBSyxVQUFVO0FBSWYsU0FBSyxXQUFXO0FBTWhCLFNBQUssT0FBTyxNQUFNLElBQUk7QUFBQSxFQUN4QjtBQUFBLEVBQ0EsZUFBZSxTQUFTO0FBQ3RCLFNBQUssb0JBQW9CLEtBQUs7QUFBQSxNQUM1QjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUlNLFlBQVk7QUFBQTtBQUNoQixhQUFPLFFBQVEsUUFBUSxLQUFLLE9BQU87QUFBQSxJQUNyQztBQUFBO0FBQUEsRUFDTSxvQkFBb0I7QUFBQTtBQUd4QixVQUFJLE9BQU8sbUJBQW1CLGVBQWUsa0JBQWtCLE1BQU07QUFDbkUsY0FBTSxlQUFlLFlBQVksZ0JBQWdCO0FBQUEsTUFDbkQ7QUFDQSxXQUFLLGlCQUFpQjtBQUN0QixXQUFLLFlBQVk7QUFBQSxJQUNuQjtBQUFBO0FBQUEsRUFDQSx1QkFBdUI7QUFDckIsUUFBSSxLQUFLLEtBQUs7QUFDWixXQUFLLElBQUk7QUFDVCxXQUFLLE1BQU07QUFBQSxJQUNiO0FBQUEsRUFDRjtBQUFBLEVBQ0EsY0FBYztBQUNaLFFBQUksS0FBSyxLQUFLO0FBQ1osV0FBSyxJQUFJO0FBQ1QsV0FBSyxNQUFNO0FBQUEsSUFDYjtBQUVBLFFBQUksS0FBSyxVQUFVO0FBQ2pCLFdBQUssVUFBVTtBQUNmO0FBQUEsSUFDRjtBQUVBLFVBQU0sUUFBUSxLQUFLO0FBQ25CLFFBQUksT0FBTyxVQUFVLFdBQVc7QUFDOUIsV0FBSyxVQUFVO0FBQ2Y7QUFBQSxJQUNGO0FBRUEsVUFBTSxhQUFhLE1BQU0sS0FBSyxLQUFLO0FBRW5DLFFBQUksV0FBVyxXQUFXLEdBQUc7QUFDM0IsV0FBSyxVQUFVO0FBQ2Y7QUFBQSxJQUNGO0FBRUEsVUFBTSxXQUFXLE9BQUs7QUFDcEIsV0FBSyxVQUFVLEVBQUU7QUFBQSxJQUNuQjtBQUNBLFVBQU0sWUFBWSxPQUFPLFdBQVcsVUFBVTtBQUU5QyxjQUFVLFlBQVksUUFBUTtBQUM5QixTQUFLLE1BQU0sTUFBTSxVQUFVLGVBQWUsUUFBUTtBQUNsRCxTQUFLLFVBQVUsVUFBVTtBQUFBLEVBQzNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFVQSxtQkFBbUI7QUFDakIsVUFBTSxZQUFZLEtBQUs7QUFDdkIsVUFBTSxXQUFXLEtBQUssR0FBRztBQUN6QixVQUFNLEtBQUssS0FBSyxHQUFHO0FBQ25CLFFBQUksWUFBWTtBQUNoQixhQUFTLElBQUksR0FBRyxJQUFJLElBQUksS0FBSztBQUMzQixZQUFNLFFBQVEsU0FBUyxDQUFDO0FBQ3hCLFlBQU0sU0FBUyxjQUFjLFVBQWEsTUFBTSxPQUFPO0FBQ3ZELFVBQUksUUFBUTtBQUNWLFlBQUksV0FBVztBQUNiLDBCQUFnQix5REFBeUQ7QUFDekU7QUFBQSxRQUNGLE9BQU87QUFDTCx1QkFBYSxPQUFPLE1BQU07QUFDMUIsc0JBQVk7QUFBQSxRQUNkO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFDQSxRQUFJLENBQUMsV0FBVztBQUNkLHNCQUFnQix5REFBeUQ7QUFBQSxJQUMzRTtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFDUCxVQUFNLE9BQU8sV0FBVyxJQUFJO0FBQzVCLFdBQU8sRUFBRSxNQUFNO0FBQUEsTUFDYixLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsUUFDTCxDQUFDLElBQUksR0FBRztBQUFBO0FBQUEsUUFFUixDQUFDLGNBQWMsSUFBSSxFQUFFLEdBQUc7QUFBQSxRQUN4QixzQkFBc0IsS0FBSztBQUFBLE1BQzdCO0FBQUEsSUFDRixHQUFHLEVBQUUsUUFBUTtBQUFBLE1BQ1gsS0FBSztBQUFBLElBQ1AsQ0FBQyxDQUFDO0FBQUEsRUFDSjtBQUFBLEVBQ0EsSUFBSSxLQUFLO0FBQ1AsV0FBTyxXQUFXLElBQUk7QUFBQSxFQUN4QjtBQUFBLEVBQ0EsV0FBVyxXQUFXO0FBQ3BCLFdBQU87QUFBQSxNQUNMLFdBQVcsQ0FBQyxnQkFBZ0I7QUFBQSxNQUM1QixZQUFZLENBQUMsYUFBYTtBQUFBLE1BQzFCLFFBQVEsQ0FBQyxhQUFhO0FBQUEsSUFDeEI7QUFBQSxFQUNGO0FBQ0Y7QUFDQSxJQUFNLGVBQWUsQ0FBQyxJQUFJLFdBQVc7QUFDbkMsTUFBSTtBQUNKLE1BQUk7QUFDSixNQUFJLFFBQVE7QUFDVixZQUFRO0FBQ1IsZUFBVztBQUFBLEVBQ2IsT0FBTztBQUNMLFlBQVE7QUFDUixlQUFXO0FBQUEsRUFDYjtBQUNBLFFBQU0sWUFBWSxHQUFHO0FBQ3JCLFlBQVUsSUFBSSxLQUFLO0FBQ25CLFlBQVUsT0FBTyxRQUFRO0FBQzNCO0FBQ0EsVUFBVSxRQUFRO0FBQUEsRUFDaEIsS0FBSztBQUFBLEVBQ0wsSUFBSTtBQUNOOyIsIm5hbWVzIjpbXSwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==
