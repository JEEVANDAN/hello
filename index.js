const ham = document.querySelector('.hamburger');
const nav = document.querySelector('.nav_items');
const span = ham.querySelectorAll('span');
const hammain = document.querySelector('.ham_main');
const spanarray = Array.from(span);
const body =document.body;
let a=false;
ham.addEventListener('click', () => {
    nav.classList.toggle('active');
    ham.classList.toggle('active');
    body.classList.toggle('active');
    hammain.classList.toggle('fix')
  

});