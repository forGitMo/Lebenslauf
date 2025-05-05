const items = document.getElementsByClassName('selfIcon');
const bar = document.getElementsByClassName('navList');
const op = document.getElementsByClassName('mainNav')

    items[0].addEventListener('click', function(){

        bar[0].classList.toggle('on'); 
    });

    items[0].addEventListener('click', function(){

        op[0].classList.toggle('on'); 
    });




    let current = 0;
    const slides = document.querySelectorAll('.slide');
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('on', i === index);
      });
    }
  
    function nextSlide() {
      current = (current + 1 < slides.length) ? current + 1 : current;
      showSlide(current);
    }
  
    function prevSlide() {
      current = (current - 1 >= 0) ? current - 1 : current;
      showSlide(current);
    }
  
    // Initial anzeigen
    showSlide(current);