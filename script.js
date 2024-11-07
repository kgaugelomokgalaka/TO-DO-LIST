// Select the input field and the task list element
//const taskInput = document.getElementById('task-input');
//const taskList = document.getElementById('task-list');

// public/script.js
function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();
  
    if (taskText !== "") {
      const taskList = document.getElementById("task-list");
  
      // Create a new task item
      const listItem = document.createElement("li");
      listItem.className = "task-item";
  
      // Add text to the task item
      const taskTextElement = document.createElement("span");
      taskTextElement.className = "task-text";
      taskTextElement.innerText = taskText;
      listItem.appendChild(taskTextElement);
  
      // Create a delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.className = "delete-btn";
      deleteBtn.innerText = "Delete";
      deleteBtn.onclick = function () {
        listItem.remove();
      };
      listItem.appendChild(deleteBtn);
  
      // Add the new task to the task list
      taskList.appendChild(listItem);
  
      // Clear the input field
      taskInput.value = "";
    } else {
      alert("Please enter a task.");
    }
  }
  

// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'TO-DO-LIST.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});