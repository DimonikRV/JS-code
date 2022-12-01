const arenaElem = document.querySelector('.arena');
function getRangeElems(from, to) {
  const result = [];
  for (let i = from; i <= to; i += 1) {
    result.push(i);
  }
  return result;
}

const getSeatElem = () => {
  const seatElems = getRangeElems(1, 10)
    .map(seatNum => `<div class = 'sector__seat' data-seat-number = '${seatNum}'></div>`)
    .join('');
  return seatElems;
};

const getLineElem = () => {
  const getElems = getSeatElem();
  const lineElems = getRangeElems(1, 10)
    .map(
      sectorLineNum =>
        `<div class = 'sector__line' data-line-number = '${sectorLineNum}'> ${getElems} </div>`,
    )
    .join('');
  return lineElems;
};
const renderArena = () => {
  const getElems = getLineElem();
  const sectorElems = getRangeElems(1, 3)
    .map(
      sectorNum => `<div class = 'sector' data-sector-number = '${sectorNum}'> ${getElems} </div>`,
    )
    .join('');
  arenaElem.innerHTML = sectorElems;
};

renderArena();

const chooseSeat = event => {
  const isSeat = event.target.classList.contains('sector__seat');
  if (!isSeat) return;
  const seatNum = event.target.dataset.seatNumber;
  const lineNum = event.target.closest('.sector__line').dataset.lineNumber;
  const sectorNum = event.target.closest('.sector').dataset.sectorNumber;

  const boardElem = document.querySelector('.board__selected-seat');
  boardElem.textContent = `S ${sectorNum} - L ${lineNum} - S ${seatNum}`;
};
arenaElem.addEventListener('click', chooseSeat);
