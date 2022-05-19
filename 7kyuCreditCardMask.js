//Credit Card Mask hide all the digits with # except for the last 4
function maskify(cc) {
    let end = cc.slice(-4)
    let count = cc.slice(0,-4).length
    mask = '#'
    return `${mask.repeat(count)}${end}`
  }
  //test maskify('4556364607935616')