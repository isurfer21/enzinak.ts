export class Singleton {
	private instance: any;
	private className: any;

	constructor(className: any) {
		this.className = className;
	}
	public getInstance(): any {
		if (!this.instance) {
			this.instance = new this.className();
		}
		return this.instance;
	}
}