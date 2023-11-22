$(function () {
  var total_PackingTape = function () {
    var sum = 0;
    var option = $(".qty-PT").val();
    var totalBoxPT = 0;
    var totalRollPT = 0;

    $(".boxPackingTape").each(function () {
      var boxPT = $(this).val().replace(",", "");
      if (option == "12") {
        sum += parseFloat(boxPT) * 12;
      } else if (option == "20") {
        sum += parseFloat(boxPT) * 20;
      } else {
        sum += parseFloat(boxPT) * 10;
      }
      totalBoxPT += Number(boxPT);
    });
    $(".rollPT").each(function () {
      var rollPT = $(this).val().replace(",", "");
      if (rollPT != 0) {
        sum += parseFloat(rollPT);
        totalRollPT += Number(rollPT);
      }
    });
    Number($("#totalPackingTape").text(sum.toLocaleString("en-US")));
    Number($("#qtyPT").text(totalBoxPT + " (Box) " + totalRollPT + " (Roll)"));
  };

  $("#savePackingTape").on("click", function () {
    total_PackingTape();
  });
});
