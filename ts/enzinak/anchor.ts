export class Anchor {
	constructor() {}
	public static handleAnchor(e: Event) {
		e.preventDefault();
		let element: HTMLElement = e.currentTarget as HTMLElement;
		let url: string = element.getAttribute('href') as string;
		if (url == '#') {
			let link = element.getAttribute('data-link');
			return (!!link) ? link : null;
		} else {
			window.location.href = url;
		}
		return null;
	}
};