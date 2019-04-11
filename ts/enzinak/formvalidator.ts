import { Vision } from './vision';

export class FormValidator {
    private fields = [];
    private fieldprefix?: string;
    private proceedOnError?: Function;
    private regexpPattern = {
        insensitive: {
            fullname: "^[a-z\\'\\.\\- ]+$",
            email: "^[_a-z0-9-\\+]+(\\.[_a-z0-9-]+)*@[a-z0-9-]+(\\.[a-z0-9]+)*(\\.[a-z]{2,})$",
            telephone: "^[\\+\\-\\#\\*\\(\\)\\.\\s]*([0-9][\\+\\-\\#\\*\\(\\)\\.\\s]*){7,15}$",
            alphanum: "^[\\w\\d]+$"
        }
    }
    private regexpModifier = {
        insensitive: 'i',
        global: 'g',
        multiline: 'm'
    }

    constructor () {}
    private NotNull (value: any) {
        if (null === value || 'undefined' === typeof value)
            return false;
        return true;
    }
    private NotBlank (value: any) {
        if ('string' !== typeof value) {
            if ('object' === typeof value) {
                return true;
            }
            return false;
        } else if ('' === value.replace(/^\s+/g, '').replace(/\s+$/g, '')) {
            return false;
        }
        return true;
    }
    private Required (value: any) {
        return this.NotBlank(value);
    }
    private Alphanum (value: any) {
        let pattern = new RegExp(this.regexpPattern.insensitive.alphanum, this.regexpModifier.insensitive);
        return pattern.test(value);
    }
    private FullName (value: any) {
        let pattern = new RegExp(this.regexpPattern.insensitive.fullname, this.regexpModifier.insensitive);
        return pattern.test(value);
    }
    private Email (value: any) {
        let pattern = new RegExp(this.regexpPattern.insensitive.email, this.regexpModifier.insensitive);
        return pattern.test(value);
    }
    private Telephone (value: any) {
        let pattern = new RegExp(this.regexpPattern.insensitive.telephone, this.regexpModifier.insensitive);
        return pattern.test(value);
    }
    private MinLength (value: any, minlen: number) {
        return (value.length >= minlen);
    }
    private error (fieldname: string, bool: boolean, message: string) {
        if (this.proceedOnError != undefined) {
            this.proceedOnError(fieldname, bool, message);
        } else {
            let fieldwrapper = document.querySelectorAll('div#' + this.fieldprefix + fieldname + ' div.error');
            if (!bool) {
                Vision.show(fieldwrapper);
                fieldwrapper[0].innerHTML = message;
            } else {
                Vision.hide(fieldwrapper);
                fieldwrapper[0].innerHTML = '';
            }
        }
        return bool;
    }
    public setErrorCallback (callback: Function) {
        this.proceedOnError = callback;
    }
    public setFields (list: any) {
        this.fields = list;
    }
    public setFieldPrefix (prefix: string) {
        this.fieldprefix = prefix;
    }
    public isValid (values: any) {
        let totalerrors = [];
        for (let i in this.fields) {
            let status = null,
                isrequired = false;
            for (let j in this.fields[i]) {
                switch (j) {
                    case 'Required':
                        isrequired = true;
                        status = this.error(i, this.Required(values[i]), this.fields[i][j]);
                        break;
                    case 'FullName':
                        if (isrequired || this.NotBlank(values[i])) {
                            status = this.error(i, this.FullName(values[i]), this.fields[i][j]);
                        }
                        break;
                    case 'Alphanum':
                        if (isrequired || this.NotBlank(values[i])) {
                            status = this.error(i, this.Alphanum(values[i]), this.fields[i][j]);
                        }
                        break;
                    case 'Email':
                        if (isrequired || this.NotBlank(values[i])) {
                            status = this.error(i, this.Email(values[i]), this.fields[i][j]);
                        }
                        break;
                    case 'Telephone':
                        if (isrequired || this.NotBlank(values[i])) {
                            status = this.error(i, this.Telephone(values[i]), this.fields[i][j]);
                        }
                        break;
                    case 'MinLength':
                        if (isrequired || this.NotBlank(values[i])) {
                            status = this.error(i, this.MinLength(values[i], this.fields[i][j][0]), this.fields[i][j][1]);
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