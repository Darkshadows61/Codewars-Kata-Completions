//8kyu isDivisible
function isDivisible(n, x, y) {
  if (n%x == 0 && n%y == 0) {
    return true
  } else {
    return false
  }
}
  //test isDivisible(3,3,4) === false
  