'use strict';

import { Capacitor, registerPlugin } from '@capacitor/core';
import { Geolocation } from '@capacitor/geolocation';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { LocalNotifications } from '@capacitor/local-notifications';
import { Toast } from '@capacitor/toast';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { lirrStops, mnrStops } from './gtfs-static-data.js';
import { mtaSubwayStations } from './mta-subway-stations.js';

const BackgroundGeolocation = registerPlugin('BackgroundGeolocation');

export class TransitAlarmControls {

    stationCoordinates = {};

    geolocationId = null;
    backgroundGeolocationId = null;

    localNotificationIds = {
        0: null,
        15: null,
        30: null,
        45: null
    };

    localNotificationTimestamps = {
        0: null,
        15: null,
        30: null,
        45: null
    };

    localNotificationChannelId = null;

    defaultSubtitleInnerText = "Set an alarm to be notified when you're approaching your destination.";
    locationRequiredMessage = 'Your location is required in order to notify you when you are approaching your destination.';
    unableToGetLocationMessage = 'Unable to get your location. Please check your location permissions and try again.';
    notificationsRequiredMessage = 'Notifications are required in order to notify you when you are approaching your destination.';
    destinationRequiredMessage = 'Please select a destination station.';

    constructor() {
        defineCustomElements(window);

        this.cancelPendingNotifications();
        this.registerActionTypes();

        this.getServiceOptionElements().forEach((radio) => {
            radio.addEventListener(
                'change',
                this.onServiceOptionChange.bind(this)
            );
        });

        const stationOptions = this.getStationOptionsElement();

        stationOptions.addEventListener(
            'click',
            this.triggerHaptics.bind(this)
        );

        stationOptions.addEventListener(
            'change',
            this.triggerHaptics.bind(this)
        );

        this.getSetAlarmButtonElement().addEventListener(
            'click',
            this.onSetAlarmButtonClick.bind(this)
        );

        this.getClearAlarmButtonElement().addEventListener(
            'click',
            this.onClearAlarmButtonClick.bind(this)
        );

        this.populateUiElements();
    }

    registerActionTypes() {
        const platform = Capacitor.getPlatform();

        if (platform === 'ios' || platform === 'android') {
            LocalNotifications.registerActionTypes({
                types: [{
                    id: 'approaching-destination',
                    actions: [{
                        id: 'clear-alarm',
                        title: 'Clear alarm',
                        destructive: true
                    }],
                    iosCustomDismissAction: true
                }]
            });
        }
    }

    cancelPendingNotifications() {
        LocalNotifications.getPending().then((result) => {
            if (result.notifications && result.notifications.length > 0) {
                LocalNotifications.cancel({
                    notifications: result.notifications
                });
            }
        });
    }

    populateUiElements() {
        this.checkIfLocalNotificationsSupported((success) => {
            const transitAlarmContentLoadedEvent = new Event('TransitAlarmControlsLoaded');
            const transitAlarmControlsFormContainer = this.getTransitAlarmControlsFormContainerElement();

            if (success === true) {
                this.fetchAndPopulateStations();
                this.showElement(transitAlarmControlsFormContainer);
            } else {
                this.hideElement(transitAlarmControlsFormContainer);
            }

            document.dispatchEvent(transitAlarmContentLoadedEvent);
        });
    }

    checkIfLocalNotificationsSupported(callback) {
        LocalNotifications.checkPermissions().then((permissionStatus) => {
            callback(true, permissionStatus, null);
        }).catch((error) => {
            callback(false, null, error);
        });
    }

    fetchAndPopulateStations() {
        const stationCoordinates = this.fetchStationCoordinates();

        this.disableSetAlarmUi();
        this.populateStations(stationCoordinates);
        this.enableSetAlarmUi();
    }

