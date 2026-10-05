"use strict";

import { createElement } from "./helper.js";
import { createHeader } from "./components/header.js";
import { createBoard } from "./components/board.js";
import { createModal } from "./components/modal.js";
import { createVictoryContent } from "./components/victoryContent.js";

const { header, updateSteps, updatePairs } = createHeader();
const main = createElement("main", { classes: ["main"] });
const board = createBoard(updateSteps, updatePairs, (stepsCount) => {
  openModal(createVictoryContent(stepsCount));
});
const { modal, openModal } = createModal();

document.body.append(header, main, modal);
main.append(board);
