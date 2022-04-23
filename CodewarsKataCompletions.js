//Codewars Kata Completions
//Tom Bisom @Darkshadows61

//8kyu Mulitply 3.24.22
function multiply(a, b){
    return a * b
}
//test: multiply(3,4) deep.Equal 12

//8kyu Blood-Alcohol Content Calculator 3.24.22
//Create a BAC calc that takes in the following parametes, adjusts exquation based on m or f, and uses the drinks obj. 
function bloodAlcoholContent(drinks, weight, sex, time){
    drinks = (drinks.ounces * drinks.abv);
    if (sex === 'female') {
    bac = (drinks * (5.14 / weight) * 0.66) - (.015 * time)
    } else {
    bac = (drinks * (5.14 / weight) * 0.73) - (.015 * time)
    }
bac = (bac.toFixed(4))
return Number(bac)
}
//test: bloodAlcoholContent({ounces:12.5, abv:0.4}, 190, 'female', 1) //deep.Equal 0.0743

//8kyu Total Pressure Calculation 3.25.22
solution = (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
    let pTotal = ((((givenMass1/molarMass1) + (givenMass2/molarMass2)) * ((0.082 * (temp + 273.15))) / volume))
    return pTotal
   }
   
//test solution(44, 30, 3, 2, 5, 50)  deep.Equal=0.7146511212121212

//8kyu decibel Scale 3.26.22
function dBScale(intensity) {
    let dB = 10 * Math.log10(intensity / (10 ** -12))
    return dB
    }

//test (Math.round(dBScale(Math.pow(10, -11))))

//8kyu Count Sheep in sleep 3.27.22
const countSheep = num => {
    let str = "";
    for (let i = 1; i <= num; i++) {str+=`${i} sheep...`}
    return str
}
//test console.log(countSheep(5))

//8kyu Convert a string to an Array 3.27.22
stringToArray = string => {
    const text = (string)
    newArr = text.split(" ");
    return newArr
}
//test console.log(stringToArray("robin singh"))

//8kyu USD->CNY witha 0.00 fixed decimal
function usdcny(usd) {
    let total = usd * 6.75
    let fixed = total.toFixed(2)
    return `${fixed} Chinese Yuan`
  }
//test usdcny(465)

//8kyu Gravity Flip
const flip = (d,a) => {
    if  (d === 'R') {
       arr = (a.sort((a,b) => a-b))
      return arr
    } else if 
    (d === 'L') {
       arr = (a.sort((a,b) => b-a))
      return arr
    }
}
//test flip('R', [3,2,1,2])

//7kyu Digits Explosion repeat a value a number of times equal to the value ex. 3 = 333, 7, = 7777777
const explode = s => {
    let arr2 = s.toString().split('').map((e) => e.repeat(+e)).join("")
    return arr2
    }
//test explode(31245)

//7kyu Mumbling: add a letter to an array index in increasing size. ex zxcvb = zxxcccvvvvbbbbb
function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-')
}
//test accum('ZpglnRxqenU')

//8kyuMerge 2 sorted arrays into one
function mergeArrays(arr1, arr2) {
    let newArr = arr1.concat(arr2)
    let arrNon =  newArr.sort((a,b) => a-b)
    arrNon = [... new Set(newArr)]
    return arrNon
  }

//8kyu Remove First and Last Characters of a String
removeChar = str => {
    return str.slice(1, -1)
}
//test removeChar('eloquent')

//8kyu Opposites Attract
lovefunc = (flower1, flower2) => {
    if (flower1 % 2 === 0 && flower2 % 2 != 0){
        return true
    } else if 
        (flower1 % 2 != 0 && flower2 % 2 === 0) {
          return true
    } else if
        (flower1 === 0 && flower2 % 2 != 0) {
          return true
    } else if
        (flower1 === 0 && flower2 === 0) {
          return false
    } else {
          return false
    }
  }
//test lovefunc(1,4) then lovefunc(0,0)

