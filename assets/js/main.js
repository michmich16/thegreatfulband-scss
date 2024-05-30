document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const navMenu = document.getElementById('nav-menu');
    const body = document.body;
    const aboutButton = document.getElementById('aboutButton');
    const mainContent = document.querySelector('main');

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('open'); /*burger menu trigger*/
        navMenu.classList.toggle('open'); /*open nav menu*/
        body.classList.toggle('noscroll'); /*block scrolling*/
    });

    aboutButton.addEventListener('click', () => {
        mainContent.innerHTML = ''; // Clear the main content
        menuBtn.classList.remove('open'); // Close the burger menu
        navMenu.classList.remove('open'); // Close the nav menu
        body.classList.remove('noscroll'); // Allow scrolling again
    });

    homeButton.addEventListener('click',() =>{
        window.location.reload();
        menuBtn.classList.remove('open'); // Close the burger menu
        navMenu.classList.remove('open'); // Close the nav menu
        body.classList.remove('noscroll'); // Allow scrolling again

    })
});
