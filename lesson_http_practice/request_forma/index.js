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
    registrBtn.removeAttribute('disabled');
  }
};

const onSubmit = event => {
  event.preventDefault();
  const formData = Object.fromEntries(new FormData(event.target));
  formElem.reset();
  postRequest(formData)
    .then(() => getRequest())
    .then(response =>
      JSON.stringify(
        Object.entries(response).reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {}),
      ),
    )
    .then(userData => alert(userData));
};

formElem.addEventListener('submit', onSubmit);
formElem.addEventListener('input', onInput);

// response.reduce((acc, [email, name, password]) => ({ ...acc, email, name, password }), {}),
