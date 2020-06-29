$("#contact-form").submit(function (e) {
	e.preventDefault();

	let name = $("input[name=name]").val();
	let email = $("input[name=email]").val();
	let subject = $("input[name=subject]").val();
	let body = $("textarea[name=message]").val();

	console.log("sending email...");
	$(".contact-message").html("");
	$("#submit").prop("disabled", true);

	Email.send({
		SecureToken : "62b91dc8-18f3-43bc-9531-f6b90c6e8a7d",
	    To : "contact@raduvarga.com",
	    From : "contact-form@raduvarga.com",
	    FromName: name,
	    ReplyAddress : email,
	    Subject : subject,
	    Body : body
	}).then(function(message) {
		console.log(message);
		$("#submit").prop("disabled", false);

		if(message == "OK") {
			$(".contact-message").html("Your message was succesfully sent!");
  	} else {
  		$(".contact-message").html("There was an error sending your message: " + message);
  	}
	});
});
