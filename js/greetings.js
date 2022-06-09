const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
//onst loginButton = document.querySelector("#login-form button");

// 이렇게 변수로 지정해주는 이유는 변수명이 오타가 나면 js에서 지적해 주기 때문이다.
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  // 아무것도 하지 않음으로써, JS가 어떤 정보를 담은 채로 function을 호출한다 event object를 기본적으로 제공되는 function이 이 preventDefault이다.
  event.preventDefault();
  //console.log(loginInput.value);
  //console.log("dial");
  //const username = loginInput.value;
  //const username = loginInput.value;
  //localStorage.setItem(USERNAME_KEY, username);

  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  //console.log(username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
// function handleLinkClick(event) {
//   event.preventDefault();
//   console.dir(event);
// }

//loginButton.addEventListener("click", onLoginBtnClick);

//link.addEventListener("click", handleLinkClick);

// localStorage에 유저 정보가 없다면 null을 반환
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
