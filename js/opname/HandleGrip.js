$(function () {
  var total_HandleGrip = function () {
    var sumHandleGrip = 0;
    var totalPalletHG = 0;
    var totalboxHG = 0;

    $(".palletHandleGrip").each(function () {
      var paletHG = $(this).val().replace(",", "");

      if (paletHG != 0) {
        sumHandleGrip += parseFloat(paletHG) * 17280;
        totalPalletHG += Number(paletHG);
      }
    });
    $(".boxHandleGrip").each(function () {
      var boxHG = $(this).val().replace(",", "");
      if (boxHG != 0) {
        sumHandleGrip += parseFloat(boxHG) * 1440;
        totalboxHG += Number(boxHG);
      }
      // alert(option)
    });
    $("#totalHandleGrip").text(sumHandleGrip.toLocaleString("en-US"));
    $("#qtyHG").text(totalPalletHG + " (Pallet) " + totalboxHG + "(Box)");
  };

  $("#saveHandleGrip").on("click", function () {
    total_HandleGrip();
  });
});
