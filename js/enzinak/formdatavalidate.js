define(["require", "exports", "./vision", "./validate"], function (require, exports, vision_1, validate_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class FormDataValidate {
        constructor() {
            this.fieldValidations = [];
        }
        error(fieldname, valid, message) {
            if (this.proceedOnError != undefined) {
                this.proceedOnError(fieldname, valid, message);
            }
            else {
                let fieldWrapper = document.querySelectorAll('#' + this.fieldWrapperPrefix + fieldname + ' .error');
                if (!valid) {
                    vision_1.Vision.show(fieldWrapper);
                    fieldWrapper[0].innerHTML = message;
                }
                else {
                    vision_1.Vision.hide(fieldWrapper);
                    fieldWrapper[0].innerHTML = '';
                }
            }
            return valid;
        }
        setErrorCallback(callback) {
            this.proceedOnError = callback;
        }
        setFieldValidations(list) {
            this.fieldValidations = list;
        }
        setFieldWrapperPrefix(prefix) {
            this.fieldWrapperPrefix = prefix;
        }
        isValid(values) {
            let totalErrors = 0;
            for (let i in this.fieldValidations) {
                let valid = null, isRequired = false;
                for (let j in this.fieldValidations[i]) {
                    switch (j) {
                        case 'Required':
                            isRequired = true;
                            valid = this.error(i, validate_1.Validate.required(values[i]), this.fieldValidations[i][j]);
                            break;
                        case 'FullName':
                            if (isRequired || validate_1.Validate.notBlank(values[i])) {
                                valid = this.error(i, validate_1.Validate.fullname(values[i]), this.fieldValidations[i][j]);
                            }
                            break;
                        case 'Alphanum':
                            if (isRequired || validate_1.Validate.notBlank(values[i])) {
                                valid = this.error(i, validate_1.Validate.alphanum(values[i]), this.fieldValidations[i][j]);
                            }
                            break;
                        case 'Email':
                            if (isRequired || validate_1.Validate.notBlank(values[i])) {
                                valid = this.error(i, validate_1.Validate.email(values[i]), this.fieldValidations[i][j]);
                            }
                            break;
                        case 'Telephone':
                            if (isRequired || validate_1.Validate.notBlank(values[i])) {
                                valid = this.error(i, validate_1.Validate.telephone(values[i]), this.fieldValidations[i][j]);
                            }
                            break;
                        case 'MinLength':
                            if (isRequired || validate_1.Validate.notBlank(values[i])) {
                                valid = this.error(i, validate_1.Validate.minLength(values[i], this.fieldValidations[i][j][0]), this.fieldValidations[i][j][1]);
                            }
                            break;
                    }
                    if (valid !== null && !valid) {
                        totalErrors++;
                        break;
                    }
                }
            }
            return (totalErrors > 0) ? false : true;
        }
    }
    exports.FormDataValidate = FormDataValidate;
});
//# sourceMappingURL=formdatavalidate.js.map