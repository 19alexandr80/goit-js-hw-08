const throttle = require('lodash.throttle');
const formElem = document.querySelector('.feedback-form');
if (localStorage.getItem('message')) {
  formElem.elements.message.value = localStorage.getItem('message');
}
if (localStorage.getItem('email')) {
  formElem.elements.email.value = localStorage.getItem('email');
}
const throttieOnformDa = throttle(formDa, 500);
function formDa(e) {
  const message = e.currentTarget.elements.message.value;
  const email = e.currentTarget.elements.email.value;
  localStorage.setItem('message', message);
  localStorage.setItem('email', email);
}
formElem.addEventListener('input', throttieOnformDa);
formElem.addEventListener('submit', onSubmit);
function onSubmit(e) {
  e.preventDefault();
  localStorage.removeItem('message');
  localStorage.removeItem('email');
  const consoleLog = {};
  const formData = new FormData(e.currentTarget);
  formData.forEach((a, b) => {
    consoleLog[b] = a;
  });
  console.log(consoleLog);
  formElem.elements.email.value = '';
  formElem.elements.message.value = '';
}
