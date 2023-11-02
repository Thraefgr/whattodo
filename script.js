const toDoList = document.querySelector(".todo-list");
const addButton = document.querySelector(".add-btn");
const textInput = document.querySelector(".text-in");

addButton.addEventListener("click", addItem);

function addItem() {
  const li = document.createElement("li");
  li.textContent = textInput.value;
  toDoList.append(li);
}