import {
  GeolocationService,
  StationWrapperService
} from "./chunk-5KXLLE34.js";
import {
  AuthService
} from "./chunk-WJQU3GMM.js";
import {
  FcmService
} from "./chunk-RAVV2QIY.js";
import {
  AppstateService
} from "./chunk-T6WE2PS5.js";
import {
  AccountService,
  BASE_PATH,
  Configuration,
  CustomHttpParameterCodec,
  TerminationRequestsService,
  TripsService
} from "./chunk-XK4I5MHM.js";
import {
  environment
} from "./chunk-FOJAXRYS.js";
import {
  ErrorHandlerService,
  ToastService
} from "./chunk-SARQRLZR.js";
import {
  StorageService
} from "./chunk-U6SJAXLK.js";
import {
  AlertController,
  BehaviorSubject,
  HttpClient,
  HttpContext,
  HttpHeaders,
  Inject,
  Injectable,
  LoadingController,
  Optional,
  Router,
  ToastController,
  TranslateService,
  effect,
  firstValueFrom,
  forkJoin,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-DGENMXJW.js";
import {
  Capacitor
} from "./chunk-KGBWUDTS.js";
import {
  __async,
  __spreadValues
} from "./chunk-UESUV5PM.js";

// src/api-cyclist/api/tripsPony.service.ts
var _TripsPonyService = class _TripsPonyService {
  constructor(httpClient, basePath, configuration) {
    this.httpClient = httpClient;
    this.basePath = environment.basePath;
    this.defaultHeaders = new HttpHeaders();
    this.configuration = new Configuration();
    if (configuration) {
      this.configuration = configuration;
    }
    if (typeof this.configuration.basePath !== "string") {
      const firstBasePath = Array.isArray(basePath) ? basePath[0] : void 0;
      if (firstBasePath != void 0) {
        basePath = firstBasePath;
      }
      if (typeof basePath !== "string") {
        basePath = this.basePath;
      }
      this.configuration.basePath = basePath;
    }
    this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
  }
  // @ts-ignore
  addToHttpParams(httpParams, value, key) {
    if (typeof value === "object" && value instanceof Date === false) {
      httpParams = this.addToHttpParamsRecursive(httpParams, value);
    } else {
      httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
    }
    return httpParams;
  }
  addToHttpParamsRecursive(httpParams, value, key) {
    if (value == null) {
      return httpParams;
    }
    if (typeof value === "object") {
      if (Array.isArray(value)) {
        ;
        value.forEach((elem) => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
      } else if (value instanceof Date) {
        if (key != null) {
          httpParams = httpParams.append(key, value.toISOString().substring(0, 10));
        } else {
          throw Error("key may not be null if value is Date");
        }
      } else {
        Object.keys(value).forEach((k) => httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k));
      }
    } else if (key != null) {
      httpParams = httpParams.append(key, value);
    } else {
      throw Error("key may not be null if value is not object or array");
    }
    return httpParams;
  }
  pauseTrip(requestParameters, observe = "body", reportProgress = false, options) {
    const id = requestParameters == null ? void 0 : requestParameters.id;
    if (id === null || id === void 0) {
      throw new Error("Required parameter id was null or undefined when calling pauseTrip.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const pauseTripRequest = requestParameters == null ? void 0 : requestParameters.pauseTripRequest;
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    let localVarHttpHeaderAcceptSelected = options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === void 0) {
      const httpHeaderAccepts = [];
      localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    let localVarHttpContext = options && options.context;
    if (localVarHttpContext === void 0) {
      localVarHttpContext = new HttpContext();
    }
    let localVarTransferCache = options && options.transferCache;
    if (localVarTransferCache === void 0) {
      localVarTransferCache = true;
    }
    const consumes = ["application/json"];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Content-Type", httpContentTypeSelected);
    }
    let responseType_ = "json";
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith("text")) {
        responseType_ = "text";
      } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
        responseType_ = "json";
      } else {
        responseType_ = "blob";
      }
    }
    let localVarPath = `/pony/trips/${this.configuration.encodeParam({
      name: "id",
      value: id,
      in: "path",
      style: "simple",
      explode: false,
      dataType: "string",
      dataFormat: void 0
    })}/pause`;
    return this.httpClient.request("post", `${this.configuration.basePath}${localVarPath}`, {
      context: localVarHttpContext,
      body: pauseTripRequest,
      responseType: responseType_,
      withCredentials: this.configuration.withCredentials,
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    });
  }
  resumeTrip(requestParameters, observe = "body", reportProgress = false, options) {
    const id = requestParameters == null ? void 0 : requestParameters.id;
    if (id === null || id === void 0) {
      throw new Error("Required parameter id was null or undefined when calling resumeTrip.");
    }
    const liveMode = requestParameters == null ? void 0 : requestParameters.liveMode;
    const resumeTripRequest = requestParameters == null ? void 0 : requestParameters.resumeTripRequest;
    let localVarHeaders = this.defaultHeaders;
    if (liveMode !== void 0 && liveMode !== null) {
      localVarHeaders = localVarHeaders.set("Live-Mode", String(liveMode));
    }
    let localVarHttpHeaderAcceptSelected = options && options.httpHeaderAccept;
    if (localVarHttpHeaderAcceptSelected === void 0) {
      const httpHeaderAccepts = [];
      localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    }
    if (localVarHttpHeaderAcceptSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Accept", localVarHttpHeaderAcceptSelected);
    }
    let localVarHttpContext = options && options.context;
    if (localVarHttpContext === void 0) {
      localVarHttpContext = new HttpContext();
    }
    let localVarTransferCache = options && options.transferCache;
    if (localVarTransferCache === void 0) {
      localVarTransferCache = true;
    }
    const consumes = ["application/json"];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected !== void 0) {
      localVarHeaders = localVarHeaders.set("Content-Type", httpContentTypeSelected);
    }
    let responseType_ = "json";
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith("text")) {
        responseType_ = "text";
      } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
        responseType_ = "json";
      } else {
        responseType_ = "blob";
      }
    }
    let localVarPath = `/pony/trips/${this.configuration.encodeParam({
      name: "id",
      value: id,
      in: "path",
      style: "simple",
      explode: false,
      dataType: "string",
      dataFormat: void 0
    })}/resume`;
    return this.httpClient.request("post", `${this.configuration.basePath}${localVarPath}`, {
      context: localVarHttpContext,
      body: resumeTripRequest,
      responseType: responseType_,
      withCredentials: this.configuration.withCredentials,
      headers: localVarHeaders,
      observe,
      transferCache: localVarTransferCache,
      reportProgress
    });
  }
};
_TripsPonyService.\u0275fac = function TripsPonyService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TripsPonyService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(BASE_PATH, 8), \u0275\u0275inject(Configuration, 8));
};
_TripsPonyService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TripsPonyService, factory: _TripsPonyService.\u0275fac, providedIn: "root" });
var TripsPonyService = _TripsPonyService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TripsPonyService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: void 0, decorators: [{
    type: Optional
  }, {
    type: Inject,
    args: [BASE_PATH]
  }] }, { type: Configuration, decorators: [{
    type: Optional
  }] }], null);
})();

