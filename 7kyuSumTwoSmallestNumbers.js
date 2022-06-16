function sumTwoSmallestNumbers(numbers) {  
    //sum of 2 lowest possible numbers
    //sort the numbers so they are in order from low to high
    numbers.sort((a,b) => a - b)
    //then, take the first two in the array and add together
    let result = numbers[0] + numbers[1]
    return result;
  }

  //test sumTwoSmallestNumbers([5, 8, 12, 19, 22]) === 13