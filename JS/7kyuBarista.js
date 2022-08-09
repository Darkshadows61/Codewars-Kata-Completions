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