import {
  APP_BASE_HREF,
  ChangeDetectionStrategy,
  Component,
  ComponentFactoryResolver$1,
  Directive,
  ElementRef,
  EventEmitter,
  HttpBackend,
  HttpClient,
  Inject,
  Injectable,
  Input,
  NgModule,
  Optional,
  Output,
  PLATFORM_ID,
  PlatformLocation,
  Renderer2,
  RendererFactory2,
  ViewContainerRef,
  catchError,
  isPlatformBrowser,
  isPlatformServer,
  map,
  of,
  setClassMetadata,
  share,
  tap,
  throwError,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵinject
} from "./chunk-DGENMXJW.js";

// node_modules/ng-inline-svg-2/lib_esmodule/inline-svg.service.js
var InlineSVGService = function() {
  function InlineSVGService2(rendererFactory) {
    this._ranScripts = {};
    this._renderer = rendererFactory.createRenderer(null, null);
  }
  InlineSVGService2.prototype.insertEl = function(dir, parentEl, content, replaceContents, prepend) {
    if (replaceContents && !prepend) {
      var parentNode = dir._prevSVG && dir._prevSVG.parentNode;
      if (parentNode) {
        this._renderer.removeChild(parentNode, dir._prevSVG);
      }
      parentEl.innerHTML = "";
    }
    if (prepend) {
      this._renderer.insertBefore(parentEl, content, parentEl.firstChild);
    } else {
      this._renderer.appendChild(parentEl, content);
    }
    if (content.nodeName === "svg") {
      dir._prevSVG = content;
    }
  };
  InlineSVGService2.prototype.evalScripts = function(svg, url, evalMode) {
    var scripts = svg.querySelectorAll("script");
    var scriptsToEval = [];
    for (var i = 0; i < scripts.length; i++) {
      var scriptType = scripts[i].getAttribute("type");
      if (!scriptType || scriptType === "application/ecmascript" || scriptType === "application/javascript") {
        var script = scripts[i].innerText || scripts[i].textContent;
        scriptsToEval.push(script);
        this._renderer.removeChild(scripts[i].parentNode, scripts[i]);
      }
    }
    if (scriptsToEval.length > 0 && (evalMode === "always" || evalMode === "once" && !this._ranScripts[url])) {
      for (var i = 0; i < scriptsToEval.length; i++) {
        new Function(scriptsToEval[i])(window);
      }
      this._ranScripts[url] = true;
    }
  };
  InlineSVGService2.\u0275fac = function InlineSVGService_Factory(t) {
    return new (t || InlineSVGService2)(\u0275\u0275inject(RendererFactory2));
  };
  InlineSVGService2.\u0275prov = \u0275\u0275defineInjectable({
    token: InlineSVGService2,
    factory: InlineSVGService2.\u0275fac,
    providedIn: "root"
  });
  return InlineSVGService2;
}();
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InlineSVGService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: RendererFactory2
    }];
  }, null);
})();

// node_modules/ng-inline-svg-2/lib_esmodule/inline-svg.component.js
var InlineSVGComponent = function() {
  function InlineSVGComponent2(_inlineSVGService, el) {
    this._inlineSVGService = _inlineSVGService;
    this._el = el;
  }
  InlineSVGComponent2.prototype.ngAfterViewInit = function() {
    this._updateContent();
  };
  InlineSVGComponent2.prototype.ngOnChanges = function(changes) {
    if (changes["content"]) {
      this._updateContent();
    }
  };
  InlineSVGComponent2.prototype._updateContent = function() {
    this._inlineSVGService.insertEl(this.context, this._el.nativeElement, this.content, this.replaceContents, this.prepend);
  };
  InlineSVGComponent2.\u0275fac = function InlineSVGComponent_Factory(t) {
    return new (t || InlineSVGComponent2)(\u0275\u0275directiveInject(InlineSVGService), \u0275\u0275directiveInject(ElementRef));
  };
  InlineSVGComponent2.\u0275cmp = \u0275\u0275defineComponent({
    type: InlineSVGComponent2,
    selectors: [["inline-svg"]],
    inputs: {
      context: "context",
      content: "content",
      replaceContents: "replaceContents",
      prepend: "prepend"
    },
    features: [\u0275\u0275NgOnChangesFeature],
    decls: 0,
    vars: 0,
    template: function InlineSVGComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
  return InlineSVGComponent2;
}();
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InlineSVGComponent, [{
    type: Component,
    args: [{
      selector: "inline-svg",
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], function() {
    return [{
      type: InlineSVGService
    }, {
      type: ElementRef
    }];
  }, {
    context: [{
      type: Input
    }],
    content: [{
      type: Input
    }],
    replaceContents: [{
      type: Input
    }],
    prepend: [{
      type: Input
    }]
  });
})();

// node_modules/ng-inline-svg-2/lib_esmodule/inline-svg.config.js
var InlineSVGConfig = /* @__PURE__ */ function() {
  function InlineSVGConfig2() {
  }
  return InlineSVGConfig2;
}();

// node_modules/ng-inline-svg-2/lib_esmodule/svg-cache.service.js
var SVGCacheService = function() {
  function SVGCacheService2(_appBase, _location, _config, httpClient, httpBackend, rendererFactory) {
    this._appBase = _appBase;
    this._location = _location;
    this._config = _config;
    this._http = _config && !_config.bypassHttpClientInterceptorChain ? httpClient : new HttpClient(httpBackend);
    this._renderer = rendererFactory.createRenderer(null, null);
    this.setBaseUrl();
    if (!SVGCacheService2._cache) {
      SVGCacheService2._cache = /* @__PURE__ */ new Map();
    }
    if (!SVGCacheService2._inProgressReqs) {
      SVGCacheService2._inProgressReqs = /* @__PURE__ */ new Map();
    }
  }
  SVGCacheService2.prototype.getSVG = function(url, resolveSVGUrl, cache) {
    var _this = this;
    if (cache === void 0) {
      cache = true;
    }
    var svgUrl = (resolveSVGUrl ? this.getAbsoluteUrl(url) : url).replace(/#.+$/, "");
    if (cache && SVGCacheService2._cache.has(svgUrl)) {
      return of(this._cloneSVG(SVGCacheService2._cache.get(svgUrl)));
    }
    if (SVGCacheService2._inProgressReqs.has(svgUrl)) {
      return SVGCacheService2._inProgressReqs.get(svgUrl);
    }
    var req = this._http.get(svgUrl, {
      responseType: "text"
    }).pipe(tap(function() {
      SVGCacheService2._inProgressReqs.delete(svgUrl);
    }), catchError(function(error) {
      SVGCacheService2._inProgressReqs.delete(svgUrl);
      return throwError(error.message);
    }), share(), map(function(svgText) {
      var svgEl = _this._svgElementFromString(svgText);
      SVGCacheService2._cache.set(svgUrl, svgEl);
      return _this._cloneSVG(svgEl);
    }));
    SVGCacheService2._inProgressReqs.set(svgUrl, req);
    return req;
  };
  SVGCacheService2.prototype.setBaseUrl = function() {
    if (this._config) {
      this._baseUrl = this._config.baseUrl;
    } else if (this._appBase !== null) {
      this._baseUrl = this._appBase;
    } else if (this._location !== null) {
      this._baseUrl = this._location.getBaseHrefFromDOM();
    }
  };
  SVGCacheService2.prototype.getAbsoluteUrl = function(url) {
    if (this._baseUrl && !/^https?:\/\//i.test(url)) {
      url = this._baseUrl + url;
      if (url.indexOf("//") === 0) {
        url = url.substring(1);
      }
    }
    var base = this._renderer.createElement("BASE");
    base.href = url;
    return base.href;
  };
  SVGCacheService2.prototype._svgElementFromString = function(str) {
    var div = this._renderer.createElement("DIV");
    div.innerHTML = str;
    var svg = div.querySelector("svg");
    if (!svg) {
      throw new Error("No SVG found in loaded contents");
    }
    return svg;
  };
  SVGCacheService2.prototype._cloneSVG = function(svg) {
    return svg.cloneNode(true);
  };
  SVGCacheService2.\u0275fac = function SVGCacheService_Factory(t) {
    return new (t || SVGCacheService2)(\u0275\u0275inject(APP_BASE_HREF, 8), \u0275\u0275inject(PlatformLocation, 8), \u0275\u0275inject(InlineSVGConfig, 8), \u0275\u0275inject(HttpClient), \u0275\u0275inject(HttpBackend), \u0275\u0275inject(RendererFactory2));
  };
  SVGCacheService2.\u0275prov = \u0275\u0275defineInjectable({
    token: SVGCacheService2,
    factory: SVGCacheService2.\u0275fac,
    providedIn: "root"
  });
  return SVGCacheService2;
}();
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SVGCacheService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [APP_BASE_HREF]
      }]
    }, {
      type: PlatformLocation,
      decorators: [{
        type: Optional
      }]
    }, {
      type: InlineSVGConfig,
      decorators: [{
        type: Optional
      }]
    }, {
      type: HttpClient
    }, {
      type: HttpBackend
    }, {
      type: RendererFactory2
    }];
  }, null);
})();

