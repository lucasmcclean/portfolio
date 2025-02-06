import { Card } from './modules/flip-card.js';

const TITLE_CARD_ID = 'card';

window.onload = initializeCard;

function initializeCard() {
  const cardElement = document.getElementById(TITLE_CARD_ID)

  if (cardElement !== null) {
    let card = new Card(cardElement);
    if (deviceSupportsHover()) {
      card.initialize();
    } else {
      card.initializeWithoutHover();
    }
  } else {
    console.error(`element [${TITLE_CARD_ID}] is null, cannot do flip effect`)
  }
}

function deviceSupportsHover() {
  return window.matchMedia('(any-hover: hover) and (pointer: fine)').matches;
}
