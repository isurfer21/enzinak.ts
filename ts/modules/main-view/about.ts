import { ViewStack } from "enzinak/viewstack";
import { Anchor } from "enzinak/anchor";
import { Incident } from "enzinak/incident";
import { Etch } from "enzinak/etch";

export class About {
	private uid = 'about';
	private containerSelf: HTMLElement;

	private containerAnchor: NodeList;
	private controlAnchor: Incident;

	private containerBoardMembers: HTMLElement;
	private containerAssociatedBrands: HTMLElement;

	private views: ViewStack;

	constructor(views: ViewStack) {
		this.views = views;

		this.containerSelf = <HTMLElement>document.getElementById(this.uid);

		this.containerAnchor = this.containerSelf.querySelectorAll('a[href="#"]');
		this.controlAnchor = new Incident(this.containerAnchor);

		this.containerBoardMembers = <HTMLElement>this.containerSelf.querySelector('#about_boardmembers');
		this.containerAssociatedBrands = <HTMLElement>this.containerSelf.querySelector('#about_associatedbrands');
	}
	private changeView(e: Event) {
		let link = Anchor.handleAnchor(e);
		if (!!link) {
			this.views.activate(link);
		}
	}
	private renderBoardMembers(list: any) {
		let output: string = '';
		for (let i = 0; i < list.length; i++) {
			output += Etch.fit('<p><a href="mailto:[email]">[name]</a><br><span><small>[brief]</small></span></p>', list[i]);
		}
		this.containerBoardMembers.innerHTML = output;
	}
	public destroy() {
		console.log('modules.About.destroy');
		this.controlAnchor.off('click');
	}
	public initialize() {
		console.log('modules.About.initialize');
		this.controlAnchor.on('click', this.changeView, this);

		let boardMembers = [
			{
				name: 'Tony Stark',
				email: 'tony.stark@stark.com',
				brief: 'He is tend to be exceptionally fast thinker and also exceptionally charismatic, even though their short-comings are usually on display. In short, his originality, energy, and brains always impress others.'
			},
			{
				name: "T'Challa",
				email: 'tchalla@wakanda.gov.wa',
				brief: 'He is natural-born, charismatic and inspiring leader, who invigorates others. He is also a brilliant strategic thinker who is constantly efficient. He is also confident but let his emotions get the best of him.'
			}
		];
		this.renderBoardMembers(boardMembers);

		// this.containerAssociatedBrands.innerHTML = Etch.graft('<li>[0]</li><li>[1]</li><li>[2]</li>', 'GitHub', 'Google', 'StackOverflow');
		this.containerAssociatedBrands.innerHTML = Etch.cast('[0][1][2]', ['GitHub', 'Google', 'StackOverflow'], '<li>[0]</li>');
		// this.containerAssociatedBrands.innerHTML = Etch.cast('[a][b][c]', {a:'GitHub', b:'Google', c:'StackOverflow'}, '<li>[0]</li>');
	}
}