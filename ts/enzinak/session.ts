export class Session {
    private SESSION: string;
    constructor(sessionId: string) {
        this.SESSION = sessionId;
    }
    public clear(data: any) {
        localStorage.removeItem(this.SESSION);
    }
    public store(data: any) {
        localStorage.setItem(this.SESSION, JSON.stringify(data));
    }
    public retrieve() {
        if (localStorage.getItem(this.SESSION) !== null) {
            let data: any = localStorage.getItem(this.SESSION);
            if (!!data) {
                return JSON.parse(data);
            }
        }
        return null;
    }
    public admittance(proceed: Function) {
        if (this.retrieve() !== null) {
            proceed();
        }
    }
}