document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const navMenu = document.getElementById('nav-menu');
    const body = document.body;

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('open');
        navMenu.classList.toggle('open');
        body.classList.toggle('noscroll');
    });
});
