const menuBtn = document.querySelector('.menu-button');
console.log(menuBtn);
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle("open");
    let navList = document.querySelector('#navList');
    let showHide = document.querySelector('.showHide');
    if(showHide){
        navList.classList.remove('showHide');
    } else{
        navList.classList.add('showHide');
    }
});