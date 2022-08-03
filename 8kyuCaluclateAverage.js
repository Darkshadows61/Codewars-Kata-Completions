function find_average(array) {
    if (array <= 0) {
      return 0
    } else {
    let total = array.reduce((a,b) => a + b, 0)
    let average = total/array.length
    return average
    }
  }