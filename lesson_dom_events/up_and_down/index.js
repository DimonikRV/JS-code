const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');
const eventsList = document.querySelector('.events-list');
const logTarget = (text, color) => {
  eventsList.innerHTML += `<span style="color:${color}; margin-left: 8px">${text}</span>`;
};

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');
divElem.addEventListener('click', logGreyDiv, true);
pElem.addEventListener('click', logGreyP, true);
spanElem.addEventListener('click', logGreySpan, true);

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');
divElem.addEventListener('click', logGreenDiv);
pElem.addEventListener('click', logGreenP);
spanElem.addEventListener('click', logGreenSpan);

const clearButton = document.querySelector('.clear-btn');
const attachHandlers = document.querySelector('.attach-handlers-btn');
const removeHandlers = document.querySelector('.remove-handlers-btn');
clearButton.addEventListener('click', () => {
  eventsList.innerHTML = '';
});
attachHandlers.addEventListener('click', () => {
  divElem.addEventListener('click', logGreyDiv, true);
  pElem.addEventListener('click', logGreyP, true);
  spanElem.addEventListener('click', logGreySpan, true);
  divElem.addEventListener('click', logGreenDiv);
  pElem.addEventListener('click', logGreenP);
  spanElem.addEventListener('click', logGreenSpan);
});
removeHandlers.addEventListener('click', () => {
  divElem.removeEventListener('click', logGreyDiv, true);
  pElem.removeEventListener('click', logGreyP, true);
  spanElem.removeEventListener('click', logGreySpan, true);
  divElem.removeEventListener('click', logGreenDiv);
  pElem.removeEventListener('click', logGreenP);
  spanElem.removeEventListener('click', logGreenSpan);
});
