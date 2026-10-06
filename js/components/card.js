"use strict";

import { createElement } from "../helper.js";
import { imgArr } from "../images.js";

export const createCard = (cardIndex) => {
  const card = createElement("button", {
    classes: ["card"],
    attributes: {
      type: "button",
      "data-card-index": cardIndex,
    },
    children: [
      createElement("div", {
        classes: ["card__back"],
        children: [
          createElement('img', {
            classes: ['card__back-img'],
            attributes: {
              src: "images/question.png",
              alt: "",
            }
          })
        ]
      }),
      createElement("div", {
        classes: ["card__front"],
        text: imgArr[cardIndex],
      }),
    ],
  });

  return card;
};
