import {
  require_showdown
} from "./chunk-7JCEDXGT.js";
import {
  IonButton,
  IonContent,
  IonIcon,
  IonImg,
  IonicModule
} from "./chunk-Y4K6NO5T.js";
import {
  NewsService
} from "./chunk-XK4I5MHM.js";
import {
  environment
} from "./chunk-FOJAXRYS.js";
import {
  ErrorHandlerService
} from "./chunk-SARQRLZR.js";
import {
  addIcons,
  arrowBack
} from "./chunk-3E6DEK7U.js";
import {
  StorageService
} from "./chunk-U6SJAXLK.js";
import {
  BehaviorSubject,
  CommonModule,
  Component,
  EventEmitter,
  Injectable,
  Input,
  ModalController,
  NgClass,
  NgIf,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate
} from "./chunk-DGENMXJW.js";
import {
  __async,
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-UESUV5PM.js";

// src/app/components/modals/news-detail/news-detail.component.ts
var Showdown = __toESM(require_showdown());
var _c0 = (a0) => ({ "no-image": a0 });
function NewsDetailComponent_Conditional_0_ion_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-img", 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.news.image);
  }
}
function NewsDetailComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-content")(1, "ion-button", 0);
    \u0275\u0275listener("click", function NewsDetailComponent_Conditional_0_Template_ion_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275element(2, "ion-icon", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, NewsDetailComponent_Conditional_0_ion_img_3_Template, 1, 1, "ion-img", 2);
    \u0275\u0275elementStart(4, "div", 3);
    \u0275\u0275element(5, "h1", 4)(6, "div", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.news.image);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c0, !ctx_r1.news.image));
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r1.showdown(ctx_r1.news.title || ""), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r1.showdown(ctx_r1.news.text || ""), \u0275\u0275sanitizeHtml);
  }
}
var _NewsDetailComponent = class _NewsDetailComponent {
  constructor(modalCtrl) {
    this.modalCtrl = modalCtrl;
    addIcons({ arrowBack });
  }
  cancel() {
    this.modalCtrl.dismiss();
  }
  showdown(text) {
    const converter = new Showdown.Converter();
    return converter.makeHtml(text);
  }
};
_NewsDetailComponent.\u0275fac = function NewsDetailComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewsDetailComponent)(\u0275\u0275directiveInject(ModalController));
};
_NewsDetailComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewsDetailComponent, selectors: [["app-news-detail"]], inputs: { news: "news" }, decls: 1, vars: 1, consts: [["shape", "round", "color", "light", 3, "click"], ["slot", "icon-only", "name", "arrow-back"], ["alt", "News image", 3, "src", 4, "ngIf"], [1, "ion-padding", "ion-margin-bottom", 3, "ngClass"], [1, "ion-no-margin", "ion-margin-bottom", "ion-margin-top", 3, "innerHTML"], [3, "innerHTML"], ["alt", "News image", 3, "src"]], template: function NewsDetailComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NewsDetailComponent_Conditional_0_Template, 7, 6, "ion-content");
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.news ? 0 : -1);
  }
}, dependencies: [IonicModule, IonButton, IonContent, IonIcon, IonImg, CommonModule, NgClass, NgIf], styles: ["\n\nion-content[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: var(--ion-safe-area-top);\n}\nion-content[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2%;\n  left: 2%;\n}\nh1[_ngcontent-%COMP%]     p {\n  margin: 0;\n}\n.no-image[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n/*# sourceMappingURL=news-detail.component.css.map */"] });
var NewsDetailComponent = _NewsDetailComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewsDetailComponent, [{
    type: Component,
    args: [{ selector: "app-news-detail", imports: [IonicModule, CommonModule], template: `@if (news) {
<ion-content>
  <ion-button (click)="cancel()" shape="round" color="light">
    <ion-icon slot="icon-only" name="arrow-back"></ion-icon>
  </ion-button>
  <ion-img *ngIf="news.image" [src]="news.image" alt="News image"></ion-img>
  <div
    class="ion-padding ion-margin-bottom"
    [ngClass]="{ 'no-image': !news.image }"
  >
    <h1
      [innerHTML]="showdown(news.title || '')"
      class="ion-no-margin ion-margin-bottom ion-margin-top"
    ></h1>
    <div [innerHTML]="showdown(news.text || '')"></div>
  </div>
</ion-content>
}
`, styles: ["/* src/app/components/modals/news-detail/news-detail.component.scss */\nion-content {\n  position: absolute;\n  left: 0;\n  top: var(--ion-safe-area-top);\n}\nion-content ion-button {\n  position: absolute;\n  top: 2%;\n  left: 2%;\n}\nh1 ::ng-deep p {\n  margin: 0;\n}\n.no-image {\n  margin-top: 50px;\n}\n/*# sourceMappingURL=news-detail.component.css.map */\n"] }]
  }], () => [{ type: ModalController }], { news: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewsDetailComponent, { className: "NewsDetailComponent", filePath: "src/app/components/modals/news-detail/news-detail.component.ts", lineNumber: 16 });
})();

