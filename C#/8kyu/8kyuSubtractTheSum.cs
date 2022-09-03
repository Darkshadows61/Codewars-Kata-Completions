using System;
using System.Linq;

public class Kata
    {
        public static string SubtractSum(int number)
        {
          int[] numArr = number.ToString().Select(o=> Convert.ToInt32(o) - 48 ).ToArray();
          int sum = numArr.Sum();
          int sub = sum -number;
          // after 30 min of figuring out where to go after this, I realized the only possible result was apple.....
          return "apple";
        }
    }