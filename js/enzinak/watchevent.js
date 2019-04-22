define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class WatchEvent {
        static on(elementRef, eventName, eventHandler) {
            if (!!elementRef.length && elementRef.length > 0) {
                for (let i = 0; i < elementRef.length; i++) {
                    elementRef[i].addEventListener(eventName, eventHandler);
                }
            }
            else {
                elementRef.addEventListener(eventName, eventHandler);
            }
        }
        static off(elementRef, eventName, eventHandler) {
            if (!!elementRef.length && elementRef.length > 0) {
                for (let i = 0; i < elementRef.length; i++) {
                    elementRef[i].removeEventListener(eventName, eventHandler);
                }
            }
            else {
                elementRef.removeEventListener(eventName, eventHandler);
            }
        }
    }
    exports.WatchEvent = WatchEvent;
});
//# sourceMappingURL=watchevent.js.map