function loadReleaseNotes(forWindows) {

	$(".os").removeClass("selected");
	
	if(forWindows) {
		$(".os-windows").addClass("selected");
	} else {
		$(".os-mac").addClass("selected");
	}

	let $releaseNotesDiv = $(".the-release-notes");
	let changelogUrl = $releaseNotesDiv.attr(forWindows?  "url-windows" : "url");

 	if (changelogUrl) {
		$.ajax({
		  cache: false,
		  url: changelogUrl,
		  context: document.body
		}).done(function(xml) {

			let releaseNotes = $($.parseHTML(xml));
			let $theReleaseNotes = $(releaseNotes[3].innerHTML);

			$theReleaseNotes.each(function(index, item) {
				var $item = $(item);
				if($item.hasClass("item")) {
					var version = $item.find(".version").html();
					var versionNr = parseFloat(version);
					if(versionNr >= 3.6) {
						var href = "javascript:download('https://objects-us-east-1.dream.io/ua-midi-control/builds/UA Midi Control " + version + ".zip');"
						$item.find(".title").append('<a class="fa fa-download" aria-label="download" href="' + href + '"/>');
					}
				}
			});

			$releaseNotesDiv.html($theReleaseNotes);
		});
	}
}

$(".os").click(function(e) {
	loadReleaseNotes($(this).hasClass("os-windows"));
});

loadReleaseNotes(isWindows());

jQuery.fn.reverse = [].reverse;