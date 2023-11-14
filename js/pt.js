$(function () {
  var total_PackingTape = function () {
    var sum = 0;
    var option = $(".option").val();
    var totalBoxPT = 0;
    var totalRollPT = 0;

    $(".boxPackingTape").each(function () {
      var boxPT = $(this).val().replace(",", "");
      if (option == "dua_belas") {
        sum += parseFloat(boxPT) * 12;
      } else {
        sum += parseFloat(boxPT) * 20;
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
    Number($("#qtyPT").text(totalBoxPT + " / " + totalRollPT));
  };

  $("#savePackingTape").on("click", function () {
    total_PackingTape();
  });
});
