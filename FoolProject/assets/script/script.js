const menu = document.querySelector('#menu');



menu.addEventListener('click', (event) => {
    let x = document.getElementById('myTopNav');
    if (x.className === 'topnav') {
        x.className += ' responsive';
         } else {
             x.className = 'topnav';
         }
});

