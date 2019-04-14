export class HashMap {
    private list: any;
    constructor(map: any) {
        this.list = (map != undefined) ? map : {};
    }
    public isEmpty() {
        return (Object.getOwnPropertyNames(this.list).length === 0);
    }
    public heap() {
        return this.list;
    }
    public add(key: string, value: any) {
        this.list[key] = value;
    }
    public remove(key: string) {
        delete this.list[key];
    }
    public fetch(key: string) {
        return this.list[key];
    }
    public find(value: any) {
        for (let o in this.list) {
            if (this.list[o] == value) {
                return o;
            }
        }
        return null;
    }
    public findAll(value: any) {
        let a = [];
        for (let o in this.list) {
            if (this.list[o] == value) {
                a.push(o);
            }
        }
        return (a.length > 0) ? a : null;
    }
}