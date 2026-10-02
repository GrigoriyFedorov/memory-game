"use strict"

import { createElement } from "../helper.js";

export const createBoard = () => {
  const board = createElement('section', {
    classes: ['board'],
    children: [
      createElement('div', {
        classes: ['board__inner', 'container'],
        children: [
          
        ]
      })
    ]
  })
  
  return board;
}