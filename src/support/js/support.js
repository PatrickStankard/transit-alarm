'use strict';

import { AppStoreBadges } from './../../js/app-store-badges.js';
import { BodyContainer } from './../../js/body-container.js';
import { ColorCubes } from './../../js/color-cubes.js';
import { SystemColorScheme } from './../../js/system-color-scheme.js';

document.addEventListener('DOMContentLoaded', () => {
    new SystemColorScheme();
    new ColorCubes();
    new AppStoreBadges();
    new BodyContainer();
});
