import {
  __async
} from "./chunk-UESUV5PM.js";

// node_modules/@capacitor/synapse/dist/synapse.mjs
function s(t) {
  t.CapacitorUtils.Synapse = new Proxy({}, {
    get(e, n) {
      return new Proxy({}, {
        get(w, o) {
          return (c, p, r) => {
            const i = t.Capacitor.Plugins[n];
            if (i === void 0) {
              r(new Error(`Capacitor plugin ${n} not found`));
              return;
            }
            if (typeof i[o] != "function") {
              r(new Error(`Method ${o} not found in Capacitor plugin ${n}`));
              return;
            }
            (() => __async(null, null, function* () {
              try {
                const a = yield i[o](c);
                p(a);
              } catch (a) {
                r(a);
              }
            }))();
          };
        }
      });
    }
  });
}
function u(t) {
  t.CapacitorUtils.Synapse = new Proxy({}, {
    get(e, n) {
      return t.cordova.plugins[n];
    }
  });
}
function f(t = false) {
  typeof window > "u" || (window.CapacitorUtils = window.CapacitorUtils || {}, window.Capacitor !== void 0 && !t ? s(window) : window.cordova !== void 0 && u(window));
}

export {
  f
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY2FwYWNpdG9yL3N5bmFwc2UvZGlzdC9zeW5hcHNlLm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBzKHQpIHtcbiAgdC5DYXBhY2l0b3JVdGlscy5TeW5hcHNlID0gbmV3IFByb3h5KHt9LCB7XG4gICAgZ2V0KGUsIG4pIHtcbiAgICAgIHJldHVybiBuZXcgUHJveHkoe30sIHtcbiAgICAgICAgZ2V0KHcsIG8pIHtcbiAgICAgICAgICByZXR1cm4gKGMsIHAsIHIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGkgPSB0LkNhcGFjaXRvci5QbHVnaW5zW25dO1xuICAgICAgICAgICAgaWYgKGkgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICByKG5ldyBFcnJvcihgQ2FwYWNpdG9yIHBsdWdpbiAke259IG5vdCBmb3VuZGApKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBpW29dICE9IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICByKG5ldyBFcnJvcihgTWV0aG9kICR7b30gbm90IGZvdW5kIGluIENhcGFjaXRvciBwbHVnaW4gJHtufWApKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhID0gYXdhaXQgaVtvXShjKTtcbiAgICAgICAgICAgICAgICBwKGEpO1xuICAgICAgICAgICAgICB9IGNhdGNoIChhKSB7XG4gICAgICAgICAgICAgICAgcihhKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufVxuZnVuY3Rpb24gdSh0KSB7XG4gIHQuQ2FwYWNpdG9yVXRpbHMuU3luYXBzZSA9IG5ldyBQcm94eSh7fSwge1xuICAgIGdldChlLCBuKSB7XG4gICAgICByZXR1cm4gdC5jb3Jkb3ZhLnBsdWdpbnNbbl07XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIGYodCA9ICExKSB7XG4gIHR5cGVvZiB3aW5kb3cgPiBcInVcIiB8fCAod2luZG93LkNhcGFjaXRvclV0aWxzID0gd2luZG93LkNhcGFjaXRvclV0aWxzIHx8IHt9LCB3aW5kb3cuQ2FwYWNpdG9yICE9PSB2b2lkIDAgJiYgIXQgPyBzKHdpbmRvdykgOiB3aW5kb3cuY29yZG92YSAhPT0gdm9pZCAwICYmIHUod2luZG93KSk7XG59XG5leHBvcnQgeyBmIGFzIGV4cG9zZVN5bmFwc2UgfTsiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsU0FBUyxFQUFFLEdBQUc7QUFDWixJQUFFLGVBQWUsVUFBVSxJQUFJLE1BQU0sQ0FBQyxHQUFHO0FBQUEsSUFDdkMsSUFBSSxHQUFHLEdBQUc7QUFDUixhQUFPLElBQUksTUFBTSxDQUFDLEdBQUc7QUFBQSxRQUNuQixJQUFJLEdBQUcsR0FBRztBQUNSLGlCQUFPLENBQUMsR0FBRyxHQUFHLE1BQU07QUFDbEIsa0JBQU0sSUFBSSxFQUFFLFVBQVUsUUFBUSxDQUFDO0FBQy9CLGdCQUFJLE1BQU0sUUFBUTtBQUNoQixnQkFBRSxJQUFJLE1BQU0sb0JBQW9CLENBQUMsWUFBWSxDQUFDO0FBQzlDO0FBQUEsWUFDRjtBQUNBLGdCQUFJLE9BQU8sRUFBRSxDQUFDLEtBQUssWUFBWTtBQUM3QixnQkFBRSxJQUFJLE1BQU0sVUFBVSxDQUFDLGtDQUFrQyxDQUFDLEVBQUUsQ0FBQztBQUM3RDtBQUFBLFlBQ0Y7QUFDQSxhQUFDLE1BQVk7QUFDWCxrQkFBSTtBQUNGLHNCQUFNLElBQUksTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO0FBQ3RCLGtCQUFFLENBQUM7QUFBQSxjQUNMLFNBQVMsR0FBRztBQUNWLGtCQUFFLENBQUM7QUFBQSxjQUNMO0FBQUEsWUFDRixJQUFHO0FBQUEsVUFDTDtBQUFBLFFBQ0Y7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNIO0FBQUEsRUFDRixDQUFDO0FBQ0g7QUFDQSxTQUFTLEVBQUUsR0FBRztBQUNaLElBQUUsZUFBZSxVQUFVLElBQUksTUFBTSxDQUFDLEdBQUc7QUFBQSxJQUN2QyxJQUFJLEdBQUcsR0FBRztBQUNSLGFBQU8sRUFBRSxRQUFRLFFBQVEsQ0FBQztBQUFBLElBQzVCO0FBQUEsRUFDRixDQUFDO0FBQ0g7QUFDQSxTQUFTLEVBQUUsSUFBSSxPQUFJO0FBQ2pCLFNBQU8sU0FBUyxRQUFRLE9BQU8saUJBQWlCLE9BQU8sa0JBQWtCLENBQUMsR0FBRyxPQUFPLGNBQWMsVUFBVSxDQUFDLElBQUksRUFBRSxNQUFNLElBQUksT0FBTyxZQUFZLFVBQVUsRUFBRSxNQUFNO0FBQ3BLOyIsIm5hbWVzIjpbXSwieF9nb29nbGVfaWdub3JlTGlzdCI6WzBdfQ==
