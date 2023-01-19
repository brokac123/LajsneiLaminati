
let openMenu = document.querySelector('.icon-bar');
    let closeMenu = document.querySelector('.close-nav');
    let navMenu = document.querySelector('.navbar');
    

    openMenu.addEventListener('click',function(){
    navMenu.classList.add('nav-scale');
    document.querySelector('body').classList.add('overflow-none');});

    closeMenu.addEventListener('click',function(){
    navMenu.classList.remove('nav-scale');
    document.querySelector('body').classList.remove('overflow-none');});
    