'use strict';

import { SplashScreen } from '@capacitor/splash-screen';
import { AppStoreBadges } from './app-store-badges.js';
import { BodyContainer } from './body-container.js';
import { ColorCubes } from './color-cubes.js';
import { SystemColorScheme } from './system-color-scheme.js';
import { TransitAlarmControls } from './transit-alarm-controls.js';

document.addEventListener('TransitAlarmControlsLoaded', () => {
    new BodyContainer();

    SplashScreen.hide();
});

document.addEventListener('DOMContentLoaded', () => {
    new SystemColorScheme();
    new ColorCubes();
    new TransitAlarmControls();
    new AppStoreBadges();
});
