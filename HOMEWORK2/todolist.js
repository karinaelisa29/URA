function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
      const taskList = document.getElementById('taskList');
      const li = document.createElement('li');
      li.textContent = taskText;
      li.onclick = function() {
        li.classList.toggle('completed');
        saveTasks();
      };
      taskList.appendChild(li);
      taskInput.value = '';
      saveTasks();
    }
  }
  
  function saveTasks() {
    const taskList = document.getElementById('taskList');
    localStorage.setItem('tasks', taskList.innerHTML);
  }
  
  function loadTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = localStorage.getItem('tasks') || '';
    const tasks = taskList.getElementsByTagName('li');
    for (const task of tasks) {
      task.onclick = function() {
        task.classList.toggle('completed');
        saveTasks();
      };
      task.oncontextmenu = function(e) {
        e.preventDefault();
        task.remove();
        saveTasks();
      };
    }
  }
  
  window.onload = loadTasks;
  