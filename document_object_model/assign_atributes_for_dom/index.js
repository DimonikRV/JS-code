export function finishForm() {
  const loginformElem = document.querySelector('.login-form');
  const textInput = document.createElement('input');
  textInput.setAttribute('type', 'text');
  textInput.setAttribute('name', 'login');
  const passwordInput = document.querySelector("input[type = 'text']");
  console.log(passwordInput);
  passwordInput.setAttribute('type', 'password');
  loginformElem.prepend(textInput);
}
finishForm();
