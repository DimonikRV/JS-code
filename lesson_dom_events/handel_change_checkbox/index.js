const checkBoxEl = document.querySelector('.task-status');

function isChecked(event) {
  console.log(event.target.checked);
}
checkBoxEl.addEventListener('change', isChecked);
