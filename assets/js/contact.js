$("#contact-form").submit(function (e) {
	e.preventDefault();

	let name = $("input[name=name]").val();
	let email = $("input[name=email]").val();
	let subject = $("input[name=subject]").val();
	var body = $("textarea[name=message]").val();

	console.log("sending email...");
	$(".contact-message").html("");
	$("#submit").prop("disabled", true);

	body = body.replaceAll("\n", "<br>");

	Email.send({
		SecureToken : "eefa562b-a935-49a5-a1b3-732c2bab5796",
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

String.prototype.replaceAll = function(search, replace){
   return this.replace(new RegExp(search, 'g'), replace)
}

autosize($('textarea'));