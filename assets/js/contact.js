import { getFunctions, httpsCallable, connectFunctionsEmulator } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-functions.js'
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js'

const firebaseConfig = {
  apiKey: "AIzaSyA44yyupKssfkBKsbbmq2h_X7a0vgNzFUE",
  authDomain: "fonoflow-firebase.firebaseapp.com",
  projectId: "fonoflow-firebase",
  storageBucket: "fonoflow-firebase.firebasestorage.app",
  messagingSenderId: "298854463377",
  appId: "1:298854463377:web:b2b7d4970c187dee13cc30"
};

const app = initializeApp(firebaseConfig);
const functions = getFunctions();
// connectFunctionsEmulator(functions, "192.168.1.132", 5001);

$("#contact-form").submit(function (e) {
	e.preventDefault();
	$("#submit").prop("disabled", true);

	let name = $("input[name=name]").val();
	let email = $("input[name=email]").val();
	let subject = $("input[name=subject]").val();
	var message = $("textarea[name=message]").val();
	var platform = getOS();
	let fromEmail = "contact-form@raduvarga.com";
	let toEmail = "contact@raduvarga.com";

	console.log("sending email...");

	let data = {name, email, topic: "Other", subject, message, platform, fromEmail, toEmail};

    httpsCallable(functions, 'sendContactEmail')(data)
      .then(function(result) {
        console.log(result);
        $(".contact-message").html("Your message was succesfully sent!");
      }).catch(function (error){
        	console.log(error);
			$("#submit").prop("disabled", false);
	  		$(".contact-message").html("There was an error sending your message: " + error.message);
      });
});

function obfuscateEmail(user, domain) {
	return user + "@" + domain;
}

String.prototype.replaceAll = function(search, replace){
   return this.replace(new RegExp(search, 'g'), replace)
}

autosize($('textarea'));