$(function () {
  var total_Capseal = function () {
    var sum = 0;
    var totalBoxCapseal = 0;
    var totalRollCapseal = 0;

    $(".boxCapseal").each(function () {
      var boxCapseal = $(this).val().replace(",", "");
      if (boxCapseal != 0) {
        sum += parseFloat(boxCapseal) * 3;
        totalBoxCapseal += Number(boxCapseal);
      }
    });
    $(".rollCapseal").each(function () {
      var rollCapseal = $(this).val().replace(",", "");
      if (rollCapseal != 0) {
        sum += parseFloat(rollCapseal);
        totalRollCapseal += Number(rollCapseal);
      }
    });
    $("#totalCapseal").text(sum.toLocaleString("en-US"));
    $("#qtyCapseal").text(totalBoxCapseal + " (Box) " + totalRollCapseal + " (Roll)");
  };

  $("#saveCapseal").on("click", function () {
    total_Capseal();
  });
});
