import { LightningElement, track } from 'lwc';
import PortfolioAssets from "@salesforce/resourceUrl/PortfolioAssets";

export default class MyPortfolioNavigation extends LightningElement {
    navicon = PortfolioAssets + '/PortfolioAssets/navbar.png';
    flag = true;

    handleOnClickEvent(event) {
        event.preventDefault();
        const href = event.currentTarget.dataset.id;
        console.log("href", href);
        console.log("trget", event.currentTarget);

        const currentSelectedBox = this.template.querySelectorAll('.selectedBox');
        console.log('selectted box  ; ' + JSON.stringify(currentSelectedBox));
        currentSelectedBox.forEach(item => {
        item.classList.remove('selectedBox');
    });
        event.currentTarget.parentElement.classList.add('selectedBox');
        this.dispatchEvent(new CustomEvent('navigationhandle', {
            detail: href
        }));
        this.changeNavigation();
    }

    changeNavigation() {
        if (this.flag == true) {
            console.log('Portfolip link : ' + PortfolioAssets + '/PortfolioAssets/imgName.png');
            this.navicon = PortfolioAssets + '/PortfolioAssets/x.png';
            this.flag = false;
        } else {
            this.navicon = PortfolioAssets + '/PortfolioAssets/navbar.png';
            this.flag = true;
        }
        const togglebtn = this.template.querySelector('.togglebtn');
        const dropDownMenu = this.template.querySelector('.dropdown');
        dropDownMenu.classList.toggle('open');
    }
}