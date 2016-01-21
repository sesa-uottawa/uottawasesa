$(document).on('page:change', function(){

  var hash = window.location.hash;
  window.location.hash = "";

  if(hash){
    if(window.innerWidth < 1025) {
      $('html,body').delay(400).animate({scrollTop: $(hash).offset().top}, 1000);
    } else {
      $('html,body').delay(400).animate({scrollTop: $(hash).offset().top - 60}, 1000);
    }
  }

});

$(document).on('click', 'a[href*=#]:not([href=#])', function(){

  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
    && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {


      if(window.innerWidth < 1025) {
        $('html,body').animate({ scrollTop: target.offset().top }, 1000);
      }else{

        if(location.pathname === "/firstyearadvice"){
          $('html,body').animate({ scrollTop: target.offset().top - 150 }, 1000);
        }else{
          $('html,body').animate({ scrollTop: target.offset().top -60 }, 1000); 
        }

      }
      return false;
    }
  }
});
