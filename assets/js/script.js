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
	let now = Date.now();

  if(concertDate > now) {
  	$(this).addClass("upcoming");
  } else {
  	$(this).addClass("past");
  }
});

})(jQuery);