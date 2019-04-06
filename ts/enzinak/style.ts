export class Style {
    public static getValue(elementRef: HTMLElement, ruleName: any) {
        return getComputedStyle(elementRef)[ruleName];
    }
    public static hasClass(elementRef: HTMLElement, className: string) {
        if (elementRef.classList) {
            elementRef.classList.contains(className);
        } else {
            new RegExp('(^| )' + className + '( |$)', 'gi').test(elementRef.className);
        }
    }
    public static addClass(elementRef: HTMLElement, className: string) {
        if (elementRef.classList) {
            elementRef.classList.add(className);
        } else {
            elementRef.className += ' ' + className;
        }
    }
    public static removeClass(elementRef: HTMLElement, className: string) {
        if (elementRef.classList) {
            elementRef.classList.remove(className);
        } else {
            elementRef.className = elementRef.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    }
    public static toggleClass(elementRef: HTMLElement, className: string) {
        if (elementRef.classList) {
            elementRef.classList.toggle(className);
        } else {
            let classes = elementRef.className.split(' ');
            let existingIndex = classes.indexOf(className);
            if (existingIndex >= 0) {
                classes.splice(existingIndex, 1);
            } else {
                classes.push(className);
            }
            elementRef.className = classes.join(' ');
        }
    }
}
