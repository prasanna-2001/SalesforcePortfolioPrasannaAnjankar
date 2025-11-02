import { LightningElement } from 'lwc';
import PortfolioAssets from "@salesforce/resourceUrl/PortfolioAssets";
import myResume from '@salesforce/resourceUrl/PortfilioResume';

export default class PortfolioAboutSection extends LightningElement {
    imageUrl = PortfolioAssets + '/PortfolioAssets/profilepic.png';
    linkedInIcon = PortfolioAssets + '/PortfolioAssets/linkedin.png';
    githubIcon = PortfolioAssets + '/PortfolioAssets/github.png';
    trailheadIcon = PortfolioAssets + '/PortfolioAssets/trailhead.png';
    leetcodeIcon = PortfolioAssets + '/PortfolioAssets/leetcode.png';
    resumeUrl = myResume;

   
    linkedinUrl = 'https://www.linkedin.com/in/prasanna-anjankar';
    github = 'https://github.com/prasanna-2001';
    trailhead = 'https://www.salesforce.com/trailblazer/prasannaanjankar';
    leetcode = 'https://leetcode.com/u/prasanna2001/';
    connectedCallback() {
        console.log('poryfolio asset  : ' + PortfolioAssets);
    }

     viewResume() {
        window.open(this.resumeUrl, '_blank'); // opens in new tab
    }

    downloadResume() {
        const link = document.createElement('a');
        link.href = this.resumeUrl;
        link.download = 'Prasanna_Anjankar_SF_Resume.pdf'; // custom filename
        link.click();
    }


}