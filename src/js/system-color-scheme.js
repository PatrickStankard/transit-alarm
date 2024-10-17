'use strict';

export class SystemColorScheme {

    constructor() {
        this.updateColorScheme();

        const darkColorSchemeQuery = this.getDarkColorSchemeQuery();
        if (darkColorSchemeQuery !== null) {
            darkColorSchemeQuery.addEventListener('change', this.updateColorScheme.bind(this));
        }
    }

    updateColorScheme() {
        const colorScheme = this.getColorScheme();

        this.setColorScheme(colorScheme);
    }

    getColorScheme() {
        const darkColorSchemeQuery = this.getDarkColorSchemeQuery();
        let colorScheme = 'light';

        if (darkColorSchemeQuery !== null && darkColorSchemeQuery.matches) {
            colorScheme = 'dark';
        }

        return colorScheme;
    }

    getDarkColorSchemeQuery() {
        let darkColorSchemeQuery = null;

        if (window.matchMedia) {
            darkColorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
        }

        return darkColorSchemeQuery;
    }

    setColorScheme(colorScheme) {
        document.documentElement.setAttribute('data-bs-theme', colorScheme);
    }

}
