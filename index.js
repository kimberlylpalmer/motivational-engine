//global helper functions
function el(id) {
  return document.getElementById(id);
}

//Create Task form
const taskForm = el("new-task-form");
const inputTask = el("new-task");
const mainTaskUl = el("main-task-list");
const completedTaskUl = el("completed-task-list");

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target["new-task"].value);
  newTaskCreation(e.target["new-task"].value);
});

function createTaskElement(task) {
  const taskLi = document.createElement("li");
  taskLi.textContent = `${task}  `;
  const btn = document.createElement("button");
  btn.textContent = "COMPLETED";
  btn.id = "completed-btn";
  btn.addEventListener("click", handleCompletedTask);
  taskLi.appendChild(btn);
  return taskLi;
}

function newTaskCreation(task) {
  const taskLi = createTaskElement(task);
  mainTaskUl.appendChild(taskLi);
  taskForm.reset();
}

function handleCompletedTask(e) {
  const taskText = e.target.parentNode.textContent.trim();
  const taskLi = document.createElement("li");
  taskLi.textContent = taskText;
  completedTaskUl.appendChild(taskLi);

  mainTaskUl.removeChild(e.target.parentNode);
  fetchMotivationQuote();
}

const staticTask = document.getElementsByClassName("static-task");

function addListenerToTasks(task) {
  for (let task of staticTask) {
    task.addEventListener("click", (e) => {
      newTaskCreation(task.textContent);
    });
  }
}

addListenerToTasks();

// moticational quote when task is completed

const completedTaskAPI = "https://api.adviceslip.com/advice";
const taskDone = el("motivational-phrase");

function fetchMotivationQuote() {
  fetch(completedTaskAPI)
    .then((res) => res.json())
    .then(renderCompletedMotivation)
    .catch((error) => console.error("Error fetching motivation:", error));
}

function renderCompletedMotivation(doneAffirmation) {
  const affirmation = doneAffirmation.slip.advice;
  taskDone.textContent = "";
  taskDone.textContent = affirmation;
}

// motivational quote top off page

const motivAPI = "https://api.quotable.io/quotes/random";
const dailyquote = el("daily-advice-quote");

fetch(motivAPI)
  .then((res) => res.json())
  .then(renderMotivation)
  .catch((error) => console.error("Error fetching motivation:", error));

function renderMotivation(inspire) {
  dailyquote.innerHTML = "";
  dailyquote.innerHTML = inspire[0].content;
}
