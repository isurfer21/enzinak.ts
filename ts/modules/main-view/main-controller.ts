import { DataCollection } from "enzinak/datacollection";
import { ViewStack } from "enzinak/viewstack";
import { AViewStack } from "enzinak/aviewstack";

import { Home } from "./home";
import { About } from "./about";
import { Contact } from "./contact";

export class MainController extends AViewStack {
	protected container: any;
	private viewControl: DataCollection;
	private viewStack: ViewStack;
	constructor() {
		super();
		this.container = document.getElementById('sections');
		this.viewControl = new DataCollection();
		this.viewStack = new ViewStack(this);
	}	
	protected onUnload(e: CustomEvent): void {
		if (!!e.detail) {
			this.viewControl.find(e.detail)!.destroy();
		}
	}
	protected onLoad(e: CustomEvent): void {
		if (!!e.detail) {
			this.viewControl.find(e.detail)!.initialize();
		}
	}
	public initialize() {
		console.log('MainController.initialize');

		let home = new Home(this.viewStack);
		let about = new About(this.viewStack);
		let contact = new Contact(this.viewStack);

		this.viewControl.initialize();
		this.viewControl.register('home', home);
		this.viewControl.register('about', about);
		this.viewControl.register('contact', contact);

		this.viewStack.initialize();
		this.viewStack.activate('home');
	}
}