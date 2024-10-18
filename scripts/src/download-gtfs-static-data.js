'use strict';

import fs from 'fs';
import http from 'http';
import path from 'path';

export const lirrUrl = 'http://rrgtfsfeeds.s3.amazonaws.com/gtfslirr.zip';
const lirrFileName = 'gtfslirr.zip';

export const mnrUrl = 'http://rrgtfsfeeds.s3.amazonaws.com/gtfsmnr.zip';
const mnrFileName = 'gtfsmnr.zip';

export function downloadGtfsStaticData(directoryPath, callback) {
    downloadFile(lirrUrl, directoryPath, lirrFileName, (err, lirrFilePath) => {
        if (err) {
            return callback(err, null);
        }

        downloadFile(mnrUrl, directoryPath, mnrFileName, (err, mnrFilePath) => {
            if (err) {
                return callback(err, null);
            }

            callback(null, [lirrFilePath, mnrFilePath]);
        });
    });
}

function downloadFile(url, directoryPath, fileName, callback) {
    const filePath = path.join(directoryPath, fileName);

    http.get(url, (response) => {
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
