const brandList = document.querySelectorAll('.brend-item');
const itemWrapper = document.querySelector('.item__wrapper');
const listSlider = document.querySelector('.by-brend__list');
const crs = document.querySelectorAll('.crs');
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
    let he = null;
    let crs = document.querySelectorAll('.crs');
    let ctn = e.target.classList[0];
    if (ctn == "crs") {
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


