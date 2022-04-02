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