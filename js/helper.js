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
