$(document).on('page:change', function(){

  // JOIN

  $("span#close_successful_notice").click( function() {
    $("#successful_notice").css({ "display" : "none" });
    return false;
  });


});
