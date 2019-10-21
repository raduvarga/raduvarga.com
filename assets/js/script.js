/**
 * 1. Search Popup
 * 2. Index Tiled
 * 3. Menu Mobile
 * 4. Project Detail
 * 5. Preload
 */

'use strict';

(function ($) {

$(".clickable-row").on('click', function (e, row, el) {
	console.log(e);
	console.log(e.currentTarget);
	console.log($(this));
  var redirectWindow = window.open($(this).attr('href'), '_blank');
  redirectWindow.location;
});

$('[date]').each(function(e) { 
	let concertDate = new Date($(this).attr("date"));
	let now = new Date();
	now.setHours(0,0,0,0);

  if(concertDate >= now) {
  	$(this).addClass("upcoming");
  } else {
  	$(this).addClass("past");
  }
});

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

})(jQuery);