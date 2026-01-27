import {
  eye,
  eyeOff
} from "./chunk-D4BGZ3LF.js";
import {
  createColorClasses
} from "./chunk-5VP4V3BN.js";
import {
  getIonMode
} from "./chunk-TXLH22R2.js";
import {
  Host,
  getElement,
  h,
  printIonWarning,
  registerInstance
} from "./chunk-BFPTXCSH.js";
import "./chunk-UESUV5PM.js";

// node_modules/@ionic/core/dist/esm/ion-input-password-toggle.entry.js
var iosInputPasswordToggleCss = "";
var mdInputPasswordToggleCss = "";
var InputPasswordToggle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.type = "password";
    this.togglePasswordVisibility = () => {
      const {
        inputElRef
      } = this;
      if (!inputElRef) {
        return;
      }
      inputElRef.type = inputElRef.type === "text" ? "password" : "text";
    };
  }
  /**
   * Whenever the input type changes we need to re-run validation to ensure the password
   * toggle is being used with the correct input type. If the application changes the type
   * outside of this component we also need to re-render so the correct icon is shown.
   */
  onTypeChange(newValue) {
    if (newValue !== "text" && newValue !== "password") {
      printIonWarning(`[ion-input-password-toggle] - Only inputs of type "text" or "password" are supported. Input of type "${newValue}" is not compatible.`, this.el);
      return;
    }
  }
  connectedCallback() {
    const {
      el
    } = this;
    const inputElRef = this.inputElRef = el.closest("ion-input");
    if (!inputElRef) {
      printIonWarning("[ion-input-password-toggle] - No ancestor ion-input found. This component must be slotted inside of an ion-input.", el);
      return;
    }
    this.type = inputElRef.type;
  }
  disconnectedCallback() {
    this.inputElRef = null;
  }
  render() {
    var _a, _b;
    const {
      color,
      type
    } = this;
    const mode = getIonMode(this);
    const showPasswordIcon = (_a = this.showIcon) !== null && _a !== void 0 ? _a : eye;
    const hidePasswordIcon = (_b = this.hideIcon) !== null && _b !== void 0 ? _b : eyeOff;
    const isPasswordVisible = type === "text";
    return h(Host, {
      key: "91bc55664d496fe457518bd112865dd7811d0c17",
      class: createColorClasses(color, {
        [mode]: true
      })
    }, h("ion-button", {
      key: "f3e436422110c9cb4d5c0b83500255b24ab4cdef",
      mode,
      color,
      fill: "clear",
      shape: "round",
      "aria-checked": isPasswordVisible ? "true" : "false",
      "aria-label": isPasswordVisible ? "Hide password" : "Show password",
      role: "switch",
      type: "button",
      onPointerDown: (ev) => {
        ev.preventDefault();
      },
      onClick: this.togglePasswordVisibility
    }, h("ion-icon", {
      key: "5c8b121153f148f92aa7cba0447673a4f6f3ad1e",
      slot: "icon-only",
      "aria-hidden": "true",
      icon: isPasswordVisible ? hidePasswordIcon : showPasswordIcon
    })));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "type": ["onTypeChange"]
    };
  }
};
InputPasswordToggle.style = {
  ios: iosInputPasswordToggleCss,
  md: mdInputPasswordToggleCss
};
export {
  InputPasswordToggle as ion_input_password_toggle
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-input-password-toggle.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24taW5wdXQtcGFzc3dvcmQtdG9nZ2xlLmVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGYgYXMgcHJpbnRJb25XYXJuaW5nLCBoLCBkIGFzIEhvc3QsIGcgYXMgZ2V0RWxlbWVudCB9IGZyb20gJy4vaW5kZXgtNER4WTZfZ0cuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVDb2xvckNsYXNzZXMgfSBmcm9tICcuL3RoZW1lLURpVkp5cWxYLmpzJztcbmltcG9ydCB7IHggYXMgZXllT2ZmLCB5IGFzIGV5ZSB9IGZyb20gJy4vaW5kZXgtRFYzc0pKVzguanMnO1xuaW1wb3J0IHsgYiBhcyBnZXRJb25Nb2RlIH0gZnJvbSAnLi9pb25pYy1nbG9iYWwtQ1RTeXVmaEYuanMnO1xuY29uc3QgaW9zSW5wdXRQYXNzd29yZFRvZ2dsZUNzcyA9IFwiXCI7XG5jb25zdCBtZElucHV0UGFzc3dvcmRUb2dnbGVDc3MgPSBcIlwiO1xuY29uc3QgSW5wdXRQYXNzd29yZFRvZ2dsZSA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgLyoqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgdGhpcy50eXBlID0gJ3Bhc3N3b3JkJztcbiAgICB0aGlzLnRvZ2dsZVBhc3N3b3JkVmlzaWJpbGl0eSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgaW5wdXRFbFJlZlxuICAgICAgfSA9IHRoaXM7XG4gICAgICBpZiAoIWlucHV0RWxSZWYpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaW5wdXRFbFJlZi50eXBlID0gaW5wdXRFbFJlZi50eXBlID09PSAndGV4dCcgPyAncGFzc3dvcmQnIDogJ3RleHQnO1xuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIFdoZW5ldmVyIHRoZSBpbnB1dCB0eXBlIGNoYW5nZXMgd2UgbmVlZCB0byByZS1ydW4gdmFsaWRhdGlvbiB0byBlbnN1cmUgdGhlIHBhc3N3b3JkXG4gICAqIHRvZ2dsZSBpcyBiZWluZyB1c2VkIHdpdGggdGhlIGNvcnJlY3QgaW5wdXQgdHlwZS4gSWYgdGhlIGFwcGxpY2F0aW9uIGNoYW5nZXMgdGhlIHR5cGVcbiAgICogb3V0c2lkZSBvZiB0aGlzIGNvbXBvbmVudCB3ZSBhbHNvIG5lZWQgdG8gcmUtcmVuZGVyIHNvIHRoZSBjb3JyZWN0IGljb24gaXMgc2hvd24uXG4gICAqL1xuICBvblR5cGVDaGFuZ2UobmV3VmFsdWUpIHtcbiAgICBpZiAobmV3VmFsdWUgIT09ICd0ZXh0JyAmJiBuZXdWYWx1ZSAhPT0gJ3Bhc3N3b3JkJykge1xuICAgICAgcHJpbnRJb25XYXJuaW5nKGBbaW9uLWlucHV0LXBhc3N3b3JkLXRvZ2dsZV0gLSBPbmx5IGlucHV0cyBvZiB0eXBlIFwidGV4dFwiIG9yIFwicGFzc3dvcmRcIiBhcmUgc3VwcG9ydGVkLiBJbnB1dCBvZiB0eXBlIFwiJHtuZXdWYWx1ZX1cIiBpcyBub3QgY29tcGF0aWJsZS5gLCB0aGlzLmVsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY29uc3Qge1xuICAgICAgZWxcbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCBpbnB1dEVsUmVmID0gdGhpcy5pbnB1dEVsUmVmID0gZWwuY2xvc2VzdCgnaW9uLWlucHV0Jyk7XG4gICAgaWYgKCFpbnB1dEVsUmVmKSB7XG4gICAgICBwcmludElvbldhcm5pbmcoJ1tpb24taW5wdXQtcGFzc3dvcmQtdG9nZ2xlXSAtIE5vIGFuY2VzdG9yIGlvbi1pbnB1dCBmb3VuZC4gVGhpcyBjb21wb25lbnQgbXVzdCBiZSBzbG90dGVkIGluc2lkZSBvZiBhbiBpb24taW5wdXQuJywgZWwpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbXBvcnRhbnQ6IFNldCB0aGUgdHlwZSBpbiBjb25uZWN0ZWRDYWxsYmFjayBiZWNhdXNlIHRoZSBkZWZhdWx0IHZhbHVlXG4gICAgICogb2YgdGhpcy50eXBlIG1heSBub3QgYWx3YXlzIGJlIGFjY3VyYXRlLiBVc3VhbGx5IGlucHV0cyBoYXZlIHRoZSBcInBhc3N3b3JkXCIgdHlwZVxuICAgICAqIGJ1dCBpdCBpcyBwb3NzaWJsZSB0byBoYXZlIHRoZSBpbnB1dCB0byBpbml0aWFsbHkgaGF2ZSB0aGUgXCJ0ZXh0XCIgdHlwZS4gSW4gdGhhdCBzY2VuYXJpb1xuICAgICAqIHRoZSB3cm9uZyBpY29uIHdpbGwgc2hvdyBicmllZmx5IGJlZm9yZSBzd2l0Y2hpbmcgdG8gdGhlIGNvcnJlY3QgaWNvbi4gU2V0dGluZyB0aGVcbiAgICAgKiB0eXBlIGhlcmUgYWxsb3dzIHVzIHRvIGF2b2lkIHRoYXQgZmxpY2tlci5cbiAgICAgKi9cbiAgICB0aGlzLnR5cGUgPSBpbnB1dEVsUmVmLnR5cGU7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5pbnB1dEVsUmVmID0gbnVsbDtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICBjb25zdCB7XG4gICAgICBjb2xvcixcbiAgICAgIHR5cGVcbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICBjb25zdCBzaG93UGFzc3dvcmRJY29uID0gKF9hID0gdGhpcy5zaG93SWNvbikgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogZXllO1xuICAgIGNvbnN0IGhpZGVQYXNzd29yZEljb24gPSAoX2IgPSB0aGlzLmhpZGVJY29uKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBleWVPZmY7XG4gICAgY29uc3QgaXNQYXNzd29yZFZpc2libGUgPSB0eXBlID09PSAndGV4dCc7XG4gICAgcmV0dXJuIGgoSG9zdCwge1xuICAgICAga2V5OiAnOTFiYzU1NjY0ZDQ5NmZlNDU3NTE4YmQxMTI4NjVkZDc4MTFkMGMxNycsXG4gICAgICBjbGFzczogY3JlYXRlQ29sb3JDbGFzc2VzKGNvbG9yLCB7XG4gICAgICAgIFttb2RlXTogdHJ1ZVxuICAgICAgfSlcbiAgICB9LCBoKFwiaW9uLWJ1dHRvblwiLCB7XG4gICAgICBrZXk6ICdmM2U0MzY0MjIxMTBjOWNiNGQ1YzBiODM1MDAyNTViMjRhYjRjZGVmJyxcbiAgICAgIG1vZGU6IG1vZGUsXG4gICAgICBjb2xvcjogY29sb3IsXG4gICAgICBmaWxsOiBcImNsZWFyXCIsXG4gICAgICBzaGFwZTogXCJyb3VuZFwiLFxuICAgICAgXCJhcmlhLWNoZWNrZWRcIjogaXNQYXNzd29yZFZpc2libGUgPyAndHJ1ZScgOiAnZmFsc2UnLFxuICAgICAgXCJhcmlhLWxhYmVsXCI6IGlzUGFzc3dvcmRWaXNpYmxlID8gJ0hpZGUgcGFzc3dvcmQnIDogJ1Nob3cgcGFzc3dvcmQnLFxuICAgICAgcm9sZTogXCJzd2l0Y2hcIixcbiAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICBvblBvaW50ZXJEb3duOiBldiA9PiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIHByZXZlbnRzIG1vYmlsZSBicm93c2VycyBmcm9tXG4gICAgICAgICAqIGJsdXJyaW5nIHRoZSBpbnB1dCB3aGVuIHRoZSBwYXNzd29yZCB0b2dnbGVcbiAgICAgICAgICogYnV0dG9uIGlzIGFjdGl2YXRlZC5cbiAgICAgICAgICovXG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9LFxuICAgICAgb25DbGljazogdGhpcy50b2dnbGVQYXNzd29yZFZpc2liaWxpdHlcbiAgICB9LCBoKFwiaW9uLWljb25cIiwge1xuICAgICAga2V5OiAnNWM4YjEyMTE1M2YxNDhmOTJhYTdjYmEwNDQ3NjczYTRmNmYzYWQxZScsXG4gICAgICBzbG90OiBcImljb24tb25seVwiLFxuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIixcbiAgICAgIGljb246IGlzUGFzc3dvcmRWaXNpYmxlID8gaGlkZVBhc3N3b3JkSWNvbiA6IHNob3dQYXNzd29yZEljb25cbiAgICB9KSkpO1xuICB9XG4gIGdldCBlbCgpIHtcbiAgICByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBcInR5cGVcIjogW1wib25UeXBlQ2hhbmdlXCJdXG4gICAgfTtcbiAgfVxufTtcbklucHV0UGFzc3dvcmRUb2dnbGUuc3R5bGUgPSB7XG4gIGlvczogaW9zSW5wdXRQYXNzd29yZFRvZ2dsZUNzcyxcbiAgbWQ6IG1kSW5wdXRQYXNzd29yZFRvZ2dsZUNzc1xufTtcbmV4cG9ydCB7IElucHV0UGFzc3dvcmRUb2dnbGUgYXMgaW9uX2lucHV0X3Bhc3N3b3JkX3RvZ2dsZSB9OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQSxJQUFNLDRCQUE0QjtBQUNsQyxJQUFNLDJCQUEyQjtBQUNqQyxJQUFNLHNCQUFzQixNQUFNO0FBQUEsRUFDaEMsWUFBWSxTQUFTO0FBQ25CLHFCQUFpQixNQUFNLE9BQU87QUFJOUIsU0FBSyxPQUFPO0FBQ1osU0FBSywyQkFBMkIsTUFBTTtBQUNwQyxZQUFNO0FBQUEsUUFDSjtBQUFBLE1BQ0YsSUFBSTtBQUNKLFVBQUksQ0FBQyxZQUFZO0FBQ2Y7QUFBQSxNQUNGO0FBQ0EsaUJBQVcsT0FBTyxXQUFXLFNBQVMsU0FBUyxhQUFhO0FBQUEsSUFDOUQ7QUFBQSxFQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTUEsYUFBYSxVQUFVO0FBQ3JCLFFBQUksYUFBYSxVQUFVLGFBQWEsWUFBWTtBQUNsRCxzQkFBZ0Isd0dBQXdHLFFBQVEsd0JBQXdCLEtBQUssRUFBRTtBQUMvSjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxvQkFBb0I7QUFDbEIsVUFBTTtBQUFBLE1BQ0o7QUFBQSxJQUNGLElBQUk7QUFDSixVQUFNLGFBQWEsS0FBSyxhQUFhLEdBQUcsUUFBUSxXQUFXO0FBQzNELFFBQUksQ0FBQyxZQUFZO0FBQ2Ysc0JBQWdCLHFIQUFxSCxFQUFFO0FBQ3ZJO0FBQUEsSUFDRjtBQVFBLFNBQUssT0FBTyxXQUFXO0FBQUEsRUFDekI7QUFBQSxFQUNBLHVCQUF1QjtBQUNyQixTQUFLLGFBQWE7QUFBQSxFQUNwQjtBQUFBLEVBQ0EsU0FBUztBQUNQLFFBQUksSUFBSTtBQUNSLFVBQU07QUFBQSxNQUNKO0FBQUEsTUFDQTtBQUFBLElBQ0YsSUFBSTtBQUNKLFVBQU0sT0FBTyxXQUFXLElBQUk7QUFDNUIsVUFBTSxvQkFBb0IsS0FBSyxLQUFLLGNBQWMsUUFBUSxPQUFPLFNBQVMsS0FBSztBQUMvRSxVQUFNLG9CQUFvQixLQUFLLEtBQUssY0FBYyxRQUFRLE9BQU8sU0FBUyxLQUFLO0FBQy9FLFVBQU0sb0JBQW9CLFNBQVM7QUFDbkMsV0FBTyxFQUFFLE1BQU07QUFBQSxNQUNiLEtBQUs7QUFBQSxNQUNMLE9BQU8sbUJBQW1CLE9BQU87QUFBQSxRQUMvQixDQUFDLElBQUksR0FBRztBQUFBLE1BQ1YsQ0FBQztBQUFBLElBQ0gsR0FBRyxFQUFFLGNBQWM7QUFBQSxNQUNqQixLQUFLO0FBQUEsTUFDTDtBQUFBLE1BQ0E7QUFBQSxNQUNBLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLGdCQUFnQixvQkFBb0IsU0FBUztBQUFBLE1BQzdDLGNBQWMsb0JBQW9CLGtCQUFrQjtBQUFBLE1BQ3BELE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLGVBQWUsUUFBTTtBQU1uQixXQUFHLGVBQWU7QUFBQSxNQUNwQjtBQUFBLE1BQ0EsU0FBUyxLQUFLO0FBQUEsSUFDaEIsR0FBRyxFQUFFLFlBQVk7QUFBQSxNQUNmLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLGVBQWU7QUFBQSxNQUNmLE1BQU0sb0JBQW9CLG1CQUFtQjtBQUFBLElBQy9DLENBQUMsQ0FBQyxDQUFDO0FBQUEsRUFDTDtBQUFBLEVBQ0EsSUFBSSxLQUFLO0FBQ1AsV0FBTyxXQUFXLElBQUk7QUFBQSxFQUN4QjtBQUFBLEVBQ0EsV0FBVyxXQUFXO0FBQ3BCLFdBQU87QUFBQSxNQUNMLFFBQVEsQ0FBQyxjQUFjO0FBQUEsSUFDekI7QUFBQSxFQUNGO0FBQ0Y7QUFDQSxvQkFBb0IsUUFBUTtBQUFBLEVBQzFCLEtBQUs7QUFBQSxFQUNMLElBQUk7QUFDTjsiLCJuYW1lcyI6W10sInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswXX0=
