function loadReleaseNotes(forWindows) {

	$(".os").removeClass("selected");
	
	if(forWindows) {
		$(".os-windows").addClass("selected");
	} else {
		$(".os-mac").addClass("selected");
	}

	let $releaseNotesDiv = $(".the-release-notes");
	let changelogUrl = $releaseNotesDiv.attr(forWindows?  "url-windows" : "url");
	// changelogUrl = "/assets/changelog/ua-midi-control-windows.xml";

 	if (changelogUrl) {
		$.ajax({
		  cache: false,
		  url: changelogUrl,
		  context: document.body
		}).done(function(xml) {

			let releaseNotes = $($.parseHTML(xml));
			$releaseNotesDiv.html(releaseNotes[3].innerHTML);

			 // var $items = $(xml).find("item");
			 // $items = forWindows? $items : $items.reverse();
		   
		  // 	 $(".the-release-notes").empty();
			 // $items.each(function (index, item) {
			 // 	let $item = $(item);
			 	
			 // 	let version = $item.find("title").html();
			 // 	let pubDate = $item.find("pubDate").html();
			 // 	let description = $item.find("description").html();

			 // 	if(pubDate) {
			 // 		pubDate = pubDate.substring(5, pubDate.length - 15);
			 // 	}
			 // 	if(description) {
			 // 		description = description.replace("<![CDATA[", "");
			 // 		description = description.replace("]]>", "");
			 // 		description = description.replace("\n", "");

			 // 		var descriptionSplit = description.split(".");
			 // 		console.log(descriptionSplit);

			 // 		var descriptionList = "<ul class='description'>";

			 // 		for (line of descriptionSplit) {
			 // 			if(line) {
			 // 				descriptionList += "<li>" + line + ". </li>";
			 // 			}
			 // 		}

			 // 		descriptionList += "</ul>";
			 // 	}

			 // 	$(".the-release-notes").append('<div class="item">' +

			 // 							   		'<div class="title">' +
			 // 							   			'<span class="version">' + version + '</span>' + 
			 // 							   			'<span class="date">' + pubDate + '</span>' + 
			 // 							   		'</div>' +

			 // 							    	descriptionList +

			 // 							    '</div>');
			 // });

		});
	}
}

$(".os").click(function(e) {
	loadReleaseNotes($(this).hasClass("os-windows"));
});

loadReleaseNotes(isWindows());

jQuery.fn.reverse = [].reverse;