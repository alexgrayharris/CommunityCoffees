$(document).ready(function() {

  $('#mobile-menu').hide();

  $('#left-info-slider').hover(function() {
    $('#left-info').toggle(600);
  });

  $('#right-info-slider').hover(function() {
    $('#right-info').toggle(600);
  });

    $('.lnr-menu').click( function(event){
         event.stopPropagation();
         $('#mobile-menu').toggle();
     });

     $(document).click( function(){
         $('#mobile-menu').hide();
     });


})
