import { LightningElement } from 'lwc';
import PortfolioAssets from "@salesforce/resourceUrl/PortfolioAssets";

export default class PortfolioAboutSection extends LightningElement {
    imageUrl = PortfolioAssets + '/PortfolioAssets/profilepic.png';
    linkedInIcon = PortfolioAssets + '/PortfolioAssets/linkedin.png';
    githubIcon = PortfolioAssets + '/PortfolioAssets/github.png';
    trailheadIcon = PortfolioAssets + '/PortfolioAssets/trailhead.png';
    leetcodeIcon = PortfolioAssets + '/PortfolioAssets/leetcode.png';


    linkedinUrl = 'https://www.linkedin.com/in/prasanna-anjankar';
    github = 'https://github.com/prasanna-2001';
    trailhead = 'https://www.salesforce.com/trailblazer/prasannaanjankar';
    leetcode = 'https://leetcode.com/u/prasanna2001/';

}