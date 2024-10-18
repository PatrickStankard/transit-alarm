'use strict';

import fs from 'fs';
import path from 'path';

export const lirrDirectory = 'gtfslirr';
export const mnrDirectory = 'gtfsmnr';
export const stopsFileName = 'stops.txt';

export function parseAllStopsFiles(directoryPath) {
    const result = {};
    const lirrStopsFilePath = path.join(directoryPath, lirrDirectory, stopsFileName);
    const mnrStopsFilePath = path.join(directoryPath, mnrDirectory, stopsFileName);

    result[lirrDirectory] = parseStopsFile(lirrStopsFilePath);
    result[mnrDirectory] = parseStopsFile(mnrStopsFilePath);

    return result;
}

function parseStopsFile(filePath) {
    const stops = [];

    const fileLines = fs.readFileSync(filePath, 'utf-8').split(/\r?\n/);
    const header = fileLines[0].split(',');

    for (let i = 1; i < fileLines.length; i++) {
        const stop = {};
        const fileLine = fileLines[i].split(',');

        for (let j = 0; j < header.length; j++) {
            let key = header[j];
            let value = fileLine[j];

            if (key === undefined || value === undefined) {
                continue;
            }

            if (key === null || value === null) {
                continue;
            }

            if (key === '' || value === '') {
                continue;
            }

            key = key.replaceAll('"', '');
            value = value.replaceAll('"', '');

            stop[key] = value;
        }

        if (Object.keys(stop).length > 0) {
            stops.push(stop);
        }
    }

    return stops;
}
