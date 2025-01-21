import { getFunctions, httpsCallable, connectFunctionsEmulator } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-functions.js'
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js'

const firebaseConfig = {
  apiKey: "AIzaSyCBTuTYo2BggeSrY7ESlxTQhKT59S95yss",
  authDomain: "ua-remote-control.firebaseapp.com",
  projectId: "ua-remote-control",
  storageBucket: "ua-remote-control.firebasestorage.app",
  messagingSenderId: "1085540391736",
  appId: "1:1085540391736:web:8717465561e8113480ffcd",
  measurementId: "G-GZ71MLDYZB"
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