//global helper functions
function el(id) {
  return document.getElementById(id);
}

//Create Task form
const taskForm = el("new-task-form");
const inputTask = el("new-task");
const newTaskBtn = el("submit-new-task");

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target["new-task"].value);
});

function newTaskCreation(task) {
  const taskLi = document.createElement("li");
  taskLi.textContent = `${todo}  `;
  const btn = document.createElement("button");
  btn.textContent = "completed";
  btn.addEventListener("click", console.log("completed clicked"));
  taskLi.appendChild(btn);
  const mainTaskUl = document.getElementById("main-task-list");
}
