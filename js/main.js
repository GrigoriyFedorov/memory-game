"use strict";

import { createElement } from "./helper.js";
import { createHeader } from "./components/header.js";
import { createBoard } from "./components/board.js";

const header = createHeader();
const main = createElement("main", { classes: ["main"] });
const board = createBoard();

document.body.append(header, main);
main.append(board);
