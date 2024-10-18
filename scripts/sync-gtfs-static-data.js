#!/usr/bin/env node

'use strict';

import process from 'process';
import { downloadGtfsStaticData } from './src/download-gtfs-static-data.js';
import { parseAllStopsFiles } from './src/parse-gtfs-static-data.js';
import { unzipFiles } from './src/unzip-files.js';
import { writeGtfsStaticData } from './src/write-gtfs-static-data.js';

downloadGtfsStaticData(process.env.DATA_DIRECTORY_PATH, (err) => {
    if (err) {
        return console.error('downloadGtfsStaticData error', err);
    }

    unzipFiles(process.env.DATA_DIRECTORY_PATH, (err, statuses) => {
        if (err) {
            return console.error('unzipFiles error', err);
        }

        for (const url in statuses) {
            const status = statuses[url];

            if (status !== 0) {
                return console.error('unzipFiles error', `${url} returned status: ${status}`);
            }
        }

        const stops = parseAllStopsFiles(process.env.DATA_DIRECTORY_PATH);

        writeGtfsStaticData(process.env.SRC_DIRECTORY_PATH, stops);
    });
});
