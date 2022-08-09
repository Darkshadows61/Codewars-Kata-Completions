//7kyu Nice Array: if the values in the array are n-1 or n+1, is nice
const isNice = (arr) => {
    if (arr.length <= 0) {
      return false
    }
    const result = arr.every(item => {
      return arr.some(current => {
        return item === current+1 || item === current -1;
      });
    });
    
    console.log("Result:", result);
    return result
  }
  //test inNice([2,10,9,3], true)