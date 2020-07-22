'use strict';

window.addEventListener('DOMContentLoaded', () => {


    const menuTop = document.querySelectorAll('.topnav'),
        allAmenu = document.querySelector('.icon');


    function showA() {
        menuTop.forEach(item => {
            item.addEventListener('click', (event) => {
                const target = event.target;

                if (target == allAmenu) {
                    item.classList.toggle('responsive');
                } 
            });

        });


    }

    showA();





});