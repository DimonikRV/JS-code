import { getTaskList } from './gateway.js';
import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';

export const onToggleTask = event => {
  const isCheckbox = event.target.classList.contains('list__item-checkbox');
  if (!isCheckbox) return;
 
  const taskId = event.target.dataset.id
   const done = event.target.checked;
  const newTask = getTaskList().find(task => task.id === event.target.dataset.id) 
      const newTasksList = 
      return {
        ...task,
        done,
        finishDate: done ? new Date().toISOString() : null,
      };
    }
    return task;

  renderTasks();
;
