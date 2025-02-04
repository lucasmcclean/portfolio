export class Card {
  // TODO: Figure out how to manage constants
  CARD_TILT_STRENGTH_Y = 2;
  CARD_TILT_STRENGTH_X = 4;
  SHADOW_OFFSET_Y = 2;
  SHADOW_OFFSET_X = 4;
  SHADOW_LENGTH = 20;

  #card = null;
  #cardRect;
  #currentAngle = 0;
  #isFlipping = false;

  constructor(cardElement) {
    if (cardElement === null) {
      throw new Error("cardElement is null, must be valid DOM element");
    }
    this.#card = cardElement;
  }

  initialize() {
    this.#card.style.willChange = 'transform, box-shadow';

    this.#flipOn('click');
    this.#updateTiltOn('mousemove');
    this.#endEffectsOn('mouseleave');
    this.#updateCardRectOn('mouseenter');
  }

  initializeWithoutHover() {
    this.#card.style.willChange = 'transform';

    this.#updateCardRectOn('click');
    this.#flipOn('click');
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

      const tiltX = ((mouseY - cardCenterY) / cardCenterY) * this.CARD_TILT_STRENGTH_Y;
      const tiltY = ((mouseX - cardCenterX) / cardCenterX) * -this.CARD_TILT_STRENGTH_X;
      this.#updateCardOrientation(this.#card, tiltX, tiltY)

      const shadowOffsetY = ((mouseY - cardCenterY) / cardCenterY) * this.SHADOW_OFFSET_Y;
      const shadowOffsetX = ((mouseX - cardCenterX) / cardCenterX) * this.SHADOW_OFFSET_X;
      const boxShadow = `${shadowOffsetX}px ${shadowOffsetY}px ${this.SHADOW_LENGTH}px var(--clr-boxshad)`;
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
      // Ignore clicks on links
      if (ev.target.closest('a')) return;

      const cardCenterX = this.#cardRect.width / 2;
      const mouseX = ev.clientX - this.#cardRect.left;
      this.#currentAngle += mouseX > cardCenterX ? 180 : -180;

      this.#isFlipping = true;

      const flipTime = parseFloat(getComputedStyle(this.#card).getPropertyValue('--flip-speed'));
      // Store old transition for later restoration
      const stdTransition = getComputedStyle(this.#card).getPropertyValue('transition');
      this.#card.style.transition = `all var(--flip-speed) ease-in-out`;
      setTimeout(() => {
        this.#card.style.transition = stdTransition;
        this.#isFlipping = false;
      }, flipTime * 1000);

      this.#updateCardOrientation(this.#card, 0, 0);
    });
  }

  #updateCardOrientation(card, tiltX, tiltY) {
    card.style.setProperty('--tilt-x', `${tiltX}deg`);
    card.style.setProperty('--tilt-y', `${tiltY + this.#currentAngle}deg`);
  }
}
