$(function () {
  var total_Isi = function () {
    var sum = 0;
    var jenis = $("#jenis").val();
    var totalPcsIsi = 0;
    var totalpcs = 0;

    $(".Isi").each(function () {
      var Isi = $(this).val().replace(",", "");
      // alert(option)
      if (Isi != 0 && jenis == "330") {
        sum += (Isi * 1000) / 11.3;
      } else if (jenis == "600") {
        sum += (Isi * 1000) / 14.5;
      } else if (jenis == "1500") {
        sum += (Isi * 1000) / 27;
      } else {
        sum += (Isi * 1000) / 100;
      }

      // totalKgIsi += parseFloat(sum);
      totalPcsIsi += Number(Isi);
    });

    $("#dataKgIsi").text(totalPcsIsi);
    $("#dataPcsIsi").text(Math.round(sum));
    // $("#totalPreform").text(sum.toLocaleString("en-US"));
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
