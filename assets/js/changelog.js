(function ($) {
	
 	jQuery.fn.reverse = [].reverse;

 	var changelogUrl = $(".the-changelog").attr("url");

 	if (changelogUrl) {
		$.ajax({
		  url: changelogUrl,
		  context: document.body
		}).done(function(xml) {
		  
			 $(xml).find("item").reverse().each(function (index, item) {
			 	let $item = $(item);
			 	
			 	let version = $item.find("title").html();
			 	let pubDate = $item.find("pubDate").html();
			 	let description = $item.find("description").html();

			 	if(pubDate) {
			 		pubDate = pubDate.substring(0, pubDate.length - 15);
			 	}
			 	if(description) {
			 		description = description.replace("<![CDATA[", "");
			 		description = description.replace("]]>", "");
			 	}

			 	$(".the-changelog").append('<div class="item">' +

			 							   		'<div class="title">' + version + 
			 							   			'<span class="date">' + pubDate + 
			 							   			'</span>' + 
			 							   		'</div>' +

			 							    	'<div class="description">' + description + 
			 							    	'</div>' +

			 							    '</div>');
			 });

		});
	}

})(jQuery);