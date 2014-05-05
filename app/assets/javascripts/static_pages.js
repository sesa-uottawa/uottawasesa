$(document).ready(function () {

$("#motto-1").effect("slide", 2000);
$("#motto-2").delay(2000).effect("slide",{'direction': 'right'}, 1000);
$("#motto-3").delay(2000).effect("slide", 2000);

$(".close-menu-box").hide();

$('.menu').mouseenter( function(){
     $('.menu-icon').fadeTo(200, 0.5);
});

$('.menu').mouseout( function(){
     $('.menu-icon').fadeTo(200, 1);
});

$(".menu").click( function(){
	$(".menu").hide();
	$(".close-menu-box").slideDown('fast');
	$(".menu-box").css({'-webkit-animation':  'slide 100ms linear 1'});
	$(".menu-box").css({'-moz-animation':  'slide 100ms linear 1'});
	$(".menu-box").css({'-webkit-animation-fill-mode':  'forwards'});
	$(".menu-box").css({'-moz-animation-fill-mode':  'forwards'});
});

$("#inner-feature-container-1").mouseenter( function(){
	$(".text-1").fadeTo(200, 0);
	$(".hovering-text-1").fadeTo(200, 1);
	$("#inner-feature-container-1 img").css({'-webkit-transition' : 'margin-top 200ms linear'});
	$("#inner-feature-container-1 img").css({'margin-top' : '-30px'});
});

$('#inner-feature-container-1').mouseout( function(){
     $('.text-1').fadeTo(200, 1);
	$(".hovering-text-1").fadeTo(200, 0);
	$("#inner-feature-container-1 img").css({'-webkit-transition' : 'margin-top 200ms linear'});
	$("#inner-feature-container-1 img").css({'margin-top' : '0px'});
});

$("#inner-feature-container-2").mouseenter( function(){
	$(".text-2").fadeTo(200, 0);
	$(".hovering-text-2").fadeTo(200, 1);
	$("#inner-feature-container-2 img").css({'-webkit-transition' : 'margin-top 200ms linear'});
	$("#inner-feature-container-2 img").css({'margin-top' : '-30px'});

});

$('#inner-feature-container-2').mouseout( function(){
     $('.text-2').fadeTo(200, 1);
	$(".hovering-text-2").fadeTo(200, 0);
	$("#inner-feature-container-2 img").css({'-webkit-transition' : 'margin-top 200ms linear'});
	$("#inner-feature-container-2 img").css({'margin-top' : '0px'});
});

$("#inner-feature-container-3").mouseenter( function(){
	$(".text-3").fadeTo(200, 0);
	$(".hovering-text-3").fadeTo(200, 1);
	$("#inner-feature-container-3 img").css({'-webkit-transition' : 'margin-top 200ms linear'});
	$("#inner-feature-container-3 img").css({'margin-top' : '-30px'});

});

$('#inner-feature-container-3').mouseout( function(){
     $('.text-3').fadeTo(200, 1);
	$(".hovering-text-3").fadeTo(200, 0);
	$("#inner-feature-container-3 img").css({'-webkit-transition' : 'margin-top 200ms linear'});
	$("#inner-feature-container-3 img").css({'margin-top' : '0px'});
});


$(".close-menu-box").click( function(){
	$(".menu").show();
	$(".close-menu-box").hide();
	$(".menu-box").css({'-webkit-animation':  'slidein 500ms linear 1'});
	$(".menu-box").css({'-moz-animation':  'slidein 500ms linear 1'});
});



});	