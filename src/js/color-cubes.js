'use strict';

import { mtaColors } from './mta-colors.js';

export class ColorCubes {

    mtaOperatorOrService = 'MTA';
    lirrOperator = 'Long Island Rail Road';
    mnrOperator = 'Metro-North Railroad';
    nyctOperator = 'New York City Subway';

    constructor() {
        this.populateUiElements();
    }

    populateUiElements() {
        const colorCubesContainer = this.getColorCubesContainerElement();
        const colors = this.fetchColors();

        this.populateColorCubes(colors);
        this.showElement(colorCubesContainer);
    }

    fetchColors() {
        const colors = {
            mta: null,
            lirr: {},
            mnr: {},
            nyct: {}
        };

        for (let i = 0; i < mtaColors.length; i++) {
            const row = mtaColors[i];

            if (
                row.operator === this.mtaOperatorOrService &&
                row.service === this.mtaOperatorOrService
            ) {
                colors.mta = row.hex_color;
            } else if (row.operator === this.lirrOperator) {
                colors.lirr[row.service] = row.hex_color;
            } else if (row.operator === this.mnrOperator) {
                colors.mnr[row.service] = row.hex_color;
            } else if (row.operator === this.nyctOperator) {
                colors.nyct[row.service] = row.hex_color;
            }
        }

        return colors;
    }

    populateColorCubes(colors) {
        let lirrStationNames = [];
        let mnrStationNames = [];
        let nyctStationNames = [];

        for (const branchName in colors.lirr) {
            lirrStationNames.push(branchName);
        }

        for (const branchName in colors.mnr) {
            mnrStationNames.push(branchName);
        }

        for (const branchName in colors.nyct) {
            nyctStationNames.push(branchName);
        }

        lirrStationNames = this.shuffle(lirrStationNames);
        mnrStationNames = this.shuffle(mnrStationNames);
        nyctStationNames = this.shuffle(nyctStationNames);

        // First row: MTA colors
        for (let i = 0; i < 4; i++) {
            const colorCubeDiv = this.createColorCubeDiv(colors.mta);
            const colorCubesElement = this.getColorCubesElement(i);

            colorCubesElement.appendChild(colorCubeDiv);
        }

        // Second row: LIRR colors
        for (let i = 0; i < lirrStationNames.length; i++) {
            if (i >= 4) {
                break;
            }

            const branchName = lirrStationNames[i];
            const branchColor = colors.lirr[branchName];
            const colorCubeDiv = this.createColorCubeDiv(branchColor);
            const colorCubesElement = this.getColorCubesElement(i + 4);

            colorCubesElement.appendChild(colorCubeDiv);
        }

        // Third row: MNR colors
        for (let i = 0; i < mnrStationNames.length; i++) {
            if (i >= 4) {
                break;
            }

            const branchName = mnrStationNames[i];
            const branchColor = colors.mnr[branchName];
            const colorCubeDiv = this.createColorCubeDiv(branchColor);
            const colorCubesElement = this.getColorCubesElement(i + 8);

            colorCubesElement.appendChild(colorCubeDiv);
        }

        // Fourth row: NYCT colors
        for (let i = 0; i < nyctStationNames.length; i++) {
            if (i >= 4) {
                break;
            }

            const branchName = nyctStationNames[i];
            const branchColor = colors.nyct[branchName];
            const colorCubeDiv = this.createColorCubeDiv(branchColor);
            const colorCubesElement = this.getColorCubesElement(i + 12);

            colorCubesElement.appendChild(colorCubeDiv);
        }
    }

    shuffle(array) {
        let currentIndex = array.length;

        while (currentIndex != 0) {
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [
                array[currentIndex], array[randomIndex]
            ] = [
                array[randomIndex], array[currentIndex]
            ];
        }

        return array;
    }

    getColorCubesContainerElement() {
        return document.getElementById('color-cubes-container');
    }

    getColorCubesElement(index) {
        return document.getElementById('color-cubes-' + index);
    }

    createColorCubeDiv(color) {
        const colorCubeDiv = document.createElement('div');

        colorCubeDiv.setAttribute('class', 'rounded-3');
        colorCubeDiv.style.backgroundColor = color;
        colorCubeDiv.style.width = '50px';
        colorCubeDiv.style.height = '50px';

        return colorCubeDiv;
    }

    showElement(element) {
        element.classList.remove('d-none');
    }

}
