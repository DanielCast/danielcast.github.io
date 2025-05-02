let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
};

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
};

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
};


const divHeader = document.getElementById('header')

divHeader.addEventListener('click', function(e)  {
  console.log(e.target)
  // if(e.target.contains.getElementById('hamburger-button-id')) {
  //   console.log('Button was clicked')
  // }
  if(e.target.classList.contains('hamburger-button') || e.target.classList.contains('hamburger-line')) {
    document.querySelector('.mobile-menu').classList.toggle('active');
  }
});


// -------------> TODO Implement the hamburger menu for the mobile menu also in Works <--------------
