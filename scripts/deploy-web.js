#!/usr/bin/env node

import process from 'process';
import { uploadFiles } from './src/upload-files.js';

uploadFiles(process.env.PUBLIC_DIRECTORY_PATH);
