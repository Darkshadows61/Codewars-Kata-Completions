//8kyu Bin to Decimel
function binToDec(bin) {
    bin.split('').Number()
    return ((bin[0]* (2**bin.length))+(bin[1]* (2**(bin.length-1)))+(bin[2]* (2**(bin.length-2)))+(bin[3]* (2**(bin.length -3)))+(bin[4]* (2**(bin.length-4)))+(bin[5]* (2**(bin.length-5)))+(bin[6]* (2**(bin.length-6)))+(bin[7]* (2**(bin.length-7))))
  }
  //test binToDec(1001001) === 73 in binary