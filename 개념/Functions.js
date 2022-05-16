// Function은 내가 계속 반복해서 사용할 수 있는 코드 조각이다.
// 어떤 코드를 캡슐화 해서 실행ㅇ을 여러번 할 수 있게 해준다.
function sayHello(nameOfPerson, age) {
  console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("KJ", 10);
sayHello("dal", 213);
sayHello("lynn", 21);

// function에 정보를 보내서 수식 적용해 보기
function plus(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
}

function divide(a, b) {
  console.log(a / b);
}

plus(60, 8);
divide(98, 20);

const player = {
  name: "KJ",
  sayHello: function (otherPersonsName) {
    console.log("hello " + otherPersonsName + " ince to meet you!");
  },
};

console.log(player.name);
player.sayHello("lynn");
player.sayHello("sagwa");
player.sayHello("Pizza");