// src/app/services/api-wrappers/renting.service.ts
var _RentingService = class _RentingService {
  constructor(translate, loadingController, toastController, tripsService, router, alertController, geolocationService, terminationRequestsService, authService, toastService, storageService, fcmService, appService, stationWrapperService, tripsPonyService, accountService, errorHandler) {
    this.translate = translate;
    this.loadingController = loadingController;
    this.toastController = toastController;
    this.tripsService = tripsService;
    this.router = router;
    this.alertController = alertController;
    this.geolocationService = geolocationService;
    this.terminationRequestsService = terminationRequestsService;
    this.authService = authService;
    this.toastService = toastService;
    this.storageService = storageService;
    this.fcmService = fcmService;
    this.appService = appService;
    this.stationWrapperService = stationWrapperService;
    this.tripsPonyService = tripsPonyService;
    this.accountService = accountService;
    this.errorHandler = errorHandler;
    this.rentingState = new BehaviorSubject({ state: "loading" });
    this.RECOMMENDATION_TTL = 24 * 60 * 60 * 1e3;
    this.recommendations$ = new BehaviorSubject(/* @__PURE__ */ new Map());
    effect(() => {
      if (this.authService.authState().state === "SignedOut") {
        this.rentingState.next({ state: "noData" });
      }
    });
    this.appService.appState.subscribe((state) => {
      this.appState = state;
    });
    this.geolocationService.geolocationState.subscribe((state) => {
      this.geolocState = state;
    });
    this.getCurrentTrips();
    this.initializeRecommendations();
  }
  doesTripMatchVehicle(trip, vehicle) {
    const tripVehicule = trip.vehicule;
    const tripVehiculeId = typeof tripVehicule === "string" ? tripVehicule : tripVehicule == null ? void 0 : tripVehicule.id;
    const tripVehiculeNumber = typeof tripVehicule === "string" ? void 0 : tripVehicule == null ? void 0 : tripVehicule.number;
    const vehicleId = vehicle == null ? void 0 : vehicle.id;
    const vehicleNumber = vehicle == null ? void 0 : vehicle.number;
    if (vehicleId && tripVehiculeId && String(vehicleId) === String(tripVehiculeId)) {
      return true;
    }
    if (vehicleNumber != null && (tripVehiculeNumber != null || tripVehiculeId != null)) {
      const vNum = String(vehicleNumber);
      if (tripVehiculeNumber != null && String(tripVehiculeNumber) === vNum) {
        return true;
      }
      if (tripVehiculeId != null && String(tripVehiculeId) === vNum) {
        return true;
      }
    }
    return false;
  }
  /**
   * Returns the user's current "pitstop" trip matching the given vehicle, if any.
   * Uses in-memory state first, then falls back to a backend fetch (when signed-in).
   */
  findTripForVehicle(vehicle) {
    return __async(this, null, function* () {
      var _a;
      const currentState = this.rentingState.value;
      if (currentState.state === "trips") {
        const inMemory = currentState.trips.find((t) => (t.status === "pitstop" || t.status === "renting") && this.doesTripMatchVehicle(t, vehicle));
        if (inMemory)
          return inMemory;
      }
      if (this.authService.authState().state === "SignedOut") {
        return null;
      }
      try {
        const res = yield firstValueFrom(this.tripsService.listTrip({
          program: environment.program,
          expand: ["vehicule"],
          statusIn: ["pitstop"],
          limit: 100
        }));
        const pitstop = (_a = res.data) == null ? void 0 : _a.find((t) => t.status === "pitstop" && this.doesTripMatchVehicle(t, vehicle));
        return pitstop != null ? pitstop : null;
      } catch {
        return null;
      }
    });
  }
  initializeRecommendations() {
    return __async(this, null, function* () {
      const stored = yield this.storageService.get("user-recommendations");
      if (stored) {
        const recommendations = /* @__PURE__ */ new Map();
        const currentTime = Date.now();
        stored.filter((rec) => currentTime - rec.timestamp < this.RECOMMENDATION_TTL).forEach((rec) => recommendations.set(rec.tripId, rec.timestamp));
        this.recommendations$.next(recommendations);
        if (stored.length !== recommendations.size) {
          yield this.saveRecommendations(recommendations);
        }
      }
    });
  }
  saveRecommendations(recommendations) {
    return __async(this, null, function* () {
      const storedFormat = Array.from(recommendations.entries()).map(([tripId, timestamp]) => ({
        tripId,
        timestamp
      }));
      yield this.storageService.set("user-recommendations", storedFormat);
    });
  }
  hasRecommended(tripId) {
    const recommendations = this.recommendations$.value;
    const timestamp = recommendations.get(tripId);
    if (!timestamp)
      return false;
    return Date.now() - timestamp < this.RECOMMENDATION_TTL;
  }
  startRenting(vehicle, checkLocation = true, autoUnlock = false, showLoader = true, skipRedirect = false) {
    return __async(this, null, function* () {
      yield this.fcmService.checkPermission();
      if (checkLocation) {
        if (this.geolocState.state === "live_position" || this.geolocState.state === "unique_position") {
          const canRent = yield this.isInRangeForRenting(vehicle, this.geolocState.position.coords);
          if (!canRent) {
            return;
          }
        }
      }
      let loading = null;
      if (showLoader) {
        loading = yield this.loadingController.create({
          message: this.translate.instant("generic.loading")
        });
        yield loading.present();
      }
      return new Promise((resolve, reject) => {
        this.tripsService.createTrip({
          program: environment.program,
          body: {
            vehicule: vehicle.id,
            origin: Capacitor.isNativePlatform() ? "mobile" : "web",
            auto_unlock: autoUnlock
          }
        }).subscribe({
          next: (trip) => __async(this, null, function* () {
            this.getCurrentTrips();
            yield this.stationWrapperService.refreshStations(true);
            if (loading)
              yield loading.dismiss();
            if (skipRedirect) {
              resolve(trip);
            } else {
              this.router.navigate(["/trips/congrats"], {
                state: { trip }
              });
              resolve(void 0);
            }
          }),
          error: (err) => __async(this, null, function* () {
            var _a;
            if (loading)
              yield loading.dismiss();
            if (!autoUnlock) {
              const error = yield this.toastController.create({
                message: ((_a = err.error.message.split("|")[1]) == null ? void 0 : _a.trim()) || err.error.message,
                duration: 3e3,
                color: "danger"
              });
              yield error.present();
            }
            reject(err);
          })
        });
      });
    });
  }
  pauseTrip(tripId) {
    return __async(this, null, function* () {
      const confirmAlert = yield this.alertController.create({
        header: this.translate.instant("renting.alerts.pause_trip"),
        message: this.translate.instant("renting.alerts.pause_trip_confirmation"),
        buttons: [
          {
            text: this.translate.instant("generic.cancel"),
            role: "cancel",
            handler: () => false
          },
          {
            text: this.translate.instant("renting.actions.pause"),
            role: "confirm",
            handler: () => true
          }
        ]
      });
      yield confirmAlert.present();
      const result = yield confirmAlert.onDidDismiss();
      if (result.role !== "confirm") {
        return false;
      }
      const loading = yield this.loadingController.create({
        message: this.translate.instant("generic.loading")
      });
      yield loading.present();
      try {
        yield firstValueFrom(this.tripsPonyService.pauseTrip({
          id: tripId,
          liveMode: environment.production,
          pauseTripRequest: {
            cyclist: this.accountService.getCurrentCyclist().id
          }
        }));
        yield new Promise((resolve) => setTimeout(resolve, 2500));
        yield loading.dismiss();
        this.getCurrentTrips();
        return true;
      } catch (err) {
        yield loading.dismiss();
        this.errorHandler.handleError(err);
        return false;
      }
    });
  }
  isInRangeForRenting(vehicle, userCoords) {
    return __async(this, null, function* () {
      let distance;
      if (!userCoords || !vehicle.position) {
        distance = null;
      } else {
        distance = this.geolocationService.calculateDistance(vehicle.position, {
          latitude: userCoords.latitude,
          longitude: userCoords.longitude
        });
      }
      if (distance === null) {
        const alert = yield this.alertController.create({
          header: this.translate.instant("renting.alerts.attention"),
          message: this.translate.instant("renting.alerts.position_unknown"),
          buttons: [
            {
              text: this.translate.instant("generic.cancel"),
              role: "cancel",
              handler: () => false
            },
            {
              text: this.translate.instant("renting.actions.start"),
              role: "confirm",
              handler: () => true
            }
          ]
        });
        yield alert.present();
        const result = yield alert.onDidDismiss();
        return result.role === "confirm";
      }
      if (distance && distance > 100) {
        const alert = yield this.alertController.create({
          header: this.translate.instant("renting.alerts.attention"),
          message: this.translate.instant("renting.alerts.vehicle_far", {
            distance
          }),
          buttons: [
            {
              text: this.translate.instant("generic.cancel"),
              role: "cancel",
              handler: () => false
            },
            {
              text: this.translate.instant("renting.actions.start"),
              role: "confirm",
              handler: () => true
            }
          ]
        });
        yield alert.present();
        const result = yield alert.onDidDismiss();
        return result.role === "confirm";
      } else {
        return true;
      }
    });
  }
  getCurrentTrips() {
    if (this.authService.authState().state === "SignedOut") {
      this.rentingState.next({ state: "noData" });
      return;
    } else {
      this.rentingState.next({ state: "loading" });
      forkJoin({
        renting: this.tripsService.listTrip({
          program: environment.program,
          expand: ["vehicule"],
          statusIn: ["renting,pitstop,terminating,termination_requested"]
        }),
        completed: this.tripsService.listTrip({
          program: environment.program,
          expand: ["vehicule"],
          statusIn: ["completed"],
          endTimestampGte: Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3) - 20 * 60
          // 20 minutes
        })
      }).subscribe(({ renting, completed }) => {
        var _a;
        const uniqueTrips = [
          .../* @__PURE__ */ new Set([...renting.data || [], ...completed.data || []])
        ];
        if (uniqueTrips.length === 0) {
          this.rentingState.next({ state: "noData" });
        } else if (uniqueTrips.length >= 1) {
          this.rentingState.next({
            state: "trips",
            trips: renting.data || [],
            tripsCompleted: completed.data || []
          });
        }
        if (((_a = completed.data) == null ? void 0 : _a.length) > 0) {
          this.accountService.loadCyclist();
        }
      });
    }
  }
  getState() {
    return this.rentingState.getValue();
  }
  endTripWithCode(tripId, endCode) {
    return __async(this, null, function* () {
      const loading = yield this.loadingController.create({
        message: this.translate.instant("renting.loading.end_trip_request")
      });
      yield loading.present();
      try {
        yield firstValueFrom(this.terminationRequestsService.markTripForTermination({
          program: environment.program,
          liveMode: environment.production,
          id: tripId,
          body: { end_code: endCode }
        }));
        yield loading.dismiss();
        const successToast = yield this.toastController.create({
          message: this.translate.instant("renting.success.end_trip_request"),
          duration: 2e3,
          color: "success"
        });
        yield successToast.present();
        this.getCurrentTrips();
        return true;
      } catch (err) {
        yield loading.dismiss();
        throw err;
      }
    });
  }
  resumeTrip(tripId) {
    return __async(this, null, function* () {
      const loading = yield this.loadingController.create({
        message: this.translate.instant("renting.loading.resume_trip")
      });
      yield loading.present();
      try {
        yield firstValueFrom(this.tripsPonyService.resumeTrip({
          id: tripId,
          liveMode: environment.production,
          resumeTripRequest: {
            cyclist: this.accountService.getCurrentCyclist().id
          }
        }));
        yield new Promise((resolve) => setTimeout(resolve, 2500));
        yield loading.dismiss();
        this.getCurrentTrips();
        return true;
      } catch (err) {
        yield loading.dismiss();
        this.errorHandler.handleError(err);
        return false;
      }
    });
  }
  endTripWithPhoto(_0, _1) {
    return __async(this, arguments, function* (tripId, photoUrl, positionData = {}) {
      const loading = yield this.loadingController.create({
        message: this.translate.instant("renting.loading.end_trip")
      });
      yield loading.present();
      try {
        yield firstValueFrom(this.terminationRequestsService.markTripForTermination({
          program: environment.program,
          liveMode: environment.production,
          id: tripId,
          body: __spreadValues({
            photo: photoUrl
          }, positionData)
        }));
        yield loading.dismiss();
        const successToast = yield this.toastController.create({
          message: this.translate.instant("renting.success.end_trip_request"),
          duration: 2e3,
          color: "success"
        });
        yield successToast.present();
        this.getCurrentTrips();
        return true;
      } catch (err) {
        yield loading.dismiss();
        this.errorHandler.handleError(err);
        throw err;
      }
    });
  }
  getUserTrips() {
    return this.tripsService.listTrip({
      program: environment.program,
      limit: 100
    });
  }
  hasActiveTripOverThreeHours(t) {
    if (this.rentingState.value.state === "trips") {
      const currentTime = Math.floor(Date.now() / 1e3);
      if (t) {
        const duration = currentTime - t.start_timestamp;
        return (t.status === "renting" || t.status === "pitstop") && duration > 10800 && duration < 86400;
      } else {
        return this.rentingState.value.trips.some((trip) => {
          const duration = currentTime - trip.start_timestamp;
          return (trip.status === "renting" || trip.status === "pitstop") && duration > 10800 && duration < 86400;
        });
      }
    }
    return false;
  }
  hasActiveTripOver24Hours(t) {
    if (this.rentingState.value.state === "trips") {
      const currentTime = Math.floor(Date.now() / 1e3);
      if (t) {
        const duration = currentTime - t.start_timestamp;
        return (t.status === "renting" || t.status === "pitstop") && duration > 86400;
      } else {
        return this.rentingState.value.trips.some((trip) => {
          const duration = currentTime - trip.start_timestamp;
          return (trip.status === "renting" || trip.status === "pitstop") && duration > 86400;
        });
      }
    }
    return false;
  }
  recommendVehicule(tripID) {
    return __async(this, null, function* () {
      const loading = yield this.loadingController.create({
        message: this.translate.instant("recommandation.loading")
      });
      yield loading.present();
      try {
        const recommendation = yield firstValueFrom(this.tripsService.recommendVehicule({
          program: environment.program,
          id: tripID
        }));
        const current = this.recommendations$.value;
        current.set(tripID, Date.now());
        this.recommendations$.next(current);
        yield this.saveRecommendations(current);
        yield this.router.navigate(["/recommandation-congrats"]);
        return recommendation;
      } catch (err) {
        this.errorHandler.handleError(err);
        throw err;
      } finally {
        yield loading.dismiss();
      }
    });
  }
  // Méthode utilitaire pour nettoyer manuellement les recommandations expirées
  cleanExpiredRecommendations() {
    return __async(this, null, function* () {
      const current = this.recommendations$.value;
      const currentTime = Date.now();
      let hasChanges = false;
      for (const [tripId, timestamp] of current.entries()) {
        if (currentTime - timestamp >= this.RECOMMENDATION_TTL) {
          current.delete(tripId);
          hasChanges = true;
        }
      }
      if (hasChanges) {
        this.recommendations$.next(current);
        yield this.saveRecommendations(current);
      }
    });
  }
};
_RentingService.\u0275fac = function RentingService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RentingService)(\u0275\u0275inject(TranslateService), \u0275\u0275inject(LoadingController), \u0275\u0275inject(ToastController), \u0275\u0275inject(TripsService), \u0275\u0275inject(Router), \u0275\u0275inject(AlertController), \u0275\u0275inject(GeolocationService), \u0275\u0275inject(TerminationRequestsService), \u0275\u0275inject(AuthService), \u0275\u0275inject(ToastService), \u0275\u0275inject(StorageService), \u0275\u0275inject(FcmService), \u0275\u0275inject(AppstateService), \u0275\u0275inject(StationWrapperService), \u0275\u0275inject(TripsPonyService), \u0275\u0275inject(AccountService), \u0275\u0275inject(ErrorHandlerService));
};
_RentingService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RentingService, factory: _RentingService.\u0275fac, providedIn: "root" });
var RentingService = _RentingService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RentingService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: TranslateService }, { type: LoadingController }, { type: ToastController }, { type: TripsService }, { type: Router }, { type: AlertController }, { type: GeolocationService }, { type: TerminationRequestsService }, { type: AuthService }, { type: ToastService }, { type: StorageService }, { type: FcmService }, { type: AppstateService }, { type: StationWrapperService }, { type: TripsPonyService }, { type: AccountService }, { type: ErrorHandlerService }], null);
})();

