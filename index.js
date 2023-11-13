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
  newTaskCreation(e.target["new-task"].value);
});

function newTaskCreation(task) {
  const taskLi = document.createElement("li");
  taskLi.textContent = `${task}  `;
  const btn = document.createElement("button");
  btn.textContent = "completed";
  btn.addEventListener("click", handleCompletedTask);
  taskLi.appendChild(btn);
  const mainTaskUl = document.getElementById("main-task-list");
  mainTaskUl.appendChild(taskLi);
  taskForm.reset();
}

function handleCompletedTask(e) {
  console.log(e);
}

const staticTask = document.getElementsByClassName("static-task");

function addListenerToTasks(task) {
  for (let task of staticTask) {
    task.addEventListener("click", (e) => {
      newTaskCreation(task.textContent);
      //   newTaskCreation(task);
    });
  }
}

addListenerToTasks();
