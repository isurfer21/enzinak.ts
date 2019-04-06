import { DataCollection } from "enzinak/datacollection";

export class Views {
	private static instance: DataCollection;
	constructor() {}
	public static getInstance(): DataCollection {
		if (!this.instance) {
			this.instance = new DataCollection();
		}
		return this.instance;
	}
}