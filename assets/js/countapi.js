let counterHitUrl = "https://api.countapi.xyz/hit/raduvarga.com/";
let counterGetUrl = "https://api.countapi.xyz/get/raduvarga.com/";

$(".download-btn").on("click", function (e) {
  console.log('download');

  if (isLocalhost()) {
    let $counter = $(this);
    let counterKey = $counter.attr("counter-key");

    if (counterKey && counterKey != "") {
      $.ajax({url: counterHitUrl + counterKey,
        success: function(result) {
          $("p[counter-key=" + counterKey + "]").html(numberWithCommas(result.value));
      }});
    }
  }
});

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function refreshCounters() {

  let $counters = $(".title-download").find(".counter");
  
  $counters.each(function(e) {
    let $counter = $(this);
    let counterKey = $counter.attr("counter-key");
    // $counter.html("0");

     $.ajax({url: counterGetUrl + counterKey, 
      success: function(result){
        $counter.html(numberWithCommas(result.value));
    }});
  });
}

function refeshDownloadBtns() {
  $btns = $(".download-btn");

  $btns.each(function() {
    let $btn = $(this);

    if(($btn.hasClass("windows") && isWindows()) ||
       !$btn.hasClass("windows") && !isWindows()) {
      $btn.addClass("selected");
    } else {
      $btn.removeClass("selected");
    }
  });
}

refreshCounters();
refeshDownloadBtns();