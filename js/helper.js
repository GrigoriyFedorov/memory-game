"use strict";

export const createElement = (
  tag,
  { classes = [], text = "", id = "", attributes = {}, children = [] } = {},
) => {
  const element = document.createElement(tag);

  element.textContent = text;
  if (classes.length) element.classList.add(...classes);
  if (id) element.id = id;
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
  if (children.length) element.append(...children);

  return element;
};

export const shuffle = (array) => {
  let currentIndex = array.length;

  while (currentIndex) {
    const randomIndex = Math.floor(Math.random() * currentIndex--);

    [array[randomIndex], array[currentIndex]] = [
      array[currentIndex],
      array[randomIndex],
    ];
  }

  return array;
};

export const createArr = () => {
  const arr = [];
  
  for (let i = 0; i < 8; i++) {
    arr.push(i, i)
  }

  return arr;
};

