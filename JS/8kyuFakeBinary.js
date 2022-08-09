//8kyu Fake Binary
function fakeBin(x){
    let newX =[];
    x.split('').forEach(e => {
      if (e <=4) {
        newX.push('0')
      } else {
        newX.push('1')
      }
    })
    return newX.join('')
  }
   //test fakeBin('45385593107843568')