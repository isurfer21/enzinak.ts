export class Incident {
    private container: any;
    private handler: any;
    constructor(elementRef: any) {
        this.container = elementRef;
        this.handler = {};
    }
    public on(eType: string, eHandler: Function, realm: any) {
        this.handler[eType] = { 
            handleEvent: (e: CustomEvent) => eHandler.call(realm, e) 
        };
        if (!!this.container.length && this.container.length > 0) {
            for (let i: number = 0; i < this.container.length; i++) {
                this.container[i].addEventListener(eType, this.handler[eType]);
            }
        } else {
            this.container.addEventListener(eType, this.handler[eType]);
        }
    }
    public off(eType: string) {
        if (!!this.container.length && this.container.length > 0) {
            for (let i: number = 0; i < this.container.length; i++) {
                this.container[i].removeEventListener(eType, this.handler[eType]);
            }
        } else {
            this.container.removeEventListener(eType, this.handler[eType]);
        }
    }
}