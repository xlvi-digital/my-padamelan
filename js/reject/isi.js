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
      } else if (jenis == "3000") {
        kg += (preform * 1000) / 54;
      } else {
        kg += (Isi * 1000) / 100;
      }

      // totalKgIsi += parseFloat(sum);
      totalPcsIsi += Number(Isi);
    });

    $(".PcsIsi").each(function () {
      var PcsIsi = $(this).val().replace(",", "");
      // alert(option)
      if (PcsIsi != 0 && jenis == "330") {
        pcs += (PcsIsi * 11.3) / 1000;
      } else if (jenis == "600") {
        pcs += (PcsIsi * 14.5) / 1000;
      } else if (jenis == "1500") {
        pcs += (PcsIsi * 27) / 1000;
      } else {
        pcs += (PcsIsi * 100) / 1000;
      }

      // totalKgIsi += parseFloat(sum);
      totalpcs += Number(PcsIsi);
    });

    var roundedPcs = pcs.toFixed(2);
    var roundedKg = Math.round(kg);

    $("#dataPcsIsi").text(roundedPcs + "/" + totalpcs);
    $("#dataKgIsi").text(totalPcsIsi + " Kg / " + roundedKg + " Pcs");
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
  var newElement = $("<input>").attr("type", "number").val("").addClass("form-control mb-2 PcsIsi").attr("placeholder", "0"); // Nilainya diatur menjadi kosong

  // Tempelkan elemen baru ke dalam elemen dengan id "palletCap"
  $("#akhirPcsIsi").append(newElement);
}
