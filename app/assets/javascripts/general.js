$(document).on('page:change', function(){

  // JOIN

  $("span#close_successful_notice").click( function() {
    $("#successful_notice").css({ "display" : "none" });
    return false;
  });

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

  //Course Advice page
  // $('.help-button').click( function(){
  //   $('.general-advice').hide();
  //   $('#help').fadeTo(1000, 1);
  // });
  // $('.new-course-button').click( function(){
  //   $('.general-advice').hide();
  //   $('#new-course').fadeTo(1000, 1);
  // });

  $('.hamburger2').click(function(){
    $('.general-advice').hide();
  });
  $('.hamburger3').click(function(){
    $('.course-advice').hide();
  });

});
