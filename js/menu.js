$(document).ready(function(){


/*메뉴 넘기기*/
var width2 = 1200 * $('#contents_wrap2 ul.content').size()+"px";
$('#contents_wrap2').css("width",width2);
//alert(width1);

//마지막 ul을 sns_content2안에서 맨 앞으로 이동*/
$('#contents_wrap2 ul.content:last').prependTo('#contents_wrap2');
$('#contents_wrap2').css('margin-left','-1200px');

//이전 버튼 클릭 - 
//버튼이 살짝 사라졌다가 다시 나오게
//왼쪽으로 마진을 1280만큼 옮기기
$('.prev').click(function(){
	
	$('#contents_wrap2').animate({marginLeft:parseInt( $('#contents_wrap2').css('margin-left'))+1200+"px"}, "slow", "swing",
		function(){ //콜백
		$('#contents_wrap2').css('margin-left','-1200px');
		$('#contents_wrap2 ul.content:last').prependTo('#contents_wrap2');
	
	});
});

$('.next').click(function(){

	$('#contents_wrap2').animate({marginLeft:parseInt( $('#contents_wrap2').css('margin-left'))-1200+"px"}, "slow", "swing",
		function(){ //콜백
		$('#contents_wrap2').css('margin-left','-1200px');
		//맨앞 ul을 맨 뒤로
		$('#contents_wrap2 ul.content:first').appendTo('#contents_wrap2');

	});
});

$('.c1').click(function(){
	$('body').after('<div id="layer"></div>');
	$('div.click_content[id=' + $(this).attr('data-href') + ']' ).show();
	return false;
});

$('.close_product').click(function(){
	$('#layer').remove();
	$('.click_content').hide();
});

});