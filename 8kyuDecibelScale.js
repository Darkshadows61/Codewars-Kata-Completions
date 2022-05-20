//8kyu decibel Scale 3.26.22
function dBScale(intensity) {
    let dB = 10 * Math.log10(intensity / (10 ** -12))
    return dB
    }
//test (Math.round(dBScale(Math.pow(10, -11))))