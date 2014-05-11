$(document).ready(function () {

$(".exam_folder").click( function(){ 

if (!$(".exams").is(":visible")){
	$(".exams").css({'-webkit-transition':  'display 1s linear'});
	$(".exams").css({'display': 'table-row'});
	$(".lowering-icon").css({'-webkit-transition':  'display 1s linear'});
	$(".lowering-icon").css({'display':  'none'});
	$(".highering-icon").css({'-webkit-transition':  'display 1s linear'});
	$(".highering-icon").css({'display':  'table-cell'});
}else{
	$(".exams").css({'-webkit-transition':  'display 1s linear'});
	$(".exams").css({'display': 'none'});
	$(".lowering-icon").css({'-webkit-transition':  'display 1s linear'});
	$(".lowering-icon").css({'display':  'table-cell'});
	$(".highering-icon").css({'-webkit-transition':  'display 1s linear'});
	$(".highering-icon").css({'display':  'none'});
}



});

});