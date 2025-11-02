import { LightningElement, track } from 'lwc';
export default class PortfolioMainComponent extends LightningElement {
    @track showAbout = true;
    @track showExperience = false;
    @track showProject = false;
    @track showSkills = false;
    @track showContact = false;
    @track showCertification = false;
    handleNavigation(event) {
        var menu = event.detail;
        console.log('menu', menu);
        if (menu == 'about') {
            console.log('About');
            this.showAbout = true;
            this.showExperience = false;
            this.showProject = false;
            this.showSkills = false;
            this.showContact = false;
            this.showCertification = false;
        } else if (menu == 'experience') {
            console.log('Experience');
            this.showAbout = false;
            this.showExperience = true;
            this.showProject = false;
            this.showSkills = false;
            this.showContact = false;
            this.showCertification = false;
        } else if (menu == 'project') {
            console.log('Project');
            this.showAbout = false;
            this.showExperience = false;
            this.showProject = true;
            this.showSkills = false;
            this.showContact = false;
            this.showCertification = false;
        } else if (menu == 'skills') {
            console.log('Skills');
            this.showAbout = false;
            this.showExperience = false;
            this.showProject = false;
            this.showSkills = true;
            this.showContact = false;
            this.showCertification = false;
        } else if (menu == 'contact') {
            console.log('Contact');
            this.showAbout = false;
            this.showExperience = false;
            this.showProject = false;
            this.showSkills = false;
            this.showContact = true;
            this.showCertification = false;
        }
        else if (menu == 'certificate') {
            console.log('Certificate');
            this.showAbout = false;
            this.showExperience = false;
            this.showProject = false;
            this.showSkills = false;
            this.showContact = false;
            this.showCertification = true;
        }
    }
}