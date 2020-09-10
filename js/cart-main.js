
document.querySelector('.wrapper').classList.add('loaded');


document.addEventListener('click', event => {
    let target = event.target;
    if (!(target === cartList || cartList.contains(target)) && !(target === cartArrow) && !(target === cartBtn || cartBtn.contains(target)) && !(cartList.classList.contains('hidden'))) {
        cartList.classList.add('hidden');
        cartArrow.classList.add('hidden');
    }
    if (!(target === browseList || browseList.contains(target)) && !(target === browseArrow) && !(target === browseBtn || browseBtn.contains(target)) && !(browseList.classList.contains('hidden'))) {
        browseList.classList.add('hidden');
        browseArrow.classList.add('hidden');
        browseArrowUp.classList.add('hidden');
        browseArrowDown.classList.remove('hidden');
    }
    if (!(target === accountList || accountList.contains(target)) && !(target === accountArrow) && !(target === accountBtn || accountBtn.contains(target)) && !(accountList.classList.contains('hidden'))) {
        accountList.classList.add('hidden');
        accountArrow.classList.add('hidden');
        accountArrowUp.classList.add('hidden');
        accountArrowDown.classList.remove('hidden');
    }
    for (let i = 1; i < menuBtns.length; i++) {
        if (!(target === menuLists[i-1] || menuLists[i-1].contains(target)) && !(target === menuArrows[i-1]) && !(target === menuBtns[i] || menuBtns[i].contains(target)) && !(menuLists[i-1].classList.contains('hidden'))) {
            menuLists[i-1].classList.add('hidden');
            menuArrows[i-1].classList.add('hidden');
        }
    }
})



function toggle(button, element) {
    button.addEventListener('click', () => {
        element.classList.toggle('hidden');
    })
}


//обзор
let browseBtn = document.querySelector('.browse-btn');
let browseList = document.querySelector('.browse-list');
let browseArrow = document.querySelector('.browse-list__arrow');
let browseArrowDown = document.querySelector('.browse-list__arrow-down');
let browseArrowUp = document.querySelector('.browse-list__arrow-up');

toggle(browseBtn, browseList);
toggle(browseBtn, browseArrow);
toggle(browseBtn, browseArrowDown);
toggle(browseBtn, browseArrowUp);


//корзина
let cartBtn = document.querySelector('.cart-btn');
let cartList = document.querySelector('.cart-list');
let cartArrow = document.querySelector('.cart-list__arrow');

toggle(cartBtn, cartList);
toggle(cartBtn, cartArrow);


//аккаунт
let accountBtn = document.querySelector('.account-btn');
let accountList = document.querySelector('.account-list');
let accountArrow = document.querySelector('.account-list__arrow');
let accountArrowDown = document.querySelector('.account-list__arrow-down');
let accountArrowUp = document.querySelector('.account-list__arrow-up');

toggle(accountBtn, accountList);
toggle(accountBtn, accountArrow);
toggle(accountBtn, accountArrowDown);
toggle(accountBtn, accountArrowUp);


//меню
let menuBtns = document.querySelectorAll('.nav__link');
let menuLists = document.querySelectorAll('.nav-submenu');
let menuArrows = document.querySelectorAll('.nav__arrow');

for (let i = 1; i < menuBtns.length; i++) {
    toggle(menuBtns[i], menuLists[i-1]);
    toggle(menuBtns[i], menuArrows[i-1]);
}








let countryArrowsDown = document.querySelectorAll('.settings__arrow-down');
let countryArrowsUp = document.querySelectorAll('.settings__arrow-up');
let countryMainBtns = document.querySelectorAll('.settings__button-main');
let countryLists = document.querySelectorAll('.country__hidden-text');

for( let i = 0; i < countryMainBtns.length; i++){
    toggle(countryMainBtns[i], countryLists[i]);
    toggle(countryMainBtns[i], countryArrowsDown[i]);
    toggle(countryMainBtns[i], countryArrowsUp[i]);
}

document.addEventListener('click', event => {
    let target = event.target;
    for (let i = 0; i < countryMainBtns.length; i++) {
        if (!(target === countryMainBtns[i] || countryMainBtns[i].contains(target)) && !(countryLists[i].classList.contains('hidden'))) {
            countryLists[i].classList.add('hidden');
            countryArrowsUp[i].classList.add('hidden');
            countryArrowsDown[i].classList.remove('hidden');
        }
    }
})



//country
let CountriesBtns = document.querySelectorAll('.setting-country-btn');
let Countries = document.querySelectorAll('.setting-country');
let choosedCountry = document.querySelector('.setting-country-choose');

for (let i = 0; i < CountriesBtns.length; i++) {
    CountriesBtns[i].addEventListener('click', () => {
        choosedCountry.textContent = Countries[i].textContent;
    })
}