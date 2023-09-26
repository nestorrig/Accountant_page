const menuMobile = document.getElementById('MobileMenu');
const openMenu = document.getElementById('OpenMenu');
const closeMenu = document.getElementById('CloseMenu');
const buttonsBox = document.getElementById('MenuButtons');
const navItems = document.getElementsByClassName('menu__item__mobile');
const main = document.querySelector('.main')
const footer = document.querySelector('.footer')
const content = document.querySelector('.content-container')

for (const item of navItems) {
    item.addEventListener('click', showOrHideMenu);
}
buttonsBox.addEventListener('click', showOrHideMenu);

function showOrHideMenu() {
    openMenu.classList.toggle('inactive')
    closeMenu.classList.toggle('inactive')
    main.classList.toggle('brightness')
    main.classList.toggle('blockIt')
    footer.classList.toggle('brightness')
    footer.classList.toggle('blockIt')
    
    
    const test = openMenu.classList.contains('inactive')
    
    if (test) {
        content.addEventListener('click', showOrHideMenu);
        menuMobile.style.animation = 'showMenu .3s linear both'
        closeMenu.style.animation = 'rotateIcon .3s linear both'
    } else {
        content.removeEventListener('click', showOrHideMenu);
        menuMobile.style.animation = 'hideMenu .3s linear both'
        openMenu.style.animation = 'rotateIcon .3s linear both'
    }
}