    fetchStationCoordinates() {
        let stationCoordinates = {};

        const selectedServiceId = this.getSelectedServiceId();
        if (selectedServiceId === 'lirr-service') {
            stationCoordinates = this.fetchLirrStationCoordinates();
        } else if (selectedServiceId === 'mnr-service') {
            stationCoordinates = this.fetchMnrStationCoordinates();
        } else if (selectedServiceId === 'nyct-service') {
            stationCoordinates = this.fetchNyctStationCoordinates();
        }

        this.stationCoordinates[selectedServiceId] = stationCoordinates;

        return stationCoordinates;
    }

    fetchLirrStationCoordinates() {
        const stationCoordinatesCached = this.objectHasProperty(
            this.stationCoordinates,
            'lirr-service'
        );

        if (stationCoordinatesCached === true) {
            return this.stationCoordinates['lirr-service'];
        }

        const stationCoordinates = {};

        for (let i = 0; i < lirrStops.length; i++) {
            const row = lirrStops[i];
            const stopName = row.stop_name;
            const latitude = row.stop_lat;
            const longitude = row.stop_lon;

            stationCoordinates[stopName] = this.formatCoordinates(
                latitude,
                longitude
            );
        }

        return stationCoordinates;
    }

    fetchMnrStationCoordinates() {
        const stationCoordinatesCached = this.objectHasProperty(
            this.stationCoordinates,
            'mnr-service'
        );

        if (stationCoordinatesCached === true) {
            return this.stationCoordinates['mnr-service'];
        }

        const stationCoordinates = {};

        for (let i = 0; i < mnrStops.length; i++) {
            const row = mnrStops[i];
            const stopName = row.stop_name;
            const latitude = row.stop_lat;
            const longitude = row.stop_lon;

            stationCoordinates[stopName] = this.formatCoordinates(
                latitude,
                longitude
            );
        }

        return stationCoordinates;
    }

    fetchNyctStationCoordinates() {
        const stationCoordinatesCached = this.objectHasProperty(
            this.stationCoordinates,
            'nyct-service'
        );

        if (stationCoordinatesCached === true) {
            return this.stationCoordinates['nyct-service'];
        }

        const stationCoordinates = {};

        for (let i = 0; i < mtaSubwayStations.length; i++) {
            const row = mtaSubwayStations[i];

            const linesList = row.daytime_routes.split(' ');
            linesList.sort();

            const lines = linesList.join('/');
            const stopName = row.stop_name + ' (' + lines + ')';

            const latitude = row.georeference.coordinates[1];
            const longitude = row.georeference.coordinates[0];

            stationCoordinates[stopName] = this.formatCoordinates(
                latitude,
                longitude
            );
        }

        return stationCoordinates;
    }

    populateStations(stationCoordinates) {
        const stationNames = [];
        const stationOptions = this.getStationOptionsElement();

        for (const stationName in stationCoordinates) {
            stationNames.push(stationName);
        }

        stationNames.sort();

        const selectedServiceName = this.getSelectedServiceName();
        stationOptions.innerHTML = '<option value="" selected="">Select ' + selectedServiceName + ' destination:</option>';

        for (let i = 0; i < stationNames.length; i++) {
            const stationName = stationNames[i];
            const option = document.createElement('option');

            option.value = stationName;
            option.textContent = stationName;

            stationOptions.appendChild(option);
        }
    }

    objectHasProperty(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
    }

    getTransitAlarmSubtitleElement() {
        return document.getElementById('transit-alarm-subtitle');
    }

    getTransitAlarmControlsFormContainerElement() {
        return document.getElementById('transit-alarm-controls-form-container');
    }

    getServiceOptionElements() {
        return document.querySelectorAll('input[name="mta-service-radio"]');
    }

    getStationOptionsElement() {
        return document.getElementById('stations');
    }

    getSetAlarmButtonElement() {
        return document.getElementById('set-alarm');
    }

    getClearAlarmButtonElement() {
        return document.getElementById('clear-alarm');
    }

    getSelectedServiceId() {
        const serviceOptions = this.getServiceOptionElements();
        let selectedService = null;

        for (let i = 0; i < serviceOptions.length; i++) {
            const serviceOption = serviceOptions[i];

            if (serviceOption.checked === true) {
                selectedService = serviceOption;
                break;
            }
        }

        return selectedService.id;
    }

