'use strict';

import fs from 'fs';
import child_process from 'child_process';
import path from 'path';

export function unzipFiles(directoryPath, callback) {
    const unzipStatuses = {};

    fs.readdir(directoryPath, (error, files) => {
        if (error) {
            return callback(error, null);
        }

        for (const fileName of files) {
            if (fileName.endsWith('.zip') === false) {
                continue;
            }

            const filePath = path.join(directoryPath, fileName);
            const unzipStatus = unzipFile(filePath, directoryPath);

            unzipStatuses[filePath] = unzipStatus;
        }

        return callback(null, unzipStatuses);
    });
}

function unzipFile(filePath, directoryPath) {
    const filePathParts = filePath.split('/');
    const fileName = filePathParts.pop();
    const fileNameParts = fileName.split('.');
    const directoryName = fileNameParts[0];
    const destinationPath = path.join(directoryPath, directoryName);

    const unzipCommand = '/usr/bin/unzip';
    const unzipArgs = [
        '-o',
        filePath,
        '-d',
        destinationPath
    ];

    const unzipResult = child_process.spawnSync(unzipCommand, unzipArgs);

    return unzipResult.status;
}
