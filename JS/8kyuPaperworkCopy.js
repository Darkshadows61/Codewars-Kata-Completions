function paperwork(n, m) {
    if (n >= 0 && m >= 0) {
      return n * m
    } else if ( n < 0 || m < 0) {
      return 0
    }
  }
  
  //test paperwork(5,5) === 25