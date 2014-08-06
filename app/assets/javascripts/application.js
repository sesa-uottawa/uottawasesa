// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require jquery-ui/effect-slide
//= require turbolinks
//= require_tree 



$(function(){start();});

function start(){
	
	var hash = window.location.hash;
	window.location.hash = "";
	$("header, #home-container-1, #home-container-2, #home-container-3, #home-container-4, #home-container-5, footer").css({'width': $(window).width() });


	//HEADER

	if($(window).width() < 1115){
		$("header .row").css({'display' : 'none'});
		$(".ex").css({ 'display' : 'none' });
		$("header").css({'background-color' : 'initial'});
		$("header").css({'height' : '490px'});
		$("header").css({'position' : 'absolute'});
		$(".hamburger").css({ 'display' : 'block' });
		$(".hamburger").click( function(){ 
			$("header .row").css({ 'display' : 'block' });
			$("header").css({'background-color' : '#eee'});
			$(".hamburger").css({ 'display' : 'none' });
			$(".ex").css({ 'display' : 'block' });
			$("header").css({'position' : 'relative'});
		 });
		$(".ex").click( function(){ 
			$("header").css({'position' : 'absolute'});
			$(".hamburger").css({ 'display' : 'block' });
			$(".ex").css({ 'display' : 'none' });
			$("header .row").css({ 'display' : 'none' });
			$("header").css({'background-color' : 'initial'});
		});
	}else{
		$(".hamburger").css({ 'display' : 'none' });
		$(".ex").css({ 'display' : 'none' });
		$("header").css({'height' : '70px'});
		$("header").css({'position' : 'relative'});
		$("header").css({'background-color' : '#eee'});
		$("header .row").css({'display' : 'block'});

	}

	//FOOTER
	$("footer").css({ 'height' : ($("footer > h1").height() + $("footer > .row1").height() 
										+ $("footer > .row2" + 20)) });
	

	//JOIN PAGE
	if($(".form .row").width() < 480){
		$(".form .row").css({ 'padding' : '50px 5px 25px'});
	}else{
		$(".form .row").css({ 'padding' : '50px'});
	}

	$("span#close_successful_notice").click( function(){ 
		$("#successful_notice").css({ "display" : "none" })
	});

	//HOME PAGE

	//HOME PAGE CONTAINER 1
	$("#home-container-1").css({'height': 0.85*$(window).height() });
	$("#home-container-1 > .text-container >  hr").css({'width': $("#home-container-1 > .text-container > span").width() });

	//HOME PAGE CONTAINER 2
	$("#home-container-2").css({'height': 0.5*$(window).height() });
	$("#home-container-2 > .text-container").css({'height': ($("#home-container-2 > .text-container > p").height()) });

	//HOMEPAGE CONTAINER 3
	$("#home-container-3").css({'height': 0.85*$(window).height() });
	$("#home-container-3 > .text-container >  hr").css({'width': $("#home-container-3 > .text-container > p").width() });
	$("#home-container-3 > .text-container").css({'height': ($("#home-container-3 > .text-container > p").height() +
																	$("#home-container-3 > .text-container > h1").height() +
																	  $("#home-container-3 > .text-container > a").height() + 40 )});

	if($("#home-container-3 > .text-container").height() > $("#home-container-3").height()){
		$("#home-container-3").css({'height' : $("#home-container-3 > .text-container").height() + 20 });
	}

	//HOMEPAGE CONTAINER 4
	$("#home-container-4").css({'height': ($(".the-a-team").height() + $("#home-container-4 > h1").height() + 60 )});
	if($(window).width() < 640){
		$(".small-12.medium-3.columns").css({ 'text-align' : 'center'});
	}else{
		$(".small-12.medium-3.columns").css({ 'text-align' : 'left'});	
	}

	//HOME PAGE CONTAINER 5
	$("#home-container-5 > .row > .small-12.large-6.columns").css({'height': 0.65*$(window).height() });

	$("#home-container-5 > .row > .small-12.large-6.columns:nth-child(1)").mouseover(function(){
		if($(window).width() > 1024){
			$("#home-container-5 > .row > .small-12.large-6.columns:nth-child(2)").css({ 'transform' : 'translateX('+ 
				$("#home-container-5 > .row > .small-12.large-6.columns:nth-child(1)").width()*0.0255 +'px)' });
			$("#home-container-5 > .row > .small-12.large-6.columns:nth-child(1)").css({ 'transform' : 'scale(1.05,1.05)'}); 
		}
	});

	$("#home-container-5 > .row > .small-12.large-6.columns:nth-child(1)").mouseout(function(){
		if($(window).width() > 1024){
			$("#home-container-5 > .row > .small-12.large-6.columns:nth-child(2)").css({ 'transform' : 'translateX(0px)' });
			$("#home-container-5 > .row > .small-12.large-6.columns:nth-child(1)").css({ 'transform' : 'scale(1,1)'}); 
		}
	});

	$("#home-container-5 > .row > .small-12.large-6.columns:nth-child(2)").mouseover(function(){
		if($(window).width() > 1024){
			$("#home-container-5 > .row > .small-12.large-6.columns:nth-child(1)").css({ 'transform' : 'translateX(-'+ 
				$("#home-container-5 > .row > .small-12.large-6.columns:nth-child(2)").width()*0.0255 +'px)' });
			$("#home-container-5 > .row > .small-12.large-6.columns:nth-child(2)").css({ 'transform' : 'scale(1.05,1.05)'}); 
		}
	});

	$("#home-container-5 > .row > .small-12.large-6.columns:nth-child(2)").mouseout(function(){
		if($(window).width() > 1024){
			$("#home-container-5 > .row > .small-12.large-6.columns:nth-child(1)").css({ 'transform' : 'translateX(0px)' });
			$("#home-container-5 > .row > .small-12.large-6.columns:nth-child(2)").css({ 'transform' : 'scale(1,1)'}); 
		}
	});

// PAGE JUMPING JAVASCRIPT
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  $('html,body').delay(600).animate({scrollTop: $(hash).offset().top}, 1000);

};

	
window.onresize = function() { start(); };



$(function(){ $(document).foundation(); });
