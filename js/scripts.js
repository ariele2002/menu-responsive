// constant Menu
const navToggle = document.querySelector('.nav__toggle');
const menu = document.querySelector('.menu');
// constant link active
const menuLink = document.querySelectorAll('.menu__link');

// Make menu visible and insert correct aria-label.
navToggle.addEventListener('click', () => {
    menu.classList.toggle('menu--visible');

    if(menu.classList.contains('menu--visible')) {
        //
        navToggle.setAttribute('aria-label', 'Open Menu');
        navToggle.classList.add('nav__toggle--visible');
    } else {
        navToggle.setAttribute('aria-label', 'Close Menu');
        navToggle.classList.remove('nav__toggle--visible');
    }
});

/* Make link selected */
menu.addEventListener('click', (e) => {
    // filter that you have only clicked on the link
    if(e.target.classList.contains('menu__link')){
        // Remove all menu__link--active class
        menuLink.forEach( item => {
            item.classList.remove('menu__link--active');
        });
        // We added the main-menu__link--active class only to the item that was clicked
        e.target.classList.add('menu__link--active');
    }

});