const hamburger = document.querySelector('.hamburgers');
const navAllLinks = document.querySelector('.nav-all-links');

console.log(hamburger, navAllLinks);

hamburger.addEventListener('click', () => {
    console.log('clicked');
    navAllLinks.classList.toggle('open')
})