const counter = document.querySelector("#count");
const reset = document.querySelector("#reset");
const countArea = document.querySelector("main");
let count = 0;

console.log(countArea.style.backgroundSize);

function increaseCount() {
  count++;
  counter.innerText = count;
  countArea.style.backgroundSize = (count % 100) + "%";
}

countArea.addEventListener("click", increaseCount);
document.addEventListener("keydown", function (e) {
  if (e.key === " " || e.key === "Enter") {
    increaseCount();
  }
});

reset.addEventListener("click", function () {
  count = 0;
  counter.innerText = count;
});
