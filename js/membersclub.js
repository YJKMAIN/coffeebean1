$(document).ready(function () {
	
	$('#btn_wrap1').mouseover(function(){
		$('#card_btn1').stop().animate({top:'-40px'}, 'fast');
	}).mouseout(function(){
		$('#card_btn1').stop().animate({top:'0px'}, 'fast');
	});

	$('#btn').mouseover(function(){
		$('#kind_btn1').stop().animate({top:'-35px'}, 'fast');
	}).mouseout(function(){
		$('#kind_btn1').stop().animate({top:'0px'}, 'fast');
	});



}); 
