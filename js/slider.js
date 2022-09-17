const brandList = document.querySelectorAll('.brend-item');
const itemWrapper = document.querySelector('.item__wrapper');
const listSlider = document.querySelector('.by-brend__list');
const Slider = (el, sl) => {

    for (let i = 0; i < el.length; i++) {
        let crs = document.createElement('img');
        if (i == 0) {
            crs.className = `crs${sl.className} crs--active`;
            console.log(sl.className);
        } else {
            crs.className = `crs${sl.className}`;
        }
        sl.append(crs);
    }
}
Slider(brandList, itemWrapper);

itemWrapper.addEventListener('click', e => {
    let he = null;
    let crs = document.querySelectorAll(`.crsitem__wrapper`);
    let ctn = e.target.classList[0];
    if (ctn == "crsitem__wrapper") {
        for (let i = 0; i < crs.length; i++) {
            let is = crs[i].classList.contains("crs--active");
            if (e.target == crs[i]) {
                he = i;
            }
            if (is == true) {
                crs[i].classList.remove("crs--active");
            }
        }
        listSlider.style.transform = `translate(calc(-250px * ${he}))`;
        e.target.classList.add("crs--active");
    }
})


