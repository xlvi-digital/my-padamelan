$(function () {
  var total_Phill = function () {
    var sum = 0;
    var jenis = $("#jenis").val();
    var totalPcsPhill = 0;
    var totalpcs = 0;

    $(".Phill").each(function () {
      var Phill = $(this).val().replace(",", "");
      // alert(option)
      if (Phill != 0) {
        sum += Phill;
      }

      // totalKgPhill += parseFloat(sum);
      totalPcsPhill += Number(Phill);
    });

    $("#dataPcsPhill").text(totalPcsPhill);
    // $("#totalPreform").text(sum.toLocaleString("en-US"));
  };

  $("#Phill").on("click", function () {
    total_Phill();
  });
  $("#jenis").on("click", function () {
    total_Phill();
  });
});

function tambahPhill() {
  var newElement = $("<input>").attr("type", "number").val("").addClass("form-control mb-2 Phill").attr("placeholder", "0"); // Nilainya diatur menjadi kosong

  // Tempelkan elemen baru ke dalam elemen dengan id "palletPhill"
  $("#akhirPhill").append(newElement);
}
