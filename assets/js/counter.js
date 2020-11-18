let counterHitUrl = "https://api.countapi.xyz/hit/raduvarga.com/";
let counterGetUrl = "https://api.countapi.xyz/get/raduvarga.com/";

$(".download-btn").on("click", function (e) {
  let counterKey = $(e.currentTarget).attr("counter-key");

  if (counterKey && counterKey != "") {
    $.ajax({url: counterHitUrl + counterKey,
      success: function(result) {
        $(e.currentTarget).next().html(numberWithCommas(result.value));
    }});
  }
});

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function refreshCounter(counterKey) {
  let $counter = $(".title-download").find(".counter[counter-key=" + counterKey + "]");

  // if we are on the counter page
  if ($counter.length > 0) {
    $.ajax({url: counterGetUrl + counterKey, 
      success: function(result){
        $counter.html(numberWithCommas(result.value));
    }});
  }
}

refreshCounter("ua-midi-control-app");