// node_modules/ng-inline-svg-2/lib_esmodule/svg-util.js
function isUrlSymbol(url) {
  return url.charAt(0) === "#" || url.indexOf(".svg#") > -1;
}
function isSvgSupported() {
  return typeof SVGRect !== "undefined";
}
function createSymbolSvg(renderer, svg, symbolId) {
  var symbol = svg.querySelector('[id="'.concat(symbolId, '"]'));
  if (!symbol) {
    throw new Error('Symbol "'.concat(symbolId, '" not found'));
  }
  var elSvg = renderer.createElement("svg", "svg");
  renderer.appendChild(elSvg, symbol);
  var elSvgUse = renderer.createElement("use", "svg");
  renderer.setAttribute(elSvgUse, "href", "#".concat(symbolId), "xlink");
  renderer.appendChild(elSvg, elSvgUse);
  return elSvg;
}
function removeAttributes(element, attrs) {
  for (var i = 0; i < attrs.length; i++) {
    var elAttr = element.getAttribute(attrs[i]);
    if (elAttr) {
      element.removeAttribute(attrs[i]);
    }
  }
  var innerEls = element.getElementsByTagName("*");
  for (var i = 0; i < innerEls.length; i++) {
    removeAttributes(innerEls[i], attrs);
  }
}
function setAttributes(element, attrs) {
  for (var attr in attrs) {
    element.setAttribute(attr, attrs[attr]);
  }
}

// node_modules/ng-inline-svg-2/lib_esmodule/inline-svg.directive.js
var InlineSVGDirective = function() {
  function InlineSVGDirective2(_el, _viewContainerRef, _resolver, _svgCache, _renderer, _inlineSVGService, _config, platformId) {
    this._el = _el;
    this._viewContainerRef = _viewContainerRef;
    this._resolver = _resolver;
    this._svgCache = _svgCache;
    this._renderer = _renderer;
    this._inlineSVGService = _inlineSVGService;
    this._config = _config;
    this.platformId = platformId;
    this.resolveSVGUrl = true;
    this.replaceContents = true;
    this.prepend = false;
    this.injectComponent = false;
    this.cacheSVG = true;
    this.forceEvalStyles = false;
    this.evalScripts = "always";
    this.onSVGInserted = new EventEmitter();
    this.onSVGFailed = new EventEmitter();
    this._supportsSVG = isSvgSupported();
    if (!isPlatformServer(this.platformId) && !this._supportsSVG) {
      this._fail("Embed SVG are not supported by this browser");
    }
  }
  InlineSVGDirective2.prototype.ngOnInit = function() {
    if (!this._isValidPlatform() || this._isSSRDisabled()) {
      return;
    }
    this._insertSVG();
  };
  InlineSVGDirective2.prototype.ngOnChanges = function(changes) {
    if (!this._isValidPlatform() || this._isSSRDisabled()) {
      return;
    }
    var setSVGAttributesChanged = Boolean(changes["setSVGAttributes"]);
    if (changes["inlineSVG"] || setSVGAttributesChanged) {
      this._insertSVG(setSVGAttributesChanged);
    }
  };
  InlineSVGDirective2.prototype.ngOnDestroy = function() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  };
  InlineSVGDirective2.prototype._insertSVG = function(force) {
    var _this = this;
    if (force === void 0) {
      force = false;
    }
    if (!isPlatformServer(this.platformId) && !this._supportsSVG) {
      return;
    }
    if (!this.inlineSVG) {
      this._fail("No URL passed to [inlineSVG]");
      return;
    }
    if (!force && this.inlineSVG === this._prevUrl) {
      return;
    }
    this._prevUrl = this.inlineSVG;
    this._subscription = this._svgCache.getSVG(this.inlineSVG, this.resolveSVGUrl, this.cacheSVG).subscribe(function(svg) {
      if (isUrlSymbol(_this.inlineSVG)) {
        var symbolId = _this.inlineSVG.split("#")[1];
        svg = createSymbolSvg(_this._renderer, svg, symbolId);
      }
      _this._processSvg(svg);
    }, function(err) {
      _this._fail(err);
    });
  };
  InlineSVGDirective2.prototype._processSvg = function(svg) {
    if (!svg) {
      return;
    }
    if (this.removeSVGAttributes && isPlatformBrowser(this.platformId)) {
      removeAttributes(svg, this.removeSVGAttributes);
    }
    if (this.setSVGAttributes) {
      setAttributes(svg, this.setSVGAttributes);
    }
    if (this.onSVGLoaded) {
      svg = this.onSVGLoaded(svg, this._el.nativeElement);
    }
    this._insertEl(svg);
    if (isPlatformBrowser(this.platformId)) {
      this._inlineSVGService.evalScripts(svg, this.inlineSVG, this.evalScripts);
    }
    if (this.forceEvalStyles) {
      var styleTags = svg.querySelectorAll("style");
      Array.from(styleTags).forEach(function(tag) {
        return tag.textContent += "";
      });
    }
    this.onSVGInserted.emit(svg);
  };
  InlineSVGDirective2.prototype._insertEl = function(el) {
    if (this.injectComponent) {
      if (!this._svgComp) {
        var factory = this._resolver.resolveComponentFactory(InlineSVGComponent);
        this._svgComp = this._viewContainerRef.createComponent(factory);
      }
      this._svgComp.instance.context = this;
      this._svgComp.instance.replaceContents = this.replaceContents;
      this._svgComp.instance.prepend = this.prepend;
      this._svgComp.instance.content = el;
      this._renderer.appendChild(this._el.nativeElement, this._svgComp.injector.get(InlineSVGComponent)._el.nativeElement);
    } else {
      this._inlineSVGService.insertEl(this, this._el.nativeElement, el, this.replaceContents, this.prepend);
    }
  };
  InlineSVGDirective2.prototype._fail = function(msg) {
    this.onSVGFailed.emit(msg);
    if (this.fallbackImgUrl) {
      var elImg = this._renderer.createElement("IMG");
      this._renderer.setAttribute(elImg, "src", this.fallbackImgUrl);
      this._insertEl(elImg);
    } else if (this.fallbackSVG && this.fallbackSVG !== this.inlineSVG) {
      this.inlineSVG = this.fallbackSVG;
      this._insertSVG();
    }
  };
  InlineSVGDirective2.prototype._isValidPlatform = function() {
    return isPlatformServer(this.platformId) || isPlatformBrowser(this.platformId);
  };
  InlineSVGDirective2.prototype._isSSRDisabled = function() {
    return isPlatformServer(this.platformId) && this._config && this._config.clientOnly;
  };
  InlineSVGDirective2.\u0275fac = function InlineSVGDirective_Factory(t) {
    return new (t || InlineSVGDirective2)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(ComponentFactoryResolver$1), \u0275\u0275directiveInject(SVGCacheService), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(InlineSVGService), \u0275\u0275directiveInject(InlineSVGConfig, 8), \u0275\u0275directiveInject(PLATFORM_ID));
  };
  InlineSVGDirective2.\u0275dir = \u0275\u0275defineDirective({
    type: InlineSVGDirective2,
    selectors: [["", "inlineSVG", ""]],
    inputs: {
      inlineSVG: "inlineSVG",
      resolveSVGUrl: "resolveSVGUrl",
      replaceContents: "replaceContents",
      prepend: "prepend",
      injectComponent: "injectComponent",
      cacheSVG: "cacheSVG",
      setSVGAttributes: "setSVGAttributes",
      removeSVGAttributes: "removeSVGAttributes",
      forceEvalStyles: "forceEvalStyles",
      evalScripts: "evalScripts",
      fallbackImgUrl: "fallbackImgUrl",
      fallbackSVG: "fallbackSVG",
      onSVGLoaded: "onSVGLoaded"
    },
    outputs: {
      onSVGInserted: "onSVGInserted",
      onSVGFailed: "onSVGFailed"
    },
    features: [\u0275\u0275ProvidersFeature([SVGCacheService]), \u0275\u0275NgOnChangesFeature]
  });
  return InlineSVGDirective2;
}();
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InlineSVGDirective, [{
    type: Directive,
    args: [{
      selector: "[inlineSVG]",
      providers: [SVGCacheService]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: ViewContainerRef
    }, {
      type: ComponentFactoryResolver$1
    }, {
      type: SVGCacheService
    }, {
      type: Renderer2
    }, {
      type: InlineSVGService
    }, {
      type: InlineSVGConfig,
      decorators: [{
        type: Optional
      }]
    }, {
      type: Object,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }];
  }, {
    inlineSVG: [{
      type: Input
    }],
    resolveSVGUrl: [{
      type: Input
    }],
    replaceContents: [{
      type: Input
    }],
    prepend: [{
      type: Input
    }],
    injectComponent: [{
      type: Input
    }],
    cacheSVG: [{
      type: Input
    }],
    setSVGAttributes: [{
      type: Input
    }],
    removeSVGAttributes: [{
      type: Input
    }],
    forceEvalStyles: [{
      type: Input
    }],
    evalScripts: [{
      type: Input
    }],
    fallbackImgUrl: [{
      type: Input
    }],
    fallbackSVG: [{
      type: Input
    }],
    onSVGLoaded: [{
      type: Input
    }],
    onSVGInserted: [{
      type: Output
    }],
    onSVGFailed: [{
      type: Output
    }]
  });
})();

// node_modules/ng-inline-svg-2/lib_esmodule/inline-svg.module.js
var InlineSVGModule = function() {
  function InlineSVGModule2() {
  }
  InlineSVGModule2.forRoot = function(config) {
    return {
      ngModule: InlineSVGModule2,
      providers: [{
        provide: InlineSVGConfig,
        useValue: config
      }]
    };
  };
  InlineSVGModule2.\u0275fac = function InlineSVGModule_Factory(t) {
    return new (t || InlineSVGModule2)();
  };
  InlineSVGModule2.\u0275mod = \u0275\u0275defineNgModule({
    type: InlineSVGModule2
  });
  InlineSVGModule2.\u0275inj = \u0275\u0275defineInjector({});
  return InlineSVGModule2;
}();
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InlineSVGModule, [{
    type: NgModule,
    args: [{
      declarations: [InlineSVGDirective, InlineSVGComponent],
      exports: [InlineSVGDirective],
      entryComponents: [InlineSVGComponent]
    }]
  }], null, null);
})();

