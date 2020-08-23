$("#contact-form").submit(function (e) {
	e.preventDefault();
	$("#submit").prop("disabled", true);

	let name = $("input[name=name]").val();
	let email = $("input[name=email]").val();
	let subject = $("input[name=subject]").val();
	var body = $("textarea[name=message]").val();

	console.log("sending email...");
	$(".contact-message").html("");

	body = body.replaceAll("\n", "<br>");

	Email.send({
		SecureToken : "0f6f562b-6e9d-4f75-b6eb-1b45fbe8bbf1",
	    To : "contact@raduvarga.com",
	    From : "contact-form@raduvarga.com",
	    FromName: name,
	    ReplyAddress : email,
	    Subject : subject,
	    Body : body
	}).then(function(message) {
		console.log(message);

		if(message == "OK") {
			$(".contact-message").html("Your message was succesfully sent!");
	  	} else {
			$("#submit").prop("disabled", false);
	  		$(".contact-message").html("There was an error sending your message: " + message);
	  	}
	});
});

String.prototype.replaceAll = function(search, replace){
   return this.replace(new RegExp(search, 'g'), replace)
}

autosize($('textarea'));