    getSelectedServiceName() {
        const selectedServiceId = this.getSelectedServiceId();

        if (selectedServiceId === 'lirr-service') {
            return 'LIRR';
        } else if (selectedServiceId === 'mnr-service') {
            return 'Metro-North';
        } else if (selectedServiceId === 'nyct-service') {
            return 'NYC Subway';
        }
    }

    getSelectedStation() {
        const selectedServiceId = this.getSelectedServiceId();
        const selectedStationValue = this.getStationOptionsElement().value;
        const isValidStation = this.objectHasProperty(
            this.stationCoordinates[selectedServiceId],
            selectedStationValue
        );

        if (isValidStation === false) {
            return null;
        }

        return selectedStationValue;
    }

    getSelectedDistance() {
        const selectedServiceId = this.getSelectedServiceId();

        if (selectedServiceId === 'nyct-service') {
            return 0.5;
        }

        return 1.0;
    }

    onServiceOptionChange() {
        this.triggerHaptics();
        this.fetchAndPopulateStations();
    }

    onSetAlarmButtonClick() {
        this.triggerHaptics();
        this.startWatchPosition();
    }

    onClearAlarmButtonClick() {
        this.triggerHaptics();
        this.stopWatchPosition();
    }

    startWatchPosition() {
        if (this.backgroundGeolocationId !== null) {
            this.stopWatchPosition();
        }

        const selectedStation = this.getSelectedStation();
        if (selectedStation === null) {
            this.showToast(this.destinationRequiredMessage);

            return this.stopWatchPosition();
        }

        this.requestNotificationPermissionsIfNeeded((isGranted, error) => {
            const platform = Capacitor.getPlatform();

            if (isGranted === false) {
                let messageBody = this.notificationsRequiredMessage;

                if (error && error.message !== undefined) {
                    messageBody = error.message;
                }

                if (platform === 'ios' || platform === 'android') {
                    if (window.confirm(messageBody)) {
                        BackgroundGeolocation.openSettings();
                    }
                } else {
                    this.showToast(messageBody);
                }

                return this.stopWatchPosition();
            }

            if (platform === 'ios' || platform === 'android') {
                BackgroundGeolocation.addWatcher(
                    {
                        backgroundMessage: this.locationRequiredMessage,
                        distanceFilter: 0
                    },
                    this.addWatcherCallback.bind(this)
                ).then((watcherId) => {
                    this.backgroundGeolocationId = watcherId;
                });
            } else {
                Geolocation.watchPosition(
                    {
                        enableHighAccuracy: true,
                        timeout: 5000,
                        maximumAge: 0
                    },
                    this.watchPositionCallback.bind(this)
                ).then((watcherId) => {
                    this.geolocationId = watcherId;
                });
            }

            this.disableSetAlarmUi();
        });
    }

    requestNotificationPermissionsIfNeeded(callback) {
        LocalNotifications.checkPermissions().then((permission) => {
            if (permission.display === 'granted') {
                return callback(true, null);
            }

            LocalNotifications.requestPermissions().then((permission) => {
                const isGranted = (permission.display === 'granted');

                return callback(isGranted, null);
            });
        }).catch((error) => {
            return callback(false, error);
        });
    }

    stopWatchPosition() {
        if (this.geolocationId !== null) {
            Geolocation.clearWatch({
                id: this.geolocationId
            });

            this.geolocationId = null;
        }

        if (this.backgroundGeolocationId !== null) {
            BackgroundGeolocation.removeWatcher({
                id: this.backgroundGeolocationId
            });

            this.backgroundGeolocationId = null;
        }

        this.cancelLocalNotifications();

        LocalNotifications.removeAllListeners();
        LocalNotifications.removeAllDeliveredNotifications();

        this.enableSetAlarmUi();
    }

    watchPositionCallback(result, error) {
        if (error) {
            if (error.code === 1) {
                this.showToast(this.locationRequiredMessage);
            } else {
                this.showToast(this.unableToGetLocationMessage);
            }

            this.stopWatchPosition();

            return console.error('watchPositionCallback error', error);
        }

        this.checkCoordinates(
            result.coords.latitude,
            result.coords.longitude
        );
    }

