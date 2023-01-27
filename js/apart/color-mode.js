/*
    color sheme (default-light)
    v1.0
    v1.1 -- add querySelectorAll
*/
"use strict";

function colorMode() {
  function addColor() {
    document.body.classList.toggle("_color-mode");
  }

  function setRemoveColor() {
    if (getColor()) {
      localStorage.removeItem("color--mode");
    } else {
      localStorage.setItem("color--mode", "val");
    }
  }

  function getColor() {
    return localStorage.getItem("color--mode");
  }

  if (getColor()) {
    addColor();
  }

  const colorButton = document.querySelectorAll(".color__mode");
  for (let i = 0; i < colorButton.length; i++) {
    colorButton[i].addEventListener("click", () => {
      setRemoveColor();
      addColor();
    });
  }
}

export {
  colorMode
};
