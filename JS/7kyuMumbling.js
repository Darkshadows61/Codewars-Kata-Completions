//7kyu Mumbling: add a letter to an array index in increasing size. ex zxcvb = zxxcccvvvvbbbbb
function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-')
}
//test accum('ZpglnRxqenU')