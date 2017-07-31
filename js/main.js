$(document).ready(function() {

  // Hide the mobile menu unless click on menu icon
  $('#mobile-menu').hide();

  // Show description when you hover over advocate info
  $('#left-info-slider').hover(function() {
    $('#left-info').slideToggle(600);
  });

  $('#right-info-slider').hover(function() {
    $('#right-info').slideToggle(600);
  });

  // When you click on mobile menu icon show mobile menu
  $('#menu').click( function(event){
     event.stopPropagation();
     $('#mobile-menu').slideToggle(600);
     $('#menu').css('visibility','hidden');
   });
  // When you click anywhere in the document close mobile menu if open
  $(document).click( function(){
     $('#mobile-menu').hide();
     $('#menu').css('visibility','visible');
   });

  // When you hover over community profiles show button
  $('#profile1').hover(function() {
     $('#profile1-learn-more').toggleClass('show');
   });

  $('#profile2').hover(function() {
     $('#profile2-learn-more').toggleClass('show');
  });

  $('#profile3').hover(function() {
       $('#profile3-learn-more').toggleClass('show');
   });

  // Plugin for lazy scrolling on blog
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
