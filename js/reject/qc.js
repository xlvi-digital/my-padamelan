$(function () {
  var total_QC = function () {
    var sum = 0;
    var jenis = $("#jenis").val();
    var totalPcsQC = 0;
    var totalpcs = 0;

    $(".QC").each(function () {
      var QC = $(this).val().replace(",", "");
      // alert(option)
      if (QC != 0 && jenis == "5000") {
        sum += (QC * 1000) / 3.2;
      } else {
        sum += (QC * 1000) / 1.81;
      }

      // totalKgQC += parseFloat(sum);
      totalPcsQC += Number(QC);
    });

    $("#dataKgQC").text(totalPcsQC);
    $("#dataPcsQC").text(Math.round(sum));
    // $("#totalPreform").text(sum.toLocaleString("en-US"));
  };

  $("#QC").on("click", function () {
    total_QC();
  });
  $("#jenis").on("click", function () {
    total_QC();
  });
});

function tambahQC() {
  var newElement = $("<input>").attr("type", "number").val("").addClass("form-control mb-2 QC").attr("placeholder", "0"); // Nilainya diatur menjadi kosong

  // Tempelkan elemen baru ke dalam elemen dengan id "palletQC"
  $("#akhirQC").append(newElement);
}
