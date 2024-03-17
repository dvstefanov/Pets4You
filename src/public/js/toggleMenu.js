const menu = document.getElementById('hamburger-menu');
const menuLinks = document.getElementById('mobile-list');
const backdrop = document.getElementById('backdrop');

menu.addEventListener('click', () => {
    menu.classList.toggle('active');

    if (menu.classList.contains('active')) {
        menuLinks.style.left = '0';
        backdrop.style.display = 'block';
    } else {
        menuLinks.style.left = '-100%';
        backdrop.style.display = 'none';
    }
});

backdrop.addEventListener('click', () => {
    backdrop.style.display = 'none';

    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        menuLinks.style.left = '-100%';
    }
    
});