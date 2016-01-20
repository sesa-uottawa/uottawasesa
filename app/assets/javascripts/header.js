
$(document).on('page:change', function(){
  var hamburgerOddClick = true; 

  if(window.innerWidth < 1025) {
    $("header").css({'opacity' : '0'});
    $(".hamburger").click( function() { 
      if(hamburgerOddClick) {
        showMobileHeader();
      } else {
        hideMobileHeader();
      }
      hamburgerOddClick = !hamburgerOddClick;
      return false;
     });
  } else {
    // $("header .row").css({'opacity' : '1'});
  } 
});

$(document).on('click', 'header a', function(){
  hideMobileHeader();
});

function showMobileHeader(){
  $(".hamburger path:nth-child(1)").css({"transform" : "matrix(0.7071, 0.7071, -0.7071, 0.7071, 10, -7)"});
  $(".hamburger path:nth-child(2)").css({"opacity" : "0"});
  $(".hamburger path:nth-child(3)").css({"transform" : "matrix(0.7071, -0.7071, 0.7071, 0.7071, -10, 8)"});
  $("header").css({'opacity' : '1'});
}
  
function hideMobileHeader(){
  $(".hamburger path:nth-child(1)").css({"transform" : "matrix(1, 0, 0, 1, 0, 0)"});
  $(".hamburger path:nth-child(2)").css({"opacity" : "1"});
  $(".hamburger path:nth-child(3)").css({"transform" : "matrix(1, 0, 0, 1, 0, 0)"});
  $("header").css({'opacity' : '0'});
}