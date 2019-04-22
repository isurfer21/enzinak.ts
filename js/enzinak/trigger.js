define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Trigger {
        static custom(elementRef, eventName, cargoObj) {
            let event;
            if (CustomEvent) {
                event = new CustomEvent(eventName, { detail: cargoObj });
            }
            else {
                event = document.createEvent('CustomEvent');
                event.initCustomEvent(eventName, true, true, cargoObj);
            }
            elementRef.dispatchEvent(event);
        }
        static native(elementRef, eventName) {
            let event = document.createEvent('HTMLEvents');
            event.initEvent(eventName, true, false);
            elementRef.dispatchEvent(event);
        }
    }
    exports.Trigger = Trigger;
});
//# sourceMappingURL=trigger.js.map