$(function () {
  var total_Promo = function () {
    var sum = 0;
    var jenis = $("#jenis").val();
    var totalPcsPromo = 0;
    var totalpcs = 0;

    $(".Promo").each(function () {
      var Promo = $(this).val().replace(",", "");
      // alert(option)
      if (Promo != 0) {
        sum += Promo;
      }

      // totalKgPromo += parseFloat(sum);
      totalPcsPromo += Number(Promo);
    });

    $("#dataPcsPromo").text(totalPcsPromo);
    // $("#totalPreform").text(sum.toLocaleString("en-US"));
  };

  $("#Promo").on("click", function () {
    total_Promo();
  });
  $("#jenis").on("click", function () {
    total_Promo();
  });
});

function tambahPromo() {
  var newElement = $("<input>").attr("type", "number").val("").addClass("form-control mb-2 Promo").attr("placeholder", "0"); // Nilainya diatur menjadi kosong

  // Tempelkan elemen baru ke dalam elemen dengan id "palletPromo"
  $("#akhirPromo").append(newElement);
}
