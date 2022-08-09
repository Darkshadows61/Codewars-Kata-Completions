//7kyu descending order string
function descendingOrder(n){
    newArr = n.toString().split('').sort().reverse().join('')
    return Number(newArr)
  }
  //test descendingOrder(123465) = 654321