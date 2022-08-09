//7kyu is it an Isogram?
function isIsogram(str) {
    return new Set(str.toUpperCase()).size == str.length
  }
  //test isIsogram("Dermatoglyphics")