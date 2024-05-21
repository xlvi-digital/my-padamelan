$(function () {
  var total = function () {
    var kg = 0;
    var pcs = 0;
    var jenis = $("#jenis").val();
    var totalPcsPreform = 0;
    var totalpcs = 0;

    $(".preform").each(function () {
      var preform = $(this).val().replace(",", "");
      // alert(option)
      if (preform != 0 && jenis == "330") {
        kg += (preform * 1000) / 11.3;
      } else if (jenis == "600") {
        kg += (preform * 1000) / 14.5;
      } else if (jenis == "1500") {
        kg += (preform * 1000) / 27;
      } else {
        kg += (preform * 1000) / 100;
      }

      // totalKgPreform += parseFloat(sum);
      totalPcsPreform += Number(preform);
    });

    $(".pcsPreform").each(function () {
      var pcsPrefrom = $(this).val().replace(",", "");
      pcsPrefrom = parseFloat(pcsPrefrom) || 0;
      // alert(option)
      if (pcsPrefrom != 0 && jenis == "330") {
        pcs += (pcsPrefrom * 11.3) / 1000;
      } else if (jenis == "600") {
        pcs += (pcsPrefrom * 14.5) / 1000;
      } else if (jenis == "1500") {
        pcs += (pcsPrefrom * 27) / 1000;
      } else {
        pcs += (pcsPrefrom * 100) / 1000;
      }

      // totalKgpcs += parseFloat(sum);
      totalpcs += Number(pcsPrefrom);
      // alert(pcs);
    });

    var roundedPcs = pcs.toFixed(2);
    var roundedKg = Math.round(kg);

    $("#dataPcsPreform").text(roundedPcs + " Kg / " + totalpcs + " Pcs");
    $("#dataKgPreform").text(totalPcsPreform + " Kg / " + roundedKg + " Pcs");

    // $("#totalPreform").text(sum.toLocaleString("en-US"));
  };

  $("#check").on("click", function () {
    total();
  });
  $("#jenis").on("click", function () {
    total();
  });

  total();
});

function tambahPrefrom() {
  var newElement = $("<input>").attr("type", "number").val("").addClass("form-control mb-2 preform").attr("placeholder", "0"); // Nilainya diatur menjadi kosong

  // Tempelkan elemen baru ke dalam elemen dengan id "palletCap"
  $("#akhirPrefrom").append(newElement);
}
function tambahPcsPrefrom() {
  var newElement = $("<input>").attr("type", "number").val("").addClass("form-control mb-2 pcsPreform").attr("placeholder", "0"); // Nilainya diatur menjadi kosong

  // Tempelkan elemen baru ke dalam elemen dengan id "palletCap"
  $("#akhirPcsPrefrom").append(newElement);
}
