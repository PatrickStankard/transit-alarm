'use strict';

import fs from 'fs';
import path from 'path';
import { lirrUrl, mnrUrl } from './download-gtfs-static-data.js';
import { lirrDirectory, mnrDirectory, stopsFileName } from './parse-gtfs-static-data.js';

const gtfsFilePath = 'js/gtfs-static-data.js';
const gtfsAboutUrl = 'https://data.ny.gov/Transportation/MTA-General-Transit-Feed-Specification-GTFS-Static/fgm6-ccue/about_data';
const newLine = '\n';

export function writeGtfsStaticData(directoryPath, stops) {
    const filePath = path.join(directoryPath, gtfsFilePath);
    const file = fs.createWriteStream(filePath);

    file.write("'use strict';" + newLine);
    file.write(newLine);
    file.write('// MTA General Transit Feed Specification (GTFS) Static Data' + newLine);
    file.write('// ' + gtfsAboutUrl + newLine);
    file.write(newLine);
    file.write('// Long Island Rail Road (LIRR)' + newLine);
    file.write('// ' + lirrUrl + newLine);
    file.write('// ' + stopsFileName + newLine);
    file.write('export const lirrStops = ');
    writeStopsToFile(stops[lirrDirectory], file);
    file.write(newLine);
    file.write('// Metro-North Railroad (MNR)' + newLine);
    file.write('// ' + mnrUrl + newLine);
    file.write('// ' + stopsFileName + newLine);
    file.write('export const mnrStops = ');
    writeStopsToFile(stops[mnrDirectory], file);

    file.end();
}

function writeStopsToFile(stops, file) {
    const minimalStops = [];

    for (let i = 0; i < stops.length; i++) {
        const stop = stops[i];
        const minimalStop = {
            stop_name: stop.stop_name.trim(),
            stop_lat: parseFloat(stop.stop_lat),
            stop_lon: parseFloat(stop.stop_lon)
        };

        minimalStops.push(minimalStop);
    }

    file.write(JSON.stringify(minimalStops, null, 4));
    file.write(';' + newLine);
}
