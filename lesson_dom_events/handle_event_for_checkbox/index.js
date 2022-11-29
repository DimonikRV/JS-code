const checkBoxElem = document.querySelector('.task-status');
checkBoxElem.addEventListener('change', isTrue);

function isTrue() {
  console.log(checkBoxElem.checked);
}
