export function getSection(num) {
  const spanElems = [...document.querySelectorAll('span')];
  const requiredNum = spanElems.find(elem => Number(elem.dataset.number) === num);
  const requiredParent = requiredNum.closest('.box');
  return requiredParent.dataset.section;
}
