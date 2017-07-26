$(document).ready(function() {

  $('#mobile-menu').hide();

  $('#left-info-slider').hover(function() {
    $('#left-info').slideToggle(600);
  });

  $('#right-info-slider').hover(function() {
    $('#right-info').slideToggle(600);
  });

    $('#menu').click( function(event){
         event.stopPropagation();
         $('#mobile-menu').slideToggle(600);
         $('#menu').css('visibility','hidden');
     });

     $(document).click( function(){
         $('#mobile-menu').hide();
         $('#menu').css('visibility','visible');
     });

     $('#profile1').hover(function() {
       $('#profile1-learn-more').toggle();
     });

     $('#profile2').hover(function() {
       $('#profile2-learn-more').toggle();
     });

     $('#profile3').hover(function() {
       $('#profile3-learn-more').toggle();
     });

     var ias = $.ias({
       container:  ".blog-container",
       item:       ".post",
       pagination: "#pagination",
       next:       ".next"
     });

    ias.extension(new IASSpinnerExtension());            // shows a spinner (a.k.a. loader)
    ias.extension(new IASTriggerExtension({offset: 2})); // shows a trigger after page 3
    ias.extension(new IASNoneLeftExtension({
     text: 'There are no more pages left to load.'      // override text when no pages left
    }));

})
