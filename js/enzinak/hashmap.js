define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class HashMap {
        constructor(map) {
            this.list = (map != undefined) ? map : {};
        }
        isEmpty() {
            return (Object.getOwnPropertyNames(this.list).length === 0);
        }
        heap() {
            return this.list;
        }
        add(key, value) {
            this.list[key] = value;
        }
        remove(key) {
            delete this.list[key];
        }
        fetch(key) {
            return this.list[key];
        }
        find(value) {
            for (let o in this.list) {
                if (this.list[o] == value) {
                    return o;
                }
            }
            return null;
        }
        findAll(value) {
            let a = [];
            for (let o in this.list) {
                if (this.list[o] == value) {
                    a.push(o);
                }
            }
            return (a.length > 0) ? a : null;
        }
    }
    exports.HashMap = HashMap;
});
//# sourceMappingURL=hashmap.js.map