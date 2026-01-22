import {
  StationWrapperService
} from "./chunk-5KXLLE34.js";
import {
  PersonnalisationService
} from "./chunk-CCA64IRZ.js";
import {
  NewsStateService
} from "./chunk-PXVTGX2T.js";
import {
  ForfaitsWrapperService
} from "./chunk-WJQU3GMM.js";
import {
  KYCWrapperService
} from "./chunk-CHFOG66O.js";
import {
  ProgramsService,
  ZonesService
} from "./chunk-XK4I5MHM.js";
import {
  environment
} from "./chunk-FOJAXRYS.js";
import {
  ErrorHandlerService
} from "./chunk-SARQRLZR.js";
import {
  StorageService
} from "./chunk-U6SJAXLK.js";
import {
  Injectable,
  firstValueFrom,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-DGENMXJW.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// src/app/services/internal/launch.service.ts
var _LaunchService = class _LaunchService {
  constructor(programsService, zonesService, stationWrapperService, newsStateService, forfaitService, kycService, personnalisationService, storageService, errorHandler) {
    this.programsService = programsService;
    this.zonesService = zonesService;
    this.stationWrapperService = stationWrapperService;
    this.newsStateService = newsStateService;
    this.forfaitService = forfaitService;
    this.kycService = kycService;
    this.personnalisationService = personnalisationService;
    this.storageService = storageService;
    this.errorHandler = errorHandler;
  }
  /**
   * Load all essential app data with retry logic
   */
  loadEssentialData() {
    return __async(this, arguments, function* (options = {}) {
      if (options.skipIfDataExists) {
        const existingProgram = yield this.storageService.get("program");
        const existingZones = yield this.storageService.get("zones");
        const existingForfaits = yield this.storageService.get("forfaits");
        const existingStations = yield this.storageService.get("stations");
        if (existingProgram && existingZones && existingForfaits && existingStations) {
          this.personnalisationService.setColors();
          this.personnalisationService.setTitle();
          this.kycService.setKycDocumentTypes();
          return;
        }
      }
      const retryOperation = (operation, name, maxRetries = 3) => __async(this, null, function* () {
        for (let i = 0; i < maxRetries; i++) {
          try {
            return yield operation();
          } catch (error) {
            if (i === maxRetries - 1) {
              console.error(`Final retry failed for ${name}:`, error);
              throw error;
            }
            console.warn(`Retry ${i + 1}/${maxRetries} for ${name} after error:`, error);
            yield new Promise((resolve) => setTimeout(resolve, 1e3 * (i + 1)));
          }
        }
      });
      try {
        const operations = [];
        const existingProgram = yield this.storageService.get("program");
        const existingZones = yield this.storageService.get("zones");
        if (!existingProgram || !options.skipIfDataExists) {
          operations.push(retryOperation(() => this.loadProgram(), "loadProgram"));
        }
        operations.push(retryOperation(() => this.loadStations(options.forceRefreshStations), "loadStations"));
        if (!existingZones || !options.skipIfDataExists) {
          operations.push(retryOperation(() => this.loadZones(), "loadZones"));
        }
        operations.push(retryOperation(() => this.newsStateService.retrieveNews(), "retrieveNews"), retryOperation(() => this.forfaitService.loadForfaits(), "loadForfaits"));
        yield Promise.all(operations);
      } catch (error) {
        this.errorHandler.handleError(error);
        console.error("\u274C LaunchService: Error loading essential data:", error);
      }
    });
  }
  /**
   * Load program configuration
   */
  loadProgram() {
    return __async(this, null, function* () {
      var _a;
      const program = yield firstValueFrom(this.programsService.retrieveProgram({
        program: environment.program,
        expand: ["config"]
      }));
      if ((_a = program.config) == null ? void 0 : _a.kyc_document_types) {
        this.kycService.kyc_document_types.set(program.config.kyc_document_types);
      }
      yield this.storageService.set("program", program);
      this.personnalisationService.setColors();
      this.personnalisationService.setTitle();
      this.kycService.setKycDocumentTypes();
    });
  }
  /**
   * Load stations data
   */
  loadStations(forceRefresh = true) {
    return __async(this, null, function* () {
      yield this.stationWrapperService.refreshStations(forceRefresh);
    });
  }
  /**
   * Load zones data
   */
  loadZones() {
    return __async(this, null, function* () {
      const response = yield firstValueFrom(this.zonesService.listZone({
        program: environment.program,
        status: "open",
        liveMode: environment.production,
        limit: 100
      }));
      const zonesToStore = "zones" in response ? response.zones : response;
      yield this.storageService.set("zones", zonesToStore);
    });
  }
};
_LaunchService.\u0275fac = function LaunchService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LaunchService)(\u0275\u0275inject(ProgramsService), \u0275\u0275inject(ZonesService), \u0275\u0275inject(StationWrapperService), \u0275\u0275inject(NewsStateService), \u0275\u0275inject(ForfaitsWrapperService), \u0275\u0275inject(KYCWrapperService), \u0275\u0275inject(PersonnalisationService), \u0275\u0275inject(StorageService), \u0275\u0275inject(ErrorHandlerService));
};
_LaunchService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LaunchService, factory: _LaunchService.\u0275fac, providedIn: "root" });
var LaunchService = _LaunchService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LaunchService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: ProgramsService }, { type: ZonesService }, { type: StationWrapperService }, { type: NewsStateService }, { type: ForfaitsWrapperService }, { type: KYCWrapperService }, { type: PersonnalisationService }, { type: StorageService }, { type: ErrorHandlerService }], null);
})();

