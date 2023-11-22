$(function () {
  var total_PhillReguler = function () {
    var sum = 0;
    var option = Number($(".qty-PhillReguler").val().replace(",", ""));
    var totalpalletPhillReguler = 0;
    var totallbrPhillReguler = 0;

    $(".palletPhillReguler").each(function () {
      var palletPhillReguler = Number($(this).val().replace(",", ""));
      if (!isNaN(palletPhillReguler)) {
        // Memeriksa apakah palletPhillReguler adalah angka yang valid
        if (option == 150) {
          sum += palletPhillReguler * 150;
        } else if (option == 550) {
          sum += palletPhillReguler * 550;
        } else if (option == 800) {
          sum += palletPhillReguler * 800;
        } else {
          sum += palletPhillReguler * 1000;
        }
        totalpalletPhillReguler += Number(palletPhillReguler);
      }
    });
    $(".lbrPhillReguler").each(function () {
      var lbrPhillReguler = $(this).val().replace(",", "");
      if (lbrPhillReguler != 0) {
        sum += parseFloat(lbrPhillReguler);
        totallbrPhillReguler += Number(lbrPhillReguler);
      }
    });
    $("#totalPhillReguler").text(sum.toLocaleString("en-US"));
    $("#qtyPhillReguler").text(totalpalletPhillReguler + " (Pallet) " + totallbrPhillReguler + " (Lembar)");
  };

  $("#savePhillReguler").on("click", function () {
    total_PhillReguler();
  });
});
