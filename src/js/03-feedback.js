import throttle from 'lodash.throttle';

const FORM_DATA_KEY = 'feedback-form-state';
const userForm = document.querySelector('.feedback-form');

let formData = JSON.parse(localStorage.getItem(FORM_DATA_KEY));
userForm.addEventListener('input', throttle(storeInfo, 500));
userForm.addEventListener('submit', formSubmit);

saveOnReload();

function storeInfo() {
  let object = {
    email: userForm.elements.email.value,
    message: userForm.elements.message.value,
  };
  localStorage.setItem(FORM_DATA_KEY, JSON.stringify(object));
}

function saveOnReload() {
  if (formData) {
    userForm.elements.email.value = formData.email || '';
    userForm.elements.message.value = formData.message || '';
  }
}

function formSubmit(event) {
  event.preventDefault();
  let lastValues = {
    email: userForm.elements.email.value,
    message: userForm.elements.message.value,
  };
  console.log(lastValues);
  localStorage.removeItem(FORM_DATA_KEY);
  userForm.reset();
}
