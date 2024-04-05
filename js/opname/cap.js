$(function () {
  var total_cap = function () {
    var sumCap = 0;
    var qtyCap = parseFloat($(".jenisCap").val().replace(",", "")); // Menggunakan parseFloat untuk mengonversi nilai ke angka
    var totalPalletCap = 0;
    var totalBoxCap = 0;

    $(".palletCap").each(function () {
      var palletCap = parseFloat($(this).val().replace(",", ""));
      if (!isNaN(palletCap)) {
        // Memeriksa apakah palletCap adalah angka yang valid
        if (qtyCap == 3600) {
          sumCap += palletCap * 72000;
        } else {
          sumCap += palletCap * 43000;
        }
        totalPalletCap += Number(palletCap);
      }
    });

    $(".box").each(function () {
      var boxCap = parseFloat($(this).val().replace(",", ""));
      if (!isNaN(boxCap)) {
        // Memeriksa apakah boxCap adalah angka yang valid
        if (qtyCap == 3600) {
          sumCap += boxCap * 3600;
        } else {
          sumCap += boxCap * 2150;
        }
        totalBoxCap += Number(boxCap);
      }
    });

    if (!isNaN(sumCap)) {
      // Memeriksa apakah sumCap adalah angka yang valid sebelum menampilkan
      $("#totalCap").text(sumCap.toLocaleString("en-US"));
      $("#qtyCap").text(totalPalletCap + " pallet , " + totalBoxCap + " Box");
    } else {
      $("#totalCap").text("Invalid input");
    }
  };

  $("#saveCap").on("click", function () {
    total_cap();
  });
});
