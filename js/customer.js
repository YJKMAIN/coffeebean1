$(document).ready(function(){
	
$('#app_con img').hover(function(){
	$(this).css({'width':'280px', 'height':'262px'});
},function(){
	$(this).css({'width':'275px', 'height':'257px'});
});

$('#faq_tbl tr:not(:first-child)').hover(function(){
	$(this).addClass('over1');
},function(){
	$(this).removeClass('over1');
});

});

$('#icon li a').click(function(){
		$('#icon li a').removeClass('selected1');
		$(this).addClass('selected1');
});



