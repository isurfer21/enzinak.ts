export class Trigger {
    public static custom(elementRef: HTMLElement, eventName: string, cargoObj: any) {
        let event;
        if (CustomEvent) {
            event = new CustomEvent(eventName, { detail: cargoObj });
        } else {
            event = document.createEvent('CustomEvent');
            event.initCustomEvent(eventName, true, true, cargoObj);
        }
        elementRef.dispatchEvent(event);
    }
    public static native(elementRef: HTMLElement, eventName: string) {
        let event = document.createEvent('HTMLEvents');
        event.initEvent(eventName, true, false);
        elementRef.dispatchEvent(event);
    }
}