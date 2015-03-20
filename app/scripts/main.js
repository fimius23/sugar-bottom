(function() {
    'use strict';

    var querySelector = document.querySelector.bind(document),
        navdrawerContainer = querySelector('.navdrawer-container'),
        body = document.body,
        appbarElement = querySelector('.app-bar'),
        main = querySelector('main'),
        hamburger = querySelector('.hamburglar'),
        hamburgerIsClosed = true;

    function closeMenu() {
        body.classList.remove('open');
        appbarElement.classList.remove('open');
        navdrawerContainer.classList.remove('open');
    }

    function toggleMenu() {
        body.classList.toggle('open');
        appbarElement.classList.toggle('open');
        navdrawerContainer.classList.toggle('open');
        navdrawerContainer.classList.add('opened');
    }

    function burgerTime() {
        if (hamburgerIsClosed) {
            hamburger.classList.remove('is-open');
            hamburger.classList.add('is-closed');
            hamburgerIsClosed = false;
        } else {
            hamburger.classList.remove('is-closed');
            hamburger.classList.add('is-open');
            hamburgerIsClosed = true;
        }
    }

    main.addEventListener('click', closeMenu);
    navdrawerContainer.addEventListener('click', function(event) {
        if (event.target.nodeName === 'A' || event.target.nodeName === 'LI') {
            closeMenu();
            burgerTime();
        }
    });
    hamburger.addEventListener('click', burgerTime);
    hamburger.addEventListener('click', toggleMenu);
})();
