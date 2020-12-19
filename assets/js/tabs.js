$(".tab").click(function(e){

	var tabId = $(e.currentTarget).attr("tab-id");
	window.location.hash = tabId;

	showTab(tabId);
});


function showTab(tabId) {
	if(!tabId) {
		tabId = "content";
	}

	$(".post-content").addClass("hidden");
	$(".tab").removeClass("selected");

	if(tabId == "forum") {
		tabId = "discussion";
	}
	if(tabId == "changelog") {
		tabId = "release-notes";
	}

	$(".post-content[tab-id=" + tabId + "]").removeClass("hidden");
	$(".tab[tab-id=" + tabId + "]").addClass("selected");
	
	window.location.hash = tabId;
}

var hash = window.location.hash;
hash = hash.replace("#", "");
showTab(hash);