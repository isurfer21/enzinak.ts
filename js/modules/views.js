define(["require", "exports", "enzinak/datacollection"], function (require, exports, datacollection_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Views {
        constructor() { }
        static getInstance() {
            if (!this.instance) {
                this.instance = new datacollection_1.DataCollection();
            }
            return this.instance;
        }
    }
    exports.Views = Views;
});
//# sourceMappingURL=views.js.map