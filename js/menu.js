const
    burger = document.querySelector('.icon-burger'),
    menu = document.querySelector('.menu'),
    burgerCancel = document.querySelector('.icon-burger-cancel'),
    feedback = document.querySelector('.wrapper-right-modal'),
    call = document.querySelector('.icon-call'),
    callCancel = document.querySelector('.icon-modal-cancel');


burger.addEventListener('click', () => {
    menu.style.transform = 'translate(0)';
    menu.style.position = 'fixed';
});
burgerCancel.addEventListener('click', () => {
    menu.style.transform = 'translate(-100vw)';
});

call.addEventListener('click', () => {
    feedback.style.transform = 'translate(-512px)';
});

callCancel.addEventListener('click', () => {
    feedback.style.transform = 'translate(0px)';
});