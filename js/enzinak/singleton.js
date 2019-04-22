define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Singleton {
        constructor(className) {
            this.className = className;
        }
        getInstance() {
            if (!this.instance) {
                this.instance = new this.className();
            }
            return this.instance;
        }
    }
    exports.Singleton = Singleton;
});
//# sourceMappingURL=singleton.js.map