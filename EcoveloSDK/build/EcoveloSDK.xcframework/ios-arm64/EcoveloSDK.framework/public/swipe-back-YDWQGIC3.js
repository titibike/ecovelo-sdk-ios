import {
  isRTL
} from "./chunk-LHYYZWFK.js";
import {
  createGesture
} from "./chunk-2HURGHOF.js";
import {
  clamp
} from "./chunk-EV4ZQC67.js";
import "./chunk-7OBOYUXW.js";
import "./chunk-UESUV5PM.js";

// node_modules/@ionic/core/components/swipe-back.js
var createSwipeBackGesture = (el, canStartHandler, onStartHandler, onMoveHandler, onEndHandler) => {
  const win = el.ownerDocument.defaultView;
  let rtl = isRTL(el);
  const isAtEdge = (detail) => {
    const threshold = 50;
    const {
      startX
    } = detail;
    if (rtl) {
      return startX >= win.innerWidth - threshold;
    }
    return startX <= threshold;
  };
  const getDeltaX = (detail) => {
    return rtl ? -detail.deltaX : detail.deltaX;
  };
  const getVelocityX = (detail) => {
    return rtl ? -detail.velocityX : detail.velocityX;
  };
  const canStart = (detail) => {
    rtl = isRTL(el);
    return isAtEdge(detail) && canStartHandler();
  };
  const onMove = (detail) => {
    const delta = getDeltaX(detail);
    const stepValue = delta / win.innerWidth;
    onMoveHandler(stepValue);
  };
  const onEnd = (detail) => {
    const delta = getDeltaX(detail);
    const width = win.innerWidth;
    const stepValue = delta / width;
    const velocity = getVelocityX(detail);
    const z = width / 2;
    const shouldComplete = velocity >= 0 && (velocity > 0.2 || delta > z);
    const missing = shouldComplete ? 1 - stepValue : stepValue;
    const missingDistance = missing * width;
    let realDur = 0;
    if (missingDistance > 5) {
      const dur = missingDistance / Math.abs(velocity);
      realDur = Math.min(dur, 540);
    }
    onEndHandler(shouldComplete, stepValue <= 0 ? 0.01 : clamp(0, stepValue, 0.9999), realDur);
  };
  return createGesture({
    el,
    gestureName: "goback-swipe",
    /**
     * Swipe to go back should have priority over other horizontal swipe
     * gestures. These gestures have a priority of 100 which is why 101 was chosen here.
     */
    gesturePriority: 101,
    threshold: 10,
    canStart,
    onStart: onStartHandler,
    onMove,
    onEnd
  });
};
export {
  createSwipeBackGesture
};
/*! Bundled license information:

@ionic/core/components/swipe-back.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9jb21wb25lbnRzL3N3aXBlLWJhY2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydCB7IGYgYXMgY2xhbXAgfSBmcm9tICcuL2hlbHBlcnMuanMnO1xuaW1wb3J0IHsgaSBhcyBpc1JUTCB9IGZyb20gJy4vZGlyLmpzJztcbmltcG9ydCB7IGNyZWF0ZUdlc3R1cmUgfSBmcm9tICcuL2luZGV4My5qcyc7XG5jb25zdCBjcmVhdGVTd2lwZUJhY2tHZXN0dXJlID0gKGVsLCBjYW5TdGFydEhhbmRsZXIsIG9uU3RhcnRIYW5kbGVyLCBvbk1vdmVIYW5kbGVyLCBvbkVuZEhhbmRsZXIpID0+IHtcbiAgY29uc3Qgd2luID0gZWwub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcbiAgbGV0IHJ0bCA9IGlzUlRMKGVsKTtcbiAgLyoqXG4gICAqIERldGVybWluZSBpZiBhIGdlc3R1cmUgaXMgbmVhciB0aGUgZWRnZVxuICAgKiBvZiB0aGUgc2NyZWVuLiBJZiB0cnVlLCB0aGVuIHRoZSBzd2lwZVxuICAgKiB0byBnbyBiYWNrIGdlc3R1cmUgc2hvdWxkIHByb2NlZWQuXG4gICAqL1xuICBjb25zdCBpc0F0RWRnZSA9IGRldGFpbCA9PiB7XG4gICAgY29uc3QgdGhyZXNob2xkID0gNTA7XG4gICAgY29uc3Qge1xuICAgICAgc3RhcnRYXG4gICAgfSA9IGRldGFpbDtcbiAgICBpZiAocnRsKSB7XG4gICAgICByZXR1cm4gc3RhcnRYID49IHdpbi5pbm5lcldpZHRoIC0gdGhyZXNob2xkO1xuICAgIH1cbiAgICByZXR1cm4gc3RhcnRYIDw9IHRocmVzaG9sZDtcbiAgfTtcbiAgY29uc3QgZ2V0RGVsdGFYID0gZGV0YWlsID0+IHtcbiAgICByZXR1cm4gcnRsID8gLWRldGFpbC5kZWx0YVggOiBkZXRhaWwuZGVsdGFYO1xuICB9O1xuICBjb25zdCBnZXRWZWxvY2l0eVggPSBkZXRhaWwgPT4ge1xuICAgIHJldHVybiBydGwgPyAtZGV0YWlsLnZlbG9jaXR5WCA6IGRldGFpbC52ZWxvY2l0eVg7XG4gIH07XG4gIGNvbnN0IGNhblN0YXJ0ID0gZGV0YWlsID0+IHtcbiAgICAvKipcbiAgICAgKiBUaGUgdXNlcidzIGxvY2FsZSBjYW4gY2hhbmdlIG1pZC1zZXNzaW9uLFxuICAgICAqIHNvIHdlIG5lZWQgdG8gY2hlY2sgdGV4dCBkaXJlY3Rpb24gYXRcbiAgICAgKiB0aGUgYmVnaW5uaW5nIG9mIGV2ZXJ5IGdlc3R1cmUuXG4gICAgICovXG4gICAgcnRsID0gaXNSVEwoZWwpO1xuICAgIHJldHVybiBpc0F0RWRnZShkZXRhaWwpICYmIGNhblN0YXJ0SGFuZGxlcigpO1xuICB9O1xuICBjb25zdCBvbk1vdmUgPSBkZXRhaWwgPT4ge1xuICAgIC8vIHNldCB0aGUgdHJhbnNpdGlvbiBhbmltYXRpb24ncyBwcm9ncmVzc1xuICAgIGNvbnN0IGRlbHRhID0gZ2V0RGVsdGFYKGRldGFpbCk7XG4gICAgY29uc3Qgc3RlcFZhbHVlID0gZGVsdGEgLyB3aW4uaW5uZXJXaWR0aDtcbiAgICBvbk1vdmVIYW5kbGVyKHN0ZXBWYWx1ZSk7XG4gIH07XG4gIGNvbnN0IG9uRW5kID0gZGV0YWlsID0+IHtcbiAgICAvLyB0aGUgc3dpcGUgYmFjayBnZXN0dXJlIGhhcyBlbmRlZFxuICAgIGNvbnN0IGRlbHRhID0gZ2V0RGVsdGFYKGRldGFpbCk7XG4gICAgY29uc3Qgd2lkdGggPSB3aW4uaW5uZXJXaWR0aDtcbiAgICBjb25zdCBzdGVwVmFsdWUgPSBkZWx0YSAvIHdpZHRoO1xuICAgIGNvbnN0IHZlbG9jaXR5ID0gZ2V0VmVsb2NpdHlYKGRldGFpbCk7XG4gICAgY29uc3QgeiA9IHdpZHRoIC8gMi4wO1xuICAgIGNvbnN0IHNob3VsZENvbXBsZXRlID0gdmVsb2NpdHkgPj0gMCAmJiAodmVsb2NpdHkgPiAwLjIgfHwgZGVsdGEgPiB6KTtcbiAgICBjb25zdCBtaXNzaW5nID0gc2hvdWxkQ29tcGxldGUgPyAxIC0gc3RlcFZhbHVlIDogc3RlcFZhbHVlO1xuICAgIGNvbnN0IG1pc3NpbmdEaXN0YW5jZSA9IG1pc3NpbmcgKiB3aWR0aDtcbiAgICBsZXQgcmVhbER1ciA9IDA7XG4gICAgaWYgKG1pc3NpbmdEaXN0YW5jZSA+IDUpIHtcbiAgICAgIGNvbnN0IGR1ciA9IG1pc3NpbmdEaXN0YW5jZSAvIE1hdGguYWJzKHZlbG9jaXR5KTtcbiAgICAgIHJlYWxEdXIgPSBNYXRoLm1pbihkdXIsIDU0MCk7XG4gICAgfVxuICAgIG9uRW5kSGFuZGxlcihzaG91bGRDb21wbGV0ZSwgc3RlcFZhbHVlIDw9IDAgPyAwLjAxIDogY2xhbXAoMCwgc3RlcFZhbHVlLCAwLjk5OTkpLCByZWFsRHVyKTtcbiAgfTtcbiAgcmV0dXJuIGNyZWF0ZUdlc3R1cmUoe1xuICAgIGVsLFxuICAgIGdlc3R1cmVOYW1lOiAnZ29iYWNrLXN3aXBlJyxcbiAgICAvKipcbiAgICAgKiBTd2lwZSB0byBnbyBiYWNrIHNob3VsZCBoYXZlIHByaW9yaXR5IG92ZXIgb3RoZXIgaG9yaXpvbnRhbCBzd2lwZVxuICAgICAqIGdlc3R1cmVzLiBUaGVzZSBnZXN0dXJlcyBoYXZlIGEgcHJpb3JpdHkgb2YgMTAwIHdoaWNoIGlzIHdoeSAxMDEgd2FzIGNob3NlbiBoZXJlLlxuICAgICAqL1xuICAgIGdlc3R1cmVQcmlvcml0eTogMTAxLFxuICAgIHRocmVzaG9sZDogMTAsXG4gICAgY2FuU3RhcnQsXG4gICAgb25TdGFydDogb25TdGFydEhhbmRsZXIsXG4gICAgb25Nb3ZlLFxuICAgIG9uRW5kXG4gIH0pO1xufTtcbmV4cG9ydCB7IGNyZWF0ZVN3aXBlQmFja0dlc3R1cmUgfTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFNQSxJQUFNLHlCQUF5QixDQUFDLElBQUksaUJBQWlCLGdCQUFnQixlQUFlLGlCQUFpQjtBQUNuRyxRQUFNLE1BQU0sR0FBRyxjQUFjO0FBQzdCLE1BQUksTUFBTSxNQUFNLEVBQUU7QUFNbEIsUUFBTSxXQUFXLFlBQVU7QUFDekIsVUFBTSxZQUFZO0FBQ2xCLFVBQU07QUFBQSxNQUNKO0FBQUEsSUFDRixJQUFJO0FBQ0osUUFBSSxLQUFLO0FBQ1AsYUFBTyxVQUFVLElBQUksYUFBYTtBQUFBLElBQ3BDO0FBQ0EsV0FBTyxVQUFVO0FBQUEsRUFDbkI7QUFDQSxRQUFNLFlBQVksWUFBVTtBQUMxQixXQUFPLE1BQU0sQ0FBQyxPQUFPLFNBQVMsT0FBTztBQUFBLEVBQ3ZDO0FBQ0EsUUFBTSxlQUFlLFlBQVU7QUFDN0IsV0FBTyxNQUFNLENBQUMsT0FBTyxZQUFZLE9BQU87QUFBQSxFQUMxQztBQUNBLFFBQU0sV0FBVyxZQUFVO0FBTXpCLFVBQU0sTUFBTSxFQUFFO0FBQ2QsV0FBTyxTQUFTLE1BQU0sS0FBSyxnQkFBZ0I7QUFBQSxFQUM3QztBQUNBLFFBQU0sU0FBUyxZQUFVO0FBRXZCLFVBQU0sUUFBUSxVQUFVLE1BQU07QUFDOUIsVUFBTSxZQUFZLFFBQVEsSUFBSTtBQUM5QixrQkFBYyxTQUFTO0FBQUEsRUFDekI7QUFDQSxRQUFNLFFBQVEsWUFBVTtBQUV0QixVQUFNLFFBQVEsVUFBVSxNQUFNO0FBQzlCLFVBQU0sUUFBUSxJQUFJO0FBQ2xCLFVBQU0sWUFBWSxRQUFRO0FBQzFCLFVBQU0sV0FBVyxhQUFhLE1BQU07QUFDcEMsVUFBTSxJQUFJLFFBQVE7QUFDbEIsVUFBTSxpQkFBaUIsWUFBWSxNQUFNLFdBQVcsT0FBTyxRQUFRO0FBQ25FLFVBQU0sVUFBVSxpQkFBaUIsSUFBSSxZQUFZO0FBQ2pELFVBQU0sa0JBQWtCLFVBQVU7QUFDbEMsUUFBSSxVQUFVO0FBQ2QsUUFBSSxrQkFBa0IsR0FBRztBQUN2QixZQUFNLE1BQU0sa0JBQWtCLEtBQUssSUFBSSxRQUFRO0FBQy9DLGdCQUFVLEtBQUssSUFBSSxLQUFLLEdBQUc7QUFBQSxJQUM3QjtBQUNBLGlCQUFhLGdCQUFnQixhQUFhLElBQUksT0FBTyxNQUFNLEdBQUcsV0FBVyxNQUFNLEdBQUcsT0FBTztBQUFBLEVBQzNGO0FBQ0EsU0FBTyxjQUFjO0FBQUEsSUFDbkI7QUFBQSxJQUNBLGFBQWE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBS2IsaUJBQWlCO0FBQUEsSUFDakIsV0FBVztBQUFBLElBQ1g7QUFBQSxJQUNBLFNBQVM7QUFBQSxJQUNUO0FBQUEsSUFDQTtBQUFBLEVBQ0YsQ0FBQztBQUNIOyIsIm5hbWVzIjpbXSwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==
