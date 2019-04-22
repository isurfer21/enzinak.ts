define(["require", "exports", "enzinak/anchor", "enzinak/incident", "enzinak/etch"], function (require, exports, anchor_1, incident_1, etch_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class About {
        constructor(views) {
            this.uid = 'about';
            this.views = views;
            this.containerSelf = document.getElementById(this.uid);
            this.containerAnchor = this.containerSelf.querySelectorAll('a[href="#"]');
            this.controlAnchor = new incident_1.Incident(this.containerAnchor);
            this.containerBoardMembers = this.containerSelf.querySelector('#about_boardmembers');
            this.containerAssociatedBrands = this.containerSelf.querySelector('#about_associatedbrands');
        }
        changeView(e) {
            let link = anchor_1.Anchor.handleAnchor(e);
            if (!!link) {
                this.views.activate(link);
            }
        }
        renderBoardMembers(list) {
            let output = '';
            for (let i = 0; i < list.length; i++) {
                output += etch_1.Etch.fit('<p><a href="mailto:[email]">[name]</a><br><span><small>[brief]</small></span></p>', list[i]);
            }
            this.containerBoardMembers.innerHTML = output;
        }
        destroy() {
            console.log('modules.About.destroy');
            this.controlAnchor.off('click');
        }
        initialize() {
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
            this.containerAssociatedBrands.innerHTML = etch_1.Etch.cast('[0][1][2]', ['GitHub', 'Google', 'StackOverflow'], '<li>[0]</li>');
            // this.containerAssociatedBrands.innerHTML = Etch.cast('[a][b][c]', {a:'GitHub', b:'Google', c:'StackOverflow'}, '<li>[0]</li>');
        }
    }
    exports.About = About;
});
//# sourceMappingURL=about.js.map