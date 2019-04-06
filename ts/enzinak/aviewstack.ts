export abstract class AViewStack {
	protected container: any;
	protected abstract onUnload(e: CustomEvent): void
	protected abstract onLoad(e: CustomEvent): void
}