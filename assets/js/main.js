document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const navMenu = document.getElementById('nav-menu');
    const body = document.body;

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('open'); /*burger menu trigger*/
        navMenu.classList.toggle('open'); /*open nav menu*/
        body.classList.toggle('noscroll'); /*block scrolling*/
    });
});
