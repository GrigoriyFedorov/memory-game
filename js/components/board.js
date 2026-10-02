"use strict"

import { createElement } from "../helper.js";
import { shuffle } from "../helper.js";
import { createArr } from "../helper.js"
import { createCard } from "./card.js";

export const createBoard = () => {
  const randomIndexArr = shuffle(createArr());

  const cards = randomIndexArr.map((cardIndex) => {
    return createCard(cardIndex);
  })

  const board = createElement('section', {
    classes: ['board'],
    children: [
      createElement('div', {
        classes: ['board__inner', 'container'],
        children: cards
      })
    ]
  })
  
  return board;
}