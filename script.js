onst taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

function updateTaskCount() {
  const remainingTasks = taskList.querySelectorAll("li:not(.completed)").length;

  taskCount.textContent =
    remainingTasks + (remainingTasks === 1 ? " task remaining" : " tasks remaining");
}

addBtn.addEventListener("click", function () {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    return;
  }

  const task = document.createElement("li");

  const taskName = document.createElement("span");
  taskName.textContent = taskText;

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✓";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  completeBtn.addEventListener("click", function () {
    task.classList.toggle("completed");
    taskName.style.textDecoration =
      task.classList.contains("completed") ? "line-through" : "none";

    updateTaskCount();
  });

  deleteBtn.addEventListener("click", function () {
    task.remove();
    updateTaskCount();
  });

  task.appendChild(taskName);
  task.appendChild(completeBtn);
  task.appendChild(deleteBtn);

  taskList.appendChild(task);

  taskInput.value = "";

  updateTaskCount();
});
taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addBtn.click();
  }
});
