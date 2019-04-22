define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Storage {
        constructor(storageId) {
            this.STORAGE = storageId;
        }
        setId(uid) {
            this.id = '_' + uid;
        }
        clear(data) {
            localStorage.removeItem(this.STORAGE + this.id);
        }
        store(data) {
            localStorage.setItem(this.STORAGE + this.id, JSON.stringify(data));
        }
        retrieve() {
            if (localStorage.getItem(this.STORAGE + this.id) !== null) {
                let data = localStorage.getItem(this.STORAGE + this.id);
                if (!!data) {
                    return JSON.parse(data);
                }
            }
            return null;
        }
        admittance(proceed) {
            if (this.retrieve() !== null) {
                proceed();
            }
        }
    }
    exports.Storage = Storage;
});
//# sourceMappingURL=storage.js.map