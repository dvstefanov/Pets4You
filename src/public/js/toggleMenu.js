const menu = document.getElementById('hamburger-menu');
const menuLinks = document.getElementById('mobile-list');
const backdrop = document.getElementById('backdrop');

menu.addEventListener('click', () => {
    menu.classList.toggle('active');

    if (menu.classList.contains('active')) {
        menuLinks.style.opacity = '1';
        menuLinks.style.pointerEvents = 'all';
        backdrop.style.display = 'block';
    } else {
        menuLinks.style.opacity = '0';
        backdrop.style.display = 'none';
    }
});

backdrop.addEventListener('click', () => {
    backdrop.style.display = 'none';

    if (menu.classList.contains('active')) {
        menuLinks.style.opacity = '0';
        menuLinks.style.pointerEvents = 'none';
        menu.classList.remove('active');
    }
    
});