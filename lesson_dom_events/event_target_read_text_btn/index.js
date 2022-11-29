const btnElems = document.querySelectorAll('.btn');
function handleClick(event) {
  console.log(event.target.textContent);
}
btnElems.forEach(btn => btn.addEventListener('click', handleClick));

// const bodyElem = document.querySelector('body');

// function handleClick(event) {
//   console.log(event.target.textContent);
// }

// bodyElem.addEventListener('click', function (event) {
//   if (event.target.closest('.btn')) {
//     handleClick(event);
//   }
// });
