let menuBtn = document.querySelector('.menu-btn');
let menuBtnCls = document.querySelector('.menu-btn-cls');
let menu = document.querySelector('.topnav');
function cls(){
    menu.classList.toggle('active');}

menuBtn.addEventListener('click', cls)
menuBtnCls.addEventListener('click', cls)
