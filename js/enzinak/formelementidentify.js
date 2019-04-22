define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class FormElementIdentify {
        /**
         * Checks that an element has a non-empty `name` and `value` property.
         * param  {Element} element  the element to check
         * return {Boolean} true if the element is an input, false if not
         */
        static isValidElement(element) {
            return (!!element.name && !!element.value) ? true : false;
        }
        /**
         * Checks if an element’s value can be saved (e.g. not an unselected checkbox).
         * param  {Element} element  the element to check
         * return {Boolean} true if the value should be added, false if not
         */
        static isValidValue(element) {
            if (['checkbox', 'radio'].indexOf(element.type) >= 0) {
                return (element.checked) ? true : false;
            }
            return true;
        }
        /**
         * Checks if an input is a checkbox, because checkboxes allow multiple values.
         * param  {Element} element  the element to check
         * return {Boolean} true if the element is a checkbox, false if not
         */
        static isCheckbox(element) {
            return (element.type === 'checkbox') ? true : false;
        }
        /**
         * Checks if an input is a `select` with the `multiple` attribute.
         * param  {Element} element  the element to check
         * return {Boolean} true if the element is a multiselect, false if not
         */
        static isMultiSelect(element) {
            return (element.options && element.multiple) ? true : false;
        }
    }
    exports.FormElementIdentify = FormElementIdentify;
});
//# sourceMappingURL=formelementidentify.js.map