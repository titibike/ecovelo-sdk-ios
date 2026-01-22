import {
  SupportService
} from "./chunk-HTJXQORL.js";
import {
  HeaderComponent
} from "./chunk-AVAJ3QHV.js";
import "./chunk-K2AWDLYV.js";
import "./chunk-XK4I5MHM.js";
import "./chunk-FOJAXRYS.js";
import "./chunk-SARQRLZR.js";
import {
  addIcons,
  callOutline,
  filterCircleOutline,
  logoWhatsapp,
  mailOutline,
  searchOutline
} from "./chunk-3E6DEK7U.js";
import {
  StorageService
} from "./chunk-U6SJAXLK.js";
import {
  CommonModule,
  Component,
  FormsModule,
  IonAccordion,
  IonAccordionGroup,
  IonButton,
  IonCheckbox,
  IonCol,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonModal2 as IonModal,
  IonRow,
  IonSearchbar,
  IonSkeletonText,
  IonText,
  NgForOf,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  computed,
  map,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-DGENMXJW.js";
import "./chunk-JBNXL77H.js";
import "./chunk-KQEJHESJ.js";
import {
  Capacitor
} from "./chunk-KGBWUDTS.js";
import "./chunk-HYH3NCU4.js";
import "./chunk-DJK765JH.js";
import "./chunk-MCANDFRG.js";
import "./chunk-3T6NUUZ7.js";
import "./chunk-VSCHB6XS.js";
import "./chunk-LHYYZWFK.js";
import "./chunk-2HURGHOF.js";
import "./chunk-WMICZ6Q4.js";
import "./chunk-PWUDMNGE.js";
import "./chunk-EV4ZQC67.js";
import "./chunk-7OBOYUXW.js";
import "./chunk-34HBWEZ3.js";
import {
  __async,
  __spreadValues
} from "./chunk-UESUV5PM.js";

// node_modules/fuse.js/dist/fuse.mjs
function isArray(value) {
  return !Array.isArray ? getTag(value) === "[object Array]" : Array.isArray(value);
}
var INFINITY = 1 / 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  let result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
function toString(value) {
  return value == null ? "" : baseToString(value);
}
function isString(value) {
  return typeof value === "string";
}
function isNumber(value) {
  return typeof value === "number";
}
function isBoolean(value) {
  return value === true || value === false || isObjectLike(value) && getTag(value) == "[object Boolean]";
}
function isObject(value) {
  return typeof value === "object";
}
function isObjectLike(value) {
  return isObject(value) && value !== null;
}
function isDefined(value) {
  return value !== void 0 && value !== null;
}
function isBlank(value) {
  return !value.trim().length;
}
function getTag(value) {
  return value == null ? value === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(value);
}
var INCORRECT_INDEX_TYPE = "Incorrect 'index' type";
var LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = (key) => `Invalid value for key ${key}`;
var PATTERN_LENGTH_TOO_LARGE = (max) => `Pattern length exceeds max of ${max}.`;
var MISSING_KEY_PROPERTY = (name) => `Missing ${name} property in key`;
var INVALID_KEY_WEIGHT_VALUE = (key) => `Property 'weight' in key '${key}' must be a positive integer`;
var hasOwn = Object.prototype.hasOwnProperty;
var KeyStore = class {
  constructor(keys) {
    this._keys = [];
    this._keyMap = {};
    let totalWeight = 0;
    keys.forEach((key) => {
      let obj = createKey(key);
      this._keys.push(obj);
      this._keyMap[obj.id] = obj;
      totalWeight += obj.weight;
    });
    this._keys.forEach((key) => {
      key.weight /= totalWeight;
    });
  }
  get(keyId) {
    return this._keyMap[keyId];
  }
  keys() {
    return this._keys;
  }
  toJSON() {
    return JSON.stringify(this._keys);
  }
};
function createKey(key) {
  let path = null;
  let id = null;
  let src = null;
  let weight = 1;
  let getFn = null;
  if (isString(key) || isArray(key)) {
    src = key;
    path = createKeyPath(key);
    id = createKeyId(key);
  } else {
    if (!hasOwn.call(key, "name")) {
      throw new Error(MISSING_KEY_PROPERTY("name"));
    }
    const name = key.name;
    src = name;
    if (hasOwn.call(key, "weight")) {
      weight = key.weight;
      if (weight <= 0) {
        throw new Error(INVALID_KEY_WEIGHT_VALUE(name));
      }
    }
    path = createKeyPath(name);
    id = createKeyId(name);
    getFn = key.getFn;
  }
  return {
    path,
    id,
    weight,
    src,
    getFn
  };
}
function createKeyPath(key) {
  return isArray(key) ? key : key.split(".");
}
function createKeyId(key) {
  return isArray(key) ? key.join(".") : key;
}
function get(obj, path) {
  let list = [];
  let arr = false;
  const deepGet = (obj2, path2, index) => {
    if (!isDefined(obj2)) {
      return;
    }
    if (!path2[index]) {
      list.push(obj2);
    } else {
      let key = path2[index];
      const value = obj2[key];
      if (!isDefined(value)) {
        return;
      }
      if (index === path2.length - 1 && (isString(value) || isNumber(value) || isBoolean(value))) {
        list.push(toString(value));
      } else if (isArray(value)) {
        arr = true;
        for (let i = 0, len = value.length; i < len; i += 1) {
          deepGet(value[i], path2, index + 1);
        }
      } else if (path2.length) {
        deepGet(value, path2, index + 1);
      }
    }
  };
  deepGet(obj, isString(path) ? path.split(".") : path, 0);
  return arr ? list : list[0];
}
var MatchOptions = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: false,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: false,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
};
var BasicOptions = {
  // When `true`, the algorithm continues searching to the end of the input even if a perfect
  // match is found before the end of the same input.
  isCaseSensitive: false,
  // When `true`, the algorithm will ignore diacritics (accents) in comparisons
  ignoreDiacritics: false,
  // When true, the matching function will continue to the end of a search pattern even if
  includeScore: false,
  // List of properties that will be searched. This also supports nested properties.
  keys: [],
  // Whether to sort the result list, by score
  shouldSort: true,
  // Default sort function: sort by ascending score, ascending index
  sortFn: (a, b) => a.score === b.score ? a.idx < b.idx ? -1 : 1 : a.score < b.score ? -1 : 1
};
var FuzzyOptions = {
  // Approximately where in the text is the pattern expected to be found?
  location: 0,
  // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
  // (of both letters and location), a threshold of '1.0' would match anything.
  threshold: 0.6,
  // Determines how close the match must be to the fuzzy location (specified above).
  // An exact letter match which is 'distance' characters away from the fuzzy location
  // would score as a complete mismatch. A distance of '0' requires the match be at
  // the exact location specified, a threshold of '1000' would require a perfect match
  // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
  distance: 100
};
var AdvancedOptions = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: false,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: get,
  // When `true`, search will ignore `location` and `distance`, so it won't matter
  // where in the string the pattern appears.
  // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
  ignoreLocation: false,
  // When `true`, the calculation for the relevance score (used for sorting) will
  // ignore the field-length norm.
  // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
  ignoreFieldNorm: false,
  // The weight to determine how much field length norm effects scoring.
  fieldNormWeight: 1
};
var Config = __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, BasicOptions), MatchOptions), FuzzyOptions), AdvancedOptions);
var SPACE = /[^ ]+/g;
function norm(weight = 1, mantissa = 3) {
  const cache = /* @__PURE__ */ new Map();
  const m = Math.pow(10, mantissa);
  return {
    get(value) {
      const numTokens = value.match(SPACE).length;
      if (cache.has(numTokens)) {
        return cache.get(numTokens);
      }
      const norm2 = 1 / Math.pow(numTokens, 0.5 * weight);
      const n = parseFloat(Math.round(norm2 * m) / m);
      cache.set(numTokens, n);
      return n;
    },
    clear() {
      cache.clear();
    }
  };
}
var FuseIndex = class {
  constructor({
    getFn = Config.getFn,
    fieldNormWeight = Config.fieldNormWeight
  } = {}) {
    this.norm = norm(fieldNormWeight, 3);
    this.getFn = getFn;
    this.isCreated = false;
    this.setIndexRecords();
  }
  setSources(docs = []) {
    this.docs = docs;
  }
  setIndexRecords(records = []) {
    this.records = records;
  }
  setKeys(keys = []) {
    this.keys = keys;
    this._keysMap = {};
    keys.forEach((key, idx) => {
      this._keysMap[key.id] = idx;
    });
  }
  create() {
    if (this.isCreated || !this.docs.length) {
      return;
    }
    this.isCreated = true;
    if (isString(this.docs[0])) {
      this.docs.forEach((doc, docIndex) => {
        this._addString(doc, docIndex);
      });
    } else {
      this.docs.forEach((doc, docIndex) => {
        this._addObject(doc, docIndex);
      });
    }
    this.norm.clear();
  }
  // Adds a doc to the end of the index
  add(doc) {
    const idx = this.size();
    if (isString(doc)) {
      this._addString(doc, idx);
    } else {
      this._addObject(doc, idx);
    }
  }
  // Removes the doc at the specified index of the index
  removeAt(idx) {
    this.records.splice(idx, 1);
    for (let i = idx, len = this.size(); i < len; i += 1) {
      this.records[i].i -= 1;
    }
  }
  getValueForItemAtKeyId(item, keyId) {
    return item[this._keysMap[keyId]];
  }
  size() {
    return this.records.length;
  }
  _addString(doc, docIndex) {
    if (!isDefined(doc) || isBlank(doc)) {
      return;
    }
    let record = {
      v: doc,
      i: docIndex,
      n: this.norm.get(doc)
    };
    this.records.push(record);
  }
  _addObject(doc, docIndex) {
    let record = {
      i: docIndex,
      $: {}
    };
    this.keys.forEach((key, keyIndex) => {
      let value = key.getFn ? key.getFn(doc) : this.getFn(doc, key.path);
      if (!isDefined(value)) {
        return;
      }
      if (isArray(value)) {
        let subRecords = [];
        const stack = [{
          nestedArrIndex: -1,
          value
        }];
        while (stack.length) {
          const {
            nestedArrIndex,
            value: value2
          } = stack.pop();
          if (!isDefined(value2)) {
            continue;
          }
          if (isString(value2) && !isBlank(value2)) {
            let subRecord = {
              v: value2,
              i: nestedArrIndex,
              n: this.norm.get(value2)
            };
            subRecords.push(subRecord);
          } else if (isArray(value2)) {
            value2.forEach((item, k) => {
              stack.push({
                nestedArrIndex: k,
                value: item
              });
            });
          } else ;
        }
        record.$[keyIndex] = subRecords;
      } else if (isString(value) && !isBlank(value)) {
        let subRecord = {
          v: value,
          n: this.norm.get(value)
        };
        record.$[keyIndex] = subRecord;
      }
    });
    this.records.push(record);
  }
  toJSON() {
    return {
      keys: this.keys,
      records: this.records
    };
  }
};
function createIndex(keys, docs, {
  getFn = Config.getFn,
  fieldNormWeight = Config.fieldNormWeight
} = {}) {
  const myIndex = new FuseIndex({
    getFn,
    fieldNormWeight
  });
  myIndex.setKeys(keys.map(createKey));
  myIndex.setSources(docs);
  myIndex.create();
  return myIndex;
}
function parseIndex(data, {
  getFn = Config.getFn,
  fieldNormWeight = Config.fieldNormWeight
} = {}) {
  const {
    keys,
    records
  } = data;
  const myIndex = new FuseIndex({
    getFn,
    fieldNormWeight
  });
  myIndex.setKeys(keys);
  myIndex.setIndexRecords(records);
  return myIndex;
}
function computeScore$1(pattern, {
  errors = 0,
  currentLocation = 0,
  expectedLocation = 0,
  distance = Config.distance,
  ignoreLocation = Config.ignoreLocation
} = {}) {
  const accuracy = errors / pattern.length;
  if (ignoreLocation) {
    return accuracy;
  }
  const proximity = Math.abs(expectedLocation - currentLocation);
  if (!distance) {
    return proximity ? 1 : accuracy;
  }
  return accuracy + proximity / distance;
}
function convertMaskToIndices(matchmask = [], minMatchCharLength = Config.minMatchCharLength) {
  let indices = [];
  let start = -1;
  let end = -1;
  let i = 0;
  for (let len = matchmask.length; i < len; i += 1) {
    let match = matchmask[i];
    if (match && start === -1) {
      start = i;
    } else if (!match && start !== -1) {
      end = i - 1;
      if (end - start + 1 >= minMatchCharLength) {
        indices.push([start, end]);
      }
      start = -1;
    }
  }
  if (matchmask[i - 1] && i - start >= minMatchCharLength) {
    indices.push([start, i - 1]);
  }
  return indices;
}
var MAX_BITS = 32;
function search(text, pattern, patternAlphabet, {
  location = Config.location,
  distance = Config.distance,
  threshold = Config.threshold,
  findAllMatches = Config.findAllMatches,
  minMatchCharLength = Config.minMatchCharLength,
  includeMatches = Config.includeMatches,
  ignoreLocation = Config.ignoreLocation
} = {}) {
  if (pattern.length > MAX_BITS) {
    throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS));
  }
  const patternLen = pattern.length;
  const textLen = text.length;
  const expectedLocation = Math.max(0, Math.min(location, textLen));
  let currentThreshold = threshold;
  let bestLocation = expectedLocation;
  const computeMatches = minMatchCharLength > 1 || includeMatches;
  const matchMask = computeMatches ? Array(textLen) : [];
  let index;
  while ((index = text.indexOf(pattern, bestLocation)) > -1) {
    let score = computeScore$1(pattern, {
      currentLocation: index,
      expectedLocation,
      distance,
      ignoreLocation
    });
    currentThreshold = Math.min(score, currentThreshold);
    bestLocation = index + patternLen;
    if (computeMatches) {
      let i = 0;
      while (i < patternLen) {
        matchMask[index + i] = 1;
        i += 1;
      }
    }
  }
  bestLocation = -1;
  let lastBitArr = [];
  let finalScore = 1;
  let binMax = patternLen + textLen;
  const mask = 1 << patternLen - 1;
  for (let i = 0; i < patternLen; i += 1) {
    let binMin = 0;
    let binMid = binMax;
    while (binMin < binMid) {
      const score2 = computeScore$1(pattern, {
        errors: i,
        currentLocation: expectedLocation + binMid,
        expectedLocation,
        distance,
        ignoreLocation
      });
      if (score2 <= currentThreshold) {
        binMin = binMid;
      } else {
        binMax = binMid;
      }
      binMid = Math.floor((binMax - binMin) / 2 + binMin);
    }
    binMax = binMid;
    let start = Math.max(1, expectedLocation - binMid + 1);
    let finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen;
    let bitArr = Array(finish + 2);
    bitArr[finish + 1] = (1 << i) - 1;
    for (let j = finish; j >= start; j -= 1) {
      let currentLocation = j - 1;
      let charMatch = patternAlphabet[text.charAt(currentLocation)];
      if (computeMatches) {
        matchMask[currentLocation] = +!!charMatch;
      }
      bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch;
      if (i) {
        bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
      }
      if (bitArr[j] & mask) {
        finalScore = computeScore$1(pattern, {
          errors: i,
          currentLocation,
          expectedLocation,
          distance,
          ignoreLocation
        });
        if (finalScore <= currentThreshold) {
          currentThreshold = finalScore;
          bestLocation = currentLocation;
          if (bestLocation <= expectedLocation) {
            break;
          }
          start = Math.max(1, 2 * expectedLocation - bestLocation);
        }
      }
    }
    const score = computeScore$1(pattern, {
      errors: i + 1,
      currentLocation: expectedLocation,
      expectedLocation,
      distance,
      ignoreLocation
    });
    if (score > currentThreshold) {
      break;
    }
    lastBitArr = bitArr;
  }
  const result = {
    isMatch: bestLocation >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(1e-3, finalScore)
  };
  if (computeMatches) {
    const indices = convertMaskToIndices(matchMask, minMatchCharLength);
    if (!indices.length) {
      result.isMatch = false;
    } else if (includeMatches) {
      result.indices = indices;
    }
  }
  return result;
}
function createPatternAlphabet(pattern) {
  let mask = {};
  for (let i = 0, len = pattern.length; i < len; i += 1) {
    const char = pattern.charAt(i);
    mask[char] = (mask[char] || 0) | 1 << len - i - 1;
  }
  return mask;
}
var stripDiacritics = String.prototype.normalize ? (str) => str.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "") : (str) => str;
var BitapSearch = class {
  constructor(pattern, {
    location = Config.location,
    threshold = Config.threshold,
    distance = Config.distance,
    includeMatches = Config.includeMatches,
    findAllMatches = Config.findAllMatches,
    minMatchCharLength = Config.minMatchCharLength,
    isCaseSensitive = Config.isCaseSensitive,
    ignoreDiacritics = Config.ignoreDiacritics,
    ignoreLocation = Config.ignoreLocation
  } = {}) {
    this.options = {
      location,
      threshold,
      distance,
      includeMatches,
      findAllMatches,
      minMatchCharLength,
      isCaseSensitive,
      ignoreDiacritics,
      ignoreLocation
    };
    pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
    pattern = ignoreDiacritics ? stripDiacritics(pattern) : pattern;
    this.pattern = pattern;
    this.chunks = [];
    if (!this.pattern.length) {
      return;
    }
    const addChunk = (pattern2, startIndex) => {
      this.chunks.push({
        pattern: pattern2,
        alphabet: createPatternAlphabet(pattern2),
        startIndex
      });
    };
    const len = this.pattern.length;
    if (len > MAX_BITS) {
      let i = 0;
      const remainder = len % MAX_BITS;
      const end = len - remainder;
      while (i < end) {
        addChunk(this.pattern.substr(i, MAX_BITS), i);
        i += MAX_BITS;
      }
      if (remainder) {
        const startIndex = len - MAX_BITS;
        addChunk(this.pattern.substr(startIndex), startIndex);
      }
    } else {
      addChunk(this.pattern, 0);
    }
  }
  searchIn(text) {
    const {
      isCaseSensitive,
      ignoreDiacritics,
      includeMatches
    } = this.options;
    text = isCaseSensitive ? text : text.toLowerCase();
    text = ignoreDiacritics ? stripDiacritics(text) : text;
    if (this.pattern === text) {
      let result2 = {
        isMatch: true,
        score: 0
      };
      if (includeMatches) {
        result2.indices = [[0, text.length - 1]];
      }
      return result2;
    }
    const {
      location,
      distance,
      threshold,
      findAllMatches,
      minMatchCharLength,
      ignoreLocation
    } = this.options;
    let allIndices = [];
    let totalScore = 0;
    let hasMatches = false;
    this.chunks.forEach(({
      pattern,
      alphabet,
      startIndex
    }) => {
      const {
        isMatch,
        score,
        indices
      } = search(text, pattern, alphabet, {
        location: location + startIndex,
        distance,
        threshold,
        findAllMatches,
        minMatchCharLength,
        includeMatches,
        ignoreLocation
      });
      if (isMatch) {
        hasMatches = true;
      }
      totalScore += score;
      if (isMatch && indices) {
        allIndices = [...allIndices, ...indices];
      }
    });
    let result = {
      isMatch: hasMatches,
      score: hasMatches ? totalScore / this.chunks.length : 1
    };
    if (hasMatches && includeMatches) {
      result.indices = allIndices;
    }
    return result;
  }
};
var BaseMatch = class {
  constructor(pattern) {
    this.pattern = pattern;
  }
  static isMultiMatch(pattern) {
    return getMatch(pattern, this.multiRegex);
  }
  static isSingleMatch(pattern) {
    return getMatch(pattern, this.singleRegex);
  }
  search() {
  }
};
function getMatch(pattern, exp) {
  const matches = pattern.match(exp);
  return matches ? matches[1] : null;
}
var ExactMatch = class extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "exact";
  }
  static get multiRegex() {
    return /^="(.*)"$/;
  }
  static get singleRegex() {
    return /^=(.*)$/;
  }
  search(text) {
    const isMatch = text === this.pattern;
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
};
var InverseExactMatch = class extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "inverse-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"$/;
  }
  static get singleRegex() {
    return /^!(.*)$/;
  }
  search(text) {
    const index = text.indexOf(this.pattern);
    const isMatch = index === -1;
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    };
  }
};
var PrefixExactMatch = class extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "prefix-exact";
  }
  static get multiRegex() {
    return /^\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^\^(.*)$/;
  }
  search(text) {
    const isMatch = text.startsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
};
var InversePrefixExactMatch = class extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "inverse-prefix-exact";
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^!\^(.*)$/;
  }
  search(text) {
    const isMatch = !text.startsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    };
  }
};
var SuffixExactMatch = class extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "suffix-exact";
  }
  static get multiRegex() {
    return /^"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^(.*)\$$/;
  }
  search(text) {
    const isMatch = text.endsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [text.length - this.pattern.length, text.length - 1]
    };
  }
};
var InverseSuffixExactMatch = class extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "inverse-suffix-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^!(.*)\$$/;
  }
  search(text) {
    const isMatch = !text.endsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    };
  }
};
var FuzzyMatch = class extends BaseMatch {
  constructor(pattern, {
    location = Config.location,
    threshold = Config.threshold,
    distance = Config.distance,
    includeMatches = Config.includeMatches,
    findAllMatches = Config.findAllMatches,
    minMatchCharLength = Config.minMatchCharLength,
    isCaseSensitive = Config.isCaseSensitive,
    ignoreDiacritics = Config.ignoreDiacritics,
    ignoreLocation = Config.ignoreLocation
  } = {}) {
    super(pattern);
    this._bitapSearch = new BitapSearch(pattern, {
      location,
      threshold,
      distance,
      includeMatches,
      findAllMatches,
      minMatchCharLength,
      isCaseSensitive,
      ignoreDiacritics,
      ignoreLocation
    });
  }
  static get type() {
    return "fuzzy";
  }
  static get multiRegex() {
    return /^"(.*)"$/;
  }
  static get singleRegex() {
    return /^(.*)$/;
  }
  search(text) {
    return this._bitapSearch.searchIn(text);
  }
};
var IncludeMatch = class extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return "include";
  }
  static get multiRegex() {
    return /^'"(.*)"$/;
  }
  static get singleRegex() {
    return /^'(.*)$/;
  }
  search(text) {
    let location = 0;
    let index;
    const indices = [];
    const patternLen = this.pattern.length;
    while ((index = text.indexOf(this.pattern, location)) > -1) {
      location = index + patternLen;
      indices.push([index, location - 1]);
    }
    const isMatch = !!indices.length;
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices
    };
  }
};
var searchers = [ExactMatch, IncludeMatch, PrefixExactMatch, InversePrefixExactMatch, InverseSuffixExactMatch, SuffixExactMatch, InverseExactMatch, FuzzyMatch];
var searchersLen = searchers.length;
var SPACE_RE = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;
var OR_TOKEN = "|";
function parseQuery(pattern, options = {}) {
  return pattern.split(OR_TOKEN).map((item) => {
    let query = item.trim().split(SPACE_RE).filter((item2) => item2 && !!item2.trim());
    let results = [];
    for (let i = 0, len = query.length; i < len; i += 1) {
      const queryItem = query[i];
      let found = false;
      let idx = -1;
      while (!found && ++idx < searchersLen) {
        const searcher = searchers[idx];
        let token = searcher.isMultiMatch(queryItem);
        if (token) {
          results.push(new searcher(token, options));
          found = true;
        }
      }
      if (found) {
        continue;
      }
      idx = -1;
      while (++idx < searchersLen) {
        const searcher = searchers[idx];
        let token = searcher.isSingleMatch(queryItem);
        if (token) {
          results.push(new searcher(token, options));
          break;
        }
      }
    }
    return results;
  });
}
var MultiMatchSet = /* @__PURE__ */ new Set([FuzzyMatch.type, IncludeMatch.type]);
var ExtendedSearch = class {
  constructor(pattern, {
    isCaseSensitive = Config.isCaseSensitive,
    ignoreDiacritics = Config.ignoreDiacritics,
    includeMatches = Config.includeMatches,
    minMatchCharLength = Config.minMatchCharLength,
    ignoreLocation = Config.ignoreLocation,
    findAllMatches = Config.findAllMatches,
    location = Config.location,
    threshold = Config.threshold,
    distance = Config.distance
  } = {}) {
    this.query = null;
    this.options = {
      isCaseSensitive,
      ignoreDiacritics,
      includeMatches,
      minMatchCharLength,
      findAllMatches,
      ignoreLocation,
      location,
      threshold,
      distance
    };
    pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
    pattern = ignoreDiacritics ? stripDiacritics(pattern) : pattern;
    this.pattern = pattern;
    this.query = parseQuery(this.pattern, this.options);
  }
  static condition(_, options) {
    return options.useExtendedSearch;
  }
  searchIn(text) {
    const query = this.query;
    if (!query) {
      return {
        isMatch: false,
        score: 1
      };
    }
    const {
      includeMatches,
      isCaseSensitive,
      ignoreDiacritics
    } = this.options;
    text = isCaseSensitive ? text : text.toLowerCase();
    text = ignoreDiacritics ? stripDiacritics(text) : text;
    let numMatches = 0;
    let allIndices = [];
    let totalScore = 0;
    for (let i = 0, qLen = query.length; i < qLen; i += 1) {
      const searchers2 = query[i];
      allIndices.length = 0;
      numMatches = 0;
      for (let j = 0, pLen = searchers2.length; j < pLen; j += 1) {
        const searcher = searchers2[j];
        const {
          isMatch,
          indices,
          score
        } = searcher.search(text);
        if (isMatch) {
          numMatches += 1;
          totalScore += score;
          if (includeMatches) {
            const type = searcher.constructor.type;
            if (MultiMatchSet.has(type)) {
              allIndices = [...allIndices, ...indices];
            } else {
              allIndices.push(indices);
            }
          }
        } else {
          totalScore = 0;
          numMatches = 0;
          allIndices.length = 0;
          break;
        }
      }
      if (numMatches) {
        let result = {
          isMatch: true,
          score: totalScore / numMatches
        };
        if (includeMatches) {
          result.indices = allIndices;
        }
        return result;
      }
    }
    return {
      isMatch: false,
      score: 1
    };
  }
};
var registeredSearchers = [];
function register(...args) {
  registeredSearchers.push(...args);
}
function createSearcher(pattern, options) {
  for (let i = 0, len = registeredSearchers.length; i < len; i += 1) {
    let searcherClass = registeredSearchers[i];
    if (searcherClass.condition(pattern, options)) {
      return new searcherClass(pattern, options);
    }
  }
  return new BitapSearch(pattern, options);
}
var LogicalOperator = {
  AND: "$and",
  OR: "$or"
};
var KeyType = {
  PATH: "$path",
  PATTERN: "$val"
};
var isExpression = (query) => !!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);
var isPath = (query) => !!query[KeyType.PATH];
var isLeaf = (query) => !isArray(query) && isObject(query) && !isExpression(query);
var convertToExplicit = (query) => ({
  [LogicalOperator.AND]: Object.keys(query).map((key) => ({
    [key]: query[key]
  }))
});
function parse(query, options, {
  auto = true
} = {}) {
  const next = (query2) => {
    let keys = Object.keys(query2);
    const isQueryPath = isPath(query2);
    if (!isQueryPath && keys.length > 1 && !isExpression(query2)) {
      return next(convertToExplicit(query2));
    }
    if (isLeaf(query2)) {
      const key = isQueryPath ? query2[KeyType.PATH] : keys[0];
      const pattern = isQueryPath ? query2[KeyType.PATTERN] : query2[key];
      if (!isString(pattern)) {
        throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key));
      }
      const obj = {
        keyId: createKeyId(key),
        pattern
      };
      if (auto) {
        obj.searcher = createSearcher(pattern, options);
      }
      return obj;
    }
    let node = {
      children: [],
      operator: keys[0]
    };
    keys.forEach((key) => {
      const value = query2[key];
      if (isArray(value)) {
        value.forEach((item) => {
          node.children.push(next(item));
        });
      }
    });
    return node;
  };
  if (!isExpression(query)) {
    query = convertToExplicit(query);
  }
  return next(query);
}
function computeScore(results, {
  ignoreFieldNorm = Config.ignoreFieldNorm
}) {
  results.forEach((result) => {
    let totalScore = 1;
    result.matches.forEach(({
      key,
      norm: norm2,
      score
    }) => {
      const weight = key ? key.weight : null;
      totalScore *= Math.pow(score === 0 && weight ? Number.EPSILON : score, (weight || 1) * (ignoreFieldNorm ? 1 : norm2));
    });
    result.score = totalScore;
  });
}
function transformMatches(result, data) {
  const matches = result.matches;
  data.matches = [];
  if (!isDefined(matches)) {
    return;
  }
  matches.forEach((match) => {
    if (!isDefined(match.indices) || !match.indices.length) {
      return;
    }
    const {
      indices,
      value
    } = match;
    let obj = {
      indices,
      value
    };
    if (match.key) {
      obj.key = match.key.src;
    }
    if (match.idx > -1) {
      obj.refIndex = match.idx;
    }
    data.matches.push(obj);
  });
}
function transformScore(result, data) {
  data.score = result.score;
}
function format(results, docs, {
  includeMatches = Config.includeMatches,
  includeScore = Config.includeScore
} = {}) {
  const transformers = [];
  if (includeMatches) transformers.push(transformMatches);
  if (includeScore) transformers.push(transformScore);
  return results.map((result) => {
    const {
      idx
    } = result;
    const data = {
      item: docs[idx],
      refIndex: idx
    };
    if (transformers.length) {
      transformers.forEach((transformer) => {
        transformer(result, data);
      });
    }
    return data;
  });
}
var Fuse = class {
  constructor(docs, options = {}, index) {
    this.options = __spreadValues(__spreadValues({}, Config), options);
    if (this.options.useExtendedSearch && false) {
      throw new Error(EXTENDED_SEARCH_UNAVAILABLE);
    }
    this._keyStore = new KeyStore(this.options.keys);
    this.setCollection(docs, index);
  }
  setCollection(docs, index) {
    this._docs = docs;
    if (index && !(index instanceof FuseIndex)) {
      throw new Error(INCORRECT_INDEX_TYPE);
    }
    this._myIndex = index || createIndex(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
  }
  add(doc) {
    if (!isDefined(doc)) {
      return;
    }
    this._docs.push(doc);
    this._myIndex.add(doc);
  }
  remove(predicate = () => false) {
    const results = [];
    for (let i = 0, len = this._docs.length; i < len; i += 1) {
      const doc = this._docs[i];
      if (predicate(doc, i)) {
        this.removeAt(i);
        i -= 1;
        len -= 1;
        results.push(doc);
      }
    }
    return results;
  }
  removeAt(idx) {
    this._docs.splice(idx, 1);
    this._myIndex.removeAt(idx);
  }
  getIndex() {
    return this._myIndex;
  }
  search(query, {
    limit = -1
  } = {}) {
    const {
      includeMatches,
      includeScore,
      shouldSort,
      sortFn,
      ignoreFieldNorm
    } = this.options;
    let results = isString(query) ? isString(this._docs[0]) ? this._searchStringList(query) : this._searchObjectList(query) : this._searchLogical(query);
    computeScore(results, {
      ignoreFieldNorm
    });
    if (shouldSort) {
      results.sort(sortFn);
    }
    if (isNumber(limit) && limit > -1) {
      results = results.slice(0, limit);
    }
    return format(results, this._docs, {
      includeMatches,
      includeScore
    });
  }
  _searchStringList(query) {
    const searcher = createSearcher(query, this.options);
    const {
      records
    } = this._myIndex;
    const results = [];
    records.forEach(({
      v: text,
      i: idx,
      n: norm2
    }) => {
      if (!isDefined(text)) {
        return;
      }
      const {
        isMatch,
        score,
        indices
      } = searcher.searchIn(text);
      if (isMatch) {
        results.push({
          item: text,
          idx,
          matches: [{
            score,
            value: text,
            norm: norm2,
            indices
          }]
        });
      }
    });
    return results;
  }
  _searchLogical(query) {
    const expression = parse(query, this.options);
    const evaluate = (node, item, idx) => {
      if (!node.children) {
        const {
          keyId,
          searcher
        } = node;
        const matches = this._findMatches({
          key: this._keyStore.get(keyId),
          value: this._myIndex.getValueForItemAtKeyId(item, keyId),
          searcher
        });
        if (matches && matches.length) {
          return [{
            idx,
            item,
            matches
          }];
        }
        return [];
      }
      const res = [];
      for (let i = 0, len = node.children.length; i < len; i += 1) {
        const child = node.children[i];
        const result = evaluate(child, item, idx);
        if (result.length) {
          res.push(...result);
        } else if (node.operator === LogicalOperator.AND) {
          return [];
        }
      }
      return res;
    };
    const records = this._myIndex.records;
    const resultMap = {};
    const results = [];
    records.forEach(({
      $: item,
      i: idx
    }) => {
      if (isDefined(item)) {
        let expResults = evaluate(expression, item, idx);
        if (expResults.length) {
          if (!resultMap[idx]) {
            resultMap[idx] = {
              idx,
              item,
              matches: []
            };
            results.push(resultMap[idx]);
          }
          expResults.forEach(({
            matches
          }) => {
            resultMap[idx].matches.push(...matches);
          });
        }
      }
    });
    return results;
  }
  _searchObjectList(query) {
    const searcher = createSearcher(query, this.options);
    const {
      keys,
      records
    } = this._myIndex;
    const results = [];
    records.forEach(({
      $: item,
      i: idx
    }) => {
      if (!isDefined(item)) {
        return;
      }
      let matches = [];
      keys.forEach((key, keyIndex) => {
        matches.push(...this._findMatches({
          key,
          value: item[keyIndex],
          searcher
        }));
      });
      if (matches.length) {
        results.push({
          idx,
          item,
          matches
        });
      }
    });
    return results;
  }
  _findMatches({
    key,
    value,
    searcher
  }) {
    if (!isDefined(value)) {
      return [];
    }
    let matches = [];
    if (isArray(value)) {
      value.forEach(({
        v: text,
        i: idx,
        n: norm2
      }) => {
        if (!isDefined(text)) {
          return;
        }
        const {
          isMatch,
          score,
          indices
        } = searcher.searchIn(text);
        if (isMatch) {
          matches.push({
            score,
            key,
            value: text,
            idx,
            norm: norm2,
            indices
          });
        }
      });
    } else {
      const {
        v: text,
        n: norm2
      } = value;
      const {
        isMatch,
        score,
        indices
      } = searcher.searchIn(text);
      if (isMatch) {
        matches.push({
          score,
          key,
          value: text,
          norm: norm2,
          indices
        });
      }
    }
    return matches;
  }
};
Fuse.version = "7.1.0";
Fuse.createIndex = createIndex;
Fuse.parseIndex = parseIndex;
Fuse.config = Config;
{
  Fuse.parseQuery = parse;
}
{
  register(ExtendedSearch);
}

// src/app/pages/account/support/support.page.ts
var _c0 = () => [];
var _forTrack0 = ($index, $item) => $item.question;
function SupportPage_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const hours_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", hours_r1, " ");
  }
}
function SupportPage_Conditional_38_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item")(1, "ion-label")(2, "h3");
    \u0275\u0275element(3, "ion-skeleton-text", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275element(5, "ion-skeleton-text", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275element(7, "ion-skeleton-text", 24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("animated", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("animated", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("animated", true);
  }
}
function SupportPage_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list");
    \u0275\u0275template(1, SupportPage_Conditional_38_ion_item_1_Template, 8, 3, "ion-item", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c0).constructor(ctx_r1.skeletonCount));
  }
}
function SupportPage_Conditional_39_ng_template_2_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item", 29)(1, "ion-checkbox", 30);
    \u0275\u0275listener("ionChange", function SupportPage_Conditional_39_ng_template_2_For_11_Template_ion_checkbox_ionChange_1_listener($event) {
      const category_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleCategory(category_r5, $event.detail.checked));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const category_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.selectedCategories.has(category_r5));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", category_r5, " ");
  }
}
function SupportPage_Conditional_39_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "ion-list", 28)(2, "ion-list-header")(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "ion-item", 29)(7, "ion-checkbox", 30);
    \u0275\u0275listener("ionChange", function SupportPage_Conditional_39_ng_template_2_Template_ion_checkbox_ionChange_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleAll(!ctx_r1.isAllSelected()));
    });
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(10, SupportPage_Conditional_39_ng_template_2_For_11_Template, 3, 2, "ion-item", 29, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, "support.faq.select_categories"));
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", ctx_r1.isAllSelected());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 5, "support.faq.all_none"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.getUniqueCategories());
  }
}
function SupportPage_Conditional_39_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "support.faq.no_results"));
  }
}
function SupportPage_Conditional_39_Conditional_4_For_1_Conditional_0_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-accordion", 33)(1, "ion-item", 34)(2, "ion-label");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "ion-item", 35)(5, "ion-label")(6, "small");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const faq_r6 = ctx.$implicit;
    \u0275\u0275propertyInterpolate("value", faq_r6.question);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(faq_r6.question);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(faq_r6.answer);
  }
}
function SupportPage_Conditional_39_Conditional_4_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list", 31)(1, "ion-list-header", 32)(2, "h5")(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "ion-accordion-group");
    \u0275\u0275repeaterCreate(6, SupportPage_Conditional_39_Conditional_4_For_1_Conditional_0_For_7_Template, 8, 3, "ion-accordion", 33, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const category_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(category_r7);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.getFaqByCategory(category_r7));
  }
}
function SupportPage_Conditional_39_Conditional_4_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SupportPage_Conditional_39_Conditional_4_For_1_Conditional_0_Template, 8, 1, "ion-list", 31);
  }
  if (rf & 2) {
    const category_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r1.selectedCategories.has(category_r7) && ctx_r1.getFaqByCategory(category_r7).length > 0 ? 0 : -1);
  }
}
function SupportPage_Conditional_39_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SupportPage_Conditional_39_Conditional_4_For_1_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r1.getUniqueCategories());
  }
}
function SupportPage_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-modal", 25, 0);
    \u0275\u0275template(2, SupportPage_Conditional_39_ng_template_2_Template, 12, 7, "ng-template");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, SupportPage_Conditional_39_Conditional_3_Template, 4, 3, "div", 26)(4, SupportPage_Conditional_39_Conditional_4_Template, 2, 0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.getFilteredFaq().length === 0 ? 3 : 4);
  }
}
var _SupportPage = class _SupportPage {
  formatTimeSlot(slot, format2) {
    if (!slot || !slot.open || !slot.close) {
      return this.translate.instant("support.opening_hours.closed");
    }
    const openTime = this.formatTime(slot.open, format2);
    const closeTime = this.formatTime(slot.close, format2);
    return this.translate.instant("support.opening_hours.time_slot", {
      open: openTime,
      close: closeTime
    });
  }
  formatTime(time, format2) {
    if (!time)
      return "";
    const [hours, minutes] = time.split(":");
    return format2.replace("HH", hours).replace("mm", minutes);
  }
  constructor(supportService, storage, translate) {
    this.supportService = supportService;
    this.storage = storage;
    this.translate = translate;
    this.searchQuery = "";
    this.skeletonCount = 6;
    this.selectedCategories = /* @__PURE__ */ new Set();
    this.fuse = null;
    this.program = signal(null);
    this.currentLang = signal(this.translate.currentLang);
    this.getDayHours = computed(() => {
      var _a, _b, _c;
      const program = this.program();
      const lang = this.currentLang();
      const format2 = this.translate.instant("support.opening_hours.format");
      const openingHours = (_c = (_b = (_a = program == null ? void 0 : program.config) == null ? void 0 : _a.hotline) == null ? void 0 : _b.opening_hours) == null ? void 0 : _c.weekdays;
      if (!openingHours) {
        return [];
      }
      const groups = [];
      let currentGroup = null;
      const orderedDays = ["1", "2", "3", "4", "5", "6", "0"];
      for (const dayKey of orderedDays) {
        const dayName = `support.opening_hours.days.${dayKey}`;
        const slot = openingHours[dayKey];
        const hours = this.formatTimeSlot(slot, format2);
        if (!currentGroup) {
          currentGroup = { start: dayName, end: dayName, hours };
        } else if (currentGroup.hours === hours) {
          currentGroup.end = dayName;
        } else {
          groups.push(currentGroup);
          currentGroup = { start: dayName, end: dayName, hours };
        }
      }
      if (currentGroup) {
        groups.push(currentGroup);
      }
      return groups.map((group) => {
        if (group.start === group.end) {
          return `${this.translate.instant(group.start)} : ${group.hours}`;
        }
        return `${this.translate.instant("support.opening_hours.from")} ${this.translate.instant(group.start)} ${this.translate.instant("support.opening_hours.to")} ${this.translate.instant(group.end)} : ${group.hours}`;
      });
    });
    this.getHolidayHours = computed(() => {
      var _a, _b, _c;
      const program = this.program();
      const lang = this.currentLang();
      const format2 = this.translate.instant("support.opening_hours.format");
      const slot = (_c = (_b = (_a = program == null ? void 0 : program.config) == null ? void 0 : _a.hotline) == null ? void 0 : _b.opening_hours) == null ? void 0 : _c.holidays;
      return this.formatTimeSlot(slot, format2);
    });
    addIcons({
      callOutline,
      logoWhatsapp,
      mailOutline,
      searchOutline,
      filterCircleOutline
    });
    this.supportService.faqState.subscribe((state) => {
      this.faqState = state;
      if (state.state === "success") {
        this.fuse = new Fuse(state.faq, {
          keys: ["question", "answer"],
          threshold: 0.3,
          ignoreLocation: true
        });
      }
    });
    this.translate.onLangChange.subscribe((event) => {
      this.currentLang.set(event.lang);
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      var _a, _b, _c;
      const program = yield this.storage.get("program");
      this.program.set(program);
      this.supportService.getFaq();
      this.supportService.faqState.subscribe((state) => {
        if (state.state === "success") {
          this.selectedCategories = /* @__PURE__ */ new Set([
            ...new Set(state.faq.map((item) => item.category))
          ]);
        }
      });
      const openingHours = (_c = (_b = (_a = this.program()) == null ? void 0 : _a.config) == null ? void 0 : _b.hotline) == null ? void 0 : _c.opening_hours;
      if (openingHours) {
        this.openingHoursText$ = this.getFormattedOpeningHours(openingHours);
      }
    });
  }
  getFormattedOpeningHours(openingHours) {
    return this.translate.get("support.opening_hours").pipe(map((translations) => {
      const formattedDays = [];
      for (let i = 0; i <= 6; i++) {
        const dayKey = i.toString();
        const dayName = `support.opening_hours.days.${dayKey}`;
        const slot = openingHours.weekdays[dayKey];
        formattedDays.push(`${this.translate.instant(dayName)} : ${this.formatTimeSlot(slot, translations.format)}`);
      }
      const holidays = `${this.translate.instant("support.opening_hours.days.holidays")} : ${this.formatTimeSlot(openingHours.holidays, translations.format)}`;
      return [...formattedDays, holidays].join("\n");
    }));
  }
  handleSearch(event) {
    return __async(this, null, function* () {
      this.searchQuery = event.target.value;
    });
  }
  toggleCategory(category, isChecked) {
    if (isChecked) {
      this.selectedCategories.add(category);
    } else {
      this.selectedCategories.delete(category);
    }
  }
  getFilteredFaq() {
    if (this.faqState.state !== "success")
      return [];
    let filtered = this.faqState.faq;
    if (this.searchQuery && this.fuse) {
      filtered = this.fuse.search(this.searchQuery).map((result) => result.item);
    }
    filtered = filtered.filter((item) => this.selectedCategories.has(item.category));
    return filtered;
  }
  getFaqByCategory(category) {
    if (this.faqState.state !== "success")
      return [];
    return this.getFilteredFaq().filter((item) => item.category === category);
  }
  getUniqueCategories() {
    if (this.faqState.state !== "success")
      return [];
    return [...new Set(this.faqState.faq.map((item) => item.category))];
  }
  isAllSelected() {
    return this.selectedCategories.size === this.getUniqueCategories().length;
  }
  toggleAll(selectAll) {
    const categories = this.getUniqueCategories();
    if (selectAll) {
      categories.forEach((category) => this.selectedCategories.add(category));
    } else {
      this.selectedCategories.clear();
    }
  }
  scrollToFaq() {
    const element = document.getElementById("faq");
    if (element && Capacitor.isNativePlatform()) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
};
_SupportPage.\u0275fac = function SupportPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SupportPage)(\u0275\u0275directiveInject(SupportService), \u0275\u0275directiveInject(StorageService), \u0275\u0275directiveInject(TranslateService));
};
_SupportPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SupportPage, selectors: [["app-support"]], decls: 40, vars: 25, consts: [["modal", ""], [3, "defaultHref"], [1, "ion-padding"], [1, "ion-justify-content-center"], ["size", "12", "size-md", "8", "size-lg", "6"], [1, "ion-no-margin"], ["lines", "none", 1, "compact-list", "ion-margin-vertical"], [1, "ion-no-padding", "compact-item"], [1, "buttons"], [3, "href"], ["expand", "block", "shape", "round", "color", "primary"], ["name", "call-outline"], ["expand", "block", "shape", "round", "color", "secondary"], ["name", "mail-outline"], ["id", "faq"], [1, "search-container"], ["show-clear-button", "never", 1, "ecl-searchbar", 3, "ionInput", "ionFocus", "click", "placeholder"], [1, "ecl-searchbar-icon"], ["size", "large", "color", "medium", "name", "search-outline"], ["id", "open-custom-dialog", 1, "ecl-searchbar-end_icon"], ["size", "large", "color", "medium", "name", "filter-circle-outline"], [4, "ngFor", "ngForOf"], [2, "width", "80%", 3, "animated"], [2, "width", "60%", 3, "animated"], [2, "width", "30%", 3, "animated"], ["id", "example-modal", "trigger", "open-custom-dialog"], [1, "ion-text-center", "ion-padding"], [1, "wrapper"], ["lines", "none"], ["button", "true", "detail", "false"], [3, "ionChange", "checked"], ["mode", "ios", "lines", "full", 1, "ion-no-margin"], [1, "ion-no-padding", "ion-margin-top"], ["color", "grey", 3, "value"], ["slot", "header", "lines", "full", "inset", "true", "color", "grey"], ["slot", "content", "lines", "full", "inset", "true", "color", "grey"]], template: function SupportPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-header", 1);
    \u0275\u0275elementStart(1, "ion-content", 2)(2, "ion-row", 3)(3, "ion-col", 4)(4, "section")(5, "h1", 5);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ion-list", 6);
    \u0275\u0275repeaterCreate(9, SupportPage_For_10_Template, 2, 1, "ion-item", 7, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementStart(11, "ion-item", 7);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 8)(15, "a", 9)(16, "ion-button", 10);
    \u0275\u0275element(17, "ion-icon", 11);
    \u0275\u0275elementStart(18, "ion-text");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "a", 9)(22, "ion-button", 12);
    \u0275\u0275element(23, "ion-icon", 13);
    \u0275\u0275elementStart(24, "ion-text");
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(27, "section", 14)(28, "h1");
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 15)(32, "ion-searchbar", 16);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275listener("ionInput", function SupportPage_Template_ion_searchbar_ionInput_32_listener($event) {
      return ctx.handleSearch($event);
    })("ionFocus", function SupportPage_Template_ion_searchbar_ionFocus_32_listener() {
      return ctx.scrollToFaq();
    })("click", function SupportPage_Template_ion_searchbar_click_32_listener() {
      return ctx.scrollToFaq();
    });
    \u0275\u0275elementStart(34, "div", 17);
    \u0275\u0275element(35, "ion-icon", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 19);
    \u0275\u0275element(37, "ion-icon", 20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(38, SupportPage_Conditional_38_Template, 2, 2, "ion-list")(39, SupportPage_Conditional_39_Template, 5, 1);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    \u0275\u0275property("defaultHref", "/account");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 13, "support.contact_us"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.getDayHours());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(13, 15, "support.opening_hours.days.holidays"), " : ", ctx.getHolidayHours(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate1("href", "tel:", (tmp_4_0 = ctx.program()) == null ? null : tmp_4_0.config == null ? null : tmp_4_0.config.hotline == null ? null : tmp_4_0.config.hotline.phone_number, "", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 17, "support.call_us"));
    \u0275\u0275advance(2);
    \u0275\u0275property("href", ctx.supportService.generateSupportMailtoLink(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 19, "support.email_us"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 21, "support.faq.title"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(33, 23, "support.faq.search_placeholder"));
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx.faqState.state === "loading" ? 38 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.faqState.state === "success" ? 39 : -1);
  }
}, dependencies: [
  IonContent,
  CommonModule,
  NgForOf,
  FormsModule,
  HeaderComponent,
  IonButton,
  IonIcon,
  IonText,
  IonSearchbar,
  IonList,
  IonItem,
  IonListHeader,
  IonLabel,
  IonAccordion,
  IonAccordionGroup,
  IonSkeletonText,
  IonModal,
  IonCheckbox,
  IonRow,
  IonCol,
  TranslateModule,
  TranslatePipe
], styles: ["\n\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\nion-text[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n#faq[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  border-top: 1px solid var(--ion-color-grey-shade);\n}\nion-modal#example-modal[_ngcontent-%COMP%] {\n  --width: fit-content;\n  --min-width: 250px;\n  --max-width: 80vw;\n  --height: fit-content;\n  --border-radius: 6px;\n  --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);\n}\nion-modal#example-modal[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.compact-list[_ngcontent-%COMP%] {\n  --ion-item-padding-start: 0;\n  --ion-item-padding-end: 0;\n  --ion-item-padding-top: 2px;\n  --ion-item-padding-bottom: 2px;\n}\n.compact-item[_ngcontent-%COMP%] {\n  --min-height: 24px;\n}\n/*# sourceMappingURL=support.page.css.map */"] });
var SupportPage = _SupportPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SupportPage, [{
    type: Component,
    args: [{ selector: "app-support", imports: [
      IonContent,
      CommonModule,
      FormsModule,
      HeaderComponent,
      IonButton,
      IonIcon,
      IonText,
      IonSearchbar,
      IonList,
      IonItem,
      IonListHeader,
      IonLabel,
      IonAccordion,
      IonAccordionGroup,
      IonSkeletonText,
      IonModal,
      IonCheckbox,
      IonRow,
      IonCol,
      TranslateModule
    ], template: `<app-header [defaultHref]="'/account'"></app-header>

<ion-content class="ion-padding">
  <ion-row class="ion-justify-content-center">
    <ion-col size="12" size-md="8" size-lg="6">
      <section>
        <h1 class="ion-no-margin">{{ 'support.contact_us' | translate }}</h1>
        <ion-list lines="none" class="compact-list ion-margin-vertical">
          @for (hours of getDayHours(); track $index) {
          <ion-item class="ion-no-padding compact-item"> {{ hours }} </ion-item>
          }
          <ion-item class="ion-no-padding compact-item">
            {{ 'support.opening_hours.days.holidays' | translate }} : {{
            getHolidayHours() }}
          </ion-item>
        </ion-list>
        <div class="buttons">
          <a href="tel:{{ program()?.config?.hotline?.phone_number }}">
            <ion-button expand="block" shape="round" color="primary">
              <ion-icon name="call-outline"></ion-icon>
              <ion-text>{{ 'support.call_us' | translate }}</ion-text>
            </ion-button>
          </a>
          <!-- WHATSAPPBUTTON -->
          <!-- <ion-button
        expand="block"
        shape="round"
        class="ecl-whatsapp ion-margin-vertical"
      >
        <ion-icon name="logo-whatsapp"></ion-icon>
        <ion-text>Contactez-nous sur WhatsApp</ion-text>
      </ion-button> -->
          <a [href]="supportService.generateSupportMailtoLink()">
            <ion-button expand="block" shape="round" color="secondary">
              <ion-icon name="mail-outline"></ion-icon>
              <ion-text>{{ 'support.email_us' | translate }}</ion-text>
            </ion-button>
          </a>
        </div>
      </section>
      <section id="faq">
        <h1>{{ 'support.faq.title' | translate }}</h1>
        <div class="search-container">
          <ion-searchbar
            [placeholder]="'support.faq.search_placeholder' | translate"
            class="ecl-searchbar"
            show-clear-button="never"
            (ionInput)="handleSearch($event)"
            (ionFocus)="scrollToFaq()"
            (click)="scrollToFaq()"
          >
            <div class="ecl-searchbar-icon">
              <ion-icon
                size="large"
                color="medium"
                name="search-outline"
              ></ion-icon>
            </div>
            <div class="ecl-searchbar-end_icon" id="open-custom-dialog">
              <ion-icon
                size="large"
                color="medium"
                name="filter-circle-outline"
              ></ion-icon>
            </div>
          </ion-searchbar>
        </div>

        @if (faqState.state === 'loading') {
        <ion-list>
          <ion-item *ngFor="let i of [].constructor(skeletonCount)">
            <ion-label>
              <h3>
                <ion-skeleton-text
                  [animated]="true"
                  style="width: 80%"
                ></ion-skeleton-text>
              </h3>
              <p>
                <ion-skeleton-text
                  [animated]="true"
                  style="width: 60%"
                ></ion-skeleton-text>
              </p>
              <p>
                <ion-skeleton-text
                  [animated]="true"
                  style="width: 30%"
                ></ion-skeleton-text>
              </p>
            </ion-label>
          </ion-item>
        </ion-list>
        } @if (faqState.state === 'success') {
        <ion-modal id="example-modal" #modal trigger="open-custom-dialog">
          <ng-template>
            <div class="wrapper">
              <ion-list lines="none">
                <ion-list-header>
                  <h4>{{ 'support.faq.select_categories' | translate }}</h4>
                </ion-list-header>
                <ion-item button="true" detail="false">
                  <ion-checkbox
                    [checked]="isAllSelected()"
                    (ionChange)="toggleAll(!isAllSelected())"
                  >
                    {{ 'support.faq.all_none' | translate }}
                  </ion-checkbox>
                </ion-item>
                @for (category of getUniqueCategories(); track category) {
                <ion-item button="true" detail="false">
                  <ion-checkbox
                    [checked]="selectedCategories.has(category)"
                    (ionChange)="toggleCategory(category, $event.detail.checked)"
                  >
                    {{ category }}
                  </ion-checkbox>
                </ion-item>
                }
              </ion-list>
            </div>
          </ng-template>
        </ion-modal>

        @if (getFilteredFaq().length === 0) {
        <div class="ion-text-center ion-padding">
          <p>{{ 'support.faq.no_results' | translate }}</p>
        </div>
        } @else { @for (category of getUniqueCategories(); track category) { @if
        (selectedCategories.has(category) && getFaqByCategory(category).length >
        0) {
        <ion-list mode="ios" lines="full" class="ion-no-margin">
          <ion-list-header class="ion-no-padding ion-margin-top">
            <h5><strong>{{ category }}</strong></h5>
          </ion-list-header>
          <ion-accordion-group>
            @for (faq of getFaqByCategory(category); track faq.question) {
            <ion-accordion color="grey" value="{{ faq.question }}">
              <ion-item slot="header" lines="full" inset="true" color="grey">
                <ion-label>{{ faq.question }}</ion-label>
              </ion-item>
              <ion-item slot="content" lines="full" inset="true" color="grey">
                <ion-label><small>{{ faq.answer }}</small></ion-label>
              </ion-item>
            </ion-accordion>
            }
          </ion-accordion-group>
        </ion-list>
        } } } }
      </section>
    </ion-col>
  </ion-row>
</ion-content>
`, styles: ["/* src/app/pages/account/support/support.page.scss */\n.buttons {\n  display: flex;\n  flex-direction: column;\n}\na {\n  text-decoration: none;\n}\nion-text {\n  padding-left: 5px;\n}\n#faq {\n  margin-top: 20px;\n  border-top: 1px solid var(--ion-color-grey-shade);\n}\nion-modal#example-modal {\n  --width: fit-content;\n  --min-width: 250px;\n  --max-width: 80vw;\n  --height: fit-content;\n  --border-radius: 6px;\n  --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);\n}\nion-modal#example-modal .wrapper {\n  padding: 20px;\n}\n.compact-list {\n  --ion-item-padding-start: 0;\n  --ion-item-padding-end: 0;\n  --ion-item-padding-top: 2px;\n  --ion-item-padding-bottom: 2px;\n}\n.compact-item {\n  --min-height: 24px;\n}\n/*# sourceMappingURL=support.page.css.map */\n"] }]
  }], () => [{ type: SupportService }, { type: StorageService }, { type: TranslateService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SupportPage, { className: "SupportPage", filePath: "src/app/pages/account/support/support.page.ts", lineNumber: 78 });
})();
export {
  SupportPage
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9mdXNlLmpzL2Rpc3QvZnVzZS5tanMiLCJzcmMvYXBwL3BhZ2VzL2FjY291bnQvc3VwcG9ydC9zdXBwb3J0LnBhZ2UudHMiLCJzcmMvYXBwL3BhZ2VzL2FjY291bnQvc3VwcG9ydC9zdXBwb3J0LnBhZ2UuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEZ1c2UuanMgdjcuMS4wIC0gTGlnaHR3ZWlnaHQgZnV6enktc2VhcmNoIChodHRwOi8vZnVzZWpzLmlvKVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAyNSBLaXJvIFJpc2sgKGh0dHA6Ly9raXJvLm1lKVxuICogQWxsIFJpZ2h0cyBSZXNlcnZlZC4gQXBhY2hlIFNvZnR3YXJlIExpY2Vuc2UgMi4wXG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKi9cblxuZnVuY3Rpb24gaXNBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gIUFycmF5LmlzQXJyYXkgPyBnZXRUYWcodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nIDogQXJyYXkuaXNBcnJheSh2YWx1ZSk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbTogaHR0cHM6Ly9naXRodWIuY29tL2xvZGFzaC9sb2Rhc2gvYmxvYi9tYXN0ZXIvLmludGVybmFsL2Jhc2VUb1N0cmluZy5qc1xuY29uc3QgSU5GSU5JVFkgPSAxIC8gMDtcbmZ1bmN0aW9uIGJhc2VUb1N0cmluZyh2YWx1ZSkge1xuICAvLyBFeGl0IGVhcmx5IGZvciBzdHJpbmdzIHRvIGF2b2lkIGEgcGVyZm9ybWFuY2UgaGl0IGluIHNvbWUgZW52aXJvbm1lbnRzLlxuICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGxldCByZXN1bHQgPSB2YWx1ZSArICcnO1xuICByZXR1cm4gcmVzdWx0ID09ICcwJyAmJiAxIC8gdmFsdWUgPT0gLUlORklOSVRZID8gJy0wJyA6IHJlc3VsdDtcbn1cbmZ1bmN0aW9uIHRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsID8gJycgOiBiYXNlVG9TdHJpbmcodmFsdWUpO1xufVxuZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XG59XG5mdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJztcbn1cblxuLy8gQWRhcHRlZCBmcm9tOiBodHRwczovL2dpdGh1Yi5jb20vbG9kYXNoL2xvZGFzaC9ibG9iL21hc3Rlci9pc0Jvb2xlYW4uanNcbmZ1bmN0aW9uIGlzQm9vbGVhbih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IHRydWUgfHwgdmFsdWUgPT09IGZhbHNlIHx8IGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgZ2V0VGFnKHZhbHVlKSA9PSAnW29iamVjdCBCb29sZWFuXSc7XG59XG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jztcbn1cblxuLy8gQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbHVlKSAmJiB2YWx1ZSAhPT0gbnVsbDtcbn1cbmZ1bmN0aW9uIGlzRGVmaW5lZCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbDtcbn1cbmZ1bmN0aW9uIGlzQmxhbmsodmFsdWUpIHtcbiAgcmV0dXJuICF2YWx1ZS50cmltKCkubGVuZ3RoO1xufVxuXG4vLyBHZXRzIHRoZSBgdG9TdHJpbmdUYWdgIG9mIGB2YWx1ZWAuXG4vLyBBZGFwdGVkIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9sb2Rhc2gvbG9kYXNoL2Jsb2IvbWFzdGVyLy5pbnRlcm5hbC9nZXRUYWcuanNcbmZ1bmN0aW9uIGdldFRhZyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/IHZhbHVlID09PSB1bmRlZmluZWQgPyAnW29iamVjdCBVbmRlZmluZWRdJyA6ICdbb2JqZWN0IE51bGxdJyA6IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5jb25zdCBFWFRFTkRFRF9TRUFSQ0hfVU5BVkFJTEFCTEUgPSAnRXh0ZW5kZWQgc2VhcmNoIGlzIG5vdCBhdmFpbGFibGUnO1xuY29uc3QgSU5DT1JSRUNUX0lOREVYX1RZUEUgPSBcIkluY29ycmVjdCAnaW5kZXgnIHR5cGVcIjtcbmNvbnN0IExPR0lDQUxfU0VBUkNIX0lOVkFMSURfUVVFUllfRk9SX0tFWSA9IGtleSA9PiBgSW52YWxpZCB2YWx1ZSBmb3Iga2V5ICR7a2V5fWA7XG5jb25zdCBQQVRURVJOX0xFTkdUSF9UT09fTEFSR0UgPSBtYXggPT4gYFBhdHRlcm4gbGVuZ3RoIGV4Y2VlZHMgbWF4IG9mICR7bWF4fS5gO1xuY29uc3QgTUlTU0lOR19LRVlfUFJPUEVSVFkgPSBuYW1lID0+IGBNaXNzaW5nICR7bmFtZX0gcHJvcGVydHkgaW4ga2V5YDtcbmNvbnN0IElOVkFMSURfS0VZX1dFSUdIVF9WQUxVRSA9IGtleSA9PiBgUHJvcGVydHkgJ3dlaWdodCcgaW4ga2V5ICcke2tleX0nIG11c3QgYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyYDtcbmNvbnN0IGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5jbGFzcyBLZXlTdG9yZSB7XG4gIGNvbnN0cnVjdG9yKGtleXMpIHtcbiAgICB0aGlzLl9rZXlzID0gW107XG4gICAgdGhpcy5fa2V5TWFwID0ge307XG4gICAgbGV0IHRvdGFsV2VpZ2h0ID0gMDtcbiAgICBrZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGxldCBvYmogPSBjcmVhdGVLZXkoa2V5KTtcbiAgICAgIHRoaXMuX2tleXMucHVzaChvYmopO1xuICAgICAgdGhpcy5fa2V5TWFwW29iai5pZF0gPSBvYmo7XG4gICAgICB0b3RhbFdlaWdodCArPSBvYmoud2VpZ2h0O1xuICAgIH0pO1xuXG4gICAgLy8gTm9ybWFsaXplIHdlaWdodHMgc28gdGhhdCB0aGVpciBzdW0gaXMgZXF1YWwgdG8gMVxuICAgIHRoaXMuX2tleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAga2V5LndlaWdodCAvPSB0b3RhbFdlaWdodDtcbiAgICB9KTtcbiAgfVxuICBnZXQoa2V5SWQpIHtcbiAgICByZXR1cm4gdGhpcy5fa2V5TWFwW2tleUlkXTtcbiAgfVxuICBrZXlzKCkge1xuICAgIHJldHVybiB0aGlzLl9rZXlzO1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5fa2V5cyk7XG4gIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZUtleShrZXkpIHtcbiAgbGV0IHBhdGggPSBudWxsO1xuICBsZXQgaWQgPSBudWxsO1xuICBsZXQgc3JjID0gbnVsbDtcbiAgbGV0IHdlaWdodCA9IDE7XG4gIGxldCBnZXRGbiA9IG51bGw7XG4gIGlmIChpc1N0cmluZyhrZXkpIHx8IGlzQXJyYXkoa2V5KSkge1xuICAgIHNyYyA9IGtleTtcbiAgICBwYXRoID0gY3JlYXRlS2V5UGF0aChrZXkpO1xuICAgIGlkID0gY3JlYXRlS2V5SWQoa2V5KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWhhc093bi5jYWxsKGtleSwgJ25hbWUnKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKE1JU1NJTkdfS0VZX1BST1BFUlRZKCduYW1lJykpO1xuICAgIH1cbiAgICBjb25zdCBuYW1lID0ga2V5Lm5hbWU7XG4gICAgc3JjID0gbmFtZTtcbiAgICBpZiAoaGFzT3duLmNhbGwoa2V5LCAnd2VpZ2h0JykpIHtcbiAgICAgIHdlaWdodCA9IGtleS53ZWlnaHQ7XG4gICAgICBpZiAod2VpZ2h0IDw9IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKElOVkFMSURfS0VZX1dFSUdIVF9WQUxVRShuYW1lKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHBhdGggPSBjcmVhdGVLZXlQYXRoKG5hbWUpO1xuICAgIGlkID0gY3JlYXRlS2V5SWQobmFtZSk7XG4gICAgZ2V0Rm4gPSBrZXkuZ2V0Rm47XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRoLFxuICAgIGlkLFxuICAgIHdlaWdodCxcbiAgICBzcmMsXG4gICAgZ2V0Rm5cbiAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUtleVBhdGgoa2V5KSB7XG4gIHJldHVybiBpc0FycmF5KGtleSkgPyBrZXkgOiBrZXkuc3BsaXQoJy4nKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUtleUlkKGtleSkge1xuICByZXR1cm4gaXNBcnJheShrZXkpID8ga2V5LmpvaW4oJy4nKSA6IGtleTtcbn1cbmZ1bmN0aW9uIGdldChvYmosIHBhdGgpIHtcbiAgbGV0IGxpc3QgPSBbXTtcbiAgbGV0IGFyciA9IGZhbHNlO1xuICBjb25zdCBkZWVwR2V0ID0gKG9iaiwgcGF0aCwgaW5kZXgpID0+IHtcbiAgICBpZiAoIWlzRGVmaW5lZChvYmopKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghcGF0aFtpbmRleF0pIHtcbiAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gcGF0aCBsZWZ0LCB3ZSd2ZSBhcnJpdmVkIGF0IHRoZSBvYmplY3Qgd2UgY2FyZSBhYm91dC5cbiAgICAgIGxpc3QucHVzaChvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQga2V5ID0gcGF0aFtpbmRleF07XG4gICAgICBjb25zdCB2YWx1ZSA9IG9ialtrZXldO1xuICAgICAgaWYgKCFpc0RlZmluZWQodmFsdWUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgd2UncmUgYXQgdGhlIGxhc3QgdmFsdWUgaW4gdGhlIHBhdGgsIGFuZCBpZiBpdCdzIGEgc3RyaW5nL251bWJlci9ib29sLFxuICAgICAgLy8gYWRkIGl0IHRvIHRoZSBsaXN0XG4gICAgICBpZiAoaW5kZXggPT09IHBhdGgubGVuZ3RoIC0gMSAmJiAoaXNTdHJpbmcodmFsdWUpIHx8IGlzTnVtYmVyKHZhbHVlKSB8fCBpc0Jvb2xlYW4odmFsdWUpKSkge1xuICAgICAgICBsaXN0LnB1c2godG9TdHJpbmcodmFsdWUpKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgYXJyID0gdHJ1ZTtcbiAgICAgICAgLy8gU2VhcmNoIGVhY2ggaXRlbSBpbiB0aGUgYXJyYXkuXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB2YWx1ZS5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICAgIGRlZXBHZXQodmFsdWVbaV0sIHBhdGgsIGluZGV4ICsgMSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocGF0aC5sZW5ndGgpIHtcbiAgICAgICAgLy8gQW4gb2JqZWN0LiBSZWN1cnNlIGZ1cnRoZXIuXG4gICAgICAgIGRlZXBHZXQodmFsdWUsIHBhdGgsIGluZGV4ICsgMSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8vIEJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IChzaW5jZSBwYXRoIHVzZWQgdG8gYmUgYSBzdHJpbmcpXG4gIGRlZXBHZXQob2JqLCBpc1N0cmluZyhwYXRoKSA/IHBhdGguc3BsaXQoJy4nKSA6IHBhdGgsIDApO1xuICByZXR1cm4gYXJyID8gbGlzdCA6IGxpc3RbMF07XG59XG5jb25zdCBNYXRjaE9wdGlvbnMgPSB7XG4gIC8vIFdoZXRoZXIgdGhlIG1hdGNoZXMgc2hvdWxkIGJlIGluY2x1ZGVkIGluIHRoZSByZXN1bHQgc2V0LiBXaGVuIGB0cnVlYCwgZWFjaCByZWNvcmQgaW4gdGhlIHJlc3VsdFxuICAvLyBzZXQgd2lsbCBpbmNsdWRlIHRoZSBpbmRpY2VzIG9mIHRoZSBtYXRjaGVkIGNoYXJhY3RlcnMuXG4gIC8vIFRoZXNlIGNhbiBjb25zZXF1ZW50bHkgYmUgdXNlZCBmb3IgaGlnaGxpZ2h0aW5nIHB1cnBvc2VzLlxuICBpbmNsdWRlTWF0Y2hlczogZmFsc2UsXG4gIC8vIFdoZW4gYHRydWVgLCB0aGUgbWF0Y2hpbmcgZnVuY3Rpb24gd2lsbCBjb250aW51ZSB0byB0aGUgZW5kIG9mIGEgc2VhcmNoIHBhdHRlcm4gZXZlbiBpZlxuICAvLyBhIHBlcmZlY3QgbWF0Y2ggaGFzIGFscmVhZHkgYmVlbiBsb2NhdGVkIGluIHRoZSBzdHJpbmcuXG4gIGZpbmRBbGxNYXRjaGVzOiBmYWxzZSxcbiAgLy8gTWluaW11bSBudW1iZXIgb2YgY2hhcmFjdGVycyB0aGF0IG11c3QgYmUgbWF0Y2hlZCBiZWZvcmUgYSByZXN1bHQgaXMgY29uc2lkZXJlZCBhIG1hdGNoXG4gIG1pbk1hdGNoQ2hhckxlbmd0aDogMVxufTtcbmNvbnN0IEJhc2ljT3B0aW9ucyA9IHtcbiAgLy8gV2hlbiBgdHJ1ZWAsIHRoZSBhbGdvcml0aG0gY29udGludWVzIHNlYXJjaGluZyB0byB0aGUgZW5kIG9mIHRoZSBpbnB1dCBldmVuIGlmIGEgcGVyZmVjdFxuICAvLyBtYXRjaCBpcyBmb3VuZCBiZWZvcmUgdGhlIGVuZCBvZiB0aGUgc2FtZSBpbnB1dC5cbiAgaXNDYXNlU2Vuc2l0aXZlOiBmYWxzZSxcbiAgLy8gV2hlbiBgdHJ1ZWAsIHRoZSBhbGdvcml0aG0gd2lsbCBpZ25vcmUgZGlhY3JpdGljcyAoYWNjZW50cykgaW4gY29tcGFyaXNvbnNcbiAgaWdub3JlRGlhY3JpdGljczogZmFsc2UsXG4gIC8vIFdoZW4gdHJ1ZSwgdGhlIG1hdGNoaW5nIGZ1bmN0aW9uIHdpbGwgY29udGludWUgdG8gdGhlIGVuZCBvZiBhIHNlYXJjaCBwYXR0ZXJuIGV2ZW4gaWZcbiAgaW5jbHVkZVNjb3JlOiBmYWxzZSxcbiAgLy8gTGlzdCBvZiBwcm9wZXJ0aWVzIHRoYXQgd2lsbCBiZSBzZWFyY2hlZC4gVGhpcyBhbHNvIHN1cHBvcnRzIG5lc3RlZCBwcm9wZXJ0aWVzLlxuICBrZXlzOiBbXSxcbiAgLy8gV2hldGhlciB0byBzb3J0IHRoZSByZXN1bHQgbGlzdCwgYnkgc2NvcmVcbiAgc2hvdWxkU29ydDogdHJ1ZSxcbiAgLy8gRGVmYXVsdCBzb3J0IGZ1bmN0aW9uOiBzb3J0IGJ5IGFzY2VuZGluZyBzY29yZSwgYXNjZW5kaW5nIGluZGV4XG4gIHNvcnRGbjogKGEsIGIpID0+IGEuc2NvcmUgPT09IGIuc2NvcmUgPyBhLmlkeCA8IGIuaWR4ID8gLTEgOiAxIDogYS5zY29yZSA8IGIuc2NvcmUgPyAtMSA6IDFcbn07XG5jb25zdCBGdXp6eU9wdGlvbnMgPSB7XG4gIC8vIEFwcHJveGltYXRlbHkgd2hlcmUgaW4gdGhlIHRleHQgaXMgdGhlIHBhdHRlcm4gZXhwZWN0ZWQgdG8gYmUgZm91bmQ/XG4gIGxvY2F0aW9uOiAwLFxuICAvLyBBdCB3aGF0IHBvaW50IGRvZXMgdGhlIG1hdGNoIGFsZ29yaXRobSBnaXZlIHVwLiBBIHRocmVzaG9sZCBvZiAnMC4wJyByZXF1aXJlcyBhIHBlcmZlY3QgbWF0Y2hcbiAgLy8gKG9mIGJvdGggbGV0dGVycyBhbmQgbG9jYXRpb24pLCBhIHRocmVzaG9sZCBvZiAnMS4wJyB3b3VsZCBtYXRjaCBhbnl0aGluZy5cbiAgdGhyZXNob2xkOiAwLjYsXG4gIC8vIERldGVybWluZXMgaG93IGNsb3NlIHRoZSBtYXRjaCBtdXN0IGJlIHRvIHRoZSBmdXp6eSBsb2NhdGlvbiAoc3BlY2lmaWVkIGFib3ZlKS5cbiAgLy8gQW4gZXhhY3QgbGV0dGVyIG1hdGNoIHdoaWNoIGlzICdkaXN0YW5jZScgY2hhcmFjdGVycyBhd2F5IGZyb20gdGhlIGZ1enp5IGxvY2F0aW9uXG4gIC8vIHdvdWxkIHNjb3JlIGFzIGEgY29tcGxldGUgbWlzbWF0Y2guIEEgZGlzdGFuY2Ugb2YgJzAnIHJlcXVpcmVzIHRoZSBtYXRjaCBiZSBhdFxuICAvLyB0aGUgZXhhY3QgbG9jYXRpb24gc3BlY2lmaWVkLCBhIHRocmVzaG9sZCBvZiAnMTAwMCcgd291bGQgcmVxdWlyZSBhIHBlcmZlY3QgbWF0Y2hcbiAgLy8gdG8gYmUgd2l0aGluIDgwMCBjaGFyYWN0ZXJzIG9mIHRoZSBmdXp6eSBsb2NhdGlvbiB0byBiZSBmb3VuZCB1c2luZyBhIDAuOCB0aHJlc2hvbGQuXG4gIGRpc3RhbmNlOiAxMDBcbn07XG5jb25zdCBBZHZhbmNlZE9wdGlvbnMgPSB7XG4gIC8vIFdoZW4gYHRydWVgLCBpdCBlbmFibGVzIHRoZSB1c2Ugb2YgdW5peC1saWtlIHNlYXJjaCBjb21tYW5kc1xuICB1c2VFeHRlbmRlZFNlYXJjaDogZmFsc2UsXG4gIC8vIFRoZSBnZXQgZnVuY3Rpb24gdG8gdXNlIHdoZW4gZmV0Y2hpbmcgYW4gb2JqZWN0J3MgcHJvcGVydGllcy5cbiAgLy8gVGhlIGRlZmF1bHQgd2lsbCBzZWFyY2ggbmVzdGVkIHBhdGhzICppZSBmb28uYmFyLmJheipcbiAgZ2V0Rm46IGdldCxcbiAgLy8gV2hlbiBgdHJ1ZWAsIHNlYXJjaCB3aWxsIGlnbm9yZSBgbG9jYXRpb25gIGFuZCBgZGlzdGFuY2VgLCBzbyBpdCB3b24ndCBtYXR0ZXJcbiAgLy8gd2hlcmUgaW4gdGhlIHN0cmluZyB0aGUgcGF0dGVybiBhcHBlYXJzLlxuICAvLyBNb3JlIGluZm86IGh0dHBzOi8vZnVzZWpzLmlvL2NvbmNlcHRzL3Njb3JpbmctdGhlb3J5Lmh0bWwjZnV6emluZXNzLXNjb3JlXG4gIGlnbm9yZUxvY2F0aW9uOiBmYWxzZSxcbiAgLy8gV2hlbiBgdHJ1ZWAsIHRoZSBjYWxjdWxhdGlvbiBmb3IgdGhlIHJlbGV2YW5jZSBzY29yZSAodXNlZCBmb3Igc29ydGluZykgd2lsbFxuICAvLyBpZ25vcmUgdGhlIGZpZWxkLWxlbmd0aCBub3JtLlxuICAvLyBNb3JlIGluZm86IGh0dHBzOi8vZnVzZWpzLmlvL2NvbmNlcHRzL3Njb3JpbmctdGhlb3J5Lmh0bWwjZmllbGQtbGVuZ3RoLW5vcm1cbiAgaWdub3JlRmllbGROb3JtOiBmYWxzZSxcbiAgLy8gVGhlIHdlaWdodCB0byBkZXRlcm1pbmUgaG93IG11Y2ggZmllbGQgbGVuZ3RoIG5vcm0gZWZmZWN0cyBzY29yaW5nLlxuICBmaWVsZE5vcm1XZWlnaHQ6IDFcbn07XG52YXIgQ29uZmlnID0ge1xuICAuLi5CYXNpY09wdGlvbnMsXG4gIC4uLk1hdGNoT3B0aW9ucyxcbiAgLi4uRnV6enlPcHRpb25zLFxuICAuLi5BZHZhbmNlZE9wdGlvbnNcbn07XG5jb25zdCBTUEFDRSA9IC9bXiBdKy9nO1xuXG4vLyBGaWVsZC1sZW5ndGggbm9ybTogdGhlIHNob3J0ZXIgdGhlIGZpZWxkLCB0aGUgaGlnaGVyIHRoZSB3ZWlnaHQuXG4vLyBTZXQgdG8gMyBkZWNpbWFscyB0byByZWR1Y2UgaW5kZXggc2l6ZS5cbmZ1bmN0aW9uIG5vcm0od2VpZ2h0ID0gMSwgbWFudGlzc2EgPSAzKSB7XG4gIGNvbnN0IGNhY2hlID0gbmV3IE1hcCgpO1xuICBjb25zdCBtID0gTWF0aC5wb3coMTAsIG1hbnRpc3NhKTtcbiAgcmV0dXJuIHtcbiAgICBnZXQodmFsdWUpIHtcbiAgICAgIGNvbnN0IG51bVRva2VucyA9IHZhbHVlLm1hdGNoKFNQQUNFKS5sZW5ndGg7XG4gICAgICBpZiAoY2FjaGUuaGFzKG51bVRva2VucykpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlLmdldChudW1Ub2tlbnMpO1xuICAgICAgfVxuXG4gICAgICAvLyBEZWZhdWx0IGZ1bmN0aW9uIGlzIDEvc3FydCh4KSwgd2VpZ2h0IG1ha2VzIHRoYXQgdmFyaWFibGVcbiAgICAgIGNvbnN0IG5vcm0gPSAxIC8gTWF0aC5wb3cobnVtVG9rZW5zLCAwLjUgKiB3ZWlnaHQpO1xuXG4gICAgICAvLyBJbiBwbGFjZSBvZiBgdG9GaXhlZChtYW50aXNzYSlgLCBmb3IgZmFzdGVyIGNvbXB1dGF0aW9uXG4gICAgICBjb25zdCBuID0gcGFyc2VGbG9hdChNYXRoLnJvdW5kKG5vcm0gKiBtKSAvIG0pO1xuICAgICAgY2FjaGUuc2V0KG51bVRva2Vucywgbik7XG4gICAgICByZXR1cm4gbjtcbiAgICB9LFxuICAgIGNsZWFyKCkge1xuICAgICAgY2FjaGUuY2xlYXIoKTtcbiAgICB9XG4gIH07XG59XG5jbGFzcyBGdXNlSW5kZXgge1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgZ2V0Rm4gPSBDb25maWcuZ2V0Rm4sXG4gICAgZmllbGROb3JtV2VpZ2h0ID0gQ29uZmlnLmZpZWxkTm9ybVdlaWdodFxuICB9ID0ge30pIHtcbiAgICB0aGlzLm5vcm0gPSBub3JtKGZpZWxkTm9ybVdlaWdodCwgMyk7XG4gICAgdGhpcy5nZXRGbiA9IGdldEZuO1xuICAgIHRoaXMuaXNDcmVhdGVkID0gZmFsc2U7XG4gICAgdGhpcy5zZXRJbmRleFJlY29yZHMoKTtcbiAgfVxuICBzZXRTb3VyY2VzKGRvY3MgPSBbXSkge1xuICAgIHRoaXMuZG9jcyA9IGRvY3M7XG4gIH1cbiAgc2V0SW5kZXhSZWNvcmRzKHJlY29yZHMgPSBbXSkge1xuICAgIHRoaXMucmVjb3JkcyA9IHJlY29yZHM7XG4gIH1cbiAgc2V0S2V5cyhrZXlzID0gW10pIHtcbiAgICB0aGlzLmtleXMgPSBrZXlzO1xuICAgIHRoaXMuX2tleXNNYXAgPSB7fTtcbiAgICBrZXlzLmZvckVhY2goKGtleSwgaWR4KSA9PiB7XG4gICAgICB0aGlzLl9rZXlzTWFwW2tleS5pZF0gPSBpZHg7XG4gICAgfSk7XG4gIH1cbiAgY3JlYXRlKCkge1xuICAgIGlmICh0aGlzLmlzQ3JlYXRlZCB8fCAhdGhpcy5kb2NzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmlzQ3JlYXRlZCA9IHRydWU7XG5cbiAgICAvLyBMaXN0IGlzIEFycmF5PFN0cmluZz5cbiAgICBpZiAoaXNTdHJpbmcodGhpcy5kb2NzWzBdKSkge1xuICAgICAgdGhpcy5kb2NzLmZvckVhY2goKGRvYywgZG9jSW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy5fYWRkU3RyaW5nKGRvYywgZG9jSW5kZXgpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIExpc3QgaXMgQXJyYXk8T2JqZWN0PlxuICAgICAgdGhpcy5kb2NzLmZvckVhY2goKGRvYywgZG9jSW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy5fYWRkT2JqZWN0KGRvYywgZG9jSW5kZXgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMubm9ybS5jbGVhcigpO1xuICB9XG4gIC8vIEFkZHMgYSBkb2MgdG8gdGhlIGVuZCBvZiB0aGUgaW5kZXhcbiAgYWRkKGRvYykge1xuICAgIGNvbnN0IGlkeCA9IHRoaXMuc2l6ZSgpO1xuICAgIGlmIChpc1N0cmluZyhkb2MpKSB7XG4gICAgICB0aGlzLl9hZGRTdHJpbmcoZG9jLCBpZHgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9hZGRPYmplY3QoZG9jLCBpZHgpO1xuICAgIH1cbiAgfVxuICAvLyBSZW1vdmVzIHRoZSBkb2MgYXQgdGhlIHNwZWNpZmllZCBpbmRleCBvZiB0aGUgaW5kZXhcbiAgcmVtb3ZlQXQoaWR4KSB7XG4gICAgdGhpcy5yZWNvcmRzLnNwbGljZShpZHgsIDEpO1xuXG4gICAgLy8gQ2hhbmdlIHJlZiBpbmRleCBvZiBldmVyeSBzdWJzcXVlbnQgZG9jXG4gICAgZm9yIChsZXQgaSA9IGlkeCwgbGVuID0gdGhpcy5zaXplKCk7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgdGhpcy5yZWNvcmRzW2ldLmkgLT0gMTtcbiAgICB9XG4gIH1cbiAgZ2V0VmFsdWVGb3JJdGVtQXRLZXlJZChpdGVtLCBrZXlJZCkge1xuICAgIHJldHVybiBpdGVtW3RoaXMuX2tleXNNYXBba2V5SWRdXTtcbiAgfVxuICBzaXplKCkge1xuICAgIHJldHVybiB0aGlzLnJlY29yZHMubGVuZ3RoO1xuICB9XG4gIF9hZGRTdHJpbmcoZG9jLCBkb2NJbmRleCkge1xuICAgIGlmICghaXNEZWZpbmVkKGRvYykgfHwgaXNCbGFuayhkb2MpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCByZWNvcmQgPSB7XG4gICAgICB2OiBkb2MsXG4gICAgICBpOiBkb2NJbmRleCxcbiAgICAgIG46IHRoaXMubm9ybS5nZXQoZG9jKVxuICAgIH07XG4gICAgdGhpcy5yZWNvcmRzLnB1c2gocmVjb3JkKTtcbiAgfVxuICBfYWRkT2JqZWN0KGRvYywgZG9jSW5kZXgpIHtcbiAgICBsZXQgcmVjb3JkID0ge1xuICAgICAgaTogZG9jSW5kZXgsXG4gICAgICAkOiB7fVxuICAgIH07XG5cbiAgICAvLyBJdGVyYXRlIG92ZXIgZXZlcnkga2V5IChpLmUsIHBhdGgpLCBhbmQgZmV0Y2ggdGhlIHZhbHVlIGF0IHRoYXQga2V5XG4gICAgdGhpcy5rZXlzLmZvckVhY2goKGtleSwga2V5SW5kZXgpID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGtleS5nZXRGbiA/IGtleS5nZXRGbihkb2MpIDogdGhpcy5nZXRGbihkb2MsIGtleS5wYXRoKTtcbiAgICAgIGlmICghaXNEZWZpbmVkKHZhbHVlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgbGV0IHN1YlJlY29yZHMgPSBbXTtcbiAgICAgICAgY29uc3Qgc3RhY2sgPSBbe1xuICAgICAgICAgIG5lc3RlZEFyckluZGV4OiAtMSxcbiAgICAgICAgICB2YWx1ZVxuICAgICAgICB9XTtcbiAgICAgICAgd2hpbGUgKHN0YWNrLmxlbmd0aCkge1xuICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIG5lc3RlZEFyckluZGV4LFxuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICB9ID0gc3RhY2sucG9wKCk7XG4gICAgICAgICAgaWYgKCFpc0RlZmluZWQodmFsdWUpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiAhaXNCbGFuayh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGxldCBzdWJSZWNvcmQgPSB7XG4gICAgICAgICAgICAgIHY6IHZhbHVlLFxuICAgICAgICAgICAgICBpOiBuZXN0ZWRBcnJJbmRleCxcbiAgICAgICAgICAgICAgbjogdGhpcy5ub3JtLmdldCh2YWx1ZSlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzdWJSZWNvcmRzLnB1c2goc3ViUmVjb3JkKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtLCBrKSA9PiB7XG4gICAgICAgICAgICAgIHN0YWNrLnB1c2goe1xuICAgICAgICAgICAgICAgIG5lc3RlZEFyckluZGV4OiBrLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBpdGVtXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIDtcbiAgICAgICAgfVxuICAgICAgICByZWNvcmQuJFtrZXlJbmRleF0gPSBzdWJSZWNvcmRzO1xuICAgICAgfSBlbHNlIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgIWlzQmxhbmsodmFsdWUpKSB7XG4gICAgICAgIGxldCBzdWJSZWNvcmQgPSB7XG4gICAgICAgICAgdjogdmFsdWUsXG4gICAgICAgICAgbjogdGhpcy5ub3JtLmdldCh2YWx1ZSlcbiAgICAgICAgfTtcbiAgICAgICAgcmVjb3JkLiRba2V5SW5kZXhdID0gc3ViUmVjb3JkO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMucmVjb3Jkcy5wdXNoKHJlY29yZCk7XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICBrZXlzOiB0aGlzLmtleXMsXG4gICAgICByZWNvcmRzOiB0aGlzLnJlY29yZHNcbiAgICB9O1xuICB9XG59XG5mdW5jdGlvbiBjcmVhdGVJbmRleChrZXlzLCBkb2NzLCB7XG4gIGdldEZuID0gQ29uZmlnLmdldEZuLFxuICBmaWVsZE5vcm1XZWlnaHQgPSBDb25maWcuZmllbGROb3JtV2VpZ2h0XG59ID0ge30pIHtcbiAgY29uc3QgbXlJbmRleCA9IG5ldyBGdXNlSW5kZXgoe1xuICAgIGdldEZuLFxuICAgIGZpZWxkTm9ybVdlaWdodFxuICB9KTtcbiAgbXlJbmRleC5zZXRLZXlzKGtleXMubWFwKGNyZWF0ZUtleSkpO1xuICBteUluZGV4LnNldFNvdXJjZXMoZG9jcyk7XG4gIG15SW5kZXguY3JlYXRlKCk7XG4gIHJldHVybiBteUluZGV4O1xufVxuZnVuY3Rpb24gcGFyc2VJbmRleChkYXRhLCB7XG4gIGdldEZuID0gQ29uZmlnLmdldEZuLFxuICBmaWVsZE5vcm1XZWlnaHQgPSBDb25maWcuZmllbGROb3JtV2VpZ2h0XG59ID0ge30pIHtcbiAgY29uc3Qge1xuICAgIGtleXMsXG4gICAgcmVjb3Jkc1xuICB9ID0gZGF0YTtcbiAgY29uc3QgbXlJbmRleCA9IG5ldyBGdXNlSW5kZXgoe1xuICAgIGdldEZuLFxuICAgIGZpZWxkTm9ybVdlaWdodFxuICB9KTtcbiAgbXlJbmRleC5zZXRLZXlzKGtleXMpO1xuICBteUluZGV4LnNldEluZGV4UmVjb3JkcyhyZWNvcmRzKTtcbiAgcmV0dXJuIG15SW5kZXg7XG59XG5mdW5jdGlvbiBjb21wdXRlU2NvcmUkMShwYXR0ZXJuLCB7XG4gIGVycm9ycyA9IDAsXG4gIGN1cnJlbnRMb2NhdGlvbiA9IDAsXG4gIGV4cGVjdGVkTG9jYXRpb24gPSAwLFxuICBkaXN0YW5jZSA9IENvbmZpZy5kaXN0YW5jZSxcbiAgaWdub3JlTG9jYXRpb24gPSBDb25maWcuaWdub3JlTG9jYXRpb25cbn0gPSB7fSkge1xuICBjb25zdCBhY2N1cmFjeSA9IGVycm9ycyAvIHBhdHRlcm4ubGVuZ3RoO1xuICBpZiAoaWdub3JlTG9jYXRpb24pIHtcbiAgICByZXR1cm4gYWNjdXJhY3k7XG4gIH1cbiAgY29uc3QgcHJveGltaXR5ID0gTWF0aC5hYnMoZXhwZWN0ZWRMb2NhdGlvbiAtIGN1cnJlbnRMb2NhdGlvbik7XG4gIGlmICghZGlzdGFuY2UpIHtcbiAgICAvLyBEb2RnZSBkaXZpZGUgYnkgemVybyBlcnJvci5cbiAgICByZXR1cm4gcHJveGltaXR5ID8gMS4wIDogYWNjdXJhY3k7XG4gIH1cbiAgcmV0dXJuIGFjY3VyYWN5ICsgcHJveGltaXR5IC8gZGlzdGFuY2U7XG59XG5mdW5jdGlvbiBjb252ZXJ0TWFza1RvSW5kaWNlcyhtYXRjaG1hc2sgPSBbXSwgbWluTWF0Y2hDaGFyTGVuZ3RoID0gQ29uZmlnLm1pbk1hdGNoQ2hhckxlbmd0aCkge1xuICBsZXQgaW5kaWNlcyA9IFtdO1xuICBsZXQgc3RhcnQgPSAtMTtcbiAgbGV0IGVuZCA9IC0xO1xuICBsZXQgaSA9IDA7XG4gIGZvciAobGV0IGxlbiA9IG1hdGNobWFzay5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgIGxldCBtYXRjaCA9IG1hdGNobWFza1tpXTtcbiAgICBpZiAobWF0Y2ggJiYgc3RhcnQgPT09IC0xKSB7XG4gICAgICBzdGFydCA9IGk7XG4gICAgfSBlbHNlIGlmICghbWF0Y2ggJiYgc3RhcnQgIT09IC0xKSB7XG4gICAgICBlbmQgPSBpIC0gMTtcbiAgICAgIGlmIChlbmQgLSBzdGFydCArIDEgPj0gbWluTWF0Y2hDaGFyTGVuZ3RoKSB7XG4gICAgICAgIGluZGljZXMucHVzaChbc3RhcnQsIGVuZF0pO1xuICAgICAgfVxuICAgICAgc3RhcnQgPSAtMTtcbiAgICB9XG4gIH1cblxuICAvLyAoaS0xIC0gc3RhcnQpICsgMSA9PiBpIC0gc3RhcnRcbiAgaWYgKG1hdGNobWFza1tpIC0gMV0gJiYgaSAtIHN0YXJ0ID49IG1pbk1hdGNoQ2hhckxlbmd0aCkge1xuICAgIGluZGljZXMucHVzaChbc3RhcnQsIGkgLSAxXSk7XG4gIH1cbiAgcmV0dXJuIGluZGljZXM7XG59XG5cbi8vIE1hY2hpbmUgd29yZCBzaXplXG5jb25zdCBNQVhfQklUUyA9IDMyO1xuZnVuY3Rpb24gc2VhcmNoKHRleHQsIHBhdHRlcm4sIHBhdHRlcm5BbHBoYWJldCwge1xuICBsb2NhdGlvbiA9IENvbmZpZy5sb2NhdGlvbixcbiAgZGlzdGFuY2UgPSBDb25maWcuZGlzdGFuY2UsXG4gIHRocmVzaG9sZCA9IENvbmZpZy50aHJlc2hvbGQsXG4gIGZpbmRBbGxNYXRjaGVzID0gQ29uZmlnLmZpbmRBbGxNYXRjaGVzLFxuICBtaW5NYXRjaENoYXJMZW5ndGggPSBDb25maWcubWluTWF0Y2hDaGFyTGVuZ3RoLFxuICBpbmNsdWRlTWF0Y2hlcyA9IENvbmZpZy5pbmNsdWRlTWF0Y2hlcyxcbiAgaWdub3JlTG9jYXRpb24gPSBDb25maWcuaWdub3JlTG9jYXRpb25cbn0gPSB7fSkge1xuICBpZiAocGF0dGVybi5sZW5ndGggPiBNQVhfQklUUykge1xuICAgIHRocm93IG5ldyBFcnJvcihQQVRURVJOX0xFTkdUSF9UT09fTEFSR0UoTUFYX0JJVFMpKTtcbiAgfVxuICBjb25zdCBwYXR0ZXJuTGVuID0gcGF0dGVybi5sZW5ndGg7XG4gIC8vIFNldCBzdGFydGluZyBsb2NhdGlvbiBhdCBiZWdpbm5pbmcgdGV4dCBhbmQgaW5pdGlhbGl6ZSB0aGUgYWxwaGFiZXQuXG4gIGNvbnN0IHRleHRMZW4gPSB0ZXh0Lmxlbmd0aDtcbiAgLy8gSGFuZGxlIHRoZSBjYXNlIHdoZW4gbG9jYXRpb24gPiB0ZXh0Lmxlbmd0aFxuICBjb25zdCBleHBlY3RlZExvY2F0aW9uID0gTWF0aC5tYXgoMCwgTWF0aC5taW4obG9jYXRpb24sIHRleHRMZW4pKTtcbiAgLy8gSGlnaGVzdCBzY29yZSBiZXlvbmQgd2hpY2ggd2UgZ2l2ZSB1cC5cbiAgbGV0IGN1cnJlbnRUaHJlc2hvbGQgPSB0aHJlc2hvbGQ7XG4gIC8vIElzIHRoZXJlIGEgbmVhcmJ5IGV4YWN0IG1hdGNoPyAoc3BlZWR1cClcbiAgbGV0IGJlc3RMb2NhdGlvbiA9IGV4cGVjdGVkTG9jYXRpb247XG5cbiAgLy8gUGVyZm9ybWFuY2U6IG9ubHkgY29tcHV0ZXIgbWF0Y2hlcyB3aGVuIHRoZSBtaW5NYXRjaENoYXJMZW5ndGggPiAxXG4gIC8vIE9SIGlmIGBpbmNsdWRlTWF0Y2hlc2AgaXMgdHJ1ZS5cbiAgY29uc3QgY29tcHV0ZU1hdGNoZXMgPSBtaW5NYXRjaENoYXJMZW5ndGggPiAxIHx8IGluY2x1ZGVNYXRjaGVzO1xuICAvLyBBIG1hc2sgb2YgdGhlIG1hdGNoZXMsIHVzZWQgZm9yIGJ1aWxkaW5nIHRoZSBpbmRpY2VzXG4gIGNvbnN0IG1hdGNoTWFzayA9IGNvbXB1dGVNYXRjaGVzID8gQXJyYXkodGV4dExlbikgOiBbXTtcbiAgbGV0IGluZGV4O1xuXG4gIC8vIEdldCBhbGwgZXhhY3QgbWF0Y2hlcywgaGVyZSBmb3Igc3BlZWQgdXBcbiAgd2hpbGUgKChpbmRleCA9IHRleHQuaW5kZXhPZihwYXR0ZXJuLCBiZXN0TG9jYXRpb24pKSA+IC0xKSB7XG4gICAgbGV0IHNjb3JlID0gY29tcHV0ZVNjb3JlJDEocGF0dGVybiwge1xuICAgICAgY3VycmVudExvY2F0aW9uOiBpbmRleCxcbiAgICAgIGV4cGVjdGVkTG9jYXRpb24sXG4gICAgICBkaXN0YW5jZSxcbiAgICAgIGlnbm9yZUxvY2F0aW9uXG4gICAgfSk7XG4gICAgY3VycmVudFRocmVzaG9sZCA9IE1hdGgubWluKHNjb3JlLCBjdXJyZW50VGhyZXNob2xkKTtcbiAgICBiZXN0TG9jYXRpb24gPSBpbmRleCArIHBhdHRlcm5MZW47XG4gICAgaWYgKGNvbXB1dGVNYXRjaGVzKSB7XG4gICAgICBsZXQgaSA9IDA7XG4gICAgICB3aGlsZSAoaSA8IHBhdHRlcm5MZW4pIHtcbiAgICAgICAgbWF0Y2hNYXNrW2luZGV4ICsgaV0gPSAxO1xuICAgICAgICBpICs9IDE7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gUmVzZXQgdGhlIGJlc3QgbG9jYXRpb25cbiAgYmVzdExvY2F0aW9uID0gLTE7XG4gIGxldCBsYXN0Qml0QXJyID0gW107XG4gIGxldCBmaW5hbFNjb3JlID0gMTtcbiAgbGV0IGJpbk1heCA9IHBhdHRlcm5MZW4gKyB0ZXh0TGVuO1xuICBjb25zdCBtYXNrID0gMSA8PCBwYXR0ZXJuTGVuIC0gMTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXR0ZXJuTGVuOyBpICs9IDEpIHtcbiAgICAvLyBTY2FuIGZvciB0aGUgYmVzdCBtYXRjaDsgZWFjaCBpdGVyYXRpb24gYWxsb3dzIGZvciBvbmUgbW9yZSBlcnJvci5cbiAgICAvLyBSdW4gYSBiaW5hcnkgc2VhcmNoIHRvIGRldGVybWluZSBob3cgZmFyIGZyb20gdGhlIG1hdGNoIGxvY2F0aW9uIHdlIGNhbiBzdHJheVxuICAgIC8vIGF0IHRoaXMgZXJyb3IgbGV2ZWwuXG4gICAgbGV0IGJpbk1pbiA9IDA7XG4gICAgbGV0IGJpbk1pZCA9IGJpbk1heDtcbiAgICB3aGlsZSAoYmluTWluIDwgYmluTWlkKSB7XG4gICAgICBjb25zdCBzY29yZSA9IGNvbXB1dGVTY29yZSQxKHBhdHRlcm4sIHtcbiAgICAgICAgZXJyb3JzOiBpLFxuICAgICAgICBjdXJyZW50TG9jYXRpb246IGV4cGVjdGVkTG9jYXRpb24gKyBiaW5NaWQsXG4gICAgICAgIGV4cGVjdGVkTG9jYXRpb24sXG4gICAgICAgIGRpc3RhbmNlLFxuICAgICAgICBpZ25vcmVMb2NhdGlvblxuICAgICAgfSk7XG4gICAgICBpZiAoc2NvcmUgPD0gY3VycmVudFRocmVzaG9sZCkge1xuICAgICAgICBiaW5NaW4gPSBiaW5NaWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiaW5NYXggPSBiaW5NaWQ7XG4gICAgICB9XG4gICAgICBiaW5NaWQgPSBNYXRoLmZsb29yKChiaW5NYXggLSBiaW5NaW4pIC8gMiArIGJpbk1pbik7XG4gICAgfVxuXG4gICAgLy8gVXNlIHRoZSByZXN1bHQgZnJvbSB0aGlzIGl0ZXJhdGlvbiBhcyB0aGUgbWF4aW11bSBmb3IgdGhlIG5leHQuXG4gICAgYmluTWF4ID0gYmluTWlkO1xuICAgIGxldCBzdGFydCA9IE1hdGgubWF4KDEsIGV4cGVjdGVkTG9jYXRpb24gLSBiaW5NaWQgKyAxKTtcbiAgICBsZXQgZmluaXNoID0gZmluZEFsbE1hdGNoZXMgPyB0ZXh0TGVuIDogTWF0aC5taW4oZXhwZWN0ZWRMb2NhdGlvbiArIGJpbk1pZCwgdGV4dExlbikgKyBwYXR0ZXJuTGVuO1xuXG4gICAgLy8gSW5pdGlhbGl6ZSB0aGUgYml0IGFycmF5XG4gICAgbGV0IGJpdEFyciA9IEFycmF5KGZpbmlzaCArIDIpO1xuICAgIGJpdEFycltmaW5pc2ggKyAxXSA9ICgxIDw8IGkpIC0gMTtcbiAgICBmb3IgKGxldCBqID0gZmluaXNoOyBqID49IHN0YXJ0OyBqIC09IDEpIHtcbiAgICAgIGxldCBjdXJyZW50TG9jYXRpb24gPSBqIC0gMTtcbiAgICAgIGxldCBjaGFyTWF0Y2ggPSBwYXR0ZXJuQWxwaGFiZXRbdGV4dC5jaGFyQXQoY3VycmVudExvY2F0aW9uKV07XG4gICAgICBpZiAoY29tcHV0ZU1hdGNoZXMpIHtcbiAgICAgICAgLy8gU3BlZWQgdXA6IHF1aWNrIGJvb2wgdG8gaW50IGNvbnZlcnNpb24gKGkuZSwgYGNoYXJNYXRjaCA/IDEgOiAwYClcbiAgICAgICAgbWF0Y2hNYXNrW2N1cnJlbnRMb2NhdGlvbl0gPSArISFjaGFyTWF0Y2g7XG4gICAgICB9XG5cbiAgICAgIC8vIEZpcnN0IHBhc3M6IGV4YWN0IG1hdGNoXG4gICAgICBiaXRBcnJbal0gPSAoYml0QXJyW2ogKyAxXSA8PCAxIHwgMSkgJiBjaGFyTWF0Y2g7XG5cbiAgICAgIC8vIFN1YnNlcXVlbnQgcGFzc2VzOiBmdXp6eSBtYXRjaFxuICAgICAgaWYgKGkpIHtcbiAgICAgICAgYml0QXJyW2pdIHw9IChsYXN0Qml0QXJyW2ogKyAxXSB8IGxhc3RCaXRBcnJbal0pIDw8IDEgfCAxIHwgbGFzdEJpdEFycltqICsgMV07XG4gICAgICB9XG4gICAgICBpZiAoYml0QXJyW2pdICYgbWFzaykge1xuICAgICAgICBmaW5hbFNjb3JlID0gY29tcHV0ZVNjb3JlJDEocGF0dGVybiwge1xuICAgICAgICAgIGVycm9yczogaSxcbiAgICAgICAgICBjdXJyZW50TG9jYXRpb24sXG4gICAgICAgICAgZXhwZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgICBkaXN0YW5jZSxcbiAgICAgICAgICBpZ25vcmVMb2NhdGlvblxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBUaGlzIG1hdGNoIHdpbGwgYWxtb3N0IGNlcnRhaW5seSBiZSBiZXR0ZXIgdGhhbiBhbnkgZXhpc3RpbmcgbWF0Y2guXG4gICAgICAgIC8vIEJ1dCBjaGVjayBhbnl3YXkuXG4gICAgICAgIGlmIChmaW5hbFNjb3JlIDw9IGN1cnJlbnRUaHJlc2hvbGQpIHtcbiAgICAgICAgICAvLyBJbmRlZWQgaXQgaXNcbiAgICAgICAgICBjdXJyZW50VGhyZXNob2xkID0gZmluYWxTY29yZTtcbiAgICAgICAgICBiZXN0TG9jYXRpb24gPSBjdXJyZW50TG9jYXRpb247XG5cbiAgICAgICAgICAvLyBBbHJlYWR5IHBhc3NlZCBgbG9jYCwgZG93bmhpbGwgZnJvbSBoZXJlIG9uIGluLlxuICAgICAgICAgIGlmIChiZXN0TG9jYXRpb24gPD0gZXhwZWN0ZWRMb2NhdGlvbikge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gV2hlbiBwYXNzaW5nIGBiZXN0TG9jYXRpb25gLCBkb24ndCBleGNlZWQgb3VyIGN1cnJlbnQgZGlzdGFuY2UgZnJvbSBgZXhwZWN0ZWRMb2NhdGlvbmAuXG4gICAgICAgICAgc3RhcnQgPSBNYXRoLm1heCgxLCAyICogZXhwZWN0ZWRMb2NhdGlvbiAtIGJlc3RMb2NhdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBObyBob3BlIGZvciBhIChiZXR0ZXIpIG1hdGNoIGF0IGdyZWF0ZXIgZXJyb3IgbGV2ZWxzLlxuICAgIGNvbnN0IHNjb3JlID0gY29tcHV0ZVNjb3JlJDEocGF0dGVybiwge1xuICAgICAgZXJyb3JzOiBpICsgMSxcbiAgICAgIGN1cnJlbnRMb2NhdGlvbjogZXhwZWN0ZWRMb2NhdGlvbixcbiAgICAgIGV4cGVjdGVkTG9jYXRpb24sXG4gICAgICBkaXN0YW5jZSxcbiAgICAgIGlnbm9yZUxvY2F0aW9uXG4gICAgfSk7XG4gICAgaWYgKHNjb3JlID4gY3VycmVudFRocmVzaG9sZCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGxhc3RCaXRBcnIgPSBiaXRBcnI7XG4gIH1cbiAgY29uc3QgcmVzdWx0ID0ge1xuICAgIGlzTWF0Y2g6IGJlc3RMb2NhdGlvbiA+PSAwLFxuICAgIC8vIENvdW50IGV4YWN0IG1hdGNoZXMgKHRob3NlIHdpdGggYSBzY29yZSBvZiAwKSB0byBiZSBcImFsbW9zdFwiIGV4YWN0XG4gICAgc2NvcmU6IE1hdGgubWF4KDAuMDAxLCBmaW5hbFNjb3JlKVxuICB9O1xuICBpZiAoY29tcHV0ZU1hdGNoZXMpIHtcbiAgICBjb25zdCBpbmRpY2VzID0gY29udmVydE1hc2tUb0luZGljZXMobWF0Y2hNYXNrLCBtaW5NYXRjaENoYXJMZW5ndGgpO1xuICAgIGlmICghaW5kaWNlcy5sZW5ndGgpIHtcbiAgICAgIHJlc3VsdC5pc01hdGNoID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChpbmNsdWRlTWF0Y2hlcykge1xuICAgICAgcmVzdWx0LmluZGljZXMgPSBpbmRpY2VzO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gY3JlYXRlUGF0dGVybkFscGhhYmV0KHBhdHRlcm4pIHtcbiAgbGV0IG1hc2sgPSB7fTtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHBhdHRlcm4ubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICBjb25zdCBjaGFyID0gcGF0dGVybi5jaGFyQXQoaSk7XG4gICAgbWFza1tjaGFyXSA9IChtYXNrW2NoYXJdIHx8IDApIHwgMSA8PCBsZW4gLSBpIC0gMTtcbiAgfVxuICByZXR1cm4gbWFzaztcbn1cbmNvbnN0IHN0cmlwRGlhY3JpdGljcyA9IFN0cmluZy5wcm90b3R5cGUubm9ybWFsaXplID8gc3RyID0+IHN0ci5ub3JtYWxpemUoJ05GRCcpLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNkZcXHUwNDgzLVxcdTA0ODlcXHUwNTkxLVxcdTA1QkRcXHUwNUJGXFx1MDVDMVxcdTA1QzJcXHUwNUM0XFx1MDVDNVxcdTA1QzdcXHUwNjEwLVxcdTA2MUFcXHUwNjRCLVxcdTA2NUZcXHUwNjcwXFx1MDZENi1cXHUwNkRDXFx1MDZERi1cXHUwNkU0XFx1MDZFN1xcdTA2RThcXHUwNkVBLVxcdTA2RURcXHUwNzExXFx1MDczMC1cXHUwNzRBXFx1MDdBNi1cXHUwN0IwXFx1MDdFQi1cXHUwN0YzXFx1MDdGRFxcdTA4MTYtXFx1MDgxOVxcdTA4MUItXFx1MDgyM1xcdTA4MjUtXFx1MDgyN1xcdTA4MjktXFx1MDgyRFxcdTA4NTktXFx1MDg1QlxcdTA4RDMtXFx1MDhFMVxcdTA4RTMtXFx1MDkwM1xcdTA5M0EtXFx1MDkzQ1xcdTA5M0UtXFx1MDk0RlxcdTA5NTEtXFx1MDk1N1xcdTA5NjJcXHUwOTYzXFx1MDk4MS1cXHUwOTgzXFx1MDlCQ1xcdTA5QkUtXFx1MDlDNFxcdTA5QzdcXHUwOUM4XFx1MDlDQi1cXHUwOUNEXFx1MDlEN1xcdTA5RTJcXHUwOUUzXFx1MDlGRVxcdTBBMDEtXFx1MEEwM1xcdTBBM0NcXHUwQTNFLVxcdTBBNDJcXHUwQTQ3XFx1MEE0OFxcdTBBNEItXFx1MEE0RFxcdTBBNTFcXHUwQTcwXFx1MEE3MVxcdTBBNzVcXHUwQTgxLVxcdTBBODNcXHUwQUJDXFx1MEFCRS1cXHUwQUM1XFx1MEFDNy1cXHUwQUM5XFx1MEFDQi1cXHUwQUNEXFx1MEFFMlxcdTBBRTNcXHUwQUZBLVxcdTBBRkZcXHUwQjAxLVxcdTBCMDNcXHUwQjNDXFx1MEIzRS1cXHUwQjQ0XFx1MEI0N1xcdTBCNDhcXHUwQjRCLVxcdTBCNERcXHUwQjU2XFx1MEI1N1xcdTBCNjJcXHUwQjYzXFx1MEI4MlxcdTBCQkUtXFx1MEJDMlxcdTBCQzYtXFx1MEJDOFxcdTBCQ0EtXFx1MEJDRFxcdTBCRDdcXHUwQzAwLVxcdTBDMDRcXHUwQzNFLVxcdTBDNDRcXHUwQzQ2LVxcdTBDNDhcXHUwQzRBLVxcdTBDNERcXHUwQzU1XFx1MEM1NlxcdTBDNjJcXHUwQzYzXFx1MEM4MS1cXHUwQzgzXFx1MENCQ1xcdTBDQkUtXFx1MENDNFxcdTBDQzYtXFx1MENDOFxcdTBDQ0EtXFx1MENDRFxcdTBDRDVcXHUwQ0Q2XFx1MENFMlxcdTBDRTNcXHUwRDAwLVxcdTBEMDNcXHUwRDNCXFx1MEQzQ1xcdTBEM0UtXFx1MEQ0NFxcdTBENDYtXFx1MEQ0OFxcdTBENEEtXFx1MEQ0RFxcdTBENTdcXHUwRDYyXFx1MEQ2M1xcdTBEODJcXHUwRDgzXFx1MERDQVxcdTBEQ0YtXFx1MERENFxcdTBERDZcXHUwREQ4LVxcdTBEREZcXHUwREYyXFx1MERGM1xcdTBFMzFcXHUwRTM0LVxcdTBFM0FcXHUwRTQ3LVxcdTBFNEVcXHUwRUIxXFx1MEVCNC1cXHUwRUI5XFx1MEVCQlxcdTBFQkNcXHUwRUM4LVxcdTBFQ0RcXHUwRjE4XFx1MEYxOVxcdTBGMzVcXHUwRjM3XFx1MEYzOVxcdTBGM0VcXHUwRjNGXFx1MEY3MS1cXHUwRjg0XFx1MEY4NlxcdTBGODdcXHUwRjhELVxcdTBGOTdcXHUwRjk5LVxcdTBGQkNcXHUwRkM2XFx1MTAyQi1cXHUxMDNFXFx1MTA1Ni1cXHUxMDU5XFx1MTA1RS1cXHUxMDYwXFx1MTA2Mi1cXHUxMDY0XFx1MTA2Ny1cXHUxMDZEXFx1MTA3MS1cXHUxMDc0XFx1MTA4Mi1cXHUxMDhEXFx1MTA4RlxcdTEwOUEtXFx1MTA5RFxcdTEzNUQtXFx1MTM1RlxcdTE3MTItXFx1MTcxNFxcdTE3MzItXFx1MTczNFxcdTE3NTJcXHUxNzUzXFx1MTc3MlxcdTE3NzNcXHUxN0I0LVxcdTE3RDNcXHUxN0REXFx1MTgwQi1cXHUxODBEXFx1MTg4NVxcdTE4ODZcXHUxOEE5XFx1MTkyMC1cXHUxOTJCXFx1MTkzMC1cXHUxOTNCXFx1MUExNy1cXHUxQTFCXFx1MUE1NS1cXHUxQTVFXFx1MUE2MC1cXHUxQTdDXFx1MUE3RlxcdTFBQjAtXFx1MUFCRVxcdTFCMDAtXFx1MUIwNFxcdTFCMzQtXFx1MUI0NFxcdTFCNkItXFx1MUI3M1xcdTFCODAtXFx1MUI4MlxcdTFCQTEtXFx1MUJBRFxcdTFCRTYtXFx1MUJGM1xcdTFDMjQtXFx1MUMzN1xcdTFDRDAtXFx1MUNEMlxcdTFDRDQtXFx1MUNFOFxcdTFDRURcXHUxQ0YyLVxcdTFDRjRcXHUxQ0Y3LVxcdTFDRjlcXHUxREMwLVxcdTFERjlcXHUxREZCLVxcdTFERkZcXHUyMEQwLVxcdTIwRjBcXHUyQ0VGLVxcdTJDRjFcXHUyRDdGXFx1MkRFMC1cXHUyREZGXFx1MzAyQS1cXHUzMDJGXFx1MzA5OVxcdTMwOUFcXHVBNjZGLVxcdUE2NzJcXHVBNjc0LVxcdUE2N0RcXHVBNjlFXFx1QTY5RlxcdUE2RjBcXHVBNkYxXFx1QTgwMlxcdUE4MDZcXHVBODBCXFx1QTgyMy1cXHVBODI3XFx1QTg4MFxcdUE4ODFcXHVBOEI0LVxcdUE4QzVcXHVBOEUwLVxcdUE4RjFcXHVBOEZGXFx1QTkyNi1cXHVBOTJEXFx1QTk0Ny1cXHVBOTUzXFx1QTk4MC1cXHVBOTgzXFx1QTlCMy1cXHVBOUMwXFx1QTlFNVxcdUFBMjktXFx1QUEzNlxcdUFBNDNcXHVBQTRDXFx1QUE0RFxcdUFBN0ItXFx1QUE3RFxcdUFBQjBcXHVBQUIyLVxcdUFBQjRcXHVBQUI3XFx1QUFCOFxcdUFBQkVcXHVBQUJGXFx1QUFDMVxcdUFBRUItXFx1QUFFRlxcdUFBRjVcXHVBQUY2XFx1QUJFMy1cXHVBQkVBXFx1QUJFQ1xcdUFCRURcXHVGQjFFXFx1RkUwMC1cXHVGRTBGXFx1RkUyMC1cXHVGRTJGXS9nLCAnJykgOiBzdHIgPT4gc3RyO1xuY2xhc3MgQml0YXBTZWFyY2gge1xuICBjb25zdHJ1Y3RvcihwYXR0ZXJuLCB7XG4gICAgbG9jYXRpb24gPSBDb25maWcubG9jYXRpb24sXG4gICAgdGhyZXNob2xkID0gQ29uZmlnLnRocmVzaG9sZCxcbiAgICBkaXN0YW5jZSA9IENvbmZpZy5kaXN0YW5jZSxcbiAgICBpbmNsdWRlTWF0Y2hlcyA9IENvbmZpZy5pbmNsdWRlTWF0Y2hlcyxcbiAgICBmaW5kQWxsTWF0Y2hlcyA9IENvbmZpZy5maW5kQWxsTWF0Y2hlcyxcbiAgICBtaW5NYXRjaENoYXJMZW5ndGggPSBDb25maWcubWluTWF0Y2hDaGFyTGVuZ3RoLFxuICAgIGlzQ2FzZVNlbnNpdGl2ZSA9IENvbmZpZy5pc0Nhc2VTZW5zaXRpdmUsXG4gICAgaWdub3JlRGlhY3JpdGljcyA9IENvbmZpZy5pZ25vcmVEaWFjcml0aWNzLFxuICAgIGlnbm9yZUxvY2F0aW9uID0gQ29uZmlnLmlnbm9yZUxvY2F0aW9uXG4gIH0gPSB7fSkge1xuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgdGhyZXNob2xkLFxuICAgICAgZGlzdGFuY2UsXG4gICAgICBpbmNsdWRlTWF0Y2hlcyxcbiAgICAgIGZpbmRBbGxNYXRjaGVzLFxuICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoLFxuICAgICAgaXNDYXNlU2Vuc2l0aXZlLFxuICAgICAgaWdub3JlRGlhY3JpdGljcyxcbiAgICAgIGlnbm9yZUxvY2F0aW9uXG4gICAgfTtcbiAgICBwYXR0ZXJuID0gaXNDYXNlU2Vuc2l0aXZlID8gcGF0dGVybiA6IHBhdHRlcm4udG9Mb3dlckNhc2UoKTtcbiAgICBwYXR0ZXJuID0gaWdub3JlRGlhY3JpdGljcyA/IHN0cmlwRGlhY3JpdGljcyhwYXR0ZXJuKSA6IHBhdHRlcm47XG4gICAgdGhpcy5wYXR0ZXJuID0gcGF0dGVybjtcbiAgICB0aGlzLmNodW5rcyA9IFtdO1xuICAgIGlmICghdGhpcy5wYXR0ZXJuLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBhZGRDaHVuayA9IChwYXR0ZXJuLCBzdGFydEluZGV4KSA9PiB7XG4gICAgICB0aGlzLmNodW5rcy5wdXNoKHtcbiAgICAgICAgcGF0dGVybixcbiAgICAgICAgYWxwaGFiZXQ6IGNyZWF0ZVBhdHRlcm5BbHBoYWJldChwYXR0ZXJuKSxcbiAgICAgICAgc3RhcnRJbmRleFxuICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBsZW4gPSB0aGlzLnBhdHRlcm4ubGVuZ3RoO1xuICAgIGlmIChsZW4gPiBNQVhfQklUUykge1xuICAgICAgbGV0IGkgPSAwO1xuICAgICAgY29uc3QgcmVtYWluZGVyID0gbGVuICUgTUFYX0JJVFM7XG4gICAgICBjb25zdCBlbmQgPSBsZW4gLSByZW1haW5kZXI7XG4gICAgICB3aGlsZSAoaSA8IGVuZCkge1xuICAgICAgICBhZGRDaHVuayh0aGlzLnBhdHRlcm4uc3Vic3RyKGksIE1BWF9CSVRTKSwgaSk7XG4gICAgICAgIGkgKz0gTUFYX0JJVFM7XG4gICAgICB9XG4gICAgICBpZiAocmVtYWluZGVyKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBsZW4gLSBNQVhfQklUUztcbiAgICAgICAgYWRkQ2h1bmsodGhpcy5wYXR0ZXJuLnN1YnN0cihzdGFydEluZGV4KSwgc3RhcnRJbmRleCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZENodW5rKHRoaXMucGF0dGVybiwgMCk7XG4gICAgfVxuICB9XG4gIHNlYXJjaEluKHRleHQpIHtcbiAgICBjb25zdCB7XG4gICAgICBpc0Nhc2VTZW5zaXRpdmUsXG4gICAgICBpZ25vcmVEaWFjcml0aWNzLFxuICAgICAgaW5jbHVkZU1hdGNoZXNcbiAgICB9ID0gdGhpcy5vcHRpb25zO1xuICAgIHRleHQgPSBpc0Nhc2VTZW5zaXRpdmUgPyB0ZXh0IDogdGV4dC50b0xvd2VyQ2FzZSgpO1xuICAgIHRleHQgPSBpZ25vcmVEaWFjcml0aWNzID8gc3RyaXBEaWFjcml0aWNzKHRleHQpIDogdGV4dDtcblxuICAgIC8vIEV4YWN0IG1hdGNoXG4gICAgaWYgKHRoaXMucGF0dGVybiA9PT0gdGV4dCkge1xuICAgICAgbGV0IHJlc3VsdCA9IHtcbiAgICAgICAgaXNNYXRjaDogdHJ1ZSxcbiAgICAgICAgc2NvcmU6IDBcbiAgICAgIH07XG4gICAgICBpZiAoaW5jbHVkZU1hdGNoZXMpIHtcbiAgICAgICAgcmVzdWx0LmluZGljZXMgPSBbWzAsIHRleHQubGVuZ3RoIC0gMV1dO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvLyBPdGhlcndpc2UsIHVzZSBCaXRhcCBhbGdvcml0aG1cbiAgICBjb25zdCB7XG4gICAgICBsb2NhdGlvbixcbiAgICAgIGRpc3RhbmNlLFxuICAgICAgdGhyZXNob2xkLFxuICAgICAgZmluZEFsbE1hdGNoZXMsXG4gICAgICBtaW5NYXRjaENoYXJMZW5ndGgsXG4gICAgICBpZ25vcmVMb2NhdGlvblxuICAgIH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgbGV0IGFsbEluZGljZXMgPSBbXTtcbiAgICBsZXQgdG90YWxTY29yZSA9IDA7XG4gICAgbGV0IGhhc01hdGNoZXMgPSBmYWxzZTtcbiAgICB0aGlzLmNodW5rcy5mb3JFYWNoKCh7XG4gICAgICBwYXR0ZXJuLFxuICAgICAgYWxwaGFiZXQsXG4gICAgICBzdGFydEluZGV4XG4gICAgfSkgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBpc01hdGNoLFxuICAgICAgICBzY29yZSxcbiAgICAgICAgaW5kaWNlc1xuICAgICAgfSA9IHNlYXJjaCh0ZXh0LCBwYXR0ZXJuLCBhbHBoYWJldCwge1xuICAgICAgICBsb2NhdGlvbjogbG9jYXRpb24gKyBzdGFydEluZGV4LFxuICAgICAgICBkaXN0YW5jZSxcbiAgICAgICAgdGhyZXNob2xkLFxuICAgICAgICBmaW5kQWxsTWF0Y2hlcyxcbiAgICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoLFxuICAgICAgICBpbmNsdWRlTWF0Y2hlcyxcbiAgICAgICAgaWdub3JlTG9jYXRpb25cbiAgICAgIH0pO1xuICAgICAgaWYgKGlzTWF0Y2gpIHtcbiAgICAgICAgaGFzTWF0Y2hlcyA9IHRydWU7XG4gICAgICB9XG4gICAgICB0b3RhbFNjb3JlICs9IHNjb3JlO1xuICAgICAgaWYgKGlzTWF0Y2ggJiYgaW5kaWNlcykge1xuICAgICAgICBhbGxJbmRpY2VzID0gWy4uLmFsbEluZGljZXMsIC4uLmluZGljZXNdO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGxldCByZXN1bHQgPSB7XG4gICAgICBpc01hdGNoOiBoYXNNYXRjaGVzLFxuICAgICAgc2NvcmU6IGhhc01hdGNoZXMgPyB0b3RhbFNjb3JlIC8gdGhpcy5jaHVua3MubGVuZ3RoIDogMVxuICAgIH07XG4gICAgaWYgKGhhc01hdGNoZXMgJiYgaW5jbHVkZU1hdGNoZXMpIHtcbiAgICAgIHJlc3VsdC5pbmRpY2VzID0gYWxsSW5kaWNlcztcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuY2xhc3MgQmFzZU1hdGNoIHtcbiAgY29uc3RydWN0b3IocGF0dGVybikge1xuICAgIHRoaXMucGF0dGVybiA9IHBhdHRlcm47XG4gIH1cbiAgc3RhdGljIGlzTXVsdGlNYXRjaChwYXR0ZXJuKSB7XG4gICAgcmV0dXJuIGdldE1hdGNoKHBhdHRlcm4sIHRoaXMubXVsdGlSZWdleCk7XG4gIH1cbiAgc3RhdGljIGlzU2luZ2xlTWF0Y2gocGF0dGVybikge1xuICAgIHJldHVybiBnZXRNYXRjaChwYXR0ZXJuLCB0aGlzLnNpbmdsZVJlZ2V4KTtcbiAgfVxuICBzZWFyY2goLyp0ZXh0Ki8pIHt9XG59XG5mdW5jdGlvbiBnZXRNYXRjaChwYXR0ZXJuLCBleHApIHtcbiAgY29uc3QgbWF0Y2hlcyA9IHBhdHRlcm4ubWF0Y2goZXhwKTtcbiAgcmV0dXJuIG1hdGNoZXMgPyBtYXRjaGVzWzFdIDogbnVsbDtcbn1cblxuLy8gVG9rZW46ICdmaWxlXG5cbmNsYXNzIEV4YWN0TWF0Y2ggZXh0ZW5kcyBCYXNlTWF0Y2gge1xuICBjb25zdHJ1Y3RvcihwYXR0ZXJuKSB7XG4gICAgc3VwZXIocGF0dGVybik7XG4gIH1cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnZXhhY3QnO1xuICB9XG4gIHN0YXRpYyBnZXQgbXVsdGlSZWdleCgpIHtcbiAgICByZXR1cm4gL149XCIoLiopXCIkLztcbiAgfVxuICBzdGF0aWMgZ2V0IHNpbmdsZVJlZ2V4KCkge1xuICAgIHJldHVybiAvXj0oLiopJC87XG4gIH1cbiAgc2VhcmNoKHRleHQpIHtcbiAgICBjb25zdCBpc01hdGNoID0gdGV4dCA9PT0gdGhpcy5wYXR0ZXJuO1xuICAgIHJldHVybiB7XG4gICAgICBpc01hdGNoLFxuICAgICAgc2NvcmU6IGlzTWF0Y2ggPyAwIDogMSxcbiAgICAgIGluZGljZXM6IFswLCB0aGlzLnBhdHRlcm4ubGVuZ3RoIC0gMV1cbiAgICB9O1xuICB9XG59XG5cbi8vIFRva2VuOiAhZmlyZVxuXG5jbGFzcyBJbnZlcnNlRXhhY3RNYXRjaCBleHRlbmRzIEJhc2VNYXRjaCB7XG4gIGNvbnN0cnVjdG9yKHBhdHRlcm4pIHtcbiAgICBzdXBlcihwYXR0ZXJuKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdpbnZlcnNlLWV4YWN0JztcbiAgfVxuICBzdGF0aWMgZ2V0IG11bHRpUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9eIVwiKC4qKVwiJC87XG4gIH1cbiAgc3RhdGljIGdldCBzaW5nbGVSZWdleCgpIHtcbiAgICByZXR1cm4gL14hKC4qKSQvO1xuICB9XG4gIHNlYXJjaCh0ZXh0KSB7XG4gICAgY29uc3QgaW5kZXggPSB0ZXh0LmluZGV4T2YodGhpcy5wYXR0ZXJuKTtcbiAgICBjb25zdCBpc01hdGNoID0gaW5kZXggPT09IC0xO1xuICAgIHJldHVybiB7XG4gICAgICBpc01hdGNoLFxuICAgICAgc2NvcmU6IGlzTWF0Y2ggPyAwIDogMSxcbiAgICAgIGluZGljZXM6IFswLCB0ZXh0Lmxlbmd0aCAtIDFdXG4gICAgfTtcbiAgfVxufVxuXG4vLyBUb2tlbjogXmZpbGVcblxuY2xhc3MgUHJlZml4RXhhY3RNYXRjaCBleHRlbmRzIEJhc2VNYXRjaCB7XG4gIGNvbnN0cnVjdG9yKHBhdHRlcm4pIHtcbiAgICBzdXBlcihwYXR0ZXJuKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdwcmVmaXgtZXhhY3QnO1xuICB9XG4gIHN0YXRpYyBnZXQgbXVsdGlSZWdleCgpIHtcbiAgICByZXR1cm4gL15cXF5cIiguKilcIiQvO1xuICB9XG4gIHN0YXRpYyBnZXQgc2luZ2xlUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9eXFxeKC4qKSQvO1xuICB9XG4gIHNlYXJjaCh0ZXh0KSB7XG4gICAgY29uc3QgaXNNYXRjaCA9IHRleHQuc3RhcnRzV2l0aCh0aGlzLnBhdHRlcm4pO1xuICAgIHJldHVybiB7XG4gICAgICBpc01hdGNoLFxuICAgICAgc2NvcmU6IGlzTWF0Y2ggPyAwIDogMSxcbiAgICAgIGluZGljZXM6IFswLCB0aGlzLnBhdHRlcm4ubGVuZ3RoIC0gMV1cbiAgICB9O1xuICB9XG59XG5cbi8vIFRva2VuOiAhXmZpcmVcblxuY2xhc3MgSW52ZXJzZVByZWZpeEV4YWN0TWF0Y2ggZXh0ZW5kcyBCYXNlTWF0Y2gge1xuICBjb25zdHJ1Y3RvcihwYXR0ZXJuKSB7XG4gICAgc3VwZXIocGF0dGVybik7XG4gIH1cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnaW52ZXJzZS1wcmVmaXgtZXhhY3QnO1xuICB9XG4gIHN0YXRpYyBnZXQgbXVsdGlSZWdleCgpIHtcbiAgICByZXR1cm4gL14hXFxeXCIoLiopXCIkLztcbiAgfVxuICBzdGF0aWMgZ2V0IHNpbmdsZVJlZ2V4KCkge1xuICAgIHJldHVybiAvXiFcXF4oLiopJC87XG4gIH1cbiAgc2VhcmNoKHRleHQpIHtcbiAgICBjb25zdCBpc01hdGNoID0gIXRleHQuc3RhcnRzV2l0aCh0aGlzLnBhdHRlcm4pO1xuICAgIHJldHVybiB7XG4gICAgICBpc01hdGNoLFxuICAgICAgc2NvcmU6IGlzTWF0Y2ggPyAwIDogMSxcbiAgICAgIGluZGljZXM6IFswLCB0ZXh0Lmxlbmd0aCAtIDFdXG4gICAgfTtcbiAgfVxufVxuXG4vLyBUb2tlbjogLmZpbGUkXG5cbmNsYXNzIFN1ZmZpeEV4YWN0TWF0Y2ggZXh0ZW5kcyBCYXNlTWF0Y2gge1xuICBjb25zdHJ1Y3RvcihwYXR0ZXJuKSB7XG4gICAgc3VwZXIocGF0dGVybik7XG4gIH1cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnc3VmZml4LWV4YWN0JztcbiAgfVxuICBzdGF0aWMgZ2V0IG11bHRpUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9eXCIoLiopXCJcXCQkLztcbiAgfVxuICBzdGF0aWMgZ2V0IHNpbmdsZVJlZ2V4KCkge1xuICAgIHJldHVybiAvXiguKilcXCQkLztcbiAgfVxuICBzZWFyY2godGV4dCkge1xuICAgIGNvbnN0IGlzTWF0Y2ggPSB0ZXh0LmVuZHNXaXRoKHRoaXMucGF0dGVybik7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzTWF0Y2gsXG4gICAgICBzY29yZTogaXNNYXRjaCA/IDAgOiAxLFxuICAgICAgaW5kaWNlczogW3RleHQubGVuZ3RoIC0gdGhpcy5wYXR0ZXJuLmxlbmd0aCwgdGV4dC5sZW5ndGggLSAxXVxuICAgIH07XG4gIH1cbn1cblxuLy8gVG9rZW46ICEuZmlsZSRcblxuY2xhc3MgSW52ZXJzZVN1ZmZpeEV4YWN0TWF0Y2ggZXh0ZW5kcyBCYXNlTWF0Y2gge1xuICBjb25zdHJ1Y3RvcihwYXR0ZXJuKSB7XG4gICAgc3VwZXIocGF0dGVybik7XG4gIH1cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnaW52ZXJzZS1zdWZmaXgtZXhhY3QnO1xuICB9XG4gIHN0YXRpYyBnZXQgbXVsdGlSZWdleCgpIHtcbiAgICByZXR1cm4gL14hXCIoLiopXCJcXCQkLztcbiAgfVxuICBzdGF0aWMgZ2V0IHNpbmdsZVJlZ2V4KCkge1xuICAgIHJldHVybiAvXiEoLiopXFwkJC87XG4gIH1cbiAgc2VhcmNoKHRleHQpIHtcbiAgICBjb25zdCBpc01hdGNoID0gIXRleHQuZW5kc1dpdGgodGhpcy5wYXR0ZXJuKTtcbiAgICByZXR1cm4ge1xuICAgICAgaXNNYXRjaCxcbiAgICAgIHNjb3JlOiBpc01hdGNoID8gMCA6IDEsXG4gICAgICBpbmRpY2VzOiBbMCwgdGV4dC5sZW5ndGggLSAxXVxuICAgIH07XG4gIH1cbn1cbmNsYXNzIEZ1enp5TWF0Y2ggZXh0ZW5kcyBCYXNlTWF0Y2gge1xuICBjb25zdHJ1Y3RvcihwYXR0ZXJuLCB7XG4gICAgbG9jYXRpb24gPSBDb25maWcubG9jYXRpb24sXG4gICAgdGhyZXNob2xkID0gQ29uZmlnLnRocmVzaG9sZCxcbiAgICBkaXN0YW5jZSA9IENvbmZpZy5kaXN0YW5jZSxcbiAgICBpbmNsdWRlTWF0Y2hlcyA9IENvbmZpZy5pbmNsdWRlTWF0Y2hlcyxcbiAgICBmaW5kQWxsTWF0Y2hlcyA9IENvbmZpZy5maW5kQWxsTWF0Y2hlcyxcbiAgICBtaW5NYXRjaENoYXJMZW5ndGggPSBDb25maWcubWluTWF0Y2hDaGFyTGVuZ3RoLFxuICAgIGlzQ2FzZVNlbnNpdGl2ZSA9IENvbmZpZy5pc0Nhc2VTZW5zaXRpdmUsXG4gICAgaWdub3JlRGlhY3JpdGljcyA9IENvbmZpZy5pZ25vcmVEaWFjcml0aWNzLFxuICAgIGlnbm9yZUxvY2F0aW9uID0gQ29uZmlnLmlnbm9yZUxvY2F0aW9uXG4gIH0gPSB7fSkge1xuICAgIHN1cGVyKHBhdHRlcm4pO1xuICAgIHRoaXMuX2JpdGFwU2VhcmNoID0gbmV3IEJpdGFwU2VhcmNoKHBhdHRlcm4sIHtcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgdGhyZXNob2xkLFxuICAgICAgZGlzdGFuY2UsXG4gICAgICBpbmNsdWRlTWF0Y2hlcyxcbiAgICAgIGZpbmRBbGxNYXRjaGVzLFxuICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoLFxuICAgICAgaXNDYXNlU2Vuc2l0aXZlLFxuICAgICAgaWdub3JlRGlhY3JpdGljcyxcbiAgICAgIGlnbm9yZUxvY2F0aW9uXG4gICAgfSk7XG4gIH1cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnZnV6enknO1xuICB9XG4gIHN0YXRpYyBnZXQgbXVsdGlSZWdleCgpIHtcbiAgICByZXR1cm4gL15cIiguKilcIiQvO1xuICB9XG4gIHN0YXRpYyBnZXQgc2luZ2xlUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9eKC4qKSQvO1xuICB9XG4gIHNlYXJjaCh0ZXh0KSB7XG4gICAgcmV0dXJuIHRoaXMuX2JpdGFwU2VhcmNoLnNlYXJjaEluKHRleHQpO1xuICB9XG59XG5cbi8vIFRva2VuOiAnZmlsZVxuXG5jbGFzcyBJbmNsdWRlTWF0Y2ggZXh0ZW5kcyBCYXNlTWF0Y2gge1xuICBjb25zdHJ1Y3RvcihwYXR0ZXJuKSB7XG4gICAgc3VwZXIocGF0dGVybik7XG4gIH1cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnaW5jbHVkZSc7XG4gIH1cbiAgc3RhdGljIGdldCBtdWx0aVJlZ2V4KCkge1xuICAgIHJldHVybiAvXidcIiguKilcIiQvO1xuICB9XG4gIHN0YXRpYyBnZXQgc2luZ2xlUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9eJyguKikkLztcbiAgfVxuICBzZWFyY2godGV4dCkge1xuICAgIGxldCBsb2NhdGlvbiA9IDA7XG4gICAgbGV0IGluZGV4O1xuICAgIGNvbnN0IGluZGljZXMgPSBbXTtcbiAgICBjb25zdCBwYXR0ZXJuTGVuID0gdGhpcy5wYXR0ZXJuLmxlbmd0aDtcblxuICAgIC8vIEdldCBhbGwgZXhhY3QgbWF0Y2hlc1xuICAgIHdoaWxlICgoaW5kZXggPSB0ZXh0LmluZGV4T2YodGhpcy5wYXR0ZXJuLCBsb2NhdGlvbikpID4gLTEpIHtcbiAgICAgIGxvY2F0aW9uID0gaW5kZXggKyBwYXR0ZXJuTGVuO1xuICAgICAgaW5kaWNlcy5wdXNoKFtpbmRleCwgbG9jYXRpb24gLSAxXSk7XG4gICAgfVxuICAgIGNvbnN0IGlzTWF0Y2ggPSAhIWluZGljZXMubGVuZ3RoO1xuICAgIHJldHVybiB7XG4gICAgICBpc01hdGNoLFxuICAgICAgc2NvcmU6IGlzTWF0Y2ggPyAwIDogMSxcbiAgICAgIGluZGljZXNcbiAgICB9O1xuICB9XG59XG5cbi8vIOKdl09yZGVyIGlzIGltcG9ydGFudC4gRE8gTk9UIENIQU5HRS5cbmNvbnN0IHNlYXJjaGVycyA9IFtFeGFjdE1hdGNoLCBJbmNsdWRlTWF0Y2gsIFByZWZpeEV4YWN0TWF0Y2gsIEludmVyc2VQcmVmaXhFeGFjdE1hdGNoLCBJbnZlcnNlU3VmZml4RXhhY3RNYXRjaCwgU3VmZml4RXhhY3RNYXRjaCwgSW52ZXJzZUV4YWN0TWF0Y2gsIEZ1enp5TWF0Y2hdO1xuY29uc3Qgc2VhcmNoZXJzTGVuID0gc2VhcmNoZXJzLmxlbmd0aDtcblxuLy8gUmVnZXggdG8gc3BsaXQgYnkgc3BhY2VzLCBidXQga2VlcCBhbnl0aGluZyBpbiBxdW90ZXMgdG9nZXRoZXJcbmNvbnN0IFNQQUNFX1JFID0gLyArKD89KD86W15cXFwiXSpcXFwiW15cXFwiXSpcXFwiKSpbXlxcXCJdKiQpLztcbmNvbnN0IE9SX1RPS0VOID0gJ3wnO1xuXG4vLyBSZXR1cm4gYSAyRCBhcnJheSByZXByZXNlbnRhdGlvbiBvZiB0aGUgcXVlcnksIGZvciBzaW1wbGVyIHBhcnNpbmcuXG4vLyBFeGFtcGxlOlxuLy8gXCJeY29yZSBnbyQgfCByYiQgfCBweSQgeHkkXCIgPT4gW1tcIl5jb3JlXCIsIFwiZ28kXCJdLCBbXCJyYiRcIl0sIFtcInB5JFwiLCBcInh5JFwiXV1cbmZ1bmN0aW9uIHBhcnNlUXVlcnkocGF0dGVybiwgb3B0aW9ucyA9IHt9KSB7XG4gIHJldHVybiBwYXR0ZXJuLnNwbGl0KE9SX1RPS0VOKS5tYXAoaXRlbSA9PiB7XG4gICAgbGV0IHF1ZXJ5ID0gaXRlbS50cmltKCkuc3BsaXQoU1BBQ0VfUkUpLmZpbHRlcihpdGVtID0+IGl0ZW0gJiYgISFpdGVtLnRyaW0oKSk7XG4gICAgbGV0IHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gcXVlcnkubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHF1ZXJ5SXRlbSA9IHF1ZXJ5W2ldO1xuXG4gICAgICAvLyAxLiBIYW5kbGUgbXVsdGlwbGUgcXVlcnkgbWF0Y2ggKGkuZSwgb25jZSB0aGF0IGFyZSBxdW90ZWQsIGxpa2UgYFwiaGVsbG8gd29ybGRcImApXG4gICAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICAgIGxldCBpZHggPSAtMTtcbiAgICAgIHdoaWxlICghZm91bmQgJiYgKytpZHggPCBzZWFyY2hlcnNMZW4pIHtcbiAgICAgICAgY29uc3Qgc2VhcmNoZXIgPSBzZWFyY2hlcnNbaWR4XTtcbiAgICAgICAgbGV0IHRva2VuID0gc2VhcmNoZXIuaXNNdWx0aU1hdGNoKHF1ZXJ5SXRlbSk7XG4gICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChuZXcgc2VhcmNoZXIodG9rZW4sIG9wdGlvbnMpKTtcbiAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gMi4gSGFuZGxlIHNpbmdsZSBxdWVyeSBtYXRjaGVzIChpLmUsIG9uY2UgdGhhdCBhcmUgKm5vdCogcXVvdGVkKVxuICAgICAgaWR4ID0gLTE7XG4gICAgICB3aGlsZSAoKytpZHggPCBzZWFyY2hlcnNMZW4pIHtcbiAgICAgICAgY29uc3Qgc2VhcmNoZXIgPSBzZWFyY2hlcnNbaWR4XTtcbiAgICAgICAgbGV0IHRva2VuID0gc2VhcmNoZXIuaXNTaW5nbGVNYXRjaChxdWVyeUl0ZW0pO1xuICAgICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2gobmV3IHNlYXJjaGVyKHRva2VuLCBvcHRpb25zKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH0pO1xufVxuXG4vLyBUaGVzZSBleHRlbmRlZCBtYXRjaGVycyBjYW4gcmV0dXJuIGFuIGFycmF5IG9mIG1hdGNoZXMsIGFzIG9wcG9zZWRcbi8vIHRvIGEgc2luZ2wgbWF0Y2hcbmNvbnN0IE11bHRpTWF0Y2hTZXQgPSBuZXcgU2V0KFtGdXp6eU1hdGNoLnR5cGUsIEluY2x1ZGVNYXRjaC50eXBlXSk7XG5cbi8qKlxuICogQ29tbWFuZC1saWtlIHNlYXJjaGluZ1xuICogPT09PT09PT09PT09PT09PT09PT09PVxuICpcbiAqIEdpdmVuIG11bHRpcGxlIHNlYXJjaCB0ZXJtcyBkZWxpbWl0ZWQgYnkgc3BhY2VzLmUuZy4gYF5qc2NyaXB0IC5weXRob24kIHJ1YnkgIWphdmFgLFxuICogc2VhcmNoIGluIGEgZ2l2ZW4gdGV4dC5cbiAqXG4gKiBTZWFyY2ggc3ludGF4OlxuICpcbiAqIHwgVG9rZW4gICAgICAgfCBNYXRjaCB0eXBlICAgICAgICAgICAgICAgICB8IERlc2NyaXB0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHxcbiAqIHwgYGpzY3JpcHRgICAgfCBmdXp6eS1tYXRjaCAgICAgICAgICAgICAgICB8IEl0ZW1zIHRoYXQgZnV6enkgbWF0Y2ggYGpzY3JpcHRgICAgICAgIHxcbiAqIHwgYD1zY2hlbWVgICAgfCBleGFjdC1tYXRjaCAgICAgICAgICAgICAgICB8IEl0ZW1zIHRoYXQgYXJlIGBzY2hlbWVgICAgICAgICAgICAgICAgIHxcbiAqIHwgYCdweXRob25gICAgfCBpbmNsdWRlLW1hdGNoICAgICAgICAgICAgICB8IEl0ZW1zIHRoYXQgaW5jbHVkZSBgcHl0aG9uYCAgICAgICAgICAgIHxcbiAqIHwgYCFydWJ5YCAgICAgfCBpbnZlcnNlLWV4YWN0LW1hdGNoICAgICAgICB8IEl0ZW1zIHRoYXQgZG8gbm90IGluY2x1ZGUgYHJ1YnlgICAgICAgIHxcbiAqIHwgYF5qYXZhYCAgICAgfCBwcmVmaXgtZXhhY3QtbWF0Y2ggICAgICAgICB8IEl0ZW1zIHRoYXQgc3RhcnQgd2l0aCBgamF2YWAgICAgICAgICAgIHxcbiAqIHwgYCFeZWFybGFuZ2AgfCBpbnZlcnNlLXByZWZpeC1leGFjdC1tYXRjaCB8IEl0ZW1zIHRoYXQgZG8gbm90IHN0YXJ0IHdpdGggYGVhcmxhbmdgIHxcbiAqIHwgYC5qcyRgICAgICAgfCBzdWZmaXgtZXhhY3QtbWF0Y2ggICAgICAgICB8IEl0ZW1zIHRoYXQgZW5kIHdpdGggYC5qc2AgICAgICAgICAgICAgIHxcbiAqIHwgYCEuZ28kYCAgICAgfCBpbnZlcnNlLXN1ZmZpeC1leGFjdC1tYXRjaCB8IEl0ZW1zIHRoYXQgZG8gbm90IGVuZCB3aXRoIGAuZ29gICAgICAgIHxcbiAqXG4gKiBBIHNpbmdsZSBwaXBlIGNoYXJhY3RlciBhY3RzIGFzIGFuIE9SIG9wZXJhdG9yLiBGb3IgZXhhbXBsZSwgdGhlIGZvbGxvd2luZ1xuICogcXVlcnkgbWF0Y2hlcyBlbnRyaWVzIHRoYXQgc3RhcnQgd2l0aCBgY29yZWAgYW5kIGVuZCB3aXRoIGVpdGhlcmBnb2AsIGByYmAsXG4gKiBvcmBweWAuXG4gKlxuICogYGBgXG4gKiBeY29yZSBnbyQgfCByYiQgfCBweSRcbiAqIGBgYFxuICovXG5jbGFzcyBFeHRlbmRlZFNlYXJjaCB7XG4gIGNvbnN0cnVjdG9yKHBhdHRlcm4sIHtcbiAgICBpc0Nhc2VTZW5zaXRpdmUgPSBDb25maWcuaXNDYXNlU2Vuc2l0aXZlLFxuICAgIGlnbm9yZURpYWNyaXRpY3MgPSBDb25maWcuaWdub3JlRGlhY3JpdGljcyxcbiAgICBpbmNsdWRlTWF0Y2hlcyA9IENvbmZpZy5pbmNsdWRlTWF0Y2hlcyxcbiAgICBtaW5NYXRjaENoYXJMZW5ndGggPSBDb25maWcubWluTWF0Y2hDaGFyTGVuZ3RoLFxuICAgIGlnbm9yZUxvY2F0aW9uID0gQ29uZmlnLmlnbm9yZUxvY2F0aW9uLFxuICAgIGZpbmRBbGxNYXRjaGVzID0gQ29uZmlnLmZpbmRBbGxNYXRjaGVzLFxuICAgIGxvY2F0aW9uID0gQ29uZmlnLmxvY2F0aW9uLFxuICAgIHRocmVzaG9sZCA9IENvbmZpZy50aHJlc2hvbGQsXG4gICAgZGlzdGFuY2UgPSBDb25maWcuZGlzdGFuY2VcbiAgfSA9IHt9KSB7XG4gICAgdGhpcy5xdWVyeSA9IG51bGw7XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgaXNDYXNlU2Vuc2l0aXZlLFxuICAgICAgaWdub3JlRGlhY3JpdGljcyxcbiAgICAgIGluY2x1ZGVNYXRjaGVzLFxuICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoLFxuICAgICAgZmluZEFsbE1hdGNoZXMsXG4gICAgICBpZ25vcmVMb2NhdGlvbixcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgdGhyZXNob2xkLFxuICAgICAgZGlzdGFuY2VcbiAgICB9O1xuICAgIHBhdHRlcm4gPSBpc0Nhc2VTZW5zaXRpdmUgPyBwYXR0ZXJuIDogcGF0dGVybi50b0xvd2VyQ2FzZSgpO1xuICAgIHBhdHRlcm4gPSBpZ25vcmVEaWFjcml0aWNzID8gc3RyaXBEaWFjcml0aWNzKHBhdHRlcm4pIDogcGF0dGVybjtcbiAgICB0aGlzLnBhdHRlcm4gPSBwYXR0ZXJuO1xuICAgIHRoaXMucXVlcnkgPSBwYXJzZVF1ZXJ5KHRoaXMucGF0dGVybiwgdGhpcy5vcHRpb25zKTtcbiAgfVxuICBzdGF0aWMgY29uZGl0aW9uKF8sIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucy51c2VFeHRlbmRlZFNlYXJjaDtcbiAgfVxuICBzZWFyY2hJbih0ZXh0KSB7XG4gICAgY29uc3QgcXVlcnkgPSB0aGlzLnF1ZXJ5O1xuICAgIGlmICghcXVlcnkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzTWF0Y2g6IGZhbHNlLFxuICAgICAgICBzY29yZTogMVxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3Qge1xuICAgICAgaW5jbHVkZU1hdGNoZXMsXG4gICAgICBpc0Nhc2VTZW5zaXRpdmUsXG4gICAgICBpZ25vcmVEaWFjcml0aWNzXG4gICAgfSA9IHRoaXMub3B0aW9ucztcbiAgICB0ZXh0ID0gaXNDYXNlU2Vuc2l0aXZlID8gdGV4dCA6IHRleHQudG9Mb3dlckNhc2UoKTtcbiAgICB0ZXh0ID0gaWdub3JlRGlhY3JpdGljcyA/IHN0cmlwRGlhY3JpdGljcyh0ZXh0KSA6IHRleHQ7XG4gICAgbGV0IG51bU1hdGNoZXMgPSAwO1xuICAgIGxldCBhbGxJbmRpY2VzID0gW107XG4gICAgbGV0IHRvdGFsU2NvcmUgPSAwO1xuXG4gICAgLy8gT1JzXG4gICAgZm9yIChsZXQgaSA9IDAsIHFMZW4gPSBxdWVyeS5sZW5ndGg7IGkgPCBxTGVuOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHNlYXJjaGVycyA9IHF1ZXJ5W2ldO1xuXG4gICAgICAvLyBSZXNldCBpbmRpY2VzXG4gICAgICBhbGxJbmRpY2VzLmxlbmd0aCA9IDA7XG4gICAgICBudW1NYXRjaGVzID0gMDtcblxuICAgICAgLy8gQU5Ec1xuICAgICAgZm9yIChsZXQgaiA9IDAsIHBMZW4gPSBzZWFyY2hlcnMubGVuZ3RoOyBqIDwgcExlbjsgaiArPSAxKSB7XG4gICAgICAgIGNvbnN0IHNlYXJjaGVyID0gc2VhcmNoZXJzW2pdO1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgaXNNYXRjaCxcbiAgICAgICAgICBpbmRpY2VzLFxuICAgICAgICAgIHNjb3JlXG4gICAgICAgIH0gPSBzZWFyY2hlci5zZWFyY2godGV4dCk7XG4gICAgICAgIGlmIChpc01hdGNoKSB7XG4gICAgICAgICAgbnVtTWF0Y2hlcyArPSAxO1xuICAgICAgICAgIHRvdGFsU2NvcmUgKz0gc2NvcmU7XG4gICAgICAgICAgaWYgKGluY2x1ZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gc2VhcmNoZXIuY29uc3RydWN0b3IudHlwZTtcbiAgICAgICAgICAgIGlmIChNdWx0aU1hdGNoU2V0Lmhhcyh0eXBlKSkge1xuICAgICAgICAgICAgICBhbGxJbmRpY2VzID0gWy4uLmFsbEluZGljZXMsIC4uLmluZGljZXNdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYWxsSW5kaWNlcy5wdXNoKGluZGljZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0b3RhbFNjb3JlID0gMDtcbiAgICAgICAgICBudW1NYXRjaGVzID0gMDtcbiAgICAgICAgICBhbGxJbmRpY2VzLmxlbmd0aCA9IDA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gT1IgY29uZGl0aW9uLCBzbyBpZiBUUlVFLCByZXR1cm5cbiAgICAgIGlmIChudW1NYXRjaGVzKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSB7XG4gICAgICAgICAgaXNNYXRjaDogdHJ1ZSxcbiAgICAgICAgICBzY29yZTogdG90YWxTY29yZSAvIG51bU1hdGNoZXNcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGluY2x1ZGVNYXRjaGVzKSB7XG4gICAgICAgICAgcmVzdWx0LmluZGljZXMgPSBhbGxJbmRpY2VzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTm90aGluZyB3YXMgbWF0Y2hlZFxuICAgIHJldHVybiB7XG4gICAgICBpc01hdGNoOiBmYWxzZSxcbiAgICAgIHNjb3JlOiAxXG4gICAgfTtcbiAgfVxufVxuY29uc3QgcmVnaXN0ZXJlZFNlYXJjaGVycyA9IFtdO1xuZnVuY3Rpb24gcmVnaXN0ZXIoLi4uYXJncykge1xuICByZWdpc3RlcmVkU2VhcmNoZXJzLnB1c2goLi4uYXJncyk7XG59XG5mdW5jdGlvbiBjcmVhdGVTZWFyY2hlcihwYXR0ZXJuLCBvcHRpb25zKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSByZWdpc3RlcmVkU2VhcmNoZXJzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgbGV0IHNlYXJjaGVyQ2xhc3MgPSByZWdpc3RlcmVkU2VhcmNoZXJzW2ldO1xuICAgIGlmIChzZWFyY2hlckNsYXNzLmNvbmRpdGlvbihwYXR0ZXJuLCBvcHRpb25zKSkge1xuICAgICAgcmV0dXJuIG5ldyBzZWFyY2hlckNsYXNzKHBhdHRlcm4sIG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbmV3IEJpdGFwU2VhcmNoKHBhdHRlcm4sIG9wdGlvbnMpO1xufVxuY29uc3QgTG9naWNhbE9wZXJhdG9yID0ge1xuICBBTkQ6ICckYW5kJyxcbiAgT1I6ICckb3InXG59O1xuY29uc3QgS2V5VHlwZSA9IHtcbiAgUEFUSDogJyRwYXRoJyxcbiAgUEFUVEVSTjogJyR2YWwnXG59O1xuY29uc3QgaXNFeHByZXNzaW9uID0gcXVlcnkgPT4gISEocXVlcnlbTG9naWNhbE9wZXJhdG9yLkFORF0gfHwgcXVlcnlbTG9naWNhbE9wZXJhdG9yLk9SXSk7XG5jb25zdCBpc1BhdGggPSBxdWVyeSA9PiAhIXF1ZXJ5W0tleVR5cGUuUEFUSF07XG5jb25zdCBpc0xlYWYgPSBxdWVyeSA9PiAhaXNBcnJheShxdWVyeSkgJiYgaXNPYmplY3QocXVlcnkpICYmICFpc0V4cHJlc3Npb24ocXVlcnkpO1xuY29uc3QgY29udmVydFRvRXhwbGljaXQgPSBxdWVyeSA9PiAoe1xuICBbTG9naWNhbE9wZXJhdG9yLkFORF06IE9iamVjdC5rZXlzKHF1ZXJ5KS5tYXAoa2V5ID0+ICh7XG4gICAgW2tleV06IHF1ZXJ5W2tleV1cbiAgfSkpXG59KTtcblxuLy8gV2hlbiBgYXV0b2AgaXMgYHRydWVgLCB0aGUgcGFyc2UgZnVuY3Rpb24gd2lsbCBpbmZlciBhbmQgaW5pdGlhbGl6ZSBhbmQgYWRkXG4vLyB0aGUgYXBwcm9wcmlhdGUgYFNlYXJjaGVyYCBpbnN0YW5jZVxuZnVuY3Rpb24gcGFyc2UocXVlcnksIG9wdGlvbnMsIHtcbiAgYXV0byA9IHRydWVcbn0gPSB7fSkge1xuICBjb25zdCBuZXh0ID0gcXVlcnkgPT4ge1xuICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMocXVlcnkpO1xuICAgIGNvbnN0IGlzUXVlcnlQYXRoID0gaXNQYXRoKHF1ZXJ5KTtcbiAgICBpZiAoIWlzUXVlcnlQYXRoICYmIGtleXMubGVuZ3RoID4gMSAmJiAhaXNFeHByZXNzaW9uKHF1ZXJ5KSkge1xuICAgICAgcmV0dXJuIG5leHQoY29udmVydFRvRXhwbGljaXQocXVlcnkpKTtcbiAgICB9XG4gICAgaWYgKGlzTGVhZihxdWVyeSkpIHtcbiAgICAgIGNvbnN0IGtleSA9IGlzUXVlcnlQYXRoID8gcXVlcnlbS2V5VHlwZS5QQVRIXSA6IGtleXNbMF07XG4gICAgICBjb25zdCBwYXR0ZXJuID0gaXNRdWVyeVBhdGggPyBxdWVyeVtLZXlUeXBlLlBBVFRFUk5dIDogcXVlcnlba2V5XTtcbiAgICAgIGlmICghaXNTdHJpbmcocGF0dGVybikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKExPR0lDQUxfU0VBUkNIX0lOVkFMSURfUVVFUllfRk9SX0tFWShrZXkpKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAga2V5SWQ6IGNyZWF0ZUtleUlkKGtleSksXG4gICAgICAgIHBhdHRlcm5cbiAgICAgIH07XG4gICAgICBpZiAoYXV0bykge1xuICAgICAgICBvYmouc2VhcmNoZXIgPSBjcmVhdGVTZWFyY2hlcihwYXR0ZXJuLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuICAgIGxldCBub2RlID0ge1xuICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgb3BlcmF0b3I6IGtleXNbMF1cbiAgICB9O1xuICAgIGtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBxdWVyeVtrZXldO1xuICAgICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgbm9kZS5jaGlsZHJlbi5wdXNoKG5leHQoaXRlbSkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfTtcbiAgaWYgKCFpc0V4cHJlc3Npb24ocXVlcnkpKSB7XG4gICAgcXVlcnkgPSBjb252ZXJ0VG9FeHBsaWNpdChxdWVyeSk7XG4gIH1cbiAgcmV0dXJuIG5leHQocXVlcnkpO1xufVxuXG4vLyBQcmFjdGljYWwgc2NvcmluZyBmdW5jdGlvblxuZnVuY3Rpb24gY29tcHV0ZVNjb3JlKHJlc3VsdHMsIHtcbiAgaWdub3JlRmllbGROb3JtID0gQ29uZmlnLmlnbm9yZUZpZWxkTm9ybVxufSkge1xuICByZXN1bHRzLmZvckVhY2gocmVzdWx0ID0+IHtcbiAgICBsZXQgdG90YWxTY29yZSA9IDE7XG4gICAgcmVzdWx0Lm1hdGNoZXMuZm9yRWFjaCgoe1xuICAgICAga2V5LFxuICAgICAgbm9ybSxcbiAgICAgIHNjb3JlXG4gICAgfSkgPT4ge1xuICAgICAgY29uc3Qgd2VpZ2h0ID0ga2V5ID8ga2V5LndlaWdodCA6IG51bGw7XG4gICAgICB0b3RhbFNjb3JlICo9IE1hdGgucG93KHNjb3JlID09PSAwICYmIHdlaWdodCA/IE51bWJlci5FUFNJTE9OIDogc2NvcmUsICh3ZWlnaHQgfHwgMSkgKiAoaWdub3JlRmllbGROb3JtID8gMSA6IG5vcm0pKTtcbiAgICB9KTtcbiAgICByZXN1bHQuc2NvcmUgPSB0b3RhbFNjb3JlO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHRyYW5zZm9ybU1hdGNoZXMocmVzdWx0LCBkYXRhKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSByZXN1bHQubWF0Y2hlcztcbiAgZGF0YS5tYXRjaGVzID0gW107XG4gIGlmICghaXNEZWZpbmVkKG1hdGNoZXMpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIG1hdGNoZXMuZm9yRWFjaChtYXRjaCA9PiB7XG4gICAgaWYgKCFpc0RlZmluZWQobWF0Y2guaW5kaWNlcykgfHwgIW1hdGNoLmluZGljZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHtcbiAgICAgIGluZGljZXMsXG4gICAgICB2YWx1ZVxuICAgIH0gPSBtYXRjaDtcbiAgICBsZXQgb2JqID0ge1xuICAgICAgaW5kaWNlcyxcbiAgICAgIHZhbHVlXG4gICAgfTtcbiAgICBpZiAobWF0Y2gua2V5KSB7XG4gICAgICBvYmoua2V5ID0gbWF0Y2gua2V5LnNyYztcbiAgICB9XG4gICAgaWYgKG1hdGNoLmlkeCA+IC0xKSB7XG4gICAgICBvYmoucmVmSW5kZXggPSBtYXRjaC5pZHg7XG4gICAgfVxuICAgIGRhdGEubWF0Y2hlcy5wdXNoKG9iaik7XG4gIH0pO1xufVxuZnVuY3Rpb24gdHJhbnNmb3JtU2NvcmUocmVzdWx0LCBkYXRhKSB7XG4gIGRhdGEuc2NvcmUgPSByZXN1bHQuc2NvcmU7XG59XG5mdW5jdGlvbiBmb3JtYXQocmVzdWx0cywgZG9jcywge1xuICBpbmNsdWRlTWF0Y2hlcyA9IENvbmZpZy5pbmNsdWRlTWF0Y2hlcyxcbiAgaW5jbHVkZVNjb3JlID0gQ29uZmlnLmluY2x1ZGVTY29yZVxufSA9IHt9KSB7XG4gIGNvbnN0IHRyYW5zZm9ybWVycyA9IFtdO1xuICBpZiAoaW5jbHVkZU1hdGNoZXMpIHRyYW5zZm9ybWVycy5wdXNoKHRyYW5zZm9ybU1hdGNoZXMpO1xuICBpZiAoaW5jbHVkZVNjb3JlKSB0cmFuc2Zvcm1lcnMucHVzaCh0cmFuc2Zvcm1TY29yZSk7XG4gIHJldHVybiByZXN1bHRzLm1hcChyZXN1bHQgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkeFxuICAgIH0gPSByZXN1bHQ7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGl0ZW06IGRvY3NbaWR4XSxcbiAgICAgIHJlZkluZGV4OiBpZHhcbiAgICB9O1xuICAgIGlmICh0cmFuc2Zvcm1lcnMubGVuZ3RoKSB7XG4gICAgICB0cmFuc2Zvcm1lcnMuZm9yRWFjaCh0cmFuc2Zvcm1lciA9PiB7XG4gICAgICAgIHRyYW5zZm9ybWVyKHJlc3VsdCwgZGF0YSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0pO1xufVxuY2xhc3MgRnVzZSB7XG4gIGNvbnN0cnVjdG9yKGRvY3MsIG9wdGlvbnMgPSB7fSwgaW5kZXgpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAuLi5Db25maWcsXG4gICAgICAuLi5vcHRpb25zXG4gICAgfTtcbiAgICBpZiAodGhpcy5vcHRpb25zLnVzZUV4dGVuZGVkU2VhcmNoICYmICF0cnVlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoRVhURU5ERURfU0VBUkNIX1VOQVZBSUxBQkxFKTtcbiAgICB9XG4gICAgdGhpcy5fa2V5U3RvcmUgPSBuZXcgS2V5U3RvcmUodGhpcy5vcHRpb25zLmtleXMpO1xuICAgIHRoaXMuc2V0Q29sbGVjdGlvbihkb2NzLCBpbmRleCk7XG4gIH1cbiAgc2V0Q29sbGVjdGlvbihkb2NzLCBpbmRleCkge1xuICAgIHRoaXMuX2RvY3MgPSBkb2NzO1xuICAgIGlmIChpbmRleCAmJiAhKGluZGV4IGluc3RhbmNlb2YgRnVzZUluZGV4KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKElOQ09SUkVDVF9JTkRFWF9UWVBFKTtcbiAgICB9XG4gICAgdGhpcy5fbXlJbmRleCA9IGluZGV4IHx8IGNyZWF0ZUluZGV4KHRoaXMub3B0aW9ucy5rZXlzLCB0aGlzLl9kb2NzLCB7XG4gICAgICBnZXRGbjogdGhpcy5vcHRpb25zLmdldEZuLFxuICAgICAgZmllbGROb3JtV2VpZ2h0OiB0aGlzLm9wdGlvbnMuZmllbGROb3JtV2VpZ2h0XG4gICAgfSk7XG4gIH1cbiAgYWRkKGRvYykge1xuICAgIGlmICghaXNEZWZpbmVkKGRvYykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fZG9jcy5wdXNoKGRvYyk7XG4gICAgdGhpcy5fbXlJbmRleC5hZGQoZG9jKTtcbiAgfVxuICByZW1vdmUocHJlZGljYXRlID0gKC8qIGRvYywgaWR4ICovKSA9PiBmYWxzZSkge1xuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGhpcy5fZG9jcy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgY29uc3QgZG9jID0gdGhpcy5fZG9jc1tpXTtcbiAgICAgIGlmIChwcmVkaWNhdGUoZG9jLCBpKSkge1xuICAgICAgICB0aGlzLnJlbW92ZUF0KGkpO1xuICAgICAgICBpIC09IDE7XG4gICAgICAgIGxlbiAtPSAxO1xuICAgICAgICByZXN1bHRzLnB1c2goZG9jKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cbiAgcmVtb3ZlQXQoaWR4KSB7XG4gICAgdGhpcy5fZG9jcy5zcGxpY2UoaWR4LCAxKTtcbiAgICB0aGlzLl9teUluZGV4LnJlbW92ZUF0KGlkeCk7XG4gIH1cbiAgZ2V0SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX215SW5kZXg7XG4gIH1cbiAgc2VhcmNoKHF1ZXJ5LCB7XG4gICAgbGltaXQgPSAtMVxuICB9ID0ge30pIHtcbiAgICBjb25zdCB7XG4gICAgICBpbmNsdWRlTWF0Y2hlcyxcbiAgICAgIGluY2x1ZGVTY29yZSxcbiAgICAgIHNob3VsZFNvcnQsXG4gICAgICBzb3J0Rm4sXG4gICAgICBpZ25vcmVGaWVsZE5vcm1cbiAgICB9ID0gdGhpcy5vcHRpb25zO1xuICAgIGxldCByZXN1bHRzID0gaXNTdHJpbmcocXVlcnkpID8gaXNTdHJpbmcodGhpcy5fZG9jc1swXSkgPyB0aGlzLl9zZWFyY2hTdHJpbmdMaXN0KHF1ZXJ5KSA6IHRoaXMuX3NlYXJjaE9iamVjdExpc3QocXVlcnkpIDogdGhpcy5fc2VhcmNoTG9naWNhbChxdWVyeSk7XG4gICAgY29tcHV0ZVNjb3JlKHJlc3VsdHMsIHtcbiAgICAgIGlnbm9yZUZpZWxkTm9ybVxuICAgIH0pO1xuICAgIGlmIChzaG91bGRTb3J0KSB7XG4gICAgICByZXN1bHRzLnNvcnQoc29ydEZuKTtcbiAgICB9XG4gICAgaWYgKGlzTnVtYmVyKGxpbWl0KSAmJiBsaW1pdCA+IC0xKSB7XG4gICAgICByZXN1bHRzID0gcmVzdWx0cy5zbGljZSgwLCBsaW1pdCk7XG4gICAgfVxuICAgIHJldHVybiBmb3JtYXQocmVzdWx0cywgdGhpcy5fZG9jcywge1xuICAgICAgaW5jbHVkZU1hdGNoZXMsXG4gICAgICBpbmNsdWRlU2NvcmVcbiAgICB9KTtcbiAgfVxuICBfc2VhcmNoU3RyaW5nTGlzdChxdWVyeSkge1xuICAgIGNvbnN0IHNlYXJjaGVyID0gY3JlYXRlU2VhcmNoZXIocXVlcnksIHRoaXMub3B0aW9ucyk7XG4gICAgY29uc3Qge1xuICAgICAgcmVjb3Jkc1xuICAgIH0gPSB0aGlzLl9teUluZGV4O1xuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcblxuICAgIC8vIEl0ZXJhdGUgb3ZlciBldmVyeSBzdHJpbmcgaW4gdGhlIGluZGV4XG4gICAgcmVjb3Jkcy5mb3JFYWNoKCh7XG4gICAgICB2OiB0ZXh0LFxuICAgICAgaTogaWR4LFxuICAgICAgbjogbm9ybVxuICAgIH0pID0+IHtcbiAgICAgIGlmICghaXNEZWZpbmVkKHRleHQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHtcbiAgICAgICAgaXNNYXRjaCxcbiAgICAgICAgc2NvcmUsXG4gICAgICAgIGluZGljZXNcbiAgICAgIH0gPSBzZWFyY2hlci5zZWFyY2hJbih0ZXh0KTtcbiAgICAgIGlmIChpc01hdGNoKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCh7XG4gICAgICAgICAgaXRlbTogdGV4dCxcbiAgICAgICAgICBpZHgsXG4gICAgICAgICAgbWF0Y2hlczogW3tcbiAgICAgICAgICAgIHNjb3JlLFxuICAgICAgICAgICAgdmFsdWU6IHRleHQsXG4gICAgICAgICAgICBub3JtLFxuICAgICAgICAgICAgaW5kaWNlc1xuICAgICAgICAgIH1dXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG4gIF9zZWFyY2hMb2dpY2FsKHF1ZXJ5KSB7XG4gICAgY29uc3QgZXhwcmVzc2lvbiA9IHBhcnNlKHF1ZXJ5LCB0aGlzLm9wdGlvbnMpO1xuICAgIGNvbnN0IGV2YWx1YXRlID0gKG5vZGUsIGl0ZW0sIGlkeCkgPT4ge1xuICAgICAgaWYgKCFub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBrZXlJZCxcbiAgICAgICAgICBzZWFyY2hlclxuICAgICAgICB9ID0gbm9kZTtcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHRoaXMuX2ZpbmRNYXRjaGVzKHtcbiAgICAgICAgICBrZXk6IHRoaXMuX2tleVN0b3JlLmdldChrZXlJZCksXG4gICAgICAgICAgdmFsdWU6IHRoaXMuX215SW5kZXguZ2V0VmFsdWVGb3JJdGVtQXRLZXlJZChpdGVtLCBrZXlJZCksXG4gICAgICAgICAgc2VhcmNoZXJcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIFt7XG4gICAgICAgICAgICBpZHgsXG4gICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgbWF0Y2hlc1xuICAgICAgICAgIH1dO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlcyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IG5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgY2hpbGQgPSBub2RlLmNoaWxkcmVuW2ldO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBldmFsdWF0ZShjaGlsZCwgaXRlbSwgaWR4KTtcbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGgpIHtcbiAgICAgICAgICByZXMucHVzaCguLi5yZXN1bHQpO1xuICAgICAgICB9IGVsc2UgaWYgKG5vZGUub3BlcmF0b3IgPT09IExvZ2ljYWxPcGVyYXRvci5BTkQpIHtcbiAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXM7XG4gICAgfTtcbiAgICBjb25zdCByZWNvcmRzID0gdGhpcy5fbXlJbmRleC5yZWNvcmRzO1xuICAgIGNvbnN0IHJlc3VsdE1hcCA9IHt9O1xuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcbiAgICByZWNvcmRzLmZvckVhY2goKHtcbiAgICAgICQ6IGl0ZW0sXG4gICAgICBpOiBpZHhcbiAgICB9KSA9PiB7XG4gICAgICBpZiAoaXNEZWZpbmVkKGl0ZW0pKSB7XG4gICAgICAgIGxldCBleHBSZXN1bHRzID0gZXZhbHVhdGUoZXhwcmVzc2lvbiwgaXRlbSwgaWR4KTtcbiAgICAgICAgaWYgKGV4cFJlc3VsdHMubGVuZ3RoKSB7XG4gICAgICAgICAgLy8gRGVkdXBlIHdoZW4gYWRkaW5nXG4gICAgICAgICAgaWYgKCFyZXN1bHRNYXBbaWR4XSkge1xuICAgICAgICAgICAgcmVzdWx0TWFwW2lkeF0gPSB7XG4gICAgICAgICAgICAgIGlkeCxcbiAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgbWF0Y2hlczogW11cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXN1bHRzLnB1c2gocmVzdWx0TWFwW2lkeF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBleHBSZXN1bHRzLmZvckVhY2goKHtcbiAgICAgICAgICAgIG1hdGNoZXNcbiAgICAgICAgICB9KSA9PiB7XG4gICAgICAgICAgICByZXN1bHRNYXBbaWR4XS5tYXRjaGVzLnB1c2goLi4ubWF0Y2hlcyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxuICBfc2VhcmNoT2JqZWN0TGlzdChxdWVyeSkge1xuICAgIGNvbnN0IHNlYXJjaGVyID0gY3JlYXRlU2VhcmNoZXIocXVlcnksIHRoaXMub3B0aW9ucyk7XG4gICAgY29uc3Qge1xuICAgICAga2V5cyxcbiAgICAgIHJlY29yZHNcbiAgICB9ID0gdGhpcy5fbXlJbmRleDtcbiAgICBjb25zdCByZXN1bHRzID0gW107XG5cbiAgICAvLyBMaXN0IGlzIEFycmF5PE9iamVjdD5cbiAgICByZWNvcmRzLmZvckVhY2goKHtcbiAgICAgICQ6IGl0ZW0sXG4gICAgICBpOiBpZHhcbiAgICB9KSA9PiB7XG4gICAgICBpZiAoIWlzRGVmaW5lZChpdGVtKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQgbWF0Y2hlcyA9IFtdO1xuXG4gICAgICAvLyBJdGVyYXRlIG92ZXIgZXZlcnkga2V5IChpLmUsIHBhdGgpLCBhbmQgZmV0Y2ggdGhlIHZhbHVlIGF0IHRoYXQga2V5XG4gICAgICBrZXlzLmZvckVhY2goKGtleSwga2V5SW5kZXgpID0+IHtcbiAgICAgICAgbWF0Y2hlcy5wdXNoKC4uLnRoaXMuX2ZpbmRNYXRjaGVzKHtcbiAgICAgICAgICBrZXksXG4gICAgICAgICAgdmFsdWU6IGl0ZW1ba2V5SW5kZXhdLFxuICAgICAgICAgIHNlYXJjaGVyXG4gICAgICAgIH0pKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCh7XG4gICAgICAgICAgaWR4LFxuICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgbWF0Y2hlc1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxuICBfZmluZE1hdGNoZXMoe1xuICAgIGtleSxcbiAgICB2YWx1ZSxcbiAgICBzZWFyY2hlclxuICB9KSB7XG4gICAgaWYgKCFpc0RlZmluZWQodmFsdWUpKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGxldCBtYXRjaGVzID0gW107XG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKCh7XG4gICAgICAgIHY6IHRleHQsXG4gICAgICAgIGk6IGlkeCxcbiAgICAgICAgbjogbm9ybVxuICAgICAgfSkgPT4ge1xuICAgICAgICBpZiAoIWlzRGVmaW5lZCh0ZXh0KSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgaXNNYXRjaCxcbiAgICAgICAgICBzY29yZSxcbiAgICAgICAgICBpbmRpY2VzXG4gICAgICAgIH0gPSBzZWFyY2hlci5zZWFyY2hJbih0ZXh0KTtcbiAgICAgICAgaWYgKGlzTWF0Y2gpIHtcbiAgICAgICAgICBtYXRjaGVzLnB1c2goe1xuICAgICAgICAgICAgc2NvcmUsXG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICB2YWx1ZTogdGV4dCxcbiAgICAgICAgICAgIGlkeCxcbiAgICAgICAgICAgIG5vcm0sXG4gICAgICAgICAgICBpbmRpY2VzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHY6IHRleHQsXG4gICAgICAgIG46IG5vcm1cbiAgICAgIH0gPSB2YWx1ZTtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgaXNNYXRjaCxcbiAgICAgICAgc2NvcmUsXG4gICAgICAgIGluZGljZXNcbiAgICAgIH0gPSBzZWFyY2hlci5zZWFyY2hJbih0ZXh0KTtcbiAgICAgIGlmIChpc01hdGNoKSB7XG4gICAgICAgIG1hdGNoZXMucHVzaCh7XG4gICAgICAgICAgc2NvcmUsXG4gICAgICAgICAga2V5LFxuICAgICAgICAgIHZhbHVlOiB0ZXh0LFxuICAgICAgICAgIG5vcm0sXG4gICAgICAgICAgaW5kaWNlc1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cbn1cbkZ1c2UudmVyc2lvbiA9ICc3LjEuMCc7XG5GdXNlLmNyZWF0ZUluZGV4ID0gY3JlYXRlSW5kZXg7XG5GdXNlLnBhcnNlSW5kZXggPSBwYXJzZUluZGV4O1xuRnVzZS5jb25maWcgPSBDb25maWc7XG57XG4gIEZ1c2UucGFyc2VRdWVyeSA9IHBhcnNlO1xufVxue1xuICByZWdpc3RlcihFeHRlbmRlZFNlYXJjaCk7XG59XG5leHBvcnQgeyBGdXNlIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgY29tcHV0ZWQsIHNpZ25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJ1xuaW1wb3J0IHtcbiAgSW9uQ29udGVudCxcbiAgSW9uSGVhZGVyLFxuICBJb25UaXRsZSxcbiAgSW9uVG9vbGJhcixcbiAgSW9uQnV0dG9ucyxcbiAgSW9uQnV0dG9uLFxuICBJb25JY29uLFxuICBJb25UZXh0LFxuICBJb25TZWFyY2hiYXIsXG4gIElvbkxpc3QsXG4gIElvbkl0ZW0sXG4gIElvbkxpc3RIZWFkZXIsXG4gIElvbkxhYmVsLFxuICBJb25BY2NvcmRpb24sXG4gIElvbkFjY29yZGlvbkdyb3VwLFxuICBJb25Ta2VsZXRvblRleHQsXG4gIElvblNlbGVjdCxcbiAgSW9uU2VsZWN0T3B0aW9uLFxuICBJb25Nb2RhbCxcbiAgSW9uQ2hlY2tib3gsXG4gIElvblJvdyxcbiAgSW9uQ29sLFxufSBmcm9tICdAaW9uaWMvYW5ndWxhci9zdGFuZGFsb25lJ1xuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnc3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50J1xuaW1wb3J0IHtcbiAgY2FsbE91dGxpbmUsXG4gIGZpbHRlckNpcmNsZU91dGxpbmUsXG4gIGxvZ29XaGF0c2FwcCxcbiAgbWFpbE91dGxpbmUsXG4gIHNlYXJjaE91dGxpbmUsXG59IGZyb20gJ2lvbmljb25zL2ljb25zJ1xuaW1wb3J0IHsgYWRkSWNvbnMgfSBmcm9tICdpb25pY29ucydcbmltcG9ydCB7XG4gIGZhcUxvYWRpbmdTdGF0ZSxcbiAgU3VwcG9ydFNlcnZpY2UsXG59IGZyb20gJ3NyYy9hcHAvc2VydmljZXMvYXBpLXdyYXBwZXJzL3N1cHBvcnQuc2VydmljZSdcbmltcG9ydCB7XG4gIFJldHJpZXZlRmFxMjAwUmVzcG9uc2VBbGxPZkRhdGFJbm5lcixcbiAgUmV0cmlldmVQcm9ncmFtMjAwUmVzcG9uc2UsXG59IGZyb20gJ3NyYy9hcGktY3ljbGlzdCdcbmltcG9ydCBGdXNlIGZyb20gJ2Z1c2UuanMnXG5pbXBvcnQgeyBDYXBhY2l0b3IgfSBmcm9tICdAY2FwYWNpdG9yL2NvcmUnXG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gJ3NyYy9hcHAvc2VydmljZXMvdXRpbHMvc3RvcmFnZS5zZXJ2aWNlJ1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlLCBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSdcbmltcG9ydCB7IE9ic2VydmFibGUsIG1hcCB9IGZyb20gJ3J4anMnXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1zdXBwb3J0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1cHBvcnQucGFnZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3VwcG9ydC5wYWdlLnNjc3MnXSxcbiAgaW1wb3J0czogW1xuICAgIElvbkNvbnRlbnQsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIEhlYWRlckNvbXBvbmVudCxcbiAgICBJb25CdXR0b24sXG4gICAgSW9uSWNvbixcbiAgICBJb25UZXh0LFxuICAgIElvblNlYXJjaGJhcixcbiAgICBJb25MaXN0LFxuICAgIElvbkl0ZW0sXG4gICAgSW9uTGlzdEhlYWRlcixcbiAgICBJb25MYWJlbCxcbiAgICBJb25BY2NvcmRpb24sXG4gICAgSW9uQWNjb3JkaW9uR3JvdXAsXG4gICAgSW9uU2tlbGV0b25UZXh0LFxuICAgIElvbk1vZGFsLFxuICAgIElvbkNoZWNrYm94LFxuICAgIElvblJvdyxcbiAgICBJb25Db2wsXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBTdXBwb3J0UGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGZhcVN0YXRlOiBmYXFMb2FkaW5nU3RhdGVcbiAgc2VhcmNoUXVlcnk6IHN0cmluZyA9ICcnXG4gIHNrZWxldG9uQ291bnQ6IG51bWJlciA9IDZcbiAgc2VsZWN0ZWRDYXRlZ29yaWVzOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoKVxuICBwcml2YXRlIGZ1c2U6IEZ1c2U8UmV0cmlldmVGYXEyMDBSZXNwb25zZUFsbE9mRGF0YUlubmVyPiB8IG51bGwgPSBudWxsXG4gIHB1YmxpYyBwcm9ncmFtID0gc2lnbmFsPFJldHJpZXZlUHJvZ3JhbTIwMFJlc3BvbnNlIHwgbnVsbD4obnVsbClcbiAgb3BlbmluZ0hvdXJzVGV4dCQ6IE9ic2VydmFibGU8c3RyaW5nPlxuICBjdXJyZW50TGFuZyA9IHNpZ25hbCh0aGlzLnRyYW5zbGF0ZS5jdXJyZW50TGFuZylcblxuICBwcml2YXRlIGZvcm1hdFRpbWVTbG90KFxuICAgIHNsb3Q6IHsgb3Blbjogc3RyaW5nOyBjbG9zZTogc3RyaW5nIH0gfCB1bmRlZmluZWQsXG4gICAgZm9ybWF0OiBzdHJpbmdcbiAgKTogc3RyaW5nIHtcbiAgICBpZiAoIXNsb3QgfHwgIXNsb3Qub3BlbiB8fCAhc2xvdC5jbG9zZSkge1xuICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlLmluc3RhbnQoJ3N1cHBvcnQub3BlbmluZ19ob3Vycy5jbG9zZWQnKVxuICAgIH1cblxuICAgIGNvbnN0IG9wZW5UaW1lID0gdGhpcy5mb3JtYXRUaW1lKHNsb3Qub3BlbiwgZm9ybWF0KVxuICAgIGNvbnN0IGNsb3NlVGltZSA9IHRoaXMuZm9ybWF0VGltZShzbG90LmNsb3NlLCBmb3JtYXQpXG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlLmluc3RhbnQoJ3N1cHBvcnQub3BlbmluZ19ob3Vycy50aW1lX3Nsb3QnLCB7XG4gICAgICBvcGVuOiBvcGVuVGltZSxcbiAgICAgIGNsb3NlOiBjbG9zZVRpbWUsXG4gICAgfSlcbiAgfVxuXG4gIHByaXZhdGUgZm9ybWF0VGltZSh0aW1lOiBzdHJpbmcsIGZvcm1hdDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoIXRpbWUpIHJldHVybiAnJ1xuICAgIGNvbnN0IFtob3VycywgbWludXRlc10gPSB0aW1lLnNwbGl0KCc6JylcbiAgICByZXR1cm4gZm9ybWF0LnJlcGxhY2UoJ0hIJywgaG91cnMpLnJlcGxhY2UoJ21tJywgbWludXRlcylcbiAgfVxuXG4gIGdldERheUhvdXJzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IHByb2dyYW0gPSB0aGlzLnByb2dyYW0oKVxuICAgIGNvbnN0IGxhbmcgPSB0aGlzLmN1cnJlbnRMYW5nKClcblxuICAgIGNvbnN0IGZvcm1hdCA9IHRoaXMudHJhbnNsYXRlLmluc3RhbnQoJ3N1cHBvcnQub3BlbmluZ19ob3Vycy5mb3JtYXQnKVxuICAgIGNvbnN0IG9wZW5pbmdIb3VycyA9IHByb2dyYW0/LmNvbmZpZz8uaG90bGluZT8ub3BlbmluZ19ob3Vycz8ud2Vla2RheXNcblxuICAgIGlmICghb3BlbmluZ0hvdXJzKSB7XG4gICAgICByZXR1cm4gW11cbiAgICB9XG5cbiAgICBjb25zdCBncm91cHM6IHsgc3RhcnQ6IHN0cmluZzsgZW5kOiBzdHJpbmc7IGhvdXJzOiBzdHJpbmcgfVtdID0gW11cbiAgICBsZXQgY3VycmVudEdyb3VwOiB7IHN0YXJ0OiBzdHJpbmc7IGVuZDogc3RyaW5nOyBob3Vyczogc3RyaW5nIH0gfCBudWxsID1cbiAgICAgIG51bGxcblxuICAgIC8vIE9yZGVyIGRheXMgZnJvbSBNb25kYXkgKDEpIHRvIFN1bmRheSAoMClcbiAgICBjb25zdCBvcmRlcmVkRGF5cyA9IFsnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnMCddXG5cbiAgICBmb3IgKGNvbnN0IGRheUtleSBvZiBvcmRlcmVkRGF5cykge1xuICAgICAgY29uc3QgZGF5TmFtZSA9IGBzdXBwb3J0Lm9wZW5pbmdfaG91cnMuZGF5cy4ke2RheUtleX1gXG4gICAgICBjb25zdCBzbG90ID0gb3BlbmluZ0hvdXJzW2RheUtleV1cbiAgICAgIGNvbnN0IGhvdXJzID0gdGhpcy5mb3JtYXRUaW1lU2xvdChzbG90LCBmb3JtYXQpXG5cbiAgICAgIGlmICghY3VycmVudEdyb3VwKSB7XG4gICAgICAgIGN1cnJlbnRHcm91cCA9IHsgc3RhcnQ6IGRheU5hbWUsIGVuZDogZGF5TmFtZSwgaG91cnMgfVxuICAgICAgfSBlbHNlIGlmIChjdXJyZW50R3JvdXAuaG91cnMgPT09IGhvdXJzKSB7XG4gICAgICAgIGN1cnJlbnRHcm91cC5lbmQgPSBkYXlOYW1lXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBncm91cHMucHVzaChjdXJyZW50R3JvdXApXG4gICAgICAgIGN1cnJlbnRHcm91cCA9IHsgc3RhcnQ6IGRheU5hbWUsIGVuZDogZGF5TmFtZSwgaG91cnMgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgbGFzdCBncm91cCBpZiBpdCBleGlzdHNcbiAgICBpZiAoY3VycmVudEdyb3VwKSB7XG4gICAgICBncm91cHMucHVzaChjdXJyZW50R3JvdXApXG4gICAgfVxuXG4gICAgcmV0dXJuIGdyb3Vwcy5tYXAoKGdyb3VwKSA9PiB7XG4gICAgICBpZiAoZ3JvdXAuc3RhcnQgPT09IGdyb3VwLmVuZCkge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy50cmFuc2xhdGUuaW5zdGFudChncm91cC5zdGFydCl9IDogJHtncm91cC5ob3Vyc31gXG4gICAgICB9XG4gICAgICByZXR1cm4gYCR7dGhpcy50cmFuc2xhdGUuaW5zdGFudChcbiAgICAgICAgJ3N1cHBvcnQub3BlbmluZ19ob3Vycy5mcm9tJ1xuICAgICAgKX0gJHt0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KGdyb3VwLnN0YXJ0KX0gJHt0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KFxuICAgICAgICAnc3VwcG9ydC5vcGVuaW5nX2hvdXJzLnRvJ1xuICAgICAgKX0gJHt0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KGdyb3VwLmVuZCl9IDogJHtncm91cC5ob3Vyc31gXG4gICAgfSlcbiAgfSlcblxuICBnZXRIb2xpZGF5SG91cnMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgcHJvZ3JhbSA9IHRoaXMucHJvZ3JhbSgpXG4gICAgY29uc3QgbGFuZyA9IHRoaXMuY3VycmVudExhbmcoKVxuXG4gICAgY29uc3QgZm9ybWF0ID0gdGhpcy50cmFuc2xhdGUuaW5zdGFudCgnc3VwcG9ydC5vcGVuaW5nX2hvdXJzLmZvcm1hdCcpXG4gICAgY29uc3Qgc2xvdCA9IHByb2dyYW0/LmNvbmZpZz8uaG90bGluZT8ub3BlbmluZ19ob3Vycz8uaG9saWRheXNcbiAgICByZXR1cm4gdGhpcy5mb3JtYXRUaW1lU2xvdChzbG90LCBmb3JtYXQpXG4gIH0pXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHN1cHBvcnRTZXJ2aWNlOiBTdXBwb3J0U2VydmljZSxcbiAgICBwcml2YXRlIHN0b3JhZ2U6IFN0b3JhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlXG4gICkge1xuICAgIGFkZEljb25zKHtcbiAgICAgIGNhbGxPdXRsaW5lLFxuICAgICAgbG9nb1doYXRzYXBwLFxuICAgICAgbWFpbE91dGxpbmUsXG4gICAgICBzZWFyY2hPdXRsaW5lLFxuICAgICAgZmlsdGVyQ2lyY2xlT3V0bGluZSxcbiAgICB9KVxuICAgIHRoaXMuc3VwcG9ydFNlcnZpY2UuZmFxU3RhdGUuc3Vic2NyaWJlKChzdGF0ZSkgPT4ge1xuICAgICAgdGhpcy5mYXFTdGF0ZSA9IHN0YXRlXG4gICAgICBpZiAoc3RhdGUuc3RhdGUgPT09ICdzdWNjZXNzJykge1xuICAgICAgICB0aGlzLmZ1c2UgPSBuZXcgRnVzZShzdGF0ZS5mYXEsIHtcbiAgICAgICAgICBrZXlzOiBbJ3F1ZXN0aW9uJywgJ2Fuc3dlciddLFxuICAgICAgICAgIHRocmVzaG9sZDogMC4zLFxuICAgICAgICAgIGlnbm9yZUxvY2F0aW9uOiB0cnVlLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLnRyYW5zbGF0ZS5vbkxhbmdDaGFuZ2Uuc3Vic2NyaWJlKChldmVudCkgPT4ge1xuICAgICAgdGhpcy5jdXJyZW50TGFuZy5zZXQoZXZlbnQubGFuZylcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgcHJvZ3JhbSA9IGF3YWl0IHRoaXMuc3RvcmFnZS5nZXQoJ3Byb2dyYW0nKVxuICAgIHRoaXMucHJvZ3JhbS5zZXQocHJvZ3JhbSlcbiAgICB0aGlzLnN1cHBvcnRTZXJ2aWNlLmdldEZhcSgpXG4gICAgdGhpcy5zdXBwb3J0U2VydmljZS5mYXFTdGF0ZS5zdWJzY3JpYmUoKHN0YXRlKSA9PiB7XG4gICAgICBpZiAoc3RhdGUuc3RhdGUgPT09ICdzdWNjZXNzJykge1xuICAgICAgICB0aGlzLnNlbGVjdGVkQ2F0ZWdvcmllcyA9IG5ldyBTZXQoW1xuICAgICAgICAgIC4uLm5ldyBTZXQoc3RhdGUuZmFxLm1hcCgoaXRlbSkgPT4gaXRlbS5jYXRlZ29yeSkpLFxuICAgICAgICBdKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBvcGVuaW5nSG91cnMgPSB0aGlzLnByb2dyYW0oKT8uY29uZmlnPy5ob3RsaW5lPy5vcGVuaW5nX2hvdXJzXG4gICAgaWYgKG9wZW5pbmdIb3Vycykge1xuICAgICAgdGhpcy5vcGVuaW5nSG91cnNUZXh0JCA9IHRoaXMuZ2V0Rm9ybWF0dGVkT3BlbmluZ0hvdXJzKG9wZW5pbmdIb3VycylcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldEZvcm1hdHRlZE9wZW5pbmdIb3VycyhvcGVuaW5nSG91cnM6IGFueSk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlLmdldCgnc3VwcG9ydC5vcGVuaW5nX2hvdXJzJykucGlwZShcbiAgICAgIG1hcCgodHJhbnNsYXRpb25zKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZERheXMgPSBbXVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSA2OyBpKyspIHtcbiAgICAgICAgICBjb25zdCBkYXlLZXkgPSBpLnRvU3RyaW5nKClcbiAgICAgICAgICBjb25zdCBkYXlOYW1lID0gYHN1cHBvcnQub3BlbmluZ19ob3Vycy5kYXlzLiR7ZGF5S2V5fWBcbiAgICAgICAgICBjb25zdCBzbG90ID0gb3BlbmluZ0hvdXJzLndlZWtkYXlzW2RheUtleV1cbiAgICAgICAgICBmb3JtYXR0ZWREYXlzLnB1c2goXG4gICAgICAgICAgICBgJHt0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KGRheU5hbWUpfSA6ICR7dGhpcy5mb3JtYXRUaW1lU2xvdChcbiAgICAgICAgICAgICAgc2xvdCxcbiAgICAgICAgICAgICAgdHJhbnNsYXRpb25zLmZvcm1hdFxuICAgICAgICAgICAgKX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaG9saWRheXMgPSBgJHt0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KFxuICAgICAgICAgICdzdXBwb3J0Lm9wZW5pbmdfaG91cnMuZGF5cy5ob2xpZGF5cydcbiAgICAgICAgKX0gOiAke3RoaXMuZm9ybWF0VGltZVNsb3Qob3BlbmluZ0hvdXJzLmhvbGlkYXlzLCB0cmFuc2xhdGlvbnMuZm9ybWF0KX1gXG5cbiAgICAgICAgcmV0dXJuIFsuLi5mb3JtYXR0ZWREYXlzLCBob2xpZGF5c10uam9pbignXFxuJylcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlU2VhcmNoKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLnNlYXJjaFF1ZXJ5ID0gZXZlbnQudGFyZ2V0LnZhbHVlXG4gIH1cblxuICB0b2dnbGVDYXRlZ29yeShjYXRlZ29yeTogc3RyaW5nLCBpc0NoZWNrZWQ6IGJvb2xlYW4pIHtcbiAgICBpZiAoaXNDaGVja2VkKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkQ2F0ZWdvcmllcy5hZGQoY2F0ZWdvcnkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRDYXRlZ29yaWVzLmRlbGV0ZShjYXRlZ29yeSlcbiAgICB9XG4gIH1cblxuICBnZXRGaWx0ZXJlZEZhcSgpOiBSZXRyaWV2ZUZhcTIwMFJlc3BvbnNlQWxsT2ZEYXRhSW5uZXJbXSB7XG4gICAgaWYgKHRoaXMuZmFxU3RhdGUuc3RhdGUgIT09ICdzdWNjZXNzJykgcmV0dXJuIFtdXG5cbiAgICBsZXQgZmlsdGVyZWQgPSB0aGlzLmZhcVN0YXRlLmZhcVxuXG4gICAgaWYgKHRoaXMuc2VhcmNoUXVlcnkgJiYgdGhpcy5mdXNlKSB7XG4gICAgICBmaWx0ZXJlZCA9IHRoaXMuZnVzZS5zZWFyY2godGhpcy5zZWFyY2hRdWVyeSkubWFwKChyZXN1bHQpID0+IHJlc3VsdC5pdGVtKVxuICAgIH1cblxuICAgIGZpbHRlcmVkID0gZmlsdGVyZWQuZmlsdGVyKChpdGVtKSA9PlxuICAgICAgdGhpcy5zZWxlY3RlZENhdGVnb3JpZXMuaGFzKGl0ZW0uY2F0ZWdvcnkpXG4gICAgKVxuXG4gICAgcmV0dXJuIGZpbHRlcmVkXG4gIH1cblxuICBnZXRGYXFCeUNhdGVnb3J5KGNhdGVnb3J5OiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5mYXFTdGF0ZS5zdGF0ZSAhPT0gJ3N1Y2Nlc3MnKSByZXR1cm4gW11cblxuICAgIHJldHVybiB0aGlzLmdldEZpbHRlcmVkRmFxKCkuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmNhdGVnb3J5ID09PSBjYXRlZ29yeSlcbiAgfVxuXG4gIGdldFVuaXF1ZUNhdGVnb3JpZXMoKTogc3RyaW5nW10ge1xuICAgIGlmICh0aGlzLmZhcVN0YXRlLnN0YXRlICE9PSAnc3VjY2VzcycpIHJldHVybiBbXVxuICAgIHJldHVybiBbLi4ubmV3IFNldCh0aGlzLmZhcVN0YXRlLmZhcS5tYXAoKGl0ZW0pID0+IGl0ZW0uY2F0ZWdvcnkpKV1cbiAgfVxuXG4gIGlzQWxsU2VsZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRDYXRlZ29yaWVzLnNpemUgPT09IHRoaXMuZ2V0VW5pcXVlQ2F0ZWdvcmllcygpLmxlbmd0aFxuICB9XG5cbiAgdG9nZ2xlQWxsKHNlbGVjdEFsbDogYm9vbGVhbikge1xuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSB0aGlzLmdldFVuaXF1ZUNhdGVnb3JpZXMoKVxuICAgIGlmIChzZWxlY3RBbGwpIHtcbiAgICAgIGNhdGVnb3JpZXMuZm9yRWFjaCgoY2F0ZWdvcnkpID0+IHRoaXMuc2VsZWN0ZWRDYXRlZ29yaWVzLmFkZChjYXRlZ29yeSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRDYXRlZ29yaWVzLmNsZWFyKClcbiAgICB9XG4gIH1cblxuICBzY3JvbGxUb0ZhcSgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZhcScpXG4gICAgaWYgKGVsZW1lbnQgJiYgQ2FwYWNpdG9yLmlzTmF0aXZlUGxhdGZvcm0oKSkge1xuICAgICAgZWxlbWVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KVxuICAgIH1cbiAgfVxufVxuIiwiPGFwcC1oZWFkZXIgW2RlZmF1bHRIcmVmXT1cIicvYWNjb3VudCdcIj48L2FwcC1oZWFkZXI+XG5cbjxpb24tY29udGVudCBjbGFzcz1cImlvbi1wYWRkaW5nXCI+XG4gIDxpb24tcm93IGNsYXNzPVwiaW9uLWp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICA8aW9uLWNvbCBzaXplPVwiMTJcIiBzaXplLW1kPVwiOFwiIHNpemUtbGc9XCI2XCI+XG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGgxIGNsYXNzPVwiaW9uLW5vLW1hcmdpblwiPnt7ICdzdXBwb3J0LmNvbnRhY3RfdXMnIHwgdHJhbnNsYXRlIH19PC9oMT5cbiAgICAgICAgPGlvbi1saXN0IGxpbmVzPVwibm9uZVwiIGNsYXNzPVwiY29tcGFjdC1saXN0IGlvbi1tYXJnaW4tdmVydGljYWxcIj5cbiAgICAgICAgICBAZm9yIChob3VycyBvZiBnZXREYXlIb3VycygpOyB0cmFjayAkaW5kZXgpIHtcbiAgICAgICAgICA8aW9uLWl0ZW0gY2xhc3M9XCJpb24tbm8tcGFkZGluZyBjb21wYWN0LWl0ZW1cIj4ge3sgaG91cnMgfX0gPC9pb24taXRlbT5cbiAgICAgICAgICB9XG4gICAgICAgICAgPGlvbi1pdGVtIGNsYXNzPVwiaW9uLW5vLXBhZGRpbmcgY29tcGFjdC1pdGVtXCI+XG4gICAgICAgICAgICB7eyAnc3VwcG9ydC5vcGVuaW5nX2hvdXJzLmRheXMuaG9saWRheXMnIHwgdHJhbnNsYXRlIH19IDoge3tcbiAgICAgICAgICAgIGdldEhvbGlkYXlIb3VycygpIH19XG4gICAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgPC9pb24tbGlzdD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cbiAgICAgICAgICA8YSBocmVmPVwidGVsOnt7IHByb2dyYW0oKT8uY29uZmlnPy5ob3RsaW5lPy5waG9uZV9udW1iZXIgfX1cIj5cbiAgICAgICAgICAgIDxpb24tYnV0dG9uIGV4cGFuZD1cImJsb2NrXCIgc2hhcGU9XCJyb3VuZFwiIGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImNhbGwtb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICAgIDxpb24tdGV4dD57eyAnc3VwcG9ydC5jYWxsX3VzJyB8IHRyYW5zbGF0ZSB9fTwvaW9uLXRleHQ+XG4gICAgICAgICAgICA8L2lvbi1idXR0b24+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDwhLS0gV0hBVFNBUFBCVVRUT04gLS0+XG4gICAgICAgICAgPCEtLSA8aW9uLWJ1dHRvblxuICAgICAgICBleHBhbmQ9XCJibG9ja1wiXG4gICAgICAgIHNoYXBlPVwicm91bmRcIlxuICAgICAgICBjbGFzcz1cImVjbC13aGF0c2FwcCBpb24tbWFyZ2luLXZlcnRpY2FsXCJcbiAgICAgID5cbiAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJsb2dvLXdoYXRzYXBwXCI+PC9pb24taWNvbj5cbiAgICAgICAgPGlvbi10ZXh0PkNvbnRhY3Rlei1ub3VzIHN1ciBXaGF0c0FwcDwvaW9uLXRleHQ+XG4gICAgICA8L2lvbi1idXR0b24+IC0tPlxuICAgICAgICAgIDxhIFtocmVmXT1cInN1cHBvcnRTZXJ2aWNlLmdlbmVyYXRlU3VwcG9ydE1haWx0b0xpbmsoKVwiPlxuICAgICAgICAgICAgPGlvbi1idXR0b24gZXhwYW5kPVwiYmxvY2tcIiBzaGFwZT1cInJvdW5kXCIgY29sb3I9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJtYWlsLW91dGxpbmVcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICA8aW9uLXRleHQ+e3sgJ3N1cHBvcnQuZW1haWxfdXMnIHwgdHJhbnNsYXRlIH19PC9pb24tdGV4dD5cbiAgICAgICAgICAgIDwvaW9uLWJ1dHRvbj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gaWQ9XCJmYXFcIj5cbiAgICAgICAgPGgxPnt7ICdzdXBwb3J0LmZhcS50aXRsZScgfCB0cmFuc2xhdGUgfX08L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxpb24tc2VhcmNoYmFyXG4gICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiJ3N1cHBvcnQuZmFxLnNlYXJjaF9wbGFjZWhvbGRlcicgfCB0cmFuc2xhdGVcIlxuICAgICAgICAgICAgY2xhc3M9XCJlY2wtc2VhcmNoYmFyXCJcbiAgICAgICAgICAgIHNob3ctY2xlYXItYnV0dG9uPVwibmV2ZXJcIlxuICAgICAgICAgICAgKGlvbklucHV0KT1cImhhbmRsZVNlYXJjaCgkZXZlbnQpXCJcbiAgICAgICAgICAgIChpb25Gb2N1cyk9XCJzY3JvbGxUb0ZhcSgpXCJcbiAgICAgICAgICAgIChjbGljayk9XCJzY3JvbGxUb0ZhcSgpXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWNsLXNlYXJjaGJhci1pY29uXCI+XG4gICAgICAgICAgICAgIDxpb24taWNvblxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJtZWRpdW1cIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJzZWFyY2gtb3V0bGluZVwiXG4gICAgICAgICAgICAgID48L2lvbi1pY29uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWNsLXNlYXJjaGJhci1lbmRfaWNvblwiIGlkPVwib3Blbi1jdXN0b20tZGlhbG9nXCI+XG4gICAgICAgICAgICAgIDxpb24taWNvblxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJtZWRpdW1cIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJmaWx0ZXItY2lyY2xlLW91dGxpbmVcIlxuICAgICAgICAgICAgICA+PC9pb24taWNvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvaW9uLXNlYXJjaGJhcj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgQGlmIChmYXFTdGF0ZS5zdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgICAgIDxpb24tbGlzdD5cbiAgICAgICAgICA8aW9uLWl0ZW0gKm5nRm9yPVwibGV0IGkgb2YgW10uY29uc3RydWN0b3Ioc2tlbGV0b25Db3VudClcIj5cbiAgICAgICAgICAgIDxpb24tbGFiZWw+XG4gICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHRcbiAgICAgICAgICAgICAgICAgIFthbmltYXRlZF09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDgwJVwiXG4gICAgICAgICAgICAgICAgPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIDxpb24tc2tlbGV0b24tdGV4dFxuICAgICAgICAgICAgICAgICAgW2FuaW1hdGVkXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogNjAlXCJcbiAgICAgICAgICAgICAgICA+PC9pb24tc2tlbGV0b24tdGV4dD5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICA8aW9uLXNrZWxldG9uLXRleHRcbiAgICAgICAgICAgICAgICAgIFthbmltYXRlZF09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDMwJVwiXG4gICAgICAgICAgICAgICAgPjwvaW9uLXNrZWxldG9uLXRleHQ+XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICAgIDwvaW9uLWxpc3Q+XG4gICAgICAgIH0gQGlmIChmYXFTdGF0ZS5zdGF0ZSA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgIDxpb24tbW9kYWwgaWQ9XCJleGFtcGxlLW1vZGFsXCIgI21vZGFsIHRyaWdnZXI9XCJvcGVuLWN1c3RvbS1kaWFsb2dcIj5cbiAgICAgICAgICA8bmctdGVtcGxhdGU+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwid3JhcHBlclwiPlxuICAgICAgICAgICAgICA8aW9uLWxpc3QgbGluZXM9XCJub25lXCI+XG4gICAgICAgICAgICAgICAgPGlvbi1saXN0LWhlYWRlcj5cbiAgICAgICAgICAgICAgICAgIDxoND57eyAnc3VwcG9ydC5mYXEuc2VsZWN0X2NhdGVnb3JpZXMnIHwgdHJhbnNsYXRlIH19PC9oND5cbiAgICAgICAgICAgICAgICA8L2lvbi1saXN0LWhlYWRlcj5cbiAgICAgICAgICAgICAgICA8aW9uLWl0ZW0gYnV0dG9uPVwidHJ1ZVwiIGRldGFpbD1cImZhbHNlXCI+XG4gICAgICAgICAgICAgICAgICA8aW9uLWNoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgIFtjaGVja2VkXT1cImlzQWxsU2VsZWN0ZWQoKVwiXG4gICAgICAgICAgICAgICAgICAgIChpb25DaGFuZ2UpPVwidG9nZ2xlQWxsKCFpc0FsbFNlbGVjdGVkKCkpXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3sgJ3N1cHBvcnQuZmFxLmFsbF9ub25lJyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICAgICAgICAgICAgPC9pb24tY2hlY2tib3g+XG4gICAgICAgICAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgICAgICAgICBAZm9yIChjYXRlZ29yeSBvZiBnZXRVbmlxdWVDYXRlZ29yaWVzKCk7IHRyYWNrIGNhdGVnb3J5KSB7XG4gICAgICAgICAgICAgICAgPGlvbi1pdGVtIGJ1dHRvbj1cInRydWVcIiBkZXRhaWw9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgPGlvbi1jaGVja2JveFxuICAgICAgICAgICAgICAgICAgICBbY2hlY2tlZF09XCJzZWxlY3RlZENhdGVnb3JpZXMuaGFzKGNhdGVnb3J5KVwiXG4gICAgICAgICAgICAgICAgICAgIChpb25DaGFuZ2UpPVwidG9nZ2xlQ2F0ZWdvcnkoY2F0ZWdvcnksICRldmVudC5kZXRhaWwuY2hlY2tlZClcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7eyBjYXRlZ29yeSB9fVxuICAgICAgICAgICAgICAgICAgPC9pb24tY2hlY2tib3g+XG4gICAgICAgICAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvaW9uLWxpc3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8L2lvbi1tb2RhbD5cblxuICAgICAgICBAaWYgKGdldEZpbHRlcmVkRmFxKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpb24tdGV4dC1jZW50ZXIgaW9uLXBhZGRpbmdcIj5cbiAgICAgICAgICA8cD57eyAnc3VwcG9ydC5mYXEubm9fcmVzdWx0cycgfCB0cmFuc2xhdGUgfX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB9IEBlbHNlIHsgQGZvciAoY2F0ZWdvcnkgb2YgZ2V0VW5pcXVlQ2F0ZWdvcmllcygpOyB0cmFjayBjYXRlZ29yeSkgeyBAaWZcbiAgICAgICAgKHNlbGVjdGVkQ2F0ZWdvcmllcy5oYXMoY2F0ZWdvcnkpICYmIGdldEZhcUJ5Q2F0ZWdvcnkoY2F0ZWdvcnkpLmxlbmd0aCA+XG4gICAgICAgIDApIHtcbiAgICAgICAgPGlvbi1saXN0IG1vZGU9XCJpb3NcIiBsaW5lcz1cImZ1bGxcIiBjbGFzcz1cImlvbi1uby1tYXJnaW5cIj5cbiAgICAgICAgICA8aW9uLWxpc3QtaGVhZGVyIGNsYXNzPVwiaW9uLW5vLXBhZGRpbmcgaW9uLW1hcmdpbi10b3BcIj5cbiAgICAgICAgICAgIDxoNT48c3Ryb25nPnt7IGNhdGVnb3J5IH19PC9zdHJvbmc+PC9oNT5cbiAgICAgICAgICA8L2lvbi1saXN0LWhlYWRlcj5cbiAgICAgICAgICA8aW9uLWFjY29yZGlvbi1ncm91cD5cbiAgICAgICAgICAgIEBmb3IgKGZhcSBvZiBnZXRGYXFCeUNhdGVnb3J5KGNhdGVnb3J5KTsgdHJhY2sgZmFxLnF1ZXN0aW9uKSB7XG4gICAgICAgICAgICA8aW9uLWFjY29yZGlvbiBjb2xvcj1cImdyZXlcIiB2YWx1ZT1cInt7IGZhcS5xdWVzdGlvbiB9fVwiPlxuICAgICAgICAgICAgICA8aW9uLWl0ZW0gc2xvdD1cImhlYWRlclwiIGxpbmVzPVwiZnVsbFwiIGluc2V0PVwidHJ1ZVwiIGNvbG9yPVwiZ3JleVwiPlxuICAgICAgICAgICAgICAgIDxpb24tbGFiZWw+e3sgZmFxLnF1ZXN0aW9uIH19PC9pb24tbGFiZWw+XG4gICAgICAgICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICAgICAgICAgIDxpb24taXRlbSBzbG90PVwiY29udGVudFwiIGxpbmVzPVwiZnVsbFwiIGluc2V0PVwidHJ1ZVwiIGNvbG9yPVwiZ3JleVwiPlxuICAgICAgICAgICAgICAgIDxpb24tbGFiZWw+PHNtYWxsPnt7IGZhcS5hbnN3ZXIgfX08L3NtYWxsPjwvaW9uLWxhYmVsPlxuICAgICAgICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgICAgICAgPC9pb24tYWNjb3JkaW9uPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvaW9uLWFjY29yZGlvbi1ncm91cD5cbiAgICAgICAgPC9pb24tbGlzdD5cbiAgICAgICAgfSB9IH0gfVxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvaW9uLWNvbD5cbiAgPC9pb24tcm93PlxuPC9pb24tY29udGVudD5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0EsU0FBUyxRQUFRLE9BQU87QUFDdEIsU0FBTyxDQUFDLE1BQU0sVUFBVSxPQUFPLEtBQUssTUFBTSxtQkFBbUIsTUFBTSxRQUFRLEtBQUs7QUFDbEY7QUFHQSxJQUFNLFdBQVcsSUFBSTtBQUNyQixTQUFTLGFBQWEsT0FBTztBQUUzQixNQUFJLE9BQU8sU0FBUyxVQUFVO0FBQzVCLFdBQU87QUFBQSxFQUNUO0FBQ0EsTUFBSSxTQUFTLFFBQVE7QUFDckIsU0FBTyxVQUFVLE9BQU8sSUFBSSxTQUFTLENBQUMsV0FBVyxPQUFPO0FBQzFEO0FBQ0EsU0FBUyxTQUFTLE9BQU87QUFDdkIsU0FBTyxTQUFTLE9BQU8sS0FBSyxhQUFhLEtBQUs7QUFDaEQ7QUFDQSxTQUFTLFNBQVMsT0FBTztBQUN2QixTQUFPLE9BQU8sVUFBVTtBQUMxQjtBQUNBLFNBQVMsU0FBUyxPQUFPO0FBQ3ZCLFNBQU8sT0FBTyxVQUFVO0FBQzFCO0FBR0EsU0FBUyxVQUFVLE9BQU87QUFDeEIsU0FBTyxVQUFVLFFBQVEsVUFBVSxTQUFTLGFBQWEsS0FBSyxLQUFLLE9BQU8sS0FBSyxLQUFLO0FBQ3RGO0FBQ0EsU0FBUyxTQUFTLE9BQU87QUFDdkIsU0FBTyxPQUFPLFVBQVU7QUFDMUI7QUFHQSxTQUFTLGFBQWEsT0FBTztBQUMzQixTQUFPLFNBQVMsS0FBSyxLQUFLLFVBQVU7QUFDdEM7QUFDQSxTQUFTLFVBQVUsT0FBTztBQUN4QixTQUFPLFVBQVUsVUFBYSxVQUFVO0FBQzFDO0FBQ0EsU0FBUyxRQUFRLE9BQU87QUFDdEIsU0FBTyxDQUFDLE1BQU0sS0FBSyxFQUFFO0FBQ3ZCO0FBSUEsU0FBUyxPQUFP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QUEsUUFBQSxDQUFBLENBQUEsU0FBQSxFQUFBLEdBQUEsQ0FBQSxHQUFBLGFBQUEsR0FBQSxDQUFBLEdBQUEsYUFBQSxHQUFBLENBQUEsR0FBQSw0QkFBQSxHQUFBLENBQUEsUUFBQSxNQUFBLFdBQUEsS0FBQSxXQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsZUFBQSxHQUFBLENBQUEsU0FBQSxRQUFBLEdBQUEsZ0JBQUEscUJBQUEsR0FBQSxDQUFBLEdBQUEsa0JBQUEsY0FBQSxHQUFBLENBQUEsR0FBQSxTQUFBLEdBQUEsQ0FBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLFVBQUEsU0FBQSxTQUFBLFNBQUEsU0FBQSxTQUFBLEdBQUEsQ0FBQSxRQUFBLGNBQUEsR0FBQSxDQUFBLFVBQUEsU0FBQSxTQUFBLFNBQUEsU0FBQSxXQUFBLEdBQUEsQ0FBQSxRQUFBLGNBQUEsR0FBQSxDQUFBLE1BQUEsS0FBQSxHQUFBLENBQUEsR0FBQSxrQkFBQSxHQUFBLENBQUEscUJBQUEsU0FBQSxHQUFBLGlCQUFBLEdBQUEsWUFBQSxZQUFBLFNBQUEsYUFBQSxHQUFBLENBQUEsR0FBQSxvQkFBQSxHQUFBLENBQUEsUUFBQSxTQUFBLFNBQUEsVUFBQSxRQUFBLGdCQUFBLEdBQUEsQ0FBQSxNQUFBLHNCQUFBLEdBQUEsd0JBQUEsR0FBQSxDQUFBLFFBQUEsU0FBQSxTQUFBLFVBQUEsUUFBQSx1QkFBQSxHQUFBLENBQUEsR0FBQSxTQUFBLFNBQUEsR0FBQSxDQUFBLEdBQUEsU0FBQSxPQUFBLEdBQUEsVUFBQSxHQUFBLENBQUEsR0FBQSxTQUFBLE9BQUEsR0FBQSxVQUFBLEdBQUEsQ0FBQSxHQUFBLFNBQUEsT0FBQSxHQUFBLFVBQUEsR0FBQSxDQUFBLE1BQUEsaUJBQUEsV0FBQSxvQkFBQSxHQUFBLENBQUEsR0FBQSxtQkFBQSxhQUFBLEdBQUEsQ0FBQSxHQUFBLFNBQUEsR0FBQSxDQUFBLFNBQUEsTUFBQSxHQUFBLENBQUEsVUFBQSxRQUFBLFVBQUEsT0FBQSxHQUFBLENBQUEsR0FBQSxhQUFBLFNBQUEsR0FBQSxDQUFBLFFB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LFFBQUEsU0FBQSxVQUFBLElBQUEsUUFBQSxNQUFBLE9BQUEsT0FBQSxRQUFBLFVBQUEsT0FBQSxPQUFBLFFBQUEsT0FBQSxXQUFBLE9BQUEsT0FBQSxRQUFBLE9BQUEsUUFBQSxjQUFBLElBQUEsdUJBQUE7QUFHVyxJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLDRCQUFBLHNCQUFBLElBQUEsSUFBQSxpQkFBQSxDQUFBO0FBWVgsSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSxxQkFBQSxRQUFBLElBQUEsZUFBQSwwQkFBQSxHQUFBLHVCQUFBO0FBR1csSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSw0QkFBQSxzQkFBQSxJQUFBLElBQUEsa0JBQUEsQ0FBQTtBQU1aLElBQUEsb0JBQUEsQ0FBQTtBQUFBLElBQUEsNEJBQUEsc0JBQUEsSUFBQSxJQUFBLG1CQUFBLENBQUE7QUFHQSxJQUFBLG9CQUFBLENBQUE7QUFBQSxJQUFBLHFCQUFBLGVBQUEsc0JBQUEsSUFBQSxJQUFBLGdDQUFBLENBQUE7QUF3QkosSUFBQSxvQkFBQSxDQUFBO0FBQUEsSUFBQSx3QkFBQSxJQUFBLFNBQUEsVUFBQSxZQUFBLEtBQUEsRUFBQTtBQXlCRSxJQUFBLG9CQUFBO0FBQUEsSUFBQSx3QkFBQSxJQUFBLFNBQUEsVUFBQSxZQUFBLEtBQUEsRUFBQTs7O0VEdENOO0VBQ0E7RUFBWTtFQUNaO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUFlO0FBQUEsR0FBQSxRQUFBLENBQUEseTNCQUFBLEVBQUEsQ0FBQTtBQUdiLElBQU8sY0FBUDs7c0VBQU8sYUFBVyxDQUFBO1VBM0J2Qjt1QkFDVyxlQUFhLFNBR2Q7TUFDUDtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO09BQ0QsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBQUEsUUFBQSxDQUFBLGl3QkFBQSxFQUFBLENBQUE7Ozs7NkVBRVUsYUFBVyxFQUFBLFdBQUEsZUFBQSxVQUFBLGlEQUFBLFlBQUEsR0FBQSxDQUFBO0FBQUEsR0FBQTsiLCJuYW1lcyI6WyJvYmoiLCJwYXRoIiwibm9ybSIsInZhbHVlIiwic2NvcmUiLCJwYXR0ZXJuIiwicmVzdWx0IiwiaXRlbSIsInNlYXJjaGVycyIsInF1ZXJ5IiwiZm9ybWF0Il0sInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswXX0=
