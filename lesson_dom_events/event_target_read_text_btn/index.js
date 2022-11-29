const btnElems = document.querySelectorAll('.btn');
function handleClick(event) {
  console.log(event.target.textContent);
}
btnElems.forEach(btn => btn.addEventListener('click', handleClick));
