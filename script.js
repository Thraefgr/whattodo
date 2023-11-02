const toDoList = document.querySelector(".todo-list");
const addButton = document.querySelector(".add-btn");
const saveButton = document.querySelector(".save-btn");
const clearButton = document.querySelector(".clear-btn")
const textInput = document.querySelector(".text-in");
const dateInput = document.querySelector(".date-in");
let toDoObjects = [];

if(localStorage.getItem("toDoObjects") !== null){
  toDoObjects = JSON.parse(localStorage.getItem("toDoObjects"));
}

for(object of toDoObjects) {
  createAndAppendLi(object);
}

addButton.addEventListener("click", addItem);
saveButton.addEventListener("click", saveToDoObjects);
clearButton.addEventListener("click", clearToDoObjects);

function addItem() {
  const toDoObj = {
    content: textInput.value,
    date: dateInput.value
  };
  toDoObjects.push(toDoObj);

  createAndAppendLi(toDoObj);
}

function saveToDoObjects() {
  localStorage.setItem("toDoObjects", JSON.stringify(toDoObjects));
  console.log(localStorage.getItem("toDoObjects"));
}

function clearToDoObjects() {
  localStorage.clear();
  console.log(localStorage.getItem("toDoObjects"));
}

function createAndAppendLi(object) {
  const li = document.createElement("li");
  const liValue = document.createElement("span");
  const liDate = document.createElement("span");
  liValue.classList.add("todo-value");
  liDate.classList.add("todo-date");
  liValue.textContent = object.content;
  liDate.textContent = object.date;
  li.append(liValue, liDate);
  toDoList.append(li);
}