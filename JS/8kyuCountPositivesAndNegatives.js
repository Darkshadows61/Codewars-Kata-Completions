function countPositivesSumNegatives(input) {
    //count all of the positive numbers in an array
    //sum all the negative numbers in an array
    //0 doesnt count for either
    //return a new array with the positive and negative reuslts
    let positive = 0;
    let negative = [];
    for (i=0; i<input.length; i++) {
        if (input == null || input.length == 0 ) {
            return []
        } else if (input[i] > 0) {
            positive++
        } else if ( input[i] < 0) {
            let iv = 0;
            negative.push(input[i])
            neg = negative.reduce(
                (pv, cv) => pv + cv, iv)
        }
    }
    let result = [positive, neg]
    return result
}

//test countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])