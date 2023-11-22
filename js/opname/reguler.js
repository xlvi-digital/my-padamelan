$(function () {
  var total_Reguler = function () {
    var sum = 0;
    var option = Number($(".qty-Reguler").val().replace(",", ""));
    var totalpalletReguler = 0;
    var totallbrReguler = 0;

    $(".palletReguler").each(function () {
      var palletReguler = Number($(this).val().replace(",", ""));
      if (!isNaN(palletReguler)) {
        // Memeriksa apakah palletReguler adalah angka yang valid
        if (option == 150) {
          sum += palletReguler * 150;
        } else if (option == 550) {
          sum += palletReguler * 550;
        } else if (option == 800) {
          sum += palletReguler * 800;
        } else {
          sum += palletReguler * 1000;
        }
        totalpalletReguler += Number(palletReguler);
      }
    });
    $(".lbrReguler").each(function () {
      var lbrReguler = $(this).val().replace(",", "");
      if (lbrReguler != 0) {
        sum += parseFloat(lbrReguler);
        totallbrReguler += Number(lbrReguler);
      }
    });
    $("#totalReguler").text(sum.toLocaleString("en-US"));
    $("#qtyReguler").text(totalpalletReguler + " (Pallet) " + totallbrReguler + " (Lembar)");
  };

  $("#saveReguler").on("click", function () {
    total_Reguler();
  });
});
