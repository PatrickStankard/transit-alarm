#!/bin/sh

brew install cocoapods
brew install node@20
brew link node@20
npm ci
npm run build
npm run sync:ios
