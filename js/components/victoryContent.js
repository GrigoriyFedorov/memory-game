"use strict";

import { createElement } from "../helper.js";

export const createVictoryContent = (stepsCount, startNewGame) => {
  const newGameBtn = createElement("button", {
    classes: ["button"],
    text: "Новая игра",
    attributes: {
      type: "button",
    },
  });

  newGameBtn.addEventListener('click', () => {
    startNewGame();
  })

  const victoryView = createElement("div", {
    classes: ["victory-view"],
    children: [
      createElement("h2", {
        classes: ["victory-view__title"],
        text: "🎉 Победа 🎉",
      }),
      createElement("p", {
        classes: ["victory-view__text"],
        text: `Количество ходов: ${stepsCount}`,
      }),
      newGameBtn,
    ],
  });

  return victoryView;
};
