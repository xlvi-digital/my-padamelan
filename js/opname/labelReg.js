$(function () {
  var total_labelReg = function () {
    var sum = 0;
    var jenisLabel = parseFloat($(".jenisLabel").val().replace(",", ""));
    var totalBoxLabel = 0;
    var totalRollLabel = 0;

    $(".boxLabel").each(function () {
      var boxLabel = $(this).val().replace(",", "");
      if (!isNaN(boxLabel)) {
        if (jenisLabel == "2") {
          sum += parseFloat(boxLabel) * 2;
        } else if (jenisLabel == "3") {
          sum += parseFloat(boxLabel) * 3;
        } else if (jenisLabel == "4") {
          sum += parseFloat(boxLabel) * 4;
        } else {
          sum += parseFloat(boxLabel) * 6;
        }
        totalBoxLabel += Number(boxLabel);
      }
    });
    $(".rollLabel").each(function () {
      var rollLabel = $(this).val().replace(",", "");
      if (!isNaN(rollLabel)) {
        if (rollLabel != 0) {
          sum += parseFloat(rollLabel);
          totalRollLabel += Number(rollLabel);
        }
      }
    });

    if (!isNaN(sum)) {
      $("#totalLabelReg").text(sum.toLocaleString("en-US"));
      $("#qtyLabelReg").text(totalBoxLabel + " (Box) " + totalRollLabel + " (Roll)");
    } else {
      $("#totalLabelReg").text("Invalid input");
    }
  };

  $("#savelabelReg").on("click", function () {
    total_labelReg();
  });
});
