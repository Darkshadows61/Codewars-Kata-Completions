function openOrSenior(data){
    let result = [];
    for (i=0; i<data.length; i++) {
        if (data[i][0] >= 55 && data[i][1] > 7){
            result.push("Senior")
        } else {
            result.push("Open")
        }
    }
    return result
}

  //test openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]])