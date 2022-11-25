function setButton(buttonText) {
  const bodyElem = document.querySelector('body');
  const buttonElem = document.createElement('button');
  buttonElem.textContent = buttonText;
  bodyElem.innerHTML = buttonElem;
}
