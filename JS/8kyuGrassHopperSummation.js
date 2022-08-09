//8kyu Grasshopper Summation
summation = (num) => {
  arr=[];
  for (let i=1; i<=num; i++) {
    if (i<=num) {
      arr.push(i)
    }
  }
  return arr.reduce((pv,cv) => pv + cv, 0)
}
//test summation(10) === 55