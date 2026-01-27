import {
  WebPlugin
} from "./chunk-KGBWUDTS.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// node_modules/@capacitor-community/native-audio/dist/esm/audio-asset.js
var AudioAsset = class {
  constructor(audio) {
    this.audio = audio;
  }
};

// node_modules/@capacitor-community/native-audio/dist/esm/web.js
var NativeAudioWeb = class _NativeAudioWeb extends WebPlugin {
  resume(options) {
    return __async(this, null, function* () {
      const audio = this.getAudioAsset(options.assetId).audio;
      if (audio.paused) {
        return audio.play();
      }
    });
  }
  pause(options) {
    return __async(this, null, function* () {
      const audio = this.getAudioAsset(options.assetId).audio;
      return audio.pause();
    });
  }
  getCurrentTime(options) {
    return __async(this, null, function* () {
      const audio = this.getAudioAsset(options.assetId).audio;
      return {
        currentTime: audio.currentTime
      };
    });
  }
  getDuration(options) {
    return __async(this, null, function* () {
      const audio = this.getAudioAsset(options.assetId).audio;
      if (Number.isNaN(audio.duration)) {
        throw "no duration available";
      }
      if (!Number.isFinite(audio.duration)) {
        throw "duration not available => media resource is streaming";
      }
      return {
        duration: audio.duration
      };
    });
  }
  configure(options) {
    return __async(this, null, function* () {
      throw `configure is not supported for web: ${JSON.stringify(options)}`;
    });
  }
  preload(options) {
    return __async(this, null, function* () {
      var _a;
      if (_NativeAudioWeb.AUDIO_ASSET_BY_ASSET_ID.has(options.assetId)) {
        throw "AssetId already exists. Unload first if like to change!";
      }
      if (!((_a = options.assetPath) === null || _a === void 0 ? void 0 : _a.length)) {
        throw "no assetPath provided";
      }
      if (!options.isUrl && !new RegExp("^/?" + _NativeAudioWeb.FILE_LOCATION).test(options.assetPath)) {
        const slashPrefix = options.assetPath.startsWith("/") ? "" : "/";
        options.assetPath = `${_NativeAudioWeb.FILE_LOCATION}${slashPrefix}${options.assetPath}`;
      }
      const audio = new Audio(options.assetPath);
      audio.autoplay = false;
      audio.loop = false;
      audio.preload = "auto";
      if (options.volume) {
        audio.volume = options.volume;
      }
      _NativeAudioWeb.AUDIO_ASSET_BY_ASSET_ID.set(options.assetId, new AudioAsset(audio));
    });
  }
  play(options) {
    return __async(this, null, function* () {
      var _a;
      const audio = this.getAudioAsset(options.assetId).audio;
      yield this.stop(options);
      audio.loop = false;
      audio.currentTime = (_a = options.time) !== null && _a !== void 0 ? _a : 0;
      return audio.play();
    });
  }
  loop(options) {
    return __async(this, null, function* () {
      const audio = this.getAudioAsset(options.assetId).audio;
      yield this.stop(options);
      audio.loop = true;
      return audio.play();
    });
  }
  stop(options) {
    return __async(this, null, function* () {
      const audio = this.getAudioAsset(options.assetId).audio;
      audio.pause();
      audio.loop = false;
      audio.currentTime = 0;
    });
  }
  unload(options) {
    return __async(this, null, function* () {
      yield this.stop(options);
      _NativeAudioWeb.AUDIO_ASSET_BY_ASSET_ID.delete(options.assetId);
    });
  }
  setVolume(options) {
    return __async(this, null, function* () {
      if (typeof (options === null || options === void 0 ? void 0 : options.volume) !== "number") {
        throw "no volume provided";
      }
      const audio = this.getAudioAsset(options.assetId).audio;
      audio.volume = options.volume;
    });
  }
  isPlaying(options) {
    return __async(this, null, function* () {
      const audio = this.getAudioAsset(options.assetId).audio;
      return {
        isPlaying: !audio.paused
      };
    });
  }
  getAudioAsset(assetId) {
    this.checkAssetId(assetId);
    if (!_NativeAudioWeb.AUDIO_ASSET_BY_ASSET_ID.has(assetId)) {
      throw `no asset for assetId "${assetId}" available. Call preload first!`;
    }
    return _NativeAudioWeb.AUDIO_ASSET_BY_ASSET_ID.get(assetId);
  }
  checkAssetId(assetId) {
    if (typeof assetId !== "string") {
      throw "assetId must be a string";
    }
    if (!(assetId === null || assetId === void 0 ? void 0 : assetId.length)) {
      throw "no assetId provided";
    }
  }
};
NativeAudioWeb.FILE_LOCATION = "assets/sounds";
NativeAudioWeb.AUDIO_ASSET_BY_ASSET_ID = /* @__PURE__ */ new Map();
export {
  NativeAudioWeb
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY2FwYWNpdG9yLWNvbW11bml0eS9uYXRpdmUtYXVkaW8vZGlzdC9lc20vYXVkaW8tYXNzZXQuanMiLCJub2RlX21vZHVsZXMvQGNhcGFjaXRvci1jb21tdW5pdHkvbmF0aXZlLWF1ZGlvL2Rpc3QvZXNtL3dlYi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQXVkaW9Bc3NldCB7XG4gIGNvbnN0cnVjdG9yKGF1ZGlvKSB7XG4gICAgdGhpcy5hdWRpbyA9IGF1ZGlvO1xuICB9XG59XG4iLCJpbXBvcnQgeyBXZWJQbHVnaW4gfSBmcm9tICdAY2FwYWNpdG9yL2NvcmUnO1xuaW1wb3J0IHsgQXVkaW9Bc3NldCB9IGZyb20gJy4vYXVkaW8tYXNzZXQnO1xuZXhwb3J0IGNsYXNzIE5hdGl2ZUF1ZGlvV2ViIGV4dGVuZHMgV2ViUGx1Z2luIHtcbiAgYXN5bmMgcmVzdW1lKG9wdGlvbnMpIHtcbiAgICBjb25zdCBhdWRpbyA9IHRoaXMuZ2V0QXVkaW9Bc3NldChvcHRpb25zLmFzc2V0SWQpLmF1ZGlvO1xuICAgIGlmIChhdWRpby5wYXVzZWQpIHtcbiAgICAgIHJldHVybiBhdWRpby5wbGF5KCk7XG4gICAgfVxuICB9XG4gIGFzeW5jIHBhdXNlKG9wdGlvbnMpIHtcbiAgICBjb25zdCBhdWRpbyA9IHRoaXMuZ2V0QXVkaW9Bc3NldChvcHRpb25zLmFzc2V0SWQpLmF1ZGlvO1xuICAgIHJldHVybiBhdWRpby5wYXVzZSgpO1xuICB9XG4gIGFzeW5jIGdldEN1cnJlbnRUaW1lKG9wdGlvbnMpIHtcbiAgICBjb25zdCBhdWRpbyA9IHRoaXMuZ2V0QXVkaW9Bc3NldChvcHRpb25zLmFzc2V0SWQpLmF1ZGlvO1xuICAgIHJldHVybiB7XG4gICAgICBjdXJyZW50VGltZTogYXVkaW8uY3VycmVudFRpbWVcbiAgICB9O1xuICB9XG4gIGFzeW5jIGdldER1cmF0aW9uKG9wdGlvbnMpIHtcbiAgICBjb25zdCBhdWRpbyA9IHRoaXMuZ2V0QXVkaW9Bc3NldChvcHRpb25zLmFzc2V0SWQpLmF1ZGlvO1xuICAgIGlmIChOdW1iZXIuaXNOYU4oYXVkaW8uZHVyYXRpb24pKSB7XG4gICAgICB0aHJvdyAnbm8gZHVyYXRpb24gYXZhaWxhYmxlJztcbiAgICB9XG4gICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUoYXVkaW8uZHVyYXRpb24pKSB7XG4gICAgICB0aHJvdyAnZHVyYXRpb24gbm90IGF2YWlsYWJsZSA9PiBtZWRpYSByZXNvdXJjZSBpcyBzdHJlYW1pbmcnO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgZHVyYXRpb246IGF1ZGlvLmR1cmF0aW9uXG4gICAgfTtcbiAgfVxuICBhc3luYyBjb25maWd1cmUob3B0aW9ucykge1xuICAgIHRocm93IGBjb25maWd1cmUgaXMgbm90IHN1cHBvcnRlZCBmb3Igd2ViOiAke0pTT04uc3RyaW5naWZ5KG9wdGlvbnMpfWA7XG4gIH1cbiAgYXN5bmMgcHJlbG9hZChvcHRpb25zKSB7XG4gICAgdmFyIF9hO1xuICAgIGlmIChOYXRpdmVBdWRpb1dlYi5BVURJT19BU1NFVF9CWV9BU1NFVF9JRC5oYXMob3B0aW9ucy5hc3NldElkKSkge1xuICAgICAgdGhyb3cgJ0Fzc2V0SWQgYWxyZWFkeSBleGlzdHMuIFVubG9hZCBmaXJzdCBpZiBsaWtlIHRvIGNoYW5nZSEnO1xuICAgIH1cbiAgICBpZiAoISgoX2EgPSBvcHRpb25zLmFzc2V0UGF0aCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmxlbmd0aCkpIHtcbiAgICAgIHRocm93ICdubyBhc3NldFBhdGggcHJvdmlkZWQnO1xuICAgIH1cbiAgICBpZiAoIW9wdGlvbnMuaXNVcmwgJiYgIW5ldyBSZWdFeHAoJ14vPycgKyBOYXRpdmVBdWRpb1dlYi5GSUxFX0xPQ0FUSU9OKS50ZXN0KG9wdGlvbnMuYXNzZXRQYXRoKSkge1xuICAgICAgY29uc3Qgc2xhc2hQcmVmaXggPSBvcHRpb25zLmFzc2V0UGF0aC5zdGFydHNXaXRoKCcvJykgPyAnJyA6ICcvJztcbiAgICAgIG9wdGlvbnMuYXNzZXRQYXRoID0gYCR7TmF0aXZlQXVkaW9XZWIuRklMRV9MT0NBVElPTn0ke3NsYXNoUHJlZml4fSR7b3B0aW9ucy5hc3NldFBhdGh9YDtcbiAgICB9XG4gICAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8ob3B0aW9ucy5hc3NldFBhdGgpO1xuICAgIGF1ZGlvLmF1dG9wbGF5ID0gZmFsc2U7XG4gICAgYXVkaW8ubG9vcCA9IGZhbHNlO1xuICAgIGF1ZGlvLnByZWxvYWQgPSAnYXV0byc7XG4gICAgaWYgKG9wdGlvbnMudm9sdW1lKSB7XG4gICAgICBhdWRpby52b2x1bWUgPSBvcHRpb25zLnZvbHVtZTtcbiAgICB9XG4gICAgTmF0aXZlQXVkaW9XZWIuQVVESU9fQVNTRVRfQllfQVNTRVRfSUQuc2V0KG9wdGlvbnMuYXNzZXRJZCwgbmV3IEF1ZGlvQXNzZXQoYXVkaW8pKTtcbiAgfVxuICBhc3luYyBwbGF5KG9wdGlvbnMpIHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgYXVkaW8gPSB0aGlzLmdldEF1ZGlvQXNzZXQob3B0aW9ucy5hc3NldElkKS5hdWRpbztcbiAgICBhd2FpdCB0aGlzLnN0b3Aob3B0aW9ucyk7XG4gICAgYXVkaW8ubG9vcCA9IGZhbHNlO1xuICAgIGF1ZGlvLmN1cnJlbnRUaW1lID0gKF9hID0gb3B0aW9ucy50aW1lKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAwO1xuICAgIHJldHVybiBhdWRpby5wbGF5KCk7XG4gIH1cbiAgYXN5bmMgbG9vcChvcHRpb25zKSB7XG4gICAgY29uc3QgYXVkaW8gPSB0aGlzLmdldEF1ZGlvQXNzZXQob3B0aW9ucy5hc3NldElkKS5hdWRpbztcbiAgICBhd2FpdCB0aGlzLnN0b3Aob3B0aW9ucyk7XG4gICAgYXVkaW8ubG9vcCA9IHRydWU7XG4gICAgcmV0dXJuIGF1ZGlvLnBsYXkoKTtcbiAgfVxuICBhc3luYyBzdG9wKG9wdGlvbnMpIHtcbiAgICBjb25zdCBhdWRpbyA9IHRoaXMuZ2V0QXVkaW9Bc3NldChvcHRpb25zLmFzc2V0SWQpLmF1ZGlvO1xuICAgIGF1ZGlvLnBhdXNlKCk7XG4gICAgYXVkaW8ubG9vcCA9IGZhbHNlO1xuICAgIGF1ZGlvLmN1cnJlbnRUaW1lID0gMDtcbiAgfVxuICBhc3luYyB1bmxvYWQob3B0aW9ucykge1xuICAgIGF3YWl0IHRoaXMuc3RvcChvcHRpb25zKTtcbiAgICBOYXRpdmVBdWRpb1dlYi5BVURJT19BU1NFVF9CWV9BU1NFVF9JRC5kZWxldGUob3B0aW9ucy5hc3NldElkKTtcbiAgfVxuICBhc3luYyBzZXRWb2x1bWUob3B0aW9ucykge1xuICAgIGlmICh0eXBlb2YgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy52b2x1bWUpICE9PSAnbnVtYmVyJykge1xuICAgICAgdGhyb3cgJ25vIHZvbHVtZSBwcm92aWRlZCc7XG4gICAgfVxuICAgIGNvbnN0IGF1ZGlvID0gdGhpcy5nZXRBdWRpb0Fzc2V0KG9wdGlvbnMuYXNzZXRJZCkuYXVkaW87XG4gICAgYXVkaW8udm9sdW1lID0gb3B0aW9ucy52b2x1bWU7XG4gIH1cbiAgYXN5bmMgaXNQbGF5aW5nKG9wdGlvbnMpIHtcbiAgICBjb25zdCBhdWRpbyA9IHRoaXMuZ2V0QXVkaW9Bc3NldChvcHRpb25zLmFzc2V0SWQpLmF1ZGlvO1xuICAgIHJldHVybiB7XG4gICAgICBpc1BsYXlpbmc6ICFhdWRpby5wYXVzZWRcbiAgICB9O1xuICB9XG4gIGdldEF1ZGlvQXNzZXQoYXNzZXRJZCkge1xuICAgIHRoaXMuY2hlY2tBc3NldElkKGFzc2V0SWQpO1xuICAgIGlmICghTmF0aXZlQXVkaW9XZWIuQVVESU9fQVNTRVRfQllfQVNTRVRfSUQuaGFzKGFzc2V0SWQpKSB7XG4gICAgICB0aHJvdyBgbm8gYXNzZXQgZm9yIGFzc2V0SWQgXCIke2Fzc2V0SWR9XCIgYXZhaWxhYmxlLiBDYWxsIHByZWxvYWQgZmlyc3QhYDtcbiAgICB9XG4gICAgcmV0dXJuIE5hdGl2ZUF1ZGlvV2ViLkFVRElPX0FTU0VUX0JZX0FTU0VUX0lELmdldChhc3NldElkKTtcbiAgfVxuICBjaGVja0Fzc2V0SWQoYXNzZXRJZCkge1xuICAgIGlmICh0eXBlb2YgYXNzZXRJZCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93ICdhc3NldElkIG11c3QgYmUgYSBzdHJpbmcnO1xuICAgIH1cbiAgICBpZiAoIShhc3NldElkID09PSBudWxsIHx8IGFzc2V0SWQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFzc2V0SWQubGVuZ3RoKSkge1xuICAgICAgdGhyb3cgJ25vIGFzc2V0SWQgcHJvdmlkZWQnO1xuICAgIH1cbiAgfVxufVxuTmF0aXZlQXVkaW9XZWIuRklMRV9MT0NBVElPTiA9ICdhc3NldHMvc291bmRzJztcbk5hdGl2ZUF1ZGlvV2ViLkFVRElPX0FTU0VUX0JZX0FTU0VUX0lEID0gbmV3IE1hcCgpO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFPLElBQU0sYUFBTixNQUFpQjtBQUFBLEVBQ3RCLFlBQVksT0FBTztBQUNqQixTQUFLLFFBQVE7QUFBQSxFQUNmO0FBQ0Y7OztBQ0ZPLElBQU0saUJBQU4sTUFBTSx3QkFBdUIsVUFBVTtBQUFBLEVBQ3RDLE9BQU8sU0FBUztBQUFBO0FBQ3BCLFlBQU0sUUFBUSxLQUFLLGNBQWMsUUFBUSxPQUFPLEVBQUU7QUFDbEQsVUFBSSxNQUFNLFFBQVE7QUFDaEIsZUFBTyxNQUFNLEtBQUs7QUFBQSxNQUNwQjtBQUFBLElBQ0Y7QUFBQTtBQUFBLEVBQ00sTUFBTSxTQUFTO0FBQUE7QUFDbkIsWUFBTSxRQUFRLEtBQUssY0FBYyxRQUFRLE9BQU8sRUFBRTtBQUNsRCxhQUFPLE1BQU0sTUFBTTtBQUFBLElBQ3JCO0FBQUE7QUFBQSxFQUNNLGVBQWUsU0FBUztBQUFBO0FBQzVCLFlBQU0sUUFBUSxLQUFLLGNBQWMsUUFBUSxPQUFPLEVBQUU7QUFDbEQsYUFBTztBQUFBLFFBQ0wsYUFBYSxNQUFNO0FBQUEsTUFDckI7QUFBQSxJQUNGO0FBQUE7QUFBQSxFQUNNLFlBQVksU0FBUztBQUFBO0FBQ3pCLFlBQU0sUUFBUSxLQUFLLGNBQWMsUUFBUSxPQUFPLEVBQUU7QUFDbEQsVUFBSSxPQUFPLE1BQU0sTUFBTSxRQUFRLEdBQUc7QUFDaEMsY0FBTTtBQUFBLE1BQ1I7QUFDQSxVQUFJLENBQUMsT0FBTyxTQUFTLE1BQU0sUUFBUSxHQUFHO0FBQ3BDLGNBQU07QUFBQSxNQUNSO0FBQ0EsYUFBTztBQUFBLFFBQ0wsVUFBVSxNQUFNO0FBQUEsTUFDbEI7QUFBQSxJQUNGO0FBQUE7QUFBQSxFQUNNLFVBQVUsU0FBUztBQUFBO0FBQ3ZCLFlBQU0sdUNBQXVDLEtBQUssVUFBVSxPQUFPLENBQUM7QUFBQSxJQUN0RTtBQUFBO0FBQUEsRUFDTSxRQUFRLFNBQVM7QUFBQTtBQUNyQixVQUFJO0FBQ0osVUFBSSxnQkFBZSx3QkFBd0IsSUFBSSxRQUFRLE9BQU8sR0FBRztBQUMvRCxjQUFNO0FBQUEsTUFDUjtBQUNBLFVBQUksR0FBRyxLQUFLLFFBQVEsZUFBZSxRQUFRLE9BQU8sU0FBUyxTQUFTLEdBQUcsU0FBUztBQUM5RSxjQUFNO0FBQUEsTUFDUjtBQUNBLFVBQUksQ0FBQyxRQUFRLFNBQVMsQ0FBQyxJQUFJLE9BQU8sUUFBUSxnQkFBZSxhQUFhLEVBQUUsS0FBSyxRQUFRLFNBQVMsR0FBRztBQUMvRixjQUFNLGNBQWMsUUFBUSxVQUFVLFdBQVcsR0FBRyxJQUFJLEtBQUs7QUFDN0QsZ0JBQVEsWUFBWSxHQUFHLGdCQUFlLGFBQWEsR0FBRyxXQUFXLEdBQUcsUUFBUSxTQUFTO0FBQUEsTUFDdkY7QUFDQSxZQUFNLFFBQVEsSUFBSSxNQUFNLFFBQVEsU0FBUztBQUN6QyxZQUFNLFdBQVc7QUFDakIsWUFBTSxPQUFPO0FBQ2IsWUFBTSxVQUFVO0FBQ2hCLFVBQUksUUFBUSxRQUFRO0FBQ2xCLGNBQU0sU0FBUyxRQUFRO0FBQUEsTUFDekI7QUFDQSxzQkFBZSx3QkFBd0IsSUFBSSxRQUFRLFNBQVMsSUFBSSxXQUFXLEtBQUssQ0FBQztBQUFBLElBQ25GO0FBQUE7QUFBQSxFQUNNLEtBQUssU0FBUztBQUFBO0FBQ2xCLFVBQUk7QUFDSixZQUFNLFFBQVEsS0FBSyxjQUFjLFFBQVEsT0FBTyxFQUFFO0FBQ2xELFlBQU0sS0FBSyxLQUFLLE9BQU87QUFDdkIsWUFBTSxPQUFPO0FBQ2IsWUFBTSxlQUFlLEtBQUssUUFBUSxVQUFVLFFBQVEsT0FBTyxTQUFTLEtBQUs7QUFDekUsYUFBTyxNQUFNLEtBQUs7QUFBQSxJQUNwQjtBQUFBO0FBQUEsRUFDTSxLQUFLLFNBQVM7QUFBQTtBQUNsQixZQUFNLFFBQVEsS0FBSyxjQUFjLFFBQVEsT0FBTyxFQUFFO0FBQ2xELFlBQU0sS0FBSyxLQUFLLE9BQU87QUFDdkIsWUFBTSxPQUFPO0FBQ2IsYUFBTyxNQUFNLEtBQUs7QUFBQSxJQUNwQjtBQUFBO0FBQUEsRUFDTSxLQUFLLFNBQVM7QUFBQTtBQUNsQixZQUFNLFFBQVEsS0FBSyxjQUFjLFFBQVEsT0FBTyxFQUFFO0FBQ2xELFlBQU0sTUFBTTtBQUNaLFlBQU0sT0FBTztBQUNiLFlBQU0sY0FBYztBQUFBLElBQ3RCO0FBQUE7QUFBQSxFQUNNLE9BQU8sU0FBUztBQUFBO0FBQ3BCLFlBQU0sS0FBSyxLQUFLLE9BQU87QUFDdkIsc0JBQWUsd0JBQXdCLE9BQU8sUUFBUSxPQUFPO0FBQUEsSUFDL0Q7QUFBQTtBQUFBLEVBQ00sVUFBVSxTQUFTO0FBQUE7QUFDdkIsVUFBSSxRQUFRLFlBQVksUUFBUSxZQUFZLFNBQVMsU0FBUyxRQUFRLFlBQVksVUFBVTtBQUMxRixjQUFNO0FBQUEsTUFDUjtBQUNBLFlBQU0sUUFBUSxLQUFLLGNBQWMsUUFBUSxPQUFPLEVBQUU7QUFDbEQsWUFBTSxTQUFTLFFBQVE7QUFBQSxJQUN6QjtBQUFBO0FBQUEsRUFDTSxVQUFVLFNBQVM7QUFBQTtBQUN2QixZQUFNLFFBQVEsS0FBSyxjQUFjLFFBQVEsT0FBTyxFQUFFO0FBQ2xELGFBQU87QUFBQSxRQUNMLFdBQVcsQ0FBQyxNQUFNO0FBQUEsTUFDcEI7QUFBQSxJQUNGO0FBQUE7QUFBQSxFQUNBLGNBQWMsU0FBUztBQUNyQixTQUFLLGFBQWEsT0FBTztBQUN6QixRQUFJLENBQUMsZ0JBQWUsd0JBQXdCLElBQUksT0FBTyxHQUFHO0FBQ3hELFlBQU0seUJBQXlCLE9BQU87QUFBQSxJQUN4QztBQUNBLFdBQU8sZ0JBQWUsd0JBQXdCLElBQUksT0FBTztBQUFBLEVBQzNEO0FBQUEsRUFDQSxhQUFhLFNBQVM7QUFDcEIsUUFBSSxPQUFPLFlBQVksVUFBVTtBQUMvQixZQUFNO0FBQUEsSUFDUjtBQUNBLFFBQUksRUFBRSxZQUFZLFFBQVEsWUFBWSxTQUFTLFNBQVMsUUFBUSxTQUFTO0FBQ3ZFLFlBQU07QUFBQSxJQUNSO0FBQUEsRUFDRjtBQUNGO0FBQ0EsZUFBZSxnQkFBZ0I7QUFDL0IsZUFBZSwwQkFBMEIsb0JBQUksSUFBSTsiLCJuYW1lcyI6W10sInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswLDFdfQ==
