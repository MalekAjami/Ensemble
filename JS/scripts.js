$('.navTrigger').click(function () {
  $(this).toggleClass('active');
  $("#mainListDiv").toggleClass("show_list");
  $("#mainListDiv").fadeIn();

});


//  Function used to shrink nav bar removing paddings and adding black background
$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
      $('.nav').addClass('affix');
  } else {
      $('.nav').removeClass('affix');
  }
});

//Arrow scroll 


// making slide show
// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
//   setTimeout(showSlides, 3000); // Change image every 3 seconds
// }