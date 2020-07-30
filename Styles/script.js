const items = document.getElementsByClassName('selfIcon');
const bar = document.getElementsByClassName('navList');
const op = document.getElementsByClassName('mainNav')

    items[0].addEventListener('click', function(){

        bar[0].classList.toggle('is-active'); 
    });

    items[0].addEventListener('click', function(){

        op[0].classList.toggle('is-active'); 
    });