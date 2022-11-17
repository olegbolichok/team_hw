(() => {
    const menuBtnRef = document.querySelector('[data-menu-open]');
    const mobileMenuRef = document.querySelector('[data-menu]');
    const closeModalBtn = document.querySelector('[data-menu-close]');

    menuBtnRef.addEventListener('click', () => {
        const expanded =
            menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

        menuBtnRef.setAttribute('aria-expanded', !expanded);
        mobileMenuRef.classList.toggle('is-open');
    });
    closeModalBtn.addEventListener('click', () => {
        mobileMenuRef.classList.toggle('is-open');
    });
})();
