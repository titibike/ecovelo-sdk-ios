import {
  CguService
} from "./chunk-ZRNIHMT6.js";
import {
  IonContent,
  IonProgressBar,
  IonicModule
} from "./chunk-Y4K6NO5T.js";
import {
  addIcons,
  close
} from "./chunk-3E6DEK7U.js";
import {
  CommonModule,
  Component,
  ModalController,
  TranslateModule,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵsanitizeHtml,
  ɵɵtemplate
} from "./chunk-DGENMXJW.js";

// src/app/components/modals/cgu/cgu.component.ts
function CguComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-progress-bar", 1);
  }
}
function CguComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("innerHTML", ctx_r0.cguLoadingState.terms, \u0275\u0275sanitizeHtml);
  }
}
var _CguComponent = class _CguComponent {
  constructor(modalCtrl, cguService) {
    this.modalCtrl = modalCtrl;
    this.cguService = cguService;
    this.cguLoadingState = { state: "loading" };
    this.cguService.cguLoadingState.subscribe((state) => {
      this.cguLoadingState = state;
    });
    addIcons({ close });
  }
  dismiss() {
    this.modalCtrl.dismiss();
  }
};
_CguComponent.\u0275fac = function CguComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CguComponent)(\u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(CguService));
};
_CguComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CguComponent, selectors: [["app-cgu"]], decls: 3, vars: 1, consts: [[1, "ion-padding"], ["type", "indeterminate"], [3, "innerHTML"]], template: function CguComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content", 0);
    \u0275\u0275template(1, CguComponent_Conditional_1_Template, 1, 0, "ion-progress-bar", 1)(2, CguComponent_Conditional_2_Template, 1, 1, "div", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.cguLoadingState.state === "loading" ? 1 : ctx.cguLoadingState.state === "success" ? 2 : -1);
  }
}, dependencies: [CommonModule, IonicModule, IonContent, IonProgressBar, TranslateModule], encapsulation: 2 });
var CguComponent = _CguComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CguComponent, [{
    type: Component,
    args: [{ selector: "app-cgu", imports: [CommonModule, IonicModule, TranslateModule], template: `<ion-content class="ion-padding">
  @if (cguLoadingState.state === 'loading') {
  <ion-progress-bar type="indeterminate"></ion-progress-bar>
  } @else if (cguLoadingState.state === 'success') {
  <div [innerHTML]="cguLoadingState.terms"></div>
  }
</ion-content>
` }]
  }], () => [{ type: ModalController }, { type: CguService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CguComponent, { className: "CguComponent", filePath: "src/app/components/modals/cgu/cgu.component.ts", lineNumber: 19 });
})();

