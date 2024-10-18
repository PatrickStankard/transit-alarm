'use strict';

import fs from 'fs';
import path from 'path';
import { jsonUrl, jsonFileName } from './download-mta-subway-stations.js';

const mtaSubwayStationsFilePath = 'js/mta-subway-stations.js';
const mtaSubwayStationsAboutUrl = 'https://data.ny.gov/Transportation/MTA-Subway-Stations/39hk-dx4f/about_data';

const newLine = '\n';

export function writeMtaSubwayStations(directoryPath, dataDirectoryPath) {
    const filePath = path.join(directoryPath, mtaSubwayStationsFilePath);
    const file = fs.createWriteStream(filePath);

    file.write("'use strict';" + newLine);
    file.write(newLine);
    file.write('// MTA Subway Stations' + newLine);
    file.write('// ' + mtaSubwayStationsAboutUrl + newLine);
    file.write('// ' + jsonUrl + newLine);
    file.write('export const mtaSubwayStations = ');
    writeMtaSubwayStationsToFile(dataDirectoryPath, file);

    file.end();
}

function writeMtaSubwayStationsToFile(dataDirectoryPath, file) {
    const jsonFilePath = path.join(dataDirectoryPath, jsonFileName);
    const jsonFileContents = fs.readFileSync(jsonFilePath, 'utf-8');
    const mtaSubwayStations = JSON.parse(jsonFileContents);
    const minimalMtaSubwayStations = [];

    for (let i = 0; i < mtaSubwayStations.length; i++) {
        const mtaSubwayStation = mtaSubwayStations[i];
        const minimalMtaSubwayStation = {
            stop_name: mtaSubwayStation.stop_name,
            daytime_routes: mtaSubwayStation.daytime_routes,
            georeference: {
                coordinates: mtaSubwayStation.georeference.coordinates
            }
        };

        minimalMtaSubwayStations.push(minimalMtaSubwayStation);
    }

    file.write(JSON.stringify(minimalMtaSubwayStations, null, 4));
    file.write(';' + newLine);
}
