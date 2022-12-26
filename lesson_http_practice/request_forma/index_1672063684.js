const basedUrl = 'https://63a6da56f8f3f6d4ab138405.mockapi.io/api/v1/users'

const isEmail = value =>
  value.includes('@')

  const isValue = value =>{
    if(!value) return;
    return true
  }

  const getRequest = () => fetch(basedUrl)
  .then(response => response.json());

  const postRequest = value => fetch(basedUrl, {
    method: 'POST',
    headers:{'Content-Type':'application/json;charset = utf-8'},
    body: JSON.stringify(value)});

  const registrBtn = document.querySelector('.submit-button');

const onSubmit = (event, value) =>{
  const emailInputElem = document.querySelector('.form-input')
  const nameInputElem = document.querySelector('.')
  postRequest(value)
  .then(()=> getRequest())
  .then(response => alert(response))
}

  registrBtn.addEventListener('click', onSubmit);