//7kyu array Adder
function arrAdder(arr) {
    sent = "";
    for (i = 0; i < arr[0].length; i++) {
      for ( j = 0; j < arr.length; j++) {
        sent+=arr[j][i]
      }
      sent+=" ";
    }
    return sent.trim()
  }
  // test arrAdder([['J','L','L','M'],['u','i','i','a'],['s','v','f','n'],['t','e','e','']])