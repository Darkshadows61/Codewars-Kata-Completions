//8kyu Basic Mathematical Operations
function basicOp(operation, value1, value2) {
    if (operation === '+') {
      return value1 + value2
    } else if (operation === '-') {
      return value1 - value2
    } else if (operation === '*') {
      return value1 * value2
    } else if (operation === '/') {
      return value1/value2
    }
  }
  //test basicOp('+', 4, 7)