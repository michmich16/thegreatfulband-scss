document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');

    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    const handleResize = () => {
        if (window.innerWidth >= 768) {
            navList.classList.add('active');
            menuToggle.style.display = 'none';
        } else {
            navList.classList.remove('active');
            menuToggle.style.display = 'block';
        }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize on load
});
