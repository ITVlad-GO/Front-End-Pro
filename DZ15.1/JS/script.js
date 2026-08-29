const taskInput = document.querySelector("#taskInput");
const addTask = document.querySelector(".addTask");
const taskList = document.querySelector(".taskList");

function renderTodos() {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];

  todos.forEach((todo) => {
    const li = document.createElement("li");

    li.textContent = todo;

    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Видалити";

    deleteButton.classList.add("delete");

    li.append(deleteButton);

    taskList.append(li);
  });
}

renderTodos();

addTask.addEventListener("click", () => {
  const taskText = taskInput.value;
  if (taskText.trim() === "") {
    return;
  }
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.push(taskText);
  localStorage.setItem("todos", JSON.stringify(todos));

  const li = document.createElement("li");
  li.textContent = taskText;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Видалити";
  deleteButton.classList.add("delete");
  li.append(deleteButton);

  taskList.append(li);
  taskInput.value = "";
});

taskList.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    const li = event.target.parentElement;
    const taskText = li.firstChild.textContent;

    const todos = JSON.parse(localStorage.getItem("todos")) || [];

    const index = todos.indexOf(taskText);

    if (index !== -1) {
      todos.splice(index, 1);
    }

    localStorage.setItem("todos", JSON.stringify(todos));

    li.remove();
  }
});
