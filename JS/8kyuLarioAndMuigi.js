//8kyu Lario and Muigi Pipes; Add 1 to an array value then concatenate. The acutal Kata wanted more than this.
function pipeFix(numbers){
    let newNumbers = numbers.map(x => x + 1)
    return numbers.concat(newNumbers).sort()
  }
  //test pipeFix([1,3,5,7])