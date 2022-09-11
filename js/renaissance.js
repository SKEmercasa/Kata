const
    burger = document.querySelector('.icon-burger'),
    menu = document.querySelector('.menu'),
    burgerCancel = document.querySelector('.icon-burger-cancel'),
    feedback = document.querySelector('.wrapper-right-modal'),
    call = document.querySelectorAll('.icon-call'),
    caller = document.querySelector('.callJs'),
    chat = document.querySelectorAll('.icon-chat'),
    chater = document.querySelector('.chatJs'),
    feedbackCancel = document.querySelector('.icon-modal-cancel'),
    expositionButtonFullDiscription = document.querySelector('.exposition--button-full-discription'),
    expositionDiscriptionPartFour = document.querySelector('.exposition__discription--part-four'),
    otherBrend = document.querySelectorAll('.other-brend'),
    brendButtonFullDiscription = document.querySelector('.brend--button-full-discription'),
    feed = document.querySelector('.feed-active'),
    tel = document.querySelector('.tel-active'),
    telPlaces = document.querySelectorAll('.tel-form'),
    blurModal = document.querySelector('.blur-modal'),
    h = window.innerWidth,
    bgModal = document.querySelector('.wrapper-right-main');
console.log(h);
bgModal.addEventListener('click', e => {
    if (e) {
        if (e.target != burger) {
            if (e.target != caller) {
                if (e.target != chater) {
                    if (h < 1440) {
                        menu.style.transform = 'translate(-100vw)';
                    } else {
                        menu.style.opacity = '1';
                    }
                    bgModal.style.opacity = '1';
                    feedback.style.transform = 'translate(0px)';

                }
            }
        }

    }
})
burger.addEventListener('click', () => {
    menu.style.transform = 'translate(0)';
    menu.style.position = 'fixed';
    bgModal.style.opacity = '0.1';
    feedback.style.transform = 'translate(0px)';
});

burgerCancel.addEventListener('click', () => {
    menu.style.transform = 'translate(-100vw)';
    bgModal.style.opacity = '1';
    if (h >= 1440) {
        menu.style.opacity = '1';
    }
});

for (let i = 0; i < chat.length; i++) {
    const el = chat[i];
    el.addEventListener('click', () => {
        tel.style.display = 'none';
        feedback.style.transform = 'translate(-512px)';
        feed.style.display = 'flex';
        for (let i = 0; i < telPlaces.length; i++) {
            const el = telPlaces[i];
            el.style.display = 'block';
            bgModal.style.opacity = '0.1';
            if (h < 1440) {
                menu.style.transform = 'translate(-100vw)';
            } else {
                menu.style.opacity = '0.1';
            }
        }
    });
}

for (let i = 0; i < call.length; i++) {
    const el = call[i];
    el.addEventListener('click', () => {
        feed.style.display = 'none';
        feedback.style.transform = 'translate(-512px)';
        tel.style.display = 'flex';
        for (let i = 0; i < telPlaces.length; i++) {
            const el = telPlaces[i];
            el.style.display = 'none';
            bgModal.style.opacity = '0.1';
            if (h < 1440) {
                menu.style.transform = 'translate(-100vw)';
            } else {
                menu.style.opacity = '0.1';
            }
        }
    });
}

feedbackCancel.addEventListener('click', () => {
    feedback.style.transform = 'translate(0px)';
    bgModal.style.opacity = '1';
    if (h >= 1440) {
        menu.style.opacity = '1';
    }
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