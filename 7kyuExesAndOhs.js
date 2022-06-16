//7kyu Exes and Ohs
function XO(str) {
    //make string lowercase and split
    let prep = str.toLowerCase().split('')
    //count all x's and o's
    let xs = 0;
    let os = 0;
    prep.forEach(element => {if (element === 'x') {
        xs++
    } else if (element === 'o') {
        os++
    }
})
    //if x = o true, else false
    if (xs === os) {
        return true
    } else {
        return false
    }
}

//test XO(xxxooo)