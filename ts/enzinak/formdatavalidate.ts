import { Vision } from './vision';
import { Validate } from './validate';

export class FormDataValidate {
    private fieldValidations = [];
    private fieldWrapperPrefix?: string;
    private proceedOnError?: Function;

    constructor() { }
    private error(fieldname: string, valid: boolean, message: string): boolean {
        if (this.proceedOnError != undefined) {
            this.proceedOnError(fieldname, valid, message);
        } else {
            let fieldWrapper = document.querySelectorAll('#' + this.fieldWrapperPrefix + fieldname + ' .error');
            if (!valid) {
                Vision.show(fieldWrapper);
                fieldWrapper[0].innerHTML = message;
            } else {
                Vision.hide(fieldWrapper);
                fieldWrapper[0].innerHTML = '';
            }
        }
        return valid;
    }
    public setErrorCallback(callback: Function): void {
        this.proceedOnError = callback;
    }
    public setFieldValidations(list: any): void {
        this.fieldValidations = list;
    }
    public setFieldWrapperPrefix(prefix: string): void {
        this.fieldWrapperPrefix = prefix;
    }
    public isValid(values: any): boolean {
        let totalErrors = [];
        for (let i in this.fieldValidations) {
            let valid = null,
                isRequired: boolean = false;
            for (let j in this.fieldValidations[i]) {
                switch (j) {
                    case 'Required':
                        isRequired = true;
                        valid = this.error(i, Validate.required(values[i]), this.fieldValidations[i][j]);
                        break;
                    case 'FullName':
                        if (isRequired || Validate.notBlank(values[i])) {
                            valid = this.error(i, Validate.fullname(values[i]), this.fieldValidations[i][j]);
                        }
                        break;
                    case 'Alphanum':
                        if (isRequired || Validate.notBlank(values[i])) {
                            valid = this.error(i, Validate.alphanum(values[i]), this.fieldValidations[i][j]);
                        }
                        break;
                    case 'Email':
                        if (isRequired || Validate.notBlank(values[i])) {
                            valid = this.error(i, Validate.email(values[i]), this.fieldValidations[i][j]);
                        }
                        break;
                    case 'Telephone':
                        if (isRequired || Validate.notBlank(values[i])) {
                            valid = this.error(i, Validate.telephone(values[i]), this.fieldValidations[i][j]);
                        }
                        break;
                    case 'MinLength':
                        if (isRequired || Validate.notBlank(values[i])) {
                            valid = this.error(i, Validate.minLength(values[i], this.fieldValidations[i][j][0]), this.fieldValidations[i][j][1]);
                        }
                        break;
                }
                if (valid !== null && !valid) {
                    totalErrors.push('x');
                    break;
                }
            }
        }
        return (totalErrors.join('').length > 0) ? false : true;
    }
}