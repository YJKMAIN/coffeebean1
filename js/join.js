$(document).ready(function(){

$('#chk1').toggle(function(){
		$('.type_checkbox').addClass('checked');
	},function(){
		$('.type_checkbox').removeClass('checked');
	});

$('#container .contents:not('+ $('#step li a.j_sel').attr("href") +')').hide();
	$('.join li:first a span').addClass('j_txts');
	
	$('#step li a').click(function(){
		$('#step li a').removeClass('j_sel');
		$(this).addClass('j_sel');


		$('#container .contents').hide();
		$( $(this).attr('href') ).show();
		return false;
	});
	
	$('#join_btn').click(function(){
		var pw1=$('#pw_input').val();
		var pw2=$('#pw_confirm').val();
		if(pw1 != pw2){
			alert('비밀번호 확인을 비밀번호와 동일하게 입력해주십시오');
			$('#pw_confirm').val('');
			$('#pw_confirm').focus();
		}
	});
		

});