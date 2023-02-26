const form = document.forms[0];
const checkbox = form.querySelector('.popup-form__check-box');
const submitBtn = form.querySelector('.popup-form__submit');
const phoneInput = form.querySelector('.popup-form__input-phone');
const popupPhone = document.querySelector('.popup');
const closeBtn = popupPhone.querySelector('.popup__btn-close');
const openBtnPhonePopup = document.querySelector('.main__button-check');
const blickedElements = document.querySelectorAll('.blick');
const phoneMask = new IMask(phoneInput, {
    mask: "+{7}(000)000-00-00",
});

phoneInput.addEventListener("input", phoneInputHandler);
submitBtn.addEventListener("click", btnHandler);
checkbox.addEventListener("change", phoneInputHandler);
closeBtn.addEventListener("click", closePopup);
openBtnPhonePopup.addEventListener("click",()=>{
    openPopup(popupPhone);
})

function phoneInputHandler() {
    if (phoneMask.masked.isComplete && checkbox.checked) {
        submitBtn.classList.remove("popup-form__submit_disabled" );
        submitBtn.classList.add("blick");
    } else {
        submitBtn.classList.add("popup-form__submit_disabled");
        submitBtn.classList.remove("blick");
    }
}

function btnHandler(e) {
    e.preventDefault();
    closePopup();
    window.alert('Телефон отправлен!');
}

function closePopup(){
    toddleBlickedElements();
    form.reset();
    popupPhone.classList.add('no-displayed');
    phoneMask.updateValue();
}

function openPopup(popup){
    toddleBlickedElements();
    popup.classList.remove('no-displayed');
    phoneInputHandler();
}

function toddleBlickedElements(){
    blickedElements.forEach(el=>el.classList.toggle('blick'));
}