export {
  CguComponent
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9jb21wb25lbnRzL21vZGFscy9jZ3UvY2d1LmNvbXBvbmVudC50cyIsICJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWxzL2NndS9jZ3UuY29tcG9uZW50Lmh0bWwiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nXG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJ1xuaW1wb3J0IHsgTW9kYWxDb250cm9sbGVyIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXIvc3RhbmRhbG9uZSdcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnXG5pbXBvcnQgeyBhZGRJY29ucyB9IGZyb20gJ2lvbmljb25zJ1xuaW1wb3J0IHsgY2xvc2UgfSBmcm9tICdpb25pY29ucy9pY29ucydcbmltcG9ydCB7XG4gIENndVNlcnZpY2UsXG4gIGNndUxvYWRpbmdTdGF0ZSxcbn0gZnJvbSAnc3JjL2FwcC9zZXJ2aWNlcy9hcGktd3JhcHBlcnMvY2d1LnNlcnZpY2UnXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLWNndScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NndS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vY2d1LmNvbXBvbmVudC5zY3NzJ10sXG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSW9uaWNNb2R1bGUsIFRyYW5zbGF0ZU1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQ2d1Q29tcG9uZW50IHtcbiAgcHVibGljIGNndUxvYWRpbmdTdGF0ZTogY2d1TG9hZGluZ1N0YXRlID0geyBzdGF0ZTogJ2xvYWRpbmcnIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBtb2RhbEN0cmw6IE1vZGFsQ29udHJvbGxlcixcbiAgICBwcml2YXRlIGNndVNlcnZpY2U6IENndVNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5jZ3VTZXJ2aWNlLmNndUxvYWRpbmdTdGF0ZS5zdWJzY3JpYmUoKHN0YXRlKSA9PiB7XG4gICAgICB0aGlzLmNndUxvYWRpbmdTdGF0ZSA9IHN0YXRlXG4gICAgfSlcbiAgICBhZGRJY29ucyh7IGNsb3NlIH0pXG4gIH1cblxuICBkaXNtaXNzKCkge1xuICAgIHRoaXMubW9kYWxDdHJsLmRpc21pc3MoKVxuICB9XG59XG4iLCAiPGlvbi1jb250ZW50IGNsYXNzPVwiaW9uLXBhZGRpbmdcIj5cbiAgQGlmIChjZ3VMb2FkaW5nU3RhdGUuc3RhdGUgPT09ICdsb2FkaW5nJykge1xuICA8aW9uLXByb2dyZXNzLWJhciB0eXBlPVwiaW5kZXRlcm1pbmF0ZVwiPjwvaW9uLXByb2dyZXNzLWJhcj5cbiAgfSBAZWxzZSBpZiAoY2d1TG9hZGluZ1N0YXRlLnN0YXRlID09PSAnc3VjY2VzcycpIHtcbiAgPGRpdiBbaW5uZXJIVE1MXT1cImNndUxvYWRpbmdTdGF0ZS50ZXJtc1wiPjwvZGl2PlxuICB9XG48L2lvbi1jb250ZW50PlxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNFRSxJQUFBLG9CQUFBLEdBQUEsb0JBQUEsQ0FBQTs7Ozs7QUFFQSxJQUFBLG9CQUFBLEdBQUEsT0FBQSxDQUFBOzs7O0FBQUssSUFBQSxxQkFBQSxhQUFBLE9BQUEsZ0JBQUEsT0FBQSx3QkFBQTs7O0FEY0QsSUFBTyxnQkFBUCxNQUFPLGNBQVk7RUFFdkIsWUFDVSxXQUNBLFlBQXNCO0FBRHRCLFNBQUEsWUFBQTtBQUNBLFNBQUEsYUFBQTtBQUhILFNBQUEsa0JBQW1DLEVBQUUsT0FBTyxVQUFTO0FBSzFELFNBQUssV0FBVyxnQkFBZ0IsVUFBVSxDQUFDLFVBQVM7QUFDbEQsV0FBSyxrQkFBa0I7SUFDekIsQ0FBQztBQUNELGFBQVMsRUFBRSxNQUFLLENBQUU7RUFDcEI7RUFFQSxVQUFPO0FBQ0wsU0FBSyxVQUFVLFFBQU87RUFDeEI7OzttQ0FkVyxlQUFZLDRCQUFBLGVBQUEsR0FBQSw0QkFBQSxVQUFBLENBQUE7QUFBQTs4RUFBWixlQUFZLFdBQUEsQ0FBQSxDQUFBLFNBQUEsQ0FBQSxHQUFBLE9BQUEsR0FBQSxNQUFBLEdBQUEsUUFBQSxDQUFBLENBQUEsR0FBQSxhQUFBLEdBQUEsQ0FBQSxRQUFBLGVBQUEsR0FBQSxDQUFBLEdBQUEsV0FBQSxDQUFBLEdBQUEsVUFBQSxTQUFBLHNCQUFBLElBQUEsS0FBQTtBQUFBLE1BQUEsS0FBQSxHQUFBO0FDbEJ6QixJQUFBLHlCQUFBLEdBQUEsZUFBQSxDQUFBO0FBQ0UsSUFBQSxxQkFBQSxHQUFBLHFDQUFBLEdBQUEsR0FBQSxvQkFBQSxDQUFBLEVBQTJDLEdBQUEscUNBQUEsR0FBQSxHQUFBLE9BQUEsQ0FBQTtBQUs3QyxJQUFBLHVCQUFBOzs7QUFMRSxJQUFBLG9CQUFBO0FBQUEsSUFBQSx3QkFBQSxJQUFBLGdCQUFBLFVBQUEsWUFBQSxJQUFBLElBQUEsZ0JBQUEsVUFBQSxZQUFBLElBQUEsRUFBQTs7a0JEZVksY0FBYyxhQUFXLFlBQUEsZ0JBQUUsZUFBZSxHQUFBLGVBQUEsRUFBQSxDQUFBO0FBRWxELElBQU8sZUFBUDs7c0VBQU8sY0FBWSxDQUFBO1VBTnhCO3VCQUNhLFdBQVMsU0FHVixDQUFDLGNBQWMsYUFBYSxlQUFlLEdBQUMsVUFBQTs7Ozs7OztFQUFBLENBQUE7Ozs7NkVBRTVDLGNBQVksRUFBQSxXQUFBLGdCQUFBLFVBQUEsa0RBQUEsWUFBQSxHQUFBLENBQUE7QUFBQSxHQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
