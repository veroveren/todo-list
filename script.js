const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Fetch tasks from JSON file
fetch('tasks.json')
  .then(response => response.json())
  .then(data => {
    tasks = data;
    renderTasks();
  })
  .catch(error => console.error('Error loading tasks:', error));

// ... (sisanya sama seperti kode sebelumnya)
