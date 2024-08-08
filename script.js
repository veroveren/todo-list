const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Loading tasks from JSON (kalo udah ada data sebelumnya)
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Hapus';
        deleteButton.onclick = () => deleteTask(index);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

// Adding task if they dont have before (nambahin task kalo belum ada)
function addTask() {
    const task = taskInput.value;
    if (task) {
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
        taskInput.value = '';
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

renderTasks(); // Render tasks saat halaman dimuat
