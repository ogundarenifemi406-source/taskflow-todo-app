document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addBtn = document.getElementById("addBtn");
  const taskList = document.getElementById("taskList");
  const taskCount = document.getElementById("taskCount");

  function updateTaskCount() {
    const remainingTasks =
      taskList.querySelectorAll("li:not(.completed)").length;

    taskCount.textContent =
      remainingTasks +
      (remainingTasks === 1 ? " task remaining" : " tasks remaining");
  }

  function addTask() {
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
  }

  addBtn.addEventListener("click", addTask);

  taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  updateTaskCount();
});
