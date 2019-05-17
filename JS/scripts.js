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
$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});

$('right-side').on('mouseover',function(){
  window.setTimeout(function(){
      $this.addClass('onesecond');
  }, 1000); //<-- Delay in milliseconds
   });