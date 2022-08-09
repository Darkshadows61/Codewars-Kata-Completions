var array1 = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ];

function countSheeps(array1){
    let result = array1.filter(e => e === true);
    return result.length
}

//test countSheeps(array1)