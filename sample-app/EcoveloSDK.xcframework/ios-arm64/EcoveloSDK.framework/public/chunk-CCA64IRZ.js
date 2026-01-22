import {
  StorageService
} from "./chunk-U6SJAXLK.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-DGENMXJW.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// src/app/services/utils/personnalisation.service.ts
var _PersonnalisationService = class _PersonnalisationService {
  constructor(storage) {
    this.storage = storage;
  }
  setColors() {
    return __async(this, null, function* () {
      const program = yield this.storage.get("program");
      if (!program || !program.config.colors) {
        return;
      }
      const htmlEl = document.querySelector("html");
      if (htmlEl) {
        htmlEl.style.setProperty("--ion-color-primary", program.config.colors.primary);
        htmlEl.style.setProperty("--ion-color-primary-shade", this.adjust(program.config.colors.primary, -30));
        htmlEl.style.setProperty("--ion-color-primary-tint", this.adjust(program.config.colors.primary, 30));
        htmlEl.style.setProperty("--ion-color-secondary", program.config.colors.secondary);
        htmlEl.style.setProperty("--ion-color-secondary-shade", this.adjust(program.config.colors.secondary, -30));
        htmlEl.style.setProperty("--ion-color-secondary-tint", this.adjust(program.config.colors.secondary, 30));
      }
    });
  }
  adjust(color, amount) {
    return "#" + color.replace(/^#/, "").replace(/../g, (color2) => ("0" + Math.min(255, Math.max(0, parseInt(color2, 16) + amount)).toString(16)).substr(-2));
  }
  setTitle() {
    return __async(this, null, function* () {
      const program = yield this.storage.get("program");
      if (!program || !program.name) {
        return;
      }
      document.title = program.name;
    });
  }
};
_PersonnalisationService.\u0275fac = function PersonnalisationService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PersonnalisationService)(\u0275\u0275inject(StorageService));
};
_PersonnalisationService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PersonnalisationService, factory: _PersonnalisationService.\u0275fac, providedIn: "root" });
var PersonnalisationService = _PersonnalisationService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PersonnalisationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: StorageService }], null);
})();

