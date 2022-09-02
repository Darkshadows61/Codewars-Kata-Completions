//eloquent JS Chap 3 Example 2 Recursion
isEven = (n) => {
    let result;
    if (n % 2 === 0) {
      return 'even'
    } else {
      return 'odd'
    }
    console.log(result)
  }
  
  //eloquent JS Chap 3 Example 3
  countBs = (b) => {
    bs = 0;
    for (i = 0; i < b.length; i++) {
      if (b.charAt(i) === 'B') {
        bs++;
      }
    }
    return(bs)
  }