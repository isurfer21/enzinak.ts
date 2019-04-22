define(["require", "exports", "modules/main-view/main-controller", "modules/views"], function (require, exports, main_controller_1, views_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    console.log('main -> initialized');
    var mainController = new main_controller_1.MainController();
    var views = views_1.Views.getInstance();
    views.initialize();
    views.register('main', mainController);
    mainController.initialize();
});
//# sourceMappingURL=main.js.map