## 복습

**🍏 Variables(변수)**<br>
let과 const의 차이점은 let은 업데이트가 가능하지만 const는 값을 업데이트 할 수 없다는 점이다.
(let을 업데이트 할때는 let을 다시 쓸 필요가 없다)

ex) **변수의 값을 업데이트 하고 싶은 경우**<br>
let a = 5; 기존의 값이 5인 상태<br>
a = 10; let을 생략하고 10으로 업데이트

**🍎 내가 사용해야 하는 것**<br>
const를 주로 사용하고 let은 필요할 때만 사용하고 var은 사용하면 안된다.
<br>
<br>

**🍐 boolean**<br>
boolean은 두 가지 옵션만 있다 바로 true와 false이다.
<br>
<br>

**🍊 공백**<br>
null은 아예 비어있음을 정의 하는것이고, undefinde는 변수에 값을 부여하지 않은 상태를 의미한다.

**🍋 array**<br>
list의 형태로 원하는 값들을 하나에 담아두는 것이다.

ex) const pizza = [1,2,"사과는 맛있다", 'abc', false, null];

**호출**<br>
console.log(pizza); : array 전체 출력<br>
console.log(pizza[2]); : 0번부터 호출이 시작되기 때문에 "사과는 맛이다"가 출력된다.

**업데이트**<br>
pizza[2] = "사실 맛없다"; : "사과는 맛있다"를 "사실 맛없다"로 수정 한다는 뜻이다.<br>
pizza.push("이야!"); : "pizza" array에 "이야!" 라는 것을 추가한다는 뜻이다.

**const로 만들어진 array가 업데이트가 가능한이유**<br>
const자체를 변경하는 것이 아닌 objects의 값을 변경하는 것이기 떄문에 없데이트에 오류가 없는 것이다.

**🍌object(객체)**<br>
객체란 여러 속성을 하나의 변수에 자장할 수 있도록 해주는 데이터 타입이다.<br>
선언예시)
const player = {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name: "KJ",<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;age: 98,<br>
};

**🍉function** <br>
function이란 코드를 캡슐화 해서 계속 반복해서 사용할 수 있도록 만들어 주는 것이다.
