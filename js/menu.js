const
    burger = document.querySelector('.icon-burger'),
    menu = document.querySelector('.menu'),
    burgerCancel = document.querySelector('.icon-burger-cancel'),
    navigator = document.querySelector('.exposition__group-items');
    console.log(navigator);
burger.addEventListener('click', () => {
    menu.style.transform = 'translate(0)';
});
burgerCancel.addEventListener('click', () => {
    menu.style.transform = 'translate(-100vw)';
});