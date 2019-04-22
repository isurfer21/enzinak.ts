define(["require", "exports", "./vision", "./trigger", "./incident"], function (require, exports, vision_1, trigger_1, incident_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ViewStack {
        constructor(realm) {
            this.realm = realm;
            this.container = this.realm.container;
            this.control = new incident_1.Incident(this.container);
        }
        deactivateAll() {
            for (let i = 0, len = this.container.childElementCount; i < len; i++) {
                vision_1.Vision.hide(this.container.children[i]);
            }
        }
        initialize() {
            this.control.on('sectionunload', this.realm.onUnload, this.realm);
            this.control.on('sectionload', this.realm.onLoad, this.realm);
        }
        destroy() {
            this.control.off('sectionunload');
            this.control.off('sectionload');
        }
        activate(id) {
            trigger_1.Trigger.custom(this.container, 'sectionunload', this.activeId);
            this.deactivateAll();
            this.activeId = id;
            vision_1.Vision.show(this.container.children[this.activeId]);
            trigger_1.Trigger.custom(this.container, 'sectionload', this.activeId);
        }
    }
    exports.ViewStack = ViewStack;
});
//# sourceMappingURL=viewstack.js.map