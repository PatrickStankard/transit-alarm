'use strict';

import { Capacitor } from '@capacitor/core';

export class AppStoreBadges {

    constructor() {
        this.populateUiElements();
    }

    populateUiElements() {
        this.toggleAppStoreBadges();
    }

    toggleAppStoreBadges() {
        const platform = Capacitor.getPlatform();
        const appStoreBadges = this.getAppStoreBadgesElement();

        if (platform === 'ios' || platform === 'android') {
            this.hideElement(appStoreBadges);
        } else {
            this.showElement(appStoreBadges);
        }
    }

    getAppStoreBadgesElement() {
        return document.getElementById('app-store-badges');
    }

    showElement(element) {
        element.classList.remove('d-none');
    }

    hideElement(element) {
        element.classList.add('d-none');
    }

}
