'use strict';

import fs from 'fs';
import https from 'https';
import path from 'path';

export const jsonUrl = 'https://data.ny.gov/resource/39hk-dx4f.json';
export const jsonFileName = 'mta-subway-stations.json';

export function downloadMtaSubwayStations(directoryPath, callback) {
    downloadFile(jsonUrl, directoryPath, jsonFileName, (err, filePath) => {
        if (err) {
            return callback(err, null);
        }

        return callback(null, [filePath]);
    });
}

function downloadFile(url, directoryPath, fileName, callback) {
    const filePath = path.join(directoryPath, fileName);

    https.get(url, (response) => {
        const file = fs.createWriteStream(filePath);

        file.on('finish', () => {
            callback(null, filePath);
        });

        response.on('data', (chunk) => {
            file.write(chunk);
        });

        response.on('end', () => {
            file.end();
        });
    }).on('error', (err) => {
        callback(err, null);
    });
}
