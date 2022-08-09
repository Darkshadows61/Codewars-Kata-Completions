//7kyu You're a square!
function isSquare(n) {
    if (n < 0) {
      return false //`${n}: Negative numbers cannot be square numbers`
    } else if (Number.isInteger(Math.sqrt(n))) {
      return true //`${n} is a square number (${n} * ${n})`
    } else {
      return false //`${n} is not a square number`
    }
  }
  //test isSquare(25), true