import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  Directive,
  ElementRef,
  Injectable,
  InjectionToken,
  NgClass,
  NgStyle,
  NgZone,
  Observable,
  Output,
  PLATFORM_ID,
  Subject,
  TransferState,
  ViewChild,
  assertInInjectionContext,
  defer,
  filter,
  from,
  inject,
  input,
  isPlatformBrowser,
  isPromise,
  makeStateKey,
  map,
  mergeMap,
  of,
  setClassMetadata,
  shareReplay,
  switchMap,
  takeUntil,
  tap,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵloadQuery,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵstyleProp,
  ɵɵviewQuery
} from "./chunk-DGENMXJW.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-UESUV5PM.js";

// node_modules/@angular/core/fesm2022/rxjs-interop.mjs
function takeUntilDestroyed(destroyRef) {
  if (!destroyRef) {
    assertInInjectionContext(takeUntilDestroyed);
    destroyRef = inject(DestroyRef);
  }
  const destroyed$ = new Observable((observer) => {
    const unregisterFn = destroyRef.onDestroy(observer.next.bind(observer));
    return unregisterFn;
  });
  return (source) => {
    return source.pipe(takeUntil(destroyed$));
  };
}

// node_modules/ngx-lottie/fesm2022/ngx-lottie.mjs
var _c0 = ["container"];
var LOTTIE_OPTIONS = new InjectionToken("LottieOptions");
function convertPlayerOrLoaderToObservable() {
  const ngZone = inject(NgZone);
  const {
    player,
    useWebWorker
  } = inject(LOTTIE_OPTIONS);
  const playerOrLoader = ngZone.runOutsideAngular(() => player());
  const player$ = isPromise(playerOrLoader) ? from(playerOrLoader).pipe(map((module) => module.default || module)) : of(playerOrLoader);
  return player$.pipe(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    tap((player2) => {
      var _a;
      return (_a = player2.useWebWorker) == null ? void 0 : _a.call(player2, useWebWorker);
    }),
    shareReplay({
      bufferSize: 1,
      refCount: true
    })
  );
}
var _AnimationLoader = class _AnimationLoader {
  constructor() {
    this.player$ = convertPlayerOrLoaderToObservable().pipe(mergeMap((player) => raf$(this.ngZone).pipe(map(() => player))));
    this.ngZone = inject(NgZone);
  }
  loadAnimation(options) {
    return this.player$.pipe(map((player) => this.createAnimationItem(player, options)));
  }
  resolveOptions(options, container) {
    return Object.assign({
      container,
      renderer: "svg",
      loop: true,
      autoplay: true
    }, options);
  }
  createAnimationItem(player, options) {
    return this.ngZone.runOutsideAngular(() => player.loadAnimation(options));
  }
};
_AnimationLoader.\u0275fac = function AnimationLoader_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AnimationLoader)();
};
_AnimationLoader.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _AnimationLoader,
  factory: _AnimationLoader.\u0275fac,
  providedIn: "root"
});
var AnimationLoader = _AnimationLoader;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimationLoader, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function raf$(ngZone) {
  return new Observable((subscriber) => {
    const requestId = ngZone.runOutsideAngular(() => requestAnimationFrame(() => {
      subscriber.next();
      subscriber.complete();
    }));
    return () => cancelAnimationFrame(requestId);
  });
}
var _CacheableAnimationLoader = class _CacheableAnimationLoader extends AnimationLoader {
  constructor() {
    super(...arguments);
    this.cache = /* @__PURE__ */ new Map();
  }
  ngOnDestroy() {
    this.cache.clear();
  }
  loadAnimation(options) {
    return this.player$.pipe(map((player) => {
      const animationItem = this.createAnimationItem(player, this.transformOptions(options));
      this.awaitConfigAndCache(options, animationItem);
      return animationItem;
    }));
  }
  awaitConfigAndCache(options, animationItem) {
    if (this.isAnimationConfigWithPath(options)) {
      if (this.cache.has(options.path)) {
        return;
      }
      animationItem.addEventListener("config_ready", () => {
        this.cache.set(options.path, JSON.stringify(animationItem["animationData"]));
      });
    }
  }
  transformOptions(options) {
    if (this.isAnimationConfigWithPath(options) && this.cache.has(options.path)) {
      return __spreadProps(__spreadValues({}, options), {
        path: void 0,
        // Caretaker note: `lottie-web` cannot re-use the `animationData` object between animations, and we
        // have to retrieve a new object each time an animation is created.
        // https://github.com/airbnb/lottie-web#html
        // See comments for the `animationData` property.
        animationData: JSON.parse(this.cache.get(options.path))
      });
    } else {
      return options;
    }
  }
  isAnimationConfigWithPath(options) {
    return typeof options.path === "string";
  }
};
_CacheableAnimationLoader.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275CacheableAnimationLoader_BaseFactory;
  return function CacheableAnimationLoader_Factory(__ngFactoryType__) {
    return (\u0275CacheableAnimationLoader_BaseFactory || (\u0275CacheableAnimationLoader_BaseFactory = \u0275\u0275getInheritedFactory(_CacheableAnimationLoader)))(__ngFactoryType__ || _CacheableAnimationLoader);
  };
})();
_CacheableAnimationLoader.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _CacheableAnimationLoader,
  factory: _CacheableAnimationLoader.\u0275fac,
  providedIn: "root"
});
var CacheableAnimationLoader = _CacheableAnimationLoader;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CacheableAnimationLoader, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function provideLottieOptions(options) {
  return [{
    provide: LOTTIE_OPTIONS,
    useValue: options
  }];
}
var _BaseDirective = class _BaseDirective {
  constructor() {
    this.options = input(null);
    this.containerClass = input(null);
    this.styles = input(null);
    this.animationCreated = this.getAnimationItem();
    this.complete = this.awaitAnimationItemAndStartListening("complete");
    this.loopComplete = this.awaitAnimationItemAndStartListening("loopComplete");
    this.enterFrame = this.awaitAnimationItemAndStartListening("enterFrame");
    this.segmentStart = this.awaitAnimationItemAndStartListening("segmentStart");
    this.configReady = this.awaitAnimationItemAndStartListening("config_ready");
    this.dataReady = this.awaitAnimationItemAndStartListening("data_ready");
    this.domLoaded = this.awaitAnimationItemAndStartListening("DOMLoaded");
    this.destroy = this.awaitAnimationItemAndStartListening("destroy");
    this.error = this.awaitAnimationItemAndStartListening("error");
    this.ngZone = inject(NgZone);
    this.isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
    this.animationLoader = inject(AnimationLoader);
    this.loadAnimation$ = new Subject();
    this.animationItem$ = new BehaviorSubject(null);
    this.setupLoadAnimationListener();
  }
  ngOnDestroy() {
    this.destroyAnimation();
  }
  loadAnimation(changes, container) {
    this.ngZone.runOutsideAngular(() => this.loadAnimation$.next([changes, container]));
  }
  getAnimationItem() {
    return defer(() => this.animationItem$).pipe(filter((animationItem) => animationItem !== null));
  }
  awaitAnimationItemAndStartListening(name) {
    return this.getAnimationItem().pipe(switchMap((animationItem) => (
      // `fromEvent` will try to call `removeEventListener` when `unsubscribe()` is invoked.
      // The problem is that `ngOnDestroy()` is called before Angular unsubscribes from
      // `@Output()` properties, thus `animationItem` will be `null` already, also `lottie-web`
      // removes event listeners when calling `destroy()`.
      new Observable((observer) => {
        this.ngZone.runOutsideAngular(() => {
          animationItem.addEventListener(name, (event) => {
            this.ngZone.runOutsideAngular(() => {
              observer.next(event);
            });
          });
        });
      })
    )));
  }
  setupLoadAnimationListener() {
    const loadAnimation$ = this.loadAnimation$.pipe(filter(([changes]) => this.isBrowser && changes.options !== void 0));
    loadAnimation$.pipe(switchMap(([changes, container]) => {
      this.destroyAnimation();
      return this.animationLoader.loadAnimation(this.animationLoader.resolveOptions(changes.options.currentValue, container));
    }), takeUntilDestroyed()).subscribe((animationItem) => {
      this.ngZone.run(() => this.animationItem$.next(animationItem));
    });
  }
  destroyAnimation() {
    const animationItem = this.animationItem$.getValue();
    if (animationItem === null) {
      return;
    }
    animationItem.destroy();
    this.animationItem$.next(null);
  }
};
_BaseDirective.\u0275fac = function BaseDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BaseDirective)();
};
_BaseDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _BaseDirective,
  selectors: [["", "lottie", ""]],
  inputs: {
    options: [1, "options"],
    containerClass: [1, "containerClass"],
    styles: [1, "styles"]
  },
  outputs: {
    animationCreated: "animationCreated",
    complete: "complete",
    loopComplete: "loopComplete",
    enterFrame: "enterFrame",
    segmentStart: "segmentStart",
    configReady: "configReady",
    dataReady: "dataReady",
    domLoaded: "domLoaded",
    destroy: "destroy",
    error: "error"
  },
  standalone: false
});
var BaseDirective = _BaseDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseDirective, [{
    type: Directive,
    args: [{
      selector: "[lottie]"
    }]
  }], () => [], {
    animationCreated: [{
      type: Output
    }],
    complete: [{
      type: Output
    }],
    loopComplete: [{
      type: Output
    }],
    enterFrame: [{
      type: Output
    }],
    segmentStart: [{
      type: Output
    }],
    configReady: [{
      type: Output
    }],
    dataReady: [{
      type: Output
    }],
    domLoaded: [{
      type: Output
    }],
    destroy: [{
      type: Output
    }],
    error: [{
      type: Output
    }]
  });
})();
var _LottieDirective = class _LottieDirective extends BaseDirective {
  constructor() {
    super(...arguments);
    this.host = inject(ElementRef);
  }
  ngOnChanges(changes) {
    super.loadAnimation(changes, this.host.nativeElement);
  }
};
_LottieDirective.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275LottieDirective_BaseFactory;
  return function LottieDirective_Factory(__ngFactoryType__) {
    return (\u0275LottieDirective_BaseFactory || (\u0275LottieDirective_BaseFactory = \u0275\u0275getInheritedFactory(_LottieDirective)))(__ngFactoryType__ || _LottieDirective);
  };
})();
_LottieDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _LottieDirective,
  selectors: [["", "lottie", ""]],
  features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
});
var LottieDirective = _LottieDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LottieDirective, [{
    type: Directive,
    args: [{
      selector: "[lottie]",
      standalone: true
    }]
  }], null, null);
})();
var _LottieComponent = class _LottieComponent extends BaseDirective {
  constructor() {
    super(...arguments);
    this.width = input(null);
    this.height = input(null);
    this.container = null;
  }
  ngOnChanges(changes) {
    super.loadAnimation(changes, this.container.nativeElement);
  }
};
_LottieComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275LottieComponent_BaseFactory;
  return function LottieComponent_Factory(__ngFactoryType__) {
    return (\u0275LottieComponent_BaseFactory || (\u0275LottieComponent_BaseFactory = \u0275\u0275getInheritedFactory(_LottieComponent)))(__ngFactoryType__ || _LottieComponent);
  };
})();
_LottieComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _LottieComponent,
  selectors: [["ng-lottie"]],
  viewQuery: function LottieComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 7);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.container = _t.first);
    }
  },
  inputs: {
    width: [1, "width"],
    height: [1, "height"]
  },
  features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature],
  decls: 2,
  vars: 6,
  consts: [["container", ""], [3, "ngStyle", "ngClass"]],
  template: function LottieComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "div", 1, 0);
    }
    if (rf & 2) {
      \u0275\u0275styleProp("width", ctx.width() || "100%")("height", ctx.height() || "100%");
      \u0275\u0275property("ngStyle", ctx.styles())("ngClass", ctx.containerClass());
    }
  },
  dependencies: [NgStyle, NgClass],
  encapsulation: 2,
  changeDetection: 0
});
var LottieComponent = _LottieComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LottieComponent, [{
    type: Component,
    args: [{
      selector: "ng-lottie",
      template: `
    <div
      #container
      [style.width]="width() || '100%'"
      [style.height]="height() || '100%'"
      [ngStyle]="styles()"
      [ngClass]="containerClass()"
    ></div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [NgStyle, NgClass]
    }]
  }], null, {
    container: [{
      type: ViewChild,
      args: ["container", {
        static: true
      }]
    }]
  });
})();
function transformAnimationFilenameToKey(animation) {
  const [animationName] = animation.split(".json");
  return `animation-${animationName}`;
}
var _LottieTransferState = class _LottieTransferState {
  constructor(transferState) {
    this.transferState = transferState;
  }
  get(animation) {
    const animationKey = transformAnimationFilenameToKey(animation);
    const stateKey = makeStateKey(animationKey);
    return this.transferState.get(stateKey, null);
  }
};
_LottieTransferState.\u0275fac = function LottieTransferState_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LottieTransferState)(\u0275\u0275inject(TransferState));
};
_LottieTransferState.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _LottieTransferState,
  factory: _LottieTransferState.\u0275fac,
  providedIn: "root"
});
var LottieTransferState = _LottieTransferState;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LottieTransferState, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: TransferState
  }], null);
})();

export {
  provideLottieOptions,
  LottieComponent
};
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
  (**
   * @license Angular v19.2.15
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AYW5ndWxhci9jb3JlL2Zlc20yMDIyL3J4anMtaW50ZXJvcC5tanMiLCJub2RlX21vZHVsZXMvbmd4LWxvdHRpZS9mZXNtMjAyMi9uZ3gtbG90dGllLm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlIEFuZ3VsYXIgdjE5LjIuMTVcbiAqIChjKSAyMDEwLTIwMjUgR29vZ2xlIExMQy4gaHR0cHM6Ly9hbmd1bGFyLmlvL1xuICogTGljZW5zZTogTUlUXG4gKi9cblxuaW1wb3J0IHsgYXNzZXJ0SW5JbmplY3Rpb25Db250ZXh0LCBpbmplY3QsIERlc3Ryb3lSZWYsIMm1UnVudGltZUVycm9yIGFzIF9SdW50aW1lRXJyb3IsIMm1Z2V0T3V0cHV0RGVzdHJveVJlZiBhcyBfZ2V0T3V0cHV0RGVzdHJveVJlZiwgSW5qZWN0b3IsIGVmZmVjdCwgdW50cmFja2VkLCDJtW1pY3JvdGFza0VmZmVjdCBhcyBfbWljcm90YXNrRWZmZWN0LCBhc3NlcnROb3RJblJlYWN0aXZlQ29udGV4dCwgc2lnbmFsLCBjb21wdXRlZCwgUGVuZGluZ1Rhc2tzLCByZXNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG4vKipcbiAqIE9wZXJhdG9yIHdoaWNoIGNvbXBsZXRlcyB0aGUgT2JzZXJ2YWJsZSB3aGVuIHRoZSBjYWxsaW5nIGNvbnRleHQgKGNvbXBvbmVudCwgZGlyZWN0aXZlLCBzZXJ2aWNlLFxuICogZXRjKSBpcyBkZXN0cm95ZWQuXG4gKlxuICogQHBhcmFtIGRlc3Ryb3lSZWYgb3B0aW9uYWxseSwgdGhlIGBEZXN0cm95UmVmYCByZXByZXNlbnRpbmcgdGhlIGN1cnJlbnQgY29udGV4dC4gVGhpcyBjYW4gYmVcbiAqICAgICBwYXNzZWQgZXhwbGljaXRseSB0byB1c2UgYHRha2VVbnRpbERlc3Ryb3llZGAgb3V0c2lkZSBvZiBhbiBbaW5qZWN0aW9uXG4gKiBjb250ZXh0XShndWlkZS9kaS9kZXBlbmRlbmN5LWluamVjdGlvbi1jb250ZXh0KS4gT3RoZXJ3aXNlLCB0aGUgY3VycmVudCBgRGVzdHJveVJlZmAgaXMgaW5qZWN0ZWQuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5mdW5jdGlvbiB0YWtlVW50aWxEZXN0cm95ZWQoZGVzdHJveVJlZikge1xuICBpZiAoIWRlc3Ryb3lSZWYpIHtcbiAgICBhc3NlcnRJbkluamVjdGlvbkNvbnRleHQodGFrZVVudGlsRGVzdHJveWVkKTtcbiAgICBkZXN0cm95UmVmID0gaW5qZWN0KERlc3Ryb3lSZWYpO1xuICB9XG4gIGNvbnN0IGRlc3Ryb3llZCQgPSBuZXcgT2JzZXJ2YWJsZShvYnNlcnZlciA9PiB7XG4gICAgY29uc3QgdW5yZWdpc3RlckZuID0gZGVzdHJveVJlZi5vbkRlc3Ryb3kob2JzZXJ2ZXIubmV4dC5iaW5kKG9ic2VydmVyKSk7XG4gICAgcmV0dXJuIHVucmVnaXN0ZXJGbjtcbiAgfSk7XG4gIHJldHVybiBzb3VyY2UgPT4ge1xuICAgIHJldHVybiBzb3VyY2UucGlwZSh0YWtlVW50aWwoZGVzdHJveWVkJCkpO1xuICB9O1xufVxuXG4vKipcbiAqIEltcGxlbWVudGF0aW9uIG9mIGBPdXRwdXRSZWZgIHRoYXQgZW1pdHMgdmFsdWVzIGZyb21cbiAqIGFuIFJ4SlMgb2JzZXJ2YWJsZSBzb3VyY2UuXG4gKlxuICogQGludGVybmFsXG4gKi9cbmNsYXNzIE91dHB1dEZyb21PYnNlcnZhYmxlUmVmIHtcbiAgc291cmNlO1xuICBkZXN0cm95ZWQgPSBmYWxzZTtcbiAgZGVzdHJveVJlZiA9IGluamVjdChEZXN0cm95UmVmKTtcbiAgY29uc3RydWN0b3Ioc291cmNlKSB7XG4gICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgdGhpcy5kZXN0cm95UmVmLm9uRGVzdHJveSgoKSA9PiB7XG4gICAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWU7XG4gICAgfSk7XG4gIH1cbiAgc3Vic2NyaWJlKGNhbGxiYWNrRm4pIHtcbiAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHtcbiAgICAgIHRocm93IG5ldyBfUnVudGltZUVycm9yKDk1MyAvKiDJtVJ1bnRpbWVFcnJvckNvZGUuT1VUUFVUX1JFRl9ERVNUUk9ZRUQgKi8sIG5nRGV2TW9kZSAmJiAnVW5leHBlY3RlZCBzdWJzY3JpcHRpb24gdG8gZGVzdHJveWVkIGBPdXRwdXRSZWZgLiAnICsgJ1RoZSBvd25pbmcgZGlyZWN0aXZlL2NvbXBvbmVudCBpcyBkZXN0cm95ZWQuJyk7XG4gICAgfVxuICAgIC8vIFN0b3AgeWllbGRpbmcgbW9yZSB2YWx1ZXMgd2hlbiB0aGUgZGlyZWN0aXZlL2NvbXBvbmVudCBpcyBhbHJlYWR5IGRlc3Ryb3llZC5cbiAgICBjb25zdCBzdWJzY3JpcHRpb24gPSB0aGlzLnNvdXJjZS5waXBlKHRha2VVbnRpbERlc3Ryb3llZCh0aGlzLmRlc3Ryb3lSZWYpKS5zdWJzY3JpYmUoe1xuICAgICAgbmV4dDogdmFsdWUgPT4gY2FsbGJhY2tGbih2YWx1ZSlcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgdW5zdWJzY3JpYmU6ICgpID0+IHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpXG4gICAgfTtcbiAgfVxufVxuLyoqXG4gKiBEZWNsYXJlcyBhbiBBbmd1bGFyIG91dHB1dCB0aGF0IGlzIHVzaW5nIGFuIFJ4SlMgb2JzZXJ2YWJsZSBhcyBhIHNvdXJjZVxuICogZm9yIGV2ZW50cyBkaXNwYXRjaGVkIHRvIHBhcmVudCBzdWJzY3JpYmVycy5cbiAqXG4gKiBUaGUgYmVoYXZpb3IgZm9yIGFuIG9ic2VydmFibGUgYXMgc291cmNlIGlzIGRlZmluZWQgYXMgZm9sbG93ZWQ6XG4gKiAgICAxLiBOZXcgdmFsdWVzIGFyZSBmb3J3YXJkZWQgdG8gdGhlIEFuZ3VsYXIgb3V0cHV0IChuZXh0IG5vdGlmaWNhdGlvbnMpLlxuICogICAgMi4gRXJyb3JzIG5vdGlmaWNhdGlvbnMgYXJlIG5vdCBoYW5kbGVkIGJ5IEFuZ3VsYXIuIFlvdSBuZWVkIHRvIGhhbmRsZSB0aGVzZSBtYW51YWxseS5cbiAqICAgICAgIEZvciBleGFtcGxlIGJ5IHVzaW5nIGBjYXRjaEVycm9yYC5cbiAqICAgIDMuIENvbXBsZXRpb24gbm90aWZpY2F0aW9ucyBzdG9wIHRoZSBvdXRwdXQgZnJvbSBlbWl0dGluZyBuZXcgdmFsdWVzLlxuICpcbiAqIEB1c2FnZU5vdGVzXG4gKiBJbml0aWFsaXplIGFuIG91dHB1dCBpbiB5b3VyIGRpcmVjdGl2ZSBieSBkZWNsYXJpbmcgYVxuICogY2xhc3MgZmllbGQgYW5kIGluaXRpYWxpemluZyBpdCB3aXRoIHRoZSBgb3V0cHV0RnJvbU9ic2VydmFibGUoKWAgZnVuY3Rpb24uXG4gKlxuICogYGBgdHNcbiAqIEBEaXJlY3RpdmUoey4ufSlcbiAqIGV4cG9ydCBjbGFzcyBNeURpciB7XG4gKiAgIG5hbWVDaGFuZ2UkID0gPHNvbWUtb2JzZXJ2YWJsZT47XG4gKiAgIG5hbWVDaGFuZ2UgPSBvdXRwdXRGcm9tT2JzZXJ2YWJsZSh0aGlzLm5hbWVDaGFuZ2UkKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZnVuY3Rpb24gb3V0cHV0RnJvbU9ic2VydmFibGUob2JzZXJ2YWJsZSwgb3B0cykge1xuICBuZ0Rldk1vZGUgJiYgYXNzZXJ0SW5JbmplY3Rpb25Db250ZXh0KG91dHB1dEZyb21PYnNlcnZhYmxlKTtcbiAgcmV0dXJuIG5ldyBPdXRwdXRGcm9tT2JzZXJ2YWJsZVJlZihvYnNlcnZhYmxlKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhbiBBbmd1bGFyIG91dHB1dCBkZWNsYXJlZCB2aWEgYG91dHB1dCgpYCBvciBgb3V0cHV0RnJvbU9ic2VydmFibGUoKWBcbiAqIHRvIGFuIG9ic2VydmFibGUuXG4gKlxuICogWW91IGNhbiBzdWJzY3JpYmUgdG8gdGhlIG91dHB1dCB2aWEgYE9ic2VydmFibGUuc3Vic2NyaWJlYCB0aGVuLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZnVuY3Rpb24gb3V0cHV0VG9PYnNlcnZhYmxlKHJlZikge1xuICBjb25zdCBkZXN0cm95UmVmID0gX2dldE91dHB1dERlc3Ryb3lSZWYocmVmKTtcbiAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKG9ic2VydmVyID0+IHtcbiAgICAvLyBDb21wbGV0ZSB0aGUgb2JzZXJ2YWJsZSB1cG9uIGRpcmVjdGl2ZS9jb21wb25lbnQgZGVzdHJveS5cbiAgICAvLyBOb3RlOiBNYXkgYmUgYHVuZGVmaW5lZGAgaWYgYW4gYEV2ZW50RW1pdHRlcmAgaXMgZGVjbGFyZWQgb3V0c2lkZVxuICAgIC8vIG9mIGFuIGluamVjdGlvbiBjb250ZXh0LlxuICAgIGRlc3Ryb3lSZWY/Lm9uRGVzdHJveSgoKSA9PiBvYnNlcnZlci5jb21wbGV0ZSgpKTtcbiAgICBjb25zdCBzdWJzY3JpcHRpb24gPSByZWYuc3Vic2NyaWJlKHYgPT4gb2JzZXJ2ZXIubmV4dCh2KSk7XG4gICAgcmV0dXJuICgpID0+IHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBFeHBvc2VzIHRoZSB2YWx1ZSBvZiBhbiBBbmd1bGFyIGBTaWduYWxgIGFzIGFuIFJ4SlMgYE9ic2VydmFibGVgLlxuICpcbiAqIFRoZSBzaWduYWwncyB2YWx1ZSB3aWxsIGJlIHByb3BhZ2F0ZWQgaW50byB0aGUgYE9ic2VydmFibGVgJ3Mgc3Vic2NyaWJlcnMgdXNpbmcgYW4gYGVmZmVjdGAuXG4gKlxuICogYHRvT2JzZXJ2YWJsZWAgbXVzdCBiZSBjYWxsZWQgaW4gYW4gaW5qZWN0aW9uIGNvbnRleHQgdW5sZXNzIGFuIGluamVjdG9yIGlzIHByb3ZpZGVkIHZpYSBvcHRpb25zLlxuICpcbiAqIEBkZXZlbG9wZXJQcmV2aWV3XG4gKi9cbmZ1bmN0aW9uIHRvT2JzZXJ2YWJsZShzb3VyY2UsIG9wdGlvbnMpIHtcbiAgIW9wdGlvbnM/LmluamVjdG9yICYmIGFzc2VydEluSW5qZWN0aW9uQ29udGV4dCh0b09ic2VydmFibGUpO1xuICBjb25zdCBpbmplY3RvciA9IG9wdGlvbnM/LmluamVjdG9yID8/IGluamVjdChJbmplY3Rvcik7XG4gIGNvbnN0IHN1YmplY3QgPSBuZXcgUmVwbGF5U3ViamVjdCgxKTtcbiAgY29uc3Qgd2F0Y2hlciA9IGVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHZhbHVlO1xuICAgIHRyeSB7XG4gICAgICB2YWx1ZSA9IHNvdXJjZSgpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdW50cmFja2VkKCgpID0+IHN1YmplY3QuZXJyb3IoZXJyKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHVudHJhY2tlZCgoKSA9PiBzdWJqZWN0Lm5leHQodmFsdWUpKTtcbiAgfSwge1xuICAgIGluamVjdG9yLFxuICAgIG1hbnVhbENsZWFudXA6IHRydWVcbiAgfSk7XG4gIGluamVjdG9yLmdldChEZXN0cm95UmVmKS5vbkRlc3Ryb3koKCkgPT4ge1xuICAgIHdhdGNoZXIuZGVzdHJveSgpO1xuICAgIHN1YmplY3QuY29tcGxldGUoKTtcbiAgfSk7XG4gIHJldHVybiBzdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xufVxuZnVuY3Rpb24gdG9PYnNlcnZhYmxlTWljcm90YXNrKHNvdXJjZSwgb3B0aW9ucykge1xuICAhb3B0aW9ucz8uaW5qZWN0b3IgJiYgYXNzZXJ0SW5JbmplY3Rpb25Db250ZXh0KHRvT2JzZXJ2YWJsZSk7XG4gIGNvbnN0IGluamVjdG9yID0gb3B0aW9ucz8uaW5qZWN0b3IgPz8gaW5qZWN0KEluamVjdG9yKTtcbiAgY29uc3Qgc3ViamVjdCA9IG5ldyBSZXBsYXlTdWJqZWN0KDEpO1xuICBjb25zdCB3YXRjaGVyID0gX21pY3JvdGFza0VmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHZhbHVlO1xuICAgIHRyeSB7XG4gICAgICB2YWx1ZSA9IHNvdXJjZSgpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdW50cmFja2VkKCgpID0+IHN1YmplY3QuZXJyb3IoZXJyKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHVudHJhY2tlZCgoKSA9PiBzdWJqZWN0Lm5leHQodmFsdWUpKTtcbiAgfSwge1xuICAgIGluamVjdG9yLFxuICAgIG1hbnVhbENsZWFudXA6IHRydWVcbiAgfSk7XG4gIGluamVjdG9yLmdldChEZXN0cm95UmVmKS5vbkRlc3Ryb3koKCkgPT4ge1xuICAgIHdhdGNoZXIuZGVzdHJveSgpO1xuICAgIHN1YmplY3QuY29tcGxldGUoKTtcbiAgfSk7XG4gIHJldHVybiBzdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xufVxuXG4vKipcbiAqIEdldCB0aGUgY3VycmVudCB2YWx1ZSBvZiBhbiBgT2JzZXJ2YWJsZWAgYXMgYSByZWFjdGl2ZSBgU2lnbmFsYC5cbiAqXG4gKiBgdG9TaWduYWxgIHJldHVybnMgYSBgU2lnbmFsYCB3aGljaCBwcm92aWRlcyBzeW5jaHJvbm91cyByZWFjdGl2ZSBhY2Nlc3MgdG8gdmFsdWVzIHByb2R1Y2VkXG4gKiBieSB0aGUgZ2l2ZW4gYE9ic2VydmFibGVgLCBieSBzdWJzY3JpYmluZyB0byB0aGF0IGBPYnNlcnZhYmxlYC4gVGhlIHJldHVybmVkIGBTaWduYWxgIHdpbGwgYWx3YXlzXG4gKiBoYXZlIHRoZSBtb3N0IHJlY2VudCB2YWx1ZSBlbWl0dGVkIGJ5IHRoZSBzdWJzY3JpcHRpb24sIGFuZCB3aWxsIHRocm93IGFuIGVycm9yIGlmIHRoZVxuICogYE9ic2VydmFibGVgIGVycm9ycy5cbiAqXG4gKiBXaXRoIGByZXF1aXJlU3luY2Agc2V0IHRvIGB0cnVlYCwgYHRvU2lnbmFsYCB3aWxsIGFzc2VydCB0aGF0IHRoZSBgT2JzZXJ2YWJsZWAgcHJvZHVjZXMgYSB2YWx1ZVxuICogaW1tZWRpYXRlbHkgdXBvbiBzdWJzY3JpcHRpb24uIE5vIGBpbml0aWFsVmFsdWVgIGlzIG5lZWRlZCBpbiB0aGlzIGNhc2UsIGFuZCB0aGUgcmV0dXJuZWQgc2lnbmFsXG4gKiBkb2VzIG5vdCBpbmNsdWRlIGFuIGB1bmRlZmluZWRgIHR5cGUuXG4gKlxuICogQnkgZGVmYXVsdCwgdGhlIHN1YnNjcmlwdGlvbiB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgY2xlYW5lZCB1cCB3aGVuIHRoZSBjdXJyZW50IFtpbmplY3Rpb25cbiAqIGNvbnRleHRdKGd1aWRlL2RpL2RlcGVuZGVuY3ktaW5qZWN0aW9uLWNvbnRleHQpIGlzIGRlc3Ryb3llZC4gRm9yIGV4YW1wbGUsIHdoZW4gYHRvU2lnbmFsYCBpc1xuICogY2FsbGVkIGR1cmluZyB0aGUgY29uc3RydWN0aW9uIG9mIGEgY29tcG9uZW50LCB0aGUgc3Vic2NyaXB0aW9uIHdpbGwgYmUgY2xlYW5lZCB1cCB3aGVuIHRoZVxuICogY29tcG9uZW50IGlzIGRlc3Ryb3llZC4gSWYgYW4gaW5qZWN0aW9uIGNvbnRleHQgaXMgbm90IGF2YWlsYWJsZSwgYW4gZXhwbGljaXQgYEluamVjdG9yYCBjYW4gYmVcbiAqIHBhc3NlZCBpbnN0ZWFkLlxuICpcbiAqIElmIHRoZSBzdWJzY3JpcHRpb24gc2hvdWxkIHBlcnNpc3QgdW50aWwgdGhlIGBPYnNlcnZhYmxlYCBpdHNlbGYgY29tcGxldGVzLCB0aGUgYG1hbnVhbENsZWFudXBgXG4gKiBvcHRpb24gY2FuIGJlIHNwZWNpZmllZCBpbnN0ZWFkLCB3aGljaCBkaXNhYmxlcyB0aGUgYXV0b21hdGljIHN1YnNjcmlwdGlvbiB0ZWFyZG93bi4gTm8gaW5qZWN0aW9uXG4gKiBjb250ZXh0IGlzIG5lZWRlZCBpbiB0aGlzIGNvbmZpZ3VyYXRpb24gYXMgd2VsbC5cbiAqXG4gKiBAZGV2ZWxvcGVyUHJldmlld1xuICovXG5mdW5jdGlvbiB0b1NpZ25hbChzb3VyY2UsIG9wdGlvbnMpIHtcbiAgdHlwZW9mIG5nRGV2TW9kZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbmdEZXZNb2RlICYmIGFzc2VydE5vdEluUmVhY3RpdmVDb250ZXh0KHRvU2lnbmFsLCAnSW52b2tpbmcgYHRvU2lnbmFsYCBjYXVzZXMgbmV3IHN1YnNjcmlwdGlvbnMgZXZlcnkgdGltZS4gJyArICdDb25zaWRlciBtb3ZpbmcgYHRvU2lnbmFsYCBvdXRzaWRlIG9mIHRoZSByZWFjdGl2ZSBjb250ZXh0IGFuZCByZWFkIHRoZSBzaWduYWwgdmFsdWUgd2hlcmUgbmVlZGVkLicpO1xuICBjb25zdCByZXF1aXJlc0NsZWFudXAgPSAhb3B0aW9ucz8ubWFudWFsQ2xlYW51cDtcbiAgcmVxdWlyZXNDbGVhbnVwICYmICFvcHRpb25zPy5pbmplY3RvciAmJiBhc3NlcnRJbkluamVjdGlvbkNvbnRleHQodG9TaWduYWwpO1xuICBjb25zdCBjbGVhbnVwUmVmID0gcmVxdWlyZXNDbGVhbnVwID8gb3B0aW9ucz8uaW5qZWN0b3I/LmdldChEZXN0cm95UmVmKSA/PyBpbmplY3QoRGVzdHJveVJlZikgOiBudWxsO1xuICBjb25zdCBlcXVhbCA9IG1ha2VUb1NpZ25hbEVxdWFsKG9wdGlvbnM/LmVxdWFsKTtcbiAgLy8gTm90ZTogVCBpcyB0aGUgT2JzZXJ2YWJsZSB2YWx1ZSB0eXBlLCBhbmQgVSBpcyB0aGUgaW5pdGlhbCB2YWx1ZSB0eXBlLiBUaGV5IGRvbid0IGhhdmUgdG8gYmVcbiAgLy8gdGhlIHNhbWUgLSB0aGUgcmV0dXJuZWQgc2lnbmFsIGdpdmVzIHZhbHVlcyBvZiB0eXBlIGBUYC5cbiAgbGV0IHN0YXRlO1xuICBpZiAob3B0aW9ucz8ucmVxdWlyZVN5bmMpIHtcbiAgICAvLyBJbml0aWFsbHkgdGhlIHNpZ25hbCBpcyBpbiBhIGBOb1ZhbHVlYCBzdGF0ZS5cbiAgICBzdGF0ZSA9IHNpZ25hbCh7XG4gICAgICBraW5kOiAwIC8qIFN0YXRlS2luZC5Ob1ZhbHVlICovXG4gICAgfSwge1xuICAgICAgZXF1YWxcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBJZiBhbiBpbml0aWFsIHZhbHVlIHdhcyBwYXNzZWQsIHVzZSBpdC4gT3RoZXJ3aXNlLCB1c2UgYHVuZGVmaW5lZGAgYXMgdGhlIGluaXRpYWwgdmFsdWUuXG4gICAgc3RhdGUgPSBzaWduYWwoe1xuICAgICAga2luZDogMSAvKiBTdGF0ZUtpbmQuVmFsdWUgKi8sXG4gICAgICB2YWx1ZTogb3B0aW9ucz8uaW5pdGlhbFZhbHVlXG4gICAgfSwge1xuICAgICAgZXF1YWxcbiAgICB9KTtcbiAgfVxuICBsZXQgZGVzdHJveVVucmVnaXN0ZXJGbjtcbiAgLy8gTm90ZTogVGhpcyBjb2RlIGNhbm5vdCBydW4gaW5zaWRlIGEgcmVhY3RpdmUgY29udGV4dCAoc2VlIGFzc2VydGlvbiBhYm92ZSkuIElmIHdlJ2Qgc3VwcG9ydFxuICAvLyB0aGlzLCB3ZSB3b3VsZCBzdWJzY3JpYmUgdG8gdGhlIG9ic2VydmFibGUgb3V0c2lkZSBvZiB0aGUgY3VycmVudCByZWFjdGl2ZSBjb250ZXh0LCBhdm9pZGluZ1xuICAvLyB0aGF0IHNpZGUtZWZmZWN0IHNpZ25hbCByZWFkcy93cml0ZXMgYXJlIGF0dHJpYnV0ZSB0byB0aGUgY3VycmVudCBjb25zdW1lci4gVGhlIGN1cnJlbnRcbiAgLy8gY29uc3VtZXIgb25seSBuZWVkcyB0byBiZSBub3RpZmllZCB3aGVuIHRoZSBgc3RhdGVgIHNpZ25hbCBjaGFuZ2VzIHRocm91Z2ggdGhlIG9ic2VydmFibGVcbiAgLy8gc3Vic2NyaXB0aW9uLiBBZGRpdGlvbmFsIGNvbnRleHQgKHJlbGF0ZWQgdG8gYXN5bmMgcGlwZSk6XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvcHVsbC81MDUyMi5cbiAgY29uc3Qgc3ViID0gc291cmNlLnN1YnNjcmliZSh7XG4gICAgbmV4dDogdmFsdWUgPT4gc3RhdGUuc2V0KHtcbiAgICAgIGtpbmQ6IDEgLyogU3RhdGVLaW5kLlZhbHVlICovLFxuICAgICAgdmFsdWVcbiAgICB9KSxcbiAgICBlcnJvcjogZXJyb3IgPT4ge1xuICAgICAgaWYgKG9wdGlvbnM/LnJlamVjdEVycm9ycykge1xuICAgICAgICAvLyBLaWNrIHRoZSBlcnJvciBiYWNrIHRvIFJ4SlMuIEl0IHdpbGwgYmUgY2F1Z2h0IGFuZCByZXRocm93biBpbiBhIG1hY3JvdGFzaywgd2hpY2ggY2F1c2VzXG4gICAgICAgIC8vIHRoZSBlcnJvciB0byBlbmQgdXAgYXMgYW4gdW5jYXVnaHQgZXhjZXB0aW9uLlxuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cbiAgICAgIHN0YXRlLnNldCh7XG4gICAgICAgIGtpbmQ6IDIgLyogU3RhdGVLaW5kLkVycm9yICovLFxuICAgICAgICBlcnJvclxuICAgICAgfSk7XG4gICAgfSxcbiAgICBjb21wbGV0ZTogKCkgPT4ge1xuICAgICAgZGVzdHJveVVucmVnaXN0ZXJGbj8uKCk7XG4gICAgfVxuICAgIC8vIENvbXBsZXRpb24gb2YgdGhlIE9ic2VydmFibGUgaXMgbWVhbmluZ2xlc3MgdG8gdGhlIHNpZ25hbC4gU2lnbmFscyBkb24ndCBoYXZlIGEgY29uY2VwdCBvZlxuICAgIC8vIFwiY29tcGxldGVcIi5cbiAgfSk7XG4gIGlmIChvcHRpb25zPy5yZXF1aXJlU3luYyAmJiBzdGF0ZSgpLmtpbmQgPT09IDAgLyogU3RhdGVLaW5kLk5vVmFsdWUgKi8pIHtcbiAgICB0aHJvdyBuZXcgX1J1bnRpbWVFcnJvcig2MDEgLyogybVSdW50aW1lRXJyb3JDb2RlLlJFUVVJUkVfU1lOQ19XSVRIT1VUX1NZTkNfRU1JVCAqLywgKHR5cGVvZiBuZ0Rldk1vZGUgPT09ICd1bmRlZmluZWQnIHx8IG5nRGV2TW9kZSkgJiYgJ2B0b1NpZ25hbCgpYCBjYWxsZWQgd2l0aCBgcmVxdWlyZVN5bmNgIGJ1dCBgT2JzZXJ2YWJsZWAgZGlkIG5vdCBlbWl0IHN5bmNocm9ub3VzbHkuJyk7XG4gIH1cbiAgLy8gVW5zdWJzY3JpYmUgd2hlbiB0aGUgY3VycmVudCBjb250ZXh0IGlzIGRlc3Ryb3llZCwgaWYgcmVxdWVzdGVkLlxuICBkZXN0cm95VW5yZWdpc3RlckZuID0gY2xlYW51cFJlZj8ub25EZXN0cm95KHN1Yi51bnN1YnNjcmliZS5iaW5kKHN1YikpO1xuICAvLyBUaGUgYWN0dWFsIHJldHVybmVkIHNpZ25hbCBpcyBhIGBjb21wdXRlZGAgb2YgdGhlIGBTdGF0ZWAgc2lnbmFsLCB3aGljaCBtYXBzIHRoZSB2YXJpb3VzIHN0YXRlc1xuICAvLyB0byBlaXRoZXIgdmFsdWVzIG9yIGVycm9ycy5cbiAgcmV0dXJuIGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50ID0gc3RhdGUoKTtcbiAgICBzd2l0Y2ggKGN1cnJlbnQua2luZCkge1xuICAgICAgY2FzZSAxIC8qIFN0YXRlS2luZC5WYWx1ZSAqLzpcbiAgICAgICAgcmV0dXJuIGN1cnJlbnQudmFsdWU7XG4gICAgICBjYXNlIDIgLyogU3RhdGVLaW5kLkVycm9yICovOlxuICAgICAgICB0aHJvdyBjdXJyZW50LmVycm9yO1xuICAgICAgY2FzZSAwIC8qIFN0YXRlS2luZC5Ob1ZhbHVlICovOlxuICAgICAgICAvLyBUaGlzIHNob3VsZG4ndCByZWFsbHkgaGFwcGVuIGJlY2F1c2UgdGhlIGVycm9yIGlzIHRocm93biBvbiBjcmVhdGlvbi5cbiAgICAgICAgdGhyb3cgbmV3IF9SdW50aW1lRXJyb3IoNjAxIC8qIMm1UnVudGltZUVycm9yQ29kZS5SRVFVSVJFX1NZTkNfV0lUSE9VVF9TWU5DX0VNSVQgKi8sICh0eXBlb2YgbmdEZXZNb2RlID09PSAndW5kZWZpbmVkJyB8fCBuZ0Rldk1vZGUpICYmICdgdG9TaWduYWwoKWAgY2FsbGVkIHdpdGggYHJlcXVpcmVTeW5jYCBidXQgYE9ic2VydmFibGVgIGRpZCBub3QgZW1pdCBzeW5jaHJvbm91c2x5LicpO1xuICAgIH1cbiAgfSwge1xuICAgIGVxdWFsOiBvcHRpb25zPy5lcXVhbFxuICB9KTtcbn1cbmZ1bmN0aW9uIG1ha2VUb1NpZ25hbEVxdWFsKHVzZXJFcXVhbGl0eSA9IE9iamVjdC5pcykge1xuICByZXR1cm4gKGEsIGIpID0+IGEua2luZCA9PT0gMSAvKiBTdGF0ZUtpbmQuVmFsdWUgKi8gJiYgYi5raW5kID09PSAxIC8qIFN0YXRlS2luZC5WYWx1ZSAqLyAmJiB1c2VyRXF1YWxpdHkoYS52YWx1ZSwgYi52YWx1ZSk7XG59XG5cbi8qKlxuICogT3BlcmF0b3Igd2hpY2ggbWFrZXMgdGhlIGFwcGxpY2F0aW9uIHVuc3RhYmxlIHVudGlsIHRoZSBvYnNlcnZhYmxlIGVtaXRzLCBjb21wbGV0ZXMsIGVycm9ycywgb3IgaXMgdW5zdWJzY3JpYmVkLlxuICpcbiAqIFVzZSB0aGlzIG9wZXJhdG9yIGluIG9ic2VydmFibGVzIHdob3NlIHN1YnNjcmlwdGlvbnMgYXJlIGltcG9ydGFudCBmb3IgcmVuZGVyaW5nIGFuZCBzaG91bGQgYmUgaW5jbHVkZWQgaW4gU1NSIHNlcmlhbGl6YXRpb24uXG4gKlxuICogQHBhcmFtIGluamVjdG9yIFRoZSBgSW5qZWN0b3JgIHRvIHVzZSBkdXJpbmcgY3JlYXRpb24uIElmIHRoaXMgaXMgbm90IHByb3ZpZGVkLCB0aGUgY3VycmVudCBpbmplY3Rpb24gY29udGV4dCB3aWxsIGJlIHVzZWQgaW5zdGVhZCAodmlhIGBpbmplY3RgKS5cbiAqXG4gKiBAZXhwZXJpbWVudGFsXG4gKi9cbmZ1bmN0aW9uIHBlbmRpbmdVbnRpbEV2ZW50KGluamVjdG9yKSB7XG4gIGlmIChpbmplY3RvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYXNzZXJ0SW5JbmplY3Rpb25Db250ZXh0KHBlbmRpbmdVbnRpbEV2ZW50KTtcbiAgICBpbmplY3RvciA9IGluamVjdChJbmplY3Rvcik7XG4gIH1cbiAgY29uc3QgdGFza1NlcnZpY2UgPSBpbmplY3Rvci5nZXQoUGVuZGluZ1Rhc2tzKTtcbiAgcmV0dXJuIHNvdXJjZU9ic2VydmFibGUgPT4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShvcmlnaW5hbFN1YnNjcmliZXIgPT4ge1xuICAgICAgLy8gY3JlYXRlIGEgbmV3IHRhc2sgb24gc3Vic2NyaXB0aW9uXG4gICAgICBjb25zdCByZW1vdmVUYXNrID0gdGFza1NlcnZpY2UuYWRkKCk7XG4gICAgICBsZXQgY2xlYW5lZFVwID0gZmFsc2U7XG4gICAgICBmdW5jdGlvbiBjbGVhbnVwVGFzaygpIHtcbiAgICAgICAgaWYgKGNsZWFuZWRVcCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZW1vdmVUYXNrKCk7XG4gICAgICAgIGNsZWFuZWRVcCA9IHRydWU7XG4gICAgICB9XG4gICAgICBjb25zdCBpbm5lclN1YnNjcmlwdGlvbiA9IHNvdXJjZU9ic2VydmFibGUuc3Vic2NyaWJlKHtcbiAgICAgICAgbmV4dDogdiA9PiB7XG4gICAgICAgICAgb3JpZ2luYWxTdWJzY3JpYmVyLm5leHQodik7XG4gICAgICAgICAgY2xlYW51cFRhc2soKTtcbiAgICAgICAgfSxcbiAgICAgICAgY29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICBvcmlnaW5hbFN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICBjbGVhbnVwVGFzaygpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZSA9PiB7XG4gICAgICAgICAgb3JpZ2luYWxTdWJzY3JpYmVyLmVycm9yKGUpO1xuICAgICAgICAgIGNsZWFudXBUYXNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaW5uZXJTdWJzY3JpcHRpb24uYWRkKCgpID0+IHtcbiAgICAgICAgb3JpZ2luYWxTdWJzY3JpYmVyLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIGNsZWFudXBUYXNrKCk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBpbm5lclN1YnNjcmlwdGlvbjtcbiAgICB9KTtcbiAgfTtcbn1cbmZ1bmN0aW9uIHJ4UmVzb3VyY2Uob3B0cykge1xuICBvcHRzPy5pbmplY3RvciB8fCBhc3NlcnRJbkluamVjdGlvbkNvbnRleHQocnhSZXNvdXJjZSk7XG4gIHJldHVybiByZXNvdXJjZSh7XG4gICAgLi4ub3B0cyxcbiAgICBsb2FkZXI6IHVuZGVmaW5lZCxcbiAgICBzdHJlYW06IHBhcmFtcyA9PiB7XG4gICAgICBsZXQgc3ViO1xuICAgICAgLy8gVHJhY2sgdGhlIGFib3J0IGxpc3RlbmVyIHNvIGl0IGNhbiBiZSByZW1vdmVkIGlmIHRoZSBPYnNlcnZhYmxlIGNvbXBsZXRlcyAoYXMgYSBtZW1vcnlcbiAgICAgIC8vIG9wdGltaXphdGlvbikuXG4gICAgICBjb25zdCBvbkFib3J0ID0gKCkgPT4gc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICBwYXJhbXMuYWJvcnRTaWduYWwuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBvbkFib3J0KTtcbiAgICAgIC8vIFN0YXJ0IG9mZiBzdHJlYW0gYXMgdW5kZWZpbmVkLlxuICAgICAgY29uc3Qgc3RyZWFtID0gc2lnbmFsKHtcbiAgICAgICAgdmFsdWU6IHVuZGVmaW5lZFxuICAgICAgfSk7XG4gICAgICBsZXQgcmVzb2x2ZTtcbiAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZShyID0+IHJlc29sdmUgPSByKTtcbiAgICAgIGZ1bmN0aW9uIHNlbmQodmFsdWUpIHtcbiAgICAgICAgc3RyZWFtLnNldCh2YWx1ZSk7XG4gICAgICAgIHJlc29sdmU/LihzdHJlYW0pO1xuICAgICAgICByZXNvbHZlID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgc3ViID0gb3B0cy5sb2FkZXIocGFyYW1zKS5zdWJzY3JpYmUoe1xuICAgICAgICBuZXh0OiB2YWx1ZSA9PiBzZW5kKHtcbiAgICAgICAgICB2YWx1ZVxuICAgICAgICB9KSxcbiAgICAgICAgZXJyb3I6IGVycm9yID0+IHtcbiAgICAgICAgICBzZW5kKHtcbiAgICAgICAgICAgIGVycm9yXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcGFyYW1zLmFib3J0U2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Fib3J0Jywgb25BYm9ydCk7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgaWYgKHJlc29sdmUpIHtcbiAgICAgICAgICAgIHNlbmQoe1xuICAgICAgICAgICAgICBlcnJvcjogbmV3IEVycm9yKCdSZXNvdXJjZSBjb21wbGV0ZWQgYmVmb3JlIHByb2R1Y2luZyBhIHZhbHVlJylcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwYXJhbXMuYWJvcnRTaWduYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBvbkFib3J0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gIH0pO1xufVxuZXhwb3J0IHsgb3V0cHV0RnJvbU9ic2VydmFibGUsIG91dHB1dFRvT2JzZXJ2YWJsZSwgcGVuZGluZ1VudGlsRXZlbnQsIHJ4UmVzb3VyY2UsIHRha2VVbnRpbERlc3Ryb3llZCwgdG9PYnNlcnZhYmxlLCB0b1NpZ25hbCwgdG9PYnNlcnZhYmxlTWljcm90YXNrIGFzIMm1dG9PYnNlcnZhYmxlTWljcm90YXNrIH07XG4iLCJpbXBvcnQgKiBhcyBpMCBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEluamVjdGlvblRva2VuLCBpbmplY3QsIE5nWm9uZSwgybVpc1Byb21pc2UgYXMgX2lzUHJvbWlzZSwgSW5qZWN0YWJsZSwgaW5wdXQsIFBMQVRGT1JNX0lELCBEaXJlY3RpdmUsIE91dHB1dCwgRWxlbWVudFJlZiwgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVmlld0NoaWxkLCBtYWtlU3RhdGVLZXkgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb20sIG9mLCBPYnNlcnZhYmxlLCBTdWJqZWN0LCBCZWhhdmlvclN1YmplY3QsIGRlZmVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRhcCwgc2hhcmVSZXBsYXksIG1lcmdlTWFwLCBmaWx0ZXIsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyLCBOZ1N0eWxlLCBOZ0NsYXNzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IHRha2VVbnRpbERlc3Ryb3llZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvcnhqcy1pbnRlcm9wJztcbmNvbnN0IF9jMCA9IFtcImNvbnRhaW5lclwiXTtcbmNvbnN0IExPVFRJRV9PUFRJT05TID0gbmV3IEluamVjdGlvblRva2VuKCdMb3R0aWVPcHRpb25zJyk7XG5mdW5jdGlvbiBjb252ZXJ0UGxheWVyT3JMb2FkZXJUb09ic2VydmFibGUoKSB7XG4gIGNvbnN0IG5nWm9uZSA9IGluamVjdChOZ1pvbmUpO1xuICBjb25zdCB7XG4gICAgcGxheWVyLFxuICAgIHVzZVdlYldvcmtlclxuICB9ID0gaW5qZWN0KExPVFRJRV9PUFRJT05TKTtcbiAgY29uc3QgcGxheWVyT3JMb2FkZXIgPSBuZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gcGxheWVyKCkpO1xuICAvLyBXZSBuZWVkIHRvIHVzZSBgaXNQcm9taXNlYCBpbnN0ZWFkIG9mIGNoZWNraW5nIHdoZXRoZXJcbiAgLy8gYHJlc3VsdCBpbnN0YW5jZW9mIFByb21pc2VgLiBJbiB6b25lLmpzIHBhdGNoZWQgZW52aXJvbm1lbnRzLCBgZ2xvYmFsLlByb21pc2VgXG4gIC8vIGlzIHRoZSBgWm9uZUF3YXJlUHJvbWlzZWAuIFNvbWUgQVBJcywgd2hpY2ggYXJlIGxpa2VseSBub3QgcGF0Y2hlZCBieSB6b25lLmpzXG4gIC8vIGZvciBjZXJ0YWluIHJlYXNvbnMsIG1pZ2h0IG5vdCB3b3JrIHdpdGggYGluc3RhbmNlb2ZgLiBGb3IgaW5zdGFuY2UsIHRoZSBkeW5hbWljXG4gIC8vIGltcG9ydCBgKCkgPT4gaW1wb3J0KCcuL2NodW5rLmpzJylgIHJldHVybnMgYSBuYXRpdmUgcHJvbWlzZSAobm90IGEgYFpvbmVBd2FyZVByb21pc2VgKSxcbiAgLy8gY2F1c2luZyB0aGlzIGNoZWNrIHRvIGJlIGZhbHN5LlxuICBjb25zdCBwbGF5ZXIkID0gX2lzUHJvbWlzZShwbGF5ZXJPckxvYWRlcikgPyBmcm9tKHBsYXllck9yTG9hZGVyKS5waXBlKG1hcChtb2R1bGUgPT4gbW9kdWxlLmRlZmF1bHQgfHwgbW9kdWxlKSkgOiBvZihwbGF5ZXJPckxvYWRlcik7XG4gIHJldHVybiBwbGF5ZXIkLnBpcGUoXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gIHRhcChwbGF5ZXIgPT4gcGxheWVyLnVzZVdlYldvcmtlcj8uKHVzZVdlYldvcmtlcikpLCBzaGFyZVJlcGxheSh7XG4gICAgYnVmZmVyU2l6ZTogMSxcbiAgICByZWZDb3VudDogdHJ1ZVxuICB9KSk7XG59XG5jbGFzcyBBbmltYXRpb25Mb2FkZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnBsYXllciQgPSBjb252ZXJ0UGxheWVyT3JMb2FkZXJUb09ic2VydmFibGUoKS5waXBlKG1lcmdlTWFwKHBsYXllciA9PiByYWYkKHRoaXMubmdab25lKS5waXBlKG1hcCgoKSA9PiBwbGF5ZXIpKSkpO1xuICAgIHRoaXMubmdab25lID0gaW5qZWN0KE5nWm9uZSk7XG4gIH1cbiAgbG9hZEFuaW1hdGlvbihvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMucGxheWVyJC5waXBlKG1hcChwbGF5ZXIgPT4gdGhpcy5jcmVhdGVBbmltYXRpb25JdGVtKHBsYXllciwgb3B0aW9ucykpKTtcbiAgfVxuICByZXNvbHZlT3B0aW9ucyhvcHRpb25zLCBjb250YWluZXIpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjb250YWluZXIsXG4gICAgICByZW5kZXJlcjogJ3N2ZycsXG4gICAgICBsb29wOiB0cnVlLFxuICAgICAgYXV0b3BsYXk6IHRydWVcbiAgICB9LCBvcHRpb25zKTtcbiAgfVxuICBjcmVhdGVBbmltYXRpb25JdGVtKHBsYXllciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBwbGF5ZXIubG9hZEFuaW1hdGlvbihvcHRpb25zKSk7XG4gIH1cbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyB7XG4gICAgdGhpcy7JtWZhYyA9IGZ1bmN0aW9uIEFuaW1hdGlvbkxvYWRlcl9GYWN0b3J5KF9fbmdGYWN0b3J5VHlwZV9fKSB7XG4gICAgICByZXR1cm4gbmV3IChfX25nRmFjdG9yeVR5cGVfXyB8fCBBbmltYXRpb25Mb2FkZXIpKCk7XG4gICAgfTtcbiAgfVxuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIHtcbiAgICB0aGlzLsm1cHJvdiA9IC8qIEBfX1BVUkVfXyAqL2kwLsm1ybVkZWZpbmVJbmplY3RhYmxlKHtcbiAgICAgIHRva2VuOiBBbmltYXRpb25Mb2FkZXIsXG4gICAgICBmYWN0b3J5OiBBbmltYXRpb25Mb2FkZXIuybVmYWMsXG4gICAgICBwcm92aWRlZEluOiAncm9vdCdcbiAgICB9KTtcbiAgfVxufVxuKCgpID0+IHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoQW5pbWF0aW9uTG9hZGVyLCBbe1xuICAgIHR5cGU6IEluamVjdGFibGUsXG4gICAgYXJnczogW3tcbiAgICAgIHByb3ZpZGVkSW46ICdyb290J1xuICAgIH1dXG4gIH1dLCBudWxsLCBudWxsKTtcbn0pKCk7XG5mdW5jdGlvbiByYWYkKG5nWm9uZSkge1xuICByZXR1cm4gbmV3IE9ic2VydmFibGUoc3Vic2NyaWJlciA9PiB7XG4gICAgY29uc3QgcmVxdWVzdElkID0gbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBzdWJzY3JpYmVyLm5leHQoKTtcbiAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICB9KSk7XG4gICAgcmV0dXJuICgpID0+IGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RJZCk7XG4gIH0pO1xufVxuY2xhc3MgQ2FjaGVhYmxlQW5pbWF0aW9uTG9hZGVyIGV4dGVuZHMgQW5pbWF0aW9uTG9hZGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICB0aGlzLmNhY2hlID0gbmV3IE1hcCgpO1xuICB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuY2FjaGUuY2xlYXIoKTtcbiAgfVxuICBsb2FkQW5pbWF0aW9uKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5wbGF5ZXIkLnBpcGUobWFwKHBsYXllciA9PiB7XG4gICAgICBjb25zdCBhbmltYXRpb25JdGVtID0gdGhpcy5jcmVhdGVBbmltYXRpb25JdGVtKHBsYXllciwgdGhpcy50cmFuc2Zvcm1PcHRpb25zKG9wdGlvbnMpKTtcbiAgICAgIHRoaXMuYXdhaXRDb25maWdBbmRDYWNoZShvcHRpb25zLCBhbmltYXRpb25JdGVtKTtcbiAgICAgIHJldHVybiBhbmltYXRpb25JdGVtO1xuICAgIH0pKTtcbiAgfVxuICBhd2FpdENvbmZpZ0FuZENhY2hlKG9wdGlvbnMsIGFuaW1hdGlvbkl0ZW0pIHtcbiAgICBpZiAodGhpcy5pc0FuaW1hdGlvbkNvbmZpZ1dpdGhQYXRoKG9wdGlvbnMpKSB7XG4gICAgICAvLyBEb24ndCB3YWl0IGZvciB0aGUgYGNvbmZpZ19yZWFkeWAgZXZlbnQgaWYgaXQgaGFzIGJlZW4gY2FjaGVkIHByZXZpb3VzbHkuXG4gICAgICBpZiAodGhpcy5jYWNoZS5oYXMob3B0aW9ucy5wYXRoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhbmltYXRpb25JdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NvbmZpZ19yZWFkeScsICgpID0+IHtcbiAgICAgICAgLy8gU2VlIHRoZSBjb21tZW50cyBiZWxvdyBvbiB3aHkgd2UncmUgc3RvcmluZyB0aGUgYW5pbWF0aW9uIGRhdGEgYXMgYSBzdHJpbmcuXG4gICAgICAgIHRoaXMuY2FjaGUuc2V0KG9wdGlvbnMucGF0aCwgSlNPTi5zdHJpbmdpZnkoYW5pbWF0aW9uSXRlbVsnYW5pbWF0aW9uRGF0YSddKSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgdHJhbnNmb3JtT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgaWYgKHRoaXMuaXNBbmltYXRpb25Db25maWdXaXRoUGF0aChvcHRpb25zKSAmJiB0aGlzLmNhY2hlLmhhcyhvcHRpb25zLnBhdGgpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICAgIC8vIENhcmV0YWtlciBub3RlOiBgbG90dGllLXdlYmAgY2Fubm90IHJlLXVzZSB0aGUgYGFuaW1hdGlvbkRhdGFgIG9iamVjdCBiZXR3ZWVuIGFuaW1hdGlvbnMsIGFuZCB3ZVxuICAgICAgICAvLyBoYXZlIHRvIHJldHJpZXZlIGEgbmV3IG9iamVjdCBlYWNoIHRpbWUgYW4gYW5pbWF0aW9uIGlzIGNyZWF0ZWQuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9haXJibmIvbG90dGllLXdlYiNodG1sXG4gICAgICAgIC8vIFNlZSBjb21tZW50cyBmb3IgdGhlIGBhbmltYXRpb25EYXRhYCBwcm9wZXJ0eS5cbiAgICAgICAgYW5pbWF0aW9uRGF0YTogSlNPTi5wYXJzZSh0aGlzLmNhY2hlLmdldChvcHRpb25zLnBhdGgpKVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfVxuICB9XG4gIGlzQW5pbWF0aW9uQ29uZmlnV2l0aFBhdGgob3B0aW9ucykge1xuICAgIHJldHVybiB0eXBlb2Ygb3B0aW9ucy5wYXRoID09PSAnc3RyaW5nJztcbiAgfVxuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIHtcbiAgICB0aGlzLsm1ZmFjID0gLyogQF9fUFVSRV9fICovKCgpID0+IHtcbiAgICAgIGxldCDJtUNhY2hlYWJsZUFuaW1hdGlvbkxvYWRlcl9CYXNlRmFjdG9yeTtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBDYWNoZWFibGVBbmltYXRpb25Mb2FkZXJfRmFjdG9yeShfX25nRmFjdG9yeVR5cGVfXykge1xuICAgICAgICByZXR1cm4gKMm1Q2FjaGVhYmxlQW5pbWF0aW9uTG9hZGVyX0Jhc2VGYWN0b3J5IHx8ICjJtUNhY2hlYWJsZUFuaW1hdGlvbkxvYWRlcl9CYXNlRmFjdG9yeSA9IGkwLsm1ybVnZXRJbmhlcml0ZWRGYWN0b3J5KENhY2hlYWJsZUFuaW1hdGlvbkxvYWRlcikpKShfX25nRmFjdG9yeVR5cGVfXyB8fCBDYWNoZWFibGVBbmltYXRpb25Mb2FkZXIpO1xuICAgICAgfTtcbiAgICB9KSgpO1xuICB9XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMge1xuICAgIHRoaXMuybVwcm92ID0gLyogQF9fUFVSRV9fICovaTAuybXJtWRlZmluZUluamVjdGFibGUoe1xuICAgICAgdG9rZW46IENhY2hlYWJsZUFuaW1hdGlvbkxvYWRlcixcbiAgICAgIGZhY3Rvcnk6IENhY2hlYWJsZUFuaW1hdGlvbkxvYWRlci7JtWZhYyxcbiAgICAgIHByb3ZpZGVkSW46ICdyb290J1xuICAgIH0pO1xuICB9XG59XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShDYWNoZWFibGVBbmltYXRpb25Mb2FkZXIsIFt7XG4gICAgdHlwZTogSW5qZWN0YWJsZSxcbiAgICBhcmdzOiBbe1xuICAgICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG4gICAgfV1cbiAgfV0sIG51bGwsIG51bGwpO1xufSkoKTtcbmZ1bmN0aW9uIHByb3ZpZGVDYWNoZWFibGVBbmltYXRpb25Mb2FkZXIoKSB7XG4gIHJldHVybiBbe1xuICAgIHByb3ZpZGU6IEFuaW1hdGlvbkxvYWRlcixcbiAgICB1c2VFeGlzdGluZzogQ2FjaGVhYmxlQW5pbWF0aW9uTG9hZGVyXG4gIH1dO1xufVxuZnVuY3Rpb24gcHJvdmlkZUxvdHRpZU9wdGlvbnMob3B0aW9ucykge1xuICByZXR1cm4gW3tcbiAgICBwcm92aWRlOiBMT1RUSUVfT1BUSU9OUyxcbiAgICB1c2VWYWx1ZTogb3B0aW9uc1xuICB9XTtcbn1cbmNsYXNzIEJhc2VEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBpbnB1dChudWxsKTtcbiAgICB0aGlzLmNvbnRhaW5lckNsYXNzID0gaW5wdXQobnVsbCk7XG4gICAgdGhpcy5zdHlsZXMgPSBpbnB1dChudWxsKTtcbiAgICAvKipcbiAgICAgKiBgYW5pbWF0aW9uQ3JlYXRlZGAgaXMgZGlzcGF0Y2hlZCBhZnRlciBjYWxsaW5nIGBsb2FkQW5pbWF0aW9uYC5cbiAgICAgKi9cbiAgICB0aGlzLmFuaW1hdGlvbkNyZWF0ZWQgPSB0aGlzLmdldEFuaW1hdGlvbkl0ZW0oKTtcbiAgICAvKipcbiAgICAgKiBgY29tcGxldGVgIGlzIGRpc3BhdGNoZWQgYWZ0ZXIgY29tcGxldGluZyB0aGUgbGFzdCBmcmFtZS5cbiAgICAgKi9cbiAgICB0aGlzLmNvbXBsZXRlID0gdGhpcy5hd2FpdEFuaW1hdGlvbkl0ZW1BbmRTdGFydExpc3RlbmluZygnY29tcGxldGUnKTtcbiAgICAvKipcbiAgICAgKiBgbG9vcENvbXBsZXRlYCBpcyBkaXNwYXRjaGVkIGFmdGVyIGNvbXBsZXRpbmcgdGhlIGZyYW1lIGxvb3AuXG4gICAgICovXG4gICAgdGhpcy5sb29wQ29tcGxldGUgPSB0aGlzLmF3YWl0QW5pbWF0aW9uSXRlbUFuZFN0YXJ0TGlzdGVuaW5nKCdsb29wQ29tcGxldGUnKTtcbiAgICAvKipcbiAgICAgKiBgZW50ZXJGcmFtZWAgaXMgZGlzcGF0Y2hlZCBhZnRlciBlbnRlcmluZyB0aGUgbmV3IGZyYW1lLlxuICAgICAqL1xuICAgIHRoaXMuZW50ZXJGcmFtZSA9IHRoaXMuYXdhaXRBbmltYXRpb25JdGVtQW5kU3RhcnRMaXN0ZW5pbmcoJ2VudGVyRnJhbWUnKTtcbiAgICAvKipcbiAgICAgKiBgc2VnbWVudFN0YXJ0YCBpcyBkaXNwYXRjaGVkIHdoZW4gdGhlIG5ldyBzZWdtZW50IGlzIGFkanVzdGVkLlxuICAgICAqL1xuICAgIHRoaXMuc2VnbWVudFN0YXJ0ID0gdGhpcy5hd2FpdEFuaW1hdGlvbkl0ZW1BbmRTdGFydExpc3RlbmluZygnc2VnbWVudFN0YXJ0Jyk7XG4gICAgLyoqXG4gICAgICogT3JpZ2luYWwgZXZlbnQgbmFtZSBpcyBgY29uZmlnX3JlYWR5YC4gYGNvbmZpZ19yZWFkeWAgaXMgZGlzcGF0Y2hlZFxuICAgICAqIGFmdGVyIHRoZSBuZWVkZWQgcmVuZGVyZXIgaXMgY29uZmlndXJlZC5cbiAgICAgKi9cbiAgICB0aGlzLmNvbmZpZ1JlYWR5ID0gdGhpcy5hd2FpdEFuaW1hdGlvbkl0ZW1BbmRTdGFydExpc3RlbmluZygnY29uZmlnX3JlYWR5Jyk7XG4gICAgLyoqXG4gICAgICogT3JpZ2luYWwgZXZlbnQgbmFtZSBpcyBgZGF0YV9yZWFkeWAuIGBkYXRhX3JlYWR5YCBpcyBkaXNwYXRjaGVkXG4gICAgICogd2hlbiBhbGwgcGFydHMgb2YgdGhlIGFuaW1hdGlvbiBoYXZlIGJlZW4gbG9hZGVkLlxuICAgICAqL1xuICAgIHRoaXMuZGF0YVJlYWR5ID0gdGhpcy5hd2FpdEFuaW1hdGlvbkl0ZW1BbmRTdGFydExpc3RlbmluZygnZGF0YV9yZWFkeScpO1xuICAgIC8qKlxuICAgICAqIE9yaWdpbmFsIGV2ZW50IG5hbWUgaXMgYERPTUxvYWRlZGAuIGBET01Mb2FkZWRgIGlzIGRpc3BhdGNoZWRcbiAgICAgKiB3aGVuIGVsZW1lbnRzIGhhdmUgYmVlbiBhZGRlZCB0byB0aGUgRE9NLlxuICAgICAqL1xuICAgIHRoaXMuZG9tTG9hZGVkID0gdGhpcy5hd2FpdEFuaW1hdGlvbkl0ZW1BbmRTdGFydExpc3RlbmluZygnRE9NTG9hZGVkJyk7XG4gICAgLyoqXG4gICAgICogYGRlc3Ryb3lgIHdpbGwgYmUgZGlzcGF0Y2hlZCB3aGVuIHRoZSBjb21wb25lbnQgZ2V0cyBkZXN0cm95ZWQsXG4gICAgICogaXQncyBoYW5keSBmb3IgcmVsZWFzaW5nIHJlc291cmNlcy5cbiAgICAgKi9cbiAgICB0aGlzLmRlc3Ryb3kgPSB0aGlzLmF3YWl0QW5pbWF0aW9uSXRlbUFuZFN0YXJ0TGlzdGVuaW5nKCdkZXN0cm95Jyk7XG4gICAgLyoqXG4gICAgICogYGVycm9yYCB3aWxsIGJlIGRpc3BhdGNoZWQgaWYgdGhlIExvdHRpZSBwbGF5ZXIgY291bGQgbm90IHJlbmRlclxuICAgICAqIHNvbWUgZnJhbWUgb3IgcGFyc2UgY29uZmlnLlxuICAgICAqL1xuICAgIHRoaXMuZXJyb3IgPSB0aGlzLmF3YWl0QW5pbWF0aW9uSXRlbUFuZFN0YXJ0TGlzdGVuaW5nKCdlcnJvcicpO1xuICAgIHRoaXMubmdab25lID0gaW5qZWN0KE5nWm9uZSk7XG4gICAgdGhpcy5pc0Jyb3dzZXIgPSBpc1BsYXRmb3JtQnJvd3NlcihpbmplY3QoUExBVEZPUk1fSUQpKTtcbiAgICB0aGlzLmFuaW1hdGlvbkxvYWRlciA9IGluamVjdChBbmltYXRpb25Mb2FkZXIpO1xuICAgIHRoaXMubG9hZEFuaW1hdGlvbiQgPSBuZXcgU3ViamVjdCgpO1xuICAgIHRoaXMuYW5pbWF0aW9uSXRlbSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuICAgIHRoaXMuc2V0dXBMb2FkQW5pbWF0aW9uTGlzdGVuZXIoKTtcbiAgfVxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmRlc3Ryb3lBbmltYXRpb24oKTtcbiAgfVxuICBsb2FkQW5pbWF0aW9uKGNoYW5nZXMsIGNvbnRhaW5lcikge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMubG9hZEFuaW1hdGlvbiQubmV4dChbY2hhbmdlcywgY29udGFpbmVyXSkpO1xuICB9XG4gIGdldEFuaW1hdGlvbkl0ZW0oKSB7XG4gICAgcmV0dXJuIGRlZmVyKCgpID0+IHRoaXMuYW5pbWF0aW9uSXRlbSQpLnBpcGUoZmlsdGVyKGFuaW1hdGlvbkl0ZW0gPT4gYW5pbWF0aW9uSXRlbSAhPT0gbnVsbCkpO1xuICB9XG4gIGF3YWl0QW5pbWF0aW9uSXRlbUFuZFN0YXJ0TGlzdGVuaW5nKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRBbmltYXRpb25JdGVtKCkucGlwZShzd2l0Y2hNYXAoYW5pbWF0aW9uSXRlbSA9PlxuICAgIC8vIGBmcm9tRXZlbnRgIHdpbGwgdHJ5IHRvIGNhbGwgYHJlbW92ZUV2ZW50TGlzdGVuZXJgIHdoZW4gYHVuc3Vic2NyaWJlKClgIGlzIGludm9rZWQuXG4gICAgLy8gVGhlIHByb2JsZW0gaXMgdGhhdCBgbmdPbkRlc3Ryb3koKWAgaXMgY2FsbGVkIGJlZm9yZSBBbmd1bGFyIHVuc3Vic2NyaWJlcyBmcm9tXG4gICAgLy8gYEBPdXRwdXQoKWAgcHJvcGVydGllcywgdGh1cyBgYW5pbWF0aW9uSXRlbWAgd2lsbCBiZSBgbnVsbGAgYWxyZWFkeSwgYWxzbyBgbG90dGllLXdlYmBcbiAgICAvLyByZW1vdmVzIGV2ZW50IGxpc3RlbmVycyB3aGVuIGNhbGxpbmcgYGRlc3Ryb3koKWAuXG4gICAgbmV3IE9ic2VydmFibGUob2JzZXJ2ZXIgPT4ge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICBhbmltYXRpb25JdGVtLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgZXZlbnQgPT4ge1xuICAgICAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQoZXZlbnQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pKSk7XG4gIH1cbiAgc2V0dXBMb2FkQW5pbWF0aW9uTGlzdGVuZXIoKSB7XG4gICAgY29uc3QgbG9hZEFuaW1hdGlvbiQgPSB0aGlzLmxvYWRBbmltYXRpb24kLnBpcGUoZmlsdGVyKChbY2hhbmdlc10pID0+IHRoaXMuaXNCcm93c2VyICYmIGNoYW5nZXMub3B0aW9ucyAhPT0gdW5kZWZpbmVkKSk7XG4gICAgbG9hZEFuaW1hdGlvbiQucGlwZShzd2l0Y2hNYXAoKFtjaGFuZ2VzLCBjb250YWluZXJdKSA9PiB7XG4gICAgICB0aGlzLmRlc3Ryb3lBbmltYXRpb24oKTtcbiAgICAgIHJldHVybiB0aGlzLmFuaW1hdGlvbkxvYWRlci5sb2FkQW5pbWF0aW9uKHRoaXMuYW5pbWF0aW9uTG9hZGVyLnJlc29sdmVPcHRpb25zKGNoYW5nZXMub3B0aW9ucy5jdXJyZW50VmFsdWUsIGNvbnRhaW5lcikpO1xuICAgIH0pLCB0YWtlVW50aWxEZXN0cm95ZWQoKSkuc3Vic2NyaWJlKGFuaW1hdGlvbkl0ZW0gPT4ge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMuYW5pbWF0aW9uSXRlbSQubmV4dChhbmltYXRpb25JdGVtKSk7XG4gICAgfSk7XG4gIH1cbiAgZGVzdHJveUFuaW1hdGlvbigpIHtcbiAgICBjb25zdCBhbmltYXRpb25JdGVtID0gdGhpcy5hbmltYXRpb25JdGVtJC5nZXRWYWx1ZSgpO1xuICAgIC8vIFRoZSBgbmctbG90dGllYCBjb21wb25lbnQgb3IgdGhlIGBsb3R0aWVgIGRpcmVjdGl2ZSBjYW4gYmUgZGVzdHJveWVkXG4gICAgLy8gYmVmb3JlIHRoZSBgYW5pbWF0aW9uSXRlbWAgaXMgc2V0LCB0aHVzIGl0IHdpbGwgZmFpbCB3aXRoXG4gICAgLy8gYENhbm5vdCByZWFkIHByb3BlcnR5ICdkZXN0cm95JyBvZiBudWxsYC5cbiAgICAvLyBQb3RlbnRpYWxseSBpdCBjYW4gaGFwcGVuIGlmIHRoZSBkaXJlY3RpdmUgZ2V0cyBkZXN0cm95ZWQgYmVmb3JlIGNoYW5nZVxuICAgIC8vIGRldGVjdGlvbiBpcyBydW4uXG4gICAgaWYgKGFuaW1hdGlvbkl0ZW0gPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gYGRlc3Ryb3koKWAgd2lsbCByZW1vdmUgYWxsIGV2ZW50cyBsaXN0ZW5lcnMuXG4gICAgYW5pbWF0aW9uSXRlbS5kZXN0cm95KCk7XG4gICAgdGhpcy5hbmltYXRpb25JdGVtJC5uZXh0KG51bGwpO1xuICB9XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMge1xuICAgIHRoaXMuybVmYWMgPSBmdW5jdGlvbiBCYXNlRGlyZWN0aXZlX0ZhY3RvcnkoX19uZ0ZhY3RvcnlUeXBlX18pIHtcbiAgICAgIHJldHVybiBuZXcgKF9fbmdGYWN0b3J5VHlwZV9fIHx8IEJhc2VEaXJlY3RpdmUpKCk7XG4gICAgfTtcbiAgfVxuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIHtcbiAgICB0aGlzLsm1ZGlyID0gLyogQF9fUFVSRV9fICovaTAuybXJtWRlZmluZURpcmVjdGl2ZSh7XG4gICAgICB0eXBlOiBCYXNlRGlyZWN0aXZlLFxuICAgICAgc2VsZWN0b3JzOiBbW1wiXCIsIFwibG90dGllXCIsIFwiXCJdXSxcbiAgICAgIGlucHV0czoge1xuICAgICAgICBvcHRpb25zOiBbMSwgXCJvcHRpb25zXCJdLFxuICAgICAgICBjb250YWluZXJDbGFzczogWzEsIFwiY29udGFpbmVyQ2xhc3NcIl0sXG4gICAgICAgIHN0eWxlczogWzEsIFwic3R5bGVzXCJdXG4gICAgICB9LFxuICAgICAgb3V0cHV0czoge1xuICAgICAgICBhbmltYXRpb25DcmVhdGVkOiBcImFuaW1hdGlvbkNyZWF0ZWRcIixcbiAgICAgICAgY29tcGxldGU6IFwiY29tcGxldGVcIixcbiAgICAgICAgbG9vcENvbXBsZXRlOiBcImxvb3BDb21wbGV0ZVwiLFxuICAgICAgICBlbnRlckZyYW1lOiBcImVudGVyRnJhbWVcIixcbiAgICAgICAgc2VnbWVudFN0YXJ0OiBcInNlZ21lbnRTdGFydFwiLFxuICAgICAgICBjb25maWdSZWFkeTogXCJjb25maWdSZWFkeVwiLFxuICAgICAgICBkYXRhUmVhZHk6IFwiZGF0YVJlYWR5XCIsXG4gICAgICAgIGRvbUxvYWRlZDogXCJkb21Mb2FkZWRcIixcbiAgICAgICAgZGVzdHJveTogXCJkZXN0cm95XCIsXG4gICAgICAgIGVycm9yOiBcImVycm9yXCJcbiAgICAgIH0sXG4gICAgICBzdGFuZGFsb25lOiBmYWxzZVxuICAgIH0pO1xuICB9XG59XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShCYXNlRGlyZWN0aXZlLCBbe1xuICAgIHR5cGU6IERpcmVjdGl2ZSxcbiAgICBhcmdzOiBbe1xuICAgICAgc2VsZWN0b3I6ICdbbG90dGllXSdcbiAgICB9XVxuICB9XSwgKCkgPT4gW10sIHtcbiAgICBhbmltYXRpb25DcmVhdGVkOiBbe1xuICAgICAgdHlwZTogT3V0cHV0XG4gICAgfV0sXG4gICAgY29tcGxldGU6IFt7XG4gICAgICB0eXBlOiBPdXRwdXRcbiAgICB9XSxcbiAgICBsb29wQ29tcGxldGU6IFt7XG4gICAgICB0eXBlOiBPdXRwdXRcbiAgICB9XSxcbiAgICBlbnRlckZyYW1lOiBbe1xuICAgICAgdHlwZTogT3V0cHV0XG4gICAgfV0sXG4gICAgc2VnbWVudFN0YXJ0OiBbe1xuICAgICAgdHlwZTogT3V0cHV0XG4gICAgfV0sXG4gICAgY29uZmlnUmVhZHk6IFt7XG4gICAgICB0eXBlOiBPdXRwdXRcbiAgICB9XSxcbiAgICBkYXRhUmVhZHk6IFt7XG4gICAgICB0eXBlOiBPdXRwdXRcbiAgICB9XSxcbiAgICBkb21Mb2FkZWQ6IFt7XG4gICAgICB0eXBlOiBPdXRwdXRcbiAgICB9XSxcbiAgICBkZXN0cm95OiBbe1xuICAgICAgdHlwZTogT3V0cHV0XG4gICAgfV0sXG4gICAgZXJyb3I6IFt7XG4gICAgICB0eXBlOiBPdXRwdXRcbiAgICB9XVxuICB9KTtcbn0pKCk7XG5jbGFzcyBMb3R0aWVEaXJlY3RpdmUgZXh0ZW5kcyBCYXNlRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICB0aGlzLmhvc3QgPSBpbmplY3QoRWxlbWVudFJlZik7XG4gIH1cbiAgbmdPbkNoYW5nZXMoY2hhbmdlcykge1xuICAgIHN1cGVyLmxvYWRBbmltYXRpb24oY2hhbmdlcywgdGhpcy5ob3N0Lm5hdGl2ZUVsZW1lbnQpO1xuICB9XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMge1xuICAgIHRoaXMuybVmYWMgPSAvKiBAX19QVVJFX18gKi8oKCkgPT4ge1xuICAgICAgbGV0IMm1TG90dGllRGlyZWN0aXZlX0Jhc2VGYWN0b3J5O1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIExvdHRpZURpcmVjdGl2ZV9GYWN0b3J5KF9fbmdGYWN0b3J5VHlwZV9fKSB7XG4gICAgICAgIHJldHVybiAoybVMb3R0aWVEaXJlY3RpdmVfQmFzZUZhY3RvcnkgfHwgKMm1TG90dGllRGlyZWN0aXZlX0Jhc2VGYWN0b3J5ID0gaTAuybXJtWdldEluaGVyaXRlZEZhY3RvcnkoTG90dGllRGlyZWN0aXZlKSkpKF9fbmdGYWN0b3J5VHlwZV9fIHx8IExvdHRpZURpcmVjdGl2ZSk7XG4gICAgICB9O1xuICAgIH0pKCk7XG4gIH1cbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyB7XG4gICAgdGhpcy7JtWRpciA9IC8qIEBfX1BVUkVfXyAqL2kwLsm1ybVkZWZpbmVEaXJlY3RpdmUoe1xuICAgICAgdHlwZTogTG90dGllRGlyZWN0aXZlLFxuICAgICAgc2VsZWN0b3JzOiBbW1wiXCIsIFwibG90dGllXCIsIFwiXCJdXSxcbiAgICAgIGZlYXR1cmVzOiBbaTAuybXJtUluaGVyaXREZWZpbml0aW9uRmVhdHVyZSwgaTAuybXJtU5nT25DaGFuZ2VzRmVhdHVyZV1cbiAgICB9KTtcbiAgfVxufVxuKCgpID0+IHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoTG90dGllRGlyZWN0aXZlLCBbe1xuICAgIHR5cGU6IERpcmVjdGl2ZSxcbiAgICBhcmdzOiBbe1xuICAgICAgc2VsZWN0b3I6ICdbbG90dGllXScsXG4gICAgICBzdGFuZGFsb25lOiB0cnVlXG4gICAgfV1cbiAgfV0sIG51bGwsIG51bGwpO1xufSkoKTtcbmNsYXNzIExvdHRpZUNvbXBvbmVudCBleHRlbmRzIEJhc2VEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIHRoaXMud2lkdGggPSBpbnB1dChudWxsKTtcbiAgICB0aGlzLmhlaWdodCA9IGlucHV0KG51bGwpO1xuICAgIHRoaXMuY29udGFpbmVyID0gbnVsbDtcbiAgfVxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XG4gICAgc3VwZXIubG9hZEFuaW1hdGlvbihjaGFuZ2VzLCB0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50KTtcbiAgfVxuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIHtcbiAgICB0aGlzLsm1ZmFjID0gLyogQF9fUFVSRV9fICovKCgpID0+IHtcbiAgICAgIGxldCDJtUxvdHRpZUNvbXBvbmVudF9CYXNlRmFjdG9yeTtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBMb3R0aWVDb21wb25lbnRfRmFjdG9yeShfX25nRmFjdG9yeVR5cGVfXykge1xuICAgICAgICByZXR1cm4gKMm1TG90dGllQ29tcG9uZW50X0Jhc2VGYWN0b3J5IHx8ICjJtUxvdHRpZUNvbXBvbmVudF9CYXNlRmFjdG9yeSA9IGkwLsm1ybVnZXRJbmhlcml0ZWRGYWN0b3J5KExvdHRpZUNvbXBvbmVudCkpKShfX25nRmFjdG9yeVR5cGVfXyB8fCBMb3R0aWVDb21wb25lbnQpO1xuICAgICAgfTtcbiAgICB9KSgpO1xuICB9XG4gIC8qKiBAbm9jb2xsYXBzZSAqL1xuICBzdGF0aWMge1xuICAgIHRoaXMuybVjbXAgPSAvKiBAX19QVVJFX18gKi9pMC7Jtcm1ZGVmaW5lQ29tcG9uZW50KHtcbiAgICAgIHR5cGU6IExvdHRpZUNvbXBvbmVudCxcbiAgICAgIHNlbGVjdG9yczogW1tcIm5nLWxvdHRpZVwiXV0sXG4gICAgICB2aWV3UXVlcnk6IGZ1bmN0aW9uIExvdHRpZUNvbXBvbmVudF9RdWVyeShyZiwgY3R4KSB7XG4gICAgICAgIGlmIChyZiAmIDEpIHtcbiAgICAgICAgICBpMC7Jtcm1dmlld1F1ZXJ5KF9jMCwgNyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJmICYgMikge1xuICAgICAgICAgIGxldCBfdDtcbiAgICAgICAgICBpMC7Jtcm1cXVlcnlSZWZyZXNoKF90ID0gaTAuybXJtWxvYWRRdWVyeSgpKSAmJiAoY3R4LmNvbnRhaW5lciA9IF90LmZpcnN0KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGlucHV0czoge1xuICAgICAgICB3aWR0aDogWzEsIFwid2lkdGhcIl0sXG4gICAgICAgIGhlaWdodDogWzEsIFwiaGVpZ2h0XCJdXG4gICAgICB9LFxuICAgICAgZmVhdHVyZXM6IFtpMC7Jtcm1SW5oZXJpdERlZmluaXRpb25GZWF0dXJlLCBpMC7Jtcm1TmdPbkNoYW5nZXNGZWF0dXJlXSxcbiAgICAgIGRlY2xzOiAyLFxuICAgICAgdmFyczogNixcbiAgICAgIGNvbnN0czogW1tcImNvbnRhaW5lclwiLCBcIlwiXSwgWzMsIFwibmdTdHlsZVwiLCBcIm5nQ2xhc3NcIl1dLFxuICAgICAgdGVtcGxhdGU6IGZ1bmN0aW9uIExvdHRpZUNvbXBvbmVudF9UZW1wbGF0ZShyZiwgY3R4KSB7XG4gICAgICAgIGlmIChyZiAmIDEpIHtcbiAgICAgICAgICBpMC7Jtcm1ZWxlbWVudCgwLCBcImRpdlwiLCAxLCAwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmYgJiAyKSB7XG4gICAgICAgICAgaTAuybXJtXN0eWxlUHJvcChcIndpZHRoXCIsIGN0eC53aWR0aCgpIHx8IFwiMTAwJVwiKShcImhlaWdodFwiLCBjdHguaGVpZ2h0KCkgfHwgXCIxMDAlXCIpO1xuICAgICAgICAgIGkwLsm1ybVwcm9wZXJ0eShcIm5nU3R5bGVcIiwgY3R4LnN0eWxlcygpKShcIm5nQ2xhc3NcIiwgY3R4LmNvbnRhaW5lckNsYXNzKCkpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGVwZW5kZW5jaWVzOiBbTmdTdHlsZSwgTmdDbGFzc10sXG4gICAgICBlbmNhcHN1bGF0aW9uOiAyLFxuICAgICAgY2hhbmdlRGV0ZWN0aW9uOiAwXG4gICAgfSk7XG4gIH1cbn1cbigoKSA9PiB7XG4gICh0eXBlb2YgbmdEZXZNb2RlID09PSBcInVuZGVmaW5lZFwiIHx8IG5nRGV2TW9kZSkgJiYgaTAuybVzZXRDbGFzc01ldGFkYXRhKExvdHRpZUNvbXBvbmVudCwgW3tcbiAgICB0eXBlOiBDb21wb25lbnQsXG4gICAgYXJnczogW3tcbiAgICAgIHNlbGVjdG9yOiAnbmctbG90dGllJyxcbiAgICAgIHRlbXBsYXRlOiBgXG4gICAgPGRpdlxuICAgICAgI2NvbnRhaW5lclxuICAgICAgW3N0eWxlLndpZHRoXT1cIndpZHRoKCkgfHwgJzEwMCUnXCJcbiAgICAgIFtzdHlsZS5oZWlnaHRdPVwiaGVpZ2h0KCkgfHwgJzEwMCUnXCJcbiAgICAgIFtuZ1N0eWxlXT1cInN0eWxlcygpXCJcbiAgICAgIFtuZ0NsYXNzXT1cImNvbnRhaW5lckNsYXNzKClcIlxuICAgID48L2Rpdj5cbiAgYCxcbiAgICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICAgIGltcG9ydHM6IFtOZ1N0eWxlLCBOZ0NsYXNzXVxuICAgIH1dXG4gIH1dLCBudWxsLCB7XG4gICAgY29udGFpbmVyOiBbe1xuICAgICAgdHlwZTogVmlld0NoaWxkLFxuICAgICAgYXJnczogWydjb250YWluZXInLCB7XG4gICAgICAgIHN0YXRpYzogdHJ1ZVxuICAgICAgfV1cbiAgICB9XVxuICB9KTtcbn0pKCk7XG5mdW5jdGlvbiB0cmFuc2Zvcm1BbmltYXRpb25GaWxlbmFtZVRvS2V5KGFuaW1hdGlvbikge1xuICBjb25zdCBbYW5pbWF0aW9uTmFtZV0gPSBhbmltYXRpb24uc3BsaXQoJy5qc29uJyk7XG4gIHJldHVybiBgYW5pbWF0aW9uLSR7YW5pbWF0aW9uTmFtZX1gO1xufVxuY2xhc3MgTG90dGllVHJhbnNmZXJTdGF0ZSB7XG4gIGNvbnN0cnVjdG9yKHRyYW5zZmVyU3RhdGUpIHtcbiAgICB0aGlzLnRyYW5zZmVyU3RhdGUgPSB0cmFuc2ZlclN0YXRlO1xuICB9XG4gIGdldChhbmltYXRpb24pIHtcbiAgICBjb25zdCBhbmltYXRpb25LZXkgPSB0cmFuc2Zvcm1BbmltYXRpb25GaWxlbmFtZVRvS2V5KGFuaW1hdGlvbik7XG4gICAgY29uc3Qgc3RhdGVLZXkgPSBtYWtlU3RhdGVLZXkoYW5pbWF0aW9uS2V5KTtcbiAgICByZXR1cm4gdGhpcy50cmFuc2ZlclN0YXRlLmdldChzdGF0ZUtleSwgbnVsbCk7XG4gIH1cbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyB7XG4gICAgdGhpcy7JtWZhYyA9IGZ1bmN0aW9uIExvdHRpZVRyYW5zZmVyU3RhdGVfRmFjdG9yeShfX25nRmFjdG9yeVR5cGVfXykge1xuICAgICAgcmV0dXJuIG5ldyAoX19uZ0ZhY3RvcnlUeXBlX18gfHwgTG90dGllVHJhbnNmZXJTdGF0ZSkoaTAuybXJtWluamVjdChpMC5UcmFuc2ZlclN0YXRlKSk7XG4gICAgfTtcbiAgfVxuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIHtcbiAgICB0aGlzLsm1cHJvdiA9IC8qIEBfX1BVUkVfXyAqL2kwLsm1ybVkZWZpbmVJbmplY3RhYmxlKHtcbiAgICAgIHRva2VuOiBMb3R0aWVUcmFuc2ZlclN0YXRlLFxuICAgICAgZmFjdG9yeTogTG90dGllVHJhbnNmZXJTdGF0ZS7JtWZhYyxcbiAgICAgIHByb3ZpZGVkSW46ICdyb290J1xuICAgIH0pO1xuICB9XG59XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShMb3R0aWVUcmFuc2ZlclN0YXRlLCBbe1xuICAgIHR5cGU6IEluamVjdGFibGUsXG4gICAgYXJnczogW3tcbiAgICAgIHByb3ZpZGVkSW46ICdyb290J1xuICAgIH1dXG4gIH1dLCAoKSA9PiBbe1xuICAgIHR5cGU6IGkwLlRyYW5zZmVyU3RhdGVcbiAgfV0sIG51bGwpO1xufSkoKTtcblxuLyoqXG4gKiBHZW5lcmF0ZWQgYnVuZGxlIGluZGV4LiBEbyBub3QgZWRpdC5cbiAqL1xuXG5leHBvcnQgeyBBbmltYXRpb25Mb2FkZXIsIEJhc2VEaXJlY3RpdmUsIExvdHRpZUNvbXBvbmVudCwgTG90dGllRGlyZWN0aXZlLCBMb3R0aWVUcmFuc2ZlclN0YXRlLCBwcm92aWRlQ2FjaGVhYmxlQW5pbWF0aW9uTG9hZGVyLCBwcm92aWRlTG90dGllT3B0aW9ucywgdHJhbnNmb3JtQW5pbWF0aW9uRmlsZW5hbWVUb0tleSwgQ2FjaGVhYmxlQW5pbWF0aW9uTG9hZGVyIGFzIMm1Q2FjaGVhYmxlQW5pbWF0aW9uTG9hZGVyLCBMT1RUSUVfT1BUSU9OUyBhcyDJtUxPVFRJRV9PUFRJT05TIH07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkEsU0FBUyxtQkFBbUIsWUFBWTtBQUN0QyxNQUFJLENBQUMsWUFBWTtBQUNmLDZCQUF5QixrQkFBa0I7QUFDM0MsaUJBQWEsT0FBTyxVQUFVO0FBQUEsRUFDaEM7QUFDQSxRQUFNLGFBQWEsSUFBSSxXQUFXLGNBQVk7QUFDNUMsVUFBTSxlQUFlLFdBQVcsVUFBVSxTQUFTLEtBQUssS0FBSyxRQUFRLENBQUM7QUFDdEUsV0FBTztBQUFBLEVBQ1QsQ0FBQztBQUNELFNBQU8sWUFBVTtBQUNmLFdBQU8sT0FBTyxLQUFLLFVBQVUsVUFBVSxDQUFDO0FBQUEsRUFDMUM7QUFDRjs7O0FDMUJBLElBQU0sTUFBTSxDQUFDLFdBQVc7QUFDeEIsSUFBTSxpQkFBaUIsSUFBSSxlQUFlLGVBQWU7QUFDekQsU0FBUyxvQ0FBb0M7QUFDM0MsUUFBTSxTQUFTLE9BQU8sTUFBTTtBQUM1QixRQUFNO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxFQUNGLElBQUksT0FBTyxjQUFjO0FBQ3pCLFFBQU0saUJBQWlCLE9BQU8sa0JBQWtCLE1B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
