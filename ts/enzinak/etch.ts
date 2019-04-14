export class Etch {
    /* Usage:
    1) fit('<a href="#[0]" title="[1]">[1]</a>', ['test1.html','Test1']);
       » <a href="#test1.html" title="Test1">Test1</a>
    2) fit('<a href="#[Link]" title="[Content]">[Content]</a>', {Link:'test1.html',Content:'Test1'});
       » <a href="#test1.html" title="Test1">Test1</a>
    */
    public static fit(template: string, map: any): string {
        let output: string = template;
        if (Array.isArray(map)) {
            for (let i = 0; i < map.length; i++) {
                output = output.replace(new RegExp('\\[' + i + '\\]', 'g'), map[i]);
            }
        } else {
            for (let k in map) {
                output = output.replace(new RegExp('\\[' + k + '\\]', 'g'), map[k]);
            }
        }
        return output;
    }
    /* Usage:
    1) cast('[0] [1]', ['firstname', 'lastname'], "<[0]>");
       » <firstname> <lastname>
    2) cast('[firstname] [lastname]', {firstname:'Peter', lastname:'Parker'}, "<[0]>");
       » <Peter> <Parker>
    */
    public static cast(template: string, map: any, mould: string): string {
        let value: string,
            tag: RegExp,
            output: string = template;
        for (let k in map) {
            value = map[k];
            tag = new RegExp('\\[' + k + '\\]', 'g')
            output = output.replace(tag, this.fit(mould, [value]));
        }
        return output;
    }
    /* Usage:
    1) graft('<a href="#[0]" title="[1]">[2]</a>', 'test1.html', 'Test1', 'Test1');
       » <a href="#test1.html" title="Test1">Test1</a>
    */
    public static graft(template: string, ...list: any[]): string {
        let output: string = template;
        for (let i = 0; i < list.length; i++) {
            output = output.replace('[' + i + ']', list[i]);
        }
        return output;
    }
}