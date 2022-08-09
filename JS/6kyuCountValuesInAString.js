//6kyu count values in a string
function count (string) { 
    let as = 0;
    let bs = 0;
    for (i = 0; i <= string.length; i++) {
      if (string.charAt(i) === 'a') {
        as++;
      } else if (string.charAt(i) === 'b') {
        bs++
      } else if (string === '') {
        return {}
      }
    }
    newArr = (string.split(''));
    return `${newArr[0]}: ${as}, ${newArr[1]}: ${bs}`
  }
//test count('aba')