export {
  LaunchService
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9zZXJ2aWNlcy9pbnRlcm5hbC9sYXVuY2guc2VydmljZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBmaXJzdFZhbHVlRnJvbSB9IGZyb20gJ3J4anMnXG5pbXBvcnQge1xuICBQcm9ncmFtc1NlcnZpY2UsXG4gIFpvbmVzU2VydmljZSxcbiAgTGlzdFpvbmUyMDBSZXNwb25zZSxcbn0gZnJvbSAnc3JjL2FwaS1jeWNsaXN0J1xuaW1wb3J0IHsgU3RhdGlvbldyYXBwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vYXBpLXdyYXBwZXJzL3N0YXRpb25zLnNlcnZpY2UnXG5pbXBvcnQgeyBOZXdzU3RhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vYXBpLXdyYXBwZXJzL25ld3Muc2VydmljZSdcbmltcG9ydCB7IEZvcmZhaXRzV3JhcHBlclNlcnZpY2UgfSBmcm9tICcuLi9hcGktd3JhcHBlcnMvZm9yZmFpdHMuc2VydmljZSdcbmltcG9ydCB7IEtZQ1dyYXBwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vYXBpLXdyYXBwZXJzL2t5Yy5zZXJ2aWNlJ1xuaW1wb3J0IHsgUGVyc29ubmFsaXNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi91dGlscy9wZXJzb25uYWxpc2F0aW9uLnNlcnZpY2UnXG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gJy4uL3V0aWxzL3N0b3JhZ2Uuc2VydmljZSdcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnc3JjL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCdcbmltcG9ydCB7IEVycm9ySGFuZGxlclNlcnZpY2UgfSBmcm9tICcuLi91dGlscy9lcnJvci1oYW5kbGVyLnNlcnZpY2UnXG5cbmV4cG9ydCBpbnRlcmZhY2UgTGF1bmNoT3B0aW9ucyB7XG4gIHNraXBJZkRhdGFFeGlzdHM/OiBib29sZWFuXG4gIGZvcmNlUmVmcmVzaFN0YXRpb25zPzogYm9vbGVhblxufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTGF1bmNoU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcHJvZ3JhbXNTZXJ2aWNlOiBQcm9ncmFtc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSB6b25lc1NlcnZpY2U6IFpvbmVzU2VydmljZSxcbiAgICBwcml2YXRlIHN0YXRpb25XcmFwcGVyU2VydmljZTogU3RhdGlvbldyYXBwZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgbmV3c1N0YXRlU2VydmljZTogTmV3c1N0YXRlU2VydmljZSxcbiAgICBwcml2YXRlIGZvcmZhaXRTZXJ2aWNlOiBGb3JmYWl0c1dyYXBwZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUga3ljU2VydmljZTogS1lDV3JhcHBlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBwZXJzb25uYWxpc2F0aW9uU2VydmljZTogUGVyc29ubmFsaXNhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzdG9yYWdlU2VydmljZTogU3RvcmFnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBlcnJvckhhbmRsZXI6IEVycm9ySGFuZGxlclNlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBMb2FkIGFsbCBlc3NlbnRpYWwgYXBwIGRhdGEgd2l0aCByZXRyeSBsb2dpY1xuICAgKi9cbiAgYXN5bmMgbG9hZEVzc2VudGlhbERhdGEob3B0aW9uczogTGF1bmNoT3B0aW9ucyA9IHt9KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLy8gQ2hlY2sgaWYgZXNzZW50aWFsIGRhdGEgYWxyZWFkeSBleGlzdHMgaW4gc3RvcmFnZVxuICAgIGlmIChvcHRpb25zLnNraXBJZkRhdGFFeGlzdHMpIHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nUHJvZ3JhbSA9IGF3YWl0IHRoaXMuc3RvcmFnZVNlcnZpY2UuZ2V0KCdwcm9ncmFtJylcbiAgICAgIGNvbnN0IGV4aXN0aW5nWm9uZXMgPSBhd2FpdCB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldCgnem9uZXMnKVxuICAgICAgY29uc3QgZXhpc3RpbmdGb3JmYWl0cyA9IGF3YWl0IHRoaXMuc3RvcmFnZVNlcnZpY2UuZ2V0KCdmb3JmYWl0cycpXG4gICAgICBjb25zdCBleGlzdGluZ1N0YXRpb25zID0gYXdhaXQgdGhpcy5zdG9yYWdlU2VydmljZS5nZXQoJ3N0YXRpb25zJylcblxuICAgICAgaWYgKFxuICAgICAgICBleGlzdGluZ1Byb2dyYW0gJiZcbiAgICAgICAgZXhpc3Rpbmdab25lcyAmJlxuICAgICAgICBleGlzdGluZ0ZvcmZhaXRzICYmXG4gICAgICAgIGV4aXN0aW5nU3RhdGlvbnNcbiAgICAgICkge1xuICAgICAgICAvLyBTdGlsbCBzZXQgY29sb3JzIGFuZCB0aXRsZSBmcm9tIGV4aXN0aW5nIHByb2dyYW1cbiAgICAgICAgdGhpcy5wZXJzb25uYWxpc2F0aW9uU2VydmljZS5zZXRDb2xvcnMoKVxuICAgICAgICB0aGlzLnBlcnNvbm5hbGlzYXRpb25TZXJ2aWNlLnNldFRpdGxlKClcbiAgICAgICAgdGhpcy5reWNTZXJ2aWNlLnNldEt5Y0RvY3VtZW50VHlwZXMoKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZXRyeU9wZXJhdGlvbiA9IGFzeW5jIChcbiAgICAgIG9wZXJhdGlvbjogKCkgPT4gUHJvbWlzZTxhbnk+LFxuICAgICAgbmFtZTogc3RyaW5nLFxuICAgICAgbWF4UmV0cmllcyA9IDNcbiAgICApID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF4UmV0cmllczsgaSsrKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIGF3YWl0IG9wZXJhdGlvbigpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgaWYgKGkgPT09IG1heFJldHJpZXMgLSAxKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBGaW5hbCByZXRyeSBmYWlsZWQgZm9yICR7bmFtZX06YCwgZXJyb3IpXG4gICAgICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgUmV0cnkgJHtpICsgMX0vJHttYXhSZXRyaWVzfSBmb3IgJHtuYW1lfSBhZnRlciBlcnJvcjpgLFxuICAgICAgICAgICAgZXJyb3JcbiAgICAgICAgICApXG4gICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwMCAqIChpICsgMSkpKSAvLyBFeHBvbmVudGlhbCBiYWNrb2ZmXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgb3BlcmF0aW9ucyA9IFtdXG5cbiAgICAgIC8vIENoZWNrIHdoYXQgbmVlZHMgdG8gYmUgbG9hZGVkXG4gICAgICBjb25zdCBleGlzdGluZ1Byb2dyYW0gPSBhd2FpdCB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldCgncHJvZ3JhbScpXG4gICAgICBjb25zdCBleGlzdGluZ1pvbmVzID0gYXdhaXQgdGhpcy5zdG9yYWdlU2VydmljZS5nZXQoJ3pvbmVzJylcblxuICAgICAgLy8gT25seSBsb2FkIHdoYXQncyBtaXNzaW5nIG9yIHJlcXVlc3RlZFxuICAgICAgaWYgKCFleGlzdGluZ1Byb2dyYW0gfHwgIW9wdGlvbnMuc2tpcElmRGF0YUV4aXN0cykge1xuICAgICAgICBvcGVyYXRpb25zLnB1c2gocmV0cnlPcGVyYXRpb24oKCkgPT4gdGhpcy5sb2FkUHJvZ3JhbSgpLCAnbG9hZFByb2dyYW0nKSlcbiAgICAgIH1cblxuICAgICAgLy8gQWx3YXlzIHJlZnJlc2ggc3RhdGlvbnMgKHRoZXkgY2hhbmdlIGZyZXF1ZW50bHkpXG4gICAgICBvcGVyYXRpb25zLnB1c2goXG4gICAgICAgIHJldHJ5T3BlcmF0aW9uKFxuICAgICAgICAgICgpID0+IHRoaXMubG9hZFN0YXRpb25zKG9wdGlvbnMuZm9yY2VSZWZyZXNoU3RhdGlvbnMpLFxuICAgICAgICAgICdsb2FkU3RhdGlvbnMnXG4gICAgICAgIClcbiAgICAgIClcblxuICAgICAgaWYgKCFleGlzdGluZ1pvbmVzIHx8ICFvcHRpb25zLnNraXBJZkRhdGFFeGlzdHMpIHtcbiAgICAgICAgb3BlcmF0aW9ucy5wdXNoKHJldHJ5T3BlcmF0aW9uKCgpID0+IHRoaXMubG9hZFpvbmVzKCksICdsb2FkWm9uZXMnKSlcbiAgICAgIH1cblxuICAgICAgLy8gQWx3YXlzIHJlZnJlc2ggbmV3cyBhbmQgZm9yZmFpdHNcbiAgICAgIG9wZXJhdGlvbnMucHVzaChcbiAgICAgICAgcmV0cnlPcGVyYXRpb24oXG4gICAgICAgICAgKCkgPT4gdGhpcy5uZXdzU3RhdGVTZXJ2aWNlLnJldHJpZXZlTmV3cygpLFxuICAgICAgICAgICdyZXRyaWV2ZU5ld3MnXG4gICAgICAgICksXG4gICAgICAgIHJldHJ5T3BlcmF0aW9uKCgpID0+IHRoaXMuZm9yZmFpdFNlcnZpY2UubG9hZEZvcmZhaXRzKCksICdsb2FkRm9yZmFpdHMnKVxuICAgICAgKVxuXG4gICAgICBhd2FpdCBQcm9taXNlLmFsbChvcGVyYXRpb25zKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihlcnJvcilcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+KdjCBMYXVuY2hTZXJ2aWNlOiBFcnJvciBsb2FkaW5nIGVzc2VudGlhbCBkYXRhOicsIGVycm9yKVxuICAgICAgLy8gRG9uJ3QgdGhyb3cgaGVyZSwgc29tZSBkYXRhIG1pZ2h0IGJlIG9wdGlvbmFsXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIExvYWQgcHJvZ3JhbSBjb25maWd1cmF0aW9uXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIGxvYWRQcm9ncmFtKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHByb2dyYW06IGFueSA9IGF3YWl0IGZpcnN0VmFsdWVGcm9tKFxuICAgICAgdGhpcy5wcm9ncmFtc1NlcnZpY2UucmV0cmlldmVQcm9ncmFtKHtcbiAgICAgICAgcHJvZ3JhbTogZW52aXJvbm1lbnQucHJvZ3JhbSxcbiAgICAgICAgZXhwYW5kOiBbJ2NvbmZpZyddLFxuICAgICAgfSlcbiAgICApXG5cbiAgICBpZiAocHJvZ3JhbS5jb25maWc/Lmt5Y19kb2N1bWVudF90eXBlcykge1xuICAgICAgdGhpcy5reWNTZXJ2aWNlLmt5Y19kb2N1bWVudF90eXBlcy5zZXQocHJvZ3JhbS5jb25maWcua3ljX2RvY3VtZW50X3R5cGVzKVxuICAgIH1cblxuICAgIGF3YWl0IHRoaXMuc3RvcmFnZVNlcnZpY2Uuc2V0KCdwcm9ncmFtJywgcHJvZ3JhbSlcbiAgICB0aGlzLnBlcnNvbm5hbGlzYXRpb25TZXJ2aWNlLnNldENvbG9ycygpXG4gICAgdGhpcy5wZXJzb25uYWxpc2F0aW9uU2VydmljZS5zZXRUaXRsZSgpXG4gICAgdGhpcy5reWNTZXJ2aWNlLnNldEt5Y0RvY3VtZW50VHlwZXMoKVxuICB9XG5cbiAgLyoqXG4gICAqIExvYWQgc3RhdGlvbnMgZGF0YVxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBsb2FkU3RhdGlvbnMoZm9yY2VSZWZyZXNoOiBib29sZWFuID0gdHJ1ZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IHRoaXMuc3RhdGlvbldyYXBwZXJTZXJ2aWNlLnJlZnJlc2hTdGF0aW9ucyhmb3JjZVJlZnJlc2gpXG4gIH1cblxuICAvKipcbiAgICogTG9hZCB6b25lcyBkYXRhXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIGxvYWRab25lcygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCByZXNwb25zZTogTGlzdFpvbmUyMDBSZXNwb25zZSA9IGF3YWl0IGZpcnN0VmFsdWVGcm9tKFxuICAgICAgdGhpcy56b25lc1NlcnZpY2UubGlzdFpvbmUoe1xuICAgICAgICBwcm9ncmFtOiBlbnZpcm9ubWVudC5wcm9ncmFtLFxuICAgICAgICBzdGF0dXM6ICdvcGVuJyxcbiAgICAgICAgbGl2ZU1vZGU6IGVudmlyb25tZW50LnByb2R1Y3Rpb24sXG4gICAgICAgIGxpbWl0OiAxMDAsXG4gICAgICB9KVxuICAgIClcblxuICAgIGNvbnN0IHpvbmVzVG9TdG9yZSA9XG4gICAgICAnem9uZXMnIGluIHJlc3BvbnNlID8gKHJlc3BvbnNlIGFzIGFueSkuem9uZXMgOiByZXNwb25zZVxuICAgIGF3YWl0IHRoaXMuc3RvcmFnZVNlcnZpY2Uuc2V0KCd6b25lcycsIHpvbmVzVG9TdG9yZSlcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCTSxJQUFPLGlCQUFQLE1BQU8sZUFBYTtFQUN4QixZQUNVLGlCQUNBLGNBQ0EsdUJBQ0Esa0JBQ0EsZ0JBQ0EsWUFDQSx5QkFDQSxnQkFDQSxjQUFpQztBQVJqQyxTQUFBLGtCQUFBO0FBQ0EsU0FBQSxlQUFBO0FBQ0EsU0FBQSx3QkFBQTtBQUNBLFNBQUEsbUJBQUE7QUFDQSxTQUFBLGlCQUFBO0FBQ0EsU0FBQSxhQUFBO0FBQ0EsU0FBQSwwQkFBQTtBQUNBLFNBQUEsaUJBQUE7QUFDQSxTQUFBLGVBQUE7RUFDUDs7OztFQUtHLG9CQUE2QzsrQ0FBM0IsVUFBeUIsQ0FBQSxHQUFFO0FBRWpELFVBQUksUUFBUSxrQkFBa0I7QUFDNUIsY0FBTSxrQkFBa0IsTUFBTSxLQUFLLGVBQWUsSUFBSSxTQUFTO0FBQy9ELGNBQU0sZ0JBQWdCLE1BQU0sS0FBSyxlQUFlLElBQUksT0FBTztBQUMzRCxjQUFNLG1CQUFtQixNQUFNLEtBQUssZUFBZSxJQUFJLFVBQVU7QUFDakUsY0FBTSxtQkFBbUIsTUFBTSxLQUFLLGVBQWUsSUFBSSxVQUFVO0FBRWpFLFlBQ0UsbUJBQ0EsaUJBQ0Esb0JBQ0Esa0JBQ0E7QUFFQSxlQUFLLHdCQUF3QixVQUFTO0FBQ3RDLGVBQUssd0JBQXdCLFNBQVE7QUFDckMsZUFBSyxXQUFXLG9CQUFtQjtBQUNuQztRQUNGO01BQ0Y7QUFFQSxZQUFNLGlCQUFpQixDQUNyQixXQUNBLE1BQ0EsYUFBYSxNQUNYO0FBQ0YsaUJBQVMsSUFBSSxHQUFHLElBQUksWUFBWSxLQUFLO0FBQ25DLGNBQUk7QUFDRixtQkFBTyxNQUFNLFVBQVM7VUFDeEIsU0FBUyxPQUFPO0FBQ2QsZ0JBQUksTUFBTSxhQUFhLEdBQUc7QUFDeEIsc0JBQVEsTUFBTSwwQkFBMEIsSUFBSSxLQUFLLEtBQUs7QUFDdEQsb0JBQU07WUFDUjtBQUNBLG9CQUFRLEtBQ04sU0FBUyxJQUFJLENBQUMsSUFBSSxVQUFVLFFBQVEsSUFBSSxpQkFDeEMsS0FBSztBQUVQLGtCQUFNLElBQUksUUFBUSxDQUFDLFlBQVksV0FBVyxTQUFTLE9BQVEsSUFBSSxFQUFFLENBQUM7VUFDcEU7UUFDRjtNQUNGO0FBRUEsVUFBSTtBQUNGLGNBQU0sYUFBYSxDQUFBO0FBR25CLGNBQU0sa0JBQWtCLE1BQU0sS0FBSyxlQUFlLElBQUksU0FBUztBQUMvRCxjQUFNLGdCQUFnQixNQUFNLEtBQUssZUFBZSxJQUFJLE9BQU87QUFHM0QsWUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsa0JBQWtCO0FBQ2pELHFCQUFXLEtBQUssZUFBZSxNQUFNLEtBQUssWUFBVyxHQUFJLGFBQWEsQ0FBQztRQUN6RTtBQUdBLG1CQUFXLEtBQ1QsZUFDRSxNQUFNLEtBQUssYUFBYSxRQUFRLG9CQUFvQixHQUNwRCxjQUFjLENBQ2Y7QUFHSCxZQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxrQkFBa0I7QUFDL0MscUJBQVcsS0FBSyxlQUFlLE1BQU0sS0FBSyxVQUFTLEdBQUksV0FBVyxDQUFDO1FBQ3JFO0FBR0EsbUJBQVcsS0FDVCxlQUNFLE1BQU0sS0FBSyxpQkFBaUIsYUFBWSxHQUN4QyxjQUFjLEdBRWhCLGVBQWUsTUFBTSxLQUFLLGVBQWUsYUFBWSxHQUFJLGNBQWMsQ0FBQztBQUcxRSxjQUFNLFFBQVEsSUFBSSxVQUFVO01BQzlCLFNBQVMsT0FBTztBQUNkLGFBQUssYUFBYSxZQUFZLEtBQUs7QUFDbkMsZ0JBQVEsTUFBTSx1REFBa0QsS0FBSztNQUV2RTtJQUNGOzs7OztFQUtjLGNBQVc7O0FBaEkzQjtBQWlJSSxZQUFNLFVBQWUsTUFBTSxlQUN6QixLQUFLLGdCQUFnQixnQkFBZ0I7UUFDbkMsU0FBUyxZQUFZO1FBQ3JCLFFBQVEsQ0FBQyxRQUFRO09BQ2xCLENBQUM7QUFHSixXQUFJLGFBQVEsV0FBUixtQkFBZ0Isb0JBQW9CO0FBQ3RDLGFBQUssV0FBVyxtQkFBbUIsSUFBSSxRQUFRLE9BQU8sa0JBQWtCO01BQzFFO0FBRUEsWUFBTSxLQUFLLGVBQWUsSUFBSSxXQUFXLE9BQU87QUFDaEQsV0FBSyx3QkFBd0IsVUFBUztBQUN0QyxXQUFLLHdCQUF3QixTQUFRO0FBQ3JDLFdBQUssV0FBVyxvQkFBbUI7SUFDckM7Ozs7O0VBS2MsYUFBYSxlQUF3QixNQUFJOztBQUNyRCxZQUFNLEtBQUssc0JBQXNCLGdCQUFnQixZQUFZO0lBQy9EOzs7OztFQUtjLFlBQVM7O0FBQ3JCLFlBQU0sV0FBZ0MsTUFBTSxlQUMxQyxLQUFLLGFBQWEsU0FBUztRQUN6QixTQUFTLFlBQVk7UUFDckIsUUFBUTtRQUNSLFVBQVUsWUFBWTtRQUN0QixPQUFPO09BQ1IsQ0FBQztBQUdKLFlBQU0sZUFDSixXQUFXLFdBQVksU0FBaUIsUUFBUTtBQUNsRCxZQUFNLEtBQUssZUFBZSxJQUFJLFNBQVMsWUFBWTtJQUNyRDs7OzttQ0FqSlcsZ0JBQWEsbUJBQUEsZUFBQSxHQUFBLG1CQUFBLFlBQUEsR0FBQSxtQkFBQSxxQkFBQSxHQUFBLG1CQUFBLGdCQUFBLEdBQUEsbUJBQUEsc0JBQUEsR0FBQSxtQkFBQSxpQkFBQSxHQUFBLG1CQUFBLHVCQUFBLEdBQUEsbUJBQUEsY0FBQSxHQUFBLG1CQUFBLG1CQUFBLENBQUE7QUFBQTtrRkFBYixnQkFBYSxTQUFiLGVBQWEsV0FBQSxZQUZaLE9BQU0sQ0FBQTtBQUVkLElBQU8sZ0JBQVA7O3NFQUFPLGVBQWEsQ0FBQTtVQUh6QjtXQUFXO01BQ1YsWUFBWTtLQUNiOzs7IiwKICAibmFtZXMiOiBbXQp9Cg==
