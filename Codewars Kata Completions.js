//Codewars Kata Completions


//8kyu Mulitply
function multiply(a, b){
    return a * b
}
//test: multiply(3,4) deep.Equal 12

//8kyu Blood-Alcohol Content Calculator
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

//8kyu Total Pressure Calculation

solution = (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
    let pTotal = ((((givenMass1/molarMass1) + (givenMass2/molarMass2)) * ((0.082 * (temp + 273.15))) / volume))
    return pTotal
   }
   
//test solution(44, 30, 3, 2, 5, 50)  deep.Equal=0.7146511212121212

//8kyu decibel Scale
function dBScale(intensity) {
    let dB = 10 * Math.log10(intensity / (10 ** -12))
    return dB
    }

//test (Math.round(dBScale(Math.pow(10, -11))))

//8kyu Count Sheep in sleep
const countSheep = num => {
    let str = "";
    for (let i = 1; i <= num; i++) {str+=`${i} sheep...`}
    return str
}
//test console.log(countSheep(5))

//8kyu 