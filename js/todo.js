const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

// todos를 변수로 지정
const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  // JSON.stringify(toDos)을 이용해서 toDos의 값을 string값음로 변환
  localStorage.setItem("todos", JSON.stringify(toDos));
}

// 버튼을 클릭하면 이 함수가 실행되고 event의 값을 가져온다.
function deletToDo(event) {
  // target은 클릭된 HTML element이다
  // parentElement는 클릭된 element의 부모이다
  const li = event.target.parentElement;

  li.remove();

  // filter TIL보기
  // toDo.id와 li.id의 타입이 달라서 parseInt로 감싸서 문자열을 숫자로 바꿔줌
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));

  // toDos DB에서 todo를 지운 뒤에
  // saveToDos를 다시 호출한다.
  saveToDos();
}

function parintToDo(newTodo) {
  // hmlt에 li를 생성함
  const li = document.createElement("li");

  li.id = newTodo.id;

  // li안에 span을 생성함
  const span = document.createElement("span");

  // newTodo에 저장된 input값을 span에 넣음
  span.innerText = newTodo.text;

  // html에 button을 생성해 준다.
  const button = document.createElement("button");

  // 버튼안의 텍스트
  button.innerText = "❌";

  // 버튼 클릭을 알려주는 기본함수
  button.addEventListener("click", deletToDo);

  // span을 li안에다 넣음
  li.appendChild(span);

  li.appendChild(button);

  // list에 li
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  // from은 기본적으로 Enter을 누르면 submit이 되어서
  // 웹페이지가 세로고칭 되기 때문에 이렇게 막아준다
  event.preventDefault();

  // input 의 현재 value를 새로운 변수에 복사하는 것
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,

    // 각각에게 아이디를 부여하기 위한 함수
    id: Date.now(),
  };

  // 오브텍트롤 변환된어서 호출
  toDos.push(newTodoObj);

  // text 형식으로 넘김
  parintToDo(newTodoObj);

  // 7번쨰 줄의 함수 호출
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item) {
  console.log("this is the turn of", item);
}

// todos에 있는 string형식을 todolist를 savedToDos를 저장한다.
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;

  // localStorage에서 받으면 forEach가 실행되고 paintToDo를 호출한다.
  parsedToDos.forEach(parintToDo);
}
