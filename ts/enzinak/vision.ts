import { Style } from './style';

export class Vision {
    public static hide(ref: any) {
        if (!!ref) {
            if (!!ref.length) {
                for (var i = 0; i < ref.length; i++) {
                    Style.addClass(ref[i], 'hide');
                }
            } else {
                Style.addClass(ref, 'hide');
            }
        }
    }
    public static show(ref: any) {
        if (!!ref) {
            if (!!ref.length) {
                for (var i = 0; i < ref.length; i++) {
                    Style.removeClass(ref[i], 'hide');
                }
            } else {
                Style.removeClass(ref, 'hide');
            }
        }
    }
}