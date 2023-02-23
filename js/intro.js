$(document).ready(function () {
	

	$('#btn_wrap1').mouseover(function(){
		$('#s_btn1').stop().animate({top:'-35px'}, 'fast');
	}).mouseout(function(){
		$('#s_btn1').stop().animate({top:'0px'}, 'fast');
	});

	$('#btn_wrap2').mouseover(function(){
		$('#s_btn3').stop().animate({top:'-35px'}, 'fast');
	}).mouseout(function(){
		$('#s_btn3').stop().animate({top:'0px'}, 'fast');
	});

	$('#btn_wrap3').mouseover(function(){
		$('#donation_btn1').stop().animate({top:'-35px'}, 'fast');
	}).mouseout(function(){
		$('#donation_btn1').stop().animate({top:'0px'}, 'fast');
	});

	

}); 
