'use strict'

let next = document.getElementById('next')
let prev = document.getElementById('prev')
let progress = document.getElementById('progrress')
let circle = document.querySelectorAll('.circel')
let count = 0;


next.addEventListener('click',() => {
    ++count;
    prev.removeAttribute('disabled');
    if(count == 3){
        count = 3;
        next.setAttribute('disabled','');
        prev.removeAttribute('disabled');

    }
    // add class active to items
    circle[count].classList.add('active');

    // action progesss bar
    progress.style.width = (count / 3) * 100 +'%';
})

prev.addEventListener('click',() => {
    --count;
    next.removeAttribute('disabled');
    if(count == 0){
        count = 0;
        prev.setAttribute('disabled','');
        next.removeAttribute('disabled');
        
    }
    
    // add class active to items
    circle[count + 1].classList.remove('active');
    
    // action progesss bar
    progress.style.width = (count / 3) * 100 +'%';
    console.log((count / 3) * 100 +'%');
})