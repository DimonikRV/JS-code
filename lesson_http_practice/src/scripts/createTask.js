import { getTaskList, createTaskList } from './gateway.js';
import { renderTasks } from './renderer.js';

export const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector('.task-input');
  const text = taskTitleInputElem.value;
  if (!text) return;
  taskTitleInputElem.value = '';

  const newTasksList = {
    text,
    done: false,
    createDate: new Date().toISOString(),
    id: Math.random().toString(),
  };
  createTaskList(newTasksList)
    .then(() => getTaskList())
    .then(tasks => renderTasks(tasks));
};

// 1.prepare taskList
// 2.send it to the db
// 3.read newTasks from db
// 4.rendering
