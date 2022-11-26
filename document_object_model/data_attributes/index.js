export function squaredNumbers() {
  [...document.querySelectorAll('.number')].map(el => {
    const num = el.dataset;
    const squaredNum = num.number ** 2;
    el.dataset.squarednumber = squaredNum;
    return el;
  });
}
