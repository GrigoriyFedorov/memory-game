"use strict";

import { createElement } from "../helper.js";
import { shuffle } from "../helper.js";
import { createArr } from "../helper.js";
import { createCard } from "./card.js";

export const createBoard = (updateSteps, updatePairs, onWin) => {
  const randomIndexArr = shuffle(createArr());

  const cards = randomIndexArr.map((cardIndex) => {
    return createCard(cardIndex);
  });

  const board = createElement("section", {
    classes: ["board"],
    children: [
      createElement("div", {
        classes: ["board__inner", "container"],
        children: cards,
      }),
    ],
  });

  let cardsPair = [];
  let steps = 0;
  let guessedPairs = 0;

  const recordResult = (stepsCount) => {
    const date = new Date().toLocaleDateString();
    const result = {
      stepsCount,
      date,
    };
    
    const topResults = localStorage.getItem("topResults");
    const topResultsArray = JSON.parse(topResults) ?? [];

    topResultsArray.push(result);
    topResultsArray.sort((a, b) => a.stepsCount - b.stepsCount);
    localStorage.setItem(
      "topResults",
      JSON.stringify(topResultsArray.slice(0, 10)),
    );
  };

  const compareCards = () => {
    if (cardsPair[0].dataset.cardIndex === cardsPair[1].dataset.cardIndex) {
      cardsPair.forEach((card) => {
        card
          .querySelector(".card__front")
          .classList.add("card__front--guessed");
      });
      cardsPair = [];
      steps++;
      guessedPairs++;
      updateSteps(steps);
      updatePairs(guessedPairs);
      if (guessedPairs === 8) {
        recordResult(steps);
        onWin(steps);
      }
    } else {
      board.classList.add("board--locked");
      setTimeout(() => {
        cardsPair.forEach((card) => {
          card.classList.remove("card--open");
        });
        board.classList.remove("board--locked");
        cardsPair = [];
      }, 1000);
      steps++;
      updateSteps(steps);
    }
  };

  board.addEventListener("click", (event) => {
    const card = event.target.closest(".card");

    if (!card) return;

    card.classList.add("card--open");
    cardsPair.push(card);
    if (cardsPair.length === 2) {
      compareCards();
    }
  });

  return board;
};
