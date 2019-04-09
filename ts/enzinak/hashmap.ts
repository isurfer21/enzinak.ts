export class HashMap{
    private list: any;
    constructor(map) {
        this.list = (map != undefined) ? map : {};
    }
    public isEmpty() {
        return (Object.getOwnPropertyNames(this.list).length === 0);
    }
    public heap() {
        return this.list;
    }
    public add(key, value) {
        this.list[key] = value;
    }
    public remove(key) {
        delete this.list[key];
    }
    public fetch(key) {
        return this.list[key];
    }
    public find(value) {
        for (let o in this.list) {
            if (this.list[o] == value) {
                return o;
            }
        }
        return null;
    }
    public findAll(value) {
        let a = [];
        for (let o in this.list) {
            if (this.list[o] == value) {
                a.push(o);
            }
        }
        return (a.length > 0) ? a : null;
    }
}