//7kyu find the middle character
function getMiddle(s) {
    const even = (s.length % 2 === 0)
    if (even === true) {
      one = s.charAt((s.length / 2) -1)
      two = s.charAt(s.length / 2)
      return one + two
    } else {
      return s.charAt(s.length/2)
    }
  }