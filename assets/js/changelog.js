(function ($) {

	// var settings = {
 //          'cache': false,
 //          'dataType': "jsonp",
 //          "async": true,
 //          "crossDomain": true,
 //          "url": "https://objects-us-east-1.dream.io/ua-midi-control/appcast.xml",
 //          "method": "GET",
 //          "headers": {
 //              "accept": "application/json",
 //              "Access-Control-Allow-Origin":"*"
 //          }
 //      }

 //      $.ajax(settings).done(function (response) {
 //          console.log(response);

 //      });

	$.ajax({
	  // url: "https://objects-us-east-1.dream.io/ua-midi-control/appcast.xml",
	  url: "https://ua-midi-control.raduvarga.com/appcast.xml",
	  context: document.body
	}).done(function(obj) {
	  
	  dbg(obj);
	});

})(jQuery);