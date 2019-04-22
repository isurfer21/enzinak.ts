define(["require", "exports", "./style"], function (require, exports, style_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Vision {
        static hide(ref) {
            if (!!ref) {
                if (!!ref.length) {
                    for (var i = 0; i < ref.length; i++) {
                        style_1.Style.addClass(ref[i], 'hide');
                    }
                }
                else {
                    style_1.Style.addClass(ref, 'hide');
                }
            }
        }
        static show(ref) {
            if (!!ref) {
                if (!!ref.length) {
                    for (var i = 0; i < ref.length; i++) {
                        style_1.Style.removeClass(ref[i], 'hide');
                    }
                }
                else {
                    style_1.Style.removeClass(ref, 'hide');
                }
            }
        }
    }
    exports.Vision = Vision;
});
//# sourceMappingURL=vision.js.map