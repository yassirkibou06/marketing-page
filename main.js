// JavaScript to toggle dropdown menus (for larger screens)
const companyBtn = document.getElementById('companyBtn');
const companyMenu = document.getElementById('companyMenu');
const servicesMenu = document.getElementById('servicesMenu');

companyBtn.addEventListener('click', () => {
    companyMenu.classList.toggle('hidden');
});

// JavaScript to toggle mobile menu
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const companyMenuMobile = document.getElementById('companyMenuMobile');
const servicesMenuMobile = document.getElementById('servicesMenuMobile');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

const companyBtnMobile = document.getElementById('companyBtnMobile');
companyBtnMobile.addEventListener('click', () => {
    companyMenuMobile.classList.toggle('hidden');
});

const servicesBtnMobile = document.getElementById('servicesBtnMobile');
servicesBtnMobile.addEventListener('click', () => {
    servicesMenuMobile.classList.toggle('hidden');
});