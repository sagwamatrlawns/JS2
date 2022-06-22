const clock = document.querySelector("h2#clock");
// html에서 h2 테그의 id가 clock

function sayClock() {
  c;
}

function getClock() {
  const date = new Date();
  // 이 코드를 실행하면 밀리초, 초, 분, 시간등을 전부 가져올 수 있다.

  let hours = String(date.getHours()).padStart(2, "0");
  // 시간을 변수 hours에 저장
  // 변수를 저장하기 전에 String로 감싸서 number형식을  String으로 바꿔서 저장

  const minutes = String(date.getMinutes()).padStart(2, "0");
  // 분을 변수 minutes에 저장
  // 변수를 저장하기 전에 String로 감싸서 number형식을  String으로 바꿔서 저장

  const seconds = String(date.getSeconds()).padStart(2, "0");
  // 초를 변수 seconds에 저장
  // 변수를 저장하기 전에 String로 감싸서 number형식을  String으로 바꿔서 저장// 변수를 저장하기 전에 String로 감싸서 number형식을  String으로 바꿔서 저장

  //clock.innerText = `${hours / 12}:${minutes}:${seconds}`;
  if (hours > 12) {
    hours = hours - 12;
    clock.innerText = `${hours}:${minutes} AM`;
    return;
  }
  clock.innerText = `${hours}:${minutes} PM`;
  // 위에서 불러온 clock에 innerText를 사용해서 넣음
}

getClock();
setInterval(getClock, 1000);
// setInterval 을 통해 위 작업을 반복적으로 수행한다.
