function abbrevName(name){
    let names = name.split(' ');
    let ichinama = names[0]
    let ninama = names[1]
    let ichimoji = ichinama[0].toString().toUpperCase()
    let nimoji = ninama[0].toString().toUpperCase()
    return `${ichimoji}.${nimoji}`
  }