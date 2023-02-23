$(document).ready(function(){

/*클릭된 탭 섹션*/
$('#event_wrap div.hide_show:not('+ $('#event_menu li a.selected1').attr("href") +')').hide();

/*tab border-bottom 바꾸기*/
$('#event_menu li a').click(function(){
	/*메뉴바 부분*/
	$('#event_menu li a').removeClass('selected1');
	$(this).addClass('selected1');

	/*이벤트 내용 부분*/
	$('#event_wrap div.hide_show').hide();
	$( $(this).attr('href') ).show();
	return false;
});


});