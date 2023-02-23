function nTabA(num) {
    var nTabAs = "nTabA0"+num;
    for(i=1;i<3;i++){
        var nTabAnum = "nTabA0"+i;
        document.getElementById(nTabAnum).style.display="none";
    }
    document.getElementById(nTabAs).style.display="block";
}

$(document).ready(function () {
var mapLatLng = new google.maps.LatLng(37.553495,126.922082)
var mapOptions = { 
zoom: 18, 
center: mapLatLng,
mapTypeId: google.maps.MapTypeId.ROADMAP 

}

var mapGoogle = new google.maps.Map(document.getElementById('map_wrap'), mapOptions);
var mapMarker = new google.maps.Marker({
map: mapGoogle,
position: mapLatLng,
animation: google.maps.Animation.DROP,
title: "커피빈"

});

google.maps.event.addListener(mapMarker, 'click', function () {
mapGoogle.setCenter(mapMarker.getPosition());

});

}); 



$(document).ready(function () {

	$('#tab_menu li a').click(function(){
		$('#tab_menu li a').removeClass('selected1');
		$(this).addClass('selected1');
	});
	
}); 

$(document).ready(function () {
	$('#btn_wrap').mouseover(function(){
		$('#log1').stop().animate({top:'-35px'}, 'fast');
	}).mouseout(function(){
		$('#log1').stop().animate({top:'0px'}, 'fast');
	});

	/*신규매장 이미지 확대*/
	$('#new_store .store1 .parent_a').mouseover(function(){
		$('.img1', this).stop().animate({width:'340px',height:'270px', marginLeft:'-5px', marginTop:'-20px'});
	}).mouseout(function(){
		$('.img1', this).stop().animate({width:'320px',height:'250px', marginLeft:'', marginTop:''});
	});
	

})
