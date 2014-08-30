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

window.onresize = function() {
	start(); 
	$(".hamburger path:nth-child(1)").css({"transform" : "matrix(1, 0, 0, 1, 0, 0)"});
	$(".hamburger path:nth-child(2)").css({"opacity" : "1"});
	$(".hamburger path:nth-child(3)").css({"transform" : "matrix(1, 0, 0, 1, 0, 0)"});
	oddClick = true;
	return false;
};

function start(){
	
	var hash = window.location.hash;
	var oddClick = true;
	window.location.hash = "";
	if( window.location.pathname == "/firstyearadvice.fya" ){

		window.location.pathname = "/firstyearadvice";
	}
	
	$("header, #home-container-1, #home-container-2, #home-container-3, #home-container-4, #home-container-5," 
		+"#fya-container-1, footer").css({'width': $(window).width() });


	//HEADER

	if(window.innerWidth < 1025){
			$("header .row").css({'opacity' : '0'});
			$("header").css({'background-color' : 'initial'});
			$("header").css({'position' : 'absolute'});
			$("header .row").css({'display' : 'none'});
			$(".hamburger").css({'position' : 'absolute'});
			$(".hamburger").css({ 'display' : 'block' });
			$("header").css({'height' : '0px'});

		$(".hamburger").click( function(){ 
			if(oddClick){
				$(".hamburger path:nth-child(1)").css({"transform" : "matrix(0.7071, 0.7071, -0.7071, 0.7071, 10, -7)"});
				$(".hamburger path:nth-child(2)").css({"opacity" : "0"});
				$(".hamburger path:nth-child(3)").css({"transform" : "matrix(0.7071, -0.7071, 0.7071, 0.7071, -10, 8)"});
				$("header").css({'background-color' : '#eee'});
				$("header").css({'position' : 'relative'});
				$("header .row").css({'display' : 'block'});
				$("header").css({'height' : '490px'});
				$("header .row").delay(100).animate({ 'opacity' : '1' }, 250);
			}else{
				$("header").css({'height' : '0px'});
				$(".hamburger path:nth-child(1)").css({"transform" : "matrix(1, 0, 0, 1, 0, 0)"});
				$(".hamburger path:nth-child(2)").css({"opacity" : "1"});
				$(".hamburger path:nth-child(3)").css({"transform" : "matrix(1, 0, 0, 1, 0, 0)"});
				$("header").css({'position' : 'absolute'});
				$("header .row").animate({ 'opacity' : '0' }, 50);
				$("header .row").css({'display' : 'none'});
				$("header").css({'background-color' : 'initial'});
			}
			oddClick = !oddClick;
			return false;
		 });
	}else{
		$(".hamburger").css({ 'display' : 'none' });
		$("header").css({'height' : '70px'});
		$("header").css({'position' : 'relative'});
		$("header").css({'background-color' : '#eee'});
		$("header .row").css({'opacity' : '1'});
		$("header .row").css({'display' : 'block'});
	}


	//FOOTER
	$("footer").css({ 'height' : ($("footer > h1").height() + $("footer > .row1").height() + $("footer > .row2" + 20)) });
	

	//JOIN PAGE
	if($(".form .row").width() < 480){
		$(".form .row").css({ 'padding' : '50px 5px 25px'});
	}else{
		$(".form .row").css({ 'padding' : '50px'});
	}

	$("span#close_successful_notice").click( function(){ 
		$("#successful_notice").css({ "display" : "none" });
		return false;
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
	$("#home-container-3 > .text-container").css({'height': ($("#home-container-3 > .text-container > p").height() +
																	$("#home-container-3 > .text-container > h1").height() +
																	  $("#home-container-3 > .text-container > a").height() + 40 )});

	if($("#home-container-3 > .text-container").height() > $("#home-container-3").height()){
		$("#home-container-3").css({'height' : $("#home-container-3 > .text-container").height() + 20 });
	}

	//HOME PAGE CONTAINER 5
	$("#home-container-5 > .row > .small-12.large-6.columns").css({'height': 0.65*$(window).height() });

	//FIRST YEAR ADVICE

	//FIRST YEAR ADVICE CONTAINER 1
	$("#fya-container-1").css({'height': 0.85*$(window).height() });

	//FIRST YEAR ADVICE CONTAINER 2
	$('#budgeting').hide();
	$('#linear-algebra').hide();
	$('.budgeting-button').click( function(){
		$('#budgeting').fadeTo(1000, 1);
	});
	$('.linear-algebra-button').click( function(){
		$('#linear-algebra').fadeTo(1000, 1);
	});

	$('.hamburger2').click(function(){
		$('#budgeting').hide();
	});
	$('.hamburger5').click(function(){
		$('#linear-algebra').hide();
	});

	// PAGE JUMPING JAVASCRIPT
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({scrollTop: target.offset().top}, 1000);

	        return false;
	      }
	    }
	  });
  
  if(hash)
  	$('html,body').delay(400).animate({scrollTop: $(hash).offset().top}, 1000);

return false;

};

$(function(){ $(document).foundation(); });
