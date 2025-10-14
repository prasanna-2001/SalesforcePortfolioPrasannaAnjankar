import { api, LightningElement } from 'lwc';

export default class PortfolioSkillSection extends LightningElement {
    @api skills;
    connectedCallback() {
        console.log('inside the skills : ' + this.skills);
    }
}