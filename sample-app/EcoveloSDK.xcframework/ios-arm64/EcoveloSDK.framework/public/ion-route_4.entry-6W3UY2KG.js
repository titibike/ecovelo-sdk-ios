import {
  createColorClasses,
  openURL
} from "./chunk-5VP4V3BN.js";
import {
  getIonMode
} from "./chunk-TXLH22R2.js";
import {
  componentOnReady,
  debounce
} from "./chunk-RZR7LWTQ.js";
import {
  Host,
  createEvent,
  getElement,
  h,
  printIonError,
  printIonWarning,
  registerInstance
} from "./chunk-BFPTXCSH.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// node_modules/@ionic/core/dist/esm/ion-route_4.entry.js
var Route = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionRouteDataChanged = createEvent(this, "ionRouteDataChanged", 7);
    this.url = "";
  }
  onUpdate(newValue) {
    this.ionRouteDataChanged.emit(newValue);
  }
  onComponentProps(newValue, oldValue) {
    if (newValue === oldValue) {
      return;
    }
    const keys1 = newValue ? Object.keys(newValue) : [];
    const keys2 = oldValue ? Object.keys(oldValue) : [];
    if (keys1.length !== keys2.length) {
      this.onUpdate(newValue);
      return;
    }
    for (const key of keys1) {
      if (newValue[key] !== oldValue[key]) {
        this.onUpdate(newValue);
        return;
      }
    }
  }
  connectedCallback() {
    this.ionRouteDataChanged.emit();
  }
  static get watchers() {
    return {
      "url": ["onUpdate"],
      "component": ["onUpdate"],
      "componentProps": ["onComponentProps"]
    };
  }
};
var RouteRedirect = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionRouteRedirectChanged = createEvent(this, "ionRouteRedirectChanged", 7);
  }
  propDidChange() {
    this.ionRouteRedirectChanged.emit();
  }
  connectedCallback() {
    this.ionRouteRedirectChanged.emit();
  }
  static get watchers() {
    return {
      "from": ["propDidChange"],
      "to": ["propDidChange"]
    };
  }
};
var ROUTER_INTENT_NONE = "root";
var ROUTER_INTENT_FORWARD = "forward";
var ROUTER_INTENT_BACK = "back";
var generatePath = (segments) => {
  const path = segments.filter((s) => s.length > 0).join("/");
  return "/" + path;
};
var generateUrl = (segments, useHash, queryString) => {
  let url = generatePath(segments);
  if (useHash) {
    url = "#" + url;
  }
  if (queryString !== void 0) {
    url += "?" + queryString;
  }
  return url;
};
var writeSegments = (history, root, useHash, segments, direction, state, queryString) => {
  const url = generateUrl([...parsePath(root).segments, ...segments], useHash, queryString);
  if (direction === ROUTER_INTENT_FORWARD) {
    history.pushState(state, "", url);
  } else {
    history.replaceState(state, "", url);
  }
};
var chainToSegments = (chain) => {
  const segments = [];
  for (const route of chain) {
    for (const segment of route.segments) {
      if (segment[0] === ":") {
        const param = route.params && route.params[segment.slice(1)];
        if (!param) {
          return null;
        }
        segments.push(param);
      } else if (segment !== "") {
        segments.push(segment);
      }
    }
  }
  return segments;
};
var removePrefix = (prefix, segments) => {
  if (prefix.length > segments.length) {
    return null;
  }
  if (prefix.length <= 1 && prefix[0] === "") {
    return segments;
  }
  for (let i = 0; i < prefix.length; i++) {
    if (prefix[i] !== segments[i]) {
      return null;
    }
  }
  if (segments.length === prefix.length) {
    return [""];
  }
  return segments.slice(prefix.length);
};
var readSegments = (loc, root, useHash) => {
  const prefix = parsePath(root).segments;
  const pathname = useHash ? loc.hash.slice(1) : loc.pathname;
  const segments = parsePath(pathname).segments;
  return removePrefix(prefix, segments);
};
var parsePath = (path) => {
  let segments = [""];
  let queryString;
  if (path != null) {
    const qsStart = path.indexOf("?");
    if (qsStart > -1) {
      queryString = path.substring(qsStart + 1);
      path = path.substring(0, qsStart);
    }
    segments = path.split("/").map((s) => s.trim()).filter((s) => s.length > 0);
    if (segments.length === 0) {
      segments = [""];
    }
  }
  return {
    segments,
    queryString
  };
};
var printRoutes = (routes) => {
  console.group(`[ion-core] ROUTES[${routes.length}]`);
  for (const chain of routes) {
    const segments = [];
    chain.forEach((r) => segments.push(...r.segments));
    const ids = chain.map((r) => r.id);
    console.debug(`%c ${generatePath(segments)}`, "font-weight: bold; padding-left: 20px", "=>	", `(${ids.join(", ")})`);
  }
  console.groupEnd();
};
var printRedirects = (redirects) => {
  console.group(`[ion-core] REDIRECTS[${redirects.length}]`);
  for (const redirect of redirects) {
    if (redirect.to) {
      console.debug("FROM: ", `$c ${generatePath(redirect.from)}`, "font-weight: bold", " TO: ", `$c ${generatePath(redirect.to.segments)}`, "font-weight: bold");
    }
  }
  console.groupEnd();
};
var writeNavState = (root, chain, direction, index, changed = false, animation) => __async(null, null, function* () {
  try {
    const outlet = searchNavNode(root);
    if (index >= chain.length || !outlet) {
      return changed;
    }
    yield new Promise((resolve) => componentOnReady(outlet, resolve));
    const route = chain[index];
    const result = yield outlet.setRouteId(route.id, route.params, direction, animation);
    if (result.changed) {
      direction = ROUTER_INTENT_NONE;
      changed = true;
    }
    changed = yield writeNavState(result.element, chain, direction, index + 1, changed, animation);
    if (result.markVisible) {
      yield result.markVisible();
    }
    return changed;
  } catch (e) {
    printIonError("[ion-router] - Exception in writeNavState:", e);
    return false;
  }
});
var readNavState = (root) => __async(null, null, function* () {
  const ids = [];
  let outlet;
  let node = root;
  while (outlet = searchNavNode(node)) {
    const id = yield outlet.getRouteId();
    if (id) {
      node = id.element;
      id.element = void 0;
      ids.push(id);
    } else {
      break;
    }
  }
  return {
    ids,
    outlet
  };
});
var waitUntilNavNode = () => {
  if (searchNavNode(document.body)) {
    return Promise.resolve();
  }
  return new Promise((resolve) => {
    window.addEventListener("ionNavWillLoad", () => resolve(), {
      once: true
    });
  });
};
var OUTLET_SELECTOR = ":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet";
var searchNavNode = (root) => {
  if (!root) {
    return void 0;
  }
  if (root.matches(OUTLET_SELECTOR)) {
    return root;
  }
  const outlet = root.querySelector(OUTLET_SELECTOR);
  return outlet !== null && outlet !== void 0 ? outlet : void 0;
};
var matchesRedirect = (segments, redirect) => {
  const {
    from,
    to
  } = redirect;
  if (to === void 0) {
    return false;
  }
  if (from.length > segments.length) {
    return false;
  }
  for (let i = 0; i < from.length; i++) {
    const expected = from[i];
    if (expected === "*") {
      return true;
    }
    if (expected !== segments[i]) {
      return false;
    }
  }
  return from.length === segments.length;
};
var findRouteRedirect = (segments, redirects) => {
  return redirects.find((redirect) => matchesRedirect(segments, redirect));
};
var matchesIDs = (ids, chain) => {
  const len = Math.min(ids.length, chain.length);
  let score = 0;
  for (let i = 0; i < len; i++) {
    const routeId = ids[i];
    const routeChain = chain[i];
    if (routeId.id.toLowerCase() !== routeChain.id) {
      break;
    }
    if (routeId.params) {
      const routeIdParams = Object.keys(routeId.params);
      if (routeIdParams.length === routeChain.segments.length) {
        const pathWithParams = routeIdParams.map((key) => `:${key}`);
        for (let j = 0; j < pathWithParams.length; j++) {
          if (pathWithParams[j].toLowerCase() !== routeChain.segments[j]) {
            break;
          }
          score++;
        }
      }
    }
    score++;
  }
  return score;
};
var matchesSegments = (segments, chain) => {
  const inputSegments = new RouterSegments(segments);
  let matchesDefault = false;
  let allparams;
  for (let i = 0; i < chain.length; i++) {
    const chainSegments = chain[i].segments;
    if (chainSegments[0] === "") {
      matchesDefault = true;
    } else {
      for (const segment of chainSegments) {
        const data = inputSegments.next();
        if (segment[0] === ":") {
          if (data === "") {
            return null;
          }
          allparams = allparams || [];
          const params = allparams[i] || (allparams[i] = {});
          params[segment.slice(1)] = data;
        } else if (data !== segment) {
          return null;
        }
      }
      matchesDefault = false;
    }
  }
  const matches = matchesDefault ? matchesDefault === (inputSegments.next() === "") : true;
  if (!matches) {
    return null;
  }
  if (allparams) {
    return chain.map((route, i) => ({
      id: route.id,
      segments: route.segments,
      params: mergeParams(route.params, allparams[i]),
      beforeEnter: route.beforeEnter,
      beforeLeave: route.beforeLeave
    }));
  }
  return chain;
};
var mergeParams = (a, b) => {
  return a || b ? Object.assign(Object.assign({}, a), b) : void 0;
};
var findChainForIDs = (ids, chains) => {
  let match = null;
  let maxMatches = 0;
  for (const chain of chains) {
    const score = matchesIDs(ids, chain);
    if (score > maxMatches) {
      match = chain;
      maxMatches = score;
    }
  }
  if (match) {
    return match.map((route, i) => {
      var _a;
      return {
        id: route.id,
        segments: route.segments,
        params: mergeParams(route.params, (_a = ids[i]) === null || _a === void 0 ? void 0 : _a.params)
      };
    });
  }
  return null;
};
var findChainForSegments = (segments, chains) => {
  let match = null;
  let bestScore = 0;
  for (const chain of chains) {
    const matchedChain = matchesSegments(segments, chain);
    if (matchedChain !== null) {
      const score = computePriority(matchedChain);
      if (score > bestScore) {
        bestScore = score;
        match = matchedChain;
      }
    }
  }
  return match;
};
var computePriority = (chain) => {
  let score = 1;
  let level = 1;
  for (const route of chain) {
    for (const segment of route.segments) {
      if (segment[0] === ":") {
        score += Math.pow(1, level);
      } else if (segment !== "") {
        score += Math.pow(2, level);
      }
      level++;
    }
  }
  return score;
};
var RouterSegments = class {
  constructor(segments) {
    this.segments = segments.slice();
  }
  next() {
    if (this.segments.length > 0) {
      return this.segments.shift();
    }
    return "";
  }
};
var readProp = (el, prop) => {
  if (prop in el) {
    return el[prop];
  }
  if (el.hasAttribute(prop)) {
    return el.getAttribute(prop);
  }
  return null;
};
var readRedirects = (root) => {
  return Array.from(root.children).filter((el) => el.tagName === "ION-ROUTE-REDIRECT").map((el) => {
    const to = readProp(el, "to");
    return {
      from: parsePath(readProp(el, "from")).segments,
      to: to == null ? void 0 : parsePath(to)
    };
  });
};
var readRoutes = (root) => {
  return flattenRouterTree(readRouteNodes(root));
};
var readRouteNodes = (node) => {
  return Array.from(node.children).filter((el) => el.tagName === "ION-ROUTE" && el.component).map((el) => {
    const component = readProp(el, "component");
    return {
      segments: parsePath(readProp(el, "url")).segments,
      id: component.toLowerCase(),
      params: el.componentProps,
      beforeLeave: el.beforeLeave,
      beforeEnter: el.beforeEnter,
      children: readRouteNodes(el)
    };
  });
};
var flattenRouterTree = (nodes) => {
  const chains = [];
  for (const node of nodes) {
    flattenNode([], chains, node);
  }
  return chains;
};
var flattenNode = (chain, chains, node) => {
  chain = [...chain, {
    id: node.id,
    segments: node.segments,
    params: node.params,
    beforeLeave: node.beforeLeave,
    beforeEnter: node.beforeEnter
  }];
  if (node.children.length === 0) {
    chains.push(chain);
    return;
  }
  for (const child of node.children) {
    flattenNode(chain, chains, child);
  }
};
var Router = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionRouteWillChange = createEvent(this, "ionRouteWillChange", 7);
    this.ionRouteDidChange = createEvent(this, "ionRouteDidChange", 7);
    this.previousPath = null;
    this.busy = false;
    this.state = 0;
    this.lastState = 0;
    this.root = "/";
    this.useHash = true;
  }
  componentWillLoad() {
    return __async(this, null, function* () {
      yield waitUntilNavNode();
      const canProceed = yield this.runGuards(this.getSegments());
      if (canProceed !== true) {
        if (typeof canProceed === "object") {
          const {
            redirect
          } = canProceed;
          const path = parsePath(redirect);
          this.setSegments(path.segments, ROUTER_INTENT_NONE, path.queryString);
          yield this.writeNavStateRoot(path.segments, ROUTER_INTENT_NONE);
        }
      } else {
        yield this.onRoutesChanged();
      }
    });
  }
  componentDidLoad() {
    window.addEventListener("ionRouteRedirectChanged", debounce(this.onRedirectChanged.bind(this), 10));
    window.addEventListener("ionRouteDataChanged", debounce(this.onRoutesChanged.bind(this), 100));
  }
  onPopState() {
    return __async(this, null, function* () {
      const direction = this.historyDirection();
      let segments = this.getSegments();
      const canProceed = yield this.runGuards(segments);
      if (canProceed !== true) {
        if (typeof canProceed === "object") {
          segments = parsePath(canProceed.redirect).segments;
        } else {
          return false;
        }
      }
      return this.writeNavStateRoot(segments, direction);
    });
  }
  onBackButton(ev) {
    ev.detail.register(0, (processNextHandler) => {
      this.back();
      processNextHandler();
    });
  }
  /** @internal */
  canTransition() {
    return __async(this, null, function* () {
      const canProceed = yield this.runGuards();
      if (canProceed !== true) {
        if (typeof canProceed === "object") {
          return canProceed.redirect;
        } else {
          return false;
        }
      }
      return true;
    });
  }
  /**
   * Navigate to the specified path.
   *
   * @param path The path to navigate to.
   * @param direction The direction of the animation. Defaults to `"forward"`.
   * @param animation A custom animation to use for the transition.
   */
  push(path, direction = "forward", animation) {
    return __async(this, null, function* () {
      var _a;
      if (path.startsWith(".")) {
        const currentPath = (_a = this.previousPath) !== null && _a !== void 0 ? _a : "/";
        const url = new URL(path, `https://host/${currentPath}`);
        path = url.pathname + url.search;
      }
      let parsedPath = parsePath(path);
      const canProceed = yield this.runGuards(parsedPath.segments);
      if (canProceed !== true) {
        if (typeof canProceed === "object") {
          parsedPath = parsePath(canProceed.redirect);
        } else {
          return false;
        }
      }
      this.setSegments(parsedPath.segments, direction, parsedPath.queryString);
      return this.writeNavStateRoot(parsedPath.segments, direction, animation);
    });
  }
  /** Go back to previous page in the window.history. */
  back() {
    window.history.back();
    return Promise.resolve(this.waitPromise);
  }
  /** @internal */
  printDebug() {
    return __async(this, null, function* () {
      printRoutes(readRoutes(this.el));
      printRedirects(readRedirects(this.el));
    });
  }
  /** @internal */
  navChanged(direction) {
    return __async(this, null, function* () {
      if (this.busy) {
        printIonWarning("[ion-router] - Router is busy, navChanged was cancelled.");
        return false;
      }
      const {
        ids,
        outlet
      } = yield readNavState(window.document.body);
      const routes = readRoutes(this.el);
      const chain = findChainForIDs(ids, routes);
      if (!chain) {
        printIonWarning("[ion-router] - No matching URL for", ids.map((i) => i.id));
        return false;
      }
      const segments = chainToSegments(chain);
      if (!segments) {
        printIonWarning("[ion-router] - Router could not match path because some required param is missing.");
        return false;
      }
      this.setSegments(segments, direction);
      yield this.safeWriteNavState(outlet, chain, ROUTER_INTENT_NONE, segments, null, ids.length);
      return true;
    });
  }
  /** This handler gets called when a `ion-route-redirect` component is added to the DOM or if the from or to property of such node changes. */
  onRedirectChanged() {
    const segments = this.getSegments();
    if (segments && findRouteRedirect(segments, readRedirects(this.el))) {
      this.writeNavStateRoot(segments, ROUTER_INTENT_NONE);
    }
  }
  /** This handler gets called when a `ion-route` component is added to the DOM or if the from or to property of such node changes. */
  onRoutesChanged() {
    return this.writeNavStateRoot(this.getSegments(), ROUTER_INTENT_NONE);
  }
  historyDirection() {
    var _a;
    const win = window;
    if (win.history.state === null) {
      this.state++;
      win.history.replaceState(this.state, win.document.title, (_a = win.document.location) === null || _a === void 0 ? void 0 : _a.href);
    }
    const state = win.history.state;
    const lastState = this.lastState;
    this.lastState = state;
    if (state > lastState || state >= lastState && lastState > 0) {
      return ROUTER_INTENT_FORWARD;
    }
    if (state < lastState) {
      return ROUTER_INTENT_BACK;
    }
    return ROUTER_INTENT_NONE;
  }
  writeNavStateRoot(segments, direction, animation) {
    return __async(this, null, function* () {
      if (!segments) {
        printIonError("[ion-router] - URL is not part of the routing set.");
        return false;
      }
      const redirects = readRedirects(this.el);
      const redirect = findRouteRedirect(segments, redirects);
      let redirectFrom = null;
      if (redirect) {
        const {
          segments: toSegments,
          queryString
        } = redirect.to;
        this.setSegments(toSegments, direction, queryString);
        redirectFrom = redirect.from;
        segments = toSegments;
      }
      const routes = readRoutes(this.el);
      const chain = findChainForSegments(segments, routes);
      if (!chain) {
        printIonError("[ion-router] - The path does not match any route.");
        return false;
      }
      return this.safeWriteNavState(document.body, chain, direction, segments, redirectFrom, 0, animation);
    });
  }
  safeWriteNavState(node, chain, direction, segments, redirectFrom, index = 0, animation) {
    return __async(this, null, function* () {
      const unlock = yield this.lock();
      let changed = false;
      try {
        changed = yield this.writeNavState(node, chain, direction, segments, redirectFrom, index, animation);
      } catch (e) {
        printIonError("[ion-router] - Exception in safeWriteNavState:", e);
      }
      unlock();
      return changed;
    });
  }
  lock() {
    return __async(this, null, function* () {
      const p = this.waitPromise;
      let resolve;
      this.waitPromise = new Promise((r) => resolve = r);
      if (p !== void 0) {
        yield p;
      }
      return resolve;
    });
  }
  /**
   * Executes the beforeLeave hook of the source route and the beforeEnter hook of the target route if they exist.
   *
   * When the beforeLeave hook does not return true (to allow navigating) then that value is returned early and the beforeEnter is executed.
   * Otherwise the beforeEnterHook hook of the target route is executed.
   */
  runGuards() {
    return __async(this, arguments, function* (to = this.getSegments(), from) {
      if (from === void 0) {
        from = parsePath(this.previousPath).segments;
      }
      if (!to || !from) {
        return true;
      }
      const routes = readRoutes(this.el);
      const fromChain = findChainForSegments(from, routes);
      const beforeLeaveHook = fromChain && fromChain[fromChain.length - 1].beforeLeave;
      const canLeave = beforeLeaveHook ? yield beforeLeaveHook() : true;
      if (canLeave === false || typeof canLeave === "object") {
        return canLeave;
      }
      const toChain = findChainForSegments(to, routes);
      const beforeEnterHook = toChain && toChain[toChain.length - 1].beforeEnter;
      return beforeEnterHook ? beforeEnterHook() : true;
    });
  }
  writeNavState(node, chain, direction, segments, redirectFrom, index = 0, animation) {
    return __async(this, null, function* () {
      if (this.busy) {
        printIonWarning("[ion-router] - Router is busy, transition was cancelled.");
        return false;
      }
      this.busy = true;
      const routeEvent = this.routeChangeEvent(segments, redirectFrom);
      if (routeEvent) {
        this.ionRouteWillChange.emit(routeEvent);
      }
      const changed = yield writeNavState(node, chain, direction, index, false, animation);
      this.busy = false;
      if (routeEvent) {
        this.ionRouteDidChange.emit(routeEvent);
      }
      return changed;
    });
  }
  setSegments(segments, direction, queryString) {
    this.state++;
    writeSegments(window.history, this.root, this.useHash, segments, direction, this.state, queryString);
  }
  getSegments() {
    return readSegments(window.location, this.root, this.useHash);
  }
  routeChangeEvent(toSegments, redirectFromSegments) {
    const from = this.previousPath;
    const to = generatePath(toSegments);
    this.previousPath = to;
    if (to === from) {
      return null;
    }
    const redirectedFrom = redirectFromSegments ? generatePath(redirectFromSegments) : null;
    return {
      from,
      redirectedFrom,
      to
    };
  }
  get el() {
    return getElement(this);
  }
};
var routerLinkCss = ":host{--background:transparent;--color:var(--ion-color-primary, #0054e9);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}";
var RouterLink = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.routerDirection = "forward";
    this.onClick = (ev) => {
      openURL(this.href, ev, this.routerDirection, this.routerAnimation);
    };
  }
  render() {
    const mode = getIonMode(this);
    const attrs = {
      href: this.href,
      rel: this.rel,
      target: this.target
    };
    return h(Host, {
      key: "d7f2affcde45c5fbb6cb46cd1c30008ee92a68c5",
      onClick: this.onClick,
      class: createColorClasses(this.color, {
        [mode]: true,
        "ion-activatable": true
      })
    }, h("a", Object.assign({
      key: "babafae85ca5c6429958d383feff0493ff8cf33e"
    }, attrs), h("slot", {
      key: "50314e9555bbf6dffa0c50c3f763009dee59b10b"
    })));
  }
};
RouterLink.style = routerLinkCss;
export {
  Route as ion_route,
  RouteRedirect as ion_route_redirect,
  Router as ion_router,
  RouterLink as ion_router_link
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-route_4.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tcm91dGVfNC5lbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGNyZWF0ZUV2ZW50LCBqIGFzIHByaW50SW9uRXJyb3IsIGYgYXMgcHJpbnRJb25XYXJuaW5nLCBnIGFzIGdldEVsZW1lbnQsIGgsIGQgYXMgSG9zdCB9IGZyb20gJy4vaW5kZXgtNER4WTZfZ0cuanMnO1xuaW1wb3J0IHsgYyBhcyBjb21wb25lbnRPblJlYWR5LCBwIGFzIGRlYm91bmNlIH0gZnJvbSAnLi9oZWxwZXJzLThLU1FRR1F5LmpzJztcbmltcG9ydCB7IG8gYXMgb3BlblVSTCwgYyBhcyBjcmVhdGVDb2xvckNsYXNzZXMgfSBmcm9tICcuL3RoZW1lLURpVkp5cWxYLmpzJztcbmltcG9ydCB7IGIgYXMgZ2V0SW9uTW9kZSB9IGZyb20gJy4vaW9uaWMtZ2xvYmFsLUNUU3l1ZmhGLmpzJztcbmNvbnN0IFJvdXRlID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmlvblJvdXRlRGF0YUNoYW5nZWQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblJvdXRlRGF0YUNoYW5nZWRcIiwgNyk7XG4gICAgLyoqXG4gICAgICogUmVsYXRpdmUgcGF0aCB0aGF0IG5lZWRzIHRvIG1hdGNoIGluIG9yZGVyIGZvciB0aGlzIHJvdXRlIHRvIGFwcGx5LlxuICAgICAqXG4gICAgICogQWNjZXB0cyBwYXRocyBzaW1pbGFyIHRvIGV4cHJlc3NqcyBzbyB0aGF0IHlvdSBjYW4gZGVmaW5lIHBhcmFtZXRlcnNcbiAgICAgKiBpbiB0aGUgdXJsIC9mb28vOmJhciB3aGVyZSBiYXIgd291bGQgYmUgYXZhaWxhYmxlIGluIGluY29taW5nIHByb3BzLlxuICAgICAqL1xuICAgIHRoaXMudXJsID0gJyc7XG4gIH1cbiAgb25VcGRhdGUobmV3VmFsdWUpIHtcbiAgICB0aGlzLmlvblJvdXRlRGF0YUNoYW5nZWQuZW1pdChuZXdWYWx1ZSk7XG4gIH1cbiAgb25Db21wb25lbnRQcm9wcyhuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICBpZiAobmV3VmFsdWUgPT09IG9sZFZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGtleXMxID0gbmV3VmFsdWUgPyBPYmplY3Qua2V5cyhuZXdWYWx1ZSkgOiBbXTtcbiAgICBjb25zdCBrZXlzMiA9IG9sZFZhbHVlID8gT2JqZWN0LmtleXMob2xkVmFsdWUpIDogW107XG4gICAgaWYgKGtleXMxLmxlbmd0aCAhPT0ga2V5czIubGVuZ3RoKSB7XG4gICAgICB0aGlzLm9uVXBkYXRlKG5ld1ZhbHVlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yIChjb25zdCBrZXkgb2Yga2V5czEpIHtcbiAgICAgIGlmIChuZXdWYWx1ZVtrZXldICE9PSBvbGRWYWx1ZVtrZXldKSB7XG4gICAgICAgIHRoaXMub25VcGRhdGUobmV3VmFsdWUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuaW9uUm91dGVEYXRhQ2hhbmdlZC5lbWl0KCk7XG4gIH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJ1cmxcIjogW1wib25VcGRhdGVcIl0sXG4gICAgICBcImNvbXBvbmVudFwiOiBbXCJvblVwZGF0ZVwiXSxcbiAgICAgIFwiY29tcG9uZW50UHJvcHNcIjogW1wib25Db21wb25lbnRQcm9wc1wiXVxuICAgIH07XG4gIH1cbn07XG5jb25zdCBSb3V0ZVJlZGlyZWN0ID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmlvblJvdXRlUmVkaXJlY3RDaGFuZ2VkID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Sb3V0ZVJlZGlyZWN0Q2hhbmdlZFwiLCA3KTtcbiAgfVxuICBwcm9wRGlkQ2hhbmdlKCkge1xuICAgIHRoaXMuaW9uUm91dGVSZWRpcmVjdENoYW5nZWQuZW1pdCgpO1xuICB9XG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuaW9uUm91dGVSZWRpcmVjdENoYW5nZWQuZW1pdCgpO1xuICB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZnJvbVwiOiBbXCJwcm9wRGlkQ2hhbmdlXCJdLFxuICAgICAgXCJ0b1wiOiBbXCJwcm9wRGlkQ2hhbmdlXCJdXG4gICAgfTtcbiAgfVxufTtcbmNvbnN0IFJPVVRFUl9JTlRFTlRfTk9ORSA9ICdyb290JztcbmNvbnN0IFJPVVRFUl9JTlRFTlRfRk9SV0FSRCA9ICdmb3J3YXJkJztcbmNvbnN0IFJPVVRFUl9JTlRFTlRfQkFDSyA9ICdiYWNrJztcblxuLyoqIEpvaW4gdGhlIG5vbiBlbXB0eSBzZWdtZW50cyB3aXRoIFwiL1wiLiAqL1xuY29uc3QgZ2VuZXJhdGVQYXRoID0gc2VnbWVudHMgPT4ge1xuICBjb25zdCBwYXRoID0gc2VnbWVudHMuZmlsdGVyKHMgPT4gcy5sZW5ndGggPiAwKS5qb2luKCcvJyk7XG4gIHJldHVybiAnLycgKyBwYXRoO1xufTtcbmNvbnN0IGdlbmVyYXRlVXJsID0gKHNlZ21lbnRzLCB1c2VIYXNoLCBxdWVyeVN0cmluZykgPT4ge1xuICBsZXQgdXJsID0gZ2VuZXJhdGVQYXRoKHNlZ21lbnRzKTtcbiAgaWYgKHVzZUhhc2gpIHtcbiAgICB1cmwgPSAnIycgKyB1cmw7XG4gIH1cbiAgaWYgKHF1ZXJ5U3RyaW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICB1cmwgKz0gJz8nICsgcXVlcnlTdHJpbmc7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07XG5jb25zdCB3cml0ZVNlZ21lbnRzID0gKGhpc3RvcnksIHJvb3QsIHVzZUhhc2gsIHNlZ21lbnRzLCBkaXJlY3Rpb24sIHN0YXRlLCBxdWVyeVN0cmluZykgPT4ge1xuICBjb25zdCB1cmwgPSBnZW5lcmF0ZVVybChbLi4ucGFyc2VQYXRoKHJvb3QpLnNlZ21lbnRzLCAuLi5zZWdtZW50c10sIHVzZUhhc2gsIHF1ZXJ5U3RyaW5nKTtcbiAgaWYgKGRpcmVjdGlvbiA9PT0gUk9VVEVSX0lOVEVOVF9GT1JXQVJEKSB7XG4gICAgaGlzdG9yeS5wdXNoU3RhdGUoc3RhdGUsICcnLCB1cmwpO1xuICB9IGVsc2Uge1xuICAgIGhpc3RvcnkucmVwbGFjZVN0YXRlKHN0YXRlLCAnJywgdXJsKTtcbiAgfVxufTtcbi8qKlxuICogVHJhbnNmb3JtcyBhIGNoYWluIHRvIGEgbGlzdCBvZiBzZWdtZW50cy5cbiAqXG4gKiBOb3RlczpcbiAqIC0gcGFyYW1ldGVyIHNlZ21lbnRzIG9mIHRoZSBmb3JtIDpwYXJhbSBhcmUgcmVwbGFjZWQgd2l0aCB0aGVpciB2YWx1ZSxcbiAqIC0gbnVsbCBpcyByZXR1cm5lZCB3aGVuIGEgdmFsdWUgaXMgbWlzc2luZyBmb3IgYW55IHBhcmFtZXRlciBzZWdtZW50LlxuICovXG5jb25zdCBjaGFpblRvU2VnbWVudHMgPSBjaGFpbiA9PiB7XG4gIGNvbnN0IHNlZ21lbnRzID0gW107XG4gIGZvciAoY29uc3Qgcm91dGUgb2YgY2hhaW4pIHtcbiAgICBmb3IgKGNvbnN0IHNlZ21lbnQgb2Ygcm91dGUuc2VnbWVudHMpIHtcbiAgICAgIGlmIChzZWdtZW50WzBdID09PSAnOicpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9wcmVmZXItb3B0aW9uYWwtY2hhaW5cbiAgICAgICAgY29uc3QgcGFyYW0gPSByb3V0ZS5wYXJhbXMgJiYgcm91dGUucGFyYW1zW3NlZ21lbnQuc2xpY2UoMSldO1xuICAgICAgICBpZiAoIXBhcmFtKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgc2VnbWVudHMucHVzaChwYXJhbSk7XG4gICAgICB9IGVsc2UgaWYgKHNlZ21lbnQgIT09ICcnKSB7XG4gICAgICAgIHNlZ21lbnRzLnB1c2goc2VnbWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBzZWdtZW50cztcbn07XG4vKipcbiAqIFJlbW92ZXMgdGhlIHByZWZpeCBzZWdtZW50cyBmcm9tIHRoZSBwYXRoIHNlZ21lbnRzLlxuICpcbiAqIFJldHVybjpcbiAqIC0gbnVsbCB3aGVuIHRoZSBwYXRoIHNlZ21lbnRzIGRvIG5vdCBzdGFydCB3aXRoIHRoZSBwYXNzZWQgcHJlZml4LFxuICogLSB0aGUgcGF0aCBzZWdtZW50cyBhZnRlciB0aGUgcHJlZml4IG90aGVyd2lzZS5cbiAqL1xuY29uc3QgcmVtb3ZlUHJlZml4ID0gKHByZWZpeCwgc2VnbWVudHMpID0+IHtcbiAgaWYgKHByZWZpeC5sZW5ndGggPiBzZWdtZW50cy5sZW5ndGgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBpZiAocHJlZml4Lmxlbmd0aCA8PSAxICYmIHByZWZpeFswXSA9PT0gJycpIHtcbiAgICByZXR1cm4gc2VnbWVudHM7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmVmaXgubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocHJlZml4W2ldICE9PSBzZWdtZW50c1tpXSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG4gIGlmIChzZWdtZW50cy5sZW5ndGggPT09IHByZWZpeC5sZW5ndGgpIHtcbiAgICByZXR1cm4gWycnXTtcbiAgfVxuICByZXR1cm4gc2VnbWVudHMuc2xpY2UocHJlZml4Lmxlbmd0aCk7XG59O1xuY29uc3QgcmVhZFNlZ21lbnRzID0gKGxvYywgcm9vdCwgdXNlSGFzaCkgPT4ge1xuICBjb25zdCBwcmVmaXggPSBwYXJzZVBhdGgocm9vdCkuc2VnbWVudHM7XG4gIGNvbnN0IHBhdGhuYW1lID0gdXNlSGFzaCA/IGxvYy5oYXNoLnNsaWNlKDEpIDogbG9jLnBhdGhuYW1lO1xuICBjb25zdCBzZWdtZW50cyA9IHBhcnNlUGF0aChwYXRobmFtZSkuc2VnbWVudHM7XG4gIHJldHVybiByZW1vdmVQcmVmaXgocHJlZml4LCBzZWdtZW50cyk7XG59O1xuLyoqXG4gKiBQYXJzZXMgdGhlIHBhdGggdG86XG4gKiAtIHNlZ21lbnRzIGFuIGFycmF5IG9mICcvJyBzZXBhcmF0ZWQgcGFydHMsXG4gKiAtIHF1ZXJ5U3RyaW5nICh1bmRlZmluZWQgd2hlbiBubyBxdWVyeSBzdHJpbmcpLlxuICovXG5jb25zdCBwYXJzZVBhdGggPSBwYXRoID0+IHtcbiAgbGV0IHNlZ21lbnRzID0gWycnXTtcbiAgbGV0IHF1ZXJ5U3RyaW5nO1xuICBpZiAocGF0aCAhPSBudWxsKSB7XG4gICAgY29uc3QgcXNTdGFydCA9IHBhdGguaW5kZXhPZignPycpO1xuICAgIGlmIChxc1N0YXJ0ID4gLTEpIHtcbiAgICAgIHF1ZXJ5U3RyaW5nID0gcGF0aC5zdWJzdHJpbmcocXNTdGFydCArIDEpO1xuICAgICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHFzU3RhcnQpO1xuICAgIH1cbiAgICBzZWdtZW50cyA9IHBhdGguc3BsaXQoJy8nKS5tYXAocyA9PiBzLnRyaW0oKSkuZmlsdGVyKHMgPT4gcy5sZW5ndGggPiAwKTtcbiAgICBpZiAoc2VnbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBzZWdtZW50cyA9IFsnJ107XG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgc2VnbWVudHMsXG4gICAgcXVlcnlTdHJpbmdcbiAgfTtcbn07XG5jb25zdCBwcmludFJvdXRlcyA9IHJvdXRlcyA9PiB7XG4gIGNvbnNvbGUuZ3JvdXAoYFtpb24tY29yZV0gUk9VVEVTWyR7cm91dGVzLmxlbmd0aH1dYCk7XG4gIGZvciAoY29uc3QgY2hhaW4gb2Ygcm91dGVzKSB7XG4gICAgY29uc3Qgc2VnbWVudHMgPSBbXTtcbiAgICBjaGFpbi5mb3JFYWNoKHIgPT4gc2VnbWVudHMucHVzaCguLi5yLnNlZ21lbnRzKSk7XG4gICAgY29uc3QgaWRzID0gY2hhaW4ubWFwKHIgPT4gci5pZCk7XG4gICAgY29uc29sZS5kZWJ1ZyhgJWMgJHtnZW5lcmF0ZVBhdGgoc2VnbWVudHMpfWAsICdmb250LXdlaWdodDogYm9sZDsgcGFkZGluZy1sZWZ0OiAyMHB4JywgJz0+XFx0JywgYCgke2lkcy5qb2luKCcsICcpfSlgKTtcbiAgfVxuICBjb25zb2xlLmdyb3VwRW5kKCk7XG59O1xuY29uc3QgcHJpbnRSZWRpcmVjdHMgPSByZWRpcmVjdHMgPT4ge1xuICBjb25zb2xlLmdyb3VwKGBbaW9uLWNvcmVdIFJFRElSRUNUU1ske3JlZGlyZWN0cy5sZW5ndGh9XWApO1xuICBmb3IgKGNvbnN0IHJlZGlyZWN0IG9mIHJlZGlyZWN0cykge1xuICAgIGlmIChyZWRpcmVjdC50bykge1xuICAgICAgY29uc29sZS5kZWJ1ZygnRlJPTTogJywgYCRjICR7Z2VuZXJhdGVQYXRoKHJlZGlyZWN0LmZyb20pfWAsICdmb250LXdlaWdodDogYm9sZCcsICcgVE86ICcsIGAkYyAke2dlbmVyYXRlUGF0aChyZWRpcmVjdC50by5zZWdtZW50cyl9YCwgJ2ZvbnQtd2VpZ2h0OiBib2xkJyk7XG4gICAgfVxuICB9XG4gIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbn07XG5cbi8qKlxuICogQWN0aXZhdGVzIHRoZSBwYXNzZWQgcm91dGUgY2hhaW4uXG4gKlxuICogVGhlcmUgbXVzdCBiZSBleGFjdGx5IG9uZSBvdXRsZXQgcGVyIHJvdXRlIGVudHJ5IGluIHRoZSBjaGFpbi5cbiAqXG4gKiBUaGUgbWV0aG9kcyBjYWxscyBzZXRSb3V0ZUlkIG9uIGVhY2ggb2YgdGhlIG91dGxldCB3aXRoIHRoZSBjb3JyZXNwb25kaW5nIHJvdXRlIGVudHJ5IGluIHRoZSBjaGFpbi5cbiAqIHNldFJvdXRlSWQgd2lsbCBjcmVhdGUgb3Igc2VsZWN0IHRoZSB2aWV3IGluIHRoZSBvdXRsZXQuXG4gKi9cbmNvbnN0IHdyaXRlTmF2U3RhdGUgPSBhc3luYyAocm9vdCwgY2hhaW4sIGRpcmVjdGlvbiwgaW5kZXgsIGNoYW5nZWQgPSBmYWxzZSwgYW5pbWF0aW9uKSA9PiB7XG4gIHRyeSB7XG4gICAgLy8gZmluZCBuZXh0IG5hdmlnYXRpb24gb3V0bGV0IGluIHRoZSBET01cbiAgICBjb25zdCBvdXRsZXQgPSBzZWFyY2hOYXZOb2RlKHJvb3QpO1xuICAgIC8vIG1ha2Ugc3VyZSB3ZSBjYW4gY29udGludWUgaW50ZXJhY3RpbmcgdGhlIERPTSwgb3RoZXJ3aXNlIGFib3J0XG4gICAgaWYgKGluZGV4ID49IGNoYWluLmxlbmd0aCB8fCAhb3V0bGV0KSB7XG4gICAgICByZXR1cm4gY2hhbmdlZDtcbiAgICB9XG4gICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBjb21wb25lbnRPblJlYWR5KG91dGxldCwgcmVzb2x2ZSkpO1xuICAgIGNvbnN0IHJvdXRlID0gY2hhaW5baW5kZXhdO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG91dGxldC5zZXRSb3V0ZUlkKHJvdXRlLmlkLCByb3V0ZS5wYXJhbXMsIGRpcmVjdGlvbiwgYW5pbWF0aW9uKTtcbiAgICAvLyBpZiB0aGUgb3V0bGV0IGNoYW5nZWQgdGhlIHBhZ2UsIHJlc2V0IG5hdmlnYXRpb24gdG8gbmV1dHJhbCAobm8gZGlyZWN0aW9uKVxuICAgIC8vIHRoaXMgbWVhbnMgbmVzdGVkIG91dGxldHMgd2lsbCBub3QgYW5pbWF0ZVxuICAgIGlmIChyZXN1bHQuY2hhbmdlZCkge1xuICAgICAgZGlyZWN0aW9uID0gUk9VVEVSX0lOVEVOVF9OT05FO1xuICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgfVxuICAgIC8vIHJlY3Vyc2l2ZWx5IHNldCBuZXN0ZWQgb3V0bGV0c1xuICAgIGNoYW5nZWQgPSBhd2FpdCB3cml0ZU5hdlN0YXRlKHJlc3VsdC5lbGVtZW50LCBjaGFpbiwgZGlyZWN0aW9uLCBpbmRleCArIDEsIGNoYW5nZWQsIGFuaW1hdGlvbik7XG4gICAgLy8gb25jZSBhbGwgbmVzdGVkIG91dGxldHMgYXJlIHZpc2libGUgbGV0J3MgbWFrZSB0aGUgcGFyZW50IHZpc2libGUgdG9vLFxuICAgIC8vIHVzaW5nIG1hcmtWaXNpYmxlIHByZXZlbnRzIGZsaWNrZXJpbmdcbiAgICBpZiAocmVzdWx0Lm1hcmtWaXNpYmxlKSB7XG4gICAgICBhd2FpdCByZXN1bHQubWFya1Zpc2libGUoKTtcbiAgICB9XG4gICAgcmV0dXJuIGNoYW5nZWQ7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBwcmludElvbkVycm9yKCdbaW9uLXJvdXRlcl0gLSBFeGNlcHRpb24gaW4gd3JpdGVOYXZTdGF0ZTonLCBlKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG4vKipcbiAqIFJlY3Vyc2l2ZWx5IHdhbGtzIHRoZSBvdXRsZXQgaW4gdGhlIERPTS5cbiAqXG4gKiBUaGUgZnVuY3Rpb24gcmV0dXJucyBhIGxpc3Qgb2YgUm91dGVJRCBjb3JyZXNwb25kaW5nIHRvIGVhY2ggb2YgdGhlIG91dGxldCBhbmQgdGhlIGxhc3Qgb3V0bGV0IHdpdGhvdXQgYSBSb3V0ZUlELlxuICovXG5jb25zdCByZWFkTmF2U3RhdGUgPSBhc3luYyByb290ID0+IHtcbiAgY29uc3QgaWRzID0gW107XG4gIGxldCBvdXRsZXQ7XG4gIGxldCBub2RlID0gcm9vdDtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbmQtYXNzaWduXG4gIHdoaWxlIChvdXRsZXQgPSBzZWFyY2hOYXZOb2RlKG5vZGUpKSB7XG4gICAgY29uc3QgaWQgPSBhd2FpdCBvdXRsZXQuZ2V0Um91dGVJZCgpO1xuICAgIGlmIChpZCkge1xuICAgICAgbm9kZSA9IGlkLmVsZW1lbnQ7XG4gICAgICBpZC5lbGVtZW50ID0gdW5kZWZpbmVkO1xuICAgICAgaWRzLnB1c2goaWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBpZHMsXG4gICAgb3V0bGV0XG4gIH07XG59O1xuY29uc3Qgd2FpdFVudGlsTmF2Tm9kZSA9ICgpID0+IHtcbiAgaWYgKHNlYXJjaE5hdk5vZGUoZG9jdW1lbnQuYm9keSkpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdpb25OYXZXaWxsTG9hZCcsICgpID0+IHJlc29sdmUoKSwge1xuICAgICAgb25jZTogdHJ1ZVxuICAgIH0pO1xuICB9KTtcbn07XG4vKiogU2VsZWN0b3IgZm9yIGFsbCB0aGUgb3V0bGV0cyBzdXBwb3J0ZWQgYnkgdGhlIHJvdXRlci4gKi9cbmNvbnN0IE9VVExFVF9TRUxFQ1RPUiA9ICc6bm90KFtuby1yb3V0ZXJdKSBpb24tbmF2LCA6bm90KFtuby1yb3V0ZXJdKSBpb24tdGFicywgOm5vdChbbm8tcm91dGVyXSkgaW9uLXJvdXRlci1vdXRsZXQnO1xuY29uc3Qgc2VhcmNoTmF2Tm9kZSA9IHJvb3QgPT4ge1xuICBpZiAoIXJvb3QpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIGlmIChyb290Lm1hdGNoZXMoT1VUTEVUX1NFTEVDVE9SKSkge1xuICAgIHJldHVybiByb290O1xuICB9XG4gIGNvbnN0IG91dGxldCA9IHJvb3QucXVlcnlTZWxlY3RvcihPVVRMRVRfU0VMRUNUT1IpO1xuICByZXR1cm4gb3V0bGV0ICE9PSBudWxsICYmIG91dGxldCAhPT0gdm9pZCAwID8gb3V0bGV0IDogdW5kZWZpbmVkO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgdGhlIGdpdmVuIHJlZGlyZWN0IG1hdGNoZXMgdGhlIGdpdmVuIHBhdGggc2VnbWVudHMuXG4gKlxuICogQSByZWRpcmVjdCBtYXRjaGVzIHdoZW4gdGhlIHNlZ21lbnRzIG9mIHRoZSBwYXRoIGFuZCByZWRpcmVjdC5mcm9tIGFyZSBlcXVhbC5cbiAqIE5vdGUgdGhhdCBzZWdtZW50cyBhcmUgb25seSBjaGVja2VkIHVudGlsIHJlZGlyZWN0LmZyb20gY29udGFpbnMgYSAnKicgd2hpY2ggbWF0Y2hlcyBhbnkgcGF0aCBzZWdtZW50LlxuICogVGhlIHBhdGggWydzb21lJywgJ3BhdGgnLCAndG8nLCAncGFnZSddIG1hdGNoZXMgYm90aCBbJ3NvbWUnLCAncGF0aCcsICd0bycsICdwYWdlJ10gYW5kIFsnc29tZScsICdwYXRoJywgJyonXS5cbiAqL1xuY29uc3QgbWF0Y2hlc1JlZGlyZWN0ID0gKHNlZ21lbnRzLCByZWRpcmVjdCkgPT4ge1xuICBjb25zdCB7XG4gICAgZnJvbSxcbiAgICB0b1xuICB9ID0gcmVkaXJlY3Q7XG4gIGlmICh0byA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChmcm9tLmxlbmd0aCA+IHNlZ21lbnRzLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGZyb20ubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBleHBlY3RlZCA9IGZyb21baV07XG4gICAgaWYgKGV4cGVjdGVkID09PSAnKicpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoZXhwZWN0ZWQgIT09IHNlZ21lbnRzW2ldKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiBmcm9tLmxlbmd0aCA9PT0gc2VnbWVudHMubGVuZ3RoO1xufTtcbi8qKiBSZXR1cm5zIHRoZSBmaXJzdCByZWRpcmVjdCBtYXRjaGluZyB0aGUgcGF0aCBzZWdtZW50cyBvciB1bmRlZmluZWQgd2hlbiBubyBtYXRjaCBmb3VuZC4gKi9cbmNvbnN0IGZpbmRSb3V0ZVJlZGlyZWN0ID0gKHNlZ21lbnRzLCByZWRpcmVjdHMpID0+IHtcbiAgcmV0dXJuIHJlZGlyZWN0cy5maW5kKHJlZGlyZWN0ID0+IG1hdGNoZXNSZWRpcmVjdChzZWdtZW50cywgcmVkaXJlY3QpKTtcbn07XG5jb25zdCBtYXRjaGVzSURzID0gKGlkcywgY2hhaW4pID0+IHtcbiAgY29uc3QgbGVuID0gTWF0aC5taW4oaWRzLmxlbmd0aCwgY2hhaW4ubGVuZ3RoKTtcbiAgbGV0IHNjb3JlID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IHJvdXRlSWQgPSBpZHNbaV07XG4gICAgY29uc3Qgcm91dGVDaGFpbiA9IGNoYWluW2ldO1xuICAgIC8vIFNraXAgcmVzdWx0cyB3aGVyZSB0aGUgcm91dGUgaWQgZG9lcyBub3QgbWF0Y2ggdGhlIGNoYWluIGF0IHRoZSBzYW1lIGluZGV4XG4gICAgaWYgKHJvdXRlSWQuaWQudG9Mb3dlckNhc2UoKSAhPT0gcm91dGVDaGFpbi5pZCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmIChyb3V0ZUlkLnBhcmFtcykge1xuICAgICAgY29uc3Qgcm91dGVJZFBhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlSWQucGFyYW1zKTtcbiAgICAgIC8vIE9ubHkgY29tcGFyZSByb3V0ZXMgd2l0aCB0aGUgY2hhaW4gdGhhdCBoYXZlIHRoZSBzYW1lIG51bWJlciBvZiBwYXJhbWV0ZXJzLlxuICAgICAgaWYgKHJvdXRlSWRQYXJhbXMubGVuZ3RoID09PSByb3V0ZUNoYWluLnNlZ21lbnRzLmxlbmd0aCkge1xuICAgICAgICAvLyBNYXBzIHRoZSByb3V0ZSdzIHBhcmFtcyBpbnRvIGEgcGF0aCBiYXNlZCBvbiB0aGUgcGF0aCB2YXJpYWJsZSBuYW1lcyxcbiAgICAgICAgLy8gdG8gY29tcGFyZSBhZ2FpbnN0IHRoZSByb3V0ZSBjaGFpbiBmb3JtYXQuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIEJlZm9yZTpcbiAgICAgICAgLy8gYGBgdHNcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgcGFyYW1zOiB7XG4gICAgICAgIC8vICAgIHMxOiAnYScsXG4gICAgICAgIC8vICAgIHMyOiAnYidcbiAgICAgICAgLy8gIH1cbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBgYGBcbiAgICAgICAgLy9cbiAgICAgICAgLy8gQWZ0ZXI6XG4gICAgICAgIC8vIGBgYHRzXG4gICAgICAgIC8vIFsnOnMxJywnOnMyJ11cbiAgICAgICAgLy8gYGBgXG4gICAgICAgIC8vXG4gICAgICAgIGNvbnN0IHBhdGhXaXRoUGFyYW1zID0gcm91dGVJZFBhcmFtcy5tYXAoa2V5ID0+IGA6JHtrZXl9YCk7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcGF0aFdpdGhQYXJhbXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAvLyBTa2lwIHJlc3VsdHMgd2hlcmUgdGhlIHBhdGggdmFyaWFibGUgaXMgbm90IGEgbWF0Y2hcbiAgICAgICAgICBpZiAocGF0aFdpdGhQYXJhbXNbal0udG9Mb3dlckNhc2UoKSAhPT0gcm91dGVDaGFpbi5zZWdtZW50c1tqXSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFdlaWdodCBwYXRoIG1hdGNoZXMgZm9yIHRoZSBzYW1lIGluZGV4IGhpZ2hlci5cbiAgICAgICAgICBzY29yZSsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIFdlaWdodCBpZCBtYXRjaGVzXG4gICAgc2NvcmUrKztcbiAgfVxuICByZXR1cm4gc2NvcmU7XG59O1xuLyoqXG4gKiBNYXRjaGVzIHRoZSBzZWdtZW50cyBhZ2FpbnN0IHRoZSBjaGFpbi5cbiAqXG4gKiBSZXR1cm5zOlxuICogLSBudWxsIHdoZW4gdGhlcmUgaXMgbm8gbWF0Y2gsXG4gKiAtIGEgY2hhaW4gd2l0aCB0aGUgcGFyYW1zIHByb3BlcnRpZXMgdXBkYXRlZCB3aXRoIHRoZSBwYXJhbWV0ZXIgc2VnbWVudHMgb24gbWF0Y2guXG4gKi9cbmNvbnN0IG1hdGNoZXNTZWdtZW50cyA9IChzZWdtZW50cywgY2hhaW4pID0+IHtcbiAgY29uc3QgaW5wdXRTZWdtZW50cyA9IG5ldyBSb3V0ZXJTZWdtZW50cyhzZWdtZW50cyk7XG4gIGxldCBtYXRjaGVzRGVmYXVsdCA9IGZhbHNlO1xuICBsZXQgYWxscGFyYW1zO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNoYWluLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY2hhaW5TZWdtZW50cyA9IGNoYWluW2ldLnNlZ21lbnRzO1xuICAgIGlmIChjaGFpblNlZ21lbnRzWzBdID09PSAnJykge1xuICAgICAgbWF0Y2hlc0RlZmF1bHQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGNvbnN0IHNlZ21lbnQgb2YgY2hhaW5TZWdtZW50cykge1xuICAgICAgICBjb25zdCBkYXRhID0gaW5wdXRTZWdtZW50cy5uZXh0KCk7XG4gICAgICAgIC8vIGRhdGEgcGFyYW1cbiAgICAgICAgaWYgKHNlZ21lbnRbMF0gPT09ICc6Jykge1xuICAgICAgICAgIGlmIChkYXRhID09PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICAgIGFsbHBhcmFtcyA9IGFsbHBhcmFtcyB8fCBbXTtcbiAgICAgICAgICBjb25zdCBwYXJhbXMgPSBhbGxwYXJhbXNbaV0gfHwgKGFsbHBhcmFtc1tpXSA9IHt9KTtcbiAgICAgICAgICBwYXJhbXNbc2VnbWVudC5zbGljZSgxKV0gPSBkYXRhO1xuICAgICAgICB9IGVsc2UgaWYgKGRhdGEgIT09IHNlZ21lbnQpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbWF0Y2hlc0RlZmF1bHQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgY29uc3QgbWF0Y2hlcyA9IG1hdGNoZXNEZWZhdWx0ID8gbWF0Y2hlc0RlZmF1bHQgPT09IChpbnB1dFNlZ21lbnRzLm5leHQoKSA9PT0gJycpIDogdHJ1ZTtcbiAgaWYgKCFtYXRjaGVzKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKGFsbHBhcmFtcykge1xuICAgIHJldHVybiBjaGFpbi5tYXAoKHJvdXRlLCBpKSA9PiAoe1xuICAgICAgaWQ6IHJvdXRlLmlkLFxuICAgICAgc2VnbWVudHM6IHJvdXRlLnNlZ21lbnRzLFxuICAgICAgcGFyYW1zOiBtZXJnZVBhcmFtcyhyb3V0ZS5wYXJhbXMsIGFsbHBhcmFtc1tpXSksXG4gICAgICBiZWZvcmVFbnRlcjogcm91dGUuYmVmb3JlRW50ZXIsXG4gICAgICBiZWZvcmVMZWF2ZTogcm91dGUuYmVmb3JlTGVhdmVcbiAgICB9KSk7XG4gIH1cbiAgcmV0dXJuIGNoYWluO1xufTtcbi8qKlxuICogTWVyZ2VzIHRoZSByb3V0ZSBwYXJhbWV0ZXIgb2JqZWN0cy5cbiAqIFJldHVybnMgdW5kZWZpbmVkIHdoZW4gYm90aCBwYXJhbWV0ZXJzIGFyZSB1bmRlZmluZWQuXG4gKi9cbmNvbnN0IG1lcmdlUGFyYW1zID0gKGEsIGIpID0+IHtcbiAgcmV0dXJuIGEgfHwgYiA/IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgYSksIGIpIDogdW5kZWZpbmVkO1xufTtcbi8qKlxuICogRmluZHMgdGhlIGJlc3QgbWF0Y2ggZm9yIHRoZSBpZHMgaW4gdGhlIGNoYWlucy5cbiAqXG4gKiBSZXR1cm5zIHRoZSBiZXN0IG1hdGNoIG9yIG51bGwgd2hlbiBubyBtYXRjaCBpcyBmb3VuZC5cbiAqIFdoZW4gYSBjaGFpbiBpcyByZXR1cm5lZCB0aGUgcGFyYW1ldGVycyBhcmUgdXBkYXRlZCBmcm9tIHRoZSBSb3V0ZUlEcy5cbiAqIFRoYXQgaXMgdGhleSBjb250YWluIGJvdGggdGhlIGNvbXBvbmVudFByb3BzIG9mIHRoZSA8aW9uLXJvdXRlPiBhbmQgdGhlIHBhcmFtZXRlciBzZWdtZW50LlxuICovXG5jb25zdCBmaW5kQ2hhaW5Gb3JJRHMgPSAoaWRzLCBjaGFpbnMpID0+IHtcbiAgbGV0IG1hdGNoID0gbnVsbDtcbiAgbGV0IG1heE1hdGNoZXMgPSAwO1xuICBmb3IgKGNvbnN0IGNoYWluIG9mIGNoYWlucykge1xuICAgIGNvbnN0IHNjb3JlID0gbWF0Y2hlc0lEcyhpZHMsIGNoYWluKTtcbiAgICBpZiAoc2NvcmUgPiBtYXhNYXRjaGVzKSB7XG4gICAgICBtYXRjaCA9IGNoYWluO1xuICAgICAgbWF4TWF0Y2hlcyA9IHNjb3JlO1xuICAgIH1cbiAgfVxuICBpZiAobWF0Y2gpIHtcbiAgICByZXR1cm4gbWF0Y2gubWFwKChyb3V0ZSwgaSkgPT4ge1xuICAgICAgdmFyIF9hO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IHJvdXRlLmlkLFxuICAgICAgICBzZWdtZW50czogcm91dGUuc2VnbWVudHMsXG4gICAgICAgIHBhcmFtczogbWVyZ2VQYXJhbXMocm91dGUucGFyYW1zLCAoX2EgPSBpZHNbaV0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5wYXJhbXMpXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBudWxsO1xufTtcbi8qKlxuICogRmluZHMgdGhlIGJlc3QgbWF0Y2ggZm9yIHRoZSBzZWdtZW50cyBpbiB0aGUgY2hhaW5zLlxuICpcbiAqIFJldHVybnMgdGhlIGJlc3QgbWF0Y2ggb3IgbnVsbCB3aGVuIG5vIG1hdGNoIGlzIGZvdW5kLlxuICogV2hlbiBhIGNoYWluIGlzIHJldHVybmVkIHRoZSBwYXJhbWV0ZXJzIGFyZSB1cGRhdGVkIGZyb20gdGhlIHNlZ21lbnRzLlxuICogVGhhdCBpcyB0aGV5IGNvbnRhaW4gYm90aCB0aGUgY29tcG9uZW50UHJvcHMgb2YgdGhlIDxpb24tcm91dGU+IGFuZCB0aGUgcGFyYW1ldGVyIHNlZ21lbnRzLlxuICovXG5jb25zdCBmaW5kQ2hhaW5Gb3JTZWdtZW50cyA9IChzZWdtZW50cywgY2hhaW5zKSA9PiB7XG4gIGxldCBtYXRjaCA9IG51bGw7XG4gIGxldCBiZXN0U2NvcmUgPSAwO1xuICBmb3IgKGNvbnN0IGNoYWluIG9mIGNoYWlucykge1xuICAgIGNvbnN0IG1hdGNoZWRDaGFpbiA9IG1hdGNoZXNTZWdtZW50cyhzZWdtZW50cywgY2hhaW4pO1xuICAgIGlmIChtYXRjaGVkQ2hhaW4gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHNjb3JlID0gY29tcHV0ZVByaW9yaXR5KG1hdGNoZWRDaGFpbik7XG4gICAgICBpZiAoc2NvcmUgPiBiZXN0U2NvcmUpIHtcbiAgICAgICAgYmVzdFNjb3JlID0gc2NvcmU7XG4gICAgICAgIG1hdGNoID0gbWF0Y2hlZENoYWluO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbWF0Y2g7XG59O1xuLyoqXG4gKiBDb21wdXRlcyB0aGUgcHJpb3JpdHkgb2YgYSBjaGFpbi5cbiAqXG4gKiBQYXJhbWV0ZXIgc2VnbWVudHMgYXJlIGdpdmVuIGEgbG93ZXIgcHJpb3JpdHkgb3ZlciBmaXhlZCBzZWdtZW50cy5cbiAqXG4gKiBDb25zaWRlcmluZyB0aGUgZm9sbG93aW5nIDIgY2hhaW5zIG1hdGNoaW5nIHRoZSBwYXRoIC9wYXRoL3RvL3BhZ2U6XG4gKiAtIC9wYXRoL3RvLzp3aGVyZVxuICogLSAvcGF0aC90by9wYWdlXG4gKlxuICogVGhlIHNlY29uZCBvbmUgd2lsbCBiZSBnaXZlbiBhIGhpZ2hlciBwcmlvcml0eSBiZWNhdXNlIFwicGFnZVwiIGlzIGEgZml4ZWQgc2VnbWVudCAodnMgXCI6d2hlcmVcIiwgYSBwYXJhbWV0ZXIgc2VnbWVudCkuXG4gKi9cbmNvbnN0IGNvbXB1dGVQcmlvcml0eSA9IGNoYWluID0+IHtcbiAgbGV0IHNjb3JlID0gMTtcbiAgbGV0IGxldmVsID0gMTtcbiAgZm9yIChjb25zdCByb3V0ZSBvZiBjaGFpbikge1xuICAgIGZvciAoY29uc3Qgc2VnbWVudCBvZiByb3V0ZS5zZWdtZW50cykge1xuICAgICAgaWYgKHNlZ21lbnRbMF0gPT09ICc6Jykge1xuICAgICAgICBzY29yZSArPSBNYXRoLnBvdygxLCBsZXZlbCk7XG4gICAgICB9IGVsc2UgaWYgKHNlZ21lbnQgIT09ICcnKSB7XG4gICAgICAgIHNjb3JlICs9IE1hdGgucG93KDIsIGxldmVsKTtcbiAgICAgIH1cbiAgICAgIGxldmVsKys7XG4gICAgfVxuICB9XG4gIHJldHVybiBzY29yZTtcbn07XG5jbGFzcyBSb3V0ZXJTZWdtZW50cyB7XG4gIGNvbnN0cnVjdG9yKHNlZ21lbnRzKSB7XG4gICAgdGhpcy5zZWdtZW50cyA9IHNlZ21lbnRzLnNsaWNlKCk7XG4gIH1cbiAgbmV4dCgpIHtcbiAgICBpZiAodGhpcy5zZWdtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZWdtZW50cy5zaGlmdCgpO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cbmNvbnN0IHJlYWRQcm9wID0gKGVsLCBwcm9wKSA9PiB7XG4gIGlmIChwcm9wIGluIGVsKSB7XG4gICAgcmV0dXJuIGVsW3Byb3BdO1xuICB9XG4gIGlmIChlbC5oYXNBdHRyaWJ1dGUocHJvcCkpIHtcbiAgICByZXR1cm4gZWwuZ2V0QXR0cmlidXRlKHByb3ApO1xuICB9XG4gIHJldHVybiBudWxsO1xufTtcbi8qKlxuICogRXh0cmFjdHMgdGhlIHJlZGlyZWN0cyAodGhhdCBpcyA8aW9uLXJvdXRlLXJlZGlyZWN0PiBlbGVtZW50cyBpbnNpZGUgdGhlIHJvb3QpLlxuICpcbiAqIFRoZSByZWRpcmVjdHMgYXJlIHJldHVybmVkIGFzIGEgbGlzdCBvZiBSb3V0ZVJlZGlyZWN0LlxuICovXG5jb25zdCByZWFkUmVkaXJlY3RzID0gcm9vdCA9PiB7XG4gIHJldHVybiBBcnJheS5mcm9tKHJvb3QuY2hpbGRyZW4pLmZpbHRlcihlbCA9PiBlbC50YWdOYW1lID09PSAnSU9OLVJPVVRFLVJFRElSRUNUJykubWFwKGVsID0+IHtcbiAgICBjb25zdCB0byA9IHJlYWRQcm9wKGVsLCAndG8nKTtcbiAgICByZXR1cm4ge1xuICAgICAgZnJvbTogcGFyc2VQYXRoKHJlYWRQcm9wKGVsLCAnZnJvbScpKS5zZWdtZW50cyxcbiAgICAgIHRvOiB0byA9PSBudWxsID8gdW5kZWZpbmVkIDogcGFyc2VQYXRoKHRvKVxuICAgIH07XG4gIH0pO1xufTtcbi8qKlxuICogRXh0cmFjdHMgYWxsIHRoZSByb3V0ZXMgKHRoYXQgaXMgPGlvbi1yb3V0ZT4gZWxlbWVudHMgaW5zaWRlIHRoZSByb290KS5cbiAqXG4gKiBUaGUgcm91dGVzIGFyZSByZXR1cm5lZCBhcyBhIGxpc3Qgb2YgY2hhaW5zIC0gdGhlIGZsYXR0ZW5lZCB0cmVlLlxuICovXG5jb25zdCByZWFkUm91dGVzID0gcm9vdCA9PiB7XG4gIHJldHVybiBmbGF0dGVuUm91dGVyVHJlZShyZWFkUm91dGVOb2Rlcyhyb290KSk7XG59O1xuLyoqXG4gKiBSZWFkcyB0aGUgcm91dGUgbm9kZXMgYXMgYSB0cmVlIG1vZGVsZWQgYWZ0ZXIgdGhlIERPTSB0cmVlIG9mIDxpb24tcm91dGU+IGVsZW1lbnRzLlxuICpcbiAqIE5vdGU6IHJvdXRlcyB3aXRob3V0IGEgY29tcG9uZW50IGFyZSBpZ25vcmVkIHRvZ2V0aGVyIHdpdGggdGhlaXIgY2hpbGRyZW4uXG4gKi9cbmNvbnN0IHJlYWRSb3V0ZU5vZGVzID0gbm9kZSA9PiB7XG4gIHJldHVybiBBcnJheS5mcm9tKG5vZGUuY2hpbGRyZW4pLmZpbHRlcihlbCA9PiBlbC50YWdOYW1lID09PSAnSU9OLVJPVVRFJyAmJiBlbC5jb21wb25lbnQpLm1hcChlbCA9PiB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gcmVhZFByb3AoZWwsICdjb21wb25lbnQnKTtcbiAgICByZXR1cm4ge1xuICAgICAgc2VnbWVudHM6IHBhcnNlUGF0aChyZWFkUHJvcChlbCwgJ3VybCcpKS5zZWdtZW50cyxcbiAgICAgIGlkOiBjb21wb25lbnQudG9Mb3dlckNhc2UoKSxcbiAgICAgIHBhcmFtczogZWwuY29tcG9uZW50UHJvcHMsXG4gICAgICBiZWZvcmVMZWF2ZTogZWwuYmVmb3JlTGVhdmUsXG4gICAgICBiZWZvcmVFbnRlcjogZWwuYmVmb3JlRW50ZXIsXG4gICAgICBjaGlsZHJlbjogcmVhZFJvdXRlTm9kZXMoZWwpXG4gICAgfTtcbiAgfSk7XG59O1xuLyoqXG4gKiBGbGF0dGVucyBhIFJvdXRlclRyZWUgaW4gYSBsaXN0IG9mIGNoYWlucy5cbiAqXG4gKiBFYWNoIGNoYWluIHJlcHJlc2VudHMgYSBwYXRoIGZyb20gdGhlIHJvb3Qgbm9kZSB0byBhIHRlcm1pbmFsIG5vZGUuXG4gKi9cbmNvbnN0IGZsYXR0ZW5Sb3V0ZXJUcmVlID0gbm9kZXMgPT4ge1xuICBjb25zdCBjaGFpbnMgPSBbXTtcbiAgZm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XG4gICAgZmxhdHRlbk5vZGUoW10sIGNoYWlucywgbm9kZSk7XG4gIH1cbiAgcmV0dXJuIGNoYWlucztcbn07XG4vKiogRmxhdHRlbnMgYSByb3V0ZSBub2RlIHJlY3Vyc2l2ZWx5IGFuZCBwdXNoIGVhY2ggYnJhbmNoIHRvIHRoZSBjaGFpbnMgbGlzdC4gKi9cbmNvbnN0IGZsYXR0ZW5Ob2RlID0gKGNoYWluLCBjaGFpbnMsIG5vZGUpID0+IHtcbiAgY2hhaW4gPSBbLi4uY2hhaW4sIHtcbiAgICBpZDogbm9kZS5pZCxcbiAgICBzZWdtZW50czogbm9kZS5zZWdtZW50cyxcbiAgICBwYXJhbXM6IG5vZGUucGFyYW1zLFxuICAgIGJlZm9yZUxlYXZlOiBub2RlLmJlZm9yZUxlYXZlLFxuICAgIGJlZm9yZUVudGVyOiBub2RlLmJlZm9yZUVudGVyXG4gIH1dO1xuICBpZiAobm9kZS5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICBjaGFpbnMucHVzaChjaGFpbik7XG4gICAgcmV0dXJuO1xuICB9XG4gIGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuICAgIGZsYXR0ZW5Ob2RlKGNoYWluLCBjaGFpbnMsIGNoaWxkKTtcbiAgfVxufTtcbmNvbnN0IFJvdXRlciA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5pb25Sb3V0ZVdpbGxDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblJvdXRlV2lsbENoYW5nZVwiLCA3KTtcbiAgICB0aGlzLmlvblJvdXRlRGlkQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25Sb3V0ZURpZENoYW5nZVwiLCA3KTtcbiAgICB0aGlzLnByZXZpb3VzUGF0aCA9IG51bGw7XG4gICAgdGhpcy5idXN5ID0gZmFsc2U7XG4gICAgdGhpcy5zdGF0ZSA9IDA7XG4gICAgdGhpcy5sYXN0U3RhdGUgPSAwO1xuICAgIC8qKlxuICAgICAqIFRoZSByb290IHBhdGggdG8gdXNlIHdoZW4gbWF0Y2hpbmcgVVJMcy4gQnkgZGVmYXVsdCwgdGhpcyBpcyBzZXQgdG8gXCIvXCIsIGJ1dCB5b3UgY2FuIHNwZWNpZnlcbiAgICAgKiBhbiBhbHRlcm5hdGUgcHJlZml4IGZvciBhbGwgVVJMIHBhdGhzLlxuICAgICAqL1xuICAgIHRoaXMucm9vdCA9ICcvJztcbiAgICAvKipcbiAgICAgKiBUaGUgcm91dGVyIGNhbiB3b3JrIGluIHR3byBcIm1vZGVzXCI6XG4gICAgICogLSBXaXRoIGhhc2g6IGAvaW5kZXguaHRtbCMvcGF0aC90by9wYWdlYFxuICAgICAqIC0gV2l0aG91dCBoYXNoOiBgL3BhdGgvdG8vcGFnZWBcbiAgICAgKlxuICAgICAqIFVzaW5nIG9uZSBvciBhbm90aGVyIG1pZ2h0IGRlcGVuZCBpbiB0aGUgcmVxdWlyZW1lbnRzIG9mIHlvdXIgYXBwIGFuZC9vciB3aGVyZSBpdCdzIGRlcGxveWVkLlxuICAgICAqXG4gICAgICogVXN1YWxseSBcImhhc2gtbGVzc1wiIG5hdmlnYXRpb24gd29ya3MgYmV0dGVyIGZvciBTRU8gYW5kIGl0J3MgbW9yZSB1c2VyIGZyaWVuZGx5IHRvbywgYnV0IGl0IG1pZ2h0XG4gICAgICogcmVxdWlyZXMgYWRkaXRpb25hbCBzZXJ2ZXItc2lkZSBjb25maWd1cmF0aW9uIGluIG9yZGVyIHRvIHByb3Blcmx5IHdvcmsuXG4gICAgICpcbiAgICAgKiBPbiB0aGUgb3RoZXIgc2lkZSBoYXNoLW5hdmlnYXRpb24gaXMgbXVjaCBlYXNpZXIgdG8gZGVwbG95LCBpdCBldmVuIHdvcmtzIG92ZXIgdGhlIGZpbGUgcHJvdG9jb2wuXG4gICAgICpcbiAgICAgKiBCeSBkZWZhdWx0LCB0aGlzIHByb3BlcnR5IGlzIGB0cnVlYCwgY2hhbmdlIHRvIGBmYWxzZWAgdG8gYWxsb3cgaGFzaC1sZXNzIFVSTHMuXG4gICAgICovXG4gICAgdGhpcy51c2VIYXNoID0gdHJ1ZTtcbiAgfVxuICBhc3luYyBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBhd2FpdCB3YWl0VW50aWxOYXZOb2RlKCk7XG4gICAgY29uc3QgY2FuUHJvY2VlZCA9IGF3YWl0IHRoaXMucnVuR3VhcmRzKHRoaXMuZ2V0U2VnbWVudHMoKSk7XG4gICAgaWYgKGNhblByb2NlZWQgIT09IHRydWUpIHtcbiAgICAgIGlmICh0eXBlb2YgY2FuUHJvY2VlZCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIHJlZGlyZWN0XG4gICAgICAgIH0gPSBjYW5Qcm9jZWVkO1xuICAgICAgICBjb25zdCBwYXRoID0gcGFyc2VQYXRoKHJlZGlyZWN0KTtcbiAgICAgICAgdGhpcy5zZXRTZWdtZW50cyhwYXRoLnNlZ21lbnRzLCBST1VURVJfSU5URU5UX05PTkUsIHBhdGgucXVlcnlTdHJpbmcpO1xuICAgICAgICBhd2FpdCB0aGlzLndyaXRlTmF2U3RhdGVSb290KHBhdGguc2VnbWVudHMsIFJPVVRFUl9JTlRFTlRfTk9ORSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGF3YWl0IHRoaXMub25Sb3V0ZXNDaGFuZ2VkKCk7XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2lvblJvdXRlUmVkaXJlY3RDaGFuZ2VkJywgZGVib3VuY2UodGhpcy5vblJlZGlyZWN0Q2hhbmdlZC5iaW5kKHRoaXMpLCAxMCkpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdpb25Sb3V0ZURhdGFDaGFuZ2VkJywgZGVib3VuY2UodGhpcy5vblJvdXRlc0NoYW5nZWQuYmluZCh0aGlzKSwgMTAwKSk7XG4gIH1cbiAgYXN5bmMgb25Qb3BTdGF0ZSgpIHtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLmhpc3RvcnlEaXJlY3Rpb24oKTtcbiAgICBsZXQgc2VnbWVudHMgPSB0aGlzLmdldFNlZ21lbnRzKCk7XG4gICAgY29uc3QgY2FuUHJvY2VlZCA9IGF3YWl0IHRoaXMucnVuR3VhcmRzKHNlZ21lbnRzKTtcbiAgICBpZiAoY2FuUHJvY2VlZCAhPT0gdHJ1ZSkge1xuICAgICAgaWYgKHR5cGVvZiBjYW5Qcm9jZWVkID09PSAnb2JqZWN0Jykge1xuICAgICAgICBzZWdtZW50cyA9IHBhcnNlUGF0aChjYW5Qcm9jZWVkLnJlZGlyZWN0KS5zZWdtZW50cztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMud3JpdGVOYXZTdGF0ZVJvb3Qoc2VnbWVudHMsIGRpcmVjdGlvbik7XG4gIH1cbiAgb25CYWNrQnV0dG9uKGV2KSB7XG4gICAgZXYuZGV0YWlsLnJlZ2lzdGVyKDAsIHByb2Nlc3NOZXh0SGFuZGxlciA9PiB7XG4gICAgICB0aGlzLmJhY2soKTtcbiAgICAgIHByb2Nlc3NOZXh0SGFuZGxlcigpO1xuICAgIH0pO1xuICB9XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgYXN5bmMgY2FuVHJhbnNpdGlvbigpIHtcbiAgICBjb25zdCBjYW5Qcm9jZWVkID0gYXdhaXQgdGhpcy5ydW5HdWFyZHMoKTtcbiAgICBpZiAoY2FuUHJvY2VlZCAhPT0gdHJ1ZSkge1xuICAgICAgaWYgKHR5cGVvZiBjYW5Qcm9jZWVkID09PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gY2FuUHJvY2VlZC5yZWRpcmVjdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLyoqXG4gICAqIE5hdmlnYXRlIHRvIHRoZSBzcGVjaWZpZWQgcGF0aC5cbiAgICpcbiAgICogQHBhcmFtIHBhdGggVGhlIHBhdGggdG8gbmF2aWdhdGUgdG8uXG4gICAqIEBwYXJhbSBkaXJlY3Rpb24gVGhlIGRpcmVjdGlvbiBvZiB0aGUgYW5pbWF0aW9uLiBEZWZhdWx0cyB0byBgXCJmb3J3YXJkXCJgLlxuICAgKiBAcGFyYW0gYW5pbWF0aW9uIEEgY3VzdG9tIGFuaW1hdGlvbiB0byB1c2UgZm9yIHRoZSB0cmFuc2l0aW9uLlxuICAgKi9cbiAgYXN5bmMgcHVzaChwYXRoLCBkaXJlY3Rpb24gPSAnZm9yd2FyZCcsIGFuaW1hdGlvbikge1xuICAgIHZhciBfYTtcbiAgICBpZiAocGF0aC5zdGFydHNXaXRoKCcuJykpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRQYXRoID0gKF9hID0gdGhpcy5wcmV2aW91c1BhdGgpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICcvJztcbiAgICAgIC8vIENvbnZlcnQgY3VycmVudFBhdGggdG8gYW4gVVJMIGJ5IHByZS1wZW5kaW5nIGEgcHJvdG9jb2wgYW5kIGEgaG9zdCB0byByZXNvbHZlIHRoZSByZWxhdGl2ZSBwYXRoLlxuICAgICAgY29uc3QgdXJsID0gbmV3IFVSTChwYXRoLCBgaHR0cHM6Ly9ob3N0LyR7Y3VycmVudFBhdGh9YCk7XG4gICAgICBwYXRoID0gdXJsLnBhdGhuYW1lICsgdXJsLnNlYXJjaDtcbiAgICB9XG4gICAgbGV0IHBhcnNlZFBhdGggPSBwYXJzZVBhdGgocGF0aCk7XG4gICAgY29uc3QgY2FuUHJvY2VlZCA9IGF3YWl0IHRoaXMucnVuR3VhcmRzKHBhcnNlZFBhdGguc2VnbWVudHMpO1xuICAgIGlmIChjYW5Qcm9jZWVkICE9PSB0cnVlKSB7XG4gICAgICBpZiAodHlwZW9mIGNhblByb2NlZWQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHBhcnNlZFBhdGggPSBwYXJzZVBhdGgoY2FuUHJvY2VlZC5yZWRpcmVjdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U2VnbWVudHMocGFyc2VkUGF0aC5zZWdtZW50cywgZGlyZWN0aW9uLCBwYXJzZWRQYXRoLnF1ZXJ5U3RyaW5nKTtcbiAgICByZXR1cm4gdGhpcy53cml0ZU5hdlN0YXRlUm9vdChwYXJzZWRQYXRoLnNlZ21lbnRzLCBkaXJlY3Rpb24sIGFuaW1hdGlvbik7XG4gIH1cbiAgLyoqIEdvIGJhY2sgdG8gcHJldmlvdXMgcGFnZSBpbiB0aGUgd2luZG93Lmhpc3RvcnkuICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy53YWl0UHJvbWlzZSk7XG4gIH1cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBhc3luYyBwcmludERlYnVnKCkge1xuICAgIHByaW50Um91dGVzKHJlYWRSb3V0ZXModGhpcy5lbCkpO1xuICAgIHByaW50UmVkaXJlY3RzKHJlYWRSZWRpcmVjdHModGhpcy5lbCkpO1xuICB9XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgYXN5bmMgbmF2Q2hhbmdlZChkaXJlY3Rpb24pIHtcbiAgICBpZiAodGhpcy5idXN5KSB7XG4gICAgICBwcmludElvbldhcm5pbmcoJ1tpb24tcm91dGVyXSAtIFJvdXRlciBpcyBidXN5LCBuYXZDaGFuZ2VkIHdhcyBjYW5jZWxsZWQuJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHtcbiAgICAgIGlkcyxcbiAgICAgIG91dGxldFxuICAgIH0gPSBhd2FpdCByZWFkTmF2U3RhdGUod2luZG93LmRvY3VtZW50LmJvZHkpO1xuICAgIGNvbnN0IHJvdXRlcyA9IHJlYWRSb3V0ZXModGhpcy5lbCk7XG4gICAgY29uc3QgY2hhaW4gPSBmaW5kQ2hhaW5Gb3JJRHMoaWRzLCByb3V0ZXMpO1xuICAgIGlmICghY2hhaW4pIHtcbiAgICAgIHByaW50SW9uV2FybmluZygnW2lvbi1yb3V0ZXJdIC0gTm8gbWF0Y2hpbmcgVVJMIGZvcicsIGlkcy5tYXAoaSA9PiBpLmlkKSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHNlZ21lbnRzID0gY2hhaW5Ub1NlZ21lbnRzKGNoYWluKTtcbiAgICBpZiAoIXNlZ21lbnRzKSB7XG4gICAgICBwcmludElvbldhcm5pbmcoJ1tpb24tcm91dGVyXSAtIFJvdXRlciBjb3VsZCBub3QgbWF0Y2ggcGF0aCBiZWNhdXNlIHNvbWUgcmVxdWlyZWQgcGFyYW0gaXMgbWlzc2luZy4nKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5zZXRTZWdtZW50cyhzZWdtZW50cywgZGlyZWN0aW9uKTtcbiAgICBhd2FpdCB0aGlzLnNhZmVXcml0ZU5hdlN0YXRlKG91dGxldCwgY2hhaW4sIFJPVVRFUl9JTlRFTlRfTk9ORSwgc2VnbWVudHMsIG51bGwsIGlkcy5sZW5ndGgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8qKiBUaGlzIGhhbmRsZXIgZ2V0cyBjYWxsZWQgd2hlbiBhIGBpb24tcm91dGUtcmVkaXJlY3RgIGNvbXBvbmVudCBpcyBhZGRlZCB0byB0aGUgRE9NIG9yIGlmIHRoZSBmcm9tIG9yIHRvIHByb3BlcnR5IG9mIHN1Y2ggbm9kZSBjaGFuZ2VzLiAqL1xuICBvblJlZGlyZWN0Q2hhbmdlZCgpIHtcbiAgICBjb25zdCBzZWdtZW50cyA9IHRoaXMuZ2V0U2VnbWVudHMoKTtcbiAgICBpZiAoc2VnbWVudHMgJiYgZmluZFJvdXRlUmVkaXJlY3Qoc2VnbWVudHMsIHJlYWRSZWRpcmVjdHModGhpcy5lbCkpKSB7XG4gICAgICB0aGlzLndyaXRlTmF2U3RhdGVSb290KHNlZ21lbnRzLCBST1VURVJfSU5URU5UX05PTkUpO1xuICAgIH1cbiAgfVxuICAvKiogVGhpcyBoYW5kbGVyIGdldHMgY2FsbGVkIHdoZW4gYSBgaW9uLXJvdXRlYCBjb21wb25lbnQgaXMgYWRkZWQgdG8gdGhlIERPTSBvciBpZiB0aGUgZnJvbSBvciB0byBwcm9wZXJ0eSBvZiBzdWNoIG5vZGUgY2hhbmdlcy4gKi9cbiAgb25Sb3V0ZXNDaGFuZ2VkKCkge1xuICAgIHJldHVybiB0aGlzLndyaXRlTmF2U3RhdGVSb290KHRoaXMuZ2V0U2VnbWVudHMoKSwgUk9VVEVSX0lOVEVOVF9OT05FKTtcbiAgfVxuICBoaXN0b3J5RGlyZWN0aW9uKCkge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCB3aW4gPSB3aW5kb3c7XG4gICAgaWYgKHdpbi5oaXN0b3J5LnN0YXRlID09PSBudWxsKSB7XG4gICAgICB0aGlzLnN0YXRlKys7XG4gICAgICB3aW4uaGlzdG9yeS5yZXBsYWNlU3RhdGUodGhpcy5zdGF0ZSwgd2luLmRvY3VtZW50LnRpdGxlLCAoX2EgPSB3aW4uZG9jdW1lbnQubG9jYXRpb24pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5ocmVmKTtcbiAgICB9XG4gICAgY29uc3Qgc3RhdGUgPSB3aW4uaGlzdG9yeS5zdGF0ZTtcbiAgICBjb25zdCBsYXN0U3RhdGUgPSB0aGlzLmxhc3RTdGF0ZTtcbiAgICB0aGlzLmxhc3RTdGF0ZSA9IHN0YXRlO1xuICAgIGlmIChzdGF0ZSA+IGxhc3RTdGF0ZSB8fCBzdGF0ZSA+PSBsYXN0U3RhdGUgJiYgbGFzdFN0YXRlID4gMCkge1xuICAgICAgcmV0dXJuIFJPVVRFUl9JTlRFTlRfRk9SV0FSRDtcbiAgICB9XG4gICAgaWYgKHN0YXRlIDwgbGFzdFN0YXRlKSB7XG4gICAgICByZXR1cm4gUk9VVEVSX0lOVEVOVF9CQUNLO1xuICAgIH1cbiAgICByZXR1cm4gUk9VVEVSX0lOVEVOVF9OT05FO1xuICB9XG4gIGFzeW5jIHdyaXRlTmF2U3RhdGVSb290KHNlZ21lbnRzLCBkaXJlY3Rpb24sIGFuaW1hdGlvbikge1xuICAgIGlmICghc2VnbWVudHMpIHtcbiAgICAgIHByaW50SW9uRXJyb3IoJ1tpb24tcm91dGVyXSAtIFVSTCBpcyBub3QgcGFydCBvZiB0aGUgcm91dGluZyBzZXQuJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIGxvb2t1cCByZWRpcmVjdCBydWxlXG4gICAgY29uc3QgcmVkaXJlY3RzID0gcmVhZFJlZGlyZWN0cyh0aGlzLmVsKTtcbiAgICBjb25zdCByZWRpcmVjdCA9IGZpbmRSb3V0ZVJlZGlyZWN0KHNlZ21lbnRzLCByZWRpcmVjdHMpO1xuICAgIGxldCByZWRpcmVjdEZyb20gPSBudWxsO1xuICAgIGlmIChyZWRpcmVjdCkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBzZWdtZW50czogdG9TZWdtZW50cyxcbiAgICAgICAgcXVlcnlTdHJpbmdcbiAgICAgIH0gPSByZWRpcmVjdC50bztcbiAgICAgIHRoaXMuc2V0U2VnbWVudHModG9TZWdtZW50cywgZGlyZWN0aW9uLCBxdWVyeVN0cmluZyk7XG4gICAgICByZWRpcmVjdEZyb20gPSByZWRpcmVjdC5mcm9tO1xuICAgICAgc2VnbWVudHMgPSB0b1NlZ21lbnRzO1xuICAgIH1cbiAgICAvLyBsb29rdXAgcm91dGUgY2hhaW5cbiAgICBjb25zdCByb3V0ZXMgPSByZWFkUm91dGVzKHRoaXMuZWwpO1xuICAgIGNvbnN0IGNoYWluID0gZmluZENoYWluRm9yU2VnbWVudHMoc2VnbWVudHMsIHJvdXRlcyk7XG4gICAgaWYgKCFjaGFpbikge1xuICAgICAgcHJpbnRJb25FcnJvcignW2lvbi1yb3V0ZXJdIC0gVGhlIHBhdGggZG9lcyBub3QgbWF0Y2ggYW55IHJvdXRlLicpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyB3cml0ZSBET00gZ2l2ZVxuICAgIHJldHVybiB0aGlzLnNhZmVXcml0ZU5hdlN0YXRlKGRvY3VtZW50LmJvZHksIGNoYWluLCBkaXJlY3Rpb24sIHNlZ21lbnRzLCByZWRpcmVjdEZyb20sIDAsIGFuaW1hdGlvbik7XG4gIH1cbiAgYXN5bmMgc2FmZVdyaXRlTmF2U3RhdGUobm9kZSwgY2hhaW4sIGRpcmVjdGlvbiwgc2VnbWVudHMsIHJlZGlyZWN0RnJvbSwgaW5kZXggPSAwLCBhbmltYXRpb24pIHtcbiAgICBjb25zdCB1bmxvY2sgPSBhd2FpdCB0aGlzLmxvY2soKTtcbiAgICBsZXQgY2hhbmdlZCA9IGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICBjaGFuZ2VkID0gYXdhaXQgdGhpcy53cml0ZU5hdlN0YXRlKG5vZGUsIGNoYWluLCBkaXJlY3Rpb24sIHNlZ21lbnRzLCByZWRpcmVjdEZyb20sIGluZGV4LCBhbmltYXRpb24pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHByaW50SW9uRXJyb3IoJ1tpb24tcm91dGVyXSAtIEV4Y2VwdGlvbiBpbiBzYWZlV3JpdGVOYXZTdGF0ZTonLCBlKTtcbiAgICB9XG4gICAgdW5sb2NrKCk7XG4gICAgcmV0dXJuIGNoYW5nZWQ7XG4gIH1cbiAgYXN5bmMgbG9jaygpIHtcbiAgICBjb25zdCBwID0gdGhpcy53YWl0UHJvbWlzZTtcbiAgICBsZXQgcmVzb2x2ZTtcbiAgICB0aGlzLndhaXRQcm9taXNlID0gbmV3IFByb21pc2UociA9PiByZXNvbHZlID0gcik7XG4gICAgaWYgKHAgIT09IHVuZGVmaW5lZCkge1xuICAgICAgYXdhaXQgcDtcbiAgICB9XG4gICAgcmV0dXJuIHJlc29sdmU7XG4gIH1cbiAgLyoqXG4gICAqIEV4ZWN1dGVzIHRoZSBiZWZvcmVMZWF2ZSBob29rIG9mIHRoZSBzb3VyY2Ugcm91dGUgYW5kIHRoZSBiZWZvcmVFbnRlciBob29rIG9mIHRoZSB0YXJnZXQgcm91dGUgaWYgdGhleSBleGlzdC5cbiAgICpcbiAgICogV2hlbiB0aGUgYmVmb3JlTGVhdmUgaG9vayBkb2VzIG5vdCByZXR1cm4gdHJ1ZSAodG8gYWxsb3cgbmF2aWdhdGluZykgdGhlbiB0aGF0IHZhbHVlIGlzIHJldHVybmVkIGVhcmx5IGFuZCB0aGUgYmVmb3JlRW50ZXIgaXMgZXhlY3V0ZWQuXG4gICAqIE90aGVyd2lzZSB0aGUgYmVmb3JlRW50ZXJIb29rIGhvb2sgb2YgdGhlIHRhcmdldCByb3V0ZSBpcyBleGVjdXRlZC5cbiAgICovXG4gIGFzeW5jIHJ1bkd1YXJkcyh0byA9IHRoaXMuZ2V0U2VnbWVudHMoKSwgZnJvbSkge1xuICAgIGlmIChmcm9tID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGZyb20gPSBwYXJzZVBhdGgodGhpcy5wcmV2aW91c1BhdGgpLnNlZ21lbnRzO1xuICAgIH1cbiAgICBpZiAoIXRvIHx8ICFmcm9tKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3Qgcm91dGVzID0gcmVhZFJvdXRlcyh0aGlzLmVsKTtcbiAgICBjb25zdCBmcm9tQ2hhaW4gPSBmaW5kQ2hhaW5Gb3JTZWdtZW50cyhmcm9tLCByb3V0ZXMpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJlZmVyLW9wdGlvbmFsLWNoYWluXG4gICAgY29uc3QgYmVmb3JlTGVhdmVIb29rID0gZnJvbUNoYWluICYmIGZyb21DaGFpbltmcm9tQ2hhaW4ubGVuZ3RoIC0gMV0uYmVmb3JlTGVhdmU7XG4gICAgY29uc3QgY2FuTGVhdmUgPSBiZWZvcmVMZWF2ZUhvb2sgPyBhd2FpdCBiZWZvcmVMZWF2ZUhvb2soKSA6IHRydWU7XG4gICAgaWYgKGNhbkxlYXZlID09PSBmYWxzZSB8fCB0eXBlb2YgY2FuTGVhdmUgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gY2FuTGVhdmU7XG4gICAgfVxuICAgIGNvbnN0IHRvQ2hhaW4gPSBmaW5kQ2hhaW5Gb3JTZWdtZW50cyh0bywgcm91dGVzKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3ByZWZlci1vcHRpb25hbC1jaGFpblxuICAgIGNvbnN0IGJlZm9yZUVudGVySG9vayA9IHRvQ2hhaW4gJiYgdG9DaGFpblt0b0NoYWluLmxlbmd0aCAtIDFdLmJlZm9yZUVudGVyO1xuICAgIHJldHVybiBiZWZvcmVFbnRlckhvb2sgPyBiZWZvcmVFbnRlckhvb2soKSA6IHRydWU7XG4gIH1cbiAgYXN5bmMgd3JpdGVOYXZTdGF0ZShub2RlLCBjaGFpbiwgZGlyZWN0aW9uLCBzZWdtZW50cywgcmVkaXJlY3RGcm9tLCBpbmRleCA9IDAsIGFuaW1hdGlvbikge1xuICAgIGlmICh0aGlzLmJ1c3kpIHtcbiAgICAgIHByaW50SW9uV2FybmluZygnW2lvbi1yb3V0ZXJdIC0gUm91dGVyIGlzIGJ1c3ksIHRyYW5zaXRpb24gd2FzIGNhbmNlbGxlZC4nKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5idXN5ID0gdHJ1ZTtcbiAgICAvLyBnZW5lcmF0ZSByb3V0ZSBldmVudCBhbmQgZW1pdCB3aWxsIGNoYW5nZVxuICAgIGNvbnN0IHJvdXRlRXZlbnQgPSB0aGlzLnJvdXRlQ2hhbmdlRXZlbnQoc2VnbWVudHMsIHJlZGlyZWN0RnJvbSk7XG4gICAgaWYgKHJvdXRlRXZlbnQpIHtcbiAgICAgIHRoaXMuaW9uUm91dGVXaWxsQ2hhbmdlLmVtaXQocm91dGVFdmVudCk7XG4gICAgfVxuICAgIGNvbnN0IGNoYW5nZWQgPSBhd2FpdCB3cml0ZU5hdlN0YXRlKG5vZGUsIGNoYWluLCBkaXJlY3Rpb24sIGluZGV4LCBmYWxzZSwgYW5pbWF0aW9uKTtcbiAgICB0aGlzLmJ1c3kgPSBmYWxzZTtcbiAgICAvLyBlbWl0IGRpZCBjaGFuZ2VcbiAgICBpZiAocm91dGVFdmVudCkge1xuICAgICAgdGhpcy5pb25Sb3V0ZURpZENoYW5nZS5lbWl0KHJvdXRlRXZlbnQpO1xuICAgIH1cbiAgICByZXR1cm4gY2hhbmdlZDtcbiAgfVxuICBzZXRTZWdtZW50cyhzZWdtZW50cywgZGlyZWN0aW9uLCBxdWVyeVN0cmluZykge1xuICAgIHRoaXMuc3RhdGUrKztcbiAgICB3cml0ZVNlZ21lbnRzKHdpbmRvdy5oaXN0b3J5LCB0aGlzLnJvb3QsIHRoaXMudXNlSGFzaCwgc2VnbWVudHMsIGRpcmVjdGlvbiwgdGhpcy5zdGF0ZSwgcXVlcnlTdHJpbmcpO1xuICB9XG4gIGdldFNlZ21lbnRzKCkge1xuICAgIHJldHVybiByZWFkU2VnbWVudHMod2luZG93LmxvY2F0aW9uLCB0aGlzLnJvb3QsIHRoaXMudXNlSGFzaCk7XG4gIH1cbiAgcm91dGVDaGFuZ2VFdmVudCh0b1NlZ21lbnRzLCByZWRpcmVjdEZyb21TZWdtZW50cykge1xuICAgIGNvbnN0IGZyb20gPSB0aGlzLnByZXZpb3VzUGF0aDtcbiAgICBjb25zdCB0byA9IGdlbmVyYXRlUGF0aCh0b1NlZ21lbnRzKTtcbiAgICB0aGlzLnByZXZpb3VzUGF0aCA9IHRvO1xuICAgIGlmICh0byA9PT0gZnJvbSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHJlZGlyZWN0ZWRGcm9tID0gcmVkaXJlY3RGcm9tU2VnbWVudHMgPyBnZW5lcmF0ZVBhdGgocmVkaXJlY3RGcm9tU2VnbWVudHMpIDogbnVsbDtcbiAgICByZXR1cm4ge1xuICAgICAgZnJvbSxcbiAgICAgIHJlZGlyZWN0ZWRGcm9tLFxuICAgICAgdG9cbiAgICB9O1xuICB9XG4gIGdldCBlbCgpIHtcbiAgICByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTtcbiAgfVxufTtcbmNvbnN0IHJvdXRlckxpbmtDc3MgPSBcIjpob3N0ey0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDstLWNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMDA1NGU5KTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2NvbG9yOnZhcigtLWNvbG9yKX06aG9zdCguaW9uLWNvbG9yKXtjb2xvcjp2YXIoLS1pb24tY29sb3ItYmFzZSl9YXtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZTppbmhlcml0O2ZvbnQtc3R5bGU6aW5oZXJpdDtmb250LXdlaWdodDppbmhlcml0O2xldHRlci1zcGFjaW5nOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC1pbmRlbnQ6aW5oZXJpdDt0ZXh0LW92ZXJmbG93OmluaGVyaXQ7dGV4dC10cmFuc2Zvcm06aW5oZXJpdDt0ZXh0LWFsaWduOmluaGVyaXQ7d2hpdGUtc3BhY2U6aW5oZXJpdDtjb2xvcjppbmhlcml0fVwiO1xuY29uc3QgUm91dGVyTGluayA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgLyoqXG4gICAgICogV2hlbiB1c2luZyBhIHJvdXRlciwgaXQgc3BlY2lmaWVzIHRoZSB0cmFuc2l0aW9uIGRpcmVjdGlvbiB3aGVuIG5hdmlnYXRpbmcgdG9cbiAgICAgKiBhbm90aGVyIHBhZ2UgdXNpbmcgYGhyZWZgLlxuICAgICAqL1xuICAgIHRoaXMucm91dGVyRGlyZWN0aW9uID0gJ2ZvcndhcmQnO1xuICAgIHRoaXMub25DbGljayA9IGV2ID0+IHtcbiAgICAgIG9wZW5VUkwodGhpcy5ocmVmLCBldiwgdGhpcy5yb3V0ZXJEaXJlY3Rpb24sIHRoaXMucm91dGVyQW5pbWF0aW9uKTtcbiAgICB9O1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICBjb25zdCBhdHRycyA9IHtcbiAgICAgIGhyZWY6IHRoaXMuaHJlZixcbiAgICAgIHJlbDogdGhpcy5yZWwsXG4gICAgICB0YXJnZXQ6IHRoaXMudGFyZ2V0XG4gICAgfTtcbiAgICByZXR1cm4gaChIb3N0LCB7XG4gICAgICBrZXk6ICdkN2YyYWZmY2RlNDVjNWZiYjZjYjQ2Y2QxYzMwMDA4ZWU5MmE2OGM1JyxcbiAgICAgIG9uQ2xpY2s6IHRoaXMub25DbGljayxcbiAgICAgIGNsYXNzOiBjcmVhdGVDb2xvckNsYXNzZXModGhpcy5jb2xvciwge1xuICAgICAgICBbbW9kZV06IHRydWUsXG4gICAgICAgICdpb24tYWN0aXZhdGFibGUnOiB0cnVlXG4gICAgICB9KVxuICAgIH0sIGgoXCJhXCIsIE9iamVjdC5hc3NpZ24oe1xuICAgICAga2V5OiAnYmFiYWZhZTg1Y2E1YzY0Mjk5NThkMzgzZmVmZjA0OTNmZjhjZjMzZSdcbiAgICB9LCBhdHRycyksIGgoXCJzbG90XCIsIHtcbiAgICAgIGtleTogJzUwMzE0ZTk1NTViYmY2ZGZmYTBjNTBjM2Y3NjMwMDlkZWU1OWIxMGInXG4gICAgfSkpKTtcbiAgfVxufTtcblJvdXRlckxpbmsuc3R5bGUgPSByb3V0ZXJMaW5rQ3NzO1xuZXhwb3J0IHsgUm91dGUgYXMgaW9uX3JvdXRlLCBSb3V0ZVJlZGlyZWN0IGFzIGlvbl9yb3V0ZV9yZWRpcmVjdCwgUm91dGVyIGFzIGlvbl9yb3V0ZXIsIFJvdXRlckxpbmsgYXMgaW9uX3JvdXRlcl9saW5rIH07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0EsSUFBTSxRQUFRLE1BQU07QUFBQSxFQUNsQixZQUFZLFNBQVM7QUFDbkIscUJBQWlCLE1BQU0sT0FBTztBQUM5QixTQUFLLHNCQUFzQixZQUFZLE1BQU0sdUJBQXVCLENBQUM7QUFPckUsU0FBSyxNQUFNO0FBQUEsRUFDYjtBQUFBLEVBQ0EsU0FBUyxVQUFVO0FBQ2pCLFNBQUssb0JBQW9CLEtBQUssUUFBUTtBQUFBLEVBQ3hDO0FBQUEsRUFDQSxpQkFBaUIsVUFBVSxVQUFVO0FBQ25DLFFBQUksYUFBYSxVQUFVO0FBQ3pCO0FBQUEsSUFDRjtBQUNBLFVBQU0sUUFBUSxXQUFXLE9BQU8sS0FBSyxRQUFRLElBQUksQ0FBQztBQUNsRCxVQUFNLFFBQVEsV0FBVyxPQUFPLEtBQUssUUFBUSxJQUFJLENBQUM7QUFDbEQsUUFBSSxNQUFNLFdBQVcsTUFBTSxRQUFRO0FBQ2pDLFdBQUssU0FBUyxRQUFRO0FBQ3RCO0FBQUEsSUFDRjtBQUNBLGVBQVcsT0FBTyxPQUFPO0FBQ3ZCLFVBQUksU0FBUyxHQUFHLE1BQU0sU0FBUyxHQUFHLEdBQUc7QUFDbkMsYUFBSyxTQUFTLFFBQVE7QUFDdEI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLG9CQUFvQjtBQUNsQixTQUFLLG9CQUFvQixLQUFLO0FBQUEsRUFDaEM7QUFBQSxFQUNB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QUNBLFlBQVksVUFBVSxXQUFXLGFBQWE7QUFDNUMsU0FBSztBQUNMLGtCQUFjLE9BQU8sU0FBUyxLQUFLLE1BQU0sS0FBSyxTQUFTLFVBQVUsV0FBVyxLQUFLLE9BQU8sV0FBVztBQUFBLEVBQ3JHO0FBQUEsRUFDQSxjQUFjO0FBQ1osV0FBTyxhQUFhLE9BQU8sVUFBVSxLQUFLLE1BQU0sS0FBSyxPQUFPO0FBQUEsRUFDOUQ7QUFBQSxFQUNBLGlCQUFpQixZQUFZLHNCQUFzQjtBQUNqRCxVQUFNLE9BQU8sS0FBSztBQUNsQixVQUFNLEtBQUssYUFBYSxVQUFVO0FBQ2xDLFNBQUssZUFBZTtBQUNwQixRQUFJLE9BQU8sTUFBTTtBQUNmLGFBQU87QUFBQSxJQUNUO0FBQ0EsVUFBTSxpQkFBaUIsdUJBQXVCLGFBQWEsb0JBQW9CLElBQUk7QUFDbkYsV0FBTztBQUFBLE1BQ0w7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxJQUFJLEtBQUs7QUFDUCxXQUFPLFdBQVcsSUFBSTtBQUFBLEVBQ3hCO0FBQ0Y7QUFDQSxJQUFNLGdCQUFnQjtBQUN0QixJQUFNLGFBQWEsTUFBTTtBQUFBLEVBQ3ZCLFlBQVksU0FBUztBQUNuQixxQkFBaUIsTUFBTSxPQUFPO0FBSzlCLFNBQUssa0JBQWtCO0FBQ3ZCLFNBQUssVUFBVSxRQUFNO0FBQ25CLGNBQVEsS0FBSyxNQUFNLElBQUksS0FBSyxpQkFBaUIsS0FBSyxlQUFlO0FBQUEsSUFDbkU7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQ1AsVUFBTSxPQUFPLFdBQVcsSUFBSTtBQUM1QixVQUFNLFFBQVE7QUFBQSxNQUNaLE1BQU0sS0FBSztBQUFBLE1BQ1gsS0FBSyxLQUFLO0FBQUEsTUFDVixRQUFRLEtBQUs7QUFBQSxJQUNmO0FBQ0EsV0FBTyxFQUFFLE1BQU07QUFBQSxNQUNiLEtBQUs7QUFBQSxNQUNMLFNBQVMsS0FBSztBQUFBLE1BQ2QsT0FBTyxtQkFBbUIsS0FBSyxPQUFPO0FBQUEsUUFDcEMsQ0FBQyxJQUFJLEdBQUc7QUFBQSxRQUNSLG1CQUFtQjtBQUFBLE1BQ3JCLENBQUM7QUFBQSxJQUNILEdBQUcsRUFBRSxLQUFLLE9BQU8sT0FBTztBQUFBLE1BQ3RCLEtBQUs7QUFBQSxJQUNQLEdBQUcsS0FBSyxHQUFHLEVBQUUsUUFBUTtBQUFBLE1BQ25CLEtBQUs7QUFBQSxJQUNQLENBQUMsQ0FBQyxDQUFDO0FBQUEsRUFDTDtBQUNGO0FBQ0EsV0FBVyxRQUFROyIsIm5hbWVzIjpbXSwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==
