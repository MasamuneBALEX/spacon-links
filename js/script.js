window.addEventListener('DOMContentLoaded', () => {
    const mainLinks = document.querySelector('.main_links');
    const mainLogo = document.querySelector('.main_logo');

    setTimeout(() => {
        if (mainLinks) {
            mainLinks.classList.add('main_links-active');
        }
        if (mainLogo) {
            mainLogo.classList.add('main_logo-active');
        }
    }, 100); // Задержка в 1 секунду для обоих элементов
});