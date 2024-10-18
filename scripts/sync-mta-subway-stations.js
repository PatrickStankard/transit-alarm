#!/usr/bin/env node

'use strict';

import process from 'process';
import { downloadMtaSubwayStations } from './src/download-mta-subway-stations.js';
import { writeMtaSubwayStations } from './src/write-mta-subway-stations.js';

downloadMtaSubwayStations(process.env.DATA_DIRECTORY_PATH, (err) => {
    if (err) {
        return console.error('downloadMtaSubwayStations error', err);
    }

    writeMtaSubwayStations(
        process.env.SRC_DIRECTORY_PATH,
        process.env.DATA_DIRECTORY_PATH
    );
});
