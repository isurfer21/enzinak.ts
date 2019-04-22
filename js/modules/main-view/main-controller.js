define(["require", "exports", "enzinak/datacollection", "enzinak/viewstack", "enzinak/aviewstack", "./home", "./about", "./contact"], function (require, exports, datacollection_1, viewstack_1, aviewstack_1, home_1, about_1, contact_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class MainController extends aviewstack_1.AViewStack {
        constructor() {
            super();
            this.container = document.getElementById('sections');
            this.viewControl = new datacollection_1.DataCollection();
            this.viewStack = new viewstack_1.ViewStack(this);
        }
        onUnload(e) {
            if (!!e.detail) {
                this.viewControl.find(e.detail).destroy();
            }
        }
        onLoad(e) {
            if (!!e.detail) {
                this.viewControl.find(e.detail).initialize();
            }
        }
        initialize() {
            console.log('MainController.initialize');
            let home = new home_1.Home(this.viewStack);
            let about = new about_1.About(this.viewStack);
            let contact = new contact_1.Contact(this.viewStack);
            this.viewControl.initialize();
            this.viewControl.register('home', home);
            this.viewControl.register('about', about);
            this.viewControl.register('contact', contact);
            this.viewStack.initialize();
            this.viewStack.activate('home');
        }
    }
    exports.MainController = MainController;
});
//# sourceMappingURL=main-controller.js.map