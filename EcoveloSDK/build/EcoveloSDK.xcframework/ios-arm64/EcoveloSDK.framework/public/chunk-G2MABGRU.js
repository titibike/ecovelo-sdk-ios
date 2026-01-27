import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-DGENMXJW.js";
import {
  Capacitor,
  registerPlugin
} from "./chunk-KGBWUDTS.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// node_modules/@capacitor-community/native-audio/dist/esm/index.js
var NativeAudio = registerPlugin("NativeAudio", {
  web: () => import("./web-U2ITDA6G.js").then((m) => new m.NativeAudioWeb())
});

// src/app/services/utils/native-audio.service.ts
var _NativeAudioService = class _NativeAudioService {
  constructor() {
    this.loadedAssets = /* @__PURE__ */ new Map();
  }
  /**
   * Précharge un asset audio seulement s'il n'est pas déjà chargé
   */
  preloadAsset(assetId, assetPath, audioChannelNum = 1, volume = 0.8) {
    return __async(this, null, function* () {
      if (this.loadedAssets.has(assetId)) {
        return;
      }
      try {
        const finalPath = Capacitor.isNativePlatform() ? `public/${assetPath}` : assetPath;
        yield NativeAudio.preload({
          assetId,
          assetPath: finalPath,
          audioChannelNum,
          volume,
          isUrl: false
        });
        this.loadedAssets.set(assetId, {
          assetId,
          assetPath: finalPath,
          audioChannelNum,
          volume,
          isLoaded: true
        });
      } catch (error) {
        if (error && typeof error === "object" && "message" in error && typeof error.message === "string" && error.message.includes("already exists")) {
          this.loadedAssets.set(assetId, {
            assetId,
            assetPath: Capacitor.isNativePlatform() ? `public/${assetPath}` : assetPath,
            audioChannelNum,
            volume,
            isLoaded: true
          });
        } else {
          console.error(`Failed to preload audio asset ${assetId}:`, error);
          throw error;
        }
      }
    });
  }
  /**
   * Joue un asset audio
   */
  play(assetId, time) {
    return __async(this, null, function* () {
      if (!this.loadedAssets.has(assetId)) {
        console.warn(`Audio asset ${assetId} not loaded, cannot play`);
        return;
      }
      try {
        yield NativeAudio.play({
          assetId,
          time
        });
      } catch (error) {
        console.error(`Failed to play audio asset ${assetId}:`, error);
      }
    });
  }
};
_NativeAudioService.\u0275fac = function NativeAudioService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NativeAudioService)();
};
_NativeAudioService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NativeAudioService, factory: _NativeAudioService.\u0275fac, providedIn: "root" });
var NativeAudioService = _NativeAudioService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NativeAudioService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  NativeAudioService
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY2FwYWNpdG9yLWNvbW11bml0eS9uYXRpdmUtYXVkaW8vZGlzdC9lc20vaW5kZXguanMiLCJzcmMvYXBwL3NlcnZpY2VzL3V0aWxzL25hdGl2ZS1hdWRpby5zZXJ2aWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlZ2lzdGVyUGx1Z2luIH0gZnJvbSAnQGNhcGFjaXRvci9jb3JlJztcbmNvbnN0IE5hdGl2ZUF1ZGlvID0gcmVnaXN0ZXJQbHVnaW4oJ05hdGl2ZUF1ZGlvJywge1xuICB3ZWI6ICgpID0+IGltcG9ydCgnLi93ZWInKS50aGVuKG0gPT4gbmV3IG0uTmF0aXZlQXVkaW9XZWIoKSlcbn0pO1xuZXhwb3J0ICogZnJvbSAnLi9kZWZpbml0aW9ucyc7XG5leHBvcnQgeyBOYXRpdmVBdWRpbyB9O1xuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBOYXRpdmVBdWRpbyB9IGZyb20gJ0BjYXBhY2l0b3ItY29tbXVuaXR5L25hdGl2ZS1hdWRpbydcbmltcG9ydCB7IENhcGFjaXRvciB9IGZyb20gJ0BjYXBhY2l0b3IvY29yZSdcblxuaW50ZXJmYWNlIEF1ZGlvQXNzZXQge1xuICBhc3NldElkOiBzdHJpbmdcbiAgYXNzZXRQYXRoOiBzdHJpbmdcbiAgYXVkaW9DaGFubmVsTnVtOiBudW1iZXJcbiAgdm9sdW1lOiBudW1iZXJcbiAgaXNMb2FkZWQ6IGJvb2xlYW5cbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE5hdGl2ZUF1ZGlvU2VydmljZSB7XG4gIHByaXZhdGUgbG9hZGVkQXNzZXRzOiBNYXA8c3RyaW5nLCBBdWRpb0Fzc2V0PiA9IG5ldyBNYXAoKVxuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICAvKipcbiAgICogUHLDqWNoYXJnZSB1biBhc3NldCBhdWRpbyBzZXVsZW1lbnQgcydpbCBuJ2VzdCBwYXMgZMOpasOgIGNoYXJnw6lcbiAgICovXG4gIGFzeW5jIHByZWxvYWRBc3NldChcbiAgICBhc3NldElkOiBzdHJpbmcsXG4gICAgYXNzZXRQYXRoOiBzdHJpbmcsXG4gICAgYXVkaW9DaGFubmVsTnVtOiBudW1iZXIgPSAxLFxuICAgIHZvbHVtZTogbnVtYmVyID0gMC44XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICh0aGlzLmxvYWRlZEFzc2V0cy5oYXMoYXNzZXRJZCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0cnkge1xuICAgICAgY29uc3QgZmluYWxQYXRoID0gQ2FwYWNpdG9yLmlzTmF0aXZlUGxhdGZvcm0oKVxuICAgICAgICA/IGBwdWJsaWMvJHthc3NldFBhdGh9YFxuICAgICAgICA6IGFzc2V0UGF0aFxuXG4gICAgICBhd2FpdCBOYXRpdmVBdWRpby5wcmVsb2FkKHtcbiAgICAgICAgYXNzZXRJZCxcbiAgICAgICAgYXNzZXRQYXRoOiBmaW5hbFBhdGgsXG4gICAgICAgIGF1ZGlvQ2hhbm5lbE51bSxcbiAgICAgICAgdm9sdW1lLFxuICAgICAgICBpc1VybDogZmFsc2UsXG4gICAgICB9KVxuICAgICAgdGhpcy5sb2FkZWRBc3NldHMuc2V0KGFzc2V0SWQsIHtcbiAgICAgICAgYXNzZXRJZCxcbiAgICAgICAgYXNzZXRQYXRoOiBmaW5hbFBhdGgsXG4gICAgICAgIGF1ZGlvQ2hhbm5lbE51bSxcbiAgICAgICAgdm9sdW1lLFxuICAgICAgICBpc0xvYWRlZDogdHJ1ZSxcbiAgICAgIH0pXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmIChcbiAgICAgICAgZXJyb3IgJiZcbiAgICAgICAgdHlwZW9mIGVycm9yID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAnbWVzc2FnZScgaW4gZXJyb3IgJiZcbiAgICAgICAgdHlwZW9mIGVycm9yLm1lc3NhZ2UgPT09ICdzdHJpbmcnICYmXG4gICAgICAgIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ2FscmVhZHkgZXhpc3RzJylcbiAgICAgICkge1xuICAgICAgICB0aGlzLmxvYWRlZEFzc2V0cy5zZXQoYXNzZXRJZCwge1xuICAgICAgICAgIGFzc2V0SWQsXG4gICAgICAgICAgYXNzZXRQYXRoOiBDYXBhY2l0b3IuaXNOYXRpdmVQbGF0Zm9ybSgpXG4gICAgICAgICAgICA/IGBwdWJsaWMvJHthc3NldFBhdGh9YFxuICAgICAgICAgICAgOiBhc3NldFBhdGgsXG4gICAgICAgICAgYXVkaW9DaGFubmVsTnVtLFxuICAgICAgICAgIHZvbHVtZSxcbiAgICAgICAgICBpc0xvYWRlZDogdHJ1ZSxcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byBwcmVsb2FkIGF1ZGlvIGFzc2V0ICR7YXNzZXRJZH06YCwgZXJyb3IpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEpvdWUgdW4gYXNzZXQgYXVkaW9cbiAgICovXG4gIGFzeW5jIHBsYXkoYXNzZXRJZDogc3RyaW5nLCB0aW1lPzogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKCF0aGlzLmxvYWRlZEFzc2V0cy5oYXMoYXNzZXRJZCkpIHtcbiAgICAgIGNvbnNvbGUud2FybihgQXVkaW8gYXNzZXQgJHthc3NldElkfSBub3QgbG9hZGVkLCBjYW5ub3QgcGxheWApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgTmF0aXZlQXVkaW8ucGxheSh7XG4gICAgICAgIGFzc2V0SWQsXG4gICAgICAgIHRpbWUsXG4gICAgICB9KVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBGYWlsZWQgdG8gcGxheSBhdWRpbyBhc3NldCAke2Fzc2V0SWR9OmAsIGVycm9yKVxuICAgIH1cbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLElBQU0sY0FBYyxlQUFlLGVBQWU7QUFBQSxFQUNoRCxLQUFLLE1BQU0sT0FBTyxtQkFBTyxFQUFFLEtBQUssT0FBSyxJQUFJLEVBQUUsZUFBZSxDQUFDO0FBQzdELENBQUM7OztBQ1lLLElBQU8sc0JBQVAsTUFBTyxvQkFBa0I7RUFHN0IsY0FBQTtBQUZRLFNBQUEsZUFBd0Msb0JBQUksSUFBRztFQUV4Qzs7OztFQUtULGFBQ0osU0FDQSxXQUNBLGtCQUEwQixHQUMxQixTQUFpQixLQUFHOztBQUVwQixVQUFJLEtBQUssYUFBYSxJQUFJLE9BQU8sR0FBRztBQUNsQztNQUNGO0FBQ0EsVUFBSTtBQUNGLGNBQU0sWUFBWSxVQUFVLGlCQUFnQixJQUN4QyxVQUFVLFNBQVMsS0FDbkI7QUFFSixjQUFNLFlBQVksUUFBUTtVQUN4QjtVQUNBLFdBQVc7VUFDWDtVQUNBO1VBQ0EsT0FBTztTQUNSO0FBQ0QsYUFBSyxhQUFhLElBQUksU0FBUztVQUM3QjtVQUNBLFdBQVc7VUFDWDtVQUNBO1VBQ0EsVUFBVTtTQUNYO01BQ0gsU0FBUyxPQUFPO0FBQ2QsWUFDRSxTQUNBLE9BQU8sVUFBVSxZQUNqQixhQUFhLFNBQ2IsT0FBTyxNQUFNLFlBQVksWUFDekIsTUFBTSxRQUFRLFNBQVMsZ0JBQWdCLEdBQ3ZDO0FBQ0EsZUFBSyxhQUFhLElBQUksU0FBUztZQUM3QjtZQUNBLFdBQVcsVUFBVSxpQkFBZ0IsSUFDakMsVUFBVSxTQUFTLEtBQ25CO1lBQ0o7WUFDQTtZQUNBLFVBQVU7V0FDWDtRQUNILE9BQU87QUFDTCxrQkFBUSxNQUFNLGlDQUFpQyxPQUFPLEtBQUssS0FBSztBQUNoRSxnQkFBTTtRQUNSO01BQ0Y7SUFDRjs7Ozs7RUFLTSxLQUFLLFNBQWlCLE1BQWE7O0FBQ3ZDLFVBQUksQ0FBQyxLQUFLLGFBQWEsSUFBSSxPQUFPLEdBQUc7QUFDbkMsZ0JBQVEsS0FBSyxlQUFlLE9BQU8sMEJBQTBCO0FBQzdEO01BQ0Y7QUFFQSxVQUFJO0FBQ0YsY0FBTSxZQUFZLEtBQUs7VUFDckI7VUFDQTtTQUNEO01BQ0gsU0FBUyxPQUFPO0FBQ2QsZ0JBQVEsTUFBTSw4QkFBOEIsT0FBTyxLQUFLLEtBQUs7TUFDL0Q7SUFDRjs7OzttQ0E3RVcscUJBQWtCO0FBQUE7dUZBQWxCLHFCQUFrQixTQUFsQixvQkFBa0IsV0FBQSxZQUZqQixPQUFNLENBQUE7QUFFZCxJQUFPLHFCQUFQOztzRUFBTyxvQkFBa0IsQ0FBQTtVQUg5QjtXQUFXO01BQ1YsWUFBWTtLQUNiOzs7IiwibmFtZXMiOltdLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMF19
