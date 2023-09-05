const ham = document.querySelector('.hamburger');
const nav = document.querySelector('.nav_items');
const span = ham.querySelectorAll('span')
const spanarray = Array.from(span);
let a=false;

ham.addEventListener('click', () => {
    nav.classList.toggle('active')
    ham.classList.toggle('active')
  

})