export {
  InlineSVGDirective,
  InlineSVGModule
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9uZy1pbmxpbmUtc3ZnLTIvbGliX2VzbW9kdWxlL2lubGluZS1zdmcuc2VydmljZS5qcyIsIm5vZGVfbW9kdWxlcy9uZy1pbmxpbmUtc3ZnLTIvbGliX2VzbW9kdWxlL2lubGluZS1zdmcuY29tcG9uZW50LmpzIiwibm9kZV9tb2R1bGVzL25nLWlubGluZS1zdmctMi9saWJfZXNtb2R1bGUvaW5saW5lLXN2Zy5jb25maWcuanMiLCJub2RlX21vZHVsZXMvbmctaW5saW5lLXN2Zy0yL2xpYl9lc21vZHVsZS9zdmctY2FjaGUuc2VydmljZS5qcyIsIm5vZGVfbW9kdWxlcy9uZy1pbmxpbmUtc3ZnLTIvbGliX2VzbW9kdWxlL3N2Zy11dGlsLmpzIiwibm9kZV9tb2R1bGVzL25nLWlubGluZS1zdmctMi9saWJfZXNtb2R1bGUvaW5saW5lLXN2Zy5kaXJlY3RpdmUuanMiLCJub2RlX21vZHVsZXMvbmctaW5saW5lLXN2Zy0yL2xpYl9lc21vZHVsZS9pbmxpbmUtc3ZnLm1vZHVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBSZW5kZXJlckZhY3RvcnkyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xudmFyIElubGluZVNWR1NlcnZpY2UgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIElubGluZVNWR1NlcnZpY2UocmVuZGVyZXJGYWN0b3J5KSB7XG4gICAgdGhpcy5fcmFuU2NyaXB0cyA9IHt9O1xuICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKG51bGwsIG51bGwpO1xuICB9XG4gIElubGluZVNWR1NlcnZpY2UucHJvdG90eXBlLmluc2VydEVsID0gZnVuY3Rpb24gKGRpciwgcGFyZW50RWwsIGNvbnRlbnQsIHJlcGxhY2VDb250ZW50cywgcHJlcGVuZCkge1xuICAgIGlmIChyZXBsYWNlQ29udGVudHMgJiYgIXByZXBlbmQpIHtcbiAgICAgIHZhciBwYXJlbnROb2RlID0gZGlyLl9wcmV2U1ZHICYmIGRpci5fcHJldlNWRy5wYXJlbnROb2RlO1xuICAgICAgaWYgKHBhcmVudE5vZGUpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2hpbGQocGFyZW50Tm9kZSwgZGlyLl9wcmV2U1ZHKTtcbiAgICAgIH1cbiAgICAgIHBhcmVudEVsLmlubmVySFRNTCA9ICcnO1xuICAgIH1cbiAgICBpZiAocHJlcGVuZCkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuaW5zZXJ0QmVmb3JlKHBhcmVudEVsLCBjb250ZW50LCBwYXJlbnRFbC5maXJzdENoaWxkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYXBwZW5kQ2hpbGQocGFyZW50RWwsIGNvbnRlbnQpO1xuICAgIH1cbiAgICBpZiAoY29udGVudC5ub2RlTmFtZSA9PT0gJ3N2ZycpIHtcbiAgICAgIGRpci5fcHJldlNWRyA9IGNvbnRlbnQ7XG4gICAgfVxuICB9O1xuICBJbmxpbmVTVkdTZXJ2aWNlLnByb3RvdHlwZS5ldmFsU2NyaXB0cyA9IGZ1bmN0aW9uIChzdmcsIHVybCwgZXZhbE1vZGUpIHtcbiAgICB2YXIgc2NyaXB0cyA9IHN2Zy5xdWVyeVNlbGVjdG9yQWxsKCdzY3JpcHQnKTtcbiAgICB2YXIgc2NyaXB0c1RvRXZhbCA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNjcmlwdFR5cGUgPSBzY3JpcHRzW2ldLmdldEF0dHJpYnV0ZSgndHlwZScpO1xuICAgICAgaWYgKCFzY3JpcHRUeXBlIHx8IHNjcmlwdFR5cGUgPT09ICdhcHBsaWNhdGlvbi9lY21hc2NyaXB0JyB8fCBzY3JpcHRUeXBlID09PSAnYXBwbGljYXRpb24vamF2YXNjcmlwdCcpIHtcbiAgICAgICAgdmFyIHNjcmlwdCA9IHNjcmlwdHNbaV0uaW5uZXJUZXh0IHx8IHNjcmlwdHNbaV0udGV4dENvbnRlbnQ7XG4gICAgICAgIHNjcmlwdHNUb0V2YWwucHVzaChzY3JpcHQpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDaGlsZChzY3JpcHRzW2ldLnBhcmVudE5vZGUsIHNjcmlwdHNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc2NyaXB0c1RvRXZhbC5sZW5ndGggPiAwICYmIChldmFsTW9kZSA9PT0gXCJhbHdheXNcIiB8fCBldmFsTW9kZSA9PT0gXCJvbmNlXCIgJiYgIXRoaXMuX3JhblNjcmlwdHNbdXJsXSkpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2NyaXB0c1RvRXZhbC5sZW5ndGg7IGkrKykge1xuICAgICAgICBuZXcgRnVuY3Rpb24oc2NyaXB0c1RvRXZhbFtpXSkod2luZG93KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3JhblNjcmlwdHNbdXJsXSA9IHRydWU7XG4gICAgfVxuICB9O1xuICBJbmxpbmVTVkdTZXJ2aWNlLsm1ZmFjID0gZnVuY3Rpb24gSW5saW5lU1ZHU2VydmljZV9GYWN0b3J5KHQpIHtcbiAgICByZXR1cm4gbmV3ICh0IHx8IElubGluZVNWR1NlcnZpY2UpKGkwLsm1ybVpbmplY3QoaTAuUmVuZGVyZXJGYWN0b3J5MikpO1xuICB9O1xuICBJbmxpbmVTVkdTZXJ2aWNlLsm1cHJvdiA9IGkwLsm1ybVkZWZpbmVJbmplY3RhYmxlKHtcbiAgICB0b2tlbjogSW5saW5lU1ZHU2VydmljZSxcbiAgICBmYWN0b3J5OiBJbmxpbmVTVkdTZXJ2aWNlLsm1ZmFjLFxuICAgIHByb3ZpZGVkSW46ICdyb290J1xuICB9KTtcbiAgcmV0dXJuIElubGluZVNWR1NlcnZpY2U7XG59KCk7XG5leHBvcnQgeyBJbmxpbmVTVkdTZXJ2aWNlIH07XG4oZnVuY3Rpb24gKCkge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShJbmxpbmVTVkdTZXJ2aWNlLCBbe1xuICAgIHR5cGU6IEluamVjdGFibGUsXG4gICAgYXJnczogW3tcbiAgICAgIHByb3ZpZGVkSW46ICdyb290J1xuICAgIH1dXG4gIH1dLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFt7XG4gICAgICB0eXBlOiBpMC5SZW5kZXJlckZhY3RvcnkyXG4gICAgfV07XG4gIH0sIG51bGwpO1xufSkoKTsiLCJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5saW5lU1ZHRGlyZWN0aXZlIH0gZnJvbSAnLi9pbmxpbmUtc3ZnLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJbmxpbmVTVkdTZXJ2aWNlIH0gZnJvbSAnLi9pbmxpbmUtc3ZnLnNlcnZpY2UnO1xuaW1wb3J0ICogYXMgaTAgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGkxIGZyb20gXCIuL2lubGluZS1zdmcuc2VydmljZVwiO1xudmFyIElubGluZVNWR0NvbXBvbmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gSW5saW5lU1ZHQ29tcG9uZW50KF9pbmxpbmVTVkdTZXJ2aWNlLCBlbCkge1xuICAgIHRoaXMuX2lubGluZVNWR1NlcnZpY2UgPSBfaW5saW5lU1ZHU2VydmljZTtcbiAgICB0aGlzLl9lbCA9IGVsO1xuICB9XG4gIElubGluZVNWR0NvbXBvbmVudC5wcm90b3R5cGUubmdBZnRlclZpZXdJbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX3VwZGF0ZUNvbnRlbnQoKTtcbiAgfTtcbiAgSW5saW5lU1ZHQ29tcG9uZW50LnByb3RvdHlwZS5uZ09uQ2hhbmdlcyA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXNbJ2NvbnRlbnQnXSkge1xuICAgICAgdGhpcy5fdXBkYXRlQ29udGVudCgpO1xuICAgIH1cbiAgfTtcbiAgSW5saW5lU1ZHQ29tcG9uZW50LnByb3RvdHlwZS5fdXBkYXRlQ29udGVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9pbmxpbmVTVkdTZXJ2aWNlLmluc2VydEVsKHRoaXMuY29udGV4dCwgdGhpcy5fZWwubmF0aXZlRWxlbWVudCwgdGhpcy5jb250ZW50LCB0aGlzLnJlcGxhY2VDb250ZW50cywgdGhpcy5wcmVwZW5kKTtcbiAgfTtcbiAgSW5saW5lU1ZHQ29tcG9uZW50Lsm1ZmFjID0gZnVuY3Rpb24gSW5saW5lU1ZHQ29tcG9uZW50X0ZhY3RvcnkodCkge1xuICAgIHJldHVybiBuZXcgKHQgfHwgSW5saW5lU1ZHQ29tcG9uZW50KShpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkxLklubGluZVNWR1NlcnZpY2UpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkwLkVsZW1lbnRSZWYpKTtcbiAgfTtcbiAgSW5saW5lU1ZHQ29tcG9uZW50Lsm1Y21wID0gaTAuybXJtWRlZmluZUNvbXBvbmVudCh7XG4gICAgdHlwZTogSW5saW5lU1ZHQ29tcG9uZW50LFxuICAgIHNlbGVjdG9yczogW1tcImlubGluZS1zdmdcIl1dLFxuICAgIGlucHV0czoge1xuICAgICAgY29udGV4dDogXCJjb250ZXh0XCIsXG4gICAgICBjb250ZW50OiBcImNvbnRlbnRcIixcbiAgICAgIHJlcGxhY2VDb250ZW50czogXCJyZXBsYWNlQ29udGVudHNcIixcbiAgICAgIHByZXBlbmQ6IFwicHJlcGVuZFwiXG4gICAgfSxcbiAgICBmZWF0dXJlczogW2kwLsm1ybVOZ09uQ2hhbmdlc0ZlYXR1cmVdLFxuICAgIGRlY2xzOiAwLFxuICAgIHZhcnM6IDAsXG4gICAgdGVtcGxhdGU6IGZ1bmN0aW9uIElubGluZVNWR0NvbXBvbmVudF9UZW1wbGF0ZShyZiwgY3R4KSB7fSxcbiAgICBlbmNhcHN1bGF0aW9uOiAyLFxuICAgIGNoYW5nZURldGVjdGlvbjogMFxuICB9KTtcbiAgcmV0dXJuIElubGluZVNWR0NvbXBvbmVudDtcbn0oKTtcbmV4cG9ydCB7IElubGluZVNWR0NvbXBvbmVudCB9O1xuKGZ1bmN0aW9uICgpIHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoSW5saW5lU1ZHQ29tcG9uZW50LCBbe1xuICAgIHR5cGU6IENvbXBvbmVudCxcbiAgICBhcmdzOiBbe1xuICAgICAgc2VsZWN0b3I6ICdpbmxpbmUtc3ZnJyxcbiAgICAgIHRlbXBsYXRlOiAnJyxcbiAgICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG4gICAgfV1cbiAgfV0sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gW3tcbiAgICAgIHR5cGU6IGkxLklubGluZVNWR1NlcnZpY2VcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMC5FbGVtZW50UmVmXG4gICAgfV07XG4gIH0sIHtcbiAgICBjb250ZXh0OiBbe1xuICAgICAgdHlwZTogSW5wdXRcbiAgICB9XSxcbiAgICBjb250ZW50OiBbe1xuICAgICAgdHlwZTogSW5wdXRcbiAgICB9XSxcbiAgICByZXBsYWNlQ29udGVudHM6IFt7XG4gICAgICB0eXBlOiBJbnB1dFxuICAgIH1dLFxuICAgIHByZXBlbmQ6IFt7XG4gICAgICB0eXBlOiBJbnB1dFxuICAgIH1dXG4gIH0pO1xufSkoKTsiLCJ2YXIgSW5saW5lU1ZHQ29uZmlnID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBJbmxpbmVTVkdDb25maWcoKSB7fVxuICByZXR1cm4gSW5saW5lU1ZHQ29uZmlnO1xufSgpO1xuZXhwb3J0IHsgSW5saW5lU1ZHQ29uZmlnIH07IiwiaW1wb3J0IHsgQVBQX0JBU0VfSFJFRiwgUGxhdGZvcm1Mb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQmFja2VuZCwgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIFJlbmRlcmVyRmFjdG9yeTIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG9mLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHNoYXJlLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJbmxpbmVTVkdDb25maWcgfSBmcm9tICcuL2lubGluZS1zdmcuY29uZmlnJztcbmltcG9ydCAqIGFzIGkwIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBpMSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgKiBhcyBpMiBmcm9tIFwiLi9pbmxpbmUtc3ZnLmNvbmZpZ1wiO1xuaW1wb3J0ICogYXMgaTMgZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG52YXIgU1ZHQ2FjaGVTZXJ2aWNlID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTVkdDYWNoZVNlcnZpY2UoX2FwcEJhc2UsIF9sb2NhdGlvbiwgX2NvbmZpZywgaHR0cENsaWVudCwgaHR0cEJhY2tlbmQsIHJlbmRlcmVyRmFjdG9yeSkge1xuICAgIHRoaXMuX2FwcEJhc2UgPSBfYXBwQmFzZTtcbiAgICB0aGlzLl9sb2NhdGlvbiA9IF9sb2NhdGlvbjtcbiAgICB0aGlzLl9jb25maWcgPSBfY29uZmlnO1xuICAgIHRoaXMuX2h0dHAgPSBfY29uZmlnICYmICFfY29uZmlnLmJ5cGFzc0h0dHBDbGllbnRJbnRlcmNlcHRvckNoYWluID8gaHR0cENsaWVudCA6IG5ldyBIdHRwQ2xpZW50KGh0dHBCYWNrZW5kKTtcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcihudWxsLCBudWxsKTtcbiAgICB0aGlzLnNldEJhc2VVcmwoKTtcbiAgICBpZiAoIVNWR0NhY2hlU2VydmljZS5fY2FjaGUpIHtcbiAgICAgIFNWR0NhY2hlU2VydmljZS5fY2FjaGUgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIGlmICghU1ZHQ2FjaGVTZXJ2aWNlLl9pblByb2dyZXNzUmVxcykge1xuICAgICAgU1ZHQ2FjaGVTZXJ2aWNlLl9pblByb2dyZXNzUmVxcyA9IG5ldyBNYXAoKTtcbiAgICB9XG4gIH1cbiAgU1ZHQ2FjaGVTZXJ2aWNlLnByb3RvdHlwZS5nZXRTVkcgPSBmdW5jdGlvbiAodXJsLCByZXNvbHZlU1ZHVXJsLCBjYWNoZSkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgaWYgKGNhY2hlID09PSB2b2lkIDApIHtcbiAgICAgIGNhY2hlID0gdHJ1ZTtcbiAgICB9XG4gICAgdmFyIHN2Z1VybCA9IChyZXNvbHZlU1ZHVXJsID8gdGhpcy5nZXRBYnNvbHV0ZVVybCh1cmwpIDogdXJsKS5yZXBsYWNlKC8jLiskLywgJycpO1xuICAgIGlmIChjYWNoZSAmJiBTVkdDYWNoZVNlcnZpY2UuX2NhY2hlLmhhcyhzdmdVcmwpKSB7XG4gICAgICByZXR1cm4gb2YodGhpcy5fY2xvbmVTVkcoU1ZHQ2FjaGVTZXJ2aWNlLl9jYWNoZS5nZXQoc3ZnVXJsKSkpO1xuICAgIH1cbiAgICBpZiAoU1ZHQ2FjaGVTZXJ2aWNlLl9pblByb2dyZXNzUmVxcy5oYXMoc3ZnVXJsKSkge1xuICAgICAgcmV0dXJuIFNWR0NhY2hlU2VydmljZS5faW5Qcm9ncmVzc1JlcXMuZ2V0KHN2Z1VybCk7XG4gICAgfVxuICAgIHZhciByZXEgPSB0aGlzLl9odHRwLmdldChzdmdVcmwsIHtcbiAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnXG4gICAgfSkucGlwZSh0YXAoZnVuY3Rpb24gKCkge1xuICAgICAgU1ZHQ2FjaGVTZXJ2aWNlLl9pblByb2dyZXNzUmVxcy5kZWxldGUoc3ZnVXJsKTtcbiAgICB9KSwgY2F0Y2hFcnJvcihmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIFNWR0NhY2hlU2VydmljZS5faW5Qcm9ncmVzc1JlcXMuZGVsZXRlKHN2Z1VybCk7XG4gICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICB9KSwgc2hhcmUoKSwgbWFwKGZ1bmN0aW9uIChzdmdUZXh0KSB7XG4gICAgICB2YXIgc3ZnRWwgPSBfdGhpcy5fc3ZnRWxlbWVudEZyb21TdHJpbmcoc3ZnVGV4dCk7XG4gICAgICBTVkdDYWNoZVNlcnZpY2UuX2NhY2hlLnNldChzdmdVcmwsIHN2Z0VsKTtcbiAgICAgIHJldHVybiBfdGhpcy5fY2xvbmVTVkcoc3ZnRWwpO1xuICAgIH0pKTtcbiAgICBTVkdDYWNoZVNlcnZpY2UuX2luUHJvZ3Jlc3NSZXFzLnNldChzdmdVcmwsIHJlcSk7XG4gICAgcmV0dXJuIHJlcTtcbiAgfTtcbiAgU1ZHQ2FjaGVTZXJ2aWNlLnByb3RvdHlwZS5zZXRCYXNlVXJsID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl9jb25maWcpIHtcbiAgICAgIHRoaXMuX2Jhc2VVcmwgPSB0aGlzLl9jb25maWcuYmFzZVVybDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2FwcEJhc2UgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX2Jhc2VVcmwgPSB0aGlzLl9hcHBCYXNlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fbG9jYXRpb24gIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX2Jhc2VVcmwgPSB0aGlzLl9sb2NhdGlvbi5nZXRCYXNlSHJlZkZyb21ET00oKTtcbiAgICB9XG4gIH07XG4gIFNWR0NhY2hlU2VydmljZS5wcm90b3R5cGUuZ2V0QWJzb2x1dGVVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgaWYgKHRoaXMuX2Jhc2VVcmwgJiYgIS9eaHR0cHM/OlxcL1xcLy9pLnRlc3QodXJsKSkge1xuICAgICAgdXJsID0gdGhpcy5fYmFzZVVybCArIHVybDtcbiAgICAgIGlmICh1cmwuaW5kZXhPZignLy8nKSA9PT0gMCkge1xuICAgICAgICB1cmwgPSB1cmwuc3Vic3RyaW5nKDEpO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgYmFzZSA9IHRoaXMuX3JlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ0JBU0UnKTtcbiAgICBiYXNlLmhyZWYgPSB1cmw7XG4gICAgcmV0dXJuIGJhc2UuaHJlZjtcbiAgfTtcbiAgU1ZHQ2FjaGVTZXJ2aWNlLnByb3RvdHlwZS5fc3ZnRWxlbWVudEZyb21TdHJpbmcgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgdmFyIGRpdiA9IHRoaXMuX3JlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgIGRpdi5pbm5lckhUTUwgPSBzdHI7XG4gICAgdmFyIHN2ZyA9IGRpdi5xdWVyeVNlbGVjdG9yKCdzdmcnKTtcbiAgICBpZiAoIXN2Zykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBTVkcgZm91bmQgaW4gbG9hZGVkIGNvbnRlbnRzJyk7XG4gICAgfVxuICAgIHJldHVybiBzdmc7XG4gIH07XG4gIFNWR0NhY2hlU2VydmljZS5wcm90b3R5cGUuX2Nsb25lU1ZHID0gZnVuY3Rpb24gKHN2Zykge1xuICAgIHJldHVybiBzdmcuY2xvbmVOb2RlKHRydWUpO1xuICB9O1xuICBTVkdDYWNoZVNlcnZpY2UuybVmYWMgPSBmdW5jdGlvbiBTVkdDYWNoZVNlcnZpY2VfRmFjdG9yeSh0KSB7XG4gICAgcmV0dXJuIG5ldyAodCB8fCBTVkdDYWNoZVNlcnZpY2UpKGkwLsm1ybVpbmplY3QoQVBQX0JBU0VfSFJFRiwgOCksIGkwLsm1ybVpbmplY3QoaTEuUGxhdGZvcm1Mb2NhdGlvbiwgOCksIGkwLsm1ybVpbmplY3QoaTIuSW5saW5lU1ZHQ29uZmlnLCA4KSwgaTAuybXJtWluamVjdChpMy5IdHRwQ2xpZW50KSwgaTAuybXJtWluamVjdChpMy5IdHRwQmFja2VuZCksIGkwLsm1ybVpbmplY3QoaTAuUmVuZGVyZXJGYWN0b3J5MikpO1xuICB9O1xuICBTVkdDYWNoZVNlcnZpY2UuybVwcm92ID0gaTAuybXJtWRlZmluZUluamVjdGFibGUoe1xuICAgIHRva2VuOiBTVkdDYWNoZVNlcnZpY2UsXG4gICAgZmFjdG9yeTogU1ZHQ2FjaGVTZXJ2aWNlLsm1ZmFjLFxuICAgIHByb3ZpZGVkSW46ICdyb290J1xuICB9KTtcbiAgcmV0dXJuIFNWR0NhY2hlU2VydmljZTtcbn0oKTtcbmV4cG9ydCB7IFNWR0NhY2hlU2VydmljZSB9O1xuKGZ1bmN0aW9uICgpIHtcbiAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09IFwidW5kZWZpbmVkXCIgfHwgbmdEZXZNb2RlKSAmJiBpMC7JtXNldENsYXNzTWV0YWRhdGEoU1ZHQ2FjaGVTZXJ2aWNlLCBbe1xuICAgIHR5cGU6IEluamVjdGFibGUsXG4gICAgYXJnczogW3tcbiAgICAgIHByb3ZpZGVkSW46ICdyb290J1xuICAgIH1dXG4gIH1dLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFt7XG4gICAgICB0eXBlOiB1bmRlZmluZWQsXG4gICAgICBkZWNvcmF0b3JzOiBbe1xuICAgICAgICB0eXBlOiBPcHRpb25hbFxuICAgICAgfSwge1xuICAgICAgICB0eXBlOiBJbmplY3QsXG4gICAgICAgIGFyZ3M6IFtBUFBfQkFTRV9IUkVGXVxuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMS5QbGF0Zm9ybUxvY2F0aW9uLFxuICAgICAgZGVjb3JhdG9yczogW3tcbiAgICAgICAgdHlwZTogT3B0aW9uYWxcbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgdHlwZTogaTIuSW5saW5lU1ZHQ29uZmlnLFxuICAgICAgZGVjb3JhdG9yczogW3tcbiAgICAgICAgdHlwZTogT3B0aW9uYWxcbiAgICAgIH1dXG4gICAgfSwge1xuICAgICAgdHlwZTogaTMuSHR0cENsaWVudFxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkzLkh0dHBCYWNrZW5kXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuUmVuZGVyZXJGYWN0b3J5MlxuICAgIH1dO1xuICB9LCBudWxsKTtcbn0pKCk7IiwiZXhwb3J0IGZ1bmN0aW9uIGlzVXJsU3ltYm9sKHVybCkge1xuICByZXR1cm4gdXJsLmNoYXJBdCgwKSA9PT0gJyMnIHx8IHVybC5pbmRleE9mKCcuc3ZnIycpID4gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNTdmdTdXBwb3J0ZWQoKSB7XG4gIHJldHVybiB0eXBlb2YgU1ZHUmVjdCAhPT0gJ3VuZGVmaW5lZCc7XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3ltYm9sU3ZnKHJlbmRlcmVyLCBzdmcsIHN5bWJvbElkKSB7XG4gIHZhciBzeW1ib2wgPSBzdmcucXVlcnlTZWxlY3RvcihcIltpZD1cXFwiXCIuY29uY2F0KHN5bWJvbElkLCBcIlxcXCJdXCIpKTtcbiAgaWYgKCFzeW1ib2wpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJTeW1ib2wgXFxcIlwiLmNvbmNhdChzeW1ib2xJZCwgXCJcXFwiIG5vdCBmb3VuZFwiKSk7XG4gIH1cbiAgdmFyIGVsU3ZnID0gcmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc3ZnJywgJ3N2ZycpO1xuICByZW5kZXJlci5hcHBlbmRDaGlsZChlbFN2Zywgc3ltYm9sKTtcbiAgdmFyIGVsU3ZnVXNlID0gcmVuZGVyZXIuY3JlYXRlRWxlbWVudCgndXNlJywgJ3N2ZycpO1xuICByZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWxTdmdVc2UsICdocmVmJywgXCIjXCIuY29uY2F0KHN5bWJvbElkKSwgJ3hsaW5rJyk7XG4gIHJlbmRlcmVyLmFwcGVuZENoaWxkKGVsU3ZnLCBlbFN2Z1VzZSk7XG4gIHJldHVybiBlbFN2Zztcbn1cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXR0cnMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZWxBdHRyID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cnNbaV0pO1xuICAgIGlmIChlbEF0dHIpIHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJzW2ldKTtcbiAgICB9XG4gIH1cbiAgdmFyIGlubmVyRWxzID0gZWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnKicpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGlubmVyRWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgcmVtb3ZlQXR0cmlidXRlcyhpbm5lckVsc1tpXSwgYXR0cnMpO1xuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0QXR0cmlidXRlcyhlbGVtZW50LCBhdHRycykge1xuICBmb3IgKHZhciBhdHRyIGluIGF0dHJzKSB7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgYXR0cnNbYXR0cl0pO1xuICB9XG59IiwiaW1wb3J0IHsgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBJbnB1dCwgT3B0aW9uYWwsIE91dHB1dCwgUExBVEZPUk1fSUQsIFJlbmRlcmVyMiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIsIGlzUGxhdGZvcm1TZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5saW5lU1ZHQ29tcG9uZW50IH0gZnJvbSAnLi9pbmxpbmUtc3ZnLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTVkdDYWNoZVNlcnZpY2UgfSBmcm9tICcuL3N2Zy1jYWNoZS5zZXJ2aWNlJztcbmltcG9ydCB7IElubGluZVNWR1NlcnZpY2UgfSBmcm9tICcuL2lubGluZS1zdmcuc2VydmljZSc7XG5pbXBvcnQgeyBJbmxpbmVTVkdDb25maWcgfSBmcm9tICcuL2lubGluZS1zdmcuY29uZmlnJztcbmltcG9ydCAqIGFzIFN2Z1V0aWwgZnJvbSAnLi9zdmctdXRpbCc7XG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgaTEgZnJvbSBcIi4vc3ZnLWNhY2hlLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIGkyIGZyb20gXCIuL2lubGluZS1zdmcuc2VydmljZVwiO1xuaW1wb3J0ICogYXMgaTMgZnJvbSBcIi4vaW5saW5lLXN2Zy5jb25maWdcIjtcbnZhciBJbmxpbmVTVkdEaXJlY3RpdmUgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIElubGluZVNWR0RpcmVjdGl2ZShfZWwsIF92aWV3Q29udGFpbmVyUmVmLCBfcmVzb2x2ZXIsIF9zdmdDYWNoZSwgX3JlbmRlcmVyLCBfaW5saW5lU1ZHU2VydmljZSwgX2NvbmZpZywgcGxhdGZvcm1JZCkge1xuICAgIHRoaXMuX2VsID0gX2VsO1xuICAgIHRoaXMuX3ZpZXdDb250YWluZXJSZWYgPSBfdmlld0NvbnRhaW5lclJlZjtcbiAgICB0aGlzLl9yZXNvbHZlciA9IF9yZXNvbHZlcjtcbiAgICB0aGlzLl9zdmdDYWNoZSA9IF9zdmdDYWNoZTtcbiAgICB0aGlzLl9yZW5kZXJlciA9IF9yZW5kZXJlcjtcbiAgICB0aGlzLl9pbmxpbmVTVkdTZXJ2aWNlID0gX2lubGluZVNWR1NlcnZpY2U7XG4gICAgdGhpcy5fY29uZmlnID0gX2NvbmZpZztcbiAgICB0aGlzLnBsYXRmb3JtSWQgPSBwbGF0Zm9ybUlkO1xuICAgIHRoaXMucmVzb2x2ZVNWR1VybCA9IHRydWU7XG4gICAgdGhpcy5yZXBsYWNlQ29udGVudHMgPSB0cnVlO1xuICAgIHRoaXMucHJlcGVuZCA9IGZhbHNlO1xuICAgIHRoaXMuaW5qZWN0Q29tcG9uZW50ID0gZmFsc2U7XG4gICAgdGhpcy5jYWNoZVNWRyA9IHRydWU7XG4gICAgdGhpcy5mb3JjZUV2YWxTdHlsZXMgPSBmYWxzZTtcbiAgICB0aGlzLmV2YWxTY3JpcHRzID0gXCJhbHdheXNcIjtcbiAgICB0aGlzLm9uU1ZHSW5zZXJ0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgdGhpcy5vblNWR0ZhaWxlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICB0aGlzLl9zdXBwb3J0c1NWRyA9IFN2Z1V0aWwuaXNTdmdTdXBwb3J0ZWQoKTtcbiAgICBpZiAoIWlzUGxhdGZvcm1TZXJ2ZXIodGhpcy5wbGF0Zm9ybUlkKSAmJiAhdGhpcy5fc3VwcG9ydHNTVkcpIHtcbiAgICAgIHRoaXMuX2ZhaWwoJ0VtYmVkIFNWRyBhcmUgbm90IHN1cHBvcnRlZCBieSB0aGlzIGJyb3dzZXInKTtcbiAgICB9XG4gIH1cbiAgSW5saW5lU1ZHRGlyZWN0aXZlLnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuX2lzVmFsaWRQbGF0Zm9ybSgpIHx8IHRoaXMuX2lzU1NSRGlzYWJsZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9pbnNlcnRTVkcoKTtcbiAgfTtcbiAgSW5saW5lU1ZHRGlyZWN0aXZlLnByb3RvdHlwZS5uZ09uQ2hhbmdlcyA9IGZ1bmN0aW9uIChjaGFuZ2VzKSB7XG4gICAgaWYgKCF0aGlzLl9pc1ZhbGlkUGxhdGZvcm0oKSB8fCB0aGlzLl9pc1NTUkRpc2FibGVkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHNldFNWR0F0dHJpYnV0ZXNDaGFuZ2VkID0gQm9vbGVhbihjaGFuZ2VzWydzZXRTVkdBdHRyaWJ1dGVzJ10pO1xuICAgIGlmIChjaGFuZ2VzWydpbmxpbmVTVkcnXSB8fCBzZXRTVkdBdHRyaWJ1dGVzQ2hhbmdlZCkge1xuICAgICAgdGhpcy5faW5zZXJ0U1ZHKHNldFNWR0F0dHJpYnV0ZXNDaGFuZ2VkKTtcbiAgICB9XG4gIH07XG4gIElubGluZVNWR0RpcmVjdGl2ZS5wcm90b3R5cGUubmdPbkRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuX3N1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9O1xuICBJbmxpbmVTVkdEaXJlY3RpdmUucHJvdG90eXBlLl9pbnNlcnRTVkcgPSBmdW5jdGlvbiAoZm9yY2UpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIGlmIChmb3JjZSA9PT0gdm9pZCAwKSB7XG4gICAgICBmb3JjZSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIWlzUGxhdGZvcm1TZXJ2ZXIodGhpcy5wbGF0Zm9ybUlkKSAmJiAhdGhpcy5fc3VwcG9ydHNTVkcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmlubGluZVNWRykge1xuICAgICAgdGhpcy5fZmFpbCgnTm8gVVJMIHBhc3NlZCB0byBbaW5saW5lU1ZHXScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWZvcmNlICYmIHRoaXMuaW5saW5lU1ZHID09PSB0aGlzLl9wcmV2VXJsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3ByZXZVcmwgPSB0aGlzLmlubGluZVNWRztcbiAgICB0aGlzLl9zdWJzY3JpcHRpb24gPSB0aGlzLl9zdmdDYWNoZS5nZXRTVkcodGhpcy5pbmxpbmVTVkcsIHRoaXMucmVzb2x2ZVNWR1VybCwgdGhpcy5jYWNoZVNWRykuc3Vic2NyaWJlKGZ1bmN0aW9uIChzdmcpIHtcbiAgICAgIGlmIChTdmdVdGlsLmlzVXJsU3ltYm9sKF90aGlzLmlubGluZVNWRykpIHtcbiAgICAgICAgdmFyIHN5bWJvbElkID0gX3RoaXMuaW5saW5lU1ZHLnNwbGl0KCcjJylbMV07XG4gICAgICAgIHN2ZyA9IFN2Z1V0aWwuY3JlYXRlU3ltYm9sU3ZnKF90aGlzLl9yZW5kZXJlciwgc3ZnLCBzeW1ib2xJZCk7XG4gICAgICB9XG4gICAgICBfdGhpcy5fcHJvY2Vzc1N2ZyhzdmcpO1xuICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIF90aGlzLl9mYWlsKGVycik7XG4gICAgfSk7XG4gIH07XG4gIElubGluZVNWR0RpcmVjdGl2ZS5wcm90b3R5cGUuX3Byb2Nlc3NTdmcgPSBmdW5jdGlvbiAoc3ZnKSB7XG4gICAgaWYgKCFzdmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMucmVtb3ZlU1ZHQXR0cmlidXRlcyAmJiBpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICBTdmdVdGlsLnJlbW92ZUF0dHJpYnV0ZXMoc3ZnLCB0aGlzLnJlbW92ZVNWR0F0dHJpYnV0ZXMpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZXRTVkdBdHRyaWJ1dGVzKSB7XG4gICAgICBTdmdVdGlsLnNldEF0dHJpYnV0ZXMoc3ZnLCB0aGlzLnNldFNWR0F0dHJpYnV0ZXMpO1xuICAgIH1cbiAgICBpZiAodGhpcy5vblNWR0xvYWRlZCkge1xuICAgICAgc3ZnID0gdGhpcy5vblNWR0xvYWRlZChzdmcsIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cbiAgICB0aGlzLl9pbnNlcnRFbChzdmcpO1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICB0aGlzLl9pbmxpbmVTVkdTZXJ2aWNlLmV2YWxTY3JpcHRzKHN2ZywgdGhpcy5pbmxpbmVTVkcsIHRoaXMuZXZhbFNjcmlwdHMpO1xuICAgIH1cbiAgICBpZiAodGhpcy5mb3JjZUV2YWxTdHlsZXMpIHtcbiAgICAgIHZhciBzdHlsZVRhZ3MgPSBzdmcucXVlcnlTZWxlY3RvckFsbCgnc3R5bGUnKTtcbiAgICAgIEFycmF5LmZyb20oc3R5bGVUYWdzKS5mb3JFYWNoKGZ1bmN0aW9uICh0YWcpIHtcbiAgICAgICAgcmV0dXJuIHRhZy50ZXh0Q29udGVudCArPSAnJztcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLm9uU1ZHSW5zZXJ0ZWQuZW1pdChzdmcpO1xuICB9O1xuICBJbmxpbmVTVkdEaXJlY3RpdmUucHJvdG90eXBlLl9pbnNlcnRFbCA9IGZ1bmN0aW9uIChlbCkge1xuICAgIGlmICh0aGlzLmluamVjdENvbXBvbmVudCkge1xuICAgICAgaWYgKCF0aGlzLl9zdmdDb21wKSB7XG4gICAgICAgIHZhciBmYWN0b3J5ID0gdGhpcy5fcmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoSW5saW5lU1ZHQ29tcG9uZW50KTtcbiAgICAgICAgdGhpcy5fc3ZnQ29tcCA9IHRoaXMuX3ZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnkpO1xuICAgICAgfVxuICAgICAgdGhpcy5fc3ZnQ29tcC5pbnN0YW5jZS5jb250ZXh0ID0gdGhpcztcbiAgICAgIHRoaXMuX3N2Z0NvbXAuaW5zdGFuY2UucmVwbGFjZUNvbnRlbnRzID0gdGhpcy5yZXBsYWNlQ29udGVudHM7XG4gICAgICB0aGlzLl9zdmdDb21wLmluc3RhbmNlLnByZXBlbmQgPSB0aGlzLnByZXBlbmQ7XG4gICAgICB0aGlzLl9zdmdDb21wLmluc3RhbmNlLmNvbnRlbnQgPSBlbDtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3N2Z0NvbXAuaW5qZWN0b3IuZ2V0KElubGluZVNWR0NvbXBvbmVudCkuX2VsLm5hdGl2ZUVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9pbmxpbmVTVkdTZXJ2aWNlLmluc2VydEVsKHRoaXMsIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsIGVsLCB0aGlzLnJlcGxhY2VDb250ZW50cywgdGhpcy5wcmVwZW5kKTtcbiAgICB9XG4gIH07XG4gIElubGluZVNWR0RpcmVjdGl2ZS5wcm90b3R5cGUuX2ZhaWwgPSBmdW5jdGlvbiAobXNnKSB7XG4gICAgdGhpcy5vblNWR0ZhaWxlZC5lbWl0KG1zZyk7XG4gICAgaWYgKHRoaXMuZmFsbGJhY2tJbWdVcmwpIHtcbiAgICAgIHZhciBlbEltZyA9IHRoaXMuX3JlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ0lNRycpO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKGVsSW1nLCAnc3JjJywgdGhpcy5mYWxsYmFja0ltZ1VybCk7XG4gICAgICB0aGlzLl9pbnNlcnRFbChlbEltZyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmZhbGxiYWNrU1ZHICYmIHRoaXMuZmFsbGJhY2tTVkcgIT09IHRoaXMuaW5saW5lU1ZHKSB7XG4gICAgICB0aGlzLmlubGluZVNWRyA9IHRoaXMuZmFsbGJhY2tTVkc7XG4gICAgICB0aGlzLl9pbnNlcnRTVkcoKTtcbiAgICB9XG4gIH07XG4gIElubGluZVNWR0RpcmVjdGl2ZS5wcm90b3R5cGUuX2lzVmFsaWRQbGF0Zm9ybSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gaXNQbGF0Zm9ybVNlcnZlcih0aGlzLnBsYXRmb3JtSWQpIHx8IGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCk7XG4gIH07XG4gIElubGluZVNWR0RpcmVjdGl2ZS5wcm90b3R5cGUuX2lzU1NSRGlzYWJsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGlzUGxhdGZvcm1TZXJ2ZXIodGhpcy5wbGF0Zm9ybUlkKSAmJiB0aGlzLl9jb25maWcgJiYgdGhpcy5fY29uZmlnLmNsaWVudE9ubHk7XG4gIH07XG4gIElubGluZVNWR0RpcmVjdGl2ZS7JtWZhYyA9IGZ1bmN0aW9uIElubGluZVNWR0RpcmVjdGl2ZV9GYWN0b3J5KHQpIHtcbiAgICByZXR1cm4gbmV3ICh0IHx8IElubGluZVNWR0RpcmVjdGl2ZSkoaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5FbGVtZW50UmVmKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5WaWV3Q29udGFpbmVyUmVmKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMC5Db21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KGkxLlNWR0NhY2hlU2VydmljZSksIGkwLsm1ybVkaXJlY3RpdmVJbmplY3QoaTAuUmVuZGVyZXIyKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMi5JbmxpbmVTVkdTZXJ2aWNlKSwgaTAuybXJtWRpcmVjdGl2ZUluamVjdChpMy5JbmxpbmVTVkdDb25maWcsIDgpLCBpMC7Jtcm1ZGlyZWN0aXZlSW5qZWN0KFBMQVRGT1JNX0lEKSk7XG4gIH07XG4gIElubGluZVNWR0RpcmVjdGl2ZS7JtWRpciA9IGkwLsm1ybVkZWZpbmVEaXJlY3RpdmUoe1xuICAgIHR5cGU6IElubGluZVNWR0RpcmVjdGl2ZSxcbiAgICBzZWxlY3RvcnM6IFtbXCJcIiwgXCJpbmxpbmVTVkdcIiwgXCJcIl1dLFxuICAgIGlucHV0czoge1xuICAgICAgaW5saW5lU1ZHOiBcImlubGluZVNWR1wiLFxuICAgICAgcmVzb2x2ZVNWR1VybDogXCJyZXNvbHZlU1ZHVXJsXCIsXG4gICAgICByZXBsYWNlQ29udGVudHM6IFwicmVwbGFjZUNvbnRlbnRzXCIsXG4gICAgICBwcmVwZW5kOiBcInByZXBlbmRcIixcbiAgICAgIGluamVjdENvbXBvbmVudDogXCJpbmplY3RDb21wb25lbnRcIixcbiAgICAgIGNhY2hlU1ZHOiBcImNhY2hlU1ZHXCIsXG4gICAgICBzZXRTVkdBdHRyaWJ1dGVzOiBcInNldFNWR0F0dHJpYnV0ZXNcIixcbiAgICAgIHJlbW92ZVNWR0F0dHJpYnV0ZXM6IFwicmVtb3ZlU1ZHQXR0cmlidXRlc1wiLFxuICAgICAgZm9yY2VFdmFsU3R5bGVzOiBcImZvcmNlRXZhbFN0eWxlc1wiLFxuICAgICAgZXZhbFNjcmlwdHM6IFwiZXZhbFNjcmlwdHNcIixcbiAgICAgIGZhbGxiYWNrSW1nVXJsOiBcImZhbGxiYWNrSW1nVXJsXCIsXG4gICAgICBmYWxsYmFja1NWRzogXCJmYWxsYmFja1NWR1wiLFxuICAgICAgb25TVkdMb2FkZWQ6IFwib25TVkdMb2FkZWRcIlxuICAgIH0sXG4gICAgb3V0cHV0czoge1xuICAgICAgb25TVkdJbnNlcnRlZDogXCJvblNWR0luc2VydGVkXCIsXG4gICAgICBvblNWR0ZhaWxlZDogXCJvblNWR0ZhaWxlZFwiXG4gICAgfSxcbiAgICBmZWF0dXJlczogW2kwLsm1ybVQcm92aWRlcnNGZWF0dXJlKFtTVkdDYWNoZVNlcnZpY2VdKSwgaTAuybXJtU5nT25DaGFuZ2VzRmVhdHVyZV1cbiAgfSk7XG4gIHJldHVybiBJbmxpbmVTVkdEaXJlY3RpdmU7XG59KCk7XG5leHBvcnQgeyBJbmxpbmVTVkdEaXJlY3RpdmUgfTtcbihmdW5jdGlvbiAoKSB7XG4gICh0eXBlb2YgbmdEZXZNb2RlID09PSBcInVuZGVmaW5lZFwiIHx8IG5nRGV2TW9kZSkgJiYgaTAuybVzZXRDbGFzc01ldGFkYXRhKElubGluZVNWR0RpcmVjdGl2ZSwgW3tcbiAgICB0eXBlOiBEaXJlY3RpdmUsXG4gICAgYXJnczogW3tcbiAgICAgIHNlbGVjdG9yOiAnW2lubGluZVNWR10nLFxuICAgICAgcHJvdmlkZXJzOiBbU1ZHQ2FjaGVTZXJ2aWNlXVxuICAgIH1dXG4gIH1dLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFt7XG4gICAgICB0eXBlOiBpMC5FbGVtZW50UmVmXG4gICAgfSwge1xuICAgICAgdHlwZTogaTAuVmlld0NvbnRhaW5lclJlZlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLkNvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkxLlNWR0NhY2hlU2VydmljZVxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkwLlJlbmRlcmVyMlxuICAgIH0sIHtcbiAgICAgIHR5cGU6IGkyLklubGluZVNWR1NlcnZpY2VcbiAgICB9LCB7XG4gICAgICB0eXBlOiBpMy5JbmxpbmVTVkdDb25maWcsXG4gICAgICBkZWNvcmF0b3JzOiBbe1xuICAgICAgICB0eXBlOiBPcHRpb25hbFxuICAgICAgfV1cbiAgICB9LCB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICBkZWNvcmF0b3JzOiBbe1xuICAgICAgICB0eXBlOiBJbmplY3QsXG4gICAgICAgIGFyZ3M6IFtQTEFURk9STV9JRF1cbiAgICAgIH1dXG4gICAgfV07XG4gIH0sIHtcbiAgICBpbmxpbmVTVkc6IFt7XG4gICAgICB0eXBlOiBJbnB1dFxuICAgIH1dLFxuICAgIHJlc29sdmVTVkdVcmw6IFt7XG4gICAgICB0eXBlOiBJbnB1dFxuICAgIH1dLFxuICAgIHJlcGxhY2VDb250ZW50czogW3tcbiAgICAgIHR5cGU6IElucHV0XG4gICAgfV0sXG4gICAgcHJlcGVuZDogW3tcbiAgICAgIHR5cGU6IElucHV0XG4gICAgfV0sXG4gICAgaW5qZWN0Q29tcG9uZW50OiBbe1xuICAgICAgdHlwZTogSW5wdXRcbiAgICB9XSxcbiAgICBjYWNoZVNWRzogW3tcbiAgICAgIHR5cGU6IElucHV0XG4gICAgfV0sXG4gICAgc2V0U1ZHQXR0cmlidXRlczogW3tcbiAgICAgIHR5cGU6IElucHV0XG4gICAgfV0sXG4gICAgcmVtb3ZlU1ZHQXR0cmlidXRlczogW3tcbiAgICAgIHR5cGU6IElucHV0XG4gICAgfV0sXG4gICAgZm9yY2VFdmFsU3R5bGVzOiBbe1xuICAgICAgdHlwZTogSW5wdXRcbiAgICB9XSxcbiAgICBldmFsU2NyaXB0czogW3tcbiAgICAgIHR5cGU6IElucHV0XG4gICAgfV0sXG4gICAgZmFsbGJhY2tJbWdVcmw6IFt7XG4gICAgICB0eXBlOiBJbnB1dFxuICAgIH1dLFxuICAgIGZhbGxiYWNrU1ZHOiBbe1xuICAgICAgdHlwZTogSW5wdXRcbiAgICB9XSxcbiAgICBvblNWR0xvYWRlZDogW3tcbiAgICAgIHR5cGU6IElucHV0XG4gICAgfV0sXG4gICAgb25TVkdJbnNlcnRlZDogW3tcbiAgICAgIHR5cGU6IE91dHB1dFxuICAgIH1dLFxuICAgIG9uU1ZHRmFpbGVkOiBbe1xuICAgICAgdHlwZTogT3V0cHV0XG4gICAgfV1cbiAgfSk7XG59KSgpOyIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbmxpbmVTVkdDb21wb25lbnQgfSBmcm9tICcuL2lubGluZS1zdmcuY29tcG9uZW50JztcbmltcG9ydCB7IElubGluZVNWR0NvbmZpZyB9IGZyb20gJy4vaW5saW5lLXN2Zy5jb25maWcnO1xuaW1wb3J0IHsgSW5saW5lU1ZHRGlyZWN0aXZlIH0gZnJvbSAnLi9pbmxpbmUtc3ZnLmRpcmVjdGl2ZSc7XG5pbXBvcnQgKiBhcyBpMCBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xudmFyIElubGluZVNWR01vZHVsZSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gSW5saW5lU1ZHTW9kdWxlKCkge31cbiAgSW5saW5lU1ZHTW9kdWxlLmZvclJvb3QgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBJbmxpbmVTVkdNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFt7XG4gICAgICAgIHByb3ZpZGU6IElubGluZVNWR0NvbmZpZyxcbiAgICAgICAgdXNlVmFsdWU6IGNvbmZpZ1xuICAgICAgfV1cbiAgICB9O1xuICB9O1xuICBJbmxpbmVTVkdNb2R1bGUuybVmYWMgPSBmdW5jdGlvbiBJbmxpbmVTVkdNb2R1bGVfRmFjdG9yeSh0KSB7XG4gICAgcmV0dXJuIG5ldyAodCB8fCBJbmxpbmVTVkdNb2R1bGUpKCk7XG4gIH07XG4gIElubGluZVNWR01vZHVsZS7JtW1vZCA9IGkwLsm1ybVkZWZpbmVOZ01vZHVsZSh7XG4gICAgdHlwZTogSW5saW5lU1ZHTW9kdWxlXG4gIH0pO1xuICBJbmxpbmVTVkdNb2R1bGUuybVpbmogPSBpMC7Jtcm1ZGVmaW5lSW5qZWN0b3Ioe30pO1xuICByZXR1cm4gSW5saW5lU1ZHTW9kdWxlO1xufSgpO1xuZXhwb3J0IHsgSW5saW5lU1ZHTW9kdWxlIH07XG4oZnVuY3Rpb24gKCkge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShJbmxpbmVTVkdNb2R1bGUsIFt7XG4gICAgdHlwZTogTmdNb2R1bGUsXG4gICAgYXJnczogW3tcbiAgICAgIGRlY2xhcmF0aW9uczogW0lubGluZVNWR0RpcmVjdGl2ZSwgSW5saW5lU1ZHQ29tcG9uZW50XSxcbiAgICAgIGV4cG9ydHM6IFtJbmxpbmVTVkdEaXJlY3RpdmVdLFxuICAgICAgZW50cnlDb21wb25lbnRzOiBbSW5saW5lU1ZHQ29tcG9uZW50XVxuICAgIH1dXG4gIH1dLCBudWxsLCBudWxsKTtcbn0pKCk7XG4oZnVuY3Rpb24gKCkge1xuICAodHlwZW9mIG5nSml0TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0ppdE1vZGUpICYmIGkwLsm1ybVzZXROZ01vZHVsZVNjb3BlKElubGluZVNWR01vZHVsZSwge1xuICAgIGRlY2xhcmF0aW9uczogW0lubGluZVNWR0RpcmVjdGl2ZSwgSW5saW5lU1ZHQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbSW5saW5lU1ZHRGlyZWN0aXZlXVxuICB9KTtcbn0pKCk7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFJLG1CQUFtQixXQUFZO0FBQ2pDLFdBQVNBLGtCQUFpQixpQkFBaUI7QUFDekMsU0FBSyxjQUFjLENBQUM7QUFDcEIsU0FBSyxZQUFZLGdCQUFnQixlQUFlLE1BQU0sSUFBSTtBQUFBLEVBQzVEO0FBQ0EsRUFBQUEsa0JBQWlCLFVBQVUsV0FBVyxTQUFVLEtBQUssVUFBVSxTQUFTLGlCQUFpQixTQUFTO0FBQ2hHLFFBQUksbUJBQW1CLENBQUMsU0FBUztBQUMvQixVQUFJLGFBQWEsSUFBSSxZQUFZLElBQUksU0FBUztBQUM5QyxVQUFJLFlBQVk7QUFDZCxhQUFLLFVBQVUsWUFBWSxZQUFZLElBQUksUUFBUTtBQUFBLE1BQ3JEO0FBQ0EsZUFBUyxZQUFZO0FBQUEsSUFDdkI7QUFDQSxRQUFJLFNBQVM7QUFDWCxXQUFLLFVBQVUsYUFBYSxVQUFVLFNBQVMsU0FBUyxVQUFVO0FBQUEsSUFDcEUsT0FBTztBQUNMLFdBQUssVUFBVSxZQUFZLFVBQVUsT0FBTztBQUFBLElBQzlDO0FBQ0EsUUFBSSxRQUFRLGFBQWEsT0FBTztBQUM5QixVQUFJLFdBQVc7QUFBQSxJQUNqQjtBQUFBLEVBQ0Y7QUFDQSxFQUFBQSxrQkFBaUIsVUFBVSxjQUFjLFNBQVUsS0FBSyxLQUFLLFVBQVU7QUFDckUsUUFBSSxVQUFVLElBQUksaUJBQWlCLFFBQVE7QUFDM0MsUUFBSSxnQkFBZ0IsQ0FBQztBQUNyQixhQUFTLElBQUksR0FBRyxJQUFJLFFBQVEsUUFBUSxLQUFLO0FBQ3ZDLFVBQUksYUFBYSxRQUFR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LENBQUM7QUFBQSxJQUNELHFCQUFxQixDQUFDO0FBQUEsTUFDcEIsTUFBTTtBQUFBLElBQ1IsQ0FBQztBQUFBLElBQ0QsaUJBQWlCLENBQUM7QUFBQSxNQUNoQixNQUFNO0FBQUEsSUFDUixDQUFDO0FBQUEsSUFDRCxhQUFhLENBQUM7QUFBQSxNQUNaLE1BQU07QUFBQSxJQUNSLENBQUM7QUFBQSxJQUNELGdCQUFnQixDQUFDO0FBQUEsTUFDZixNQUFNO0FBQUEsSUFDUixDQUFDO0FBQUEsSUFDRCxhQUFhLENBQUM7QUFBQSxNQUNaLE1BQU07QUFBQSxJQUNSLENBQUM7QUFBQSxJQUNELGFBQWEsQ0FBQztBQUFBLE1BQ1osTUFBTTtBQUFBLElBQ1IsQ0FBQztBQUFBLElBQ0QsZUFBZSxDQUFDO0FBQUEsTUFDZCxNQUFNO0FBQUEsSUFDUixDQUFDO0FBQUEsSUFDRCxhQUFhLENBQUM7QUFBQSxNQUNaLE1BQU07QUFBQSxJQUNSLENBQUM7QUFBQSxFQUNILENBQUM7QUFDSCxHQUFHOzs7QUNsUEgsSUFBSSxrQkFBa0IsV0FBWTtBQUNoQyxXQUFTQyxtQkFBa0I7QUFBQSxFQUFDO0FBQzVCLEVBQUFBLGlCQUFnQixVQUFVLFNBQVUsUUFBUTtBQUMxQyxXQUFPO0FBQUEsTUFDTCxVQUFVQTtBQUFBLE1BQ1YsV0FBVyxDQUFDO0FBQUEsUUFDVixTQUFTO0FBQUEsUUFDVCxVQUFVO0FBQUEsTUFDWixDQUFDO0FBQUEsSUFDSDtBQUFBLEVBQ0Y7QUFDQSxFQUFBQSxpQkFBZ0IsWUFBTyxTQUFTLHdCQUF3QixHQUFHO0FBQ3pELFdBQU8sS0FBSyxLQUFLQSxrQkFBaUI7QUFBQSxFQUNwQztBQUNBLEVBQUFBLGlCQUFnQixZQUFVLDJCQUFpQjtBQUFBLElBQ3pDLE1BQU1BO0FBQUEsRUFDUixDQUFDO0FBQ0QsRUFBQUEsaUJBQWdCLFlBQVUsMkJBQWlCLENBQUMsQ0FBQztBQUM3QyxTQUFPQTtBQUNULEVBQUU7Q0FFRCxXQUFZO0FBQ1gsR0FBQyxPQUFPLGNBQWMsZUFBZSxjQUFpQixpQkFBa0IsaUJBQWlCLENBQUM7QUFBQSxJQUN4RixNQUFNO0FBQUEsSUFDTixNQUFNLENBQUM7QUFBQSxNQUNMLGNBQWMsQ0FBQyxvQkFBb0Isa0JBQWtCO0FBQUEsTUFDckQsU0FBUyxDQUFDLGtCQUFrQjtBQUFBLE1BQzVCLGlCQUFpQixDQUFDLGtCQUFrQjtBQUFBLElBQ3RDLENBQUM7QUFBQSxFQUNILENBQUMsR0FBRyxNQUFNLElBQUk7QUFDaEIsR0FBRzsiLCJuYW1lcyI6WyJJbmxpbmVTVkdTZXJ2aWNlIiwiSW5saW5lU1ZHQ29tcG9uZW50IiwiSW5saW5lU1ZHQ29uZmlnIiwiU1ZHQ2FjaGVTZXJ2aWNlIiwiSW5saW5lU1ZHRGlyZWN0aXZlIiwiSW5saW5lU1ZHTW9kdWxlIl0sInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswLDEsMiwzLDQsNSw2XX0=
