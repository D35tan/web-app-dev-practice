const fast = document.querySelector("#fast");
const cheap = document.querySelector("#cheap");
const good = document.querySelector("#good");
let lastClicked = null;

function toggle(clickedCheckbox, otherCheckbox, otherCheckbox2) {
  if (
    clickedCheckbox.checked &&
    otherCheckbox.checked &&
    otherCheckbox2.checked
  ) {
    lastClicked.checked = false;
  }
  lastClicked = clickedCheckbox;
}

fast.addEventListener("change", function () {
  toggle(fast, cheap, good);
  console.log(lastClicked.id);
});
cheap.addEventListener("change", function () {
  toggle(cheap, fast, good);
  console.log(lastClicked.id);
});
good.addEventListener("change", function () {
  toggle(good, fast, cheap);
  console.log(lastClicked.id);
});
