$(function () {
  var total_phillReguler = function () {
    var sum = 0;
    var option = Number($(".qty-phill").val().replace(",", ""));
    var totalpalletphillReguler = 0;
    var totallbrphillReguler = 0;

    $(".palletphillReguler").each(function () {
      var palletphillReguler = Number($(this).val().replace(",", ""));
      if (!isNaN(palletphillReguler)) {
        // Memeriksa apakah palletphillReguler adalah angka yang valid
        if (option == 150) {
          sum += palletphillReguler * 150;
        } else if (option == 550) {
          sum += palletphillReguler * 550;
        } else if (option == 800) {
          sum += palletphillReguler * 800;
        } else {
          sum += palletphillReguler * 1000;
        }
        totalpalletphillReguler += Number(palletphillReguler);
      }
    });
    $(".lbrphillReguler").each(function () {
      var lbrphillReguler = $(this).val().replace(",", "");
      if (lbrphillReguler != 0) {
        sum += parseFloat(lbrphillReguler);
        totallbrphillReguler += Number(lbrphillReguler);
      }
    });
    $("#totalphillReguler").text(sum.toLocaleString("en-US"));
    $("#qtyPhillReguler").text(totalpalletphillReguler + " (Pallet) " + totallbrphillReguler + " (Lembar)");
  };

  $("#savephillReguler").on("click", function () {
    total_phillReguler();
  });
});
