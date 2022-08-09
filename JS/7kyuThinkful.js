//7kyu Thinkful- longest word in a list
function longest(words) {
    newArr = words.map(w => w.length).sort((a,b) => a-b).reverse()
    return newArr[0]
  }
  //test longest(['simple', 'is', 'better', 'than', 'complex']