'use strict';

// Immediately load user's theme to prevent flickering on page load
(function() {
  const userTheme = localStorage.getItem('theme');
  if (userTheme) {
    document.documentElement.setAttribute('data-theme', userTheme);
  }
})();
