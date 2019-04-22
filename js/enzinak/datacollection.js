define(["require", "exports", "./objectlist"], function (require, exports, objectlist_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class DataCollection {
        constructor() {
            this.objectList = new objectlist_1.ObjectList();
        }
        register(id, data) {
            this.objectList.insertItem({
                id: id,
                data: data
            });
        }
        unregister(id) {
            return this.objectList.removeItemByKey('id', id);
        }
        find(id) {
            let item = this.objectList.fetchItemByKey('id', id);
            if (item != null) {
                return item.data;
            }
            return null;
        }
        initialize() {
            this.objectList.initialize();
        }
    }
    exports.DataCollection = DataCollection;
});
//# sourceMappingURL=datacollection.js.map