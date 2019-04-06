import { ObjectList } from './objectlist';

export class DataCollection {
    public objectList: ObjectList;
    constructor() {
        this.objectList = new ObjectList();
    }
    public register(id: string, data: any) {
        this.objectList.insertItem({
            id: id,
            data: data
        });
    }
    public unregister(id: string) {
        return this.objectList.removeItemByKey('id', id);
    }
    public find(id: string) {
        let item = this.objectList.fetchItemByKey('id', id);
        if (item != null) {
            return item.data;
        }
        return null;
    }
    public initialize() {
        this.objectList.initialize();
    }
}