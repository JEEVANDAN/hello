const ham = document.querySelector('.hamburger');
const nav = document.querySelector('.nav_items');
const span = ham.querySelectorAll('span');
const hammain = document.querySelector('.ham_main');
 
const body =document.body;
let a=false;
ham.addEventListener('click', () => {
    nav.classList.toggle('active');
    ham.classList.toggle('active');
    body.classList.toggle('active');
    hammain.classList.toggle('fix')
  

});


const ico =document.querySelector('.fa-solid');
const first =document.querySelector('.first_question');
const answer =document.querySelector('.first_question_answer');

ico.addEventListener('click',()=>{
    first.classList.toggle('open')
    answer .classList.toggle('open')
})
