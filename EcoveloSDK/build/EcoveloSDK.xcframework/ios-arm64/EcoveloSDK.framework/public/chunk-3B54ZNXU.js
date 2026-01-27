import {
  Directory
} from "./chunk-NEYQRVBS.js";
import {
  f
} from "./chunk-OEYRANOA.js";
import {
  LoadingController
} from "./chunk-Y4K6NO5T.js";
import {
  FileUploadService
} from "./chunk-XK4I5MHM.js";
import {
  ErrorHandlerService,
  ToastService,
  ToastType
} from "./chunk-SARQRLZR.js";
import {
  Injectable,
  TranslateService,
  firstValueFrom,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-DGENMXJW.js";
import {
  CapacitorException,
  WebPlugin,
  registerPlugin
} from "./chunk-KGBWUDTS.js";
import {
  __async,
  __commonJS,
  __toESM
} from "./chunk-UESUV5PM.js";

// node_modules/compressorjs/dist/compressor.js
var require_compressor = __commonJS({
  "node_modules/compressorjs/dist/compressor.js"(exports, module) {
    "use strict";
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.Compressor = factory());
    })(exports, function() {
      "use strict";
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          })), keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread2(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
        return target;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
          writable: false
        });
        return Constructor;
      }
      function _defineProperty(obj, key, value) {
        key = _toPropertyKey(key);
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      function _extends() {
        _extends = Object.assign ? Object.assign.bind() : function(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };
        return _extends.apply(this, arguments);
      }
      function _toPrimitive(input, hint) {
        if (typeof input !== "object" || input === null) return input;
        var prim = input[Symbol.toPrimitive];
        if (prim !== void 0) {
          var res = prim.call(input, hint || "default");
          if (typeof res !== "object") return res;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (hint === "string" ? String : Number)(input);
      }
      function _toPropertyKey(arg) {
        var key = _toPrimitive(arg, "string");
        return typeof key === "symbol" ? key : String(key);
      }
      var canvasToBlob = {
        exports: {}
      };
      (function(module2) {
        if (typeof window === "undefined") {
          return;
        }
        (function(window2) {
          var CanvasPrototype = window2.HTMLCanvasElement && window2.HTMLCanvasElement.prototype;
          var hasBlobConstructor = window2.Blob && function() {
            try {
              return Boolean(new Blob());
            } catch (e) {
              return false;
            }
          }();
          var hasArrayBufferViewSupport = hasBlobConstructor && window2.Uint8Array && function() {
            try {
              return new Blob([new Uint8Array(100)]).size === 100;
            } catch (e) {
              return false;
            }
          }();
          var BlobBuilder = window2.BlobBuilder || window2.WebKitBlobBuilder || window2.MozBlobBuilder || window2.MSBlobBuilder;
          var dataURIPattern = /^data:((.*?)(;charset=.*?)?)(;base64)?,/;
          var dataURLtoBlob = (hasBlobConstructor || BlobBuilder) && window2.atob && window2.ArrayBuffer && window2.Uint8Array && function(dataURI) {
            var matches, mediaType, isBase64, dataString, byteString, arrayBuffer, intArray, i, bb;
            matches = dataURI.match(dataURIPattern);
            if (!matches) {
              throw new Error("invalid data URI");
            }
            mediaType = matches[2] ? matches[1] : "text/plain" + (matches[3] || ";charset=US-ASCII");
            isBase64 = !!matches[4];
            dataString = dataURI.slice(matches[0].length);
            if (isBase64) {
              byteString = atob(dataString);
            } else {
              byteString = decodeURIComponent(dataString);
            }
            arrayBuffer = new ArrayBuffer(byteString.length);
            intArray = new Uint8Array(arrayBuffer);
            for (i = 0; i < byteString.length; i += 1) {
              intArray[i] = byteString.charCodeAt(i);
            }
            if (hasBlobConstructor) {
              return new Blob([hasArrayBufferViewSupport ? intArray : arrayBuffer], {
                type: mediaType
              });
            }
            bb = new BlobBuilder();
            bb.append(arrayBuffer);
            return bb.getBlob(mediaType);
          };
          if (window2.HTMLCanvasElement && !CanvasPrototype.toBlob) {
            if (CanvasPrototype.mozGetAsFile) {
              CanvasPrototype.toBlob = function(callback, type, quality) {
                var self2 = this;
                setTimeout(function() {
                  if (quality && CanvasPrototype.toDataURL && dataURLtoBlob) {
                    callback(dataURLtoBlob(self2.toDataURL(type, quality)));
                  } else {
                    callback(self2.mozGetAsFile("blob", type));
                  }
                });
              };
            } else if (CanvasPrototype.toDataURL && dataURLtoBlob) {
              if (CanvasPrototype.msToBlob) {
                CanvasPrototype.toBlob = function(callback, type, quality) {
                  var self2 = this;
                  setTimeout(function() {
                    if ((type && type !== "image/png" || quality) && CanvasPrototype.toDataURL && dataURLtoBlob) {
                      callback(dataURLtoBlob(self2.toDataURL(type, quality)));
                    } else {
                      callback(self2.msToBlob(type));
                    }
                  });
                };
              } else {
                CanvasPrototype.toBlob = function(callback, type, quality) {
                  var self2 = this;
                  setTimeout(function() {
                    callback(dataURLtoBlob(self2.toDataURL(type, quality)));
                  });
                };
              }
            }
          }
          if (module2.exports) {
            module2.exports = dataURLtoBlob;
          } else {
            window2.dataURLtoBlob = dataURLtoBlob;
          }
        })(window);
      })(canvasToBlob);
      var toBlob = canvasToBlob.exports;
      var isBlob = function isBlob2(value) {
        if (typeof Blob === "undefined") {
          return false;
        }
        return value instanceof Blob || Object.prototype.toString.call(value) === "[object Blob]";
      };
      var DEFAULTS = {
        /**
         * Indicates if output the original image instead of the compressed one
         * when the size of the compressed image is greater than the original one's
         * @type {boolean}
         */
        strict: true,
        /**
         * Indicates if read the image's Exif Orientation information,
         * and then rotate or flip the image automatically.
         * @type {boolean}
         */
        checkOrientation: true,
        /**
         * Indicates if retain the image's Exif information after compressed.
         * @type {boolean}
        */
        retainExif: false,
        /**
         * The max width of the output image.
         * @type {number}
         */
        maxWidth: Infinity,
        /**
         * The max height of the output image.
         * @type {number}
         */
        maxHeight: Infinity,
        /**
         * The min width of the output image.
         * @type {number}
         */
        minWidth: 0,
        /**
         * The min height of the output image.
         * @type {number}
         */
        minHeight: 0,
        /**
         * The width of the output image.
         * If not specified, the natural width of the source image will be used.
         * @type {number}
         */
        width: void 0,
        /**
         * The height of the output image.
         * If not specified, the natural height of the source image will be used.
         * @type {number}
         */
        height: void 0,
        /**
         * Sets how the size of the image should be resized to the container
         * specified by the `width` and `height` options.
         * @type {string}
         */
        resize: "none",
        /**
         * The quality of the output image.
         * It must be a number between `0` and `1`,
         * and only available for `image/jpeg` and `image/webp` images.
         * Check out {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob canvas.toBlob}.
         * @type {number}
         */
        quality: 0.8,
        /**
         * The mime type of the output image.
         * By default, the original mime type of the source image file will be used.
         * @type {string}
         */
        mimeType: "auto",
        /**
         * Files whose file type is included in this list,
         * and whose file size exceeds the `convertSize` value will be converted to JPEGs.
         * @type {string｜Array}
         */
        convertTypes: ["image/png"],
        /**
         * PNG files over this size (5 MB by default) will be converted to JPEGs.
         * To disable this, just set the value to `Infinity`.
         * @type {number}
         */
        convertSize: 5e6,
        /**
         * The hook function to execute before draw the image into the canvas for compression.
         * @type {Function}
         * @param {CanvasRenderingContext2D} context - The 2d rendering context of the canvas.
         * @param {HTMLCanvasElement} canvas - The canvas for compression.
         * @example
         * function (context, canvas) {
         *   context.fillStyle = '#fff';
         * }
         */
        beforeDraw: null,
        /**
         * The hook function to execute after drew the image into the canvas for compression.
         * @type {Function}
         * @param {CanvasRenderingContext2D} context - The 2d rendering context of the canvas.
         * @param {HTMLCanvasElement} canvas - The canvas for compression.
         * @example
         * function (context, canvas) {
         *   context.filter = 'grayscale(100%)';
         * }
         */
        drew: null,
        /**
         * The hook function to execute when success to compress the image.
         * @type {Function}
         * @param {File} file - The compressed image File object.
         * @example
         * function (file) {
         *   console.log(file);
         * }
         */
        success: null,
        /**
         * The hook function to execute when fail to compress the image.
         * @type {Function}
         * @param {Error} err - An Error object.
         * @example
         * function (err) {
         *   console.log(err.message);
         * }
         */
        error: null
      };
      var IS_BROWSER = typeof window !== "undefined" && typeof window.document !== "undefined";
      var WINDOW = IS_BROWSER ? window : {};
      var isPositiveNumber = function isPositiveNumber2(value) {
        return value > 0 && value < Infinity;
      };
      var slice = Array.prototype.slice;
      function toArray(value) {
        return Array.from ? Array.from(value) : slice.call(value);
      }
      var REGEXP_IMAGE_TYPE = /^image\/.+$/;
      function isImageType(value) {
        return REGEXP_IMAGE_TYPE.test(value);
      }
      function imageTypeToExtension(value) {
        var extension = isImageType(value) ? value.substr(6) : "";
        if (extension === "jpeg") {
          extension = "jpg";
        }
        return ".".concat(extension);
      }
      var fromCharCode = String.fromCharCode;
      function getStringFromCharCode(dataView, start, length) {
        var str = "";
        var i;
        length += start;
        for (i = start; i < length; i += 1) {
          str += fromCharCode(dataView.getUint8(i));
        }
        return str;
      }
      var btoa = WINDOW.btoa;
      function arrayBufferToDataURL(arrayBuffer, mimeType) {
        var chunks = [];
        var chunkSize = 8192;
        var uint8 = new Uint8Array(arrayBuffer);
        while (uint8.length > 0) {
          chunks.push(fromCharCode.apply(null, toArray(uint8.subarray(0, chunkSize))));
          uint8 = uint8.subarray(chunkSize);
        }
        return "data:".concat(mimeType, ";base64,").concat(btoa(chunks.join("")));
      }
      function resetAndGetOrientation(arrayBuffer) {
        var dataView = new DataView(arrayBuffer);
        var orientation;
        try {
          var littleEndian;
          var app1Start;
          var ifdStart;
          if (dataView.getUint8(0) === 255 && dataView.getUint8(1) === 216) {
            var length = dataView.byteLength;
            var offset = 2;
            while (offset + 1 < length) {
              if (dataView.getUint8(offset) === 255 && dataView.getUint8(offset + 1) === 225) {
                app1Start = offset;
                break;
              }
              offset += 1;
            }
          }
          if (app1Start) {
            var exifIDCode = app1Start + 4;
            var tiffOffset = app1Start + 10;
            if (getStringFromCharCode(dataView, exifIDCode, 4) === "Exif") {
              var endianness = dataView.getUint16(tiffOffset);
              littleEndian = endianness === 18761;
              if (littleEndian || endianness === 19789) {
                if (dataView.getUint16(tiffOffset + 2, littleEndian) === 42) {
                  var firstIFDOffset = dataView.getUint32(tiffOffset + 4, littleEndian);
                  if (firstIFDOffset >= 8) {
                    ifdStart = tiffOffset + firstIFDOffset;
                  }
                }
              }
            }
          }
          if (ifdStart) {
            var _length = dataView.getUint16(ifdStart, littleEndian);
            var _offset;
            var i;
            for (i = 0; i < _length; i += 1) {
              _offset = ifdStart + i * 12 + 2;
              if (dataView.getUint16(_offset, littleEndian) === 274) {
                _offset += 8;
                orientation = dataView.getUint16(_offset, littleEndian);
                dataView.setUint16(_offset, 1, littleEndian);
                break;
              }
            }
          }
        } catch (e) {
          orientation = 1;
        }
        return orientation;
      }
      function parseOrientation(orientation) {
        var rotate = 0;
        var scaleX = 1;
        var scaleY = 1;
        switch (orientation) {
          // Flip horizontal
          case 2:
            scaleX = -1;
            break;
          // Rotate left 180°
          case 3:
            rotate = -180;
            break;
          // Flip vertical
          case 4:
            scaleY = -1;
            break;
          // Flip vertical and rotate right 90°
          case 5:
            rotate = 90;
            scaleY = -1;
            break;
          // Rotate right 90°
          case 6:
            rotate = 90;
            break;
          // Flip horizontal and rotate right 90°
          case 7:
            rotate = 90;
            scaleX = -1;
            break;
          // Rotate left 90°
          case 8:
            rotate = -90;
            break;
        }
        return {
          rotate,
          scaleX,
          scaleY
        };
      }
      var REGEXP_DECIMALS = /\.\d*(?:0|9){12}\d*$/;
      function normalizeDecimalNumber(value) {
        var times = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
        return REGEXP_DECIMALS.test(value) ? Math.round(value * times) / times : value;
      }
      function getAdjustedSizes(_ref) {
        var aspectRatio = _ref.aspectRatio, height = _ref.height, width = _ref.width;
        var type = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "none";
        var isValidWidth = isPositiveNumber(width);
        var isValidHeight = isPositiveNumber(height);
        if (isValidWidth && isValidHeight) {
          var adjustedWidth = height * aspectRatio;
          if ((type === "contain" || type === "none") && adjustedWidth > width || type === "cover" && adjustedWidth < width) {
            height = width / aspectRatio;
          } else {
            width = height * aspectRatio;
          }
        } else if (isValidWidth) {
          height = width / aspectRatio;
        } else if (isValidHeight) {
          width = height * aspectRatio;
        }
        return {
          width,
          height
        };
      }
      function getExif(arrayBuffer) {
        var array = toArray(new Uint8Array(arrayBuffer));
        var length = array.length;
        var segments = [];
        var start = 0;
        while (start + 3 < length) {
          var value = array[start];
          var next = array[start + 1];
          if (value === 255 && next === 218) {
            break;
          }
          if (value === 255 && next === 216) {
            start += 2;
          } else {
            var offset = array[start + 2] * 256 + array[start + 3];
            var end = start + offset + 2;
            var segment = array.slice(start, end);
            segments.push(segment);
            start = end;
          }
        }
        return segments.reduce(function(exifArray, current) {
          if (current[0] === 255 && current[1] === 225) {
            return exifArray.concat(current);
          }
          return exifArray;
        }, []);
      }
      function insertExif(arrayBuffer, exifArray) {
        var array = toArray(new Uint8Array(arrayBuffer));
        if (array[2] !== 255 || array[3] !== 224) {
          return arrayBuffer;
        }
        var app0Length = array[4] * 256 + array[5];
        var newArrayBuffer = [255, 216].concat(exifArray, array.slice(4 + app0Length));
        return new Uint8Array(newArrayBuffer);
      }
      var ArrayBuffer$1 = WINDOW.ArrayBuffer, FileReader2 = WINDOW.FileReader;
      var URL2 = WINDOW.URL || WINDOW.webkitURL;
      var REGEXP_EXTENSION = /\.\w+$/;
      var AnotherCompressor = WINDOW.Compressor;
      var Compressor2 = /* @__PURE__ */ function() {
        function Compressor3(file, options) {
          _classCallCheck(this, Compressor3);
          this.file = file;
          this.exif = [];
          this.image = new Image();
          this.options = _objectSpread2(_objectSpread2({}, DEFAULTS), options);
          this.aborted = false;
          this.result = null;
          this.init();
        }
        _createClass(Compressor3, [{
          key: "init",
          value: function init() {
            var _this = this;
            var file = this.file, options = this.options;
            if (!isBlob(file)) {
              this.fail(new Error("The first argument must be a File or Blob object."));
              return;
            }
            var mimeType = file.type;
            if (!isImageType(mimeType)) {
              this.fail(new Error("The first argument must be an image File or Blob object."));
              return;
            }
            if (!URL2 || !FileReader2) {
              this.fail(new Error("The current browser does not support image compression."));
              return;
            }
            if (!ArrayBuffer$1) {
              options.checkOrientation = false;
              options.retainExif = false;
            }
            var isJPEGImage = mimeType === "image/jpeg";
            var checkOrientation = isJPEGImage && options.checkOrientation;
            var retainExif = isJPEGImage && options.retainExif;
            if (URL2 && !checkOrientation && !retainExif) {
              this.load({
                url: URL2.createObjectURL(file)
              });
            } else {
              var reader = new FileReader2();
              this.reader = reader;
              reader.onload = function(_ref) {
                var target = _ref.target;
                var result = target.result;
                var data = {};
                var orientation = 1;
                if (checkOrientation) {
                  orientation = resetAndGetOrientation(result);
                  if (orientation > 1) {
                    _extends(data, parseOrientation(orientation));
                  }
                }
                if (retainExif) {
                  _this.exif = getExif(result);
                }
                if (checkOrientation || retainExif) {
                  if (!URL2 || orientation > 1) {
                    data.url = arrayBufferToDataURL(result, mimeType);
                  } else {
                    data.url = URL2.createObjectURL(file);
                  }
                } else {
                  data.url = result;
                }
                _this.load(data);
              };
              reader.onabort = function() {
                _this.fail(new Error("Aborted to read the image with FileReader."));
              };
              reader.onerror = function() {
                _this.fail(new Error("Failed to read the image with FileReader."));
              };
              reader.onloadend = function() {
                _this.reader = null;
              };
              if (checkOrientation || retainExif) {
                reader.readAsArrayBuffer(file);
              } else {
                reader.readAsDataURL(file);
              }
            }
          }
        }, {
          key: "load",
          value: function load(data) {
            var _this2 = this;
            var file = this.file, image = this.image;
            image.onload = function() {
              _this2.draw(_objectSpread2(_objectSpread2({}, data), {}, {
                naturalWidth: image.naturalWidth,
                naturalHeight: image.naturalHeight
              }));
            };
            image.onabort = function() {
              _this2.fail(new Error("Aborted to load the image."));
            };
            image.onerror = function() {
              _this2.fail(new Error("Failed to load the image."));
            };
            if (WINDOW.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(WINDOW.navigator.userAgent)) {
              image.crossOrigin = "anonymous";
            }
            image.alt = file.name;
            image.src = data.url;
          }
        }, {
          key: "draw",
          value: function draw(_ref2) {
            var _this3 = this;
            var naturalWidth = _ref2.naturalWidth, naturalHeight = _ref2.naturalHeight, _ref2$rotate = _ref2.rotate, rotate = _ref2$rotate === void 0 ? 0 : _ref2$rotate, _ref2$scaleX = _ref2.scaleX, scaleX = _ref2$scaleX === void 0 ? 1 : _ref2$scaleX, _ref2$scaleY = _ref2.scaleY, scaleY = _ref2$scaleY === void 0 ? 1 : _ref2$scaleY;
            var file = this.file, image = this.image, options = this.options;
            var canvas = document.createElement("canvas");
            var context = canvas.getContext("2d");
            var is90DegreesRotated = Math.abs(rotate) % 180 === 90;
            var resizable = (options.resize === "contain" || options.resize === "cover") && isPositiveNumber(options.width) && isPositiveNumber(options.height);
            var maxWidth = Math.max(options.maxWidth, 0) || Infinity;
            var maxHeight = Math.max(options.maxHeight, 0) || Infinity;
            var minWidth = Math.max(options.minWidth, 0) || 0;
            var minHeight = Math.max(options.minHeight, 0) || 0;
            var aspectRatio = naturalWidth / naturalHeight;
            var width = options.width, height = options.height;
            if (is90DegreesRotated) {
              var _ref3 = [maxHeight, maxWidth];
              maxWidth = _ref3[0];
              maxHeight = _ref3[1];
              var _ref4 = [minHeight, minWidth];
              minWidth = _ref4[0];
              minHeight = _ref4[1];
              var _ref5 = [height, width];
              width = _ref5[0];
              height = _ref5[1];
            }
            if (resizable) {
              aspectRatio = width / height;
            }
            var _getAdjustedSizes = getAdjustedSizes({
              aspectRatio,
              width: maxWidth,
              height: maxHeight
            }, "contain");
            maxWidth = _getAdjustedSizes.width;
            maxHeight = _getAdjustedSizes.height;
            var _getAdjustedSizes2 = getAdjustedSizes({
              aspectRatio,
              width: minWidth,
              height: minHeight
            }, "cover");
            minWidth = _getAdjustedSizes2.width;
            minHeight = _getAdjustedSizes2.height;
            if (resizable) {
              var _getAdjustedSizes3 = getAdjustedSizes({
                aspectRatio,
                width,
                height
              }, options.resize);
              width = _getAdjustedSizes3.width;
              height = _getAdjustedSizes3.height;
            } else {
              var _getAdjustedSizes4 = getAdjustedSizes({
                aspectRatio,
                width,
                height
              });
              var _getAdjustedSizes4$wi = _getAdjustedSizes4.width;
              width = _getAdjustedSizes4$wi === void 0 ? naturalWidth : _getAdjustedSizes4$wi;
              var _getAdjustedSizes4$he = _getAdjustedSizes4.height;
              height = _getAdjustedSizes4$he === void 0 ? naturalHeight : _getAdjustedSizes4$he;
            }
            width = Math.floor(normalizeDecimalNumber(Math.min(Math.max(width, minWidth), maxWidth)));
            height = Math.floor(normalizeDecimalNumber(Math.min(Math.max(height, minHeight), maxHeight)));
            var destX = -width / 2;
            var destY = -height / 2;
            var destWidth = width;
            var destHeight = height;
            var params = [];
            if (resizable) {
              var srcX = 0;
              var srcY = 0;
              var srcWidth = naturalWidth;
              var srcHeight = naturalHeight;
              var _getAdjustedSizes5 = getAdjustedSizes({
                aspectRatio,
                width: naturalWidth,
                height: naturalHeight
              }, {
                contain: "cover",
                cover: "contain"
              }[options.resize]);
              srcWidth = _getAdjustedSizes5.width;
              srcHeight = _getAdjustedSizes5.height;
              srcX = (naturalWidth - srcWidth) / 2;
              srcY = (naturalHeight - srcHeight) / 2;
              params.push(srcX, srcY, srcWidth, srcHeight);
            }
            params.push(destX, destY, destWidth, destHeight);
            if (is90DegreesRotated) {
              var _ref6 = [height, width];
              width = _ref6[0];
              height = _ref6[1];
            }
            canvas.width = width;
            canvas.height = height;
            if (!isImageType(options.mimeType)) {
              options.mimeType = file.type;
            }
            var fillStyle = "transparent";
            if (file.size > options.convertSize && options.convertTypes.indexOf(options.mimeType) >= 0) {
              options.mimeType = "image/jpeg";
            }
            var isJPEGImage = options.mimeType === "image/jpeg";
            if (isJPEGImage) {
              fillStyle = "#fff";
            }
            context.fillStyle = fillStyle;
            context.fillRect(0, 0, width, height);
            if (options.beforeDraw) {
              options.beforeDraw.call(this, context, canvas);
            }
            if (this.aborted) {
              return;
            }
            context.save();
            context.translate(width / 2, height / 2);
            context.rotate(rotate * Math.PI / 180);
            context.scale(scaleX, scaleY);
            context.drawImage.apply(context, [image].concat(params));
            context.restore();
            if (options.drew) {
              options.drew.call(this, context, canvas);
            }
            if (this.aborted) {
              return;
            }
            var callback = function callback2(blob) {
              if (!_this3.aborted) {
                var done = function done2(result) {
                  return _this3.done({
                    naturalWidth,
                    naturalHeight,
                    result
                  });
                };
                if (blob && isJPEGImage && options.retainExif && _this3.exif && _this3.exif.length > 0) {
                  var next = function next2(arrayBuffer) {
                    return done(toBlob(arrayBufferToDataURL(insertExif(arrayBuffer, _this3.exif), options.mimeType)));
                  };
                  if (blob.arrayBuffer) {
                    blob.arrayBuffer().then(next).catch(function() {
                      _this3.fail(new Error("Failed to read the compressed image with Blob.arrayBuffer()."));
                    });
                  } else {
                    var reader = new FileReader2();
                    _this3.reader = reader;
                    reader.onload = function(_ref7) {
                      var target = _ref7.target;
                      next(target.result);
                    };
                    reader.onabort = function() {
                      _this3.fail(new Error("Aborted to read the compressed image with FileReader."));
                    };
                    reader.onerror = function() {
                      _this3.fail(new Error("Failed to read the compressed image with FileReader."));
                    };
                    reader.onloadend = function() {
                      _this3.reader = null;
                    };
                    reader.readAsArrayBuffer(blob);
                  }
                } else {
                  done(blob);
                }
              }
            };
            if (canvas.toBlob) {
              canvas.toBlob(callback, options.mimeType, options.quality);
            } else {
              callback(toBlob(canvas.toDataURL(options.mimeType, options.quality)));
            }
          }
        }, {
          key: "done",
          value: function done(_ref8) {
            var naturalWidth = _ref8.naturalWidth, naturalHeight = _ref8.naturalHeight, result = _ref8.result;
            var file = this.file, image = this.image, options = this.options;
            if (URL2 && image.src.indexOf("blob:") === 0) {
              URL2.revokeObjectURL(image.src);
            }
            if (result) {
              if (options.strict && !options.retainExif && result.size > file.size && options.mimeType === file.type && !(options.width > naturalWidth || options.height > naturalHeight || options.minWidth > naturalWidth || options.minHeight > naturalHeight || options.maxWidth < naturalWidth || options.maxHeight < naturalHeight)) {
                result = file;
              } else {
                var date = /* @__PURE__ */ new Date();
                result.lastModified = date.getTime();
                result.lastModifiedDate = date;
                result.name = file.name;
                if (result.name && result.type !== file.type) {
                  result.name = result.name.replace(REGEXP_EXTENSION, imageTypeToExtension(result.type));
                }
              }
            } else {
              result = file;
            }
            this.result = result;
            if (options.success) {
              options.success.call(this, result);
            }
          }
        }, {
          key: "fail",
          value: function fail(err) {
            var options = this.options;
            if (options.error) {
              options.error.call(this, err);
            } else {
              throw err;
            }
          }
        }, {
          key: "abort",
          value: function abort() {
            if (!this.aborted) {
              this.aborted = true;
              if (this.reader) {
                this.reader.abort();
              } else if (!this.image.complete) {
                this.image.onload = null;
                this.image.onabort();
              } else {
                this.fail(new Error("The compression process has been aborted."));
              }
            }
          }
          /**
           * Get the no conflict compressor class.
           * @returns {Compressor} The compressor class.
           */
        }], [{
          key: "noConflict",
          value: function noConflict() {
            window.Compressor = AnotherCompressor;
            return Compressor3;
          }
          /**
           * Change the default options.
           * @param {Object} options - The new default options.
           */
        }, {
          key: "setDefaults",
          value: function setDefaults(options) {
            _extends(DEFAULTS, options);
          }
        }]);
        return Compressor3;
      }();
      return Compressor2;
    });
  }
});

