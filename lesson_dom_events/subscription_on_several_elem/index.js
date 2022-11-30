const listElems = document.querySelectorAll('.pagination__page');
function handleClick(event) {
  console.log(event.target.dataset.pageNumber);
}
listElems.forEach(elem => elem.addEventListener('click', handleClick));
