function photo_popup(){
$(".photo_grid_item img").on('click', function() {

	alt="";
	alt=$(this).attr('alt');
	$('.photo_back').removeClass("hide");
	$('.photo_back img[alt='+alt+']').removeClass("hide");
	$('.photo_back img[alt='+alt+']').addClass("see_it");
	$('.photo_back').addClass("see_it");


});

$(".photo_back").on('click', function() {

	$('.photo_back').addClass("hide");
	$('.photo_back img[alt='+alt+']').addClass("hide");
	$('.photo_back img[alt='+alt+']').removeClass("see_it");
	$('.photo_back').removeClass("see_it");


});

};
