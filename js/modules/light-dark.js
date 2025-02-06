const THEME_TOGGLE_ID = 'theme-toggle';

const Theme = {
  LIGHT: 'light',
  DARK: 'dark',
  NONE: 'none',
}

export class ThemeToggle {
  #toggleElement;
  #currentTheme;
  #toggleSpeed;

  constructor() {
    this.#toggleElement = document.getElementById(THEME_TOGGLE_ID);
    if (this.#toggleElement === null) {
      throw new Error(`attempting to initialize theme toggle but ${THEME_TOGGLE_ID} is null`);
    }
  }

  initialize() {
    let userTheme = localStorage.getItem('theme');
    switch (userTheme) {
      case 'light':
        this.#currentTheme = Theme.LIGHT;
        break;
      case 'dark':
        this.#currentTheme = Theme.DARK;
        break;
      default:
        this.#currentTheme = Theme.NONE;
        break;
    }
    this.#initializeTheme();
    this.#toggleSpeed = parseFloat(getComputedStyle(this.#toggleElement).getPropertyValue('--toggle-speed'));

    this.#toggleThemeOn('click');
    this.#playToggleAnimationOn('click');
  }

  #initializeTheme() {
    if (this.#currentTheme == Theme.NONE) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches)
        this.#currentTheme = Theme.DARK;
      else
        this.#currentTheme = Theme.DARK;
    }
    this.#setTheme();
  }

  #toggleThemeOn(onEvent) {
    this.#toggleElement.addEventListener(onEvent, () => {
      this.#currentTheme = this.#currentTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
      this.#setTheme()
    });
  }

  #setTheme() {
    document.documentElement.setAttribute('data-theme', this.#currentTheme);
    localStorage.setItem('theme', this.#currentTheme);
  }

  #playToggleAnimationOn(onEvent) {
    this.#toggleElement.addEventListener(onEvent, () => {
      this.#toggleElement.classList.add("pressed");

      setTimeout(() => {
        this.#toggleElement.classList.remove("pressed");
      }, this.#toggleSpeed * 1000);
    });
  }
}

