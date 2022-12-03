const tasks = [
  { text: 'Buy milk', done: false, id: 1 },
  { text: 'Pick up Tom from airport', done: false, id: 2 },
  { text: 'Visit party', done: false, id: 3 },
  { text: 'Visit doctor', done: true, id: 4 },
  { text: 'Buy meat', done: true, id: 5 },
];

const listElem = document.querySelector('.list');

const renderTasks = tasksList => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      checkbox.dataset.id = id;
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};
renderTasks(tasks);

const checkboxElem = document.querySelector('.list__item-checkbox');

const changeDone = event => {
  const isCheckbox = event.target.classList.contains('list__item-checkbox');
  if (!isCheckbox) return;

  const checkedEl = Number(event.target.dataset.id);
  // console.log(checkedEl)
  tasks.forEach(task => {
    if (task.id === checkedEl) {
      task.done = task.done === true ? false : true;
    }
    listElem.innerHTML = '';
  });
  renderTasks(tasks);
};

listElem.addEventListener('click', changeDone);

const createButtonElem = document.querySelector('.create-task-btn');

// const inputElem = document.querySelector('.task-input');

const createTask = () => {
  const inputElem = document.querySelector('.task-input');
  const text = inputElem.value;
  if (!text) return;
  const newTask = { text: text, done: false, id: Math.round(Math.random() * (800 - 6) + 6) };
  tasks.unshift(newTask);
  listElem.innerHTML = '';
  renderTasks(tasks);
  inputElem.value = '';
};

createButtonElem.addEventListener('click', createTask);

// setNewTask = (event) =>{
//   createTask()
//   listElem.innerHTML = '';
//   renderTasks(tasks)
// }
// createButtonElem.addEventListener('click', setNewTask)

console.log(tasks);

// const createElem = event =>{
//   const createButton = event.target

// }
// createButtonElem.addEventListener('click', createElem)
