// Select the input field and the task list element
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');

    // Create the task text element
    const taskTextElement = document.createElement('span');
    taskTextElement.classList.add('task-text');
    taskTextElement.textContent = taskText;
    taskTextElement.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
    });

    // Create the delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('x-btn');
    deleteBtn.textContent = 'x';
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });

    // Append the elements to the task item
    taskItem.appendChild(taskTextElement);
    taskItem.appendChild(deleteBtn);

    // Add the task item to the list
    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = '';
}

// Allow pressing "Enter" to add a task
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
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