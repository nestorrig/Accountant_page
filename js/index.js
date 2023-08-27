const menuMobile = document.getElementById('MobileMenu');
const openMenu = document.getElementById('OpenMenu');
const closeMenu = document.getElementById('CloseMenu');
const buttonsBox = document.getElementById('MenuButtons');
const navItems = document.getElementsByClassName('menu__item__mobile');

for (const item of navItems) {
    item.addEventListener('click', showOrHideMenu);
}
buttonsBox.addEventListener('click', showOrHideMenu);

function showOrHideMenu() {
    openMenu.classList.toggle('inactive')
    closeMenu.classList.toggle('inactive')
    
    const test = openMenu.classList.contains('inactive')
    
    if (test) {
        menuMobile.style.animation = 'showMenu .3s linear both'
        closeMenu.style.animation = 'rotateIcon .3s linear both'
    } else {
        menuMobile.style.animation = 'hideMenu .3s linear both'
        openMenu.style.animation = 'rotateIcon .3s linear both'
    }
}