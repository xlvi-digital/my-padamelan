$(function () {
  var total_Fresh = function () {
    var sum = 0;
    var jenis = $("#jenis").val();
    var totalPcsFresh = 0;
    var totalpcs = 0;

    $(".Fresh").each(function () {
      var Fresh = $(this).val().replace(",", "");
      // alert(option)
      if (Fresh != 0 && jenis == "330") {
        sum += (Fresh * 1000) / 11.3;
      } else if (jenis == "600") {
        sum += (Fresh * 1000) / 14.5;
      } else if (jenis == "1500") {
        sum += (Fresh * 1000) / 27;
      } else {
        sum += (Fresh * 1000) / 100;
      }

      // totalKgFresh += parseFloat(sum);
      totalPcsFresh += Number(Fresh);
    });

    $("#dataKgFresh").text(totalPcsFresh);
    $("#dataPcsFresh").text(Math.round(sum));
    // $("#totalPreform").text(sum.toLocaleString("en-US"));
  };

  $("#fresh").on("click", function () {
    total_Fresh();
  });
  $("#jenis").on("click", function () {
    total_Fresh();
  });
});

function tambahFresh() {
  var newElement = $("<input>").attr("type", "number").val("").addClass("form-control mb-2 Fresh").attr("placeholder", "0"); // Nilainya diatur menjadi kosong

  // Tempelkan elemen baru ke dalam elemen dengan id "palletCap"
  $("#akhirFresh").append(newElement);
}
