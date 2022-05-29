const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  title.style.color = "red";
}

title.addEventListener("click", handleTitleClick);
