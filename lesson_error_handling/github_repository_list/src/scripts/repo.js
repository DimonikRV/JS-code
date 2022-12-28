const listElem = document.querySelector('.repo-list');

export const cleareList = () => {
  listElem.innerHTML = '';
};

export const renderReposList = repoList => {
  const listItemElems = repoList.map(({ name }) => {
    const listItemElem = document.createElement('li');
    listItemElem.classList.add('repo-list__item');
    listItemElem.textContent = name;
    return listItemElem;
  });
  listElem.append(...listItemElems);
};
