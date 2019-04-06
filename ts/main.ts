import { DataCollection } from "enzinak/datacollection";
import { Singleton } from "enzinak/singleton";
import { MainController } from "modules/main-view/main-controller";
import { Views } from "modules/views";

console.log('main -> initialized');

var mainController = new MainController();

var views = Views.getInstance();
views.initialize();
views.register('main', mainController);

mainController.initialize();