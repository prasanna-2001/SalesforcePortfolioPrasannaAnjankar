import { LightningElement, api } from 'lwc';
import PortfolioAssets from "@salesforce/resourceUrl/PortfolioAssets";

export default class PortfolioExperienceSection extends LightningElement {
    @api experiences;
    persiLogo = PortfolioAssets + '/PortfolioAssets/persiLogo.png';
    persiUrl = 'https://www.persistent.com/';
    connectedCallback() {
        console.log('inside project: ' + this.experiences);
    }
}