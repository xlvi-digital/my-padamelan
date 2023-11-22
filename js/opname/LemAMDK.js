$(function () {
  var total_LemAMDK = function () {
    var sum = 0;
    var qtyLem = $(".jumlahLemAmdk").val();
    var totalboxAMDK = 0;
    var totalKgAMDK = 0;

    $(".boxLemAMDK").each(function () {
      var boxAMDK = $(this).val().replace(",", "");
      if (qtyLem == "12") {
        sum += parseFloat(boxAMDK) * 12;
      } else {
        sum += parseFloat(boxAMDK) * 20;
      }
      totalboxAMDK += Number(boxAMDK);
    });
    $(".kg").each(function () {
      var kgAMDK = $(this).val().replace(",", "");
      if (kgAMDK != 0) {
        sum += parseFloat(kgAMDK);
        totalKgAMDK += Number(kgAMDK);
      }
    });
    $("#totalLemAMDK").text(sum.toLocaleString("en-US"));
    $("#qtyLemAMDK").text(totalboxAMDK + " (Box) " + totalKgAMDK + " (Kg)");
  };

  $("#saveLemAMDK").on("click", function () {
    total_LemAMDK();
  });
});
