"use-strict";
let clickable = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "[",
  "]",
  "a",
  "s",
];
let record = [];
let objectRelation = {};
let MainStr = [];

//sets the object parameters to be checked by the function below
for (let i = 0, j = 6; i < clickable.length; i++) {
  let str = clickable[i];
  if (i + 1 <= 7) objectRelation[str] = 6 - i;
  else if (i + 1 <= 13) {
    objectRelation[str] = j + "(sharp)";
    j--;
  } else objectRelation[str] = 0 + "(sharp)";
}

function addEvents(addFunction) {
  document.querySelector("body").addEventListener("keydown", audioSelection);
}

function addHoles(button) {
  for (let i = 0; i < clickable.length; i++) {
    if (clickable[i] == button) {
      MainStr.push(objectRelation[button] + " ");
    }
  }
}
let audioSelection = (button) => {
  if (verifyClicked(button.key)) {
    document.querySelector(".audio").src = `fluteSound/${button.key}.mp3
    `;
    addHoles(button.key);
    document.querySelector(".editWrite").textContent = MainStr;
  }
  if (button.key == "Backspace") {
    MainStr.pop();
    document.querySelector(".editWrite").textContent = MainStr;
  }
};

function verifyClicked(button) {
  let a = 0;
  for (let i = 0; i < clickable.length; i++) {
    if (clickable[i] == button) {
      a = 1;
      break;
    }
  }
  return a;
}

addEvents();
console.log("version 1.2");
