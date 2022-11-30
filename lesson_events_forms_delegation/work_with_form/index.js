const emailInputElem = document.querySelector('#email');
const passwordInputElem = document.querySelector('#password');
const emailErrorTxt = document.querySelector('.error-text_email');
const passwordErrorTxt = document.querySelector('.error-text_password');
const formElem = document.querySelector('.login-form');

const isValue = value => (value ? undefined : 'Required');
const isEmail = value => (value.includes('@') ? undefined : 'Should be an email');
const validatingKey = {
  email: [isValue, isEmail],
  password: [isValue],
};
const validator = (type, value) => {
  const validatTxt = validatingKey[type];
  return validatTxt
    .map(validtype => validtype(value))
    .filter(textError => textError)
    .join(', ');
  // passwordErrorTxt.textContent = validatTxt;
};
const validatorEmail = event => {
  const errorTxt = validator('email', event.target.value);
  emailErrorTxt.textContent = errorTxt;
};
const validatorPassword = event => {
  const errorTxt = validator('password', event.target.value);
  passwordErrorTxt.textContent = errorTxt;
};

emailInputElem.addEventListener('input', validatorEmail);
passwordInputElem.addEventListener('input', validatorPassword);

const alertText = event => {
  event.preventDefault();
  const formFields = [...new FormData(formElem)].reduce(
    (acc, [prop, value]) => ({
      ...acc,
      [prop]: value,
    }),
    {},
  );
  return alert(JSON.stringify(formFields));
};
formElem.addEventListener('submit', alertText);
