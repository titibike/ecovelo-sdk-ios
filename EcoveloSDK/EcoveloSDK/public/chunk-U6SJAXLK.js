import {
  Injectable,
  InjectionToken,
  NgModule,
  PLATFORM_ID,
  isPlatformServer,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-DGENMXJW.js";
import {
  __async,
  __commonJS,
  __require,
  __toESM
} from "./chunk-UESUV5PM.js";

// node_modules/localforage/dist/localforage.js
var require_localforage = __commonJS({
  "node_modules/localforage/dist/localforage.js"(exports, module) {
    "use strict";
    (function(f) {
      if (typeof exports === "object" && typeof module !== "undefined") {
        module.exports = f();
      } else if (typeof define === "function" && define.amd) {
        define([], f);
      } else {
        var g;
        if (typeof window !== "undefined") {
          g = window;
        } else if (typeof global !== "undefined") {
          g = global;
        } else if (typeof self !== "undefined") {
          g = self;
        } else {
          g = this;
        }
        g.localforage = f();
      }
    })(function() {
      var define2, module2, exports2;
      return function e(t, n, r) {
        function s(o2, u) {
          if (!n[o2]) {
            if (!t[o2]) {
              var a = typeof __require == "function" && __require;
              if (!u && a) return a(o2, true);
              if (i) return i(o2, true);
              var f = new Error("Cannot find module '" + o2 + "'");
              throw f.code = "MODULE_NOT_FOUND", f;
            }
            var l = n[o2] = {
              exports: {}
            };
            t[o2][0].call(l.exports, function(e2) {
              var n2 = t[o2][1][e2];
              return s(n2 ? n2 : e2);
            }, l, l.exports, e, t, n, r);
          }
          return n[o2].exports;
        }
        var i = typeof __require == "function" && __require;
        for (var o = 0; o < r.length; o++) s(r[o]);
        return s;
      }({
        1: [function(_dereq_, module3, exports3) {
          (function(global2) {
            "use strict";
            var Mutation = global2.MutationObserver || global2.WebKitMutationObserver;
            var scheduleDrain;
            {
              if (Mutation) {
                var called = 0;
                var observer = new Mutation(nextTick);
                var element = global2.document.createTextNode("");
                observer.observe(element, {
                  characterData: true
                });
                scheduleDrain = function() {
                  element.data = called = ++called % 2;
                };
              } else if (!global2.setImmediate && typeof global2.MessageChannel !== "undefined") {
                var channel = new global2.MessageChannel();
                channel.port1.onmessage = nextTick;
                scheduleDrain = function() {
                  channel.port2.postMessage(0);
                };
              } else if ("document" in global2 && "onreadystatechange" in global2.document.createElement("script")) {
                scheduleDrain = function() {
                  var scriptEl = global2.document.createElement("script");
                  scriptEl.onreadystatechange = function() {
                    nextTick();
                    scriptEl.onreadystatechange = null;
                    scriptEl.parentNode.removeChild(scriptEl);
                    scriptEl = null;
                  };
                  global2.document.documentElement.appendChild(scriptEl);
                };
              } else {
                scheduleDrain = function() {
                  setTimeout(nextTick, 0);
                };
              }
            }
            var draining;
            var queue = [];
            function nextTick() {
              draining = true;
              var i, oldQueue;
              var len = queue.length;
              while (len) {
                oldQueue = queue;
                queue = [];
                i = -1;
                while (++i < len) {
                  oldQueue[i]();
                }
                len = queue.length;
              }
              draining = false;
            }
            module3.exports = immediate;
            function immediate(task) {
              if (queue.push(task) === 1 && !draining) {
                scheduleDrain();
              }
            }
          }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
        }, {}],
        2: [function(_dereq_, module3, exports3) {
          "use strict";
          var immediate = _dereq_(1);
          function INTERNAL() {
          }
          var handlers = {};
          var REJECTED = ["REJECTED"];
          var FULFILLED = ["FULFILLED"];
          var PENDING = ["PENDING"];
          module3.exports = Promise2;
          function Promise2(resolver) {
            if (typeof resolver !== "function") {
              throw new TypeError("resolver must be a function");
            }
            this.state = PENDING;
            this.queue = [];
            this.outcome = void 0;
            if (resolver !== INTERNAL) {
              safelyResolveThenable(this, resolver);
            }
          }
          Promise2.prototype["catch"] = function(onRejected) {
            return this.then(null, onRejected);
          };
          Promise2.prototype.then = function(onFulfilled, onRejected) {
            if (typeof onFulfilled !== "function" && this.state === FULFILLED || typeof onRejected !== "function" && this.state === REJECTED) {
              return this;
            }
            var promise = new this.constructor(INTERNAL);
            if (this.state !== PENDING) {
              var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
              unwrap(promise, resolver, this.outcome);
            } else {
              this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
            }
            return promise;
          };
          function QueueItem(promise, onFulfilled, onRejected) {
            this.promise = promise;
            if (typeof onFulfilled === "function") {
              this.onFulfilled = onFulfilled;
              this.callFulfilled = this.otherCallFulfilled;
            }
            if (typeof onRejected === "function") {
              this.onRejected = onRejected;
              this.callRejected = this.otherCallRejected;
            }
          }
          QueueItem.prototype.callFulfilled = function(value) {
            handlers.resolve(this.promise, value);
          };
          QueueItem.prototype.otherCallFulfilled = function(value) {
            unwrap(this.promise, this.onFulfilled, value);
          };
          QueueItem.prototype.callRejected = function(value) {
            handlers.reject(this.promise, value);
          };
          QueueItem.prototype.otherCallRejected = function(value) {
            unwrap(this.promise, this.onRejected, value);
          };
          function unwrap(promise, func, value) {
            immediate(function() {
              var returnValue;
              try {
                returnValue = func(value);
              } catch (e) {
                return handlers.reject(promise, e);
              }
              if (returnValue === promise) {
                handlers.reject(promise, new TypeError("Cannot resolve promise with itself"));
              } else {
                handlers.resolve(promise, returnValue);
              }
            });
          }
          handlers.resolve = function(self2, value) {
            var result = tryCatch(getThen, value);
            if (result.status === "error") {
              return handlers.reject(self2, result.value);
            }
            var thenable = result.value;
            if (thenable) {
              safelyResolveThenable(self2, thenable);
            } else {
              self2.state = FULFILLED;
              self2.outcome = value;
              var i = -1;
              var len = self2.queue.length;
              while (++i < len) {
                self2.queue[i].callFulfilled(value);
              }
            }
            return self2;
          };
          handlers.reject = function(self2, error) {
            self2.state = REJECTED;
            self2.outcome = error;
            var i = -1;
            var len = self2.queue.length;
            while (++i < len) {
              self2.queue[i].callRejected(error);
            }
            return self2;
          };
          function getThen(obj) {
            var then = obj && obj.then;
            if (obj && (typeof obj === "object" || typeof obj === "function") && typeof then === "function") {
              return function appyThen() {
                then.apply(obj, arguments);
              };
            }
          }
          function safelyResolveThenable(self2, thenable) {
            var called = false;
            function onError(value) {
              if (called) {
                return;
              }
              called = true;
              handlers.reject(self2, value);
            }
            function onSuccess(value) {
              if (called) {
                return;
              }
              called = true;
              handlers.resolve(self2, value);
            }
            function tryToUnwrap() {
              thenable(onSuccess, onError);
            }
            var result = tryCatch(tryToUnwrap);
            if (result.status === "error") {
              onError(result.value);
            }
          }
          function tryCatch(func, value) {
            var out = {};
            try {
              out.value = func(value);
              out.status = "success";
            } catch (e) {
              out.status = "error";
              out.value = e;
            }
            return out;
          }
          Promise2.resolve = resolve;
          function resolve(value) {
            if (value instanceof this) {
              return value;
            }
            return handlers.resolve(new this(INTERNAL), value);
          }
          Promise2.reject = reject;
          function reject(reason) {
            var promise = new this(INTERNAL);
            return handlers.reject(promise, reason);
          }
          Promise2.all = all;
          function all(iterable) {
            var self2 = this;
            if (Object.prototype.toString.call(iterable) !== "[object Array]") {
              return this.reject(new TypeError("must be an array"));
            }
            var len = iterable.length;
            var called = false;
            if (!len) {
              return this.resolve([]);
            }
            var values = new Array(len);
            var resolved = 0;
            var i = -1;
            var promise = new this(INTERNAL);
            while (++i < len) {
              allResolver(iterable[i], i);
            }
            return promise;
            function allResolver(value, i2) {
              self2.resolve(value).then(resolveFromAll, function(error) {
                if (!called) {
                  called = true;
                  handlers.reject(promise, error);
                }
              });
              function resolveFromAll(outValue) {
                values[i2] = outValue;
                if (++resolved === len && !called) {
                  called = true;
                  handlers.resolve(promise, values);
                }
              }
            }
          }
          Promise2.race = race;
          function race(iterable) {
            var self2 = this;
            if (Object.prototype.toString.call(iterable) !== "[object Array]") {
              return this.reject(new TypeError("must be an array"));
            }
            var len = iterable.length;
            var called = false;
            if (!len) {
              return this.resolve([]);
            }
            var i = -1;
            var promise = new this(INTERNAL);
            while (++i < len) {
              resolver(iterable[i]);
            }
            return promise;
            function resolver(value) {
              self2.resolve(value).then(function(response) {
                if (!called) {
                  called = true;
                  handlers.resolve(promise, response);
                }
              }, function(error) {
                if (!called) {
                  called = true;
                  handlers.reject(promise, error);
                }
              });
            }
          }
        }, {
          "1": 1
        }],
        3: [function(_dereq_, module3, exports3) {
          (function(global2) {
            "use strict";
            if (typeof global2.Promise !== "function") {
              global2.Promise = _dereq_(2);
            }
          }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
        }, {
          "2": 2
        }],
        4: [function(_dereq_, module3, exports3) {
          "use strict";
          var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
            return typeof obj;
          } : function(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          };
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function getIDB() {
            try {
              if (typeof indexedDB !== "undefined") {
                return indexedDB;
              }
              if (typeof webkitIndexedDB !== "undefined") {
                return webkitIndexedDB;
              }
              if (typeof mozIndexedDB !== "undefined") {
                return mozIndexedDB;
              }
              if (typeof OIndexedDB !== "undefined") {
                return OIndexedDB;
              }
              if (typeof msIndexedDB !== "undefined") {
                return msIndexedDB;
              }
            } catch (e) {
              return;
            }
          }
          var idb = getIDB();
          function isIndexedDBValid() {
            try {
              if (!idb || !idb.open) {
                return false;
              }
              var isSafari = typeof openDatabase !== "undefined" && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform);
              var hasFetch = typeof fetch === "function" && fetch.toString().indexOf("[native code") !== -1;
              return (!isSafari || hasFetch) && typeof indexedDB !== "undefined" && // some outdated implementations of IDB that appear on Samsung
              // and HTC Android devices <4.4 are missing IDBKeyRange
              // See: https://github.com/mozilla/localForage/issues/128
              // See: https://github.com/mozilla/localForage/issues/272
              typeof IDBKeyRange !== "undefined";
            } catch (e) {
              return false;
            }
          }
          function createBlob(parts, properties) {
            parts = parts || [];
            properties = properties || {};
            try {
              return new Blob(parts, properties);
            } catch (e) {
              if (e.name !== "TypeError") {
                throw e;
              }
              var Builder = typeof BlobBuilder !== "undefined" ? BlobBuilder : typeof MSBlobBuilder !== "undefined" ? MSBlobBuilder : typeof MozBlobBuilder !== "undefined" ? MozBlobBuilder : WebKitBlobBuilder;
              var builder = new Builder();
              for (var i = 0; i < parts.length; i += 1) {
                builder.append(parts[i]);
              }
              return builder.getBlob(properties.type);
            }
          }
          if (typeof Promise === "undefined") {
            _dereq_(3);
          }
          var Promise$1 = Promise;
          function executeCallback(promise, callback) {
            if (callback) {
              promise.then(function(result) {
                callback(null, result);
              }, function(error) {
                callback(error);
              });
            }
          }
          function executeTwoCallbacks(promise, callback, errorCallback) {
            if (typeof callback === "function") {
              promise.then(callback);
            }
            if (typeof errorCallback === "function") {
              promise["catch"](errorCallback);
            }
          }
          function normalizeKey(key2) {
            if (typeof key2 !== "string") {
              console.warn(key2 + " used as a key, but it is not a string.");
              key2 = String(key2);
            }
            return key2;
          }
          function getCallback() {
            if (arguments.length && typeof arguments[arguments.length - 1] === "function") {
              return arguments[arguments.length - 1];
            }
          }
          var DETECT_BLOB_SUPPORT_STORE = "local-forage-detect-blob-support";
          var supportsBlobs = void 0;
          var dbContexts = {};
          var toString = Object.prototype.toString;
          var READ_ONLY = "readonly";
          var READ_WRITE = "readwrite";
          function _binStringToArrayBuffer(bin) {
            var length2 = bin.length;
            var buf = new ArrayBuffer(length2);
            var arr = new Uint8Array(buf);
            for (var i = 0; i < length2; i++) {
              arr[i] = bin.charCodeAt(i);
            }
            return buf;
          }
          function _checkBlobSupportWithoutCaching(idb2) {
            return new Promise$1(function(resolve) {
              var txn = idb2.transaction(DETECT_BLOB_SUPPORT_STORE, READ_WRITE);
              var blob = createBlob([""]);
              txn.objectStore(DETECT_BLOB_SUPPORT_STORE).put(blob, "key");
              txn.onabort = function(e) {
                e.preventDefault();
                e.stopPropagation();
                resolve(false);
              };
              txn.oncomplete = function() {
                var matchedChrome = navigator.userAgent.match(/Chrome\/(\d+)/);
                var matchedEdge = navigator.userAgent.match(/Edge\//);
                resolve(matchedEdge || !matchedChrome || parseInt(matchedChrome[1], 10) >= 43);
              };
            })["catch"](function() {
              return false;
            });
          }
          function _checkBlobSupport(idb2) {
            if (typeof supportsBlobs === "boolean") {
              return Promise$1.resolve(supportsBlobs);
            }
            return _checkBlobSupportWithoutCaching(idb2).then(function(value) {
              supportsBlobs = value;
              return supportsBlobs;
            });
          }
          function _deferReadiness(dbInfo) {
            var dbContext = dbContexts[dbInfo.name];
            var deferredOperation = {};
            deferredOperation.promise = new Promise$1(function(resolve, reject) {
              deferredOperation.resolve = resolve;
              deferredOperation.reject = reject;
            });
            dbContext.deferredOperations.push(deferredOperation);
            if (!dbContext.dbReady) {
              dbContext.dbReady = deferredOperation.promise;
            } else {
              dbContext.dbReady = dbContext.dbReady.then(function() {
                return deferredOperation.promise;
              });
            }
          }
          function _advanceReadiness(dbInfo) {
            var dbContext = dbContexts[dbInfo.name];
            var deferredOperation = dbContext.deferredOperations.pop();
            if (deferredOperation) {
              deferredOperation.resolve();
              return deferredOperation.promise;
            }
          }
          function _rejectReadiness(dbInfo, err) {
            var dbContext = dbContexts[dbInfo.name];
            var deferredOperation = dbContext.deferredOperations.pop();
            if (deferredOperation) {
              deferredOperation.reject(err);
              return deferredOperation.promise;
            }
          }
          function _getConnection(dbInfo, upgradeNeeded) {
            return new Promise$1(function(resolve, reject) {
              dbContexts[dbInfo.name] = dbContexts[dbInfo.name] || createDbContext();
              if (dbInfo.db) {
                if (upgradeNeeded) {
                  _deferReadiness(dbInfo);
                  dbInfo.db.close();
                } else {
                  return resolve(dbInfo.db);
                }
              }
              var dbArgs = [dbInfo.name];
              if (upgradeNeeded) {
                dbArgs.push(dbInfo.version);
              }
              var openreq = idb.open.apply(idb, dbArgs);
              if (upgradeNeeded) {
                openreq.onupgradeneeded = function(e) {
                  var db = openreq.result;
                  try {
                    db.createObjectStore(dbInfo.storeName);
                    if (e.oldVersion <= 1) {
                      db.createObjectStore(DETECT_BLOB_SUPPORT_STORE);
                    }
                  } catch (ex) {
                    if (ex.name === "ConstraintError") {
                      console.warn('The database "' + dbInfo.name + '" has been upgraded from version ' + e.oldVersion + " to version " + e.newVersion + ', but the storage "' + dbInfo.storeName + '" already exists.');
                    } else {
                      throw ex;
                    }
                  }
                };
              }
              openreq.onerror = function(e) {
                e.preventDefault();
                reject(openreq.error);
              };
              openreq.onsuccess = function() {
                var db = openreq.result;
                db.onversionchange = function(e) {
                  e.target.close();
                };
                resolve(db);
                _advanceReadiness(dbInfo);
              };
            });
          }
          function _getOriginalConnection(dbInfo) {
            return _getConnection(dbInfo, false);
          }
          function _getUpgradedConnection(dbInfo) {
            return _getConnection(dbInfo, true);
          }
          function _isUpgradeNeeded(dbInfo, defaultVersion) {
            if (!dbInfo.db) {
              return true;
            }
            var isNewStore = !dbInfo.db.objectStoreNames.contains(dbInfo.storeName);
            var isDowngrade = dbInfo.version < dbInfo.db.version;
            var isUpgrade = dbInfo.version > dbInfo.db.version;
            if (isDowngrade) {
              if (dbInfo.version !== defaultVersion) {
                console.warn('The database "' + dbInfo.name + `" can't be downgraded from version ` + dbInfo.db.version + " to version " + dbInfo.version + ".");
              }
              dbInfo.version = dbInfo.db.version;
            }
            if (isUpgrade || isNewStore) {
              if (isNewStore) {
                var incVersion = dbInfo.db.version + 1;
                if (incVersion > dbInfo.version) {
                  dbInfo.version = incVersion;
                }
              }
              return true;
            }
            return false;
          }
          function _encodeBlob(blob) {
            return new Promise$1(function(resolve, reject) {
              var reader = new FileReader();
              reader.onerror = reject;
              reader.onloadend = function(e) {
                var base64 = btoa(e.target.result || "");
                resolve({
                  __local_forage_encoded_blob: true,
                  data: base64,
                  type: blob.type
                });
              };
              reader.readAsBinaryString(blob);
            });
          }
          function _decodeBlob(encodedBlob) {
            var arrayBuff = _binStringToArrayBuffer(atob(encodedBlob.data));
            return createBlob([arrayBuff], {
              type: encodedBlob.type
            });
          }
          function _isEncodedBlob(value) {
            return value && value.__local_forage_encoded_blob;
          }
          function _fullyReady(callback) {
            var self2 = this;
            var promise = self2._initReady().then(function() {
              var dbContext = dbContexts[self2._dbInfo.name];
              if (dbContext && dbContext.dbReady) {
                return dbContext.dbReady;
              }
            });
            executeTwoCallbacks(promise, callback, callback);
            return promise;
          }
          function _tryReconnect(dbInfo) {
            _deferReadiness(dbInfo);
            var dbContext = dbContexts[dbInfo.name];
            var forages = dbContext.forages;
            for (var i = 0; i < forages.length; i++) {
              var forage = forages[i];
              if (forage._dbInfo.db) {
                forage._dbInfo.db.close();
                forage._dbInfo.db = null;
              }
            }
            dbInfo.db = null;
            return _getOriginalConnection(dbInfo).then(function(db) {
              dbInfo.db = db;
              if (_isUpgradeNeeded(dbInfo)) {
                return _getUpgradedConnection(dbInfo);
              }
              return db;
            }).then(function(db) {
              dbInfo.db = dbContext.db = db;
              for (var i2 = 0; i2 < forages.length; i2++) {
                forages[i2]._dbInfo.db = db;
              }
            })["catch"](function(err) {
              _rejectReadiness(dbInfo, err);
              throw err;
            });
          }
          function createTransaction(dbInfo, mode, callback, retries) {
            if (retries === void 0) {
              retries = 1;
            }
            try {
              var tx = dbInfo.db.transaction(dbInfo.storeName, mode);
              callback(null, tx);
            } catch (err) {
              if (retries > 0 && (!dbInfo.db || err.name === "InvalidStateError" || err.name === "NotFoundError")) {
                return Promise$1.resolve().then(function() {
                  if (!dbInfo.db || err.name === "NotFoundError" && !dbInfo.db.objectStoreNames.contains(dbInfo.storeName) && dbInfo.version <= dbInfo.db.version) {
                    if (dbInfo.db) {
                      dbInfo.version = dbInfo.db.version + 1;
                    }
                    return _getUpgradedConnection(dbInfo);
                  }
                }).then(function() {
                  return _tryReconnect(dbInfo).then(function() {
                    createTransaction(dbInfo, mode, callback, retries - 1);
                  });
                })["catch"](callback);
              }
              callback(err);
            }
          }
          function createDbContext() {
            return {
              // Running localForages sharing a database.
              forages: [],
              // Shared database.
              db: null,
              // Database readiness (promise).
              dbReady: null,
              // Deferred operations on the database.
              deferredOperations: []
            };
          }
          function _initStorage(options) {
            var self2 = this;
            var dbInfo = {
              db: null
            };
            if (options) {
              for (var i in options) {
                dbInfo[i] = options[i];
              }
            }
            var dbContext = dbContexts[dbInfo.name];
            if (!dbContext) {
              dbContext = createDbContext();
              dbContexts[dbInfo.name] = dbContext;
            }
            dbContext.forages.push(self2);
            if (!self2._initReady) {
              self2._initReady = self2.ready;
              self2.ready = _fullyReady;
            }
            var initPromises = [];
            function ignoreErrors() {
              return Promise$1.resolve();
            }
            for (var j = 0; j < dbContext.forages.length; j++) {
              var forage = dbContext.forages[j];
              if (forage !== self2) {
                initPromises.push(forage._initReady()["catch"](ignoreErrors));
              }
            }
            var forages = dbContext.forages.slice(0);
            return Promise$1.all(initPromises).then(function() {
              dbInfo.db = dbContext.db;
              return _getOriginalConnection(dbInfo);
            }).then(function(db) {
              dbInfo.db = db;
              if (_isUpgradeNeeded(dbInfo, self2._defaultConfig.version)) {
                return _getUpgradedConnection(dbInfo);
              }
              return db;
            }).then(function(db) {
              dbInfo.db = dbContext.db = db;
              self2._dbInfo = dbInfo;
              for (var k = 0; k < forages.length; k++) {
                var forage2 = forages[k];
                if (forage2 !== self2) {
                  forage2._dbInfo.db = dbInfo.db;
                  forage2._dbInfo.version = dbInfo.version;
                }
              }
            });
          }
          function getItem(key2, callback) {
            var self2 = this;
            key2 = normalizeKey(key2);
            var promise = new Promise$1(function(resolve, reject) {
              self2.ready().then(function() {
                createTransaction(self2._dbInfo, READ_ONLY, function(err, transaction) {
                  if (err) {
                    return reject(err);
                  }
                  try {
                    var store = transaction.objectStore(self2._dbInfo.storeName);
                    var req = store.get(key2);
                    req.onsuccess = function() {
                      var value = req.result;
                      if (value === void 0) {
                        value = null;
                      }
                      if (_isEncodedBlob(value)) {
                        value = _decodeBlob(value);
                      }
                      resolve(value);
                    };
                    req.onerror = function() {
                      reject(req.error);
                    };
                  } catch (e) {
                    reject(e);
                  }
                });
              })["catch"](reject);
            });
            executeCallback(promise, callback);
            return promise;
          }
          function iterate(iterator, callback) {
            var self2 = this;
            var promise = new Promise$1(function(resolve, reject) {
              self2.ready().then(function() {
                createTransaction(self2._dbInfo, READ_ONLY, function(err, transaction) {
                  if (err) {
                    return reject(err);
                  }
                  try {
                    var store = transaction.objectStore(self2._dbInfo.storeName);
                    var req = store.openCursor();
                    var iterationNumber = 1;
                    req.onsuccess = function() {
                      var cursor = req.result;
                      if (cursor) {
                        var value = cursor.value;
                        if (_isEncodedBlob(value)) {
                          value = _decodeBlob(value);
                        }
                        var result = iterator(value, cursor.key, iterationNumber++);
                        if (result !== void 0) {
                          resolve(result);
                        } else {
                          cursor["continue"]();
                        }
                      } else {
                        resolve();
                      }
                    };
                    req.onerror = function() {
                      reject(req.error);
                    };
                  } catch (e) {
                    reject(e);
                  }
                });
              })["catch"](reject);
            });
            executeCallback(promise, callback);
            return promise;
          }
          function setItem(key2, value, callback) {
            var self2 = this;
            key2 = normalizeKey(key2);
            var promise = new Promise$1(function(resolve, reject) {
              var dbInfo;
              self2.ready().then(function() {
                dbInfo = self2._dbInfo;
                if (toString.call(value) === "[object Blob]") {
                  return _checkBlobSupport(dbInfo.db).then(function(blobSupport) {
                    if (blobSupport) {
                      return value;
                    }
                    return _encodeBlob(value);
                  });
                }
                return value;
              }).then(function(value2) {
                createTransaction(self2._dbInfo, READ_WRITE, function(err, transaction) {
                  if (err) {
                    return reject(err);
                  }
                  try {
                    var store = transaction.objectStore(self2._dbInfo.storeName);
                    if (value2 === null) {
                      value2 = void 0;
                    }
                    var req = store.put(value2, key2);
                    transaction.oncomplete = function() {
                      if (value2 === void 0) {
                        value2 = null;
                      }
                      resolve(value2);
                    };
                    transaction.onabort = transaction.onerror = function() {
                      var err2 = req.error ? req.error : req.transaction.error;
                      reject(err2);
                    };
                  } catch (e) {
                    reject(e);
                  }
                });
              })["catch"](reject);
            });
            executeCallback(promise, callback);
            return promise;
          }
          function removeItem(key2, callback) {
            var self2 = this;
            key2 = normalizeKey(key2);
            var promise = new Promise$1(function(resolve, reject) {
              self2.ready().then(function() {
                createTransaction(self2._dbInfo, READ_WRITE, function(err, transaction) {
                  if (err) {
                    return reject(err);
                  }
                  try {
                    var store = transaction.objectStore(self2._dbInfo.storeName);
                    var req = store["delete"](key2);
                    transaction.oncomplete = function() {
                      resolve();
                    };
                    transaction.onerror = function() {
                      reject(req.error);
                    };
                    transaction.onabort = function() {
                      var err2 = req.error ? req.error : req.transaction.error;
                      reject(err2);
                    };
                  } catch (e) {
                    reject(e);
                  }
                });
              })["catch"](reject);
            });
            executeCallback(promise, callback);
            return promise;
          }
          function clear(callback) {
            var self2 = this;
            var promise = new Promise$1(function(resolve, reject) {
              self2.ready().then(function() {
                createTransaction(self2._dbInfo, READ_WRITE, function(err, transaction) {
                  if (err) {
                    return reject(err);
                  }
                  try {
                    var store = transaction.objectStore(self2._dbInfo.storeName);
                    var req = store.clear();
                    transaction.oncomplete = function() {
                      resolve();
                    };
                    transaction.onabort = transaction.onerror = function() {
                      var err2 = req.error ? req.error : req.transaction.error;
                      reject(err2);
                    };
                  } catch (e) {
                    reject(e);
                  }
                });
              })["catch"](reject);
            });
            executeCallback(promise, callback);
            return promise;
          }
          function length(callback) {
            var self2 = this;
            var promise = new Promise$1(function(resolve, reject) {
              self2.ready().then(function() {
                createTransaction(self2._dbInfo, READ_ONLY, function(err, transaction) {
                  if (err) {
                    return reject(err);
                  }
                  try {
                    var store = transaction.objectStore(self2._dbInfo.storeName);
                    var req = store.count();
                    req.onsuccess = function() {
                      resolve(req.result);
                    };
                    req.onerror = function() {
                      reject(req.error);
                    };
                  } catch (e) {
                    reject(e);
                  }
                });
              })["catch"](reject);
            });
            executeCallback(promise, callback);
            return promise;
          }
          function key(n, callback) {
            var self2 = this;
            var promise = new Promise$1(function(resolve, reject) {
              if (n < 0) {
                resolve(null);
                return;
              }
              self2.ready().then(function() {
                createTransaction(self2._dbInfo, READ_ONLY, function(err, transaction) {
                  if (err) {
                    return reject(err);
                  }
                  try {
                    var store = transaction.objectStore(self2._dbInfo.storeName);
                    var advanced = false;
                    var req = store.openKeyCursor();
                    req.onsuccess = function() {
                      var cursor = req.result;
                      if (!cursor) {
                        resolve(null);
                        return;
                      }
                      if (n === 0) {
                        resolve(cursor.key);
                      } else {
                        if (!advanced) {
                          advanced = true;
                          cursor.advance(n);
                        } else {
                          resolve(cursor.key);
                        }
                      }
                    };
                    req.onerror = function() {
                      reject(req.error);
                    };
                  } catch (e) {
                    reject(e);
                  }
                });
              })["catch"](reject);
            });
            executeCallback(promise, callback);
            return promise;
          }
          function keys(callback) {
            var self2 = this;
            var promise = new Promise$1(function(resolve, reject) {
              self2.ready().then(function() {
                createTransaction(self2._dbInfo, READ_ONLY, function(err, transaction) {
                  if (err) {
                    return reject(err);
                  }
                  try {
                    var store = transaction.objectStore(self2._dbInfo.storeName);
                    var req = store.openKeyCursor();
                    var keys2 = [];
                    req.onsuccess = function() {
                      var cursor = req.result;
                      if (!cursor) {
                        resolve(keys2);
                        return;
                      }
                      keys2.push(cursor.key);
                      cursor["continue"]();
                    };
                    req.onerror = function() {
                      reject(req.error);
                    };
                  } catch (e) {
                    reject(e);
                  }
                });
              })["catch"](reject);
            });
            executeCallback(promise, callback);
            return promise;
          }
          function dropInstance(options, callback) {
            callback = getCallback.apply(this, arguments);
            var currentConfig = this.config();
            options = typeof options !== "function" && options || {};
            if (!options.name) {
              options.name = options.name || currentConfig.name;
              options.storeName = options.storeName || currentConfig.storeName;
            }
            var self2 = this;
            var promise;
            if (!options.name) {
              promise = Promise$1.reject("Invalid arguments");
            } else {
              var isCurrentDb = options.name === currentConfig.name && self2._dbInfo.db;
              var dbPromise = isCurrentDb ? Promise$1.resolve(self2._dbInfo.db) : _getOriginalConnection(options).then(function(db) {
                var dbContext = dbContexts[options.name];
                var forages = dbContext.forages;
                dbContext.db = db;
                for (var i = 0; i < forages.length; i++) {
                  forages[i]._dbInfo.db = db;
                }
                return db;
              });
              if (!options.storeName) {
                promise = dbPromise.then(function(db) {
                  _deferReadiness(options);
                  var dbContext = dbContexts[options.name];
                  var forages = dbContext.forages;
                  db.close();
                  for (var i = 0; i < forages.length; i++) {
                    var forage = forages[i];
                    forage._dbInfo.db = null;
                  }
                  var dropDBPromise = new Promise$1(function(resolve, reject) {
                    var req = idb.deleteDatabase(options.name);
                    req.onerror = function() {
                      var db2 = req.result;
                      if (db2) {
                        db2.close();
                      }
                      reject(req.error);
                    };
                    req.onblocked = function() {
                      console.warn('dropInstance blocked for database "' + options.name + '" until all open connections are closed');
                    };
                    req.onsuccess = function() {
                      var db2 = req.result;
                      if (db2) {
                        db2.close();
                      }
                      resolve(db2);
                    };
                  });
                  return dropDBPromise.then(function(db2) {
                    dbContext.db = db2;
                    for (var i2 = 0; i2 < forages.length; i2++) {
                      var _forage = forages[i2];
                      _advanceReadiness(_forage._dbInfo);
                    }
                  })["catch"](function(err) {
                    (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function() {
                    });
                    throw err;
                  });
                });
              } else {
                promise = dbPromise.then(function(db) {
                  if (!db.objectStoreNames.contains(options.storeName)) {
                    return;
                  }
                  var newVersion = db.version + 1;
                  _deferReadiness(options);
                  var dbContext = dbContexts[options.name];
                  var forages = dbContext.forages;
                  db.close();
                  for (var i = 0; i < forages.length; i++) {
                    var forage = forages[i];
                    forage._dbInfo.db = null;
                    forage._dbInfo.version = newVersion;
                  }
                  var dropObjectPromise = new Promise$1(function(resolve, reject) {
                    var req = idb.open(options.name, newVersion);
                    req.onerror = function(err) {
                      var db2 = req.result;
                      db2.close();
                      reject(err);
                    };
                    req.onupgradeneeded = function() {
                      var db2 = req.result;
                      db2.deleteObjectStore(options.storeName);
                    };
                    req.onsuccess = function() {
                      var db2 = req.result;
                      db2.close();
                      resolve(db2);
                    };
                  });
                  return dropObjectPromise.then(function(db2) {
                    dbContext.db = db2;
                    for (var j = 0; j < forages.length; j++) {
                      var _forage2 = forages[j];
                      _forage2._dbInfo.db = db2;
                      _advanceReadiness(_forage2._dbInfo);
                    }
                  })["catch"](function(err) {
                    (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function() {
                    });
                    throw err;
                  });
                });
              }
            }
            executeCallback(promise, callback);
            return promise;
          }
          var asyncStorage = {
            _driver: "asyncStorage",
            _initStorage,
            _support: isIndexedDBValid(),
            iterate,
            getItem,
            setItem,
            removeItem,
            clear,
            length,
            key,
            keys,
            dropInstance
          };
          function isWebSQLValid() {
            return typeof openDatabase === "function";
          }
          var BASE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
          var BLOB_TYPE_PREFIX = "~~local_forage_type~";
          var BLOB_TYPE_PREFIX_REGEX = /^~~local_forage_type~([^~]+)~/;
          var SERIALIZED_MARKER = "__lfsc__:";
          var SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER.length;
          var TYPE_ARRAYBUFFER = "arbf";
          var TYPE_BLOB = "blob";
          var TYPE_INT8ARRAY = "si08";
          var TYPE_UINT8ARRAY = "ui08";
          var TYPE_UINT8CLAMPEDARRAY = "uic8";
          var TYPE_INT16ARRAY = "si16";
          var TYPE_INT32ARRAY = "si32";
          var TYPE_UINT16ARRAY = "ur16";
          var TYPE_UINT32ARRAY = "ui32";
          var TYPE_FLOAT32ARRAY = "fl32";
          var TYPE_FLOAT64ARRAY = "fl64";
          var TYPE_SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER_LENGTH + TYPE_ARRAYBUFFER.length;
          var toString$1 = Object.prototype.toString;
          function stringToBuffer(serializedString) {
            var bufferLength = serializedString.length * 0.75;
            var len = serializedString.length;
            var i;
            var p = 0;
            var encoded1, encoded2, encoded3, encoded4;
            if (serializedString[serializedString.length - 1] === "=") {
              bufferLength--;
              if (serializedString[serializedString.length - 2] === "=") {
                bufferLength--;
              }
            }
            var buffer = new ArrayBuffer(bufferLength);
            var bytes = new Uint8Array(buffer);
            for (i = 0; i < len; i += 4) {
              encoded1 = BASE_CHARS.indexOf(serializedString[i]);
              encoded2 = BASE_CHARS.indexOf(serializedString[i + 1]);
              encoded3 = BASE_CHARS.indexOf(serializedString[i + 2]);
              encoded4 = BASE_CHARS.indexOf(serializedString[i + 3]);
              bytes[p++] = encoded1 << 2 | encoded2 >> 4;
              bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
              bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
            }
            return buffer;
          }
          function bufferToString(buffer) {
            var bytes = new Uint8Array(buffer);
            var base64String = "";
            var i;
            for (i = 0; i < bytes.length; i += 3) {
              base64String += BASE_CHARS[bytes[i] >> 2];
              base64String += BASE_CHARS[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
              base64String += BASE_CHARS[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
              base64String += BASE_CHARS[bytes[i + 2] & 63];
            }
            if (bytes.length % 3 === 2) {
              base64String = base64String.substring(0, base64String.length - 1) + "=";
            } else if (bytes.length % 3 === 1) {
              base64String = base64String.substring(0, base64String.length - 2) + "==";
            }
            return base64String;
          }
          function serialize(value, callback) {
            var valueType = "";
            if (value) {
              valueType = toString$1.call(value);
            }
            if (value && (valueType === "[object ArrayBuffer]" || value.buffer && toString$1.call(value.buffer) === "[object ArrayBuffer]")) {
              var buffer;
              var marker = SERIALIZED_MARKER;
              if (value instanceof ArrayBuffer) {
                buffer = value;
                marker += TYPE_ARRAYBUFFER;
              } else {
                buffer = value.buffer;
                if (valueType === "[object Int8Array]") {
                  marker += TYPE_INT8ARRAY;
                } else if (valueType === "[object Uint8Array]") {
                  marker += TYPE_UINT8ARRAY;
                } else if (valueType === "[object Uint8ClampedArray]") {
                  marker += TYPE_UINT8CLAMPEDARRAY;
                } else if (valueType === "[object Int16Array]") {
                  marker += TYPE_INT16ARRAY;
                } else if (valueType === "[object Uint16Array]") {
                  marker += TYPE_UINT16ARRAY;
                } else if (valueType === "[object Int32Array]") {
                  marker += TYPE_INT32ARRAY;
                } else if (valueType === "[object Uint32Array]") {
                  marker += TYPE_UINT32ARRAY;
                } else if (valueType === "[object Float32Array]") {
                  marker += TYPE_FLOAT32ARRAY;
                } else if (valueType === "[object Float64Array]") {
                  marker += TYPE_FLOAT64ARRAY;
                } else {
                  callback(new Error("Failed to get type for BinaryArray"));
                }
              }
              callback(marker + bufferToString(buffer));
            } else if (valueType === "[object Blob]") {
              var fileReader = new FileReader();
              fileReader.onload = function() {
                var str = BLOB_TYPE_PREFIX + value.type + "~" + bufferToString(this.result);
                callback(SERIALIZED_MARKER + TYPE_BLOB + str);
              };
              fileReader.readAsArrayBuffer(value);
            } else {
              try {
                callback(JSON.stringify(value));
              } catch (e) {
                console.error("Couldn't convert value into a JSON string: ", value);
                callback(null, e);
              }
            }
          }
          function deserialize(value) {
            if (value.substring(0, SERIALIZED_MARKER_LENGTH) !== SERIALIZED_MARKER) {
              return JSON.parse(value);
            }
            var serializedString = value.substring(TYPE_SERIALIZED_MARKER_LENGTH);
            var type = value.substring(SERIALIZED_MARKER_LENGTH, TYPE_SERIALIZED_MARKER_LENGTH);
            var blobType;
            if (type === TYPE_BLOB && BLOB_TYPE_PREFIX_REGEX.test(serializedString)) {
              var matcher = serializedString.match(BLOB_TYPE_PREFIX_REGEX);
              blobType = matcher[1];
              serializedString = serializedString.substring(matcher[0].length);
            }
            var buffer = stringToBuffer(serializedString);
            switch (type) {
              case TYPE_ARRAYBUFFER:
                return buffer;
              case TYPE_BLOB:
                return createBlob([buffer], {
                  type: blobType
                });
              case TYPE_INT8ARRAY:
                return new Int8Array(buffer);
              case TYPE_UINT8ARRAY:
                return new Uint8Array(buffer);
              case TYPE_UINT8CLAMPEDARRAY:
                return new Uint8ClampedArray(buffer);
              case TYPE_INT16ARRAY:
                return new Int16Array(buffer);
              case TYPE_UINT16ARRAY:
                return new Uint16Array(buffer);
              case TYPE_INT32ARRAY:
                return new Int32Array(buffer);
              case TYPE_UINT32ARRAY:
                return new Uint32Array(buffer);
              case TYPE_FLOAT32ARRAY:
                return new Float32Array(buffer);
              case TYPE_FLOAT64ARRAY:
                return new Float64Array(buffer);
              default:
                throw new Error("Unkown type: " + type);
            }
          }
          var localforageSerializer = {
            serialize,
            deserialize,
            stringToBuffer,
            bufferToString
          };
          function createDbTable(t, dbInfo, callback, errorCallback) {
            t.executeSql("CREATE TABLE IF NOT EXISTS " + dbInfo.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], callback, errorCallback);
          }
          function _initStorage$1(options) {
            var self2 = this;
            var dbInfo = {
              db: null
            };
            if (options) {
              for (var i in options) {
                dbInfo[i] = typeof options[i] !== "string" ? options[i].toString() : options[i];
              }
            }
            var dbInfoPromise = new Promise$1(function(resolve, reject) {
              try {
                dbInfo.db = openDatabase(dbInfo.name, String(dbInfo.version), dbInfo.description, dbInfo.size);
              } catch (e) {
                return reject(e);
              }
              dbInfo.db.transaction(function(t) {
                createDbTable(t, dbInfo, function() {
                  self2._dbInfo = dbInfo;
                  resolve();
                }, function(t2, error) {
                  reject(error);
                });
              }, reject);
            });
            dbInfo.serializer = localforageSerializer;
            return dbInfoPromise;
          }
          function tryExecuteSql(t, dbInfo, sqlStatement, args, callback, errorCallback) {
            t.executeSql(sqlStatement, args, callback, function(t2, error) {
              if (error.code === error.SYNTAX_ERR) {
                t2.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [dbInfo.storeName], function(t3, results) {
                  if (!results.rows.length) {
                    createDbTable(t3, dbInfo, function() {
                      t3.executeSql(sqlStatement, args, callback, errorCallback);
                    }, errorCallback);
                  } else {
                    errorCallback(t3, error);
                  }
                }, errorCallback);
              } else {
                errorCallback(t2, error);
              }
            }, errorCallback);
          }
          function getItem$1(key2, callback) {
            var self2 = this;
            key2 = normalizeKey(key2);
            var promise = new Promise$1(function(resolve, reject) {
              self2.ready().then(function() {
                var dbInfo = self2._dbInfo;
                dbInfo.db.transaction(function(t) {
                  tryExecuteSql(t, dbInfo, "SELECT * FROM " + dbInfo.storeName + " WHERE key = ? LIMIT 1", [key2], function(t2, results) {
                    var result = results.rows.length ? results.rows.item(0).value : null;
                    if (result) {
                      result = dbInfo.serializer.deserialize(result);
                    }
                    resolve(result);
                  }, function(t2, error) {
                    reject(error);
                  });
                });
              })["catch"](reject);
            });
            executeCallback(promise, callback);
            return promise;
          }
          function iterate$1(iterator, callback) {
            var self2 = this;
            var promise = new Promise$1(function(resolve, reject) {
              self2.ready().then(function() {
                var dbInfo = self2._dbInfo;
                dbInfo.db.transaction(function(t) {
                  tryExecuteSql(t, dbInfo, "SELECT * FROM " + dbInfo.storeName, [], function(t2, results) {
                    var rows = results.rows;
                    var length2 = rows.length;
                    for (var i = 0; i < length2; i++) {
                      var item = rows.item(i);
                      var result = item.value;
                      if (result) {
                        result = dbInfo.serializer.deserialize(result);
                      }
                      result = iterator(result, item.key, i + 1);
                      if (result !== void 0) {
                        resolve(result);
                        return;
                      }
                    }
                    resolve();
                  }, function(t2, error) {
                    reject(error);
                  });
                });
              })["catch"](reject);
            });
            executeCallback(promise, callback);
            return promise;
          }
          function _setItem(key2, value, callback, retriesLeft) {
            var self2 = this;
            key2 = normalizeKey(key2);
            var promise = new Promise$1(function(resolve, reject) {
              self2.ready().then(function() {
                if (value === void 0) {
                  value = null;
                }
                var originalValue = value;
                var dbInfo = self2._dbInfo;
                dbInfo.serializer.serialize(value, function(value2, error) {
                  if (error) {
                    reject(error);
                  } else {
                    dbInfo.db.transaction(function(t) {
                      tryExecuteSql(t, dbInfo, "INSERT OR REPLACE INTO " + dbInfo.storeName + " (key, value) VALUES (?, ?)", [key2, value2], function() {
                        resolve(originalValue);
                      }, function(t2, error2) {
                        reject(error2);
                      });
                    }, function(sqlError) {
                      if (sqlError.code === sqlError.QUOTA_ERR) {
                        if (retriesLeft > 0) {
                          resolve(_setItem.apply(self2, [key2, originalValue, callback, retriesLeft - 1]));
                          return;
                        }
                        reject(sqlError);
                      }
                    });
                  }
                });
              })["catch"](reject);
            });
            executeCallback(promise, callback);
            return promise;
          }
          function setItem$1(key2, value, callback) {
            return _setItem.apply(this, [key2, value, callback, 1]);
          }
          function removeItem$1(key2, callback) {
            var self2 = this;
            key2 = normalizeKey(key2);
            var promise = new Promise$1(function(resolve, reject) {
              self2.ready().then(function() {
                var dbInfo = self2._dbInfo;
                dbInfo.db.transaction(function(t) {
                  tryExecuteSql(t, dbInfo, "DELETE FROM " + dbInfo.storeName + " WHERE key = ?", [key2], function() {
                    resolve();
                  }, function(t2, error) {
                    reject(error);
                  });
                });
              })["catch"](reject);
            });
            executeCallback(promise, callback);
            return promise;
          }
          function clear$1(callback) {
            var self2 = this;
            var promise = new Promise$1(function(resolve, reject) {
              self2.ready().then(function() {
                var dbInfo = self2._dbInfo;
                dbInfo.db.transaction(function(t) {
                  tryExecuteSql(t, dbInfo, "DELETE FROM " + dbInfo.storeName, [], function() {
                    resolve();
                  }, function(t2, error) {
                    reject(error);
                  });
                });
              })["catch"](reject);
            });
            executeCallback(promise, callback);
            return promise;
          }
          function length$1(callback) {
            var self2 = this;
            var promise = new Promise$1(function(resolve, reject) {
              self2.ready().then(function() {
                var dbInfo = self2._dbInfo;
                dbInfo.db.transaction(function(t) {
                  tryExecuteSql(t, dbInfo, "SELECT COUNT(key) as c FROM " + dbInfo.storeName, [], function(t2, results) {
                    var result = results.rows.item(0).c;
                    resolve(result);
                  }, function(t2, error) {
                    reject(error);
                  });
                });
              })["catch"](reject);
            });
            executeCallback(promise, callback);
            return promise;
          }
          function key$1(n, callback) {
            var self2 = this;
            var promise = new Promise$1(function(resolve, reject) {
              self2.ready().then(function() {
                var dbInfo = self2._dbInfo;
                dbInfo.db.transaction(function(t) {
                  tryExecuteSql(t, dbInfo, "SELECT key FROM " + dbInfo.storeName + " WHERE id = ? LIMIT 1", [n + 1], function(t2, results) {
                    var result = results.rows.length ? results.rows.item(0).key : null;
                    resolve(result);
                  }, function(t2, error) {
                    reject(error);
                  });
                });
              })["catch"](reject);
            });
            executeCallback(promise, callback);
            return promise;
          }
          function keys$1(callback) {
            var self2 = this;
            var promise = new Promise$1(function(resolve, reject) {
              self2.ready().then(function() {
                var dbInfo = self2._dbInfo;
                dbInfo.db.transaction(function(t) {
                  tryExecuteSql(t, dbInfo, "SELECT key FROM " + dbInfo.storeName, [], function(t2, results) {
                    var keys2 = [];
                    for (var i = 0; i < results.rows.length; i++) {
                      keys2.push(results.rows.item(i).key);
                    }
                    resolve(keys2);
                  }, function(t2, error) {
                    reject(error);
                  });
                });
              })["catch"](reject);
            });
            executeCallback(promise, callback);
            return promise;
          }
          function getAllStoreNames(db) {
            return new Promise$1(function(resolve, reject) {
              db.transaction(function(t) {
                t.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(t2, results) {
                  var storeNames = [];
                  for (var i = 0; i < results.rows.length; i++) {
                    storeNames.push(results.rows.item(i).name);
                  }
                  resolve({
                    db,
                    storeNames
                  });
                }, function(t2, error) {
                  reject(error);
                });
              }, function(sqlError) {
                reject(sqlError);
              });
            });
          }
          function dropInstance$1(options, callback) {
            callback = getCallback.apply(this, arguments);
            var currentConfig = this.config();
            options = typeof options !== "function" && options || {};
            if (!options.name) {
              options.name = options.name || currentConfig.name;
              options.storeName = options.storeName || currentConfig.storeName;
            }
            var self2 = this;
            var promise;
            if (!options.name) {
              promise = Promise$1.reject("Invalid arguments");
            } else {
              promise = new Promise$1(function(resolve) {
                var db;
                if (options.name === currentConfig.name) {
                  db = self2._dbInfo.db;
                } else {
                  db = openDatabase(options.name, "", "", 0);
                }
                if (!options.storeName) {
                  resolve(getAllStoreNames(db));
                } else {
                  resolve({
                    db,
                    storeNames: [options.storeName]
                  });
                }
              }).then(function(operationInfo) {
                return new Promise$1(function(resolve, reject) {
                  operationInfo.db.transaction(function(t) {
                    function dropTable(storeName) {
                      return new Promise$1(function(resolve2, reject2) {
                        t.executeSql("DROP TABLE IF EXISTS " + storeName, [], function() {
                          resolve2();
                        }, function(t2, error) {
                          reject2(error);
                        });
                      });
                    }
                    var operations = [];
                    for (var i = 0, len = operationInfo.storeNames.length; i < len; i++) {
                      operations.push(dropTable(operationInfo.storeNames[i]));
                    }
                    Promise$1.all(operations).then(function() {
                      resolve();
                    })["catch"](function(e) {
                      reject(e);
                    });
                  }, function(sqlError) {
                    reject(sqlError);
                  });
                });
              });
            }
            executeCallback(promise, callback);
            return promise;
          }
          var webSQLStorage = {
            _driver: "webSQLStorage",
            _initStorage: _initStorage$1,
            _support: isWebSQLValid(),
            iterate: iterate$1,
            getItem: getItem$1,
            setItem: setItem$1,
            removeItem: removeItem$1,
            clear: clear$1,
            length: length$1,
            key: key$1,
            keys: keys$1,
            dropInstance: dropInstance$1
          };
          function isLocalStorageValid() {
            try {
              return typeof localStorage !== "undefined" && "setItem" in localStorage && // in IE8 typeof localStorage.setItem === 'object'
              !!localStorage.setItem;
            } catch (e) {
              return false;
            }
          }
          function _getKeyPrefix(options, defaultConfig2) {
            var keyPrefix = options.name + "/";
            if (options.storeName !== defaultConfig2.storeName) {
              keyPrefix += options.storeName + "/";
            }
            return keyPrefix;
          }
          function checkIfLocalStorageThrows() {
            var localStorageTestKey = "_localforage_support_test";
            try {
              localStorage.setItem(localStorageTestKey, true);
              localStorage.removeItem(localStorageTestKey);
              return false;
            } catch (e) {
              return true;
            }
          }
          function _isLocalStorageUsable() {
            return !checkIfLocalStorageThrows() || localStorage.length > 0;
          }
          function _initStorage$2(options) {
            var self2 = this;
            var dbInfo = {};
            if (options) {
              for (var i in options) {
                dbInfo[i] = options[i];
              }
            }
            dbInfo.keyPrefix = _getKeyPrefix(options, self2._defaultConfig);
            if (!_isLocalStorageUsable()) {
              return Promise$1.reject();
            }
            self2._dbInfo = dbInfo;
            dbInfo.serializer = localforageSerializer;
            return Promise$1.resolve();
          }
          function clear$2(callback) {
            var self2 = this;
            var promise = self2.ready().then(function() {
              var keyPrefix = self2._dbInfo.keyPrefix;
              for (var i = localStorage.length - 1; i >= 0; i--) {
                var key2 = localStorage.key(i);
                if (key2.indexOf(keyPrefix) === 0) {
                  localStorage.removeItem(key2);
                }
              }
            });
            executeCallback(promise, callback);
            return promise;
          }
          function getItem$2(key2, callback) {
            var self2 = this;
            key2 = normalizeKey(key2);
            var promise = self2.ready().then(function() {
              var dbInfo = self2._dbInfo;
              var result = localStorage.getItem(dbInfo.keyPrefix + key2);
              if (result) {
                result = dbInfo.serializer.deserialize(result);
              }
              return result;
            });
            executeCallback(promise, callback);
            return promise;
          }
          function iterate$2(iterator, callback) {
            var self2 = this;
            var promise = self2.ready().then(function() {
              var dbInfo = self2._dbInfo;
              var keyPrefix = dbInfo.keyPrefix;
              var keyPrefixLength = keyPrefix.length;
              var length2 = localStorage.length;
              var iterationNumber = 1;
              for (var i = 0; i < length2; i++) {
                var key2 = localStorage.key(i);
                if (key2.indexOf(keyPrefix) !== 0) {
                  continue;
                }
                var value = localStorage.getItem(key2);
                if (value) {
                  value = dbInfo.serializer.deserialize(value);
                }
                value = iterator(value, key2.substring(keyPrefixLength), iterationNumber++);
                if (value !== void 0) {
                  return value;
                }
              }
            });
            executeCallback(promise, callback);
            return promise;
          }
          function key$2(n, callback) {
            var self2 = this;
            var promise = self2.ready().then(function() {
              var dbInfo = self2._dbInfo;
              var result;
              try {
                result = localStorage.key(n);
              } catch (error) {
                result = null;
              }
              if (result) {
                result = result.substring(dbInfo.keyPrefix.length);
              }
              return result;
            });
            executeCallback(promise, callback);
            return promise;
          }
          function keys$2(callback) {
            var self2 = this;
            var promise = self2.ready().then(function() {
              var dbInfo = self2._dbInfo;
              var length2 = localStorage.length;
              var keys2 = [];
              for (var i = 0; i < length2; i++) {
                var itemKey = localStorage.key(i);
                if (itemKey.indexOf(dbInfo.keyPrefix) === 0) {
                  keys2.push(itemKey.substring(dbInfo.keyPrefix.length));
                }
              }
              return keys2;
            });
            executeCallback(promise, callback);
            return promise;
          }
          function length$2(callback) {
            var self2 = this;
            var promise = self2.keys().then(function(keys2) {
              return keys2.length;
            });
            executeCallback(promise, callback);
            return promise;
          }
          function removeItem$2(key2, callback) {
            var self2 = this;
            key2 = normalizeKey(key2);
            var promise = self2.ready().then(function() {
              var dbInfo = self2._dbInfo;
              localStorage.removeItem(dbInfo.keyPrefix + key2);
            });
            executeCallback(promise, callback);
            return promise;
          }
          function setItem$2(key2, value, callback) {
            var self2 = this;
            key2 = normalizeKey(key2);
            var promise = self2.ready().then(function() {
              if (value === void 0) {
                value = null;
              }
              var originalValue = value;
              return new Promise$1(function(resolve, reject) {
                var dbInfo = self2._dbInfo;
                dbInfo.serializer.serialize(value, function(value2, error) {
                  if (error) {
                    reject(error);
                  } else {
                    try {
                      localStorage.setItem(dbInfo.keyPrefix + key2, value2);
                      resolve(originalValue);
                    } catch (e) {
                      if (e.name === "QuotaExceededError" || e.name === "NS_ERROR_DOM_QUOTA_REACHED") {
                        reject(e);
                      }
                      reject(e);
                    }
                  }
                });
              });
            });
            executeCallback(promise, callback);
            return promise;
          }
          function dropInstance$2(options, callback) {
            callback = getCallback.apply(this, arguments);
            options = typeof options !== "function" && options || {};
            if (!options.name) {
              var currentConfig = this.config();
              options.name = options.name || currentConfig.name;
              options.storeName = options.storeName || currentConfig.storeName;
            }
            var self2 = this;
            var promise;
            if (!options.name) {
              promise = Promise$1.reject("Invalid arguments");
            } else {
              promise = new Promise$1(function(resolve) {
                if (!options.storeName) {
                  resolve(options.name + "/");
                } else {
                  resolve(_getKeyPrefix(options, self2._defaultConfig));
                }
              }).then(function(keyPrefix) {
                for (var i = localStorage.length - 1; i >= 0; i--) {
                  var key2 = localStorage.key(i);
                  if (key2.indexOf(keyPrefix) === 0) {
                    localStorage.removeItem(key2);
                  }
                }
              });
            }
            executeCallback(promise, callback);
            return promise;
          }
          var localStorageWrapper = {
            _driver: "localStorageWrapper",
            _initStorage: _initStorage$2,
            _support: isLocalStorageValid(),
            iterate: iterate$2,
            getItem: getItem$2,
            setItem: setItem$2,
            removeItem: removeItem$2,
            clear: clear$2,
            length: length$2,
            key: key$2,
            keys: keys$2,
            dropInstance: dropInstance$2
          };
          var sameValue = function sameValue2(x, y) {
            return x === y || typeof x === "number" && typeof y === "number" && isNaN(x) && isNaN(y);
          };
          var includes = function includes2(array, searchElement) {
            var len = array.length;
            var i = 0;
            while (i < len) {
              if (sameValue(array[i], searchElement)) {
                return true;
              }
              i++;
            }
            return false;
          };
          var isArray = Array.isArray || function(arg) {
            return Object.prototype.toString.call(arg) === "[object Array]";
          };
          var DefinedDrivers = {};
          var DriverSupport = {};
          var DefaultDrivers = {
            INDEXEDDB: asyncStorage,
            WEBSQL: webSQLStorage,
            LOCALSTORAGE: localStorageWrapper
          };
          var DefaultDriverOrder = [DefaultDrivers.INDEXEDDB._driver, DefaultDrivers.WEBSQL._driver, DefaultDrivers.LOCALSTORAGE._driver];
          var OptionalDriverMethods = ["dropInstance"];
          var LibraryMethods = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(OptionalDriverMethods);
          var DefaultConfig = {
            description: "",
            driver: DefaultDriverOrder.slice(),
            name: "localforage",
            // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
            // we can use without a prompt.
            size: 4980736,
            storeName: "keyvaluepairs",
            version: 1
          };
          function callWhenReady(localForageInstance, libraryMethod) {
            localForageInstance[libraryMethod] = function() {
              var _args = arguments;
              return localForageInstance.ready().then(function() {
                return localForageInstance[libraryMethod].apply(localForageInstance, _args);
              });
            };
          }
          function extend() {
            for (var i = 1; i < arguments.length; i++) {
              var arg = arguments[i];
              if (arg) {
                for (var _key in arg) {
                  if (arg.hasOwnProperty(_key)) {
                    if (isArray(arg[_key])) {
                      arguments[0][_key] = arg[_key].slice();
                    } else {
                      arguments[0][_key] = arg[_key];
                    }
                  }
                }
              }
            }
            return arguments[0];
          }
          var LocalForage2 = function() {
            function LocalForage3(options) {
              _classCallCheck(this, LocalForage3);
              for (var driverTypeKey in DefaultDrivers) {
                if (DefaultDrivers.hasOwnProperty(driverTypeKey)) {
                  var driver = DefaultDrivers[driverTypeKey];
                  var driverName = driver._driver;
                  this[driverTypeKey] = driverName;
                  if (!DefinedDrivers[driverName]) {
                    this.defineDriver(driver);
                  }
                }
              }
              this._defaultConfig = extend({}, DefaultConfig);
              this._config = extend({}, this._defaultConfig, options);
              this._driverSet = null;
              this._initDriver = null;
              this._ready = false;
              this._dbInfo = null;
              this._wrapLibraryMethodsWithReady();
              this.setDriver(this._config.driver)["catch"](function() {
              });
            }
            LocalForage3.prototype.config = function config(options) {
              if ((typeof options === "undefined" ? "undefined" : _typeof(options)) === "object") {
                if (this._ready) {
                  return new Error("Can't call config() after localforage has been used.");
                }
                for (var i in options) {
                  if (i === "storeName") {
                    options[i] = options[i].replace(/\W/g, "_");
                  }
                  if (i === "version" && typeof options[i] !== "number") {
                    return new Error("Database version must be a number.");
                  }
                  this._config[i] = options[i];
                }
                if ("driver" in options && options.driver) {
                  return this.setDriver(this._config.driver);
                }
                return true;
              } else if (typeof options === "string") {
                return this._config[options];
              } else {
                return this._config;
              }
            };
            LocalForage3.prototype.defineDriver = function defineDriver(driverObject, callback, errorCallback) {
              var promise = new Promise$1(function(resolve, reject) {
                try {
                  var driverName = driverObject._driver;
                  var complianceError = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
                  if (!driverObject._driver) {
                    reject(complianceError);
                    return;
                  }
                  var driverMethods = LibraryMethods.concat("_initStorage");
                  for (var i = 0, len = driverMethods.length; i < len; i++) {
                    var driverMethodName = driverMethods[i];
                    var isRequired = !includes(OptionalDriverMethods, driverMethodName);
                    if ((isRequired || driverObject[driverMethodName]) && typeof driverObject[driverMethodName] !== "function") {
                      reject(complianceError);
                      return;
                    }
                  }
                  var configureMissingMethods = function configureMissingMethods2() {
                    var methodNotImplementedFactory = function methodNotImplementedFactory2(methodName) {
                      return function() {
                        var error = new Error("Method " + methodName + " is not implemented by the current driver");
                        var promise2 = Promise$1.reject(error);
                        executeCallback(promise2, arguments[arguments.length - 1]);
                        return promise2;
                      };
                    };
                    for (var _i = 0, _len = OptionalDriverMethods.length; _i < _len; _i++) {
                      var optionalDriverMethod = OptionalDriverMethods[_i];
                      if (!driverObject[optionalDriverMethod]) {
                        driverObject[optionalDriverMethod] = methodNotImplementedFactory(optionalDriverMethod);
                      }
                    }
                  };
                  configureMissingMethods();
                  var setDriverSupport = function setDriverSupport2(support) {
                    if (DefinedDrivers[driverName]) {
                      console.info("Redefining LocalForage driver: " + driverName);
                    }
                    DefinedDrivers[driverName] = driverObject;
                    DriverSupport[driverName] = support;
                    resolve();
                  };
                  if ("_support" in driverObject) {
                    if (driverObject._support && typeof driverObject._support === "function") {
                      driverObject._support().then(setDriverSupport, reject);
                    } else {
                      setDriverSupport(!!driverObject._support);
                    }
                  } else {
                    setDriverSupport(true);
                  }
                } catch (e) {
                  reject(e);
                }
              });
              executeTwoCallbacks(promise, callback, errorCallback);
              return promise;
            };
            LocalForage3.prototype.driver = function driver() {
              return this._driver || null;
            };
            LocalForage3.prototype.getDriver = function getDriver(driverName, callback, errorCallback) {
              var getDriverPromise = DefinedDrivers[driverName] ? Promise$1.resolve(DefinedDrivers[driverName]) : Promise$1.reject(new Error("Driver not found."));
              executeTwoCallbacks(getDriverPromise, callback, errorCallback);
              return getDriverPromise;
            };
            LocalForage3.prototype.getSerializer = function getSerializer(callback) {
              var serializerPromise = Promise$1.resolve(localforageSerializer);
              executeTwoCallbacks(serializerPromise, callback);
              return serializerPromise;
            };
            LocalForage3.prototype.ready = function ready(callback) {
              var self2 = this;
              var promise = self2._driverSet.then(function() {
                if (self2._ready === null) {
                  self2._ready = self2._initDriver();
                }
                return self2._ready;
              });
              executeTwoCallbacks(promise, callback, callback);
              return promise;
            };
            LocalForage3.prototype.setDriver = function setDriver(drivers, callback, errorCallback) {
              var self2 = this;
              if (!isArray(drivers)) {
                drivers = [drivers];
              }
              var supportedDrivers = this._getSupportedDrivers(drivers);
              function setDriverToConfig() {
                self2._config.driver = self2.driver();
              }
              function extendSelfWithDriver(driver) {
                self2._extend(driver);
                setDriverToConfig();
                self2._ready = self2._initStorage(self2._config);
                return self2._ready;
              }
              function initDriver(supportedDrivers2) {
                return function() {
                  var currentDriverIndex = 0;
                  function driverPromiseLoop() {
                    while (currentDriverIndex < supportedDrivers2.length) {
                      var driverName = supportedDrivers2[currentDriverIndex];
                      currentDriverIndex++;
                      self2._dbInfo = null;
                      self2._ready = null;
                      return self2.getDriver(driverName).then(extendSelfWithDriver)["catch"](driverPromiseLoop);
                    }
                    setDriverToConfig();
                    var error = new Error("No available storage method found.");
                    self2._driverSet = Promise$1.reject(error);
                    return self2._driverSet;
                  }
                  return driverPromiseLoop();
                };
              }
              var oldDriverSetDone = this._driverSet !== null ? this._driverSet["catch"](function() {
                return Promise$1.resolve();
              }) : Promise$1.resolve();
              this._driverSet = oldDriverSetDone.then(function() {
                var driverName = supportedDrivers[0];
                self2._dbInfo = null;
                self2._ready = null;
                return self2.getDriver(driverName).then(function(driver) {
                  self2._driver = driver._driver;
                  setDriverToConfig();
                  self2._wrapLibraryMethodsWithReady();
                  self2._initDriver = initDriver(supportedDrivers);
                });
              })["catch"](function() {
                setDriverToConfig();
                var error = new Error("No available storage method found.");
                self2._driverSet = Promise$1.reject(error);
                return self2._driverSet;
              });
              executeTwoCallbacks(this._driverSet, callback, errorCallback);
              return this._driverSet;
            };
            LocalForage3.prototype.supports = function supports(driverName) {
              return !!DriverSupport[driverName];
            };
            LocalForage3.prototype._extend = function _extend(libraryMethodsAndProperties) {
              extend(this, libraryMethodsAndProperties);
            };
            LocalForage3.prototype._getSupportedDrivers = function _getSupportedDrivers(drivers) {
              var supportedDrivers = [];
              for (var i = 0, len = drivers.length; i < len; i++) {
                var driverName = drivers[i];
                if (this.supports(driverName)) {
                  supportedDrivers.push(driverName);
                }
              }
              return supportedDrivers;
            };
            LocalForage3.prototype._wrapLibraryMethodsWithReady = function _wrapLibraryMethodsWithReady() {
              for (var i = 0, len = LibraryMethods.length; i < len; i++) {
                callWhenReady(this, LibraryMethods[i]);
              }
            };
            LocalForage3.prototype.createInstance = function createInstance(options) {
              return new LocalForage3(options);
            };
            return LocalForage3;
          }();
          var localforage_js = new LocalForage2();
          module3.exports = localforage_js;
        }, {
          "3": 3
        }]
      }, {}, [4])(4);
    });
  }
});

// node_modules/@ionic/storage/dist/esm/index.js
var import_localforage = __toESM(require_localforage());
var Drivers = {
  SecureStorage: "ionicSecureStorage",
  IndexedDB: import_localforage.default.INDEXEDDB,
  LocalStorage: import_localforage.default.LOCALSTORAGE
};
var defaultConfig = {
  name: "_ionicstorage",
  storeName: "_ionickv",
  dbKey: "_ionickey",
  driverOrder: [Drivers.SecureStorage, Drivers.IndexedDB, Drivers.LocalStorage]
};
var Storage = class {
  /**
   * Create a new Storage instance using the order of drivers and any additional config
   * options to pass to LocalForage.
   *
   * Possible default driverOrder options are: ['indexeddb', 'localstorage'] and the
   * default is that exact ordering.
   *
   * When using Ionic Secure Storage (enterprise only), use ['ionicSecureStorage', 'indexeddb', 'localstorage'] to ensure
   * Secure Storage is used when available, or fall back to IndexedDB or LocalStorage on the web.
   */
  constructor(config = defaultConfig) {
    this._db = null;
    this._secureStorageDriver = null;
    const actualConfig = Object.assign({}, defaultConfig, config || {});
    this._config = actualConfig;
  }
  create() {
    return __async(this, null, function* () {
      const db = import_localforage.default.createInstance(this._config);
      this._db = db;
      yield db.setDriver(this._config.driverOrder || []);
      return this;
    });
  }
  /**
   * Define a new Driver. Must be called before
   * initializing the database. Example:
   *
   * await storage.defineDriver(myDriver);
   * await storage.create();
   */
  defineDriver(driver) {
    return __async(this, null, function* () {
      if (driver._driver === Drivers.SecureStorage) {
        this._secureStorageDriver = driver;
      }
      return import_localforage.default.defineDriver(driver);
    });
  }
  /**
   * Get the name of the driver being used.
   * @returns Name of the driver
   */
  get driver() {
    var _a;
    return ((_a = this._db) === null || _a === void 0 ? void 0 : _a.driver()) || null;
  }
  assertDb() {
    if (!this._db) {
      throw new Error("Database not created. Must call create() first");
    }
    return this._db;
  }
  /**
   * Get the value associated with the given key.
   * @param key the key to identify this value
   * @returns Returns a promise with the value of the given key
   */
  get(key) {
    const db = this.assertDb();
    return db.getItem(key);
  }
  /**
   * Set the value for the given key.
   * @param key the key to identify this value
   * @param value the value for this key
   * @returns Returns a promise that resolves when the key and value are set
   */
  set(key, value) {
    const db = this.assertDb();
    return db.setItem(key, value);
  }
  /**
   * Remove any value associated with this key.
   * @param key the key to identify this value
   * @returns Returns a promise that resolves when the value is removed
   */
  remove(key) {
    const db = this.assertDb();
    return db.removeItem(key);
  }
  /**
   * Clear the entire key value store. WARNING: HOT!
   * @returns Returns a promise that resolves when the store is cleared
   */
  clear() {
    const db = this.assertDb();
    return db.clear();
  }
  /**
   * @returns Returns a promise that resolves with the number of keys stored.
   */
  length() {
    const db = this.assertDb();
    return db.length();
  }
  /**
   * @returns Returns a promise that resolves with the keys in the store.
   */
  keys() {
    const db = this.assertDb();
    return db.keys();
  }
  /**
   * Iterate through each key,value pair.
   * @param iteratorCallback a callback of the form (value, key, iterationNumber)
   * @returns Returns a promise that resolves when the iteration has finished.
   */
  forEach(iteratorCallback) {
    const db = this.assertDb();
    return db.iterate(iteratorCallback);
  }
  setEncryptionKey(key) {
    var _a;
    if (!this._secureStorageDriver) {
      throw new Error("@ionic-enterprise/secure-storage not installed. Encryption support not available");
    } else {
      (_a = this._secureStorageDriver) === null || _a === void 0 ? void 0 : _a.setEncryptionKey(key);
    }
  }
};

// node_modules/@ionic/storage-angular/fesm2020/ionic-storage-angular.mjs
var StorageConfigToken = new InjectionToken("STORAGE_CONFIG_TOKEN");
var NoopStorage = class extends Storage {
  constructor() {
    super();
  }
  create() {
    return __async(this, null, function* () {
      return this;
    });
  }
  defineDriver() {
    return __async(this, null, function* () {
    });
  }
  get driver() {
    return "noop";
  }
  get(key) {
    return __async(this, null, function* () {
      return null;
    });
  }
  set(key, value) {
    return __async(this, null, function* () {
    });
  }
  remove(key) {
    return __async(this, null, function* () {
    });
  }
  clear() {
    return __async(this, null, function* () {
    });
  }
  length() {
    return __async(this, null, function* () {
      return 0;
    });
  }
  keys() {
    return __async(this, null, function* () {
      return [];
    });
  }
  // eslint-disable-next-line @typescript-eslint/ban-types
  forEach(iteratorCallback) {
    return __async(this, null, function* () {
    });
  }
  setEncryptionKey(key) {
  }
};
function provideStorage(platformId, storageConfig) {
  if (isPlatformServer(platformId)) {
    return new NoopStorage();
  }
  return new Storage(storageConfig);
}
var IonicStorageModule = class _IonicStorageModule {
  static forRoot(storageConfig = null) {
    return {
      ngModule: _IonicStorageModule,
      providers: [{
        provide: StorageConfigToken,
        useValue: storageConfig
      }, {
        provide: Storage,
        useFactory: provideStorage,
        deps: [PLATFORM_ID, StorageConfigToken]
      }]
    };
  }
};
IonicStorageModule.\u0275fac = function IonicStorageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || IonicStorageModule)();
};
IonicStorageModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: IonicStorageModule
});
IonicStorageModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonicStorageModule, [{
    type: NgModule
  }], null, null);
})();

