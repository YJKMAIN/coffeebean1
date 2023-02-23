$(document).ready(function () {

$(window).scroll(function(){ //화면을 스크롤할때
		if( $(this).scrollTop() > 40 ){ //상단에서 40이 초과될때
			$('#main_menu').addClass('fixed1');
			$('.fixed1 .sub_wrap').hide();
			$('.n_bg').css({'background-color':'transparent','box-shadow':'none'});
		}else{
			$('#main_menu').removeClass('fixed1');
			$('.fixed1 .sub_wrap').show();
			$('.n_bg').css('background-color','');
		}	
	});

	//태그추가


	$('#main_sub_menu').before('<p class="n_bg"></p>');

$('#top_wrap').before('<p class="n_bg"></p>');
	$('.sub').hide();
	$('.menu li').hover(function(){
		$(this).children('ul').css('display','block');
	},function(){
		$(this).children('ul').css('display','none');
	});

	$('.n_bg').hide();
	$('.menu').mouseover(function(){
		$('.n_bg:not(:animated)').show().css('height','50px');
	}).mouseout(function(){
		$('.n_bg:not(:animated)').hide().css('height','0px');
	});

	/* 메뉴 관련 */

	$('.sub').hide();
	$('.menu1').hover(function(){
		$('.sub1:not(:animated)').show();
	},function(){
		$('.sub1:not(:animated)').hide();	
	});

	$('.sub').hide();
	$('.menu2').hover(function(){
		$('.sub2:not(:animated)').show();
	},function(){
		$('.sub2:not(:animated)').hide();	
	});

	$('.sub').hide();
	$('.menu3').hover(function(){
		$('.sub3:not(:animated)').show();
	},function(){
		$('.sub3:not(:animated)').hide();	
	});

	$('.sub').hide();
	$('.menu4').hover(function(){
		$('.sub4:not(:animated)').show();
	},function(){
		$('.sub4:not(:animated)').hide();	
	});

	$('.sub').hide();
	$('.menu5').hover(function(){
		$('.sub5:not(:animated)').show();
	},function(){
		$('.sub5:not(:animated)').hide();	
	});

	$('.sub').hide();
	$('.menu6').hover(function(){
		$('.sub6:not(:animated)').show();
	},function(){
		$('.sub6:not(:animated)').hide();	
	});

});