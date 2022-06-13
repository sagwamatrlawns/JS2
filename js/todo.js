const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

// 버튼을 클릭하면 이 함수가 실행되고 event의 값을 가져온다.
function deletToDo(event) {
  // target은 클릭된 HTML element이다
  // parentElement는 클릭된 element의 부모이다
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo) {
  // hmlt에 li를 생성함
  const li = document.createElement("li");

  // li안에 span을 생성함
  const span = document.createElement("span");

  // newTodo에 저장된 input값을 span에 넣음
  span.innerText = newTodo;

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
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
