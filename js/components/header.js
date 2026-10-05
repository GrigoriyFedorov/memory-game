"use strict";

import { createElement } from "../helper.js";

export const createHeader = (startNewGame) => {
  const newGameBtn = createElement("button", {
    classes: ["button"],
    text: "Новая игра",
    attributes: {
      type: "button",
      "data-action": "new-game",
    },
  });

  newGameBtn.addEventListener('click', () => {
    startNewGame();
  })

  const header = createElement("header", {
    classes: ["header", "container"],
    children: [
      createElement("div", {
        classes: ["header__inner"],
        children: [
          newGameBtn,
          createElement("div", {
            classes: ["header__steps"],
            children: [
              "Ходов: ",
              createElement("span", {
                text: "0",
                attributes: {
                  "data-role": "step",
                },
              }),
            ],
          }),
          createElement("div", {
            classes: ["header__pairs"],
            children: [
              createElement("span", {
                text: "0",
                attributes: {
                  "data-role": "pair",
                },
              }),
              " из 8 пар",
            ],
          }),
          createElement("button", {
            classes: ["button"],
            text: "Таблица лидеров",
            attributes: {
              type: "button",
              "data-action": "leaderboard",
            },
          }),
        ],
      }),
    ],
  });

  let stepSpan = header.querySelector('[data-role = "step"]');
  let pairsSpan = header.querySelector('[data-role = "pair"]');

  const updateSteps = (stepNumber) => {
    stepSpan.textContent = stepNumber;
  };
  const updatePairs = (pairsNumber) => {
    pairsSpan.textContent = pairsNumber;
  };

  return {
    header,
    updateSteps,
    updatePairs,
  };
};
