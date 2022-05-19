//5kyu Moving Zeros To The End
function moveZeros(arr) {
    let zeros = 0;
    for (i = 0; i <= arr.length; i++) {
      let isZero = arr[i] === 0
        if (isZero) {
          zeros++
          arr.splice(i,1)
          i--
        }
    }
    for (let i = 0; i < zeros; i++) {
      arr.push(0)
    }
    return arr
  }
  //test moveZeros([1,2,0,1,0,1,0,3,0,1])