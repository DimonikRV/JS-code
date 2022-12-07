const counterElem = document.querySelector('.counter');
const counterCountElem = document.querySelector('.counter-value');

const onCount = event => {
  const isButton = event.target.classList.contains('counter-button');
  if (!isButton) return;
  const action = event.target.dataset.action;
  const oldValue = Number(counterCountElem.textContent);
  const newValue = action === 'decrease' ? oldValue - 1 : oldValue + 1;
  counterCountElem.textContent = newValue;
  localStorage.setItem('counterValue', newValue);
};

counterElem.addEventListener('click', onCount);

const onStorage = event => {
  counterCountElem.textContent = event.newValue;
};

window.addEventListener('storage', onStorage);

const onLoader = () => {
  counterCountElem.textContent = localStorage.getItem('counterValue');
};

document.addEventListener('DOMContentLoaded', onLoader);
