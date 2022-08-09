//7kyu Dropcaps
function dropCap(n) {
    n = n.split(' ');
    for(var i = 0; i < n.length; i++) {
      if(n[i].length > 2) {
        n[i] = n[i].slice(0, 1).toUpperCase() + n[i].slice(1).toLowerCase();
      }
    }
    return n.join(' ');
  }
  //test dropCap('Revelation of the contents outraged American public opinion, and helped generate')