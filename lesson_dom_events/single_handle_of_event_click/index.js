const singleBtn = document.querySelector('.single-use-btn');
singleBtn.addEventListener('click', () => console.log('clicked'), { once: true });
