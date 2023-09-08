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


const summaries = document.querySelectorAll('.summary');
const det=document.querySelectorAll('.first_question')

        summaries.forEach(summary => {
            summary.addEventListener('click', () => {
                const details = summary.parentElement;
                const detai = details.parentElement;
                detai.classList.toggle('open'); 
            });
        });
  





