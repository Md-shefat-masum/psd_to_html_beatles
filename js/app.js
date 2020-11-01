const hamburger = document.querySelector('.hamburger');
const navAllLinks = document.querySelector('.nav-all-links');

hamburger.addEventListener('click',()=>{
    console.log('clicked');
    navAllLinks.classList.toggle('open')
})