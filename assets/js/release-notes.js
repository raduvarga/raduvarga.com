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

				// add download link
				if($item.hasClass("item")) {
					var version = $item.find(".version").html();
					var versionNr = parseFloat(version);
					var build = $item.find(".build").html();
					if (build != undefined) {
						version += "." + build;
					}
					var folder = forWindows ? "windows/builds/" : "builds/";
					var file = forWindows ? "UA Midi Control Setup " + version + ".msi" : "UA Midi Control " + version + ".zip";
					var minVersion = forWindows? 3.8 : 3.6;
					console.log(versionNr);
					if(versionNr >= minVersion) {
						var href = "https://objects-us-east-1.dream.io/ua-midi-control/" + folder + file + ""
						$item.find(".title").append('<a class="fa fa-download" aria-label="download" target="_blank" href="' + href + '"/>');
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