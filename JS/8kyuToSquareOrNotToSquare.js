//8kyu to square or not to square
function squareOrSquareRoot(array) {
    let arr = array
    for (i = 0; i < array.length; i++){
      if (Number.isInteger(Math.sqrt(arr[i])) ){
        arr[i] = Math.sqrt(arr[i])
      } 
      else {
        arr[i] = arr[i] * arr[i] 
      }
    } return arr;  
  }
  //test squareOrSquareRoot([ 4, 3, 9, 7, 2, 1 ])