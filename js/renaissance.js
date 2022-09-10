const
    burger = document.querySelector('.icon-burger'),
    menu = document.querySelector('.menu'),
    burgerCancel = document.querySelector('.icon-burger-cancel'),
    feedback = document.querySelector('.wrapper-right-modal'),
    call = document.querySelector('.icon-call'),
    chat = document.querySelector('.icon-chat'),
    feedbackCancel = document.querySelector('.icon-modal-cancel'),
    expositionButtonFullDiscription = document.querySelector('.exposition--button-full-discription'),
    expositionDiscriptionPartFour = document.querySelector('.exposition__discription--part-four'),
    otherBrend = document.querySelectorAll('.other-brend'),
    brendButtonFullDiscription = document.querySelector('.brend--button-full-discription'),
    feed = document.querySelector('.feed-active'),
    tel = document.querySelector('.tel-active'),
    telPlaces = document.querySelectorAll('.tel-form');

burger.addEventListener('click', () => {
    menu.style.transform = 'translate(0)';
    menu.style.position = 'fixed';
});
burgerCancel.addEventListener('click', () => {
    menu.style.transform = 'translate(-100vw)';
});

call.addEventListener('click', () => {
    tel.style.display = 'none';
    feedback.style.transform = 'translate(-512px)';
    feed.style.display = 'flex';
    for (let i = 0; i < telPlaces.length; i++) {
        const el = telPlaces[i];
        el.style.display = 'block';
    }
});

chat.addEventListener('click', () => {
    feed.style.display = 'none';
    feedback.style.transform = 'translate(-512px)';
    tel.style.display = 'flex';
    for (let i = 0; i < telPlaces.length; i++) {
        const el = telPlaces[i];
        el.style.display = 'none';
    }
});

feedbackCancel.addEventListener('click', () => {
    feedback.style.transform = 'translate(0px)';
});

expositionButtonFullDiscription.addEventListener('click', () => {
    expositionButtonFullDiscription.style.display = 'none';
    expositionDiscriptionPartFour.style.display = 'block';

});

brendButtonFullDiscription.addEventListener('click', () => {
    brendButtonFullDiscription.style.display = 'none';
    for (let i = 0; i < otherBrend.length; i++) {
        const el = otherBrend[i];
        el.style.display = 'flex';
    }
});