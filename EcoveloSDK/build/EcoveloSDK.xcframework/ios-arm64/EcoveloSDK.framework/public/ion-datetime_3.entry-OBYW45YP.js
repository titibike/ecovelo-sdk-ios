import {
  calculateHourFromAMPM,
  clampDate,
  convertDataToISO,
  convertToArrayOfNumbers,
  formatValue,
  generateDayAriaLabel,
  generateMonths,
  getClosestValidDate,
  getCombinedDateColumnData,
  getDay,
  getDayColumnData,
  getDaysOfMonth,
  getDaysOfWeek,
  getEndOfWeek,
  getHourCycle,
  getLocalizedDateTime,
  getLocalizedTime,
  getMonthAndYear,
  getMonthColumnData,
  getNextDay,
  getNextMonth,
  getNextWeek,
  getNextYear,
  getNumDaysInMonth,
  getPartsFromCalendarDay,
  getPreviousDay,
  getPreviousMonth,
  getPreviousWeek,
  getPreviousYear,
  getStartOfWeek,
  getTimeColumnsData,
  getToday,
  getYearColumnData,
  isAfter,
  isBefore,
  isLocaleDayPeriodRTL,
  isMonthFirstLocale,
  isSameDay,
  parseAmPm,
  parseDate,
  parseMaxParts,
  parseMinParts,
  validateParts,
  warnIfValueOutOfBounds
} from "./chunk-IRPX4VRE.js";
import {
  startFocusVisible
} from "./chunk-5BCVOG4L.js";
import {
  isRTL
} from "./chunk-4LZLDCVM.js";
import {
  caretDownSharp,
  caretUpSharp,
  chevronBack,
  chevronDown,
  chevronForward
} from "./chunk-D4BGZ3LF.js";
import {
  hapticSelectionChanged,
  hapticSelectionEnd,
  hapticSelectionStart
} from "./chunk-QINLMX2Z.js";
import {
  createLockController
} from "./chunk-MEM7IN4A.js";
import "./chunk-VZXYYFOL.js";
import {
  BACKDROP,
  createDelegateController,
  createTriggerController,
  dismiss,
  eventMethod,
  isCancel,
  prepareOverlay,
  present,
  safeCall,
  setOverlayId
} from "./chunk-QATEHYOA.js";
import "./chunk-3MKGIXIK.js";
import {
  createColorClasses,
  getClassMap
} from "./chunk-5VP4V3BN.js";
import {
  getIonMode
} from "./chunk-TXLH22R2.js";
import "./chunk-J5JVDPFK.js";
import "./chunk-MUBGKTGO.js";
import {
  createAnimation
} from "./chunk-2BRJTTQT.js";
import {
  clamp,
  getElementRoot,
  raf,
  renderHiddenInput
} from "./chunk-RZR7LWTQ.js";
import "./chunk-YSZWGYJT.js";
import {
  Host,
  createEvent,
  getElement,
  h,
  printIonError,
  printIonWarning,
  registerInstance,
  writeTask
} from "./chunk-BFPTXCSH.js";
import {
  __async
} from "./chunk-UESUV5PM.js";

// node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js
var isYearDisabled = (refYear, minParts, maxParts) => {
  if (minParts && minParts.year > refYear) {
    return true;
  }
  if (maxParts && maxParts.year < refYear) {
    return true;
  }
  return false;
};
var isDayDisabled = (refParts, minParts, maxParts, dayValues) => {
  if (refParts.day === null) {
    return true;
  }
  if (dayValues !== void 0 && !dayValues.includes(refParts.day)) {
    return true;
  }
  if (minParts && isBefore(refParts, minParts)) {
    return true;
  }
  if (maxParts && isAfter(refParts, maxParts)) {
    return true;
  }
  return false;
};
var getCalendarDayState = (locale, refParts, activeParts, todayParts, minParts, maxParts, dayValues) => {
  const activePartsArray = Array.isArray(activeParts) ? activeParts : [activeParts];
  const isActive = activePartsArray.find((parts) => isSameDay(refParts, parts)) !== void 0;
  const isToday = isSameDay(refParts, todayParts);
  const disabled = isDayDisabled(refParts, minParts, maxParts, dayValues);
  return {
    disabled,
    isActive,
    isToday,
    ariaSelected: isActive ? "true" : null,
    ariaLabel: generateDayAriaLabel(locale, isToday, refParts),
    text: refParts.day != null ? getDay(locale, refParts) : null
  };
};
var isMonthDisabled = (refParts, {
  minParts,
  maxParts
}) => {
  if (isYearDisabled(refParts.year, minParts, maxParts)) {
    return true;
  }
  if (minParts && isBefore(refParts, minParts) || maxParts && isAfter(refParts, maxParts)) {
    return true;
  }
  return false;
};
var isPrevMonthDisabled = (refParts, minParts, maxParts) => {
  const prevMonth = Object.assign(Object.assign({}, getPreviousMonth(refParts)), {
    day: null
  });
  return isMonthDisabled(prevMonth, {
    minParts,
    maxParts
  });
};
var isNextMonthDisabled = (refParts, maxParts) => {
  const nextMonth = Object.assign(Object.assign({}, getNextMonth(refParts)), {
    day: null
  });
  return isMonthDisabled(nextMonth, {
    maxParts
  });
};
var getHighlightStyles = (highlightedDates, dateIsoString, el) => {
  if (Array.isArray(highlightedDates)) {
    const dateStringWithoutTime = dateIsoString.split("T")[0];
    const matchingHighlight = highlightedDates.find((hd) => hd.date === dateStringWithoutTime);
    if (matchingHighlight) {
      return {
        textColor: matchingHighlight.textColor,
        backgroundColor: matchingHighlight.backgroundColor,
        border: matchingHighlight.border
      };
    }
  } else {
    try {
      return highlightedDates(dateIsoString);
    } catch (e) {
      printIonError("[ion-datetime] - Exception thrown from provided `highlightedDates` callback. Please check your function and try again.", el, e);
    }
  }
  return void 0;
};
var warnIfTimeZoneProvided = (el, formatOptions) => {
  var _a, _b, _c, _d;
  if (((_a = formatOptions === null || formatOptions === void 0 ? void 0 : formatOptions.date) === null || _a === void 0 ? void 0 : _a.timeZone) || ((_b = formatOptions === null || formatOptions === void 0 ? void 0 : formatOptions.date) === null || _b === void 0 ? void 0 : _b.timeZoneName) || ((_c = formatOptions === null || formatOptions === void 0 ? void 0 : formatOptions.time) === null || _c === void 0 ? void 0 : _c.timeZone) || ((_d = formatOptions === null || formatOptions === void 0 ? void 0 : formatOptions.time) === null || _d === void 0 ? void 0 : _d.timeZoneName)) {
    printIonWarning('[ion-datetime] - "timeZone" and "timeZoneName" are not supported in "formatOptions".', el);
  }
};
var checkForPresentationFormatMismatch = (el, presentation, formatOptions) => {
  if (!formatOptions) return;
  switch (presentation) {
    case "date":
    case "month-year":
    case "month":
    case "year":
      if (formatOptions.date === void 0) {
        printIonWarning(`[ion-datetime] - The '${presentation}' presentation requires a date object in formatOptions.`, el);
      }
      break;
    case "time":
      if (formatOptions.time === void 0) {
        printIonWarning(`[ion-datetime] - The 'time' presentation requires a time object in formatOptions.`, el);
      }
      break;
    case "date-time":
    case "time-date":
      if (formatOptions.date === void 0 && formatOptions.time === void 0) {
        printIonWarning(`[ion-datetime] - The '${presentation}' presentation requires either a date or time object (or both) in formatOptions.`, el);
      }
      break;
  }
};
var datetimeIosCss = ':host{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;background:var(--background);overflow:hidden}:host(.datetime-size-fixed){width:auto;height:auto}:host(.datetime-size-fixed:not(.datetime-prefer-wheel)){max-width:350px}:host(.datetime-size-fixed.datetime-prefer-wheel){min-width:350px;max-width:-webkit-max-content;max-width:-moz-max-content;max-width:max-content}:host(.datetime-size-cover){width:100%}:host .calendar-body,:host .datetime-year{opacity:0}:host(:not(.datetime-ready)) .datetime-year{position:absolute;pointer-events:none}:host(.datetime-ready) .calendar-body{opacity:1}:host(.datetime-ready) .datetime-year{display:none;opacity:1}:host .wheel-order-year-first .day-column{-ms-flex-order:3;order:3;text-align:end}:host .wheel-order-year-first .month-column{-ms-flex-order:2;order:2;text-align:end}:host .wheel-order-year-first .year-column{-ms-flex-order:1;order:1;text-align:start}:host .datetime-calendar,:host .datetime-year{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-flow:column;flex-flow:column}:host(.show-month-and-year) .datetime-year{display:-ms-flexbox;display:flex}:host(.show-month-and-year) .calendar-next-prev,:host(.show-month-and-year) .calendar-days-of-week,:host(.show-month-and-year) .calendar-body,:host(.show-month-and-year) .datetime-time{display:none}:host(.month-year-picker-open) .datetime-footer{display:none}:host(.datetime-disabled){pointer-events:none}:host(.datetime-disabled) .calendar-days-of-week,:host(.datetime-disabled) .datetime-time{opacity:0.4}:host(.datetime-readonly){pointer-events:none;}:host(.datetime-readonly) .calendar-action-buttons,:host(.datetime-readonly) .calendar-body,:host(.datetime-readonly) .datetime-year{pointer-events:initial}:host(.datetime-readonly) .calendar-day[disabled]:not(.calendar-day-constrained),:host(.datetime-readonly) .datetime-action-buttons ion-button[disabled]{opacity:1}:host .datetime-header .datetime-title{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host .datetime-action-buttons.has-clear-button{width:100%}:host .datetime-action-buttons ion-buttons{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.datetime-action-buttons .datetime-action-buttons-container{display:-ms-flexbox;display:flex}:host .calendar-action-buttons{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host .calendar-action-buttons ion-button{--background:transparent}:host .calendar-days-of-week{display:grid;grid-template-columns:repeat(7, 1fr);text-align:center}.calendar-days-of-week .day-of-week{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0}:host .calendar-body{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-webkit-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;overflow-x:scroll;overflow-y:hidden;scrollbar-width:none;outline:none}:host .calendar-body .calendar-month{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;scroll-snap-align:start;scroll-snap-stop:always;-ms-flex-negative:0;flex-shrink:0;width:100%}:host .calendar-body .calendar-month-disabled{scroll-snap-align:none}:host .calendar-body::-webkit-scrollbar{display:none}:host .calendar-body .calendar-month-grid{display:grid;grid-template-columns:repeat(7, 1fr)}:host .calendar-day-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;min-width:0;min-height:0;overflow:visible}.calendar-day{border-radius:50%;-webkit-padding-start:0px;padding-inline-start:0px;-webkit-padding-end:0px;padding-inline-end:0px;padding-top:0px;padding-bottom:0px;-webkit-margin-start:0px;margin-inline-start:0px;-webkit-margin-end:0px;margin-inline-end:0px;margin-top:0px;margin-bottom:0px;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border:none;outline:none;background:none;color:currentColor;font-family:var(--ion-font-family, inherit);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;z-index:0}:host .calendar-day[disabled]{pointer-events:none;opacity:0.4}.calendar-day:not(.calendar-day-adjacent-day):focus{background:rgba(var(--ion-color-base-rgb), 0.2);-webkit-box-shadow:0px 0px 0px 4px rgba(var(--ion-color-base-rgb), 0.2);box-shadow:0px 0px 0px 4px rgba(var(--ion-color-base-rgb), 0.2)}:host .datetime-time{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host(.datetime-presentation-time) .datetime-time{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}:host ion-popover{--height:200px}:host .time-header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .time-body{border-radius:8px;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:6px;padding-bottom:6px;display:-ms-flexbox;display:flex;border:none;background:var(--ion-color-step-300, var(--ion-background-color-step-300, #edeef0));color:var(--ion-text-color, #000);font-family:inherit;font-size:inherit;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}:host .time-body-active{color:var(--ion-color-base)}:host(.in-item){position:static}:host(.show-month-and-year) .calendar-action-buttons .calendar-month-year-toggle{color:var(--ion-color-base)}.calendar-month-year{min-width:0}.calendar-month-year-toggle{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;position:relative;border:0;outline:none;background:transparent;cursor:pointer;z-index:1}.calendar-month-year-toggle::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0;-webkit-transition:opacity 15ms linear, background-color 15ms linear;transition:opacity 15ms linear, background-color 15ms linear;z-index:-1}.calendar-month-year-toggle.ion-focused::after{background:currentColor}.calendar-month-year-toggle:disabled{opacity:0.3;pointer-events:none}.calendar-month-year-toggle ion-icon{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:0;padding-inline-end:0;padding-top:0;padding-bottom:0;-ms-flex-negative:0;flex-shrink:0}.calendar-month-year-toggle #toggle-wrapper{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}ion-picker{--highlight-background:var(--wheel-highlight-background);--highlight-border-radius:var(--wheel-highlight-border-radius);--fade-background-rgb:var(--wheel-fade-background-rgb)}:host{--background:var(--ion-color-light, #f4f5f8);--background-rgb:var(--ion-color-light-rgb, 244, 245, 248);--title-color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}:host(.datetime-presentation-date-time:not(.datetime-prefer-wheel)),:host(.datetime-presentation-time-date:not(.datetime-prefer-wheel)),:host(.datetime-presentation-date:not(.datetime-prefer-wheel)){min-height:350px}:host .datetime-header{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:16px;padding-bottom:16px;border-bottom:0.55px solid var(--ion-color-step-200, var(--ion-background-color-step-200, #cccccc));font-size:min(0.875rem, 22.4px)}:host .datetime-header .datetime-title{color:var(--title-color)}:host .datetime-header .datetime-selected-date{margin-top:10px}.calendar-month-year-toggle{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0px;padding-bottom:0px;min-height:44px;font-size:min(1rem, 25.6px);font-weight:600}.calendar-month-year-toggle.ion-focused::after{opacity:0.15}.calendar-month-year-toggle #toggle-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px;margin-top:10px;margin-bottom:10px}:host .calendar-action-buttons .calendar-month-year-toggle ion-icon,:host .calendar-action-buttons ion-buttons ion-button{color:var(--ion-color-base)}:host .calendar-action-buttons ion-buttons{padding-left:0;padding-right:0;padding-top:8px;padding-bottom:0}:host .calendar-action-buttons ion-buttons ion-button{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}:host .calendar-days-of-week{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:0;padding-bottom:0;color:var(--ion-color-step-300, var(--ion-text-color-step-700, #b3b3b3));font-size:min(0.75rem, 19.2px);font-weight:600;line-height:24px;text-transform:uppercase}@supports (border-radius: mod(1px, 1px)){.calendar-days-of-week .day-of-week{width:clamp(20px, calc(mod(min(1rem, 24px), 24px) * 10), 100%);height:24px;overflow:hidden}.calendar-day{border-radius:max(8px, mod(min(1rem, 24px), 24px) * 10)}}@supports ((border-radius: mod(1px, 1px)) and (background: -webkit-named-image(apple-pay-logo-black)) and (not (contain-intrinsic-size: none))) or (not (border-radius: mod(1px, 1px))){.calendar-days-of-week .day-of-week{width:auto;height:auto;overflow:initial}.calendar-day{border-radius:32px}}:host .calendar-body .calendar-month .calendar-month-grid{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;-ms-flex-align:center;align-items:center;height:calc(100% - 16px)}:host .calendar-day-wrapper{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;height:0;min-height:1rem}:host .calendar-day{width:40px;min-width:40px;height:40px;font-size:min(1.25rem, 32px)}.calendar-day.calendar-day-active{background:rgba(var(--ion-color-base-rgb), 0.2);font-size:min(1.375rem, 35.2px)}:host .calendar-day.calendar-day-today{color:var(--ion-color-base)}:host .calendar-day.calendar-day-active,:host .calendar-day.calendar-day-adjacent-day.calendar-day-active{color:var(--ion-color-base);font-weight:600}:host .calendar-day.calendar-day-today.calendar-day-active{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host .calendar-day.calendar-day-adjacent-day{color:var(--ion-color-step-300, var(--ion-text-color-step-700, #b3b3b3))}:host .datetime-time{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:8px;padding-bottom:16px;font-size:min(1rem, 25.6px)}:host .datetime-time .time-header{font-weight:600}:host .datetime-buttons{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;border-top:0.55px solid var(--ion-color-step-200, var(--ion-background-color-step-200, #cccccc))}:host .datetime-buttons ::slotted(ion-buttons),:host .datetime-buttons ion-buttons{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}:host .datetime-action-buttons{width:100%}';
var datetimeMdCss = ':host{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;background:var(--background);overflow:hidden}:host(.datetime-size-fixed){width:auto;height:auto}:host(.datetime-size-fixed:not(.datetime-prefer-wheel)){max-width:350px}:host(.datetime-size-fixed.datetime-prefer-wheel){min-width:350px;max-width:-webkit-max-content;max-width:-moz-max-content;max-width:max-content}:host(.datetime-size-cover){width:100%}:host .calendar-body,:host .datetime-year{opacity:0}:host(:not(.datetime-ready)) .datetime-year{position:absolute;pointer-events:none}:host(.datetime-ready) .calendar-body{opacity:1}:host(.datetime-ready) .datetime-year{display:none;opacity:1}:host .wheel-order-year-first .day-column{-ms-flex-order:3;order:3;text-align:end}:host .wheel-order-year-first .month-column{-ms-flex-order:2;order:2;text-align:end}:host .wheel-order-year-first .year-column{-ms-flex-order:1;order:1;text-align:start}:host .datetime-calendar,:host .datetime-year{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-flow:column;flex-flow:column}:host(.show-month-and-year) .datetime-year{display:-ms-flexbox;display:flex}:host(.show-month-and-year) .calendar-next-prev,:host(.show-month-and-year) .calendar-days-of-week,:host(.show-month-and-year) .calendar-body,:host(.show-month-and-year) .datetime-time{display:none}:host(.month-year-picker-open) .datetime-footer{display:none}:host(.datetime-disabled){pointer-events:none}:host(.datetime-disabled) .calendar-days-of-week,:host(.datetime-disabled) .datetime-time{opacity:0.4}:host(.datetime-readonly){pointer-events:none;}:host(.datetime-readonly) .calendar-action-buttons,:host(.datetime-readonly) .calendar-body,:host(.datetime-readonly) .datetime-year{pointer-events:initial}:host(.datetime-readonly) .calendar-day[disabled]:not(.calendar-day-constrained),:host(.datetime-readonly) .datetime-action-buttons ion-button[disabled]{opacity:1}:host .datetime-header .datetime-title{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host .datetime-action-buttons.has-clear-button{width:100%}:host .datetime-action-buttons ion-buttons{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.datetime-action-buttons .datetime-action-buttons-container{display:-ms-flexbox;display:flex}:host .calendar-action-buttons{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host .calendar-action-buttons ion-button{--background:transparent}:host .calendar-days-of-week{display:grid;grid-template-columns:repeat(7, 1fr);text-align:center}.calendar-days-of-week .day-of-week{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0}:host .calendar-body{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-webkit-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;overflow-x:scroll;overflow-y:hidden;scrollbar-width:none;outline:none}:host .calendar-body .calendar-month{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;scroll-snap-align:start;scroll-snap-stop:always;-ms-flex-negative:0;flex-shrink:0;width:100%}:host .calendar-body .calendar-month-disabled{scroll-snap-align:none}:host .calendar-body::-webkit-scrollbar{display:none}:host .calendar-body .calendar-month-grid{display:grid;grid-template-columns:repeat(7, 1fr)}:host .calendar-day-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;min-width:0;min-height:0;overflow:visible}.calendar-day{border-radius:50%;-webkit-padding-start:0px;padding-inline-start:0px;-webkit-padding-end:0px;padding-inline-end:0px;padding-top:0px;padding-bottom:0px;-webkit-margin-start:0px;margin-inline-start:0px;-webkit-margin-end:0px;margin-inline-end:0px;margin-top:0px;margin-bottom:0px;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border:none;outline:none;background:none;color:currentColor;font-family:var(--ion-font-family, inherit);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;z-index:0}:host .calendar-day[disabled]{pointer-events:none;opacity:0.4}.calendar-day:not(.calendar-day-adjacent-day):focus{background:rgba(var(--ion-color-base-rgb), 0.2);-webkit-box-shadow:0px 0px 0px 4px rgba(var(--ion-color-base-rgb), 0.2);box-shadow:0px 0px 0px 4px rgba(var(--ion-color-base-rgb), 0.2)}:host .datetime-time{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host(.datetime-presentation-time) .datetime-time{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}:host ion-popover{--height:200px}:host .time-header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .time-body{border-radius:8px;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:6px;padding-bottom:6px;display:-ms-flexbox;display:flex;border:none;background:var(--ion-color-step-300, var(--ion-background-color-step-300, #edeef0));color:var(--ion-text-color, #000);font-family:inherit;font-size:inherit;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}:host .time-body-active{color:var(--ion-color-base)}:host(.in-item){position:static}:host(.show-month-and-year) .calendar-action-buttons .calendar-month-year-toggle{color:var(--ion-color-base)}.calendar-month-year{min-width:0}.calendar-month-year-toggle{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;position:relative;border:0;outline:none;background:transparent;cursor:pointer;z-index:1}.calendar-month-year-toggle::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0;-webkit-transition:opacity 15ms linear, background-color 15ms linear;transition:opacity 15ms linear, background-color 15ms linear;z-index:-1}.calendar-month-year-toggle.ion-focused::after{background:currentColor}.calendar-month-year-toggle:disabled{opacity:0.3;pointer-events:none}.calendar-month-year-toggle ion-icon{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:0;padding-inline-end:0;padding-top:0;padding-bottom:0;-ms-flex-negative:0;flex-shrink:0}.calendar-month-year-toggle #toggle-wrapper{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}ion-picker{--highlight-background:var(--wheel-highlight-background);--highlight-border-radius:var(--wheel-highlight-border-radius);--fade-background-rgb:var(--wheel-fade-background-rgb)}:host{--background:var(--ion-color-step-100, var(--ion-background-color-step-100, #ffffff));--title-color:var(--ion-color-contrast)}:host .datetime-header{-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px;padding-top:20px;padding-bottom:20px;background:var(--ion-color-base);color:var(--title-color)}:host .datetime-header .datetime-title{font-size:0.75rem;text-transform:uppercase}:host .datetime-header .datetime-selected-date{margin-top:30px;font-size:2.125rem}:host .calendar-action-buttons ion-button{--color:var(--ion-color-step-650, var(--ion-text-color-step-350, #595959))}.calendar-month-year-toggle{-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:12px;padding-bottom:12px;min-height:48px;background:transparent;color:var(--ion-color-step-650, var(--ion-text-color-step-350, #595959));z-index:1}.calendar-month-year-toggle.ion-focused::after{opacity:0.04}.calendar-month-year-toggle ion-ripple-effect{color:currentColor}@media (any-hover: hover){.calendar-month-year-toggle.ion-activatable:not(.ion-focused):hover::after{background:currentColor;opacity:0.04}}:host .calendar-days-of-week{-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px;padding-top:0px;padding-bottom:0px;color:var(--ion-color-step-500, var(--ion-text-color-step-500, gray));font-size:0.875rem;line-height:36px}:host .calendar-body .calendar-month .calendar-month-grid{-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px;padding-top:4px;padding-bottom:4px;grid-template-rows:repeat(6, 1fr)}:host .calendar-day{width:42px;min-width:42px;height:42px;font-size:0.875rem}:host .calendar-day.calendar-day-today{border:1px solid var(--ion-color-base);color:var(--ion-color-base)}:host .calendar-day.calendar-day-active,:host .calendar-day.calendar-day-adjacent-day.calendar-day-active{color:var(--ion-color-contrast)}.calendar-day.calendar-day-active,.calendar-day.calendar-day-active:focus{border:1px solid var(--ion-color-base);background:var(--ion-color-base)}:host .calendar-day.calendar-day-adjacent-day{color:var(--ion-color-step-500, var(--ion-text-color-step-500, gray))}:host .datetime-time{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:8px;padding-bottom:8px}:host .time-header{color:var(--ion-color-step-650, var(--ion-text-color-step-350, #595959))}:host(.datetime-presentation-month) .datetime-year,:host(.datetime-presentation-year) .datetime-year,:host(.datetime-presentation-month-year) .datetime-year{margin-top:20px;margin-bottom:20px}:host .datetime-buttons{-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px;padding-top:10px;padding-bottom:10px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end}';
var Datetime = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionCancel = createEvent(this, "ionCancel", 7);
    this.ionChange = createEvent(this, "ionChange", 7);
    this.ionValueChange = createEvent(this, "ionValueChange", 7);
    this.ionFocus = createEvent(this, "ionFocus", 7);
    this.ionBlur = createEvent(this, "ionBlur", 7);
    this.ionStyle = createEvent(this, "ionStyle", 7);
    this.ionRender = createEvent(this, "ionRender", 7);
    this.inputId = `ion-dt-${datetimeIds++}`;
    this.prevPresentation = null;
    this.showMonthAndYear = false;
    this.activeParts = [];
    this.workingParts = {
      month: 5,
      day: 28,
      year: 2021,
      hour: 13,
      minute: 52,
      ampm: "pm",
      isAdjacentDay: false
    };
    this.isTimePopoverOpen = false;
    this.color = "primary";
    this.name = this.inputId;
    this.disabled = false;
    this.readonly = false;
    this.showAdjacentDays = false;
    this.presentation = "date-time";
    this.cancelText = "Cancel";
    this.doneText = "Done";
    this.clearText = "Clear";
    this.locale = "default";
    this.firstDayOfWeek = 0;
    this.multiple = false;
    this.showDefaultTitle = false;
    this.showDefaultButtons = false;
    this.showClearButton = false;
    this.showDefaultTimeLabel = true;
    this.size = "fixed";
    this.preferWheel = false;
    this.warnIfIncorrectValueUsage = () => {
      const {
        multiple,
        value
      } = this;
      if (!multiple && Array.isArray(value)) {
        printIonWarning(`[ion-datetime] - An array of values was passed, but multiple is "false". This is incorrect usage and may result in unexpected behaviors. To dismiss this warning, pass a string to the "value" property when multiple="false".

  Value Passed: [${value.map((v) => `'${v}'`).join(", ")}]
`, this.el);
      }
    };
    this.setValue = (value) => {
      this.value = value;
      this.ionChange.emit({
        value
      });
    };
    this.getActivePartsWithFallback = () => {
      var _a;
      const {
        defaultParts
      } = this;
      return (_a = this.getActivePart()) !== null && _a !== void 0 ? _a : defaultParts;
    };
    this.getActivePart = () => {
      const {
        activeParts
      } = this;
      return Array.isArray(activeParts) ? activeParts[0] : activeParts;
    };
    this.closeParentOverlay = (role) => {
      const popoverOrModal = this.el.closest("ion-modal, ion-popover");
      if (popoverOrModal) {
        popoverOrModal.dismiss(void 0, role);
      }
    };
    this.setWorkingParts = (parts) => {
      this.workingParts = Object.assign({}, parts);
    };
    this.setActiveParts = (parts, removeDate = false) => {
      if (this.readonly) {
        return;
      }
      const {
        multiple,
        minParts,
        maxParts,
        activeParts
      } = this;
      const validatedParts = validateParts(parts, minParts, maxParts);
      this.setWorkingParts(validatedParts);
      if (multiple) {
        const activePartsArray = Array.isArray(activeParts) ? activeParts : [activeParts];
        if (removeDate) {
          this.activeParts = activePartsArray.filter((p) => !isSameDay(p, validatedParts));
        } else {
          this.activeParts = [...activePartsArray, validatedParts];
        }
      } else {
        this.activeParts = Object.assign({}, validatedParts);
      }
      const hasSlottedButtons = this.el.querySelector('[slot="buttons"]') !== null;
      if (hasSlottedButtons || this.showDefaultButtons) {
        return;
      }
      this.confirm();
    };
    this.initializeKeyboardListeners = () => {
      const calendarBodyRef = this.calendarBodyRef;
      if (!calendarBodyRef) {
        return;
      }
      const root = this.el.shadowRoot;
      const currentMonth = calendarBodyRef.querySelector(".calendar-month:nth-of-type(2)");
      const checkCalendarBodyFocus = (ev) => {
        var _a;
        const record = ev[0];
        if (((_a = record.oldValue) === null || _a === void 0 ? void 0 : _a.includes("ion-focused")) || !calendarBodyRef.classList.contains("ion-focused")) {
          return;
        }
        this.focusWorkingDay(currentMonth);
      };
      const mo = new MutationObserver(checkCalendarBodyFocus);
      mo.observe(calendarBodyRef, {
        attributeFilter: ["class"],
        attributeOldValue: true
      });
      this.destroyKeyboardMO = () => {
        mo === null || mo === void 0 ? void 0 : mo.disconnect();
      };
      calendarBodyRef.addEventListener("keydown", (ev) => {
        const activeElement = root.activeElement;
        if (!activeElement || !activeElement.classList.contains("calendar-day")) {
          return;
        }
        const parts = getPartsFromCalendarDay(activeElement);
        let partsToFocus;
        switch (ev.key) {
          case "ArrowDown":
            ev.preventDefault();
            partsToFocus = getNextWeek(parts);
            break;
          case "ArrowUp":
            ev.preventDefault();
            partsToFocus = getPreviousWeek(parts);
            break;
          case "ArrowRight":
            ev.preventDefault();
            partsToFocus = getNextDay(parts);
            break;
          case "ArrowLeft":
            ev.preventDefault();
            partsToFocus = getPreviousDay(parts);
            break;
          case "Home":
            ev.preventDefault();
            partsToFocus = getStartOfWeek(parts);
            break;
          case "End":
            ev.preventDefault();
            partsToFocus = getEndOfWeek(parts);
            break;
          case "PageUp":
            ev.preventDefault();
            partsToFocus = ev.shiftKey ? getPreviousYear(parts) : getPreviousMonth(parts);
            break;
          case "PageDown":
            ev.preventDefault();
            partsToFocus = ev.shiftKey ? getNextYear(parts) : getNextMonth(parts);
            break;
          /**
           * Do not preventDefault here
           * as we do not want to override other
           * browser defaults such as pressing Enter/Space
           * to select a day.
           */
          default:
            return;
        }
        if (isDayDisabled(partsToFocus, this.minParts, this.maxParts)) {
          return;
        }
        this.setWorkingParts(Object.assign(Object.assign({}, this.workingParts), partsToFocus));
        requestAnimationFrame(() => this.focusWorkingDay(currentMonth));
      });
    };
    this.focusWorkingDay = (currentMonth) => {
      const {
        day,
        month,
        year
      } = this.workingParts;
      const firstOfMonth = (/* @__PURE__ */ new Date(`${month}/1/${year}`)).getDay();
      const offset = firstOfMonth >= this.firstDayOfWeek ? firstOfMonth - this.firstDayOfWeek : 7 - (this.firstDayOfWeek - firstOfMonth);
      if (day === null) {
        return;
      }
      const dayEl = currentMonth.querySelector(`.calendar-day-wrapper:nth-of-type(${offset + day}) .calendar-day`);
      if (dayEl) {
        dayEl.focus();
      }
    };
    this.processMinParts = () => {
      const {
        min,
        defaultParts
      } = this;
      if (min === void 0) {
        this.minParts = void 0;
        return;
      }
      this.minParts = parseMinParts(min, defaultParts);
    };
    this.processMaxParts = () => {
      const {
        max,
        defaultParts
      } = this;
      if (max === void 0) {
        this.maxParts = void 0;
        return;
      }
      this.maxParts = parseMaxParts(max, defaultParts);
    };
    this.initializeCalendarListener = () => {
      const calendarBodyRef = this.calendarBodyRef;
      if (!calendarBodyRef) {
        return;
      }
      const months = calendarBodyRef.querySelectorAll(".calendar-month");
      const startMonth = months[0];
      const workingMonth = months[1];
      const endMonth = months[2];
      const mode = getIonMode(this);
      const needsiOSRubberBandFix = mode === "ios" && typeof navigator !== "undefined" && navigator.maxTouchPoints > 1;
      writeTask(() => {
        calendarBodyRef.scrollLeft = startMonth.clientWidth * (isRTL(this.el) ? -1 : 1);
        const getChangedMonth = (parts) => {
          const box = calendarBodyRef.getBoundingClientRect();
          const condition = isRTL(this.el) ? calendarBodyRef.scrollLeft >= -2 : calendarBodyRef.scrollLeft <= 2;
          const month = condition ? startMonth : endMonth;
          const monthBox = month.getBoundingClientRect();
          if (Math.abs(monthBox.x - box.x) > 2) return;
          const {
            forceRenderDate
          } = this;
          if (forceRenderDate !== void 0) {
            return {
              month: forceRenderDate.month,
              year: forceRenderDate.year,
              day: forceRenderDate.day
            };
          }
          if (month === startMonth) {
            return getPreviousMonth(parts);
          } else if (month === endMonth) {
            return getNextMonth(parts);
          } else {
            return;
          }
        };
        const updateActiveMonth = () => {
          if (needsiOSRubberBandFix) {
            calendarBodyRef.style.removeProperty("pointer-events");
            appliediOSRubberBandFix = false;
          }
          const newDate = getChangedMonth(this.workingParts);
          if (!newDate) return;
          const {
            month,
            day,
            year
          } = newDate;
          if (isMonthDisabled({
            month,
            year,
            day: null
          }, {
            minParts: Object.assign(Object.assign({}, this.minParts), {
              day: null
            }),
            maxParts: Object.assign(Object.assign({}, this.maxParts), {
              day: null
            })
          })) {
            return;
          }
          calendarBodyRef.style.setProperty("overflow", "hidden");
          writeTask(() => {
            this.setWorkingParts(Object.assign(Object.assign({}, this.workingParts), {
              month,
              day,
              year
            }));
            calendarBodyRef.scrollLeft = workingMonth.clientWidth * (isRTL(this.el) ? -1 : 1);
            calendarBodyRef.style.removeProperty("overflow");
            if (this.resolveForceDateScrolling) {
              this.resolveForceDateScrolling();
            }
          });
        };
        let scrollTimeout;
        let appliediOSRubberBandFix = false;
        const scrollCallback = () => {
          if (scrollTimeout) {
            clearTimeout(scrollTimeout);
          }
          if (!appliediOSRubberBandFix && needsiOSRubberBandFix) {
            calendarBodyRef.style.setProperty("pointer-events", "none");
            appliediOSRubberBandFix = true;
          }
          scrollTimeout = setTimeout(updateActiveMonth, 50);
        };
        calendarBodyRef.addEventListener("scroll", scrollCallback);
        this.destroyCalendarListener = () => {
          calendarBodyRef.removeEventListener("scroll", scrollCallback);
        };
      });
    };
    this.destroyInteractionListeners = () => {
      const {
        destroyCalendarListener,
        destroyKeyboardMO
      } = this;
      if (destroyCalendarListener !== void 0) {
        destroyCalendarListener();
      }
      if (destroyKeyboardMO !== void 0) {
        destroyKeyboardMO();
      }
    };
    this.processValue = (value) => {
      const hasValue = value !== null && value !== void 0 && value !== "" && (!Array.isArray(value) || value.length > 0);
      const valueToProcess = hasValue ? parseDate(value) : this.defaultParts;
      const {
        minParts,
        maxParts,
        workingParts,
        el
      } = this;
      this.warnIfIncorrectValueUsage();
      if (!valueToProcess) {
        return;
      }
      if (hasValue) {
        warnIfValueOutOfBounds(valueToProcess, minParts, maxParts);
      }
      const singleValue = Array.isArray(valueToProcess) ? valueToProcess[valueToProcess.length - 1] : valueToProcess;
      const targetValue = clampDate(singleValue, minParts, maxParts);
      const {
        month,
        day,
        year,
        hour,
        minute
      } = targetValue;
      const ampm = parseAmPm(hour);
      if (hasValue) {
        if (Array.isArray(valueToProcess)) {
          this.activeParts = [...valueToProcess];
        } else {
          this.activeParts = {
            month,
            day,
            year,
            hour,
            minute,
            ampm
          };
        }
      } else {
        this.activeParts = [];
      }
      const didChangeMonth = month !== void 0 && month !== workingParts.month || year !== void 0 && year !== workingParts.year;
      const bodyIsVisible = el.classList.contains("datetime-ready");
      const {
        isGridStyle,
        showMonthAndYear
      } = this;
      if (isGridStyle && didChangeMonth && bodyIsVisible && !showMonthAndYear) {
        this.animateToDate(targetValue);
      } else {
        this.setWorkingParts({
          month,
          day,
          year,
          hour,
          minute,
          ampm
        });
      }
    };
    this.animateToDate = (targetValue) => __async(this, null, function* () {
      const {
        workingParts
      } = this;
      this.forceRenderDate = targetValue;
      const forceDateScrollingPromise = new Promise((resolve) => {
        this.resolveForceDateScrolling = resolve;
      });
      const targetMonthIsBefore = isBefore(targetValue, workingParts);
      targetMonthIsBefore ? this.prevMonth() : this.nextMonth();
      yield forceDateScrollingPromise;
      this.resolveForceDateScrolling = void 0;
      this.forceRenderDate = void 0;
    });
    this.onFocus = () => {
      this.ionFocus.emit();
    };
    this.onBlur = () => {
      this.ionBlur.emit();
    };
    this.hasValue = () => {
      return this.value != null;
    };
    this.nextMonth = () => {
      const calendarBodyRef = this.calendarBodyRef;
      if (!calendarBodyRef) {
        return;
      }
      const nextMonth = calendarBodyRef.querySelector(".calendar-month:last-of-type");
      if (!nextMonth) {
        return;
      }
      const left = nextMonth.offsetWidth * 2;
      calendarBodyRef.scrollTo({
        top: 0,
        left: left * (isRTL(this.el) ? -1 : 1),
        behavior: "smooth"
      });
    };
    this.prevMonth = () => {
      const calendarBodyRef = this.calendarBodyRef;
      if (!calendarBodyRef) {
        return;
      }
      const prevMonth = calendarBodyRef.querySelector(".calendar-month:first-of-type");
      if (!prevMonth) {
        return;
      }
      calendarBodyRef.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    };
    this.toggleMonthAndYearView = () => {
      this.showMonthAndYear = !this.showMonthAndYear;
    };
  }
  formatOptionsChanged() {
    const {
      el,
      formatOptions,
      presentation
    } = this;
    checkForPresentationFormatMismatch(el, presentation, formatOptions);
    warnIfTimeZoneProvided(el, formatOptions);
  }
  disabledChanged() {
    this.emitStyle();
  }
  minChanged() {
    this.processMinParts();
  }
  maxChanged() {
    this.processMaxParts();
  }
  presentationChanged() {
    const {
      el,
      formatOptions,
      presentation
    } = this;
    checkForPresentationFormatMismatch(el, presentation, formatOptions);
  }
  get isGridStyle() {
    const {
      presentation,
      preferWheel
    } = this;
    const hasDatePresentation = presentation === "date" || presentation === "date-time" || presentation === "time-date";
    return hasDatePresentation && !preferWheel;
  }
  yearValuesChanged() {
    this.parsedYearValues = convertToArrayOfNumbers(this.yearValues);
  }
  monthValuesChanged() {
    this.parsedMonthValues = convertToArrayOfNumbers(this.monthValues);
  }
  dayValuesChanged() {
    this.parsedDayValues = convertToArrayOfNumbers(this.dayValues);
  }
  hourValuesChanged() {
    this.parsedHourValues = convertToArrayOfNumbers(this.hourValues);
  }
  minuteValuesChanged() {
    this.parsedMinuteValues = convertToArrayOfNumbers(this.minuteValues);
  }
  /**
   * Update the datetime value when the value changes
   */
  valueChanged() {
    return __async(this, null, function* () {
      const {
        value
      } = this;
      if (this.hasValue()) {
        this.processValue(value);
      }
      this.emitStyle();
      this.ionValueChange.emit({
        value
      });
    });
  }
  /**
   * Confirms the selected datetime value, updates the
   * `value` property, and optionally closes the popover
   * or modal that the datetime was presented in.
   *
   * @param closeOverlay If `true`, closes the parent overlay. Defaults to `false`.
   */
  confirm(closeOverlay = false) {
    return __async(this, null, function* () {
      const {
        isCalendarPicker,
        activeParts,
        preferWheel,
        workingParts
      } = this;
      if (activeParts !== void 0 || !isCalendarPicker) {
        const activePartsIsArray = Array.isArray(activeParts);
        if (activePartsIsArray && activeParts.length === 0) {
          if (preferWheel) {
            this.setValue(convertDataToISO(workingParts));
          } else {
            this.setValue(void 0);
          }
        } else {
          this.setValue(convertDataToISO(activeParts));
        }
      }
      if (closeOverlay) {
        this.closeParentOverlay(CONFIRM_ROLE);
      }
    });
  }
  /**
   * Resets the internal state of the datetime but does not update the value.
   * Passing a valid ISO-8601 string will reset the state of the component to the provided date.
   * If no value is provided, the internal state will be reset to the clamped value of the min, max and today.
   *
   * @param startDate A valid [ISO-8601 string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) to reset the datetime state to.
   */
  reset(startDate) {
    return __async(this, null, function* () {
      this.processValue(startDate);
    });
  }
  /**
   * Emits the ionCancel event and
   * optionally closes the popover
   * or modal that the datetime was
   * presented in.
   *
   * @param closeOverlay If `true`, closes the parent overlay. Defaults to `false`.
   */
  cancel(closeOverlay = false) {
    return __async(this, null, function* () {
      this.ionCancel.emit();
      if (closeOverlay) {
        this.closeParentOverlay(CANCEL_ROLE);
      }
    });
  }
  get isCalendarPicker() {
    const {
      presentation
    } = this;
    return presentation === "date" || presentation === "date-time" || presentation === "time-date";
  }
  connectedCallback() {
    this.clearFocusVisible = startFocusVisible(this.el).destroy;
  }
  disconnectedCallback() {
    if (this.clearFocusVisible) {
      this.clearFocusVisible();
      this.clearFocusVisible = void 0;
    }
  }
  initializeListeners() {
    this.initializeCalendarListener();
    this.initializeKeyboardListeners();
  }
  componentDidLoad() {
    const {
      el,
      intersectionTrackerRef
    } = this;
    const visibleCallback = (entries) => {
      const ev = entries[0];
      if (!ev.isIntersecting) {
        return;
      }
      this.initializeListeners();
      writeTask(() => {
        this.el.classList.add("datetime-ready");
      });
    };
    const visibleIO = new IntersectionObserver(visibleCallback, {
      threshold: 0.01,
      root: el
    });
    raf(() => visibleIO === null || visibleIO === void 0 ? void 0 : visibleIO.observe(intersectionTrackerRef));
    const hiddenCallback = (entries) => {
      const ev = entries[0];
      if (ev.isIntersecting) {
        return;
      }
      this.destroyInteractionListeners();
      this.showMonthAndYear = false;
      writeTask(() => {
        this.el.classList.remove("datetime-ready");
      });
    };
    const hiddenIO = new IntersectionObserver(hiddenCallback, {
      threshold: 0,
      root: el
    });
    raf(() => hiddenIO === null || hiddenIO === void 0 ? void 0 : hiddenIO.observe(intersectionTrackerRef));
    const root = getElementRoot(this.el);
    root.addEventListener("ionFocus", (ev) => ev.stopPropagation());
    root.addEventListener("ionBlur", (ev) => ev.stopPropagation());
  }
  /**
   * When the presentation is changed, all calendar content is recreated,
   * so we need to re-init behavior with the new elements.
   */
  componentDidRender() {
    const {
      presentation,
      prevPresentation,
      calendarBodyRef,
      minParts,
      preferWheel,
      forceRenderDate
    } = this;
    const hasCalendarGrid = !preferWheel && ["date-time", "time-date", "date"].includes(presentation);
    if (minParts !== void 0 && hasCalendarGrid && calendarBodyRef) {
      const workingMonth = calendarBodyRef.querySelector(".calendar-month:nth-of-type(1)");
      if (workingMonth && forceRenderDate === void 0) {
        calendarBodyRef.scrollLeft = workingMonth.clientWidth * (isRTL(this.el) ? -1 : 1);
      }
    }
    if (prevPresentation === null) {
      this.prevPresentation = presentation;
      return;
    }
    if (presentation === prevPresentation) {
      return;
    }
    this.prevPresentation = presentation;
    this.destroyInteractionListeners();
    this.initializeListeners();
    this.showMonthAndYear = false;
    raf(() => {
      this.ionRender.emit();
    });
  }
  componentWillLoad() {
    const {
      el,
      formatOptions,
      highlightedDates,
      multiple,
      presentation,
      preferWheel
    } = this;
    if (multiple) {
      if (presentation !== "date") {
        printIonWarning('[ion-datetime] - Multiple date selection is only supported for presentation="date".', el);
      }
      if (preferWheel) {
        printIonWarning('[ion-datetime] - Multiple date selection is not supported with preferWheel="true".', el);
      }
    }
    if (highlightedDates !== void 0) {
      if (presentation !== "date" && presentation !== "date-time" && presentation !== "time-date") {
        printIonWarning("[ion-datetime] - The highlightedDates property is only supported with the date, date-time, and time-date presentations.", el);
      }
      if (preferWheel) {
        printIonWarning('[ion-datetime] - The highlightedDates property is not supported with preferWheel="true".', el);
      }
    }
    if (formatOptions) {
      checkForPresentationFormatMismatch(el, presentation, formatOptions);
      warnIfTimeZoneProvided(el, formatOptions);
    }
    const hourValues = this.parsedHourValues = convertToArrayOfNumbers(this.hourValues);
    const minuteValues = this.parsedMinuteValues = convertToArrayOfNumbers(this.minuteValues);
    const monthValues = this.parsedMonthValues = convertToArrayOfNumbers(this.monthValues);
    const yearValues = this.parsedYearValues = convertToArrayOfNumbers(this.yearValues);
    const dayValues = this.parsedDayValues = convertToArrayOfNumbers(this.dayValues);
    const todayParts = this.todayParts = parseDate(getToday());
    this.processMinParts();
    this.processMaxParts();
    this.defaultParts = getClosestValidDate({
      refParts: todayParts,
      monthValues,
      dayValues,
      yearValues,
      hourValues,
      minuteValues,
      minParts: this.minParts,
      maxParts: this.maxParts
    });
    this.processValue(this.value);
    this.emitStyle();
  }
  emitStyle() {
    this.ionStyle.emit({
      interactive: true,
      datetime: true,
      "interactive-disabled": this.disabled
    });
  }
  /**
   * Universal render methods
   * These are pieces of datetime that
   * are rendered independently of presentation.
   */
  renderFooter() {
    const {
      disabled,
      readonly,
      showDefaultButtons,
      showClearButton
    } = this;
    const isButtonDisabled = disabled || readonly;
    const hasSlottedButtons = this.el.querySelector('[slot="buttons"]') !== null;
    if (!hasSlottedButtons && !showDefaultButtons && !showClearButton) {
      return;
    }
    const clearButtonClick = () => {
      this.reset();
      this.setValue(void 0);
    };
    return h("div", {
      class: "datetime-footer"
    }, h("div", {
      class: "datetime-buttons"
    }, h("div", {
      class: {
        ["datetime-action-buttons"]: true,
        ["has-clear-button"]: this.showClearButton
      }
    }, h("slot", {
      name: "buttons"
    }, h("ion-buttons", null, showDefaultButtons && h("ion-button", {
      id: "cancel-button",
      color: this.color,
      onClick: () => this.cancel(true),
      disabled: isButtonDisabled
    }, this.cancelText), h("div", {
      class: "datetime-action-buttons-container"
    }, showClearButton && h("ion-button", {
      id: "clear-button",
      color: this.color,
      onClick: () => clearButtonClick(),
      disabled: isButtonDisabled
    }, this.clearText), showDefaultButtons && h("ion-button", {
      id: "confirm-button",
      color: this.color,
      onClick: () => this.confirm(true),
      disabled: isButtonDisabled
    }, this.doneText)))))));
  }
  /**
   * Wheel picker render methods
   */
  renderWheelPicker(forcePresentation = this.presentation) {
    const renderArray = forcePresentation === "time-date" ? [this.renderTimePickerColumns(forcePresentation), this.renderDatePickerColumns(forcePresentation)] : [this.renderDatePickerColumns(forcePresentation), this.renderTimePickerColumns(forcePresentation)];
    return h("ion-picker", null, renderArray);
  }
  renderDatePickerColumns(forcePresentation) {
    return forcePresentation === "date-time" || forcePresentation === "time-date" ? this.renderCombinedDatePickerColumn() : this.renderIndividualDatePickerColumns(forcePresentation);
  }
  renderCombinedDatePickerColumn() {
    const {
      defaultParts,
      disabled,
      workingParts,
      locale,
      minParts,
      maxParts,
      todayParts,
      isDateEnabled
    } = this;
    const activePart = this.getActivePartsWithFallback();
    const monthsToRender = generateMonths(workingParts);
    const lastMonth = monthsToRender[monthsToRender.length - 1];
    monthsToRender[0].day = 1;
    lastMonth.day = getNumDaysInMonth(lastMonth.month, lastMonth.year);
    const min = minParts !== void 0 && isAfter(minParts, monthsToRender[0]) ? minParts : monthsToRender[0];
    const max = maxParts !== void 0 && isBefore(maxParts, lastMonth) ? maxParts : lastMonth;
    const result = getCombinedDateColumnData(locale, todayParts, min, max, this.parsedDayValues, this.parsedMonthValues);
    let items = result.items;
    const parts = result.parts;
    if (isDateEnabled) {
      items = items.map((itemObject, index) => {
        const referenceParts = parts[index];
        let disabled2;
        try {
          disabled2 = !isDateEnabled(convertDataToISO(referenceParts));
        } catch (e) {
          printIonError("[ion-datetime] - Exception thrown from provided `isDateEnabled` function. Please check your function and try again.", e);
        }
        return Object.assign(Object.assign({}, itemObject), {
          disabled: disabled2
        });
      });
    }
    const todayString = workingParts.day !== null ? `${workingParts.year}-${workingParts.month}-${workingParts.day}` : `${defaultParts.year}-${defaultParts.month}-${defaultParts.day}`;
    return h("ion-picker-column", {
      "aria-label": "Select a date",
      class: "date-column",
      color: this.color,
      disabled,
      value: todayString,
      onIonChange: (ev) => {
        const {
          value
        } = ev.detail;
        const findPart = parts.find(({
          month,
          day,
          year
        }) => value === `${year}-${month}-${day}`);
        this.setWorkingParts(Object.assign(Object.assign({}, workingParts), findPart));
        this.setActiveParts(Object.assign(Object.assign({}, activePart), findPart));
        ev.stopPropagation();
      }
    }, items.map((item) => h("ion-picker-column-option", {
      part: item.value === todayString ? `${WHEEL_ITEM_PART} ${WHEEL_ITEM_ACTIVE_PART}` : WHEEL_ITEM_PART,
      key: item.value,
      disabled: item.disabled,
      value: item.value
    }, item.text)));
  }
  renderIndividualDatePickerColumns(forcePresentation) {
    const {
      workingParts,
      isDateEnabled
    } = this;
    const shouldRenderMonths = forcePresentation !== "year" && forcePresentation !== "time";
    const months = shouldRenderMonths ? getMonthColumnData(this.locale, workingParts, this.minParts, this.maxParts, this.parsedMonthValues) : [];
    const shouldRenderDays = forcePresentation === "date";
    let days = shouldRenderDays ? getDayColumnData(this.locale, workingParts, this.minParts, this.maxParts, this.parsedDayValues) : [];
    if (isDateEnabled) {
      days = days.map((dayObject) => {
        const {
          value
        } = dayObject;
        const valueNum = typeof value === "string" ? parseInt(value) : value;
        const referenceParts = {
          month: workingParts.month,
          day: valueNum,
          year: workingParts.year
        };
        let disabled;
        try {
          disabled = !isDateEnabled(convertDataToISO(referenceParts));
        } catch (e) {
          printIonError("[ion-datetime] - Exception thrown from provided `isDateEnabled` function. Please check your function and try again.", e);
        }
        return Object.assign(Object.assign({}, dayObject), {
          disabled
        });
      });
    }
    const shouldRenderYears = forcePresentation !== "month" && forcePresentation !== "time";
    const years = shouldRenderYears ? getYearColumnData(this.locale, this.defaultParts, this.minParts, this.maxParts, this.parsedYearValues) : [];
    const showMonthFirst = isMonthFirstLocale(this.locale, {
      month: "numeric",
      day: "numeric"
    });
    let renderArray = [];
    if (showMonthFirst) {
      renderArray = [this.renderMonthPickerColumn(months), this.renderDayPickerColumn(days), this.renderYearPickerColumn(years)];
    } else {
      renderArray = [this.renderDayPickerColumn(days), this.renderMonthPickerColumn(months), this.renderYearPickerColumn(years)];
    }
    return renderArray;
  }
  renderDayPickerColumn(days) {
    var _a;
    if (days.length === 0) {
      return [];
    }
    const {
      disabled,
      workingParts
    } = this;
    const activePart = this.getActivePartsWithFallback();
    const pickerColumnValue = (_a = workingParts.day !== null ? workingParts.day : this.defaultParts.day) !== null && _a !== void 0 ? _a : void 0;
    return h("ion-picker-column", {
      "aria-label": "Select a day",
      class: "day-column",
      color: this.color,
      disabled,
      value: pickerColumnValue,
      onIonChange: (ev) => {
        this.setWorkingParts(Object.assign(Object.assign({}, workingParts), {
          day: ev.detail.value
        }));
        this.setActiveParts(Object.assign(Object.assign({}, activePart), {
          day: ev.detail.value
        }));
        ev.stopPropagation();
      }
    }, days.map((day) => h("ion-picker-column-option", {
      part: day.value === pickerColumnValue ? `${WHEEL_ITEM_PART} ${WHEEL_ITEM_ACTIVE_PART}` : WHEEL_ITEM_PART,
      key: day.value,
      disabled: day.disabled,
      value: day.value
    }, day.text)));
  }
  renderMonthPickerColumn(months) {
    if (months.length === 0) {
      return [];
    }
    const {
      disabled,
      workingParts
    } = this;
    const activePart = this.getActivePartsWithFallback();
    return h("ion-picker-column", {
      "aria-label": "Select a month",
      class: "month-column",
      color: this.color,
      disabled,
      value: workingParts.month,
      onIonChange: (ev) => {
        this.setWorkingParts(Object.assign(Object.assign({}, workingParts), {
          month: ev.detail.value
        }));
        this.setActiveParts(Object.assign(Object.assign({}, activePart), {
          month: ev.detail.value
        }));
        ev.stopPropagation();
      }
    }, months.map((month) => h("ion-picker-column-option", {
      part: month.value === workingParts.month ? `${WHEEL_ITEM_PART} ${WHEEL_ITEM_ACTIVE_PART}` : WHEEL_ITEM_PART,
      key: month.value,
      disabled: month.disabled,
      value: month.value
    }, month.text)));
  }
  renderYearPickerColumn(years) {
    if (years.length === 0) {
      return [];
    }
    const {
      disabled,
      workingParts
    } = this;
    const activePart = this.getActivePartsWithFallback();
    return h("ion-picker-column", {
      "aria-label": "Select a year",
      class: "year-column",
      color: this.color,
      disabled,
      value: workingParts.year,
      onIonChange: (ev) => {
        this.setWorkingParts(Object.assign(Object.assign({}, workingParts), {
          year: ev.detail.value
        }));
        this.setActiveParts(Object.assign(Object.assign({}, activePart), {
          year: ev.detail.value
        }));
        ev.stopPropagation();
      }
    }, years.map((year) => h("ion-picker-column-option", {
      part: year.value === workingParts.year ? `${WHEEL_ITEM_PART} ${WHEEL_ITEM_ACTIVE_PART}` : WHEEL_ITEM_PART,
      key: year.value,
      disabled: year.disabled,
      value: year.value
    }, year.text)));
  }
  renderTimePickerColumns(forcePresentation) {
    if (["date", "month", "month-year", "year"].includes(forcePresentation)) {
      return [];
    }
    const activePart = this.getActivePart();
    const userHasSelectedDate = activePart !== void 0;
    const {
      hoursData,
      minutesData,
      dayPeriodData
    } = getTimeColumnsData(this.locale, this.workingParts, this.hourCycle, userHasSelectedDate ? this.minParts : void 0, userHasSelectedDate ? this.maxParts : void 0, this.parsedHourValues, this.parsedMinuteValues);
    return [this.renderHourPickerColumn(hoursData), this.renderMinutePickerColumn(minutesData), this.renderDayPeriodPickerColumn(dayPeriodData)];
  }
  renderHourPickerColumn(hoursData) {
    const {
      disabled,
      workingParts
    } = this;
    if (hoursData.length === 0) return [];
    const activePart = this.getActivePartsWithFallback();
    return h("ion-picker-column", {
      "aria-label": "Select an hour",
      color: this.color,
      disabled,
      value: activePart.hour,
      numericInput: true,
      onIonChange: (ev) => {
        this.setWorkingParts(Object.assign(Object.assign({}, workingParts), {
          hour: ev.detail.value
        }));
        this.setActiveParts(Object.assign(Object.assign({}, this.getActivePartsWithFallback()), {
          hour: ev.detail.value
        }));
        ev.stopPropagation();
      }
    }, hoursData.map((hour) => h("ion-picker-column-option", {
      part: hour.value === activePart.hour ? `${WHEEL_ITEM_PART} ${WHEEL_ITEM_ACTIVE_PART}` : WHEEL_ITEM_PART,
      key: hour.value,
      disabled: hour.disabled,
      value: hour.value
    }, hour.text)));
  }
  renderMinutePickerColumn(minutesData) {
    const {
      disabled,
      workingParts
    } = this;
    if (minutesData.length === 0) return [];
    const activePart = this.getActivePartsWithFallback();
    return h("ion-picker-column", {
      "aria-label": "Select a minute",
      color: this.color,
      disabled,
      value: activePart.minute,
      numericInput: true,
      onIonChange: (ev) => {
        this.setWorkingParts(Object.assign(Object.assign({}, workingParts), {
          minute: ev.detail.value
        }));
        this.setActiveParts(Object.assign(Object.assign({}, this.getActivePartsWithFallback()), {
          minute: ev.detail.value
        }));
        ev.stopPropagation();
      }
    }, minutesData.map((minute) => h("ion-picker-column-option", {
      part: minute.value === activePart.minute ? `${WHEEL_ITEM_PART} ${WHEEL_ITEM_ACTIVE_PART}` : WHEEL_ITEM_PART,
      key: minute.value,
      disabled: minute.disabled,
      value: minute.value
    }, minute.text)));
  }
  renderDayPeriodPickerColumn(dayPeriodData) {
    const {
      disabled,
      workingParts
    } = this;
    if (dayPeriodData.length === 0) {
      return [];
    }
    const activePart = this.getActivePartsWithFallback();
    const isDayPeriodRTL = isLocaleDayPeriodRTL(this.locale);
    return h("ion-picker-column", {
      "aria-label": "Select a day period",
      style: isDayPeriodRTL ? {
        order: "-1"
      } : {},
      color: this.color,
      disabled,
      value: activePart.ampm,
      onIonChange: (ev) => {
        const hour = calculateHourFromAMPM(workingParts, ev.detail.value);
        this.setWorkingParts(Object.assign(Object.assign({}, workingParts), {
          ampm: ev.detail.value,
          hour
        }));
        this.setActiveParts(Object.assign(Object.assign({}, this.getActivePartsWithFallback()), {
          ampm: ev.detail.value,
          hour
        }));
        ev.stopPropagation();
      }
    }, dayPeriodData.map((dayPeriod) => h("ion-picker-column-option", {
      part: dayPeriod.value === activePart.ampm ? `${WHEEL_ITEM_PART} ${WHEEL_ITEM_ACTIVE_PART}` : WHEEL_ITEM_PART,
      key: dayPeriod.value,
      disabled: dayPeriod.disabled,
      value: dayPeriod.value
    }, dayPeriod.text)));
  }
  renderWheelView(forcePresentation) {
    const {
      locale
    } = this;
    const showMonthFirst = isMonthFirstLocale(locale);
    const columnOrder = showMonthFirst ? "month-first" : "year-first";
    return h("div", {
      class: {
        [`wheel-order-${columnOrder}`]: true
      }
    }, this.renderWheelPicker(forcePresentation));
  }
  /**
   * Grid Render Methods
   */
  renderCalendarHeader(mode) {
    const {
      disabled
    } = this;
    const expandedIcon = mode === "ios" ? chevronDown : caretUpSharp;
    const collapsedIcon = mode === "ios" ? chevronForward : caretDownSharp;
    const prevMonthDisabled = disabled || isPrevMonthDisabled(this.workingParts, this.minParts, this.maxParts);
    const nextMonthDisabled = disabled || isNextMonthDisabled(this.workingParts, this.maxParts);
    const hostDir = this.el.getAttribute("dir") || void 0;
    return h("div", {
      class: "calendar-header"
    }, h("div", {
      class: "calendar-action-buttons"
    }, h("div", {
      class: "calendar-month-year"
    }, h("button", {
      class: {
        "calendar-month-year-toggle": true,
        "ion-activatable": true,
        "ion-focusable": true
      },
      part: "month-year-button",
      disabled,
      "aria-label": this.showMonthAndYear ? "Hide year picker" : "Show year picker",
      onClick: () => this.toggleMonthAndYearView()
    }, h("span", {
      id: "toggle-wrapper"
    }, getMonthAndYear(this.locale, this.workingParts), h("ion-icon", {
      "aria-hidden": "true",
      icon: this.showMonthAndYear ? expandedIcon : collapsedIcon,
      lazy: false,
      flipRtl: true
    })), mode === "md" && h("ion-ripple-effect", null))), h("div", {
      class: "calendar-next-prev"
    }, h("ion-buttons", null, h("ion-button", {
      "aria-label": "Previous month",
      disabled: prevMonthDisabled,
      onClick: () => this.prevMonth()
    }, h("ion-icon", {
      dir: hostDir,
      "aria-hidden": "true",
      slot: "icon-only",
      icon: chevronBack,
      lazy: false,
      flipRtl: true
    })), h("ion-button", {
      "aria-label": "Next month",
      disabled: nextMonthDisabled,
      onClick: () => this.nextMonth()
    }, h("ion-icon", {
      dir: hostDir,
      "aria-hidden": "true",
      slot: "icon-only",
      icon: chevronForward,
      lazy: false,
      flipRtl: true
    }))))), h("div", {
      class: "calendar-days-of-week",
      "aria-hidden": "true"
    }, getDaysOfWeek(this.locale, mode, this.firstDayOfWeek % 7).map((d) => {
      return h("div", {
        class: "day-of-week"
      }, d);
    })));
  }
  renderMonth(month, year) {
    const {
      disabled,
      readonly
    } = this;
    const yearAllowed = this.parsedYearValues === void 0 || this.parsedYearValues.includes(year);
    const monthAllowed = this.parsedMonthValues === void 0 || this.parsedMonthValues.includes(month);
    const isCalMonthDisabled = !yearAllowed || !monthAllowed;
    const isDatetimeDisabled = disabled || readonly;
    const swipeDisabled = disabled || isMonthDisabled({
      month,
      year,
      day: null
    }, {
      // The day is not used when checking if a month is disabled.
      // Users should be able to access the min or max month, even if the
      // min/max date is out of bounds (e.g. min is set to Feb 15, Feb should not be disabled).
      minParts: Object.assign(Object.assign({}, this.minParts), {
        day: null
      }),
      maxParts: Object.assign(Object.assign({}, this.maxParts), {
        day: null
      })
    });
    const isWorkingMonth = this.workingParts.month === month && this.workingParts.year === year;
    const activePart = this.getActivePartsWithFallback();
    return h("div", {
      "aria-hidden": !isWorkingMonth ? "true" : null,
      class: {
        "calendar-month": true,
        // Prevents scroll snap swipe gestures for months outside of the min/max bounds
        "calendar-month-disabled": !isWorkingMonth && swipeDisabled
      }
    }, h("div", {
      class: "calendar-month-grid"
    }, getDaysOfMonth(month, year, this.firstDayOfWeek % 7, this.showAdjacentDays).map((dateObject, index) => {
      const {
        day,
        dayOfWeek,
        isAdjacentDay
      } = dateObject;
      const {
        el,
        highlightedDates,
        isDateEnabled,
        multiple,
        showAdjacentDays
      } = this;
      let _month = month;
      let _year = year;
      if (showAdjacentDays && isAdjacentDay && day !== null) {
        if (day > 20) {
          if (month === 1) {
            _year = year - 1;
            _month = 12;
          } else {
            _month = month - 1;
          }
        } else if (day < 15) {
          if (month === 12) {
            _year = year + 1;
            _month = 1;
          } else {
            _month = month + 1;
          }
        }
      }
      const referenceParts = {
        month: _month,
        day,
        year: _year,
        isAdjacentDay
      };
      const isCalendarPadding = day === null;
      const {
        isActive,
        isToday,
        ariaLabel,
        ariaSelected,
        disabled: isDayDisabled2,
        text
      } = getCalendarDayState(this.locale, referenceParts, this.activeParts, this.todayParts, this.minParts, this.maxParts, this.parsedDayValues);
      const dateIsoString = convertDataToISO(referenceParts);
      let isCalDayDisabled = isCalMonthDisabled || isDayDisabled2;
      if (!isCalDayDisabled && isDateEnabled !== void 0) {
        try {
          isCalDayDisabled = !isDateEnabled(dateIsoString);
        } catch (e) {
          printIonError("[ion-datetime] - Exception thrown from provided `isDateEnabled` function. Please check your function and try again.", el, e);
        }
      }
      const isCalDayConstrained = isCalDayDisabled && isDatetimeDisabled;
      const isButtonDisabled = isCalDayDisabled || isDatetimeDisabled;
      let dateStyle = void 0;
      if (highlightedDates !== void 0 && !isActive && day !== null && !isAdjacentDay) {
        dateStyle = getHighlightStyles(highlightedDates, dateIsoString, el);
      }
      let dateParts = void 0;
      if (!isCalendarPadding && !isAdjacentDay) {
        dateParts = `calendar-day${isActive ? " active" : ""}${isToday ? " today" : ""}${isCalDayDisabled ? " disabled" : ""}`;
      } else if (isAdjacentDay) {
        dateParts = `calendar-day${isCalDayDisabled ? " disabled" : ""}`;
      }
      return h("div", {
        class: "calendar-day-wrapper"
      }, h("button", {
        // We need to use !important for the inline styles here because
        // otherwise the CSS shadow parts will override these styles.
        // See https://github.com/WICG/webcomponents/issues/847
        // Both the CSS shadow parts and highlightedDates styles are
        // provided by the developer, but highlightedDates styles should
        // always take priority.
        ref: (el2) => {
          if (el2) {
            el2.style.setProperty("color", `${dateStyle ? dateStyle.textColor : ""}`, "important");
            el2.style.setProperty("background-color", `${dateStyle ? dateStyle.backgroundColor : ""}`, "important");
            el2.style.setProperty("border", `${dateStyle ? dateStyle.border : ""}`, "important");
          }
        },
        tabindex: "-1",
        "data-day": day,
        "data-month": _month,
        "data-year": _year,
        "data-index": index,
        "data-day-of-week": dayOfWeek,
        disabled: isButtonDisabled,
        class: {
          "calendar-day-padding": isCalendarPadding,
          "calendar-day": true,
          "calendar-day-active": isActive,
          "calendar-day-constrained": isCalDayConstrained,
          "calendar-day-today": isToday,
          "calendar-day-adjacent-day": isAdjacentDay
        },
        part: dateParts,
        "aria-hidden": isCalendarPadding ? "true" : null,
        "aria-selected": ariaSelected,
        "aria-label": ariaLabel,
        onClick: () => {
          if (isCalendarPadding) {
            return;
          }
          if (isAdjacentDay) {
            this.el.blur();
            this.activeParts = Object.assign(Object.assign({}, activePart), referenceParts);
            this.animateToDate(referenceParts);
            this.confirm();
          } else {
            this.setWorkingParts(Object.assign(Object.assign({}, this.workingParts), referenceParts));
            if (multiple) {
              this.setActiveParts(referenceParts, isActive);
            } else {
              this.setActiveParts(Object.assign(Object.assign({}, activePart), referenceParts));
            }
          }
        }
      }, text));
    })));
  }
  renderCalendarBody() {
    return h("div", {
      class: "calendar-body ion-focusable",
      ref: (el) => this.calendarBodyRef = el,
      tabindex: "0"
    }, generateMonths(this.workingParts, this.forceRenderDate).map(({
      month,
      year
    }) => {
      return this.renderMonth(month, year);
    }));
  }
  renderCalendar(mode) {
    return h("div", {
      class: "datetime-calendar",
      key: "datetime-calendar"
    }, this.renderCalendarHeader(mode), this.renderCalendarBody());
  }
  renderTimeLabel() {
    const hasSlottedTimeLabel = this.el.querySelector('[slot="time-label"]') !== null;
    if (!hasSlottedTimeLabel && !this.showDefaultTimeLabel) {
      return;
    }
    return h("slot", {
      name: "time-label"
    }, "Time");
  }
  renderTimeOverlay() {
    const {
      disabled,
      hourCycle,
      isTimePopoverOpen,
      locale,
      formatOptions
    } = this;
    const computedHourCycle = getHourCycle(locale, hourCycle);
    const activePart = this.getActivePartsWithFallback();
    return [h("div", {
      class: "time-header"
    }, this.renderTimeLabel()), h("button", {
      class: {
        "time-body": true,
        "time-body-active": isTimePopoverOpen
      },
      part: `time-button${isTimePopoverOpen ? " active" : ""}`,
      "aria-expanded": "false",
      "aria-haspopup": "true",
      disabled,
      onClick: (ev) => __async(this, null, function* () {
        const {
          popoverRef
        } = this;
        if (popoverRef) {
          this.isTimePopoverOpen = true;
          popoverRef.present(new CustomEvent("ionShadowTarget", {
            detail: {
              ionShadowTarget: ev.target
            }
          }));
          yield popoverRef.onWillDismiss();
          this.isTimePopoverOpen = false;
        }
      })
    }, getLocalizedTime(locale, activePart, computedHourCycle, formatOptions === null || formatOptions === void 0 ? void 0 : formatOptions.time)), h("ion-popover", {
      alignment: "center",
      translucent: true,
      overlayIndex: 1,
      arrow: false,
      onWillPresent: (ev) => {
        const cols = ev.target.querySelectorAll("ion-picker-column");
        cols.forEach((col) => col.scrollActiveItemIntoView());
      },
      style: {
        "--offset-y": "-10px",
        "--min-width": "fit-content"
      },
      // Allow native browser keyboard events to support up/down/home/end key
      // navigation within the time picker.
      keyboardEvents: true,
      ref: (el) => this.popoverRef = el
    }, this.renderWheelPicker("time"))];
  }
  getHeaderSelectedDateText() {
    var _a;
    const {
      activeParts,
      formatOptions,
      multiple,
      titleSelectedDatesFormatter
    } = this;
    const isArray = Array.isArray(activeParts);
    let headerText;
    if (multiple && isArray && activeParts.length !== 1) {
      headerText = `${activeParts.length} days`;
      if (titleSelectedDatesFormatter !== void 0) {
        try {
          headerText = titleSelectedDatesFormatter(convertDataToISO(activeParts));
        } catch (e) {
          printIonError("[ion-datetime] - Exception in provided `titleSelectedDatesFormatter`:", e);
        }
      }
    } else {
      headerText = getLocalizedDateTime(this.locale, this.getActivePartsWithFallback(), (_a = formatOptions === null || formatOptions === void 0 ? void 0 : formatOptions.date) !== null && _a !== void 0 ? _a : {
        weekday: "short",
        month: "short",
        day: "numeric"
      });
    }
    return headerText;
  }
  renderHeader(showExpandedHeader = true) {
    const hasSlottedTitle = this.el.querySelector('[slot="title"]') !== null;
    if (!hasSlottedTitle && !this.showDefaultTitle) {
      return;
    }
    return h("div", {
      class: "datetime-header"
    }, h("div", {
      class: "datetime-title"
    }, h("slot", {
      name: "title"
    }, "Select Date")), showExpandedHeader && h("div", {
      class: "datetime-selected-date"
    }, this.getHeaderSelectedDateText()));
  }
  /**
   * Render time picker inside of datetime.
   * Do not pass color prop to segment on
   * iOS mode. MD segment has been customized and
   * should take on the color prop, but iOS
   * should just be the default segment.
   */
  renderTime() {
    const {
      presentation
    } = this;
    const timeOnlyPresentation = presentation === "time";
    return h("div", {
      class: "datetime-time"
    }, timeOnlyPresentation ? this.renderWheelPicker() : this.renderTimeOverlay());
  }
  /**
   * Renders the month/year picker that is
   * displayed on the calendar grid.
   * The .datetime-year class has additional
   * styles that let us show/hide the
   * picker when the user clicks on the
   * toggle in the calendar header.
   */
  renderCalendarViewMonthYearPicker() {
    return h("div", {
      class: "datetime-year"
    }, this.renderWheelView("month-year"));
  }
  /**
   * Render entry point
   * All presentation types are rendered from here.
   */
  renderDatetime(mode) {
    const {
      presentation,
      preferWheel
    } = this;
    const hasWheelVariant = presentation === "date" || presentation === "date-time" || presentation === "time-date";
    if (preferWheel && hasWheelVariant) {
      return [this.renderHeader(false), this.renderWheelView(), this.renderFooter()];
    }
    switch (presentation) {
      case "date-time":
        return [this.renderHeader(), this.renderCalendar(mode), this.renderCalendarViewMonthYearPicker(), this.renderTime(), this.renderFooter()];
      case "time-date":
        return [this.renderHeader(), this.renderTime(), this.renderCalendar(mode), this.renderCalendarViewMonthYearPicker(), this.renderFooter()];
      case "time":
        return [this.renderHeader(false), this.renderTime(), this.renderFooter()];
      case "month":
      case "month-year":
      case "year":
        return [this.renderHeader(false), this.renderWheelView(), this.renderFooter()];
      default:
        return [this.renderHeader(), this.renderCalendar(mode), this.renderCalendarViewMonthYearPicker(), this.renderFooter()];
    }
  }
  render() {
    const {
      name,
      value,
      disabled,
      el,
      color,
      readonly,
      showMonthAndYear,
      preferWheel,
      presentation,
      size,
      isGridStyle
    } = this;
    const mode = getIonMode(this);
    const isMonthAndYearPresentation = presentation === "year" || presentation === "month" || presentation === "month-year";
    const shouldShowMonthAndYear = showMonthAndYear || isMonthAndYearPresentation;
    const monthYearPickerOpen = showMonthAndYear && !isMonthAndYearPresentation;
    const hasDatePresentation = presentation === "date" || presentation === "date-time" || presentation === "time-date";
    const hasWheelVariant = hasDatePresentation && preferWheel;
    renderHiddenInput(true, el, name, formatValue(value), disabled);
    return h(Host, {
      key: "f35cf200ff05d33074576e3d2754d3b2a0735b96",
      "aria-disabled": disabled ? "true" : null,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      class: Object.assign({}, createColorClasses(color, {
        [mode]: true,
        ["datetime-readonly"]: readonly,
        ["datetime-disabled"]: disabled,
        "show-month-and-year": shouldShowMonthAndYear,
        "month-year-picker-open": monthYearPickerOpen,
        [`datetime-presentation-${presentation}`]: true,
        [`datetime-size-${size}`]: true,
        [`datetime-prefer-wheel`]: hasWheelVariant,
        [`datetime-grid`]: isGridStyle
      }))
    }, h("div", {
      key: "859e9354a12bfa58ac3f964c2e66839f17071c00",
      class: "intersection-tracker",
      ref: (el2) => this.intersectionTrackerRef = el2
    }), this.renderDatetime(mode));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "formatOptions": ["formatOptionsChanged"],
      "disabled": ["disabledChanged"],
      "min": ["minChanged"],
      "max": ["maxChanged"],
      "presentation": ["presentationChanged"],
      "yearValues": ["yearValuesChanged"],
      "monthValues": ["monthValuesChanged"],
      "dayValues": ["dayValuesChanged"],
      "hourValues": ["hourValuesChanged"],
      "minuteValues": ["minuteValuesChanged"],
      "value": ["valueChanged"]
    };
  }
};
var datetimeIds = 0;
var CANCEL_ROLE = "datetime-cancel";
var CONFIRM_ROLE = "datetime-confirm";
var WHEEL_ITEM_PART = "wheel-item";
var WHEEL_ITEM_ACTIVE_PART = `active`;
Datetime.style = {
  ios: datetimeIosCss,
  md: datetimeMdCss
};
var iosEnterAnimation = (baseEl) => {
  const baseAnimation = createAnimation();
  const backdropAnimation = createAnimation();
  const wrapperAnimation = createAnimation();
  backdropAnimation.addElement(baseEl.querySelector("ion-backdrop")).fromTo("opacity", 0.01, "var(--backdrop-opacity)").beforeStyles({
    "pointer-events": "none"
  }).afterClearStyles(["pointer-events"]);
  wrapperAnimation.addElement(baseEl.querySelector(".picker-wrapper")).fromTo("transform", "translateY(100%)", "translateY(0%)");
  return baseAnimation.addElement(baseEl).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([backdropAnimation, wrapperAnimation]);
};
var iosLeaveAnimation = (baseEl) => {
  const baseAnimation = createAnimation();
  const backdropAnimation = createAnimation();
  const wrapperAnimation = createAnimation();
  backdropAnimation.addElement(baseEl.querySelector("ion-backdrop")).fromTo("opacity", "var(--backdrop-opacity)", 0.01);
  wrapperAnimation.addElement(baseEl.querySelector(".picker-wrapper")).fromTo("transform", "translateY(0%)", "translateY(100%)");
  return baseAnimation.addElement(baseEl).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([backdropAnimation, wrapperAnimation]);
};
var pickerIosCss = ".sc-ion-picker-legacy-ios-h{--border-radius:0;--border-style:solid;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--max-height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.sc-ion-picker-legacy-ios-h{inset-inline-start:0}.overlay-hidden.sc-ion-picker-legacy-ios-h{display:none}.picker-wrapper.sc-ion-picker-legacy-ios{border-radius:var(--border-radius);left:0;right:0;bottom:0;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;overflow:hidden;z-index:10}.picker-toolbar.sc-ion-picker-legacy-ios{width:100%;background:transparent;contain:strict;z-index:1}.picker-button.sc-ion-picker-legacy-ios{border:0;font-family:inherit}.picker-button.sc-ion-picker-legacy-ios:active,.picker-button.sc-ion-picker-legacy-ios:focus{outline:none}.picker-columns.sc-ion-picker-legacy-ios{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;margin-bottom:var(--ion-safe-area-bottom, 0);contain:strict;overflow:hidden}.picker-above-highlight.sc-ion-picker-legacy-ios,.picker-below-highlight.sc-ion-picker-legacy-ios{display:none;pointer-events:none}.sc-ion-picker-legacy-ios-h{--background:var(--ion-background-color, #fff);--border-width:1px 0 0;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, var(--ion-background-color-step-250, #c8c7cc))));--height:260px;--backdrop-opacity:var(--ion-backdrop-opacity, 0.26);color:var(--ion-item-color, var(--ion-text-color, #000))}.picker-toolbar.sc-ion-picker-legacy-ios{display:-ms-flexbox;display:flex;height:44px;border-bottom:0.55px solid var(--border-color)}.picker-toolbar-button.sc-ion-picker-legacy-ios{-ms-flex:1;flex:1;text-align:end}.picker-toolbar-button.sc-ion-picker-legacy-ios:last-child .picker-button.sc-ion-picker-legacy-ios{font-weight:600}.picker-toolbar-button.sc-ion-picker-legacy-ios:first-child{font-weight:normal;text-align:start}.picker-button.sc-ion-picker-legacy-ios,.picker-button.ion-activated.sc-ion-picker-legacy-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:1em;padding-inline-start:1em;-webkit-padding-end:1em;padding-inline-end:1em;padding-top:0;padding-bottom:0;height:44px;background:transparent;color:var(--ion-color-primary, #0054e9);font-size:16px}.picker-columns.sc-ion-picker-legacy-ios{height:215px;-webkit-perspective:1000px;perspective:1000px}.picker-above-highlight.sc-ion-picker-legacy-ios{top:0;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);display:block;position:absolute;width:100%;height:81px;border-bottom:1px solid var(--border-color);background:-webkit-gradient(linear, left top, left bottom, color-stop(20%, var(--background, var(--ion-background-color, #fff))), to(rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8)));background:linear-gradient(to bottom, var(--background, var(--ion-background-color, #fff)) 20%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8) 100%);z-index:10}.picker-above-highlight.sc-ion-picker-legacy-ios{inset-inline-start:0}.picker-below-highlight.sc-ion-picker-legacy-ios{top:115px;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);display:block;position:absolute;width:100%;height:119px;border-top:1px solid var(--border-color);background:-webkit-gradient(linear, left bottom, left top, color-stop(30%, var(--background, var(--ion-background-color, #fff))), to(rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8)));background:linear-gradient(to top, var(--background, var(--ion-background-color, #fff)) 30%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8) 100%);z-index:11}.picker-below-highlight.sc-ion-picker-legacy-ios{inset-inline-start:0}";
var pickerMdCss = ".sc-ion-picker-legacy-md-h{--border-radius:0;--border-style:solid;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--max-height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.sc-ion-picker-legacy-md-h{inset-inline-start:0}.overlay-hidden.sc-ion-picker-legacy-md-h{display:none}.picker-wrapper.sc-ion-picker-legacy-md{border-radius:var(--border-radius);left:0;right:0;bottom:0;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;overflow:hidden;z-index:10}.picker-toolbar.sc-ion-picker-legacy-md{width:100%;background:transparent;contain:strict;z-index:1}.picker-button.sc-ion-picker-legacy-md{border:0;font-family:inherit}.picker-button.sc-ion-picker-legacy-md:active,.picker-button.sc-ion-picker-legacy-md:focus{outline:none}.picker-columns.sc-ion-picker-legacy-md{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;margin-bottom:var(--ion-safe-area-bottom, 0);contain:strict;overflow:hidden}.picker-above-highlight.sc-ion-picker-legacy-md,.picker-below-highlight.sc-ion-picker-legacy-md{display:none;pointer-events:none}.sc-ion-picker-legacy-md-h{--background:var(--ion-background-color, #fff);--border-width:0.55px 0 0;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.13)))));--height:260px;--backdrop-opacity:var(--ion-backdrop-opacity, 0.26);color:var(--ion-item-color, var(--ion-text-color, #000))}.picker-toolbar.sc-ion-picker-legacy-md{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;height:44px}.picker-button.sc-ion-picker-legacy-md,.picker-button.ion-activated.sc-ion-picker-legacy-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:1.1em;padding-inline-start:1.1em;-webkit-padding-end:1.1em;padding-inline-end:1.1em;padding-top:0;padding-bottom:0;height:44px;background:transparent;color:var(--ion-color-primary, #0054e9);font-size:14px;font-weight:500;text-transform:uppercase;-webkit-box-shadow:none;box-shadow:none}.picker-columns.sc-ion-picker-legacy-md{height:216px;-webkit-perspective:1800px;perspective:1800px}.picker-above-highlight.sc-ion-picker-legacy-md{top:0;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);position:absolute;width:100%;height:81px;border-bottom:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.13)))));background:-webkit-gradient(linear, left top, left bottom, color-stop(20%, var(--ion-background-color, #fff)), to(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)));background:linear-gradient(to bottom, var(--ion-background-color, #fff) 20%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%);z-index:10}.picker-above-highlight.sc-ion-picker-legacy-md{inset-inline-start:0}.picker-below-highlight.sc-ion-picker-legacy-md{top:115px;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);position:absolute;width:100%;height:119px;border-top:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, var(--ion-background-color-step-150, rgba(0, 0, 0, 0.13)))));background:-webkit-gradient(linear, left bottom, left top, color-stop(30%, var(--ion-background-color, #fff)), to(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)));background:linear-gradient(to top, var(--ion-background-color, #fff) 30%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%);z-index:11}.picker-below-highlight.sc-ion-picker-legacy-md{inset-inline-start:0}";
var Picker = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.didPresent = createEvent(this, "ionPickerDidPresent", 7);
    this.willPresent = createEvent(this, "ionPickerWillPresent", 7);
    this.willDismiss = createEvent(this, "ionPickerWillDismiss", 7);
    this.didDismiss = createEvent(this, "ionPickerDidDismiss", 7);
    this.didPresentShorthand = createEvent(this, "didPresent", 7);
    this.willPresentShorthand = createEvent(this, "willPresent", 7);
    this.willDismissShorthand = createEvent(this, "willDismiss", 7);
    this.didDismissShorthand = createEvent(this, "didDismiss", 7);
    this.delegateController = createDelegateController(this);
    this.lockController = createLockController();
    this.triggerController = createTriggerController();
    this.presented = false;
    this.hasController = false;
    this.keyboardClose = true;
    this.buttons = [];
    this.columns = [];
    this.duration = 0;
    this.showBackdrop = true;
    this.backdropDismiss = true;
    this.animated = true;
    this.isOpen = false;
    this.onBackdropTap = () => {
      this.dismiss(void 0, BACKDROP);
    };
    this.dispatchCancelHandler = (ev) => {
      const role = ev.detail.role;
      if (isCancel(role)) {
        const cancelButton = this.buttons.find((b) => b.role === "cancel");
        this.callButtonHandler(cancelButton);
      }
    };
  }
  onIsOpenChange(newValue, oldValue) {
    if (newValue === true && oldValue === false) {
      this.present();
    } else if (newValue === false && oldValue === true) {
      this.dismiss();
    }
  }
  triggerChanged() {
    const {
      trigger,
      el,
      triggerController
    } = this;
    if (trigger) {
      triggerController.addClickListener(el, trigger);
    }
  }
  connectedCallback() {
    prepareOverlay(this.el);
    this.triggerChanged();
  }
  disconnectedCallback() {
    this.triggerController.removeClickListener();
  }
  componentWillLoad() {
    var _a;
    if (!((_a = this.htmlAttributes) === null || _a === void 0 ? void 0 : _a.id)) {
      setOverlayId(this.el);
    }
  }
  componentDidLoad() {
    printIonWarning("[ion-picker-legacy] - ion-picker-legacy and ion-picker-legacy-column have been deprecated in favor of new versions of the ion-picker and ion-picker-column components. These new components display inline with your page content allowing for more presentation flexibility than before.", this.el);
    if (this.isOpen === true) {
      raf(() => this.present());
    }
    this.triggerChanged();
  }
  /**
   * Present the picker overlay after it has been created.
   */
  present() {
    return __async(this, null, function* () {
      const unlock = yield this.lockController.lock();
      yield this.delegateController.attachViewToDom();
      yield present(this, "pickerEnter", iosEnterAnimation, iosEnterAnimation, void 0);
      if (this.duration > 0) {
        this.durationTimeout = setTimeout(() => this.dismiss(), this.duration);
      }
      unlock();
    });
  }
  /**
   * Dismiss the picker overlay after it has been presented.
   *
   * @param data Any data to emit in the dismiss events.
   * @param role The role of the element that is dismissing the picker.
   * This can be useful in a button handler for determining which button was
   * clicked to dismiss the picker.
   * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
   */
  dismiss(data, role) {
    return __async(this, null, function* () {
      const unlock = yield this.lockController.lock();
      if (this.durationTimeout) {
        clearTimeout(this.durationTimeout);
      }
      const dismissed = yield dismiss(this, data, role, "pickerLeave", iosLeaveAnimation, iosLeaveAnimation);
      if (dismissed) {
        this.delegateController.removeViewFromDom();
      }
      unlock();
      return dismissed;
    });
  }
  /**
   * Returns a promise that resolves when the picker did dismiss.
   */
  onDidDismiss() {
    return eventMethod(this.el, "ionPickerDidDismiss");
  }
  /**
   * Returns a promise that resolves when the picker will dismiss.
   */
  onWillDismiss() {
    return eventMethod(this.el, "ionPickerWillDismiss");
  }
  /**
   * Get the column that matches the specified name.
   *
   * @param name The name of the column.
   */
  getColumn(name) {
    return Promise.resolve(this.columns.find((column) => column.name === name));
  }
  buttonClick(button) {
    return __async(this, null, function* () {
      const role = button.role;
      if (isCancel(role)) {
        return this.dismiss(void 0, role);
      }
      const shouldDismiss = yield this.callButtonHandler(button);
      if (shouldDismiss) {
        return this.dismiss(this.getSelected(), button.role);
      }
      return Promise.resolve();
    });
  }
  callButtonHandler(button) {
    return __async(this, null, function* () {
      if (button) {
        const rtn = yield safeCall(button.handler, this.getSelected());
        if (rtn === false) {
          return false;
        }
      }
      return true;
    });
  }
  getSelected() {
    const selected = {};
    this.columns.forEach((col, index) => {
      const selectedColumn = col.selectedIndex !== void 0 ? col.options[col.selectedIndex] : void 0;
      selected[col.name] = {
        text: selectedColumn ? selectedColumn.text : void 0,
        value: selectedColumn ? selectedColumn.value : void 0,
        columnIndex: index
      };
    });
    return selected;
  }
  render() {
    const {
      htmlAttributes
    } = this;
    const mode = getIonMode(this);
    return h(Host, Object.assign({
      key: "b95440747eb80cba23ae676d399d5e5816722c58",
      "aria-modal": "true",
      tabindex: "-1"
    }, htmlAttributes, {
      style: {
        zIndex: `${2e4 + this.overlayIndex}`
      },
      class: Object.assign({
        [mode]: true,
        // Used internally for styling
        [`picker-${mode}`]: true,
        "overlay-hidden": true
      }, getClassMap(this.cssClass)),
      onIonBackdropTap: this.onBackdropTap,
      onIonPickerWillDismiss: this.dispatchCancelHandler
    }), h("ion-backdrop", {
      key: "169d1c83ef40e7fcb134219a585298b403a70b0f",
      visible: this.showBackdrop,
      tappable: this.backdropDismiss
    }), h("div", {
      key: "98518e5f5cea2dfb8dfa63d9545e9ae3a5765023",
      tabindex: "0",
      "aria-hidden": "true"
    }), h("div", {
      key: "151755ab8eb23f9adafbfe201349398f5a69dee7",
      class: "picker-wrapper ion-overlay-wrapper",
      role: "dialog"
    }, h("div", {
      key: "5dcf93b2f4fe8f4fce7c7aec8f85ef45a03ef470",
      class: "picker-toolbar"
    }, this.buttons.map((b) => h("div", {
      class: buttonWrapperClass(b)
    }, h("button", {
      type: "button",
      onClick: () => this.buttonClick(b),
      class: buttonClass(b)
    }, b.text)))), h("div", {
      key: "fd5d66708edd38adc5a4d2fad7298969398a05e3",
      class: "picker-columns"
    }, h("div", {
      key: "1b5830fd6cef1016af7736792c514965d6cb38a8",
      class: "picker-above-highlight"
    }), this.presented && this.columns.map((c) => h("ion-picker-legacy-column", {
      col: c
    })), h("div", {
      key: "c6edeca7afd69e13c9c66ba36f261974fd0f8f78",
      class: "picker-below-highlight"
    }))), h("div", {
      key: "e2a4b24710e30579b14b82dbfd3761b2187797b5",
      tabindex: "0",
      "aria-hidden": "true"
    }));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "isOpen": ["onIsOpenChange"],
      "trigger": ["triggerChanged"]
    };
  }
};
var buttonWrapperClass = (button) => {
  return {
    [`picker-toolbar-${button.role}`]: button.role !== void 0,
    "picker-toolbar-button": true
  };
};
var buttonClass = (button) => {
  return Object.assign({
    "picker-button": true,
    "ion-activatable": true
  }, getClassMap(button.cssClass));
};
Picker.style = {
  ios: pickerIosCss,
  md: pickerMdCss
};
var pickerColumnIosCss = ".picker-col{display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-box-sizing:content-box;box-sizing:content-box;contain:content}.picker-opts{position:relative;-ms-flex:1;flex:1;max-width:100%}.picker-opt{top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}.picker-opt{inset-inline-start:0}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{-ms-flex-pack:start;justify-content:flex-start}.picker-opts-right{-ms-flex-pack:end;justify-content:flex-end}.picker-opt:active,.picker-opt:focus{outline:none}.picker-prefix{position:relative;-ms-flex:1;flex:1;text-align:end;white-space:nowrap}.picker-suffix{position:relative;-ms-flex:1;flex:1;text-align:start;white-space:nowrap}.picker-col{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:0;padding-bottom:0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.picker-prefix,.picker-suffix,.picker-opts{top:77px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;color:inherit;font-size:20px;line-height:42px;pointer-events:none}.picker-opt{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-transform-origin:center center;transform-origin:center center;height:46px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;background:transparent;color:inherit;font-size:20px;line-height:42px;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:auto}:host-context([dir=rtl]) .picker-opt{-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}[dir=rtl] .picker-opt{-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}@supports selector(:dir(rtl)){.picker-opt:dir(rtl){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}}";
var pickerColumnMdCss = ".picker-col{display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-box-sizing:content-box;box-sizing:content-box;contain:content}.picker-opts{position:relative;-ms-flex:1;flex:1;max-width:100%}.picker-opt{top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}.picker-opt{inset-inline-start:0}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{-ms-flex-pack:start;justify-content:flex-start}.picker-opts-right{-ms-flex-pack:end;justify-content:flex-end}.picker-opt:active,.picker-opt:focus{outline:none}.picker-prefix{position:relative;-ms-flex:1;flex:1;text-align:end;white-space:nowrap}.picker-suffix{position:relative;-ms-flex:1;flex:1;text-align:start;white-space:nowrap}.picker-col{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:0;padding-bottom:0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.picker-prefix,.picker-suffix,.picker-opts{top:77px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;color:inherit;font-size:22px;line-height:42px;pointer-events:none}.picker-opt{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;height:43px;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;background:transparent;color:inherit;font-size:22px;line-height:42px;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:auto}.picker-prefix,.picker-suffix,.picker-opt.picker-opt-selected{color:var(--ion-color-primary, #0054e9)}";
var PickerColumnCmp = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionPickerColChange = createEvent(this, "ionPickerColChange", 7);
    this.optHeight = 0;
    this.rotateFactor = 0;
    this.scaleFactor = 1;
    this.velocity = 0;
    this.y = 0;
    this.noAnimate = true;
    this.colDidChange = false;
  }
  colChanged() {
    this.colDidChange = true;
  }
  connectedCallback() {
    return __async(this, null, function* () {
      let pickerRotateFactor = 0;
      let pickerScaleFactor = 0.81;
      const mode = getIonMode(this);
      if (mode === "ios") {
        pickerRotateFactor = -0.46;
        pickerScaleFactor = 1;
      }
      this.rotateFactor = pickerRotateFactor;
      this.scaleFactor = pickerScaleFactor;
      this.gesture = (yield import("./index-CfgBF1SE-H675UNH5.js")).createGesture({
        el: this.el,
        gestureName: "picker-swipe",
        gesturePriority: 100,
        threshold: 0,
        passive: false,
        onStart: (ev) => this.onStart(ev),
        onMove: (ev) => this.onMove(ev),
        onEnd: (ev) => this.onEnd(ev)
      });
      this.gesture.enable();
      this.tmrId = setTimeout(() => {
        this.noAnimate = false;
        this.refresh(true);
      }, 250);
    });
  }
  componentDidLoad() {
    this.onDomChange();
  }
  componentDidUpdate() {
    if (this.colDidChange) {
      this.onDomChange(true, false);
      this.colDidChange = false;
    }
  }
  disconnectedCallback() {
    if (this.rafId !== void 0) cancelAnimationFrame(this.rafId);
    if (this.tmrId) clearTimeout(this.tmrId);
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = void 0;
    }
  }
  emitColChange() {
    this.ionPickerColChange.emit(this.col);
  }
  setSelected(selectedIndex, duration) {
    const y = selectedIndex > -1 ? -(selectedIndex * this.optHeight) : 0;
    this.velocity = 0;
    if (this.rafId !== void 0) cancelAnimationFrame(this.rafId);
    this.update(y, duration, true);
    this.emitColChange();
  }
  update(y, duration, saveY) {
    if (!this.optsEl) {
      return;
    }
    let translateY = 0;
    let translateZ = 0;
    const {
      col,
      rotateFactor
    } = this;
    const prevSelected = col.selectedIndex;
    const selectedIndex = col.selectedIndex = this.indexForY(-y);
    const durationStr = duration === 0 ? "" : duration + "ms";
    const scaleStr = `scale(${this.scaleFactor})`;
    const children = this.optsEl.children;
    for (let i = 0; i < children.length; i++) {
      const button = children[i];
      const opt = col.options[i];
      const optOffset = i * this.optHeight + y;
      let transform = "";
      if (rotateFactor !== 0) {
        const rotateX = optOffset * rotateFactor;
        if (Math.abs(rotateX) <= 90) {
          translateY = 0;
          translateZ = 90;
          transform = `rotateX(${rotateX}deg) `;
        } else {
          translateY = -9999;
        }
      } else {
        translateZ = 0;
        translateY = optOffset;
      }
      const selected = selectedIndex === i;
      transform += `translate3d(0px,${translateY}px,${translateZ}px) `;
      if (this.scaleFactor !== 1 && !selected) {
        transform += scaleStr;
      }
      if (this.noAnimate) {
        opt.duration = 0;
        button.style.transitionDuration = "";
      } else if (duration !== opt.duration) {
        opt.duration = duration;
        button.style.transitionDuration = durationStr;
      }
      if (transform !== opt.transform) {
        opt.transform = transform;
      }
      button.style.transform = transform;
      opt.selected = selected;
      if (selected) {
        button.classList.add(PICKER_OPT_SELECTED);
      } else {
        button.classList.remove(PICKER_OPT_SELECTED);
      }
    }
    this.col.prevSelected = prevSelected;
    if (saveY) {
      this.y = y;
    }
    if (this.lastIndex !== selectedIndex) {
      hapticSelectionChanged();
      this.lastIndex = selectedIndex;
    }
  }
  decelerate() {
    if (this.velocity !== 0) {
      this.velocity *= DECELERATION_FRICTION;
      this.velocity = this.velocity > 0 ? Math.max(this.velocity, 1) : Math.min(this.velocity, -1);
      let y = this.y + this.velocity;
      if (y > this.minY) {
        y = this.minY;
        this.velocity = 0;
      } else if (y < this.maxY) {
        y = this.maxY;
        this.velocity = 0;
      }
      this.update(y, 0, true);
      const notLockedIn = Math.round(y) % this.optHeight !== 0 || Math.abs(this.velocity) > 1;
      if (notLockedIn) {
        this.rafId = requestAnimationFrame(() => this.decelerate());
      } else {
        this.velocity = 0;
        this.emitColChange();
        hapticSelectionEnd();
      }
    } else if (this.y % this.optHeight !== 0) {
      const currentPos = Math.abs(this.y % this.optHeight);
      this.velocity = currentPos > this.optHeight / 2 ? 1 : -1;
      this.decelerate();
    }
  }
  indexForY(y) {
    return Math.min(Math.max(Math.abs(Math.round(y / this.optHeight)), 0), this.col.options.length - 1);
  }
  onStart(detail) {
    if (detail.event.cancelable) {
      detail.event.preventDefault();
    }
    detail.event.stopPropagation();
    hapticSelectionStart();
    if (this.rafId !== void 0) cancelAnimationFrame(this.rafId);
    const options = this.col.options;
    let minY = options.length - 1;
    let maxY = 0;
    for (let i = 0; i < options.length; i++) {
      if (!options[i].disabled) {
        minY = Math.min(minY, i);
        maxY = Math.max(maxY, i);
      }
    }
    this.minY = -(minY * this.optHeight);
    this.maxY = -(maxY * this.optHeight);
  }
  onMove(detail) {
    if (detail.event.cancelable) {
      detail.event.preventDefault();
    }
    detail.event.stopPropagation();
    let y = this.y + detail.deltaY;
    if (y > this.minY) {
      y = Math.pow(y, 0.8);
      this.bounceFrom = y;
    } else if (y < this.maxY) {
      y += Math.pow(this.maxY - y, 0.9);
      this.bounceFrom = y;
    } else {
      this.bounceFrom = 0;
    }
    this.update(y, 0, false);
  }
  onEnd(detail) {
    if (this.bounceFrom > 0) {
      this.update(this.minY, 100, true);
      this.emitColChange();
      return;
    } else if (this.bounceFrom < 0) {
      this.update(this.maxY, 100, true);
      this.emitColChange();
      return;
    }
    this.velocity = clamp(-90, detail.velocityY * 23, MAX_PICKER_SPEED);
    if (this.velocity === 0 && detail.deltaY === 0) {
      const opt = detail.event.target.closest(".picker-opt");
      if (opt === null || opt === void 0 ? void 0 : opt.hasAttribute("opt-index")) {
        this.setSelected(parseInt(opt.getAttribute("opt-index"), 10), TRANSITION_DURATION);
      }
    } else {
      this.y += detail.deltaY;
      if (Math.abs(detail.velocityY) < 0.05) {
        const isScrollingUp = detail.deltaY > 0;
        const optHeightFraction = Math.abs(this.y) % this.optHeight / this.optHeight;
        if (isScrollingUp && optHeightFraction > 0.5) {
          this.velocity = Math.abs(this.velocity) * -1;
        } else if (!isScrollingUp && optHeightFraction <= 0.5) {
          this.velocity = Math.abs(this.velocity);
        }
      }
      this.decelerate();
    }
  }
  refresh(forceRefresh, animated) {
    var _a;
    let min = this.col.options.length - 1;
    let max = 0;
    const options = this.col.options;
    for (let i = 0; i < options.length; i++) {
      if (!options[i].disabled) {
        min = Math.min(min, i);
        max = Math.max(max, i);
      }
    }
    if (this.velocity !== 0) {
      return;
    }
    const selectedIndex = clamp(min, (_a = this.col.selectedIndex) !== null && _a !== void 0 ? _a : 0, max);
    if (this.col.prevSelected !== selectedIndex || forceRefresh) {
      const y = selectedIndex * this.optHeight * -1;
      const duration = animated ? TRANSITION_DURATION : 0;
      this.velocity = 0;
      this.update(y, duration, true);
    }
  }
  onDomChange(forceRefresh, animated) {
    const colEl = this.optsEl;
    if (colEl) {
      this.optHeight = colEl.firstElementChild ? colEl.firstElementChild.clientHeight : 0;
    }
    this.refresh(forceRefresh, animated);
  }
  render() {
    const col = this.col;
    const mode = getIonMode(this);
    return h(Host, {
      key: "ed32d108dd94f0302fb453c31a3497ebae65ec37",
      class: Object.assign({
        [mode]: true,
        "picker-col": true,
        "picker-opts-left": this.col.align === "left",
        "picker-opts-right": this.col.align === "right"
      }, getClassMap(col.cssClass)),
      style: {
        "max-width": this.col.columnWidth
      }
    }, col.prefix && h("div", {
      key: "9f0634890e66fd4ae74f826d1eea3431de121393",
      class: "picker-prefix",
      style: {
        width: col.prefixWidth
      }
    }, col.prefix), h("div", {
      key: "337e996e5be91af16446085fe22436f213b771eb",
      class: "picker-opts",
      style: {
        maxWidth: col.optionsWidth
      },
      ref: (el) => this.optsEl = el
    }, col.options.map((o, index) => h("button", {
      "aria-label": o.ariaLabel,
      class: {
        "picker-opt": true,
        "picker-opt-disabled": !!o.disabled
      },
      "opt-index": index
    }, o.text))), col.suffix && h("div", {
      key: "d69a132599d78d9e5107f12228978cfce4e43098",
      class: "picker-suffix",
      style: {
        width: col.suffixWidth
      }
    }, col.suffix));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "col": ["colChanged"]
    };
  }
};
var PICKER_OPT_SELECTED = "picker-opt-selected";
var DECELERATION_FRICTION = 0.97;
var MAX_PICKER_SPEED = 90;
var TRANSITION_DURATION = 150;
PickerColumnCmp.style = {
  ios: pickerColumnIosCss,
  md: pickerColumnMdCss
};
export {
  Datetime as ion_datetime,
  Picker as ion_picker_legacy,
  PickerColumnCmp as ion_picker_legacy_column
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-datetime_3.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pb24tZGF0ZXRpbWVfMy5lbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgaiBhcyBwcmludElvbkVycm9yLCBmIGFzIHByaW50SW9uV2FybmluZywgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGNyZWF0ZUV2ZW50LCB3IGFzIHdyaXRlVGFzaywgaCwgZCBhcyBIb3N0LCBnIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2luZGV4LTREeFk2X2dHLmpzJztcbmltcG9ydCB7IHN0YXJ0Rm9jdXNWaXNpYmxlIH0gZnJvbSAnLi9mb2N1cy12aXNpYmxlLUJtVlJYUjF5LmpzJztcbmltcG9ydCB7IHIgYXMgcmFmLCBnIGFzIGdldEVsZW1lbnRSb290LCBhIGFzIHJlbmRlckhpZGRlbklucHV0LCBlIGFzIGNsYW1wIH0gZnJvbSAnLi9oZWxwZXJzLThLU1FRR1F5LmpzJztcbmltcG9ydCB7IGkgYXMgaXNSVEwgfSBmcm9tICcuL2Rpci1DNTNmZWFnRC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZUNvbG9yQ2xhc3NlcywgZyBhcyBnZXRDbGFzc01hcCB9IGZyb20gJy4vdGhlbWUtRGlWSnlxbFguanMnO1xuaW1wb3J0IHsgbCBhcyBjaGV2cm9uRG93biwgbyBhcyBjYXJldFVwU2hhcnAsIHAgYXMgY2hldnJvbkZvcndhcmQsIHEgYXMgY2FyZXREb3duU2hhcnAsIGMgYXMgY2hldnJvbkJhY2sgfSBmcm9tICcuL2luZGV4LURWM3NKSlc4LmpzJztcbmltcG9ydCB7IGIgYXMgZ2V0SW9uTW9kZSB9IGZyb20gJy4vaW9uaWMtZ2xvYmFsLUNUU3l1ZmhGLmpzJztcbmltcG9ydCB7IGkgYXMgaXNCZWZvcmUsIGEgYXMgaXNBZnRlciwgZyBhcyBnZXRQcmV2aW91c01vbnRoLCBiIGFzIGdldE5leHRNb250aCwgYyBhcyBpc1NhbWVEYXksIGQgYXMgZ2V0RGF5LCBlIGFzIGdlbmVyYXRlRGF5QXJpYUxhYmVsLCB2IGFzIHZhbGlkYXRlUGFydHMsIGYgYXMgZ2V0UGFydHNGcm9tQ2FsZW5kYXJEYXksIGggYXMgZ2V0TmV4dFllYXIsIGogYXMgZ2V0UHJldmlvdXNZZWFyLCBrIGFzIGdldEVuZE9mV2VlaywgbCBhcyBnZXRTdGFydE9mV2VlaywgbSBhcyBnZXRQcmV2aW91c0RheSwgbiBhcyBnZXROZXh0RGF5LCBvIGFzIGdldFByZXZpb3VzV2VlaywgcCBhcyBnZXROZXh0V2VlaywgcSBhcyBwYXJzZU1pblBhcnRzLCByIGFzIHBhcnNlTWF4UGFydHMsIHMgYXMgcGFyc2VEYXRlLCB3IGFzIHdhcm5JZlZhbHVlT3V0T2ZCb3VuZHMsIHQgYXMgcGFyc2VBbVBtLCB1IGFzIGNsYW1wRGF0ZSwgeCBhcyBjb252ZXJ0VG9BcnJheU9mTnVtYmVycywgeSBhcyBjb252ZXJ0RGF0YVRvSVNPLCB6IGFzIGdldFRvZGF5LCBBIGFzIGdldENsb3Nlc3RWYWxpZERhdGUsIEIgYXMgZ2VuZXJhdGVNb250aHMsIEMgYXMgZ2V0TnVtRGF5c0luTW9udGgsIEQgYXMgZ2V0Q29tYmluZWREYXRlQ29sdW1uRGF0YSwgRSBhcyBnZXRNb250aENvbHVtbkRhdGEsIEYgYXMgZ2V0RGF5Q29sdW1uRGF0YSwgRyBhcyBnZXRZZWFyQ29sdW1uRGF0YSwgSCBhcyBpc01vbnRoRmlyc3RMb2NhbGUsIEkgYXMgZ2V0VGltZUNvbHVtbnNEYXRhLCBKIGFzIGlzTG9jYWxlRGF5UGVyaW9kUlRMLCBLIGFzIGNhbGN1bGF0ZUhvdXJGcm9tQU1QTSwgTCBhcyBnZXREYXlzT2ZXZWVrLCBNIGFzIGdldE1vbnRoQW5kWWVhciwgTiBhcyBnZXREYXlzT2ZNb250aCwgTyBhcyBnZXRIb3VyQ3ljbGUsIFAgYXMgZ2V0TG9jYWxpemVkVGltZSwgUSBhcyBnZXRMb2NhbGl6ZWREYXRlVGltZSwgUiBhcyBmb3JtYXRWYWx1ZSB9IGZyb20gJy4vZGF0YS1DS0hNV3hmZS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZUxvY2tDb250cm9sbGVyIH0gZnJvbSAnLi9sb2NrLWNvbnRyb2xsZXItQi1oaXJUMHYuanMnO1xuaW1wb3J0IHsgZCBhcyBjcmVhdGVEZWxlZ2F0ZUNvbnRyb2xsZXIsIGUgYXMgY3JlYXRlVHJpZ2dlckNvbnRyb2xsZXIsIEIgYXMgQkFDS0RST1AsIGkgYXMgaXNDYW5jZWwsIGogYXMgcHJlcGFyZU92ZXJsYXksIGsgYXMgc2V0T3ZlcmxheUlkLCBmIGFzIHByZXNlbnQsIGcgYXMgZGlzbWlzcywgaCBhcyBldmVudE1ldGhvZCwgcyBhcyBzYWZlQ2FsbCB9IGZyb20gJy4vb3ZlcmxheXMtWlhfNC10X3IuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVBbmltYXRpb24gfSBmcm9tICcuL2FuaW1hdGlvbi1CdmhBdGdjYS5qcyc7XG5pbXBvcnQgeyBhIGFzIGhhcHRpY1NlbGVjdGlvbkNoYW5nZWQsIGggYXMgaGFwdGljU2VsZWN0aW9uRW5kLCBiIGFzIGhhcHRpY1NlbGVjdGlvblN0YXJ0IH0gZnJvbSAnLi9oYXB0aWMtRHpBTVdKdWsuanMnO1xuaW1wb3J0ICcuL2luZGV4LVpqUDRDamVaLmpzJztcbmltcG9ydCAnLi9oYXJkd2FyZS1iYWNrLWJ1dHRvbi1EaGJkLTIzSC5qcyc7XG5pbXBvcnQgJy4vZnJhbWV3b3JrLWRlbGVnYXRlLUJMRUJnSDA2LmpzJztcbmltcG9ydCAnLi9nZXN0dXJlLWNvbnRyb2xsZXItQlRFT3MxYXQuanMnO1xuaW1wb3J0ICcuL2NhcGFjaXRvci1DRkVSSWVhVS5qcyc7XG5jb25zdCBpc1llYXJEaXNhYmxlZCA9IChyZWZZZWFyLCBtaW5QYXJ0cywgbWF4UGFydHMpID0+IHtcbiAgaWYgKG1pblBhcnRzICYmIG1pblBhcnRzLnllYXIgPiByZWZZZWFyKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKG1heFBhcnRzICYmIG1heFBhcnRzLnllYXIgPCByZWZZZWFyKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGEgZ2l2ZW4gZGF5IHNob3VsZFxuICogbm90IGJlIGludGVyYWN0aXZlIGFjY29yZGluZyB0byBpdHMgdmFsdWUsXG4gKiBvciB0aGUgbWF4L21pbiBkYXRlcy5cbiAqL1xuY29uc3QgaXNEYXlEaXNhYmxlZCA9IChyZWZQYXJ0cywgbWluUGFydHMsIG1heFBhcnRzLCBkYXlWYWx1ZXMpID0+IHtcbiAgLyoqXG4gICAqIElmIHRoaXMgaXMgYSBmaWxsZXIgZGF0ZSAoaS5lLiBwYWRkaW5nKVxuICAgKiB0aGVuIHRoZSBkYXRlIGlzIGRpc2FibGVkLlxuICAgKi9cbiAgaWYgKHJlZlBhcnRzLmRheSA9PT0gbnVsbCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8qKlxuICAgKiBJZiB1c2VyIHBhc3NlZCBpbiBhIGxpc3Qgb2YgYWNjZXB0YWJsZSBkYXkgdmFsdWVzXG4gICAqIGNoZWNrIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSBkYXRlIHdlIGFyZSBsb29raW5nXG4gICAqIGF0IGlzIGluIHRoaXMgYXJyYXkuXG4gICAqL1xuICBpZiAoZGF5VmFsdWVzICE9PSB1bmRlZmluZWQgJiYgIWRheVZhbHVlcy5pbmNsdWRlcyhyZWZQYXJ0cy5kYXkpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLyoqXG4gICAqIEdpdmVuIGEgbWluIGRhdGUsIHBlcmZvcm0gdGhlIGZvbGxvd2luZ1xuICAgKiBjaGVja3MuIElmIGFueSBvZiB0aGVtIGFyZSB0cnVlLCB0aGVuIHRoZVxuICAgKiBkYXkgc2hvdWxkIGJlIGRpc2FibGVkOlxuICAgKiAxLiBJcyB0aGUgY3VycmVudCB5ZWFyIDwgdGhlIG1pbiBhbGxvd2VkIHllYXI/XG4gICAqIDIuIElzIHRoZSBjdXJyZW50IHllYXIgPT09IG1pbiBhbGxvd2VkIHllYXIsXG4gICAqIGJ1dCB0aGUgY3VycmVudCBtb250aCA8IHRoZSBtaW4gYWxsb3dlZCBtb250aD9cbiAgICogMy4gSXMgdGhlIGN1cnJlbnQgeWVhciA9PT0gbWluIGFsbG93ZWQgeWVhciwgdGhlXG4gICAqIGN1cnJlbnQgbW9udGggPT09IG1pbiBhbGxvdyBtb250aCwgYnV0IHRoZSBjdXJyZW50XG4gICAqIGRheSA8IHRoZSBtaW4gYWxsb3dlZCBkYXk/XG4gICAqL1xuICBpZiAobWluUGFydHMgJiYgaXNCZWZvcmUocmVmUGFydHMsIG1pblBhcnRzKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8qKlxuICAgKiBHaXZlbiBhIG1heCBkYXRlLCBwZXJmb3JtIHRoZSBmb2xsb3dpbmdcbiAgICogY2hlY2tzLiBJZiBhbnkgb2YgdGhlbSBhcmUgdHJ1ZSwgdGhlbiB0aGVcbiAgICogZGF5IHNob3VsZCBiZSBkaXNhYmxlZDpcbiAgICogMS4gSXMgdGhlIGN1cnJlbnQgeWVhciA+IHRoZSBtYXggYWxsb3dlZCB5ZWFyP1xuICAgKiAyLiBJcyB0aGUgY3VycmVudCB5ZWFyID09PSBtYXggYWxsb3dlZCB5ZWFyLFxuICAgKiBidXQgdGhlIGN1cnJlbnQgbW9udGggPiB0aGUgbWF4IGFsbG93ZWQgbW9udGg/XG4gICAqIDMuIElzIHRoZSBjdXJyZW50IHllYXIgPT09IG1heCBhbGxvd2VkIHllYXIsIHRoZVxuICAgKiBjdXJyZW50IG1vbnRoID09PSBtYXggYWxsb3cgbW9udGgsIGJ1dCB0aGUgY3VycmVudFxuICAgKiBkYXkgPiB0aGUgbWF4IGFsbG93ZWQgZGF5P1xuICAgKi9cbiAgaWYgKG1heFBhcnRzICYmIGlzQWZ0ZXIocmVmUGFydHMsIG1heFBhcnRzKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8qKlxuICAgKiBJZiBub25lIG9mIHRoZXNlIGNoZWNrc1xuICAgKiBwYXNzZWQgdGhlbiB0aGUgZGF0ZSBzaG91bGRcbiAgICogYmUgaW50ZXJhY3RpdmUuXG4gICAqL1xuICByZXR1cm4gZmFsc2U7XG59O1xuLyoqXG4gKiBHaXZlbiBhIGxvY2FsZSwgYSBkYXRlLCB0aGUgc2VsZWN0ZWQgZGF0ZShzKSwgYW5kIHRvZGF5J3MgZGF0ZSxcbiAqIGdlbmVyYXRlIHRoZSBzdGF0ZSBmb3IgYSBnaXZlbiBjYWxlbmRhciBkYXkgYnV0dG9uLlxuICovXG5jb25zdCBnZXRDYWxlbmRhckRheVN0YXRlID0gKGxvY2FsZSwgcmVmUGFydHMsIGFjdGl2ZVBhcnRzLCB0b2RheVBhcnRzLCBtaW5QYXJ0cywgbWF4UGFydHMsIGRheVZhbHVlcykgPT4ge1xuICAvKipcbiAgICogYWN0aXZlUGFydHMgc2lnbmFscyB3aGF0IGRheShzKSBhcmUgY3VycmVudGx5IHNlbGVjdGVkIGluIHRoZSBkYXRldGltZS5cbiAgICogSWYgbXVsdGlwbGU9XCJ0cnVlXCIsIHRoaXMgd2lsbCBiZSBhbiBhcnJheSwgYnV0IHRoZSBsb2dpYyBpbiB0aGlzIHV0aWxcbiAgICogaXMgdGhlIHNhbWUgd2hldGhlciB3ZSBoYXZlIG9uZSBzZWxlY3RlZCBkYXkgb3IgbWFueSBiZWNhdXNlIHdlJ3JlIG9ubHlcbiAgICogY2FsY3VsYXRpbmcgdGhlIHN0YXRlIGZvciBvbmUgYnV0dG9uLiBTbywgd2UgdHJlYXQgYSBzaW5nbGUgYWN0aXZlUGFydHMgdmFsdWVcbiAgICogdGhlIHNhbWUgYXMgYW4gYXJyYXkgb2YgbGVuZ3RoIG9uZS5cbiAgICovXG4gIGNvbnN0IGFjdGl2ZVBhcnRzQXJyYXkgPSBBcnJheS5pc0FycmF5KGFjdGl2ZVBhcnRzKSA/IGFjdGl2ZVBhcnRzIDogW2FjdGl2ZVBhcnRzXTtcbiAgLyoqXG4gICAqIFRoZSBkYXkgYnV0dG9uIGlzIGFjdGl2ZSBpZiBpdCBpcyBzZWxlY3RlZCwgb3IgaW4gb3RoZXIgd29yZHMsIGlmIHJlZlBhcnRzXG4gICAqIG1hdGNoZXMgYXQgbGVhc3Qgb25lIHNlbGVjdGVkIGRhdGUuXG4gICAqL1xuICBjb25zdCBpc0FjdGl2ZSA9IGFjdGl2ZVBhcnRzQXJyYXkuZmluZChwYXJ0cyA9PiBpc1NhbWVEYXkocmVmUGFydHMsIHBhcnRzKSkgIT09IHVuZGVmaW5lZDtcbiAgY29uc3QgaXNUb2RheSA9IGlzU2FtZURheShyZWZQYXJ0cywgdG9kYXlQYXJ0cyk7XG4gIGNvbnN0IGRpc2FibGVkID0gaXNEYXlEaXNhYmxlZChyZWZQYXJ0cywgbWluUGFydHMsIG1heFBhcnRzLCBkYXlWYWx1ZXMpO1xuICAvKipcbiAgICogTm90ZSB0aGF0IHdlIGFsd2F5cyByZXR1cm4gb25lIG9iamVjdCByZWdhcmRsZXNzIG9mIHdoZXRoZXIgYWN0aXZlUGFydHNcbiAgICogd2FzIGFuIGFycmF5LCBzaW5jZSB3ZSBwYXJlIGRvd24gdG8gb25lIHZhbHVlIGZvciBpc0FjdGl2ZS5cbiAgICovXG4gIHJldHVybiB7XG4gICAgZGlzYWJsZWQsXG4gICAgaXNBY3RpdmUsXG4gICAgaXNUb2RheSxcbiAgICBhcmlhU2VsZWN0ZWQ6IGlzQWN0aXZlID8gJ3RydWUnIDogbnVsbCxcbiAgICBhcmlhTGFiZWw6IGdlbmVyYXRlRGF5QXJpYUxhYmVsKGxvY2FsZSwgaXNUb2RheSwgcmVmUGFydHMpLFxuICAgIHRleHQ6IHJlZlBhcnRzLmRheSAhPSBudWxsID8gZ2V0RGF5KGxvY2FsZSwgcmVmUGFydHMpIDogbnVsbFxuICB9O1xufTtcbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG1vbnRoIGlzIGRpc2FibGVkIGdpdmVuIHRoZVxuICogY3VycmVudCBkYXRlIHZhbHVlIGFuZCBtaW4vbWF4IGRhdGUgY29uc3RyYWludHMuXG4gKi9cbmNvbnN0IGlzTW9udGhEaXNhYmxlZCA9IChyZWZQYXJ0cywge1xuICBtaW5QYXJ0cyxcbiAgbWF4UGFydHNcbn0pID0+IHtcbiAgLy8gSWYgdGhlIHllYXIgaXMgZGlzYWJsZWQgdGhlbiB0aGUgbW9udGggaXMgZGlzYWJsZWQuXG4gIGlmIChpc1llYXJEaXNhYmxlZChyZWZQYXJ0cy55ZWFyLCBtaW5QYXJ0cywgbWF4UGFydHMpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLy8gSWYgdGhlIGRhdGUgdmFsdWUgaXMgYmVmb3JlIHRoZSBtaW4gZGF0ZSwgdGhlbiB0aGUgbW9udGggaXMgZGlzYWJsZWQuXG4gIC8vIElmIHRoZSBkYXRlIHZhbHVlIGlzIGFmdGVyIHRoZSBtYXggZGF0ZSwgdGhlbiB0aGUgbW9udGggaXMgZGlzYWJsZWQuXG4gIGlmIChtaW5QYXJ0cyAmJiBpc0JlZm9yZShyZWZQYXJ0cywgbWluUGFydHMpIHx8IG1heFBhcnRzICYmIGlzQWZ0ZXIocmVmUGFydHMsIG1heFBhcnRzKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG4vKipcbiAqIEdpdmVuIGEgd29ya2luZyBkYXRlLCBhbiBvcHRpb25hbCBtaW5pbXVtIGRhdGUgcmFuZ2UsXG4gKiBhbmQgYW4gb3B0aW9uYWwgbWF4aW11bSBkYXRlIHJhbmdlOyBkZXRlcm1pbmUgaWYgdGhlXG4gKiBwcmV2aW91cyBuYXZpZ2F0aW9uIGJ1dHRvbiBpcyBkaXNhYmxlZC5cbiAqL1xuY29uc3QgaXNQcmV2TW9udGhEaXNhYmxlZCA9IChyZWZQYXJ0cywgbWluUGFydHMsIG1heFBhcnRzKSA9PiB7XG4gIGNvbnN0IHByZXZNb250aCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZ2V0UHJldmlvdXNNb250aChyZWZQYXJ0cykpLCB7XG4gICAgZGF5OiBudWxsXG4gIH0pO1xuICByZXR1cm4gaXNNb250aERpc2FibGVkKHByZXZNb250aCwge1xuICAgIG1pblBhcnRzLFxuICAgIG1heFBhcnRzXG4gIH0pO1xufTtcbi8qKlxuICogR2l2ZW4gYSB3b3JraW5nIGRhdGUgYW5kIGEgbWF4aW11bSBkYXRlIHJhbmdlLFxuICogZGV0ZXJtaW5lIGlmIHRoZSBuZXh0IG5hdmlnYXRpb24gYnV0dG9uIGlzIGRpc2FibGVkLlxuICovXG5jb25zdCBpc05leHRNb250aERpc2FibGVkID0gKHJlZlBhcnRzLCBtYXhQYXJ0cykgPT4ge1xuICBjb25zdCBuZXh0TW9udGggPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGdldE5leHRNb250aChyZWZQYXJ0cykpLCB7XG4gICAgZGF5OiBudWxsXG4gIH0pO1xuICByZXR1cm4gaXNNb250aERpc2FibGVkKG5leHRNb250aCwge1xuICAgIG1heFBhcnRzXG4gIH0pO1xufTtcbi8qKlxuICogR2l2ZW4gdGhlIHZhbHVlIG9mIHRoZSBoaWdobGlnaHRlZERhdGVzIHByb3BlcnR5XG4gKiBhbmQgYW4gSVNPIHN0cmluZywgcmV0dXJuIHRoZSBzdHlsZXMgdG8gdXNlIGZvclxuICogdGhhdCBkYXRlLCBvciB1bmRlZmluZWQgaWYgbm9uZSBhcmUgZm91bmQuXG4gKi9cbmNvbnN0IGdldEhpZ2hsaWdodFN0eWxlcyA9IChoaWdobGlnaHRlZERhdGVzLCBkYXRlSXNvU3RyaW5nLCBlbCkgPT4ge1xuICBpZiAoQXJyYXkuaXNBcnJheShoaWdobGlnaHRlZERhdGVzKSkge1xuICAgIGNvbnN0IGRhdGVTdHJpbmdXaXRob3V0VGltZSA9IGRhdGVJc29TdHJpbmcuc3BsaXQoJ1QnKVswXTtcbiAgICBjb25zdCBtYXRjaGluZ0hpZ2hsaWdodCA9IGhpZ2hsaWdodGVkRGF0ZXMuZmluZChoZCA9PiBoZC5kYXRlID09PSBkYXRlU3RyaW5nV2l0aG91dFRpbWUpO1xuICAgIGlmIChtYXRjaGluZ0hpZ2hsaWdodCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGV4dENvbG9yOiBtYXRjaGluZ0hpZ2hsaWdodC50ZXh0Q29sb3IsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogbWF0Y2hpbmdIaWdobGlnaHQuYmFja2dyb3VuZENvbG9yLFxuICAgICAgICBib3JkZXI6IG1hdGNoaW5nSGlnaGxpZ2h0LmJvcmRlclxuICAgICAgfTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLyoqXG4gICAgICogV3JhcCBpbiBhIHRyeS1jYXRjaCB0byBwcmV2ZW50IGV4Y2VwdGlvbnMgaW4gdGhlIHVzZXIncyBmdW5jdGlvblxuICAgICAqIGZyb20gaW50ZXJydXB0aW5nIHRoZSBjYWxlbmRhcidzIHJlbmRlcmluZy5cbiAgICAgKi9cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGhpZ2hsaWdodGVkRGF0ZXMoZGF0ZUlzb1N0cmluZyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcHJpbnRJb25FcnJvcignW2lvbi1kYXRldGltZV0gLSBFeGNlcHRpb24gdGhyb3duIGZyb20gcHJvdmlkZWQgYGhpZ2hsaWdodGVkRGF0ZXNgIGNhbGxiYWNrLiBQbGVhc2UgY2hlY2sgeW91ciBmdW5jdGlvbiBhbmQgdHJ5IGFnYWluLicsIGVsLCBlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5cbi8qKlxuICogSWYgYSB0aW1lIHpvbmUgaXMgcHJvdmlkZWQgaW4gdGhlIGZvcm1hdCBvcHRpb25zLCB0aGUgcmVuZGVyZWQgdGV4dCBjb3VsZFxuICogZGlmZmVyIGZyb20gd2hhdCB3YXMgc2VsZWN0ZWQgaW4gdGhlIERhdGV0aW1lLCB3aGljaCBjb3VsZCBjYXVzZVxuICogY29uZnVzaW9uLlxuICovXG5jb25zdCB3YXJuSWZUaW1lWm9uZVByb3ZpZGVkID0gKGVsLCBmb3JtYXRPcHRpb25zKSA9PiB7XG4gIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgaWYgKCgoX2EgPSBmb3JtYXRPcHRpb25zID09PSBudWxsIHx8IGZvcm1hdE9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGZvcm1hdE9wdGlvbnMuZGF0ZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRpbWVab25lKSB8fCAoKF9iID0gZm9ybWF0T3B0aW9ucyA9PT0gbnVsbCB8fCBmb3JtYXRPcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBmb3JtYXRPcHRpb25zLmRhdGUpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi50aW1lWm9uZU5hbWUpIHx8ICgoX2MgPSBmb3JtYXRPcHRpb25zID09PSBudWxsIHx8IGZvcm1hdE9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGZvcm1hdE9wdGlvbnMudGltZSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnRpbWVab25lKSB8fCAoKF9kID0gZm9ybWF0T3B0aW9ucyA9PT0gbnVsbCB8fCBmb3JtYXRPcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBmb3JtYXRPcHRpb25zLnRpbWUpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC50aW1lWm9uZU5hbWUpKSB7XG4gICAgcHJpbnRJb25XYXJuaW5nKCdbaW9uLWRhdGV0aW1lXSAtIFwidGltZVpvbmVcIiBhbmQgXCJ0aW1lWm9uZU5hbWVcIiBhcmUgbm90IHN1cHBvcnRlZCBpbiBcImZvcm1hdE9wdGlvbnNcIi4nLCBlbCk7XG4gIH1cbn07XG5jb25zdCBjaGVja0ZvclByZXNlbnRhdGlvbkZvcm1hdE1pc21hdGNoID0gKGVsLCBwcmVzZW50YXRpb24sIGZvcm1hdE9wdGlvbnMpID0+IHtcbiAgLy8gZm9ybWF0T3B0aW9ucyBpcyBub3QgcmVxdWlyZWRcbiAgaWYgKCFmb3JtYXRPcHRpb25zKSByZXR1cm47XG4gIC8vIElmIGZvcm1hdE9wdGlvbnMgaXMgcHJvdmlkZWQsIHRoZSBkYXRlIGFuZC9vciB0aW1lIG9iamVjdHMgYXJlIHJlcXVpcmVkLCBkZXBlbmRpbmcgb24gdGhlIHByZXNlbnRhdGlvblxuICBzd2l0Y2ggKHByZXNlbnRhdGlvbikge1xuICAgIGNhc2UgJ2RhdGUnOlxuICAgIGNhc2UgJ21vbnRoLXllYXInOlxuICAgIGNhc2UgJ21vbnRoJzpcbiAgICBjYXNlICd5ZWFyJzpcbiAgICAgIGlmIChmb3JtYXRPcHRpb25zLmRhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcmludElvbldhcm5pbmcoYFtpb24tZGF0ZXRpbWVdIC0gVGhlICcke3ByZXNlbnRhdGlvbn0nIHByZXNlbnRhdGlvbiByZXF1aXJlcyBhIGRhdGUgb2JqZWN0IGluIGZvcm1hdE9wdGlvbnMuYCwgZWwpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAndGltZSc6XG4gICAgICBpZiAoZm9ybWF0T3B0aW9ucy50aW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJpbnRJb25XYXJuaW5nKGBbaW9uLWRhdGV0aW1lXSAtIFRoZSAndGltZScgcHJlc2VudGF0aW9uIHJlcXVpcmVzIGEgdGltZSBvYmplY3QgaW4gZm9ybWF0T3B0aW9ucy5gLCBlbCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlICdkYXRlLXRpbWUnOlxuICAgIGNhc2UgJ3RpbWUtZGF0ZSc6XG4gICAgICBpZiAoZm9ybWF0T3B0aW9ucy5kYXRlID09PSB1bmRlZmluZWQgJiYgZm9ybWF0T3B0aW9ucy50aW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJpbnRJb25XYXJuaW5nKGBbaW9uLWRhdGV0aW1lXSAtIFRoZSAnJHtwcmVzZW50YXRpb259JyBwcmVzZW50YXRpb24gcmVxdWlyZXMgZWl0aGVyIGEgZGF0ZSBvciB0aW1lIG9iamVjdCAob3IgYm90aCkgaW4gZm9ybWF0T3B0aW9ucy5gLCBlbCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfVxufTtcbmNvbnN0IGRhdGV0aW1lSW9zQ3NzID0gXCI6aG9zdHtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1mbG93OmNvbHVtbjtmbGV4LWZsb3c6Y29sdW1uO2JhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZCk7b3ZlcmZsb3c6aGlkZGVufTpob3N0KC5kYXRldGltZS1zaXplLWZpeGVkKXt3aWR0aDphdXRvO2hlaWdodDphdXRvfTpob3N0KC5kYXRldGltZS1zaXplLWZpeGVkOm5vdCguZGF0ZXRpbWUtcHJlZmVyLXdoZWVsKSl7bWF4LXdpZHRoOjM1MHB4fTpob3N0KC5kYXRldGltZS1zaXplLWZpeGVkLmRhdGV0aW1lLXByZWZlci13aGVlbCl7bWluLXdpZHRoOjM1MHB4O21heC13aWR0aDotd2Via2l0LW1heC1jb250ZW50O21heC13aWR0aDotbW96LW1heC1jb250ZW50O21heC13aWR0aDptYXgtY29udGVudH06aG9zdCguZGF0ZXRpbWUtc2l6ZS1jb3Zlcil7d2lkdGg6MTAwJX06aG9zdCAuY2FsZW5kYXItYm9keSw6aG9zdCAuZGF0ZXRpbWUteWVhcntvcGFjaXR5OjB9Omhvc3QoOm5vdCguZGF0ZXRpbWUtcmVhZHkpKSAuZGF0ZXRpbWUteWVhcntwb3NpdGlvbjphYnNvbHV0ZTtwb2ludGVyLWV2ZW50czpub25lfTpob3N0KC5kYXRldGltZS1yZWFkeSkgLmNhbGVuZGFyLWJvZHl7b3BhY2l0eToxfTpob3N0KC5kYXRldGltZS1yZWFkeSkgLmRhdGV0aW1lLXllYXJ7ZGlzcGxheTpub25lO29wYWNpdHk6MX06aG9zdCAud2hlZWwtb3JkZXIteWVhci1maXJzdCAuZGF5LWNvbHVtbnstbXMtZmxleC1vcmRlcjozO29yZGVyOjM7dGV4dC1hbGlnbjplbmR9Omhvc3QgLndoZWVsLW9yZGVyLXllYXItZmlyc3QgLm1vbnRoLWNvbHVtbnstbXMtZmxleC1vcmRlcjoyO29yZGVyOjI7dGV4dC1hbGlnbjplbmR9Omhvc3QgLndoZWVsLW9yZGVyLXllYXItZmlyc3QgLnllYXItY29sdW1uey1tcy1mbGV4LW9yZGVyOjE7b3JkZXI6MTt0ZXh0LWFsaWduOnN0YXJ0fTpob3N0IC5kYXRldGltZS1jYWxlbmRhciw6aG9zdCAuZGF0ZXRpbWUteWVhcntkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleDoxIDEgYXV0bztmbGV4OjEgMSBhdXRvOy1tcy1mbGV4LWZsb3c6Y29sdW1uO2ZsZXgtZmxvdzpjb2x1bW59Omhvc3QoLnNob3ctbW9udGgtYW5kLXllYXIpIC5kYXRldGltZS15ZWFye2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4fTpob3N0KC5zaG93LW1vbnRoLWFuZC15ZWFyKSAuY2FsZW5kYXItbmV4dC1wcmV2LDpob3N0KC5zaG93LW1vbnRoLWFuZC15ZWFyKSAuY2FsZW5kYXItZGF5cy1vZi13ZWVrLDpob3N0KC5zaG93LW1vbnRoLWFuZC15ZWFyKSAuY2FsZW5kYXItYm9keSw6aG9zdCguc2hvdy1tb250aC1hbmQteWVhcikgLmRhdGV0aW1lLXRpbWV7ZGlzcGxheTpub25lfTpob3N0KC5tb250aC15ZWFyLXBpY2tlci1vcGVuKSAuZGF0ZXRpbWUtZm9vdGVye2Rpc3BsYXk6bm9uZX06aG9zdCguZGF0ZXRpbWUtZGlzYWJsZWQpe3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3QoLmRhdGV0aW1lLWRpc2FibGVkKSAuY2FsZW5kYXItZGF5cy1vZi13ZWVrLDpob3N0KC5kYXRldGltZS1kaXNhYmxlZCkgLmRhdGV0aW1lLXRpbWV7b3BhY2l0eTowLjR9Omhvc3QoLmRhdGV0aW1lLXJlYWRvbmx5KXtwb2ludGVyLWV2ZW50czpub25lO306aG9zdCguZGF0ZXRpbWUtcmVhZG9ubHkpIC5jYWxlbmRhci1hY3Rpb24tYnV0dG9ucyw6aG9zdCguZGF0ZXRpbWUtcmVhZG9ubHkpIC5jYWxlbmRhci1ib2R5LDpob3N0KC5kYXRldGltZS1yZWFkb25seSkgLmRhdGV0aW1lLXllYXJ7cG9pbnRlci1ldmVudHM6aW5pdGlhbH06aG9zdCguZGF0ZXRpbWUtcmVhZG9ubHkpIC5jYWxlbmRhci1kYXlbZGlzYWJsZWRdOm5vdCguY2FsZW5kYXItZGF5LWNvbnN0cmFpbmVkKSw6aG9zdCguZGF0ZXRpbWUtcmVhZG9ubHkpIC5kYXRldGltZS1hY3Rpb24tYnV0dG9ucyBpb24tYnV0dG9uW2Rpc2FibGVkXXtvcGFjaXR5OjF9Omhvc3QgLmRhdGV0aW1lLWhlYWRlciAuZGF0ZXRpbWUtdGl0bGV7dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVufTpob3N0IC5kYXRldGltZS1hY3Rpb24tYnV0dG9ucy5oYXMtY2xlYXItYnV0dG9ue3dpZHRoOjEwMCV9Omhvc3QgLmRhdGV0aW1lLWFjdGlvbi1idXR0b25zIGlvbi1idXR0b25ze2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LXBhY2s6anVzdGlmeTtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbn0uZGF0ZXRpbWUtYWN0aW9uLWJ1dHRvbnMgLmRhdGV0aW1lLWFjdGlvbi1idXR0b25zLWNvbnRhaW5lcntkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleH06aG9zdCAuY2FsZW5kYXItYWN0aW9uLWJ1dHRvbnN7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtcGFjazpqdXN0aWZ5O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufTpob3N0IC5jYWxlbmRhci1hY3Rpb24tYnV0dG9ucyBpb24tYnV0dG9uey0tYmFja2dyb3VuZDp0cmFuc3BhcmVudH06aG9zdCAuY2FsZW5kYXItZGF5cy1vZi13ZWVre2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDcsIDFmcik7dGV4dC1hbGlnbjpjZW50ZXJ9LmNhbGVuZGFyLWRheXMtb2Ytd2VlayAuZGF5LW9mLXdlZWt7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6YXV0bzttYXJnaW4taW5saW5lLXN0YXJ0OmF1dG87LXdlYmtpdC1tYXJnaW4tZW5kOmF1dG87bWFyZ2luLWlubGluZS1lbmQ6YXV0bzttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfTpob3N0IC5jYWxlbmRhci1ib2R5e2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LXBvc2l0aXZlOjE7ZmxleC1ncm93OjE7LXdlYmtpdC1zY3JvbGwtc25hcC10eXBlOnggbWFuZGF0b3J5Oy1tcy1zY3JvbGwtc25hcC10eXBlOnggbWFuZGF0b3J5O3Njcm9sbC1zbmFwLXR5cGU6eCBtYW5kYXRvcnk7b3ZlcmZsb3cteDpzY3JvbGw7b3ZlcmZsb3cteTpoaWRkZW47c2Nyb2xsYmFyLXdpZHRoOm5vbmU7b3V0bGluZTpub25lfTpob3N0IC5jYWxlbmRhci1ib2R5IC5jYWxlbmRhci1tb250aHtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1mbG93OmNvbHVtbjtmbGV4LWZsb3c6Y29sdW1uO3Njcm9sbC1zbmFwLWFsaWduOnN0YXJ0O3Njcm9sbC1zbmFwLXN0b3A6YWx3YXlzOy1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MDt3aWR0aDoxMDAlfTpob3N0IC5jYWxlbmRhci1ib2R5IC5jYWxlbmRhci1tb250aC1kaXNhYmxlZHtzY3JvbGwtc25hcC1hbGlnbjpub25lfTpob3N0IC5jYWxlbmRhci1ib2R5Ojotd2Via2l0LXNjcm9sbGJhcntkaXNwbGF5Om5vbmV9Omhvc3QgLmNhbGVuZGFyLWJvZHkgLmNhbGVuZGFyLW1vbnRoLWdyaWR7ZGlzcGxheTpncmlkO2dyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoNywgMWZyKX06aG9zdCAuY2FsZW5kYXItZGF5LXdyYXBwZXJ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO21pbi13aWR0aDowO21pbi1oZWlnaHQ6MDtvdmVyZmxvdzp2aXNpYmxlfS5jYWxlbmRhci1kYXl7Ym9yZGVyLXJhZGl1czo1MCU7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjBweDtwYWRkaW5nLWlubGluZS1zdGFydDowcHg7LXdlYmtpdC1wYWRkaW5nLWVuZDowcHg7cGFkZGluZy1pbmxpbmUtZW5kOjBweDtwYWRkaW5nLXRvcDowcHg7cGFkZGluZy1ib3R0b206MHB4Oy13ZWJraXQtbWFyZ2luLXN0YXJ0OjBweDttYXJnaW4taW5saW5lLXN0YXJ0OjBweDstd2Via2l0LW1hcmdpbi1lbmQ6MHB4O21hcmdpbi1pbmxpbmUtZW5kOjBweDttYXJnaW4tdG9wOjBweDttYXJnaW4tYm90dG9tOjBweDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjpyZWxhdGl2ZTstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7Ym9yZGVyOm5vbmU7b3V0bGluZTpub25lO2JhY2tncm91bmQ6bm9uZTtjb2xvcjpjdXJyZW50Q29sb3I7Zm9udC1mYW1pbHk6dmFyKC0taW9uLWZvbnQtZmFtaWx5LCBpbmhlcml0KTtjdXJzb3I6cG9pbnRlcjstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmU7ei1pbmRleDowfTpob3N0IC5jYWxlbmRhci1kYXlbZGlzYWJsZWRde3BvaW50ZXItZXZlbnRzOm5vbmU7b3BhY2l0eTowLjR9LmNhbGVuZGFyLWRheTpub3QoLmNhbGVuZGFyLWRheS1hZGphY2VudC1kYXkpOmZvY3Vze2JhY2tncm91bmQ6cmdiYSh2YXIoLS1pb24tY29sb3ItYmFzZS1yZ2IpLCAwLjIpOy13ZWJraXQtYm94LXNoYWRvdzowcHggMHB4IDBweCA0cHggcmdiYSh2YXIoLS1pb24tY29sb3ItYmFzZS1yZ2IpLCAwLjIpO2JveC1zaGFkb3c6MHB4IDBweCAwcHggNHB4IHJnYmEodmFyKC0taW9uLWNvbG9yLWJhc2UtcmdiKSwgMC4yKX06aG9zdCAuZGF0ZXRpbWUtdGltZXtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1wYWNrOmp1c3RpZnk7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59Omhvc3QoLmRhdGV0aW1lLXByZXNlbnRhdGlvbi10aW1lKSAuZGF0ZXRpbWUtdGltZXtwYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjA7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowfTpob3N0IGlvbi1wb3BvdmVyey0taGVpZ2h0OjIwMHB4fTpob3N0IC50aW1lLWhlYWRlcntkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyfTpob3N0IC50aW1lLWJvZHl7Ym9yZGVyLXJhZGl1czo4cHg7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjEycHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MTJweDstd2Via2l0LXBhZGRpbmctZW5kOjEycHg7cGFkZGluZy1pbmxpbmUtZW5kOjEycHg7cGFkZGluZy10b3A6NnB4O3BhZGRpbmctYm90dG9tOjZweDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtib3JkZXI6bm9uZTtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1zdGVwLTMwMCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3Itc3RlcC0zMDAsICNlZGVlZjApKTtjb2xvcjp2YXIoLS1pb24tdGV4dC1jb2xvciwgIzAwMCk7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6aW5oZXJpdDtjdXJzb3I6cG9pbnRlcjstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmV9Omhvc3QgLnRpbWUtYm9keS1hY3RpdmV7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWJhc2UpfTpob3N0KC5pbi1pdGVtKXtwb3NpdGlvbjpzdGF0aWN9Omhvc3QoLnNob3ctbW9udGgtYW5kLXllYXIpIC5jYWxlbmRhci1hY3Rpb24tYnV0dG9ucyAuY2FsZW5kYXItbW9udGgteWVhci10b2dnbGV7Y29sb3I6dmFyKC0taW9uLWNvbG9yLWJhc2UpfS5jYWxlbmRhci1tb250aC15ZWFye21pbi13aWR0aDowfS5jYWxlbmRhci1tb250aC15ZWFyLXRvZ2dsZXtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZTppbmhlcml0O2ZvbnQtc3R5bGU6aW5oZXJpdDtmb250LXdlaWdodDppbmhlcml0O2xldHRlci1zcGFjaW5nOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dGV4dC1pbmRlbnQ6aW5oZXJpdDt0ZXh0LW92ZXJmbG93OmluaGVyaXQ7dGV4dC10cmFuc2Zvcm06aW5oZXJpdDt0ZXh0LWFsaWduOmluaGVyaXQ7d2hpdGUtc3BhY2U6aW5oZXJpdDtjb2xvcjppbmhlcml0O3Bvc2l0aW9uOnJlbGF0aXZlO2JvcmRlcjowO291dGxpbmU6bm9uZTtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2N1cnNvcjpwb2ludGVyO3otaW5kZXg6MX0uY2FsZW5kYXItbW9udGgteWVhci10b2dnbGU6OmFmdGVye2xlZnQ6MDtyaWdodDowO3RvcDowO2JvdHRvbTowO3Bvc2l0aW9uOmFic29sdXRlO2NvbnRlbnQ6XFxcIlxcXCI7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNpdGlvbjpvcGFjaXR5IDE1bXMgbGluZWFyLCBiYWNrZ3JvdW5kLWNvbG9yIDE1bXMgbGluZWFyO3RyYW5zaXRpb246b3BhY2l0eSAxNW1zIGxpbmVhciwgYmFja2dyb3VuZC1jb2xvciAxNW1zIGxpbmVhcjt6LWluZGV4Oi0xfS5jYWxlbmRhci1tb250aC15ZWFyLXRvZ2dsZS5pb24tZm9jdXNlZDo6YWZ0ZXJ7YmFja2dyb3VuZDpjdXJyZW50Q29sb3J9LmNhbGVuZGFyLW1vbnRoLXllYXItdG9nZ2xlOmRpc2FibGVke29wYWNpdHk6MC4zO3BvaW50ZXItZXZlbnRzOm5vbmV9LmNhbGVuZGFyLW1vbnRoLXllYXItdG9nZ2xlIGlvbi1pY29uey13ZWJraXQtcGFkZGluZy1zdGFydDo0cHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6NHB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MDtwYWRkaW5nLWlubGluZS1lbmQ6MDtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjA7LW1zLWZsZXgtbmVnYXRpdmU6MDtmbGV4LXNocmluazowfS5jYWxlbmRhci1tb250aC15ZWFyLXRvZ2dsZSAjdG9nZ2xlLXdyYXBwZXJ7ZGlzcGxheTotbXMtaW5saW5lLWZsZXhib3g7ZGlzcGxheTppbmxpbmUtZmxleDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyfWlvbi1waWNrZXJ7LS1oaWdobGlnaHQtYmFja2dyb3VuZDp2YXIoLS13aGVlbC1oaWdobGlnaHQtYmFja2dyb3VuZCk7LS1oaWdobGlnaHQtYm9yZGVyLXJhZGl1czp2YXIoLS13aGVlbC1oaWdobGlnaHQtYm9yZGVyLXJhZGl1cyk7LS1mYWRlLWJhY2tncm91bmQtcmdiOnZhcigtLXdoZWVsLWZhZGUtYmFja2dyb3VuZC1yZ2IpfTpob3N0ey0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItbGlnaHQsICNmNGY1ZjgpOy0tYmFja2dyb3VuZC1yZ2I6dmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiwgMjQ0LCAyNDUsIDI0OCk7LS10aXRsZS1jb2xvcjp2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsIHZhcigtLWlvbi10ZXh0LWNvbG9yLXN0ZXAtNDAwLCAjNjY2NjY2KSl9Omhvc3QoLmRhdGV0aW1lLXByZXNlbnRhdGlvbi1kYXRlLXRpbWU6bm90KC5kYXRldGltZS1wcmVmZXItd2hlZWwpKSw6aG9zdCguZGF0ZXRpbWUtcHJlc2VudGF0aW9uLXRpbWUtZGF0ZTpub3QoLmRhdGV0aW1lLXByZWZlci13aGVlbCkpLDpob3N0KC5kYXRldGltZS1wcmVzZW50YXRpb24tZGF0ZTpub3QoLmRhdGV0aW1lLXByZWZlci13aGVlbCkpe21pbi1oZWlnaHQ6MzUwcHh9Omhvc3QgLmRhdGV0aW1lLWhlYWRlcnstd2Via2l0LXBhZGRpbmctc3RhcnQ6MTZweDtwYWRkaW5nLWlubGluZS1zdGFydDoxNnB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MTZweDtwYWRkaW5nLWlubGluZS1lbmQ6MTZweDtwYWRkaW5nLXRvcDoxNnB4O3BhZGRpbmctYm90dG9tOjE2cHg7Ym9yZGVyLWJvdHRvbTowLjU1cHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjAwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTIwMCwgI2NjY2NjYykpO2ZvbnQtc2l6ZTptaW4oMC44NzVyZW0sIDIyLjRweCl9Omhvc3QgLmRhdGV0aW1lLWhlYWRlciAuZGF0ZXRpbWUtdGl0bGV7Y29sb3I6dmFyKC0tdGl0bGUtY29sb3IpfTpob3N0IC5kYXRldGltZS1oZWFkZXIgLmRhdGV0aW1lLXNlbGVjdGVkLWRhdGV7bWFyZ2luLXRvcDoxMHB4fS5jYWxlbmRhci1tb250aC15ZWFyLXRvZ2dsZXstd2Via2l0LXBhZGRpbmctc3RhcnQ6MTZweDtwYWRkaW5nLWlubGluZS1zdGFydDoxNnB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MTZweDtwYWRkaW5nLWlubGluZS1lbmQ6MTZweDtwYWRkaW5nLXRvcDowcHg7cGFkZGluZy1ib3R0b206MHB4O21pbi1oZWlnaHQ6NDRweDtmb250LXNpemU6bWluKDFyZW0sIDI1LjZweCk7Zm9udC13ZWlnaHQ6NjAwfS5jYWxlbmRhci1tb250aC15ZWFyLXRvZ2dsZS5pb24tZm9jdXNlZDo6YWZ0ZXJ7b3BhY2l0eTowLjE1fS5jYWxlbmRhci1tb250aC15ZWFyLXRvZ2dsZSAjdG9nZ2xlLXdyYXBwZXJ7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6MDttYXJnaW4taW5saW5lLXN0YXJ0OjA7LXdlYmtpdC1tYXJnaW4tZW5kOjhweDttYXJnaW4taW5saW5lLWVuZDo4cHg7bWFyZ2luLXRvcDoxMHB4O21hcmdpbi1ib3R0b206MTBweH06aG9zdCAuY2FsZW5kYXItYWN0aW9uLWJ1dHRvbnMgLmNhbGVuZGFyLW1vbnRoLXllYXItdG9nZ2xlIGlvbi1pY29uLDpob3N0IC5jYWxlbmRhci1hY3Rpb24tYnV0dG9ucyBpb24tYnV0dG9ucyBpb24tYnV0dG9ue2NvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKX06aG9zdCAuY2FsZW5kYXItYWN0aW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbnN7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjhweDtwYWRkaW5nLWJvdHRvbTowfTpob3N0IC5jYWxlbmRhci1hY3Rpb24tYnV0dG9ucyBpb24tYnV0dG9ucyBpb24tYnV0dG9ue21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MH06aG9zdCAuY2FsZW5kYXItZGF5cy1vZi13ZWVrey13ZWJraXQtcGFkZGluZy1zdGFydDo4cHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6OHB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6OHB4O3BhZGRpbmctaW5saW5lLWVuZDo4cHg7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowO2NvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTMwMCwgdmFyKC0taW9uLXRleHQtY29sb3Itc3RlcC03MDAsICNiM2IzYjMpKTtmb250LXNpemU6bWluKDAuNzVyZW0sIDE5LjJweCk7Zm9udC13ZWlnaHQ6NjAwO2xpbmUtaGVpZ2h0OjI0cHg7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlfUBzdXBwb3J0cyAoYm9yZGVyLXJhZGl1czogbW9kKDFweCwgMXB4KSl7LmNhbGVuZGFyLWRheXMtb2Ytd2VlayAuZGF5LW9mLXdlZWt7d2lkdGg6Y2xhbXAoMjBweCwgY2FsYyhtb2QobWluKDFyZW0sIDI0cHgpLCAyNHB4KSAqIDEwKSwgMTAwJSk7aGVpZ2h0OjI0cHg7b3ZlcmZsb3c6aGlkZGVufS5jYWxlbmRhci1kYXl7Ym9yZGVyLXJhZGl1czptYXgoOHB4LCBtb2QobWluKDFyZW0sIDI0cHgpLCAyNHB4KSAqIDEwKX19QHN1cHBvcnRzICgoYm9yZGVyLXJhZGl1czogbW9kKDFweCwgMXB4KSkgYW5kIChiYWNrZ3JvdW5kOiAtd2Via2l0LW5hbWVkLWltYWdlKGFwcGxlLXBheS1sb2dvLWJsYWNrKSkgYW5kIChub3QgKGNvbnRhaW4taW50cmluc2ljLXNpemU6IG5vbmUpKSkgb3IgKG5vdCAoYm9yZGVyLXJhZGl1czogbW9kKDFweCwgMXB4KSkpey5jYWxlbmRhci1kYXlzLW9mLXdlZWsgLmRheS1vZi13ZWVre3dpZHRoOmF1dG87aGVpZ2h0OmF1dG87b3ZlcmZsb3c6aW5pdGlhbH0uY2FsZW5kYXItZGF5e2JvcmRlci1yYWRpdXM6MzJweH19Omhvc3QgLmNhbGVuZGFyLWJvZHkgLmNhbGVuZGFyLW1vbnRoIC5jYWxlbmRhci1tb250aC1ncmlkey13ZWJraXQtcGFkZGluZy1zdGFydDo4cHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6OHB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6OHB4O3BhZGRpbmctaW5saW5lLWVuZDo4cHg7cGFkZGluZy10b3A6OHB4O3BhZGRpbmctYm90dG9tOjhweDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2hlaWdodDpjYWxjKDEwMCUgLSAxNnB4KX06aG9zdCAuY2FsZW5kYXItZGF5LXdyYXBwZXJ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjRweDtwYWRkaW5nLWlubGluZS1zdGFydDo0cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDo0cHg7cGFkZGluZy1pbmxpbmUtZW5kOjRweDtwYWRkaW5nLXRvcDo0cHg7cGFkZGluZy1ib3R0b206NHB4O2hlaWdodDowO21pbi1oZWlnaHQ6MXJlbX06aG9zdCAuY2FsZW5kYXItZGF5e3dpZHRoOjQwcHg7bWluLXdpZHRoOjQwcHg7aGVpZ2h0OjQwcHg7Zm9udC1zaXplOm1pbigxLjI1cmVtLCAzMnB4KX0uY2FsZW5kYXItZGF5LmNhbGVuZGFyLWRheS1hY3RpdmV7YmFja2dyb3VuZDpyZ2JhKHZhcigtLWlvbi1jb2xvci1iYXNlLXJnYiksIDAuMik7Zm9udC1zaXplOm1pbigxLjM3NXJlbSwgMzUuMnB4KX06aG9zdCAuY2FsZW5kYXItZGF5LmNhbGVuZGFyLWRheS10b2RheXtjb2xvcjp2YXIoLS1pb24tY29sb3ItYmFzZSl9Omhvc3QgLmNhbGVuZGFyLWRheS5jYWxlbmRhci1kYXktYWN0aXZlLDpob3N0IC5jYWxlbmRhci1kYXkuY2FsZW5kYXItZGF5LWFkamFjZW50LWRheS5jYWxlbmRhci1kYXktYWN0aXZle2NvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKTtmb250LXdlaWdodDo2MDB9Omhvc3QgLmNhbGVuZGFyLWRheS5jYWxlbmRhci1kYXktdG9kYXkuY2FsZW5kYXItZGF5LWFjdGl2ZXtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1iYXNlKTtjb2xvcjp2YXIoLS1pb24tY29sb3ItY29udHJhc3QpfTpob3N0IC5jYWxlbmRhci1kYXkuY2FsZW5kYXItZGF5LWFkamFjZW50LWRheXtjb2xvcjp2YXIoLS1pb24tY29sb3Itc3RlcC0zMDAsIHZhcigtLWlvbi10ZXh0LWNvbG9yLXN0ZXAtNzAwLCAjYjNiM2IzKSl9Omhvc3QgLmRhdGV0aW1lLXRpbWV7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjE2cHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MTZweDstd2Via2l0LXBhZGRpbmctZW5kOjE2cHg7cGFkZGluZy1pbmxpbmUtZW5kOjE2cHg7cGFkZGluZy10b3A6OHB4O3BhZGRpbmctYm90dG9tOjE2cHg7Zm9udC1zaXplOm1pbigxcmVtLCAyNS42cHgpfTpob3N0IC5kYXRldGltZS10aW1lIC50aW1lLWhlYWRlcntmb250LXdlaWdodDo2MDB9Omhvc3QgLmRhdGV0aW1lLWJ1dHRvbnN7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjhweDtwYWRkaW5nLWlubGluZS1zdGFydDo4cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDo4cHg7cGFkZGluZy1pbmxpbmUtZW5kOjhweDtwYWRkaW5nLXRvcDo4cHg7cGFkZGluZy1ib3R0b206OHB4O2JvcmRlci10b3A6MC41NXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTIwMCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3Itc3RlcC0yMDAsICNjY2NjY2MpKX06aG9zdCAuZGF0ZXRpbWUtYnV0dG9ucyA6OnNsb3R0ZWQoaW9uLWJ1dHRvbnMpLDpob3N0IC5kYXRldGltZS1idXR0b25zIGlvbi1idXR0b25ze2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpqdXN0aWZ5O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufTpob3N0IC5kYXRldGltZS1hY3Rpb24tYnV0dG9uc3t3aWR0aDoxMDAlfVwiO1xuY29uc3QgZGF0ZXRpbWVNZENzcyA9IFwiOmhvc3R7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZmxvdzpjb2x1bW47ZmxleC1mbG93OmNvbHVtbjtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO292ZXJmbG93OmhpZGRlbn06aG9zdCguZGF0ZXRpbWUtc2l6ZS1maXhlZCl7d2lkdGg6YXV0bztoZWlnaHQ6YXV0b306aG9zdCguZGF0ZXRpbWUtc2l6ZS1maXhlZDpub3QoLmRhdGV0aW1lLXByZWZlci13aGVlbCkpe21heC13aWR0aDozNTBweH06aG9zdCguZGF0ZXRpbWUtc2l6ZS1maXhlZC5kYXRldGltZS1wcmVmZXItd2hlZWwpe21pbi13aWR0aDozNTBweDttYXgtd2lkdGg6LXdlYmtpdC1tYXgtY29udGVudDttYXgtd2lkdGg6LW1vei1tYXgtY29udGVudDttYXgtd2lkdGg6bWF4LWNvbnRlbnR9Omhvc3QoLmRhdGV0aW1lLXNpemUtY292ZXIpe3dpZHRoOjEwMCV9Omhvc3QgLmNhbGVuZGFyLWJvZHksOmhvc3QgLmRhdGV0aW1lLXllYXJ7b3BhY2l0eTowfTpob3N0KDpub3QoLmRhdGV0aW1lLXJlYWR5KSkgLmRhdGV0aW1lLXllYXJ7cG9zaXRpb246YWJzb2x1dGU7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdCguZGF0ZXRpbWUtcmVhZHkpIC5jYWxlbmRhci1ib2R5e29wYWNpdHk6MX06aG9zdCguZGF0ZXRpbWUtcmVhZHkpIC5kYXRldGltZS15ZWFye2Rpc3BsYXk6bm9uZTtvcGFjaXR5OjF9Omhvc3QgLndoZWVsLW9yZGVyLXllYXItZmlyc3QgLmRheS1jb2x1bW57LW1zLWZsZXgtb3JkZXI6MztvcmRlcjozO3RleHQtYWxpZ246ZW5kfTpob3N0IC53aGVlbC1vcmRlci15ZWFyLWZpcnN0IC5tb250aC1jb2x1bW57LW1zLWZsZXgtb3JkZXI6MjtvcmRlcjoyO3RleHQtYWxpZ246ZW5kfTpob3N0IC53aGVlbC1vcmRlci15ZWFyLWZpcnN0IC55ZWFyLWNvbHVtbnstbXMtZmxleC1vcmRlcjoxO29yZGVyOjE7dGV4dC1hbGlnbjpzdGFydH06aG9zdCAuZGF0ZXRpbWUtY2FsZW5kYXIsOmhvc3QgLmRhdGV0aW1lLXllYXJ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXg6MSAxIGF1dG87ZmxleDoxIDEgYXV0bzstbXMtZmxleC1mbG93OmNvbHVtbjtmbGV4LWZsb3c6Y29sdW1ufTpob3N0KC5zaG93LW1vbnRoLWFuZC15ZWFyKSAuZGF0ZXRpbWUteWVhcntkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleH06aG9zdCguc2hvdy1tb250aC1hbmQteWVhcikgLmNhbGVuZGFyLW5leHQtcHJldiw6aG9zdCguc2hvdy1tb250aC1hbmQteWVhcikgLmNhbGVuZGFyLWRheXMtb2Ytd2Vlayw6aG9zdCguc2hvdy1tb250aC1hbmQteWVhcikgLmNhbGVuZGFyLWJvZHksOmhvc3QoLnNob3ctbW9udGgtYW5kLXllYXIpIC5kYXRldGltZS10aW1le2Rpc3BsYXk6bm9uZX06aG9zdCgubW9udGgteWVhci1waWNrZXItb3BlbikgLmRhdGV0aW1lLWZvb3RlcntkaXNwbGF5Om5vbmV9Omhvc3QoLmRhdGV0aW1lLWRpc2FibGVkKXtwb2ludGVyLWV2ZW50czpub25lfTpob3N0KC5kYXRldGltZS1kaXNhYmxlZCkgLmNhbGVuZGFyLWRheXMtb2Ytd2Vlayw6aG9zdCguZGF0ZXRpbWUtZGlzYWJsZWQpIC5kYXRldGltZS10aW1le29wYWNpdHk6MC40fTpob3N0KC5kYXRldGltZS1yZWFkb25seSl7cG9pbnRlci1ldmVudHM6bm9uZTt9Omhvc3QoLmRhdGV0aW1lLXJlYWRvbmx5KSAuY2FsZW5kYXItYWN0aW9uLWJ1dHRvbnMsOmhvc3QoLmRhdGV0aW1lLXJlYWRvbmx5KSAuY2FsZW5kYXItYm9keSw6aG9zdCguZGF0ZXRpbWUtcmVhZG9ubHkpIC5kYXRldGltZS15ZWFye3BvaW50ZXItZXZlbnRzOmluaXRpYWx9Omhvc3QoLmRhdGV0aW1lLXJlYWRvbmx5KSAuY2FsZW5kYXItZGF5W2Rpc2FibGVkXTpub3QoLmNhbGVuZGFyLWRheS1jb25zdHJhaW5lZCksOmhvc3QoLmRhdGV0aW1lLXJlYWRvbmx5KSAuZGF0ZXRpbWUtYWN0aW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbltkaXNhYmxlZF17b3BhY2l0eToxfTpob3N0IC5kYXRldGltZS1oZWFkZXIgLmRhdGV0aW1lLXRpdGxle3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbn06aG9zdCAuZGF0ZXRpbWUtYWN0aW9uLWJ1dHRvbnMuaGFzLWNsZWFyLWJ1dHRvbnt3aWR0aDoxMDAlfTpob3N0IC5kYXRldGltZS1hY3Rpb24tYnV0dG9ucyBpb24tYnV0dG9uc3tkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1wYWNrOmp1c3RpZnk7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59LmRhdGV0aW1lLWFjdGlvbi1idXR0b25zIC5kYXRldGltZS1hY3Rpb24tYnV0dG9ucy1jb250YWluZXJ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXh9Omhvc3QgLmNhbGVuZGFyLWFjdGlvbi1idXR0b25ze2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LXBhY2s6anVzdGlmeTtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbn06aG9zdCAuY2FsZW5kYXItYWN0aW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbnstLWJhY2tncm91bmQ6dHJhbnNwYXJlbnR9Omhvc3QgLmNhbGVuZGFyLWRheXMtb2Ytd2Vla3tkaXNwbGF5OmdyaWQ7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCg3LCAxZnIpO3RleHQtYWxpZ246Y2VudGVyfS5jYWxlbmRhci1kYXlzLW9mLXdlZWsgLmRheS1vZi13ZWVrey13ZWJraXQtbWFyZ2luLXN0YXJ0OmF1dG87bWFyZ2luLWlubGluZS1zdGFydDphdXRvOy13ZWJraXQtbWFyZ2luLWVuZDphdXRvO21hcmdpbi1pbmxpbmUtZW5kOmF1dG87bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MH06aG9zdCAuY2FsZW5kYXItYm9keXtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1wb3NpdGl2ZToxO2ZsZXgtZ3JvdzoxOy13ZWJraXQtc2Nyb2xsLXNuYXAtdHlwZTp4IG1hbmRhdG9yeTstbXMtc2Nyb2xsLXNuYXAtdHlwZTp4IG1hbmRhdG9yeTtzY3JvbGwtc25hcC10eXBlOnggbWFuZGF0b3J5O292ZXJmbG93LXg6c2Nyb2xsO292ZXJmbG93LXk6aGlkZGVuO3Njcm9sbGJhci13aWR0aDpub25lO291dGxpbmU6bm9uZX06aG9zdCAuY2FsZW5kYXItYm9keSAuY2FsZW5kYXItbW9udGh7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZmxvdzpjb2x1bW47ZmxleC1mbG93OmNvbHVtbjtzY3JvbGwtc25hcC1hbGlnbjpzdGFydDtzY3JvbGwtc25hcC1zdG9wOmFsd2F5czstbXMtZmxleC1uZWdhdGl2ZTowO2ZsZXgtc2hyaW5rOjA7d2lkdGg6MTAwJX06aG9zdCAuY2FsZW5kYXItYm9keSAuY2FsZW5kYXItbW9udGgtZGlzYWJsZWR7c2Nyb2xsLXNuYXAtYWxpZ246bm9uZX06aG9zdCAuY2FsZW5kYXItYm9keTo6LXdlYmtpdC1zY3JvbGxiYXJ7ZGlzcGxheTpub25lfTpob3N0IC5jYWxlbmRhci1ib2R5IC5jYWxlbmRhci1tb250aC1ncmlke2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDcsIDFmcil9Omhvc3QgLmNhbGVuZGFyLWRheS13cmFwcGVye2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjttaW4td2lkdGg6MDttaW4taGVpZ2h0OjA7b3ZlcmZsb3c6dmlzaWJsZX0uY2FsZW5kYXItZGF5e2JvcmRlci1yYWRpdXM6NTAlOy13ZWJraXQtcGFkZGluZy1zdGFydDowcHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MHB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MHB4O3BhZGRpbmctaW5saW5lLWVuZDowcHg7cGFkZGluZy10b3A6MHB4O3BhZGRpbmctYm90dG9tOjBweDstd2Via2l0LW1hcmdpbi1zdGFydDowcHg7bWFyZ2luLWlubGluZS1zdGFydDowcHg7LXdlYmtpdC1tYXJnaW4tZW5kOjBweDttYXJnaW4taW5saW5lLWVuZDowcHg7bWFyZ2luLXRvcDowcHg7bWFyZ2luLWJvdHRvbTowcHg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JvcmRlcjpub25lO291dGxpbmU6bm9uZTtiYWNrZ3JvdW5kOm5vbmU7Y29sb3I6Y3VycmVudENvbG9yO2ZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseSwgaW5oZXJpdCk7Y3Vyc29yOnBvaW50ZXI7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lO3otaW5kZXg6MH06aG9zdCAuY2FsZW5kYXItZGF5W2Rpc2FibGVkXXtwb2ludGVyLWV2ZW50czpub25lO29wYWNpdHk6MC40fS5jYWxlbmRhci1kYXk6bm90KC5jYWxlbmRhci1kYXktYWRqYWNlbnQtZGF5KTpmb2N1c3tiYWNrZ3JvdW5kOnJnYmEodmFyKC0taW9uLWNvbG9yLWJhc2UtcmdiKSwgMC4yKTstd2Via2l0LWJveC1zaGFkb3c6MHB4IDBweCAwcHggNHB4IHJnYmEodmFyKC0taW9uLWNvbG9yLWJhc2UtcmdiKSwgMC4yKTtib3gtc2hhZG93OjBweCAwcHggMHB4IDRweCByZ2JhKHZhcigtLWlvbi1jb2xvci1iYXNlLXJnYiksIDAuMil9Omhvc3QgLmRhdGV0aW1lLXRpbWV7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtcGFjazpqdXN0aWZ5O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufTpob3N0KC5kYXRldGltZS1wcmVzZW50YXRpb24tdGltZSkgLmRhdGV0aW1lLXRpbWV7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MH06aG9zdCBpb24tcG9wb3ZlcnstLWhlaWdodDoyMDBweH06aG9zdCAudGltZS1oZWFkZXJ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcn06aG9zdCAudGltZS1ib2R5e2JvcmRlci1yYWRpdXM6OHB4Oy13ZWJraXQtcGFkZGluZy1zdGFydDoxMnB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjEycHg7LXdlYmtpdC1wYWRkaW5nLWVuZDoxMnB4O3BhZGRpbmctaW5saW5lLWVuZDoxMnB4O3BhZGRpbmctdG9wOjZweDtwYWRkaW5nLWJvdHRvbTo2cHg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7Ym9yZGVyOm5vbmU7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3Itc3RlcC0zMDAsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXN0ZXAtMzAwLCAjZWRlZWYwKSk7Y29sb3I6dmFyKC0taW9uLXRleHQtY29sb3IsICMwMDApO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOmluaGVyaXQ7Y3Vyc29yOnBvaW50ZXI7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lfTpob3N0IC50aW1lLWJvZHktYWN0aXZle2NvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKX06aG9zdCguaW4taXRlbSl7cG9zaXRpb246c3RhdGljfTpob3N0KC5zaG93LW1vbnRoLWFuZC15ZWFyKSAuY2FsZW5kYXItYWN0aW9uLWJ1dHRvbnMgLmNhbGVuZGFyLW1vbnRoLXllYXItdG9nZ2xle2NvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKX0uY2FsZW5kYXItbW9udGgteWVhcnttaW4td2lkdGg6MH0uY2FsZW5kYXItbW9udGgteWVhci10b2dnbGV7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6aW5oZXJpdDtmb250LXN0eWxlOmluaGVyaXQ7Zm9udC13ZWlnaHQ6aW5oZXJpdDtsZXR0ZXItc3BhY2luZzppbmhlcml0O3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3RleHQtaW5kZW50OmluaGVyaXQ7dGV4dC1vdmVyZmxvdzppbmhlcml0O3RleHQtdHJhbnNmb3JtOmluaGVyaXQ7dGV4dC1hbGlnbjppbmhlcml0O3doaXRlLXNwYWNlOmluaGVyaXQ7Y29sb3I6aW5oZXJpdDtwb3NpdGlvbjpyZWxhdGl2ZTtib3JkZXI6MDtvdXRsaW5lOm5vbmU7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtjdXJzb3I6cG9pbnRlcjt6LWluZGV4OjF9LmNhbGVuZGFyLW1vbnRoLXllYXItdG9nZ2xlOjphZnRlcntsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MDtwb3NpdGlvbjphYnNvbHV0ZTtjb250ZW50OlxcXCJcXFwiO29wYWNpdHk6MDstd2Via2l0LXRyYW5zaXRpb246b3BhY2l0eSAxNW1zIGxpbmVhciwgYmFja2dyb3VuZC1jb2xvciAxNW1zIGxpbmVhcjt0cmFuc2l0aW9uOm9wYWNpdHkgMTVtcyBsaW5lYXIsIGJhY2tncm91bmQtY29sb3IgMTVtcyBsaW5lYXI7ei1pbmRleDotMX0uY2FsZW5kYXItbW9udGgteWVhci10b2dnbGUuaW9uLWZvY3VzZWQ6OmFmdGVye2JhY2tncm91bmQ6Y3VycmVudENvbG9yfS5jYWxlbmRhci1tb250aC15ZWFyLXRvZ2dsZTpkaXNhYmxlZHtvcGFjaXR5OjAuMztwb2ludGVyLWV2ZW50czpub25lfS5jYWxlbmRhci1tb250aC15ZWFyLXRvZ2dsZSBpb24taWNvbnstd2Via2l0LXBhZGRpbmctc3RhcnQ6NHB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjRweDstd2Via2l0LXBhZGRpbmctZW5kOjA7cGFkZGluZy1pbmxpbmUtZW5kOjA7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowOy1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MH0uY2FsZW5kYXItbW9udGgteWVhci10b2dnbGUgI3RvZ2dsZS13cmFwcGVye2Rpc3BsYXk6LW1zLWlubGluZS1mbGV4Ym94O2Rpc3BsYXk6aW5saW5lLWZsZXg7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcn1pb24tcGlja2Vyey0taGlnaGxpZ2h0LWJhY2tncm91bmQ6dmFyKC0td2hlZWwtaGlnaGxpZ2h0LWJhY2tncm91bmQpOy0taGlnaGxpZ2h0LWJvcmRlci1yYWRpdXM6dmFyKC0td2hlZWwtaGlnaGxpZ2h0LWJvcmRlci1yYWRpdXMpOy0tZmFkZS1iYWNrZ3JvdW5kLXJnYjp2YXIoLS13aGVlbC1mYWRlLWJhY2tncm91bmQtcmdiKX06aG9zdHstLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLXN0ZXAtMTAwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTEwMCwgI2ZmZmZmZikpOy0tdGl0bGUtY29sb3I6dmFyKC0taW9uLWNvbG9yLWNvbnRyYXN0KX06aG9zdCAuZGF0ZXRpbWUtaGVhZGVyey13ZWJraXQtcGFkZGluZy1zdGFydDoyMHB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjIwcHg7LXdlYmtpdC1wYWRkaW5nLWVuZDoyMHB4O3BhZGRpbmctaW5saW5lLWVuZDoyMHB4O3BhZGRpbmctdG9wOjIwcHg7cGFkZGluZy1ib3R0b206MjBweDtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1iYXNlKTtjb2xvcjp2YXIoLS10aXRsZS1jb2xvcil9Omhvc3QgLmRhdGV0aW1lLWhlYWRlciAuZGF0ZXRpbWUtdGl0bGV7Zm9udC1zaXplOjAuNzVyZW07dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlfTpob3N0IC5kYXRldGltZS1oZWFkZXIgLmRhdGV0aW1lLXNlbGVjdGVkLWRhdGV7bWFyZ2luLXRvcDozMHB4O2ZvbnQtc2l6ZToyLjEyNXJlbX06aG9zdCAuY2FsZW5kYXItYWN0aW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbnstLWNvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTY1MCwgdmFyKC0taW9uLXRleHQtY29sb3Itc3RlcC0zNTAsICM1OTU5NTkpKX0uY2FsZW5kYXItbW9udGgteWVhci10b2dnbGV7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjIwcHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MjBweDstd2Via2l0LXBhZGRpbmctZW5kOjE2cHg7cGFkZGluZy1pbmxpbmUtZW5kOjE2cHg7cGFkZGluZy10b3A6MTJweDtwYWRkaW5nLWJvdHRvbToxMnB4O21pbi1oZWlnaHQ6NDhweDtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2NvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTY1MCwgdmFyKC0taW9uLXRleHQtY29sb3Itc3RlcC0zNTAsICM1OTU5NTkpKTt6LWluZGV4OjF9LmNhbGVuZGFyLW1vbnRoLXllYXItdG9nZ2xlLmlvbi1mb2N1c2VkOjphZnRlcntvcGFjaXR5OjAuMDR9LmNhbGVuZGFyLW1vbnRoLXllYXItdG9nZ2xlIGlvbi1yaXBwbGUtZWZmZWN0e2NvbG9yOmN1cnJlbnRDb2xvcn1AbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpey5jYWxlbmRhci1tb250aC15ZWFyLXRvZ2dsZS5pb24tYWN0aXZhdGFibGU6bm90KC5pb24tZm9jdXNlZCk6aG92ZXI6OmFmdGVye2JhY2tncm91bmQ6Y3VycmVudENvbG9yO29wYWNpdHk6MC4wNH19Omhvc3QgLmNhbGVuZGFyLWRheXMtb2Ytd2Vla3std2Via2l0LXBhZGRpbmctc3RhcnQ6MTBweDtwYWRkaW5nLWlubGluZS1zdGFydDoxMHB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MTBweDtwYWRkaW5nLWlubGluZS1lbmQ6MTBweDtwYWRkaW5nLXRvcDowcHg7cGFkZGluZy1ib3R0b206MHB4O2NvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTUwMCwgdmFyKC0taW9uLXRleHQtY29sb3Itc3RlcC01MDAsIGdyYXkpKTtmb250LXNpemU6MC44NzVyZW07bGluZS1oZWlnaHQ6MzZweH06aG9zdCAuY2FsZW5kYXItYm9keSAuY2FsZW5kYXItbW9udGggLmNhbGVuZGFyLW1vbnRoLWdyaWR7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjEwcHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MTBweDstd2Via2l0LXBhZGRpbmctZW5kOjEwcHg7cGFkZGluZy1pbmxpbmUtZW5kOjEwcHg7cGFkZGluZy10b3A6NHB4O3BhZGRpbmctYm90dG9tOjRweDtncmlkLXRlbXBsYXRlLXJvd3M6cmVwZWF0KDYsIDFmcil9Omhvc3QgLmNhbGVuZGFyLWRheXt3aWR0aDo0MnB4O21pbi13aWR0aDo0MnB4O2hlaWdodDo0MnB4O2ZvbnQtc2l6ZTowLjg3NXJlbX06aG9zdCAuY2FsZW5kYXItZGF5LmNhbGVuZGFyLWRheS10b2RheXtib3JkZXI6MXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1iYXNlKTtjb2xvcjp2YXIoLS1pb24tY29sb3ItYmFzZSl9Omhvc3QgLmNhbGVuZGFyLWRheS5jYWxlbmRhci1kYXktYWN0aXZlLDpob3N0IC5jYWxlbmRhci1kYXkuY2FsZW5kYXItZGF5LWFkamFjZW50LWRheS5jYWxlbmRhci1kYXktYWN0aXZle2NvbG9yOnZhcigtLWlvbi1jb2xvci1jb250cmFzdCl9LmNhbGVuZGFyLWRheS5jYWxlbmRhci1kYXktYWN0aXZlLC5jYWxlbmRhci1kYXkuY2FsZW5kYXItZGF5LWFjdGl2ZTpmb2N1c3tib3JkZXI6MXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1iYXNlKTtiYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1iYXNlKX06aG9zdCAuY2FsZW5kYXItZGF5LmNhbGVuZGFyLWRheS1hZGphY2VudC1kYXl7Y29sb3I6dmFyKC0taW9uLWNvbG9yLXN0ZXAtNTAwLCB2YXIoLS1pb24tdGV4dC1jb2xvci1zdGVwLTUwMCwgZ3JheSkpfTpob3N0IC5kYXRldGltZS10aW1ley13ZWJraXQtcGFkZGluZy1zdGFydDoxNnB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjE2cHg7LXdlYmtpdC1wYWRkaW5nLWVuZDoxNnB4O3BhZGRpbmctaW5saW5lLWVuZDoxNnB4O3BhZGRpbmctdG9wOjhweDtwYWRkaW5nLWJvdHRvbTo4cHh9Omhvc3QgLnRpbWUtaGVhZGVye2NvbG9yOnZhcigtLWlvbi1jb2xvci1zdGVwLTY1MCwgdmFyKC0taW9uLXRleHQtY29sb3Itc3RlcC0zNTAsICM1OTU5NTkpKX06aG9zdCguZGF0ZXRpbWUtcHJlc2VudGF0aW9uLW1vbnRoKSAuZGF0ZXRpbWUteWVhciw6aG9zdCguZGF0ZXRpbWUtcHJlc2VudGF0aW9uLXllYXIpIC5kYXRldGltZS15ZWFyLDpob3N0KC5kYXRldGltZS1wcmVzZW50YXRpb24tbW9udGgteWVhcikgLmRhdGV0aW1lLXllYXJ7bWFyZ2luLXRvcDoyMHB4O21hcmdpbi1ib3R0b206MjBweH06aG9zdCAuZGF0ZXRpbWUtYnV0dG9uc3std2Via2l0LXBhZGRpbmctc3RhcnQ6MTBweDtwYWRkaW5nLWlubGluZS1zdGFydDoxMHB4Oy13ZWJraXQtcGFkZGluZy1lbmQ6MTBweDtwYWRkaW5nLWlubGluZS1lbmQ6MTBweDtwYWRkaW5nLXRvcDoxMHB4O3BhZGRpbmctYm90dG9tOjEwcHg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9XCI7XG5jb25zdCBEYXRldGltZSA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5pb25DYW5jZWwgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkNhbmNlbFwiLCA3KTtcbiAgICB0aGlzLmlvbkNoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uQ2hhbmdlXCIsIDcpO1xuICAgIHRoaXMuaW9uVmFsdWVDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblZhbHVlQ2hhbmdlXCIsIDcpO1xuICAgIHRoaXMuaW9uRm9jdXMgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvbkZvY3VzXCIsIDcpO1xuICAgIHRoaXMuaW9uQmx1ciA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uQmx1clwiLCA3KTtcbiAgICB0aGlzLmlvblN0eWxlID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25TdHlsZVwiLCA3KTtcbiAgICB0aGlzLmlvblJlbmRlciA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uUmVuZGVyXCIsIDcpO1xuICAgIHRoaXMuaW5wdXRJZCA9IGBpb24tZHQtJHtkYXRldGltZUlkcysrfWA7XG4gICAgdGhpcy5wcmV2UHJlc2VudGF0aW9uID0gbnVsbDtcbiAgICB0aGlzLnNob3dNb250aEFuZFllYXIgPSBmYWxzZTtcbiAgICB0aGlzLmFjdGl2ZVBhcnRzID0gW107XG4gICAgdGhpcy53b3JraW5nUGFydHMgPSB7XG4gICAgICBtb250aDogNSxcbiAgICAgIGRheTogMjgsXG4gICAgICB5ZWFyOiAyMDIxLFxuICAgICAgaG91cjogMTMsXG4gICAgICBtaW51dGU6IDUyLFxuICAgICAgYW1wbTogJ3BtJyxcbiAgICAgIGlzQWRqYWNlbnREYXk6IGZhbHNlXG4gICAgfTtcbiAgICB0aGlzLmlzVGltZVBvcG92ZXJPcGVuID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogVGhlIGNvbG9yIHRvIHVzZSBmcm9tIHlvdXIgYXBwbGljYXRpb24ncyBjb2xvciBwYWxldHRlLlxuICAgICAqIERlZmF1bHQgb3B0aW9ucyBhcmU6IGBcInByaW1hcnlcImAsIGBcInNlY29uZGFyeVwiYCwgYFwidGVydGlhcnlcImAsIGBcInN1Y2Nlc3NcImAsIGBcIndhcm5pbmdcImAsIGBcImRhbmdlclwiYCwgYFwibGlnaHRcImAsIGBcIm1lZGl1bVwiYCwgYW5kIGBcImRhcmtcImAuXG4gICAgICogRm9yIG1vcmUgaW5mb3JtYXRpb24gb24gY29sb3JzLCBzZWUgW3RoZW1pbmddKC9kb2NzL3RoZW1pbmcvYmFzaWNzKS5cbiAgICAgKi9cbiAgICB0aGlzLmNvbG9yID0gJ3ByaW1hcnknO1xuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSBjb250cm9sLCB3aGljaCBpcyBzdWJtaXR0ZWQgd2l0aCB0aGUgZm9ybSBkYXRhLlxuICAgICAqL1xuICAgIHRoaXMubmFtZSA9IHRoaXMuaW5wdXRJZDtcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIHRoZSB1c2VyIGNhbm5vdCBpbnRlcmFjdCB3aXRoIHRoZSBkYXRldGltZS5cbiAgICAgKi9cbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogSWYgYHRydWVgLCB0aGUgZGF0ZXRpbWUgYXBwZWFycyBub3JtYWwgYnV0IHRoZSBzZWxlY3RlZCBkYXRlIGNhbm5vdCBiZSBjaGFuZ2VkLlxuICAgICAqL1xuICAgIHRoaXMucmVhZG9ubHkgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBkYXRldGltZSBjYWxlbmRhciBkaXNwbGF5cyBhIHNpeC13ZWVrICg0Mi1kYXkpIGxheW91dCxcbiAgICAgKiBpbmNsdWRpbmcgZGF5cyBmcm9tIHRoZSBwcmV2aW91cyBhbmQgbmV4dCBtb250aHMgdG8gZmlsbCB0aGUgZ3JpZC5cbiAgICAgKiBUaGVzZSBhZGphY2VudCBkYXlzIGFyZSBzZWxlY3RhYmxlIHVubGVzcyBkaXNhYmxlZC5cbiAgICAgKi9cbiAgICB0aGlzLnNob3dBZGphY2VudERheXMgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBXaGljaCB2YWx1ZXMgeW91IHdhbnQgdG8gc2VsZWN0LiBgXCJkYXRlXCJgIHdpbGwgc2hvd1xuICAgICAqIGEgY2FsZW5kYXIgcGlja2VyIHRvIHNlbGVjdCB0aGUgbW9udGgsIGRheSwgYW5kIHllYXIuIGBcInRpbWVcImBcbiAgICAgKiB3aWxsIHNob3cgYSB0aW1lIHBpY2tlciB0byBzZWxlY3QgdGhlIGhvdXIsIG1pbnV0ZSwgYW5kIChvcHRpb25hbGx5KVxuICAgICAqIEFNL1BNLiBgXCJkYXRlLXRpbWVcImAgd2lsbCBzaG93IHRoZSBkYXRlIHBpY2tlciBmaXJzdCBhbmQgdGltZSBwaWNrZXIgc2Vjb25kLlxuICAgICAqIGBcInRpbWUtZGF0ZVwiYCB3aWxsIHNob3cgdGhlIHRpbWUgcGlja2VyIGZpcnN0IGFuZCBkYXRlIHBpY2tlciBzZWNvbmQuXG4gICAgICovXG4gICAgdGhpcy5wcmVzZW50YXRpb24gPSAnZGF0ZS10aW1lJztcbiAgICAvKipcbiAgICAgKiBUaGUgdGV4dCB0byBkaXNwbGF5IG9uIHRoZSBwaWNrZXIncyBjYW5jZWwgYnV0dG9uLlxuICAgICAqL1xuICAgIHRoaXMuY2FuY2VsVGV4dCA9ICdDYW5jZWwnO1xuICAgIC8qKlxuICAgICAqIFRoZSB0ZXh0IHRvIGRpc3BsYXkgb24gdGhlIHBpY2tlcidzIFwiRG9uZVwiIGJ1dHRvbi5cbiAgICAgKi9cbiAgICB0aGlzLmRvbmVUZXh0ID0gJ0RvbmUnO1xuICAgIC8qKlxuICAgICAqIFRoZSB0ZXh0IHRvIGRpc3BsYXkgb24gdGhlIHBpY2tlcidzIFwiQ2xlYXJcIiBidXR0b24uXG4gICAgICovXG4gICAgdGhpcy5jbGVhclRleHQgPSAnQ2xlYXInO1xuICAgIC8qKlxuICAgICAqIFRoZSBsb2NhbGUgdG8gdXNlIGZvciBgaW9uLWRhdGV0aW1lYC4gVGhpc1xuICAgICAqIGltcGFjdHMgbW9udGggYW5kIGRheSBuYW1lIGZvcm1hdHRpbmcuXG4gICAgICogVGhlIGBcImRlZmF1bHRcImAgdmFsdWUgcmVmZXJzIHRvIHRoZSBkZWZhdWx0XG4gICAgICogbG9jYWxlIHNldCBieSB5b3VyIGRldmljZS5cbiAgICAgKi9cbiAgICB0aGlzLmxvY2FsZSA9ICdkZWZhdWx0JztcbiAgICAvKipcbiAgICAgKiBUaGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrIHRvIHVzZSBmb3IgYGlvbi1kYXRldGltZWAuIFRoZVxuICAgICAqIGRlZmF1bHQgdmFsdWUgaXMgYDBgIGFuZCByZXByZXNlbnRzIFN1bmRheS5cbiAgICAgKi9cbiAgICB0aGlzLmZpcnN0RGF5T2ZXZWVrID0gMDtcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIG11bHRpcGxlIGRhdGVzIGNhbiBiZSBzZWxlY3RlZCBhdCBvbmNlLiBPbmx5XG4gICAgICogYXBwbGllcyB0byBgcHJlc2VudGF0aW9uPVwiZGF0ZVwiYCBhbmQgYHByZWZlcldoZWVsPVwiZmFsc2VcImAuXG4gICAgICovXG4gICAgdGhpcy5tdWx0aXBsZSA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIElmIGB0cnVlYCwgYSBoZWFkZXIgd2lsbCBiZSBzaG93biBhYm92ZSB0aGUgY2FsZW5kYXJcbiAgICAgKiBwaWNrZXIuIFRoaXMgd2lsbCBpbmNsdWRlIGJvdGggdGhlIHNsb3R0ZWQgdGl0bGUsIGFuZFxuICAgICAqIHRoZSBzZWxlY3RlZCBkYXRlLlxuICAgICAqL1xuICAgIHRoaXMuc2hvd0RlZmF1bHRUaXRsZSA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIElmIGB0cnVlYCwgdGhlIGRlZmF1bHQgXCJDYW5jZWxcIiBhbmQgXCJPS1wiIGJ1dHRvbnNcbiAgICAgKiB3aWxsIGJlIHJlbmRlcmVkIGF0IHRoZSBib3R0b20gb2YgdGhlIGBpb24tZGF0ZXRpbWVgXG4gICAgICogY29tcG9uZW50LiBEZXZlbG9wZXJzIGNhbiBhbHNvIHVzZSB0aGUgYGJ1dHRvbmAgc2xvdFxuICAgICAqIGlmIHRoZXkgd2FudCB0byBjdXN0b21pemUgdGhlc2UgYnV0dG9ucy4gSWYgY3VzdG9tXG4gICAgICogYnV0dG9ucyBhcmUgc2V0IGluIHRoZSBgYnV0dG9uYCBzbG90IHRoZW4gdGhlXG4gICAgICogZGVmYXVsdCBidXR0b25zIHdpbGwgbm90IGJlIHJlbmRlcmVkLlxuICAgICAqL1xuICAgIHRoaXMuc2hvd0RlZmF1bHRCdXR0b25zID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogSWYgYHRydWVgLCBhIFwiQ2xlYXJcIiBidXR0b24gd2lsbCBiZSByZW5kZXJlZCBhbG9uZ3NpZGVcbiAgICAgKiB0aGUgZGVmYXVsdCBcIkNhbmNlbFwiIGFuZCBcIk9LXCIgYnV0dG9ucyBhdCB0aGUgYm90dG9tIG9mIHRoZSBgaW9uLWRhdGV0aW1lYFxuICAgICAqIGNvbXBvbmVudC4gRGV2ZWxvcGVycyBjYW4gYWxzbyB1c2UgdGhlIGBidXR0b25gIHNsb3RcbiAgICAgKiBpZiB0aGV5IHdhbnQgdG8gY3VzdG9taXplIHRoZXNlIGJ1dHRvbnMuIElmIGN1c3RvbVxuICAgICAqIGJ1dHRvbnMgYXJlIHNldCBpbiB0aGUgYGJ1dHRvbmAgc2xvdCB0aGVuIHRoZVxuICAgICAqIGRlZmF1bHQgYnV0dG9ucyB3aWxsIG5vdCBiZSByZW5kZXJlZC5cbiAgICAgKi9cbiAgICB0aGlzLnNob3dDbGVhckJ1dHRvbiA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIElmIGB0cnVlYCwgdGhlIGRlZmF1bHQgXCJUaW1lXCIgbGFiZWwgd2lsbCBiZSByZW5kZXJlZFxuICAgICAqIGZvciB0aGUgdGltZSBzZWxlY3RvciBvZiB0aGUgYGlvbi1kYXRldGltZWAgY29tcG9uZW50LlxuICAgICAqIERldmVsb3BlcnMgY2FuIGFsc28gdXNlIHRoZSBgdGltZS1sYWJlbGAgc2xvdFxuICAgICAqIGlmIHRoZXkgd2FudCB0byBjdXN0b21pemUgdGhpcyBsYWJlbC4gSWYgYSBjdXN0b21cbiAgICAgKiBsYWJlbCBpcyBzZXQgaW4gdGhlIGB0aW1lLWxhYmVsYCBzbG90IHRoZW4gdGhlXG4gICAgICogZGVmYXVsdCBsYWJlbCB3aWxsIG5vdCBiZSByZW5kZXJlZC5cbiAgICAgKi9cbiAgICB0aGlzLnNob3dEZWZhdWx0VGltZUxhYmVsID0gdHJ1ZTtcbiAgICAvKipcbiAgICAgKiBJZiBgY292ZXJgLCB0aGUgYGlvbi1kYXRldGltZWAgd2lsbCBleHBhbmQgdG8gY292ZXIgdGhlIGZ1bGwgd2lkdGggb2YgaXRzIGNvbnRhaW5lci5cbiAgICAgKiBJZiBgZml4ZWRgLCB0aGUgYGlvbi1kYXRldGltZWAgd2lsbCBoYXZlIGEgZml4ZWQgd2lkdGguXG4gICAgICovXG4gICAgdGhpcy5zaXplID0gJ2ZpeGVkJztcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIGEgd2hlZWwgcGlja2VyIHdpbGwgYmUgcmVuZGVyZWQgaW5zdGVhZCBvZiBhIGNhbGVuZGFyIGdyaWRcbiAgICAgKiB3aGVyZSBwb3NzaWJsZS4gSWYgYGZhbHNlYCwgYSBjYWxlbmRhciBncmlkIHdpbGwgYmUgcmVuZGVyZWQgaW5zdGVhZCBvZlxuICAgICAqIGEgd2hlZWwgcGlja2VyIHdoZXJlIHBvc3NpYmxlLlxuICAgICAqXG4gICAgICogQSB3aGVlbCBwaWNrZXIgY2FuIGJlIHJlbmRlcmVkIGluc3RlYWQgb2YgYSBncmlkIHdoZW4gYHByZXNlbnRhdGlvbmAgaXNcbiAgICAgKiBvbmUgb2YgdGhlIGZvbGxvd2luZyB2YWx1ZXM6IGBcImRhdGVcImAsIGBcImRhdGUtdGltZVwiYCwgb3IgYFwidGltZS1kYXRlXCJgLlxuICAgICAqXG4gICAgICogQSB3aGVlbCBwaWNrZXIgd2lsbCBhbHdheXMgYmUgcmVuZGVyZWQgcmVnYXJkbGVzcyBvZlxuICAgICAqIHRoZSBgcHJlZmVyV2hlZWxgIHZhbHVlIHdoZW4gYHByZXNlbnRhdGlvbmAgaXMgb25lIG9mIHRoZSBmb2xsb3dpbmcgdmFsdWVzOlxuICAgICAqIGBcInRpbWVcImAsIGBcIm1vbnRoXCJgLCBgXCJtb250aC15ZWFyXCJgLCBvciBgXCJ5ZWFyXCJgLlxuICAgICAqL1xuICAgIHRoaXMucHJlZmVyV2hlZWwgPSBmYWxzZTtcbiAgICB0aGlzLndhcm5JZkluY29ycmVjdFZhbHVlVXNhZ2UgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIG11bHRpcGxlLFxuICAgICAgICB2YWx1ZVxuICAgICAgfSA9IHRoaXM7XG4gICAgICBpZiAoIW11bHRpcGxlICYmIEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXZSBkbyBzb21lIHByb2Nlc3Npbmcgb24gdGhlIGB2YWx1ZWAgYXJyYXkgc29cbiAgICAgICAgICogdGhhdCBpdCBsb29rcyBtb3JlIGxpa2UgYW4gYXJyYXkgd2hlbiBsb2dnZWQgdG9cbiAgICAgICAgICogdGhlIGNvbnNvbGUuXG4gICAgICAgICAqIEV4YW1wbGUgZ2l2ZW4gWydhJywgJ2InXVxuICAgICAgICAgKiBEZWZhdWx0IHRvU3RyaW5nKCkgYmVoYXZpb3I6IGEsYlxuICAgICAgICAgKiBDdXN0b20gYmVoYXZpb3I6IFsnYScsICdiJ11cbiAgICAgICAgICovXG4gICAgICAgIHByaW50SW9uV2FybmluZyhgW2lvbi1kYXRldGltZV0gLSBBbiBhcnJheSBvZiB2YWx1ZXMgd2FzIHBhc3NlZCwgYnV0IG11bHRpcGxlIGlzIFwiZmFsc2VcIi4gVGhpcyBpcyBpbmNvcnJlY3QgdXNhZ2UgYW5kIG1heSByZXN1bHQgaW4gdW5leHBlY3RlZCBiZWhhdmlvcnMuIFRvIGRpc21pc3MgdGhpcyB3YXJuaW5nLCBwYXNzIGEgc3RyaW5nIHRvIHRoZSBcInZhbHVlXCIgcHJvcGVydHkgd2hlbiBtdWx0aXBsZT1cImZhbHNlXCIuXG5cbiAgVmFsdWUgUGFzc2VkOiBbJHt2YWx1ZS5tYXAodiA9PiBgJyR7dn0nYCkuam9pbignLCAnKX1dXG5gLCB0aGlzLmVsKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuc2V0VmFsdWUgPSB2YWx1ZSA9PiB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLmlvbkNoYW5nZS5lbWl0KHtcbiAgICAgICAgdmFsdWVcbiAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgRGF0ZXRpbWVQYXJ0IGludGVyZmFjZVxuICAgICAqIHRvIHVzZSB3aGVuIHJlbmRlcmluZyBhbiBpbml0aWFsIHNldCBvZlxuICAgICAqIGRhdGEuIFRoaXMgc2hvdWxkIGJlIHVzZWQgd2hlbiByZW5kZXJpbmcgYW5cbiAgICAgKiBpbnRlcmZhY2UgaW4gYW4gZW52aXJvbm1lbnQgd2hlcmUgdGhlIGB2YWx1ZWBcbiAgICAgKiBtYXkgbm90IGJlIHNldC4gVGhpcyBmdW5jdGlvbiB3b3Jrc1xuICAgICAqIGJ5IHJldHVybmluZyB0aGUgZmlyc3Qgc2VsZWN0ZWQgZGF0ZSBhbmQgdGhlblxuICAgICAqIGZhbGxpbmcgYmFjayB0byBkZWZhdWx0UGFydHMgaWYgbm8gYWN0aXZlIGRhdGVcbiAgICAgKiBpcyBzZWxlY3RlZC5cbiAgICAgKi9cbiAgICB0aGlzLmdldEFjdGl2ZVBhcnRzV2l0aEZhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgdmFyIF9hO1xuICAgICAgY29uc3Qge1xuICAgICAgICBkZWZhdWx0UGFydHNcbiAgICAgIH0gPSB0aGlzO1xuICAgICAgcmV0dXJuIChfYSA9IHRoaXMuZ2V0QWN0aXZlUGFydCgpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBkZWZhdWx0UGFydHM7XG4gICAgfTtcbiAgICB0aGlzLmdldEFjdGl2ZVBhcnQgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGFjdGl2ZVBhcnRzXG4gICAgICB9ID0gdGhpcztcbiAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KGFjdGl2ZVBhcnRzKSA/IGFjdGl2ZVBhcnRzWzBdIDogYWN0aXZlUGFydHM7XG4gICAgfTtcbiAgICB0aGlzLmNsb3NlUGFyZW50T3ZlcmxheSA9IHJvbGUgPT4ge1xuICAgICAgY29uc3QgcG9wb3Zlck9yTW9kYWwgPSB0aGlzLmVsLmNsb3Nlc3QoJ2lvbi1tb2RhbCwgaW9uLXBvcG92ZXInKTtcbiAgICAgIGlmIChwb3BvdmVyT3JNb2RhbCkge1xuICAgICAgICBwb3BvdmVyT3JNb2RhbC5kaXNtaXNzKHVuZGVmaW5lZCwgcm9sZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnNldFdvcmtpbmdQYXJ0cyA9IHBhcnRzID0+IHtcbiAgICAgIHRoaXMud29ya2luZ1BhcnRzID0gT2JqZWN0LmFzc2lnbih7fSwgcGFydHMpO1xuICAgIH07XG4gICAgdGhpcy5zZXRBY3RpdmVQYXJ0cyA9IChwYXJ0cywgcmVtb3ZlRGF0ZSA9IGZhbHNlKSA9PiB7XG4gICAgICAvKiogaWYgdGhlIGRhdGV0aW1lIGNvbXBvbmVudCBpcyBpbiByZWFkb25seSBtb2RlLFxuICAgICAgICogYWxsb3cgYnJvd3Npbmcgb2YgdGhlIGNhbGVuZGFyIHdpdGhvdXQgY2hhbmdpbmdcbiAgICAgICAqIHRoZSBzZXQgdmFsdWVcbiAgICAgICAqL1xuICAgICAgaWYgKHRoaXMucmVhZG9ubHkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qge1xuICAgICAgICBtdWx0aXBsZSxcbiAgICAgICAgbWluUGFydHMsXG4gICAgICAgIG1heFBhcnRzLFxuICAgICAgICBhY3RpdmVQYXJ0c1xuICAgICAgfSA9IHRoaXM7XG4gICAgICAvKipcbiAgICAgICAqIFdoZW4gc2V0dGluZyB0aGUgYWN0aXZlIHBhcnRzLCBpdCBpcyBwb3NzaWJsZVxuICAgICAgICogdG8gc2V0IGludmFsaWQgZGF0YS4gRm9yIGV4YW1wbGUsXG4gICAgICAgKiB3aGVuIHVwZGF0aW5nIEphbnVhcnkgMzEgdG8gRmVicnVhcnksXG4gICAgICAgKiBGZWJydWFyeSAzMSBkb2VzIG5vdCBleGlzdC4gQXMgYSByZXN1bHRcbiAgICAgICAqIHdlIG5lZWQgdG8gdmFsaWRhdGUgdGhlIGFjdGl2ZSBwYXJ0cyBhbmRcbiAgICAgICAqIGVuc3VyZSB0aGF0IHdlIGFyZSBvbmx5IHNldHRpbmcgdmFsaWQgZGF0ZXMuXG4gICAgICAgKiBBZGRpdGlvbmFsbHksIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSB3b3JraW5nIHBhcnRzXG4gICAgICAgKiB0b28gaW4gdGhlIGV2ZW50IHRoYXQgdGhlIHZhbGlkYXRlZCBwYXJ0cyBhcmUgZGlmZmVyZW50LlxuICAgICAgICovXG4gICAgICBjb25zdCB2YWxpZGF0ZWRQYXJ0cyA9IHZhbGlkYXRlUGFydHMocGFydHMsIG1pblBhcnRzLCBtYXhQYXJ0cyk7XG4gICAgICB0aGlzLnNldFdvcmtpbmdQYXJ0cyh2YWxpZGF0ZWRQYXJ0cyk7XG4gICAgICBpZiAobXVsdGlwbGUpIHtcbiAgICAgICAgY29uc3QgYWN0aXZlUGFydHNBcnJheSA9IEFycmF5LmlzQXJyYXkoYWN0aXZlUGFydHMpID8gYWN0aXZlUGFydHMgOiBbYWN0aXZlUGFydHNdO1xuICAgICAgICBpZiAocmVtb3ZlRGF0ZSkge1xuICAgICAgICAgIHRoaXMuYWN0aXZlUGFydHMgPSBhY3RpdmVQYXJ0c0FycmF5LmZpbHRlcihwID0+ICFpc1NhbWVEYXkocCwgdmFsaWRhdGVkUGFydHMpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmFjdGl2ZVBhcnRzID0gWy4uLmFjdGl2ZVBhcnRzQXJyYXksIHZhbGlkYXRlZFBhcnRzXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hY3RpdmVQYXJ0cyA9IE9iamVjdC5hc3NpZ24oe30sIHZhbGlkYXRlZFBhcnRzKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGhhc1Nsb3R0ZWRCdXR0b25zID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCdbc2xvdD1cImJ1dHRvbnNcIl0nKSAhPT0gbnVsbDtcbiAgICAgIGlmIChoYXNTbG90dGVkQnV0dG9ucyB8fCB0aGlzLnNob3dEZWZhdWx0QnV0dG9ucykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmNvbmZpcm0oKTtcbiAgICB9O1xuICAgIHRoaXMuaW5pdGlhbGl6ZUtleWJvYXJkTGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgY29uc3QgY2FsZW5kYXJCb2R5UmVmID0gdGhpcy5jYWxlbmRhckJvZHlSZWY7XG4gICAgICBpZiAoIWNhbGVuZGFyQm9keVJlZikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCByb290ID0gdGhpcy5lbC5zaGFkb3dSb290O1xuICAgICAgLyoqXG4gICAgICAgKiBHZXQgYSByZWZlcmVuY2UgdG8gdGhlIG1vbnRoXG4gICAgICAgKiBlbGVtZW50IHdlIGFyZSBjdXJyZW50bHkgdmlld2luZy5cbiAgICAgICAqL1xuICAgICAgY29uc3QgY3VycmVudE1vbnRoID0gY2FsZW5kYXJCb2R5UmVmLnF1ZXJ5U2VsZWN0b3IoJy5jYWxlbmRhci1tb250aDpudGgtb2YtdHlwZSgyKScpO1xuICAgICAgLyoqXG4gICAgICAgKiBXaGVuIGZvY3VzaW5nIHRoZSBjYWxlbmRhciBib2R5LCB3ZSB3YW50IHRvIHBhc3MgZm9jdXNcbiAgICAgICAqIHRvIHRoZSB3b3JraW5nIGRheSwgYnV0IG90aGVyIGRheXMgc2hvdWxkXG4gICAgICAgKiBvbmx5IGJlIGFjY2Vzc2libGUgdXNpbmcgdGhlIGFycm93IGtleXMuIFByZXNzaW5nXG4gICAgICAgKiBUYWIgc2hvdWxkIGp1bXAgYmV0d2VlbiBib2RpZXMgb2Ygc2VsZWN0YWJsZSBjb250ZW50LlxuICAgICAgICovXG4gICAgICBjb25zdCBjaGVja0NhbGVuZGFyQm9keUZvY3VzID0gZXYgPT4ge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IHJlY29yZCA9IGV2WzBdO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgY2FsZW5kYXIgYm9keSB3YXMgYWxyZWFkeSBmb2N1c2VkXG4gICAgICAgICAqIHdoZW4gdGhpcyBmaXJlZCBvciBpZiB0aGUgY2FsZW5kYXIgYm9keVxuICAgICAgICAgKiBpZiBub3QgY3VycmVudGx5IGZvY3VzZWQsIHdlIHNob3VsZCBub3QgcmUtZm9jdXNcbiAgICAgICAgICogdGhlIGlubmVyIGRheS5cbiAgICAgICAgICovXG4gICAgICAgIGlmICgoKF9hID0gcmVjb3JkLm9sZFZhbHVlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaW5jbHVkZXMoJ2lvbi1mb2N1c2VkJykpIHx8ICFjYWxlbmRhckJvZHlSZWYuY2xhc3NMaXN0LmNvbnRhaW5zKCdpb24tZm9jdXNlZCcpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZm9jdXNXb3JraW5nRGF5KGN1cnJlbnRNb250aCk7XG4gICAgICB9O1xuICAgICAgY29uc3QgbW8gPSBuZXcgTXV0YXRpb25PYnNlcnZlcihjaGVja0NhbGVuZGFyQm9keUZvY3VzKTtcbiAgICAgIG1vLm9ic2VydmUoY2FsZW5kYXJCb2R5UmVmLCB7XG4gICAgICAgIGF0dHJpYnV0ZUZpbHRlcjogWydjbGFzcyddLFxuICAgICAgICBhdHRyaWJ1dGVPbGRWYWx1ZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgICB0aGlzLmRlc3Ryb3lLZXlib2FyZE1PID0gKCkgPT4ge1xuICAgICAgICBtbyA9PT0gbnVsbCB8fCBtbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogbW8uZGlzY29ubmVjdCgpO1xuICAgICAgfTtcbiAgICAgIC8qKlxuICAgICAgICogV2UgbXVzdCB1c2Uga2V5ZG93biBub3Qga2V5dXAgYXMgd2Ugd2FudFxuICAgICAgICogdG8gcHJldmVudCBzY3JvbGxpbmcgd2hlbiB1c2luZyB0aGUgYXJyb3cga2V5cy5cbiAgICAgICAqL1xuICAgICAgY2FsZW5kYXJCb2R5UmVmLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBldiA9PiB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZUVsZW1lbnQgPSByb290LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGlmICghYWN0aXZlRWxlbWVudCB8fCAhYWN0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2NhbGVuZGFyLWRheScpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnRzID0gZ2V0UGFydHNGcm9tQ2FsZW5kYXJEYXkoYWN0aXZlRWxlbWVudCk7XG4gICAgICAgIGxldCBwYXJ0c1RvRm9jdXM7XG4gICAgICAgIHN3aXRjaCAoZXYua2V5KSB7XG4gICAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBwYXJ0c1RvRm9jdXMgPSBnZXROZXh0V2VlayhwYXJ0cyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBwYXJ0c1RvRm9jdXMgPSBnZXRQcmV2aW91c1dlZWsocGFydHMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcGFydHNUb0ZvY3VzID0gZ2V0TmV4dERheShwYXJ0cyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHBhcnRzVG9Gb2N1cyA9IGdldFByZXZpb3VzRGF5KHBhcnRzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ0hvbWUnOlxuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHBhcnRzVG9Gb2N1cyA9IGdldFN0YXJ0T2ZXZWVrKHBhcnRzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ0VuZCc6XG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcGFydHNUb0ZvY3VzID0gZ2V0RW5kT2ZXZWVrKHBhcnRzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ1BhZ2VVcCc6XG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcGFydHNUb0ZvY3VzID0gZXYuc2hpZnRLZXkgPyBnZXRQcmV2aW91c1llYXIocGFydHMpIDogZ2V0UHJldmlvdXNNb250aChwYXJ0cyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdQYWdlRG93bic6XG4gICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcGFydHNUb0ZvY3VzID0gZXYuc2hpZnRLZXkgPyBnZXROZXh0WWVhcihwYXJ0cykgOiBnZXROZXh0TW9udGgocGFydHMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogRG8gbm90IHByZXZlbnREZWZhdWx0IGhlcmVcbiAgICAgICAgICAgKiBhcyB3ZSBkbyBub3Qgd2FudCB0byBvdmVycmlkZSBvdGhlclxuICAgICAgICAgICAqIGJyb3dzZXIgZGVmYXVsdHMgc3VjaCBhcyBwcmVzc2luZyBFbnRlci9TcGFjZVxuICAgICAgICAgICAqIHRvIHNlbGVjdCBhIGRheS5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiB0aGUgZGF5IHdlIHdhbnQgdG8gbW92ZSBmb2N1cyB0byBpc1xuICAgICAgICAgKiBkaXNhYmxlZCwgZG8gbm90IGRvIGFueXRoaW5nLlxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKGlzRGF5RGlzYWJsZWQocGFydHNUb0ZvY3VzLCB0aGlzLm1pblBhcnRzLCB0aGlzLm1heFBhcnRzKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFdvcmtpbmdQYXJ0cyhPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMud29ya2luZ1BhcnRzKSwgcGFydHNUb0ZvY3VzKSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHaXZlIHZpZXcgYSBjaGFuY2UgdG8gcmUtcmVuZGVyXG4gICAgICAgICAqIHRoZW4gbW92ZSBmb2N1cyB0byB0aGUgbmV3IHdvcmtpbmcgZGF5XG4gICAgICAgICAqL1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5mb2N1c1dvcmtpbmdEYXkoY3VycmVudE1vbnRoKSk7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIHRoaXMuZm9jdXNXb3JraW5nRGF5ID0gY3VycmVudE1vbnRoID0+IHtcbiAgICAgIC8qKlxuICAgICAgICogR2V0IHRoZSBudW1iZXIgb2Ygb2Zmc2V0IGRheXMgc29cbiAgICAgICAqIHdlIGtub3cgaG93IG11Y2ggdG8gb2Zmc2V0IG91ciBuZXh0IHNlbGVjdG9yIGJ5XG4gICAgICAgKiB0byBncmFiIHRoZSBjb3JyZWN0IGNhbGVuZGFyLWRheSBlbGVtZW50LlxuICAgICAgICovXG4gICAgICBjb25zdCB7XG4gICAgICAgIGRheSxcbiAgICAgICAgbW9udGgsXG4gICAgICAgIHllYXJcbiAgICAgIH0gPSB0aGlzLndvcmtpbmdQYXJ0cztcbiAgICAgIGNvbnN0IGZpcnN0T2ZNb250aCA9IG5ldyBEYXRlKGAke21vbnRofS8xLyR7eWVhcn1gKS5nZXREYXkoKTtcbiAgICAgIGNvbnN0IG9mZnNldCA9IGZpcnN0T2ZNb250aCA+PSB0aGlzLmZpcnN0RGF5T2ZXZWVrID8gZmlyc3RPZk1vbnRoIC0gdGhpcy5maXJzdERheU9mV2VlayA6IDcgLSAodGhpcy5maXJzdERheU9mV2VlayAtIGZpcnN0T2ZNb250aCk7XG4gICAgICBpZiAoZGF5ID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogR2V0IHRoZSBjYWxlbmRhciBkYXkgZWxlbWVudFxuICAgICAgICogYW5kIGZvY3VzIGl0LlxuICAgICAgICovXG4gICAgICBjb25zdCBkYXlFbCA9IGN1cnJlbnRNb250aC5xdWVyeVNlbGVjdG9yKGAuY2FsZW5kYXItZGF5LXdyYXBwZXI6bnRoLW9mLXR5cGUoJHtvZmZzZXQgKyBkYXl9KSAuY2FsZW5kYXItZGF5YCk7XG4gICAgICBpZiAoZGF5RWwpIHtcbiAgICAgICAgZGF5RWwuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMucHJvY2Vzc01pblBhcnRzID0gKCkgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBtaW4sXG4gICAgICAgIGRlZmF1bHRQYXJ0c1xuICAgICAgfSA9IHRoaXM7XG4gICAgICBpZiAobWluID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5taW5QYXJ0cyA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5taW5QYXJ0cyA9IHBhcnNlTWluUGFydHMobWluLCBkZWZhdWx0UGFydHMpO1xuICAgIH07XG4gICAgdGhpcy5wcm9jZXNzTWF4UGFydHMgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIG1heCxcbiAgICAgICAgZGVmYXVsdFBhcnRzXG4gICAgICB9ID0gdGhpcztcbiAgICAgIGlmIChtYXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLm1heFBhcnRzID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLm1heFBhcnRzID0gcGFyc2VNYXhQYXJ0cyhtYXgsIGRlZmF1bHRQYXJ0cyk7XG4gICAgfTtcbiAgICB0aGlzLmluaXRpYWxpemVDYWxlbmRhckxpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgY29uc3QgY2FsZW5kYXJCb2R5UmVmID0gdGhpcy5jYWxlbmRhckJvZHlSZWY7XG4gICAgICBpZiAoIWNhbGVuZGFyQm9keVJlZikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIEZvciBwZXJmb3JtYW5jZSByZWFzb25zLCB3ZSBvbmx5IHJlbmRlciAzXG4gICAgICAgKiBtb250aHMgYXQgYSB0aW1lOiBUaGUgY3VycmVudCBtb250aCwgdGhlIHByZXZpb3VzXG4gICAgICAgKiBtb250aCwgYW5kIHRoZSBuZXh0IG1vbnRoLiBXZSBoYXZlIGEgc2Nyb2xsIGxpc3RlbmVyXG4gICAgICAgKiBvbiB0aGUgY2FsZW5kYXIgYm9keSB0byBhcHBlbmQvcHJlcGVuZCBuZXcgbW9udGhzLlxuICAgICAgICpcbiAgICAgICAqIFdlIGNhbiBkbyB0aGlzIGJlY2F1c2UgU3RlbmNpbCBpcyBzbWFydCBlbm91Z2ggdG8gbm90XG4gICAgICAgKiByZS1jcmVhdGUgdGhlIC5jYWxlbmRhci1tb250aCBjb250YWluZXJzLCBidXQgcmF0aGVyXG4gICAgICAgKiB1cGRhdGUgdGhlIGNvbnRlbnQgd2l0aGluIHRob3NlIGNvbnRhaW5lcnMuXG4gICAgICAgKlxuICAgICAgICogQXMgYW4gYWRkZWQgYm9udXMsIFdlYktpdCBoYXMgc29tZSB0cm91YmxlcyB3aXRoXG4gICAgICAgKiBzY3JvbGwtc25hcC1zdG9wOiBhbHdheXMsIHNvIG5vdCByZW5kZXJpbmcgYWxsIG9mXG4gICAgICAgKiB0aGUgbW9udGhzIGluIGEgcm93IGFsbG93cyB1cyB0byBtb3N0bHkgc2lkZXN0ZXBcbiAgICAgICAqIHRoYXQgaXNzdWUuXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IG1vbnRocyA9IGNhbGVuZGFyQm9keVJlZi5xdWVyeVNlbGVjdG9yQWxsKCcuY2FsZW5kYXItbW9udGgnKTtcbiAgICAgIGNvbnN0IHN0YXJ0TW9udGggPSBtb250aHNbMF07XG4gICAgICBjb25zdCB3b3JraW5nTW9udGggPSBtb250aHNbMV07XG4gICAgICBjb25zdCBlbmRNb250aCA9IG1vbnRoc1syXTtcbiAgICAgIGNvbnN0IG1vZGUgPSBnZXRJb25Nb2RlKHRoaXMpO1xuICAgICAgY29uc3QgbmVlZHNpT1NSdWJiZXJCYW5kRml4ID0gbW9kZSA9PT0gJ2lvcycgJiYgdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMTtcbiAgICAgIC8qKlxuICAgICAgICogQmVmb3JlIHNldHRpbmcgdXAgdGhlIHNjcm9sbCBsaXN0ZW5lcixcbiAgICAgICAqIHNjcm9sbCB0aGUgbWlkZGxlIG1vbnRoIGludG8gdmlldy5cbiAgICAgICAqIHNjcm9sbEludG9WaWV3KCkgd2lsbCBzY3JvbGwgZW50aXJlIHBhZ2VcbiAgICAgICAqIGlmIGVsZW1lbnQgaXMgbm90IGluIHZpZXdwb3J0LiBVc2Ugc2Nyb2xsTGVmdCBpbnN0ZWFkLlxuICAgICAgICovXG4gICAgICB3cml0ZVRhc2soKCkgPT4ge1xuICAgICAgICBjYWxlbmRhckJvZHlSZWYuc2Nyb2xsTGVmdCA9IHN0YXJ0TW9udGguY2xpZW50V2lkdGggKiAoaXNSVEwodGhpcy5lbCkgPyAtMSA6IDEpO1xuICAgICAgICBjb25zdCBnZXRDaGFuZ2VkTW9udGggPSBwYXJ0cyA9PiB7XG4gICAgICAgICAgY29uc3QgYm94ID0gY2FsZW5kYXJCb2R5UmVmLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIElmIHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiBpcyBhbGwgdGhlIHdheSB0byB0aGUgbGVmdFxuICAgICAgICAgICAqIHRoZW4gd2UgaGF2ZSBzY3JvbGxlZCB0byB0aGUgcHJldmlvdXMgbW9udGguXG4gICAgICAgICAgICogT3RoZXJ3aXNlLCBhc3N1bWUgdGhhdCB3ZSBoYXZlIHNjcm9sbGVkIHRvIHRoZSBuZXh0XG4gICAgICAgICAgICogbW9udGguIFdlIGhhdmUgYSB0b2xlcmFuY2Ugb2YgMnB4IHRvIGFjY291bnQgZm9yXG4gICAgICAgICAgICogc3ViIHBpeGVsIHJlbmRlcmluZy5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIENoZWNrIGJlbG93IHRoZSBuZXh0IGxpbmUgZW5zdXJlcyB0aGF0IHdlIGRpZCBub3RcbiAgICAgICAgICAgKiBzd2lwZSBhbmQgYWJvcnQgKGkuZS4gd2Ugc3dpcGVkIGJ1dCB3ZSBhcmUgc3RpbGwgb24gdGhlIGN1cnJlbnQgbW9udGgpLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIGNvbnN0IGNvbmRpdGlvbiA9IGlzUlRMKHRoaXMuZWwpID8gY2FsZW5kYXJCb2R5UmVmLnNjcm9sbExlZnQgPj0gLTIgOiBjYWxlbmRhckJvZHlSZWYuc2Nyb2xsTGVmdCA8PSAyO1xuICAgICAgICAgIGNvbnN0IG1vbnRoID0gY29uZGl0aW9uID8gc3RhcnRNb250aCA6IGVuZE1vbnRoO1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFRoZSBlZGdlIG9mIHRoZSBtb250aCBtdXN0IGJlIGxpbmVkIHVwIHdpdGhcbiAgICAgICAgICAgKiB0aGUgZWRnZSBvZiB0aGUgY2FsZW5kYXIgYm9keSBpbiBvcmRlciBmb3JcbiAgICAgICAgICAgKiB0aGUgY29tcG9uZW50IHRvIHVwZGF0ZS4gT3RoZXJ3aXNlLCBpdFxuICAgICAgICAgICAqIG1heSBiZSB0aGUgY2FzZSB0aGF0IHRoZSB1c2VyIGhhcyBwYXVzZWQgdGhlaXJcbiAgICAgICAgICAgKiBzd2lwZSBvciB0aGUgYnJvd3NlciBoYXMgbm90IGZpbmlzaGVkIHNuYXBwaW5nIHlldC5cbiAgICAgICAgICAgKiBSYXRoZXIgdGhhbiBjaGVjayBpZiB0aGUgeCB2YWx1ZXMgYXJlIGVxdWFsLFxuICAgICAgICAgICAqIHdlIGdpdmUgaXQgYSB0b2xlcmFuY2Ugb2YgMnB4IHRvIGFjY291bnQgZm9yXG4gICAgICAgICAgICogc3ViIHBpeGVsIHJlbmRlcmluZy5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBjb25zdCBtb250aEJveCA9IG1vbnRoLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIGlmIChNYXRoLmFicyhtb250aEJveC54IC0gYm94LngpID4gMikgcmV0dXJuO1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIElmIHdlJ3JlIGZvcmNlLXJlbmRlcmluZyBhIG1vbnRoLCBhc3N1bWUgd2UndmVcbiAgICAgICAgICAgKiBzY3JvbGxlZCB0byB0aGF0IGFuZCByZXR1cm4gaXQuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBJZiBmb3JjZVJlbmRlckRhdGUgaXMgZXZlciB1c2VkIGluIGEgY29udGV4dCB3aGVyZSB0aGVcbiAgICAgICAgICAgKiBmb3JjZWQgbW9udGggaXMgbm90IGltbWVkaWF0ZWx5IGF1dG8tc2Nyb2xsZWQgdG8sIHRoaXNcbiAgICAgICAgICAgKiBzaG91bGQgYmUgdXBkYXRlZCB0byBhbHNvIGNoZWNrIHdoZXRoZXIgYG1vbnRoYCBoYXMgdGhlXG4gICAgICAgICAgICogc2FtZSBtb250aCBhbmQgeWVhciBhcyB0aGUgZm9yY2VkIGRhdGUuXG4gICAgICAgICAgICovXG4gICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgZm9yY2VSZW5kZXJEYXRlXG4gICAgICAgICAgfSA9IHRoaXM7XG4gICAgICAgICAgaWYgKGZvcmNlUmVuZGVyRGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBtb250aDogZm9yY2VSZW5kZXJEYXRlLm1vbnRoLFxuICAgICAgICAgICAgICB5ZWFyOiBmb3JjZVJlbmRlckRhdGUueWVhcixcbiAgICAgICAgICAgICAgZGF5OiBmb3JjZVJlbmRlckRhdGUuZGF5XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBGcm9tIGhlcmUsIHdlIGNhbiBkZXRlcm1pbmUgaWYgdGhlIHN0YXJ0XG4gICAgICAgICAgICogbW9udGggb3IgdGhlIGVuZCBtb250aCB3YXMgc2Nyb2xsZWQgaW50byB2aWV3LlxuICAgICAgICAgICAqIElmIG5vIG1vbnRoIHdhcyBjaGFuZ2VkLCB0aGVuIHdlIGNhbiByZXR1cm4gZnJvbVxuICAgICAgICAgICAqIHRoZSBzY3JvbGwgY2FsbGJhY2sgZWFybHkuXG4gICAgICAgICAgICovXG4gICAgICAgICAgaWYgKG1vbnRoID09PSBzdGFydE1vbnRoKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0UHJldmlvdXNNb250aChwYXJ0cyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChtb250aCA9PT0gZW5kTW9udGgpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXROZXh0TW9udGgocGFydHMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCB1cGRhdGVBY3RpdmVNb250aCA9ICgpID0+IHtcbiAgICAgICAgICBpZiAobmVlZHNpT1NSdWJiZXJCYW5kRml4KSB7XG4gICAgICAgICAgICBjYWxlbmRhckJvZHlSZWYuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BvaW50ZXItZXZlbnRzJyk7XG4gICAgICAgICAgICBhcHBsaWVkaU9TUnViYmVyQmFuZEZpeCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBJZiB0aGUgbW9udGggZGlkIG5vdCBjaGFuZ2VcbiAgICAgICAgICAgKiB0aGVuIHdlIGNhbiByZXR1cm4gZWFybHkuXG4gICAgICAgICAgICovXG4gICAgICAgICAgY29uc3QgbmV3RGF0ZSA9IGdldENoYW5nZWRNb250aCh0aGlzLndvcmtpbmdQYXJ0cyk7XG4gICAgICAgICAgaWYgKCFuZXdEYXRlKSByZXR1cm47XG4gICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgbW9udGgsXG4gICAgICAgICAgICBkYXksXG4gICAgICAgICAgICB5ZWFyXG4gICAgICAgICAgfSA9IG5ld0RhdGU7XG4gICAgICAgICAgaWYgKGlzTW9udGhEaXNhYmxlZCh7XG4gICAgICAgICAgICBtb250aCxcbiAgICAgICAgICAgIHllYXIsXG4gICAgICAgICAgICBkYXk6IG51bGxcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBtaW5QYXJ0czogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzLm1pblBhcnRzKSwge1xuICAgICAgICAgICAgICBkYXk6IG51bGxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgbWF4UGFydHM6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5tYXhQYXJ0cyksIHtcbiAgICAgICAgICAgICAgZGF5OiBudWxsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFByZXZlbnQgc2Nyb2xsaW5nIGZvciBvdGhlciBicm93c2Vyc1xuICAgICAgICAgICAqIHRvIGdpdmUgdGhlIERPTSB0aW1lIHRvIHVwZGF0ZSBhbmQgdGhlIGNvbnRhaW5lclxuICAgICAgICAgICAqIHRpbWUgdG8gcHJvcGVybHkgc25hcC5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBjYWxlbmRhckJvZHlSZWYuc3R5bGUuc2V0UHJvcGVydHkoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFVzZSBhIHdyaXRlVGFzayBoZXJlIHRvIGVuc3VyZVxuICAgICAgICAgICAqIHRoYXQgdGhlIHN0YXRlIGlzIHVwZGF0ZWQgYW5kIHRoZVxuICAgICAgICAgICAqIGNvcnJlY3QgbW9udGggaXMgc2Nyb2xsZWQgaW50byB2aWV3XG4gICAgICAgICAgICogaW4gdGhlIHNhbWUgZnJhbWUuIFRoaXMgaXMgbm90XG4gICAgICAgICAgICogdHlwaWNhbGx5IGEgcHJvYmxlbSBvbiBuZXdlciBkZXZpY2VzXG4gICAgICAgICAgICogYnV0IG9sZGVyL3Nsb3dlciBkZXZpY2UgbWF5IGhhdmUgYSBmbGlja2VyXG4gICAgICAgICAgICogaWYgd2UgZGlkIG5vdCBkbyB0aGlzLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIHdyaXRlVGFzaygoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFdvcmtpbmdQYXJ0cyhPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMud29ya2luZ1BhcnRzKSwge1xuICAgICAgICAgICAgICBtb250aCxcbiAgICAgICAgICAgICAgZGF5OiBkYXksXG4gICAgICAgICAgICAgIHllYXJcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIGNhbGVuZGFyQm9keVJlZi5zY3JvbGxMZWZ0ID0gd29ya2luZ01vbnRoLmNsaWVudFdpZHRoICogKGlzUlRMKHRoaXMuZWwpID8gLTEgOiAxKTtcbiAgICAgICAgICAgIGNhbGVuZGFyQm9keVJlZi5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnb3ZlcmZsb3cnKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlc29sdmVGb3JjZURhdGVTY3JvbGxpbmcpIHtcbiAgICAgICAgICAgICAgdGhpcy5yZXNvbHZlRm9yY2VEYXRlU2Nyb2xsaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaGVuIHRoZSBjb250YWluZXIgZmluaXNoZXMgc2Nyb2xsaW5nIHdlXG4gICAgICAgICAqIG5lZWQgdG8gdXBkYXRlIHRoZSBET00gd2l0aCB0aGUgc2VsZWN0ZWQgbW9udGguXG4gICAgICAgICAqL1xuICAgICAgICBsZXQgc2Nyb2xsVGltZW91dDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdlIGRvIG5vdCB3YW50IHRvIGF0dGVtcHQgdG8gc2V0IHBvaW50ZXItZXZlbnRzXG4gICAgICAgICAqIG11bHRpcGxlIHRpbWVzIHdpdGhpbiBhIHNpbmdsZSBzd2lwZSBnZXN0dXJlIGFzXG4gICAgICAgICAqIHRoYXQgYWRkcyB1bm5lY2Vzc2FyeSB3b3JrIHRvIHRoZSBtYWluIHRocmVhZC5cbiAgICAgICAgICovXG4gICAgICAgIGxldCBhcHBsaWVkaU9TUnViYmVyQmFuZEZpeCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBzY3JvbGxDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICBpZiAoc2Nyb2xsVGltZW91dCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHNjcm9sbFRpbWVvdXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBPbiBpT1MgaXQgaXMgcG9zc2libGUgdG8gcXVpY2tseSBydWJiZXIgYmFuZFxuICAgICAgICAgICAqIHRoZSBzY3JvbGwgYXJlYSBiZWZvcmUgdGhlIHNjcm9sbCB0aW1lb3V0IGhhcyBmaXJlZC5cbiAgICAgICAgICAgKiBUaGlzIHJlc3VsdHMgaW4gdXNlcnMgcmVhY2hpbmcgdGhlIGVuZCBvZiB0aGUgc2Nyb2xsYWJsZVxuICAgICAgICAgICAqIGNvbnRhaW5lciBiZWZvcmUgdGhlIERPTSBoYXMgdXBkYXRlZC5cbiAgICAgICAgICAgKiBCeSBzZXR0aW5nIGBwb2ludGVyLWV2ZW50czogbm9uZWAgd2UgY2FuIGVuc3VyZSB0aGF0XG4gICAgICAgICAgICogc3Vic2VxdWVudCBzd2lwZXMgZG8gbm90IGhhcHBlbiB3aGlsZSB0aGUgY29udGFpbmVyXG4gICAgICAgICAgICogaXMgc25hcHBpbmcuXG4gICAgICAgICAgICovXG4gICAgICAgICAgaWYgKCFhcHBsaWVkaU9TUnViYmVyQmFuZEZpeCAmJiBuZWVkc2lPU1J1YmJlckJhbmRGaXgpIHtcbiAgICAgICAgICAgIGNhbGVuZGFyQm9keVJlZi5zdHlsZS5zZXRQcm9wZXJ0eSgncG9pbnRlci1ldmVudHMnLCAnbm9uZScpO1xuICAgICAgICAgICAgYXBwbGllZGlPU1J1YmJlckJhbmRGaXggPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBXYWl0IH4zIGZyYW1lc1xuICAgICAgICAgIHNjcm9sbFRpbWVvdXQgPSBzZXRUaW1lb3V0KHVwZGF0ZUFjdGl2ZU1vbnRoLCA1MCk7XG4gICAgICAgIH07XG4gICAgICAgIGNhbGVuZGFyQm9keVJlZi5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxDYWxsYmFjayk7XG4gICAgICAgIHRoaXMuZGVzdHJveUNhbGVuZGFyTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICAgICAgY2FsZW5kYXJCb2R5UmVmLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbENhbGxiYWNrKTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2xlYW4gdXAgYWxsIGxpc3RlbmVycyBleGNlcHQgZm9yIHRoZSBvdmVybGF5XG4gICAgICogbGlzdGVuZXIuIFRoaXMgaXMgc28gdGhhdCB3ZSBjYW4gcmUtY3JlYXRlIHRoZSBsaXN0ZW5lcnNcbiAgICAgKiBpZiB0aGUgZGF0ZXRpbWUgaGFzIGJlZW4gaGlkZGVuL3ByZXNlbnRlZCBieSBhIG1vZGFsIG9yIHBvcG92ZXIuXG4gICAgICovXG4gICAgdGhpcy5kZXN0cm95SW50ZXJhY3Rpb25MaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGRlc3Ryb3lDYWxlbmRhckxpc3RlbmVyLFxuICAgICAgICBkZXN0cm95S2V5Ym9hcmRNT1xuICAgICAgfSA9IHRoaXM7XG4gICAgICBpZiAoZGVzdHJveUNhbGVuZGFyTGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBkZXN0cm95Q2FsZW5kYXJMaXN0ZW5lcigpO1xuICAgICAgfVxuICAgICAgaWYgKGRlc3Ryb3lLZXlib2FyZE1PICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZGVzdHJveUtleWJvYXJkTU8oKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMucHJvY2Vzc1ZhbHVlID0gdmFsdWUgPT4ge1xuICAgICAgY29uc3QgaGFzVmFsdWUgPSB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSAnJyAmJiAoIUFycmF5LmlzQXJyYXkodmFsdWUpIHx8IHZhbHVlLmxlbmd0aCA+IDApO1xuICAgICAgY29uc3QgdmFsdWVUb1Byb2Nlc3MgPSBoYXNWYWx1ZSA/IHBhcnNlRGF0ZSh2YWx1ZSkgOiB0aGlzLmRlZmF1bHRQYXJ0cztcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgbWluUGFydHMsXG4gICAgICAgIG1heFBhcnRzLFxuICAgICAgICB3b3JraW5nUGFydHMsXG4gICAgICAgIGVsXG4gICAgICB9ID0gdGhpcztcbiAgICAgIHRoaXMud2FybklmSW5jb3JyZWN0VmFsdWVVc2FnZSgpO1xuICAgICAgLyoqXG4gICAgICAgKiBSZXR1cm4gZWFybHkgaWYgdGhlIHZhbHVlIHdhc24ndCBwYXJzZWQgY29ycmVjdGx5LCBzdWNoIGFzXG4gICAgICAgKiBpZiBhbiBpbXByb3Blcmx5IGZvcm1hdHRlZCBkYXRlIHN0cmluZyB3YXMgcHJvdmlkZWQuXG4gICAgICAgKi9cbiAgICAgIGlmICghdmFsdWVUb1Byb2Nlc3MpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBEYXRldGltZSBzaG91bGQgb25seSB3YXJuIG9mIG91dCBvZiBib3VuZHMgdmFsdWVzXG4gICAgICAgKiBpZiBzZXQgYnkgdGhlIHVzZXIuIElmIHRoZSBgdmFsdWVgIGlzIHVuZGVmaW5lZCxcbiAgICAgICAqIHdlIHdpbGwgZGVmYXVsdCB0byB0b2RheSdzIGRhdGUgd2hpY2ggbWF5IGJlIG91dFxuICAgICAgICogb2YgYm91bmRzLiBJbiB0aGlzIGNhc2UsIHRoZSB3YXJuaW5nIG1ha2VzIGl0IGxvb2tcbiAgICAgICAqIGxpa2UgdGhlIGRldmVsb3BlciBkaWQgc29tZXRoaW5nIHdyb25nIHdoaWNoIGlzXG4gICAgICAgKiBub3QgdHJ1ZS5cbiAgICAgICAqL1xuICAgICAgaWYgKGhhc1ZhbHVlKSB7XG4gICAgICAgIHdhcm5JZlZhbHVlT3V0T2ZCb3VuZHModmFsdWVUb1Byb2Nlc3MsIG1pblBhcnRzLCBtYXhQYXJ0cyk7XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIElmIHRoZXJlIGFyZSBtdWx0aXBsZSB2YWx1ZXMsIGNsYW1wIHRvIHRoZSBsYXN0IG9uZS5cbiAgICAgICAqIFRoaXMgaXMgYmVjYXVzZSB0aGUgbGFzdCB2YWx1ZSBpcyB0aGUgb25lIHRoYXQgdGhlIHVzZXJcbiAgICAgICAqIGhhcyBtb3N0IHJlY2VudGx5IGludGVyYWN0ZWQgd2l0aC5cbiAgICAgICAqL1xuICAgICAgY29uc3Qgc2luZ2xlVmFsdWUgPSBBcnJheS5pc0FycmF5KHZhbHVlVG9Qcm9jZXNzKSA/IHZhbHVlVG9Qcm9jZXNzW3ZhbHVlVG9Qcm9jZXNzLmxlbmd0aCAtIDFdIDogdmFsdWVUb1Byb2Nlc3M7XG4gICAgICBjb25zdCB0YXJnZXRWYWx1ZSA9IGNsYW1wRGF0ZShzaW5nbGVWYWx1ZSwgbWluUGFydHMsIG1heFBhcnRzKTtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgbW9udGgsXG4gICAgICAgIGRheSxcbiAgICAgICAgeWVhcixcbiAgICAgICAgaG91cixcbiAgICAgICAgbWludXRlXG4gICAgICB9ID0gdGFyZ2V0VmFsdWU7XG4gICAgICBjb25zdCBhbXBtID0gcGFyc2VBbVBtKGhvdXIpO1xuICAgICAgLyoqXG4gICAgICAgKiBTaW5jZSBgYWN0aXZlUGFydHNgIGluZGljYXRlcyBhIHZhbHVlIHRoYXQgYmVlbiBleHBsaWNpdGx5IHNlbGVjdGVkXG4gICAgICAgKiBlaXRoZXIgYnkgdGhlIHVzZXIgb3IgdGhlIGFwcCwgb25seSB1cGRhdGUgYGFjdGl2ZVBhcnRzYCBpZiB0aGVcbiAgICAgICAqIGB2YWx1ZWAgcHJvcGVydHkgaXMgc2V0LlxuICAgICAgICovXG4gICAgICBpZiAoaGFzVmFsdWUpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWVUb1Byb2Nlc3MpKSB7XG4gICAgICAgICAgdGhpcy5hY3RpdmVQYXJ0cyA9IFsuLi52YWx1ZVRvUHJvY2Vzc107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5hY3RpdmVQYXJ0cyA9IHtcbiAgICAgICAgICAgIG1vbnRoLFxuICAgICAgICAgICAgZGF5LFxuICAgICAgICAgICAgeWVhcixcbiAgICAgICAgICAgIGhvdXIsXG4gICAgICAgICAgICBtaW51dGUsXG4gICAgICAgICAgICBhbXBtXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlc2V0IHRoZSBhY3RpdmUgcGFydHMgaWYgdGhlIHZhbHVlIGlzIG5vdCBzZXQuXG4gICAgICAgICAqIFRoaXMgd2lsbCBjbGVhciB0aGUgc2VsZWN0ZWQgY2FsZW5kYXIgZGF5IHdoZW5cbiAgICAgICAgICogcGVyZm9ybWluZyBhIGNsZWFyIGFjdGlvbiBvciB1c2luZyB0aGUgcmVzZXQoKSBtZXRob2QuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmFjdGl2ZVBhcnRzID0gW107XG4gICAgICB9XG4gICAgICBjb25zdCBkaWRDaGFuZ2VNb250aCA9IG1vbnRoICE9PSB1bmRlZmluZWQgJiYgbW9udGggIT09IHdvcmtpbmdQYXJ0cy5tb250aCB8fCB5ZWFyICE9PSB1bmRlZmluZWQgJiYgeWVhciAhPT0gd29ya2luZ1BhcnRzLnllYXI7XG4gICAgICBjb25zdCBib2R5SXNWaXNpYmxlID0gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdkYXRldGltZS1yZWFkeScpO1xuICAgICAgY29uc3Qge1xuICAgICAgICBpc0dyaWRTdHlsZSxcbiAgICAgICAgc2hvd01vbnRoQW5kWWVhclxuICAgICAgfSA9IHRoaXM7XG4gICAgICBpZiAoaXNHcmlkU3R5bGUgJiYgZGlkQ2hhbmdlTW9udGggJiYgYm9keUlzVmlzaWJsZSAmJiAhc2hvd01vbnRoQW5kWWVhcikge1xuICAgICAgICAvKipcbiAgICAgICAgICogT25seSBhbmltYXRlIGlmOlxuICAgICAgICAgKiAxLiBXZSdyZSB1c2luZyBncmlkIHN0eWxlICh3aGVlbCBzdHlsZSBwaWNrZXJzIHNob3VsZCBqdXN0IGp1bXAgdG8gbmV3IHZhbHVlKVxuICAgICAgICAgKiAyLiBUaGUgbW9udGggYW5kL29yIHllYXIgYWN0dWFsbHkgY2hhbmdlZCwgYW5kIGJvdGggYXJlIGRlZmluZWQgKG90aGVyd2lzZSB0aGVyZSdzIG5vdGhpbmcgdG8gYW5pbWF0ZSB0bylcbiAgICAgICAgICogMy4gVGhlIGNhbGVuZGFyIGJvZHkgaXMgdmlzaWJsZSAocHJldmVudHMgYW5pbWF0aW9uIHdoZW4gaW4gY29sbGFwc2VkIGRhdGV0aW1lLWJ1dHRvbiwgZm9yIGV4YW1wbGUpXG4gICAgICAgICAqIDQuIFRoZSBtb250aC95ZWFyIHBpY2tlciBpcyBub3Qgb3BlbiAoc2luY2UgeW91IHdvdWxkbid0IHNlZSB0aGUgYW5pbWF0aW9uIGFueXdheSlcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYW5pbWF0ZVRvRGF0ZSh0YXJnZXRWYWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFdvcmtpbmdQYXJ0cyh7XG4gICAgICAgICAgbW9udGgsXG4gICAgICAgICAgZGF5LFxuICAgICAgICAgIHllYXIsXG4gICAgICAgICAgaG91cixcbiAgICAgICAgICBtaW51dGUsXG4gICAgICAgICAgYW1wbVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuYW5pbWF0ZVRvRGF0ZSA9IGFzeW5jIHRhcmdldFZhbHVlID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgd29ya2luZ1BhcnRzXG4gICAgICB9ID0gdGhpcztcbiAgICAgIC8qKlxuICAgICAgICogVGVsbCBvdGhlciByZW5kZXIgZnVuY3Rpb25zIHRoYXQgd2UgbmVlZCB0byBmb3JjZSB0aGVcbiAgICAgICAqIHRhcmdldCBtb250aCB0byBhcHBlYXIgaW4gcGxhY2Ugb2YgdGhlIGFjdHVhbCBuZXh0L3ByZXYgbW9udGguXG4gICAgICAgKiBCZWNhdXNlIHRoaXMgaXMgYSBTdGF0ZSB2YXJpYWJsZSwgYSByZXJlbmRlciB3aWxsIGJlIHRyaWdnZXJlZFxuICAgICAgICogYXV0b21hdGljYWxseSwgdXBkYXRpbmcgdGhlIHJlbmRlcmVkIG1vbnRocy5cbiAgICAgICAqL1xuICAgICAgdGhpcy5mb3JjZVJlbmRlckRhdGUgPSB0YXJnZXRWYWx1ZTtcbiAgICAgIC8qKlxuICAgICAgICogRmxhZyB0aGF0IHdlJ3ZlIHN0YXJ0ZWQgc2Nyb2xsaW5nIHRvIHRoZSBmb3JjZWQgZGF0ZS5cbiAgICAgICAqIFRoZSByZXNvbHZlIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIGJ5IHRoZSBkYXRldGltZSdzXG4gICAgICAgKiBzY3JvbGwgbGlzdGVuZXIgd2hlbiBpdCdzIGRvbmUgdXBkYXRpbmcgZXZlcnl0aGluZy5cbiAgICAgICAqIFRoaXMgaXMgYSByZXBsYWNlbWVudCBmb3IgbWFraW5nIHByZXYvbmV4dE1vbnRoIGFzeW5jLFxuICAgICAgICogc2luY2UgdGhlIGxvZ2ljIHdlJ3JlIHdhaXRpbmcgb24gaXMgaW4gYSBsaXN0ZW5lci5cbiAgICAgICAqL1xuICAgICAgY29uc3QgZm9yY2VEYXRlU2Nyb2xsaW5nUHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICB0aGlzLnJlc29sdmVGb3JjZURhdGVTY3JvbGxpbmcgPSByZXNvbHZlO1xuICAgICAgfSk7XG4gICAgICAvKipcbiAgICAgICAqIEFuaW1hdGUgc21vb3RobHkgdG8gdGhlIGZvcmNlZCBtb250aC4gVGhpcyB3aWxsIGFsc28gdXBkYXRlXG4gICAgICAgKiB3b3JraW5nUGFydHMgYW5kIGNvcnJlY3QgdGhlIHN1cnJvdW5kaW5nIG1vbnRocyBmb3IgdXMuXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IHRhcmdldE1vbnRoSXNCZWZvcmUgPSBpc0JlZm9yZSh0YXJnZXRWYWx1ZSwgd29ya2luZ1BhcnRzKTtcbiAgICAgIHRhcmdldE1vbnRoSXNCZWZvcmUgPyB0aGlzLnByZXZNb250aCgpIDogdGhpcy5uZXh0TW9udGgoKTtcbiAgICAgIGF3YWl0IGZvcmNlRGF0ZVNjcm9sbGluZ1Byb21pc2U7XG4gICAgICB0aGlzLnJlc29sdmVGb3JjZURhdGVTY3JvbGxpbmcgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmZvcmNlUmVuZGVyRGF0ZSA9IHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIHRoaXMub25Gb2N1cyA9ICgpID0+IHtcbiAgICAgIHRoaXMuaW9uRm9jdXMuZW1pdCgpO1xuICAgIH07XG4gICAgdGhpcy5vbkJsdXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLmlvbkJsdXIuZW1pdCgpO1xuICAgIH07XG4gICAgdGhpcy5oYXNWYWx1ZSA9ICgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlICE9IG51bGw7XG4gICAgfTtcbiAgICB0aGlzLm5leHRNb250aCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGNhbGVuZGFyQm9keVJlZiA9IHRoaXMuY2FsZW5kYXJCb2R5UmVmO1xuICAgICAgaWYgKCFjYWxlbmRhckJvZHlSZWYpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgbmV4dE1vbnRoID0gY2FsZW5kYXJCb2R5UmVmLnF1ZXJ5U2VsZWN0b3IoJy5jYWxlbmRhci1tb250aDpsYXN0LW9mLXR5cGUnKTtcbiAgICAgIGlmICghbmV4dE1vbnRoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGxlZnQgPSBuZXh0TW9udGgub2Zmc2V0V2lkdGggKiAyO1xuICAgICAgY2FsZW5kYXJCb2R5UmVmLnNjcm9sbFRvKHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiBsZWZ0ICogKGlzUlRMKHRoaXMuZWwpID8gLTEgOiAxKSxcbiAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICB9KTtcbiAgICB9O1xuICAgIHRoaXMucHJldk1vbnRoID0gKCkgPT4ge1xuICAgICAgY29uc3QgY2FsZW5kYXJCb2R5UmVmID0gdGhpcy5jYWxlbmRhckJvZHlSZWY7XG4gICAgICBpZiAoIWNhbGVuZGFyQm9keVJlZikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBwcmV2TW9udGggPSBjYWxlbmRhckJvZHlSZWYucXVlcnlTZWxlY3RvcignLmNhbGVuZGFyLW1vbnRoOmZpcnN0LW9mLXR5cGUnKTtcbiAgICAgIGlmICghcHJldk1vbnRoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNhbGVuZGFyQm9keVJlZi5zY3JvbGxUbyh7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICB9KTtcbiAgICB9O1xuICAgIHRoaXMudG9nZ2xlTW9udGhBbmRZZWFyVmlldyA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2hvd01vbnRoQW5kWWVhciA9ICF0aGlzLnNob3dNb250aEFuZFllYXI7XG4gICAgfTtcbiAgfVxuICBmb3JtYXRPcHRpb25zQ2hhbmdlZCgpIHtcbiAgICBjb25zdCB7XG4gICAgICBlbCxcbiAgICAgIGZvcm1hdE9wdGlvbnMsXG4gICAgICBwcmVzZW50YXRpb25cbiAgICB9ID0gdGhpcztcbiAgICBjaGVja0ZvclByZXNlbnRhdGlvbkZvcm1hdE1pc21hdGNoKGVsLCBwcmVzZW50YXRpb24sIGZvcm1hdE9wdGlvbnMpO1xuICAgIHdhcm5JZlRpbWVab25lUHJvdmlkZWQoZWwsIGZvcm1hdE9wdGlvbnMpO1xuICB9XG4gIGRpc2FibGVkQ2hhbmdlZCgpIHtcbiAgICB0aGlzLmVtaXRTdHlsZSgpO1xuICB9XG4gIG1pbkNoYW5nZWQoKSB7XG4gICAgdGhpcy5wcm9jZXNzTWluUGFydHMoKTtcbiAgfVxuICBtYXhDaGFuZ2VkKCkge1xuICAgIHRoaXMucHJvY2Vzc01heFBhcnRzKCk7XG4gIH1cbiAgcHJlc2VudGF0aW9uQ2hhbmdlZCgpIHtcbiAgICBjb25zdCB7XG4gICAgICBlbCxcbiAgICAgIGZvcm1hdE9wdGlvbnMsXG4gICAgICBwcmVzZW50YXRpb25cbiAgICB9ID0gdGhpcztcbiAgICBjaGVja0ZvclByZXNlbnRhdGlvbkZvcm1hdE1pc21hdGNoKGVsLCBwcmVzZW50YXRpb24sIGZvcm1hdE9wdGlvbnMpO1xuICB9XG4gIGdldCBpc0dyaWRTdHlsZSgpIHtcbiAgICBjb25zdCB7XG4gICAgICBwcmVzZW50YXRpb24sXG4gICAgICBwcmVmZXJXaGVlbFxuICAgIH0gPSB0aGlzO1xuICAgIGNvbnN0IGhhc0RhdGVQcmVzZW50YXRpb24gPSBwcmVzZW50YXRpb24gPT09ICdkYXRlJyB8fCBwcmVzZW50YXRpb24gPT09ICdkYXRlLXRpbWUnIHx8IHByZXNlbnRhdGlvbiA9PT0gJ3RpbWUtZGF0ZSc7XG4gICAgcmV0dXJuIGhhc0RhdGVQcmVzZW50YXRpb24gJiYgIXByZWZlcldoZWVsO1xuICB9XG4gIHllYXJWYWx1ZXNDaGFuZ2VkKCkge1xuICAgIHRoaXMucGFyc2VkWWVhclZhbHVlcyA9IGNvbnZlcnRUb0FycmF5T2ZOdW1iZXJzKHRoaXMueWVhclZhbHVlcyk7XG4gIH1cbiAgbW9udGhWYWx1ZXNDaGFuZ2VkKCkge1xuICAgIHRoaXMucGFyc2VkTW9udGhWYWx1ZXMgPSBjb252ZXJ0VG9BcnJheU9mTnVtYmVycyh0aGlzLm1vbnRoVmFsdWVzKTtcbiAgfVxuICBkYXlWYWx1ZXNDaGFuZ2VkKCkge1xuICAgIHRoaXMucGFyc2VkRGF5VmFsdWVzID0gY29udmVydFRvQXJyYXlPZk51bWJlcnModGhpcy5kYXlWYWx1ZXMpO1xuICB9XG4gIGhvdXJWYWx1ZXNDaGFuZ2VkKCkge1xuICAgIHRoaXMucGFyc2VkSG91clZhbHVlcyA9IGNvbnZlcnRUb0FycmF5T2ZOdW1iZXJzKHRoaXMuaG91clZhbHVlcyk7XG4gIH1cbiAgbWludXRlVmFsdWVzQ2hhbmdlZCgpIHtcbiAgICB0aGlzLnBhcnNlZE1pbnV0ZVZhbHVlcyA9IGNvbnZlcnRUb0FycmF5T2ZOdW1iZXJzKHRoaXMubWludXRlVmFsdWVzKTtcbiAgfVxuICAvKipcbiAgICogVXBkYXRlIHRoZSBkYXRldGltZSB2YWx1ZSB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzXG4gICAqL1xuICBhc3luYyB2YWx1ZUNoYW5nZWQoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdmFsdWVcbiAgICB9ID0gdGhpcztcbiAgICBpZiAodGhpcy5oYXNWYWx1ZSgpKSB7XG4gICAgICB0aGlzLnByb2Nlc3NWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuICAgIHRoaXMuZW1pdFN0eWxlKCk7XG4gICAgdGhpcy5pb25WYWx1ZUNoYW5nZS5lbWl0KHtcbiAgICAgIHZhbHVlXG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIENvbmZpcm1zIHRoZSBzZWxlY3RlZCBkYXRldGltZSB2YWx1ZSwgdXBkYXRlcyB0aGVcbiAgICogYHZhbHVlYCBwcm9wZXJ0eSwgYW5kIG9wdGlvbmFsbHkgY2xvc2VzIHRoZSBwb3BvdmVyXG4gICAqIG9yIG1vZGFsIHRoYXQgdGhlIGRhdGV0aW1lIHdhcyBwcmVzZW50ZWQgaW4uXG4gICAqXG4gICAqIEBwYXJhbSBjbG9zZU92ZXJsYXkgSWYgYHRydWVgLCBjbG9zZXMgdGhlIHBhcmVudCBvdmVybGF5LiBEZWZhdWx0cyB0byBgZmFsc2VgLlxuICAgKi9cbiAgYXN5bmMgY29uZmlybShjbG9zZU92ZXJsYXkgPSBmYWxzZSkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlzQ2FsZW5kYXJQaWNrZXIsXG4gICAgICBhY3RpdmVQYXJ0cyxcbiAgICAgIHByZWZlcldoZWVsLFxuICAgICAgd29ya2luZ1BhcnRzXG4gICAgfSA9IHRoaXM7XG4gICAgLyoqXG4gICAgICogV2Ugb25seSB1cGRhdGUgdGhlIHZhbHVlIGlmIHRoZSBwcmVzZW50YXRpb24gaXMgbm90IGEgY2FsZW5kYXIgcGlja2VyLlxuICAgICAqL1xuICAgIGlmIChhY3RpdmVQYXJ0cyAhPT0gdW5kZWZpbmVkIHx8ICFpc0NhbGVuZGFyUGlja2VyKSB7XG4gICAgICBjb25zdCBhY3RpdmVQYXJ0c0lzQXJyYXkgPSBBcnJheS5pc0FycmF5KGFjdGl2ZVBhcnRzKTtcbiAgICAgIGlmIChhY3RpdmVQYXJ0c0lzQXJyYXkgJiYgYWN0aXZlUGFydHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGlmIChwcmVmZXJXaGVlbCkge1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIElmIHRoZSBkYXRldGltZSBpcyB1c2luZyBhIHdoZWVsIHBpY2tlciwgYnV0IHRoZVxuICAgICAgICAgICAqIGFjdGl2ZSBwYXJ0cyBhcmUgZW1wdHksIHRoZW4gdGhlIHVzZXIgaGFzIGNvbmZpcm1lZCB0aGVcbiAgICAgICAgICAgKiBpbml0aWFsIHZhbHVlICh3b3JraW5nIHBhcnRzKSBwcmVzZW50ZWQgdG8gdGhlbS5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICB0aGlzLnNldFZhbHVlKGNvbnZlcnREYXRhVG9JU08od29ya2luZ1BhcnRzKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRWYWx1ZSh1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFZhbHVlKGNvbnZlcnREYXRhVG9JU08oYWN0aXZlUGFydHMpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNsb3NlT3ZlcmxheSkge1xuICAgICAgdGhpcy5jbG9zZVBhcmVudE92ZXJsYXkoQ09ORklSTV9ST0xFKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFJlc2V0cyB0aGUgaW50ZXJuYWwgc3RhdGUgb2YgdGhlIGRhdGV0aW1lIGJ1dCBkb2VzIG5vdCB1cGRhdGUgdGhlIHZhbHVlLlxuICAgKiBQYXNzaW5nIGEgdmFsaWQgSVNPLTg2MDEgc3RyaW5nIHdpbGwgcmVzZXQgdGhlIHN0YXRlIG9mIHRoZSBjb21wb25lbnQgdG8gdGhlIHByb3ZpZGVkIGRhdGUuXG4gICAqIElmIG5vIHZhbHVlIGlzIHByb3ZpZGVkLCB0aGUgaW50ZXJuYWwgc3RhdGUgd2lsbCBiZSByZXNldCB0byB0aGUgY2xhbXBlZCB2YWx1ZSBvZiB0aGUgbWluLCBtYXggYW5kIHRvZGF5LlxuICAgKlxuICAgKiBAcGFyYW0gc3RhcnREYXRlIEEgdmFsaWQgW0lTTy04NjAxIHN0cmluZ10oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRGF0ZSNkYXRlX3RpbWVfc3RyaW5nX2Zvcm1hdCkgdG8gcmVzZXQgdGhlIGRhdGV0aW1lIHN0YXRlIHRvLlxuICAgKi9cbiAgYXN5bmMgcmVzZXQoc3RhcnREYXRlKSB7XG4gICAgdGhpcy5wcm9jZXNzVmFsdWUoc3RhcnREYXRlKTtcbiAgfVxuICAvKipcbiAgICogRW1pdHMgdGhlIGlvbkNhbmNlbCBldmVudCBhbmRcbiAgICogb3B0aW9uYWxseSBjbG9zZXMgdGhlIHBvcG92ZXJcbiAgICogb3IgbW9kYWwgdGhhdCB0aGUgZGF0ZXRpbWUgd2FzXG4gICAqIHByZXNlbnRlZCBpbi5cbiAgICpcbiAgICogQHBhcmFtIGNsb3NlT3ZlcmxheSBJZiBgdHJ1ZWAsIGNsb3NlcyB0aGUgcGFyZW50IG92ZXJsYXkuIERlZmF1bHRzIHRvIGBmYWxzZWAuXG4gICAqL1xuICBhc3luYyBjYW5jZWwoY2xvc2VPdmVybGF5ID0gZmFsc2UpIHtcbiAgICB0aGlzLmlvbkNhbmNlbC5lbWl0KCk7XG4gICAgaWYgKGNsb3NlT3ZlcmxheSkge1xuICAgICAgdGhpcy5jbG9zZVBhcmVudE92ZXJsYXkoQ0FOQ0VMX1JPTEUpO1xuICAgIH1cbiAgfVxuICBnZXQgaXNDYWxlbmRhclBpY2tlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBwcmVzZW50YXRpb25cbiAgICB9ID0gdGhpcztcbiAgICByZXR1cm4gcHJlc2VudGF0aW9uID09PSAnZGF0ZScgfHwgcHJlc2VudGF0aW9uID09PSAnZGF0ZS10aW1lJyB8fCBwcmVzZW50YXRpb24gPT09ICd0aW1lLWRhdGUnO1xuICB9XG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuY2xlYXJGb2N1c1Zpc2libGUgPSBzdGFydEZvY3VzVmlzaWJsZSh0aGlzLmVsKS5kZXN0cm95O1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGlmICh0aGlzLmNsZWFyRm9jdXNWaXNpYmxlKSB7XG4gICAgICB0aGlzLmNsZWFyRm9jdXNWaXNpYmxlKCk7XG4gICAgICB0aGlzLmNsZWFyRm9jdXNWaXNpYmxlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuICBpbml0aWFsaXplTGlzdGVuZXJzKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZUNhbGVuZGFyTGlzdGVuZXIoKTtcbiAgICB0aGlzLmluaXRpYWxpemVLZXlib2FyZExpc3RlbmVycygpO1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZWwsXG4gICAgICBpbnRlcnNlY3Rpb25UcmFja2VyUmVmXG4gICAgfSA9IHRoaXM7XG4gICAgLyoqXG4gICAgICogSWYgYSBzY3JvbGxhYmxlIGVsZW1lbnQgaXMgaGlkZGVuIHVzaW5nIGBkaXNwbGF5OiBub25lYCxcbiAgICAgKiBpdCB3aWxsIG5vdCBoYXZlIGEgc2Nyb2xsIGhlaWdodCBtZWFuaW5nIHdlIGNhbm5vdCBzY3JvbGwgZWxlbWVudHNcbiAgICAgKiBpbnRvIHZpZXcuIEFzIGEgcmVzdWx0LCB3ZSB3aWxsIG5lZWQgdG8gd2FpdCBmb3IgdGhlIGRhdGV0aW1lIHRvIGJlY29tZVxuICAgICAqIHZpc2libGUgaWYgdXNlZCBpbnNpZGUgb2YgYSBtb2RhbCBvciBhIHBvcG92ZXIgb3RoZXJ3aXNlIHRoZSBzY3JvbGxhYmxlXG4gICAgICogYXJlYXMgd2lsbCBub3QgaGF2ZSB0aGUgY29ycmVjdCB2YWx1ZXMgc25hcHBlZCBpbnRvIHBsYWNlLlxuICAgICAqL1xuICAgIGNvbnN0IHZpc2libGVDYWxsYmFjayA9IGVudHJpZXMgPT4ge1xuICAgICAgY29uc3QgZXYgPSBlbnRyaWVzWzBdO1xuICAgICAgaWYgKCFldi5pc0ludGVyc2VjdGluZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmluaXRpYWxpemVMaXN0ZW5lcnMoKTtcbiAgICAgIC8qKlxuICAgICAgICogVE9ETyBGVy0yNzkzOiBEYXRldGltZSBuZWVkcyBhIGZyYW1lIHRvIGVuc3VyZSB0aGF0IGl0XG4gICAgICAgKiBjYW4gcHJvcGVybHkgc2Nyb2xsIGNvbnRlbnRzIGludG8gdmlldy4gQXMgYSByZXN1bHRcbiAgICAgICAqIHdlIGhpZGUgdGhlIHNjcm9sbGFibGUgY29udGVudCB1bnRpbCBhZnRlciB0aGF0IGZyYW1lXG4gICAgICAgKiBzbyB1c2VycyBkbyBub3Qgc2VlIHRoZSBjb250ZW50IHF1aWNrbHkgc2hpZnRpbmcuIFRoZSBkb3duc2lkZVxuICAgICAgICogaXMgdGhhdCB0aGUgY29udGVudCB3aWxsIHBvcCBpbnRvIHZpZXcgYSBmcmFtZSBhZnRlci4gTWF5YmUgdGhlcmVcbiAgICAgICAqIGlzIGEgYmV0dGVyIHdheSB0byBoYW5kbGUgdGhpcz9cbiAgICAgICAqL1xuICAgICAgd3JpdGVUYXNrKCgpID0+IHtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdkYXRldGltZS1yZWFkeScpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCB2aXNpYmxlSU8gPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIodmlzaWJsZUNhbGxiYWNrLCB7XG4gICAgICB0aHJlc2hvbGQ6IDAuMDEsXG4gICAgICByb290OiBlbFxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIFVzZSByYWYgdG8gYXZvaWQgYSByYWNlIGNvbmRpdGlvbiBiZXR3ZWVuIHRoZSBjb21wb25lbnQgbG9hZGluZyBhbmRcbiAgICAgKiBpdHMgZGlzcGxheSBhbmltYXRpb24gc3RhcnRpbmcgKHN1Y2ggYXMgd2hlbiBzaG93biBpbiBhIG1vZGFsKS4gVGhpc1xuICAgICAqIGNvdWxkIGNhdXNlIHRoZSBkYXRldGltZSB0byBzdGFydCBhdCBhIHZpc2liaWxpdHkgb2YgMCwgZXJyb25lb3VzbHlcbiAgICAgKiB0cmlnZ2VyaW5nIHRoZSBgaGlkZGVuSU9gIG9ic2VydmVyIGJlbG93LlxuICAgICAqL1xuICAgIHJhZigoKSA9PiB2aXNpYmxlSU8gPT09IG51bGwgfHwgdmlzaWJsZUlPID09PSB2b2lkIDAgPyB2b2lkIDAgOiB2aXNpYmxlSU8ub2JzZXJ2ZShpbnRlcnNlY3Rpb25UcmFja2VyUmVmKSk7XG4gICAgLyoqXG4gICAgICogV2UgbmVlZCB0byBjbGVhbiB1cCBsaXN0ZW5lcnMgd2hlbiB0aGUgZGF0ZXRpbWUgaXMgaGlkZGVuXG4gICAgICogaW4gYSBwb3BvdmVyL21vZGFsIHNvIHRoYXQgd2UgY2FuIHByb3Blcmx5IHNjcm9sbCBjb250YWluZXJzXG4gICAgICogYmFjayBpbnRvIHZpZXcgaWYgdGhleSBhcmUgcmUtcHJlc2VudGVkLiBXaGVuIHRoZSBkYXRldGltZSBpcyBoaWRkZW5cbiAgICAgKiB0aGUgc2Nyb2xsIGFyZWFzIGhhdmUgc2Nyb2xsIHdpZHRocy9oZWlnaHRzIG9mIDBweCwgc28gYW55IHNuYXBwaW5nXG4gICAgICogd2UgZGlkIG9yaWdpbmFsbHkgaGFzIGJlZW4gbG9zdC5cbiAgICAgKi9cbiAgICBjb25zdCBoaWRkZW5DYWxsYmFjayA9IGVudHJpZXMgPT4ge1xuICAgICAgY29uc3QgZXYgPSBlbnRyaWVzWzBdO1xuICAgICAgaWYgKGV2LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGVzdHJveUludGVyYWN0aW9uTGlzdGVuZXJzKCk7XG4gICAgICAvKipcbiAgICAgICAqIFdoZW4gZGF0ZXRpbWUgaXMgaGlkZGVuLCB3ZSBuZWVkIHRvIG1ha2Ugc3VyZSB0aGF0XG4gICAgICAgKiB0aGUgbW9udGgveWVhciBwaWNrZXIgaXMgY2xvc2VkLiBPdGhlcndpc2UsXG4gICAgICAgKiBpdCB3aWxsIGJlIG9wZW4gd2hlbiB0aGUgZGF0ZXRpbWUgcmUtYXBwZWFyc1xuICAgICAgICogYW5kIHRoZSBzY3JvbGwgYXJlYSBvZiB0aGUgY2FsZW5kYXIgZ3JpZCB3aWxsIGJlIDAuXG4gICAgICAgKiBBcyBhIHJlc3VsdCwgdGhlIHdyb25nIG1vbnRoIHdpbGwgYmUgc2hvd24uXG4gICAgICAgKi9cbiAgICAgIHRoaXMuc2hvd01vbnRoQW5kWWVhciA9IGZhbHNlO1xuICAgICAgd3JpdGVUYXNrKCgpID0+IHtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCdkYXRldGltZS1yZWFkeScpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBoaWRkZW5JTyA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihoaWRkZW5DYWxsYmFjaywge1xuICAgICAgdGhyZXNob2xkOiAwLFxuICAgICAgcm9vdDogZWxcbiAgICB9KTtcbiAgICByYWYoKCkgPT4gaGlkZGVuSU8gPT09IG51bGwgfHwgaGlkZGVuSU8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGhpZGRlbklPLm9ic2VydmUoaW50ZXJzZWN0aW9uVHJhY2tlclJlZikpO1xuICAgIC8qKlxuICAgICAqIERhdGV0aW1lIHVzZXMgSW9uaWMgY29tcG9uZW50cyB0aGF0IGVtaXRcbiAgICAgKiBpb25Gb2N1cyBhbmQgaW9uQmx1ci4gVGhlc2UgZXZlbnRzIGFyZVxuICAgICAqIGNvbXBvc2VkIG1lYW5pbmcgdGhleSB3aWxsIGNyb3NzXG4gICAgICogdGhlIHNoYWRvdyBkb20gYm91bmRhcnkuIFdlIG5lZWQgdG9cbiAgICAgKiBzdG9wIHByb3BhZ2F0aW9uIG9uIHRoZXNlIGV2ZW50cyBvdGhlcndpc2VcbiAgICAgKiBkZXZlbG9wZXJzIHdpbGwgc2VlIDIgaW9uRm9jdXMgb3IgMiBpb25CbHVyXG4gICAgICogZXZlbnRzIGF0IGEgdGltZS5cbiAgICAgKi9cbiAgICBjb25zdCByb290ID0gZ2V0RWxlbWVudFJvb3QodGhpcy5lbCk7XG4gICAgcm9vdC5hZGRFdmVudExpc3RlbmVyKCdpb25Gb2N1cycsIGV2ID0+IGV2LnN0b3BQcm9wYWdhdGlvbigpKTtcbiAgICByb290LmFkZEV2ZW50TGlzdGVuZXIoJ2lvbkJsdXInLCBldiA9PiBldi5zdG9wUHJvcGFnYXRpb24oKSk7XG4gIH1cbiAgLyoqXG4gICAqIFdoZW4gdGhlIHByZXNlbnRhdGlvbiBpcyBjaGFuZ2VkLCBhbGwgY2FsZW5kYXIgY29udGVudCBpcyByZWNyZWF0ZWQsXG4gICAqIHNvIHdlIG5lZWQgdG8gcmUtaW5pdCBiZWhhdmlvciB3aXRoIHRoZSBuZXcgZWxlbWVudHMuXG4gICAqL1xuICBjb21wb25lbnREaWRSZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgcHJlc2VudGF0aW9uLFxuICAgICAgcHJldlByZXNlbnRhdGlvbixcbiAgICAgIGNhbGVuZGFyQm9keVJlZixcbiAgICAgIG1pblBhcnRzLFxuICAgICAgcHJlZmVyV2hlZWwsXG4gICAgICBmb3JjZVJlbmRlckRhdGVcbiAgICB9ID0gdGhpcztcbiAgICAvKipcbiAgICAgKiBUT0RPKEZXLTIxNjUpXG4gICAgICogUmVtb3ZlIHRoaXMgd2hlbiBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjM1OTYwIGlzIGZpeGVkLlxuICAgICAqIFdoZW4gdXNpbmcgYG1pbmAsIHdlIGFkZCBgc2Nyb2xsLXNuYXAtYWxpZ246IG5vbmVgXG4gICAgICogdG8gdGhlIGRpc2FibGVkIG1vbnRoIHNvIHRoYXQgdXNlcnMgY2Fubm90IHNjcm9sbCB0byBpdC5cbiAgICAgKiBUaGlzIHRyaWdnZXJzIGEgYnVnIGluIFdlYktpdCB3aGVyZSB0aGUgc2Nyb2xsIHBvc2l0aW9uIGlzIHJlc2V0LlxuICAgICAqIFNpbmNlIHRoZSBtb250aCBjaGFuZ2UgbG9naWMgaXMgaGFuZGxlZCBieSBhIHNjcm9sbCBsaXN0ZW5lcixcbiAgICAgKiB0aGlzIGNhdXNlcyB0aGUgbW9udGggdG8gY2hhbmdlIGxlYWRpbmcgdG8gYHNjcm9sbC1zbmFwLWFsaWduYFxuICAgICAqIGNoYW5naW5nIGFnYWluLCB0aHVzIGNoYW5naW5nIHRoZSBzY3JvbGwgcG9zaXRpb24gYWdhaW4gYW5kIGNhdXNpbmdcbiAgICAgKiBhbiBpbmZpbml0ZSBsb29wLlxuICAgICAqIFRoaXMgaXNzdWUgb25seSBhcHBsaWVzIHRvIHRoZSBjYWxlbmRhciBncmlkLCBzbyB3ZSBjYW4gZGlzYWJsZVxuICAgICAqIGl0IGlmIHRoZSBjYWxlbmRhciBncmlkIGlzIG5vdCBiZWluZyB1c2VkLlxuICAgICAqL1xuICAgIGNvbnN0IGhhc0NhbGVuZGFyR3JpZCA9ICFwcmVmZXJXaGVlbCAmJiBbJ2RhdGUtdGltZScsICd0aW1lLWRhdGUnLCAnZGF0ZSddLmluY2x1ZGVzKHByZXNlbnRhdGlvbik7XG4gICAgaWYgKG1pblBhcnRzICE9PSB1bmRlZmluZWQgJiYgaGFzQ2FsZW5kYXJHcmlkICYmIGNhbGVuZGFyQm9keVJlZikge1xuICAgICAgY29uc3Qgd29ya2luZ01vbnRoID0gY2FsZW5kYXJCb2R5UmVmLnF1ZXJ5U2VsZWN0b3IoJy5jYWxlbmRhci1tb250aDpudGgtb2YtdHlwZSgxKScpO1xuICAgICAgLyoqXG4gICAgICAgKiBXZSBuZWVkIHRvIG1ha2Ugc3VyZSB0aGUgZGF0ZXRpbWUgaXMgbm90IGluIHRoZSBwcm9jZXNzXG4gICAgICAgKiBvZiBzY3JvbGxpbmcgdG8gYSBuZXcgZGF0ZXRpbWUgdmFsdWUgaWYgdGhlIHZhbHVlXG4gICAgICAgKiBpcyB1cGRhdGVkIHByb2dyYW1tYXRpY2FsbHkuXG4gICAgICAgKiBPdGhlcndpc2UsIHRoZSBkYXRldGltZSB3aWxsIGFwcGVhciB0byBub3Qgc2Nyb2xsIGF0IGFsbCBiZWNhdXNlXG4gICAgICAgKiB3ZSBhcmUgcmVzZXR0aW5nIHRoZSBzY3JvbGwgcG9zaXRpb24gdG8gdGhlIGNlbnRlciBvZiB0aGUgdmlldy5cbiAgICAgICAqIFByaW9yIHRvIHRoZSBkYXRldGltZSdzIHZhbHVlIGJlaW5nIHVwZGF0ZWQgcHJvZ3JhbW1hdGljYWxseSxcbiAgICAgICAqIHRoZSBjYWxlbmRhckJvZHlSZWYgaXMgc2Nyb2xsZWQgc3VjaCB0aGF0IHRoZSBtaWRkbGUgbW9udGggaXMgY2VudGVyZWRcbiAgICAgICAqIGluIHRoZSB2aWV3LiBUaGUgYmVsb3cgY29kZSB1cGRhdGVzIHRoZSBzY3JvbGwgcG9zaXRpb24gc28gdGhlIG1pZGRsZVxuICAgICAgICogbW9udGggaXMgYWxzbyBjZW50ZXJlZCBpbiB0aGUgdmlldy4gU2luY2UgdGhlIHNjcm9sbCBwb3NpdGlvbiBkaWQgbm90IGNoYW5nZSxcbiAgICAgICAqIHRoZSBzY3JvbGwgY2FsbGJhY2sgaW4gdGhpcyBmaWxlIGRvZXMgbm90IGZpcmUsXG4gICAgICAgKiBhbmQgdGhlIHJlc29sdmVGb3JjZURhdGVTY3JvbGxpbmcgcHJvbWlzZSBuZXZlciByZXNvbHZlcy5cbiAgICAgICAqL1xuICAgICAgaWYgKHdvcmtpbmdNb250aCAmJiBmb3JjZVJlbmRlckRhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjYWxlbmRhckJvZHlSZWYuc2Nyb2xsTGVmdCA9IHdvcmtpbmdNb250aC5jbGllbnRXaWR0aCAqIChpc1JUTCh0aGlzLmVsKSA/IC0xIDogMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChwcmV2UHJlc2VudGF0aW9uID09PSBudWxsKSB7XG4gICAgICB0aGlzLnByZXZQcmVzZW50YXRpb24gPSBwcmVzZW50YXRpb247XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChwcmVzZW50YXRpb24gPT09IHByZXZQcmVzZW50YXRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5wcmV2UHJlc2VudGF0aW9uID0gcHJlc2VudGF0aW9uO1xuICAgIHRoaXMuZGVzdHJveUludGVyYWN0aW9uTGlzdGVuZXJzKCk7XG4gICAgdGhpcy5pbml0aWFsaXplTGlzdGVuZXJzKCk7XG4gICAgLyoqXG4gICAgICogVGhlIG1vbnRoL3llYXIgcGlja2VyIGZyb20gdGhlIGRhdGUgaW50ZXJmYWNlXG4gICAgICogc2hvdWxkIGJlIGNsb3NlZCBhcyBpdCBpcyBub3QgYXZhaWxhYmxlIGluIG5vbi1kYXRlXG4gICAgICogaW50ZXJmYWNlcy5cbiAgICAgKi9cbiAgICB0aGlzLnNob3dNb250aEFuZFllYXIgPSBmYWxzZTtcbiAgICByYWYoKCkgPT4ge1xuICAgICAgdGhpcy5pb25SZW5kZXIuZW1pdCgpO1xuICAgIH0pO1xuICB9XG4gIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGVsLFxuICAgICAgZm9ybWF0T3B0aW9ucyxcbiAgICAgIGhpZ2hsaWdodGVkRGF0ZXMsXG4gICAgICBtdWx0aXBsZSxcbiAgICAgIHByZXNlbnRhdGlvbixcbiAgICAgIHByZWZlcldoZWVsXG4gICAgfSA9IHRoaXM7XG4gICAgaWYgKG11bHRpcGxlKSB7XG4gICAgICBpZiAocHJlc2VudGF0aW9uICE9PSAnZGF0ZScpIHtcbiAgICAgICAgcHJpbnRJb25XYXJuaW5nKCdbaW9uLWRhdGV0aW1lXSAtIE11bHRpcGxlIGRhdGUgc2VsZWN0aW9uIGlzIG9ubHkgc3VwcG9ydGVkIGZvciBwcmVzZW50YXRpb249XCJkYXRlXCIuJywgZWwpO1xuICAgICAgfVxuICAgICAgaWYgKHByZWZlcldoZWVsKSB7XG4gICAgICAgIHByaW50SW9uV2FybmluZygnW2lvbi1kYXRldGltZV0gLSBNdWx0aXBsZSBkYXRlIHNlbGVjdGlvbiBpcyBub3Qgc3VwcG9ydGVkIHdpdGggcHJlZmVyV2hlZWw9XCJ0cnVlXCIuJywgZWwpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaGlnaGxpZ2h0ZWREYXRlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAocHJlc2VudGF0aW9uICE9PSAnZGF0ZScgJiYgcHJlc2VudGF0aW9uICE9PSAnZGF0ZS10aW1lJyAmJiBwcmVzZW50YXRpb24gIT09ICd0aW1lLWRhdGUnKSB7XG4gICAgICAgIHByaW50SW9uV2FybmluZygnW2lvbi1kYXRldGltZV0gLSBUaGUgaGlnaGxpZ2h0ZWREYXRlcyBwcm9wZXJ0eSBpcyBvbmx5IHN1cHBvcnRlZCB3aXRoIHRoZSBkYXRlLCBkYXRlLXRpbWUsIGFuZCB0aW1lLWRhdGUgcHJlc2VudGF0aW9ucy4nLCBlbCk7XG4gICAgICB9XG4gICAgICBpZiAocHJlZmVyV2hlZWwpIHtcbiAgICAgICAgcHJpbnRJb25XYXJuaW5nKCdbaW9uLWRhdGV0aW1lXSAtIFRoZSBoaWdobGlnaHRlZERhdGVzIHByb3BlcnR5IGlzIG5vdCBzdXBwb3J0ZWQgd2l0aCBwcmVmZXJXaGVlbD1cInRydWVcIi4nLCBlbCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChmb3JtYXRPcHRpb25zKSB7XG4gICAgICBjaGVja0ZvclByZXNlbnRhdGlvbkZvcm1hdE1pc21hdGNoKGVsLCBwcmVzZW50YXRpb24sIGZvcm1hdE9wdGlvbnMpO1xuICAgICAgd2FybklmVGltZVpvbmVQcm92aWRlZChlbCwgZm9ybWF0T3B0aW9ucyk7XG4gICAgfVxuICAgIGNvbnN0IGhvdXJWYWx1ZXMgPSB0aGlzLnBhcnNlZEhvdXJWYWx1ZXMgPSBjb252ZXJ0VG9BcnJheU9mTnVtYmVycyh0aGlzLmhvdXJWYWx1ZXMpO1xuICAgIGNvbnN0IG1pbnV0ZVZhbHVlcyA9IHRoaXMucGFyc2VkTWludXRlVmFsdWVzID0gY29udmVydFRvQXJyYXlPZk51bWJlcnModGhpcy5taW51dGVWYWx1ZXMpO1xuICAgIGNvbnN0IG1vbnRoVmFsdWVzID0gdGhpcy5wYXJzZWRNb250aFZhbHVlcyA9IGNvbnZlcnRUb0FycmF5T2ZOdW1iZXJzKHRoaXMubW9udGhWYWx1ZXMpO1xuICAgIGNvbnN0IHllYXJWYWx1ZXMgPSB0aGlzLnBhcnNlZFllYXJWYWx1ZXMgPSBjb252ZXJ0VG9BcnJheU9mTnVtYmVycyh0aGlzLnllYXJWYWx1ZXMpO1xuICAgIGNvbnN0IGRheVZhbHVlcyA9IHRoaXMucGFyc2VkRGF5VmFsdWVzID0gY29udmVydFRvQXJyYXlPZk51bWJlcnModGhpcy5kYXlWYWx1ZXMpO1xuICAgIGNvbnN0IHRvZGF5UGFydHMgPSB0aGlzLnRvZGF5UGFydHMgPSBwYXJzZURhdGUoZ2V0VG9kYXkoKSk7XG4gICAgdGhpcy5wcm9jZXNzTWluUGFydHMoKTtcbiAgICB0aGlzLnByb2Nlc3NNYXhQYXJ0cygpO1xuICAgIHRoaXMuZGVmYXVsdFBhcnRzID0gZ2V0Q2xvc2VzdFZhbGlkRGF0ZSh7XG4gICAgICByZWZQYXJ0czogdG9kYXlQYXJ0cyxcbiAgICAgIG1vbnRoVmFsdWVzLFxuICAgICAgZGF5VmFsdWVzLFxuICAgICAgeWVhclZhbHVlcyxcbiAgICAgIGhvdXJWYWx1ZXMsXG4gICAgICBtaW51dGVWYWx1ZXMsXG4gICAgICBtaW5QYXJ0czogdGhpcy5taW5QYXJ0cyxcbiAgICAgIG1heFBhcnRzOiB0aGlzLm1heFBhcnRzXG4gICAgfSk7XG4gICAgdGhpcy5wcm9jZXNzVmFsdWUodGhpcy52YWx1ZSk7XG4gICAgdGhpcy5lbWl0U3R5bGUoKTtcbiAgfVxuICBlbWl0U3R5bGUoKSB7XG4gICAgdGhpcy5pb25TdHlsZS5lbWl0KHtcbiAgICAgIGludGVyYWN0aXZlOiB0cnVlLFxuICAgICAgZGF0ZXRpbWU6IHRydWUsXG4gICAgICAnaW50ZXJhY3RpdmUtZGlzYWJsZWQnOiB0aGlzLmRpc2FibGVkXG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIFVuaXZlcnNhbCByZW5kZXIgbWV0aG9kc1xuICAgKiBUaGVzZSBhcmUgcGllY2VzIG9mIGRhdGV0aW1lIHRoYXRcbiAgICogYXJlIHJlbmRlcmVkIGluZGVwZW5kZW50bHkgb2YgcHJlc2VudGF0aW9uLlxuICAgKi9cbiAgcmVuZGVyRm9vdGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGRpc2FibGVkLFxuICAgICAgcmVhZG9ubHksXG4gICAgICBzaG93RGVmYXVsdEJ1dHRvbnMsXG4gICAgICBzaG93Q2xlYXJCdXR0b25cbiAgICB9ID0gdGhpcztcbiAgICAvKipcbiAgICAgKiBUaGUgY2FuY2VsLCBjbGVhciwgYW5kIGNvbmZpcm0gYnV0dG9uc1xuICAgICAqIHNob3VsZCBub3QgYmUgaW50ZXJhY3RpdmUgaWYgdGhlIGRhdGV0aW1lXG4gICAgICogaXMgZGlzYWJsZWQgb3IgcmVhZG9ubHkuXG4gICAgICovXG4gICAgY29uc3QgaXNCdXR0b25EaXNhYmxlZCA9IGRpc2FibGVkIHx8IHJlYWRvbmx5O1xuICAgIGNvbnN0IGhhc1Nsb3R0ZWRCdXR0b25zID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCdbc2xvdD1cImJ1dHRvbnNcIl0nKSAhPT0gbnVsbDtcbiAgICBpZiAoIWhhc1Nsb3R0ZWRCdXR0b25zICYmICFzaG93RGVmYXVsdEJ1dHRvbnMgJiYgIXNob3dDbGVhckJ1dHRvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjbGVhckJ1dHRvbkNsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgdGhpcy5zZXRWYWx1ZSh1bmRlZmluZWQpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQnkgZGVmYXVsdCB3ZSByZW5kZXIgdHdvIGJ1dHRvbnM6XG4gICAgICogQ2FuY2VsIC0gRGlzbWlzc2VzIHRoZSBkYXRldGltZSBhbmRcbiAgICAgKiBkb2VzIG5vdCB1cGRhdGUgdGhlIGB2YWx1ZWAgcHJvcC5cbiAgICAgKiBPSyAtIERpc21pc3NlcyB0aGUgZGF0ZXRpbWUgYW5kXG4gICAgICogdXBkYXRlcyB0aGUgYHZhbHVlYCBwcm9wLlxuICAgICAqL1xuICAgIHJldHVybiBoKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBcImRhdGV0aW1lLWZvb3RlclwiXG4gICAgfSwgaChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJkYXRldGltZS1idXR0b25zXCJcbiAgICB9LCBoKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgIFsnZGF0ZXRpbWUtYWN0aW9uLWJ1dHRvbnMnXTogdHJ1ZSxcbiAgICAgICAgWydoYXMtY2xlYXItYnV0dG9uJ106IHRoaXMuc2hvd0NsZWFyQnV0dG9uXG4gICAgICB9XG4gICAgfSwgaChcInNsb3RcIiwge1xuICAgICAgbmFtZTogXCJidXR0b25zXCJcbiAgICB9LCBoKFwiaW9uLWJ1dHRvbnNcIiwgbnVsbCwgc2hvd0RlZmF1bHRCdXR0b25zICYmIGgoXCJpb24tYnV0dG9uXCIsIHtcbiAgICAgIGlkOiBcImNhbmNlbC1idXR0b25cIixcbiAgICAgIGNvbG9yOiB0aGlzLmNvbG9yLFxuICAgICAgb25DbGljazogKCkgPT4gdGhpcy5jYW5jZWwodHJ1ZSksXG4gICAgICBkaXNhYmxlZDogaXNCdXR0b25EaXNhYmxlZFxuICAgIH0sIHRoaXMuY2FuY2VsVGV4dCksIGgoXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IFwiZGF0ZXRpbWUtYWN0aW9uLWJ1dHRvbnMtY29udGFpbmVyXCJcbiAgICB9LCBzaG93Q2xlYXJCdXR0b24gJiYgaChcImlvbi1idXR0b25cIiwge1xuICAgICAgaWQ6IFwiY2xlYXItYnV0dG9uXCIsXG4gICAgICBjb2xvcjogdGhpcy5jb2xvcixcbiAgICAgIG9uQ2xpY2s6ICgpID0+IGNsZWFyQnV0dG9uQ2xpY2soKSxcbiAgICAgIGRpc2FibGVkOiBpc0J1dHRvbkRpc2FibGVkXG4gICAgfSwgdGhpcy5jbGVhclRleHQpLCBzaG93RGVmYXVsdEJ1dHRvbnMgJiYgaChcImlvbi1idXR0b25cIiwge1xuICAgICAgaWQ6IFwiY29uZmlybS1idXR0b25cIixcbiAgICAgIGNvbG9yOiB0aGlzLmNvbG9yLFxuICAgICAgb25DbGljazogKCkgPT4gdGhpcy5jb25maXJtKHRydWUpLFxuICAgICAgZGlzYWJsZWQ6IGlzQnV0dG9uRGlzYWJsZWRcbiAgICB9LCB0aGlzLmRvbmVUZXh0KSkpKSkpKTtcbiAgfVxuICAvKipcbiAgICogV2hlZWwgcGlja2VyIHJlbmRlciBtZXRob2RzXG4gICAqL1xuICByZW5kZXJXaGVlbFBpY2tlcihmb3JjZVByZXNlbnRhdGlvbiA9IHRoaXMucHJlc2VudGF0aW9uKSB7XG4gICAgLyoqXG4gICAgICogSWYgcHJlc2VudGF0aW9uPVwidGltZS1kYXRlXCIgd2Ugc3dpdGNoIHRoZVxuICAgICAqIG9yZGVyIG9mIHRoZSByZW5kZXIgYXJyYXkgaGVyZSBpbnN0ZWFkIG9mXG4gICAgICogbWFudWFsbHkgcmVvcmRlcmluZyBlYWNoIGRhdGUvdGltZSBwaWNrZXJcbiAgICAgKiBjb2x1bW4gd2l0aCBDU1MuIFRoaXMgYWxsb3dzIGZvciBhZGRpdGlvbmFsXG4gICAgICogZmxleGliaWxpdHkgaWYgd2UgbmVlZCB0byByZW5kZXIgc3Vic2V0c1xuICAgICAqIG9mIHRoZSBkYXRlL3RpbWUgZGF0YSBvciBkbyBhZGRpdGlvbmFsIG9yZGVyaW5nXG4gICAgICogd2l0aGluIHRoZSBjaGlsZCByZW5kZXIgZnVuY3Rpb25zLlxuICAgICAqL1xuICAgIGNvbnN0IHJlbmRlckFycmF5ID0gZm9yY2VQcmVzZW50YXRpb24gPT09ICd0aW1lLWRhdGUnID8gW3RoaXMucmVuZGVyVGltZVBpY2tlckNvbHVtbnMoZm9yY2VQcmVzZW50YXRpb24pLCB0aGlzLnJlbmRlckRhdGVQaWNrZXJDb2x1bW5zKGZvcmNlUHJlc2VudGF0aW9uKV0gOiBbdGhpcy5yZW5kZXJEYXRlUGlja2VyQ29sdW1ucyhmb3JjZVByZXNlbnRhdGlvbiksIHRoaXMucmVuZGVyVGltZVBpY2tlckNvbHVtbnMoZm9yY2VQcmVzZW50YXRpb24pXTtcbiAgICByZXR1cm4gaChcImlvbi1waWNrZXJcIiwgbnVsbCwgcmVuZGVyQXJyYXkpO1xuICB9XG4gIHJlbmRlckRhdGVQaWNrZXJDb2x1bW5zKGZvcmNlUHJlc2VudGF0aW9uKSB7XG4gICAgcmV0dXJuIGZvcmNlUHJlc2VudGF0aW9uID09PSAnZGF0ZS10aW1lJyB8fCBmb3JjZVByZXNlbnRhdGlvbiA9PT0gJ3RpbWUtZGF0ZScgPyB0aGlzLnJlbmRlckNvbWJpbmVkRGF0ZVBpY2tlckNvbHVtbigpIDogdGhpcy5yZW5kZXJJbmRpdmlkdWFsRGF0ZVBpY2tlckNvbHVtbnMoZm9yY2VQcmVzZW50YXRpb24pO1xuICB9XG4gIHJlbmRlckNvbWJpbmVkRGF0ZVBpY2tlckNvbHVtbigpIHtcbiAgICBjb25zdCB7XG4gICAgICBkZWZhdWx0UGFydHMsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIHdvcmtpbmdQYXJ0cyxcbiAgICAgIGxvY2FsZSxcbiAgICAgIG1pblBhcnRzLFxuICAgICAgbWF4UGFydHMsXG4gICAgICB0b2RheVBhcnRzLFxuICAgICAgaXNEYXRlRW5hYmxlZFxuICAgIH0gPSB0aGlzO1xuICAgIGNvbnN0IGFjdGl2ZVBhcnQgPSB0aGlzLmdldEFjdGl2ZVBhcnRzV2l0aEZhbGxiYWNrKCk7XG4gICAgLyoqXG4gICAgICogQnkgZGVmYXVsdCwgZ2VuZXJhdGUgYSByYW5nZSBvZiAzIG1vbnRoczpcbiAgICAgKiBQcmV2aW91cyBtb250aCwgY3VycmVudCBtb250aCwgYW5kIG5leHQgbW9udGhcbiAgICAgKi9cbiAgICBjb25zdCBtb250aHNUb1JlbmRlciA9IGdlbmVyYXRlTW9udGhzKHdvcmtpbmdQYXJ0cyk7XG4gICAgY29uc3QgbGFzdE1vbnRoID0gbW9udGhzVG9SZW5kZXJbbW9udGhzVG9SZW5kZXIubGVuZ3RoIC0gMV07XG4gICAgLyoqXG4gICAgICogRW5zdXJlIHRoYXQgdXNlcnMgY2FuIHNlbGVjdCB0aGUgZW50aXJlIHdpbmRvdyBvZiBkYXRlcy5cbiAgICAgKi9cbiAgICBtb250aHNUb1JlbmRlclswXS5kYXkgPSAxO1xuICAgIGxhc3RNb250aC5kYXkgPSBnZXROdW1EYXlzSW5Nb250aChsYXN0TW9udGgubW9udGgsIGxhc3RNb250aC55ZWFyKTtcbiAgICAvKipcbiAgICAgKiBOYXJyb3cgdGhlIGRhdGVzIHJlbmRlcmVkIGJhc2VkIG9uIG1pbi9tYXggZGF0ZXMgKGlmIGFueSkuXG4gICAgICogVGhlIGBtaW5gIGRhdGUgaXMgdXNlZCBpZiB0aGUgbWluIGlzIGFmdGVyIHRoZSBnZW5lcmF0ZWQgbWluIG1vbnRoLlxuICAgICAqIFRoZSBgbWF4YCBkYXRlIGlzIHVzZWQgaWYgdGhlIG1heCBpcyBiZWZvcmUgdGhlIGdlbmVyYXRlZCBtYXggbW9udGguXG4gICAgICogVGhpcyBlbnN1cmVzIHRoYXQgdGhlIHNsaWRpbmcgd2luZG93IGFsd2F5cyBzdGF5cyBhdCAzIG1vbnRoc1xuICAgICAqIGJ1dCBzdGlsbCBhbGxvd3MgZnV0dXJlIGRhdGVzIHRvIGJlIGxhemlseSByZW5kZXJlZCBiYXNlZCBvbiBhbnkgbWluL21heFxuICAgICAqIGNvbnN0cmFpbnRzLlxuICAgICAqL1xuICAgIGNvbnN0IG1pbiA9IG1pblBhcnRzICE9PSB1bmRlZmluZWQgJiYgaXNBZnRlcihtaW5QYXJ0cywgbW9udGhzVG9SZW5kZXJbMF0pID8gbWluUGFydHMgOiBtb250aHNUb1JlbmRlclswXTtcbiAgICBjb25zdCBtYXggPSBtYXhQYXJ0cyAhPT0gdW5kZWZpbmVkICYmIGlzQmVmb3JlKG1heFBhcnRzLCBsYXN0TW9udGgpID8gbWF4UGFydHMgOiBsYXN0TW9udGg7XG4gICAgY29uc3QgcmVzdWx0ID0gZ2V0Q29tYmluZWREYXRlQ29sdW1uRGF0YShsb2NhbGUsIHRvZGF5UGFydHMsIG1pbiwgbWF4LCB0aGlzLnBhcnNlZERheVZhbHVlcywgdGhpcy5wYXJzZWRNb250aFZhbHVlcyk7XG4gICAgbGV0IGl0ZW1zID0gcmVzdWx0Lml0ZW1zO1xuICAgIGNvbnN0IHBhcnRzID0gcmVzdWx0LnBhcnRzO1xuICAgIGlmIChpc0RhdGVFbmFibGVkKSB7XG4gICAgICBpdGVtcyA9IGl0ZW1zLm1hcCgoaXRlbU9iamVjdCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlUGFydHMgPSBwYXJ0c1tpbmRleF07XG4gICAgICAgIGxldCBkaXNhYmxlZDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBUaGUgYGlzRGF0ZUVuYWJsZWRgIGltcGxlbWVudGF0aW9uIGlzIHRyeS1jYXRjaCB3cmFwcGVkXG4gICAgICAgICAgICogdG8gcHJldmVudCBleGNlcHRpb25zIGluIHRoZSB1c2VyJ3MgZnVuY3Rpb24gZnJvbVxuICAgICAgICAgICAqIGludGVycnVwdGluZyB0aGUgY2FsZW5kYXIgcmVuZGVyaW5nLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIGRpc2FibGVkID0gIWlzRGF0ZUVuYWJsZWQoY29udmVydERhdGFUb0lTTyhyZWZlcmVuY2VQYXJ0cykpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgcHJpbnRJb25FcnJvcignW2lvbi1kYXRldGltZV0gLSBFeGNlcHRpb24gdGhyb3duIGZyb20gcHJvdmlkZWQgYGlzRGF0ZUVuYWJsZWRgIGZ1bmN0aW9uLiBQbGVhc2UgY2hlY2sgeW91ciBmdW5jdGlvbiBhbmQgdHJ5IGFnYWluLicsIGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGl0ZW1PYmplY3QpLCB7XG4gICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSWYgd2UgaGF2ZSBzZWxlY3RlZCBhIGRheSBhbHJlYWR5LCB0aGVuIGRlZmF1bHQgdGhlIGNvbHVtblxuICAgICAqIHRvIHRoYXQgdmFsdWUuIE90aGVyd2lzZSwgc2V0IGl0IHRvIHRoZSBkZWZhdWx0IGRhdGUuXG4gICAgICovXG4gICAgY29uc3QgdG9kYXlTdHJpbmcgPSB3b3JraW5nUGFydHMuZGF5ICE9PSBudWxsID8gYCR7d29ya2luZ1BhcnRzLnllYXJ9LSR7d29ya2luZ1BhcnRzLm1vbnRofS0ke3dvcmtpbmdQYXJ0cy5kYXl9YCA6IGAke2RlZmF1bHRQYXJ0cy55ZWFyfS0ke2RlZmF1bHRQYXJ0cy5tb250aH0tJHtkZWZhdWx0UGFydHMuZGF5fWA7XG4gICAgcmV0dXJuIGgoXCJpb24tcGlja2VyLWNvbHVtblwiLCB7XG4gICAgICBcImFyaWEtbGFiZWxcIjogXCJTZWxlY3QgYSBkYXRlXCIsXG4gICAgICBjbGFzczogXCJkYXRlLWNvbHVtblwiLFxuICAgICAgY29sb3I6IHRoaXMuY29sb3IsXG4gICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICB2YWx1ZTogdG9kYXlTdHJpbmcsXG4gICAgICBvbklvbkNoYW5nZTogZXYgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgdmFsdWVcbiAgICAgICAgfSA9IGV2LmRldGFpbDtcbiAgICAgICAgY29uc3QgZmluZFBhcnQgPSBwYXJ0cy5maW5kKCh7XG4gICAgICAgICAgbW9udGgsXG4gICAgICAgICAgZGF5LFxuICAgICAgICAgIHllYXJcbiAgICAgICAgfSkgPT4gdmFsdWUgPT09IGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWApO1xuICAgICAgICB0aGlzLnNldFdvcmtpbmdQYXJ0cyhPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHdvcmtpbmdQYXJ0cyksIGZpbmRQYXJ0KSk7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlUGFydHMoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBhY3RpdmVQYXJ0KSwgZmluZFBhcnQpKTtcbiAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9XG4gICAgfSwgaXRlbXMubWFwKGl0ZW0gPT4gaChcImlvbi1waWNrZXItY29sdW1uLW9wdGlvblwiLCB7XG4gICAgICBwYXJ0OiBpdGVtLnZhbHVlID09PSB0b2RheVN0cmluZyA/IGAke1dIRUVMX0lURU1fUEFSVH0gJHtXSEVFTF9JVEVNX0FDVElWRV9QQVJUfWAgOiBXSEVFTF9JVEVNX1BBUlQsXG4gICAgICBrZXk6IGl0ZW0udmFsdWUsXG4gICAgICBkaXNhYmxlZDogaXRlbS5kaXNhYmxlZCxcbiAgICAgIHZhbHVlOiBpdGVtLnZhbHVlXG4gICAgfSwgaXRlbS50ZXh0KSkpO1xuICB9XG4gIHJlbmRlckluZGl2aWR1YWxEYXRlUGlja2VyQ29sdW1ucyhmb3JjZVByZXNlbnRhdGlvbikge1xuICAgIGNvbnN0IHtcbiAgICAgIHdvcmtpbmdQYXJ0cyxcbiAgICAgIGlzRGF0ZUVuYWJsZWRcbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCBzaG91bGRSZW5kZXJNb250aHMgPSBmb3JjZVByZXNlbnRhdGlvbiAhPT0gJ3llYXInICYmIGZvcmNlUHJlc2VudGF0aW9uICE9PSAndGltZSc7XG4gICAgY29uc3QgbW9udGhzID0gc2hvdWxkUmVuZGVyTW9udGhzID8gZ2V0TW9udGhDb2x1bW5EYXRhKHRoaXMubG9jYWxlLCB3b3JraW5nUGFydHMsIHRoaXMubWluUGFydHMsIHRoaXMubWF4UGFydHMsIHRoaXMucGFyc2VkTW9udGhWYWx1ZXMpIDogW107XG4gICAgY29uc3Qgc2hvdWxkUmVuZGVyRGF5cyA9IGZvcmNlUHJlc2VudGF0aW9uID09PSAnZGF0ZSc7XG4gICAgbGV0IGRheXMgPSBzaG91bGRSZW5kZXJEYXlzID8gZ2V0RGF5Q29sdW1uRGF0YSh0aGlzLmxvY2FsZSwgd29ya2luZ1BhcnRzLCB0aGlzLm1pblBhcnRzLCB0aGlzLm1heFBhcnRzLCB0aGlzLnBhcnNlZERheVZhbHVlcykgOiBbXTtcbiAgICBpZiAoaXNEYXRlRW5hYmxlZCkge1xuICAgICAgZGF5cyA9IGRheXMubWFwKGRheU9iamVjdCA9PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICB2YWx1ZVxuICAgICAgICB9ID0gZGF5T2JqZWN0O1xuICAgICAgICBjb25zdCB2YWx1ZU51bSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyBwYXJzZUludCh2YWx1ZSkgOiB2YWx1ZTtcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlUGFydHMgPSB7XG4gICAgICAgICAgbW9udGg6IHdvcmtpbmdQYXJ0cy5tb250aCxcbiAgICAgICAgICBkYXk6IHZhbHVlTnVtLFxuICAgICAgICAgIHllYXI6IHdvcmtpbmdQYXJ0cy55ZWFyXG4gICAgICAgIH07XG4gICAgICAgIGxldCBkaXNhYmxlZDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBUaGUgYGlzRGF0ZUVuYWJsZWRgIGltcGxlbWVudGF0aW9uIGlzIHRyeS1jYXRjaCB3cmFwcGVkXG4gICAgICAgICAgICogdG8gcHJldmVudCBleGNlcHRpb25zIGluIHRoZSB1c2VyJ3MgZnVuY3Rpb24gZnJvbVxuICAgICAgICAgICAqIGludGVycnVwdGluZyB0aGUgY2FsZW5kYXIgcmVuZGVyaW5nLlxuICAgICAgICAgICAqL1xuICAgICAgICAgIGRpc2FibGVkID0gIWlzRGF0ZUVuYWJsZWQoY29udmVydERhdGFUb0lTTyhyZWZlcmVuY2VQYXJ0cykpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgcHJpbnRJb25FcnJvcignW2lvbi1kYXRldGltZV0gLSBFeGNlcHRpb24gdGhyb3duIGZyb20gcHJvdmlkZWQgYGlzRGF0ZUVuYWJsZWRgIGZ1bmN0aW9uLiBQbGVhc2UgY2hlY2sgeW91ciBmdW5jdGlvbiBhbmQgdHJ5IGFnYWluLicsIGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGRheU9iamVjdCksIHtcbiAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBzaG91bGRSZW5kZXJZZWFycyA9IGZvcmNlUHJlc2VudGF0aW9uICE9PSAnbW9udGgnICYmIGZvcmNlUHJlc2VudGF0aW9uICE9PSAndGltZSc7XG4gICAgY29uc3QgeWVhcnMgPSBzaG91bGRSZW5kZXJZZWFycyA/IGdldFllYXJDb2x1bW5EYXRhKHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRQYXJ0cywgdGhpcy5taW5QYXJ0cywgdGhpcy5tYXhQYXJ0cywgdGhpcy5wYXJzZWRZZWFyVmFsdWVzKSA6IFtdO1xuICAgIC8qKlxuICAgICAqIENlcnRhaW4gbG9jYWxlcyBzaG93IHRoZSBkYXkgYmVmb3JlIHRoZSBtb250aC5cbiAgICAgKi9cbiAgICBjb25zdCBzaG93TW9udGhGaXJzdCA9IGlzTW9udGhGaXJzdExvY2FsZSh0aGlzLmxvY2FsZSwge1xuICAgICAgbW9udGg6ICdudW1lcmljJyxcbiAgICAgIGRheTogJ251bWVyaWMnXG4gICAgfSk7XG4gICAgbGV0IHJlbmRlckFycmF5ID0gW107XG4gICAgaWYgKHNob3dNb250aEZpcnN0KSB7XG4gICAgICByZW5kZXJBcnJheSA9IFt0aGlzLnJlbmRlck1vbnRoUGlja2VyQ29sdW1uKG1vbnRocyksIHRoaXMucmVuZGVyRGF5UGlja2VyQ29sdW1uKGRheXMpLCB0aGlzLnJlbmRlclllYXJQaWNrZXJDb2x1bW4oeWVhcnMpXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVuZGVyQXJyYXkgPSBbdGhpcy5yZW5kZXJEYXlQaWNrZXJDb2x1bW4oZGF5cyksIHRoaXMucmVuZGVyTW9udGhQaWNrZXJDb2x1bW4obW9udGhzKSwgdGhpcy5yZW5kZXJZZWFyUGlja2VyQ29sdW1uKHllYXJzKV07XG4gICAgfVxuICAgIHJldHVybiByZW5kZXJBcnJheTtcbiAgfVxuICByZW5kZXJEYXlQaWNrZXJDb2x1bW4oZGF5cykge1xuICAgIHZhciBfYTtcbiAgICBpZiAoZGF5cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgY29uc3Qge1xuICAgICAgZGlzYWJsZWQsXG4gICAgICB3b3JraW5nUGFydHNcbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCBhY3RpdmVQYXJ0ID0gdGhpcy5nZXRBY3RpdmVQYXJ0c1dpdGhGYWxsYmFjaygpO1xuICAgIGNvbnN0IHBpY2tlckNvbHVtblZhbHVlID0gKF9hID0gd29ya2luZ1BhcnRzLmRheSAhPT0gbnVsbCA/IHdvcmtpbmdQYXJ0cy5kYXkgOiB0aGlzLmRlZmF1bHRQYXJ0cy5kYXkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gaChcImlvbi1waWNrZXItY29sdW1uXCIsIHtcbiAgICAgIFwiYXJpYS1sYWJlbFwiOiBcIlNlbGVjdCBhIGRheVwiLFxuICAgICAgY2xhc3M6IFwiZGF5LWNvbHVtblwiLFxuICAgICAgY29sb3I6IHRoaXMuY29sb3IsXG4gICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICB2YWx1ZTogcGlja2VyQ29sdW1uVmFsdWUsXG4gICAgICBvbklvbkNoYW5nZTogZXYgPT4ge1xuICAgICAgICB0aGlzLnNldFdvcmtpbmdQYXJ0cyhPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHdvcmtpbmdQYXJ0cyksIHtcbiAgICAgICAgICBkYXk6IGV2LmRldGFpbC52YWx1ZVxuICAgICAgICB9KSk7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlUGFydHMoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBhY3RpdmVQYXJ0KSwge1xuICAgICAgICAgIGRheTogZXYuZGV0YWlsLnZhbHVlXG4gICAgICAgIH0pKTtcbiAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9XG4gICAgfSwgZGF5cy5tYXAoZGF5ID0+IGgoXCJpb24tcGlja2VyLWNvbHVtbi1vcHRpb25cIiwge1xuICAgICAgcGFydDogZGF5LnZhbHVlID09PSBwaWNrZXJDb2x1bW5WYWx1ZSA/IGAke1dIRUVMX0lURU1fUEFSVH0gJHtXSEVFTF9JVEVNX0FDVElWRV9QQVJUfWAgOiBXSEVFTF9JVEVNX1BBUlQsXG4gICAgICBrZXk6IGRheS52YWx1ZSxcbiAgICAgIGRpc2FibGVkOiBkYXkuZGlzYWJsZWQsXG4gICAgICB2YWx1ZTogZGF5LnZhbHVlXG4gICAgfSwgZGF5LnRleHQpKSk7XG4gIH1cbiAgcmVuZGVyTW9udGhQaWNrZXJDb2x1bW4obW9udGhzKSB7XG4gICAgaWYgKG1vbnRocy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgY29uc3Qge1xuICAgICAgZGlzYWJsZWQsXG4gICAgICB3b3JraW5nUGFydHNcbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCBhY3RpdmVQYXJ0ID0gdGhpcy5nZXRBY3RpdmVQYXJ0c1dpdGhGYWxsYmFjaygpO1xuICAgIHJldHVybiBoKFwiaW9uLXBpY2tlci1jb2x1bW5cIiwge1xuICAgICAgXCJhcmlhLWxhYmVsXCI6IFwiU2VsZWN0IGEgbW9udGhcIixcbiAgICAgIGNsYXNzOiBcIm1vbnRoLWNvbHVtblwiLFxuICAgICAgY29sb3I6IHRoaXMuY29sb3IsXG4gICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICB2YWx1ZTogd29ya2luZ1BhcnRzLm1vbnRoLFxuICAgICAgb25Jb25DaGFuZ2U6IGV2ID0+IHtcbiAgICAgICAgdGhpcy5zZXRXb3JraW5nUGFydHMoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB3b3JraW5nUGFydHMpLCB7XG4gICAgICAgICAgbW9udGg6IGV2LmRldGFpbC52YWx1ZVxuICAgICAgICB9KSk7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlUGFydHMoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBhY3RpdmVQYXJ0KSwge1xuICAgICAgICAgIG1vbnRoOiBldi5kZXRhaWwudmFsdWVcbiAgICAgICAgfSkpO1xuICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cbiAgICB9LCBtb250aHMubWFwKG1vbnRoID0+IGgoXCJpb24tcGlja2VyLWNvbHVtbi1vcHRpb25cIiwge1xuICAgICAgcGFydDogbW9udGgudmFsdWUgPT09IHdvcmtpbmdQYXJ0cy5tb250aCA/IGAke1dIRUVMX0lURU1fUEFSVH0gJHtXSEVFTF9JVEVNX0FDVElWRV9QQVJUfWAgOiBXSEVFTF9JVEVNX1BBUlQsXG4gICAgICBrZXk6IG1vbnRoLnZhbHVlLFxuICAgICAgZGlzYWJsZWQ6IG1vbnRoLmRpc2FibGVkLFxuICAgICAgdmFsdWU6IG1vbnRoLnZhbHVlXG4gICAgfSwgbW9udGgudGV4dCkpKTtcbiAgfVxuICByZW5kZXJZZWFyUGlja2VyQ29sdW1uKHllYXJzKSB7XG4gICAgaWYgKHllYXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBjb25zdCB7XG4gICAgICBkaXNhYmxlZCxcbiAgICAgIHdvcmtpbmdQYXJ0c1xuICAgIH0gPSB0aGlzO1xuICAgIGNvbnN0IGFjdGl2ZVBhcnQgPSB0aGlzLmdldEFjdGl2ZVBhcnRzV2l0aEZhbGxiYWNrKCk7XG4gICAgcmV0dXJuIGgoXCJpb24tcGlja2VyLWNvbHVtblwiLCB7XG4gICAgICBcImFyaWEtbGFiZWxcIjogXCJTZWxlY3QgYSB5ZWFyXCIsXG4gICAgICBjbGFzczogXCJ5ZWFyLWNvbHVtblwiLFxuICAgICAgY29sb3I6IHRoaXMuY29sb3IsXG4gICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICB2YWx1ZTogd29ya2luZ1BhcnRzLnllYXIsXG4gICAgICBvbklvbkNoYW5nZTogZXYgPT4ge1xuICAgICAgICB0aGlzLnNldFdvcmtpbmdQYXJ0cyhPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHdvcmtpbmdQYXJ0cyksIHtcbiAgICAgICAgICB5ZWFyOiBldi5kZXRhaWwudmFsdWVcbiAgICAgICAgfSkpO1xuICAgICAgICB0aGlzLnNldEFjdGl2ZVBhcnRzKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgYWN0aXZlUGFydCksIHtcbiAgICAgICAgICB5ZWFyOiBldi5kZXRhaWwudmFsdWVcbiAgICAgICAgfSkpO1xuICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cbiAgICB9LCB5ZWFycy5tYXAoeWVhciA9PiBoKFwiaW9uLXBpY2tlci1jb2x1bW4tb3B0aW9uXCIsIHtcbiAgICAgIHBhcnQ6IHllYXIudmFsdWUgPT09IHdvcmtpbmdQYXJ0cy55ZWFyID8gYCR7V0hFRUxfSVRFTV9QQVJUfSAke1dIRUVMX0lURU1fQUNUSVZFX1BBUlR9YCA6IFdIRUVMX0lURU1fUEFSVCxcbiAgICAgIGtleTogeWVhci52YWx1ZSxcbiAgICAgIGRpc2FibGVkOiB5ZWFyLmRpc2FibGVkLFxuICAgICAgdmFsdWU6IHllYXIudmFsdWVcbiAgICB9LCB5ZWFyLnRleHQpKSk7XG4gIH1cbiAgcmVuZGVyVGltZVBpY2tlckNvbHVtbnMoZm9yY2VQcmVzZW50YXRpb24pIHtcbiAgICBpZiAoWydkYXRlJywgJ21vbnRoJywgJ21vbnRoLXllYXInLCAneWVhciddLmluY2x1ZGVzKGZvcmNlUHJlc2VudGF0aW9uKSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJZiBhIHVzZXIgaGFzIG5vdCBzZWxlY3RlZCBhIGRhdGUsXG4gICAgICogdGhlbiB3ZSBzaG91bGQgc2hvdyBhbGwgdGltZXMuIElmIHRoZVxuICAgICAqIHVzZXIgaGFzIHNlbGVjdGVkIGEgZGF0ZSAoZXZlbiBpZiBpdCBoYXNcbiAgICAgKiBub3QgYmVlbiBjb25maXJtZWQgeWV0KSwgd2Ugc2hvdWxkIGFwcGx5XG4gICAgICogdGhlIG1heCBhbmQgbWluIHJlc3RyaWN0aW9ucyBzbyB0aGF0IHRoZVxuICAgICAqIHRpbWUgcGlja2VyIHNob3dzIHZhbHVlcyB0aGF0IGFyZVxuICAgICAqIGFwcHJvcHJpYXRlIGZvciB0aGUgc2VsZWN0ZWQgZGF0ZS5cbiAgICAgKi9cbiAgICBjb25zdCBhY3RpdmVQYXJ0ID0gdGhpcy5nZXRBY3RpdmVQYXJ0KCk7XG4gICAgY29uc3QgdXNlckhhc1NlbGVjdGVkRGF0ZSA9IGFjdGl2ZVBhcnQgIT09IHVuZGVmaW5lZDtcbiAgICBjb25zdCB7XG4gICAgICBob3Vyc0RhdGEsXG4gICAgICBtaW51dGVzRGF0YSxcbiAgICAgIGRheVBlcmlvZERhdGFcbiAgICB9ID0gZ2V0VGltZUNvbHVtbnNEYXRhKHRoaXMubG9jYWxlLCB0aGlzLndvcmtpbmdQYXJ0cywgdGhpcy5ob3VyQ3ljbGUsIHVzZXJIYXNTZWxlY3RlZERhdGUgPyB0aGlzLm1pblBhcnRzIDogdW5kZWZpbmVkLCB1c2VySGFzU2VsZWN0ZWREYXRlID8gdGhpcy5tYXhQYXJ0cyA6IHVuZGVmaW5lZCwgdGhpcy5wYXJzZWRIb3VyVmFsdWVzLCB0aGlzLnBhcnNlZE1pbnV0ZVZhbHVlcyk7XG4gICAgcmV0dXJuIFt0aGlzLnJlbmRlckhvdXJQaWNrZXJDb2x1bW4oaG91cnNEYXRhKSwgdGhpcy5yZW5kZXJNaW51dGVQaWNrZXJDb2x1bW4obWludXRlc0RhdGEpLCB0aGlzLnJlbmRlckRheVBlcmlvZFBpY2tlckNvbHVtbihkYXlQZXJpb2REYXRhKV07XG4gIH1cbiAgcmVuZGVySG91clBpY2tlckNvbHVtbihob3Vyc0RhdGEpIHtcbiAgICBjb25zdCB7XG4gICAgICBkaXNhYmxlZCxcbiAgICAgIHdvcmtpbmdQYXJ0c1xuICAgIH0gPSB0aGlzO1xuICAgIGlmIChob3Vyc0RhdGEubGVuZ3RoID09PSAwKSByZXR1cm4gW107XG4gICAgY29uc3QgYWN0aXZlUGFydCA9IHRoaXMuZ2V0QWN0aXZlUGFydHNXaXRoRmFsbGJhY2soKTtcbiAgICByZXR1cm4gaChcImlvbi1waWNrZXItY29sdW1uXCIsIHtcbiAgICAgIFwiYXJpYS1sYWJlbFwiOiBcIlNlbGVjdCBhbiBob3VyXCIsXG4gICAgICBjb2xvcjogdGhpcy5jb2xvcixcbiAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgIHZhbHVlOiBhY3RpdmVQYXJ0LmhvdXIsXG4gICAgICBudW1lcmljSW5wdXQ6IHRydWUsXG4gICAgICBvbklvbkNoYW5nZTogZXYgPT4ge1xuICAgICAgICB0aGlzLnNldFdvcmtpbmdQYXJ0cyhPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHdvcmtpbmdQYXJ0cyksIHtcbiAgICAgICAgICBob3VyOiBldi5kZXRhaWwudmFsdWVcbiAgICAgICAgfSkpO1xuICAgICAgICB0aGlzLnNldEFjdGl2ZVBhcnRzKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5nZXRBY3RpdmVQYXJ0c1dpdGhGYWxsYmFjaygpKSwge1xuICAgICAgICAgIGhvdXI6IGV2LmRldGFpbC52YWx1ZVxuICAgICAgICB9KSk7XG4gICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuICAgIH0sIGhvdXJzRGF0YS5tYXAoaG91ciA9PiBoKFwiaW9uLXBpY2tlci1jb2x1bW4tb3B0aW9uXCIsIHtcbiAgICAgIHBhcnQ6IGhvdXIudmFsdWUgPT09IGFjdGl2ZVBhcnQuaG91ciA/IGAke1dIRUVMX0lURU1fUEFSVH0gJHtXSEVFTF9JVEVNX0FDVElWRV9QQVJUfWAgOiBXSEVFTF9JVEVNX1BBUlQsXG4gICAgICBrZXk6IGhvdXIudmFsdWUsXG4gICAgICBkaXNhYmxlZDogaG91ci5kaXNhYmxlZCxcbiAgICAgIHZhbHVlOiBob3VyLnZhbHVlXG4gICAgfSwgaG91ci50ZXh0KSkpO1xuICB9XG4gIHJlbmRlck1pbnV0ZVBpY2tlckNvbHVtbihtaW51dGVzRGF0YSkge1xuICAgIGNvbnN0IHtcbiAgICAgIGRpc2FibGVkLFxuICAgICAgd29ya2luZ1BhcnRzXG4gICAgfSA9IHRoaXM7XG4gICAgaWYgKG1pbnV0ZXNEYXRhLmxlbmd0aCA9PT0gMCkgcmV0dXJuIFtdO1xuICAgIGNvbnN0IGFjdGl2ZVBhcnQgPSB0aGlzLmdldEFjdGl2ZVBhcnRzV2l0aEZhbGxiYWNrKCk7XG4gICAgcmV0dXJuIGgoXCJpb24tcGlja2VyLWNvbHVtblwiLCB7XG4gICAgICBcImFyaWEtbGFiZWxcIjogXCJTZWxlY3QgYSBtaW51dGVcIixcbiAgICAgIGNvbG9yOiB0aGlzLmNvbG9yLFxuICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgdmFsdWU6IGFjdGl2ZVBhcnQubWludXRlLFxuICAgICAgbnVtZXJpY0lucHV0OiB0cnVlLFxuICAgICAgb25Jb25DaGFuZ2U6IGV2ID0+IHtcbiAgICAgICAgdGhpcy5zZXRXb3JraW5nUGFydHMoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB3b3JraW5nUGFydHMpLCB7XG4gICAgICAgICAgbWludXRlOiBldi5kZXRhaWwudmFsdWVcbiAgICAgICAgfSkpO1xuICAgICAgICB0aGlzLnNldEFjdGl2ZVBhcnRzKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5nZXRBY3RpdmVQYXJ0c1dpdGhGYWxsYmFjaygpKSwge1xuICAgICAgICAgIG1pbnV0ZTogZXYuZGV0YWlsLnZhbHVlXG4gICAgICAgIH0pKTtcbiAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9XG4gICAgfSwgbWludXRlc0RhdGEubWFwKG1pbnV0ZSA9PiBoKFwiaW9uLXBpY2tlci1jb2x1bW4tb3B0aW9uXCIsIHtcbiAgICAgIHBhcnQ6IG1pbnV0ZS52YWx1ZSA9PT0gYWN0aXZlUGFydC5taW51dGUgPyBgJHtXSEVFTF9JVEVNX1BBUlR9ICR7V0hFRUxfSVRFTV9BQ1RJVkVfUEFSVH1gIDogV0hFRUxfSVRFTV9QQVJULFxuICAgICAga2V5OiBtaW51dGUudmFsdWUsXG4gICAgICBkaXNhYmxlZDogbWludXRlLmRpc2FibGVkLFxuICAgICAgdmFsdWU6IG1pbnV0ZS52YWx1ZVxuICAgIH0sIG1pbnV0ZS50ZXh0KSkpO1xuICB9XG4gIHJlbmRlckRheVBlcmlvZFBpY2tlckNvbHVtbihkYXlQZXJpb2REYXRhKSB7XG4gICAgY29uc3Qge1xuICAgICAgZGlzYWJsZWQsXG4gICAgICB3b3JraW5nUGFydHNcbiAgICB9ID0gdGhpcztcbiAgICBpZiAoZGF5UGVyaW9kRGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgY29uc3QgYWN0aXZlUGFydCA9IHRoaXMuZ2V0QWN0aXZlUGFydHNXaXRoRmFsbGJhY2soKTtcbiAgICBjb25zdCBpc0RheVBlcmlvZFJUTCA9IGlzTG9jYWxlRGF5UGVyaW9kUlRMKHRoaXMubG9jYWxlKTtcbiAgICByZXR1cm4gaChcImlvbi1waWNrZXItY29sdW1uXCIsIHtcbiAgICAgIFwiYXJpYS1sYWJlbFwiOiBcIlNlbGVjdCBhIGRheSBwZXJpb2RcIixcbiAgICAgIHN0eWxlOiBpc0RheVBlcmlvZFJUTCA/IHtcbiAgICAgICAgb3JkZXI6ICctMSdcbiAgICAgIH0gOiB7fSxcbiAgICAgIGNvbG9yOiB0aGlzLmNvbG9yLFxuICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgdmFsdWU6IGFjdGl2ZVBhcnQuYW1wbSxcbiAgICAgIG9uSW9uQ2hhbmdlOiBldiA9PiB7XG4gICAgICAgIGNvbnN0IGhvdXIgPSBjYWxjdWxhdGVIb3VyRnJvbUFNUE0od29ya2luZ1BhcnRzLCBldi5kZXRhaWwudmFsdWUpO1xuICAgICAgICB0aGlzLnNldFdvcmtpbmdQYXJ0cyhPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHdvcmtpbmdQYXJ0cyksIHtcbiAgICAgICAgICBhbXBtOiBldi5kZXRhaWwudmFsdWUsXG4gICAgICAgICAgaG91clxuICAgICAgICB9KSk7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlUGFydHMoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzLmdldEFjdGl2ZVBhcnRzV2l0aEZhbGxiYWNrKCkpLCB7XG4gICAgICAgICAgYW1wbTogZXYuZGV0YWlsLnZhbHVlLFxuICAgICAgICAgIGhvdXJcbiAgICAgICAgfSkpO1xuICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cbiAgICB9LCBkYXlQZXJpb2REYXRhLm1hcChkYXlQZXJpb2QgPT4gaChcImlvbi1waWNrZXItY29sdW1uLW9wdGlvblwiLCB7XG4gICAgICBwYXJ0OiBkYXlQZXJpb2QudmFsdWUgPT09IGFjdGl2ZVBhcnQuYW1wbSA/IGAke1dIRUVMX0lURU1fUEFSVH0gJHtXSEVFTF9JVEVNX0FDVElWRV9QQVJUfWAgOiBXSEVFTF9JVEVNX1BBUlQsXG4gICAgICBrZXk6IGRheVBlcmlvZC52YWx1ZSxcbiAgICAgIGRpc2FibGVkOiBkYXlQZXJpb2QuZGlzYWJsZWQsXG4gICAgICB2YWx1ZTogZGF5UGVyaW9kLnZhbHVlXG4gICAgfSwgZGF5UGVyaW9kLnRleHQpKSk7XG4gIH1cbiAgcmVuZGVyV2hlZWxWaWV3KGZvcmNlUHJlc2VudGF0aW9uKSB7XG4gICAgY29uc3Qge1xuICAgICAgbG9jYWxlXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3Qgc2hvd01vbnRoRmlyc3QgPSBpc01vbnRoRmlyc3RMb2NhbGUobG9jYWxlKTtcbiAgICBjb25zdCBjb2x1bW5PcmRlciA9IHNob3dNb250aEZpcnN0ID8gJ21vbnRoLWZpcnN0JyA6ICd5ZWFyLWZpcnN0JztcbiAgICByZXR1cm4gaChcImRpdlwiLCB7XG4gICAgICBjbGFzczoge1xuICAgICAgICBbYHdoZWVsLW9yZGVyLSR7Y29sdW1uT3JkZXJ9YF06IHRydWVcbiAgICAgIH1cbiAgICB9LCB0aGlzLnJlbmRlcldoZWVsUGlja2VyKGZvcmNlUHJlc2VudGF0aW9uKSk7XG4gIH1cbiAgLyoqXG4gICAqIEdyaWQgUmVuZGVyIE1ldGhvZHNcbiAgICovXG4gIHJlbmRlckNhbGVuZGFySGVhZGVyKG1vZGUpIHtcbiAgICBjb25zdCB7XG4gICAgICBkaXNhYmxlZFxuICAgIH0gPSB0aGlzO1xuICAgIGNvbnN0IGV4cGFuZGVkSWNvbiA9IG1vZGUgPT09ICdpb3MnID8gY2hldnJvbkRvd24gOiBjYXJldFVwU2hhcnA7XG4gICAgY29uc3QgY29sbGFwc2VkSWNvbiA9IG1vZGUgPT09ICdpb3MnID8gY2hldnJvbkZvcndhcmQgOiBjYXJldERvd25TaGFycDtcbiAgICBjb25zdCBwcmV2TW9udGhEaXNhYmxlZCA9IGRpc2FibGVkIHx8IGlzUHJldk1vbnRoRGlzYWJsZWQodGhpcy53b3JraW5nUGFydHMsIHRoaXMubWluUGFydHMsIHRoaXMubWF4UGFydHMpO1xuICAgIGNvbnN0IG5leHRNb250aERpc2FibGVkID0gZGlzYWJsZWQgfHwgaXNOZXh0TW9udGhEaXNhYmxlZCh0aGlzLndvcmtpbmdQYXJ0cywgdGhpcy5tYXhQYXJ0cyk7XG4gICAgLy8gZG9uJ3QgdXNlIHRoZSBpbmhlcml0QXR0cmlidXRlcyB1dGlsIGJlY2F1c2UgaXQgcmVtb3ZlcyBkaXIgZnJvbSB0aGUgaG9zdCwgYW5kIHdlIHN0aWxsIG5lZWQgdGhhdFxuICAgIGNvbnN0IGhvc3REaXIgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZSgnZGlyJykgfHwgdW5kZWZpbmVkO1xuICAgIHJldHVybiBoKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBcImNhbGVuZGFyLWhlYWRlclwiXG4gICAgfSwgaChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJjYWxlbmRhci1hY3Rpb24tYnV0dG9uc1wiXG4gICAgfSwgaChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJjYWxlbmRhci1tb250aC15ZWFyXCJcbiAgICB9LCBoKFwiYnV0dG9uXCIsIHtcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgICdjYWxlbmRhci1tb250aC15ZWFyLXRvZ2dsZSc6IHRydWUsXG4gICAgICAgICdpb24tYWN0aXZhdGFibGUnOiB0cnVlLFxuICAgICAgICAnaW9uLWZvY3VzYWJsZSc6IHRydWVcbiAgICAgIH0sXG4gICAgICBwYXJ0OiBcIm1vbnRoLXllYXItYnV0dG9uXCIsXG4gICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICBcImFyaWEtbGFiZWxcIjogdGhpcy5zaG93TW9udGhBbmRZZWFyID8gJ0hpZGUgeWVhciBwaWNrZXInIDogJ1Nob3cgeWVhciBwaWNrZXInLFxuICAgICAgb25DbGljazogKCkgPT4gdGhpcy50b2dnbGVNb250aEFuZFllYXJWaWV3KClcbiAgICB9LCBoKFwic3BhblwiLCB7XG4gICAgICBpZDogXCJ0b2dnbGUtd3JhcHBlclwiXG4gICAgfSwgZ2V0TW9udGhBbmRZZWFyKHRoaXMubG9jYWxlLCB0aGlzLndvcmtpbmdQYXJ0cyksIGgoXCJpb24taWNvblwiLCB7XG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLFxuICAgICAgaWNvbjogdGhpcy5zaG93TW9udGhBbmRZZWFyID8gZXhwYW5kZWRJY29uIDogY29sbGFwc2VkSWNvbixcbiAgICAgIGxhenk6IGZhbHNlLFxuICAgICAgZmxpcFJ0bDogdHJ1ZVxuICAgIH0pKSwgbW9kZSA9PT0gJ21kJyAmJiBoKFwiaW9uLXJpcHBsZS1lZmZlY3RcIiwgbnVsbCkpKSwgaChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJjYWxlbmRhci1uZXh0LXByZXZcIlxuICAgIH0sIGgoXCJpb24tYnV0dG9uc1wiLCBudWxsLCBoKFwiaW9uLWJ1dHRvblwiLCB7XG4gICAgICBcImFyaWEtbGFiZWxcIjogXCJQcmV2aW91cyBtb250aFwiLFxuICAgICAgZGlzYWJsZWQ6IHByZXZNb250aERpc2FibGVkLFxuICAgICAgb25DbGljazogKCkgPT4gdGhpcy5wcmV2TW9udGgoKVxuICAgIH0sIGgoXCJpb24taWNvblwiLCB7XG4gICAgICBkaXI6IGhvc3REaXIsXG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLFxuICAgICAgc2xvdDogXCJpY29uLW9ubHlcIixcbiAgICAgIGljb246IGNoZXZyb25CYWNrLFxuICAgICAgbGF6eTogZmFsc2UsXG4gICAgICBmbGlwUnRsOiB0cnVlXG4gICAgfSkpLCBoKFwiaW9uLWJ1dHRvblwiLCB7XG4gICAgICBcImFyaWEtbGFiZWxcIjogXCJOZXh0IG1vbnRoXCIsXG4gICAgICBkaXNhYmxlZDogbmV4dE1vbnRoRGlzYWJsZWQsXG4gICAgICBvbkNsaWNrOiAoKSA9PiB0aGlzLm5leHRNb250aCgpXG4gICAgfSwgaChcImlvbi1pY29uXCIsIHtcbiAgICAgIGRpcjogaG9zdERpcixcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsXG4gICAgICBzbG90OiBcImljb24tb25seVwiLFxuICAgICAgaWNvbjogY2hldnJvbkZvcndhcmQsXG4gICAgICBsYXp5OiBmYWxzZSxcbiAgICAgIGZsaXBSdGw6IHRydWVcbiAgICB9KSkpKSksIGgoXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IFwiY2FsZW5kYXItZGF5cy1vZi13ZWVrXCIsXG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiXG4gICAgfSwgZ2V0RGF5c09mV2Vlayh0aGlzLmxvY2FsZSwgbW9kZSwgdGhpcy5maXJzdERheU9mV2VlayAlIDcpLm1hcChkID0+IHtcbiAgICAgIHJldHVybiBoKFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3M6IFwiZGF5LW9mLXdlZWtcIlxuICAgICAgfSwgZCk7XG4gICAgfSkpKTtcbiAgfVxuICByZW5kZXJNb250aChtb250aCwgeWVhcikge1xuICAgIGNvbnN0IHtcbiAgICAgIGRpc2FibGVkLFxuICAgICAgcmVhZG9ubHlcbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCB5ZWFyQWxsb3dlZCA9IHRoaXMucGFyc2VkWWVhclZhbHVlcyA9PT0gdW5kZWZpbmVkIHx8IHRoaXMucGFyc2VkWWVhclZhbHVlcy5pbmNsdWRlcyh5ZWFyKTtcbiAgICBjb25zdCBtb250aEFsbG93ZWQgPSB0aGlzLnBhcnNlZE1vbnRoVmFsdWVzID09PSB1bmRlZmluZWQgfHwgdGhpcy5wYXJzZWRNb250aFZhbHVlcy5pbmNsdWRlcyhtb250aCk7XG4gICAgY29uc3QgaXNDYWxNb250aERpc2FibGVkID0gIXllYXJBbGxvd2VkIHx8ICFtb250aEFsbG93ZWQ7XG4gICAgY29uc3QgaXNEYXRldGltZURpc2FibGVkID0gZGlzYWJsZWQgfHwgcmVhZG9ubHk7XG4gICAgY29uc3Qgc3dpcGVEaXNhYmxlZCA9IGRpc2FibGVkIHx8IGlzTW9udGhEaXNhYmxlZCh7XG4gICAgICBtb250aCxcbiAgICAgIHllYXIsXG4gICAgICBkYXk6IG51bGxcbiAgICB9LCB7XG4gICAgICAvLyBUaGUgZGF5IGlzIG5vdCB1c2VkIHdoZW4gY2hlY2tpbmcgaWYgYSBtb250aCBpcyBkaXNhYmxlZC5cbiAgICAgIC8vIFVzZXJzIHNob3VsZCBiZSBhYmxlIHRvIGFjY2VzcyB0aGUgbWluIG9yIG1heCBtb250aCwgZXZlbiBpZiB0aGVcbiAgICAgIC8vIG1pbi9tYXggZGF0ZSBpcyBvdXQgb2YgYm91bmRzIChlLmcuIG1pbiBpcyBzZXQgdG8gRmViIDE1LCBGZWIgc2hvdWxkIG5vdCBiZSBkaXNhYmxlZCkuXG4gICAgICBtaW5QYXJ0czogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzLm1pblBhcnRzKSwge1xuICAgICAgICBkYXk6IG51bGxcbiAgICAgIH0pLFxuICAgICAgbWF4UGFydHM6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5tYXhQYXJ0cyksIHtcbiAgICAgICAgZGF5OiBudWxsXG4gICAgICB9KVxuICAgIH0pO1xuICAgIC8vIFRoZSB3b3JraW5nIG1vbnRoIHNob3VsZCBuZXZlciBoYXZlIHN3aXBlIGRpc2FibGVkLlxuICAgIC8vIE90aGVyd2lzZSB0aGUgQ1NTIHNjcm9sbCBzbmFwIHdpbGwgbm90IHdvcmsgYW5kIHRoZSB1c2VyXG4gICAgLy8gY2FuIGZyZWUtc2Nyb2xsIHRoZSBjYWxlbmRhci5cbiAgICBjb25zdCBpc1dvcmtpbmdNb250aCA9IHRoaXMud29ya2luZ1BhcnRzLm1vbnRoID09PSBtb250aCAmJiB0aGlzLndvcmtpbmdQYXJ0cy55ZWFyID09PSB5ZWFyO1xuICAgIGNvbnN0IGFjdGl2ZVBhcnQgPSB0aGlzLmdldEFjdGl2ZVBhcnRzV2l0aEZhbGxiYWNrKCk7XG4gICAgcmV0dXJuIGgoXCJkaXZcIiwge1xuICAgICAgXCJhcmlhLWhpZGRlblwiOiAhaXNXb3JraW5nTW9udGggPyAndHJ1ZScgOiBudWxsLFxuICAgICAgY2xhc3M6IHtcbiAgICAgICAgJ2NhbGVuZGFyLW1vbnRoJzogdHJ1ZSxcbiAgICAgICAgLy8gUHJldmVudHMgc2Nyb2xsIHNuYXAgc3dpcGUgZ2VzdHVyZXMgZm9yIG1vbnRocyBvdXRzaWRlIG9mIHRoZSBtaW4vbWF4IGJvdW5kc1xuICAgICAgICAnY2FsZW5kYXItbW9udGgtZGlzYWJsZWQnOiAhaXNXb3JraW5nTW9udGggJiYgc3dpcGVEaXNhYmxlZFxuICAgICAgfVxuICAgIH0sIGgoXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IFwiY2FsZW5kYXItbW9udGgtZ3JpZFwiXG4gICAgfSwgZ2V0RGF5c09mTW9udGgobW9udGgsIHllYXIsIHRoaXMuZmlyc3REYXlPZldlZWsgJSA3LCB0aGlzLnNob3dBZGphY2VudERheXMpLm1hcCgoZGF0ZU9iamVjdCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZGF5LFxuICAgICAgICBkYXlPZldlZWssXG4gICAgICAgIGlzQWRqYWNlbnREYXlcbiAgICAgIH0gPSBkYXRlT2JqZWN0O1xuICAgICAgY29uc3Qge1xuICAgICAgICBlbCxcbiAgICAgICAgaGlnaGxpZ2h0ZWREYXRlcyxcbiAgICAgICAgaXNEYXRlRW5hYmxlZCxcbiAgICAgICAgbXVsdGlwbGUsXG4gICAgICAgIHNob3dBZGphY2VudERheXNcbiAgICAgIH0gPSB0aGlzO1xuICAgICAgbGV0IF9tb250aCA9IG1vbnRoO1xuICAgICAgbGV0IF95ZWFyID0geWVhcjtcbiAgICAgIGlmIChzaG93QWRqYWNlbnREYXlzICYmIGlzQWRqYWNlbnREYXkgJiYgZGF5ICE9PSBudWxsKSB7XG4gICAgICAgIGlmIChkYXkgPiAyMCkge1xuICAgICAgICAgIC8vIExlYWRpbmcgd2l0aCB0aGUgYWRqYWNlbnQgZGF5IGZyb20gdGhlIHByZXZpb3VzIG1vbnRoXG4gICAgICAgICAgLy8gaWYgaXRzIGEgYWRqYWNlbnQgZGF5IGFuZCBpcyBoaWdoZXIgdGhhbiAnMjAnIChsYXN0IHdlZWsgZXZlbiBpbiBmZWIpXG4gICAgICAgICAgaWYgKG1vbnRoID09PSAxKSB7XG4gICAgICAgICAgICBfeWVhciA9IHllYXIgLSAxO1xuICAgICAgICAgICAgX21vbnRoID0gMTI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9tb250aCA9IG1vbnRoIC0gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZGF5IDwgMTUpIHtcbiAgICAgICAgICAvLyBMZWFkaW5nIHdpdGggdGhlIGFkamFjZW50IGRheSBmcm9tIHRoZSBuZXh0IG1vbnRoXG4gICAgICAgICAgLy8gaWYgaXRzIGEgYWRqYWNlbnQgZGF5IGFuZCBpcyBsb3dlciB0aGFuICcxNScgKGZpcnN0IHR3byB3ZWVrcylcbiAgICAgICAgICBpZiAobW9udGggPT09IDEyKSB7XG4gICAgICAgICAgICBfeWVhciA9IHllYXIgKyAxO1xuICAgICAgICAgICAgX21vbnRoID0gMTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX21vbnRoID0gbW9udGggKyAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgcmVmZXJlbmNlUGFydHMgPSB7XG4gICAgICAgIG1vbnRoOiBfbW9udGgsXG4gICAgICAgIGRheSxcbiAgICAgICAgeWVhcjogX3llYXIsXG4gICAgICAgIGlzQWRqYWNlbnREYXlcbiAgICAgIH07XG4gICAgICBjb25zdCBpc0NhbGVuZGFyUGFkZGluZyA9IGRheSA9PT0gbnVsbDtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgaXNBY3RpdmUsXG4gICAgICAgIGlzVG9kYXksXG4gICAgICAgIGFyaWFMYWJlbCxcbiAgICAgICAgYXJpYVNlbGVjdGVkLFxuICAgICAgICBkaXNhYmxlZDogaXNEYXlEaXNhYmxlZCxcbiAgICAgICAgdGV4dFxuICAgICAgfSA9IGdldENhbGVuZGFyRGF5U3RhdGUodGhpcy5sb2NhbGUsIHJlZmVyZW5jZVBhcnRzLCB0aGlzLmFjdGl2ZVBhcnRzLCB0aGlzLnRvZGF5UGFydHMsIHRoaXMubWluUGFydHMsIHRoaXMubWF4UGFydHMsIHRoaXMucGFyc2VkRGF5VmFsdWVzKTtcbiAgICAgIGNvbnN0IGRhdGVJc29TdHJpbmcgPSBjb252ZXJ0RGF0YVRvSVNPKHJlZmVyZW5jZVBhcnRzKTtcbiAgICAgIGxldCBpc0NhbERheURpc2FibGVkID0gaXNDYWxNb250aERpc2FibGVkIHx8IGlzRGF5RGlzYWJsZWQ7XG4gICAgICBpZiAoIWlzQ2FsRGF5RGlzYWJsZWQgJiYgaXNEYXRlRW5hYmxlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogVGhlIGBpc0RhdGVFbmFibGVkYCBpbXBsZW1lbnRhdGlvbiBpcyB0cnktY2F0Y2ggd3JhcHBlZFxuICAgICAgICAgICAqIHRvIHByZXZlbnQgZXhjZXB0aW9ucyBpbiB0aGUgdXNlcidzIGZ1bmN0aW9uIGZyb21cbiAgICAgICAgICAgKiBpbnRlcnJ1cHRpbmcgdGhlIGNhbGVuZGFyIHJlbmRlcmluZy5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBpc0NhbERheURpc2FibGVkID0gIWlzRGF0ZUVuYWJsZWQoZGF0ZUlzb1N0cmluZyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBwcmludElvbkVycm9yKCdbaW9uLWRhdGV0aW1lXSAtIEV4Y2VwdGlvbiB0aHJvd24gZnJvbSBwcm92aWRlZCBgaXNEYXRlRW5hYmxlZGAgZnVuY3Rpb24uIFBsZWFzZSBjaGVjayB5b3VyIGZ1bmN0aW9uIGFuZCB0cnkgYWdhaW4uJywgZWwsIGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIFNvbWUgZGF5cyBhcmUgY29uc3RyYWluZWQgdGhyb3VnaCBtYXggJiBtaW4gb3IgYWxsb3dlZCBkYXRlc1xuICAgICAgICogYW5kIGFsc28gZGlzYWJsZWQgYmVjYXVzZSB0aGUgY29tcG9uZW50IGlzIHJlYWRvbmx5IG9yIGRpc2FibGVkLlxuICAgICAgICogVGhlc2UgbmVlZCB0byBiZSBkaXNwbGF5ZWQgZGlmZmVyZW50bHkuXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IGlzQ2FsRGF5Q29uc3RyYWluZWQgPSBpc0NhbERheURpc2FibGVkICYmIGlzRGF0ZXRpbWVEaXNhYmxlZDtcbiAgICAgIGNvbnN0IGlzQnV0dG9uRGlzYWJsZWQgPSBpc0NhbERheURpc2FibGVkIHx8IGlzRGF0ZXRpbWVEaXNhYmxlZDtcbiAgICAgIGxldCBkYXRlU3R5bGUgPSB1bmRlZmluZWQ7XG4gICAgICAvKipcbiAgICAgICAqIEN1c3RvbSBoaWdobGlnaHQgc3R5bGVzIHNob3VsZCBub3Qgb3ZlcnJpZGUgdGhlIHN0eWxlIGZvciBzZWxlY3RlZCBkYXRlcyxcbiAgICAgICAqIG5vciBhcHBseSB0byBcImZpbGxlciBkYXlzXCIgYXQgdGhlIHN0YXJ0IG9mIHRoZSBncmlkLlxuICAgICAgICovXG4gICAgICBpZiAoaGlnaGxpZ2h0ZWREYXRlcyAhPT0gdW5kZWZpbmVkICYmICFpc0FjdGl2ZSAmJiBkYXkgIT09IG51bGwgJiYgIWlzQWRqYWNlbnREYXkpIHtcbiAgICAgICAgZGF0ZVN0eWxlID0gZ2V0SGlnaGxpZ2h0U3R5bGVzKGhpZ2hsaWdodGVkRGF0ZXMsIGRhdGVJc29TdHJpbmcsIGVsKTtcbiAgICAgIH1cbiAgICAgIGxldCBkYXRlUGFydHMgPSB1bmRlZmluZWQ7XG4gICAgICAvLyBcIkZpbGxlciBkYXlzXCIgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgZ3JpZCBzaG91bGQgbm90IGdldCB0aGUgY2FsZW5kYXIgZGF5XG4gICAgICAvLyBDU1MgcGFydHMgYWRkZWQgdG8gdGhlbVxuICAgICAgaWYgKCFpc0NhbGVuZGFyUGFkZGluZyAmJiAhaXNBZGphY2VudERheSkge1xuICAgICAgICBkYXRlUGFydHMgPSBgY2FsZW5kYXItZGF5JHtpc0FjdGl2ZSA/ICcgYWN0aXZlJyA6ICcnfSR7aXNUb2RheSA/ICcgdG9kYXknIDogJyd9JHtpc0NhbERheURpc2FibGVkID8gJyBkaXNhYmxlZCcgOiAnJ31gO1xuICAgICAgfSBlbHNlIGlmIChpc0FkamFjZW50RGF5KSB7XG4gICAgICAgIGRhdGVQYXJ0cyA9IGBjYWxlbmRhci1kYXkke2lzQ2FsRGF5RGlzYWJsZWQgPyAnIGRpc2FibGVkJyA6ICcnfWA7XG4gICAgICB9XG4gICAgICByZXR1cm4gaChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzOiBcImNhbGVuZGFyLWRheS13cmFwcGVyXCJcbiAgICAgIH0sIGgoXCJidXR0b25cIiwge1xuICAgICAgICAvLyBXZSBuZWVkIHRvIHVzZSAhaW1wb3J0YW50IGZvciB0aGUgaW5saW5lIHN0eWxlcyBoZXJlIGJlY2F1c2VcbiAgICAgICAgLy8gb3RoZXJ3aXNlIHRoZSBDU1Mgc2hhZG93IHBhcnRzIHdpbGwgb3ZlcnJpZGUgdGhlc2Ugc3R5bGVzLlxuICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL1dJQ0cvd2ViY29tcG9uZW50cy9pc3N1ZXMvODQ3XG4gICAgICAgIC8vIEJvdGggdGhlIENTUyBzaGFkb3cgcGFydHMgYW5kIGhpZ2hsaWdodGVkRGF0ZXMgc3R5bGVzIGFyZVxuICAgICAgICAvLyBwcm92aWRlZCBieSB0aGUgZGV2ZWxvcGVyLCBidXQgaGlnaGxpZ2h0ZWREYXRlcyBzdHlsZXMgc2hvdWxkXG4gICAgICAgIC8vIGFsd2F5cyB0YWtlIHByaW9yaXR5LlxuICAgICAgICByZWY6IGVsID0+IHtcbiAgICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KCdjb2xvcicsIGAke2RhdGVTdHlsZSA/IGRhdGVTdHlsZS50ZXh0Q29sb3IgOiAnJ31gLCAnaW1wb3J0YW50Jyk7XG4gICAgICAgICAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eSgnYmFja2dyb3VuZC1jb2xvcicsIGAke2RhdGVTdHlsZSA/IGRhdGVTdHlsZS5iYWNrZ3JvdW5kQ29sb3IgOiAnJ31gLCAnaW1wb3J0YW50Jyk7XG4gICAgICAgICAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eSgnYm9yZGVyJywgYCR7ZGF0ZVN0eWxlID8gZGF0ZVN0eWxlLmJvcmRlciA6ICcnfWAsICdpbXBvcnRhbnQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHRhYmluZGV4OiBcIi0xXCIsXG4gICAgICAgIFwiZGF0YS1kYXlcIjogZGF5LFxuICAgICAgICBcImRhdGEtbW9udGhcIjogX21vbnRoLFxuICAgICAgICBcImRhdGEteWVhclwiOiBfeWVhcixcbiAgICAgICAgXCJkYXRhLWluZGV4XCI6IGluZGV4LFxuICAgICAgICBcImRhdGEtZGF5LW9mLXdlZWtcIjogZGF5T2ZXZWVrLFxuICAgICAgICBkaXNhYmxlZDogaXNCdXR0b25EaXNhYmxlZCxcbiAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAnY2FsZW5kYXItZGF5LXBhZGRpbmcnOiBpc0NhbGVuZGFyUGFkZGluZyxcbiAgICAgICAgICAnY2FsZW5kYXItZGF5JzogdHJ1ZSxcbiAgICAgICAgICAnY2FsZW5kYXItZGF5LWFjdGl2ZSc6IGlzQWN0aXZlLFxuICAgICAgICAgICdjYWxlbmRhci1kYXktY29uc3RyYWluZWQnOiBpc0NhbERheUNvbnN0cmFpbmVkLFxuICAgICAgICAgICdjYWxlbmRhci1kYXktdG9kYXknOiBpc1RvZGF5LFxuICAgICAgICAgICdjYWxlbmRhci1kYXktYWRqYWNlbnQtZGF5JzogaXNBZGphY2VudERheVxuICAgICAgICB9LFxuICAgICAgICBwYXJ0OiBkYXRlUGFydHMsXG4gICAgICAgIFwiYXJpYS1oaWRkZW5cIjogaXNDYWxlbmRhclBhZGRpbmcgPyAndHJ1ZScgOiBudWxsLFxuICAgICAgICBcImFyaWEtc2VsZWN0ZWRcIjogYXJpYVNlbGVjdGVkLFxuICAgICAgICBcImFyaWEtbGFiZWxcIjogYXJpYUxhYmVsLFxuICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgaWYgKGlzQ2FsZW5kYXJQYWRkaW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpc0FkamFjZW50RGF5KSB7XG4gICAgICAgICAgICAvLyBUaGUgdXNlciBzZWxlY3RlZCBhIGRheSBvdXRzaWRlIHRoZSBjdXJyZW50IG1vbnRoLiBJZ25vcmUgdGhpcyBidXR0b24sIGFzIHRoZSBtb250aCB3aWxsIGJlIHJlLXJlbmRlcmVkLlxuICAgICAgICAgICAgdGhpcy5lbC5ibHVyKCk7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVBhcnRzID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBhY3RpdmVQYXJ0KSwgcmVmZXJlbmNlUGFydHMpO1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlVG9EYXRlKHJlZmVyZW5jZVBhcnRzKTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFdvcmtpbmdQYXJ0cyhPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMud29ya2luZ1BhcnRzKSwgcmVmZXJlbmNlUGFydHMpKTtcbiAgICAgICAgICAgIC8vIE11bHRpcGxlIG9ubHkgbmVlZHMgZGF0ZSBpbmZvIHNvIHdlIGNhbiB3aXBlIG91dCBvdGhlciBmaWVsZHMgbGlrZSB0aW1lLlxuICAgICAgICAgICAgaWYgKG11bHRpcGxlKSB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlUGFydHMocmVmZXJlbmNlUGFydHMsIGlzQWN0aXZlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlUGFydHMoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBhY3RpdmVQYXJ0KSwgcmVmZXJlbmNlUGFydHMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIHRleHQpKTtcbiAgICB9KSkpO1xuICB9XG4gIHJlbmRlckNhbGVuZGFyQm9keSgpIHtcbiAgICByZXR1cm4gaChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJjYWxlbmRhci1ib2R5IGlvbi1mb2N1c2FibGVcIixcbiAgICAgIHJlZjogZWwgPT4gdGhpcy5jYWxlbmRhckJvZHlSZWYgPSBlbCxcbiAgICAgIHRhYmluZGV4OiBcIjBcIlxuICAgIH0sIGdlbmVyYXRlTW9udGhzKHRoaXMud29ya2luZ1BhcnRzLCB0aGlzLmZvcmNlUmVuZGVyRGF0ZSkubWFwKCh7XG4gICAgICBtb250aCxcbiAgICAgIHllYXJcbiAgICB9KSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJNb250aChtb250aCwgeWVhcik7XG4gICAgfSkpO1xuICB9XG4gIHJlbmRlckNhbGVuZGFyKG1vZGUpIHtcbiAgICByZXR1cm4gaChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJkYXRldGltZS1jYWxlbmRhclwiLFxuICAgICAga2V5OiBcImRhdGV0aW1lLWNhbGVuZGFyXCJcbiAgICB9LCB0aGlzLnJlbmRlckNhbGVuZGFySGVhZGVyKG1vZGUpLCB0aGlzLnJlbmRlckNhbGVuZGFyQm9keSgpKTtcbiAgfVxuICByZW5kZXJUaW1lTGFiZWwoKSB7XG4gICAgY29uc3QgaGFzU2xvdHRlZFRpbWVMYWJlbCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignW3Nsb3Q9XCJ0aW1lLWxhYmVsXCJdJykgIT09IG51bGw7XG4gICAgaWYgKCFoYXNTbG90dGVkVGltZUxhYmVsICYmICF0aGlzLnNob3dEZWZhdWx0VGltZUxhYmVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiBoKFwic2xvdFwiLCB7XG4gICAgICBuYW1lOiBcInRpbWUtbGFiZWxcIlxuICAgIH0sIFwiVGltZVwiKTtcbiAgfVxuICByZW5kZXJUaW1lT3ZlcmxheSgpIHtcbiAgICBjb25zdCB7XG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGhvdXJDeWNsZSxcbiAgICAgIGlzVGltZVBvcG92ZXJPcGVuLFxuICAgICAgbG9jYWxlLFxuICAgICAgZm9ybWF0T3B0aW9uc1xuICAgIH0gPSB0aGlzO1xuICAgIGNvbnN0IGNvbXB1dGVkSG91ckN5Y2xlID0gZ2V0SG91ckN5Y2xlKGxvY2FsZSwgaG91ckN5Y2xlKTtcbiAgICBjb25zdCBhY3RpdmVQYXJ0ID0gdGhpcy5nZXRBY3RpdmVQYXJ0c1dpdGhGYWxsYmFjaygpO1xuICAgIHJldHVybiBbaChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJ0aW1lLWhlYWRlclwiXG4gICAgfSwgdGhpcy5yZW5kZXJUaW1lTGFiZWwoKSksIGgoXCJidXR0b25cIiwge1xuICAgICAgY2xhc3M6IHtcbiAgICAgICAgJ3RpbWUtYm9keSc6IHRydWUsXG4gICAgICAgICd0aW1lLWJvZHktYWN0aXZlJzogaXNUaW1lUG9wb3Zlck9wZW5cbiAgICAgIH0sXG4gICAgICBwYXJ0OiBgdGltZS1idXR0b24ke2lzVGltZVBvcG92ZXJPcGVuID8gJyBhY3RpdmUnIDogJyd9YCxcbiAgICAgIFwiYXJpYS1leHBhbmRlZFwiOiBcImZhbHNlXCIsXG4gICAgICBcImFyaWEtaGFzcG9wdXBcIjogXCJ0cnVlXCIsXG4gICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICBvbkNsaWNrOiBhc3luYyBldiA9PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBwb3BvdmVyUmVmXG4gICAgICAgIH0gPSB0aGlzO1xuICAgICAgICBpZiAocG9wb3ZlclJlZikge1xuICAgICAgICAgIHRoaXMuaXNUaW1lUG9wb3Zlck9wZW4gPSB0cnVlO1xuICAgICAgICAgIHBvcG92ZXJSZWYucHJlc2VudChuZXcgQ3VzdG9tRXZlbnQoJ2lvblNoYWRvd1RhcmdldCcsIHtcbiAgICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgICBpb25TaGFkb3dUYXJnZXQ6IGV2LnRhcmdldFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgICBhd2FpdCBwb3BvdmVyUmVmLm9uV2lsbERpc21pc3MoKTtcbiAgICAgICAgICB0aGlzLmlzVGltZVBvcG92ZXJPcGVuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBnZXRMb2NhbGl6ZWRUaW1lKGxvY2FsZSwgYWN0aXZlUGFydCwgY29tcHV0ZWRIb3VyQ3ljbGUsIGZvcm1hdE9wdGlvbnMgPT09IG51bGwgfHwgZm9ybWF0T3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZm9ybWF0T3B0aW9ucy50aW1lKSksIGgoXCJpb24tcG9wb3ZlclwiLCB7XG4gICAgICBhbGlnbm1lbnQ6IFwiY2VudGVyXCIsXG4gICAgICB0cmFuc2x1Y2VudDogdHJ1ZSxcbiAgICAgIG92ZXJsYXlJbmRleDogMSxcbiAgICAgIGFycm93OiBmYWxzZSxcbiAgICAgIG9uV2lsbFByZXNlbnQ6IGV2ID0+IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEludGVyc2VjdGlvbiBPYnNlcnZlcnMgZG8gbm90IGNvbnNpc3RlbnRseSBmaXJlIGJldHdlZW4gQmxpbmsgYW5kIFdlYmtpdFxuICAgICAgICAgKiB3aGVuIHRvZ2dsaW5nIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBwb3BvdmVyIGFuZCB0cnlpbmcgdG8gc2Nyb2xsIHRoZSBwaWNrZXJcbiAgICAgICAgICogY29sdW1uIHRvIHRoZSBjb3JyZWN0IHRpbWUgdmFsdWUuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoaXMgd2lsbCBjb3JyZWN0bHkgc2Nyb2xsIHRoZSBlbGVtZW50IHBvc2l0aW9uIHRvIHRoZSBjb3JyZWN0IHRpbWUgdmFsdWUsXG4gICAgICAgICAqIGJlZm9yZSB0aGUgcG9wb3ZlciBpcyBmdWxseSBwcmVzZW50ZWQuXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBjb2xzID0gZXYudGFyZ2V0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lvbi1waWNrZXItY29sdW1uJyk7XG4gICAgICAgIC8vIFRPRE8gKEZXLTYxNSk6IFBvdGVudGlhbGx5IHJlbW92ZSB0aGlzIHdoZW4gaW50ZXJzZWN0aW9uIG9ic2VydmVycyBhcmUgZml4ZWQgaW4gcGlja2VyIGNvbHVtblxuICAgICAgICBjb2xzLmZvckVhY2goY29sID0+IGNvbC5zY3JvbGxBY3RpdmVJdGVtSW50b1ZpZXcoKSk7XG4gICAgICB9LFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgJy0tb2Zmc2V0LXknOiAnLTEwcHgnLFxuICAgICAgICAnLS1taW4td2lkdGgnOiAnZml0LWNvbnRlbnQnXG4gICAgICB9LFxuICAgICAgLy8gQWxsb3cgbmF0aXZlIGJyb3dzZXIga2V5Ym9hcmQgZXZlbnRzIHRvIHN1cHBvcnQgdXAvZG93bi9ob21lL2VuZCBrZXlcbiAgICAgIC8vIG5hdmlnYXRpb24gd2l0aGluIHRoZSB0aW1lIHBpY2tlci5cbiAgICAgIGtleWJvYXJkRXZlbnRzOiB0cnVlLFxuICAgICAgcmVmOiBlbCA9PiB0aGlzLnBvcG92ZXJSZWYgPSBlbFxuICAgIH0sIHRoaXMucmVuZGVyV2hlZWxQaWNrZXIoJ3RpbWUnKSldO1xuICB9XG4gIGdldEhlYWRlclNlbGVjdGVkRGF0ZVRleHQoKSB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IHtcbiAgICAgIGFjdGl2ZVBhcnRzLFxuICAgICAgZm9ybWF0T3B0aW9ucyxcbiAgICAgIG11bHRpcGxlLFxuICAgICAgdGl0bGVTZWxlY3RlZERhdGVzRm9ybWF0dGVyXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoYWN0aXZlUGFydHMpO1xuICAgIGxldCBoZWFkZXJUZXh0O1xuICAgIGlmIChtdWx0aXBsZSAmJiBpc0FycmF5ICYmIGFjdGl2ZVBhcnRzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgaGVhZGVyVGV4dCA9IGAke2FjdGl2ZVBhcnRzLmxlbmd0aH0gZGF5c2A7IC8vIGRlZmF1bHQvZmFsbGJhY2sgZm9yIG11bHRpcGxlIHNlbGVjdGlvblxuICAgICAgaWYgKHRpdGxlU2VsZWN0ZWREYXRlc0Zvcm1hdHRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaGVhZGVyVGV4dCA9IHRpdGxlU2VsZWN0ZWREYXRlc0Zvcm1hdHRlcihjb252ZXJ0RGF0YVRvSVNPKGFjdGl2ZVBhcnRzKSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBwcmludElvbkVycm9yKCdbaW9uLWRhdGV0aW1lXSAtIEV4Y2VwdGlvbiBpbiBwcm92aWRlZCBgdGl0bGVTZWxlY3RlZERhdGVzRm9ybWF0dGVyYDonLCBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBmb3IgZXhhY3RseSAxIGRheSBzZWxlY3RlZCAobXVsdGlwbGUgc2V0IG9yIG5vdCksIHNob3cgYSBmb3JtYXR0ZWQgdmVyc2lvbiBvZiB0aGF0XG4gICAgICBoZWFkZXJUZXh0ID0gZ2V0TG9jYWxpemVkRGF0ZVRpbWUodGhpcy5sb2NhbGUsIHRoaXMuZ2V0QWN0aXZlUGFydHNXaXRoRmFsbGJhY2soKSwgKF9hID0gZm9ybWF0T3B0aW9ucyA9PT0gbnVsbCB8fCBmb3JtYXRPcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBmb3JtYXRPcHRpb25zLmRhdGUpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHtcbiAgICAgICAgd2Vla2RheTogJ3Nob3J0JyxcbiAgICAgICAgbW9udGg6ICdzaG9ydCcsXG4gICAgICAgIGRheTogJ251bWVyaWMnXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGhlYWRlclRleHQ7XG4gIH1cbiAgcmVuZGVySGVhZGVyKHNob3dFeHBhbmRlZEhlYWRlciA9IHRydWUpIHtcbiAgICBjb25zdCBoYXNTbG90dGVkVGl0bGUgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ1tzbG90PVwidGl0bGVcIl0nKSAhPT0gbnVsbDtcbiAgICBpZiAoIWhhc1Nsb3R0ZWRUaXRsZSAmJiAhdGhpcy5zaG93RGVmYXVsdFRpdGxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiBoKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBcImRhdGV0aW1lLWhlYWRlclwiXG4gICAgfSwgaChcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJkYXRldGltZS10aXRsZVwiXG4gICAgfSwgaChcInNsb3RcIiwge1xuICAgICAgbmFtZTogXCJ0aXRsZVwiXG4gICAgfSwgXCJTZWxlY3QgRGF0ZVwiKSksIHNob3dFeHBhbmRlZEhlYWRlciAmJiBoKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBcImRhdGV0aW1lLXNlbGVjdGVkLWRhdGVcIlxuICAgIH0sIHRoaXMuZ2V0SGVhZGVyU2VsZWN0ZWREYXRlVGV4dCgpKSk7XG4gIH1cbiAgLyoqXG4gICAqIFJlbmRlciB0aW1lIHBpY2tlciBpbnNpZGUgb2YgZGF0ZXRpbWUuXG4gICAqIERvIG5vdCBwYXNzIGNvbG9yIHByb3AgdG8gc2VnbWVudCBvblxuICAgKiBpT1MgbW9kZS4gTUQgc2VnbWVudCBoYXMgYmVlbiBjdXN0b21pemVkIGFuZFxuICAgKiBzaG91bGQgdGFrZSBvbiB0aGUgY29sb3IgcHJvcCwgYnV0IGlPU1xuICAgKiBzaG91bGQganVzdCBiZSB0aGUgZGVmYXVsdCBzZWdtZW50LlxuICAgKi9cbiAgcmVuZGVyVGltZSgpIHtcbiAgICBjb25zdCB7XG4gICAgICBwcmVzZW50YXRpb25cbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCB0aW1lT25seVByZXNlbnRhdGlvbiA9IHByZXNlbnRhdGlvbiA9PT0gJ3RpbWUnO1xuICAgIHJldHVybiBoKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBcImRhdGV0aW1lLXRpbWVcIlxuICAgIH0sIHRpbWVPbmx5UHJlc2VudGF0aW9uID8gdGhpcy5yZW5kZXJXaGVlbFBpY2tlcigpIDogdGhpcy5yZW5kZXJUaW1lT3ZlcmxheSgpKTtcbiAgfVxuICAvKipcbiAgICogUmVuZGVycyB0aGUgbW9udGgveWVhciBwaWNrZXIgdGhhdCBpc1xuICAgKiBkaXNwbGF5ZWQgb24gdGhlIGNhbGVuZGFyIGdyaWQuXG4gICAqIFRoZSAuZGF0ZXRpbWUteWVhciBjbGFzcyBoYXMgYWRkaXRpb25hbFxuICAgKiBzdHlsZXMgdGhhdCBsZXQgdXMgc2hvdy9oaWRlIHRoZVxuICAgKiBwaWNrZXIgd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gdGhlXG4gICAqIHRvZ2dsZSBpbiB0aGUgY2FsZW5kYXIgaGVhZGVyLlxuICAgKi9cbiAgcmVuZGVyQ2FsZW5kYXJWaWV3TW9udGhZZWFyUGlja2VyKCkge1xuICAgIHJldHVybiBoKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBcImRhdGV0aW1lLXllYXJcIlxuICAgIH0sIHRoaXMucmVuZGVyV2hlZWxWaWV3KCdtb250aC15ZWFyJykpO1xuICB9XG4gIC8qKlxuICAgKiBSZW5kZXIgZW50cnkgcG9pbnRcbiAgICogQWxsIHByZXNlbnRhdGlvbiB0eXBlcyBhcmUgcmVuZGVyZWQgZnJvbSBoZXJlLlxuICAgKi9cbiAgcmVuZGVyRGF0ZXRpbWUobW9kZSkge1xuICAgIGNvbnN0IHtcbiAgICAgIHByZXNlbnRhdGlvbixcbiAgICAgIHByZWZlcldoZWVsXG4gICAgfSA9IHRoaXM7XG4gICAgLyoqXG4gICAgICogQ2VydGFpbiBwcmVzZW50YXRpb24gdHlwZXMgaGF2ZSBzZXBhcmF0ZSBncmlkIGFuZCB3aGVlbCBkaXNwbGF5cy5cbiAgICAgKiBJZiBwcmVmZXJXaGVlbCBpcyB0cnVlIHRoZW4gd2Ugc2hvdWxkIHNob3cgYSB3aGVlbCBwaWNrZXIgaW5zdGVhZC5cbiAgICAgKi9cbiAgICBjb25zdCBoYXNXaGVlbFZhcmlhbnQgPSBwcmVzZW50YXRpb24gPT09ICdkYXRlJyB8fCBwcmVzZW50YXRpb24gPT09ICdkYXRlLXRpbWUnIHx8IHByZXNlbnRhdGlvbiA9PT0gJ3RpbWUtZGF0ZSc7XG4gICAgaWYgKHByZWZlcldoZWVsICYmIGhhc1doZWVsVmFyaWFudCkge1xuICAgICAgcmV0dXJuIFt0aGlzLnJlbmRlckhlYWRlcihmYWxzZSksIHRoaXMucmVuZGVyV2hlZWxWaWV3KCksIHRoaXMucmVuZGVyRm9vdGVyKCldO1xuICAgIH1cbiAgICBzd2l0Y2ggKHByZXNlbnRhdGlvbikge1xuICAgICAgY2FzZSAnZGF0ZS10aW1lJzpcbiAgICAgICAgcmV0dXJuIFt0aGlzLnJlbmRlckhlYWRlcigpLCB0aGlzLnJlbmRlckNhbGVuZGFyKG1vZGUpLCB0aGlzLnJlbmRlckNhbGVuZGFyVmlld01vbnRoWWVhclBpY2tlcigpLCB0aGlzLnJlbmRlclRpbWUoKSwgdGhpcy5yZW5kZXJGb290ZXIoKV07XG4gICAgICBjYXNlICd0aW1lLWRhdGUnOlxuICAgICAgICByZXR1cm4gW3RoaXMucmVuZGVySGVhZGVyKCksIHRoaXMucmVuZGVyVGltZSgpLCB0aGlzLnJlbmRlckNhbGVuZGFyKG1vZGUpLCB0aGlzLnJlbmRlckNhbGVuZGFyVmlld01vbnRoWWVhclBpY2tlcigpLCB0aGlzLnJlbmRlckZvb3RlcigpXTtcbiAgICAgIGNhc2UgJ3RpbWUnOlxuICAgICAgICByZXR1cm4gW3RoaXMucmVuZGVySGVhZGVyKGZhbHNlKSwgdGhpcy5yZW5kZXJUaW1lKCksIHRoaXMucmVuZGVyRm9vdGVyKCldO1xuICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgY2FzZSAnbW9udGgteWVhcic6XG4gICAgICBjYXNlICd5ZWFyJzpcbiAgICAgICAgcmV0dXJuIFt0aGlzLnJlbmRlckhlYWRlcihmYWxzZSksIHRoaXMucmVuZGVyV2hlZWxWaWV3KCksIHRoaXMucmVuZGVyRm9vdGVyKCldO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFt0aGlzLnJlbmRlckhlYWRlcigpLCB0aGlzLnJlbmRlckNhbGVuZGFyKG1vZGUpLCB0aGlzLnJlbmRlckNhbGVuZGFyVmlld01vbnRoWWVhclBpY2tlcigpLCB0aGlzLnJlbmRlckZvb3RlcigpXTtcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIG5hbWUsXG4gICAgICB2YWx1ZSxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgZWwsXG4gICAgICBjb2xvcixcbiAgICAgIHJlYWRvbmx5LFxuICAgICAgc2hvd01vbnRoQW5kWWVhcixcbiAgICAgIHByZWZlcldoZWVsLFxuICAgICAgcHJlc2VudGF0aW9uLFxuICAgICAgc2l6ZSxcbiAgICAgIGlzR3JpZFN0eWxlXG4gICAgfSA9IHRoaXM7XG4gICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgY29uc3QgaXNNb250aEFuZFllYXJQcmVzZW50YXRpb24gPSBwcmVzZW50YXRpb24gPT09ICd5ZWFyJyB8fCBwcmVzZW50YXRpb24gPT09ICdtb250aCcgfHwgcHJlc2VudGF0aW9uID09PSAnbW9udGgteWVhcic7XG4gICAgY29uc3Qgc2hvdWxkU2hvd01vbnRoQW5kWWVhciA9IHNob3dNb250aEFuZFllYXIgfHwgaXNNb250aEFuZFllYXJQcmVzZW50YXRpb247XG4gICAgY29uc3QgbW9udGhZZWFyUGlja2VyT3BlbiA9IHNob3dNb250aEFuZFllYXIgJiYgIWlzTW9udGhBbmRZZWFyUHJlc2VudGF0aW9uO1xuICAgIGNvbnN0IGhhc0RhdGVQcmVzZW50YXRpb24gPSBwcmVzZW50YXRpb24gPT09ICdkYXRlJyB8fCBwcmVzZW50YXRpb24gPT09ICdkYXRlLXRpbWUnIHx8IHByZXNlbnRhdGlvbiA9PT0gJ3RpbWUtZGF0ZSc7XG4gICAgY29uc3QgaGFzV2hlZWxWYXJpYW50ID0gaGFzRGF0ZVByZXNlbnRhdGlvbiAmJiBwcmVmZXJXaGVlbDtcbiAgICByZW5kZXJIaWRkZW5JbnB1dCh0cnVlLCBlbCwgbmFtZSwgZm9ybWF0VmFsdWUodmFsdWUpLCBkaXNhYmxlZCk7XG4gICAgcmV0dXJuIGgoSG9zdCwge1xuICAgICAga2V5OiAnZjM1Y2YyMDBmZjA1ZDMzMDc0NTc2ZTNkMjc1NGQzYjJhMDczNWI5NicsXG4gICAgICBcImFyaWEtZGlzYWJsZWRcIjogZGlzYWJsZWQgPyAndHJ1ZScgOiBudWxsLFxuICAgICAgb25Gb2N1czogdGhpcy5vbkZvY3VzLFxuICAgICAgb25CbHVyOiB0aGlzLm9uQmx1cixcbiAgICAgIGNsYXNzOiBPYmplY3QuYXNzaWduKHt9LCBjcmVhdGVDb2xvckNsYXNzZXMoY29sb3IsIHtcbiAgICAgICAgW21vZGVdOiB0cnVlLFxuICAgICAgICBbJ2RhdGV0aW1lLXJlYWRvbmx5J106IHJlYWRvbmx5LFxuICAgICAgICBbJ2RhdGV0aW1lLWRpc2FibGVkJ106IGRpc2FibGVkLFxuICAgICAgICAnc2hvdy1tb250aC1hbmQteWVhcic6IHNob3VsZFNob3dNb250aEFuZFllYXIsXG4gICAgICAgICdtb250aC15ZWFyLXBpY2tlci1vcGVuJzogbW9udGhZZWFyUGlja2VyT3BlbixcbiAgICAgICAgW2BkYXRldGltZS1wcmVzZW50YXRpb24tJHtwcmVzZW50YXRpb259YF06IHRydWUsXG4gICAgICAgIFtgZGF0ZXRpbWUtc2l6ZS0ke3NpemV9YF06IHRydWUsXG4gICAgICAgIFtgZGF0ZXRpbWUtcHJlZmVyLXdoZWVsYF06IGhhc1doZWVsVmFyaWFudCxcbiAgICAgICAgW2BkYXRldGltZS1ncmlkYF06IGlzR3JpZFN0eWxlXG4gICAgICB9KSlcbiAgICB9LCBoKFwiZGl2XCIsIHtcbiAgICAgIGtleTogJzg1OWU5MzU0YTEyYmZhNThhYzNmOTY0YzJlNjY4MzlmMTcwNzFjMDAnLFxuICAgICAgY2xhc3M6IFwiaW50ZXJzZWN0aW9uLXRyYWNrZXJcIixcbiAgICAgIHJlZjogZWwgPT4gdGhpcy5pbnRlcnNlY3Rpb25UcmFja2VyUmVmID0gZWxcbiAgICB9KSwgdGhpcy5yZW5kZXJEYXRldGltZShtb2RlKSk7XG4gIH1cbiAgZ2V0IGVsKCkge1xuICAgIHJldHVybiBnZXRFbGVtZW50KHRoaXMpO1xuICB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZm9ybWF0T3B0aW9uc1wiOiBbXCJmb3JtYXRPcHRpb25zQ2hhbmdlZFwiXSxcbiAgICAgIFwiZGlzYWJsZWRcIjogW1wiZGlzYWJsZWRDaGFuZ2VkXCJdLFxuICAgICAgXCJtaW5cIjogW1wibWluQ2hhbmdlZFwiXSxcbiAgICAgIFwibWF4XCI6IFtcIm1heENoYW5nZWRcIl0sXG4gICAgICBcInByZXNlbnRhdGlvblwiOiBbXCJwcmVzZW50YXRpb25DaGFuZ2VkXCJdLFxuICAgICAgXCJ5ZWFyVmFsdWVzXCI6IFtcInllYXJWYWx1ZXNDaGFuZ2VkXCJdLFxuICAgICAgXCJtb250aFZhbHVlc1wiOiBbXCJtb250aFZhbHVlc0NoYW5nZWRcIl0sXG4gICAgICBcImRheVZhbHVlc1wiOiBbXCJkYXlWYWx1ZXNDaGFuZ2VkXCJdLFxuICAgICAgXCJob3VyVmFsdWVzXCI6IFtcImhvdXJWYWx1ZXNDaGFuZ2VkXCJdLFxuICAgICAgXCJtaW51dGVWYWx1ZXNcIjogW1wibWludXRlVmFsdWVzQ2hhbmdlZFwiXSxcbiAgICAgIFwidmFsdWVcIjogW1widmFsdWVDaGFuZ2VkXCJdXG4gICAgfTtcbiAgfVxufTtcbmxldCBkYXRldGltZUlkcyA9IDA7XG5jb25zdCBDQU5DRUxfUk9MRSA9ICdkYXRldGltZS1jYW5jZWwnO1xuY29uc3QgQ09ORklSTV9ST0xFID0gJ2RhdGV0aW1lLWNvbmZpcm0nO1xuY29uc3QgV0hFRUxfSVRFTV9QQVJUID0gJ3doZWVsLWl0ZW0nO1xuY29uc3QgV0hFRUxfSVRFTV9BQ1RJVkVfUEFSVCA9IGBhY3RpdmVgO1xuRGF0ZXRpbWUuc3R5bGUgPSB7XG4gIGlvczogZGF0ZXRpbWVJb3NDc3MsXG4gIG1kOiBkYXRldGltZU1kQ3NzXG59O1xuXG4vKipcbiAqIGlPUyBQaWNrZXIgRW50ZXIgQW5pbWF0aW9uXG4gKi9cbmNvbnN0IGlvc0VudGVyQW5pbWF0aW9uID0gYmFzZUVsID0+IHtcbiAgY29uc3QgYmFzZUFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICBjb25zdCBiYWNrZHJvcEFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICBjb25zdCB3cmFwcGVyQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gIGJhY2tkcm9wQW5pbWF0aW9uLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1iYWNrZHJvcCcpKS5mcm9tVG8oJ29wYWNpdHknLCAwLjAxLCAndmFyKC0tYmFja2Ryb3Atb3BhY2l0eSknKS5iZWZvcmVTdHlsZXMoe1xuICAgICdwb2ludGVyLWV2ZW50cyc6ICdub25lJ1xuICB9KS5hZnRlckNsZWFyU3R5bGVzKFsncG9pbnRlci1ldmVudHMnXSk7XG4gIHdyYXBwZXJBbmltYXRpb24uYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignLnBpY2tlci13cmFwcGVyJykpLmZyb21UbygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVkoMTAwJSknLCAndHJhbnNsYXRlWSgwJSknKTtcbiAgcmV0dXJuIGJhc2VBbmltYXRpb24uYWRkRWxlbWVudChiYXNlRWwpLmVhc2luZygnY3ViaWMtYmV6aWVyKC4zNiwuNjYsLjA0LDEpJykuZHVyYXRpb24oNDAwKS5hZGRBbmltYXRpb24oW2JhY2tkcm9wQW5pbWF0aW9uLCB3cmFwcGVyQW5pbWF0aW9uXSk7XG59O1xuXG4vKipcbiAqIGlPUyBQaWNrZXIgTGVhdmUgQW5pbWF0aW9uXG4gKi9cbmNvbnN0IGlvc0xlYXZlQW5pbWF0aW9uID0gYmFzZUVsID0+IHtcbiAgY29uc3QgYmFzZUFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICBjb25zdCBiYWNrZHJvcEFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICBjb25zdCB3cmFwcGVyQW5pbWF0aW9uID0gY3JlYXRlQW5pbWF0aW9uKCk7XG4gIGJhY2tkcm9wQW5pbWF0aW9uLmFkZEVsZW1lbnQoYmFzZUVsLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1iYWNrZHJvcCcpKS5mcm9tVG8oJ29wYWNpdHknLCAndmFyKC0tYmFja2Ryb3Atb3BhY2l0eSknLCAwLjAxKTtcbiAgd3JhcHBlckFuaW1hdGlvbi5hZGRFbGVtZW50KGJhc2VFbC5xdWVyeVNlbGVjdG9yKCcucGlja2VyLXdyYXBwZXInKSkuZnJvbVRvKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWSgwJSknLCAndHJhbnNsYXRlWSgxMDAlKScpO1xuICByZXR1cm4gYmFzZUFuaW1hdGlvbi5hZGRFbGVtZW50KGJhc2VFbCkuZWFzaW5nKCdjdWJpYy1iZXppZXIoLjM2LC42NiwuMDQsMSknKS5kdXJhdGlvbig0MDApLmFkZEFuaW1hdGlvbihbYmFja2Ryb3BBbmltYXRpb24sIHdyYXBwZXJBbmltYXRpb25dKTtcbn07XG5jb25zdCBwaWNrZXJJb3NDc3MgPSBcIi5zYy1pb24tcGlja2VyLWxlZ2FjeS1pb3MtaHstLWJvcmRlci1yYWRpdXM6MDstLWJvcmRlci1zdHlsZTpzb2xpZDstLW1pbi13aWR0aDphdXRvOy0td2lkdGg6MTAwJTstLW1heC13aWR0aDo1MDBweDstLW1pbi1oZWlnaHQ6YXV0bzstLW1heC1oZWlnaHQ6YXV0bzstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDt0b3A6MDtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7b3V0bGluZTpub25lO2ZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseSwgaW5oZXJpdCk7Y29udGFpbjpzdHJpY3Q7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO3otaW5kZXg6MTAwMX0uc2MtaW9uLXBpY2tlci1sZWdhY3ktaW9zLWh7aW5zZXQtaW5saW5lLXN0YXJ0OjB9Lm92ZXJsYXktaGlkZGVuLnNjLWlvbi1waWNrZXItbGVnYWN5LWlvcy1oe2Rpc3BsYXk6bm9uZX0ucGlja2VyLXdyYXBwZXIuc2MtaW9uLXBpY2tlci1sZWdhY3ktaW9ze2JvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6YXV0bzttYXJnaW4taW5saW5lLXN0YXJ0OmF1dG87LXdlYmtpdC1tYXJnaW4tZW5kOmF1dG87bWFyZ2luLWlubGluZS1lbmQ6YXV0bzttYXJnaW4tdG9wOmF1dG87bWFyZ2luLWJvdHRvbTphdXRvOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsICAxMDAlLCAgMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsICAxMDAlLCAgMCk7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246YWJzb2x1dGU7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47d2lkdGg6dmFyKC0td2lkdGgpO21pbi13aWR0aDp2YXIoLS1taW4td2lkdGgpO21heC13aWR0aDp2YXIoLS1tYXgtd2lkdGgpO2hlaWdodDp2YXIoLS1oZWlnaHQpO21pbi1oZWlnaHQ6dmFyKC0tbWluLWhlaWdodCk7bWF4LWhlaWdodDp2YXIoLS1tYXgtaGVpZ2h0KTtib3JkZXItd2lkdGg6dmFyKC0tYm9yZGVyLXdpZHRoKTtib3JkZXItc3R5bGU6dmFyKC0tYm9yZGVyLXN0eWxlKTtib3JkZXItY29sb3I6dmFyKC0tYm9yZGVyLWNvbG9yKTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2NvbnRhaW46c3RyaWN0O292ZXJmbG93OmhpZGRlbjt6LWluZGV4OjEwfS5waWNrZXItdG9vbGJhci5zYy1pb24tcGlja2VyLWxlZ2FjeS1pb3N7d2lkdGg6MTAwJTtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2NvbnRhaW46c3RyaWN0O3otaW5kZXg6MX0ucGlja2VyLWJ1dHRvbi5zYy1pb24tcGlja2VyLWxlZ2FjeS1pb3N7Ym9yZGVyOjA7Zm9udC1mYW1pbHk6aW5oZXJpdH0ucGlja2VyLWJ1dHRvbi5zYy1pb24tcGlja2VyLWxlZ2FjeS1pb3M6YWN0aXZlLC5waWNrZXItYnV0dG9uLnNjLWlvbi1waWNrZXItbGVnYWN5LWlvczpmb2N1c3tvdXRsaW5lOm5vbmV9LnBpY2tlci1jb2x1bW5zLnNjLWlvbi1waWNrZXItbGVnYWN5LWlvc3tkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjpyZWxhdGl2ZTstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO21hcmdpbi1ib3R0b206dmFyKC0taW9uLXNhZmUtYXJlYS1ib3R0b20sIDApO2NvbnRhaW46c3RyaWN0O292ZXJmbG93OmhpZGRlbn0ucGlja2VyLWFib3ZlLWhpZ2hsaWdodC5zYy1pb24tcGlja2VyLWxlZ2FjeS1pb3MsLnBpY2tlci1iZWxvdy1oaWdobGlnaHQuc2MtaW9uLXBpY2tlci1sZWdhY3ktaW9ze2Rpc3BsYXk6bm9uZTtwb2ludGVyLWV2ZW50czpub25lfS5zYy1pb24tcGlja2VyLWxlZ2FjeS1pb3MtaHstLWJhY2tncm91bmQ6dmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpOy0tYm9yZGVyLXdpZHRoOjFweCAwIDA7LS1ib3JkZXItY29sb3I6dmFyKC0taW9uLWl0ZW0tYm9yZGVyLWNvbG9yLCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yLCB2YXIoLS1pb24tY29sb3Itc3RlcC0yNTAsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXN0ZXAtMjUwLCAjYzhjN2NjKSkpKTstLWhlaWdodDoyNjBweDstLWJhY2tkcm9wLW9wYWNpdHk6dmFyKC0taW9uLWJhY2tkcm9wLW9wYWNpdHksIDAuMjYpO2NvbG9yOnZhcigtLWlvbi1pdGVtLWNvbG9yLCB2YXIoLS1pb24tdGV4dC1jb2xvciwgIzAwMCkpfS5waWNrZXItdG9vbGJhci5zYy1pb24tcGlja2VyLWxlZ2FjeS1pb3N7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7aGVpZ2h0OjQ0cHg7Ym9yZGVyLWJvdHRvbTowLjU1cHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKX0ucGlja2VyLXRvb2xiYXItYnV0dG9uLnNjLWlvbi1waWNrZXItbGVnYWN5LWlvc3stbXMtZmxleDoxO2ZsZXg6MTt0ZXh0LWFsaWduOmVuZH0ucGlja2VyLXRvb2xiYXItYnV0dG9uLnNjLWlvbi1waWNrZXItbGVnYWN5LWlvczpsYXN0LWNoaWxkIC5waWNrZXItYnV0dG9uLnNjLWlvbi1waWNrZXItbGVnYWN5LWlvc3tmb250LXdlaWdodDo2MDB9LnBpY2tlci10b29sYmFyLWJ1dHRvbi5zYy1pb24tcGlja2VyLWxlZ2FjeS1pb3M6Zmlyc3QtY2hpbGR7Zm9udC13ZWlnaHQ6bm9ybWFsO3RleHQtYWxpZ246c3RhcnR9LnBpY2tlci1idXR0b24uc2MtaW9uLXBpY2tlci1sZWdhY3ktaW9zLC5waWNrZXItYnV0dG9uLmlvbi1hY3RpdmF0ZWQuc2MtaW9uLXBpY2tlci1sZWdhY3ktaW9ze21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDstd2Via2l0LXBhZGRpbmctc3RhcnQ6MWVtO3BhZGRpbmctaW5saW5lLXN0YXJ0OjFlbTstd2Via2l0LXBhZGRpbmctZW5kOjFlbTtwYWRkaW5nLWlubGluZS1lbmQ6MWVtO3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDtoZWlnaHQ6NDRweDtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2NvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMDA1NGU5KTtmb250LXNpemU6MTZweH0ucGlja2VyLWNvbHVtbnMuc2MtaW9uLXBpY2tlci1sZWdhY3ktaW9ze2hlaWdodDoyMTVweDstd2Via2l0LXBlcnNwZWN0aXZlOjEwMDBweDtwZXJzcGVjdGl2ZToxMDAwcHh9LnBpY2tlci1hYm92ZS1oaWdobGlnaHQuc2MtaW9uLXBpY2tlci1sZWdhY3ktaW9ze3RvcDowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsICAwLCAgOTBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsICAwLCAgOTBweCk7ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2hlaWdodDo4MXB4O2JvcmRlci1ib3R0b206MXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7YmFja2dyb3VuZDotd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDIwJSwgdmFyKC0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKSksIHRvKHJnYmEodmFyKC0tYmFja2dyb3VuZC1yZ2IsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYiwgMjU1LCAyNTUsIDI1NSkpLCAwLjgpKSk7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB2YXIoLS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpIDIwJSwgcmdiYSh2YXIoLS1iYWNrZ3JvdW5kLXJnYiwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiLCAyNTUsIDI1NSwgMjU1KSksIDAuOCkgMTAwJSk7ei1pbmRleDoxMH0ucGlja2VyLWFib3ZlLWhpZ2hsaWdodC5zYy1pb24tcGlja2VyLWxlZ2FjeS1pb3N7aW5zZXQtaW5saW5lLXN0YXJ0OjB9LnBpY2tlci1iZWxvdy1oaWdobGlnaHQuc2MtaW9uLXBpY2tlci1sZWdhY3ktaW9ze3RvcDoxMTVweDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCAgMCwgIDkwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCAgMCwgIDkwcHgpO2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTtoZWlnaHQ6MTE5cHg7Ym9yZGVyLXRvcDoxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtiYWNrZ3JvdW5kOi13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IGJvdHRvbSwgbGVmdCB0b3AsIGNvbG9yLXN0b3AoMzAlLCB2YXIoLS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpKSwgdG8ocmdiYSh2YXIoLS1iYWNrZ3JvdW5kLXJnYiwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiLCAyNTUsIDI1NSwgMjU1KSksIDAuOCkpKTtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byB0b3AsIHZhcigtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSkgMzAlLCByZ2JhKHZhcigtLWJhY2tncm91bmQtcmdiLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2IsIDI1NSwgMjU1LCAyNTUpKSwgMC44KSAxMDAlKTt6LWluZGV4OjExfS5waWNrZXItYmVsb3ctaGlnaGxpZ2h0LnNjLWlvbi1waWNrZXItbGVnYWN5LWlvc3tpbnNldC1pbmxpbmUtc3RhcnQ6MH1cIjtcbmNvbnN0IHBpY2tlck1kQ3NzID0gXCIuc2MtaW9uLXBpY2tlci1sZWdhY3ktbWQtaHstLWJvcmRlci1yYWRpdXM6MDstLWJvcmRlci1zdHlsZTpzb2xpZDstLW1pbi13aWR0aDphdXRvOy0td2lkdGg6MTAwJTstLW1heC13aWR0aDo1MDBweDstLW1pbi1oZWlnaHQ6YXV0bzstLW1heC1oZWlnaHQ6YXV0bzstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDt0b3A6MDtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7b3V0bGluZTpub25lO2ZvbnQtZmFtaWx5OnZhcigtLWlvbi1mb250LWZhbWlseSwgaW5oZXJpdCk7Y29udGFpbjpzdHJpY3Q7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO3otaW5kZXg6MTAwMX0uc2MtaW9uLXBpY2tlci1sZWdhY3ktbWQtaHtpbnNldC1pbmxpbmUtc3RhcnQ6MH0ub3ZlcmxheS1oaWRkZW4uc2MtaW9uLXBpY2tlci1sZWdhY3ktbWQtaHtkaXNwbGF5Om5vbmV9LnBpY2tlci13cmFwcGVyLnNjLWlvbi1waWNrZXItbGVnYWN5LW1ke2JvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7LXdlYmtpdC1tYXJnaW4tc3RhcnQ6YXV0bzttYXJnaW4taW5saW5lLXN0YXJ0OmF1dG87LXdlYmtpdC1tYXJnaW4tZW5kOmF1dG87bWFyZ2luLWlubGluZS1lbmQ6YXV0bzttYXJnaW4tdG9wOmF1dG87bWFyZ2luLWJvdHRvbTphdXRvOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsICAxMDAlLCAgMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsICAxMDAlLCAgMCk7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246YWJzb2x1dGU7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47d2lkdGg6dmFyKC0td2lkdGgpO21pbi13aWR0aDp2YXIoLS1taW4td2lkdGgpO21heC13aWR0aDp2YXIoLS1tYXgtd2lkdGgpO2hlaWdodDp2YXIoLS1oZWlnaHQpO21pbi1oZWlnaHQ6dmFyKC0tbWluLWhlaWdodCk7bWF4LWhlaWdodDp2YXIoLS1tYXgtaGVpZ2h0KTtib3JkZXItd2lkdGg6dmFyKC0tYm9yZGVyLXdpZHRoKTtib3JkZXItc3R5bGU6dmFyKC0tYm9yZGVyLXN0eWxlKTtib3JkZXItY29sb3I6dmFyKC0tYm9yZGVyLWNvbG9yKTtiYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpO2NvbnRhaW46c3RyaWN0O292ZXJmbG93OmhpZGRlbjt6LWluZGV4OjEwfS5waWNrZXItdG9vbGJhci5zYy1pb24tcGlja2VyLWxlZ2FjeS1tZHt3aWR0aDoxMDAlO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Y29udGFpbjpzdHJpY3Q7ei1pbmRleDoxfS5waWNrZXItYnV0dG9uLnNjLWlvbi1waWNrZXItbGVnYWN5LW1ke2JvcmRlcjowO2ZvbnQtZmFtaWx5OmluaGVyaXR9LnBpY2tlci1idXR0b24uc2MtaW9uLXBpY2tlci1sZWdhY3ktbWQ6YWN0aXZlLC5waWNrZXItYnV0dG9uLnNjLWlvbi1waWNrZXItbGVnYWN5LW1kOmZvY3Vze291dGxpbmU6bm9uZX0ucGlja2VyLWNvbHVtbnMuc2MtaW9uLXBpY2tlci1sZWdhY3ktbWR7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cG9zaXRpb246cmVsYXRpdmU7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjttYXJnaW4tYm90dG9tOnZhcigtLWlvbi1zYWZlLWFyZWEtYm90dG9tLCAwKTtjb250YWluOnN0cmljdDtvdmVyZmxvdzpoaWRkZW59LnBpY2tlci1hYm92ZS1oaWdobGlnaHQuc2MtaW9uLXBpY2tlci1sZWdhY3ktbWQsLnBpY2tlci1iZWxvdy1oaWdobGlnaHQuc2MtaW9uLXBpY2tlci1sZWdhY3ktbWR7ZGlzcGxheTpub25lO3BvaW50ZXItZXZlbnRzOm5vbmV9LnNjLWlvbi1waWNrZXItbGVnYWN5LW1kLWh7LS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKTstLWJvcmRlci13aWR0aDowLjU1cHggMCAwOy0tYm9yZGVyLWNvbG9yOnZhcigtLWlvbi1pdGVtLWJvcmRlci1jb2xvciwgdmFyKC0taW9uLWJvcmRlci1jb2xvciwgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTE1MCwgcmdiYSgwLCAwLCAwLCAwLjEzKSkpKSk7LS1oZWlnaHQ6MjYwcHg7LS1iYWNrZHJvcC1vcGFjaXR5OnZhcigtLWlvbi1iYWNrZHJvcC1vcGFjaXR5LCAwLjI2KTtjb2xvcjp2YXIoLS1pb24taXRlbS1jb2xvciwgdmFyKC0taW9uLXRleHQtY29sb3IsICMwMDApKX0ucGlja2VyLXRvb2xiYXIuc2MtaW9uLXBpY2tlci1sZWdhY3ktbWR7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtcGFjazplbmQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kO2hlaWdodDo0NHB4fS5waWNrZXItYnV0dG9uLnNjLWlvbi1waWNrZXItbGVnYWN5LW1kLC5waWNrZXItYnV0dG9uLmlvbi1hY3RpdmF0ZWQuc2MtaW9uLXBpY2tlci1sZWdhY3ktbWR7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowOy13ZWJraXQtcGFkZGluZy1zdGFydDoxLjFlbTtwYWRkaW5nLWlubGluZS1zdGFydDoxLjFlbTstd2Via2l0LXBhZGRpbmctZW5kOjEuMWVtO3BhZGRpbmctaW5saW5lLWVuZDoxLjFlbTtwYWRkaW5nLXRvcDowO3BhZGRpbmctYm90dG9tOjA7aGVpZ2h0OjQ0cHg7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtjb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzAwNTRlOSk7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmV9LnBpY2tlci1jb2x1bW5zLnNjLWlvbi1waWNrZXItbGVnYWN5LW1ke2hlaWdodDoyMTZweDstd2Via2l0LXBlcnNwZWN0aXZlOjE4MDBweDtwZXJzcGVjdGl2ZToxODAwcHh9LnBpY2tlci1hYm92ZS1oaWdobGlnaHQuc2MtaW9uLXBpY2tlci1sZWdhY3ktbWR7dG9wOjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwgIDAsICA5MHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwgIDAsICA5MHB4KTtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2hlaWdodDo4MXB4O2JvcmRlci1ib3R0b206MXB4IHNvbGlkIHZhcigtLWlvbi1pdGVtLWJvcmRlci1jb2xvciwgdmFyKC0taW9uLWJvcmRlci1jb2xvciwgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1zdGVwLTE1MCwgcmdiYSgwLCAwLCAwLCAwLjEzKSkpKSk7YmFja2dyb3VuZDotd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDIwJSwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKSwgdG8ocmdiYSh2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2IsIDI1NSwgMjU1LCAyNTUpLCAwLjgpKSk7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikgMjAlLCByZ2JhKHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYiwgMjU1LCAyNTUsIDI1NSksIDAuOCkgMTAwJSk7ei1pbmRleDoxMH0ucGlja2VyLWFib3ZlLWhpZ2hsaWdodC5zYy1pb24tcGlja2VyLWxlZ2FjeS1tZHtpbnNldC1pbmxpbmUtc3RhcnQ6MH0ucGlja2VyLWJlbG93LWhpZ2hsaWdodC5zYy1pb24tcGlja2VyLWxlZ2FjeS1tZHt0b3A6MTE1cHg7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwgIDAsICA5MHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwgIDAsICA5MHB4KTtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2hlaWdodDoxMTlweDtib3JkZXItdG9wOjFweCBzb2xpZCB2YXIoLS1pb24taXRlbS1ib3JkZXItY29sb3IsIHZhcigtLWlvbi1ib3JkZXItY29sb3IsIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3Itc3RlcC0xNTAsIHJnYmEoMCwgMCwgMCwgMC4xMykpKSkpO2JhY2tncm91bmQ6LXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCBsZWZ0IHRvcCwgY29sb3Itc3RvcCgzMCUsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSksIHRvKHJnYmEodmFyKC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiLCAyNTUsIDI1NSwgMjU1KSwgMC44KSkpO2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIHRvcCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpIDMwJSwgcmdiYSh2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2IsIDI1NSwgMjU1LCAyNTUpLCAwLjgpIDEwMCUpO3otaW5kZXg6MTF9LnBpY2tlci1iZWxvdy1oaWdobGlnaHQuc2MtaW9uLXBpY2tlci1sZWdhY3ktbWR7aW5zZXQtaW5saW5lLXN0YXJ0OjB9XCI7XG5jb25zdCBQaWNrZXIgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuZGlkUHJlc2VudCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiaW9uUGlja2VyRGlkUHJlc2VudFwiLCA3KTtcbiAgICB0aGlzLndpbGxQcmVzZW50ID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25QaWNrZXJXaWxsUHJlc2VudFwiLCA3KTtcbiAgICB0aGlzLndpbGxEaXNtaXNzID0gY3JlYXRlRXZlbnQodGhpcywgXCJpb25QaWNrZXJXaWxsRGlzbWlzc1wiLCA3KTtcbiAgICB0aGlzLmRpZERpc21pc3MgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblBpY2tlckRpZERpc21pc3NcIiwgNyk7XG4gICAgdGhpcy5kaWRQcmVzZW50U2hvcnRoYW5kID0gY3JlYXRlRXZlbnQodGhpcywgXCJkaWRQcmVzZW50XCIsIDcpO1xuICAgIHRoaXMud2lsbFByZXNlbnRTaG9ydGhhbmQgPSBjcmVhdGVFdmVudCh0aGlzLCBcIndpbGxQcmVzZW50XCIsIDcpO1xuICAgIHRoaXMud2lsbERpc21pc3NTaG9ydGhhbmQgPSBjcmVhdGVFdmVudCh0aGlzLCBcIndpbGxEaXNtaXNzXCIsIDcpO1xuICAgIHRoaXMuZGlkRGlzbWlzc1Nob3J0aGFuZCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiZGlkRGlzbWlzc1wiLCA3KTtcbiAgICB0aGlzLmRlbGVnYXRlQ29udHJvbGxlciA9IGNyZWF0ZURlbGVnYXRlQ29udHJvbGxlcih0aGlzKTtcbiAgICB0aGlzLmxvY2tDb250cm9sbGVyID0gY3JlYXRlTG9ja0NvbnRyb2xsZXIoKTtcbiAgICB0aGlzLnRyaWdnZXJDb250cm9sbGVyID0gY3JlYXRlVHJpZ2dlckNvbnRyb2xsZXIoKTtcbiAgICB0aGlzLnByZXNlbnRlZCA9IGZhbHNlO1xuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICB0aGlzLmhhc0NvbnRyb2xsZXIgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBrZXlib2FyZCB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgZGlzbWlzc2VkIHdoZW4gdGhlIG92ZXJsYXkgaXMgcHJlc2VudGVkLlxuICAgICAqL1xuICAgIHRoaXMua2V5Ym9hcmRDbG9zZSA9IHRydWU7XG4gICAgLyoqXG4gICAgICogQXJyYXkgb2YgYnV0dG9ucyB0byBiZSBkaXNwbGF5ZWQgYXQgdGhlIHRvcCBvZiB0aGUgcGlja2VyLlxuICAgICAqL1xuICAgIHRoaXMuYnV0dG9ucyA9IFtdO1xuICAgIC8qKlxuICAgICAqIEFycmF5IG9mIGNvbHVtbnMgdG8gYmUgZGlzcGxheWVkIGluIHRoZSBwaWNrZXIuXG4gICAgICovXG4gICAgdGhpcy5jb2x1bW5zID0gW107XG4gICAgLyoqXG4gICAgICogTnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB3YWl0IGJlZm9yZSBkaXNtaXNzaW5nIHRoZSBwaWNrZXIuXG4gICAgICovXG4gICAgdGhpcy5kdXJhdGlvbiA9IDA7XG4gICAgLyoqXG4gICAgICogSWYgYHRydWVgLCBhIGJhY2tkcm9wIHdpbGwgYmUgZGlzcGxheWVkIGJlaGluZCB0aGUgcGlja2VyLlxuICAgICAqL1xuICAgIHRoaXMuc2hvd0JhY2tkcm9wID0gdHJ1ZTtcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBwaWNrZXIgd2lsbCBiZSBkaXNtaXNzZWQgd2hlbiB0aGUgYmFja2Ryb3AgaXMgY2xpY2tlZC5cbiAgICAgKi9cbiAgICB0aGlzLmJhY2tkcm9wRGlzbWlzcyA9IHRydWU7XG4gICAgLyoqXG4gICAgICogSWYgYHRydWVgLCB0aGUgcGlja2VyIHdpbGwgYW5pbWF0ZS5cbiAgICAgKi9cbiAgICB0aGlzLmFuaW1hdGVkID0gdHJ1ZTtcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIHRoZSBwaWNrZXIgd2lsbCBvcGVuLiBJZiBgZmFsc2VgLCB0aGUgcGlja2VyIHdpbGwgY2xvc2UuXG4gICAgICogVXNlIHRoaXMgaWYgeW91IG5lZWQgZmluZXIgZ3JhaW5lZCBjb250cm9sIG92ZXIgcHJlc2VudGF0aW9uLCBvdGhlcndpc2VcbiAgICAgKiBqdXN0IHVzZSB0aGUgcGlja2VyQ29udHJvbGxlciBvciB0aGUgYHRyaWdnZXJgIHByb3BlcnR5LlxuICAgICAqIE5vdGU6IGBpc09wZW5gIHdpbGwgbm90IGF1dG9tYXRpY2FsbHkgYmUgc2V0IGJhY2sgdG8gYGZhbHNlYCB3aGVuXG4gICAgICogdGhlIHBpY2tlciBkaXNtaXNzZXMuIFlvdSB3aWxsIG5lZWQgdG8gZG8gdGhhdCBpbiB5b3VyIGNvZGUuXG4gICAgICovXG4gICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICB0aGlzLm9uQmFja2Ryb3BUYXAgPSAoKSA9PiB7XG4gICAgICB0aGlzLmRpc21pc3ModW5kZWZpbmVkLCBCQUNLRFJPUCk7XG4gICAgfTtcbiAgICB0aGlzLmRpc3BhdGNoQ2FuY2VsSGFuZGxlciA9IGV2ID0+IHtcbiAgICAgIGNvbnN0IHJvbGUgPSBldi5kZXRhaWwucm9sZTtcbiAgICAgIGlmIChpc0NhbmNlbChyb2xlKSkge1xuICAgICAgICBjb25zdCBjYW5jZWxCdXR0b24gPSB0aGlzLmJ1dHRvbnMuZmluZChiID0+IGIucm9sZSA9PT0gJ2NhbmNlbCcpO1xuICAgICAgICB0aGlzLmNhbGxCdXR0b25IYW5kbGVyKGNhbmNlbEJ1dHRvbik7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBvbklzT3BlbkNoYW5nZShuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICBpZiAobmV3VmFsdWUgPT09IHRydWUgJiYgb2xkVmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLnByZXNlbnQoKTtcbiAgICB9IGVsc2UgaWYgKG5ld1ZhbHVlID09PSBmYWxzZSAmJiBvbGRWYWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5kaXNtaXNzKCk7XG4gICAgfVxuICB9XG4gIHRyaWdnZXJDaGFuZ2VkKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRyaWdnZXIsXG4gICAgICBlbCxcbiAgICAgIHRyaWdnZXJDb250cm9sbGVyXG4gICAgfSA9IHRoaXM7XG4gICAgaWYgKHRyaWdnZXIpIHtcbiAgICAgIHRyaWdnZXJDb250cm9sbGVyLmFkZENsaWNrTGlzdGVuZXIoZWwsIHRyaWdnZXIpO1xuICAgIH1cbiAgfVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBwcmVwYXJlT3ZlcmxheSh0aGlzLmVsKTtcbiAgICB0aGlzLnRyaWdnZXJDaGFuZ2VkKCk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy50cmlnZ2VyQ29udHJvbGxlci5yZW1vdmVDbGlja0xpc3RlbmVyKCk7XG4gIH1cbiAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgdmFyIF9hO1xuICAgIGlmICghKChfYSA9IHRoaXMuaHRtbEF0dHJpYnV0ZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pZCkpIHtcbiAgICAgIHNldE92ZXJsYXlJZCh0aGlzLmVsKTtcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICBwcmludElvbldhcm5pbmcoJ1tpb24tcGlja2VyLWxlZ2FjeV0gLSBpb24tcGlja2VyLWxlZ2FjeSBhbmQgaW9uLXBpY2tlci1sZWdhY3ktY29sdW1uIGhhdmUgYmVlbiBkZXByZWNhdGVkIGluIGZhdm9yIG9mIG5ldyB2ZXJzaW9ucyBvZiB0aGUgaW9uLXBpY2tlciBhbmQgaW9uLXBpY2tlci1jb2x1bW4gY29tcG9uZW50cy4gVGhlc2UgbmV3IGNvbXBvbmVudHMgZGlzcGxheSBpbmxpbmUgd2l0aCB5b3VyIHBhZ2UgY29udGVudCBhbGxvd2luZyBmb3IgbW9yZSBwcmVzZW50YXRpb24gZmxleGliaWxpdHkgdGhhbiBiZWZvcmUuJywgdGhpcy5lbCk7XG4gICAgLyoqXG4gICAgICogSWYgcGlja2VyIHdhcyByZW5kZXJlZCB3aXRoIGlzT3Blbj1cInRydWVcIlxuICAgICAqIHRoZW4gd2Ugc2hvdWxkIG9wZW4gcGlja2VyIGltbWVkaWF0ZWx5LlxuICAgICAqL1xuICAgIGlmICh0aGlzLmlzT3BlbiA9PT0gdHJ1ZSkge1xuICAgICAgcmFmKCgpID0+IHRoaXMucHJlc2VudCgpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogV2hlbiBiaW5kaW5nIHZhbHVlcyBpbiBmcmFtZXdvcmtzIHN1Y2ggYXMgQW5ndWxhclxuICAgICAqIGl0IGlzIHBvc3NpYmxlIGZvciB0aGUgdmFsdWUgdG8gYmUgc2V0IGFmdGVyIHRoZSBXZWIgQ29tcG9uZW50XG4gICAgICogaW5pdGlhbGl6ZXMgYnV0IGJlZm9yZSB0aGUgdmFsdWUgd2F0Y2hlciBpcyBzZXQgdXAgaW4gU3RlbmNpbC5cbiAgICAgKiBBcyBhIHJlc3VsdCwgdGhlIHdhdGNoZXIgY2FsbGJhY2sgbWF5IG5vdCBiZSBmaXJlZC5cbiAgICAgKiBXZSB3b3JrIGFyb3VuZCB0aGlzIGJ5IG1hbnVhbGx5IGNhbGxpbmcgdGhlIHdhdGNoZXJcbiAgICAgKiBjYWxsYmFjayB3aGVuIHRoZSBjb21wb25lbnQgaGFzIGxvYWRlZCBhbmQgdGhlIHdhdGNoZXJcbiAgICAgKiBpcyBjb25maWd1cmVkLlxuICAgICAqL1xuICAgIHRoaXMudHJpZ2dlckNoYW5nZWQoKTtcbiAgfVxuICAvKipcbiAgICogUHJlc2VudCB0aGUgcGlja2VyIG92ZXJsYXkgYWZ0ZXIgaXQgaGFzIGJlZW4gY3JlYXRlZC5cbiAgICovXG4gIGFzeW5jIHByZXNlbnQoKSB7XG4gICAgY29uc3QgdW5sb2NrID0gYXdhaXQgdGhpcy5sb2NrQ29udHJvbGxlci5sb2NrKCk7XG4gICAgYXdhaXQgdGhpcy5kZWxlZ2F0ZUNvbnRyb2xsZXIuYXR0YWNoVmlld1RvRG9tKCk7XG4gICAgYXdhaXQgcHJlc2VudCh0aGlzLCAncGlja2VyRW50ZXInLCBpb3NFbnRlckFuaW1hdGlvbiwgaW9zRW50ZXJBbmltYXRpb24sIHVuZGVmaW5lZCk7XG4gICAgaWYgKHRoaXMuZHVyYXRpb24gPiAwKSB7XG4gICAgICB0aGlzLmR1cmF0aW9uVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5kaXNtaXNzKCksIHRoaXMuZHVyYXRpb24pO1xuICAgIH1cbiAgICB1bmxvY2soKTtcbiAgfVxuICAvKipcbiAgICogRGlzbWlzcyB0aGUgcGlja2VyIG92ZXJsYXkgYWZ0ZXIgaXQgaGFzIGJlZW4gcHJlc2VudGVkLlxuICAgKlxuICAgKiBAcGFyYW0gZGF0YSBBbnkgZGF0YSB0byBlbWl0IGluIHRoZSBkaXNtaXNzIGV2ZW50cy5cbiAgICogQHBhcmFtIHJvbGUgVGhlIHJvbGUgb2YgdGhlIGVsZW1lbnQgdGhhdCBpcyBkaXNtaXNzaW5nIHRoZSBwaWNrZXIuXG4gICAqIFRoaXMgY2FuIGJlIHVzZWZ1bCBpbiBhIGJ1dHRvbiBoYW5kbGVyIGZvciBkZXRlcm1pbmluZyB3aGljaCBidXR0b24gd2FzXG4gICAqIGNsaWNrZWQgdG8gZGlzbWlzcyB0aGUgcGlja2VyLlxuICAgKiBTb21lIGV4YW1wbGVzIGluY2x1ZGU6IGBgXCJjYW5jZWxcImAsIGBcImRlc3RydWN0aXZlXCJgLCBcInNlbGVjdGVkXCJgLCBhbmQgYFwiYmFja2Ryb3BcImAuXG4gICAqL1xuICBhc3luYyBkaXNtaXNzKGRhdGEsIHJvbGUpIHtcbiAgICBjb25zdCB1bmxvY2sgPSBhd2FpdCB0aGlzLmxvY2tDb250cm9sbGVyLmxvY2soKTtcbiAgICBpZiAodGhpcy5kdXJhdGlvblRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmR1cmF0aW9uVGltZW91dCk7XG4gICAgfVxuICAgIGNvbnN0IGRpc21pc3NlZCA9IGF3YWl0IGRpc21pc3ModGhpcywgZGF0YSwgcm9sZSwgJ3BpY2tlckxlYXZlJywgaW9zTGVhdmVBbmltYXRpb24sIGlvc0xlYXZlQW5pbWF0aW9uKTtcbiAgICBpZiAoZGlzbWlzc2VkKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlQ29udHJvbGxlci5yZW1vdmVWaWV3RnJvbURvbSgpO1xuICAgIH1cbiAgICB1bmxvY2soKTtcbiAgICByZXR1cm4gZGlzbWlzc2VkO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHBpY2tlciBkaWQgZGlzbWlzcy5cbiAgICovXG4gIG9uRGlkRGlzbWlzcygpIHtcbiAgICByZXR1cm4gZXZlbnRNZXRob2QodGhpcy5lbCwgJ2lvblBpY2tlckRpZERpc21pc3MnKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBwaWNrZXIgd2lsbCBkaXNtaXNzLlxuICAgKi9cbiAgb25XaWxsRGlzbWlzcygpIHtcbiAgICByZXR1cm4gZXZlbnRNZXRob2QodGhpcy5lbCwgJ2lvblBpY2tlcldpbGxEaXNtaXNzJyk7XG4gIH1cbiAgLyoqXG4gICAqIEdldCB0aGUgY29sdW1uIHRoYXQgbWF0Y2hlcyB0aGUgc3BlY2lmaWVkIG5hbWUuXG4gICAqXG4gICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBjb2x1bW4uXG4gICAqL1xuICBnZXRDb2x1bW4obmFtZSkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5jb2x1bW5zLmZpbmQoY29sdW1uID0+IGNvbHVtbi5uYW1lID09PSBuYW1lKSk7XG4gIH1cbiAgYXN5bmMgYnV0dG9uQ2xpY2soYnV0dG9uKSB7XG4gICAgY29uc3Qgcm9sZSA9IGJ1dHRvbi5yb2xlO1xuICAgIGlmIChpc0NhbmNlbChyb2xlKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZGlzbWlzcyh1bmRlZmluZWQsIHJvbGUpO1xuICAgIH1cbiAgICBjb25zdCBzaG91bGREaXNtaXNzID0gYXdhaXQgdGhpcy5jYWxsQnV0dG9uSGFuZGxlcihidXR0b24pO1xuICAgIGlmIChzaG91bGREaXNtaXNzKSB7XG4gICAgICByZXR1cm4gdGhpcy5kaXNtaXNzKHRoaXMuZ2V0U2VsZWN0ZWQoKSwgYnV0dG9uLnJvbGUpO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cbiAgYXN5bmMgY2FsbEJ1dHRvbkhhbmRsZXIoYnV0dG9uKSB7XG4gICAgaWYgKGJ1dHRvbikge1xuICAgICAgLy8gYSBoYW5kbGVyIGhhcyBiZWVuIHByb3ZpZGVkLCBleGVjdXRlIGl0XG4gICAgICAvLyBwYXNzIHRoZSBoYW5kbGVyIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaW5wdXRzXG4gICAgICBjb25zdCBydG4gPSBhd2FpdCBzYWZlQ2FsbChidXR0b24uaGFuZGxlciwgdGhpcy5nZXRTZWxlY3RlZCgpKTtcbiAgICAgIGlmIChydG4gPT09IGZhbHNlKSB7XG4gICAgICAgIC8vIGlmIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGhhbmRsZXIgaXMgZmFsc2UgdGhlbiBkbyBub3QgZGlzbWlzc1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGdldFNlbGVjdGVkKCkge1xuICAgIGNvbnN0IHNlbGVjdGVkID0ge307XG4gICAgdGhpcy5jb2x1bW5zLmZvckVhY2goKGNvbCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkQ29sdW1uID0gY29sLnNlbGVjdGVkSW5kZXggIT09IHVuZGVmaW5lZCA/IGNvbC5vcHRpb25zW2NvbC5zZWxlY3RlZEluZGV4XSA6IHVuZGVmaW5lZDtcbiAgICAgIHNlbGVjdGVkW2NvbC5uYW1lXSA9IHtcbiAgICAgICAgdGV4dDogc2VsZWN0ZWRDb2x1bW4gPyBzZWxlY3RlZENvbHVtbi50ZXh0IDogdW5kZWZpbmVkLFxuICAgICAgICB2YWx1ZTogc2VsZWN0ZWRDb2x1bW4gPyBzZWxlY3RlZENvbHVtbi52YWx1ZSA6IHVuZGVmaW5lZCxcbiAgICAgICAgY29sdW1uSW5kZXg6IGluZGV4XG4gICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiBzZWxlY3RlZDtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaHRtbEF0dHJpYnV0ZXNcbiAgICB9ID0gdGhpcztcbiAgICBjb25zdCBtb2RlID0gZ2V0SW9uTW9kZSh0aGlzKTtcbiAgICByZXR1cm4gaChIb3N0LCBPYmplY3QuYXNzaWduKHtcbiAgICAgIGtleTogJ2I5NTQ0MDc0N2ViODBjYmEyM2FlNjc2ZDM5OWQ1ZTU4MTY3MjJjNTgnLFxuICAgICAgXCJhcmlhLW1vZGFsXCI6IFwidHJ1ZVwiLFxuICAgICAgdGFiaW5kZXg6IFwiLTFcIlxuICAgIH0sIGh0bWxBdHRyaWJ1dGVzLCB7XG4gICAgICBzdHlsZToge1xuICAgICAgICB6SW5kZXg6IGAkezIwMDAwICsgdGhpcy5vdmVybGF5SW5kZXh9YFxuICAgICAgfSxcbiAgICAgIGNsYXNzOiBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgW21vZGVdOiB0cnVlLFxuICAgICAgICAvLyBVc2VkIGludGVybmFsbHkgZm9yIHN0eWxpbmdcbiAgICAgICAgW2BwaWNrZXItJHttb2RlfWBdOiB0cnVlLFxuICAgICAgICAnb3ZlcmxheS1oaWRkZW4nOiB0cnVlXG4gICAgICB9LCBnZXRDbGFzc01hcCh0aGlzLmNzc0NsYXNzKSksXG4gICAgICBvbklvbkJhY2tkcm9wVGFwOiB0aGlzLm9uQmFja2Ryb3BUYXAsXG4gICAgICBvbklvblBpY2tlcldpbGxEaXNtaXNzOiB0aGlzLmRpc3BhdGNoQ2FuY2VsSGFuZGxlclxuICAgIH0pLCBoKFwiaW9uLWJhY2tkcm9wXCIsIHtcbiAgICAgIGtleTogJzE2OWQxYzgzZWY0MGU3ZmNiMTM0MjE5YTU4NTI5OGI0MDNhNzBiMGYnLFxuICAgICAgdmlzaWJsZTogdGhpcy5zaG93QmFja2Ryb3AsXG4gICAgICB0YXBwYWJsZTogdGhpcy5iYWNrZHJvcERpc21pc3NcbiAgICB9KSwgaChcImRpdlwiLCB7XG4gICAgICBrZXk6ICc5ODUxOGU1ZjVjZWEyZGZiOGRmYTYzZDk1NDVlOWFlM2E1NzY1MDIzJyxcbiAgICAgIHRhYmluZGV4OiBcIjBcIixcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCJcbiAgICB9KSwgaChcImRpdlwiLCB7XG4gICAgICBrZXk6ICcxNTE3NTVhYjhlYjIzZjlhZGFmYmZlMjAxMzQ5Mzk4ZjVhNjlkZWU3JyxcbiAgICAgIGNsYXNzOiBcInBpY2tlci13cmFwcGVyIGlvbi1vdmVybGF5LXdyYXBwZXJcIixcbiAgICAgIHJvbGU6IFwiZGlhbG9nXCJcbiAgICB9LCBoKFwiZGl2XCIsIHtcbiAgICAgIGtleTogJzVkY2Y5M2IyZjRmZThmNGZjZTdjN2FlYzhmODVlZjQ1YTAzZWY0NzAnLFxuICAgICAgY2xhc3M6IFwicGlja2VyLXRvb2xiYXJcIlxuICAgIH0sIHRoaXMuYnV0dG9ucy5tYXAoYiA9PiBoKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBidXR0b25XcmFwcGVyQ2xhc3MoYilcbiAgICB9LCBoKFwiYnV0dG9uXCIsIHtcbiAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICBvbkNsaWNrOiAoKSA9PiB0aGlzLmJ1dHRvbkNsaWNrKGIpLFxuICAgICAgY2xhc3M6IGJ1dHRvbkNsYXNzKGIpXG4gICAgfSwgYi50ZXh0KSkpKSwgaChcImRpdlwiLCB7XG4gICAgICBrZXk6ICdmZDVkNjY3MDhlZGQzOGFkYzVhNGQyZmFkNzI5ODk2OTM5OGEwNWUzJyxcbiAgICAgIGNsYXNzOiBcInBpY2tlci1jb2x1bW5zXCJcbiAgICB9LCBoKFwiZGl2XCIsIHtcbiAgICAgIGtleTogJzFiNTgzMGZkNmNlZjEwMTZhZjc3MzY3OTJjNTE0OTY1ZDZjYjM4YTgnLFxuICAgICAgY2xhc3M6IFwicGlja2VyLWFib3ZlLWhpZ2hsaWdodFwiXG4gICAgfSksIHRoaXMucHJlc2VudGVkICYmIHRoaXMuY29sdW1ucy5tYXAoYyA9PiBoKFwiaW9uLXBpY2tlci1sZWdhY3ktY29sdW1uXCIsIHtcbiAgICAgIGNvbDogY1xuICAgIH0pKSwgaChcImRpdlwiLCB7XG4gICAgICBrZXk6ICdjNmVkZWNhN2FmZDY5ZTEzYzljNjZiYTM2ZjI2MTk3NGZkMGY4Zjc4JyxcbiAgICAgIGNsYXNzOiBcInBpY2tlci1iZWxvdy1oaWdobGlnaHRcIlxuICAgIH0pKSksIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnZTJhNGIyNDcxMGUzMDU3OWIxNGI4MmRiZmQzNzYxYjIxODc3OTdiNScsXG4gICAgICB0YWJpbmRleDogXCIwXCIsXG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiXG4gICAgfSkpO1xuICB9XG4gIGdldCBlbCgpIHtcbiAgICByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBcImlzT3BlblwiOiBbXCJvbklzT3BlbkNoYW5nZVwiXSxcbiAgICAgIFwidHJpZ2dlclwiOiBbXCJ0cmlnZ2VyQ2hhbmdlZFwiXVxuICAgIH07XG4gIH1cbn07XG5jb25zdCBidXR0b25XcmFwcGVyQ2xhc3MgPSBidXR0b24gPT4ge1xuICByZXR1cm4ge1xuICAgIFtgcGlja2VyLXRvb2xiYXItJHtidXR0b24ucm9sZX1gXTogYnV0dG9uLnJvbGUgIT09IHVuZGVmaW5lZCxcbiAgICAncGlja2VyLXRvb2xiYXItYnV0dG9uJzogdHJ1ZVxuICB9O1xufTtcbmNvbnN0IGJ1dHRvbkNsYXNzID0gYnV0dG9uID0+IHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe1xuICAgICdwaWNrZXItYnV0dG9uJzogdHJ1ZSxcbiAgICAnaW9uLWFjdGl2YXRhYmxlJzogdHJ1ZVxuICB9LCBnZXRDbGFzc01hcChidXR0b24uY3NzQ2xhc3MpKTtcbn07XG5QaWNrZXIuc3R5bGUgPSB7XG4gIGlvczogcGlja2VySW9zQ3NzLFxuICBtZDogcGlja2VyTWRDc3Ncbn07XG5jb25zdCBwaWNrZXJDb2x1bW5Jb3NDc3MgPSBcIi5waWNrZXItY29se2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4OjE7ZmxleDoxOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7aGVpZ2h0OjEwMCU7LXdlYmtpdC1ib3gtc2l6aW5nOmNvbnRlbnQtYm94O2JveC1zaXppbmc6Y29udGVudC1ib3g7Y29udGFpbjpjb250ZW50fS5waWNrZXItb3B0c3twb3NpdGlvbjpyZWxhdGl2ZTstbXMtZmxleDoxO2ZsZXg6MTttYXgtd2lkdGg6MTAwJX0ucGlja2VyLW9wdHt0b3A6MDtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7Ym9yZGVyOjA7dGV4dC1hbGlnbjpjZW50ZXI7dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXA7Y29udGFpbjpzdHJpY3Q7b3ZlcmZsb3c6aGlkZGVuO3dpbGwtY2hhbmdlOnRyYW5zZm9ybX0ucGlja2VyLW9wdHtpbnNldC1pbmxpbmUtc3RhcnQ6MH0ucGlja2VyLW9wdC5waWNrZXItb3B0LWRpc2FibGVke3BvaW50ZXItZXZlbnRzOm5vbmV9LnBpY2tlci1vcHQtZGlzYWJsZWR7b3BhY2l0eTowfS5waWNrZXItb3B0cy1sZWZ0ey1tcy1mbGV4LXBhY2s6c3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9LnBpY2tlci1vcHRzLXJpZ2h0ey1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZH0ucGlja2VyLW9wdDphY3RpdmUsLnBpY2tlci1vcHQ6Zm9jdXN7b3V0bGluZTpub25lfS5waWNrZXItcHJlZml4e3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4OjE7ZmxleDoxO3RleHQtYWxpZ246ZW5kO3doaXRlLXNwYWNlOm5vd3JhcH0ucGlja2VyLXN1ZmZpeHtwb3NpdGlvbjpyZWxhdGl2ZTstbXMtZmxleDoxO2ZsZXg6MTt0ZXh0LWFsaWduOnN0YXJ0O3doaXRlLXNwYWNlOm5vd3JhcH0ucGlja2VyLWNvbHstd2Via2l0LXBhZGRpbmctc3RhcnQ6NHB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjRweDstd2Via2l0LXBhZGRpbmctZW5kOjRweDtwYWRkaW5nLWlubGluZS1lbmQ6NHB4O3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDstd2Via2l0LXRyYW5zZm9ybS1zdHlsZTpwcmVzZXJ2ZS0zZDt0cmFuc2Zvcm0tc3R5bGU6cHJlc2VydmUtM2R9LnBpY2tlci1wcmVmaXgsLnBpY2tlci1zdWZmaXgsLnBpY2tlci1vcHRze3RvcDo3N3B4Oy13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOnByZXNlcnZlLTNkO3RyYW5zZm9ybS1zdHlsZTpwcmVzZXJ2ZS0zZDtjb2xvcjppbmhlcml0O2ZvbnQtc2l6ZToyMHB4O2xpbmUtaGVpZ2h0OjQycHg7cG9pbnRlci1ldmVudHM6bm9uZX0ucGlja2VyLW9wdHtwYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjA7cGFkZGluZy10b3A6MDtwYWRkaW5nLWJvdHRvbTowO21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Y2VudGVyIGNlbnRlcjt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciBjZW50ZXI7aGVpZ2h0OjQ2cHg7LXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6cHJlc2VydmUtM2Q7dHJhbnNmb3JtLXN0eWxlOnByZXNlcnZlLTNkOy13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXQ7dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXQ7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtjb2xvcjppbmhlcml0O2ZvbnQtc2l6ZToyMHB4O2xpbmUtaGVpZ2h0OjQycHg7LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjtiYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjtwb2ludGVyLWV2ZW50czphdXRvfTpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAucGlja2VyLW9wdHstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Y2FsYygxMDAlIC0gY2VudGVyKSBjZW50ZXI7dHJhbnNmb3JtLW9yaWdpbjpjYWxjKDEwMCUgLSBjZW50ZXIpIGNlbnRlcn1bZGlyPXJ0bF0gLnBpY2tlci1vcHR7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNhbGMoMTAwJSAtIGNlbnRlcikgY2VudGVyO3RyYW5zZm9ybS1vcmlnaW46Y2FsYygxMDAlIC0gY2VudGVyKSBjZW50ZXJ9QHN1cHBvcnRzIHNlbGVjdG9yKDpkaXIocnRsKSl7LnBpY2tlci1vcHQ6ZGlyKHJ0bCl7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNhbGMoMTAwJSAtIGNlbnRlcikgY2VudGVyO3RyYW5zZm9ybS1vcmlnaW46Y2FsYygxMDAlIC0gY2VudGVyKSBjZW50ZXJ9fVwiO1xuY29uc3QgcGlja2VyQ29sdW1uTWRDc3MgPSBcIi5waWNrZXItY29se2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4OjE7ZmxleDoxOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7aGVpZ2h0OjEwMCU7LXdlYmtpdC1ib3gtc2l6aW5nOmNvbnRlbnQtYm94O2JveC1zaXppbmc6Y29udGVudC1ib3g7Y29udGFpbjpjb250ZW50fS5waWNrZXItb3B0c3twb3NpdGlvbjpyZWxhdGl2ZTstbXMtZmxleDoxO2ZsZXg6MTttYXgtd2lkdGg6MTAwJX0ucGlja2VyLW9wdHt0b3A6MDtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7Ym9yZGVyOjA7dGV4dC1hbGlnbjpjZW50ZXI7dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXA7Y29udGFpbjpzdHJpY3Q7b3ZlcmZsb3c6aGlkZGVuO3dpbGwtY2hhbmdlOnRyYW5zZm9ybX0ucGlja2VyLW9wdHtpbnNldC1pbmxpbmUtc3RhcnQ6MH0ucGlja2VyLW9wdC5waWNrZXItb3B0LWRpc2FibGVke3BvaW50ZXItZXZlbnRzOm5vbmV9LnBpY2tlci1vcHQtZGlzYWJsZWR7b3BhY2l0eTowfS5waWNrZXItb3B0cy1sZWZ0ey1tcy1mbGV4LXBhY2s6c3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9LnBpY2tlci1vcHRzLXJpZ2h0ey1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZH0ucGlja2VyLW9wdDphY3RpdmUsLnBpY2tlci1vcHQ6Zm9jdXN7b3V0bGluZTpub25lfS5waWNrZXItcHJlZml4e3Bvc2l0aW9uOnJlbGF0aXZlOy1tcy1mbGV4OjE7ZmxleDoxO3RleHQtYWxpZ246ZW5kO3doaXRlLXNwYWNlOm5vd3JhcH0ucGlja2VyLXN1ZmZpeHtwb3NpdGlvbjpyZWxhdGl2ZTstbXMtZmxleDoxO2ZsZXg6MTt0ZXh0LWFsaWduOnN0YXJ0O3doaXRlLXNwYWNlOm5vd3JhcH0ucGlja2VyLWNvbHstd2Via2l0LXBhZGRpbmctc3RhcnQ6OHB4O3BhZGRpbmctaW5saW5lLXN0YXJ0OjhweDstd2Via2l0LXBhZGRpbmctZW5kOjhweDtwYWRkaW5nLWlubGluZS1lbmQ6OHB4O3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDstd2Via2l0LXRyYW5zZm9ybS1zdHlsZTpwcmVzZXJ2ZS0zZDt0cmFuc2Zvcm0tc3R5bGU6cHJlc2VydmUtM2R9LnBpY2tlci1wcmVmaXgsLnBpY2tlci1zdWZmaXgsLnBpY2tlci1vcHRze3RvcDo3N3B4Oy13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOnByZXNlcnZlLTNkO3RyYW5zZm9ybS1zdHlsZTpwcmVzZXJ2ZS0zZDtjb2xvcjppbmhlcml0O2ZvbnQtc2l6ZToyMnB4O2xpbmUtaGVpZ2h0OjQycHg7cG9pbnRlci1ldmVudHM6bm9uZX0ucGlja2VyLW9wdHttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowO3BhZGRpbmctdG9wOjA7cGFkZGluZy1ib3R0b206MDtoZWlnaHQ6NDNweDstd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0O3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0O2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Y29sb3I6aW5oZXJpdDtmb250LXNpemU6MjJweDtsaW5lLWhlaWdodDo0MnB4Oy13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47YmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47cG9pbnRlci1ldmVudHM6YXV0b30ucGlja2VyLXByZWZpeCwucGlja2VyLXN1ZmZpeCwucGlja2VyLW9wdC5waWNrZXItb3B0LXNlbGVjdGVke2NvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMDA1NGU5KX1cIjtcbmNvbnN0IFBpY2tlckNvbHVtbkNtcCA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5pb25QaWNrZXJDb2xDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImlvblBpY2tlckNvbENoYW5nZVwiLCA3KTtcbiAgICB0aGlzLm9wdEhlaWdodCA9IDA7XG4gICAgdGhpcy5yb3RhdGVGYWN0b3IgPSAwO1xuICAgIHRoaXMuc2NhbGVGYWN0b3IgPSAxO1xuICAgIHRoaXMudmVsb2NpdHkgPSAwO1xuICAgIHRoaXMueSA9IDA7XG4gICAgdGhpcy5ub0FuaW1hdGUgPSB0cnVlO1xuICAgIC8vIGBjb2xEaWRDaGFuZ2VgIGlzIGEgZmxhZyB0aGF0IGdldHMgc2V0IHdoZW4gdGhlIGNvbHVtbiBpcyBjaGFuZ2VkXG4gICAgLy8gZHluYW1pY2FsbHkuIFdoZW4gdGhpcyBmbGFnIGlzIHNldCwgdGhlIGNvbHVtbiB3aWxsIHJlZnJlc2hcbiAgICAvLyBhZnRlciB0aGUgY29tcG9uZW50IHJlLXJlbmRlcnMgdG8gaW5jb3Jwb3JhdGUgdGhlIG5ldyBjb2x1bW4gZGF0YS5cbiAgICAvLyBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIGB0aGlzLnJlZnJlc2hgIHF1ZXJpZXMgZm9yIHRoZSBvcHRpb24gZWxlbWVudHMsXG4gICAgLy8gc28gaXQgbmVlZHMgdG8gd2FpdCBmb3IgdGhlIGxhdGVzdCBlbGVtZW50cyB0byBiZSBhdmFpbGFibGUgaW4gdGhlIERPTS5cbiAgICAvLyBFeDogY29sdW1uIGlzIGNyZWF0ZWQgd2l0aCAzIG9wdGlvbnMuIFVzZXIgdXBkYXRlcyB0aGUgY29sdW1uIGRhdGFcbiAgICAvLyB0byBoYXZlIDUgb3B0aW9ucy4gVGhlIGNvbHVtbiB3aWxsIHN0aWxsIHRoaW5rIGl0IG9ubHkgaGFzIDMgb3B0aW9ucy5cbiAgICB0aGlzLmNvbERpZENoYW5nZSA9IGZhbHNlO1xuICB9XG4gIGNvbENoYW5nZWQoKSB7XG4gICAgdGhpcy5jb2xEaWRDaGFuZ2UgPSB0cnVlO1xuICB9XG4gIGFzeW5jIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGxldCBwaWNrZXJSb3RhdGVGYWN0b3IgPSAwO1xuICAgIGxldCBwaWNrZXJTY2FsZUZhY3RvciA9IDAuODE7XG4gICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgaWYgKG1vZGUgPT09ICdpb3MnKSB7XG4gICAgICBwaWNrZXJSb3RhdGVGYWN0b3IgPSAtMC40NjtcbiAgICAgIHBpY2tlclNjYWxlRmFjdG9yID0gMTtcbiAgICB9XG4gICAgdGhpcy5yb3RhdGVGYWN0b3IgPSBwaWNrZXJSb3RhdGVGYWN0b3I7XG4gICAgdGhpcy5zY2FsZUZhY3RvciA9IHBpY2tlclNjYWxlRmFjdG9yO1xuICAgIHRoaXMuZ2VzdHVyZSA9IChhd2FpdCBpbXBvcnQoJy4vaW5kZXgtQ2ZnQkYxU0UuanMnKSkuY3JlYXRlR2VzdHVyZSh7XG4gICAgICBlbDogdGhpcy5lbCxcbiAgICAgIGdlc3R1cmVOYW1lOiAncGlja2VyLXN3aXBlJyxcbiAgICAgIGdlc3R1cmVQcmlvcml0eTogMTAwLFxuICAgICAgdGhyZXNob2xkOiAwLFxuICAgICAgcGFzc2l2ZTogZmFsc2UsXG4gICAgICBvblN0YXJ0OiBldiA9PiB0aGlzLm9uU3RhcnQoZXYpLFxuICAgICAgb25Nb3ZlOiBldiA9PiB0aGlzLm9uTW92ZShldiksXG4gICAgICBvbkVuZDogZXYgPT4gdGhpcy5vbkVuZChldilcbiAgICB9KTtcbiAgICB0aGlzLmdlc3R1cmUuZW5hYmxlKCk7XG4gICAgLy8gT3B0aW9ucyBoYXZlIG5vdCBiZWVuIGluaXRpYWxpemVkIHlldFxuICAgIC8vIEFuaW1hdGlvbiBtdXN0IGJlIGRpc2FibGVkIHRocm91Z2ggdGhlIGBub0FuaW1hdGVgIGZsYWdcbiAgICAvLyBPdGhlcndpc2UsIHRoZSBvcHRpb25zIHdpbGwgcmVuZGVyXG4gICAgLy8gYXQgdGhlIHRvcCBvZiB0aGUgY29sdW1uIGFuZCB0cmFuc2l0aW9uIGRvd25cbiAgICB0aGlzLnRtcklkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm5vQW5pbWF0ZSA9IGZhbHNlO1xuICAgICAgLy8gQWZ0ZXIgaW5pdGlhbGl6YXRpb24sIGByZWZyZXNoKClgIHdpbGwgYmUgY2FsbGVkXG4gICAgICAvLyBBdCB0aGlzIHBvaW50LCBhbmltYXRpb24gd2lsbCBiZSBlbmFibGVkLiBUaGUgb3B0aW9ucyB3aWxsXG4gICAgICAvLyBhbmltYXRlIGFzIHRoZXkgYXJlIGJlaW5nIHNlbGVjdGVkLlxuICAgICAgdGhpcy5yZWZyZXNoKHRydWUpO1xuICAgIH0sIDI1MCk7XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICB0aGlzLm9uRG9tQ2hhbmdlKCk7XG4gIH1cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIC8vIE9wdGlvbnMgbWF5IGhhdmUgY2hhbmdlZCBzaW5jZSBsYXN0IHVwZGF0ZS5cbiAgICBpZiAodGhpcy5jb2xEaWRDaGFuZ2UpIHtcbiAgICAgIC8vIEFuaW1hdGlvbiBtdXN0IGJlIGRpc2FibGVkIHRocm91Z2ggdGhlIGBvbkRvbUNoYW5nZWAgcGFyYW1ldGVyLlxuICAgICAgLy8gT3RoZXJ3aXNlLCB0aGUgcmVjZW50bHkgYWRkZWQgb3B0aW9ucyB3aWxsIHJlbmRlclxuICAgICAgLy8gYXQgdGhlIHRvcCBvZiB0aGUgY29sdW1uIGFuZCB0cmFuc2l0aW9uIGRvd25cbiAgICAgIHRoaXMub25Eb21DaGFuZ2UodHJ1ZSwgZmFsc2UpO1xuICAgICAgdGhpcy5jb2xEaWRDaGFuZ2UgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHRoaXMucmFmSWQgIT09IHVuZGVmaW5lZCkgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yYWZJZCk7XG4gICAgaWYgKHRoaXMudG1ySWQpIGNsZWFyVGltZW91dCh0aGlzLnRtcklkKTtcbiAgICBpZiAodGhpcy5nZXN0dXJlKSB7XG4gICAgICB0aGlzLmdlc3R1cmUuZGVzdHJveSgpO1xuICAgICAgdGhpcy5nZXN0dXJlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuICBlbWl0Q29sQ2hhbmdlKCkge1xuICAgIHRoaXMuaW9uUGlja2VyQ29sQ2hhbmdlLmVtaXQodGhpcy5jb2wpO1xuICB9XG4gIHNldFNlbGVjdGVkKHNlbGVjdGVkSW5kZXgsIGR1cmF0aW9uKSB7XG4gICAgLy8gaWYgdGhlcmUgaXMgYSBzZWxlY3RlZCBpbmRleCwgdGhlbiBmaWd1cmUgb3V0IGl0J3MgeSBwb3NpdGlvblxuICAgIC8vIGlmIHRoZXJlIGlzbid0IGEgc2VsZWN0ZWQgaW5kZXgsIHRoZW4ganVzdCB1c2UgdGhlIHRvcCB5IHBvc2l0aW9uXG4gICAgY29uc3QgeSA9IHNlbGVjdGVkSW5kZXggPiAtMSA/IC0oc2VsZWN0ZWRJbmRleCAqIHRoaXMub3B0SGVpZ2h0KSA6IDA7XG4gICAgdGhpcy52ZWxvY2l0eSA9IDA7XG4gICAgLy8gc2V0IHdoYXQgeSBwb3NpdGlvbiB3ZSdyZSBhdFxuICAgIGlmICh0aGlzLnJhZklkICE9PSB1bmRlZmluZWQpIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMucmFmSWQpO1xuICAgIHRoaXMudXBkYXRlKHksIGR1cmF0aW9uLCB0cnVlKTtcbiAgICB0aGlzLmVtaXRDb2xDaGFuZ2UoKTtcbiAgfVxuICB1cGRhdGUoeSwgZHVyYXRpb24sIHNhdmVZKSB7XG4gICAgaWYgKCF0aGlzLm9wdHNFbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBlbnN1cmUgd2UndmUgZ290IGEgZ29vZCByb3VuZCBudW1iZXIgOilcbiAgICBsZXQgdHJhbnNsYXRlWSA9IDA7XG4gICAgbGV0IHRyYW5zbGF0ZVogPSAwO1xuICAgIGNvbnN0IHtcbiAgICAgIGNvbCxcbiAgICAgIHJvdGF0ZUZhY3RvclxuICAgIH0gPSB0aGlzO1xuICAgIGNvbnN0IHByZXZTZWxlY3RlZCA9IGNvbC5zZWxlY3RlZEluZGV4O1xuICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSBjb2wuc2VsZWN0ZWRJbmRleCA9IHRoaXMuaW5kZXhGb3JZKC15KTtcbiAgICBjb25zdCBkdXJhdGlvblN0ciA9IGR1cmF0aW9uID09PSAwID8gJycgOiBkdXJhdGlvbiArICdtcyc7XG4gICAgY29uc3Qgc2NhbGVTdHIgPSBgc2NhbGUoJHt0aGlzLnNjYWxlRmFjdG9yfSlgO1xuICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5vcHRzRWwuY2hpbGRyZW47XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgYnV0dG9uID0gY2hpbGRyZW5baV07XG4gICAgICBjb25zdCBvcHQgPSBjb2wub3B0aW9uc1tpXTtcbiAgICAgIGNvbnN0IG9wdE9mZnNldCA9IGkgKiB0aGlzLm9wdEhlaWdodCArIHk7XG4gICAgICBsZXQgdHJhbnNmb3JtID0gJyc7XG4gICAgICBpZiAocm90YXRlRmFjdG9yICE9PSAwKSB7XG4gICAgICAgIGNvbnN0IHJvdGF0ZVggPSBvcHRPZmZzZXQgKiByb3RhdGVGYWN0b3I7XG4gICAgICAgIGlmIChNYXRoLmFicyhyb3RhdGVYKSA8PSA5MCkge1xuICAgICAgICAgIHRyYW5zbGF0ZVkgPSAwO1xuICAgICAgICAgIHRyYW5zbGF0ZVogPSA5MDtcbiAgICAgICAgICB0cmFuc2Zvcm0gPSBgcm90YXRlWCgke3JvdGF0ZVh9ZGVnKSBgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRyYW5zbGF0ZVkgPSAtOTk5OTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNsYXRlWiA9IDA7XG4gICAgICAgIHRyYW5zbGF0ZVkgPSBvcHRPZmZzZXQ7XG4gICAgICB9XG4gICAgICBjb25zdCBzZWxlY3RlZCA9IHNlbGVjdGVkSW5kZXggPT09IGk7XG4gICAgICB0cmFuc2Zvcm0gKz0gYHRyYW5zbGF0ZTNkKDBweCwke3RyYW5zbGF0ZVl9cHgsJHt0cmFuc2xhdGVafXB4KSBgO1xuICAgICAgaWYgKHRoaXMuc2NhbGVGYWN0b3IgIT09IDEgJiYgIXNlbGVjdGVkKSB7XG4gICAgICAgIHRyYW5zZm9ybSArPSBzY2FsZVN0cjtcbiAgICAgIH1cbiAgICAgIC8vIFVwZGF0ZSB0cmFuc2l0aW9uIGR1cmF0aW9uXG4gICAgICBpZiAodGhpcy5ub0FuaW1hdGUpIHtcbiAgICAgICAgb3B0LmR1cmF0aW9uID0gMDtcbiAgICAgICAgYnV0dG9uLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9ICcnO1xuICAgICAgfSBlbHNlIGlmIChkdXJhdGlvbiAhPT0gb3B0LmR1cmF0aW9uKSB7XG4gICAgICAgIG9wdC5kdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgICAgICBidXR0b24uc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb25TdHI7XG4gICAgICB9XG4gICAgICAvLyBVcGRhdGUgdHJhbnNmb3JtXG4gICAgICBpZiAodHJhbnNmb3JtICE9PSBvcHQudHJhbnNmb3JtKSB7XG4gICAgICAgIG9wdC50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgICB9XG4gICAgICBidXR0b24uc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgICAgLyoqXG4gICAgICAgKiBFbnN1cmUgdGhhdCB0aGUgc2VsZWN0IGNvbHVtblxuICAgICAgICogaXRlbSBoYXMgdGhlIHNlbGVjdGVkIGNsYXNzXG4gICAgICAgKi9cbiAgICAgIG9wdC5zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFBJQ0tFUl9PUFRfU0VMRUNURUQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoUElDS0VSX09QVF9TRUxFQ1RFRCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY29sLnByZXZTZWxlY3RlZCA9IHByZXZTZWxlY3RlZDtcbiAgICBpZiAoc2F2ZVkpIHtcbiAgICAgIHRoaXMueSA9IHk7XG4gICAgfVxuICAgIGlmICh0aGlzLmxhc3RJbmRleCAhPT0gc2VsZWN0ZWRJbmRleCkge1xuICAgICAgLy8gaGF2ZSBub3Qgc2V0IGEgbGFzdCBpbmRleCB5ZXRcbiAgICAgIGhhcHRpY1NlbGVjdGlvbkNoYW5nZWQoKTtcbiAgICAgIHRoaXMubGFzdEluZGV4ID0gc2VsZWN0ZWRJbmRleDtcbiAgICB9XG4gIH1cbiAgZGVjZWxlcmF0ZSgpIHtcbiAgICBpZiAodGhpcy52ZWxvY2l0eSAhPT0gMCkge1xuICAgICAgLy8gc3RpbGwgZGVjZWxlcmF0aW5nXG4gICAgICB0aGlzLnZlbG9jaXR5ICo9IERFQ0VMRVJBVElPTl9GUklDVElPTjtcbiAgICAgIC8vIGRvIG5vdCBsZXQgaXQgZ28gc2xvd2VyIHRoYW4gYSB2ZWxvY2l0eSBvZiAxXG4gICAgICB0aGlzLnZlbG9jaXR5ID0gdGhpcy52ZWxvY2l0eSA+IDAgPyBNYXRoLm1heCh0aGlzLnZlbG9jaXR5LCAxKSA6IE1hdGgubWluKHRoaXMudmVsb2NpdHksIC0xKTtcbiAgICAgIGxldCB5ID0gdGhpcy55ICsgdGhpcy52ZWxvY2l0eTtcbiAgICAgIGlmICh5ID4gdGhpcy5taW5ZKSB7XG4gICAgICAgIC8vIHdob29wcywgaXQncyB0cnlpbmcgdG8gc2Nyb2xsIHVwIGZhcnRoZXIgdGhhbiB0aGUgb3B0aW9ucyB3ZSBoYXZlIVxuICAgICAgICB5ID0gdGhpcy5taW5ZO1xuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gMDtcbiAgICAgIH0gZWxzZSBpZiAoeSA8IHRoaXMubWF4WSkge1xuICAgICAgICAvLyBnYWhoLCBpdCdzIHRyeWluZyB0byBzY3JvbGwgZG93biBmYXJ0aGVyIHRoYW4gd2UgY2FuIVxuICAgICAgICB5ID0gdGhpcy5tYXhZO1xuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gMDtcbiAgICAgIH1cbiAgICAgIHRoaXMudXBkYXRlKHksIDAsIHRydWUpO1xuICAgICAgY29uc3Qgbm90TG9ja2VkSW4gPSBNYXRoLnJvdW5kKHkpICUgdGhpcy5vcHRIZWlnaHQgIT09IDAgfHwgTWF0aC5hYnModGhpcy52ZWxvY2l0eSkgPiAxO1xuICAgICAgaWYgKG5vdExvY2tlZEluKSB7XG4gICAgICAgIC8vIGlzbid0IGxvY2tlZCBpbiB5ZXQsIGtlZXAgZGVjZWxlcmF0aW5nIHVudGlsIGl0IGlzXG4gICAgICAgIHRoaXMucmFmSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5kZWNlbGVyYXRlKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IDA7XG4gICAgICAgIHRoaXMuZW1pdENvbENoYW5nZSgpO1xuICAgICAgICBoYXB0aWNTZWxlY3Rpb25FbmQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMueSAlIHRoaXMub3B0SGVpZ2h0ICE9PSAwKSB7XG4gICAgICAvLyBuZWVkcyB0byBzdGlsbCBnZXQgbG9ja2VkIGludG8gYSBwb3NpdGlvbiBzbyBvcHRpb25zIGxpbmUgdXBcbiAgICAgIGNvbnN0IGN1cnJlbnRQb3MgPSBNYXRoLmFicyh0aGlzLnkgJSB0aGlzLm9wdEhlaWdodCk7XG4gICAgICAvLyBjcmVhdGUgYSB2ZWxvY2l0eSBpbiB0aGUgZGlyZWN0aW9uIGl0IG5lZWRzIHRvIHNjcm9sbFxuICAgICAgdGhpcy52ZWxvY2l0eSA9IGN1cnJlbnRQb3MgPiB0aGlzLm9wdEhlaWdodCAvIDIgPyAxIDogLTE7XG4gICAgICB0aGlzLmRlY2VsZXJhdGUoKTtcbiAgICB9XG4gIH1cbiAgaW5kZXhGb3JZKHkpIHtcbiAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgoTWF0aC5hYnMoTWF0aC5yb3VuZCh5IC8gdGhpcy5vcHRIZWlnaHQpKSwgMCksIHRoaXMuY29sLm9wdGlvbnMubGVuZ3RoIC0gMSk7XG4gIH1cbiAgb25TdGFydChkZXRhaWwpIHtcbiAgICAvLyBXZSBoYXZlIHRvIHByZXZlbnQgZGVmYXVsdCBpbiBvcmRlciB0byBibG9jayBzY3JvbGxpbmcgdW5kZXIgdGhlIHBpY2tlclxuICAgIC8vIGJ1dCB3ZSBETyBOT1QgaGF2ZSB0byBzdG9wIHByb3BhZ2F0aW9uLCBzaW5jZSB3ZSBzdGlsbCB3YW50XG4gICAgLy8gc29tZSBcImNsaWNrXCIgZXZlbnRzIHRvIGNhcHR1cmVcbiAgICBpZiAoZGV0YWlsLmV2ZW50LmNhbmNlbGFibGUpIHtcbiAgICAgIGRldGFpbC5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBkZXRhaWwuZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaGFwdGljU2VsZWN0aW9uU3RhcnQoKTtcbiAgICAvLyByZXNldCBldmVyeXRoaW5nXG4gICAgaWYgKHRoaXMucmFmSWQgIT09IHVuZGVmaW5lZCkgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yYWZJZCk7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuY29sLm9wdGlvbnM7XG4gICAgbGV0IG1pblkgPSBvcHRpb25zLmxlbmd0aCAtIDE7XG4gICAgbGV0IG1heFkgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCFvcHRpb25zW2ldLmRpc2FibGVkKSB7XG4gICAgICAgIG1pblkgPSBNYXRoLm1pbihtaW5ZLCBpKTtcbiAgICAgICAgbWF4WSA9IE1hdGgubWF4KG1heFksIGkpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm1pblkgPSAtKG1pblkgKiB0aGlzLm9wdEhlaWdodCk7XG4gICAgdGhpcy5tYXhZID0gLShtYXhZICogdGhpcy5vcHRIZWlnaHQpO1xuICB9XG4gIG9uTW92ZShkZXRhaWwpIHtcbiAgICBpZiAoZGV0YWlsLmV2ZW50LmNhbmNlbGFibGUpIHtcbiAgICAgIGRldGFpbC5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBkZXRhaWwuZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgLy8gdXBkYXRlIHRoZSBzY3JvbGwgcG9zaXRpb24gcmVsYXRpdmUgdG8gcG9pbnRlciBzdGFydCBwb3NpdGlvblxuICAgIGxldCB5ID0gdGhpcy55ICsgZGV0YWlsLmRlbHRhWTtcbiAgICBpZiAoeSA+IHRoaXMubWluWSkge1xuICAgICAgLy8gc2Nyb2xsaW5nIHVwIGhpZ2hlciB0aGFuIHNjcm9sbCBhcmVhXG4gICAgICB5ID0gTWF0aC5wb3coeSwgMC44KTtcbiAgICAgIHRoaXMuYm91bmNlRnJvbSA9IHk7XG4gICAgfSBlbHNlIGlmICh5IDwgdGhpcy5tYXhZKSB7XG4gICAgICAvLyBzY3JvbGxpbmcgZG93biBiZWxvdyBzY3JvbGwgYXJlYVxuICAgICAgeSArPSBNYXRoLnBvdyh0aGlzLm1heFkgLSB5LCAwLjkpO1xuICAgICAgdGhpcy5ib3VuY2VGcm9tID0geTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ib3VuY2VGcm9tID0gMDtcbiAgICB9XG4gICAgdGhpcy51cGRhdGUoeSwgMCwgZmFsc2UpO1xuICB9XG4gIG9uRW5kKGRldGFpbCkge1xuICAgIGlmICh0aGlzLmJvdW5jZUZyb20gPiAwKSB7XG4gICAgICAvLyBib3VuY2UgYmFjayB1cFxuICAgICAgdGhpcy51cGRhdGUodGhpcy5taW5ZLCAxMDAsIHRydWUpO1xuICAgICAgdGhpcy5lbWl0Q29sQ2hhbmdlKCk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmICh0aGlzLmJvdW5jZUZyb20gPCAwKSB7XG4gICAgICAvLyBib3VuY2UgYmFjayBkb3duXG4gICAgICB0aGlzLnVwZGF0ZSh0aGlzLm1heFksIDEwMCwgdHJ1ZSk7XG4gICAgICB0aGlzLmVtaXRDb2xDaGFuZ2UoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy52ZWxvY2l0eSA9IGNsYW1wKC05MCwgZGV0YWlsLnZlbG9jaXR5WSAqIDIzLCBNQVhfUElDS0VSX1NQRUVEKTtcbiAgICBpZiAodGhpcy52ZWxvY2l0eSA9PT0gMCAmJiBkZXRhaWwuZGVsdGFZID09PSAwKSB7XG4gICAgICBjb25zdCBvcHQgPSBkZXRhaWwuZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5waWNrZXItb3B0Jyk7XG4gICAgICBpZiAob3B0ID09PSBudWxsIHx8IG9wdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0Lmhhc0F0dHJpYnV0ZSgnb3B0LWluZGV4JykpIHtcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZChwYXJzZUludChvcHQuZ2V0QXR0cmlidXRlKCdvcHQtaW5kZXgnKSwgMTApLCBUUkFOU0lUSU9OX0RVUkFUSU9OKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy55ICs9IGRldGFpbC5kZWx0YVk7XG4gICAgICBpZiAoTWF0aC5hYnMoZGV0YWlsLnZlbG9jaXR5WSkgPCAwLjA1KSB7XG4gICAgICAgIGNvbnN0IGlzU2Nyb2xsaW5nVXAgPSBkZXRhaWwuZGVsdGFZID4gMDtcbiAgICAgICAgY29uc3Qgb3B0SGVpZ2h0RnJhY3Rpb24gPSBNYXRoLmFicyh0aGlzLnkpICUgdGhpcy5vcHRIZWlnaHQgLyB0aGlzLm9wdEhlaWdodDtcbiAgICAgICAgaWYgKGlzU2Nyb2xsaW5nVXAgJiYgb3B0SGVpZ2h0RnJhY3Rpb24gPiAwLjUpIHtcbiAgICAgICAgICB0aGlzLnZlbG9jaXR5ID0gTWF0aC5hYnModGhpcy52ZWxvY2l0eSkgKiAtMTtcbiAgICAgICAgfSBlbHNlIGlmICghaXNTY3JvbGxpbmdVcCAmJiBvcHRIZWlnaHRGcmFjdGlvbiA8PSAwLjUpIHtcbiAgICAgICAgICB0aGlzLnZlbG9jaXR5ID0gTWF0aC5hYnModGhpcy52ZWxvY2l0eSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuZGVjZWxlcmF0ZSgpO1xuICAgIH1cbiAgfVxuICByZWZyZXNoKGZvcmNlUmVmcmVzaCwgYW5pbWF0ZWQpIHtcbiAgICB2YXIgX2E7XG4gICAgbGV0IG1pbiA9IHRoaXMuY29sLm9wdGlvbnMubGVuZ3RoIC0gMTtcbiAgICBsZXQgbWF4ID0gMDtcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5jb2wub3B0aW9ucztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghb3B0aW9uc1tpXS5kaXNhYmxlZCkge1xuICAgICAgICBtaW4gPSBNYXRoLm1pbihtaW4sIGkpO1xuICAgICAgICBtYXggPSBNYXRoLm1heChtYXgsIGkpO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBPbmx5IHVwZGF0ZSBzZWxlY3RlZCB2YWx1ZSBpZiBjb2x1bW4gaGFzIGFcbiAgICAgKiB2ZWxvY2l0eSBvZiAwLiBJZiBpdCBkb2VzIG5vdCwgdGhlbiB0aGVcbiAgICAgKiBjb2x1bW4gaXMgYW5pbWF0aW5nIG1pZ2h0IGxhbmQgb25cbiAgICAgKiBhIHZhbHVlIGRpZmZlcmVudCB0aGFuIHRoZSB2YWx1ZSBhdFxuICAgICAqIHNlbGVjdGVkSW5kZXhcbiAgICAgKi9cbiAgICBpZiAodGhpcy52ZWxvY2l0eSAhPT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gY2xhbXAobWluLCAoX2EgPSB0aGlzLmNvbC5zZWxlY3RlZEluZGV4KSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAwLCBtYXgpO1xuICAgIGlmICh0aGlzLmNvbC5wcmV2U2VsZWN0ZWQgIT09IHNlbGVjdGVkSW5kZXggfHwgZm9yY2VSZWZyZXNoKSB7XG4gICAgICBjb25zdCB5ID0gc2VsZWN0ZWRJbmRleCAqIHRoaXMub3B0SGVpZ2h0ICogLTE7XG4gICAgICBjb25zdCBkdXJhdGlvbiA9IGFuaW1hdGVkID8gVFJBTlNJVElPTl9EVVJBVElPTiA6IDA7XG4gICAgICB0aGlzLnZlbG9jaXR5ID0gMDtcbiAgICAgIHRoaXMudXBkYXRlKHksIGR1cmF0aW9uLCB0cnVlKTtcbiAgICB9XG4gIH1cbiAgb25Eb21DaGFuZ2UoZm9yY2VSZWZyZXNoLCBhbmltYXRlZCkge1xuICAgIGNvbnN0IGNvbEVsID0gdGhpcy5vcHRzRWw7XG4gICAgaWYgKGNvbEVsKSB7XG4gICAgICAvLyBET00gUkVBRFxuICAgICAgLy8gV2UgcGVyZm9tIGEgRE9NIHJlYWQgb3ZlciBhIHJlbmRlcmVkIGl0ZW0sIHRoaXMgbmVlZHMgdG8gaGFwcGVuIGFmdGVyIHRoZSBmaXJzdCByZW5kZXIgb3IgYWZ0ZXIgdGhlIGNvbHVtbiBoYXMgY2hhbmdlZFxuICAgICAgdGhpcy5vcHRIZWlnaHQgPSBjb2xFbC5maXJzdEVsZW1lbnRDaGlsZCA/IGNvbEVsLmZpcnN0RWxlbWVudENoaWxkLmNsaWVudEhlaWdodCA6IDA7XG4gICAgfVxuICAgIHRoaXMucmVmcmVzaChmb3JjZVJlZnJlc2gsIGFuaW1hdGVkKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY29sID0gdGhpcy5jb2w7XG4gICAgY29uc3QgbW9kZSA9IGdldElvbk1vZGUodGhpcyk7XG4gICAgcmV0dXJuIGgoSG9zdCwge1xuICAgICAga2V5OiAnZWQzMmQxMDhkZDk0ZjAzMDJmYjQ1M2MzMWEzNDk3ZWJhZTY1ZWMzNycsXG4gICAgICBjbGFzczogT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIFttb2RlXTogdHJ1ZSxcbiAgICAgICAgJ3BpY2tlci1jb2wnOiB0cnVlLFxuICAgICAgICAncGlja2VyLW9wdHMtbGVmdCc6IHRoaXMuY29sLmFsaWduID09PSAnbGVmdCcsXG4gICAgICAgICdwaWNrZXItb3B0cy1yaWdodCc6IHRoaXMuY29sLmFsaWduID09PSAncmlnaHQnXG4gICAgICB9LCBnZXRDbGFzc01hcChjb2wuY3NzQ2xhc3MpKSxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgICdtYXgtd2lkdGgnOiB0aGlzLmNvbC5jb2x1bW5XaWR0aFxuICAgICAgfVxuICAgIH0sIGNvbC5wcmVmaXggJiYgaChcImRpdlwiLCB7XG4gICAgICBrZXk6ICc5ZjA2MzQ4OTBlNjZmZDRhZTc0ZjgyNmQxZWVhMzQzMWRlMTIxMzkzJyxcbiAgICAgIGNsYXNzOiBcInBpY2tlci1wcmVmaXhcIixcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIHdpZHRoOiBjb2wucHJlZml4V2lkdGhcbiAgICAgIH1cbiAgICB9LCBjb2wucHJlZml4KSwgaChcImRpdlwiLCB7XG4gICAgICBrZXk6ICczMzdlOTk2ZTViZTkxYWYxNjQ0NjA4NWZlMjI0MzZmMjEzYjc3MWViJyxcbiAgICAgIGNsYXNzOiBcInBpY2tlci1vcHRzXCIsXG4gICAgICBzdHlsZToge1xuICAgICAgICBtYXhXaWR0aDogY29sLm9wdGlvbnNXaWR0aFxuICAgICAgfSxcbiAgICAgIHJlZjogZWwgPT4gdGhpcy5vcHRzRWwgPSBlbFxuICAgIH0sIGNvbC5vcHRpb25zLm1hcCgobywgaW5kZXgpID0+IGgoXCJidXR0b25cIiwge1xuICAgICAgXCJhcmlhLWxhYmVsXCI6IG8uYXJpYUxhYmVsLFxuICAgICAgY2xhc3M6IHtcbiAgICAgICAgJ3BpY2tlci1vcHQnOiB0cnVlLFxuICAgICAgICAncGlja2VyLW9wdC1kaXNhYmxlZCc6ICEhby5kaXNhYmxlZFxuICAgICAgfSxcbiAgICAgIFwib3B0LWluZGV4XCI6IGluZGV4XG4gICAgfSwgby50ZXh0KSkpLCBjb2wuc3VmZml4ICYmIGgoXCJkaXZcIiwge1xuICAgICAga2V5OiAnZDY5YTEzMjU5OWQ3OGQ5ZTUxMDdmMTIyMjg5NzhjZmNlNGU0MzA5OCcsXG4gICAgICBjbGFzczogXCJwaWNrZXItc3VmZml4XCIsXG4gICAgICBzdHlsZToge1xuICAgICAgICB3aWR0aDogY29sLnN1ZmZpeFdpZHRoXG4gICAgICB9XG4gICAgfSwgY29sLnN1ZmZpeCkpO1xuICB9XG4gIGdldCBlbCgpIHtcbiAgICByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBcImNvbFwiOiBbXCJjb2xDaGFuZ2VkXCJdXG4gICAgfTtcbiAgfVxufTtcbmNvbnN0IFBJQ0tFUl9PUFRfU0VMRUNURUQgPSAncGlja2VyLW9wdC1zZWxlY3RlZCc7XG5jb25zdCBERUNFTEVSQVRJT05fRlJJQ1RJT04gPSAwLjk3O1xuY29uc3QgTUFYX1BJQ0tFUl9TUEVFRCA9IDkwO1xuY29uc3QgVFJBTlNJVElPTl9EVVJBVElPTiA9IDE1MDtcblBpY2tlckNvbHVtbkNtcC5zdHlsZSA9IHtcbiAgaW9zOiBwaWNrZXJDb2x1bW5Jb3NDc3MsXG4gIG1kOiBwaWNrZXJDb2x1bW5NZENzc1xufTtcbmV4cG9ydCB7IERhdGV0aW1lIGFzIGlvbl9kYXRldGltZSwgUGlja2VyIGFzIGlvbl9waWNrZXJfbGVnYWN5LCBQaWNrZXJDb2x1bW5DbXAgYXMgaW9uX3BpY2tlcl9sZWdhY3lfY29sdW1uIH07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBLElBQU0saUJBQWlCLENBQUMsU0FBUyxVQUFVLGFBQWE7QUFDdEQsTUFBSSxZQUFZLFNBQVMsT0FBTyxTQUFTO0FBQ3ZDLFdBQU87QUFBQSxFQUNUO0FBQ0EsTUFBSSxZQUFZLFNBQVMsT0FBTyxTQUFTO0FBQ3ZDLFdBQU87QUFBQSxFQUNUO0FBQ0EsU0FBTztBQUNUO0FBTUEsSUFBTSxnQkFBZ0IsQ0FBQyxVQUFVLFVBQVUsVUFBVSxjQUFjO0FBS2pFLE1BQUksU0FBUyxRQUFRLE1BQU07QUFDekIsV0FBTztBQUFBLEVBQ1Q7QUFNQSxNQUFJLGNBQWMsVUFBYSxDQUFDLFVBQVUsU0FBUyxTQUFTLEdB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QUFBQSxRQUNSLGNBQWM7QUFBQSxRQUNkLG9CQUFvQixLQUFLLElBQUksVUFBVTtBQUFBLFFBQ3ZDLHFCQUFxQixLQUFLLElBQUksVUFBVTtBQUFBLE1BQzFDLEdBQUcsWUFBWSxJQUFJLFFBQVEsQ0FBQztBQUFBLE1BQzVCLE9BQU87QUFBQSxRQUNMLGFBQWEsS0FBSyxJQUFJO0FBQUEsTUFDeEI7QUFBQSxJQUNGLEdBQUcsSUFBSSxVQUFVLEVBQUUsT0FBTztBQUFBLE1BQ3hCLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxRQUNMLE9BQU8sSUFBSTtBQUFBLE1BQ2I7QUFBQSxJQUNGLEdBQUcsSUFBSSxNQUFNLEdBQUcsRUFBRSxPQUFPO0FBQUEsTUFDdkIsS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLE1BQ1AsT0FBTztBQUFBLFFBQ0wsVUFBVSxJQUFJO0FBQUEsTUFDaEI7QUFBQSxNQUNBLEtBQUssUUFBTSxLQUFLLFNBQVM7QUFBQSxJQUMzQixHQUFHLElBQUksUUFBUSxJQUFJLENBQUMsR0FBRyxVQUFVLEVBQUUsVUFBVTtBQUFBLE1BQzNDLGNBQWMsRUFBRTtBQUFBLE1BQ2hCLE9BQU87QUFBQSxRQUNMLGNBQWM7QUFBQSxRQUNkLHVCQUF1QixDQUFDLENBQUMsRUFBRTtBQUFBLE1BQzdCO0FBQUEsTUFDQSxhQUFhO0FBQUEsSUFDZixHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLFVBQVUsRUFBRSxPQUFPO0FBQUEsTUFDbkMsS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLE1BQ1AsT0FBTztBQUFBLFFBQ0wsT0FBTyxJQUFJO0FBQUEsTUFDYjtBQUFBLElBQ0YsR0FBRyxJQUFJLE1BQU0sQ0FBQztBQUFBLEVBQ2hCO0FBQUEsRUFDQSxJQUFJLEtBQUs7QUFDUCxXQUFPLFdBQVcsSUFBSTtBQUFBLEVBQ3hCO0FBQUEsRUFDQSxXQUFXLFdBQVc7QUFDcEIsV0FBTztBQUFBLE1BQ0wsT0FBTyxDQUFDLFlBQVk7QUFBQSxJQUN0QjtBQUFBLEVBQ0Y7QUFDRjtBQUNBLElBQU0sc0JBQXNCO0FBQzVCLElBQU0sd0JBQXdCO0FBQzlCLElBQU0sbUJBQW1CO0FBQ3pCLElBQU0sc0JBQXNCO0FBQzVCLGdCQUFnQixRQUFRO0FBQUEsRUFDdEIsS0FBSztBQUFBLEVBQ0wsSUFBSTtBQUNOOyIsIm5hbWVzIjpbImRpc2FibGVkIiwiaXNEYXlEaXNhYmxlZCIsImVsIl0sInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswXX0=
