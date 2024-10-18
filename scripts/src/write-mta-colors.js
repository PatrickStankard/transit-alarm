'use strict';

import fs from 'fs';
import path from 'path';
import { jsonUrl, jsonFileName } from './download-mta-colors.js';

const mtaColorsFilePath = 'js/mta-colors.js';
const mtaColorsAboutUrl = 'https://data.ny.gov/Transportation/MTA-Colors/3uhz-sej2/about_data';

const newLine = '\n';

export function writeMtaColors(directoryPath, dataDirectoryPath) {
    const filePath = path.join(directoryPath, mtaColorsFilePath);
    const file = fs.createWriteStream(filePath);

    file.write("'use strict';" + newLine);
    file.write(newLine);
    file.write('// MTA Colors' + newLine);
    file.write('// ' + mtaColorsAboutUrl + newLine);
    file.write('// ' + jsonUrl + newLine);
    file.write('export const mtaColors = ');
    writeMtaColorsToFile(dataDirectoryPath, file);

    file.end();
}

function writeMtaColorsToFile(dataDirectoryPath, file) {
    const jsonFilePath = path.join(dataDirectoryPath, jsonFileName);
    const jsonFileContents = fs.readFileSync(jsonFilePath, 'utf-8');
    const mtaColors = JSON.parse(jsonFileContents);

    file.write(JSON.stringify(mtaColors, null, 4));
    file.write(';' + newLine);
}
