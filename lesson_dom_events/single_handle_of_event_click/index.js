const singleBtn = document.querySelector('.single-use-btn');
const clicked = () => {
  console.log('clicked');
  singleBtn.removeEventListener('click', clicked);
};
singleBtn.addEventListener('click', clicked);
