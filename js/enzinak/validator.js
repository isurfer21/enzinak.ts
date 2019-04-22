define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Validate {
        constructor() { }
        static notNull(value) {
            if (null === value || 'undefined' === typeof value)
                return false;
            return true;
        }
        static notBlank(value) {
            if ('string' !== typeof value) {
                if ('object' === typeof value) {
                    return true;
                }
                return false;
            }
            else if ('' === value.replace(/^\s+/g, '').replace(/\s+$/g, '')) {
                return false;
            }
            return true;
        }
        static required(value) {
            return this.notBlank(value);
        }
        static alphanum(value) {
            let pattern = new RegExp(this.RX_INSENSITIVE_ALPHANUM, this.RXM_INSENSITIVE);
            return pattern.test(value);
        }
        static fullname(value) {
            let pattern = new RegExp(this.RX_INSENSITIVE_FULLNAME, this.RXM_INSENSITIVE);
            return pattern.test(value);
        }
        static email(value) {
            let pattern = new RegExp(this.RX_INSENSITIVE_EMAIL, this.RXM_INSENSITIVE);
            return pattern.test(value);
        }
        static telephone(value) {
            let pattern = new RegExp(this.RX_INSENSITIVE_TELEPHONE, this.RXM_INSENSITIVE);
            return pattern.test(value);
        }
        static minLength(value, minlen) {
            return (value.length >= minlen);
        }
    }
    // regexpPattern
    Validate.RX_INSENSITIVE_FULLNAME = "^[a-z\\'\\.\\- ]+$";
    Validate.RX_INSENSITIVE_EMAIL = "^[_a-z0-9-\\+]+(\\.[_a-z0-9-]+)*@[a-z0-9-]+(\\.[a-z0-9]+)*(\\.[a-z]{2,})$";
    Validate.RX_INSENSITIVE_TELEPHONE = "^[\\+\\-\\#\\*\\(\\)\\.\\s]*([0-9][\\+\\-\\#\\*\\(\\)\\.\\s]*){7,15}$";
    Validate.RX_INSENSITIVE_ALPHANUM = "^[\\w\\d]+$";
    // regexpModifier
    Validate.RXM_INSENSITIVE = 'i';
    Validate.RXM_GLOBAL = 'g';
    Validate.RXM_MULTILINE = 'm';
    exports.Validate = Validate;
});
//# sourceMappingURL=validator.js.map