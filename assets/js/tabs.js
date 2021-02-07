$(".tab").click(function(e){

	var tabId = $(e.currentTarget).attr("tab-id");
	window.location.hash = tabId;

	showTab(tabId);
});


function showTab(tabId) {
	$(".post-content").addClass("hidden");
	$(".tab").removeClass("selected");

	if(tabId == "forum") {
		tabId = "discussion";
		window.location.hash = tabId;
	}
	if(tabId == "changelog") {
		tabId = "release-notes";
		window.location.hash = tabId;
	}
	if(tabId == "reviews" || tabId == "pricing") {
		tabId = "app";
	}
	if(!tabId) {
		tabId = "app";
	}

	$(".post-content[tab-id=" + tabId + "]").removeClass("hidden");
	$(".tab[tab-id=" + tabId + "]").addClass("selected");
}

function onPowrLoaded() {
	console.log("onPowrLoaded");
		setTimeout(function() {
			window.location.hash = window.location.hash;
		}, 100);
}

var hash = window.location.hash;
hash = hash.replace("#", "");
showTab(hash);