"use strict";

import { createElement } from "../helper.js";

export const createLeaderboard = () => {
  const topResults = JSON.parse(localStorage.getItem("topResults"));

  const leaderboard = createElement("div", {
    classes: ["leaderboard"],
    children: [
      createElement("h2", {
        classes: ["leaderboard__title"],
        text: "Таблица лидеров",
      }),
    ],
  });

  if (topResults === null || topResults.length === 0) {
    const emptyText = createElement("p", {
      classes: ["leaderboard__empty"],
      text: "Результатов пока нет",
    });
    leaderboard.append(emptyText);
    return leaderboard;
  }

  const createRow = (position, stepsCount, date) => {
    const row = createElement("tr", {
      children: [
        createElement("td", {
          text: `${position}`,
        }),
        createElement("td", {
          text: `${stepsCount}`,
        }),
        createElement("td", {
          text: `${date}`,
        }),
      ],
    });

    return row;
  };

  const createTbody = () => {
    const tBody = createElement("tbody");
    topResults.forEach(({ stepsCount, date }, index) => {
      const row = createRow(index + 1, stepsCount, date);
      tBody.append(row);
    });

    return tBody;
  };

  const table = createElement("table", {
    classes: ["leaderboard__table"],
    children: [
      createElement("thead", {
        children: [
          createElement("tr", {
            children: [
              createElement("th", {
                text: "Место",
              }),
              createElement("th", {
                text: "Ходов",
              }),
              createElement("th", {
                text: "Дата",
              }),
            ],
          }),
        ],
      }),
      createTbody(),
    ],
  });

  leaderboard.append(table);

  return leaderboard;
};
