import {
  printIonWarning
} from "./chunk-BFPTXCSH.js";

// node_modules/@ionic/core/dist/esm/data-CKHMWxfe.js
var isSameDay = (baseParts, compareParts) => {
  return baseParts.month === compareParts.month && baseParts.day === compareParts.day && baseParts.year === compareParts.year;
};
var isBefore = (baseParts, compareParts) => {
  return !!(baseParts.year < compareParts.year || baseParts.year === compareParts.year && baseParts.month < compareParts.month || baseParts.year === compareParts.year && baseParts.month === compareParts.month && baseParts.day !== null && baseParts.day < compareParts.day);
};
var isAfter = (baseParts, compareParts) => {
  return !!(baseParts.year > compareParts.year || baseParts.year === compareParts.year && baseParts.month > compareParts.month || baseParts.year === compareParts.year && baseParts.month === compareParts.month && baseParts.day !== null && baseParts.day > compareParts.day);
};
var warnIfValueOutOfBounds = (value, min, max) => {
  const valueArray = Array.isArray(value) ? value : [value];
  for (const val of valueArray) {
    if (min !== void 0 && isBefore(val, min) || max !== void 0 && isAfter(val, max)) {
      printIonWarning(`[ion-datetime] - The value provided to ion-datetime is out of bounds.

Min: ${JSON.stringify(min)}
Max: ${JSON.stringify(max)}
Value: ${JSON.stringify(value)}`);
      break;
    }
  }
};
var isLeapYear = (year) => {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
};
var getHourCycle = (locale, hourCycle) => {
  if (hourCycle !== void 0) {
    return hourCycle;
  }
  const formatted = new Intl.DateTimeFormat(locale, {
    hour: "numeric"
  });
  const options = formatted.resolvedOptions();
  if (options.hourCycle !== void 0) {
    return options.hourCycle;
  }
  const date = /* @__PURE__ */ new Date("5/18/2021 00:00");
  const parts = formatted.formatToParts(date);
  const hour = parts.find((p) => p.type === "hour");
  if (!hour) {
    throw new Error("Hour value not found from DateTimeFormat");
  }
  switch (hour.value) {
    case "0":
      return "h11";
    case "12":
      return "h12";
    case "00":
      return "h23";
    case "24":
      return "h24";
    default:
      throw new Error(`Invalid hour cycle "${hourCycle}"`);
  }
};
var is24Hour = (hourCycle) => {
  return hourCycle === "h23" || hourCycle === "h24";
};
var getNumDaysInMonth = (month, year) => {
  return month === 4 || month === 6 || month === 9 || month === 11 ? 30 : month === 2 ? isLeapYear(year) ? 29 : 28 : 31;
};
var isMonthFirstLocale = (locale, formatOptions = {
  month: "numeric",
  year: "numeric"
}) => {
  const parts = new Intl.DateTimeFormat(locale, formatOptions).formatToParts(/* @__PURE__ */ new Date());
  return parts[0].type === "month";
};
var isLocaleDayPeriodRTL = (locale) => {
  const parts = new Intl.DateTimeFormat(locale, {
    hour: "numeric"
  }).formatToParts(/* @__PURE__ */ new Date());
  return parts[0].type === "dayPeriod";
};
var ISO_8601_REGEXP = (
  // eslint-disable-next-line no-useless-escape
  /^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/
);
var TIME_REGEXP = /^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/;
var convertToArrayOfNumbers = (input) => {
  if (input === void 0) {
    return;
  }
  let processedInput = input;
  if (typeof input === "string") {
    processedInput = input.replace(/\[|\]|\s/g, "").split(",");
  }
  let values;
  if (Array.isArray(processedInput)) {
    values = processedInput.map((num) => parseInt(num, 10)).filter(isFinite);
  } else {
    values = [processedInput];
  }
  return values;
};
var getPartsFromCalendarDay = (el) => {
  return {
    month: parseInt(el.getAttribute("data-month"), 10),
    day: parseInt(el.getAttribute("data-day"), 10),
    year: parseInt(el.getAttribute("data-year"), 10),
    dayOfWeek: parseInt(el.getAttribute("data-day-of-week"), 10)
  };
};
function parseDate(val) {
  if (Array.isArray(val)) {
    const parsedArray = [];
    for (const valStr of val) {
      const parsedVal = parseDate(valStr);
      if (!parsedVal) {
        return void 0;
      }
      parsedArray.push(parsedVal);
    }
    return parsedArray;
  }
  let parse = null;
  if (val != null && val !== "") {
    parse = TIME_REGEXP.exec(val);
    if (parse) {
      parse.unshift(void 0, void 0);
      parse[2] = parse[3] = void 0;
    } else {
      parse = ISO_8601_REGEXP.exec(val);
    }
  }
  if (parse === null) {
    printIonWarning(`[ion-datetime] - Unable to parse date string: ${val}. Please provide a valid ISO 8601 datetime string.`);
    return void 0;
  }
  for (let i = 1; i < 8; i++) {
    parse[i] = parse[i] !== void 0 ? parseInt(parse[i], 10) : void 0;
  }
  return {
    year: parse[1],
    month: parse[2],
    day: parse[3],
    hour: parse[4],
    minute: parse[5],
    ampm: parse[4] < 12 ? "am" : "pm"
  };
}
var clampDate = (dateParts, minParts, maxParts) => {
  if (minParts && isBefore(dateParts, minParts)) {
    return minParts;
  } else if (maxParts && isAfter(dateParts, maxParts)) {
    return maxParts;
  }
  return dateParts;
};
var parseAmPm = (hour) => {
  return hour >= 12 ? "pm" : "am";
};
var parseMaxParts = (max, todayParts) => {
  const result = parseDate(max);
  if (result === void 0) {
    return;
  }
  const {
    month,
    day,
    year,
    hour,
    minute
  } = result;
  const yearValue = year !== null && year !== void 0 ? year : todayParts.year;
  const monthValue = month !== null && month !== void 0 ? month : 12;
  return {
    month: monthValue,
    day: day !== null && day !== void 0 ? day : getNumDaysInMonth(monthValue, yearValue),
    /**
     * Passing in "HH:mm" is a valid ISO-8601
     * string, so we just default to the current year
     * in this case.
     */
    year: yearValue,
    hour: hour !== null && hour !== void 0 ? hour : 23,
    minute: minute !== null && minute !== void 0 ? minute : 59
  };
};
var parseMinParts = (min, todayParts) => {
  const result = parseDate(min);
  if (result === void 0) {
    return;
  }
  const {
    month,
    day,
    year,
    hour,
    minute
  } = result;
  return {
    month: month !== null && month !== void 0 ? month : 1,
    day: day !== null && day !== void 0 ? day : 1,
    /**
     * Passing in "HH:mm" is a valid ISO-8601
     * string, so we just default to the current year
     * in this case.
     */
    year: year !== null && year !== void 0 ? year : todayParts.year,
    hour: hour !== null && hour !== void 0 ? hour : 0,
    minute: minute !== null && minute !== void 0 ? minute : 0
  };
};
var twoDigit = (val) => {
  return ("0" + (val !== void 0 ? Math.abs(val) : "0")).slice(-2);
};
var fourDigit = (val) => {
  return ("000" + (val !== void 0 ? Math.abs(val) : "0")).slice(-4);
};
function convertDataToISO(data) {
  if (Array.isArray(data)) {
    return data.map((parts) => convertDataToISO(parts));
  }
  let rtn = "";
  if (data.year !== void 0) {
    rtn = fourDigit(data.year);
    if (data.month !== void 0) {
      rtn += "-" + twoDigit(data.month);
      if (data.day !== void 0) {
        rtn += "-" + twoDigit(data.day);
        if (data.hour !== void 0) {
          rtn += `T${twoDigit(data.hour)}:${twoDigit(data.minute)}:00`;
        }
      }
    }
  } else if (data.hour !== void 0) {
    rtn = twoDigit(data.hour) + ":" + twoDigit(data.minute);
  }
  return rtn;
}
var convert12HourTo24Hour = (hour, ampm) => {
  if (ampm === void 0) {
    return hour;
  }
  if (ampm === "am") {
    if (hour === 12) {
      return 0;
    }
    return hour;
  }
  if (hour === 12) {
    return 12;
  }
  return hour + 12;
};
var getStartOfWeek = (refParts) => {
  const {
    dayOfWeek
  } = refParts;
  if (dayOfWeek === null || dayOfWeek === void 0) {
    throw new Error("No day of week provided");
  }
  return subtractDays(refParts, dayOfWeek);
};
var getEndOfWeek = (refParts) => {
  const {
    dayOfWeek
  } = refParts;
  if (dayOfWeek === null || dayOfWeek === void 0) {
    throw new Error("No day of week provided");
  }
  return addDays(refParts, 6 - dayOfWeek);
};
var getNextDay = (refParts) => {
  return addDays(refParts, 1);
};
var getPreviousDay = (refParts) => {
  return subtractDays(refParts, 1);
};
var getPreviousWeek = (refParts) => {
  return subtractDays(refParts, 7);
};
var getNextWeek = (refParts) => {
  return addDays(refParts, 7);
};
var subtractDays = (refParts, numDays) => {
  const {
    month,
    day,
    year
  } = refParts;
  if (day === null) {
    throw new Error("No day provided");
  }
  const workingParts = {
    month,
    day,
    year
  };
  workingParts.day = day - numDays;
  if (workingParts.day < 1) {
    workingParts.month -= 1;
  }
  if (workingParts.month < 1) {
    workingParts.month = 12;
    workingParts.year -= 1;
  }
  if (workingParts.day < 1) {
    const daysInMonth = getNumDaysInMonth(workingParts.month, workingParts.year);
    workingParts.day = daysInMonth + workingParts.day;
  }
  return workingParts;
};
var addDays = (refParts, numDays) => {
  const {
    month,
    day,
    year
  } = refParts;
  if (day === null) {
    throw new Error("No day provided");
  }
  const workingParts = {
    month,
    day,
    year
  };
  const daysInMonth = getNumDaysInMonth(month, year);
  workingParts.day = day + numDays;
  if (workingParts.day > daysInMonth) {
    workingParts.day -= daysInMonth;
    workingParts.month += 1;
  }
  if (workingParts.month > 12) {
    workingParts.month = 1;
    workingParts.year += 1;
  }
  return workingParts;
};
var getPreviousMonth = (refParts) => {
  const month = refParts.month === 1 ? 12 : refParts.month - 1;
  const year = refParts.month === 1 ? refParts.year - 1 : refParts.year;
  const numDaysInMonth = getNumDaysInMonth(month, year);
  const day = numDaysInMonth < refParts.day ? numDaysInMonth : refParts.day;
  return {
    month,
    year,
    day
  };
};
var getNextMonth = (refParts) => {
  const month = refParts.month === 12 ? 1 : refParts.month + 1;
  const year = refParts.month === 12 ? refParts.year + 1 : refParts.year;
  const numDaysInMonth = getNumDaysInMonth(month, year);
  const day = numDaysInMonth < refParts.day ? numDaysInMonth : refParts.day;
  return {
    month,
    year,
    day
  };
};
var changeYear = (refParts, yearDelta) => {
  const month = refParts.month;
  const year = refParts.year + yearDelta;
  const numDaysInMonth = getNumDaysInMonth(month, year);
  const day = numDaysInMonth < refParts.day ? numDaysInMonth : refParts.day;
  return {
    month,
    year,
    day
  };
};
var getPreviousYear = (refParts) => {
  return changeYear(refParts, -1);
};
var getNextYear = (refParts) => {
  return changeYear(refParts, 1);
};
var getInternalHourValue = (hour, use24Hour, ampm) => {
  if (use24Hour) {
    return hour;
  }
  return convert12HourTo24Hour(hour, ampm);
};
var calculateHourFromAMPM = (currentParts, newAMPM) => {
  const {
    ampm: currentAMPM,
    hour
  } = currentParts;
  let newHour = hour;
  if (currentAMPM === "am" && newAMPM === "pm") {
    newHour = convert12HourTo24Hour(newHour, "pm");
  } else if (currentAMPM === "pm" && newAMPM === "am") {
    newHour = Math.abs(newHour - 12);
  }
  return newHour;
};
var validateParts = (parts, minParts, maxParts) => {
  const {
    month,
    day,
    year
  } = parts;
  const partsCopy = clampDate(Object.assign({}, parts), minParts, maxParts);
  const numDays = getNumDaysInMonth(month, year);
  if (day !== null && numDays < day) {
    partsCopy.day = numDays;
  }
  if (minParts !== void 0 && isSameDay(partsCopy, minParts)) {
    if (partsCopy.hour !== void 0 && minParts.hour !== void 0) {
      if (partsCopy.hour < minParts.hour) {
        partsCopy.hour = minParts.hour;
        partsCopy.minute = minParts.minute;
      } else if (partsCopy.hour === minParts.hour && partsCopy.minute !== void 0 && minParts.minute !== void 0 && partsCopy.minute < minParts.minute) {
        partsCopy.minute = minParts.minute;
      }
    }
  }
  if (maxParts !== void 0 && isSameDay(parts, maxParts)) {
    if (partsCopy.hour !== void 0 && maxParts.hour !== void 0) {
      if (partsCopy.hour > maxParts.hour) {
        partsCopy.hour = maxParts.hour;
        partsCopy.minute = maxParts.minute;
      } else if (partsCopy.hour === maxParts.hour && partsCopy.minute !== void 0 && maxParts.minute !== void 0 && partsCopy.minute > maxParts.minute) {
        partsCopy.minute = maxParts.minute;
      }
    }
  }
  return partsCopy;
};
var getClosestValidDate = ({
  refParts,
  monthValues,
  dayValues,
  yearValues,
  hourValues,
  minuteValues,
  minParts,
  maxParts
}) => {
  const {
    hour,
    minute,
    day,
    month,
    year
  } = refParts;
  const copyParts = Object.assign(Object.assign({}, refParts), {
    dayOfWeek: void 0
  });
  if (yearValues !== void 0) {
    const filteredYears = yearValues.filter((year2) => {
      if (minParts !== void 0 && year2 < minParts.year) {
        return false;
      }
      if (maxParts !== void 0 && year2 > maxParts.year) {
        return false;
      }
      return true;
    });
    copyParts.year = findClosestValue(year, filteredYears);
  }
  if (monthValues !== void 0) {
    const filteredMonths = monthValues.filter((month2) => {
      if (minParts !== void 0 && copyParts.year === minParts.year && month2 < minParts.month) {
        return false;
      }
      if (maxParts !== void 0 && copyParts.year === maxParts.year && month2 > maxParts.month) {
        return false;
      }
      return true;
    });
    copyParts.month = findClosestValue(month, filteredMonths);
  }
  if (day !== null && dayValues !== void 0) {
    const filteredDays = dayValues.filter((day2) => {
      if (minParts !== void 0 && isBefore(Object.assign(Object.assign({}, copyParts), {
        day: day2
      }), minParts)) {
        return false;
      }
      if (maxParts !== void 0 && isAfter(Object.assign(Object.assign({}, copyParts), {
        day: day2
      }), maxParts)) {
        return false;
      }
      return true;
    });
    copyParts.day = findClosestValue(day, filteredDays);
  }
  if (hour !== void 0 && hourValues !== void 0) {
    const filteredHours = hourValues.filter((hour2) => {
      if ((minParts === null || minParts === void 0 ? void 0 : minParts.hour) !== void 0 && isSameDay(copyParts, minParts) && hour2 < minParts.hour) {
        return false;
      }
      if ((maxParts === null || maxParts === void 0 ? void 0 : maxParts.hour) !== void 0 && isSameDay(copyParts, maxParts) && hour2 > maxParts.hour) {
        return false;
      }
      return true;
    });
    copyParts.hour = findClosestValue(hour, filteredHours);
    copyParts.ampm = parseAmPm(copyParts.hour);
  }
  if (minute !== void 0 && minuteValues !== void 0) {
    const filteredMinutes = minuteValues.filter((minute2) => {
      if ((minParts === null || minParts === void 0 ? void 0 : minParts.minute) !== void 0 && isSameDay(copyParts, minParts) && copyParts.hour === minParts.hour && minute2 < minParts.minute) {
        return false;
      }
      if ((maxParts === null || maxParts === void 0 ? void 0 : maxParts.minute) !== void 0 && isSameDay(copyParts, maxParts) && copyParts.hour === maxParts.hour && minute2 > maxParts.minute) {
        return false;
      }
      return true;
    });
    copyParts.minute = findClosestValue(minute, filteredMinutes);
  }
  return copyParts;
};
var findClosestValue = (reference, values) => {
  let closestValue = values[0];
  let rank = Math.abs(closestValue - reference);
  for (let i = 1; i < values.length; i++) {
    const value = values[i];
    const valueRank = Math.abs(value - reference);
    if (valueRank < rank) {
      closestValue = value;
      rank = valueRank;
    }
  }
  return closestValue;
};
var getFormattedDayPeriod = (dayPeriod) => {
  if (dayPeriod === void 0) {
    return "";
  }
  return dayPeriod.toUpperCase();
};
var stripTimeZone = (formatOptions) => {
  return Object.assign(Object.assign({}, formatOptions), {
    /**
     * Setting the time zone to UTC ensures that the value shown is always the
     * same as what was selected and safeguards against older Safari bugs with
     * Intl.DateTimeFormat.
     */
    timeZone: "UTC",
    /**
     * We do not want to display the time zone name
     */
    timeZoneName: void 0
  });
};
var getLocalizedTime = (locale, refParts, hourCycle, formatOptions = {
  hour: "numeric",
  minute: "numeric"
}) => {
  const timeParts = {
    hour: refParts.hour,
    minute: refParts.minute
  };
  if (timeParts.hour === void 0 || timeParts.minute === void 0) {
    return "Invalid Time";
  }
  return new Intl.DateTimeFormat(locale, Object.assign(Object.assign({}, stripTimeZone(formatOptions)), {
    /**
     * We use hourCycle here instead of hour12 due to:
     * https://bugs.chromium.org/p/chromium/issues/detail?id=1347316&q=hour12&can=2
     */
    hourCycle
  })).format(/* @__PURE__ */ new Date(convertDataToISO(Object.assign({
    /**
     * JS uses a simplified ISO 8601 format which allows for
     * date-only formats and date-time formats, but not
     * time-only formats: https://tc39.es/ecma262/#sec-date-time-string-format
     * As a result, developers who only pass a time will get
     * an "Invalid Date" error. To account for this, we make sure that
     * year/day/month values are set when passing to new Date().
     * The Intl.DateTimeFormat call above only uses the hour/minute
     * values, so passing these date values should have no impact
     * on the time output.
     */
    year: 2023,
    day: 1,
    month: 1
  }, timeParts)) + "Z"));
};
var addTimePadding = (value) => {
  const valueToString = value.toString();
  if (valueToString.length > 1) {
    return valueToString;
  }
  return `0${valueToString}`;
};
var getFormattedHour = (hour, hourCycle) => {
  if (hour === 0) {
    switch (hourCycle) {
      case "h11":
        return "0";
      case "h12":
        return "12";
      case "h23":
        return "00";
      case "h24":
        return "24";
      default:
        throw new Error(`Invalid hour cycle "${hourCycle}"`);
    }
  }
  const use24Hour = is24Hour(hourCycle);
  if (use24Hour) {
    return addTimePadding(hour);
  }
  return hour.toString();
};
var generateDayAriaLabel = (locale, today, refParts) => {
  if (refParts.day === null) {
    return null;
  }
  const date = getNormalizedDate(refParts);
  const labelString = new Intl.DateTimeFormat(locale, {
    weekday: "long",
    month: "long",
    day: "numeric",
    timeZone: "UTC"
  }).format(date);
  return today ? `Today, ${labelString}` : labelString;
};
var getMonthAndYear = (locale, refParts) => {
  const date = getNormalizedDate(refParts);
  return new Intl.DateTimeFormat(locale, {
    month: "long",
    year: "numeric",
    timeZone: "UTC"
  }).format(date);
};
var getDay = (locale, refParts) => {
  return getLocalizedDateTimeParts(locale, refParts, {
    day: "numeric"
  }).find((obj) => obj.type === "day").value;
};
var getYear = (locale, refParts) => {
  return getLocalizedDateTime(locale, refParts, {
    year: "numeric"
  });
};
var getNormalizedDate = (refParts) => {
  var _a, _b, _c;
  const timeString = refParts.hour !== void 0 && refParts.minute !== void 0 ? ` ${refParts.hour}:${refParts.minute}` : "";
  return /* @__PURE__ */ new Date(`${(_a = refParts.month) !== null && _a !== void 0 ? _a : 1}/${(_b = refParts.day) !== null && _b !== void 0 ? _b : 1}/${(_c = refParts.year) !== null && _c !== void 0 ? _c : 2023}${timeString} GMT+0000`);
};
var getLocalizedDateTime = (locale, refParts, options) => {
  const date = getNormalizedDate(refParts);
  return getDateTimeFormat(locale, stripTimeZone(options)).format(date);
};
var getLocalizedDateTimeParts = (locale, refParts, options) => {
  const date = getNormalizedDate(refParts);
  return getDateTimeFormat(locale, options).formatToParts(date);
};
var getDateTimeFormat = (locale, options) => {
  return new Intl.DateTimeFormat(locale, Object.assign(Object.assign({}, options), {
    timeZone: "UTC"
  }));
};
var getTodayLabel = (locale) => {
  if ("RelativeTimeFormat" in Intl) {
    const label = new Intl.RelativeTimeFormat(locale, {
      numeric: "auto"
    }).format(0, "day");
    return label.charAt(0).toUpperCase() + label.slice(1);
  } else {
    return "Today";
  }
};
var removeDateTzOffset = (date) => {
  const tzOffset = date.getTimezoneOffset();
  date.setMinutes(date.getMinutes() - tzOffset);
  return date;
};
var DATE_AM = removeDateTzOffset(/* @__PURE__ */ new Date("2022T01:00"));
var DATE_PM = removeDateTzOffset(/* @__PURE__ */ new Date("2022T13:00"));
var getLocalizedDayPeriod = (locale, dayPeriod) => {
  const date = dayPeriod === "am" ? DATE_AM : DATE_PM;
  const localizedDayPeriod = new Intl.DateTimeFormat(locale, {
    hour: "numeric",
    timeZone: "UTC"
  }).formatToParts(date).find((part) => part.type === "dayPeriod");
  if (localizedDayPeriod) {
    return localizedDayPeriod.value;
  }
  return getFormattedDayPeriod(dayPeriod);
};
var formatValue = (value) => {
  return Array.isArray(value) ? value.join(",") : value;
};
var getToday = () => {
  return removeDateTzOffset(/* @__PURE__ */ new Date()).toISOString();
};
var minutes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59];
var hour11 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var hour12 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var hour23 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
var hour24 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 0];
var getDaysOfWeek = (locale, mode, firstDayOfWeek = 0) => {
  const weekdayFormat = mode === "ios" ? "short" : "narrow";
  const intl = new Intl.DateTimeFormat(locale, {
    weekday: weekdayFormat
  });
  const startDate = /* @__PURE__ */ new Date("11/01/2020");
  const daysOfWeek = [];
  for (let i = firstDayOfWeek; i < firstDayOfWeek + 7; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(currentDate.getDate() + i);
    daysOfWeek.push(intl.format(currentDate));
  }
  return daysOfWeek;
};
var getDaysOfMonth = (month, year, firstDayOfWeek, showAdjacentDays = false) => {
  const numDays = getNumDaysInMonth(month, year);
  let previousNumDays;
  if (month === 1) {
    previousNumDays = getNumDaysInMonth(12, year - 1);
  } else {
    previousNumDays = getNumDaysInMonth(month - 1, year);
  }
  const firstOfMonth = (/* @__PURE__ */ new Date(`${month}/1/${year}`)).getDay();
  const offset = firstOfMonth >= firstDayOfWeek ? firstOfMonth - (firstDayOfWeek + 1) : 6 - (firstDayOfWeek - firstOfMonth);
  let days = [];
  for (let i = 1; i <= numDays; i++) {
    days.push({
      day: i,
      dayOfWeek: (offset + i) % 7,
      isAdjacentDay: false
    });
  }
  if (showAdjacentDays) {
    for (let i = 0; i <= offset; i++) {
      days = [{
        day: previousNumDays - i,
        dayOfWeek: (previousNumDays - i) % 7,
        isAdjacentDay: true
      }, ...days];
    }
    const positiveOffset = 41 - (numDays + offset);
    for (let i = 0; i < positiveOffset; i++) {
      days.push({
        day: i + 1,
        dayOfWeek: (numDays + offset + i) % 7,
        isAdjacentDay: true
      });
    }
  } else {
    for (let i = 0; i <= offset; i++) {
      days = [{
        day: null,
        dayOfWeek: null,
        isAdjacentDay: false
      }, ...days];
    }
  }
  return days;
};
var getHourData = (hourCycle) => {
  switch (hourCycle) {
    case "h11":
      return hour11;
    case "h12":
      return hour12;
    case "h23":
      return hour23;
    case "h24":
      return hour24;
    default:
      throw new Error(`Invalid hour cycle "${hourCycle}"`);
  }
};
var generateTime = (locale, refParts, hourCycle = "h12", minParts, maxParts, hourValues, minuteValues) => {
  const computedHourCycle = getHourCycle(locale, hourCycle);
  const use24Hour = is24Hour(computedHourCycle);
  let processedHours = getHourData(computedHourCycle);
  let processedMinutes = minutes;
  let isAMAllowed = true;
  let isPMAllowed = true;
  if (hourValues) {
    processedHours = processedHours.filter((hour) => hourValues.includes(hour));
  }
  if (minuteValues) {
    processedMinutes = processedMinutes.filter((minute) => minuteValues.includes(minute));
  }
  if (minParts) {
    if (isSameDay(refParts, minParts)) {
      if (minParts.hour !== void 0) {
        processedHours = processedHours.filter((hour) => {
          const convertedHour = refParts.ampm === "pm" ? (hour + 12) % 24 : hour;
          return (use24Hour ? hour : convertedHour) >= minParts.hour;
        });
        isAMAllowed = minParts.hour < 13;
      }
      if (minParts.minute !== void 0) {
        let isPastMinHour = false;
        if (minParts.hour !== void 0 && refParts.hour !== void 0) {
          if (refParts.hour > minParts.hour) {
            isPastMinHour = true;
          }
        }
        processedMinutes = processedMinutes.filter((minute) => {
          if (isPastMinHour) {
            return true;
          }
          return minute >= minParts.minute;
        });
      }
    } else if (isBefore(refParts, minParts)) {
      processedHours = [];
      processedMinutes = [];
      isAMAllowed = isPMAllowed = false;
    }
  }
  if (maxParts) {
    if (isSameDay(refParts, maxParts)) {
      if (maxParts.hour !== void 0) {
        processedHours = processedHours.filter((hour) => {
          const convertedHour = refParts.ampm === "pm" ? (hour + 12) % 24 : hour;
          return (use24Hour ? hour : convertedHour) <= maxParts.hour;
        });
        isPMAllowed = maxParts.hour >= 12;
      }
      if (maxParts.minute !== void 0 && refParts.hour === maxParts.hour) {
        processedMinutes = processedMinutes.filter((minute) => minute <= maxParts.minute);
      }
    } else if (isAfter(refParts, maxParts)) {
      processedHours = [];
      processedMinutes = [];
      isAMAllowed = isPMAllowed = false;
    }
  }
  return {
    hours: processedHours,
    minutes: processedMinutes,
    am: isAMAllowed,
    pm: isPMAllowed
  };
};
var generateMonths = (refParts, forcedDate) => {
  const current = {
    month: refParts.month,
    year: refParts.year,
    day: refParts.day
  };
  if (forcedDate !== void 0 && (refParts.month !== forcedDate.month || refParts.year !== forcedDate.year)) {
    const forced = {
      month: forcedDate.month,
      year: forcedDate.year,
      day: forcedDate.day
    };
    const forcedMonthIsBefore = isBefore(forced, current);
    return forcedMonthIsBefore ? [forced, current, getNextMonth(refParts)] : [getPreviousMonth(refParts), current, forced];
  }
  return [getPreviousMonth(refParts), current, getNextMonth(refParts)];
};
var getMonthColumnData = (locale, refParts, minParts, maxParts, monthValues, formatOptions = {
  month: "long"
}) => {
  const {
    year
  } = refParts;
  const months = [];
  if (monthValues !== void 0) {
    let processedMonths = monthValues;
    if ((maxParts === null || maxParts === void 0 ? void 0 : maxParts.month) !== void 0) {
      processedMonths = processedMonths.filter((month) => month <= maxParts.month);
    }
    if ((minParts === null || minParts === void 0 ? void 0 : minParts.month) !== void 0) {
      processedMonths = processedMonths.filter((month) => month >= minParts.month);
    }
    processedMonths.forEach((processedMonth) => {
      const date = /* @__PURE__ */ new Date(`${processedMonth}/1/${year} GMT+0000`);
      const monthString = new Intl.DateTimeFormat(locale, Object.assign(Object.assign({}, formatOptions), {
        timeZone: "UTC"
      })).format(date);
      months.push({
        text: monthString,
        value: processedMonth
      });
    });
  } else {
    const maxMonth = maxParts && maxParts.year === year ? maxParts.month : 12;
    const minMonth = minParts && minParts.year === year ? minParts.month : 1;
    for (let i = minMonth; i <= maxMonth; i++) {
      const date = /* @__PURE__ */ new Date(`${i}/1/${year} GMT+0000`);
      const monthString = new Intl.DateTimeFormat(locale, Object.assign(Object.assign({}, formatOptions), {
        timeZone: "UTC"
      })).format(date);
      months.push({
        text: monthString,
        value: i
      });
    }
  }
  return months;
};
var getDayColumnData = (locale, refParts, minParts, maxParts, dayValues, formatOptions = {
  day: "numeric"
}) => {
  const {
    month,
    year
  } = refParts;
  const days = [];
  const numDaysInMonth = getNumDaysInMonth(month, year);
  const maxDay = (maxParts === null || maxParts === void 0 ? void 0 : maxParts.day) !== null && (maxParts === null || maxParts === void 0 ? void 0 : maxParts.day) !== void 0 && maxParts.year === year && maxParts.month === month ? maxParts.day : numDaysInMonth;
  const minDay = (minParts === null || minParts === void 0 ? void 0 : minParts.day) !== null && (minParts === null || minParts === void 0 ? void 0 : minParts.day) !== void 0 && minParts.year === year && minParts.month === month ? minParts.day : 1;
  if (dayValues !== void 0) {
    let processedDays = dayValues;
    processedDays = processedDays.filter((day) => day >= minDay && day <= maxDay);
    processedDays.forEach((processedDay) => {
      const date = /* @__PURE__ */ new Date(`${month}/${processedDay}/${year} GMT+0000`);
      const dayString = new Intl.DateTimeFormat(locale, Object.assign(Object.assign({}, formatOptions), {
        timeZone: "UTC"
      })).format(date);
      days.push({
        text: dayString,
        value: processedDay
      });
    });
  } else {
    for (let i = minDay; i <= maxDay; i++) {
      const date = /* @__PURE__ */ new Date(`${month}/${i}/${year} GMT+0000`);
      const dayString = new Intl.DateTimeFormat(locale, Object.assign(Object.assign({}, formatOptions), {
        timeZone: "UTC"
      })).format(date);
      days.push({
        text: dayString,
        value: i
      });
    }
  }
  return days;
};
var getYearColumnData = (locale, refParts, minParts, maxParts, yearValues) => {
  var _a, _b;
  let processedYears = [];
  if (yearValues !== void 0) {
    processedYears = yearValues;
    if ((maxParts === null || maxParts === void 0 ? void 0 : maxParts.year) !== void 0) {
      processedYears = processedYears.filter((year) => year <= maxParts.year);
    }
    if ((minParts === null || minParts === void 0 ? void 0 : minParts.year) !== void 0) {
      processedYears = processedYears.filter((year) => year >= minParts.year);
    }
  } else {
    const {
      year
    } = refParts;
    const maxYear = (_a = maxParts === null || maxParts === void 0 ? void 0 : maxParts.year) !== null && _a !== void 0 ? _a : year;
    const minYear = (_b = minParts === null || minParts === void 0 ? void 0 : minParts.year) !== null && _b !== void 0 ? _b : year - 100;
    for (let i = minYear; i <= maxYear; i++) {
      processedYears.push(i);
    }
  }
  return processedYears.map((year) => ({
    text: getYear(locale, {
      year,
      month: refParts.month,
      day: refParts.day
    }),
    value: year
  }));
};
var getAllMonthsInRange = (currentParts, maxParts) => {
  if (currentParts.month === maxParts.month && currentParts.year === maxParts.year) {
    return [currentParts];
  }
  return [currentParts, ...getAllMonthsInRange(getNextMonth(currentParts), maxParts)];
};
var getCombinedDateColumnData = (locale, todayParts, minParts, maxParts, dayValues, monthValues) => {
  let items = [];
  let parts = [];
  let months = getAllMonthsInRange(minParts, maxParts);
  if (monthValues) {
    months = months.filter(({
      month
    }) => monthValues.includes(month));
  }
  months.forEach((monthObject) => {
    const referenceMonth = {
      month: monthObject.month,
      day: null,
      year: monthObject.year
    };
    const monthDays = getDayColumnData(locale, referenceMonth, minParts, maxParts, dayValues, {
      month: "short",
      day: "numeric",
      weekday: "short"
    });
    const dateParts = [];
    const dateColumnItems = [];
    monthDays.forEach((dayObject) => {
      const isToday = isSameDay(Object.assign(Object.assign({}, referenceMonth), {
        day: dayObject.value
      }), todayParts);
      dateColumnItems.push({
        text: isToday ? getTodayLabel(locale) : dayObject.text,
        value: `${referenceMonth.year}-${referenceMonth.month}-${dayObject.value}`
      });
      dateParts.push({
        month: referenceMonth.month,
        year: referenceMonth.year,
        day: dayObject.value
      });
    });
    parts = [...parts, ...dateParts];
    items = [...items, ...dateColumnItems];
  });
  return {
    parts,
    items
  };
};
var getTimeColumnsData = (locale, refParts, hourCycle, minParts, maxParts, allowedHourValues, allowedMinuteValues) => {
  const computedHourCycle = getHourCycle(locale, hourCycle);
  const use24Hour = is24Hour(computedHourCycle);
  const {
    hours,
    minutes: minutes2,
    am,
    pm
  } = generateTime(locale, refParts, computedHourCycle, minParts, maxParts, allowedHourValues, allowedMinuteValues);
  const hoursItems = hours.map((hour) => {
    return {
      text: getFormattedHour(hour, computedHourCycle),
      value: getInternalHourValue(hour, use24Hour, refParts.ampm)
    };
  });
  const minutesItems = minutes2.map((minute) => {
    return {
      text: addTimePadding(minute),
      value: minute
    };
  });
  const dayPeriodItems = [];
  if (am && !use24Hour) {
    dayPeriodItems.push({
      text: getLocalizedDayPeriod(locale, "am"),
      value: "am"
    });
  }
  if (pm && !use24Hour) {
    dayPeriodItems.push({
      text: getLocalizedDayPeriod(locale, "pm"),
      value: "pm"
    });
  }
  return {
    minutesData: minutesItems,
    hoursData: hoursItems,
    dayPeriodData: dayPeriodItems
  };
};

