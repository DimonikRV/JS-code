import { getRequest, fetchReposList } from './src/scripts/gateways.js';
import { renderUser } from './src/scripts/user.js';
import { renderReposList, cleareList } from './src/scripts/repo.js';
import { toggleSpiner } from './src/scripts/spiner.js';

const formBtnElem = document.querySelector('.name-form__btn');
const inputElem = document.querySelector('.name-form__input');

const defaultUser = {
  avatar_url: 'https://avatars3.githubusercontent.com/u10001',
  name: '',
  location: '',
};

renderUser(defaultUser);

const onClickRequest = async () => {
  cleareList();
  toggleSpiner();
  const userName = inputElem.value;
  try {
    const userData = await getRequest(userName);
    renderUser(userData);
    const reposList = await fetchReposList(userData.repos_url);
    renderReposList(reposList);
  } catch (error) {
    alert(error.message);
  } finally {
    toggleSpiner();
  }
};

formBtnElem.addEventListener('click', onClickRequest);