//8kyu Total Points
function points(games) {
    let total = 0;
    games.map(game => {
      if (game[0] === game[2]) {
        total += 1;
      } else if (game[0] > game[2]) {
        total += 3;
      }
    });
    return total;
  }
//test points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3'])

//8kyu String Repeat
repeatStr = (n,s) => {
  return n.repeat(s)
}
//test repeatStr('X', 10)

//8kyu Array Concat and Sum
function arrayPlusArray(arr1, arr2) {
  let newArr =  arr1.concat(arr2)
  const initial = 0;
  const sum = newArr.reduce((a,t) => a + t,initial)
  return sum
  }
//test arrayPlusArray([1, 2, 3], [4, 5, 6]), 21)

//7kyu Nice Array: if the values in the array are n-1 or n+1, is nice
const isNice = (arr) => {
  if (arr.length <= 0) {
    return false
  }
  const result = arr.every(item => {
    return arr.some(current => {
      return item === current+1 || item === current -1;
    });
  });
  
  console.log("Result:", result);
  return result
}
//test inNice([2,10,9,3], true)

//8kyu Find the first non-consecutive number
firstNonConsecutive = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    const num = arr[i] + 1
    const consecutive = arr[i + 1]
    if (num !== consecutive) return consecutive
    }
  return null
  }
//test firstNonConsecutive([1,2,3,4,6,7,8])

//eloquent JS Chap 2 Example 1 # triangle
triangle = (total) => {
    let str = "";
    for (let i = 0; i <= total; i++)
     {console.log(str += "#")}
    }

//eloquent JS Chap 2 Example 2 FizzBuzz
fizzBuzz = () => {
  let start = "";
  for (let i = 1; i <= 100; i++)
   {if (i % 3 === 0 && i % 5 === 0) {
    console.log(i + ' is FizzBuzz')
   } else if (i % 3 === 0) {
     console.log(i +' is Fizz')
   } else if (i % 5 === 0) {
     console.log(i+ ' is Buzz')
   }
  }
} 

//eloquent JS Chap 2 Example 3 chessboard
chess = (grid) => {
  let str = "";
  for (let i = 0; i <= grid; i++) {
    console.log(str += ' # # # # \n# # # #\n')
  }
}

//eloquent JS Chap 3 Example 1 Minimum
//console.log(Math.min(0, 10))
//console.log(Math.min(0, -10))

//eloquent JS Chap 3 Example 2 Recursion
isEven = (n) => {
  let result;
  if (n % 2 === 0) {
    return 'even'
  } else {
    return 'odd'
  }
  console.log(result)
}

//eloquent JS Chap 3 Example 3
countBs = (b) => {
  bs = 0;
  for (i = 0; i < b.length; i++) {
    if (b.charAt(i) === 'B') {
      bs++;
    }
  }
  return(bs)
}

//8kyu Rock Paper Scissors!
const rps = (p1, p2) => {
  if (p1 === 'rock' && p2 === 'paper') {
    return "Player 2 won!" }
    else if (p1 === 'paper' && p2 === 'scissors') {
      return "Player 2 won!"
    } else if (p1 === 'scissors' && p2 === 'rock') {
      return "Player 2 won!"
    } else if (p1 === p2) {
      return "Draw!"
    } else {
      return "Player 1 won!"
    }
  };

//8kyu Lario and Muigi Pipes; Add 1 to an array value then concatenate. The acutal Kata wanted more than this.
function pipeFix(numbers){
  let newNumbers = numbers.map(x => x + 1)
  return numbers.concat(newNumbers).sort()
}
//test pipeFix([1,3,5,7])

//eloquent JS Chap 4 Example 1 Sum of an Array
range = (start, end) => {
  let newArr = [];
  count = start;
  for (i = 0; i <= end; i++) {
    if (i < ((end+1)-start)) {
      newArr.push(count++)
    }
  }
    let sum = newArr.reduce(
    (previous, current) => previous + current);
    return sum
}
//test range(1,10) should = 55

