"use strict";

import { createElement } from "./helper.js";
import { createHeader } from "./components/header.js";
import { createBoard } from "./components/board.js";
import { createModal } from "./components/modal.js";
import { createVictoryContent } from "./components/victoryContent.js";
import { createLeaderboard } from "./components/leaderboard.js";

const main = createElement("main", { classes: ["main"] });
const { modal, openModal } = createModal();

let currentBoard = null;

const startNewGame = () => {
  modal.close();
  updateSteps(0);
  updatePairs(0);

  const newBoard = createBoard(updateSteps, updatePairs, handleWin);

  if (currentBoard) {
    currentBoard.replaceWith(newBoard);
  } else {
    main.append(newBoard);
  }

  currentBoard = newBoard;
};

const openLeaderboard = () => {
  openModal(createLeaderboard());
}

const { header, updateSteps, updatePairs } = createHeader(startNewGame, openLeaderboard);


const handleWin = (stepsCount) => {
  openModal(createVictoryContent(stepsCount, startNewGame));
};

document.body.append(header, main, modal);
startNewGame();