// src/app/services/utils/storage.service.ts
var _StorageService = class _StorageService {
  constructor(storage) {
    this.storage = storage;
    this._storage = null;
  }
  init() {
    return __async(this, null, function* () {
      this._storage = yield this.storage.create();
    });
  }
  set(key, value) {
    return __async(this, null, function* () {
      var _a;
      yield this.init();
      yield (_a = this._storage) == null ? void 0 : _a.set(key, value);
    });
  }
  get(key) {
    return __async(this, null, function* () {
      var _a;
      yield this.init();
      return yield (_a = this._storage) == null ? void 0 : _a.get(key);
    });
  }
  remove(key) {
    return __async(this, null, function* () {
      var _a;
      yield this.init();
      yield (_a = this._storage) == null ? void 0 : _a.remove(key);
    });
  }
};
_StorageService.\u0275fac = function StorageService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StorageService)(\u0275\u0275inject(Storage));
};
_StorageService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StorageService, factory: _StorageService.\u0275fac, providedIn: "root" });
var StorageService = _StorageService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StorageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Storage }], null);
})();

export {
  IonicStorageModule,
  StorageService
};
/*! Bundled license information:

localforage/dist/localforage.js:
  (*!
      localForage -- Offline Storage, Improved
      Version 1.10.0
      https://localforage.github.io/localForage
      (c) 2013-2017 Mozilla, Apache License 2.0
  *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9sb2NhbGZvcmFnZS9kaXN0L2xvY2FsZm9yYWdlLmpzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9zdG9yYWdlL2Rpc3QvZXNtL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9zdG9yYWdlLWFuZ3VsYXIvZmVzbTIwMjAvaW9uaWMtc3RvcmFnZS1hbmd1bGFyLm1qcyIsInNyYy9hcHAvc2VydmljZXMvdXRpbHMvc3RvcmFnZS5zZXJ2aWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICAgIGxvY2FsRm9yYWdlIC0tIE9mZmxpbmUgU3RvcmFnZSwgSW1wcm92ZWRcbiAgICBWZXJzaW9uIDEuMTAuMFxuICAgIGh0dHBzOi8vbG9jYWxmb3JhZ2UuZ2l0aHViLmlvL2xvY2FsRm9yYWdlXG4gICAgKGMpIDIwMTMtMjAxNyBNb3ppbGxhLCBBcGFjaGUgTGljZW5zZSAyLjBcbiovXG4oZnVuY3Rpb24gKGYpIHtcbiAgaWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBtb2R1bGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGYoKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbXSwgZik7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGc7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGcgPSB3aW5kb3c7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBnID0gZ2xvYmFsO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGcgPSBzZWxmO1xuICAgIH0gZWxzZSB7XG4gICAgICBnID0gdGhpcztcbiAgICB9XG4gICAgZy5sb2NhbGZvcmFnZSA9IGYoKTtcbiAgfVxufSkoZnVuY3Rpb24gKCkge1xuICB2YXIgZGVmaW5lLCBtb2R1bGUsIGV4cG9ydHM7XG4gIHJldHVybiBmdW5jdGlvbiBlKHQsIG4sIHIpIHtcbiAgICBmdW5jdGlvbiBzKG8sIHUpIHtcbiAgICAgIGlmICghbltvXSkge1xuICAgICAgICBpZiAoIXRbb10pIHtcbiAgICAgICAgICB2YXIgYSA9IHR5cGVvZiByZXF1aXJlID09IFwiZnVuY3Rpb25cIiAmJiByZXF1aXJlO1xuICAgICAgICAgIGlmICghdSAmJiBhKSByZXR1cm4gYShvLCAhMCk7XG4gICAgICAgICAgaWYgKGkpIHJldHVybiBpKG8sICEwKTtcbiAgICAgICAgICB2YXIgZiA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBvICsgXCInXCIpO1xuICAgICAgICAgIHRocm93IGYuY29kZSA9IFwiTU9EVUxFX05PVF9GT1VORFwiLCBmO1xuICAgICAgICB9XG4gICAgICAgIHZhciBsID0gbltvXSA9IHtcbiAgICAgICAgICBleHBvcnRzOiB7fVxuICAgICAgICB9O1xuICAgICAgICB0W29dWzBdLmNhbGwobC5leHBvcnRzLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHZhciBuID0gdFtvXVsxXVtlXTtcbiAgICAgICAgICByZXR1cm4gcyhuID8gbiA6IGUpO1xuICAgICAgICB9LCBsLCBsLmV4cG9ydHMsIGUsIHQsIG4sIHIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5bb10uZXhwb3J0cztcbiAgICB9XG4gICAgdmFyIGkgPSB0eXBlb2YgcmVxdWlyZSA9PSBcImZ1bmN0aW9uXCIgJiYgcmVxdWlyZTtcbiAgICBmb3IgKHZhciBvID0gMDsgbyA8IHIubGVuZ3RoOyBvKyspIHMocltvXSk7XG4gICAgcmV0dXJuIHM7XG4gIH0oe1xuICAgIDE6IFtmdW5jdGlvbiAoX2RlcmVxXywgbW9kdWxlLCBleHBvcnRzKSB7XG4gICAgICAoZnVuY3Rpb24gKGdsb2JhbCkge1xuICAgICAgICAndXNlIHN0cmljdCc7XG5cbiAgICAgICAgdmFyIE11dGF0aW9uID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7XG4gICAgICAgIHZhciBzY2hlZHVsZURyYWluO1xuICAgICAgICB7XG4gICAgICAgICAgaWYgKE11dGF0aW9uKSB7XG4gICAgICAgICAgICB2YXIgY2FsbGVkID0gMDtcbiAgICAgICAgICAgIHZhciBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbihuZXh0VGljayk7XG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IGdsb2JhbC5kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIHtcbiAgICAgICAgICAgICAgY2hhcmFjdGVyRGF0YTogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzY2hlZHVsZURyYWluID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBlbGVtZW50LmRhdGEgPSBjYWxsZWQgPSArK2NhbGxlZCAlIDI7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZWxzZSBpZiAoIWdsb2JhbC5zZXRJbW1lZGlhdGUgJiYgdHlwZW9mIGdsb2JhbC5NZXNzYWdlQ2hhbm5lbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHZhciBjaGFubmVsID0gbmV3IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBuZXh0VGljaztcbiAgICAgICAgICAgIHNjaGVkdWxlRHJhaW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoMCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZWxzZSBpZiAoJ2RvY3VtZW50JyBpbiBnbG9iYWwgJiYgJ29ucmVhZHlzdGF0ZWNoYW5nZScgaW4gZ2xvYmFsLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpKSB7XG4gICAgICAgICAgICBzY2hlZHVsZURyYWluID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAvLyBDcmVhdGUgYSA8c2NyaXB0PiBlbGVtZW50OyBpdHMgcmVhZHlzdGF0ZWNoYW5nZSBldmVudCB3aWxsIGJlIGZpcmVkIGFzeW5jaHJvbm91c2x5IG9uY2UgaXQgaXMgaW5zZXJ0ZWRcbiAgICAgICAgICAgICAgLy8gaW50byB0aGUgZG9jdW1lbnQuIERvIHNvLCB0aHVzIHF1ZXVpbmcgdXAgdGhlIHRhc2suIFJlbWVtYmVyIHRvIGNsZWFuIHVwIG9uY2UgaXQncyBiZWVuIGNhbGxlZC5cbiAgICAgICAgICAgICAgdmFyIHNjcmlwdEVsID0gZ2xvYmFsLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICAgICAgICBzY3JpcHRFbC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbmV4dFRpY2soKTtcbiAgICAgICAgICAgICAgICBzY3JpcHRFbC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIHNjcmlwdEVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0RWwpO1xuICAgICAgICAgICAgICAgIHNjcmlwdEVsID0gbnVsbDtcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgZ2xvYmFsLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChzY3JpcHRFbCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzY2hlZHVsZURyYWluID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KG5leHRUaWNrLCAwKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBkcmFpbmluZztcbiAgICAgICAgdmFyIHF1ZXVlID0gW107XG4gICAgICAgIC8vbmFtZWQgbmV4dFRpY2sgZm9yIGxlc3MgY29uZnVzaW5nIHN0YWNrIHRyYWNlc1xuICAgICAgICBmdW5jdGlvbiBuZXh0VGljaygpIHtcbiAgICAgICAgICBkcmFpbmluZyA9IHRydWU7XG4gICAgICAgICAgdmFyIGksIG9sZFF1ZXVlO1xuICAgICAgICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgICAgICAgd2hpbGUgKGxlbikge1xuICAgICAgICAgICAgb2xkUXVldWUgPSBxdWV1ZTtcbiAgICAgICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgICAgICBpID0gLTE7XG4gICAgICAgICAgICB3aGlsZSAoKytpIDwgbGVuKSB7XG4gICAgICAgICAgICAgIG9sZFF1ZXVlW2ldKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBpbW1lZGlhdGU7XG4gICAgICAgIGZ1bmN0aW9uIGltbWVkaWF0ZSh0YXNrKSB7XG4gICAgICAgICAgaWYgKHF1ZXVlLnB1c2godGFzaykgPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgICAgICBzY2hlZHVsZURyYWluKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KS5jYWxsKHRoaXMsIHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pO1xuICAgIH0sIHt9XSxcbiAgICAyOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICB2YXIgaW1tZWRpYXRlID0gX2RlcmVxXygxKTtcblxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgIGZ1bmN0aW9uIElOVEVSTkFMKCkge31cbiAgICAgIHZhciBoYW5kbGVycyA9IHt9O1xuICAgICAgdmFyIFJFSkVDVEVEID0gWydSRUpFQ1RFRCddO1xuICAgICAgdmFyIEZVTEZJTExFRCA9IFsnRlVMRklMTEVEJ107XG4gICAgICB2YXIgUEVORElORyA9IFsnUEVORElORyddO1xuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlO1xuICAgICAgZnVuY3Rpb24gUHJvbWlzZShyZXNvbHZlcikge1xuICAgICAgICBpZiAodHlwZW9mIHJlc29sdmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigncmVzb2x2ZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGF0ZSA9IFBFTkRJTkc7XG4gICAgICAgIHRoaXMucXVldWUgPSBbXTtcbiAgICAgICAgdGhpcy5vdXRjb21lID0gdm9pZCAwO1xuICAgICAgICBpZiAocmVzb2x2ZXIgIT09IElOVEVSTkFMKSB7XG4gICAgICAgICAgc2FmZWx5UmVzb2x2ZVRoZW5hYmxlKHRoaXMsIHJlc29sdmVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUHJvbWlzZS5wcm90b3R5cGVbXCJjYXRjaFwiXSA9IGZ1bmN0aW9uIChvblJlamVjdGVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRoZW4obnVsbCwgb25SZWplY3RlZCk7XG4gICAgICB9O1xuICAgICAgUHJvbWlzZS5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uIChvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgICAgICBpZiAodHlwZW9mIG9uRnVsZmlsbGVkICE9PSAnZnVuY3Rpb24nICYmIHRoaXMuc3RhdGUgPT09IEZVTEZJTExFRCB8fCB0eXBlb2Ygb25SZWplY3RlZCAhPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzLnN0YXRlID09PSBSRUpFQ1RFRCkge1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwcm9taXNlID0gbmV3IHRoaXMuY29uc3RydWN0b3IoSU5URVJOQUwpO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gUEVORElORykge1xuICAgICAgICAgIHZhciByZXNvbHZlciA9IHRoaXMuc3RhdGUgPT09IEZVTEZJTExFRCA/IG9uRnVsZmlsbGVkIDogb25SZWplY3RlZDtcbiAgICAgICAgICB1bndyYXAocHJvbWlzZSwgcmVzb2x2ZXIsIHRoaXMub3V0Y29tZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5xdWV1ZS5wdXNoKG5ldyBRdWV1ZUl0ZW0ocHJvbWlzZSwgb25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgIH07XG4gICAgICBmdW5jdGlvbiBRdWV1ZUl0ZW0ocHJvbWlzZSwgb25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICAgICAgaWYgKHR5cGVvZiBvbkZ1bGZpbGxlZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRoaXMub25GdWxmaWxsZWQgPSBvbkZ1bGZpbGxlZDtcbiAgICAgICAgICB0aGlzLmNhbGxGdWxmaWxsZWQgPSB0aGlzLm90aGVyQ2FsbEZ1bGZpbGxlZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIG9uUmVqZWN0ZWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0aGlzLm9uUmVqZWN0ZWQgPSBvblJlamVjdGVkO1xuICAgICAgICAgIHRoaXMuY2FsbFJlamVjdGVkID0gdGhpcy5vdGhlckNhbGxSZWplY3RlZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUXVldWVJdGVtLnByb3RvdHlwZS5jYWxsRnVsZmlsbGVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGhhbmRsZXJzLnJlc29sdmUodGhpcy5wcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9O1xuICAgICAgUXVldWVJdGVtLnByb3RvdHlwZS5vdGhlckNhbGxGdWxmaWxsZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdW53cmFwKHRoaXMucHJvbWlzZSwgdGhpcy5vbkZ1bGZpbGxlZCwgdmFsdWUpO1xuICAgICAgfTtcbiAgICAgIFF1ZXVlSXRlbS5wcm90b3R5cGUuY2FsbFJlamVjdGVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGhhbmRsZXJzLnJlamVjdCh0aGlzLnByb21pc2UsIHZhbHVlKTtcbiAgICAgIH07XG4gICAgICBRdWV1ZUl0ZW0ucHJvdG90eXBlLm90aGVyQ2FsbFJlamVjdGVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHVud3JhcCh0aGlzLnByb21pc2UsIHRoaXMub25SZWplY3RlZCwgdmFsdWUpO1xuICAgICAgfTtcbiAgICAgIGZ1bmN0aW9uIHVud3JhcChwcm9taXNlLCBmdW5jLCB2YWx1ZSkge1xuICAgICAgICBpbW1lZGlhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciByZXR1cm5WYWx1ZTtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSBmdW5jKHZhbHVlKTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlcnMucmVqZWN0KHByb21pc2UsIGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmV0dXJuVmFsdWUgPT09IHByb21pc2UpIHtcbiAgICAgICAgICAgIGhhbmRsZXJzLnJlamVjdChwcm9taXNlLCBuZXcgVHlwZUVycm9yKCdDYW5ub3QgcmVzb2x2ZSBwcm9taXNlIHdpdGggaXRzZWxmJykpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBoYW5kbGVycy5yZXNvbHZlKHByb21pc2UsIHJldHVyblZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaGFuZGxlcnMucmVzb2x2ZSA9IGZ1bmN0aW9uIChzZWxmLCB2YWx1ZSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gdHJ5Q2F0Y2goZ2V0VGhlbiwgdmFsdWUpO1xuICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gJ2Vycm9yJykge1xuICAgICAgICAgIHJldHVybiBoYW5kbGVycy5yZWplY3Qoc2VsZiwgcmVzdWx0LnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdGhlbmFibGUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh0aGVuYWJsZSkge1xuICAgICAgICAgIHNhZmVseVJlc29sdmVUaGVuYWJsZShzZWxmLCB0aGVuYWJsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZi5zdGF0ZSA9IEZVTEZJTExFRDtcbiAgICAgICAgICBzZWxmLm91dGNvbWUgPSB2YWx1ZTtcbiAgICAgICAgICB2YXIgaSA9IC0xO1xuICAgICAgICAgIHZhciBsZW4gPSBzZWxmLnF1ZXVlLmxlbmd0aDtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgbGVuKSB7XG4gICAgICAgICAgICBzZWxmLnF1ZXVlW2ldLmNhbGxGdWxmaWxsZWQodmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICAgIH07XG4gICAgICBoYW5kbGVycy5yZWplY3QgPSBmdW5jdGlvbiAoc2VsZiwgZXJyb3IpIHtcbiAgICAgICAgc2VsZi5zdGF0ZSA9IFJFSkVDVEVEO1xuICAgICAgICBzZWxmLm91dGNvbWUgPSBlcnJvcjtcbiAgICAgICAgdmFyIGkgPSAtMTtcbiAgICAgICAgdmFyIGxlbiA9IHNlbGYucXVldWUubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoKytpIDwgbGVuKSB7XG4gICAgICAgICAgc2VsZi5xdWV1ZVtpXS5jYWxsUmVqZWN0ZWQoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgICAgfTtcbiAgICAgIGZ1bmN0aW9uIGdldFRoZW4ob2JqKSB7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBvbmx5IGFjY2VzcyB0aGUgYWNjZXNzb3Igb25jZSBhcyByZXF1aXJlZCBieSB0aGUgc3BlY1xuICAgICAgICB2YXIgdGhlbiA9IG9iaiAmJiBvYmoudGhlbjtcbiAgICAgICAgaWYgKG9iaiAmJiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJykgJiYgdHlwZW9mIHRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gYXBweVRoZW4oKSB7XG4gICAgICAgICAgICB0aGVuLmFwcGx5KG9iaiwgYXJndW1lbnRzKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBzYWZlbHlSZXNvbHZlVGhlbmFibGUoc2VsZiwgdGhlbmFibGUpIHtcbiAgICAgICAgLy8gRWl0aGVyIGZ1bGZpbGwsIHJlamVjdCBvciByZWplY3Qgd2l0aCBlcnJvclxuICAgICAgICB2YXIgY2FsbGVkID0gZmFsc2U7XG4gICAgICAgIGZ1bmN0aW9uIG9uRXJyb3IodmFsdWUpIHtcbiAgICAgICAgICBpZiAoY2FsbGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgaGFuZGxlcnMucmVqZWN0KHNlbGYsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBvblN1Y2Nlc3ModmFsdWUpIHtcbiAgICAgICAgICBpZiAoY2FsbGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgaGFuZGxlcnMucmVzb2x2ZShzZWxmLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gdHJ5VG9VbndyYXAoKSB7XG4gICAgICAgICAgdGhlbmFibGUob25TdWNjZXNzLCBvbkVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVzdWx0ID0gdHJ5Q2F0Y2godHJ5VG9VbndyYXApO1xuICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gJ2Vycm9yJykge1xuICAgICAgICAgIG9uRXJyb3IocmVzdWx0LnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZnVuY3Rpb24gdHJ5Q2F0Y2goZnVuYywgdmFsdWUpIHtcbiAgICAgICAgdmFyIG91dCA9IHt9O1xuICAgICAgICB0cnkge1xuICAgICAgICAgIG91dC52YWx1ZSA9IGZ1bmModmFsdWUpO1xuICAgICAgICAgIG91dC5zdGF0dXMgPSAnc3VjY2Vzcyc7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBvdXQuc3RhdHVzID0gJ2Vycm9yJztcbiAgICAgICAgICBvdXQudmFsdWUgPSBlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgICB9XG4gICAgICBQcm9taXNlLnJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgZnVuY3Rpb24gcmVzb2x2ZSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiB0aGlzKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoYW5kbGVycy5yZXNvbHZlKG5ldyB0aGlzKElOVEVSTkFMKSwgdmFsdWUpO1xuICAgICAgfVxuICAgICAgUHJvbWlzZS5yZWplY3QgPSByZWplY3Q7XG4gICAgICBmdW5jdGlvbiByZWplY3QocmVhc29uKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gbmV3IHRoaXMoSU5URVJOQUwpO1xuICAgICAgICByZXR1cm4gaGFuZGxlcnMucmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gICAgICB9XG4gICAgICBQcm9taXNlLmFsbCA9IGFsbDtcbiAgICAgIGZ1bmN0aW9uIGFsbChpdGVyYWJsZSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaXRlcmFibGUpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucmVqZWN0KG5ldyBUeXBlRXJyb3IoJ211c3QgYmUgYW4gYXJyYXknKSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGxlbiA9IGl0ZXJhYmxlLmxlbmd0aDtcbiAgICAgICAgdmFyIGNhbGxlZCA9IGZhbHNlO1xuICAgICAgICBpZiAoIWxlbikge1xuICAgICAgICAgIHJldHVybiB0aGlzLnJlc29sdmUoW10pO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZXMgPSBuZXcgQXJyYXkobGVuKTtcbiAgICAgICAgdmFyIHJlc29sdmVkID0gMDtcbiAgICAgICAgdmFyIGkgPSAtMTtcbiAgICAgICAgdmFyIHByb21pc2UgPSBuZXcgdGhpcyhJTlRFUk5BTCk7XG4gICAgICAgIHdoaWxlICgrK2kgPCBsZW4pIHtcbiAgICAgICAgICBhbGxSZXNvbHZlcihpdGVyYWJsZVtpXSwgaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICAgIGZ1bmN0aW9uIGFsbFJlc29sdmVyKHZhbHVlLCBpKSB7XG4gICAgICAgICAgc2VsZi5yZXNvbHZlKHZhbHVlKS50aGVuKHJlc29sdmVGcm9tQWxsLCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmICghY2FsbGVkKSB7XG4gICAgICAgICAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGhhbmRsZXJzLnJlamVjdChwcm9taXNlLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZnVuY3Rpb24gcmVzb2x2ZUZyb21BbGwob3V0VmFsdWUpIHtcbiAgICAgICAgICAgIHZhbHVlc1tpXSA9IG91dFZhbHVlO1xuICAgICAgICAgICAgaWYgKCsrcmVzb2x2ZWQgPT09IGxlbiAmJiAhY2FsbGVkKSB7XG4gICAgICAgICAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGhhbmRsZXJzLnJlc29sdmUocHJvbWlzZSwgdmFsdWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFByb21pc2UucmFjZSA9IHJhY2U7XG4gICAgICBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVyYWJsZSkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5yZWplY3QobmV3IFR5cGVFcnJvcignbXVzdCBiZSBhbiBhcnJheScpKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbGVuID0gaXRlcmFibGUubGVuZ3RoO1xuICAgICAgICB2YXIgY2FsbGVkID0gZmFsc2U7XG4gICAgICAgIGlmICghbGVuKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucmVzb2x2ZShbXSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGkgPSAtMTtcbiAgICAgICAgdmFyIHByb21pc2UgPSBuZXcgdGhpcyhJTlRFUk5BTCk7XG4gICAgICAgIHdoaWxlICgrK2kgPCBsZW4pIHtcbiAgICAgICAgICByZXNvbHZlcihpdGVyYWJsZVtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICAgIGZ1bmN0aW9uIHJlc29sdmVyKHZhbHVlKSB7XG4gICAgICAgICAgc2VsZi5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgICAgICAgICAgY2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgaGFuZGxlcnMucmVzb2x2ZShwcm9taXNlLCByZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgICAgICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBoYW5kbGVycy5yZWplY3QocHJvbWlzZSwgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAgXCIxXCI6IDFcbiAgICB9XSxcbiAgICAzOiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgKGZ1bmN0aW9uIChnbG9iYWwpIHtcbiAgICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICAgIGlmICh0eXBlb2YgZ2xvYmFsLlByb21pc2UgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBnbG9iYWwuUHJvbWlzZSA9IF9kZXJlcV8oMik7XG4gICAgICAgIH1cbiAgICAgIH0pLmNhbGwodGhpcywgdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSk7XG4gICAgfSwge1xuICAgICAgXCIyXCI6IDJcbiAgICB9XSxcbiAgICA0OiBbZnVuY3Rpb24gKF9kZXJlcV8sIG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgICB2YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICAgIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgICAgfTtcbiAgICAgIGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgICAgICAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBnZXRJREIoKSB7XG4gICAgICAgIC8qIGdsb2JhbCBpbmRleGVkREIsd2Via2l0SW5kZXhlZERCLG1vekluZGV4ZWREQixPSW5kZXhlZERCLG1zSW5kZXhlZERCICovXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBpbmRleGVkREIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5kZXhlZERCO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIHdlYmtpdEluZGV4ZWREQiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiB3ZWJraXRJbmRleGVkREI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgbW96SW5kZXhlZERCICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIG1vekluZGV4ZWREQjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBPSW5kZXhlZERCICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIE9JbmRleGVkREI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgbXNJbmRleGVkREIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gbXNJbmRleGVkREI7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YXIgaWRiID0gZ2V0SURCKCk7XG4gICAgICBmdW5jdGlvbiBpc0luZGV4ZWREQlZhbGlkKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIEluaXRpYWxpemUgSW5kZXhlZERCOyBmYWxsIGJhY2sgdG8gdmVuZG9yLXByZWZpeGVkIHZlcnNpb25zXG4gICAgICAgICAgLy8gaWYgbmVlZGVkLlxuICAgICAgICAgIGlmICghaWRiIHx8ICFpZGIub3Blbikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBXZSBtaW1pYyBQb3VjaERCIGhlcmU7XG4gICAgICAgICAgLy9cbiAgICAgICAgICAvLyBXZSB0ZXN0IGZvciBvcGVuRGF0YWJhc2UgYmVjYXVzZSBJRSBNb2JpbGUgaWRlbnRpZmllcyBpdHNlbGZcbiAgICAgICAgICAvLyBhcyBTYWZhcmkuIE9oIHRoZSBsdWx6Li4uXG4gICAgICAgICAgdmFyIGlzU2FmYXJpID0gdHlwZW9mIG9wZW5EYXRhYmFzZSAhPT0gJ3VuZGVmaW5lZCcgJiYgLyhTYWZhcml8aVBob25lfGlQYWR8aVBvZCkvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgIS9DaHJvbWUvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgIS9CbGFja0JlcnJ5Ly50ZXN0KG5hdmlnYXRvci5wbGF0Zm9ybSk7XG4gICAgICAgICAgdmFyIGhhc0ZldGNoID0gdHlwZW9mIGZldGNoID09PSAnZnVuY3Rpb24nICYmIGZldGNoLnRvU3RyaW5nKCkuaW5kZXhPZignW25hdGl2ZSBjb2RlJykgIT09IC0xO1xuXG4gICAgICAgICAgLy8gU2FmYXJpIDwxMC4xIGRvZXMgbm90IG1lZXQgb3VyIHJlcXVpcmVtZW50cyBmb3IgSURCIHN1cHBvcnRcbiAgICAgICAgICAvLyAoc2VlOiBodHRwczovL2dpdGh1Yi5jb20vcG91Y2hkYi9wb3VjaGRiL2lzc3Vlcy81NTcyKS5cbiAgICAgICAgICAvLyBTYWZhcmkgMTAuMSBzaGlwcGVkIHdpdGggZmV0Y2gsIHdlIGNhbiB1c2UgdGhhdCB0byBkZXRlY3QgaXQuXG4gICAgICAgICAgLy8gTm90ZTogdGhpcyBjcmVhdGVzIGlzc3VlcyB3aXRoIGB3aW5kb3cuZmV0Y2hgIHBvbHlmaWxscyBhbmRcbiAgICAgICAgICAvLyBvdmVycmlkZXM7IHNlZTpcbiAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbG9jYWxGb3JhZ2UvbG9jYWxGb3JhZ2UvaXNzdWVzLzg1NlxuICAgICAgICAgIHJldHVybiAoIWlzU2FmYXJpIHx8IGhhc0ZldGNoKSAmJiB0eXBlb2YgaW5kZXhlZERCICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAgIC8vIHNvbWUgb3V0ZGF0ZWQgaW1wbGVtZW50YXRpb25zIG9mIElEQiB0aGF0IGFwcGVhciBvbiBTYW1zdW5nXG4gICAgICAgICAgLy8gYW5kIEhUQyBBbmRyb2lkIGRldmljZXMgPDQuNCBhcmUgbWlzc2luZyBJREJLZXlSYW5nZVxuICAgICAgICAgIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvbG9jYWxGb3JhZ2UvaXNzdWVzLzEyOFxuICAgICAgICAgIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvbG9jYWxGb3JhZ2UvaXNzdWVzLzI3MlxuICAgICAgICAgIHR5cGVvZiBJREJLZXlSYW5nZSAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQWJzdHJhY3RzIGNvbnN0cnVjdGluZyBhIEJsb2Igb2JqZWN0LCBzbyBpdCBhbHNvIHdvcmtzIGluIG9sZGVyXG4gICAgICAvLyBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgdGhlIG5hdGl2ZSBCbG9iIGNvbnN0cnVjdG9yLiAoaS5lLlxuICAgICAgLy8gb2xkIFF0V2ViS2l0IHZlcnNpb25zLCBhdCBsZWFzdCkuXG4gICAgICAvLyBBYnN0cmFjdHMgY29uc3RydWN0aW5nIGEgQmxvYiBvYmplY3QsIHNvIGl0IGFsc28gd29ya3MgaW4gb2xkZXJcbiAgICAgIC8vIGJyb3dzZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCB0aGUgbmF0aXZlIEJsb2IgY29uc3RydWN0b3IuIChpLmUuXG4gICAgICAvLyBvbGQgUXRXZWJLaXQgdmVyc2lvbnMsIGF0IGxlYXN0KS5cbiAgICAgIGZ1bmN0aW9uIGNyZWF0ZUJsb2IocGFydHMsIHByb3BlcnRpZXMpIHtcbiAgICAgICAgLyogZ2xvYmFsIEJsb2JCdWlsZGVyLE1TQmxvYkJ1aWxkZXIsTW96QmxvYkJ1aWxkZXIsV2ViS2l0QmxvYkJ1aWxkZXIgKi9cbiAgICAgICAgcGFydHMgPSBwYXJ0cyB8fCBbXTtcbiAgICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXMgfHwge307XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBCbG9iKHBhcnRzLCBwcm9wZXJ0aWVzKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGlmIChlLm5hbWUgIT09ICdUeXBlRXJyb3InKSB7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgQnVpbGRlciA9IHR5cGVvZiBCbG9iQnVpbGRlciAhPT0gJ3VuZGVmaW5lZCcgPyBCbG9iQnVpbGRlciA6IHR5cGVvZiBNU0Jsb2JCdWlsZGVyICE9PSAndW5kZWZpbmVkJyA/IE1TQmxvYkJ1aWxkZXIgOiB0eXBlb2YgTW96QmxvYkJ1aWxkZXIgIT09ICd1bmRlZmluZWQnID8gTW96QmxvYkJ1aWxkZXIgOiBXZWJLaXRCbG9iQnVpbGRlcjtcbiAgICAgICAgICB2YXIgYnVpbGRlciA9IG5ldyBCdWlsZGVyKCk7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgYnVpbGRlci5hcHBlbmQocGFydHNbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYnVpbGRlci5nZXRCbG9iKHByb3BlcnRpZXMudHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhpcyBpcyBDb21tb25KUyBiZWNhdXNlIGxpZSBpcyBhbiBleHRlcm5hbCBkZXBlbmRlbmN5LCBzbyBSb2xsdXBcbiAgICAgIC8vIGNhbiBqdXN0IGlnbm9yZSBpdC5cbiAgICAgIGlmICh0eXBlb2YgUHJvbWlzZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gSW4gdGhlIFwibm9wcm9taXNlc1wiIGJ1aWxkIHRoaXMgd2lsbCBqdXN0IHRocm93IGlmIHlvdSBkb24ndCBoYXZlXG4gICAgICAgIC8vIGEgZ2xvYmFsIHByb21pc2Ugb2JqZWN0LCBidXQgaXQgd291bGQgdGhyb3cgYW55d2F5IGxhdGVyLlxuICAgICAgICBfZGVyZXFfKDMpO1xuICAgICAgfVxuICAgICAgdmFyIFByb21pc2UkMSA9IFByb21pc2U7XG4gICAgICBmdW5jdGlvbiBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3VsdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIGV4ZWN1dGVUd29DYWxsYmFja3MocHJvbWlzZSwgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHByb21pc2UudGhlbihjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBlcnJvckNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcHJvbWlzZVtcImNhdGNoXCJdKGVycm9yQ2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBub3JtYWxpemVLZXkoa2V5KSB7XG4gICAgICAgIC8vIENhc3QgdGhlIGtleSB0byBhIHN0cmluZywgYXMgdGhhdCdzIGFsbCB3ZSBjYW4gc2V0IGFzIGEga2V5LlxuICAgICAgICBpZiAodHlwZW9mIGtleSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oa2V5ICsgJyB1c2VkIGFzIGEga2V5LCBidXQgaXQgaXMgbm90IGEgc3RyaW5nLicpO1xuICAgICAgICAgIGtleSA9IFN0cmluZyhrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBrZXk7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBnZXRDYWxsYmFjaygpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggJiYgdHlwZW9mIGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4gYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBTb21lIGNvZGUgb3JpZ2luYWxseSBmcm9tIGFzeW5jX3N0b3JhZ2UuanMgaW5cbiAgICAgIC8vIFtHYWlhXShodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS1iMmcvZ2FpYSkuXG5cbiAgICAgIHZhciBERVRFQ1RfQkxPQl9TVVBQT1JUX1NUT1JFID0gJ2xvY2FsLWZvcmFnZS1kZXRlY3QtYmxvYi1zdXBwb3J0JztcbiAgICAgIHZhciBzdXBwb3J0c0Jsb2JzID0gdm9pZCAwO1xuICAgICAgdmFyIGRiQ29udGV4dHMgPSB7fTtcbiAgICAgIHZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbiAgICAgIC8vIFRyYW5zYWN0aW9uIE1vZGVzXG4gICAgICB2YXIgUkVBRF9PTkxZID0gJ3JlYWRvbmx5JztcbiAgICAgIHZhciBSRUFEX1dSSVRFID0gJ3JlYWR3cml0ZSc7XG5cbiAgICAgIC8vIFRyYW5zZm9ybSBhIGJpbmFyeSBzdHJpbmcgdG8gYW4gYXJyYXkgYnVmZmVyLCBiZWNhdXNlIG90aGVyd2lzZVxuICAgICAgLy8gd2VpcmQgc3R1ZmYgaGFwcGVucyB3aGVuIHlvdSB0cnkgdG8gd29yayB3aXRoIHRoZSBiaW5hcnkgc3RyaW5nIGRpcmVjdGx5LlxuICAgICAgLy8gSXQgaXMga25vd24uXG4gICAgICAvLyBGcm9tIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTQ5Njc2NDcvIChjb250aW51ZXMgb24gbmV4dCBsaW5lKVxuICAgICAgLy8gZW5jb2RlLWRlY29kZS1pbWFnZS13aXRoLWJhc2U2NC1icmVha3MtaW1hZ2UgKDIwMTMtMDQtMjEpXG4gICAgICBmdW5jdGlvbiBfYmluU3RyaW5nVG9BcnJheUJ1ZmZlcihiaW4pIHtcbiAgICAgICAgdmFyIGxlbmd0aCA9IGJpbi5sZW5ndGg7XG4gICAgICAgIHZhciBidWYgPSBuZXcgQXJyYXlCdWZmZXIobGVuZ3RoKTtcbiAgICAgICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KGJ1Zik7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBhcnJbaV0gPSBiaW4uY2hhckNvZGVBdChpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYnVmO1xuICAgICAgfVxuXG4gICAgICAvL1xuICAgICAgLy8gQmxvYnMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gYWxsIHZlcnNpb25zIG9mIEluZGV4ZWREQiwgbm90YWJseVxuICAgICAgLy8gQ2hyb21lIDwzNyBhbmQgQW5kcm9pZCA8NS4gSW4gdGhvc2UgdmVyc2lvbnMsIHN0b3JpbmcgYSBibG9iIHdpbGwgdGhyb3cuXG4gICAgICAvL1xuICAgICAgLy8gVmFyaW91cyBvdGhlciBibG9iIGJ1Z3MgZXhpc3QgaW4gQ2hyb21lIHYzNy00MiAoaW5jbHVzaXZlKS5cbiAgICAgIC8vIERldGVjdGluZyB0aGVtIGlzIGV4cGVuc2l2ZSBhbmQgY29uZnVzaW5nIHRvIHVzZXJzLCBhbmQgQ2hyb21lIDM3LTQyXG4gICAgICAvLyBpcyBhdCB2ZXJ5IGxvdyB1c2FnZSB3b3JsZHdpZGUsIHNvIHdlIGRvIGEgaGFja3kgdXNlckFnZW50IGNoZWNrIGluc3RlYWQuXG4gICAgICAvL1xuICAgICAgLy8gY29udGVudC10eXBlIGJ1ZzogaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQwODEyMFxuICAgICAgLy8gNDA0IGJ1ZzogaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ0NzkxNlxuICAgICAgLy8gRmlsZVJlYWRlciBidWc6IGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD00NDc4MzZcbiAgICAgIC8vXG4gICAgICAvLyBDb2RlIGJvcnJvd2VkIGZyb20gUG91Y2hEQi4gU2VlOlxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BvdWNoZGIvcG91Y2hkYi9ibG9iL21hc3Rlci9wYWNrYWdlcy9ub2RlX21vZHVsZXMvcG91Y2hkYi1hZGFwdGVyLWlkYi9zcmMvYmxvYlN1cHBvcnQuanNcbiAgICAgIC8vXG4gICAgICBmdW5jdGlvbiBfY2hlY2tCbG9iU3VwcG9ydFdpdGhvdXRDYWNoaW5nKGlkYikge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgIHZhciB0eG4gPSBpZGIudHJhbnNhY3Rpb24oREVURUNUX0JMT0JfU1VQUE9SVF9TVE9SRSwgUkVBRF9XUklURSk7XG4gICAgICAgICAgdmFyIGJsb2IgPSBjcmVhdGVCbG9iKFsnJ10pO1xuICAgICAgICAgIHR4bi5vYmplY3RTdG9yZShERVRFQ1RfQkxPQl9TVVBQT1JUX1NUT1JFKS5wdXQoYmxvYiwgJ2tleScpO1xuICAgICAgICAgIHR4bi5vbmFib3J0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSB0cmFuc2FjdGlvbiBhYm9ydHMgbm93IGl0cyBkdWUgdG8gbm90IGJlaW5nIGFibGUgdG9cbiAgICAgICAgICAgIC8vIHdyaXRlIHRvIHRoZSBkYXRhYmFzZSwgbGlrZWx5IGR1ZSB0byB0aGUgZGlzayBiZWluZyBmdWxsXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICB0eG4ub25jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBtYXRjaGVkQ2hyb21lID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQ2hyb21lXFwvKFxcZCspLyk7XG4gICAgICAgICAgICB2YXIgbWF0Y2hlZEVkZ2UgPSBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9FZGdlXFwvLyk7XG4gICAgICAgICAgICAvLyBNUyBFZGdlIHByZXRlbmRzIHRvIGJlIENocm9tZSA0MjpcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvaGg4NjkzMDElMjh2PXZzLjg1JTI5LmFzcHhcbiAgICAgICAgICAgIHJlc29sdmUobWF0Y2hlZEVkZ2UgfHwgIW1hdGNoZWRDaHJvbWUgfHwgcGFyc2VJbnQobWF0Y2hlZENocm9tZVsxXSwgMTApID49IDQzKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KVtcImNhdGNoXCJdKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIGVycm9yLCBzbyBhc3N1bWUgdW5zdXBwb3J0ZWRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBfY2hlY2tCbG9iU3VwcG9ydChpZGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzdXBwb3J0c0Jsb2JzID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZSQxLnJlc29sdmUoc3VwcG9ydHNCbG9icyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9jaGVja0Jsb2JTdXBwb3J0V2l0aG91dENhY2hpbmcoaWRiKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIHN1cHBvcnRzQmxvYnMgPSB2YWx1ZTtcbiAgICAgICAgICByZXR1cm4gc3VwcG9ydHNCbG9icztcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBfZGVmZXJSZWFkaW5lc3MoZGJJbmZvKSB7XG4gICAgICAgIHZhciBkYkNvbnRleHQgPSBkYkNvbnRleHRzW2RiSW5mby5uYW1lXTtcblxuICAgICAgICAvLyBDcmVhdGUgYSBkZWZlcnJlZCBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBjdXJyZW50IGRhdGFiYXNlIG9wZXJhdGlvbi5cbiAgICAgICAgdmFyIGRlZmVycmVkT3BlcmF0aW9uID0ge307XG4gICAgICAgIGRlZmVycmVkT3BlcmF0aW9uLnByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBkZWZlcnJlZE9wZXJhdGlvbi5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgICBkZWZlcnJlZE9wZXJhdGlvbi5yZWplY3QgPSByZWplY3Q7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEVucXVldWUgdGhlIGRlZmVycmVkIG9wZXJhdGlvbi5cbiAgICAgICAgZGJDb250ZXh0LmRlZmVycmVkT3BlcmF0aW9ucy5wdXNoKGRlZmVycmVkT3BlcmF0aW9uKTtcblxuICAgICAgICAvLyBDaGFpbiBpdHMgcHJvbWlzZSB0byB0aGUgZGF0YWJhc2UgcmVhZGluZXNzLlxuICAgICAgICBpZiAoIWRiQ29udGV4dC5kYlJlYWR5KSB7XG4gICAgICAgICAgZGJDb250ZXh0LmRiUmVhZHkgPSBkZWZlcnJlZE9wZXJhdGlvbi5wcm9taXNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRiQ29udGV4dC5kYlJlYWR5ID0gZGJDb250ZXh0LmRiUmVhZHkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWRPcGVyYXRpb24ucHJvbWlzZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZnVuY3Rpb24gX2FkdmFuY2VSZWFkaW5lc3MoZGJJbmZvKSB7XG4gICAgICAgIHZhciBkYkNvbnRleHQgPSBkYkNvbnRleHRzW2RiSW5mby5uYW1lXTtcblxuICAgICAgICAvLyBEZXF1ZXVlIGEgZGVmZXJyZWQgb3BlcmF0aW9uLlxuICAgICAgICB2YXIgZGVmZXJyZWRPcGVyYXRpb24gPSBkYkNvbnRleHQuZGVmZXJyZWRPcGVyYXRpb25zLnBvcCgpO1xuXG4gICAgICAgIC8vIFJlc29sdmUgaXRzIHByb21pc2UgKHdoaWNoIGlzIHBhcnQgb2YgdGhlIGRhdGFiYXNlIHJlYWRpbmVzc1xuICAgICAgICAvLyBjaGFpbiBvZiBwcm9taXNlcykuXG4gICAgICAgIGlmIChkZWZlcnJlZE9wZXJhdGlvbikge1xuICAgICAgICAgIGRlZmVycmVkT3BlcmF0aW9uLnJlc29sdmUoKTtcbiAgICAgICAgICByZXR1cm4gZGVmZXJyZWRPcGVyYXRpb24ucHJvbWlzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZnVuY3Rpb24gX3JlamVjdFJlYWRpbmVzcyhkYkluZm8sIGVycikge1xuICAgICAgICB2YXIgZGJDb250ZXh0ID0gZGJDb250ZXh0c1tkYkluZm8ubmFtZV07XG5cbiAgICAgICAgLy8gRGVxdWV1ZSBhIGRlZmVycmVkIG9wZXJhdGlvbi5cbiAgICAgICAgdmFyIGRlZmVycmVkT3BlcmF0aW9uID0gZGJDb250ZXh0LmRlZmVycmVkT3BlcmF0aW9ucy5wb3AoKTtcblxuICAgICAgICAvLyBSZWplY3QgaXRzIHByb21pc2UgKHdoaWNoIGlzIHBhcnQgb2YgdGhlIGRhdGFiYXNlIHJlYWRpbmVzc1xuICAgICAgICAvLyBjaGFpbiBvZiBwcm9taXNlcykuXG4gICAgICAgIGlmIChkZWZlcnJlZE9wZXJhdGlvbikge1xuICAgICAgICAgIGRlZmVycmVkT3BlcmF0aW9uLnJlamVjdChlcnIpO1xuICAgICAgICAgIHJldHVybiBkZWZlcnJlZE9wZXJhdGlvbi5wcm9taXNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBfZ2V0Q29ubmVjdGlvbihkYkluZm8sIHVwZ3JhZGVOZWVkZWQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGRiQ29udGV4dHNbZGJJbmZvLm5hbWVdID0gZGJDb250ZXh0c1tkYkluZm8ubmFtZV0gfHwgY3JlYXRlRGJDb250ZXh0KCk7XG4gICAgICAgICAgaWYgKGRiSW5mby5kYikge1xuICAgICAgICAgICAgaWYgKHVwZ3JhZGVOZWVkZWQpIHtcbiAgICAgICAgICAgICAgX2RlZmVyUmVhZGluZXNzKGRiSW5mbyk7XG4gICAgICAgICAgICAgIGRiSW5mby5kYi5jbG9zZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZGJJbmZvLmRiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGRiQXJncyA9IFtkYkluZm8ubmFtZV07XG4gICAgICAgICAgaWYgKHVwZ3JhZGVOZWVkZWQpIHtcbiAgICAgICAgICAgIGRiQXJncy5wdXNoKGRiSW5mby52ZXJzaW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIG9wZW5yZXEgPSBpZGIub3Blbi5hcHBseShpZGIsIGRiQXJncyk7XG4gICAgICAgICAgaWYgKHVwZ3JhZGVOZWVkZWQpIHtcbiAgICAgICAgICAgIG9wZW5yZXEub251cGdyYWRlbmVlZGVkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgdmFyIGRiID0gb3BlbnJlcS5yZXN1bHQ7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZGIuY3JlYXRlT2JqZWN0U3RvcmUoZGJJbmZvLnN0b3JlTmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKGUub2xkVmVyc2lvbiA8PSAxKSB7XG4gICAgICAgICAgICAgICAgICAvLyBBZGRlZCB3aGVuIHN1cHBvcnQgZm9yIGJsb2Igc2hpbXMgd2FzIGFkZGVkXG4gICAgICAgICAgICAgICAgICBkYi5jcmVhdGVPYmplY3RTdG9yZShERVRFQ1RfQkxPQl9TVVBQT1JUX1NUT1JFKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgaWYgKGV4Lm5hbWUgPT09ICdDb25zdHJhaW50RXJyb3InKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1RoZSBkYXRhYmFzZSBcIicgKyBkYkluZm8ubmFtZSArICdcIicgKyAnIGhhcyBiZWVuIHVwZ3JhZGVkIGZyb20gdmVyc2lvbiAnICsgZS5vbGRWZXJzaW9uICsgJyB0byB2ZXJzaW9uICcgKyBlLm5ld1ZlcnNpb24gKyAnLCBidXQgdGhlIHN0b3JhZ2UgXCInICsgZGJJbmZvLnN0b3JlTmFtZSArICdcIiBhbHJlYWR5IGV4aXN0cy4nKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdGhyb3cgZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBvcGVucmVxLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmVqZWN0KG9wZW5yZXEuZXJyb3IpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgb3BlbnJlcS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZGIgPSBvcGVucmVxLnJlc3VsdDtcbiAgICAgICAgICAgIGRiLm9udmVyc2lvbmNoYW5nZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIC8vIFRyaWdnZXJlZCB3aGVuIHRoZSBkYXRhYmFzZSBpcyBtb2RpZmllZCAoZS5nLiBhZGRpbmcgYW4gb2JqZWN0U3RvcmUpIG9yXG4gICAgICAgICAgICAgIC8vIGRlbGV0ZWQgKGV2ZW4gd2hlbiBpbml0aWF0ZWQgYnkgb3RoZXIgc2Vzc2lvbnMgaW4gZGlmZmVyZW50IHRhYnMpLlxuICAgICAgICAgICAgICAvLyBDbG9zaW5nIHRoZSBjb25uZWN0aW9uIGhlcmUgcHJldmVudHMgdGhvc2Ugb3BlcmF0aW9ucyBmcm9tIGJlaW5nIGJsb2NrZWQuXG4gICAgICAgICAgICAgIC8vIElmIHRoZSBkYXRhYmFzZSBpcyBhY2Nlc3NlZCBhZ2FpbiBsYXRlciBieSB0aGlzIGluc3RhbmNlLCB0aGUgY29ubmVjdGlvblxuICAgICAgICAgICAgICAvLyB3aWxsIGJlIHJlb3BlbmVkIG9yIHRoZSBkYXRhYmFzZSByZWNyZWF0ZWQgYXMgbmVlZGVkLlxuICAgICAgICAgICAgICBlLnRhcmdldC5jbG9zZSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlc29sdmUoZGIpO1xuICAgICAgICAgICAgX2FkdmFuY2VSZWFkaW5lc3MoZGJJbmZvKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIF9nZXRPcmlnaW5hbENvbm5lY3Rpb24oZGJJbmZvKSB7XG4gICAgICAgIHJldHVybiBfZ2V0Q29ubmVjdGlvbihkYkluZm8sIGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIF9nZXRVcGdyYWRlZENvbm5lY3Rpb24oZGJJbmZvKSB7XG4gICAgICAgIHJldHVybiBfZ2V0Q29ubmVjdGlvbihkYkluZm8sIHRydWUpO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gX2lzVXBncmFkZU5lZWRlZChkYkluZm8sIGRlZmF1bHRWZXJzaW9uKSB7XG4gICAgICAgIGlmICghZGJJbmZvLmRiKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGlzTmV3U3RvcmUgPSAhZGJJbmZvLmRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoZGJJbmZvLnN0b3JlTmFtZSk7XG4gICAgICAgIHZhciBpc0Rvd25ncmFkZSA9IGRiSW5mby52ZXJzaW9uIDwgZGJJbmZvLmRiLnZlcnNpb247XG4gICAgICAgIHZhciBpc1VwZ3JhZGUgPSBkYkluZm8udmVyc2lvbiA+IGRiSW5mby5kYi52ZXJzaW9uO1xuICAgICAgICBpZiAoaXNEb3duZ3JhZGUpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgdmVyc2lvbiBpcyBub3QgdGhlIGRlZmF1bHQgb25lXG4gICAgICAgICAgLy8gdGhlbiB3YXJuIGZvciBpbXBvc3NpYmxlIGRvd25ncmFkZS5cbiAgICAgICAgICBpZiAoZGJJbmZvLnZlcnNpb24gIT09IGRlZmF1bHRWZXJzaW9uKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1RoZSBkYXRhYmFzZSBcIicgKyBkYkluZm8ubmFtZSArICdcIicgKyBcIiBjYW4ndCBiZSBkb3duZ3JhZGVkIGZyb20gdmVyc2lvbiBcIiArIGRiSW5mby5kYi52ZXJzaW9uICsgJyB0byB2ZXJzaW9uICcgKyBkYkluZm8udmVyc2lvbiArICcuJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIEFsaWduIHRoZSB2ZXJzaW9ucyB0byBwcmV2ZW50IGVycm9ycy5cbiAgICAgICAgICBkYkluZm8udmVyc2lvbiA9IGRiSW5mby5kYi52ZXJzaW9uO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1VwZ3JhZGUgfHwgaXNOZXdTdG9yZSkge1xuICAgICAgICAgIC8vIElmIHRoZSBzdG9yZSBpcyBuZXcgdGhlbiBpbmNyZW1lbnQgdGhlIHZlcnNpb24gKGlmIG5lZWRlZCkuXG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRyaWdnZXIgYW4gXCJ1cGdyYWRlbmVlZGVkXCIgZXZlbnQgd2hpY2ggaXMgcmVxdWlyZWRcbiAgICAgICAgICAvLyBmb3IgY3JlYXRpbmcgYSBzdG9yZS5cbiAgICAgICAgICBpZiAoaXNOZXdTdG9yZSkge1xuICAgICAgICAgICAgdmFyIGluY1ZlcnNpb24gPSBkYkluZm8uZGIudmVyc2lvbiArIDE7XG4gICAgICAgICAgICBpZiAoaW5jVmVyc2lvbiA+IGRiSW5mby52ZXJzaW9uKSB7XG4gICAgICAgICAgICAgIGRiSW5mby52ZXJzaW9uID0gaW5jVmVyc2lvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyBlbmNvZGUgYSBibG9iIGZvciBpbmRleGVkZGIgZW5naW5lcyB0aGF0IGRvbid0IHN1cHBvcnQgYmxvYnNcbiAgICAgIGZ1bmN0aW9uIF9lbmNvZGVCbG9iKGJsb2IpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgIHJlYWRlci5vbmVycm9yID0gcmVqZWN0O1xuICAgICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIGJhc2U2NCA9IGJ0b2EoZS50YXJnZXQucmVzdWx0IHx8ICcnKTtcbiAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICBfX2xvY2FsX2ZvcmFnZV9lbmNvZGVkX2Jsb2I6IHRydWUsXG4gICAgICAgICAgICAgIGRhdGE6IGJhc2U2NCxcbiAgICAgICAgICAgICAgdHlwZTogYmxvYi50eXBlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJlYWRlci5yZWFkQXNCaW5hcnlTdHJpbmcoYmxvYik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBkZWNvZGUgYW4gZW5jb2RlZCBibG9iXG4gICAgICBmdW5jdGlvbiBfZGVjb2RlQmxvYihlbmNvZGVkQmxvYikge1xuICAgICAgICB2YXIgYXJyYXlCdWZmID0gX2JpblN0cmluZ1RvQXJyYXlCdWZmZXIoYXRvYihlbmNvZGVkQmxvYi5kYXRhKSk7XG4gICAgICAgIHJldHVybiBjcmVhdGVCbG9iKFthcnJheUJ1ZmZdLCB7XG4gICAgICAgICAgdHlwZTogZW5jb2RlZEJsb2IudHlwZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gaXMgdGhpcyBvbmUgb2Ygb3VyIGZhbmN5IGVuY29kZWQgYmxvYnM/XG4gICAgICBmdW5jdGlvbiBfaXNFbmNvZGVkQmxvYih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUuX19sb2NhbF9mb3JhZ2VfZW5jb2RlZF9ibG9iO1xuICAgICAgfVxuXG4gICAgICAvLyBTcGVjaWFsaXplIHRoZSBkZWZhdWx0IGByZWFkeSgpYCBmdW5jdGlvbiBieSBtYWtpbmcgaXQgZGVwZW5kZW50XG4gICAgICAvLyBvbiB0aGUgY3VycmVudCBkYXRhYmFzZSBvcGVyYXRpb25zLiBUaHVzLCB0aGUgZHJpdmVyIHdpbGwgYmUgYWN0dWFsbHlcbiAgICAgIC8vIHJlYWR5IHdoZW4gaXQncyBiZWVuIGluaXRpYWxpemVkIChkZWZhdWx0KSAqYW5kKiB0aGVyZSBhcmUgbm8gcGVuZGluZ1xuICAgICAgLy8gb3BlcmF0aW9ucyBvbiB0aGUgZGF0YWJhc2UgKGluaXRpYXRlZCBieSBzb21lIG90aGVyIGluc3RhbmNlcykuXG4gICAgICBmdW5jdGlvbiBfZnVsbHlSZWFkeShjYWxsYmFjaykge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBwcm9taXNlID0gc2VsZi5faW5pdFJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGRiQ29udGV4dCA9IGRiQ29udGV4dHNbc2VsZi5fZGJJbmZvLm5hbWVdO1xuICAgICAgICAgIGlmIChkYkNvbnRleHQgJiYgZGJDb250ZXh0LmRiUmVhZHkpIHtcbiAgICAgICAgICAgIHJldHVybiBkYkNvbnRleHQuZGJSZWFkeTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBleGVjdXRlVHdvQ2FsbGJhY2tzKHByb21pc2UsIGNhbGxiYWNrLCBjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgfVxuXG4gICAgICAvLyBUcnkgdG8gZXN0YWJsaXNoIGEgbmV3IGRiIGNvbm5lY3Rpb24gdG8gcmVwbGFjZSB0aGVcbiAgICAgIC8vIGN1cnJlbnQgb25lIHdoaWNoIGlzIGJyb2tlbiAoaS5lLiBleHBlcmllbmNpbmdcbiAgICAgIC8vIEludmFsaWRTdGF0ZUVycm9yIHdoaWxlIGNyZWF0aW5nIGEgdHJhbnNhY3Rpb24pLlxuICAgICAgZnVuY3Rpb24gX3RyeVJlY29ubmVjdChkYkluZm8pIHtcbiAgICAgICAgX2RlZmVyUmVhZGluZXNzKGRiSW5mbyk7XG4gICAgICAgIHZhciBkYkNvbnRleHQgPSBkYkNvbnRleHRzW2RiSW5mby5uYW1lXTtcbiAgICAgICAgdmFyIGZvcmFnZXMgPSBkYkNvbnRleHQuZm9yYWdlcztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmb3JhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIGZvcmFnZSA9IGZvcmFnZXNbaV07XG4gICAgICAgICAgaWYgKGZvcmFnZS5fZGJJbmZvLmRiKSB7XG4gICAgICAgICAgICBmb3JhZ2UuX2RiSW5mby5kYi5jbG9zZSgpO1xuICAgICAgICAgICAgZm9yYWdlLl9kYkluZm8uZGIgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkYkluZm8uZGIgPSBudWxsO1xuICAgICAgICByZXR1cm4gX2dldE9yaWdpbmFsQ29ubmVjdGlvbihkYkluZm8pLnRoZW4oZnVuY3Rpb24gKGRiKSB7XG4gICAgICAgICAgZGJJbmZvLmRiID0gZGI7XG4gICAgICAgICAgaWYgKF9pc1VwZ3JhZGVOZWVkZWQoZGJJbmZvKSkge1xuICAgICAgICAgICAgLy8gUmVvcGVuIHRoZSBkYXRhYmFzZSBmb3IgdXBncmFkaW5nLlxuICAgICAgICAgICAgcmV0dXJuIF9nZXRVcGdyYWRlZENvbm5lY3Rpb24oZGJJbmZvKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGRiO1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChkYikge1xuICAgICAgICAgIC8vIHN0b3JlIHRoZSBsYXRlc3QgZGIgcmVmZXJlbmNlXG4gICAgICAgICAgLy8gaW4gY2FzZSB0aGUgZGIgd2FzIHVwZ3JhZGVkXG4gICAgICAgICAgZGJJbmZvLmRiID0gZGJDb250ZXh0LmRiID0gZGI7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmb3JhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3JhZ2VzW2ldLl9kYkluZm8uZGIgPSBkYjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgIF9yZWplY3RSZWFkaW5lc3MoZGJJbmZvLCBlcnIpO1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEZGIGRvZXNuJ3QgbGlrZSBQcm9taXNlcyAobWljcm8tdGFza3MpIGFuZCBJRERCIHN0b3JlIG9wZXJhdGlvbnMsXG4gICAgICAvLyBzbyB3ZSBoYXZlIHRvIGRvIGl0IHdpdGggY2FsbGJhY2tzXG4gICAgICBmdW5jdGlvbiBjcmVhdGVUcmFuc2FjdGlvbihkYkluZm8sIG1vZGUsIGNhbGxiYWNrLCByZXRyaWVzKSB7XG4gICAgICAgIGlmIChyZXRyaWVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXRyaWVzID0gMTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhciB0eCA9IGRiSW5mby5kYi50cmFuc2FjdGlvbihkYkluZm8uc3RvcmVOYW1lLCBtb2RlKTtcbiAgICAgICAgICBjYWxsYmFjayhudWxsLCB0eCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGlmIChyZXRyaWVzID4gMCAmJiAoIWRiSW5mby5kYiB8fCBlcnIubmFtZSA9PT0gJ0ludmFsaWRTdGF0ZUVycm9yJyB8fCBlcnIubmFtZSA9PT0gJ05vdEZvdW5kRXJyb3InKSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UkMS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGlmICghZGJJbmZvLmRiIHx8IGVyci5uYW1lID09PSAnTm90Rm91bmRFcnJvcicgJiYgIWRiSW5mby5kYi5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKGRiSW5mby5zdG9yZU5hbWUpICYmIGRiSW5mby52ZXJzaW9uIDw9IGRiSW5mby5kYi52ZXJzaW9uKSB7XG4gICAgICAgICAgICAgICAgLy8gaW5jcmVhc2UgdGhlIGRiIHZlcnNpb24sIHRvIGNyZWF0ZSB0aGUgbmV3IE9iamVjdFN0b3JlXG4gICAgICAgICAgICAgICAgaWYgKGRiSW5mby5kYikge1xuICAgICAgICAgICAgICAgICAgZGJJbmZvLnZlcnNpb24gPSBkYkluZm8uZGIudmVyc2lvbiArIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFJlb3BlbiB0aGUgZGF0YWJhc2UgZm9yIHVwZ3JhZGluZy5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2dldFVwZ3JhZGVkQ29ubmVjdGlvbihkYkluZm8pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF90cnlSZWNvbm5lY3QoZGJJbmZvKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjcmVhdGVUcmFuc2FjdGlvbihkYkluZm8sIG1vZGUsIGNhbGxiYWNrLCByZXRyaWVzIC0gMSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlbXCJjYXRjaFwiXShjYWxsYmFjayk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIGNyZWF0ZURiQ29udGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAvLyBSdW5uaW5nIGxvY2FsRm9yYWdlcyBzaGFyaW5nIGEgZGF0YWJhc2UuXG4gICAgICAgICAgZm9yYWdlczogW10sXG4gICAgICAgICAgLy8gU2hhcmVkIGRhdGFiYXNlLlxuICAgICAgICAgIGRiOiBudWxsLFxuICAgICAgICAgIC8vIERhdGFiYXNlIHJlYWRpbmVzcyAocHJvbWlzZSkuXG4gICAgICAgICAgZGJSZWFkeTogbnVsbCxcbiAgICAgICAgICAvLyBEZWZlcnJlZCBvcGVyYXRpb25zIG9uIHRoZSBkYXRhYmFzZS5cbiAgICAgICAgICBkZWZlcnJlZE9wZXJhdGlvbnM6IFtdXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIC8vIE9wZW4gdGhlIEluZGV4ZWREQiBkYXRhYmFzZSAoYXV0b21hdGljYWxseSBjcmVhdGVzIG9uZSBpZiBvbmUgZGlkbid0XG4gICAgICAvLyBwcmV2aW91c2x5IGV4aXN0KSwgdXNpbmcgYW55IG9wdGlvbnMgc2V0IGluIHRoZSBjb25maWcuXG4gICAgICBmdW5jdGlvbiBfaW5pdFN0b3JhZ2Uob3B0aW9ucykge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBkYkluZm8gPSB7XG4gICAgICAgICAgZGI6IG51bGxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICBmb3IgKHZhciBpIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGRiSW5mb1tpXSA9IG9wdGlvbnNbaV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gR2V0IHRoZSBjdXJyZW50IGNvbnRleHQgb2YgdGhlIGRhdGFiYXNlO1xuICAgICAgICB2YXIgZGJDb250ZXh0ID0gZGJDb250ZXh0c1tkYkluZm8ubmFtZV07XG5cbiAgICAgICAgLy8gLi4ub3IgY3JlYXRlIGEgbmV3IGNvbnRleHQuXG4gICAgICAgIGlmICghZGJDb250ZXh0KSB7XG4gICAgICAgICAgZGJDb250ZXh0ID0gY3JlYXRlRGJDb250ZXh0KCk7XG4gICAgICAgICAgLy8gUmVnaXN0ZXIgdGhlIG5ldyBjb250ZXh0IGluIHRoZSBnbG9iYWwgY29udGFpbmVyLlxuICAgICAgICAgIGRiQ29udGV4dHNbZGJJbmZvLm5hbWVdID0gZGJDb250ZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVnaXN0ZXIgaXRzZWxmIGFzIGEgcnVubmluZyBsb2NhbEZvcmFnZSBpbiB0aGUgY3VycmVudCBjb250ZXh0LlxuICAgICAgICBkYkNvbnRleHQuZm9yYWdlcy5wdXNoKHNlbGYpO1xuXG4gICAgICAgIC8vIFJlcGxhY2UgdGhlIGRlZmF1bHQgYHJlYWR5KClgIGZ1bmN0aW9uIHdpdGggdGhlIHNwZWNpYWxpemVkIG9uZS5cbiAgICAgICAgaWYgKCFzZWxmLl9pbml0UmVhZHkpIHtcbiAgICAgICAgICBzZWxmLl9pbml0UmVhZHkgPSBzZWxmLnJlYWR5O1xuICAgICAgICAgIHNlbGYucmVhZHkgPSBfZnVsbHlSZWFkeTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENyZWF0ZSBhbiBhcnJheSBvZiBpbml0aWFsaXphdGlvbiBzdGF0ZXMgb2YgdGhlIHJlbGF0ZWQgbG9jYWxGb3JhZ2VzLlxuICAgICAgICB2YXIgaW5pdFByb21pc2VzID0gW107XG4gICAgICAgIGZ1bmN0aW9uIGlnbm9yZUVycm9ycygpIHtcbiAgICAgICAgICAvLyBEb24ndCBoYW5kbGUgZXJyb3JzIGhlcmUsXG4gICAgICAgICAgLy8ganVzdCBtYWtlcyBzdXJlIHJlbGF0ZWQgbG9jYWxGb3JhZ2VzIGFyZW4ndCBwZW5kaW5nLlxuICAgICAgICAgIHJldHVybiBQcm9taXNlJDEucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZGJDb250ZXh0LmZvcmFnZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICB2YXIgZm9yYWdlID0gZGJDb250ZXh0LmZvcmFnZXNbal07XG4gICAgICAgICAgaWYgKGZvcmFnZSAhPT0gc2VsZikge1xuICAgICAgICAgICAgLy8gRG9uJ3Qgd2FpdCBmb3IgaXRzZWxmLi4uXG4gICAgICAgICAgICBpbml0UHJvbWlzZXMucHVzaChmb3JhZ2UuX2luaXRSZWFkeSgpW1wiY2F0Y2hcIl0oaWdub3JlRXJyb3JzKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGFrZSBhIHNuYXBzaG90IG9mIHRoZSByZWxhdGVkIGxvY2FsRm9yYWdlcy5cbiAgICAgICAgdmFyIGZvcmFnZXMgPSBkYkNvbnRleHQuZm9yYWdlcy5zbGljZSgwKTtcblxuICAgICAgICAvLyBJbml0aWFsaXplIHRoZSBjb25uZWN0aW9uIHByb2Nlc3Mgb25seSB3aGVuXG4gICAgICAgIC8vIGFsbCB0aGUgcmVsYXRlZCBsb2NhbEZvcmFnZXMgYXJlbid0IHBlbmRpbmcuXG4gICAgICAgIHJldHVybiBQcm9taXNlJDEuYWxsKGluaXRQcm9taXNlcykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZGJJbmZvLmRiID0gZGJDb250ZXh0LmRiO1xuICAgICAgICAgIC8vIEdldCB0aGUgY29ubmVjdGlvbiBvciBvcGVuIGEgbmV3IG9uZSB3aXRob3V0IHVwZ3JhZGUuXG4gICAgICAgICAgcmV0dXJuIF9nZXRPcmlnaW5hbENvbm5lY3Rpb24oZGJJbmZvKTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoZGIpIHtcbiAgICAgICAgICBkYkluZm8uZGIgPSBkYjtcbiAgICAgICAgICBpZiAoX2lzVXBncmFkZU5lZWRlZChkYkluZm8sIHNlbGYuX2RlZmF1bHRDb25maWcudmVyc2lvbikpIHtcbiAgICAgICAgICAgIC8vIFJlb3BlbiB0aGUgZGF0YWJhc2UgZm9yIHVwZ3JhZGluZy5cbiAgICAgICAgICAgIHJldHVybiBfZ2V0VXBncmFkZWRDb25uZWN0aW9uKGRiSW5mbyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBkYjtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoZGIpIHtcbiAgICAgICAgICBkYkluZm8uZGIgPSBkYkNvbnRleHQuZGIgPSBkYjtcbiAgICAgICAgICBzZWxmLl9kYkluZm8gPSBkYkluZm87XG4gICAgICAgICAgLy8gU2hhcmUgdGhlIGZpbmFsIGNvbm5lY3Rpb24gYW1vbmdzdCByZWxhdGVkIGxvY2FsRm9yYWdlcy5cbiAgICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IGZvcmFnZXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgIHZhciBmb3JhZ2UgPSBmb3JhZ2VzW2tdO1xuICAgICAgICAgICAgaWYgKGZvcmFnZSAhPT0gc2VsZikge1xuICAgICAgICAgICAgICAvLyBTZWxmIGlzIGFscmVhZHkgdXAtdG8tZGF0ZS5cbiAgICAgICAgICAgICAgZm9yYWdlLl9kYkluZm8uZGIgPSBkYkluZm8uZGI7XG4gICAgICAgICAgICAgIGZvcmFnZS5fZGJJbmZvLnZlcnNpb24gPSBkYkluZm8udmVyc2lvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gZ2V0SXRlbShrZXksIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAga2V5ID0gbm9ybWFsaXplS2V5KGtleSk7XG4gICAgICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY3JlYXRlVHJhbnNhY3Rpb24oc2VsZi5fZGJJbmZvLCBSRUFEX09OTFksIGZ1bmN0aW9uIChlcnIsIHRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB2YXIgc3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShzZWxmLl9kYkluZm8uc3RvcmVOYW1lKTtcbiAgICAgICAgICAgICAgICB2YXIgcmVxID0gc3RvcmUuZ2V0KGtleSk7XG4gICAgICAgICAgICAgICAgcmVxLm9uc3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHJlcS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAoX2lzRW5jb2RlZEJsb2IodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gX2RlY29kZUJsb2IodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXEub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIHJlamVjdChyZXEuZXJyb3IpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pW1wiY2F0Y2hcIl0ocmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgfVxuXG4gICAgICAvLyBJdGVyYXRlIG92ZXIgYWxsIGl0ZW1zIHN0b3JlZCBpbiBkYXRhYmFzZS5cbiAgICAgIGZ1bmN0aW9uIGl0ZXJhdGUoaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjcmVhdGVUcmFuc2FjdGlvbihzZWxmLl9kYkluZm8sIFJFQURfT05MWSwgZnVuY3Rpb24gKGVyciwgdHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciBzdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHNlbGYuX2RiSW5mby5zdG9yZU5hbWUpO1xuICAgICAgICAgICAgICAgIHZhciByZXEgPSBzdG9yZS5vcGVuQ3Vyc29yKCk7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZXJhdGlvbk51bWJlciA9IDE7XG4gICAgICAgICAgICAgICAgcmVxLm9uc3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBjdXJzb3IgPSByZXEucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgaWYgKGN1cnNvcikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBjdXJzb3IudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfaXNFbmNvZGVkQmxvYih2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IF9kZWNvZGVCbG9iKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gaXRlcmF0b3IodmFsdWUsIGN1cnNvci5rZXksIGl0ZXJhdGlvbk51bWJlcisrKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHRoZSBpdGVyYXRvciBjYWxsYmFjayByZXR1cm5zIGFueVxuICAgICAgICAgICAgICAgICAgICAvLyAobm9uLWB1bmRlZmluZWRgKSB2YWx1ZSwgdGhlbiB3ZSBzdG9wXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBpdGVyYXRpb24gaW1tZWRpYXRlbHlcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcltcImNvbnRpbnVlXCJdKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJlcS5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlcS5lcnJvcik7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBzZXRJdGVtKGtleSwgdmFsdWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAga2V5ID0gbm9ybWFsaXplS2V5KGtleSk7XG4gICAgICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgdmFyIGRiSW5mbztcbiAgICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkYkluZm8gPSBzZWxmLl9kYkluZm87XG4gICAgICAgICAgICBpZiAodG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEJsb2JdJykge1xuICAgICAgICAgICAgICByZXR1cm4gX2NoZWNrQmxvYlN1cHBvcnQoZGJJbmZvLmRiKS50aGVuKGZ1bmN0aW9uIChibG9iU3VwcG9ydCkge1xuICAgICAgICAgICAgICAgIGlmIChibG9iU3VwcG9ydCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gX2VuY29kZUJsb2IodmFsdWUpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgY3JlYXRlVHJhbnNhY3Rpb24oc2VsZi5fZGJJbmZvLCBSRUFEX1dSSVRFLCBmdW5jdGlvbiAoZXJyLCB0cmFuc2FjdGlvbikge1xuICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoc2VsZi5fZGJJbmZvLnN0b3JlTmFtZSk7XG5cbiAgICAgICAgICAgICAgICAvLyBUaGUgcmVhc29uIHdlIGRvbid0IF9zYXZlXyBudWxsIGlzIGJlY2F1c2UgSUUgMTAgZG9lc1xuICAgICAgICAgICAgICAgIC8vIG5vdCBzdXBwb3J0IHNhdmluZyB0aGUgYG51bGxgIHR5cGUgaW4gSW5kZXhlZERCLiBIb3dcbiAgICAgICAgICAgICAgICAvLyBpcm9uaWMsIGdpdmVuIHRoZSBidWcgYmVsb3chXG4gICAgICAgICAgICAgICAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9sb2NhbEZvcmFnZS9pc3N1ZXMvMTYxXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHJlcSA9IHN0b3JlLnB1dCh2YWx1ZSwga2V5KTtcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5vbmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgLy8gQ2FzdCB0byB1bmRlZmluZWQgc28gdGhlIHZhbHVlIHBhc3NlZCB0b1xuICAgICAgICAgICAgICAgICAgLy8gY2FsbGJhY2svcHJvbWlzZSBpcyB0aGUgc2FtZSBhcyB3aGF0IG9uZSB3b3VsZCBnZXQgb3V0XG4gICAgICAgICAgICAgICAgICAvLyBvZiBgZ2V0SXRlbSgpYCBsYXRlci4gVGhpcyBsZWFkcyB0byBzb21lIHdlaXJkbmVzc1xuICAgICAgICAgICAgICAgICAgLy8gKHNldEl0ZW0oJ2ZvbycsIHVuZGVmaW5lZCkgd2lsbCByZXR1cm4gYG51bGxgKSwgYnV0XG4gICAgICAgICAgICAgICAgICAvLyBpdCdzIG5vdCBteSBmYXVsdCBsb2NhbFN0b3JhZ2UgaXMgb3VyIGJhc2VsaW5lIGFuZCB0aGF0XG4gICAgICAgICAgICAgICAgICAvLyBpdCdzIHdlaXJkLlxuICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5vbmFib3J0ID0gdHJhbnNhY3Rpb24ub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBlcnIgPSByZXEuZXJyb3IgPyByZXEuZXJyb3IgOiByZXEudHJhbnNhY3Rpb24uZXJyb3I7XG4gICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIHJlbW92ZUl0ZW0oa2V5LCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGtleSA9IG5vcm1hbGl6ZUtleShrZXkpO1xuICAgICAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNyZWF0ZVRyYW5zYWN0aW9uKHNlbGYuX2RiSW5mbywgUkVBRF9XUklURSwgZnVuY3Rpb24gKGVyciwgdHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciBzdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHNlbGYuX2RiSW5mby5zdG9yZU5hbWUpO1xuICAgICAgICAgICAgICAgIC8vIFdlIHVzZSBhIEdydW50IHRhc2sgdG8gbWFrZSB0aGlzIHNhZmUgZm9yIElFIGFuZCBzb21lXG4gICAgICAgICAgICAgICAgLy8gdmVyc2lvbnMgb2YgQW5kcm9pZCAoaW5jbHVkaW5nIHRob3NlIHVzZWQgYnkgQ29yZG92YSkuXG4gICAgICAgICAgICAgICAgLy8gTm9ybWFsbHkgSUUgd29uJ3QgbGlrZSBgLmRlbGV0ZSgpYCBhbmQgd2lsbCBpbnNpc3Qgb25cbiAgICAgICAgICAgICAgICAvLyB1c2luZyBgWydkZWxldGUnXSgpYCwgYnV0IHdlIGhhdmUgYSBidWlsZCBzdGVwIHRoYXRcbiAgICAgICAgICAgICAgICAvLyBmaXhlcyB0aGlzIGZvciB1cyBub3cuXG4gICAgICAgICAgICAgICAgdmFyIHJlcSA9IHN0b3JlW1wiZGVsZXRlXCJdKGtleSk7XG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24ub25jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICByZWplY3QocmVxLmVycm9yKTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgLy8gVGhlIHJlcXVlc3Qgd2lsbCBiZSBhbHNvIGJlIGFib3J0ZWQgaWYgd2UndmUgZXhjZWVkZWQgb3VyIHN0b3JhZ2VcbiAgICAgICAgICAgICAgICAvLyBzcGFjZS5cbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5vbmFib3J0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgdmFyIGVyciA9IHJlcS5lcnJvciA/IHJlcS5lcnJvciA6IHJlcS50cmFuc2FjdGlvbi5lcnJvcjtcbiAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pW1wiY2F0Y2hcIl0ocmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gY2xlYXIoY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNyZWF0ZVRyYW5zYWN0aW9uKHNlbGYuX2RiSW5mbywgUkVBRF9XUklURSwgZnVuY3Rpb24gKGVyciwgdHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciBzdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHNlbGYuX2RiSW5mby5zdG9yZU5hbWUpO1xuICAgICAgICAgICAgICAgIHZhciByZXEgPSBzdG9yZS5jbGVhcigpO1xuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9uY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5vbmFib3J0ID0gdHJhbnNhY3Rpb24ub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBlcnIgPSByZXEuZXJyb3IgPyByZXEuZXJyb3IgOiByZXEudHJhbnNhY3Rpb24uZXJyb3I7XG4gICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIGxlbmd0aChjYWxsYmFjaykge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY3JlYXRlVHJhbnNhY3Rpb24oc2VsZi5fZGJJbmZvLCBSRUFEX09OTFksIGZ1bmN0aW9uIChlcnIsIHRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB2YXIgc3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShzZWxmLl9kYkluZm8uc3RvcmVOYW1lKTtcbiAgICAgICAgICAgICAgICB2YXIgcmVxID0gc3RvcmUuY291bnQoKTtcbiAgICAgICAgICAgICAgICByZXEub25zdWNjZXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXEucmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJlcS5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlcS5lcnJvcik7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBrZXkobiwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGlmIChuIDwgMCkge1xuICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY3JlYXRlVHJhbnNhY3Rpb24oc2VsZi5fZGJJbmZvLCBSRUFEX09OTFksIGZ1bmN0aW9uIChlcnIsIHRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB2YXIgc3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShzZWxmLl9kYkluZm8uc3RvcmVOYW1lKTtcbiAgICAgICAgICAgICAgICB2YXIgYWR2YW5jZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB2YXIgcmVxID0gc3RvcmUub3BlbktleUN1cnNvcigpO1xuICAgICAgICAgICAgICAgIHJlcS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgY3Vyc29yID0gcmVxLnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgIGlmICghY3Vyc29yKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgbWVhbnMgdGhlcmUgd2VyZW4ndCBlbm91Z2gga2V5c1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAobiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBXZSBoYXZlIHRoZSBmaXJzdCBrZXksIHJldHVybiBpdCBpZiB0aGF0J3Mgd2hhdCB0aGV5XG4gICAgICAgICAgICAgICAgICAgIC8vIHdhbnRlZC5cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShjdXJzb3Iua2V5KTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYWR2YW5jZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIGFzayB0aGUgY3Vyc29yIHRvIHNraXAgYWhlYWQgblxuICAgICAgICAgICAgICAgICAgICAgIC8vIHJlY29yZHMuXG4gICAgICAgICAgICAgICAgICAgICAgYWR2YW5jZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgIGN1cnNvci5hZHZhbmNlKG4pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIFdoZW4gd2UgZ2V0IGhlcmUsIHdlJ3ZlIGdvdCB0aGUgbnRoIGtleS5cbiAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGN1cnNvci5rZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXEub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIHJlamVjdChyZXEuZXJyb3IpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pW1wiY2F0Y2hcIl0ocmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24ga2V5cyhjYWxsYmFjaykge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY3JlYXRlVHJhbnNhY3Rpb24oc2VsZi5fZGJJbmZvLCBSRUFEX09OTFksIGZ1bmN0aW9uIChlcnIsIHRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB2YXIgc3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShzZWxmLl9kYkluZm8uc3RvcmVOYW1lKTtcbiAgICAgICAgICAgICAgICB2YXIgcmVxID0gc3RvcmUub3BlbktleUN1cnNvcigpO1xuICAgICAgICAgICAgICAgIHZhciBrZXlzID0gW107XG4gICAgICAgICAgICAgICAgcmVxLm9uc3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBjdXJzb3IgPSByZXEucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgaWYgKCFjdXJzb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShrZXlzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKGN1cnNvci5rZXkpO1xuICAgICAgICAgICAgICAgICAgY3Vyc29yW1wiY29udGludWVcIl0oKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJlcS5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlcS5lcnJvcik7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBkcm9wSW5zdGFuY2Uob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2sgPSBnZXRDYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB2YXIgY3VycmVudENvbmZpZyA9IHRoaXMuY29uZmlnKCk7XG4gICAgICAgIG9wdGlvbnMgPSB0eXBlb2Ygb3B0aW9ucyAhPT0gJ2Z1bmN0aW9uJyAmJiBvcHRpb25zIHx8IHt9O1xuICAgICAgICBpZiAoIW9wdGlvbnMubmFtZSkge1xuICAgICAgICAgIG9wdGlvbnMubmFtZSA9IG9wdGlvbnMubmFtZSB8fCBjdXJyZW50Q29uZmlnLm5hbWU7XG4gICAgICAgICAgb3B0aW9ucy5zdG9yZU5hbWUgPSBvcHRpb25zLnN0b3JlTmFtZSB8fCBjdXJyZW50Q29uZmlnLnN0b3JlTmFtZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBwcm9taXNlO1xuICAgICAgICBpZiAoIW9wdGlvbnMubmFtZSkge1xuICAgICAgICAgIHByb21pc2UgPSBQcm9taXNlJDEucmVqZWN0KCdJbnZhbGlkIGFyZ3VtZW50cycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBpc0N1cnJlbnREYiA9IG9wdGlvbnMubmFtZSA9PT0gY3VycmVudENvbmZpZy5uYW1lICYmIHNlbGYuX2RiSW5mby5kYjtcbiAgICAgICAgICB2YXIgZGJQcm9taXNlID0gaXNDdXJyZW50RGIgPyBQcm9taXNlJDEucmVzb2x2ZShzZWxmLl9kYkluZm8uZGIpIDogX2dldE9yaWdpbmFsQ29ubmVjdGlvbihvcHRpb25zKS50aGVuKGZ1bmN0aW9uIChkYikge1xuICAgICAgICAgICAgdmFyIGRiQ29udGV4dCA9IGRiQ29udGV4dHNbb3B0aW9ucy5uYW1lXTtcbiAgICAgICAgICAgIHZhciBmb3JhZ2VzID0gZGJDb250ZXh0LmZvcmFnZXM7XG4gICAgICAgICAgICBkYkNvbnRleHQuZGIgPSBkYjtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZm9yYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBmb3JhZ2VzW2ldLl9kYkluZm8uZGIgPSBkYjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYjtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAoIW9wdGlvbnMuc3RvcmVOYW1lKSB7XG4gICAgICAgICAgICBwcm9taXNlID0gZGJQcm9taXNlLnRoZW4oZnVuY3Rpb24gKGRiKSB7XG4gICAgICAgICAgICAgIF9kZWZlclJlYWRpbmVzcyhvcHRpb25zKTtcbiAgICAgICAgICAgICAgdmFyIGRiQ29udGV4dCA9IGRiQ29udGV4dHNbb3B0aW9ucy5uYW1lXTtcbiAgICAgICAgICAgICAgdmFyIGZvcmFnZXMgPSBkYkNvbnRleHQuZm9yYWdlcztcbiAgICAgICAgICAgICAgZGIuY2xvc2UoKTtcbiAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmb3JhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZvcmFnZSA9IGZvcmFnZXNbaV07XG4gICAgICAgICAgICAgICAgZm9yYWdlLl9kYkluZm8uZGIgPSBudWxsO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHZhciBkcm9wREJQcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlcSA9IGlkYi5kZWxldGVEYXRhYmFzZShvcHRpb25zLm5hbWUpO1xuICAgICAgICAgICAgICAgIHJlcS5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgdmFyIGRiID0gcmVxLnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgIGlmIChkYikge1xuICAgICAgICAgICAgICAgICAgICBkYi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlcS5lcnJvcik7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXEub25ibG9ja2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgLy8gQ2xvc2luZyBhbGwgb3BlbiBjb25uZWN0aW9ucyBpbiBvbnZlcnNpb25jaGFuZ2UgaGFuZGxlciBzaG91bGQgcHJldmVudCB0aGlzIHNpdHVhdGlvbiwgYnV0IGlmXG4gICAgICAgICAgICAgICAgICAvLyB3ZSBkbyBnZXQgaGVyZSwgaXQganVzdCBtZWFucyB0aGUgcmVxdWVzdCByZW1haW5zIHBlbmRpbmcgLSBldmVudHVhbGx5IGl0IHdpbGwgc3VjY2VlZCBvciBlcnJvclxuICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdkcm9wSW5zdGFuY2UgYmxvY2tlZCBmb3IgZGF0YWJhc2UgXCInICsgb3B0aW9ucy5uYW1lICsgJ1wiIHVudGlsIGFsbCBvcGVuIGNvbm5lY3Rpb25zIGFyZSBjbG9zZWQnKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJlcS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgZGIgPSByZXEucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgaWYgKGRiKSB7XG4gICAgICAgICAgICAgICAgICAgIGRiLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZXNvbHZlKGRiKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgcmV0dXJuIGRyb3BEQlByb21pc2UudGhlbihmdW5jdGlvbiAoZGIpIHtcbiAgICAgICAgICAgICAgICBkYkNvbnRleHQuZGIgPSBkYjtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZvcmFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgIHZhciBfZm9yYWdlID0gZm9yYWdlc1tpXTtcbiAgICAgICAgICAgICAgICAgIF9hZHZhbmNlUmVhZGluZXNzKF9mb3JhZ2UuX2RiSW5mbyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVtcImNhdGNoXCJdKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAoX3JlamVjdFJlYWRpbmVzcyhvcHRpb25zLCBlcnIpIHx8IFByb21pc2UkMS5yZXNvbHZlKCkpW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKCkge30pO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvbWlzZSA9IGRiUHJvbWlzZS50aGVuKGZ1bmN0aW9uIChkYikge1xuICAgICAgICAgICAgICBpZiAoIWRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMob3B0aW9ucy5zdG9yZU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHZhciBuZXdWZXJzaW9uID0gZGIudmVyc2lvbiArIDE7XG4gICAgICAgICAgICAgIF9kZWZlclJlYWRpbmVzcyhvcHRpb25zKTtcbiAgICAgICAgICAgICAgdmFyIGRiQ29udGV4dCA9IGRiQ29udGV4dHNbb3B0aW9ucy5uYW1lXTtcbiAgICAgICAgICAgICAgdmFyIGZvcmFnZXMgPSBkYkNvbnRleHQuZm9yYWdlcztcbiAgICAgICAgICAgICAgZGIuY2xvc2UoKTtcbiAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmb3JhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZvcmFnZSA9IGZvcmFnZXNbaV07XG4gICAgICAgICAgICAgICAgZm9yYWdlLl9kYkluZm8uZGIgPSBudWxsO1xuICAgICAgICAgICAgICAgIGZvcmFnZS5fZGJJbmZvLnZlcnNpb24gPSBuZXdWZXJzaW9uO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHZhciBkcm9wT2JqZWN0UHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgIHZhciByZXEgPSBpZGIub3BlbihvcHRpb25zLm5hbWUsIG5ld1ZlcnNpb24pO1xuICAgICAgICAgICAgICAgIHJlcS5vbmVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgdmFyIGRiID0gcmVxLnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgIGRiLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJlcS5vbnVwZ3JhZGVuZWVkZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgZGIgPSByZXEucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgZGIuZGVsZXRlT2JqZWN0U3RvcmUob3B0aW9ucy5zdG9yZU5hbWUpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmVxLm9uc3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBkYiA9IHJlcS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICBkYi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYik7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHJldHVybiBkcm9wT2JqZWN0UHJvbWlzZS50aGVuKGZ1bmN0aW9uIChkYikge1xuICAgICAgICAgICAgICAgIGRiQ29udGV4dC5kYiA9IGRiO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZm9yYWdlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgdmFyIF9mb3JhZ2UyID0gZm9yYWdlc1tqXTtcbiAgICAgICAgICAgICAgICAgIF9mb3JhZ2UyLl9kYkluZm8uZGIgPSBkYjtcbiAgICAgICAgICAgICAgICAgIF9hZHZhbmNlUmVhZGluZXNzKF9mb3JhZ2UyLl9kYkluZm8pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlbXCJjYXRjaFwiXShmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgKF9yZWplY3RSZWFkaW5lc3Mob3B0aW9ucywgZXJyKSB8fCBQcm9taXNlJDEucmVzb2x2ZSgpKVtcImNhdGNoXCJdKGZ1bmN0aW9uICgpIHt9KTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgfVxuICAgICAgdmFyIGFzeW5jU3RvcmFnZSA9IHtcbiAgICAgICAgX2RyaXZlcjogJ2FzeW5jU3RvcmFnZScsXG4gICAgICAgIF9pbml0U3RvcmFnZTogX2luaXRTdG9yYWdlLFxuICAgICAgICBfc3VwcG9ydDogaXNJbmRleGVkREJWYWxpZCgpLFxuICAgICAgICBpdGVyYXRlOiBpdGVyYXRlLFxuICAgICAgICBnZXRJdGVtOiBnZXRJdGVtLFxuICAgICAgICBzZXRJdGVtOiBzZXRJdGVtLFxuICAgICAgICByZW1vdmVJdGVtOiByZW1vdmVJdGVtLFxuICAgICAgICBjbGVhcjogY2xlYXIsXG4gICAgICAgIGxlbmd0aDogbGVuZ3RoLFxuICAgICAgICBrZXk6IGtleSxcbiAgICAgICAga2V5czoga2V5cyxcbiAgICAgICAgZHJvcEluc3RhbmNlOiBkcm9wSW5zdGFuY2VcbiAgICAgIH07XG4gICAgICBmdW5jdGlvbiBpc1dlYlNRTFZhbGlkKCkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIG9wZW5EYXRhYmFzZSA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgIH1cblxuICAgICAgLy8gU2FkbHksIHRoZSBiZXN0IHdheSB0byBzYXZlIGJpbmFyeSBkYXRhIGluIFdlYlNRTC9sb2NhbFN0b3JhZ2UgaXMgc2VyaWFsaXppbmdcbiAgICAgIC8vIGl0IHRvIEJhc2U2NCwgc28gdGhpcyBpcyBob3cgd2Ugc3RvcmUgaXQgdG8gcHJldmVudCB2ZXJ5IHN0cmFuZ2UgZXJyb3JzIHdpdGggbGVzc1xuICAgICAgLy8gdmVyYm9zZSB3YXlzIG9mIGJpbmFyeSA8LT4gc3RyaW5nIGRhdGEgc3RvcmFnZS5cbiAgICAgIHZhciBCQVNFX0NIQVJTID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nO1xuICAgICAgdmFyIEJMT0JfVFlQRV9QUkVGSVggPSAnfn5sb2NhbF9mb3JhZ2VfdHlwZX4nO1xuICAgICAgdmFyIEJMT0JfVFlQRV9QUkVGSVhfUkVHRVggPSAvXn5+bG9jYWxfZm9yYWdlX3R5cGV+KFtefl0rKX4vO1xuICAgICAgdmFyIFNFUklBTElaRURfTUFSS0VSID0gJ19fbGZzY19fOic7XG4gICAgICB2YXIgU0VSSUFMSVpFRF9NQVJLRVJfTEVOR1RIID0gU0VSSUFMSVpFRF9NQVJLRVIubGVuZ3RoO1xuXG4gICAgICAvLyBPTUcgdGhlIHNlcmlhbGl6YXRpb25zIVxuICAgICAgdmFyIFRZUEVfQVJSQVlCVUZGRVIgPSAnYXJiZic7XG4gICAgICB2YXIgVFlQRV9CTE9CID0gJ2Jsb2InO1xuICAgICAgdmFyIFRZUEVfSU5UOEFSUkFZID0gJ3NpMDgnO1xuICAgICAgdmFyIFRZUEVfVUlOVDhBUlJBWSA9ICd1aTA4JztcbiAgICAgIHZhciBUWVBFX1VJTlQ4Q0xBTVBFREFSUkFZID0gJ3VpYzgnO1xuICAgICAgdmFyIFRZUEVfSU5UMTZBUlJBWSA9ICdzaTE2JztcbiAgICAgIHZhciBUWVBFX0lOVDMyQVJSQVkgPSAnc2kzMic7XG4gICAgICB2YXIgVFlQRV9VSU5UMTZBUlJBWSA9ICd1cjE2JztcbiAgICAgIHZhciBUWVBFX1VJTlQzMkFSUkFZID0gJ3VpMzInO1xuICAgICAgdmFyIFRZUEVfRkxPQVQzMkFSUkFZID0gJ2ZsMzInO1xuICAgICAgdmFyIFRZUEVfRkxPQVQ2NEFSUkFZID0gJ2ZsNjQnO1xuICAgICAgdmFyIFRZUEVfU0VSSUFMSVpFRF9NQVJLRVJfTEVOR1RIID0gU0VSSUFMSVpFRF9NQVJLRVJfTEVOR1RIICsgVFlQRV9BUlJBWUJVRkZFUi5sZW5ndGg7XG4gICAgICB2YXIgdG9TdHJpbmckMSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG4gICAgICBmdW5jdGlvbiBzdHJpbmdUb0J1ZmZlcihzZXJpYWxpemVkU3RyaW5nKSB7XG4gICAgICAgIC8vIEZpbGwgdGhlIHN0cmluZyBpbnRvIGEgQXJyYXlCdWZmZXIuXG4gICAgICAgIHZhciBidWZmZXJMZW5ndGggPSBzZXJpYWxpemVkU3RyaW5nLmxlbmd0aCAqIDAuNzU7XG4gICAgICAgIHZhciBsZW4gPSBzZXJpYWxpemVkU3RyaW5nLmxlbmd0aDtcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIHZhciBwID0gMDtcbiAgICAgICAgdmFyIGVuY29kZWQxLCBlbmNvZGVkMiwgZW5jb2RlZDMsIGVuY29kZWQ0O1xuICAgICAgICBpZiAoc2VyaWFsaXplZFN0cmluZ1tzZXJpYWxpemVkU3RyaW5nLmxlbmd0aCAtIDFdID09PSAnPScpIHtcbiAgICAgICAgICBidWZmZXJMZW5ndGgtLTtcbiAgICAgICAgICBpZiAoc2VyaWFsaXplZFN0cmluZ1tzZXJpYWxpemVkU3RyaW5nLmxlbmd0aCAtIDJdID09PSAnPScpIHtcbiAgICAgICAgICAgIGJ1ZmZlckxlbmd0aC0tO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKGJ1ZmZlckxlbmd0aCk7XG4gICAgICAgIHZhciBieXRlcyA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgICAgICAgIGVuY29kZWQxID0gQkFTRV9DSEFSUy5pbmRleE9mKHNlcmlhbGl6ZWRTdHJpbmdbaV0pO1xuICAgICAgICAgIGVuY29kZWQyID0gQkFTRV9DSEFSUy5pbmRleE9mKHNlcmlhbGl6ZWRTdHJpbmdbaSArIDFdKTtcbiAgICAgICAgICBlbmNvZGVkMyA9IEJBU0VfQ0hBUlMuaW5kZXhPZihzZXJpYWxpemVkU3RyaW5nW2kgKyAyXSk7XG4gICAgICAgICAgZW5jb2RlZDQgPSBCQVNFX0NIQVJTLmluZGV4T2Yoc2VyaWFsaXplZFN0cmluZ1tpICsgM10pO1xuXG4gICAgICAgICAgLypqc2xpbnQgYml0d2lzZTogdHJ1ZSAqL1xuICAgICAgICAgIGJ5dGVzW3ArK10gPSBlbmNvZGVkMSA8PCAyIHwgZW5jb2RlZDIgPj4gNDtcbiAgICAgICAgICBieXRlc1twKytdID0gKGVuY29kZWQyICYgMTUpIDw8IDQgfCBlbmNvZGVkMyA+PiAyO1xuICAgICAgICAgIGJ5dGVzW3ArK10gPSAoZW5jb2RlZDMgJiAzKSA8PCA2IHwgZW5jb2RlZDQgJiA2MztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYnVmZmVyO1xuICAgICAgfVxuXG4gICAgICAvLyBDb252ZXJ0cyBhIGJ1ZmZlciB0byBhIHN0cmluZyB0byBzdG9yZSwgc2VyaWFsaXplZCwgaW4gdGhlIGJhY2tlbmRcbiAgICAgIC8vIHN0b3JhZ2UgbGlicmFyeS5cbiAgICAgIGZ1bmN0aW9uIGJ1ZmZlclRvU3RyaW5nKGJ1ZmZlcikge1xuICAgICAgICAvLyBiYXNlNjQtYXJyYXlidWZmZXJcbiAgICAgICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcbiAgICAgICAgdmFyIGJhc2U2NFN0cmluZyA9ICcnO1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSArPSAzKSB7XG4gICAgICAgICAgLypqc2xpbnQgYml0d2lzZTogdHJ1ZSAqL1xuICAgICAgICAgIGJhc2U2NFN0cmluZyArPSBCQVNFX0NIQVJTW2J5dGVzW2ldID4+IDJdO1xuICAgICAgICAgIGJhc2U2NFN0cmluZyArPSBCQVNFX0NIQVJTWyhieXRlc1tpXSAmIDMpIDw8IDQgfCBieXRlc1tpICsgMV0gPj4gNF07XG4gICAgICAgICAgYmFzZTY0U3RyaW5nICs9IEJBU0VfQ0hBUlNbKGJ5dGVzW2kgKyAxXSAmIDE1KSA8PCAyIHwgYnl0ZXNbaSArIDJdID4+IDZdO1xuICAgICAgICAgIGJhc2U2NFN0cmluZyArPSBCQVNFX0NIQVJTW2J5dGVzW2kgKyAyXSAmIDYzXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYnl0ZXMubGVuZ3RoICUgMyA9PT0gMikge1xuICAgICAgICAgIGJhc2U2NFN0cmluZyA9IGJhc2U2NFN0cmluZy5zdWJzdHJpbmcoMCwgYmFzZTY0U3RyaW5nLmxlbmd0aCAtIDEpICsgJz0nO1xuICAgICAgICB9IGVsc2UgaWYgKGJ5dGVzLmxlbmd0aCAlIDMgPT09IDEpIHtcbiAgICAgICAgICBiYXNlNjRTdHJpbmcgPSBiYXNlNjRTdHJpbmcuc3Vic3RyaW5nKDAsIGJhc2U2NFN0cmluZy5sZW5ndGggLSAyKSArICc9PSc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJhc2U2NFN0cmluZztcbiAgICAgIH1cblxuICAgICAgLy8gU2VyaWFsaXplIGEgdmFsdWUsIGFmdGVyd2FyZHMgZXhlY3V0aW5nIGEgY2FsbGJhY2sgKHdoaWNoIHVzdWFsbHlcbiAgICAgIC8vIGluc3RydWN0cyB0aGUgYHNldEl0ZW0oKWAgY2FsbGJhY2svcHJvbWlzZSB0byBiZSBleGVjdXRlZCkuIFRoaXMgaXMgaG93XG4gICAgICAvLyB3ZSBzdG9yZSBiaW5hcnkgZGF0YSB3aXRoIGxvY2FsU3RvcmFnZS5cbiAgICAgIGZ1bmN0aW9uIHNlcmlhbGl6ZSh2YWx1ZSwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHZhbHVlVHlwZSA9ICcnO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICB2YWx1ZVR5cGUgPSB0b1N0cmluZyQxLmNhbGwodmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2Fubm90IHVzZSBgdmFsdWUgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcmAgb3Igc3VjaCBoZXJlLCBhcyB0aGVzZVxuICAgICAgICAvLyBjaGVja3MgZmFpbCB3aGVuIHJ1bm5pbmcgdGhlIHRlc3RzIHVzaW5nIGNhc3Blci5qcy4uLlxuICAgICAgICAvL1xuICAgICAgICAvLyBUT0RPOiBTZWUgd2h5IHRob3NlIHRlc3RzIGZhaWwgYW5kIHVzZSBhIGJldHRlciBzb2x1dGlvbi5cbiAgICAgICAgaWYgKHZhbHVlICYmICh2YWx1ZVR5cGUgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXScgfHwgdmFsdWUuYnVmZmVyICYmIHRvU3RyaW5nJDEuY2FsbCh2YWx1ZS5idWZmZXIpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nKSkge1xuICAgICAgICAgIC8vIENvbnZlcnQgYmluYXJ5IGFycmF5cyB0byBhIHN0cmluZyBhbmQgcHJlZml4IHRoZSBzdHJpbmcgd2l0aFxuICAgICAgICAgIC8vIGEgc3BlY2lhbCBtYXJrZXIuXG4gICAgICAgICAgdmFyIGJ1ZmZlcjtcbiAgICAgICAgICB2YXIgbWFya2VyID0gU0VSSUFMSVpFRF9NQVJLRVI7XG4gICAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICAgIGJ1ZmZlciA9IHZhbHVlO1xuICAgICAgICAgICAgbWFya2VyICs9IFRZUEVfQVJSQVlCVUZGRVI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ1ZmZlciA9IHZhbHVlLmJ1ZmZlcjtcbiAgICAgICAgICAgIGlmICh2YWx1ZVR5cGUgPT09ICdbb2JqZWN0IEludDhBcnJheV0nKSB7XG4gICAgICAgICAgICAgIG1hcmtlciArPSBUWVBFX0lOVDhBUlJBWTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWVUeXBlID09PSAnW29iamVjdCBVaW50OEFycmF5XScpIHtcbiAgICAgICAgICAgICAgbWFya2VyICs9IFRZUEVfVUlOVDhBUlJBWTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWVUeXBlID09PSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nKSB7XG4gICAgICAgICAgICAgIG1hcmtlciArPSBUWVBFX1VJTlQ4Q0xBTVBFREFSUkFZO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZVR5cGUgPT09ICdbb2JqZWN0IEludDE2QXJyYXldJykge1xuICAgICAgICAgICAgICBtYXJrZXIgKz0gVFlQRV9JTlQxNkFSUkFZO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZVR5cGUgPT09ICdbb2JqZWN0IFVpbnQxNkFycmF5XScpIHtcbiAgICAgICAgICAgICAgbWFya2VyICs9IFRZUEVfVUlOVDE2QVJSQVk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlVHlwZSA9PT0gJ1tvYmplY3QgSW50MzJBcnJheV0nKSB7XG4gICAgICAgICAgICAgIG1hcmtlciArPSBUWVBFX0lOVDMyQVJSQVk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlVHlwZSA9PT0gJ1tvYmplY3QgVWludDMyQXJyYXldJykge1xuICAgICAgICAgICAgICBtYXJrZXIgKz0gVFlQRV9VSU5UMzJBUlJBWTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWVUeXBlID09PSAnW29iamVjdCBGbG9hdDMyQXJyYXldJykge1xuICAgICAgICAgICAgICBtYXJrZXIgKz0gVFlQRV9GTE9BVDMyQVJSQVk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlVHlwZSA9PT0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScpIHtcbiAgICAgICAgICAgICAgbWFya2VyICs9IFRZUEVfRkxPQVQ2NEFSUkFZO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY2FsbGJhY2sobmV3IEVycm9yKCdGYWlsZWQgdG8gZ2V0IHR5cGUgZm9yIEJpbmFyeUFycmF5JykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBjYWxsYmFjayhtYXJrZXIgKyBidWZmZXJUb1N0cmluZyhidWZmZXIpKTtcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZVR5cGUgPT09ICdbb2JqZWN0IEJsb2JdJykge1xuICAgICAgICAgIC8vIENvbnZlciB0aGUgYmxvYiB0byBhIGJpbmFyeUFycmF5IGFuZCB0aGVuIHRvIGEgc3RyaW5nLlxuICAgICAgICAgIHZhciBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICBmaWxlUmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIEJhY2t3YXJkcy1jb21wYXRpYmxlIHByZWZpeCBmb3IgdGhlIGJsb2IgdHlwZS5cbiAgICAgICAgICAgIHZhciBzdHIgPSBCTE9CX1RZUEVfUFJFRklYICsgdmFsdWUudHlwZSArICd+JyArIGJ1ZmZlclRvU3RyaW5nKHRoaXMucmVzdWx0KTtcbiAgICAgICAgICAgIGNhbGxiYWNrKFNFUklBTElaRURfTUFSS0VSICsgVFlQRV9CTE9CICsgc3RyKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIGZpbGVSZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIodmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjYWxsYmFjayhKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDb3VsZG4ndCBjb252ZXJ0IHZhbHVlIGludG8gYSBKU09OIHN0cmluZzogXCIsIHZhbHVlKTtcbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBEZXNlcmlhbGl6ZSBkYXRhIHdlJ3ZlIGluc2VydGVkIGludG8gYSB2YWx1ZSBjb2x1bW4vZmllbGQuIFdlIHBsYWNlXG4gICAgICAvLyBzcGVjaWFsIG1hcmtlcnMgaW50byBvdXIgc3RyaW5ncyB0byBtYXJrIHRoZW0gYXMgZW5jb2RlZDsgdGhpcyBpc24ndFxuICAgICAgLy8gYXMgbmljZSBhcyBhIG1ldGEgZmllbGQsIGJ1dCBpdCdzIHRoZSBvbmx5IHNhbmUgdGhpbmcgd2UgY2FuIGRvIHdoaWxzdFxuICAgICAgLy8ga2VlcGluZyBsb2NhbFN0b3JhZ2Ugc3VwcG9ydCBpbnRhY3QuXG4gICAgICAvL1xuICAgICAgLy8gT2Z0ZW50aW1lcyB0aGlzIHdpbGwganVzdCBkZXNlcmlhbGl6ZSBKU09OIGNvbnRlbnQsIGJ1dCBpZiB3ZSBoYXZlIGFcbiAgICAgIC8vIHNwZWNpYWwgbWFya2VyIChTRVJJQUxJWkVEX01BUktFUiwgZGVmaW5lZCBhYm92ZSksIHdlIHdpbGwgZXh0cmFjdFxuICAgICAgLy8gc29tZSBraW5kIG9mIGFycmF5YnVmZmVyL2JpbmFyeSBkYXRhL3R5cGVkIGFycmF5IG91dCBvZiB0aGUgc3RyaW5nLlxuICAgICAgZnVuY3Rpb24gZGVzZXJpYWxpemUodmFsdWUpIHtcbiAgICAgICAgLy8gSWYgd2UgaGF2ZW4ndCBtYXJrZWQgdGhpcyBzdHJpbmcgYXMgYmVpbmcgc3BlY2lhbGx5IHNlcmlhbGl6ZWQgKGkuZS5cbiAgICAgICAgLy8gc29tZXRoaW5nIG90aGVyIHRoYW4gc2VyaWFsaXplZCBKU09OKSwgd2UgY2FuIGp1c3QgcmV0dXJuIGl0IGFuZCBiZVxuICAgICAgICAvLyBkb25lIHdpdGggaXQuXG4gICAgICAgIGlmICh2YWx1ZS5zdWJzdHJpbmcoMCwgU0VSSUFMSVpFRF9NQVJLRVJfTEVOR1RIKSAhPT0gU0VSSUFMSVpFRF9NQVJLRVIpIHtcbiAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGNvZGUgZGVhbHMgd2l0aCBkZXNlcmlhbGl6aW5nIHNvbWUga2luZCBvZiBCbG9iIG9yXG4gICAgICAgIC8vIFR5cGVkQXJyYXkuIEZpcnN0IHdlIHNlcGFyYXRlIG91dCB0aGUgdHlwZSBvZiBkYXRhIHdlJ3JlIGRlYWxpbmdcbiAgICAgICAgLy8gd2l0aCBmcm9tIHRoZSBkYXRhIGl0c2VsZi5cbiAgICAgICAgdmFyIHNlcmlhbGl6ZWRTdHJpbmcgPSB2YWx1ZS5zdWJzdHJpbmcoVFlQRV9TRVJJQUxJWkVEX01BUktFUl9MRU5HVEgpO1xuICAgICAgICB2YXIgdHlwZSA9IHZhbHVlLnN1YnN0cmluZyhTRVJJQUxJWkVEX01BUktFUl9MRU5HVEgsIFRZUEVfU0VSSUFMSVpFRF9NQVJLRVJfTEVOR1RIKTtcbiAgICAgICAgdmFyIGJsb2JUeXBlO1xuICAgICAgICAvLyBCYWNrd2FyZHMtY29tcGF0aWJsZSBibG9iIHR5cGUgc2VyaWFsaXphdGlvbiBzdHJhdGVneS5cbiAgICAgICAgLy8gREJzIGNyZWF0ZWQgd2l0aCBvbGRlciB2ZXJzaW9ucyBvZiBsb2NhbEZvcmFnZSB3aWxsIHNpbXBseSBub3QgaGF2ZSB0aGUgYmxvYiB0eXBlLlxuICAgICAgICBpZiAodHlwZSA9PT0gVFlQRV9CTE9CICYmIEJMT0JfVFlQRV9QUkVGSVhfUkVHRVgudGVzdChzZXJpYWxpemVkU3RyaW5nKSkge1xuICAgICAgICAgIHZhciBtYXRjaGVyID0gc2VyaWFsaXplZFN0cmluZy5tYXRjaChCTE9CX1RZUEVfUFJFRklYX1JFR0VYKTtcbiAgICAgICAgICBibG9iVHlwZSA9IG1hdGNoZXJbMV07XG4gICAgICAgICAgc2VyaWFsaXplZFN0cmluZyA9IHNlcmlhbGl6ZWRTdHJpbmcuc3Vic3RyaW5nKG1hdGNoZXJbMF0ubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYnVmZmVyID0gc3RyaW5nVG9CdWZmZXIoc2VyaWFsaXplZFN0cmluZyk7XG5cbiAgICAgICAgLy8gUmV0dXJuIHRoZSByaWdodCB0eXBlIGJhc2VkIG9uIHRoZSBjb2RlL3R5cGUgc2V0IGR1cmluZ1xuICAgICAgICAvLyBzZXJpYWxpemF0aW9uLlxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFRZUEVfQVJSQVlCVUZGRVI6XG4gICAgICAgICAgICByZXR1cm4gYnVmZmVyO1xuICAgICAgICAgIGNhc2UgVFlQRV9CTE9COlxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUJsb2IoW2J1ZmZlcl0sIHtcbiAgICAgICAgICAgICAgdHlwZTogYmxvYlR5cGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIGNhc2UgVFlQRV9JTlQ4QVJSQVk6XG4gICAgICAgICAgICByZXR1cm4gbmV3IEludDhBcnJheShidWZmZXIpO1xuICAgICAgICAgIGNhc2UgVFlQRV9VSU5UOEFSUkFZOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XG4gICAgICAgICAgY2FzZSBUWVBFX1VJTlQ4Q0xBTVBFREFSUkFZOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBVaW50OENsYW1wZWRBcnJheShidWZmZXIpO1xuICAgICAgICAgIGNhc2UgVFlQRV9JTlQxNkFSUkFZOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBJbnQxNkFycmF5KGJ1ZmZlcik7XG4gICAgICAgICAgY2FzZSBUWVBFX1VJTlQxNkFSUkFZOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBVaW50MTZBcnJheShidWZmZXIpO1xuICAgICAgICAgIGNhc2UgVFlQRV9JTlQzMkFSUkFZOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBJbnQzMkFycmF5KGJ1ZmZlcik7XG4gICAgICAgICAgY2FzZSBUWVBFX1VJTlQzMkFSUkFZOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBVaW50MzJBcnJheShidWZmZXIpO1xuICAgICAgICAgIGNhc2UgVFlQRV9GTE9BVDMyQVJSQVk6XG4gICAgICAgICAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShidWZmZXIpO1xuICAgICAgICAgIGNhc2UgVFlQRV9GTE9BVDY0QVJSQVk6XG4gICAgICAgICAgICByZXR1cm4gbmV3IEZsb2F0NjRBcnJheShidWZmZXIpO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua293biB0eXBlOiAnICsgdHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBsb2NhbGZvcmFnZVNlcmlhbGl6ZXIgPSB7XG4gICAgICAgIHNlcmlhbGl6ZTogc2VyaWFsaXplLFxuICAgICAgICBkZXNlcmlhbGl6ZTogZGVzZXJpYWxpemUsXG4gICAgICAgIHN0cmluZ1RvQnVmZmVyOiBzdHJpbmdUb0J1ZmZlcixcbiAgICAgICAgYnVmZmVyVG9TdHJpbmc6IGJ1ZmZlclRvU3RyaW5nXG4gICAgICB9O1xuXG4gICAgICAvKlxuICAgICAgICogSW5jbHVkZXMgY29kZSBmcm9tOlxuICAgICAgICpcbiAgICAgICAqIGJhc2U2NC1hcnJheWJ1ZmZlclxuICAgICAgICogaHR0cHM6Ly9naXRodWIuY29tL25pa2xhc3ZoL2Jhc2U2NC1hcnJheWJ1ZmZlclxuICAgICAgICpcbiAgICAgICAqIENvcHlyaWdodCAoYykgMjAxMiBOaWtsYXMgdm9uIEhlcnR6ZW5cbiAgICAgICAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAgICAgICAqL1xuXG4gICAgICBmdW5jdGlvbiBjcmVhdGVEYlRhYmxlKHQsIGRiSW5mbywgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spIHtcbiAgICAgICAgdC5leGVjdXRlU3FsKCdDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyAnICsgZGJJbmZvLnN0b3JlTmFtZSArICcgJyArICcoaWQgSU5URUdFUiBQUklNQVJZIEtFWSwga2V5IHVuaXF1ZSwgdmFsdWUpJywgW10sIGNhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcbiAgICAgIH1cblxuICAgICAgLy8gT3BlbiB0aGUgV2ViU1FMIGRhdGFiYXNlIChhdXRvbWF0aWNhbGx5IGNyZWF0ZXMgb25lIGlmIG9uZSBkaWRuJ3RcbiAgICAgIC8vIHByZXZpb3VzbHkgZXhpc3QpLCB1c2luZyBhbnkgb3B0aW9ucyBzZXQgaW4gdGhlIGNvbmZpZy5cbiAgICAgIGZ1bmN0aW9uIF9pbml0U3RvcmFnZSQxKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgZGJJbmZvID0ge1xuICAgICAgICAgIGRiOiBudWxsXG4gICAgICAgIH07XG4gICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgZm9yICh2YXIgaSBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgICBkYkluZm9baV0gPSB0eXBlb2Ygb3B0aW9uc1tpXSAhPT0gJ3N0cmluZycgPyBvcHRpb25zW2ldLnRvU3RyaW5nKCkgOiBvcHRpb25zW2ldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgZGJJbmZvUHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIC8vIE9wZW4gdGhlIGRhdGFiYXNlOyB0aGUgb3BlbkRhdGFiYXNlIEFQSSB3aWxsIGF1dG9tYXRpY2FsbHlcbiAgICAgICAgICAvLyBjcmVhdGUgaXQgZm9yIHVzIGlmIGl0IGRvZXNuJ3QgZXhpc3QuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRiSW5mby5kYiA9IG9wZW5EYXRhYmFzZShkYkluZm8ubmFtZSwgU3RyaW5nKGRiSW5mby52ZXJzaW9uKSwgZGJJbmZvLmRlc2NyaXB0aW9uLCBkYkluZm8uc2l6ZSk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBDcmVhdGUgb3VyIGtleS92YWx1ZSB0YWJsZSBpZiBpdCBkb2Vzbid0IGV4aXN0LlxuICAgICAgICAgIGRiSW5mby5kYi50cmFuc2FjdGlvbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgY3JlYXRlRGJUYWJsZSh0LCBkYkluZm8sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgc2VsZi5fZGJJbmZvID0gZGJJbmZvO1xuICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAodCwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgICBkYkluZm8uc2VyaWFsaXplciA9IGxvY2FsZm9yYWdlU2VyaWFsaXplcjtcbiAgICAgICAgcmV0dXJuIGRiSW5mb1Byb21pc2U7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiB0cnlFeGVjdXRlU3FsKHQsIGRiSW5mbywgc3FsU3RhdGVtZW50LCBhcmdzLCBjYWxsYmFjaywgZXJyb3JDYWxsYmFjaykge1xuICAgICAgICB0LmV4ZWN1dGVTcWwoc3FsU3RhdGVtZW50LCBhcmdzLCBjYWxsYmFjaywgZnVuY3Rpb24gKHQsIGVycm9yKSB7XG4gICAgICAgICAgaWYgKGVycm9yLmNvZGUgPT09IGVycm9yLlNZTlRBWF9FUlIpIHtcbiAgICAgICAgICAgIHQuZXhlY3V0ZVNxbCgnU0VMRUNUIG5hbWUgRlJPTSBzcWxpdGVfbWFzdGVyICcgKyBcIldIRVJFIHR5cGU9J3RhYmxlJyBBTkQgbmFtZSA9ID9cIiwgW2RiSW5mby5zdG9yZU5hbWVdLCBmdW5jdGlvbiAodCwgcmVzdWx0cykge1xuICAgICAgICAgICAgICBpZiAoIXJlc3VsdHMucm93cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgdGFibGUgaXMgbWlzc2luZyAod2FzIGRlbGV0ZWQpXG4gICAgICAgICAgICAgICAgLy8gcmUtY3JlYXRlIGl0IHRhYmxlIGFuZCByZXRyeVxuICAgICAgICAgICAgICAgIGNyZWF0ZURiVGFibGUodCwgZGJJbmZvLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICB0LmV4ZWN1dGVTcWwoc3FsU3RhdGVtZW50LCBhcmdzLCBjYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgfSwgZXJyb3JDYWxsYmFjayk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXJyb3JDYWxsYmFjayh0LCBlcnJvcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGVycm9yQ2FsbGJhY2spO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJvckNhbGxiYWNrKHQsIGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGVycm9yQ2FsbGJhY2spO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gZ2V0SXRlbSQxKGtleSwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBrZXkgPSBub3JtYWxpemVLZXkoa2V5KTtcbiAgICAgICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZGJJbmZvID0gc2VsZi5fZGJJbmZvO1xuICAgICAgICAgICAgZGJJbmZvLmRiLnRyYW5zYWN0aW9uKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgIHRyeUV4ZWN1dGVTcWwodCwgZGJJbmZvLCAnU0VMRUNUICogRlJPTSAnICsgZGJJbmZvLnN0b3JlTmFtZSArICcgV0hFUkUga2V5ID0gPyBMSU1JVCAxJywgW2tleV0sIGZ1bmN0aW9uICh0LCByZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHJlc3VsdHMucm93cy5sZW5ndGggPyByZXN1bHRzLnJvd3MuaXRlbSgwKS52YWx1ZSA6IG51bGw7XG5cbiAgICAgICAgICAgICAgICAvLyBDaGVjayB0byBzZWUgaWYgdGhpcyBpcyBzZXJpYWxpemVkIGNvbnRlbnQgd2UgbmVlZCB0b1xuICAgICAgICAgICAgICAgIC8vIHVucGFjay5cbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICByZXN1bHQgPSBkYkluZm8uc2VyaWFsaXplci5kZXNlcmlhbGl6ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICh0LCBlcnJvcikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBpdGVyYXRlJDEoaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZGJJbmZvID0gc2VsZi5fZGJJbmZvO1xuICAgICAgICAgICAgZGJJbmZvLmRiLnRyYW5zYWN0aW9uKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgIHRyeUV4ZWN1dGVTcWwodCwgZGJJbmZvLCAnU0VMRUNUICogRlJPTSAnICsgZGJJbmZvLnN0b3JlTmFtZSwgW10sIGZ1bmN0aW9uICh0LCByZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJvd3MgPSByZXN1bHRzLnJvd3M7XG4gICAgICAgICAgICAgICAgdmFyIGxlbmd0aCA9IHJvd3MubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gcm93cy5pdGVtKGkpO1xuICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGl0ZW0udmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiB0aGlzIGlzIHNlcmlhbGl6ZWQgY29udGVudFxuICAgICAgICAgICAgICAgICAgLy8gd2UgbmVlZCB0byB1bnBhY2suXG4gICAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGRiSW5mby5zZXJpYWxpemVyLmRlc2VyaWFsaXplKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZXN1bHQgPSBpdGVyYXRvcihyZXN1bHQsIGl0ZW0ua2V5LCBpICsgMSk7XG5cbiAgICAgICAgICAgICAgICAgIC8vIHZvaWQoMCkgcHJldmVudHMgcHJvYmxlbXMgd2l0aCByZWRlZmluaXRpb25cbiAgICAgICAgICAgICAgICAgIC8vIG9mIGB1bmRlZmluZWRgLlxuICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICh0LCBlcnJvcikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBfc2V0SXRlbShrZXksIHZhbHVlLCBjYWxsYmFjaywgcmV0cmllc0xlZnQpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBrZXkgPSBub3JtYWxpemVLZXkoa2V5KTtcbiAgICAgICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBUaGUgbG9jYWxTdG9yYWdlIEFQSSBkb2Vzbid0IHJldHVybiB1bmRlZmluZWQgdmFsdWVzIGluIGFuXG4gICAgICAgICAgICAvLyBcImV4cGVjdGVkXCIgd2F5LCBzbyB1bmRlZmluZWQgaXMgYWx3YXlzIGNhc3QgdG8gbnVsbCBpbiBhbGxcbiAgICAgICAgICAgIC8vIGRyaXZlcnMuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvbG9jYWxGb3JhZ2UvcHVsbC80MlxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTYXZlIHRoZSBvcmlnaW5hbCB2YWx1ZSB0byBwYXNzIHRvIHRoZSBjYWxsYmFjay5cbiAgICAgICAgICAgIHZhciBvcmlnaW5hbFZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB2YXIgZGJJbmZvID0gc2VsZi5fZGJJbmZvO1xuICAgICAgICAgICAgZGJJbmZvLnNlcmlhbGl6ZXIuc2VyaWFsaXplKHZhbHVlLCBmdW5jdGlvbiAodmFsdWUsIGVycm9yKSB7XG4gICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGJJbmZvLmRiLnRyYW5zYWN0aW9uKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICB0cnlFeGVjdXRlU3FsKHQsIGRiSW5mbywgJ0lOU0VSVCBPUiBSRVBMQUNFIElOVE8gJyArIGRiSW5mby5zdG9yZU5hbWUgKyAnICcgKyAnKGtleSwgdmFsdWUpIFZBTFVFUyAoPywgPyknLCBba2V5LCB2YWx1ZV0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShvcmlnaW5hbFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICh0LCBlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHNxbEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAvLyBUaGUgdHJhbnNhY3Rpb24gZmFpbGVkOyBjaGVja1xuICAgICAgICAgICAgICAgICAgLy8gdG8gc2VlIGlmIGl0J3MgYSBxdW90YSBlcnJvci5cbiAgICAgICAgICAgICAgICAgIGlmIChzcWxFcnJvci5jb2RlID09PSBzcWxFcnJvci5RVU9UQV9FUlIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UgcmVqZWN0IHRoZSBjYWxsYmFjayBvdXRyaWdodCBmb3Igbm93LCBidXRcbiAgICAgICAgICAgICAgICAgICAgLy8gaXQncyB3b3J0aCB0cnlpbmcgdG8gcmUtcnVuIHRoZSB0cmFuc2FjdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgLy8gRXZlbiBpZiB0aGUgdXNlciBhY2NlcHRzIHRoZSBwcm9tcHQgdG8gdXNlXG4gICAgICAgICAgICAgICAgICAgIC8vIG1vcmUgc3RvcmFnZSBvbiBTYWZhcmksIHRoaXMgZXJyb3Igd2lsbFxuICAgICAgICAgICAgICAgICAgICAvLyBiZSBjYWxsZWQuXG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vIFRyeSB0byByZS1ydW4gdGhlIHRyYW5zYWN0aW9uLlxuICAgICAgICAgICAgICAgICAgICBpZiAocmV0cmllc0xlZnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShfc2V0SXRlbS5hcHBseShzZWxmLCBba2V5LCBvcmlnaW5hbFZhbHVlLCBjYWxsYmFjaywgcmV0cmllc0xlZnQgLSAxXSkpO1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZWplY3Qoc3FsRXJyb3IpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIHNldEl0ZW0kMShrZXksIHZhbHVlLCBjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gX3NldEl0ZW0uYXBwbHkodGhpcywgW2tleSwgdmFsdWUsIGNhbGxiYWNrLCAxXSk7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiByZW1vdmVJdGVtJDEoa2V5LCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGtleSA9IG5vcm1hbGl6ZUtleShrZXkpO1xuICAgICAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBkYkluZm8gPSBzZWxmLl9kYkluZm87XG4gICAgICAgICAgICBkYkluZm8uZGIudHJhbnNhY3Rpb24oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgdHJ5RXhlY3V0ZVNxbCh0LCBkYkluZm8sICdERUxFVEUgRlJPTSAnICsgZGJJbmZvLnN0b3JlTmFtZSArICcgV0hFUkUga2V5ID0gPycsIFtrZXldLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAodCwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pW1wiY2F0Y2hcIl0ocmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgfVxuXG4gICAgICAvLyBEZWxldGVzIGV2ZXJ5IGl0ZW0gaW4gdGhlIHRhYmxlLlxuICAgICAgLy8gVE9ETzogRmluZCBvdXQgaWYgdGhpcyByZXNldHMgdGhlIEFVVE9fSU5DUkVNRU5UIG51bWJlci5cbiAgICAgIGZ1bmN0aW9uIGNsZWFyJDEoY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBkYkluZm8gPSBzZWxmLl9kYkluZm87XG4gICAgICAgICAgICBkYkluZm8uZGIudHJhbnNhY3Rpb24oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgdHJ5RXhlY3V0ZVNxbCh0LCBkYkluZm8sICdERUxFVEUgRlJPTSAnICsgZGJJbmZvLnN0b3JlTmFtZSwgW10sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICh0LCBlcnJvcikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIERvZXMgYSBzaW1wbGUgYENPVU5UKGtleSlgIHRvIGdldCB0aGUgbnVtYmVyIG9mIGl0ZW1zIHN0b3JlZCBpblxuICAgICAgLy8gbG9jYWxGb3JhZ2UuXG4gICAgICBmdW5jdGlvbiBsZW5ndGgkMShjYWxsYmFjaykge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGRiSW5mbyA9IHNlbGYuX2RiSW5mbztcbiAgICAgICAgICAgIGRiSW5mby5kYi50cmFuc2FjdGlvbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAvLyBBaGhoLCBTUUwgbWFrZXMgdGhpcyBvbmUgc29vb29vbyBlYXN5LlxuICAgICAgICAgICAgICB0cnlFeGVjdXRlU3FsKHQsIGRiSW5mbywgJ1NFTEVDVCBDT1VOVChrZXkpIGFzIGMgRlJPTSAnICsgZGJJbmZvLnN0b3JlTmFtZSwgW10sIGZ1bmN0aW9uICh0LCByZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHJlc3VsdHMucm93cy5pdGVtKDApLmM7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAodCwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pW1wiY2F0Y2hcIl0ocmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgfVxuXG4gICAgICAvLyBSZXR1cm4gdGhlIGtleSBsb2NhdGVkIGF0IGtleSBpbmRleCBYOyBlc3NlbnRpYWxseSBnZXRzIHRoZSBrZXkgZnJvbSBhXG4gICAgICAvLyBgV0hFUkUgaWQgPSA/YC4gVGhpcyBpcyB0aGUgbW9zdCBlZmZpY2llbnQgd2F5IEkgY2FuIHRoaW5rIHRvIGltcGxlbWVudFxuICAgICAgLy8gdGhpcyByYXJlbHktdXNlZCAoaW4gbXkgZXhwZXJpZW5jZSkgcGFydCBvZiB0aGUgQVBJLCBidXQgaXQgY2FuIHNlZW1cbiAgICAgIC8vIGluY29uc2lzdGVudCwgYmVjYXVzZSB3ZSBkbyBgSU5TRVJUIE9SIFJFUExBQ0UgSU5UT2Agb24gYHNldEl0ZW0oKWAsIHNvXG4gICAgICAvLyB0aGUgSUQgb2YgZWFjaCBrZXkgd2lsbCBjaGFuZ2UgZXZlcnkgdGltZSBpdCdzIHVwZGF0ZWQuIFBlcmhhcHMgYSBzdG9yZWRcbiAgICAgIC8vIHByb2NlZHVyZSBmb3IgdGhlIGBzZXRJdGVtKClgIFNRTCB3b3VsZCBzb2x2ZSB0aGlzIHByb2JsZW0/XG4gICAgICAvLyBUT0RPOiBEb24ndCBjaGFuZ2UgSUQgb24gYHNldEl0ZW0oKWAuXG4gICAgICBmdW5jdGlvbiBrZXkkMShuLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGRiSW5mbyA9IHNlbGYuX2RiSW5mbztcbiAgICAgICAgICAgIGRiSW5mby5kYi50cmFuc2FjdGlvbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICB0cnlFeGVjdXRlU3FsKHQsIGRiSW5mbywgJ1NFTEVDVCBrZXkgRlJPTSAnICsgZGJJbmZvLnN0b3JlTmFtZSArICcgV0hFUkUgaWQgPSA/IExJTUlUIDEnLCBbbiArIDFdLCBmdW5jdGlvbiAodCwgcmVzdWx0cykge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSByZXN1bHRzLnJvd3MubGVuZ3RoID8gcmVzdWx0cy5yb3dzLml0ZW0oMCkua2V5IDogbnVsbDtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICh0LCBlcnJvcikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBrZXlzJDEoY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBkYkluZm8gPSBzZWxmLl9kYkluZm87XG4gICAgICAgICAgICBkYkluZm8uZGIudHJhbnNhY3Rpb24oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgdHJ5RXhlY3V0ZVNxbCh0LCBkYkluZm8sICdTRUxFQ1Qga2V5IEZST00gJyArIGRiSW5mby5zdG9yZU5hbWUsIFtdLCBmdW5jdGlvbiAodCwgcmVzdWx0cykge1xuICAgICAgICAgICAgICAgIHZhciBrZXlzID0gW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRzLnJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgIGtleXMucHVzaChyZXN1bHRzLnJvd3MuaXRlbShpKS5rZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKGtleXMpO1xuICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAodCwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pW1wiY2F0Y2hcIl0ocmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgfVxuXG4gICAgICAvLyBodHRwczovL3d3dy53My5vcmcvVFIvd2ViZGF0YWJhc2UvI2RhdGFiYXNlc1xuICAgICAgLy8gPiBUaGVyZSBpcyBubyB3YXkgdG8gZW51bWVyYXRlIG9yIGRlbGV0ZSB0aGUgZGF0YWJhc2VzIGF2YWlsYWJsZSBmb3IgYW4gb3JpZ2luIGZyb20gdGhpcyBBUEkuXG4gICAgICBmdW5jdGlvbiBnZXRBbGxTdG9yZU5hbWVzKGRiKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBkYi50cmFuc2FjdGlvbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgdC5leGVjdXRlU3FsKCdTRUxFQ1QgbmFtZSBGUk9NIHNxbGl0ZV9tYXN0ZXIgJyArIFwiV0hFUkUgdHlwZT0ndGFibGUnIEFORCBuYW1lIDw+ICdfX1dlYktpdERhdGFiYXNlSW5mb1RhYmxlX18nXCIsIFtdLCBmdW5jdGlvbiAodCwgcmVzdWx0cykge1xuICAgICAgICAgICAgICB2YXIgc3RvcmVOYW1lcyA9IFtdO1xuICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdHMucm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHN0b3JlTmFtZXMucHVzaChyZXN1bHRzLnJvd3MuaXRlbShpKS5uYW1lKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICBkYjogZGIsXG4gICAgICAgICAgICAgICAgc3RvcmVOYW1lczogc3RvcmVOYW1lc1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uICh0LCBlcnJvcikge1xuICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24gKHNxbEVycm9yKSB7XG4gICAgICAgICAgICByZWplY3Qoc3FsRXJyb3IpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIGRyb3BJbnN0YW5jZSQxKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrID0gZ2V0Q2FsbGJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgdmFyIGN1cnJlbnRDb25maWcgPSB0aGlzLmNvbmZpZygpO1xuICAgICAgICBvcHRpb25zID0gdHlwZW9mIG9wdGlvbnMgIT09ICdmdW5jdGlvbicgJiYgb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgaWYgKCFvcHRpb25zLm5hbWUpIHtcbiAgICAgICAgICBvcHRpb25zLm5hbWUgPSBvcHRpb25zLm5hbWUgfHwgY3VycmVudENvbmZpZy5uYW1lO1xuICAgICAgICAgIG9wdGlvbnMuc3RvcmVOYW1lID0gb3B0aW9ucy5zdG9yZU5hbWUgfHwgY3VycmVudENvbmZpZy5zdG9yZU5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgcHJvbWlzZTtcbiAgICAgICAgaWYgKCFvcHRpb25zLm5hbWUpIHtcbiAgICAgICAgICBwcm9taXNlID0gUHJvbWlzZSQxLnJlamVjdCgnSW52YWxpZCBhcmd1bWVudHMnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgdmFyIGRiO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMubmFtZSA9PT0gY3VycmVudENvbmZpZy5uYW1lKSB7XG4gICAgICAgICAgICAgIC8vIHVzZSB0aGUgZGIgcmVmZXJlbmNlIG9mIHRoZSBjdXJyZW50IGluc3RhbmNlXG4gICAgICAgICAgICAgIGRiID0gc2VsZi5fZGJJbmZvLmRiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGIgPSBvcGVuRGF0YWJhc2Uob3B0aW9ucy5uYW1lLCAnJywgJycsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLnN0b3JlTmFtZSkge1xuICAgICAgICAgICAgICAvLyBkcm9wIGFsbCBkYXRhYmFzZSB0YWJsZXNcbiAgICAgICAgICAgICAgcmVzb2x2ZShnZXRBbGxTdG9yZU5hbWVzKGRiKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICBkYjogZGIsXG4gICAgICAgICAgICAgICAgc3RvcmVOYW1lczogW29wdGlvbnMuc3RvcmVOYW1lXVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChvcGVyYXRpb25JbmZvKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgIG9wZXJhdGlvbkluZm8uZGIudHJhbnNhY3Rpb24oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBkcm9wVGFibGUoc3RvcmVOYW1lKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHQuZXhlY3V0ZVNxbCgnRFJPUCBUQUJMRSBJRiBFWElTVFMgJyArIHN0b3JlTmFtZSwgW10sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICh0LCBlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBvcGVyYXRpb25zID0gW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IG9wZXJhdGlvbkluZm8uc3RvcmVOYW1lcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgb3BlcmF0aW9ucy5wdXNoKGRyb3BUYWJsZShvcGVyYXRpb25JbmZvLnN0b3JlTmFtZXNbaV0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgUHJvbWlzZSQxLmFsbChvcGVyYXRpb25zKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9KVtcImNhdGNoXCJdKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChzcWxFcnJvcikge1xuICAgICAgICAgICAgICAgIHJlamVjdChzcWxFcnJvcik7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICB9XG4gICAgICB2YXIgd2ViU1FMU3RvcmFnZSA9IHtcbiAgICAgICAgX2RyaXZlcjogJ3dlYlNRTFN0b3JhZ2UnLFxuICAgICAgICBfaW5pdFN0b3JhZ2U6IF9pbml0U3RvcmFnZSQxLFxuICAgICAgICBfc3VwcG9ydDogaXNXZWJTUUxWYWxpZCgpLFxuICAgICAgICBpdGVyYXRlOiBpdGVyYXRlJDEsXG4gICAgICAgIGdldEl0ZW06IGdldEl0ZW0kMSxcbiAgICAgICAgc2V0SXRlbTogc2V0SXRlbSQxLFxuICAgICAgICByZW1vdmVJdGVtOiByZW1vdmVJdGVtJDEsXG4gICAgICAgIGNsZWFyOiBjbGVhciQxLFxuICAgICAgICBsZW5ndGg6IGxlbmd0aCQxLFxuICAgICAgICBrZXk6IGtleSQxLFxuICAgICAgICBrZXlzOiBrZXlzJDEsXG4gICAgICAgIGRyb3BJbnN0YW5jZTogZHJvcEluc3RhbmNlJDFcbiAgICAgIH07XG4gICAgICBmdW5jdGlvbiBpc0xvY2FsU3RvcmFnZVZhbGlkKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiB0eXBlb2YgbG9jYWxTdG9yYWdlICE9PSAndW5kZWZpbmVkJyAmJiAnc2V0SXRlbScgaW4gbG9jYWxTdG9yYWdlICYmXG4gICAgICAgICAgLy8gaW4gSUU4IHR5cGVvZiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSA9PT0gJ29iamVjdCdcbiAgICAgICAgICAhIWxvY2FsU3RvcmFnZS5zZXRJdGVtO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBfZ2V0S2V5UHJlZml4KG9wdGlvbnMsIGRlZmF1bHRDb25maWcpIHtcbiAgICAgICAgdmFyIGtleVByZWZpeCA9IG9wdGlvbnMubmFtZSArICcvJztcbiAgICAgICAgaWYgKG9wdGlvbnMuc3RvcmVOYW1lICE9PSBkZWZhdWx0Q29uZmlnLnN0b3JlTmFtZSkge1xuICAgICAgICAgIGtleVByZWZpeCArPSBvcHRpb25zLnN0b3JlTmFtZSArICcvJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ga2V5UHJlZml4O1xuICAgICAgfVxuXG4gICAgICAvLyBDaGVjayBpZiBsb2NhbFN0b3JhZ2UgdGhyb3dzIHdoZW4gc2F2aW5nIGFuIGl0ZW1cbiAgICAgIGZ1bmN0aW9uIGNoZWNrSWZMb2NhbFN0b3JhZ2VUaHJvd3MoKSB7XG4gICAgICAgIHZhciBsb2NhbFN0b3JhZ2VUZXN0S2V5ID0gJ19sb2NhbGZvcmFnZV9zdXBwb3J0X3Rlc3QnO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGxvY2FsU3RvcmFnZVRlc3RLZXksIHRydWUpO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGxvY2FsU3RvcmFnZVRlc3RLZXkpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIENoZWNrIGlmIGxvY2FsU3RvcmFnZSBpcyB1c2FibGUgYW5kIGFsbG93cyB0byBzYXZlIGFuIGl0ZW1cbiAgICAgIC8vIFRoaXMgbWV0aG9kIGNoZWNrcyBpZiBsb2NhbFN0b3JhZ2UgaXMgdXNhYmxlIGluIFNhZmFyaSBQcml2YXRlIEJyb3dzaW5nXG4gICAgICAvLyBtb2RlLCBvciBpbiBhbnkgb3RoZXIgY2FzZSB3aGVyZSB0aGUgYXZhaWxhYmxlIHF1b3RhIGZvciBsb2NhbFN0b3JhZ2VcbiAgICAgIC8vIGlzIDAgYW5kIHRoZXJlIHdhc24ndCBhbnkgc2F2ZWQgaXRlbXMgeWV0LlxuICAgICAgZnVuY3Rpb24gX2lzTG9jYWxTdG9yYWdlVXNhYmxlKCkge1xuICAgICAgICByZXR1cm4gIWNoZWNrSWZMb2NhbFN0b3JhZ2VUaHJvd3MoKSB8fCBsb2NhbFN0b3JhZ2UubGVuZ3RoID4gMDtcbiAgICAgIH1cblxuICAgICAgLy8gQ29uZmlnIHRoZSBsb2NhbFN0b3JhZ2UgYmFja2VuZCwgdXNpbmcgb3B0aW9ucyBzZXQgaW4gdGhlIGNvbmZpZy5cbiAgICAgIGZ1bmN0aW9uIF9pbml0U3RvcmFnZSQyKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgZGJJbmZvID0ge307XG4gICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgZm9yICh2YXIgaSBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgICBkYkluZm9baV0gPSBvcHRpb25zW2ldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkYkluZm8ua2V5UHJlZml4ID0gX2dldEtleVByZWZpeChvcHRpb25zLCBzZWxmLl9kZWZhdWx0Q29uZmlnKTtcbiAgICAgICAgaWYgKCFfaXNMb2NhbFN0b3JhZ2VVc2FibGUoKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlJDEucmVqZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5fZGJJbmZvID0gZGJJbmZvO1xuICAgICAgICBkYkluZm8uc2VyaWFsaXplciA9IGxvY2FsZm9yYWdlU2VyaWFsaXplcjtcbiAgICAgICAgcmV0dXJuIFByb21pc2UkMS5yZXNvbHZlKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFJlbW92ZSBhbGwga2V5cyBmcm9tIHRoZSBkYXRhc3RvcmUsIGVmZmVjdGl2ZWx5IGRlc3Ryb3lpbmcgYWxsIGRhdGEgaW5cbiAgICAgIC8vIHRoZSBhcHAncyBrZXkvdmFsdWUgc3RvcmUhXG4gICAgICBmdW5jdGlvbiBjbGVhciQyKGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIHByb21pc2UgPSBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGtleVByZWZpeCA9IHNlbGYuX2RiSW5mby5rZXlQcmVmaXg7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IGxvY2FsU3RvcmFnZS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgdmFyIGtleSA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7XG4gICAgICAgICAgICBpZiAoa2V5LmluZGV4T2Yoa2V5UHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgfVxuXG4gICAgICAvLyBSZXRyaWV2ZSBhbiBpdGVtIGZyb20gdGhlIHN0b3JlLiBVbmxpa2UgdGhlIG9yaWdpbmFsIGFzeW5jX3N0b3JhZ2VcbiAgICAgIC8vIGxpYnJhcnkgaW4gR2FpYSwgd2UgZG9uJ3QgbW9kaWZ5IHJldHVybiB2YWx1ZXMgYXQgYWxsLiBJZiBhIGtleSdzIHZhbHVlXG4gICAgICAvLyBpcyBgdW5kZWZpbmVkYCwgd2UgcGFzcyB0aGF0IHZhbHVlIHRvIHRoZSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICAgIGZ1bmN0aW9uIGdldEl0ZW0kMihrZXksIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAga2V5ID0gbm9ybWFsaXplS2V5KGtleSk7XG4gICAgICAgIHZhciBwcm9taXNlID0gc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBkYkluZm8gPSBzZWxmLl9kYkluZm87XG4gICAgICAgICAgdmFyIHJlc3VsdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGRiSW5mby5rZXlQcmVmaXggKyBrZXkpO1xuXG4gICAgICAgICAgLy8gSWYgYSByZXN1bHQgd2FzIGZvdW5kLCBwYXJzZSBpdCBmcm9tIHRoZSBzZXJpYWxpemVkXG4gICAgICAgICAgLy8gc3RyaW5nIGludG8gYSBKUyBvYmplY3QuIElmIHJlc3VsdCBpc24ndCB0cnV0aHksIHRoZSBrZXlcbiAgICAgICAgICAvLyBpcyBsaWtlbHkgdW5kZWZpbmVkIGFuZCB3ZSdsbCBwYXNzIGl0IHN0cmFpZ2h0IHRvIHRoZVxuICAgICAgICAgIC8vIGNhbGxiYWNrLlxuICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGRiSW5mby5zZXJpYWxpemVyLmRlc2VyaWFsaXplKHJlc3VsdCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pO1xuICAgICAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgIH1cblxuICAgICAgLy8gSXRlcmF0ZSBvdmVyIGFsbCBpdGVtcyBpbiB0aGUgc3RvcmUuXG4gICAgICBmdW5jdGlvbiBpdGVyYXRlJDIoaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIHByb21pc2UgPSBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGRiSW5mbyA9IHNlbGYuX2RiSW5mbztcbiAgICAgICAgICB2YXIga2V5UHJlZml4ID0gZGJJbmZvLmtleVByZWZpeDtcbiAgICAgICAgICB2YXIga2V5UHJlZml4TGVuZ3RoID0ga2V5UHJlZml4Lmxlbmd0aDtcbiAgICAgICAgICB2YXIgbGVuZ3RoID0gbG9jYWxTdG9yYWdlLmxlbmd0aDtcblxuICAgICAgICAgIC8vIFdlIHVzZSBhIGRlZGljYXRlZCBpdGVyYXRvciBpbnN0ZWFkIG9mIHRoZSBgaWAgdmFyaWFibGUgYmVsb3dcbiAgICAgICAgICAvLyBzbyBvdGhlciBrZXlzIHdlIGZldGNoIGluIGxvY2FsU3RvcmFnZSBhcmVuJ3QgY291bnRlZCBpblxuICAgICAgICAgIC8vIHRoZSBgaXRlcmF0aW9uTnVtYmVyYCBhcmd1bWVudCBwYXNzZWQgdG8gdGhlIGBpdGVyYXRlKClgXG4gICAgICAgICAgLy8gY2FsbGJhY2suXG4gICAgICAgICAgLy9cbiAgICAgICAgICAvLyBTZWU6IGdpdGh1Yi5jb20vbW96aWxsYS9sb2NhbEZvcmFnZS9wdWxsLzQzNSNkaXNjdXNzaW9uX3IzODA2MTUzMFxuICAgICAgICAgIHZhciBpdGVyYXRpb25OdW1iZXIgPSAxO1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBsb2NhbFN0b3JhZ2Uua2V5KGkpO1xuICAgICAgICAgICAgaWYgKGtleS5pbmRleE9mKGtleVByZWZpeCkgIT09IDApIHtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuXG4gICAgICAgICAgICAvLyBJZiBhIHJlc3VsdCB3YXMgZm91bmQsIHBhcnNlIGl0IGZyb20gdGhlIHNlcmlhbGl6ZWRcbiAgICAgICAgICAgIC8vIHN0cmluZyBpbnRvIGEgSlMgb2JqZWN0LiBJZiByZXN1bHQgaXNuJ3QgdHJ1dGh5LCB0aGVcbiAgICAgICAgICAgIC8vIGtleSBpcyBsaWtlbHkgdW5kZWZpbmVkIGFuZCB3ZSdsbCBwYXNzIGl0IHN0cmFpZ2h0XG4gICAgICAgICAgICAvLyB0byB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgdmFsdWUgPSBkYkluZm8uc2VyaWFsaXplci5kZXNlcmlhbGl6ZSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZSA9IGl0ZXJhdG9yKHZhbHVlLCBrZXkuc3Vic3RyaW5nKGtleVByZWZpeExlbmd0aCksIGl0ZXJhdGlvbk51bWJlcisrKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgIH1cblxuICAgICAgLy8gU2FtZSBhcyBsb2NhbFN0b3JhZ2UncyBrZXkoKSBtZXRob2QsIGV4Y2VwdCB0YWtlcyBhIGNhbGxiYWNrLlxuICAgICAgZnVuY3Rpb24ga2V5JDIobiwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgcHJvbWlzZSA9IHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgZGJJbmZvID0gc2VsZi5fZGJJbmZvO1xuICAgICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGxvY2FsU3RvcmFnZS5rZXkobik7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IG51bGw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gUmVtb3ZlIHRoZSBwcmVmaXggZnJvbSB0aGUga2V5LCBpZiBhIGtleSBpcyBmb3VuZC5cbiAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuc3Vic3RyaW5nKGRiSW5mby5rZXlQcmVmaXgubGVuZ3RoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSk7XG4gICAgICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24ga2V5cyQyKGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIHByb21pc2UgPSBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGRiSW5mbyA9IHNlbGYuX2RiSW5mbztcbiAgICAgICAgICB2YXIgbGVuZ3RoID0gbG9jYWxTdG9yYWdlLmxlbmd0aDtcbiAgICAgICAgICB2YXIga2V5cyA9IFtdO1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpdGVtS2V5ID0gbG9jYWxTdG9yYWdlLmtleShpKTtcbiAgICAgICAgICAgIGlmIChpdGVtS2V5LmluZGV4T2YoZGJJbmZvLmtleVByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAga2V5cy5wdXNoKGl0ZW1LZXkuc3Vic3RyaW5nKGRiSW5mby5rZXlQcmVmaXgubGVuZ3RoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBrZXlzO1xuICAgICAgICB9KTtcbiAgICAgICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIFN1cHBseSB0aGUgbnVtYmVyIG9mIGtleXMgaW4gdGhlIGRhdGFzdG9yZSB0byB0aGUgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAgICBmdW5jdGlvbiBsZW5ndGgkMihjYWxsYmFjaykge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBwcm9taXNlID0gc2VsZi5rZXlzKCkudGhlbihmdW5jdGlvbiAoa2V5cykge1xuICAgICAgICAgIHJldHVybiBrZXlzLmxlbmd0aDtcbiAgICAgICAgfSk7XG4gICAgICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgfVxuXG4gICAgICAvLyBSZW1vdmUgYW4gaXRlbSBmcm9tIHRoZSBzdG9yZSwgbmljZSBhbmQgc2ltcGxlLlxuICAgICAgZnVuY3Rpb24gcmVtb3ZlSXRlbSQyKGtleSwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBrZXkgPSBub3JtYWxpemVLZXkoa2V5KTtcbiAgICAgICAgdmFyIHByb21pc2UgPSBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGRiSW5mbyA9IHNlbGYuX2RiSW5mbztcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShkYkluZm8ua2V5UHJlZml4ICsga2V5KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXQgYSBrZXkncyB2YWx1ZSBhbmQgcnVuIGFuIG9wdGlvbmFsIGNhbGxiYWNrIG9uY2UgdGhlIHZhbHVlIGlzIHNldC5cbiAgICAgIC8vIFVubGlrZSBHYWlhJ3MgaW1wbGVtZW50YXRpb24sIHRoZSBjYWxsYmFjayBmdW5jdGlvbiBpcyBwYXNzZWQgdGhlIHZhbHVlLFxuICAgICAgLy8gaW4gY2FzZSB5b3Ugd2FudCB0byBvcGVyYXRlIG9uIHRoYXQgdmFsdWUgb25seSBhZnRlciB5b3UncmUgc3VyZSBpdFxuICAgICAgLy8gc2F2ZWQsIG9yIHNvbWV0aGluZyBsaWtlIHRoYXQuXG4gICAgICBmdW5jdGlvbiBzZXRJdGVtJDIoa2V5LCB2YWx1ZSwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBrZXkgPSBub3JtYWxpemVLZXkoa2V5KTtcbiAgICAgICAgdmFyIHByb21pc2UgPSBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gQ29udmVydCB1bmRlZmluZWQgdmFsdWVzIHRvIG51bGwuXG4gICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvbG9jYWxGb3JhZ2UvcHVsbC80MlxuICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gU2F2ZSB0aGUgb3JpZ2luYWwgdmFsdWUgdG8gcGFzcyB0byB0aGUgY2FsbGJhY2suXG4gICAgICAgICAgdmFyIG9yaWdpbmFsVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB2YXIgZGJJbmZvID0gc2VsZi5fZGJJbmZvO1xuICAgICAgICAgICAgZGJJbmZvLnNlcmlhbGl6ZXIuc2VyaWFsaXplKHZhbHVlLCBmdW5jdGlvbiAodmFsdWUsIGVycm9yKSB7XG4gICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGRiSW5mby5rZXlQcmVmaXggKyBrZXksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgIHJlc29sdmUob3JpZ2luYWxWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgLy8gbG9jYWxTdG9yYWdlIGNhcGFjaXR5IGV4Y2VlZGVkLlxuICAgICAgICAgICAgICAgICAgLy8gVE9ETzogTWFrZSB0aGlzIGEgc3BlY2lmaWMgZXJyb3IvZXZlbnQuXG4gICAgICAgICAgICAgICAgICBpZiAoZS5uYW1lID09PSAnUXVvdGFFeGNlZWRlZEVycm9yJyB8fCBlLm5hbWUgPT09ICdOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIGRyb3BJbnN0YW5jZSQyKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrID0gZ2V0Q2FsbGJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgb3B0aW9ucyA9IHR5cGVvZiBvcHRpb25zICE9PSAnZnVuY3Rpb24nICYmIG9wdGlvbnMgfHwge307XG4gICAgICAgIGlmICghb3B0aW9ucy5uYW1lKSB7XG4gICAgICAgICAgdmFyIGN1cnJlbnRDb25maWcgPSB0aGlzLmNvbmZpZygpO1xuICAgICAgICAgIG9wdGlvbnMubmFtZSA9IG9wdGlvbnMubmFtZSB8fCBjdXJyZW50Q29uZmlnLm5hbWU7XG4gICAgICAgICAgb3B0aW9ucy5zdG9yZU5hbWUgPSBvcHRpb25zLnN0b3JlTmFtZSB8fCBjdXJyZW50Q29uZmlnLnN0b3JlTmFtZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBwcm9taXNlO1xuICAgICAgICBpZiAoIW9wdGlvbnMubmFtZSkge1xuICAgICAgICAgIHByb21pc2UgPSBQcm9taXNlJDEucmVqZWN0KCdJbnZhbGlkIGFyZ3VtZW50cycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuc3RvcmVOYW1lKSB7XG4gICAgICAgICAgICAgIHJlc29sdmUob3B0aW9ucy5uYW1lICsgJy8nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc29sdmUoX2dldEtleVByZWZpeChvcHRpb25zLCBzZWxmLl9kZWZhdWx0Q29uZmlnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoa2V5UHJlZml4KSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gbG9jYWxTdG9yYWdlLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgIHZhciBrZXkgPSBsb2NhbFN0b3JhZ2Uua2V5KGkpO1xuICAgICAgICAgICAgICBpZiAoa2V5LmluZGV4T2Yoa2V5UHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgIH1cbiAgICAgIHZhciBsb2NhbFN0b3JhZ2VXcmFwcGVyID0ge1xuICAgICAgICBfZHJpdmVyOiAnbG9jYWxTdG9yYWdlV3JhcHBlcicsXG4gICAgICAgIF9pbml0U3RvcmFnZTogX2luaXRTdG9yYWdlJDIsXG4gICAgICAgIF9zdXBwb3J0OiBpc0xvY2FsU3RvcmFnZVZhbGlkKCksXG4gICAgICAgIGl0ZXJhdGU6IGl0ZXJhdGUkMixcbiAgICAgICAgZ2V0SXRlbTogZ2V0SXRlbSQyLFxuICAgICAgICBzZXRJdGVtOiBzZXRJdGVtJDIsXG4gICAgICAgIHJlbW92ZUl0ZW06IHJlbW92ZUl0ZW0kMixcbiAgICAgICAgY2xlYXI6IGNsZWFyJDIsXG4gICAgICAgIGxlbmd0aDogbGVuZ3RoJDIsXG4gICAgICAgIGtleToga2V5JDIsXG4gICAgICAgIGtleXM6IGtleXMkMixcbiAgICAgICAgZHJvcEluc3RhbmNlOiBkcm9wSW5zdGFuY2UkMlxuICAgICAgfTtcbiAgICAgIHZhciBzYW1lVmFsdWUgPSBmdW5jdGlvbiBzYW1lVmFsdWUoeCwgeSkge1xuICAgICAgICByZXR1cm4geCA9PT0geSB8fCB0eXBlb2YgeCA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHkgPT09ICdudW1iZXInICYmIGlzTmFOKHgpICYmIGlzTmFOKHkpO1xuICAgICAgfTtcbiAgICAgIHZhciBpbmNsdWRlcyA9IGZ1bmN0aW9uIGluY2x1ZGVzKGFycmF5LCBzZWFyY2hFbGVtZW50KSB7XG4gICAgICAgIHZhciBsZW4gPSBhcnJheS5sZW5ndGg7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICAgICAgICBpZiAoc2FtZVZhbHVlKGFycmF5W2ldLCBzZWFyY2hFbGVtZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9O1xuICAgICAgdmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmcpID09PSAnW29iamVjdCBBcnJheV0nO1xuICAgICAgfTtcblxuICAgICAgLy8gRHJpdmVycyBhcmUgc3RvcmVkIGhlcmUgd2hlbiBgZGVmaW5lRHJpdmVyKClgIGlzIGNhbGxlZC5cbiAgICAgIC8vIFRoZXkgYXJlIHNoYXJlZCBhY3Jvc3MgYWxsIGluc3RhbmNlcyBvZiBsb2NhbEZvcmFnZS5cbiAgICAgIHZhciBEZWZpbmVkRHJpdmVycyA9IHt9O1xuICAgICAgdmFyIERyaXZlclN1cHBvcnQgPSB7fTtcbiAgICAgIHZhciBEZWZhdWx0RHJpdmVycyA9IHtcbiAgICAgICAgSU5ERVhFRERCOiBhc3luY1N0b3JhZ2UsXG4gICAgICAgIFdFQlNRTDogd2ViU1FMU3RvcmFnZSxcbiAgICAgICAgTE9DQUxTVE9SQUdFOiBsb2NhbFN0b3JhZ2VXcmFwcGVyXG4gICAgICB9O1xuICAgICAgdmFyIERlZmF1bHREcml2ZXJPcmRlciA9IFtEZWZhdWx0RHJpdmVycy5JTkRFWEVEREIuX2RyaXZlciwgRGVmYXVsdERyaXZlcnMuV0VCU1FMLl9kcml2ZXIsIERlZmF1bHREcml2ZXJzLkxPQ0FMU1RPUkFHRS5fZHJpdmVyXTtcbiAgICAgIHZhciBPcHRpb25hbERyaXZlck1ldGhvZHMgPSBbJ2Ryb3BJbnN0YW5jZSddO1xuICAgICAgdmFyIExpYnJhcnlNZXRob2RzID0gWydjbGVhcicsICdnZXRJdGVtJywgJ2l0ZXJhdGUnLCAna2V5JywgJ2tleXMnLCAnbGVuZ3RoJywgJ3JlbW92ZUl0ZW0nLCAnc2V0SXRlbSddLmNvbmNhdChPcHRpb25hbERyaXZlck1ldGhvZHMpO1xuICAgICAgdmFyIERlZmF1bHRDb25maWcgPSB7XG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgZHJpdmVyOiBEZWZhdWx0RHJpdmVyT3JkZXIuc2xpY2UoKSxcbiAgICAgICAgbmFtZTogJ2xvY2FsZm9yYWdlJyxcbiAgICAgICAgLy8gRGVmYXVsdCBEQiBzaXplIGlzIF9KVVNUIFVOREVSXyA1TUIsIGFzIGl0J3MgdGhlIGhpZ2hlc3Qgc2l6ZVxuICAgICAgICAvLyB3ZSBjYW4gdXNlIHdpdGhvdXQgYSBwcm9tcHQuXG4gICAgICAgIHNpemU6IDQ5ODA3MzYsXG4gICAgICAgIHN0b3JlTmFtZTogJ2tleXZhbHVlcGFpcnMnLFxuICAgICAgICB2ZXJzaW9uOiAxLjBcbiAgICAgIH07XG4gICAgICBmdW5jdGlvbiBjYWxsV2hlblJlYWR5KGxvY2FsRm9yYWdlSW5zdGFuY2UsIGxpYnJhcnlNZXRob2QpIHtcbiAgICAgICAgbG9jYWxGb3JhZ2VJbnN0YW5jZVtsaWJyYXJ5TWV0aG9kXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgX2FyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgICAgcmV0dXJuIGxvY2FsRm9yYWdlSW5zdGFuY2UucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBsb2NhbEZvcmFnZUluc3RhbmNlW2xpYnJhcnlNZXRob2RdLmFwcGx5KGxvY2FsRm9yYWdlSW5zdGFuY2UsIF9hcmdzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIGV4dGVuZCgpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgIGlmIChhcmcpIHtcbiAgICAgICAgICAgIGZvciAodmFyIF9rZXkgaW4gYXJnKSB7XG4gICAgICAgICAgICAgIGlmIChhcmcuaGFzT3duUHJvcGVydHkoX2tleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNBcnJheShhcmdbX2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICBhcmd1bWVudHNbMF1bX2tleV0gPSBhcmdbX2tleV0uc2xpY2UoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgYXJndW1lbnRzWzBdW19rZXldID0gYXJnW19rZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJndW1lbnRzWzBdO1xuICAgICAgfVxuICAgICAgdmFyIExvY2FsRm9yYWdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBMb2NhbEZvcmFnZShvcHRpb25zKSB7XG4gICAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExvY2FsRm9yYWdlKTtcbiAgICAgICAgICBmb3IgKHZhciBkcml2ZXJUeXBlS2V5IGluIERlZmF1bHREcml2ZXJzKSB7XG4gICAgICAgICAgICBpZiAoRGVmYXVsdERyaXZlcnMuaGFzT3duUHJvcGVydHkoZHJpdmVyVHlwZUtleSkpIHtcbiAgICAgICAgICAgICAgdmFyIGRyaXZlciA9IERlZmF1bHREcml2ZXJzW2RyaXZlclR5cGVLZXldO1xuICAgICAgICAgICAgICB2YXIgZHJpdmVyTmFtZSA9IGRyaXZlci5fZHJpdmVyO1xuICAgICAgICAgICAgICB0aGlzW2RyaXZlclR5cGVLZXldID0gZHJpdmVyTmFtZTtcbiAgICAgICAgICAgICAgaWYgKCFEZWZpbmVkRHJpdmVyc1tkcml2ZXJOYW1lXSkge1xuICAgICAgICAgICAgICAgIC8vIHdlIGRvbid0IG5lZWQgdG8gd2FpdCBmb3IgdGhlIHByb21pc2UsXG4gICAgICAgICAgICAgICAgLy8gc2luY2UgdGhlIGRlZmF1bHQgZHJpdmVycyBjYW4gYmUgZGVmaW5lZFxuICAgICAgICAgICAgICAgIC8vIGluIGEgYmxvY2tpbmcgbWFubmVyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWZpbmVEcml2ZXIoZHJpdmVyKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9kZWZhdWx0Q29uZmlnID0gZXh0ZW5kKHt9LCBEZWZhdWx0Q29uZmlnKTtcbiAgICAgICAgICB0aGlzLl9jb25maWcgPSBleHRlbmQoe30sIHRoaXMuX2RlZmF1bHRDb25maWcsIG9wdGlvbnMpO1xuICAgICAgICAgIHRoaXMuX2RyaXZlclNldCA9IG51bGw7XG4gICAgICAgICAgdGhpcy5faW5pdERyaXZlciA9IG51bGw7XG4gICAgICAgICAgdGhpcy5fcmVhZHkgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLl9kYkluZm8gPSBudWxsO1xuICAgICAgICAgIHRoaXMuX3dyYXBMaWJyYXJ5TWV0aG9kc1dpdGhSZWFkeSgpO1xuICAgICAgICAgIHRoaXMuc2V0RHJpdmVyKHRoaXMuX2NvbmZpZy5kcml2ZXIpW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKCkge30pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IGFueSBjb25maWcgdmFsdWVzIGZvciBsb2NhbEZvcmFnZTsgY2FuIGJlIGNhbGxlZCBhbnl0aW1lIGJlZm9yZVxuICAgICAgICAvLyB0aGUgZmlyc3QgQVBJIGNhbGwgKGUuZy4gYGdldEl0ZW1gLCBgc2V0SXRlbWApLlxuICAgICAgICAvLyBXZSBsb29wIHRocm91Z2ggb3B0aW9ucyBzbyB3ZSBkb24ndCBvdmVyd3JpdGUgZXhpc3RpbmcgY29uZmlnXG4gICAgICAgIC8vIHZhbHVlcy5cblxuICAgICAgICBMb2NhbEZvcmFnZS5wcm90b3R5cGUuY29uZmlnID0gZnVuY3Rpb24gY29uZmlnKG9wdGlvbnMpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgb3B0aW9ucyBhcmd1bWVudCBpcyBhbiBvYmplY3QsIHdlIHVzZSBpdCB0byBzZXQgdmFsdWVzLlxuICAgICAgICAgIC8vIE90aGVyd2lzZSwgd2UgcmV0dXJuIGVpdGhlciBhIHNwZWNpZmllZCBjb25maWcgdmFsdWUgb3IgYWxsXG4gICAgICAgICAgLy8gY29uZmlnIHZhbHVlcy5cbiAgICAgICAgICBpZiAoKHR5cGVvZiBvcHRpb25zID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihvcHRpb25zKSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAvLyBJZiBsb2NhbGZvcmFnZSBpcyByZWFkeSBhbmQgZnVsbHkgaW5pdGlhbGl6ZWQsIHdlIGNhbid0IHNldFxuICAgICAgICAgICAgLy8gYW55IG5ldyBjb25maWd1cmF0aW9uIHZhbHVlcy4gSW5zdGVhZCwgd2UgcmV0dXJuIGFuIGVycm9yLlxuICAgICAgICAgICAgaWYgKHRoaXMuX3JlYWR5KSB7XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXCJDYW4ndCBjYWxsIGNvbmZpZygpIGFmdGVyIGxvY2FsZm9yYWdlIFwiICsgJ2hhcyBiZWVuIHVzZWQuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHZhciBpIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgaWYgKGkgPT09ICdzdG9yZU5hbWUnKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9uc1tpXSA9IG9wdGlvbnNbaV0ucmVwbGFjZSgvXFxXL2csICdfJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKGkgPT09ICd2ZXJzaW9uJyAmJiB0eXBlb2Ygb3B0aW9uc1tpXSAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdEYXRhYmFzZSB2ZXJzaW9uIG11c3QgYmUgYSBudW1iZXIuJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy5fY29uZmlnW2ldID0gb3B0aW9uc1tpXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gYWZ0ZXIgYWxsIGNvbmZpZyBvcHRpb25zIGFyZSBzZXQgYW5kXG4gICAgICAgICAgICAvLyB0aGUgZHJpdmVyIG9wdGlvbiBpcyB1c2VkLCB0cnkgc2V0dGluZyBpdFxuICAgICAgICAgICAgaWYgKCdkcml2ZXInIGluIG9wdGlvbnMgJiYgb3B0aW9ucy5kcml2ZXIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0RHJpdmVyKHRoaXMuX2NvbmZpZy5kcml2ZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb25maWdbb3B0aW9uc107XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb25maWc7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFVzZWQgdG8gZGVmaW5lIGEgY3VzdG9tIGRyaXZlciwgc2hhcmVkIGFjcm9zcyBhbGwgaW5zdGFuY2VzIG9mXG4gICAgICAgIC8vIGxvY2FsRm9yYWdlLlxuXG4gICAgICAgIExvY2FsRm9yYWdlLnByb3RvdHlwZS5kZWZpbmVEcml2ZXIgPSBmdW5jdGlvbiBkZWZpbmVEcml2ZXIoZHJpdmVyT2JqZWN0LCBjYWxsYmFjaywgZXJyb3JDYWxsYmFjaykge1xuICAgICAgICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICB2YXIgZHJpdmVyTmFtZSA9IGRyaXZlck9iamVjdC5fZHJpdmVyO1xuICAgICAgICAgICAgICB2YXIgY29tcGxpYW5jZUVycm9yID0gbmV3IEVycm9yKCdDdXN0b20gZHJpdmVyIG5vdCBjb21wbGlhbnQ7IHNlZSAnICsgJ2h0dHBzOi8vbW96aWxsYS5naXRodWIuaW8vbG9jYWxGb3JhZ2UvI2RlZmluZWRyaXZlcicpO1xuXG4gICAgICAgICAgICAgIC8vIEEgZHJpdmVyIG5hbWUgc2hvdWxkIGJlIGRlZmluZWQgYW5kIG5vdCBvdmVybGFwIHdpdGggdGhlXG4gICAgICAgICAgICAgIC8vIGxpYnJhcnktZGVmaW5lZCwgZGVmYXVsdCBkcml2ZXJzLlxuICAgICAgICAgICAgICBpZiAoIWRyaXZlck9iamVjdC5fZHJpdmVyKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGNvbXBsaWFuY2VFcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHZhciBkcml2ZXJNZXRob2RzID0gTGlicmFyeU1ldGhvZHMuY29uY2F0KCdfaW5pdFN0b3JhZ2UnKTtcbiAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGRyaXZlck1ldGhvZHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZHJpdmVyTWV0aG9kTmFtZSA9IGRyaXZlck1ldGhvZHNbaV07XG5cbiAgICAgICAgICAgICAgICAvLyB3aGVuIHRoZSBwcm9wZXJ0eSBpcyB0aGVyZSxcbiAgICAgICAgICAgICAgICAvLyBpdCBzaG91bGQgYmUgYSBtZXRob2QgZXZlbiB3aGVuIG9wdGlvbmFsXG4gICAgICAgICAgICAgICAgdmFyIGlzUmVxdWlyZWQgPSAhaW5jbHVkZXMoT3B0aW9uYWxEcml2ZXJNZXRob2RzLCBkcml2ZXJNZXRob2ROYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoKGlzUmVxdWlyZWQgfHwgZHJpdmVyT2JqZWN0W2RyaXZlck1ldGhvZE5hbWVdKSAmJiB0eXBlb2YgZHJpdmVyT2JqZWN0W2RyaXZlck1ldGhvZE5hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICByZWplY3QoY29tcGxpYW5jZUVycm9yKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdmFyIGNvbmZpZ3VyZU1pc3NpbmdNZXRob2RzID0gZnVuY3Rpb24gY29uZmlndXJlTWlzc2luZ01ldGhvZHMoKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1ldGhvZE5vdEltcGxlbWVudGVkRmFjdG9yeSA9IGZ1bmN0aW9uIG1ldGhvZE5vdEltcGxlbWVudGVkRmFjdG9yeShtZXRob2ROYW1lKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IoJ01ldGhvZCAnICsgbWV0aG9kTmFtZSArICcgaXMgbm90IGltcGxlbWVudGVkIGJ5IHRoZSBjdXJyZW50IGRyaXZlcicpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UkMS5yZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2xlbiA9IE9wdGlvbmFsRHJpdmVyTWV0aG9kcy5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgICAgICAgICAgICAgdmFyIG9wdGlvbmFsRHJpdmVyTWV0aG9kID0gT3B0aW9uYWxEcml2ZXJNZXRob2RzW19pXTtcbiAgICAgICAgICAgICAgICAgIGlmICghZHJpdmVyT2JqZWN0W29wdGlvbmFsRHJpdmVyTWV0aG9kXSkge1xuICAgICAgICAgICAgICAgICAgICBkcml2ZXJPYmplY3Rbb3B0aW9uYWxEcml2ZXJNZXRob2RdID0gbWV0aG9kTm90SW1wbGVtZW50ZWRGYWN0b3J5KG9wdGlvbmFsRHJpdmVyTWV0aG9kKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIGNvbmZpZ3VyZU1pc3NpbmdNZXRob2RzKCk7XG4gICAgICAgICAgICAgIHZhciBzZXREcml2ZXJTdXBwb3J0ID0gZnVuY3Rpb24gc2V0RHJpdmVyU3VwcG9ydChzdXBwb3J0KSB7XG4gICAgICAgICAgICAgICAgaWYgKERlZmluZWREcml2ZXJzW2RyaXZlck5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oJ1JlZGVmaW5pbmcgTG9jYWxGb3JhZ2UgZHJpdmVyOiAnICsgZHJpdmVyTmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIERlZmluZWREcml2ZXJzW2RyaXZlck5hbWVdID0gZHJpdmVyT2JqZWN0O1xuICAgICAgICAgICAgICAgIERyaXZlclN1cHBvcnRbZHJpdmVyTmFtZV0gPSBzdXBwb3J0O1xuICAgICAgICAgICAgICAgIC8vIGRvbid0IHVzZSBhIHRoZW4sIHNvIHRoYXQgd2UgY2FuIGRlZmluZVxuICAgICAgICAgICAgICAgIC8vIGRyaXZlcnMgdGhhdCBoYXZlIHNpbXBsZSBfc3VwcG9ydCBtZXRob2RzXG4gICAgICAgICAgICAgICAgLy8gaW4gYSBibG9ja2luZyBtYW5uZXJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIGlmICgnX3N1cHBvcnQnIGluIGRyaXZlck9iamVjdCkge1xuICAgICAgICAgICAgICAgIGlmIChkcml2ZXJPYmplY3QuX3N1cHBvcnQgJiYgdHlwZW9mIGRyaXZlck9iamVjdC5fc3VwcG9ydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgZHJpdmVyT2JqZWN0Ll9zdXBwb3J0KCkudGhlbihzZXREcml2ZXJTdXBwb3J0LCByZWplY3QpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBzZXREcml2ZXJTdXBwb3J0KCEhZHJpdmVyT2JqZWN0Ll9zdXBwb3J0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0RHJpdmVyU3VwcG9ydCh0cnVlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZXhlY3V0ZVR3b0NhbGxiYWNrcyhwcm9taXNlLCBjYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XG4gICAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICAgIH07XG4gICAgICAgIExvY2FsRm9yYWdlLnByb3RvdHlwZS5kcml2ZXIgPSBmdW5jdGlvbiBkcml2ZXIoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2RyaXZlciB8fCBudWxsO1xuICAgICAgICB9O1xuICAgICAgICBMb2NhbEZvcmFnZS5wcm90b3R5cGUuZ2V0RHJpdmVyID0gZnVuY3Rpb24gZ2V0RHJpdmVyKGRyaXZlck5hbWUsIGNhbGxiYWNrLCBlcnJvckNhbGxiYWNrKSB7XG4gICAgICAgICAgdmFyIGdldERyaXZlclByb21pc2UgPSBEZWZpbmVkRHJpdmVyc1tkcml2ZXJOYW1lXSA/IFByb21pc2UkMS5yZXNvbHZlKERlZmluZWREcml2ZXJzW2RyaXZlck5hbWVdKSA6IFByb21pc2UkMS5yZWplY3QobmV3IEVycm9yKCdEcml2ZXIgbm90IGZvdW5kLicpKTtcbiAgICAgICAgICBleGVjdXRlVHdvQ2FsbGJhY2tzKGdldERyaXZlclByb21pc2UsIGNhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcbiAgICAgICAgICByZXR1cm4gZ2V0RHJpdmVyUHJvbWlzZTtcbiAgICAgICAgfTtcbiAgICAgICAgTG9jYWxGb3JhZ2UucHJvdG90eXBlLmdldFNlcmlhbGl6ZXIgPSBmdW5jdGlvbiBnZXRTZXJpYWxpemVyKGNhbGxiYWNrKSB7XG4gICAgICAgICAgdmFyIHNlcmlhbGl6ZXJQcm9taXNlID0gUHJvbWlzZSQxLnJlc29sdmUobG9jYWxmb3JhZ2VTZXJpYWxpemVyKTtcbiAgICAgICAgICBleGVjdXRlVHdvQ2FsbGJhY2tzKHNlcmlhbGl6ZXJQcm9taXNlLCBjYWxsYmFjayk7XG4gICAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZXJQcm9taXNlO1xuICAgICAgICB9O1xuICAgICAgICBMb2NhbEZvcmFnZS5wcm90b3R5cGUucmVhZHkgPSBmdW5jdGlvbiByZWFkeShjYWxsYmFjaykge1xuICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICB2YXIgcHJvbWlzZSA9IHNlbGYuX2RyaXZlclNldC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLl9yZWFkeSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBzZWxmLl9yZWFkeSA9IHNlbGYuX2luaXREcml2ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzZWxmLl9yZWFkeTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBleGVjdXRlVHdvQ2FsbGJhY2tzKHByb21pc2UsIGNhbGxiYWNrLCBjYWxsYmFjayk7XG4gICAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICAgIH07XG4gICAgICAgIExvY2FsRm9yYWdlLnByb3RvdHlwZS5zZXREcml2ZXIgPSBmdW5jdGlvbiBzZXREcml2ZXIoZHJpdmVycywgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spIHtcbiAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgaWYgKCFpc0FycmF5KGRyaXZlcnMpKSB7XG4gICAgICAgICAgICBkcml2ZXJzID0gW2RyaXZlcnNdO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgc3VwcG9ydGVkRHJpdmVycyA9IHRoaXMuX2dldFN1cHBvcnRlZERyaXZlcnMoZHJpdmVycyk7XG4gICAgICAgICAgZnVuY3Rpb24gc2V0RHJpdmVyVG9Db25maWcoKSB7XG4gICAgICAgICAgICBzZWxmLl9jb25maWcuZHJpdmVyID0gc2VsZi5kcml2ZXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZnVuY3Rpb24gZXh0ZW5kU2VsZldpdGhEcml2ZXIoZHJpdmVyKSB7XG4gICAgICAgICAgICBzZWxmLl9leHRlbmQoZHJpdmVyKTtcbiAgICAgICAgICAgIHNldERyaXZlclRvQ29uZmlnKCk7XG4gICAgICAgICAgICBzZWxmLl9yZWFkeSA9IHNlbGYuX2luaXRTdG9yYWdlKHNlbGYuX2NvbmZpZyk7XG4gICAgICAgICAgICByZXR1cm4gc2VsZi5fcmVhZHk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZ1bmN0aW9uIGluaXREcml2ZXIoc3VwcG9ydGVkRHJpdmVycykge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgdmFyIGN1cnJlbnREcml2ZXJJbmRleCA9IDA7XG4gICAgICAgICAgICAgIGZ1bmN0aW9uIGRyaXZlclByb21pc2VMb29wKCkge1xuICAgICAgICAgICAgICAgIHdoaWxlIChjdXJyZW50RHJpdmVySW5kZXggPCBzdXBwb3J0ZWREcml2ZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgdmFyIGRyaXZlck5hbWUgPSBzdXBwb3J0ZWREcml2ZXJzW2N1cnJlbnREcml2ZXJJbmRleF07XG4gICAgICAgICAgICAgICAgICBjdXJyZW50RHJpdmVySW5kZXgrKztcbiAgICAgICAgICAgICAgICAgIHNlbGYuX2RiSW5mbyA9IG51bGw7XG4gICAgICAgICAgICAgICAgICBzZWxmLl9yZWFkeSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5nZXREcml2ZXIoZHJpdmVyTmFtZSkudGhlbihleHRlbmRTZWxmV2l0aERyaXZlcilbXCJjYXRjaFwiXShkcml2ZXJQcm9taXNlTG9vcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNldERyaXZlclRvQ29uZmlnKCk7XG4gICAgICAgICAgICAgICAgdmFyIGVycm9yID0gbmV3IEVycm9yKCdObyBhdmFpbGFibGUgc3RvcmFnZSBtZXRob2QgZm91bmQuJyk7XG4gICAgICAgICAgICAgICAgc2VsZi5fZHJpdmVyU2V0ID0gUHJvbWlzZSQxLnJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuX2RyaXZlclNldDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gZHJpdmVyUHJvbWlzZUxvb3AoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gVGhlcmUgbWlnaHQgYmUgYSBkcml2ZXIgaW5pdGlhbGl6YXRpb24gaW4gcHJvZ3Jlc3NcbiAgICAgICAgICAvLyBzbyB3YWl0IGZvciBpdCB0byBmaW5pc2ggaW4gb3JkZXIgdG8gYXZvaWQgYSBwb3NzaWJsZVxuICAgICAgICAgIC8vIHJhY2UgY29uZGl0aW9uIHRvIHNldCBfZGJJbmZvXG4gICAgICAgICAgdmFyIG9sZERyaXZlclNldERvbmUgPSB0aGlzLl9kcml2ZXJTZXQgIT09IG51bGwgPyB0aGlzLl9kcml2ZXJTZXRbXCJjYXRjaFwiXShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZSQxLnJlc29sdmUoKTtcbiAgICAgICAgICB9KSA6IFByb21pc2UkMS5yZXNvbHZlKCk7XG4gICAgICAgICAgdGhpcy5fZHJpdmVyU2V0ID0gb2xkRHJpdmVyU2V0RG9uZS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBkcml2ZXJOYW1lID0gc3VwcG9ydGVkRHJpdmVyc1swXTtcbiAgICAgICAgICAgIHNlbGYuX2RiSW5mbyA9IG51bGw7XG4gICAgICAgICAgICBzZWxmLl9yZWFkeSA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gc2VsZi5nZXREcml2ZXIoZHJpdmVyTmFtZSkudGhlbihmdW5jdGlvbiAoZHJpdmVyKSB7XG4gICAgICAgICAgICAgIHNlbGYuX2RyaXZlciA9IGRyaXZlci5fZHJpdmVyO1xuICAgICAgICAgICAgICBzZXREcml2ZXJUb0NvbmZpZygpO1xuICAgICAgICAgICAgICBzZWxmLl93cmFwTGlicmFyeU1ldGhvZHNXaXRoUmVhZHkoKTtcbiAgICAgICAgICAgICAgc2VsZi5faW5pdERyaXZlciA9IGluaXREcml2ZXIoc3VwcG9ydGVkRHJpdmVycyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KVtcImNhdGNoXCJdKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNldERyaXZlclRvQ29uZmlnKCk7XG4gICAgICAgICAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IoJ05vIGF2YWlsYWJsZSBzdG9yYWdlIG1ldGhvZCBmb3VuZC4nKTtcbiAgICAgICAgICAgIHNlbGYuX2RyaXZlclNldCA9IFByb21pc2UkMS5yZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIHNlbGYuX2RyaXZlclNldDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBleGVjdXRlVHdvQ2FsbGJhY2tzKHRoaXMuX2RyaXZlclNldCwgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xuICAgICAgICAgIHJldHVybiB0aGlzLl9kcml2ZXJTZXQ7XG4gICAgICAgIH07XG4gICAgICAgIExvY2FsRm9yYWdlLnByb3RvdHlwZS5zdXBwb3J0cyA9IGZ1bmN0aW9uIHN1cHBvcnRzKGRyaXZlck5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gISFEcml2ZXJTdXBwb3J0W2RyaXZlck5hbWVdO1xuICAgICAgICB9O1xuICAgICAgICBMb2NhbEZvcmFnZS5wcm90b3R5cGUuX2V4dGVuZCA9IGZ1bmN0aW9uIF9leHRlbmQobGlicmFyeU1ldGhvZHNBbmRQcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgZXh0ZW5kKHRoaXMsIGxpYnJhcnlNZXRob2RzQW5kUHJvcGVydGllcyk7XG4gICAgICAgIH07XG4gICAgICAgIExvY2FsRm9yYWdlLnByb3RvdHlwZS5fZ2V0U3VwcG9ydGVkRHJpdmVycyA9IGZ1bmN0aW9uIF9nZXRTdXBwb3J0ZWREcml2ZXJzKGRyaXZlcnMpIHtcbiAgICAgICAgICB2YXIgc3VwcG9ydGVkRHJpdmVycyA9IFtdO1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBkcml2ZXJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgZHJpdmVyTmFtZSA9IGRyaXZlcnNbaV07XG4gICAgICAgICAgICBpZiAodGhpcy5zdXBwb3J0cyhkcml2ZXJOYW1lKSkge1xuICAgICAgICAgICAgICBzdXBwb3J0ZWREcml2ZXJzLnB1c2goZHJpdmVyTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBzdXBwb3J0ZWREcml2ZXJzO1xuICAgICAgICB9O1xuICAgICAgICBMb2NhbEZvcmFnZS5wcm90b3R5cGUuX3dyYXBMaWJyYXJ5TWV0aG9kc1dpdGhSZWFkeSA9IGZ1bmN0aW9uIF93cmFwTGlicmFyeU1ldGhvZHNXaXRoUmVhZHkoKSB7XG4gICAgICAgICAgLy8gQWRkIGEgc3R1YiBmb3IgZWFjaCBkcml2ZXIgQVBJIG1ldGhvZCB0aGF0IGRlbGF5cyB0aGUgY2FsbCB0byB0aGVcbiAgICAgICAgICAvLyBjb3JyZXNwb25kaW5nIGRyaXZlciBtZXRob2QgdW50aWwgbG9jYWxGb3JhZ2UgaXMgcmVhZHkuIFRoZXNlIHN0dWJzXG4gICAgICAgICAgLy8gd2lsbCBiZSByZXBsYWNlZCBieSB0aGUgZHJpdmVyIG1ldGhvZHMgYXMgc29vbiBhcyB0aGUgZHJpdmVyIGlzXG4gICAgICAgICAgLy8gbG9hZGVkLCBzbyB0aGVyZSBpcyBubyBwZXJmb3JtYW5jZSBpbXBhY3QuXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IExpYnJhcnlNZXRob2RzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBjYWxsV2hlblJlYWR5KHRoaXMsIExpYnJhcnlNZXRob2RzW2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIExvY2FsRm9yYWdlLnByb3RvdHlwZS5jcmVhdGVJbnN0YW5jZSA9IGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKG9wdGlvbnMpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IExvY2FsRm9yYWdlKG9wdGlvbnMpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gTG9jYWxGb3JhZ2U7XG4gICAgICB9KCk7XG5cbiAgICAgIC8vIFRoZSBhY3R1YWwgbG9jYWxGb3JhZ2Ugb2JqZWN0IHRoYXQgd2UgZXhwb3NlIGFzIGEgbW9kdWxlIG9yIHZpYSBhXG4gICAgICAvLyBnbG9iYWwuIEl0J3MgZXh0ZW5kZWQgYnkgcHVsbGluZyBpbiBvbmUgb2Ygb3VyIG90aGVyIGxpYnJhcmllcy5cblxuICAgICAgdmFyIGxvY2FsZm9yYWdlX2pzID0gbmV3IExvY2FsRm9yYWdlKCk7XG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IGxvY2FsZm9yYWdlX2pzO1xuICAgIH0sIHtcbiAgICAgIFwiM1wiOiAzXG4gICAgfV1cbiAgfSwge30sIFs0XSkoNCk7XG59KTsiLCJpbXBvcnQgTG9jYWxGb3JhZ2UgZnJvbSAnbG9jYWxmb3JhZ2UnO1xuLyoqIEBoaWRkZW4gKi9cbmV4cG9ydCBjb25zdCBEcml2ZXJzID0ge1xuICBTZWN1cmVTdG9yYWdlOiAnaW9uaWNTZWN1cmVTdG9yYWdlJyxcbiAgSW5kZXhlZERCOiBMb2NhbEZvcmFnZS5JTkRFWEVEREIsXG4gIExvY2FsU3RvcmFnZTogTG9jYWxGb3JhZ2UuTE9DQUxTVE9SQUdFXG59O1xuY29uc3QgZGVmYXVsdENvbmZpZyA9IHtcbiAgbmFtZTogJ19pb25pY3N0b3JhZ2UnLFxuICBzdG9yZU5hbWU6ICdfaW9uaWNrdicsXG4gIGRiS2V5OiAnX2lvbmlja2V5JyxcbiAgZHJpdmVyT3JkZXI6IFtEcml2ZXJzLlNlY3VyZVN0b3JhZ2UsIERyaXZlcnMuSW5kZXhlZERCLCBEcml2ZXJzLkxvY2FsU3RvcmFnZV1cbn07XG5leHBvcnQgY2xhc3MgU3RvcmFnZSB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgU3RvcmFnZSBpbnN0YW5jZSB1c2luZyB0aGUgb3JkZXIgb2YgZHJpdmVycyBhbmQgYW55IGFkZGl0aW9uYWwgY29uZmlnXG4gICAqIG9wdGlvbnMgdG8gcGFzcyB0byBMb2NhbEZvcmFnZS5cbiAgICpcbiAgICogUG9zc2libGUgZGVmYXVsdCBkcml2ZXJPcmRlciBvcHRpb25zIGFyZTogWydpbmRleGVkZGInLCAnbG9jYWxzdG9yYWdlJ10gYW5kIHRoZVxuICAgKiBkZWZhdWx0IGlzIHRoYXQgZXhhY3Qgb3JkZXJpbmcuXG4gICAqXG4gICAqIFdoZW4gdXNpbmcgSW9uaWMgU2VjdXJlIFN0b3JhZ2UgKGVudGVycHJpc2Ugb25seSksIHVzZSBbJ2lvbmljU2VjdXJlU3RvcmFnZScsICdpbmRleGVkZGInLCAnbG9jYWxzdG9yYWdlJ10gdG8gZW5zdXJlXG4gICAqIFNlY3VyZSBTdG9yYWdlIGlzIHVzZWQgd2hlbiBhdmFpbGFibGUsIG9yIGZhbGwgYmFjayB0byBJbmRleGVkREIgb3IgTG9jYWxTdG9yYWdlIG9uIHRoZSB3ZWIuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb25maWcgPSBkZWZhdWx0Q29uZmlnKSB7XG4gICAgdGhpcy5fZGIgPSBudWxsO1xuICAgIHRoaXMuX3NlY3VyZVN0b3JhZ2VEcml2ZXIgPSBudWxsO1xuICAgIGNvbnN0IGFjdHVhbENvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRDb25maWcsIGNvbmZpZyB8fCB7fSk7XG4gICAgdGhpcy5fY29uZmlnID0gYWN0dWFsQ29uZmlnO1xuICB9XG4gIGFzeW5jIGNyZWF0ZSgpIHtcbiAgICBjb25zdCBkYiA9IExvY2FsRm9yYWdlLmNyZWF0ZUluc3RhbmNlKHRoaXMuX2NvbmZpZyk7XG4gICAgdGhpcy5fZGIgPSBkYjtcbiAgICBhd2FpdCBkYi5zZXREcml2ZXIodGhpcy5fY29uZmlnLmRyaXZlck9yZGVyIHx8IFtdKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKipcbiAgICogRGVmaW5lIGEgbmV3IERyaXZlci4gTXVzdCBiZSBjYWxsZWQgYmVmb3JlXG4gICAqIGluaXRpYWxpemluZyB0aGUgZGF0YWJhc2UuIEV4YW1wbGU6XG4gICAqXG4gICAqIGF3YWl0IHN0b3JhZ2UuZGVmaW5lRHJpdmVyKG15RHJpdmVyKTtcbiAgICogYXdhaXQgc3RvcmFnZS5jcmVhdGUoKTtcbiAgICovXG4gIGFzeW5jIGRlZmluZURyaXZlcihkcml2ZXIpIHtcbiAgICBpZiAoZHJpdmVyLl9kcml2ZXIgPT09IERyaXZlcnMuU2VjdXJlU3RvcmFnZSkge1xuICAgICAgdGhpcy5fc2VjdXJlU3RvcmFnZURyaXZlciA9IGRyaXZlcjtcbiAgICB9XG4gICAgcmV0dXJuIExvY2FsRm9yYWdlLmRlZmluZURyaXZlcihkcml2ZXIpO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgdGhlIG5hbWUgb2YgdGhlIGRyaXZlciBiZWluZyB1c2VkLlxuICAgKiBAcmV0dXJucyBOYW1lIG9mIHRoZSBkcml2ZXJcbiAgICovXG4gIGdldCBkcml2ZXIoKSB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiAoKF9hID0gdGhpcy5fZGIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5kcml2ZXIoKSkgfHwgbnVsbDtcbiAgfVxuICBhc3NlcnREYigpIHtcbiAgICBpZiAoIXRoaXMuX2RiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RhdGFiYXNlIG5vdCBjcmVhdGVkLiBNdXN0IGNhbGwgY3JlYXRlKCkgZmlyc3QnKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2RiO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgdGhlIHZhbHVlIGFzc29jaWF0ZWQgd2l0aCB0aGUgZ2l2ZW4ga2V5LlxuICAgKiBAcGFyYW0ga2V5IHRoZSBrZXkgdG8gaWRlbnRpZnkgdGhpcyB2YWx1ZVxuICAgKiBAcmV0dXJucyBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIHRoZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4ga2V5XG4gICAqL1xuICBnZXQoa2V5KSB7XG4gICAgY29uc3QgZGIgPSB0aGlzLmFzc2VydERiKCk7XG4gICAgcmV0dXJuIGRiLmdldEl0ZW0oa2V5KTtcbiAgfVxuICAvKipcbiAgICogU2V0IHRoZSB2YWx1ZSBmb3IgdGhlIGdpdmVuIGtleS5cbiAgICogQHBhcmFtIGtleSB0aGUga2V5IHRvIGlkZW50aWZ5IHRoaXMgdmFsdWVcbiAgICogQHBhcmFtIHZhbHVlIHRoZSB2YWx1ZSBmb3IgdGhpcyBrZXlcbiAgICogQHJldHVybnMgUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBrZXkgYW5kIHZhbHVlIGFyZSBzZXRcbiAgICovXG4gIHNldChrZXksIHZhbHVlKSB7XG4gICAgY29uc3QgZGIgPSB0aGlzLmFzc2VydERiKCk7XG4gICAgcmV0dXJuIGRiLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gIH1cbiAgLyoqXG4gICAqIFJlbW92ZSBhbnkgdmFsdWUgYXNzb2NpYXRlZCB3aXRoIHRoaXMga2V5LlxuICAgKiBAcGFyYW0ga2V5IHRoZSBrZXkgdG8gaWRlbnRpZnkgdGhpcyB2YWx1ZVxuICAgKiBAcmV0dXJucyBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHZhbHVlIGlzIHJlbW92ZWRcbiAgICovXG4gIHJlbW92ZShrZXkpIHtcbiAgICBjb25zdCBkYiA9IHRoaXMuYXNzZXJ0RGIoKTtcbiAgICByZXR1cm4gZGIucmVtb3ZlSXRlbShrZXkpO1xuICB9XG4gIC8qKlxuICAgKiBDbGVhciB0aGUgZW50aXJlIGtleSB2YWx1ZSBzdG9yZS4gV0FSTklORzogSE9UIVxuICAgKiBAcmV0dXJucyBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHN0b3JlIGlzIGNsZWFyZWRcbiAgICovXG4gIGNsZWFyKCkge1xuICAgIGNvbnN0IGRiID0gdGhpcy5hc3NlcnREYigpO1xuICAgIHJldHVybiBkYi5jbGVhcigpO1xuICB9XG4gIC8qKlxuICAgKiBAcmV0dXJucyBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIG51bWJlciBvZiBrZXlzIHN0b3JlZC5cbiAgICovXG4gIGxlbmd0aCgpIHtcbiAgICBjb25zdCBkYiA9IHRoaXMuYXNzZXJ0RGIoKTtcbiAgICByZXR1cm4gZGIubGVuZ3RoKCk7XG4gIH1cbiAgLyoqXG4gICAqIEByZXR1cm5zIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUga2V5cyBpbiB0aGUgc3RvcmUuXG4gICAqL1xuICBrZXlzKCkge1xuICAgIGNvbnN0IGRiID0gdGhpcy5hc3NlcnREYigpO1xuICAgIHJldHVybiBkYi5rZXlzKCk7XG4gIH1cbiAgLyoqXG4gICAqIEl0ZXJhdGUgdGhyb3VnaCBlYWNoIGtleSx2YWx1ZSBwYWlyLlxuICAgKiBAcGFyYW0gaXRlcmF0b3JDYWxsYmFjayBhIGNhbGxiYWNrIG9mIHRoZSBmb3JtICh2YWx1ZSwga2V5LCBpdGVyYXRpb25OdW1iZXIpXG4gICAqIEByZXR1cm5zIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgaXRlcmF0aW9uIGhhcyBmaW5pc2hlZC5cbiAgICovXG4gIGZvckVhY2goaXRlcmF0b3JDYWxsYmFjaykge1xuICAgIGNvbnN0IGRiID0gdGhpcy5hc3NlcnREYigpO1xuICAgIHJldHVybiBkYi5pdGVyYXRlKGl0ZXJhdG9yQ2FsbGJhY2spO1xuICB9XG4gIHNldEVuY3J5cHRpb25LZXkoa2V5KSB7XG4gICAgdmFyIF9hO1xuICAgIGlmICghdGhpcy5fc2VjdXJlU3RvcmFnZURyaXZlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdAaW9uaWMtZW50ZXJwcmlzZS9zZWN1cmUtc3RvcmFnZSBub3QgaW5zdGFsbGVkLiBFbmNyeXB0aW9uIHN1cHBvcnQgbm90IGF2YWlsYWJsZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAoX2EgPSB0aGlzLl9zZWN1cmVTdG9yYWdlRHJpdmVyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2V0RW5jcnlwdGlvbktleShrZXkpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgaXNQbGF0Zm9ybVNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgKiBhcyBpMCBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEluamVjdGlvblRva2VuLCBQTEFURk9STV9JRCwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICdAaW9uaWMvc3RvcmFnZSc7XG5leHBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UnO1xuY29uc3QgU3RvcmFnZUNvbmZpZ1Rva2VuID0gbmV3IEluamVjdGlvblRva2VuKCdTVE9SQUdFX0NPTkZJR19UT0tFTicpO1xuY2xhc3MgTm9vcFN0b3JhZ2UgZXh0ZW5kcyBTdG9yYWdlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuICBhc3luYyBjcmVhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgYXN5bmMgZGVmaW5lRHJpdmVyKCkge31cbiAgZ2V0IGRyaXZlcigpIHtcbiAgICByZXR1cm4gJ25vb3AnO1xuICB9XG4gIGFzeW5jIGdldChrZXkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBhc3luYyBzZXQoa2V5LCB2YWx1ZSkge31cbiAgYXN5bmMgcmVtb3ZlKGtleSkge31cbiAgYXN5bmMgY2xlYXIoKSB7fVxuICBhc3luYyBsZW5ndGgoKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgYXN5bmMga2V5cygpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXNcbiAgYXN5bmMgZm9yRWFjaChpdGVyYXRvckNhbGxiYWNrKSB7fVxuICBzZXRFbmNyeXB0aW9uS2V5KGtleSkge31cbn1cbmZ1bmN0aW9uIHByb3ZpZGVTdG9yYWdlKHBsYXRmb3JtSWQsIHN0b3JhZ2VDb25maWcpIHtcbiAgaWYgKGlzUGxhdGZvcm1TZXJ2ZXIocGxhdGZvcm1JZCkpIHtcbiAgICAvLyBXaGVuIHJ1bm5pbmcgaW4gYSBzZXJ2ZXIgY29udGV4dCByZXR1cm4gdGhlIE5vb3BTdG9yYWdlXG4gICAgcmV0dXJuIG5ldyBOb29wU3RvcmFnZSgpO1xuICB9XG4gIHJldHVybiBuZXcgU3RvcmFnZShzdG9yYWdlQ29uZmlnKTtcbn1cbmNsYXNzIElvbmljU3RvcmFnZU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KHN0b3JhZ2VDb25maWcgPSBudWxsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBJb25pY1N0b3JhZ2VNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFt7XG4gICAgICAgIHByb3ZpZGU6IFN0b3JhZ2VDb25maWdUb2tlbixcbiAgICAgICAgdXNlVmFsdWU6IHN0b3JhZ2VDb25maWdcbiAgICAgIH0sIHtcbiAgICAgICAgcHJvdmlkZTogU3RvcmFnZSxcbiAgICAgICAgdXNlRmFjdG9yeTogcHJvdmlkZVN0b3JhZ2UsXG4gICAgICAgIGRlcHM6IFtQTEFURk9STV9JRCwgU3RvcmFnZUNvbmZpZ1Rva2VuXVxuICAgICAgfV1cbiAgICB9O1xuICB9XG59XG5Jb25pY1N0b3JhZ2VNb2R1bGUuybVmYWMgPSBmdW5jdGlvbiBJb25pY1N0b3JhZ2VNb2R1bGVfRmFjdG9yeShfX25nRmFjdG9yeVR5cGVfXykge1xuICByZXR1cm4gbmV3IChfX25nRmFjdG9yeVR5cGVfXyB8fCBJb25pY1N0b3JhZ2VNb2R1bGUpKCk7XG59O1xuSW9uaWNTdG9yYWdlTW9kdWxlLsm1bW9kID0gLyogQF9fUFVSRV9fICovaTAuybXJtWRlZmluZU5nTW9kdWxlKHtcbiAgdHlwZTogSW9uaWNTdG9yYWdlTW9kdWxlXG59KTtcbklvbmljU3RvcmFnZU1vZHVsZS7JtWluaiA9IC8qIEBfX1BVUkVfXyAqL2kwLsm1ybVkZWZpbmVJbmplY3Rvcih7fSk7XG4oKCkgPT4ge1xuICAodHlwZW9mIG5nRGV2TW9kZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBuZ0Rldk1vZGUpICYmIGkwLsm1c2V0Q2xhc3NNZXRhZGF0YShJb25pY1N0b3JhZ2VNb2R1bGUsIFt7XG4gICAgdHlwZTogTmdNb2R1bGVcbiAgfV0sIG51bGwsIG51bGwpO1xufSkoKTtcblxuLyoqXG4gKiBHZW5lcmF0ZWQgYnVuZGxlIGluZGV4LiBEbyBub3QgZWRpdC5cbiAqL1xuXG5leHBvcnQgeyBJb25pY1N0b3JhZ2VNb2R1bGUsIFN0b3JhZ2VDb25maWdUb2tlbiwgcHJvdmlkZVN0b3JhZ2UgfTtcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlLWFuZ3VsYXInXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBTdG9yYWdlU2VydmljZSB7XG4gIHByaXZhdGUgX3N0b3JhZ2U6IFN0b3JhZ2UgfCBudWxsID0gbnVsbFxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmFnZTogU3RvcmFnZSkge31cblxuICBhc3luYyBpbml0KCkge1xuICAgIHRoaXMuX3N0b3JhZ2UgPSBhd2FpdCB0aGlzLnN0b3JhZ2UuY3JlYXRlKClcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBhd2FpdCB0aGlzLmluaXQoKVxuICAgIGF3YWl0IHRoaXMuX3N0b3JhZ2U/LnNldChrZXksIHZhbHVlKVxuICB9XG5cbiAgcHVibGljIGFzeW5jIGdldChrZXk6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgYXdhaXQgdGhpcy5pbml0KClcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5fc3RvcmFnZT8uZ2V0KGtleSlcbiAgfVxuICBwdWJsaWMgYXN5bmMgcmVtb3ZlKGtleTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgdGhpcy5pbml0KClcbiAgICBhd2FpdCB0aGlzLl9zdG9yYWdlPy5yZW1vdmUoa2V5KVxuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBTUEsS0FBQyxTQUFVLEdBQUc7QUFDWixVQUFJLE9BQU8sWUFBWSxZQUFZLE9BQU8sV0FBVyxhQUFhO0FBQ2hFLGVBQU8sVUFBVSxFQUFFO0FBQUEsTUFDckIsV0FBVyxPQUFPLFdBQVcsY0FBYyxPQUFPLEtBQUs7QUFDckQsZUFBTyxDQUFDLEdBQUcsQ0FBQztBQUFBLE1BQ2QsT0FBTztBQUNMLFlBQUk7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OUI7QUFxQkksWUFBTSxLQUFLLEtBQUk7QUFDZixhQUFPLE9BQU0sVUFBSyxhQUFMLG1CQUFlLElBQUk7SUFDbEM7O0VBQ2EsT0FBTyxLQUFXOztBQXhCakM7QUF5QkksWUFBTSxLQUFLLEtBQUk7QUFDZixhQUFNLFVBQUssYUFBTCxtQkFBZSxPQUFPO0lBQzlCOzs7O21DQXJCVyxpQkFBYyxtQkFBQSxPQUFBLENBQUE7QUFBQTttRkFBZCxpQkFBYyxTQUFkLGdCQUFjLFdBQUEsWUFGYixPQUFNLENBQUE7QUFFZCxJQUFPLGlCQUFQOztzRUFBTyxnQkFBYyxDQUFBO1VBSDFCO1dBQVc7TUFDVixZQUFZO0tBQ2I7OzsiLCJuYW1lcyI6WyJkZWZpbmUiLCJtb2R1bGUiLCJleHBvcnRzIiwibyIsImUiLCJuIiwiZ2xvYmFsIiwiUHJvbWlzZSIsInNlbGYiLCJpIiwia2V5IiwibGVuZ3RoIiwiaWRiIiwiZm9yYWdlIiwidmFsdWUiLCJlcnIiLCJrZXlzIiwiZGIiLCJ0IiwiZXJyb3IiLCJyZXNvbHZlIiwicmVqZWN0IiwiZGVmYXVsdENvbmZpZyIsInNhbWVWYWx1ZSIsImluY2x1ZGVzIiwiTG9jYWxGb3JhZ2UiLCJjb25maWd1cmVNaXNzaW5nTWV0aG9kcyIsIm1ldGhvZE5vdEltcGxlbWVudGVkRmFjdG9yeSIsInByb21pc2UiLCJzZXREcml2ZXJTdXBwb3J0Iiwic3VwcG9ydGVkRHJpdmVycyIsIkxvY2FsRm9yYWdlIl0sInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswLDEsMl19
