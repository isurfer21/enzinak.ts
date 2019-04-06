import { Vision } from './vision';
import { Trigger } from './trigger';
import { Incident } from './incident';

export class ViewStack {
	private container: any;
	private realm: any;
	private activeId?: string;
	private control: Incident;

	constructor(realm: any) {
		this.realm = realm;
		this.container = this.realm.container;
		this.control = new Incident(this.container);
	}
	private deactivateAll() {
		for (let i: number = 0, len: number = this.container.childElementCount; i < len; i++) {
			Vision.hide(this.container.children[i]);
		}
	}
	public initialize() {
		this.control.on('sectionunload', this.realm.onUnload, this.realm);
		this.control.on('sectionload', this.realm.onLoad, this.realm);
	}
	public destroy() {
		this.control.off('sectionunload');
		this.control.off('sectionload');
	}
	public activate(id: string) {
		Trigger.custom(this.container, 'sectionunload', this.activeId);
		this.deactivateAll();
		this.activeId = id;
		Vision.show(this.container.children[this.activeId]);
		Trigger.custom(this.container, 'sectionload', this.activeId);
	}
}