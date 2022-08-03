const lightToggle = document.querySelector("#lightSwitch");
lightToggle.addEventListener("click", function () {
  const body = document.querySelector("body");
  const article = document.querySelectorAll("article");
  console.log(article);
  // ----------------------- ^ funktioniert nicht mit querySelectorAll aber mit querySelector
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    article.classList.remove("light");
  } else {
    body.classList.add("dark");
    article.classList.add("light");
  }
});
