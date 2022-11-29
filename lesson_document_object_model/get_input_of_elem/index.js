export function getTitle() {
  const titleText = document.querySelector('.title');
  return titleText.textContent;
}

export function getDescription() {
  const innerText = document.querySelector('.about');
  return innerText.innerText;
}

export function getPlans() {
  const innerText = document.querySelector('.plans');
  return innerText.innerHTML;
}

export function getGoal() {
  const innerText = document.querySelector('.goal');
  return innerText.outerHTML;
}
