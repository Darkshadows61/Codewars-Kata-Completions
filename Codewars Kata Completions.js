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