export {
  RentingService
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwaS1jeWNsaXN0L2FwaS90cmlwc1Bvbnkuc2VydmljZS50cyIsICJzcmMvYXBwL3NlcnZpY2VzL2FwaS13cmFwcGVycy9yZW50aW5nLnNlcnZpY2UudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKlxuICogYXBpLWN5Y2xpc3RcbiAqXG4gKlxuICpcbiAqIE5PVEU6IFRoaXMgY2xhc3MgaXMgYXV0byBnZW5lcmF0ZWQgYnkgT3BlbkFQSSBHZW5lcmF0b3IgKGh0dHBzOi8vb3BlbmFwaS1nZW5lcmF0b3IudGVjaCkuXG4gKiBodHRwczovL29wZW5hcGktZ2VuZXJhdG9yLnRlY2hcbiAqIERvIG5vdCBlZGl0IHRoZSBjbGFzcyBtYW51YWxseS5cbiAqL1xuLyogdHNsaW50OmRpc2FibGU6bm8tdW51c2VkLXZhcmlhYmxlIG1lbWJlci1vcmRlcmluZyAqL1xuXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7XG4gIEh0dHBDbGllbnQsXG4gIEh0dHBIZWFkZXJzLFxuICBIdHRwUGFyYW1zLFxuICBIdHRwUmVzcG9uc2UsXG4gIEh0dHBFdmVudCxcbiAgSHR0cFBhcmFtZXRlckNvZGVjLFxuICBIdHRwQ29udGV4dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnXG5pbXBvcnQgeyBDdXN0b21IdHRwUGFyYW1ldGVyQ29kZWMgfSBmcm9tICcuLi9lbmNvZGVyJ1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnXG5cbi8vIEB0cy1pZ25vcmVcbmltcG9ydCB7IFBhdXNlVHJpcFJlcXVlc3QgfSBmcm9tICcuLi9tb2RlbC9wYXVzZVRyaXBSZXF1ZXN0J1xuLy8gQHRzLWlnbm9yZVxuaW1wb3J0IHsgUmVzdW1lVHJpcFJlcXVlc3QgfSBmcm9tICcuLi9tb2RlbC9yZXN1bWVUcmlwUmVxdWVzdCdcblxuLy8gQHRzLWlnbm9yZVxuaW1wb3J0IHsgQkFTRV9QQVRILCBDT0xMRUNUSU9OX0ZPUk1BVFMgfSBmcm9tICcuLi92YXJpYWJsZXMnXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vY29uZmlndXJhdGlvbidcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi4vLi4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50J1xuXG5leHBvcnQgaW50ZXJmYWNlIFBhdXNlVHJpcFJlcXVlc3RQYXJhbXMge1xuICAvKiogT2JqZWN0IGlzIHByZWZlcmFibHkgcmV0cmlldmUgdGhyb3VnaCBpdHMgJiN4NjA7aWQmI3g2MDsgYnV0IGlzIGFsc28gYWNjZXNzaWJsZSB0aHJvdWdoIGl0cyAmI3g2MDtudW1iZXImI3g2MDsgZmllbGQuICovXG4gIGlkOiBzdHJpbmdcbiAgLyoqIElmICYjeDYwO1RydWUmI3g2MDsgd2lsbCBtYWtlIHRoZSBjYWxsIGluIFByb2QuIEVsc2Ugd2lsbCBkbyBpdCBpbiBQcmVwcm9kLiAqL1xuICBsaXZlTW9kZT86IGJvb2xlYW5cbiAgcGF1c2VUcmlwUmVxdWVzdD86IFBhdXNlVHJpcFJlcXVlc3Rcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXN1bWVUcmlwUmVxdWVzdFBhcmFtcyB7XG4gIC8qKiBPYmplY3QgaXMgcHJlZmVyYWJseSByZXRyaWV2ZSB0aHJvdWdoIGl0cyAmI3g2MDtpZCYjeDYwOyBidXQgaXMgYWxzbyBhY2Nlc3NpYmxlIHRocm91Z2ggaXRzICYjeDYwO251bWJlciYjeDYwOyBmaWVsZC4gKi9cbiAgaWQ6IHN0cmluZ1xuICAvKiogSWYgJiN4NjA7VHJ1ZSYjeDYwOyB3aWxsIG1ha2UgdGhlIGNhbGwgaW4gUHJvZC4gRWxzZSB3aWxsIGRvIGl0IGluIFByZXByb2QuICovXG4gIGxpdmVNb2RlPzogYm9vbGVhblxuICByZXN1bWVUcmlwUmVxdWVzdD86IFJlc3VtZVRyaXBSZXF1ZXN0XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBUcmlwc1BvbnlTZXJ2aWNlIHtcbiAgcHJvdGVjdGVkIGJhc2VQYXRoID0gZW52aXJvbm1lbnQuYmFzZVBhdGhcbiAgcHVibGljIGRlZmF1bHRIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKClcbiAgcHVibGljIGNvbmZpZ3VyYXRpb24gPSBuZXcgQ29uZmlndXJhdGlvbigpXG4gIHB1YmxpYyBlbmNvZGVyOiBIdHRwUGFyYW1ldGVyQ29kZWNcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgaHR0cENsaWVudDogSHR0cENsaWVudCxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEJBU0VfUEFUSCkgYmFzZVBhdGg6IHN0cmluZyB8IHN0cmluZ1tdLFxuICAgIEBPcHRpb25hbCgpIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb25cbiAgKSB7XG4gICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb25cbiAgICB9XG4gICAgaWYgKHR5cGVvZiB0aGlzLmNvbmZpZ3VyYXRpb24uYmFzZVBhdGggIT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCBmaXJzdEJhc2VQYXRoID0gQXJyYXkuaXNBcnJheShiYXNlUGF0aCkgPyBiYXNlUGF0aFswXSA6IHVuZGVmaW5lZFxuICAgICAgaWYgKGZpcnN0QmFzZVBhdGggIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGJhc2VQYXRoID0gZmlyc3RCYXNlUGF0aFxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGJhc2VQYXRoICE9PSAnc3RyaW5nJykge1xuICAgICAgICBiYXNlUGF0aCA9IHRoaXMuYmFzZVBhdGhcbiAgICAgIH1cbiAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgfVxuICAgIHRoaXMuZW5jb2RlciA9IHRoaXMuY29uZmlndXJhdGlvbi5lbmNvZGVyIHx8IG5ldyBDdXN0b21IdHRwUGFyYW1ldGVyQ29kZWMoKVxuICB9XG5cbiAgLy8gQHRzLWlnbm9yZVxuICBwcml2YXRlIGFkZFRvSHR0cFBhcmFtcyhcbiAgICBodHRwUGFyYW1zOiBIdHRwUGFyYW1zLFxuICAgIHZhbHVlOiBhbnksXG4gICAga2V5Pzogc3RyaW5nXG4gICk6IEh0dHBQYXJhbXMge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSA9PT0gZmFsc2UpIHtcbiAgICAgIGh0dHBQYXJhbXMgPSB0aGlzLmFkZFRvSHR0cFBhcmFtc1JlY3Vyc2l2ZShodHRwUGFyYW1zLCB2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgaHR0cFBhcmFtcyA9IHRoaXMuYWRkVG9IdHRwUGFyYW1zUmVjdXJzaXZlKGh0dHBQYXJhbXMsIHZhbHVlLCBrZXkpXG4gICAgfVxuICAgIHJldHVybiBodHRwUGFyYW1zXG4gIH1cblxuICBwcml2YXRlIGFkZFRvSHR0cFBhcmFtc1JlY3Vyc2l2ZShcbiAgICBodHRwUGFyYW1zOiBIdHRwUGFyYW1zLFxuICAgIHZhbHVlPzogYW55LFxuICAgIGtleT86IHN0cmluZ1xuICApOiBIdHRwUGFyYW1zIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGh0dHBQYXJhbXNcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIDsodmFsdWUgYXMgYW55W10pLmZvckVhY2goXG4gICAgICAgICAgKGVsZW0pID0+XG4gICAgICAgICAgICAoaHR0cFBhcmFtcyA9IHRoaXMuYWRkVG9IdHRwUGFyYW1zUmVjdXJzaXZlKGh0dHBQYXJhbXMsIGVsZW0sIGtleSkpXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIGlmIChrZXkgIT0gbnVsbCkge1xuICAgICAgICAgIGh0dHBQYXJhbXMgPSBodHRwUGFyYW1zLmFwcGVuZChcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICh2YWx1ZSBhcyBEYXRlKS50b0lTT1N0cmluZygpLnN1YnN0cmluZygwLCAxMClcbiAgICAgICAgICApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgRXJyb3IoJ2tleSBtYXkgbm90IGJlIG51bGwgaWYgdmFsdWUgaXMgRGF0ZScpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKFxuICAgICAgICAgIChrKSA9PlxuICAgICAgICAgICAgKGh0dHBQYXJhbXMgPSB0aGlzLmFkZFRvSHR0cFBhcmFtc1JlY3Vyc2l2ZShcbiAgICAgICAgICAgICAgaHR0cFBhcmFtcyxcbiAgICAgICAgICAgICAgdmFsdWVba10sXG4gICAgICAgICAgICAgIGtleSAhPSBudWxsID8gYCR7a2V5fS4ke2t9YCA6IGtcbiAgICAgICAgICAgICkpXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGtleSAhPSBudWxsKSB7XG4gICAgICBodHRwUGFyYW1zID0gaHR0cFBhcmFtcy5hcHBlbmQoa2V5LCB2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgRXJyb3IoJ2tleSBtYXkgbm90IGJlIG51bGwgaWYgdmFsdWUgaXMgbm90IG9iamVjdCBvciBhcnJheScpXG4gICAgfVxuICAgIHJldHVybiBodHRwUGFyYW1zXG4gIH1cblxuICAvKipcbiAgICogUGF1c2UgYSB0cmlwXG4gICAqIEBwYXJhbSByZXF1ZXN0UGFyYW1ldGVyc1xuICAgKiBAcGFyYW0gb2JzZXJ2ZSBzZXQgd2hldGhlciBvciBub3QgdG8gcmV0dXJuIHRoZSBkYXRhIE9ic2VydmFibGUgYXMgdGhlIGJvZHksIHJlc3BvbnNlIG9yIGV2ZW50cy4gZGVmYXVsdHMgdG8gcmV0dXJuaW5nIHRoZSBib2R5LlxuICAgKiBAcGFyYW0gcmVwb3J0UHJvZ3Jlc3MgZmxhZyB0byByZXBvcnQgcmVxdWVzdCBhbmQgcmVzcG9uc2UgcHJvZ3Jlc3MuXG4gICAqL1xuICBwdWJsaWMgcGF1c2VUcmlwKFxuICAgIHJlcXVlc3RQYXJhbWV0ZXJzPzogUGF1c2VUcmlwUmVxdWVzdFBhcmFtcyxcbiAgICBvYnNlcnZlPzogJ2JvZHknLFxuICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbixcbiAgICBvcHRpb25zPzoge1xuICAgICAgaHR0cEhlYWRlckFjY2VwdD86IHVuZGVmaW5lZFxuICAgICAgY29udGV4dD86IEh0dHBDb250ZXh0XG4gICAgICB0cmFuc2ZlckNhY2hlPzogYm9vbGVhblxuICAgIH1cbiAgKTogT2JzZXJ2YWJsZTxhbnk+XG4gIHB1YmxpYyBwYXVzZVRyaXAoXG4gICAgcmVxdWVzdFBhcmFtZXRlcnM/OiBQYXVzZVRyaXBSZXF1ZXN0UGFyYW1zLFxuICAgIG9ic2VydmU/OiAncmVzcG9uc2UnLFxuICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbixcbiAgICBvcHRpb25zPzoge1xuICAgICAgaHR0cEhlYWRlckFjY2VwdD86IHVuZGVmaW5lZFxuICAgICAgY29udGV4dD86IEh0dHBDb250ZXh0XG4gICAgICB0cmFuc2ZlckNhY2hlPzogYm9vbGVhblxuICAgIH1cbiAgKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8YW55Pj5cbiAgcHVibGljIHBhdXNlVHJpcChcbiAgICByZXF1ZXN0UGFyYW1ldGVycz86IFBhdXNlVHJpcFJlcXVlc3RQYXJhbXMsXG4gICAgb2JzZXJ2ZT86ICdldmVudHMnLFxuICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbixcbiAgICBvcHRpb25zPzoge1xuICAgICAgaHR0cEhlYWRlckFjY2VwdD86IHVuZGVmaW5lZFxuICAgICAgY29udGV4dD86IEh0dHBDb250ZXh0XG4gICAgICB0cmFuc2ZlckNhY2hlPzogYm9vbGVhblxuICAgIH1cbiAgKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj5cbiAgcHVibGljIHBhdXNlVHJpcChcbiAgICByZXF1ZXN0UGFyYW1ldGVycz86IFBhdXNlVHJpcFJlcXVlc3RQYXJhbXMsXG4gICAgb2JzZXJ2ZTogYW55ID0gJ2JvZHknLFxuICAgIHJlcG9ydFByb2dyZXNzOiBib29sZWFuID0gZmFsc2UsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIGh0dHBIZWFkZXJBY2NlcHQ/OiB1bmRlZmluZWRcbiAgICAgIGNvbnRleHQ/OiBIdHRwQ29udGV4dFxuICAgICAgdHJhbnNmZXJDYWNoZT86IGJvb2xlYW5cbiAgICB9XG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgaWQgPSByZXF1ZXN0UGFyYW1ldGVycz8uaWRcbiAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnUmVxdWlyZWQgcGFyYW1ldGVyIGlkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgcGF1c2VUcmlwLidcbiAgICAgIClcbiAgICB9XG4gICAgY29uc3QgbGl2ZU1vZGUgPSByZXF1ZXN0UGFyYW1ldGVycz8ubGl2ZU1vZGVcbiAgICBjb25zdCBwYXVzZVRyaXBSZXF1ZXN0ID0gcmVxdWVzdFBhcmFtZXRlcnM/LnBhdXNlVHJpcFJlcXVlc3RcblxuICAgIGxldCBsb2NhbFZhckhlYWRlcnMgPSB0aGlzLmRlZmF1bHRIZWFkZXJzXG4gICAgaWYgKGxpdmVNb2RlICE9PSB1bmRlZmluZWQgJiYgbGl2ZU1vZGUgIT09IG51bGwpIHtcbiAgICAgIGxvY2FsVmFySGVhZGVycyA9IGxvY2FsVmFySGVhZGVycy5zZXQoJ0xpdmUtTW9kZScsIFN0cmluZyhsaXZlTW9kZSkpXG4gICAgfVxuXG4gICAgbGV0IGxvY2FsVmFySHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkOiBzdHJpbmcgfCB1bmRlZmluZWQgPVxuICAgICAgb3B0aW9ucyAmJiBvcHRpb25zLmh0dHBIZWFkZXJBY2NlcHRcbiAgICBpZiAobG9jYWxWYXJIdHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gdG8gZGV0ZXJtaW5lIHRoZSBBY2NlcHQgaGVhZGVyXG4gICAgICBjb25zdCBodHRwSGVhZGVyQWNjZXB0czogc3RyaW5nW10gPSBbXVxuICAgICAgbG9jYWxWYXJIdHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQgPVxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uc2VsZWN0SGVhZGVyQWNjZXB0KGh0dHBIZWFkZXJBY2NlcHRzKVxuICAgIH1cbiAgICBpZiAobG9jYWxWYXJIdHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbG9jYWxWYXJIZWFkZXJzID0gbG9jYWxWYXJIZWFkZXJzLnNldChcbiAgICAgICAgJ0FjY2VwdCcsXG4gICAgICAgIGxvY2FsVmFySHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkXG4gICAgICApXG4gICAgfVxuXG4gICAgbGV0IGxvY2FsVmFySHR0cENvbnRleHQ6IEh0dHBDb250ZXh0IHwgdW5kZWZpbmVkID1cbiAgICAgIG9wdGlvbnMgJiYgb3B0aW9ucy5jb250ZXh0XG4gICAgaWYgKGxvY2FsVmFySHR0cENvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbG9jYWxWYXJIdHRwQ29udGV4dCA9IG5ldyBIdHRwQ29udGV4dCgpXG4gICAgfVxuXG4gICAgbGV0IGxvY2FsVmFyVHJhbnNmZXJDYWNoZTogYm9vbGVhbiB8IHVuZGVmaW5lZCA9XG4gICAgICBvcHRpb25zICYmIG9wdGlvbnMudHJhbnNmZXJDYWNoZVxuICAgIGlmIChsb2NhbFZhclRyYW5zZmVyQ2FjaGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbG9jYWxWYXJUcmFuc2ZlckNhY2hlID0gdHJ1ZVxuICAgIH1cblxuICAgIC8vIHRvIGRldGVybWluZSB0aGUgQ29udGVudC1UeXBlIGhlYWRlclxuICAgIGNvbnN0IGNvbnN1bWVzOiBzdHJpbmdbXSA9IFsnYXBwbGljYXRpb24vanNvbiddXG4gICAgY29uc3QgaHR0cENvbnRlbnRUeXBlU2VsZWN0ZWQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9XG4gICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uc2VsZWN0SGVhZGVyQ29udGVudFR5cGUoY29uc3VtZXMpXG4gICAgaWYgKGh0dHBDb250ZW50VHlwZVNlbGVjdGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGxvY2FsVmFySGVhZGVycyA9IGxvY2FsVmFySGVhZGVycy5zZXQoXG4gICAgICAgICdDb250ZW50LVR5cGUnLFxuICAgICAgICBodHRwQ29udGVudFR5cGVTZWxlY3RlZFxuICAgICAgKVxuICAgIH1cblxuICAgIGxldCByZXNwb25zZVR5cGVfOiAndGV4dCcgfCAnanNvbicgfCAnYmxvYicgPSAnanNvbidcbiAgICBpZiAobG9jYWxWYXJIdHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQpIHtcbiAgICAgIGlmIChsb2NhbFZhckh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZC5zdGFydHNXaXRoKCd0ZXh0JykpIHtcbiAgICAgICAgcmVzcG9uc2VUeXBlXyA9ICd0ZXh0J1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmlzSnNvbk1pbWUobG9jYWxWYXJIdHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQpXG4gICAgICApIHtcbiAgICAgICAgcmVzcG9uc2VUeXBlXyA9ICdqc29uJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzcG9uc2VUeXBlXyA9ICdibG9iJ1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBsb2NhbFZhclBhdGggPSBgL3BvbnkvdHJpcHMvJHt0aGlzLmNvbmZpZ3VyYXRpb24uZW5jb2RlUGFyYW0oe1xuICAgICAgbmFtZTogJ2lkJyxcbiAgICAgIHZhbHVlOiBpZCxcbiAgICAgIGluOiAncGF0aCcsXG4gICAgICBzdHlsZTogJ3NpbXBsZScsXG4gICAgICBleHBsb2RlOiBmYWxzZSxcbiAgICAgIGRhdGFUeXBlOiAnc3RyaW5nJyxcbiAgICAgIGRhdGFGb3JtYXQ6IHVuZGVmaW5lZCxcbiAgICB9KX0vcGF1c2VgXG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5yZXF1ZXN0PGFueT4oXG4gICAgICAncG9zdCcsXG4gICAgICBgJHt0aGlzLmNvbmZpZ3VyYXRpb24uYmFzZVBhdGh9JHtsb2NhbFZhclBhdGh9YCxcbiAgICAgIHtcbiAgICAgICAgY29udGV4dDogbG9jYWxWYXJIdHRwQ29udGV4dCxcbiAgICAgICAgYm9keTogcGF1c2VUcmlwUmVxdWVzdCxcbiAgICAgICAgcmVzcG9uc2VUeXBlOiA8YW55PnJlc3BvbnNlVHlwZV8sXG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogdGhpcy5jb25maWd1cmF0aW9uLndpdGhDcmVkZW50aWFscyxcbiAgICAgICAgaGVhZGVyczogbG9jYWxWYXJIZWFkZXJzLFxuICAgICAgICBvYnNlcnZlOiBvYnNlcnZlLFxuICAgICAgICB0cmFuc2ZlckNhY2hlOiBsb2NhbFZhclRyYW5zZmVyQ2FjaGUsXG4gICAgICAgIHJlcG9ydFByb2dyZXNzOiByZXBvcnRQcm9ncmVzcyxcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICAvKipcbiAgICogUmVzdW1lIGEgdHJpcFxuICAgKiBAcGFyYW0gcmVxdWVzdFBhcmFtZXRlcnNcbiAgICogQHBhcmFtIG9ic2VydmUgc2V0IHdoZXRoZXIgb3Igbm90IHRvIHJldHVybiB0aGUgZGF0YSBPYnNlcnZhYmxlIGFzIHRoZSBib2R5LCByZXNwb25zZSBvciBldmVudHMuIGRlZmF1bHRzIHRvIHJldHVybmluZyB0aGUgYm9keS5cbiAgICogQHBhcmFtIHJlcG9ydFByb2dyZXNzIGZsYWcgdG8gcmVwb3J0IHJlcXVlc3QgYW5kIHJlc3BvbnNlIHByb2dyZXNzLlxuICAgKi9cbiAgcHVibGljIHJlc3VtZVRyaXAoXG4gICAgcmVxdWVzdFBhcmFtZXRlcnM/OiBSZXN1bWVUcmlwUmVxdWVzdFBhcmFtcyxcbiAgICBvYnNlcnZlPzogJ2JvZHknLFxuICAgIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbixcbiAgICBvcHRpb25zPzoge1xuICAgICAgaHR0cEhlYWRlckFjY2VwdD86IHVuZGVmaW5lZFxuICAgICAgY29udGV4dD86IEh0dHBDb250ZXh0XG4gICAgICB0cmFuc2ZlckNhY2hlPzogYm9vbGVhblxuICAgIH1cbiAgKTogT2JzZXJ2YWJsZTxhbnk+XG4gIHB1YmxpYyByZXN1bWVUcmlwKFxuICAgIHJlcXVlc3RQYXJhbWV0ZXJzPzogUmVzdW1lVHJpcFJlcXVlc3RQYXJhbXMsXG4gICAgb2JzZXJ2ZT86ICdyZXNwb25zZScsXG4gICAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICBodHRwSGVhZGVyQWNjZXB0PzogdW5kZWZpbmVkXG4gICAgICBjb250ZXh0PzogSHR0cENvbnRleHRcbiAgICAgIHRyYW5zZmVyQ2FjaGU/OiBib29sZWFuXG4gICAgfVxuICApOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+PlxuICBwdWJsaWMgcmVzdW1lVHJpcChcbiAgICByZXF1ZXN0UGFyYW1ldGVycz86IFJlc3VtZVRyaXBSZXF1ZXN0UGFyYW1zLFxuICAgIG9ic2VydmU/OiAnZXZlbnRzJyxcbiAgICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW4sXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIGh0dHBIZWFkZXJBY2NlcHQ/OiB1bmRlZmluZWRcbiAgICAgIGNvbnRleHQ/OiBIdHRwQ29udGV4dFxuICAgICAgdHJhbnNmZXJDYWNoZT86IGJvb2xlYW5cbiAgICB9XG4gICk6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+XG4gIHB1YmxpYyByZXN1bWVUcmlwKFxuICAgIHJlcXVlc3RQYXJhbWV0ZXJzPzogUmVzdW1lVHJpcFJlcXVlc3RQYXJhbXMsXG4gICAgb2JzZXJ2ZTogYW55ID0gJ2JvZHknLFxuICAgIHJlcG9ydFByb2dyZXNzOiBib29sZWFuID0gZmFsc2UsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIGh0dHBIZWFkZXJBY2NlcHQ/OiB1bmRlZmluZWRcbiAgICAgIGNvbnRleHQ/OiBIdHRwQ29udGV4dFxuICAgICAgdHJhbnNmZXJDYWNoZT86IGJvb2xlYW5cbiAgICB9XG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgaWQgPSByZXF1ZXN0UGFyYW1ldGVycz8uaWRcbiAgICBpZiAoaWQgPT09IG51bGwgfHwgaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnUmVxdWlyZWQgcGFyYW1ldGVyIGlkIHdhcyBudWxsIG9yIHVuZGVmaW5lZCB3aGVuIGNhbGxpbmcgcmVzdW1lVHJpcC4nXG4gICAgICApXG4gICAgfVxuICAgIGNvbnN0IGxpdmVNb2RlID0gcmVxdWVzdFBhcmFtZXRlcnM/LmxpdmVNb2RlXG4gICAgY29uc3QgcmVzdW1lVHJpcFJlcXVlc3QgPSByZXF1ZXN0UGFyYW1ldGVycz8ucmVzdW1lVHJpcFJlcXVlc3RcblxuICAgIGxldCBsb2NhbFZhckhlYWRlcnMgPSB0aGlzLmRlZmF1bHRIZWFkZXJzXG4gICAgaWYgKGxpdmVNb2RlICE9PSB1bmRlZmluZWQgJiYgbGl2ZU1vZGUgIT09IG51bGwpIHtcbiAgICAgIGxvY2FsVmFySGVhZGVycyA9IGxvY2FsVmFySGVhZGVycy5zZXQoJ0xpdmUtTW9kZScsIFN0cmluZyhsaXZlTW9kZSkpXG4gICAgfVxuXG4gICAgbGV0IGxvY2FsVmFySHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkOiBzdHJpbmcgfCB1bmRlZmluZWQgPVxuICAgICAgb3B0aW9ucyAmJiBvcHRpb25zLmh0dHBIZWFkZXJBY2NlcHRcbiAgICBpZiAobG9jYWxWYXJIdHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gdG8gZGV0ZXJtaW5lIHRoZSBBY2NlcHQgaGVhZGVyXG4gICAgICBjb25zdCBodHRwSGVhZGVyQWNjZXB0czogc3RyaW5nW10gPSBbXVxuICAgICAgbG9jYWxWYXJIdHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQgPVxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uc2VsZWN0SGVhZGVyQWNjZXB0KGh0dHBIZWFkZXJBY2NlcHRzKVxuICAgIH1cbiAgICBpZiAobG9jYWxWYXJIdHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbG9jYWxWYXJIZWFkZXJzID0gbG9jYWxWYXJIZWFkZXJzLnNldChcbiAgICAgICAgJ0FjY2VwdCcsXG4gICAgICAgIGxvY2FsVmFySHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkXG4gICAgICApXG4gICAgfVxuXG4gICAgbGV0IGxvY2FsVmFySHR0cENvbnRleHQ6IEh0dHBDb250ZXh0IHwgdW5kZWZpbmVkID1cbiAgICAgIG9wdGlvbnMgJiYgb3B0aW9ucy5jb250ZXh0XG4gICAgaWYgKGxvY2FsVmFySHR0cENvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbG9jYWxWYXJIdHRwQ29udGV4dCA9IG5ldyBIdHRwQ29udGV4dCgpXG4gICAgfVxuXG4gICAgbGV0IGxvY2FsVmFyVHJhbnNmZXJDYWNoZTogYm9vbGVhbiB8IHVuZGVmaW5lZCA9XG4gICAgICBvcHRpb25zICYmIG9wdGlvbnMudHJhbnNmZXJDYWNoZVxuICAgIGlmIChsb2NhbFZhclRyYW5zZmVyQ2FjaGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbG9jYWxWYXJUcmFuc2ZlckNhY2hlID0gdHJ1ZVxuICAgIH1cblxuICAgIC8vIHRvIGRldGVybWluZSB0aGUgQ29udGVudC1UeXBlIGhlYWRlclxuICAgIGNvbnN0IGNvbnN1bWVzOiBzdHJpbmdbXSA9IFsnYXBwbGljYXRpb24vanNvbiddXG4gICAgY29uc3QgaHR0cENvbnRlbnRUeXBlU2VsZWN0ZWQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9XG4gICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uc2VsZWN0SGVhZGVyQ29udGVudFR5cGUoY29uc3VtZXMpXG4gICAgaWYgKGh0dHBDb250ZW50VHlwZVNlbGVjdGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGxvY2FsVmFySGVhZGVycyA9IGxvY2FsVmFySGVhZGVycy5zZXQoXG4gICAgICAgICdDb250ZW50LVR5cGUnLFxuICAgICAgICBodHRwQ29udGVudFR5cGVTZWxlY3RlZFxuICAgICAgKVxuICAgIH1cblxuICAgIGxldCByZXNwb25zZVR5cGVfOiAndGV4dCcgfCAnanNvbicgfCAnYmxvYicgPSAnanNvbidcbiAgICBpZiAobG9jYWxWYXJIdHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQpIHtcbiAgICAgIGlmIChsb2NhbFZhckh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZC5zdGFydHNXaXRoKCd0ZXh0JykpIHtcbiAgICAgICAgcmVzcG9uc2VUeXBlXyA9ICd0ZXh0J1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmlzSnNvbk1pbWUobG9jYWxWYXJIdHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQpXG4gICAgICApIHtcbiAgICAgICAgcmVzcG9uc2VUeXBlXyA9ICdqc29uJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzcG9uc2VUeXBlXyA9ICdibG9iJ1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBsb2NhbFZhclBhdGggPSBgL3BvbnkvdHJpcHMvJHt0aGlzLmNvbmZpZ3VyYXRpb24uZW5jb2RlUGFyYW0oe1xuICAgICAgbmFtZTogJ2lkJyxcbiAgICAgIHZhbHVlOiBpZCxcbiAgICAgIGluOiAncGF0aCcsXG4gICAgICBzdHlsZTogJ3NpbXBsZScsXG4gICAgICBleHBsb2RlOiBmYWxzZSxcbiAgICAgIGRhdGFUeXBlOiAnc3RyaW5nJyxcbiAgICAgIGRhdGFGb3JtYXQ6IHVuZGVmaW5lZCxcbiAgICB9KX0vcmVzdW1lYFxuICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQucmVxdWVzdDxhbnk+KFxuICAgICAgJ3Bvc3QnLFxuICAgICAgYCR7dGhpcy5jb25maWd1cmF0aW9uLmJhc2VQYXRofSR7bG9jYWxWYXJQYXRofWAsXG4gICAgICB7XG4gICAgICAgIGNvbnRleHQ6IGxvY2FsVmFySHR0cENvbnRleHQsXG4gICAgICAgIGJvZHk6IHJlc3VtZVRyaXBSZXF1ZXN0LFxuICAgICAgICByZXNwb25zZVR5cGU6IDxhbnk+cmVzcG9uc2VUeXBlXyxcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0aGlzLmNvbmZpZ3VyYXRpb24ud2l0aENyZWRlbnRpYWxzLFxuICAgICAgICBoZWFkZXJzOiBsb2NhbFZhckhlYWRlcnMsXG4gICAgICAgIG9ic2VydmU6IG9ic2VydmUsXG4gICAgICAgIHRyYW5zZmVyQ2FjaGU6IGxvY2FsVmFyVHJhbnNmZXJDYWNoZSxcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M6IHJlcG9ydFByb2dyZXNzLFxuICAgICAgfVxuICAgIClcbiAgfVxufVxuIiwgImltcG9ydCB7IEluamVjdGFibGUsIGVmZmVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBDYXBhY2l0b3IgfSBmcm9tICdAY2FwYWNpdG9yL2NvcmUnXG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSdcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgZm9ya0pvaW4sIGZpcnN0VmFsdWVGcm9tIH0gZnJvbSAncnhqcydcbmltcG9ydCB7XG4gIExpc3RUcmlwMjAwUmVzcG9uc2VBbGxPZkRhdGFJbm5lcixcbiAgTGlzdFZlaGljdWxlMjAwUmVzcG9uc2VBbGxPZkRhdGFJbm5lcixcbiAgVHJpcHNTZXJ2aWNlLFxufSBmcm9tICdzcmMvYXBpLWN5Y2xpc3QnXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJ3NyYy9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnXG5cbi8vIFR5cGUgcGVyc29ubmFsaXPDqSBwb3VyIGZvcmNlciB2ZWhpY3VsZSBlbiB0YW50IHF1J2FueVxudHlwZSBUcmlwV2l0aEFueVZlaGljdWxlID0gT21pdDxcbiAgTGlzdFRyaXAyMDBSZXNwb25zZUFsbE9mRGF0YUlubmVyLFxuICAndmVoaWN1bGUnXG4+ICYge1xuICB2ZWhpY3VsZT86IGFueVxufVxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xuaW1wb3J0IHtcbiAgTG9hZGluZ0NvbnRyb2xsZXIsXG4gIFRvYXN0Q29udHJvbGxlcixcbiAgQWxlcnRDb250cm9sbGVyLFxufSBmcm9tICdAaW9uaWMvYW5ndWxhci9zdGFuZGFsb25lJ1xuaW1wb3J0IHtcbiAgR2VvbG9jYXRpb25TZXJ2aWNlLFxuICBHZW9sb2NhdGlvblN0YXRlLFxufSBmcm9tICcuLi91dGlscy9nZW9sb2NhdGlvbi5zZXJ2aWNlJ1xuaW1wb3J0IHsgVGVybWluYXRpb25SZXF1ZXN0c1NlcnZpY2UgfSBmcm9tICdzcmMvYXBpLWN5Y2xpc3QnXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL2V4dGVybmFsL2F1dGguc2VydmljZSdcbmltcG9ydCB7IFRvYXN0U2VydmljZSwgVG9hc3RUeXBlIH0gZnJvbSAnLi4vdXRpbHMvdG9hc3Quc2VydmljZSdcbmltcG9ydCB7IFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vdXRpbHMvc3RvcmFnZS5zZXJ2aWNlJ1xuaW1wb3J0IHsgRmNtU2VydmljZSB9IGZyb20gJy4uL2V4dGVybmFsL2ZjbS5zZXJ2aWNlJ1xuaW1wb3J0IHsgQWNjb3VudFNlcnZpY2UgfSBmcm9tICcuL2FjY291bnQuc2VydmljZSdcbmltcG9ydCB7IEFwcFN0YXRlLCBBcHBzdGF0ZVNlcnZpY2UgfSBmcm9tICcuLi9pbnRlcm5hbC9hcHBzdGF0ZS5zZXJ2aWNlJ1xuaW1wb3J0IHsgU3RhdGlvbldyYXBwZXJTZXJ2aWNlIH0gZnJvbSAnLi9zdGF0aW9ucy5zZXJ2aWNlJ1xuaW1wb3J0IHsgUHVzaE5vdGlmaWNhdGlvbnMgfSBmcm9tICdAY2FwYWNpdG9yL3B1c2gtbm90aWZpY2F0aW9ucydcbmltcG9ydCB7IFRyaXBzUG9ueVNlcnZpY2UgfSBmcm9tICdzcmMvYXBpLWN5Y2xpc3QvYXBpL3RyaXBzUG9ueS5zZXJ2aWNlJ1xuaW1wb3J0IHsgRXJyb3JIYW5kbGVyU2VydmljZSB9IGZyb20gJy4uL3V0aWxzL2Vycm9yLWhhbmRsZXIuc2VydmljZSdcblxuZXhwb3J0IHR5cGUgcmVudGluZ1N0YXRlID1cbiAgfCB7IHN0YXRlOiAnbG9hZGluZycgfVxuICB8IHtcbiAgICAgIHN0YXRlOiAndHJpcHMnXG4gICAgICB0cmlwczogVHJpcFdpdGhBbnlWZWhpY3VsZVtdXG4gICAgICB0cmlwc0NvbXBsZXRlZDogVHJpcFdpdGhBbnlWZWhpY3VsZVtdXG4gICAgfVxuICB8IHsgc3RhdGU6ICdub0RhdGEnIH1cblxuaW50ZXJmYWNlIFN0b3JlZFJlY29tbWVuZGF0aW9uIHtcbiAgdHJpcElkOiBzdHJpbmdcbiAgdGltZXN0YW1wOiBudW1iZXJcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFJlbnRpbmdTZXJ2aWNlIHtcbiAgcmVudGluZ1N0YXRlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxyZW50aW5nU3RhdGU+KHsgc3RhdGU6ICdsb2FkaW5nJyB9KVxuICBnZW9sb2NTdGF0ZTogR2VvbG9jYXRpb25TdGF0ZVxuICBwcml2YXRlIHJlYWRvbmx5IFJFQ09NTUVOREFUSU9OX1RUTCA9IDI0ICogNjAgKiA2MCAqIDEwMDAgLy8gMjQgaGV1cmVzIGVuIG1pbGxpc2Vjb25kZXNcbiAgcHJpdmF0ZSByZWNvbW1lbmRhdGlvbnMkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxNYXA8c3RyaW5nLCBudW1iZXI+PihuZXcgTWFwKCkpXG4gIGFwcFN0YXRlOiBBcHBTdGF0ZVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgbG9hZGluZ0NvbnRyb2xsZXI6IExvYWRpbmdDb250cm9sbGVyLFxuICAgIHByaXZhdGUgdG9hc3RDb250cm9sbGVyOiBUb2FzdENvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSB0cmlwc1NlcnZpY2U6IFRyaXBzU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgYWxlcnRDb250cm9sbGVyOiBBbGVydENvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSBnZW9sb2NhdGlvblNlcnZpY2U6IEdlb2xvY2F0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIHRlcm1pbmF0aW9uUmVxdWVzdHNTZXJ2aWNlOiBUZXJtaW5hdGlvblJlcXVlc3RzU2VydmljZSxcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIHRvYXN0U2VydmljZTogVG9hc3RTZXJ2aWNlLFxuICAgIHByaXZhdGUgc3RvcmFnZVNlcnZpY2U6IFN0b3JhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgZmNtU2VydmljZTogRmNtU2VydmljZSxcbiAgICBwcml2YXRlIGFwcFNlcnZpY2U6IEFwcHN0YXRlU2VydmljZSxcbiAgICBwcml2YXRlIHN0YXRpb25XcmFwcGVyU2VydmljZTogU3RhdGlvbldyYXBwZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgdHJpcHNQb255U2VydmljZTogVHJpcHNQb255U2VydmljZSxcbiAgICBwcml2YXRlIGFjY291bnRTZXJ2aWNlOiBBY2NvdW50U2VydmljZSxcbiAgICBwcml2YXRlIGVycm9ySGFuZGxlcjogRXJyb3JIYW5kbGVyU2VydmljZVxuICApIHtcbiAgICBlZmZlY3QoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuYXV0aFNlcnZpY2UuYXV0aFN0YXRlKCkuc3RhdGUgPT09ICdTaWduZWRPdXQnKSB7XG4gICAgICAgIHRoaXMucmVudGluZ1N0YXRlLm5leHQoeyBzdGF0ZTogJ25vRGF0YScgfSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuYXBwU2VydmljZS5hcHBTdGF0ZS5zdWJzY3JpYmUoKHN0YXRlKSA9PiB7XG4gICAgICB0aGlzLmFwcFN0YXRlID0gc3RhdGVcbiAgICB9KVxuICAgIHRoaXMuZ2VvbG9jYXRpb25TZXJ2aWNlLmdlb2xvY2F0aW9uU3RhdGUuc3Vic2NyaWJlKChzdGF0ZSkgPT4ge1xuICAgICAgdGhpcy5nZW9sb2NTdGF0ZSA9IHN0YXRlXG4gICAgfSlcbiAgICB0aGlzLmdldEN1cnJlbnRUcmlwcygpXG4gICAgdGhpcy5pbml0aWFsaXplUmVjb21tZW5kYXRpb25zKClcbiAgfVxuXG4gIHByaXZhdGUgZG9lc1RyaXBNYXRjaFZlaGljbGUoXG4gICAgdHJpcDogVHJpcFdpdGhBbnlWZWhpY3VsZSxcbiAgICB2ZWhpY2xlOiBMaXN0VmVoaWN1bGUyMDBSZXNwb25zZUFsbE9mRGF0YUlubmVyXG4gICk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHRyaXBWZWhpY3VsZTogYW55ID0gKHRyaXAgYXMgYW55KS52ZWhpY3VsZVxuXG4gICAgY29uc3QgdHJpcFZlaGljdWxlSWQgPVxuICAgICAgdHlwZW9mIHRyaXBWZWhpY3VsZSA9PT0gJ3N0cmluZycgPyB0cmlwVmVoaWN1bGUgOiB0cmlwVmVoaWN1bGU/LmlkXG4gICAgY29uc3QgdHJpcFZlaGljdWxlTnVtYmVyID1cbiAgICAgIHR5cGVvZiB0cmlwVmVoaWN1bGUgPT09ICdzdHJpbmcnID8gdW5kZWZpbmVkIDogdHJpcFZlaGljdWxlPy5udW1iZXJcblxuICAgIGNvbnN0IHZlaGljbGVJZCA9IHZlaGljbGU/LmlkXG4gICAgY29uc3QgdmVoaWNsZU51bWJlciA9IHZlaGljbGU/Lm51bWJlclxuXG4gICAgLy8gQ29tcGFyZSBpZHMgaWYgcG9zc2libGVcbiAgICBpZiAoXG4gICAgICB2ZWhpY2xlSWQgJiZcbiAgICAgIHRyaXBWZWhpY3VsZUlkICYmXG4gICAgICBTdHJpbmcodmVoaWNsZUlkKSA9PT0gU3RyaW5nKHRyaXBWZWhpY3VsZUlkKVxuICAgICkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBDb21wYXJlIG51bWJlcnMgaWYgcG9zc2libGUgKFFSIGNvZGVzIG9mdGVuIGVuY29kZSB0aGUgdmVoaWNsZSBudW1iZXIpXG4gICAgaWYgKFxuICAgICAgdmVoaWNsZU51bWJlciAhPSBudWxsICYmXG4gICAgICAodHJpcFZlaGljdWxlTnVtYmVyICE9IG51bGwgfHwgdHJpcFZlaGljdWxlSWQgIT0gbnVsbClcbiAgICApIHtcbiAgICAgIGNvbnN0IHZOdW0gPSBTdHJpbmcodmVoaWNsZU51bWJlcilcbiAgICAgIGlmICh0cmlwVmVoaWN1bGVOdW1iZXIgIT0gbnVsbCAmJiBTdHJpbmcodHJpcFZlaGljdWxlTnVtYmVyKSA9PT0gdk51bSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgICAgLy8gU29tZSBBUElzIG1heSBzdG9yZSB0aGUgdmVoaWNsZSBcIm51bWJlclwiIGluIHRoZSBgdmVoaWN1bGVgIGZpZWxkIGRpcmVjdGx5XG4gICAgICBpZiAodHJpcFZlaGljdWxlSWQgIT0gbnVsbCAmJiBTdHJpbmcodHJpcFZlaGljdWxlSWQpID09PSB2TnVtKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdXNlcidzIGN1cnJlbnQgXCJwaXRzdG9wXCIgdHJpcCBtYXRjaGluZyB0aGUgZ2l2ZW4gdmVoaWNsZSwgaWYgYW55LlxuICAgKiBVc2VzIGluLW1lbW9yeSBzdGF0ZSBmaXJzdCwgdGhlbiBmYWxscyBiYWNrIHRvIGEgYmFja2VuZCBmZXRjaCAod2hlbiBzaWduZWQtaW4pLlxuICAgKi9cbiAgYXN5bmMgZmluZFRyaXBGb3JWZWhpY2xlKFxuICAgIHZlaGljbGU6IExpc3RWZWhpY3VsZTIwMFJlc3BvbnNlQWxsT2ZEYXRhSW5uZXJcbiAgKTogUHJvbWlzZTxMaXN0VHJpcDIwMFJlc3BvbnNlQWxsT2ZEYXRhSW5uZXIgfCBudWxsPiB7XG4gICAgLy8gRmFzdCBwYXRoOiBhbHJlYWR5IGhhdmUgdHJpcHMgaW4gbWVtb3J5XG4gICAgY29uc3QgY3VycmVudFN0YXRlID0gdGhpcy5yZW50aW5nU3RhdGUudmFsdWVcbiAgICBpZiAoY3VycmVudFN0YXRlLnN0YXRlID09PSAndHJpcHMnKSB7XG4gICAgICBjb25zdCBpbk1lbW9yeSA9IChjdXJyZW50U3RhdGUudHJpcHMgYXMgVHJpcFdpdGhBbnlWZWhpY3VsZVtdKS5maW5kKFxuICAgICAgICAodCkgPT5cbiAgICAgICAgICAodC5zdGF0dXMgPT09ICdwaXRzdG9wJyB8fCB0LnN0YXR1cyA9PT0gJ3JlbnRpbmcnKSAmJlxuICAgICAgICAgIHRoaXMuZG9lc1RyaXBNYXRjaFZlaGljbGUodCwgdmVoaWNsZSlcbiAgICAgIClcbiAgICAgIGlmIChpbk1lbW9yeSkgcmV0dXJuIGluTWVtb3J5IGFzIGFueVxuICAgIH1cblxuICAgIC8vIElmIHNpZ25lZC1vdXQsIGRvbid0IHRyeSB0byBjYWxsIHRoZSBiYWNrZW5kXG4gICAgaWYgKHRoaXMuYXV0aFNlcnZpY2UuYXV0aFN0YXRlKCkuc3RhdGUgPT09ICdTaWduZWRPdXQnKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmaXJzdFZhbHVlRnJvbShcbiAgICAgICAgdGhpcy50cmlwc1NlcnZpY2UubGlzdFRyaXAoe1xuICAgICAgICAgIHByb2dyYW06IGVudmlyb25tZW50LnByb2dyYW0sXG4gICAgICAgICAgZXhwYW5kOiBbJ3ZlaGljdWxlJ10sXG4gICAgICAgICAgc3RhdHVzSW46IFsncGl0c3RvcCddLFxuICAgICAgICAgIGxpbWl0OiAxMDAsXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICBjb25zdCBwaXRzdG9wID0gKFxuICAgICAgICByZXMuZGF0YSBhcyB1bmtub3duIGFzIFRyaXBXaXRoQW55VmVoaWN1bGVbXSB8IHVuZGVmaW5lZFxuICAgICAgKT8uZmluZChcbiAgICAgICAgKHQpID0+IHQuc3RhdHVzID09PSAncGl0c3RvcCcgJiYgdGhpcy5kb2VzVHJpcE1hdGNoVmVoaWNsZSh0LCB2ZWhpY2xlKVxuICAgICAgKVxuICAgICAgcmV0dXJuIChwaXRzdG9wIGFzIGFueSkgPz8gbnVsbFxuICAgIH0gY2F0Y2gge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGluaXRpYWxpemVSZWNvbW1lbmRhdGlvbnMoKSB7XG4gICAgY29uc3Qgc3RvcmVkID0gYXdhaXQgdGhpcy5zdG9yYWdlU2VydmljZS5nZXQoJ3VzZXItcmVjb21tZW5kYXRpb25zJylcbiAgICBpZiAoc3RvcmVkKSB7XG4gICAgICBjb25zdCByZWNvbW1lbmRhdGlvbnMgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpXG4gICAgICBjb25zdCBjdXJyZW50VGltZSA9IERhdGUubm93KClcblxuICAgICAgLy8gRmlsdHJlciBsZXMgcmVjb21tYW5kYXRpb25zIGV4cGlyw6llc1xuICAgICAgOyhzdG9yZWQgYXMgU3RvcmVkUmVjb21tZW5kYXRpb25bXSlcbiAgICAgICAgLmZpbHRlcigocmVjKSA9PiBjdXJyZW50VGltZSAtIHJlYy50aW1lc3RhbXAgPCB0aGlzLlJFQ09NTUVOREFUSU9OX1RUTClcbiAgICAgICAgLmZvckVhY2goKHJlYykgPT4gcmVjb21tZW5kYXRpb25zLnNldChyZWMudHJpcElkLCByZWMudGltZXN0YW1wKSlcblxuICAgICAgdGhpcy5yZWNvbW1lbmRhdGlvbnMkLm5leHQocmVjb21tZW5kYXRpb25zKVxuXG4gICAgICAvLyBTaSBkZXMgcmVjb21tYW5kYXRpb25zIG9udCDDqXTDqSBmaWx0csOpZXMsIG1ldHRyZSDDoCBqb3VyIGxlIHN0b3JhZ2VcbiAgICAgIGlmIChzdG9yZWQubGVuZ3RoICE9PSByZWNvbW1lbmRhdGlvbnMuc2l6ZSkge1xuICAgICAgICBhd2FpdCB0aGlzLnNhdmVSZWNvbW1lbmRhdGlvbnMocmVjb21tZW5kYXRpb25zKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgc2F2ZVJlY29tbWVuZGF0aW9ucyhyZWNvbW1lbmRhdGlvbnM6IE1hcDxzdHJpbmcsIG51bWJlcj4pIHtcbiAgICBjb25zdCBzdG9yZWRGb3JtYXQgPSBBcnJheS5mcm9tKHJlY29tbWVuZGF0aW9ucy5lbnRyaWVzKCkpLm1hcChcbiAgICAgIChbdHJpcElkLCB0aW1lc3RhbXBdKSA9PiAoe1xuICAgICAgICB0cmlwSWQsXG4gICAgICAgIHRpbWVzdGFtcCxcbiAgICAgIH0pXG4gICAgKVxuICAgIGF3YWl0IHRoaXMuc3RvcmFnZVNlcnZpY2Uuc2V0KCd1c2VyLXJlY29tbWVuZGF0aW9ucycsIHN0b3JlZEZvcm1hdClcbiAgfVxuXG4gIGhhc1JlY29tbWVuZGVkKHRyaXBJZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgcmVjb21tZW5kYXRpb25zID0gdGhpcy5yZWNvbW1lbmRhdGlvbnMkLnZhbHVlXG4gICAgY29uc3QgdGltZXN0YW1wID0gcmVjb21tZW5kYXRpb25zLmdldCh0cmlwSWQpXG4gICAgaWYgKCF0aW1lc3RhbXApIHJldHVybiBmYWxzZVxuICAgIHJldHVybiBEYXRlLm5vdygpIC0gdGltZXN0YW1wIDwgdGhpcy5SRUNPTU1FTkRBVElPTl9UVExcbiAgfVxuXG4gIGFzeW5jIHN0YXJ0UmVudGluZyhcbiAgICB2ZWhpY2xlOiBMaXN0VmVoaWN1bGUyMDBSZXNwb25zZUFsbE9mRGF0YUlubmVyLFxuICAgIGNoZWNrTG9jYXRpb246IGJvb2xlYW4gPSB0cnVlLFxuICAgIGF1dG9VbmxvY2s6IGJvb2xlYW4gPSBmYWxzZSxcbiAgICBzaG93TG9hZGVyOiBib29sZWFuID0gdHJ1ZSxcbiAgICBza2lwUmVkaXJlY3Q6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPExpc3RUcmlwMjAwUmVzcG9uc2VBbGxPZkRhdGFJbm5lciB8IHZvaWQ+IHtcbiAgICBhd2FpdCB0aGlzLmZjbVNlcnZpY2UuY2hlY2tQZXJtaXNzaW9uKClcbiAgICBpZiAoY2hlY2tMb2NhdGlvbikge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLmdlb2xvY1N0YXRlLnN0YXRlID09PSAnbGl2ZV9wb3NpdGlvbicgfHxcbiAgICAgICAgdGhpcy5nZW9sb2NTdGF0ZS5zdGF0ZSA9PT0gJ3VuaXF1ZV9wb3NpdGlvbidcbiAgICAgICkge1xuICAgICAgICBjb25zdCBjYW5SZW50ID0gYXdhaXQgdGhpcy5pc0luUmFuZ2VGb3JSZW50aW5nKFxuICAgICAgICAgIHZlaGljbGUsXG4gICAgICAgICAgdGhpcy5nZW9sb2NTdGF0ZS5wb3NpdGlvbi5jb29yZHNcbiAgICAgICAgKVxuICAgICAgICBpZiAoIWNhblJlbnQpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBsZXQgbG9hZGluZzogYW55ID0gbnVsbFxuICAgIGlmIChzaG93TG9hZGVyKSB7XG4gICAgICBsb2FkaW5nID0gYXdhaXQgdGhpcy5sb2FkaW5nQ29udHJvbGxlci5jcmVhdGUoe1xuICAgICAgICBtZXNzYWdlOiB0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KCdnZW5lcmljLmxvYWRpbmcnKSxcbiAgICAgIH0pXG4gICAgICBhd2FpdCBsb2FkaW5nLnByZXNlbnQoKVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy50cmlwc1NlcnZpY2VcbiAgICAgICAgLmNyZWF0ZVRyaXAoe1xuICAgICAgICAgIHByb2dyYW06IGVudmlyb25tZW50LnByb2dyYW0sXG4gICAgICAgICAgYm9keToge1xuICAgICAgICAgICAgdmVoaWN1bGU6IHZlaGljbGUuaWQhLFxuICAgICAgICAgICAgb3JpZ2luOiBDYXBhY2l0b3IuaXNOYXRpdmVQbGF0Zm9ybSgpID8gJ21vYmlsZScgOiAnd2ViJyxcbiAgICAgICAgICAgIGF1dG9fdW5sb2NrOiBhdXRvVW5sb2NrLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIC5zdWJzY3JpYmUoe1xuICAgICAgICAgIG5leHQ6IGFzeW5jICh0cmlwKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmdldEN1cnJlbnRUcmlwcygpXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnN0YXRpb25XcmFwcGVyU2VydmljZS5yZWZyZXNoU3RhdGlvbnModHJ1ZSlcbiAgICAgICAgICAgIGlmIChsb2FkaW5nKSBhd2FpdCBsb2FkaW5nLmRpc21pc3MoKVxuXG4gICAgICAgICAgICBpZiAoc2tpcFJlZGlyZWN0KSB7XG4gICAgICAgICAgICAgIC8vIFJldG91cm5lciBsZSB0cmlwIHNhbnMgcmVkaXJpZ2VyXG4gICAgICAgICAgICAgIHJlc29sdmUodHJpcClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIFJlZGlyaWdlciB2ZXJzIGxhIHBhZ2UgYXBwcm9wcmnDqWUgc2Vsb24gbGUgdHlwZSBkZSBkw6l2ZXJyb3VpbGxhZ2VcbiAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvdHJpcHMvY29uZ3JhdHMnXSwge1xuICAgICAgICAgICAgICAgIHN0YXRlOiB7IHRyaXAgfSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgcmVzb2x2ZSh1bmRlZmluZWQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnJvcjogYXN5bmMgKGVycikgPT4ge1xuICAgICAgICAgICAgaWYgKGxvYWRpbmcpIGF3YWl0IGxvYWRpbmcuZGlzbWlzcygpXG5cbiAgICAgICAgICAgIC8vIE9ubHkgc2hvdyB0b2FzdCBlcnJvciBpZiBub3QgYXV0by11bmxvY2sgKHRvIGF2b2lkIGR1cGxpY2F0ZSBlcnJvcnMpXG4gICAgICAgICAgICBpZiAoIWF1dG9VbmxvY2spIHtcbiAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBhd2FpdCB0aGlzLnRvYXN0Q29udHJvbGxlci5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6XG4gICAgICAgICAgICAgICAgICBlcnIuZXJyb3IubWVzc2FnZS5zcGxpdCgnfCcpWzFdPy50cmltKCkgfHwgZXJyLmVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDMwMDAsXG4gICAgICAgICAgICAgICAgY29sb3I6ICdkYW5nZXInLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBhd2FpdCBlcnJvci5wcmVzZW50KClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBhc3luYyBwYXVzZVRyaXAodHJpcElkOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAvLyBTaG93IGNvbmZpcm1hdGlvbiBkaWFsb2cgZmlyc3RcbiAgICBjb25zdCBjb25maXJtQWxlcnQgPSBhd2FpdCB0aGlzLmFsZXJ0Q29udHJvbGxlci5jcmVhdGUoe1xuICAgICAgaGVhZGVyOiB0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KCdyZW50aW5nLmFsZXJ0cy5wYXVzZV90cmlwJyksXG4gICAgICBtZXNzYWdlOiB0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KCdyZW50aW5nLmFsZXJ0cy5wYXVzZV90cmlwX2NvbmZpcm1hdGlvbicpLFxuICAgICAgYnV0dG9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogdGhpcy50cmFuc2xhdGUuaW5zdGFudCgnZ2VuZXJpYy5jYW5jZWwnKSxcbiAgICAgICAgICByb2xlOiAnY2FuY2VsJyxcbiAgICAgICAgICBoYW5kbGVyOiAoKSA9PiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IHRoaXMudHJhbnNsYXRlLmluc3RhbnQoJ3JlbnRpbmcuYWN0aW9ucy5wYXVzZScpLFxuICAgICAgICAgIHJvbGU6ICdjb25maXJtJyxcbiAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KVxuXG4gICAgYXdhaXQgY29uZmlybUFsZXJ0LnByZXNlbnQoKVxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbmZpcm1BbGVydC5vbkRpZERpc21pc3MoKVxuXG4gICAgaWYgKHJlc3VsdC5yb2xlICE9PSAnY29uZmlybScpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGxvYWRpbmcgPSBhd2FpdCB0aGlzLmxvYWRpbmdDb250cm9sbGVyLmNyZWF0ZSh7XG4gICAgICBtZXNzYWdlOiB0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KCdnZW5lcmljLmxvYWRpbmcnKSxcbiAgICB9KVxuICAgIGF3YWl0IGxvYWRpbmcucHJlc2VudCgpXG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgZmlyc3RWYWx1ZUZyb20oXG4gICAgICAgIHRoaXMudHJpcHNQb255U2VydmljZS5wYXVzZVRyaXAoe1xuICAgICAgICAgIGlkOiB0cmlwSWQsXG4gICAgICAgICAgbGl2ZU1vZGU6IGVudmlyb25tZW50LnByb2R1Y3Rpb24sXG4gICAgICAgICAgcGF1c2VUcmlwUmVxdWVzdDoge1xuICAgICAgICAgICAgY3ljbGlzdDogdGhpcy5hY2NvdW50U2VydmljZS5nZXRDdXJyZW50Q3ljbGlzdCgpLmlkISxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgKVxuXG4gICAgICAvLyBXYWl0IDIuNSBzZWNvbmRzIGZvciB0aGUgYmFja2VuZCB0byB1cGRhdGUgdGhlIHN0YXR1c1xuICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMjUwMCkpXG5cbiAgICAgIGF3YWl0IGxvYWRpbmcuZGlzbWlzcygpXG4gICAgICB0aGlzLmdldEN1cnJlbnRUcmlwcygpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgIGF3YWl0IGxvYWRpbmcuZGlzbWlzcygpXG4gICAgICB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihlcnIpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICBhc3luYyBpc0luUmFuZ2VGb3JSZW50aW5nKFxuICAgIHZlaGljbGU6IExpc3RWZWhpY3VsZTIwMFJlc3BvbnNlQWxsT2ZEYXRhSW5uZXIsXG4gICAgdXNlckNvb3Jkcz86IGFueVxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBsZXQgZGlzdGFuY2VcbiAgICBpZiAoIXVzZXJDb29yZHMgfHwgIXZlaGljbGUucG9zaXRpb24pIHtcbiAgICAgIGRpc3RhbmNlID0gbnVsbFxuICAgIH0gZWxzZSB7XG4gICAgICBkaXN0YW5jZSA9IHRoaXMuZ2VvbG9jYXRpb25TZXJ2aWNlLmNhbGN1bGF0ZURpc3RhbmNlKHZlaGljbGUucG9zaXRpb24sIHtcbiAgICAgICAgbGF0aXR1ZGU6IHVzZXJDb29yZHMubGF0aXR1ZGUsXG4gICAgICAgIGxvbmdpdHVkZTogdXNlckNvb3Jkcy5sb25naXR1ZGUsXG4gICAgICB9KVxuICAgIH1cbiAgICBpZiAoZGlzdGFuY2UgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGFsZXJ0ID0gYXdhaXQgdGhpcy5hbGVydENvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgICAgaGVhZGVyOiB0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KCdyZW50aW5nLmFsZXJ0cy5hdHRlbnRpb24nKSxcbiAgICAgICAgbWVzc2FnZTogdGhpcy50cmFuc2xhdGUuaW5zdGFudCgncmVudGluZy5hbGVydHMucG9zaXRpb25fdW5rbm93bicpLFxuICAgICAgICBidXR0b25zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogdGhpcy50cmFuc2xhdGUuaW5zdGFudCgnZ2VuZXJpYy5jYW5jZWwnKSxcbiAgICAgICAgICAgIHJvbGU6ICdjYW5jZWwnLFxuICAgICAgICAgICAgaGFuZGxlcjogKCkgPT4gZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiB0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KCdyZW50aW5nLmFjdGlvbnMuc3RhcnQnKSxcbiAgICAgICAgICAgIHJvbGU6ICdjb25maXJtJyxcbiAgICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pXG4gICAgICBhd2FpdCBhbGVydC5wcmVzZW50KClcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFsZXJ0Lm9uRGlkRGlzbWlzcygpXG4gICAgICByZXR1cm4gcmVzdWx0LnJvbGUgPT09ICdjb25maXJtJ1xuICAgIH1cbiAgICBpZiAoZGlzdGFuY2UgJiYgZGlzdGFuY2UgPiAxMDApIHtcbiAgICAgIGNvbnN0IGFsZXJ0ID0gYXdhaXQgdGhpcy5hbGVydENvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgICAgaGVhZGVyOiB0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KCdyZW50aW5nLmFsZXJ0cy5hdHRlbnRpb24nKSxcbiAgICAgICAgbWVzc2FnZTogdGhpcy50cmFuc2xhdGUuaW5zdGFudCgncmVudGluZy5hbGVydHMudmVoaWNsZV9mYXInLCB7XG4gICAgICAgICAgZGlzdGFuY2UsXG4gICAgICAgIH0pLFxuICAgICAgICBidXR0b25zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogdGhpcy50cmFuc2xhdGUuaW5zdGFudCgnZ2VuZXJpYy5jYW5jZWwnKSxcbiAgICAgICAgICAgIHJvbGU6ICdjYW5jZWwnLFxuICAgICAgICAgICAgaGFuZGxlcjogKCkgPT4gZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiB0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KCdyZW50aW5nLmFjdGlvbnMuc3RhcnQnKSxcbiAgICAgICAgICAgIHJvbGU6ICdjb25maXJtJyxcbiAgICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pXG4gICAgICBhd2FpdCBhbGVydC5wcmVzZW50KClcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFsZXJ0Lm9uRGlkRGlzbWlzcygpXG4gICAgICByZXR1cm4gcmVzdWx0LnJvbGUgPT09ICdjb25maXJtJ1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIGdldEN1cnJlbnRUcmlwcygpIHtcbiAgICBpZiAodGhpcy5hdXRoU2VydmljZS5hdXRoU3RhdGUoKS5zdGF0ZSA9PT0gJ1NpZ25lZE91dCcpIHtcbiAgICAgIHRoaXMucmVudGluZ1N0YXRlLm5leHQoeyBzdGF0ZTogJ25vRGF0YScgfSlcbiAgICAgIHJldHVyblxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbnRpbmdTdGF0ZS5uZXh0KHsgc3RhdGU6ICdsb2FkaW5nJyB9KVxuICAgICAgZm9ya0pvaW4oe1xuICAgICAgICByZW50aW5nOiB0aGlzLnRyaXBzU2VydmljZS5saXN0VHJpcCh7XG4gICAgICAgICAgcHJvZ3JhbTogZW52aXJvbm1lbnQucHJvZ3JhbSxcbiAgICAgICAgICBleHBhbmQ6IFsndmVoaWN1bGUnXSxcbiAgICAgICAgICBzdGF0dXNJbjogWydyZW50aW5nLHBpdHN0b3AsdGVybWluYXRpbmcsdGVybWluYXRpb25fcmVxdWVzdGVkJ10sXG4gICAgICAgIH0pLFxuICAgICAgICBjb21wbGV0ZWQ6IHRoaXMudHJpcHNTZXJ2aWNlLmxpc3RUcmlwKHtcbiAgICAgICAgICBwcm9ncmFtOiBlbnZpcm9ubWVudC5wcm9ncmFtLFxuICAgICAgICAgIGV4cGFuZDogWyd2ZWhpY3VsZSddLFxuICAgICAgICAgIHN0YXR1c0luOiBbJ2NvbXBsZXRlZCddLFxuICAgICAgICAgIGVuZFRpbWVzdGFtcEd0ZTogTWF0aC5mbG9vcihuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApIC0gMjAgKiA2MCwgLy8gMjAgbWludXRlc1xuICAgICAgICB9KSxcbiAgICAgIH0pLnN1YnNjcmliZSgoeyByZW50aW5nLCBjb21wbGV0ZWQgfSkgPT4ge1xuICAgICAgICBjb25zdCB1bmlxdWVUcmlwcyA9IFtcbiAgICAgICAgICAuLi5uZXcgU2V0KFsuLi4ocmVudGluZy5kYXRhIHx8IFtdKSwgLi4uKGNvbXBsZXRlZC5kYXRhIHx8IFtdKV0pLFxuICAgICAgICBdXG4gICAgICAgIGlmICh1bmlxdWVUcmlwcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLnJlbnRpbmdTdGF0ZS5uZXh0KHsgc3RhdGU6ICdub0RhdGEnIH0pXG4gICAgICAgIH0gZWxzZSBpZiAodW5pcXVlVHJpcHMubGVuZ3RoID49IDEpIHtcbiAgICAgICAgICB0aGlzLnJlbnRpbmdTdGF0ZS5uZXh0KHtcbiAgICAgICAgICAgIHN0YXRlOiAndHJpcHMnLFxuICAgICAgICAgICAgdHJpcHM6IHJlbnRpbmcuZGF0YSB8fCBbXSxcbiAgICAgICAgICAgIHRyaXBzQ29tcGxldGVkOiBjb21wbGV0ZWQuZGF0YSB8fCBbXSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGlmIChjb21wbGV0ZWQuZGF0YT8ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRoaXMuYWNjb3VudFNlcnZpY2UubG9hZEN5Y2xpc3QoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGdldFN0YXRlKCk6IHJlbnRpbmdTdGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMucmVudGluZ1N0YXRlLmdldFZhbHVlKClcbiAgfVxuICBhc3luYyBlbmRUcmlwV2l0aENvZGUodHJpcElkOiBzdHJpbmcsIGVuZENvZGU6IHN0cmluZykge1xuICAgIGNvbnN0IGxvYWRpbmcgPSBhd2FpdCB0aGlzLmxvYWRpbmdDb250cm9sbGVyLmNyZWF0ZSh7XG4gICAgICBtZXNzYWdlOiB0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KCdyZW50aW5nLmxvYWRpbmcuZW5kX3RyaXBfcmVxdWVzdCcpLFxuICAgIH0pXG4gICAgYXdhaXQgbG9hZGluZy5wcmVzZW50KClcblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBmaXJzdFZhbHVlRnJvbShcbiAgICAgICAgdGhpcy50ZXJtaW5hdGlvblJlcXVlc3RzU2VydmljZS5tYXJrVHJpcEZvclRlcm1pbmF0aW9uKHtcbiAgICAgICAgICBwcm9ncmFtOiBlbnZpcm9ubWVudC5wcm9ncmFtLFxuICAgICAgICAgIGxpdmVNb2RlOiBlbnZpcm9ubWVudC5wcm9kdWN0aW9uLFxuICAgICAgICAgIGlkOiB0cmlwSWQsXG4gICAgICAgICAgYm9keTogeyBlbmRfY29kZTogZW5kQ29kZSB9LFxuICAgICAgICB9KVxuICAgICAgKVxuICAgICAgYXdhaXQgbG9hZGluZy5kaXNtaXNzKClcblxuICAgICAgY29uc3Qgc3VjY2Vzc1RvYXN0ID0gYXdhaXQgdGhpcy50b2FzdENvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgICAgbWVzc2FnZTogdGhpcy50cmFuc2xhdGUuaW5zdGFudCgncmVudGluZy5zdWNjZXNzLmVuZF90cmlwX3JlcXVlc3QnKSxcbiAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgIGNvbG9yOiAnc3VjY2VzcycsXG4gICAgICB9KVxuICAgICAgYXdhaXQgc3VjY2Vzc1RvYXN0LnByZXNlbnQoKVxuICAgICAgdGhpcy5nZXRDdXJyZW50VHJpcHMoKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgYXdhaXQgbG9hZGluZy5kaXNtaXNzKClcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHJlc3VtZVRyaXAodHJpcElkOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBjb25zdCBsb2FkaW5nID0gYXdhaXQgdGhpcy5sb2FkaW5nQ29udHJvbGxlci5jcmVhdGUoe1xuICAgICAgbWVzc2FnZTogdGhpcy50cmFuc2xhdGUuaW5zdGFudCgncmVudGluZy5sb2FkaW5nLnJlc3VtZV90cmlwJyksXG4gICAgfSlcbiAgICBhd2FpdCBsb2FkaW5nLnByZXNlbnQoKVxuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGZpcnN0VmFsdWVGcm9tKFxuICAgICAgICB0aGlzLnRyaXBzUG9ueVNlcnZpY2UucmVzdW1lVHJpcCh7XG4gICAgICAgICAgaWQ6IHRyaXBJZCxcbiAgICAgICAgICBsaXZlTW9kZTogZW52aXJvbm1lbnQucHJvZHVjdGlvbixcbiAgICAgICAgICByZXN1bWVUcmlwUmVxdWVzdDoge1xuICAgICAgICAgICAgY3ljbGlzdDogdGhpcy5hY2NvdW50U2VydmljZS5nZXRDdXJyZW50Q3ljbGlzdCgpLmlkISxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgKVxuXG4gICAgICAvLyBXYWl0IDIuNSBzZWNvbmRzIGZvciB0aGUgYmFja2VuZCB0byB1cGRhdGUgdGhlIHN0YXR1c1xuICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMjUwMCkpXG5cbiAgICAgIGF3YWl0IGxvYWRpbmcuZGlzbWlzcygpXG4gICAgICB0aGlzLmdldEN1cnJlbnRUcmlwcygpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgIGF3YWl0IGxvYWRpbmcuZGlzbWlzcygpXG4gICAgICB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihlcnIpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICBhc3luYyBlbmRUcmlwV2l0aFBob3RvKFxuICAgIHRyaXBJZDogc3RyaW5nLFxuICAgIHBob3RvVXJsOiBzdHJpbmcsXG4gICAgcG9zaXRpb25EYXRhOiB7IGxhdGl0dWRlPzogc3RyaW5nOyBsb25naXR1ZGU/OiBzdHJpbmcgfSA9IHt9XG4gICkge1xuICAgIGNvbnN0IGxvYWRpbmcgPSBhd2FpdCB0aGlzLmxvYWRpbmdDb250cm9sbGVyLmNyZWF0ZSh7XG4gICAgICBtZXNzYWdlOiB0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KCdyZW50aW5nLmxvYWRpbmcuZW5kX3RyaXAnKSxcbiAgICB9KVxuICAgIGF3YWl0IGxvYWRpbmcucHJlc2VudCgpXG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgZmlyc3RWYWx1ZUZyb20oXG4gICAgICAgIHRoaXMudGVybWluYXRpb25SZXF1ZXN0c1NlcnZpY2UubWFya1RyaXBGb3JUZXJtaW5hdGlvbih7XG4gICAgICAgICAgcHJvZ3JhbTogZW52aXJvbm1lbnQucHJvZ3JhbSxcbiAgICAgICAgICBsaXZlTW9kZTogZW52aXJvbm1lbnQucHJvZHVjdGlvbixcbiAgICAgICAgICBpZDogdHJpcElkLFxuICAgICAgICAgIGJvZHk6IHtcbiAgICAgICAgICAgIHBob3RvOiBwaG90b1VybCxcbiAgICAgICAgICAgIC4uLnBvc2l0aW9uRGF0YSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgKVxuICAgICAgYXdhaXQgbG9hZGluZy5kaXNtaXNzKClcblxuICAgICAgY29uc3Qgc3VjY2Vzc1RvYXN0ID0gYXdhaXQgdGhpcy50b2FzdENvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgICAgbWVzc2FnZTogdGhpcy50cmFuc2xhdGUuaW5zdGFudCgncmVudGluZy5zdWNjZXNzLmVuZF90cmlwX3JlcXVlc3QnKSxcbiAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgIGNvbG9yOiAnc3VjY2VzcycsXG4gICAgICB9KVxuICAgICAgYXdhaXQgc3VjY2Vzc1RvYXN0LnByZXNlbnQoKVxuICAgICAgdGhpcy5nZXRDdXJyZW50VHJpcHMoKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgYXdhaXQgbG9hZGluZy5kaXNtaXNzKClcbiAgICAgIHRoaXMuZXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKGVycilcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGdldFVzZXJUcmlwcygpIHtcbiAgICByZXR1cm4gdGhpcy50cmlwc1NlcnZpY2UubGlzdFRyaXAoe1xuICAgICAgcHJvZ3JhbTogZW52aXJvbm1lbnQucHJvZ3JhbSxcbiAgICAgIGxpbWl0OiAxMDAsXG4gICAgfSlcbiAgfVxuXG4gIGhhc0FjdGl2ZVRyaXBPdmVyVGhyZWVIb3Vycyh0PzogTGlzdFRyaXAyMDBSZXNwb25zZUFsbE9mRGF0YUlubmVyKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMucmVudGluZ1N0YXRlLnZhbHVlLnN0YXRlID09PSAndHJpcHMnKSB7XG4gICAgICBjb25zdCBjdXJyZW50VGltZSA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApXG4gICAgICBpZiAodCkge1xuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IGN1cnJlbnRUaW1lIC0gdC5zdGFydF90aW1lc3RhbXAhXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAodC5zdGF0dXMgPT09ICdyZW50aW5nJyB8fCB0LnN0YXR1cyA9PT0gJ3BpdHN0b3AnKSAmJlxuICAgICAgICAgIGR1cmF0aW9uID4gMTA4MDAgJiZcbiAgICAgICAgICBkdXJhdGlvbiA8IDg2NDAwXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbnRpbmdTdGF0ZS52YWx1ZS50cmlwcy5zb21lKCh0cmlwKSA9PiB7XG4gICAgICAgICAgY29uc3QgZHVyYXRpb24gPSBjdXJyZW50VGltZSAtIHRyaXAuc3RhcnRfdGltZXN0YW1wIVxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAodHJpcC5zdGF0dXMgPT09ICdyZW50aW5nJyB8fCB0cmlwLnN0YXR1cyA9PT0gJ3BpdHN0b3AnKSAmJlxuICAgICAgICAgICAgZHVyYXRpb24gPiAxMDgwMCAmJlxuICAgICAgICAgICAgZHVyYXRpb24gPCA4NjQwMFxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBoYXNBY3RpdmVUcmlwT3ZlcjI0SG91cnModD86IExpc3RUcmlwMjAwUmVzcG9uc2VBbGxPZkRhdGFJbm5lcik6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLnJlbnRpbmdTdGF0ZS52YWx1ZS5zdGF0ZSA9PT0gJ3RyaXBzJykge1xuICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKVxuICAgICAgaWYgKHQpIHtcbiAgICAgICAgY29uc3QgZHVyYXRpb24gPSBjdXJyZW50VGltZSAtIHQuc3RhcnRfdGltZXN0YW1wIVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICh0LnN0YXR1cyA9PT0gJ3JlbnRpbmcnIHx8IHQuc3RhdHVzID09PSAncGl0c3RvcCcpICYmIGR1cmF0aW9uID4gODY0MDBcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVudGluZ1N0YXRlLnZhbHVlLnRyaXBzLnNvbWUoKHRyaXApID0+IHtcbiAgICAgICAgICBjb25zdCBkdXJhdGlvbiA9IGN1cnJlbnRUaW1lIC0gdHJpcC5zdGFydF90aW1lc3RhbXAhXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICh0cmlwLnN0YXR1cyA9PT0gJ3JlbnRpbmcnIHx8IHRyaXAuc3RhdHVzID09PSAncGl0c3RvcCcpICYmXG4gICAgICAgICAgICBkdXJhdGlvbiA+IDg2NDAwXG4gICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGFzeW5jIHJlY29tbWVuZFZlaGljdWxlKHRyaXBJRDogc3RyaW5nKSB7XG4gICAgY29uc3QgbG9hZGluZyA9IGF3YWl0IHRoaXMubG9hZGluZ0NvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgIG1lc3NhZ2U6IHRoaXMudHJhbnNsYXRlLmluc3RhbnQoJ3JlY29tbWFuZGF0aW9uLmxvYWRpbmcnKSxcbiAgICB9KVxuICAgIGF3YWl0IGxvYWRpbmcucHJlc2VudCgpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVjb21tZW5kYXRpb24gPSBhd2FpdCBmaXJzdFZhbHVlRnJvbShcbiAgICAgICAgdGhpcy50cmlwc1NlcnZpY2UucmVjb21tZW5kVmVoaWN1bGUoe1xuICAgICAgICAgIHByb2dyYW06IGVudmlyb25tZW50LnByb2dyYW0sXG4gICAgICAgICAgaWQ6IHRyaXBJRCxcbiAgICAgICAgfSlcbiAgICAgIClcblxuICAgICAgLy8gU2F1dmVnYXJkZXIgbGEgcmVjb21tYW5kYXRpb24gYXZlYyB1biB0aW1lc3RhbXBcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLnJlY29tbWVuZGF0aW9ucyQudmFsdWVcbiAgICAgIGN1cnJlbnQuc2V0KHRyaXBJRCwgRGF0ZS5ub3coKSlcbiAgICAgIHRoaXMucmVjb21tZW5kYXRpb25zJC5uZXh0KGN1cnJlbnQpXG4gICAgICBhd2FpdCB0aGlzLnNhdmVSZWNvbW1lbmRhdGlvbnMoY3VycmVudClcbiAgICAgIGF3YWl0IHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3JlY29tbWFuZGF0aW9uLWNvbmdyYXRzJ10pXG4gICAgICByZXR1cm4gcmVjb21tZW5kYXRpb25cbiAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IoZXJyKVxuICAgICAgdGhyb3cgZXJyXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGF3YWl0IGxvYWRpbmcuZGlzbWlzcygpXG4gICAgfVxuICB9XG5cbiAgLy8gTcOpdGhvZGUgdXRpbGl0YWlyZSBwb3VyIG5ldHRveWVyIG1hbnVlbGxlbWVudCBsZXMgcmVjb21tYW5kYXRpb25zIGV4cGlyw6llc1xuICBhc3luYyBjbGVhbkV4cGlyZWRSZWNvbW1lbmRhdGlvbnMoKSB7XG4gICAgY29uc3QgY3VycmVudCA9IHRoaXMucmVjb21tZW5kYXRpb25zJC52YWx1ZVxuICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gRGF0ZS5ub3coKVxuICAgIGxldCBoYXNDaGFuZ2VzID0gZmFsc2VcblxuICAgIGZvciAoY29uc3QgW3RyaXBJZCwgdGltZXN0YW1wXSBvZiBjdXJyZW50LmVudHJpZXMoKSkge1xuICAgICAgaWYgKGN1cnJlbnRUaW1lIC0gdGltZXN0YW1wID49IHRoaXMuUkVDT01NRU5EQVRJT05fVFRMKSB7XG4gICAgICAgIGN1cnJlbnQuZGVsZXRlKHRyaXBJZClcbiAgICAgICAgaGFzQ2hhbmdlcyA9IHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFzQ2hhbmdlcykge1xuICAgICAgdGhpcy5yZWNvbW1lbmRhdGlvbnMkLm5leHQoY3VycmVudClcbiAgICAgIGF3YWl0IHRoaXMuc2F2ZVJlY29tbWVuZGF0aW9ucyhjdXJyZW50KVxuICAgIH1cbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcURNLElBQU8sb0JBQVAsTUFBTyxrQkFBZ0I7RUFNM0IsWUFDWSxZQUNxQixVQUNuQixlQUE0QjtBQUY5QixTQUFBLGFBQUE7QUFORixTQUFBLFdBQVcsWUFBWTtBQUMxQixTQUFBLGlCQUFpQixJQUFJLFlBQVc7QUFDaEMsU0FBQSxnQkFBZ0IsSUFBSSxjQUFhO0FBUXRDLFFBQUksZUFBZTtBQUNqQixXQUFLLGdCQUFnQjtJQUN2QjtBQUNBLFFBQUksT0FBTyxLQUFLLGNBQWMsYUFBYSxVQUFVO0FBQ25ELFlBQU0sZ0JBQWdCLE1BQU0sUUFBUSxRQUFRLElBQUksU0FBUyxDQUFDLElBQUk7QUFDOUQsVUFBSSxpQkFBaUIsUUFBVztBQUM5QixtQkFBVztNQUNiO0FBRUEsVUFBSSxPQUFPLGFBQWEsVUFBVTtBQUNoQyxtQkFBVyxLQUFLO01BQ2xCO0FBQ0EsV0FBSyxjQUFjLFdBQVc7SUFDaEM7QUFDQSxTQUFLLFVBQVUsS0FBSyxjQUFjLFdBQVcsSUFBSSx5QkFBd0I7RUFDM0U7O0VBR1EsZ0JBQ04sWUFDQSxPQUNBLEtBQVk7QUFFWixRQUFJLE9BQU8sVUFBVSxZQUFZLGlCQUFpQixTQUFTLE9BQU87QUFDaEUsbUJBQWEsS0FBSyx5QkFBeUIsWUFBWSxLQUFLO0lBQzlELE9BQU87QUFDTCxtQkFBYSxLQUFL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