export {
  PersonnalisationService
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9zZXJ2aWNlcy91dGlscy9wZXJzb25uYWxpc2F0aW9uLnNlcnZpY2UudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnXG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gJy4vc3RvcmFnZS5zZXJ2aWNlJ1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUGVyc29ubmFsaXNhdGlvblNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JhZ2U6IFN0b3JhZ2VTZXJ2aWNlKSB7fVxuXG4gIGFzeW5jIHNldENvbG9ycygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBwcm9ncmFtID0gYXdhaXQgdGhpcy5zdG9yYWdlLmdldCgncHJvZ3JhbScpXG4gICAgaWYgKCFwcm9ncmFtIHx8ICFwcm9ncmFtLmNvbmZpZy5jb2xvcnMpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBodG1sRWw6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKVxuICAgIGlmIChodG1sRWwpIHtcbiAgICAgIGh0bWxFbC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICAgJy0taW9uLWNvbG9yLXByaW1hcnknLFxuICAgICAgICBwcm9ncmFtLmNvbmZpZy5jb2xvcnMucHJpbWFyeVxuICAgICAgKVxuICAgICAgaHRtbEVsLnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICAnLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZScsXG4gICAgICAgIHRoaXMuYWRqdXN0KHByb2dyYW0uY29uZmlnLmNvbG9ycy5wcmltYXJ5LCAtMzApXG4gICAgICApXG4gICAgICBodG1sRWwuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAgICctLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQnLFxuICAgICAgICB0aGlzLmFkanVzdChwcm9ncmFtLmNvbmZpZy5jb2xvcnMucHJpbWFyeSwgMzApXG4gICAgICApXG4gICAgICBodG1sRWwuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAgICctLWlvbi1jb2xvci1zZWNvbmRhcnknLFxuICAgICAgICBwcm9ncmFtLmNvbmZpZy5jb2xvcnMuc2Vjb25kYXJ5XG4gICAgICApXG4gICAgICBodG1sRWwuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAgICctLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGUnLFxuICAgICAgICB0aGlzLmFkanVzdChwcm9ncmFtLmNvbmZpZy5jb2xvcnMuc2Vjb25kYXJ5LCAtMzApXG4gICAgICApXG4gICAgICBodG1sRWwuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAgICctLWlvbi1jb2xvci1zZWNvbmRhcnktdGludCcsXG4gICAgICAgIHRoaXMuYWRqdXN0KHByb2dyYW0uY29uZmlnLmNvbG9ycy5zZWNvbmRhcnksIDMwKVxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRqdXN0KGNvbG9yOiBzdHJpbmcsIGFtb3VudDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKFxuICAgICAgJyMnICtcbiAgICAgIGNvbG9yXG4gICAgICAgIC5yZXBsYWNlKC9eIy8sICcnKVxuICAgICAgICAucmVwbGFjZSgvLi4vZywgKGNvbG9yKSA9PlxuICAgICAgICAgIChcbiAgICAgICAgICAgICcwJyArXG4gICAgICAgICAgICBNYXRoLm1pbigyNTUsIE1hdGgubWF4KDAsIHBhcnNlSW50KGNvbG9yLCAxNikgKyBhbW91bnQpKS50b1N0cmluZyhcbiAgICAgICAgICAgICAgMTZcbiAgICAgICAgICAgIClcbiAgICAgICAgICApLnN1YnN0cigtMilcbiAgICAgICAgKVxuICAgIClcbiAgfVxuXG4gIGFzeW5jIHNldFRpdGxlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHByb2dyYW0gPSBhd2FpdCB0aGlzLnN0b3JhZ2UuZ2V0KCdwcm9ncmFtJylcbiAgICBpZiAoIXByb2dyYW0gfHwgIXByb2dyYW0ubmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGRvY3VtZW50LnRpdGxlID0gcHJvZ3JhbS5uYW1lXG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7O0FBT00sSUFBTywyQkFBUCxNQUFPLHlCQUF1QjtFQUNsQyxZQUFvQixTQUF1QjtBQUF2QixTQUFBLFVBQUE7RUFBMEI7RUFFeEMsWUFBUzs7QUFDYixZQUFNLFVBQVUsTUFBTSxLQUFLLFFBQVEsSUFBSSxTQUFTO0FBQ2hELFVBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxPQUFPLFFBQVE7QUFDdEM7TUFDRjtBQUNBLFlBQU0sU0FBNkIsU0FBUyxjQUFjLE1BQU07QUFDaEUsVUFBSSxRQUFRO0FBQ1YsZUFBTyxNQUFNLFlBQ1gsdUJBQ0EsUUFBUSxPQUFPLE9BQU8sT0FBTztBQUUvQixlQUFPLE1BQU0sWUFDWCw2QkFDQSxLQUFLLE9BQU8sUUFBUSxPQUFPLE9BQU8sU0FBUyxHQUFHLENBQUM7QUFFakQsZUFBTyxNQUFNLFlBQ1gsNEJBQ0EsS0FBSyxPQUFPLFFBQVEsT0FBTyxPQUFPLFNBQVMsRUFBRSxDQUFDO0FBRWhELGVBQU8sTUFBTSxZQUNYLHlCQUNBLFFBQVEsT0FBTyxPQUFPLFNBQVM7QUFFakMsZUFBTyxNQUFNLFlBQ1gsK0JBQ0EsS0FBSyxPQUFPLFFBQVEsT0FBTyxPQUFPLFdBQVcsR0FBRyxDQUFDO0FBRW5ELGVBQU8sTUFBTSxZQUNYLDhCQUNBLEtBQUssT0FBTyxRQUFRLE9BQU8sT0FBTyxXQUFXLEVBQUUsQ0FBQztNQUVwRDtJQUNGOztFQUVRLE9BQU8sT0FBZSxRQUFjO0FBQzFDLFdBQ0UsTUFDQSxNQUNHLFFBQVEsTUFBTSxFQUFFLEVBQ2hCLFFBQVEsT0FBTyxDQUFDQSxZQUViLE1BQ0EsS0FBSyxJQUFJLEtBQUssS0FBSyxJQUFJLEdBQUcsU0FBU0EsUUFBTyxFQUFFLElBQUksTUFBTSxDQUFDLEVBQUUsU0FDdkQsRUFBRSxHQUVKLE9BQU8sRUFBRSxDQUFDO0VBR3BCO0VBRU0sV0FBUTs7QUFDWixZQUFNLFVBQVUsTUFBTSxLQUFLLFFBQVEsSUFBSSxTQUFTO0FBQ2hELFVBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxNQUFNO0FBQzdCO01BQ0Y7QUFDQSxlQUFTLFFBQVEsUUFBUTtJQUMzQjs7OzttQ0EzRFcsMEJBQXVCLG1CQUFBLGNBQUEsQ0FBQTtBQUFBOzRGQUF2QiwwQkFBdUIsU0FBdkIseUJBQXVCLFdBQUEsWUFGdEIsT0FBTSxDQUFBO0FBRWQsSUFBTywwQkFBUDs7c0VBQU8seUJBQXVCLENBQUE7VUFIbkM7V0FBVztNQUNWLFlBQVk7S0FDYjs7OyIsCiAgIm5hbWVzIjogWyJjb2xvciJdCn0K
