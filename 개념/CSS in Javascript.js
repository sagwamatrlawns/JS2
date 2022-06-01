const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  h1.classList.toggle("clicked");
  // toggle 은 h1의 classList에 clicked class가 이미 있는지 확인해서
  // 있다면 clicked를 제거 해주고 없다면 clicked를 추가해 준다.
}

h1.addEventListener("click", handleTitleClick);
