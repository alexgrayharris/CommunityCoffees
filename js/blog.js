$(document).ready(function() {

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
