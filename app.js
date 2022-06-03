const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
//onst loginButton = document.querySelector("#login-form button");

function onLoginSubmit(event) {
  // 아무것도 하지 않음으로써, JS가 어떤 정보를 담은 채로 function을 호출한다 event object를 기본적으로 제공되는 function이 이 preventDefault이다.
  event.preventDefault();
  //console.log(loginInput.value);
  //console.log("dial");
  //const username = loginInput.value;
  console.log(loginInput.value);
}

//loginButton.addEventListener("click", onLoginBtnClick);
loginForm.addEventListener("submit", onLoginSubmit);
