$("#contact-form").submit(function (e) {
	e.preventDefault();
	$("#submit").prop("disabled", true);

	let name = $("input[name=name]").val();
	let email = $("input[name=email]").val();
	let subject = $("input[name=subject]").val();
	var body = $("textarea[name=message]").val();

	console.log("sending email...");
	$(".contact-message").html("");

	body += "\n\n--------------\nSent from: " + getOS(); 

	body = body.replaceAll("\n", "<br>");

	// https://smtpjs.com/

	Email.send({
		 SecureToken : "819aa641-c445-4bc6-963a-1bd8bd4347dc",
	    To : obfuscateEmail("contact", "raduvarga.com"),
	    From : obfuscateEmail("contact-form", "raduvarga.com"),
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

function obfuscateEmail(user, domain) {
	return user + "@" + domain;
}

String.prototype.replaceAll = function(search, replace){
   return this.replace(new RegExp(search, 'g'), replace)
}

autosize($('textarea'));