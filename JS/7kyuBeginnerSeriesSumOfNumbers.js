//7kyu Beginner Series Sum of Numbers
function getSum (a,b) {
    let min = Math.min(a,b)
    let max = Math.max(a,b)
    return (max - min + 1) * (min + max) / 2;
  }
  //test getSum(5,0) === 15