// src/app/services/api-wrappers/news.service.ts
var Showdown2 = __toESM(require_showdown());
var _NewsStateService = class _NewsStateService {
  constructor(modalCtrl, storageService, newsService, errorHandler) {
    this.modalCtrl = modalCtrl;
    this.storageService = storageService;
    this.newsService = newsService;
    this.errorHandler = errorHandler;
    this.state = new BehaviorSubject({ state: "no_news" });
    this.mandatoryState = signal({ state: "not_shown" });
    this.mandatoryDismissed = new EventEmitter();
    this.initMandatoryState();
    this.converter = new Showdown2.Converter();
  }
  // Initialize mandatory state from storage
  initMandatoryState() {
    return __async(this, null, function* () {
      try {
        const storedState = yield this.storageService.get("mandatory");
        if (storedState) {
          this.mandatoryState.set(storedState);
        }
      } catch (error) {
        this.errorHandler.handleError(error);
      }
    });
  }
  // Save mandatory state to storage
  saveMandatoryState() {
    return __async(this, null, function* () {
      try {
        yield this.storageService.set("mandatory", this.mandatoryState());
      } catch (error) {
        this.errorHandler.handleError(error);
      }
    });
  }
  getState() {
    return this.state.asObservable();
  }
  retrieveNews() {
    return __async(this, null, function* () {
      this.state.next({ state: "loading" });
      this.newsService.listNew({
        program: environment.program,
        program2: environment.program,
        status: "active",
        limit: 100
      }).subscribe((news) => __async(this, null, function* () {
        var _a;
        if (news.data) {
          news.data = news.data.map((item) => __spreadProps(__spreadValues({}, item), {
            title: item.title ? this.converter.makeHtml(item.title) : item.title,
            text: item.text ? this.converter.makeHtml(item.text) : item.text
          }));
        }
        yield this.storageService.set("news", news);
        const mandatoryNews = (_a = news.data) == null ? void 0 : _a.find((news2) => news2.priority === "highlighted");
        if (mandatoryNews && mandatoryNews.id) {
          yield this.updateMandatory(mandatoryNews);
        }
        if (!(news == null ? void 0 : news.data) || news.data.length === 0) {
          this.state.next({ state: "no_news" });
          return;
        }
        this.state.next({ state: "success", news: news.data });
      }), (error) => {
        this.errorHandler.handleError(error);
        this.state.next({
          state: "error",
          error: error instanceof Error ? error : new Error("Unknown error")
        });
      });
    });
  }
  updateMandatory(newMandatory) {
    return __async(this, null, function* () {
      var _a;
      const now = Date.now();
      if (!this.mandatoryState().state || this.mandatoryState().state === "shown" && ((_a = this.mandatoryState().lastShown) == null ? void 0 : _a.id) !== newMandatory.id || this.mandatoryState().state === "shown" && this.mandatoryState().lastShownTimestamp && now - this.mandatoryState().lastShownTimestamp >= 1e3 * 60 * 60 * 24) {
        this.mandatoryState.set({ state: "not_shown" });
      }
      yield this.saveMandatoryState();
    });
  }
  getNews() {
    const currentState = this.state.value;
    return currentState.state === "success" ? currentState.news : void 0;
  }
  getMandatory() {
    return __async(this, null, function* () {
      const currentState = this.state.value;
      if (currentState.state !== "success")
        return;
      return currentState.news.find((news) => news.priority === "highlighted");
    });
  }
  openDetail(news, type) {
    return __async(this, null, function* () {
      const modal = yield this.modalCtrl.create({
        component: NewsDetailComponent,
        componentProps: {
          news
        },
        initialBreakpoint: 1
      });
      yield modal.present();
      yield modal.onDidDismiss().then(() => __async(this, null, function* () {
        if (type === "mandatory") {
          this.mandatoryState.set({
            state: "shown",
            lastShownTimestamp: Date.now(),
            lastShown: news
          });
          yield this.saveMandatoryState();
          this.mandatoryDismissed.emit();
        }
      }));
    });
  }
};
_NewsStateService.\u0275fac = function NewsStateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewsStateService)(\u0275\u0275inject(ModalController), \u0275\u0275inject(StorageService), \u0275\u0275inject(NewsService), \u0275\u0275inject(ErrorHandlerService));
};
_NewsStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NewsStateService, factory: _NewsStateService.\u0275fac, providedIn: "root" });
var NewsStateService = _NewsStateService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewsStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: ModalController }, { type: StorageService }, { type: NewsService }, { type: ErrorHandlerService }], null);
})();

