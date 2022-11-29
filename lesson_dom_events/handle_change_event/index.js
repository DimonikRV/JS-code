const inputTxtElem = document.querySelector('.text-input');
function consoleInput(event) {
  console.log(event.target.value);
}
inputTxtElem.addEventListener('change', consoleInput);
