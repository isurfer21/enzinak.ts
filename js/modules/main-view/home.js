define(["require", "exports", "enzinak/anchor", "enzinak/incident"], function (require, exports, anchor_1, incident_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Home {
        constructor(views) {
            this.uid = 'home';
            this.views = views;
            this.containerSelf = document.getElementById(this.uid);
            this.containerAnchor = this.containerSelf.querySelectorAll('a[href="#"]');
            this.controlAnchor = new incident_1.Incident(this.containerAnchor);
        }
        changeView(e) {
            let link = anchor_1.Anchor.handleAnchor(e);
            if (!!link) {
                this.views.activate(link);
            }
        }
        destroy() {
            console.log('modules.Home.destroy');
            this.controlAnchor.off('click');
        }
        initialize() {
            console.log('modules.Home.initialize');
            this.controlAnchor.on('click', this.changeView, this);
        }
    }
    exports.Home = Home;
});
//# sourceMappingURL=home.js.map