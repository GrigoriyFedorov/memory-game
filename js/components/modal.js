"use strict";

import { createElement } from "../helper.js";

export const createModal = () => {
  const modalBody = createElement("div", {
    classes: ["modal__body"],
  });

  const modal = createElement("dialog", {
    classes: ["modal"],
    children: [
      modalBody,
      createElement("form", {
        classes: ["modal__close-btn-wrapper"],
        attributes: {
          method: "dialog",
        },
        children: [
          createElement("button", {
            classes: ["modal__close-btn", "button"],
            text: "Закрыть",
            attributes: {
              type: "submit",
            },
          }),
        ],
      }),
    ],
  });

  const openModal = (childNode) => {
    modalBody.replaceChildren(childNode);
    modal.showModal();
  };

  return {
    modal,
    openModal,
  };
};
