$(document).ready(function(){

  ($('a').click(function(e){
      // e.preventDefault(); //Removed because it disables other links.
      $('html, body').animate({
          scrollTop: $( $(this).attr('href') ).offset().top
      }, 600);
      return false;
  }))();

});