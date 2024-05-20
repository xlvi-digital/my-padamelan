$(function () {
  var total_Reguler = function () {
    var sum = 0;
    var jenis = $("#jenis").val();
    var totalPcsReguler = 0;
    var totalpcs = 0;

    $(".Reguler").each(function () {
      var Reguler = $(this).val().replace(",", "");
      // alert(option)
      if (Reguler != 0) {
        sum += Reguler;
      }

      // totalKgReguler += parseFloat(sum);
      totalPcsReguler += Number(Reguler);
    });

    $("#dataPcsReguler").text(totalPcsReguler);
    // $("#totalPreform").text(sum.toLocaleString("en-US"));
  };

  $("#Reguler").on("click", function () {
    total_Reguler();
  });
  $("#jenis").on("click", function () {
    total_Reguler();
  });
});

function tambahReguler() {
  var newElement = $("<input>").attr("type", "number").val("").addClass("form-control mb-2 Reguler").attr("placeholder", "0"); // Nilainya diatur menjadi kosong

  // Tempelkan elemen baru ke dalam elemen dengan id "palletReguler"
  $("#akhirReguler").append(newElement);
}