// node_modules/@capacitor/camera/dist/esm/definitions.js
var CameraSource;
(function(CameraSource2) {
  CameraSource2["Prompt"] = "PROMPT";
  CameraSource2["Camera"] = "CAMERA";
  CameraSource2["Photos"] = "PHOTOS";
})(CameraSource || (CameraSource = {}));
var CameraDirection;
(function(CameraDirection2) {
  CameraDirection2["Rear"] = "REAR";
  CameraDirection2["Front"] = "FRONT";
})(CameraDirection || (CameraDirection = {}));
var CameraResultType;
(function(CameraResultType2) {
  CameraResultType2["Uri"] = "uri";
  CameraResultType2["Base64"] = "base64";
  CameraResultType2["DataUrl"] = "dataUrl";
})(CameraResultType || (CameraResultType = {}));

// node_modules/@capacitor/camera/dist/esm/web.js
var CameraWeb = class extends WebPlugin {
  getPhoto(options) {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => __async(this, null, function* () {
        if (options.webUseInput || options.source === CameraSource.Photos) {
          this.fileInputExperience(options, resolve, reject);
        } else if (options.source === CameraSource.Prompt) {
          let actionSheet = document.querySelector("pwa-action-sheet");
          if (!actionSheet) {
            actionSheet = document.createElement("pwa-action-sheet");
            document.body.appendChild(actionSheet);
          }
          actionSheet.header = options.promptLabelHeader || "Photo";
          actionSheet.cancelable = false;
          actionSheet.options = [{
            title: options.promptLabelPhoto || "From Photos"
          }, {
            title: options.promptLabelPicture || "Take Picture"
          }];
          actionSheet.addEventListener("onSelection", (e) => __async(this, null, function* () {
            const selection = e.detail;
            if (selection === 0) {
              this.fileInputExperience(options, resolve, reject);
            } else {
              this.cameraExperience(options, resolve, reject);
            }
          }));
        } else {
          this.cameraExperience(options, resolve, reject);
        }
      }));
    });
  }
  pickImages(_options) {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => __async(this, null, function* () {
        this.multipleFileInputExperience(resolve, reject);
      }));
    });
  }
  cameraExperience(options, resolve, reject) {
    return __async(this, null, function* () {
      if (customElements.get("pwa-camera-modal")) {
        const cameraModal = document.createElement("pwa-camera-modal");
        cameraModal.facingMode = options.direction === CameraDirection.Front ? "user" : "environment";
        document.body.appendChild(cameraModal);
        try {
          yield cameraModal.componentOnReady();
          cameraModal.addEventListener("onPhoto", (e) => __async(this, null, function* () {
            const photo = e.detail;
            if (photo === null) {
              reject(new CapacitorException("User cancelled photos app"));
            } else if (photo instanceof Error) {
              reject(photo);
            } else {
              resolve(yield this._getCameraPhoto(photo, options));
            }
            cameraModal.dismiss();
            document.body.removeChild(cameraModal);
          }));
          cameraModal.present();
        } catch (e) {
          this.fileInputExperience(options, resolve, reject);
        }
      } else {
        console.error(`Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/web/pwa-elements.`);
        this.fileInputExperience(options, resolve, reject);
      }
    });
  }
  fileInputExperience(options, resolve, reject) {
    let input = document.querySelector("#_capacitor-camera-input");
    const cleanup = () => {
      var _a;
      (_a = input.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(input);
    };
    if (!input) {
      input = document.createElement("input");
      input.id = "_capacitor-camera-input";
      input.type = "file";
      input.hidden = true;
      document.body.appendChild(input);
      input.addEventListener("change", (_e) => {
        const file = input.files[0];
        let format = "jpeg";
        if (file.type === "image/png") {
          format = "png";
        } else if (file.type === "image/gif") {
          format = "gif";
        }
        if (options.resultType === "dataUrl" || options.resultType === "base64") {
          const reader = new FileReader();
          reader.addEventListener("load", () => {
            if (options.resultType === "dataUrl") {
              resolve({
                dataUrl: reader.result,
                format
              });
            } else if (options.resultType === "base64") {
              const b64 = reader.result.split(",")[1];
              resolve({
                base64String: b64,
                format
              });
            }
            cleanup();
          });
          reader.readAsDataURL(file);
        } else {
          resolve({
            webPath: URL.createObjectURL(file),
            format
          });
          cleanup();
        }
      });
      input.addEventListener("cancel", (_e) => {
        reject(new CapacitorException("User cancelled photos app"));
        cleanup();
      });
    }
    input.accept = "image/*";
    input.capture = true;
    if (options.source === CameraSource.Photos || options.source === CameraSource.Prompt) {
      input.removeAttribute("capture");
    } else if (options.direction === CameraDirection.Front) {
      input.capture = "user";
    } else if (options.direction === CameraDirection.Rear) {
      input.capture = "environment";
    }
    input.click();
  }
  multipleFileInputExperience(resolve, reject) {
    let input = document.querySelector("#_capacitor-camera-input-multiple");
    const cleanup = () => {
      var _a;
      (_a = input.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(input);
    };
    if (!input) {
      input = document.createElement("input");
      input.id = "_capacitor-camera-input-multiple";
      input.type = "file";
      input.hidden = true;
      input.multiple = true;
      document.body.appendChild(input);
      input.addEventListener("change", (_e) => {
        const photos = [];
        for (let i = 0; i < input.files.length; i++) {
          const file = input.files[i];
          let format = "jpeg";
          if (file.type === "image/png") {
            format = "png";
          } else if (file.type === "image/gif") {
            format = "gif";
          }
          photos.push({
            webPath: URL.createObjectURL(file),
            format
          });
        }
        resolve({
          photos
        });
        cleanup();
      });
      input.addEventListener("cancel", (_e) => {
        reject(new CapacitorException("User cancelled photos app"));
        cleanup();
      });
    }
    input.accept = "image/*";
    input.click();
  }
  _getCameraPhoto(photo, options) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      const format = photo.type.split("/")[1];
      if (options.resultType === "uri") {
        resolve({
          webPath: URL.createObjectURL(photo),
          format,
          saved: false
        });
      } else {
        reader.readAsDataURL(photo);
        reader.onloadend = () => {
          const r = reader.result;
          if (options.resultType === "dataUrl") {
            resolve({
              dataUrl: r,
              format,
              saved: false
            });
          } else {
            resolve({
              base64String: r.split(",")[1],
              format,
              saved: false
            });
          }
        };
        reader.onerror = (e) => {
          reject(e);
        };
      }
    });
  }
  checkPermissions() {
    return __async(this, null, function* () {
      if (typeof navigator === "undefined" || !navigator.permissions) {
        throw this.unavailable("Permissions API not available in this browser");
      }
      try {
        const permission = yield window.navigator.permissions.query({
          name: "camera"
        });
        return {
          camera: permission.state,
          photos: "granted"
        };
      } catch (_a) {
        throw this.unavailable("Camera permissions are not available in this browser");
      }
    });
  }
  requestPermissions() {
    return __async(this, null, function* () {
      throw this.unimplemented("Not implemented on web.");
    });
  }
  pickLimitedLibraryPhotos() {
    return __async(this, null, function* () {
      throw this.unavailable("Not implemented on web.");
    });
  }
  getLimitedLibraryPhotos() {
    return __async(this, null, function* () {
      throw this.unavailable("Not implemented on web.");
    });
  }
};
var Camera = new CameraWeb();

// node_modules/@capacitor/camera/dist/esm/index.js
var Camera2 = registerPlugin("Camera", {
  web: () => new CameraWeb()
});

// node_modules/@capacitor/filesystem/dist/esm/index.js
var Filesystem = registerPlugin("Filesystem", {
  web: () => import("./web-MKPHZG2Y.js").then((m) => new m.FilesystemWeb())
});
f();

// src/app/services/utils/media.service.ts
var import_compressorjs = __toESM(require_compressor());
var _MediaService = class _MediaService {
  constructor(uploadService, loadingController, toastService, translateService, errorHandler) {
    this.uploadService = uploadService;
    this.loadingController = loadingController;
    this.toastService = toastService;
    this.translateService = translateService;
    this.errorHandler = errorHandler;
  }
  // Photo specific methods
  capturePhoto() {
    return __async(this, null, function* () {
      return yield Camera2.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        direction: CameraDirection.Rear,
        saveToGallery: true,
        quality: 100
      });
    });
  }
  captureAndProcessPhoto() {
    return __async(this, null, function* () {
      const capturedPhoto = yield this.capturePhoto();
      const response = yield fetch(capturedPhoto.webPath);
      const originalBlob = yield response.blob();
      const compressedBlob = yield this.compressFile(originalBlob);
      if (!compressedBlob) {
        throw new Error("File compression failed");
      }
      return { photo: capturedPhoto, blob: compressedBlob };
    });
  }
  // File specific methods
  selectAndProcessFile() {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = "image/*,application/pdf";
        fileInput.onchange = (e) => __async(this, null, function* () {
          const file = e.target.files[0];
          if (!file) {
            this.toastService.createWithJustMessage(this.translateService.instant("media.error.no_file_selected"), ToastType.Error);
            reject(new Error("No file selected"));
            return;
          }
          try {
            const compressedBlob = yield this.compressFile(file);
            if (!compressedBlob) {
              reject(new Error("File size error"));
              return;
            }
            const reader = new FileReader();
            reader.onload = (e2) => __async(this, null, function* () {
              var _a;
              const base64Data = ((_a = e2.target) == null ? void 0 : _a.result).split(",")[1];
              const fileName = `file_${(/* @__PURE__ */ new Date()).getTime()}.${file.name.split(".").pop()}`;
              yield Filesystem.writeFile({
                path: fileName,
                data: base64Data,
                directory: Directory.Data
              });
              const { uri } = yield Filesystem.getUri({
                path: fileName,
                directory: Directory.Data
              });
              resolve({
                uri,
                blob: compressedBlob
              });
            });
            reader.onerror = () => reject(new Error("Erreur de lecture du fichier"));
            reader.readAsDataURL(compressedBlob);
          } catch (error) {
            this.errorHandler.handleError(error);
            reject(error);
          }
        });
        fileInput.click();
      });
    });
  }
  // Shared methods
  uploadMedia(blob) {
    return __async(this, null, function* () {
      var _a;
      const loading = yield this.loadingController.create({
        message: this.translateService.instant("media.uploading")
      });
      yield loading.present();
      const base64String = yield this.blobToBase64(blob);
      try {
        const uploadResult = yield firstValueFrom(this.uploadService.filesUpload({ body: { content: base64String } }));
        yield loading.dismiss();
        return (_a = uploadResult.url) != null ? _a : "";
      } catch (error) {
        yield loading.dismiss();
        this.errorHandler.handleError(error);
        throw error;
      }
    });
  }
  blobToBase64(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        resolve(base64String.split(",")[1]);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }
  compressFile(file) {
    return __async(this, null, function* () {
      if (file.type === "application/pdf") {
        if (file.size > 59e5) {
          this.toastService.createWithJustMessage(this.translateService.instant("media.error.file_too_large"), ToastType.Error);
          return void 0;
        }
        return file;
      }
      return new Promise((resolve, reject) => {
        new import_compressorjs.default(file, {
          quality: 0.8,
          maxWidth: 2e3,
          maxHeight: 2e3,
          success: (compressedFile) => {
            if (compressedFile.size > 6 * 1024 * 1024) {
              this.toastService.createWithJustMessage(this.translateService.instant("media.error.file_too_large"), ToastType.Error);
              resolve(void 0);
              return;
            }
            resolve(compressedFile);
          },
          error: (err) => {
            this.errorHandler.handleError(err);
            reject(err);
          }
        });
      });
    });
  }
};
_MediaService.\u0275fac = function MediaService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MediaService)(\u0275\u0275inject(FileUploadService), \u0275\u0275inject(LoadingController), \u0275\u0275inject(ToastService), \u0275\u0275inject(TranslateService), \u0275\u0275inject(ErrorHandlerService));
};
_MediaService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MediaService, factory: _MediaService.\u0275fac, providedIn: "root" });
var MediaService = _MediaService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MediaService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: FileUploadService }, { type: LoadingController }, { type: ToastService }, { type: TranslateService }, { type: ErrorHandlerService }], null);
})();

