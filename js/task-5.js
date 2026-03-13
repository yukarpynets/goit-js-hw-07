const buttonEl = document.querySelector(".change-color");
const colorTextEl = document.querySelector(".color");
const bodyEl = document.body;

buttonEl.addEventListener("click", () => {
  const newColor = getRandomHexColor();

  bodyEl.style.backgroundColor = newColor;
  colorTextEl.textContent = newColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}