//eloquent JS Chap 4 Example 2 Reversing an Array
revArr = (arr) => {
return arr.reverse()
}
//test revArr([1,2,3,4,5])

//eloquent JS Chap 4 example 3 A List
arrayToList = (arr) => {
  let list = {
    value: arr[0],
    rest: {
      value: arr[1],
      rest: {
        value: arr[2],
        rest: null
      }
    }
  }
  return list
}

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

//eloquent JS Chap 4 Example 4 Deep Comparison
const obj1 = {
a: 1,
b: 'got item',
}
const obj2 = {
  a: 1,
  b: 'got item',
}
const obj3 = {
  a: 2,
  b: 'got item',
}
const obj4 = {
  a: 1,
  b: 'got items'
}
deepEqual = (x,y) => {
  if (x.a === y.a) {
return "True"
  } else if (x.a != y.a) {
    return "False"
  } else if (x.b === y.b) {
    return "True"
  } else if (x.b != y.b) {
    return "False"
  } else {
    return null
  }
}

//7kyu descending order string
function descendingOrder(n){
  newArr = n.toString().split('').sort().reverse().join('')
  return Number(newArr)
}
//test descendingOrder(123465) = 654321

//7kyu disemvowel- remove vowels from a string
disemvowel = (str) => {
 return str.replace(/A|E|I|O|U|a|e|i|o|u/g, '') 
}

//7kyu find the middle character
function getMiddle(s) {
  const even = (s.length % 2 === 0)
  if (even === true) {
    one = s.charAt((s.length / 2) -1)
    two = s.charAt(s.length / 2)
    return one + two
  } else {
    return s.charAt(s.length/2)
  }
}

//7kyu shortest word
function findShort(s) {
  let word = s.split(" ")
  let min = word.map(word => word.length).sort((a,b) => a-b)
  return min[0]
}
//test findShort('bitcoin may small after all) returns 3

//8kyu How good are you really?
function betterThanAverage(classPoints, yourPoints) {
classSum = classPoints.reduce((pVal, cVal) => pVal + cVal)
classAvg = classSum/(classPoints.length);
 if (classAvg > yourPoints) {
   return false
 } else {
   return true
 }
}
//test 

//7kyu array Adder
function arrAdder(arr) {
  sent = "";
  for (i = 0; i < arr[0].length; i++) {
    for ( j = 0; j < arr.length; j++) {
      sent+=arr[j][i]
    }
    sent+=" ";
  }
  return sent.trim()
}
// test arrAdder([['J','L','L','M'],['u','i','i','a'],['s','v','f','n'],['t','e','e','']])

//7kyu Square Every Digit
function squareDigits(num) {
  let numSQ = num.toString().split('').map(x => x**2).join('')
  return Number(numSQ)
}
//test squareDigits(3212)

//7kyu Thinkful- longest word in a list
function longest(words) {
  newArr = words.map(w => w.length).sort((a,b) => a-b).reverse()
  return newArr[0]
}
//test longest(['simple', 'is', 'better', 'than', 'complex']

//7kyu Dropcaps
function dropCap(n) {
  n = n.split(' ');
  for(var i = 0; i < n.length; i++) {
    if(n[i].length > 2) {
      n[i] = n[i].slice(0, 1).toUpperCase() + n[i].slice(1).toLowerCase();
    }
  }
  return n.join(' ');
}
//test dropCap('Revelation of the contents outraged American public opinion, and helped generate')

//Credit Card Mask hide all the digits with # except for the last 4
function maskify(cc) {
  let end = cc.slice(-4)
  let count = cc.slice(0,-4).length
  mask = '#'
  return `${mask.repeat(count)}${end}`
}
//test maskify('4556364607935616')

//7kyu printer error
function printerError(s) {
  let length = s.length;
  const regex = /[n-z]/g;
  let error = Number(s.search(regex))
  return `${length-error}/${length}`
}
//test printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz") should equal "3/56"

