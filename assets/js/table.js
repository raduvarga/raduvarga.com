// redirect event
$(".clickable-row").on('click', function (e, row, el) {
	console.log(e);
	console.log(e.currentTarget);
	console.log($(this));
  var redirectWindow = window.open($(this).attr('href'), $(this).attr("target"));
  redirectWindow.location;
});

$("#tableSearch").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("table tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });