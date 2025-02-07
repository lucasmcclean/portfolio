'use strict';

// Constants controlling the viusal strength of tilt and shadow effects
const SHADOW_LENGTH = 20;
const SHADOW_OFFSET_Y = 2;
const SHADOW_OFFSET_X = 4;
const CARD_TILT_STRENGTH_Y = 2;
const CARD_TILT_STRENGTH_X = 4;

export class Card {
  #card = null;
  #cardRect;
  #currentAngle = 0; // Used to flip card in differing directions
  #isFlipping = false;

  constructor(cardElement) {
    if (cardElement === null) {
      throw new Error('card element is null, must be a valid DOM element');
    }
    this.#card = cardElement;
  }

  initialize() {
    this.#card.style.willChange = 'transform, box-shadow';
    this.#cardRect = this.#card.getBoundingClientRect();

    this.#flipOn('click');
    this.#flipOn('keydown');
    this.#updateTiltOn('mousemove');
    this.#endEffectsOn('mouseleave');
    this.#updateCardRectOn('mouseenter');
  }

  initializeWithoutHover() {
    this.#card.style.willChange = 'transform';
    this.#cardRect = this.#card.getBoundingClientRect();

    this.#flipOn('click');
    this.#flipOn('keydown');
    this.#updateCardRectOn('click');
  }

  #updateCardRectOn(onEvent) {
    this.#card.addEventListener(onEvent, () => {
      if (this.#isFlipping) return;

      this.#cardRect = this.#card.getBoundingClientRect();
    });
  }

  #updateTiltOn(onEvent) {
    this.#card.addEventListener(onEvent, (ev) => {
      if (this.#isFlipping) return;

      const cardCenterX = this.#cardRect.width / 2;
      const cardCenterY = this.#cardRect.height / 2;
      const mouseX = ev.clientX - this.#cardRect.left;
      const mouseY = ev.clientY - this.#cardRect.top;

      const tiltX = ((mouseY - cardCenterY) / cardCenterY) * CARD_TILT_STRENGTH_Y;
      const tiltY = ((mouseX - cardCenterX) / cardCenterX) * -CARD_TILT_STRENGTH_X;
      this.#updateCardOrientation(this.#card, tiltX, tiltY);

      const shadowOffsetY = ((mouseY - cardCenterY) / cardCenterY) * SHADOW_OFFSET_Y;
      const shadowOffsetX = ((mouseX - cardCenterX) / cardCenterX) * SHADOW_OFFSET_X;
      const boxShadow = `${shadowOffsetX}px ${shadowOffsetY}px ${SHADOW_LENGTH}px var(--clr-boxshad)`;
      this.#card.style.boxShadow = boxShadow;
    });
  }

  #endEffectsOn(onEvent) {
    this.#card.addEventListener(onEvent, () => {
      if (this.#isFlipping) return;

      this.#updateCardOrientation(this.#card, 0, 0);
      this.#card.style.boxShadow = 'none';
    })
  }

  #flipOn(onEvent) {
    this.#card.addEventListener(onEvent, (ev) => {
      if (this.#isFlipping) return;
      if (this.#alternativeInteraction(onEvent, ev)) return;

      const cardCenterX = this.#cardRect.width / 2;
      const mouseX = ev.clientX - this.#cardRect.left;
      // Controls the direction of the flip
      this.#currentAngle += mouseX > cardCenterX ? 180 : -180;

      this.#isFlipping = true;

      const flipTime = parseFloat(getComputedStyle(this.#card).getPropertyValue('--flip-speed'));
      // Store old transition for later restoration
      const prevTransition = getComputedStyle(this.#card).getPropertyValue('transition');
      this.#card.style.transition = `all var(--flip-speed) ease-in-out`;

      setTimeout(() => {
        // Restore the previous transition settings
        this.#card.style.transition = prevTransition;
        this.#isFlipping = false;

        this.#updateAccessibilityAttrs(onEvent);
      }, flipTime * 1000);

      this.#updateCardOrientation(this.#card, 0, 0);
    });
  }

  #updateCardOrientation(card, tiltX, tiltY) {
    card.style.setProperty('--tilt-x', `${tiltX}deg`);
    card.style.setProperty('--tilt-y', `${tiltY + this.#currentAngle}deg`);
  }

  #updateAccessibilityAttrs(ev) {
    const cardFront = this.#card.querySelector('#card-front');
    const cardBack = this.#card.querySelector('#card-back');
    const btnFront = cardFront.querySelector('.flip-button');
    const btnBack = cardBack.querySelector('.flip-button');
    const isFlipped = Math.abs(this.#currentAngle % 360) !== 0;

    btnFront.setAttribute('aria-expanded', isFlipped);
    btnBack.setAttribute('aria-expanded', !isFlipped);
    cardFront.setAttribute('aria-hidden', isFlipped);
    cardBack.setAttribute('aria-hidden', !isFlipped);

    // If the event was a click, there's no need to focus the flip button
    if (isFlipped) {
      cardFront.setAttribute('inert', '');
      cardBack.removeAttribute('inert');
      if (ev !== 'click') btnBack.focus();
    } else {
      cardBack.setAttribute('inert', '');
      cardFront.removeAttribute('inert');
      if (ev !== 'click') btnFront.focus();
    }
  }

  #alternativeInteraction(trigger, ev) {
    if (trigger == 'click') {
      // Ignore clicking on links
      if (ev.target.closest('a') !== null) return true;
      // Ignore textSelection
      if (document.getSelection().toString().length > 0) return true;
    } else if (trigger === 'keydown') {
      // Ignore non-engament keys
      if (!(ev.key === 'Enter' || ev.key === ' ')) return true;
    }
    return false;
  }
}
