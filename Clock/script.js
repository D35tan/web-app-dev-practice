/* const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
*/

console.log(new Date());

function currentTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const root = document.documentElement;

  root.style.setProperty("--hours-rotation", hours * 30 + "deg");
  root.style.setProperty("--mins-rotation", minutes * 6 + "deg");
  root.style.setProperty("--secs-rotation", seconds * 6 + "deg");

  document.querySelector(".digi-hours").textContent = doubleChar(hours);
  document.querySelector(".digi-mins").textContent = doubleChar(minutes);
  document.querySelector(".digi-secs").textContent = doubleChar(seconds);
}
const date = new Date();

function doubleChar(n) {
  let s = "0" + n.toString();
  return s.slice(-2);
}

setInterval(currentTime, 1000);
