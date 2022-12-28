import { getRequest, fetchReposList } from './gateways.js';
import { renderUser } from './user.js';
import { renderReposList, cleareList } from './repo.js';
import { toggleSpiner } from './spiner.js';

const formBtnElem = document.querySelector('.name-form__btn');
const inputElem = document.querySelector('.name-form__input');
const defaultUser = {
  avatar_url: 'https://avatars3.githubusercontent.com/u10001',
  name: '',
  location: '',
};

renderUser(defaultUser);

const onClickRequest = () => {
  cleareList();
  const userName = inputElem.value;
  getRequest(userName)
    .then(userData => {
      renderUser(userData);
      toggleSpiner();
      return userData.repos_url;
    })
    .then(url => fetchReposList(url))
    .then(reposList => renderReposList(reposList))
    .catch(error => alert(error.message))
    .finally(() => toggleSpiner());
};

formBtnElem.addEventListener('click', onClickRequest);
