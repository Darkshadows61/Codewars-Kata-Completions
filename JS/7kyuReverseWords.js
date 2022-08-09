function reverseWords(str) {
    let result = str.split(' ')
    let result2 = [];
    for (i=0; i<result.length; i++) {
       result2.push(result[i].split('').reverse().join(''))
    }
    return result2.join(' ')
}
//test reverseWords('The quick brown fox jumps over the lazy dog.')