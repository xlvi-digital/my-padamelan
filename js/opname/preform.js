$(function () {
  var total_prefrom = function () {
    var sum = 0;
    var jenis = $("#jenis_preform").val();
    var totalKeranjang = 0;
    var totalpcs = 0;

    $(".keranjang").each(function () {
      var keranjang = $(this).val().replace(",", "");
      // alert(option)
      if (keranjang != 0 && jenis == "330ml") {
        sum += parseFloat(keranjang) * 12960;
      } else if (jenis == "600ml") {
        sum += parseFloat(keranjang) * 9216;
      } else if (jenis == "1500ml") {
        sum += parseFloat(keranjang) * 5976;
      } else if (jenis === "3L") {
        sum += parseFloat(keranjang) * 3840;
      } else {
        sum += parseFloat(keranjang) * 3080;
      }

      totalKeranjang += parseFloat(keranjang);
    });
    $(".pcs").each(function () {
      var pcs = $(this).val().replace(",", "");
      // alert(option)
      if (pcs != 0) {
        sum += parseFloat(pcs);
        totalpcs += Number(pcs);
      }
    });
    $("#qtyPreform").text(totalKeranjang + " Keranjang , " + totalpcs + " pcs");
    $("#totalPreform").text(sum.toLocaleString("en-US"));
  };

  $("#check").on("click", function () {
    total_prefrom();
  });
});
