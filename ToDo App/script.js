const desc = document.querySelector("#desc");
const addBtn = document.querySelector("#add");
const saveBtn = document.querySelector("#savebtn");
const loadBtn = document.querySelector("#loadbtn");

let state = {
  todos: JSON.parse.localStorage.getItem("Todo-List") || [
    { description: "Learn HTML", done: true },
    { description: "Learn CSS", done: true },
    { description: "Learn JavaScript", done: false },
  ],
};

function renderTodos() {
  const list = document.querySelector("#uList");
  list.innerHTML = "";

  state.todos.forEach((todo) => {
    const newLi = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;

    checkbox.addEventListener("change", (e) => {
      const newTodoDoneState = e.target.checked;
      todo.done = newTodoDoneState;
    });

    newLi.appendChild(checkbox);
    const todoText = document.createTextNode(todo.description);
    newLi.append(todoText);
    list.appendChild(newLi);
  });
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("Todo-List", JSON.stringify(state.todos));
}

renderTodos();

function addNewTodo() {
  let arr = state.todos;
  const newToDo = { description: desc.value, done: false };
  arr.push(newToDo);
  desc.value = "";
  desc.focus();
  conLog();
  renderTodos();
}
function conLog() {
  console.log(state.todos);
}
addBtn.addEventListener("click", addNewTodo);
