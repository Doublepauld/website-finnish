//executing function showSlides
var slideIndex = 1;
showSlides(slideIndex);


//creates function slusSlides
function plusSlides(n) {
  showSlides(slideIndex += n);
  
}

//creates function currentSlide
function currentSlide(n) {
  showSlides(slideIndex = n);

}

//creates function showSlides
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slideshow-image");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Automatic Slideshow
var interval = setInterval(function() {
  plusSlides(1);
}, 5000);




