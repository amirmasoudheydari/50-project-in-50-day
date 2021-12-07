'use strict'

class animationPlan {
    constructor(elemen) {
        this.__elem = elemen;
        this.addActive();
    }
    
    // add class active by event click
    addActive(){
        this.__elem.forEach(element => {
            element.onclick = () => {
                // remove class active by all element
                this.removeactive();

                // add class active by element whith cclick
                element.classList.add('active');

                console.log('object');
            }
        });
    }

    // remove class active wisth all div
    removeactive(){
        this.__elem.forEach(element => {
            element.classList.remove('active');
        });
    }


}

const panels = document.querySelectorAll('.panel');
new animationPlan(panels);