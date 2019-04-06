export class ObjectList {
    private list: Array<any>;
    constructor() {
        this.list = [];
    }
    public findItemIndex(key: string, val: string): number {
        for (let i: number = 0, len: number = this.list.length; i < len; i++) {
            if (this.list[i].hasOwnProperty(key) && this.list[i][key] == val) {
                return i;
            }
        }
        return -1;
    }
    public fetchItem(index: number): any {
        return this.list[index];
    }
    public fetchItemByKey(key: string, val: string): any {
        let index: number = this.findItemIndex(key, val);
        return (index >= 0) ? this.list[index] : null;
    }
    public removeItem(index: number): boolean {
        let item = this.list.splice(index, 1);
        return !!item;
    }
    public removeItemByKey(key: string, val: string): boolean {
        let index: number = this.findItemIndex(key, val);
        return (index >= 0) ? this.removeItem(index) : false;
    }
    public insertItem(item: any) {
        this.list.push(item);
    }
    public initialize() {
        this.list = [];
    }
}