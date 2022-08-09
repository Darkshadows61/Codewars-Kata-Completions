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