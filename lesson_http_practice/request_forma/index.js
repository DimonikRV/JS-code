'use strict';

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

const onInput = () => {
  if (formElem.reportValidity()) {
    registrBtn.removeAttribute('disabled');
  }
};

const onSubmit = event => {
  event.preventDefault();
  const formData = Object.fromEntries(new FormData(event.target));

  postRequest(formData)
    .then(() => getRequest())
    .then(({ id, ...rest }) => {
      alert(JSON.stringify(rest));
      formElem.reset();
    });
};

formElem.addEventListener('input', onInput);
formElem.addEventListener('submit', onSubmit);
