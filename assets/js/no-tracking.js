// console.log("hello");

// XMLHttpRequest.prototype.send = function() {
// 	console.log("blocking request...");
// 	console.log(this);
// 	console.log(this.url);
//   return true;
// }

// used for POWR
window.CookieControl = false;

// if(!document.__defineGetter__) {
// 	Object.defineProperty(document, 'cookie', {
// 	    get: function(){ 
// 	    	console.log("try getting cookie");
// 	    return ''},
// 	    set: function(){

// 	    	console.log("try setting cookie");
// 	    	return true},
// 	});
// } else {
//     document.__defineGetter__("cookie", function() { 
// 	    	console.log("try getting cookie");
// 	    	return '';} );
//     document.__defineSetter__("cookie", function() {
// 	    	console.log("try setting cookie");
// 	    } );
// }