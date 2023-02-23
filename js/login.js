$(document).ready(function(){
	
	//로그인 화면변경
	$('#login_wrap div.login_box:not('+ $('#login_list li a.selected1').attr("href") +')').hide();

	$('#login_list li a').click(function(){
		$('#login_list li a').removeClass('selected1');
		$(this).addClass('selected1');
		$('#login_wrap div.login_box').hide();
		$( $(this).attr('href') ).show();
		return false;
	});


	//로그인
	$('#btn_wrap1').mouseover(function(){
		$('#s_btn1').stop().animate({top:'-60px'}, 'fast');
	}).mouseout(function(){
		$('#s_btn1').stop().animate({top:'0px'}, 'fast');
	});

	$('#btn_wrap2').mouseover(function(){
		$('#s_btn3').stop().animate({opacity:'0'}, 'fast');
	}).mouseout(function(){
		$('#s_btn3').stop().animate({opacity:'1'}, 'fast');
	});

});