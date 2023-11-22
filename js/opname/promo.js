$(function () {
  var total_Promo = function () {
    var sum = 0;
    var option = Number($(".qty-promo").val().replace(",", ""));
    var totalpalletPromo = 0;
    var totallbrPromo = 0;

    $(".palletPromo").each(function () {
      var palletPromo = Number($(this).val().replace(",", ""));
      if (!isNaN(palletPromo)) {
        // Memeriksa apakah palletPromo adalah angka yang valid
        if (option == 150) {
          sum += palletPromo * 150;
        } else if (option == 800) {
          sum += palletPromo * 800;
        } else {
          sum += palletPromo * 1000;
        }
        totalpalletPromo += Number(palletPromo);
      }
    });
    $(".lbrPromo").each(function () {
      var lbrPromo = $(this).val().replace(",", "");
      if (lbrPromo != 0) {
        sum += parseFloat(lbrPromo);
        totallbrPromo += Number(lbrPromo);
      }
    });
    $("#totalPromo").text(sum.toLocaleString("en-US"));
    $("#qtyPromo").text(totalpalletPromo + " (Promo) " + totallbrPromo + " (Lembar)");
  };

  $("#savePromo").on("click", function () {
    total_Promo();
  });
});
