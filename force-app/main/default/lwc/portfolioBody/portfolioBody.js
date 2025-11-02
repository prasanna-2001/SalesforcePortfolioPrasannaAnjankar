import { LightningElement, api, wire, track } from 'lwc';
import getSkills from "@salesforce/apex/PortfolioController.getSkills";
import getProjects from "@salesforce/apex/PortfolioController.getProjects";
import getExperience from "@salesforce/apex/PortfolioController.getExperience";
import getCertificates from "@salesforce/apex/PortfolioController.getCertificates";

export default class PortfolioBody extends LightningElement {
    @api showAbout = false;
    @api showExperience = false;
    @api showProject = false;
    @api showSkills = false;
    @api showContact = false;
    @api showCertification = false;

    @track skills;
    @track projects;
    @track experiences;
    @track certificates;

    @wire(getProjects)
    portfolioProjects({ data, error }) {
        if (data) {
            //console.log('data project : ' + data);
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
            // console.log('data skill : ' + data);
            this.skills = JSON.parse(data);
        }
        else if (error) {
            console.log('error skill : ' + JSON.stringify(error));
        }
        else {
            console.log('somethingelse skill');
        }
    };
    @wire(getExperience)
    portfolioExperience({ data, error }) {
        if (data) {
            console.log('data exp : ' + data);
            this.experiences = JSON.parse(data);
        }
        else if (error) {
            console.log('error exp : ' + JSON.stringify(error));
        }
        else {
            console.log('somethingelse skill');
        }
    };

    @wire(getCertificates)
    portfoliocertificates({ data, error }) {
        if (data) {
            console.log('data cert : ' + data);
            this.certificates = JSON.parse(data);
        }
        else if (error) {
            console.log('error cert : ' + JSON.stringify(error));
        }
        else {
            console.log('somethingelse cert');
        }
    };
}