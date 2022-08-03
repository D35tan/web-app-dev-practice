const body = document.querySelector("body");
const button = document.querySelector("button");
const title = document.title;

button.addEventListener("click", function () {
  if (document.title === "Good Morning") {
    document.title = "Good Night";
  } else {
    document.title = "Good Morning";
  }
  body.classList.toggle("darkmode");
  button.classList.toggle("btn-darkmode");
});
