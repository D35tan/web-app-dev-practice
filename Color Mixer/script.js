const redSlide = document.querySelector("#red");
const greenSlide = document.querySelector("#green");
const blueSlide = document.querySelector("#blue");
const rgbCode = document.querySelector("#rgb-output");
let colorPreview = document.body.style.backgroundColor;

function setBackgroundColor() {
  const color =
    "rgb(" +
    redSlide.value +
    ", " +
    greenSlide.value +
    ", " +
    blueSlide.value +
    ")";
  document.body.style.backgroundColor = color;
  console.clear();
  console.log(color);
}
function rgbCodeOutput() {
  rgbCode.textContent =
    "rgb:" +
    " " +
    redSlide.value +
    ", " +
    greenSlide.value +
    ", " +
    blueSlide.value;
}

setBackgroundColor();
rgbCodeOutput();

document.body.addEventListener("input", rgbCodeOutput);
document.body.addEventListener("input", setBackgroundColor);
