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
			let $items = $(releaseNotes[3].innerHTML);

			$releaseNotesDiv.html($items);
		});
	}
}

$(".os").click(function(e) {
	loadReleaseNotes($(this).hasClass("os-windows"));
});

loadReleaseNotes(isWindows());

jQuery.fn.reverse = [].reverse;