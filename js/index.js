import { Card } from './modules/card.js';

const TITLE_CARD_ID = 'card';

window.onload = initializeCard;

function initializeCard() {
  if (!deviceSupportsHover()) {
    console.log("device doesn't support hover");
    return;
  }

  const cardElement = document.getElementById(TITLE_CARD_ID)
  if (cardElement !== null) {
    let card = new Card(cardElement);
    card.initialize()
  } else {
    console.error(`element [${TITLE_CARD_ID}] is null, cannot do flip effect`)
  }
}

function deviceSupportsHover() {
  return window.matchMedia('(any-hover: hover) and (pointer: fine)').matches;
}
