const items = document.getElementsByClassName('selfIcon');
const bar = document.getElementsByClassName('navList');

    items[0].addEventListener('click', function(){

        bar[0].classList.toggle('is-active'); 
    });
