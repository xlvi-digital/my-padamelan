function tambahKrj() {
  // $("#awalKeranjang").clone().appendTo($("#keranjang"));

  var newElement = $("<input>").attr("type", "number").val("").addClass("form-control mb-2 keranjang").attr("placeholder", "0"); // Nilainya diatur menjadi kosong

  // Tempelkan elemen baru ke dalam elemen dengan id "pcs"
  $("#keranjang").append(newElement);
}

function tambahPcs() {
  var newElement = $("<input>").attr("type", "number").val("").addClass("form-control mb-2 pcs").attr("placeholder", "0"); // Nilainya diatur menjadi kosong

  // Tempelkan elemen baru ke dalam elemen dengan id "pcs"
  $("#pcs").append(newElement);
}

function tambahCap() {
  var newElement = $("<input>").attr("type", "number").val("").addClass("form-control mb-2 palletCap").attr("placeholder", "0"); // Nilainya diatur menjadi kosong

  // Tempelkan elemen baru ke dalam elemen dengan id "palletCap"
  $("#palletCap").append(newElement);
  // $("#awalPalletCap").clone().appendTo($("#palletCap"));
}

function tambahBoxCap() {
  var newElement = $("<input>").attr("type", "number").val("").addClass("form-control mb-2 box").attr("placeholder", "0"); // Nilainya diatur menjadi kosong

  // Tempelkan elemen baru ke dalam elemen dengan id "boxCap"
  $("#boxCap").append(newElement);
}
function tambahHandleGrip() {
  var newElement = $("<input>").attr("type", "number").val("").addClass("form-control mb-2 palletHandleGrip").attr("placeholder", "0"); // Nilainya diatur menjadi kosong

  // Tempelkan elemen baru ke dalam elemen dengan id "palletHandleGrip"
  $("#palletHandleGrip").append(newElement);
}

function tambahBoxHandleGrip() {
  var newElement = $("<input>").attr("type", "number").val("").addClass("form-control mb-2 boxHandleGrip").attr("placeholder", "0"); // Nilainya diatur menjadi kosong

  // Tempelkan elemen baru ke dalam elemen dengan id "boxHandleGrip"
  $("#boxHandleGrip").append(newElement);
}

function tambahlabelReg() {
  var newElement = $("<input>").attr("type", "number").val("").addClass("form-control mb-2 boxLabel").attr("placeholder", "0"); // Nilainya diatur menjadi kosong

  // Tempelkan elemen baru ke dalam elemen dengan id "akhirlabelReg"
  $("#akhirlabelReg").append(newElement);
}

function tambahRollLabelReg() {
  var newElement = $("<input>").attr("type", "number").val("").addClass("form-control mb-2 rollLabel").attr("placeholder", "0"); // Nilainya diatur menjadi kosong

  // Tempelkan elemen baru ke dalam elemen dengan id "rollLabel"
  $("#rollLabel").append(newElement);
}

function tambahlabelExp() {
  var newElement = $("<input>").attr("type", "number").val("").addClass("form-control mb-2 boxLabelExp").attr("placeholder", "0"); // Nilainya diatur menjadi kosong

  // Tempelkan elemen baru ke dalam elemen dengan id "akhirlabelExp"
  $("#akhirlabelExp").append(newElement);
}
function tambahRollLabelExp() {
  var newElement = $("<input>").attr("type", "number").val("").addClass("form-control mb-2 rollLabelExp").attr("placeholder", "0"); // Nilainya diatur menjadi kosong

  // Tempelkan elemen baru ke dalam elemen dengan id "rollLabelExp"
  $("#rollLabelExp").append(newElement);
}

function tambahLemAMDK() {
  var newElement = $("<input>").attr("type", "number").val("").addClass("form-control mb-2 boxLemAMDK").attr("placeholder", "0"); // Nilainya diatur menjadi kosong

  // Tempelkan elemen baru ke dalam elemen dengan id "akhirLemAMDK"
  $("#akhirLemAMDK").append(newElement);
}

