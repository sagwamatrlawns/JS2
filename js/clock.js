const clock = document.querySelector("h2#clock");

function sayHello() {
  console.log("hello");
}

// setInterval
// 정해진 시간마다 호출을 해준다
setInterval(sayHello, 5000);
// setInterval(실행할 함수, 시간);
// 5000 == 5초
