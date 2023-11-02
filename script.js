const toDoList = document.querySelector(".todo-list");
const addButton = document.querySelector(".add-btn");
const saveButton = document.querySelector(".save-btn");
const textInput = document.querySelector(".text-in");
const dateInput = document.querySelector(".date-in");
const toDoObj = {
  content: null,
  date: ""
};
let toDoObjects = [];

if(localStorage.getItem("toDoObjects") !== null){
  toDoObjects = JSON.parse(localStorage.getItem("toDoObjects"));
}

addButton.addEventListener("click", addItem);
saveButton.addEventListener("click", saveToDoObjects);

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
}

function saveToDoObjects() {
  localStorage.setItem("toDoObjects", JSON.stringify(toDoObjects));
  console.log(localStorage.getItem("toDoObjects"));
}