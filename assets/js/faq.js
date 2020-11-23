function loadFaq() {

	let url = $(".the-faq").attr("url");

 	if (url) {
		$.ajax({
		  cache: false,
		  url: url,
		  context: document.body
		}).done(function(xml) {

			 var $items = $(xml).find("item");
		   
		  	 $(".the-faq").empty();
			 $items.each(function (index, item) {
			 	let $item = $(item);
			 	
			 	let question = $item.find("question").html();
			 	let answer = $item.find("answer").html();

			 	$(".the-faq").append('<div class="item">' +

			 							   		'<div class="title">' + question + 
			 							   		'</div>' +

			 							    	'<div class="description">' + answer + 
			 							    	'</div>' +

			 							    '</div>');
			 });

		});
	}
}

loadFaq();