    addWatcherCallback(result, error) {
        if (error) {
            if (error.code === 'NOT_AUTHORIZED') {
                if (window.confirm(this.locationRequiredMessage)) {
                    BackgroundGeolocation.openSettings();
                }
            } else {
                this.showToast(this.unableToGetLocationMessage);
            }

            this.stopWatchPosition();

            return console.error('addWatcherCallback error', error);
        }

        this.checkCoordinates(
            result.latitude,
            result.longitude
        );
    }

    checkCoordinates(currentLatitude, currentLongitude) {
        const selectedStation = this.getSelectedStation();
        if (selectedStation === null) {
            this.showToast(this.destinationRequiredMessage);

            return this.stopWatchPosition();
        }

        const selectedDistance = this.getSelectedDistance();
        const selectedServiceId = this.getSelectedServiceId();
        const selectedServiceName = this.getSelectedServiceName();
        const selectedCoordinates = this.stationCoordinates[selectedServiceId][selectedStation];
        const currentCoordinates = this.formatCoordinates(currentLatitude, currentLongitude);
        const currentDistance = this.calculateDistance(currentCoordinates, selectedCoordinates);
        const subtitle = this.getTransitAlarmSubtitleElement();

        if (subtitle.style.minHeight === '' && subtitle.offsetHeight > 0) {
            subtitle.style.minHeight = subtitle.offsetHeight + 'px';
        }

        subtitle.innerHTML = 'You are <strong>' + currentDistance + ' mile(s)</strong> away from <strong>' + selectedStation + '</strong>.';

        if (currentDistance <= selectedDistance) {
            this.scheduleLocalNotifications(
                currentDistance,
                selectedStation,
                selectedServiceName
            );

            LocalNotifications.addListener('localNotificationActionPerformed', (action) => {
                if (action.actionId === 'clear-alarm' || action.actionId === 'dismiss') {
                    this.stopWatchPosition();
                }
            });
        }
    }

    scheduleLocalNotifications(distance, station, serviceName) {
        const secondsValues = Object.keys(this.localNotificationIds);

        for (let i = 0; i < secondsValues.length; i++) {
            const secondsValue = secondsValues[i];
            let localNotificationId = this.localNotificationIds[secondsValue];

            if (localNotificationId !== null) {
                if (this.shouldRescheduleLocalNotification(secondsValue) === true) {
                    this.cancelLocalNotification(localNotificationId);
                } else {
                    continue;
                }
            } else {
                localNotificationId = this.generateLocalNotificationId();
            }

            this.scheduleLocalNotification(
                localNotificationId,
                distance,
                station,
                serviceName,
                secondsValue
            );
        }
    }

    scheduleLocalNotification(notificationId, distance, station, serviceName, secondsValue) {
        const platform = Capacitor.getPlatform();
        const notificationTitle = 'Transit Alarm for MTA (' + serviceName + ')';
        const notificationBody = 'You are ' + distance + ' mile(s) away from ' + station + '.';
        const notification = {
            title: notificationTitle,
            body: notificationBody,
            id: notificationId,
            actionTypeId: 'approaching-destination',
            schedule: {
                on: {
                    second: parseInt(secondsValue)
                }
            },
            sound: null
        };

        if (platform === 'ios') {
            notification.sound = './public/alarm.wav';
            notification.threadIdentifier = 'approaching-destination';
        } else if (platform === 'android') {
            notification.schedule.allowWhileIdle = true;
            notification.channelId = this.getLocalNotificationChannelId();
            notification.ongoing = true;
        }

        LocalNotifications.schedule({
            notifications: [notification]
        });

        this.localNotificationIds[secondsValue] = notificationId;
        this.localNotificationTimestamps[secondsValue] = new Date();
    }

    shouldRescheduleLocalNotification(secondsValue) {
        const timestamp = this.localNotificationTimestamps[secondsValue];
        const now = new Date();

        if (timestamp === null) {
            return true;
        }

        return ((now - timestamp) >= 75000);
    }

