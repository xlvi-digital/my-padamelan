$(function () {
  var total_Fresh = function () {
      var kg = 0;
      var pcs = 0;
      var jenis = $("#jenis").val();
      var totalPcsFresh = 0;
      var totalpcs = 0;

      $(".Fresh").each(function () {
          var Fresh = $(this).val().replace(",", "");
          // alert(option)
          if (Fresh != 0 && jenis == "330") {
              kg += (Fresh * 1000) / 11.3;
          } else if (jenis == "600") {
              kg += (Fresh * 1000) / 14.5;
          } else if (jenis == "1500") {
              kg += (Fresh * 1000) / 27;
          } else if (jenis == "3000") {
              kg += (preform * 1000) / 54;
          } else {
              kg += (Fresh * 1000) / 100;
          }

          // totalKgFresh += parseFloat(sum);
          totalPcsFresh += Number(Fresh);
      });

      $(".PcsFresh").each(function () {
          var PcsFresh = $(this).val().replace(",", "");
          // alert(option)
          if (PcsFresh != 0 && jenis == "330") {
              pcs += (PcsFresh * 11.3) / 1000;
          } else if (jenis == "600") {
              pcs += (PcsFresh * 14.5) / 1000;
          } else if (jenis == "1500") {
              pcs += (PcsFresh * 27) / 1000;
          } else {
              pcs += (PcsFresh * 100) / 1000;
          }

          // totalKgFresh += parseFloat(sum);
          totalpcs += Number(PcsFresh);
      });

      var roundedPcs = pcs.toFixed(2);
      var roundedKg = Math.round(kg);

      $("#dataPcsFresh").text(roundedPcs + "/" + totalpcs);
      $("#dataKgFresh").text(totalPcsFresh + " Kg / " + roundedKg + " Pcs");
  };

  $("#fresh").on("click", function () {
      total_Fresh();
  });
  $("#jenis").on("click", function () {
      total_Fresh();
  });
});

function tambahFresh() {
  var newElement = $("<input>")
      .attr("type", "number")
      .val("")
      .addClass("form-control mb-2 Fresh")
      .attr("placeholder", "0"); // Nilainya diatur menjadi kosong

  // Tempelkan elemen baru ke dalam elemen dengan id "palletCap"
  $("#akhirFresh").append(newElement);
}
function tambahPcsFresh() {
  var newElement = $("<input>")
      .attr("type", "number")
      .val("")
      .addClass("form-control mb-2 PcsFresh")
      .attr("placeholder", "0"); // Nilainya diatur menjadi kosong

  // Tempelkan elemen baru ke dalam elemen dengan id "palletCap"
  $("#akhirPcsFresh").append(newElement);
}
