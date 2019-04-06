export class WatchEvent {
    public static on(elementRef: any, eventName: string, eventHandler: Function) {
        if (!!elementRef.length && elementRef.length > 0) {
            for (let i: number = 0; i < elementRef.length; i++) {
                elementRef[i].addEventListener(eventName, eventHandler);
            }
        } else {
            elementRef.addEventListener(eventName, eventHandler);
        }
    }
    public static off(elementRef: any, eventName: string, eventHandler: Function) {
        if (!!elementRef.length && elementRef.length > 0) {
            for (let i: number = 0; i < elementRef.length; i++) {
                elementRef[i].removeEventListener(eventName, eventHandler);
            }
        } else {
            elementRef.removeEventListener(eventName, eventHandler);
        }
    }
}