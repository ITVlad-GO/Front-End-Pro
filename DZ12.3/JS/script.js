const taskInput = document.querySelector("#taskInput");
const addTask = document.querySelector(".addTask");
const taskList = document.querySelector(".taskList");

addTask.addEventListener("click", () => {
  const taskText = taskInput.value;
  if (taskText.trim() === "") {
    return;
  }
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
    event.target.parentElement.remove();
  }
});


