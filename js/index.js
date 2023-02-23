$(document).ready(function(){
		
	/*popup*/
	$('.pop').click(function(e){
		var href1 = $(this).attr('href');
		window.open(href1,"그래픽","width=302px, height=402px");
		event.preventDefault();
	});

	/*brand_wrap 부분*/
	$('#brand_wrap figure img').mouseover(function(){
		$(this).stop().animate({width:'360px',height:'325px', marginLeft:'-5px', marginTop:'-10px'});
	}).mouseout(function(){
		$(this).stop().animate({width:'350px',height:'315px', marginLeft:'', marginTop:''});
	});

	/*event부분*/
	$('#img_l1').show();
	$('#img_l2, #img_l3, #img_l4').hide();

	$('#li1 a').click(function(){
		$('#img_l1').fadeIn(800);
		$('#img_l2, #img_l3, #img_l4').hide();
		return false;
	});

	$('#li2 a').click(function(){
		$('#img_l2').fadeIn(800);
		$('#img_l1, #img_l3, #img_l4').hide();
		return false;
	});

	$('#li3 a').click(function(){
		$('#img_l3').fadeIn(800);
		$('#img_l1, #img_l2, #img_l4').hide();
		return false;
	});

	$('#li4 a').click(function(){ 
		$('#img_l4').fadeIn(800);
		$('#img_l1, #img_l2, #img_l3').hide();
		return false;
	});


var width2 = 1280 * $('#sns_content2 ul.sns_box').size()+"px";
$('#sns_content2').css("width",width2);
//alert(width1);


//마지막 ul을 sns_content2안에서 맨 앞으로 이동*/
$('#sns_content2 ul.sns_box:last').prependTo('#sns_content2');
$('#sns_content2').css('margin-left','-1280px');

//이전 버튼 클릭 - 
$('.prev').click(function(){
	$('.prev, .next').hide();
	$('#sns_content2').animate({marginLeft:parseInt( $('#sns_content2').css('margin-left'))+1280+"px"}, "slow", "swing",
		function(){ //콜백
		$('#sns_content2').css('margin-left','-1280px');
		$('#sns_content2 ul.sns_box:last').prependTo('#sns_content2');
		$('.prev, .next').show();
	});
});

$('.next').click(function(){
	$('.prev, .next').hide();
	$('#sns_content2').animate({marginLeft:parseInt( $('#sns_content2').css('margin-left'))-1280+"px"}, "slow", "swing",
		function(){ //콜백
		$('#sns_content2').css('margin-left','-1280px');
		//맨앞 ul을 맨 뒤로
		$('#sns_content2 ul.sns_box:first').appendTo('#sns_content2');
		$('.prev, .next').show();
	});
});


	/*content*/
	$('#contents #diary_box').mouseover(function(){
		$('dt', this).stop().animate({fontSize:'25px', lineHeight:'27px'},'fast');
	}).mouseout(function(){
		$('dt', this).stop().animate({fontSize:'23px', lineHeight:'24px'},'fast');
	});

	$('#contents #recruit').mouseover(function(){
		$('dt', this).stop().animate({fontSize:'25px', lineHeight:'27px'},'fast');
	}).mouseout(function(){
		$('dt', this).stop().animate({fontSize:'23px', lineHeight:'24px'},'fast');
	});

	$('#contents #social').mouseover(function(){
		$('dt', this).stop().animate({fontSize:'25px', lineHeight:'27px'},'fast');
	}).mouseout(function(){
		$('dt', this).stop().animate({fontSize:'23px', lineHeight:'24px'},'fast');
	});
	
	$('#contents #store').mouseover(function(){
		$('dt', this).stop().animate({fontSize:'25px', lineHeight:'27px'},'fast');
	}).mouseout(function(){
		$('dt', this).stop().animate({fontSize:'23px', lineHeight:'24px'},'fast');
	});

});



