//7kyu printer error
function printerError(s) {
    let length = s.length;
    const regex = /[n-z]/g;
    let error = Number(s.search(regex))
    return `${length-error}/${length}`
  }
  //test printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz") should equal "3/56"