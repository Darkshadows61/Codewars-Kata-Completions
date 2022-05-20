//8kyu Find the first non-consecutive number
firstNonConsecutive = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
      const num = arr[i] + 1
      const consecutive = arr[i + 1]
      if (num !== consecutive) return consecutive
      }
    return null
    }
  //test firstNonConsecutive([1,2,3,4,6,7,8])