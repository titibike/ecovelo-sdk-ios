import {
  attachComponent
} from "./chunk-3MKGIXIK.js";
import "./chunk-RZR7LWTQ.js";
import {
  Host,
  createEvent,
  getElement,
  h,
  printIonError,
  registerInstance
} from "./chunk-BFPTXCSH.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js
var tabCss = ":host(.tab-hidden){display:none !important}";
var Tab = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.loaded = false;
    this.active = false;
  }
  componentWillLoad() {
    return __async(this, null, function* () {
      if (this.active) {
        yield this.setActive();
      }
    });
  }
  /** Set the active component for the tab */
  setActive() {
    return __async(this, null, function* () {
      yield this.prepareLazyLoaded();
      this.active = true;
    });
  }
  changeActive(isActive) {
    if (isActive) {
      this.prepareLazyLoaded();
    }
  }
  prepareLazyLoaded() {
    if (!this.loaded && this.component != null) {
      this.loaded = true;
      try {
        return attachComponent(this.delegate, this.el, this.component, ["ion-page"]);
      } catch (e) {
        printIonError("[ion-tab] - Exception in prepareLazyLoaded:", e);
      }
    }
    return Promise.resolve(void 0);
  }
  render() {
    const {
      tab,
      active,
      component
    } = this;
    return h(Host, {
      key: "dbad8fe9f1566277d14647626308eaf1601ab01f",
      role: "tabpanel",
      "aria-hidden": !active ? "true" : null,
      "aria-labelledby": `tab-button-${tab}`,
      class: {
        "ion-page": component === void 0,
        "tab-hidden": !active
      }
    }, h("slot", {
      key: "3be64f4e7161f6769aaf8e4dcb5293fcaa09af45"
    }));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "active": ["changeActive"]
    };
  }
};
Tab.style = tabCss;
var tabsCss = ":host{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;contain:layout size style;z-index:0}.tabs-inner{position:relative;-ms-flex:1;flex:1;contain:layout size style}";
var Tabs = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionNavWillLoad = createEvent(this, "ionNavWillLoad", 7);
    this.ionTabsWillChange = createEvent(this, "ionTabsWillChange", 3);
    this.ionTabsDidChange = createEvent(this, "ionTabsDidChange", 3);
    this.transitioning = false;
    this.useRouter = false;
    this.onTabClicked = (ev) => {
      const {
        href,
        tab
      } = ev.detail;
      if (this.useRouter && href !== void 0) {
        const router = document.querySelector("ion-router");
        if (router) {
          router.push(href);
        }
      } else {
        this.select(tab);
      }
    };
  }
  componentWillLoad() {
    return __async(this, null, function* () {
      if (!this.useRouter) {
        this.useRouter = (!!this.el.querySelector("ion-router-outlet") || !!document.querySelector("ion-router")) && !this.el.closest("[no-router]");
      }
      if (!this.useRouter) {
        const tabs = this.tabs;
        if (tabs.length > 0) {
          yield this.select(tabs[0]);
        }
      }
      this.ionNavWillLoad.emit();
    });
  }
  componentWillRender() {
    const tabBar = this.el.querySelector("ion-tab-bar");
    if (tabBar) {
      let tab = this.selectedTab ? this.selectedTab.tab : void 0;
      if (!tab && this.useRouter && typeof window !== "undefined") {
        const currentPath = window.location.pathname;
        const tabButtons = this.el.querySelectorAll("ion-tab-button");
        for (const tabButton of tabButtons) {
          const tabId = tabButton.getAttribute("tab");
          if (tabId && currentPath.includes(tabId)) {
            tab = tabId;
            break;
          }
        }
      }
      tabBar.selectedTab = tab;
    }
  }
  /**
   * Select a tab by the value of its `tab` property or an element reference. This method is only available for vanilla JavaScript projects. The Angular, React, and Vue implementations of tabs are coupled to each framework's router.
   *
   * @param tab The tab instance to select. If passed a string, it should be the value of the tab's `tab` property.
   */
  select(tab) {
    return __async(this, null, function* () {
      const selectedTab = getTab(this.tabs, tab);
      if (!this.shouldSwitch(selectedTab)) {
        return false;
      }
      yield this.setActive(selectedTab);
      yield this.notifyRouter();
      this.tabSwitch();
      return true;
    });
  }
  /**
   * Get a specific tab by the value of its `tab` property or an element reference. This method is only available for vanilla JavaScript projects. The Angular, React, and Vue implementations of tabs are coupled to each framework's router.
   *
   * @param tab The tab instance to select. If passed a string, it should be the value of the tab's `tab` property.
   */
  getTab(tab) {
    return __async(this, null, function* () {
      return getTab(this.tabs, tab);
    });
  }
  /**
   * Get the currently selected tab. This method is only available for vanilla JavaScript projects. The Angular, React, and Vue implementations of tabs are coupled to each framework's router.
   */
  getSelected() {
    return Promise.resolve(this.selectedTab ? this.selectedTab.tab : void 0);
  }
  /** @internal */
  setRouteId(id) {
    return __async(this, null, function* () {
      const selectedTab = getTab(this.tabs, id);
      if (!this.shouldSwitch(selectedTab)) {
        return {
          changed: false,
          element: this.selectedTab
        };
      }
      yield this.setActive(selectedTab);
      return {
        changed: true,
        element: this.selectedTab,
        markVisible: () => this.tabSwitch()
      };
    });
  }
  /** @internal */
  getRouteId() {
    return __async(this, null, function* () {
      var _a;
      const tabId = (_a = this.selectedTab) === null || _a === void 0 ? void 0 : _a.tab;
      return tabId !== void 0 ? {
        id: tabId,
        element: this.selectedTab
      } : void 0;
    });
  }
  setActive(selectedTab) {
    if (this.transitioning) {
      return Promise.reject("transitioning already happening");
    }
    this.transitioning = true;
    this.leavingTab = this.selectedTab;
    this.selectedTab = selectedTab;
    this.ionTabsWillChange.emit({
      tab: selectedTab.tab
    });
    selectedTab.active = true;
    return Promise.resolve();
  }
  tabSwitch() {
    const selectedTab = this.selectedTab;
    const leavingTab = this.leavingTab;
    this.leavingTab = void 0;
    this.transitioning = false;
    if (!selectedTab) {
      return;
    }
    if (leavingTab !== selectedTab) {
      if (leavingTab) {
        leavingTab.active = false;
      }
      this.ionTabsDidChange.emit({
        tab: selectedTab.tab
      });
    }
  }
  notifyRouter() {
    if (this.useRouter) {
      const router = document.querySelector("ion-router");
      if (router) {
        return router.navChanged("forward");
      }
    }
    return Promise.resolve(false);
  }
  shouldSwitch(selectedTab) {
    const leavingTab = this.selectedTab;
    return selectedTab !== void 0 && selectedTab !== leavingTab && !this.transitioning;
  }
  get tabs() {
    return Array.from(this.el.querySelectorAll("ion-tab"));
  }
  render() {
    return h(Host, {
      key: "6dd1d17cc5a7aff4b910303006b4478080ca97af",
      onIonTabButtonClick: this.onTabClicked
    }, h("slot", {
      key: "db54a692d1a825498a116f090eb305f7cceceb5a",
      name: "top"
    }), h("div", {
      key: "e1b7d49ba7032e9071de2029695254e2a8303be9",
      class: "tabs-inner"
    }, h("slot", {
      key: "4c3b58d5292c8c834e7532c51de0861068943d79"
    })), h("slot", {
      key: "dd59c0b9b217dfbfb0fccdbc6896b593278549cc",
      name: "bottom"
    }));
  }
  get el() {
    return getElement(this);
  }
};
var getTab = (tabs, tab) => {
  const tabEl = typeof tab === "string" ? tabs.find((t) => t.tab === tab) : tab;
  if (!tabEl) {
    printIonError(`[ion-tabs] - Tab with id: "${tabEl}" does not exist`);
  }
  return tabEl;
};
Tabs.style = tabsCss;
export {
  Tab as ion_tab,
  Tabs as ion_tabs
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-tab_2.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tdGFiXzIuZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgaiBhcyBwcmludElvbkVycm9yLCBoLCBkIGFzIEhvc3QsIGcgYXMgZ2V0RWxlbWVudCwgYyBhcyBjcmVhdGVFdmVudCB9IGZyb20gJy4vaW5kZXgtNER4WTZfZ0cuanMnO1xuaW1wb3J0IHsgYSBhcyBhdHRhY2hDb21wb25lbnQgfSBmcm9tICcuL2ZyYW1ld29yay1kZWxlZ2F0ZS1CTEVCZ0gwNi5qcyc7XG5pbXBvcnQgJy4vaGVscGVycy04S1NRUUdReS5qcyc7XG5jb25zdCB0YWJDc3MgPSBcIjpob3N0KC50YWItaGlkZGVuKXtkaXNwbGF5Om5vbmUgIWltcG9ydGFudH1cIjtcbmNvbnN0IFRhYiA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5sb2FkZWQgPSBmYWxzZTtcbiAgICAvKiogQGludGVybmFsICovXG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgfVxuICBhc3luYyBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgIGF3YWl0IHRoaXMuc2V0QWN0aXZlKCk7XG4gICAgfVxuICB9XG4gIC8qKiBTZXQgdGhlIGFjdGl2ZSBjb21wb25lbnQgZm9yIHRoZSB0YWIgKi9cbiAgYXN5bmMgc2V0QWN0aXZlKCkge1xuICAgIGF3YWl0IHRoaXMucHJlcGFyZUxhenlMb2FkZWQoKTtcbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gIH1cbiAgY2hhbmdlQWN0aXZlKGlzQWN0aXZlKSB7XG4gICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICB0aGlzLnByZXBhcmVMYXp5TG9hZGVkKCk7XG4gICAgfVxuICB9XG4gIHByZXBhcmVMYXp5TG9hZGVkKCkge1xuICAgIGlmICghdGhpcy5sb2FkZWQgJiYgdGhpcy5jb21wb25lbnQgIT0gbnVsbCkge1xuICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF0dGFjaENvbXBvbmVudCh0aGlzLmRlbGVnYXRlLCB0aGlzLmVsLCB0aGlzLmNvbXBvbmVudCwgWydpb24tcGFnZSddKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcHJpbnRJb25FcnJvcignW2lvbi10YWJdIC0gRXhjZXB0aW9uIGluIHByZXBhcmVMYXp5TG9hZGVkOicsIGUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRhYixcbiAgICAgIGFjdGl2ZSxcbiAgICAgIGNvbXBvbmVudFxuICAgIH0gPSB0aGlzO1xuICAgIHJldHVybiBoKEhvc3QsIHtcbiAgICAgIGtleTogJ2RiYWQ4ZmU5ZjE1NjYyNzdkMTQ2NDc2MjYzMDhlYWYxNjAxYWIwMWYnLFxuICAgICAgcm9sZTogXCJ0YWJwYW5lbFwiLFxuICAgICAgXCJhcmlhLWhpZGRlblwiOiAhYWN0aXZlID8gJ3RydWUnIDogbnVsbCxcbiAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IGB0YWItYnV0dG9uLSR7dGFifWAsXG4gICAgICBjbGFzczoge1xuICAgICAgICAnaW9uLXBhZ2UnOiBjb21wb25lbnQgPT09IHVuZGVmaW5lZCxcbiAgICAgICAgJ3RhYi1oaWRkZW4nOiAhYWN0aXZlXG4gICAgICB9XG4gICAgfSwgaChcInNsb3RcIiwge1xuICAgICAga2V5OiAnM2JlNjRmNGU3MTYxZjY3NjlhYWY4ZTRkY2I1MjkzZmNhYTA5YWY0NSdcbiAgICB9KSk7XG4gIH1cbiAgZ2V0IGVsKCkge1xuICAgIHJldHVybiBnZXRFbGVtZW50KHRoaXMpO1xuICB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiYWN0aXZlXCI6IFtcImNoYW5nZUFjdGl2ZVwiXVxuICAgIH07XG4gIH1cbn07XG5UYWIuc3R5bGUgPSB0YWJDc3M7XG5jb25zdCB0YWJzQ3NzID0gXCI6aG9zdHtsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjphYnNvbHV0ZTstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2NvbnRhaW46bGF5b3V0IHNpemUgc3R5bGU7ei1pbmRleDowfS50YWJzLWlubmVye3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4OjE7ZmxleDoxO2NvbnRhaW46bGF5b3V0IHNpemUgc3R5bGV9XCI7XG5jb25zdCBUYWJzID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmlvbk5hdldpbGxMb2FkID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25OYXZXaWxsTG9hZFwiLCA3KTtcbiAgICB0aGlzLmlvblRhYnNXaWxsQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25UYWJzV2lsbENoYW5nZVwiLCAzKTtcbiAgICB0aGlzLmlvblRhYnNEaWRDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblRhYnNEaWRDaGFuZ2VcIiwgMyk7XG4gICAgdGhpcy50cmFuc2l0aW9uaW5nID0gZmFsc2U7XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIHRoaXMudXNlUm91dGVyID0gZmFsc2U7XG4gICAgdGhpcy5vblRhYkNsaWNrZWQgPSBldiA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGhyZWYsXG4gICAgICAgIHRhYlxuICAgICAgfSA9IGV2LmRldGFpbDtcbiAgICAgIGlmICh0aGlzLnVzZVJvdXRlciAmJiBocmVmICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3Qgcm91dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW9uLXJvdXRlcicpO1xuICAgICAgICBpZiAocm91dGVyKSB7XG4gICAgICAgICAgcm91dGVyLnB1c2goaHJlZik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2VsZWN0KHRhYik7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBhc3luYyBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBpZiAoIXRoaXMudXNlUm91dGVyKSB7XG4gICAgICAvKipcbiAgICAgICAqIEphdmFTY3JpcHQgYW5kIFN0ZW5jaWxKUyB1c2UgYGlvbi1yb3V0ZXJgLCB3aGlsZVxuICAgICAgICogdGhlIG90aGVyIGZyYW1ld29ya3MgdXNlIGBpb24tcm91dGVyLW91dGxldGAuXG4gICAgICAgKlxuICAgICAgICogSWYgZWl0aGVyIGNvbXBvbmVudCBpcyBwcmVzZW50IHRoZW4gdGFicyB3aWxsIG5vdCB1c2VcbiAgICAgICAqIGEgYmFzaWMgdGFiLWJhc2VkIG5hdmlnYXRpb24uIEl0IHdpbGwgdXNlIHRoZSBoaXN0b3J5XG4gICAgICAgKiBzdGFjayBvciBVUkwgdXBkYXRlcyBhc3NvY2lhdGVkIHdpdGggdGhlIHJvdXRlci5cbiAgICAgICAqL1xuICAgICAgdGhpcy51c2VSb3V0ZXIgPSAoISF0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1yb3V0ZXItb3V0bGV0JykgfHwgISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpb24tcm91dGVyJykpICYmICF0aGlzLmVsLmNsb3Nlc3QoJ1tuby1yb3V0ZXJdJyk7XG4gICAgfVxuICAgIGlmICghdGhpcy51c2VSb3V0ZXIpIHtcbiAgICAgIGNvbnN0IHRhYnMgPSB0aGlzLnRhYnM7XG4gICAgICBpZiAodGFicy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuc2VsZWN0KHRhYnNbMF0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmlvbk5hdldpbGxMb2FkLmVtaXQoKTtcbiAgfVxuICBjb21wb25lbnRXaWxsUmVuZGVyKCkge1xuICAgIGNvbnN0IHRhYkJhciA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignaW9uLXRhYi1iYXInKTtcbiAgICBpZiAodGFiQmFyKSB7XG4gICAgICBsZXQgdGFiID0gdGhpcy5zZWxlY3RlZFRhYiA/IHRoaXMuc2VsZWN0ZWRUYWIudGFiIDogdW5kZWZpbmVkO1xuICAgICAgLy8gRmFsbGJhY2s6IGlmIG5vIHNlbGVjdGVkVGFiIGlzIHNldCBidXQgd2UncmUgdXNpbmcgcm91dGVyIG1vZGUsXG4gICAgICAvLyBkZXRlcm1pbmUgdGhlIGFjdGl2ZSB0YWIgZnJvbSB0aGUgY3VycmVudCBVUkwuIFRoaXMgd29ya3MgYXJvdW5kXG4gICAgICAvLyB0aW1pbmcgaXNzdWVzIGluIFJlYWN0IFJvdXRlciBpbnRlZ3JhdGlvbiB3aGVyZSBzZXRSb3V0ZUlkIG1heSBub3RcbiAgICAgIC8vIGJlIGNhbGxlZCBpbiB0aW1lIGZvciB0aGUgaW5pdGlhbCByZW5kZXIuXG4gICAgICAvLyBUT0RPKEZXLTY3MjQpOiBSZW1vdmUgdGhpcyB3aXRoIFJlYWN0IFJvdXRlciB1cGdyYWRlXG4gICAgICBpZiAoIXRhYiAmJiB0aGlzLnVzZVJvdXRlciAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zdCBjdXJyZW50UGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgICAgICAgY29uc3QgdGFiQnV0dG9ucyA9IHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbCgnaW9uLXRhYi1idXR0b24nKTtcbiAgICAgICAgLy8gTG9vayBmb3IgYSB0YWIgYnV0dG9uIHRoYXQgbWF0Y2hlcyB0aGUgY3VycmVudCBwYXRoIHBhdHRlcm5cbiAgICAgICAgZm9yIChjb25zdCB0YWJCdXR0b24gb2YgdGFiQnV0dG9ucykge1xuICAgICAgICAgIGNvbnN0IHRhYklkID0gdGFiQnV0dG9uLmdldEF0dHJpYnV0ZSgndGFiJyk7XG4gICAgICAgICAgaWYgKHRhYklkICYmIGN1cnJlbnRQYXRoLmluY2x1ZGVzKHRhYklkKSkge1xuICAgICAgICAgICAgdGFiID0gdGFiSWQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRhYkJhci5zZWxlY3RlZFRhYiA9IHRhYjtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFNlbGVjdCBhIHRhYiBieSB0aGUgdmFsdWUgb2YgaXRzIGB0YWJgIHByb3BlcnR5IG9yIGFuIGVsZW1lbnQgcmVmZXJlbmNlLiBUaGlzIG1ldGhvZCBpcyBvbmx5IGF2YWlsYWJsZSBmb3IgdmFuaWxsYSBKYXZhU2NyaXB0IHByb2plY3RzLiBUaGUgQW5ndWxhciwgUmVhY3QsIGFuZCBWdWUgaW1wbGVtZW50YXRpb25zIG9mIHRhYnMgYXJlIGNvdXBsZWQgdG8gZWFjaCBmcmFtZXdvcmsncyByb3V0ZXIuXG4gICAqXG4gICAqIEBwYXJhbSB0YWIgVGhlIHRhYiBpbnN0YW5jZSB0byBzZWxlY3QuIElmIHBhc3NlZCBhIHN0cmluZywgaXQgc2hvdWxkIGJlIHRoZSB2YWx1ZSBvZiB0aGUgdGFiJ3MgYHRhYmAgcHJvcGVydHkuXG4gICAqL1xuICBhc3luYyBzZWxlY3QodGFiKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRUYWIgPSBnZXRUYWIodGhpcy50YWJzLCB0YWIpO1xuICAgIGlmICghdGhpcy5zaG91bGRTd2l0Y2goc2VsZWN0ZWRUYWIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGF3YWl0IHRoaXMuc2V0QWN0aXZlKHNlbGVjdGVkVGFiKTtcbiAgICBhd2FpdCB0aGlzLm5vdGlmeVJvdXRlcigpO1xuICAgIHRoaXMudGFiU3dpdGNoKCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLyoqXG4gICAqIEdldCBhIHNwZWNpZmljIHRhYiBieSB0aGUgdmFsdWUgb2YgaXRzIGB0YWJgIHByb3BlcnR5IG9yIGFuIGVsZW1lbnQgcmVmZXJlbmNlLiBUaGlzIG1ldGhvZCBpcyBvbmx5IGF2YWlsYWJsZSBmb3IgdmFuaWxsYSBKYXZhU2NyaXB0IHByb2plY3RzLiBUaGUgQW5ndWxhciwgUmVhY3QsIGFuZCBWdWUgaW1wbGVtZW50YXRpb25zIG9mIHRhYnMgYXJlIGNvdXBsZWQgdG8gZWFjaCBmcmFtZXdvcmsncyByb3V0ZXIuXG4gICAqXG4gICAqIEBwYXJhbSB0YWIgVGhlIHRhYiBpbnN0YW5jZSB0byBzZWxlY3QuIElmIHBhc3NlZCBhIHN0cmluZywgaXQgc2hvdWxkIGJlIHRoZSB2YWx1ZSBvZiB0aGUgdGFiJ3MgYHRhYmAgcHJvcGVydHkuXG4gICAqL1xuICBhc3luYyBnZXRUYWIodGFiKSB7XG4gICAgcmV0dXJuIGdldFRhYih0aGlzLnRhYnMsIHRhYik7XG4gIH1cbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHRhYi4gVGhpcyBtZXRob2QgaXMgb25seSBhdmFpbGFibGUgZm9yIHZhbmlsbGEgSmF2YVNjcmlwdCBwcm9qZWN0cy4gVGhlIEFuZ3VsYXIsIFJlYWN0LCBhbmQgVnVlIGltcGxlbWVudGF0aW9ucyBvZiB0YWJzIGFyZSBjb3VwbGVkIHRvIGVhY2ggZnJhbWV3b3JrJ3Mgcm91dGVyLlxuICAgKi9cbiAgZ2V0U2VsZWN0ZWQoKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNlbGVjdGVkVGFiID8gdGhpcy5zZWxlY3RlZFRhYi50YWIgOiB1bmRlZmluZWQpO1xuICB9XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgYXN5bmMgc2V0Um91dGVJZChpZCkge1xuICAgIGNvbnN0IHNlbGVjdGVkVGFiID0gZ2V0VGFiKHRoaXMudGFicywgaWQpO1xuICAgIGlmICghdGhpcy5zaG91bGRTd2l0Y2goc2VsZWN0ZWRUYWIpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjaGFuZ2VkOiBmYWxzZSxcbiAgICAgICAgZWxlbWVudDogdGhpcy5zZWxlY3RlZFRhYlxuICAgICAgfTtcbiAgICB9XG4gICAgYXdhaXQgdGhpcy5zZXRBY3RpdmUoc2VsZWN0ZWRUYWIpO1xuICAgIHJldHVybiB7XG4gICAgICBjaGFuZ2VkOiB0cnVlLFxuICAgICAgZWxlbWVudDogdGhpcy5zZWxlY3RlZFRhYixcbiAgICAgIG1hcmtWaXNpYmxlOiAoKSA9PiB0aGlzLnRhYlN3aXRjaCgpXG4gICAgfTtcbiAgfVxuICAvKiogQGludGVybmFsICovXG4gIGFzeW5jIGdldFJvdXRlSWQoKSB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IHRhYklkID0gKF9hID0gdGhpcy5zZWxlY3RlZFRhYikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRhYjtcbiAgICByZXR1cm4gdGFiSWQgIT09IHVuZGVmaW5lZCA/IHtcbiAgICAgIGlkOiB0YWJJZCxcbiAgICAgIGVsZW1lbnQ6IHRoaXMuc2VsZWN0ZWRUYWJcbiAgICB9IDogdW5kZWZpbmVkO1xuICB9XG4gIHNldEFjdGl2ZShzZWxlY3RlZFRhYikge1xuICAgIGlmICh0aGlzLnRyYW5zaXRpb25pbmcpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgndHJhbnNpdGlvbmluZyBhbHJlYWR5IGhhcHBlbmluZycpO1xuICAgIH1cbiAgICB0aGlzLnRyYW5zaXRpb25pbmcgPSB0cnVlO1xuICAgIHRoaXMubGVhdmluZ1RhYiA9IHRoaXMuc2VsZWN0ZWRUYWI7XG4gICAgdGhpcy5zZWxlY3RlZFRhYiA9IHNlbGVjdGVkVGFiO1xuICAgIHRoaXMuaW9uVGFic1dpbGxDaGFuZ2UuZW1pdCh7XG4gICAgICB0YWI6IHNlbGVjdGVkVGFiLnRhYlxuICAgIH0pO1xuICAgIHNlbGVjdGVkVGFiLmFjdGl2ZSA9IHRydWU7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG4gIHRhYlN3aXRjaCgpIHtcbiAgICBjb25zdCBzZWxlY3RlZFRhYiA9IHRoaXMuc2VsZWN0ZWRUYWI7XG4gICAgY29uc3QgbGVhdmluZ1RhYiA9IHRoaXMubGVhdmluZ1RhYjtcbiAgICB0aGlzLmxlYXZpbmdUYWIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy50cmFuc2l0aW9uaW5nID0gZmFsc2U7XG4gICAgaWYgKCFzZWxlY3RlZFRhYikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobGVhdmluZ1RhYiAhPT0gc2VsZWN0ZWRUYWIpIHtcbiAgICAgIGlmIChsZWF2aW5nVGFiKSB7XG4gICAgICAgIGxlYXZpbmdUYWIuYWN0aXZlID0gZmFsc2U7XG4gICAgICB9XG4gICAgICB0aGlzLmlvblRhYnNEaWRDaGFuZ2UuZW1pdCh7XG4gICAgICAgIHRhYjogc2VsZWN0ZWRUYWIudGFiXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgbm90aWZ5Um91dGVyKCkge1xuICAgIGlmICh0aGlzLnVzZVJvdXRlcikge1xuICAgICAgY29uc3Qgcm91dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW9uLXJvdXRlcicpO1xuICAgICAgaWYgKHJvdXRlcikge1xuICAgICAgICByZXR1cm4gcm91dGVyLm5hdkNoYW5nZWQoJ2ZvcndhcmQnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gIH1cbiAgc2hvdWxkU3dpdGNoKHNlbGVjdGVkVGFiKSB7XG4gICAgY29uc3QgbGVhdmluZ1RhYiA9IHRoaXMuc2VsZWN0ZWRUYWI7XG4gICAgcmV0dXJuIHNlbGVjdGVkVGFiICE9PSB1bmRlZmluZWQgJiYgc2VsZWN0ZWRUYWIgIT09IGxlYXZpbmdUYWIgJiYgIXRoaXMudHJhbnNpdGlvbmluZztcbiAgfVxuICBnZXQgdGFicygpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lvbi10YWInKSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBoKEhvc3QsIHtcbiAgICAgIGtleTogJzZkZDFkMTdjYzVhN2FmZjRiOTEwMzAzMDA2YjQ0NzgwODBjYTk3YWYnLFxuICAgICAgb25Jb25UYWJCdXR0b25DbGljazogdGhpcy5vblRhYkNsaWNrZWRcbiAgICB9LCBoKFwic2xvdFwiLCB7XG4gICAgICBrZXk6ICdkYjU0YTY5MmQxYTgyNTQ5OGExMTZmMDkwZWIzMDVmN2NjZWNlYjVhJyxcbiAgICAgIG5hbWU6IFwidG9wXCJcbiAgICB9KSwgaChcImRpdlwiLCB7XG4gICAgICBrZXk6ICdlMWI3ZDQ5YmE3MDMyZTkwNzFkZTIwMjk2OTUyNTRlMmE4MzAzYmU5JyxcbiAgICAgIGNsYXNzOiBcInRhYnMtaW5uZXJcIlxuICAgIH0sIGgoXCJzbG90XCIsIHtcbiAgICAgIGtleTogJzRjM2I1OGQ1MjkyYzhjODM0ZTc1MzJjNTFkZTA4NjEwNjg5NDNkNzknXG4gICAgfSkpLCBoKFwic2xvdFwiLCB7XG4gICAgICBrZXk6ICdkZDU5YzBiOWIyMTdkZmJmYjBmY2NkYmM2ODk2YjU5MzI3ODU0OWNjJyxcbiAgICAgIG5hbWU6IFwiYm90dG9tXCJcbiAgICB9KSk7XG4gIH1cbiAgZ2V0IGVsKCkge1xuICAgIHJldHVybiBnZXRFbGVtZW50KHRoaXMpO1xuICB9XG59O1xuY29uc3QgZ2V0VGFiID0gKHRhYnMsIHRhYikgPT4ge1xuICBjb25zdCB0YWJFbCA9IHR5cGVvZiB0YWIgPT09ICdzdHJpbmcnID8gdGFicy5maW5kKHQgPT4gdC50YWIgPT09IHRhYikgOiB0YWI7XG4gIGlmICghdGFiRWwpIHtcbiAgICBwcmludElvbkVycm9yKGBbaW9uLXRhYnNdIC0gVGFiIHdpdGggaWQ6IFwiJHt0YWJFbH1cIiBkb2VzIG5vdCBleGlzdGApO1xuICB9XG4gIHJldHVybiB0YWJFbDtcbn07XG5UYWJzLnN0eWxlID0gdGFic0NzcztcbmV4cG9ydCB7IFRhYiBhcyBpb25fdGFiLCBUYWJzIGFzIGlvbl90YWJzIH07Il0sIm1hcHBp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LFlBQVk7QUFDZCxtQkFBVyxTQUFTO0FBQUEsTUFDdEI7QUFDQSxXQUFLLGlCQUFpQixLQUFLO0FBQUEsUUFDekIsS0FBSyxZQUFZO0FBQUEsTUFDbkIsQ0FBQztBQUFBLElBQ0g7QUFBQSxFQUNGO0FBQUEsRUFDQSxlQUFlO0FBQ2IsUUFBSSxLQUFLLFdBQVc7QUFDbEIsWUFBTSxTQUFTLFNBQVMsY0FBYyxZQUFZO0FBQ2xELFVBQUksUUFBUTtBQUNWLGVBQU8sT0FBTyxXQUFXLFNBQVM7QUFBQSxNQUNwQztBQUFBLElBQ0Y7QUFDQSxXQUFPLFFBQVEsUUFBUSxLQUFLO0FBQUEsRUFDOUI7QUFBQSxFQUNBLGFBQWEsYUFBYTtBQUN4QixVQUFNLGFBQWEsS0FBSztBQUN4QixXQUFPLGdCQUFnQixVQUFhLGdCQUFnQixjQUFjLENBQUMsS0FBSztBQUFBLEVBQzFFO0FBQUEsRUFDQSxJQUFJLE9BQU87QUFDVCxXQUFPLE1BQU0sS0FBSyxLQUFLLEdBQUcsaUJBQWlCLFNBQVMsQ0FBQztBQUFBLEVBQ3ZEO0FBQUEsRUFDQSxTQUFTO0FBQ1AsV0FBTyxFQUFFLE1BQU07QUFBQSxNQUNiLEtBQUs7QUFBQSxNQUNMLHFCQUFxQixLQUFLO0FBQUEsSUFDNUIsR0FBRyxFQUFFLFFBQVE7QUFBQSxNQUNYLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxJQUNSLENBQUMsR0FBRyxFQUFFLE9BQU87QUFBQSxNQUNYLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxJQUNULEdBQUcsRUFBRSxRQUFRO0FBQUEsTUFDWCxLQUFLO0FBQUEsSUFDUCxDQUFDLENBQUMsR0FBRyxFQUFFLFFBQVE7QUFBQSxNQUNiLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxJQUNSLENBQUMsQ0FBQztBQUFBLEVBQ0o7QUFBQSxFQUNBLElBQUksS0FBSztBQUNQLFdBQU8sV0FBVyxJQUFJO0FBQUEsRUFDeEI7QUFDRjtBQUNBLElBQU0sU0FBUyxDQUFDLE1BQU0sUUFBUTtBQUM1QixRQUFNLFFBQVEsT0FBTyxRQUFRLFdBQVcsS0FBSyxLQUFLLE9BQUssRUFBRSxRQUFRLEdBQUcsSUFBSTtBQUN4RSxNQUFJLENBQUMsT0FBTztBQUNWLGtCQUFjLDhCQUE4QixLQUFLLGtCQUFrQjtBQUFBLEVBQ3JFO0FBQ0EsU0FBTztBQUNUO0FBQ0EsS0FBSyxRQUFROyIsIm5hbWVzIjpbXSwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==
