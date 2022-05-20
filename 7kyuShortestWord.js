//7kyu shortest word
function findShort(s) {
    let word = s.split(" ")
    let min = word.map(word => word.length).sort((a,b) => a-b)
    return min[0]
  }
  //test findShort('bitcoin may small after all) returns 3