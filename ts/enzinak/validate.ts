export class Validate {
	// regexpPattern
    private static readonly RX_INSENSITIVE_FULLNAME = "^[a-z\\'\\.\\- ]+$";
    private static readonly RX_INSENSITIVE_EMAIL = "^[_a-z0-9-\\+]+(\\.[_a-z0-9-]+)*@[a-z0-9-]+(\\.[a-z0-9]+)*(\\.[a-z]{2,})$";
    private static readonly RX_INSENSITIVE_TELEPHONE = "^[\\+\\-\\#\\*\\(\\)\\.\\s]*([0-9][\\+\\-\\#\\*\\(\\)\\.\\s]*){7,15}$";
    private static readonly RX_INSENSITIVE_ALPHANUM = "^[\\w\\d]+$";

    // regexpModifier
    private static readonly RXM_INSENSITIVE = 'i';
    private static readonly RXM_GLOBAL = 'g';
    private static readonly RXM_MULTILINE = 'm';

	constructor() {}
	public static notNull (value: any) {
        if (null === value || 'undefined' === typeof value)
            return false;
        return true;
    }
    public static notBlank (value: any) {
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
    public static required (value: any) {
        return this.notBlank(value);
    }
    public static alphanum (value: any) {
        let pattern = new RegExp(this.RX_INSENSITIVE_ALPHANUM, this.RXM_INSENSITIVE);
        return pattern.test(value);
    }
    public static fullname (value: any) {
        let pattern = new RegExp(this.RX_INSENSITIVE_FULLNAME, this.RXM_INSENSITIVE);
        return pattern.test(value);
    }
    public static email (value: any) {
        let pattern = new RegExp(this.RX_INSENSITIVE_EMAIL, this.RXM_INSENSITIVE);
        return pattern.test(value);
    }
    public static telephone (value: any) {
        let pattern = new RegExp(this.RX_INSENSITIVE_TELEPHONE, this.RXM_INSENSITIVE);
        return pattern.test(value);
    }
    public static minLength (value: any, minlen: number) {
        return (value.length >= minlen);
    }
}