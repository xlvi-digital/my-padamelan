$(function () {
  var total_lemAdtek = function () {
    var sum = 0;
    var totalSakAdtex = 0;
    var totalKgAdtex = 0;

    $(".sakLemAdtek").each(function () {
      var saklemAdtek = $(this).val().replace(",", "");
      if (saklemAdtek != 0) {
        sum += parseFloat(saklemAdtek) * 25;
        totalSakAdtex += Number(saklemAdtek);
      }
    });
    $(".kgLemAdtek").each(function () {
      var kglemAdtek = $(this).val().replace(",", "");
      if (kglemAdtek != 0) {
        sum += parseFloat(kglemAdtek);
        totalKgAdtex += Number(kglemAdtek);
      }
    });
    $("#totalLemKarton").text(sum.toLocaleString("en-US"));
    $("#qtyLemKarton").text(totalSakAdtex + " (Sak) " + totalKgAdtex + " (Kg)");
  };
  $("#saveLemKarton").on("click", function () {
    total_lemAdtek();
  });
});
