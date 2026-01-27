import {
  BarcodeValueType,
  LensFacing
} from "./chunk-B5WTG64I.js";
import {
  CapacitorException,
  ExceptionCode,
  WebPlugin
} from "./chunk-KGBWUDTS.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// node_modules/@capacitor-mlkit/barcode-scanning/dist/esm/web.js
var BarcodeScannerWeb = class extends WebPlugin {
  constructor() {
    super(...arguments);
    this._isSupported = "BarcodeDetector" in window;
    this.errorVideoElementMissing = "videoElement must be provided.";
    this.eventBarcodesScanned = "barcodesScanned";
  }
  startScan(options) {
    return __async(this, null, function* () {
      if (!this._isSupported) {
        throw this.createUnimplementedException();
      }
      if (!(options === null || options === void 0 ? void 0 : options.videoElement)) {
        throw new Error(this.errorVideoElementMissing);
      }
      this.videoElement = options.videoElement;
      this.stream = yield navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: {
            ideal: (options === null || options === void 0 ? void 0 : options.lensFacing) === LensFacing.Front ? "user" : "environment"
          }
        },
        audio: false
      });
      options.videoElement.srcObject = this.stream;
      yield options.videoElement.play();
      const barcodeDetector = new BarcodeDetector();
      this.intervalId = window.setInterval(() => __async(this, null, function* () {
        if (!options.videoElement) {
          return;
        }
        const barcodes = yield barcodeDetector.detect(options.videoElement);
        if (barcodes.length === 0) {
          return;
        } else {
          this.handleScannedBarcodes(barcodes);
        }
      }), 500);
    });
  }
  stopScan() {
    return __async(this, null, function* () {
      if (!this._isSupported) {
        throw this.createUnimplementedException();
      }
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = void 0;
      }
      if (this.stream) {
        this.stream.getTracks().forEach((track) => track.stop());
        this.stream = void 0;
      }
      if (this.videoElement) {
        this.videoElement.srcObject = null;
        this.videoElement = void 0;
      }
    });
  }
  readBarcodesFromImage(_options) {
    return __async(this, null, function* () {
      throw this.createUnimplementedException();
    });
  }
  scan() {
    return __async(this, null, function* () {
      throw this.createUnimplementedException();
    });
  }
  isSupported() {
    return __async(this, null, function* () {
      return {
        supported: this._isSupported
      };
    });
  }
  enableTorch() {
    return __async(this, null, function* () {
      throw this.createUnimplementedException();
    });
  }
  disableTorch() {
    return __async(this, null, function* () {
      throw this.createUnimplementedException();
    });
  }
  toggleTorch() {
    return __async(this, null, function* () {
      throw this.createUnimplementedException();
    });
  }
  isTorchEnabled() {
    return __async(this, null, function* () {
      throw this.createUnimplementedException();
    });
  }
  isTorchAvailable() {
    return __async(this, null, function* () {
      return {
        available: false
      };
    });
  }
  setZoomRatio(_options) {
    return __async(this, null, function* () {
      throw this.createUnimplementedException();
    });
  }
  getZoomRatio() {
    return __async(this, null, function* () {
      throw this.createUnimplementedException();
    });
  }
  getMinZoomRatio() {
    return __async(this, null, function* () {
      throw this.createUnimplementedException();
    });
  }
  getMaxZoomRatio() {
    return __async(this, null, function* () {
      throw this.createUnimplementedException();
    });
  }
  openSettings() {
    return __async(this, null, function* () {
      throw this.createUnimplementedException();
    });
  }
  isGoogleBarcodeScannerModuleAvailable() {
    return __async(this, null, function* () {
      throw this.createUnimplementedException();
    });
  }
  installGoogleBarcodeScannerModule() {
    return __async(this, null, function* () {
      throw this.createUnimplementedException();
    });
  }
  checkPermissions() {
    return __async(this, null, function* () {
      try {
        const result = yield navigator.permissions.query({
          name: "camera"
        });
        return {
          camera: result.state
        };
      } catch (error) {
        return {
          camera: "prompt"
        };
      }
    });
  }
  requestPermissions() {
    return __async(this, null, function* () {
      try {
        const stream = yield navigator.mediaDevices.getUserMedia({
          video: true
        });
        stream.getTracks().forEach((track) => track.stop());
        return {
          camera: "granted"
        };
      } catch (error) {
        return {
          camera: "denied"
        };
      }
    });
  }
  createUnimplementedException() {
    return new CapacitorException("This method is not implemented on web.", ExceptionCode.Unimplemented);
  }
  handleScannedBarcodes(barcodes) {
    const result = {
      barcodes: barcodes.map((barcode) => ({
        cornerPoints: [[barcode.cornerPoints[0].x, barcode.cornerPoints[0].y], [barcode.cornerPoints[1].x, barcode.cornerPoints[1].y], [barcode.cornerPoints[2].x, barcode.cornerPoints[2].y], [barcode.cornerPoints[3].x, barcode.cornerPoints[3].y]],
        displayValue: barcode.rawValue,
        rawValue: barcode.rawValue,
        format: barcode.format.toUpperCase(),
        valueType: BarcodeValueType.Unknown
      }))
    };
    this.notifyListeners(this.eventBarcodesScanned, result);
  }
};
export {
  BarcodeScannerWeb
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY2FwYWNpdG9yLW1sa2l0L2JhcmNvZGUtc2Nhbm5pbmcvZGlzdC9lc20vd2ViLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcGFjaXRvckV4Y2VwdGlvbiwgRXhjZXB0aW9uQ29kZSwgV2ViUGx1Z2luIH0gZnJvbSAnQGNhcGFjaXRvci9jb3JlJztcbmltcG9ydCB7IEJhcmNvZGVWYWx1ZVR5cGUsIExlbnNGYWNpbmcgfSBmcm9tICcuL2RlZmluaXRpb25zJztcbmV4cG9ydCBjbGFzcyBCYXJjb2RlU2Nhbm5lcldlYiBleHRlbmRzIFdlYlBsdWdpbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgdGhpcy5faXNTdXBwb3J0ZWQgPSAnQmFyY29kZURldGVjdG9yJyBpbiB3aW5kb3c7XG4gICAgdGhpcy5lcnJvclZpZGVvRWxlbWVudE1pc3NpbmcgPSAndmlkZW9FbGVtZW50IG11c3QgYmUgcHJvdmlkZWQuJztcbiAgICB0aGlzLmV2ZW50QmFyY29kZXNTY2FubmVkID0gJ2JhcmNvZGVzU2Nhbm5lZCc7XG4gIH1cbiAgYXN5bmMgc3RhcnRTY2FuKG9wdGlvbnMpIHtcbiAgICBpZiAoIXRoaXMuX2lzU3VwcG9ydGVkKSB7XG4gICAgICB0aHJvdyB0aGlzLmNyZWF0ZVVuaW1wbGVtZW50ZWRFeGNlcHRpb24oKTtcbiAgICB9XG4gICAgaWYgKCEob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnZpZGVvRWxlbWVudCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcih0aGlzLmVycm9yVmlkZW9FbGVtZW50TWlzc2luZyk7XG4gICAgfVxuICAgIHRoaXMudmlkZW9FbGVtZW50ID0gb3B0aW9ucy52aWRlb0VsZW1lbnQ7XG4gICAgdGhpcy5zdHJlYW0gPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7XG4gICAgICB2aWRlbzoge1xuICAgICAgICBmYWNpbmdNb2RlOiB7XG4gICAgICAgICAgaWRlYWw6IChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubGVuc0ZhY2luZykgPT09IExlbnNGYWNpbmcuRnJvbnQgPyAndXNlcicgOiAnZW52aXJvbm1lbnQnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBhdWRpbzogZmFsc2VcbiAgICB9KTtcbiAgICBvcHRpb25zLnZpZGVvRWxlbWVudC5zcmNPYmplY3QgPSB0aGlzLnN0cmVhbTtcbiAgICBhd2FpdCBvcHRpb25zLnZpZGVvRWxlbWVudC5wbGF5KCk7XG4gICAgY29uc3QgYmFyY29kZURldGVjdG9yID0gbmV3IEJhcmNvZGVEZXRlY3RvcigpO1xuICAgIHRoaXMuaW50ZXJ2YWxJZCA9IHdpbmRvdy5zZXRJbnRlcnZhbChhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoIW9wdGlvbnMudmlkZW9FbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGJhcmNvZGVzID0gYXdhaXQgYmFyY29kZURldGVjdG9yLmRldGVjdChvcHRpb25zLnZpZGVvRWxlbWVudCk7XG4gICAgICBpZiAoYmFyY29kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaGFuZGxlU2Nhbm5lZEJhcmNvZGVzKGJhcmNvZGVzKTtcbiAgICAgIH1cbiAgICB9LCA1MDApO1xuICB9XG4gIGFzeW5jIHN0b3BTY2FuKCkge1xuICAgIGlmICghdGhpcy5faXNTdXBwb3J0ZWQpIHtcbiAgICAgIHRocm93IHRoaXMuY3JlYXRlVW5pbXBsZW1lbnRlZEV4Y2VwdGlvbigpO1xuICAgIH1cbiAgICBpZiAodGhpcy5pbnRlcnZhbElkKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJZCk7XG4gICAgICB0aGlzLmludGVydmFsSWQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLnN0cmVhbSkge1xuICAgICAgdGhpcy5zdHJlYW0uZ2V0VHJhY2tzKCkuZm9yRWFjaCh0cmFjayA9PiB0cmFjay5zdG9wKCkpO1xuICAgICAgdGhpcy5zdHJlYW0gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLnZpZGVvRWxlbWVudCkge1xuICAgICAgdGhpcy52aWRlb0VsZW1lbnQuc3JjT2JqZWN0ID0gbnVsbDtcbiAgICAgIHRoaXMudmlkZW9FbGVtZW50ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuICBhc3luYyByZWFkQmFyY29kZXNGcm9tSW1hZ2UoX29wdGlvbnMpIHtcbiAgICB0aHJvdyB0aGlzLmNyZWF0ZVVuaW1wbGVtZW50ZWRFeGNlcHRpb24oKTtcbiAgfVxuICBhc3luYyBzY2FuKCkge1xuICAgIHRocm93IHRoaXMuY3JlYXRlVW5pbXBsZW1lbnRlZEV4Y2VwdGlvbigpO1xuICB9XG4gIGFzeW5jIGlzU3VwcG9ydGVkKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdXBwb3J0ZWQ6IHRoaXMuX2lzU3VwcG9ydGVkXG4gICAgfTtcbiAgfVxuICBhc3luYyBlbmFibGVUb3JjaCgpIHtcbiAgICB0aHJvdyB0aGlzLmNyZWF0ZVVuaW1wbGVtZW50ZWRFeGNlcHRpb24oKTtcbiAgfVxuICBhc3luYyBkaXNhYmxlVG9yY2goKSB7XG4gICAgdGhyb3cgdGhpcy5jcmVhdGVVbmltcGxlbWVudGVkRXhjZXB0aW9uKCk7XG4gIH1cbiAgYXN5bmMgdG9nZ2xlVG9yY2goKSB7XG4gICAgdGhyb3cgdGhpcy5jcmVhdGVVbmltcGxlbWVudGVkRXhjZXB0aW9uKCk7XG4gIH1cbiAgYXN5bmMgaXNUb3JjaEVuYWJsZWQoKSB7XG4gICAgdGhyb3cgdGhpcy5jcmVhdGVVbmltcGxlbWVudGVkRXhjZXB0aW9uKCk7XG4gIH1cbiAgYXN5bmMgaXNUb3JjaEF2YWlsYWJsZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYXZhaWxhYmxlOiBmYWxzZVxuICAgIH07XG4gIH1cbiAgYXN5bmMgc2V0Wm9vbVJhdGlvKF9vcHRpb25zKSB7XG4gICAgdGhyb3cgdGhpcy5jcmVhdGVVbmltcGxlbWVudGVkRXhjZXB0aW9uKCk7XG4gIH1cbiAgYXN5bmMgZ2V0Wm9vbVJhdGlvKCkge1xuICAgIHRocm93IHRoaXMuY3JlYXRlVW5pbXBsZW1lbnRlZEV4Y2VwdGlvbigpO1xuICB9XG4gIGFzeW5jIGdldE1pblpvb21SYXRpbygpIHtcbiAgICB0aHJvdyB0aGlzLmNyZWF0ZVVuaW1wbGVtZW50ZWRFeGNlcHRpb24oKTtcbiAgfVxuICBhc3luYyBnZXRNYXhab29tUmF0aW8oKSB7XG4gICAgdGhyb3cgdGhpcy5jcmVhdGVVbmltcGxlbWVudGVkRXhjZXB0aW9uKCk7XG4gIH1cbiAgYXN5bmMgb3BlblNldHRpbmdzKCkge1xuICAgIHRocm93IHRoaXMuY3JlYXRlVW5pbXBsZW1lbnRlZEV4Y2VwdGlvbigpO1xuICB9XG4gIGFzeW5jIGlzR29vZ2xlQmFyY29kZVNjYW5uZXJNb2R1bGVBdmFpbGFibGUoKSB7XG4gICAgdGhyb3cgdGhpcy5jcmVhdGVVbmltcGxlbWVudGVkRXhjZXB0aW9uKCk7XG4gIH1cbiAgYXN5bmMgaW5zdGFsbEdvb2dsZUJhcmNvZGVTY2FubmVyTW9kdWxlKCkge1xuICAgIHRocm93IHRoaXMuY3JlYXRlVW5pbXBsZW1lbnRlZEV4Y2VwdGlvbigpO1xuICB9XG4gIGFzeW5jIGNoZWNrUGVybWlzc2lvbnMoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG5hdmlnYXRvci5wZXJtaXNzaW9ucy5xdWVyeSh7XG4gICAgICAgIG5hbWU6ICdjYW1lcmEnXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNhbWVyYTogcmVzdWx0LnN0YXRlXG4gICAgICB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjYW1lcmE6ICdwcm9tcHQnXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICBhc3luYyByZXF1ZXN0UGVybWlzc2lvbnMoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHN0cmVhbSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHtcbiAgICAgICAgdmlkZW86IHRydWVcbiAgICAgIH0pO1xuICAgICAgc3RyZWFtLmdldFRyYWNrcygpLmZvckVhY2godHJhY2sgPT4gdHJhY2suc3RvcCgpKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNhbWVyYTogJ2dyYW50ZWQnXG4gICAgICB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjYW1lcmE6ICdkZW5pZWQnXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICBjcmVhdGVVbmltcGxlbWVudGVkRXhjZXB0aW9uKCkge1xuICAgIHJldHVybiBuZXcgQ2FwYWNpdG9yRXhjZXB0aW9uKCdUaGlzIG1ldGhvZCBpcyBub3QgaW1wbGVtZW50ZWQgb24gd2ViLicsIEV4Y2VwdGlvbkNvZGUuVW5pbXBsZW1lbnRlZCk7XG4gIH1cbiAgaGFuZGxlU2Nhbm5lZEJhcmNvZGVzKGJhcmNvZGVzKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgYmFyY29kZXM6IGJhcmNvZGVzLm1hcChiYXJjb2RlID0+ICh7XG4gICAgICAgIGNvcm5lclBvaW50czogW1tiYXJjb2RlLmNvcm5lclBvaW50c1swXS54LCBiYXJjb2RlLmNvcm5lclBvaW50c1swXS55XSwgW2JhcmNvZGUuY29ybmVyUG9pbnRzWzFdLngsIGJhcmNvZGUuY29ybmVyUG9pbnRzWzFdLnldLCBbYmFyY29kZS5jb3JuZXJQb2ludHNbMl0ueCwgYmFyY29kZS5jb3JuZXJQb2ludHNbMl0ueV0sIFtiYXJjb2RlLmNvcm5lclBvaW50c1szXS54LCBiYXJjb2RlLmNvcm5lclBvaW50c1szXS55XV0sXG4gICAgICAgIGRpc3BsYXlWYWx1ZTogYmFyY29kZS5yYXdWYWx1ZSxcbiAgICAgICAgcmF3VmFsdWU6IGJhcmNvZGUucmF3VmFsdWUsXG4gICAgICAgIGZvcm1hdDogYmFyY29kZS5mb3JtYXQudG9VcHBlckNhc2UoKSxcbiAgICAgICAgdmFsdWVUeXBlOiBCYXJjb2RlVmFsdWVUeXBlLlVua25vd25cbiAgICAgIH0pKVxuICAgIH07XG4gICAgdGhpcy5ub3RpZnlMaXN0ZW5lcnModGhpcy5ldmVudEJhcmNvZGVzU2Nhbm5lZCwgcmVzdWx0KTtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUVPLElBQU0sb0JBQU4sY0FBZ0MsVUFBVTtBQUFBLEVBQy9DLGNBQWM7QUFDWixVQUFNLEdBQUcsU0FBUztBQUNsQixTQUFLLGVBQWUscUJBQXFCO0FBQ3pDLFNBQUssMkJBQTJCO0FBQ2hDLFNBQUssdUJBQXVCO0FBQUEsRUFDOUI7QUFBQSxFQUNNLFVBQVUsU0FBUztBQUFBO0FBQ3ZCLFVBQUksQ0FBQyxLQUFLLGNBQWM7QUFDdEIsY0FBTSxLQUFLLDZCQUE2QjtBQUFBLE1BQzFDO0FBQ0EsVUFBSSxFQUFFLFlBQVksUUFBUSxZQUFZLFNBQVMsU0FBUyxRQUFRLGVBQWU7QUFDN0UsY0FBTSxJQUFJLE1BQU0sS0FBSyx3QkFBd0I7QUFBQSxNQUMvQztBQUNBLFdBQUssZUFBZSxRQUFRO0FBQzVCLFdBQUssU0FBUyxNQUFNLFVBQVUsYUFBYSxhQUFhO0FBQUEsUUFDdEQsT0FBTztBQUFBLFVBQ0wsWUFBWTtBQUFBLFlBQ1YsUUFBUSxZQUFZLFFBQVEsWUFBWSxTQUFTLFNBQVMsUUFBUSxnQkFBZ0IsV0FBVyxRQUFRLFNBQVM7QUFBQSxVQUNoSDtBQUFBLFFBQ0Y7QUFBQSxRQUNBLE9BQU87QUFBQSxNQUNULENBQUM7QUFDRCxjQUFRLGFBQWEsWUFBWSxLQUFLO0FBQ3RDLFlBQU0sUUFBUSxhQUFhLEtBQUs7QUFDaEMsWUFBTSxrQkFBa0IsSUFBSSxnQkFBZ0I7QUFDNUMsV0FBSyxhQUFhLE9BQU8sWUFBWSxNQUFZO0FBQy9DLFlBQUksQ0FBQyxRQUFR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