//7kyu Filter Unused Digits
const unusedDigits = (...arr) => {
  var digits = arr.join();

  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    .filter(x => !digits.includes(x))
    .join('');
};
//test unusedDigits(12, 34, 56, 78)

//8kyu squareSum
function squareSum(numbers) {
  iv = 0;
  result = numbers.map(x => x**2)
  let final = result.reduce((pv, cv) => pv + cv, iv)
  return final
}

//7kyu give change
function giveChange(amount) {
  v100 = (Math.trunc(amount / 100))
  amountRemain = (amount - (v100*100))
  v50 = (Math.trunc(amountRemain / 50))
  amountRemain = (amountRemain - (v50*50))
  v20 = (Math.trunc(amountRemain / 20))
  amountRemain = (amountRemain - (v20*20))
  v10 = (Math.trunc(amountRemain / 10))
  amountRemain = (amountRemain - (v10*10))
  v5 = (Math.trunc(amountRemain / 5))
  amountRemain = (amountRemain - (v5*5))
  v1 = (Math.trunc(amountRemain / 1))
  amountRemain = (amountRemain - (v1*1))
  changeArr = [v1,v5,v10,v20,v50,v100];
  return changeArr
}
//this could 100% be made smaller and more complex, but it works.
//test giveChange(365) should output [0,1,1,0,1,3]

//7kyu Alphabet Symmetry
function solve(arr){  
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  return arr.map(x => x.toLowerCase().split('').filter((y,i) => i==alpha.indexOf(y)).length);
};
//test solve(["abode","ABc","xyzD"])

//7kyu You're a square!
function isSquare(n) {
  if (n < 0) {
    return false //`${n}: Negative numbers cannot be square numbers`
  } else if (Number.isInteger(Math.sqrt(n))) {
    return true //`${n} is a square number (${n} * ${n})`
  } else {
    return false //`${n} is not a square number`
  }
}
//test isSquare(25), true

//8kyu to square or not to square
function squareOrSquareRoot(array) {
  let arr = array
  for (i = 0; i < array.length; i++){
    if (Number.isInteger(Math.sqrt(arr[i])) ){
      arr[i] = Math.sqrt(arr[i])
    } 
    else {
      arr[i] = arr[i] * arr[i] 
    }
  } return arr;  
}
//test squareOrSquareRoot([ 4, 3, 9, 7, 2, 1 ])

//7kyu barista
function barista(coffees){
  coffees.sort((a,b)=> a-b)
  return coffees.reduce((acc, cookTime, i) => acc + cookTime * (coffees.length-i) + 2*i, 0)
}
//test barista([2,10,5,3,9])

function tester () {
let test = ['11','22','33','44','55','66','77','88','99','00']
chance = test.map(t => t[0])
return chance.join('')
}


//test for reduce
const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of the accumulator: ', accumulator)
  console.log('The value of the currentValue: ', currentValue)
  return accumulator + currentValue
});

//8kyu remove string spaces
function noSpace(x) {
  return x.split(' ').filter(x => x.length>0).join('')
}

//test noSpace('8 j 8   mBliB8g  imjB8B8  jl  B')

//7kyu List Filtering
function filter_list(l) {
  return l.filter(x => typeof x === 'number')
}

//test filter_list([1,2,'aasf','1','123',123])

//8kyu Keep Hydrated
function litres(time) {
  return Math.floor(time/2)
}
//test litres(11.8) === 5

//7kyu Jaden Casing
String.prototype.toJadenCase = function () { 
  return this.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}
//test str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real")

//8kyu string to number
var stringToNumber = function(str){
  return Number(str)
}
//test str('1234')

//7kyu Beginner Series Sum of Numbers
function getSum (a,b) {
  let min = Math.min(a,b)
  let max = Math.max(a,b)
  return (max - min + 1) * (min + max) / 2;
}
//test getSum(5,0) === 15

//6kyu Create Phone Number
function createPhoneNumber(numbers) {
  return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
}
//test createPhoneNumber([1,2,3,4,5,6,7,8,9,0]) === (123) 456-7890

//