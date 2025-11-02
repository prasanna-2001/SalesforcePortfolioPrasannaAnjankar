import { api, LightningElement } from 'lwc';
import basePath from '@salesforce/community/basePath';
import PortfolioAssets from "@salesforce/resourceUrl/PortfolioAssets";

export default class PortfolioCertificationSection extends LightningElement {
    @api certificates;
// @api height = '300px';
    @api width = '100%';
    // @api certificates = [];

    currentIndex = 0;
    autoplayInterval;
    touchStartX = 0;
    touchEndX = 0;

    connectedCallback() {
        this.startAutoplay();
    }

    disconnectedCallback() {
        clearInterval(this.autoplayInterval);
    }

    startAutoplay() {
        this.autoplayInterval = setInterval(() => {
            this.nextSlide();
        }, 2000);
    }

    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.certificates.length;
    }

    previousSlide() {
        this.currentIndex =
            (this.currentIndex - 1 + this.certificates.length) % this.certificates.length;
    }

    handleTouchStart(event) {
        this.touchStartX = event.touches[0].clientX;
    }

    handleTouchEnd(event) {
        this.touchEndX = event.changedTouches[0].clientX;
        const deltaX = this.touchEndX - this.touchStartX;

        if (Math.abs(deltaX) > 50) {
            if (deltaX < 0) {
                this.nextSlide();
            } else {
                this.previousSlide();
            }
        }
    }

    get carouselStyle() {
        return `height: ${this.height}; width: ${this.width}; overflow: hidden; position: relative;`;
    }

    get trackStyle() {
        const offset = -(this.currentIndex * 100);
        return `display: flex; transition: transform 0.5s ease; transform: translateX(${offset}%); width: ${this.certificates.length * 100}%;`;
    }
}