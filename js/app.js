/*alert("hellos");*/
var startingPoint = 1;

showSlides(startingPoint);


function plusSlides(init) {
  showSlides(startingPoint += init);
}

function currentSlide(init) {
  showSlides(startingPoint = init);
}

function showSlides(init) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (init > slides.length) {startingPoint = 1} 

  if (init < 1) {startingPoint = slides.length}

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[startingPoint-1].style.display = "block"; 
  dots[startingPoint-1].className += " active";
}

function incrementPointer(){
    startingPoint++;
    showSlides(startingPoint);
}

setInterval(incrementPointer, 1500);