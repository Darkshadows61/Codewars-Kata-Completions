//eloquent JS Chap 4 Example 1 Sum of an Array
range = (start, end) => {
    let newArr = [];
    count = start;
    for (i = 0; i <= end; i++) {
      if (i < ((end+1)-start)) {
        newArr.push(count++)
      }
    }
      let sum = newArr.reduce(
      (previous, current) => previous + current);
      return sum
  }
  //test range(1,10) should = 55
  
  //eloquent JS Chap 4 Example 2 Reversing an Array
  revArr = (arr) => {
  return arr.reverse()
  }
  //test revArr([1,2,3,4,5])
  
  //eloquent JS Chap 4 example 3 A List
  arrayToList = (arr) => {
    let list = {
      value: arr[0],
      rest: {
        value: arr[1],
        rest: {
          value: arr[2],
          rest: null
        }
      }
    }
    return list
  }