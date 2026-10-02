"use strict";

import { createElement } from "../helper.js";
import { imgArr } from "../images.js";

export const createCard = (cardIndex) => {
  const card = createElement("button", {
    classes: ["card"],
    attributes: {
      type: "button",
      "data-action": "choose",
      "data-cardIndex": cardIndex,
    },
    children: [
      createElement("div", {
        classes: ["card__front"],
        text: imgArr[cardIndex],
      }),
      createElement("div", {
        classes: ["card__back"],
      }),
    ],
  });

  return card;
};
