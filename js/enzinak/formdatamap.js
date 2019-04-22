define(["require", "exports", "./formelementidentify"], function (require, exports, formelementidentify_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class FormDataMap {
        constructor(formRef) {
            this.form = formRef;
            this.formData = null;
        }
        filterSelectedValues(options) {
            let values = [];
            for (let i = 0; i < options.length; i++) {
                if (options[i].selected) {
                    values.push(options[i].value);
                }
            }
            return values;
        }
        fetchElementValues(element) {
            // Make sure the element has the required properties and should be added.
            if (formelementidentify_1.FormElementIdentify.isValidElement(element) && formelementidentify_1.FormElementIdentify.isValidValue(element)) {
                if (formelementidentify_1.FormElementIdentify.isCheckbox(element)) {
                    this.formData[element.name] = (this.formData[element.name] || []).concat(element.value);
                }
                else if (formelementidentify_1.FormElementIdentify.isMultiSelect(element)) {
                    this.formData[element.name] = this.filterSelectedValues(element);
                }
                else {
                    this.formData[element.name] = element.value;
                }
            }
        }
        generate() {
            this.formData = {};
            for (let i = 0; i < this.form.length; i++) {
                this.fetchElementValues(this.form[i]);
            }
            return this.formData;
        }
    }
    exports.FormDataMap = FormDataMap;
});
//# sourceMappingURL=formdatamap.js.map