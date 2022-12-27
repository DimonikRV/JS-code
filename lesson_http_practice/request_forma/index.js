const basedUrl = 'https://63a6da56f8f3f6d4ab138405.mockapi.io/api/v1/users';

const getRequest = () => fetch(basedUrl).then(response => response.json());

const postRequest = value =>
  fetch(basedUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset = utf-8' },
    body: JSON.stringify(value),
  });
const formElem = document.querySelector('.login-form');
const registrBtn = document.querySelector('.submit-button');
const onInput = event => {
  const isValid = formElem.reportValidity();
  if (isValid) {
    registrBtn.setAttribute('disabled', false);
  }
};

const onSubmit = event => {
  const formData = JSON.stringify(Object.fromEntries(new FormData(formElem)));

  postRequest(formData)
    .then(() => getRequest())
    .then(response => response.json())
    .then(response => alert(response));
};

registrBtn.addEventListener('submit', onSubmit);
formElem.addEventListener('input', onInput);
