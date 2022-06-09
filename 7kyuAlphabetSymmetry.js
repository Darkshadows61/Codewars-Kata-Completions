//7kyu Alphabet Symmetry
function solve(arr){  
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  return arr.map(x => x.toLowerCase().split('').filter((y,i) => i==alpha.indexOf(y)).length);
};
//test solve(["abode","ABc","xyzD"])