"use strict";

import { createElement } from "./helper.js";
import { createHeader } from "./components/header.js";
import { createBoard } from "./components/board.js";

const { header, updateSteps, updatePairs } = createHeader();
const main = createElement("main", { classes: ["main"] });
const board = createBoard(updateSteps, updatePairs);

document.body.append(header, main);
main.append(board);
