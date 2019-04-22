define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Style {
        static getValue(elementRef, ruleName) {
            return getComputedStyle(elementRef)[ruleName];
        }
        static hasClass(elementRef, className) {
            if (elementRef.classList) {
                return elementRef.classList.contains(className);
            }
            else {
                return new RegExp('(^| )' + className + '( |$)', 'gi').test(elementRef.className);
            }
        }
        static addClass(elementRef, classNames) {
            if (elementRef.classList) {
                let classes = classNames.split(' ');
                elementRef.classList.add(...classes);
            }
            else {
                elementRef.className += ' ' + classNames;
            }
        }
        static removeClass(elementRef, classNames) {
            if (elementRef.classList) {
                let classes = classNames.split(' ');
                elementRef.classList.remove(...classes);
            }
            else {
                elementRef.className = elementRef.className.replace(new RegExp('(^|\\b)' + classNames.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
            }
        }
        static toggleClass(elementRef, className) {
            if (elementRef.classList) {
                elementRef.classList.toggle(className);
            }
            else {
                let classes = elementRef.className.split(' ');
                let existingIndex = classes.indexOf(className);
                if (existingIndex >= 0) {
                    classes.splice(existingIndex, 1);
                }
                else {
                    classes.push(className);
                }
                elementRef.className = classes.join(' ');
            }
        }
    }
    exports.Style = Style;
});
//# sourceMappingURL=style.js.map