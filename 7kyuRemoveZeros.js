//7kyu remove zeros
function moveZer0s(arr) {
    arr1 = arr.filter(zero => zero != 0);
    arr2 = arr.filter(zero => zero === 0);
    return arr1.concat(arr2)
  }
  //test moveZeros([1,2,0,1,0,1,0,3,0,1])