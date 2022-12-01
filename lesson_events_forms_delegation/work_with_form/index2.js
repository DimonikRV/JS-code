// так можно получить данные формы - ВАРИАНТ 1:
// eslint-disable-next-line no-undef

const emailInputElem = document.querySelector('#email');
const passwordInputElem = document.querySelector('#password');
const emailErrorTxt = document.querySelector('.error-text_email');
const passwordErrorTxt = document.querySelector('.error-text_password');
const formElem = document.querySelector('.login-form');

const isValue = value => (value ? undefined : 'Requared');
const isEmail = value => (value.includes('@') ? undefined : 'Should be email');
const types = {
  email: [isValue, isEmail],
  password: [isValue],
};
const validator = (typefunction, value) => {
  return types[typefunction]
    .map(validfunc => validfunc(value))
    .filter(textError => textError)
    .join('. ');
};

const emailInputValidator = event => {
  emailErrorTxt.textContent = validator('email', event.target.value);
};
const passwordInputValidator = event => {
  passwordErrorTxt.textContent = validator('password', event.target.value);
};

emailInputElem.addEventListener('input', emailInputValidator);
passwordInputElem.addEventListener('input', passwordInputValidator);

const alertMessage = event => {
  event.preventDefault();
  // const formMessage = [...new FormData(formElem)].reduce((acc, [key, value]) => ({
  //   ...acc,
  //   [key]: value,
  // }), {});
  const formMessage = Object.fromEntries(new FormData(formElem));
  return alert(JSON.stringify(formMessage));
};

formElem.addEventListener('submit', alertMessage);

// const formFields = [...new FormData(formElem)];
// // formFields => [["email", "значение поля email"], ["password", "значение поля password"]]

// const formData = formFields.reduce(function (acc, formField) {
//   const prop = formField[0]; // здесь "name" инпута
//   const value = formField[1]; // здесь "value" инпута
//   // если использовать деструктуризацию, то можно предыдущие 2 строки записать короче
//   // const [prop, value] = formField;
//   return {
//     // используем оператор расширения, чтобы в acc добвить свойства все предыдущих итераций
//     ...acc,
//     // используем вычислимое свойство объекта, чтобы добавить в аккумулятор новое свойство
//     [prop]: value,
//   };
// }, {});

// // более простой формат считывания формы - ВАРИАНТ 2:
// // const formData = Object.fromEntries(new FormData(formElem));
