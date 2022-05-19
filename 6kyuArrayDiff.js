//6kyu array.diff
function arrayDiff(a,b) {
    return a.filter(x => !b.includes(x))
  }
  //test arrayDiff([1,2,2], [2])