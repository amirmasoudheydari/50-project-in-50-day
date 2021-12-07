const boxs = document.querySelectorAll('.box');

window.addEventListener('scroll', boxanimation)

function boxanimation() {
    
    boxs.forEach(box => {
        let top = box.getBoundingClientRect().top;
        if(window.scrollY > top){
            box.classList.add('active')
        }else{
            box.classList.remove('active')
        }
    });
}