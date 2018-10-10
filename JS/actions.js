let mobileOnly = window.matchMedia('(max-width: 630px)');
let mobileNav = document.getElementById('mobileNav');
let open = document.getElementById('open');
let close = document.getElementById('close');

mobileOnly.addListener(screenSize);
open.addEventListener('click', openNav);
close.addEventListener('click', closeNav);

function screenSize() {
    if (mobileOnly.matches) {
        openNav();
        closeNav();
    } else {
        open.style.display = 'none'
    }
}

function openNav() {
    mobileNav.style.width = '100%';
};

function closeNav() {
    mobileNav.style.width = '0';
    open.style.display = 'block';
};