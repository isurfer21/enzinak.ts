define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Incident {
        constructor(elementRef) {
            this.container = elementRef;
            this.handler = {};
        }
        on(eType, eHandler, realm) {
            this.handler[eType] = {
                handleEvent: (e) => eHandler.call(realm, e)
            };
            if (!!this.container.length && this.container.length > 0) {
                for (let i = 0; i < this.container.length; i++) {
                    this.container[i].addEventListener(eType, this.handler[eType]);
                }
            }
            else {
                this.container.addEventListener(eType, this.handler[eType]);
            }
        }
        off(eType) {
            if (!!this.container.length && this.container.length > 0) {
                for (let i = 0; i < this.container.length; i++) {
                    this.container[i].removeEventListener(eType, this.handler[eType]);
                }
            }
            else {
                this.container.removeEventListener(eType, this.handler[eType]);
            }
        }
    }
    exports.Incident = Incident;
});
//# sourceMappingURL=incident.js.map