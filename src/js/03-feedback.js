const throttle = require('lodash.throttle');
const formElem = document.querySelector('.feedback-form');
if (localStorage.getItem('message')) {
  formElem.elements.message.value = localStorage.getItem('message');
}
if (localStorage.getItem('email')) {
  formElem.elements.email.value = localStorage.getItem('email');
}
function onFormSaveLocal(e) {
  localStorage.setItem(e.target.name, e.target.value);
}
formElem.addEventListener('input', throttle(onFormSaveLocal, 500));
formElem.addEventListener('submit', onSubmit);
function onSubmit(e) {
  e.preventDefault();
  const setConsoleLog = {};
  const formData = new FormData(e.currentTarget);
  formData.forEach((a, b) => {
    localStorage.removeItem(b);
    setConsoleLog[b] = a;
  });
  console.log(setConsoleLog);
  e.currentTarget.reset();
}
