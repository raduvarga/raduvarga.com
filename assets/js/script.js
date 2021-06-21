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
 
$('[date]').each(function(e) { 
	let concertDate = new Date($(this).attr("date"));
	let now = new Date();
	now.setHours(0,0,0,0);

 console.log("---");
 console.log(concertDate);
 console.log(now);

  if(concertDate >= now) {
  	$(this).addClass("upcoming");
  } else {
  	$(this).addClass("past");
  }
});

setIframHeight();
$( window ).resize(function() {
  setIframHeight();
});

})(jQuery);