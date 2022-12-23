import { getItem } from './storage.js';

const listElem = document.querySelector('.list');

const compareTasks = (a, b) => {
  if (a.done - b.done !== 0) {
    return a.done - b.done;
  }
  if (a.done) {
    return new Date(b.finishDate) - new Date(a.finishDate);
  }
  return new Date(b.createDate) - new Date(a.createDate);
};

const createCheckBox = ({ done, id }) => {
  const checkboxElem = document.createElement('input');
  checkboxElem.setAttribute('type', 'checkbox');
  checkboxElem.dataset.id = id;
  checkboxElem.checked = done;
  checkboxElem.classList.add('list__item-checkbox');
  return checkboxElem;
};

const createListItem = ({ text, done, id }) => {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list__item');
  const checkboxElem = createCheckBox({ done, id });
  if (done) {
    listItemElem.classList.add('list__item_done');
  }
  listItemElem.append(checkboxElem, text);

  return listItemElem;
};

export const renderTasks = () => {
  const tasksList = getItem('tasksList') || [];
  listElem.innerHTML = '';
  const tasksElems = tasksList.sort(compareTasks).map(createListItem);

  listElem.append(...tasksElems);
};
