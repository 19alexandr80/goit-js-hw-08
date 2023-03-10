const throttle = require('lodash.throttle');
const formElem = document.querySelector('.feedback-form');
const objFormLocal = {};
if (localStorage.getItem('feedback-form-state')) {
  const saveForm = JSON.parse(localStorage.getItem('feedback-form-state'));
  for (const key in saveForm) {
    objFormLocal[key] = saveForm[key];
    formElem.elements[key].value = saveForm[key];
  }
}
// const objFormLocal = {};
function onFormSaveLocal(e) {
  objFormLocal[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(objFormLocal));
}
formElem.addEventListener('input', throttle(onFormSaveLocal, 500));
formElem.addEventListener('submit', onSubmit);
function onSubmit(e) {
  e.preventDefault();
  const setConsoleLog = {};
  const formData = new FormData(e.currentTarget);
  formData.forEach((a, b) => {
    setConsoleLog[b] = a;
  });
  console.log(setConsoleLog);
  localStorage.removeItem('feedback-form-state');
  e.currentTarget.reset();
  for (const key in objFormLocal) {
    delete objFormLocal[key];
  }
}
