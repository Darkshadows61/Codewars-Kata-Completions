using System;
using System.Collections.Generic;
using System.Linq;

public class Kata
{
    public static int[] CountPositivesSumNegatives(int[] input)
    {
      int count = 0;
      int sumNeg = 0;
      int[] blank = {};
      
      if (input == null) {
        return blank;
      } else if (input.Length == 0) {
        return blank;
      } else {
        for (int i=0; i<input.Length; i++) {
          if (input[i] > 0) {
            count++;
          }
          if (input[i] < 0) {
            sumNeg += input[i];
          }
        }
      int[] result = {count, sumNeg};
      return result;
    }
      }
}