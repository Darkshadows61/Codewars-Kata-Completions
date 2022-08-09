//7kyu Digits Explosion repeat a value a number of times equal to the value ex. 3 = 333, 7, = 7777777
const explode = s => {
    let arr2 = s.toString().split('').map((e) => e.repeat(+e)).join("")
    return arr2
    }
//test explode(31245)