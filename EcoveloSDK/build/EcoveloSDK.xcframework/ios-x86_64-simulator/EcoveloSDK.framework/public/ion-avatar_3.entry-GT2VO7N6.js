import {
  createColorClasses
} from "./chunk-5VP4V3BN.js";
import {
  getIonMode
} from "./chunk-TXLH22R2.js";
import {
  Host,
  h,
  registerInstance
} from "./chunk-BFPTXCSH.js";
import "./chunk-UESUV5PM.js";

// node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js
var avatarIosCss = ":host{border-radius:var(--border-radius);display:block}::slotted(ion-img),::slotted(img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}:host{--border-radius:50%;width:48px;height:48px}";
var avatarMdCss = ":host{border-radius:var(--border-radius);display:block}::slotted(ion-img),::slotted(img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}:host{--border-radius:50%;width:64px;height:64px}";
var Avatar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, {
      key: "998217066084f966bf5d356fed85bcbd451f675a",
      class: getIonMode(this)
    }, h("slot", {
      key: "1a6f7c9d4dc6a875f86b5b3cda6d59cb39587f22"
    }));
  }
};
Avatar.style = {
  ios: avatarIosCss,
  md: avatarMdCss
};
var badgeIosCss = ":host{--background:var(--ion-color-primary, #0054e9);--color:var(--ion-color-primary-contrast, #fff);--padding-top:3px;--padding-end:8px;--padding-bottom:3px;--padding-start:8px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:inline-block;min-width:10px;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);font-size:0.8125rem;font-weight:bold;line-height:1;text-align:center;white-space:nowrap;contain:content;vertical-align:baseline}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(:empty){display:none}:host{border-radius:10px;font-size:max(13px, 0.8125rem)}";
var badgeMdCss = ":host{--background:var(--ion-color-primary, #0054e9);--color:var(--ion-color-primary-contrast, #fff);--padding-top:3px;--padding-end:8px;--padding-bottom:3px;--padding-start:8px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:inline-block;min-width:10px;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);font-size:0.8125rem;font-weight:bold;line-height:1;text-align:center;white-space:nowrap;contain:content;vertical-align:baseline}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(:empty){display:none}:host{--padding-top:3px;--padding-end:4px;--padding-bottom:4px;--padding-start:4px;border-radius:4px}";
var Badge = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const mode = getIonMode(this);
    return h(Host, {
      key: "1a2d39c5deec771a2f2196447627b62a7d4c8389",
      class: createColorClasses(this.color, {
        [mode]: true
      })
    }, h("slot", {
      key: "fc1b6587f1ed24715748eb6785e7fb7a57cdd5cd"
    }));
  }
};
Badge.style = {
  ios: badgeIosCss,
  md: badgeMdCss
};
var thumbnailCss = ":host{--size:48px;--border-radius:0;border-radius:var(--border-radius);display:block;width:var(--size);height:var(--size)}::slotted(ion-img),::slotted(img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}";
var Thumbnail = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, {
      key: "70ada828e8cf541ab3b47f94b7e56ce34114ef88",
      class: getIonMode(this)
    }, h("slot", {
      key: "c43e105669d2bae123619b616f3af8ca2f722d61"
    }));
  }
};
Thumbnail.style = thumbnailCss;
export {
  Avatar as ion_avatar,
  Badge as ion_badge,
  Thumbnail as ion_thumbnail
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-avatar_3.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tYXZhdGFyXzMuZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgaCwgZCBhcyBIb3N0IH0gZnJvbSAnLi9pbmRleC00RHhZNl9nRy5qcyc7XG5pbXBvcnQgeyBiIGFzIGdldElvbk1vZGUgfSBmcm9tICcuL2lvbmljLWdsb2JhbC1DVFN5dWZoRi5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZUNvbG9yQ2xhc3NlcyB9IGZyb20gJy4vdGhlbWUtRGlWSnlxbFguanMnO1xuY29uc3QgYXZhdGFySW9zQ3NzID0gXCI6aG9zdHtib3JkZXItcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2Rpc3BsYXk6YmxvY2t9OjpzbG90dGVkKGlvbi1pbWcpLDo6c2xvdHRlZChpbWcpe2JvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTstby1vYmplY3QtZml0OmNvdmVyO29iamVjdC1maXQ6Y292ZXI7b3ZlcmZsb3c6aGlkZGVufTpob3N0ey0tYm9yZGVyLXJhZGl1czo1MCU7d2lkdGg6NDhweDtoZWlnaHQ6NDhweH1cIjtcbmNvbnN0IGF2YXRhck1kQ3NzID0gXCI6aG9zdHtib3JkZXItcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2Rpc3BsYXk6YmxvY2t9OjpzbG90dGVkKGlvbi1pbWcpLDo6c2xvdHRlZChpbWcpe2JvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTstby1vYmplY3QtZml0OmNvdmVyO29iamVjdC1maXQ6Y292ZXI7b3ZlcmZsb3c6aGlkZGVufTpob3N0ey0tYm9yZGVyLXJhZGl1czo1MCU7d2lkdGg6NjRweDtoZWlnaHQ6NjRweH1cIjtcbmNvbnN0IEF2YXRhciA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBoKEhvc3QsIHtcbiAgICAgIGtleTogJzk5ODIxNzA2NjA4NGY5NjZiZjVkMzU2ZmVkODViY2JkNDUxZjY3NWEnLFxuICAgICAgY2xhc3M6IGdldElvbk1vZGUodGhpcylcbiAgICB9LCBoKFwic2xvdFwiLCB7XG4gICAgICBrZXk6ICcxYTZmN2M5ZDRkYzZhODc1Zjg2YjViM2NkYTZkNTljYjM5NTg3ZjIyJ1xuICAgIH0pKTtcbiAgfVxufTtcbkF2YXRhci5zdHlsZSA9IHtcbiAgaW9zOiBhdmF0YXJJb3NDc3MsXG4gIG1kOiBhdmF0YXJNZENzc1xufTtcbmNvbnN0IGJhZGdlSW9zQ3NzID0gXCI6aG9zdHstLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMwMDU0ZTkpOy0tY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QsICNmZmYpOy0tcGFkZGluZy10b3A6M3B4Oy0tcGFkZGluZy1lbmQ6OHB4Oy0tcGFkZGluZy1ib3R0b206M3B4Oy0tcGFkZGluZy1zdGFydDo4cHg7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OnZhcigtLXBhZGRpbmctc3RhcnQpO3BhZGRpbmctaW5saW5lLXN0YXJ0OnZhcigtLXBhZGRpbmctc3RhcnQpOy13ZWJraXQtcGFkZGluZy1lbmQ6dmFyKC0tcGFkZGluZy1lbmQpO3BhZGRpbmctaW5saW5lLWVuZDp2YXIoLS1wYWRkaW5nLWVuZCk7cGFkZGluZy10b3A6dmFyKC0tcGFkZGluZy10b3ApO3BhZGRpbmctYm90dG9tOnZhcigtLXBhZGRpbmctYm90dG9tKTtkaXNwbGF5OmlubGluZS1ibG9jazttaW4td2lkdGg6MTBweDtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2NvbG9yOnZhcigtLWNvbG9yKTtmb250LWZhbWlseTp2YXIoLS1pb24tZm9udC1mYW1pbHksIGluaGVyaXQpO2ZvbnQtc2l6ZTowLjgxMjVyZW07Zm9udC13ZWlnaHQ6Ym9sZDtsaW5lLWhlaWdodDoxO3RleHQtYWxpZ246Y2VudGVyO3doaXRlLXNwYWNlOm5vd3JhcDtjb250YWluOmNvbnRlbnQ7dmVydGljYWwtYWxpZ246YmFzZWxpbmV9Omhvc3QoLmlvbi1jb2xvcil7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItYmFzZSk7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KX06aG9zdCg6ZW1wdHkpe2Rpc3BsYXk6bm9uZX06aG9zdHtib3JkZXItcmFkaXVzOjEwcHg7Zm9udC1zaXplOm1heCgxM3B4LCAwLjgxMjVyZW0pfVwiO1xuY29uc3QgYmFkZ2VNZENzcyA9IFwiOmhvc3R7LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMDA1NGU5KTstLWNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LCAjZmZmKTstLXBhZGRpbmctdG9wOjNweDstLXBhZGRpbmctZW5kOjhweDstLXBhZGRpbmctYm90dG9tOjNweDstLXBhZGRpbmctc3RhcnQ6OHB4Oy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkOy13ZWJraXQtcGFkZGluZy1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTtwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1wYWRkaW5nLXN0YXJ0KTstd2Via2l0LXBhZGRpbmctZW5kOnZhcigtLXBhZGRpbmctZW5kKTtwYWRkaW5nLWlubGluZS1lbmQ6dmFyKC0tcGFkZGluZy1lbmQpO3BhZGRpbmctdG9wOnZhcigtLXBhZGRpbmctdG9wKTtwYWRkaW5nLWJvdHRvbTp2YXIoLS1wYWRkaW5nLWJvdHRvbSk7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWluLXdpZHRoOjEwcHg7YmFja2dyb3VuZDp2YXIoLS1iYWNrZ3JvdW5kKTtjb2xvcjp2YXIoLS1jb2xvcik7Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LCBpbmhlcml0KTtmb250LXNpemU6MC44MTI1cmVtO2ZvbnQtd2VpZ2h0OmJvbGQ7bGluZS1oZWlnaHQ6MTt0ZXh0LWFsaWduOmNlbnRlcjt3aGl0ZS1zcGFjZTpub3dyYXA7Y29udGFpbjpjb250ZW50O3ZlcnRpY2FsLWFsaWduOmJhc2VsaW5lfTpob3N0KC5pb24tY29sb3Ipe2JhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWJhc2UpO2NvbG9yOnZhcigtLWlvbi1jb2xvci1jb250cmFzdCl9Omhvc3QoOmVtcHR5KXtkaXNwbGF5Om5vbmV9Omhvc3R7LS1wYWRkaW5nLXRvcDozcHg7LS1wYWRkaW5nLWVuZDo0cHg7LS1wYWRkaW5nLWJvdHRvbTo0cHg7LS1wYWRkaW5nLXN0YXJ0OjRweDtib3JkZXItcmFkaXVzOjRweH1cIjtcbmNvbnN0IEJhZGdlID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgcmV0dXJuIGgoSG9zdCwge1xuICAgICAga2V5OiAnMWEyZDM5YzVkZWVjNzcxYTJmMjE5NjQ0NzYyN2I2MmE3ZDRjODM4OScsXG4gICAgICBjbGFzczogY3JlYXRlQ29sb3JDbGFzc2VzKHRoaXMuY29sb3IsIHtcbiAgICAgICAgW21vZGVdOiB0cnVlXG4gICAgICB9KVxuICAgIH0sIGgoXCJzbG90XCIsIHtcbiAgICAgIGtleTogJ2ZjMWI2NTg3ZjFlZDI0NzE1NzQ4ZWI2Nzg1ZTdmYjdhNTdjZGQ1Y2QnXG4gICAgfSkpO1xuICB9XG59O1xuQmFkZ2Uuc3R5bGUgPSB7XG4gIGlvczogYmFkZ2VJb3NDc3MsXG4gIG1kOiBiYWRnZU1kQ3NzXG59O1xuY29uc3QgdGh1bWJuYWlsQ3NzID0gXCI6aG9zdHstLXNpemU6NDhweDstLWJvcmRlci1yYWRpdXM6MDtib3JkZXItcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO2Rpc3BsYXk6YmxvY2s7d2lkdGg6dmFyKC0tc2l6ZSk7aGVpZ2h0OnZhcigtLXNpemUpfTo6c2xvdHRlZChpb24taW1nKSw6OnNsb3R0ZWQoaW1nKXtib3JkZXItcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7LW8tb2JqZWN0LWZpdDpjb3ZlcjtvYmplY3QtZml0OmNvdmVyO292ZXJmbG93OmhpZGRlbn1cIjtcbmNvbnN0IFRodW1ibmFpbCA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBoKEhvc3QsIHtcbiAgICAgIGtleTogJzcwYWRhODI4ZThjZjU0MWFiM2I0N2Y5NGI3ZTU2Y2UzNDExNGVmODgnLFxuICAgICAgY2xhc3M6IGdldElvbk1vZGUodGhpcylcbiAgICB9LCBoKFwic2xvdFwiLCB7XG4gICAgICBrZXk6ICdjNDNlMTA1NjY5ZDJiYWUxMjM2MTliNjE2ZjNhZjhjYTJmNzIyZDYxJ1xuICAgIH0pKTtcbiAgfVxufTtcblRodW1ibmFpbC5zdHlsZSA9IHRodW1ibmFpbENzcztcbmV4cG9ydCB7IEF2YXRhciBhcyBpb25fYXZhdGFyLCBCYWRnZSBhcyBpb25fYmFkZ2UsIFRodW1ibmFpbCBhcyBpb25fdGh1bWJuYWlsIH07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQU1BLElBQU0sZUFBZTtBQUNyQixJQUFNLGNBQWM7QUFDcEIsSUFBTSxTQUFTLE1BQU07QUFBQSxFQUNuQixZQUFZLFNBQVM7QUFDbkIscUJBQWlCLE1BQU0sT0FBTztBQUFBLEVBQ2hDO0FBQUEsRUFDQSxTQUFTO0FBQ1AsV0FBTyxFQUFFLE1BQU07QUFBQSxNQUNiLEtBQUs7QUFBQSxNQUNMLE9BQU8sV0FBVyxJQUFJO0FBQUEsSUFDeEIsR0FBRyxFQUFFLFFBQVE7QUFBQSxNQUNYLEtBQUs7QUFBQSxJQUNQLENBQUMsQ0FBQztBQUFBLEVBQ0o7QUFDRjtBQUNBLE9BQU8sUUFBUTtBQUFBLEVBQ2IsS0FBSztBQUFBLEVBQ0wsSUFBSTtBQUNOO0FBQ0EsSUFBTSxjQUFjO0FBQ3BCLElBQU0sYUFBYTtBQUNuQixJQUFNLFFBQVEsTUFBTTtBQUFBLEVBQ2xCLFlBQVksU0FBUztBQUNuQixxQkFBaUIsTUFBTSxPQUFPO0FBQUEsRUFDaEM7QUFBQSxFQUNBLFNBQVM7QUFDUCxVQUFNLE9BQU8sV0FBVyxJQUFJO0FBQzVCLFdBQU8sRUFBRSxNQUFNO0FBQUEsTUFDYixLQUFLO0FBQUEsTUFDTCxPQUFPLG1CQUFtQixLQUFLLE9BQU87QUFBQSxRQUNwQyxDQUFDLElBQUksR0FBRztBQUFBLE1BQ1YsQ0FBQztBQUFBLElBQ0gsR0FBRyxFQUFFLFFBQVE7QUFBQSxNQUNYLEtBQUs7QUFBQSxJQUNQLENBQUMsQ0FBQztBQUFBLEVBQ0o7QUFDRjtBQUNBLE1BQU0sUUFBUTtBQUFBLEVBQ1osS0FBSztBQUFBLEVBQ0wsSUFBSTtBQUNOO0FBQ0EsSUFBTSxlQUFlO0FBQ3JCLElBQU0sWUFBWSxNQUFNO0FBQUEsRUFDdEIsWUFBWSxTQUFTO0FBQ25CLHFCQUFpQixNQUFNLE9BQU87QUFBQSxFQUNoQztBQUFBLEVBQ0EsU0FBUztBQUNQLFdBQU8sRUFBRSxNQUFNO0FBQUEsTUFDYixLQUFLO0FBQUEsTUFDTCxPQUFPLFdBQVcsSUFBSTtBQUFBLElBQ3hCLEdBQUcsRUFBRSxRQUFRO0FBQUEsTUFDWCxLQUFLO0FBQUEsSUFDUCxDQUFDLENBQUM7QUFBQSxFQUNKO0FBQ0Y7QUFDQSxVQUFVLFFBQVE7IiwibmFtZXMiOltdLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19
