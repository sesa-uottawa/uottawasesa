$(document).on('page:change', function(){

  // JOIN
  
  $("span#close_successful_notice").click( function() { 
    $("#successful_notice").css({ "display" : "none" });
    return false;
  });

  $("#home-container-1 > .text-container >  hr").css({
    'width': $("#home-container-1 > .text-container > span").width() 
  });

  //HOME PAGE CONTAINER 2
  $("#home-container-2 > .text-container").css({
    'height': ($("#home-container-2 > .text-container > p").height()) 
  });

  //HOMEPAGE CONTAINER 3
  $("#home-container-3 > .text-container").css({
    'height': ($("#home-container-3 > .text-container > p").height() +
               $("#home-container-3 > .text-container > h1").height() +
               $("#home-container-3 > .text-container > a").height())
  });

  if($("#home-container-3 > .text-container").height() 
    > $("#home-container-3").height()) {
    $("#home-container-3").css({
      'height' : $("#home-container-3 > .text-container").height() + 20 
    });
  }

  //FIRST YEAR ADVICE

  //FIRST YEAR ADVICE CONTAINER 2
  $(".general-advice, .course-advice").hide();

  $('.budgeting-button').click( function(){
    $('.general-advice').hide();
    $('#budgeting').fadeTo(1000, 1);
  });
  $('.time-management-button').click( function(){
    $('.general-advice').hide();
    $('#time-management').fadeTo(1000, 1);
  });
  $('.work-experience-button').click( function(){
    $('.general-advice').hide();
    $('#work-experience').fadeTo(1000, 1);
  });

  $('.course-advice-button').each(function() {
    var containerId = $(this).prop('id').slice(0, -7);
    $(this).click(function() {
      $('.course-advice').hide();
      $('#' + containerId).fadeTo(1000, 1);
    });
  });

  $('.hamburger2').click(function(){
    $('.general-advice').hide();
  });
  $('.hamburger3').click(function(){
    $('.course-advice').hide();
  });

});