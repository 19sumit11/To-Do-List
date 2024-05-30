document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");
  
    addTaskButton.addEventListener("click", function () {
      const taskText = taskInput.value.trim();
  
      if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
          <span class="task">${taskText}</span>
          <button class="completeButton">Complete</button>
          <button class="editButton">Edit</button>
          <button class="deleteButton">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = "";
      }
    });
  
    taskList.addEventListener("click", function (event) {
      const clickedElement = event.target;
  
      if (clickedElement.classList.contains("completeButton")) {
        const task = clickedElement.parentElement.querySelector(".task");
        task.classList.toggle("completed");
      } else if (clickedElement.classList.contains("editButton")) {
        const task = clickedElement.parentElement.querySelector(".task");
        const newTaskText = prompt("Edit task:", task.textContent);
  
        if (newTaskText !== null && newTaskText.trim() !== "") {
          task.textContent = newTaskText;
        }
      } else if (clickedElement.classList.contains("deleteButton")) {
        const listItem = clickedElement.parentElement;
        taskList.removeChild(listItem);
      }
    });
  });
  
  