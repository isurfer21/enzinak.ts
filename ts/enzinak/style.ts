export class Style {
    public static getValue(elementRef: HTMLElement, ruleName: any) {
        return getComputedStyle(elementRef)[ruleName];
    }
    public static hasClass(elementRef: HTMLElement, className: string): boolean {
        if (elementRef.classList) {
            return elementRef.classList.contains(className);
        } else {
            return new RegExp('(^| )' + className + '( |$)', 'gi').test(elementRef.className);
        }
    }
    public static addClass(elementRef: HTMLElement, classNames: string) {
        if (elementRef.classList) {
            let classes = classNames.split(' ');
            elementRef.classList.add(...classes);
        } else {
            elementRef.className += ' ' + classNames;
        }
    }
    public static removeClass(elementRef: HTMLElement, classNames: string) {
        if (elementRef.classList) {
            let classes = classNames.split(' ');
            elementRef.classList.remove(...classes);
        } else {
            elementRef.className = elementRef.className.replace(new RegExp('(^|\\b)' + classNames.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
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