export {
  MediaService
};
/*! Bundled license information:

compressorjs/dist/compressor.js:
  (*!
   * Compressor.js v1.2.1
   * https://fengyuanchen.github.io/compressorjs
   *
   * Copyright 2018-present Chen Fengyuan
   * Released under the MIT license
   *
   * Date: 2023-02-28T14:09:41.732Z
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9jb21wcmVzc29yanMvZGlzdC9jb21wcmVzc29yLmpzIiwibm9kZV9tb2R1bGVzL0BjYXBhY2l0b3IvY2FtZXJhL2Rpc3QvZXNtL2RlZmluaXRpb25zLmpzIiwibm9kZV9tb2R1bGVzL0BjYXBhY2l0b3IvY2FtZXJhL2Rpc3QvZXNtL3dlYi5qcyIsIm5vZGVfbW9kdWxlcy9AY2FwYWNpdG9yL2NhbWVyYS9kaXN0L2VzbS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9AY2FwYWNpdG9yL2ZpbGVzeXN0ZW0vZGlzdC9lc20vaW5kZXguanMiLCJzcmMvYXBwL3NlcnZpY2VzL3V0aWxzL21lZGlhLnNlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBDb21wcmVzc29yLmpzIHYxLjIuMVxuICogaHR0cHM6Ly9mZW5neXVhbmNoZW4uZ2l0aHViLmlvL2NvbXByZXNzb3Jqc1xuICpcbiAqIENvcHlyaWdodCAyMDE4LXByZXNlbnQgQ2hlbiBGZW5neXVhblxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKlxuICogRGF0ZTogMjAyMy0wMi0yOFQxNDowOTo0MS43MzJaXG4gKi9cblxuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOiB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOiAoZ2xvYmFsID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsVGhpcyA6IGdsb2JhbCB8fCBzZWxmLCBnbG9iYWwuQ29tcHJlc3NvciA9IGZhY3RvcnkoKSk7XG59KSh0aGlzLCBmdW5jdGlvbiAoKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBmdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG4gICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgIHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpO1xuICAgICAgZW51bWVyYWJsZU9ubHkgJiYgKHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7XG4gICAgfVxuICAgIHJldHVybiBrZXlzO1xuICB9XG4gIGZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gbnVsbCAhPSBhcmd1bWVudHNbaV0gPyBhcmd1bWVudHNbaV0gOiB7fTtcbiAgICAgIGkgJSAyID8gb3duS2V5cyhPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgIH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpIDogb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cbiAgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICAgIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBfdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgfSk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9XG4gIGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBrZXkgPSBfdG9Qcm9wZXJ0eUtleShrZXkpO1xuICAgIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuICBmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gPyBPYmplY3QuYXNzaWduLmJpbmQoKSA6IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfTtcbiAgICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuICBmdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHtcbiAgICBpZiAodHlwZW9mIGlucHV0ICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7XG4gICAgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdO1xuICAgIGlmIChwcmltICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpO1xuICAgICAgaWYgKHR5cGVvZiByZXMgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gICAgfVxuICAgIHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpO1xuICB9XG4gIGZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykge1xuICAgIHZhciBrZXkgPSBfdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTtcbiAgICByZXR1cm4gdHlwZW9mIGtleSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpO1xuICB9XG4gIHZhciBjYW52YXNUb0Jsb2IgPSB7XG4gICAgZXhwb3J0czoge31cbiAgfTtcblxuICAvKlxuICAgKiBKYXZhU2NyaXB0IENhbnZhcyB0byBCbG9iXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ibHVlaW1wL0phdmFTY3JpcHQtQ2FudmFzLXRvLUJsb2JcbiAgICpcbiAgICogQ29weXJpZ2h0IDIwMTIsIFNlYmFzdGlhbiBUc2NoYW5cbiAgICogaHR0cHM6Ly9ibHVlaW1wLm5ldFxuICAgKlxuICAgKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2U6XG4gICAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gICAqXG4gICAqIEJhc2VkIG9uIHN0YWNrb3ZlcmZsb3cgdXNlciBTdG9pdmUncyBjb2RlIHNuaXBwZXQ6XG4gICAqIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xLzQ5OTg5MDhcbiAgICovXG4gIChmdW5jdGlvbiAobW9kdWxlKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIChmdW5jdGlvbiAod2luZG93KSB7XG4gICAgICB2YXIgQ2FudmFzUHJvdG90eXBlID0gd2luZG93LkhUTUxDYW52YXNFbGVtZW50ICYmIHdpbmRvdy5IVE1MQ2FudmFzRWxlbWVudC5wcm90b3R5cGU7XG4gICAgICB2YXIgaGFzQmxvYkNvbnN0cnVjdG9yID0gd2luZG93LkJsb2IgJiYgZnVuY3Rpb24gKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBCb29sZWFuKG5ldyBCbG9iKCkpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KCk7XG4gICAgICB2YXIgaGFzQXJyYXlCdWZmZXJWaWV3U3VwcG9ydCA9IGhhc0Jsb2JDb25zdHJ1Y3RvciAmJiB3aW5kb3cuVWludDhBcnJheSAmJiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBCbG9iKFtuZXcgVWludDhBcnJheSgxMDApXSkuc2l6ZSA9PT0gMTAwO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KCk7XG4gICAgICB2YXIgQmxvYkJ1aWxkZXIgPSB3aW5kb3cuQmxvYkJ1aWxkZXIgfHwgd2luZG93LldlYktpdEJsb2JCdWlsZGVyIHx8IHdpbmRvdy5Nb3pCbG9iQnVpbGRlciB8fCB3aW5kb3cuTVNCbG9iQnVpbGRlcjtcbiAgICAgIHZhciBkYXRhVVJJUGF0dGVybiA9IC9eZGF0YTooKC4qPykoO2NoYXJzZXQ9Lio/KT8pKDtiYXNlNjQpPywvO1xuICAgICAgdmFyIGRhdGFVUkx0b0Jsb2IgPSAoaGFzQmxvYkNvbnN0cnVjdG9yIHx8IEJsb2JCdWlsZGVyKSAmJiB3aW5kb3cuYXRvYiAmJiB3aW5kb3cuQXJyYXlCdWZmZXIgJiYgd2luZG93LlVpbnQ4QXJyYXkgJiYgZnVuY3Rpb24gKGRhdGFVUkkpIHtcbiAgICAgICAgdmFyIG1hdGNoZXMsIG1lZGlhVHlwZSwgaXNCYXNlNjQsIGRhdGFTdHJpbmcsIGJ5dGVTdHJpbmcsIGFycmF5QnVmZmVyLCBpbnRBcnJheSwgaSwgYmI7XG4gICAgICAgIC8vIFBhcnNlIHRoZSBkYXRhVVJJIGNvbXBvbmVudHMgYXMgcGVyIFJGQyAyMzk3XG4gICAgICAgIG1hdGNoZXMgPSBkYXRhVVJJLm1hdGNoKGRhdGFVUklQYXR0ZXJuKTtcbiAgICAgICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGRhdGEgVVJJJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRGVmYXVsdCB0byB0ZXh0L3BsYWluO2NoYXJzZXQ9VVMtQVNDSUlcbiAgICAgICAgbWVkaWFUeXBlID0gbWF0Y2hlc1syXSA/IG1hdGNoZXNbMV0gOiAndGV4dC9wbGFpbicgKyAobWF0Y2hlc1szXSB8fCAnO2NoYXJzZXQ9VVMtQVNDSUknKTtcbiAgICAgICAgaXNCYXNlNjQgPSAhIW1hdGNoZXNbNF07XG4gICAgICAgIGRhdGFTdHJpbmcgPSBkYXRhVVJJLnNsaWNlKG1hdGNoZXNbMF0ubGVuZ3RoKTtcbiAgICAgICAgaWYgKGlzQmFzZTY0KSB7XG4gICAgICAgICAgLy8gQ29udmVydCBiYXNlNjQgdG8gcmF3IGJpbmFyeSBkYXRhIGhlbGQgaW4gYSBzdHJpbmc6XG4gICAgICAgICAgYnl0ZVN0cmluZyA9IGF0b2IoZGF0YVN0cmluZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gQ29udmVydCBiYXNlNjQvVVJMRW5jb2RlZCBkYXRhIGNvbXBvbmVudCB0byByYXcgYmluYXJ5OlxuICAgICAgICAgIGJ5dGVTdHJpbmcgPSBkZWNvZGVVUklDb21wb25lbnQoZGF0YVN0cmluZyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gV3JpdGUgdGhlIGJ5dGVzIG9mIHRoZSBzdHJpbmcgdG8gYW4gQXJyYXlCdWZmZXI6XG4gICAgICAgIGFycmF5QnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKGJ5dGVTdHJpbmcubGVuZ3RoKTtcbiAgICAgICAgaW50QXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcik7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBieXRlU3RyaW5nLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgaW50QXJyYXlbaV0gPSBieXRlU3RyaW5nLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gV3JpdGUgdGhlIEFycmF5QnVmZmVyIChvciBBcnJheUJ1ZmZlclZpZXcpIHRvIGEgYmxvYjpcbiAgICAgICAgaWYgKGhhc0Jsb2JDb25zdHJ1Y3Rvcikge1xuICAgICAgICAgIHJldHVybiBuZXcgQmxvYihbaGFzQXJyYXlCdWZmZXJWaWV3U3VwcG9ydCA/IGludEFycmF5IDogYXJyYXlCdWZmZXJdLCB7XG4gICAgICAgICAgICB0eXBlOiBtZWRpYVR5cGVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBiYiA9IG5ldyBCbG9iQnVpbGRlcigpO1xuICAgICAgICBiYi5hcHBlbmQoYXJyYXlCdWZmZXIpO1xuICAgICAgICByZXR1cm4gYmIuZ2V0QmxvYihtZWRpYVR5cGUpO1xuICAgICAgfTtcbiAgICAgIGlmICh3aW5kb3cuSFRNTENhbnZhc0VsZW1lbnQgJiYgIUNhbnZhc1Byb3RvdHlwZS50b0Jsb2IpIHtcbiAgICAgICAgaWYgKENhbnZhc1Byb3RvdHlwZS5tb3pHZXRBc0ZpbGUpIHtcbiAgICAgICAgICBDYW52YXNQcm90b3R5cGUudG9CbG9iID0gZnVuY3Rpb24gKGNhbGxiYWNrLCB0eXBlLCBxdWFsaXR5KSB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgaWYgKHF1YWxpdHkgJiYgQ2FudmFzUHJvdG90eXBlLnRvRGF0YVVSTCAmJiBkYXRhVVJMdG9CbG9iKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YVVSTHRvQmxvYihzZWxmLnRvRGF0YVVSTCh0eXBlLCBxdWFsaXR5KSkpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHNlbGYubW96R2V0QXNGaWxlKCdibG9iJywgdHlwZSkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKENhbnZhc1Byb3RvdHlwZS50b0RhdGFVUkwgJiYgZGF0YVVSTHRvQmxvYikge1xuICAgICAgICAgIGlmIChDYW52YXNQcm90b3R5cGUubXNUb0Jsb2IpIHtcbiAgICAgICAgICAgIENhbnZhc1Byb3RvdHlwZS50b0Jsb2IgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIHR5cGUsIHF1YWxpdHkpIHtcbiAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoKHR5cGUgJiYgdHlwZSAhPT0gJ2ltYWdlL3BuZycgfHwgcXVhbGl0eSkgJiYgQ2FudmFzUHJvdG90eXBlLnRvRGF0YVVSTCAmJiBkYXRhVVJMdG9CbG9iKSB7XG4gICAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhVVJMdG9CbG9iKHNlbGYudG9EYXRhVVJMKHR5cGUsIHF1YWxpdHkpKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHNlbGYubXNUb0Jsb2IodHlwZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBDYW52YXNQcm90b3R5cGUudG9CbG9iID0gZnVuY3Rpb24gKGNhbGxiYWNrLCB0eXBlLCBxdWFsaXR5KSB7XG4gICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YVVSTHRvQmxvYihzZWxmLnRvRGF0YVVSTCh0eXBlLCBxdWFsaXR5KSkpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBkYXRhVVJMdG9CbG9iO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmRhdGFVUkx0b0Jsb2IgPSBkYXRhVVJMdG9CbG9iO1xuICAgICAgfVxuICAgIH0pKHdpbmRvdyk7XG4gIH0pKGNhbnZhc1RvQmxvYik7XG4gIHZhciB0b0Jsb2IgPSBjYW52YXNUb0Jsb2IuZXhwb3J0cztcbiAgdmFyIGlzQmxvYiA9IGZ1bmN0aW9uIGlzQmxvYih2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgQmxvYiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgQmxvYiB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBCbG9iXSc7XG4gIH07XG4gIHZhciBERUZBVUxUUyA9IHtcbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgaWYgb3V0cHV0IHRoZSBvcmlnaW5hbCBpbWFnZSBpbnN0ZWFkIG9mIHRoZSBjb21wcmVzc2VkIG9uZVxuICAgICAqIHdoZW4gdGhlIHNpemUgb2YgdGhlIGNvbXByZXNzZWQgaW1hZ2UgaXMgZ3JlYXRlciB0aGFuIHRoZSBvcmlnaW5hbCBvbmUnc1xuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHN0cmljdDogdHJ1ZSxcbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgaWYgcmVhZCB0aGUgaW1hZ2UncyBFeGlmIE9yaWVudGF0aW9uIGluZm9ybWF0aW9uLFxuICAgICAqIGFuZCB0aGVuIHJvdGF0ZSBvciBmbGlwIHRoZSBpbWFnZSBhdXRvbWF0aWNhbGx5LlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIGNoZWNrT3JpZW50YXRpb246IHRydWUsXG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIGlmIHJldGFpbiB0aGUgaW1hZ2UncyBFeGlmIGluZm9ybWF0aW9uIGFmdGVyIGNvbXByZXNzZWQuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgKi9cbiAgICByZXRhaW5FeGlmOiBmYWxzZSxcbiAgICAvKipcbiAgICAgKiBUaGUgbWF4IHdpZHRoIG9mIHRoZSBvdXRwdXQgaW1hZ2UuXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBtYXhXaWR0aDogSW5maW5pdHksXG4gICAgLyoqXG4gICAgICogVGhlIG1heCBoZWlnaHQgb2YgdGhlIG91dHB1dCBpbWFnZS5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIG1heEhlaWdodDogSW5maW5pdHksXG4gICAgLyoqXG4gICAgICogVGhlIG1pbiB3aWR0aCBvZiB0aGUgb3V0cHV0IGltYWdlLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgbWluV2lkdGg6IDAsXG4gICAgLyoqXG4gICAgICogVGhlIG1pbiBoZWlnaHQgb2YgdGhlIG91dHB1dCBpbWFnZS5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIG1pbkhlaWdodDogMCxcbiAgICAvKipcbiAgICAgKiBUaGUgd2lkdGggb2YgdGhlIG91dHB1dCBpbWFnZS5cbiAgICAgKiBJZiBub3Qgc3BlY2lmaWVkLCB0aGUgbmF0dXJhbCB3aWR0aCBvZiB0aGUgc291cmNlIGltYWdlIHdpbGwgYmUgdXNlZC5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHdpZHRoOiB1bmRlZmluZWQsXG4gICAgLyoqXG4gICAgICogVGhlIGhlaWdodCBvZiB0aGUgb3V0cHV0IGltYWdlLlxuICAgICAqIElmIG5vdCBzcGVjaWZpZWQsIHRoZSBuYXR1cmFsIGhlaWdodCBvZiB0aGUgc291cmNlIGltYWdlIHdpbGwgYmUgdXNlZC5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIGhlaWdodDogdW5kZWZpbmVkLFxuICAgIC8qKlxuICAgICAqIFNldHMgaG93IHRoZSBzaXplIG9mIHRoZSBpbWFnZSBzaG91bGQgYmUgcmVzaXplZCB0byB0aGUgY29udGFpbmVyXG4gICAgICogc3BlY2lmaWVkIGJ5IHRoZSBgd2lkdGhgIGFuZCBgaGVpZ2h0YCBvcHRpb25zLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgcmVzaXplOiAnbm9uZScsXG4gICAgLyoqXG4gICAgICogVGhlIHF1YWxpdHkgb2YgdGhlIG91dHB1dCBpbWFnZS5cbiAgICAgKiBJdCBtdXN0IGJlIGEgbnVtYmVyIGJldHdlZW4gYDBgIGFuZCBgMWAsXG4gICAgICogYW5kIG9ubHkgYXZhaWxhYmxlIGZvciBgaW1hZ2UvanBlZ2AgYW5kIGBpbWFnZS93ZWJwYCBpbWFnZXMuXG4gICAgICogQ2hlY2sgb3V0IHtAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSFRNTENhbnZhc0VsZW1lbnQvdG9CbG9iIGNhbnZhcy50b0Jsb2J9LlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgcXVhbGl0eTogMC44LFxuICAgIC8qKlxuICAgICAqIFRoZSBtaW1lIHR5cGUgb2YgdGhlIG91dHB1dCBpbWFnZS5cbiAgICAgKiBCeSBkZWZhdWx0LCB0aGUgb3JpZ2luYWwgbWltZSB0eXBlIG9mIHRoZSBzb3VyY2UgaW1hZ2UgZmlsZSB3aWxsIGJlIHVzZWQuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICBtaW1lVHlwZTogJ2F1dG8nLFxuICAgIC8qKlxuICAgICAqIEZpbGVzIHdob3NlIGZpbGUgdHlwZSBpcyBpbmNsdWRlZCBpbiB0aGlzIGxpc3QsXG4gICAgICogYW5kIHdob3NlIGZpbGUgc2l6ZSBleGNlZWRzIHRoZSBgY29udmVydFNpemVgIHZhbHVlIHdpbGwgYmUgY29udmVydGVkIHRvIEpQRUdzLlxuICAgICAqIEB0eXBlIHtzdHJpbmfvvZxBcnJheX1cbiAgICAgKi9cbiAgICBjb252ZXJ0VHlwZXM6IFsnaW1hZ2UvcG5nJ10sXG4gICAgLyoqXG4gICAgICogUE5HIGZpbGVzIG92ZXIgdGhpcyBzaXplICg1IE1CIGJ5IGRlZmF1bHQpIHdpbGwgYmUgY29udmVydGVkIHRvIEpQRUdzLlxuICAgICAqIFRvIGRpc2FibGUgdGhpcywganVzdCBzZXQgdGhlIHZhbHVlIHRvIGBJbmZpbml0eWAuXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICBjb252ZXJ0U2l6ZTogNTAwMDAwMCxcbiAgICAvKipcbiAgICAgKiBUaGUgaG9vayBmdW5jdGlvbiB0byBleGVjdXRlIGJlZm9yZSBkcmF3IHRoZSBpbWFnZSBpbnRvIHRoZSBjYW52YXMgZm9yIGNvbXByZXNzaW9uLlxuICAgICAqIEB0eXBlIHtGdW5jdGlvbn1cbiAgICAgKiBAcGFyYW0ge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gY29udGV4dCAtIFRoZSAyZCByZW5kZXJpbmcgY29udGV4dCBvZiB0aGUgY2FudmFzLlxuICAgICAqIEBwYXJhbSB7SFRNTENhbnZhc0VsZW1lbnR9IGNhbnZhcyAtIFRoZSBjYW52YXMgZm9yIGNvbXByZXNzaW9uLlxuICAgICAqIEBleGFtcGxlXG4gICAgICogZnVuY3Rpb24gKGNvbnRleHQsIGNhbnZhcykge1xuICAgICAqICAgY29udGV4dC5maWxsU3R5bGUgPSAnI2ZmZic7XG4gICAgICogfVxuICAgICAqL1xuICAgIGJlZm9yZURyYXc6IG51bGwsXG4gICAgLyoqXG4gICAgICogVGhlIGhvb2sgZnVuY3Rpb24gdG8gZXhlY3V0ZSBhZnRlciBkcmV3IHRoZSBpbWFnZSBpbnRvIHRoZSBjYW52YXMgZm9yIGNvbXByZXNzaW9uLlxuICAgICAqIEB0eXBlIHtGdW5jdGlvbn1cbiAgICAgKiBAcGFyYW0ge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gY29udGV4dCAtIFRoZSAyZCByZW5kZXJpbmcgY29udGV4dCBvZiB0aGUgY2FudmFzLlxuICAgICAqIEBwYXJhbSB7SFRNTENhbnZhc0VsZW1lbnR9IGNhbnZhcyAtIFRoZSBjYW52YXMgZm9yIGNvbXByZXNzaW9uLlxuICAgICAqIEBleGFtcGxlXG4gICAgICogZnVuY3Rpb24gKGNvbnRleHQsIGNhbnZhcykge1xuICAgICAqICAgY29udGV4dC5maWx0ZXIgPSAnZ3JheXNjYWxlKDEwMCUpJztcbiAgICAgKiB9XG4gICAgICovXG4gICAgZHJldzogbnVsbCxcbiAgICAvKipcbiAgICAgKiBUaGUgaG9vayBmdW5jdGlvbiB0byBleGVjdXRlIHdoZW4gc3VjY2VzcyB0byBjb21wcmVzcyB0aGUgaW1hZ2UuXG4gICAgICogQHR5cGUge0Z1bmN0aW9ufVxuICAgICAqIEBwYXJhbSB7RmlsZX0gZmlsZSAtIFRoZSBjb21wcmVzc2VkIGltYWdlIEZpbGUgb2JqZWN0LlxuICAgICAqIEBleGFtcGxlXG4gICAgICogZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgKiAgIGNvbnNvbGUubG9nKGZpbGUpO1xuICAgICAqIH1cbiAgICAgKi9cbiAgICBzdWNjZXNzOiBudWxsLFxuICAgIC8qKlxuICAgICAqIFRoZSBob29rIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgd2hlbiBmYWlsIHRvIGNvbXByZXNzIHRoZSBpbWFnZS5cbiAgICAgKiBAdHlwZSB7RnVuY3Rpb259XG4gICAgICogQHBhcmFtIHtFcnJvcn0gZXJyIC0gQW4gRXJyb3Igb2JqZWN0LlxuICAgICAqIEBleGFtcGxlXG4gICAgICogZnVuY3Rpb24gKGVycikge1xuICAgICAqICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xuICAgICAqIH1cbiAgICAgKi9cbiAgICBlcnJvcjogbnVsbFxuICB9O1xuICB2YXIgSVNfQlJPV1NFUiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnO1xuICB2YXIgV0lORE9XID0gSVNfQlJPV1NFUiA/IHdpbmRvdyA6IHt9O1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBwb3NpdGl2ZSBudW1iZXIuXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBwb3NpdGl2ZSBudW1iZXIsIGVsc2UgYGZhbHNlYC5cbiAgICovXG4gIHZhciBpc1Bvc2l0aXZlTnVtYmVyID0gZnVuY3Rpb24gaXNQb3NpdGl2ZU51bWJlcih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA+IDAgJiYgdmFsdWUgPCBJbmZpbml0eTtcbiAgfTtcbiAgdmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0IGFycmF5LWxpa2Ugb3IgaXRlcmFibGUgb2JqZWN0IHRvIGFuIGFycmF5LlxuICAgKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gICAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBhIG5ldyBhcnJheS5cbiAgICovXG4gIGZ1bmN0aW9uIHRvQXJyYXkodmFsdWUpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSA/IEFycmF5LmZyb20odmFsdWUpIDogc2xpY2UuY2FsbCh2YWx1ZSk7XG4gIH1cbiAgdmFyIFJFR0VYUF9JTUFHRV9UWVBFID0gL15pbWFnZVxcLy4rJC87XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIG1pbWUgdHlwZSBvZiBpbWFnZS5cbiAgICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAgICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBnaXZlbiBpcyBhIG1pbWUgdHlwZSBvZiBpbWFnZSwgZWxzZSBgZmFsc2VgLlxuICAgKi9cbiAgZnVuY3Rpb24gaXNJbWFnZVR5cGUodmFsdWUpIHtcbiAgICByZXR1cm4gUkVHRVhQX0lNQUdFX1RZUEUudGVzdCh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCBpbWFnZSB0eXBlIHRvIGV4dGVuc2lvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gVGhlIGltYWdlIHR5cGUgdG8gY29udmVydC5cbiAgICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgdGhlIGltYWdlIGV4dGVuc2lvbi5cbiAgICovXG4gIGZ1bmN0aW9uIGltYWdlVHlwZVRvRXh0ZW5zaW9uKHZhbHVlKSB7XG4gICAgdmFyIGV4dGVuc2lvbiA9IGlzSW1hZ2VUeXBlKHZhbHVlKSA/IHZhbHVlLnN1YnN0cig2KSA6ICcnO1xuICAgIGlmIChleHRlbnNpb24gPT09ICdqcGVnJykge1xuICAgICAgZXh0ZW5zaW9uID0gJ2pwZyc7XG4gICAgfVxuICAgIHJldHVybiBcIi5cIi5jb25jYXQoZXh0ZW5zaW9uKTtcbiAgfVxuICB2YXIgZnJvbUNoYXJDb2RlID0gU3RyaW5nLmZyb21DaGFyQ29kZTtcblxuICAvKipcbiAgICogR2V0IHN0cmluZyBmcm9tIGNoYXIgY29kZSBpbiBkYXRhIHZpZXcuXG4gICAqIEBwYXJhbSB7RGF0YVZpZXd9IGRhdGFWaWV3IC0gVGhlIGRhdGEgdmlldyBmb3IgcmVhZC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0IC0gVGhlIHN0YXJ0IGluZGV4LlxuICAgKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoIC0gVGhlIHJlYWQgbGVuZ3RoLlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgcmVhZCByZXN1bHQuXG4gICAqL1xuICBmdW5jdGlvbiBnZXRTdHJpbmdGcm9tQ2hhckNvZGUoZGF0YVZpZXcsIHN0YXJ0LCBsZW5ndGgpIHtcbiAgICB2YXIgc3RyID0gJyc7XG4gICAgdmFyIGk7XG4gICAgbGVuZ3RoICs9IHN0YXJ0O1xuICAgIGZvciAoaSA9IHN0YXJ0OyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHN0ciArPSBmcm9tQ2hhckNvZGUoZGF0YVZpZXcuZ2V0VWludDgoaSkpO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xuICB9XG4gIHZhciBidG9hID0gV0lORE9XLmJ0b2E7XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybSBhcnJheSBidWZmZXIgdG8gRGF0YSBVUkwuXG4gICAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGFycmF5QnVmZmVyIC0gVGhlIGFycmF5IGJ1ZmZlciB0byB0cmFuc2Zvcm0uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtaW1lVHlwZSAtIFRoZSBtaW1lIHR5cGUgb2YgdGhlIERhdGEgVVJMLlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgcmVzdWx0IERhdGEgVVJMLlxuICAgKi9cbiAgZnVuY3Rpb24gYXJyYXlCdWZmZXJUb0RhdGFVUkwoYXJyYXlCdWZmZXIsIG1pbWVUeXBlKSB7XG4gICAgdmFyIGNodW5rcyA9IFtdO1xuICAgIHZhciBjaHVua1NpemUgPSA4MTkyO1xuICAgIHZhciB1aW50OCA9IG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKTtcbiAgICB3aGlsZSAodWludDgubGVuZ3RoID4gMCkge1xuICAgICAgLy8gWFhYOiBCYWJlbCdzIGB0b0NvbnN1bWFibGVBcnJheWAgaGVscGVyIHdpbGwgdGhyb3cgZXJyb3IgaW4gSUUgb3IgU2FmYXJpIDlcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItc3ByZWFkXG4gICAgICBjaHVua3MucHVzaChmcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgdG9BcnJheSh1aW50OC5zdWJhcnJheSgwLCBjaHVua1NpemUpKSkpO1xuICAgICAgdWludDggPSB1aW50OC5zdWJhcnJheShjaHVua1NpemUpO1xuICAgIH1cbiAgICByZXR1cm4gXCJkYXRhOlwiLmNvbmNhdChtaW1lVHlwZSwgXCI7YmFzZTY0LFwiKS5jb25jYXQoYnRvYShjaHVua3Muam9pbignJykpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgb3JpZW50YXRpb24gdmFsdWUgZnJvbSBnaXZlbiBhcnJheSBidWZmZXIuXG4gICAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGFycmF5QnVmZmVyIC0gVGhlIGFycmF5IGJ1ZmZlciB0byByZWFkLlxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgcmVhZCBvcmllbnRhdGlvbiB2YWx1ZS5cbiAgICovXG4gIGZ1bmN0aW9uIHJlc2V0QW5kR2V0T3JpZW50YXRpb24oYXJyYXlCdWZmZXIpIHtcbiAgICB2YXIgZGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcoYXJyYXlCdWZmZXIpO1xuICAgIHZhciBvcmllbnRhdGlvbjtcblxuICAgIC8vIElnbm9yZXMgcmFuZ2UgZXJyb3Igd2hlbiB0aGUgaW1hZ2UgZG9lcyBub3QgaGF2ZSBjb3JyZWN0IEV4aWYgaW5mb3JtYXRpb25cbiAgICB0cnkge1xuICAgICAgdmFyIGxpdHRsZUVuZGlhbjtcbiAgICAgIHZhciBhcHAxU3RhcnQ7XG4gICAgICB2YXIgaWZkU3RhcnQ7XG5cbiAgICAgIC8vIE9ubHkgaGFuZGxlIEpQRUcgaW1hZ2UgKHN0YXJ0IGJ5IDB4RkZEOClcbiAgICAgIGlmIChkYXRhVmlldy5nZXRVaW50OCgwKSA9PT0gMHhGRiAmJiBkYXRhVmlldy5nZXRVaW50OCgxKSA9PT0gMHhEOCkge1xuICAgICAgICB2YXIgbGVuZ3RoID0gZGF0YVZpZXcuYnl0ZUxlbmd0aDtcbiAgICAgICAgdmFyIG9mZnNldCA9IDI7XG4gICAgICAgIHdoaWxlIChvZmZzZXQgKyAxIDwgbGVuZ3RoKSB7XG4gICAgICAgICAgaWYgKGRhdGFWaWV3LmdldFVpbnQ4KG9mZnNldCkgPT09IDB4RkYgJiYgZGF0YVZpZXcuZ2V0VWludDgob2Zmc2V0ICsgMSkgPT09IDB4RTEpIHtcbiAgICAgICAgICAgIGFwcDFTdGFydCA9IG9mZnNldDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvZmZzZXQgKz0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGFwcDFTdGFydCkge1xuICAgICAgICB2YXIgZXhpZklEQ29kZSA9IGFwcDFTdGFydCArIDQ7XG4gICAgICAgIHZhciB0aWZmT2Zmc2V0ID0gYXBwMVN0YXJ0ICsgMTA7XG4gICAgICAgIGlmIChnZXRTdHJpbmdGcm9tQ2hhckNvZGUoZGF0YVZpZXcsIGV4aWZJRENvZGUsIDQpID09PSAnRXhpZicpIHtcbiAgICAgICAgICB2YXIgZW5kaWFubmVzcyA9IGRhdGFWaWV3LmdldFVpbnQxNih0aWZmT2Zmc2V0KTtcbiAgICAgICAgICBsaXR0bGVFbmRpYW4gPSBlbmRpYW5uZXNzID09PSAweDQ5NDk7XG4gICAgICAgICAgaWYgKGxpdHRsZUVuZGlhbiB8fCBlbmRpYW5uZXNzID09PSAweDRENEQgLyogYmlnRW5kaWFuICovKSB7XG4gICAgICAgICAgICBpZiAoZGF0YVZpZXcuZ2V0VWludDE2KHRpZmZPZmZzZXQgKyAyLCBsaXR0bGVFbmRpYW4pID09PSAweDAwMkEpIHtcbiAgICAgICAgICAgICAgdmFyIGZpcnN0SUZET2Zmc2V0ID0gZGF0YVZpZXcuZ2V0VWludDMyKHRpZmZPZmZzZXQgKyA0LCBsaXR0bGVFbmRpYW4pO1xuICAgICAgICAgICAgICBpZiAoZmlyc3RJRkRPZmZzZXQgPj0gMHgwMDAwMDAwOCkge1xuICAgICAgICAgICAgICAgIGlmZFN0YXJ0ID0gdGlmZk9mZnNldCArIGZpcnN0SUZET2Zmc2V0O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaWZkU3RhcnQpIHtcbiAgICAgICAgdmFyIF9sZW5ndGggPSBkYXRhVmlldy5nZXRVaW50MTYoaWZkU3RhcnQsIGxpdHRsZUVuZGlhbik7XG4gICAgICAgIHZhciBfb2Zmc2V0O1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IF9sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIF9vZmZzZXQgPSBpZmRTdGFydCArIGkgKiAxMiArIDI7XG4gICAgICAgICAgaWYgKGRhdGFWaWV3LmdldFVpbnQxNihfb2Zmc2V0LCBsaXR0bGVFbmRpYW4pID09PSAweDAxMTIgLyogT3JpZW50YXRpb24gKi8pIHtcbiAgICAgICAgICAgIC8vIDggaXMgdGhlIG9mZnNldCBvZiB0aGUgY3VycmVudCB0YWcncyB2YWx1ZVxuICAgICAgICAgICAgX29mZnNldCArPSA4O1xuXG4gICAgICAgICAgICAvLyBHZXQgdGhlIG9yaWdpbmFsIG9yaWVudGF0aW9uIHZhbHVlXG4gICAgICAgICAgICBvcmllbnRhdGlvbiA9IGRhdGFWaWV3LmdldFVpbnQxNihfb2Zmc2V0LCBsaXR0bGVFbmRpYW4pO1xuXG4gICAgICAgICAgICAvLyBPdmVycmlkZSB0aGUgb3JpZW50YXRpb24gd2l0aCBpdHMgZGVmYXVsdCB2YWx1ZVxuICAgICAgICAgICAgZGF0YVZpZXcuc2V0VWludDE2KF9vZmZzZXQsIDEsIGxpdHRsZUVuZGlhbik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBvcmllbnRhdGlvbiA9IDE7XG4gICAgfVxuICAgIHJldHVybiBvcmllbnRhdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZSBFeGlmIE9yaWVudGF0aW9uIHZhbHVlLlxuICAgKiBAcGFyYW0ge251bWJlcn0gb3JpZW50YXRpb24gLSBUaGUgb3JpZW50YXRpb24gdG8gcGFyc2UuXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBwYXJzZWQgcmVzdWx0LlxuICAgKi9cbiAgZnVuY3Rpb24gcGFyc2VPcmllbnRhdGlvbihvcmllbnRhdGlvbikge1xuICAgIHZhciByb3RhdGUgPSAwO1xuICAgIHZhciBzY2FsZVggPSAxO1xuICAgIHZhciBzY2FsZVkgPSAxO1xuICAgIHN3aXRjaCAob3JpZW50YXRpb24pIHtcbiAgICAgIC8vIEZsaXAgaG9yaXpvbnRhbFxuICAgICAgY2FzZSAyOlxuICAgICAgICBzY2FsZVggPSAtMTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8vIFJvdGF0ZSBsZWZ0IDE4MMKwXG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJvdGF0ZSA9IC0xODA7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvLyBGbGlwIHZlcnRpY2FsXG4gICAgICBjYXNlIDQ6XG4gICAgICAgIHNjYWxlWSA9IC0xO1xuICAgICAgICBicmVhaztcblxuICAgICAgLy8gRmxpcCB2ZXJ0aWNhbCBhbmQgcm90YXRlIHJpZ2h0IDkwwrBcbiAgICAgIGNhc2UgNTpcbiAgICAgICAgcm90YXRlID0gOTA7XG4gICAgICAgIHNjYWxlWSA9IC0xO1xuICAgICAgICBicmVhaztcblxuICAgICAgLy8gUm90YXRlIHJpZ2h0IDkwwrBcbiAgICAgIGNhc2UgNjpcbiAgICAgICAgcm90YXRlID0gOTA7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvLyBGbGlwIGhvcml6b250YWwgYW5kIHJvdGF0ZSByaWdodCA5MMKwXG4gICAgICBjYXNlIDc6XG4gICAgICAgIHJvdGF0ZSA9IDkwO1xuICAgICAgICBzY2FsZVggPSAtMTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8vIFJvdGF0ZSBsZWZ0IDkwwrBcbiAgICAgIGNhc2UgODpcbiAgICAgICAgcm90YXRlID0gLTkwO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHJvdGF0ZTogcm90YXRlLFxuICAgICAgc2NhbGVYOiBzY2FsZVgsXG4gICAgICBzY2FsZVk6IHNjYWxlWVxuICAgIH07XG4gIH1cbiAgdmFyIFJFR0VYUF9ERUNJTUFMUyA9IC9cXC5cXGQqKD86MHw5KXsxMn1cXGQqJC87XG5cbiAgLyoqXG4gICAqIE5vcm1hbGl6ZSBkZWNpbWFsIG51bWJlci5cbiAgICogQ2hlY2sgb3V0IHtAbGluayBodHRwczovLzAuMzAwMDAwMDAwMDAwMDAwMDQuY29tL31cbiAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIG5vcm1hbGl6ZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IFt0aW1lcz0xMDAwMDAwMDAwMDBdIC0gVGhlIHRpbWVzIGZvciBub3JtYWxpemluZy5cbiAgICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbm9ybWFsaXplZCBudW1iZXIuXG4gICAqL1xuICBmdW5jdGlvbiBub3JtYWxpemVEZWNpbWFsTnVtYmVyKHZhbHVlKSB7XG4gICAgdmFyIHRpbWVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAxMDAwMDAwMDAwMDA7XG4gICAgcmV0dXJuIFJFR0VYUF9ERUNJTUFMUy50ZXN0KHZhbHVlKSA/IE1hdGgucm91bmQodmFsdWUgKiB0aW1lcykgLyB0aW1lcyA6IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbWF4IHNpemVzIGluIGEgcmVjdGFuZ2xlIHVuZGVyIHRoZSBnaXZlbiBhc3BlY3QgcmF0aW8uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gVGhlIG9yaWdpbmFsIHNpemVzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3R5cGU9J2NvbnRhaW4nXSAtIFRoZSBhZGp1c3QgdHlwZS5cbiAgICogQHJldHVybnMge09iamVjdH0gVGhlIHJlc3VsdCBzaXplcy5cbiAgICovXG4gIGZ1bmN0aW9uIGdldEFkanVzdGVkU2l6ZXMoX3JlZikge1xuICAgIHZhciBhc3BlY3RSYXRpbyA9IF9yZWYuYXNwZWN0UmF0aW8sXG4gICAgICBoZWlnaHQgPSBfcmVmLmhlaWdodCxcbiAgICAgIHdpZHRoID0gX3JlZi53aWR0aDtcbiAgICB2YXIgdHlwZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogJ25vbmUnO1xuICAgIHZhciBpc1ZhbGlkV2lkdGggPSBpc1Bvc2l0aXZlTnVtYmVyKHdpZHRoKTtcbiAgICB2YXIgaXNWYWxpZEhlaWdodCA9IGlzUG9zaXRpdmVOdW1iZXIoaGVpZ2h0KTtcbiAgICBpZiAoaXNWYWxpZFdpZHRoICYmIGlzVmFsaWRIZWlnaHQpIHtcbiAgICAgIHZhciBhZGp1c3RlZFdpZHRoID0gaGVpZ2h0ICogYXNwZWN0UmF0aW87XG4gICAgICBpZiAoKHR5cGUgPT09ICdjb250YWluJyB8fCB0eXBlID09PSAnbm9uZScpICYmIGFkanVzdGVkV2lkdGggPiB3aWR0aCB8fCB0eXBlID09PSAnY292ZXInICYmIGFkanVzdGVkV2lkdGggPCB3aWR0aCkge1xuICAgICAgICBoZWlnaHQgPSB3aWR0aCAvIGFzcGVjdFJhdGlvO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2lkdGggPSBoZWlnaHQgKiBhc3BlY3RSYXRpbztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzVmFsaWRXaWR0aCkge1xuICAgICAgaGVpZ2h0ID0gd2lkdGggLyBhc3BlY3RSYXRpbztcbiAgICB9IGVsc2UgaWYgKGlzVmFsaWRIZWlnaHQpIHtcbiAgICAgIHdpZHRoID0gaGVpZ2h0ICogYXNwZWN0UmF0aW87XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogd2lkdGgsXG4gICAgICBoZWlnaHQ6IGhlaWdodFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogR2V0IEV4aWYgaW5mb3JtYXRpb24gZnJvbSB0aGUgZ2l2ZW4gYXJyYXkgYnVmZmVyLlxuICAgKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBhcnJheUJ1ZmZlciAtIFRoZSBhcnJheSBidWZmZXIgdG8gcmVhZC5cbiAgICogQHJldHVybnMge0FycmF5fSBUaGUgcmVhZCBFeGlmIGluZm9ybWF0aW9uLlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0RXhpZihhcnJheUJ1ZmZlcikge1xuICAgIHZhciBhcnJheSA9IHRvQXJyYXkobmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpKTtcbiAgICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICAgIHZhciBzZWdtZW50cyA9IFtdO1xuICAgIHZhciBzdGFydCA9IDA7XG4gICAgd2hpbGUgKHN0YXJ0ICsgMyA8IGxlbmd0aCkge1xuICAgICAgdmFyIHZhbHVlID0gYXJyYXlbc3RhcnRdO1xuICAgICAgdmFyIG5leHQgPSBhcnJheVtzdGFydCArIDFdO1xuXG4gICAgICAvLyBTT1MgKFN0YXJ0IG9mIFNjYW4pXG4gICAgICBpZiAodmFsdWUgPT09IDB4RkYgJiYgbmV4dCA9PT0gMHhEQSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgLy8gU09JIChTdGFydCBvZiBJbWFnZSlcbiAgICAgIGlmICh2YWx1ZSA9PT0gMHhGRiAmJiBuZXh0ID09PSAweEQ4KSB7XG4gICAgICAgIHN0YXJ0ICs9IDI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgb2Zmc2V0ID0gYXJyYXlbc3RhcnQgKyAyXSAqIDI1NiArIGFycmF5W3N0YXJ0ICsgM107XG4gICAgICAgIHZhciBlbmQgPSBzdGFydCArIG9mZnNldCArIDI7XG4gICAgICAgIHZhciBzZWdtZW50ID0gYXJyYXkuc2xpY2Uoc3RhcnQsIGVuZCk7XG4gICAgICAgIHNlZ21lbnRzLnB1c2goc2VnbWVudCk7XG4gICAgICAgIHN0YXJ0ID0gZW5kO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2VnbWVudHMucmVkdWNlKGZ1bmN0aW9uIChleGlmQXJyYXksIGN1cnJlbnQpIHtcbiAgICAgIGlmIChjdXJyZW50WzBdID09PSAweEZGICYmIGN1cnJlbnRbMV0gPT09IDB4RTEpIHtcbiAgICAgICAgcmV0dXJuIGV4aWZBcnJheS5jb25jYXQoY3VycmVudCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZXhpZkFycmF5O1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnNlcnQgRXhpZiBpbmZvcm1hdGlvbiBpbnRvIHRoZSBnaXZlbiBhcnJheSBidWZmZXIuXG4gICAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGFycmF5QnVmZmVyIC0gVGhlIGFycmF5IGJ1ZmZlciB0byB0cmFuc2Zvcm0uXG4gICAqIEBwYXJhbSB7QXJyYXl9IGV4aWZBcnJheSAtIFRoZSBFeGlmIGluZm9ybWF0aW9uIHRvIGluc2VydC5cbiAgICogQHJldHVybnMge0FycmF5QnVmZmVyfSBUaGUgdHJhbnNmb3JtZWQgYXJyYXkgYnVmZmVyLlxuICAgKi9cbiAgZnVuY3Rpb24gaW5zZXJ0RXhpZihhcnJheUJ1ZmZlciwgZXhpZkFycmF5KSB7XG4gICAgdmFyIGFycmF5ID0gdG9BcnJheShuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcikpO1xuICAgIGlmIChhcnJheVsyXSAhPT0gMHhGRiB8fCBhcnJheVszXSAhPT0gMHhFMCkge1xuICAgICAgcmV0dXJuIGFycmF5QnVmZmVyO1xuICAgIH1cbiAgICB2YXIgYXBwMExlbmd0aCA9IGFycmF5WzRdICogMjU2ICsgYXJyYXlbNV07XG4gICAgdmFyIG5ld0FycmF5QnVmZmVyID0gWzB4RkYsIDB4RDhdLmNvbmNhdChleGlmQXJyYXksIGFycmF5LnNsaWNlKDQgKyBhcHAwTGVuZ3RoKSk7XG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KG5ld0FycmF5QnVmZmVyKTtcbiAgfVxuICB2YXIgQXJyYXlCdWZmZXIkMSA9IFdJTkRPVy5BcnJheUJ1ZmZlcixcbiAgICBGaWxlUmVhZGVyID0gV0lORE9XLkZpbGVSZWFkZXI7XG4gIHZhciBVUkwgPSBXSU5ET1cuVVJMIHx8IFdJTkRPVy53ZWJraXRVUkw7XG4gIHZhciBSRUdFWFBfRVhURU5TSU9OID0gL1xcLlxcdyskLztcbiAgdmFyIEFub3RoZXJDb21wcmVzc29yID0gV0lORE9XLkNvbXByZXNzb3I7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgaW1hZ2UgY29tcHJlc3Nvci5cbiAgICogQGNsYXNzXG4gICAqL1xuICB2YXIgQ29tcHJlc3NvciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogVGhlIGNvbnN0cnVjdG9yIG9mIENvbXByZXNzb3IuXG4gICAgICogQHBhcmFtIHtGaWxlfEJsb2J9IGZpbGUgLSBUaGUgdGFyZ2V0IGltYWdlIGZpbGUgZm9yIGNvbXByZXNzaW5nLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBUaGUgb3B0aW9ucyBmb3IgY29tcHJlc3NpbmcuXG4gICAgICovXG4gICAgZnVuY3Rpb24gQ29tcHJlc3NvcihmaWxlLCBvcHRpb25zKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29tcHJlc3Nvcik7XG4gICAgICB0aGlzLmZpbGUgPSBmaWxlO1xuICAgICAgdGhpcy5leGlmID0gW107XG4gICAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICB0aGlzLm9wdGlvbnMgPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgREVGQVVMVFMpLCBvcHRpb25zKTtcbiAgICAgIHRoaXMuYWJvcnRlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZXN1bHQgPSBudWxsO1xuICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuICAgIF9jcmVhdGVDbGFzcyhDb21wcmVzc29yLCBbe1xuICAgICAga2V5OiBcImluaXRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgZmlsZSA9IHRoaXMuZmlsZSxcbiAgICAgICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBpZiAoIWlzQmxvYihmaWxlKSkge1xuICAgICAgICAgIHRoaXMuZmFpbChuZXcgRXJyb3IoJ1RoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgRmlsZSBvciBCbG9iIG9iamVjdC4nKSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBtaW1lVHlwZSA9IGZpbGUudHlwZTtcbiAgICAgICAgaWYgKCFpc0ltYWdlVHlwZShtaW1lVHlwZSkpIHtcbiAgICAgICAgICB0aGlzLmZhaWwobmV3IEVycm9yKCdUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhbiBpbWFnZSBGaWxlIG9yIEJsb2Igb2JqZWN0LicpKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFVUkwgfHwgIUZpbGVSZWFkZXIpIHtcbiAgICAgICAgICB0aGlzLmZhaWwobmV3IEVycm9yKCdUaGUgY3VycmVudCBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgaW1hZ2UgY29tcHJlc3Npb24uJykpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIUFycmF5QnVmZmVyJDEpIHtcbiAgICAgICAgICBvcHRpb25zLmNoZWNrT3JpZW50YXRpb24gPSBmYWxzZTtcbiAgICAgICAgICBvcHRpb25zLnJldGFpbkV4aWYgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaXNKUEVHSW1hZ2UgPSBtaW1lVHlwZSA9PT0gJ2ltYWdlL2pwZWcnO1xuICAgICAgICB2YXIgY2hlY2tPcmllbnRhdGlvbiA9IGlzSlBFR0ltYWdlICYmIG9wdGlvbnMuY2hlY2tPcmllbnRhdGlvbjtcbiAgICAgICAgdmFyIHJldGFpbkV4aWYgPSBpc0pQRUdJbWFnZSAmJiBvcHRpb25zLnJldGFpbkV4aWY7XG4gICAgICAgIGlmIChVUkwgJiYgIWNoZWNrT3JpZW50YXRpb24gJiYgIXJldGFpbkV4aWYpIHtcbiAgICAgICAgICB0aGlzLmxvYWQoe1xuICAgICAgICAgICAgdXJsOiBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgdGhpcy5yZWFkZXIgPSByZWFkZXI7XG4gICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gX3JlZi50YXJnZXQ7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgICAgIHZhciBkYXRhID0ge307XG4gICAgICAgICAgICB2YXIgb3JpZW50YXRpb24gPSAxO1xuICAgICAgICAgICAgaWYgKGNoZWNrT3JpZW50YXRpb24pIHtcbiAgICAgICAgICAgICAgLy8gUmVzZXQgdGhlIG9yaWVudGF0aW9uIHZhbHVlIHRvIGl0cyBkZWZhdWx0IHZhbHVlIDFcbiAgICAgICAgICAgICAgLy8gYXMgc29tZSBpT1MgYnJvd3NlcnMgd2lsbCByZW5kZXIgaW1hZ2Ugd2l0aCBpdHMgb3JpZW50YXRpb25cbiAgICAgICAgICAgICAgb3JpZW50YXRpb24gPSByZXNldEFuZEdldE9yaWVudGF0aW9uKHJlc3VsdCk7XG4gICAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA+IDEpIHtcbiAgICAgICAgICAgICAgICBfZXh0ZW5kcyhkYXRhLCBwYXJzZU9yaWVudGF0aW9uKG9yaWVudGF0aW9uKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXRhaW5FeGlmKSB7XG4gICAgICAgICAgICAgIF90aGlzLmV4aWYgPSBnZXRFeGlmKHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2hlY2tPcmllbnRhdGlvbiB8fCByZXRhaW5FeGlmKSB7XG4gICAgICAgICAgICAgIGlmICghVVJMXG5cbiAgICAgICAgICAgICAgLy8gR2VuZXJhdGUgYSBuZXcgVVJMIHdpdGggdGhlIGRlZmF1bHQgb3JpZW50YXRpb24gdmFsdWUgMS5cbiAgICAgICAgICAgICAgfHwgb3JpZW50YXRpb24gPiAxKSB7XG4gICAgICAgICAgICAgICAgZGF0YS51cmwgPSBhcnJheUJ1ZmZlclRvRGF0YVVSTChyZXN1bHQsIG1pbWVUeXBlKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkYXRhLnVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRhdGEudXJsID0gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXMubG9hZChkYXRhKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJlYWRlci5vbmFib3J0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuZmFpbChuZXcgRXJyb3IoJ0Fib3J0ZWQgdG8gcmVhZCB0aGUgaW1hZ2Ugd2l0aCBGaWxlUmVhZGVyLicpKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJlYWRlci5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuZmFpbChuZXcgRXJyb3IoJ0ZhaWxlZCB0byByZWFkIHRoZSBpbWFnZSB3aXRoIEZpbGVSZWFkZXIuJykpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnJlYWRlciA9IG51bGw7XG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAoY2hlY2tPcmllbnRhdGlvbiB8fCByZXRhaW5FeGlmKSB7XG4gICAgICAgICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJsb2FkXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZChkYXRhKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuICAgICAgICB2YXIgZmlsZSA9IHRoaXMuZmlsZSxcbiAgICAgICAgICBpbWFnZSA9IHRoaXMuaW1hZ2U7XG4gICAgICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczIuZHJhdyhfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgZGF0YSksIHt9LCB7XG4gICAgICAgICAgICBuYXR1cmFsV2lkdGg6IGltYWdlLm5hdHVyYWxXaWR0aCxcbiAgICAgICAgICAgIG5hdHVyYWxIZWlnaHQ6IGltYWdlLm5hdHVyYWxIZWlnaHRcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH07XG4gICAgICAgIGltYWdlLm9uYWJvcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMyLmZhaWwobmV3IEVycm9yKCdBYm9ydGVkIHRvIGxvYWQgdGhlIGltYWdlLicpKTtcbiAgICAgICAgfTtcbiAgICAgICAgaW1hZ2Uub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczIuZmFpbChuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIHRoZSBpbWFnZS4nKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gTWF0Y2ggYWxsIGJyb3dzZXJzIHRoYXQgdXNlIFdlYktpdCBhcyB0aGUgbGF5b3V0IGVuZ2luZSBpbiBpT1MgZGV2aWNlcyxcbiAgICAgICAgLy8gc3VjaCBhcyBTYWZhcmkgZm9yIGlPUywgQ2hyb21lIGZvciBpT1MsIGFuZCBpbi1hcHAgYnJvd3NlcnMuXG4gICAgICAgIGlmIChXSU5ET1cubmF2aWdhdG9yICYmIC8oPzppUGFkfGlQaG9uZXxpUG9kKS4qP0FwcGxlV2ViS2l0L2kudGVzdChXSU5ET1cubmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgICAgICAvLyBGaXggdGhlIGBUaGUgb3BlcmF0aW9uIGlzIGluc2VjdXJlYCBlcnJvciAoIzU3KVxuICAgICAgICAgIGltYWdlLmNyb3NzT3JpZ2luID0gJ2Fub255bW91cyc7XG4gICAgICAgIH1cbiAgICAgICAgaW1hZ2UuYWx0ID0gZmlsZS5uYW1lO1xuICAgICAgICBpbWFnZS5zcmMgPSBkYXRhLnVybDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZHJhd1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRyYXcoX3JlZjIpIHtcbiAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG4gICAgICAgIHZhciBuYXR1cmFsV2lkdGggPSBfcmVmMi5uYXR1cmFsV2lkdGgsXG4gICAgICAgICAgbmF0dXJhbEhlaWdodCA9IF9yZWYyLm5hdHVyYWxIZWlnaHQsXG4gICAgICAgICAgX3JlZjIkcm90YXRlID0gX3JlZjIucm90YXRlLFxuICAgICAgICAgIHJvdGF0ZSA9IF9yZWYyJHJvdGF0ZSA9PT0gdm9pZCAwID8gMCA6IF9yZWYyJHJvdGF0ZSxcbiAgICAgICAgICBfcmVmMiRzY2FsZVggPSBfcmVmMi5zY2FsZVgsXG4gICAgICAgICAgc2NhbGVYID0gX3JlZjIkc2NhbGVYID09PSB2b2lkIDAgPyAxIDogX3JlZjIkc2NhbGVYLFxuICAgICAgICAgIF9yZWYyJHNjYWxlWSA9IF9yZWYyLnNjYWxlWSxcbiAgICAgICAgICBzY2FsZVkgPSBfcmVmMiRzY2FsZVkgPT09IHZvaWQgMCA/IDEgOiBfcmVmMiRzY2FsZVk7XG4gICAgICAgIHZhciBmaWxlID0gdGhpcy5maWxlLFxuICAgICAgICAgIGltYWdlID0gdGhpcy5pbWFnZSxcbiAgICAgICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHZhciBpczkwRGVncmVlc1JvdGF0ZWQgPSBNYXRoLmFicyhyb3RhdGUpICUgMTgwID09PSA5MDtcbiAgICAgICAgdmFyIHJlc2l6YWJsZSA9IChvcHRpb25zLnJlc2l6ZSA9PT0gJ2NvbnRhaW4nIHx8IG9wdGlvbnMucmVzaXplID09PSAnY292ZXInKSAmJiBpc1Bvc2l0aXZlTnVtYmVyKG9wdGlvbnMud2lkdGgpICYmIGlzUG9zaXRpdmVOdW1iZXIob3B0aW9ucy5oZWlnaHQpO1xuICAgICAgICB2YXIgbWF4V2lkdGggPSBNYXRoLm1heChvcHRpb25zLm1heFdpZHRoLCAwKSB8fCBJbmZpbml0eTtcbiAgICAgICAgdmFyIG1heEhlaWdodCA9IE1hdGgubWF4KG9wdGlvbnMubWF4SGVpZ2h0LCAwKSB8fCBJbmZpbml0eTtcbiAgICAgICAgdmFyIG1pbldpZHRoID0gTWF0aC5tYXgob3B0aW9ucy5taW5XaWR0aCwgMCkgfHwgMDtcbiAgICAgICAgdmFyIG1pbkhlaWdodCA9IE1hdGgubWF4KG9wdGlvbnMubWluSGVpZ2h0LCAwKSB8fCAwO1xuICAgICAgICB2YXIgYXNwZWN0UmF0aW8gPSBuYXR1cmFsV2lkdGggLyBuYXR1cmFsSGVpZ2h0O1xuICAgICAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoLFxuICAgICAgICAgIGhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0O1xuICAgICAgICBpZiAoaXM5MERlZ3JlZXNSb3RhdGVkKSB7XG4gICAgICAgICAgdmFyIF9yZWYzID0gW21heEhlaWdodCwgbWF4V2lkdGhdO1xuICAgICAgICAgIG1heFdpZHRoID0gX3JlZjNbMF07XG4gICAgICAgICAgbWF4SGVpZ2h0ID0gX3JlZjNbMV07XG4gICAgICAgICAgdmFyIF9yZWY0ID0gW21pbkhlaWdodCwgbWluV2lkdGhdO1xuICAgICAgICAgIG1pbldpZHRoID0gX3JlZjRbMF07XG4gICAgICAgICAgbWluSGVpZ2h0ID0gX3JlZjRbMV07XG4gICAgICAgICAgdmFyIF9yZWY1ID0gW2hlaWdodCwgd2lkdGhdO1xuICAgICAgICAgIHdpZHRoID0gX3JlZjVbMF07XG4gICAgICAgICAgaGVpZ2h0ID0gX3JlZjVbMV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc2l6YWJsZSkge1xuICAgICAgICAgIGFzcGVjdFJhdGlvID0gd2lkdGggLyBoZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF9nZXRBZGp1c3RlZFNpemVzID0gZ2V0QWRqdXN0ZWRTaXplcyh7XG4gICAgICAgICAgYXNwZWN0UmF0aW86IGFzcGVjdFJhdGlvLFxuICAgICAgICAgIHdpZHRoOiBtYXhXaWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IG1heEhlaWdodFxuICAgICAgICB9LCAnY29udGFpbicpO1xuICAgICAgICBtYXhXaWR0aCA9IF9nZXRBZGp1c3RlZFNpemVzLndpZHRoO1xuICAgICAgICBtYXhIZWlnaHQgPSBfZ2V0QWRqdXN0ZWRTaXplcy5oZWlnaHQ7XG4gICAgICAgIHZhciBfZ2V0QWRqdXN0ZWRTaXplczIgPSBnZXRBZGp1c3RlZFNpemVzKHtcbiAgICAgICAgICBhc3BlY3RSYXRpbzogYXNwZWN0UmF0aW8sXG4gICAgICAgICAgd2lkdGg6IG1pbldpZHRoLFxuICAgICAgICAgIGhlaWdodDogbWluSGVpZ2h0XG4gICAgICAgIH0sICdjb3ZlcicpO1xuICAgICAgICBtaW5XaWR0aCA9IF9nZXRBZGp1c3RlZFNpemVzMi53aWR0aDtcbiAgICAgICAgbWluSGVpZ2h0ID0gX2dldEFkanVzdGVkU2l6ZXMyLmhlaWdodDtcbiAgICAgICAgaWYgKHJlc2l6YWJsZSkge1xuICAgICAgICAgIHZhciBfZ2V0QWRqdXN0ZWRTaXplczMgPSBnZXRBZGp1c3RlZFNpemVzKHtcbiAgICAgICAgICAgIGFzcGVjdFJhdGlvOiBhc3BlY3RSYXRpbyxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgICAgICAgfSwgb3B0aW9ucy5yZXNpemUpO1xuICAgICAgICAgIHdpZHRoID0gX2dldEFkanVzdGVkU2l6ZXMzLndpZHRoO1xuICAgICAgICAgIGhlaWdodCA9IF9nZXRBZGp1c3RlZFNpemVzMy5oZWlnaHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIF9nZXRBZGp1c3RlZFNpemVzNCA9IGdldEFkanVzdGVkU2l6ZXMoe1xuICAgICAgICAgICAgYXNwZWN0UmF0aW86IGFzcGVjdFJhdGlvLFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB2YXIgX2dldEFkanVzdGVkU2l6ZXM0JHdpID0gX2dldEFkanVzdGVkU2l6ZXM0LndpZHRoO1xuICAgICAgICAgIHdpZHRoID0gX2dldEFkanVzdGVkU2l6ZXM0JHdpID09PSB2b2lkIDAgPyBuYXR1cmFsV2lkdGggOiBfZ2V0QWRqdXN0ZWRTaXplczQkd2k7XG4gICAgICAgICAgdmFyIF9nZXRBZGp1c3RlZFNpemVzNCRoZSA9IF9nZXRBZGp1c3RlZFNpemVzNC5oZWlnaHQ7XG4gICAgICAgICAgaGVpZ2h0ID0gX2dldEFkanVzdGVkU2l6ZXM0JGhlID09PSB2b2lkIDAgPyBuYXR1cmFsSGVpZ2h0IDogX2dldEFkanVzdGVkU2l6ZXM0JGhlO1xuICAgICAgICB9XG4gICAgICAgIHdpZHRoID0gTWF0aC5mbG9vcihub3JtYWxpemVEZWNpbWFsTnVtYmVyKE1hdGgubWluKE1hdGgubWF4KHdpZHRoLCBtaW5XaWR0aCksIG1heFdpZHRoKSkpO1xuICAgICAgICBoZWlnaHQgPSBNYXRoLmZsb29yKG5vcm1hbGl6ZURlY2ltYWxOdW1iZXIoTWF0aC5taW4oTWF0aC5tYXgoaGVpZ2h0LCBtaW5IZWlnaHQpLCBtYXhIZWlnaHQpKSk7XG4gICAgICAgIHZhciBkZXN0WCA9IC13aWR0aCAvIDI7XG4gICAgICAgIHZhciBkZXN0WSA9IC1oZWlnaHQgLyAyO1xuICAgICAgICB2YXIgZGVzdFdpZHRoID0gd2lkdGg7XG4gICAgICAgIHZhciBkZXN0SGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB2YXIgcGFyYW1zID0gW107XG4gICAgICAgIGlmIChyZXNpemFibGUpIHtcbiAgICAgICAgICB2YXIgc3JjWCA9IDA7XG4gICAgICAgICAgdmFyIHNyY1kgPSAwO1xuICAgICAgICAgIHZhciBzcmNXaWR0aCA9IG5hdHVyYWxXaWR0aDtcbiAgICAgICAgICB2YXIgc3JjSGVpZ2h0ID0gbmF0dXJhbEhlaWdodDtcbiAgICAgICAgICB2YXIgX2dldEFkanVzdGVkU2l6ZXM1ID0gZ2V0QWRqdXN0ZWRTaXplcyh7XG4gICAgICAgICAgICBhc3BlY3RSYXRpbzogYXNwZWN0UmF0aW8sXG4gICAgICAgICAgICB3aWR0aDogbmF0dXJhbFdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBuYXR1cmFsSGVpZ2h0XG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgY29udGFpbjogJ2NvdmVyJyxcbiAgICAgICAgICAgIGNvdmVyOiAnY29udGFpbidcbiAgICAgICAgICB9W29wdGlvbnMucmVzaXplXSk7XG4gICAgICAgICAgc3JjV2lkdGggPSBfZ2V0QWRqdXN0ZWRTaXplczUud2lkdGg7XG4gICAgICAgICAgc3JjSGVpZ2h0ID0gX2dldEFkanVzdGVkU2l6ZXM1LmhlaWdodDtcbiAgICAgICAgICBzcmNYID0gKG5hdHVyYWxXaWR0aCAtIHNyY1dpZHRoKSAvIDI7XG4gICAgICAgICAgc3JjWSA9IChuYXR1cmFsSGVpZ2h0IC0gc3JjSGVpZ2h0KSAvIDI7XG4gICAgICAgICAgcGFyYW1zLnB1c2goc3JjWCwgc3JjWSwgc3JjV2lkdGgsIHNyY0hlaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgcGFyYW1zLnB1c2goZGVzdFgsIGRlc3RZLCBkZXN0V2lkdGgsIGRlc3RIZWlnaHQpO1xuICAgICAgICBpZiAoaXM5MERlZ3JlZXNSb3RhdGVkKSB7XG4gICAgICAgICAgdmFyIF9yZWY2ID0gW2hlaWdodCwgd2lkdGhdO1xuICAgICAgICAgIHdpZHRoID0gX3JlZjZbMF07XG4gICAgICAgICAgaGVpZ2h0ID0gX3JlZjZbMV07XG4gICAgICAgIH1cbiAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIGlmICghaXNJbWFnZVR5cGUob3B0aW9ucy5taW1lVHlwZSkpIHtcbiAgICAgICAgICBvcHRpb25zLm1pbWVUeXBlID0gZmlsZS50eXBlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBmaWxsU3R5bGUgPSAndHJhbnNwYXJlbnQnO1xuXG4gICAgICAgIC8vIENvbnZlcnRzIFBORyBmaWxlcyBvdmVyIHRoZSBgY29udmVydFNpemVgIHRvIEpQRUdzLlxuICAgICAgICBpZiAoZmlsZS5zaXplID4gb3B0aW9ucy5jb252ZXJ0U2l6ZSAmJiBvcHRpb25zLmNvbnZlcnRUeXBlcy5pbmRleE9mKG9wdGlvbnMubWltZVR5cGUpID49IDApIHtcbiAgICAgICAgICBvcHRpb25zLm1pbWVUeXBlID0gJ2ltYWdlL2pwZWcnO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpc0pQRUdJbWFnZSA9IG9wdGlvbnMubWltZVR5cGUgPT09ICdpbWFnZS9qcGVnJztcbiAgICAgICAgaWYgKGlzSlBFR0ltYWdlKSB7XG4gICAgICAgICAgZmlsbFN0eWxlID0gJyNmZmYnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gT3ZlcnJpZGUgdGhlIGRlZmF1bHQgZmlsbCBjb2xvciAoIzAwMCwgYmxhY2spXG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gZmlsbFN0eWxlO1xuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICBpZiAob3B0aW9ucy5iZWZvcmVEcmF3KSB7XG4gICAgICAgICAgb3B0aW9ucy5iZWZvcmVEcmF3LmNhbGwodGhpcywgY29udGV4dCwgY2FudmFzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5hYm9ydGVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgICAgICBjb250ZXh0LnRyYW5zbGF0ZSh3aWR0aCAvIDIsIGhlaWdodCAvIDIpO1xuICAgICAgICBjb250ZXh0LnJvdGF0ZShyb3RhdGUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgY29udGV4dC5zY2FsZShzY2FsZVgsIHNjYWxlWSk7XG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlLmFwcGx5KGNvbnRleHQsIFtpbWFnZV0uY29uY2F0KHBhcmFtcykpO1xuICAgICAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgICAgICAgaWYgKG9wdGlvbnMuZHJldykge1xuICAgICAgICAgIG9wdGlvbnMuZHJldy5jYWxsKHRoaXMsIGNvbnRleHQsIGNhbnZhcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYWJvcnRlZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiBjYWxsYmFjayhibG9iKSB7XG4gICAgICAgICAgaWYgKCFfdGhpczMuYWJvcnRlZCkge1xuICAgICAgICAgICAgdmFyIGRvbmUgPSBmdW5jdGlvbiBkb25lKHJlc3VsdCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3RoaXMzLmRvbmUoe1xuICAgICAgICAgICAgICAgIG5hdHVyYWxXaWR0aDogbmF0dXJhbFdpZHRoLFxuICAgICAgICAgICAgICAgIG5hdHVyYWxIZWlnaHQ6IG5hdHVyYWxIZWlnaHQsXG4gICAgICAgICAgICAgICAgcmVzdWx0OiByZXN1bHRcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGJsb2IgJiYgaXNKUEVHSW1hZ2UgJiYgb3B0aW9ucy5yZXRhaW5FeGlmICYmIF90aGlzMy5leGlmICYmIF90aGlzMy5leGlmLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgdmFyIG5leHQgPSBmdW5jdGlvbiBuZXh0KGFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvbmUodG9CbG9iKGFycmF5QnVmZmVyVG9EYXRhVVJMKGluc2VydEV4aWYoYXJyYXlCdWZmZXIsIF90aGlzMy5leGlmKSwgb3B0aW9ucy5taW1lVHlwZSkpKTtcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgaWYgKGJsb2IuYXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICAgICAgICBibG9iLmFycmF5QnVmZmVyKCkudGhlbihuZXh0KS5jYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICBfdGhpczMuZmFpbChuZXcgRXJyb3IoJ0ZhaWxlZCB0byByZWFkIHRoZSBjb21wcmVzc2VkIGltYWdlIHdpdGggQmxvYi5hcnJheUJ1ZmZlcigpLicpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgICAgICBfdGhpczMucmVhZGVyID0gcmVhZGVyO1xuICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoX3JlZjcpIHtcbiAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSBfcmVmNy50YXJnZXQ7XG4gICAgICAgICAgICAgICAgICBuZXh0KHRhcmdldC5yZXN1bHQpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmVhZGVyLm9uYWJvcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICBfdGhpczMuZmFpbChuZXcgRXJyb3IoJ0Fib3J0ZWQgdG8gcmVhZCB0aGUgY29tcHJlc3NlZCBpbWFnZSB3aXRoIEZpbGVSZWFkZXIuJykpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICBfdGhpczMuZmFpbChuZXcgRXJyb3IoJ0ZhaWxlZCB0byByZWFkIHRoZSBjb21wcmVzc2VkIGltYWdlIHdpdGggRmlsZVJlYWRlci4nKSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgX3RoaXMzLnJlYWRlciA9IG51bGw7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoYmxvYik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRvbmUoYmxvYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBpZiAoY2FudmFzLnRvQmxvYikge1xuICAgICAgICAgIGNhbnZhcy50b0Jsb2IoY2FsbGJhY2ssIG9wdGlvbnMubWltZVR5cGUsIG9wdGlvbnMucXVhbGl0eSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FsbGJhY2sodG9CbG9iKGNhbnZhcy50b0RhdGFVUkwob3B0aW9ucy5taW1lVHlwZSwgb3B0aW9ucy5xdWFsaXR5KSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImRvbmVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBkb25lKF9yZWY4KSB7XG4gICAgICAgIHZhciBuYXR1cmFsV2lkdGggPSBfcmVmOC5uYXR1cmFsV2lkdGgsXG4gICAgICAgICAgbmF0dXJhbEhlaWdodCA9IF9yZWY4Lm5hdHVyYWxIZWlnaHQsXG4gICAgICAgICAgcmVzdWx0ID0gX3JlZjgucmVzdWx0O1xuICAgICAgICB2YXIgZmlsZSA9IHRoaXMuZmlsZSxcbiAgICAgICAgICBpbWFnZSA9IHRoaXMuaW1hZ2UsXG4gICAgICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgaWYgKFVSTCAmJiBpbWFnZS5zcmMuaW5kZXhPZignYmxvYjonKSA9PT0gMCkge1xuICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwoaW1hZ2Uuc3JjKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgLy8gUmV0dXJucyBvcmlnaW5hbCBmaWxlIGlmIHRoZSByZXN1bHQgaXMgZ3JlYXRlciB0aGFuIGl0IGFuZCB3aXRob3V0IHNpemUgcmVsYXRlZCBvcHRpb25zXG4gICAgICAgICAgaWYgKG9wdGlvbnMuc3RyaWN0ICYmICFvcHRpb25zLnJldGFpbkV4aWYgJiYgcmVzdWx0LnNpemUgPiBmaWxlLnNpemUgJiYgb3B0aW9ucy5taW1lVHlwZSA9PT0gZmlsZS50eXBlICYmICEob3B0aW9ucy53aWR0aCA+IG5hdHVyYWxXaWR0aCB8fCBvcHRpb25zLmhlaWdodCA+IG5hdHVyYWxIZWlnaHQgfHwgb3B0aW9ucy5taW5XaWR0aCA+IG5hdHVyYWxXaWR0aCB8fCBvcHRpb25zLm1pbkhlaWdodCA+IG5hdHVyYWxIZWlnaHQgfHwgb3B0aW9ucy5tYXhXaWR0aCA8IG5hdHVyYWxXaWR0aCB8fCBvcHRpb25zLm1heEhlaWdodCA8IG5hdHVyYWxIZWlnaHQpKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBmaWxlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICByZXN1bHQubGFzdE1vZGlmaWVkID0gZGF0ZS5nZXRUaW1lKCk7XG4gICAgICAgICAgICByZXN1bHQubGFzdE1vZGlmaWVkRGF0ZSA9IGRhdGU7XG4gICAgICAgICAgICByZXN1bHQubmFtZSA9IGZpbGUubmFtZTtcblxuICAgICAgICAgICAgLy8gQ29udmVydCB0aGUgZXh0ZW5zaW9uIHRvIG1hdGNoIGl0cyB0eXBlXG4gICAgICAgICAgICBpZiAocmVzdWx0Lm5hbWUgJiYgcmVzdWx0LnR5cGUgIT09IGZpbGUudHlwZSkge1xuICAgICAgICAgICAgICByZXN1bHQubmFtZSA9IHJlc3VsdC5uYW1lLnJlcGxhY2UoUkVHRVhQX0VYVEVOU0lPTiwgaW1hZ2VUeXBlVG9FeHRlbnNpb24ocmVzdWx0LnR5cGUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gUmV0dXJucyBvcmlnaW5hbCBmaWxlIGlmIHRoZSByZXN1bHQgaXMgbnVsbCBpbiBzb21lIGNhc2VzLlxuICAgICAgICAgIHJlc3VsdCA9IGZpbGU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgIGlmIChvcHRpb25zLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBvcHRpb25zLnN1Y2Nlc3MuY2FsbCh0aGlzLCByZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImZhaWxcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBmYWlsKGVycikge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgaWYgKG9wdGlvbnMuZXJyb3IpIHtcbiAgICAgICAgICBvcHRpb25zLmVycm9yLmNhbGwodGhpcywgZXJyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiYWJvcnRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhYm9ydCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFib3J0ZWQpIHtcbiAgICAgICAgICB0aGlzLmFib3J0ZWQgPSB0cnVlO1xuICAgICAgICAgIGlmICh0aGlzLnJlYWRlcikge1xuICAgICAgICAgICAgdGhpcy5yZWFkZXIuYWJvcnQoKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmltYWdlLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICB0aGlzLmltYWdlLm9ubG9hZCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmltYWdlLm9uYWJvcnQoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mYWlsKG5ldyBFcnJvcignVGhlIGNvbXByZXNzaW9uIHByb2Nlc3MgaGFzIGJlZW4gYWJvcnRlZC4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogR2V0IHRoZSBubyBjb25mbGljdCBjb21wcmVzc29yIGNsYXNzLlxuICAgICAgICogQHJldHVybnMge0NvbXByZXNzb3J9IFRoZSBjb21wcmVzc29yIGNsYXNzLlxuICAgICAgICovXG4gICAgfV0sIFt7XG4gICAgICBrZXk6IFwibm9Db25mbGljdFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIG5vQ29uZmxpY3QoKSB7XG4gICAgICAgIHdpbmRvdy5Db21wcmVzc29yID0gQW5vdGhlckNvbXByZXNzb3I7XG4gICAgICAgIHJldHVybiBDb21wcmVzc29yO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENoYW5nZSB0aGUgZGVmYXVsdCBvcHRpb25zLlxuICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBUaGUgbmV3IGRlZmF1bHQgb3B0aW9ucy5cbiAgICAgICAqL1xuICAgIH0sIHtcbiAgICAgIGtleTogXCJzZXREZWZhdWx0c1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldERlZmF1bHRzKG9wdGlvbnMpIHtcbiAgICAgICAgX2V4dGVuZHMoREVGQVVMVFMsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gQ29tcHJlc3NvcjtcbiAgfSgpO1xuICByZXR1cm4gQ29tcHJlc3Nvcjtcbn0pOyIsImV4cG9ydCB2YXIgQ2FtZXJhU291cmNlO1xuKGZ1bmN0aW9uIChDYW1lcmFTb3VyY2UpIHtcbiAgLyoqXG4gICAqIFByb21wdHMgdGhlIHVzZXIgdG8gc2VsZWN0IGVpdGhlciB0aGUgcGhvdG8gYWxidW0gb3IgdGFrZSBhIHBob3RvLlxuICAgKi9cbiAgQ2FtZXJhU291cmNlW1wiUHJvbXB0XCJdID0gXCJQUk9NUFRcIjtcbiAgLyoqXG4gICAqIFRha2UgYSBuZXcgcGhvdG8gdXNpbmcgdGhlIGNhbWVyYS5cbiAgICovXG4gIENhbWVyYVNvdXJjZVtcIkNhbWVyYVwiXSA9IFwiQ0FNRVJBXCI7XG4gIC8qKlxuICAgKiBQaWNrIGFuIGV4aXN0aW5nIHBob3RvIGZyb20gdGhlIGdhbGxlcnkgb3IgcGhvdG8gYWxidW0uXG4gICAqL1xuICBDYW1lcmFTb3VyY2VbXCJQaG90b3NcIl0gPSBcIlBIT1RPU1wiO1xufSkoQ2FtZXJhU291cmNlIHx8IChDYW1lcmFTb3VyY2UgPSB7fSkpO1xuZXhwb3J0IHZhciBDYW1lcmFEaXJlY3Rpb247XG4oZnVuY3Rpb24gKENhbWVyYURpcmVjdGlvbikge1xuICBDYW1lcmFEaXJlY3Rpb25bXCJSZWFyXCJdID0gXCJSRUFSXCI7XG4gIENhbWVyYURpcmVjdGlvbltcIkZyb250XCJdID0gXCJGUk9OVFwiO1xufSkoQ2FtZXJhRGlyZWN0aW9uIHx8IChDYW1lcmFEaXJlY3Rpb24gPSB7fSkpO1xuZXhwb3J0IHZhciBDYW1lcmFSZXN1bHRUeXBlO1xuKGZ1bmN0aW9uIChDYW1lcmFSZXN1bHRUeXBlKSB7XG4gIENhbWVyYVJlc3VsdFR5cGVbXCJVcmlcIl0gPSBcInVyaVwiO1xuICBDYW1lcmFSZXN1bHRUeXBlW1wiQmFzZTY0XCJdID0gXCJiYXNlNjRcIjtcbiAgQ2FtZXJhUmVzdWx0VHlwZVtcIkRhdGFVcmxcIl0gPSBcImRhdGFVcmxcIjtcbn0pKENhbWVyYVJlc3VsdFR5cGUgfHwgKENhbWVyYVJlc3VsdFR5cGUgPSB7fSkpO1xuIiwiaW1wb3J0IHsgV2ViUGx1Z2luLCBDYXBhY2l0b3JFeGNlcHRpb24gfSBmcm9tICdAY2FwYWNpdG9yL2NvcmUnO1xuaW1wb3J0IHsgQ2FtZXJhU291cmNlLCBDYW1lcmFEaXJlY3Rpb24gfSBmcm9tICcuL2RlZmluaXRpb25zJztcbmV4cG9ydCBjbGFzcyBDYW1lcmFXZWIgZXh0ZW5kcyBXZWJQbHVnaW4ge1xuICBhc3luYyBnZXRQaG90byhvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWFzeW5jLXByb21pc2UtZXhlY3V0b3JcbiAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKG9wdGlvbnMud2ViVXNlSW5wdXQgfHwgb3B0aW9ucy5zb3VyY2UgPT09IENhbWVyYVNvdXJjZS5QaG90b3MpIHtcbiAgICAgICAgdGhpcy5maWxlSW5wdXRFeHBlcmllbmNlKG9wdGlvbnMsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9IGVsc2UgaWYgKG9wdGlvbnMuc291cmNlID09PSBDYW1lcmFTb3VyY2UuUHJvbXB0KSB7XG4gICAgICAgIGxldCBhY3Rpb25TaGVldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3B3YS1hY3Rpb24tc2hlZXQnKTtcbiAgICAgICAgaWYgKCFhY3Rpb25TaGVldCkge1xuICAgICAgICAgIGFjdGlvblNoZWV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHdhLWFjdGlvbi1zaGVldCcpO1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYWN0aW9uU2hlZXQpO1xuICAgICAgICB9XG4gICAgICAgIGFjdGlvblNoZWV0LmhlYWRlciA9IG9wdGlvbnMucHJvbXB0TGFiZWxIZWFkZXIgfHwgJ1Bob3RvJztcbiAgICAgICAgYWN0aW9uU2hlZXQuY2FuY2VsYWJsZSA9IGZhbHNlO1xuICAgICAgICBhY3Rpb25TaGVldC5vcHRpb25zID0gW3tcbiAgICAgICAgICB0aXRsZTogb3B0aW9ucy5wcm9tcHRMYWJlbFBob3RvIHx8ICdGcm9tIFBob3RvcydcbiAgICAgICAgfSwge1xuICAgICAgICAgIHRpdGxlOiBvcHRpb25zLnByb21wdExhYmVsUGljdHVyZSB8fCAnVGFrZSBQaWN0dXJlJ1xuICAgICAgICB9XTtcbiAgICAgICAgYWN0aW9uU2hlZXQuYWRkRXZlbnRMaXN0ZW5lcignb25TZWxlY3Rpb24nLCBhc3luYyBlID0+IHtcbiAgICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBlLmRldGFpbDtcbiAgICAgICAgICBpZiAoc2VsZWN0aW9uID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmZpbGVJbnB1dEV4cGVyaWVuY2Uob3B0aW9ucywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jYW1lcmFFeHBlcmllbmNlKG9wdGlvbnMsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2FtZXJhRXhwZXJpZW5jZShvcHRpb25zLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGFzeW5jIHBpY2tJbWFnZXMoX29wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYXN5bmMtcHJvbWlzZS1leGVjdXRvclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLm11bHRpcGxlRmlsZUlucHV0RXhwZXJpZW5jZShyZXNvbHZlLCByZWplY3QpO1xuICAgIH0pO1xuICB9XG4gIGFzeW5jIGNhbWVyYUV4cGVyaWVuY2Uob3B0aW9ucywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgaWYgKGN1c3RvbUVsZW1lbnRzLmdldCgncHdhLWNhbWVyYS1tb2RhbCcpKSB7XG4gICAgICBjb25zdCBjYW1lcmFNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3B3YS1jYW1lcmEtbW9kYWwnKTtcbiAgICAgIGNhbWVyYU1vZGFsLmZhY2luZ01vZGUgPSBvcHRpb25zLmRpcmVjdGlvbiA9PT0gQ2FtZXJhRGlyZWN0aW9uLkZyb250ID8gJ3VzZXInIDogJ2Vudmlyb25tZW50JztcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FtZXJhTW9kYWwpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgY2FtZXJhTW9kYWwuY29tcG9uZW50T25SZWFkeSgpO1xuICAgICAgICBjYW1lcmFNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdvblBob3RvJywgYXN5bmMgZSA9PiB7XG4gICAgICAgICAgY29uc3QgcGhvdG8gPSBlLmRldGFpbDtcbiAgICAgICAgICBpZiAocGhvdG8gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJlamVjdChuZXcgQ2FwYWNpdG9yRXhjZXB0aW9uKCdVc2VyIGNhbmNlbGxlZCBwaG90b3MgYXBwJykpO1xuICAgICAgICAgIH0gZWxzZSBpZiAocGhvdG8gaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgcmVqZWN0KHBob3RvKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzb2x2ZShhd2FpdCB0aGlzLl9nZXRDYW1lcmFQaG90byhwaG90bywgb3B0aW9ucykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYW1lcmFNb2RhbC5kaXNtaXNzKCk7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjYW1lcmFNb2RhbCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjYW1lcmFNb2RhbC5wcmVzZW50KCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRoaXMuZmlsZUlucHV0RXhwZXJpZW5jZShvcHRpb25zLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBVbmFibGUgdG8gbG9hZCBQV0EgRWxlbWVudCAncHdhLWNhbWVyYS1tb2RhbCcuIFNlZSB0aGUgZG9jczogaHR0cHM6Ly9jYXBhY2l0b3Jqcy5jb20vZG9jcy93ZWIvcHdhLWVsZW1lbnRzLmApO1xuICAgICAgdGhpcy5maWxlSW5wdXRFeHBlcmllbmNlKG9wdGlvbnMsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgfVxuICB9XG4gIGZpbGVJbnB1dEV4cGVyaWVuY2Uob3B0aW9ucywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgbGV0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19jYXBhY2l0b3ItY2FtZXJhLWlucHV0Jyk7XG4gICAgY29uc3QgY2xlYW51cCA9ICgpID0+IHtcbiAgICAgIHZhciBfYTtcbiAgICAgIChfYSA9IGlucHV0LnBhcmVudE5vZGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZW1vdmVDaGlsZChpbnB1dCk7XG4gICAgfTtcbiAgICBpZiAoIWlucHV0KSB7XG4gICAgICBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICBpbnB1dC5pZCA9ICdfY2FwYWNpdG9yLWNhbWVyYS1pbnB1dCc7XG4gICAgICBpbnB1dC50eXBlID0gJ2ZpbGUnO1xuICAgICAgaW5wdXQuaGlkZGVuID0gdHJ1ZTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgX2UgPT4ge1xuICAgICAgICBjb25zdCBmaWxlID0gaW5wdXQuZmlsZXNbMF07XG4gICAgICAgIGxldCBmb3JtYXQgPSAnanBlZyc7XG4gICAgICAgIGlmIChmaWxlLnR5cGUgPT09ICdpbWFnZS9wbmcnKSB7XG4gICAgICAgICAgZm9ybWF0ID0gJ3BuZyc7XG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZS50eXBlID09PSAnaW1hZ2UvZ2lmJykge1xuICAgICAgICAgIGZvcm1hdCA9ICdnaWYnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLnJlc3VsdFR5cGUgPT09ICdkYXRhVXJsJyB8fCBvcHRpb25zLnJlc3VsdFR5cGUgPT09ICdiYXNlNjQnKSB7XG4gICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnJlc3VsdFR5cGUgPT09ICdkYXRhVXJsJykge1xuICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICBkYXRhVXJsOiByZWFkZXIucmVzdWx0LFxuICAgICAgICAgICAgICAgIGZvcm1hdFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5yZXN1bHRUeXBlID09PSAnYmFzZTY0Jykge1xuICAgICAgICAgICAgICBjb25zdCBiNjQgPSByZWFkZXIucmVzdWx0LnNwbGl0KCcsJylbMV07XG4gICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgIGJhc2U2NFN0cmluZzogYjY0LFxuICAgICAgICAgICAgICAgIGZvcm1hdFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgIHdlYlBhdGg6IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSksXG4gICAgICAgICAgICBmb3JtYXQ6IGZvcm1hdFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjYW5jZWwnLCBfZSA9PiB7XG4gICAgICAgIHJlamVjdChuZXcgQ2FwYWNpdG9yRXhjZXB0aW9uKCdVc2VyIGNhbmNlbGxlZCBwaG90b3MgYXBwJykpO1xuICAgICAgICBjbGVhbnVwKCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaW5wdXQuYWNjZXB0ID0gJ2ltYWdlLyonO1xuICAgIGlucHV0LmNhcHR1cmUgPSB0cnVlO1xuICAgIGlmIChvcHRpb25zLnNvdXJjZSA9PT0gQ2FtZXJhU291cmNlLlBob3RvcyB8fCBvcHRpb25zLnNvdXJjZSA9PT0gQ2FtZXJhU291cmNlLlByb21wdCkge1xuICAgICAgaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdjYXB0dXJlJyk7XG4gICAgfSBlbHNlIGlmIChvcHRpb25zLmRpcmVjdGlvbiA9PT0gQ2FtZXJhRGlyZWN0aW9uLkZyb250KSB7XG4gICAgICBpbnB1dC5jYXB0dXJlID0gJ3VzZXInO1xuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5kaXJlY3Rpb24gPT09IENhbWVyYURpcmVjdGlvbi5SZWFyKSB7XG4gICAgICBpbnB1dC5jYXB0dXJlID0gJ2Vudmlyb25tZW50JztcbiAgICB9XG4gICAgaW5wdXQuY2xpY2soKTtcbiAgfVxuICBtdWx0aXBsZUZpbGVJbnB1dEV4cGVyaWVuY2UocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgbGV0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19jYXBhY2l0b3ItY2FtZXJhLWlucHV0LW11bHRpcGxlJyk7XG4gICAgY29uc3QgY2xlYW51cCA9ICgpID0+IHtcbiAgICAgIHZhciBfYTtcbiAgICAgIChfYSA9IGlucHV0LnBhcmVudE5vZGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZW1vdmVDaGlsZChpbnB1dCk7XG4gICAgfTtcbiAgICBpZiAoIWlucHV0KSB7XG4gICAgICBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICBpbnB1dC5pZCA9ICdfY2FwYWNpdG9yLWNhbWVyYS1pbnB1dC1tdWx0aXBsZSc7XG4gICAgICBpbnB1dC50eXBlID0gJ2ZpbGUnO1xuICAgICAgaW5wdXQuaGlkZGVuID0gdHJ1ZTtcbiAgICAgIGlucHV0Lm11bHRpcGxlID0gdHJ1ZTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgX2UgPT4ge1xuICAgICAgICBjb25zdCBwaG90b3MgPSBbXTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9wcmVmZXItZm9yLW9mXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXQuZmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBmaWxlID0gaW5wdXQuZmlsZXNbaV07XG4gICAgICAgICAgbGV0IGZvcm1hdCA9ICdqcGVnJztcbiAgICAgICAgICBpZiAoZmlsZS50eXBlID09PSAnaW1hZ2UvcG5nJykge1xuICAgICAgICAgICAgZm9ybWF0ID0gJ3BuZyc7XG4gICAgICAgICAgfSBlbHNlIGlmIChmaWxlLnR5cGUgPT09ICdpbWFnZS9naWYnKSB7XG4gICAgICAgICAgICBmb3JtYXQgPSAnZ2lmJztcbiAgICAgICAgICB9XG4gICAgICAgICAgcGhvdG9zLnB1c2goe1xuICAgICAgICAgICAgd2ViUGF0aDogVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKSxcbiAgICAgICAgICAgIGZvcm1hdDogZm9ybWF0XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgcGhvdG9zXG4gICAgICAgIH0pO1xuICAgICAgICBjbGVhbnVwKCk7XG4gICAgICB9KTtcbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbmNlbCcsIF9lID0+IHtcbiAgICAgICAgcmVqZWN0KG5ldyBDYXBhY2l0b3JFeGNlcHRpb24oJ1VzZXIgY2FuY2VsbGVkIHBob3RvcyBhcHAnKSk7XG4gICAgICAgIGNsZWFudXAoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpbnB1dC5hY2NlcHQgPSAnaW1hZ2UvKic7XG4gICAgaW5wdXQuY2xpY2soKTtcbiAgfVxuICBfZ2V0Q2FtZXJhUGhvdG8ocGhvdG8sIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgIGNvbnN0IGZvcm1hdCA9IHBob3RvLnR5cGUuc3BsaXQoJy8nKVsxXTtcbiAgICAgIGlmIChvcHRpb25zLnJlc3VsdFR5cGUgPT09ICd1cmknKSB7XG4gICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgIHdlYlBhdGg6IFVSTC5jcmVhdGVPYmplY3RVUkwocGhvdG8pLFxuICAgICAgICAgIGZvcm1hdDogZm9ybWF0LFxuICAgICAgICAgIHNhdmVkOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKHBob3RvKTtcbiAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcbiAgICAgICAgICBjb25zdCByID0gcmVhZGVyLnJlc3VsdDtcbiAgICAgICAgICBpZiAob3B0aW9ucy5yZXN1bHRUeXBlID09PSAnZGF0YVVybCcpIHtcbiAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICBkYXRhVXJsOiByLFxuICAgICAgICAgICAgICBmb3JtYXQ6IGZvcm1hdCxcbiAgICAgICAgICAgICAgc2F2ZWQ6IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgIGJhc2U2NFN0cmluZzogci5zcGxpdCgnLCcpWzFdLFxuICAgICAgICAgICAgICBmb3JtYXQ6IGZvcm1hdCxcbiAgICAgICAgICAgICAgc2F2ZWQ6IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJlYWRlci5vbmVycm9yID0gZSA9PiB7XG4gICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGFzeW5jIGNoZWNrUGVybWlzc2lvbnMoKSB7XG4gICAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgPT09ICd1bmRlZmluZWQnIHx8ICFuYXZpZ2F0b3IucGVybWlzc2lvbnMpIHtcbiAgICAgIHRocm93IHRoaXMudW5hdmFpbGFibGUoJ1Blcm1pc3Npb25zIEFQSSBub3QgYXZhaWxhYmxlIGluIHRoaXMgYnJvd3NlcicpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1Blcm1pc3Npb25zL3F1ZXJ5XG4gICAgICAvLyB0aGUgc3BlY2lmaWMgcGVybWlzc2lvbnMgdGhhdCBhcmUgc3VwcG9ydGVkIHZhcmllcyBhbW9uZyBicm93c2VycyB0aGF0IGltcGxlbWVudCB0aGVcbiAgICAgIC8vIHBlcm1pc3Npb25zIEFQSSwgc28gd2UgbmVlZCBhIHRyeS9jYXRjaCBpbiBjYXNlICdjYW1lcmEnIGlzIGludmFsaWRcbiAgICAgIGNvbnN0IHBlcm1pc3Npb24gPSBhd2FpdCB3aW5kb3cubmF2aWdhdG9yLnBlcm1pc3Npb25zLnF1ZXJ5KHtcbiAgICAgICAgbmFtZTogJ2NhbWVyYSdcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY2FtZXJhOiBwZXJtaXNzaW9uLnN0YXRlLFxuICAgICAgICBwaG90b3M6ICdncmFudGVkJ1xuICAgICAgfTtcbiAgICB9IGNhdGNoIChfYSkge1xuICAgICAgdGhyb3cgdGhpcy51bmF2YWlsYWJsZSgnQ2FtZXJhIHBlcm1pc3Npb25zIGFyZSBub3QgYXZhaWxhYmxlIGluIHRoaXMgYnJvd3NlcicpO1xuICAgIH1cbiAgfVxuICBhc3luYyByZXF1ZXN0UGVybWlzc2lvbnMoKSB7XG4gICAgdGhyb3cgdGhpcy51bmltcGxlbWVudGVkKCdOb3QgaW1wbGVtZW50ZWQgb24gd2ViLicpO1xuICB9XG4gIGFzeW5jIHBpY2tMaW1pdGVkTGlicmFyeVBob3RvcygpIHtcbiAgICB0aHJvdyB0aGlzLnVuYXZhaWxhYmxlKCdOb3QgaW1wbGVtZW50ZWQgb24gd2ViLicpO1xuICB9XG4gIGFzeW5jIGdldExpbWl0ZWRMaWJyYXJ5UGhvdG9zKCkge1xuICAgIHRocm93IHRoaXMudW5hdmFpbGFibGUoJ05vdCBpbXBsZW1lbnRlZCBvbiB3ZWIuJyk7XG4gIH1cbn1cbmNvbnN0IENhbWVyYSA9IG5ldyBDYW1lcmFXZWIoKTtcbmV4cG9ydCB7IENhbWVyYSB9O1xuIiwiaW1wb3J0IHsgcmVnaXN0ZXJQbHVnaW4gfSBmcm9tICdAY2FwYWNpdG9yL2NvcmUnO1xuaW1wb3J0IHsgQ2FtZXJhV2ViIH0gZnJvbSAnLi93ZWInO1xuY29uc3QgQ2FtZXJhID0gcmVnaXN0ZXJQbHVnaW4oJ0NhbWVyYScsIHtcbiAgd2ViOiAoKSA9PiBuZXcgQ2FtZXJhV2ViKClcbn0pO1xuZXhwb3J0ICogZnJvbSAnLi9kZWZpbml0aW9ucyc7XG5leHBvcnQgeyBDYW1lcmEgfTtcbiIsImltcG9ydCB7IHJlZ2lzdGVyUGx1Z2luIH0gZnJvbSAnQGNhcGFjaXRvci9jb3JlJztcbmltcG9ydCB7IGV4cG9zZVN5bmFwc2UgfSBmcm9tICdAY2FwYWNpdG9yL3N5bmFwc2UnO1xuY29uc3QgRmlsZXN5c3RlbSA9IHJlZ2lzdGVyUGx1Z2luKCdGaWxlc3lzdGVtJywge1xuICB3ZWI6ICgpID0+IGltcG9ydCgnLi93ZWInKS50aGVuKG0gPT4gbmV3IG0uRmlsZXN5c3RlbVdlYigpKVxufSk7XG5leHBvc2VTeW5hcHNlKCk7XG5leHBvcnQgKiBmcm9tICcuL2RlZmluaXRpb25zJztcbmV4cG9ydCB7IEZpbGVzeXN0ZW0gfTtcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHtcbiAgQ2FtZXJhLFxuICBDYW1lcmFEaXJlY3Rpb24sXG4gIENhbWVyYVJlc3VsdFR5cGUsXG4gIENhbWVyYVNvdXJjZSxcbiAgUGhvdG8sXG59IGZyb20gJ0BjYXBhY2l0b3IvY2FtZXJhJ1xuaW1wb3J0IHsgRmlsZXN5c3RlbSwgRGlyZWN0b3J5IH0gZnJvbSAnQGNhcGFjaXRvci9maWxlc3lzdGVtJ1xuaW1wb3J0IHsgRmlsZVVwbG9hZFNlcnZpY2UgfSBmcm9tICdzcmMvYXBpLWN5Y2xpc3QnXG5pbXBvcnQgeyBmaXJzdFZhbHVlRnJvbSB9IGZyb20gJ3J4anMnXG5pbXBvcnQgeyBMb2FkaW5nQ29udHJvbGxlciB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJ1xuaW1wb3J0IENvbXByZXNzb3IgZnJvbSAnY29tcHJlc3NvcmpzJ1xuaW1wb3J0IHsgVG9hc3RTZXJ2aWNlLCBUb2FzdFR5cGUgfSBmcm9tICcuL3RvYXN0LnNlcnZpY2UnXG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSdcbmltcG9ydCB7IEVycm9ySGFuZGxlclNlcnZpY2UgfSBmcm9tICcuL2Vycm9yLWhhbmRsZXIuc2VydmljZSdcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE1lZGlhU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdXBsb2FkU2VydmljZTogRmlsZVVwbG9hZFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBsb2FkaW5nQ29udHJvbGxlcjogTG9hZGluZ0NvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSB0b2FzdFNlcnZpY2U6IFRvYXN0U2VydmljZSxcbiAgICBwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBlcnJvckhhbmRsZXI6IEVycm9ySGFuZGxlclNlcnZpY2VcbiAgKSB7fVxuXG4gIC8vIFBob3RvIHNwZWNpZmljIG1ldGhvZHNcbiAgcHJpdmF0ZSBhc3luYyBjYXB0dXJlUGhvdG8oKSB7XG4gICAgcmV0dXJuIGF3YWl0IENhbWVyYS5nZXRQaG90byh7XG4gICAgICByZXN1bHRUeXBlOiBDYW1lcmFSZXN1bHRUeXBlLlVyaSxcbiAgICAgIHNvdXJjZTogQ2FtZXJhU291cmNlLkNhbWVyYSxcbiAgICAgIGRpcmVjdGlvbjogQ2FtZXJhRGlyZWN0aW9uLlJlYXIsXG4gICAgICBzYXZlVG9HYWxsZXJ5OiB0cnVlLFxuICAgICAgcXVhbGl0eTogMTAwLFxuICAgIH0pXG4gIH1cblxuICBhc3luYyBjYXB0dXJlQW5kUHJvY2Vzc1Bob3RvKCk6IFByb21pc2U8eyBwaG90bzogUGhvdG87IGJsb2I6IEJsb2IgfT4ge1xuICAgIGNvbnN0IGNhcHR1cmVkUGhvdG8gPSBhd2FpdCB0aGlzLmNhcHR1cmVQaG90bygpXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChjYXB0dXJlZFBob3RvLndlYlBhdGghKVxuICAgIGNvbnN0IG9yaWdpbmFsQmxvYiA9IGF3YWl0IHJlc3BvbnNlLmJsb2IoKVxuICAgIGNvbnN0IGNvbXByZXNzZWRCbG9iID0gYXdhaXQgdGhpcy5jb21wcmVzc0ZpbGUob3JpZ2luYWxCbG9iKVxuICAgIGlmICghY29tcHJlc3NlZEJsb2IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRmlsZSBjb21wcmVzc2lvbiBmYWlsZWQnKVxuICAgIH1cbiAgICByZXR1cm4geyBwaG90bzogY2FwdHVyZWRQaG90bywgYmxvYjogY29tcHJlc3NlZEJsb2IgfVxuICB9XG5cbiAgLy8gRmlsZSBzcGVjaWZpYyBtZXRob2RzXG4gIGFzeW5jIHNlbGVjdEFuZFByb2Nlc3NGaWxlKCk6IFByb21pc2U8eyB1cmk6IHN0cmluZzsgYmxvYjogQmxvYiB9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IGZpbGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgIGZpbGVJbnB1dC50eXBlID0gJ2ZpbGUnXG4gICAgICBmaWxlSW5wdXQuYWNjZXB0ID0gJ2ltYWdlLyosYXBwbGljYXRpb24vcGRmJ1xuXG4gICAgICBmaWxlSW5wdXQub25jaGFuZ2UgPSBhc3luYyAoZTogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXVxuICAgICAgICBpZiAoIWZpbGUpIHtcbiAgICAgICAgICB0aGlzLnRvYXN0U2VydmljZS5jcmVhdGVXaXRoSnVzdE1lc3NhZ2UoXG4gICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuaW5zdGFudCgnbWVkaWEuZXJyb3Iubm9fZmlsZV9zZWxlY3RlZCcpLFxuICAgICAgICAgICAgVG9hc3RUeXBlLkVycm9yXG4gICAgICAgICAgKVxuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ05vIGZpbGUgc2VsZWN0ZWQnKSlcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgY29tcHJlc3NlZEJsb2IgPSBhd2FpdCB0aGlzLmNvbXByZXNzRmlsZShmaWxlKVxuICAgICAgICAgIGlmICghY29tcHJlc3NlZEJsb2IpIHtcbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0ZpbGUgc2l6ZSBlcnJvcicpKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICAgICAgICByZWFkZXIub25sb2FkID0gYXN5bmMgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJhc2U2NERhdGEgPSAoZS50YXJnZXQ/LnJlc3VsdCBhcyBzdHJpbmcpLnNwbGl0KCcsJylbMV1cblxuICAgICAgICAgICAgY29uc3QgZmlsZU5hbWUgPSBgZmlsZV8ke25ldyBEYXRlKCkuZ2V0VGltZSgpfS4ke2ZpbGUubmFtZVxuICAgICAgICAgICAgICAuc3BsaXQoJy4nKVxuICAgICAgICAgICAgICAucG9wKCl9YFxuICAgICAgICAgICAgYXdhaXQgRmlsZXN5c3RlbS53cml0ZUZpbGUoe1xuICAgICAgICAgICAgICBwYXRoOiBmaWxlTmFtZSxcbiAgICAgICAgICAgICAgZGF0YTogYmFzZTY0RGF0YSxcbiAgICAgICAgICAgICAgZGlyZWN0b3J5OiBEaXJlY3RvcnkuRGF0YSxcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGNvbnN0IHsgdXJpIH0gPSBhd2FpdCBGaWxlc3lzdGVtLmdldFVyaSh7XG4gICAgICAgICAgICAgIHBhdGg6IGZpbGVOYW1lLFxuICAgICAgICAgICAgICBkaXJlY3Rvcnk6IERpcmVjdG9yeS5EYXRhLFxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgIHVyaSxcbiAgICAgICAgICAgICAgYmxvYjogY29tcHJlc3NlZEJsb2IsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICByZWFkZXIub25lcnJvciA9ICgpID0+XG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdFcnJldXIgZGUgbGVjdHVyZSBkdSBmaWNoaWVyJykpXG4gICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoY29tcHJlc3NlZEJsb2IpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgICAgICAgcmVqZWN0KGVycm9yKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZpbGVJbnB1dC5jbGljaygpXG4gICAgfSlcbiAgfVxuXG4gIC8vIFNoYXJlZCBtZXRob2RzXG4gIGFzeW5jIHVwbG9hZE1lZGlhKGJsb2I6IEJsb2IpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIGNvbnN0IGxvYWRpbmcgPSBhd2FpdCB0aGlzLmxvYWRpbmdDb250cm9sbGVyLmNyZWF0ZSh7XG4gICAgICBtZXNzYWdlOiB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuaW5zdGFudCgnbWVkaWEudXBsb2FkaW5nJyksXG4gICAgfSlcbiAgICBhd2FpdCBsb2FkaW5nLnByZXNlbnQoKVxuXG4gICAgY29uc3QgYmFzZTY0U3RyaW5nID0gYXdhaXQgdGhpcy5ibG9iVG9CYXNlNjQoYmxvYilcbiAgICB0cnkge1xuICAgICAgY29uc3QgdXBsb2FkUmVzdWx0ID0gYXdhaXQgZmlyc3RWYWx1ZUZyb20oXG4gICAgICAgIHRoaXMudXBsb2FkU2VydmljZS5maWxlc1VwbG9hZCh7IGJvZHk6IHsgY29udGVudDogYmFzZTY0U3RyaW5nIH0gfSlcbiAgICAgIClcbiAgICAgIGF3YWl0IGxvYWRpbmcuZGlzbWlzcygpXG4gICAgICByZXR1cm4gdXBsb2FkUmVzdWx0LnVybCA/PyAnJ1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBhd2FpdCBsb2FkaW5nLmRpc21pc3MoKVxuICAgICAgdGhpcy5lcnJvckhhbmRsZXIuaGFuZGxlRXJyb3IoZXJyb3IpXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYmxvYlRvQmFzZTY0KGJsb2I6IEJsb2IpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBiYXNlNjRTdHJpbmcgPSByZWFkZXIucmVzdWx0IGFzIHN0cmluZ1xuICAgICAgICByZXNvbHZlKGJhc2U2NFN0cmluZy5zcGxpdCgnLCcpWzFdKVxuICAgICAgfVxuICAgICAgcmVhZGVyLm9uZXJyb3IgPSByZWplY3RcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpXG4gICAgfSlcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgY29tcHJlc3NGaWxlKGZpbGU6IEJsb2IpOiBQcm9taXNlPEJsb2IgfCB1bmRlZmluZWQ+IHtcbiAgICAvLyBTa2lwIGNvbXByZXNzaW9uIGZvciBQREZzXG4gICAgaWYgKGZpbGUudHlwZSA9PT0gJ2FwcGxpY2F0aW9uL3BkZicpIHtcbiAgICAgIGlmIChmaWxlLnNpemUgPiA1OTAwMDAwKSB7XG4gICAgICAgIHRoaXMudG9hc3RTZXJ2aWNlLmNyZWF0ZVdpdGhKdXN0TWVzc2FnZShcbiAgICAgICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuaW5zdGFudCgnbWVkaWEuZXJyb3IuZmlsZV90b29fbGFyZ2UnKSxcbiAgICAgICAgICBUb2FzdFR5cGUuRXJyb3JcbiAgICAgICAgKVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgICB9XG4gICAgICByZXR1cm4gZmlsZVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBuZXcgQ29tcHJlc3NvcihmaWxlLCB7XG4gICAgICAgIHF1YWxpdHk6IDAuOCxcbiAgICAgICAgbWF4V2lkdGg6IDIwMDAsXG4gICAgICAgIG1heEhlaWdodDogMjAwMCxcbiAgICAgICAgc3VjY2VzczogKGNvbXByZXNzZWRGaWxlKSA9PiB7XG4gICAgICAgICAgaWYgKGNvbXByZXNzZWRGaWxlLnNpemUgPiA2ICogMTAyNCAqIDEwMjQpIHtcbiAgICAgICAgICAgIHRoaXMudG9hc3RTZXJ2aWNlLmNyZWF0ZVdpdGhKdXN0TWVzc2FnZShcbiAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQoJ21lZGlhLmVycm9yLmZpbGVfdG9vX2xhcmdlJyksXG4gICAgICAgICAgICAgIFRvYXN0VHlwZS5FcnJvclxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgcmVzb2x2ZSh1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzb2x2ZShjb21wcmVzc2VkRmlsZSlcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IChlcnIpID0+IHtcbiAgICAgICAgICB0aGlzLmVycm9ySGFuZGxlci5oYW5kbGVFcnJvcihlcnIpXG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJQaG90byB7XG4gIGZpbGVwYXRoOiBzdHJpbmdcbiAgd2Vidmlld1BhdGg/OiBzdHJpbmdcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQVVBLEtBQUMsU0FBVSxRQUFRLFNBQVM7QUFDMUIsYUFBTyxZQUFZLFlBQVksT0FBTyxXQUFXLGNBQWMsT0FBTyxVQUFVLFFBQVEsSUFBSSxPQUFPLFdBQVcsY0FBYyxPQUFPLE1BQU0sT0FBTyxPQUFPLEtBQUssU0FBUyxPQUFPLGVBQWUsY0FBYyxhQUFhLFVBQVUsTUFBTSxPQUFPLGFBQWEsUUFBUTtBQUFBLElBQ3BRLEdBQUcsU0FBTSxXQUFZO0FBQ25CO0FBRUEsZUFBUyxRQUFRLFFBQVEsZ0JBQWdCO0FBQ3ZDLFlBQUksT0FBTyxPQUFPLEtBQUssTUFBTTtBQUM3QixZQUFJLE9BQU8sdUJBQXVCO0FBQ2hDLGNBQUksVUFBVSxPQUFPLHNCQUFzQixNQUFNO0FBQ2pELDZCQUFtQixVQUFVLFFBQVEsT0FBTyxTQUFVLEtBQUs7QUFDekQsbUJBQU8sT0FBTyx5QkFBeUIsUUFBUSxHQUFHLEVBQUU7QUFBQSxVQUN0RCxDQUFDLElBQUksS0FBSyxLQUFLLE1BQU0sTUFBTSxPQUFPO0FBQUEsUUFDcEM7QUFDQSxlQUFPO0FBQUEsTUFDVDtBQUNBLGVBQVMsZUFBZSxRQUFRO0FBQzlCLGlCQUFTLElBQUksR0FBRyxJQUFJLFVBQVUsUUFBUSxLQUFLO0FBQ3pDLGNBQUksU0FBUyxRQUFRLFVBQVUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUM7QUFDcEQsY0FBSSxJQUFJLFFBQVEsT0FBTyxNQUFNLEdBQUcsSUFBRSxFQUFFLFFBQVEsU0FBVSxLQUFLO0FBQ3pELDRCQUFnQixRQUFRLEtBQUssT0FBTyxHQUFHLENBQUM7QUFBQSxVQUMxQyxDQUFDLElBQUksT0FBTyw0QkFBNEIsT0FBTyxpQkFBaUIsUUFBUSxPQUFPLDBCQUEwQixNQUFNLENBQUMsSUFBSSxRQUFR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O0FBQ3pDLG1CQUFLLGFBQWEsc0JBQ2hCLEtBQUssaUJBQWlCLFFBQVEsNEJBQTRCLEdBQzFELFVBQVUsS0FBSztBQUVqQixzQkFBUSxNQUFTO0FBQ2pCO1lBQ0Y7QUFDQSxvQkFBUSxjQUFjO1VBQ3hCO1VBQ0EsT0FBTyxDQUFDLFFBQU87QUFDYixpQkFBSyxhQUFhLFlBQVksR0FBRztBQUNqQyxtQkFBTyxHQUFHO1VBQ1o7U0FDRDtNQUNILENBQUM7SUFDSDs7OzttQ0EvSlcsZUFBWSxtQkFBQSxpQkFBQSxHQUFBLG1CQUFBLGlCQUFBLEdBQUEsbUJBQUEsWUFBQSxHQUFBLG1CQUFBLGdCQUFBLEdBQUEsbUJBQUEsbUJBQUEsQ0FBQTtBQUFBO2lGQUFaLGVBQVksU0FBWixjQUFZLFdBQUEsWUFGWCxPQUFNLENBQUE7QUFFZCxJQUFPLGVBQVA7O3NFQUFPLGNBQVksQ0FBQTtVQUh4QjtXQUFXO01BQ1YsWUFBWTtLQUNiOzs7IiwibmFtZXMiOlsibW9kdWxlIiwid2luZG93Iiwic2VsZiIsImlzQmxvYiIsImlzUG9zaXRpdmVOdW1iZXIiLCJGaWxlUmVhZGVyIiwiVVJMIiwiQ29tcHJlc3NvciIsImNhbGxiYWNrIiwiZG9uZSIsIm5leHQiLCJDYW1lcmFTb3VyY2UiLCJDYW1lcmFEaXJlY3Rpb24iLCJDYW1lcmFSZXN1bHRUeXBlIiwiQ2FtZXJhIiwiQ2FtZXJhIiwiZSIsIkNvbXByZXNzb3IiXSwieF9nb29nbGVfaWdub3JlTGlzdCI6WzAsMSwyLDMsNF19
