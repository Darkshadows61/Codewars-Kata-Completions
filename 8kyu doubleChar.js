//8kyu double char
function doubleChar(str) {
    return str.split("").map(e => e+e).join('')
  }
//test doubleChar("abcd")