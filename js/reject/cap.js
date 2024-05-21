$(function () {
  var total_Cap = function () {
    var kg = 0;
    var pcs = 0;
    var jenis = $("#jenis").val();
    var totalPcsCap = 0;
    var totalpcs = 0;

    $(".Cap").each(function () {
      var Cap = $(this).val().replace(",", "");
      // alert(option)
      if (Cap != 0 && jenis == "5000") {
        kg += (Cap * 1000) / 3.2;
      } else {
        kg += (Cap * 1000) / 1.81;
      }

      // totalKgCap += parseFloat(sum);
      totalPcsCap += Number(Cap);
    });

    $(".PcsCap").each(function () {
      var PcsCap = $(this).val().replace(",", "");
      // alert(option)
      if (PcsCap != 0 && jenis == "5000") {
        pcs += (PcsCap * 3.2) / 1000;
      } else {
        pcs += (PcsCap * 1.81) / 1000;
      }

      // totalKgCap += parseFloat(sum);
      totalpcs += Number(PcsCap);
    });
    var roundedPcs = pcs.toFixed(2);
    var roundedKg = Math.round(kg);

    $("#dataPcsCap").text(roundedPcs + "/" + totalpcs);
    $("#dataKgCap").text(totalPcsCap + " Kg / " + roundedKg + " Pcs");
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
function tambahPcsCap() {
  var newElement = $("<input>").attr("type", "number").val("").addClass("form-control mb-2 PcsCap").attr("placeholder", "0"); // Nilainya diatur menjadi kosong

  // Tempelkan elemen baru ke dalam elemen dengan id "palletPcsCap"
  $("#akhirPcsCap").append(newElement);
}
