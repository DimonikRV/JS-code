function finishList() {
  const list = document.querySelector('.list');
  const listElem5 = document.querySelector('.special');
  const listElems = [...document.querySelectorAll('li')];
  const listElem8 = document.createElement('li');
  const listElem1 = document.createElement('li');
  const listElem4 = document.createElement('li');
  const listElem6 = document.createElement('li');
  listElems.map(elem => {
    elem.classList.add('special');
    return elem;
  });
  listElem8.classList.add('special');
  listElem1.classList.add('special');
  listElem4.classList.add('special');
  listElem6.classList.add('special');
  listElem8.textContent = '8';
  listElem1.textContent = '1';
  listElem4.textContent = '4';
  listElem6.textContent = '6';
  list.append(listElem8);
  list.prepend(listElem1);
  listElem5.before(listElem4);
  listElem5.after(listElem6);
}
finishList();
