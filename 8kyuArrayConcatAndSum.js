//8kyu Array Concat and Sum
function arrayPlusArray(arr1, arr2) {
    let newArr =  arr1.concat(arr2)
    const initial = 0;
    const sum = newArr.reduce((a,t) => a + t,initial)
    return sum
    }
  //test arrayPlusArray([1, 2, 3], [4, 5, 6]), 21)