export {
  isSameDay,
  isBefore,
  isAfter,
  warnIfValueOutOfBounds,
  getHourCycle,
  getNumDaysInMonth,
  isMonthFirstLocale,
  isLocaleDayPeriodRTL,
  convertToArrayOfNumbers,
  getPartsFromCalendarDay,
  parseDate,
  clampDate,
  parseAmPm,
  parseMaxParts,
  parseMinParts,
  convertDataToISO,
  getStartOfWeek,
  getEndOfWeek,
  getNextDay,
  getPreviousDay,
  getPreviousWeek,
  getNextWeek,
  getPreviousMonth,
  getNextMonth,
  getPreviousYear,
  getNextYear,
  calculateHourFromAMPM,
  validateParts,
  getClosestValidDate,
  getLocalizedTime,
  generateDayAriaLabel,
  getMonthAndYear,
  getDay,
  getLocalizedDateTime,
  formatValue,
  getToday,
  getDaysOfWeek,
  getDaysOfMonth,
  generateMonths,
  getMonthColumnData,
  getDayColumnData,
  getYearColumnData,
  getCombinedDateColumnData,
  getTimeColumnsData
};
/*! Bundled license information:

@ionic/core/dist/esm/data-CKHMWxfe.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9kYXRhLUNLSE1XeGZlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyBmIGFzIHByaW50SW9uV2FybmluZyB9IGZyb20gJy4vaW5kZXgtNER4WTZfZ0cuanMnO1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgc2VsZWN0ZWQgZGF5IGlzIGVxdWFsIHRvIHRoZSByZWZlcmVuY2UgZGF5XG4gKi9cbmNvbnN0IGlzU2FtZURheSA9IChiYXNlUGFydHMsIGNvbXBhcmVQYXJ0cykgPT4ge1xuICByZXR1cm4gYmFzZVBhcnRzLm1vbnRoID09PSBjb21wYXJlUGFydHMubW9udGggJiYgYmFzZVBhcnRzLmRheSA9PT0gY29tcGFyZVBhcnRzLmRheSAmJiBiYXNlUGFydHMueWVhciA9PT0gY29tcGFyZVBhcnRzLnllYXI7XG59O1xuLyoqXG4gKiBSZXR1cm5zIHRydWUgaXMgdGhlIHNlbGVjdGVkIGRheSBpcyBiZWZvcmUgdGhlIHJlZmVyZW5jZSBkYXkuXG4gKi9cbmNvbnN0IGlzQmVmb3JlID0gKGJhc2VQYXJ0cywgY29tcGFyZVBhcnRzKSA9PiB7XG4gIHJldHVybiAhIShiYXNlUGFydHMueWVhciA8IGNvbXBhcmVQYXJ0cy55ZWFyIHx8IGJhc2VQYXJ0cy55ZWFyID09PSBjb21wYXJlUGFydHMueWVhciAmJiBiYXNlUGFydHMubW9udGggPCBjb21wYXJlUGFydHMubW9udGggfHwgYmFzZVBhcnRzLnllYXIgPT09IGNvbXBhcmVQYXJ0cy55ZWFyICYmIGJhc2VQYXJ0cy5tb250aCA9PT0gY29tcGFyZVBhcnRzLm1vbnRoICYmIGJhc2VQYXJ0cy5kYXkgIT09IG51bGwgJiYgYmFzZVBhcnRzLmRheSA8IGNvbXBhcmVQYXJ0cy5kYXkpO1xufTtcbi8qKlxuICogUmV0dXJucyB0cnVlIGlzIHRoZSBzZWxlY3RlZCBkYXkgaXMgYWZ0ZXIgdGhlIHJlZmVyZW5jZSBkYXkuXG4gKi9cbmNvbnN0IGlzQWZ0ZXIgPSAoYmFzZVBhcnRzLCBjb21wYXJlUGFydHMpID0+IHtcbiAgcmV0dXJuICEhKGJhc2VQYXJ0cy55ZWFyID4gY29tcGFyZVBhcnRzLnllYXIgfHwgYmFzZVBhcnRzLnllYXIgPT09IGNvbXBhcmVQYXJ0cy55ZWFyICYmIGJhc2VQYXJ0cy5tb250aCA+IGNvbXBhcmVQYXJ0cy5tb250aCB8fCBiYXNlUGFydHMueWVhciA9PT0gY29tcGFyZVBhcnRzLnllYXIgJiYgYmFzZVBhcnRzLm1vbnRoID09PSBjb21wYXJlUGFydHMubW9udGggJiYgYmFzZVBhcnRzLmRheSAhPT0gbnVsbCAmJiBiYXNlUGFydHMuZGF5ID4gY29tcGFyZVBhcnRzLmRheSk7XG59O1xuY29uc3Qgd2FybklmVmFsdWVPdXRPZkJvdW5kcyA9ICh2YWx1ZSwgbWluLCBtYXgpID0+IHtcbiAgY29uc3QgdmFsdWVBcnJheSA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdO1xuICBmb3IgKGNvbnN0IHZhbCBvZiB2YWx1ZUFycmF5KSB7XG4gICAgaWYgKG1pbiAhPT0gdW5kZWZpbmVkICYmIGlzQmVmb3JlKHZhbCwgbWluKSB8fCBtYXggIT09IHVuZGVmaW5lZCAmJiBpc0FmdGVyKHZhbCwgbWF4KSkge1xuICAgICAgcHJpbnRJb25XYXJuaW5nKCdbaW9uLWRhdGV0aW1lXSAtIFRoZSB2YWx1ZSBwcm92aWRlZCB0byBpb24tZGF0ZXRpbWUgaXMgb3V0IG9mIGJvdW5kcy5cXG5cXG4nICsgYE1pbjogJHtKU09OLnN0cmluZ2lmeShtaW4pfVxcbmAgKyBgTWF4OiAke0pTT04uc3RyaW5naWZ5KG1heCl9XFxuYCArIGBWYWx1ZTogJHtKU09OLnN0cmluZ2lmeSh2YWx1ZSl9YCk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiBnaXZlbiB5ZWFyIGlzIGFcbiAqIGxlYXAgeWVhci4gUmV0dXJucyBgdHJ1ZWAgaWYgeWVhclxuICogaXMgYSBsZWFwIHllYXIuIFJldHVybnMgYGZhbHNlYFxuICogb3RoZXJ3aXNlLlxuICovXG5jb25zdCBpc0xlYXBZZWFyID0geWVhciA9PiB7XG4gIHJldHVybiB5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwIHx8IHllYXIgJSA0MDAgPT09IDA7XG59O1xuLyoqXG4gKiBEZXRlcm1pbmVzIHRoZSBob3VyIGN5Y2xlIGZvciBhIHVzZXIuXG4gKiBJZiB0aGUgaG91ciBjeWNsZSBpcyBleHBsaWNpdGx5IGRlZmluZWQsIGp1c3QgdXNlIHRoYXQuXG4gKiBPdGhlcndpc2UsIHdlIHRyeSB0byBkZXJpdmUgaXQgZnJvbSBlaXRoZXIgdGhlIHNwZWNpZmllZFxuICogbG9jYWxlIGV4dGVuc2lvbiB0YWdzIG9yIGZyb20gSW50bC5EYXRlVGltZUZvcm1hdCBkaXJlY3RseS5cbiAqL1xuY29uc3QgZ2V0SG91ckN5Y2xlID0gKGxvY2FsZSwgaG91ckN5Y2xlKSA9PiB7XG4gIC8qKlxuICAgKiBJZiBkZXZlbG9wZXIgaGFzIGV4cGxpY2l0bHkgZW5hYmxlZCAyNC1ob3VyIHRpbWVcbiAgICogdGhlbiByZXR1cm4gZWFybHkgYW5kIGRvIG5vdCBsb29rIGF0IHRoZSBzeXN0ZW0gZGVmYXVsdC5cbiAgICovXG4gIGlmIChob3VyQ3ljbGUgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBob3VyQ3ljbGU7XG4gIH1cbiAgLyoqXG4gICAqIElmIGhvdXJDeWNsZSB3YXMgbm90IHNwZWNpZmllZCwgY2hlY2sgdGhlIGxvY2FsZVxuICAgKiB0aGF0IGlzIHNldCBvbiB0aGUgdXNlcidzIGRldmljZS4gV2UgZmlyc3QgY2hlY2sgdGhlXG4gICAqIEludGwuRGF0ZVRpbWVGb3JtYXQgaG91ckN5Y2xlIG9wdGlvbiBhcyBkZXZlbG9wZXJzIGNhbiBlbmNvZGUgdGhpc1xuICAgKiBvcHRpb24gaW50byB0aGUgbG9jYWxlIHN0cmluZy4gRXhhbXBsZTogYGVuLVVTLXUtaGMtaDIzYFxuICAgKi9cbiAgY29uc3QgZm9ybWF0dGVkID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCB7XG4gICAgaG91cjogJ251bWVyaWMnXG4gIH0pO1xuICBjb25zdCBvcHRpb25zID0gZm9ybWF0dGVkLnJlc29sdmVkT3B0aW9ucygpO1xuICBpZiAob3B0aW9ucy5ob3VyQ3ljbGUgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBvcHRpb25zLmhvdXJDeWNsZTtcbiAgfVxuICAvKipcbiAgICogSWYgaG91ckN5Y2xlIGlzIG5vdCBzcGVjaWZpZWQgKGVpdGhlciB0aHJvdWdoIGxhY2tcbiAgICogb2YgYnJvd3NlciBzdXBwb3J0IG9yIGxvY2FsZSBpbmZvcm1hdGlvbikgdGhlbiBmYWxsXG4gICAqIGJhY2sgdG8gdGhpcyBzbG93ZXIgaG91ckN5Y2xlIGNoZWNrLlxuICAgKi9cbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCc1LzE4LzIwMjEgMDA6MDAnKTtcbiAgY29uc3QgcGFydHMgPSBmb3JtYXR0ZWQuZm9ybWF0VG9QYXJ0cyhkYXRlKTtcbiAgY29uc3QgaG91ciA9IHBhcnRzLmZpbmQocCA9PiBwLnR5cGUgPT09ICdob3VyJyk7XG4gIGlmICghaG91cikge1xuICAgIHRocm93IG5ldyBFcnJvcignSG91ciB2YWx1ZSBub3QgZm91bmQgZnJvbSBEYXRlVGltZUZvcm1hdCcpO1xuICB9XG4gIC8qKlxuICAgKiBNaWRuaWdodCBmb3IgaDExIHN0YXJ0cyBhdCAwOjAwYW1cbiAgICogTWlkbmlnaHQgZm9yIGgxMiBzdGFydHMgYXQgMTI6MDBhbVxuICAgKiBNaWRuaWdodCBmb3IgaDIzIHN0YXJ0cyBhdCAwMDowMFxuICAgKiBNaWRuaWdodCBmb3IgaDI0IHN0YXJ0cyBhdCAyNDowMFxuICAgKi9cbiAgc3dpdGNoIChob3VyLnZhbHVlKSB7XG4gICAgY2FzZSAnMCc6XG4gICAgICByZXR1cm4gJ2gxMSc7XG4gICAgY2FzZSAnMTInOlxuICAgICAgcmV0dXJuICdoMTInO1xuICAgIGNhc2UgJzAwJzpcbiAgICAgIHJldHVybiAnaDIzJztcbiAgICBjYXNlICcyNCc6XG4gICAgICByZXR1cm4gJ2gyNCc7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBob3VyIGN5Y2xlIFwiJHtob3VyQ3ljbGV9XCJgKTtcbiAgfVxufTtcbi8qKlxuICogRGV0ZXJtaW5lIGlmIHRoZSBob3VyIGN5Y2xlIHVzZXMgYSAyNC1ob3VyIGZvcm1hdC5cbiAqIFJldHVybnMgdHJ1ZSBmb3IgaDIzIGFuZCBoMjQuIFJldHVybnMgZmFsc2Ugb3RoZXJ3aXNlLlxuICogSWYgeW91IGRvbid0IGtub3cgdGhlIGhvdXJDeWNsZSwgdXNlIGdldEhvdXJDeWNsZSBhYm92ZVxuICogYW5kIHBhc3MgdGhlIHJlc3VsdCBpbnRvIHRoaXMgZnVuY3Rpb24uXG4gKi9cbmNvbnN0IGlzMjRIb3VyID0gaG91ckN5Y2xlID0+IHtcbiAgcmV0dXJuIGhvdXJDeWNsZSA9PT0gJ2gyMycgfHwgaG91ckN5Y2xlID09PSAnaDI0Jztcbn07XG4vKipcbiAqIEdpdmVuIGEgZGF0ZSBvYmplY3QsIHJldHVybnMgdGhlIG51bWJlclxuICogb2YgZGF5cyBpbiB0aGF0IG1vbnRoLlxuICogTW9udGggdmFsdWUgYmVnaW4gYXQgMSwgbm90IDAuXG4gKiBpLmUuIEphbnVhcnkgPSBtb250aCAxLlxuICovXG5jb25zdCBnZXROdW1EYXlzSW5Nb250aCA9IChtb250aCwgeWVhcikgPT4ge1xuICByZXR1cm4gbW9udGggPT09IDQgfHwgbW9udGggPT09IDYgfHwgbW9udGggPT09IDkgfHwgbW9udGggPT09IDExID8gMzAgOiBtb250aCA9PT0gMiA/IGlzTGVhcFllYXIoeWVhcikgPyAyOSA6IDI4IDogMzE7XG59O1xuLyoqXG4gKiBDZXJ0YWluIGxvY2FsZXMgZGlzcGxheSBtb250aCB0aGVuIHllYXIgd2hpbGVcbiAqIG90aGVycyBkaXNwbGF5IHllYXIgdGhlbiBtb250aC5cbiAqIFdlIGNhbiB1c2UgSW50bC5EYXRlVGltZUZvcm1hdCB0byBkZXRlcm1pbmVcbiAqIHRoZSBvcmRlcmluZyBmb3IgZWFjaCBsb2NhbGUuXG4gKiBUaGUgZm9ybWF0T3B0aW9ucyBwYXJhbSBjYW4gYmUgdXNlZCB0byBjdXN0b21pemVcbiAqIHdoaWNoIHBpZWNlcyBvZiBhIGRhdGUgdG8gY29tcGFyZSBhZ2FpbnN0IHRoZSBtb250aFxuICogd2l0aC4gRm9yIGV4YW1wbGUsIHNvbWUgbG9jYWxlcyByZW5kZXIgZGQvbW0veXl5eVxuICogd2hpbGUgb3RoZXJzIHJlbmRlciBtbS9kZC95eXl5LiBUaGlzIGZ1bmN0aW9uIGNhbiBiZVxuICogdXNlZCBmb3IgdmFyaWF0aW9ucyBvZiB0aGUgc2FtZSBcIm1vbnRoIGZpcnN0XCIgY2hlY2suXG4gKi9cbmNvbnN0IGlzTW9udGhGaXJzdExvY2FsZSA9IChsb2NhbGUsIGZvcm1hdE9wdGlvbnMgPSB7XG4gIG1vbnRoOiAnbnVtZXJpYycsXG4gIHllYXI6ICdudW1lcmljJ1xufSkgPT4ge1xuICAvKipcbiAgICogQnkgc2V0dGluZyBtb250aCBhbmQgeWVhciB3ZSBndWFyYW50ZWUgdGhhdCBvbmx5XG4gICAqIG1vbnRoLCB5ZWFyLCBhbmQgbGl0ZXJhbCAoc2xhc2hlcyAnLycsIGZvciBleGFtcGxlKVxuICAgKiB2YWx1ZXMgYXJlIGluY2x1ZGVkIGluIHRoZSBmb3JtYXRUb1BhcnRzIHJlc3VsdHMuXG4gICAqXG4gICAqIFRoZSBvcmRlcmluZyBvZiB0aGUgcGFydHMgd2lsbCBiZSBkZXRlcm1pbmVkIGJ5XG4gICAqIHRoZSBsb2NhbGUuIFNvIGlmIHRoZSBtb250aCBpcyB0aGUgZmlyc3QgdmFsdWUsXG4gICAqIHRoZW4gd2Uga25vdyBtb250aCBzaG91bGQgYmUgc2hvd24gZmlyc3QuIElmIHRoZVxuICAgKiB5ZWFyIGlzIHRoZSBmaXJzdCB2YWx1ZSwgdGhlbiB3ZSBrbm93IHllYXIgc2hvdWxkIGJlIHNob3duIGZpcnN0LlxuICAgKlxuICAgKiBUaGlzIG9yZGVyaW5nIGNhbiBiZSBjb250cm9sbGVkIGJ5IGN1c3RvbWl6aW5nIHRoZSBsb2NhbGUgcHJvcGVydHkuXG4gICAqL1xuICBjb25zdCBwYXJ0cyA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZSwgZm9ybWF0T3B0aW9ucykuZm9ybWF0VG9QYXJ0cyhuZXcgRGF0ZSgpKTtcbiAgcmV0dXJuIHBhcnRzWzBdLnR5cGUgPT09ICdtb250aCc7XG59O1xuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIHRoZSBnaXZlbiBsb2NhbGUgZm9ybWF0cyB0aGUgZGF5IHBlcmlvZCAoYW0vcG0pIHRvIHRoZVxuICogbGVmdCBvciByaWdodCBvZiB0aGUgaG91ci5cbiAqIEBwYXJhbSBsb2NhbGUgVGhlIGxvY2FsZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIGB0cnVlYCBpZiB0aGUgbG9jYWxlIGZvcm1hdHMgdGhlIGRheSBwZXJpb2QgdG8gdGhlIGxlZnQgb2YgdGhlIGhvdXIuXG4gKi9cbmNvbnN0IGlzTG9jYWxlRGF5UGVyaW9kUlRMID0gbG9jYWxlID0+IHtcbiAgY29uc3QgcGFydHMgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2NhbGUsIHtcbiAgICBob3VyOiAnbnVtZXJpYydcbiAgfSkuZm9ybWF0VG9QYXJ0cyhuZXcgRGF0ZSgpKTtcbiAgcmV0dXJuIHBhcnRzWzBdLnR5cGUgPT09ICdkYXlQZXJpb2QnO1xufTtcbmNvbnN0IElTT184NjAxX1JFR0VYUCA9XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbi9eKFxcZHs0fXxbK1xcLV1cXGR7Nn0pKD86LShcXGR7Mn0pKD86LShcXGR7Mn0pKT8pPyg/OlQoXFxkezJ9KTooXFxkezJ9KSg/OjooXFxkezJ9KSg/OlxcLihcXGR7M30pKT8pPyg/OihaKXwoWytcXC1dKShcXGR7Mn0pKD86OihcXGR7Mn0pKT8pPyk/JC87XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbmNvbnN0IFRJTUVfUkVHRVhQID0gL14oKFxcZHsyfSk6KFxcZHsyfSkoPzo6KFxcZHsyfSkoPzpcXC4oXFxkezN9KSk/KT8oPzooWil8KFsrXFwtXSkoXFxkezJ9KSg/OjooXFxkezJ9KSk/KT8pPyQvO1xuLyoqXG4gKiBVc2UgdG8gY29udmVydCBhIHN0cmluZyBvZiBjb21tYSBzZXBhcmF0ZWQgbnVtYmVycyBvclxuICogYW4gYXJyYXkgb2YgbnVtYmVycywgYW5kIGNsZWFuIHVwIGFueSB1c2VyIGlucHV0XG4gKi9cbmNvbnN0IGNvbnZlcnRUb0FycmF5T2ZOdW1iZXJzID0gaW5wdXQgPT4ge1xuICBpZiAoaW5wdXQgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgcHJvY2Vzc2VkSW5wdXQgPSBpbnB1dDtcbiAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICAvLyBjb252ZXJ0IHRoZSBzdHJpbmcgdG8gYW4gYXJyYXkgb2Ygc3RyaW5nc1xuICAgIC8vIGF1dG8gcmVtb3ZlIGFueSB3aGl0ZXNwYWNlIGFuZCBbXSBjaGFyYWN0ZXJzXG4gICAgcHJvY2Vzc2VkSW5wdXQgPSBpbnB1dC5yZXBsYWNlKC9cXFt8XFxdfFxccy9nLCAnJykuc3BsaXQoJywnKTtcbiAgfVxuICBsZXQgdmFsdWVzO1xuICBpZiAoQXJyYXkuaXNBcnJheShwcm9jZXNzZWRJbnB1dCkpIHtcbiAgICAvLyBlbnN1cmUgZWFjaCB2YWx1ZSBpcyBhbiBhY3R1YWwgbnVtYmVyIGluIHRoZSByZXR1cm5lZCBhcnJheVxuICAgIHZhbHVlcyA9IHByb2Nlc3NlZElucHV0Lm1hcChudW0gPT4gcGFyc2VJbnQobnVtLCAxMCkpLmZpbHRlcihpc0Zpbml0ZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFsdWVzID0gW3Byb2Nlc3NlZElucHV0XTtcbiAgfVxuICByZXR1cm4gdmFsdWVzO1xufTtcbi8qKlxuICogRXh0cmFjdHMgZGF0ZSBpbmZvcm1hdGlvblxuICogZnJvbSBhIC5jYWxlbmRhci1kYXkgZWxlbWVudFxuICogaW50byBEYXRldGltZVBhcnRzLlxuICovXG5jb25zdCBnZXRQYXJ0c0Zyb21DYWxlbmRhckRheSA9IGVsID0+IHtcbiAgcmV0dXJuIHtcbiAgICBtb250aDogcGFyc2VJbnQoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLW1vbnRoJyksIDEwKSxcbiAgICBkYXk6IHBhcnNlSW50KGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1kYXknKSwgMTApLFxuICAgIHllYXI6IHBhcnNlSW50KGVsLmdldEF0dHJpYnV0ZSgnZGF0YS15ZWFyJyksIDEwKSxcbiAgICBkYXlPZldlZWs6IHBhcnNlSW50KGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1kYXktb2Ytd2VlaycpLCAxMClcbiAgfTtcbn07XG5mdW5jdGlvbiBwYXJzZURhdGUodmFsKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICBjb25zdCBwYXJzZWRBcnJheSA9IFtdO1xuICAgIGZvciAoY29uc3QgdmFsU3RyIG9mIHZhbCkge1xuICAgICAgY29uc3QgcGFyc2VkVmFsID0gcGFyc2VEYXRlKHZhbFN0cik7XG4gICAgICAvKipcbiAgICAgICAqIElmIGFueSBvZiB0aGUgdmFsdWVzIHdlcmVuJ3QgcGFyc2VkIGNvcnJlY3RseSwgY29uc2lkZXJcbiAgICAgICAqIHRoZSBlbnRpcmUgYmF0Y2ggaW5jb3JyZWN0LiBUaGlzIHNpbXBsaWZpZXMgdGhlIHR5cGVcbiAgICAgICAqIHNpZ25hdHVyZXMgYnkgaGF2aW5nIFwidW5kZWZpbmVkXCIgYmUgYSBnZW5lcmFsIGVycm9yIGNhc2VcbiAgICAgICAqIGluc3RlYWQgb2YgcmV0dXJuaW5nIChEYXRldGltZSB8IHVuZGVmaW5lZClbXSwgd2hpY2ggaXNcbiAgICAgICAqIGhhcmRlciBmb3IgVFMgdG8gcGVyZm9ybSB0eXBlIG5hcnJvd2luZyBvbi5cbiAgICAgICAqL1xuICAgICAgaWYgKCFwYXJzZWRWYWwpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIHBhcnNlZEFycmF5LnB1c2gocGFyc2VkVmFsKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZEFycmF5O1xuICB9XG4gIC8vIG1hbnVhbGx5IHBhcnNlIElTMCBjdXogRGF0ZS5wYXJzZSBjYW5ub3QgYmUgdHJ1c3RlZFxuICAvLyBJU08gODYwMSBmb3JtYXQ6IDE5OTQtMTItMTVUMTM6NDc6MjBaXG4gIGxldCBwYXJzZSA9IG51bGw7XG4gIGlmICh2YWwgIT0gbnVsbCAmJiB2YWwgIT09ICcnKSB7XG4gICAgLy8gdHJ5IHBhcnNpbmcgZm9yIGp1c3QgdGltZSBmaXJzdCwgSEg6TU1cbiAgICBwYXJzZSA9IFRJTUVfUkVHRVhQLmV4ZWModmFsKTtcbiAgICBpZiAocGFyc2UpIHtcbiAgICAgIC8vIGFkanVzdCB0aGUgYXJyYXkgc28gaXQgZml0cyBuaWNlbHkgd2l0aCB0aGUgZGF0ZXRpbWUgcGFyc2VcbiAgICAgIHBhcnNlLnVuc2hpZnQodW5kZWZpbmVkLCB1bmRlZmluZWQpO1xuICAgICAgcGFyc2VbMl0gPSBwYXJzZVszXSA9IHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdHJ5IHBhcnNpbmcgZm9yIGZ1bGwgSVNPIGRhdGV0aW1lXG4gICAgICBwYXJzZSA9IElTT184NjAxX1JFR0VYUC5leGVjKHZhbCk7XG4gICAgfVxuICB9XG4gIGlmIChwYXJzZSA9PT0gbnVsbCkge1xuICAgIC8vIHdhc24ndCBhYmxlIHRvIHBhcnNlIHRoZSBJU08gZGF0ZXRpbWVcbiAgICBwcmludElvbldhcm5pbmcoYFtpb24tZGF0ZXRpbWVdIC0gVW5hYmxlIHRvIHBhcnNlIGRhdGUgc3RyaW5nOiAke3ZhbH0uIFBsZWFzZSBwcm92aWRlIGEgdmFsaWQgSVNPIDg2MDEgZGF0ZXRpbWUgc3RyaW5nLmApO1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gZW5zdXJlIGFsbCB0aGUgcGFyc2UgdmFsdWVzIGV4aXN0IHdpdGggYXQgbGVhc3QgMFxuICBmb3IgKGxldCBpID0gMTsgaSA8IDg7IGkrKykge1xuICAgIHBhcnNlW2ldID0gcGFyc2VbaV0gIT09IHVuZGVmaW5lZCA/IHBhcnNlSW50KHBhcnNlW2ldLCAxMCkgOiB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gY2FuIGFsc28gZ2V0IHNlY29uZCBhbmQgbWlsbGlzZWNvbmQgZnJvbSBwYXJzZVs2XSBhbmQgcGFyc2VbN10gaWYgbmVlZGVkXG4gIHJldHVybiB7XG4gICAgeWVhcjogcGFyc2VbMV0sXG4gICAgbW9udGg6IHBhcnNlWzJdLFxuICAgIGRheTogcGFyc2VbM10sXG4gICAgaG91cjogcGFyc2VbNF0sXG4gICAgbWludXRlOiBwYXJzZVs1XSxcbiAgICBhbXBtOiBwYXJzZVs0XSA8IDEyID8gJ2FtJyA6ICdwbSdcbiAgfTtcbn1cbmNvbnN0IGNsYW1wRGF0ZSA9IChkYXRlUGFydHMsIG1pblBhcnRzLCBtYXhQYXJ0cykgPT4ge1xuICBpZiAobWluUGFydHMgJiYgaXNCZWZvcmUoZGF0ZVBhcnRzLCBtaW5QYXJ0cykpIHtcbiAgICByZXR1cm4gbWluUGFydHM7XG4gIH0gZWxzZSBpZiAobWF4UGFydHMgJiYgaXNBZnRlcihkYXRlUGFydHMsIG1heFBhcnRzKSkge1xuICAgIHJldHVybiBtYXhQYXJ0cztcbiAgfVxuICByZXR1cm4gZGF0ZVBhcnRzO1xufTtcbi8qKlxuICogUGFyc2VzIGFuIGhvdXIgYW5kIHJldHVybnMgaWYgdGhlIHZhbHVlIGlzIGluIHRoZSBtb3JuaW5nIChhbSkgb3IgYWZ0ZXJub29uIChwbSkuXG4gKiBAcGFyYW0gaG91ciBUaGUgaG91ciB0byBmb3JtYXQsIHNob3VsZCBiZSAwLTIzXG4gKiBAcmV0dXJucyBgcG1gIGlmIHRoZSBob3VyIGlzIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byAxMiwgYGFtYCBpZiBsZXNzIHRoYW4gMTIuXG4gKi9cbmNvbnN0IHBhcnNlQW1QbSA9IGhvdXIgPT4ge1xuICByZXR1cm4gaG91ciA+PSAxMiA/ICdwbScgOiAnYW0nO1xufTtcbi8qKlxuICogVGFrZXMgYSBtYXggZGF0ZSBzdHJpbmcgYW5kIGNyZWF0ZXMgYSBEYXRldGltZVBhcnRzXG4gKiBvYmplY3QsIGZpbGxpbmcgaW4gYW55IG1pc3NpbmcgaW5mb3JtYXRpb24uXG4gKiBGb3IgZXhhbXBsZSwgbWF4PVwiMjAxMlwiIHdvdWxkIGZpbGwgaW4gdGhlIG1pc3NpbmdcbiAqIG1vbnRoLCBkYXksIGhvdXIsIGFuZCBtaW51dGUgaW5mb3JtYXRpb24uXG4gKi9cbmNvbnN0IHBhcnNlTWF4UGFydHMgPSAobWF4LCB0b2RheVBhcnRzKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IHBhcnNlRGF0ZShtYXgpO1xuICAvKipcbiAgICogSWYgbWluIHdhcyBub3QgYSB2YWxpZCBkYXRlIHRoZW4gcmV0dXJuIHVuZGVmaW5lZC5cbiAgICovXG4gIGlmIChyZXN1bHQgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB7XG4gICAgbW9udGgsXG4gICAgZGF5LFxuICAgIHllYXIsXG4gICAgaG91cixcbiAgICBtaW51dGVcbiAgfSA9IHJlc3VsdDtcbiAgLyoqXG4gICAqIFdoZW4gcGFzc2luZyBpbiBgbWF4YCBvciBgbWluYCwgZGV2ZWxvcGVyc1xuICAgKiBjYW4gcGFzcyBpbiBhbnkgSVNPLTg2MDEgc3RyaW5nLiBUaGlzIG1lYW5zXG4gICAqIHRoYXQgbm90IGFsbCBvZiB0aGUgZGF0ZS90aW1lIGZpZWxkcyBhcmUgZGVmaW5lZC5cbiAgICogRm9yIGV4YW1wbGUsIHBhc3NpbmcgbWF4PVwiMjAxMlwiIGlzIHZhbGlkIGV2ZW4gdGhvdWdoXG4gICAqIHRoZXJlIGlzIG5vIG1vbnRoLCBkYXksIGhvdXIsIG9yIG1pbnV0ZSBkYXRhLlxuICAgKiBIb3dldmVyLCBhbGwgb2YgdGhpcyBkYXRhIGlzIHJlcXVpcmVkIHdoZW4gY2xhbXBpbmcgdGhlIGRhdGVcbiAgICogc28gdGhhdCB0aGUgY29ycmVjdCBpbml0aWFsIHZhbHVlIGNhbiBiZSBzZWxlY3RlZC4gQXMgYSByZXN1bHQsXG4gICAqIHdlIG5lZWQgdG8gZmlsbCBpbiBhbnkgb21pdHRlZCBkYXRhIHdpdGggdGhlIG1pbiBvciBtYXggdmFsdWVzLlxuICAgKi9cbiAgY29uc3QgeWVhclZhbHVlID0geWVhciAhPT0gbnVsbCAmJiB5ZWFyICE9PSB2b2lkIDAgPyB5ZWFyIDogdG9kYXlQYXJ0cy55ZWFyO1xuICBjb25zdCBtb250aFZhbHVlID0gbW9udGggIT09IG51bGwgJiYgbW9udGggIT09IHZvaWQgMCA/IG1vbnRoIDogMTI7XG4gIHJldHVybiB7XG4gICAgbW9udGg6IG1vbnRoVmFsdWUsXG4gICAgZGF5OiBkYXkgIT09IG51bGwgJiYgZGF5ICE9PSB2b2lkIDAgPyBkYXkgOiBnZXROdW1EYXlzSW5Nb250aChtb250aFZhbHVlLCB5ZWFyVmFsdWUpLFxuICAgIC8qKlxuICAgICAqIFBhc3NpbmcgaW4gXCJISDptbVwiIGlzIGEgdmFsaWQgSVNPLTg2MDFcbiAgICAgKiBzdHJpbmcsIHNvIHdlIGp1c3QgZGVmYXVsdCB0byB0aGUgY3VycmVudCB5ZWFyXG4gICAgICogaW4gdGhpcyBjYXNlLlxuICAgICAqL1xuICAgIHllYXI6IHllYXJWYWx1ZSxcbiAgICBob3VyOiBob3VyICE9PSBudWxsICYmIGhvdXIgIT09IHZvaWQgMCA/IGhvdXIgOiAyMyxcbiAgICBtaW51dGU6IG1pbnV0ZSAhPT0gbnVsbCAmJiBtaW51dGUgIT09IHZvaWQgMCA/IG1pbnV0ZSA6IDU5XG4gIH07XG59O1xuLyoqXG4gKiBUYWtlcyBhIG1pbiBkYXRlIHN0cmluZyBhbmQgY3JlYXRlcyBhIERhdGV0aW1lUGFydHNcbiAqIG9iamVjdCwgZmlsbGluZyBpbiBhbnkgbWlzc2luZyBpbmZvcm1hdGlvbi5cbiAqIEZvciBleGFtcGxlLCBtaW49XCIyMDEyXCIgd291bGQgZmlsbCBpbiB0aGUgbWlzc2luZ1xuICogbW9udGgsIGRheSwgaG91ciwgYW5kIG1pbnV0ZSBpbmZvcm1hdGlvbi5cbiAqL1xuY29uc3QgcGFyc2VNaW5QYXJ0cyA9IChtaW4sIHRvZGF5UGFydHMpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gcGFyc2VEYXRlKG1pbik7XG4gIC8qKlxuICAgKiBJZiBtaW4gd2FzIG5vdCBhIHZhbGlkIGRhdGUgdGhlbiByZXR1cm4gdW5kZWZpbmVkLlxuICAgKi9cbiAgaWYgKHJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHtcbiAgICBtb250aCxcbiAgICBkYXksXG4gICAgeWVhcixcbiAgICBob3VyLFxuICAgIG1pbnV0ZVxuICB9ID0gcmVzdWx0O1xuICAvKipcbiAgICogV2hlbiBwYXNzaW5nIGluIGBtYXhgIG9yIGBtaW5gLCBkZXZlbG9wZXJzXG4gICAqIGNhbiBwYXNzIGluIGFueSBJU08tODYwMSBzdHJpbmcuIFRoaXMgbWVhbnNcbiAgICogdGhhdCBub3QgYWxsIG9mIHRoZSBkYXRlL3RpbWUgZmllbGRzIGFyZSBkZWZpbmVkLlxuICAgKiBGb3IgZXhhbXBsZSwgcGFzc2luZyBtYXg9XCIyMDEyXCIgaXMgdmFsaWQgZXZlbiB0aG91Z2hcbiAgICogdGhlcmUgaXMgbm8gbW9udGgsIGRheSwgaG91ciwgb3IgbWludXRlIGRhdGEuXG4gICAqIEhvd2V2ZXIsIGFsbCBvZiB0aGlzIGRhdGEgaXMgcmVxdWlyZWQgd2hlbiBjbGFtcGluZyB0aGUgZGF0ZVxuICAgKiBzbyB0aGF0IHRoZSBjb3JyZWN0IGluaXRpYWwgdmFsdWUgY2FuIGJlIHNlbGVjdGVkLiBBcyBhIHJlc3VsdCxcbiAgICogd2UgbmVlZCB0byBmaWxsIGluIGFueSBvbWl0dGVkIGRhdGEgd2l0aCB0aGUgbWluIG9yIG1heCB2YWx1ZXMuXG4gICAqL1xuICByZXR1cm4ge1xuICAgIG1vbnRoOiBtb250aCAhPT0gbnVsbCAmJiBtb250aCAhPT0gdm9pZCAwID8gbW9udGggOiAxLFxuICAgIGRheTogZGF5ICE9PSBudWxsICYmIGRheSAhPT0gdm9pZCAwID8gZGF5IDogMSxcbiAgICAvKipcbiAgICAgKiBQYXNzaW5nIGluIFwiSEg6bW1cIiBpcyBhIHZhbGlkIElTTy04NjAxXG4gICAgICogc3RyaW5nLCBzbyB3ZSBqdXN0IGRlZmF1bHQgdG8gdGhlIGN1cnJlbnQgeWVhclxuICAgICAqIGluIHRoaXMgY2FzZS5cbiAgICAgKi9cbiAgICB5ZWFyOiB5ZWFyICE9PSBudWxsICYmIHllYXIgIT09IHZvaWQgMCA/IHllYXIgOiB0b2RheVBhcnRzLnllYXIsXG4gICAgaG91cjogaG91ciAhPT0gbnVsbCAmJiBob3VyICE9PSB2b2lkIDAgPyBob3VyIDogMCxcbiAgICBtaW51dGU6IG1pbnV0ZSAhPT0gbnVsbCAmJiBtaW51dGUgIT09IHZvaWQgMCA/IG1pbnV0ZSA6IDBcbiAgfTtcbn07XG5jb25zdCB0d29EaWdpdCA9IHZhbCA9PiB7XG4gIHJldHVybiAoJzAnICsgKHZhbCAhPT0gdW5kZWZpbmVkID8gTWF0aC5hYnModmFsKSA6ICcwJykpLnNsaWNlKC0yKTtcbn07XG5jb25zdCBmb3VyRGlnaXQgPSB2YWwgPT4ge1xuICByZXR1cm4gKCcwMDAnICsgKHZhbCAhPT0gdW5kZWZpbmVkID8gTWF0aC5hYnModmFsKSA6ICcwJykpLnNsaWNlKC00KTtcbn07XG5mdW5jdGlvbiBjb252ZXJ0RGF0YVRvSVNPKGRhdGEpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICByZXR1cm4gZGF0YS5tYXAocGFydHMgPT4gY29udmVydERhdGFUb0lTTyhwYXJ0cykpO1xuICB9XG4gIC8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9OT1RFLWRhdGV0aW1lXG4gIGxldCBydG4gPSAnJztcbiAgaWYgKGRhdGEueWVhciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gWVlZWVxuICAgIHJ0biA9IGZvdXJEaWdpdChkYXRhLnllYXIpO1xuICAgIGlmIChkYXRhLm1vbnRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIFlZWVktTU1cbiAgICAgIHJ0biArPSAnLScgKyB0d29EaWdpdChkYXRhLm1vbnRoKTtcbiAgICAgIGlmIChkYXRhLmRheSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIFlZWVktTU0tRERcbiAgICAgICAgcnRuICs9ICctJyArIHR3b0RpZ2l0KGRhdGEuZGF5KTtcbiAgICAgICAgaWYgKGRhdGEuaG91ciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gWVlZWS1NTS1ERFRISDptbTpTU1xuICAgICAgICAgIHJ0biArPSBgVCR7dHdvRGlnaXQoZGF0YS5ob3VyKX06JHt0d29EaWdpdChkYXRhLm1pbnV0ZSl9OjAwYDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChkYXRhLmhvdXIgIT09IHVuZGVmaW5lZCkge1xuICAgIC8vIEhIOm1tXG4gICAgcnRuID0gdHdvRGlnaXQoZGF0YS5ob3VyKSArICc6JyArIHR3b0RpZ2l0KGRhdGEubWludXRlKTtcbiAgfVxuICByZXR1cm4gcnRuO1xufVxuLyoqXG4gKiBDb252ZXJ0cyBhbiAxMiBob3VyIHZhbHVlIHRvIDI0IGhvdXJzLlxuICovXG5jb25zdCBjb252ZXJ0MTJIb3VyVG8yNEhvdXIgPSAoaG91ciwgYW1wbSkgPT4ge1xuICBpZiAoYW1wbSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGhvdXI7XG4gIH1cbiAgLyoqXG4gICAqIElmIEFNIGFuZCAxMmFtXG4gICAqIHRoZW4gcmV0dXJuIDAwOjAwLlxuICAgKiBPdGhlcndpc2UganVzdCByZXR1cm5cbiAgICogdGhlIGhvdXIgc2luY2UgaXQgaXNcbiAgICogYWxyZWFkeSBpbiAyNCBob3VyIGZvcm1hdC5cbiAgICovXG4gIGlmIChhbXBtID09PSAnYW0nKSB7XG4gICAgaWYgKGhvdXIgPT09IDEyKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgcmV0dXJuIGhvdXI7XG4gIH1cbiAgLyoqXG4gICAqIElmIFBNIGFuZCAxMnBtXG4gICAqIGp1c3QgcmV0dXJuIDEyOjAwXG4gICAqIHNpbmNlIGl0IGlzIGFscmVhZHlcbiAgICogaW4gMjQgaG91ciBmb3JtYXQuXG4gICAqIE90aGVyd2lzZSBhZGQgMTIgaG91cnNcbiAgICogdG8gdGhlIHRpbWUuXG4gICAqL1xuICBpZiAoaG91ciA9PT0gMTIpIHtcbiAgICByZXR1cm4gMTI7XG4gIH1cbiAgcmV0dXJuIGhvdXIgKyAxMjtcbn07XG5jb25zdCBnZXRTdGFydE9mV2VlayA9IHJlZlBhcnRzID0+IHtcbiAgY29uc3Qge1xuICAgIGRheU9mV2Vla1xuICB9ID0gcmVmUGFydHM7XG4gIGlmIChkYXlPZldlZWsgPT09IG51bGwgfHwgZGF5T2ZXZWVrID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGRheSBvZiB3ZWVrIHByb3ZpZGVkJyk7XG4gIH1cbiAgcmV0dXJuIHN1YnRyYWN0RGF5cyhyZWZQYXJ0cywgZGF5T2ZXZWVrKTtcbn07XG5jb25zdCBnZXRFbmRPZldlZWsgPSByZWZQYXJ0cyA9PiB7XG4gIGNvbnN0IHtcbiAgICBkYXlPZldlZWtcbiAgfSA9IHJlZlBhcnRzO1xuICBpZiAoZGF5T2ZXZWVrID09PSBudWxsIHx8IGRheU9mV2VlayA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyBkYXkgb2Ygd2VlayBwcm92aWRlZCcpO1xuICB9XG4gIHJldHVybiBhZGREYXlzKHJlZlBhcnRzLCA2IC0gZGF5T2ZXZWVrKTtcbn07XG5jb25zdCBnZXROZXh0RGF5ID0gcmVmUGFydHMgPT4ge1xuICByZXR1cm4gYWRkRGF5cyhyZWZQYXJ0cywgMSk7XG59O1xuY29uc3QgZ2V0UHJldmlvdXNEYXkgPSByZWZQYXJ0cyA9PiB7XG4gIHJldHVybiBzdWJ0cmFjdERheXMocmVmUGFydHMsIDEpO1xufTtcbmNvbnN0IGdldFByZXZpb3VzV2VlayA9IHJlZlBhcnRzID0+IHtcbiAgcmV0dXJuIHN1YnRyYWN0RGF5cyhyZWZQYXJ0cywgNyk7XG59O1xuY29uc3QgZ2V0TmV4dFdlZWsgPSByZWZQYXJ0cyA9PiB7XG4gIHJldHVybiBhZGREYXlzKHJlZlBhcnRzLCA3KTtcbn07XG4vKipcbiAqIEdpdmVuIGRhdGV0aW1lIHBhcnRzLCBzdWJ0cmFjdFxuICogbnVtRGF5cyBmcm9tIHRoZSBkYXRlLlxuICogUmV0dXJucyBhIG5ldyBEYXRldGltZVBhcnRzIG9iamVjdFxuICogQ3VycmVudGx5IGNhbiBvbmx5IGdvIGJhY2t3YXJkIGF0IG1vc3QgMSBtb250aC5cbiAqL1xuY29uc3Qgc3VidHJhY3REYXlzID0gKHJlZlBhcnRzLCBudW1EYXlzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBtb250aCxcbiAgICBkYXksXG4gICAgeWVhclxuICB9ID0gcmVmUGFydHM7XG4gIGlmIChkYXkgPT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGRheSBwcm92aWRlZCcpO1xuICB9XG4gIGNvbnN0IHdvcmtpbmdQYXJ0cyA9IHtcbiAgICBtb250aCxcbiAgICBkYXksXG4gICAgeWVhclxuICB9O1xuICB3b3JraW5nUGFydHMuZGF5ID0gZGF5IC0gbnVtRGF5cztcbiAgLyoqXG4gICAqIElmIHdyYXBwaW5nIHRvIHByZXZpb3VzIG1vbnRoXG4gICAqIHVwZGF0ZSBkYXlzIGFuZCBkZWNyZW1lbnQgbW9udGhcbiAgICovXG4gIGlmICh3b3JraW5nUGFydHMuZGF5IDwgMSkge1xuICAgIHdvcmtpbmdQYXJ0cy5tb250aCAtPSAxO1xuICB9XG4gIC8qKlxuICAgKiBJZiBtb3ZpbmcgdG8gcHJldmlvdXMgeWVhciwgcmVzZXRcbiAgICogbW9udGggdG8gRGVjZW1iZXIgYW5kIGRlY3JlbWVudCB5ZWFyXG4gICAqL1xuICBpZiAod29ya2luZ1BhcnRzLm1vbnRoIDwgMSkge1xuICAgIHdvcmtpbmdQYXJ0cy5tb250aCA9IDEyO1xuICAgIHdvcmtpbmdQYXJ0cy55ZWFyIC09IDE7XG4gIH1cbiAgLyoqXG4gICAqIERldGVybWluZSBob3cgbWFueSBkYXlzIGFyZSBpbiB0aGUgY3VycmVudFxuICAgKiBtb250aFxuICAgKi9cbiAgaWYgKHdvcmtpbmdQYXJ0cy5kYXkgPCAxKSB7XG4gICAgY29uc3QgZGF5c0luTW9udGggPSBnZXROdW1EYXlzSW5Nb250aCh3b3JraW5nUGFydHMubW9udGgsIHdvcmtpbmdQYXJ0cy55ZWFyKTtcbiAgICAvKipcbiAgICAgKiBUYWtlIG51bSBkYXlzIGluIG1vbnRoIGFuZCBhZGQgdGhlXG4gICAgICogbnVtYmVyIG9mIHVuZGVyZmxvdyBkYXlzLiBUaGlzIG51bWJlciB3aWxsXG4gICAgICogYmUgbmVnYXRpdmUuXG4gICAgICogRXhhbXBsZTogMSB3ZWVrIGJlZm9yZSBKYW4gMiwgMjAyMSBpc1xuICAgICAqIERlY2VtYmVyIDI2LCAyMDIxIHNvOlxuICAgICAqIDIgLSA3ID0gLTVcbiAgICAgKiAzMSArICgtNSkgPSAyNlxuICAgICAqL1xuICAgIHdvcmtpbmdQYXJ0cy5kYXkgPSBkYXlzSW5Nb250aCArIHdvcmtpbmdQYXJ0cy5kYXk7XG4gIH1cbiAgcmV0dXJuIHdvcmtpbmdQYXJ0cztcbn07XG4vKipcbiAqIEdpdmVuIGRhdGV0aW1lIHBhcnRzLCBhZGRcbiAqIG51bURheXMgdG8gdGhlIGRhdGUuXG4gKiBSZXR1cm5zIGEgbmV3IERhdGV0aW1lUGFydHMgb2JqZWN0XG4gKiBDdXJyZW50bHkgY2FuIG9ubHkgZ28gZm9yd2FyZCBhdCBtb3N0IDEgbW9udGguXG4gKi9cbmNvbnN0IGFkZERheXMgPSAocmVmUGFydHMsIG51bURheXMpID0+IHtcbiAgY29uc3Qge1xuICAgIG1vbnRoLFxuICAgIGRheSxcbiAgICB5ZWFyXG4gIH0gPSByZWZQYXJ0cztcbiAgaWYgKGRheSA9PT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTm8gZGF5IHByb3ZpZGVkJyk7XG4gIH1cbiAgY29uc3Qgd29ya2luZ1BhcnRzID0ge1xuICAgIG1vbnRoLFxuICAgIGRheSxcbiAgICB5ZWFyXG4gIH07XG4gIGNvbnN0IGRheXNJbk1vbnRoID0gZ2V0TnVtRGF5c0luTW9udGgobW9udGgsIHllYXIpO1xuICB3b3JraW5nUGFydHMuZGF5ID0gZGF5ICsgbnVtRGF5cztcbiAgLyoqXG4gICAqIElmIHdyYXBwaW5nIHRvIG5leHQgbW9udGhcbiAgICogdXBkYXRlIGRheXMgYW5kIGluY3JlbWVudCBtb250aFxuICAgKi9cbiAgaWYgKHdvcmtpbmdQYXJ0cy5kYXkgPiBkYXlzSW5Nb250aCkge1xuICAgIHdvcmtpbmdQYXJ0cy5kYXkgLT0gZGF5c0luTW9udGg7XG4gICAgd29ya2luZ1BhcnRzLm1vbnRoICs9IDE7XG4gIH1cbiAgLyoqXG4gICAqIElmIG1vdmluZyB0byBuZXh0IHllYXIsIHJlc2V0XG4gICAqIG1vbnRoIHRvIEphbnVhcnkgYW5kIGluY3JlbWVudCB5ZWFyXG4gICAqL1xuICBpZiAod29ya2luZ1BhcnRzLm1vbnRoID4gMTIpIHtcbiAgICB3b3JraW5nUGFydHMubW9udGggPSAxO1xuICAgIHdvcmtpbmdQYXJ0cy55ZWFyICs9IDE7XG4gIH1cbiAgcmV0dXJuIHdvcmtpbmdQYXJ0cztcbn07XG4vKipcbiAqIEdpdmVuIERhdGV0aW1lUGFydHMsIGdlbmVyYXRlIHRoZSBwcmV2aW91cyBtb250aC5cbiAqL1xuY29uc3QgZ2V0UHJldmlvdXNNb250aCA9IHJlZlBhcnRzID0+IHtcbiAgLyoqXG4gICAqIElmIGN1cnJlbnQgbW9udGggaXMgSmFudWFyeSwgd3JhcCBiYWNrd2FyZHNcbiAgICogIHRvIERlY2VtYmVyIG9mIHRoZSBwcmV2aW91cyB5ZWFyLlxuICAgKi9cbiAgY29uc3QgbW9udGggPSByZWZQYXJ0cy5tb250aCA9PT0gMSA/IDEyIDogcmVmUGFydHMubW9udGggLSAxO1xuICBjb25zdCB5ZWFyID0gcmVmUGFydHMubW9udGggPT09IDEgPyByZWZQYXJ0cy55ZWFyIC0gMSA6IHJlZlBhcnRzLnllYXI7XG4gIGNvbnN0IG51bURheXNJbk1vbnRoID0gZ2V0TnVtRGF5c0luTW9udGgobW9udGgsIHllYXIpO1xuICBjb25zdCBkYXkgPSBudW1EYXlzSW5Nb250aCA8IHJlZlBhcnRzLmRheSA/IG51bURheXNJbk1vbnRoIDogcmVmUGFydHMuZGF5O1xuICByZXR1cm4ge1xuICAgIG1vbnRoLFxuICAgIHllYXIsXG4gICAgZGF5XG4gIH07XG59O1xuLyoqXG4gKiBHaXZlbiBEYXRldGltZVBhcnRzLCBnZW5lcmF0ZSB0aGUgbmV4dCBtb250aC5cbiAqL1xuY29uc3QgZ2V0TmV4dE1vbnRoID0gcmVmUGFydHMgPT4ge1xuICAvKipcbiAgICogSWYgY3VycmVudCBtb250aCBpcyBEZWNlbWJlciwgd3JhcCBmb3J3YXJkc1xuICAgKiAgdG8gSmFudWFyeSBvZiB0aGUgbmV4dCB5ZWFyLlxuICAgKi9cbiAgY29uc3QgbW9udGggPSByZWZQYXJ0cy5tb250aCA9PT0gMTIgPyAxIDogcmVmUGFydHMubW9udGggKyAxO1xuICBjb25zdCB5ZWFyID0gcmVmUGFydHMubW9udGggPT09IDEyID8gcmVmUGFydHMueWVhciArIDEgOiByZWZQYXJ0cy55ZWFyO1xuICBjb25zdCBudW1EYXlzSW5Nb250aCA9IGdldE51bURheXNJbk1vbnRoKG1vbnRoLCB5ZWFyKTtcbiAgY29uc3QgZGF5ID0gbnVtRGF5c0luTW9udGggPCByZWZQYXJ0cy5kYXkgPyBudW1EYXlzSW5Nb250aCA6IHJlZlBhcnRzLmRheTtcbiAgcmV0dXJuIHtcbiAgICBtb250aCxcbiAgICB5ZWFyLFxuICAgIGRheVxuICB9O1xufTtcbmNvbnN0IGNoYW5nZVllYXIgPSAocmVmUGFydHMsIHllYXJEZWx0YSkgPT4ge1xuICBjb25zdCBtb250aCA9IHJlZlBhcnRzLm1vbnRoO1xuICBjb25zdCB5ZWFyID0gcmVmUGFydHMueWVhciArIHllYXJEZWx0YTtcbiAgY29uc3QgbnVtRGF5c0luTW9udGggPSBnZXROdW1EYXlzSW5Nb250aChtb250aCwgeWVhcik7XG4gIGNvbnN0IGRheSA9IG51bURheXNJbk1vbnRoIDwgcmVmUGFydHMuZGF5ID8gbnVtRGF5c0luTW9udGggOiByZWZQYXJ0cy5kYXk7XG4gIHJldHVybiB7XG4gICAgbW9udGgsXG4gICAgeWVhcixcbiAgICBkYXlcbiAgfTtcbn07XG4vKipcbiAqIEdpdmVuIERhdGV0aW1lUGFydHMsIGdlbmVyYXRlIHRoZSBwcmV2aW91cyB5ZWFyLlxuICovXG5jb25zdCBnZXRQcmV2aW91c1llYXIgPSByZWZQYXJ0cyA9PiB7XG4gIHJldHVybiBjaGFuZ2VZZWFyKHJlZlBhcnRzLCAtMSk7XG59O1xuLyoqXG4gKiBHaXZlbiBEYXRldGltZVBhcnRzLCBnZW5lcmF0ZSB0aGUgbmV4dCB5ZWFyLlxuICovXG5jb25zdCBnZXROZXh0WWVhciA9IHJlZlBhcnRzID0+IHtcbiAgcmV0dXJuIGNoYW5nZVllYXIocmVmUGFydHMsIDEpO1xufTtcbi8qKlxuICogSWYgUE0sIHRoZW4gaW50ZXJuYWwgdmFsdWUgc2hvdWxkXG4gKiBiZSBjb252ZXJ0ZWQgdG8gMjQtaHIgdGltZS5cbiAqIERvZXMgbm90IGFwcGx5IHdoZW4gcHVibGljXG4gKiB2YWx1ZXMgYXJlIGFscmVhZHkgMjQtaHIgdGltZS5cbiAqL1xuY29uc3QgZ2V0SW50ZXJuYWxIb3VyVmFsdWUgPSAoaG91ciwgdXNlMjRIb3VyLCBhbXBtKSA9PiB7XG4gIGlmICh1c2UyNEhvdXIpIHtcbiAgICByZXR1cm4gaG91cjtcbiAgfVxuICByZXR1cm4gY29udmVydDEySG91clRvMjRIb3VyKGhvdXIsIGFtcG0pO1xufTtcbi8qKlxuICogVW5sZXNzIG90aGVyd2lzZSBzdGF0ZWQsIGFsbCBtb250aCB2YWx1ZXMgYXJlXG4gKiAxIGluZGV4ZWQgaW5zdGVhZCBvZiB0aGUgdHlwaWNhbCAwIGluZGV4IGluIEpTIERhdGUuXG4gKiBFeGFtcGxlOlxuICogICBKYW51YXJ5ID0gTW9udGggMCB3aGVuIHVzaW5nIEpTIERhdGVcbiAqICAgSmFudWFyeSA9IE1vbnRoIDEgd2hlbiB1c2luZyB0aGlzIGRhdGV0aW1lIHV0aWxcbiAqL1xuLyoqXG4gKiBHaXZlbiB0aGUgY3VycmVudCBkYXRldGltZSBwYXJ0cyBhbmQgYSBuZXcgQU0vUE0gdmFsdWVcbiAqIGNhbGN1bGF0ZSB3aGF0IHRoZSBob3VyIHNob3VsZCBiZSBpbiAyNC1ob3VyIHRpbWUgZm9ybWF0LlxuICogVXNlZCB3aGVuIHRvZ2dsaW5nIHRoZSBBTS9QTSBzZWdtZW50IHNpbmNlIHdlIHN0b3JlIG91ciBob3Vyc1xuICogaW4gMjQtaG91ciB0aW1lIGZvcm1hdCBpbnRlcm5hbGx5LlxuICovXG5jb25zdCBjYWxjdWxhdGVIb3VyRnJvbUFNUE0gPSAoY3VycmVudFBhcnRzLCBuZXdBTVBNKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBhbXBtOiBjdXJyZW50QU1QTSxcbiAgICBob3VyXG4gIH0gPSBjdXJyZW50UGFydHM7XG4gIGxldCBuZXdIb3VyID0gaG91cjtcbiAgLyoqXG4gICAqIElmIGdvaW5nIGZyb20gQU0gLS0+IFBNLCBuZWVkIHRvIHVwZGF0ZSB0aGVcbiAgICpcbiAgICovXG4gIGlmIChjdXJyZW50QU1QTSA9PT0gJ2FtJyAmJiBuZXdBTVBNID09PSAncG0nKSB7XG4gICAgbmV3SG91ciA9IGNvbnZlcnQxMkhvdXJUbzI0SG91cihuZXdIb3VyLCAncG0nKTtcbiAgICAvKipcbiAgICAgKiBJZiBnb2luZyBmcm9tIFBNIC0tPiBBTVxuICAgICAqL1xuICB9IGVsc2UgaWYgKGN1cnJlbnRBTVBNID09PSAncG0nICYmIG5ld0FNUE0gPT09ICdhbScpIHtcbiAgICBuZXdIb3VyID0gTWF0aC5hYnMobmV3SG91ciAtIDEyKTtcbiAgfVxuICByZXR1cm4gbmV3SG91cjtcbn07XG4vKipcbiAqIFVwZGF0ZXMgcGFydHMgdG8gZW5zdXJlIHRoYXQgbW9udGggYW5kIGRheVxuICogdmFsdWVzIGFyZSB2YWxpZC4gRm9yIGRheXMgdGhhdCBkbyBub3QgZXhpc3QsXG4gKiBvciBhcmUgb3V0c2lkZSB0aGUgbWluL21heCBib3VuZHMsIHRoZSBjbG9zZXN0XG4gKiB2YWxpZCBkYXkgaXMgdXNlZC5cbiAqL1xuY29uc3QgdmFsaWRhdGVQYXJ0cyA9IChwYXJ0cywgbWluUGFydHMsIG1heFBhcnRzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBtb250aCxcbiAgICBkYXksXG4gICAgeWVhclxuICB9ID0gcGFydHM7XG4gIGNvbnN0IHBhcnRzQ29weSA9IGNsYW1wRGF0ZShPYmplY3QuYXNzaWduKHt9LCBwYXJ0cyksIG1pblBhcnRzLCBtYXhQYXJ0cyk7XG4gIGNvbnN0IG51bURheXMgPSBnZXROdW1EYXlzSW5Nb250aChtb250aCwgeWVhcik7XG4gIC8qKlxuICAgKiBJZiB0aGUgbWF4IG51bWJlciBvZiBkYXlzXG4gICAqIGlzIGdyZWF0ZXIgdGhhbiB0aGUgZGF5IHdlIHdhbnRcbiAgICogdG8gc2V0LCB1cGRhdGUgdGhlIERhdGV0aW1lUGFydHNcbiAgICogZGF5IGZpZWxkIHRvIGJlIHRoZSBtYXggZGF5cy5cbiAgICovXG4gIGlmIChkYXkgIT09IG51bGwgJiYgbnVtRGF5cyA8IGRheSkge1xuICAgIHBhcnRzQ29weS5kYXkgPSBudW1EYXlzO1xuICB9XG4gIC8qKlxuICAgKiBJZiB2YWx1ZSBpcyBzYW1lIGRheSBhcyBtaW4gZGF5LFxuICAgKiBtYWtlIHN1cmUgdGhlIHRpbWUgdmFsdWUgaXMgaW4gYm91bmRzLlxuICAgKi9cbiAgaWYgKG1pblBhcnRzICE9PSB1bmRlZmluZWQgJiYgaXNTYW1lRGF5KHBhcnRzQ29weSwgbWluUGFydHMpKSB7XG4gICAgLyoqXG4gICAgICogSWYgdGhlIGhvdXIgaXMgb3V0IG9mIGJvdW5kcyxcbiAgICAgKiB1cGRhdGUgYm90aCB0aGUgaG91ciBhbmQgbWludXRlLlxuICAgICAqIFRoaXMgaXMgZG9uZSBzbyB0aGF0IHRoZSBuZXcgdGltZVxuICAgICAqIGlzIGNsb3Nlc3QgdG8gd2hhdCB0aGUgdXNlciBzZWxlY3RlZC5cbiAgICAgKi9cbiAgICBpZiAocGFydHNDb3B5LmhvdXIgIT09IHVuZGVmaW5lZCAmJiBtaW5QYXJ0cy5ob3VyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChwYXJ0c0NvcHkuaG91ciA8IG1pblBhcnRzLmhvdXIpIHtcbiAgICAgICAgcGFydHNDb3B5LmhvdXIgPSBtaW5QYXJ0cy5ob3VyO1xuICAgICAgICBwYXJ0c0NvcHkubWludXRlID0gbWluUGFydHMubWludXRlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgb25seSB0aGUgbWludXRlIGlzIG91dCBvZiBib3VuZHMsXG4gICAgICAgICAqIHNldCBpdCB0byB0aGUgbWluIG1pbnV0ZS5cbiAgICAgICAgICovXG4gICAgICB9IGVsc2UgaWYgKHBhcnRzQ29weS5ob3VyID09PSBtaW5QYXJ0cy5ob3VyICYmIHBhcnRzQ29weS5taW51dGUgIT09IHVuZGVmaW5lZCAmJiBtaW5QYXJ0cy5taW51dGUgIT09IHVuZGVmaW5lZCAmJiBwYXJ0c0NvcHkubWludXRlIDwgbWluUGFydHMubWludXRlKSB7XG4gICAgICAgIHBhcnRzQ29weS5taW51dGUgPSBtaW5QYXJ0cy5taW51dGU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBJZiB2YWx1ZSBpcyBzYW1lIGRheSBhcyBtYXggZGF5LFxuICAgKiBtYWtlIHN1cmUgdGhlIHRpbWUgdmFsdWUgaXMgaW4gYm91bmRzLlxuICAgKi9cbiAgaWYgKG1heFBhcnRzICE9PSB1bmRlZmluZWQgJiYgaXNTYW1lRGF5KHBhcnRzLCBtYXhQYXJ0cykpIHtcbiAgICAvKipcbiAgICAgKiBJZiB0aGUgaG91ciBpcyBvdXQgb2YgYm91bmRzLFxuICAgICAqIHVwZGF0ZSBib3RoIHRoZSBob3VyIGFuZCBtaW51dGUuXG4gICAgICogVGhpcyBpcyBkb25lIHNvIHRoYXQgdGhlIG5ldyB0aW1lXG4gICAgICogaXMgY2xvc2VzdCB0byB3aGF0IHRoZSB1c2VyIHNlbGVjdGVkLlxuICAgICAqL1xuICAgIGlmIChwYXJ0c0NvcHkuaG91ciAhPT0gdW5kZWZpbmVkICYmIG1heFBhcnRzLmhvdXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHBhcnRzQ29weS5ob3VyID4gbWF4UGFydHMuaG91cikge1xuICAgICAgICBwYXJ0c0NvcHkuaG91ciA9IG1heFBhcnRzLmhvdXI7XG4gICAgICAgIHBhcnRzQ29weS5taW51dGUgPSBtYXhQYXJ0cy5taW51dGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBvbmx5IHRoZSBtaW51dGUgaXMgb3V0IG9mIGJvdW5kcyxcbiAgICAgICAgICogc2V0IGl0IHRvIHRoZSBtYXggbWludXRlLlxuICAgICAgICAgKi9cbiAgICAgIH0gZWxzZSBpZiAocGFydHNDb3B5LmhvdXIgPT09IG1heFBhcnRzLmhvdXIgJiYgcGFydHNDb3B5Lm1pbnV0ZSAhPT0gdW5kZWZpbmVkICYmIG1heFBhcnRzLm1pbnV0ZSAhPT0gdW5kZWZpbmVkICYmIHBhcnRzQ29weS5taW51dGUgPiBtYXhQYXJ0cy5taW51dGUpIHtcbiAgICAgICAgcGFydHNDb3B5Lm1pbnV0ZSA9IG1heFBhcnRzLm1pbnV0ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHBhcnRzQ29weTtcbn07XG4vKipcbiAqIFJldHVybnMgdGhlIGNsb3Nlc3QgZGF0ZSB0byByZWZQYXJ0c1xuICogdGhhdCBhbHNvIG1lZXRzIHRoZSBjb25zdHJhaW50cyBvZlxuICogdGhlICpWYWx1ZXMgcGFyYW1zLlxuICovXG5jb25zdCBnZXRDbG9zZXN0VmFsaWREYXRlID0gKHtcbiAgcmVmUGFydHMsXG4gIG1vbnRoVmFsdWVzLFxuICBkYXlWYWx1ZXMsXG4gIHllYXJWYWx1ZXMsXG4gIGhvdXJWYWx1ZXMsXG4gIG1pbnV0ZVZhbHVlcyxcbiAgbWluUGFydHMsXG4gIG1heFBhcnRzXG59KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBob3VyLFxuICAgIG1pbnV0ZSxcbiAgICBkYXksXG4gICAgbW9udGgsXG4gICAgeWVhclxuICB9ID0gcmVmUGFydHM7XG4gIGNvbnN0IGNvcHlQYXJ0cyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcmVmUGFydHMpLCB7XG4gICAgZGF5T2ZXZWVrOiB1bmRlZmluZWRcbiAgfSk7XG4gIGlmICh5ZWFyVmFsdWVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAvLyBGaWx0ZXJzIG91dCB5ZWFycyB0aGF0IGFyZSBvdXQgb2YgdGhlIG1pbi9tYXggYm91bmRzXG4gICAgY29uc3QgZmlsdGVyZWRZZWFycyA9IHllYXJWYWx1ZXMuZmlsdGVyKHllYXIgPT4ge1xuICAgICAgaWYgKG1pblBhcnRzICE9PSB1bmRlZmluZWQgJiYgeWVhciA8IG1pblBhcnRzLnllYXIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKG1heFBhcnRzICE9PSB1bmRlZmluZWQgJiYgeWVhciA+IG1heFBhcnRzLnllYXIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gICAgY29weVBhcnRzLnllYXIgPSBmaW5kQ2xvc2VzdFZhbHVlKHllYXIsIGZpbHRlcmVkWWVhcnMpO1xuICB9XG4gIGlmIChtb250aFZhbHVlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gRmlsdGVycyBvdXQgbW9udGhzIHRoYXQgYXJlIG91dCBvZiB0aGUgbWluL21heCBib3VuZHNcbiAgICBjb25zdCBmaWx0ZXJlZE1vbnRocyA9IG1vbnRoVmFsdWVzLmZpbHRlcihtb250aCA9PiB7XG4gICAgICBpZiAobWluUGFydHMgIT09IHVuZGVmaW5lZCAmJiBjb3B5UGFydHMueWVhciA9PT0gbWluUGFydHMueWVhciAmJiBtb250aCA8IG1pblBhcnRzLm1vbnRoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXhQYXJ0cyAhPT0gdW5kZWZpbmVkICYmIGNvcHlQYXJ0cy55ZWFyID09PSBtYXhQYXJ0cy55ZWFyICYmIG1vbnRoID4gbWF4UGFydHMubW9udGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gICAgY29weVBhcnRzLm1vbnRoID0gZmluZENsb3Nlc3RWYWx1ZShtb250aCwgZmlsdGVyZWRNb250aHMpO1xuICB9XG4gIC8vIERheSBpcyBudWxsYWJsZSBidXQgY2Fubm90IGJlIHVuZGVmaW5lZFxuICBpZiAoZGF5ICE9PSBudWxsICYmIGRheVZhbHVlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gRmlsdGVycyBvdXQgZGF5cyB0aGF0IGFyZSBvdXQgb2YgdGhlIG1pbi9tYXggYm91bmRzXG4gICAgY29uc3QgZmlsdGVyZWREYXlzID0gZGF5VmFsdWVzLmZpbHRlcihkYXkgPT4ge1xuICAgICAgaWYgKG1pblBhcnRzICE9PSB1bmRlZmluZWQgJiYgaXNCZWZvcmUoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjb3B5UGFydHMpLCB7XG4gICAgICAgIGRheVxuICAgICAgfSksIG1pblBhcnRzKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAobWF4UGFydHMgIT09IHVuZGVmaW5lZCAmJiBpc0FmdGVyKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY29weVBhcnRzKSwge1xuICAgICAgICBkYXlcbiAgICAgIH0pLCBtYXhQYXJ0cykpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gICAgY29weVBhcnRzLmRheSA9IGZpbmRDbG9zZXN0VmFsdWUoZGF5LCBmaWx0ZXJlZERheXMpO1xuICB9XG4gIGlmIChob3VyICE9PSB1bmRlZmluZWQgJiYgaG91clZhbHVlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gRmlsdGVycyBvdXQgaG91cnMgdGhhdCBhcmUgb3V0IG9mIHRoZSBtaW4vbWF4IGJvdW5kc1xuICAgIGNvbnN0IGZpbHRlcmVkSG91cnMgPSBob3VyVmFsdWVzLmZpbHRlcihob3VyID0+IHtcbiAgICAgIGlmICgobWluUGFydHMgPT09IG51bGwgfHwgbWluUGFydHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1pblBhcnRzLmhvdXIpICE9PSB1bmRlZmluZWQgJiYgaXNTYW1lRGF5KGNvcHlQYXJ0cywgbWluUGFydHMpICYmIGhvdXIgPCBtaW5QYXJ0cy5ob3VyKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICgobWF4UGFydHMgPT09IG51bGwgfHwgbWF4UGFydHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1heFBhcnRzLmhvdXIpICE9PSB1bmRlZmluZWQgJiYgaXNTYW1lRGF5KGNvcHlQYXJ0cywgbWF4UGFydHMpICYmIGhvdXIgPiBtYXhQYXJ0cy5ob3VyKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICAgIGNvcHlQYXJ0cy5ob3VyID0gZmluZENsb3Nlc3RWYWx1ZShob3VyLCBmaWx0ZXJlZEhvdXJzKTtcbiAgICBjb3B5UGFydHMuYW1wbSA9IHBhcnNlQW1QbShjb3B5UGFydHMuaG91cik7XG4gIH1cbiAgaWYgKG1pbnV0ZSAhPT0gdW5kZWZpbmVkICYmIG1pbnV0ZVZhbHVlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gRmlsdGVycyBvdXQgbWludXRlcyB0aGF0IGFyZSBvdXQgb2YgdGhlIG1pbi9tYXggYm91bmRzXG4gICAgY29uc3QgZmlsdGVyZWRNaW51dGVzID0gbWludXRlVmFsdWVzLmZpbHRlcihtaW51dGUgPT4ge1xuICAgICAgaWYgKChtaW5QYXJ0cyA9PT0gbnVsbCB8fCBtaW5QYXJ0cyA9PT0gdm9pZCAwID8gdm9pZCAwIDogbWluUGFydHMubWludXRlKSAhPT0gdW5kZWZpbmVkICYmIGlzU2FtZURheShjb3B5UGFydHMsIG1pblBhcnRzKSAmJiBjb3B5UGFydHMuaG91ciA9PT0gbWluUGFydHMuaG91ciAmJiBtaW51dGUgPCBtaW5QYXJ0cy5taW51dGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKChtYXhQYXJ0cyA9PT0gbnVsbCB8fCBtYXhQYXJ0cyA9PT0gdm9pZCAwID8gdm9pZCAwIDogbWF4UGFydHMubWludXRlKSAhPT0gdW5kZWZpbmVkICYmIGlzU2FtZURheShjb3B5UGFydHMsIG1heFBhcnRzKSAmJiBjb3B5UGFydHMuaG91ciA9PT0gbWF4UGFydHMuaG91ciAmJiBtaW51dGUgPiBtYXhQYXJ0cy5taW51dGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gICAgY29weVBhcnRzLm1pbnV0ZSA9IGZpbmRDbG9zZXN0VmFsdWUobWludXRlLCBmaWx0ZXJlZE1pbnV0ZXMpO1xuICB9XG4gIHJldHVybiBjb3B5UGFydHM7XG59O1xuLyoqXG4gKiBGaW5kcyB0aGUgdmFsdWUgaW4gXCJ2YWx1ZXNcIiB0aGF0IGlzXG4gKiBudW1lcmljYWxseSBjbG9zZXN0IHRvIFwicmVmZXJlbmNlXCIuXG4gKiBUaGlzIGZ1bmN0aW9uIGFzc3VtZXMgdGhhdCBcInZhbHVlc1wiIGlzXG4gKiBhbHJlYWR5IHNvcnRlZCBpbiBhc2NlbmRpbmcgb3JkZXIuXG4gKiBAcGFyYW0gcmVmZXJlbmNlIFRoZSByZWZlcmVuY2UgbnVtYmVyIHRvIHVzZVxuICogd2hlbiBmaW5kaW5nIHRoZSBjbG9zZXN0IHZhbHVlXG4gKiBAcGFyYW0gdmFsdWVzIFRoZSBhbGxvd2VkIHZhbHVlcyB0aGF0IHdpbGwgYmVcbiAqIHNlYXJjaGVkIHRvIGZpbmQgdGhlIGNsb3Nlc3QgdmFsdWUgdG8gXCJyZWZlcmVuY2VcIlxuICovXG5jb25zdCBmaW5kQ2xvc2VzdFZhbHVlID0gKHJlZmVyZW5jZSwgdmFsdWVzKSA9PiB7XG4gIGxldCBjbG9zZXN0VmFsdWUgPSB2YWx1ZXNbMF07XG4gIGxldCByYW5rID0gTWF0aC5hYnMoY2xvc2VzdFZhbHVlIC0gcmVmZXJlbmNlKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB2YWx1ZSA9IHZhbHVlc1tpXTtcbiAgICAvKipcbiAgICAgKiBUaGlzIGNvZGUgcHJpb3JpdGl6ZXMgdGhlIGZpcnN0XG4gICAgICogY2xvc2VzdCByZXN1bHQuIEdpdmVuIHR3byB2YWx1ZXNcbiAgICAgKiB3aXRoIHRoZSBzYW1lIGRpc3RhbmNlIGZyb20gcmVmZXJlbmNlLFxuICAgICAqIHRoaXMgY29kZSB3aWxsIHByaW9yaXRpemUgdGhlIHNtYWxsZXIgb2ZcbiAgICAgKiB0aGUgdHdvIHZhbHVlcy5cbiAgICAgKi9cbiAgICBjb25zdCB2YWx1ZVJhbmsgPSBNYXRoLmFicyh2YWx1ZSAtIHJlZmVyZW5jZSk7XG4gICAgaWYgKHZhbHVlUmFuayA8IHJhbmspIHtcbiAgICAgIGNsb3Nlc3RWYWx1ZSA9IHZhbHVlO1xuICAgICAgcmFuayA9IHZhbHVlUmFuaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNsb3Nlc3RWYWx1ZTtcbn07XG5jb25zdCBnZXRGb3JtYXR0ZWREYXlQZXJpb2QgPSBkYXlQZXJpb2QgPT4ge1xuICBpZiAoZGF5UGVyaW9kID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgcmV0dXJuIGRheVBlcmlvZC50b1VwcGVyQ2FzZSgpO1xufTtcbi8qKlxuICogSW5jbHVkaW5nIHRpbWUgem9uZSBvcHRpb25zIG1heSBsZWFkIHRvIHRoZSByZW5kZXJlZCB0ZXh0IHNob3dpbmcgYVxuICogZGlmZmVyZW50IHRpbWUgZnJvbSB3aGF0IHdhcyBzZWxlY3RlZCBpbiB0aGUgRGF0ZXRpbWUsIHdoaWNoIGNvdWxkIGNhdXNlXG4gKiBjb25mdXNpb24uXG4gKi9cbmNvbnN0IHN0cmlwVGltZVpvbmUgPSBmb3JtYXRPcHRpb25zID0+IHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZm9ybWF0T3B0aW9ucyksIHtcbiAgICAvKipcbiAgICAgKiBTZXR0aW5nIHRoZSB0aW1lIHpvbmUgdG8gVVRDIGVuc3VyZXMgdGhhdCB0aGUgdmFsdWUgc2hvd24gaXMgYWx3YXlzIHRoZVxuICAgICAqIHNhbWUgYXMgd2hhdCB3YXMgc2VsZWN0ZWQgYW5kIHNhZmVndWFyZHMgYWdhaW5zdCBvbGRlciBTYWZhcmkgYnVncyB3aXRoXG4gICAgICogSW50bC5EYXRlVGltZUZvcm1hdC5cbiAgICAgKi9cbiAgICB0aW1lWm9uZTogJ1VUQycsXG4gICAgLyoqXG4gICAgICogV2UgZG8gbm90IHdhbnQgdG8gZGlzcGxheSB0aGUgdGltZSB6b25lIG5hbWVcbiAgICAgKi9cbiAgICB0aW1lWm9uZU5hbWU6IHVuZGVmaW5lZFxuICB9KTtcbn07XG5jb25zdCBnZXRMb2NhbGl6ZWRUaW1lID0gKGxvY2FsZSwgcmVmUGFydHMsIGhvdXJDeWNsZSwgZm9ybWF0T3B0aW9ucyA9IHtcbiAgaG91cjogJ251bWVyaWMnLFxuICBtaW51dGU6ICdudW1lcmljJ1xufSkgPT4ge1xuICBjb25zdCB0aW1lUGFydHMgPSB7XG4gICAgaG91cjogcmVmUGFydHMuaG91cixcbiAgICBtaW51dGU6IHJlZlBhcnRzLm1pbnV0ZVxuICB9O1xuICBpZiAodGltZVBhcnRzLmhvdXIgPT09IHVuZGVmaW5lZCB8fCB0aW1lUGFydHMubWludXRlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gJ0ludmFsaWQgVGltZSc7XG4gIH1cbiAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZSwgT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdHJpcFRpbWVab25lKGZvcm1hdE9wdGlvbnMpKSwge1xuICAgIC8qKlxuICAgICAqIFdlIHVzZSBob3VyQ3ljbGUgaGVyZSBpbnN0ZWFkIG9mIGhvdXIxMiBkdWUgdG86XG4gICAgICogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MTM0NzMxNiZxPWhvdXIxMiZjYW49MlxuICAgICAqL1xuICAgIGhvdXJDeWNsZVxuICB9KSkuZm9ybWF0KG5ldyBEYXRlKGNvbnZlcnREYXRhVG9JU08oT2JqZWN0LmFzc2lnbih7XG4gICAgLyoqXG4gICAgICogSlMgdXNlcyBhIHNpbXBsaWZpZWQgSVNPIDg2MDEgZm9ybWF0IHdoaWNoIGFsbG93cyBmb3JcbiAgICAgKiBkYXRlLW9ubHkgZm9ybWF0cyBhbmQgZGF0ZS10aW1lIGZvcm1hdHMsIGJ1dCBub3RcbiAgICAgKiB0aW1lLW9ubHkgZm9ybWF0czogaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1kYXRlLXRpbWUtc3RyaW5nLWZvcm1hdFxuICAgICAqIEFzIGEgcmVzdWx0LCBkZXZlbG9wZXJzIHdobyBvbmx5IHBhc3MgYSB0aW1lIHdpbGwgZ2V0XG4gICAgICogYW4gXCJJbnZhbGlkIERhdGVcIiBlcnJvci4gVG8gYWNjb3VudCBmb3IgdGhpcywgd2UgbWFrZSBzdXJlIHRoYXRcbiAgICAgKiB5ZWFyL2RheS9tb250aCB2YWx1ZXMgYXJlIHNldCB3aGVuIHBhc3NpbmcgdG8gbmV3IERhdGUoKS5cbiAgICAgKiBUaGUgSW50bC5EYXRlVGltZUZvcm1hdCBjYWxsIGFib3ZlIG9ubHkgdXNlcyB0aGUgaG91ci9taW51dGVcbiAgICAgKiB2YWx1ZXMsIHNvIHBhc3NpbmcgdGhlc2UgZGF0ZSB2YWx1ZXMgc2hvdWxkIGhhdmUgbm8gaW1wYWN0XG4gICAgICogb24gdGhlIHRpbWUgb3V0cHV0LlxuICAgICAqL1xuICAgIHllYXI6IDIwMjMsXG4gICAgZGF5OiAxLFxuICAgIG1vbnRoOiAxXG4gIH0sIHRpbWVQYXJ0cykpICsgJ1onKSk7XG59O1xuLyoqXG4gKiBBZGRzIHBhZGRpbmcgdG8gYSB0aW1lIHZhbHVlIHNvXG4gKiB0aGF0IGl0IGlzIGFsd2F5cyAyIGRpZ2l0cy5cbiAqL1xuY29uc3QgYWRkVGltZVBhZGRpbmcgPSB2YWx1ZSA9PiB7XG4gIGNvbnN0IHZhbHVlVG9TdHJpbmcgPSB2YWx1ZS50b1N0cmluZygpO1xuICBpZiAodmFsdWVUb1N0cmluZy5sZW5ndGggPiAxKSB7XG4gICAgcmV0dXJuIHZhbHVlVG9TdHJpbmc7XG4gIH1cbiAgcmV0dXJuIGAwJHt2YWx1ZVRvU3RyaW5nfWA7XG59O1xuLyoqXG4gKiBGb3JtYXRzIDI0IGhvdXIgdGltZXMgc28gdGhhdFxuICogaXQgYWx3YXlzIGhhcyAyIGRpZ2l0cy4gRm9yXG4gKiAxMiBob3VyIHRpbWVzIGl0IGVuc3VyZXMgdGhhdFxuICogaG91ciAwIGlzIGZvcm1hdHRlZCBhcyAnMTInLlxuICovXG5jb25zdCBnZXRGb3JtYXR0ZWRIb3VyID0gKGhvdXIsIGhvdXJDeWNsZSkgPT4ge1xuICAvKipcbiAgICogTWlkbmlnaHQgZm9yIGgxMSBzdGFydHMgYXQgMDowMGFtXG4gICAqIE1pZG5pZ2h0IGZvciBoMTIgc3RhcnRzIGF0IDEyOjAwYW1cbiAgICogTWlkbmlnaHQgZm9yIGgyMyBzdGFydHMgYXQgMDA6MDBcbiAgICogTWlkbmlnaHQgZm9yIGgyNCBzdGFydHMgYXQgMjQ6MDBcbiAgICovXG4gIGlmIChob3VyID09PSAwKSB7XG4gICAgc3dpdGNoIChob3VyQ3ljbGUpIHtcbiAgICAgIGNhc2UgJ2gxMSc6XG4gICAgICAgIHJldHVybiAnMCc7XG4gICAgICBjYXNlICdoMTInOlxuICAgICAgICByZXR1cm4gJzEyJztcbiAgICAgIGNhc2UgJ2gyMyc6XG4gICAgICAgIHJldHVybiAnMDAnO1xuICAgICAgY2FzZSAnaDI0JzpcbiAgICAgICAgcmV0dXJuICcyNCc7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaG91ciBjeWNsZSBcIiR7aG91ckN5Y2xlfVwiYCk7XG4gICAgfVxuICB9XG4gIGNvbnN0IHVzZTI0SG91ciA9IGlzMjRIb3VyKGhvdXJDeWNsZSk7XG4gIC8qKlxuICAgKiBoMjMgYW5kIGgyNCB1c2UgMjQgaG91ciB0aW1lcy5cbiAgICovXG4gIGlmICh1c2UyNEhvdXIpIHtcbiAgICByZXR1cm4gYWRkVGltZVBhZGRpbmcoaG91cik7XG4gIH1cbiAgcmV0dXJuIGhvdXIudG9TdHJpbmcoKTtcbn07XG4vKipcbiAqIEdlbmVyYXRlcyBhbiBhcmlhLWxhYmVsIHRvIGJlIHJlYWQgYnkgc2NyZWVuIHJlYWRlcnNcbiAqIGdpdmVuIGEgbG9jYWwsIGEgZGF0ZSwgYW5kIHdoZXRoZXIgb3Igbm90IHRoYXQgZGF0ZSBpc1xuICogdG9kYXkncyBkYXRlLlxuICovXG5jb25zdCBnZW5lcmF0ZURheUFyaWFMYWJlbCA9IChsb2NhbGUsIHRvZGF5LCByZWZQYXJ0cykgPT4ge1xuICBpZiAocmVmUGFydHMuZGF5ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgLyoqXG4gICAqIE1NL0REL1lZWVkgd2lsbCByZXR1cm4gbWlkbmlnaHQgaW4gdGhlIHVzZXIncyB0aW1lem9uZS5cbiAgICovXG4gIGNvbnN0IGRhdGUgPSBnZXROb3JtYWxpemVkRGF0ZShyZWZQYXJ0cyk7XG4gIGNvbnN0IGxhYmVsU3RyaW5nID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCB7XG4gICAgd2Vla2RheTogJ2xvbmcnLFxuICAgIG1vbnRoOiAnbG9uZycsXG4gICAgZGF5OiAnbnVtZXJpYycsXG4gICAgdGltZVpvbmU6ICdVVEMnXG4gIH0pLmZvcm1hdChkYXRlKTtcbiAgLyoqXG4gICAqIElmIGRhdGUgaXMgdG9kYXksIHByZXBlbmQgXCJUb2RheVwiIHNvIHNjcmVlbiByZWFkZXJzIGluZGljYXRlXG4gICAqIHRoYXQgdGhlIGRhdGUgaXMgdG9kYXkuXG4gICAqL1xuICByZXR1cm4gdG9kYXkgPyBgVG9kYXksICR7bGFiZWxTdHJpbmd9YCA6IGxhYmVsU3RyaW5nO1xufTtcbi8qKlxuICogR2l2ZW4gYSBsb2NhbGUgYW5kIGEgZGF0ZSBvYmplY3QsXG4gKiByZXR1cm4gYSBmb3JtYXR0ZWQgc3RyaW5nIHRoYXQgaW5jbHVkZXNcbiAqIHRoZSBtb250aCBuYW1lIGFuZCBmdWxsIHllYXIuXG4gKiBFeGFtcGxlOiBNYXkgMjAyMVxuICovXG5jb25zdCBnZXRNb250aEFuZFllYXIgPSAobG9jYWxlLCByZWZQYXJ0cykgPT4ge1xuICBjb25zdCBkYXRlID0gZ2V0Tm9ybWFsaXplZERhdGUocmVmUGFydHMpO1xuICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCB7XG4gICAgbW9udGg6ICdsb25nJyxcbiAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgdGltZVpvbmU6ICdVVEMnXG4gIH0pLmZvcm1hdChkYXRlKTtcbn07XG4vKipcbiAqIEdpdmVuIGEgbG9jYWxlIGFuZCBhIGRhdGUgb2JqZWN0LFxuICogcmV0dXJuIGEgZm9ybWF0dGVkIHN0cmluZyB0aGF0IGluY2x1ZGVzXG4gKiB0aGUgbnVtZXJpYyBkYXkuXG4gKiBOb3RlOiBTb21lIGxhbmd1YWdlcyB3aWxsIGFkZCBsaXRlcmFsIGNoYXJhY3RlcnNcbiAqIHRvIHRoZSBlbmQuIFRoaXMgZnVuY3Rpb24gcmVtb3ZlcyB0aG9zZSBsaXRlcmFscy5cbiAqIEV4YW1wbGU6IDI5XG4gKi9cbmNvbnN0IGdldERheSA9IChsb2NhbGUsIHJlZlBhcnRzKSA9PiB7XG4gIHJldHVybiBnZXRMb2NhbGl6ZWREYXRlVGltZVBhcnRzKGxvY2FsZSwgcmVmUGFydHMsIHtcbiAgICBkYXk6ICdudW1lcmljJ1xuICB9KS5maW5kKG9iaiA9PiBvYmoudHlwZSA9PT0gJ2RheScpLnZhbHVlO1xufTtcbi8qKlxuICogR2l2ZW4gYSBsb2NhbGUgYW5kIGEgZGF0ZSBvYmplY3QsXG4gKiByZXR1cm4gYSBmb3JtYXR0ZWQgc3RyaW5nIHRoYXQgaW5jbHVkZXNcbiAqIHRoZSBudW1lcmljIHllYXIuXG4gKiBFeGFtcGxlOiAyMDIyXG4gKi9cbmNvbnN0IGdldFllYXIgPSAobG9jYWxlLCByZWZQYXJ0cykgPT4ge1xuICByZXR1cm4gZ2V0TG9jYWxpemVkRGF0ZVRpbWUobG9jYWxlLCByZWZQYXJ0cywge1xuICAgIHllYXI6ICdudW1lcmljJ1xuICB9KTtcbn07XG4vKipcbiAqIEdpdmVuIHJlZmVyZW5jZSBwYXJ0cywgcmV0dXJuIGEgSlMgRGF0ZSBvYmplY3RcbiAqIHdpdGggYSBub3JtYWxpemVkIHRpbWUuXG4gKi9cbmNvbnN0IGdldE5vcm1hbGl6ZWREYXRlID0gcmVmUGFydHMgPT4ge1xuICB2YXIgX2EsIF9iLCBfYztcbiAgY29uc3QgdGltZVN0cmluZyA9IHJlZlBhcnRzLmhvdXIgIT09IHVuZGVmaW5lZCAmJiByZWZQYXJ0cy5taW51dGUgIT09IHVuZGVmaW5lZCA/IGAgJHtyZWZQYXJ0cy5ob3VyfToke3JlZlBhcnRzLm1pbnV0ZX1gIDogJyc7XG4gIC8qKlxuICAgKiBXZSB1c2UgLyBub3RhdGlvbiBoZXJlIGZvciB0aGUgZGF0ZVxuICAgKiBzbyB3ZSBkbyBub3QgbmVlZCB0byBkbyBleHRyYSB3b3JrIGFuZCBwYWQgdmFsdWVzIHdpdGggemVyb2VzLlxuICAgKiBWYWx1ZXMgc3VjaCBhcyBZWVlZLU1NIGFyZSBzdGlsbCB2YWxpZCwgc29cbiAgICogd2UgYWRkIGZhbGxiYWNrIHZhbHVlcyBzbyB3ZSBzdGlsbCBnZXRcbiAgICogYSB2YWxpZCBkYXRlIG90aGVyd2lzZSB3ZSB3aWxsIHBhc3MgaW4gYSBzdHJpbmdcbiAgICogbGlrZSBcIi8vMjAyM1wiLiBTb21lIGJyb3dzZXJzLCBzdWNoIGFzIENocm9tZSwgd2lsbFxuICAgKiBhY2NvdW50IGZvciB0aGlzIGFuZCBzdGlsbCByZXR1cm4gYSB2YWxpZCBkYXRlLiBIb3dldmVyLFxuICAgKiB0aGlzIGlzIG5vdCBhIGNvbnNpc3RlbnQgYmVoYXZpb3IgYWNyb3NzIGFsbCBicm93c2Vycy5cbiAgICovXG4gIHJldHVybiBuZXcgRGF0ZShgJHsoX2EgPSByZWZQYXJ0cy5tb250aCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogMX0vJHsoX2IgPSByZWZQYXJ0cy5kYXkpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IDF9LyR7KF9jID0gcmVmUGFydHMueWVhcikgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDogMjAyM30ke3RpbWVTdHJpbmd9IEdNVCswMDAwYCk7XG59O1xuLyoqXG4gKiBHaXZlbiBhIGxvY2FsZSwgRGF0ZXRpbWVQYXJ0cywgYW5kIG9wdGlvbnNcbiAqIGZvcm1hdCB0aGUgRGF0ZXRpbWVQYXJ0cyBhY2NvcmRpbmcgdG8gdGhlIG9wdGlvbnNcbiAqIGFuZCBsb2NhbGUgY29tYmluYXRpb24uIFRoaXMgcmV0dXJucyBhIHN0cmluZy4gSWZcbiAqIHlvdSB3YW50IGFuIGFycmF5IG9mIHRoZSBpbmRpdmlkdWFsIHBpZWNlc1xuICogdGhhdCBtYWtlIHVwIHRoZSBsb2NhbGl6ZWQgZGF0ZSBzdHJpbmcsIHVzZVxuICogZ2V0TG9jYWxpemVkRGF0ZVRpbWVQYXJ0cy5cbiAqL1xuY29uc3QgZ2V0TG9jYWxpemVkRGF0ZVRpbWUgPSAobG9jYWxlLCByZWZQYXJ0cywgb3B0aW9ucykgPT4ge1xuICBjb25zdCBkYXRlID0gZ2V0Tm9ybWFsaXplZERhdGUocmVmUGFydHMpO1xuICByZXR1cm4gZ2V0RGF0ZVRpbWVGb3JtYXQobG9jYWxlLCBzdHJpcFRpbWVab25lKG9wdGlvbnMpKS5mb3JtYXQoZGF0ZSk7XG59O1xuLyoqXG4gKiBHaXZlbiBhIGxvY2FsZSwgRGF0ZXRpbWVQYXJ0cywgYW5kIG9wdGlvbnNcbiAqIGZvcm1hdCB0aGUgRGF0ZXRpbWVQYXJ0cyBhY2NvcmRpbmcgdG8gdGhlIG9wdGlvbnNcbiAqIGFuZCBsb2NhbGUgY29tYmluYXRpb24uIFRoaXMgcmV0dXJucyBhbiBhcnJheSBvZlxuICogZWFjaCBwaWVjZSBvZiB0aGUgZGF0ZS5cbiAqL1xuY29uc3QgZ2V0TG9jYWxpemVkRGF0ZVRpbWVQYXJ0cyA9IChsb2NhbGUsIHJlZlBhcnRzLCBvcHRpb25zKSA9PiB7XG4gIGNvbnN0IGRhdGUgPSBnZXROb3JtYWxpemVkRGF0ZShyZWZQYXJ0cyk7XG4gIHJldHVybiBnZXREYXRlVGltZUZvcm1hdChsb2NhbGUsIG9wdGlvbnMpLmZvcm1hdFRvUGFydHMoZGF0ZSk7XG59O1xuLyoqXG4gKiBXcmFwcGVyIGZ1bmN0aW9uIGZvciBJbnRsLkRhdGVUaW1lRm9ybWF0LlxuICogQWxsb3dzIGRldmVsb3BlcnMgdG8gYXBwbHkgYW4gYWxsb3dlZCBmb3JtYXQgdG8gRGF0ZXRpbWVQYXJ0cy5cbiAqIFRoaXMgZnVuY3Rpb24gYWxzbyBoYXMgYnVpbHQgaW4gc2FmZWd1YXJkcyBmb3Igb2xkZXIgYnJvd3NlciBidWdzXG4gKiB3aXRoIEludGwuRGF0ZVRpbWVGb3JtYXQuXG4gKi9cbmNvbnN0IGdldERhdGVUaW1lRm9ybWF0ID0gKGxvY2FsZSwgb3B0aW9ucykgPT4ge1xuICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpLCB7XG4gICAgdGltZVpvbmU6ICdVVEMnXG4gIH0pKTtcbn07XG4vKipcbiAqIEdldHMgYSBsb2NhbGl6ZWQgdmVyc2lvbiBvZiBcIlRvZGF5XCJcbiAqIEZhbGxzIGJhY2sgdG8gXCJUb2RheVwiIGluIEVuZ2xpc2ggZm9yXG4gKiBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IFJlbGF0aXZlVGltZUZvcm1hdC5cbiAqL1xuY29uc3QgZ2V0VG9kYXlMYWJlbCA9IGxvY2FsZSA9PiB7XG4gIGlmICgnUmVsYXRpdmVUaW1lRm9ybWF0JyBpbiBJbnRsKSB7XG4gICAgY29uc3QgbGFiZWwgPSBuZXcgSW50bC5SZWxhdGl2ZVRpbWVGb3JtYXQobG9jYWxlLCB7XG4gICAgICBudW1lcmljOiAnYXV0bydcbiAgICB9KS5mb3JtYXQoMCwgJ2RheScpO1xuICAgIHJldHVybiBsYWJlbC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGxhYmVsLnNsaWNlKDEpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAnVG9kYXknO1xuICB9XG59O1xuLyoqXG4gKiBXaGVuIGNhbGxpbmcgdG9JU09TdHJpbmcoKSwgdGhlIGJyb3dzZXJcbiAqIHdpbGwgY29udmVydCB0aGUgZGF0ZSB0byBVVEMgdGltZSBieSBlaXRoZXIgYWRkaW5nXG4gKiBvciBzdWJ0cmFjdGluZyB0aGUgdGltZSB6b25lIG9mZnNldC5cbiAqIFRvIHdvcmsgYXJvdW5kIHRoaXMsIHdlIG5lZWQgdG8gZWl0aGVyIGFkZFxuICogb3Igc3VidHJhY3QgdGhlIHRpbWUgem9uZSBvZmZzZXQgdG8gdGhlIERhdGVcbiAqIG9iamVjdCBwcmlvciB0byBjYWxsaW5nIHRvSVNPU3RyaW5nKCkuXG4gKiBUaGlzIGFsbG93cyB1cyB0byBnZXQgYW4gSVNPIHN0cmluZ1xuICogdGhhdCBpcyBpbiB0aGUgdXNlcidzIHRpbWUgem9uZS5cbiAqXG4gKiBFeGFtcGxlOlxuICogVGltZSB6b25lIG9mZnNldCBpcyAyNDBcbiAqIE1lYW5pbmc6IFRoZSBicm93c2VyIG5lZWRzIHRvIGFkZCAyNDAgbWludXRlc1xuICogdG8gdGhlIERhdGUgb2JqZWN0IHRvIGdldCBVVEMgdGltZS5cbiAqIFdoYXQgSW9uaWMgZG9lczogV2Ugc3VidHJhY3QgMjQwIG1pbnV0ZXNcbiAqIGZyb20gdGhlIERhdGUgb2JqZWN0LiBUaGUgYnJvd3NlciB0aGVuIGFkZHNcbiAqIDI0MCBtaW51dGVzIGluIHRvSVNPU3RyaW5nKCkuIFRoZSByZXN1bHRcbiAqIGlzIGEgdGltZSB0aGF0IGlzIGluIHRoZSB1c2VyJ3MgdGltZSB6b25lXG4gKiBhbmQgbm90IFVUQy5cbiAqXG4gKiBOb3RlOiBTb21lIHRpbWV6b25lcyBpbmNsdWRlIG1pbnV0ZSBhZGp1c3RtZW50c1xuICogc3VjaCBhcyAzMCBvciA0NSBtaW51dGVzLiBUaGlzIGlzIHdoeSB3ZSB1c2Ugc2V0TWludXRlc1xuICogaW5zdGVhZCBvZiBzZXRIb3Vycy5cbiAqIEV4YW1wbGU6IEluZGlhIFN0YW5kYXJkIFRpbWVcbiAqIFRpbWV6b25lIG9mZnNldDogLTMzMCA9IC01LjUgaG91cnMuXG4gKlxuICogTGlzdCBvZiB0aW1lem9uZXMgd2l0aCAzMCBhbmQgNDUgbWludXRlIHRpbWV6b25lczpcbiAqIGh0dHBzOi8vd3d3LnRpbWVhbmRkYXRlLmNvbS90aW1lL3RpbWUtem9uZXMtaW50ZXJlc3RpbmcuaHRtbFxuICovXG5jb25zdCByZW1vdmVEYXRlVHpPZmZzZXQgPSBkYXRlID0+IHtcbiAgY29uc3QgdHpPZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gIGRhdGUuc2V0TWludXRlcyhkYXRlLmdldE1pbnV0ZXMoKSAtIHR6T2Zmc2V0KTtcbiAgcmV0dXJuIGRhdGU7XG59O1xuY29uc3QgREFURV9BTSA9IHJlbW92ZURhdGVUek9mZnNldChuZXcgRGF0ZSgnMjAyMlQwMTowMCcpKTtcbmNvbnN0IERBVEVfUE0gPSByZW1vdmVEYXRlVHpPZmZzZXQobmV3IERhdGUoJzIwMjJUMTM6MDAnKSk7XG4vKipcbiAqIEZvcm1hdHMgdGhlIGxvY2FsZSdzIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgZGF5IHBlcmlvZCAoYW0vcG0pIGZvciBhIGdpdmVuXG4gKiByZWYgcGFydHMgZGF5IHBlcmlvZC5cbiAqXG4gKiBAcGFyYW0gbG9jYWxlIFRoZSBsb2NhbGUgdG8gZm9ybWF0IHRoZSBkYXkgcGVyaW9kIGluLlxuICogQHBhcmFtIHZhbHVlIFRoZSBkYXRlIHN0cmluZywgaW4gSVNPIGZvcm1hdC5cbiAqIEByZXR1cm5zIFRoZSBsb2NhbGl6ZWQgZGF5IHBlcmlvZCAoYW0vcG0pIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBnaXZlbiB2YWx1ZS5cbiAqL1xuY29uc3QgZ2V0TG9jYWxpemVkRGF5UGVyaW9kID0gKGxvY2FsZSwgZGF5UGVyaW9kKSA9PiB7XG4gIGNvbnN0IGRhdGUgPSBkYXlQZXJpb2QgPT09ICdhbScgPyBEQVRFX0FNIDogREFURV9QTTtcbiAgY29uc3QgbG9jYWxpemVkRGF5UGVyaW9kID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCB7XG4gICAgaG91cjogJ251bWVyaWMnLFxuICAgIHRpbWVab25lOiAnVVRDJ1xuICB9KS5mb3JtYXRUb1BhcnRzKGRhdGUpLmZpbmQocGFydCA9PiBwYXJ0LnR5cGUgPT09ICdkYXlQZXJpb2QnKTtcbiAgaWYgKGxvY2FsaXplZERheVBlcmlvZCkge1xuICAgIHJldHVybiBsb2NhbGl6ZWREYXlQZXJpb2QudmFsdWU7XG4gIH1cbiAgcmV0dXJuIGdldEZvcm1hdHRlZERheVBlcmlvZChkYXlQZXJpb2QpO1xufTtcbi8qKlxuICogRm9ybWF0cyB0aGUgZGF0ZXRpbWUncyB2YWx1ZSB0byBhIHN0cmluZywgZm9yIHVzZSBpbiB0aGUgbmF0aXZlIGlucHV0LlxuICpcbiAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gZm9ybWF0LCBlaXRoZXIgYW4gSVNPIHN0cmluZyBvciBhbiBhcnJheSB0aGVyZW9mLlxuICovXG5jb25zdCBmb3JtYXRWYWx1ZSA9IHZhbHVlID0+IHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUuam9pbignLCcpIDogdmFsdWU7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGN1cnJlbnQgZGF0ZSBhc1xuICogYW4gSVNPIHN0cmluZyBpbiB0aGUgdXNlcidzXG4gKiB0aW1lIHpvbmUuXG4gKi9cbmNvbnN0IGdldFRvZGF5ID0gKCkgPT4ge1xuICAvKipcbiAgICogaW9uLWRhdGV0aW1lIGludGVudGlvbmFsbHkgZG9lcyBub3RcbiAgICogcGFyc2UgdGltZSB6b25lcy9kbyBhdXRvbWF0aWMgdGltZSB6b25lXG4gICAqIGNvbnZlcnNpb24gd2hlbiBhY2NlcHRpbmcgdXNlciBpbnB1dC5cbiAgICogSG93ZXZlciB3aGVuIHdlIGdldCB0b2RheSdzIGRhdGUgc3RyaW5nLFxuICAgKiB3ZSB3YW50IGl0IGZvcm1hdHRlZCByZWxhdGl2ZSB0byB0aGUgdXNlcidzXG4gICAqIHRpbWUgem9uZS5cbiAgICpcbiAgICogV2hlbiBjYWxsaW5nIHRvSVNPU3RyaW5nKCksIHRoZSBicm93c2VyXG4gICAqIHdpbGwgY29udmVydCB0aGUgZGF0ZSB0byBVVEMgdGltZSBieSBlaXRoZXIgYWRkaW5nXG4gICAqIG9yIHN1YnRyYWN0aW5nIHRoZSB0aW1lIHpvbmUgb2Zmc2V0LlxuICAgKiBUbyB3b3JrIGFyb3VuZCB0aGlzLCB3ZSBuZWVkIHRvIGVpdGhlciBhZGRcbiAgICogb3Igc3VidHJhY3QgdGhlIHRpbWUgem9uZSBvZmZzZXQgdG8gdGhlIERhdGVcbiAgICogb2JqZWN0IHByaW9yIHRvIGNhbGxpbmcgdG9JU09TdHJpbmcoKS5cbiAgICogVGhpcyBhbGxvd3MgdXMgdG8gZ2V0IGFuIElTTyBzdHJpbmdcbiAgICogdGhhdCBpcyBpbiB0aGUgdXNlcidzIHRpbWUgem9uZS5cbiAgICovXG4gIHJldHVybiByZW1vdmVEYXRlVHpPZmZzZXQobmV3IERhdGUoKSkudG9JU09TdHJpbmcoKTtcbn07XG5jb25zdCBtaW51dGVzID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTIsIDEzLCAxNCwgMTUsIDE2LCAxNywgMTgsIDE5LCAyMCwgMjEsIDIyLCAyMywgMjQsIDI1LCAyNiwgMjcsIDI4LCAyOSwgMzAsIDMxLCAzMiwgMzMsIDM0LCAzNSwgMzYsIDM3LCAzOCwgMzksIDQwLCA0MSwgNDIsIDQzLCA0NCwgNDUsIDQ2LCA0NywgNDgsIDQ5LCA1MCwgNTEsIDUyLCA1MywgNTQsIDU1LCA1NiwgNTcsIDU4LCA1OV07XG4vLyBoMTEgaG91ciBzeXN0ZW0gdXNlcyAwLTExLiBNaWRuaWdodCBzdGFydHMgYXQgMDowMGFtLlxuY29uc3QgaG91cjExID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMV07XG4vLyBoMTIgaG91ciBzeXN0ZW0gdXNlcyAwLTEyLiBNaWRuaWdodCBzdGFydHMgYXQgMTI6MDBhbS5cbmNvbnN0IGhvdXIxMiA9IFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTFdO1xuLy8gaDIzIGhvdXIgc3lzdGVtIHVzZXMgMC0yMy4gTWlkbmlnaHQgc3RhcnRzIGF0IDA6MDAuXG5jb25zdCBob3VyMjMgPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExLCAxMiwgMTMsIDE0LCAxNSwgMTYsIDE3LCAxOCwgMTksIDIwLCAyMSwgMjIsIDIzXTtcbi8vIGgyNCBob3VyIHN5c3RlbSB1c2VzIDEtMjQuIE1pZG5pZ2h0IHN0YXJ0cyBhdCAyNDowMC5cbmNvbnN0IGhvdXIyNCA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyLCAxMywgMTQsIDE1LCAxNiwgMTcsIDE4LCAxOSwgMjAsIDIxLCAyMiwgMjMsIDBdO1xuLyoqXG4gKiBHaXZlbiBhIGxvY2FsZSBhbmQgYSBtb2RlLFxuICogcmV0dXJuIGFuIGFycmF5IHdpdGggZm9ybWF0dGVkIGRheXNcbiAqIG9mIHRoZSB3ZWVrLiBpT1Mgc2hvdWxkIGRpc3BsYXkgZGF5c1xuICogc3VjaCBhcyBcIk1vblwiIG9yIFwiVHVlXCIuXG4gKiBNRCBzaG91bGQgZGlzcGxheSBkYXlzIHN1Y2ggYXMgXCJNXCJcbiAqIG9yIFwiVFwiLlxuICovXG5jb25zdCBnZXREYXlzT2ZXZWVrID0gKGxvY2FsZSwgbW9kZSwgZmlyc3REYXlPZldlZWsgPSAwKSA9PiB7XG4gIC8qKlxuICAgKiBOb3YgMXN0LCAyMDIwIHN0YXJ0cyBvbiBhIFN1bmRheS5cbiAgICogaW9uLWRhdGV0aW1lIGFzc3VtZXMgd2Vla3Mgc3RhcnQgb24gU3VuZGF5LFxuICAgKiBidXQgaXMgY29uZmlndXJhYmxlIHZpYSBgZmlyc3REYXlPZldlZWtgLlxuICAgKi9cbiAgY29uc3Qgd2Vla2RheUZvcm1hdCA9IG1vZGUgPT09ICdpb3MnID8gJ3Nob3J0JyA6ICduYXJyb3cnO1xuICBjb25zdCBpbnRsID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCB7XG4gICAgd2Vla2RheTogd2Vla2RheUZvcm1hdFxuICB9KTtcbiAgY29uc3Qgc3RhcnREYXRlID0gbmV3IERhdGUoJzExLzAxLzIwMjAnKTtcbiAgY29uc3QgZGF5c09mV2VlayA9IFtdO1xuICAvKipcbiAgICogRm9yIGVhY2ggZGF5IG9mIHRoZSB3ZWVrLFxuICAgKiBnZXQgdGhlIGRheSBuYW1lLlxuICAgKi9cbiAgZm9yIChsZXQgaSA9IGZpcnN0RGF5T2ZXZWVrOyBpIDwgZmlyc3REYXlPZldlZWsgKyA3OyBpKyspIHtcbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKHN0YXJ0RGF0ZSk7XG4gICAgY3VycmVudERhdGUuc2V0RGF0ZShjdXJyZW50RGF0ZS5nZXREYXRlKCkgKyBpKTtcbiAgICBkYXlzT2ZXZWVrLnB1c2goaW50bC5mb3JtYXQoY3VycmVudERhdGUpKTtcbiAgfVxuICByZXR1cm4gZGF5c09mV2Vlaztcbn07XG4vKipcbiAqIFJldHVybnMgYW4gYXJyYXkgY29udGFpbmluZyBhbGwgb2YgdGhlXG4gKiBkYXlzIGluIGEgbW9udGggZm9yIGEgZ2l2ZW4geWVhci4gVmFsdWVzIGFyZVxuICogYWxpZ25lZCB3aXRoIGEgd2VlayBjYWxlbmRhciBzdGFydGluZyBvblxuICogdGhlIGZpcnN0RGF5T2ZXZWVrIHZhbHVlIChTdW5kYXkgYnkgZGVmYXVsdClcbiAqIHVzaW5nIG51bGwgdmFsdWVzLlxuICovXG5jb25zdCBnZXREYXlzT2ZNb250aCA9IChtb250aCwgeWVhciwgZmlyc3REYXlPZldlZWssIHNob3dBZGphY2VudERheXMgPSBmYWxzZSkgPT4ge1xuICBjb25zdCBudW1EYXlzID0gZ2V0TnVtRGF5c0luTW9udGgobW9udGgsIHllYXIpO1xuICBsZXQgcHJldmlvdXNOdW1EYXlzOyAvL3ByZXZpb3VzIG1vbnRoIG51bWJlciBvZiBkYXlzXG4gIGlmIChtb250aCA9PT0gMSkge1xuICAgIC8vIElmIHRoZSBjdXJyZW50IG1vbnRoIGlzIEphbnVhcnksIHRoZSBwcmV2aW91cyBtb250aCBzaG91bGQgYmUgRGVjZW1iZXIgb2YgdGhlIHByZXZpb3VzIHllYXIuXG4gICAgcHJldmlvdXNOdW1EYXlzID0gZ2V0TnVtRGF5c0luTW9udGgoMTIsIHllYXIgLSAxKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBPdGhlcndpc2UsIHRoZSBwcmV2aW91cyBtb250aCBzaG91bGQgYmUgdGhlIGN1cnJlbnQgbW9udGggLSAxIG9mIHRoZSBzYW1lIHllYXIuXG4gICAgcHJldmlvdXNOdW1EYXlzID0gZ2V0TnVtRGF5c0luTW9udGgobW9udGggLSAxLCB5ZWFyKTtcbiAgfVxuICBjb25zdCBmaXJzdE9mTW9udGggPSBuZXcgRGF0ZShgJHttb250aH0vMS8ke3llYXJ9YCkuZ2V0RGF5KCk7XG4gIC8qKlxuICAgKiBUbyBnZXQgdGhlIGZpcnN0IGRheSBvZiB0aGUgbW9udGggYWxpZ25lZCBvbiB0aGUgY29ycmVjdFxuICAgKiBkYXkgb2YgdGhlIHdlZWssIHdlIG5lZWQgdG8gZGV0ZXJtaW5lIGhvdyBtYW55IFwiZmlsbGVyXCIgZGF5c1xuICAgKiB0byBnZW5lcmF0ZS4gVGhlc2UgZmlsbGVyIGRheXMgYXMgZW1wdHkvZGlzYWJsZWQgYnV0dG9uc1xuICAgKiB0aGF0IGZpbGwgdGhlIHNwYWNlIG9mIHRoZSBkYXlzIG9mIHRoZSB3ZWVrIGJlZm9yZSB0aGUgZmlyc3RcbiAgICogb2YgdGhlIG1vbnRoLlxuICAgKlxuICAgKiBUaGVyZSBhcmUgdHdvIGNhc2VzIGhlcmU6XG4gICAqXG4gICAqIDEuIElmIGZpcnN0T2ZNb250aCA9IDQsIGZpcnN0RGF5T2ZXZWVrID0gMCB0aGVuIHRoZSBvZmZzZXRcbiAgICogaXMgKDQgLSAoMCArIDEpKSA9IDMuIFNpbmNlIHRoZSBvZmZzZXQgbG9vcCBnb2VzIGZyb20gMCB0byAzIGluY2x1c2l2ZSxcbiAgICogdGhpcyB3aWxsIGdlbmVyYXRlIDQgZmlsbGVyIGRheXMgKDAsIDEsIDIsIDMpLCBhbmQgdGhlbiBkYXkgb2Ygd2VlayA0IHdpbGwgaGF2ZVxuICAgKiB0aGUgZmlyc3QgZGF5IG9mIHRoZSBtb250aC5cbiAgICpcbiAgICogMi4gSWYgZmlyc3RPZk1vbnRoID0gMiwgZmlyc3REYXlPZldlZWsgPSA0IHRoZW4gdGhlIG9mZnNldFxuICAgKiBpcyAoNiAtICg0IC0gMikpID0gNC4gU2luY2UgdGhlIG9mZnNldCBsb29wIGdvZXMgZnJvbSAwIHRvIDQgaW5jbHVzaXZlLFxuICAgKiB0aGlzIHdpbGwgZ2VuZXJhdGUgNSBmaWxsZXIgZGF5cyAoMCwgMSwgMiwgMywgNCksIGFuZCB0aGVuIGRheSBvZiB3ZWVrIDUgd2lsbCBoYXZlXG4gICAqIHRoZSBmaXJzdCBkYXkgb2YgdGhlIG1vbnRoLlxuICAgKi9cbiAgY29uc3Qgb2Zmc2V0ID0gZmlyc3RPZk1vbnRoID49IGZpcnN0RGF5T2ZXZWVrID8gZmlyc3RPZk1vbnRoIC0gKGZpcnN0RGF5T2ZXZWVrICsgMSkgOiA2IC0gKGZpcnN0RGF5T2ZXZWVrIC0gZmlyc3RPZk1vbnRoKTtcbiAgbGV0IGRheXMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbnVtRGF5czsgaSsrKSB7XG4gICAgZGF5cy5wdXNoKHtcbiAgICAgIGRheTogaSxcbiAgICAgIGRheU9mV2VlazogKG9mZnNldCArIGkpICUgNyxcbiAgICAgIGlzQWRqYWNlbnREYXk6IGZhbHNlXG4gICAgfSk7XG4gIH1cbiAgaWYgKHNob3dBZGphY2VudERheXMpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBvZmZzZXQ7IGkrKykge1xuICAgICAgLy8gVXNpbmcgb2Zmc2V0IGNyZWF0ZSBwcmV2aW91cyBtb250aCBhZGphY2VudCBkYXksIHN0YXJ0aW5nIGZyb20gbGFzdCBkYXlcbiAgICAgIGRheXMgPSBbe1xuICAgICAgICBkYXk6IHByZXZpb3VzTnVtRGF5cyAtIGksXG4gICAgICAgIGRheU9mV2VlazogKHByZXZpb3VzTnVtRGF5cyAtIGkpICUgNyxcbiAgICAgICAgaXNBZGphY2VudERheTogdHJ1ZVxuICAgICAgfSwgLi4uZGF5c107XG4gICAgfVxuICAgIC8vIENhbGN1bGF0ZSBwb3NpdGl2ZU9mZnNldFxuICAgIC8vIFRoZSBjYWxlbmRhciB3aWxsIGRpc3BsYXkgNDIgZGF5cyAoNiByb3dzIG9mIDcgY29sdW1ucylcbiAgICAvLyBLbm93aW5nIHRoaXMgdGhlIG9mZnNldCBpcyA0MSAod2Ugc3RhcnQgYXQgaW5kZXggMClcbiAgICAvLyBtaW51cyAodGhlIHByZXZpb3VzIG9mZnNldCArIHRoZSBjdXJyZW50IG1vbnRoIGRheXMpXG4gICAgY29uc3QgcG9zaXRpdmVPZmZzZXQgPSA0MSAtIChudW1EYXlzICsgb2Zmc2V0KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvc2l0aXZlT2Zmc2V0OyBpKyspIHtcbiAgICAgIGRheXMucHVzaCh7XG4gICAgICAgIGRheTogaSArIDEsXG4gICAgICAgIGRheU9mV2VlazogKG51bURheXMgKyBvZmZzZXQgKyBpKSAlIDcsXG4gICAgICAgIGlzQWRqYWNlbnREYXk6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBvZmZzZXQ7IGkrKykge1xuICAgICAgZGF5cyA9IFt7XG4gICAgICAgIGRheTogbnVsbCxcbiAgICAgICAgZGF5T2ZXZWVrOiBudWxsLFxuICAgICAgICBpc0FkamFjZW50RGF5OiBmYWxzZVxuICAgICAgfSwgLi4uZGF5c107XG4gICAgfVxuICB9XG4gIHJldHVybiBkYXlzO1xufTtcbi8qKlxuICogUmV0dXJucyBhbiBhcnJheSBvZiBwcmUtZGVmaW5lZCBob3VyXG4gKiB2YWx1ZXMgYmFzZWQgb24gdGhlIHByb3ZpZGVkIGhvdXJDeWNsZS5cbiAqL1xuY29uc3QgZ2V0SG91ckRhdGEgPSBob3VyQ3ljbGUgPT4ge1xuICBzd2l0Y2ggKGhvdXJDeWNsZSkge1xuICAgIGNhc2UgJ2gxMSc6XG4gICAgICByZXR1cm4gaG91cjExO1xuICAgIGNhc2UgJ2gxMic6XG4gICAgICByZXR1cm4gaG91cjEyO1xuICAgIGNhc2UgJ2gyMyc6XG4gICAgICByZXR1cm4gaG91cjIzO1xuICAgIGNhc2UgJ2gyNCc6XG4gICAgICByZXR1cm4gaG91cjI0O1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaG91ciBjeWNsZSBcIiR7aG91ckN5Y2xlfVwiYCk7XG4gIH1cbn07XG4vKipcbiAqIEdpdmVuIGEgbG9jYWwsIHJlZmVyZW5jZSBkYXRldGltZSBwYXJ0cyBhbmQgb3B0aW9uXG4gKiBtYXgvbWluIGJvdW5kIGRhdGV0aW1lIHBhcnRzLCBjYWxjdWxhdGUgdGhlIGFjY2VwdGFibGVcbiAqIGhvdXIgYW5kIG1pbnV0ZSB2YWx1ZXMgYWNjb3JkaW5nIHRvIHRoZSBib3VuZHMgYW5kIGxvY2FsZS5cbiAqL1xuY29uc3QgZ2VuZXJhdGVUaW1lID0gKGxvY2FsZSwgcmVmUGFydHMsIGhvdXJDeWNsZSA9ICdoMTInLCBtaW5QYXJ0cywgbWF4UGFydHMsIGhvdXJWYWx1ZXMsIG1pbnV0ZVZhbHVlcykgPT4ge1xuICBjb25zdCBjb21wdXRlZEhvdXJDeWNsZSA9IGdldEhvdXJDeWNsZShsb2NhbGUsIGhvdXJDeWNsZSk7XG4gIGNvbnN0IHVzZTI0SG91ciA9IGlzMjRIb3VyKGNvbXB1dGVkSG91ckN5Y2xlKTtcbiAgbGV0IHByb2Nlc3NlZEhvdXJzID0gZ2V0SG91ckRhdGEoY29tcHV0ZWRIb3VyQ3ljbGUpO1xuICBsZXQgcHJvY2Vzc2VkTWludXRlcyA9IG1pbnV0ZXM7XG4gIGxldCBpc0FNQWxsb3dlZCA9IHRydWU7XG4gIGxldCBpc1BNQWxsb3dlZCA9IHRydWU7XG4gIGlmIChob3VyVmFsdWVzKSB7XG4gICAgcHJvY2Vzc2VkSG91cnMgPSBwcm9jZXNzZWRIb3Vycy5maWx0ZXIoaG91ciA9PiBob3VyVmFsdWVzLmluY2x1ZGVzKGhvdXIpKTtcbiAgfVxuICBpZiAobWludXRlVmFsdWVzKSB7XG4gICAgcHJvY2Vzc2VkTWludXRlcyA9IHByb2Nlc3NlZE1pbnV0ZXMuZmlsdGVyKG1pbnV0ZSA9PiBtaW51dGVWYWx1ZXMuaW5jbHVkZXMobWludXRlKSk7XG4gIH1cbiAgaWYgKG1pblBhcnRzKSB7XG4gICAgLyoqXG4gICAgICogSWYgcmVmIGRheSBpcyB0aGUgc2FtZSBhcyB0aGVcbiAgICAgKiBtaW5pbXVtIGFsbG93ZWQgZGF5LCBmaWx0ZXIgaG91ci9taW51dGVcbiAgICAgKiB2YWx1ZXMgYWNjb3JkaW5nIHRvIG1pbiBob3VyIGFuZCBtaW51dGUuXG4gICAgICovXG4gICAgaWYgKGlzU2FtZURheShyZWZQYXJ0cywgbWluUGFydHMpKSB7XG4gICAgICAvKipcbiAgICAgICAqIFVzZXJzIG1heSBub3QgYWx3YXlzIHNldCB0aGUgaG91ci9taW51dGUgZm9yXG4gICAgICAgKiBtaW4gdmFsdWUgKGkuZS4gMjAyMS0wNi0wMikgc28gd2Ugc2hvdWxkIGFsbG93XG4gICAgICAgKiBhbGwgaG91cnMvbWludXRlcyBpbiB0aGF0IGNhc2UuXG4gICAgICAgKi9cbiAgICAgIGlmIChtaW5QYXJ0cy5ob3VyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJvY2Vzc2VkSG91cnMgPSBwcm9jZXNzZWRIb3Vycy5maWx0ZXIoaG91ciA9PiB7XG4gICAgICAgICAgY29uc3QgY29udmVydGVkSG91ciA9IHJlZlBhcnRzLmFtcG0gPT09ICdwbScgPyAoaG91ciArIDEyKSAlIDI0IDogaG91cjtcbiAgICAgICAgICByZXR1cm4gKHVzZTI0SG91ciA/IGhvdXIgOiBjb252ZXJ0ZWRIb3VyKSA+PSBtaW5QYXJ0cy5ob3VyO1xuICAgICAgICB9KTtcbiAgICAgICAgaXNBTUFsbG93ZWQgPSBtaW5QYXJ0cy5ob3VyIDwgMTM7XG4gICAgICB9XG4gICAgICBpZiAobWluUGFydHMubWludXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBtaW5pbXVtIG1pbnV0ZSByYW5nZSBzaG91bGQgbm90IGJlIGVuZm9yY2VkIHdoZW5cbiAgICAgICAgICogdGhlIGhvdXIgaXMgZ3JlYXRlciB0aGFuIHRoZSBtaW4gaG91ci5cbiAgICAgICAgICpcbiAgICAgICAgICogRm9yIGV4YW1wbGUgd2l0aCBhIG1pbmltdW0gcmFuZ2Ugb2YgMDk6MzAsIHVzZXJzXG4gICAgICAgICAqIHNob3VsZCBiZSBhYmxlIHRvIHNlbGVjdCAxMDowMC0xMDoyOSBhbmQgYmV5b25kLlxuICAgICAgICAgKi9cbiAgICAgICAgbGV0IGlzUGFzdE1pbkhvdXIgPSBmYWxzZTtcbiAgICAgICAgaWYgKG1pblBhcnRzLmhvdXIgIT09IHVuZGVmaW5lZCAmJiByZWZQYXJ0cy5ob3VyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAocmVmUGFydHMuaG91ciA+IG1pblBhcnRzLmhvdXIpIHtcbiAgICAgICAgICAgIGlzUGFzdE1pbkhvdXIgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwcm9jZXNzZWRNaW51dGVzID0gcHJvY2Vzc2VkTWludXRlcy5maWx0ZXIobWludXRlID0+IHtcbiAgICAgICAgICBpZiAoaXNQYXN0TWluSG91cikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBtaW51dGUgPj0gbWluUGFydHMubWludXRlO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogSWYgcmVmIGRheSBpcyBiZWZvcmUgbWluaW11bVxuICAgICAgICogZGF5IGRvIG5vdCByZW5kZXIgYW55IGhvdXJzL21pbnV0ZSB2YWx1ZXNcbiAgICAgICAqL1xuICAgIH0gZWxzZSBpZiAoaXNCZWZvcmUocmVmUGFydHMsIG1pblBhcnRzKSkge1xuICAgICAgcHJvY2Vzc2VkSG91cnMgPSBbXTtcbiAgICAgIHByb2Nlc3NlZE1pbnV0ZXMgPSBbXTtcbiAgICAgIGlzQU1BbGxvd2VkID0gaXNQTUFsbG93ZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgaWYgKG1heFBhcnRzKSB7XG4gICAgLyoqXG4gICAgICogSWYgcmVmIGRheSBpcyB0aGUgc2FtZSBhcyB0aGVcbiAgICAgKiBtYXhpbXVtIGFsbG93ZWQgZGF5LCBmaWx0ZXIgaG91ci9taW51dGVcbiAgICAgKiB2YWx1ZXMgYWNjb3JkaW5nIHRvIG1heCBob3VyIGFuZCBtaW51dGUuXG4gICAgICovXG4gICAgaWYgKGlzU2FtZURheShyZWZQYXJ0cywgbWF4UGFydHMpKSB7XG4gICAgICAvKipcbiAgICAgICAqIFVzZXJzIG1heSBub3QgYWx3YXlzIHNldCB0aGUgaG91ci9taW51dGUgZm9yXG4gICAgICAgKiBtYXggdmFsdWUgKGkuZS4gMjAyMS0wNi0wMikgc28gd2Ugc2hvdWxkIGFsbG93XG4gICAgICAgKiBhbGwgaG91cnMvbWludXRlcyBpbiB0aGF0IGNhc2UuXG4gICAgICAgKi9cbiAgICAgIGlmIChtYXhQYXJ0cy5ob3VyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJvY2Vzc2VkSG91cnMgPSBwcm9jZXNzZWRIb3Vycy5maWx0ZXIoaG91ciA9PiB7XG4gICAgICAgICAgY29uc3QgY29udmVydGVkSG91ciA9IHJlZlBhcnRzLmFtcG0gPT09ICdwbScgPyAoaG91ciArIDEyKSAlIDI0IDogaG91cjtcbiAgICAgICAgICByZXR1cm4gKHVzZTI0SG91ciA/IGhvdXIgOiBjb252ZXJ0ZWRIb3VyKSA8PSBtYXhQYXJ0cy5ob3VyO1xuICAgICAgICB9KTtcbiAgICAgICAgaXNQTUFsbG93ZWQgPSBtYXhQYXJ0cy5ob3VyID49IDEyO1xuICAgICAgfVxuICAgICAgaWYgKG1heFBhcnRzLm1pbnV0ZSAhPT0gdW5kZWZpbmVkICYmIHJlZlBhcnRzLmhvdXIgPT09IG1heFBhcnRzLmhvdXIpIHtcbiAgICAgICAgLy8gVGhlIGF2YWlsYWJsZSBtaW51dGVzIHNob3VsZCBvbmx5IGJlIGZpbHRlcmVkIHdoZW4gdGhlIGhvdXIgaXMgdGhlIHNhbWUgYXMgdGhlIG1heCBob3VyLlxuICAgICAgICAvLyBGb3IgZXhhbXBsZSBpZiB0aGUgbWF4IGhvdXIgaXMgMTA6MzAgYW5kIHRoZSBjdXJyZW50IGhvdXIgaXMgMTA6MDAsXG4gICAgICAgIC8vIHVzZXJzIHNob3VsZCBiZSBhYmxlIHRvIHNlbGVjdCAwMC0zMCBtaW51dGVzLlxuICAgICAgICAvLyBJZiB0aGUgY3VycmVudCBob3VyIGlzIDA5OjAwLCB1c2VycyBzaG91bGQgYmUgYWJsZSB0byBzZWxlY3QgMDAtNjAgbWludXRlcy5cbiAgICAgICAgcHJvY2Vzc2VkTWludXRlcyA9IHByb2Nlc3NlZE1pbnV0ZXMuZmlsdGVyKG1pbnV0ZSA9PiBtaW51dGUgPD0gbWF4UGFydHMubWludXRlKTtcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogSWYgcmVmIGRheSBpcyBhZnRlciBtaW5pbXVtXG4gICAgICAgKiBkYXkgZG8gbm90IHJlbmRlciBhbnkgaG91cnMvbWludXRlIHZhbHVlc1xuICAgICAgICovXG4gICAgfSBlbHNlIGlmIChpc0FmdGVyKHJlZlBhcnRzLCBtYXhQYXJ0cykpIHtcbiAgICAgIHByb2Nlc3NlZEhvdXJzID0gW107XG4gICAgICBwcm9jZXNzZWRNaW51dGVzID0gW107XG4gICAgICBpc0FNQWxsb3dlZCA9IGlzUE1BbGxvd2VkID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgaG91cnM6IHByb2Nlc3NlZEhvdXJzLFxuICAgIG1pbnV0ZXM6IHByb2Nlc3NlZE1pbnV0ZXMsXG4gICAgYW06IGlzQU1BbGxvd2VkLFxuICAgIHBtOiBpc1BNQWxsb3dlZFxuICB9O1xufTtcbi8qKlxuICogR2l2ZW4gRGF0ZXRpbWVQYXJ0cywgZ2VuZXJhdGUgdGhlIHByZXZpb3VzLFxuICogY3VycmVudCwgYW5kIGFuZCBuZXh0IG1vbnRocy5cbiAqL1xuY29uc3QgZ2VuZXJhdGVNb250aHMgPSAocmVmUGFydHMsIGZvcmNlZERhdGUpID0+IHtcbiAgY29uc3QgY3VycmVudCA9IHtcbiAgICBtb250aDogcmVmUGFydHMubW9udGgsXG4gICAgeWVhcjogcmVmUGFydHMueWVhcixcbiAgICBkYXk6IHJlZlBhcnRzLmRheVxuICB9O1xuICAvKipcbiAgICogSWYgd2UncmUgZm9yY2luZyBhIG1vbnRoIHRvIGFwcGVhciwgYW5kIGl0J3MgZGlmZmVyZW50IGZyb20gdGhlIGN1cnJlbnQgbW9udGgsXG4gICAqIGVuc3VyZSBpdCBhcHBlYXJzIGJ5IHJlcGxhY2luZyB0aGUgbmV4dCBvciBwcmV2aW91cyBtb250aCBhcyBhcHByb3ByaWF0ZS5cbiAgICovXG4gIGlmIChmb3JjZWREYXRlICE9PSB1bmRlZmluZWQgJiYgKHJlZlBhcnRzLm1vbnRoICE9PSBmb3JjZWREYXRlLm1vbnRoIHx8IHJlZlBhcnRzLnllYXIgIT09IGZvcmNlZERhdGUueWVhcikpIHtcbiAgICBjb25zdCBmb3JjZWQgPSB7XG4gICAgICBtb250aDogZm9yY2VkRGF0ZS5tb250aCxcbiAgICAgIHllYXI6IGZvcmNlZERhdGUueWVhcixcbiAgICAgIGRheTogZm9yY2VkRGF0ZS5kYXlcbiAgICB9O1xuICAgIGNvbnN0IGZvcmNlZE1vbnRoSXNCZWZvcmUgPSBpc0JlZm9yZShmb3JjZWQsIGN1cnJlbnQpO1xuICAgIHJldHVybiBmb3JjZWRNb250aElzQmVmb3JlID8gW2ZvcmNlZCwgY3VycmVudCwgZ2V0TmV4dE1vbnRoKHJlZlBhcnRzKV0gOiBbZ2V0UHJldmlvdXNNb250aChyZWZQYXJ0cyksIGN1cnJlbnQsIGZvcmNlZF07XG4gIH1cbiAgcmV0dXJuIFtnZXRQcmV2aW91c01vbnRoKHJlZlBhcnRzKSwgY3VycmVudCwgZ2V0TmV4dE1vbnRoKHJlZlBhcnRzKV07XG59O1xuY29uc3QgZ2V0TW9udGhDb2x1bW5EYXRhID0gKGxvY2FsZSwgcmVmUGFydHMsIG1pblBhcnRzLCBtYXhQYXJ0cywgbW9udGhWYWx1ZXMsIGZvcm1hdE9wdGlvbnMgPSB7XG4gIG1vbnRoOiAnbG9uZydcbn0pID0+IHtcbiAgY29uc3Qge1xuICAgIHllYXJcbiAgfSA9IHJlZlBhcnRzO1xuICBjb25zdCBtb250aHMgPSBbXTtcbiAgaWYgKG1vbnRoVmFsdWVzICE9PSB1bmRlZmluZWQpIHtcbiAgICBsZXQgcHJvY2Vzc2VkTW9udGhzID0gbW9udGhWYWx1ZXM7XG4gICAgaWYgKChtYXhQYXJ0cyA9PT0gbnVsbCB8fCBtYXhQYXJ0cyA9PT0gdm9pZCAwID8gdm9pZCAwIDogbWF4UGFydHMubW9udGgpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHByb2Nlc3NlZE1vbnRocyA9IHByb2Nlc3NlZE1vbnRocy5maWx0ZXIobW9udGggPT4gbW9udGggPD0gbWF4UGFydHMubW9udGgpO1xuICAgIH1cbiAgICBpZiAoKG1pblBhcnRzID09PSBudWxsIHx8IG1pblBhcnRzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtaW5QYXJ0cy5tb250aCkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcHJvY2Vzc2VkTW9udGhzID0gcHJvY2Vzc2VkTW9udGhzLmZpbHRlcihtb250aCA9PiBtb250aCA+PSBtaW5QYXJ0cy5tb250aCk7XG4gICAgfVxuICAgIHByb2Nlc3NlZE1vbnRocy5mb3JFYWNoKHByb2Nlc3NlZE1vbnRoID0+IHtcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShgJHtwcm9jZXNzZWRNb250aH0vMS8ke3llYXJ9IEdNVCswMDAwYCk7XG4gICAgICBjb25zdCBtb250aFN0cmluZyA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZSwgT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBmb3JtYXRPcHRpb25zKSwge1xuICAgICAgICB0aW1lWm9uZTogJ1VUQydcbiAgICAgIH0pKS5mb3JtYXQoZGF0ZSk7XG4gICAgICBtb250aHMucHVzaCh7XG4gICAgICAgIHRleHQ6IG1vbnRoU3RyaW5nLFxuICAgICAgICB2YWx1ZTogcHJvY2Vzc2VkTW9udGhcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG1heE1vbnRoID0gbWF4UGFydHMgJiYgbWF4UGFydHMueWVhciA9PT0geWVhciA/IG1heFBhcnRzLm1vbnRoIDogMTI7XG4gICAgY29uc3QgbWluTW9udGggPSBtaW5QYXJ0cyAmJiBtaW5QYXJ0cy55ZWFyID09PSB5ZWFyID8gbWluUGFydHMubW9udGggOiAxO1xuICAgIGZvciAobGV0IGkgPSBtaW5Nb250aDsgaSA8PSBtYXhNb250aDsgaSsrKSB7XG4gICAgICAvKipcbiAgICAgICAqXG4gICAgICAgKiBUaGVyZSBpcyBhIGJ1ZyBvbiBpT1MgMTQgd2hlcmVcbiAgICAgICAqIEludGwuRGF0ZVRpbWVGb3JtYXQgdGFrZXMgaW50byBhY2NvdW50XG4gICAgICAgKiB0aGUgbG9jYWwgdGltZXpvbmUgb2Zmc2V0IHdoZW4gZm9ybWF0dGluZyBkYXRlcy5cbiAgICAgICAqXG4gICAgICAgKiBGb3JjaW5nIHRoZSB0aW1lem9uZSB0byAnVVRDJyBmaXhlcyB0aGUgaXNzdWUuIEhvd2V2ZXIsXG4gICAgICAgKiB3ZSBzaG91bGQga2VlcCB0aGlzIHdvcmthcm91bmQgYXMgaXQgaXMgc2FmZXIuIEluIHRoZSBldmVudFxuICAgICAgICogdGhpcyBicmVha3MgaW4gYW5vdGhlciBicm93c2VyLCB3ZSB3aWxsIG5vdCBiZSBpbXBhY3RlZFxuICAgICAgICogYmVjYXVzZSBhbGwgZGF0ZXMgd2lsbCBiZSBpbnRlcnByZXRlZCBpbiBVVEMuXG4gICAgICAgKlxuICAgICAgICogRXhhbXBsZTpcbiAgICAgICAqIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdlbi1VUycsIHsgbW9udGg6ICdsb25nJyB9KS5mb3JtYXQobmV3IERhdGUoJ1NhdCBBcHIgMDEgMjAwNiAwMDowMDowMCBHTVQtMDQwMCAoRURUKScpKSAvLyBcIk1hcmNoXCJcbiAgICAgICAqIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdlbi1VUycsIHsgbW9udGg6ICdsb25nJywgdGltZVpvbmU6ICdVVEMnIH0pLmZvcm1hdChuZXcgRGF0ZSgnU2F0IEFwciAwMSAyMDA2IDAwOjAwOjAwIEdNVC0wNDAwIChFRFQpJykpIC8vIFwiQXByaWxcIlxuICAgICAgICpcbiAgICAgICAqIEluIGNlcnRhaW4gdGltZXpvbmVzLCBpT1MgMTQgc2hvd3MgdGhlIHdyb25nXG4gICAgICAgKiBkYXRlIGZvciAudG9VVENTdHJpbmcoKS4gVG8gY29tYmF0IHRoaXMsIHdlXG4gICAgICAgKiBmb3JjZSBhbGwgb2YgdGhlIHRpbWV6b25lcyB0byBHTVQrMDAwMCAoVVRDKS5cbiAgICAgICAqXG4gICAgICAgKiBFeGFtcGxlOlxuICAgICAgICogVGltZSBab25lOiBDZW50cmFsIEV1cm9wZWFuIFN0YW5kYXJkIFRpbWVcbiAgICAgICAqIG5ldyBEYXRlKCcxLzEvMTk5MicpLnRvVVRDU3RyaW5nKCkgLy8gXCJUdWUsIDMxIERlYyAxOTkxIDIzOjAwOjAwIEdNVFwiXG4gICAgICAgKiBuZXcgRGF0ZSgnMS8xLzE5OTIgR01UKzAwMDAnKS50b1VUQ1N0cmluZygpIC8vIFwiV2VkLCAwMSBKYW4gMTk5MiAwMDowMDowMCBHTVRcIlxuICAgICAgICovXG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoYCR7aX0vMS8ke3llYXJ9IEdNVCswMDAwYCk7XG4gICAgICBjb25zdCBtb250aFN0cmluZyA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZSwgT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBmb3JtYXRPcHRpb25zKSwge1xuICAgICAgICB0aW1lWm9uZTogJ1VUQydcbiAgICAgIH0pKS5mb3JtYXQoZGF0ZSk7XG4gICAgICBtb250aHMucHVzaCh7XG4gICAgICAgIHRleHQ6IG1vbnRoU3RyaW5nLFxuICAgICAgICB2YWx1ZTogaVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBtb250aHM7XG59O1xuLyoqXG4gKiBSZXR1cm5zIGluZm9ybWF0aW9uIHJlZ2FyZGluZ1xuICogc2VsZWN0YWJsZSBkYXRlcyAoaS5lIDFzdCwgMm5kLCAzcmQsIGV0YylcbiAqIHdpdGhpbiBhIHJlZmVyZW5jZSBtb250aC5cbiAqIEBwYXJhbSBsb2NhbGUgVGhlIGxvY2FsZSB0byBmb3JtYXQgdGhlIGRhdGUgd2l0aFxuICogQHBhcmFtIHJlZlBhcnRzIFRoZSByZWZlcmVuY2UgbW9udGgveWVhciB0byBnZW5lcmF0ZSBkYXRlcyBmb3JcbiAqIEBwYXJhbSBtaW5QYXJ0cyBUaGUgbWluaW11bSBib3VuZCBvbiB0aGUgZGF0ZSB0aGF0IGNhbiBiZSByZXR1cm5lZFxuICogQHBhcmFtIG1heFBhcnRzIFRoZSBtYXhpbXVtIGJvdW5kIG9uIHRoZSBkYXRlIHRoYXQgY2FuIGJlIHJldHVybmVkXG4gKiBAcGFyYW0gZGF5VmFsdWVzIFRoZSBhbGxvd2VkIGRhdGUgdmFsdWVzXG4gKiBAcmV0dXJucyBEYXRlIGRhdGEgdG8gYmUgdXNlZCBpbiBpb24tcGlja2VyLWNvbHVtblxuICovXG5jb25zdCBnZXREYXlDb2x1bW5EYXRhID0gKGxvY2FsZSwgcmVmUGFydHMsIG1pblBhcnRzLCBtYXhQYXJ0cywgZGF5VmFsdWVzLCBmb3JtYXRPcHRpb25zID0ge1xuICBkYXk6ICdudW1lcmljJ1xufSkgPT4ge1xuICBjb25zdCB7XG4gICAgbW9udGgsXG4gICAgeWVhclxuICB9ID0gcmVmUGFydHM7XG4gIGNvbnN0IGRheXMgPSBbXTtcbiAgLyoqXG4gICAqIElmIHdlIGhhdmUgbWF4L21pbiBib3VuZHMgdGhhdCBpbiB0aGUgc2FtZVxuICAgKiBtb250aC95ZWFyIGFzIHRoZSByZWZQYXJ0cywgd2Ugc2hvdWxkXG4gICAqIHVzZSB0aGUgZGVmaW5lIGRheSBhcyB0aGUgbWF4L21pbiBkYXkuXG4gICAqIE90aGVyd2lzZSwgZmFsbGJhY2sgdG8gdGhlIG1heC9taW4gZGF5cyBpbiBhIG1vbnRoLlxuICAgKi9cbiAgY29uc3QgbnVtRGF5c0luTW9udGggPSBnZXROdW1EYXlzSW5Nb250aChtb250aCwgeWVhcik7XG4gIGNvbnN0IG1heERheSA9IChtYXhQYXJ0cyA9PT0gbnVsbCB8fCBtYXhQYXJ0cyA9PT0gdm9pZCAwID8gdm9pZCAwIDogbWF4UGFydHMuZGF5KSAhPT0gbnVsbCAmJiAobWF4UGFydHMgPT09IG51bGwgfHwgbWF4UGFydHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1heFBhcnRzLmRheSkgIT09IHVuZGVmaW5lZCAmJiBtYXhQYXJ0cy55ZWFyID09PSB5ZWFyICYmIG1heFBhcnRzLm1vbnRoID09PSBtb250aCA/IG1heFBhcnRzLmRheSA6IG51bURheXNJbk1vbnRoO1xuICBjb25zdCBtaW5EYXkgPSAobWluUGFydHMgPT09IG51bGwgfHwgbWluUGFydHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1pblBhcnRzLmRheSkgIT09IG51bGwgJiYgKG1pblBhcnRzID09PSBudWxsIHx8IG1pblBhcnRzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtaW5QYXJ0cy5kYXkpICE9PSB1bmRlZmluZWQgJiYgbWluUGFydHMueWVhciA9PT0geWVhciAmJiBtaW5QYXJ0cy5tb250aCA9PT0gbW9udGggPyBtaW5QYXJ0cy5kYXkgOiAxO1xuICBpZiAoZGF5VmFsdWVzICE9PSB1bmRlZmluZWQpIHtcbiAgICBsZXQgcHJvY2Vzc2VkRGF5cyA9IGRheVZhbHVlcztcbiAgICBwcm9jZXNzZWREYXlzID0gcHJvY2Vzc2VkRGF5cy5maWx0ZXIoZGF5ID0+IGRheSA+PSBtaW5EYXkgJiYgZGF5IDw9IG1heERheSk7XG4gICAgcHJvY2Vzc2VkRGF5cy5mb3JFYWNoKHByb2Nlc3NlZERheSA9PiB7XG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoYCR7bW9udGh9LyR7cHJvY2Vzc2VkRGF5fS8ke3llYXJ9IEdNVCswMDAwYCk7XG4gICAgICBjb25zdCBkYXlTdHJpbmcgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2NhbGUsIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZm9ybWF0T3B0aW9ucyksIHtcbiAgICAgICAgdGltZVpvbmU6ICdVVEMnXG4gICAgICB9KSkuZm9ybWF0KGRhdGUpO1xuICAgICAgZGF5cy5wdXNoKHtcbiAgICAgICAgdGV4dDogZGF5U3RyaW5nLFxuICAgICAgICB2YWx1ZTogcHJvY2Vzc2VkRGF5XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBpID0gbWluRGF5OyBpIDw9IG1heERheTsgaSsrKSB7XG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoYCR7bW9udGh9LyR7aX0vJHt5ZWFyfSBHTVQrMDAwMGApO1xuICAgICAgY29uc3QgZGF5U3RyaW5nID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGZvcm1hdE9wdGlvbnMpLCB7XG4gICAgICAgIHRpbWVab25lOiAnVVRDJ1xuICAgICAgfSkpLmZvcm1hdChkYXRlKTtcbiAgICAgIGRheXMucHVzaCh7XG4gICAgICAgIHRleHQ6IGRheVN0cmluZyxcbiAgICAgICAgdmFsdWU6IGlcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGF5cztcbn07XG5jb25zdCBnZXRZZWFyQ29sdW1uRGF0YSA9IChsb2NhbGUsIHJlZlBhcnRzLCBtaW5QYXJ0cywgbWF4UGFydHMsIHllYXJWYWx1ZXMpID0+IHtcbiAgdmFyIF9hLCBfYjtcbiAgbGV0IHByb2Nlc3NlZFllYXJzID0gW107XG4gIGlmICh5ZWFyVmFsdWVzICE9PSB1bmRlZmluZWQpIHtcbiAgICBwcm9jZXNzZWRZZWFycyA9IHllYXJWYWx1ZXM7XG4gICAgaWYgKChtYXhQYXJ0cyA9PT0gbnVsbCB8fCBtYXhQYXJ0cyA9PT0gdm9pZCAwID8gdm9pZCAwIDogbWF4UGFydHMueWVhcikgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcHJvY2Vzc2VkWWVhcnMgPSBwcm9jZXNzZWRZZWFycy5maWx0ZXIoeWVhciA9PiB5ZWFyIDw9IG1heFBhcnRzLnllYXIpO1xuICAgIH1cbiAgICBpZiAoKG1pblBhcnRzID09PSBudWxsIHx8IG1pblBhcnRzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtaW5QYXJ0cy55ZWFyKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwcm9jZXNzZWRZZWFycyA9IHByb2Nlc3NlZFllYXJzLmZpbHRlcih5ZWFyID0+IHllYXIgPj0gbWluUGFydHMueWVhcik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHtcbiAgICAgIHllYXJcbiAgICB9ID0gcmVmUGFydHM7XG4gICAgY29uc3QgbWF4WWVhciA9IChfYSA9IG1heFBhcnRzID09PSBudWxsIHx8IG1heFBhcnRzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtYXhQYXJ0cy55ZWFyKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiB5ZWFyO1xuICAgIGNvbnN0IG1pblllYXIgPSAoX2IgPSBtaW5QYXJ0cyA9PT0gbnVsbCB8fCBtaW5QYXJ0cyA9PT0gdm9pZCAwID8gdm9pZCAwIDogbWluUGFydHMueWVhcikgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogeWVhciAtIDEwMDtcbiAgICBmb3IgKGxldCBpID0gbWluWWVhcjsgaSA8PSBtYXhZZWFyOyBpKyspIHtcbiAgICAgIHByb2Nlc3NlZFllYXJzLnB1c2goaSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBwcm9jZXNzZWRZZWFycy5tYXAoeWVhciA9PiAoe1xuICAgIHRleHQ6IGdldFllYXIobG9jYWxlLCB7XG4gICAgICB5ZWFyLFxuICAgICAgbW9udGg6IHJlZlBhcnRzLm1vbnRoLFxuICAgICAgZGF5OiByZWZQYXJ0cy5kYXlcbiAgICB9KSxcbiAgICB2YWx1ZTogeWVhclxuICB9KSk7XG59O1xuLyoqXG4gKiBHaXZlbiBhIHN0YXJ0aW5nIGRhdGUgYW5kIGFuIHVwcGVyIGJvdW5kLFxuICogdGhpcyBmdW5jdGlvbnMgcmV0dXJucyBhbiBhcnJheSBvZiBhbGxcbiAqIG1vbnRoIG9iamVjdHMgaW4gdGhhdCByYW5nZS5cbiAqL1xuY29uc3QgZ2V0QWxsTW9udGhzSW5SYW5nZSA9IChjdXJyZW50UGFydHMsIG1heFBhcnRzKSA9PiB7XG4gIGlmIChjdXJyZW50UGFydHMubW9udGggPT09IG1heFBhcnRzLm1vbnRoICYmIGN1cnJlbnRQYXJ0cy55ZWFyID09PSBtYXhQYXJ0cy55ZWFyKSB7XG4gICAgcmV0dXJuIFtjdXJyZW50UGFydHNdO1xuICB9XG4gIHJldHVybiBbY3VycmVudFBhcnRzLCAuLi5nZXRBbGxNb250aHNJblJhbmdlKGdldE5leHRNb250aChjdXJyZW50UGFydHMpLCBtYXhQYXJ0cyldO1xufTtcbi8qKlxuICogQ3JlYXRlcyBhbmQgcmV0dXJucyBwaWNrZXIgaXRlbXNcbiAqIHRoYXQgcmVwcmVzZW50IHRoZSBkYXlzIGluIGEgbW9udGguXG4gKiBFeGFtcGxlOiBcIlRodSwgSnVuIDJcIlxuICovXG5jb25zdCBnZXRDb21iaW5lZERhdGVDb2x1bW5EYXRhID0gKGxvY2FsZSwgdG9kYXlQYXJ0cywgbWluUGFydHMsIG1heFBhcnRzLCBkYXlWYWx1ZXMsIG1vbnRoVmFsdWVzKSA9PiB7XG4gIGxldCBpdGVtcyA9IFtdO1xuICBsZXQgcGFydHMgPSBbXTtcbiAgLyoqXG4gICAqIEdldCBhbGwgbW9udGggb2JqZWN0cyBmcm9tIHRoZSBtaW4gZGF0ZVxuICAgKiB0byB0aGUgbWF4IGRhdGUuIE5vdGU6IERvIG5vdCB1c2UgZ2V0TW9udGhDb2x1bW5EYXRhXG4gICAqIGFzIHRoYXQgZnVuY3Rpb24gb25seSBnZW5lcmF0ZXMgZGF0ZXMgd2l0aGluIGFcbiAgICogc2luZ2xlIHllYXIuXG4gICAqL1xuICBsZXQgbW9udGhzID0gZ2V0QWxsTW9udGhzSW5SYW5nZShtaW5QYXJ0cywgbWF4UGFydHMpO1xuICAvKipcbiAgICogRmlsdGVyIG91dCBhbnkgZGlzYWxsb3dlZCBtb250aCB2YWx1ZXMuXG4gICAqL1xuICBpZiAobW9udGhWYWx1ZXMpIHtcbiAgICBtb250aHMgPSBtb250aHMuZmlsdGVyKCh7XG4gICAgICBtb250aFxuICAgIH0pID0+IG1vbnRoVmFsdWVzLmluY2x1ZGVzKG1vbnRoKSk7XG4gIH1cbiAgLyoqXG4gICAqIEdldCBhbGwgb2YgdGhlIGRheXMgaW4gdGhlIG1vbnRoLlxuICAgKiBGcm9tIHRoZXJlLCBnZW5lcmF0ZSBhbiBhcnJheSB3aGVyZVxuICAgKiBlYWNoIGl0ZW0gaGFzIHRoZSBtb250aCwgZGF0ZSwgYW5kIGRheVxuICAgKiBvZiB3b3JrIGFzIHRoZSB0ZXh0LlxuICAgKi9cbiAgbW9udGhzLmZvckVhY2gobW9udGhPYmplY3QgPT4ge1xuICAgIGNvbnN0IHJlZmVyZW5jZU1vbnRoID0ge1xuICAgICAgbW9udGg6IG1vbnRoT2JqZWN0Lm1vbnRoLFxuICAgICAgZGF5OiBudWxsLFxuICAgICAgeWVhcjogbW9udGhPYmplY3QueWVhclxuICAgIH07XG4gICAgY29uc3QgbW9udGhEYXlzID0gZ2V0RGF5Q29sdW1uRGF0YShsb2NhbGUsIHJlZmVyZW5jZU1vbnRoLCBtaW5QYXJ0cywgbWF4UGFydHMsIGRheVZhbHVlcywge1xuICAgICAgbW9udGg6ICdzaG9ydCcsXG4gICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgIHdlZWtkYXk6ICdzaG9ydCdcbiAgICB9KTtcbiAgICBjb25zdCBkYXRlUGFydHMgPSBbXTtcbiAgICBjb25zdCBkYXRlQ29sdW1uSXRlbXMgPSBbXTtcbiAgICBtb250aERheXMuZm9yRWFjaChkYXlPYmplY3QgPT4ge1xuICAgICAgY29uc3QgaXNUb2RheSA9IGlzU2FtZURheShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHJlZmVyZW5jZU1vbnRoKSwge1xuICAgICAgICBkYXk6IGRheU9iamVjdC52YWx1ZVxuICAgICAgfSksIHRvZGF5UGFydHMpO1xuICAgICAgLyoqXG4gICAgICAgKiBUb2RheSdzIGRhdGUgc2hvdWxkIHJlYWQgYXMgXCJUb2RheVwiIChsb2NhbGl6ZWQpXG4gICAgICAgKiBub3QgdGhlIGFjdHVhbCBkYXRlIHN0cmluZ1xuICAgICAgICovXG4gICAgICBkYXRlQ29sdW1uSXRlbXMucHVzaCh7XG4gICAgICAgIHRleHQ6IGlzVG9kYXkgPyBnZXRUb2RheUxhYmVsKGxvY2FsZSkgOiBkYXlPYmplY3QudGV4dCxcbiAgICAgICAgdmFsdWU6IGAke3JlZmVyZW5jZU1vbnRoLnllYXJ9LSR7cmVmZXJlbmNlTW9udGgubW9udGh9LSR7ZGF5T2JqZWN0LnZhbHVlfWBcbiAgICAgIH0pO1xuICAgICAgLyoqXG4gICAgICAgKiBXaGVuIHNlbGVjdGluZyBhIGRhdGUgaW4gdGhlIHdoZWVsIHBpY2tlclxuICAgICAgICogd2UgbmVlZCBhY2Nlc3MgdG8gdGhlIHJhdyBkYXRldGltZSBwYXJ0cyBkYXRhLlxuICAgICAgICogVGhlIHBpY2tlciBjb2x1bW4gb25seSBhY2NlcHRzIHZhbHVlcyBvZlxuICAgICAgICogdHlwZSBzdHJpbmcgb3IgbnVtYmVyLCBzbyB3ZSBuZWVkIHRvIHJldHVyblxuICAgICAgICogdHdvIHNldHMgb2YgZGF0YTogQSBkYXRhIHNldCB0byBiZSBwYXNzZWRcbiAgICAgICAqIHRvIHRoZSBwaWNrZXIgY29sdW1uLCBhbmQgYSBkYXRhIHNldCB0b1xuICAgICAgICogYmUgdXNlZCB0byByZWZlcmVuY2UgdGhlIHJhdyBkYXRhIHdoZW5cbiAgICAgICAqIHVwZGF0aW5nIHRoZSBwaWNrZXIgY29sdW1uIHZhbHVlLlxuICAgICAgICovXG4gICAgICBkYXRlUGFydHMucHVzaCh7XG4gICAgICAgIG1vbnRoOiByZWZlcmVuY2VNb250aC5tb250aCxcbiAgICAgICAgeWVhcjogcmVmZXJlbmNlTW9udGgueWVhcixcbiAgICAgICAgZGF5OiBkYXlPYmplY3QudmFsdWVcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHBhcnRzID0gWy4uLnBhcnRzLCAuLi5kYXRlUGFydHNdO1xuICAgIGl0ZW1zID0gWy4uLml0ZW1zLCAuLi5kYXRlQ29sdW1uSXRlbXNdO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBwYXJ0cyxcbiAgICBpdGVtc1xuICB9O1xufTtcbmNvbnN0IGdldFRpbWVDb2x1bW5zRGF0YSA9IChsb2NhbGUsIHJlZlBhcnRzLCBob3VyQ3ljbGUsIG1pblBhcnRzLCBtYXhQYXJ0cywgYWxsb3dlZEhvdXJWYWx1ZXMsIGFsbG93ZWRNaW51dGVWYWx1ZXMpID0+IHtcbiAgY29uc3QgY29tcHV0ZWRIb3VyQ3ljbGUgPSBnZXRIb3VyQ3ljbGUobG9jYWxlLCBob3VyQ3ljbGUpO1xuICBjb25zdCB1c2UyNEhvdXIgPSBpczI0SG91cihjb21wdXRlZEhvdXJDeWNsZSk7XG4gIGNvbnN0IHtcbiAgICBob3VycyxcbiAgICBtaW51dGVzLFxuICAgIGFtLFxuICAgIHBtXG4gIH0gPSBnZW5lcmF0ZVRpbWUobG9jYWxlLCByZWZQYXJ0cywgY29tcHV0ZWRIb3VyQ3ljbGUsIG1pblBhcnRzLCBtYXhQYXJ0cywgYWxsb3dlZEhvdXJWYWx1ZXMsIGFsbG93ZWRNaW51dGVWYWx1ZXMpO1xuICBjb25zdCBob3Vyc0l0ZW1zID0gaG91cnMubWFwKGhvdXIgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiBnZXRGb3JtYXR0ZWRIb3VyKGhvdXIsIGNvbXB1dGVkSG91ckN5Y2xlKSxcbiAgICAgIHZhbHVlOiBnZXRJbnRlcm5hbEhvdXJWYWx1ZShob3VyLCB1c2UyNEhvdXIsIHJlZlBhcnRzLmFtcG0pXG4gICAgfTtcbiAgfSk7XG4gIGNvbnN0IG1pbnV0ZXNJdGVtcyA9IG1pbnV0ZXMubWFwKG1pbnV0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHQ6IGFkZFRpbWVQYWRkaW5nKG1pbnV0ZSksXG4gICAgICB2YWx1ZTogbWludXRlXG4gICAgfTtcbiAgfSk7XG4gIGNvbnN0IGRheVBlcmlvZEl0ZW1zID0gW107XG4gIGlmIChhbSAmJiAhdXNlMjRIb3VyKSB7XG4gICAgZGF5UGVyaW9kSXRlbXMucHVzaCh7XG4gICAgICB0ZXh0OiBnZXRMb2NhbGl6ZWREYXlQZXJpb2QobG9jYWxlLCAnYW0nKSxcbiAgICAgIHZhbHVlOiAnYW0nXG4gICAgfSk7XG4gIH1cbiAgaWYgKHBtICYmICF1c2UyNEhvdXIpIHtcbiAgICBkYXlQZXJpb2RJdGVtcy5wdXNoKHtcbiAgICAgIHRleHQ6IGdldExvY2FsaXplZERheVBlcmlvZChsb2NhbGUsICdwbScpLFxuICAgICAgdmFsdWU6ICdwbSdcbiAgICB9KTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG1pbnV0ZXNEYXRhOiBtaW51dGVzSXRlbXMsXG4gICAgaG91cnNEYXRhOiBob3Vyc0l0ZW1zLFxuICAgIGRheVBlcmlvZERhdGE6IGRheVBlcmlvZEl0ZW1zXG4gIH07XG59O1xuZXhwb3J0IHsgZ2V0Q2xvc2VzdFZhbGlkRGF0ZSBhcyBBLCBnZW5lcmF0ZU1vbnRocyBhcyBCLCBnZXROdW1EYXlzSW5Nb250aCBhcyBDLCBnZXRDb21iaW5lZERhdGVDb2x1bW5EYXRhIGFzIEQsIGdldE1vbnRoQ29sdW1uRGF0YSBhcyBFLCBnZXREYXlDb2x1bW5EYXRhIGFzIEYsIGdldFllYXJDb2x1bW5EYXRhIGFzIEcsIGlzTW9udGhGaXJzdExvY2FsZSBhcyBILCBnZXRUaW1lQ29sdW1uc0RhdGEgYXMgSSwgaXNMb2NhbGVEYXlQZXJpb2RSVEwgYXMgSiwgY2FsY3VsYXRlSG91ckZyb21BTVBNIGFzIEssIGdldERheXNPZldlZWsgYXMgTCwgZ2V0TW9udGhBbmRZZWFyIGFzIE0sIGdldERheXNPZk1vbnRoIGFzIE4sIGdldEhvdXJDeWNsZSBhcyBPLCBnZXRMb2NhbGl6ZWRUaW1lIGFzIFAsIGdldExvY2FsaXplZERhdGVUaW1lIGFzIFEsIGZvcm1hdFZhbHVlIGFzIFIsIGlzQWZ0ZXIgYXMgYSwgZ2V0TmV4dE1vbnRoIGFzIGIsIGlzU2FtZURheSBhcyBjLCBnZXREYXkgYXMgZCwgZ2VuZXJhdGVEYXlBcmlhTGFiZWwgYXMgZSwgZ2V0UGFydHNGcm9tQ2FsZW5kYXJEYXkgYXMgZiwgZ2V0UHJldmlvdXNNb250aCBhcyBnLCBnZXROZXh0WWVhciBhcyBoLCBpc0JlZm9yZSBhcyBpLCBnZXRQcmV2aW91c1llYXIgYXMgaiwgZ2V0RW5kT2ZXZWVrIGFzIGssIGdldFN0YXJ0T2ZXZWVrIGFzIGwsIGdldFByZXZpb3VzRGF5IGFzIG0sIGdldE5leHREYXkgYXMgbiwgZ2V0UHJldmlvdXNXZWVrIGFzIG8sIGdldE5leHRXZWVrIGFzIHAsIHBhcnNlTWluUGFydHMgYXMgcSwgcGFyc2VNYXhQYXJ0cyBhcyByLCBwYXJzZURhdGUgYXMgcywgcGFyc2VBbVBtIGFzIHQsIGNsYW1wRGF0ZSBhcyB1LCB2YWxpZGF0ZVBhcnRzIGFzIHYsIHdhcm5JZlZhbHVlT3V0T2ZCb3VuZHMgYXMgdywgY29udmVydFRvQXJyYXlPZk51bWJlcnMgYXMgeCwgY29udmVydERhdGFUb0lTTyBhcyB5LCBnZXRUb2RheSBhcyB6IH07Il0sIm1hcHBpbmdzIjoiOzs7OztBQVFBLElBQU0sWUFBWSxDQUFDLFdBQVcs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QU0sUUFBUSxLQUFLLElBQUksTUFBTSxLQUFLLEdBQUcsSUFBSTtBQUNsRDtBQU9BLElBQU0sV0FBVyxNQUFNO0FBa0JyQixTQUFPLG1CQUFtQixvQkFBSSxLQUFLLENBQUMsRUFBRSxZQUFZO0FBQ3BEO0FBQ0EsSUFBTSxVQUFVLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7QUFFclAsSUFBTSxTQUFTLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLEVBQUU7QUFFcEQsSUFBTSxTQUFTLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLEVBQUU7QUFFcEQsSUFBTSxTQUFTLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7QUFFcEcsSUFBTSxTQUFTLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUM7QUFTcEcsSUFBTSxnQkFBZ0IsQ0FB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LE1BQ0wsTUFBTSxlQUFlLE1BQU07QUFBQSxNQUMzQixPQUFPO0FBQUEsSUFDVDtBQUFBLEVBQ0YsQ0FBQztBQUNELFFBQU0saUJBQWlCLENBQUM7QUFDeEIsTUFBSSxNQUFNLENBQUMsV0FBVztBQUNwQixtQkFBZSxLQUFLO0FBQUEsTUFDbEIsTUFBTSxzQkFBc0IsUUFBUSxJQUFJO0FBQUEsTUFDeEMsT0FBTztBQUFBLElBQ1QsQ0FBQztBQUFBLEVBQ0g7QUFDQSxNQUFJLE1BQU0sQ0FBQyxXQUFXO0FBQ3BCLG1CQUFlLEtBQUs7QUFBQSxNQUNsQixNQUFNLHNCQUFzQixRQUFRLElBQUk7QUFBQSxNQUN4QyxPQUFPO0FBQUEsSUFDVCxDQUFDO0FBQUEsRUFDSDtBQUNBLFNBQU87QUFBQSxJQUNMLGFBQWE7QUFBQSxJQUNiLFdBQVc7QUFBQSxJQUNYLGVBQWU7QUFBQSxFQUNqQjtBQUNGOyIsIm5hbWVzIjpbInllYXIiLCJtb250aCIsImRheSIsImhvdXIiLCJtaW51dGUiLCJtaW51dGVzIl0sInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswXX0=
