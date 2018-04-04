c
function rot13(str) { // LBH QVQ VG!
  charcodes = [];
  decode = [];
  for (var i = 0; i < str.length; i++) {
    charcodes.push(str.charCodeAt(i));
  }

  for (var j = 0; j < charcodes.length; j++) {

    if (charcodes[j] != 32 || charcodes <= 90 || charcodes >= 65) {
      if (charcodes[j] <= 77) {
        charcodes[j] = charcodes[j] + 13;
      }
      else {
        charcodes[j] = charcodes[j] - 13;
      }

    }
}

  for (var k = 0; k < charcodes.length; k++) {
    decode.push(String.fromCharCode(charcodes[k]));
  }

  decode = decode.join("");
  console.log(decode);

}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
