define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ObjectList {
        constructor() {
            this.list = [];
        }
        findItemIndex(key, val) {
            for (let i = 0, len = this.list.length; i < len; i++) {
                if (this.list[i].hasOwnProperty(key) && this.list[i][key] == val) {
                    return i;
                }
            }
            return -1;
        }
        fetchItem(index) {
            return this.list[index];
        }
        fetchItemByKey(key, val) {
            let index = this.findItemIndex(key, val);
            return (index >= 0) ? this.list[index] : null;
        }
        removeItem(index) {
            let item = this.list.splice(index, 1);
            return !!item;
        }
        removeItemByKey(key, val) {
            let index = this.findItemIndex(key, val);
            return (index >= 0) ? this.removeItem(index) : false;
        }
        insertItem(item) {
            this.list.push(item);
        }
        initialize() {
            this.list = [];
        }
    }
    exports.ObjectList = ObjectList;
});
//# sourceMappingURL=objectlist.js.map