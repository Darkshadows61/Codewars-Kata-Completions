//8kyu squareSum
function squareSum(numbers) {
    iv = 0;
    result = numbers.map(x => x**2)
    let final = result.reduce((pv, cv) => pv + cv, iv)
    return final
  }