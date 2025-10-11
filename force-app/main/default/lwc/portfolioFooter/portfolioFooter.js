import { LightningElement } from 'lwc';
import PortfolioAssets from "@salesforce/resourceUrl/PortfolioAssets";

export default class PortfolioFooter extends LightningElement {
    linkedInIcon = PortfolioAssets + '/PortfolioAssets/linkedin.png';
    githubIcon = PortfolioAssets + '/PortfolioAssets/github.png';
    trailheadIcon = PortfolioAssets + '/PortfolioAssets/trailhead.png';
    leetcodeIcon = PortfolioAssets + '/PortfolioAssets/leetcode.png';


    linkedinUrl = 'https://www.linkedin.com/in/prasanna-anjankar';
    githubUrl = 'https://github.com/prasanna-2001';
    trailheadUrl = 'https://www.salesforce.com/trailblazer/prasannaanjankar';
    leetcodeUrl = 'https://leetcode.com/u/prasanna2001/';
    connectedCallback() {
        console.log('sdcs  :  ' + this.linkedInIcon);
    }
}
