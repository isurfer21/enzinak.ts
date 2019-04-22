define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Etch {
        // Usage: fitIn('<a href="#[0]" title="[1]">[1]</a>', ['test1.html', 'Test1']);
        // Result: <a href="#test1.html" title="Test1">Test1</a>
        static fitIn(template, arglist) {
            var output = template;
            for (var i = 0; i < arglist.length; i++) {
                output = output.replace(new RegExp('\\[' + i + '\\]', 'g'), arglist[i]);
            }
            return output;
        }
        // Usage: fixIn('<a href="#[Link]" title="[Content]">[Content]</a>', { Link: 'test1.html', Content: 'Test1' });
        // Result: <a href="#test1.html" title="Test1">Test1</a>
        static fixIn(template, hashtable) {
            var tag, output = template;
            for (var key in hashtable) {
                tag = new RegExp("\\[" + key + "\\]", 'g');
                output = output.replace(tag, hashtable[key]);
            }
            return output;
        }
        // Usage: castAs('[firstname] [lastname]', ['firstname', 'lastname'], "<[0]>");
        // Result: <firstname> <lastname>
        static castAs(template, keylist, cast) {
            var tag, key, output = template;
            for (var i = 0; i < keylist.length; i++) {
                key = keylist[i];
                tag = new RegExp("\\[" + key + "\\]", 'g');
                output = output.replace(tag, this.fitIn(cast, [key]));
            }
            return output;
        }
    }
    exports.Etch = Etch;
});
//# sourceMappingURL=etcher.js.map