//7kyu Square Every Digit
function squareDigits(num) {
    let numSQ = num.toString().split('').map(x => x**2).join('')
    return Number(numSQ)
  }
  //test squareDigits(3212)