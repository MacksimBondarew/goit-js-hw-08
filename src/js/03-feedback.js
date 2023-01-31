import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const email = document.querySelector('[name = "email"]');
const message = document.querySelector('[name = "message"]');

form.addEventListener('submit', submitData);
form.addEventListener('input', throttle(onInputFormLocalSet, 500));
// отримуємо значення об'єктом і переводимо їх в формат json
function onInputFormLocalSet() {
    const formdata = {
        email: email.value,
        message: message.value,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formdata))
}
//Відправляємо форму на базу даних і вона просто чиститься
function submitData(e) {
    e.preventDefault();
    console.log(localStorage.getItem(STORAGE_KEY));
    localStorage.removeItem(STORAGE_KEY);
    this.reset();
}
//Бри обнові сторінки залишаємо дані які були введені до цього, але не нажаті. Якщо уберемо назад не переведемо 
// в формат JS то в полях буде андейфайенд і за це буде айайай  
function onInpuFormGetLocalSet(){
    const onInputFormLocalSet = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (onInputFormLocalSet !== null) {
        email.value = onInputFormLocalSet.email;
        message.value = onInputFormLocalSet.message;
    }
}

onInpuFormGetLocalSet();


