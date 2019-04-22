define(["require", "exports", "./vision", "./validator"], function (require, exports, vision_1, validator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class FormDataValidate {
        constructor() {
            this.fields = [];
        }
        error(fieldname, bool, message) {
            if (this.proceedOnError != undefined) {
                this.proceedOnError(fieldname, bool, message);
            }
            else {
                let fieldwrapper = document.querySelectorAll('div#' + this.fieldprefix + fieldname + ' div.error');
                if (!bool) {
                    vision_1.Vision.show(fieldwrapper);
                    fieldwrapper[0].innerHTML = message;
                }
                else {
                    vision_1.Vision.hide(fieldwrapper);
                    fieldwrapper[0].innerHTML = '';
                }
            }
            return bool;
        }
        setErrorCallback(callback) {
            this.proceedOnError = callback;
        }
        setFields(list) {
            this.fields = list;
        }
        setFieldPrefix(prefix) {
            this.fieldprefix = prefix;
        }
        isValid(values) {
            let totalerrors = [];
            for (let i in this.fields) {
                let status = null, isrequired = false;
                for (let j in this.fields[i]) {
                    switch (j) {
                        case 'Required':
                            isrequired = true;
                            status = this.error(i, validator_1.Validator.required(values[i]), this.fields[i][j]);
                            break;
                        case 'FullName':
                            if (isrequired || validator_1.Validator.notBlank(values[i])) {
                                status = this.error(i, validator_1.Validator.fullname(values[i]), this.fields[i][j]);
                            }
                            break;
                        case 'Alphanum':
                            if (isrequired || validator_1.Validator.notBlank(values[i])) {
                                status = this.error(i, validator_1.Validator.alphanum(values[i]), this.fields[i][j]);
                            }
                            break;
                        case 'Email':
                            if (isrequired || validator_1.Validator.notBlank(values[i])) {
                                status = this.error(i, validator_1.Validator.email(values[i]), this.fields[i][j]);
                            }
                            break;
                        case 'Telephone':
                            if (isrequired || validator_1.Validator.notBlank(values[i])) {
                                status = this.error(i, validator_1.Validator.telephone(values[i]), this.fields[i][j]);
                            }
                            break;
                        case 'MinLength':
                            if (isrequired || validator_1.Validator.notBlank(values[i])) {
                                status = this.error(i, validator_1.Validator.minLength(values[i], this.fields[i][j][0]), this.fields[i][j][1]);
                            }
                            break;
                    }
                    if (status !== null && !status) {
                        totalerrors.push('x');
                        break;
                    }
                }
            }
            return (totalerrors.join('').length > 0) ? false : true;
        }
    }
    exports.FormDataValidate = FormDataValidate;
});
//# sourceMappingURL=formvalidator.js.map