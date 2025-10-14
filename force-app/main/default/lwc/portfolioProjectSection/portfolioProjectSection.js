import { api, LightningElement } from 'lwc';

export default class PortfolioProjectSection extends LightningElement {
    @api projects;
    connectedCallback() {
        console.log('inside project: ' + this.projects);
    }
}