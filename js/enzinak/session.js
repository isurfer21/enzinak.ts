define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Session {
        constructor(sessionId) {
            this.SESSION = sessionId;
        }
        clear(data) {
            localStorage.removeItem(this.SESSION);
        }
        store(data) {
            localStorage.setItem(this.SESSION, JSON.stringify(data));
        }
        retrieve() {
            if (localStorage.getItem(this.SESSION) !== null) {
                let data = localStorage.getItem(this.SESSION);
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
    exports.Session = Session;
});
//# sourceMappingURL=session.js.map