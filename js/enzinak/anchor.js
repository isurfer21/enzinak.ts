define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Anchor {
        constructor() { }
        static handleAnchor(e) {
            e.preventDefault();
            let element = e.currentTarget;
            let url = element.getAttribute('href');
            if (url == '#') {
                let link = element.getAttribute('data-link');
                return (!!link) ? link : null;
            }
            else {
                window.location.href = url;
            }
            return null;
        }
    }
    exports.Anchor = Anchor;
    ;
});
//# sourceMappingURL=anchor.js.map