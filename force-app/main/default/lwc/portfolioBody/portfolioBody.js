import { LightningElement, api, wire, track } from 'lwc';
import getSkills from "@salesforce/apex/PortfolioController.getSkills";
import getProjects from "@salesforce/apex/PortfolioController.getProjects";

export default class PortfolioBody extends LightningElement {
    @api showAbout = false;
    @api showExperijence = false;
    @api showProject = false;
    @api showSkills = false;
    @api showContact = false;

    @track skills;
    @track projects;

    @wire(getProjects)
    portfolioProjects({ data, error }) {
        if (data) {
            console.log('data project : ' + data);
            this.projects = JSON.parse(data);
        }
        else if (error) {
            console.log('error project : ' + JSON.stringify(error));
        }
        else {
            console.log('somethingelse project');
        }
    };
    @wire(getSkills)
    portfolioSkills({ data, error }) {
        if (data) {
            console.log('data skill : ' + data);
            this.skills = JSON.parse(data);
        }
        else if (error) {
            console.log('error skill : ' + JSON.stringify(error));
        }
        else {
            console.log('somethingelse skill');
        }
    };
}