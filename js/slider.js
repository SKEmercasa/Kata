const brandList = document.querySelectorAll('.brend-item');
const itemWrapper = document.querySelector('.item__wrapper');
const crs = document.querySelectorAll('.crs');
const list = document.querySelector('.by-brend__list');
const Slider = (el) => {

    for (let i = 0; i < el.length; i++) {
        let crs = document.createElement('img');
        if (i == 0) {
            crs.className = `crs crs${i} crs--active`;
        } else {
            crs.className = `crs crs${i}`;
        }
        itemWrapper.append(crs);
    }
}
Slider(brandList);

itemWrapper.addEventListener('click', e => {
    let crs = document.querySelectorAll('.crs');
    let ctn = e.target.classList[0];
    list.style.transform = 'translate(-250px)';
})


