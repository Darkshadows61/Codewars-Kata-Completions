//8kyu Opposites Attract
lovefunc = (flower1, flower2) => {
    if (flower1 % 2 === 0 && flower2 % 2 != 0){
        return true
    } else if 
        (flower1 % 2 != 0 && flower2 % 2 === 0) {
          return true
    } else if
        (flower1 === 0 && flower2 % 2 != 0) {
          return true
    } else if
        (flower1 === 0 && flower2 === 0) {
          return false
    } else {
          return false
    }
  }
//test lovefunc(1,4) then lovefunc(0,0)