function invert(array) {
    let array2=[];
    for (i=0;i<array.length;i++) {
        if (array[i] > 0) {
            array2.push(array[i] - (array[i] *2))
        } else if (array[i] < 0) {
            array2.push(array[i] - (array[i]*2))
        } else if (array[i] == 0) {
          array2.push(-0)
        }
    }
        return(array2)
}

//test invert([1,2,3,4,5])