import { initTodoListHandlers } from './todoList.js';
import { renderTasks } from './renderer.js';
import { getTaskList } from './gateway.js';

document.addEventListener('DOMContentLoaded', () => {
  getTaskList().then(tasks => {
    renderTasks(tasks);
  });
  initTodoListHandlers();
});

// Get information from server
// Renderind
// Init Hendlers
