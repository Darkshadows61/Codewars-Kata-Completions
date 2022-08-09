//8kyu USD->CNY witha 0.00 fixed decimal
function usdcny(usd) {
    let total = usd * 6.75
    let fixed = total.toFixed(2)
    return `${fixed} Chinese Yuan`
  }
//test usdcny(465)