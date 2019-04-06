import { ViewStack } from "enzinak/viewstack";
import { Anchor } from "enzinak/anchor";
import { Incident } from "enzinak/incident";

export class Home {
	private uid = 'home';
	private containerSelf: HTMLElement;
	private containerAnchor: NodeList;
	private controlAnchor: Incident;
	private views: ViewStack;

	constructor(views: ViewStack) {
		this.views = views;
		this.containerSelf = <HTMLElement>document.getElementById(this.uid);
		this.containerAnchor = this.containerSelf.querySelectorAll('a[href="#"]');
		this.controlAnchor = new Incident(this.containerAnchor);
	}
	private changeView(e: Event) {
		let link = Anchor.handleAnchor(e);
		if (!!link) {
			this.views.activate(link);
		}
	}
	public destroy() {
		console.log('modules.Home.destroy');
		this.controlAnchor.off('click');
	}
	public initialize() {
		console.log('modules.Home.initialize');
		this.controlAnchor.on('click', this.changeView, this);
	}
}