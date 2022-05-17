//8kyu What Century is it?
function century(year) {
    if (year < 100) {
      return 1
    } else if (year/100 === Math.floor(year/100)) {
      return year/100
    } else {
      return (Math.floor(year/100) +1)
    }
  }
  