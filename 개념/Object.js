// object 선언 방법
const player = {
  name: "KJ",
  points: 10,
  fat: true,
};

// object 전체 출력
console.log(player);

// object의 원하는 값을 출력하기
console.log(player.name);
console.log(player["name"]);

// object를 업데이트 하기
console.log(player);
player.fat = false;
console.log(player);

// ocject에 property추가 하기
console.log(player);
player.lastName = "potato";
console.log(player);

// 더하기
console.log(player.points);
player.points = player.points + 15;
console.log(player.points);
