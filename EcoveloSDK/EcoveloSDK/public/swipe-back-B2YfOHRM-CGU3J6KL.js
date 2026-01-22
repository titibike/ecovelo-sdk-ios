import {
  isRTL
} from "./chunk-4LZLDCVM.js";
import {
  createGesture
} from "./chunk-7NA53B7M.js";
import "./chunk-J5JVDPFK.js";
import {
  clamp
} from "./chunk-RZR7LWTQ.js";
import "./chunk-BFPTXCSH.js";
import "./chunk-UESUV5PM.js";

// node_modules/@ionic/core/dist/esm/swipe-back-B2YfOHRM.js
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

@ionic/core/dist/esm/swipe-back-B2YfOHRM.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9zd2lwZS1iYWNrLUIyWWZPSFJNLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyBlIGFzIGNsYW1wIH0gZnJvbSAnLi9oZWxwZXJzLThLU1FRR1F5LmpzJztcbmltcG9ydCB7IGkgYXMgaXNSVEwgfSBmcm9tICcuL2Rpci1DNTNmZWFnRC5qcyc7XG5pbXBvcnQgeyBjcmVhdGVHZXN0dXJlIH0gZnJvbSAnLi9pbmRleC1DZmdCRjFTRS5qcyc7XG5pbXBvcnQgJy4vaW5kZXgtNER4WTZfZ0cuanMnO1xuaW1wb3J0ICcuL2dlc3R1cmUtY29udHJvbGxlci1CVEVPczFhdC5qcyc7XG5jb25zdCBjcmVhdGVTd2lwZUJhY2tHZXN0dXJlID0gKGVsLCBjYW5TdGFydEhhbmRsZXIsIG9uU3RhcnRIYW5kbGVyLCBvbk1vdmVIYW5kbGVyLCBvbkVuZEhhbmRsZXIpID0+IHtcbiAgY29uc3Qgd2luID0gZWwub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcbiAgbGV0IHJ0bCA9IGlzUlRMKGVsKTtcbiAgLyoqXG4gICAqIERldGVybWluZSBpZiBhIGdlc3R1cmUgaXMgbmVhciB0aGUgZWRnZVxuICAgKiBvZiB0aGUgc2NyZWVuLiBJZiB0cnVlLCB0aGVuIHRoZSBzd2lwZVxuICAgKiB0byBnbyBiYWNrIGdlc3R1cmUgc2hvdWxkIHByb2NlZWQuXG4gICAqL1xuICBjb25zdCBpc0F0RWRnZSA9IGRldGFpbCA9PiB7XG4gICAgY29uc3QgdGhyZXNob2xkID0gNTA7XG4gICAgY29uc3Qge1xuICAgICAgc3RhcnRYXG4gICAgfSA9IGRldGFpbDtcbiAgICBpZiAocnRsKSB7XG4gICAgICByZXR1cm4gc3RhcnRYID49IHdpbi5pbm5lcldpZHRoIC0gdGhyZXNob2xkO1xuICAgIH1cbiAgICByZXR1cm4gc3RhcnRYIDw9IHRocmVzaG9sZDtcbiAgfTtcbiAgY29uc3QgZ2V0RGVsdGFYID0gZGV0YWlsID0+IHtcbiAgICByZXR1cm4gcnRsID8gLWRldGFpbC5kZWx0YVggOiBkZXRhaWwuZGVsdGFYO1xuICB9O1xuICBjb25zdCBnZXRWZWxvY2l0eVggPSBkZXRhaWwgPT4ge1xuICAgIHJldHVybiBydGwgPyAtZGV0YWlsLnZlbG9jaXR5WCA6IGRldGFpbC52ZWxvY2l0eVg7XG4gIH07XG4gIGNvbnN0IGNhblN0YXJ0ID0gZGV0YWlsID0+IHtcbiAgICAvKipcbiAgICAgKiBUaGUgdXNlcidzIGxvY2FsZSBjYW4gY2hhbmdlIG1pZC1zZXNzaW9uLFxuICAgICAqIHNvIHdlIG5lZWQgdG8gY2hlY2sgdGV4dCBkaXJlY3Rpb24gYXRcbiAgICAgKiB0aGUgYmVnaW5uaW5nIG9mIGV2ZXJ5IGdlc3R1cmUuXG4gICAgICovXG4gICAgcnRsID0gaXNSVEwoZWwpO1xuICAgIHJldHVybiBpc0F0RWRnZShkZXRhaWwpICYmIGNhblN0YXJ0SGFuZGxlcigpO1xuICB9O1xuICBjb25zdCBvbk1vdmUgPSBkZXRhaWwgPT4ge1xuICAgIC8vIHNldCB0aGUgdHJhbnNpdGlvbiBhbmltYXRpb24ncyBwcm9ncmVzc1xuICAgIGNvbnN0IGRlbHRhID0gZ2V0RGVsdGFYKGRldGFpbCk7XG4gICAgY29uc3Qgc3RlcFZhbHVlID0gZGVsdGEgLyB3aW4uaW5uZXJXaWR0aDtcbiAgICBvbk1vdmVIYW5kbGVyKHN0ZXBWYWx1ZSk7XG4gIH07XG4gIGNvbnN0IG9uRW5kID0gZGV0YWlsID0+IHtcbiAgICAvLyB0aGUgc3dpcGUgYmFjayBnZXN0dXJlIGhhcyBlbmRlZFxuICAgIGNvbnN0IGRlbHRhID0gZ2V0RGVsdGFYKGRldGFpbCk7XG4gICAgY29uc3Qgd2lkdGggPSB3aW4uaW5uZXJXaWR0aDtcbiAgICBjb25zdCBzdGVwVmFsdWUgPSBkZWx0YSAvIHdpZHRoO1xuICAgIGNvbnN0IHZlbG9jaXR5ID0gZ2V0VmVsb2NpdHlYKGRldGFpbCk7XG4gICAgY29uc3QgeiA9IHdpZHRoIC8gMi4wO1xuICAgIGNvbnN0IHNob3VsZENvbXBsZXRlID0gdmVsb2NpdHkgPj0gMCAmJiAodmVsb2NpdHkgPiAwLjIgfHwgZGVsdGEgPiB6KTtcbiAgICBjb25zdCBtaXNzaW5nID0gc2hvdWxkQ29tcGxldGUgPyAxIC0gc3RlcFZhbHVlIDogc3RlcFZhbHVlO1xuICAgIGNvbnN0IG1pc3NpbmdEaXN0YW5jZSA9IG1pc3NpbmcgKiB3aWR0aDtcbiAgICBsZXQgcmVhbER1ciA9IDA7XG4gICAgaWYgKG1pc3NpbmdEaXN0YW5jZSA+IDUpIHtcbiAgICAgIGNvbnN0IGR1ciA9IG1pc3NpbmdEaXN0YW5jZSAvIE1hdGguYWJzKHZlbG9jaXR5KTtcbiAgICAgIHJlYWxEdXIgPSBNYXRoLm1pbihkdXIsIDU0MCk7XG4gICAgfVxuICAgIG9uRW5kSGFuZGxlcihzaG91bGRDb21wbGV0ZSwgc3RlcFZhbHVlIDw9IDAgPyAwLjAxIDogY2xhbXAoMCwgc3RlcFZhbHVlLCAwLjk5OTkpLCByZWFsRHVyKTtcbiAgfTtcbiAgcmV0dXJuIGNyZWF0ZUdlc3R1cmUoe1xuICAgIGVsLFxuICAgIGdlc3R1cmVOYW1lOiAnZ29iYWNrLXN3aXBlJyxcbiAgICAvKipcbiAgICAgKiBTd2lwZSB0byBnbyBiYWNrIHNob3VsZCBoYXZlIHByaW9yaXR5IG92ZXIgb3RoZXIgaG9yaXpvbnRhbCBzd2lwZVxuICAgICAqIGdlc3R1cmVzLiBUaGVzZSBnZXN0dXJlcyBoYXZlIGEgcHJpb3JpdHkgb2YgMTAwIHdoaWNoIGlzIHdoeSAxMDEgd2FzIGNob3NlbiBoZXJlLlxuICAgICAqL1xuICAgIGdlc3R1cmVQcmlvcml0eTogMTAxLFxuICAgIHRocmVzaG9sZDogMTAsXG4gICAgY2FuU3RhcnQsXG4gICAgb25TdGFydDogb25TdGFydEhhbmRsZXIsXG4gICAgb25Nb3ZlLFxuICAgIG9uRW5kXG4gIH0pO1xufTtcbmV4cG9ydCB7IGNyZWF0ZVN3aXBlQmFja0dlc3R1cmUgfTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBUUEsSUFBTSx5QkFBeUIsQ0FBQyxJQUFJLGlCQUFpQixnQkFBZ0IsZUFBZSxpQkFBaUI7QUFDbkcsUUFBTSxNQUFNLEdBQUcsY0FBYztBQUM3QixNQUFJLE1BQU0sTUFBTSxFQUFFO0FBTWxCLFFBQU0sV0FBVyxZQUFVO0FBQ3pCLFVBQU0sWUFBWTtBQUNsQixVQUFNO0FBQUEsTUFDSjtBQUFBLElBQ0YsSUFBSTtBQUNKLFFBQUksS0FBSztBQUNQLGFBQU8sVUFBVSxJQUFJLGFBQWE7QUFBQSxJQUNwQztBQUNBLFdBQU8sVUFBVTtBQUFBLEVBQ25CO0FBQ0EsUUFBTSxZQUFZLFlBQVU7QUFDMUIsV0FBTyxNQUFNLENBQUMsT0FBTyxTQUFTLE9BQU87QUFBQSxFQUN2QztBQUNBLFFBQU0sZUFBZSxZQUFVO0FBQzdCLFdBQU8sTUFBTSxDQUFDLE9BQU8sWUFBWSxPQUFPO0FBQUEsRUFDMUM7QUFDQSxRQUFNLFdBQVcsWUFBVTtBQU16QixVQUFNLE1BQU0sRUFBRTtBQUNkLFdBQU8sU0FBUyxNQUFNLEtBQUssZ0JBQWdCO0FBQUEsRUFDN0M7QUFDQSxRQUFNLFNBQVMsWUFBVTtBQUV2QixVQUFNLFFBQVEsVUFBVSxNQUFNO0FBQzlCLFVBQU0sWUFBWSxRQUFRLElBQUk7QUFDOUIsa0JBQWMsU0FBUztBQUFBLEVBQ3pCO0FBQ0EsUUFBTSxRQUFRLFlBQVU7QUFFdEIsVUFBTSxRQUFRLFVBQVUsTUFBTTtBQUM5QixVQUFNLFFBQVEsSUFBSTtBQUNsQixVQUFNLFlBQVksUUFBUTtBQUMxQixVQUFNLFdBQVcsYUFBYSxNQUFNO0FBQ3BDLFVBQU0sSUFBSSxRQUFRO0FBQ2xCLFVBQU0saUJBQWlCLFlBQVksTUFBTSxXQUFXLE9BQU8sUUFBUTtBQUNuRSxVQUFNLFVBQVUsaUJBQWlCLElBQUksWUFBWTtBQUNqRCxVQUFNLGtCQUFrQixVQUFVO0FBQ2xDLFFBQUksVUFBVTtBQUNkLFFBQUksa0JBQWtCLEdBQUc7QUFDdkIsWUFBTSxNQUFNLGtCQUFrQixLQUFLLElBQUksUUFBUTtBQUMvQyxnQkFBVSxLQUFLLElBQUksS0FBSyxHQUFHO0FBQUEsSUFDN0I7QUFDQSxpQkFBYSxnQkFBZ0IsYUFBYSxJQUFJLE9BQU8sTUFBTSxHQUFHLFdBQVcsTUFBTSxHQUFHLE9BQU87QUFBQSxFQUMzRjtBQUNBLFNBQU8sY0FBYztBQUFBLElBQ25CO0FBQUEsSUFDQSxhQUFhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUtiLGlCQUFpQjtBQUFBLElBQ2pCLFdBQVc7QUFBQSxJQUNYO0FBQUEsSUFDQSxTQUFTO0FBQUEsSUFDVDtBQUFBLElBQ0E7QUFBQSxFQUNGLENBQUM7QUFDSDsiLCJuYW1lcyI6W10sInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswXX0=
