export function manageClasses() {
  const list = document.querySelector('.list');
  const listElemOne = document.querySelector('.one');
  listElemOne.classList.add('selected');
  const listElemTwo = document.querySelector('.two');
  listElemTwo.classList.remove('selected');
  const listElemThree = document.querySelector('.three');
  listElemThree.classList.toggle('three_done');
  const listElemFour = document.querySelector('.four');
  const isSomeClass = [...listElemFour.classList].includes('some-class');
  if (isSomeClass) {
    listElemFour.classList.add('another-class');
  }
}
manageClasses();
