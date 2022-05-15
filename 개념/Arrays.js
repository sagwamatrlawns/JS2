// 배열 선언방법과 특징
// 시작과 끝은 대괄호로 작성한다
// 다양한 데이터 타입을 넣을 수 있다.
// Array의 목적은, 하나의 variable 안에 데이터의 list를 가지는 것
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const nonsense = [1, 2, "hello", false, null, true, undefined, "KJ"];

console.log(daysOfWeek, nonsense);
// 배열의 순서는 0부터 시작한다
// 따라서 배열의 5번쨰 값을 가져오려면 4를 입력해야한다.
console.log(daysOfWeek[4]);
// 만약 값의 범위를 넘어가는 수를 입력한다면  undefined가 나온다.

// array에 값을 삽입할때 사용한다.
// const지만 array의 경우 내용물 안의 요소들은 변경이 가능하다.
daysOfWeek.push("sun");

console.log(daysOfWeek);
