'use strict';

export class BodyContainer {

    constructor() {
        this.populateUiElements();
    }

    populateUiElements() {
        const loadingSpinnerContainer = this.getLoadingSpinnerContainerElement();
        const bodyContentContainer = this.getBodyContentContainerElement();

        this.hideElement(loadingSpinnerContainer);
        this.showElement(bodyContentContainer);
    }

    getLoadingSpinnerContainerElement() {
        return document.getElementById('loading-spinner-container');
    }

    getBodyContentContainerElement() {
        return document.getElementById('body-content-container');
    }

    showElement(element) {
        element.classList.remove('d-none');
    }

    hideElement(element) {
        element.classList.add('d-none');
    }

}
