#!/usr/bin/env node

'use strict';

import process from 'process';
import { downloadMtaColors } from './src/download-mta-colors.js';
import { writeMtaColors } from './src/write-mta-colors.js';

downloadMtaColors(process.env.DATA_DIRECTORY_PATH, (err) => {
    if (err) {
        return console.error('downloadMtaColors error', err);
    }

    writeMtaColors(
        process.env.SRC_DIRECTORY_PATH,
        process.env.DATA_DIRECTORY_PATH
    );
});
