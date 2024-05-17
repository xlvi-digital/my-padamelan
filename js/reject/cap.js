$(function () {
  var total_Cap = function () {
    var sum = 0;
    var jenis = $("#jenis").val();
    var totalPcsCap = 0;
    var totalpcs = 0;

    $(".Cap").each(function () {
      var Cap = $(this).val().replace(",", "");
      // alert(option)
      if (Cap != 0 && jenis == "5000") {
        sum += (Cap * 1000) / 3.2;
      } else {
        sum += (Cap * 1000) / 1.81;
      }

      // totalKgCap += parseFloat(sum);
      totalPcsCap += Number(Cap);
    });

    $("#dataKgCap").text(totalPcsCap);
    $("#dataPcsCap").text(Math.round(sum));
    // $("#totalPreform").text(sum.toLocaleString("en-US"));
  };

  $("#Cap").on("click", function () {
    total_Cap();
  });
  $("#jenis").on("click", function () {
    total_Cap();
  });
});

function tambahCap() {
  var newElement = $("<input>").attr("type", "number").val("").addClass("form-control mb-2 Cap").attr("placeholder", "0"); // Nilainya diatur menjadi kosong

  // Tempelkan elemen baru ke dalam elemen dengan id "palletCap"
  $("#akhirCap").append(newElement);
}