export {
  NewsStateService
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9jb21wb25lbnRzL21vZGFscy9uZXdzLWRldGFpbC9uZXdzLWRldGFpbC5jb21wb25lbnQudHMiLCAic3JjL2FwcC9jb21wb25lbnRzL21vZGFscy9uZXdzLWRldGFpbC9uZXdzLWRldGFpbC5jb21wb25lbnQuaHRtbCIsICJzcmMvYXBwL3NlcnZpY2VzL2FwaS13cmFwcGVycy9uZXdzLnNlcnZpY2UudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBMaXN0TmV3MjAwUmVzcG9uc2VBbGxPZkRhdGFJbm5lciB9IGZyb20gJ3NyYy9hcGktY3ljbGlzdCdcbmltcG9ydCB7IE1vZGFsQ29udHJvbGxlciB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyL3N0YW5kYWxvbmUnXG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJ1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJ1xuaW1wb3J0IHsgYWRkSWNvbnMgfSBmcm9tICdpb25pY29ucydcbmltcG9ydCB7IGFycm93QmFjayB9IGZyb20gJ2lvbmljb25zL2ljb25zJ1xuaW1wb3J0ICogYXMgU2hvd2Rvd24gZnJvbSAnc2hvd2Rvd24nXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLW5ld3MtZGV0YWlsJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbmV3cy1kZXRhaWwuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL25ld3MtZGV0YWlsLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgaW1wb3J0czogW0lvbmljTW9kdWxlLCBDb21tb25Nb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIE5ld3NEZXRhaWxDb21wb25lbnQge1xuICBASW5wdXQoKSBuZXdzOiBMaXN0TmV3MjAwUmVzcG9uc2VBbGxPZkRhdGFJbm5lclxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWxDdHJsOiBNb2RhbENvbnRyb2xsZXIpIHtcbiAgICBhZGRJY29ucyh7IGFycm93QmFjayB9KVxuICB9XG4gIGNhbmNlbCgpIHtcbiAgICB0aGlzLm1vZGFsQ3RybC5kaXNtaXNzKClcbiAgfVxuXG4gIHNob3dkb3duKHRleHQ6IHN0cmluZykge1xuICAgIGNvbnN0IGNvbnZlcnRlciA9IG5ldyBTaG93ZG93bi5Db252ZXJ0ZXIoKVxuICAgIHJldHVybiBjb252ZXJ0ZXIubWFrZUh0bWwodGV4dClcbiAgfVxufVxuIiwgIkBpZiAobmV3cykge1xuPGlvbi1jb250ZW50PlxuICA8aW9uLWJ1dHRvbiAoY2xpY2spPVwiY2FuY2VsKClcIiBzaGFwZT1cInJvdW5kXCIgY29sb3I9XCJsaWdodFwiPlxuICAgIDxpb24taWNvbiBzbG90PVwiaWNvbi1vbmx5XCIgbmFtZT1cImFycm93LWJhY2tcIj48L2lvbi1pY29uPlxuICA8L2lvbi1idXR0b24+XG4gIDxpb24taW1nICpuZ0lmPVwibmV3cy5pbWFnZVwiIFtzcmNdPVwibmV3cy5pbWFnZVwiIGFsdD1cIk5ld3MgaW1hZ2VcIj48L2lvbi1pbWc+XG4gIDxkaXZcbiAgICBjbGFzcz1cImlvbi1wYWRkaW5nIGlvbi1tYXJnaW4tYm90dG9tXCJcbiAgICBbbmdDbGFzc109XCJ7ICduby1pbWFnZSc6ICFuZXdzLmltYWdlIH1cIlxuICA+XG4gICAgPGgxXG4gICAgICBbaW5uZXJIVE1MXT1cInNob3dkb3duKG5ld3MudGl0bGUgfHwgJycpXCJcbiAgICAgIGNsYXNzPVwiaW9uLW5vLW1hcmdpbiBpb24tbWFyZ2luLWJvdHRvbSBpb24tbWFyZ2luLXRvcFwiXG4gICAgPjwvaDE+XG4gICAgPGRpdiBbaW5uZXJIVE1MXT1cInNob3dkb3duKG5ld3MudGV4dCB8fCAnJylcIj48L2Rpdj5cbiAgPC9kaXY+XG48L2lvbi1jb250ZW50PlxufVxuIiwgImltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5qZWN0YWJsZSwgc2lnbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnXG5pbXBvcnQge1xuICBMaXN0TmV3MjAwUmVzcG9uc2UsXG4gIExpc3ROZXcyMDBSZXNwb25zZUFsbE9mRGF0YUlubmVyLFxufSBmcm9tICdzcmMvYXBpLWN5Y2xpc3QnXG5pbXBvcnQgeyBNb2RhbENvbnRyb2xsZXIgfSBmcm9tICdAaW9uaWMvYW5ndWxhci9zdGFuZGFsb25lJ1xuaW1wb3J0IHsgTmV3c0RldGFpbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbW9kYWxzL25ld3MtZGV0YWlsL25ld3MtZGV0YWlsLmNvbXBvbmVudCdcbmltcG9ydCB7IFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vdXRpbHMvc3RvcmFnZS5zZXJ2aWNlJ1xuaW1wb3J0IHsgTmV3c1NlcnZpY2UgfSBmcm9tICdzcmMvYXBpLWN5Y2xpc3QnXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJ3NyYy9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnXG5pbXBvcnQgKiBhcyBTaG93ZG93biBmcm9tICdzaG93ZG93bidcbmltcG9ydCB7IEVycm9ySGFuZGxlclNlcnZpY2UgfSBmcm9tICcuLi91dGlscy9lcnJvci1oYW5kbGVyLnNlcnZpY2UnXG5cbmV4cG9ydCB0eXBlIE5ld3NTdGF0ZSA9XG4gIHwgeyBzdGF0ZTogJ2xvYWRpbmcnIH1cbiAgfCB7IHN0YXRlOiAnc3VjY2Vzcyc7IG5ld3M6IExpc3ROZXcyMDBSZXNwb25zZUFsbE9mRGF0YUlubmVyW10gfVxuICB8IHsgc3RhdGU6ICdub19uZXdzJyB9XG4gIHwgeyBzdGF0ZTogJ2Vycm9yJzsgZXJyb3I6IEVycm9yIH1cblxuZXhwb3J0IHR5cGUgTWFuZGF0b3J5TmV3c1N0YXRlID0ge1xuICBzdGF0ZTogJ25vdF9zaG93bicgfCAnc2hvd24nXG4gIGxhc3RTaG93blRpbWVzdGFtcD86IG51bWJlclxuICBsYXN0U2hvd24/OiBMaXN0TmV3MjAwUmVzcG9uc2VBbGxPZkRhdGFJbm5lclxufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTmV3c1N0YXRlU2VydmljZSB7XG4gIHByaXZhdGUgc3RhdGUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PE5ld3NTdGF0ZT4oeyBzdGF0ZTogJ25vX25ld3MnIH0pXG4gIHB1YmxpYyBtYW5kYXRvcnlTdGF0ZSA9IHNpZ25hbDxNYW5kYXRvcnlOZXdzU3RhdGU+KHsgc3RhdGU6ICdub3Rfc2hvd24nIH0pXG4gIHB1YmxpYyBtYW5kYXRvcnlEaXNtaXNzZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KClcbiAgcHJpdmF0ZSBjb252ZXJ0ZXI6IFNob3dkb3duLkNvbnZlcnRlclxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbW9kYWxDdHJsOiBNb2RhbENvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSBzdG9yYWdlU2VydmljZTogU3RvcmFnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBuZXdzU2VydmljZTogTmV3c1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBlcnJvckhhbmRsZXI6IEVycm9ySGFuZGxlclNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5pbml0TWFuZGF0b3J5U3RhdGUoKVxuICAgIHRoaXMuY29udmVydGVyID0gbmV3IFNob3dkb3duLkNvbnZlcnRlcigpXG4gIH1cblxuICAvLyBJbml0aWFsaXplIG1hbmRhdG9yeSBzdGF0ZSBmcm9tIHN0b3JhZ2VcbiAgcHJpdmF0ZSBhc3luYyBpbml0TWFuZGF0b3J5U3RhdGUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHN0b3JlZFN0YXRlID0gYXdhaXQgdGhpcy5zdG9yYWdlU2VydmljZS5nZXQoJ21hbmRhdG9yeScpXG4gICAgICBpZiAoc3RvcmVkU3RhdGUpIHtcbiAgICAgICAgdGhpcy5tYW5kYXRvcnlTdGF0ZS5zZXQoc3RvcmVkU3RhdGUpXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKGVycm9yKVxuICAgIH1cbiAgfVxuXG4gIC8vIFNhdmUgbWFuZGF0b3J5IHN0YXRlIHRvIHN0b3JhZ2VcbiAgcHVibGljIGFzeW5jIHNhdmVNYW5kYXRvcnlTdGF0ZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5zdG9yYWdlU2VydmljZS5zZXQoJ21hbmRhdG9yeScsIHRoaXMubWFuZGF0b3J5U3RhdGUoKSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgZ2V0U3RhdGUoKTogT2JzZXJ2YWJsZTxOZXdzU3RhdGU+IHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5hc09ic2VydmFibGUoKVxuICB9XG5cbiAgYXN5bmMgcmV0cmlldmVOZXdzKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuc3RhdGUubmV4dCh7IHN0YXRlOiAnbG9hZGluZycgfSlcbiAgICB0aGlzLm5ld3NTZXJ2aWNlXG4gICAgICAubGlzdE5ldyh7XG4gICAgICAgIHByb2dyYW06IGVudmlyb25tZW50LnByb2dyYW0sXG4gICAgICAgIHByb2dyYW0yOiBlbnZpcm9ubWVudC5wcm9ncmFtLFxuICAgICAgICBzdGF0dXM6ICdhY3RpdmUnLFxuICAgICAgICBsaW1pdDogMTAwLFxuICAgICAgfSlcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIGFzeW5jIChuZXdzOiBMaXN0TmV3MjAwUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAvLyBDb252ZXJ0aXIgbGUgbWFya2Rvd24gZW4gSFRNTCBwb3VyIGNoYXF1ZSBuZXdzXG4gICAgICAgICAgaWYgKG5ld3MuZGF0YSkge1xuICAgICAgICAgICAgbmV3cy5kYXRhID0gbmV3cy5kYXRhLm1hcCgoaXRlbSkgPT4gKHtcbiAgICAgICAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGVcbiAgICAgICAgICAgICAgICA/IHRoaXMuY29udmVydGVyLm1ha2VIdG1sKGl0ZW0udGl0bGUpXG4gICAgICAgICAgICAgICAgOiBpdGVtLnRpdGxlLFxuICAgICAgICAgICAgICB0ZXh0OiBpdGVtLnRleHQgPyB0aGlzLmNvbnZlcnRlci5tYWtlSHRtbChpdGVtLnRleHQpIDogaXRlbS50ZXh0LFxuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYXdhaXQgdGhpcy5zdG9yYWdlU2VydmljZS5zZXQoJ25ld3MnLCBuZXdzKVxuXG4gICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUncyBhIG1hbmRhdG9yeSBuZXdzIGFuZCB1cGRhdGUgc3RhdGUgYWNjb3JkaW5nbHlcbiAgICAgICAgICBjb25zdCBtYW5kYXRvcnlOZXdzID0gbmV3cy5kYXRhPy5maW5kKFxuICAgICAgICAgICAgKG5ld3MpID0+IG5ld3MucHJpb3JpdHkgPT09ICdoaWdobGlnaHRlZCdcbiAgICAgICAgICApXG4gICAgICAgICAgaWYgKG1hbmRhdG9yeU5ld3MgJiYgbWFuZGF0b3J5TmV3cy5pZCkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVNYW5kYXRvcnkobWFuZGF0b3J5TmV3cylcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIW5ld3M/LmRhdGEgfHwgbmV3cy5kYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5uZXh0KHsgc3RhdGU6ICdub19uZXdzJyB9KVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5zdGF0ZS5uZXh0KHsgc3RhdGU6ICdzdWNjZXNzJywgbmV3czogbmV3cy5kYXRhIH0pXG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcjogRXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihlcnJvcilcbiAgICAgICAgICB0aGlzLnN0YXRlLm5leHQoe1xuICAgICAgICAgICAgc3RhdGU6ICdlcnJvcicsXG4gICAgICAgICAgICBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yIDogbmV3IEVycm9yKCdVbmtub3duIGVycm9yJyksXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyB1cGRhdGVNYW5kYXRvcnkoXG4gICAgbmV3TWFuZGF0b3J5OiBMaXN0TmV3MjAwUmVzcG9uc2VBbGxPZkRhdGFJbm5lclxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpXG4gICAgLy9SZXNldCBtYW5kYXRvcnkgY29uZGl0aW9uc1xuICAgIGlmIChcbiAgICAgICF0aGlzLm1hbmRhdG9yeVN0YXRlKCkuc3RhdGUgfHxcbiAgICAgICh0aGlzLm1hbmRhdG9yeVN0YXRlKCkuc3RhdGUgPT09ICdzaG93bicgJiZcbiAgICAgICAgdGhpcy5tYW5kYXRvcnlTdGF0ZSgpLmxhc3RTaG93bj8uaWQgIT09IG5ld01hbmRhdG9yeS5pZCkgfHxcbiAgICAgICh0aGlzLm1hbmRhdG9yeVN0YXRlKCkuc3RhdGUgPT09ICdzaG93bicgJiZcbiAgICAgICAgdGhpcy5tYW5kYXRvcnlTdGF0ZSgpLmxhc3RTaG93blRpbWVzdGFtcCAmJlxuICAgICAgICBub3cgLSB0aGlzLm1hbmRhdG9yeVN0YXRlKCkubGFzdFNob3duVGltZXN0YW1wISA+PSAxMDAwICogNjAgKiA2MCAqIDI0KVxuICAgICkge1xuICAgICAgdGhpcy5tYW5kYXRvcnlTdGF0ZS5zZXQoeyBzdGF0ZTogJ25vdF9zaG93bicgfSlcbiAgICB9XG4gICAgLy8gU2F2ZSBzdGF0ZSB0byBzdG9yYWdlIGFmdGVyIHVwZGF0aW5nXG4gICAgYXdhaXQgdGhpcy5zYXZlTWFuZGF0b3J5U3RhdGUoKVxuICB9XG5cbiAgZ2V0TmV3cygpOiBMaXN0TmV3MjAwUmVzcG9uc2VBbGxPZkRhdGFJbm5lcltdIHwgdW5kZWZpbmVkIHtcbiAgICBjb25zdCBjdXJyZW50U3RhdGUgPSB0aGlzLnN0YXRlLnZhbHVlXG4gICAgcmV0dXJuIGN1cnJlbnRTdGF0ZS5zdGF0ZSA9PT0gJ3N1Y2Nlc3MnID8gY3VycmVudFN0YXRlLm5ld3MgOiB1bmRlZmluZWRcbiAgfVxuXG4gIGFzeW5jIGdldE1hbmRhdG9yeSgpOiBQcm9taXNlPExpc3ROZXcyMDBSZXNwb25zZUFsbE9mRGF0YUlubmVyIHwgdW5kZWZpbmVkPiB7XG4gICAgY29uc3QgY3VycmVudFN0YXRlID0gdGhpcy5zdGF0ZS52YWx1ZVxuICAgIGlmIChjdXJyZW50U3RhdGUuc3RhdGUgIT09ICdzdWNjZXNzJykgcmV0dXJuXG4gICAgcmV0dXJuIGN1cnJlbnRTdGF0ZS5uZXdzLmZpbmQoKG5ld3MpID0+IG5ld3MucHJpb3JpdHkgPT09ICdoaWdobGlnaHRlZCcpXG4gIH1cblxuICBhc3luYyBvcGVuRGV0YWlsKFxuICAgIG5ld3M6IExpc3ROZXcyMDBSZXNwb25zZUFsbE9mRGF0YUlubmVyLFxuICAgIHR5cGU6ICdtYW5kYXRvcnknIHwgJ25ld3MnXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IG1vZGFsID0gYXdhaXQgdGhpcy5tb2RhbEN0cmwuY3JlYXRlKHtcbiAgICAgIGNvbXBvbmVudDogTmV3c0RldGFpbENvbXBvbmVudCxcbiAgICAgIGNvbXBvbmVudFByb3BzOiB7XG4gICAgICAgIG5ld3M6IG5ld3MsXG4gICAgICB9LFxuICAgICAgaW5pdGlhbEJyZWFrcG9pbnQ6IDEsXG4gICAgfSlcbiAgICBhd2FpdCBtb2RhbC5wcmVzZW50KClcblxuICAgIGF3YWl0IG1vZGFsLm9uRGlkRGlzbWlzcygpLnRoZW4oYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKHR5cGUgPT09ICdtYW5kYXRvcnknKSB7XG4gICAgICAgIC8vIFVwZGF0ZSBzdGF0ZSB0byBzaG93biB3aXRoIHRpbWVzdGFtcCBhbmQgSUQgYWZ0ZXIgZGlzbWlzc2FsXG4gICAgICAgIHRoaXMubWFuZGF0b3J5U3RhdGUuc2V0KHtcbiAgICAgICAgICBzdGF0ZTogJ3Nob3duJyxcbiAgICAgICAgICBsYXN0U2hvd25UaW1lc3RhbXA6IERhdGUubm93KCksXG4gICAgICAgICAgbGFzdFNob3duOiBuZXdzLFxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIFNhdmUgc3RhdGUgdG8gc3RvcmFnZSBhZnRlciB1cGRhdGluZ1xuICAgICAgICBhd2FpdCB0aGlzLnNhdmVNYW5kYXRvcnlTdGF0ZSgpXG5cbiAgICAgICAgLy8gRW1pdCBldmVudCB3aGVuIG1hbmRhdG9yeSBuZXdzIGlzIGRpc21pc3NlZFxuICAgICAgICB0aGlzLm1hbmRhdG9yeURpc21pc3NlZC5lbWl0KClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQSxlQUEwQjs7OztBQ0Z4QixJQUFBLG9CQUFBLEdBQUEsV0FBQSxDQUFBOzs7O0FBQTRCLElBQUEscUJBQUEsT0FBQSxPQUFBLEtBQUEsS0FBQTs7Ozs7O0FBSjlCLElBQUEseUJBQUEsR0FBQSxhQUFBLEVBQWEsR0FBQSxjQUFBLENBQUE7QUFDQyxJQUFBLHFCQUFBLFNBQUEsU0FBQSx5RUFBQTtBQUFBLE1BQUEsd0JBQUEsR0FBQTtBQUFBLFlBQUEsU0FBQSx3QkFBQTtBQUFBLGFBQUEsc0JBQVMsT0FBQSxPQUFBLENBQVE7SUFBQSxDQUFBO0FBQzNCLElBQUEsb0JBQUEsR0FBQSxZQUFBLENBQUE7QUFDRixJQUFBLHVCQUFBO0FBQ0EsSUFBQSxxQkFBQSxHQUFBLHNEQUFBLEdBQUEsR0FBQSxXQUFBLENBQUE7QUFDQSxJQUFBLHlCQUFBLEdBQUEsT0FBQSxDQUFBO0FBSUUsSUFBQSxvQkFBQSxHQUFBLE1B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LGFBQWEsWUFBWSxLQUFLO0FBQ25DLGFBQUssTUFBTSxLQUFLO1VBQ2QsT0FBTztVQUNQLE9BQU8saUJBQWlCLFFBQVEsUUFBUSxJQUFJLE1BQU0sZUFBZTtTQUNsRTtNQUNILENBQUM7SUFFUDs7RUFFYyxnQkFDWixjQUE4Qzs7QUF4SGxEO0FBMEhJLFlBQU0sTUFBTSxLQUFLLElBQUc7QUFFcEIsVUFDRSxDQUFDLEtBQUssZUFBYyxFQUFHLFNBQ3RCLEtBQUssZUFBYyxFQUFHLFVBQVUsYUFDL0IsVUFBSyxlQUFjLEVBQUcsY0FBdEIsbUJBQWlDLFFBQU8sYUFBYSxNQUN0RCxLQUFLLGVBQWMsRUFBRyxVQUFVLFdBQy9CLEtBQUssZUFBYyxFQUFHLHNCQUN0QixNQUFNLEtBQUssZUFBYyxFQUFHLHNCQUF1QixNQUFPLEtBQUssS0FBSyxJQUN0RTtBQUNBLGFBQUssZUFBZSxJQUFJLEVBQUUsT0FBTyxZQUFXLENBQUU7TUFDaEQ7QUFFQSxZQUFNLEtBQUssbUJBQWtCO0lBQy9COztFQUVBLFVBQU87QUFDTCxVQUFNLGVBQWUsS0FBSyxNQUFNO0FBQ2hDLFdBQU8sYUFBYSxVQUFVLFlBQVksYUFBYSxPQUFPO0VBQ2hFO0VBRU0sZUFBWTs7QUFDaEIsWUFBTSxlQUFlLEtBQUssTUFBTTtBQUNoQyxVQUFJLGFBQWEsVUFBVTtBQUFXO0FBQ3RDLGFBQU8sYUFBYSxLQUFLLEtBQUssQ0FBQyxTQUFTLEtBQUssYUFBYSxhQUFhO0lBQ3pFOztFQUVNLFdBQ0osTUFDQSxNQUEwQjs7QUFFMUIsWUFBTSxRQUFRLE1BQU0sS0FBSyxVQUFVLE9BQU87UUFDeEMsV0FBVztRQUNYLGdCQUFnQjtVQUNkOztRQUVGLG1CQUFtQjtPQUNwQjtBQUNELFlBQU0sTUFBTSxRQUFPO0FBRW5CLFlBQU0sTUFBTSxhQUFZLEVBQUcsS0FBSyxNQUFXO0FBQ3pDLFlBQUksU0FBUyxhQUFhO0FBRXhCLGVBQUssZUFBZSxJQUFJO1lBQ3RCLE9BQU87WUFDUCxvQkFBb0IsS0FBSyxJQUFHO1lBQzVCLFdBQVc7V0FDWjtBQUdELGdCQUFNLEtBQUssbUJBQWtCO0FBRzdCLGVBQUssbUJBQW1CLEtBQUk7UUFDOUI7TUFDRixFQUFDO0lBQ0g7Ozs7bUNBckpXLG1CQUFnQixtQkFBQSxlQUFBLEdBQUEsbUJBQUEsY0FBQSxHQUFBLG1CQUFBLFdBQUEsR0FBQSxtQkFBQSxtQkFBQSxDQUFBO0FBQUE7cUZBQWhCLG1CQUFnQixTQUFoQixrQkFBZ0IsV0FBQSxZQUZmLE9BQU0sQ0FBQTtBQUVkLElBQU8sbUJBQVA7O3NFQUFPLGtCQUFnQixDQUFBO1VBSDVCO1dBQVc7TUFDVixZQUFZO0tBQ2I7OzsiLAogICJuYW1lcyI6IFsiU2hvd2Rvd24iLCAibmV3cyJdCn0K
