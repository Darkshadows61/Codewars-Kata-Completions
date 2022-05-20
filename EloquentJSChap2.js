//eloquent JS Chap 2 Example 1 # triangle
triangle = (total) => {
    let str = "";
    for (let i = 0; i <= total; i++)
     {console.log(str += "#")}
    }

//eloquent JS Chap 2 Example 2 FizzBuzz
fizzBuzz = () => {
  let start = "";
  for (let i = 1; i <= 100; i++)
   {if (i % 3 === 0 && i % 5 === 0) {
    console.log(i + ' is FizzBuzz')
   } else if (i % 3 === 0) {
     console.log(i +' is Fizz')
   } else if (i % 5 === 0) {
     console.log(i+ ' is Buzz')
   }
  }
} 

//eloquent JS Chap 2 Example 3 chessboard
chess = (grid) => {
  let str = "";
  for (let i = 0; i <= grid; i++) {
    console.log(str += ' # # # # \n# # # #\n')
  }
}

//eloquent JS Chap 3 Example 1 Minimum
//console.log(Math.min(0, 10))
//console.log(Math.min(0, -10))