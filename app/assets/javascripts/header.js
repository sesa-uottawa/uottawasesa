var hamburgerOddClick; 

$(document).on('page:change', function(){
  hamburgerOddClick = true; 
});

$(document).on('click', 'header a', function(){
  hideMobileHeader();
});

$(document).on('click', '.hamburger', function(){
  console.log(hamburgerOddClick);
  if(hamburgerOddClick) {
    showMobileHeader();
  } else {
    hideMobileHeader();
  }
  hamburgerOddClick = !hamburgerOddClick;
  return false;
});

function showMobileHeader(){
  $(".hamburger path:nth-child(1)").css({"transform" : "matrix(0.7071, 0.7071, -0.7071, 0.7071, 10, -7)"});
  $(".hamburger path:nth-child(2)").css({"opacity" : "0"});
  $(".hamburger path:nth-child(3)").css({"transform" : "matrix(0.7071, -0.7071, 0.7071, 0.7071, -10, 8)"});
  $("header").fadeIn(250);

}
  
function hideMobileHeader(){
  $(".hamburger path:nth-child(1)").css({"transform" : "matrix(1, 0, 0, 1, 0, 0)"});
  $(".hamburger path:nth-child(2)").css({"opacity" : "1"});
  $(".hamburger path:nth-child(3)").css({"transform" : "matrix(1, 0, 0, 1, 0, 0)"});
  $("header").fadeOut(250);
}