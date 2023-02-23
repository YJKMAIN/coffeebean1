$(document).ready(function () {
	$('#btn_wrap1').mouseover(function(){
		$('#s_btn1').stop().animate({top:'-35px'}, 'fast');
	}).mouseout(function(){
		$('#s_btn1').stop().animate({top:'0px'}, 'fast');
	});

}); 
