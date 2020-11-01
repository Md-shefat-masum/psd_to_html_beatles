const hamburger = document.querySelector('.hamburgers');
const navAllLinks = document.querySelector('.nav-all-links');

hamburger.addEventListener('click', () => {
    navAllLinks.classList.toggle('open')
})