    cancelLocalNotifications() {
        const notificationsToCancel = [];
        const secondsValues = Object.keys(this.localNotificationIds);

        for (let i = 0; i < secondsValues.length; i++) {
            const secondsValue = secondsValues[i];
            const localNotificationId = this.localNotificationIds[secondsValue];

            if (localNotificationId !== null) {
                notificationsToCancel.push({id: localNotificationId});

                this.localNotificationIds[secondsValue] = null;
            }
        }

        if (notificationsToCancel.length > 0) {
            LocalNotifications.cancel({
                notifications: notificationsToCancel
            });
        }
    }

    cancelLocalNotification(localNotificationId) {
        LocalNotifications.cancel({
            notifications: [
                {
                    id: localNotificationId
                }
            ]
        });
    }

    generateLocalNotificationId() {
        return Math.floor(Math.random() * 2147483647);
    }

    getLocalNotificationChannelId() {
        const platform = Capacitor.getPlatform();

        if (platform !== 'android') {
            return null;
        }

        this.localNotificationChannelId = 'mta-transit-alarm';

        LocalNotifications.createChannel({
            id: this.localNotificationChannelId,
            name: 'Transit Alarm for MTA',
            description: 'Notifications for when you are approaching your destination.',
            sound: 'alarm.wav',
            importance: 5,
            visibility: 1,
            lights: true,
            lightColor: '#0039a5',
            vibration: true
        });

        return this.localNotificationChannelId;
    }

    showToast(messageBody) {
        Toast.show({
            text: messageBody,
            duration: 'long',
            position: 'top'
        });
    }

    triggerHaptics() {
        Haptics.impact({
            style: ImpactStyle.Light
        });
    }

    showElement(element) {
        element.classList.remove('d-none');
    }

    hideElement(element) {
        element.classList.add('d-none');
    }

    disableSetAlarmUi() {
        const setAlarmButton = this.getSetAlarmButtonElement();
        const clearAlarmButton = this.getClearAlarmButtonElement();

        this.getServiceOptionElements().forEach((serviceOption) => {
            serviceOption.disabled = true;
        });

        this.getStationOptionsElement().disabled = true;

        setAlarmButton.disabled = true;
        this.hideElement(setAlarmButton);

        clearAlarmButton.disabled = false;
        this.showElement(clearAlarmButton);
    }

    enableSetAlarmUi() {
        const setAlarmButton = this.getSetAlarmButtonElement();
        const clearAlarmButton = this.getClearAlarmButtonElement();
        const subtitle = this.getTransitAlarmSubtitleElement();

        this.getServiceOptionElements().forEach((serviceOption) => {
            serviceOption.disabled = false;
        });

        this.getStationOptionsElement().disabled = false;

        setAlarmButton.disabled = false;
        this.showElement(setAlarmButton);

        clearAlarmButton.disabled = true;
        this.hideElement(clearAlarmButton);

        subtitle.innerText = this.defaultSubtitleInnerText;
    }

    formatCoordinates(latitude, longitude) {
        const latitudeRadius = (Math.PI * (latitude / 180));

        return {
            latitude: latitude,
            longitude: longitude,
            latitudeRadius: latitudeRadius
        };
    }

    calculateDistance(current, destination) {
        const isPerfectMatch = (
            current.latitude === destination.latitude &&
            current.longitude === destination.longitude
        );

        if (isPerfectMatch) {
            return 0;
        }

        const theta = (current.longitude - destination.longitude);
        const thetaRadius = (Math.PI * (theta / 180));

        let distance = (
            Math.sin(current.latitudeRadius) *
            Math.sin(destination.latitudeRadius) +
            Math.cos(current.latitudeRadius) *
            Math.cos(destination.latitudeRadius) *
            Math.cos(thetaRadius)
        );

        if (distance > 1) {
            distance = 1;
        }

        distance = Math.acos(distance);
        distance = (distance * (180 / Math.PI));
        distance = (distance * 60 * 1.1515);

        return distance.toFixed(2);
    }

}
