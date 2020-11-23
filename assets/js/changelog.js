function loadChangelog(forWindows) {

	$(".os").removeClass("selected");
	
	if(forWindows) {
		$(".os-windows").addClass("selected");
	} else {
		$(".os-mac").addClass("selected");
	}

	let changelogUrl = $(".the-changelog").attr(forWindows?  "url-windows" : "url");

 	if (changelogUrl) {
		$.ajax({
		  cache: false,
		  url: changelogUrl,
		  context: document.body
		}).done(function(xml) {

			 var $items = $(xml).find("item");
			 $items = forWindows? $items : $items.reverse();
		   
		  	 $(".the-changelog").empty();
			 $items.each(function (index, item) {
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
			 		description = description.replace("\n", "\n\n");
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
}

$(".os").click(function(e) {
	loadChangelog($(this).hasClass("os-windows"));
});

loadChangelog(isWindows());

jQuery.fn.reverse = [].reverse;