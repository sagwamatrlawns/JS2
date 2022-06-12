const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo) {
  // hmlt에 li를 생성함
  const li = document.createElement("li");

  // li안에 span을 생성함
  const span = document.createElement("span");

  // span을 li안에다 넣음
  li.appendChild(span);

  // newTodo에 저장된 input값을 span에 넣음
  span.innerText = newTodo;

  // list에 li를 넣음
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