function tambahKgLemAMDK() {
  var newElement = $("<input>").attr("type", "number").val("").addClass("form-control mb-2 kg").attr("placeholder", "0"); // Nilainya diatur menjadi kosong

  // Tempelkan elemen baru ke dalam elemen dengan id "kgLemAMDK"
  $("#kgLemAMDK").append(newElement);
}
function tambahLemKarton() {
  var newElement = $("<input>").attr("type", "number").val("").addClass("form-control mb-2 sakLemAdtek").attr("placeholder", "0"); // Nilainya diatur menjadi kosong

  // Tempelkan elemen baru ke dalam elemen dengan id "akhirLemKarton"
  $("#akhirLemKarton").append(newElement);
}

function tambahKgLemKarton() {
  var newElement = $("<input>").attr("type", "number").val("").addClass("form-control mb-2 kgLemAdtek").attr("placeholder", "0"); // Nilainya diatur menjadi kosong

  // Tempelkan elemen baru ke dalam elemen dengan id "kgLemKarton"
  $("#kgLemKarton").append(newElement);
}

function tambahCapseal() {
  var newElement = $("<input>").attr("type", "number").val("").addClass("form-control mb-2 boxCapseal").attr("placeholder", "0"); // Nilainya diatur menjadi kosong

  // Tempelkan elemen baru ke dalam elemen dengan id "akhirCapseal"
  $("#akhirCapseal").append(newElement);
}

function tambahRollCapseal() {
  var newElement = $("<input>").attr("type", "number").val("").addClass("form-control mb-2 rollCapseal").attr("placeholder", "0"); // Nilainya diatur menjadi kosong

  // Tempelkan elemen baru ke dalam elemen dengan id "rollCapseal"
  $("#rollCapseal").append(newElement);
}

function tambahPackingTape() {
  var newElement = $("<input>").attr("type", "number").val("").addClass("form-control mb-2 boxPackingTape").attr("placeholder", "0"); // Nilainya diatur menjadi kosong

  // Tempelkan elemen baru ke dalam elemen dengan id "akhirPackingTape"
  $("#akhirPackingTape").append(newElement);
}
function tambahRollPackingTape() {
  var newElement = $("<input>").attr("type", "number").val("").addClass("form-control mb-2 rollPT").attr("placeholder", "0"); // Nilainya diatur menjadi kosong

  // Tempelkan elemen baru ke dalam elemen dengan id "rollPackingTape"
  $("#rollPackingTape").append(newElement);
}

function tambahPromo() {
  var newElement = $("<input>").attr("type", "number").val("").addClass("form-control mb-2 palletPromo").attr("placeholder", "0"); // Nilainya diatur menjadi kosong

  // Tempelkan elemen baru ke dalam elemen dengan id "akhirPromo"
  $("#akhirPromo").append(newElement);
}
function tambahLbrPromo() {
  var newElement = $("<input>").attr("type", "number").val("").addClass("form-control mb-2 lbrPromo").attr("placeholder", "0"); // Nilainya diatur menjadi kosong

  // Tempelkan elemen baru ke dalam elemen dengan id "lbrPromo"
  $("#lbrPromo").append(newElement);
}

function tambahReguler() {
  var newElement = $("<input>").attr("type", "number").val("").addClass("form-control mb-2 palletReguler").attr("placeholder", "0"); // Nilainya diatur menjadi kosong

  // Tempelkan elemen baru ke dalam elemen dengan id "akhirReguler"
  $("#akhirReguler").append(newElement);
}
function tambahLbrReguler() {
  var newElement = $("<input>").attr("type", "number").val("").addClass("form-control mb-2 lbrReguler").attr("placeholder", "0"); // Nilainya diatur menjadi kosong

  // Tempelkan elemen baru ke dalam elemen dengan id "lbrReguler"
  $("#lbrReguler").append(newElement);
}

function tambahPhillReguler() {
  var newElement = $("<input>").attr("type", "number").val("").addClass("form-control mb-2 palletPhillReguler").attr("placeholder", "0"); // Nilainya diatur menjadi kosong

  // Tempelkan elemen baru ke dalam elemen dengan id "akhirPhillReguler"
  $("#akhirPhillReguler").append(newElement);
}
function tambahLbrPhillReguler() {
  var newElement = $("<input>").attr("type", "number").val("").addClass("form-control mb-2 lbrPhillReguler").attr("placeholder", "0"); // Nilainya diatur menjadi kosong

  // Tempelkan elemen baru ke dalam elemen dengan id "lbrPhillReguler"
  $("#lbrPhillReguler").append(newElement);
}
