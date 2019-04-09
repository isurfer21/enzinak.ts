export class Storage {
    private STORAGE: string;
    private id?: string;
    constructor (storageId: string) {
        this.STORAGE = storageId;
    }
    public setId (uid: string) {
       this.id = '_' + uid;
    }
    public clear (data: string) {
        localStorage.removeItem(this.STORAGE + this.id);
    }
    public store (data: string) {
        localStorage.setItem(this.STORAGE + this.id, JSON.stringify(data));
    }
    public retrieve () {
        if (localStorage.getItem(this.STORAGE + this.id) !== null) {
            let data = localStorage.getItem(this.STORAGE + this.id);
            if (!!data) {
                return JSON.parse(data);
            }
        }
        return null;
    }
    public admittance (proceed: Function) {
        if (this.retrieve() !== null) {
            proceed();
        }
    }
}