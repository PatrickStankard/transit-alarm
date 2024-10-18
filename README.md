# Transit Alarm for MTA

Transit Alarm for MTA is a location-based notification app for New York and
Connecticut public transportation that will notify you when you're approaching
your destination. Whether you're traveling on the Long Island Rail Road (LIRR),
Metro-North Railroad (MNR), or the NYC Subway system (NYCT), you'll get
alerted when you're close to a selected station.

Transit Alarm for MTA was built as a part of the
[MTA 2024 Open Data Challenge](https://new.mta.info/article/mta-open-data-challenge),
using MTA open datasets for station names, geolocations, and colors.

The app is a web app that is cross-compiled into native iOS and Android apps using
[Capacitor](https://capacitorjs.com/). The latest iOS release can be found on the
[Apple App Store](https://apps.apple.com/us/app/transit-alarm-for-mta/id6736602401),
and the latest Android release (APK) can be found in the
[GitHub releases page](https://github.com/PatrickStankard/transit-alarm/releases).

## Installation

```bash
$ cp .env.example ~/.env/transit-alarm
$ source ~/.env/transit-alarm
$ npm install .
```

## Pull data from MTA Open Data

```bash
$ npm run sync:mta
```

## Build and preview

```bash
$ npm run build
$ npm run preview:web      # Runs a local web server
$ npm run preview:ios      # Opens an iOS simulator
$ npm run preview:android  # Opens an Android simulator
```

## Open the iOS or Android project

```bash
$ npm run ide:ios          # Opens Xcode
$ npm run ide:android      # Opens Android Studio
```

## Deploy the web app

```bash
$ npm run deploy:web
```
