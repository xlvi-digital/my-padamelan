$(function () {
  var total_Isi = function () {
    var kg = 0;
    var pcs = 0;
    var jenis = $("#jenis").val();
    var totalPcsIsi = 0;
    var totalpcs = 0;

    $(".Isi").each(function () {
      var Isi = $(this).val().replace(",", "");
      // alert(option)
      if (Isi != 0 && jenis == "330") {
        kg += (Isi * 1000) / 11.3;
      } else if (jenis == "600") {
        kg += (Isi * 1000) / 14.5;
      } else if (jenis == "1500") {
        kg += (Isi * 1000) / 27;
      } else {
        kg += (Isi * 1000) / 100;
      }

      // totalKgIsi += parseFloat(sum);
      totalPcsIsi += Number(Isi);
    });

    $(".pcsIsi").each(function () {
      var pcsIsi = $(this).val().replace(",", "");
      // alert(option)
      if (pcsIsi != 0 && jenis == "330") {
        pcs += (pcsIsi * 11.3) / 1000;
      } else if (jenis == "600") {
        pcs += (pcsIsi * 14.5) / 1000;
      } else if (jenis == "1500") {
        pcs += (pcsIsi * 27) / 1000;
      } else {
        pcs += (pcsIsi * 100) / 1000;
      }

      // totalKgpcsIsi += parseFloat(sum);
      totalpcs += Number(pcsIsi);
    });
    var roundedPcs = pcs.toFixed(2);
    var roundedKg = Math.round(kg);

    $("#dataPcsIsi").text(roundedPcs + "/" + totalpcs);
    $("#dataKgIsi").text(totalPcsIsi + " Kg / " + roundedKg + " Pcs");

    // $("#totalIsi").text(sum.toLocaleString("en-US"));
  };

  $("#Isi").on("click", function () {
    total_Isi();
  });
  $("#jenis").on("click", function () {
    total_Isi();
  });
});

function tambahIsi() {
  var newElement = $("<input>").attr("type", "number").val("").addClass("form-control mb-2 Isi").attr("placeholder", "0"); // Nilainya diatur menjadi kosong

  // Tempelkan elemen baru ke dalam elemen dengan id "palletCap"
  $("#akhirIsi").append(newElement);
}
function tambahPcsIsi() {
  var newElement = $("<input>").attr("type", "number").val("").addClass("form-control mb-2 pcsIsi").attr("placeholder", "0"); // Nilainya diatur menjadi kosong

  // Tempelkan elemen baru ke dalam elemen dengan id "palletCap"
  $("#akhirPcsIsi").append(newElement);
}
