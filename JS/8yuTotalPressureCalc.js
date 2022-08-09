//8kyu Total Pressure Calculation 3.25.22
solution = (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
    let pTotal = ((((givenMass1/molarMass1) + (givenMass2/molarMass2)) * ((0.082 * (temp + 273.15))) / volume))
    return pTotal
   }
//test solution(44, 30, 3, 2, 5, 50)  deep.Equal=0.7146511212121212