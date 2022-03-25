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

//8kyu 