/**
 * 1. Search Popup
 * 2. Index Tiled
 * 3. Menu Mobile
 * 4. Project Detail
 * 5. Preload
 */

'use strict';

(function ($) {

// load default image
$(window).load(function() {
  $('img').each(function() {
    if (!this.complete || typeof this.naturalWidth == "undefined" || this.naturalWidth == 0) {
      // image was broken, replace with your new image
      this.src = '/assets/img/gray.jpg';
    }
  });
});

// redirect event
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

})(jQuery);