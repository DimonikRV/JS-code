import { initTodoListHandlers } from './todoList.js';
import { renderTasks } from './renderer.js';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  initTodoListHandlers();
});

// Get information from server
// Renderind
// Init Hendlers
