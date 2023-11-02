const toDoList = document.querySelector(".todo-list");
const addButton = document.querySelector(".add-btn");
const textInput = document.querySelector(".text-in");
const dateInput = document.querySelector(".date-in");
const toDoObj = {
  content: null,
  date: ""
};
const toDoObjects = [];

addButton.addEventListener("click", addItem);

function addItem() {
  toDoObj.content = textInput.value;
  toDoObj.date = dateInput.value;
  toDoObjects.push(toDoObj);

  const li = document.createElement("li");
  const liValue = document.createElement("span");
  const liDate = document.createElement("span");
  liValue.classList.add("todo-value");
  liDate.classList.add("todo-date");
  liValue.textContent = toDoObj.content;
  liDate.textContent = toDoObj.date;
  li.append(liValue, liDate);
  toDoList.append(li);
  console.log(toDoObjects);
}