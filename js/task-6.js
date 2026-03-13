const inputEl = document.querySelector("#controls input");
const createBtnEl = document.querySelector("[data-create]");
const destroyBtnEl = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

createBtnEl.addEventListener("click", () => {
  const amount = Number(inputEl.value);

  if (amount < 1 || amount > 100) {
    return;
  }

  destroyBoxes();
  createBoxes(amount);
  inputEl.value = "";
});

destroyBtnEl.addEventListener("click", () => {
  destroyBoxes();
});

function createBoxes(amount) {
  const elements = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const boxEl = document.createElement("div");

    boxEl.style.width = `${size}px`;
    boxEl.style.height = `${size}px`;
    boxEl.style.backgroundColor = getRandomHexColor();

    elements.push(boxEl);
    size += 10;
  }

  boxesEl.append(...elements);
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}