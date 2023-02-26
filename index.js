const checkbox = document.querySelector('.popup-form__check-box');
const submitButton = document.querySelector('.popup-form__submit');
const phone = document.querySelector('.popup-form__input-phone');

let isNumberValid = false;
let isChecked = true;
function inputPhone(e, phone) {

    function stop(evt) {
        evt.preventDefault();
    }
    let key = e.key, v = phone.value; not = key.replace(/([0-9])/, 1)

    if (not == 1 || 'Backspace' === not) {
        if ('Backspace' != not) {
            if (v.length < 3 || v === '') { phone.value = '+7(' }
            if (v.length === 6) { phone.value = v + ')' }
            if (v.length === 10) { phone.value = v + '-' }
            if (v.length === 13) { phone.value = v + '-' }
        }
    } else { stop(e) }
    console.log('v.length', v.length);
    if (v.length >= 15) {
        console.log('<< true >>')
        isNumberValid = true;
    } else {
        console.log('<<false>>')
        isNumberValid = false;
    }
    checkFormValidity();
}

const checkFormValidity = function () {
    console.log(isNumberValid, isChecked)
    if (isNumberValid && isChecked){
        submitButton.removeAttribute('disabled');
    } else {
        submitButton.setAttribute('disabled', true);
    }
}

phone.onkeydown = function (e) {
    inputPhone(e, phone);
}

checkFormValidity();

