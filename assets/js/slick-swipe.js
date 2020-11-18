// slick swipe for projects
$('.slick-items').slick({
	infinite: false,
	adaptiveHeight: true,
	// prevArrow: null,
	// nextArrow: null,
	 prevArrow: '<span class="prev"><i class="fa fa-caret-left fa-3x" aria-hidden="true"></i></span>',
    nextArrow: '<span class="next"><i class="fa fa-caret-right fa-3x" aria-hidden="true"></i></span>'
});

$('slick-next').click(function(){
    $('.slick-items').slick('slickNext');
});
$('.slick-prev').click(function(){
    $('.slick-itemsa').slick('slickPrev');
});