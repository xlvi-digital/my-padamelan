$(function () {
  var total_labelExp = function () {
    var sum = 0;
    var totalBoxExp = 0;
    var totalRollExp = 0;

    $(".boxLabelExp").each(function () {
      var boxLabelExp = $(this).val().replace(",", "");
      if (boxLabelExp != 0) {
        sum += parseFloat(boxLabelExp) * 3;
        totalBoxExp += Number(boxLabelExp);
      }
    });
    $(".rollLabelExp").each(function () {
      var rollLabelExp = $(this).val().replace(",", "");
      if (rollLabelExp != 0) {
        sum += parseFloat(rollLabelExp);
        totalRollExp += Number(rollLabelExp);
      }
    });
    $("#totalLabelExp").text(sum.toLocaleString("en-US"));
    $("#qtyLabelExp").text(totalBoxExp + " (Box) " + totalRollExp + " (Roll)");
  };

  $("#savelabelExp").on("click", function () {
    total_labelExp();
  });
});
