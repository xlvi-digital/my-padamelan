function tambahKrj() {
  // $("#awalKeranjang").clone().appendTo($("#keranjang"));

  var newElement = $("<input>").attr("type", "text").val("").addClass("form-control mb-2 keranjang").attr("placeholder", "0"); // Nilainya diatur menjadi kosong

  // Tempelkan elemen baru ke dalam elemen dengan id "pcs"
  $("#keranjang").append(newElement);
}

function tambahPcs() {
  var newElement = $("<input>").attr("type", "text").val("").addClass("form-control mb-2 pcs").attr("placeholder", "0"); // Nilainya diatur menjadi kosong

  // Tempelkan elemen baru ke dalam elemen dengan id "pcs"
  $("#pcs").append(newElement);
}

function tambahCap() {
  $("#awalPalletCap").clone().appendTo($("#palletCap"));
}

function tambahBoxCap() {
  $("#awalbox").clone().appendTo($("#boxCap"));
}
function tambahHandleGrip() {
  $("#awalPalletHandleGrip").clone().appendTo($("#palletHandleGrip"));
}

function tambahBoxHandleGrip() {
  $("#awalbox").clone().appendTo($("#boxHandleGrip"));
}

function tambahlabelReg() {
  $("#awallabelReg").clone().appendTo($("#akhirlabelReg"));
}

function tambahRollLabelReg() {
  $("#awalrollLabel").clone().appendTo($("#rollLabel"));
}

function tambahlabelExp() {
  $("#awallabelExp").clone().appendTo($("#akhirlabelExp"));
}
function tambahRollLabelExp() {
  $("#awalrollLabelExp").clone().appendTo($("#rollLabelExp"));
}

function tambahLemAMDK() {
  $("#awalLemAMDK").clone().appendTo($("#akhirLemAMDK"));
}

function tambahKgLemAMDK() {
  $("#awalkglemAMDK").clone().appendTo($("#kgLemAMDK"));
}
function tambahLemKarton() {
  $("#awalLemKarton").clone().appendTo($("#akhirLemKarton"));
}

function tambahKgLemKarton() {
  $("#awalkglemKarton").clone().appendTo($("#kgLemKarton"));
}

function tambahCapseal() {
  $("#awalCapseal").clone().appendTo($("#akhirCapseal"));
}

function tambahRollCapseal() {
  $("#awalrollCapseal").clone().appendTo($("#rollCapseal"));
}

function tambahPackingTape() {
  $("#awalPackingTape").clone().appendTo($("#akhirPackingTape"));
}
function tambahRollPackingTape() {
  $("#awalrollPackingTape").clone().appendTo($("#rollPackingTape"));
}

function tambahPromo() {
  $("#awalPromo").clone().appendTo($("#akhirPromo"));
}
function tambahLbrPromo() {
  $("#awallbrPromo").clone().appendTo($("#lbrPromo"));
}

function tambahReguler() {
  $("#awalReguler").clone().appendTo($("#akhirReguler"));
}
function tambahLbrReguler() {
  $("#awallbrReguler").clone().appendTo($("#lbrReguler"));
}

function tambahphillReguler() {
  $("#awalphillReguler").clone().appendTo($("#akhirphillReguler"));
}
function tambahLbrphillReguler() {
  $("#awallbrphillReguler").clone().appendTo($("#lbrphillReguler"));
}
