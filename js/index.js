'use strict';

import { ThemeToggle } from './modules/light-dark.js';

window.onload = initializeLightDark;

function initializeLightDark() {
  try {
    let themeToggle = new ThemeToggle();
    themeToggle.initialize();
  } catch (err) {
    console.error(err);
  }
}
