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


$(function(){ $(document).foundation(); });

$(document).ready(function(){ start(); });
// $(function(){start();})

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
		+"#fya-container-1,#fya-container-2, #fya-container-3, footer").css({'width': $(window).width() });


	//HEADER
	if(window.innerWidth < 1025){
			$("header .row").css({'opacity' : '0'});
			$("header").css({'background-color' : 'initial'});
			$("header").css({'position' : 'absolute'});
			$("header .row").css({'display' : 'none'});
			$(".hamburger").css({'position' : 'fixed'});
			$(".hamburger").css({ 'display' : 'block' });
			$("header").css({'height' : '0px'});
			$('.join').css({'padding-top' : '0' });

		$(".hamburger").click( function(){ 
			if(oddClick){
				$(".hamburger path:nth-child(1)").css({"transform" : "matrix(0.7071, 0.7071, -0.7071, 0.7071, 10, -7)"});
				$(".hamburger path:nth-child(2)").css({"opacity" : "0"});
				$(".hamburger path:nth-child(3)").css({"transform" : "matrix(0.7071, -0.7071, 0.7071, 0.7071, -10, 8)"});
				$("header").css({'background-color' : '#eee'});
				$("header").css({'position' : 'fixed'});
				$("header .row").css({'display' : 'block'});
				$("header").css({'height' : '490px'});
				$("header .row").delay(100).animate({ 'opacity' : '1' }, 250);
			}else{
				$("header").css({'height' : '0px'});
				$(".hamburger path:nth-child(1)").css({"transform" : "matrix(1, 0, 0, 1, 0, 0)"});
				$(".hamburger path:nth-child(2)").css({"opacity" : "1"});
				$(".hamburger path:nth-child(3)").css({"transform" : "matrix(1, 0, 0, 1, 0, 0)"});
				$("header").css({'position' : 'fixed'});
				$("header .row").animate({ 'opacity' : '0' }, 50);
				$("header .row").css({'display' : 'none'});
				$("header").css({'background-color' : 'initial'});
			}
			oddClick = !oddClick;
			return false;
		 });
	}else{
		$('.join').css({'padding-top' : '70px'});
		$(".hamburger").css({ 'display' : 'none' });
		$("header").css({'height' : '70px'});
		$("header").css({'position' : 'fixed'});
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
	$('#time-management').hide();
	$('#work-experience').hide();

	$('#linear-algebra').hide();
	$('#computing-1').hide();
	$('#computing-2').hide();
	$('#engineering-mechanics').hide();
	$('#physics').hide();
	$('#calculus-1').hide();
	$('#digital-systems').hide();
	$('#discrete').hide();
	$('#chemistry').hide();


	$('.budgeting-button').click( function(){
		$('#time-management').hide();
		$('#work-experience').hide();
		$('#budgeting').fadeTo(1000, 1);
	});
	$('.time-management-button').click( function(){
		$('#budgeting').hide();
		$('#work-experience').hide();
		$('#time-management').fadeTo(1000, 1);
	});
	$('.work-experience-button').click( function(){
		$('#budgeting').hide();
		$('#time-management').hide();
		$('#work-experience').fadeTo(1000, 1);
	});

	$('.linear-algebra-button').click( function(){
		$('.course-advice').hide();
		$('#linear-algebra').fadeTo(1000, 1);
	});

	$('.computing-1-button').click( function(){
		$('.course-advice').hide();
		$('#computing-1').fadeTo(1000, 1);
	});

	$('.computing-2-button').click( function(){
		$('.course-advice').hide();
		$('#computing-2').fadeTo(1000, 1);
	});

	$('.engineering-mechanics-button').click( function(){
		$('.course-advice').hide();
		$('#engineering-mechanics').fadeTo(1000, 1);
	});

	$('.physics-button').click( function(){
		$('.course-advice').hide();
		$('#physics').fadeTo(1000, 1);
	});

	$('.calculus-1-button').click( function(){
		$('.course-advice').hide();
		$('#calculus-1').fadeTo(1000, 1);
	});

	$('.digital-systems-button').click( function(){
		$('.course-advice').hide();
		$('#digital-systems').fadeTo(1000, 1);
	});

	$('.discrete-button').click( function(){
		$('.course-advice').hide();
		$('#discrete').fadeTo(1000, 1);
	});

	$('.chemistry-button').click( function(){
		$('.course-advice').hide();
		$('#chemistry').fadeTo(1000, 1);
	});

	$('.hamburger2').click(function(){
		$('#budgeting').hide();
	});
	$('.hamburger3').click(function(){
		$('#time-management').hide();
	});
	$('.hamburger4').click(function(){
		$('#work-experience').hide();
	});
	$('.hamburger5').click(function(){
		$('#linear-algebra').hide();
	});
	$('.hamburger6').click(function(){
		$('#computing-1').hide();
	});
	$('.hamburger7').click(function(){
		$('#computing-2').hide();
	});
	$('.hamburger8').click(function(){
		$('#engineering-mechanics').hide();
	});
	$('.hamburger9').click(function(){
		$('#physics').hide();
	});
	$('.hamburger10').click(function(){
		$('#calculus-1').hide();
	});
	$('.hamburger12').click(function(){
		$('#digital-systems').hide();
	});
	$('.hamburger13').click(function(){
		$('#discrete').hide();
	});
	$('.hamburger14').click(function(){
		$('#chemistry').hide();
	});

	// EVENTS PAGE
	$("#events-container-1").css({'height': 0.85*$(window).height() });


	// PAGE JUMPING JAVASCRIPT

  var hashTagActive = "";
    $(".smoothScroll").click(function (event) {
        if(hashTagActive != this.hash) { //this will prevent if the user click several times the same link to freeze the scroll.
            //calculate destination place
            var dest = 0;
            if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
                dest = $(document).height() - $(window).height() - 70;
            } else {
                dest = $(this.hash).offset().top - 70;
            }
            //go to destination
            $('html,body').animate({
                scrollTop: dest
            }, 2000, 'swing');
            hashTagActive = this.hash;
        }
    });
  
  if(hash){
    if(window.innerWidth < 1025) {
	  	$('html,body').delay(400).animate({scrollTop: $(hash).offset().top}, 1000);
	}else{
	  	$('html,body').delay(400).animate({scrollTop: $(hash).offset().top - 70}, 1000);
	}
}
return false;

};

