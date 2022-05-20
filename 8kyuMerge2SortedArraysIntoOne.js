//8kyu Merge 2 sorted arrays into one
function mergeArrays(arr1, arr2) {
    let newArr = arr1.concat(arr2)
    let arrNon =  newArr.sort((a,b) => a-b)
    arrNon = [... new Set(newArr)]
    return arrNon
  }