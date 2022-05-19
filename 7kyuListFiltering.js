//7kyu List Filtering
function filter_list(l) {
    return l.filter(x => typeof x === 'number')
  }
  //test filter_list([1,2,'aasf','1','123',123])